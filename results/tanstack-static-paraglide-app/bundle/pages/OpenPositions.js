import "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
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
var en_open_positions_seniorfrontendengineer2 = () => {
	return `Senior Frontend Engineer`;
};
var fr_open_positions_seniorfrontendengineer2 = () => {
	return `Ingénieur Frontend Senior`;
};
var es_open_positions_seniorfrontendengineer2 = () => {
	return `Ingeniero Frontend Senior`;
};
var de_open_positions_seniorfrontendengineer2 = () => {
	return `Senior Frontend-Entwickler`;
};
var it_open_positions_seniorfrontendengineer2 = () => {
	return `Ingegnere Frontend Senior`;
};
var pt_open_positions_seniorfrontendengineer2 = () => {
	return `Engenheiro Frontend Sênior`;
};
var zh_open_positions_seniorfrontendengineer2 = () => {
	return `高级前端工程师`;
};
var ja_open_positions_seniorfrontendengineer2 = () => {
	return `シニアフロントエンドエンジニア`;
};
var ko_open_positions_seniorfrontendengineer2 = () => {
	return `시니어 프론트엔드 엔지니어`;
};
var ru_open_positions_seniorfrontendengineer2 = () => {
	return `Старший фронтенд-инженер`;
};
var open_positions_seniorfrontendengineer2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_open_positions_seniorfrontendengineer2(inputs);
	if (locale === "fr") return fr_open_positions_seniorfrontendengineer2(inputs);
	if (locale === "es") return es_open_positions_seniorfrontendengineer2(inputs);
	if (locale === "de") return de_open_positions_seniorfrontendengineer2(inputs);
	if (locale === "it") return it_open_positions_seniorfrontendengineer2(inputs);
	if (locale === "pt") return pt_open_positions_seniorfrontendengineer2(inputs);
	if (locale === "zh") return zh_open_positions_seniorfrontendengineer2(inputs);
	if (locale === "ja") return ja_open_positions_seniorfrontendengineer2(inputs);
	if (locale === "ko") return ko_open_positions_seniorfrontendengineer2(inputs);
	return ru_open_positions_seniorfrontendengineer2(inputs);
});
var en_open_positions_buildandmaintainourbenchmarking4 = () => {
	return `Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.`;
};
var fr_open_positions_buildandmaintainourbenchmarking4 = () => {
	return `Construire et maintenir notre tableau de bord de benchmarking et nos outils de développement en utilisant React, TypeScript et Vite.`;
};
var es_open_positions_buildandmaintainourbenchmarking4 = () => {
	return `Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.`;
};
var de_open_positions_buildandmaintainourbenchmarking4 = () => {
	return `Erstellen und Verwalten unseres Benchmarking-Dashboards und der Entwickler-Tools mit React, TypeScript und Vite.`;
};
var it_open_positions_buildandmaintainourbenchmarking4 = () => {
	return `Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.`;
};
var pt_open_positions_buildandmaintainourbenchmarking4 = () => {
	return `Construir e manter nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.`;
};
var zh_open_positions_buildandmaintainourbenchmarking4 = () => {
	return `使用 React, TypeScript 和 Vite 构建并维护我们的基准测试仪表板和开发人员工具。`;
};
var ja_open_positions_buildandmaintainourbenchmarking4 = () => {
	return `React、TypeScript、Viteを使用して、私たちのベンチマークダッシュボードと開発者ツールを構築および維持します。`;
};
var ko_open_positions_buildandmaintainourbenchmarking4 = () => {
	return `React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드 및 개발자 도구를 구축하고 유지 관리합니다.`;
};
var ru_open_positions_buildandmaintainourbenchmarking4 = () => {
	return `Создание и поддержка нашей панели тестирования и инструментов разработчика с использованием React, TypeScript и Vite.`;
};
var open_positions_buildandmaintainourbenchmarking4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_open_positions_buildandmaintainourbenchmarking4(inputs);
	if (locale === "fr") return fr_open_positions_buildandmaintainourbenchmarking4(inputs);
	if (locale === "es") return es_open_positions_buildandmaintainourbenchmarking4(inputs);
	if (locale === "de") return de_open_positions_buildandmaintainourbenchmarking4(inputs);
	if (locale === "it") return it_open_positions_buildandmaintainourbenchmarking4(inputs);
	if (locale === "pt") return pt_open_positions_buildandmaintainourbenchmarking4(inputs);
	if (locale === "zh") return zh_open_positions_buildandmaintainourbenchmarking4(inputs);
	if (locale === "ja") return ja_open_positions_buildandmaintainourbenchmarking4(inputs);
	if (locale === "ko") return ko_open_positions_buildandmaintainourbenchmarking4(inputs);
	return ru_open_positions_buildandmaintainourbenchmarking4(inputs);
});
var en_open_positions_backendengineer1 = () => {
	return `Backend Engineer`;
};
var fr_open_positions_backendengineer1 = () => {
	return `Ingénieur Backend`;
};
var es_open_positions_backendengineer1 = () => {
	return `Ingeniero Backend`;
};
var de_open_positions_backendengineer1 = () => {
	return `Backend-Entwickler`;
};
var it_open_positions_backendengineer1 = () => {
	return `Ingegnere Backend`;
};
var pt_open_positions_backendengineer1 = () => {
	return `Engenheiro Backend`;
};
var zh_open_positions_backendengineer1 = () => {
	return `后端工程师`;
};
var ja_open_positions_backendengineer1 = () => {
	return `バックエンドエンジニア`;
};
var ko_open_positions_backendengineer1 = () => {
	return `백엔드 엔지니어`;
};
var ru_open_positions_backendengineer1 = () => {
	return `Бэкенд-инженер`;
};
var open_positions_backendengineer1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_open_positions_backendengineer1(inputs);
	if (locale === "fr") return fr_open_positions_backendengineer1(inputs);
	if (locale === "es") return es_open_positions_backendengineer1(inputs);
	if (locale === "de") return de_open_positions_backendengineer1(inputs);
	if (locale === "it") return it_open_positions_backendengineer1(inputs);
	if (locale === "pt") return pt_open_positions_backendengineer1(inputs);
	if (locale === "zh") return zh_open_positions_backendengineer1(inputs);
	if (locale === "ja") return ja_open_positions_backendengineer1(inputs);
	if (locale === "ko") return ko_open_positions_backendengineer1(inputs);
	return ru_open_positions_backendengineer1(inputs);
});
var en_open_positions_designandscaleourcloud4 = () => {
	return `Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.`;
};
var fr_open_positions_designandscaleourcloud4 = () => {
	return `Concevoir et mettre à l'échelle notre infrastructure de benchmarking cloud gérant des milliers de passages automatisés par jour.`;
};
var es_open_positions_designandscaleourcloud4 = () => {
	return `Diseñar y escalar nuestra infraestructura de benchmarking en la nube que gestiona miles de ejecuciones automatizadas diariamente.`;
};
var de_open_positions_designandscaleourcloud4 = () => {
	return `Design und Skalierung unserer Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.`;
};
var it_open_positions_designandscaleourcloud4 = () => {
	return `Progetta e scala la nostra infrastruttura di benchmarking cloud gestendo migliaia di esecuzioni automatiche giornaliere.`;
};
var pt_open_positions_designandscaleourcloud4 = () => {
	return `Projetar e escalar nossa infraestrutura de benchmarking na nuvem, lidando com milhares de execuções automatizadas diariamente.`;
};
var zh_open_positions_designandscaleourcloud4 = () => {
	return `设计并扩展我们的云基准测试基础设施，每天处理数千次自动化运行。`;
};
var ja_open_positions_designandscaleourcloud4 = () => {
	return `毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャを設計およびスケールさせます。`;
};
var ko_open_positions_designandscaleourcloud4 = () => {
	return `매일 수천 개의 자동화된 실행을 처리하는 클라우드 벤치마킹 인프라를 설계하고 확장합니다.`;
};
var ru_open_positions_designandscaleourcloud4 = () => {
	return `Проектирование и масштабирование нашей облачной инфраструктуры для тестирования, обрабатывающей тысячи автоматических запусков ежедневно.`;
};
var open_positions_designandscaleourcloud4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_open_positions_designandscaleourcloud4(inputs);
	if (locale === "fr") return fr_open_positions_designandscaleourcloud4(inputs);
	if (locale === "es") return es_open_positions_designandscaleourcloud4(inputs);
	if (locale === "de") return de_open_positions_designandscaleourcloud4(inputs);
	if (locale === "it") return it_open_positions_designandscaleourcloud4(inputs);
	if (locale === "pt") return pt_open_positions_designandscaleourcloud4(inputs);
	if (locale === "zh") return zh_open_positions_designandscaleourcloud4(inputs);
	if (locale === "ja") return ja_open_positions_designandscaleourcloud4(inputs);
	if (locale === "ko") return ko_open_positions_designandscaleourcloud4(inputs);
	return ru_open_positions_designandscaleourcloud4(inputs);
});
var en_open_positions_technicalwriter1 = () => {
	return `Technical Writer`;
};
var fr_open_positions_technicalwriter1 = () => {
	return `Rédacteur technique`;
};
var es_open_positions_technicalwriter1 = () => {
	return `Escritor técnico`;
};
var de_open_positions_technicalwriter1 = () => {
	return `Technischer Redakteur`;
};
var it_open_positions_technicalwriter1 = () => {
	return `Scrittore tecnico`;
};
var pt_open_positions_technicalwriter1 = () => {
	return `Redator Técnico`;
};
var zh_open_positions_technicalwriter1 = () => {
	return `技术作家`;
};
var ja_open_positions_technicalwriter1 = () => {
	return `テクニカルライター`;
};
var ko_open_positions_technicalwriter1 = () => {
	return `테크니컬 라이터`;
};
var ru_open_positions_technicalwriter1 = () => {
	return `Технический писатель`;
};
var open_positions_technicalwriter1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_open_positions_technicalwriter1(inputs);
	if (locale === "fr") return fr_open_positions_technicalwriter1(inputs);
	if (locale === "es") return es_open_positions_technicalwriter1(inputs);
	if (locale === "de") return de_open_positions_technicalwriter1(inputs);
	if (locale === "it") return it_open_positions_technicalwriter1(inputs);
	if (locale === "pt") return pt_open_positions_technicalwriter1(inputs);
	if (locale === "zh") return zh_open_positions_technicalwriter1(inputs);
	if (locale === "ja") return ja_open_positions_technicalwriter1(inputs);
	if (locale === "ko") return ko_open_positions_technicalwriter1(inputs);
	return ru_open_positions_technicalwriter1(inputs);
});
var en_open_positions_createcomprehensiveguidesapireferences4 = () => {
	return `Create comprehensive guides, API references, and tutorials for our benchmarking platform.`;
};
var fr_open_positions_createcomprehensiveguidesapireferences4 = () => {
	return `Créer des guides complets, des références d'API et des tutoriels pour notre plateforme de benchmarking.`;
};
var es_open_positions_createcomprehensiveguidesapireferences4 = () => {
	return `Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.`;
};
var de_open_positions_createcomprehensiveguidesapireferences4 = () => {
	return `Erstellen von umfassenden Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.`;
};
var it_open_positions_createcomprehensiveguidesapireferences4 = () => {
	return `Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.`;
};
var pt_open_positions_createcomprehensiveguidesapireferences4 = () => {
	return `Criar guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.`;
};
var zh_open_positions_createcomprehensiveguidesapireferences4 = () => {
	return `为我们的基准测试平台创建全面的指南、API 参考和教程。`;
};
var ja_open_positions_createcomprehensiveguidesapireferences4 = () => {
	return `私たちのベンチマークプラットフォームのための包括的なガイド、APIリファレンス、チュートリアルを作成します。`;
};
var ko_open_positions_createcomprehensiveguidesapireferences4 = () => {
	return `벤치마킹 플랫폼을 위한 포괄적인 가이드, API 참조 및 튜토리얼을 작성합니다.`;
};
var ru_open_positions_createcomprehensiveguidesapireferences4 = () => {
	return `Создание подробных руководств, справочников по API и учебных пособий для нашей платформы тестирования.`;
};
var open_positions_createcomprehensiveguidesapireferences4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_open_positions_createcomprehensiveguidesapireferences4(inputs);
	if (locale === "fr") return fr_open_positions_createcomprehensiveguidesapireferences4(inputs);
	if (locale === "es") return es_open_positions_createcomprehensiveguidesapireferences4(inputs);
	if (locale === "de") return de_open_positions_createcomprehensiveguidesapireferences4(inputs);
	if (locale === "it") return it_open_positions_createcomprehensiveguidesapireferences4(inputs);
	if (locale === "pt") return pt_open_positions_createcomprehensiveguidesapireferences4(inputs);
	if (locale === "zh") return zh_open_positions_createcomprehensiveguidesapireferences4(inputs);
	if (locale === "ja") return ja_open_positions_createcomprehensiveguidesapireferences4(inputs);
	if (locale === "ko") return ko_open_positions_createcomprehensiveguidesapireferences4(inputs);
	return ru_open_positions_createcomprehensiveguidesapireferences4(inputs);
});
var en_open_positions_devrelengineer1 = () => {
	return `DevRel Engineer`;
};
var fr_open_positions_devrelengineer1 = () => {
	return `Ingénieur DevRel`;
};
var es_open_positions_devrelengineer1 = () => {
	return `Ingeniero DevRel`;
};
var de_open_positions_devrelengineer1 = () => {
	return `DevRel-Ingenieur`;
};
var it_open_positions_devrelengineer1 = () => {
	return `Ingegnere DevOps`;
};
var pt_open_positions_devrelengineer1 = () => {
	return `Engenheiro DevRel`;
};
var zh_open_positions_devrelengineer1 = () => {
	return `开发者关系工程师`;
};
var ja_open_positions_devrelengineer1 = () => {
	return `DevRelエンジニア`;
};
var ko_open_positions_devrelengineer1 = () => {
	return `DevRel 엔지니어`;
};
var ru_open_positions_devrelengineer1 = () => {
	return `DevRel-инженер`;
};
var open_positions_devrelengineer1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_open_positions_devrelengineer1(inputs);
	if (locale === "fr") return fr_open_positions_devrelengineer1(inputs);
	if (locale === "es") return es_open_positions_devrelengineer1(inputs);
	if (locale === "de") return de_open_positions_devrelengineer1(inputs);
	if (locale === "it") return it_open_positions_devrelengineer1(inputs);
	if (locale === "pt") return pt_open_positions_devrelengineer1(inputs);
	if (locale === "zh") return zh_open_positions_devrelengineer1(inputs);
	if (locale === "ja") return ja_open_positions_devrelengineer1(inputs);
	if (locale === "ko") return ko_open_positions_devrelengineer1(inputs);
	return ru_open_positions_devrelengineer1(inputs);
});
var en_open_positions_sanfranciscoremote2 = () => {
	return `San Francisco / Remote`;
};
var fr_open_positions_sanfranciscoremote2 = () => {
	return `San Francisco / À distance`;
};
var es_open_positions_sanfranciscoremote2 = () => {
	return `San Francisco / Remoto`;
};
var de_open_positions_sanfranciscoremote2 = () => {
	return `San Francisco / Remote`;
};
var it_open_positions_sanfranciscoremote2 = () => {
	return `San Francisco / Remoto`;
};
var pt_open_positions_sanfranciscoremote2 = () => {
	return `San Francisco / Remoto`;
};
var zh_open_positions_sanfranciscoremote2 = () => {
	return `旧金山 / 远程`;
};
var ja_open_positions_sanfranciscoremote2 = () => {
	return `サンフランシスコ / リモート`;
};
var ko_open_positions_sanfranciscoremote2 = () => {
	return `샌프란시스코 / 원격`;
};
var ru_open_positions_sanfranciscoremote2 = () => {
	return `Сан-Франциско / Удаленно`;
};
var open_positions_sanfranciscoremote2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_open_positions_sanfranciscoremote2(inputs);
	if (locale === "fr") return fr_open_positions_sanfranciscoremote2(inputs);
	if (locale === "es") return es_open_positions_sanfranciscoremote2(inputs);
	if (locale === "de") return de_open_positions_sanfranciscoremote2(inputs);
	if (locale === "it") return it_open_positions_sanfranciscoremote2(inputs);
	if (locale === "pt") return pt_open_positions_sanfranciscoremote2(inputs);
	if (locale === "zh") return zh_open_positions_sanfranciscoremote2(inputs);
	if (locale === "ja") return ja_open_positions_sanfranciscoremote2(inputs);
	if (locale === "ko") return ko_open_positions_sanfranciscoremote2(inputs);
	return ru_open_positions_sanfranciscoremote2(inputs);
});
var en_open_positions_engagewiththei18ncommunity4 = () => {
	return `Engage with the i18n community through talks, workshops, blog posts, and open source contributions.`;
};
var fr_open_positions_engagewiththei18ncommunity4 = () => {
	return `Interagir avec la communauté i18n via des conférences, des ateliers, des articles de blog et des contributions open source.`;
};
var es_open_positions_engagewiththei18ncommunity4 = () => {
	return `Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto.`;
};
var de_open_positions_engagewiththei18ncommunity4 = () => {
	return `Austausch mit der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.`;
};
var it_open_positions_engagewiththei18ncommunity4 = () => {
	return `Interagisci con la comunità i18n attraverso conferenze, workshop, post sul blog e contributi open source.`;
};
var pt_open_positions_engagewiththei18ncommunity4 = () => {
	return `Interagir com a comunidade i18n por meio de palestras, workshops, postagens em blogs e contribuições de código aberto.`;
};
var zh_open_positions_engagewiththei18ncommunity4 = () => {
	return `通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。`;
};
var ja_open_positions_engagewiththei18ncommunity4 = () => {
	return `講演、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18nコミュニティと交流します。`;
};
var ko_open_positions_engagewiththei18ncommunity4 = () => {
	return `발표, 워크숍, 블로그 게시물 및 오픈 소스 기여를 통해 i18n 커뮤니티와 소통합니다.`;
};
var ru_open_positions_engagewiththei18ncommunity4 = () => {
	return `Взаимодействие с сообществом i18n через выступления, семинары, посты в блоге и вклад в открытый исходный код.`;
};
var open_positions_engagewiththei18ncommunity4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_open_positions_engagewiththei18ncommunity4(inputs);
	if (locale === "fr") return fr_open_positions_engagewiththei18ncommunity4(inputs);
	if (locale === "es") return es_open_positions_engagewiththei18ncommunity4(inputs);
	if (locale === "de") return de_open_positions_engagewiththei18ncommunity4(inputs);
	if (locale === "it") return it_open_positions_engagewiththei18ncommunity4(inputs);
	if (locale === "pt") return pt_open_positions_engagewiththei18ncommunity4(inputs);
	if (locale === "zh") return zh_open_positions_engagewiththei18ncommunity4(inputs);
	if (locale === "ja") return ja_open_positions_engagewiththei18ncommunity4(inputs);
	if (locale === "ko") return ko_open_positions_engagewiththei18ncommunity4(inputs);
	return ru_open_positions_engagewiththei18ncommunity4(inputs);
});
var en_open_positions_qaengineer1 = () => {
	return `QA Engineer`;
};
var fr_open_positions_qaengineer1 = () => {
	return `Ingénieur QA`;
};
var es_open_positions_qaengineer1 = () => {
	return `Ingeniero QA`;
};
var de_open_positions_qaengineer1 = () => {
	return `QA-Ingenieur`;
};
var it_open_positions_qaengineer1 = () => {
	return `Ingegnere QA`;
};
var pt_open_positions_qaengineer1 = () => {
	return `Engenheiro QA`;
};
var zh_open_positions_qaengineer1 = () => {
	return `测试工程师`;
};
var ja_open_positions_qaengineer1 = () => {
	return `QAエンジニア`;
};
var ko_open_positions_qaengineer1 = () => {
	return `QA 엔지니어`;
};
var ru_open_positions_qaengineer1 = () => {
	return `QA-инженер`;
};
var open_positions_qaengineer1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_open_positions_qaengineer1(inputs);
	if (locale === "fr") return fr_open_positions_qaengineer1(inputs);
	if (locale === "es") return es_open_positions_qaengineer1(inputs);
	if (locale === "de") return de_open_positions_qaengineer1(inputs);
	if (locale === "it") return it_open_positions_qaengineer1(inputs);
	if (locale === "pt") return pt_open_positions_qaengineer1(inputs);
	if (locale === "zh") return zh_open_positions_qaengineer1(inputs);
	if (locale === "ja") return ja_open_positions_qaengineer1(inputs);
	if (locale === "ko") return ko_open_positions_qaengineer1(inputs);
	return ru_open_positions_qaengineer1(inputs);
});
var en_open_positions_ensuretheaccuracyandreliability4 = () => {
	return `Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.`;
};
var fr_open_positions_ensuretheaccuracyandreliability4 = () => {
	return `Garantir l'exactitude et la fiabilité des résultats de benchmark par des tests et des validations rigoureux.`;
};
var es_open_positions_ensuretheaccuracyandreliability4 = () => {
	return `Garantizar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.`;
};
var de_open_positions_ensuretheaccuracyandreliability4 = () => {
	return `Sicherstellung der Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierungen.`;
};
var it_open_positions_ensuretheaccuracyandreliability4 = () => {
	return `Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.`;
};
var pt_open_positions_ensuretheaccuracyandreliability4 = () => {
	return `Garantir a precisão e confiabilidade dos resultados de benchmark por meio de testes e validações rigorosos.`;
};
var zh_open_positions_ensuretheaccuracyandreliability4 = () => {
	return `通过严格的测试和验证确保基准测试结果的准确性和可靠性。`;
};
var ja_open_positions_ensuretheaccuracyandreliability4 = () => {
	return `厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。`;
};
var ko_open_positions_ensuretheaccuracyandreliability4 = () => {
	return `철저한 테스트와 검증을 통해 벤치마크 결과의 정확성과 신뢰성을 보장합니다.`;
};
var ru_open_positions_ensuretheaccuracyandreliability4 = () => {
	return `Обеспечение точности и надежности результатов тестирования посредством строгого тестирования и валидации.`;
};
var open_positions_ensuretheaccuracyandreliability4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_open_positions_ensuretheaccuracyandreliability4(inputs);
	if (locale === "fr") return fr_open_positions_ensuretheaccuracyandreliability4(inputs);
	if (locale === "es") return es_open_positions_ensuretheaccuracyandreliability4(inputs);
	if (locale === "de") return de_open_positions_ensuretheaccuracyandreliability4(inputs);
	if (locale === "it") return it_open_positions_ensuretheaccuracyandreliability4(inputs);
	if (locale === "pt") return pt_open_positions_ensuretheaccuracyandreliability4(inputs);
	if (locale === "zh") return zh_open_positions_ensuretheaccuracyandreliability4(inputs);
	if (locale === "ja") return ja_open_positions_ensuretheaccuracyandreliability4(inputs);
	if (locale === "ko") return ko_open_positions_ensuretheaccuracyandreliability4(inputs);
	return ru_open_positions_ensuretheaccuracyandreliability4(inputs);
});
var en_open_positions_openpositions1 = () => {
	return `Open Positions`;
};
var fr_open_positions_openpositions1 = () => {
	return `Postes ouverts`;
};
var es_open_positions_openpositions1 = () => {
	return `Puestos vacantes`;
};
var de_open_positions_openpositions1 = () => {
	return `Offene Stellen`;
};
var it_open_positions_openpositions1 = () => {
	return `Posizioni aperte`;
};
var pt_open_positions_openpositions1 = () => {
	return `Vagas abertas`;
};
var zh_open_positions_openpositions1 = () => {
	return `开放职位`;
};
var ja_open_positions_openpositions1 = () => {
	return `募集中の職種`;
};
var ko_open_positions_openpositions1 = () => {
	return `채용 중인 포지션`;
};
var ru_open_positions_openpositions1 = () => {
	return `Открытые вакансии`;
};
var open_positions_openpositions1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_open_positions_openpositions1(inputs);
	if (locale === "fr") return fr_open_positions_openpositions1(inputs);
	if (locale === "es") return es_open_positions_openpositions1(inputs);
	if (locale === "de") return de_open_positions_openpositions1(inputs);
	if (locale === "it") return it_open_positions_openpositions1(inputs);
	if (locale === "pt") return pt_open_positions_openpositions1(inputs);
	if (locale === "zh") return zh_open_positions_openpositions1(inputs);
	if (locale === "ja") return ja_open_positions_openpositions1(inputs);
	if (locale === "ko") return ko_open_positions_openpositions1(inputs);
	return ru_open_positions_openpositions1(inputs);
});
var en_open_positions_applynow1 = () => {
	return `Apply Now`;
};
var fr_open_positions_applynow1 = () => {
	return `Postuler maintenant`;
};
var es_open_positions_applynow1 = () => {
	return `Postular ahora`;
};
var de_open_positions_applynow1 = () => {
	return `Jetzt bewerben`;
};
var it_open_positions_applynow1 = () => {
	return `Candidati ora`;
};
var pt_open_positions_applynow1 = () => {
	return `Candidatar-se agora`;
};
var zh_open_positions_applynow1 = () => {
	return `立即申请`;
};
var ja_open_positions_applynow1 = () => {
	return `今すぐ応募`;
};
var ko_open_positions_applynow1 = () => {
	return `지금 지원하기`;
};
var ru_open_positions_applynow1 = () => {
	return `Подать заявку`;
};
var open_positions_applynow1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_open_positions_applynow1(inputs);
	if (locale === "fr") return fr_open_positions_applynow1(inputs);
	if (locale === "es") return es_open_positions_applynow1(inputs);
	if (locale === "de") return de_open_positions_applynow1(inputs);
	if (locale === "it") return it_open_positions_applynow1(inputs);
	if (locale === "pt") return pt_open_positions_applynow1(inputs);
	if (locale === "zh") return zh_open_positions_applynow1(inputs);
	if (locale === "ja") return ja_open_positions_applynow1(inputs);
	if (locale === "ko") return ko_open_positions_applynow1(inputs);
	return ru_open_positions_applynow1(inputs);
});
var en_open_positions_remote = () => {
	return `Remote`;
};
var fr_open_positions_remote = () => {
	return `À distance`;
};
var es_open_positions_remote = () => {
	return `Remoto`;
};
var de_open_positions_remote = () => {
	return `Remote`;
};
var it_open_positions_remote = () => {
	return `Remoto`;
};
var pt_open_positions_remote = () => {
	return `Remoto`;
};
var zh_open_positions_remote = () => {
	return `远程`;
};
var ja_open_positions_remote = () => {
	return `リモート`;
};
var ko_open_positions_remote = () => {
	return `원격`;
};
var ru_open_positions_remote = () => {
	return `Удаленно`;
};
var open_positions_remote = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_open_positions_remote(inputs);
	if (locale === "fr") return fr_open_positions_remote(inputs);
	if (locale === "es") return es_open_positions_remote(inputs);
	if (locale === "de") return de_open_positions_remote(inputs);
	if (locale === "it") return it_open_positions_remote(inputs);
	if (locale === "pt") return pt_open_positions_remote(inputs);
	if (locale === "zh") return zh_open_positions_remote(inputs);
	if (locale === "ja") return ja_open_positions_remote(inputs);
	if (locale === "ko") return ko_open_positions_remote(inputs);
	return ru_open_positions_remote(inputs);
});
var en_open_positions_fulltime1 = () => {
	return `Full-time`;
};
var fr_open_positions_fulltime1 = () => {
	return `Temps plein`;
};
var es_open_positions_fulltime1 = () => {
	return `Tiempo completo`;
};
var de_open_positions_fulltime1 = () => {
	return `Vollzeit`;
};
var it_open_positions_fulltime1 = () => {
	return `Tempo pieno`;
};
var pt_open_positions_fulltime1 = () => {
	return `Tempo integral`;
};
var zh_open_positions_fulltime1 = () => {
	return `全职`;
};
var ja_open_positions_fulltime1 = () => {
	return `正社員`;
};
var ko_open_positions_fulltime1 = () => {
	return `정규직`;
};
var ru_open_positions_fulltime1 = () => {
	return `Полный рабочий день`;
};
var open_positions_fulltime1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_open_positions_fulltime1(inputs);
	if (locale === "fr") return fr_open_positions_fulltime1(inputs);
	if (locale === "es") return es_open_positions_fulltime1(inputs);
	if (locale === "de") return de_open_positions_fulltime1(inputs);
	if (locale === "it") return it_open_positions_fulltime1(inputs);
	if (locale === "pt") return pt_open_positions_fulltime1(inputs);
	if (locale === "zh") return zh_open_positions_fulltime1(inputs);
	if (locale === "ja") return ja_open_positions_fulltime1(inputs);
	if (locale === "ko") return ko_open_positions_fulltime1(inputs);
	return ru_open_positions_fulltime1(inputs);
});
var en_open_positions_parttime1 = () => {
	return `Part-time`;
};
var fr_open_positions_parttime1 = () => {
	return `Temps partiel`;
};
var es_open_positions_parttime1 = () => {
	return `Tiempo parcial`;
};
var de_open_positions_parttime1 = () => {
	return `Teilzeit`;
};
var it_open_positions_parttime1 = () => {
	return `Part-time`;
};
var pt_open_positions_parttime1 = () => {
	return `Tempo parcial`;
};
var zh_open_positions_parttime1 = () => {
	return `兼职`;
};
var ja_open_positions_parttime1 = () => {
	return `アルバイト`;
};
var ko_open_positions_parttime1 = () => {
	return `아르바이트`;
};
var ru_open_positions_parttime1 = () => {
	return `Неполный рабочий день`;
};
var open_positions_parttime1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_open_positions_parttime1(inputs);
	if (locale === "fr") return fr_open_positions_parttime1(inputs);
	if (locale === "es") return es_open_positions_parttime1(inputs);
	if (locale === "de") return de_open_positions_parttime1(inputs);
	if (locale === "it") return it_open_positions_parttime1(inputs);
	if (locale === "pt") return pt_open_positions_parttime1(inputs);
	if (locale === "zh") return zh_open_positions_parttime1(inputs);
	if (locale === "ja") return ja_open_positions_parttime1(inputs);
	if (locale === "ko") return ko_open_positions_parttime1(inputs);
	return ru_open_positions_parttime1(inputs);
});
var en_open_positions_engineering = () => {
	return `Engineering`;
};
var fr_open_positions_engineering = () => {
	return `Ingénierie`;
};
var es_open_positions_engineering = () => {
	return `Ingeniería`;
};
var de_open_positions_engineering = () => {
	return `Entwicklung`;
};
var it_open_positions_engineering = () => {
	return `Ingegneria`;
};
var pt_open_positions_engineering = () => {
	return `Engenharia`;
};
var zh_open_positions_engineering = () => {
	return `工程`;
};
var ja_open_positions_engineering = () => {
	return `エンジニアリング`;
};
var ko_open_positions_engineering = () => {
	return `엔지니어링`;
};
var ru_open_positions_engineering = () => {
	return `Разработка`;
};
var open_positions_engineering = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_open_positions_engineering(inputs);
	if (locale === "fr") return fr_open_positions_engineering(inputs);
	if (locale === "es") return es_open_positions_engineering(inputs);
	if (locale === "de") return de_open_positions_engineering(inputs);
	if (locale === "it") return it_open_positions_engineering(inputs);
	if (locale === "pt") return pt_open_positions_engineering(inputs);
	if (locale === "zh") return zh_open_positions_engineering(inputs);
	if (locale === "ja") return ja_open_positions_engineering(inputs);
	if (locale === "ko") return ko_open_positions_engineering(inputs);
	return ru_open_positions_engineering(inputs);
});
var en_open_positions_documentation = () => {
	return `Documentation`;
};
var fr_open_positions_documentation = () => {
	return `Documentation`;
};
var es_open_positions_documentation = () => {
	return `Documentación`;
};
var de_open_positions_documentation = () => {
	return `Dokumentation`;
};
var it_open_positions_documentation = () => {
	return `Documentazione`;
};
var pt_open_positions_documentation = () => {
	return `Documentação`;
};
var zh_open_positions_documentation = () => {
	return `文档`;
};
var ja_open_positions_documentation = () => {
	return `ドキュメンテーション`;
};
var ko_open_positions_documentation = () => {
	return `문서화`;
};
var ru_open_positions_documentation = () => {
	return `Документация`;
};
var open_positions_documentation = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_open_positions_documentation(inputs);
	if (locale === "fr") return fr_open_positions_documentation(inputs);
	if (locale === "es") return es_open_positions_documentation(inputs);
	if (locale === "de") return de_open_positions_documentation(inputs);
	if (locale === "it") return it_open_positions_documentation(inputs);
	if (locale === "pt") return pt_open_positions_documentation(inputs);
	if (locale === "zh") return zh_open_positions_documentation(inputs);
	if (locale === "ja") return ja_open_positions_documentation(inputs);
	if (locale === "ko") return ko_open_positions_documentation(inputs);
	return ru_open_positions_documentation(inputs);
});
var en_open_positions_community = () => {
	return `Community`;
};
var fr_open_positions_community = () => {
	return `Communauté`;
};
var es_open_positions_community = () => {
	return `Comunidad`;
};
var de_open_positions_community = () => {
	return `Community`;
};
var it_open_positions_community = () => {
	return `Comunità`;
};
var pt_open_positions_community = () => {
	return `Comunidade`;
};
var zh_open_positions_community = () => {
	return `社区`;
};
var ja_open_positions_community = () => {
	return `コミュニティ`;
};
var ko_open_positions_community = () => {
	return `커뮤니티`;
};
var ru_open_positions_community = () => {
	return `Сообщество`;
};
var open_positions_community = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_open_positions_community(inputs);
	if (locale === "fr") return fr_open_positions_community(inputs);
	if (locale === "es") return es_open_positions_community(inputs);
	if (locale === "de") return de_open_positions_community(inputs);
	if (locale === "it") return it_open_positions_community(inputs);
	if (locale === "pt") return pt_open_positions_community(inputs);
	if (locale === "zh") return zh_open_positions_community(inputs);
	if (locale === "ja") return ja_open_positions_community(inputs);
	if (locale === "ko") return ko_open_positions_community(inputs);
	return ru_open_positions_community(inputs);
});
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
	return jsxs(Fragment, { children: [jsx("h2", {
		className: "mb-6 text-2xl font-bold text-foreground",
		children: open_positions_openpositions1()
	}), jsx("div", {
		className: "space-y-4",
		children: openings.map((o) => jsxs("div", {
			className: "flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between",
			children: [jsxs("div", { children: [
				jsx("h3", {
					className: "text-base font-semibold text-foreground",
					children: o.title
				}),
				jsx("p", {
					className: "text-sm text-muted-foreground",
					children: o.desc
				}),
				jsxs("div", {
					className: "mt-2 flex gap-2",
					children: [
						jsx("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: o.dept
						}),
						jsx("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: o.location
						}),
						jsx("span", {
							className: "rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground",
							children: o.type
						})
					]
				})
			] }), jsx("button", {
				type: "button",
				className: "shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: open_positions_applynow1()
			})]
		}, o.title))
	})] });
}
setLocale("en", { reload: false });
function Wrapper({ children }) {
	return jsx(Fragment, { children });
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(OpenPositions, {}) });
}
export { Wrapped as default };
