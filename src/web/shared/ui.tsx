/**
 * Shared look, taken from the admin console: soft cards, tinted icon chips,
 * a bold page title with a small label above it. Teacher pages use the same
 * pieces so the whole app reads as one product.
 */
import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

/** Soft card: no hard border, a gentle lift. */
export const CARD =
  'rounded-[20px] bg-card shadow-[0_1px_2px_rgba(15,23,51,0.04),0_10px_24px_-14px_rgba(15,23,51,0.14)] ring-1 ring-border/60 dark:ring-border';

export type Tone = 'blue' | 'red' | 'green' | 'purple' | 'amber';
export const TONE: Record<Tone, string> = {
  blue: 'text-primary bg-primary/10',
  red: 'text-destructive bg-destructive/10',
  green: 'text-success bg-success/10',
  purple: 'text-[oklch(0.52_0.2_295)] bg-[oklch(0.52_0.2_295/0.1)] dark:text-[oklch(0.75_0.15_295)]',
  amber: 'text-warning bg-warning/15',
};

export function IconChip({ icon: Icon, tone = 'blue', className = 'size-10 rounded-[14px]' }: { icon: LucideIcon; tone?: Tone; className?: string }) {
  return (
    <span className={`grid shrink-0 place-items-center ${TONE[tone]} ${className}`}>
      <Icon className="size-[18px]" aria-hidden />
    </span>
  );
}

/** Title block every signed-in page opens with. */
export function PageHeader({ eyebrow, title, description, actions }: { eyebrow?: ReactNode; title: string; description?: ReactNode; actions?: ReactNode }) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between md:mb-8">
      <div className="min-w-0 space-y-1">
        {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">{eyebrow}</p>}
        <h1 className="text-[28px] font-extrabold leading-tight tracking-[-0.03em] sm:text-3xl">{title}</h1>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
      {actions && <div className="flex shrink-0 flex-wrap gap-2">{actions}</div>}
    </div>
  );
}

/** One number card. */
export function Stat({ label, value, sub, icon, tone = 'blue' }: { label: string; value: string | number; sub?: string; icon: LucideIcon; tone?: Tone }) {
  const Icon = icon;
  return (
    <span className="block min-w-0">
      <span className="flex items-center justify-between gap-2">
        <span className="truncate text-xs font-semibold text-muted-foreground">{label}</span>
        <span className={`grid size-8 shrink-0 place-items-center rounded-xl ${TONE[tone]}`}><Icon className="size-4" aria-hidden /></span>
      </span>
      <span className="mt-2 block text-[26px] font-extrabold leading-tight tracking-[-0.03em] tabular-nums sm:text-3xl">{value}</span>
      {sub && <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">{sub}</span>}
    </span>
  );
}
