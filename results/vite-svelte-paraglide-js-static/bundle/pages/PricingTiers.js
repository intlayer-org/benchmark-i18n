import "svelte/internal/disclose-version";
import * as $ from "svelte/internal/client";
import { derived, writable } from "svelte/store";
var URLPattern = {};
var locales$1 = [
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
	for (const locale of locales$1) if (locale.toLowerCase() === lowerValue) return locale;
}
function assertIsLocale(input) {
	const locale = toLocale(input);
	if (locale) return locale;
	throw new Error(`Invalid locale: ${input}. Expected one of: ${locales$1.join(", ")}`);
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
var en_pricing_tiers_startername1 = () => {
	return `Starter`;
};
var fr_pricing_tiers_startername1 = () => {
	return `Starter`;
};
var es_pricing_tiers_startername1 = () => {
	return `Starter`;
};
var de_pricing_tiers_startername1 = () => {
	return `Starter`;
};
var it_pricing_tiers_startername1 = () => {
	return `Starter`;
};
var pt_pricing_tiers_startername1 = () => {
	return `Starter`;
};
var zh_pricing_tiers_startername1 = () => {
	return `入门版`;
};
var ja_pricing_tiers_startername1 = () => {
	return `スターター`;
};
var ko_pricing_tiers_startername1 = () => {
	return `Starter`;
};
var ru_pricing_tiers_startername1 = () => {
	return `Starter`;
};
var pricing_tiers_startername1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_startername1(inputs);
	if (locale === "fr") return fr_pricing_tiers_startername1(inputs);
	if (locale === "es") return es_pricing_tiers_startername1(inputs);
	if (locale === "de") return de_pricing_tiers_startername1(inputs);
	if (locale === "it") return it_pricing_tiers_startername1(inputs);
	if (locale === "pt") return pt_pricing_tiers_startername1(inputs);
	if (locale === "zh") return zh_pricing_tiers_startername1(inputs);
	if (locale === "ja") return ja_pricing_tiers_startername1(inputs);
	if (locale === "ko") return ko_pricing_tiers_startername1(inputs);
	return ru_pricing_tiers_startername1(inputs);
});
var en_pricing_tiers_starterprice1 = () => {
	return `$0`;
};
var fr_pricing_tiers_starterprice1 = () => {
	return `0 €`;
};
var es_pricing_tiers_starterprice1 = () => {
	return `0 $`;
};
var de_pricing_tiers_starterprice1 = () => {
	return `0 $`;
};
var it_pricing_tiers_starterprice1 = () => {
	return `0 $`;
};
var pt_pricing_tiers_starterprice1 = () => {
	return `0 $`;
};
var zh_pricing_tiers_starterprice1 = () => {
	return `0 $`;
};
var ja_pricing_tiers_starterprice1 = () => {
	return `0円`;
};
var ko_pricing_tiers_starterprice1 = () => {
	return `$0`;
};
var ru_pricing_tiers_starterprice1 = () => {
	return `0 $`;
};
var pricing_tiers_starterprice1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_starterprice1(inputs);
	if (locale === "fr") return fr_pricing_tiers_starterprice1(inputs);
	if (locale === "es") return es_pricing_tiers_starterprice1(inputs);
	if (locale === "de") return de_pricing_tiers_starterprice1(inputs);
	if (locale === "it") return it_pricing_tiers_starterprice1(inputs);
	if (locale === "pt") return pt_pricing_tiers_starterprice1(inputs);
	if (locale === "zh") return zh_pricing_tiers_starterprice1(inputs);
	if (locale === "ja") return ja_pricing_tiers_starterprice1(inputs);
	if (locale === "ko") return ko_pricing_tiers_starterprice1(inputs);
	return ru_pricing_tiers_starterprice1(inputs);
});
var en_pricing_tiers_starterperiod1 = () => {
	return `forever`;
};
var fr_pricing_tiers_starterperiod1 = () => {
	return `pour toujours`;
};
var es_pricing_tiers_starterperiod1 = () => {
	return `para siempre`;
};
var de_pricing_tiers_starterperiod1 = () => {
	return `für immer`;
};
var it_pricing_tiers_starterperiod1 = () => {
	return `per sempre`;
};
var pt_pricing_tiers_starterperiod1 = () => {
	return `para sempre`;
};
var zh_pricing_tiers_starterperiod1 = () => {
	return `永久`;
};
var ja_pricing_tiers_starterperiod1 = () => {
	return `ずっと無料`;
};
var ko_pricing_tiers_starterperiod1 = () => {
	return `forever`;
};
var ru_pricing_tiers_starterperiod1 = () => {
	return `навсегда`;
};
var pricing_tiers_starterperiod1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_starterperiod1(inputs);
	if (locale === "fr") return fr_pricing_tiers_starterperiod1(inputs);
	if (locale === "es") return es_pricing_tiers_starterperiod1(inputs);
	if (locale === "de") return de_pricing_tiers_starterperiod1(inputs);
	if (locale === "it") return it_pricing_tiers_starterperiod1(inputs);
	if (locale === "pt") return pt_pricing_tiers_starterperiod1(inputs);
	if (locale === "zh") return zh_pricing_tiers_starterperiod1(inputs);
	if (locale === "ja") return ja_pricing_tiers_starterperiod1(inputs);
	if (locale === "ko") return ko_pricing_tiers_starterperiod1(inputs);
	return ru_pricing_tiers_starterperiod1(inputs);
});
var en_pricing_tiers_starterfeature11 = () => {
	return `5 benchmark runs/day`;
};
var fr_pricing_tiers_starterfeature11 = () => {
	return `5 exécutions de benchmark / jour`;
};
var es_pricing_tiers_starterfeature11 = () => {
	return `5 ejecuciones de benchmark al día`;
};
var de_pricing_tiers_starterfeature11 = () => {
	return `5 Benchmark-Durchläufe/Tag`;
};
var it_pricing_tiers_starterfeature11 = () => {
	return `5 esecuzioni benchmark al giorno`;
};
var pt_pricing_tiers_starterfeature11 = () => {
	return `5 execuções de benchmark/dia`;
};
var zh_pricing_tiers_starterfeature11 = () => {
	return `每天 5 次基准测试运行`;
};
var ja_pricing_tiers_starterfeature11 = () => {
	return `1日あたり5回のベンチマーク実行`;
};
var ko_pricing_tiers_starterfeature11 = () => {
	return `5 benchmark runs/day`;
};
var ru_pricing_tiers_starterfeature11 = () => {
	return `5 запусков бенчмарка в день`;
};
var pricing_tiers_starterfeature11 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_starterfeature11(inputs);
	if (locale === "fr") return fr_pricing_tiers_starterfeature11(inputs);
	if (locale === "es") return es_pricing_tiers_starterfeature11(inputs);
	if (locale === "de") return de_pricing_tiers_starterfeature11(inputs);
	if (locale === "it") return it_pricing_tiers_starterfeature11(inputs);
	if (locale === "pt") return pt_pricing_tiers_starterfeature11(inputs);
	if (locale === "zh") return zh_pricing_tiers_starterfeature11(inputs);
	if (locale === "ja") return ja_pricing_tiers_starterfeature11(inputs);
	if (locale === "ko") return ko_pricing_tiers_starterfeature11(inputs);
	return ru_pricing_tiers_starterfeature11(inputs);
});
var en_pricing_tiers_starterfeature21 = () => {
	return `3 libraries`;
};
var fr_pricing_tiers_starterfeature21 = () => {
	return `3 bibliothèques`;
};
var es_pricing_tiers_starterfeature21 = () => {
	return `3 bibliotecas`;
};
var de_pricing_tiers_starterfeature21 = () => {
	return `3 Bibliotheken`;
};
var it_pricing_tiers_starterfeature21 = () => {
	return `3 librerie`;
};
var pt_pricing_tiers_starterfeature21 = () => {
	return `3 bibliotecas`;
};
var zh_pricing_tiers_starterfeature21 = () => {
	return `3 个库`;
};
var ja_pricing_tiers_starterfeature21 = () => {
	return `3ライブラリ`;
};
var ko_pricing_tiers_starterfeature21 = () => {
	return `3 libraries`;
};
var ru_pricing_tiers_starterfeature21 = () => {
	return `3 библиотеки`;
};
var pricing_tiers_starterfeature21 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_starterfeature21(inputs);
	if (locale === "fr") return fr_pricing_tiers_starterfeature21(inputs);
	if (locale === "es") return es_pricing_tiers_starterfeature21(inputs);
	if (locale === "de") return de_pricing_tiers_starterfeature21(inputs);
	if (locale === "it") return it_pricing_tiers_starterfeature21(inputs);
	if (locale === "pt") return pt_pricing_tiers_starterfeature21(inputs);
	if (locale === "zh") return zh_pricing_tiers_starterfeature21(inputs);
	if (locale === "ja") return ja_pricing_tiers_starterfeature21(inputs);
	if (locale === "ko") return ko_pricing_tiers_starterfeature21(inputs);
	return ru_pricing_tiers_starterfeature21(inputs);
});
var en_pricing_tiers_starterfeature31 = () => {
	return `Community support`;
};
var fr_pricing_tiers_starterfeature31 = () => {
	return `Support communautaire`;
};
var es_pricing_tiers_starterfeature31 = () => {
	return `Soporte de la comunidad`;
};
var de_pricing_tiers_starterfeature31 = () => {
	return `Community-Support`;
};
var it_pricing_tiers_starterfeature31 = () => {
	return `Supporto della comunità`;
};
var pt_pricing_tiers_starterfeature31 = () => {
	return `Suporte da comunidade`;
};
var zh_pricing_tiers_starterfeature31 = () => {
	return `社区支持`;
};
var ja_pricing_tiers_starterfeature31 = () => {
	return `コミュニティサポート`;
};
var ko_pricing_tiers_starterfeature31 = () => {
	return `Community support`;
};
var ru_pricing_tiers_starterfeature31 = () => {
	return `Поддержка сообщества`;
};
var pricing_tiers_starterfeature31 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_starterfeature31(inputs);
	if (locale === "fr") return fr_pricing_tiers_starterfeature31(inputs);
	if (locale === "es") return es_pricing_tiers_starterfeature31(inputs);
	if (locale === "de") return de_pricing_tiers_starterfeature31(inputs);
	if (locale === "it") return it_pricing_tiers_starterfeature31(inputs);
	if (locale === "pt") return pt_pricing_tiers_starterfeature31(inputs);
	if (locale === "zh") return zh_pricing_tiers_starterfeature31(inputs);
	if (locale === "ja") return ja_pricing_tiers_starterfeature31(inputs);
	if (locale === "ko") return ko_pricing_tiers_starterfeature31(inputs);
	return ru_pricing_tiers_starterfeature31(inputs);
});
var en_pricing_tiers_starterfeature41 = () => {
	return `Public results`;
};
var fr_pricing_tiers_starterfeature41 = () => {
	return `Résultats publics`;
};
var es_pricing_tiers_starterfeature41 = () => {
	return `Resultados públicos`;
};
var de_pricing_tiers_starterfeature41 = () => {
	return `Öffentliche Ergebnisse`;
};
var it_pricing_tiers_starterfeature41 = () => {
	return `Risultati pubblici`;
};
var pt_pricing_tiers_starterfeature41 = () => {
	return `Resultados públicos`;
};
var zh_pricing_tiers_starterfeature41 = () => {
	return `公开结果`;
};
var ja_pricing_tiers_starterfeature41 = () => {
	return `公開結果`;
};
var ko_pricing_tiers_starterfeature41 = () => {
	return `Public results`;
};
var ru_pricing_tiers_starterfeature41 = () => {
	return `Публичные результаты`;
};
var pricing_tiers_starterfeature41 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_starterfeature41(inputs);
	if (locale === "fr") return fr_pricing_tiers_starterfeature41(inputs);
	if (locale === "es") return es_pricing_tiers_starterfeature41(inputs);
	if (locale === "de") return de_pricing_tiers_starterfeature41(inputs);
	if (locale === "it") return it_pricing_tiers_starterfeature41(inputs);
	if (locale === "pt") return pt_pricing_tiers_starterfeature41(inputs);
	if (locale === "zh") return zh_pricing_tiers_starterfeature41(inputs);
	if (locale === "ja") return ja_pricing_tiers_starterfeature41(inputs);
	if (locale === "ko") return ko_pricing_tiers_starterfeature41(inputs);
	return ru_pricing_tiers_starterfeature41(inputs);
});
var en_pricing_tiers_proname1 = () => {
	return `Pro`;
};
var fr_pricing_tiers_proname1 = () => {
	return `Pro`;
};
var es_pricing_tiers_proname1 = () => {
	return `Pro`;
};
var de_pricing_tiers_proname1 = () => {
	return `Pro`;
};
var it_pricing_tiers_proname1 = () => {
	return `Pro`;
};
var pt_pricing_tiers_proname1 = () => {
	return `Pro`;
};
var zh_pricing_tiers_proname1 = () => {
	return `专业版`;
};
var ja_pricing_tiers_proname1 = () => {
	return `プロ`;
};
var ko_pricing_tiers_proname1 = () => {
	return `Pro`;
};
var ru_pricing_tiers_proname1 = () => {
	return `Pro`;
};
var pricing_tiers_proname1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_proname1(inputs);
	if (locale === "fr") return fr_pricing_tiers_proname1(inputs);
	if (locale === "es") return es_pricing_tiers_proname1(inputs);
	if (locale === "de") return de_pricing_tiers_proname1(inputs);
	if (locale === "it") return it_pricing_tiers_proname1(inputs);
	if (locale === "pt") return pt_pricing_tiers_proname1(inputs);
	if (locale === "zh") return zh_pricing_tiers_proname1(inputs);
	if (locale === "ja") return ja_pricing_tiers_proname1(inputs);
	if (locale === "ko") return ko_pricing_tiers_proname1(inputs);
	return ru_pricing_tiers_proname1(inputs);
});
var en_pricing_tiers_proprice1 = () => {
	return `$29`;
};
var fr_pricing_tiers_proprice1 = () => {
	return `29 €`;
};
var es_pricing_tiers_proprice1 = () => {
	return `29 $`;
};
var de_pricing_tiers_proprice1 = () => {
	return `29 $`;
};
var it_pricing_tiers_proprice1 = () => {
	return `29 $`;
};
var pt_pricing_tiers_proprice1 = () => {
	return `29 $`;
};
var zh_pricing_tiers_proprice1 = () => {
	return `29 $`;
};
var ja_pricing_tiers_proprice1 = () => {
	return `29ドル`;
};
var ko_pricing_tiers_proprice1 = () => {
	return `$29`;
};
var ru_pricing_tiers_proprice1 = () => {
	return `29 $`;
};
var pricing_tiers_proprice1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_proprice1(inputs);
	if (locale === "fr") return fr_pricing_tiers_proprice1(inputs);
	if (locale === "es") return es_pricing_tiers_proprice1(inputs);
	if (locale === "de") return de_pricing_tiers_proprice1(inputs);
	if (locale === "it") return it_pricing_tiers_proprice1(inputs);
	if (locale === "pt") return pt_pricing_tiers_proprice1(inputs);
	if (locale === "zh") return zh_pricing_tiers_proprice1(inputs);
	if (locale === "ja") return ja_pricing_tiers_proprice1(inputs);
	if (locale === "ko") return ko_pricing_tiers_proprice1(inputs);
	return ru_pricing_tiers_proprice1(inputs);
});
var en_pricing_tiers_properiod1 = () => {
	return `/month`;
};
var fr_pricing_tiers_properiod1 = () => {
	return `/ mois`;
};
var es_pricing_tiers_properiod1 = () => {
	return `/mes`;
};
var de_pricing_tiers_properiod1 = () => {
	return `/Monat`;
};
var it_pricing_tiers_properiod1 = () => {
	return `/mese`;
};
var pt_pricing_tiers_properiod1 = () => {
	return `/mês`;
};
var zh_pricing_tiers_properiod1 = () => {
	return `/月`;
};
var ja_pricing_tiers_properiod1 = () => {
	return `/月`;
};
var ko_pricing_tiers_properiod1 = () => {
	return `/month`;
};
var ru_pricing_tiers_properiod1 = () => {
	return `/мес`;
};
var pricing_tiers_properiod1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_properiod1(inputs);
	if (locale === "fr") return fr_pricing_tiers_properiod1(inputs);
	if (locale === "es") return es_pricing_tiers_properiod1(inputs);
	if (locale === "de") return de_pricing_tiers_properiod1(inputs);
	if (locale === "it") return it_pricing_tiers_properiod1(inputs);
	if (locale === "pt") return pt_pricing_tiers_properiod1(inputs);
	if (locale === "zh") return zh_pricing_tiers_properiod1(inputs);
	if (locale === "ja") return ja_pricing_tiers_properiod1(inputs);
	if (locale === "ko") return ko_pricing_tiers_properiod1(inputs);
	return ru_pricing_tiers_properiod1(inputs);
});
var en_pricing_tiers_profeature11 = () => {
	return `Unlimited runs`;
};
var fr_pricing_tiers_profeature11 = () => {
	return `Exécutions illimitées`;
};
var es_pricing_tiers_profeature11 = () => {
	return `Ejecuciones ilimitadas`;
};
var de_pricing_tiers_profeature11 = () => {
	return `Unbegrenzte Durchläufe`;
};
var it_pricing_tiers_profeature11 = () => {
	return `Esecuzioni illimitate`;
};
var pt_pricing_tiers_profeature11 = () => {
	return `Execuções ilimitadas`;
};
var zh_pricing_tiers_profeature11 = () => {
	return `无限次运行`;
};
var ja_pricing_tiers_profeature11 = () => {
	return `無制限の実行`;
};
var ko_pricing_tiers_profeature11 = () => {
	return `Unlimited runs`;
};
var ru_pricing_tiers_profeature11 = () => {
	return `Неограниченное число запусков`;
};
var pricing_tiers_profeature11 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_profeature11(inputs);
	if (locale === "fr") return fr_pricing_tiers_profeature11(inputs);
	if (locale === "es") return es_pricing_tiers_profeature11(inputs);
	if (locale === "de") return de_pricing_tiers_profeature11(inputs);
	if (locale === "it") return it_pricing_tiers_profeature11(inputs);
	if (locale === "pt") return pt_pricing_tiers_profeature11(inputs);
	if (locale === "zh") return zh_pricing_tiers_profeature11(inputs);
	if (locale === "ja") return ja_pricing_tiers_profeature11(inputs);
	if (locale === "ko") return ko_pricing_tiers_profeature11(inputs);
	return ru_pricing_tiers_profeature11(inputs);
});
var en_pricing_tiers_profeature21 = () => {
	return `All libraries`;
};
var fr_pricing_tiers_profeature21 = () => {
	return `Toutes les bibliothèques`;
};
var es_pricing_tiers_profeature21 = () => {
	return `Todas las bibliotecas`;
};
var de_pricing_tiers_profeature21 = () => {
	return `Alle Bibliotheken`;
};
var it_pricing_tiers_profeature21 = () => {
	return `Tutte le librerie`;
};
var pt_pricing_tiers_profeature21 = () => {
	return `Todas as bibliotecas`;
};
var zh_pricing_tiers_profeature21 = () => {
	return `所有库`;
};
var ja_pricing_tiers_profeature21 = () => {
	return `すべてのライブラリ`;
};
var ko_pricing_tiers_profeature21 = () => {
	return `All libraries`;
};
var ru_pricing_tiers_profeature21 = () => {
	return `Все библиотеки`;
};
var pricing_tiers_profeature21 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_profeature21(inputs);
	if (locale === "fr") return fr_pricing_tiers_profeature21(inputs);
	if (locale === "es") return es_pricing_tiers_profeature21(inputs);
	if (locale === "de") return de_pricing_tiers_profeature21(inputs);
	if (locale === "it") return it_pricing_tiers_profeature21(inputs);
	if (locale === "pt") return pt_pricing_tiers_profeature21(inputs);
	if (locale === "zh") return zh_pricing_tiers_profeature21(inputs);
	if (locale === "ja") return ja_pricing_tiers_profeature21(inputs);
	if (locale === "ko") return ko_pricing_tiers_profeature21(inputs);
	return ru_pricing_tiers_profeature21(inputs);
});
var en_pricing_tiers_profeature31 = () => {
	return `Priority support`;
};
var fr_pricing_tiers_profeature31 = () => {
	return `Support prioritaire`;
};
var es_pricing_tiers_profeature31 = () => {
	return `Soporte prioritario`;
};
var de_pricing_tiers_profeature31 = () => {
	return `Priorisierter Support`;
};
var it_pricing_tiers_profeature31 = () => {
	return `Supporto prioritario`;
};
var pt_pricing_tiers_profeature31 = () => {
	return `Suporte prioritário`;
};
var zh_pricing_tiers_profeature31 = () => {
	return `优先支持`;
};
var ja_pricing_tiers_profeature31 = () => {
	return `優先サポート`;
};
var ko_pricing_tiers_profeature31 = () => {
	return `Priority support`;
};
var ru_pricing_tiers_profeature31 = () => {
	return `Приоритетная поддержка`;
};
var pricing_tiers_profeature31 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_profeature31(inputs);
	if (locale === "fr") return fr_pricing_tiers_profeature31(inputs);
	if (locale === "es") return es_pricing_tiers_profeature31(inputs);
	if (locale === "de") return de_pricing_tiers_profeature31(inputs);
	if (locale === "it") return it_pricing_tiers_profeature31(inputs);
	if (locale === "pt") return pt_pricing_tiers_profeature31(inputs);
	if (locale === "zh") return zh_pricing_tiers_profeature31(inputs);
	if (locale === "ja") return ja_pricing_tiers_profeature31(inputs);
	if (locale === "ko") return ko_pricing_tiers_profeature31(inputs);
	return ru_pricing_tiers_profeature31(inputs);
});
var en_pricing_tiers_profeature41 = () => {
	return `Private results`;
};
var fr_pricing_tiers_profeature41 = () => {
	return `Résultats privés`;
};
var es_pricing_tiers_profeature41 = () => {
	return `Resultados privados`;
};
var de_pricing_tiers_profeature41 = () => {
	return `Private Ergebnisse`;
};
var it_pricing_tiers_profeature41 = () => {
	return `Risultati privati`;
};
var pt_pricing_tiers_profeature41 = () => {
	return `Resultados privados`;
};
var zh_pricing_tiers_profeature41 = () => {
	return `私有结果`;
};
var ja_pricing_tiers_profeature41 = () => {
	return `非公開の結果`;
};
var ko_pricing_tiers_profeature41 = () => {
	return `Private results`;
};
var ru_pricing_tiers_profeature41 = () => {
	return `Приватные результаты`;
};
var pricing_tiers_profeature41 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_profeature41(inputs);
	if (locale === "fr") return fr_pricing_tiers_profeature41(inputs);
	if (locale === "es") return es_pricing_tiers_profeature41(inputs);
	if (locale === "de") return de_pricing_tiers_profeature41(inputs);
	if (locale === "it") return it_pricing_tiers_profeature41(inputs);
	if (locale === "pt") return pt_pricing_tiers_profeature41(inputs);
	if (locale === "zh") return zh_pricing_tiers_profeature41(inputs);
	if (locale === "ja") return ja_pricing_tiers_profeature41(inputs);
	if (locale === "ko") return ko_pricing_tiers_profeature41(inputs);
	return ru_pricing_tiers_profeature41(inputs);
});
var en_pricing_tiers_profeature51 = () => {
	return `CI integration`;
};
var fr_pricing_tiers_profeature51 = () => {
	return `Intégration CI`;
};
var es_pricing_tiers_profeature51 = () => {
	return `Integración CI`;
};
var de_pricing_tiers_profeature51 = () => {
	return `CI-Integration`;
};
var it_pricing_tiers_profeature51 = () => {
	return `Integrazione CI`;
};
var pt_pricing_tiers_profeature51 = () => {
	return `Integração CI`;
};
var zh_pricing_tiers_profeature51 = () => {
	return `CI 集成`;
};
var ja_pricing_tiers_profeature51 = () => {
	return `CI統合`;
};
var ko_pricing_tiers_profeature51 = () => {
	return `CI integration`;
};
var ru_pricing_tiers_profeature51 = () => {
	return `Интеграция с CI`;
};
var pricing_tiers_profeature51 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_profeature51(inputs);
	if (locale === "fr") return fr_pricing_tiers_profeature51(inputs);
	if (locale === "es") return es_pricing_tiers_profeature51(inputs);
	if (locale === "de") return de_pricing_tiers_profeature51(inputs);
	if (locale === "it") return it_pricing_tiers_profeature51(inputs);
	if (locale === "pt") return pt_pricing_tiers_profeature51(inputs);
	if (locale === "zh") return zh_pricing_tiers_profeature51(inputs);
	if (locale === "ja") return ja_pricing_tiers_profeature51(inputs);
	if (locale === "ko") return ko_pricing_tiers_profeature51(inputs);
	return ru_pricing_tiers_profeature51(inputs);
});
var en_pricing_tiers_profeature61 = () => {
	return `Historical data`;
};
var fr_pricing_tiers_profeature61 = () => {
	return `Historique`;
};
var es_pricing_tiers_profeature61 = () => {
	return `Datos históricos`;
};
var de_pricing_tiers_profeature61 = () => {
	return `Historische Daten`;
};
var it_pricing_tiers_profeature61 = () => {
	return `Dati storici`;
};
var pt_pricing_tiers_profeature61 = () => {
	return `Dados históricos`;
};
var zh_pricing_tiers_profeature61 = () => {
	return `历史数据`;
};
var ja_pricing_tiers_profeature61 = () => {
	return `履歴データ`;
};
var ko_pricing_tiers_profeature61 = () => {
	return `Historical data`;
};
var ru_pricing_tiers_profeature61 = () => {
	return `Исторические данные`;
};
var pricing_tiers_profeature61 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_profeature61(inputs);
	if (locale === "fr") return fr_pricing_tiers_profeature61(inputs);
	if (locale === "es") return es_pricing_tiers_profeature61(inputs);
	if (locale === "de") return de_pricing_tiers_profeature61(inputs);
	if (locale === "it") return it_pricing_tiers_profeature61(inputs);
	if (locale === "pt") return pt_pricing_tiers_profeature61(inputs);
	if (locale === "zh") return zh_pricing_tiers_profeature61(inputs);
	if (locale === "ja") return ja_pricing_tiers_profeature61(inputs);
	if (locale === "ko") return ko_pricing_tiers_profeature61(inputs);
	return ru_pricing_tiers_profeature61(inputs);
});
var en_pricing_tiers_enterprisename1 = () => {
	return `Enterprise`;
};
var fr_pricing_tiers_enterprisename1 = () => {
	return `Enterprise`;
};
var es_pricing_tiers_enterprisename1 = () => {
	return `Enterprise`;
};
var de_pricing_tiers_enterprisename1 = () => {
	return `Enterprise`;
};
var it_pricing_tiers_enterprisename1 = () => {
	return `Enterprise`;
};
var pt_pricing_tiers_enterprisename1 = () => {
	return `Enterprise`;
};
var zh_pricing_tiers_enterprisename1 = () => {
	return `企业版`;
};
var ja_pricing_tiers_enterprisename1 = () => {
	return `エンタープライズ`;
};
var ko_pricing_tiers_enterprisename1 = () => {
	return `Enterprise`;
};
var ru_pricing_tiers_enterprisename1 = () => {
	return `Enterprise`;
};
var pricing_tiers_enterprisename1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_enterprisename1(inputs);
	if (locale === "fr") return fr_pricing_tiers_enterprisename1(inputs);
	if (locale === "es") return es_pricing_tiers_enterprisename1(inputs);
	if (locale === "de") return de_pricing_tiers_enterprisename1(inputs);
	if (locale === "it") return it_pricing_tiers_enterprisename1(inputs);
	if (locale === "pt") return pt_pricing_tiers_enterprisename1(inputs);
	if (locale === "zh") return zh_pricing_tiers_enterprisename1(inputs);
	if (locale === "ja") return ja_pricing_tiers_enterprisename1(inputs);
	if (locale === "ko") return ko_pricing_tiers_enterprisename1(inputs);
	return ru_pricing_tiers_enterprisename1(inputs);
});
var en_pricing_tiers_enterpriseprice1 = () => {
	return `Custom`;
};
var fr_pricing_tiers_enterpriseprice1 = () => {
	return `Sur mesure`;
};
var es_pricing_tiers_enterpriseprice1 = () => {
	return `Personalizado`;
};
var de_pricing_tiers_enterpriseprice1 = () => {
	return `Individuell`;
};
var it_pricing_tiers_enterpriseprice1 = () => {
	return `Personalizzato`;
};
var pt_pricing_tiers_enterpriseprice1 = () => {
	return `Personalizado`;
};
var zh_pricing_tiers_enterpriseprice1 = () => {
	return `定制`;
};
var ja_pricing_tiers_enterpriseprice1 = () => {
	return `カスタム`;
};
var ko_pricing_tiers_enterpriseprice1 = () => {
	return `Custom`;
};
var ru_pricing_tiers_enterpriseprice1 = () => {
	return `Индивидуально`;
};
var pricing_tiers_enterpriseprice1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_enterpriseprice1(inputs);
	if (locale === "fr") return fr_pricing_tiers_enterpriseprice1(inputs);
	if (locale === "es") return es_pricing_tiers_enterpriseprice1(inputs);
	if (locale === "de") return de_pricing_tiers_enterpriseprice1(inputs);
	if (locale === "it") return it_pricing_tiers_enterpriseprice1(inputs);
	if (locale === "pt") return pt_pricing_tiers_enterpriseprice1(inputs);
	if (locale === "zh") return zh_pricing_tiers_enterpriseprice1(inputs);
	if (locale === "ja") return ja_pricing_tiers_enterpriseprice1(inputs);
	if (locale === "ko") return ko_pricing_tiers_enterpriseprice1(inputs);
	return ru_pricing_tiers_enterpriseprice1(inputs);
});
var en_pricing_tiers_enterprisefeature11 = () => {
	return `Everything in Pro`;
};
var fr_pricing_tiers_enterprisefeature11 = () => {
	return `Tout le Pro`;
};
var es_pricing_tiers_enterprisefeature11 = () => {
	return `Todo lo que hay en Pro`;
};
var de_pricing_tiers_enterprisefeature11 = () => {
	return `Alles in Pro enthalten`;
};
var it_pricing_tiers_enterprisefeature11 = () => {
	return `Tutto quello che c'è in Pro`;
};
var pt_pricing_tiers_enterprisefeature11 = () => {
	return `Tudo o que está no Pro`;
};
var zh_pricing_tiers_enterprisefeature11 = () => {
	return `包含专业版中的所有功能`;
};
var ja_pricing_tiers_enterprisefeature11 = () => {
	return `Proプランのすべてを含む`;
};
var ko_pricing_tiers_enterprisefeature11 = () => {
	return `Everything in Pro`;
};
var ru_pricing_tiers_enterprisefeature11 = () => {
	return `Все, что есть в Pro`;
};
var pricing_tiers_enterprisefeature11 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_enterprisefeature11(inputs);
	if (locale === "fr") return fr_pricing_tiers_enterprisefeature11(inputs);
	if (locale === "es") return es_pricing_tiers_enterprisefeature11(inputs);
	if (locale === "de") return de_pricing_tiers_enterprisefeature11(inputs);
	if (locale === "it") return it_pricing_tiers_enterprisefeature11(inputs);
	if (locale === "pt") return pt_pricing_tiers_enterprisefeature11(inputs);
	if (locale === "zh") return zh_pricing_tiers_enterprisefeature11(inputs);
	if (locale === "ja") return ja_pricing_tiers_enterprisefeature11(inputs);
	if (locale === "ko") return ko_pricing_tiers_enterprisefeature11(inputs);
	return ru_pricing_tiers_enterprisefeature11(inputs);
});
var en_pricing_tiers_enterprisefeature21 = () => {
	return `On-premise option`;
};
var fr_pricing_tiers_enterprisefeature21 = () => {
	return `Option on-premise`;
};
var es_pricing_tiers_enterprisefeature21 = () => {
	return `Opción on-premise`;
};
var de_pricing_tiers_enterprisefeature21 = () => {
	return `On-Premise-Option`;
};
var it_pricing_tiers_enterprisefeature21 = () => {
	return `Opzione on-premise`;
};
var pt_pricing_tiers_enterprisefeature21 = () => {
	return `Opção on-premise`;
};
var zh_pricing_tiers_enterprisefeature21 = () => {
	return `本地部署选项`;
};
var ja_pricing_tiers_enterprisefeature21 = () => {
	return `オンプレミスオプション`;
};
var ko_pricing_tiers_enterprisefeature21 = () => {
	return `On-premise option`;
};
var ru_pricing_tiers_enterprisefeature21 = () => {
	return `Локальная установка`;
};
var pricing_tiers_enterprisefeature21 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_enterprisefeature21(inputs);
	if (locale === "fr") return fr_pricing_tiers_enterprisefeature21(inputs);
	if (locale === "es") return es_pricing_tiers_enterprisefeature21(inputs);
	if (locale === "de") return de_pricing_tiers_enterprisefeature21(inputs);
	if (locale === "it") return it_pricing_tiers_enterprisefeature21(inputs);
	if (locale === "pt") return pt_pricing_tiers_enterprisefeature21(inputs);
	if (locale === "zh") return zh_pricing_tiers_enterprisefeature21(inputs);
	if (locale === "ja") return ja_pricing_tiers_enterprisefeature21(inputs);
	if (locale === "ko") return ko_pricing_tiers_enterprisefeature21(inputs);
	return ru_pricing_tiers_enterprisefeature21(inputs);
});
var en_pricing_tiers_enterprisefeature31 = () => {
	return `SSO & SAML`;
};
var fr_pricing_tiers_enterprisefeature31 = () => {
	return `SSO et SAML`;
};
var es_pricing_tiers_enterprisefeature31 = () => {
	return `SSO y SAML`;
};
var de_pricing_tiers_enterprisefeature31 = () => {
	return `SSO & SAML`;
};
var it_pricing_tiers_enterprisefeature31 = () => {
	return `SSO e SAML`;
};
var pt_pricing_tiers_enterprisefeature31 = () => {
	return `SSO e SAML`;
};
var zh_pricing_tiers_enterprisefeature31 = () => {
	return `SSO 和 SAML`;
};
var ja_pricing_tiers_enterprisefeature31 = () => {
	return `SSO & SAML`;
};
var ko_pricing_tiers_enterprisefeature31 = () => {
	return `SSO & SAML`;
};
var ru_pricing_tiers_enterprisefeature31 = () => {
	return `SSO и SAML`;
};
var pricing_tiers_enterprisefeature31 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_enterprisefeature31(inputs);
	if (locale === "fr") return fr_pricing_tiers_enterprisefeature31(inputs);
	if (locale === "es") return es_pricing_tiers_enterprisefeature31(inputs);
	if (locale === "de") return de_pricing_tiers_enterprisefeature31(inputs);
	if (locale === "it") return it_pricing_tiers_enterprisefeature31(inputs);
	if (locale === "pt") return pt_pricing_tiers_enterprisefeature31(inputs);
	if (locale === "zh") return zh_pricing_tiers_enterprisefeature31(inputs);
	if (locale === "ja") return ja_pricing_tiers_enterprisefeature31(inputs);
	if (locale === "ko") return ko_pricing_tiers_enterprisefeature31(inputs);
	return ru_pricing_tiers_enterprisefeature31(inputs);
});
var en_pricing_tiers_enterprisefeature41 = () => {
	return `Dedicated account manager`;
};
var fr_pricing_tiers_enterprisefeature41 = () => {
	return `Account manager dédié`;
};
var es_pricing_tiers_enterprisefeature41 = () => {
	return `Gestor de cuentas dedicado`;
};
var de_pricing_tiers_enterprisefeature41 = () => {
	return `Dedizierter Account Manager`;
};
var it_pricing_tiers_enterprisefeature41 = () => {
	return `Account manager dedicato`;
};
var pt_pricing_tiers_enterprisefeature41 = () => {
	return `Gerente de conta dedicado`;
};
var zh_pricing_tiers_enterprisefeature41 = () => {
	return `专属客户经理`;
};
var ja_pricing_tiers_enterprisefeature41 = () => {
	return `専任のアカウントマネージャー`;
};
var ko_pricing_tiers_enterprisefeature41 = () => {
	return `Dedicated account manager`;
};
var ru_pricing_tiers_enterprisefeature41 = () => {
	return `Персональный менеджер`;
};
var pricing_tiers_enterprisefeature41 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_enterprisefeature41(inputs);
	if (locale === "fr") return fr_pricing_tiers_enterprisefeature41(inputs);
	if (locale === "es") return es_pricing_tiers_enterprisefeature41(inputs);
	if (locale === "de") return de_pricing_tiers_enterprisefeature41(inputs);
	if (locale === "it") return it_pricing_tiers_enterprisefeature41(inputs);
	if (locale === "pt") return pt_pricing_tiers_enterprisefeature41(inputs);
	if (locale === "zh") return zh_pricing_tiers_enterprisefeature41(inputs);
	if (locale === "ja") return ja_pricing_tiers_enterprisefeature41(inputs);
	if (locale === "ko") return ko_pricing_tiers_enterprisefeature41(inputs);
	return ru_pricing_tiers_enterprisefeature41(inputs);
});
var en_pricing_tiers_enterprisefeature51 = () => {
	return `Custom SLAs`;
};
var fr_pricing_tiers_enterprisefeature51 = () => {
	return `SLA sur mesure`;
};
var es_pricing_tiers_enterprisefeature51 = () => {
	return `SLAs personalizados`;
};
var de_pricing_tiers_enterprisefeature51 = () => {
	return `Individuelle SLAs`;
};
var it_pricing_tiers_enterprisefeature51 = () => {
	return `SLA personalizzati`;
};
var pt_pricing_tiers_enterprisefeature51 = () => {
	return `SLAs personalizados`;
};
var zh_pricing_tiers_enterprisefeature51 = () => {
	return `定制 SLA`;
};
var ja_pricing_tiers_enterprisefeature51 = () => {
	return `カスタムSLA`;
};
var ko_pricing_tiers_enterprisefeature51 = () => {
	return `Custom SLAs`;
};
var ru_pricing_tiers_enterprisefeature51 = () => {
	return `Индивидуальные SLA`;
};
var pricing_tiers_enterprisefeature51 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_enterprisefeature51(inputs);
	if (locale === "fr") return fr_pricing_tiers_enterprisefeature51(inputs);
	if (locale === "es") return es_pricing_tiers_enterprisefeature51(inputs);
	if (locale === "de") return de_pricing_tiers_enterprisefeature51(inputs);
	if (locale === "it") return it_pricing_tiers_enterprisefeature51(inputs);
	if (locale === "pt") return pt_pricing_tiers_enterprisefeature51(inputs);
	if (locale === "zh") return zh_pricing_tiers_enterprisefeature51(inputs);
	if (locale === "ja") return ja_pricing_tiers_enterprisefeature51(inputs);
	if (locale === "ko") return ko_pricing_tiers_enterprisefeature51(inputs);
	return ru_pricing_tiers_enterprisefeature51(inputs);
});
var en_pricing_tiers_enterprisefeature61 = () => {
	return `Audit logs`;
};
var fr_pricing_tiers_enterprisefeature61 = () => {
	return `Journaux d'audit`;
};
var es_pricing_tiers_enterprisefeature61 = () => {
	return `Registros de auditoría`;
};
var de_pricing_tiers_enterprisefeature61 = () => {
	return `Audit-Protokolle`;
};
var it_pricing_tiers_enterprisefeature61 = () => {
	return `Log di controllo`;
};
var pt_pricing_tiers_enterprisefeature61 = () => {
	return `Logs de auditoria`;
};
var zh_pricing_tiers_enterprisefeature61 = () => {
	return `审计日志`;
};
var ja_pricing_tiers_enterprisefeature61 = () => {
	return `監査ログ`;
};
var ko_pricing_tiers_enterprisefeature61 = () => {
	return `Audit logs`;
};
var ru_pricing_tiers_enterprisefeature61 = () => {
	return `Журналы аудита`;
};
var pricing_tiers_enterprisefeature61 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_enterprisefeature61(inputs);
	if (locale === "fr") return fr_pricing_tiers_enterprisefeature61(inputs);
	if (locale === "es") return es_pricing_tiers_enterprisefeature61(inputs);
	if (locale === "de") return de_pricing_tiers_enterprisefeature61(inputs);
	if (locale === "it") return it_pricing_tiers_enterprisefeature61(inputs);
	if (locale === "pt") return pt_pricing_tiers_enterprisefeature61(inputs);
	if (locale === "zh") return zh_pricing_tiers_enterprisefeature61(inputs);
	if (locale === "ja") return ja_pricing_tiers_enterprisefeature61(inputs);
	if (locale === "ko") return ko_pricing_tiers_enterprisefeature61(inputs);
	return ru_pricing_tiers_enterprisefeature61(inputs);
});
var en_pricing_tiers_enterprisefeature71 = () => {
	return `Training sessions`;
};
var fr_pricing_tiers_enterprisefeature71 = () => {
	return `Sessions de formation`;
};
var es_pricing_tiers_enterprisefeature71 = () => {
	return `Sesiones de formación`;
};
var de_pricing_tiers_enterprisefeature71 = () => {
	return `Schulungssitzungen`;
};
var it_pricing_tiers_enterprisefeature71 = () => {
	return `Sessioni di formazione`;
};
var pt_pricing_tiers_enterprisefeature71 = () => {
	return `Sessões de treinamento`;
};
var zh_pricing_tiers_enterprisefeature71 = () => {
	return `培训课程`;
};
var ja_pricing_tiers_enterprisefeature71 = () => {
	return `トレーニングセッション`;
};
var ko_pricing_tiers_enterprisefeature71 = () => {
	return `Training sessions`;
};
var ru_pricing_tiers_enterprisefeature71 = () => {
	return `Обучающие сессии`;
};
var pricing_tiers_enterprisefeature71 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_tiers_enterprisefeature71(inputs);
	if (locale === "fr") return fr_pricing_tiers_enterprisefeature71(inputs);
	if (locale === "es") return es_pricing_tiers_enterprisefeature71(inputs);
	if (locale === "de") return de_pricing_tiers_enterprisefeature71(inputs);
	if (locale === "it") return it_pricing_tiers_enterprisefeature71(inputs);
	if (locale === "pt") return pt_pricing_tiers_enterprisefeature71(inputs);
	if (locale === "zh") return zh_pricing_tiers_enterprisefeature71(inputs);
	if (locale === "ja") return ja_pricing_tiers_enterprisefeature71(inputs);
	if (locale === "ko") return ko_pricing_tiers_enterprisefeature71(inputs);
	return ru_pricing_tiers_enterprisefeature71(inputs);
});
var en_pricing_tiers_contactsales1 = () => {
	return `Contact Sales`;
};
var fr_pricing_tiers_contactsales1 = () => {
	return `Contacter les ventes`;
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
	return `Contatar vendas`;
};
var zh_pricing_tiers_contactsales1 = () => {
	return `联系销售`;
};
var ja_pricing_tiers_contactsales1 = () => {
	return `営業に問い合わせる`;
};
var ko_pricing_tiers_contactsales1 = () => {
	return `Contact Sales`;
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
	return `Commencer`;
};
var es_pricing_tiers_getstarted1 = () => {
	return `Empezar`;
};
var de_pricing_tiers_getstarted1 = () => {
	return `Erste Schritte`;
};
var it_pricing_tiers_getstarted1 = () => {
	return `Inizia ora`;
};
var pt_pricing_tiers_getstarted1 = () => {
	return `Começar`;
};
var zh_pricing_tiers_getstarted1 = () => {
	return `开始使用`;
};
var ja_pricing_tiers_getstarted1 = () => {
	return `始める`;
};
var ko_pricing_tiers_getstarted1 = () => {
	return `Get Started`;
};
var ru_pricing_tiers_getstarted1 = () => {
	return `Начать работу`;
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
function isLocale(value) {
	return locales.includes(value);
}
var PAGE_SEGMENTS = new Set([
	"",
	"about",
	"blog",
	"careers",
	"contact",
	"faq",
	"pricing",
	"products",
	"settings",
	"team"
]);
function parsePath(pathname) {
	const parts = pathname.split("/").filter(Boolean);
	if (parts.length === 0) return { kind: "notfound" };
	const [locale, ...rest] = parts;
	if (!isLocale(locale)) return { kind: "notfound" };
	const seg = rest[0] ?? "";
	if (rest.length > 1) return { kind: "notfound" };
	if (!PAGE_SEGMENTS.has(seg)) return { kind: "notfound" };
	return {
		kind: "ok",
		locale,
		page: seg
	};
}
var route = derived(writable(typeof window !== "undefined" ? window.location.pathname : "/en"), (p) => parsePath(p));
var root_2 = $.from_html(`<li class="flex items-center gap-2 text-sm text-muted-foreground"><span class="text-primary">✓</span> </li>`);
var root_1 = $.from_html(`<div><h3 class="text-lg font-semibold text-foreground"> </h3> <div class="my-4"><span class="text-3xl font-bold text-foreground"> </span> <span class="text-sm text-muted-foreground"> </span></div> <ul class="mb-6 flex-1 space-y-2"></ul> <button type="button"> </button></div>`);
var root = $.from_html(`<div class="grid gap-6 md:grid-cols-3"></div>`);
function PricingTiers($$anchor, $$props) {
	$.push($$props, true);
	const $route = () => $.store_get(route, "$route", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	const currentLocale = $.derived(() => $route().kind === "ok" ? $route().locale : "en");
	const tiers = $.derived(() => {
		$.get(currentLocale);
		return [
			{
				name: pricing_tiers_startername1(),
				price: pricing_tiers_starterprice1(),
				period: pricing_tiers_starterperiod1(),
				features: [
					pricing_tiers_starterfeature11(),
					pricing_tiers_starterfeature21(),
					pricing_tiers_starterfeature31(),
					pricing_tiers_starterfeature41()
				]
			},
			{
				name: pricing_tiers_proname1(),
				price: pricing_tiers_proprice1(),
				period: pricing_tiers_properiod1(),
				features: [
					pricing_tiers_profeature11(),
					pricing_tiers_profeature21(),
					pricing_tiers_profeature31(),
					pricing_tiers_profeature41(),
					pricing_tiers_profeature51(),
					pricing_tiers_profeature61()
				],
				highlighted: true
			},
			{
				name: pricing_tiers_enterprisename1(),
				price: pricing_tiers_enterpriseprice1(),
				period: "",
				features: [
					pricing_tiers_enterprisefeature11(),
					pricing_tiers_enterprisefeature21(),
					pricing_tiers_enterprisefeature31(),
					pricing_tiers_enterprisefeature41(),
					pricing_tiers_enterprisefeature51(),
					pricing_tiers_enterprisefeature61(),
					pricing_tiers_enterprisefeature71()
				]
			}
		];
	});
	function tierButtonLabel(tierName) {
		return tierName === pricing_tiers_enterprisename1() ? pricing_tiers_contactsales1() : pricing_tiers_getstarted1();
	}
	var div = root();
	$.each(div, 21, () => $.get(tiers), $.index, ($$anchor, t) => {
		var div_1 = root_1();
		var h3 = $.child(div_1);
		var text = $.child(h3, true);
		$.reset(h3);
		var div_2 = $.sibling(h3, 2);
		var span = $.child(div_2);
		var text_1 = $.child(span, true);
		$.reset(span);
		var span_1 = $.sibling(span, 2);
		var text_2 = $.child(span_1, true);
		$.reset(span_1);
		$.reset(div_2);
		var ul = $.sibling(div_2, 2);
		$.each(ul, 20, () => $.get(t).features, (f) => f, ($$anchor, f) => {
			var li = root_2();
			var text_3 = $.sibling($.child(li));
			$.reset(li);
			$.template_effect(() => $.set_text(text_3, ` ${f ?? ""}`));
			$.append($$anchor, li);
		});
		$.reset(ul);
		var button = $.sibling(ul, 2);
		var text_4 = $.child(button, true);
		$.reset(button);
		$.reset(div_1);
		$.template_effect(($0) => {
			$.set_class(div_1, 1, `flex flex-col rounded-lg border p-6 ${$.get(t).highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`);
			$.set_text(text, $.get(t).name);
			$.set_text(text_1, $.get(t).price);
			$.set_text(text_2, $.get(t).period);
			$.set_class(button, 1, `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${$.get(t).highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`);
			$.set_text(text_4, $0);
		}, [() => tierButtonLabel($.get(t).name)]);
		$.append($$anchor, div_1);
	});
	$.reset(div);
	$.append($$anchor, div);
	$.pop();
	$$cleanup();
}
export { PricingTiers as default };
