import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
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
var en_mockbanner1 = () => {
	return `⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.`;
};
var fr_mockbanner1 = () => {
	return `⚠️ Cette page contient des données fictives à des fins de benchmark uniquement. Elle n'est liée à aucune activité commerciale ou service réel.`;
};
var es_mockbanner1 = () => {
	return `⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.`;
};
var de_mockbanner1 = () => {
	return `⚠️ Diese Seite enthält fiktive Daten, die nur für Benchmarking-Zwecke bestimmt sind. Sie steht in keiner Verbindung zu einem realen Unternehmen oder Dienst.`;
};
var it_mockbanner1 = () => {
	return `⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.`;
};
var pt_mockbanner1 = () => {
	return `⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhuma empresa ou serviço real.`;
};
var zh_mockbanner1 = () => {
	return `⚠️ 此页面包含虚构数据，仅用于基准测试目的。与任何实际业务或服务无关。`;
};
var ja_mockbanner1 = () => {
	return `⚠️ このページにはベンチマーク目的のみの架空のデータが含まれています。実在の企業やサービスとは関係ありません。`;
};
var ko_mockbanner1 = () => {
	return `⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.`;
};
var ru_mockbanner1 = () => {
	return `⚠️ Эта страница содержит фиктивные данные только для целей бенчмаркинга. Она не связана ни с каким реальным бизнесом или сервисом.`;
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
var en_pricing_header_title = () => {
	return `Simple, Transparent Pricing`;
};
var fr_pricing_header_title = () => {
	return `Tarification simple et transparente`;
};
var es_pricing_header_title = () => {
	return `Precios sencillos y transparentes`;
};
var de_pricing_header_title = () => {
	return `Einfache, transparente Preisgestaltung`;
};
var it_pricing_header_title = () => {
	return `Prezzi semplici e trasparenti`;
};
var pt_pricing_header_title = () => {
	return `Preços simples e transparentes`;
};
var zh_pricing_header_title = () => {
	return `简单透明的定价`;
};
var ja_pricing_header_title = () => {
	return `シンプルで透明性の高い価格設定`;
};
var ko_pricing_header_title = () => {
	return `Simple, Transparent Pricing`;
};
var ru_pricing_header_title = () => {
	return `Простые и прозрачные цены`;
};
var pricing_header_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_header_title(inputs);
	if (locale === "fr") return fr_pricing_header_title(inputs);
	if (locale === "es") return es_pricing_header_title(inputs);
	if (locale === "de") return de_pricing_header_title(inputs);
	if (locale === "it") return it_pricing_header_title(inputs);
	if (locale === "pt") return pt_pricing_header_title(inputs);
	if (locale === "zh") return zh_pricing_header_title(inputs);
	if (locale === "ja") return ja_pricing_header_title(inputs);
	if (locale === "ko") return ko_pricing_header_title(inputs);
	return ru_pricing_header_title(inputs);
});
var en_pricing_header_description = () => {
	return `Choose the plan that fits your team. No hidden fees.`;
};
var fr_pricing_header_description = () => {
	return `Choisissez l'offre adaptée à votre équipe. Sans frais cachés.`;
};
var es_pricing_header_description = () => {
	return `Elige el plan que mejor se adapte a tu equipo. Sin cuotas ocultas.`;
};
var de_pricing_header_description = () => {
	return `Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren.`;
};
var it_pricing_header_description = () => {
	return `Scegli il piano più adatto al tuo team. Nessun costo nascosto.`;
};
var pt_pricing_header_description = () => {
	return `Escolha o plano que se adapta à sua equipe. Sem taxas ocultas.`;
};
var zh_pricing_header_description = () => {
	return `选择适合您团队的计划。无隐藏费用。`;
};
var ja_pricing_header_description = () => {
	return `チームに合ったプランをお選びください。隠れた費用はありません。`;
};
var ko_pricing_header_description = () => {
	return `Choose the plan that fits your team. No hidden fees.`;
};
var ru_pricing_header_description = () => {
	return `Выберите подходящий план для вашей команды. Никаких скрытых комиссий.`;
};
var pricing_header_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_pricing_header_description(inputs);
	if (locale === "fr") return fr_pricing_header_description(inputs);
	if (locale === "es") return es_pricing_header_description(inputs);
	if (locale === "de") return de_pricing_header_description(inputs);
	if (locale === "it") return it_pricing_header_description(inputs);
	if (locale === "pt") return pt_pricing_header_description(inputs);
	if (locale === "zh") return zh_pricing_header_description(inputs);
	if (locale === "ja") return ja_pricing_header_description(inputs);
	if (locale === "ko") return ko_pricing_header_description(inputs);
	return ru_pricing_header_description(inputs);
});
var root$1 = $.from_html(`<div class="mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground"> </div>`);
function MockBanner($$anchor, $$props) {
	$.push($$props, false);
	$.init();
	var div = root$1();
	var text = $.child(div, true);
	$.reset(div);
	$.template_effect(($0) => $.set_text(text, $0), [() => mockbanner1()]);
	$.append($$anchor, div);
	$.pop();
}
var root = $.from_html(`<!> <div class="mb-12 text-center"><h1 class="mb-3 text-3xl font-bold text-foreground"> </h1> <p class="text-muted-foreground"> </p></div>`, 1);
function PricingHeader($$anchor, $$props) {
	$.push($$props, false);
	$.init();
	var fragment = root();
	var node = $.first_child(fragment);
	MockBanner(node, {});
	var div = $.sibling(node, 2);
	var h1 = $.child(div);
	var text = $.child(h1, true);
	$.reset(h1);
	var p = $.sibling(h1, 2);
	var text_1 = $.child(p, true);
	$.reset(p);
	$.reset(div);
	$.template_effect(($0, $1) => {
		$.set_text(text, $0);
		$.set_text(text_1, $1);
	}, [() => pricing_header_title(), () => pricing_header_description()]);
	$.append($$anchor, fragment);
	$.pop();
}
export { PricingHeader as default };
