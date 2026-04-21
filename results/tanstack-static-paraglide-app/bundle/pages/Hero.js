import { useLayoutEffect } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
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
	if (typeof window !== "undefined" && window.location?.href) strategyToUse = getStrategyForUrl(window.location.href);
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
	if (typeof window !== "undefined" && window.location?.href) strategyToUse = getStrategyForUrl(window.location.href);
	for (const strat of strategyToUse) if (strat === "globalVariable") _locale = newLocale;
	else if (strat === "cookie") {
		if (typeof document === "undefined" || typeof window === "undefined") continue;
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
		if (optionsWithDefaults.reload && window.location && newLocale !== currentLocale) navigateOrReload(newLocation);
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
var en_header_methodology = () => {
	return `Methodology`;
};
var fr_header_methodology = () => {
	return `Méthodologie`;
};
var es_header_methodology = () => {
	return `Metodología`;
};
var de_header_methodology = () => {
	return `Methodik`;
};
var it_header_methodology = () => {
	return `Metodologia`;
};
var pt_header_methodology = () => {
	return `Metodologia`;
};
var zh_header_methodology = () => {
	return `方法论`;
};
var ja_header_methodology = () => {
	return `方法論`;
};
var ko_header_methodology = () => {
	return `방법론`;
};
var ru_header_methodology = () => {
	return `Методология`;
};
var header_methodology = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_header_methodology(inputs);
	if (locale === "fr") return fr_header_methodology(inputs);
	if (locale === "es") return es_header_methodology(inputs);
	if (locale === "de") return de_header_methodology(inputs);
	if (locale === "it") return it_header_methodology(inputs);
	if (locale === "pt") return pt_header_methodology(inputs);
	if (locale === "zh") return zh_header_methodology(inputs);
	if (locale === "ja") return ja_header_methodology(inputs);
	if (locale === "ko") return ko_header_methodology(inputs);
	return ru_header_methodology(inputs);
});
var en_hero_atestapplicationdesignedto4 = () => {
	return `A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.`;
};
var fr_hero_atestapplicationdesignedto4 = () => {
	return `Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.`;
};
var es_hero_atestapplicationdesignedto4 = () => {
	return `Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.`;
};
var de_hero_atestapplicationdesignedto4 = () => {
	return `Eine Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf Bundle-Größe, Ladeleistung und Rendering-Reaktivität.`;
};
var it_hero_atestapplicationdesignedto4 = () => {
	return `Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.`;
};
var pt_hero_atestapplicationdesignedto4 = () => {
	return `Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.`;
};
var zh_hero_atestapplicationdesignedto4 = () => {
	return `一个旨在衡量国际化库对包大小、加载性能和渲染反应性实际影响的测试应用程序。`;
};
var ja_hero_atestapplicationdesignedto4 = () => {
	return `国際化ライブラリがバンドルサイズ、ロード性能、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーション。`;
};
var ko_hero_atestapplicationdesignedto4 = () => {
	return `국제화 라이브러리가 번들 크기, 로딩 성능 및 렌더링 반응성에 미치는 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.`;
};
var ru_hero_atestapplicationdesignedto4 = () => {
	return `Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.`;
};
var hero_atestapplicationdesignedto4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_hero_atestapplicationdesignedto4(inputs);
	if (locale === "fr") return fr_hero_atestapplicationdesignedto4(inputs);
	if (locale === "es") return es_hero_atestapplicationdesignedto4(inputs);
	if (locale === "de") return de_hero_atestapplicationdesignedto4(inputs);
	if (locale === "it") return it_hero_atestapplicationdesignedto4(inputs);
	if (locale === "pt") return pt_hero_atestapplicationdesignedto4(inputs);
	if (locale === "zh") return zh_hero_atestapplicationdesignedto4(inputs);
	if (locale === "ja") return ja_hero_atestapplicationdesignedto4(inputs);
	if (locale === "ko") return ko_hero_atestapplicationdesignedto4(inputs);
	return ru_hero_atestapplicationdesignedto4(inputs);
});
var en_hero_viewresults1 = () => {
	return `View Results`;
};
var fr_hero_viewresults1 = () => {
	return `Voir les résultats`;
};
var es_hero_viewresults1 = () => {
	return `Ver resultados`;
};
var de_hero_viewresults1 = () => {
	return `Ergebnisse anzeigen`;
};
var it_hero_viewresults1 = () => {
	return `Visualizza i risultati`;
};
var pt_hero_viewresults1 = () => {
	return `Ver Resultados`;
};
var zh_hero_viewresults1 = () => {
	return `查看结果`;
};
var ja_hero_viewresults1 = () => {
	return `結果を見る`;
};
var ko_hero_viewresults1 = () => {
	return `결과 보기`;
};
var ru_hero_viewresults1 = () => {
	return `Посмотреть результаты`;
};
var hero_viewresults1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_hero_viewresults1(inputs);
	if (locale === "fr") return fr_hero_viewresults1(inputs);
	if (locale === "es") return es_hero_viewresults1(inputs);
	if (locale === "de") return de_hero_viewresults1(inputs);
	if (locale === "it") return it_hero_viewresults1(inputs);
	if (locale === "pt") return pt_hero_viewresults1(inputs);
	if (locale === "zh") return zh_hero_viewresults1(inputs);
	if (locale === "ja") return ja_hero_viewresults1(inputs);
	if (locale === "ko") return ko_hero_viewresults1(inputs);
	return ru_hero_viewresults1(inputs);
});
function Hero() {
	usePerformanceMeasure("Hero");
	return jsxs("section", {
		className: "mb-16 text-center",
		children: [
			jsx("h1", {
				className: "mb-4 text-4xl font-bold tracking-tight text-foreground",
				children: "i18n Benchmark"
			}),
			jsx("p", {
				className: "mx-auto max-w-2xl text-lg text-muted-foreground",
				children: hero_atestapplicationdesignedto4()
			}),
			jsxs("div", {
				className: "mt-8 flex justify-center gap-4",
				children: [jsx("button", {
					type: "button",
					className: "rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: hero_viewresults1()
				}), jsx("button", {
					type: "button",
					className: "rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: header_methodology()
				})]
			})
		]
	});
}
setLocale("en", { reload: false });
function Wrapper({ children }) {
	return jsx(Fragment, { children });
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(Hero, {}) });
}
export { Wrapped as default };
