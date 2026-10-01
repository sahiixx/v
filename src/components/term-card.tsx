import { Link } from "@tanstack/react-router";
import { CATEGORY_BY_ID } from "@/data/taxonomy";
import type { Term } from "@/lib/glossary";
import { StatusList } from "@/components/status-badge";
import { cn } from "@/lib/utils";

export function TermCard({
  term,
  compact = false,
  className,
}: {
  term: Term;
  compact?: boolean;
  className?: string;
}) {
  const category = CATEGORY_BY_ID[term.category];
  return (
    <Link
      to="/term/$slug"
      params={{ slug: term.slug }}
      className={cn(
        "group pressable block rounded-lg bg-bg-elevated p-5 shadow-hairline transition-[box-shadow,background-color] hover:bg-bg-subtle hover:shadow-hairline-hover",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-medium tracking-tight text-fg group-hover:text-accent">
          {term.term}
        </h3>
        <span className="shrink-0 font-mono text-xs tracking-wide text-subtle uppercase">{category.name}</span>
      </div>
      {compact ? null : <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{term.definition}</p>}
      {term.status.length ? (
        <div className="mt-3">
          <StatusList statuses={term.status} />
        </div>
      ) : null}
    </Link>
  );
}
