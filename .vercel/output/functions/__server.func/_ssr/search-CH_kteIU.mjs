import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as cn, f as META, g as searchTerms, i as Route$2, o as PageHeader, x as Container } from "./router-OefNlZ7C.mjs";
import { t as TermCard } from "./term-card-Bbl_GGwP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-CH_kteIU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-12 w-full rounded-md bg-bg-elevated px-4 text-base text-fg shadow-hairline outline-none transition-[box-shadow] duration-150 ease-out placeholder:text-subtle hover:shadow-hairline-hover focus-visible:shadow-hairline-hover focus-visible:ring-2 focus-visible:ring-ring/50", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
function SearchPage() {
	const { q } = Route$2.useSearch();
	const navigate = Route$2.useNavigate();
	const results = q.trim() ? searchTerms(q, 60) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		kicker: "Search",
		title: "Find a term",
		description: `Instant lookup across ${META.termCount} entries, aliases, and definitions.`
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
		className: "py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: (e) => {
				e.preventDefault();
				const fd = new FormData(e.currentTarget);
				const next = String(fd.get("q") ?? "");
				navigate({ search: { q: next } });
			},
			className: "max-w-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: "q",
				className: "sr-only",
				children: "Search"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: "q",
				name: "q",
				defaultValue: q,
				placeholder: "Attention, RAG, mesa-optimizer…",
				autoFocus: true
			}, q)]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8",
			children: !q.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"Try",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/search",
						search: { q: "agent" },
						className: "underline decoration-border-strong underline-offset-4",
						children: "agent"
					}),
					",",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/search",
						search: { q: "hallucination" },
						className: "underline decoration-border-strong underline-offset-4",
						children: "hallucination"
					}),
					", or",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/search",
						search: { q: "scaling" },
						className: "underline decoration-border-strong underline-offset-4",
						children: "scaling"
					}),
					"."
				]
			}) : results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"No matches for “",
					q,
					"”.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/browse",
						className: "underline decoration-border-strong underline-offset-4",
						children: "Browse categories"
					}),
					" ",
					"or the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/az",
						className: "underline decoration-border-strong underline-offset-4",
						children: "A–Z index"
					}),
					"."
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-4 font-mono text-xs tracking-widest text-subtle uppercase",
				children: [
					results.length,
					" match",
					results.length === 1 ? "" : "es"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: results.map((term) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TermCard, { term }, term.slug))
			})] })
		})]
	})] });
}
//#endregion
export { SearchPage as component };
