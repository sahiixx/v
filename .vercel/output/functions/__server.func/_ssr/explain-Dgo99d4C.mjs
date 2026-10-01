import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/explain-Dgo99d4C.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var explainTerm_createServerFn_handler = createServerRpc({
	id: "6f1a273260faaff0bdba3515d088d9df4ea452ce82031b15afdcdd7596a04247",
	name: "explainTerm",
	filename: "src/lib/explain.ts"
}, (opts) => explainTerm.__executeServer(opts));
var explainTerm = createServerFn({ method: "POST" }).validator((input) => input).handler(explainTerm_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "AI expansion is not available here."
	};
	const res = await fetch("https://api.x.ai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "grok-4.5",
			max_tokens: 420,
			temperature: .3,
			messages: [{
				role: "system",
				content: "You are an editor of The AI Dictionary, a living technical reference. Expand the given term for a technically literate reader. Be precise. Hedge contested claims. Never claim AGI has been demonstrated. Distinguish a model from an AI system. Write 2 short paragraphs plus one sentence starting with 'Builders:' on how the idea shows up in practice. No markdown headings. No hype."
			}, {
				role: "user",
				content: `Term: ${data.term}\nDefinition: ${data.definition}`
			}]
		})
	});
	if (!res.ok) return {
		ok: false,
		error: "Could not expand this term right now."
	};
	const text = (await res.json()).choices?.[0]?.message?.content?.trim() ?? "";
	if (!text) return {
		ok: false,
		error: "Empty expansion."
	};
	return {
		ok: true,
		text
	};
});
//#endregion
export { explainTerm_createServerFn_handler };
