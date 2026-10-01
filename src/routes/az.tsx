import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { LETTERS, TERMS, termsByLetter } from "@/lib/glossary";

export const Route = createFileRoute("/az")({
  component: AzPage,
  head: () => ({
    meta: [{ title: "A–Z — The AI Dictionary" }],
  }),
});

function AzPage() {
  const grouped = termsByLetter();
  const present = LETTERS.filter((L) => (grouped.get(L)?.length ?? 0) > 0);

  return (
    <>
      <PageHeader
        kicker="Index"
        title="A–Z"
        description={`${TERMS.length} entries, one listing each. Jump to a letter, then open the full definition.`}
      />
      <div className="sticky top-16 z-30 border-b border-border bg-bg/90 backdrop-blur-md">
        <Container className="flex gap-1 overflow-x-auto py-3">
          {present.map((L) => (
            <a
              key={L}
              href={`#letter-${L === "#" ? "other" : L}`}
              className="flex size-11 shrink-0 items-center justify-center rounded-sm font-mono text-xs text-muted hover:bg-bg-subtle hover:text-fg"
            >
              {L}
            </a>
          ))}
        </Container>
      </div>
      <Container className="space-y-12 py-12">
        {present.map((L) => {
          const items = grouped.get(L) ?? [];
          return (
            <section key={L} id={`letter-${L === "#" ? "other" : L}`} className="scroll-mt-36">
              <h2 className="font-display text-3xl font-medium tracking-tight">{L === "#" ? "Other" : L}</h2>
              <ul className="mt-4 divide-y divide-border">
                {items.map((term) => (
                  <li key={term.slug}>
                    <Link
                      to="/term/$slug"
                      params={{ slug: term.slug }}
                      className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                    >
                      <span className="font-medium text-fg">{term.term}</span>
                      <span className="line-clamp-1 text-sm text-muted">{term.definition}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </Container>
    </>
  );
}
