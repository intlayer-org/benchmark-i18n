import { Profiler, useEffect } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
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
var cachedRouteStrategyUrl;
var cachedRouteStrategy;
function findMatchingRouteStrategy(url) {
	if (routeStrategies.length === 0) return;
	const urlString = typeof url === "string" ? url : url.href;
	if (cachedRouteStrategyUrl === urlString) return cachedRouteStrategy;
	const urlObject = new URL(urlString, "http://dummy.com");
	let match;
	for (const routeStrategy of routeStrategies) if (new URLPattern(routeStrategy.match, urlObject.href).exec(urlObject.href)) {
		match = routeStrategy;
		break;
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
	throw new Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found");
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
function extractLocaleFromCookie() {
	if (typeof document === "undefined" || !document.cookie) return;
	const locale = document.cookie.match(new RegExp(`(^| )${cookieName}=([^;]+)`))?.[2];
	return toLocale(locale);
}
var customClientStrategies = /* @__PURE__ */ new Map();
function isCustomStrategy(strategy) {
	return typeof strategy === "string" && /^custom-[A-Za-z0-9_-]+$/.test(strategy);
}
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
	if (locale === "en") return en_results_table_sampleresults1(inputs);
	if (locale === "fr") return fr_results_table_sampleresults1(inputs);
	if (locale === "es") return es_results_table_sampleresults1(inputs);
	if (locale === "de") return de_results_table_sampleresults1(inputs);
	if (locale === "it") return it_results_table_sampleresults1(inputs);
	if (locale === "pt") return pt_results_table_sampleresults1(inputs);
	if (locale === "zh") return zh_results_table_sampleresults1(inputs);
	if (locale === "ja") return ja_results_table_sampleresults1(inputs);
	if (locale === "ko") return ko_results_table_sampleresults1(inputs);
	return ru_results_table_sampleresults1(inputs);
});
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
	if (locale === "en") return en_results_table_bundlesize1(inputs);
	if (locale === "fr") return fr_results_table_bundlesize1(inputs);
	if (locale === "es") return es_results_table_bundlesize1(inputs);
	if (locale === "de") return de_results_table_bundlesize1(inputs);
	if (locale === "it") return it_results_table_bundlesize1(inputs);
	if (locale === "pt") return pt_results_table_bundlesize1(inputs);
	if (locale === "zh") return zh_results_table_bundlesize1(inputs);
	if (locale === "ja") return ja_results_table_bundlesize1(inputs);
	if (locale === "ko") return ko_results_table_bundlesize1(inputs);
	return ru_results_table_bundlesize1(inputs);
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
	if (locale === "en") return en_results_table_lookuptime1(inputs);
	if (locale === "fr") return fr_results_table_lookuptime1(inputs);
	if (locale === "es") return es_results_table_lookuptime1(inputs);
	if (locale === "de") return de_results_table_lookuptime1(inputs);
	if (locale === "it") return it_results_table_lookuptime1(inputs);
	if (locale === "pt") return pt_results_table_lookuptime1(inputs);
	if (locale === "zh") return zh_results_table_lookuptime1(inputs);
	if (locale === "ja") return ja_results_table_lookuptime1(inputs);
	if (locale === "ko") return ko_results_table_lookuptime1(inputs);
	return ru_results_table_lookuptime1(inputs);
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
	if (locale === "en") return en_results_table_lazyloading1(inputs);
	if (locale === "fr") return fr_results_table_lazyloading1(inputs);
	if (locale === "es") return es_results_table_lazyloading1(inputs);
	if (locale === "de") return de_results_table_lazyloading1(inputs);
	if (locale === "it") return it_results_table_lazyloading1(inputs);
	if (locale === "pt") return pt_results_table_lazyloading1(inputs);
	if (locale === "zh") return zh_results_table_lazyloading1(inputs);
	if (locale === "ja") return ja_results_table_lazyloading1(inputs);
	if (locale === "ko") return ko_results_table_lazyloading1(inputs);
	return ru_results_table_lazyloading1(inputs);
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
	if (locale === "en") return en_results_table_library(inputs);
	if (locale === "fr") return fr_results_table_library(inputs);
	if (locale === "es") return es_results_table_library(inputs);
	if (locale === "de") return de_results_table_library(inputs);
	if (locale === "it") return it_results_table_library(inputs);
	if (locale === "pt") return pt_results_table_library(inputs);
	if (locale === "zh") return zh_results_table_library(inputs);
	if (locale === "ja") return ja_results_table_library(inputs);
	if (locale === "ko") return ko_results_table_library(inputs);
	return ru_results_table_library(inputs);
});
function ResultsTable() {
	return jsxs("section", { children: [jsx("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: results_table_sampleresults1()
	}), jsx("div", {
		className: "overflow-x-auto rounded-lg border border-border",
		children: jsxs("table", {
			className: "w-full text-sm",
			children: [jsx("thead", {
				className: "bg-muted",
				children: jsxs("tr", { children: [
					jsx("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: results_table_library ? results_table_library() : "Library"
					}),
					jsx("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: results_table_bundlesize1()
					}),
					jsx("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: results_table_lookuptime1()
					}),
					jsx("th", {
						className: "px-4 py-3 text-left font-medium text-muted-foreground",
						children: results_table_lazyloading1()
					})
				] })
			}), jsx("tbody", { children: [
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
			].map((r) => jsxs("tr", {
				className: "border-t border-border",
				children: [
					jsx("td", {
						className: "px-4 py-3 font-medium text-foreground",
						children: r.lib
					}),
					jsx("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: r.size
					}),
					jsx("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: r.time
					}),
					jsx("td", {
						className: "px-4 py-3 text-muted-foreground",
						children: r.lazy
					})
				]
			}, r.lib)) })]
		})
	})] });
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
function AppProviders({ children }) {
	const locale = useParams().locale ?? "en";
	useEffect(() => {
		setLocale(locale);
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
function Wrapper({ children }) {
	return jsx(AppProviders, { children });
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(ResultsTable, {}) });
}
export { Wrapped as default };
