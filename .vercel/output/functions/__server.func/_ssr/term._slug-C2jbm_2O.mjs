import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Bookmark, i as ScanText, l as BookmarkCheck } from "../_libs/lucide-react.mjs";
import { D as cn, n as Route, s as Button, x as Container } from "./router-OefNlZ7C.mjs";
import { t as StatusList } from "./status-badge-B_mSyTpS.mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { t as useSaved } from "./saved-BekgQg52.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/term._slug-C2jbm_2O.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var explainTerm = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("6f1a273260faaff0bdba3515d088d9df4ea452ce82031b15afdcdd7596a04247"));
function ExplainPanel({ term }) {
	const [state, setState] = (0, import_react.useState)("idle");
	const [text, setText] = (0, import_react.useState)("");
	async function run() {
		if (state === "loading") return;
		if (state === "ok") return;
		setState("loading");
		try {
			const res = await explainTerm({ data: {
				term: term.term,
				definition: term.definition
			} });
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-lg bg-bg-elevated p-5 shadow-hairline",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-medium tracking-tight",
						children: "Expand with Grok"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-relaxed text-muted",
						children: "A short, hedged expansion for a technically literate reader. Generated text is not editorial canon."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					onClick: run,
					disabled: state === "loading" || state === "ok",
					className: "shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanText, {}), state === "loading" ? "Expanding…" : state === "ok" ? "Expanded" : "Expand"]
				})]
			}),
			state === "ok" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 space-y-3 border-t border-border pt-4 text-sm leading-relaxed text-fg",
				children: text.split(/\n\n+/).map((para, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: para }, i))
			}) : null,
			state === "err" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm text-danger",
				children: [
					text,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "underline decoration-border-strong underline-offset-4",
						onClick: () => setState("idle"),
						children: "Try again"
					})
				]
			}) : null
		]
	});
}
function SaveButton({ slug, className }) {
	const stored = useSaved((s) => s.slugs.includes(slug));
	const toggle = useSaved((s) => s.toggle);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setReady(true), []);
	const saved = ready && stored;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		type: "button",
		variant: saved ? "secondary" : "outline",
		className: cn(className),
		onClick: () => toggle(slug),
		"aria-pressed": saved,
		children: [saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookmarkCheck, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, {}), saved ? "Saved" : "Save"]
	});
}
function TermPage() {
	const { term, category, layer, related } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-border py-10 sm:py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "font-mono text-xs tracking-wide text-subtle uppercase",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/browse",
							hash: layer.id,
							className: "hover:text-fg",
							children: layer.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mx-2 text-border-strong",
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/category/$id",
							params: { id: category.id },
							className: "hover:text-fg",
							children: category.name
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl",
					children: term.term
				}),
				term.aliases.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm text-muted",
					children: ["Also: ", term.aliases.join(" · ")]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusList, { statuses: term.status }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveButton, { slug: term.slug })]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
		className: "grid gap-10 py-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "max-w-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg leading-relaxed text-fg",
				children: term.definition
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExplainPanel, { term })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "space-y-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-mono text-xs tracking-widest text-subtle uppercase",
				children: "Related"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 space-y-2",
				children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/term/$slug",
					params: { slug: item.slug },
					className: "block rounded-md px-3 py-2 hover:bg-bg-subtle",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-medium text-fg",
						children: item.term
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-0.5 block line-clamp-2 text-xs leading-relaxed text-muted",
						children: item.definition
					})]
				}) }, item.slug))
			})] })
		})]
	})] });
}
//#endregion
export { TermPage as component };
