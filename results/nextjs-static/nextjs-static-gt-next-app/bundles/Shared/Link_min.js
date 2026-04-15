"use client";
import { useParams as e } from "next/navigation";
import t from "next/link";
import { jsx as n } from "react/jsx-runtime";
//#region components/Link.tsx
var r = (e) => /^https?:\/\//.test(e ?? ""), i = ({ href: i, children: a, ...o }) => {
	let s = e().locale ?? "en", c = r(i.toString());
	return /* @__PURE__ */ n(t, {
		href: i && !c && !i.toString().startsWith(`/${s}`) ? `/${s}${i}` : i,
		...o,
		children: a
	});
};
//#endregion
export { i as Link, i as default, r as checkIsExternalLink };
