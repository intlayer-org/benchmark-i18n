import "svelte/internal/disclose-version";
import * as $ from "svelte/internal/client";
import ChevronDown from "lucide-svelte/icons/chevron-down";
import { derived, get, writable } from "svelte/store";
import "svelte/internal/flags/legacy";
import { onMount } from "svelte";
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
	for (const locale of locales$1) if (locale.toLowerCase() === lowerValue) return locale;
}
function assertIsLocale(input) {
	const locale = toLocale(input);
	if (locale) return locale;
	throw new Error(`Invalid locale: ${input}. Expected one of: ${locales$1.join(", ")}`);
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
var en_header_blog = () => {
	return `Blog`;
};
var fr_header_blog = () => {
	return `Blog`;
};
var es_header_blog = () => {
	return `Blog`;
};
var de_header_blog = () => {
	return `Blog`;
};
var it_header_blog = () => {
	return `Blog`;
};
var pt_header_blog = () => {
	return `Blog`;
};
var zh_header_blog = () => {
	return `博客`;
};
var ja_header_blog = () => {
	return `ブログ`;
};
var ko_header_blog = () => {
	return `Blog`;
};
var ru_header_blog = () => {
	return `Блог`;
};
var header_blog = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_header_blog(inputs);
	if (locale === "es") return es_header_blog(inputs);
	if (locale === "de") return de_header_blog(inputs);
	if (locale === "it") return it_header_blog(inputs);
	if (locale === "pt") return pt_header_blog(inputs);
	if (locale === "zh") return zh_header_blog(inputs);
	if (locale === "ja") return ja_header_blog(inputs);
	if (locale === "ko") return ko_header_blog(inputs);
	if (locale === "ru") return ru_header_blog(inputs);
	return en_header_blog(inputs);
});
var en_header_careers = () => {
	return `Careers`;
};
var fr_header_careers = () => {
	return `Carrières`;
};
var es_header_careers = () => {
	return `Carreras`;
};
var de_header_careers = () => {
	return `Karriere`;
};
var it_header_careers = () => {
	return `Carriere`;
};
var pt_header_careers = () => {
	return `Carreiras`;
};
var zh_header_careers = () => {
	return `招聘`;
};
var ja_header_careers = () => {
	return `採用情報`;
};
var ko_header_careers = () => {
	return `Careers`;
};
var ru_header_careers = () => {
	return `Вакансии`;
};
var header_careers = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_header_careers(inputs);
	if (locale === "es") return es_header_careers(inputs);
	if (locale === "de") return de_header_careers(inputs);
	if (locale === "it") return it_header_careers(inputs);
	if (locale === "pt") return pt_header_careers(inputs);
	if (locale === "zh") return zh_header_careers(inputs);
	if (locale === "ja") return ja_header_careers(inputs);
	if (locale === "ko") return ko_header_careers(inputs);
	if (locale === "ru") return ru_header_careers(inputs);
	return en_header_careers(inputs);
});
var en_header_contact = () => {
	return `Contact`;
};
var fr_header_contact = () => {
	return `Contact`;
};
var es_header_contact = () => {
	return `Contacto`;
};
var de_header_contact = () => {
	return `Kontakt`;
};
var it_header_contact = () => {
	return `Contatti`;
};
var pt_header_contact = () => {
	return `Contato`;
};
var zh_header_contact = () => {
	return `联系我们`;
};
var ja_header_contact = () => {
	return `お問い合わせ`;
};
var ko_header_contact = () => {
	return `Contact`;
};
var ru_header_contact = () => {
	return `Контакт`;
};
var header_contact = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_header_contact(inputs);
	if (locale === "es") return es_header_contact(inputs);
	if (locale === "de") return de_header_contact(inputs);
	if (locale === "it") return it_header_contact(inputs);
	if (locale === "pt") return pt_header_contact(inputs);
	if (locale === "zh") return zh_header_contact(inputs);
	if (locale === "ja") return ja_header_contact(inputs);
	if (locale === "ko") return ko_header_contact(inputs);
	if (locale === "ru") return ru_header_contact(inputs);
	return en_header_contact(inputs);
});
var en_header_faq = () => {
	return `FAQ`;
};
var fr_header_faq = () => {
	return `FAQ`;
};
var es_header_faq = () => {
	return `FAQ`;
};
var de_header_faq = () => {
	return `FAQ`;
};
var it_header_faq = () => {
	return `FAQ`;
};
var pt_header_faq = () => {
	return `FAQ`;
};
var zh_header_faq = () => {
	return `常见问题`;
};
var ja_header_faq = () => {
	return `FAQ`;
};
var ko_header_faq = () => {
	return `FAQ`;
};
var ru_header_faq = () => {
	return `FAQ`;
};
var header_faq = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_header_faq(inputs);
	if (locale === "es") return es_header_faq(inputs);
	if (locale === "de") return de_header_faq(inputs);
	if (locale === "it") return it_header_faq(inputs);
	if (locale === "pt") return pt_header_faq(inputs);
	if (locale === "zh") return zh_header_faq(inputs);
	if (locale === "ja") return ja_header_faq(inputs);
	if (locale === "ko") return ko_header_faq(inputs);
	if (locale === "ru") return ru_header_faq(inputs);
	return en_header_faq(inputs);
});
var en_header_home = () => {
	return `Home`;
};
var fr_header_home = () => {
	return `Accueil`;
};
var es_header_home = () => {
	return `Inicio`;
};
var de_header_home = () => {
	return `Home`;
};
var it_header_home = () => {
	return `Home`;
};
var pt_header_home = () => {
	return `Início`;
};
var zh_header_home = () => {
	return `首页`;
};
var ja_header_home = () => {
	return `ホーム`;
};
var ko_header_home = () => {
	return `Home`;
};
var ru_header_home = () => {
	return `Главная`;
};
var header_home = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_header_home(inputs);
	if (locale === "es") return es_header_home(inputs);
	if (locale === "de") return de_header_home(inputs);
	if (locale === "it") return it_header_home(inputs);
	if (locale === "pt") return pt_header_home(inputs);
	if (locale === "zh") return zh_header_home(inputs);
	if (locale === "ja") return ja_header_home(inputs);
	if (locale === "ko") return ko_header_home(inputs);
	if (locale === "ru") return ru_header_home(inputs);
	return en_header_home(inputs);
});
var en_header_methodology = () => {
	return `Methodology`;
};
var fr_header_methodology = () => {
	return `Méthodologie`;
};
var es_header_methodology = () => {
	return `Metodología`;
};
var de_header_methodology = () => {
	return `Methodik`;
};
var it_header_methodology = () => {
	return `Metodologia`;
};
var pt_header_methodology = () => {
	return `Metodologia`;
};
var zh_header_methodology = () => {
	return `方法论`;
};
var ja_header_methodology = () => {
	return `手法`;
};
var ko_header_methodology = () => {
	return `Methodology`;
};
var ru_header_methodology = () => {
	return `Методология`;
};
var header_methodology = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_header_methodology(inputs);
	if (locale === "es") return es_header_methodology(inputs);
	if (locale === "de") return de_header_methodology(inputs);
	if (locale === "it") return it_header_methodology(inputs);
	if (locale === "pt") return pt_header_methodology(inputs);
	if (locale === "zh") return zh_header_methodology(inputs);
	if (locale === "ja") return ja_header_methodology(inputs);
	if (locale === "ko") return ko_header_methodology(inputs);
	if (locale === "ru") return ru_header_methodology(inputs);
	return en_header_methodology(inputs);
});
var en_header_mockpages1 = () => {
	return `Mock Pages`;
};
var fr_header_mockpages1 = () => {
	return `Pages fictives`;
};
var es_header_mockpages1 = () => {
	return `Páginas de prueba`;
};
var de_header_mockpages1 = () => {
	return `Testseiten`;
};
var it_header_mockpages1 = () => {
	return `Pagine di test`;
};
var pt_header_mockpages1 = () => {
	return `Páginas de Teste`;
};
var zh_header_mockpages1 = () => {
	return `模拟页面`;
};
var ja_header_mockpages1 = () => {
	return `テストページ`;
};
var ko_header_mockpages1 = () => {
	return `Mock Pages`;
};
var ru_header_mockpages1 = () => {
	return `Тестовые страницы`;
};
var header_mockpages1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_header_mockpages1(inputs);
	if (locale === "es") return es_header_mockpages1(inputs);
	if (locale === "de") return de_header_mockpages1(inputs);
	if (locale === "it") return it_header_mockpages1(inputs);
	if (locale === "pt") return pt_header_mockpages1(inputs);
	if (locale === "zh") return zh_header_mockpages1(inputs);
	if (locale === "ja") return ja_header_mockpages1(inputs);
	if (locale === "ko") return ko_header_mockpages1(inputs);
	if (locale === "ru") return ru_header_mockpages1(inputs);
	return en_header_mockpages1(inputs);
});
var en_header_pricing = () => {
	return `Pricing`;
};
var fr_header_pricing = () => {
	return `Tarifs`;
};
var es_header_pricing = () => {
	return `Precios`;
};
var de_header_pricing = () => {
	return `Preise`;
};
var it_header_pricing = () => {
	return `Prezzi`;
};
var pt_header_pricing = () => {
	return `Preços`;
};
var zh_header_pricing = () => {
	return `价格`;
};
var ja_header_pricing = () => {
	return `価格`;
};
var ko_header_pricing = () => {
	return `Pricing`;
};
var ru_header_pricing = () => {
	return `Цены`;
};
var header_pricing = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_header_pricing(inputs);
	if (locale === "es") return es_header_pricing(inputs);
	if (locale === "de") return de_header_pricing(inputs);
	if (locale === "it") return it_header_pricing(inputs);
	if (locale === "pt") return pt_header_pricing(inputs);
	if (locale === "zh") return zh_header_pricing(inputs);
	if (locale === "ja") return ja_header_pricing(inputs);
	if (locale === "ko") return ko_header_pricing(inputs);
	if (locale === "ru") return ru_header_pricing(inputs);
	return en_header_pricing(inputs);
});
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
	return `Products`;
};
var ru_header_products = () => {
	return `Продукты`;
};
var header_products = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_header_products(inputs);
	if (locale === "es") return es_header_products(inputs);
	if (locale === "de") return de_header_products(inputs);
	if (locale === "it") return it_header_products(inputs);
	if (locale === "pt") return pt_header_products(inputs);
	if (locale === "zh") return zh_header_products(inputs);
	if (locale === "ja") return ja_header_products(inputs);
	if (locale === "ko") return ko_header_products(inputs);
	if (locale === "ru") return ru_header_products(inputs);
	return en_header_products(inputs);
});
var en_header_settings = () => {
	return `Settings`;
};
var fr_header_settings = () => {
	return `Paramètres`;
};
var es_header_settings = () => {
	return `Ajustes`;
};
var de_header_settings = () => {
	return `Einstellungen`;
};
var it_header_settings = () => {
	return `Impostazioni`;
};
var pt_header_settings = () => {
	return `Configurações`;
};
var zh_header_settings = () => {
	return `设置`;
};
var ja_header_settings = () => {
	return `設定`;
};
var ko_header_settings = () => {
	return `Settings`;
};
var ru_header_settings = () => {
	return `Настройки`;
};
var header_settings = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_header_settings(inputs);
	if (locale === "es") return es_header_settings(inputs);
	if (locale === "de") return de_header_settings(inputs);
	if (locale === "it") return it_header_settings(inputs);
	if (locale === "pt") return pt_header_settings(inputs);
	if (locale === "zh") return zh_header_settings(inputs);
	if (locale === "ja") return ja_header_settings(inputs);
	if (locale === "ko") return ko_header_settings(inputs);
	if (locale === "ru") return ru_header_settings(inputs);
	return en_header_settings(inputs);
});
var en_header_team = () => {
	return `Team`;
};
var fr_header_team = () => {
	return `Équipe`;
};
var es_header_team = () => {
	return `Equipo`;
};
var de_header_team = () => {
	return `Team`;
};
var it_header_team = () => {
	return `Team`;
};
var pt_header_team = () => {
	return `Equipe`;
};
var zh_header_team = () => {
	return `团队`;
};
var ja_header_team = () => {
	return `チーム`;
};
var ko_header_team = () => {
	return `Team`;
};
var ru_header_team = () => {
	return `Команда`;
};
var header_team = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_header_team(inputs);
	if (locale === "es") return es_header_team(inputs);
	if (locale === "de") return de_header_team(inputs);
	if (locale === "it") return it_header_team(inputs);
	if (locale === "pt") return pt_header_team(inputs);
	if (locale === "zh") return zh_header_team(inputs);
	if (locale === "ja") return ja_header_team(inputs);
	if (locale === "ko") return ko_header_team(inputs);
	if (locale === "ru") return ru_header_team(inputs);
	return en_header_team(inputs);
});
var en_shared_appname1 = () => {
	return `i18n Bench`;
};
var fr_shared_appname1 = () => {
	return `Bench i18n`;
};
var es_shared_appname1 = () => {
	return `i18n Bench`;
};
var de_shared_appname1 = () => {
	return `i18n Bench`;
};
var it_shared_appname1 = () => {
	return `i18n Bench`;
};
var pt_shared_appname1 = () => {
	return `i18n Bench`;
};
var zh_shared_appname1 = () => {
	return `i18n Bench`;
};
var ja_shared_appname1 = () => {
	return `i18n Bench`;
};
var ko_shared_appname1 = () => {
	return `i18n Bench`;
};
var ru_shared_appname1 = () => {
	return `i18n Bench`;
};
var shared_appname1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_shared_appname1(inputs);
	if (locale === "es") return es_shared_appname1(inputs);
	if (locale === "de") return de_shared_appname1(inputs);
	if (locale === "it") return it_shared_appname1(inputs);
	if (locale === "pt") return pt_shared_appname1(inputs);
	if (locale === "zh") return zh_shared_appname1(inputs);
	if (locale === "ja") return ja_shared_appname1(inputs);
	if (locale === "ko") return ko_shared_appname1(inputs);
	if (locale === "ru") return ru_shared_appname1(inputs);
	return en_shared_appname1(inputs);
});
var en_shared_gotogithub2 = () => {
	return `Go to GitHub`;
};
var fr_shared_gotogithub2 = () => {
	return `Aller sur GitHub`;
};
var es_shared_gotogithub2 = () => {
	return `Ir a GitHub`;
};
var de_shared_gotogithub2 = () => {
	return `Zu GitHub`;
};
var it_shared_gotogithub2 = () => {
	return `Vai su GitHub`;
};
var pt_shared_gotogithub2 = () => {
	return `Ir para o GitHub`;
};
var zh_shared_gotogithub2 = () => {
	return `前往 GitHub`;
};
var ja_shared_gotogithub2 = () => {
	return `GitHubへ`;
};
var ko_shared_gotogithub2 = () => {
	return `Go to GitHub`;
};
var ru_shared_gotogithub2 = () => {
	return `Перейти на GitHub`;
};
var shared_gotogithub2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_shared_gotogithub2(inputs);
	if (locale === "es") return es_shared_gotogithub2(inputs);
	if (locale === "de") return de_shared_gotogithub2(inputs);
	if (locale === "it") return it_shared_gotogithub2(inputs);
	if (locale === "pt") return pt_shared_gotogithub2(inputs);
	if (locale === "zh") return zh_shared_gotogithub2(inputs);
	if (locale === "ja") return ja_shared_gotogithub2(inputs);
	if (locale === "ko") return ko_shared_gotogithub2(inputs);
	if (locale === "ru") return ru_shared_gotogithub2(inputs);
	return en_shared_gotogithub2(inputs);
});
var en_themetoggle_auto1 = () => {
	return `Theme: Auto`;
};
var fr_themetoggle_auto1 = () => {
	return `Thème : automatique`;
};
var es_themetoggle_auto1 = () => {
	return `Tema: Auto`;
};
var de_themetoggle_auto1 = () => {
	return `Thema: Auto`;
};
var it_themetoggle_auto1 = () => {
	return `Tema: Auto`;
};
var pt_themetoggle_auto1 = () => {
	return `Tema: Automático`;
};
var zh_themetoggle_auto1 = () => {
	return `主题：自动`;
};
var ja_themetoggle_auto1 = () => {
	return `テーマ：自動`;
};
var ko_themetoggle_auto1 = () => {
	return `Theme: Auto`;
};
var ru_themetoggle_auto1 = () => {
	return `Тема: Авто`;
};
var themetoggle_auto1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_themetoggle_auto1(inputs);
	if (locale === "es") return es_themetoggle_auto1(inputs);
	if (locale === "de") return de_themetoggle_auto1(inputs);
	if (locale === "it") return it_themetoggle_auto1(inputs);
	if (locale === "pt") return pt_themetoggle_auto1(inputs);
	if (locale === "zh") return zh_themetoggle_auto1(inputs);
	if (locale === "ja") return ja_themetoggle_auto1(inputs);
	if (locale === "ko") return ko_themetoggle_auto1(inputs);
	if (locale === "ru") return ru_themetoggle_auto1(inputs);
	return en_themetoggle_auto1(inputs);
});
var en_themetoggle_dark1 = () => {
	return `Theme: Dark`;
};
var fr_themetoggle_dark1 = () => {
	return `Thème : sombre`;
};
var es_themetoggle_dark1 = () => {
	return `Tema: Oscuro`;
};
var de_themetoggle_dark1 = () => {
	return `Thema: Dunkel`;
};
var it_themetoggle_dark1 = () => {
	return `Tema: Scuro`;
};
var pt_themetoggle_dark1 = () => {
	return `Tema: Escuro`;
};
var zh_themetoggle_dark1 = () => {
	return `主题：深色`;
};
var ja_themetoggle_dark1 = () => {
	return `テーマ：ダーク`;
};
var ko_themetoggle_dark1 = () => {
	return `Theme: Dark`;
};
var ru_themetoggle_dark1 = () => {
	return `Тема: Темная`;
};
var themetoggle_dark1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_themetoggle_dark1(inputs);
	if (locale === "es") return es_themetoggle_dark1(inputs);
	if (locale === "de") return de_themetoggle_dark1(inputs);
	if (locale === "it") return it_themetoggle_dark1(inputs);
	if (locale === "pt") return pt_themetoggle_dark1(inputs);
	if (locale === "zh") return zh_themetoggle_dark1(inputs);
	if (locale === "ja") return ja_themetoggle_dark1(inputs);
	if (locale === "ko") return ko_themetoggle_dark1(inputs);
	if (locale === "ru") return ru_themetoggle_dark1(inputs);
	return en_themetoggle_dark1(inputs);
});
var en_themetoggle_labelauto2 = () => {
	return `Theme mode: auto (system). Click to switch to light mode.`;
};
var fr_themetoggle_labelauto2 = () => {
	return `Mode thème : automatique (système). Cliquez pour passer en mode clair.`;
};
var es_themetoggle_labelauto2 = () => {
	return `Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.`;
};
var de_themetoggle_labelauto2 = () => {
	return `Themenmodus: Auto (System). Klicken Sie hier, um zum hellen Modus zu wechseln.`;
};
var it_themetoggle_labelauto2 = () => {
	return `Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.`;
};
var pt_themetoggle_labelauto2 = () => {
	return `Modo de tema: auto (sistema). Clique para mudar para o modo claro.`;
};
var zh_themetoggle_labelauto2 = () => {
	return `主题模式：自动（系统）。点击切换到浅色模式。`;
};
var ja_themetoggle_labelauto2 = () => {
	return `テーマモード：自動（システム）。クリックするとライトモードに切り替わります。`;
};
var ko_themetoggle_labelauto2 = () => {
	return `Theme mode: auto (system). Click to switch to light mode.`;
};
var ru_themetoggle_labelauto2 = () => {
	return `Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.`;
};
var themetoggle_labelauto2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_themetoggle_labelauto2(inputs);
	if (locale === "es") return es_themetoggle_labelauto2(inputs);
	if (locale === "de") return de_themetoggle_labelauto2(inputs);
	if (locale === "it") return it_themetoggle_labelauto2(inputs);
	if (locale === "pt") return pt_themetoggle_labelauto2(inputs);
	if (locale === "zh") return zh_themetoggle_labelauto2(inputs);
	if (locale === "ja") return ja_themetoggle_labelauto2(inputs);
	if (locale === "ko") return ko_themetoggle_labelauto2(inputs);
	if (locale === "ru") return ru_themetoggle_labelauto2(inputs);
	return en_themetoggle_labelauto2(inputs);
});
var en_themetoggle_labelother2 = (i) => {
	return `Theme mode: ${i?.mode}. Click to switch mode.`;
};
var fr_themetoggle_labelother2 = (i) => {
	return `Mode thème : ${i?.mode}. Cliquez pour changer de mode.`;
};
var es_themetoggle_labelother2 = (i) => {
	return `Modo de tema: ${i?.mode}. Haz clic para cambiar de modo.`;
};
var de_themetoggle_labelother2 = (i) => {
	return `Themenmodus: ${i?.mode}. Klicken Sie hier, um den Modus zu wechseln.`;
};
var it_themetoggle_labelother2 = (i) => {
	return `Modalità tema: ${i?.mode}. Clicca per cambiare modalità.`;
};
var pt_themetoggle_labelother2 = (i) => {
	return `Modo de tema: ${i?.mode}. Clique para mudar de modo.`;
};
var zh_themetoggle_labelother2 = (i) => {
	return `主题模式：${i?.mode}。点击切换模式。`;
};
var ja_themetoggle_labelother2 = (i) => {
	return `テーマモード：${i?.mode}。クリックしてモードを切り替えます。`;
};
var ko_themetoggle_labelother2 = (i) => {
	return `Theme mode: ${i?.mode}. Click to switch mode.`;
};
var ru_themetoggle_labelother2 = (i) => {
	return `Режим темы: ${i?.mode}. Нажмите, чтобы сменить режим.`;
};
var themetoggle_labelother2 = ((inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_themetoggle_labelother2(inputs);
	if (locale === "es") return es_themetoggle_labelother2(inputs);
	if (locale === "de") return de_themetoggle_labelother2(inputs);
	if (locale === "it") return it_themetoggle_labelother2(inputs);
	if (locale === "pt") return pt_themetoggle_labelother2(inputs);
	if (locale === "zh") return zh_themetoggle_labelother2(inputs);
	if (locale === "ja") return ja_themetoggle_labelother2(inputs);
	if (locale === "ko") return ko_themetoggle_labelother2(inputs);
	if (locale === "ru") return ru_themetoggle_labelother2(inputs);
	return en_themetoggle_labelother2(inputs);
});
var en_themetoggle_light1 = () => {
	return `Theme: Light`;
};
var fr_themetoggle_light1 = () => {
	return `Thème : clair`;
};
var es_themetoggle_light1 = () => {
	return `Tema: Claro`;
};
var de_themetoggle_light1 = () => {
	return `Thema: Hell`;
};
var it_themetoggle_light1 = () => {
	return `Tema: Chiaro`;
};
var pt_themetoggle_light1 = () => {
	return `Tema: Claro`;
};
var zh_themetoggle_light1 = () => {
	return `主题：浅色`;
};
var ja_themetoggle_light1 = () => {
	return `テーマ：ライト`;
};
var ko_themetoggle_light1 = () => {
	return `Theme: Light`;
};
var ru_themetoggle_light1 = () => {
	return `Тема: Светлая`;
};
var themetoggle_light1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_themetoggle_light1(inputs);
	if (locale === "es") return es_themetoggle_light1(inputs);
	if (locale === "de") return de_themetoggle_light1(inputs);
	if (locale === "it") return it_themetoggle_light1(inputs);
	if (locale === "pt") return pt_themetoggle_light1(inputs);
	if (locale === "zh") return zh_themetoggle_light1(inputs);
	if (locale === "ja") return ja_themetoggle_light1(inputs);
	if (locale === "ko") return ko_themetoggle_light1(inputs);
	if (locale === "ru") return ru_themetoggle_light1(inputs);
	return en_themetoggle_light1(inputs);
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
function getLocaleName(locale) {
	try {
		const name = new Intl.DisplayNames([locale], { type: "language" }).of(locale);
		return name ? name.charAt(0).toUpperCase() + name.slice(1) : locale;
	} catch {
		return locale.toUpperCase();
	}
}
function isLocale(value) {
	return locales.includes(value);
}
var PAGE_SEGMENTS = /* @__PURE__ */ new Set([
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
var pathname = writable(typeof window !== "undefined" ? window.location.pathname : "/en");
var route = derived(pathname, (p) => parsePath(p));
function navigate(url, replace = false) {
	if (typeof window === "undefined") return;
	if (replace) history.replaceState(null, "", url);
	else history.pushState(null, "", url);
	pathname.set(window.location.pathname);
}
var root$2 = $.from_html(`<option> </option>`);
var root_1$1 = $.from_html(`<div class="flex items-center gap-2"><select class="h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:ring-1 focus:ring-primary focus:outline-none"></select></div>`);
function LocaleSwitcher($$anchor, $$props) {
	$.push($$props, false);
	const $pathname = () => $.store_get(pathname, "$pathname", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	function handleLocaleChange(e) {
		const newLocale = e.target.value;
		navigate(get(pathname).replace(/^\/[^/]+/, `/${newLocale}`) + window.location.search + window.location.hash, false);
	}
	$.init();
	var div = root_1$1();
	var select = $.child(div);
	$.each(select, 5, () => locales, (localeItem) => localeItem, ($$anchor, localeItem) => {
		var option = root$2();
		var text = $.only_child(option, true);
		var option_value = {};
		$.template_effect(($0) => {
			$.set_text(text, $0);
			if (option_value !== (option_value = $.get(localeItem))) option.value = (option.__value = option_value) ?? "";
		}, [() => getLocaleName($.get(localeItem))]);
		$.append($$anchor, option);
	});
	$.reset(select);
	var select_value;
	$.init_select(select);
	$.reset(div);
	$.template_effect(($0) => {
		if (select_value !== (select_value = $0)) select.value = (select.__value = select_value) ?? "", $.select_option(select, select_value);
	}, [() => $pathname().split("/").filter(Boolean)[0] ?? "en"]);
	$.delegated("change", select, handleLocaleChange);
	$.append($$anchor, div);
	$.pop();
	$$cleanup();
}
$.delegate(["change"]);
var root$1 = $.from_html(`<button type="button" class="rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"> </button>`);
function ThemeToggle($$anchor, $$props) {
	$.push($$props, true);
	function getInitialMode() {
		if (typeof window === "undefined") return "auto";
		const stored = window.localStorage.getItem("theme");
		if (stored === "light" || stored === "dark" || stored === "auto") return stored;
		return "auto";
	}
	function applyThemeMode(mode) {
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		const resolved = mode === "auto" ? prefersDark ? "dark" : "light" : mode;
		document.documentElement.classList.remove("light", "dark");
		document.documentElement.classList.add(resolved);
		if (mode === "auto") document.documentElement.removeAttribute("data-theme");
		else document.documentElement.setAttribute("data-theme", mode);
		document.documentElement.style.colorScheme = resolved;
	}
	let mode = $.state("auto");
	onMount(() => {
		const initialMode = getInitialMode();
		$.set(mode, initialMode, true);
		applyThemeMode(initialMode);
	});
	$.user_effect(() => {
		if ($.get(mode) !== "auto") return;
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => applyThemeMode("auto");
		media.addEventListener("change", onChange);
		return () => media.removeEventListener("change", onChange);
	});
	function toggleMode() {
		const nextMode = $.get(mode) === "light" ? "dark" : $.get(mode) === "dark" ? "auto" : "light";
		$.set(mode, nextMode, true);
		applyThemeMode(nextMode);
		window.localStorage.setItem("theme", nextMode);
	}
	const label = $.derived(() => $.get(mode) === "auto" ? themetoggle_labelauto2() : themetoggle_labelother2({ mode: $.get(mode) }));
	const buttonText = $.derived(() => $.get(mode) === "auto" ? themetoggle_auto1() : $.get(mode) === "dark" ? themetoggle_dark1() : themetoggle_light1());
	var button = root$1();
	var text = $.only_child(button, true);
	$.template_effect(() => {
		$.set_attribute(button, "aria-label", $.get(label));
		$.set_attribute(button, "title", $.get(label));
		$.set_text(text, $.get(buttonText));
	});
	$.delegated("click", button, toggleMode);
	$.append($$anchor, button);
	$.pop();
}
$.delegate(["click"]);
var root = $.from_html(`<a class="block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent"> </a>`);
var root_1 = $.from_html(`<div class="absolute top-full left-0 w-48 pt-2" role="presentation"><div class="overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg"></div></div>`);
var root_2 = $.from_html(`<header class="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg"><nav class="container flex h-16 items-center justify-between"><div class="flex items-center gap-8"><a class="text-lg font-bold tracking-tight text-primary no-underline"> </a> <div class="hidden items-center gap-6 text-sm font-medium md:flex"><a> </a> <a> </a> <div class="relative"><button type="button" class="nav-link flex cursor-pointer items-center gap-1 border-none bg-transparent"> <!></button> <!></div></div></div> <div class="flex items-center gap-4"><a href="https://github.com/intlayer-org/benchmark-i18n" target="_blank" rel="noreferrer" class="text-muted-foreground transition hover:text-foreground"><span class="sr-only"> </span> <svg viewBox="0 0 16 16" aria-hidden="true" width="20" height="20"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a> <!> <!></div></nav></header>`);
function Header($$anchor, $$props) {
	$.push($$props, true);
	const $route = () => $.store_get(route, "$route", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	let isMockPagesOpen = $.state(false);
	const currentLocale = $.derived(() => $route().kind === "ok" ? $route().locale : "en");
	const mockPages = $.derived(() => [
		{
			to: `/${$.get(currentLocale)}/products`,
			label: header_products()
		},
		{
			to: `/${$.get(currentLocale)}/pricing`,
			label: header_pricing()
		},
		{
			to: `/${$.get(currentLocale)}/team`,
			label: header_team()
		},
		{
			to: `/${$.get(currentLocale)}/blog`,
			label: header_blog()
		},
		{
			to: `/${$.get(currentLocale)}/careers`,
			label: header_careers()
		},
		{
			to: `/${$.get(currentLocale)}/faq`,
			label: header_faq()
		},
		{
			to: `/${$.get(currentLocale)}/contact`,
			label: header_contact()
		},
		{
			to: `/${$.get(currentLocale)}/settings`,
			label: header_settings()
		}
	]);
	const homeActive = $.derived(() => $route().kind === "ok" && $route().page === "");
	const methodologyActive = $.derived(() => $route().kind === "ok" && $route().page === "about");
	var header = root_2();
	var nav = $.child(header);
	var div = $.child(nav);
	var a = $.child(div);
	var text = $.only_child(a, true);
	var div_1 = $.sibling(a, 2);
	var a_1 = $.child(div_1);
	let classes;
	var text_1 = $.only_child(a_1, true);
	var a_2 = $.sibling(a_1, 2);
	let classes_1;
	var text_2 = $.only_child(a_2, true);
	var div_2 = $.sibling(a_2, 2);
	var button = $.child(div_2);
	var text_3 = $.child(button);
	var node = $.sibling(text_3);
	{
		let $0 = $.derived(() => $.get(isMockPagesOpen) ? "transition-transform rotate-180" : "transition-transform");
		ChevronDown(node, {
			size: 14,
			get class() {
				return $.get($0);
			}
		});
	}
	$.reset(button);
	var node_1 = $.sibling(button, 2);
	var consequent = ($$anchor) => {
		var div_3 = root_1();
		var div_4 = $.child(div_3);
		$.each(div_4, 21, () => $.get(mockPages), (page) => page.to, ($$anchor, page) => {
			var a_3 = root();
			var text_4 = $.only_child(a_3, true);
			$.template_effect(() => {
				$.set_attribute(a_3, "href", $.get(page).to);
				$.set_text(text_4, $.get(page).label);
			});
			$.delegated("click", a_3, () => $.set(isMockPagesOpen, false));
			$.append($$anchor, a_3);
		});
		$.reset(div_4);
		$.reset(div_3);
		$.event("mouseenter", div_3, () => $.set(isMockPagesOpen, true));
		$.event("mouseleave", div_3, () => $.set(isMockPagesOpen, false));
		$.append($$anchor, div_3);
	};
	$.if(node_1, ($$render) => {
		if ($.get(isMockPagesOpen)) $$render(consequent);
	});
	$.reset(div_2);
	$.reset(div_1);
	$.reset(div);
	var div_5 = $.sibling(div, 2);
	var a_4 = $.child(div_5);
	var span = $.child(a_4);
	var text_5 = $.only_child(span, true);
	$.next(2);
	$.reset(a_4);
	var node_2 = $.sibling(a_4, 2);
	LocaleSwitcher(node_2, {});
	ThemeToggle($.sibling(node_2, 2), {});
	$.reset(div_5);
	$.reset(nav);
	$.reset(header);
	$.template_effect(($0, $1, $2, $3, $4) => {
		$.set_attribute(a, "href", `/${$.get(currentLocale)}`);
		$.set_text(text, $0);
		$.set_attribute(a_1, "href", `/${$.get(currentLocale)}`);
		classes = $.set_class(a_1, 1, "nav-link", null, classes, { "is-active": $.get(homeActive) });
		$.set_text(text_1, $1);
		$.set_attribute(a_2, "href", `/${$.get(currentLocale)}/about`);
		classes_1 = $.set_class(a_2, 1, "nav-link", null, classes_1, { "is-active": $.get(methodologyActive) });
		$.set_text(text_2, $2);
		$.set_text(text_3, `${$3 ?? ""} `);
		$.set_text(text_5, $4);
	}, [
		() => shared_appname1(),
		() => header_home(),
		() => header_methodology(),
		() => header_mockpages1(),
		() => shared_gotogithub2()
	]);
	$.event("mouseenter", button, () => $.set(isMockPagesOpen, true));
	$.event("mouseleave", button, () => $.set(isMockPagesOpen, false));
	$.delegated("click", button, () => $.set(isMockPagesOpen, !$.get(isMockPagesOpen)));
	$.append($$anchor, header);
	$.pop();
	$$cleanup();
}
$.delegate(["click"]);
export { Header as default };
