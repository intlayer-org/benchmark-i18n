import { useEffect, useId, useLayoutEffect, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useParams } from "next/navigation";
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
var en_preferences_section_preferences = () => {
	return `Preferences`;
};
var fr_preferences_section_preferences = () => {
	return `Préférences`;
};
var es_preferences_section_preferences = () => {
	return `Preferencias`;
};
var de_preferences_section_preferences = () => {
	return `Einstellungen`;
};
var it_preferences_section_preferences = () => {
	return `Preferenze`;
};
var pt_preferences_section_preferences = () => {
	return `Preferências`;
};
var zh_preferences_section_preferences = () => {
	return `偏好设置`;
};
var ja_preferences_section_preferences = () => {
	return `設定`;
};
var ko_preferences_section_preferences = () => {
	return `환경 설정`;
};
var ru_preferences_section_preferences = () => {
	return `Настройки`;
};
var preferences_section_preferences = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_preferences_section_preferences(inputs);
	if (locale === "fr") return fr_preferences_section_preferences(inputs);
	if (locale === "es") return es_preferences_section_preferences(inputs);
	if (locale === "de") return de_preferences_section_preferences(inputs);
	if (locale === "it") return it_preferences_section_preferences(inputs);
	if (locale === "pt") return pt_preferences_section_preferences(inputs);
	if (locale === "zh") return zh_preferences_section_preferences(inputs);
	if (locale === "ja") return ja_preferences_section_preferences(inputs);
	if (locale === "ko") return ko_preferences_section_preferences(inputs);
	return ru_preferences_section_preferences(inputs);
});
var en_preferences_section_emailnotifications1 = () => {
	return `Email Notifications`;
};
var fr_preferences_section_emailnotifications1 = () => {
	return `Notifications par email`;
};
var es_preferences_section_emailnotifications1 = () => {
	return `Notificaciones por correo electrónico`;
};
var de_preferences_section_emailnotifications1 = () => {
	return `E-Mail-Benachrichtigungen`;
};
var it_preferences_section_emailnotifications1 = () => {
	return `Notifiche via email`;
};
var pt_preferences_section_emailnotifications1 = () => {
	return `Notifiche por e-mail`;
};
var zh_preferences_section_emailnotifications1 = () => {
	return `邮件通知`;
};
var ja_preferences_section_emailnotifications1 = () => {
	return `メール通知`;
};
var ko_preferences_section_emailnotifications1 = () => {
	return `이메일 알림`;
};
var ru_preferences_section_emailnotifications1 = () => {
	return `Уведомления по эл. почте`;
};
var preferences_section_emailnotifications1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_preferences_section_emailnotifications1(inputs);
	if (locale === "fr") return fr_preferences_section_emailnotifications1(inputs);
	if (locale === "es") return es_preferences_section_emailnotifications1(inputs);
	if (locale === "de") return de_preferences_section_emailnotifications1(inputs);
	if (locale === "it") return it_preferences_section_emailnotifications1(inputs);
	if (locale === "pt") return pt_preferences_section_emailnotifications1(inputs);
	if (locale === "zh") return zh_preferences_section_emailnotifications1(inputs);
	if (locale === "ja") return ja_preferences_section_emailnotifications1(inputs);
	if (locale === "ko") return ko_preferences_section_emailnotifications1(inputs);
	return ru_preferences_section_emailnotifications1(inputs);
});
var en_preferences_section_receiveweeklybenchmarkreports3 = () => {
	return `Receive weekly benchmark reports`;
};
var fr_preferences_section_receiveweeklybenchmarkreports3 = () => {
	return `Recevoir des rapports hebdomadaires de benchmark`;
};
var es_preferences_section_receiveweeklybenchmarkreports3 = () => {
	return `Recibir informes semanales de benchmarks`;
};
var de_preferences_section_receiveweeklybenchmarkreports3 = () => {
	return `Wöchentliche Benchmark-Berichte erhalten`;
};
var it_preferences_section_receiveweeklybenchmarkreports3 = () => {
	return `Ricevi rapporti settimanali sui benchmark`;
};
var pt_preferences_section_receiveweeklybenchmarkreports3 = () => {
	return `Receber relatórios semanais de benchmarks`;
};
var zh_preferences_section_receiveweeklybenchmarkreports3 = () => {
	return `接收每周基准测试报告`;
};
var ja_preferences_section_receiveweeklybenchmarkreports3 = () => {
	return `毎週のベンチマークレポートを受け取る`;
};
var ko_preferences_section_receiveweeklybenchmarkreports3 = () => {
	return `주간 벤치마크 보고서 받기`;
};
var ru_preferences_section_receiveweeklybenchmarkreports3 = () => {
	return `Получать еженедельные отчеты о бенчмарках`;
};
var preferences_section_receiveweeklybenchmarkreports3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_preferences_section_receiveweeklybenchmarkreports3(inputs);
	if (locale === "fr") return fr_preferences_section_receiveweeklybenchmarkreports3(inputs);
	if (locale === "es") return es_preferences_section_receiveweeklybenchmarkreports3(inputs);
	if (locale === "de") return de_preferences_section_receiveweeklybenchmarkreports3(inputs);
	if (locale === "it") return it_preferences_section_receiveweeklybenchmarkreports3(inputs);
	if (locale === "pt") return pt_preferences_section_receiveweeklybenchmarkreports3(inputs);
	if (locale === "zh") return zh_preferences_section_receiveweeklybenchmarkreports3(inputs);
	if (locale === "ja") return ja_preferences_section_receiveweeklybenchmarkreports3(inputs);
	if (locale === "ko") return ko_preferences_section_receiveweeklybenchmarkreports3(inputs);
	return ru_preferences_section_receiveweeklybenchmarkreports3(inputs);
});
var en_preferences_section_togglenotifications1 = () => {
	return `Toggle notifications`;
};
var fr_preferences_section_togglenotifications1 = () => {
	return `Basculer les notifications`;
};
var es_preferences_section_togglenotifications1 = () => {
	return `Alternar notificaciones`;
};
var de_preferences_section_togglenotifications1 = () => {
	return `Benachrichtigungen umschalten`;
};
var it_preferences_section_togglenotifications1 = () => {
	return `Attiva/disattiva notifiche`;
};
var pt_preferences_section_togglenotifications1 = () => {
	return `Alternar notificações`;
};
var zh_preferences_section_togglenotifications1 = () => {
	return `切换通知`;
};
var ja_preferences_section_togglenotifications1 = () => {
	return `通知の切り替え`;
};
var ko_preferences_section_togglenotifications1 = () => {
	return `알림 토글`;
};
var ru_preferences_section_togglenotifications1 = () => {
	return `Переключить уведомления`;
};
var preferences_section_togglenotifications1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_preferences_section_togglenotifications1(inputs);
	if (locale === "fr") return fr_preferences_section_togglenotifications1(inputs);
	if (locale === "es") return es_preferences_section_togglenotifications1(inputs);
	if (locale === "de") return de_preferences_section_togglenotifications1(inputs);
	if (locale === "it") return it_preferences_section_togglenotifications1(inputs);
	if (locale === "pt") return pt_preferences_section_togglenotifications1(inputs);
	if (locale === "zh") return zh_preferences_section_togglenotifications1(inputs);
	if (locale === "ja") return ja_preferences_section_togglenotifications1(inputs);
	if (locale === "ko") return ko_preferences_section_togglenotifications1(inputs);
	return ru_preferences_section_togglenotifications1(inputs);
});
var en_preferences_section_darkmode1 = () => {
	return `Dark Mode`;
};
var fr_preferences_section_darkmode1 = () => {
	return `Mode sombre`;
};
var es_preferences_section_darkmode1 = () => {
	return `Modo oscuro`;
};
var de_preferences_section_darkmode1 = () => {
	return `Dunkelmodus`;
};
var it_preferences_section_darkmode1 = () => {
	return `Modalità scura`;
};
var pt_preferences_section_darkmode1 = () => {
	return `Modo Escuro`;
};
var zh_preferences_section_darkmode1 = () => {
	return `深色模式`;
};
var ja_preferences_section_darkmode1 = () => {
	return `ダークモード`;
};
var ko_preferences_section_darkmode1 = () => {
	return `다크 모드`;
};
var ru_preferences_section_darkmode1 = () => {
	return `Темный режим`;
};
var preferences_section_darkmode1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_preferences_section_darkmode1(inputs);
	if (locale === "fr") return fr_preferences_section_darkmode1(inputs);
	if (locale === "es") return es_preferences_section_darkmode1(inputs);
	if (locale === "de") return de_preferences_section_darkmode1(inputs);
	if (locale === "it") return it_preferences_section_darkmode1(inputs);
	if (locale === "pt") return pt_preferences_section_darkmode1(inputs);
	if (locale === "zh") return zh_preferences_section_darkmode1(inputs);
	if (locale === "ja") return ja_preferences_section_darkmode1(inputs);
	if (locale === "ko") return ko_preferences_section_darkmode1(inputs);
	return ru_preferences_section_darkmode1(inputs);
});
var en_preferences_section_usedarkcolorscheme3 = () => {
	return `Use dark color scheme`;
};
var fr_preferences_section_usedarkcolorscheme3 = () => {
	return `Utiliser le schéma de couleurs sombres`;
};
var es_preferences_section_usedarkcolorscheme3 = () => {
	return `Usar esquema de colores oscuro`;
};
var de_preferences_section_usedarkcolorscheme3 = () => {
	return `Dunkles Farbschema verwenden`;
};
var it_preferences_section_usedarkcolorscheme3 = () => {
	return `Usa lo schema colori scuro`;
};
var pt_preferences_section_usedarkcolorscheme3 = () => {
	return `Usar esquema de cores escuras`;
};
var zh_preferences_section_usedarkcolorscheme3 = () => {
	return `使用深色配色方案`;
};
var ja_preferences_section_usedarkcolorscheme3 = () => {
	return `ダークカラーの配色を使用する`;
};
var ko_preferences_section_usedarkcolorscheme3 = () => {
	return `어두운 색상 테마 사용`;
};
var ru_preferences_section_usedarkcolorscheme3 = () => {
	return `Использовать темную цветовую схему`;
};
var preferences_section_usedarkcolorscheme3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_preferences_section_usedarkcolorscheme3(inputs);
	if (locale === "fr") return fr_preferences_section_usedarkcolorscheme3(inputs);
	if (locale === "es") return es_preferences_section_usedarkcolorscheme3(inputs);
	if (locale === "de") return de_preferences_section_usedarkcolorscheme3(inputs);
	if (locale === "it") return it_preferences_section_usedarkcolorscheme3(inputs);
	if (locale === "pt") return pt_preferences_section_usedarkcolorscheme3(inputs);
	if (locale === "zh") return zh_preferences_section_usedarkcolorscheme3(inputs);
	if (locale === "ja") return ja_preferences_section_usedarkcolorscheme3(inputs);
	if (locale === "ko") return ko_preferences_section_usedarkcolorscheme3(inputs);
	return ru_preferences_section_usedarkcolorscheme3(inputs);
});
var en_preferences_section_toggledarkmode2 = () => {
	return `Toggle dark mode`;
};
var fr_preferences_section_toggledarkmode2 = () => {
	return `Basculer le mode sombre`;
};
var es_preferences_section_toggledarkmode2 = () => {
	return `Alternar modo oscuro`;
};
var de_preferences_section_toggledarkmode2 = () => {
	return `Dunkelmodus umschalten`;
};
var it_preferences_section_toggledarkmode2 = () => {
	return `Attiva/disattiva modalità scura`;
};
var pt_preferences_section_toggledarkmode2 = () => {
	return `Alternar modo escuro`;
};
var zh_preferences_section_toggledarkmode2 = () => {
	return `切换深色模式`;
};
var ja_preferences_section_toggledarkmode2 = () => {
	return `ダークモードの切り替え`;
};
var ko_preferences_section_toggledarkmode2 = () => {
	return `다크 모드 토글`;
};
var ru_preferences_section_toggledarkmode2 = () => {
	return `Переключить темный режим`;
};
var preferences_section_toggledarkmode2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_preferences_section_toggledarkmode2(inputs);
	if (locale === "fr") return fr_preferences_section_toggledarkmode2(inputs);
	if (locale === "es") return es_preferences_section_toggledarkmode2(inputs);
	if (locale === "de") return de_preferences_section_toggledarkmode2(inputs);
	if (locale === "it") return it_preferences_section_toggledarkmode2(inputs);
	if (locale === "pt") return pt_preferences_section_toggledarkmode2(inputs);
	if (locale === "zh") return zh_preferences_section_toggledarkmode2(inputs);
	if (locale === "ja") return ja_preferences_section_toggledarkmode2(inputs);
	if (locale === "ko") return ko_preferences_section_toggledarkmode2(inputs);
	return ru_preferences_section_toggledarkmode2(inputs);
});
var en_preferences_section_defaultlanguage1 = () => {
	return `Default Language`;
};
var fr_preferences_section_defaultlanguage1 = () => {
	return `Langue par défaut`;
};
var es_preferences_section_defaultlanguage1 = () => {
	return `Idioma predeterminado`;
};
var de_preferences_section_defaultlanguage1 = () => {
	return `Standardsprache`;
};
var it_preferences_section_defaultlanguage1 = () => {
	return `Lingua predefinita`;
};
var pt_preferences_section_defaultlanguage1 = () => {
	return `Idioma Padrão`;
};
var zh_preferences_section_defaultlanguage1 = () => {
	return `默认语言`;
};
var ja_preferences_section_defaultlanguage1 = () => {
	return `既定の言語`;
};
var ko_preferences_section_defaultlanguage1 = () => {
	return `기본 언어`;
};
var ru_preferences_section_defaultlanguage1 = () => {
	return `Язык по умолчанию`;
};
var preferences_section_defaultlanguage1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_preferences_section_defaultlanguage1(inputs);
	if (locale === "fr") return fr_preferences_section_defaultlanguage1(inputs);
	if (locale === "es") return es_preferences_section_defaultlanguage1(inputs);
	if (locale === "de") return de_preferences_section_defaultlanguage1(inputs);
	if (locale === "it") return it_preferences_section_defaultlanguage1(inputs);
	if (locale === "pt") return pt_preferences_section_defaultlanguage1(inputs);
	if (locale === "zh") return zh_preferences_section_defaultlanguage1(inputs);
	if (locale === "ja") return ja_preferences_section_defaultlanguage1(inputs);
	if (locale === "ko") return ko_preferences_section_defaultlanguage1(inputs);
	return ru_preferences_section_defaultlanguage1(inputs);
});
var en_preferences_section_englishen1 = () => {
	return `English (en)`;
};
var fr_preferences_section_englishen1 = () => {
	return `Anglais (en)`;
};
var es_preferences_section_englishen1 = () => {
	return `Inglés (en)`;
};
var de_preferences_section_englishen1 = () => {
	return `Englisch (en)`;
};
var it_preferences_section_englishen1 = () => {
	return `Inglese (en)`;
};
var pt_preferences_section_englishen1 = () => {
	return `Inglês (en)`;
};
var zh_preferences_section_englishen1 = () => {
	return `英语 (en)`;
};
var ja_preferences_section_englishen1 = () => {
	return `英語 (en)`;
};
var ko_preferences_section_englishen1 = () => {
	return `영어 (en)`;
};
var ru_preferences_section_englishen1 = () => {
	return `Английский (en)`;
};
var preferences_section_englishen1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_preferences_section_englishen1(inputs);
	if (locale === "fr") return fr_preferences_section_englishen1(inputs);
	if (locale === "es") return es_preferences_section_englishen1(inputs);
	if (locale === "de") return de_preferences_section_englishen1(inputs);
	if (locale === "it") return it_preferences_section_englishen1(inputs);
	if (locale === "pt") return pt_preferences_section_englishen1(inputs);
	if (locale === "zh") return zh_preferences_section_englishen1(inputs);
	if (locale === "ja") return ja_preferences_section_englishen1(inputs);
	if (locale === "ko") return ko_preferences_section_englishen1(inputs);
	return ru_preferences_section_englishen1(inputs);
});
var en_preferences_section_frenchfr1 = () => {
	return `French (fr)`;
};
var fr_preferences_section_frenchfr1 = () => {
	return `Français (fr)`;
};
var es_preferences_section_frenchfr1 = () => {
	return `Francés (fr)`;
};
var de_preferences_section_frenchfr1 = () => {
	return `Französisch (fr)`;
};
var it_preferences_section_frenchfr1 = () => {
	return `Francese (fr)`;
};
var pt_preferences_section_frenchfr1 = () => {
	return `Francês (fr)`;
};
var zh_preferences_section_frenchfr1 = () => {
	return `法语 (fr)`;
};
var ja_preferences_section_frenchfr1 = () => {
	return `フランス語 (fr)`;
};
var ko_preferences_section_frenchfr1 = () => {
	return `프랑스어 (fr)`;
};
var ru_preferences_section_frenchfr1 = () => {
	return `Французский (fr)`;
};
var preferences_section_frenchfr1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_preferences_section_frenchfr1(inputs);
	if (locale === "fr") return fr_preferences_section_frenchfr1(inputs);
	if (locale === "es") return es_preferences_section_frenchfr1(inputs);
	if (locale === "de") return de_preferences_section_frenchfr1(inputs);
	if (locale === "it") return it_preferences_section_frenchfr1(inputs);
	if (locale === "pt") return pt_preferences_section_frenchfr1(inputs);
	if (locale === "zh") return zh_preferences_section_frenchfr1(inputs);
	if (locale === "ja") return ja_preferences_section_frenchfr1(inputs);
	if (locale === "ko") return ko_preferences_section_frenchfr1(inputs);
	return ru_preferences_section_frenchfr1(inputs);
});
var en_preferences_section_germande1 = () => {
	return `German (de)`;
};
var fr_preferences_section_germande1 = () => {
	return `Allemand (de)`;
};
var es_preferences_section_germande1 = () => {
	return `Alemán (de)`;
};
var de_preferences_section_germande1 = () => {
	return `Deutsch (de)`;
};
var it_preferences_section_germande1 = () => {
	return `Tedesco (de)`;
};
var pt_preferences_section_germande1 = () => {
	return `Alemão (de)`;
};
var zh_preferences_section_germande1 = () => {
	return `德语 (de)`;
};
var ja_preferences_section_germande1 = () => {
	return `ドイツ語 (de)`;
};
var ko_preferences_section_germande1 = () => {
	return `독일어 (de)`;
};
var ru_preferences_section_germande1 = () => {
	return `Немецкий (de)`;
};
var preferences_section_germande1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_preferences_section_germande1(inputs);
	if (locale === "fr") return fr_preferences_section_germande1(inputs);
	if (locale === "es") return es_preferences_section_germande1(inputs);
	if (locale === "de") return de_preferences_section_germande1(inputs);
	if (locale === "it") return it_preferences_section_germande1(inputs);
	if (locale === "pt") return pt_preferences_section_germande1(inputs);
	if (locale === "zh") return zh_preferences_section_germande1(inputs);
	if (locale === "ja") return ja_preferences_section_germande1(inputs);
	if (locale === "ko") return ko_preferences_section_germande1(inputs);
	return ru_preferences_section_germande1(inputs);
});
var en_preferences_section_spanishes1 = () => {
	return `Spanish (es)`;
};
var fr_preferences_section_spanishes1 = () => {
	return `Espagnol (es)`;
};
var es_preferences_section_spanishes1 = () => {
	return `Español (es)`;
};
var de_preferences_section_spanishes1 = () => {
	return `Spanisch (es)`;
};
var it_preferences_section_spanishes1 = () => {
	return `Spagnolo (es)`;
};
var pt_preferences_section_spanishes1 = () => {
	return `Espanhol (es)`;
};
var zh_preferences_section_spanishes1 = () => {
	return `西班牙语 (es)`;
};
var ja_preferences_section_spanishes1 = () => {
	return `スペイン語 (es)`;
};
var ko_preferences_section_spanishes1 = () => {
	return `스페인어 (es)`;
};
var ru_preferences_section_spanishes1 = () => {
	return `Испанский (es)`;
};
var preferences_section_spanishes1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_preferences_section_spanishes1(inputs);
	if (locale === "fr") return fr_preferences_section_spanishes1(inputs);
	if (locale === "es") return es_preferences_section_spanishes1(inputs);
	if (locale === "de") return de_preferences_section_spanishes1(inputs);
	if (locale === "it") return it_preferences_section_spanishes1(inputs);
	if (locale === "pt") return pt_preferences_section_spanishes1(inputs);
	if (locale === "zh") return zh_preferences_section_spanishes1(inputs);
	if (locale === "ja") return ja_preferences_section_spanishes1(inputs);
	if (locale === "ko") return ko_preferences_section_spanishes1(inputs);
	return ru_preferences_section_spanishes1(inputs);
});
var en_preferences_section_japaneseja1 = () => {
	return `Japanese (ja)`;
};
var fr_preferences_section_japaneseja1 = () => {
	return `Japonais (ja)`;
};
var es_preferences_section_japaneseja1 = () => {
	return `Japonés (ja)`;
};
var de_preferences_section_japaneseja1 = () => {
	return `Japanisch (ja)`;
};
var it_preferences_section_japaneseja1 = () => {
	return `Giapponese (ja)`;
};
var pt_preferences_section_japaneseja1 = () => {
	return `Japonês (ja)`;
};
var zh_preferences_section_japaneseja1 = () => {
	return `日语 (ja)`;
};
var ja_preferences_section_japaneseja1 = () => {
	return `日本語 (ja)`;
};
var ko_preferences_section_japaneseja1 = () => {
	return `일본어 (ja)`;
};
var ru_preferences_section_japaneseja1 = () => {
	return `Японский (ja)`;
};
var preferences_section_japaneseja1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_preferences_section_japaneseja1(inputs);
	if (locale === "fr") return fr_preferences_section_japaneseja1(inputs);
	if (locale === "es") return es_preferences_section_japaneseja1(inputs);
	if (locale === "de") return de_preferences_section_japaneseja1(inputs);
	if (locale === "it") return it_preferences_section_japaneseja1(inputs);
	if (locale === "pt") return pt_preferences_section_japaneseja1(inputs);
	if (locale === "zh") return zh_preferences_section_japaneseja1(inputs);
	if (locale === "ja") return ja_preferences_section_japaneseja1(inputs);
	if (locale === "ko") return ko_preferences_section_japaneseja1(inputs);
	return ru_preferences_section_japaneseja1(inputs);
});
var en_preferences_section_chinesesimplifiedzhcn3 = () => {
	return `Chinese Simplified (zh-CN)`;
};
var fr_preferences_section_chinesesimplifiedzhcn3 = () => {
	return `Chinois simplifié (zh-CN)`;
};
var es_preferences_section_chinesesimplifiedzhcn3 = () => {
	return `Chino simplificado (zh-CN)`;
};
var de_preferences_section_chinesesimplifiedzhcn3 = () => {
	return `Chinesisch vereinfacht (zh-CN)`;
};
var it_preferences_section_chinesesimplifiedzhcn3 = () => {
	return `Cinese semplificato (zh-CN)`;
};
var pt_preferences_section_chinesesimplifiedzhcn3 = () => {
	return `Chinês simplificado (zh-CN)`;
};
var zh_preferences_section_chinesesimplifiedzhcn3 = () => {
	return `简体中文 (zh-CN)`;
};
var ja_preferences_section_chinesesimplifiedzhcn3 = () => {
	return `中国語 簡体字 (zh-CN)`;
};
var ko_preferences_section_chinesesimplifiedzhcn3 = () => {
	return `중국어 간체 (zh-CN)`;
};
var ru_preferences_section_chinesesimplifiedzhcn3 = () => {
	return `Китайский упрощенный (zh-CN)`;
};
var preferences_section_chinesesimplifiedzhcn3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_preferences_section_chinesesimplifiedzhcn3(inputs);
	if (locale === "fr") return fr_preferences_section_chinesesimplifiedzhcn3(inputs);
	if (locale === "es") return es_preferences_section_chinesesimplifiedzhcn3(inputs);
	if (locale === "de") return de_preferences_section_chinesesimplifiedzhcn3(inputs);
	if (locale === "it") return it_preferences_section_chinesesimplifiedzhcn3(inputs);
	if (locale === "pt") return pt_preferences_section_chinesesimplifiedzhcn3(inputs);
	if (locale === "zh") return zh_preferences_section_chinesesimplifiedzhcn3(inputs);
	if (locale === "ja") return ja_preferences_section_chinesesimplifiedzhcn3(inputs);
	if (locale === "ko") return ko_preferences_section_chinesesimplifiedzhcn3(inputs);
	return ru_preferences_section_chinesesimplifiedzhcn3(inputs);
});
var en_preferences_section_arabicar1 = () => {
	return `Arabic (ar)`;
};
var fr_preferences_section_arabicar1 = () => {
	return `Arabe (ar)`;
};
var es_preferences_section_arabicar1 = () => {
	return `Árabe (ar)`;
};
var de_preferences_section_arabicar1 = () => {
	return `Arabisch (ar)`;
};
var it_preferences_section_arabicar1 = () => {
	return `Arabo (ar)`;
};
var pt_preferences_section_arabicar1 = () => {
	return `Árabe (ar)`;
};
var zh_preferences_section_arabicar1 = () => {
	return `阿拉伯语 (ar)`;
};
var ja_preferences_section_arabicar1 = () => {
	return `アラビア語 (ar)`;
};
var ko_preferences_section_arabicar1 = () => {
	return `아랍어 (ar)`;
};
var ru_preferences_section_arabicar1 = () => {
	return `Арабский (ar)`;
};
var preferences_section_arabicar1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_preferences_section_arabicar1(inputs);
	if (locale === "fr") return fr_preferences_section_arabicar1(inputs);
	if (locale === "es") return es_preferences_section_arabicar1(inputs);
	if (locale === "de") return de_preferences_section_arabicar1(inputs);
	if (locale === "it") return it_preferences_section_arabicar1(inputs);
	if (locale === "pt") return pt_preferences_section_arabicar1(inputs);
	if (locale === "zh") return zh_preferences_section_arabicar1(inputs);
	if (locale === "ja") return ja_preferences_section_arabicar1(inputs);
	if (locale === "ko") return ko_preferences_section_arabicar1(inputs);
	return ru_preferences_section_arabicar1(inputs);
});
function PreferencesSection() {
	const languageId = useId();
	return jsxs("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [jsx("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: preferences_section_preferences()
		}), jsxs("div", {
			className: "space-y-4",
			children: [
				jsxs("div", {
					className: "flex items-center justify-between",
					children: [jsxs("div", { children: [jsx("p", {
						className: "text-sm font-medium text-foreground",
						children: preferences_section_emailnotifications1()
					}), jsx("p", {
						className: "text-xs text-muted-foreground",
						children: preferences_section_receiveweeklybenchmarkreports3()
					})] }), jsx("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-primary transition-colors",
						"aria-label": preferences_section_togglenotifications1(),
						children: jsx("span", { className: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" })
					})]
				}),
				jsxs("div", {
					className: "flex items-center justify-between",
					children: [jsxs("div", { children: [jsx("p", {
						className: "text-sm font-medium text-foreground",
						children: preferences_section_darkmode1()
					}), jsx("p", {
						className: "text-xs text-muted-foreground",
						children: preferences_section_usedarkcolorscheme3()
					})] }), jsx("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-muted transition-colors",
						"aria-label": preferences_section_toggledarkmode2(),
						children: jsx("span", { className: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" })
					})]
				}),
				jsxs("div", { children: [jsx("label", {
					htmlFor: languageId,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: preferences_section_defaultlanguage1()
				}), jsxs("select", {
					id: languageId,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					children: [
						jsx("option", { children: preferences_section_englishen1() }),
						jsx("option", { children: preferences_section_frenchfr1() }),
						jsx("option", { children: preferences_section_germande1() }),
						jsx("option", { children: preferences_section_spanishes1() }),
						jsx("option", { children: preferences_section_japaneseja1() }),
						jsx("option", { children: preferences_section_chinesesimplifiedzhcn3() }),
						jsx("option", { children: preferences_section_arabicar1() })
					]
				})] })
			]
		})]
	});
}
function recordHydrationDuration() {
	if (typeof window === "undefined") return;
	console.log("--- BROWSER: RootDocument mounted");
	performance.mark("hydration_end");
	try {
		if (performance.getEntriesByName("hydration_start").length > 0) {
			performance.measure("hydration_duration", "hydration_start", "hydration_end");
			console.log("--- BROWSER: hydration_duration measured");
			const duration = performance.getEntriesByName("hydration_duration")[0]?.duration;
			if (duration) console.log(`Hydration Duration: ${duration.toFixed(2)}ms`);
		} else console.warn("--- BROWSER: hydration_start NOT FOUND");
	} catch (err) {
		console.warn("Could not measure hydration duration:", err);
	}
}
function recordRenderTime(id, startTime) {
	if (typeof window === "undefined") return;
	const renderTime = performance.now() - startTime;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {};
	window.__RENDER_METRICS__[id] = window.__RENDER_METRICS__[id] || [];
	window.__RENDER_METRICS__[id].push(renderTime);
}
function AppProviders({ children }) {
	const locale = useParams().locale ?? "en";
	const [renderStart] = useState(() => typeof performance !== "undefined" ? performance.now() : 0);
	useLayoutEffect(() => {
		recordRenderTime("AppRoot", renderStart);
	}, [renderStart]);
	useEffect(() => {
		setLocale(locale, { reload: false });
		document.documentElement.lang = locale;
	}, [locale]);
	useEffect(() => {
		recordHydrationDuration();
	}, []);
	return jsx(Fragment, { children });
}
function Wrapper({ children }) {
	return jsx(AppProviders, { children });
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(PreferencesSection, {}) });
}
export { Wrapped as default };
