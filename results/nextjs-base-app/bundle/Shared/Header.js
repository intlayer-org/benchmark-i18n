"use client";
import NextLink from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { jsxDEV } from "react/jsx-dev-runtime";
import { ChevronDown } from "lucide-react";
import { useEffect, useLayoutEffect, useState } from "react";
var _jsxFileName$3 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-base-app/components/Link.tsx";
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
		fileName: _jsxFileName$3,
		lineNumber: 23,
		columnNumber: 7
	}, void 0);
	if (checkIsExternalLink(href)) return jsxDEV(NextLink, {
		href,
		...props,
		children
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 30,
		columnNumber: 7
	}, void 0);
	return jsxDEV(NextLink, {
		href: localizeHref(href, locale),
		...props,
		children
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 36,
		columnNumber: 5
	}, void 0);
};
var _jsxFileName$2 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-base-app/components/ThemeToggle.tsx";
function getInitialMode() {
	if (typeof window === "undefined") return "auto";
	const stored = window.localStorage.getItem("theme");
	if (stored === "light" || stored === "dark" || stored === "auto") return stored;
	return "auto";
}
function applyThemeMode(mode) {
	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const resolved = mode === "auto" ? prefersDark ? "dark" : "light" : mode;
	document.documentElement.classList.remove("light", "dark");
	document.documentElement.classList.add(resolved);
	if (mode === "auto") document.documentElement.removeAttribute("data-theme");
	else document.documentElement.setAttribute("data-theme", mode);
	document.documentElement.style.colorScheme = resolved;
}
function ThemeToggle() {
	const [mode, setMode] = useState("auto");
	useEffect(() => {
		const initialMode = getInitialMode();
		setMode(initialMode);
		applyThemeMode(initialMode);
	}, []);
	useEffect(() => {
		if (mode !== "auto") return;
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => applyThemeMode("auto");
		media.addEventListener("change", onChange);
		return () => {
			media.removeEventListener("change", onChange);
		};
	}, [mode]);
	function toggleMode() {
		const nextMode = mode === "light" ? "dark" : mode === "dark" ? "auto" : "light";
		setMode(nextMode);
		applyThemeMode(nextMode);
		window.localStorage.setItem("theme", nextMode);
	}
	const label = mode === "auto" ? "Theme mode: auto (system). Click to switch to light mode." : `Theme mode: ${mode}. Click to switch mode.`;
	return jsxDEV("button", {
		type: "button",
		onClick: toggleMode,
		"aria-label": label,
		title: label,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: mode === "auto" ? "Theme: Auto" : mode === "dark" ? "Theme: Dark" : "Theme: Light"
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 73,
		columnNumber: 5
	}, this);
}
var locales = [
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
var getLocaleName = (locale) => {
	try {
		const name = new Intl.DisplayNames([locale], { type: "language" }).of(locale);
		return name ? name.charAt(0).toUpperCase() + name.slice(1) : locale;
	} catch (e) {
		return locale.toUpperCase();
	}
};
var _jsxFileName$1 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-base-app/components/LocaleSwitcher.tsx";
function LocaleSwitcher() {
	const locale = useParams().locale ?? "en";
	const pathname = usePathname();
	const router = useRouter();
	const handleLocaleChange = (newLocale) => {
		const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
		router.push(newPath);
	};
	return jsxDEV("div", {
		className: "flex items-center gap-2",
		children: jsxDEV("select", {
			value: locale,
			onChange: (e) => handleLocaleChange(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: locales.map((localeItem) => jsxDEV("option", {
				value: localeItem,
				children: getLocaleName(localeItem)
			}, localeItem, false, {
				fileName: _jsxFileName$1,
				lineNumber: 25,
				columnNumber: 11
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 19,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 18,
		columnNumber: 5
	}, this);
}
function usePerformanceMeasure(name) {
	if (typeof performance !== "undefined" && performance.mark) performance.mark(`${name}-start`);
	useLayoutEffect(() => {
		if (typeof performance !== "undefined" && performance.mark && performance.measure) {
			performance.mark(`${name}-end`);
			try {
				performance.measure(`${name}-render`, `${name}-start`, `${name}-end`);
			} catch (e) {}
		}
	}, [name]);
}
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-base-app/components/Header.tsx";
function Header() {
	usePerformanceMeasure("Header");
	const [isMockPagesOpen, setIsMockPagesOpen] = useState(false);
	const params = useParams();
	const pathname = usePathname();
	const locale = params.locale ?? "en";
	const mockPages = [
		{
			href: `/products`,
			label: "Products"
		},
		{
			href: `/pricing`,
			label: "Pricing"
		},
		{
			href: `/team`,
			label: "Team"
		},
		{
			href: `/blog`,
			label: "Blog"
		},
		{
			href: `/careers`,
			label: "Careers"
		},
		{
			href: `/faq`,
			label: "FAQ"
		},
		{
			href: `/contact`,
			label: "Contact"
		},
		{
			href: `/settings`,
			label: "Settings"
		}
	];
	const isExactActive = (href) => pathname === localizeHref(href, locale);
	const isActive = (href) => {
		const localized = localizeHref(href, locale);
		return pathname.startsWith(localized) && (href !== "/" || pathname === localized);
	};
	return jsxDEV("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: jsxDEV("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [jsxDEV("div", {
				className: "flex items-center gap-8",
				children: [jsxDEV(Link, {
					href: "/",
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 45,
					columnNumber: 11
				}, this), jsxDEV("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						jsxDEV(Link, {
							href: "/",
							prefetch: false,
							className: `nav-link${isExactActive("/") ? " is-active" : ""}`,
							children: "Home"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 53,
							columnNumber: 13
						}, this),
						jsxDEV(Link, {
							href: "/about",
							prefetch: false,
							className: `nav-link${isActive("/about") ? " is-active" : ""}`,
							children: "Methodology"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 60,
							columnNumber: 13
						}, this),
						jsxDEV("div", {
							className: "relative",
							children: [jsxDEV("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => setIsMockPagesOpen(true),
								onMouseLeave: () => setIsMockPagesOpen(false),
								onClick: () => setIsMockPagesOpen(!isMockPagesOpen),
								children: ["Mock Pages", jsxDEV(ChevronDown, {
									size: 14,
									className: `transition-transform ${isMockPagesOpen ? "rotate-180" : ""}`
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 78,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 70,
								columnNumber: 15
							}, this), isMockPagesOpen && jsxDEV("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => setIsMockPagesOpen(true),
								onMouseLeave: () => setIsMockPagesOpen(false),
								children: jsxDEV("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: mockPages.map((page) => jsxDEV(Link, {
										href: page.href,
										prefetch: false,
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => setIsMockPagesOpen(false),
										children: page.label
									}, page.href, false, {
										fileName: _jsxFileName,
										lineNumber: 92,
										columnNumber: 23
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 90,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 85,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 44,
				columnNumber: 9
			}, this), jsxDEV("div", {
				className: "flex items-center gap-4",
				children: [
					jsxDEV("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [jsxDEV("span", {
							className: "sr-only",
							children: "Go to GitHub"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 116,
							columnNumber: 13
						}, this), jsxDEV("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: jsxDEV("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 118,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 117,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 110,
						columnNumber: 11
					}, this),
					jsxDEV(LocaleSwitcher, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 124,
						columnNumber: 11
					}, this),
					jsxDEV(ThemeToggle, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 125,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 109,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 43,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 42,
		columnNumber: 5
	}, this);
}
export { Header as default };
