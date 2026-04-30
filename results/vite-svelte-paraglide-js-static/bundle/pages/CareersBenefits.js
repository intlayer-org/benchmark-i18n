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
var en_careers_benefits_remotelabel1 = () => {
	return `Remote-first`;
};
var fr_careers_benefits_remotelabel1 = () => {
	return `Remote-first`;
};
var es_careers_benefits_remotelabel1 = () => {
	return `Remoto primero`;
};
var de_careers_benefits_remotelabel1 = () => {
	return `Remote-First`;
};
var it_careers_benefits_remotelabel1 = () => {
	return `Remote-first`;
};
var pt_careers_benefits_remotelabel1 = () => {
	return `Remoto primeiro`;
};
var zh_careers_benefits_remotelabel1 = () => {
	return `远程优先`;
};
var ja_careers_benefits_remotelabel1 = () => {
	return `リモートファースト`;
};
var ko_careers_benefits_remotelabel1 = () => {
	return `Remote-first`;
};
var ru_careers_benefits_remotelabel1 = () => {
	return `Удаленная работа`;
};
var careers_benefits_remotelabel1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_benefits_remotelabel1(inputs);
	if (locale === "fr") return fr_careers_benefits_remotelabel1(inputs);
	if (locale === "es") return es_careers_benefits_remotelabel1(inputs);
	if (locale === "de") return de_careers_benefits_remotelabel1(inputs);
	if (locale === "it") return it_careers_benefits_remotelabel1(inputs);
	if (locale === "pt") return pt_careers_benefits_remotelabel1(inputs);
	if (locale === "zh") return zh_careers_benefits_remotelabel1(inputs);
	if (locale === "ja") return ja_careers_benefits_remotelabel1(inputs);
	if (locale === "ko") return ko_careers_benefits_remotelabel1(inputs);
	return ru_careers_benefits_remotelabel1(inputs);
});
var en_careers_benefits_remotevalue1 = () => {
	return `Work from anywhere in the world`;
};
var fr_careers_benefits_remotevalue1 = () => {
	return `Travaillez depuis n'importe où`;
};
var es_careers_benefits_remotevalue1 = () => {
	return `Trabaja desde cualquier lugar del mundo`;
};
var de_careers_benefits_remotevalue1 = () => {
	return `Arbeiten Sie von überall auf der Welt`;
};
var it_careers_benefits_remotevalue1 = () => {
	return `Lavora da qualsiasi parte del mondo`;
};
var pt_careers_benefits_remotevalue1 = () => {
	return `Trabalhe de qualquer lugar do mundo`;
};
var zh_careers_benefits_remotevalue1 = () => {
	return `在世界任何地方工作`;
};
var ja_careers_benefits_remotevalue1 = () => {
	return `世界中のどこからでも仕事ができます`;
};
var ko_careers_benefits_remotevalue1 = () => {
	return `Work from anywhere in the world`;
};
var ru_careers_benefits_remotevalue1 = () => {
	return `Работайте из любой точки мира`;
};
var careers_benefits_remotevalue1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_benefits_remotevalue1(inputs);
	if (locale === "fr") return fr_careers_benefits_remotevalue1(inputs);
	if (locale === "es") return es_careers_benefits_remotevalue1(inputs);
	if (locale === "de") return de_careers_benefits_remotevalue1(inputs);
	if (locale === "it") return it_careers_benefits_remotevalue1(inputs);
	if (locale === "pt") return pt_careers_benefits_remotevalue1(inputs);
	if (locale === "zh") return zh_careers_benefits_remotevalue1(inputs);
	if (locale === "ja") return ja_careers_benefits_remotevalue1(inputs);
	if (locale === "ko") return ko_careers_benefits_remotevalue1(inputs);
	return ru_careers_benefits_remotevalue1(inputs);
});
var en_careers_benefits_paylabel1 = () => {
	return `Competitive pay`;
};
var fr_careers_benefits_paylabel1 = () => {
	return `Rémunération compétitive`;
};
var es_careers_benefits_paylabel1 = () => {
	return `Salario competitivo`;
};
var de_careers_benefits_paylabel1 = () => {
	return `Wettbewerbsfähige Bezahlung`;
};
var it_careers_benefits_paylabel1 = () => {
	return `Retribuzione competitiva`;
};
var pt_careers_benefits_paylabel1 = () => {
	return `Salário competitivo`;
};
var zh_careers_benefits_paylabel1 = () => {
	return `具有竞争力的薪酬`;
};
var ja_careers_benefits_paylabel1 = () => {
	return `競争力のある給与`;
};
var ko_careers_benefits_paylabel1 = () => {
	return `Competitive pay`;
};
var ru_careers_benefits_paylabel1 = () => {
	return `Конкурентная зарплата`;
};
var careers_benefits_paylabel1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_benefits_paylabel1(inputs);
	if (locale === "fr") return fr_careers_benefits_paylabel1(inputs);
	if (locale === "es") return es_careers_benefits_paylabel1(inputs);
	if (locale === "de") return de_careers_benefits_paylabel1(inputs);
	if (locale === "it") return it_careers_benefits_paylabel1(inputs);
	if (locale === "pt") return pt_careers_benefits_paylabel1(inputs);
	if (locale === "zh") return zh_careers_benefits_paylabel1(inputs);
	if (locale === "ja") return ja_careers_benefits_paylabel1(inputs);
	if (locale === "ko") return ko_careers_benefits_paylabel1(inputs);
	return ru_careers_benefits_paylabel1(inputs);
});
var en_careers_benefits_payvalue1 = () => {
	return `Top-of-market compensation`;
};
var fr_careers_benefits_payvalue1 = () => {
	return `Fourchettes haut de marché`;
};
var es_careers_benefits_payvalue1 = () => {
	return `Compensación superior a la del mercado`;
};
var de_careers_benefits_payvalue1 = () => {
	return `Überdurchschnittliche Vergütung`;
};
var it_careers_benefits_payvalue1 = () => {
	return `Compensazione ai vertici del mercato`;
};
var pt_careers_benefits_payvalue1 = () => {
	return `Remuneração acima do mercado`;
};
var zh_careers_benefits_payvalue1 = () => {
	return `市场顶尖的薪资水平`;
};
var ja_careers_benefits_payvalue1 = () => {
	return `市場トップクラスの報酬`;
};
var ko_careers_benefits_payvalue1 = () => {
	return `Top-of-market compensation`;
};
var ru_careers_benefits_payvalue1 = () => {
	return `Вознаграждение выше рыночного`;
};
var careers_benefits_payvalue1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_benefits_payvalue1(inputs);
	if (locale === "fr") return fr_careers_benefits_payvalue1(inputs);
	if (locale === "es") return es_careers_benefits_payvalue1(inputs);
	if (locale === "de") return de_careers_benefits_payvalue1(inputs);
	if (locale === "it") return it_careers_benefits_payvalue1(inputs);
	if (locale === "pt") return pt_careers_benefits_payvalue1(inputs);
	if (locale === "zh") return zh_careers_benefits_payvalue1(inputs);
	if (locale === "ja") return ja_careers_benefits_payvalue1(inputs);
	if (locale === "ko") return ko_careers_benefits_payvalue1(inputs);
	return ru_careers_benefits_payvalue1(inputs);
});
var en_careers_benefits_osslabel1 = () => {
	return `Open source time`;
};
var fr_careers_benefits_osslabel1 = () => {
	return `Temps open source`;
};
var es_careers_benefits_osslabel1 = () => {
	return `Tiempo para el código abierto`;
};
var de_careers_benefits_osslabel1 = () => {
	return `Open-Source-Zeit`;
};
var it_careers_benefits_osslabel1 = () => {
	return `Tempo per l'open source`;
};
var pt_careers_benefits_osslabel1 = () => {
	return `Tempo para o código aberto`;
};
var zh_careers_benefits_osslabel1 = () => {
	return `开源时间`;
};
var ja_careers_benefits_osslabel1 = () => {
	return `オープンソースの時間`;
};
var ko_careers_benefits_osslabel1 = () => {
	return `Open source time`;
};
var ru_careers_benefits_osslabel1 = () => {
	return `Время на open source`;
};
var careers_benefits_osslabel1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_benefits_osslabel1(inputs);
	if (locale === "fr") return fr_careers_benefits_osslabel1(inputs);
	if (locale === "es") return es_careers_benefits_osslabel1(inputs);
	if (locale === "de") return de_careers_benefits_osslabel1(inputs);
	if (locale === "it") return it_careers_benefits_osslabel1(inputs);
	if (locale === "pt") return pt_careers_benefits_osslabel1(inputs);
	if (locale === "zh") return zh_careers_benefits_osslabel1(inputs);
	if (locale === "ja") return ja_careers_benefits_osslabel1(inputs);
	if (locale === "ko") return ko_careers_benefits_osslabel1(inputs);
	return ru_careers_benefits_osslabel1(inputs);
});
var en_careers_benefits_ossvalue1 = () => {
	return `20% time for OSS contributions`;
};
var fr_careers_benefits_ossvalue1 = () => {
	return `20 % du temps pour contribuer à l'OSS`;
};
var es_careers_benefits_ossvalue1 = () => {
	return `20% del tiempo para contribuciones a OSS`;
};
var de_careers_benefits_ossvalue1 = () => {
	return `20 % der Zeit für OSS-Beiträge`;
};
var it_careers_benefits_ossvalue1 = () => {
	return `20% del tempo per contributi open source`;
};
var pt_careers_benefits_ossvalue1 = () => {
	return `20% do tempo para contribuições OSS`;
};
var zh_careers_benefits_ossvalue1 = () => {
	return `20% 的时间用于 OSS 贡献`;
};
var ja_careers_benefits_ossvalue1 = () => {
	return `時間の20%をOSSへの貢献に`;
};
var ko_careers_benefits_ossvalue1 = () => {
	return `20% time for OSS contributions`;
};
var ru_careers_benefits_ossvalue1 = () => {
	return `20% времени на вклад в OSS`;
};
var careers_benefits_ossvalue1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_benefits_ossvalue1(inputs);
	if (locale === "fr") return fr_careers_benefits_ossvalue1(inputs);
	if (locale === "es") return es_careers_benefits_ossvalue1(inputs);
	if (locale === "de") return de_careers_benefits_ossvalue1(inputs);
	if (locale === "it") return it_careers_benefits_ossvalue1(inputs);
	if (locale === "pt") return pt_careers_benefits_ossvalue1(inputs);
	if (locale === "zh") return zh_careers_benefits_ossvalue1(inputs);
	if (locale === "ja") return ja_careers_benefits_ossvalue1(inputs);
	if (locale === "ko") return ko_careers_benefits_ossvalue1(inputs);
	return ru_careers_benefits_ossvalue1(inputs);
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
var root_1 = $.from_html(`<div class="rounded-lg border border-border bg-card p-4 text-center"><p class="text-sm font-semibold text-foreground"> </p> <p class="text-xs text-muted-foreground"> </p></div>`);
var root = $.from_html(`<div class="mb-12 grid gap-4 md:grid-cols-3"></div>`);
function CareersBenefits($$anchor, $$props) {
	$.push($$props, true);
	const $route = () => $.store_get(route, "$route", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	const currentLocale = $.derived(() => $route().kind === "ok" ? $route().locale : "en");
	const benefits = $.derived(() => {
		$.get(currentLocale);
		return [
			{
				label: careers_benefits_remotelabel1(),
				value: careers_benefits_remotevalue1()
			},
			{
				label: careers_benefits_paylabel1(),
				value: careers_benefits_payvalue1()
			},
			{
				label: careers_benefits_osslabel1(),
				value: careers_benefits_ossvalue1()
			}
		];
	});
	var div = root();
	$.each(div, 21, () => $.get(benefits), $.index, ($$anchor, b) => {
		var div_1 = root_1();
		var p = $.child(div_1);
		var text = $.child(p, true);
		$.reset(p);
		var p_1 = $.sibling(p, 2);
		var text_1 = $.child(p_1, true);
		$.reset(p_1);
		$.reset(div_1);
		$.template_effect(() => {
			$.set_text(text, $.get(b).label);
			$.set_text(text_1, $.get(b).value);
		});
		$.append($$anchor, div_1);
	});
	$.reset(div);
	$.append($$anchor, div);
	$.pop();
	$$cleanup();
}
export { CareersBenefits as default };
