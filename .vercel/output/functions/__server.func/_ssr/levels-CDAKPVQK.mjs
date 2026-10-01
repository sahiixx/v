import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as WHERE_WE_ARE, o as PageHeader, w as LEVELS, x as Container } from "./router-OefNlZ7C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/levels-CDAKPVQK.js
var import_jsx_runtime = require_jsx_runtime();
function LevelsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		kicker: "Capability",
		title: "A six-level scale",
		description: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A map of claims, not a scoreboard. Frontier systems sit at Level 2: general-purpose, uneven, and not verified AGI. There is no accepted demonstration or universal definition of Level 3." })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
		className: "max-w-3xl py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "rounded-lg bg-bg-elevated p-6 shadow-hairline",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs tracking-widest text-subtle uppercase",
					children: "Where are we now?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-display text-xl leading-snug font-medium",
					children: WHERE_WE_ARE
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-10 space-y-4",
				children: LEVELS.map((level) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: level.current ? "rounded-lg bg-accent p-6 text-accent-fg" : "rounded-lg bg-bg-elevated p-6 shadow-hairline",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-baseline justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-xs tracking-widest uppercase opacity-70",
								children: ["Level ", level.id]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs tracking-widest uppercase opacity-70",
								children: level.status
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl font-medium tracking-tight",
							children: level.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed opacity-90",
							children: level.definition
						})
					]
				}, level.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-10 text-sm leading-relaxed text-muted",
				children: [
					"For product language, prefer “agentic AI systems”: general-purpose foundation models connected to tools, memory, retrieval, workflows, policies, and verification. See",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/term/$slug",
						params: { slug: "agent" },
						className: "underline decoration-border-strong underline-offset-4 hover:text-fg",
						children: "Agent"
					}),
					" ",
					"and",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/term/$slug",
						params: { slug: "model-vs-ai-system" },
						className: "underline decoration-border-strong underline-offset-4 hover:text-fg",
						children: "Model vs. AI System"
					}),
					"."
				]
			})
		]
	})] });
}
//#endregion
export { LevelsPage as component };
