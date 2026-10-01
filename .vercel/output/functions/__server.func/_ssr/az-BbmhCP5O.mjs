import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as termsByLetter, d as LETTERS, m as TERMS, o as PageHeader, x as Container } from "./router-OefNlZ7C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/az-BbmhCP5O.js
var import_jsx_runtime = require_jsx_runtime();
function AzPage() {
	const grouped = termsByLetter();
	const present = LETTERS.filter((L) => (grouped.get(L)?.length ?? 0) > 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			kicker: "Index",
			title: "A–Z",
			description: `${TERMS.length} entries, one listing each. Jump to a letter, then open the full definition.`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sticky top-16 z-30 border-b border-border bg-bg/90 backdrop-blur-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
				className: "flex gap-1 overflow-x-auto py-3",
				children: present.map((L) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `#letter-${L === "#" ? "other" : L}`,
					className: "flex size-11 shrink-0 items-center justify-center rounded-sm font-mono text-xs text-muted hover:bg-bg-subtle hover:text-fg",
					children: L
				}, L))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
			className: "space-y-12 py-12",
			children: present.map((L) => {
				const items = grouped.get(L) ?? [];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: `letter-${L === "#" ? "other" : L}`,
					className: "scroll-mt-36",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-medium tracking-tight",
						children: L === "#" ? "Other" : L
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 divide-y divide-border",
						children: items.map((term) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/term/$slug",
							params: { slug: term.slug },
							className: "flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-fg",
								children: term.term
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "line-clamp-1 text-sm text-muted",
								children: term.definition
							})]
						}) }, term.slug))
					})]
				}, L);
			})
		})
	] });
}
//#endregion
export { AzPage as component };
