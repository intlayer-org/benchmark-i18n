import React, { createContext, useContext, useEffect, useLayoutEffect, useMemo, useState } from "react";
import NextLink from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ChevronDown } from "lucide-react";
import { useRouter as useRouter$1 } from "next/router";
import frAbout from "../locales/fr/about.json";
import frBlog from "../locales/fr/blog.json";
import frCareers from "../locales/fr/careers.json";
import frContact from "../locales/fr/contact.json";
import frFaq from "../locales/fr/faq.json";
import frHome from "../locales/fr/home.json";
import frPricing from "../locales/fr/pricing.json";
import frProducts from "../locales/fr/products.json";
import frRoute from "../locales/fr/route.json";
import frSettings from "../locales/fr/settings.json";
import frShared from "../locales/fr/shared.json";
import frTeam from "../locales/fr/team.json";
import esAbout from "../locales/es/about.json";
import esBlog from "../locales/es/blog.json";
import esCareers from "../locales/es/careers.json";
import esContact from "../locales/es/contact.json";
import esFaq from "../locales/es/faq.json";
import esHome from "../locales/es/home.json";
import esPricing from "../locales/es/pricing.json";
import esProducts from "../locales/es/products.json";
import esRoute from "../locales/es/route.json";
import esSettings from "../locales/es/settings.json";
import esShared from "../locales/es/shared.json";
import esTeam from "../locales/es/team.json";
import deAbout from "../locales/de/about.json";
import deBlog from "../locales/de/blog.json";
import deCareers from "../locales/de/careers.json";
import deContact from "../locales/de/contact.json";
import deFaq from "../locales/de/faq.json";
import deHome from "../locales/de/home.json";
import dePricing from "../locales/de/pricing.json";
import deProducts from "../locales/de/products.json";
import deRoute from "../locales/de/route.json";
import deSettings from "../locales/de/settings.json";
import deShared from "../locales/de/shared.json";
import deTeam from "../locales/de/team.json";
import itAbout from "../locales/it/about.json";
import itBlog from "../locales/it/blog.json";
import itCareers from "../locales/it/careers.json";
import itContact from "../locales/it/contact.json";
import itFaq from "../locales/it/faq.json";
import itHome from "../locales/it/home.json";
import itPricing from "../locales/it/pricing.json";
import itProducts from "../locales/it/products.json";
import itRoute from "../locales/it/route.json";
import itSettings from "../locales/it/settings.json";
import itShared from "../locales/it/shared.json";
import itTeam from "../locales/it/team.json";
import ptAbout from "../locales/pt/about.json";
import ptBlog from "../locales/pt/blog.json";
import ptCareers from "../locales/pt/careers.json";
import ptContact from "../locales/pt/contact.json";
import ptFaq from "../locales/pt/faq.json";
import ptHome from "../locales/pt/home.json";
import ptPricing from "../locales/pt/pricing.json";
import ptProducts from "../locales/pt/products.json";
import ptRoute from "../locales/pt/route.json";
import ptSettings from "../locales/pt/settings.json";
import ptShared from "../locales/pt/shared.json";
import ptTeam from "../locales/pt/team.json";
import zhAbout from "../locales/zh/about.json";
import zhBlog from "../locales/zh/blog.json";
import zhCareers from "../locales/zh/careers.json";
import zhContact from "../locales/zh/contact.json";
import zhFaq from "../locales/zh/faq.json";
import zhHome from "../locales/zh/home.json";
import zhPricing from "../locales/zh/pricing.json";
import zhProducts from "../locales/zh/products.json";
import zhRoute from "../locales/zh/route.json";
import zhSettings from "../locales/zh/settings.json";
import zhShared from "../locales/zh/shared.json";
import zhTeam from "../locales/zh/team.json";
import jaAbout from "../locales/ja/about.json";
import jaBlog from "../locales/ja/blog.json";
import jaCareers from "../locales/ja/careers.json";
import jaContact from "../locales/ja/contact.json";
import jaFaq from "../locales/ja/faq.json";
import jaHome from "../locales/ja/home.json";
import jaPricing from "../locales/ja/pricing.json";
import jaProducts from "../locales/ja/products.json";
import jaRoute from "../locales/ja/route.json";
import jaSettings from "../locales/ja/settings.json";
import jaShared from "../locales/ja/shared.json";
import jaTeam from "../locales/ja/team.json";
import koAbout from "../locales/ko/about.json";
import koBlog from "../locales/ko/blog.json";
import koCareers from "../locales/ko/careers.json";
import koContact from "../locales/ko/contact.json";
import koFaq from "../locales/ko/faq.json";
import koHome from "../locales/ko/home.json";
import koPricing from "../locales/ko/pricing.json";
import koProducts from "../locales/ko/products.json";
import koRoute from "../locales/ko/route.json";
import koSettings from "../locales/ko/settings.json";
import koShared from "../locales/ko/shared.json";
import koTeam from "../locales/ko/team.json";
import ruAbout from "../locales/ru/about.json";
import ruBlog from "../locales/ru/blog.json";
import ruCareers from "../locales/ru/careers.json";
import ruContact from "../locales/ru/contact.json";
import ruFaq from "../locales/ru/faq.json";
import ruHome from "../locales/ru/home.json";
import ruPricing from "../locales/ru/pricing.json";
import ruProducts from "../locales/ru/products.json";
import ruRoute from "../locales/ru/route.json";
import ruSettings from "../locales/ru/settings.json";
import ruShared from "../locales/ru/shared.json";
import ruTeam from "../locales/ru/team.json";
var checkIsExternalLink = (href) => /^https?:\/\//.test(href ?? "");
function localizeHref(href, locale) {
	if (!href.startsWith("/")) return href;
	if (href === `/${locale}` || href.startsWith(`/${locale}/`)) return href;
	return `/${locale}${href === "/" ? "" : href}`;
}
var Link = ({ href, children, ...props }) => {
	const locale = useParams().lang ?? "en";
	if (href == null || typeof href !== "string") return jsx(NextLink, {
		href,
		prefetch: false,
		...props,
		children
	});
	if (checkIsExternalLink(href)) return jsx(NextLink, {
		href,
		prefetch: false,
		...props,
		children
	});
	return jsx(NextLink, {
		href: localizeHref(href, locale),
		prefetch: false,
		...props,
		children
	});
};
var __assign$3 = function() {
	__assign$3 = Object.assign || function(t) {
		for (var s, i = 1, n = arguments.length; i < n; i++) {
			s = arguments[i];
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
		}
		return t;
	};
	return __assign$3.apply(this, arguments);
};
function wrapTWithDefaultNs(oldT, ns) {
	if (typeof ns !== "string") return oldT;
	var t = function(key, query, options) {
		return oldT(key, query, __assign$3({ ns }, options));
	};
	return t;
}
var context;
if (typeof React.createContext === "function") context = React.createContext({
	t: function(k) {
		return Array.isArray(k) ? k[0] : k;
	},
	lang: ""
});
var context_default = context;
function isServer() {
	return typeof window === "undefined";
}
function safePluralRules(locale) {
	try {
		return new Intl.PluralRules(locale);
	} catch (_e) {
		return new Intl.PluralRules();
	}
}
var __assign$2 = function() {
	__assign$2 = Object.assign || function(t) {
		for (var s, i = 1, n = arguments.length; i < n; i++) {
			s = arguments[i];
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
		}
		return t;
	};
	return __assign$2.apply(this, arguments);
};
function splitNsKey(key, nsSeparator) {
	if (!nsSeparator) return { i18nKey: key };
	var i = key.indexOf(nsSeparator);
	if (i < 0) return { i18nKey: key };
	return {
		namespace: key.slice(0, i),
		i18nKey: key.slice(i + nsSeparator.length)
	};
}
function transCore(_a) {
	var config = _a.config, allNamespaces = _a.allNamespaces, pluralRules = _a.pluralRules, lang = _a.lang;
	var _b = config.logger, logger = _b === void 0 ? missingKeyLogger : _b, _c = config.allowEmptyStrings, allowEmptyStrings = _c === void 0 ? true : _c;
	var interpolateUnknown = function(value, query) {
		if (Array.isArray(value)) return value.map(function(val) {
			return interpolateUnknown(val, query);
		});
		if (value instanceof Object) return objectInterpolation({
			obj: value,
			query,
			config,
			lang
		});
		return interpolation({
			text: value,
			query,
			config,
			lang
		});
	};
	var t = function(key, query, options) {
		var _a;
		if (key === void 0) key = "";
		var k = Array.isArray(key) ? key[0] : key;
		var _b = config.nsSeparator, nsSeparator = _b === void 0 ? ":" : _b, _c = config.loggerEnvironment, loggerEnvironment = _c === void 0 ? "browser" : _c;
		var _d = splitNsKey(k, nsSeparator), i18nKey = _d.i18nKey, _e = _d.namespace, namespace = _e === void 0 ? (_a = options === null || options === void 0 ? void 0 : options.ns) !== null && _a !== void 0 ? _a : config.defaultNS : _e;
		var dic = namespace && allNamespaces[namespace] || {};
		var dicValue = getDicValue(dic, plural(pluralRules, dic, i18nKey, config, query, options), config, options);
		var value = typeof dicValue === "object" ? JSON.parse(JSON.stringify(dicValue)) : dicValue;
		var empty = typeof value === "undefined" || typeof value === "object" && !Object.keys(value).length || value === "" && !allowEmptyStrings;
		var fallbacks = typeof (options === null || options === void 0 ? void 0 : options.fallback) === "string" ? [options.fallback] : (options === null || options === void 0 ? void 0 : options.fallback) || [];
		if (empty && (loggerEnvironment === "both" || loggerEnvironment === (typeof window === "undefined" ? "node" : "browser"))) logger({
			namespace,
			i18nKey
		});
		if (empty && Array.isArray(fallbacks) && fallbacks.length) {
			var firstFallback = fallbacks[0], restFallbacks = fallbacks.slice(1);
			if (typeof firstFallback === "string") return t(firstFallback, query, __assign$2(__assign$2({}, options), { fallback: restFallbacks }));
		}
		if (empty && options && options.hasOwnProperty("default") && !(fallbacks === null || fallbacks === void 0 ? void 0 : fallbacks.length)) return options.default ? interpolateUnknown(options.default, query) : options.default;
		if (empty) return k;
		return interpolateUnknown(value, query);
	};
	return t;
}
function getDicValue(dic, key, config, options) {
	if (key === void 0) key = "";
	if (options === void 0) options = { returnObjects: false };
	var _a = (config || {}).keySeparator, keySeparator = _a === void 0 ? "." : _a;
	var keyParts = keySeparator ? key.split(keySeparator) : [key];
	if (key === keySeparator && options.returnObjects) return dic;
	var value = keyParts.reduce(function(val, key) {
		if (typeof val === "string") return {};
		var res = val[key];
		return res || (typeof res === "string" ? res : {});
	}, dic);
	if (typeof value === "string" || value instanceof Object && options.returnObjects && Object.keys(value).length > 0) return value;
	if (Array.isArray(value) && options.returnObjects) return value;
}
function plural(pluralRules, dic, key, config, query, options) {
	if (!query || typeof query.count !== "number") return key;
	var numKey = "".concat(key, "_").concat(query.count);
	if (getDicValue(dic, numKey, config, options) !== void 0) return numKey;
	var pluralKey = "".concat(key, "_").concat(pluralRules.select(query.count));
	if (getDicValue(dic, pluralKey, config, options) !== void 0) return pluralKey;
	var nestedNumKey = "".concat(key, ".").concat(query.count);
	if (getDicValue(dic, nestedNumKey, config, options) !== void 0) return nestedNumKey;
	var nestedKey = "".concat(key, ".").concat(pluralRules.select(query.count));
	if (getDicValue(dic, nestedKey, config, options) !== void 0) return nestedKey;
	return key;
}
function interpolation(_a) {
	var text = _a.text, query = _a.query, config = _a.config, lang = _a.lang;
	if (!text || !query) return text || "";
	var escapeRegex = function(str) {
		return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
	};
	var _b = config.interpolation || {}, _c = _b.format, format = _c === void 0 ? null : _c, _d = _b.prefix, prefix = _d === void 0 ? "{{" : _d, _e = _b.suffix, suffix = _e === void 0 ? "}}" : _e;
	var regexEnd = suffix === "" ? "" : "(?:[\\s,]+([\\w-]*))?\\s*".concat(escapeRegex(suffix));
	return Object.keys(query).reduce(function(all, varKey) {
		var regex = new RegExp("".concat(escapeRegex(prefix), "\\s*").concat(varKey).concat(regexEnd), "gm");
		return all.replace(regex, function(_match, $1) {
			return $1 && format ? format(query[varKey], $1, lang) : query[varKey];
		});
	}, text);
}
function objectInterpolation(_a) {
	var obj = _a.obj, query = _a.query, config = _a.config, lang = _a.lang;
	if (!query || Object.keys(query).length === 0) return obj;
	Object.keys(obj).forEach(function(key) {
		if (obj[key] instanceof Object) objectInterpolation({
			obj: obj[key],
			query,
			config,
			lang
		});
		if (typeof obj[key] === "string") obj[key] = interpolation({
			text: obj[key],
			query,
			config,
			lang
		});
	});
	return obj;
}
function missingKeyLogger(_a) {
	var namespace = _a.namespace, i18nKey = _a.i18nKey;
	if (process.env.NODE_ENV === "production") return;
	if (!namespace) {
		console.warn("[next-translate] The text \"".concat(i18nKey, "\" has no namespace in front of it."));
		return;
	}
	console.warn("[next-translate] \"".concat(namespace, ":").concat(i18nKey, "\" is missing in current namespace configuration. Try adding \"").concat(i18nKey, "\" to the namespace \"").concat(namespace, "\"."));
}
function createTranslation(defaultNS) {
	var _a;
	var _b = (_a = globalThis.__NEXT_TRANSLATE__) !== null && _a !== void 0 ? _a : {}, lang = _b.lang, namespaces = _b.namespaces, config = _b.config;
	var localesToIgnore = config.localesToIgnore || ["default"];
	var ignoreLang = !lang || localesToIgnore.includes(lang);
	var getT = function() {
		return wrapTWithDefaultNs(transCore({
			config,
			allNamespaces: namespaces,
			pluralRules: safePluralRules(ignoreLang ? void 0 : lang),
			lang
		}), defaultNS);
	};
	return {
		t: isServer() ? getT() : useMemo(getT, [defaultNS, lang]),
		lang
	};
}
var __assign$1 = function() {
	__assign$1 = Object.assign || function(t) {
		for (var s, i = 1, n = arguments.length; i < n; i++) {
			s = arguments[i];
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
		}
		return t;
	};
	return __assign$1.apply(this, arguments);
};
function useTranslationInPages(defaultNS) {
	var ctx = useContext(context_default);
	return useMemo(function() {
		return __assign$1(__assign$1({}, ctx), { t: wrapTWithDefaultNs(ctx.t, defaultNS) });
	}, [ctx, defaultNS]);
}
function useTranslation(defaultNS) {
	var appDir = globalThis.__NEXT_TRANSLATE__;
	return ((appDir === null || appDir === void 0 ? void 0 : appDir.config) ? createTranslation : useTranslationInPages)(defaultNS);
}
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
	const { t } = useTranslation("common");
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
	const label = mode === "auto" ? t("shared.themeToggle.themeModeAutoSystemClick") : mode === "light" ? t("shared.themeToggle.themeModeLightClick") : t("shared.themeToggle.themeModeDarkClick");
	return jsx("button", {
		type: "button",
		onClick: toggleMode,
		"aria-label": label,
		title: label,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: mode === "auto" ? t("shared.themeToggle.themeAuto") : mode === "dark" ? t("shared.themeToggle.themeDark") : t("shared.themeToggle.themeLight")
	});
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
function LocaleSwitcher() {
	const locale = useParams().lang ?? "en";
	const pathname = usePathname();
	const router = useRouter();
	const handleLocaleChange = (newLocale) => {
		const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
		router.push(newPath);
	};
	return jsx("div", {
		className: "flex items-center gap-2",
		children: jsx("select", {
			value: locale,
			onChange: (e) => handleLocaleChange(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: locales.map((localeEl) => jsx("option", {
				value: localeEl,
				children: getLocaleName(localeEl)
			}, localeEl))
		})
	});
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
function Header() {
	const { t } = useTranslation("common");
	usePerformanceMeasure("Header");
	const [isMockPagesOpen, setIsMockPagesOpen] = useState(false);
	const params = useParams();
	const pathname = usePathname();
	const locale = params.lang ?? "en";
	const mockPages = [
		{
			href: "/products",
			label: t("shared.header.products")
		},
		{
			href: "/pricing",
			label: t("shared.header.pricing")
		},
		{
			href: "/team",
			label: t("shared.header.team")
		},
		{
			href: "/blog",
			label: t("shared.header.blog")
		},
		{
			href: "/careers",
			label: t("shared.header.careers")
		},
		{
			href: "/faq",
			label: t("shared.header.faq")
		},
		{
			href: "/contact",
			label: t("shared.header.contact")
		},
		{
			href: "/settings",
			label: t("shared.header.settings")
		}
	];
	const isExactActive = (href) => pathname === localizeHref(href, locale);
	const isActive = (href) => {
		const localized = localizeHref(href, locale);
		return pathname.startsWith(localized) && (href !== "/" || pathname === localized);
	};
	return jsx("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: jsxs("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [jsxs("div", {
				className: "flex items-center gap-8",
				children: [jsx(Link, {
					href: "/",
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}), jsxs("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						jsx(Link, {
							href: "/",
							className: `nav-link${isExactActive("/") ? " is-active" : ""}`,
							children: t("shared.header.home")
						}),
						jsx(Link, {
							href: "/about",
							className: `nav-link${isActive("/about") ? " is-active" : ""}`,
							children: t("shared.header.methodology")
						}),
						jsxs("div", {
							className: "relative",
							children: [jsxs("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => setIsMockPagesOpen(true),
								onMouseLeave: () => setIsMockPagesOpen(false),
								onClick: () => setIsMockPagesOpen(!isMockPagesOpen),
								children: [t("shared.header.mockPages"), jsx(ChevronDown, {
									size: 14,
									className: `transition-transform ${isMockPagesOpen ? "rotate-180" : ""}`
								})]
							}), isMockPagesOpen && jsx("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => setIsMockPagesOpen(true),
								onMouseLeave: () => setIsMockPagesOpen(false),
								children: jsx("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: mockPages.map((page) => jsx(Link, {
										href: page.href,
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => setIsMockPagesOpen(false),
										children: page.label
									}, page.href))
								})
							})]
						})
					]
				})]
			}), jsxs("div", {
				className: "flex items-center gap-4",
				children: [
					jsxs("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [jsx("span", {
							className: "sr-only",
							children: t("shared.header.goToGithub")
						}), jsx("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: jsx("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					jsx(LocaleSwitcher, {}),
					jsx(ThemeToggle, {})
				]
			})]
		})
	});
}
var __assign = function() {
	__assign = Object.assign || function(t) {
		for (var s, i = 1, n = arguments.length; i < n; i++) {
			s = arguments[i];
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
		}
		return t;
	};
	return __assign.apply(this, arguments);
};
var InternalContext = createContext({
	ns: {},
	config: {}
});
function I18nProvider(_a) {
	var lng = _a.lang, _b = _a.namespaces, namespaces = _b === void 0 ? {} : _b, children = _a.children, _c = _a.config, newConfig = _c === void 0 ? {} : _c;
	var parentLang = useTranslation().lang;
	var _d = useRouter$1() || {}, locale = _d.locale, defaultLocale = _d.defaultLocale;
	var internal = useContext(InternalContext);
	var allNamespaces = __assign(__assign(__assign({}, initialBrowserNamespaces()), internal.ns), namespaces);
	var lang = lng || parentLang || locale || defaultLocale || "";
	var config = __assign(__assign({}, internal.config), newConfig);
	var localesToIgnore = config.localesToIgnore || ["default"];
	var ignoreLang = !lang || localesToIgnore.includes(lang);
	var pluralRules = useMemo(function() {
		return safePluralRules(ignoreLang ? void 0 : lang);
	}, [ignoreLang, lang]);
	var t = useMemo(function() {
		return transCore({
			config,
			allNamespaces,
			pluralRules,
			lang
		});
	}, [
		config,
		allNamespaces,
		pluralRules,
		lang
	]);
	return React.createElement(context_default.Provider, { value: {
		lang,
		t
	} }, React.createElement(InternalContext.Provider, { value: {
		ns: allNamespaces,
		config
	} }, children));
}
function initialBrowserNamespaces() {
	var _a, _b;
	if (typeof window === "undefined") return {};
	return ((_b = (_a = window.__NEXT_DATA__) === null || _a === void 0 ? void 0 : _a.props) === null || _b === void 0 ? void 0 : _b.__namespaces) || {};
}
var about_default = {
	"aboutHeader.methodology": "Methodology",
	"aboutHeader.weDesignedThisBenchmarkTo": "We designed this benchmark to provide fair, reproducible, and meaningful comparisons of i18n libraries. Here's our approach.",
	"whatWeMeasure.bundleSizeImpact": "Bundle size impact",
	"whatWeMeasure.theAdditionalJavascriptBytesSent": "The additional JavaScript bytes sent to the client specifically due to the i18n library runtime, plus the translation files for the current locale.",
	"whatWeMeasure.renderingOverhead": "Rendering overhead",
	"whatWeMeasure.howMuchExtraTimeThe": "How much extra time the i18n layer adds to each component render — measured using React Profiler's actualDuration.",
	"whatWeMeasure.hydrationCost": "Hydration cost",
	"whatWeMeasure.duringSsrTranslationDataIs": "During SSR, translation data is serialized into the HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
	"whatWeMeasure.lazyLoadingEffectiveness": "Lazy loading effectiveness",
	"whatWeMeasure.whetherSplittingTranslationsByRoute": "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
	"whatWeMeasure.localeSwitchSpeed": "Locale switch speed",
	"whatWeMeasure.howFastTheAppCan": "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
	"whatWeMeasure.whatWeMeasure": "What We Measure",
	"aboutGrid.testEnvironment": "Test Environment",
	"aboutGrid.allBenchmarksRunOn": "All benchmarks run on the same hardware (M2 MacBook Pro, 16 GB RAM), same browser (Chromium 120 via Playwright), and same network conditions (simulated 4G). Each test is repeated 50 times and we report the median with P95/P99 percentiles.",
	"aboutGrid.applicationDesign": "Application Design",
	"aboutGrid.theBenchmarkAppHas10": "The benchmark app has 10 pages with realistic content — navigation, forms, dynamic lists, and static text. Each page uses 15–30 translation keys to represent real-world usage patterns rather than synthetic micro-benchmarks.",
	"aboutGrid.measurementMethodology": "Measurement Methodology",
	"aboutGrid.weUseBrowserNativeApis": "We use browser-native APIs (Performance Timeline, Resource Timing, Layout Instability) combined with React Profiler data. Bundle sizes are measured post-gzip using source-map-explorer for accuracy.",
	"aboutGrid.fairComparison": "Fair Comparison",
	"aboutGrid.eachI18nLibraryIsIntegrated": "Each i18n library is integrated following its official documentation and best practices. We consult maintainers when possible to ensure optimal configuration. The same React app, same Vite config, same deployment."
};
var blog_default = {
	"blogList.i18nBenchmark2026Results": "i18n Benchmark 2026 Results",
	"blogList.march152026": "March 15, 2026",
	"blogList.weTested12DifferentInternationalization": "We tested 12 different internationalization libraries across 10 pages. Here are the detailed results with interactive charts.",
	"blogList.howToReduceYourI18n": "How to Reduce Your i18n Bundle by 60%",
	"blogList.march82026": "March 8, 2026",
	"blogList.practicalStrategiesForOptimizingTranslation": "Practical strategies for optimizing translation file loading, tree-shaking unused locales, and leveraging build-time compilation.",
	"blogList.theStateOfInternationalizationIn": "The State of Internationalization in 2026",
	"blogList.february282026": "February 28, 2026",
	"blogList.anOverviewOfTheCurrent": "An overview of the current i18n ecosystem, comparing approaches from message catalogs to compiler-based solutions.",
	"blogList.migratingFromReactI18nextTo": "Migrating from react-i18next to Lingui",
	"blogList.february152026": "February 15, 2026",
	"blogList.aStepByStepGuide": "A step-by-step guide for migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
	"blogList.serverComponentsAndI18nWhat": "Server Components and i18n: What Changes?",
	"blogList.february12026": "February 1, 2026",
	"blogList.reactServerComponentsIntroduceNew": "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
	"blogList.benchmarkMethodologyHowWeTest": "Benchmark Methodology: How We Test",
	"blogList.january202026": "January 20, 2026",
	"blogList.aTransparentLookAtOur": "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
	"blogList.readMore": "Read More →",
	"blogHeader.blog": "Blog",
	"blogHeader.insightsDeepDivesAnd": "Insights, deep dives, and updates from the i18n benchmarking community."
};
var careers_default = {
	"careersHeader.careers": "Careers",
	"careersHero.fromAnywhere": "from anywhere in the world",
	"careersBenefits.competitivePay": "Competitive pay",
	"careersBenefits.topOfMarket": "Top-of-market compensation",
	"careersBenefits.openSourceTime": "Open source time",
	"careersBenefits.twentyPercentTime": "20% time for OSS",
	"careersPositions.seniorFrontendEngineer": "Senior Frontend Engineer",
	"careersPositions.seniorFrontendEngineerDesc": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
	"openPositions.openPositions": "Open Positions",
	"openPositions.remote": "Remote",
	"openPositions.fullTime": "Full-time",
	"openPositions.applyNow": "Apply Now"
};
var contact_default = {
	"contactForm.name": "Name",
	"contactForm.email": "Email",
	"contactForm.subject": "Subject",
	"contactForm.message": "Message",
	"contactForm.sendMessage": "Send Message",
	"contactForm.wellGetBackTo": "We'll get back to you within 48 hours.",
	"contactHeader.contactUs": "Contact Us",
	"contactHeader.haveQuestionsOrWantTo": "Have questions or want to contribute? We'd love to hear from you."
};
var faq_default = {
	"faqList.howAreTheBenchmarks": "How are the benchmarks run?",
	"faqList.allBenchmarksAreRun": "All benchmarks are run using Playwright on a consistent hardware setup (M2 MacBook Pro) with simulated 4G network conditions. Each test runs 50 iterations and we report median, P95, and P99 values.",
	"faqList.whatLibrariesAreCurrently": "What libraries are currently tested?",
	"faqList.weCurrentlyBenchmarkReactI18next": "We currently benchmark react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl, and Paraglide. We plan to add more based on community requests.",
	"faqList.canIContributeA": "Can I contribute a new library integration?",
	"faqList.absolutelyWeWelcomeCommunity": "Absolutely! We welcome community contributions. Fork the repository, add your library integration following our template, and submit a pull request. See the Contributing guide for details.",
	"faqList.howOftenAreResults": "How often are results updated?",
	"faqList.benchmarksRunAutomaticallyVia": "Benchmarks run automatically via CI on every dependency update and weekly on the main branch. Results are published to the dashboard within 24 hours.",
	"faqList.areTheResultsStatistically": "Are the results statistically significant?",
	"faqList.yesWeUseThe": "Yes. We use the Mann-Whitney U test with a significance level of 0.05 to compare distributions. We also report confidence intervals and effect sizes.",
	"faq-header1.frequentlyAskedQuestions": "Frequently Asked Questions",
	"faq-header1.everythingYouNeedToKnow": "Everything you need to know about i18n Benchmark."
};
var home_default = {
	"understandingImpact.understandingTheImpact": "Understanding the Impact",
	"understandingImpact.whyASingleLargeJson": "Why a single large JSON can hurt performance",
	"understandingImpact.manyI18nLibrariesStoreTranslations": "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
	"understandingImpact.theJsonMustBeParsed": "The JSON must be parsed on every page load — blocking the main thread.",
	"understandingImpact.contextBasedArchitecturesCanCause": "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
	"understandingImpact.duringServerSideRenderingThe": "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
	"understandingImpact.theTradeOffsOfDynamic": "The trade-offs of dynamic loading",
	"understandingImpact.splittingTranslationsIntoPerRoute": "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
	"understandingImpact.waterfallRequests": "Waterfall requests:",
	"understandingImpact.flashOfUntranslatedContentFouc": "Flash of untranslated content (FOUC):",
	"understandingImpact.cacheInvalidation": "Cache invalidation:",
	"understandingImpact.whatThisBenchmarkMeasures": "What this benchmark measures",
	"understandingImpact.thisTestAppProvidesA": "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.",
	"whyItMatters.whyTheseMetricsMatter": "Why These Metrics Matter",
	"whyItMatters.bundleSize": "Bundle Size",
	"whyItMatters.theBundleIsTheData": "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
	"whyItMatters.renderingHydration": "Rendering & Hydration",
	"whyItMatters.connectingALargeJson": "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
	"whyItMatters.dynamicLoading": "Dynamic Loading",
	"whyItMatters.loadingAllTranslationsUpfront": "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.",
	"resultsTable.sampleResults": "Sample Results",
	"resultsTable.bundleSize": "Bundle Size",
	"resultsTable.lookupTime": "Lookup Time",
	"resultsTable.lazyLoading": "Lazy Loading",
	"hero.aTestApplicationDesignedTo": "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
	"hero.viewResults": "View Results"
};
var pricing_default = {
	"pricingTiers.starterTier": "Starter",
	"pricingTiers.starterPrice": "$0",
	"pricingTiers.forever": "forever",
	"pricingTiers.runsPerDay": "5 benchmark runs/day",
	"pricingTiers.libraries3": "3 libraries",
	"pricingTiers.communitySupport": "Community support",
	"pricingTiers.publicResults": "Public results",
	"pricingTiers.getStarted": "Get Started",
	"pricingTiers.proTier": "Pro",
	"pricingTiers.proPrice": "$29",
	"pricingTiers.perMonth": "/month",
	"pricingTiers.unlimitedRuns": "Unlimited runs",
	"pricingTiers.allLibraries": "All libraries",
	"pricingTiers.prioritySupport": "Priority support",
	"pricingTiers.privateResults": "Private results",
	"pricingTiers.ciIntegration": "CI integration",
	"pricingTiers.historicalData": "Historical data",
	"pricingTiers.enterpriseTier": "Enterprise",
	"pricingTiers.custom": "Custom",
	"pricingTiers.everythingInPro": "Everything in Pro",
	"pricingTiers.onPremiseOption": "On-premise option",
	"pricingTiers.ssoSaml": "SSO & SAML",
	"pricingTiers.dedicatedAccountManager": "Dedicated account manager",
	"pricingTiers.customSLAs": "Custom SLAs",
	"pricingTiers.auditLogs": "Audit logs",
	"pricingTiers.trainingSessions": "Training sessions",
	"pricingTiers.contactSales": "Contact Sales",
	"pricingHeader.pricing": "Pricing",
	"pricingHeader.transparentPricingForEvery": "Transparent pricing for every stage of your i18n journey."
};
var products_default = {
	"products.benchmarkCLI": "Benchmark CLI",
	"products.benchmarkCLIDesc": "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
	"products.benchmarkCLIPrice": "Free",
	"products.benchmarkCloud": "Benchmark Cloud",
	"products.benchmarkCloudDesc": "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
	"products.benchmarkCloudPrice": "$29/mo",
	"products.benchmarkEnterprise": "Benchmark Enterprise",
	"products.benchmarkEnterpriseDesc": "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
	"products.benchmarkEnterprisePrice": "Contact Us",
	"products.migrationAssistant": "Migration Assistant",
	"products.migrationAssistantDesc": "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
	"products.migrationAssistantPrice": "$99 one-time",
	"products.translationQA": "Translation QA",
	"products.translationQADesc": "Automated quality checks for missing translations, pluralization issues, and context errors.",
	"products.translationQAPrice": "$19/mo",
	"products.bundleOptimizer": "Bundle Optimizer",
	"products.bundleOptimizerDesc": "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
	"products.bundleOptimizerPrice": "$49/mo",
	"products.learnMore": "Learn More",
	"productsHeader.ourProducts": "Our Products",
	"productsHeader.exploreOurSuiteOfTools": "Explore our suite of tools designed to help you build better i18n apps."
};
var route_default = {
	"route.oopsPageNotFound": "Oops! Page not found",
	"route.returnToHome": "Return to Home",
	"route.couldNotMeasureHydrationDuration": "Could not measure hydration duration:"
};
var settings_default = {
	"preferencesSection.preferences": "Preferences",
	"preferencesSection.emailNotifications": "Email Notifications",
	"preferencesSection.receiveWeeklyBenchmarkReports": "Receive weekly benchmark reports",
	"preferencesSection.darkMode": "Dark Mode",
	"preferencesSection.useDarkColorScheme": "Use dark color scheme",
	"preferencesSection.defaultLanguage": "Default Language",
	"settingsHeader.settings": "Settings",
	"settingsHeader.manageYourAccountPreferences": "Manage your account preferences and configuration.",
	"settingsFooter.cancel": "Cancel",
	"settingsFooter.saveChanges": "Save Changes",
	"apiAccessSection.apiAccess": "API Access",
	"apiAccessSection.apiKey": "API Key",
	"apiAccessSection.useThisKeyTo": "Use this key to access the benchmarking API programmatically.",
	"apiAccessSection.copy": "Copy",
	"profileSection.profile": "Profile",
	"profileSection.displayName": "Display Name",
	"profileSection.email": "Email"
};
var shared_default = {
	"header.home": "Home",
	"header.methodology": "Methodology",
	"header.mockPages": "Mock Pages",
	"header.products": "Products",
	"header.pricing": "Pricing",
	"header.team": "Team",
	"header.blog": "Blog",
	"header.careers": "Careers",
	"header.faq": "FAQ",
	"header.contact": "Contact",
	"header.settings": "Settings",
	"header.goToGithub": "Go to GitHub",
	"footer.resources": "Resources",
	"footer.contact": "Contact",
	"footer.github": "GitHub",
	"footer.methodology": "Methodology",
	"footer.contributing": "Contributing",
	"footer.builtWith": "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
	"footer.anOpenSourceTestApplication": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
	"mockBanner.text": "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.",
	"themeToggle.themeModeAutoSystemClick": "Theme mode: auto (system). Click to switch to light mode.",
	"themeToggle.themeModeLightClick": "Theme mode: light. Click to switch to dark mode.",
	"themeToggle.themeModeDarkClick": "Theme mode: dark. Click to switch to auto (system) mode.",
	"themeToggle.themeAuto": "Theme: Auto",
	"themeToggle.themeDark": "Theme: Dark",
	"themeToggle.themeLight": "Theme: Light"
};
var team_default = {
	"teamGrid.sarahChen": "Sarah Chen",
	"teamGrid.founderLeadEngineer": "Founder & Lead Engineer",
	"teamGrid.formerGoogleEngineerWith10": "Former Google engineer with 10 years of experience building internationalization systems at scale.",
	"teamGrid.marcusWeber": "Marcus Weber",
	"teamGrid.performanceEngineer": "Performance Engineer",
	"teamGrid.specializesInJavascriptPerformanceOptimization": "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
	"teamGrid.aishaPatel": "Aisha Patel",
	"teamGrid.developerAdvocate": "Developer Advocate",
	"teamGrid.passionateAboutDeveloperExperienceAnd": "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
	"teamGrid.tomasRodriguez": "Tomás Rodríguez",
	"teamGrid.fullStackDeveloper": "Full-Stack Developer",
	"teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
	"teamGrid.yukiTanaka": "Yuki Tanaka",
	"teamGrid.dataAnalyst": "Data Analyst",
	"teamGrid.ensuresStatisticalRigorInAll": "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
	"teamGrid.elenaKowalski": "Elena Kowalski",
	"teamGrid.communityManager": "Community Manager",
	"teamGrid.managesCommunityContributionsPartnershipsAnd": "Manages community contributions, partnerships, and events. Background in open source governance.",
	"teamHeader.ourTeam": "Our Team",
	"teamHeader.meetThePeopleBehindI18n": "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
};
function mergeNs(prefix, data) {
	const o = {};
	for (const [k, v] of Object.entries(data)) o[prefix + "." + k] = v;
	return o;
}
var translationsMap = {
	en: {
		...mergeNs("about", about_default),
		...mergeNs("blog", blog_default),
		...mergeNs("careers", careers_default),
		...mergeNs("contact", contact_default),
		...mergeNs("faq", faq_default),
		...mergeNs("home", home_default),
		...mergeNs("pricing", pricing_default),
		...mergeNs("products", products_default),
		...mergeNs("route", route_default),
		...mergeNs("settings", settings_default),
		...mergeNs("shared", shared_default),
		...mergeNs("team", team_default)
	},
	fr: {
		...mergeNs("about", frAbout),
		...mergeNs("blog", frBlog),
		...mergeNs("careers", frCareers),
		...mergeNs("contact", frContact),
		...mergeNs("faq", frFaq),
		...mergeNs("home", frHome),
		...mergeNs("pricing", frPricing),
		...mergeNs("products", frProducts),
		...mergeNs("route", frRoute),
		...mergeNs("settings", frSettings),
		...mergeNs("shared", frShared),
		...mergeNs("team", frTeam)
	},
	es: {
		...mergeNs("about", esAbout),
		...mergeNs("blog", esBlog),
		...mergeNs("careers", esCareers),
		...mergeNs("contact", esContact),
		...mergeNs("faq", esFaq),
		...mergeNs("home", esHome),
		...mergeNs("pricing", esPricing),
		...mergeNs("products", esProducts),
		...mergeNs("route", esRoute),
		...mergeNs("settings", esSettings),
		...mergeNs("shared", esShared),
		...mergeNs("team", esTeam)
	},
	de: {
		...mergeNs("about", deAbout),
		...mergeNs("blog", deBlog),
		...mergeNs("careers", deCareers),
		...mergeNs("contact", deContact),
		...mergeNs("faq", deFaq),
		...mergeNs("home", deHome),
		...mergeNs("pricing", dePricing),
		...mergeNs("products", deProducts),
		...mergeNs("route", deRoute),
		...mergeNs("settings", deSettings),
		...mergeNs("shared", deShared),
		...mergeNs("team", deTeam)
	},
	it: {
		...mergeNs("about", itAbout),
		...mergeNs("blog", itBlog),
		...mergeNs("careers", itCareers),
		...mergeNs("contact", itContact),
		...mergeNs("faq", itFaq),
		...mergeNs("home", itHome),
		...mergeNs("pricing", itPricing),
		...mergeNs("products", itProducts),
		...mergeNs("route", itRoute),
		...mergeNs("settings", itSettings),
		...mergeNs("shared", itShared),
		...mergeNs("team", itTeam)
	},
	pt: {
		...mergeNs("about", ptAbout),
		...mergeNs("blog", ptBlog),
		...mergeNs("careers", ptCareers),
		...mergeNs("contact", ptContact),
		...mergeNs("faq", ptFaq),
		...mergeNs("home", ptHome),
		...mergeNs("pricing", ptPricing),
		...mergeNs("products", ptProducts),
		...mergeNs("route", ptRoute),
		...mergeNs("settings", ptSettings),
		...mergeNs("shared", ptShared),
		...mergeNs("team", ptTeam)
	},
	zh: {
		...mergeNs("about", zhAbout),
		...mergeNs("blog", zhBlog),
		...mergeNs("careers", zhCareers),
		...mergeNs("contact", zhContact),
		...mergeNs("faq", zhFaq),
		...mergeNs("home", zhHome),
		...mergeNs("pricing", zhPricing),
		...mergeNs("products", zhProducts),
		...mergeNs("route", zhRoute),
		...mergeNs("settings", zhSettings),
		...mergeNs("shared", zhShared),
		...mergeNs("team", zhTeam)
	},
	ja: {
		...mergeNs("about", jaAbout),
		...mergeNs("blog", jaBlog),
		...mergeNs("careers", jaCareers),
		...mergeNs("contact", jaContact),
		...mergeNs("faq", jaFaq),
		...mergeNs("home", jaHome),
		...mergeNs("pricing", jaPricing),
		...mergeNs("products", jaProducts),
		...mergeNs("route", jaRoute),
		...mergeNs("settings", jaSettings),
		...mergeNs("shared", jaShared),
		...mergeNs("team", jaTeam)
	},
	ko: {
		...mergeNs("about", koAbout),
		...mergeNs("blog", koBlog),
		...mergeNs("careers", koCareers),
		...mergeNs("contact", koContact),
		...mergeNs("faq", koFaq),
		...mergeNs("home", koHome),
		...mergeNs("pricing", koPricing),
		...mergeNs("products", koProducts),
		...mergeNs("route", koRoute),
		...mergeNs("settings", koSettings),
		...mergeNs("shared", koShared),
		...mergeNs("team", koTeam)
	},
	ru: {
		...mergeNs("about", ruAbout),
		...mergeNs("blog", ruBlog),
		...mergeNs("careers", ruCareers),
		...mergeNs("contact", ruContact),
		...mergeNs("faq", ruFaq),
		...mergeNs("home", ruHome),
		...mergeNs("pricing", ruPricing),
		...mergeNs("products", ruProducts),
		...mergeNs("route", ruRoute),
		...mergeNs("settings", ruSettings),
		...mergeNs("shared", ruShared),
		...mergeNs("team", ruTeam)
	}
};
var i18n_default = {
	locales: [
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
	],
	defaultLocale: "en",
	keySeparator: false,
	nsSeparator: false,
	pages: { "*": ["common"] },
	loadLocaleFrom: async (lang) => {
		return translationsMap[lang ?? "en"] ?? translationsMap.en;
	}
};
function recordHydrationDuration() {
	if (typeof window === "undefined") return;
	console.log("--- BROWSER: RootDocument mounted");
	performance.mark("hydration_end");
	try {
		if (performance.getEntriesByName("hydration_start").length > 0) {
			performance.measure("hydration_duration", "hydration_start", "hydration_end");
			console.log("--- BROWSER: hydration_duration measured");
			const duration = performance.getEntriesByName("hydration_duration")[0]?.duration;
			if (duration) console.log(`Hydration Duration: ${duration.toFixed(2)}ms`);
		} else console.warn("--- BROWSER: hydration_start NOT FOUND");
	} catch (err) {
		console.warn("Could not measure hydration duration:", err);
	}
}
function recordRenderTime(id, startTime) {
	if (typeof window === "undefined") return;
	const renderTime = performance.now() - startTime;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {};
	window.__RENDER_METRICS__[id] = window.__RENDER_METRICS__[id] || [];
	window.__RENDER_METRICS__[id].push(renderTime);
}
function AppProviders({ children, locale }) {
	const [renderStart] = useState(() => typeof performance !== "undefined" ? performance.now() : 0);
	useLayoutEffect(() => {
		recordRenderTime("AppRoot", renderStart);
	}, [renderStart]);
	useEffect(() => {
		document.documentElement.lang = locale;
	}, [locale]);
	useEffect(() => {
		recordHydrationDuration();
	}, []);
	return jsx(Fragment, { children });
}
function Wrapper({ children }) {
	const locale = "en";
	const [translations, setTranslations] = useState({});
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		const loadTranslations = async () => {
			try {
				setTranslations(await i18n_default.loadLocaleFrom?.(locale, "common") ?? {});
				setIsLoaded(true);
			} catch (error) {
				console.error("Failed to load translations:", error);
				setIsLoaded(true);
			}
		};
		loadTranslations();
	}, [locale]);
	if (!isLoaded) return null;
	return jsx(I18nProvider, {
		lang: locale,
		namespaces: { common: translations },
		children: jsx(AppProviders, {
			locale,
			children
		})
	});
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(Header, {}) });
}
export { Wrapped as default };
