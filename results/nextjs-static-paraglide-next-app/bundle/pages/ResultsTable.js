import { useEffect, useLayoutEffect, useState } from "react";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
import { useParams } from "next/navigation";
var URLPattern = {};
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
var cookieName = "PARAGLIDE_LOCALE";
var cookieMaxAge = 3456e4;
var strategy = [
	"cookie",
	"globalVariable",
	"baseLocale"
];
var routeStrategies = [];
var serverAsyncLocalStorage = void 0;
var isServer = typeof window === "undefined";
globalThis.__paraglide = globalThis.__paraglide ?? {};
globalThis.__paraglide.ssr = globalThis.__paraglide.ssr ?? {};
var _locale;
var localeInitiallySet = false;
var getLocale = () => {
	if (serverAsyncLocalStorage) {
		const locale = serverAsyncLocalStorage?.getStore()?.locale;
		if (locale) return locale;
	}
	let strategyToUse = strategy;
	if (!isServer && typeof window !== "undefined" && window.location?.href) strategyToUse = getStrategyForUrl(window.location.href);
	const resolved = resolveLocaleWithStrategies(strategyToUse, typeof window !== "undefined" ? window.location?.href : void 0);
	if (resolved) {
		if (!localeInitiallySet) {
			_locale = resolved;
			localeInitiallySet = true;
			setLocale(resolved, { reload: false });
		}
		return resolved;
	}
	throw new Error("No locale found. Read the docs https://paraglidejs.com/errors#no-locale-found");
};
function resolveLocaleWithStrategies(strategyToUse, urlForUrlStrategy) {
	let locale;
	for (const strat of strategyToUse) {
		if (strat === "cookie") locale = extractLocaleFromCookie();
		else if (strat === "baseLocale") locale = "en";
		else if (strat === "globalVariable" && _locale !== void 0) locale = _locale;
		else if (isCustomStrategy(strat) && customClientStrategies.has(strat)) {
			const handler = customClientStrategies.get(strat);
			if (handler) {
				const result = handler.getLocale();
				if (result instanceof Promise) continue;
				if (result !== void 0) return assertIsLocale(result);
			}
		}
		const matchedLocale = toLocale(locale);
		if (matchedLocale) return matchedLocale;
	}
}
var navigateOrReload = (newLocation) => {
	if (newLocation) window.location.href = newLocation;
	else window.location.reload();
};
var setLocale = (newLocale, options) => {
	const optionsWithDefaults = {
		reload: true,
		...options
	};
	let currentLocale;
	try {
		currentLocale = getLocale();
	} catch {}
	const customSetLocalePromises = [];
	let newLocation = void 0;
	let strategyToUse = strategy;
	if (!isServer && typeof window !== "undefined" && window.location?.href) strategyToUse = getStrategyForUrl(window.location.href);
	for (const strat of strategyToUse) if (strat === "globalVariable") _locale = newLocale;
	else if (strat === "cookie") {
		if (isServer || typeof document === "undefined" || typeof window === "undefined") continue;
		const cookieString = `${cookieName}=${newLocale}; path=/; max-age=${cookieMaxAge}`;
		document.cookie = cookieString;
		clearLocaleCookieCache();
	} else if (strat === "baseLocale") continue;
	else if (isCustomStrategy(strat) && customClientStrategies.has(strat)) {
		const handler = customClientStrategies.get(strat);
		if (handler) {
			let result = handler.setLocale(newLocale);
			if (result instanceof Promise) {
				result = result.catch((error) => {
					throw new Error(`Custom strategy "${strat}" setLocale failed.`, { cause: error });
				});
				customSetLocalePromises.push(result);
			}
		}
	}
	const runReload = () => {
		if (!isServer && optionsWithDefaults.reload && window.location && newLocale !== currentLocale) navigateOrReload(newLocation);
	};
	if (customSetLocalePromises.length) return Promise.all(customSetLocalePromises).then(() => {
		runReload();
	});
	runReload();
};
var getUrlOrigin = () => {
	if (serverAsyncLocalStorage) return serverAsyncLocalStorage.getStore()?.origin ?? "http://fallback.com";
	else if (typeof window !== "undefined") return window.location.origin;
	return "http://fallback.com";
};
function toLocale(value) {
	if (typeof value !== "string") return;
	const lowerValue = value.toLowerCase();
	for (const locale of locales) if (locale.toLowerCase() === lowerValue) return locale;
}
function assertIsLocale(input) {
	const locale = toLocale(input);
	if (locale) return locale;
	throw new Error(`Invalid locale: ${input}. Expected one of: ${locales.join(", ")}`);
}
function normalizeTrailingSlash(url) {
	return url;
}
function execUrlPattern(pattern, url) {
	return pattern.exec(url.href);
}
var cookieNamePattern = cookieName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
var localeCookiePattern = new RegExp(`(?:^|;\\s*)${cookieNamePattern}=([^;]*)`);
var noCachedLocale = Symbol();
var cachedLocaleFromCookie = noCachedLocale;
function clearLocaleCookieCache() {
	cachedLocaleFromCookie = noCachedLocale;
}
function scheduleLocaleCookieCacheClear() {
	if (typeof queueMicrotask === "function") queueMicrotask(clearLocaleCookieCache);
	else Promise.resolve().then(clearLocaleCookieCache);
}
function extractLocaleFromCookie() {
	if (typeof document === "undefined") return;
	if (cachedLocaleFromCookie !== noCachedLocale) return cachedLocaleFromCookie;
	const locale = document.cookie.match(localeCookiePattern)?.[1];
	cachedLocaleFromCookie = toLocale(locale);
	scheduleLocaleCookieCacheClear();
	return cachedLocaleFromCookie;
}
function deLocalizeUrl(url) {
	return deLocalizeUrlDefaultPattern(url);
}
function deLocalizeUrlDefaultPattern(url) {
	const urlObj = normalizeTrailingSlash(typeof url === "string" ? new URL(url, getUrlOrigin()) : new URL(url));
	const pathSegments = urlObj.pathname.split("/").filter(Boolean);
	if (pathSegments.length > 0 && toLocale(pathSegments[0])) urlObj.pathname = "/" + pathSegments.slice(1).join("/");
	return normalizeTrailingSlash(urlObj);
}
var cachedRouteStrategyUrl;
var cachedRouteStrategy;
function findMatchingRouteStrategy(url) {
	if (routeStrategies.length === 0) return;
	const urlString = typeof url === "string" ? url : url.href;
	if (cachedRouteStrategyUrl === urlString) return cachedRouteStrategy;
	const publicUrl = normalizeTrailingSlash(new URL(urlString, "http://example.com"));
	const canonicalUrl = deLocalizeUrl(publicUrl);
	const candidateUrls = canonicalUrl.href === publicUrl.href ? [publicUrl] : [publicUrl, canonicalUrl];
	let match;
	for (const candidateUrl of candidateUrls) {
		for (const routeStrategy of routeStrategies) if (execUrlPattern(new URLPattern(routeStrategy.match, candidateUrl.href), candidateUrl)) {
			match = routeStrategy;
			break;
		}
		if (match) break;
	}
	cachedRouteStrategyUrl = urlString;
	cachedRouteStrategy = match;
	return match;
}
function getStrategyForUrl(url) {
	const routeStrategy = findMatchingRouteStrategy(url);
	if (routeStrategy && routeStrategy.exclude !== true && Array.isArray(routeStrategy.strategy)) return routeStrategy.strategy;
	return strategy;
}
var customClientStrategies = /* @__PURE__ */ new Map();
function isCustomStrategy(strategy) {
	return typeof strategy === "string" && /^custom-[A-Za-z0-9_-]+$/.test(strategy);
}
var en_results_table_bundlesize1 = () => {
	return `Bundle size`;
};
var fr_results_table_bundlesize1 = () => {
	return `Taille du bundle`;
};
var es_results_table_bundlesize1 = () => {
	return `Tamaño del bundle`;
};
var it_results_table_bundlesize1 = () => {
	return `Dimensione del bundle`;
};
var pt_results_table_bundlesize1 = () => {
	return `Tamanho do bundle`;
};
var zh_results_table_bundlesize1 = () => {
	return `包大小`;
};
var ja_results_table_bundlesize1 = () => {
	return `バンドルサイズ`;
};
var ko_results_table_bundlesize1 = () => {
	return `번들 크기`;
};
var ru_results_table_bundlesize1 = () => {
	return `Размер бандла`;
};
var de_results_table_bundlesize1 = en_results_table_bundlesize1;
var results_table_bundlesize1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_results_table_bundlesize1(inputs);
	if (locale === "es") return es_results_table_bundlesize1(inputs);
	if (locale === "de") return de_results_table_bundlesize1(inputs);
	if (locale === "it") return it_results_table_bundlesize1(inputs);
	if (locale === "pt") return pt_results_table_bundlesize1(inputs);
	if (locale === "zh") return zh_results_table_bundlesize1(inputs);
	if (locale === "ja") return ja_results_table_bundlesize1(inputs);
	if (locale === "ko") return ko_results_table_bundlesize1(inputs);
	if (locale === "ru") return ru_results_table_bundlesize1(inputs);
	return en_results_table_bundlesize1(inputs);
});
var en_results_table_lazyloading1 = () => {
	return `Lazy loading`;
};
var fr_results_table_lazyloading1 = () => {
	return `Chargement différé`;
};
var es_results_table_lazyloading1 = () => {
	return `Carga diferida`;
};
var de_results_table_lazyloading1 = () => {
	return `Lazy Loading`;
};
var it_results_table_lazyloading1 = () => {
	return `Caricamento lazy`;
};
var pt_results_table_lazyloading1 = () => {
	return `Carregamento lento`;
};
var zh_results_table_lazyloading1 = () => {
	return `延迟加载`;
};
var ja_results_table_lazyloading1 = () => {
	return `遅延読み込み`;
};
var ko_results_table_lazyloading1 = () => {
	return `지연 로딩`;
};
var ru_results_table_lazyloading1 = () => {
	return `Ленивая загрузка`;
};
var results_table_lazyloading1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_results_table_lazyloading1(inputs);
	if (locale === "es") return es_results_table_lazyloading1(inputs);
	if (locale === "de") return de_results_table_lazyloading1(inputs);
	if (locale === "it") return it_results_table_lazyloading1(inputs);
	if (locale === "pt") return pt_results_table_lazyloading1(inputs);
	if (locale === "zh") return zh_results_table_lazyloading1(inputs);
	if (locale === "ja") return ja_results_table_lazyloading1(inputs);
	if (locale === "ko") return ko_results_table_lazyloading1(inputs);
	if (locale === "ru") return ru_results_table_lazyloading1(inputs);
	return en_results_table_lazyloading1(inputs);
});
var en_results_table_library = () => {
	return `Library`;
};
var fr_results_table_library = () => {
	return `Bibliothèque`;
};
var es_results_table_library = () => {
	return `Biblioteca`;
};
var de_results_table_library = () => {
	return `Bibliothek`;
};
var it_results_table_library = () => {
	return `Libreria`;
};
var pt_results_table_library = () => {
	return `Biblioteca`;
};
var zh_results_table_library = () => {
	return `库`;
};
var ja_results_table_library = () => {
	return `ライブラリ`;
};
var ko_results_table_library = () => {
	return `라이브러리`;
};
var ru_results_table_library = () => {
	return `Библиотека`;
};
var results_table_library = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_results_table_library(inputs);
	if (locale === "es") return es_results_table_library(inputs);
	if (locale === "de") return de_results_table_library(inputs);
	if (locale === "it") return it_results_table_library(inputs);
	if (locale === "pt") return pt_results_table_library(inputs);
	if (locale === "zh") return zh_results_table_library(inputs);
	if (locale === "ja") return ja_results_table_library(inputs);
	if (locale === "ko") return ko_results_table_library(inputs);
	if (locale === "ru") return ru_results_table_library(inputs);
	return en_results_table_library(inputs);
});
var en_results_table_lookuptime1 = () => {
	return `Lookup time`;
};
var fr_results_table_lookuptime1 = () => {
	return `Temps de recherche`;
};
var es_results_table_lookuptime1 = () => {
	return `Tiempo de búsqueda`;
};
var de_results_table_lookuptime1 = () => {
	return `Suchzeit`;
};
var it_results_table_lookuptime1 = () => {
	return `Tempo di ricerca`;
};
var pt_results_table_lookuptime1 = () => {
	return `Tempo de consulta`;
};
var zh_results_table_lookuptime1 = () => {
	return `查找时间`;
};
var ja_results_table_lookuptime1 = () => {
	return `ルックアップ時間`;
};
var ko_results_table_lookuptime1 = () => {
	return `조회 시간`;
};
var ru_results_table_lookuptime1 = () => {
	return `Время поиска`;
};
var results_table_lookuptime1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_results_table_lookuptime1(inputs);
	if (locale === "es") return es_results_table_lookuptime1(inputs);
	if (locale === "de") return de_results_table_lookuptime1(inputs);
	if (locale === "it") return it_results_table_lookuptime1(inputs);
	if (locale === "pt") return pt_results_table_lookuptime1(inputs);
	if (locale === "zh") return zh_results_table_lookuptime1(inputs);
	if (locale === "ja") return ja_results_table_lookuptime1(inputs);
	if (locale === "ko") return ko_results_table_lookuptime1(inputs);
	if (locale === "ru") return ru_results_table_lookuptime1(inputs);
	return en_results_table_lookuptime1(inputs);
});
var en_results_table_sampleresults1 = () => {
	return `Sample Results`;
};
var fr_results_table_sampleresults1 = () => {
	return `Exemples de résultats`;
};
var es_results_table_sampleresults1 = () => {
	return `Resultados de muestra`;
};
var it_results_table_sampleresults1 = () => {
	return `Risultati di esempio`;
};
var pt_results_table_sampleresults1 = () => {
	return `Resultados de amostra`;
};
var zh_results_table_sampleresults1 = () => {
	return `样本结果`;
};
var ja_results_table_sampleresults1 = () => {
	return `サンプル結果`;
};
var ko_results_table_sampleresults1 = () => {
	return `샘플 결과`;
};
var ru_results_table_sampleresults1 = () => {
	return `Примеры результатов`;
};
var de_results_table_sampleresults1 = en_results_table_sampleresults1;
var results_table_sampleresults1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_results_table_sampleresults1(inputs);
	if (locale === "es") return es_results_table_sampleresults1(inputs);
	if (locale === "de") return de_results_table_sampleresults1(inputs);
	if (locale === "it") return it_results_table_sampleresults1(inputs);
	if (locale === "pt") return pt_results_table_sampleresults1(inputs);
	if (locale === "zh") return zh_results_table_sampleresults1(inputs);
	if (locale === "ja") return ja_results_table_sampleresults1(inputs);
	if (locale === "ko") return ko_results_table_sampleresults1(inputs);
	if (locale === "ru") return ru_results_table_sampleresults1(inputs);
	return en_results_table_sampleresults1(inputs);
});
var _jsxFileName$3 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/pages/home/ResultsTable.tsx";
function ResultsTable() {
	return jsxDEV("section", { children: [jsxDEV("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: results_table_sampleresults1()
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 30,
		columnNumber: 7
	}, this), jsxDEV("div", {
		className: "overflow-x-auto rounded-lg border border-border",
		children: jsxDEV("table", {
			className: "w-full text-sm",
			children: [jsxDEV("thead", {
				className: "bg-muted",
				children: jsxDEV("tr", { children: [
					jsxDEV("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: results_table_library ? results_table_library() : "Library"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 37,
						columnNumber: 15
					}, this),
					jsxDEV("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: results_table_bundlesize1()
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 40,
						columnNumber: 15
					}, this),
					jsxDEV("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: results_table_lookuptime1()
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 43,
						columnNumber: 15
					}, this),
					jsxDEV("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: results_table_lazyloading1()
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 46,
						columnNumber: 15
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 36,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 35,
				columnNumber: 11
			}, this), jsxDEV("tbody", { children: [
				{
					lib: "react-i18next",
					size: "42.3 kB",
					time: "0.12ms",
					lazy: "Yes"
				},
				{
					lib: "react-intl",
					size: "38.1 kB",
					time: "0.15ms",
					lazy: "Manual"
				},
				{
					lib: "lingui",
					size: "12.8 kB",
					time: "0.08ms",
					lazy: "Yes"
				},
				{
					lib: "typesafe-i18n",
					size: "5.2 kB",
					time: "0.05ms",
					lazy: "Built-in"
				}
			].map((r) => jsxDEV("tr", {
				className: "border-t border-border",
				children: [
					jsxDEV("td", {
						className: "px-4 py-3 font-medium text-foreground",
						children: r.lib
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 54,
						columnNumber: 17
					}, this),
					jsxDEV("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: r.size
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 57,
						columnNumber: 17
					}, this),
					jsxDEV("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: r.time
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 58,
						columnNumber: 17
					}, this),
					jsxDEV("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: r.lazy
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 59,
						columnNumber: 17
					}, this)
				]
			}, r.lib, true, {
				fileName: _jsxFileName$3,
				lineNumber: 53,
				columnNumber: 15
			}, this)) }, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 51,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 34,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 33,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 29,
		columnNumber: 5
	}, this);
}
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
var _jsxFileName$2 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/AppProviders.tsx";
function AppProviders({ children }) {
	const locale = useParams().locale ?? "en";
	const [renderStart] = useState(() => typeof performance !== "undefined" ? performance.now() : 0);
	useLayoutEffect(() => {
		recordRenderTime("AppRoot", renderStart);
	}, [renderStart]);
	useEffect(() => {
		setLocale(locale, { reload: false });
		document.documentElement.lang = locale;
	}, [locale]);
	useEffect(() => {
		recordHydrationDuration();
	}, []);
	return jsxDEV(Fragment, { children }, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 31,
		columnNumber: 10
	}, this);
}
var _jsxFileName$1 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/scripts/Wrapper.tsx";
function Wrapper({ children }) {
	return jsxDEV(AppProviders, { children }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/pages/home/ResultsTable.wrapper.tsx";
function Wrapped() {
	return jsxDEV(Wrapper, { children: jsxDEV(ResultsTable, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Wrapped as default };
