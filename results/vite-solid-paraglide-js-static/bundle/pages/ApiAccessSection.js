import { insert, setAttribute, template } from "solid-js/web";
import { createUniqueId } from "solid-js";
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
	if (locale === "en") return en_settings_apiaccess_title1(inputs);
	if (locale === "fr") return fr_settings_apiaccess_title1(inputs);
	if (locale === "es") return es_settings_apiaccess_title1(inputs);
	if (locale === "de") return de_settings_apiaccess_title1(inputs);
	if (locale === "it") return it_settings_apiaccess_title1(inputs);
	if (locale === "pt") return pt_settings_apiaccess_title1(inputs);
	if (locale === "zh") return zh_settings_apiaccess_title1(inputs);
	if (locale === "ja") return ja_settings_apiaccess_title1(inputs);
	if (locale === "ko") return ko_settings_apiaccess_title1(inputs);
	return ru_settings_apiaccess_title1(inputs);
});
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
	if (locale === "en") return en_settings_apiaccess_apikey2(inputs);
	if (locale === "fr") return fr_settings_apiaccess_apikey2(inputs);
	if (locale === "es") return es_settings_apiaccess_apikey2(inputs);
	if (locale === "de") return de_settings_apiaccess_apikey2(inputs);
	if (locale === "it") return it_settings_apiaccess_apikey2(inputs);
	if (locale === "pt") return pt_settings_apiaccess_apikey2(inputs);
	if (locale === "zh") return zh_settings_apiaccess_apikey2(inputs);
	if (locale === "ja") return ja_settings_apiaccess_apikey2(inputs);
	if (locale === "ko") return ko_settings_apiaccess_apikey2(inputs);
	return ru_settings_apiaccess_apikey2(inputs);
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
	if (locale === "en") return en_settings_apiaccess_copy1(inputs);
	if (locale === "fr") return fr_settings_apiaccess_copy1(inputs);
	if (locale === "es") return es_settings_apiaccess_copy1(inputs);
	if (locale === "de") return de_settings_apiaccess_copy1(inputs);
	if (locale === "it") return it_settings_apiaccess_copy1(inputs);
	if (locale === "pt") return pt_settings_apiaccess_copy1(inputs);
	if (locale === "zh") return zh_settings_apiaccess_copy1(inputs);
	if (locale === "ja") return ja_settings_apiaccess_copy1(inputs);
	if (locale === "ko") return ko_settings_apiaccess_copy1(inputs);
	return ru_settings_apiaccess_copy1(inputs);
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
	if (locale === "en") return en_settings_apiaccess_description1(inputs);
	if (locale === "fr") return fr_settings_apiaccess_description1(inputs);
	if (locale === "es") return es_settings_apiaccess_description1(inputs);
	if (locale === "de") return de_settings_apiaccess_description1(inputs);
	if (locale === "it") return it_settings_apiaccess_description1(inputs);
	if (locale === "pt") return pt_settings_apiaccess_description1(inputs);
	if (locale === "zh") return zh_settings_apiaccess_description1(inputs);
	if (locale === "ja") return ja_settings_apiaccess_description1(inputs);
	if (locale === "ko") return ko_settings_apiaccess_description1(inputs);
	return ru_settings_apiaccess_description1(inputs);
});
var _tmpl$ = template(`<section class="rounded-lg border border-border bg-card p-6"><h2 class="mb-4 text-lg font-semibold text-foreground"></h2><div><label class="mb-1 block text-sm font-medium text-foreground"></label><div class="flex gap-2"><input readonly defaultvalue=sk_bench_xxxxxxxxxxxxxxxxxxxx class="flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"><button type=button class="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"></button></div><p class="mt-1 text-xs text-muted-foreground">`);
function ApiAccessSection() {
	const apiKeyId = createUniqueId();
	return (() => {
		var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$4 = _el$2.nextSibling.firstChild, _el$5 = _el$4.nextSibling, _el$6 = _el$5.firstChild, _el$7 = _el$6.nextSibling, _el$8 = _el$5.nextSibling;
		insert(_el$2, () => settings_apiaccess_title1());
		setAttribute(_el$4, "for", apiKeyId);
		insert(_el$4, () => settings_apiaccess_apikey2());
		setAttribute(_el$6, "id", apiKeyId);
		insert(_el$7, () => settings_apiaccess_copy1());
		insert(_el$8, () => settings_apiaccess_description1());
		return _el$;
	})();
}
export { ApiAccessSection as default };
