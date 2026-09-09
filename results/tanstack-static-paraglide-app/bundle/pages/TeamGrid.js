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
var team_grid_aishapatel1$10 = () => {
	return `Aisha Patel`;
};
var team_grid_communitymanager1$10 = () => {
	return `Community Manager`;
};
var team_grid_dataanalyst1$10 = () => {
	return `Data Analyst`;
};
var team_grid_developeradvocate1$10 = () => {
	return `Developer Advocate`;
};
var team_grid_elenakowalski1$10 = () => {
	return `Elena Kowalski`;
};
var team_grid_ensuresstatisticalrigorinall4$10 = () => {
	return `Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.`;
};
var team_grid_formergoogleengineerwith103$10 = () => {
	return `Former Google engineer with 10 years of experience building internationalization systems at scale.`;
};
var team_grid_founderleadengineer2$10 = () => {
	return `Founder & Lead Engineer`;
};
var team_grid_fullstackdeveloper2$10 = () => {
	return `Full-Stack Developer`;
};
var team_grid_maintainsthebenchmarkinginfrastructureand4$10 = () => {
	return `Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.`;
};
var team_grid_managescommunitycontributionspartnershipsand4$10 = () => {
	return `Manages community contributions, partnerships, and events. Background in open source governance.`;
};
var team_grid_marcusweber1$10 = () => {
	return `Marcus Weber`;
};
var team_grid_passionateaboutdeveloperexperienceand4$10 = () => {
	return `Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.`;
};
var team_grid_performanceengineer1$10 = () => {
	return `Performance Engineer`;
};
var team_grid_sarahchen1$10 = () => {
	return `Sarah Chen`;
};
var team_grid_specializesinjavascriptperformanceoptimization4$10 = () => {
	return `Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.`;
};
var team_grid_tomasrodriguez1$10 = () => {
	return `Tomás Rodríguez`;
};
var team_grid_yukitanaka1$10 = () => {
	return `Yuki Tanaka`;
};
var team_grid_aishapatel1$9 = () => {
	return `Aisha Patel`;
};
var team_grid_communitymanager1$9 = () => {
	return `Responsable de communauté`;
};
var team_grid_dataanalyst1$9 = () => {
	return `Analyste de données`;
};
var team_grid_developeradvocate1$9 = () => {
	return `Developer Advocate`;
};
var team_grid_elenakowalski1$9 = () => {
	return `Elena Kowalski`;
};
var team_grid_ensuresstatisticalrigorinall4$9 = () => {
	return `Assure la rigueur statistique de tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.`;
};
var team_grid_formergoogleengineerwith103$9 = () => {
	return `Ancienne ingénieure Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.`;
};
var team_grid_founderleadengineer2$9 = () => {
	return `Fondatrice & Ingénieure principale`;
};
var team_grid_fullstackdeveloper2$9 = () => {
	return `Développeur Full-Stack`;
};
var team_grid_maintainsthebenchmarkinginfrastructureand4$9 = () => {
	return `Entretient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.`;
};
var team_grid_managescommunitycontributionspartnershipsand4$9 = () => {
	return `Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source.`;
};
var team_grid_marcusweber1$9 = () => {
	return `Marcus Weber`;
};
var team_grid_passionateaboutdeveloperexperienceand4$9 = () => {
	return `Passionnée par l'expérience développeur et l'éducation. Conférencière à React Conf, JSConf et i18nNext.`;
};
var team_grid_performanceengineer1$9 = () => {
	return `Ingénieur performance`;
};
var team_grid_sarahchen1$9 = () => {
	return `Sarah Chen`;
};
var team_grid_specializesinjavascriptperformanceoptimization4$9 = () => {
	return `Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Précédemment chez Vercel.`;
};
var team_grid_tomasrodriguez1$9 = () => {
	return `Tomás Rodríguez`;
};
var team_grid_yukitanaka1$9 = () => {
	return `Yuki Tanaka`;
};
var team_grid_aishapatel1$8 = () => {
	return `Aisha Patel`;
};
var team_grid_communitymanager1$8 = () => {
	return `Responsable de la comunidad`;
};
var team_grid_dataanalyst1$8 = () => {
	return `Analista de datos`;
};
var team_grid_developeradvocate1$8 = () => {
	return `Developer Advocate`;
};
var team_grid_elenakowalski1$8 = () => {
	return `Elena Kowalski`;
};
var team_grid_ensuresstatisticalrigorinall4$8 = () => {
	return `Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.`;
};
var team_grid_formergoogleengineerwith103$8 = () => {
	return `Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.`;
};
var team_grid_founderleadengineer2$8 = () => {
	return `Fundadora e ingeniera principal`;
};
var team_grid_fullstackdeveloper2$8 = () => {
	return `Desarrollador Full-Stack`;
};
var team_grid_maintainsthebenchmarkinginfrastructureand4$8 = () => {
	return `Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.`;
};
var team_grid_managescommunitycontributionspartnershipsand4$8 = () => {
	return `Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.`;
};
var team_grid_marcusweber1$8 = () => {
	return `Marcus Weber`;
};
var team_grid_passionateaboutdeveloperexperienceand4$8 = () => {
	return `Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.`;
};
var team_grid_performanceengineer1$8 = () => {
	return `Ingeniero de rendimiento`;
};
var team_grid_sarahchen1$8 = () => {
	return `Sarah Chen`;
};
var team_grid_specializesinjavascriptperformanceoptimization4$8 = () => {
	return `Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.`;
};
var team_grid_tomasrodriguez1$8 = () => {
	return `Tomás Rodríguez`;
};
var team_grid_yukitanaka1$8 = () => {
	return `Yuki Tanaka`;
};
var team_grid_aishapatel1$7 = () => {
	return `Aisha Patel`;
};
var team_grid_communitymanager1$7 = () => {
	return `Community-Managerin`;
};
var team_grid_dataanalyst1$7 = () => {
	return `Datenanalyst`;
};
var team_grid_developeradvocate1$7 = () => {
	return `Developer Advocate`;
};
var team_grid_elenakowalski1$7 = () => {
	return `Elena Kowalski`;
};
var team_grid_ensuresstatisticalrigorinall4$7 = () => {
	return `Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in Angewandter Statistik am MIT.`;
};
var team_grid_formergoogleengineerwith103$7 = () => {
	return `Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.`;
};
var team_grid_founderleadengineer2$7 = () => {
	return `Gründerin & Leitende Ingenieurin`;
};
var team_grid_fullstackdeveloper2$7 = () => {
	return `Full-Stack-Entwickler`;
};
var team_grid_maintainsthebenchmarkinginfrastructureand4$7 = () => {
	return `Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Mitwirkender bei Lingui.`;
};
var team_grid_managescommunitycontributionspartnershipsand4$7 = () => {
	return `Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.`;
};
var team_grid_marcusweber1$7 = () => {
	return `Marcus Weber`;
};
var team_grid_passionateaboutdeveloperexperienceand4$7 = () => {
	return `Begeistert von Entwicklererfahrung und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.`;
};
var team_grid_performanceengineer1$7 = () => {
	return `Performance-Ingenieur`;
};
var team_grid_sarahchen1$7 = () => {
	return `Sarah Chen`;
};
var team_grid_specializesinjavascriptperformanceoptimization4$7 = () => {
	return `Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.`;
};
var team_grid_tomasrodriguez1$7 = () => {
	return `Tomás Rodríguez`;
};
var team_grid_yukitanaka1$7 = () => {
	return `Yuki Tanaka`;
};
var team_grid_aishapatel1$6 = () => {
	return `Aisha Patel`;
};
var team_grid_communitymanager1$6 = () => {
	return `Responsabile della comunità`;
};
var team_grid_dataanalyst1$6 = () => {
	return `Analista dati`;
};
var team_grid_developeradvocate1$6 = () => {
	return `Developer Advocate`;
};
var team_grid_elenakowalski1$6 = () => {
	return `Elena Kowalski`;
};
var team_grid_ensuresstatisticalrigorinall4$6 = () => {
	return `Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.`;
};
var team_grid_formergoogleengineerwith103$6 = () => {
	return `Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.`;
};
var team_grid_founderleadengineer2$6 = () => {
	return `Fondatrice e Responsabile tecnico`;
};
var team_grid_fullstackdeveloper2$6 = () => {
	return `Sviluppatore Full-Stack`;
};
var team_grid_maintainsthebenchmarkinginfrastructureand4$6 = () => {
	return `Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.`;
};
var team_grid_managescommunitycontributionspartnershipsand4$6 = () => {
	return `Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.`;
};
var team_grid_marcusweber1$6 = () => {
	return `Marcus Weber`;
};
var team_grid_passionateaboutdeveloperexperienceand4$6 = () => {
	return `Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.`;
};
var team_grid_performanceengineer1$6 = () => {
	return `Ingegnere delle prestazioni`;
};
var team_grid_sarahchen1$6 = () => {
	return `Sarah Chen`;
};
var team_grid_specializesinjavascriptperformanceoptimization4$6 = () => {
	return `Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.`;
};
var team_grid_tomasrodriguez1$6 = () => {
	return `Tomás Rodríguez`;
};
var team_grid_yukitanaka1$6 = () => {
	return `Yuki Tanaka`;
};
var team_grid_aishapatel1$5 = () => {
	return `Aisha Patel`;
};
var team_grid_communitymanager1$5 = () => {
	return `Gerente de Comunidade`;
};
var team_grid_dataanalyst1$5 = () => {
	return `Analista de Dados`;
};
var team_grid_developeradvocate1$5 = () => {
	return `Developer Advocate`;
};
var team_grid_elenakowalski1$5 = () => {
	return `Elena Kowalski`;
};
var team_grid_ensuresstatisticalrigorinall4$5 = () => {
	return `Garante o rigor estatístico em todos os resultados de benchmark. Doutorado em estatística aplicada pelo MIT.`;
};
var team_grid_formergoogleengineerwith103$5 = () => {
	return `Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalizzazione em escala.`;
};
var team_grid_founderleadengineer2$5 = () => {
	return `Fundadora e Engenheira Líder`;
};
var team_grid_fullstackdeveloper2$5 = () => {
	return `Desenvolvedor Full-Stack`;
};
var team_grid_maintainsthebenchmarkinginfrastructureand4$5 = () => {
	return `Mantém a infraestrutura de benchmarking e o pipeline CI/CD. Contribuidor open source para Lingui.`;
};
var team_grid_managescommunitycontributionspartnershipsand4$5 = () => {
	return `Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.`;
};
var team_grid_marcusweber1$5 = () => {
	return `Marcus Weber`;
};
var team_grid_passionateaboutdeveloperexperienceand4$5 = () => {
	return `Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.`;
};
var team_grid_performanceengineer1$5 = () => {
	return `Engenheiro de Performance`;
};
var team_grid_sarahchen1$5 = () => {
	return `Sarah Chen`;
};
var team_grid_specializesinjavascriptperformanceoptimization4$5 = () => {
	return `Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.`;
};
var team_grid_tomasrodriguez1$5 = () => {
	return `Tomás Rodríguez`;
};
var team_grid_yukitanaka1$5 = () => {
	return `Yuki Tanaka`;
};
var team_grid_aishapatel1$4 = () => {
	return `Aisha Patel`;
};
var team_grid_communitymanager1$4 = () => {
	return `社区经理`;
};
var team_grid_dataanalyst1$4 = () => {
	return `数据分析师`;
};
var team_grid_developeradvocate1$4 = () => {
	return `开发者倡导者`;
};
var team_grid_elenakowalski1$4 = () => {
	return `Elena Kowalski`;
};
var team_grid_ensuresstatisticalrigorinall4$4 = () => {
	return `确保所有基准测试结果的统计严谨性。麻省理工学院 (MIT) 应用统计学博士。`;
};
var team_grid_formergoogleengineerwith103$4 = () => {
	return `前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。`;
};
var team_grid_founderleadengineer2$4 = () => {
	return `创始人兼首席工程师`;
};
var team_grid_fullstackdeveloper2$4 = () => {
	return `全栈开发人员`;
};
var team_grid_maintainsthebenchmarkinginfrastructureand4$4 = () => {
	return `负责维护基准测试基础设施和 CI/CD 流水线。Lingui 开源贡献者。`;
};
var team_grid_managescommunitycontributionspartnershipsand4$4 = () => {
	return `负责管理社区贡献、合作伙伴关系和活动。具有开源治理背景。`;
};
var team_grid_marcusweber1$4 = () => {
	return `Marcus Weber`;
};
var team_grid_passionateaboutdeveloperexperienceand4$4 = () => {
	return `热衷于开发者体验和教育。React Conf, JSConf 和 i18nNext 的演讲者。`;
};
var team_grid_performanceengineer1$4 = () => {
	return `性能工程师`;
};
var team_grid_sarahchen1$4 = () => {
	return `Sarah Chen`;
};
var team_grid_specializesinjavascriptperformanceoptimization4$4 = () => {
	return `专注于 JavaScript 性能优化和基准测试方法论。此前曾就职于 Vercel。`;
};
var team_grid_tomasrodriguez1$4 = () => {
	return `Tomás Rodríguez`;
};
var team_grid_yukitanaka1$4 = () => {
	return `Yuki Tanaka`;
};
var team_grid_aishapatel1$3 = () => {
	return `Aisha Patel`;
};
var team_grid_communitymanager1$3 = () => {
	return `コミュニティマネージャー`;
};
var team_grid_dataanalyst1$3 = () => {
	return `データアナリスト`;
};
var team_grid_developeradvocate1$3 = () => {
	return `デベロッパーアドボケイト`;
};
var team_grid_elenakowalski1$3 = () => {
	return `Elena Kowalski`;
};
var team_grid_ensuresstatisticalrigorinall4$3 = () => {
	return `すべてのベンチマーク結果における統計的な厳密さを保証します。MITで応用統計学の博士号を取得。`;
};
var team_grid_formergoogleengineerwith103$3 = () => {
	return `大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。`;
};
var team_grid_founderleadengineer2$3 = () => {
	return `創設者 & リードエンジニア`;
};
var team_grid_fullstackdeveloper2$3 = () => {
	return `フルスタックデベロッパー`;
};
var team_grid_maintainsthebenchmarkinginfrastructureand4$3 = () => {
	return `ベンチマークインフラストラクチャとCI/CDパイプラインを維持。Linguiのオープンソースコントリビューター。`;
};
var team_grid_managescommunitycontributionspartnershipsand4$3 = () => {
	return `コミュニティの貢献、パートナーシップ、イベントを管理。オープンソースガバナンスの経歴を持つ。`;
};
var team_grid_marcusweber1$3 = () => {
	return `Marcus Weber`;
};
var team_grid_passionateaboutdeveloperexperienceand4$3 = () => {
	return `開発者エクスペリエンスと教育に情熱を注いでいます。React Conf、JSConf、およびi18nNextのスピーカー。`;
};
var team_grid_performanceengineer1$3 = () => {
	return `パフォーマンスエンジニア`;
};
var team_grid_sarahchen1$3 = () => {
	return `Sarah Chen`;
};
var team_grid_specializesinjavascriptperformanceoptimization4$3 = () => {
	return `JavaScriptのパフォーマンス最適化とベンチマーク方法論を専門としています。以前はVercelに在籍。`;
};
var team_grid_tomasrodriguez1$3 = () => {
	return `Tomás Rodríguez`;
};
var team_grid_yukitanaka1$3 = () => {
	return `Yuki Tanaka`;
};
var team_grid_aishapatel1$2 = () => {
	return `Aisha Patel`;
};
var team_grid_communitymanager1$2 = () => {
	return `커뮤니티 매니저`;
};
var team_grid_dataanalyst1$2 = () => {
	return `데이터 분석가`;
};
var team_grid_developeradvocate1$2 = () => {
	return `개발자 에반젤리스트`;
};
var team_grid_elenakowalski1$2 = () => {
	return `Elena Kowalski`;
};
var team_grid_ensuresstatisticalrigorinall4$2 = () => {
	return `모든 벤치마크 결과의 통계적 엄격함을 보장합니다. MIT 응용 통계학 박사.`;
};
var team_grid_formergoogleengineerwith103$2 = () => {
	return `규모 있는 국제화 시스템 구축 분야에서 10년의 경력을 쌓은 전직 Google 엔지니어입니다.`;
};
var team_grid_founderleadengineer2$2 = () => {
	return `설립자 겸 수석 엔지니어`;
};
var team_grid_fullstackdeveloper2$2 = () => {
	return `풀스택 개발자`;
};
var team_grid_maintainsthebenchmarkinginfrastructureand4$2 = () => {
	return `벤치마킹 인프라 및 CI/CD 파이프라인을 유지 관리합니다. Lingui 오픈 소스 기여자입니다.`;
};
var team_grid_managescommunitycontributionspartnershipsand4$2 = () => {
	return `커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 분야의 배경을 가지고 있습니다.`;
};
var team_grid_marcusweber1$2 = () => {
	return `Marcus Weber`;
};
var team_grid_passionateaboutdeveloperexperienceand4$2 = () => {
	return `개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext의 발표자입니다.`;
};
var team_grid_performanceengineer1$2 = () => {
	return `성능 엔지니어`;
};
var team_grid_sarahchen1$2 = () => {
	return `Sarah Chen`;
};
var team_grid_specializesinjavascriptperformanceoptimization4$2 = () => {
	return `JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전에는 Vercel에서 근무했습니다.`;
};
var team_grid_tomasrodriguez1$2 = () => {
	return `Tomás Rodríguez`;
};
var team_grid_yukitanaka1$2 = () => {
	return `Yuki Tanaka`;
};
var team_grid_aishapatel1$1 = () => {
	return `Айша Патель`;
};
var team_grid_communitymanager1$1 = () => {
	return `Комьюнити-менеджер`;
};
var team_grid_dataanalyst1$1 = () => {
	return `Аналитик данных`;
};
var team_grid_developeradvocate1$1 = () => {
	return `Адвокат разработчиков`;
};
var team_grid_elenakowalski1$1 = () => {
	return `Елена Ковальски`;
};
var team_grid_ensuresstatisticalrigorinall4$1 = () => {
	return `Обеспечивает статистическую строгость всех результатов тестирования. Доктор прикладной статистики из MIT.`;
};
var team_grid_formergoogleengineerwith103$1 = () => {
	return `Бывший инженер Google с 10-летним опытом создания систем интернационализации в масштабе.`;
};
var team_grid_founderleadengineer2$1 = () => {
	return `Основатель и ведущий инженер`;
};
var team_grid_fullstackdeveloper2$1 = () => {
	return `Фулстек-разработчик`;
};
var team_grid_maintainsthebenchmarkinginfrastructureand4$1 = () => {
	return `Поддерживает инфраструктуру тестирования и CI/CD пайплайн. Участник разработки Lingui с открытым исходным кодом.`;
};
var team_grid_managescommunitycontributionspartnershipsand4$1 = () => {
	return `Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении проектами с открытым исходным кодом.`;
};
var team_grid_marcusweber1$1 = () => {
	return `Маркус Вебер`;
};
var team_grid_passionateaboutdeveloperexperienceand4$1 = () => {
	return `Увлечена опытом разработчиков и обучением. Спикер на React Conf, JSConf и i18nNext.`;
};
var team_grid_performanceengineer1$1 = () => {
	return `Инженер по производительности`;
};
var team_grid_sarahchen1$1 = () => {
	return `Сара Чен`;
};
var team_grid_specializesinjavascriptperformanceoptimization4$1 = () => {
	return `Специализируется на оптимизации производительности JavaScript и методологии тестирования. Ранее работал в Vercel.`;
};
var team_grid_tomasrodriguez1$1 = () => {
	return `Томас Родригес`;
};
var team_grid_yukitanaka1$1 = () => {
	return `Юки Танака`;
};
var team_grid_aishapatel1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return team_grid_aishapatel1$9(inputs);
	if (locale === "es") return team_grid_aishapatel1$8(inputs);
	if (locale === "de") return team_grid_aishapatel1$7(inputs);
	if (locale === "it") return team_grid_aishapatel1$6(inputs);
	if (locale === "pt") return team_grid_aishapatel1$5(inputs);
	if (locale === "zh") return team_grid_aishapatel1$4(inputs);
	if (locale === "ja") return team_grid_aishapatel1$3(inputs);
	if (locale === "ko") return team_grid_aishapatel1$2(inputs);
	if (locale === "ru") return team_grid_aishapatel1$1(inputs);
	return team_grid_aishapatel1$10(inputs);
});
var team_grid_communitymanager1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return team_grid_communitymanager1$9(inputs);
	if (locale === "es") return team_grid_communitymanager1$8(inputs);
	if (locale === "de") return team_grid_communitymanager1$7(inputs);
	if (locale === "it") return team_grid_communitymanager1$6(inputs);
	if (locale === "pt") return team_grid_communitymanager1$5(inputs);
	if (locale === "zh") return team_grid_communitymanager1$4(inputs);
	if (locale === "ja") return team_grid_communitymanager1$3(inputs);
	if (locale === "ko") return team_grid_communitymanager1$2(inputs);
	if (locale === "ru") return team_grid_communitymanager1$1(inputs);
	return team_grid_communitymanager1$10(inputs);
});
var team_grid_dataanalyst1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return team_grid_dataanalyst1$9(inputs);
	if (locale === "es") return team_grid_dataanalyst1$8(inputs);
	if (locale === "de") return team_grid_dataanalyst1$7(inputs);
	if (locale === "it") return team_grid_dataanalyst1$6(inputs);
	if (locale === "pt") return team_grid_dataanalyst1$5(inputs);
	if (locale === "zh") return team_grid_dataanalyst1$4(inputs);
	if (locale === "ja") return team_grid_dataanalyst1$3(inputs);
	if (locale === "ko") return team_grid_dataanalyst1$2(inputs);
	if (locale === "ru") return team_grid_dataanalyst1$1(inputs);
	return team_grid_dataanalyst1$10(inputs);
});
var team_grid_developeradvocate1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return team_grid_developeradvocate1$9(inputs);
	if (locale === "es") return team_grid_developeradvocate1$8(inputs);
	if (locale === "de") return team_grid_developeradvocate1$7(inputs);
	if (locale === "it") return team_grid_developeradvocate1$6(inputs);
	if (locale === "pt") return team_grid_developeradvocate1$5(inputs);
	if (locale === "zh") return team_grid_developeradvocate1$4(inputs);
	if (locale === "ja") return team_grid_developeradvocate1$3(inputs);
	if (locale === "ko") return team_grid_developeradvocate1$2(inputs);
	if (locale === "ru") return team_grid_developeradvocate1$1(inputs);
	return team_grid_developeradvocate1$10(inputs);
});
var team_grid_elenakowalski1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return team_grid_elenakowalski1$9(inputs);
	if (locale === "es") return team_grid_elenakowalski1$8(inputs);
	if (locale === "de") return team_grid_elenakowalski1$7(inputs);
	if (locale === "it") return team_grid_elenakowalski1$6(inputs);
	if (locale === "pt") return team_grid_elenakowalski1$5(inputs);
	if (locale === "zh") return team_grid_elenakowalski1$4(inputs);
	if (locale === "ja") return team_grid_elenakowalski1$3(inputs);
	if (locale === "ko") return team_grid_elenakowalski1$2(inputs);
	if (locale === "ru") return team_grid_elenakowalski1$1(inputs);
	return team_grid_elenakowalski1$10(inputs);
});
var team_grid_ensuresstatisticalrigorinall4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return team_grid_ensuresstatisticalrigorinall4$9(inputs);
	if (locale === "es") return team_grid_ensuresstatisticalrigorinall4$8(inputs);
	if (locale === "de") return team_grid_ensuresstatisticalrigorinall4$7(inputs);
	if (locale === "it") return team_grid_ensuresstatisticalrigorinall4$6(inputs);
	if (locale === "pt") return team_grid_ensuresstatisticalrigorinall4$5(inputs);
	if (locale === "zh") return team_grid_ensuresstatisticalrigorinall4$4(inputs);
	if (locale === "ja") return team_grid_ensuresstatisticalrigorinall4$3(inputs);
	if (locale === "ko") return team_grid_ensuresstatisticalrigorinall4$2(inputs);
	if (locale === "ru") return team_grid_ensuresstatisticalrigorinall4$1(inputs);
	return team_grid_ensuresstatisticalrigorinall4$10(inputs);
});
var team_grid_formergoogleengineerwith103 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return team_grid_formergoogleengineerwith103$9(inputs);
	if (locale === "es") return team_grid_formergoogleengineerwith103$8(inputs);
	if (locale === "de") return team_grid_formergoogleengineerwith103$7(inputs);
	if (locale === "it") return team_grid_formergoogleengineerwith103$6(inputs);
	if (locale === "pt") return team_grid_formergoogleengineerwith103$5(inputs);
	if (locale === "zh") return team_grid_formergoogleengineerwith103$4(inputs);
	if (locale === "ja") return team_grid_formergoogleengineerwith103$3(inputs);
	if (locale === "ko") return team_grid_formergoogleengineerwith103$2(inputs);
	if (locale === "ru") return team_grid_formergoogleengineerwith103$1(inputs);
	return team_grid_formergoogleengineerwith103$10(inputs);
});
var team_grid_founderleadengineer2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return team_grid_founderleadengineer2$9(inputs);
	if (locale === "es") return team_grid_founderleadengineer2$8(inputs);
	if (locale === "de") return team_grid_founderleadengineer2$7(inputs);
	if (locale === "it") return team_grid_founderleadengineer2$6(inputs);
	if (locale === "pt") return team_grid_founderleadengineer2$5(inputs);
	if (locale === "zh") return team_grid_founderleadengineer2$4(inputs);
	if (locale === "ja") return team_grid_founderleadengineer2$3(inputs);
	if (locale === "ko") return team_grid_founderleadengineer2$2(inputs);
	if (locale === "ru") return team_grid_founderleadengineer2$1(inputs);
	return team_grid_founderleadengineer2$10(inputs);
});
var team_grid_fullstackdeveloper2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return team_grid_fullstackdeveloper2$9(inputs);
	if (locale === "es") return team_grid_fullstackdeveloper2$8(inputs);
	if (locale === "de") return team_grid_fullstackdeveloper2$7(inputs);
	if (locale === "it") return team_grid_fullstackdeveloper2$6(inputs);
	if (locale === "pt") return team_grid_fullstackdeveloper2$5(inputs);
	if (locale === "zh") return team_grid_fullstackdeveloper2$4(inputs);
	if (locale === "ja") return team_grid_fullstackdeveloper2$3(inputs);
	if (locale === "ko") return team_grid_fullstackdeveloper2$2(inputs);
	if (locale === "ru") return team_grid_fullstackdeveloper2$1(inputs);
	return team_grid_fullstackdeveloper2$10(inputs);
});
var team_grid_maintainsthebenchmarkinginfrastructureand4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return team_grid_maintainsthebenchmarkinginfrastructureand4$9(inputs);
	if (locale === "es") return team_grid_maintainsthebenchmarkinginfrastructureand4$8(inputs);
	if (locale === "de") return team_grid_maintainsthebenchmarkinginfrastructureand4$7(inputs);
	if (locale === "it") return team_grid_maintainsthebenchmarkinginfrastructureand4$6(inputs);
	if (locale === "pt") return team_grid_maintainsthebenchmarkinginfrastructureand4$5(inputs);
	if (locale === "zh") return team_grid_maintainsthebenchmarkinginfrastructureand4$4(inputs);
	if (locale === "ja") return team_grid_maintainsthebenchmarkinginfrastructureand4$3(inputs);
	if (locale === "ko") return team_grid_maintainsthebenchmarkinginfrastructureand4$2(inputs);
	if (locale === "ru") return team_grid_maintainsthebenchmarkinginfrastructureand4$1(inputs);
	return team_grid_maintainsthebenchmarkinginfrastructureand4$10(inputs);
});
var team_grid_managescommunitycontributionspartnershipsand4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return team_grid_managescommunitycontributionspartnershipsand4$9(inputs);
	if (locale === "es") return team_grid_managescommunitycontributionspartnershipsand4$8(inputs);
	if (locale === "de") return team_grid_managescommunitycontributionspartnershipsand4$7(inputs);
	if (locale === "it") return team_grid_managescommunitycontributionspartnershipsand4$6(inputs);
	if (locale === "pt") return team_grid_managescommunitycontributionspartnershipsand4$5(inputs);
	if (locale === "zh") return team_grid_managescommunitycontributionspartnershipsand4$4(inputs);
	if (locale === "ja") return team_grid_managescommunitycontributionspartnershipsand4$3(inputs);
	if (locale === "ko") return team_grid_managescommunitycontributionspartnershipsand4$2(inputs);
	if (locale === "ru") return team_grid_managescommunitycontributionspartnershipsand4$1(inputs);
	return team_grid_managescommunitycontributionspartnershipsand4$10(inputs);
});
var team_grid_marcusweber1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return team_grid_marcusweber1$9(inputs);
	if (locale === "es") return team_grid_marcusweber1$8(inputs);
	if (locale === "de") return team_grid_marcusweber1$7(inputs);
	if (locale === "it") return team_grid_marcusweber1$6(inputs);
	if (locale === "pt") return team_grid_marcusweber1$5(inputs);
	if (locale === "zh") return team_grid_marcusweber1$4(inputs);
	if (locale === "ja") return team_grid_marcusweber1$3(inputs);
	if (locale === "ko") return team_grid_marcusweber1$2(inputs);
	if (locale === "ru") return team_grid_marcusweber1$1(inputs);
	return team_grid_marcusweber1$10(inputs);
});
var team_grid_passionateaboutdeveloperexperienceand4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return team_grid_passionateaboutdeveloperexperienceand4$9(inputs);
	if (locale === "es") return team_grid_passionateaboutdeveloperexperienceand4$8(inputs);
	if (locale === "de") return team_grid_passionateaboutdeveloperexperienceand4$7(inputs);
	if (locale === "it") return team_grid_passionateaboutdeveloperexperienceand4$6(inputs);
	if (locale === "pt") return team_grid_passionateaboutdeveloperexperienceand4$5(inputs);
	if (locale === "zh") return team_grid_passionateaboutdeveloperexperienceand4$4(inputs);
	if (locale === "ja") return team_grid_passionateaboutdeveloperexperienceand4$3(inputs);
	if (locale === "ko") return team_grid_passionateaboutdeveloperexperienceand4$2(inputs);
	if (locale === "ru") return team_grid_passionateaboutdeveloperexperienceand4$1(inputs);
	return team_grid_passionateaboutdeveloperexperienceand4$10(inputs);
});
var team_grid_performanceengineer1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return team_grid_performanceengineer1$9(inputs);
	if (locale === "es") return team_grid_performanceengineer1$8(inputs);
	if (locale === "de") return team_grid_performanceengineer1$7(inputs);
	if (locale === "it") return team_grid_performanceengineer1$6(inputs);
	if (locale === "pt") return team_grid_performanceengineer1$5(inputs);
	if (locale === "zh") return team_grid_performanceengineer1$4(inputs);
	if (locale === "ja") return team_grid_performanceengineer1$3(inputs);
	if (locale === "ko") return team_grid_performanceengineer1$2(inputs);
	if (locale === "ru") return team_grid_performanceengineer1$1(inputs);
	return team_grid_performanceengineer1$10(inputs);
});
var team_grid_sarahchen1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return team_grid_sarahchen1$9(inputs);
	if (locale === "es") return team_grid_sarahchen1$8(inputs);
	if (locale === "de") return team_grid_sarahchen1$7(inputs);
	if (locale === "it") return team_grid_sarahchen1$6(inputs);
	if (locale === "pt") return team_grid_sarahchen1$5(inputs);
	if (locale === "zh") return team_grid_sarahchen1$4(inputs);
	if (locale === "ja") return team_grid_sarahchen1$3(inputs);
	if (locale === "ko") return team_grid_sarahchen1$2(inputs);
	if (locale === "ru") return team_grid_sarahchen1$1(inputs);
	return team_grid_sarahchen1$10(inputs);
});
var team_grid_specializesinjavascriptperformanceoptimization4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return team_grid_specializesinjavascriptperformanceoptimization4$9(inputs);
	if (locale === "es") return team_grid_specializesinjavascriptperformanceoptimization4$8(inputs);
	if (locale === "de") return team_grid_specializesinjavascriptperformanceoptimization4$7(inputs);
	if (locale === "it") return team_grid_specializesinjavascriptperformanceoptimization4$6(inputs);
	if (locale === "pt") return team_grid_specializesinjavascriptperformanceoptimization4$5(inputs);
	if (locale === "zh") return team_grid_specializesinjavascriptperformanceoptimization4$4(inputs);
	if (locale === "ja") return team_grid_specializesinjavascriptperformanceoptimization4$3(inputs);
	if (locale === "ko") return team_grid_specializesinjavascriptperformanceoptimization4$2(inputs);
	if (locale === "ru") return team_grid_specializesinjavascriptperformanceoptimization4$1(inputs);
	return team_grid_specializesinjavascriptperformanceoptimization4$10(inputs);
});
var team_grid_tomasrodriguez1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return team_grid_tomasrodriguez1$9(inputs);
	if (locale === "es") return team_grid_tomasrodriguez1$8(inputs);
	if (locale === "de") return team_grid_tomasrodriguez1$7(inputs);
	if (locale === "it") return team_grid_tomasrodriguez1$6(inputs);
	if (locale === "pt") return team_grid_tomasrodriguez1$5(inputs);
	if (locale === "zh") return team_grid_tomasrodriguez1$4(inputs);
	if (locale === "ja") return team_grid_tomasrodriguez1$3(inputs);
	if (locale === "ko") return team_grid_tomasrodriguez1$2(inputs);
	if (locale === "ru") return team_grid_tomasrodriguez1$1(inputs);
	return team_grid_tomasrodriguez1$10(inputs);
});
var team_grid_yukitanaka1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return team_grid_yukitanaka1$9(inputs);
	if (locale === "es") return team_grid_yukitanaka1$8(inputs);
	if (locale === "de") return team_grid_yukitanaka1$7(inputs);
	if (locale === "it") return team_grid_yukitanaka1$6(inputs);
	if (locale === "pt") return team_grid_yukitanaka1$5(inputs);
	if (locale === "zh") return team_grid_yukitanaka1$4(inputs);
	if (locale === "ja") return team_grid_yukitanaka1$3(inputs);
	if (locale === "ko") return team_grid_yukitanaka1$2(inputs);
	if (locale === "ru") return team_grid_yukitanaka1$1(inputs);
	return team_grid_yukitanaka1$10(inputs);
});
var _jsxFileName$2 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/team/TeamGrid.tsx";
function TeamGrid() {
	const members = [
		{
			name: team_grid_sarahchen1(),
			role: team_grid_founderleadengineer2(),
			bio: team_grid_formergoogleengineerwith103()
		},
		{
			name: team_grid_marcusweber1(),
			role: team_grid_performanceengineer1(),
			bio: team_grid_specializesinjavascriptperformanceoptimization4()
		},
		{
			name: team_grid_aishapatel1(),
			role: team_grid_developeradvocate1(),
			bio: team_grid_passionateaboutdeveloperexperienceand4()
		},
		{
			name: team_grid_tomasrodriguez1(),
			role: team_grid_fullstackdeveloper2(),
			bio: team_grid_maintainsthebenchmarkinginfrastructureand4()
		},
		{
			name: team_grid_yukitanaka1(),
			role: team_grid_dataanalyst1(),
			bio: team_grid_ensuresstatisticalrigorinall4()
		},
		{
			name: team_grid_elenakowalski1(),
			role: team_grid_communitymanager1(),
			bio: team_grid_managescommunitycontributionspartnershipsand4()
		}
	];
	return jsxDEV("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: members.map((m) => jsxDEV("div", {
			className: "rounded-lg border border-border bg-card p-6 text-center",
			children: [
				jsxDEV("div", {
					className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground",
					children: m.name.split(" ").map((n) => n[0]).join("")
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 44,
					columnNumber: 11
				}, this),
				jsxDEV("h3", {
					className: "text-base font-semibold text-foreground",
					children: m.name
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 50,
					columnNumber: 11
				}, this),
				jsxDEV("p", {
					className: "mb-2 text-xs font-medium text-primary",
					children: m.role
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 51,
					columnNumber: 11
				}, this),
				jsxDEV("p", {
					className: "text-sm text-muted-foreground",
					children: m.bio
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 52,
					columnNumber: 11
				}, this)
			]
		}, m.name, true, {
			fileName: _jsxFileName$2,
			lineNumber: 40,
			columnNumber: 9
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 38,
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
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/team/TeamGrid.wrapper.tsx";
function Wrapped() {
	return jsxDEV(Wrapper, { children: jsxDEV(TeamGrid, {}, void 0, false, {
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
