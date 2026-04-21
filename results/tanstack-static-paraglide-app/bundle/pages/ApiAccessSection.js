import { useId } from "react";
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
var en_api_access_section_apiaccess1 = () => {
	return `API Access`;
};
var fr_api_access_section_apiaccess1 = () => {
	return `Accès API`;
};
var es_api_access_section_apiaccess1 = () => {
	return `Acceso API`;
};
var de_api_access_section_apiaccess1 = () => {
	return `API-Zugriff`;
};
var it_api_access_section_apiaccess1 = () => {
	return `Accesso API`;
};
var pt_api_access_section_apiaccess1 = () => {
	return `Acesso à API`;
};
var zh_api_access_section_apiaccess1 = () => {
	return `API 访问`;
};
var ja_api_access_section_apiaccess1 = () => {
	return `APIアクセス`;
};
var ko_api_access_section_apiaccess1 = () => {
	return `API 액세스`;
};
var ru_api_access_section_apiaccess1 = () => {
	return `Доступ к API`;
};
var api_access_section_apiaccess1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_api_access_section_apiaccess1(inputs);
	if (locale === "fr") return fr_api_access_section_apiaccess1(inputs);
	if (locale === "es") return es_api_access_section_apiaccess1(inputs);
	if (locale === "de") return de_api_access_section_apiaccess1(inputs);
	if (locale === "it") return it_api_access_section_apiaccess1(inputs);
	if (locale === "pt") return pt_api_access_section_apiaccess1(inputs);
	if (locale === "zh") return zh_api_access_section_apiaccess1(inputs);
	if (locale === "ja") return ja_api_access_section_apiaccess1(inputs);
	if (locale === "ko") return ko_api_access_section_apiaccess1(inputs);
	return ru_api_access_section_apiaccess1(inputs);
});
var en_api_access_section_apikey1 = () => {
	return `API Key`;
};
var fr_api_access_section_apikey1 = () => {
	return `Clé API`;
};
var es_api_access_section_apikey1 = () => {
	return `Llave API`;
};
var de_api_access_section_apikey1 = () => {
	return `API-Schlüssel`;
};
var it_api_access_section_apikey1 = () => {
	return `Chiave API`;
};
var pt_api_access_section_apikey1 = () => {
	return `Chave da API`;
};
var zh_api_access_section_apikey1 = () => {
	return `API 密钥`;
};
var ja_api_access_section_apikey1 = () => {
	return `APIキー`;
};
var ko_api_access_section_apikey1 = () => {
	return `API 키`;
};
var ru_api_access_section_apikey1 = () => {
	return `Ключ API`;
};
var api_access_section_apikey1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_api_access_section_apikey1(inputs);
	if (locale === "fr") return fr_api_access_section_apikey1(inputs);
	if (locale === "es") return es_api_access_section_apikey1(inputs);
	if (locale === "de") return de_api_access_section_apikey1(inputs);
	if (locale === "it") return it_api_access_section_apikey1(inputs);
	if (locale === "pt") return pt_api_access_section_apikey1(inputs);
	if (locale === "zh") return zh_api_access_section_apikey1(inputs);
	if (locale === "ja") return ja_api_access_section_apikey1(inputs);
	if (locale === "ko") return ko_api_access_section_apikey1(inputs);
	return ru_api_access_section_apikey1(inputs);
});
var en_api_access_section_usethiskeytoaccess4 = () => {
	return `Use this key to access the benchmarking API programmatically.`;
};
var fr_api_access_section_usethiskeytoaccess4 = () => {
	return `Utilisez cette clé pour accéder à l'API de benchmarking par programmation.`;
};
var es_api_access_section_usethiskeytoaccess4 = () => {
	return `Usa esta llave para acceder a la API de benchmarking de forma programática.`;
};
var de_api_access_section_usethiskeytoaccess4 = () => {
	return `Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen.`;
};
var it_api_access_section_usethiskeytoaccess4 = () => {
	return `Usa questa chiave per accedere programmaticamente alle API di benchmarking.`;
};
var pt_api_access_section_usethiskeytoaccess4 = () => {
	return `Utilize esta chave para acessar a API de benchmarking de forma programática.`;
};
var zh_api_access_section_usethiskeytoaccess4 = () => {
	return `使用此密钥从程序访问基准测试 API。`;
};
var ja_api_access_section_usethiskeytoaccess4 = () => {
	return `このキーを使用して、プログラムからベンチマークAPIにアクセスします。`;
};
var ko_api_access_section_usethiskeytoaccess4 = () => {
	return `이 키를 사용하여 프로그래밍 방식으로 벤치마킹 API에 액세스하십시오.`;
};
var ru_api_access_section_usethiskeytoaccess4 = () => {
	return `Используйте этот ключ для программного доступа к API бенчмаркинга.`;
};
var api_access_section_usethiskeytoaccess4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_api_access_section_usethiskeytoaccess4(inputs);
	if (locale === "fr") return fr_api_access_section_usethiskeytoaccess4(inputs);
	if (locale === "es") return es_api_access_section_usethiskeytoaccess4(inputs);
	if (locale === "de") return de_api_access_section_usethiskeytoaccess4(inputs);
	if (locale === "it") return it_api_access_section_usethiskeytoaccess4(inputs);
	if (locale === "pt") return pt_api_access_section_usethiskeytoaccess4(inputs);
	if (locale === "zh") return zh_api_access_section_usethiskeytoaccess4(inputs);
	if (locale === "ja") return ja_api_access_section_usethiskeytoaccess4(inputs);
	if (locale === "ko") return ko_api_access_section_usethiskeytoaccess4(inputs);
	return ru_api_access_section_usethiskeytoaccess4(inputs);
});
var fr_api_access_section_copy = () => {
	return `Copier`;
};
var es_api_access_section_copy = () => {
	return `Copiar`;
};
var de_api_access_section_copy = () => {
	return `Kopieren`;
};
var it_api_access_section_copy = () => {
	return `Copia`;
};
var pt_api_access_section_copy = () => {
	return `Copiar`;
};
var zh_api_access_section_copy = () => {
	return `复制`;
};
var ja_api_access_section_copy = () => {
	return `コピー`;
};
var ko_api_access_section_copy = () => {
	return `복사`;
};
var ru_api_access_section_copy = () => {
	return `Копировать`;
};
var en_api_access_section_copy = () => "api-access-section.copy";
var api_access_section_copy = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_api_access_section_copy(inputs);
	if (locale === "fr") return fr_api_access_section_copy(inputs);
	if (locale === "es") return es_api_access_section_copy(inputs);
	if (locale === "de") return de_api_access_section_copy(inputs);
	if (locale === "it") return it_api_access_section_copy(inputs);
	if (locale === "pt") return pt_api_access_section_copy(inputs);
	if (locale === "zh") return zh_api_access_section_copy(inputs);
	if (locale === "ja") return ja_api_access_section_copy(inputs);
	if (locale === "ko") return ko_api_access_section_copy(inputs);
	return ru_api_access_section_copy(inputs);
});
function ApiAccessSection() {
	const apiKeyId = useId();
	return jsxs("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [jsx("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: api_access_section_apiaccess1()
		}), jsxs("div", { children: [
			jsx("label", {
				htmlFor: apiKeyId,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: api_access_section_apikey1()
			}),
			jsxs("div", {
				className: "flex gap-2",
				children: [jsx("input", {
					id: apiKeyId,
					readOnly: true,
					defaultValue: "sk_bench_xxxxxxxxxxxxxxxxxxxx",
					className: "flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
				}), jsx("button", {
					type: "button",
					className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors",
					children: api_access_section_copy()
				})]
			}),
			jsx("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: api_access_section_usethiskeytoaccess4()
			})
		] })]
	});
}
setLocale("en", { reload: false });
function Wrapper({ children }) {
	return jsx(Fragment, { children });
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(ApiAccessSection, {}) });
}
export { Wrapped as default };
