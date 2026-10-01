import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { TermCard } from "@/components/term-card";
import { LAYER_BY_ID, isCategoryId } from "@/data/taxonomy";
import { CATEGORY_BY_ID } from "@/data/taxonomy";
import { termsInCategory } from "@/lib/glossary";

export const Route = createFileRoute("/category/$id")({
  loader: ({ params }) => {
    if (!isCategoryId(params.id)) throw notFound();
    const category = CATEGORY_BY_ID[params.id];
    return {
      category,
      layer: LAYER_BY_ID[category.layer],
      terms: termsInCategory(category.id),
    };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData ? `${loaderData.category.name} — The AI Dictionary` : "Category — The AI Dictionary",
      },
    ],
  }),
  component: CategoryPage,
});

function CategoryPage() {
  const { category, layer, terms } = Route.useLoaderData();
  return (
    <>
      <PageHeader
        kicker={
          <span>
            <Link to="/browse" hash={layer.id} className="hover:text-fg">
              {layer.name}
            </Link>
            {" · "}
            {terms.length} terms
          </span>
        }
        title={category.name}
        description={category.blurb}
      />
      <Container className="grid gap-3 py-10 sm:grid-cols-2">
        {terms.map((term) => (
          <TermCard key={term.slug} term={term} />
        ))}
      </Container>
    </>
  );
}
