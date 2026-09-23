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
var open_positions_applynow1$10 = () => {
	return `Apply Now`;
};
var open_positions_backendengineer1$10 = () => {
	return `Backend Engineer`;
};
var open_positions_buildandmaintainourbenchmarking4$10 = () => {
	return `Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.`;
};
var open_positions_community$10 = () => {
	return `Community`;
};
var open_positions_createcomprehensiveguidesapireferences4$10 = () => {
	return `Create comprehensive guides, API references, and tutorials for our benchmarking platform.`;
};
var open_positions_designandscaleourcloud4$10 = () => {
	return `Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.`;
};
var open_positions_devrelengineer1$10 = () => {
	return `DevRel Engineer`;
};
var open_positions_documentation$10 = () => {
	return `Documentation`;
};
var open_positions_engagewiththei18ncommunity4$10 = () => {
	return `Engage with the i18n community through talks, workshops, blog posts, and open source contributions.`;
};
var open_positions_engineering$10 = () => {
	return `Engineering`;
};
var open_positions_ensuretheaccuracyandreliability4$10 = () => {
	return `Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.`;
};
var open_positions_fulltime1$10 = () => {
	return `Full-time`;
};
var open_positions_openpositions1$10 = () => {
	return `Open Positions`;
};
var open_positions_parttime1$10 = () => {
	return `Part-time`;
};
var open_positions_qaengineer1$10 = () => {
	return `QA Engineer`;
};
var open_positions_remote$10 = () => {
	return `Remote`;
};
var open_positions_sanfranciscoremote2$10 = () => {
	return `San Francisco / Remote`;
};
var open_positions_seniorfrontendengineer2$10 = () => {
	return `Senior Frontend Engineer`;
};
var open_positions_technicalwriter1$10 = () => {
	return `Technical Writer`;
};
var open_positions_applynow1$9 = () => {
	return `Postuler maintenant`;
};
var open_positions_backendengineer1$9 = () => {
	return `Ingénieur Backend`;
};
var open_positions_buildandmaintainourbenchmarking4$9 = () => {
	return `Construire et maintenir notre tableau de bord de benchmarking et nos outils de développement en utilisant React, TypeScript et Vite.`;
};
var open_positions_community$9 = () => {
	return `Communauté`;
};
var open_positions_createcomprehensiveguidesapireferences4$9 = () => {
	return `Créer des guides complets, des références d'API et des tutoriels pour notre plateforme de benchmarking.`;
};
var open_positions_designandscaleourcloud4$9 = () => {
	return `Concevoir et mettre à l'échelle notre infrastructure de benchmarking cloud gérant des milliers de passages automatisés par jour.`;
};
var open_positions_devrelengineer1$9 = () => {
	return `Ingénieur DevRel`;
};
var open_positions_documentation$9 = () => {
	return `Documentation`;
};
var open_positions_engagewiththei18ncommunity4$9 = () => {
	return `Interagir avec la communauté i18n via des conférences, des ateliers, des articles de blog et des contributions open source.`;
};
var open_positions_engineering$9 = () => {
	return `Ingénierie`;
};
var open_positions_ensuretheaccuracyandreliability4$9 = () => {
	return `Garantir l'exactitude et la fiabilité des résultats de benchmark par des tests et des validations rigoureux.`;
};
var open_positions_fulltime1$9 = () => {
	return `Temps plein`;
};
var open_positions_openpositions1$9 = () => {
	return `Postes ouverts`;
};
var open_positions_parttime1$9 = () => {
	return `Temps partiel`;
};
var open_positions_qaengineer1$9 = () => {
	return `Ingénieur QA`;
};
var open_positions_remote$9 = () => {
	return `À distance`;
};
var open_positions_sanfranciscoremote2$9 = () => {
	return `San Francisco / À distance`;
};
var open_positions_seniorfrontendengineer2$9 = () => {
	return `Ingénieur Frontend Senior`;
};
var open_positions_technicalwriter1$9 = () => {
	return `Rédacteur technique`;
};
var open_positions_applynow1$8 = () => {
	return `Postular ahora`;
};
var open_positions_backendengineer1$8 = () => {
	return `Ingeniero Backend`;
};
var open_positions_buildandmaintainourbenchmarking4$8 = () => {
	return `Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.`;
};
var open_positions_community$8 = () => {
	return `Comunidad`;
};
var open_positions_createcomprehensiveguidesapireferences4$8 = () => {
	return `Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.`;
};
var open_positions_designandscaleourcloud4$8 = () => {
	return `Diseñar y escalar nuestra infraestructura de benchmarking en la nube que gestiona miles de ejecuciones automatizadas diariamente.`;
};
var open_positions_devrelengineer1$8 = () => {
	return `Ingeniero DevRel`;
};
var open_positions_documentation$8 = () => {
	return `Documentación`;
};
var open_positions_engagewiththei18ncommunity4$8 = () => {
	return `Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto.`;
};
var open_positions_engineering$8 = () => {
	return `Ingeniería`;
};
var open_positions_ensuretheaccuracyandreliability4$8 = () => {
	return `Garantizar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.`;
};
var open_positions_fulltime1$8 = () => {
	return `Tiempo completo`;
};
var open_positions_openpositions1$8 = () => {
	return `Puestos vacantes`;
};
var open_positions_parttime1$8 = () => {
	return `Tiempo parcial`;
};
var open_positions_qaengineer1$8 = () => {
	return `Ingeniero QA`;
};
var open_positions_remote$8 = () => {
	return `Remoto`;
};
var open_positions_sanfranciscoremote2$8 = () => {
	return `San Francisco / Remoto`;
};
var open_positions_seniorfrontendengineer2$8 = () => {
	return `Ingeniero Frontend Senior`;
};
var open_positions_technicalwriter1$8 = () => {
	return `Escritor técnico`;
};
var open_positions_applynow1$7 = () => {
	return `Jetzt bewerben`;
};
var open_positions_backendengineer1$7 = () => {
	return `Backend-Entwickler`;
};
var open_positions_buildandmaintainourbenchmarking4$7 = () => {
	return `Erstellen und Verwalten unseres Benchmarking-Dashboards und der Entwickler-Tools mit React, TypeScript und Vite.`;
};
var open_positions_community$7 = () => {
	return `Community`;
};
var open_positions_createcomprehensiveguidesapireferences4$7 = () => {
	return `Erstellen von umfassenden Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.`;
};
var open_positions_designandscaleourcloud4$7 = () => {
	return `Design und Skalierung unserer Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.`;
};
var open_positions_devrelengineer1$7 = () => {
	return `DevRel-Ingenieur`;
};
var open_positions_documentation$7 = () => {
	return `Dokumentation`;
};
var open_positions_engagewiththei18ncommunity4$7 = () => {
	return `Austausch mit der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.`;
};
var open_positions_engineering$7 = () => {
	return `Entwicklung`;
};
var open_positions_ensuretheaccuracyandreliability4$7 = () => {
	return `Sicherstellung der Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierungen.`;
};
var open_positions_fulltime1$7 = () => {
	return `Vollzeit`;
};
var open_positions_openpositions1$7 = () => {
	return `Offene Stellen`;
};
var open_positions_parttime1$7 = () => {
	return `Teilzeit`;
};
var open_positions_qaengineer1$7 = () => {
	return `QA-Ingenieur`;
};
var open_positions_remote$7 = () => {
	return `Remote`;
};
var open_positions_sanfranciscoremote2$7 = () => {
	return `San Francisco / Remote`;
};
var open_positions_seniorfrontendengineer2$7 = () => {
	return `Senior Frontend-Entwickler`;
};
var open_positions_technicalwriter1$7 = () => {
	return `Technischer Redakteur`;
};
var open_positions_applynow1$6 = () => {
	return `Candidati ora`;
};
var open_positions_backendengineer1$6 = () => {
	return `Ingegnere Backend`;
};
var open_positions_buildandmaintainourbenchmarking4$6 = () => {
	return `Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.`;
};
var open_positions_community$6 = () => {
	return `Comunità`;
};
var open_positions_createcomprehensiveguidesapireferences4$6 = () => {
	return `Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.`;
};
var open_positions_designandscaleourcloud4$6 = () => {
	return `Progetta e scala la nostra infrastruttura di benchmarking cloud gestendo migliaia di esecuzioni automatiche giornaliere.`;
};
var open_positions_devrelengineer1$6 = () => {
	return `Ingegnere DevOps`;
};
var open_positions_documentation$6 = () => {
	return `Documentazione`;
};
var open_positions_engagewiththei18ncommunity4$6 = () => {
	return `Interagisci con la comunità i18n attraverso conferenze, workshop, post sul blog e contributi open source.`;
};
var open_positions_engineering$6 = () => {
	return `Ingegneria`;
};
var open_positions_ensuretheaccuracyandreliability4$6 = () => {
	return `Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.`;
};
var open_positions_fulltime1$6 = () => {
	return `Tempo pieno`;
};
var open_positions_openpositions1$6 = () => {
	return `Posizioni aperte`;
};
var open_positions_parttime1$6 = () => {
	return `Part-time`;
};
var open_positions_qaengineer1$6 = () => {
	return `Ingegnere QA`;
};
var open_positions_remote$6 = () => {
	return `Remoto`;
};
var open_positions_sanfranciscoremote2$6 = () => {
	return `San Francisco / Remoto`;
};
var open_positions_seniorfrontendengineer2$6 = () => {
	return `Ingegnere Frontend Senior`;
};
var open_positions_technicalwriter1$6 = () => {
	return `Scrittore tecnico`;
};
var open_positions_applynow1$5 = () => {
	return `Candidatar-se agora`;
};
var open_positions_backendengineer1$5 = () => {
	return `Engenheiro Backend`;
};
var open_positions_buildandmaintainourbenchmarking4$5 = () => {
	return `Construir e manter nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.`;
};
var open_positions_community$5 = () => {
	return `Comunidade`;
};
var open_positions_createcomprehensiveguidesapireferences4$5 = () => {
	return `Criar guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.`;
};
var open_positions_designandscaleourcloud4$5 = () => {
	return `Projetar e escalar nossa infraestrutura de benchmarking na nuvem, lidando com milhares de execuções automatizadas diariamente.`;
};
var open_positions_devrelengineer1$5 = () => {
	return `Engenheiro DevRel`;
};
var open_positions_documentation$5 = () => {
	return `Documentação`;
};
var open_positions_engagewiththei18ncommunity4$5 = () => {
	return `Interagir com a comunidade i18n por meio de palestras, workshops, postagens em blogs e contribuições de código aberto.`;
};
var open_positions_engineering$5 = () => {
	return `Engenharia`;
};
var open_positions_ensuretheaccuracyandreliability4$5 = () => {
	return `Garantir a precisão e confiabilidade dos resultados de benchmark por meio de testes e validações rigorosos.`;
};
var open_positions_fulltime1$5 = () => {
	return `Tempo integral`;
};
var open_positions_openpositions1$5 = () => {
	return `Vagas abertas`;
};
var open_positions_parttime1$5 = () => {
	return `Tempo parcial`;
};
var open_positions_qaengineer1$5 = () => {
	return `Engenheiro QA`;
};
var open_positions_remote$5 = () => {
	return `Remoto`;
};
var open_positions_sanfranciscoremote2$5 = () => {
	return `San Francisco / Remoto`;
};
var open_positions_seniorfrontendengineer2$5 = () => {
	return `Engenheiro Frontend Sênior`;
};
var open_positions_technicalwriter1$5 = () => {
	return `Redator Técnico`;
};
var open_positions_applynow1$4 = () => {
	return `立即申请`;
};
var open_positions_backendengineer1$4 = () => {
	return `后端工程师`;
};
var open_positions_buildandmaintainourbenchmarking4$4 = () => {
	return `使用 React, TypeScript 和 Vite 构建并维护我们的基准测试仪表板和开发人员工具。`;
};
var open_positions_community$4 = () => {
	return `社区`;
};
var open_positions_createcomprehensiveguidesapireferences4$4 = () => {
	return `为我们的基准测试平台创建全面的指南、API 参考和教程。`;
};
var open_positions_designandscaleourcloud4$4 = () => {
	return `设计并扩展我们的云基准测试基础设施，每天处理数千次自动化运行。`;
};
var open_positions_devrelengineer1$4 = () => {
	return `开发者关系工程师`;
};
var open_positions_documentation$4 = () => {
	return `文档`;
};
var open_positions_engagewiththei18ncommunity4$4 = () => {
	return `通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。`;
};
var open_positions_engineering$4 = () => {
	return `工程`;
};
var open_positions_ensuretheaccuracyandreliability4$4 = () => {
	return `通过严格的测试和验证确保基准测试结果的准确性和可靠性。`;
};
var open_positions_fulltime1$4 = () => {
	return `全职`;
};
var open_positions_openpositions1$4 = () => {
	return `开放职位`;
};
var open_positions_parttime1$4 = () => {
	return `兼职`;
};
var open_positions_qaengineer1$4 = () => {
	return `测试工程师`;
};
var open_positions_remote$4 = () => {
	return `远程`;
};
var open_positions_sanfranciscoremote2$4 = () => {
	return `旧金山 / 远程`;
};
var open_positions_seniorfrontendengineer2$4 = () => {
	return `高级前端工程师`;
};
var open_positions_technicalwriter1$4 = () => {
	return `技术作家`;
};
var open_positions_applynow1$3 = () => {
	return `今すぐ応募`;
};
var open_positions_backendengineer1$3 = () => {
	return `バックエンドエンジニア`;
};
var open_positions_buildandmaintainourbenchmarking4$3 = () => {
	return `React、TypeScript、Viteを使用して、私たちのベンチマークダッシュボードと開発者ツールを構築および維持します。`;
};
var open_positions_community$3 = () => {
	return `コミュニティ`;
};
var open_positions_createcomprehensiveguidesapireferences4$3 = () => {
	return `私たちのベンチマークプラットフォームのための包括的なガイド、APIリファレンス、チュートリアルを作成します。`;
};
var open_positions_designandscaleourcloud4$3 = () => {
	return `毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャを設計およびスケールさせます。`;
};
var open_positions_devrelengineer1$3 = () => {
	return `DevRelエンジニア`;
};
var open_positions_documentation$3 = () => {
	return `ドキュメンテーション`;
};
var open_positions_engagewiththei18ncommunity4$3 = () => {
	return `講演、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18nコミュニティと交流します。`;
};
var open_positions_engineering$3 = () => {
	return `エンジニアリング`;
};
var open_positions_ensuretheaccuracyandreliability4$3 = () => {
	return `厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。`;
};
var open_positions_fulltime1$3 = () => {
	return `正社員`;
};
var open_positions_openpositions1$3 = () => {
	return `募集中の職種`;
};
var open_positions_parttime1$3 = () => {
	return `アルバイト`;
};
var open_positions_qaengineer1$3 = () => {
	return `QAエンジニア`;
};
var open_positions_remote$3 = () => {
	return `リモート`;
};
var open_positions_sanfranciscoremote2$3 = () => {
	return `サンフランシスコ / リモート`;
};
var open_positions_seniorfrontendengineer2$3 = () => {
	return `シニアフロントエンドエンジニア`;
};
var open_positions_technicalwriter1$3 = () => {
	return `テクニカルライター`;
};
var open_positions_applynow1$2 = () => {
	return `지금 지원하기`;
};
var open_positions_backendengineer1$2 = () => {
	return `백엔드 엔지니어`;
};
var open_positions_buildandmaintainourbenchmarking4$2 = () => {
	return `React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드 및 개발자 도구를 구축하고 유지 관리합니다.`;
};
var open_positions_community$2 = () => {
	return `커뮤니티`;
};
var open_positions_createcomprehensiveguidesapireferences4$2 = () => {
	return `벤치마킹 플랫폼을 위한 포괄적인 가이드, API 참조 및 튜토리얼을 작성합니다.`;
};
var open_positions_designandscaleourcloud4$2 = () => {
	return `매일 수천 개의 자동화된 실행을 처리하는 클라우드 벤치마킹 인프라를 설계하고 확장합니다.`;
};
var open_positions_devrelengineer1$2 = () => {
	return `DevRel 엔지니어`;
};
var open_positions_documentation$2 = () => {
	return `문서화`;
};
var open_positions_engagewiththei18ncommunity4$2 = () => {
	return `발표, 워크숍, 블로그 게시물 및 오픈 소스 기여를 통해 i18n 커뮤니티와 소통합니다.`;
};
var open_positions_engineering$2 = () => {
	return `엔지니어링`;
};
var open_positions_ensuretheaccuracyandreliability4$2 = () => {
	return `철저한 테스트와 검증을 통해 벤치마크 결과의 정확성과 신뢰성을 보장합니다.`;
};
var open_positions_fulltime1$2 = () => {
	return `정규직`;
};
var open_positions_openpositions1$2 = () => {
	return `채용 중인 포지션`;
};
var open_positions_parttime1$2 = () => {
	return `아르바이트`;
};
var open_positions_qaengineer1$2 = () => {
	return `QA 엔지니어`;
};
var open_positions_remote$2 = () => {
	return `원격`;
};
var open_positions_sanfranciscoremote2$2 = () => {
	return `샌프란시스코 / 원격`;
};
var open_positions_seniorfrontendengineer2$2 = () => {
	return `시니어 프론트엔드 엔지니어`;
};
var open_positions_technicalwriter1$2 = () => {
	return `테크니컬 라이터`;
};
var open_positions_applynow1$1 = () => {
	return `Подать заявку`;
};
var open_positions_backendengineer1$1 = () => {
	return `Бэкенд-инженер`;
};
var open_positions_buildandmaintainourbenchmarking4$1 = () => {
	return `Создание и поддержка нашей панели тестирования и инструментов разработчика с использованием React, TypeScript и Vite.`;
};
var open_positions_community$1 = () => {
	return `Сообщество`;
};
var open_positions_createcomprehensiveguidesapireferences4$1 = () => {
	return `Создание подробных руководств, справочников по API и учебных пособий для нашей платформы тестирования.`;
};
var open_positions_designandscaleourcloud4$1 = () => {
	return `Проектирование и масштабирование нашей облачной инфраструктуры для тестирования, обрабатывающей тысячи автоматических запусков ежедневно.`;
};
var open_positions_devrelengineer1$1 = () => {
	return `DevRel-инженер`;
};
var open_positions_documentation$1 = () => {
	return `Документация`;
};
var open_positions_engagewiththei18ncommunity4$1 = () => {
	return `Взаимодействие с сообществом i18n через выступления, семинары, посты в блоге и вклад в открытый исходный код.`;
};
var open_positions_engineering$1 = () => {
	return `Разработка`;
};
var open_positions_ensuretheaccuracyandreliability4$1 = () => {
	return `Обеспечение точности и надежности результатов тестирования посредством строгого тестирования и валидации.`;
};
var open_positions_fulltime1$1 = () => {
	return `Полный рабочий день`;
};
var open_positions_openpositions1$1 = () => {
	return `Открытые вакансии`;
};
var open_positions_parttime1$1 = () => {
	return `Неполный рабочий день`;
};
var open_positions_qaengineer1$1 = () => {
	return `QA-инженер`;
};
var open_positions_remote$1 = () => {
	return `Удаленно`;
};
var open_positions_sanfranciscoremote2$1 = () => {
	return `Сан-Франциско / Удаленно`;
};
var open_positions_seniorfrontendengineer2$1 = () => {
	return `Старший фронтенд-инженер`;
};
var open_positions_technicalwriter1$1 = () => {
	return `Технический писатель`;
};
var open_positions_applynow1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return open_positions_applynow1$9(inputs);
	if (locale === "es") return open_positions_applynow1$8(inputs);
	if (locale === "de") return open_positions_applynow1$7(inputs);
	if (locale === "it") return open_positions_applynow1$6(inputs);
	if (locale === "pt") return open_positions_applynow1$5(inputs);
	if (locale === "zh") return open_positions_applynow1$4(inputs);
	if (locale === "ja") return open_positions_applynow1$3(inputs);
	if (locale === "ko") return open_positions_applynow1$2(inputs);
	if (locale === "ru") return open_positions_applynow1$1(inputs);
	return open_positions_applynow1$10(inputs);
});
var open_positions_backendengineer1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return open_positions_backendengineer1$9(inputs);
	if (locale === "es") return open_positions_backendengineer1$8(inputs);
	if (locale === "de") return open_positions_backendengineer1$7(inputs);
	if (locale === "it") return open_positions_backendengineer1$6(inputs);
	if (locale === "pt") return open_positions_backendengineer1$5(inputs);
	if (locale === "zh") return open_positions_backendengineer1$4(inputs);
	if (locale === "ja") return open_positions_backendengineer1$3(inputs);
	if (locale === "ko") return open_positions_backendengineer1$2(inputs);
	if (locale === "ru") return open_positions_backendengineer1$1(inputs);
	return open_positions_backendengineer1$10(inputs);
});
var open_positions_buildandmaintainourbenchmarking4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return open_positions_buildandmaintainourbenchmarking4$9(inputs);
	if (locale === "es") return open_positions_buildandmaintainourbenchmarking4$8(inputs);
	if (locale === "de") return open_positions_buildandmaintainourbenchmarking4$7(inputs);
	if (locale === "it") return open_positions_buildandmaintainourbenchmarking4$6(inputs);
	if (locale === "pt") return open_positions_buildandmaintainourbenchmarking4$5(inputs);
	if (locale === "zh") return open_positions_buildandmaintainourbenchmarking4$4(inputs);
	if (locale === "ja") return open_positions_buildandmaintainourbenchmarking4$3(inputs);
	if (locale === "ko") return open_positions_buildandmaintainourbenchmarking4$2(inputs);
	if (locale === "ru") return open_positions_buildandmaintainourbenchmarking4$1(inputs);
	return open_positions_buildandmaintainourbenchmarking4$10(inputs);
});
var open_positions_community = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return open_positions_community$9(inputs);
	if (locale === "es") return open_positions_community$8(inputs);
	if (locale === "de") return open_positions_community$7(inputs);
	if (locale === "it") return open_positions_community$6(inputs);
	if (locale === "pt") return open_positions_community$5(inputs);
	if (locale === "zh") return open_positions_community$4(inputs);
	if (locale === "ja") return open_positions_community$3(inputs);
	if (locale === "ko") return open_positions_community$2(inputs);
	if (locale === "ru") return open_positions_community$1(inputs);
	return open_positions_community$10(inputs);
});
var open_positions_createcomprehensiveguidesapireferences4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return open_positions_createcomprehensiveguidesapireferences4$9(inputs);
	if (locale === "es") return open_positions_createcomprehensiveguidesapireferences4$8(inputs);
	if (locale === "de") return open_positions_createcomprehensiveguidesapireferences4$7(inputs);
	if (locale === "it") return open_positions_createcomprehensiveguidesapireferences4$6(inputs);
	if (locale === "pt") return open_positions_createcomprehensiveguidesapireferences4$5(inputs);
	if (locale === "zh") return open_positions_createcomprehensiveguidesapireferences4$4(inputs);
	if (locale === "ja") return open_positions_createcomprehensiveguidesapireferences4$3(inputs);
	if (locale === "ko") return open_positions_createcomprehensiveguidesapireferences4$2(inputs);
	if (locale === "ru") return open_positions_createcomprehensiveguidesapireferences4$1(inputs);
	return open_positions_createcomprehensiveguidesapireferences4$10(inputs);
});
var open_positions_designandscaleourcloud4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return open_positions_designandscaleourcloud4$9(inputs);
	if (locale === "es") return open_positions_designandscaleourcloud4$8(inputs);
	if (locale === "de") return open_positions_designandscaleourcloud4$7(inputs);
	if (locale === "it") return open_positions_designandscaleourcloud4$6(inputs);
	if (locale === "pt") return open_positions_designandscaleourcloud4$5(inputs);
	if (locale === "zh") return open_positions_designandscaleourcloud4$4(inputs);
	if (locale === "ja") return open_positions_designandscaleourcloud4$3(inputs);
	if (locale === "ko") return open_positions_designandscaleourcloud4$2(inputs);
	if (locale === "ru") return open_positions_designandscaleourcloud4$1(inputs);
	return open_positions_designandscaleourcloud4$10(inputs);
});
var open_positions_devrelengineer1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return open_positions_devrelengineer1$9(inputs);
	if (locale === "es") return open_positions_devrelengineer1$8(inputs);
	if (locale === "de") return open_positions_devrelengineer1$7(inputs);
	if (locale === "it") return open_positions_devrelengineer1$6(inputs);
	if (locale === "pt") return open_positions_devrelengineer1$5(inputs);
	if (locale === "zh") return open_positions_devrelengineer1$4(inputs);
	if (locale === "ja") return open_positions_devrelengineer1$3(inputs);
	if (locale === "ko") return open_positions_devrelengineer1$2(inputs);
	if (locale === "ru") return open_positions_devrelengineer1$1(inputs);
	return open_positions_devrelengineer1$10(inputs);
});
var open_positions_documentation = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return open_positions_documentation$9(inputs);
	if (locale === "es") return open_positions_documentation$8(inputs);
	if (locale === "de") return open_positions_documentation$7(inputs);
	if (locale === "it") return open_positions_documentation$6(inputs);
	if (locale === "pt") return open_positions_documentation$5(inputs);
	if (locale === "zh") return open_positions_documentation$4(inputs);
	if (locale === "ja") return open_positions_documentation$3(inputs);
	if (locale === "ko") return open_positions_documentation$2(inputs);
	if (locale === "ru") return open_positions_documentation$1(inputs);
	return open_positions_documentation$10(inputs);
});
var open_positions_engagewiththei18ncommunity4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return open_positions_engagewiththei18ncommunity4$9(inputs);
	if (locale === "es") return open_positions_engagewiththei18ncommunity4$8(inputs);
	if (locale === "de") return open_positions_engagewiththei18ncommunity4$7(inputs);
	if (locale === "it") return open_positions_engagewiththei18ncommunity4$6(inputs);
	if (locale === "pt") return open_positions_engagewiththei18ncommunity4$5(inputs);
	if (locale === "zh") return open_positions_engagewiththei18ncommunity4$4(inputs);
	if (locale === "ja") return open_positions_engagewiththei18ncommunity4$3(inputs);
	if (locale === "ko") return open_positions_engagewiththei18ncommunity4$2(inputs);
	if (locale === "ru") return open_positions_engagewiththei18ncommunity4$1(inputs);
	return open_positions_engagewiththei18ncommunity4$10(inputs);
});
var open_positions_engineering = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return open_positions_engineering$9(inputs);
	if (locale === "es") return open_positions_engineering$8(inputs);
	if (locale === "de") return open_positions_engineering$7(inputs);
	if (locale === "it") return open_positions_engineering$6(inputs);
	if (locale === "pt") return open_positions_engineering$5(inputs);
	if (locale === "zh") return open_positions_engineering$4(inputs);
	if (locale === "ja") return open_positions_engineering$3(inputs);
	if (locale === "ko") return open_positions_engineering$2(inputs);
	if (locale === "ru") return open_positions_engineering$1(inputs);
	return open_positions_engineering$10(inputs);
});
var open_positions_ensuretheaccuracyandreliability4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return open_positions_ensuretheaccuracyandreliability4$9(inputs);
	if (locale === "es") return open_positions_ensuretheaccuracyandreliability4$8(inputs);
	if (locale === "de") return open_positions_ensuretheaccuracyandreliability4$7(inputs);
	if (locale === "it") return open_positions_ensuretheaccuracyandreliability4$6(inputs);
	if (locale === "pt") return open_positions_ensuretheaccuracyandreliability4$5(inputs);
	if (locale === "zh") return open_positions_ensuretheaccuracyandreliability4$4(inputs);
	if (locale === "ja") return open_positions_ensuretheaccuracyandreliability4$3(inputs);
	if (locale === "ko") return open_positions_ensuretheaccuracyandreliability4$2(inputs);
	if (locale === "ru") return open_positions_ensuretheaccuracyandreliability4$1(inputs);
	return open_positions_ensuretheaccuracyandreliability4$10(inputs);
});
var open_positions_fulltime1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return open_positions_fulltime1$9(inputs);
	if (locale === "es") return open_positions_fulltime1$8(inputs);
	if (locale === "de") return open_positions_fulltime1$7(inputs);
	if (locale === "it") return open_positions_fulltime1$6(inputs);
	if (locale === "pt") return open_positions_fulltime1$5(inputs);
	if (locale === "zh") return open_positions_fulltime1$4(inputs);
	if (locale === "ja") return open_positions_fulltime1$3(inputs);
	if (locale === "ko") return open_positions_fulltime1$2(inputs);
	if (locale === "ru") return open_positions_fulltime1$1(inputs);
	return open_positions_fulltime1$10(inputs);
});
var open_positions_openpositions1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return open_positions_openpositions1$9(inputs);
	if (locale === "es") return open_positions_openpositions1$8(inputs);
	if (locale === "de") return open_positions_openpositions1$7(inputs);
	if (locale === "it") return open_positions_openpositions1$6(inputs);
	if (locale === "pt") return open_positions_openpositions1$5(inputs);
	if (locale === "zh") return open_positions_openpositions1$4(inputs);
	if (locale === "ja") return open_positions_openpositions1$3(inputs);
	if (locale === "ko") return open_positions_openpositions1$2(inputs);
	if (locale === "ru") return open_positions_openpositions1$1(inputs);
	return open_positions_openpositions1$10(inputs);
});
var open_positions_parttime1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return open_positions_parttime1$9(inputs);
	if (locale === "es") return open_positions_parttime1$8(inputs);
	if (locale === "de") return open_positions_parttime1$7(inputs);
	if (locale === "it") return open_positions_parttime1$6(inputs);
	if (locale === "pt") return open_positions_parttime1$5(inputs);
	if (locale === "zh") return open_positions_parttime1$4(inputs);
	if (locale === "ja") return open_positions_parttime1$3(inputs);
	if (locale === "ko") return open_positions_parttime1$2(inputs);
	if (locale === "ru") return open_positions_parttime1$1(inputs);
	return open_positions_parttime1$10(inputs);
});
var open_positions_qaengineer1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return open_positions_qaengineer1$9(inputs);
	if (locale === "es") return open_positions_qaengineer1$8(inputs);
	if (locale === "de") return open_positions_qaengineer1$7(inputs);
	if (locale === "it") return open_positions_qaengineer1$6(inputs);
	if (locale === "pt") return open_positions_qaengineer1$5(inputs);
	if (locale === "zh") return open_positions_qaengineer1$4(inputs);
	if (locale === "ja") return open_positions_qaengineer1$3(inputs);
	if (locale === "ko") return open_positions_qaengineer1$2(inputs);
	if (locale === "ru") return open_positions_qaengineer1$1(inputs);
	return open_positions_qaengineer1$10(inputs);
});
var open_positions_remote = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return open_positions_remote$9(inputs);
	if (locale === "es") return open_positions_remote$8(inputs);
	if (locale === "de") return open_positions_remote$7(inputs);
	if (locale === "it") return open_positions_remote$6(inputs);
	if (locale === "pt") return open_positions_remote$5(inputs);
	if (locale === "zh") return open_positions_remote$4(inputs);
	if (locale === "ja") return open_positions_remote$3(inputs);
	if (locale === "ko") return open_positions_remote$2(inputs);
	if (locale === "ru") return open_positions_remote$1(inputs);
	return open_positions_remote$10(inputs);
});
var open_positions_sanfranciscoremote2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return open_positions_sanfranciscoremote2$9(inputs);
	if (locale === "es") return open_positions_sanfranciscoremote2$8(inputs);
	if (locale === "de") return open_positions_sanfranciscoremote2$7(inputs);
	if (locale === "it") return open_positions_sanfranciscoremote2$6(inputs);
	if (locale === "pt") return open_positions_sanfranciscoremote2$5(inputs);
	if (locale === "zh") return open_positions_sanfranciscoremote2$4(inputs);
	if (locale === "ja") return open_positions_sanfranciscoremote2$3(inputs);
	if (locale === "ko") return open_positions_sanfranciscoremote2$2(inputs);
	if (locale === "ru") return open_positions_sanfranciscoremote2$1(inputs);
	return open_positions_sanfranciscoremote2$10(inputs);
});
var open_positions_seniorfrontendengineer2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return open_positions_seniorfrontendengineer2$9(inputs);
	if (locale === "es") return open_positions_seniorfrontendengineer2$8(inputs);
	if (locale === "de") return open_positions_seniorfrontendengineer2$7(inputs);
	if (locale === "it") return open_positions_seniorfrontendengineer2$6(inputs);
	if (locale === "pt") return open_positions_seniorfrontendengineer2$5(inputs);
	if (locale === "zh") return open_positions_seniorfrontendengineer2$4(inputs);
	if (locale === "ja") return open_positions_seniorfrontendengineer2$3(inputs);
	if (locale === "ko") return open_positions_seniorfrontendengineer2$2(inputs);
	if (locale === "ru") return open_positions_seniorfrontendengineer2$1(inputs);
	return open_positions_seniorfrontendengineer2$10(inputs);
});
var open_positions_technicalwriter1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return open_positions_technicalwriter1$9(inputs);
	if (locale === "es") return open_positions_technicalwriter1$8(inputs);
	if (locale === "de") return open_positions_technicalwriter1$7(inputs);
	if (locale === "it") return open_positions_technicalwriter1$6(inputs);
	if (locale === "pt") return open_positions_technicalwriter1$5(inputs);
	if (locale === "zh") return open_positions_technicalwriter1$4(inputs);
	if (locale === "ja") return open_positions_technicalwriter1$3(inputs);
	if (locale === "ko") return open_positions_technicalwriter1$2(inputs);
	if (locale === "ru") return open_positions_technicalwriter1$1(inputs);
	return open_positions_technicalwriter1$10(inputs);
});
var _jsxFileName$2 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/careers/OpenPositions.tsx";
function OpenPositions() {
	const openings = [
		{
			title: open_positions_seniorfrontendengineer2(),
			location: open_positions_remote(),
			type: open_positions_fulltime1(),
			dept: open_positions_engineering(),
			desc: open_positions_buildandmaintainourbenchmarking4()
		},
		{
			title: open_positions_backendengineer1(),
			location: open_positions_remote(),
			type: open_positions_fulltime1(),
			dept: open_positions_engineering(),
			desc: open_positions_designandscaleourcloud4()
		},
		{
			title: open_positions_technicalwriter1(),
			location: open_positions_remote(),
			type: open_positions_parttime1(),
			dept: open_positions_documentation(),
			desc: open_positions_createcomprehensiveguidesapireferences4()
		},
		{
			title: open_positions_devrelengineer1(),
			location: open_positions_sanfranciscoremote2(),
			type: open_positions_fulltime1(),
			dept: open_positions_community(),
			desc: open_positions_engagewiththei18ncommunity4()
		},
		{
			title: open_positions_qaengineer1(),
			location: open_positions_remote(),
			type: open_positions_fulltime1(),
			dept: open_positions_engineering(),
			desc: open_positions_ensuretheaccuracyandreliability4()
		}
	];
	return jsxDEV(Fragment, { children: [jsxDEV("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: open_positions_openpositions1()
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 44,
		columnNumber: 7
	}, this), jsxDEV("div", {
		className: "space-y-4",
		children: openings.map((o) => jsxDEV("div", {
			className: "flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between",
			children: [jsxDEV("div", { children: [
				jsxDEV("h3", {
					className: "text-base font-semibold text-foreground",
					children: o.title
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 54,
					columnNumber: 15
				}, this),
				jsxDEV("p", {
					className: "text-sm text-muted-foreground",
					children: o.desc
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 57,
					columnNumber: 15
				}, this),
				jsxDEV("div", {
					className: "mt-2 flex gap-2",
					children: [
						jsxDEV("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: o.dept
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 59,
							columnNumber: 17
						}, this),
						jsxDEV("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: o.location
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 62,
							columnNumber: 17
						}, this),
						jsxDEV("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: o.type
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 65,
							columnNumber: 17
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 58,
					columnNumber: 15
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 53,
				columnNumber: 13
			}, this), jsxDEV("button", {
				type: "button",
				className: "shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: open_positions_applynow1()
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 70,
				columnNumber: 13
			}, this)]
		}, o.title, true, {
			fileName: _jsxFileName$2,
			lineNumber: 49,
			columnNumber: 11
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 47,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 43,
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
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/careers/OpenPositions.wrapper.tsx";
function Wrapped() {
	return jsxDEV(Wrapper, { children: jsxDEV(OpenPositions, {}, void 0, false, {
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
