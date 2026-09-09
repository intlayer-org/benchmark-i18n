import { useEffect, useState } from "react";
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
var theme_toggle_themeauto1$10 = () => {
	return `Theme: Auto`;
};
var theme_toggle_themedark1$10 = () => {
	return `Theme: Dark`;
};
var theme_toggle_themelight1$10 = () => {
	return `Theme: Light`;
};
var theme_toggle_thememodeautosystemclick4$10 = () => {
	return `Theme mode: auto (system). Click to switch to light mode.`;
};
var theme_toggle_thememodedarkclick3$10 = () => {
	return `Theme mode: dark. Click to switch to auto (system) mode.`;
};
var theme_toggle_thememodelightclick3$10 = () => {
	return `Theme mode: light. Click to switch to dark mode.`;
};
var theme_toggle_themeauto1$9 = () => {
	return `Thème : Auto`;
};
var theme_toggle_themedark1$9 = () => {
	return `Thème : Sombre`;
};
var theme_toggle_themelight1$9 = () => {
	return `Thème : Clair`;
};
var theme_toggle_thememodeautosystemclick4$9 = () => {
	return `Mode thématique : auto (système). Cliquez pour passer en mode clair.`;
};
var theme_toggle_thememodedarkclick3$9 = () => {
	return `Mode thématique : sombre. Cliquez pour passer en mode auto (système).`;
};
var theme_toggle_thememodelightclick3$9 = () => {
	return `Mode thématique : clair. Cliquez pour passer en mode sombre.`;
};
var theme_toggle_themeauto1$8 = () => {
	return `Tema: Auto`;
};
var theme_toggle_themedark1$8 = () => {
	return `Tema: Oscuro`;
};
var theme_toggle_themelight1$8 = () => {
	return `Tema: Claro`;
};
var theme_toggle_thememodeautosystemclick4$8 = () => {
	return `Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.`;
};
var theme_toggle_thememodedarkclick3$8 = () => {
	return `Modo de tema: oscuro. Haz clic para cambiar al modo automático (sistema).`;
};
var theme_toggle_thememodelightclick3$8 = () => {
	return `Modo de tema: claro. Haz clic para cambiar al modo oscuro.`;
};
var theme_toggle_themeauto1$7 = () => {
	return `Thema: Auto`;
};
var theme_toggle_themedark1$7 = () => {
	return `Thema: Dunkel`;
};
var theme_toggle_themelight1$7 = () => {
	return `Thema: Hell`;
};
var theme_toggle_thememodeautosystemclick4$7 = () => {
	return `Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.`;
};
var theme_toggle_thememodedarkclick3$7 = () => {
	return `Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.`;
};
var theme_toggle_thememodelightclick3$7 = () => {
	return `Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.`;
};
var theme_toggle_themeauto1$6 = () => {
	return `Tema: Auto`;
};
var theme_toggle_themedark1$6 = () => {
	return `Tema: Scuro`;
};
var theme_toggle_themelight1$6 = () => {
	return `Tema: Chiaro`;
};
var theme_toggle_thememodeautosystemclick4$6 = () => {
	return `Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.`;
};
var theme_toggle_thememodedarkclick3$6 = () => {
	return `Modalità tema: scura. Clicca per passare alla modalità auto (sistema).`;
};
var theme_toggle_thememodelightclick3$6 = () => {
	return `Modalità tema: chiara. Clicca per passare alla modalità scura.`;
};
var theme_toggle_themeauto1$5 = () => {
	return `Tema: Auto`;
};
var theme_toggle_themedark1$5 = () => {
	return `Tema: Escuro`;
};
var theme_toggle_themelight1$5 = () => {
	return `Tema: Claro`;
};
var theme_toggle_thememodeautosystemclick4$5 = () => {
	return `Modo de tema: automático (sistema). Clique para mudar para o modo claro.`;
};
var theme_toggle_thememodedarkclick3$5 = () => {
	return `Modo de tema: escuro. Clique para mudar para o modo automático (sistema).`;
};
var theme_toggle_thememodelightclick3$5 = () => {
	return `Modo de tema: claro. Clique para mudar para o modo escuro.`;
};
var theme_toggle_themeauto1$4 = () => {
	return `主题：自动`;
};
var theme_toggle_themedark1$4 = () => {
	return `主题：暗黑`;
};
var theme_toggle_themelight1$4 = () => {
	return `主题：明亮`;
};
var theme_toggle_thememodeautosystemclick4$4 = () => {
	return `主题模式：自动（系统）。点击切换到明亮模式。`;
};
var theme_toggle_thememodedarkclick3$4 = () => {
	return `主题模式：暗黑。点击切换到自动（系统）模式。`;
};
var theme_toggle_thememodelightclick3$4 = () => {
	return `主题模式：明亮。点击切换到暗黑模式。`;
};
var theme_toggle_themeauto1$3 = () => {
	return `テーマ：自動`;
};
var theme_toggle_themedark1$3 = () => {
	return `テーマ：ダーク`;
};
var theme_toggle_themelight1$3 = () => {
	return `テーマ：ライト`;
};
var theme_toggle_thememodeautosystemclick4$3 = () => {
	return `テーマモード：自動（システム）。クリックしてライトモードに切り替えます。`;
};
var theme_toggle_thememodedarkclick3$3 = () => {
	return `テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。`;
};
var theme_toggle_thememodelightclick3$3 = () => {
	return `テーマモード：ライト。クリックしてダークモードに切り替えます。`;
};
var theme_toggle_themeauto1$2 = () => {
	return `테마: 자동`;
};
var theme_toggle_themedark1$2 = () => {
	return `테마: 다크`;
};
var theme_toggle_themelight1$2 = () => {
	return `테마: 라이트`;
};
var theme_toggle_thememodeautosystemclick4$2 = () => {
	return `테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환합니다.`;
};
var theme_toggle_thememodedarkclick3$2 = () => {
	return `테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환합니다.`;
};
var theme_toggle_thememodelightclick3$2 = () => {
	return `테마 모드: 라이트. 클릭하여 다크 모드로 전환합니다.`;
};
var theme_toggle_themeauto1$1 = () => {
	return `Тема: Авто`;
};
var theme_toggle_themedark1$1 = () => {
	return `Тема: Темная`;
};
var theme_toggle_themelight1$1 = () => {
	return `Тема: Светлая`;
};
var theme_toggle_thememodeautosystemclick4$1 = () => {
	return `Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.`;
};
var theme_toggle_thememodedarkclick3$1 = () => {
	return `Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.`;
};
var theme_toggle_thememodelightclick3$1 = () => {
	return `Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.`;
};
var theme_toggle_themeauto1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return theme_toggle_themeauto1$9(inputs);
	if (locale === "es") return theme_toggle_themeauto1$8(inputs);
	if (locale === "de") return theme_toggle_themeauto1$7(inputs);
	if (locale === "it") return theme_toggle_themeauto1$6(inputs);
	if (locale === "pt") return theme_toggle_themeauto1$5(inputs);
	if (locale === "zh") return theme_toggle_themeauto1$4(inputs);
	if (locale === "ja") return theme_toggle_themeauto1$3(inputs);
	if (locale === "ko") return theme_toggle_themeauto1$2(inputs);
	if (locale === "ru") return theme_toggle_themeauto1$1(inputs);
	return theme_toggle_themeauto1$10(inputs);
});
var theme_toggle_themedark1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return theme_toggle_themedark1$9(inputs);
	if (locale === "es") return theme_toggle_themedark1$8(inputs);
	if (locale === "de") return theme_toggle_themedark1$7(inputs);
	if (locale === "it") return theme_toggle_themedark1$6(inputs);
	if (locale === "pt") return theme_toggle_themedark1$5(inputs);
	if (locale === "zh") return theme_toggle_themedark1$4(inputs);
	if (locale === "ja") return theme_toggle_themedark1$3(inputs);
	if (locale === "ko") return theme_toggle_themedark1$2(inputs);
	if (locale === "ru") return theme_toggle_themedark1$1(inputs);
	return theme_toggle_themedark1$10(inputs);
});
var theme_toggle_themelight1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return theme_toggle_themelight1$9(inputs);
	if (locale === "es") return theme_toggle_themelight1$8(inputs);
	if (locale === "de") return theme_toggle_themelight1$7(inputs);
	if (locale === "it") return theme_toggle_themelight1$6(inputs);
	if (locale === "pt") return theme_toggle_themelight1$5(inputs);
	if (locale === "zh") return theme_toggle_themelight1$4(inputs);
	if (locale === "ja") return theme_toggle_themelight1$3(inputs);
	if (locale === "ko") return theme_toggle_themelight1$2(inputs);
	if (locale === "ru") return theme_toggle_themelight1$1(inputs);
	return theme_toggle_themelight1$10(inputs);
});
var theme_toggle_thememodeautosystemclick4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return theme_toggle_thememodeautosystemclick4$9(inputs);
	if (locale === "es") return theme_toggle_thememodeautosystemclick4$8(inputs);
	if (locale === "de") return theme_toggle_thememodeautosystemclick4$7(inputs);
	if (locale === "it") return theme_toggle_thememodeautosystemclick4$6(inputs);
	if (locale === "pt") return theme_toggle_thememodeautosystemclick4$5(inputs);
	if (locale === "zh") return theme_toggle_thememodeautosystemclick4$4(inputs);
	if (locale === "ja") return theme_toggle_thememodeautosystemclick4$3(inputs);
	if (locale === "ko") return theme_toggle_thememodeautosystemclick4$2(inputs);
	if (locale === "ru") return theme_toggle_thememodeautosystemclick4$1(inputs);
	return theme_toggle_thememodeautosystemclick4$10(inputs);
});
var theme_toggle_thememodedarkclick3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return theme_toggle_thememodedarkclick3$9(inputs);
	if (locale === "es") return theme_toggle_thememodedarkclick3$8(inputs);
	if (locale === "de") return theme_toggle_thememodedarkclick3$7(inputs);
	if (locale === "it") return theme_toggle_thememodedarkclick3$6(inputs);
	if (locale === "pt") return theme_toggle_thememodedarkclick3$5(inputs);
	if (locale === "zh") return theme_toggle_thememodedarkclick3$4(inputs);
	if (locale === "ja") return theme_toggle_thememodedarkclick3$3(inputs);
	if (locale === "ko") return theme_toggle_thememodedarkclick3$2(inputs);
	if (locale === "ru") return theme_toggle_thememodedarkclick3$1(inputs);
	return theme_toggle_thememodedarkclick3$10(inputs);
});
var theme_toggle_thememodelightclick3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return theme_toggle_thememodelightclick3$9(inputs);
	if (locale === "es") return theme_toggle_thememodelightclick3$8(inputs);
	if (locale === "de") return theme_toggle_thememodelightclick3$7(inputs);
	if (locale === "it") return theme_toggle_thememodelightclick3$6(inputs);
	if (locale === "pt") return theme_toggle_thememodelightclick3$5(inputs);
	if (locale === "zh") return theme_toggle_thememodelightclick3$4(inputs);
	if (locale === "ja") return theme_toggle_thememodelightclick3$3(inputs);
	if (locale === "ko") return theme_toggle_thememodelightclick3$2(inputs);
	if (locale === "ru") return theme_toggle_thememodelightclick3$1(inputs);
	return theme_toggle_thememodelightclick3$10(inputs);
});
var _jsxFileName$2 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/ThemeToggle.tsx";
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
function ThemeToggle() {
	const [mode, setMode] = useState("auto");
	useEffect(() => {
		const initialMode = getInitialMode();
		setMode(initialMode);
		applyThemeMode(initialMode);
	}, []);
	useEffect(() => {
		if (mode !== "auto") return;
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => applyThemeMode("auto");
		media.addEventListener("change", onChange);
		return () => {
			media.removeEventListener("change", onChange);
		};
	}, [mode]);
	function toggleMode() {
		const nextMode = mode === "light" ? "dark" : mode === "dark" ? "auto" : "light";
		setMode(nextMode);
		applyThemeMode(nextMode);
		window.localStorage.setItem("theme", nextMode);
	}
	const label = mode === "auto" ? theme_toggle_thememodeautosystemclick4() : mode === "light" ? theme_toggle_thememodelightclick3() : theme_toggle_thememodedarkclick3();
	return jsxDEV("button", {
		type: "button",
		onClick: toggleMode,
		"aria-label": label,
		title: label,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: mode === "auto" ? theme_toggle_themeauto1() : mode === "dark" ? theme_toggle_themedark1() : theme_toggle_themelight1()
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 74,
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
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/ThemeToggle.wrapper.tsx";
function Wrapped() {
	return jsxDEV(Wrapper, { children: jsxDEV(ThemeToggle, {}, void 0, false, {
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
