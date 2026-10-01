import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { CATEGORIES, LAYERS } from "@/data/taxonomy";
import { CATEGORY_COUNTS, LAYER_COUNTS } from "@/lib/glossary";

export const Route = createFileRoute("/browse")({
  component: BrowsePage,
  head: () => ({
    meta: [{ title: "Browse — The AI Dictionary" }],
  }),
});

function BrowsePage() {
  return (
    <>
      <PageHeader
        kicker="Catalog"
        title="Browse by layer"
        description="Four layers, thirty-two categories. Each term lives in exactly one place, with cross-references on the entry."
      />
      <Container className="space-y-16 py-12">
        {LAYERS.map((layer, index) => {
          const cats = CATEGORIES.filter((c) => c.layer === layer.id);
          return (
            <section key={layer.id} id={layer.id} className="scroll-mt-24">
              <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-xs tracking-widest text-subtle uppercase">
                    0{index + 1} · {LAYER_COUNTS[layer.id]} terms
                  </p>
                  <h2 className="mt-1 font-display text-3xl font-medium tracking-tight">{layer.name}</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{layer.blurb}</p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {cats.map((cat) => (
                  <Link
                    key={cat.id}
                    to="/category/$id"
                    params={{ id: cat.id }}
                    className="pressable flex flex-col rounded-lg bg-bg-elevated p-5 shadow-hairline hover:shadow-hairline-hover"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl font-medium tracking-tight">{cat.name}</h3>
                      <Badge variant="accent">{CATEGORY_COUNTS[cat.id] ?? 0}</Badge>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{cat.blurb}</p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </Container>
    </>
  );
}
