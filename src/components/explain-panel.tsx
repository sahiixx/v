"use client";

import { useState } from "react";
import { ScanText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { explainTerm } from "@/lib/explain";
import type { Term } from "@/lib/glossary";

type State = "idle" | "loading" | "ok" | "err";

export function ExplainPanel({ term }: { term: Term }) {
  const [state, setState] = useState<State>("idle");
  const [text, setText] = useState("");

  async function run() {
    if (state === "loading") return;
    if (state === "ok") return;
    setState("loading");
    try {
      const res = await explainTerm({ data: { term: term.term, definition: term.definition } });
      if (res.ok) {
        setText(res.text);
        setState("ok");
      } else {
        setText(res.error);
        setState("err");
      }
    } catch {
      setText("Could not expand this term right now.");
      setState("err");
    }
  }

  return (
    <section className="rounded-lg bg-bg-elevated p-5 shadow-hairline">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-lg font-medium tracking-tight">Expand with Grok</h2>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            A short, hedged expansion for a technically literate reader. Generated text is not editorial canon.
          </p>
        </div>
        <Button type="button" onClick={run} disabled={state === "loading" || state === "ok"} className="shrink-0">
          <ScanText />
          {state === "loading" ? "Expanding…" : state === "ok" ? "Expanded" : "Expand"}
        </Button>
      </div>
      {state === "ok" ? (
        <div className="mt-4 space-y-3 border-t border-border pt-4 text-sm leading-relaxed text-fg">
          {text.split(/\n\n+/).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      ) : null}
      {state === "err" ? (
        <p className="mt-4 text-sm text-danger">
          {text}{" "}
          <button type="button" className="underline decoration-border-strong underline-offset-4" onClick={() => setState("idle")}>
            Try again
          </button>
        </p>
      ) : null}
    </section>
  );
}
