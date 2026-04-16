import React, { Profiler, useContext, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import NextLink from "next/link";
import { jsx, jsxs } from "react/jsx-runtime";
import { ChevronDown } from "lucide-react";
//#region components/Link.tsx
var checkIsExternalLink = (href) => /^https?:\/\//.test(href ?? "");
var Link = ({ href, children, ...props }) => {
	const currentLocale = useParams().lang ?? "en";
	const isExternalLink = checkIsExternalLink(href.toString());
	return jsx(NextLink, {
		href: href && !isExternalLink && !href.toString().startsWith(`/${currentLocale}`) ? `/${currentLocale}${href}` : href,
		...props,
		children
	});
};
//#endregion
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/wrapTWithDefaultNs.js
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
function wrapTWithDefaultNs(oldT, ns) {
	if (typeof ns !== "string") return oldT;
	var t = function(key, query, options) {
		return oldT(key, query, __assign$2({ ns }, options));
	};
	return t;
}
//#endregion
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/context.js
var context;
if (typeof React.createContext === "function") context = React.createContext({
	t: function(k) {
		return Array.isArray(k) ? k[0] : k;
	},
	lang: ""
});
var context_default = context;
//#endregion
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/isServer.js
function isServer() {
	return typeof window === "undefined";
}
//#endregion
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/safePluralRules.js
function safePluralRules(locale) {
	try {
		return new Intl.PluralRules(locale);
	} catch (_e) {
		return new Intl.PluralRules();
	}
}
//#endregion
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/transCore.js
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
			if (typeof firstFallback === "string") return t(firstFallback, query, __assign$1(__assign$1({}, options), { fallback: restFallbacks }));
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
//#endregion
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/createTranslation.js
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
//#endregion
//#region ../../../node_modules/.bun/next-translate@3.1.2+4766e5f4053ef6d3/node_modules/next-translate/lib/esm/useTranslation.js
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
function useTranslationInPages(defaultNS) {
	var ctx = useContext(context_default);
	return useMemo(function() {
		return __assign(__assign({}, ctx), { t: wrapTWithDefaultNs(ctx.t, defaultNS) });
	}, [ctx, defaultNS]);
}
function useTranslation(defaultNS) {
	var appDir = globalThis.__NEXT_TRANSLATE__;
	return ((appDir === null || appDir === void 0 ? void 0 : appDir.config) ? createTranslation : useTranslationInPages)(defaultNS);
}
//#endregion
//#region components/ThemeToggle.tsx
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
//#endregion
//#region i18n/config.ts
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
//#endregion
//#region components/LocaleSwitcher.tsx
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
//#endregion
//#region hooks/usePerformanceMeasure.ts
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
//#endregion
//#region components/Header.tsx
function Header() {
	const { t } = useTranslation("common");
	usePerformanceMeasure("Header");
	const [isMockPagesOpen, setIsMockPagesOpen] = useState(false);
	const currentLocale = useParams().lang ?? "en";
	const pathname = usePathname();
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
	const isExactActive = (href) => pathname === href;
	const isActive = (href) => pathname.startsWith(href);
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
							className: `nav-link${isExactActive(`/${currentLocale}`) ? " is-active" : ""}`,
							children: t("shared.header.home")
						}),
						jsx(Link, {
							href: "/about",
							className: `nav-link${isActive(`/${currentLocale}/about`) ? " is-active" : ""}`,
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
//#endregion
//#region ../../../test-utils/src/browser-metrics.ts
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
function onRenderCallback(id, phase, actualDuration) {
	if (typeof window === "undefined") return;
	if (phase === "nested-update") return;
	try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {};
		window.__RENDER_METRICS__[id] = window.__RENDER_METRICS__[id] || [];
		window.__RENDER_METRICS__[id].push(actualDuration);
	} catch (err) {
		console.warn("onRenderCallback failed:", err);
	}
}
//#endregion
//#region components/AppProviders.tsx
function AppProviders({ children, locale }) {
	useEffect(() => {
		document.documentElement.lang = locale;
	}, [locale]);
	useEffect(() => {
		recordHydrationDuration();
	}, []);
	return jsx(Profiler, {
		id: "AppRoot",
		onRender: onRenderCallback,
		children
	});
}
//#endregion
//#region scripts/Wrapper.tsx
function Wrapper({ children }) {
	return jsx(AppProviders, {
		locale: "en",
		children
	});
}
//#endregion
//#region components/Header.wrapper.tsx
function Wrapped() {
	return jsx(Wrapper, { children: jsx(Header, {}) });
}
//#endregion
export { Wrapped as default };
