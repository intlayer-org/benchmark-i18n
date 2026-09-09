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
var en_settings_profile_displayname1 = () => {
	return `Display Name`;
};
var fr_settings_profile_displayname1 = () => {
	return `Nom affiché`;
};
var es_settings_profile_displayname1 = () => {
	return `Nombre visible`;
};
var de_settings_profile_displayname1 = () => {
	return `Anzeigename`;
};
var it_settings_profile_displayname1 = () => {
	return `Nome visualizzato`;
};
var pt_settings_profile_displayname1 = () => {
	return `Nome de exibição`;
};
var zh_settings_profile_displayname1 = () => {
	return `显示名称`;
};
var ja_settings_profile_displayname1 = () => {
	return `表示名`;
};
var ko_settings_profile_displayname1 = () => {
	return `Display Name`;
};
var ru_settings_profile_displayname1 = () => {
	return `Отображаемое имя`;
};
var settings_profile_displayname1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_settings_profile_displayname1(inputs);
	if (locale === "es") return es_settings_profile_displayname1(inputs);
	if (locale === "de") return de_settings_profile_displayname1(inputs);
	if (locale === "it") return it_settings_profile_displayname1(inputs);
	if (locale === "pt") return pt_settings_profile_displayname1(inputs);
	if (locale === "zh") return zh_settings_profile_displayname1(inputs);
	if (locale === "ja") return ja_settings_profile_displayname1(inputs);
	if (locale === "ko") return ko_settings_profile_displayname1(inputs);
	if (locale === "ru") return ru_settings_profile_displayname1(inputs);
	return en_settings_profile_displayname1(inputs);
});
var en_settings_profile_email = () => {
	return `Email`;
};
var fr_settings_profile_email = () => {
	return `E-mail`;
};
var es_settings_profile_email = () => {
	return `Correo electrónico`;
};
var de_settings_profile_email = () => {
	return `E-Mail`;
};
var it_settings_profile_email = () => {
	return `Email`;
};
var pt_settings_profile_email = () => {
	return `E-mail`;
};
var zh_settings_profile_email = () => {
	return `电子邮件`;
};
var ja_settings_profile_email = () => {
	return `メールアドレス`;
};
var ko_settings_profile_email = () => {
	return `Email`;
};
var ru_settings_profile_email = () => {
	return `Электронная почта`;
};
var settings_profile_email = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_settings_profile_email(inputs);
	if (locale === "es") return es_settings_profile_email(inputs);
	if (locale === "de") return de_settings_profile_email(inputs);
	if (locale === "it") return it_settings_profile_email(inputs);
	if (locale === "pt") return pt_settings_profile_email(inputs);
	if (locale === "zh") return zh_settings_profile_email(inputs);
	if (locale === "ja") return ja_settings_profile_email(inputs);
	if (locale === "ko") return ko_settings_profile_email(inputs);
	if (locale === "ru") return ru_settings_profile_email(inputs);
	return en_settings_profile_email(inputs);
});
var en_settings_profile_title = () => {
	return `Profile`;
};
var fr_settings_profile_title = () => {
	return `Profil`;
};
var es_settings_profile_title = () => {
	return `Perfil`;
};
var de_settings_profile_title = () => {
	return `Profil`;
};
var it_settings_profile_title = () => {
	return `Profilo`;
};
var pt_settings_profile_title = () => {
	return `Perfil`;
};
var zh_settings_profile_title = () => {
	return `个人资料`;
};
var ja_settings_profile_title = () => {
	return `プロフィール`;
};
var ko_settings_profile_title = () => {
	return `Profile`;
};
var ru_settings_profile_title = () => {
	return `Профиль`;
};
var settings_profile_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_settings_profile_title(inputs);
	if (locale === "es") return es_settings_profile_title(inputs);
	if (locale === "de") return de_settings_profile_title(inputs);
	if (locale === "it") return it_settings_profile_title(inputs);
	if (locale === "pt") return pt_settings_profile_title(inputs);
	if (locale === "zh") return zh_settings_profile_title(inputs);
	if (locale === "ja") return ja_settings_profile_title(inputs);
	if (locale === "ko") return ko_settings_profile_title(inputs);
	if (locale === "ru") return ru_settings_profile_title(inputs);
	return en_settings_profile_title(inputs);
});
var _tmpl$ = template(`<section class="rounded-lg border border-border bg-card p-6"><h2 class="mb-4 text-lg font-semibold text-foreground"></h2><div class=space-y-4><div><label class="mb-1 block text-sm font-medium text-foreground"></label><input defaultvalue="John Developer"class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"></div><div><label class="mb-1 block text-sm font-medium text-foreground"></label><input defaultvalue=john@example.com class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring">`);
function ProfileSection() {
	const displayNameId = createUniqueId();
	const emailId = createUniqueId();
	return (() => {
		var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$4 = _el$2.nextSibling.firstChild, _el$5 = _el$4.firstChild, _el$6 = _el$5.nextSibling, _el$8 = _el$4.nextSibling.firstChild, _el$9 = _el$8.nextSibling;
		insert(_el$2, () => settings_profile_title());
		setAttribute(_el$5, "for", displayNameId);
		insert(_el$5, () => settings_profile_displayname1());
		setAttribute(_el$6, "id", displayNameId);
		setAttribute(_el$8, "for", emailId);
		insert(_el$8, () => settings_profile_email());
		setAttribute(_el$9, "id", emailId);
		return _el$;
	})();
}
export { ProfileSection as default };
