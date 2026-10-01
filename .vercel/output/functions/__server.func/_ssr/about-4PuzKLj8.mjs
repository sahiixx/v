import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as LAYERS, S as EDITORIAL_NOTE, T as POSITIONING, b as CHANGELOG, f as META, o as PageHeader, v as CATEGORIES, x as Container } from "./router-OefNlZ7C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-4PuzKLj8.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		kicker: `Version ${META.version} · compiled ${META.compiled}`,
		title: "A living reference",
		description: POSITIONING
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
		className: "max-w-3xl space-y-12 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-medium tracking-tight",
					children: "Editorial rules"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-3 text-sm leading-relaxed text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Use ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-fg",
								children: "model"
							}),
							" for the trained statistical artifact and",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-fg",
								children: "AI system"
							}),
							" for the deployed product around it — data, prompts, tools, code, interfaces, policies, and people."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Use ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-fg",
								children: "can"
							}),
							", not ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-fg",
								children: "does"
							}),
							", for capabilities that depend on model, prompt, tools, evaluation, or supervision."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Mark future-facing or unsettled language as",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-fg",
								children: "hypothetical, debated, contested, or informal"
							}),
							"."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Keep vendor-specific names labeled as such. One term lives in one category; related entries carry the cross-links." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Tool use is a model choosing or invoking a function. Agency is a system taking iterative actions toward an objective." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm leading-relaxed text-muted",
					children: EDITORIAL_NOTE
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-medium tracking-tight",
				children: "What’s in this edition"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted",
				children: [
					META.termCount,
					" unique terms across ",
					CATEGORIES.length,
					" categories and ",
					LAYERS.length,
					" layers, plus the six-level capability scale. Search is local and instant. Saved terms use this browser only. Optional Grok expansions are user-initiated, length-capped, and not part of the canonical definitions."
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-medium tracking-tight",
				children: "Changelog"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-6 space-y-8",
				children: CHANGELOG.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-xs tracking-widest text-subtle uppercase",
						children: [
							"Version ",
							entry.version,
							" · ",
							entry.date
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-display text-xl font-medium",
						children: entry.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted",
						children: entry.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
					})
				] }, entry.version))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"Start from",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/term/$slug",
						params: { slug: "ai" },
						className: "underline decoration-border-strong underline-offset-4 hover:text-fg",
						children: "AI"
					}),
					" ",
					"or the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/browse",
						className: "underline decoration-border-strong underline-offset-4 hover:text-fg",
						children: "four layers"
					}),
					"."
				]
			})
		]
	})] });
}
//#endregion
export { AboutPage as component };
