/**
 * One-off: copies every row from the old SQLite file (prisma/dev.db) into the
 * Postgres database DATABASE_URL points at, using the Prisma schema to convert
 * values (0/1 to booleans, epoch milliseconds to dates, JSON text to JSON).
 * The target tables must exist and be empty (npx prisma db push first).
 *   npx tsx scripts/sqlite-to-postgres.ts [path/to/dev.db]
 */
import 'dotenv/config';
import { execFileSync } from 'node:child_process';
import { Prisma, PrismaClient } from '@prisma/client';

const file = process.argv[2] ?? 'prisma/dev.db';
const prisma = new PrismaClient();
const models = Prisma.dmmf.datamodel.models;

const rowsOf = (table: string): Record<string, unknown>[] => {
  const out = execFileSync('sqlite3', ['-json', file, `select * from "${table}"`], { maxBuffer: 1 << 30 }).toString();
  return out.trim() ? JSON.parse(out) : [];
};

const convert = (model: (typeof models)[number], row: Record<string, unknown>) => {
  const data: Record<string, unknown> = {};
  for (const f of model.fields) {
    if (f.kind === 'object') continue;
    const column = f.dbName ?? f.name;
    if (!(column in row)) continue;
    const v = row[column];
    if (v === null || v === undefined) { data[f.name] = f.type === 'Json' ? Prisma.DbNull : null; continue; }
    if (f.type === 'Boolean') data[f.name] = v === 1 || v === true || v === '1';
    else if (f.type === 'DateTime') data[f.name] = new Date(typeof v === 'number' ? v : /^\d+$/.test(String(v)) ? Number(v) : String(v));
    else if (f.type === 'Json') data[f.name] = typeof v === 'string' ? JSON.parse(v) : v;
    else if (f.type === 'Int') data[f.name] = Number(v);
    else data[f.name] = v;
  }
  return data;
};

// Parents before children: order models so every required relation's target comes first.
function order() {
  const done: string[] = [];
  const deps = new Map(models.map((m) => [m.name, new Set(m.fields.filter((f) => f.kind === 'object' && f.relationFromFields?.length && f.type !== m.name).map((f) => f.type))]));
  while (done.length < models.length) {
    const next = models.find((m) => !done.includes(m.name) && [...deps.get(m.name)!].every((d) => done.includes(d)));
    if (!next) throw new Error('relation cycle between models');
    done.push(next.name);
  }
  return done.map((n) => models.find((m) => m.name === n)!);
}

async function main() {
  for (const model of order()) {
    const table = model.dbName ?? model.name;
    let rows = rowsOf(table);
    // Self-references (a curriculum node's parent): insert in depth order.
    const self = model.fields.find((f) => f.kind === 'object' && f.type === model.name && f.relationFromFields?.length);
    if (self) {
      const key = self.relationFromFields![0];
      const col = model.fields.find((f) => f.name === key)!.dbName ?? key;
      const byId = new Map(rows.map((r) => [r.id, r]));
      const depth = (r: Record<string, unknown>): number => (r[col] && byId.has(r[col]) ? 1 + depth(byId.get(r[col])!) : 0);
      rows = rows.sort((a, b) => depth(a) - depth(b));
    }
    const delegate = (prisma as any)[model.name.charAt(0).toLowerCase() + model.name.slice(1)];
    const data = rows.map((r) => convert(model, r));
    for (let i = 0; i < data.length; i += 500) await delegate.createMany({ data: data.slice(i, i + 500) });
    const count = await delegate.count();
    console.log(`${model.name.padEnd(18)} sqlite ${String(rows.length).padStart(5)}  postgres ${String(count).padStart(5)}${count === rows.length ? '' : '  MISMATCH'}`);
  }
}

main().then(() => prisma.$disconnect()).catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
