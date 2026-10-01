import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Container } from "@/components/container";
import { ExplainPanel } from "@/components/explain-panel";
import { SaveButton } from "@/components/save-button";
import { StatusList } from "@/components/status-badge";
import { LAYER_BY_ID } from "@/data/taxonomy";
import { categoryOf, getTerm, relatedTerms } from "@/lib/glossary";

export const Route = createFileRoute("/term/$slug")({
  loader: ({ params }) => {
    const term = getTerm(params.slug);
    if (!term) throw notFound();
    const category = categoryOf(term);
    return {
      term,
      category,
      layer: LAYER_BY_ID[category.layer],
      related: relatedTerms(term),
    };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData ? `${loaderData.term.term} — The AI Dictionary` : "Term — The AI Dictionary",
      },
      {
        name: "description",
        content: loaderData?.term.definition ?? "",
      },
    ],
  }),
  component: TermPage,
});

function TermPage() {
  const { term, category, layer, related } = Route.useLoaderData();
  return (
    <>
      <header className="border-b border-border py-10 sm:py-14">
        <Container className="max-w-3xl">
          <nav className="font-mono text-xs tracking-wide text-subtle uppercase">
            <Link to="/browse" hash={layer.id} className="hover:text-fg">
              {layer.name}
            </Link>
            <span className="mx-2 text-border-strong">/</span>
            <Link to="/category/$id" params={{ id: category.id }} className="hover:text-fg">
              {category.name}
            </Link>
          </nav>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl">{term.term}</h1>
          {term.aliases.length ? (
            <p className="mt-3 text-sm text-muted">Also: {term.aliases.join(" · ")}</p>
          ) : null}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <StatusList statuses={term.status} />
            <SaveButton slug={term.slug} />
          </div>
        </Container>
      </header>
      <Container className="grid gap-10 py-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <article className="max-w-2xl">
          <p className="text-lg leading-relaxed text-fg">{term.definition}</p>
          <div className="mt-10">
            <ExplainPanel term={term} />
          </div>
        </article>
        <aside className="space-y-6">
          <section>
            <h2 className="font-mono text-xs tracking-widest text-subtle uppercase">Related</h2>
            <ul className="mt-3 space-y-2">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    to="/term/$slug"
                    params={{ slug: item.slug }}
                    className="block rounded-md px-3 py-2 hover:bg-bg-subtle"
                  >
                    <span className="text-sm font-medium text-fg">{item.term}</span>
                    <span className="mt-0.5 block line-clamp-2 text-xs leading-relaxed text-muted">
                      {item.definition}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </Container>
    </>
  );
}
