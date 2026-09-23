import { useLayoutEffect } from "react";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
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
var header_methodology$10 = () => {
	return `Methodology`;
};
var hero_atestapplicationdesignedto4$10 = () => {
	return `A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.`;
};
var hero_viewresults1$10 = () => {
	return `View Results`;
};
var header_methodology$9 = () => {
	return `Méthodologie`;
};
var hero_atestapplicationdesignedto4$9 = () => {
	return `Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.`;
};
var hero_viewresults1$9 = () => {
	return `Voir les résultats`;
};
var header_methodology$8 = () => {
	return `Metodología`;
};
var hero_atestapplicationdesignedto4$8 = () => {
	return `Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.`;
};
var hero_viewresults1$8 = () => {
	return `Ver resultados`;
};
var header_methodology$7 = () => {
	return `Methodik`;
};
var hero_atestapplicationdesignedto4$7 = () => {
	return `Eine Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf Bundle-Größe, Ladeleistung und Rendering-Reaktivität.`;
};
var hero_viewresults1$7 = () => {
	return `Ergebnisse anzeigen`;
};
var header_methodology$6 = () => {
	return `Metodologia`;
};
var hero_atestapplicationdesignedto4$6 = () => {
	return `Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.`;
};
var hero_viewresults1$6 = () => {
	return `Visualizza i risultati`;
};
var header_methodology$5 = () => {
	return `Metodologia`;
};
var hero_atestapplicationdesignedto4$5 = () => {
	return `Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.`;
};
var hero_viewresults1$5 = () => {
	return `Ver Resultados`;
};
var header_methodology$4 = () => {
	return `方法论`;
};
var hero_atestapplicationdesignedto4$4 = () => {
	return `一个旨在衡量国际化库对包大小、加载性能和渲染反应性实际影响的测试应用程序。`;
};
var hero_viewresults1$4 = () => {
	return `查看结果`;
};
var header_methodology$3 = () => {
	return `方法論`;
};
var hero_atestapplicationdesignedto4$3 = () => {
	return `国際化ライブラリがバンドルサイズ、ロード性能、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーション。`;
};
var hero_viewresults1$3 = () => {
	return `結果を見る`;
};
var header_methodology$2 = () => {
	return `방법론`;
};
var hero_atestapplicationdesignedto4$2 = () => {
	return `국제화 라이브러리가 번들 크기, 로딩 성능 및 렌더링 반응성에 미치는 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.`;
};
var hero_viewresults1$2 = () => {
	return `결과 보기`;
};
var header_methodology$1 = () => {
	return `Методология`;
};
var hero_atestapplicationdesignedto4$1 = () => {
	return `Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.`;
};
var hero_viewresults1$1 = () => {
	return `Посмотреть результаты`;
};
var header_methodology = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return header_methodology$9(inputs);
	if (locale === "es") return header_methodology$8(inputs);
	if (locale === "de") return header_methodology$7(inputs);
	if (locale === "it") return header_methodology$6(inputs);
	if (locale === "pt") return header_methodology$5(inputs);
	if (locale === "zh") return header_methodology$4(inputs);
	if (locale === "ja") return header_methodology$3(inputs);
	if (locale === "ko") return header_methodology$2(inputs);
	if (locale === "ru") return header_methodology$1(inputs);
	return header_methodology$10(inputs);
});
var hero_atestapplicationdesignedto4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return hero_atestapplicationdesignedto4$9(inputs);
	if (locale === "es") return hero_atestapplicationdesignedto4$8(inputs);
	if (locale === "de") return hero_atestapplicationdesignedto4$7(inputs);
	if (locale === "it") return hero_atestapplicationdesignedto4$6(inputs);
	if (locale === "pt") return hero_atestapplicationdesignedto4$5(inputs);
	if (locale === "zh") return hero_atestapplicationdesignedto4$4(inputs);
	if (locale === "ja") return hero_atestapplicationdesignedto4$3(inputs);
	if (locale === "ko") return hero_atestapplicationdesignedto4$2(inputs);
	if (locale === "ru") return hero_atestapplicationdesignedto4$1(inputs);
	return hero_atestapplicationdesignedto4$10(inputs);
});
var hero_viewresults1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return hero_viewresults1$9(inputs);
	if (locale === "es") return hero_viewresults1$8(inputs);
	if (locale === "de") return hero_viewresults1$7(inputs);
	if (locale === "it") return hero_viewresults1$6(inputs);
	if (locale === "pt") return hero_viewresults1$5(inputs);
	if (locale === "zh") return hero_viewresults1$4(inputs);
	if (locale === "ja") return hero_viewresults1$3(inputs);
	if (locale === "ko") return hero_viewresults1$2(inputs);
	if (locale === "ru") return hero_viewresults1$1(inputs);
	return hero_viewresults1$10(inputs);
});
var _jsxFileName$2 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/home/Hero.tsx";
function Hero() {
	usePerformanceMeasure("Hero");
	return jsxDEV("section", {
		className: "mb-16 text-center",
		children: [
			jsxDEV("h1", {
				className: "mb-4 text-4xl font-bold tracking-tight text-foreground",
				children: "i18n Benchmark"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 8,
				columnNumber: 7
			}, this),
			jsxDEV("p", {
				className: "mx-auto max-w-2xl text-lg text-muted-foreground",
				children: hero_atestapplicationdesignedto4()
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 11,
				columnNumber: 7
			}, this),
			jsxDEV("div", {
				className: "mt-8 flex justify-center gap-4",
				children: [jsxDEV("button", {
					type: "button",
					className: "rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: hero_viewresults1()
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 15,
					columnNumber: 9
				}, this), jsxDEV("button", {
					type: "button",
					className: "rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: header_methodology()
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 21,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 14,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 7,
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
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/home/Hero.wrapper.tsx";
function Wrapped() {
	return jsxDEV(Wrapper, { children: jsxDEV(Hero, {}, void 0, false, {
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
