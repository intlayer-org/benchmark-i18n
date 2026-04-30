import { createComponent, insert, template } from "solid-js/web";
import { For } from "solid-js";
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
var en_careers_openpositions_title1 = () => {
	return `Open Positions`;
};
var fr_careers_openpositions_title1 = () => {
	return `Postes ouverts`;
};
var es_careers_openpositions_title1 = () => {
	return `Puestos vacantes`;
};
var de_careers_openpositions_title1 = () => {
	return `Offene Stellen`;
};
var it_careers_openpositions_title1 = () => {
	return `Posizioni aperte`;
};
var pt_careers_openpositions_title1 = () => {
	return `Vagas abertas`;
};
var zh_careers_openpositions_title1 = () => {
	return `开放职位`;
};
var ja_careers_openpositions_title1 = () => {
	return `募集中の職種`;
};
var ko_careers_openpositions_title1 = () => {
	return `Open Positions`;
};
var ru_careers_openpositions_title1 = () => {
	return `Открытые вакансии`;
};
var careers_openpositions_title1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_title1(inputs);
	if (locale === "fr") return fr_careers_openpositions_title1(inputs);
	if (locale === "es") return es_careers_openpositions_title1(inputs);
	if (locale === "de") return de_careers_openpositions_title1(inputs);
	if (locale === "it") return it_careers_openpositions_title1(inputs);
	if (locale === "pt") return pt_careers_openpositions_title1(inputs);
	if (locale === "zh") return zh_careers_openpositions_title1(inputs);
	if (locale === "ja") return ja_careers_openpositions_title1(inputs);
	if (locale === "ko") return ko_careers_openpositions_title1(inputs);
	return ru_careers_openpositions_title1(inputs);
});
var en_careers_openpositions_applynow2 = () => {
	return `Apply Now`;
};
var fr_careers_openpositions_applynow2 = () => {
	return `Postuler`;
};
var es_careers_openpositions_applynow2 = () => {
	return `Postular ahora`;
};
var de_careers_openpositions_applynow2 = () => {
	return `Jetzt bewerben`;
};
var it_careers_openpositions_applynow2 = () => {
	return `Candidati ora`;
};
var pt_careers_openpositions_applynow2 = () => {
	return `Candidatar-se agora`;
};
var zh_careers_openpositions_applynow2 = () => {
	return `立即申请`;
};
var ja_careers_openpositions_applynow2 = () => {
	return `今すぐ応募`;
};
var ko_careers_openpositions_applynow2 = () => {
	return `Apply Now`;
};
var ru_careers_openpositions_applynow2 = () => {
	return `Подать заявку`;
};
var careers_openpositions_applynow2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_applynow2(inputs);
	if (locale === "fr") return fr_careers_openpositions_applynow2(inputs);
	if (locale === "es") return es_careers_openpositions_applynow2(inputs);
	if (locale === "de") return de_careers_openpositions_applynow2(inputs);
	if (locale === "it") return it_careers_openpositions_applynow2(inputs);
	if (locale === "pt") return pt_careers_openpositions_applynow2(inputs);
	if (locale === "zh") return zh_careers_openpositions_applynow2(inputs);
	if (locale === "ja") return ja_careers_openpositions_applynow2(inputs);
	if (locale === "ko") return ko_careers_openpositions_applynow2(inputs);
	return ru_careers_openpositions_applynow2(inputs);
});
var en_careers_openpositions_remote1 = () => {
	return `Remote`;
};
var fr_careers_openpositions_remote1 = () => {
	return `À distance`;
};
var es_careers_openpositions_remote1 = () => {
	return `Remoto`;
};
var de_careers_openpositions_remote1 = () => {
	return `Remote`;
};
var it_careers_openpositions_remote1 = () => {
	return `Remoto`;
};
var pt_careers_openpositions_remote1 = () => {
	return `Remoto`;
};
var zh_careers_openpositions_remote1 = () => {
	return `远程`;
};
var ja_careers_openpositions_remote1 = () => {
	return `リモート`;
};
var ko_careers_openpositions_remote1 = () => {
	return `Remote`;
};
var ru_careers_openpositions_remote1 = () => {
	return `Удаленно`;
};
var careers_openpositions_remote1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_remote1(inputs);
	if (locale === "fr") return fr_careers_openpositions_remote1(inputs);
	if (locale === "es") return es_careers_openpositions_remote1(inputs);
	if (locale === "de") return de_careers_openpositions_remote1(inputs);
	if (locale === "it") return it_careers_openpositions_remote1(inputs);
	if (locale === "pt") return pt_careers_openpositions_remote1(inputs);
	if (locale === "zh") return zh_careers_openpositions_remote1(inputs);
	if (locale === "ja") return ja_careers_openpositions_remote1(inputs);
	if (locale === "ko") return ko_careers_openpositions_remote1(inputs);
	return ru_careers_openpositions_remote1(inputs);
});
var en_careers_openpositions_fulltime2 = () => {
	return `Full-time`;
};
var fr_careers_openpositions_fulltime2 = () => {
	return `Temps plein`;
};
var es_careers_openpositions_fulltime2 = () => {
	return `Tiempo completo`;
};
var de_careers_openpositions_fulltime2 = () => {
	return `Vollzeit`;
};
var it_careers_openpositions_fulltime2 = () => {
	return `Tempo pieno`;
};
var pt_careers_openpositions_fulltime2 = () => {
	return `Tempo integral`;
};
var zh_careers_openpositions_fulltime2 = () => {
	return `全职`;
};
var ja_careers_openpositions_fulltime2 = () => {
	return `フルタイム`;
};
var ko_careers_openpositions_fulltime2 = () => {
	return `Full-time`;
};
var ru_careers_openpositions_fulltime2 = () => {
	return `Полная занятость`;
};
var careers_openpositions_fulltime2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_fulltime2(inputs);
	if (locale === "fr") return fr_careers_openpositions_fulltime2(inputs);
	if (locale === "es") return es_careers_openpositions_fulltime2(inputs);
	if (locale === "de") return de_careers_openpositions_fulltime2(inputs);
	if (locale === "it") return it_careers_openpositions_fulltime2(inputs);
	if (locale === "pt") return pt_careers_openpositions_fulltime2(inputs);
	if (locale === "zh") return zh_careers_openpositions_fulltime2(inputs);
	if (locale === "ja") return ja_careers_openpositions_fulltime2(inputs);
	if (locale === "ko") return ko_careers_openpositions_fulltime2(inputs);
	return ru_careers_openpositions_fulltime2(inputs);
});
var en_careers_openpositions_parttime2 = () => {
	return `Part-time`;
};
var fr_careers_openpositions_parttime2 = () => {
	return `Temps partiel`;
};
var es_careers_openpositions_parttime2 = () => {
	return `Tiempo parcial`;
};
var de_careers_openpositions_parttime2 = () => {
	return `Teilzeit`;
};
var it_careers_openpositions_parttime2 = () => {
	return `Part-time`;
};
var pt_careers_openpositions_parttime2 = () => {
	return `Tempo parcial`;
};
var zh_careers_openpositions_parttime2 = () => {
	return `兼职`;
};
var ja_careers_openpositions_parttime2 = () => {
	return `パートタイム`;
};
var ko_careers_openpositions_parttime2 = () => {
	return `Part-time`;
};
var ru_careers_openpositions_parttime2 = () => {
	return `Частичная занятость`;
};
var careers_openpositions_parttime2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_parttime2(inputs);
	if (locale === "fr") return fr_careers_openpositions_parttime2(inputs);
	if (locale === "es") return es_careers_openpositions_parttime2(inputs);
	if (locale === "de") return de_careers_openpositions_parttime2(inputs);
	if (locale === "it") return it_careers_openpositions_parttime2(inputs);
	if (locale === "pt") return pt_careers_openpositions_parttime2(inputs);
	if (locale === "zh") return zh_careers_openpositions_parttime2(inputs);
	if (locale === "ja") return ja_careers_openpositions_parttime2(inputs);
	if (locale === "ko") return ko_careers_openpositions_parttime2(inputs);
	return ru_careers_openpositions_parttime2(inputs);
});
var en_careers_openpositions_engineering1 = () => {
	return `Engineering`;
};
var fr_careers_openpositions_engineering1 = () => {
	return `Ingénierie`;
};
var es_careers_openpositions_engineering1 = () => {
	return `Ingeniería`;
};
var de_careers_openpositions_engineering1 = () => {
	return `Engineering`;
};
var it_careers_openpositions_engineering1 = () => {
	return `Engineering`;
};
var pt_careers_openpositions_engineering1 = () => {
	return `Engenharia`;
};
var zh_careers_openpositions_engineering1 = () => {
	return `工程`;
};
var ja_careers_openpositions_engineering1 = () => {
	return `エンジニアリング`;
};
var ko_careers_openpositions_engineering1 = () => {
	return `Engineering`;
};
var ru_careers_openpositions_engineering1 = () => {
	return `Разработка`;
};
var careers_openpositions_engineering1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_engineering1(inputs);
	if (locale === "fr") return fr_careers_openpositions_engineering1(inputs);
	if (locale === "es") return es_careers_openpositions_engineering1(inputs);
	if (locale === "de") return de_careers_openpositions_engineering1(inputs);
	if (locale === "it") return it_careers_openpositions_engineering1(inputs);
	if (locale === "pt") return pt_careers_openpositions_engineering1(inputs);
	if (locale === "zh") return zh_careers_openpositions_engineering1(inputs);
	if (locale === "ja") return ja_careers_openpositions_engineering1(inputs);
	if (locale === "ko") return ko_careers_openpositions_engineering1(inputs);
	return ru_careers_openpositions_engineering1(inputs);
});
var en_careers_openpositions_documentation1 = () => {
	return `Documentation`;
};
var fr_careers_openpositions_documentation1 = () => {
	return `Documentation`;
};
var es_careers_openpositions_documentation1 = () => {
	return `Documentación`;
};
var de_careers_openpositions_documentation1 = () => {
	return `Dokumentation`;
};
var it_careers_openpositions_documentation1 = () => {
	return `Documentazione`;
};
var pt_careers_openpositions_documentation1 = () => {
	return `Documentação`;
};
var zh_careers_openpositions_documentation1 = () => {
	return `文档`;
};
var ja_careers_openpositions_documentation1 = () => {
	return `ドキュメンテーション`;
};
var ko_careers_openpositions_documentation1 = () => {
	return `Documentation`;
};
var ru_careers_openpositions_documentation1 = () => {
	return `Документация`;
};
var careers_openpositions_documentation1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_documentation1(inputs);
	if (locale === "fr") return fr_careers_openpositions_documentation1(inputs);
	if (locale === "es") return es_careers_openpositions_documentation1(inputs);
	if (locale === "de") return de_careers_openpositions_documentation1(inputs);
	if (locale === "it") return it_careers_openpositions_documentation1(inputs);
	if (locale === "pt") return pt_careers_openpositions_documentation1(inputs);
	if (locale === "zh") return zh_careers_openpositions_documentation1(inputs);
	if (locale === "ja") return ja_careers_openpositions_documentation1(inputs);
	if (locale === "ko") return ko_careers_openpositions_documentation1(inputs);
	return ru_careers_openpositions_documentation1(inputs);
});
var en_careers_openpositions_community1 = () => {
	return `Community`;
};
var fr_careers_openpositions_community1 = () => {
	return `Communauté`;
};
var es_careers_openpositions_community1 = () => {
	return `Comunidad`;
};
var de_careers_openpositions_community1 = () => {
	return `Community`;
};
var it_careers_openpositions_community1 = () => {
	return `Comunità`;
};
var pt_careers_openpositions_community1 = () => {
	return `Comunidade`;
};
var zh_careers_openpositions_community1 = () => {
	return `社区`;
};
var ja_careers_openpositions_community1 = () => {
	return `コミュニティ`;
};
var ko_careers_openpositions_community1 = () => {
	return `Community`;
};
var ru_careers_openpositions_community1 = () => {
	return `Сообщество`;
};
var careers_openpositions_community1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_community1(inputs);
	if (locale === "fr") return fr_careers_openpositions_community1(inputs);
	if (locale === "es") return es_careers_openpositions_community1(inputs);
	if (locale === "de") return de_careers_openpositions_community1(inputs);
	if (locale === "it") return it_careers_openpositions_community1(inputs);
	if (locale === "pt") return pt_careers_openpositions_community1(inputs);
	if (locale === "zh") return zh_careers_openpositions_community1(inputs);
	if (locale === "ja") return ja_careers_openpositions_community1(inputs);
	if (locale === "ko") return ko_careers_openpositions_community1(inputs);
	return ru_careers_openpositions_community1(inputs);
});
var en_careers_openpositions_sfremote2 = () => {
	return `San Francisco / Remote`;
};
var fr_careers_openpositions_sfremote2 = () => {
	return `San Francisco / télétravail`;
};
var es_careers_openpositions_sfremote2 = () => {
	return `San Francisco / Remoto`;
};
var de_careers_openpositions_sfremote2 = () => {
	return `San Francisco / Remote`;
};
var it_careers_openpositions_sfremote2 = () => {
	return `San Francisco / Remoto`;
};
var pt_careers_openpositions_sfremote2 = () => {
	return `San Francisco / Remoto`;
};
var zh_careers_openpositions_sfremote2 = () => {
	return `旧金山 / 远程`;
};
var ja_careers_openpositions_sfremote2 = () => {
	return `サンフランシスコ / リモート`;
};
var ko_careers_openpositions_sfremote2 = () => {
	return `San Francisco / Remote`;
};
var ru_careers_openpositions_sfremote2 = () => {
	return `Сан-Франциско / Удаленно`;
};
var careers_openpositions_sfremote2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_sfremote2(inputs);
	if (locale === "fr") return fr_careers_openpositions_sfremote2(inputs);
	if (locale === "es") return es_careers_openpositions_sfremote2(inputs);
	if (locale === "de") return de_careers_openpositions_sfremote2(inputs);
	if (locale === "it") return it_careers_openpositions_sfremote2(inputs);
	if (locale === "pt") return pt_careers_openpositions_sfremote2(inputs);
	if (locale === "zh") return zh_careers_openpositions_sfremote2(inputs);
	if (locale === "ja") return ja_careers_openpositions_sfremote2(inputs);
	if (locale === "ko") return ko_careers_openpositions_sfremote2(inputs);
	return ru_careers_openpositions_sfremote2(inputs);
});
var en_careers_openpositions_frontendtitle2 = () => {
	return `Senior Frontend Engineer`;
};
var fr_careers_openpositions_frontendtitle2 = () => {
	return `Ingénieur front-end senior`;
};
var es_careers_openpositions_frontendtitle2 = () => {
	return `Ingeniero Frontend Senior`;
};
var de_careers_openpositions_frontendtitle2 = () => {
	return `Senior Frontend Engineer`;
};
var it_careers_openpositions_frontendtitle2 = () => {
	return `Ingegnere Frontend Senior`;
};
var pt_careers_openpositions_frontendtitle2 = () => {
	return `Engenheiro Frontend Sênior`;
};
var zh_careers_openpositions_frontendtitle2 = () => {
	return `高级前端工程师`;
};
var ja_careers_openpositions_frontendtitle2 = () => {
	return `シニアフロントエンドエンジニア`;
};
var ko_careers_openpositions_frontendtitle2 = () => {
	return `Senior Frontend Engineer`;
};
var ru_careers_openpositions_frontendtitle2 = () => {
	return `Старший фронтенд-инженер`;
};
var careers_openpositions_frontendtitle2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_frontendtitle2(inputs);
	if (locale === "fr") return fr_careers_openpositions_frontendtitle2(inputs);
	if (locale === "es") return es_careers_openpositions_frontendtitle2(inputs);
	if (locale === "de") return de_careers_openpositions_frontendtitle2(inputs);
	if (locale === "it") return it_careers_openpositions_frontendtitle2(inputs);
	if (locale === "pt") return pt_careers_openpositions_frontendtitle2(inputs);
	if (locale === "zh") return zh_careers_openpositions_frontendtitle2(inputs);
	if (locale === "ja") return ja_careers_openpositions_frontendtitle2(inputs);
	if (locale === "ko") return ko_careers_openpositions_frontendtitle2(inputs);
	return ru_careers_openpositions_frontendtitle2(inputs);
});
var en_careers_openpositions_frontenddesc2 = () => {
	return `Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.`;
};
var fr_careers_openpositions_frontenddesc2 = () => {
	return `Construire et maintenir le tableau de bord de benchmark et les outils dev avec React, TypeScript et Vite.`;
};
var es_careers_openpositions_frontenddesc2 = () => {
	return `Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.`;
};
var de_careers_openpositions_frontenddesc2 = () => {
	return `Erstellen und warten Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite.`;
};
var it_careers_openpositions_frontenddesc2 = () => {
	return `Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.`;
};
var pt_careers_openpositions_frontenddesc2 = () => {
	return `Construa e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.`;
};
var zh_careers_openpositions_frontenddesc2 = () => {
	return `使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。`;
};
var ja_careers_openpositions_frontenddesc2 = () => {
	return `React、TypeScript、Viteを使用して、ベンチマークダッシュボードと開発者ツールの構築と保守を行います。`;
};
var ko_careers_openpositions_frontenddesc2 = () => {
	return `Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.`;
};
var ru_careers_openpositions_frontenddesc2 = () => {
	return `Разработка и поддержка нашей панели управления бенчмарками и инструментов разработчика с использованием React, TypeScript и Vite.`;
};
var careers_openpositions_frontenddesc2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_frontenddesc2(inputs);
	if (locale === "fr") return fr_careers_openpositions_frontenddesc2(inputs);
	if (locale === "es") return es_careers_openpositions_frontenddesc2(inputs);
	if (locale === "de") return de_careers_openpositions_frontenddesc2(inputs);
	if (locale === "it") return it_careers_openpositions_frontenddesc2(inputs);
	if (locale === "pt") return pt_careers_openpositions_frontenddesc2(inputs);
	if (locale === "zh") return zh_careers_openpositions_frontenddesc2(inputs);
	if (locale === "ja") return ja_careers_openpositions_frontenddesc2(inputs);
	if (locale === "ko") return ko_careers_openpositions_frontenddesc2(inputs);
	return ru_careers_openpositions_frontenddesc2(inputs);
});
var en_careers_openpositions_backendtitle2 = () => {
	return `Backend Engineer`;
};
var fr_careers_openpositions_backendtitle2 = () => {
	return `Ingénieur back-end`;
};
var es_careers_openpositions_backendtitle2 = () => {
	return `Ingeniero Backend`;
};
var de_careers_openpositions_backendtitle2 = () => {
	return `Backend-Ingenieur`;
};
var it_careers_openpositions_backendtitle2 = () => {
	return `Backend Engineer`;
};
var pt_careers_openpositions_backendtitle2 = () => {
	return `Engenheiro Backend`;
};
var zh_careers_openpositions_backendtitle2 = () => {
	return `后端工程师`;
};
var ja_careers_openpositions_backendtitle2 = () => {
	return `バックエンドエンジニア`;
};
var ko_careers_openpositions_backendtitle2 = () => {
	return `Backend Engineer`;
};
var ru_careers_openpositions_backendtitle2 = () => {
	return `Бэкенд-инженер`;
};
var careers_openpositions_backendtitle2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_backendtitle2(inputs);
	if (locale === "fr") return fr_careers_openpositions_backendtitle2(inputs);
	if (locale === "es") return es_careers_openpositions_backendtitle2(inputs);
	if (locale === "de") return de_careers_openpositions_backendtitle2(inputs);
	if (locale === "it") return it_careers_openpositions_backendtitle2(inputs);
	if (locale === "pt") return pt_careers_openpositions_backendtitle2(inputs);
	if (locale === "zh") return zh_careers_openpositions_backendtitle2(inputs);
	if (locale === "ja") return ja_careers_openpositions_backendtitle2(inputs);
	if (locale === "ko") return ko_careers_openpositions_backendtitle2(inputs);
	return ru_careers_openpositions_backendtitle2(inputs);
});
var en_careers_openpositions_backenddesc2 = () => {
	return `Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.`;
};
var fr_careers_openpositions_backenddesc2 = () => {
	return `Concevoir et faire évoluer l'infrastructure cloud qui exécute des milliers de benchmarks automatisés.`;
};
var es_careers_openpositions_backenddesc2 = () => {
	return `Diseñar y escalar nuestra infraestructura de benchmarking en la nube que maneja miles de ejecuciones automatizadas diariamente.`;
};
var de_careers_openpositions_backenddesc2 = () => {
	return `Entwerfen und skalieren Sie unsere Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.`;
};
var it_careers_openpositions_backenddesc2 = () => {
	return `Progetta e scala la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.`;
};
var pt_careers_openpositions_backenddesc2 = () => {
	return `Projete e dimensione nossa infraestrutura de benchmarking na nuvem que lida com milhares de execuções automatizadas diariamente.`;
};
var zh_careers_openpositions_backenddesc2 = () => {
	return `设计和扩展我们的云基准测试基础设施，每天处理数千次自动化运行。`;
};
var ja_careers_openpositions_backenddesc2 = () => {
	return `毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャの設計とスケーリングを行います。`;
};
var ko_careers_openpositions_backenddesc2 = () => {
	return `Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.`;
};
var ru_careers_openpositions_backenddesc2 = () => {
	return `Проектирование и масштабирование нашей облачной инфраструктуры бенчмаркинга, обрабатывающей тысячи автоматических запусков ежедневно.`;
};
var careers_openpositions_backenddesc2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_backenddesc2(inputs);
	if (locale === "fr") return fr_careers_openpositions_backenddesc2(inputs);
	if (locale === "es") return es_careers_openpositions_backenddesc2(inputs);
	if (locale === "de") return de_careers_openpositions_backenddesc2(inputs);
	if (locale === "it") return it_careers_openpositions_backenddesc2(inputs);
	if (locale === "pt") return pt_careers_openpositions_backenddesc2(inputs);
	if (locale === "zh") return zh_careers_openpositions_backenddesc2(inputs);
	if (locale === "ja") return ja_careers_openpositions_backenddesc2(inputs);
	if (locale === "ko") return ko_careers_openpositions_backenddesc2(inputs);
	return ru_careers_openpositions_backenddesc2(inputs);
});
var en_careers_openpositions_writertitle2 = () => {
	return `Technical Writer`;
};
var fr_careers_openpositions_writertitle2 = () => {
	return `Rédacteur·rice technique`;
};
var es_careers_openpositions_writertitle2 = () => {
	return `Redactor técnico`;
};
var de_careers_openpositions_writertitle2 = () => {
	return `Technischer Redakteur`;
};
var it_careers_openpositions_writertitle2 = () => {
	return `Scrittore tecnico`;
};
var pt_careers_openpositions_writertitle2 = () => {
	return `Redator técnico`;
};
var zh_careers_openpositions_writertitle2 = () => {
	return `技术作家`;
};
var ja_careers_openpositions_writertitle2 = () => {
	return `テクニカルライター`;
};
var ko_careers_openpositions_writertitle2 = () => {
	return `Technical Writer`;
};
var ru_careers_openpositions_writertitle2 = () => {
	return `Технический писатель`;
};
var careers_openpositions_writertitle2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_writertitle2(inputs);
	if (locale === "fr") return fr_careers_openpositions_writertitle2(inputs);
	if (locale === "es") return es_careers_openpositions_writertitle2(inputs);
	if (locale === "de") return de_careers_openpositions_writertitle2(inputs);
	if (locale === "it") return it_careers_openpositions_writertitle2(inputs);
	if (locale === "pt") return pt_careers_openpositions_writertitle2(inputs);
	if (locale === "zh") return zh_careers_openpositions_writertitle2(inputs);
	if (locale === "ja") return ja_careers_openpositions_writertitle2(inputs);
	if (locale === "ko") return ko_careers_openpositions_writertitle2(inputs);
	return ru_careers_openpositions_writertitle2(inputs);
});
var en_careers_openpositions_writerdesc2 = () => {
	return `Create comprehensive guides, API references, and tutorials for our benchmarking platform.`;
};
var fr_careers_openpositions_writerdesc2 = () => {
	return `Guides, références d'API et tutoriels pour la plateforme de benchmark.`;
};
var es_careers_openpositions_writerdesc2 = () => {
	return `Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.`;
};
var de_careers_openpositions_writerdesc2 = () => {
	return `Erstellen Sie umfassende Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.`;
};
var it_careers_openpositions_writerdesc2 = () => {
	return `Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.`;
};
var pt_careers_openpositions_writerdesc2 = () => {
	return `Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.`;
};
var zh_careers_openpositions_writerdesc2 = () => {
	return `为我们的基准测试平台编写全面的指南、API 参考和教程。`;
};
var ja_careers_openpositions_writerdesc2 = () => {
	return `ベンチマークプラットフォームのための包括的なガイド、APIリファレンス、およびチュートリアルを作成します。`;
};
var ko_careers_openpositions_writerdesc2 = () => {
	return `Create comprehensive guides, API references, and tutorials for our benchmarking platform.`;
};
var ru_careers_openpositions_writerdesc2 = () => {
	return `Создание подробных руководств, API-справок и туториалов для нашей платформы бенчмаркинга.`;
};
var careers_openpositions_writerdesc2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_writerdesc2(inputs);
	if (locale === "fr") return fr_careers_openpositions_writerdesc2(inputs);
	if (locale === "es") return es_careers_openpositions_writerdesc2(inputs);
	if (locale === "de") return de_careers_openpositions_writerdesc2(inputs);
	if (locale === "it") return it_careers_openpositions_writerdesc2(inputs);
	if (locale === "pt") return pt_careers_openpositions_writerdesc2(inputs);
	if (locale === "zh") return zh_careers_openpositions_writerdesc2(inputs);
	if (locale === "ja") return ja_careers_openpositions_writerdesc2(inputs);
	if (locale === "ko") return ko_careers_openpositions_writerdesc2(inputs);
	return ru_careers_openpositions_writerdesc2(inputs);
});
var en_careers_openpositions_devreltitle2 = () => {
	return `DevRel Engineer`;
};
var fr_careers_openpositions_devreltitle2 = () => {
	return `Ingénieur DevRel`;
};
var es_careers_openpositions_devreltitle2 = () => {
	return `Ingeniero de DevRel`;
};
var de_careers_openpositions_devreltitle2 = () => {
	return `DevRel-Ingenieur`;
};
var it_careers_openpositions_devreltitle2 = () => {
	return `Ingegnere DevRel`;
};
var pt_careers_openpositions_devreltitle2 = () => {
	return `Engenheiro de DevRel`;
};
var zh_careers_openpositions_devreltitle2 = () => {
	return `DevRel 工程师`;
};
var ja_careers_openpositions_devreltitle2 = () => {
	return `DevRelエンジニア`;
};
var ko_careers_openpositions_devreltitle2 = () => {
	return `DevRel Engineer`;
};
var ru_careers_openpositions_devreltitle2 = () => {
	return `DevRel-инженер`;
};
var careers_openpositions_devreltitle2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_devreltitle2(inputs);
	if (locale === "fr") return fr_careers_openpositions_devreltitle2(inputs);
	if (locale === "es") return es_careers_openpositions_devreltitle2(inputs);
	if (locale === "de") return de_careers_openpositions_devreltitle2(inputs);
	if (locale === "it") return it_careers_openpositions_devreltitle2(inputs);
	if (locale === "pt") return pt_careers_openpositions_devreltitle2(inputs);
	if (locale === "zh") return zh_careers_openpositions_devreltitle2(inputs);
	if (locale === "ja") return ja_careers_openpositions_devreltitle2(inputs);
	if (locale === "ko") return ko_careers_openpositions_devreltitle2(inputs);
	return ru_careers_openpositions_devreltitle2(inputs);
});
var en_careers_openpositions_devreldesc2 = () => {
	return `Engage with the i18n community through talks, workshops, blog posts, and open source contributions.`;
};
var fr_careers_openpositions_devreldesc2 = () => {
	return `Animer la communauté i18n : conférences, ateliers, articles et contributions OSS.`;
};
var es_careers_openpositions_devreldesc2 = () => {
	return `Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto.`;
};
var de_careers_openpositions_devreldesc2 = () => {
	return `Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.`;
};
var it_careers_openpositions_devreldesc2 = () => {
	return `Interagisci con la comunità i18n tramite talk, workshop, post sul blog e contributi open source.`;
};
var pt_careers_openpositions_devreldesc2 = () => {
	return `Envolva-se com a comunidade i18n através de palestras, workshops, postagens em blogs e contribuições de código aberto.`;
};
var zh_careers_openpositions_devreldesc2 = () => {
	return `通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。`;
};
var ja_careers_openpositions_devreldesc2 = () => {
	return `トーク、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18nコミュニティと関わります。`;
};
var ko_careers_openpositions_devreldesc2 = () => {
	return `Engage with the i18n community through talks, workshops, blog posts, and open source contributions.`;
};
var ru_careers_openpositions_devreldesc2 = () => {
	return `Взаимодействие с сообществом i18n через доклады, воркшопы, посты в блоге и вклад в open source.`;
};
var careers_openpositions_devreldesc2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_devreldesc2(inputs);
	if (locale === "fr") return fr_careers_openpositions_devreldesc2(inputs);
	if (locale === "es") return es_careers_openpositions_devreldesc2(inputs);
	if (locale === "de") return de_careers_openpositions_devreldesc2(inputs);
	if (locale === "it") return it_careers_openpositions_devreldesc2(inputs);
	if (locale === "pt") return pt_careers_openpositions_devreldesc2(inputs);
	if (locale === "zh") return zh_careers_openpositions_devreldesc2(inputs);
	if (locale === "ja") return ja_careers_openpositions_devreldesc2(inputs);
	if (locale === "ko") return ko_careers_openpositions_devreldesc2(inputs);
	return ru_careers_openpositions_devreldesc2(inputs);
});
var en_careers_openpositions_qatitle2 = () => {
	return `QA Engineer`;
};
var fr_careers_openpositions_qatitle2 = () => {
	return `Ingénieur QA`;
};
var es_careers_openpositions_qatitle2 = () => {
	return `Ingeniero de QA`;
};
var de_careers_openpositions_qatitle2 = () => {
	return `QA-Ingenieur`;
};
var it_careers_openpositions_qatitle2 = () => {
	return `Ingegnere QA`;
};
var pt_careers_openpositions_qatitle2 = () => {
	return `Engenheiro de QA`;
};
var zh_careers_openpositions_qatitle2 = () => {
	return `QA 工程师`;
};
var ja_careers_openpositions_qatitle2 = () => {
	return `QAエンジニア`;
};
var ko_careers_openpositions_qatitle2 = () => {
	return `QA Engineer`;
};
var ru_careers_openpositions_qatitle2 = () => {
	return `QA-инженер`;
};
var careers_openpositions_qatitle2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_qatitle2(inputs);
	if (locale === "fr") return fr_careers_openpositions_qatitle2(inputs);
	if (locale === "es") return es_careers_openpositions_qatitle2(inputs);
	if (locale === "de") return de_careers_openpositions_qatitle2(inputs);
	if (locale === "it") return it_careers_openpositions_qatitle2(inputs);
	if (locale === "pt") return pt_careers_openpositions_qatitle2(inputs);
	if (locale === "zh") return zh_careers_openpositions_qatitle2(inputs);
	if (locale === "ja") return ja_careers_openpositions_qatitle2(inputs);
	if (locale === "ko") return ko_careers_openpositions_qatitle2(inputs);
	return ru_careers_openpositions_qatitle2(inputs);
});
var en_careers_openpositions_qadesc2 = () => {
	return `Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.`;
};
var fr_careers_openpositions_qadesc2 = () => {
	return `Garantir la fiabilité des résultats par des tests et validations rigoureux.`;
};
var es_careers_openpositions_qadesc2 = () => {
	return `Asegurar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.`;
};
var de_careers_openpositions_qadesc2 = () => {
	return `Gewährleisten Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierung.`;
};
var it_careers_openpositions_qadesc2 = () => {
	return `Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.`;
};
var pt_careers_openpositions_qadesc2 = () => {
	return `Garanta a precisão e a confiabilidade dos resultados do benchmark através de testes e validações rigorosos.`;
};
var zh_careers_openpositions_qadesc2 = () => {
	return `通过严格的测试和验证确保基准测试结果 agrarian 准确性和可靠性。`;
};
var ja_careers_openpositions_qadesc2 = () => {
	return `厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。`;
};
var ko_careers_openpositions_qadesc2 = () => {
	return `Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.`;
};
var ru_careers_openpositions_qadesc2 = () => {
	return `Обеспечение точности и надежности результатов бенчмарков путем строгого тестирования и валидации.`;
};
var careers_openpositions_qadesc2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_careers_openpositions_qadesc2(inputs);
	if (locale === "fr") return fr_careers_openpositions_qadesc2(inputs);
	if (locale === "es") return es_careers_openpositions_qadesc2(inputs);
	if (locale === "de") return de_careers_openpositions_qadesc2(inputs);
	if (locale === "it") return it_careers_openpositions_qadesc2(inputs);
	if (locale === "pt") return pt_careers_openpositions_qadesc2(inputs);
	if (locale === "zh") return zh_careers_openpositions_qadesc2(inputs);
	if (locale === "ja") return ja_careers_openpositions_qadesc2(inputs);
	if (locale === "ko") return ko_careers_openpositions_qadesc2(inputs);
	return ru_careers_openpositions_qadesc2(inputs);
});
var _tmpl$ = template(`<h2 class="mb-6 text-2xl font-bold text-foreground">`), _tmpl$2 = template(`<div class=space-y-4>`), _tmpl$3 = template(`<div class="flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between"><div><h3 class="text-base font-semibold text-foreground"></h3><p class="text-sm text-muted-foreground"></p><div class="mt-2 flex gap-2"><span class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"></span><span class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"></span><span class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"></span></div></div><button type=button class="shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">`);
function OpenPositions() {
	const openings = () => [
		{
			title: careers_openpositions_frontendtitle2(),
			location: careers_openpositions_remote1(),
			type: careers_openpositions_fulltime2(),
			dept: careers_openpositions_engineering1(),
			desc: careers_openpositions_frontenddesc2()
		},
		{
			title: careers_openpositions_backendtitle2(),
			location: careers_openpositions_remote1(),
			type: careers_openpositions_fulltime2(),
			dept: careers_openpositions_engineering1(),
			desc: careers_openpositions_backenddesc2()
		},
		{
			title: careers_openpositions_writertitle2(),
			location: careers_openpositions_remote1(),
			type: careers_openpositions_parttime2(),
			dept: careers_openpositions_documentation1(),
			desc: careers_openpositions_writerdesc2()
		},
		{
			title: careers_openpositions_devreltitle2(),
			location: careers_openpositions_sfremote2(),
			type: careers_openpositions_fulltime2(),
			dept: careers_openpositions_community1(),
			desc: careers_openpositions_devreldesc2()
		},
		{
			title: careers_openpositions_qatitle2(),
			location: careers_openpositions_remote1(),
			type: careers_openpositions_fulltime2(),
			dept: careers_openpositions_engineering1(),
			desc: careers_openpositions_qadesc2()
		}
	];
	return [(() => {
		var _el$ = _tmpl$();
		insert(_el$, () => careers_openpositions_title1());
		return _el$;
	})(), (() => {
		var _el$2 = _tmpl$2();
		insert(_el$2, createComponent(For, {
			get each() {
				return openings();
			},
			children: (o) => (() => {
				var _el$3 = _tmpl$3(), _el$4 = _el$3.firstChild, _el$5 = _el$4.firstChild, _el$6 = _el$5.nextSibling, _el$8 = _el$6.nextSibling.firstChild, _el$9 = _el$8.nextSibling, _el$0 = _el$9.nextSibling, _el$1 = _el$4.nextSibling;
				insert(_el$5, () => o.title);
				insert(_el$6, () => o.desc);
				insert(_el$8, () => o.dept);
				insert(_el$9, () => o.location);
				insert(_el$0, () => o.type);
				insert(_el$1, () => careers_openpositions_applynow2());
				return _el$3;
			})()
		}));
		return _el$2;
	})()];
}
export { OpenPositions as default };
