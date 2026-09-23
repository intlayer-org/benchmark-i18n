import { useEffect, useLayoutEffect, useState } from "react";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
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
var header_blog$10 = () => {
	return `Blog`;
};
var header_careers$10 = () => {
	return `Careers`;
};
var header_contact$10 = () => {
	return `Contact`;
};
var header_faq$10 = () => {
	return `FAQ`;
};
var header_gotogithub2$10 = () => {
	return `Go to GitHub`;
};
var header_home$10 = () => {
	return `Home`;
};
var header_methodology$10 = () => {
	return `Methodology`;
};
var header_mockpages1$10 = () => {
	return `Mock Pages`;
};
var header_pricing$10 = () => {
	return `Pricing`;
};
var header_products$10 = () => {
	return `Products`;
};
var header_settings$10 = () => {
	return `Settings`;
};
var header_team$10 = () => {
	return `Team`;
};
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
var header_blog$9 = () => {
	return `Blog`;
};
var header_careers$9 = () => {
	return `Carrières`;
};
var header_contact$9 = () => {
	return `Contact`;
};
var header_faq$9 = () => {
	return `FAQ`;
};
var header_gotogithub2$9 = () => {
	return `Aller sur GitHub`;
};
var header_home$9 = () => {
	return `Accueil`;
};
var header_methodology$9 = () => {
	return `Méthodologie`;
};
var header_mockpages1$9 = () => {
	return `Pages de test`;
};
var header_pricing$9 = () => {
	return `Tarifs`;
};
var header_products$9 = () => {
	return `Produits`;
};
var header_settings$9 = () => {
	return `Paramètres`;
};
var header_team$9 = () => {
	return `Équipe`;
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
var header_blog$8 = () => {
	return `Blog`;
};
var header_careers$8 = () => {
	return `Carreras`;
};
var header_contact$8 = () => {
	return `Contacto`;
};
var header_faq$8 = () => {
	return `FAQ`;
};
var header_gotogithub2$8 = () => {
	return `Ir a GitHub`;
};
var header_home$8 = () => {
	return `Inicio`;
};
var header_methodology$8 = () => {
	return `Metodología`;
};
var header_mockpages1$8 = () => {
	return `Páginas de prueba`;
};
var header_pricing$8 = () => {
	return `Precios`;
};
var header_products$8 = () => {
	return `Productos`;
};
var header_settings$8 = () => {
	return `Ajustes`;
};
var header_team$8 = () => {
	return `Equipo`;
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
var header_blog$7 = () => {
	return `Blog`;
};
var header_careers$7 = () => {
	return `Karriere`;
};
var header_contact$7 = () => {
	return `Kontakt`;
};
var header_faq$7 = () => {
	return `FAQ`;
};
var header_gotogithub2$7 = () => {
	return `Zu GitHub`;
};
var header_home$7 = () => {
	return `Startseite`;
};
var header_methodology$7 = () => {
	return `Methodik`;
};
var header_mockpages1$7 = () => {
	return `Testseiten`;
};
var header_pricing$7 = () => {
	return `Preise`;
};
var header_products$7 = () => {
	return `Produkte`;
};
var header_settings$7 = () => {
	return `Einstellungen`;
};
var header_team$7 = () => {
	return `Team`;
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
var header_blog$6 = () => {
	return `Blog`;
};
var header_careers$6 = () => {
	return `Carriere`;
};
var header_contact$6 = () => {
	return `Contatti`;
};
var header_faq$6 = () => {
	return `FAQ`;
};
var header_gotogithub2$6 = () => {
	return `Vai su GitHub`;
};
var header_home$6 = () => {
	return `Home`;
};
var header_methodology$6 = () => {
	return `Metodologia`;
};
var header_mockpages1$6 = () => {
	return `Pagine di test`;
};
var header_pricing$6 = () => {
	return `Prezzi`;
};
var header_products$6 = () => {
	return `Prodotti`;
};
var header_settings$6 = () => {
	return `Impostazioni`;
};
var header_team$6 = () => {
	return `Team`;
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
var header_blog$5 = () => {
	return `Blog`;
};
var header_careers$5 = () => {
	return `Carreiras`;
};
var header_contact$5 = () => {
	return `Contato`;
};
var header_faq$5 = () => {
	return `FAQ`;
};
var header_gotogithub2$5 = () => {
	return `Ir para GitHub`;
};
var header_home$5 = () => {
	return `Início`;
};
var header_methodology$5 = () => {
	return `Metodologia`;
};
var header_mockpages1$5 = () => {
	return `Páginas de teste`;
};
var header_pricing$5 = () => {
	return `Preços`;
};
var header_products$5 = () => {
	return `Produtos`;
};
var header_settings$5 = () => {
	return `Configurações`;
};
var header_team$5 = () => {
	return `Equipe`;
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
var header_blog$4 = () => {
	return `博客`;
};
var header_careers$4 = () => {
	return `职业生涯`;
};
var header_contact$4 = () => {
	return `联系我们`;
};
var header_faq$4 = () => {
	return `常见问题`;
};
var header_gotogithub2$4 = () => {
	return `访问 GitHub`;
};
var header_home$4 = () => {
	return `首页`;
};
var header_methodology$4 = () => {
	return `方法论`;
};
var header_mockpages1$4 = () => {
	return `模拟页面`;
};
var header_pricing$4 = () => {
	return `价格`;
};
var header_products$4 = () => {
	return `产品`;
};
var header_settings$4 = () => {
	return `设置`;
};
var header_team$4 = () => {
	return `团队`;
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
var header_blog$3 = () => {
	return `ブログ`;
};
var header_careers$3 = () => {
	return `採用情報`;
};
var header_contact$3 = () => {
	return `お問い合わせ`;
};
var header_faq$3 = () => {
	return `FAQ`;
};
var header_gotogithub2$3 = () => {
	return `GitHubへ`;
};
var header_home$3 = () => {
	return `ホーム`;
};
var header_methodology$3 = () => {
	return `方法論`;
};
var header_mockpages1$3 = () => {
	return `モックページ`;
};
var header_pricing$3 = () => {
	return `料金`;
};
var header_products$3 = () => {
	return `製品`;
};
var header_settings$3 = () => {
	return `設定`;
};
var header_team$3 = () => {
	return `チーム`;
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
var header_blog$2 = () => {
	return `블로그`;
};
var header_careers$2 = () => {
	return `채용`;
};
var header_contact$2 = () => {
	return `문의하기`;
};
var header_faq$2 = () => {
	return `FAQ`;
};
var header_gotogithub2$2 = () => {
	return `GitHub으로 이동`;
};
var header_home$2 = () => {
	return `홈`;
};
var header_methodology$2 = () => {
	return `방법론`;
};
var header_mockpages1$2 = () => {
	return `모의 페이지`;
};
var header_pricing$2 = () => {
	return `요금`;
};
var header_products$2 = () => {
	return `제품`;
};
var header_settings$2 = () => {
	return `설정`;
};
var header_team$2 = () => {
	return `팀`;
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
var header_blog$1 = () => {
	return `Блог`;
};
var header_careers$1 = () => {
	return `Карьера`;
};
var header_contact$1 = () => {
	return `Контакт`;
};
var header_faq$1 = () => {
	return `FAQ`;
};
var header_gotogithub2$1 = () => {
	return `Перейти на GitHub`;
};
var header_home$1 = () => {
	return `Главная`;
};
var header_methodology$1 = () => {
	return `Методология`;
};
var header_mockpages1$1 = () => {
	return `Тестовые страницы`;
};
var header_pricing$1 = () => {
	return `Цены`;
};
var header_products$1 = () => {
	return `Продукты`;
};
var header_settings$1 = () => {
	return `Настройки`;
};
var header_team$1 = () => {
	return `Команда`;
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
var header_blog = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return header_blog$9(inputs);
	if (locale === "es") return header_blog$8(inputs);
	if (locale === "de") return header_blog$7(inputs);
	if (locale === "it") return header_blog$6(inputs);
	if (locale === "pt") return header_blog$5(inputs);
	if (locale === "zh") return header_blog$4(inputs);
	if (locale === "ja") return header_blog$3(inputs);
	if (locale === "ko") return header_blog$2(inputs);
	if (locale === "ru") return header_blog$1(inputs);
	return header_blog$10(inputs);
});
var header_careers = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return header_careers$9(inputs);
	if (locale === "es") return header_careers$8(inputs);
	if (locale === "de") return header_careers$7(inputs);
	if (locale === "it") return header_careers$6(inputs);
	if (locale === "pt") return header_careers$5(inputs);
	if (locale === "zh") return header_careers$4(inputs);
	if (locale === "ja") return header_careers$3(inputs);
	if (locale === "ko") return header_careers$2(inputs);
	if (locale === "ru") return header_careers$1(inputs);
	return header_careers$10(inputs);
});
var header_contact = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return header_contact$9(inputs);
	if (locale === "es") return header_contact$8(inputs);
	if (locale === "de") return header_contact$7(inputs);
	if (locale === "it") return header_contact$6(inputs);
	if (locale === "pt") return header_contact$5(inputs);
	if (locale === "zh") return header_contact$4(inputs);
	if (locale === "ja") return header_contact$3(inputs);
	if (locale === "ko") return header_contact$2(inputs);
	if (locale === "ru") return header_contact$1(inputs);
	return header_contact$10(inputs);
});
var header_faq = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return header_faq$9(inputs);
	if (locale === "es") return header_faq$8(inputs);
	if (locale === "de") return header_faq$7(inputs);
	if (locale === "it") return header_faq$6(inputs);
	if (locale === "pt") return header_faq$5(inputs);
	if (locale === "zh") return header_faq$4(inputs);
	if (locale === "ja") return header_faq$3(inputs);
	if (locale === "ko") return header_faq$2(inputs);
	if (locale === "ru") return header_faq$1(inputs);
	return header_faq$10(inputs);
});
var header_gotogithub2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return header_gotogithub2$9(inputs);
	if (locale === "es") return header_gotogithub2$8(inputs);
	if (locale === "de") return header_gotogithub2$7(inputs);
	if (locale === "it") return header_gotogithub2$6(inputs);
	if (locale === "pt") return header_gotogithub2$5(inputs);
	if (locale === "zh") return header_gotogithub2$4(inputs);
	if (locale === "ja") return header_gotogithub2$3(inputs);
	if (locale === "ko") return header_gotogithub2$2(inputs);
	if (locale === "ru") return header_gotogithub2$1(inputs);
	return header_gotogithub2$10(inputs);
});
var header_home = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return header_home$9(inputs);
	if (locale === "es") return header_home$8(inputs);
	if (locale === "de") return header_home$7(inputs);
	if (locale === "it") return header_home$6(inputs);
	if (locale === "pt") return header_home$5(inputs);
	if (locale === "zh") return header_home$4(inputs);
	if (locale === "ja") return header_home$3(inputs);
	if (locale === "ko") return header_home$2(inputs);
	if (locale === "ru") return header_home$1(inputs);
	return header_home$10(inputs);
});
var header_methodology = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return header_methodology$9(inputs);
	if (locale === "es") return header_methodology$8(inputs);
	if (locale === "de") return header_methodology$7(inputs);
	if (locale === "it") return header_methodology$6(inputs);
	if (locale === "pt") return header_methodology$5(inputs);
	if (locale === "zh") return header_methodology$4(inputs);
	if (locale === "ja") return header_methodology$3(inputs);
	if (locale === "ko") return header_methodology$2(inputs);
	if (locale === "ru") return header_methodology$1(inputs);
	return header_methodology$10(inputs);
});
var header_mockpages1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return header_mockpages1$9(inputs);
	if (locale === "es") return header_mockpages1$8(inputs);
	if (locale === "de") return header_mockpages1$7(inputs);
	if (locale === "it") return header_mockpages1$6(inputs);
	if (locale === "pt") return header_mockpages1$5(inputs);
	if (locale === "zh") return header_mockpages1$4(inputs);
	if (locale === "ja") return header_mockpages1$3(inputs);
	if (locale === "ko") return header_mockpages1$2(inputs);
	if (locale === "ru") return header_mockpages1$1(inputs);
	return header_mockpages1$10(inputs);
});
var header_pricing = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return header_pricing$9(inputs);
	if (locale === "es") return header_pricing$8(inputs);
	if (locale === "de") return header_pricing$7(inputs);
	if (locale === "it") return header_pricing$6(inputs);
	if (locale === "pt") return header_pricing$5(inputs);
	if (locale === "zh") return header_pricing$4(inputs);
	if (locale === "ja") return header_pricing$3(inputs);
	if (locale === "ko") return header_pricing$2(inputs);
	if (locale === "ru") return header_pricing$1(inputs);
	return header_pricing$10(inputs);
});
var header_products = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return header_products$9(inputs);
	if (locale === "es") return header_products$8(inputs);
	if (locale === "de") return header_products$7(inputs);
	if (locale === "it") return header_products$6(inputs);
	if (locale === "pt") return header_products$5(inputs);
	if (locale === "zh") return header_products$4(inputs);
	if (locale === "ja") return header_products$3(inputs);
	if (locale === "ko") return header_products$2(inputs);
	if (locale === "ru") return header_products$1(inputs);
	return header_products$10(inputs);
});
var header_settings = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return header_settings$9(inputs);
	if (locale === "es") return header_settings$8(inputs);
	if (locale === "de") return header_settings$7(inputs);
	if (locale === "it") return header_settings$6(inputs);
	if (locale === "pt") return header_settings$5(inputs);
	if (locale === "zh") return header_settings$4(inputs);
	if (locale === "ja") return header_settings$3(inputs);
	if (locale === "ko") return header_settings$2(inputs);
	if (locale === "ru") return header_settings$1(inputs);
	return header_settings$10(inputs);
});
var header_team = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return header_team$9(inputs);
	if (locale === "es") return header_team$8(inputs);
	if (locale === "de") return header_team$7(inputs);
	if (locale === "it") return header_team$6(inputs);
	if (locale === "pt") return header_team$5(inputs);
	if (locale === "zh") return header_team$4(inputs);
	if (locale === "ja") return header_team$3(inputs);
	if (locale === "ko") return header_team$2(inputs);
	if (locale === "ru") return header_team$1(inputs);
	return header_team$10(inputs);
});
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
var _jsxFileName$4 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/ThemeToggle.tsx";
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
		fileName: _jsxFileName$4,
		lineNumber: 74,
		columnNumber: 5
	}, this);
}
var _jsxFileName$3 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/LocaleSwitcher.tsx";
function LocaleSwitcher() {
	const locale = useParams({ strict: false }).locale ?? "en";
	const navigate = useNavigate();
	const getLocaleName = (l) => {
		try {
			const name = new Intl.DisplayNames([l], { type: "language" }).of(l);
			return name ? name.charAt(0).toUpperCase() + name.slice(1) : l;
		} catch (e) {
			return l.toUpperCase();
		}
	};
	const handleLocaleChange = (newLocale) => {
		navigate({
			to: ".",
			params: (prev) => ({
				...prev,
				locale: newLocale
			})
		});
	};
	return jsxDEV("div", {
		className: "flex items-center gap-2",
		children: jsxDEV("select", {
			value: locale,
			onChange: (e) => handleLocaleChange(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: locales.map((l) => jsxDEV("option", {
				value: l,
				children: getLocaleName(l)
			}, l, false, {
				fileName: _jsxFileName$3,
				lineNumber: 34,
				columnNumber: 11
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 28,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 27,
		columnNumber: 5
	}, this);
}
function usePerformanceMeasure(name) {
	if (typeof performance !== "undefined" && performance.mark) performance.mark(`${name}-start`);
	useLayoutEffect(() => {
		if (typeof performance !== "undefined" && performance.mark && performance.measure) {
			performance.mark(`${name}-end`);
			try {
				performance.measure(`${name}-render`, `${name}-start`, `${name}-end`);
			} catch (e) {}
		}
	}, [name]);
}
var _jsxFileName$2 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/Header.tsx";
function Header() {
	usePerformanceMeasure("Header");
	const [isMockPagesOpen, setIsMockPagesOpen] = useState(false);
	const currentLocale = useParams({ strict: false }).locale ?? "en";
	const mockPages = [
		{
			to: "/$locale/products",
			label: header_products()
		},
		{
			to: "/$locale/pricing",
			label: header_pricing()
		},
		{
			to: "/$locale/team",
			label: header_team()
		},
		{
			to: "/$locale/blog",
			label: header_blog()
		},
		{
			to: "/$locale/careers",
			label: header_careers()
		},
		{
			to: "/$locale/faq",
			label: header_faq()
		},
		{
			to: "/$locale/contact",
			label: header_contact()
		},
		{
			to: "/$locale/settings",
			label: header_settings()
		}
	];
	return jsxDEV("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: jsxDEV("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [jsxDEV("div", {
				className: "flex items-center gap-8",
				children: [jsxDEV(Link, {
					preload: false,
					to: "/$locale",
					params: { locale: currentLocale },
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 31,
					columnNumber: 11
				}, this), jsxDEV("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						jsxDEV(Link, {
							preload: false,
							to: "/$locale",
							params: { locale: currentLocale },
							activeOptions: { exact: true },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: header_home()
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 41,
							columnNumber: 13
						}, this),
						jsxDEV(Link, {
							preload: false,
							to: "/$locale/about",
							params: { locale: currentLocale },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: header_methodology()
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 51,
							columnNumber: 13
						}, this),
						jsxDEV("div", {
							className: "relative",
							children: [jsxDEV("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => setIsMockPagesOpen(true),
								onMouseLeave: () => setIsMockPagesOpen(false),
								onClick: () => setIsMockPagesOpen(!isMockPagesOpen),
								children: [header_mockpages1(), jsxDEV(ChevronDown, {
									size: 14,
									className: `transition-transform ${isMockPagesOpen ? "rotate-180" : ""}`
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 71,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 63,
								columnNumber: 15
							}, this), isMockPagesOpen && jsxDEV("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => setIsMockPagesOpen(true),
								onMouseLeave: () => setIsMockPagesOpen(false),
								children: jsxDEV("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: mockPages.map((page) => jsxDEV(Link, {
										preload: false,
										to: page.to,
										params: { locale: currentLocale },
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => setIsMockPagesOpen(false),
										children: page.label
									}, page.to, false, {
										fileName: _jsxFileName$2,
										lineNumber: 85,
										columnNumber: 23
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 83,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 78,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 62,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 40,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 30,
				columnNumber: 9
			}, this), jsxDEV("div", {
				className: "flex items-center gap-4",
				children: [
					jsxDEV("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [jsxDEV("span", {
							className: "sr-only",
							children: header_gotogithub2()
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 110,
							columnNumber: 13
						}, this), jsxDEV("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: jsxDEV("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 112,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 111,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 104,
						columnNumber: 11
					}, this),
					jsxDEV(LocaleSwitcher, {}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 118,
						columnNumber: 11
					}, this),
					jsxDEV(ThemeToggle, {}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 119,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 103,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 29,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 28,
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
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/Header.wrapper.tsx";
function Wrapped() {
	return jsxDEV(Wrapper, { children: jsxDEV(Header, {}, void 0, false, {
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
