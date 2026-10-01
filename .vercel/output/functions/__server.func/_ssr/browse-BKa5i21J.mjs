import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as LAYERS, c as CATEGORY_COUNTS, o as PageHeader, u as LAYER_COUNTS, v as CATEGORIES, x as Container } from "./router-OefNlZ7C.mjs";
import { t as Badge } from "./badge-Bfj7aSDo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/browse-BKa5i21J.js
var import_jsx_runtime = require_jsx_runtime();
function BrowsePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		kicker: "Catalog",
		title: "Browse by layer",
		description: "Four layers, thirty-two categories. Each term lives in exactly one place, with cross-references on the entry."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
		className: "space-y-16 py-12",
		children: LAYERS.map((layer, index) => {
			const cats = CATEGORIES.filter((c) => c.layer === layer.id);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: layer.id,
				className: "scroll-mt-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-xs tracking-widest text-subtle uppercase",
							children: [
								"0",
								index + 1,
								" · ",
								LAYER_COUNTS[layer.id],
								" terms"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-3xl font-medium tracking-tight",
							children: layer.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted",
							children: layer.blurb
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: cats.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/category/$id",
						params: { id: cat.id },
						className: "pressable flex flex-col rounded-lg bg-bg-elevated p-5 shadow-hairline hover:shadow-hairline-hover",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-medium tracking-tight",
								children: cat.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "accent",
								children: CATEGORY_COUNTS[cat.id] ?? 0
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: cat.blurb
						})]
					}, cat.id))
				})]
			}, layer.id);
		})
	})] });
}
//#endregion
export { BrowsePage as component };
