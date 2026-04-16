import { Profiler, useEffect, useLayoutEffect } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useParams } from "next/navigation";
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
var en_about_header_aboutthisbenchmark2 = () => {
	return `About This Benchmark`;
};
var fr_about_header_aboutthisbenchmark2 = () => {
	return `À propos de ce benchmark`;
};
var es_about_header_aboutthisbenchmark2 = () => {
	return `Sobre este benchmark`;
};
var de_about_header_aboutthisbenchmark2 = () => {
	return `Über diesen Benchmark`;
};
var it_about_header_aboutthisbenchmark2 = () => {
	return `Informazioni su questo benchmark`;
};
var pt_about_header_aboutthisbenchmark2 = () => {
	return `Sobre este benchmark`;
};
var zh_about_header_aboutthisbenchmark2 = () => {
	return `关于本基准测试`;
};
var ja_about_header_aboutthisbenchmark2 = () => {
	return `このベンチマークについて`;
};
var ko_about_header_aboutthisbenchmark2 = () => {
	return `이 벤치마크에 대하여`;
};
var ru_about_header_aboutthisbenchmark2 = () => {
	return `Об этом бенчмарке`;
};
var about_header_aboutthisbenchmark2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_header_aboutthisbenchmark2(inputs);
	if (locale === "fr") return fr_about_header_aboutthisbenchmark2(inputs);
	if (locale === "es") return es_about_header_aboutthisbenchmark2(inputs);
	if (locale === "de") return de_about_header_aboutthisbenchmark2(inputs);
	if (locale === "it") return it_about_header_aboutthisbenchmark2(inputs);
	if (locale === "pt") return pt_about_header_aboutthisbenchmark2(inputs);
	if (locale === "zh") return zh_about_header_aboutthisbenchmark2(inputs);
	if (locale === "ja") return ja_about_header_aboutthisbenchmark2(inputs);
	if (locale === "ko") return ko_about_header_aboutthisbenchmark2(inputs);
	return ru_about_header_aboutthisbenchmark2(inputs);
});
var en_about_header_thisisanopensource4 = () => {
	return `This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.`;
};
var fr_about_header_thisisanopensource4 = () => {
	return `Il s'agit d'une application de test open source, pas d'un produit ou d'une entreprise. Son seul but est de fournir une application React multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans des conditions identiques.`;
};
var es_about_header_thisisanopensource4 = () => {
	return `Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React multipágina realista donde se puedan integrar y medir diferentes bibliotecas i18n en condiciones idénticas.`;
};
var de_about_header_thisisanopensource4 = () => {
	return `Dies ist eine Open-Source-Testanwendung — kein Produkt oder Unternehmen. Ihr einziger Zweck ist es, eine realistische, mehrseitige React-App bereitzustellen, in der verschiedene i18n-Bibliotheken unter identischen Bedingungen integriert und gemessen werden können.`;
};
var it_about_header_thisisanopensource4 = () => {
	return `Questa è un'applicazione di test open-source, non un prodotto o un'azienda. Il suo unico scopo è fornire un'applicazione React multi-pagina realistica dove diverse librerie i18n possono essere integrate e misurate in condizioni identiche.`;
};
var pt_about_header_thisisanopensource4 = () => {
	return `Esta é uma aplicação de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer um aplicativo React realista e de várias páginas onde diferentes bibliotecas i18n possam ser integradas e medidas em condições idênticas.`;
};
var zh_about_header_thisisanopensource4 = () => {
	return `这是一个开源测试应用程序 —— 不是产品或公司。其唯一目的是提供一个现实的多页面 React 应用程序，可以在相同条件下集成和衡量不同的 i18n 库。`;
};
var ja_about_header_thisisanopensource4 = () => {
	return `これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、同一の条件下でさまざまなi18nライブラリを統合して測定できる、現実的なマルチページのReactアプリを提供することです。`;
};
var ko_about_header_thisisanopensource4 = () => {
	return `이것은 제품이나 회사가 아닌 오픈 소스 테스트 애플리케이션입니다. 유일한 목적은 동일한 조건에서 서로 다른 i18n 라이브러리를 통합하고 측정할 수 있는 현실적인 다중 페이지 React 앱을 제공하는 것입니다.`;
};
var ru_about_header_thisisanopensource4 = () => {
	return `Это открытое приложение для тестирования, а не продукт или компания. Его единственная цель — предоставить реалистичное многостраничное приложение на React, в котором можно интегрировать и измерять различные библиотеки i18n в идентичных условиях.`;
};
var about_header_thisisanopensource4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_header_thisisanopensource4(inputs);
	if (locale === "fr") return fr_about_header_thisisanopensource4(inputs);
	if (locale === "es") return es_about_header_thisisanopensource4(inputs);
	if (locale === "de") return de_about_header_thisisanopensource4(inputs);
	if (locale === "it") return it_about_header_thisisanopensource4(inputs);
	if (locale === "pt") return pt_about_header_thisisanopensource4(inputs);
	if (locale === "zh") return zh_about_header_thisisanopensource4(inputs);
	if (locale === "ja") return ja_about_header_thisisanopensource4(inputs);
	if (locale === "ko") return ko_about_header_thisisanopensource4(inputs);
	return ru_about_header_thisisanopensource4(inputs);
});
function AboutHeader() {
	usePerformanceMeasure("AboutHeader");
	return jsxs(Fragment, { children: [jsx("h1", {
		className: "mb-4 text-3xl font-bold text-foreground",
		children: about_header_aboutthisbenchmark2()
	}), jsx("p", {
		className: "mb-8 max-w-3xl text-muted-foreground",
		children: about_header_thisisanopensource4()
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
	return jsx(Wrapper, { children: jsx(AboutHeader, {}) });
}
export { Wrapped as default };
