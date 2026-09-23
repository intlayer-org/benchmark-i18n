"use client";
import e from "next/link";
import { useParams as t } from "next/navigation";
import { jsx as n } from "react/jsx-runtime";
var r = (e) => /^https?:\/\//.test(e ?? "");
function i(e, t) {
	return !e.startsWith("/") || e === `/${t}` || e.startsWith(`/${t}/`) ? e : `/${t}${e === "/" ? "" : e}`;
}
var a = ({ href: a, children: o, ...s }) => {
	let c = t().locale ?? "en";
	return a == null || typeof a != "string" || r(a) ? n(e, {
		href: a,
		...s,
		children: o
	}) : n(e, {
		href: i(a, c),
		...s,
		children: o
	});
};
export { a as Link, a as default, r as checkIsExternalLink, i as localizeHref };
