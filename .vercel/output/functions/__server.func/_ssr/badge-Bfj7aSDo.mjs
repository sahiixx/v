import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { D as cn } from "./router-OefNlZ7C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-Bfj7aSDo.js
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-xs font-medium uppercase tracking-wide", {
	variants: { variant: {
		default: "bg-bg-subtle text-muted shadow-hairline",
		accent: "bg-accent/15 text-fg",
		solid: "bg-accent text-accent-fg"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
//#endregion
export { Badge as t };
