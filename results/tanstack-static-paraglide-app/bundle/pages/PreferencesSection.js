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
var preferences_section_arabicar1$10 = () => {
	return `Arabic (ar)`;
};
var preferences_section_chinesesimplifiedzhcn3$10 = () => {
	return `Chinese Simplified (zh-CN)`;
};
var preferences_section_darkmode1$10 = () => {
	return `Dark Mode`;
};
var preferences_section_defaultlanguage1$10 = () => {
	return `Default Language`;
};
var preferences_section_emailnotifications1$10 = () => {
	return `Email Notifications`;
};
var preferences_section_englishen1$10 = () => {
	return `English (en)`;
};
var preferences_section_frenchfr1$10 = () => {
	return `French (fr)`;
};
var preferences_section_germande1$10 = () => {
	return `German (de)`;
};
var preferences_section_japaneseja1$10 = () => {
	return `Japanese (ja)`;
};
var preferences_section_preferences$10 = () => {
	return `Preferences`;
};
var preferences_section_receiveweeklybenchmarkreports3$10 = () => {
	return `Receive weekly benchmark reports`;
};
var preferences_section_spanishes1$10 = () => {
	return `Spanish (es)`;
};
var preferences_section_toggledarkmode2$10 = () => {
	return `Toggle dark mode`;
};
var preferences_section_togglenotifications1$10 = () => {
	return `Toggle notifications`;
};
var preferences_section_usedarkcolorscheme3$10 = () => {
	return `Use dark color scheme`;
};
var preferences_section_arabicar1$9 = () => {
	return `Arabe (ar)`;
};
var preferences_section_chinesesimplifiedzhcn3$9 = () => {
	return `Chinois simplifié (zh-CN)`;
};
var preferences_section_darkmode1$9 = () => {
	return `Mode sombre`;
};
var preferences_section_defaultlanguage1$9 = () => {
	return `Langue par défaut`;
};
var preferences_section_emailnotifications1$9 = () => {
	return `Notifications par email`;
};
var preferences_section_englishen1$9 = () => {
	return `Anglais (en)`;
};
var preferences_section_frenchfr1$9 = () => {
	return `Français (fr)`;
};
var preferences_section_germande1$9 = () => {
	return `Allemand (de)`;
};
var preferences_section_japaneseja1$9 = () => {
	return `Japonais (ja)`;
};
var preferences_section_preferences$9 = () => {
	return `Préférences`;
};
var preferences_section_receiveweeklybenchmarkreports3$9 = () => {
	return `Recevoir des rapports hebdomadaires de benchmark`;
};
var preferences_section_spanishes1$9 = () => {
	return `Espagnol (es)`;
};
var preferences_section_toggledarkmode2$9 = () => {
	return `Basculer le mode sombre`;
};
var preferences_section_togglenotifications1$9 = () => {
	return `Basculer les notifications`;
};
var preferences_section_usedarkcolorscheme3$9 = () => {
	return `Utiliser le schéma de couleurs sombres`;
};
var preferences_section_arabicar1$8 = () => {
	return `Árabe (ar)`;
};
var preferences_section_chinesesimplifiedzhcn3$8 = () => {
	return `Chino simplificado (zh-CN)`;
};
var preferences_section_darkmode1$8 = () => {
	return `Modo oscuro`;
};
var preferences_section_defaultlanguage1$8 = () => {
	return `Idioma predeterminado`;
};
var preferences_section_emailnotifications1$8 = () => {
	return `Notificaciones por correo electrónico`;
};
var preferences_section_englishen1$8 = () => {
	return `Inglés (en)`;
};
var preferences_section_frenchfr1$8 = () => {
	return `Francés (fr)`;
};
var preferences_section_germande1$8 = () => {
	return `Alemán (de)`;
};
var preferences_section_japaneseja1$8 = () => {
	return `Japonés (ja)`;
};
var preferences_section_preferences$8 = () => {
	return `Preferencias`;
};
var preferences_section_receiveweeklybenchmarkreports3$8 = () => {
	return `Recibir informes semanales de benchmarks`;
};
var preferences_section_spanishes1$8 = () => {
	return `Español (es)`;
};
var preferences_section_toggledarkmode2$8 = () => {
	return `Alternar modo oscuro`;
};
var preferences_section_togglenotifications1$8 = () => {
	return `Alternar notificaciones`;
};
var preferences_section_usedarkcolorscheme3$8 = () => {
	return `Usar esquema de colores oscuro`;
};
var preferences_section_arabicar1$7 = () => {
	return `Arabisch (ar)`;
};
var preferences_section_chinesesimplifiedzhcn3$7 = () => {
	return `Chinesisch vereinfacht (zh-CN)`;
};
var preferences_section_darkmode1$7 = () => {
	return `Dunkelmodus`;
};
var preferences_section_defaultlanguage1$7 = () => {
	return `Standardsprache`;
};
var preferences_section_emailnotifications1$7 = () => {
	return `E-Mail-Benachrichtigungen`;
};
var preferences_section_englishen1$7 = () => {
	return `Englisch (en)`;
};
var preferences_section_frenchfr1$7 = () => {
	return `Französisch (fr)`;
};
var preferences_section_germande1$7 = () => {
	return `Deutsch (de)`;
};
var preferences_section_japaneseja1$7 = () => {
	return `Japanisch (ja)`;
};
var preferences_section_preferences$7 = () => {
	return `Einstellungen`;
};
var preferences_section_receiveweeklybenchmarkreports3$7 = () => {
	return `Wöchentliche Benchmark-Berichte erhalten`;
};
var preferences_section_spanishes1$7 = () => {
	return `Spanisch (es)`;
};
var preferences_section_toggledarkmode2$7 = () => {
	return `Dunkelmodus umschalten`;
};
var preferences_section_togglenotifications1$7 = () => {
	return `Benachrichtigungen umschalten`;
};
var preferences_section_usedarkcolorscheme3$7 = () => {
	return `Dunkles Farbschema verwenden`;
};
var preferences_section_arabicar1$6 = () => {
	return `Arabo (ar)`;
};
var preferences_section_chinesesimplifiedzhcn3$6 = () => {
	return `Cinese semplificato (zh-CN)`;
};
var preferences_section_darkmode1$6 = () => {
	return `Modalità scura`;
};
var preferences_section_defaultlanguage1$6 = () => {
	return `Lingua predefinita`;
};
var preferences_section_emailnotifications1$6 = () => {
	return `Notifiche via email`;
};
var preferences_section_englishen1$6 = () => {
	return `Inglese (en)`;
};
var preferences_section_frenchfr1$6 = () => {
	return `Francese (fr)`;
};
var preferences_section_germande1$6 = () => {
	return `Tedesco (de)`;
};
var preferences_section_japaneseja1$6 = () => {
	return `Giapponese (ja)`;
};
var preferences_section_preferences$6 = () => {
	return `Preferenze`;
};
var preferences_section_receiveweeklybenchmarkreports3$6 = () => {
	return `Ricevi rapporti settimanali sui benchmark`;
};
var preferences_section_spanishes1$6 = () => {
	return `Spagnolo (es)`;
};
var preferences_section_toggledarkmode2$6 = () => {
	return `Attiva/disattiva modalità scura`;
};
var preferences_section_togglenotifications1$6 = () => {
	return `Attiva/disattiva notifiche`;
};
var preferences_section_usedarkcolorscheme3$6 = () => {
	return `Usa lo schema colori scuro`;
};
var preferences_section_arabicar1$5 = () => {
	return `Árabe (ar)`;
};
var preferences_section_chinesesimplifiedzhcn3$5 = () => {
	return `Chinês simplificado (zh-CN)`;
};
var preferences_section_darkmode1$5 = () => {
	return `Modo Escuro`;
};
var preferences_section_defaultlanguage1$5 = () => {
	return `Idioma Padrão`;
};
var preferences_section_emailnotifications1$5 = () => {
	return `Notifiche por e-mail`;
};
var preferences_section_englishen1$5 = () => {
	return `Inglês (en)`;
};
var preferences_section_frenchfr1$5 = () => {
	return `Francês (fr)`;
};
var preferences_section_germande1$5 = () => {
	return `Alemão (de)`;
};
var preferences_section_japaneseja1$5 = () => {
	return `Japonês (ja)`;
};
var preferences_section_preferences$5 = () => {
	return `Preferências`;
};
var preferences_section_receiveweeklybenchmarkreports3$5 = () => {
	return `Receber relatórios semanais de benchmarks`;
};
var preferences_section_spanishes1$5 = () => {
	return `Espanhol (es)`;
};
var preferences_section_toggledarkmode2$5 = () => {
	return `Alternar modo escuro`;
};
var preferences_section_togglenotifications1$5 = () => {
	return `Alternar notificações`;
};
var preferences_section_usedarkcolorscheme3$5 = () => {
	return `Usar esquema de cores escuras`;
};
var preferences_section_arabicar1$4 = () => {
	return `阿拉伯语 (ar)`;
};
var preferences_section_chinesesimplifiedzhcn3$4 = () => {
	return `简体中文 (zh-CN)`;
};
var preferences_section_darkmode1$4 = () => {
	return `深色模式`;
};
var preferences_section_defaultlanguage1$4 = () => {
	return `默认语言`;
};
var preferences_section_emailnotifications1$4 = () => {
	return `邮件通知`;
};
var preferences_section_englishen1$4 = () => {
	return `英语 (en)`;
};
var preferences_section_frenchfr1$4 = () => {
	return `法语 (fr)`;
};
var preferences_section_germande1$4 = () => {
	return `德语 (de)`;
};
var preferences_section_japaneseja1$4 = () => {
	return `日语 (ja)`;
};
var preferences_section_preferences$4 = () => {
	return `偏好设置`;
};
var preferences_section_receiveweeklybenchmarkreports3$4 = () => {
	return `接收每周基准测试报告`;
};
var preferences_section_spanishes1$4 = () => {
	return `西班牙语 (es)`;
};
var preferences_section_toggledarkmode2$4 = () => {
	return `切换深色模式`;
};
var preferences_section_togglenotifications1$4 = () => {
	return `切换通知`;
};
var preferences_section_usedarkcolorscheme3$4 = () => {
	return `使用深色配色方案`;
};
var preferences_section_arabicar1$3 = () => {
	return `アラビア語 (ar)`;
};
var preferences_section_chinesesimplifiedzhcn3$3 = () => {
	return `中国語 簡体字 (zh-CN)`;
};
var preferences_section_darkmode1$3 = () => {
	return `ダークモード`;
};
var preferences_section_defaultlanguage1$3 = () => {
	return `既定の言語`;
};
var preferences_section_emailnotifications1$3 = () => {
	return `メール通知`;
};
var preferences_section_englishen1$3 = () => {
	return `英語 (en)`;
};
var preferences_section_frenchfr1$3 = () => {
	return `フランス語 (fr)`;
};
var preferences_section_germande1$3 = () => {
	return `ドイツ語 (de)`;
};
var preferences_section_japaneseja1$3 = () => {
	return `日本語 (ja)`;
};
var preferences_section_preferences$3 = () => {
	return `設定`;
};
var preferences_section_receiveweeklybenchmarkreports3$3 = () => {
	return `毎週のベンチマークレポートを受け取る`;
};
var preferences_section_spanishes1$3 = () => {
	return `スペイン語 (es)`;
};
var preferences_section_toggledarkmode2$3 = () => {
	return `ダークモードの切り替え`;
};
var preferences_section_togglenotifications1$3 = () => {
	return `通知の切り替え`;
};
var preferences_section_usedarkcolorscheme3$3 = () => {
	return `ダークカラーの配色を使用する`;
};
var preferences_section_arabicar1$2 = () => {
	return `아랍어 (ar)`;
};
var preferences_section_chinesesimplifiedzhcn3$2 = () => {
	return `중국어 간체 (zh-CN)`;
};
var preferences_section_darkmode1$2 = () => {
	return `다크 모드`;
};
var preferences_section_defaultlanguage1$2 = () => {
	return `기본 언어`;
};
var preferences_section_emailnotifications1$2 = () => {
	return `이메일 알림`;
};
var preferences_section_englishen1$2 = () => {
	return `영어 (en)`;
};
var preferences_section_frenchfr1$2 = () => {
	return `프랑스어 (fr)`;
};
var preferences_section_germande1$2 = () => {
	return `독일어 (de)`;
};
var preferences_section_japaneseja1$2 = () => {
	return `일본어 (ja)`;
};
var preferences_section_preferences$2 = () => {
	return `환경 설정`;
};
var preferences_section_receiveweeklybenchmarkreports3$2 = () => {
	return `주간 벤치마크 보고서 받기`;
};
var preferences_section_spanishes1$2 = () => {
	return `스페인어 (es)`;
};
var preferences_section_toggledarkmode2$2 = () => {
	return `다크 모드 토글`;
};
var preferences_section_togglenotifications1$2 = () => {
	return `알림 토글`;
};
var preferences_section_usedarkcolorscheme3$2 = () => {
	return `어두운 색상 테마 사용`;
};
var preferences_section_arabicar1$1 = () => {
	return `Арабский (ar)`;
};
var preferences_section_chinesesimplifiedzhcn3$1 = () => {
	return `Китайский упрощенный (zh-CN)`;
};
var preferences_section_darkmode1$1 = () => {
	return `Темный режим`;
};
var preferences_section_defaultlanguage1$1 = () => {
	return `Язык по умолчанию`;
};
var preferences_section_emailnotifications1$1 = () => {
	return `Уведомления по эл. почте`;
};
var preferences_section_englishen1$1 = () => {
	return `Английский (en)`;
};
var preferences_section_frenchfr1$1 = () => {
	return `Французский (fr)`;
};
var preferences_section_germande1$1 = () => {
	return `Немецкий (de)`;
};
var preferences_section_japaneseja1$1 = () => {
	return `Японский (ja)`;
};
var preferences_section_preferences$1 = () => {
	return `Настройки`;
};
var preferences_section_receiveweeklybenchmarkreports3$1 = () => {
	return `Получать еженедельные отчеты о бенчмарках`;
};
var preferences_section_spanishes1$1 = () => {
	return `Испанский (es)`;
};
var preferences_section_toggledarkmode2$1 = () => {
	return `Переключить темный режим`;
};
var preferences_section_togglenotifications1$1 = () => {
	return `Переключить уведомления`;
};
var preferences_section_usedarkcolorscheme3$1 = () => {
	return `Использовать темную цветовую схему`;
};
var preferences_section_arabicar1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return preferences_section_arabicar1$9(inputs);
	if (locale === "es") return preferences_section_arabicar1$8(inputs);
	if (locale === "de") return preferences_section_arabicar1$7(inputs);
	if (locale === "it") return preferences_section_arabicar1$6(inputs);
	if (locale === "pt") return preferences_section_arabicar1$5(inputs);
	if (locale === "zh") return preferences_section_arabicar1$4(inputs);
	if (locale === "ja") return preferences_section_arabicar1$3(inputs);
	if (locale === "ko") return preferences_section_arabicar1$2(inputs);
	if (locale === "ru") return preferences_section_arabicar1$1(inputs);
	return preferences_section_arabicar1$10(inputs);
});
var preferences_section_chinesesimplifiedzhcn3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return preferences_section_chinesesimplifiedzhcn3$9(inputs);
	if (locale === "es") return preferences_section_chinesesimplifiedzhcn3$8(inputs);
	if (locale === "de") return preferences_section_chinesesimplifiedzhcn3$7(inputs);
	if (locale === "it") return preferences_section_chinesesimplifiedzhcn3$6(inputs);
	if (locale === "pt") return preferences_section_chinesesimplifiedzhcn3$5(inputs);
	if (locale === "zh") return preferences_section_chinesesimplifiedzhcn3$4(inputs);
	if (locale === "ja") return preferences_section_chinesesimplifiedzhcn3$3(inputs);
	if (locale === "ko") return preferences_section_chinesesimplifiedzhcn3$2(inputs);
	if (locale === "ru") return preferences_section_chinesesimplifiedzhcn3$1(inputs);
	return preferences_section_chinesesimplifiedzhcn3$10(inputs);
});
var preferences_section_darkmode1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return preferences_section_darkmode1$9(inputs);
	if (locale === "es") return preferences_section_darkmode1$8(inputs);
	if (locale === "de") return preferences_section_darkmode1$7(inputs);
	if (locale === "it") return preferences_section_darkmode1$6(inputs);
	if (locale === "pt") return preferences_section_darkmode1$5(inputs);
	if (locale === "zh") return preferences_section_darkmode1$4(inputs);
	if (locale === "ja") return preferences_section_darkmode1$3(inputs);
	if (locale === "ko") return preferences_section_darkmode1$2(inputs);
	if (locale === "ru") return preferences_section_darkmode1$1(inputs);
	return preferences_section_darkmode1$10(inputs);
});
var preferences_section_defaultlanguage1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return preferences_section_defaultlanguage1$9(inputs);
	if (locale === "es") return preferences_section_defaultlanguage1$8(inputs);
	if (locale === "de") return preferences_section_defaultlanguage1$7(inputs);
	if (locale === "it") return preferences_section_defaultlanguage1$6(inputs);
	if (locale === "pt") return preferences_section_defaultlanguage1$5(inputs);
	if (locale === "zh") return preferences_section_defaultlanguage1$4(inputs);
	if (locale === "ja") return preferences_section_defaultlanguage1$3(inputs);
	if (locale === "ko") return preferences_section_defaultlanguage1$2(inputs);
	if (locale === "ru") return preferences_section_defaultlanguage1$1(inputs);
	return preferences_section_defaultlanguage1$10(inputs);
});
var preferences_section_emailnotifications1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return preferences_section_emailnotifications1$9(inputs);
	if (locale === "es") return preferences_section_emailnotifications1$8(inputs);
	if (locale === "de") return preferences_section_emailnotifications1$7(inputs);
	if (locale === "it") return preferences_section_emailnotifications1$6(inputs);
	if (locale === "pt") return preferences_section_emailnotifications1$5(inputs);
	if (locale === "zh") return preferences_section_emailnotifications1$4(inputs);
	if (locale === "ja") return preferences_section_emailnotifications1$3(inputs);
	if (locale === "ko") return preferences_section_emailnotifications1$2(inputs);
	if (locale === "ru") return preferences_section_emailnotifications1$1(inputs);
	return preferences_section_emailnotifications1$10(inputs);
});
var preferences_section_englishen1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return preferences_section_englishen1$9(inputs);
	if (locale === "es") return preferences_section_englishen1$8(inputs);
	if (locale === "de") return preferences_section_englishen1$7(inputs);
	if (locale === "it") return preferences_section_englishen1$6(inputs);
	if (locale === "pt") return preferences_section_englishen1$5(inputs);
	if (locale === "zh") return preferences_section_englishen1$4(inputs);
	if (locale === "ja") return preferences_section_englishen1$3(inputs);
	if (locale === "ko") return preferences_section_englishen1$2(inputs);
	if (locale === "ru") return preferences_section_englishen1$1(inputs);
	return preferences_section_englishen1$10(inputs);
});
var preferences_section_frenchfr1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return preferences_section_frenchfr1$9(inputs);
	if (locale === "es") return preferences_section_frenchfr1$8(inputs);
	if (locale === "de") return preferences_section_frenchfr1$7(inputs);
	if (locale === "it") return preferences_section_frenchfr1$6(inputs);
	if (locale === "pt") return preferences_section_frenchfr1$5(inputs);
	if (locale === "zh") return preferences_section_frenchfr1$4(inputs);
	if (locale === "ja") return preferences_section_frenchfr1$3(inputs);
	if (locale === "ko") return preferences_section_frenchfr1$2(inputs);
	if (locale === "ru") return preferences_section_frenchfr1$1(inputs);
	return preferences_section_frenchfr1$10(inputs);
});
var preferences_section_germande1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return preferences_section_germande1$9(inputs);
	if (locale === "es") return preferences_section_germande1$8(inputs);
	if (locale === "de") return preferences_section_germande1$7(inputs);
	if (locale === "it") return preferences_section_germande1$6(inputs);
	if (locale === "pt") return preferences_section_germande1$5(inputs);
	if (locale === "zh") return preferences_section_germande1$4(inputs);
	if (locale === "ja") return preferences_section_germande1$3(inputs);
	if (locale === "ko") return preferences_section_germande1$2(inputs);
	if (locale === "ru") return preferences_section_germande1$1(inputs);
	return preferences_section_germande1$10(inputs);
});
var preferences_section_japaneseja1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return preferences_section_japaneseja1$9(inputs);
	if (locale === "es") return preferences_section_japaneseja1$8(inputs);
	if (locale === "de") return preferences_section_japaneseja1$7(inputs);
	if (locale === "it") return preferences_section_japaneseja1$6(inputs);
	if (locale === "pt") return preferences_section_japaneseja1$5(inputs);
	if (locale === "zh") return preferences_section_japaneseja1$4(inputs);
	if (locale === "ja") return preferences_section_japaneseja1$3(inputs);
	if (locale === "ko") return preferences_section_japaneseja1$2(inputs);
	if (locale === "ru") return preferences_section_japaneseja1$1(inputs);
	return preferences_section_japaneseja1$10(inputs);
});
var preferences_section_preferences = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return preferences_section_preferences$9(inputs);
	if (locale === "es") return preferences_section_preferences$8(inputs);
	if (locale === "de") return preferences_section_preferences$7(inputs);
	if (locale === "it") return preferences_section_preferences$6(inputs);
	if (locale === "pt") return preferences_section_preferences$5(inputs);
	if (locale === "zh") return preferences_section_preferences$4(inputs);
	if (locale === "ja") return preferences_section_preferences$3(inputs);
	if (locale === "ko") return preferences_section_preferences$2(inputs);
	if (locale === "ru") return preferences_section_preferences$1(inputs);
	return preferences_section_preferences$10(inputs);
});
var preferences_section_receiveweeklybenchmarkreports3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return preferences_section_receiveweeklybenchmarkreports3$9(inputs);
	if (locale === "es") return preferences_section_receiveweeklybenchmarkreports3$8(inputs);
	if (locale === "de") return preferences_section_receiveweeklybenchmarkreports3$7(inputs);
	if (locale === "it") return preferences_section_receiveweeklybenchmarkreports3$6(inputs);
	if (locale === "pt") return preferences_section_receiveweeklybenchmarkreports3$5(inputs);
	if (locale === "zh") return preferences_section_receiveweeklybenchmarkreports3$4(inputs);
	if (locale === "ja") return preferences_section_receiveweeklybenchmarkreports3$3(inputs);
	if (locale === "ko") return preferences_section_receiveweeklybenchmarkreports3$2(inputs);
	if (locale === "ru") return preferences_section_receiveweeklybenchmarkreports3$1(inputs);
	return preferences_section_receiveweeklybenchmarkreports3$10(inputs);
});
var preferences_section_spanishes1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return preferences_section_spanishes1$9(inputs);
	if (locale === "es") return preferences_section_spanishes1$8(inputs);
	if (locale === "de") return preferences_section_spanishes1$7(inputs);
	if (locale === "it") return preferences_section_spanishes1$6(inputs);
	if (locale === "pt") return preferences_section_spanishes1$5(inputs);
	if (locale === "zh") return preferences_section_spanishes1$4(inputs);
	if (locale === "ja") return preferences_section_spanishes1$3(inputs);
	if (locale === "ko") return preferences_section_spanishes1$2(inputs);
	if (locale === "ru") return preferences_section_spanishes1$1(inputs);
	return preferences_section_spanishes1$10(inputs);
});
var preferences_section_toggledarkmode2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return preferences_section_toggledarkmode2$9(inputs);
	if (locale === "es") return preferences_section_toggledarkmode2$8(inputs);
	if (locale === "de") return preferences_section_toggledarkmode2$7(inputs);
	if (locale === "it") return preferences_section_toggledarkmode2$6(inputs);
	if (locale === "pt") return preferences_section_toggledarkmode2$5(inputs);
	if (locale === "zh") return preferences_section_toggledarkmode2$4(inputs);
	if (locale === "ja") return preferences_section_toggledarkmode2$3(inputs);
	if (locale === "ko") return preferences_section_toggledarkmode2$2(inputs);
	if (locale === "ru") return preferences_section_toggledarkmode2$1(inputs);
	return preferences_section_toggledarkmode2$10(inputs);
});
var preferences_section_togglenotifications1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return preferences_section_togglenotifications1$9(inputs);
	if (locale === "es") return preferences_section_togglenotifications1$8(inputs);
	if (locale === "de") return preferences_section_togglenotifications1$7(inputs);
	if (locale === "it") return preferences_section_togglenotifications1$6(inputs);
	if (locale === "pt") return preferences_section_togglenotifications1$5(inputs);
	if (locale === "zh") return preferences_section_togglenotifications1$4(inputs);
	if (locale === "ja") return preferences_section_togglenotifications1$3(inputs);
	if (locale === "ko") return preferences_section_togglenotifications1$2(inputs);
	if (locale === "ru") return preferences_section_togglenotifications1$1(inputs);
	return preferences_section_togglenotifications1$10(inputs);
});
var preferences_section_usedarkcolorscheme3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return preferences_section_usedarkcolorscheme3$9(inputs);
	if (locale === "es") return preferences_section_usedarkcolorscheme3$8(inputs);
	if (locale === "de") return preferences_section_usedarkcolorscheme3$7(inputs);
	if (locale === "it") return preferences_section_usedarkcolorscheme3$6(inputs);
	if (locale === "pt") return preferences_section_usedarkcolorscheme3$5(inputs);
	if (locale === "zh") return preferences_section_usedarkcolorscheme3$4(inputs);
	if (locale === "ja") return preferences_section_usedarkcolorscheme3$3(inputs);
	if (locale === "ko") return preferences_section_usedarkcolorscheme3$2(inputs);
	if (locale === "ru") return preferences_section_usedarkcolorscheme3$1(inputs);
	return preferences_section_usedarkcolorscheme3$10(inputs);
});
var _jsxFileName$2 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/settings/PreferencesSection.tsx";
function PreferencesSection() {
	const languageId = useId();
	return jsxDEV("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [jsxDEV("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: preferences_section_preferences()
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 9,
			columnNumber: 7
		}, this), jsxDEV("div", {
			className: "space-y-4",
			children: [
				jsxDEV("div", {
					className: "flex items-center justify-between",
					children: [jsxDEV("div", { children: [jsxDEV("p", {
						className: "text-sm font-medium text-foreground",
						children: preferences_section_emailnotifications1()
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 15,
						columnNumber: 13
					}, this), jsxDEV("p", {
						className: "text-xs text-muted-foreground",
						children: preferences_section_receiveweeklybenchmarkreports3()
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 18,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 14,
						columnNumber: 11
					}, this), jsxDEV("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-primary transition-colors",
						"aria-label": preferences_section_togglenotifications1(),
						children: jsxDEV("span", { className: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 27,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 22,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 13,
					columnNumber: 9
				}, this),
				jsxDEV("div", {
					className: "flex items-center justify-between",
					children: [jsxDEV("div", { children: [jsxDEV("p", {
						className: "text-sm font-medium text-foreground",
						children: preferences_section_darkmode1()
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 32,
						columnNumber: 13
					}, this), jsxDEV("p", {
						className: "text-xs text-muted-foreground",
						children: preferences_section_usedarkcolorscheme3()
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 35,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 31,
						columnNumber: 11
					}, this), jsxDEV("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-muted transition-colors",
						"aria-label": preferences_section_toggledarkmode2(),
						children: jsxDEV("span", { className: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 44,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 39,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 30,
					columnNumber: 9
				}, this),
				jsxDEV("div", { children: [jsxDEV("label", {
					htmlFor: languageId,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: preferences_section_defaultlanguage1()
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 48,
					columnNumber: 11
				}, this), jsxDEV("select", {
					id: languageId,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					children: [
						jsxDEV("option", { children: preferences_section_englishen1() }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 58,
							columnNumber: 13
						}, this),
						jsxDEV("option", { children: preferences_section_frenchfr1() }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 59,
							columnNumber: 13
						}, this),
						jsxDEV("option", { children: preferences_section_germande1() }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 60,
							columnNumber: 13
						}, this),
						jsxDEV("option", { children: preferences_section_spanishes1() }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 61,
							columnNumber: 13
						}, this),
						jsxDEV("option", { children: preferences_section_japaneseja1() }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 62,
							columnNumber: 13
						}, this),
						jsxDEV("option", { children: preferences_section_chinesesimplifiedzhcn3() }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 63,
							columnNumber: 13
						}, this),
						jsxDEV("option", { children: preferences_section_arabicar1() }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 64,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 54,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 47,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 12,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 8,
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
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/settings/PreferencesSection.wrapper.tsx";
function Wrapped() {
	return jsxDEV(Wrapper, { children: jsxDEV(PreferencesSection, {}, void 0, false, {
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
