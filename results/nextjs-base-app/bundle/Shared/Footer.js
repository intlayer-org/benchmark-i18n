"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { jsx, jsxs } from "react/jsx-runtime";
function Footer() {
	const currentLocale = useParams().locale ?? "en";
	const footerLinks = [
		{
			label: "GitHub",
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: false
		},
		{
			label: "Methodology",
			href: `/${currentLocale}/about`,
			isInternal: true
		},
		{
			label: "Contributing",
			href: `/${currentLocale}/contact`,
			isInternal: true
		}
	];
	return jsx("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: jsxs("div", {
			className: "container py-8",
			children: [jsxs("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					jsxs("div", { children: [jsx("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "i18n Benchmark"
					}), jsx("p", {
						className: "text-sm text-muted-foreground",
						children: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
					})] }),
					jsxs("div", { children: [jsx("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "Resources"
					}), jsx("ul", {
						className: "space-y-1",
						children: footerLinks.map((linkEl) => jsx("li", { children: linkEl.isInternal ? jsx(Link, {
							href: linkEl.href,
							prefetch: false,
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: linkEl.label
						}) : jsx("a", {
							href: linkEl.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: linkEl.label
						}) }, linkEl.label))
					})] }),
					jsxs("div", { children: [jsx("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "Contact"
					}), jsx("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					})] })
				]
			}), jsx("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: "i18n Benchmark — Open-source project. Built with React & Next.js."
			})]
		})
	});
}
export { Footer as default };
