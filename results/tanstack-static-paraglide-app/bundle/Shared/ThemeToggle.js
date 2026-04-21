import { useEffect, useState } from "react";
import { Fragment, jsx } from "react/jsx-runtime";
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
var en_theme_toggle_thememodeautosystemclick4 = () => {
	return `Theme mode: auto (system). Click to switch to light mode.`;
};
var fr_theme_toggle_thememodeautosystemclick4 = () => {
	return `Mode thématique : auto (système). Cliquez pour passer en mode clair.`;
};
var es_theme_toggle_thememodeautosystemclick4 = () => {
	return `Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.`;
};
var de_theme_toggle_thememodeautosystemclick4 = () => {
	return `Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.`;
};
var it_theme_toggle_thememodeautosystemclick4 = () => {
	return `Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.`;
};
var pt_theme_toggle_thememodeautosystemclick4 = () => {
	return `Modo de tema: automático (sistema). Clique para mudar para o modo claro.`;
};
var zh_theme_toggle_thememodeautosystemclick4 = () => {
	return `主题模式：自动（系统）。点击切换到明亮模式。`;
};
var ja_theme_toggle_thememodeautosystemclick4 = () => {
	return `テーマモード：自動（システム）。クリックしてライトモードに切り替えます。`;
};
var ko_theme_toggle_thememodeautosystemclick4 = () => {
	return `테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환합니다.`;
};
var ru_theme_toggle_thememodeautosystemclick4 = () => {
	return `Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.`;
};
var theme_toggle_thememodeautosystemclick4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_theme_toggle_thememodeautosystemclick4(inputs);
	if (locale === "fr") return fr_theme_toggle_thememodeautosystemclick4(inputs);
	if (locale === "es") return es_theme_toggle_thememodeautosystemclick4(inputs);
	if (locale === "de") return de_theme_toggle_thememodeautosystemclick4(inputs);
	if (locale === "it") return it_theme_toggle_thememodeautosystemclick4(inputs);
	if (locale === "pt") return pt_theme_toggle_thememodeautosystemclick4(inputs);
	if (locale === "zh") return zh_theme_toggle_thememodeautosystemclick4(inputs);
	if (locale === "ja") return ja_theme_toggle_thememodeautosystemclick4(inputs);
	if (locale === "ko") return ko_theme_toggle_thememodeautosystemclick4(inputs);
	return ru_theme_toggle_thememodeautosystemclick4(inputs);
});
var en_theme_toggle_thememodelightclick3 = () => {
	return `Theme mode: light. Click to switch to dark mode.`;
};
var fr_theme_toggle_thememodelightclick3 = () => {
	return `Mode thématique : clair. Cliquez pour passer en mode sombre.`;
};
var es_theme_toggle_thememodelightclick3 = () => {
	return `Modo de tema: claro. Haz clic para cambiar al modo oscuro.`;
};
var de_theme_toggle_thememodelightclick3 = () => {
	return `Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.`;
};
var it_theme_toggle_thememodelightclick3 = () => {
	return `Modalità tema: chiara. Clicca per passare alla modalità scura.`;
};
var pt_theme_toggle_thememodelightclick3 = () => {
	return `Modo de tema: claro. Clique para mudar para o modo escuro.`;
};
var zh_theme_toggle_thememodelightclick3 = () => {
	return `主题模式：明亮。点击切换到暗黑模式。`;
};
var ja_theme_toggle_thememodelightclick3 = () => {
	return `テーマモード：ライト。クリックしてダークモードに切り替えます。`;
};
var ko_theme_toggle_thememodelightclick3 = () => {
	return `테마 모드: 라이트. 클릭하여 다크 모드로 전환합니다.`;
};
var ru_theme_toggle_thememodelightclick3 = () => {
	return `Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.`;
};
var theme_toggle_thememodelightclick3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_theme_toggle_thememodelightclick3(inputs);
	if (locale === "fr") return fr_theme_toggle_thememodelightclick3(inputs);
	if (locale === "es") return es_theme_toggle_thememodelightclick3(inputs);
	if (locale === "de") return de_theme_toggle_thememodelightclick3(inputs);
	if (locale === "it") return it_theme_toggle_thememodelightclick3(inputs);
	if (locale === "pt") return pt_theme_toggle_thememodelightclick3(inputs);
	if (locale === "zh") return zh_theme_toggle_thememodelightclick3(inputs);
	if (locale === "ja") return ja_theme_toggle_thememodelightclick3(inputs);
	if (locale === "ko") return ko_theme_toggle_thememodelightclick3(inputs);
	return ru_theme_toggle_thememodelightclick3(inputs);
});
var en_theme_toggle_thememodedarkclick3 = () => {
	return `Theme mode: dark. Click to switch to auto (system) mode.`;
};
var fr_theme_toggle_thememodedarkclick3 = () => {
	return `Mode thématique : sombre. Cliquez pour passer en mode auto (système).`;
};
var es_theme_toggle_thememodedarkclick3 = () => {
	return `Modo de tema: oscuro. Haz clic para cambiar al modo automático (sistema).`;
};
var de_theme_toggle_thememodedarkclick3 = () => {
	return `Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.`;
};
var it_theme_toggle_thememodedarkclick3 = () => {
	return `Modalità tema: scura. Clicca per passare alla modalità auto (sistema).`;
};
var pt_theme_toggle_thememodedarkclick3 = () => {
	return `Modo de tema: escuro. Clique para mudar para o modo automático (sistema).`;
};
var zh_theme_toggle_thememodedarkclick3 = () => {
	return `主题模式：暗黑。点击切换到自动（系统）模式。`;
};
var ja_theme_toggle_thememodedarkclick3 = () => {
	return `テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。`;
};
var ko_theme_toggle_thememodedarkclick3 = () => {
	return `테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환합니다.`;
};
var ru_theme_toggle_thememodedarkclick3 = () => {
	return `Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.`;
};
var theme_toggle_thememodedarkclick3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_theme_toggle_thememodedarkclick3(inputs);
	if (locale === "fr") return fr_theme_toggle_thememodedarkclick3(inputs);
	if (locale === "es") return es_theme_toggle_thememodedarkclick3(inputs);
	if (locale === "de") return de_theme_toggle_thememodedarkclick3(inputs);
	if (locale === "it") return it_theme_toggle_thememodedarkclick3(inputs);
	if (locale === "pt") return pt_theme_toggle_thememodedarkclick3(inputs);
	if (locale === "zh") return zh_theme_toggle_thememodedarkclick3(inputs);
	if (locale === "ja") return ja_theme_toggle_thememodedarkclick3(inputs);
	if (locale === "ko") return ko_theme_toggle_thememodedarkclick3(inputs);
	return ru_theme_toggle_thememodedarkclick3(inputs);
});
var en_theme_toggle_themeauto1 = () => {
	return `Theme: Auto`;
};
var fr_theme_toggle_themeauto1 = () => {
	return `Thème : Auto`;
};
var es_theme_toggle_themeauto1 = () => {
	return `Tema: Auto`;
};
var de_theme_toggle_themeauto1 = () => {
	return `Thema: Auto`;
};
var it_theme_toggle_themeauto1 = () => {
	return `Tema: Auto`;
};
var pt_theme_toggle_themeauto1 = () => {
	return `Tema: Auto`;
};
var zh_theme_toggle_themeauto1 = () => {
	return `主题：自动`;
};
var ja_theme_toggle_themeauto1 = () => {
	return `テーマ：自動`;
};
var ko_theme_toggle_themeauto1 = () => {
	return `테마: 자동`;
};
var ru_theme_toggle_themeauto1 = () => {
	return `Тема: Авто`;
};
var theme_toggle_themeauto1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_theme_toggle_themeauto1(inputs);
	if (locale === "fr") return fr_theme_toggle_themeauto1(inputs);
	if (locale === "es") return es_theme_toggle_themeauto1(inputs);
	if (locale === "de") return de_theme_toggle_themeauto1(inputs);
	if (locale === "it") return it_theme_toggle_themeauto1(inputs);
	if (locale === "pt") return pt_theme_toggle_themeauto1(inputs);
	if (locale === "zh") return zh_theme_toggle_themeauto1(inputs);
	if (locale === "ja") return ja_theme_toggle_themeauto1(inputs);
	if (locale === "ko") return ko_theme_toggle_themeauto1(inputs);
	return ru_theme_toggle_themeauto1(inputs);
});
var en_theme_toggle_themedark1 = () => {
	return `Theme: Dark`;
};
var fr_theme_toggle_themedark1 = () => {
	return `Thème : Sombre`;
};
var es_theme_toggle_themedark1 = () => {
	return `Tema: Oscuro`;
};
var de_theme_toggle_themedark1 = () => {
	return `Thema: Dunkel`;
};
var it_theme_toggle_themedark1 = () => {
	return `Tema: Scuro`;
};
var pt_theme_toggle_themedark1 = () => {
	return `Tema: Escuro`;
};
var zh_theme_toggle_themedark1 = () => {
	return `主题：暗黑`;
};
var ja_theme_toggle_themedark1 = () => {
	return `テーマ：ダーク`;
};
var ko_theme_toggle_themedark1 = () => {
	return `테마: 다크`;
};
var ru_theme_toggle_themedark1 = () => {
	return `Тема: Темная`;
};
var theme_toggle_themedark1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_theme_toggle_themedark1(inputs);
	if (locale === "fr") return fr_theme_toggle_themedark1(inputs);
	if (locale === "es") return es_theme_toggle_themedark1(inputs);
	if (locale === "de") return de_theme_toggle_themedark1(inputs);
	if (locale === "it") return it_theme_toggle_themedark1(inputs);
	if (locale === "pt") return pt_theme_toggle_themedark1(inputs);
	if (locale === "zh") return zh_theme_toggle_themedark1(inputs);
	if (locale === "ja") return ja_theme_toggle_themedark1(inputs);
	if (locale === "ko") return ko_theme_toggle_themedark1(inputs);
	return ru_theme_toggle_themedark1(inputs);
});
var en_theme_toggle_themelight1 = () => {
	return `Theme: Light`;
};
var fr_theme_toggle_themelight1 = () => {
	return `Thème : Clair`;
};
var es_theme_toggle_themelight1 = () => {
	return `Tema: Claro`;
};
var de_theme_toggle_themelight1 = () => {
	return `Thema: Hell`;
};
var it_theme_toggle_themelight1 = () => {
	return `Tema: Chiaro`;
};
var pt_theme_toggle_themelight1 = () => {
	return `Tema: Claro`;
};
var zh_theme_toggle_themelight1 = () => {
	return `主题：明亮`;
};
var ja_theme_toggle_themelight1 = () => {
	return `テーマ：ライト`;
};
var ko_theme_toggle_themelight1 = () => {
	return `테마: 라이트`;
};
var ru_theme_toggle_themelight1 = () => {
	return `Тема: Светлая`;
};
var theme_toggle_themelight1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_theme_toggle_themelight1(inputs);
	if (locale === "fr") return fr_theme_toggle_themelight1(inputs);
	if (locale === "es") return es_theme_toggle_themelight1(inputs);
	if (locale === "de") return de_theme_toggle_themelight1(inputs);
	if (locale === "it") return it_theme_toggle_themelight1(inputs);
	if (locale === "pt") return pt_theme_toggle_themelight1(inputs);
	if (locale === "zh") return zh_theme_toggle_themelight1(inputs);
	if (locale === "ja") return ja_theme_toggle_themelight1(inputs);
	if (locale === "ko") return ko_theme_toggle_themelight1(inputs);
	return ru_theme_toggle_themelight1(inputs);
});
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
	return jsx("button", {
		type: "button",
		onClick: toggleMode,
		"aria-label": label,
		title: label,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: mode === "auto" ? theme_toggle_themeauto1() : mode === "dark" ? theme_toggle_themedark1() : theme_toggle_themelight1()
	});
}
setLocale("en", { reload: false });
function Wrapper({ children }) {
	return jsx(Fragment, { children });
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(ThemeToggle, {}) });
}
export { Wrapped as default };
