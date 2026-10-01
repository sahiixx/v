import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { CHANGELOG, EDITORIAL_NOTE, POSITIONING } from "@/data/taxonomy";
import { CATEGORIES, LAYERS } from "@/data/taxonomy";
import { META } from "@/lib/glossary";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [{ title: "About — The AI Dictionary" }],
  }),
});

function AboutPage() {
  return (
    <>
      <PageHeader
        kicker={`Version ${META.version} · compiled ${META.compiled}`}
        title="A living reference"
        description={POSITIONING}
      />
      <Container className="max-w-3xl space-y-12 py-12">
        <section>
          <h2 className="font-display text-2xl font-medium tracking-tight">Editorial rules</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
            <li>
              Use <span className="text-fg">model</span> for the trained statistical artifact and{" "}
              <span className="text-fg">AI system</span> for the deployed product around it — data, prompts,
              tools, code, interfaces, policies, and people.
            </li>
            <li>
              Use <span className="text-fg">can</span>, not <span className="text-fg">does</span>, for
              capabilities that depend on model, prompt, tools, evaluation, or supervision.
            </li>
            <li>
              Mark future-facing or unsettled language as{" "}
              <span className="text-fg">hypothetical, debated, contested, or informal</span>.
            </li>
            <li>
              Keep vendor-specific names labeled as such. One term lives in one category; related entries
              carry the cross-links.
            </li>
            <li>
              Tool use is a model choosing or invoking a function. Agency is a system taking iterative
              actions toward an objective.
            </li>
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted">{EDITORIAL_NOTE}</p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-medium tracking-tight">What’s in this edition</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {META.termCount} unique terms across {CATEGORIES.length} categories and {LAYERS.length} layers,
            plus the six-level capability scale. Search is local and instant. Saved terms use this browser
            only. Optional Grok expansions are user-initiated, length-capped, and not part of the canonical
            definitions.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl font-medium tracking-tight">Changelog</h2>
          <ol className="mt-6 space-y-8">
            {CHANGELOG.map((entry) => (
              <li key={entry.version}>
                <p className="font-mono text-xs tracking-widest text-subtle uppercase">
                  Version {entry.version} · {entry.date}
                </p>
                <h3 className="mt-1 font-display text-xl font-medium">{entry.title}</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted">
                  {entry.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>
        <p className="text-sm text-muted">
          Start from{" "}
          <Link to="/term/$slug" params={{ slug: "ai" }} className="underline decoration-border-strong underline-offset-4 hover:text-fg">
            AI
          </Link>{" "}
          or the{" "}
          <Link to="/browse" className="underline decoration-border-strong underline-offset-4 hover:text-fg">
            four layers
          </Link>
          .
        </p>
      </Container>
    </>
  );
}
