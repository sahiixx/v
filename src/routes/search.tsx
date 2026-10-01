"use client";

import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { TermCard } from "@/components/term-card";
import { Input } from "@/components/ui/input";
import { META, searchTerms } from "@/lib/glossary";

export const Route = createFileRoute("/search")({
  validateSearch: (search: Record<string, unknown>): { q: string } => ({
    q: typeof search.q === "string" ? search.q : "",
  }),
  component: SearchPage,
  head: () => ({
    meta: [{ title: "Search — The AI Dictionary" }],
  }),
});

function SearchPage() {
  const { q } = Route.useSearch();
  const navigate = Route.useNavigate();
  const results = q.trim() ? searchTerms(q, 60) : [];

  return (
    <>
      <PageHeader
        kicker="Search"
        title="Find a term"
        description={`Instant lookup across ${META.termCount} entries, aliases, and definitions.`}
      />
      <Container className="py-10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const next = String(fd.get("q") ?? "");
            void navigate({ search: { q: next } });
          }}
          className="max-w-xl"
        >
          <label htmlFor="q" className="sr-only">
            Search
          </label>
          <Input key={q} id="q" name="q" defaultValue={q} placeholder="Attention, RAG, mesa-optimizer…" autoFocus />
        </form>
        <div className="mt-8">
          {!q.trim() ? (
            <p className="text-sm text-muted">
              Try{" "}
              <Link to="/search" search={{ q: "agent" }} className="underline decoration-border-strong underline-offset-4">
                agent
              </Link>
              ,{" "}
              <Link to="/search" search={{ q: "hallucination" }} className="underline decoration-border-strong underline-offset-4">
                hallucination
              </Link>
              , or{" "}
              <Link to="/search" search={{ q: "scaling" }} className="underline decoration-border-strong underline-offset-4">
                scaling
              </Link>
              .
            </p>
          ) : results.length === 0 ? (
            <p className="text-sm text-muted">
              No matches for “{q}”.{" "}
              <Link to="/browse" className="underline decoration-border-strong underline-offset-4">
                Browse categories
              </Link>{" "}
              or the{" "}
              <Link to="/az" className="underline decoration-border-strong underline-offset-4">
                A–Z index
              </Link>
              .
            </p>
          ) : (
            <>
              <p className="mb-4 font-mono text-xs tracking-widest text-subtle uppercase">
                {results.length} match{results.length === 1 ? "" : "es"}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {results.map((term) => (
                  <TermCard key={term.slug} term={term} />
                ))}
              </div>
            </>
          )}
        </div>
      </Container>
    </>
  );
}
