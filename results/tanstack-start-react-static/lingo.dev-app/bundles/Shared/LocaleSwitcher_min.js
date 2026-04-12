import { useNavigate as e, useParams as t } from "@tanstack/react-router";
import { jsx as n } from "react/jsx-runtime";
//#region src/i18n/config.ts
var r = [
	"en",
	"fr",
	"es",
	"de",
	"it",
	"pt",
	"zh",
	"ja",
	"ko",
	"ru"
], i = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
};
//#endregion
//#region src/components/LocaleSwitcher.tsx
function a() {
	let a = t({ strict: !1 }).locale ?? "en", o = e(), s = (e) => {
		o({
			to: ".",
			params: (t) => ({
				...t,
				locale: e
			}),
			replace: !0
		});
	};
	return /* @__PURE__ */ n("div", {
		className: "flex items-center gap-2",
		children: /* @__PURE__ */ n("select", {
			value: a,
			onChange: (e) => s(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: r.map((e) => /* @__PURE__ */ n("option", {
				value: e,
				children: i(e)
			}, e))
		})
	});
}
//#endregion
export { a as default };
