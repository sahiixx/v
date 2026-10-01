import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { LEVELS, WHERE_WE_ARE } from "@/data/taxonomy";

export const Route = createFileRoute("/levels")({
  component: LevelsPage,
  head: () => ({
    meta: [{ title: "AI level scale — The AI Dictionary" }],
  }),
});

function LevelsPage() {
  return (
    <>
      <PageHeader
        kicker="Capability"
        title="A six-level scale"
        description={
          <p>
            A map of claims, not a scoreboard. Frontier systems sit at Level 2: general-purpose, uneven, and
            not verified AGI. There is no accepted demonstration or universal definition of Level 3.
          </p>
        }
      />
      <Container className="max-w-3xl py-12">
        <blockquote className="rounded-lg bg-bg-elevated p-6 shadow-hairline">
          <p className="font-mono text-xs tracking-widest text-subtle uppercase">Where are we now?</p>
          <p className="mt-3 font-display text-xl leading-snug font-medium">{WHERE_WE_ARE}</p>
        </blockquote>
        <ol className="mt-10 space-y-4">
          {LEVELS.map((level) => (
            <li
              key={level.id}
              className={
                level.current
                  ? "rounded-lg bg-accent p-6 text-accent-fg"
                  : "rounded-lg bg-bg-elevated p-6 shadow-hairline"
              }
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-mono text-xs tracking-widest uppercase opacity-70">Level {level.id}</p>
                <p className="font-mono text-xs tracking-widest uppercase opacity-70">{level.status}</p>
              </div>
              <h2 className="mt-2 font-display text-2xl font-medium tracking-tight">{level.label}</h2>
              <p className="mt-2 text-sm leading-relaxed opacity-90">{level.definition}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 text-sm leading-relaxed text-muted">
          For product language, prefer “agentic AI systems”: general-purpose foundation models connected to
          tools, memory, retrieval, workflows, policies, and verification. See{" "}
          <Link to="/term/$slug" params={{ slug: "agent" }} className="underline decoration-border-strong underline-offset-4 hover:text-fg">
            Agent
          </Link>{" "}
          and{" "}
          <Link
            to="/term/$slug"
            params={{ slug: "model-vs-ai-system" }}
            className="underline decoration-border-strong underline-offset-4 hover:text-fg"
          >
            Model vs. AI System
          </Link>
          .
        </p>
      </Container>
    </>
  );
}
