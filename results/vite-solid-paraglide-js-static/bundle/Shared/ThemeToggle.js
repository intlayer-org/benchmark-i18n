import { delegateEvents, effect, insert, setAttribute, template } from "solid-js/web";
import { createEffect, createSignal, onMount } from "solid-js";
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
var _tmpl$ = template(`<button type=button class="rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80">`);
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
	const [mode, setMode] = createSignal("auto");
	onMount(() => {
		const initialMode = getInitialMode();
		setMode(initialMode);
		applyThemeMode(initialMode);
	});
	createEffect(() => {
		if (mode() !== "auto") return;
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => applyThemeMode("auto");
		media.addEventListener("change", onChange);
		return () => {
			media.removeEventListener("change", onChange);
		};
	});
	function toggleMode() {
		const current = mode();
		const nextMode = current === "light" ? "dark" : current === "dark" ? "auto" : "light";
		setMode(nextMode);
		applyThemeMode(nextMode);
		window.localStorage.setItem("theme", nextMode);
	}
	const label = () => mode() === "auto" ? themetoggle_labelauto2() : themetoggle_labelother2({ mode: mode() });
	const buttonText = () => mode() === "auto" ? themetoggle_auto1() : mode() === "dark" ? themetoggle_dark1() : themetoggle_light1();
	return (() => {
		var _el$ = _tmpl$();
		_el$.$$click = toggleMode;
		insert(_el$, buttonText);
		effect((_p$) => {
			var _v$ = label(), _v$2 = label();
			_v$ !== _p$.e && setAttribute(_el$, "aria-label", _p$.e = _v$);
			_v$2 !== _p$.t && setAttribute(_el$, "title", _p$.t = _v$2);
			return _p$;
		}, {
			e: void 0,
			t: void 0
		});
		return _el$;
	})();
}
delegateEvents(["click"]);
export { ThemeToggle as default };
