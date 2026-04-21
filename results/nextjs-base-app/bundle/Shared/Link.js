"use client";
import NextLink from "next/link";
import { useParams } from "next/navigation";
import { jsx } from "react/jsx-runtime";
var checkIsExternalLink = (href) => /^https?:\/\//.test(href ?? "");
function localizeHref(href, locale) {
	if (!href.startsWith("/")) return href;
	if (href === `/${locale}` || href.startsWith(`/${locale}/`)) return href;
	return `/${locale}${href === "/" ? "" : href}`;
}
var Link = ({ href, children, ...props }) => {
	const locale = useParams().locale ?? "en";
	if (href == null || typeof href !== "string") return jsx(NextLink, {
		href,
		...props,
		children
	});
	if (checkIsExternalLink(href)) return jsx(NextLink, {
		href,
		...props,
		children
	});
	return jsx(NextLink, {
		href: localizeHref(href, locale),
		...props,
		children
	});
};
export { Link, Link as default, checkIsExternalLink, localizeHref };
