"use client";
import { useParams as e, usePathname as t, useRouter as n } from "next/navigation";
import { jsx as r } from "react/jsx-runtime";
//#region i18n/config.ts
var i = [
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
];
function a(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
//#endregion
//#region components/LocaleSwitcher.tsx
function o() {
	let o = e().locale ?? "en", s = t(), c = n(), l = (e) => {
		let t = s.replace(`/${o}`, `/${e}`);
		c.push(t);
	};
	return /* @__PURE__ */ r("div", {
		className: "flex items-center gap-2",
		children: /* @__PURE__ */ r("select", {
			value: o,
			onChange: (e) => l(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: i.map((e) => /* @__PURE__ */ r("option", {
				value: e,
				children: a(e)
			}, e))
		})
	});
}
//#endregion
export { o as default };
