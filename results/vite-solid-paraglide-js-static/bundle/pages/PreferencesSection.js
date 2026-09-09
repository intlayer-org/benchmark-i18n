import { effect, insert, setAttribute, template } from "solid-js/web";
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
var en_settings_preferences_arabic = () => {
	return `Arabic (ar)`;
};
var fr_settings_preferences_arabic = () => {
	return `Arabe (ar)`;
};
var es_settings_preferences_arabic = () => {
	return `Árabe (ar)`;
};
var de_settings_preferences_arabic = () => {
	return `Arabisch (ar)`;
};
var it_settings_preferences_arabic = () => {
	return `Arabo (ar)`;
};
var pt_settings_preferences_arabic = () => {
	return `Árabe (ar)`;
};
var zh_settings_preferences_arabic = () => {
	return `阿拉伯语 (ar)`;
};
var ja_settings_preferences_arabic = () => {
	return `アラビア語 (ar)`;
};
var ko_settings_preferences_arabic = () => {
	return `Arabic (ar)`;
};
var ru_settings_preferences_arabic = () => {
	return `Арабский (ar)`;
};
var settings_preferences_arabic = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_settings_preferences_arabic(inputs);
	if (locale === "es") return es_settings_preferences_arabic(inputs);
	if (locale === "de") return de_settings_preferences_arabic(inputs);
	if (locale === "it") return it_settings_preferences_arabic(inputs);
	if (locale === "pt") return pt_settings_preferences_arabic(inputs);
	if (locale === "zh") return zh_settings_preferences_arabic(inputs);
	if (locale === "ja") return ja_settings_preferences_arabic(inputs);
	if (locale === "ko") return ko_settings_preferences_arabic(inputs);
	if (locale === "ru") return ru_settings_preferences_arabic(inputs);
	return en_settings_preferences_arabic(inputs);
});
var en_settings_preferences_chinese = () => {
	return `Chinese Simplified (zh-CN)`;
};
var fr_settings_preferences_chinese = () => {
	return `Chinois simplifié (zh-CN)`;
};
var es_settings_preferences_chinese = () => {
	return `Chino simplificado (zh-CN)`;
};
var de_settings_preferences_chinese = () => {
	return `Chinesisch vereinfacht (zh-CN)`;
};
var it_settings_preferences_chinese = () => {
	return `Cinese semplificato (zh-CN)`;
};
var pt_settings_preferences_chinese = () => {
	return `Chinês Simplificado (zh-CN)`;
};
var zh_settings_preferences_chinese = () => {
	return `简体中文 (zh-CN)`;
};
var ja_settings_preferences_chinese = () => {
	return `中国語（簡体字） (zh-CN)`;
};
var ko_settings_preferences_chinese = () => {
	return `Chinese Simplified (zh-CN)`;
};
var ru_settings_preferences_chinese = () => {
	return `Китайский упрощенный (zh-CN)`;
};
var settings_preferences_chinese = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_settings_preferences_chinese(inputs);
	if (locale === "es") return es_settings_preferences_chinese(inputs);
	if (locale === "de") return de_settings_preferences_chinese(inputs);
	if (locale === "it") return it_settings_preferences_chinese(inputs);
	if (locale === "pt") return pt_settings_preferences_chinese(inputs);
	if (locale === "zh") return zh_settings_preferences_chinese(inputs);
	if (locale === "ja") return ja_settings_preferences_chinese(inputs);
	if (locale === "ko") return ko_settings_preferences_chinese(inputs);
	if (locale === "ru") return ru_settings_preferences_chinese(inputs);
	return en_settings_preferences_chinese(inputs);
});
var en_settings_preferences_darkcolorscheme2 = () => {
	return `Use dark color scheme`;
};
var fr_settings_preferences_darkcolorscheme2 = () => {
	return `Utiliser le thème sombre`;
};
var es_settings_preferences_darkcolorscheme2 = () => {
	return `Usar esquema de colores oscuro`;
};
var de_settings_preferences_darkcolorscheme2 = () => {
	return `Dunkles Farbschema verwenden`;
};
var it_settings_preferences_darkcolorscheme2 = () => {
	return `Usa lo schema colori scuro`;
};
var pt_settings_preferences_darkcolorscheme2 = () => {
	return `Usar esquema de cores escuro`;
};
var zh_settings_preferences_darkcolorscheme2 = () => {
	return `使用深色配色方案`;
};
var ja_settings_preferences_darkcolorscheme2 = () => {
	return `ダークカラー（暗い配色）を使用する`;
};
var ko_settings_preferences_darkcolorscheme2 = () => {
	return `Use dark color scheme`;
};
var ru_settings_preferences_darkcolorscheme2 = () => {
	return `Использовать темную цветовую схему`;
};
var settings_preferences_darkcolorscheme2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_settings_preferences_darkcolorscheme2(inputs);
	if (locale === "es") return es_settings_preferences_darkcolorscheme2(inputs);
	if (locale === "de") return de_settings_preferences_darkcolorscheme2(inputs);
	if (locale === "it") return it_settings_preferences_darkcolorscheme2(inputs);
	if (locale === "pt") return pt_settings_preferences_darkcolorscheme2(inputs);
	if (locale === "zh") return zh_settings_preferences_darkcolorscheme2(inputs);
	if (locale === "ja") return ja_settings_preferences_darkcolorscheme2(inputs);
	if (locale === "ko") return ko_settings_preferences_darkcolorscheme2(inputs);
	if (locale === "ru") return ru_settings_preferences_darkcolorscheme2(inputs);
	return en_settings_preferences_darkcolorscheme2(inputs);
});
var en_settings_preferences_darkmode1 = () => {
	return `Dark Mode`;
};
var fr_settings_preferences_darkmode1 = () => {
	return `Mode sombre`;
};
var es_settings_preferences_darkmode1 = () => {
	return `Modo oscuro`;
};
var de_settings_preferences_darkmode1 = () => {
	return `Dunkelmodus`;
};
var it_settings_preferences_darkmode1 = () => {
	return `Modalità scura`;
};
var pt_settings_preferences_darkmode1 = () => {
	return `Modo Escuro`;
};
var zh_settings_preferences_darkmode1 = () => {
	return `深色模式`;
};
var ja_settings_preferences_darkmode1 = () => {
	return `ダークモード`;
};
var ko_settings_preferences_darkmode1 = () => {
	return `Dark Mode`;
};
var ru_settings_preferences_darkmode1 = () => {
	return `Темная тема`;
};
var settings_preferences_darkmode1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_settings_preferences_darkmode1(inputs);
	if (locale === "es") return es_settings_preferences_darkmode1(inputs);
	if (locale === "de") return de_settings_preferences_darkmode1(inputs);
	if (locale === "it") return it_settings_preferences_darkmode1(inputs);
	if (locale === "pt") return pt_settings_preferences_darkmode1(inputs);
	if (locale === "zh") return zh_settings_preferences_darkmode1(inputs);
	if (locale === "ja") return ja_settings_preferences_darkmode1(inputs);
	if (locale === "ko") return ko_settings_preferences_darkmode1(inputs);
	if (locale === "ru") return ru_settings_preferences_darkmode1(inputs);
	return en_settings_preferences_darkmode1(inputs);
});
var en_settings_preferences_defaultlanguage1 = () => {
	return `Default Language`;
};
var fr_settings_preferences_defaultlanguage1 = () => {
	return `Langue par défaut`;
};
var es_settings_preferences_defaultlanguage1 = () => {
	return `Idioma predeterminado`;
};
var de_settings_preferences_defaultlanguage1 = () => {
	return `Standardsprache`;
};
var it_settings_preferences_defaultlanguage1 = () => {
	return `Lingua predefinita`;
};
var pt_settings_preferences_defaultlanguage1 = () => {
	return `Idioma padrão`;
};
var zh_settings_preferences_defaultlanguage1 = () => {
	return `默认语言`;
};
var ja_settings_preferences_defaultlanguage1 = () => {
	return `デフォルトの言語`;
};
var ko_settings_preferences_defaultlanguage1 = () => {
	return `Default Language`;
};
var ru_settings_preferences_defaultlanguage1 = () => {
	return `Язык по умолчанию`;
};
var settings_preferences_defaultlanguage1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_settings_preferences_defaultlanguage1(inputs);
	if (locale === "es") return es_settings_preferences_defaultlanguage1(inputs);
	if (locale === "de") return de_settings_preferences_defaultlanguage1(inputs);
	if (locale === "it") return it_settings_preferences_defaultlanguage1(inputs);
	if (locale === "pt") return pt_settings_preferences_defaultlanguage1(inputs);
	if (locale === "zh") return zh_settings_preferences_defaultlanguage1(inputs);
	if (locale === "ja") return ja_settings_preferences_defaultlanguage1(inputs);
	if (locale === "ko") return ko_settings_preferences_defaultlanguage1(inputs);
	if (locale === "ru") return ru_settings_preferences_defaultlanguage1(inputs);
	return en_settings_preferences_defaultlanguage1(inputs);
});
var en_settings_preferences_emailnotifications1 = () => {
	return `Email Notifications`;
};
var fr_settings_preferences_emailnotifications1 = () => {
	return `Notifications e-mail`;
};
var es_settings_preferences_emailnotifications1 = () => {
	return `Notificaciones por correo electrónico`;
};
var de_settings_preferences_emailnotifications1 = () => {
	return `E-Mail-Benachrichtigungen`;
};
var it_settings_preferences_emailnotifications1 = () => {
	return `Notifiche via email`;
};
var pt_settings_preferences_emailnotifications1 = () => {
	return `Notificações por e-mail`;
};
var zh_settings_preferences_emailnotifications1 = () => {
	return `电子邮件通知`;
};
var ja_settings_preferences_emailnotifications1 = () => {
	return `メール通知`;
};
var ko_settings_preferences_emailnotifications1 = () => {
	return `Email Notifications`;
};
var ru_settings_preferences_emailnotifications1 = () => {
	return `Уведомления по почте`;
};
var settings_preferences_emailnotifications1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_settings_preferences_emailnotifications1(inputs);
	if (locale === "es") return es_settings_preferences_emailnotifications1(inputs);
	if (locale === "de") return de_settings_preferences_emailnotifications1(inputs);
	if (locale === "it") return it_settings_preferences_emailnotifications1(inputs);
	if (locale === "pt") return pt_settings_preferences_emailnotifications1(inputs);
	if (locale === "zh") return zh_settings_preferences_emailnotifications1(inputs);
	if (locale === "ja") return ja_settings_preferences_emailnotifications1(inputs);
	if (locale === "ko") return ko_settings_preferences_emailnotifications1(inputs);
	if (locale === "ru") return ru_settings_preferences_emailnotifications1(inputs);
	return en_settings_preferences_emailnotifications1(inputs);
});
var en_settings_preferences_english = () => {
	return `English (en)`;
};
var fr_settings_preferences_english = () => {
	return `Anglais (en)`;
};
var es_settings_preferences_english = () => {
	return `Inglés (en)`;
};
var de_settings_preferences_english = () => {
	return `Englisch (en)`;
};
var it_settings_preferences_english = () => {
	return `Inglese (en)`;
};
var pt_settings_preferences_english = () => {
	return `Inglês (en)`;
};
var zh_settings_preferences_english = () => {
	return `英语 (en)`;
};
var ja_settings_preferences_english = () => {
	return `英語 (en)`;
};
var ko_settings_preferences_english = () => {
	return `English (en)`;
};
var ru_settings_preferences_english = () => {
	return `Английский (en)`;
};
var settings_preferences_english = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_settings_preferences_english(inputs);
	if (locale === "es") return es_settings_preferences_english(inputs);
	if (locale === "de") return de_settings_preferences_english(inputs);
	if (locale === "it") return it_settings_preferences_english(inputs);
	if (locale === "pt") return pt_settings_preferences_english(inputs);
	if (locale === "zh") return zh_settings_preferences_english(inputs);
	if (locale === "ja") return ja_settings_preferences_english(inputs);
	if (locale === "ko") return ko_settings_preferences_english(inputs);
	if (locale === "ru") return ru_settings_preferences_english(inputs);
	return en_settings_preferences_english(inputs);
});
var en_settings_preferences_french = () => {
	return `French (fr)`;
};
var fr_settings_preferences_french = () => {
	return `Français (fr)`;
};
var es_settings_preferences_french = () => {
	return `Francés (fr)`;
};
var de_settings_preferences_french = () => {
	return `Französisch (fr)`;
};
var it_settings_preferences_french = () => {
	return `Francese (fr)`;
};
var pt_settings_preferences_french = () => {
	return `Francés (fr)`;
};
var zh_settings_preferences_french = () => {
	return `法语 (fr)`;
};
var ja_settings_preferences_french = () => {
	return `フランス語 (fr)`;
};
var ko_settings_preferences_french = () => {
	return `French (fr)`;
};
var ru_settings_preferences_french = () => {
	return `Французский (fr)`;
};
var settings_preferences_french = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_settings_preferences_french(inputs);
	if (locale === "es") return es_settings_preferences_french(inputs);
	if (locale === "de") return de_settings_preferences_french(inputs);
	if (locale === "it") return it_settings_preferences_french(inputs);
	if (locale === "pt") return pt_settings_preferences_french(inputs);
	if (locale === "zh") return zh_settings_preferences_french(inputs);
	if (locale === "ja") return ja_settings_preferences_french(inputs);
	if (locale === "ko") return ko_settings_preferences_french(inputs);
	if (locale === "ru") return ru_settings_preferences_french(inputs);
	return en_settings_preferences_french(inputs);
});
var en_settings_preferences_german = () => {
	return `German (de)`;
};
var fr_settings_preferences_german = () => {
	return `Allemand (de)`;
};
var es_settings_preferences_german = () => {
	return `Alemán (de)`;
};
var de_settings_preferences_german = () => {
	return `Deutsch (de)`;
};
var it_settings_preferences_german = () => {
	return `Tedesco (de)`;
};
var pt_settings_preferences_german = () => {
	return `Alemão (de)`;
};
var zh_settings_preferences_german = () => {
	return `德语 (de)`;
};
var ja_settings_preferences_german = () => {
	return `ドイツ語 (de)`;
};
var ko_settings_preferences_german = () => {
	return `German (de)`;
};
var ru_settings_preferences_german = () => {
	return `Немецкий (de)`;
};
var settings_preferences_german = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_settings_preferences_german(inputs);
	if (locale === "es") return es_settings_preferences_german(inputs);
	if (locale === "de") return de_settings_preferences_german(inputs);
	if (locale === "it") return it_settings_preferences_german(inputs);
	if (locale === "pt") return pt_settings_preferences_german(inputs);
	if (locale === "zh") return zh_settings_preferences_german(inputs);
	if (locale === "ja") return ja_settings_preferences_german(inputs);
	if (locale === "ko") return ko_settings_preferences_german(inputs);
	if (locale === "ru") return ru_settings_preferences_german(inputs);
	return en_settings_preferences_german(inputs);
});
var en_settings_preferences_japanese = () => {
	return `Japanese (ja)`;
};
var fr_settings_preferences_japanese = () => {
	return `Japonais (ja)`;
};
var es_settings_preferences_japanese = () => {
	return `Japonés (ja)`;
};
var de_settings_preferences_japanese = () => {
	return `Japanisch (ja)`;
};
var it_settings_preferences_japanese = () => {
	return `Giapponese (ja)`;
};
var pt_settings_preferences_japanese = () => {
	return `Japonês (ja)`;
};
var zh_settings_preferences_japanese = () => {
	return `日语 (ja)`;
};
var ja_settings_preferences_japanese = () => {
	return `日本語 (ja)`;
};
var ko_settings_preferences_japanese = () => {
	return `Japanese (ja)`;
};
var ru_settings_preferences_japanese = () => {
	return `Японский (ja)`;
};
var settings_preferences_japanese = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_settings_preferences_japanese(inputs);
	if (locale === "es") return es_settings_preferences_japanese(inputs);
	if (locale === "de") return de_settings_preferences_japanese(inputs);
	if (locale === "it") return it_settings_preferences_japanese(inputs);
	if (locale === "pt") return pt_settings_preferences_japanese(inputs);
	if (locale === "zh") return zh_settings_preferences_japanese(inputs);
	if (locale === "ja") return ja_settings_preferences_japanese(inputs);
	if (locale === "ko") return ko_settings_preferences_japanese(inputs);
	if (locale === "ru") return ru_settings_preferences_japanese(inputs);
	return en_settings_preferences_japanese(inputs);
});
var en_settings_preferences_spanish = () => {
	return `Spanish (es)`;
};
var fr_settings_preferences_spanish = () => {
	return `Espagnol (es)`;
};
var es_settings_preferences_spanish = () => {
	return `Español (es)`;
};
var de_settings_preferences_spanish = () => {
	return `Spanisch (es)`;
};
var it_settings_preferences_spanish = () => {
	return `Spagnolo (es)`;
};
var pt_settings_preferences_spanish = () => {
	return `Espanhol (es)`;
};
var zh_settings_preferences_spanish = () => {
	return `西班牙语 (es)`;
};
var ja_settings_preferences_spanish = () => {
	return `スペイン語 (es)`;
};
var ko_settings_preferences_spanish = () => {
	return `Spanish (es)`;
};
var ru_settings_preferences_spanish = () => {
	return `Испанский (es)`;
};
var settings_preferences_spanish = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_settings_preferences_spanish(inputs);
	if (locale === "es") return es_settings_preferences_spanish(inputs);
	if (locale === "de") return de_settings_preferences_spanish(inputs);
	if (locale === "it") return it_settings_preferences_spanish(inputs);
	if (locale === "pt") return pt_settings_preferences_spanish(inputs);
	if (locale === "zh") return zh_settings_preferences_spanish(inputs);
	if (locale === "ja") return ja_settings_preferences_spanish(inputs);
	if (locale === "ko") return ko_settings_preferences_spanish(inputs);
	if (locale === "ru") return ru_settings_preferences_spanish(inputs);
	return en_settings_preferences_spanish(inputs);
});
var en_settings_preferences_title = () => {
	return `Preferences`;
};
var fr_settings_preferences_title = () => {
	return `Préférences`;
};
var es_settings_preferences_title = () => {
	return `Preferencias`;
};
var de_settings_preferences_title = () => {
	return `Einstellungen`;
};
var it_settings_preferences_title = () => {
	return `Preferenze`;
};
var pt_settings_preferences_title = () => {
	return `Preferências`;
};
var zh_settings_preferences_title = () => {
	return `偏好`;
};
var ja_settings_preferences_title = () => {
	return `設定`;
};
var ko_settings_preferences_title = () => {
	return `Preferences`;
};
var ru_settings_preferences_title = () => {
	return `Предпочтения`;
};
var settings_preferences_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_settings_preferences_title(inputs);
	if (locale === "es") return es_settings_preferences_title(inputs);
	if (locale === "de") return de_settings_preferences_title(inputs);
	if (locale === "it") return it_settings_preferences_title(inputs);
	if (locale === "pt") return pt_settings_preferences_title(inputs);
	if (locale === "zh") return zh_settings_preferences_title(inputs);
	if (locale === "ja") return ja_settings_preferences_title(inputs);
	if (locale === "ko") return ko_settings_preferences_title(inputs);
	if (locale === "ru") return ru_settings_preferences_title(inputs);
	return en_settings_preferences_title(inputs);
});
var en_settings_preferences_toggledarkmode2 = () => {
	return `Toggle dark mode`;
};
var fr_settings_preferences_toggledarkmode2 = () => {
	return `Basculer le mode sombre`;
};
var es_settings_preferences_toggledarkmode2 = () => {
	return `Cambiar modo oscuro`;
};
var de_settings_preferences_toggledarkmode2 = () => {
	return `Dunkelmodus umschalten`;
};
var it_settings_preferences_toggledarkmode2 = () => {
	return `Attiva/disattiva modalità scura`;
};
var pt_settings_preferences_toggledarkmode2 = () => {
	return `Alternar modo escuro`;
};
var zh_settings_preferences_toggledarkmode2 = () => {
	return `切换深色模式`;
};
var ja_settings_preferences_toggledarkmode2 = () => {
	return `ダークモードの切り替え`;
};
var ko_settings_preferences_toggledarkmode2 = () => {
	return `Toggle dark mode`;
};
var ru_settings_preferences_toggledarkmode2 = () => {
	return `Переключить темную тему`;
};
var settings_preferences_toggledarkmode2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_settings_preferences_toggledarkmode2(inputs);
	if (locale === "es") return es_settings_preferences_toggledarkmode2(inputs);
	if (locale === "de") return de_settings_preferences_toggledarkmode2(inputs);
	if (locale === "it") return it_settings_preferences_toggledarkmode2(inputs);
	if (locale === "pt") return pt_settings_preferences_toggledarkmode2(inputs);
	if (locale === "zh") return zh_settings_preferences_toggledarkmode2(inputs);
	if (locale === "ja") return ja_settings_preferences_toggledarkmode2(inputs);
	if (locale === "ko") return ko_settings_preferences_toggledarkmode2(inputs);
	if (locale === "ru") return ru_settings_preferences_toggledarkmode2(inputs);
	return en_settings_preferences_toggledarkmode2(inputs);
});
var en_settings_preferences_togglenotifications1 = () => {
	return `Toggle notifications`;
};
var fr_settings_preferences_togglenotifications1 = () => {
	return `Activer/désactiver les notifications`;
};
var es_settings_preferences_togglenotifications1 = () => {
	return `Cambiar notificaciones`;
};
var de_settings_preferences_togglenotifications1 = () => {
	return `Benachrichtigungen umschalten`;
};
var it_settings_preferences_togglenotifications1 = () => {
	return `Attiva/disattiva notifiche`;
};
var pt_settings_preferences_togglenotifications1 = () => {
	return `Alternar notificações`;
};
var zh_settings_preferences_togglenotifications1 = () => {
	return `切换通知`;
};
var ja_settings_preferences_togglenotifications1 = () => {
	return `通知の切り替え`;
};
var ko_settings_preferences_togglenotifications1 = () => {
	return `Toggle notifications`;
};
var ru_settings_preferences_togglenotifications1 = () => {
	return `Переключить уведомления`;
};
var settings_preferences_togglenotifications1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_settings_preferences_togglenotifications1(inputs);
	if (locale === "es") return es_settings_preferences_togglenotifications1(inputs);
	if (locale === "de") return de_settings_preferences_togglenotifications1(inputs);
	if (locale === "it") return it_settings_preferences_togglenotifications1(inputs);
	if (locale === "pt") return pt_settings_preferences_togglenotifications1(inputs);
	if (locale === "zh") return zh_settings_preferences_togglenotifications1(inputs);
	if (locale === "ja") return ja_settings_preferences_togglenotifications1(inputs);
	if (locale === "ko") return ko_settings_preferences_togglenotifications1(inputs);
	if (locale === "ru") return ru_settings_preferences_togglenotifications1(inputs);
	return en_settings_preferences_togglenotifications1(inputs);
});
var en_settings_preferences_weeklyreports1 = () => {
	return `Receive weekly benchmark reports`;
};
var fr_settings_preferences_weeklyreports1 = () => {
	return `Recevoir les rapports hebdomadaires`;
};
var es_settings_preferences_weeklyreports1 = () => {
	return `Recibir informes semanales de benchmarks`;
};
var de_settings_preferences_weeklyreports1 = () => {
	return `Wöchentliche Benchmark-Berichte erhalten`;
};
var it_settings_preferences_weeklyreports1 = () => {
	return `Ricevi rapporti settimanali sui benchmark`;
};
var pt_settings_preferences_weeklyreports1 = () => {
	return `Receber relatórios semanais de benchmarks`;
};
var zh_settings_preferences_weeklyreports1 = () => {
	return `接收每周基准测试报告`;
};
var ja_settings_preferences_weeklyreports1 = () => {
	return `毎週のベンチマークレポートを受け取る`;
};
var ko_settings_preferences_weeklyreports1 = () => {
	return `Receive weekly benchmark reports`;
};
var ru_settings_preferences_weeklyreports1 = () => {
	return `Получать еженедельные отчеты о бенчмарках`;
};
var settings_preferences_weeklyreports1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_settings_preferences_weeklyreports1(inputs);
	if (locale === "es") return es_settings_preferences_weeklyreports1(inputs);
	if (locale === "de") return de_settings_preferences_weeklyreports1(inputs);
	if (locale === "it") return it_settings_preferences_weeklyreports1(inputs);
	if (locale === "pt") return pt_settings_preferences_weeklyreports1(inputs);
	if (locale === "zh") return zh_settings_preferences_weeklyreports1(inputs);
	if (locale === "ja") return ja_settings_preferences_weeklyreports1(inputs);
	if (locale === "ko") return ko_settings_preferences_weeklyreports1(inputs);
	if (locale === "ru") return ru_settings_preferences_weeklyreports1(inputs);
	return en_settings_preferences_weeklyreports1(inputs);
});
var _tmpl$ = template(`<section class="rounded-lg border border-border bg-card p-6"><h2 class="mb-4 text-lg font-semibold text-foreground"></h2><div class=space-y-4><div class="flex items-center justify-between"><div><p class="text-sm font-medium text-foreground"></p><p class="text-xs text-muted-foreground"></p></div><button type=button class="h-6 w-11 rounded-full bg-primary transition-colors"><span class="block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform"></span></button></div><div class="flex items-center justify-between"><div><p class="text-sm font-medium text-foreground"></p><p class="text-xs text-muted-foreground"></p></div><button type=button class="h-6 w-11 rounded-full bg-muted transition-colors"><span class="block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform"></span></button></div><div><label class="mb-1 block text-sm font-medium text-foreground"></label><select class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"><option></option><option></option><option></option><option></option><option></option><option></option><option>`);
function PreferencesSection() {
	const languageId = createUniqueId();
	return (() => {
		var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$4 = _el$2.nextSibling.firstChild, _el$5 = _el$4.firstChild, _el$6 = _el$5.firstChild, _el$7 = _el$6.nextSibling, _el$8 = _el$5.nextSibling, _el$9 = _el$4.nextSibling, _el$0 = _el$9.firstChild, _el$1 = _el$0.firstChild, _el$10 = _el$1.nextSibling, _el$11 = _el$0.nextSibling, _el$13 = _el$9.nextSibling.firstChild, _el$14 = _el$13.nextSibling, _el$15 = _el$14.firstChild, _el$16 = _el$15.nextSibling, _el$17 = _el$16.nextSibling, _el$18 = _el$17.nextSibling, _el$19 = _el$18.nextSibling, _el$20 = _el$19.nextSibling, _el$21 = _el$20.nextSibling;
		insert(_el$2, () => settings_preferences_title());
		insert(_el$6, () => settings_preferences_emailnotifications1());
		insert(_el$7, () => settings_preferences_weeklyreports1());
		insert(_el$1, () => settings_preferences_darkmode1());
		insert(_el$10, () => settings_preferences_darkcolorscheme2());
		setAttribute(_el$13, "for", languageId);
		insert(_el$13, () => settings_preferences_defaultlanguage1());
		setAttribute(_el$14, "id", languageId);
		insert(_el$15, () => settings_preferences_english());
		insert(_el$16, () => settings_preferences_french());
		insert(_el$17, () => settings_preferences_german());
		insert(_el$18, () => settings_preferences_spanish());
		insert(_el$19, () => settings_preferences_japanese());
		insert(_el$20, () => settings_preferences_chinese());
		insert(_el$21, () => settings_preferences_arabic());
		effect((_p$) => {
			var _v$ = settings_preferences_togglenotifications1(), _v$2 = settings_preferences_toggledarkmode2();
			_v$ !== _p$.e && setAttribute(_el$8, "aria-label", _p$.e = _v$);
			_v$2 !== _p$.t && setAttribute(_el$11, "aria-label", _p$.t = _v$2);
			return _p$;
		}, {
			e: void 0,
			t: void 0
		});
		return _el$;
	})();
}
export { PreferencesSection as default };
