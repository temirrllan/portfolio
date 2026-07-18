import type { ReactNode } from "react";

export function Section({
  id,
  heading,
  children,
}: {
  id?: string;
  heading: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-10">
      <h2 className="text-2xl font-medium">{heading}</h2>
      <div className="mt-4 border-t border-border pt-6">{children}</div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}

export function StatusDot({ pulse = false }: { pulse?: boolean }) {
  return (
    <span className="relative flex h-2 w-2">
      {pulse && (
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
      )}
      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
    </span>
  );
}

/** A two-column list row: title on the left, meta on the right, with a divider. */
export function Row({
  title,
  subtitle,
  meta,
}: {
  title: string;
  subtitle?: string;
  meta?: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-t border-border py-5 first:border-t-0 first:pt-0">
      <div>
        <div className="text-foreground">{title}</div>
        {subtitle && (
          <div className="mt-1 font-mono text-sm text-muted">{subtitle}</div>
        )}
      </div>
      {meta && (
        <div className="shrink-0 pt-0.5 font-mono text-sm text-muted">{meta}</div>
      )}
    </div>
  );
}
