import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as ArrowRight } from "../_libs/lucide-react.mjs";
import { C as LAYERS, E as WHERE_WE_ARE, T as POSITIONING, a as SearchTrigger, c as CATEGORY_COUNTS, f as META, l as FEATURED_TERMS, u as LAYER_COUNTS, v as CATEGORIES, w as LEVELS, x as Container } from "./router-OefNlZ7C.mjs";
import { t as Badge } from "./badge-Bfj7aSDo.mjs";
import { t as TermCard } from "./term-card-Bbl_GGwP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CIu_CwOZ.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border py-14 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-xs tracking-widest text-subtle uppercase",
						children: [
							"Version ",
							META.version,
							" · ",
							META.termCount,
							" terms · ",
							CATEGORIES.length,
							" categories"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-5xl font-medium tracking-tight text-fg sm:text-6xl",
						children: "The AI Dictionary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-lg leading-relaxed text-muted",
						children: POSITIONING
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchTrigger, { size: "hero" })
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-widest text-subtle uppercase",
						children: "Where are we now?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-2xl leading-snug font-medium tracking-tight text-fg sm:text-3xl",
						children: WHERE_WE_ARE
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/levels",
					className: "pressable block rounded-lg bg-bg-elevated p-5 shadow-hairline hover:shadow-hairline-hover",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs tracking-widest text-subtle uppercase",
							children: "Capability scale"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-xl font-medium",
							children: "Level 2 is the current frontier"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: "General-purpose AI: broad, uneven, and not verified AGI."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-4 inline-flex items-center gap-1 text-sm text-fg",
							children: ["Read the six levels", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-medium tracking-tight",
					children: "Four layers"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xl text-sm leading-relaxed text-muted",
					children: "From the math under models to the systems, reliability work, and social stack around them."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/browse",
					className: "hidden items-center gap-1 text-sm text-muted hover:text-fg sm:inline-flex",
					children: ["All categories", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: LAYERS.map((layer, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/browse",
					hash: layer.id,
					className: "pressable rounded-lg bg-bg-elevated p-6 shadow-hairline hover:shadow-hairline-hover",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-xs text-subtle",
								children: ["0", index + 1]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "accent",
								children: [LAYER_COUNTS[layer.id], " terms"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-2xl font-medium tracking-tight",
							children: layer.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: layer.blurb
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 font-mono text-xs text-subtle uppercase",
							children: [CATEGORIES.filter((c) => c.layer === layer.id).length, " categories"]
						})
					]
				}, layer.id))
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-medium tracking-tight",
					children: "Start here"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xl text-sm leading-relaxed text-muted",
					children: "Twelve entries that carry the dictionary’s editorial spine: model versus system, general-purpose versus AGI, and the production stack around a fallible model."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: FEATURED_TERMS.map((term) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TermCard, { term }, term.slug))
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl font-medium tracking-tight",
					children: "The scale at a glance"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3",
					children: LEVELS.map((level) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: level.current ? "rounded-md bg-accent p-4 text-accent-fg" : "rounded-md bg-bg-elevated p-4 shadow-hairline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-xs tracking-widest uppercase opacity-70",
							children: [
								"Level ",
								level.id,
								" · ",
								level.status
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-lg font-medium",
							children: level.label
						})]
					}, level.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap gap-2",
					children: [CATEGORIES.slice(0, 12).map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/category/$id",
						params: { id: cat.id },
						className: "rounded-full bg-bg-elevated px-3 py-2 text-sm text-muted shadow-hairline hover:text-fg hover:shadow-hairline-hover",
						children: [cat.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2 font-mono text-xs text-subtle",
							children: CATEGORY_COUNTS[cat.id]
						})]
					}, cat.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/browse",
						className: "rounded-full px-3 py-2 text-sm text-muted hover:text-fg",
						children: [
							"All ",
							CATEGORIES.length,
							" →"
						]
					})]
				})
			] })
		})
	] });
}
//#endregion
export { Home as component };
