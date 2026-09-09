import { createComponent, insert, template } from "solid-js/web";
import { For } from "solid-js";
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
var en_home_resultstable_builtin2 = () => {
	return `Built-in`;
};
var fr_home_resultstable_builtin2 = () => {
	return `Intégré`;
};
var es_home_resultstable_builtin2 = () => {
	return `Integrado`;
};
var de_home_resultstable_builtin2 = () => {
	return `Integriert`;
};
var it_home_resultstable_builtin2 = () => {
	return `Integrato`;
};
var pt_home_resultstable_builtin2 = () => {
	return `Integrado`;
};
var zh_home_resultstable_builtin2 = () => {
	return `内置`;
};
var ja_home_resultstable_builtin2 = () => {
	return `内蔵`;
};
var ko_home_resultstable_builtin2 = () => {
	return `Built-in`;
};
var ru_home_resultstable_builtin2 = () => {
	return `Встроено`;
};
var home_resultstable_builtin2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_home_resultstable_builtin2(inputs);
	if (locale === "es") return es_home_resultstable_builtin2(inputs);
	if (locale === "de") return de_home_resultstable_builtin2(inputs);
	if (locale === "it") return it_home_resultstable_builtin2(inputs);
	if (locale === "pt") return pt_home_resultstable_builtin2(inputs);
	if (locale === "zh") return zh_home_resultstable_builtin2(inputs);
	if (locale === "ja") return ja_home_resultstable_builtin2(inputs);
	if (locale === "ko") return ko_home_resultstable_builtin2(inputs);
	if (locale === "ru") return ru_home_resultstable_builtin2(inputs);
	return en_home_resultstable_builtin2(inputs);
});
var en_home_resultstable_bundlesize2 = () => {
	return `Bundle Size`;
};
var fr_home_resultstable_bundlesize2 = () => {
	return `Taille du bundle`;
};
var es_home_resultstable_bundlesize2 = () => {
	return `Tamaño del bundle`;
};
var de_home_resultstable_bundlesize2 = () => {
	return `Bundle-Größe`;
};
var it_home_resultstable_bundlesize2 = () => {
	return `Dimensione del bundle`;
};
var pt_home_resultstable_bundlesize2 = () => {
	return `Tamanho do Bundle`;
};
var zh_home_resultstable_bundlesize2 = () => {
	return `包大小`;
};
var ja_home_resultstable_bundlesize2 = () => {
	return `バンドルサイズ`;
};
var ko_home_resultstable_bundlesize2 = () => {
	return `Bundle Size`;
};
var ru_home_resultstable_bundlesize2 = () => {
	return `Размер бандла`;
};
var home_resultstable_bundlesize2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_home_resultstable_bundlesize2(inputs);
	if (locale === "es") return es_home_resultstable_bundlesize2(inputs);
	if (locale === "de") return de_home_resultstable_bundlesize2(inputs);
	if (locale === "it") return it_home_resultstable_bundlesize2(inputs);
	if (locale === "pt") return pt_home_resultstable_bundlesize2(inputs);
	if (locale === "zh") return zh_home_resultstable_bundlesize2(inputs);
	if (locale === "ja") return ja_home_resultstable_bundlesize2(inputs);
	if (locale === "ko") return ko_home_resultstable_bundlesize2(inputs);
	if (locale === "ru") return ru_home_resultstable_bundlesize2(inputs);
	return en_home_resultstable_bundlesize2(inputs);
});
var en_home_resultstable_lazyloading2 = () => {
	return `Lazy Loading`;
};
var fr_home_resultstable_lazyloading2 = () => {
	return `Chargement paresseux`;
};
var es_home_resultstable_lazyloading2 = () => {
	return `Carga diferida`;
};
var de_home_resultstable_lazyloading2 = () => {
	return `Lazy Loading`;
};
var it_home_resultstable_lazyloading2 = () => {
	return `Caricamento lazy`;
};
var pt_home_resultstable_lazyloading2 = () => {
	return `Carregamento Lento`;
};
var zh_home_resultstable_lazyloading2 = () => {
	return `延迟加载`;
};
var ja_home_resultstable_lazyloading2 = () => {
	return `遅延読み込み`;
};
var ko_home_resultstable_lazyloading2 = () => {
	return `Lazy Loading`;
};
var ru_home_resultstable_lazyloading2 = () => {
	return `Ленивая загрузка`;
};
var home_resultstable_lazyloading2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_home_resultstable_lazyloading2(inputs);
	if (locale === "es") return es_home_resultstable_lazyloading2(inputs);
	if (locale === "de") return de_home_resultstable_lazyloading2(inputs);
	if (locale === "it") return it_home_resultstable_lazyloading2(inputs);
	if (locale === "pt") return pt_home_resultstable_lazyloading2(inputs);
	if (locale === "zh") return zh_home_resultstable_lazyloading2(inputs);
	if (locale === "ja") return ja_home_resultstable_lazyloading2(inputs);
	if (locale === "ko") return ko_home_resultstable_lazyloading2(inputs);
	if (locale === "ru") return ru_home_resultstable_lazyloading2(inputs);
	return en_home_resultstable_lazyloading2(inputs);
});
var en_home_resultstable_library1 = () => {
	return `Library`;
};
var fr_home_resultstable_library1 = () => {
	return `Bibliothèque`;
};
var es_home_resultstable_library1 = () => {
	return `Biblioteca`;
};
var de_home_resultstable_library1 = () => {
	return `Bibliothek`;
};
var it_home_resultstable_library1 = () => {
	return `Libreria`;
};
var pt_home_resultstable_library1 = () => {
	return `Biblioteca`;
};
var zh_home_resultstable_library1 = () => {
	return `库`;
};
var ja_home_resultstable_library1 = () => {
	return `ライブラリ`;
};
var ko_home_resultstable_library1 = () => {
	return `Library`;
};
var ru_home_resultstable_library1 = () => {
	return `Библиотека`;
};
var home_resultstable_library1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_home_resultstable_library1(inputs);
	if (locale === "es") return es_home_resultstable_library1(inputs);
	if (locale === "de") return de_home_resultstable_library1(inputs);
	if (locale === "it") return it_home_resultstable_library1(inputs);
	if (locale === "pt") return pt_home_resultstable_library1(inputs);
	if (locale === "zh") return zh_home_resultstable_library1(inputs);
	if (locale === "ja") return ja_home_resultstable_library1(inputs);
	if (locale === "ko") return ko_home_resultstable_library1(inputs);
	if (locale === "ru") return ru_home_resultstable_library1(inputs);
	return en_home_resultstable_library1(inputs);
});
var en_home_resultstable_lookuptime2 = () => {
	return `Lookup Time`;
};
var fr_home_resultstable_lookuptime2 = () => {
	return `Temps de recherche`;
};
var es_home_resultstable_lookuptime2 = () => {
	return `Tiempo de búsqueda`;
};
var de_home_resultstable_lookuptime2 = () => {
	return `Lookup-Zeit`;
};
var it_home_resultstable_lookuptime2 = () => {
	return `Tempo di ricerca`;
};
var pt_home_resultstable_lookuptime2 = () => {
	return `Tempo de Busca`;
};
var zh_home_resultstable_lookuptime2 = () => {
	return `查找时间`;
};
var ja_home_resultstable_lookuptime2 = () => {
	return `ルックアップ時間`;
};
var ko_home_resultstable_lookuptime2 = () => {
	return `Lookup Time`;
};
var ru_home_resultstable_lookuptime2 = () => {
	return `Время поиска`;
};
var home_resultstable_lookuptime2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_home_resultstable_lookuptime2(inputs);
	if (locale === "es") return es_home_resultstable_lookuptime2(inputs);
	if (locale === "de") return de_home_resultstable_lookuptime2(inputs);
	if (locale === "it") return it_home_resultstable_lookuptime2(inputs);
	if (locale === "pt") return pt_home_resultstable_lookuptime2(inputs);
	if (locale === "zh") return zh_home_resultstable_lookuptime2(inputs);
	if (locale === "ja") return ja_home_resultstable_lookuptime2(inputs);
	if (locale === "ko") return ko_home_resultstable_lookuptime2(inputs);
	if (locale === "ru") return ru_home_resultstable_lookuptime2(inputs);
	return en_home_resultstable_lookuptime2(inputs);
});
var en_home_resultstable_manual1 = () => {
	return `Manual`;
};
var fr_home_resultstable_manual1 = () => {
	return `Manuel`;
};
var es_home_resultstable_manual1 = () => {
	return `Manual`;
};
var de_home_resultstable_manual1 = () => {
	return `Manuell`;
};
var it_home_resultstable_manual1 = () => {
	return `Manuale`;
};
var pt_home_resultstable_manual1 = () => {
	return `Manual`;
};
var zh_home_resultstable_manual1 = () => {
	return `手动`;
};
var ja_home_resultstable_manual1 = () => {
	return `手動`;
};
var ko_home_resultstable_manual1 = () => {
	return `Manual`;
};
var ru_home_resultstable_manual1 = () => {
	return `Вручную`;
};
var home_resultstable_manual1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_home_resultstable_manual1(inputs);
	if (locale === "es") return es_home_resultstable_manual1(inputs);
	if (locale === "de") return de_home_resultstable_manual1(inputs);
	if (locale === "it") return it_home_resultstable_manual1(inputs);
	if (locale === "pt") return pt_home_resultstable_manual1(inputs);
	if (locale === "zh") return zh_home_resultstable_manual1(inputs);
	if (locale === "ja") return ja_home_resultstable_manual1(inputs);
	if (locale === "ko") return ko_home_resultstable_manual1(inputs);
	if (locale === "ru") return ru_home_resultstable_manual1(inputs);
	return en_home_resultstable_manual1(inputs);
});
var en_home_resultstable_title1 = () => {
	return `Sample Results`;
};
var fr_home_resultstable_title1 = () => {
	return `Exemple de résultats`;
};
var es_home_resultstable_title1 = () => {
	return `Resultados de muestra`;
};
var de_home_resultstable_title1 = () => {
	return `Beispielergebnisse`;
};
var it_home_resultstable_title1 = () => {
	return `Risultati di esempio`;
};
var pt_home_resultstable_title1 = () => {
	return `Resultados de exemplo`;
};
var zh_home_resultstable_title1 = () => {
	return `示例结果`;
};
var ja_home_resultstable_title1 = () => {
	return `サンプル結果`;
};
var ko_home_resultstable_title1 = () => {
	return `Sample Results`;
};
var ru_home_resultstable_title1 = () => {
	return `Примеры результатов`;
};
var home_resultstable_title1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_home_resultstable_title1(inputs);
	if (locale === "es") return es_home_resultstable_title1(inputs);
	if (locale === "de") return de_home_resultstable_title1(inputs);
	if (locale === "it") return it_home_resultstable_title1(inputs);
	if (locale === "pt") return pt_home_resultstable_title1(inputs);
	if (locale === "zh") return zh_home_resultstable_title1(inputs);
	if (locale === "ja") return ja_home_resultstable_title1(inputs);
	if (locale === "ko") return ko_home_resultstable_title1(inputs);
	if (locale === "ru") return ru_home_resultstable_title1(inputs);
	return en_home_resultstable_title1(inputs);
});
var en_home_resultstable_yes1 = () => {
	return `Yes`;
};
var fr_home_resultstable_yes1 = () => {
	return `Oui`;
};
var es_home_resultstable_yes1 = () => {
	return `Sí`;
};
var de_home_resultstable_yes1 = () => {
	return `Ja`;
};
var it_home_resultstable_yes1 = () => {
	return `Sì`;
};
var pt_home_resultstable_yes1 = () => {
	return `Sim`;
};
var zh_home_resultstable_yes1 = () => {
	return `是`;
};
var ja_home_resultstable_yes1 = () => {
	return `はい`;
};
var ko_home_resultstable_yes1 = () => {
	return `Yes`;
};
var ru_home_resultstable_yes1 = () => {
	return `Да`;
};
var home_resultstable_yes1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_home_resultstable_yes1(inputs);
	if (locale === "es") return es_home_resultstable_yes1(inputs);
	if (locale === "de") return de_home_resultstable_yes1(inputs);
	if (locale === "it") return it_home_resultstable_yes1(inputs);
	if (locale === "pt") return pt_home_resultstable_yes1(inputs);
	if (locale === "zh") return zh_home_resultstable_yes1(inputs);
	if (locale === "ja") return ja_home_resultstable_yes1(inputs);
	if (locale === "ko") return ko_home_resultstable_yes1(inputs);
	if (locale === "ru") return ru_home_resultstable_yes1(inputs);
	return en_home_resultstable_yes1(inputs);
});
var _tmpl$ = template(`<section><h2 class="mb-6 text-2xl font-bold text-foreground"></h2><div class="overflow-x-auto rounded-lg border border-border"><table class="w-full text-sm"><thead class=bg-muted><tr><th class="px-4 py-3 text-left font-medium text-muted-foreground"></th><th class="px-4 py-3 text-left font-medium text-muted-foreground"></th><th class="px-4 py-3 text-left font-medium text-muted-foreground"></th><th class="px-4 py-3 text-left font-medium text-muted-foreground"></th></tr></thead><tbody>`);
var _tmpl$2 = template(`<tr class="border-t border-border"><td class="px-4 py-3 font-medium text-foreground"></td><td class="px-4 py-3 text-muted-foreground"></td><td class="px-4 py-3 text-muted-foreground"></td><td class="px-4 py-3 text-muted-foreground">`);
function ResultsTable() {
	const results = () => [
		{
			lib: "react-i18next",
			size: "42.3 kB",
			time: "0.12ms",
			lazy: home_resultstable_yes1()
		},
		{
			lib: "react-intl",
			size: "38.1 kB",
			time: "0.15ms",
			lazy: home_resultstable_manual1()
		},
		{
			lib: "lingui",
			size: "12.8 kB",
			time: "0.08ms",
			lazy: home_resultstable_yes1()
		},
		{
			lib: "typesafe-i18n",
			size: "5.2 kB",
			time: "0.05ms",
			lazy: home_resultstable_builtin2()
		}
	];
	return (() => {
		var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$5 = _el$2.nextSibling.firstChild.firstChild, _el$7 = _el$5.firstChild.firstChild, _el$8 = _el$7.nextSibling, _el$9 = _el$8.nextSibling, _el$0 = _el$9.nextSibling, _el$1 = _el$5.nextSibling;
		insert(_el$2, () => home_resultstable_title1());
		insert(_el$7, () => home_resultstable_library1());
		insert(_el$8, () => home_resultstable_bundlesize2());
		insert(_el$9, () => home_resultstable_lookuptime2());
		insert(_el$0, () => home_resultstable_lazyloading2());
		insert(_el$1, createComponent(For, {
			get each() {
				return results();
			},
			children: (r) => (() => {
				var _el$10 = _tmpl$2(), _el$11 = _el$10.firstChild, _el$12 = _el$11.nextSibling, _el$13 = _el$12.nextSibling, _el$14 = _el$13.nextSibling;
				insert(_el$11, () => r.lib);
				insert(_el$12, () => r.size);
				insert(_el$13, () => r.time);
				insert(_el$14, () => r.lazy);
				return _el$10;
			})()
		}));
		return _el$;
	})();
}
export { ResultsTable as default };
