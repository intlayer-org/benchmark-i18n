"use client";
import e from "next/link";
import { useParams as t } from "next/navigation";
import { jsxDEV as n } from "react/jsx-dev-runtime";
var r = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-base-app/components/Link.tsx", i = (e) => /^https?:\/\//.test(e ?? "");
function a(e, t) {
	return !e.startsWith("/") || e === `/${t}` || e.startsWith(`/${t}/`) ? e : `/${t}${e === "/" ? "" : e}`;
}
var o = ({ href: o, children: s, ...c }) => {
	let l = t().locale ?? "en";
	return o == null || typeof o != "string" ? n(e, {
		href: o,
		...c,
		children: s
	}, void 0, !1, {
		fileName: r,
		lineNumber: 23,
		columnNumber: 7
	}, void 0) : i(o) ? n(e, {
		href: o,
		...c,
		children: s
	}, void 0, !1, {
		fileName: r,
		lineNumber: 30,
		columnNumber: 7
	}, void 0) : n(e, {
		href: a(o, l),
		...c,
		children: s
	}, void 0, !1, {
		fileName: r,
		lineNumber: 36,
		columnNumber: 5
	}, void 0);
};
export { o as Link, o as default, i as checkIsExternalLink, a as localizeHref };
