import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { D as cn, p as STATUS_LABEL } from "./router-OefNlZ7C.mjs";
import { t as Badge } from "./badge-Bfj7aSDo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/status-badge-B_mSyTpS.js
var import_jsx_runtime = require_jsx_runtime();
var STATUS_CLASS = {
	debated: "italic",
	hypothetical: "italic",
	informal: "",
	"vendor-specific": "text-fg",
	historical: "text-subtle",
	emerging: "bg-accent/15 text-fg shadow-none"
};
function StatusBadge({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		className: cn(STATUS_CLASS[status]),
		variant: "default",
		children: STATUS_LABEL[status]
	});
}
function StatusList({ statuses }) {
	if (!statuses.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap gap-1.5",
		children: statuses.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: s }, s))
	});
}
//#endregion
export { StatusList as t };
