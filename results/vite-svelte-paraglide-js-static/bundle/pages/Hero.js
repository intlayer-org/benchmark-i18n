import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
import { onMount } from "svelte";
function usePerformanceMeasure(name) {
	if (typeof performance !== "undefined" && performance.mark) performance.mark(`${name}-start`);
	onMount(() => {
		if (typeof performance !== "undefined" && performance.mark && performance.measure) {
			performance.mark(`${name}-end`);
			try {
				performance.measure(`${name}-render`, `${name}-start`, `${name}-end`);
			} catch {}
		}
	});
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
var en_home_hero_title = () => {
	return `i18n Benchmark`;
};
var fr_home_hero_title = () => {
	return `Benchmark i18n`;
};
var es_home_hero_title = () => {
	return `i18n Benchmark`;
};
var de_home_hero_title = () => {
	return `i18n Benchmark`;
};
var it_home_hero_title = () => {
	return `i18n Benchmark`;
};
var pt_home_hero_title = () => {
	return `i18n Benchmark`;
};
var zh_home_hero_title = () => {
	return `i18n Benchmark`;
};
var ja_home_hero_title = () => {
	return `i18n Benchmark`;
};
var ko_home_hero_title = () => {
	return `i18n Benchmark`;
};
var ru_home_hero_title = () => {
	return `i18n Benchmark`;
};
var home_hero_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_hero_title(inputs);
	if (locale === "fr") return fr_home_hero_title(inputs);
	if (locale === "es") return es_home_hero_title(inputs);
	if (locale === "de") return de_home_hero_title(inputs);
	if (locale === "it") return it_home_hero_title(inputs);
	if (locale === "pt") return pt_home_hero_title(inputs);
	if (locale === "zh") return zh_home_hero_title(inputs);
	if (locale === "ja") return ja_home_hero_title(inputs);
	if (locale === "ko") return ko_home_hero_title(inputs);
	return ru_home_hero_title(inputs);
});
var en_home_hero_description = () => {
	return `A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.`;
};
var fr_home_hero_description = () => {
	return `Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.`;
};
var es_home_hero_description = () => {
	return `Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.`;
};
var de_home_hero_description = () => {
	return `Eine Testanwendung, die entwickelt wurde, um die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen.`;
};
var it_home_hero_description = () => {
	return `Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.`;
};
var pt_home_hero_description = () => {
	return `Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade de renderização.`;
};
var zh_home_hero_description = () => {
	return `一个旨在衡量国际化库对包大小、加载性能和渲染反应性实际影响的测试应用程序。`;
};
var ja_home_hero_description = () => {
	return `国際化ライブラリがバンドルサイズ、読み込みパフォーマンス、レンダリングの反応性に与える実世界の影響を測定するために設計されたテストアプリケーション。`;
};
var ko_home_hero_description = () => {
	return `A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.`;
};
var ru_home_hero_description = () => {
	return `Тестовое приложение, разработанное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.`;
};
var home_hero_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_hero_description(inputs);
	if (locale === "fr") return fr_home_hero_description(inputs);
	if (locale === "es") return es_home_hero_description(inputs);
	if (locale === "de") return de_home_hero_description(inputs);
	if (locale === "it") return it_home_hero_description(inputs);
	if (locale === "pt") return pt_home_hero_description(inputs);
	if (locale === "zh") return zh_home_hero_description(inputs);
	if (locale === "ja") return ja_home_hero_description(inputs);
	if (locale === "ko") return ko_home_hero_description(inputs);
	return ru_home_hero_description(inputs);
});
var en_home_hero_viewresults1 = () => {
	return `View Results`;
};
var fr_home_hero_viewresults1 = () => {
	return `Voir les résultats`;
};
var es_home_hero_viewresults1 = () => {
	return `Ver resultados`;
};
var de_home_hero_viewresults1 = () => {
	return `Ergebnisse anzeigen`;
};
var it_home_hero_viewresults1 = () => {
	return `Visualizza i risultati`;
};
var pt_home_hero_viewresults1 = () => {
	return `Ver Resultados`;
};
var zh_home_hero_viewresults1 = () => {
	return `查看结果`;
};
var ja_home_hero_viewresults1 = () => {
	return `結果を見る`;
};
var ko_home_hero_viewresults1 = () => {
	return `View Results`;
};
var ru_home_hero_viewresults1 = () => {
	return `Посмотреть результаты`;
};
var home_hero_viewresults1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_hero_viewresults1(inputs);
	if (locale === "fr") return fr_home_hero_viewresults1(inputs);
	if (locale === "es") return es_home_hero_viewresults1(inputs);
	if (locale === "de") return de_home_hero_viewresults1(inputs);
	if (locale === "it") return it_home_hero_viewresults1(inputs);
	if (locale === "pt") return pt_home_hero_viewresults1(inputs);
	if (locale === "zh") return zh_home_hero_viewresults1(inputs);
	if (locale === "ja") return ja_home_hero_viewresults1(inputs);
	if (locale === "ko") return ko_home_hero_viewresults1(inputs);
	return ru_home_hero_viewresults1(inputs);
});
var en_home_hero_methodology = () => {
	return `Methodology`;
};
var fr_home_hero_methodology = () => {
	return `Méthodologie`;
};
var es_home_hero_methodology = () => {
	return `Metodología`;
};
var de_home_hero_methodology = () => {
	return `Methodik`;
};
var it_home_hero_methodology = () => {
	return `Metodologia`;
};
var pt_home_hero_methodology = () => {
	return `Metodologia`;
};
var zh_home_hero_methodology = () => {
	return `方法论`;
};
var ja_home_hero_methodology = () => {
	return `手法`;
};
var ko_home_hero_methodology = () => {
	return `Methodology`;
};
var ru_home_hero_methodology = () => {
	return `Методология`;
};
var home_hero_methodology = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_hero_methodology(inputs);
	if (locale === "fr") return fr_home_hero_methodology(inputs);
	if (locale === "es") return es_home_hero_methodology(inputs);
	if (locale === "de") return de_home_hero_methodology(inputs);
	if (locale === "it") return it_home_hero_methodology(inputs);
	if (locale === "pt") return pt_home_hero_methodology(inputs);
	if (locale === "zh") return zh_home_hero_methodology(inputs);
	if (locale === "ja") return ja_home_hero_methodology(inputs);
	if (locale === "ko") return ko_home_hero_methodology(inputs);
	return ru_home_hero_methodology(inputs);
});
var root = $.from_html(`<section class="mb-16 text-center"><h1 class="mb-4 text-4xl font-bold tracking-tight text-foreground"> </h1> <p class="mx-auto max-w-2xl text-lg text-muted-foreground"> </p> <div class="mt-8 flex justify-center gap-4"><button type="button" class="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"> </button> <button type="button" class="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"> </button></div></section>`);
function Hero($$anchor, $$props) {
	$.push($$props, false);
	usePerformanceMeasure("Hero");
	$.init();
	var section = root();
	var h1 = $.child(section);
	var text = $.child(h1, true);
	$.reset(h1);
	var p = $.sibling(h1, 2);
	var text_1 = $.child(p, true);
	$.reset(p);
	var div = $.sibling(p, 2);
	var button = $.child(div);
	var text_2 = $.child(button, true);
	$.reset(button);
	var button_1 = $.sibling(button, 2);
	var text_3 = $.child(button_1, true);
	$.reset(button_1);
	$.reset(div);
	$.reset(section);
	$.template_effect(($0, $1, $2, $3) => {
		$.set_text(text, $0);
		$.set_text(text_1, $1);
		$.set_text(text_2, $2);
		$.set_text(text_3, $3);
	}, [
		() => home_hero_title(),
		() => home_hero_description(),
		() => home_hero_viewresults1(),
		() => home_hero_methodology()
	]);
	$.append($$anchor, section);
	$.pop();
}
export { Hero as default };
