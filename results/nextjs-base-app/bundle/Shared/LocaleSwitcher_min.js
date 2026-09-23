"use client";
import { useParams as e, usePathname as t, useRouter as n } from "next/navigation";
import { jsxDEV as r } from "react/jsx-dev-runtime";
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
], a = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, o = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-base-app/components/LocaleSwitcher.tsx";
function s() {
	let s = e().locale ?? "en", c = t(), l = n(), u = (e) => {
		let t = c.replace(`/${s}`, `/${e}`);
		l.push(t);
	};
	return r("div", {
		className: "flex items-center gap-2",
		children: r("select", {
			value: s,
			onChange: (e) => u(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: i.map((e) => r("option", {
				value: e,
				children: a(e)
			}, e, !1, {
				fileName: o,
				lineNumber: 25,
				columnNumber: 11
			}, this))
		}, void 0, !1, {
			fileName: o,
			lineNumber: 19,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: o,
		lineNumber: 18,
		columnNumber: 5
	}, this);
}
export { s as default };
