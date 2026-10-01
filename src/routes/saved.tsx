"use client";

import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { TermCard } from "@/components/term-card";
import { Button } from "@/components/ui/button";
import { getTerm, type Term } from "@/lib/glossary";
import { useSaved } from "@/lib/saved";

export const Route = createFileRoute("/saved")({
  component: SavedPage,
  head: () => ({
    meta: [{ title: "Saved — The AI Dictionary" }],
  }),
});

function SavedPage() {
  const slugs = useSaved((s) => s.slugs);
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const terms = ready
    ? slugs.map(getTerm).filter((t): t is Term => Boolean(t))
    : [];

  return (
    <>
      <PageHeader
        kicker="Local"
        title="Saved terms"
        description="Bookmarks stay in this browser. Nothing is uploaded or synced across devices."
      />
      <Container className="py-10">
        {!ready ? (
          <p className="text-sm text-muted">Loading saved terms…</p>
        ) : terms.length === 0 ? (
          <div className="max-w-md">
            <p className="text-base leading-relaxed text-muted">
              Nothing saved yet. Open any entry and tap Save — useful for a working vocabulary while you read.
            </p>
            <Button asChild className="mt-6">
              <Link to="/browse">Browse the catalog</Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            {terms.map((term) => (
              <TermCard key={term.slug} term={term} />
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
