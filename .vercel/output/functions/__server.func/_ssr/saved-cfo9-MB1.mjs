import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as getTerm, o as PageHeader, s as Button, x as Container } from "./router-OefNlZ7C.mjs";
import { t as TermCard } from "./term-card-Bbl_GGwP.mjs";
import { t as useSaved } from "./saved-BekgQg52.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/saved-cfo9-MB1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SavedPage() {
	const slugs = useSaved((s) => s.slugs);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setReady(true), []);
	const terms = ready ? slugs.map(getTerm).filter((t) => Boolean(t)) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		kicker: "Local",
		title: "Saved terms",
		description: "Bookmarks stay in this browser. Nothing is uploaded or synced across devices."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
		className: "py-10",
		children: !ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "Loading saved terms…"
		}) : terms.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-base leading-relaxed text-muted",
				children: "Nothing saved yet. Open any entry and tap Save — useful for a working vocabulary while you read."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/browse",
					children: "Browse the catalog"
				})
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: terms.map((term) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TermCard, { term }, term.slug))
		})
	})] });
}
//#endregion
export { SavedPage as component };
