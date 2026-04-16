import { Profiler, useEffect } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
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
var en_team_grid_sarahchen1 = () => {
	return `Sarah Chen`;
};
var fr_team_grid_sarahchen1 = () => {
	return `Sarah Chen`;
};
var es_team_grid_sarahchen1 = () => {
	return `Sarah Chen`;
};
var de_team_grid_sarahchen1 = () => {
	return `Sarah Chen`;
};
var it_team_grid_sarahchen1 = () => {
	return `Sarah Chen`;
};
var pt_team_grid_sarahchen1 = () => {
	return `Sarah Chen`;
};
var zh_team_grid_sarahchen1 = () => {
	return `Sarah Chen`;
};
var ja_team_grid_sarahchen1 = () => {
	return `Sarah Chen`;
};
var ko_team_grid_sarahchen1 = () => {
	return `Sarah Chen`;
};
var ru_team_grid_sarahchen1 = () => {
	return `Сара Чен`;
};
var team_grid_sarahchen1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_sarahchen1(inputs);
	if (locale === "fr") return fr_team_grid_sarahchen1(inputs);
	if (locale === "es") return es_team_grid_sarahchen1(inputs);
	if (locale === "de") return de_team_grid_sarahchen1(inputs);
	if (locale === "it") return it_team_grid_sarahchen1(inputs);
	if (locale === "pt") return pt_team_grid_sarahchen1(inputs);
	if (locale === "zh") return zh_team_grid_sarahchen1(inputs);
	if (locale === "ja") return ja_team_grid_sarahchen1(inputs);
	if (locale === "ko") return ko_team_grid_sarahchen1(inputs);
	return ru_team_grid_sarahchen1(inputs);
});
var en_team_grid_founderleadengineer2 = () => {
	return `Founder & Lead Engineer`;
};
var fr_team_grid_founderleadengineer2 = () => {
	return `Fondatrice & Ingénieure principale`;
};
var es_team_grid_founderleadengineer2 = () => {
	return `Fundadora e ingeniera principal`;
};
var de_team_grid_founderleadengineer2 = () => {
	return `Gründerin & Leitende Ingenieurin`;
};
var it_team_grid_founderleadengineer2 = () => {
	return `Fondatrice e Responsabile tecnico`;
};
var pt_team_grid_founderleadengineer2 = () => {
	return `Fundadora e Engenheira Líder`;
};
var zh_team_grid_founderleadengineer2 = () => {
	return `创始人兼首席工程师`;
};
var ja_team_grid_founderleadengineer2 = () => {
	return `創設者 & リードエンジニア`;
};
var ko_team_grid_founderleadengineer2 = () => {
	return `설립자 겸 수석 엔지니어`;
};
var ru_team_grid_founderleadengineer2 = () => {
	return `Основатель и ведущий инженер`;
};
var team_grid_founderleadengineer2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_founderleadengineer2(inputs);
	if (locale === "fr") return fr_team_grid_founderleadengineer2(inputs);
	if (locale === "es") return es_team_grid_founderleadengineer2(inputs);
	if (locale === "de") return de_team_grid_founderleadengineer2(inputs);
	if (locale === "it") return it_team_grid_founderleadengineer2(inputs);
	if (locale === "pt") return pt_team_grid_founderleadengineer2(inputs);
	if (locale === "zh") return zh_team_grid_founderleadengineer2(inputs);
	if (locale === "ja") return ja_team_grid_founderleadengineer2(inputs);
	if (locale === "ko") return ko_team_grid_founderleadengineer2(inputs);
	return ru_team_grid_founderleadengineer2(inputs);
});
var en_team_grid_formergoogleengineerwith103 = () => {
	return `Former Google engineer with 10 years of experience building internationalization systems at scale.`;
};
var fr_team_grid_formergoogleengineerwith103 = () => {
	return `Ancienne ingénieure Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.`;
};
var es_team_grid_formergoogleengineerwith103 = () => {
	return `Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.`;
};
var de_team_grid_formergoogleengineerwith103 = () => {
	return `Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.`;
};
var it_team_grid_formergoogleengineerwith103 = () => {
	return `Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.`;
};
var pt_team_grid_formergoogleengineerwith103 = () => {
	return `Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalizzazione em escala.`;
};
var zh_team_grid_formergoogleengineerwith103 = () => {
	return `前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。`;
};
var ja_team_grid_formergoogleengineerwith103 = () => {
	return `大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。`;
};
var ko_team_grid_formergoogleengineerwith103 = () => {
	return `규모 있는 국제화 시스템 구축 분야에서 10년의 경력을 쌓은 전직 Google 엔지니어입니다.`;
};
var ru_team_grid_formergoogleengineerwith103 = () => {
	return `Бывший инженер Google с 10-летним опытом создания систем интернационализации в масштабе.`;
};
var team_grid_formergoogleengineerwith103 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_formergoogleengineerwith103(inputs);
	if (locale === "fr") return fr_team_grid_formergoogleengineerwith103(inputs);
	if (locale === "es") return es_team_grid_formergoogleengineerwith103(inputs);
	if (locale === "de") return de_team_grid_formergoogleengineerwith103(inputs);
	if (locale === "it") return it_team_grid_formergoogleengineerwith103(inputs);
	if (locale === "pt") return pt_team_grid_formergoogleengineerwith103(inputs);
	if (locale === "zh") return zh_team_grid_formergoogleengineerwith103(inputs);
	if (locale === "ja") return ja_team_grid_formergoogleengineerwith103(inputs);
	if (locale === "ko") return ko_team_grid_formergoogleengineerwith103(inputs);
	return ru_team_grid_formergoogleengineerwith103(inputs);
});
var en_team_grid_marcusweber1 = () => {
	return `Marcus Weber`;
};
var fr_team_grid_marcusweber1 = () => {
	return `Marcus Weber`;
};
var es_team_grid_marcusweber1 = () => {
	return `Marcus Weber`;
};
var de_team_grid_marcusweber1 = () => {
	return `Marcus Weber`;
};
var it_team_grid_marcusweber1 = () => {
	return `Marcus Weber`;
};
var pt_team_grid_marcusweber1 = () => {
	return `Marcus Weber`;
};
var zh_team_grid_marcusweber1 = () => {
	return `Marcus Weber`;
};
var ja_team_grid_marcusweber1 = () => {
	return `Marcus Weber`;
};
var ko_team_grid_marcusweber1 = () => {
	return `Marcus Weber`;
};
var ru_team_grid_marcusweber1 = () => {
	return `Маркус Вебер`;
};
var team_grid_marcusweber1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_marcusweber1(inputs);
	if (locale === "fr") return fr_team_grid_marcusweber1(inputs);
	if (locale === "es") return es_team_grid_marcusweber1(inputs);
	if (locale === "de") return de_team_grid_marcusweber1(inputs);
	if (locale === "it") return it_team_grid_marcusweber1(inputs);
	if (locale === "pt") return pt_team_grid_marcusweber1(inputs);
	if (locale === "zh") return zh_team_grid_marcusweber1(inputs);
	if (locale === "ja") return ja_team_grid_marcusweber1(inputs);
	if (locale === "ko") return ko_team_grid_marcusweber1(inputs);
	return ru_team_grid_marcusweber1(inputs);
});
var en_team_grid_performanceengineer1 = () => {
	return `Performance Engineer`;
};
var fr_team_grid_performanceengineer1 = () => {
	return `Ingénieur performance`;
};
var es_team_grid_performanceengineer1 = () => {
	return `Ingeniero de rendimiento`;
};
var de_team_grid_performanceengineer1 = () => {
	return `Performance-Ingenieur`;
};
var it_team_grid_performanceengineer1 = () => {
	return `Ingegnere delle prestazioni`;
};
var pt_team_grid_performanceengineer1 = () => {
	return `Engenheiro de Performance`;
};
var zh_team_grid_performanceengineer1 = () => {
	return `性能工程师`;
};
var ja_team_grid_performanceengineer1 = () => {
	return `パフォーマンスエンジニア`;
};
var ko_team_grid_performanceengineer1 = () => {
	return `성능 엔지니어`;
};
var ru_team_grid_performanceengineer1 = () => {
	return `Инженер по производительности`;
};
var team_grid_performanceengineer1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_performanceengineer1(inputs);
	if (locale === "fr") return fr_team_grid_performanceengineer1(inputs);
	if (locale === "es") return es_team_grid_performanceengineer1(inputs);
	if (locale === "de") return de_team_grid_performanceengineer1(inputs);
	if (locale === "it") return it_team_grid_performanceengineer1(inputs);
	if (locale === "pt") return pt_team_grid_performanceengineer1(inputs);
	if (locale === "zh") return zh_team_grid_performanceengineer1(inputs);
	if (locale === "ja") return ja_team_grid_performanceengineer1(inputs);
	if (locale === "ko") return ko_team_grid_performanceengineer1(inputs);
	return ru_team_grid_performanceengineer1(inputs);
});
var en_team_grid_specializesinjavascriptperformanceoptimization4 = () => {
	return `Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.`;
};
var fr_team_grid_specializesinjavascriptperformanceoptimization4 = () => {
	return `Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Précédemment chez Vercel.`;
};
var es_team_grid_specializesinjavascriptperformanceoptimization4 = () => {
	return `Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.`;
};
var de_team_grid_specializesinjavascriptperformanceoptimization4 = () => {
	return `Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.`;
};
var it_team_grid_specializesinjavascriptperformanceoptimization4 = () => {
	return `Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.`;
};
var pt_team_grid_specializesinjavascriptperformanceoptimization4 = () => {
	return `Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.`;
};
var zh_team_grid_specializesinjavascriptperformanceoptimization4 = () => {
	return `专注于 JavaScript 性能优化和基准测试方法论。此前曾就职于 Vercel。`;
};
var ja_team_grid_specializesinjavascriptperformanceoptimization4 = () => {
	return `JavaScriptのパフォーマンス最適化とベンチマーク方法論を専門としています。以前はVercelに在籍。`;
};
var ko_team_grid_specializesinjavascriptperformanceoptimization4 = () => {
	return `JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전에는 Vercel에서 근무했습니다.`;
};
var ru_team_grid_specializesinjavascriptperformanceoptimization4 = () => {
	return `Специализируется на оптимизации производительности JavaScript и методологии тестирования. Ранее работал в Vercel.`;
};
var team_grid_specializesinjavascriptperformanceoptimization4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_specializesinjavascriptperformanceoptimization4(inputs);
	if (locale === "fr") return fr_team_grid_specializesinjavascriptperformanceoptimization4(inputs);
	if (locale === "es") return es_team_grid_specializesinjavascriptperformanceoptimization4(inputs);
	if (locale === "de") return de_team_grid_specializesinjavascriptperformanceoptimization4(inputs);
	if (locale === "it") return it_team_grid_specializesinjavascriptperformanceoptimization4(inputs);
	if (locale === "pt") return pt_team_grid_specializesinjavascriptperformanceoptimization4(inputs);
	if (locale === "zh") return zh_team_grid_specializesinjavascriptperformanceoptimization4(inputs);
	if (locale === "ja") return ja_team_grid_specializesinjavascriptperformanceoptimization4(inputs);
	if (locale === "ko") return ko_team_grid_specializesinjavascriptperformanceoptimization4(inputs);
	return ru_team_grid_specializesinjavascriptperformanceoptimization4(inputs);
});
var en_team_grid_aishapatel1 = () => {
	return `Aisha Patel`;
};
var fr_team_grid_aishapatel1 = () => {
	return `Aisha Patel`;
};
var es_team_grid_aishapatel1 = () => {
	return `Aisha Patel`;
};
var de_team_grid_aishapatel1 = () => {
	return `Aisha Patel`;
};
var it_team_grid_aishapatel1 = () => {
	return `Aisha Patel`;
};
var pt_team_grid_aishapatel1 = () => {
	return `Aisha Patel`;
};
var zh_team_grid_aishapatel1 = () => {
	return `Aisha Patel`;
};
var ja_team_grid_aishapatel1 = () => {
	return `Aisha Patel`;
};
var ko_team_grid_aishapatel1 = () => {
	return `Aisha Patel`;
};
var ru_team_grid_aishapatel1 = () => {
	return `Айша Патель`;
};
var team_grid_aishapatel1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_aishapatel1(inputs);
	if (locale === "fr") return fr_team_grid_aishapatel1(inputs);
	if (locale === "es") return es_team_grid_aishapatel1(inputs);
	if (locale === "de") return de_team_grid_aishapatel1(inputs);
	if (locale === "it") return it_team_grid_aishapatel1(inputs);
	if (locale === "pt") return pt_team_grid_aishapatel1(inputs);
	if (locale === "zh") return zh_team_grid_aishapatel1(inputs);
	if (locale === "ja") return ja_team_grid_aishapatel1(inputs);
	if (locale === "ko") return ko_team_grid_aishapatel1(inputs);
	return ru_team_grid_aishapatel1(inputs);
});
var en_team_grid_developeradvocate1 = () => {
	return `Developer Advocate`;
};
var fr_team_grid_developeradvocate1 = () => {
	return `Developer Advocate`;
};
var es_team_grid_developeradvocate1 = () => {
	return `Developer Advocate`;
};
var de_team_grid_developeradvocate1 = () => {
	return `Developer Advocate`;
};
var it_team_grid_developeradvocate1 = () => {
	return `Developer Advocate`;
};
var pt_team_grid_developeradvocate1 = () => {
	return `Developer Advocate`;
};
var zh_team_grid_developeradvocate1 = () => {
	return `开发者倡导者`;
};
var ja_team_grid_developeradvocate1 = () => {
	return `デベロッパーアドボケイト`;
};
var ko_team_grid_developeradvocate1 = () => {
	return `개발자 에반젤리스트`;
};
var ru_team_grid_developeradvocate1 = () => {
	return `Адвокат разработчиков`;
};
var team_grid_developeradvocate1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_developeradvocate1(inputs);
	if (locale === "fr") return fr_team_grid_developeradvocate1(inputs);
	if (locale === "es") return es_team_grid_developeradvocate1(inputs);
	if (locale === "de") return de_team_grid_developeradvocate1(inputs);
	if (locale === "it") return it_team_grid_developeradvocate1(inputs);
	if (locale === "pt") return pt_team_grid_developeradvocate1(inputs);
	if (locale === "zh") return zh_team_grid_developeradvocate1(inputs);
	if (locale === "ja") return ja_team_grid_developeradvocate1(inputs);
	if (locale === "ko") return ko_team_grid_developeradvocate1(inputs);
	return ru_team_grid_developeradvocate1(inputs);
});
var en_team_grid_passionateaboutdeveloperexperienceand4 = () => {
	return `Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.`;
};
var fr_team_grid_passionateaboutdeveloperexperienceand4 = () => {
	return `Passionnée par l'expérience développeur et l'éducation. Conférencière à React Conf, JSConf et i18nNext.`;
};
var es_team_grid_passionateaboutdeveloperexperienceand4 = () => {
	return `Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.`;
};
var de_team_grid_passionateaboutdeveloperexperienceand4 = () => {
	return `Begeistert von Entwicklererfahrung und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.`;
};
var it_team_grid_passionateaboutdeveloperexperienceand4 = () => {
	return `Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.`;
};
var pt_team_grid_passionateaboutdeveloperexperienceand4 = () => {
	return `Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.`;
};
var zh_team_grid_passionateaboutdeveloperexperienceand4 = () => {
	return `热衷于开发者体验和教育。React Conf, JSConf 和 i18nNext 的演讲者。`;
};
var ja_team_grid_passionateaboutdeveloperexperienceand4 = () => {
	return `開発者エクスペリエンスと教育に情熱を注いでいます。React Conf、JSConf、およびi18nNextのスピーカー。`;
};
var ko_team_grid_passionateaboutdeveloperexperienceand4 = () => {
	return `개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext의 발표자입니다.`;
};
var ru_team_grid_passionateaboutdeveloperexperienceand4 = () => {
	return `Увлечена опытом разработчиков и обучением. Спикер на React Conf, JSConf и i18nNext.`;
};
var team_grid_passionateaboutdeveloperexperienceand4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_passionateaboutdeveloperexperienceand4(inputs);
	if (locale === "fr") return fr_team_grid_passionateaboutdeveloperexperienceand4(inputs);
	if (locale === "es") return es_team_grid_passionateaboutdeveloperexperienceand4(inputs);
	if (locale === "de") return de_team_grid_passionateaboutdeveloperexperienceand4(inputs);
	if (locale === "it") return it_team_grid_passionateaboutdeveloperexperienceand4(inputs);
	if (locale === "pt") return pt_team_grid_passionateaboutdeveloperexperienceand4(inputs);
	if (locale === "zh") return zh_team_grid_passionateaboutdeveloperexperienceand4(inputs);
	if (locale === "ja") return ja_team_grid_passionateaboutdeveloperexperienceand4(inputs);
	if (locale === "ko") return ko_team_grid_passionateaboutdeveloperexperienceand4(inputs);
	return ru_team_grid_passionateaboutdeveloperexperienceand4(inputs);
});
var en_team_grid_tomasrodriguez1 = () => {
	return `Tomás Rodríguez`;
};
var fr_team_grid_tomasrodriguez1 = () => {
	return `Tomás Rodríguez`;
};
var es_team_grid_tomasrodriguez1 = () => {
	return `Tomás Rodríguez`;
};
var de_team_grid_tomasrodriguez1 = () => {
	return `Tomás Rodríguez`;
};
var it_team_grid_tomasrodriguez1 = () => {
	return `Tomás Rodríguez`;
};
var pt_team_grid_tomasrodriguez1 = () => {
	return `Tomás Rodríguez`;
};
var zh_team_grid_tomasrodriguez1 = () => {
	return `Tomás Rodríguez`;
};
var ja_team_grid_tomasrodriguez1 = () => {
	return `Tomás Rodríguez`;
};
var ko_team_grid_tomasrodriguez1 = () => {
	return `Tomás Rodríguez`;
};
var ru_team_grid_tomasrodriguez1 = () => {
	return `Томас Родригес`;
};
var team_grid_tomasrodriguez1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_tomasrodriguez1(inputs);
	if (locale === "fr") return fr_team_grid_tomasrodriguez1(inputs);
	if (locale === "es") return es_team_grid_tomasrodriguez1(inputs);
	if (locale === "de") return de_team_grid_tomasrodriguez1(inputs);
	if (locale === "it") return it_team_grid_tomasrodriguez1(inputs);
	if (locale === "pt") return pt_team_grid_tomasrodriguez1(inputs);
	if (locale === "zh") return zh_team_grid_tomasrodriguez1(inputs);
	if (locale === "ja") return ja_team_grid_tomasrodriguez1(inputs);
	if (locale === "ko") return ko_team_grid_tomasrodriguez1(inputs);
	return ru_team_grid_tomasrodriguez1(inputs);
});
var en_team_grid_fullstackdeveloper2 = () => {
	return `Full-Stack Developer`;
};
var fr_team_grid_fullstackdeveloper2 = () => {
	return `Développeur Full-Stack`;
};
var es_team_grid_fullstackdeveloper2 = () => {
	return `Desarrollador Full-Stack`;
};
var de_team_grid_fullstackdeveloper2 = () => {
	return `Full-Stack-Entwickler`;
};
var it_team_grid_fullstackdeveloper2 = () => {
	return `Sviluppatore Full-Stack`;
};
var pt_team_grid_fullstackdeveloper2 = () => {
	return `Desenvolvedor Full-Stack`;
};
var zh_team_grid_fullstackdeveloper2 = () => {
	return `全栈开发人员`;
};
var ja_team_grid_fullstackdeveloper2 = () => {
	return `フルスタックデベロッパー`;
};
var ko_team_grid_fullstackdeveloper2 = () => {
	return `풀스택 개발자`;
};
var ru_team_grid_fullstackdeveloper2 = () => {
	return `Фулстек-разработчик`;
};
var team_grid_fullstackdeveloper2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_fullstackdeveloper2(inputs);
	if (locale === "fr") return fr_team_grid_fullstackdeveloper2(inputs);
	if (locale === "es") return es_team_grid_fullstackdeveloper2(inputs);
	if (locale === "de") return de_team_grid_fullstackdeveloper2(inputs);
	if (locale === "it") return it_team_grid_fullstackdeveloper2(inputs);
	if (locale === "pt") return pt_team_grid_fullstackdeveloper2(inputs);
	if (locale === "zh") return zh_team_grid_fullstackdeveloper2(inputs);
	if (locale === "ja") return ja_team_grid_fullstackdeveloper2(inputs);
	if (locale === "ko") return ko_team_grid_fullstackdeveloper2(inputs);
	return ru_team_grid_fullstackdeveloper2(inputs);
});
var en_team_grid_maintainsthebenchmarkinginfrastructureand4 = () => {
	return `Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.`;
};
var fr_team_grid_maintainsthebenchmarkinginfrastructureand4 = () => {
	return `Entretient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.`;
};
var es_team_grid_maintainsthebenchmarkinginfrastructureand4 = () => {
	return `Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.`;
};
var de_team_grid_maintainsthebenchmarkinginfrastructureand4 = () => {
	return `Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Mitwirkender bei Lingui.`;
};
var it_team_grid_maintainsthebenchmarkinginfrastructureand4 = () => {
	return `Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.`;
};
var pt_team_grid_maintainsthebenchmarkinginfrastructureand4 = () => {
	return `Mantém a infraestrutura de benchmarking e o pipeline CI/CD. Contribuidor open source para Lingui.`;
};
var zh_team_grid_maintainsthebenchmarkinginfrastructureand4 = () => {
	return `负责维护基准测试基础设施和 CI/CD 流水线。Lingui 开源贡献者。`;
};
var ja_team_grid_maintainsthebenchmarkinginfrastructureand4 = () => {
	return `ベンチマークインフラストラクチャとCI/CDパイプラインを維持。Linguiのオープンソースコントリビューター。`;
};
var ko_team_grid_maintainsthebenchmarkinginfrastructureand4 = () => {
	return `벤치마킹 인프라 및 CI/CD 파이프라인을 유지 관리합니다. Lingui 오픈 소스 기여자입니다.`;
};
var ru_team_grid_maintainsthebenchmarkinginfrastructureand4 = () => {
	return `Поддерживает инфраструктуру тестирования и CI/CD пайплайн. Участник разработки Lingui с открытым исходным кодом.`;
};
var team_grid_maintainsthebenchmarkinginfrastructureand4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_maintainsthebenchmarkinginfrastructureand4(inputs);
	if (locale === "fr") return fr_team_grid_maintainsthebenchmarkinginfrastructureand4(inputs);
	if (locale === "es") return es_team_grid_maintainsthebenchmarkinginfrastructureand4(inputs);
	if (locale === "de") return de_team_grid_maintainsthebenchmarkinginfrastructureand4(inputs);
	if (locale === "it") return it_team_grid_maintainsthebenchmarkinginfrastructureand4(inputs);
	if (locale === "pt") return pt_team_grid_maintainsthebenchmarkinginfrastructureand4(inputs);
	if (locale === "zh") return zh_team_grid_maintainsthebenchmarkinginfrastructureand4(inputs);
	if (locale === "ja") return ja_team_grid_maintainsthebenchmarkinginfrastructureand4(inputs);
	if (locale === "ko") return ko_team_grid_maintainsthebenchmarkinginfrastructureand4(inputs);
	return ru_team_grid_maintainsthebenchmarkinginfrastructureand4(inputs);
});
var en_team_grid_yukitanaka1 = () => {
	return `Yuki Tanaka`;
};
var fr_team_grid_yukitanaka1 = () => {
	return `Yuki Tanaka`;
};
var es_team_grid_yukitanaka1 = () => {
	return `Yuki Tanaka`;
};
var de_team_grid_yukitanaka1 = () => {
	return `Yuki Tanaka`;
};
var it_team_grid_yukitanaka1 = () => {
	return `Yuki Tanaka`;
};
var pt_team_grid_yukitanaka1 = () => {
	return `Yuki Tanaka`;
};
var zh_team_grid_yukitanaka1 = () => {
	return `Yuki Tanaka`;
};
var ja_team_grid_yukitanaka1 = () => {
	return `Yuki Tanaka`;
};
var ko_team_grid_yukitanaka1 = () => {
	return `Yuki Tanaka`;
};
var ru_team_grid_yukitanaka1 = () => {
	return `Юки Танака`;
};
var team_grid_yukitanaka1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_yukitanaka1(inputs);
	if (locale === "fr") return fr_team_grid_yukitanaka1(inputs);
	if (locale === "es") return es_team_grid_yukitanaka1(inputs);
	if (locale === "de") return de_team_grid_yukitanaka1(inputs);
	if (locale === "it") return it_team_grid_yukitanaka1(inputs);
	if (locale === "pt") return pt_team_grid_yukitanaka1(inputs);
	if (locale === "zh") return zh_team_grid_yukitanaka1(inputs);
	if (locale === "ja") return ja_team_grid_yukitanaka1(inputs);
	if (locale === "ko") return ko_team_grid_yukitanaka1(inputs);
	return ru_team_grid_yukitanaka1(inputs);
});
var en_team_grid_dataanalyst1 = () => {
	return `Data Analyst`;
};
var fr_team_grid_dataanalyst1 = () => {
	return `Analyste de données`;
};
var es_team_grid_dataanalyst1 = () => {
	return `Analista de datos`;
};
var de_team_grid_dataanalyst1 = () => {
	return `Datenanalyst`;
};
var it_team_grid_dataanalyst1 = () => {
	return `Analista dati`;
};
var pt_team_grid_dataanalyst1 = () => {
	return `Analista de Dados`;
};
var zh_team_grid_dataanalyst1 = () => {
	return `数据分析师`;
};
var ja_team_grid_dataanalyst1 = () => {
	return `データアナリスト`;
};
var ko_team_grid_dataanalyst1 = () => {
	return `데이터 분석가`;
};
var ru_team_grid_dataanalyst1 = () => {
	return `Аналитик данных`;
};
var team_grid_dataanalyst1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_dataanalyst1(inputs);
	if (locale === "fr") return fr_team_grid_dataanalyst1(inputs);
	if (locale === "es") return es_team_grid_dataanalyst1(inputs);
	if (locale === "de") return de_team_grid_dataanalyst1(inputs);
	if (locale === "it") return it_team_grid_dataanalyst1(inputs);
	if (locale === "pt") return pt_team_grid_dataanalyst1(inputs);
	if (locale === "zh") return zh_team_grid_dataanalyst1(inputs);
	if (locale === "ja") return ja_team_grid_dataanalyst1(inputs);
	if (locale === "ko") return ko_team_grid_dataanalyst1(inputs);
	return ru_team_grid_dataanalyst1(inputs);
});
var en_team_grid_ensuresstatisticalrigorinall4 = () => {
	return `Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.`;
};
var fr_team_grid_ensuresstatisticalrigorinall4 = () => {
	return `Assure la rigueur statistique de tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.`;
};
var es_team_grid_ensuresstatisticalrigorinall4 = () => {
	return `Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.`;
};
var de_team_grid_ensuresstatisticalrigorinall4 = () => {
	return `Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in Angewandter Statistik am MIT.`;
};
var it_team_grid_ensuresstatisticalrigorinall4 = () => {
	return `Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.`;
};
var pt_team_grid_ensuresstatisticalrigorinall4 = () => {
	return `Garante o rigor estatístico em todos os resultados de benchmark. Doutorado em estatística aplicada pelo MIT.`;
};
var zh_team_grid_ensuresstatisticalrigorinall4 = () => {
	return `确保所有基准测试结果的统计严谨性。麻省理工学院 (MIT) 应用统计学博士。`;
};
var ja_team_grid_ensuresstatisticalrigorinall4 = () => {
	return `すべてのベンチマーク結果における統計的な厳密さを保証します。MITで応用統計学の博士号を取得。`;
};
var ko_team_grid_ensuresstatisticalrigorinall4 = () => {
	return `모든 벤치마크 결과의 통계적 엄격함을 보장합니다. MIT 응용 통계학 박사.`;
};
var ru_team_grid_ensuresstatisticalrigorinall4 = () => {
	return `Обеспечивает статистическую строгость всех результатов тестирования. Доктор прикладной статистики из MIT.`;
};
var team_grid_ensuresstatisticalrigorinall4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_ensuresstatisticalrigorinall4(inputs);
	if (locale === "fr") return fr_team_grid_ensuresstatisticalrigorinall4(inputs);
	if (locale === "es") return es_team_grid_ensuresstatisticalrigorinall4(inputs);
	if (locale === "de") return de_team_grid_ensuresstatisticalrigorinall4(inputs);
	if (locale === "it") return it_team_grid_ensuresstatisticalrigorinall4(inputs);
	if (locale === "pt") return pt_team_grid_ensuresstatisticalrigorinall4(inputs);
	if (locale === "zh") return zh_team_grid_ensuresstatisticalrigorinall4(inputs);
	if (locale === "ja") return ja_team_grid_ensuresstatisticalrigorinall4(inputs);
	if (locale === "ko") return ko_team_grid_ensuresstatisticalrigorinall4(inputs);
	return ru_team_grid_ensuresstatisticalrigorinall4(inputs);
});
var en_team_grid_elenakowalski1 = () => {
	return `Elena Kowalski`;
};
var fr_team_grid_elenakowalski1 = () => {
	return `Elena Kowalski`;
};
var es_team_grid_elenakowalski1 = () => {
	return `Elena Kowalski`;
};
var de_team_grid_elenakowalski1 = () => {
	return `Elena Kowalski`;
};
var it_team_grid_elenakowalski1 = () => {
	return `Elena Kowalski`;
};
var pt_team_grid_elenakowalski1 = () => {
	return `Elena Kowalski`;
};
var zh_team_grid_elenakowalski1 = () => {
	return `Elena Kowalski`;
};
var ja_team_grid_elenakowalski1 = () => {
	return `Elena Kowalski`;
};
var ko_team_grid_elenakowalski1 = () => {
	return `Elena Kowalski`;
};
var ru_team_grid_elenakowalski1 = () => {
	return `Елена Ковальски`;
};
var team_grid_elenakowalski1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_elenakowalski1(inputs);
	if (locale === "fr") return fr_team_grid_elenakowalski1(inputs);
	if (locale === "es") return es_team_grid_elenakowalski1(inputs);
	if (locale === "de") return de_team_grid_elenakowalski1(inputs);
	if (locale === "it") return it_team_grid_elenakowalski1(inputs);
	if (locale === "pt") return pt_team_grid_elenakowalski1(inputs);
	if (locale === "zh") return zh_team_grid_elenakowalski1(inputs);
	if (locale === "ja") return ja_team_grid_elenakowalski1(inputs);
	if (locale === "ko") return ko_team_grid_elenakowalski1(inputs);
	return ru_team_grid_elenakowalski1(inputs);
});
var en_team_grid_communitymanager1 = () => {
	return `Community Manager`;
};
var fr_team_grid_communitymanager1 = () => {
	return `Responsable de communauté`;
};
var es_team_grid_communitymanager1 = () => {
	return `Responsable de la comunidad`;
};
var de_team_grid_communitymanager1 = () => {
	return `Community-Managerin`;
};
var it_team_grid_communitymanager1 = () => {
	return `Responsabile della comunità`;
};
var pt_team_grid_communitymanager1 = () => {
	return `Gerente de Comunidade`;
};
var zh_team_grid_communitymanager1 = () => {
	return `社区经理`;
};
var ja_team_grid_communitymanager1 = () => {
	return `コミュニティマネージャー`;
};
var ko_team_grid_communitymanager1 = () => {
	return `커뮤니티 매니저`;
};
var ru_team_grid_communitymanager1 = () => {
	return `Комьюнити-менеджер`;
};
var team_grid_communitymanager1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_communitymanager1(inputs);
	if (locale === "fr") return fr_team_grid_communitymanager1(inputs);
	if (locale === "es") return es_team_grid_communitymanager1(inputs);
	if (locale === "de") return de_team_grid_communitymanager1(inputs);
	if (locale === "it") return it_team_grid_communitymanager1(inputs);
	if (locale === "pt") return pt_team_grid_communitymanager1(inputs);
	if (locale === "zh") return zh_team_grid_communitymanager1(inputs);
	if (locale === "ja") return ja_team_grid_communitymanager1(inputs);
	if (locale === "ko") return ko_team_grid_communitymanager1(inputs);
	return ru_team_grid_communitymanager1(inputs);
});
var en_team_grid_managescommunitycontributionspartnershipsand4 = () => {
	return `Manages community contributions, partnerships, and events. Background in open source governance.`;
};
var fr_team_grid_managescommunitycontributionspartnershipsand4 = () => {
	return `Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source.`;
};
var es_team_grid_managescommunitycontributionspartnershipsand4 = () => {
	return `Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.`;
};
var de_team_grid_managescommunitycontributionspartnershipsand4 = () => {
	return `Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.`;
};
var it_team_grid_managescommunitycontributionspartnershipsand4 = () => {
	return `Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.`;
};
var pt_team_grid_managescommunitycontributionspartnershipsand4 = () => {
	return `Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.`;
};
var zh_team_grid_managescommunitycontributionspartnershipsand4 = () => {
	return `负责管理社区贡献、合作伙伴关系和活动。具有开源治理背景。`;
};
var ja_team_grid_managescommunitycontributionspartnershipsand4 = () => {
	return `コミュニティの貢献、パートナーシップ、イベントを管理。オープンソースガバナンスの経歴を持つ。`;
};
var ko_team_grid_managescommunitycontributionspartnershipsand4 = () => {
	return `커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 분야의 배경을 가지고 있습니다.`;
};
var ru_team_grid_managescommunitycontributionspartnershipsand4 = () => {
	return `Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении проектами с открытым исходным кодом.`;
};
var team_grid_managescommunitycontributionspartnershipsand4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_managescommunitycontributionspartnershipsand4(inputs);
	if (locale === "fr") return fr_team_grid_managescommunitycontributionspartnershipsand4(inputs);
	if (locale === "es") return es_team_grid_managescommunitycontributionspartnershipsand4(inputs);
	if (locale === "de") return de_team_grid_managescommunitycontributionspartnershipsand4(inputs);
	if (locale === "it") return it_team_grid_managescommunitycontributionspartnershipsand4(inputs);
	if (locale === "pt") return pt_team_grid_managescommunitycontributionspartnershipsand4(inputs);
	if (locale === "zh") return zh_team_grid_managescommunitycontributionspartnershipsand4(inputs);
	if (locale === "ja") return ja_team_grid_managescommunitycontributionspartnershipsand4(inputs);
	if (locale === "ko") return ko_team_grid_managescommunitycontributionspartnershipsand4(inputs);
	return ru_team_grid_managescommunitycontributionspartnershipsand4(inputs);
});
function TeamGrid() {
	return jsx("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: [
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
		].map((m) => jsxs("div", {
			className: "rounded-lg border border-border bg-card p-6 text-center",
			children: [
				jsx("div", {
					className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground",
					children: m.name.split(" ").map((n) => n[0]).join("")
				}),
				jsx("h3", {
					className: "text-base font-semibold text-foreground",
					children: m.name
				}),
				jsx("p", {
					className: "mb-2 text-xs font-medium text-primary",
					children: m.role
				}),
				jsx("p", {
					className: "text-sm text-muted-foreground",
					children: m.bio
				})
			]
		}, m.name))
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
function onRenderCallback(id, phase, actualDuration) {
	if (typeof window === "undefined") return;
	if (phase === "nested-update") return;
	try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {};
		window.__RENDER_METRICS__[id] = window.__RENDER_METRICS__[id] || [];
		window.__RENDER_METRICS__[id].push(actualDuration);
	} catch (err) {
		console.warn("onRenderCallback failed:", err);
	}
}
function AppProviders({ children }) {
	const locale = useParams().locale ?? "en";
	useEffect(() => {
		setLocale(locale);
		document.documentElement.lang = locale;
	}, [locale]);
	useEffect(() => {
		recordHydrationDuration();
	}, []);
	return jsx(Profiler, {
		id: "AppRoot",
		onRender: onRenderCallback,
		children
	});
}
function Wrapper({ children }) {
	return jsx(AppProviders, { children });
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(TeamGrid, {}) });
}
export { Wrapped as default };
