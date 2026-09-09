import "react";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
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
var faq_header1_everythingyouneedtoknow4$10 = () => {
	return `Everything you need to know about i18n Benchmark.`;
};
var faq_header1_frequentlyaskedquestions2$10 = () => {
	return `Frequently Asked Questions`;
};
var mockbanner1$10 = () => {
	return `⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.`;
};
var faq_header1_everythingyouneedtoknow4$9 = () => {
	return `Tout ce que vous devez savoir sur i18n Benchmark.`;
};
var faq_header1_frequentlyaskedquestions2$9 = () => {
	return `Foire aux questions`;
};
var mockbanner1$9 = () => {
	return `⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel.`;
};
var faq_header1_everythingyouneedtoknow4$8 = () => {
	return `Todo lo que necesitas saber sobre i18n Benchmark.`;
};
var faq_header1_frequentlyaskedquestions2$8 = () => {
	return `Preguntas frecuentes`;
};
var mockbanner1$8 = () => {
	return `⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.`;
};
var faq_header1_everythingyouneedtoknow4$7 = () => {
	return `Alles, was Sie über i18n Benchmark wissen müssen.`;
};
var faq_header1_frequentlyaskedquestions2$7 = () => {
	return `Häufig gestellte Fragen`;
};
var mockbanner1$7 = () => {
	return `⚠️ Diese Seite enthält fiktive Daten nur zu Benchmarking-Zwecken. Sie steht in keiner Verbindung zu einem realen Unternehmen oder einer Dienstleistung.`;
};
var faq_header1_everythingyouneedtoknow4$6 = () => {
	return `Tutto quello che c'è da sapere su i18n Benchmark.`;
};
var faq_header1_frequentlyaskedquestions2$6 = () => {
	return `Domande frequenti`;
};
var mockbanner1$6 = () => {
	return `⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.`;
};
var faq_header1_everythingyouneedtoknow4$5 = () => {
	return `Tudo o que você precisa saber sobre o i18n Benchmark.`;
};
var faq_header1_frequentlyaskedquestions2$5 = () => {
	return `Perguntas Frequentes`;
};
var mockbanner1$5 = () => {
	return `⚠️ Esta página contém dados simulados apenas para fins de benchmarking. Não está relacionada com nenhum negócio ou serviço real.`;
};
var faq_header1_everythingyouneedtoknow4$4 = () => {
	return `关于 i18n Benchmark 您需要了解的一切。`;
};
var faq_header1_frequentlyaskedquestions2$4 = () => {
	return `常见问题`;
};
var mockbanner1$4 = () => {
	return `⚠️ 此页面包含仅用于基准测试目的的模拟数据。它与任何真实的商业或服务无关。`;
};
var faq_header1_everythingyouneedtoknow4$3 = () => {
	return `i18n Benchmarkについて知っておくべきすべてのこと。`;
};
var faq_header1_frequentlyaskedquestions2$3 = () => {
	return `よくある質問`;
};
var mockbanner1$3 = () => {
	return `⚠️ このページには、ベンチマーク目的のみのモックデータが含まれています。実際のビジネスやサービスとは関係ありません。`;
};
var faq_header1_everythingyouneedtoknow4$2 = () => {
	return `i18n Benchmark에 대해 알아야 할 모든 것.`;
};
var faq_header1_frequentlyaskedquestions2$2 = () => {
	return `자주 묻는 질문`;
};
var mockbanner1$2 = () => {
	return `⚠️ 이 페이지에는 벤치마킹 목적으로만 사용되는 모의 데이터가 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.`;
};
var faq_header1_everythingyouneedtoknow4$1 = () => {
	return `Все, что вам нужно знать об i18n Benchmark.`;
};
var faq_header1_frequentlyaskedquestions2$1 = () => {
	return `Часто задаваемые вопросы`;
};
var mockbanner1$1 = () => {
	return `⚠️ Эта страница содержит имитационные данные только для целей тестирования. Она не связана с каким-либо реальным бизнесом или услугой.`;
};
var faq_header1_everythingyouneedtoknow4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return faq_header1_everythingyouneedtoknow4$9(inputs);
	if (locale === "es") return faq_header1_everythingyouneedtoknow4$8(inputs);
	if (locale === "de") return faq_header1_everythingyouneedtoknow4$7(inputs);
	if (locale === "it") return faq_header1_everythingyouneedtoknow4$6(inputs);
	if (locale === "pt") return faq_header1_everythingyouneedtoknow4$5(inputs);
	if (locale === "zh") return faq_header1_everythingyouneedtoknow4$4(inputs);
	if (locale === "ja") return faq_header1_everythingyouneedtoknow4$3(inputs);
	if (locale === "ko") return faq_header1_everythingyouneedtoknow4$2(inputs);
	if (locale === "ru") return faq_header1_everythingyouneedtoknow4$1(inputs);
	return faq_header1_everythingyouneedtoknow4$10(inputs);
});
var faq_header1_frequentlyaskedquestions2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return faq_header1_frequentlyaskedquestions2$9(inputs);
	if (locale === "es") return faq_header1_frequentlyaskedquestions2$8(inputs);
	if (locale === "de") return faq_header1_frequentlyaskedquestions2$7(inputs);
	if (locale === "it") return faq_header1_frequentlyaskedquestions2$6(inputs);
	if (locale === "pt") return faq_header1_frequentlyaskedquestions2$5(inputs);
	if (locale === "zh") return faq_header1_frequentlyaskedquestions2$4(inputs);
	if (locale === "ja") return faq_header1_frequentlyaskedquestions2$3(inputs);
	if (locale === "ko") return faq_header1_frequentlyaskedquestions2$2(inputs);
	if (locale === "ru") return faq_header1_frequentlyaskedquestions2$1(inputs);
	return faq_header1_frequentlyaskedquestions2$10(inputs);
});
var mockbanner1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return mockbanner1$9(inputs);
	if (locale === "es") return mockbanner1$8(inputs);
	if (locale === "de") return mockbanner1$7(inputs);
	if (locale === "it") return mockbanner1$6(inputs);
	if (locale === "pt") return mockbanner1$5(inputs);
	if (locale === "zh") return mockbanner1$4(inputs);
	if (locale === "ja") return mockbanner1$3(inputs);
	if (locale === "ko") return mockbanner1$2(inputs);
	if (locale === "ru") return mockbanner1$1(inputs);
	return mockbanner1$10(inputs);
});
var _jsxFileName$3 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/MockBanner.tsx";
var MockBanner = () => jsxDEV("div", {
	className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
	children: mockbanner1()
}, void 0, false, {
	fileName: _jsxFileName$3,
	lineNumber: 4,
	columnNumber: 3
}, void 0);
var _jsxFileName$2 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/faq/FAQHeader.tsx";
function FAQHeader() {
	return jsxDEV(Fragment, { children: [
		jsxDEV(MockBanner, {}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 7,
			columnNumber: 7
		}, this),
		jsxDEV("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: faq_header1_frequentlyaskedquestions2()
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 8,
			columnNumber: 7
		}, this),
		jsxDEV("p", {
			className: "mb-10 text-muted-foreground",
			children: faq_header1_everythingyouneedtoknow4()
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 11,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 6,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/scripts/Wrapper.tsx";
setLocale("en", { reload: false });
function Wrapper({ children }) {
	return jsxDEV(Fragment, { children }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/faq/FAQHeader.wrapper.tsx";
function Wrapped() {
	return jsxDEV(Wrapper, { children: jsxDEV(FAQHeader, {}, void 0, false, {
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
