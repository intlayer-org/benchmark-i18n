import "react";
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
var pricing_tiers_alllibraries1$10 = () => {
	return `All libraries`;
};
var pricing_tiers_auditlogs1$10 = () => {
	return `Audit logs`;
};
var pricing_tiers_benchmarkrunperday3$10 = (i) => {
	return `${i?.runs} benchmark runs/day`;
};
var pricing_tiers_ciintegration1$10 = () => {
	return `CI integration`;
};
var pricing_tiers_communitysupport1$10 = () => {
	return `Community support`;
};
var pricing_tiers_contactsales1$10 = () => {
	return `Contact Sales`;
};
var pricing_tiers_customprice1$10 = () => {
	return `Custom`;
};
var pricing_tiers_customslas1$10 = () => {
	return `Custom SLAs`;
};
var pricing_tiers_dedicatedaccountmanager2$10 = () => {
	return `Dedicated account manager`;
};
var pricing_tiers_enterprise$10 = () => {
	return `Enterprise`;
};
var pricing_tiers_everythinginpro2$10 = () => {
	return `Everything in Pro`;
};
var pricing_tiers_forever$10 = () => {
	return `forever`;
};
var pricing_tiers_getstarted1$10 = () => {
	return `Get Started`;
};
var pricing_tiers_historicaldata1$10 = () => {
	return `Historical data`;
};
var pricing_tiers_librariesnumber1$10 = (i) => {
	return `${i?.libs} libraries`;
};
var pricing_tiers_month$10 = () => {
	return `/month`;
};
var pricing_tiers_onpremiseoption2$10 = () => {
	return `On-premise option`;
};
var pricing_tiers_price0$10 = () => {
	return `$0`;
};
var pricing_tiers_price29$10 = () => {
	return `$29`;
};
var pricing_tiers_prioritysupport1$10 = () => {
	return `Priority support`;
};
var pricing_tiers_privateresults1$10 = () => {
	return `Private results`;
};
var pricing_tiers_pro$10 = () => {
	return `Pro`;
};
var pricing_tiers_publicresults1$10 = () => {
	return `Public results`;
};
var pricing_tiers_ssosaml1$10 = () => {
	return `SSO & SAML`;
};
var pricing_tiers_starter$10 = () => {
	return `Starter`;
};
var pricing_tiers_trainingsessions1$10 = () => {
	return `Training sessions`;
};
var pricing_tiers_unlimitedruns1$10 = () => {
	return `Unlimited runs`;
};
var pricing_tiers_alllibraries1$9 = () => {
	return `Toutes les bibliothèques`;
};
var pricing_tiers_auditlogs1$9 = () => {
	return `Journaux d'audit`;
};
var pricing_tiers_benchmarkrunperday3$9 = (i) => {
	return `${i?.runs} passages de benchmark / jour`;
};
var pricing_tiers_ciintegration1$9 = () => {
	return `Intégration CI`;
};
var pricing_tiers_communitysupport1$9 = () => {
	return `Support communautaire`;
};
var pricing_tiers_contactsales1$9 = () => {
	return `Contacter le service commercial`;
};
var pricing_tiers_customprice1$9 = () => {
	return `Sur mesure`;
};
var pricing_tiers_customslas1$9 = () => {
	return `SLA personnalisés`;
};
var pricing_tiers_dedicatedaccountmanager2$9 = () => {
	return `Gestionnaire de compte dédié`;
};
var pricing_tiers_enterprise$9 = () => {
	return `Enterprise`;
};
var pricing_tiers_everythinginpro2$9 = () => {
	return `Tout ce qui est dans Pro`;
};
var pricing_tiers_forever$9 = () => {
	return `pour toujours`;
};
var pricing_tiers_getstarted1$9 = () => {
	return `Démarrer`;
};
var pricing_tiers_historicaldata1$9 = () => {
	return `Données historiques`;
};
var pricing_tiers_librariesnumber1$9 = (i) => {
	return `${i?.libs} bibliothèques`;
};
var pricing_tiers_month$9 = () => {
	return `/ mois`;
};
var pricing_tiers_onpremiseoption2$9 = () => {
	return `Option sur site (on-premise)`;
};
var pricing_tiers_price0$9 = () => {
	return `0 €`;
};
var pricing_tiers_price29$9 = () => {
	return `29 €`;
};
var pricing_tiers_prioritysupport1$9 = () => {
	return `Support prioritaire`;
};
var pricing_tiers_privateresults1$9 = () => {
	return `Résultats privés`;
};
var pricing_tiers_pro$9 = () => {
	return `Pro`;
};
var pricing_tiers_publicresults1$9 = () => {
	return `Résultats publics`;
};
var pricing_tiers_ssosaml1$9 = () => {
	return `SSO & SAML`;
};
var pricing_tiers_starter$9 = () => {
	return `Starter`;
};
var pricing_tiers_trainingsessions1$9 = () => {
	return `Sessions de formation`;
};
var pricing_tiers_unlimitedruns1$9 = () => {
	return `Passages illimités`;
};
var pricing_tiers_alllibraries1$8 = () => {
	return `Todas las bibliotecas`;
};
var pricing_tiers_auditlogs1$8 = () => {
	return `Registros de auditoría`;
};
var pricing_tiers_benchmarkrunperday3$8 = (i) => {
	return `${i?.runs} ejecuciones de benchmark/día`;
};
var pricing_tiers_ciintegration1$8 = () => {
	return `Integración CI`;
};
var pricing_tiers_communitysupport1$8 = () => {
	return `Soporte de la comunidad`;
};
var pricing_tiers_contactsales1$8 = () => {
	return `Contactar con ventas`;
};
var pricing_tiers_customprice1$8 = () => {
	return `Personalizado`;
};
var pricing_tiers_customslas1$8 = () => {
	return `SLA personalizados`;
};
var pricing_tiers_dedicatedaccountmanager2$8 = () => {
	return `Gestor de cuentas dedicado`;
};
var pricing_tiers_enterprise$8 = () => {
	return `Enterprise`;
};
var pricing_tiers_everythinginpro2$8 = () => {
	return `Todo lo que hay en Pro`;
};
var pricing_tiers_forever$8 = () => {
	return `para siempre`;
};
var pricing_tiers_getstarted1$8 = () => {
	return `Empezar`;
};
var pricing_tiers_historicaldata1$8 = () => {
	return `Datos históricos`;
};
var pricing_tiers_librariesnumber1$8 = (i) => {
	return `${i?.libs} bibliotecas`;
};
var pricing_tiers_month$8 = () => {
	return `/mes`;
};
var pricing_tiers_onpremiseoption2$8 = () => {
	return `Opción on-premise`;
};
var pricing_tiers_price0$8 = () => {
	return `0 $`;
};
var pricing_tiers_price29$8 = () => {
	return `29 $`;
};
var pricing_tiers_prioritysupport1$8 = () => {
	return `Soporte prioritario`;
};
var pricing_tiers_privateresults1$8 = () => {
	return `Resultados privados`;
};
var pricing_tiers_pro$8 = () => {
	return `Pro`;
};
var pricing_tiers_publicresults1$8 = () => {
	return `Resultados públicos`;
};
var pricing_tiers_ssosaml1$8 = () => {
	return `SSO y SAML`;
};
var pricing_tiers_starter$8 = () => {
	return `Starter`;
};
var pricing_tiers_trainingsessions1$8 = () => {
	return `Sesiones de formación`;
};
var pricing_tiers_unlimitedruns1$8 = () => {
	return `Ejecuciones ilimitadas`;
};
var pricing_tiers_alllibraries1$7 = () => {
	return `Alle Bibliotheken`;
};
var pricing_tiers_auditlogs1$7 = () => {
	return `Audit-Logs`;
};
var pricing_tiers_benchmarkrunperday3$7 = (i) => {
	return `${i?.runs} Benchmark-Durchläufe/Tag`;
};
var pricing_tiers_ciintegration1$7 = () => {
	return `CI-Integration`;
};
var pricing_tiers_communitysupport1$7 = () => {
	return `Community-Support`;
};
var pricing_tiers_contactsales1$7 = () => {
	return `Vertrieb kontaktieren`;
};
var pricing_tiers_customprice1$7 = () => {
	return `Individuell`;
};
var pricing_tiers_customslas1$7 = () => {
	return `Individuelle SLAs`;
};
var pricing_tiers_dedicatedaccountmanager2$7 = () => {
	return `Dedizierter Account-Manager`;
};
var pricing_tiers_enterprise$7 = () => {
	return `Enterprise`;
};
var pricing_tiers_everythinginpro2$7 = () => {
	return `Alles in Pro`;
};
var pricing_tiers_forever$7 = () => {
	return `für immer`;
};
var pricing_tiers_getstarted1$7 = () => {
	return `Jetzt starten`;
};
var pricing_tiers_historicaldata1$7 = () => {
	return `Historische Daten`;
};
var pricing_tiers_librariesnumber1$7 = (i) => {
	return `${i?.libs} Bibliotheken`;
};
var pricing_tiers_month$7 = () => {
	return `/Monat`;
};
var pricing_tiers_onpremiseoption2$7 = () => {
	return `On-Premise-Option`;
};
var pricing_tiers_price0$7 = () => {
	return `0 $`;
};
var pricing_tiers_price29$7 = () => {
	return `29 $`;
};
var pricing_tiers_prioritysupport1$7 = () => {
	return `Prioritäts-Support`;
};
var pricing_tiers_privateresults1$7 = () => {
	return `Private Ergebnisse`;
};
var pricing_tiers_pro$7 = () => {
	return `Pro`;
};
var pricing_tiers_publicresults1$7 = () => {
	return `Öffentliche Ergebnisse`;
};
var pricing_tiers_ssosaml1$7 = () => {
	return `SSO & SAML`;
};
var pricing_tiers_starter$7 = () => {
	return `Starter`;
};
var pricing_tiers_trainingsessions1$7 = () => {
	return `Schulungen`;
};
var pricing_tiers_unlimitedruns1$7 = () => {
	return `Unbegrenzte Durchläufe`;
};
var pricing_tiers_alllibraries1$6 = () => {
	return `Tutte le librerie`;
};
var pricing_tiers_auditlogs1$6 = () => {
	return `Registri di controllo`;
};
var pricing_tiers_benchmarkrunperday3$6 = (i) => {
	return `${i?.runs} esecuzioni benchmark/giorno`;
};
var pricing_tiers_ciintegration1$6 = () => {
	return `Integrazione CI`;
};
var pricing_tiers_communitysupport1$6 = () => {
	return `Supporto della comunità`;
};
var pricing_tiers_contactsales1$6 = () => {
	return `Contatta l'ufficio vendite`;
};
var pricing_tiers_customprice1$6 = () => {
	return `Personalizzato`;
};
var pricing_tiers_customslas1$6 = () => {
	return `SLA personalizzati`;
};
var pricing_tiers_dedicatedaccountmanager2$6 = () => {
	return `Account manager dedicato`;
};
var pricing_tiers_enterprise$6 = () => {
	return `Enterprise`;
};
var pricing_tiers_everythinginpro2$6 = () => {
	return `Tutto quello che c'è in Pro`;
};
var pricing_tiers_forever$6 = () => {
	return `per sempre`;
};
var pricing_tiers_getstarted1$6 = () => {
	return `Inizia ora`;
};
var pricing_tiers_historicaldata1$6 = () => {
	return `Dati storici`;
};
var pricing_tiers_librariesnumber1$6 = (i) => {
	return `${i?.libs} librerie`;
};
var pricing_tiers_month$6 = () => {
	return `/mese`;
};
var pricing_tiers_onpremiseoption2$6 = () => {
	return `Opzione in locale`;
};
var pricing_tiers_price0$6 = () => {
	return `0 $`;
};
var pricing_tiers_price29$6 = () => {
	return `29 $`;
};
var pricing_tiers_prioritysupport1$6 = () => {
	return `Supporto prioritario`;
};
var pricing_tiers_privateresults1$6 = () => {
	return `Risultati privati`;
};
var pricing_tiers_pro$6 = () => {
	return `Pro`;
};
var pricing_tiers_publicresults1$6 = () => {
	return `Risultati pubblici`;
};
var pricing_tiers_ssosaml1$6 = () => {
	return `SSO e SAML`;
};
var pricing_tiers_starter$6 = () => {
	return `Starter`;
};
var pricing_tiers_trainingsessions1$6 = () => {
	return `Sessioni di formazione`;
};
var pricing_tiers_unlimitedruns1$6 = () => {
	return `Esecuzioni illimitate`;
};
var pricing_tiers_alllibraries1$5 = () => {
	return `Todas as bibliotecas`;
};
var pricing_tiers_auditlogs1$5 = () => {
	return `Logs de auditoria`;
};
var pricing_tiers_benchmarkrunperday3$5 = (i) => {
	return `${i?.runs} execuções de benchmark por dia`;
};
var pricing_tiers_ciintegration1$5 = () => {
	return `Integração CI`;
};
var pricing_tiers_communitysupport1$5 = () => {
	return `Suporte da comunidade`;
};
var pricing_tiers_contactsales1$5 = () => {
	return `Contatar Vendas`;
};
var pricing_tiers_customprice1$5 = () => {
	return `Personalizado`;
};
var pricing_tiers_customslas1$5 = () => {
	return `SLAs personalizados`;
};
var pricing_tiers_dedicatedaccountmanager2$5 = () => {
	return `Gerente de conta dedicado`;
};
var pricing_tiers_enterprise$5 = () => {
	return `Enterprise`;
};
var pricing_tiers_everythinginpro2$5 = () => {
	return `Tudo o que está no Pro`;
};
var pricing_tiers_forever$5 = () => {
	return `para sempre`;
};
var pricing_tiers_getstarted1$5 = () => {
	return `Começar`;
};
var pricing_tiers_historicaldata1$5 = () => {
	return `Dados históricos`;
};
var pricing_tiers_librariesnumber1$5 = (i) => {
	return `${i?.libs} bibliotecas`;
};
var pricing_tiers_month$5 = () => {
	return `/mês`;
};
var pricing_tiers_onpremiseoption2$5 = () => {
	return `Opção on-premise`;
};
var pricing_tiers_price0$5 = () => {
	return `0 $`;
};
var pricing_tiers_price29$5 = () => {
	return `29 $`;
};
var pricing_tiers_prioritysupport1$5 = () => {
	return `Suporte prioritário`;
};
var pricing_tiers_privateresults1$5 = () => {
	return `Resultados privados`;
};
var pricing_tiers_pro$5 = () => {
	return `Pro`;
};
var pricing_tiers_publicresults1$5 = () => {
	return `Resultados públicos`;
};
var pricing_tiers_ssosaml1$5 = () => {
	return `SSO & SAML`;
};
var pricing_tiers_starter$5 = () => {
	return `Starter`;
};
var pricing_tiers_trainingsessions1$5 = () => {
	return `Sessões de treinamento`;
};
var pricing_tiers_unlimitedruns1$5 = () => {
	return `Execuções ilimitadas`;
};
var pricing_tiers_alllibraries1$4 = () => {
	return `所有库`;
};
var pricing_tiers_auditlogs1$4 = () => {
	return `审计日志`;
};
var pricing_tiers_benchmarkrunperday3$4 = (i) => {
	return `每天 ${i?.runs} 次基准测试运行`;
};
var pricing_tiers_ciintegration1$4 = () => {
	return `CI 集成`;
};
var pricing_tiers_communitysupport1$4 = () => {
	return `社区支持`;
};
var pricing_tiers_contactsales1$4 = () => {
	return `联系销售`;
};
var pricing_tiers_customprice1$4 = () => {
	return `定制`;
};
var pricing_tiers_customslas1$4 = () => {
	return `定制 SLA`;
};
var pricing_tiers_dedicatedaccountmanager2$4 = () => {
	return `专属客户经理`;
};
var pricing_tiers_enterprise$4 = () => {
	return `企业版`;
};
var pricing_tiers_everythinginpro2$4 = () => {
	return `包含专业版所有功能`;
};
var pricing_tiers_forever$4 = () => {
	return `永久`;
};
var pricing_tiers_getstarted1$4 = () => {
	return `立即开始`;
};
var pricing_tiers_historicaldata1$4 = () => {
	return `历史数据`;
};
var pricing_tiers_librariesnumber1$4 = (i) => {
	return `${i?.libs} 个库`;
};
var pricing_tiers_month$4 = () => {
	return `/月`;
};
var pricing_tiers_onpremiseoption2$4 = () => {
	return `本地部署选项`;
};
var pricing_tiers_price0$4 = () => {
	return `¥0`;
};
var pricing_tiers_price29$4 = () => {
	return `¥199`;
};
var pricing_tiers_prioritysupport1$4 = () => {
	return `优先支持`;
};
var pricing_tiers_privateresults1$4 = () => {
	return `私有结果`;
};
var pricing_tiers_pro$4 = () => {
	return `专业版`;
};
var pricing_tiers_publicresults1$4 = () => {
	return `公开结果`;
};
var pricing_tiers_ssosaml1$4 = () => {
	return `SSO 和 SAML`;
};
var pricing_tiers_starter$4 = () => {
	return `入门版`;
};
var pricing_tiers_trainingsessions1$4 = () => {
	return `培训课程`;
};
var pricing_tiers_unlimitedruns1$4 = () => {
	return `无限次运行`;
};
var pricing_tiers_alllibraries1$3 = () => {
	return `すべてのライブラリ`;
};
var pricing_tiers_auditlogs1$3 = () => {
	return `監査ログ`;
};
var pricing_tiers_benchmarkrunperday3$3 = (i) => {
	return `1日あたり ${i?.runs} 回のベンチマーク実行`;
};
var pricing_tiers_ciintegration1$3 = () => {
	return `CI統合`;
};
var pricing_tiers_communitysupport1$3 = () => {
	return `コミュニティサポート`;
};
var pricing_tiers_contactsales1$3 = () => {
	return `営業に連絡`;
};
var pricing_tiers_customprice1$3 = () => {
	return `カスタム`;
};
var pricing_tiers_customslas1$3 = () => {
	return `カスタムSLA`;
};
var pricing_tiers_dedicatedaccountmanager2$3 = () => {
	return `専任のアカウントマネージャー`;
};
var pricing_tiers_enterprise$3 = () => {
	return `エンタープライズ`;
};
var pricing_tiers_everythinginpro2$3 = () => {
	return `Proプランの全機能`;
};
var pricing_tiers_forever$3 = () => {
	return `永久に`;
};
var pricing_tiers_getstarted1$3 = () => {
	return `今すぐ始める`;
};
var pricing_tiers_historicaldata1$3 = () => {
	return `履歴データ`;
};
var pricing_tiers_librariesnumber1$3 = (i) => {
	return `${i?.libs} 個のライブラリ`;
};
var pricing_tiers_month$3 = () => {
	return `/月`;
};
var pricing_tiers_onpremiseoption2$3 = () => {
	return `オンプレミスオプション`;
};
var pricing_tiers_price0$3 = () => {
	return `¥0`;
};
var pricing_tiers_price29$3 = () => {
	return `¥3,500`;
};
var pricing_tiers_prioritysupport1$3 = () => {
	return `優先サポート`;
};
var pricing_tiers_privateresults1$3 = () => {
	return `プライベート結果`;
};
var pricing_tiers_pro$3 = () => {
	return `プロ`;
};
var pricing_tiers_publicresults1$3 = () => {
	return `公開結果`;
};
var pricing_tiers_ssosaml1$3 = () => {
	return `SSO & SAML`;
};
var pricing_tiers_starter$3 = () => {
	return `スターター`;
};
var pricing_tiers_trainingsessions1$3 = () => {
	return `トレーニングセッション`;
};
var pricing_tiers_unlimitedruns1$3 = () => {
	return `無制限の実行`;
};
var pricing_tiers_alllibraries1$2 = () => {
	return `모든 라이브러리`;
};
var pricing_tiers_auditlogs1$2 = () => {
	return `감사 로그`;
};
var pricing_tiers_benchmarkrunperday3$2 = (i) => {
	return `하루 ${i?.runs}회 벤치마크 실행`;
};
var pricing_tiers_ciintegration1$2 = () => {
	return `CI 통합`;
};
var pricing_tiers_communitysupport1$2 = () => {
	return `커뮤니티 지원`;
};
var pricing_tiers_contactsales1$2 = () => {
	return `영업팀 문의`;
};
var pricing_tiers_customprice1$2 = () => {
	return `커스텀`;
};
var pricing_tiers_customslas1$2 = () => {
	return `맞춤형 SLA`;
};
var pricing_tiers_dedicatedaccountmanager2$2 = () => {
	return `전담 어카운트 매니저`;
};
var pricing_tiers_enterprise$2 = () => {
	return `엔터프라이즈`;
};
var pricing_tiers_everythinginpro2$2 = () => {
	return `Pro의 모든 기능 포함`;
};
var pricing_tiers_forever$2 = () => {
	return `영원히`;
};
var pricing_tiers_getstarted1$2 = () => {
	return `시작하기`;
};
var pricing_tiers_historicaldata1$2 = () => {
	return `기록 데이터`;
};
var pricing_tiers_librariesnumber1$2 = (i) => {
	return `${i?.libs}개 라이브러리`;
};
var pricing_tiers_month$2 = () => {
	return `/월`;
};
var pricing_tiers_onpremiseoption2$2 = () => {
	return `온프레미스 옵션`;
};
var pricing_tiers_price0$2 = () => {
	return `₩0`;
};
var pricing_tiers_price29$2 = () => {
	return `₩39,000`;
};
var pricing_tiers_prioritysupport1$2 = () => {
	return `우선 지원`;
};
var pricing_tiers_privateresults1$2 = () => {
	return `결과 비공개`;
};
var pricing_tiers_pro$2 = () => {
	return `프로`;
};
var pricing_tiers_publicresults1$2 = () => {
	return `결과 공개`;
};
var pricing_tiers_ssosaml1$2 = () => {
	return `SSO 및 SAML`;
};
var pricing_tiers_starter$2 = () => {
	return `스타터`;
};
var pricing_tiers_trainingsessions1$2 = () => {
	return `교육 세션`;
};
var pricing_tiers_unlimitedruns1$2 = () => {
	return `무제한 실행`;
};
var pricing_tiers_alllibraries1$1 = () => {
	return `Все библиотеки`;
};
var pricing_tiers_auditlogs1$1 = () => {
	return `Журналы аудита`;
};
var pricing_tiers_benchmarkrunperday3$1 = (i) => {
	return `${i?.runs} запусков бенчмарка в день`;
};
var pricing_tiers_ciintegration1$1 = () => {
	return `Интеграция с CI`;
};
var pricing_tiers_communitysupport1$1 = () => {
	return `Сообщество поддержки`;
};
var pricing_tiers_contactsales1$1 = () => {
	return `Связаться с отделом продаж`;
};
var pricing_tiers_customprice1$1 = () => {
	return `Индивидуальная цена`;
};
var pricing_tiers_customslas1$1 = () => {
	return `Индивидуальные SLA`;
};
var pricing_tiers_dedicatedaccountmanager2$1 = () => {
	return `Выделенный менеджер`;
};
var pricing_tiers_enterprise$1 = () => {
	return `Корпоративный`;
};
var pricing_tiers_everythinginpro2$1 = () => {
	return `Все возможности Pro`;
};
var pricing_tiers_forever$1 = () => {
	return `навсегда`;
};
var pricing_tiers_getstarted1$1 = () => {
	return `Начать`;
};
var pricing_tiers_historicaldata1$1 = () => {
	return `Исторические данные`;
};
var pricing_tiers_librariesnumber1$1 = (i) => {
	return `${i?.libs} библиотек`;
};
var pricing_tiers_month$1 = () => {
	return `/месяц`;
};
var pricing_tiers_onpremiseoption2$1 = () => {
	return `Локальное развертывание`;
};
var pricing_tiers_price0$1 = () => {
	return `0 $`;
};
var pricing_tiers_price29$1 = () => {
	return `29 $`;
};
var pricing_tiers_prioritysupport1$1 = () => {
	return `Приоритетная поддержка`;
};
var pricing_tiers_privateresults1$1 = () => {
	return `Приватные результаты`;
};
var pricing_tiers_pro$1 = () => {
	return `Pro`;
};
var pricing_tiers_publicresults1$1 = () => {
	return `Публичные результаты`;
};
var pricing_tiers_ssosaml1$1 = () => {
	return `SSO и SAML`;
};
var pricing_tiers_starter$1 = () => {
	return `Starter`;
};
var pricing_tiers_trainingsessions1$1 = () => {
	return `Сессии обучения`;
};
var pricing_tiers_unlimitedruns1$1 = () => {
	return `Неограниченное количество запусков`;
};
var pricing_tiers_alllibraries1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return pricing_tiers_alllibraries1$9(inputs);
	if (locale === "es") return pricing_tiers_alllibraries1$8(inputs);
	if (locale === "de") return pricing_tiers_alllibraries1$7(inputs);
	if (locale === "it") return pricing_tiers_alllibraries1$6(inputs);
	if (locale === "pt") return pricing_tiers_alllibraries1$5(inputs);
	if (locale === "zh") return pricing_tiers_alllibraries1$4(inputs);
	if (locale === "ja") return pricing_tiers_alllibraries1$3(inputs);
	if (locale === "ko") return pricing_tiers_alllibraries1$2(inputs);
	if (locale === "ru") return pricing_tiers_alllibraries1$1(inputs);
	return pricing_tiers_alllibraries1$10(inputs);
});
var pricing_tiers_auditlogs1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return pricing_tiers_auditlogs1$9(inputs);
	if (locale === "es") return pricing_tiers_auditlogs1$8(inputs);
	if (locale === "de") return pricing_tiers_auditlogs1$7(inputs);
	if (locale === "it") return pricing_tiers_auditlogs1$6(inputs);
	if (locale === "pt") return pricing_tiers_auditlogs1$5(inputs);
	if (locale === "zh") return pricing_tiers_auditlogs1$4(inputs);
	if (locale === "ja") return pricing_tiers_auditlogs1$3(inputs);
	if (locale === "ko") return pricing_tiers_auditlogs1$2(inputs);
	if (locale === "ru") return pricing_tiers_auditlogs1$1(inputs);
	return pricing_tiers_auditlogs1$10(inputs);
});
var pricing_tiers_benchmarkrunperday3 = ((inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return pricing_tiers_benchmarkrunperday3$9(inputs);
	if (locale === "es") return pricing_tiers_benchmarkrunperday3$8(inputs);
	if (locale === "de") return pricing_tiers_benchmarkrunperday3$7(inputs);
	if (locale === "it") return pricing_tiers_benchmarkrunperday3$6(inputs);
	if (locale === "pt") return pricing_tiers_benchmarkrunperday3$5(inputs);
	if (locale === "zh") return pricing_tiers_benchmarkrunperday3$4(inputs);
	if (locale === "ja") return pricing_tiers_benchmarkrunperday3$3(inputs);
	if (locale === "ko") return pricing_tiers_benchmarkrunperday3$2(inputs);
	if (locale === "ru") return pricing_tiers_benchmarkrunperday3$1(inputs);
	return pricing_tiers_benchmarkrunperday3$10(inputs);
});
var pricing_tiers_ciintegration1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return pricing_tiers_ciintegration1$9(inputs);
	if (locale === "es") return pricing_tiers_ciintegration1$8(inputs);
	if (locale === "de") return pricing_tiers_ciintegration1$7(inputs);
	if (locale === "it") return pricing_tiers_ciintegration1$6(inputs);
	if (locale === "pt") return pricing_tiers_ciintegration1$5(inputs);
	if (locale === "zh") return pricing_tiers_ciintegration1$4(inputs);
	if (locale === "ja") return pricing_tiers_ciintegration1$3(inputs);
	if (locale === "ko") return pricing_tiers_ciintegration1$2(inputs);
	if (locale === "ru") return pricing_tiers_ciintegration1$1(inputs);
	return pricing_tiers_ciintegration1$10(inputs);
});
var pricing_tiers_communitysupport1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return pricing_tiers_communitysupport1$9(inputs);
	if (locale === "es") return pricing_tiers_communitysupport1$8(inputs);
	if (locale === "de") return pricing_tiers_communitysupport1$7(inputs);
	if (locale === "it") return pricing_tiers_communitysupport1$6(inputs);
	if (locale === "pt") return pricing_tiers_communitysupport1$5(inputs);
	if (locale === "zh") return pricing_tiers_communitysupport1$4(inputs);
	if (locale === "ja") return pricing_tiers_communitysupport1$3(inputs);
	if (locale === "ko") return pricing_tiers_communitysupport1$2(inputs);
	if (locale === "ru") return pricing_tiers_communitysupport1$1(inputs);
	return pricing_tiers_communitysupport1$10(inputs);
});
var pricing_tiers_contactsales1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return pricing_tiers_contactsales1$9(inputs);
	if (locale === "es") return pricing_tiers_contactsales1$8(inputs);
	if (locale === "de") return pricing_tiers_contactsales1$7(inputs);
	if (locale === "it") return pricing_tiers_contactsales1$6(inputs);
	if (locale === "pt") return pricing_tiers_contactsales1$5(inputs);
	if (locale === "zh") return pricing_tiers_contactsales1$4(inputs);
	if (locale === "ja") return pricing_tiers_contactsales1$3(inputs);
	if (locale === "ko") return pricing_tiers_contactsales1$2(inputs);
	if (locale === "ru") return pricing_tiers_contactsales1$1(inputs);
	return pricing_tiers_contactsales1$10(inputs);
});
var pricing_tiers_customprice1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return pricing_tiers_customprice1$9(inputs);
	if (locale === "es") return pricing_tiers_customprice1$8(inputs);
	if (locale === "de") return pricing_tiers_customprice1$7(inputs);
	if (locale === "it") return pricing_tiers_customprice1$6(inputs);
	if (locale === "pt") return pricing_tiers_customprice1$5(inputs);
	if (locale === "zh") return pricing_tiers_customprice1$4(inputs);
	if (locale === "ja") return pricing_tiers_customprice1$3(inputs);
	if (locale === "ko") return pricing_tiers_customprice1$2(inputs);
	if (locale === "ru") return pricing_tiers_customprice1$1(inputs);
	return pricing_tiers_customprice1$10(inputs);
});
var pricing_tiers_customslas1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return pricing_tiers_customslas1$9(inputs);
	if (locale === "es") return pricing_tiers_customslas1$8(inputs);
	if (locale === "de") return pricing_tiers_customslas1$7(inputs);
	if (locale === "it") return pricing_tiers_customslas1$6(inputs);
	if (locale === "pt") return pricing_tiers_customslas1$5(inputs);
	if (locale === "zh") return pricing_tiers_customslas1$4(inputs);
	if (locale === "ja") return pricing_tiers_customslas1$3(inputs);
	if (locale === "ko") return pricing_tiers_customslas1$2(inputs);
	if (locale === "ru") return pricing_tiers_customslas1$1(inputs);
	return pricing_tiers_customslas1$10(inputs);
});
var pricing_tiers_dedicatedaccountmanager2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return pricing_tiers_dedicatedaccountmanager2$9(inputs);
	if (locale === "es") return pricing_tiers_dedicatedaccountmanager2$8(inputs);
	if (locale === "de") return pricing_tiers_dedicatedaccountmanager2$7(inputs);
	if (locale === "it") return pricing_tiers_dedicatedaccountmanager2$6(inputs);
	if (locale === "pt") return pricing_tiers_dedicatedaccountmanager2$5(inputs);
	if (locale === "zh") return pricing_tiers_dedicatedaccountmanager2$4(inputs);
	if (locale === "ja") return pricing_tiers_dedicatedaccountmanager2$3(inputs);
	if (locale === "ko") return pricing_tiers_dedicatedaccountmanager2$2(inputs);
	if (locale === "ru") return pricing_tiers_dedicatedaccountmanager2$1(inputs);
	return pricing_tiers_dedicatedaccountmanager2$10(inputs);
});
var pricing_tiers_enterprise = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return pricing_tiers_enterprise$9(inputs);
	if (locale === "es") return pricing_tiers_enterprise$8(inputs);
	if (locale === "de") return pricing_tiers_enterprise$7(inputs);
	if (locale === "it") return pricing_tiers_enterprise$6(inputs);
	if (locale === "pt") return pricing_tiers_enterprise$5(inputs);
	if (locale === "zh") return pricing_tiers_enterprise$4(inputs);
	if (locale === "ja") return pricing_tiers_enterprise$3(inputs);
	if (locale === "ko") return pricing_tiers_enterprise$2(inputs);
	if (locale === "ru") return pricing_tiers_enterprise$1(inputs);
	return pricing_tiers_enterprise$10(inputs);
});
var pricing_tiers_everythinginpro2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return pricing_tiers_everythinginpro2$9(inputs);
	if (locale === "es") return pricing_tiers_everythinginpro2$8(inputs);
	if (locale === "de") return pricing_tiers_everythinginpro2$7(inputs);
	if (locale === "it") return pricing_tiers_everythinginpro2$6(inputs);
	if (locale === "pt") return pricing_tiers_everythinginpro2$5(inputs);
	if (locale === "zh") return pricing_tiers_everythinginpro2$4(inputs);
	if (locale === "ja") return pricing_tiers_everythinginpro2$3(inputs);
	if (locale === "ko") return pricing_tiers_everythinginpro2$2(inputs);
	if (locale === "ru") return pricing_tiers_everythinginpro2$1(inputs);
	return pricing_tiers_everythinginpro2$10(inputs);
});
var pricing_tiers_forever = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return pricing_tiers_forever$9(inputs);
	if (locale === "es") return pricing_tiers_forever$8(inputs);
	if (locale === "de") return pricing_tiers_forever$7(inputs);
	if (locale === "it") return pricing_tiers_forever$6(inputs);
	if (locale === "pt") return pricing_tiers_forever$5(inputs);
	if (locale === "zh") return pricing_tiers_forever$4(inputs);
	if (locale === "ja") return pricing_tiers_forever$3(inputs);
	if (locale === "ko") return pricing_tiers_forever$2(inputs);
	if (locale === "ru") return pricing_tiers_forever$1(inputs);
	return pricing_tiers_forever$10(inputs);
});
var pricing_tiers_getstarted1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return pricing_tiers_getstarted1$9(inputs);
	if (locale === "es") return pricing_tiers_getstarted1$8(inputs);
	if (locale === "de") return pricing_tiers_getstarted1$7(inputs);
	if (locale === "it") return pricing_tiers_getstarted1$6(inputs);
	if (locale === "pt") return pricing_tiers_getstarted1$5(inputs);
	if (locale === "zh") return pricing_tiers_getstarted1$4(inputs);
	if (locale === "ja") return pricing_tiers_getstarted1$3(inputs);
	if (locale === "ko") return pricing_tiers_getstarted1$2(inputs);
	if (locale === "ru") return pricing_tiers_getstarted1$1(inputs);
	return pricing_tiers_getstarted1$10(inputs);
});
var pricing_tiers_historicaldata1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return pricing_tiers_historicaldata1$9(inputs);
	if (locale === "es") return pricing_tiers_historicaldata1$8(inputs);
	if (locale === "de") return pricing_tiers_historicaldata1$7(inputs);
	if (locale === "it") return pricing_tiers_historicaldata1$6(inputs);
	if (locale === "pt") return pricing_tiers_historicaldata1$5(inputs);
	if (locale === "zh") return pricing_tiers_historicaldata1$4(inputs);
	if (locale === "ja") return pricing_tiers_historicaldata1$3(inputs);
	if (locale === "ko") return pricing_tiers_historicaldata1$2(inputs);
	if (locale === "ru") return pricing_tiers_historicaldata1$1(inputs);
	return pricing_tiers_historicaldata1$10(inputs);
});
var pricing_tiers_librariesnumber1 = ((inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return pricing_tiers_librariesnumber1$9(inputs);
	if (locale === "es") return pricing_tiers_librariesnumber1$8(inputs);
	if (locale === "de") return pricing_tiers_librariesnumber1$7(inputs);
	if (locale === "it") return pricing_tiers_librariesnumber1$6(inputs);
	if (locale === "pt") return pricing_tiers_librariesnumber1$5(inputs);
	if (locale === "zh") return pricing_tiers_librariesnumber1$4(inputs);
	if (locale === "ja") return pricing_tiers_librariesnumber1$3(inputs);
	if (locale === "ko") return pricing_tiers_librariesnumber1$2(inputs);
	if (locale === "ru") return pricing_tiers_librariesnumber1$1(inputs);
	return pricing_tiers_librariesnumber1$10(inputs);
});
var pricing_tiers_month = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return pricing_tiers_month$9(inputs);
	if (locale === "es") return pricing_tiers_month$8(inputs);
	if (locale === "de") return pricing_tiers_month$7(inputs);
	if (locale === "it") return pricing_tiers_month$6(inputs);
	if (locale === "pt") return pricing_tiers_month$5(inputs);
	if (locale === "zh") return pricing_tiers_month$4(inputs);
	if (locale === "ja") return pricing_tiers_month$3(inputs);
	if (locale === "ko") return pricing_tiers_month$2(inputs);
	if (locale === "ru") return pricing_tiers_month$1(inputs);
	return pricing_tiers_month$10(inputs);
});
var pricing_tiers_onpremiseoption2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return pricing_tiers_onpremiseoption2$9(inputs);
	if (locale === "es") return pricing_tiers_onpremiseoption2$8(inputs);
	if (locale === "de") return pricing_tiers_onpremiseoption2$7(inputs);
	if (locale === "it") return pricing_tiers_onpremiseoption2$6(inputs);
	if (locale === "pt") return pricing_tiers_onpremiseoption2$5(inputs);
	if (locale === "zh") return pricing_tiers_onpremiseoption2$4(inputs);
	if (locale === "ja") return pricing_tiers_onpremiseoption2$3(inputs);
	if (locale === "ko") return pricing_tiers_onpremiseoption2$2(inputs);
	if (locale === "ru") return pricing_tiers_onpremiseoption2$1(inputs);
	return pricing_tiers_onpremiseoption2$10(inputs);
});
var pricing_tiers_price0 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return pricing_tiers_price0$9(inputs);
	if (locale === "es") return pricing_tiers_price0$8(inputs);
	if (locale === "de") return pricing_tiers_price0$7(inputs);
	if (locale === "it") return pricing_tiers_price0$6(inputs);
	if (locale === "pt") return pricing_tiers_price0$5(inputs);
	if (locale === "zh") return pricing_tiers_price0$4(inputs);
	if (locale === "ja") return pricing_tiers_price0$3(inputs);
	if (locale === "ko") return pricing_tiers_price0$2(inputs);
	if (locale === "ru") return pricing_tiers_price0$1(inputs);
	return pricing_tiers_price0$10(inputs);
});
var pricing_tiers_price29 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return pricing_tiers_price29$9(inputs);
	if (locale === "es") return pricing_tiers_price29$8(inputs);
	if (locale === "de") return pricing_tiers_price29$7(inputs);
	if (locale === "it") return pricing_tiers_price29$6(inputs);
	if (locale === "pt") return pricing_tiers_price29$5(inputs);
	if (locale === "zh") return pricing_tiers_price29$4(inputs);
	if (locale === "ja") return pricing_tiers_price29$3(inputs);
	if (locale === "ko") return pricing_tiers_price29$2(inputs);
	if (locale === "ru") return pricing_tiers_price29$1(inputs);
	return pricing_tiers_price29$10(inputs);
});
var pricing_tiers_prioritysupport1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return pricing_tiers_prioritysupport1$9(inputs);
	if (locale === "es") return pricing_tiers_prioritysupport1$8(inputs);
	if (locale === "de") return pricing_tiers_prioritysupport1$7(inputs);
	if (locale === "it") return pricing_tiers_prioritysupport1$6(inputs);
	if (locale === "pt") return pricing_tiers_prioritysupport1$5(inputs);
	if (locale === "zh") return pricing_tiers_prioritysupport1$4(inputs);
	if (locale === "ja") return pricing_tiers_prioritysupport1$3(inputs);
	if (locale === "ko") return pricing_tiers_prioritysupport1$2(inputs);
	if (locale === "ru") return pricing_tiers_prioritysupport1$1(inputs);
	return pricing_tiers_prioritysupport1$10(inputs);
});
var pricing_tiers_privateresults1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return pricing_tiers_privateresults1$9(inputs);
	if (locale === "es") return pricing_tiers_privateresults1$8(inputs);
	if (locale === "de") return pricing_tiers_privateresults1$7(inputs);
	if (locale === "it") return pricing_tiers_privateresults1$6(inputs);
	if (locale === "pt") return pricing_tiers_privateresults1$5(inputs);
	if (locale === "zh") return pricing_tiers_privateresults1$4(inputs);
	if (locale === "ja") return pricing_tiers_privateresults1$3(inputs);
	if (locale === "ko") return pricing_tiers_privateresults1$2(inputs);
	if (locale === "ru") return pricing_tiers_privateresults1$1(inputs);
	return pricing_tiers_privateresults1$10(inputs);
});
var pricing_tiers_pro = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return pricing_tiers_pro$9(inputs);
	if (locale === "es") return pricing_tiers_pro$8(inputs);
	if (locale === "de") return pricing_tiers_pro$7(inputs);
	if (locale === "it") return pricing_tiers_pro$6(inputs);
	if (locale === "pt") return pricing_tiers_pro$5(inputs);
	if (locale === "zh") return pricing_tiers_pro$4(inputs);
	if (locale === "ja") return pricing_tiers_pro$3(inputs);
	if (locale === "ko") return pricing_tiers_pro$2(inputs);
	if (locale === "ru") return pricing_tiers_pro$1(inputs);
	return pricing_tiers_pro$10(inputs);
});
var pricing_tiers_publicresults1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return pricing_tiers_publicresults1$9(inputs);
	if (locale === "es") return pricing_tiers_publicresults1$8(inputs);
	if (locale === "de") return pricing_tiers_publicresults1$7(inputs);
	if (locale === "it") return pricing_tiers_publicresults1$6(inputs);
	if (locale === "pt") return pricing_tiers_publicresults1$5(inputs);
	if (locale === "zh") return pricing_tiers_publicresults1$4(inputs);
	if (locale === "ja") return pricing_tiers_publicresults1$3(inputs);
	if (locale === "ko") return pricing_tiers_publicresults1$2(inputs);
	if (locale === "ru") return pricing_tiers_publicresults1$1(inputs);
	return pricing_tiers_publicresults1$10(inputs);
});
var pricing_tiers_ssosaml1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return pricing_tiers_ssosaml1$9(inputs);
	if (locale === "es") return pricing_tiers_ssosaml1$8(inputs);
	if (locale === "de") return pricing_tiers_ssosaml1$7(inputs);
	if (locale === "it") return pricing_tiers_ssosaml1$6(inputs);
	if (locale === "pt") return pricing_tiers_ssosaml1$5(inputs);
	if (locale === "zh") return pricing_tiers_ssosaml1$4(inputs);
	if (locale === "ja") return pricing_tiers_ssosaml1$3(inputs);
	if (locale === "ko") return pricing_tiers_ssosaml1$2(inputs);
	if (locale === "ru") return pricing_tiers_ssosaml1$1(inputs);
	return pricing_tiers_ssosaml1$10(inputs);
});
var pricing_tiers_starter = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return pricing_tiers_starter$9(inputs);
	if (locale === "es") return pricing_tiers_starter$8(inputs);
	if (locale === "de") return pricing_tiers_starter$7(inputs);
	if (locale === "it") return pricing_tiers_starter$6(inputs);
	if (locale === "pt") return pricing_tiers_starter$5(inputs);
	if (locale === "zh") return pricing_tiers_starter$4(inputs);
	if (locale === "ja") return pricing_tiers_starter$3(inputs);
	if (locale === "ko") return pricing_tiers_starter$2(inputs);
	if (locale === "ru") return pricing_tiers_starter$1(inputs);
	return pricing_tiers_starter$10(inputs);
});
var pricing_tiers_trainingsessions1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return pricing_tiers_trainingsessions1$9(inputs);
	if (locale === "es") return pricing_tiers_trainingsessions1$8(inputs);
	if (locale === "de") return pricing_tiers_trainingsessions1$7(inputs);
	if (locale === "it") return pricing_tiers_trainingsessions1$6(inputs);
	if (locale === "pt") return pricing_tiers_trainingsessions1$5(inputs);
	if (locale === "zh") return pricing_tiers_trainingsessions1$4(inputs);
	if (locale === "ja") return pricing_tiers_trainingsessions1$3(inputs);
	if (locale === "ko") return pricing_tiers_trainingsessions1$2(inputs);
	if (locale === "ru") return pricing_tiers_trainingsessions1$1(inputs);
	return pricing_tiers_trainingsessions1$10(inputs);
});
var pricing_tiers_unlimitedruns1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return pricing_tiers_unlimitedruns1$9(inputs);
	if (locale === "es") return pricing_tiers_unlimitedruns1$8(inputs);
	if (locale === "de") return pricing_tiers_unlimitedruns1$7(inputs);
	if (locale === "it") return pricing_tiers_unlimitedruns1$6(inputs);
	if (locale === "pt") return pricing_tiers_unlimitedruns1$5(inputs);
	if (locale === "zh") return pricing_tiers_unlimitedruns1$4(inputs);
	if (locale === "ja") return pricing_tiers_unlimitedruns1$3(inputs);
	if (locale === "ko") return pricing_tiers_unlimitedruns1$2(inputs);
	if (locale === "ru") return pricing_tiers_unlimitedruns1$1(inputs);
	return pricing_tiers_unlimitedruns1$10(inputs);
});
var _jsxFileName$2 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/pricing/PricingTiers.tsx";
function PricingTiers() {
	const tiers = [
		{
			name: pricing_tiers_starter(),
			price: pricing_tiers_price0(),
			period: pricing_tiers_forever(),
			features: [
				pricing_tiers_benchmarkrunperday3({ runs: "5" }),
				pricing_tiers_librariesnumber1({ libs: "3" }),
				pricing_tiers_communitysupport1(),
				pricing_tiers_publicresults1()
			]
		},
		{
			name: pricing_tiers_pro(),
			price: pricing_tiers_price29(),
			period: pricing_tiers_month(),
			features: [
				pricing_tiers_unlimitedruns1(),
				pricing_tiers_alllibraries1(),
				pricing_tiers_prioritysupport1(),
				pricing_tiers_privateresults1(),
				pricing_tiers_ciintegration1(),
				pricing_tiers_historicaldata1()
			],
			highlighted: true
		},
		{
			name: pricing_tiers_enterprise(),
			price: pricing_tiers_customprice1(),
			period: "",
			features: [
				pricing_tiers_everythinginpro2(),
				pricing_tiers_onpremiseoption2(),
				pricing_tiers_ssosaml1(),
				pricing_tiers_dedicatedaccountmanager2(),
				pricing_tiers_customslas1(),
				pricing_tiers_auditlogs1(),
				pricing_tiers_trainingsessions1()
			]
		}
	];
	return jsxDEV("div", {
		className: "grid gap-6 md:grid-cols-3",
		children: tiers.map((t) => jsxDEV("div", {
			className: `flex flex-col rounded-lg border p-6 ${t.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`,
			children: [
				jsxDEV("h3", {
					className: "text-lg font-semibold text-foreground",
					children: t.name
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 57,
					columnNumber: 11
				}, this),
				jsxDEV("div", {
					className: "my-4",
					children: [jsxDEV("span", {
						className: "text-3xl font-bold text-foreground",
						children: t.price
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 59,
						columnNumber: 13
					}, this), jsxDEV("span", {
						className: "text-sm text-muted-foreground",
						children: t.period
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 60,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 58,
					columnNumber: 11
				}, this),
				jsxDEV("ul", {
					className: "mb-6 flex-1 space-y-2",
					children: t.features.map((f) => jsxDEV("li", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [
							jsxDEV("span", {
								className: "text-primary",
								children: "✓"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 68,
								columnNumber: 17
							}, this),
							" ",
							f
						]
					}, f, true, {
						fileName: _jsxFileName$2,
						lineNumber: 64,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 62,
					columnNumber: 11
				}, this),
				jsxDEV("button", {
					type: "button",
					className: `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${t.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`,
					children: t.name === pricing_tiers_enterprise() ? pricing_tiers_contactsales1() : pricing_tiers_getstarted1()
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 72,
					columnNumber: 11
				}, this)
			]
		}, t.name, true, {
			fileName: _jsxFileName$2,
			lineNumber: 49,
			columnNumber: 9
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 47,
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
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/pricing/PricingTiers.wrapper.tsx";
function Wrapped() {
	return jsxDEV(Wrapper, { children: jsxDEV(PricingTiers, {}, void 0, false, {
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
