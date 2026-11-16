/**
 * The question paper as a Word (.docx) file, with the maths as real, editable
 * Word equations.
 *
 * Maths goes LaTeX → MathML (KaTeX) → Word's OMML (mathml2omml). The document
 * itself is written directly as WordprocessingML and zipped here, so no
 * other library is needed. Layout follows the PDF: header, instructions,
 * section banners, numbered questions with marks at the right margin, options
 * in columns, a centred OR, and an optional marking scheme on new pages.
 */
import katex from 'katex';
import { mml2omml } from 'mathml2omml';
import { splitMath } from '@/shared/MathText';
import { columns, duration, label, paperPlan } from '../components/ExamPaper';
import type { LayoutSection, Question } from './types';

type Q = Omit<Question, 'section' | 'alternate'>;
export type DocxInput = {
  title: string; eyebrow?: string; durationMins: number;
  questions: Question[]; layout?: LayoutSection[] | null; includeAnswers?: boolean;
};

const TEXT_W = 10318;            // A4 less 14 mm side margins, in twips
const IND = 567;                 // 1 cm: question-number column
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ── maths ─────────────────────────────────────────────────────────────── */

function omml(latex: string): string | null {
  try {
    const html = katex.renderToString(latex, { output: 'mathml', throwOnError: false, strict: 'ignore' });
    const m = html.match(/<math[\s\S]*<\/math>/);
    if (!m) return null;
    const mathml = m[0].replace(/<annotation[\s\S]*?<\/annotation>/g, '');
    // mathml2omml writes decoded text (a literal "<" in "x<1") straight into the XML; escape it.
    return mml2omml(mathml)
      .replace(/<m:sty m:val="undefined"\/>/g, '')
      .replace(/(<m:t(?:\s[^>]*)?>)([^]*?)(<\/m:t>)/g, (_all, open: string, txt: string, close: string) =>
        open + txt.replace(/&(?!(?:amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + close);
  } catch {
    return null;
  }
}

type Fmt = { b?: boolean; i?: boolean; sz?: number; color?: string };
const rpr = (f: Fmt = {}) => {
  const x = (f.b ? '<w:b/>' : '') + (f.i ? '<w:i/>' : '') + (f.color ? `<w:color w:val="${f.color}"/>` : '') + (f.sz ? `<w:sz w:val="${f.sz}"/>` : '');
  return x ? `<w:rPr>${x}</w:rPr>` : '';
};

function textRun(t: string, f?: Fmt) {
  return t.split('\n').map((line, i) =>
    `${i ? '<w:r><w:br/></w:r>' : ''}${line ? `<w:r>${rpr(f)}<w:t xml:space="preserve">${esc(line)}</w:t></w:r>` : ''}`).join('');
}

/** Text with $…$ maths as paragraph content. */
function runs(text: string, f?: Fmt): string {
  return splitMath(text).map((p) => {
    if (p.kind === 'text') return textRun(p.value, f);
    const x = omml(p.value);
    if (!x) return textRun(p.value, f);
    return p.kind === 'display' ? `<m:oMathPara>${x}</m:oMathPara>` : x;
  }).join('');
}

/* ── paragraphs and tables ─────────────────────────────────────────────── */

type POpts = {
  jc?: 'center' | 'right'; left?: number; hanging?: number; before?: number; after?: number;
  tabs?: { pos: number; val?: 'right' | 'left'; leader?: 'underscore' }[];
  keepNext?: boolean; keepLines?: boolean; pageBreakBefore?: boolean; borders?: ('top' | 'bottom' | 'doubleBottom')[];
};
function para(content: string, o: POpts = {}) {
  const b = (o.borders ?? []).map((k) =>
    k === 'top' ? '<w:top w:val="single" w:sz="6" w:space="2" w:color="111111"/>'
    : k === 'bottom' ? '<w:bottom w:val="single" w:sz="6" w:space="2" w:color="111111"/>'
    : '<w:bottom w:val="double" w:sz="6" w:space="4" w:color="111111"/>').join('');
  const ppr =
    (o.keepNext ? '<w:keepNext/>' : '') + (o.keepLines ? '<w:keepLines/>' : '') + (o.pageBreakBefore ? '<w:pageBreakBefore/>' : '') +
    (b ? `<w:pBdr>${b}</w:pBdr>` : '') +
    (o.tabs ? `<w:tabs>${o.tabs.map((t) => `<w:tab w:val="${t.val ?? 'left'}"${t.leader ? ` w:leader="${t.leader}"` : ''} w:pos="${t.pos}"/>`).join('')}</w:tabs>` : '') +
    `<w:spacing w:before="${o.before ?? 0}" w:after="${o.after ?? 60}"/>` +
    (o.left != null || o.hanging != null ? `<w:ind w:left="${o.left ?? 0}"${o.hanging ? ` w:hanging="${o.hanging}"` : ''}/>` : '') +
    (o.jc ? `<w:jc w:val="${o.jc}"/>` : '');
  return `<w:p><w:pPr>${ppr}</w:pPr>${content}</w:p>`;
}
const tab = '<w:r><w:tab/></w:r>';
const bold = (t: string, f: Fmt = {}) => textRun(t, { ...f, b: true });
const marksRun = (n: number) => `${tab}${bold(`[${n}]`)}`;

function table(rows: string[][], widths: number[], opts: { borders?: boolean; indent?: number; center?: boolean } = {}) {
  const line = opts.borders ? 'single' : 'nil';
  const bd = (k: string) => `<w:${k} w:val="${line}" w:sz="4" w:space="0" w:color="111111"/>`;
  return `<w:tbl><w:tblPr><w:tblW w:w="${widths.reduce((a, b) => a + b, 0)}" w:type="dxa"/>` +
    (opts.center ? '<w:jc w:val="center"/>' : opts.indent ? `<w:tblInd w:w="${opts.indent}" w:type="dxa"/>` : '') +
    `<w:tblBorders>${['top', 'left', 'bottom', 'right', 'insideH', 'insideV'].map(bd).join('')}</w:tblBorders>` +
    `<w:tblLayout w:type="fixed"/><w:tblCellMar><w:left w:w="60" w:type="dxa"/><w:right w:w="60" w:type="dxa"/></w:tblCellMar></w:tblPr>` +
    `<w:tblGrid>${widths.map((w) => `<w:gridCol w:w="${w}"/>`).join('')}</w:tblGrid>` +
    rows.map((r) => `<w:tr><w:trPr><w:cantSplit/></w:trPr>${r.map((c, i) => `<w:tc><w:tcPr><w:tcW w:w="${widths[i]}" w:type="dxa"/></w:tcPr>${c}</w:tc>`).join('')}</w:tr>`).join('') +
    '</w:tbl>';
}

/* ── figures: SVG → PNG → inline picture ───────────────────────────────── */

type Media = { name: string; data: Uint8Array };
type Ctx = { media: Media[]; rels: string[] };

async function figure(q: Q, ctx: Ctx): Promise<string> {
  if (!q.figureSvg) return '';
  try {
    const img = new Image();
    await new Promise<void>((res, rej) => { img.onload = () => res(); img.onerror = () => rej(new Error('figure')); img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(q.figureSvg!)}`; });
    const nw = img.naturalWidth || 400, nh = img.naturalHeight || 300;
    const k = Math.min(1, (55 / 25.4 * 96) / nh, (120 / 25.4 * 96) / nw);      // at most 55 mm tall, 120 mm wide
    const wpx = Math.round(nw * k), hpx = Math.round(nh * k);
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(nw * 3); canvas.height = Math.round(nh * 3);
    const c = canvas.getContext('2d')!;
    c.fillStyle = '#fff'; c.fillRect(0, 0, canvas.width, canvas.height);
    c.drawImage(img, 0, 0, canvas.width, canvas.height);
    const blob: Blob = await new Promise((res, rej) => canvas.toBlob((b) => (b ? res(b) : rej(new Error('png'))), 'image/png'));
    const n = ctx.media.length + 1;
    ctx.media.push({ name: `image${n}.png`, data: new Uint8Array(await blob.arrayBuffer()) });
    ctx.rels.push(`<Relationship Id="rIdImg${n}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/image${n}.png"/>`);
    const cx = wpx * 9525, cy = hpx * 9525;
    const alt = esc(q.figureAlt || 'Figure');
    return para(
      `<w:r><w:drawing><wp:inline distT="0" distB="0" distL="0" distR="0"><wp:extent cx="${cx}" cy="${cy}"/><wp:docPr id="${n}" name="Figure ${n}" descr="${alt}"/>` +
      `<a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture">` +
      `<pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:nvPicPr><pic:cNvPr id="${n}" name="image${n}.png" descr="${alt}"/><pic:cNvPicPr/></pic:nvPicPr>` +
      `<pic:blipFill><a:blip r:embed="rIdImg${n}"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill>` +
      `<pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="${cx}" cy="${cy}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic>` +
      `</a:graphicData></a:graphic></wp:inline></w:drawing></w:r>`, { left: IND, keepNext: true });
  } catch {
    return '';
  }
}

/* ── the paper ─────────────────────────────────────────────────────────── */

async function body(q: Q, number: number | undefined, ctx: Ctx): Promise<string> {
  const out: string[] = [];
  const num = number != null ? `${number}.` : '';
  out.push(para(
    `${bold(num)}${tab}${runs(q.text)}${marksRun(q.marks)}`,
    { left: IND, hanging: IND, tabs: [{ pos: TEXT_W, val: 'right' }], keepNext: !!(q.options || q.parts), before: 120 }));
  out.push(await figure(q, ctx));
  if (q.options) {
    const cols = { c4: 4, c2: 2, c1: 1 }[columns(q.options)];
    const w = Math.floor((TEXT_W - IND) / cols);
    const cells = q.options.map((o, i) => para(`${bold(`(${String.fromCharCode(65 + i)})`)}${tab}${runs(String(o))}`, { left: 454, hanging: 454, after: 20, keepLines: true, tabs: [{ pos: 454 }] }));
    const rows: string[][] = [];
    for (let i = 0; i < cells.length; i += cols) {
      const row = cells.slice(i, i + cols);
      while (row.length < cols) row.push(para('', { after: 0 }));
      rows.push(row);
    }
    out.push(table(rows, Array(cols).fill(w), { indent: IND }));
  }
  for (const p of q.parts ?? []) {
    out.push(para(`${textRun(label(p.label))}${tab}${runs(p.text)}${marksRun(p.marks)}`,
      { left: IND * 2, hanging: IND, tabs: [{ pos: TEXT_W, val: 'right' }], after: 40 }));
  }
  return out.join('');
}

const orLine = (indent = IND) => para(bold('— OR —'), { jc: 'center', before: 80, after: 80, left: indent, keepNext: true });

function answer(q: Q): string {
  const out: string[] = [];
  if (q.answer) out.push(para(runs(q.answer, { sz: 20 }), { after: 40 }));
  for (const p of q.parts ?? []) if (p.answer) out.push(para(`${bold(label(p.label), { sz: 20 })} ${runs(p.answer, { sz: 20 })}`, { after: 40 }));
  for (const m of q.markingSteps ?? []) {
    out.push(para(`${runs(m.step, { sz: 20 })}${tab}${bold(String(m.marks), { sz: 20 })}`, { left: 0, tabs: [{ pos: TEXT_W, val: 'right' }], after: 10 }));
  }
  return out.join('');
}

export async function buildExamDocx(input: DocxInput): Promise<Blob> {
  const { total, numbered, instructions } = paperPlan(input.questions);
  const ctx: Ctx = { media: [], rels: [] };
  const out: string[] = [];

  // Header
  if (input.eyebrow) out.push(para(bold(input.eyebrow.toUpperCase(), { sz: 19 }), { jc: 'center', after: 40 }));
  out.push(para(bold(input.title, { sz: 34 }), { jc: 'center', after: 100 }));
  out.push(para(`${bold(`Time allowed: ${duration(input.durationMins)}`)}${tab}${bold(`Maximum marks: ${total}`)}`, { tabs: [{ pos: TEXT_W, val: 'right' }], after: 160 }));
  out.push(para(
    `${textRun('Name')}<w:r><w:tab/></w:r>${textRun('  Roll no.')}<w:r><w:tab/></w:r>${textRun('  Date')}<w:r><w:tab/></w:r>`,
    { tabs: [{ pos: 4700, leader: 'underscore' }, { pos: 7500, leader: 'underscore' }, { pos: TEXT_W, leader: 'underscore' }], borders: ['doubleBottom'], after: 160 }));

  // General instructions
  out.push(para(bold('GENERAL INSTRUCTIONS', { sz: 21 }), { before: 80, after: 60, keepNext: true }));
  instructions.forEach((t, i) => out.push(para(`${textRun(`${i + 1}.`)}${tab}${textRun(t, { sz: 20 })}`, { left: 454, hanging: 454, after: 30, tabs: [{ pos: 454 }] })));
  const rows = [['Section', 'Questions', 'Marks each', 'Marks'].map((h) => para(bold(h, { sz: 19 }), { jc: 'center', after: 0 }))];
  for (const s of numbered) {
    const each = [...new Set(s.qs.map((q) => q.marks))].join(' / ');
    rows.push([s.title.replace(/^Section\s+/i, ''), String(s.qs.length), each, String(s.qs.reduce((x, q) => x + q.marks, 0))].map((c) => para(textRun(c, { sz: 19 }), { jc: 'center', after: 0 })));
  }
  out.push(table(rows, [1400, 1500, 1600, 1200], { borders: true, indent: 454 }));
  out.push(para('', { after: 60 }));

  // Sections
  for (const s of numbered) {
    const note = input.layout?.find((l) => l.title === s.title)?.note;
    out.push(para(bold(s.title.replace(/^Section\s+/i, 'Section – ').toUpperCase(), { sz: 24 }), { jc: 'center', before: 200, after: 40, borders: ['top', 'bottom'], keepNext: true }));
    out.push(para(textRun(`${note ? `${note} ` : ''}(${s.qs.length} question${s.qs.length === 1 ? '' : 's'}, ${s.qs.reduce((x, q) => x + q.marks, 0)} marks)`, { i: true, sz: 19, color: '555555' }), { jc: 'center', after: 100, keepNext: true }));
    for (const { q, n } of s.items) {
      out.push(await body(q, n, ctx));
      if (q.alternate) { out.push(orLine()); out.push(await body(q.alternate, undefined, ctx)); }
    }
  }
  out.push(para(bold('— End of question paper —'), { jc: 'center', before: 300 }));

  // Marking scheme
  if (input.includeAnswers) {
    out.push(para(bold('MARKING SCHEME', { sz: 24 }), { jc: 'center', pageBreakBefore: true, after: 40, borders: ['top', 'bottom'] }));
    out.push(para(textRun('For the teacher. Accept any other correct method and award marks accordingly.', { i: true, sz: 19, color: '555555' }), { jc: 'center', after: 120 }));
    for (const { q, n } of numbered.flatMap((s) => s.items)) {
      out.push(para(`${bold(`${n}.`)}${tab}${bold(`[${q.marks}]`)}`, { tabs: [{ pos: TEXT_W, val: 'right' }], before: 100, after: 20, keepNext: true }));
      out.push(answer(q));
      if (q.alternate) { out.push(orLine(0)); out.push(answer(q.alternate)); }
    }
  }

  return zip(parts(out.join(''), ctx));
}

/* ── package ───────────────────────────────────────────────────────────── */

const NS =
  'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ' +
  'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" ' +
  'xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" ' +
  'xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" ' +
  'xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" ' +
  'xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"';
const XML = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';

function parts(bodyXml: string, ctx: Ctx): { name: string; data: Uint8Array }[] {
  const enc = new TextEncoder();
  const f = (name: string, xml: string) => ({ name, data: enc.encode(XML + xml) });
  return [
    f('[Content_Types].xml',
      '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Default Extension="png" ContentType="image/png"/>' +
      '<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>' +
      '<Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>' +
      '<Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/></Types>'),
    f('_rels/.rels', '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>'),
    f('word/_rels/document.xml.rels',
      '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
      '<Relationship Id="rIdStyles" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>' +
      '<Relationship Id="rIdFooter" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer1.xml"/>' +
      `${ctx.rels.join('')}</Relationships>`),
    f('word/styles.xml',
      `<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman" w:eastAsia="Times New Roman"/><w:sz w:val="21"/><w:szCs w:val="21"/><w:lang w:val="en-IN"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="60" w:line="276" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/></w:style></w:styles>`),
    f('word/footer1.xml',
      `<w:ftr ${NS}><w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:rPr><w:sz w:val="18"/></w:rPr><w:t xml:space="preserve">Page </w:t></w:r><w:fldSimple w:instr=" PAGE "><w:r><w:rPr><w:sz w:val="18"/></w:rPr><w:t>1</w:t></w:r></w:fldSimple><w:r><w:rPr><w:sz w:val="18"/></w:rPr><w:t xml:space="preserve"> of </w:t></w:r><w:fldSimple w:instr=" NUMPAGES "><w:r><w:rPr><w:sz w:val="18"/></w:rPr><w:t>1</w:t></w:r></w:fldSimple></w:p></w:ftr>`),
    f('word/document.xml',
      `<w:document ${NS}><w:body>${bodyXml}<w:sectPr><w:footerReference w:type="default" r:id="rIdFooter"/><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="850" w:right="794" w:bottom="964" w:left="794" w:header="500" w:footer="450" w:gutter="0"/></w:sectPr></w:body></w:document>`),
    ...ctx.media.map((m) => ({ name: `word/media/${m.name}`, data: m.data })),
  ];
}

/* A .docx is a zip. Entries are stored uncompressed, which Word reads fine. */

const CRC = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; }
  return t;
})();
const crc32 = (d: Uint8Array) => { let c = 0xffffffff; for (let i = 0; i < d.length; i++) c = CRC[(c ^ d[i]) & 0xff] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; };

