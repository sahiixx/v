import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as cn, y as CATEGORY_BY_ID } from "./router-OefNlZ7C.mjs";
import { t as StatusList } from "./status-badge-B_mSyTpS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/term-card-Bbl_GGwP.js
var import_jsx_runtime = require_jsx_runtime();
function TermCard({ term, compact = false, className }) {
	const category = CATEGORY_BY_ID[term.category];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/term/$slug",
		params: { slug: term.slug },
		className: cn("group pressable block rounded-lg bg-bg-elevated p-5 shadow-hairline transition-[box-shadow,background-color] hover:bg-bg-subtle hover:shadow-hairline-hover", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg font-medium tracking-tight text-fg group-hover:text-accent",
					children: term.term
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "shrink-0 font-mono text-xs tracking-wide text-subtle uppercase",
					children: category.name
				})]
			}),
			compact ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 line-clamp-3 text-sm leading-relaxed text-muted",
				children: term.definition
			}),
			term.status.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusList, { statuses: term.status })
			}) : null
		]
	});
}
//#endregion
export { TermCard as t };
