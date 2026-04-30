import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
import { onMount } from "svelte";
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
	if (locale === "en") return en_home_resultstable_title1(inputs);
	if (locale === "fr") return fr_home_resultstable_title1(inputs);
	if (locale === "es") return es_home_resultstable_title1(inputs);
	if (locale === "de") return de_home_resultstable_title1(inputs);
	if (locale === "it") return it_home_resultstable_title1(inputs);
	if (locale === "pt") return pt_home_resultstable_title1(inputs);
	if (locale === "zh") return zh_home_resultstable_title1(inputs);
	if (locale === "ja") return ja_home_resultstable_title1(inputs);
	if (locale === "ko") return ko_home_resultstable_title1(inputs);
	return ru_home_resultstable_title1(inputs);
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
	if (locale === "en") return en_home_resultstable_library1(inputs);
	if (locale === "fr") return fr_home_resultstable_library1(inputs);
	if (locale === "es") return es_home_resultstable_library1(inputs);
	if (locale === "de") return de_home_resultstable_library1(inputs);
	if (locale === "it") return it_home_resultstable_library1(inputs);
	if (locale === "pt") return pt_home_resultstable_library1(inputs);
	if (locale === "zh") return zh_home_resultstable_library1(inputs);
	if (locale === "ja") return ja_home_resultstable_library1(inputs);
	if (locale === "ko") return ko_home_resultstable_library1(inputs);
	return ru_home_resultstable_library1(inputs);
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
	if (locale === "en") return en_home_resultstable_bundlesize2(inputs);
	if (locale === "fr") return fr_home_resultstable_bundlesize2(inputs);
	if (locale === "es") return es_home_resultstable_bundlesize2(inputs);
	if (locale === "de") return de_home_resultstable_bundlesize2(inputs);
	if (locale === "it") return it_home_resultstable_bundlesize2(inputs);
	if (locale === "pt") return pt_home_resultstable_bundlesize2(inputs);
	if (locale === "zh") return zh_home_resultstable_bundlesize2(inputs);
	if (locale === "ja") return ja_home_resultstable_bundlesize2(inputs);
	if (locale === "ko") return ko_home_resultstable_bundlesize2(inputs);
	return ru_home_resultstable_bundlesize2(inputs);
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
	if (locale === "en") return en_home_resultstable_lookuptime2(inputs);
	if (locale === "fr") return fr_home_resultstable_lookuptime2(inputs);
	if (locale === "es") return es_home_resultstable_lookuptime2(inputs);
	if (locale === "de") return de_home_resultstable_lookuptime2(inputs);
	if (locale === "it") return it_home_resultstable_lookuptime2(inputs);
	if (locale === "pt") return pt_home_resultstable_lookuptime2(inputs);
	if (locale === "zh") return zh_home_resultstable_lookuptime2(inputs);
	if (locale === "ja") return ja_home_resultstable_lookuptime2(inputs);
	if (locale === "ko") return ko_home_resultstable_lookuptime2(inputs);
	return ru_home_resultstable_lookuptime2(inputs);
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
	if (locale === "en") return en_home_resultstable_lazyloading2(inputs);
	if (locale === "fr") return fr_home_resultstable_lazyloading2(inputs);
	if (locale === "es") return es_home_resultstable_lazyloading2(inputs);
	if (locale === "de") return de_home_resultstable_lazyloading2(inputs);
	if (locale === "it") return it_home_resultstable_lazyloading2(inputs);
	if (locale === "pt") return pt_home_resultstable_lazyloading2(inputs);
	if (locale === "zh") return zh_home_resultstable_lazyloading2(inputs);
	if (locale === "ja") return ja_home_resultstable_lazyloading2(inputs);
	if (locale === "ko") return ko_home_resultstable_lazyloading2(inputs);
	return ru_home_resultstable_lazyloading2(inputs);
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
	if (locale === "en") return en_home_resultstable_yes1(inputs);
	if (locale === "fr") return fr_home_resultstable_yes1(inputs);
	if (locale === "es") return es_home_resultstable_yes1(inputs);
	if (locale === "de") return de_home_resultstable_yes1(inputs);
	if (locale === "it") return it_home_resultstable_yes1(inputs);
	if (locale === "pt") return pt_home_resultstable_yes1(inputs);
	if (locale === "zh") return zh_home_resultstable_yes1(inputs);
	if (locale === "ja") return ja_home_resultstable_yes1(inputs);
	if (locale === "ko") return ko_home_resultstable_yes1(inputs);
	return ru_home_resultstable_yes1(inputs);
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
	if (locale === "en") return en_home_resultstable_manual1(inputs);
	if (locale === "fr") return fr_home_resultstable_manual1(inputs);
	if (locale === "es") return es_home_resultstable_manual1(inputs);
	if (locale === "de") return de_home_resultstable_manual1(inputs);
	if (locale === "it") return it_home_resultstable_manual1(inputs);
	if (locale === "pt") return pt_home_resultstable_manual1(inputs);
	if (locale === "zh") return zh_home_resultstable_manual1(inputs);
	if (locale === "ja") return ja_home_resultstable_manual1(inputs);
	if (locale === "ko") return ko_home_resultstable_manual1(inputs);
	return ru_home_resultstable_manual1(inputs);
});
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
	if (locale === "en") return en_home_resultstable_builtin2(inputs);
	if (locale === "fr") return fr_home_resultstable_builtin2(inputs);
	if (locale === "es") return es_home_resultstable_builtin2(inputs);
	if (locale === "de") return de_home_resultstable_builtin2(inputs);
	if (locale === "it") return it_home_resultstable_builtin2(inputs);
	if (locale === "pt") return pt_home_resultstable_builtin2(inputs);
	if (locale === "zh") return zh_home_resultstable_builtin2(inputs);
	if (locale === "ja") return ja_home_resultstable_builtin2(inputs);
	if (locale === "ko") return ko_home_resultstable_builtin2(inputs);
	return ru_home_resultstable_builtin2(inputs);
});
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
var root_1 = $.from_html(`<tr class="border-t border-border"><td class="px-4 py-3 font-medium text-foreground"> </td><td class="px-4 py-3 text-muted-foreground"> </td><td class="px-4 py-3 text-muted-foreground"> </td><td class="px-4 py-3 text-muted-foreground"> </td></tr>`);
var root = $.from_html(`<section><h2 class="mb-6 text-2xl font-bold text-foreground"> </h2> <div class="overflow-x-auto rounded-lg border border-border"><table class="w-full text-sm"><thead class="bg-muted"><tr><th class="px-4 py-3 text-left font-medium text-muted-foreground"> </th><th class="px-4 py-3 text-left font-medium text-muted-foreground"> </th><th class="px-4 py-3 text-left font-medium text-muted-foreground"> </th><th class="px-4 py-3 text-left font-medium text-muted-foreground"> </th></tr></thead><tbody></tbody></table></div></section>`);
function ResultsTable($$anchor, $$props) {
	$.push($$props, false);
	usePerformanceMeasure("ResultsTable");
	const results = [
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
	$.init();
	var section = root();
	var h2 = $.child(section);
	var text = $.child(h2, true);
	$.reset(h2);
	var div = $.sibling(h2, 2);
	var table = $.child(div);
	var thead = $.child(table);
	var tr = $.child(thead);
	var th = $.child(tr);
	var text_1 = $.child(th, true);
	$.reset(th);
	var th_1 = $.sibling(th);
	var text_2 = $.child(th_1, true);
	$.reset(th_1);
	var th_2 = $.sibling(th_1);
	var text_3 = $.child(th_2, true);
	$.reset(th_2);
	var th_3 = $.sibling(th_2);
	var text_4 = $.child(th_3, true);
	$.reset(th_3);
	$.reset(tr);
	$.reset(thead);
	var tbody = $.sibling(thead);
	$.each(tbody, 5, () => results, $.index, ($$anchor, r) => {
		var tr_1 = root_1();
		var td = $.child(tr_1);
		var text_5 = $.child(td, true);
		$.reset(td);
		var td_1 = $.sibling(td);
		var text_6 = $.child(td_1, true);
		$.reset(td_1);
		var td_2 = $.sibling(td_1);
		var text_7 = $.child(td_2, true);
		$.reset(td_2);
		var td_3 = $.sibling(td_2);
		var text_8 = $.child(td_3, true);
		$.reset(td_3);
		$.reset(tr_1);
		$.template_effect(() => {
			$.set_text(text_5, $.get(r).lib);
			$.set_text(text_6, $.get(r).size);
			$.set_text(text_7, $.get(r).time);
			$.set_text(text_8, $.get(r).lazy);
		});
		$.append($$anchor, tr_1);
	});
	$.reset(tbody);
	$.reset(table);
	$.reset(div);
	$.reset(section);
	$.template_effect(($0, $1, $2, $3, $4) => {
		$.set_text(text, $0);
		$.set_text(text_1, $1);
		$.set_text(text_2, $2);
		$.set_text(text_3, $3);
		$.set_text(text_4, $4);
	}, [
		() => home_resultstable_title1(),
		() => home_resultstable_library1(),
		() => home_resultstable_bundlesize2(),
		() => home_resultstable_lookuptime2(),
		() => home_resultstable_lazyloading2()
	]);
	$.append($$anchor, section);
	$.pop();
}
export { ResultsTable as default };
