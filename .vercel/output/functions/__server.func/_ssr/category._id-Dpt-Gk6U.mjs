import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as PageHeader, r as Route$1, x as Container } from "./router-OefNlZ7C.mjs";
import { t as TermCard } from "./term-card-Bbl_GGwP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/category._id-Dpt-Gk6U.js
var import_jsx_runtime = require_jsx_runtime();
function CategoryPage() {
	const { category, layer, terms } = Route$1.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		kicker: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/browse",
				hash: layer.id,
				className: "hover:text-fg",
				children: layer.name
			}),
			" · ",
			terms.length,
			" terms"
		] }),
		title: category.name,
		description: category.blurb
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
		className: "grid gap-3 py-10 sm:grid-cols-2",
		children: terms.map((term) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TermCard, { term }, term.slug))
	})] });
}
//#endregion
export { CategoryPage as component };
