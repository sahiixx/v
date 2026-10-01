import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/container";
import { SearchTrigger } from "@/components/search-trigger";
import { TermCard } from "@/components/term-card";
import { Badge } from "@/components/ui/badge";
import { CATEGORIES, LAYERS, LEVELS, POSITIONING, WHERE_WE_ARE } from "@/data/taxonomy";
import { CATEGORY_COUNTS, FEATURED_TERMS, LAYER_COUNTS, META } from "@/lib/glossary";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "The AI Dictionary" },
      { name: "description", content: POSITIONING },
    ],
  }),
});

function Home() {
  return (
    <>
      <section className="border-b border-border py-14 sm:py-20">
        <Container className="max-w-3xl">
          <p className="font-mono text-xs tracking-widest text-subtle uppercase">
            Version {META.version} · {META.termCount} terms · {CATEGORIES.length} categories
          </p>
          <h1 className="mt-4 font-display text-5xl font-medium tracking-tight text-fg sm:text-6xl">
            The AI Dictionary
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{POSITIONING}</p>
          <div className="mt-8">
            <SearchTrigger size="hero" />
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-12">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start">
          <blockquote className="max-w-2xl">
            <p className="font-mono text-xs tracking-widest text-subtle uppercase">Where are we now?</p>
            <p className="mt-3 font-display text-2xl leading-snug font-medium tracking-tight text-fg sm:text-3xl">
              {WHERE_WE_ARE}
            </p>
          </blockquote>
          <Link
            to="/levels"
            className="pressable block rounded-lg bg-bg-elevated p-5 shadow-hairline hover:shadow-hairline-hover"
          >
            <p className="font-mono text-xs tracking-widest text-subtle uppercase">Capability scale</p>
            <p className="mt-2 font-display text-xl font-medium">Level 2 is the current frontier</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              General-purpose AI: broad, uneven, and not verified AGI.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm text-fg">
              Read the six levels
              <ArrowRight className="size-4" />
            </span>
          </Link>
        </Container>
      </section>

      <section className="border-b border-border py-14">
        <Container>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-medium tracking-tight">Four layers</h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                From the math under models to the systems, reliability work, and social stack around them.
              </p>
            </div>
            <Link to="/browse" className="hidden items-center gap-1 text-sm text-muted hover:text-fg sm:inline-flex">
              All categories
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {LAYERS.map((layer, index) => (
              <Link
                key={layer.id}
                to="/browse"
                hash={layer.id}
                className="pressable rounded-lg bg-bg-elevated p-6 shadow-hairline hover:shadow-hairline-hover"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-mono text-xs text-subtle">0{index + 1}</span>
                  <Badge variant="accent">{LAYER_COUNTS[layer.id]} terms</Badge>
                </div>
                <h3 className="mt-4 font-display text-2xl font-medium tracking-tight">{layer.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{layer.blurb}</p>
                <p className="mt-4 font-mono text-xs text-subtle uppercase">
                  {CATEGORIES.filter((c) => c.layer === layer.id).length} categories
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-border py-14">
        <Container>
          <div className="mb-8">
            <h2 className="font-display text-3xl font-medium tracking-tight">Start here</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              Twelve entries that carry the dictionary’s editorial spine: model versus system, general-purpose
              versus AGI, and the production stack around a fallible model.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_TERMS.map((term) => (
              <TermCard key={term.slug} term={term} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <h2 className="font-display text-3xl font-medium tracking-tight">The scale at a glance</h2>
          <ol className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {LEVELS.map((level) => (
              <li
                key={level.id}
                className={
                  level.current
                    ? "rounded-md bg-accent p-4 text-accent-fg"
                    : "rounded-md bg-bg-elevated p-4 shadow-hairline"
                }
              >
                <p className="font-mono text-xs tracking-widest uppercase opacity-70">
                  Level {level.id} · {level.status}
                </p>
                <p className="mt-1 font-display text-lg font-medium">{level.label}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-wrap gap-2">
            {CATEGORIES.slice(0, 12).map((cat) => (
              <Link
                key={cat.id}
                to="/category/$id"
                params={{ id: cat.id }}
                className="rounded-full bg-bg-elevated px-3 py-2 text-sm text-muted shadow-hairline hover:text-fg hover:shadow-hairline-hover"
              >
                {cat.name}
                <span className="ml-2 font-mono text-xs text-subtle">{CATEGORY_COUNTS[cat.id]}</span>
              </Link>
            ))}
            <Link
              to="/browse"
              className="rounded-full px-3 py-2 text-sm text-muted hover:text-fg"
            >
              All {CATEGORIES.length} →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
