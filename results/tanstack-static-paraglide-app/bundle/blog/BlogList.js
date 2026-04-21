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
var en_blog_list_comparingi18nlibrariesin20263 = () => {
	return `Comparing i18n Libraries in 2026: A Deep Dive`;
};
var fr_blog_list_comparingi18nlibrariesin20263 = () => {
	return `Comparaison des bibliothèques i18n en 2026 : une analyse approfondie`;
};
var es_blog_list_comparingi18nlibrariesin20263 = () => {
	return `Comparación de bibliotecas i18n en 2026: un análisis profundo`;
};
var de_blog_list_comparingi18nlibrariesin20263 = () => {
	return `i18n-Bibliotheken im Vergleich 2026: Ein tiefer Einblick`;
};
var it_blog_list_comparingi18nlibrariesin20263 = () => {
	return `Confronto tra librerie i18n nel 2026: un approfondimento`;
};
var pt_blog_list_comparingi18nlibrariesin20263 = () => {
	return `Comparando Bibliotecas i18n em 2026: Uma Análise Profunda`;
};
var zh_blog_list_comparingi18nlibrariesin20263 = () => {
	return `2026 年 i18n 库对比：深度解析`;
};
var ja_blog_list_comparingi18nlibrariesin20263 = () => {
	return `2026年のi18nライブラリ比較：ディープダイブ`;
};
var ko_blog_list_comparingi18nlibrariesin20263 = () => {
	return `2026년 i18n 라이브러리 비교: 심층 분석`;
};
var ru_blog_list_comparingi18nlibrariesin20263 = () => {
	return `Сравнение библиотек i18n в 2026 году: глубокое погружение`;
};
var blog_list_comparingi18nlibrariesin20263 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_comparingi18nlibrariesin20263(inputs);
	if (locale === "fr") return fr_blog_list_comparingi18nlibrariesin20263(inputs);
	if (locale === "es") return es_blog_list_comparingi18nlibrariesin20263(inputs);
	if (locale === "de") return de_blog_list_comparingi18nlibrariesin20263(inputs);
	if (locale === "it") return it_blog_list_comparingi18nlibrariesin20263(inputs);
	if (locale === "pt") return pt_blog_list_comparingi18nlibrariesin20263(inputs);
	if (locale === "zh") return zh_blog_list_comparingi18nlibrariesin20263(inputs);
	if (locale === "ja") return ja_blog_list_comparingi18nlibrariesin20263(inputs);
	if (locale === "ko") return ko_blog_list_comparingi18nlibrariesin20263(inputs);
	return ru_blog_list_comparingi18nlibrariesin20263(inputs);
});
var en_blog_list_wetested12differentinternationalization3 = () => {
	return `We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.`;
};
var fr_blog_list_wetested12differentinternationalization3 = () => {
	return `Nous avons testé 12 bibliothèques d'internationalisation différentes sur la performance, la taille du bundle et le DX. Voici les résultats surprenants.`;
};
var es_blog_list_wetested12differentinternationalization3 = () => {
	return `Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los resultados sorprendentes.`;
};
var de_blog_list_wetested12differentinternationalization3 = () => {
	return `Wir haben 12 verschiedene Internationalisierungs-Bibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.`;
};
var it_blog_list_wetested12differentinternationalization3 = () => {
	return `Abbiamo testato 12 diverse librerie di internazionalizzazione su prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.`;
};
var pt_blog_list_wetested12differentinternationalization3 = () => {
	return `Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho do bundle e DX. Aqui estão os resultados surpreendentes.`;
};
var zh_blog_list_wetested12differentinternationalization3 = () => {
	return `我们在性能、包大小和 DX 方面测试了 12 个不同的国际化库。以下是令人惊讶的结果。`;
};
var ja_blog_list_wetested12differentinternationalization3 = () => {
	return `パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。`;
};
var ko_blog_list_wetested12differentinternationalization3 = () => {
	return `저희는 성능, 번들 크기 및 DX 전반에 걸쳐 12개의 서로 다른 국제화 라이브러리를 테스트했습니다. 놀라운 결과가 여기 있습니다.`;
};
var ru_blog_list_wetested12differentinternationalization3 = () => {
	return `Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.`;
};
var blog_list_wetested12differentinternationalization3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_wetested12differentinternationalization3(inputs);
	if (locale === "fr") return fr_blog_list_wetested12differentinternationalization3(inputs);
	if (locale === "es") return es_blog_list_wetested12differentinternationalization3(inputs);
	if (locale === "de") return de_blog_list_wetested12differentinternationalization3(inputs);
	if (locale === "it") return it_blog_list_wetested12differentinternationalization3(inputs);
	if (locale === "pt") return pt_blog_list_wetested12differentinternationalization3(inputs);
	if (locale === "zh") return zh_blog_list_wetested12differentinternationalization3(inputs);
	if (locale === "ja") return ja_blog_list_wetested12differentinternationalization3(inputs);
	if (locale === "ko") return ko_blog_list_wetested12differentinternationalization3(inputs);
	return ru_blog_list_wetested12differentinternationalization3(inputs);
});
var en_blog_list_howtoreduceyouri18n4 = () => {
	return `How to Reduce Your i18n Bundle by 60%`;
};
var fr_blog_list_howtoreduceyouri18n4 = () => {
	return `Comment réduire votre bundle i18n de 60 %`;
};
var es_blog_list_howtoreduceyouri18n4 = () => {
	return `Cómo reducir tu bundle i18n en un 60%`;
};
var de_blog_list_howtoreduceyouri18n4 = () => {
	return `So reduzieren Sie Ihr i18n-Bundle um 60 %`;
};
var it_blog_list_howtoreduceyouri18n4 = () => {
	return `Come ridurre il bundle i18n del 60%`;
};
var pt_blog_list_howtoreduceyouri18n4 = () => {
	return `Como reduzir seu bundle i18n em 60%`;
};
var zh_blog_list_howtoreduceyouri18n4 = () => {
	return `如何将您的 i18n 包减少 60%`;
};
var ja_blog_list_howtoreduceyouri18n4 = () => {
	return `i18nバンドルを60％削減する方法`;
};
var ko_blog_list_howtoreduceyouri18n4 = () => {
	return `i18n 번들을 60% 줄이는 방법`;
};
var ru_blog_list_howtoreduceyouri18n4 = () => {
	return `Как уменьшить бандл i18n на 60%`;
};
var blog_list_howtoreduceyouri18n4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_howtoreduceyouri18n4(inputs);
	if (locale === "fr") return fr_blog_list_howtoreduceyouri18n4(inputs);
	if (locale === "es") return es_blog_list_howtoreduceyouri18n4(inputs);
	if (locale === "de") return de_blog_list_howtoreduceyouri18n4(inputs);
	if (locale === "it") return it_blog_list_howtoreduceyouri18n4(inputs);
	if (locale === "pt") return pt_blog_list_howtoreduceyouri18n4(inputs);
	if (locale === "zh") return zh_blog_list_howtoreduceyouri18n4(inputs);
	if (locale === "ja") return ja_blog_list_howtoreduceyouri18n4(inputs);
	if (locale === "ko") return ko_blog_list_howtoreduceyouri18n4(inputs);
	return ru_blog_list_howtoreduceyouri18n4(inputs);
});
var en_blog_list_march82026 = () => {
	return `March 8, 2026`;
};
var fr_blog_list_march82026 = () => {
	return `8 mars 2026`;
};
var es_blog_list_march82026 = () => {
	return `8 de marzo de 2026`;
};
var de_blog_list_march82026 = () => {
	return `8. März 2026`;
};
var it_blog_list_march82026 = () => {
	return `8 marzo 2026`;
};
var pt_blog_list_march82026 = () => {
	return `8 de março de 2026`;
};
var zh_blog_list_march82026 = () => {
	return `2026年3月8日`;
};
var ja_blog_list_march82026 = () => {
	return `2026年3月8日`;
};
var ko_blog_list_march82026 = () => {
	return `2026년 3월 8일`;
};
var ru_blog_list_march82026 = () => {
	return `8 марта 2026 года`;
};
var blog_list_march82026 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_march82026(inputs);
	if (locale === "fr") return fr_blog_list_march82026(inputs);
	if (locale === "es") return es_blog_list_march82026(inputs);
	if (locale === "de") return de_blog_list_march82026(inputs);
	if (locale === "it") return it_blog_list_march82026(inputs);
	if (locale === "pt") return pt_blog_list_march82026(inputs);
	if (locale === "zh") return zh_blog_list_march82026(inputs);
	if (locale === "ja") return ja_blog_list_march82026(inputs);
	if (locale === "ko") return ko_blog_list_march82026(inputs);
	return ru_blog_list_march82026(inputs);
});
var en_blog_list_practicalstrategiesforoptimizingtranslation4 = () => {
	return `Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.`;
};
var fr_blog_list_practicalstrategiesforoptimizingtranslation4 = () => {
	return `Stratégies pratiques pour optimiser les bundles de traduction, notamment le chargement différé, le fractionnement du code et les optimisations au moment de la compilation.`;
};
var es_blog_list_practicalstrategiesforoptimizingtranslation4 = () => {
	return `Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.`;
};
var de_blog_list_practicalstrategiesforoptimizingtranslation4 = () => {
	return `Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Compile-Time-Optimierungen.`;
};
var it_blog_list_practicalstrategiesforoptimizingtranslation4 = () => {
	return `Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni in fase di compilazione.`;
};
var pt_blog_list_practicalstrategiesforoptimizingtranslation4 = () => {
	return `Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de compilação.`;
};
var zh_blog_list_practicalstrategiesforoptimizingtranslation4 = () => {
	return `优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。`;
};
var ja_blog_list_practicalstrategiesforoptimizingtranslation4 = () => {
	return `遅延読み込み、コード分割、コンパイル時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。`;
};
var ko_blog_list_practicalstrategiesforoptimizingtranslation4 = () => {
	return `지연 로딩, 코드 분할 및 컴파일 시간 최적화를 포함하여 번역 번들을 최적화하기 위한 실용적인 전략입니다.`;
};
var ru_blog_list_practicalstrategiesforoptimizingtranslation4 = () => {
	return `Практические стратегии для оптимизации бандлов перевода, включая ленивую загрузку, разделение кода и оптимизации во время компиляции.`;
};
var blog_list_practicalstrategiesforoptimizingtranslation4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_practicalstrategiesforoptimizingtranslation4(inputs);
	if (locale === "fr") return fr_blog_list_practicalstrategiesforoptimizingtranslation4(inputs);
	if (locale === "es") return es_blog_list_practicalstrategiesforoptimizingtranslation4(inputs);
	if (locale === "de") return de_blog_list_practicalstrategiesforoptimizingtranslation4(inputs);
	if (locale === "it") return it_blog_list_practicalstrategiesforoptimizingtranslation4(inputs);
	if (locale === "pt") return pt_blog_list_practicalstrategiesforoptimizingtranslation4(inputs);
	if (locale === "zh") return zh_blog_list_practicalstrategiesforoptimizingtranslation4(inputs);
	if (locale === "ja") return ja_blog_list_practicalstrategiesforoptimizingtranslation4(inputs);
	if (locale === "ko") return ko_blog_list_practicalstrategiesforoptimizingtranslation4(inputs);
	return ru_blog_list_practicalstrategiesforoptimizingtranslation4(inputs);
});
var en_blog_list_thestateofinternationalizationin4 = () => {
	return `The State of Internationalization in React`;
};
var fr_blog_list_thestateofinternationalizationin4 = () => {
	return `L'état de l'internationalisation dans React`;
};
var es_blog_list_thestateofinternationalizationin4 = () => {
	return `El estado de la internacionalización en React`;
};
var de_blog_list_thestateofinternationalizationin4 = () => {
	return `Der Stand der Internationalisierung in React`;
};
var it_blog_list_thestateofinternationalizationin4 = () => {
	return `Lo stato dell'internazionalizzazione in React`;
};
var pt_blog_list_thestateofinternationalizationin4 = () => {
	return `O estado da internacionalização no React`;
};
var zh_blog_list_thestateofinternationalizationin4 = () => {
	return `React 国际化的现状`;
};
var ja_blog_list_thestateofinternationalizationin4 = () => {
	return `Reactにおける国際化の現状`;
};
var ko_blog_list_thestateofinternationalizationin4 = () => {
	return `React 국제화의 현주소`;
};
var ru_blog_list_thestateofinternationalizationin4 = () => {
	return `Состояние интернационализации в React`;
};
var blog_list_thestateofinternationalizationin4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_thestateofinternationalizationin4(inputs);
	if (locale === "fr") return fr_blog_list_thestateofinternationalizationin4(inputs);
	if (locale === "es") return es_blog_list_thestateofinternationalizationin4(inputs);
	if (locale === "de") return de_blog_list_thestateofinternationalizationin4(inputs);
	if (locale === "it") return it_blog_list_thestateofinternationalizationin4(inputs);
	if (locale === "pt") return pt_blog_list_thestateofinternationalizationin4(inputs);
	if (locale === "zh") return zh_blog_list_thestateofinternationalizationin4(inputs);
	if (locale === "ja") return ja_blog_list_thestateofinternationalizationin4(inputs);
	if (locale === "ko") return ko_blog_list_thestateofinternationalizationin4(inputs);
	return ru_blog_list_thestateofinternationalizationin4(inputs);
});
var en_blog_list_february282026 = () => {
	return `February 28, 2026`;
};
var fr_blog_list_february282026 = () => {
	return `28 février 2026`;
};
var es_blog_list_february282026 = () => {
	return `28 de febrero de 2026`;
};
var de_blog_list_february282026 = () => {
	return `28. Februar 2026`;
};
var it_blog_list_february282026 = () => {
	return `28 febbraio 2026`;
};
var pt_blog_list_february282026 = () => {
	return `28 de fevereiro de 2026`;
};
var zh_blog_list_february282026 = () => {
	return `2026年2月28日`;
};
var ja_blog_list_february282026 = () => {
	return `2026年2月28日`;
};
var ko_blog_list_february282026 = () => {
	return `2026년 2월 28일`;
};
var ru_blog_list_february282026 = () => {
	return `28 февраля 2026 года`;
};
var blog_list_february282026 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_february282026(inputs);
	if (locale === "fr") return fr_blog_list_february282026(inputs);
	if (locale === "es") return es_blog_list_february282026(inputs);
	if (locale === "de") return de_blog_list_february282026(inputs);
	if (locale === "it") return it_blog_list_february282026(inputs);
	if (locale === "pt") return pt_blog_list_february282026(inputs);
	if (locale === "zh") return zh_blog_list_february282026(inputs);
	if (locale === "ja") return ja_blog_list_february282026(inputs);
	if (locale === "ko") return ko_blog_list_february282026(inputs);
	return ru_blog_list_february282026(inputs);
});
var en_blog_list_anoverviewofthecurrent4 = () => {
	return `An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.`;
};
var fr_blog_list_anoverviewofthecurrent4 = () => {
	return `Un aperçu de l'écosystème i18n actuel dans React, couvrant les tendances, les modèles émergents et les préférences de la communauté.`;
};
var es_blog_list_anoverviewofthecurrent4 = () => {
	return `Una visión general del ecosistema i18n actual en React, que cubre tendencias, patrones emergentes y preferencias de la comunidad.`;
};
var de_blog_list_anoverviewofthecurrent4 = () => {
	return `Eine Übersicht über das aktuelle i18n-Ökosystem in React, die Trends, aufkommende Muster und Community-Präferenzen abdeckt.`;
};
var it_blog_list_anoverviewofthecurrent4 = () => {
	return `Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.`;
};
var pt_blog_list_anoverviewofthecurrent4 = () => {
	return `Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.`;
};
var zh_blog_list_anoverviewofthecurrent4 = () => {
	return `React 当前 i18n 生态系统概述，涵盖趋势、新兴模式和社区偏好。`;
};
var ja_blog_list_anoverviewofthecurrent4 = () => {
	return `トレンド、新興パターン、コミュニティの好みを網羅した、Reactにおける現在のi18nエコシステムの概要。`;
};
var ko_blog_list_anoverviewofthecurrent4 = () => {
	return `동향, 신흥 패턴 및 커뮤니티 선호도를 다루는 React의 현재 i18n 생태계 개요입니다.`;
};
var ru_blog_list_anoverviewofthecurrent4 = () => {
	return `Обзор текущей экосистемы i18n в React, охватывающий тенденции, возникающие паттерны и предпочтения сообщества.`;
};
var blog_list_anoverviewofthecurrent4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_anoverviewofthecurrent4(inputs);
	if (locale === "fr") return fr_blog_list_anoverviewofthecurrent4(inputs);
	if (locale === "es") return es_blog_list_anoverviewofthecurrent4(inputs);
	if (locale === "de") return de_blog_list_anoverviewofthecurrent4(inputs);
	if (locale === "it") return it_blog_list_anoverviewofthecurrent4(inputs);
	if (locale === "pt") return pt_blog_list_anoverviewofthecurrent4(inputs);
	if (locale === "zh") return zh_blog_list_anoverviewofthecurrent4(inputs);
	if (locale === "ja") return ja_blog_list_anoverviewofthecurrent4(inputs);
	if (locale === "ko") return ko_blog_list_anoverviewofthecurrent4(inputs);
	return ru_blog_list_anoverviewofthecurrent4(inputs);
});
var en_blog_list_migratingfromreacti18nextto4 = () => {
	return `Migrating from react-i18next to Lingui`;
};
var fr_blog_list_migratingfromreacti18nextto4 = () => {
	return `Migration de react-i18next vers Lingui`;
};
var es_blog_list_migratingfromreacti18nextto4 = () => {
	return `Migración de react-i18next a Lingui`;
};
var de_blog_list_migratingfromreacti18nextto4 = () => {
	return `Migration von react-i18next zu Lingui`;
};
var it_blog_list_migratingfromreacti18nextto4 = () => {
	return `Migrazione da react-i18next a Lingui`;
};
var pt_blog_list_migratingfromreacti18nextto4 = () => {
	return `Migrando do react-i18next para o Lingui`;
};
var zh_blog_list_migratingfromreacti18nextto4 = () => {
	return `从 react-i18next 迁移到 Lingui`;
};
var ja_blog_list_migratingfromreacti18nextto4 = () => {
	return `react-i18nextからLinguiへの移行`;
};
var ko_blog_list_migratingfromreacti18nextto4 = () => {
	return `react-i18next에서 Lingui로 마이그레이션하기`;
};
var ru_blog_list_migratingfromreacti18nextto4 = () => {
	return `Миграция с react-i18next на Lingui`;
};
var blog_list_migratingfromreacti18nextto4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_migratingfromreacti18nextto4(inputs);
	if (locale === "fr") return fr_blog_list_migratingfromreacti18nextto4(inputs);
	if (locale === "es") return es_blog_list_migratingfromreacti18nextto4(inputs);
	if (locale === "de") return de_blog_list_migratingfromreacti18nextto4(inputs);
	if (locale === "it") return it_blog_list_migratingfromreacti18nextto4(inputs);
	if (locale === "pt") return pt_blog_list_migratingfromreacti18nextto4(inputs);
	if (locale === "zh") return zh_blog_list_migratingfromreacti18nextto4(inputs);
	if (locale === "ja") return ja_blog_list_migratingfromreacti18nextto4(inputs);
	if (locale === "ko") return ko_blog_list_migratingfromreacti18nextto4(inputs);
	return ru_blog_list_migratingfromreacti18nextto4(inputs);
});
var en_blog_list_february152026 = () => {
	return `February 15, 2026`;
};
var fr_blog_list_february152026 = () => {
	return `15 février 2026`;
};
var es_blog_list_february152026 = () => {
	return `15 de febrero de 2026`;
};
var de_blog_list_february152026 = () => {
	return `15. Februar 2026`;
};
var it_blog_list_february152026 = () => {
	return `15 febbraio 2026`;
};
var pt_blog_list_february152026 = () => {
	return `15 de fevereiro de 2026`;
};
var zh_blog_list_february152026 = () => {
	return `2026年2月15日`;
};
var ja_blog_list_february152026 = () => {
	return `2026年2月15日`;
};
var ko_blog_list_february152026 = () => {
	return `2026년 2월 15일`;
};
var ru_blog_list_february152026 = () => {
	return `15 февраля 2026 года`;
};
var blog_list_february152026 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_february152026(inputs);
	if (locale === "fr") return fr_blog_list_february152026(inputs);
	if (locale === "es") return es_blog_list_february152026(inputs);
	if (locale === "de") return de_blog_list_february152026(inputs);
	if (locale === "it") return it_blog_list_february152026(inputs);
	if (locale === "pt") return pt_blog_list_february152026(inputs);
	if (locale === "zh") return zh_blog_list_february152026(inputs);
	if (locale === "ja") return ja_blog_list_february152026(inputs);
	if (locale === "ko") return ko_blog_list_february152026(inputs);
	return ru_blog_list_february152026(inputs);
});
var en_blog_list_astepbystepguide4 = () => {
	return `A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.`;
};
var fr_blog_list_astepbystepguide4 = () => {
	return `Un guide étape par étape sur la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.`;
};
var es_blog_list_astepbystepguide4 = () => {
	return `Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.`;
};
var de_blog_list_astepbystepguide4 = () => {
	return `Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.`;
};
var it_blog_list_astepbystepguide4 = () => {
	return `Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.`;
};
var pt_blog_list_astepbystepguide4 = () => {
	return `Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.`;
};
var zh_blog_list_astepbystepguide4 = () => {
	return `关于如何将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。`;
};
var ja_blog_list_astepbystepguide4 = () => {
	return `50,000の翻訳キーを持つプロダクションアプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。`;
};
var ko_blog_list_astepbystepguide4 = () => {
	return `50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하는 방법에 대한 단계별 가이드.`;
};
var ru_blog_list_astepbystepguide4 = () => {
	return `Пошаговое руководство по миграции продакшн-приложения с 50 000 ключами перевода с react-i18next на Lingui.`;
};
var blog_list_astepbystepguide4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_astepbystepguide4(inputs);
	if (locale === "fr") return fr_blog_list_astepbystepguide4(inputs);
	if (locale === "es") return es_blog_list_astepbystepguide4(inputs);
	if (locale === "de") return de_blog_list_astepbystepguide4(inputs);
	if (locale === "it") return it_blog_list_astepbystepguide4(inputs);
	if (locale === "pt") return pt_blog_list_astepbystepguide4(inputs);
	if (locale === "zh") return zh_blog_list_astepbystepguide4(inputs);
	if (locale === "ja") return ja_blog_list_astepbystepguide4(inputs);
	if (locale === "ko") return ko_blog_list_astepbystepguide4(inputs);
	return ru_blog_list_astepbystepguide4(inputs);
});
var en_blog_list_servercomponentsandi18nwhat4 = () => {
	return `Server Components and i18n: What Changes?`;
};
var fr_blog_list_servercomponentsandi18nwhat4 = () => {
	return `Server Components et i18n : Qu'est-ce qui change ?`;
};
var es_blog_list_servercomponentsandi18nwhat4 = () => {
	return `Server Components e i18n: ¿qué cambia?`;
};
var de_blog_list_servercomponentsandi18nwhat4 = () => {
	return `Server Components und i18n: Was ändert sich?`;
};
var it_blog_list_servercomponentsandi18nwhat4 = () => {
	return `Server Components e i18n: cosa cambia?`;
};
var pt_blog_list_servercomponentsandi18nwhat4 = () => {
	return `Server Components e i18n: o que muda?`;
};
var zh_blog_list_servercomponentsandi18nwhat4 = () => {
	return `服务器组件与 i18n：有哪些变化？`;
};
var ja_blog_list_servercomponentsandi18nwhat4 = () => {
	return `Server Componentsとi18n：何が変わるのか？`;
};
var ko_blog_list_servercomponentsandi18nwhat4 = () => {
	return `Server Components 및 i18n: 무엇이 달라지나요?`;
};
var ru_blog_list_servercomponentsandi18nwhat4 = () => {
	return `Server Components и i18n: что меняется?`;
};
var blog_list_servercomponentsandi18nwhat4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_servercomponentsandi18nwhat4(inputs);
	if (locale === "fr") return fr_blog_list_servercomponentsandi18nwhat4(inputs);
	if (locale === "es") return es_blog_list_servercomponentsandi18nwhat4(inputs);
	if (locale === "de") return de_blog_list_servercomponentsandi18nwhat4(inputs);
	if (locale === "it") return it_blog_list_servercomponentsandi18nwhat4(inputs);
	if (locale === "pt") return pt_blog_list_servercomponentsandi18nwhat4(inputs);
	if (locale === "zh") return zh_blog_list_servercomponentsandi18nwhat4(inputs);
	if (locale === "ja") return ja_blog_list_servercomponentsandi18nwhat4(inputs);
	if (locale === "ko") return ko_blog_list_servercomponentsandi18nwhat4(inputs);
	return ru_blog_list_servercomponentsandi18nwhat4(inputs);
});
var en_blog_list_february12026 = () => {
	return `February 1, 2026`;
};
var fr_blog_list_february12026 = () => {
	return `1er février 2026`;
};
var es_blog_list_february12026 = () => {
	return `1 de febrero de 2026`;
};
var de_blog_list_february12026 = () => {
	return `1. Februar 2026`;
};
var it_blog_list_february12026 = () => {
	return `1 febbraio 2026`;
};
var pt_blog_list_february12026 = () => {
	return `1 de fevereiro de 2026`;
};
var zh_blog_list_february12026 = () => {
	return `2026年2月1日`;
};
var ja_blog_list_february12026 = () => {
	return `2026年2月1日`;
};
var ko_blog_list_february12026 = () => {
	return `2026년 1월 1일`;
};
var ru_blog_list_february12026 = () => {
	return `1 февраля 2026 года`;
};
var blog_list_february12026 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_february12026(inputs);
	if (locale === "fr") return fr_blog_list_february12026(inputs);
	if (locale === "es") return es_blog_list_february12026(inputs);
	if (locale === "de") return de_blog_list_february12026(inputs);
	if (locale === "it") return it_blog_list_february12026(inputs);
	if (locale === "pt") return pt_blog_list_february12026(inputs);
	if (locale === "zh") return zh_blog_list_february12026(inputs);
	if (locale === "ja") return ja_blog_list_february12026(inputs);
	if (locale === "ko") return ko_blog_list_february12026(inputs);
	return ru_blog_list_february12026(inputs);
});
var en_blog_list_reactservercomponentsintroducenew4 = () => {
	return `React Server Components introduce new patterns for internationalization. We explore the implications and best practices.`;
};
var fr_blog_list_reactservercomponentsintroducenew4 = () => {
	return `Les React Server Components introduisent de nouveaux modèles pour l'internationalisation. Nous explorons les implications et les meilleures pratiques.`;
};
var es_blog_list_reactservercomponentsintroducenew4 = () => {
	return `Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.`;
};
var de_blog_list_reactservercomponentsintroducenew4 = () => {
	return `React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.`;
};
var it_blog_list_reactservercomponentsintroducenew4 = () => {
	return `I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.`;
};
var pt_blog_list_reactservercomponentsintroducenew4 = () => {
	return `React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.`;
};
var zh_blog_list_reactservercomponentsintroducenew4 = () => {
	return `React Server Components 为国际化引入了新模式。我们探讨其影响和最佳实践。`;
};
var ja_blog_list_reactservercomponentsintroducenew4 = () => {
	return `React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。`;
};
var ko_blog_list_reactservercomponentsintroducenew4 = () => {
	return `React Server Components는 국제화를 위한 새로운 패턴을 도입합니다. 그 의미 및 모범 사례를 살펴봅니다.`;
};
var ru_blog_list_reactservercomponentsintroducenew4 = () => {
	return `React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.`;
};
var blog_list_reactservercomponentsintroducenew4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_reactservercomponentsintroducenew4(inputs);
	if (locale === "fr") return fr_blog_list_reactservercomponentsintroducenew4(inputs);
	if (locale === "es") return es_blog_list_reactservercomponentsintroducenew4(inputs);
	if (locale === "de") return de_blog_list_reactservercomponentsintroducenew4(inputs);
	if (locale === "it") return it_blog_list_reactservercomponentsintroducenew4(inputs);
	if (locale === "pt") return pt_blog_list_reactservercomponentsintroducenew4(inputs);
	if (locale === "zh") return zh_blog_list_reactservercomponentsintroducenew4(inputs);
	if (locale === "ja") return ja_blog_list_reactservercomponentsintroducenew4(inputs);
	if (locale === "ko") return ko_blog_list_reactservercomponentsintroducenew4(inputs);
	return ru_blog_list_reactservercomponentsintroducenew4(inputs);
});
var en_blog_list_benchmarkmethodologyhowwetest4 = () => {
	return `Benchmark Methodology: How We Test`;
};
var fr_blog_list_benchmarkmethodologyhowwetest4 = () => {
	return `Méthodologie du benchmark : comment nous testons`;
};
var es_blog_list_benchmarkmethodologyhowwetest4 = () => {
	return `Metodología del benchmark: cómo probamos`;
};
var de_blog_list_benchmarkmethodologyhowwetest4 = () => {
	return `Benchmark-Methodik: Wie wir testen`;
};
var it_blog_list_benchmarkmethodologyhowwetest4 = () => {
	return `Metodologia del benchmark: come testiamo`;
};
var pt_blog_list_benchmarkmethodologyhowwetest4 = () => {
	return `Metodologia de Benchmark: como testamos`;
};
var zh_blog_list_benchmarkmethodologyhowwetest4 = () => {
	return `基准测试方法论：我们如何测试`;
};
var ja_blog_list_benchmarkmethodologyhowwetest4 = () => {
	return `ベンチマーク方法論：私たちのテスト方法`;
};
var ko_blog_list_benchmarkmethodologyhowwetest4 = () => {
	return `벤치마크 방법론: 테스트 방법`;
};
var ru_blog_list_benchmarkmethodologyhowwetest4 = () => {
	return `Методология бенчмарка: как мы тестируем`;
};
var blog_list_benchmarkmethodologyhowwetest4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_benchmarkmethodologyhowwetest4(inputs);
	if (locale === "fr") return fr_blog_list_benchmarkmethodologyhowwetest4(inputs);
	if (locale === "es") return es_blog_list_benchmarkmethodologyhowwetest4(inputs);
	if (locale === "de") return de_blog_list_benchmarkmethodologyhowwetest4(inputs);
	if (locale === "it") return it_blog_list_benchmarkmethodologyhowwetest4(inputs);
	if (locale === "pt") return pt_blog_list_benchmarkmethodologyhowwetest4(inputs);
	if (locale === "zh") return zh_blog_list_benchmarkmethodologyhowwetest4(inputs);
	if (locale === "ja") return ja_blog_list_benchmarkmethodologyhowwetest4(inputs);
	if (locale === "ko") return ko_blog_list_benchmarkmethodologyhowwetest4(inputs);
	return ru_blog_list_benchmarkmethodologyhowwetest4(inputs);
});
var en_blog_list_january202026 = () => {
	return `January 20, 2026`;
};
var fr_blog_list_january202026 = () => {
	return `20 janvier 2026`;
};
var es_blog_list_january202026 = () => {
	return `20 de enero de 2026`;
};
var de_blog_list_january202026 = () => {
	return `20. Januar 2026`;
};
var it_blog_list_january202026 = () => {
	return `20 gennaio 2026`;
};
var pt_blog_list_january202026 = () => {
	return `20 de janeiro de 2026`;
};
var zh_blog_list_january202026 = () => {
	return `2026年1月20日`;
};
var ja_blog_list_january202026 = () => {
	return `2026年1月20日`;
};
var ko_blog_list_january202026 = () => {
	return `2026년 1월 20일`;
};
var ru_blog_list_january202026 = () => {
	return `20 января 2026 года`;
};
var blog_list_january202026 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_january202026(inputs);
	if (locale === "fr") return fr_blog_list_january202026(inputs);
	if (locale === "es") return es_blog_list_january202026(inputs);
	if (locale === "de") return de_blog_list_january202026(inputs);
	if (locale === "it") return it_blog_list_january202026(inputs);
	if (locale === "pt") return pt_blog_list_january202026(inputs);
	if (locale === "zh") return zh_blog_list_january202026(inputs);
	if (locale === "ja") return ja_blog_list_january202026(inputs);
	if (locale === "ko") return ko_blog_list_january202026(inputs);
	return ru_blog_list_january202026(inputs);
});
var en_blog_list_atransparentlookatour4 = () => {
	return `A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.`;
};
var fr_blog_list_atransparentlookatour4 = () => {
	return `Un regard transparent sur notre méthodologie de benchmarking, y compris les environnements de test, les méthodes statistiques et la reproductibilité.`;
};
var es_blog_list_atransparentlookatour4 = () => {
	return `Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.`;
};
var de_blog_list_atransparentlookatour4 = () => {
	return `Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.`;
};
var it_blog_list_atransparentlookatour4 = () => {
	return `Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.`;
};
var pt_blog_list_atransparentlookatour4 = () => {
	return `Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.`;
};
var zh_blog_list_atransparentlookatour4 = () => {
	return `透明地了解我们的基准测试方法，包括测试环境、统计方法和可复现性。`;
};
var ja_blog_list_atransparentlookatour4 = () => {
	return `テスト環境、統計手法、再現性を含む、私たちのベンチマーク方法論の透明性のある考察。`;
};
var ko_blog_list_atransparentlookatour4 = () => {
	return `테스트 환경, 통계적 방법 및 재현성을 포함한 벤치마킹 방법론에 대한 투명한 고찰.`;
};
var ru_blog_list_atransparentlookatour4 = () => {
	return `Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.`;
};
var blog_list_atransparentlookatour4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_atransparentlookatour4(inputs);
	if (locale === "fr") return fr_blog_list_atransparentlookatour4(inputs);
	if (locale === "es") return es_blog_list_atransparentlookatour4(inputs);
	if (locale === "de") return de_blog_list_atransparentlookatour4(inputs);
	if (locale === "it") return it_blog_list_atransparentlookatour4(inputs);
	if (locale === "pt") return pt_blog_list_atransparentlookatour4(inputs);
	if (locale === "zh") return zh_blog_list_atransparentlookatour4(inputs);
	if (locale === "ja") return ja_blog_list_atransparentlookatour4(inputs);
	if (locale === "ko") return ko_blog_list_atransparentlookatour4(inputs);
	return ru_blog_list_atransparentlookatour4(inputs);
});
var en_blog_list_readmore1 = () => {
	return `Read More →`;
};
var fr_blog_list_readmore1 = () => {
	return `Lire la suite →`;
};
var es_blog_list_readmore1 = () => {
	return `Leer más →`;
};
var de_blog_list_readmore1 = () => {
	return `Weiterlesen →`;
};
var it_blog_list_readmore1 = () => {
	return `Leggi di più →`;
};
var pt_blog_list_readmore1 = () => {
	return `Leia mais →`;
};
var zh_blog_list_readmore1 = () => {
	return `阅读更多 →`;
};
var ja_blog_list_readmore1 = () => {
	return `続きを読む →`;
};
var ko_blog_list_readmore1 = () => {
	return `더 읽어보기 →`;
};
var ru_blog_list_readmore1 = () => {
	return `Читать далее →`;
};
var blog_list_readmore1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_list_readmore1(inputs);
	if (locale === "fr") return fr_blog_list_readmore1(inputs);
	if (locale === "es") return es_blog_list_readmore1(inputs);
	if (locale === "de") return de_blog_list_readmore1(inputs);
	if (locale === "it") return it_blog_list_readmore1(inputs);
	if (locale === "pt") return pt_blog_list_readmore1(inputs);
	if (locale === "zh") return zh_blog_list_readmore1(inputs);
	if (locale === "ja") return ja_blog_list_readmore1(inputs);
	if (locale === "ko") return ko_blog_list_readmore1(inputs);
	return ru_blog_list_readmore1(inputs);
});
function BlogList() {
	return jsx("div", {
		className: "grid gap-6 md:grid-cols-2",
		children: [
			{
				title: blog_list_comparingi18nlibrariesin20263(),
				date: blog_list_march82026(),
				excerpt: blog_list_wetested12differentinternationalization3(),
				category: "Benchmark"
			},
			{
				title: blog_list_howtoreduceyouri18n4(),
				date: blog_list_march82026(),
				excerpt: blog_list_practicalstrategiesforoptimizingtranslation4(),
				category: "Tutorial"
			},
			{
				title: blog_list_thestateofinternationalizationin4(),
				date: blog_list_february282026(),
				excerpt: blog_list_anoverviewofthecurrent4(),
				category: "Analysis"
			},
			{
				title: blog_list_migratingfromreacti18nextto4(),
				date: blog_list_february152026(),
				excerpt: blog_list_astepbystepguide4(),
				category: "Tutorial"
			},
			{
				title: blog_list_servercomponentsandi18nwhat4(),
				date: blog_list_february12026(),
				excerpt: blog_list_reactservercomponentsintroducenew4(),
				category: "Analysis"
			},
			{
				title: blog_list_benchmarkmethodologyhowwetest4(),
				date: blog_list_january202026(),
				excerpt: blog_list_atransparentlookatour4(),
				category: "Meta"
			}
		].map((p) => jsxs("article", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [
				jsxs("div", {
					className: "mb-3 flex items-center gap-3",
					children: [jsx("span", {
						className: "rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground",
						children: p.category
					}), jsx("span", {
						className: "text-xs text-muted-foreground",
						children: p.date
					})]
				}),
				jsx("h2", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: p.title
				}),
				jsx("p", {
					className: "mb-4 text-sm text-muted-foreground",
					children: p.excerpt
				}),
				jsx("button", {
					type: "button",
					className: "text-sm font-medium text-primary hover:underline",
					children: blog_list_readmore1()
				})
			]
		}, p.title))
	});
}
setLocale("en", { reload: false });
function Wrapper({ children }) {
	return jsx(Fragment, { children });
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(BlogList, {}) });
}
export { Wrapped as default };
