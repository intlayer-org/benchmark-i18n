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
var en_settings_apiaccess_apikey2 = () => {
	return `API Key`;
};
var fr_settings_apiaccess_apikey2 = () => {
	return `Clé API`;
};
var es_settings_apiaccess_apikey2 = () => {
	return `Llave API`;
};
var de_settings_apiaccess_apikey2 = () => {
	return `API-Schlüssel`;
};
var it_settings_apiaccess_apikey2 = () => {
	return `Chiave API`;
};
var pt_settings_apiaccess_apikey2 = () => {
	return `Chave API`;
};
var zh_settings_apiaccess_apikey2 = () => {
	return `API 密钥`;
};
var ja_settings_apiaccess_apikey2 = () => {
	return `APIキー`;
};
var ko_settings_apiaccess_apikey2 = () => {
	return `API Key`;
};
var ru_settings_apiaccess_apikey2 = () => {
	return `Ключ API`;
};
var settings_apiaccess_apikey2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_settings_apiaccess_apikey2(inputs);
	if (locale === "es") return es_settings_apiaccess_apikey2(inputs);
	if (locale === "de") return de_settings_apiaccess_apikey2(inputs);
	if (locale === "it") return it_settings_apiaccess_apikey2(inputs);
	if (locale === "pt") return pt_settings_apiaccess_apikey2(inputs);
	if (locale === "zh") return zh_settings_apiaccess_apikey2(inputs);
	if (locale === "ja") return ja_settings_apiaccess_apikey2(inputs);
	if (locale === "ko") return ko_settings_apiaccess_apikey2(inputs);
	if (locale === "ru") return ru_settings_apiaccess_apikey2(inputs);
	return en_settings_apiaccess_apikey2(inputs);
});
var en_settings_apiaccess_copy1 = () => {
	return `Copy`;
};
var fr_settings_apiaccess_copy1 = () => {
	return `Copier`;
};
var es_settings_apiaccess_copy1 = () => {
	return `Copiar`;
};
var de_settings_apiaccess_copy1 = () => {
	return `Kopieren`;
};
var it_settings_apiaccess_copy1 = () => {
	return `Copia`;
};
var pt_settings_apiaccess_copy1 = () => {
	return `Copiar`;
};
var zh_settings_apiaccess_copy1 = () => {
	return `复制`;
};
var ja_settings_apiaccess_copy1 = () => {
	return `コピー`;
};
var ko_settings_apiaccess_copy1 = () => {
	return `Copy`;
};
var ru_settings_apiaccess_copy1 = () => {
	return `Копировать`;
};
var settings_apiaccess_copy1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_settings_apiaccess_copy1(inputs);
	if (locale === "es") return es_settings_apiaccess_copy1(inputs);
	if (locale === "de") return de_settings_apiaccess_copy1(inputs);
	if (locale === "it") return it_settings_apiaccess_copy1(inputs);
	if (locale === "pt") return pt_settings_apiaccess_copy1(inputs);
	if (locale === "zh") return zh_settings_apiaccess_copy1(inputs);
	if (locale === "ja") return ja_settings_apiaccess_copy1(inputs);
	if (locale === "ko") return ko_settings_apiaccess_copy1(inputs);
	if (locale === "ru") return ru_settings_apiaccess_copy1(inputs);
	return en_settings_apiaccess_copy1(inputs);
});
var en_settings_apiaccess_description1 = () => {
	return `Use this key to access the benchmarking API programmatically.`;
};
var fr_settings_apiaccess_description1 = () => {
	return `Utilisez cette clé pour appeler l'API de benchmark par programmation.`;
};
var es_settings_apiaccess_description1 = () => {
	return `Usa esta llave para acceder a la API de benchmarking de forma programática.`;
};
var de_settings_apiaccess_description1 = () => {
	return `Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen.`;
};
var it_settings_apiaccess_description1 = () => {
	return `Usa questa chiave per accedere programmaticamente alle API di benchmarking.`;
};
var pt_settings_apiaccess_description1 = () => {
	return `Use esta chave para acessar a API de benchmarking programaticamente.`;
};
var zh_settings_apiaccess_description1 = () => {
	return `使用此密钥以编程方式访问基准测试 API。`;
};
var ja_settings_apiaccess_description1 = () => {
	return `このキーを使用して、プログラムでベンチマークAPIにアクセスします。`;
};
var ko_settings_apiaccess_description1 = () => {
	return `Use this key to access the benchmarking API programmatically.`;
};
var ru_settings_apiaccess_description1 = () => {
	return `Используйте этот ключ для программного доступа к API бенчмаркинга.`;
};
var settings_apiaccess_description1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_settings_apiaccess_description1(inputs);
	if (locale === "es") return es_settings_apiaccess_description1(inputs);
	if (locale === "de") return de_settings_apiaccess_description1(inputs);
	if (locale === "it") return it_settings_apiaccess_description1(inputs);
	if (locale === "pt") return pt_settings_apiaccess_description1(inputs);
	if (locale === "zh") return zh_settings_apiaccess_description1(inputs);
	if (locale === "ja") return ja_settings_apiaccess_description1(inputs);
	if (locale === "ko") return ko_settings_apiaccess_description1(inputs);
	if (locale === "ru") return ru_settings_apiaccess_description1(inputs);
	return en_settings_apiaccess_description1(inputs);
});
var en_settings_apiaccess_title1 = () => {
	return `API Access`;
};
var fr_settings_apiaccess_title1 = () => {
	return `Accès API`;
};
var es_settings_apiaccess_title1 = () => {
	return `Acceso API`;
};
var de_settings_apiaccess_title1 = () => {
	return `API-Zugriff`;
};
var it_settings_apiaccess_title1 = () => {
	return `Accesso API`;
};
var pt_settings_apiaccess_title1 = () => {
	return `Acesso API`;
};
var zh_settings_apiaccess_title1 = () => {
	return `API 访问`;
};
var ja_settings_apiaccess_title1 = () => {
	return `APIアクセス`;
};
var ko_settings_apiaccess_title1 = () => {
	return `API Access`;
};
var ru_settings_apiaccess_title1 = () => {
	return `Доступ к API`;
};
var settings_apiaccess_title1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_settings_apiaccess_title1(inputs);
	if (locale === "es") return es_settings_apiaccess_title1(inputs);
	if (locale === "de") return de_settings_apiaccess_title1(inputs);
	if (locale === "it") return it_settings_apiaccess_title1(inputs);
	if (locale === "pt") return pt_settings_apiaccess_title1(inputs);
	if (locale === "zh") return zh_settings_apiaccess_title1(inputs);
	if (locale === "ja") return ja_settings_apiaccess_title1(inputs);
	if (locale === "ko") return ko_settings_apiaccess_title1(inputs);
	if (locale === "ru") return ru_settings_apiaccess_title1(inputs);
	return en_settings_apiaccess_title1(inputs);
});
var root = $.from_html(`<section class="rounded-lg border border-border bg-card p-6"><h2 class="mb-4 text-lg font-semibold text-foreground"> </h2> <div><label for="settings-api-key" class="mb-1 block text-sm font-medium text-foreground"> </label> <div class="flex gap-2"><input id="settings-api-key" readonly="" value="sk_bench_xxxxxxxxxxxxxxxxxxxx" class="flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"/> <button type="button" class="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"> </button></div> <p class="mt-1 text-xs text-muted-foreground"> </p></div></section>`);
function ApiAccessSection($$anchor, $$props) {
	$.push($$props, false);
	$.init();
	var section = root();
	var h2 = $.child(section);
	var text = $.only_child(h2, true);
	var div = $.sibling(h2, 2);
	var label = $.child(div);
	var text_1 = $.only_child(label, true);
	var div_1 = $.sibling(label, 2);
	var input = $.child(div_1);
	var button = $.sibling(input, 2);
	var text_2 = $.only_child(button, true);
	$.reset(div_1);
	var p = $.sibling(div_1, 2);
	var text_3 = $.only_child(p, true);
	$.reset(div);
	$.reset(section);
	$.template_effect(($0, $1, $2, $3) => {
		$.set_text(text, $0);
		$.set_text(text_1, $1);
		$.set_text(text_2, $2);
		$.set_text(text_3, $3);
	}, [
		() => settings_apiaccess_title1(),
		() => settings_apiaccess_apikey2(),
		() => settings_apiaccess_copy1(),
		() => settings_apiaccess_description1()
	]);
	$.append($$anchor, section);
	$.pop();
}
export { ApiAccessSection as default };
