import type { ReactNode } from "react";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

export function PageHeader({
  kicker,
  title,
  description,
  actions,
  className,
}: {
  kicker?: ReactNode;
  title: string;
  description?: ReactNode;
  actions?: ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("border-b border-border py-10 sm:py-14", className)}>
      <Container>
        {kicker ? (
          <p className="font-mono text-xs tracking-widest text-subtle uppercase">{kicker}</p>
        ) : null}
        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl">{title}</h1>
            {description ? (
              <div className="mt-4 text-base leading-relaxed text-muted">{description}</div>
            ) : null}
          </div>
          {actions ? <div className="shrink-0">{actions}</div> : null}
        </div>
      </Container>
    </header>
  );
}
