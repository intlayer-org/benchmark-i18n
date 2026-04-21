import "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
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
var en_header_products = () => {
	return `Products`;
};
var fr_header_products = () => {
	return `Produits`;
};
var es_header_products = () => {
	return `Productos`;
};
var de_header_products = () => {
	return `Produkte`;
};
var it_header_products = () => {
	return `Prodotti`;
};
var pt_header_products = () => {
	return `Produtos`;
};
var zh_header_products = () => {
	return `产品`;
};
var ja_header_products = () => {
	return `製品`;
};
var ko_header_products = () => {
	return `제품`;
};
var ru_header_products = () => {
	return `Продукты`;
};
var header_products = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_header_products(inputs);
	if (locale === "fr") return fr_header_products(inputs);
	if (locale === "es") return es_header_products(inputs);
	if (locale === "de") return de_header_products(inputs);
	if (locale === "it") return it_header_products(inputs);
	if (locale === "pt") return pt_header_products(inputs);
	if (locale === "zh") return zh_header_products(inputs);
	if (locale === "ja") return ja_header_products(inputs);
	if (locale === "ko") return ko_header_products(inputs);
	return ru_header_products(inputs);
});
var en_products_header_toolsandservicestostreamline4 = () => {
	return `Tools and services to streamline your internationalization workflow.`;
};
var fr_products_header_toolsandservicestostreamline4 = () => {
	return `Des outils et services pour rationaliser votre flux de travail d'internationalisation.`;
};
var es_products_header_toolsandservicestostreamline4 = () => {
	return `Herramientas y servicios para agilizar tu flujo de trabajo de internacionalización.`;
};
var de_products_header_toolsandservicestostreamline4 = () => {
	return `Tools und Services zur Optimierung Ihres Internationalisierungs-Worflows.`;
};
var it_products_header_toolsandservicestostreamline4 = () => {
	return `Strumenti e servizi per snellire il flusso di lavoro dell'internazionalizzazione.`;
};
var pt_products_header_toolsandservicestostreamline4 = () => {
	return `Ferramentas e serviços para agilizar seu fluxo de trabalho de internacionalização.`;
};
var zh_products_header_toolsandservicestostreamline4 = () => {
	return `简化国际化工作流程的工具和服务。`;
};
var ja_products_header_toolsandservicestostreamline4 = () => {
	return `国際化ワークフローを合理化するためのツールとサービス。`;
};
var ko_products_header_toolsandservicestostreamline4 = () => {
	return `국제화 워크플로우를 간소화하기 위한 도구 및 서비스.`;
};
var ru_products_header_toolsandservicestostreamline4 = () => {
	return `Инструменты и услуги для оптимизации рабочего процесса интернационализации.`;
};
var products_header_toolsandservicestostreamline4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_products_header_toolsandservicestostreamline4(inputs);
	if (locale === "fr") return fr_products_header_toolsandservicestostreamline4(inputs);
	if (locale === "es") return es_products_header_toolsandservicestostreamline4(inputs);
	if (locale === "de") return de_products_header_toolsandservicestostreamline4(inputs);
	if (locale === "it") return it_products_header_toolsandservicestostreamline4(inputs);
	if (locale === "pt") return pt_products_header_toolsandservicestostreamline4(inputs);
	if (locale === "zh") return zh_products_header_toolsandservicestostreamline4(inputs);
	if (locale === "ja") return ja_products_header_toolsandservicestostreamline4(inputs);
	if (locale === "ko") return ko_products_header_toolsandservicestostreamline4(inputs);
	return ru_products_header_toolsandservicestostreamline4(inputs);
});
var en_mockbanner1 = () => {
	return `⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.`;
};
var fr_mockbanner1 = () => {
	return `⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel.`;
};
var es_mockbanner1 = () => {
	return `⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.`;
};
var de_mockbanner1 = () => {
	return `⚠️ Diese Seite enthält fiktive Daten nur zu Benchmarking-Zwecken. Sie steht in keiner Verbindung zu einem realen Unternehmen oder einer Dienstleistung.`;
};
var it_mockbanner1 = () => {
	return `⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.`;
};
var pt_mockbanner1 = () => {
	return `⚠️ Esta página contém dados simulados apenas para fins de benchmarking. Não está relacionada com nenhum negócio ou serviço real.`;
};
var zh_mockbanner1 = () => {
	return `⚠️ 此页面包含仅用于基准测试目的的模拟数据。它与任何真实的商业或服务无关。`;
};
var ja_mockbanner1 = () => {
	return `⚠️ このページには、ベンチマーク目的のみのモックデータが含まれています。実際のビジネスやサービスとは関係ありません。`;
};
var ko_mockbanner1 = () => {
	return `⚠️ 이 페이지에는 벤치마킹 목적으로만 사용되는 모의 데이터가 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.`;
};
var ru_mockbanner1 = () => {
	return `⚠️ Эта страница содержит имитационные данные только для целей тестирования. Она не связана с каким-либо реальным бизнесом или услугой.`;
};
var mockbanner1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_mockbanner1(inputs);
	if (locale === "fr") return fr_mockbanner1(inputs);
	if (locale === "es") return es_mockbanner1(inputs);
	if (locale === "de") return de_mockbanner1(inputs);
	if (locale === "it") return it_mockbanner1(inputs);
	if (locale === "pt") return pt_mockbanner1(inputs);
	if (locale === "zh") return zh_mockbanner1(inputs);
	if (locale === "ja") return ja_mockbanner1(inputs);
	if (locale === "ko") return ko_mockbanner1(inputs);
	return ru_mockbanner1(inputs);
});
var MockBanner = () => jsx("div", {
	className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
	children: mockbanner1()
});
function ProductsHeader() {
	return jsxs(Fragment, { children: [
		jsx(MockBanner, {}),
		jsx("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: header_products()
		}),
		jsx("p", {
			className: "mb-10 text-muted-foreground",
			children: products_header_toolsandservicestostreamline4()
		})
	] });
}
setLocale("en", { reload: false });
function Wrapper({ children }) {
	return jsx(Fragment, { children });
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(ProductsHeader, {}) });
}
export { Wrapped as default };
