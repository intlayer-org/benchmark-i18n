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
var en_pricing_tiers_starter = () => {
	return `Starter`;
};
var fr_pricing_tiers_starter = () => {
	return `Starter`;
};
var es_pricing_tiers_starter = () => {
	return `Starter`;
};
var de_pricing_tiers_starter = () => {
	return `Starter`;
};
var it_pricing_tiers_starter = () => {
	return `Starter`;
};
var pt_pricing_tiers_starter = () => {
	return `Starter`;
};
var zh_pricing_tiers_starter = () => {
	return `入门版`;
};
var ja_pricing_tiers_starter = () => {
	return `スターター`;
};
var ko_pricing_tiers_starter = () => {
	return `스타터`;
};
var ru_pricing_tiers_starter = () => {
	return `Starter`;
};
var pricing_tiers_starter = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_starter(inputs);
	if (locale === "fr") return fr_pricing_tiers_starter(inputs);
	if (locale === "es") return es_pricing_tiers_starter(inputs);
	if (locale === "de") return de_pricing_tiers_starter(inputs);
	if (locale === "it") return it_pricing_tiers_starter(inputs);
	if (locale === "pt") return pt_pricing_tiers_starter(inputs);
	if (locale === "zh") return zh_pricing_tiers_starter(inputs);
	if (locale === "ja") return ja_pricing_tiers_starter(inputs);
	if (locale === "ko") return ko_pricing_tiers_starter(inputs);
	return ru_pricing_tiers_starter(inputs);
});
var en_pricing_tiers_price0 = () => {
	return `$0`;
};
var fr_pricing_tiers_price0 = () => {
	return `0 €`;
};
var es_pricing_tiers_price0 = () => {
	return `0 $`;
};
var de_pricing_tiers_price0 = () => {
	return `0 $`;
};
var it_pricing_tiers_price0 = () => {
	return `0 $`;
};
var pt_pricing_tiers_price0 = () => {
	return `0 $`;
};
var zh_pricing_tiers_price0 = () => {
	return `¥0`;
};
var ja_pricing_tiers_price0 = () => {
	return `¥0`;
};
var ko_pricing_tiers_price0 = () => {
	return `₩0`;
};
var ru_pricing_tiers_price0 = () => {
	return `0 $`;
};
var pricing_tiers_price0 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_price0(inputs);
	if (locale === "fr") return fr_pricing_tiers_price0(inputs);
	if (locale === "es") return es_pricing_tiers_price0(inputs);
	if (locale === "de") return de_pricing_tiers_price0(inputs);
	if (locale === "it") return it_pricing_tiers_price0(inputs);
	if (locale === "pt") return pt_pricing_tiers_price0(inputs);
	if (locale === "zh") return zh_pricing_tiers_price0(inputs);
	if (locale === "ja") return ja_pricing_tiers_price0(inputs);
	if (locale === "ko") return ko_pricing_tiers_price0(inputs);
	return ru_pricing_tiers_price0(inputs);
});
var en_pricing_tiers_forever = () => {
	return `forever`;
};
var fr_pricing_tiers_forever = () => {
	return `pour toujours`;
};
var es_pricing_tiers_forever = () => {
	return `para siempre`;
};
var de_pricing_tiers_forever = () => {
	return `für immer`;
};
var it_pricing_tiers_forever = () => {
	return `per sempre`;
};
var pt_pricing_tiers_forever = () => {
	return `para sempre`;
};
var zh_pricing_tiers_forever = () => {
	return `永久`;
};
var ja_pricing_tiers_forever = () => {
	return `永久に`;
};
var ko_pricing_tiers_forever = () => {
	return `영원히`;
};
var ru_pricing_tiers_forever = () => {
	return `навсегда`;
};
var pricing_tiers_forever = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_forever(inputs);
	if (locale === "fr") return fr_pricing_tiers_forever(inputs);
	if (locale === "es") return es_pricing_tiers_forever(inputs);
	if (locale === "de") return de_pricing_tiers_forever(inputs);
	if (locale === "it") return it_pricing_tiers_forever(inputs);
	if (locale === "pt") return pt_pricing_tiers_forever(inputs);
	if (locale === "zh") return zh_pricing_tiers_forever(inputs);
	if (locale === "ja") return ja_pricing_tiers_forever(inputs);
	if (locale === "ko") return ko_pricing_tiers_forever(inputs);
	return ru_pricing_tiers_forever(inputs);
});
var en_pricing_tiers_benchmarkrunperday3 = (i) => {
	return `${i?.runs} benchmark runs/day`;
};
var fr_pricing_tiers_benchmarkrunperday3 = (i) => {
	return `${i?.runs} passages de benchmark / jour`;
};
var es_pricing_tiers_benchmarkrunperday3 = (i) => {
	return `${i?.runs} ejecuciones de benchmark/día`;
};
var de_pricing_tiers_benchmarkrunperday3 = (i) => {
	return `${i?.runs} Benchmark-Durchläufe/Tag`;
};
var it_pricing_tiers_benchmarkrunperday3 = (i) => {
	return `${i?.runs} esecuzioni benchmark/giorno`;
};
var pt_pricing_tiers_benchmarkrunperday3 = (i) => {
	return `${i?.runs} execuções de benchmark por dia`;
};
var zh_pricing_tiers_benchmarkrunperday3 = (i) => {
	return `每天 ${i?.runs} 次基准测试运行`;
};
var ja_pricing_tiers_benchmarkrunperday3 = (i) => {
	return `1日あたり ${i?.runs} 回のベンチマーク実行`;
};
var ko_pricing_tiers_benchmarkrunperday3 = (i) => {
	return `하루 ${i?.runs}회 벤치마크 실행`;
};
var ru_pricing_tiers_benchmarkrunperday3 = (i) => {
	return `${i?.runs} запусков бенчмарка в день`;
};
var pricing_tiers_benchmarkrunperday3 = ((inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_benchmarkrunperday3(inputs);
	if (locale === "fr") return fr_pricing_tiers_benchmarkrunperday3(inputs);
	if (locale === "es") return es_pricing_tiers_benchmarkrunperday3(inputs);
	if (locale === "de") return de_pricing_tiers_benchmarkrunperday3(inputs);
	if (locale === "it") return it_pricing_tiers_benchmarkrunperday3(inputs);
	if (locale === "pt") return pt_pricing_tiers_benchmarkrunperday3(inputs);
	if (locale === "zh") return zh_pricing_tiers_benchmarkrunperday3(inputs);
	if (locale === "ja") return ja_pricing_tiers_benchmarkrunperday3(inputs);
	if (locale === "ko") return ko_pricing_tiers_benchmarkrunperday3(inputs);
	return ru_pricing_tiers_benchmarkrunperday3(inputs);
});
var en_pricing_tiers_librariesnumber1 = (i) => {
	return `${i?.libs} libraries`;
};
var fr_pricing_tiers_librariesnumber1 = (i) => {
	return `${i?.libs} bibliothèques`;
};
var es_pricing_tiers_librariesnumber1 = (i) => {
	return `${i?.libs} bibliotecas`;
};
var de_pricing_tiers_librariesnumber1 = (i) => {
	return `${i?.libs} Bibliotheken`;
};
var it_pricing_tiers_librariesnumber1 = (i) => {
	return `${i?.libs} librerie`;
};
var pt_pricing_tiers_librariesnumber1 = (i) => {
	return `${i?.libs} bibliotecas`;
};
var zh_pricing_tiers_librariesnumber1 = (i) => {
	return `${i?.libs} 个库`;
};
var ja_pricing_tiers_librariesnumber1 = (i) => {
	return `${i?.libs} 個のライブラリ`;
};
var ko_pricing_tiers_librariesnumber1 = (i) => {
	return `${i?.libs}개 라이브러리`;
};
var ru_pricing_tiers_librariesnumber1 = (i) => {
	return `${i?.libs} библиотек`;
};
var pricing_tiers_librariesnumber1 = ((inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_librariesnumber1(inputs);
	if (locale === "fr") return fr_pricing_tiers_librariesnumber1(inputs);
	if (locale === "es") return es_pricing_tiers_librariesnumber1(inputs);
	if (locale === "de") return de_pricing_tiers_librariesnumber1(inputs);
	if (locale === "it") return it_pricing_tiers_librariesnumber1(inputs);
	if (locale === "pt") return pt_pricing_tiers_librariesnumber1(inputs);
	if (locale === "zh") return zh_pricing_tiers_librariesnumber1(inputs);
	if (locale === "ja") return ja_pricing_tiers_librariesnumber1(inputs);
	if (locale === "ko") return ko_pricing_tiers_librariesnumber1(inputs);
	return ru_pricing_tiers_librariesnumber1(inputs);
});
var en_pricing_tiers_communitysupport1 = () => {
	return `Community support`;
};
var fr_pricing_tiers_communitysupport1 = () => {
	return `Support communautaire`;
};
var es_pricing_tiers_communitysupport1 = () => {
	return `Soporte de la comunidad`;
};
var de_pricing_tiers_communitysupport1 = () => {
	return `Community-Support`;
};
var it_pricing_tiers_communitysupport1 = () => {
	return `Supporto della comunità`;
};
var pt_pricing_tiers_communitysupport1 = () => {
	return `Suporte da comunidade`;
};
var zh_pricing_tiers_communitysupport1 = () => {
	return `社区支持`;
};
var ja_pricing_tiers_communitysupport1 = () => {
	return `コミュニティサポート`;
};
var ko_pricing_tiers_communitysupport1 = () => {
	return `커뮤니티 지원`;
};
var ru_pricing_tiers_communitysupport1 = () => {
	return `Сообщество поддержки`;
};
var pricing_tiers_communitysupport1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_communitysupport1(inputs);
	if (locale === "fr") return fr_pricing_tiers_communitysupport1(inputs);
	if (locale === "es") return es_pricing_tiers_communitysupport1(inputs);
	if (locale === "de") return de_pricing_tiers_communitysupport1(inputs);
	if (locale === "it") return it_pricing_tiers_communitysupport1(inputs);
	if (locale === "pt") return pt_pricing_tiers_communitysupport1(inputs);
	if (locale === "zh") return zh_pricing_tiers_communitysupport1(inputs);
	if (locale === "ja") return ja_pricing_tiers_communitysupport1(inputs);
	if (locale === "ko") return ko_pricing_tiers_communitysupport1(inputs);
	return ru_pricing_tiers_communitysupport1(inputs);
});
var en_pricing_tiers_publicresults1 = () => {
	return `Public results`;
};
var fr_pricing_tiers_publicresults1 = () => {
	return `Résultats publics`;
};
var es_pricing_tiers_publicresults1 = () => {
	return `Resultados públicos`;
};
var de_pricing_tiers_publicresults1 = () => {
	return `Öffentliche Ergebnisse`;
};
var it_pricing_tiers_publicresults1 = () => {
	return `Risultati pubblici`;
};
var pt_pricing_tiers_publicresults1 = () => {
	return `Resultados públicos`;
};
var zh_pricing_tiers_publicresults1 = () => {
	return `公开结果`;
};
var ja_pricing_tiers_publicresults1 = () => {
	return `公開結果`;
};
var ko_pricing_tiers_publicresults1 = () => {
	return `결과 공개`;
};
var ru_pricing_tiers_publicresults1 = () => {
	return `Публичные результаты`;
};
var pricing_tiers_publicresults1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_publicresults1(inputs);
	if (locale === "fr") return fr_pricing_tiers_publicresults1(inputs);
	if (locale === "es") return es_pricing_tiers_publicresults1(inputs);
	if (locale === "de") return de_pricing_tiers_publicresults1(inputs);
	if (locale === "it") return it_pricing_tiers_publicresults1(inputs);
	if (locale === "pt") return pt_pricing_tiers_publicresults1(inputs);
	if (locale === "zh") return zh_pricing_tiers_publicresults1(inputs);
	if (locale === "ja") return ja_pricing_tiers_publicresults1(inputs);
	if (locale === "ko") return ko_pricing_tiers_publicresults1(inputs);
	return ru_pricing_tiers_publicresults1(inputs);
});
var en_pricing_tiers_pro = () => {
	return `Pro`;
};
var fr_pricing_tiers_pro = () => {
	return `Pro`;
};
var es_pricing_tiers_pro = () => {
	return `Pro`;
};
var de_pricing_tiers_pro = () => {
	return `Pro`;
};
var it_pricing_tiers_pro = () => {
	return `Pro`;
};
var pt_pricing_tiers_pro = () => {
	return `Pro`;
};
var zh_pricing_tiers_pro = () => {
	return `专业版`;
};
var ja_pricing_tiers_pro = () => {
	return `プロ`;
};
var ko_pricing_tiers_pro = () => {
	return `프로`;
};
var ru_pricing_tiers_pro = () => {
	return `Pro`;
};
var pricing_tiers_pro = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_pro(inputs);
	if (locale === "fr") return fr_pricing_tiers_pro(inputs);
	if (locale === "es") return es_pricing_tiers_pro(inputs);
	if (locale === "de") return de_pricing_tiers_pro(inputs);
	if (locale === "it") return it_pricing_tiers_pro(inputs);
	if (locale === "pt") return pt_pricing_tiers_pro(inputs);
	if (locale === "zh") return zh_pricing_tiers_pro(inputs);
	if (locale === "ja") return ja_pricing_tiers_pro(inputs);
	if (locale === "ko") return ko_pricing_tiers_pro(inputs);
	return ru_pricing_tiers_pro(inputs);
});
var en_pricing_tiers_price29 = () => {
	return `$29`;
};
var fr_pricing_tiers_price29 = () => {
	return `29 €`;
};
var es_pricing_tiers_price29 = () => {
	return `29 $`;
};
var de_pricing_tiers_price29 = () => {
	return `29 $`;
};
var it_pricing_tiers_price29 = () => {
	return `29 $`;
};
var pt_pricing_tiers_price29 = () => {
	return `29 $`;
};
var zh_pricing_tiers_price29 = () => {
	return `¥199`;
};
var ja_pricing_tiers_price29 = () => {
	return `¥3,500`;
};
var ko_pricing_tiers_price29 = () => {
	return `₩39,000`;
};
var ru_pricing_tiers_price29 = () => {
	return `29 $`;
};
var pricing_tiers_price29 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_price29(inputs);
	if (locale === "fr") return fr_pricing_tiers_price29(inputs);
	if (locale === "es") return es_pricing_tiers_price29(inputs);
	if (locale === "de") return de_pricing_tiers_price29(inputs);
	if (locale === "it") return it_pricing_tiers_price29(inputs);
	if (locale === "pt") return pt_pricing_tiers_price29(inputs);
	if (locale === "zh") return zh_pricing_tiers_price29(inputs);
	if (locale === "ja") return ja_pricing_tiers_price29(inputs);
	if (locale === "ko") return ko_pricing_tiers_price29(inputs);
	return ru_pricing_tiers_price29(inputs);
});
var en_pricing_tiers_month = () => {
	return `/month`;
};
var fr_pricing_tiers_month = () => {
	return `/ mois`;
};
var es_pricing_tiers_month = () => {
	return `/mes`;
};
var de_pricing_tiers_month = () => {
	return `/Monat`;
};
var it_pricing_tiers_month = () => {
	return `/mese`;
};
var pt_pricing_tiers_month = () => {
	return `/mês`;
};
var zh_pricing_tiers_month = () => {
	return `/月`;
};
var ja_pricing_tiers_month = () => {
	return `/月`;
};
var ko_pricing_tiers_month = () => {
	return `/월`;
};
var ru_pricing_tiers_month = () => {
	return `/месяц`;
};
var pricing_tiers_month = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_month(inputs);
	if (locale === "fr") return fr_pricing_tiers_month(inputs);
	if (locale === "es") return es_pricing_tiers_month(inputs);
	if (locale === "de") return de_pricing_tiers_month(inputs);
	if (locale === "it") return it_pricing_tiers_month(inputs);
	if (locale === "pt") return pt_pricing_tiers_month(inputs);
	if (locale === "zh") return zh_pricing_tiers_month(inputs);
	if (locale === "ja") return ja_pricing_tiers_month(inputs);
	if (locale === "ko") return ko_pricing_tiers_month(inputs);
	return ru_pricing_tiers_month(inputs);
});
var en_pricing_tiers_unlimitedruns1 = () => {
	return `Unlimited runs`;
};
var fr_pricing_tiers_unlimitedruns1 = () => {
	return `Passages illimités`;
};
var es_pricing_tiers_unlimitedruns1 = () => {
	return `Ejecuciones ilimitadas`;
};
var de_pricing_tiers_unlimitedruns1 = () => {
	return `Unbegrenzte Durchläufe`;
};
var it_pricing_tiers_unlimitedruns1 = () => {
	return `Esecuzioni illimitate`;
};
var pt_pricing_tiers_unlimitedruns1 = () => {
	return `Execuções ilimitadas`;
};
var zh_pricing_tiers_unlimitedruns1 = () => {
	return `无限次运行`;
};
var ja_pricing_tiers_unlimitedruns1 = () => {
	return `無制限の実行`;
};
var ko_pricing_tiers_unlimitedruns1 = () => {
	return `무제한 실행`;
};
var ru_pricing_tiers_unlimitedruns1 = () => {
	return `Неограниченное количество запусков`;
};
var pricing_tiers_unlimitedruns1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_unlimitedruns1(inputs);
	if (locale === "fr") return fr_pricing_tiers_unlimitedruns1(inputs);
	if (locale === "es") return es_pricing_tiers_unlimitedruns1(inputs);
	if (locale === "de") return de_pricing_tiers_unlimitedruns1(inputs);
	if (locale === "it") return it_pricing_tiers_unlimitedruns1(inputs);
	if (locale === "pt") return pt_pricing_tiers_unlimitedruns1(inputs);
	if (locale === "zh") return zh_pricing_tiers_unlimitedruns1(inputs);
	if (locale === "ja") return ja_pricing_tiers_unlimitedruns1(inputs);
	if (locale === "ko") return ko_pricing_tiers_unlimitedruns1(inputs);
	return ru_pricing_tiers_unlimitedruns1(inputs);
});
var en_pricing_tiers_alllibraries1 = () => {
	return `All libraries`;
};
var fr_pricing_tiers_alllibraries1 = () => {
	return `Toutes les bibliothèques`;
};
var es_pricing_tiers_alllibraries1 = () => {
	return `Todas las bibliotecas`;
};
var de_pricing_tiers_alllibraries1 = () => {
	return `Alle Bibliotheken`;
};
var it_pricing_tiers_alllibraries1 = () => {
	return `Tutte le librerie`;
};
var pt_pricing_tiers_alllibraries1 = () => {
	return `Todas as bibliotecas`;
};
var zh_pricing_tiers_alllibraries1 = () => {
	return `所有库`;
};
var ja_pricing_tiers_alllibraries1 = () => {
	return `すべてのライブラリ`;
};
var ko_pricing_tiers_alllibraries1 = () => {
	return `모든 라이브러리`;
};
var ru_pricing_tiers_alllibraries1 = () => {
	return `Все библиотеки`;
};
var pricing_tiers_alllibraries1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_alllibraries1(inputs);
	if (locale === "fr") return fr_pricing_tiers_alllibraries1(inputs);
	if (locale === "es") return es_pricing_tiers_alllibraries1(inputs);
	if (locale === "de") return de_pricing_tiers_alllibraries1(inputs);
	if (locale === "it") return it_pricing_tiers_alllibraries1(inputs);
	if (locale === "pt") return pt_pricing_tiers_alllibraries1(inputs);
	if (locale === "zh") return zh_pricing_tiers_alllibraries1(inputs);
	if (locale === "ja") return ja_pricing_tiers_alllibraries1(inputs);
	if (locale === "ko") return ko_pricing_tiers_alllibraries1(inputs);
	return ru_pricing_tiers_alllibraries1(inputs);
});
var en_pricing_tiers_prioritysupport1 = () => {
	return `Priority support`;
};
var fr_pricing_tiers_prioritysupport1 = () => {
	return `Support prioritaire`;
};
var es_pricing_tiers_prioritysupport1 = () => {
	return `Soporte prioritario`;
};
var de_pricing_tiers_prioritysupport1 = () => {
	return `Prioritäts-Support`;
};
var it_pricing_tiers_prioritysupport1 = () => {
	return `Supporto prioritario`;
};
var pt_pricing_tiers_prioritysupport1 = () => {
	return `Suporte prioritário`;
};
var zh_pricing_tiers_prioritysupport1 = () => {
	return `优先支持`;
};
var ja_pricing_tiers_prioritysupport1 = () => {
	return `優先サポート`;
};
var ko_pricing_tiers_prioritysupport1 = () => {
	return `우선 지원`;
};
var ru_pricing_tiers_prioritysupport1 = () => {
	return `Приоритетная поддержка`;
};
var pricing_tiers_prioritysupport1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_prioritysupport1(inputs);
	if (locale === "fr") return fr_pricing_tiers_prioritysupport1(inputs);
	if (locale === "es") return es_pricing_tiers_prioritysupport1(inputs);
	if (locale === "de") return de_pricing_tiers_prioritysupport1(inputs);
	if (locale === "it") return it_pricing_tiers_prioritysupport1(inputs);
	if (locale === "pt") return pt_pricing_tiers_prioritysupport1(inputs);
	if (locale === "zh") return zh_pricing_tiers_prioritysupport1(inputs);
	if (locale === "ja") return ja_pricing_tiers_prioritysupport1(inputs);
	if (locale === "ko") return ko_pricing_tiers_prioritysupport1(inputs);
	return ru_pricing_tiers_prioritysupport1(inputs);
});
var en_pricing_tiers_privateresults1 = () => {
	return `Private results`;
};
var fr_pricing_tiers_privateresults1 = () => {
	return `Résultats privés`;
};
var es_pricing_tiers_privateresults1 = () => {
	return `Resultados privados`;
};
var de_pricing_tiers_privateresults1 = () => {
	return `Private Ergebnisse`;
};
var it_pricing_tiers_privateresults1 = () => {
	return `Risultati privati`;
};
var pt_pricing_tiers_privateresults1 = () => {
	return `Resultados privados`;
};
var zh_pricing_tiers_privateresults1 = () => {
	return `私有结果`;
};
var ja_pricing_tiers_privateresults1 = () => {
	return `プライベート結果`;
};
var ko_pricing_tiers_privateresults1 = () => {
	return `결과 비공개`;
};
var ru_pricing_tiers_privateresults1 = () => {
	return `Приватные результаты`;
};
var pricing_tiers_privateresults1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_privateresults1(inputs);
	if (locale === "fr") return fr_pricing_tiers_privateresults1(inputs);
	if (locale === "es") return es_pricing_tiers_privateresults1(inputs);
	if (locale === "de") return de_pricing_tiers_privateresults1(inputs);
	if (locale === "it") return it_pricing_tiers_privateresults1(inputs);
	if (locale === "pt") return pt_pricing_tiers_privateresults1(inputs);
	if (locale === "zh") return zh_pricing_tiers_privateresults1(inputs);
	if (locale === "ja") return ja_pricing_tiers_privateresults1(inputs);
	if (locale === "ko") return ko_pricing_tiers_privateresults1(inputs);
	return ru_pricing_tiers_privateresults1(inputs);
});
var en_pricing_tiers_ciintegration1 = () => {
	return `CI integration`;
};
var fr_pricing_tiers_ciintegration1 = () => {
	return `Intégration CI`;
};
var es_pricing_tiers_ciintegration1 = () => {
	return `Integración CI`;
};
var de_pricing_tiers_ciintegration1 = () => {
	return `CI-Integration`;
};
var it_pricing_tiers_ciintegration1 = () => {
	return `Integrazione CI`;
};
var pt_pricing_tiers_ciintegration1 = () => {
	return `Integração CI`;
};
var zh_pricing_tiers_ciintegration1 = () => {
	return `CI 集成`;
};
var ja_pricing_tiers_ciintegration1 = () => {
	return `CI統合`;
};
var ko_pricing_tiers_ciintegration1 = () => {
	return `CI 통합`;
};
var ru_pricing_tiers_ciintegration1 = () => {
	return `Интеграция с CI`;
};
var pricing_tiers_ciintegration1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_ciintegration1(inputs);
	if (locale === "fr") return fr_pricing_tiers_ciintegration1(inputs);
	if (locale === "es") return es_pricing_tiers_ciintegration1(inputs);
	if (locale === "de") return de_pricing_tiers_ciintegration1(inputs);
	if (locale === "it") return it_pricing_tiers_ciintegration1(inputs);
	if (locale === "pt") return pt_pricing_tiers_ciintegration1(inputs);
	if (locale === "zh") return zh_pricing_tiers_ciintegration1(inputs);
	if (locale === "ja") return ja_pricing_tiers_ciintegration1(inputs);
	if (locale === "ko") return ko_pricing_tiers_ciintegration1(inputs);
	return ru_pricing_tiers_ciintegration1(inputs);
});
var en_pricing_tiers_historicaldata1 = () => {
	return `Historical data`;
};
var fr_pricing_tiers_historicaldata1 = () => {
	return `Données historiques`;
};
var es_pricing_tiers_historicaldata1 = () => {
	return `Datos históricos`;
};
var de_pricing_tiers_historicaldata1 = () => {
	return `Historische Daten`;
};
var it_pricing_tiers_historicaldata1 = () => {
	return `Dati storici`;
};
var pt_pricing_tiers_historicaldata1 = () => {
	return `Dados históricos`;
};
var zh_pricing_tiers_historicaldata1 = () => {
	return `历史数据`;
};
var ja_pricing_tiers_historicaldata1 = () => {
	return `履歴データ`;
};
var ko_pricing_tiers_historicaldata1 = () => {
	return `기록 데이터`;
};
var ru_pricing_tiers_historicaldata1 = () => {
	return `Исторические данные`;
};
var pricing_tiers_historicaldata1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_historicaldata1(inputs);
	if (locale === "fr") return fr_pricing_tiers_historicaldata1(inputs);
	if (locale === "es") return es_pricing_tiers_historicaldata1(inputs);
	if (locale === "de") return de_pricing_tiers_historicaldata1(inputs);
	if (locale === "it") return it_pricing_tiers_historicaldata1(inputs);
	if (locale === "pt") return pt_pricing_tiers_historicaldata1(inputs);
	if (locale === "zh") return zh_pricing_tiers_historicaldata1(inputs);
	if (locale === "ja") return ja_pricing_tiers_historicaldata1(inputs);
	if (locale === "ko") return ko_pricing_tiers_historicaldata1(inputs);
	return ru_pricing_tiers_historicaldata1(inputs);
});
var en_pricing_tiers_enterprise = () => {
	return `Enterprise`;
};
var fr_pricing_tiers_enterprise = () => {
	return `Enterprise`;
};
var es_pricing_tiers_enterprise = () => {
	return `Enterprise`;
};
var de_pricing_tiers_enterprise = () => {
	return `Enterprise`;
};
var it_pricing_tiers_enterprise = () => {
	return `Enterprise`;
};
var pt_pricing_tiers_enterprise = () => {
	return `Enterprise`;
};
var zh_pricing_tiers_enterprise = () => {
	return `企业版`;
};
var ja_pricing_tiers_enterprise = () => {
	return `エンタープライズ`;
};
var ko_pricing_tiers_enterprise = () => {
	return `엔터프라이즈`;
};
var ru_pricing_tiers_enterprise = () => {
	return `Корпоративный`;
};
var pricing_tiers_enterprise = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_enterprise(inputs);
	if (locale === "fr") return fr_pricing_tiers_enterprise(inputs);
	if (locale === "es") return es_pricing_tiers_enterprise(inputs);
	if (locale === "de") return de_pricing_tiers_enterprise(inputs);
	if (locale === "it") return it_pricing_tiers_enterprise(inputs);
	if (locale === "pt") return pt_pricing_tiers_enterprise(inputs);
	if (locale === "zh") return zh_pricing_tiers_enterprise(inputs);
	if (locale === "ja") return ja_pricing_tiers_enterprise(inputs);
	if (locale === "ko") return ko_pricing_tiers_enterprise(inputs);
	return ru_pricing_tiers_enterprise(inputs);
});
var en_pricing_tiers_customprice1 = () => {
	return `Custom`;
};
var fr_pricing_tiers_customprice1 = () => {
	return `Sur mesure`;
};
var es_pricing_tiers_customprice1 = () => {
	return `Personalizado`;
};
var de_pricing_tiers_customprice1 = () => {
	return `Individuell`;
};
var it_pricing_tiers_customprice1 = () => {
	return `Personalizzato`;
};
var pt_pricing_tiers_customprice1 = () => {
	return `Personalizado`;
};
var zh_pricing_tiers_customprice1 = () => {
	return `定制`;
};
var ja_pricing_tiers_customprice1 = () => {
	return `カスタム`;
};
var ko_pricing_tiers_customprice1 = () => {
	return `커스텀`;
};
var ru_pricing_tiers_customprice1 = () => {
	return `Индивидуальная цена`;
};
var pricing_tiers_customprice1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_customprice1(inputs);
	if (locale === "fr") return fr_pricing_tiers_customprice1(inputs);
	if (locale === "es") return es_pricing_tiers_customprice1(inputs);
	if (locale === "de") return de_pricing_tiers_customprice1(inputs);
	if (locale === "it") return it_pricing_tiers_customprice1(inputs);
	if (locale === "pt") return pt_pricing_tiers_customprice1(inputs);
	if (locale === "zh") return zh_pricing_tiers_customprice1(inputs);
	if (locale === "ja") return ja_pricing_tiers_customprice1(inputs);
	if (locale === "ko") return ko_pricing_tiers_customprice1(inputs);
	return ru_pricing_tiers_customprice1(inputs);
});
var en_pricing_tiers_everythinginpro2 = () => {
	return `Everything in Pro`;
};
var fr_pricing_tiers_everythinginpro2 = () => {
	return `Tout ce qui est dans Pro`;
};
var es_pricing_tiers_everythinginpro2 = () => {
	return `Todo lo que hay en Pro`;
};
var de_pricing_tiers_everythinginpro2 = () => {
	return `Alles in Pro`;
};
var it_pricing_tiers_everythinginpro2 = () => {
	return `Tutto quello che c'è in Pro`;
};
var pt_pricing_tiers_everythinginpro2 = () => {
	return `Tudo o que está no Pro`;
};
var zh_pricing_tiers_everythinginpro2 = () => {
	return `包含专业版所有功能`;
};
var ja_pricing_tiers_everythinginpro2 = () => {
	return `Proプランの全機能`;
};
var ko_pricing_tiers_everythinginpro2 = () => {
	return `Pro의 모든 기능 포함`;
};
var ru_pricing_tiers_everythinginpro2 = () => {
	return `Все возможности Pro`;
};
var pricing_tiers_everythinginpro2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_everythinginpro2(inputs);
	if (locale === "fr") return fr_pricing_tiers_everythinginpro2(inputs);
	if (locale === "es") return es_pricing_tiers_everythinginpro2(inputs);
	if (locale === "de") return de_pricing_tiers_everythinginpro2(inputs);
	if (locale === "it") return it_pricing_tiers_everythinginpro2(inputs);
	if (locale === "pt") return pt_pricing_tiers_everythinginpro2(inputs);
	if (locale === "zh") return zh_pricing_tiers_everythinginpro2(inputs);
	if (locale === "ja") return ja_pricing_tiers_everythinginpro2(inputs);
	if (locale === "ko") return ko_pricing_tiers_everythinginpro2(inputs);
	return ru_pricing_tiers_everythinginpro2(inputs);
});
var en_pricing_tiers_onpremiseoption2 = () => {
	return `On-premise option`;
};
var fr_pricing_tiers_onpremiseoption2 = () => {
	return `Option sur site (on-premise)`;
};
var es_pricing_tiers_onpremiseoption2 = () => {
	return `Opción on-premise`;
};
var de_pricing_tiers_onpremiseoption2 = () => {
	return `On-Premise-Option`;
};
var it_pricing_tiers_onpremiseoption2 = () => {
	return `Opzione in locale`;
};
var pt_pricing_tiers_onpremiseoption2 = () => {
	return `Opção on-premise`;
};
var zh_pricing_tiers_onpremiseoption2 = () => {
	return `本地部署选项`;
};
var ja_pricing_tiers_onpremiseoption2 = () => {
	return `オンプレミスオプション`;
};
var ko_pricing_tiers_onpremiseoption2 = () => {
	return `온프레미스 옵션`;
};
var ru_pricing_tiers_onpremiseoption2 = () => {
	return `Локальное развертывание`;
};
var pricing_tiers_onpremiseoption2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_onpremiseoption2(inputs);
	if (locale === "fr") return fr_pricing_tiers_onpremiseoption2(inputs);
	if (locale === "es") return es_pricing_tiers_onpremiseoption2(inputs);
	if (locale === "de") return de_pricing_tiers_onpremiseoption2(inputs);
	if (locale === "it") return it_pricing_tiers_onpremiseoption2(inputs);
	if (locale === "pt") return pt_pricing_tiers_onpremiseoption2(inputs);
	if (locale === "zh") return zh_pricing_tiers_onpremiseoption2(inputs);
	if (locale === "ja") return ja_pricing_tiers_onpremiseoption2(inputs);
	if (locale === "ko") return ko_pricing_tiers_onpremiseoption2(inputs);
	return ru_pricing_tiers_onpremiseoption2(inputs);
});
var en_pricing_tiers_ssosaml1 = () => {
	return `SSO & SAML`;
};
var fr_pricing_tiers_ssosaml1 = () => {
	return `SSO & SAML`;
};
var es_pricing_tiers_ssosaml1 = () => {
	return `SSO y SAML`;
};
var de_pricing_tiers_ssosaml1 = () => {
	return `SSO & SAML`;
};
var it_pricing_tiers_ssosaml1 = () => {
	return `SSO e SAML`;
};
var pt_pricing_tiers_ssosaml1 = () => {
	return `SSO & SAML`;
};
var zh_pricing_tiers_ssosaml1 = () => {
	return `SSO 和 SAML`;
};
var ja_pricing_tiers_ssosaml1 = () => {
	return `SSO & SAML`;
};
var ko_pricing_tiers_ssosaml1 = () => {
	return `SSO 및 SAML`;
};
var ru_pricing_tiers_ssosaml1 = () => {
	return `SSO и SAML`;
};
var pricing_tiers_ssosaml1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_ssosaml1(inputs);
	if (locale === "fr") return fr_pricing_tiers_ssosaml1(inputs);
	if (locale === "es") return es_pricing_tiers_ssosaml1(inputs);
	if (locale === "de") return de_pricing_tiers_ssosaml1(inputs);
	if (locale === "it") return it_pricing_tiers_ssosaml1(inputs);
	if (locale === "pt") return pt_pricing_tiers_ssosaml1(inputs);
	if (locale === "zh") return zh_pricing_tiers_ssosaml1(inputs);
	if (locale === "ja") return ja_pricing_tiers_ssosaml1(inputs);
	if (locale === "ko") return ko_pricing_tiers_ssosaml1(inputs);
	return ru_pricing_tiers_ssosaml1(inputs);
});
var en_pricing_tiers_dedicatedaccountmanager2 = () => {
	return `Dedicated account manager`;
};
var fr_pricing_tiers_dedicatedaccountmanager2 = () => {
	return `Gestionnaire de compte dédié`;
};
var es_pricing_tiers_dedicatedaccountmanager2 = () => {
	return `Gestor de cuentas dedicado`;
};
var de_pricing_tiers_dedicatedaccountmanager2 = () => {
	return `Dedizierter Account-Manager`;
};
var it_pricing_tiers_dedicatedaccountmanager2 = () => {
	return `Account manager dedicato`;
};
var pt_pricing_tiers_dedicatedaccountmanager2 = () => {
	return `Gerente de conta dedicado`;
};
var zh_pricing_tiers_dedicatedaccountmanager2 = () => {
	return `专属客户经理`;
};
var ja_pricing_tiers_dedicatedaccountmanager2 = () => {
	return `専任のアカウントマネージャー`;
};
var ko_pricing_tiers_dedicatedaccountmanager2 = () => {
	return `전담 어카운트 매니저`;
};
var ru_pricing_tiers_dedicatedaccountmanager2 = () => {
	return `Выделенный менеджер`;
};
var pricing_tiers_dedicatedaccountmanager2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_dedicatedaccountmanager2(inputs);
	if (locale === "fr") return fr_pricing_tiers_dedicatedaccountmanager2(inputs);
	if (locale === "es") return es_pricing_tiers_dedicatedaccountmanager2(inputs);
	if (locale === "de") return de_pricing_tiers_dedicatedaccountmanager2(inputs);
	if (locale === "it") return it_pricing_tiers_dedicatedaccountmanager2(inputs);
	if (locale === "pt") return pt_pricing_tiers_dedicatedaccountmanager2(inputs);
	if (locale === "zh") return zh_pricing_tiers_dedicatedaccountmanager2(inputs);
	if (locale === "ja") return ja_pricing_tiers_dedicatedaccountmanager2(inputs);
	if (locale === "ko") return ko_pricing_tiers_dedicatedaccountmanager2(inputs);
	return ru_pricing_tiers_dedicatedaccountmanager2(inputs);
});
var en_pricing_tiers_customslas1 = () => {
	return `Custom SLAs`;
};
var fr_pricing_tiers_customslas1 = () => {
	return `SLA personnalisés`;
};
var es_pricing_tiers_customslas1 = () => {
	return `SLA personalizados`;
};
var de_pricing_tiers_customslas1 = () => {
	return `Individuelle SLAs`;
};
var it_pricing_tiers_customslas1 = () => {
	return `SLA personalizzati`;
};
var pt_pricing_tiers_customslas1 = () => {
	return `SLAs personalizados`;
};
var zh_pricing_tiers_customslas1 = () => {
	return `定制 SLA`;
};
var ja_pricing_tiers_customslas1 = () => {
	return `カスタムSLA`;
};
var ko_pricing_tiers_customslas1 = () => {
	return `맞춤형 SLA`;
};
var ru_pricing_tiers_customslas1 = () => {
	return `Индивидуальные SLA`;
};
var pricing_tiers_customslas1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_customslas1(inputs);
	if (locale === "fr") return fr_pricing_tiers_customslas1(inputs);
	if (locale === "es") return es_pricing_tiers_customslas1(inputs);
	if (locale === "de") return de_pricing_tiers_customslas1(inputs);
	if (locale === "it") return it_pricing_tiers_customslas1(inputs);
	if (locale === "pt") return pt_pricing_tiers_customslas1(inputs);
	if (locale === "zh") return zh_pricing_tiers_customslas1(inputs);
	if (locale === "ja") return ja_pricing_tiers_customslas1(inputs);
	if (locale === "ko") return ko_pricing_tiers_customslas1(inputs);
	return ru_pricing_tiers_customslas1(inputs);
});
var en_pricing_tiers_auditlogs1 = () => {
	return `Audit logs`;
};
var fr_pricing_tiers_auditlogs1 = () => {
	return `Journaux d'audit`;
};
var es_pricing_tiers_auditlogs1 = () => {
	return `Registros de auditoría`;
};
var de_pricing_tiers_auditlogs1 = () => {
	return `Audit-Logs`;
};
var it_pricing_tiers_auditlogs1 = () => {
	return `Registri di controllo`;
};
var pt_pricing_tiers_auditlogs1 = () => {
	return `Logs de auditoria`;
};
var zh_pricing_tiers_auditlogs1 = () => {
	return `审计日志`;
};
var ja_pricing_tiers_auditlogs1 = () => {
	return `監査ログ`;
};
var ko_pricing_tiers_auditlogs1 = () => {
	return `감사 로그`;
};
var ru_pricing_tiers_auditlogs1 = () => {
	return `Журналы аудита`;
};
var pricing_tiers_auditlogs1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_auditlogs1(inputs);
	if (locale === "fr") return fr_pricing_tiers_auditlogs1(inputs);
	if (locale === "es") return es_pricing_tiers_auditlogs1(inputs);
	if (locale === "de") return de_pricing_tiers_auditlogs1(inputs);
	if (locale === "it") return it_pricing_tiers_auditlogs1(inputs);
	if (locale === "pt") return pt_pricing_tiers_auditlogs1(inputs);
	if (locale === "zh") return zh_pricing_tiers_auditlogs1(inputs);
	if (locale === "ja") return ja_pricing_tiers_auditlogs1(inputs);
	if (locale === "ko") return ko_pricing_tiers_auditlogs1(inputs);
	return ru_pricing_tiers_auditlogs1(inputs);
});
var en_pricing_tiers_trainingsessions1 = () => {
	return `Training sessions`;
};
var fr_pricing_tiers_trainingsessions1 = () => {
	return `Sessions de formation`;
};
var es_pricing_tiers_trainingsessions1 = () => {
	return `Sesiones de formación`;
};
var de_pricing_tiers_trainingsessions1 = () => {
	return `Schulungen`;
};
var it_pricing_tiers_trainingsessions1 = () => {
	return `Sessioni di formazione`;
};
var pt_pricing_tiers_trainingsessions1 = () => {
	return `Sessões de treinamento`;
};
var zh_pricing_tiers_trainingsessions1 = () => {
	return `培训课程`;
};
var ja_pricing_tiers_trainingsessions1 = () => {
	return `トレーニングセッション`;
};
var ko_pricing_tiers_trainingsessions1 = () => {
	return `교육 세션`;
};
var ru_pricing_tiers_trainingsessions1 = () => {
	return `Сессии обучения`;
};
var pricing_tiers_trainingsessions1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_trainingsessions1(inputs);
	if (locale === "fr") return fr_pricing_tiers_trainingsessions1(inputs);
	if (locale === "es") return es_pricing_tiers_trainingsessions1(inputs);
	if (locale === "de") return de_pricing_tiers_trainingsessions1(inputs);
	if (locale === "it") return it_pricing_tiers_trainingsessions1(inputs);
	if (locale === "pt") return pt_pricing_tiers_trainingsessions1(inputs);
	if (locale === "zh") return zh_pricing_tiers_trainingsessions1(inputs);
	if (locale === "ja") return ja_pricing_tiers_trainingsessions1(inputs);
	if (locale === "ko") return ko_pricing_tiers_trainingsessions1(inputs);
	return ru_pricing_tiers_trainingsessions1(inputs);
});
var en_pricing_tiers_contactsales1 = () => {
	return `Contact Sales`;
};
var fr_pricing_tiers_contactsales1 = () => {
	return `Contacter le service commercial`;
};
var es_pricing_tiers_contactsales1 = () => {
	return `Contactar con ventas`;
};
var de_pricing_tiers_contactsales1 = () => {
	return `Vertrieb kontaktieren`;
};
var it_pricing_tiers_contactsales1 = () => {
	return `Contatta l'ufficio vendite`;
};
var pt_pricing_tiers_contactsales1 = () => {
	return `Contatar Vendas`;
};
var zh_pricing_tiers_contactsales1 = () => {
	return `联系销售`;
};
var ja_pricing_tiers_contactsales1 = () => {
	return `営業に連絡`;
};
var ko_pricing_tiers_contactsales1 = () => {
	return `영업팀 문의`;
};
var ru_pricing_tiers_contactsales1 = () => {
	return `Связаться с отделом продаж`;
};
var pricing_tiers_contactsales1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_contactsales1(inputs);
	if (locale === "fr") return fr_pricing_tiers_contactsales1(inputs);
	if (locale === "es") return es_pricing_tiers_contactsales1(inputs);
	if (locale === "de") return de_pricing_tiers_contactsales1(inputs);
	if (locale === "it") return it_pricing_tiers_contactsales1(inputs);
	if (locale === "pt") return pt_pricing_tiers_contactsales1(inputs);
	if (locale === "zh") return zh_pricing_tiers_contactsales1(inputs);
	if (locale === "ja") return ja_pricing_tiers_contactsales1(inputs);
	if (locale === "ko") return ko_pricing_tiers_contactsales1(inputs);
	return ru_pricing_tiers_contactsales1(inputs);
});
var en_pricing_tiers_getstarted1 = () => {
	return `Get Started`;
};
var fr_pricing_tiers_getstarted1 = () => {
	return `Démarrer`;
};
var es_pricing_tiers_getstarted1 = () => {
	return `Empezar`;
};
var de_pricing_tiers_getstarted1 = () => {
	return `Jetzt starten`;
};
var it_pricing_tiers_getstarted1 = () => {
	return `Inizia ora`;
};
var pt_pricing_tiers_getstarted1 = () => {
	return `Começar`;
};
var zh_pricing_tiers_getstarted1 = () => {
	return `立即开始`;
};
var ja_pricing_tiers_getstarted1 = () => {
	return `今すぐ始める`;
};
var ko_pricing_tiers_getstarted1 = () => {
	return `시작하기`;
};
var ru_pricing_tiers_getstarted1 = () => {
	return `Начать`;
};
var pricing_tiers_getstarted1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_getstarted1(inputs);
	if (locale === "fr") return fr_pricing_tiers_getstarted1(inputs);
	if (locale === "es") return es_pricing_tiers_getstarted1(inputs);
	if (locale === "de") return de_pricing_tiers_getstarted1(inputs);
	if (locale === "it") return it_pricing_tiers_getstarted1(inputs);
	if (locale === "pt") return pt_pricing_tiers_getstarted1(inputs);
	if (locale === "zh") return zh_pricing_tiers_getstarted1(inputs);
	if (locale === "ja") return ja_pricing_tiers_getstarted1(inputs);
	if (locale === "ko") return ko_pricing_tiers_getstarted1(inputs);
	return ru_pricing_tiers_getstarted1(inputs);
});
function PricingTiers() {
	return jsx("div", {
		className: "grid gap-6 md:grid-cols-3",
		children: [
			{
				name: pricing_tiers_starter(),
				price: pricing_tiers_price0(),
				period: pricing_tiers_forever(),
				features: [
					pricing_tiers_benchmarkrunperday3({ runs: "5" }),
					pricing_tiers_librariesnumber1({ libs: "3" }),
					pricing_tiers_communitysupport1(),
					pricing_tiers_publicresults1()
				]
			},
			{
				name: pricing_tiers_pro(),
				price: pricing_tiers_price29(),
				period: pricing_tiers_month(),
				features: [
					pricing_tiers_unlimitedruns1(),
					pricing_tiers_alllibraries1(),
					pricing_tiers_prioritysupport1(),
					pricing_tiers_privateresults1(),
					pricing_tiers_ciintegration1(),
					pricing_tiers_historicaldata1()
				],
				highlighted: true
			},
			{
				name: pricing_tiers_enterprise(),
				price: pricing_tiers_customprice1(),
				period: "",
				features: [
					pricing_tiers_everythinginpro2(),
					pricing_tiers_onpremiseoption2(),
					pricing_tiers_ssosaml1(),
					pricing_tiers_dedicatedaccountmanager2(),
					pricing_tiers_customslas1(),
					pricing_tiers_auditlogs1(),
					pricing_tiers_trainingsessions1()
				]
			}
		].map((t) => jsxs("div", {
			className: `flex flex-col rounded-lg border p-6 ${t.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`,
			children: [
				jsx("h3", {
					className: "text-lg font-semibold text-foreground",
					children: t.name
				}),
				jsxs("div", {
					className: "my-4",
					children: [jsx("span", {
						className: "text-3xl font-bold text-foreground",
						children: t.price
					}), jsx("span", {
						className: "text-sm text-muted-foreground",
						children: t.period
					})]
				}),
				jsx("ul", {
					className: "mb-6 flex-1 space-y-2",
					children: t.features.map((f) => jsxs("li", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [
							jsx("span", {
								className: "text-primary",
								children: "✓"
							}),
							" ",
							f
						]
					}, f))
				}),
				jsx("button", {
					type: "button",
					className: `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${t.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`,
					children: t.name === pricing_tiers_enterprise() ? pricing_tiers_contactsales1() : pricing_tiers_getstarted1()
				})
			]
		}, t.name))
	});
}
setLocale("en", { reload: false });
function Wrapper({ children }) {
	return jsx(Fragment, { children });
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(PricingTiers, {}) });
}
export { Wrapped as default };
