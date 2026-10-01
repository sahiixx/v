import { createServerFn } from "@tanstack/react-start";

export const explainTerm = createServerFn({ method: "POST" })
  .validator((input: { term: string; definition: string }) => input)
  .handler(async ({ data }) => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) return { ok: false as const, error: "AI expansion is not available here." };

    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4.5",
        max_tokens: 420,
        temperature: 0.3,
        messages: [
          {
            role: "system",
            content:
              "You are an editor of The AI Dictionary, a living technical reference. Expand the given term for a technically literate reader. Be precise. Hedge contested claims. Never claim AGI has been demonstrated. Distinguish a model from an AI system. Write 2 short paragraphs plus one sentence starting with 'Builders:' on how the idea shows up in practice. No markdown headings. No hype.",
          },
          {
            role: "user",
            content: `Term: ${data.term}\nDefinition: ${data.definition}`,
          },
        ],
      }),
    });

    if (!res.ok) {
      return { ok: false as const, error: "Could not expand this term right now." };
    }

    const body = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const text = body.choices?.[0]?.message?.content?.trim() ?? "";
    if (!text) return { ok: false as const, error: "Empty expansion." };
    return { ok: true as const, text };
  });
