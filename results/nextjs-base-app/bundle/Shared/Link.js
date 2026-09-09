"use client";
import NextLink from "next/link";
import { useParams } from "next/navigation";
import { jsxDEV } from "react/jsx-dev-runtime";
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-base-app/components/Link.tsx";
var checkIsExternalLink = (href) => /^https?:\/\//.test(href ?? "");
function localizeHref(href, locale) {
	if (!href.startsWith("/")) return href;
	if (href === `/${locale}` || href.startsWith(`/${locale}/`)) return href;
	return `/${locale}${href === "/" ? "" : href}`;
}
var Link = ({ href, children, ...props }) => {
	const locale = useParams().locale ?? "en";
	if (href == null || typeof href !== "string") return jsxDEV(NextLink, {
		href,
		...props,
		children
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 23,
		columnNumber: 7
	}, void 0);
	if (checkIsExternalLink(href)) return jsxDEV(NextLink, {
		href,
		...props,
		children
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 30,
		columnNumber: 7
	}, void 0);
	return jsxDEV(NextLink, {
		href: localizeHref(href, locale),
		...props,
		children
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 36,
		columnNumber: 5
	}, void 0);
};
export { Link, Link as default, checkIsExternalLink, localizeHref };
