import "svelte/internal/disclose-version";
import * as $ from "svelte/internal/client";
import { derived, writable } from "svelte/store";
var URLPattern = {};
var locales$1 = [
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
	for (const locale of locales$1) if (locale.toLowerCase() === lowerValue) return locale;
}
function assertIsLocale(input) {
	const locale = toLocale(input);
	if (locale) return locale;
	throw new Error(`Invalid locale: ${input}. Expected one of: ${locales$1.join(", ")}`);
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
var en_team_grid_member1name1 = () => {
	return `Sarah Chen`;
};
var fr_team_grid_member1name1 = () => {
	return `Sarah Chen`;
};
var es_team_grid_member1name1 = () => {
	return `Sarah Chen`;
};
var de_team_grid_member1name1 = () => {
	return `Sarah Chen`;
};
var it_team_grid_member1name1 = () => {
	return `Sarah Chen`;
};
var pt_team_grid_member1name1 = () => {
	return `Sarah Chen`;
};
var zh_team_grid_member1name1 = () => {
	return `Sarah Chen`;
};
var ja_team_grid_member1name1 = () => {
	return `Sarah Chen`;
};
var ko_team_grid_member1name1 = () => {
	return `Sarah Chen`;
};
var ru_team_grid_member1name1 = () => {
	return `Сара Чен`;
};
var team_grid_member1name1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member1name1(inputs);
	if (locale === "fr") return fr_team_grid_member1name1(inputs);
	if (locale === "es") return es_team_grid_member1name1(inputs);
	if (locale === "de") return de_team_grid_member1name1(inputs);
	if (locale === "it") return it_team_grid_member1name1(inputs);
	if (locale === "pt") return pt_team_grid_member1name1(inputs);
	if (locale === "zh") return zh_team_grid_member1name1(inputs);
	if (locale === "ja") return ja_team_grid_member1name1(inputs);
	if (locale === "ko") return ko_team_grid_member1name1(inputs);
	return ru_team_grid_member1name1(inputs);
});
var en_team_grid_member1role1 = () => {
	return `Founder & Lead Engineer`;
};
var fr_team_grid_member1role1 = () => {
	return `Fondatrice & lead ingénieur`;
};
var es_team_grid_member1role1 = () => {
	return `Fundadora e ingeniera principal`;
};
var de_team_grid_member1role1 = () => {
	return `Gründerin & Leitende Ingenieurin`;
};
var it_team_grid_member1role1 = () => {
	return `Fondatrice e Responsabile tecnico`;
};
var pt_team_grid_member1role1 = () => {
	return `Fundadora e Engenheira Líder`;
};
var zh_team_grid_member1role1 = () => {
	return `创始人兼首席工程师`;
};
var ja_team_grid_member1role1 = () => {
	return `創設者 & リードエンジニア`;
};
var ko_team_grid_member1role1 = () => {
	return `Founder & Lead Engineer`;
};
var ru_team_grid_member1role1 = () => {
	return `Основатель и ведущий инженер`;
};
var team_grid_member1role1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member1role1(inputs);
	if (locale === "fr") return fr_team_grid_member1role1(inputs);
	if (locale === "es") return es_team_grid_member1role1(inputs);
	if (locale === "de") return de_team_grid_member1role1(inputs);
	if (locale === "it") return it_team_grid_member1role1(inputs);
	if (locale === "pt") return pt_team_grid_member1role1(inputs);
	if (locale === "zh") return zh_team_grid_member1role1(inputs);
	if (locale === "ja") return ja_team_grid_member1role1(inputs);
	if (locale === "ko") return ko_team_grid_member1role1(inputs);
	return ru_team_grid_member1role1(inputs);
});
var en_team_grid_member1bio1 = () => {
	return `Former Google engineer with 10 years of experience building internationalization systems at scale.`;
};
var fr_team_grid_member1bio1 = () => {
	return `Ex-ingénieure Google, 10 ans sur l'internationalisation à grande échelle.`;
};
var es_team_grid_member1bio1 = () => {
	return `Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.`;
};
var de_team_grid_member1bio1 = () => {
	return `Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.`;
};
var it_team_grid_member1bio1 = () => {
	return `Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.`;
};
var pt_team_grid_member1bio1 = () => {
	return `Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.`;
};
var zh_team_grid_member1bio1 = () => {
	return `前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。`;
};
var ja_team_grid_member1bio1 = () => {
	return `大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。`;
};
var ko_team_grid_member1bio1 = () => {
	return `Former Google engineer with 10 years of experience building internationalization systems at scale.`;
};
var ru_team_grid_member1bio1 = () => {
	return `Бывший инженер Google с 10-летним опытом создания систем интернационализации в больших масштабах.`;
};
var team_grid_member1bio1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member1bio1(inputs);
	if (locale === "fr") return fr_team_grid_member1bio1(inputs);
	if (locale === "es") return es_team_grid_member1bio1(inputs);
	if (locale === "de") return de_team_grid_member1bio1(inputs);
	if (locale === "it") return it_team_grid_member1bio1(inputs);
	if (locale === "pt") return pt_team_grid_member1bio1(inputs);
	if (locale === "zh") return zh_team_grid_member1bio1(inputs);
	if (locale === "ja") return ja_team_grid_member1bio1(inputs);
	if (locale === "ko") return ko_team_grid_member1bio1(inputs);
	return ru_team_grid_member1bio1(inputs);
});
var en_team_grid_member2name1 = () => {
	return `Marcus Weber`;
};
var fr_team_grid_member2name1 = () => {
	return `Marcus Weber`;
};
var es_team_grid_member2name1 = () => {
	return `Marcus Weber`;
};
var de_team_grid_member2name1 = () => {
	return `Marcus Weber`;
};
var it_team_grid_member2name1 = () => {
	return `Marcus Weber`;
};
var pt_team_grid_member2name1 = () => {
	return `Marcus Weber`;
};
var zh_team_grid_member2name1 = () => {
	return `Marcus Weber`;
};
var ja_team_grid_member2name1 = () => {
	return `Marcus Weber`;
};
var ko_team_grid_member2name1 = () => {
	return `Marcus Weber`;
};
var ru_team_grid_member2name1 = () => {
	return `Маркус Вебер`;
};
var team_grid_member2name1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member2name1(inputs);
	if (locale === "fr") return fr_team_grid_member2name1(inputs);
	if (locale === "es") return es_team_grid_member2name1(inputs);
	if (locale === "de") return de_team_grid_member2name1(inputs);
	if (locale === "it") return it_team_grid_member2name1(inputs);
	if (locale === "pt") return pt_team_grid_member2name1(inputs);
	if (locale === "zh") return zh_team_grid_member2name1(inputs);
	if (locale === "ja") return ja_team_grid_member2name1(inputs);
	if (locale === "ko") return ko_team_grid_member2name1(inputs);
	return ru_team_grid_member2name1(inputs);
});
var en_team_grid_member2role1 = () => {
	return `Performance Engineer`;
};
var fr_team_grid_member2role1 = () => {
	return `Ingénieur performance`;
};
var es_team_grid_member2role1 = () => {
	return `Ingeniero de rendimiento`;
};
var de_team_grid_member2role1 = () => {
	return `Performance-Ingenieur`;
};
var it_team_grid_member2role1 = () => {
	return `Ingegnere delle prestazioni`;
};
var pt_team_grid_member2role1 = () => {
	return `Engenheiro de performance`;
};
var zh_team_grid_member2role1 = () => {
	return `性能工程师`;
};
var ja_team_grid_member2role1 = () => {
	return `パフォーマンスエンジニア`;
};
var ko_team_grid_member2role1 = () => {
	return `Performance Engineer`;
};
var ru_team_grid_member2role1 = () => {
	return `Инженер по производительности`;
};
var team_grid_member2role1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member2role1(inputs);
	if (locale === "fr") return fr_team_grid_member2role1(inputs);
	if (locale === "es") return es_team_grid_member2role1(inputs);
	if (locale === "de") return de_team_grid_member2role1(inputs);
	if (locale === "it") return it_team_grid_member2role1(inputs);
	if (locale === "pt") return pt_team_grid_member2role1(inputs);
	if (locale === "zh") return zh_team_grid_member2role1(inputs);
	if (locale === "ja") return ja_team_grid_member2role1(inputs);
	if (locale === "ko") return ko_team_grid_member2role1(inputs);
	return ru_team_grid_member2role1(inputs);
});
var en_team_grid_member2bio1 = () => {
	return `Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.`;
};
var fr_team_grid_member2bio1 = () => {
	return `Optimisation JavaScript et méthodologie de benchmark — précédemment chez Vercel.`;
};
var es_team_grid_member2bio1 = () => {
	return `Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.`;
};
var de_team_grid_member2bio1 = () => {
	return `Spezialisiert auf JavaScript-Performance-Optimierung und Benchmarking-Methodik. Zuvor bei Vercel.`;
};
var it_team_grid_member2bio1 = () => {
	return `Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.`;
};
var pt_team_grid_member2bio1 = () => {
	return `Especialista em otimização de performance JavaScript e metodologia de benchmarking. Anteriormente na Vercel.`;
};
var zh_team_grid_member2bio1 = () => {
	return `专注于 JavaScript 性能优化和基准测试方法论。此前就职于 Vercel。`;
};
var ja_team_grid_member2bio1 = () => {
	return `JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。前職はVercel。`;
};
var ko_team_grid_member2bio1 = () => {
	return `Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.`;
};
var ru_team_grid_member2bio1 = () => {
	return `Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.`;
};
var team_grid_member2bio1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member2bio1(inputs);
	if (locale === "fr") return fr_team_grid_member2bio1(inputs);
	if (locale === "es") return es_team_grid_member2bio1(inputs);
	if (locale === "de") return de_team_grid_member2bio1(inputs);
	if (locale === "it") return it_team_grid_member2bio1(inputs);
	if (locale === "pt") return pt_team_grid_member2bio1(inputs);
	if (locale === "zh") return zh_team_grid_member2bio1(inputs);
	if (locale === "ja") return ja_team_grid_member2bio1(inputs);
	if (locale === "ko") return ko_team_grid_member2bio1(inputs);
	return ru_team_grid_member2bio1(inputs);
});
var en_team_grid_member3name1 = () => {
	return `Aisha Patel`;
};
var fr_team_grid_member3name1 = () => {
	return `Aisha Patel`;
};
var es_team_grid_member3name1 = () => {
	return `Aisha Patel`;
};
var de_team_grid_member3name1 = () => {
	return `Aisha Patel`;
};
var it_team_grid_member3name1 = () => {
	return `Aisha Patel`;
};
var pt_team_grid_member3name1 = () => {
	return `Aisha Patel`;
};
var zh_team_grid_member3name1 = () => {
	return `Aisha Patel`;
};
var ja_team_grid_member3name1 = () => {
	return `Aisha Patel`;
};
var ko_team_grid_member3name1 = () => {
	return `Aisha Patel`;
};
var ru_team_grid_member3name1 = () => {
	return `Айша Патель`;
};
var team_grid_member3name1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member3name1(inputs);
	if (locale === "fr") return fr_team_grid_member3name1(inputs);
	if (locale === "es") return es_team_grid_member3name1(inputs);
	if (locale === "de") return de_team_grid_member3name1(inputs);
	if (locale === "it") return it_team_grid_member3name1(inputs);
	if (locale === "pt") return pt_team_grid_member3name1(inputs);
	if (locale === "zh") return zh_team_grid_member3name1(inputs);
	if (locale === "ja") return ja_team_grid_member3name1(inputs);
	if (locale === "ko") return ko_team_grid_member3name1(inputs);
	return ru_team_grid_member3name1(inputs);
});
var en_team_grid_member3role1 = () => {
	return `Developer Advocate`;
};
var fr_team_grid_member3role1 = () => {
	return `Developer advocate`;
};
var es_team_grid_member3role1 = () => {
	return `Developer Advocate`;
};
var de_team_grid_member3role1 = () => {
	return `Developer Advocate`;
};
var it_team_grid_member3role1 = () => {
	return `Developer Advocate`;
};
var pt_team_grid_member3role1 = () => {
	return `Developer Advocate`;
};
var zh_team_grid_member3role1 = () => {
	return `开发者倡导者`;
};
var ja_team_grid_member3role1 = () => {
	return `Developer Advocate`;
};
var ko_team_grid_member3role1 = () => {
	return `Developer Advocate`;
};
var ru_team_grid_member3role1 = () => {
	return `Developer Advocate`;
};
var team_grid_member3role1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member3role1(inputs);
	if (locale === "fr") return fr_team_grid_member3role1(inputs);
	if (locale === "es") return es_team_grid_member3role1(inputs);
	if (locale === "de") return de_team_grid_member3role1(inputs);
	if (locale === "it") return it_team_grid_member3role1(inputs);
	if (locale === "pt") return pt_team_grid_member3role1(inputs);
	if (locale === "zh") return zh_team_grid_member3role1(inputs);
	if (locale === "ja") return ja_team_grid_member3role1(inputs);
	if (locale === "ko") return ko_team_grid_member3role1(inputs);
	return ru_team_grid_member3role1(inputs);
});
var en_team_grid_member3bio1 = () => {
	return `Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.`;
};
var fr_team_grid_member3bio1 = () => {
	return `Expérience développeur et pédagogie — conférencière React Conf, JSConf, i18nNext.`;
};
var es_team_grid_member3bio1 = () => {
	return `Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.`;
};
var de_team_grid_member3bio1 = () => {
	return `Begeistert von Developer Experience und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.`;
};
var it_team_grid_member3bio1 = () => {
	return `Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.`;
};
var pt_team_grid_member3bio1 = () => {
	return `Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.`;
};
var zh_team_grid_member3bio1 = () => {
	return `对开发者体验和教育充满热情。曾在 React Conf, JSConf 和 i18nNext 发表演讲。`;
};
var ja_team_grid_member3bio1 = () => {
	return `開発者体験と教育に情熱を注いています。React Conf、JSConf、i18nNextのスピーカー。`;
};
var ko_team_grid_member3bio1 = () => {
	return `Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.`;
};
var ru_team_grid_member3bio1 = () => {
	return `Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext.`;
};
var team_grid_member3bio1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member3bio1(inputs);
	if (locale === "fr") return fr_team_grid_member3bio1(inputs);
	if (locale === "es") return es_team_grid_member3bio1(inputs);
	if (locale === "de") return de_team_grid_member3bio1(inputs);
	if (locale === "it") return it_team_grid_member3bio1(inputs);
	if (locale === "pt") return pt_team_grid_member3bio1(inputs);
	if (locale === "zh") return zh_team_grid_member3bio1(inputs);
	if (locale === "ja") return ja_team_grid_member3bio1(inputs);
	if (locale === "ko") return ko_team_grid_member3bio1(inputs);
	return ru_team_grid_member3bio1(inputs);
});
var en_team_grid_member4name1 = () => {
	return `Tomás Rodríguez`;
};
var fr_team_grid_member4name1 = () => {
	return `Tomás Rodríguez`;
};
var es_team_grid_member4name1 = () => {
	return `Tomás Rodríguez`;
};
var de_team_grid_member4name1 = () => {
	return `Tomás Rodríguez`;
};
var it_team_grid_member4name1 = () => {
	return `Tomás Rodríguez`;
};
var pt_team_grid_member4name1 = () => {
	return `Tomás Rodríguez`;
};
var zh_team_grid_member4name1 = () => {
	return `Tomás Rodríguez`;
};
var ja_team_grid_member4name1 = () => {
	return `Tomás Rodríguez`;
};
var ko_team_grid_member4name1 = () => {
	return `Tomás Rodríguez`;
};
var ru_team_grid_member4name1 = () => {
	return `Томас Родригес`;
};
var team_grid_member4name1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member4name1(inputs);
	if (locale === "fr") return fr_team_grid_member4name1(inputs);
	if (locale === "es") return es_team_grid_member4name1(inputs);
	if (locale === "de") return de_team_grid_member4name1(inputs);
	if (locale === "it") return it_team_grid_member4name1(inputs);
	if (locale === "pt") return pt_team_grid_member4name1(inputs);
	if (locale === "zh") return zh_team_grid_member4name1(inputs);
	if (locale === "ja") return ja_team_grid_member4name1(inputs);
	if (locale === "ko") return ko_team_grid_member4name1(inputs);
	return ru_team_grid_member4name1(inputs);
});
var en_team_grid_member4role1 = () => {
	return `Full-Stack Developer`;
};
var fr_team_grid_member4role1 = () => {
	return `Développeur full-stack`;
};
var es_team_grid_member4role1 = () => {
	return `Desarrollador Full-Stack`;
};
var de_team_grid_member4role1 = () => {
	return `Full-Stack-Entwickler`;
};
var it_team_grid_member4role1 = () => {
	return `Sviluppatore Full-Stack`;
};
var pt_team_grid_member4role1 = () => {
	return `Desenvolvedor Full-Stack`;
};
var zh_team_grid_member4role1 = () => {
	return `全栈开发人员`;
};
var ja_team_grid_member4role1 = () => {
	return `フルスタックデベロッパー`;
};
var ko_team_grid_member4role1 = () => {
	return `Full-Stack Developer`;
};
var ru_team_grid_member4role1 = () => {
	return `Full-Stack разработчик`;
};
var team_grid_member4role1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member4role1(inputs);
	if (locale === "fr") return fr_team_grid_member4role1(inputs);
	if (locale === "es") return es_team_grid_member4role1(inputs);
	if (locale === "de") return de_team_grid_member4role1(inputs);
	if (locale === "it") return it_team_grid_member4role1(inputs);
	if (locale === "pt") return pt_team_grid_member4role1(inputs);
	if (locale === "zh") return zh_team_grid_member4role1(inputs);
	if (locale === "ja") return ja_team_grid_member4role1(inputs);
	if (locale === "ko") return ko_team_grid_member4role1(inputs);
	return ru_team_grid_member4role1(inputs);
});
var en_team_grid_member4bio1 = () => {
	return `Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.`;
};
var fr_team_grid_member4bio1 = () => {
	return `Infrastructure de benchmark et CI/CD — contributeur open source à Lingui.`;
};
var es_team_grid_member4bio1 = () => {
	return `Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.`;
};
var de_team_grid_member4bio1 = () => {
	return `Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Contributor bei Lingui.`;
};
var it_team_grid_member4bio1 = () => {
	return `Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.`;
};
var pt_team_grid_member4bio1 = () => {
	return `Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Contribuidor de código aberto do Lingui.`;
};
var zh_team_grid_member4bio1 = () => {
	return `维护基准测试基础设施和 CI/CD 流水线。Lingui 的开源贡献者。`;
};
var ja_team_grid_member4bio1 = () => {
	return `ベンチマークインフラストラクチャとCI/CDパイプラインを維持しています。Linguiのオープンソースコントリビューター。`;
};
var ko_team_grid_member4bio1 = () => {
	return `Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.`;
};
var ru_team_grid_member4bio1 = () => {
	return `Поддерживает инфраструктуру бенчмаркинга и CI/CD конвейер. Участник open source проекта Lingui.`;
};
var team_grid_member4bio1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member4bio1(inputs);
	if (locale === "fr") return fr_team_grid_member4bio1(inputs);
	if (locale === "es") return es_team_grid_member4bio1(inputs);
	if (locale === "de") return de_team_grid_member4bio1(inputs);
	if (locale === "it") return it_team_grid_member4bio1(inputs);
	if (locale === "pt") return pt_team_grid_member4bio1(inputs);
	if (locale === "zh") return zh_team_grid_member4bio1(inputs);
	if (locale === "ja") return ja_team_grid_member4bio1(inputs);
	if (locale === "ko") return ko_team_grid_member4bio1(inputs);
	return ru_team_grid_member4bio1(inputs);
});
var en_team_grid_member5name1 = () => {
	return `Yuki Tanaka`;
};
var fr_team_grid_member5name1 = () => {
	return `Yuki Tanaka`;
};
var es_team_grid_member5name1 = () => {
	return `Yuki Tanaka`;
};
var de_team_grid_member5name1 = () => {
	return `Yuki Tanaka`;
};
var it_team_grid_member5name1 = () => {
	return `Yuki Tanaka`;
};
var pt_team_grid_member5name1 = () => {
	return `Yuki Tanaka`;
};
var zh_team_grid_member5name1 = () => {
	return `Yuki Tanaka`;
};
var ja_team_grid_member5name1 = () => {
	return `Yuki Tanaka`;
};
var ko_team_grid_member5name1 = () => {
	return `Yuki Tanaka`;
};
var ru_team_grid_member5name1 = () => {
	return `Юки Танака`;
};
var team_grid_member5name1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member5name1(inputs);
	if (locale === "fr") return fr_team_grid_member5name1(inputs);
	if (locale === "es") return es_team_grid_member5name1(inputs);
	if (locale === "de") return de_team_grid_member5name1(inputs);
	if (locale === "it") return it_team_grid_member5name1(inputs);
	if (locale === "pt") return pt_team_grid_member5name1(inputs);
	if (locale === "zh") return zh_team_grid_member5name1(inputs);
	if (locale === "ja") return ja_team_grid_member5name1(inputs);
	if (locale === "ko") return ko_team_grid_member5name1(inputs);
	return ru_team_grid_member5name1(inputs);
});
var en_team_grid_member5role1 = () => {
	return `Data Analyst`;
};
var fr_team_grid_member5role1 = () => {
	return `Analyste de données`;
};
var es_team_grid_member5role1 = () => {
	return `Analista de datos`;
};
var de_team_grid_member5role1 = () => {
	return `Datenanalyst`;
};
var it_team_grid_member5role1 = () => {
	return `Analista dati`;
};
var pt_team_grid_member5role1 = () => {
	return `Analista de dados`;
};
var zh_team_grid_member5role1 = () => {
	return `数据分析师`;
};
var ja_team_grid_member5role1 = () => {
	return `データアナリスト`;
};
var ko_team_grid_member5role1 = () => {
	return `Data Analyst`;
};
var ru_team_grid_member5role1 = () => {
	return `Аналитик данных`;
};
var team_grid_member5role1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member5role1(inputs);
	if (locale === "fr") return fr_team_grid_member5role1(inputs);
	if (locale === "es") return es_team_grid_member5role1(inputs);
	if (locale === "de") return de_team_grid_member5role1(inputs);
	if (locale === "it") return it_team_grid_member5role1(inputs);
	if (locale === "pt") return pt_team_grid_member5role1(inputs);
	if (locale === "zh") return zh_team_grid_member5role1(inputs);
	if (locale === "ja") return ja_team_grid_member5role1(inputs);
	if (locale === "ko") return ko_team_grid_member5role1(inputs);
	return ru_team_grid_member5role1(inputs);
});
var en_team_grid_member5bio1 = () => {
	return `Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.`;
};
var fr_team_grid_member5bio1 = () => {
	return `Rigueur statistique des résultats — doctorat en statistiques appliquées (MIT).`;
};
var es_team_grid_member5bio1 = () => {
	return `Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.`;
};
var de_team_grid_member5bio1 = () => {
	return `Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in angewandter Statistik am MIT.`;
};
var it_team_grid_member5bio1 = () => {
	return `Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.`;
};
var pt_team_grid_member5bio1 = () => {
	return `Garante o rigor estatístico em todos os resultados de benchmark. PhD em Estatística Aplicada pelo MIT.`;
};
var zh_team_grid_member5bio1 = () => {
	return `确保所有基准测试结果 agrarian 统计严谨性。获得 MIT 应用统计学博士学位。`;
};
var ja_team_grid_member5bio1 = () => {
	return `すべてのベンチマーク結果における統計的厳密さを確保します。MITの応用統計学博士。`;
};
var ko_team_grid_member5bio1 = () => {
	return `Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.`;
};
var ru_team_grid_member5bio1 = () => {
	return `Обеспечивает статистическую строгость во всех результатах бенчмарков. Доктор прикладной статистики (MIT).`;
};
var team_grid_member5bio1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member5bio1(inputs);
	if (locale === "fr") return fr_team_grid_member5bio1(inputs);
	if (locale === "es") return es_team_grid_member5bio1(inputs);
	if (locale === "de") return de_team_grid_member5bio1(inputs);
	if (locale === "it") return it_team_grid_member5bio1(inputs);
	if (locale === "pt") return pt_team_grid_member5bio1(inputs);
	if (locale === "zh") return zh_team_grid_member5bio1(inputs);
	if (locale === "ja") return ja_team_grid_member5bio1(inputs);
	if (locale === "ko") return ko_team_grid_member5bio1(inputs);
	return ru_team_grid_member5bio1(inputs);
});
var en_team_grid_member6name1 = () => {
	return `Elena Kowalski`;
};
var fr_team_grid_member6name1 = () => {
	return `Elena Kowalski`;
};
var es_team_grid_member6name1 = () => {
	return `Elena Kowalski`;
};
var de_team_grid_member6name1 = () => {
	return `Elena Kowalski`;
};
var it_team_grid_member6name1 = () => {
	return `Elena Kowalski`;
};
var pt_team_grid_member6name1 = () => {
	return `Elena Kowalski`;
};
var zh_team_grid_member6name1 = () => {
	return `Elena Kowalski`;
};
var ja_team_grid_member6name1 = () => {
	return `Elena Kowalski`;
};
var ko_team_grid_member6name1 = () => {
	return `Elena Kowalski`;
};
var ru_team_grid_member6name1 = () => {
	return `Елена Ковальски`;
};
var team_grid_member6name1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member6name1(inputs);
	if (locale === "fr") return fr_team_grid_member6name1(inputs);
	if (locale === "es") return es_team_grid_member6name1(inputs);
	if (locale === "de") return de_team_grid_member6name1(inputs);
	if (locale === "it") return it_team_grid_member6name1(inputs);
	if (locale === "pt") return pt_team_grid_member6name1(inputs);
	if (locale === "zh") return zh_team_grid_member6name1(inputs);
	if (locale === "ja") return ja_team_grid_member6name1(inputs);
	if (locale === "ko") return ko_team_grid_member6name1(inputs);
	return ru_team_grid_member6name1(inputs);
});
var en_team_grid_member6role1 = () => {
	return `Community Manager`;
};
var fr_team_grid_member6role1 = () => {
	return `Community manager`;
};
var es_team_grid_member6role1 = () => {
	return `Responsable de la comunidad`;
};
var de_team_grid_member6role1 = () => {
	return `Community Manager`;
};
var it_team_grid_member6role1 = () => {
	return `Responsable della comunità`;
};
var pt_team_grid_member6role1 = () => {
	return `Gerente de comunidade`;
};
var zh_team_grid_member6role1 = () => {
	return `社区经理`;
};
var ja_team_grid_member6role1 = () => {
	return `コミュニティマネージャー`;
};
var ko_team_grid_member6role1 = () => {
	return `Community Manager`;
};
var ru_team_grid_member6role1 = () => {
	return `Комьюнити-менеджер`;
};
var team_grid_member6role1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member6role1(inputs);
	if (locale === "fr") return fr_team_grid_member6role1(inputs);
	if (locale === "es") return es_team_grid_member6role1(inputs);
	if (locale === "de") return de_team_grid_member6role1(inputs);
	if (locale === "it") return it_team_grid_member6role1(inputs);
	if (locale === "pt") return pt_team_grid_member6role1(inputs);
	if (locale === "zh") return zh_team_grid_member6role1(inputs);
	if (locale === "ja") return ja_team_grid_member6role1(inputs);
	if (locale === "ko") return ko_team_grid_member6role1(inputs);
	return ru_team_grid_member6role1(inputs);
});
var en_team_grid_member6bio1 = () => {
	return `Manages community contributions, partnerships, and events. Background in open source governance.`;
};
var fr_team_grid_member6bio1 = () => {
	return `Contributions communautaires, partenariats et événements — gouvernance open source.`;
};
var es_team_grid_member6bio1 = () => {
	return `Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.`;
};
var de_team_grid_member6bio1 = () => {
	return `Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.`;
};
var it_team_grid_member6bio1 = () => {
	return `Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.`;
};
var pt_team_grid_member6bio1 = () => {
	return `Gere as contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.`;
};
var zh_team_grid_member6bio1 = () => {
	return `管理社区贡献、合作伙伴关系和活动。具有开源治理背景。`;
};
var ja_team_grid_member6bio1 = () => {
	return `コミュニティの貢献、パートナーシップ、イベントを管理しています。オープンソースガバナンスの経歴。`;
};
var ko_team_grid_member6bio1 = () => {
	return `Manages community contributions, partnerships, and events. Background in open source governance.`;
};
var ru_team_grid_member6bio1 = () => {
	return `Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении open source проектами.`;
};
var team_grid_member6bio1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_team_grid_member6bio1(inputs);
	if (locale === "fr") return fr_team_grid_member6bio1(inputs);
	if (locale === "es") return es_team_grid_member6bio1(inputs);
	if (locale === "de") return de_team_grid_member6bio1(inputs);
	if (locale === "it") return it_team_grid_member6bio1(inputs);
	if (locale === "pt") return pt_team_grid_member6bio1(inputs);
	if (locale === "zh") return zh_team_grid_member6bio1(inputs);
	if (locale === "ja") return ja_team_grid_member6bio1(inputs);
	if (locale === "ko") return ko_team_grid_member6bio1(inputs);
	return ru_team_grid_member6bio1(inputs);
});
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
function isLocale(value) {
	return locales.includes(value);
}
var PAGE_SEGMENTS = new Set([
	"",
	"about",
	"blog",
	"careers",
	"contact",
	"faq",
	"pricing",
	"products",
	"settings",
	"team"
]);
function parsePath(pathname) {
	const parts = pathname.split("/").filter(Boolean);
	if (parts.length === 0) return { kind: "notfound" };
	const [locale, ...rest] = parts;
	if (!isLocale(locale)) return { kind: "notfound" };
	const seg = rest[0] ?? "";
	if (rest.length > 1) return { kind: "notfound" };
	if (!PAGE_SEGMENTS.has(seg)) return { kind: "notfound" };
	return {
		kind: "ok",
		locale,
		page: seg
	};
}
var route = derived(writable(typeof window !== "undefined" ? window.location.pathname : "/en"), (p) => parsePath(p));
var root_1 = $.from_html(`<div class="rounded-lg border border-border bg-card p-6 text-center"><div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground"> </div> <h3 class="text-base font-semibold text-foreground"> </h3> <p class="mb-2 text-xs font-medium text-primary"> </p> <p class="text-sm text-muted-foreground"> </p></div>`);
var root = $.from_html(`<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"></div>`);
function TeamGrid($$anchor, $$props) {
	$.push($$props, true);
	const $route = () => $.store_get(route, "$route", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	const currentLocale = $.derived(() => $route().kind === "ok" ? $route().locale : "en");
	const members = $.derived(() => {
		$.get(currentLocale);
		return [
			{
				name: team_grid_member1name1(),
				role: team_grid_member1role1(),
				bio: team_grid_member1bio1()
			},
			{
				name: team_grid_member2name1(),
				role: team_grid_member2role1(),
				bio: team_grid_member2bio1()
			},
			{
				name: team_grid_member3name1(),
				role: team_grid_member3role1(),
				bio: team_grid_member3bio1()
			},
			{
				name: team_grid_member4name1(),
				role: team_grid_member4role1(),
				bio: team_grid_member4bio1()
			},
			{
				name: team_grid_member5name1(),
				role: team_grid_member5role1(),
				bio: team_grid_member5bio1()
			},
			{
				name: team_grid_member6name1(),
				role: team_grid_member6role1(),
				bio: team_grid_member6bio1()
			}
		];
	});
	var div = root();
	$.each(div, 21, () => $.get(members), $.index, ($$anchor, member) => {
		var div_1 = root_1();
		var div_2 = $.child(div_1);
		var text = $.child(div_2, true);
		$.reset(div_2);
		var h3 = $.sibling(div_2, 2);
		var text_1 = $.child(h3, true);
		$.reset(h3);
		var p = $.sibling(h3, 2);
		var text_2 = $.child(p, true);
		$.reset(p);
		var p_1 = $.sibling(p, 2);
		var text_3 = $.child(p_1, true);
		$.reset(p_1);
		$.reset(div_1);
		$.template_effect(($0) => {
			$.set_text(text, $0);
			$.set_text(text_1, $.get(member).name);
			$.set_text(text_2, $.get(member).role);
			$.set_text(text_3, $.get(member).bio);
		}, [() => $.get(member).name.split(" ").map((n) => n[0]).join("")]);
		$.append($$anchor, div_1);
	});
	$.reset(div);
	$.append($$anchor, div);
	$.pop();
	$$cleanup();
}
export { TeamGrid as default };
