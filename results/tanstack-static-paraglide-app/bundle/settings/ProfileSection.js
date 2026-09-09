import { useId } from "react";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
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
var profile_section_displayname1$10 = () => {
	return `Display Name`;
};
var profile_section_email$10 = () => {
	return `Email`;
};
var profile_section_profile$10 = () => {
	return `Profile`;
};
var profile_section_displayname1$9 = () => {
	return `Nom d'affichage`;
};
var profile_section_email$9 = () => {
	return `Email`;
};
var profile_section_profile$9 = () => {
	return `Profil`;
};
var profile_section_displayname1$8 = () => {
	return `Nombre visible`;
};
var profile_section_email$8 = () => {
	return `Correo electrónico`;
};
var profile_section_profile$8 = () => {
	return `Perfil`;
};
var profile_section_displayname1$7 = () => {
	return `Anzeigename`;
};
var profile_section_email$7 = () => {
	return `E-Mail`;
};
var profile_section_profile$7 = () => {
	return `Profil`;
};
var profile_section_displayname1$6 = () => {
	return `Nome visualizzato`;
};
var profile_section_email$6 = () => {
	return `Email`;
};
var profile_section_profile$6 = () => {
	return `Profilo`;
};
var profile_section_displayname1$5 = () => {
	return `Nome de exibição`;
};
var profile_section_email$5 = () => {
	return `E-mail`;
};
var profile_section_profile$5 = () => {
	return `Perfil`;
};
var profile_section_displayname1$4 = () => {
	return `显示名称`;
};
var profile_section_email$4 = () => {
	return `邮件地址`;
};
var profile_section_profile$4 = () => {
	return `个人资料`;
};
var profile_section_displayname1$3 = () => {
	return `表示名`;
};
var profile_section_email$3 = () => {
	return `メールアドレス`;
};
var profile_section_profile$3 = () => {
	return `プロファイル`;
};
var profile_section_displayname1$2 = () => {
	return `표시 이름`;
};
var profile_section_email$2 = () => {
	return `이메일 주소`;
};
var profile_section_profile$2 = () => {
	return `프로필`;
};
var profile_section_displayname1$1 = () => {
	return `Отображаемое имя`;
};
var profile_section_email$1 = () => {
	return `Эл. почта`;
};
var profile_section_profile$1 = () => {
	return `Профиль`;
};
var profile_section_displayname1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return profile_section_displayname1$9(inputs);
	if (locale === "es") return profile_section_displayname1$8(inputs);
	if (locale === "de") return profile_section_displayname1$7(inputs);
	if (locale === "it") return profile_section_displayname1$6(inputs);
	if (locale === "pt") return profile_section_displayname1$5(inputs);
	if (locale === "zh") return profile_section_displayname1$4(inputs);
	if (locale === "ja") return profile_section_displayname1$3(inputs);
	if (locale === "ko") return profile_section_displayname1$2(inputs);
	if (locale === "ru") return profile_section_displayname1$1(inputs);
	return profile_section_displayname1$10(inputs);
});
var profile_section_email = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return profile_section_email$9(inputs);
	if (locale === "es") return profile_section_email$8(inputs);
	if (locale === "de") return profile_section_email$7(inputs);
	if (locale === "it") return profile_section_email$6(inputs);
	if (locale === "pt") return profile_section_email$5(inputs);
	if (locale === "zh") return profile_section_email$4(inputs);
	if (locale === "ja") return profile_section_email$3(inputs);
	if (locale === "ko") return profile_section_email$2(inputs);
	if (locale === "ru") return profile_section_email$1(inputs);
	return profile_section_email$10(inputs);
});
var profile_section_profile = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return profile_section_profile$9(inputs);
	if (locale === "es") return profile_section_profile$8(inputs);
	if (locale === "de") return profile_section_profile$7(inputs);
	if (locale === "it") return profile_section_profile$6(inputs);
	if (locale === "pt") return profile_section_profile$5(inputs);
	if (locale === "zh") return profile_section_profile$4(inputs);
	if (locale === "ja") return profile_section_profile$3(inputs);
	if (locale === "ko") return profile_section_profile$2(inputs);
	if (locale === "ru") return profile_section_profile$1(inputs);
	return profile_section_profile$10(inputs);
});
var _jsxFileName$2 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/settings/ProfileSection.tsx";
function ProfileSection() {
	const displayNameId = useId();
	const emailId = useId();
	return jsxDEV("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [jsxDEV("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: profile_section_profile()
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 10,
			columnNumber: 7
		}, this), jsxDEV("div", {
			className: "space-y-4",
			children: [jsxDEV("div", { children: [jsxDEV("label", {
				htmlFor: displayNameId,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: profile_section_displayname1()
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 15,
				columnNumber: 11
			}, this), jsxDEV("input", {
				id: displayNameId,
				defaultValue: "John Developer",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 21,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 14,
				columnNumber: 9
			}, this), jsxDEV("div", { children: [jsxDEV("label", {
				htmlFor: emailId,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: profile_section_email()
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 28,
				columnNumber: 11
			}, this), jsxDEV("input", {
				id: emailId,
				defaultValue: "john@example.com",
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 34,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 27,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 13,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/scripts/Wrapper.tsx";
setLocale("en", { reload: false });
function Wrapper({ children }) {
	return jsxDEV(Fragment, { children }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/settings/ProfileSection.wrapper.tsx";
function Wrapped() {
	return jsxDEV(Wrapper, { children: jsxDEV(ProfileSection, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Wrapped as default };
