"use client";
import { useParams } from "next/navigation";
import NextLink from "next/link";
import { jsx } from "react/jsx-runtime";
//#region components/Link.tsx
/**
* Utility function to check whether a given URL is external.
* If the URL starts with http:// or https://, it's considered external.
*/
var checkIsExternalLink = (href) => /^https?:\/\//.test(href ?? "");
/**
* A custom Link component that adapts the href attribute based on the current locale.
* For internal links, it adds the locale prefix (e.g., /en/about).
* This ensures that navigation stays within the same locale context.
*/
var Link = ({ href, children, ...props }) => {
	const currentLocale = useParams().lang ?? "en";
	const isExternalLink = checkIsExternalLink(href.toString());
	return /* @__PURE__ */ jsx(NextLink, {
		href: href && !isExternalLink && !href.toString().startsWith(`/${currentLocale}`) ? `/${currentLocale}${href}` : href,
		...props,
		children
	});
};
//#endregion
export { Link, Link as default, checkIsExternalLink };
