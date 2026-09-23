import { useEffect, useId, useLayoutEffect, useState } from "react";
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
var en_api_access_section_apiaccess1 = () => {
	return `API Access`;
};
var fr_api_access_section_apiaccess1 = () => {
	return `Accès API`;
};
var es_api_access_section_apiaccess1 = () => {
	return `Acceso API`;
};
var de_api_access_section_apiaccess1 = () => {
	return `API-Zugriff`;
};
var it_api_access_section_apiaccess1 = () => {
	return `Accesso API`;
};
var pt_api_access_section_apiaccess1 = () => {
	return `Acesso à API`;
};
var zh_api_access_section_apiaccess1 = () => {
	return `API 访问`;
};
var ja_api_access_section_apiaccess1 = () => {
	return `APIアクセス`;
};
var ko_api_access_section_apiaccess1 = () => {
	return `API 액세스`;
};
var ru_api_access_section_apiaccess1 = () => {
	return `Доступ к API`;
};
var api_access_section_apiaccess1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_api_access_section_apiaccess1(inputs);
	if (locale === "es") return es_api_access_section_apiaccess1(inputs);
	if (locale === "de") return de_api_access_section_apiaccess1(inputs);
	if (locale === "it") return it_api_access_section_apiaccess1(inputs);
	if (locale === "pt") return pt_api_access_section_apiaccess1(inputs);
	if (locale === "zh") return zh_api_access_section_apiaccess1(inputs);
	if (locale === "ja") return ja_api_access_section_apiaccess1(inputs);
	if (locale === "ko") return ko_api_access_section_apiaccess1(inputs);
	if (locale === "ru") return ru_api_access_section_apiaccess1(inputs);
	return en_api_access_section_apiaccess1(inputs);
});
var en_api_access_section_apikey1 = () => {
	return `API Key`;
};
var fr_api_access_section_apikey1 = () => {
	return `Clé API`;
};
var es_api_access_section_apikey1 = () => {
	return `Llave API`;
};
var de_api_access_section_apikey1 = () => {
	return `API-Schlüssel`;
};
var it_api_access_section_apikey1 = () => {
	return `Chiave API`;
};
var pt_api_access_section_apikey1 = () => {
	return `Chave da API`;
};
var zh_api_access_section_apikey1 = () => {
	return `API 密钥`;
};
var ja_api_access_section_apikey1 = () => {
	return `APIキー`;
};
var ko_api_access_section_apikey1 = () => {
	return `API 키`;
};
var ru_api_access_section_apikey1 = () => {
	return `Ключ API`;
};
var api_access_section_apikey1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_api_access_section_apikey1(inputs);
	if (locale === "es") return es_api_access_section_apikey1(inputs);
	if (locale === "de") return de_api_access_section_apikey1(inputs);
	if (locale === "it") return it_api_access_section_apikey1(inputs);
	if (locale === "pt") return pt_api_access_section_apikey1(inputs);
	if (locale === "zh") return zh_api_access_section_apikey1(inputs);
	if (locale === "ja") return ja_api_access_section_apikey1(inputs);
	if (locale === "ko") return ko_api_access_section_apikey1(inputs);
	if (locale === "ru") return ru_api_access_section_apikey1(inputs);
	return en_api_access_section_apikey1(inputs);
});
var fr_api_access_section_copy = () => {
	return `Copier`;
};
var es_api_access_section_copy = () => {
	return `Copiar`;
};
var de_api_access_section_copy = () => {
	return `Kopieren`;
};
var it_api_access_section_copy = () => {
	return `Copia`;
};
var pt_api_access_section_copy = () => {
	return `Copiar`;
};
var zh_api_access_section_copy = () => {
	return `复制`;
};
var ja_api_access_section_copy = () => {
	return `コピー`;
};
var ko_api_access_section_copy = () => {
	return `복사`;
};
var ru_api_access_section_copy = () => {
	return `Копировать`;
};
var en_api_access_section_copy = () => "api-access-section.copy";
var api_access_section_copy = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_api_access_section_copy(inputs);
	if (locale === "es") return es_api_access_section_copy(inputs);
	if (locale === "de") return de_api_access_section_copy(inputs);
	if (locale === "it") return it_api_access_section_copy(inputs);
	if (locale === "pt") return pt_api_access_section_copy(inputs);
	if (locale === "zh") return zh_api_access_section_copy(inputs);
	if (locale === "ja") return ja_api_access_section_copy(inputs);
	if (locale === "ko") return ko_api_access_section_copy(inputs);
	if (locale === "ru") return ru_api_access_section_copy(inputs);
	return en_api_access_section_copy(inputs);
});
var en_api_access_section_usethiskeytoaccess4 = () => {
	return `Use this key to access the benchmarking API programmatically.`;
};
var fr_api_access_section_usethiskeytoaccess4 = () => {
	return `Utilisez cette clé pour accéder à l'API de benchmarking par programmation.`;
};
var es_api_access_section_usethiskeytoaccess4 = () => {
	return `Usa esta llave para acceder a la API de benchmarking de forma programática.`;
};
var de_api_access_section_usethiskeytoaccess4 = () => {
	return `Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen.`;
};
var it_api_access_section_usethiskeytoaccess4 = () => {
	return `Usa questa chiave per accedere programmaticamente alle API di benchmarking.`;
};
var pt_api_access_section_usethiskeytoaccess4 = () => {
	return `Utilize esta chave para acessar a API de benchmarking de forma programática.`;
};
var zh_api_access_section_usethiskeytoaccess4 = () => {
	return `使用此密钥从程序访问基准测试 API。`;
};
var ja_api_access_section_usethiskeytoaccess4 = () => {
	return `このキーを使用して、プログラムからベンチマークAPIにアクセスします。`;
};
var ko_api_access_section_usethiskeytoaccess4 = () => {
	return `이 키를 사용하여 프로그래밍 방식으로 벤치마킹 API에 액세스하십시오.`;
};
var ru_api_access_section_usethiskeytoaccess4 = () => {
	return `Используйте этот ключ для программного доступа к API бенчмаркинга.`;
};
var api_access_section_usethiskeytoaccess4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_api_access_section_usethiskeytoaccess4(inputs);
	if (locale === "es") return es_api_access_section_usethiskeytoaccess4(inputs);
	if (locale === "de") return de_api_access_section_usethiskeytoaccess4(inputs);
	if (locale === "it") return it_api_access_section_usethiskeytoaccess4(inputs);
	if (locale === "pt") return pt_api_access_section_usethiskeytoaccess4(inputs);
	if (locale === "zh") return zh_api_access_section_usethiskeytoaccess4(inputs);
	if (locale === "ja") return ja_api_access_section_usethiskeytoaccess4(inputs);
	if (locale === "ko") return ko_api_access_section_usethiskeytoaccess4(inputs);
	if (locale === "ru") return ru_api_access_section_usethiskeytoaccess4(inputs);
	return en_api_access_section_usethiskeytoaccess4(inputs);
});
var _jsxFileName$3 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/pages/settings/ApiAccessSection.tsx";
function ApiAccessSection() {
	const apiKeyId = useId();
	return jsxDEV("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [jsxDEV("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: api_access_section_apiaccess1()
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 11,
			columnNumber: 7
		}, this), jsxDEV("div", { children: [
			jsxDEV("label", {
				htmlFor: apiKeyId,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: api_access_section_apikey1()
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 15,
				columnNumber: 9
			}, this),
			jsxDEV("div", {
				className: "flex gap-2",
				children: [jsxDEV("input", {
					id: apiKeyId,
					readOnly: true,
					defaultValue: "sk_bench_xxxxxxxxxxxxxxxxxxxx",
					className: "flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 22,
					columnNumber: 11
				}, this), jsxDEV("button", {
					type: "button",
					className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: api_access_section_copy()
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 28,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 21,
				columnNumber: 9
			}, this),
			jsxDEV("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: api_access_section_usethiskeytoaccess4()
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 35,
				columnNumber: 9
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 14,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 10,
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
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/paraglide-next-app/components/pages/settings/ApiAccessSection.wrapper.tsx";
function Wrapped() {
	return jsxDEV(Wrapper, { children: jsxDEV(ApiAccessSection, {}, void 0, false, {
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