function zip(files: { name: string; data: Uint8Array }[]): Blob {
  const enc = new TextEncoder();
  const chunks: Uint8Array[] = [];
  const central: Uint8Array[] = [];
  let offset = 0;
  const u16 = (v: DataView, o: number, n: number) => v.setUint16(o, n, true);
  const u32 = (v: DataView, o: number, n: number) => v.setUint32(o, n, true);
  for (const f of files) {
    const name = enc.encode(f.name), crc = crc32(f.data), size = f.data.length;
    const local = new DataView(new ArrayBuffer(30));
    u32(local, 0, 0x04034b50); u16(local, 4, 20); u16(local, 6, 0x0800); u16(local, 8, 0); u16(local, 10, 0); u16(local, 12, 0x21);
    u32(local, 14, crc); u32(local, 18, size); u32(local, 22, size); u16(local, 26, name.length); u16(local, 28, 0);
    chunks.push(new Uint8Array(local.buffer), name, f.data);
    const cen = new DataView(new ArrayBuffer(46));
    u32(cen, 0, 0x02014b50); u16(cen, 4, 20); u16(cen, 6, 20); u16(cen, 8, 0x0800); u16(cen, 10, 0); u16(cen, 12, 0); u16(cen, 14, 0x21);
    u32(cen, 16, crc); u32(cen, 20, size); u32(cen, 24, size); u16(cen, 28, name.length); u16(cen, 30, 0); u16(cen, 32, 0); u16(cen, 34, 0); u16(cen, 36, 0); u32(cen, 38, 0); u32(cen, 42, offset);
    central.push(new Uint8Array(cen.buffer), name);
    offset += 30 + name.length + size;
  }
  const cenSize = central.reduce((n, c) => n + c.length, 0);
  const end = new DataView(new ArrayBuffer(22));
  u32(end, 0, 0x06054b50); u16(end, 8, files.length); u16(end, 10, files.length); u32(end, 12, cenSize); u32(end, 16, offset);
  return new Blob([...chunks, ...central, new Uint8Array(end.buffer)] as BlobPart[], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
}
