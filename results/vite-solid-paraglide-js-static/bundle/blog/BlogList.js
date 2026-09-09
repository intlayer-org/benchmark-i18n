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
var en_blog_list_post1category1 = () => {
	return `Benchmark`;
};
var fr_blog_list_post1category1 = () => {
	return `Benchmark`;
};
var es_blog_list_post1category1 = () => {
	return `Benchmark`;
};
var de_blog_list_post1category1 = () => {
	return `Benchmark`;
};
var it_blog_list_post1category1 = () => {
	return `Benchmark`;
};
var pt_blog_list_post1category1 = () => {
	return `Benchmark`;
};
var zh_blog_list_post1category1 = () => {
	return `基准测试`;
};
var ja_blog_list_post1category1 = () => {
	return `ベンチマーク`;
};
var ko_blog_list_post1category1 = () => {
	return `Benchmark`;
};
var ru_blog_list_post1category1 = () => {
	return `Бенчмарк`;
};
var blog_list_post1category1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_blog_list_post1category1(inputs);
	if (locale === "es") return es_blog_list_post1category1(inputs);
	if (locale === "de") return de_blog_list_post1category1(inputs);
	if (locale === "it") return it_blog_list_post1category1(inputs);
	if (locale === "pt") return pt_blog_list_post1category1(inputs);
	if (locale === "zh") return zh_blog_list_post1category1(inputs);
	if (locale === "ja") return ja_blog_list_post1category1(inputs);
	if (locale === "ko") return ko_blog_list_post1category1(inputs);
	if (locale === "ru") return ru_blog_list_post1category1(inputs);
	return en_blog_list_post1category1(inputs);
});
var en_blog_list_post1date1 = () => {
	return `March 15, 2026`;
};
var fr_blog_list_post1date1 = () => {
	return `15 mars 2026`;
};
var es_blog_list_post1date1 = () => {
	return `15 de marzo de 2026`;
};
var de_blog_list_post1date1 = () => {
	return `15. März 2026`;
};
var it_blog_list_post1date1 = () => {
	return `15 marzo 2026`;
};
var pt_blog_list_post1date1 = () => {
	return `15 de março de 2026`;
};
var zh_blog_list_post1date1 = () => {
	return `2026年3月15日`;
};
var ja_blog_list_post1date1 = () => {
	return `2026年3月15日`;
};
var ko_blog_list_post1date1 = () => {
	return `March 15, 2026`;
};
var ru_blog_list_post1date1 = () => {
	return `15 марта 2026 г.`;
};
var blog_list_post1date1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_blog_list_post1date1(inputs);
	if (locale === "es") return es_blog_list_post1date1(inputs);
	if (locale === "de") return de_blog_list_post1date1(inputs);
	if (locale === "it") return it_blog_list_post1date1(inputs);
	if (locale === "pt") return pt_blog_list_post1date1(inputs);
	if (locale === "zh") return zh_blog_list_post1date1(inputs);
	if (locale === "ja") return ja_blog_list_post1date1(inputs);
	if (locale === "ko") return ko_blog_list_post1date1(inputs);
	if (locale === "ru") return ru_blog_list_post1date1(inputs);
	return en_blog_list_post1date1(inputs);
});
var en_blog_list_post1excerpt1 = () => {
	return `We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.`;
};
var fr_blog_list_post1excerpt1 = () => {
	return `Nous avons testé 12 bibliothèques sur la perf, la taille du bundle et l'expérience développeur. Voici les résultats surprenants.`;
};
var es_blog_list_post1excerpt1 = () => {
	return `Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los sorprendentes resultados.`;
};
var de_blog_list_post1excerpt1 = () => {
	return `Wir haben 12 verschiedene Internationalisierungsbibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.`;
};
var it_blog_list_post1excerpt1 = () => {
	return `Abbiamo testato 12 diverse librerie di internazionalizzazione in termini di prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.`;
};
var pt_blog_list_post1excerpt1 = () => {
	return `Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho de bundle e DX. Aqui estão os resultados surpreendentes.`;
};
var zh_blog_list_post1excerpt1 = () => {
	return `我们在性能、包大小和 DX 方面测试了 12 种不同的国际化库。以下是令人惊讶的结果。`;
};
var ja_blog_list_post1excerpt1 = () => {
	return `パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。`;
};
var ko_blog_list_post1excerpt1 = () => {
	return `We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.`;
};
var ru_blog_list_post1excerpt1 = () => {
	return `Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.`;
};
var blog_list_post1excerpt1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_blog_list_post1excerpt1(inputs);
	if (locale === "es") return es_blog_list_post1excerpt1(inputs);
	if (locale === "de") return de_blog_list_post1excerpt1(inputs);
	if (locale === "it") return it_blog_list_post1excerpt1(inputs);
	if (locale === "pt") return pt_blog_list_post1excerpt1(inputs);
	if (locale === "zh") return zh_blog_list_post1excerpt1(inputs);
	if (locale === "ja") return ja_blog_list_post1excerpt1(inputs);
	if (locale === "ko") return ko_blog_list_post1excerpt1(inputs);
	if (locale === "ru") return ru_blog_list_post1excerpt1(inputs);
	return en_blog_list_post1excerpt1(inputs);
});
var en_blog_list_post1title1 = () => {
	return `Comparing i18n Libraries in 2026: A Deep Dive`;
};
var fr_blog_list_post1title1 = () => {
	return `Comparer les bibliothèques i18n en 2026 : plongée détaillée`;
};
var es_blog_list_post1title1 = () => {
	return `Comparativa de bibliotecas i18n en 2026: Un análisis profundo`;
};
var de_blog_list_post1title1 = () => {
	return `Vergleich von i18n-Bibliotheken im Jahr 2026: Ein tiefer Einblick`;
};
var it_blog_list_post1title1 = () => {
	return `Confronto delle librerie i18n nel 2026: un'analisi approfondita`;
};
var pt_blog_list_post1title1 = () => {
	return `Comparando bibliotecas i18n em 2026: um mergulho profundo`;
};
var zh_blog_list_post1title1 = () => {
	return `2026 年 i18n 库对比：深度分析`;
};
var ja_blog_list_post1title1 = () => {
	return `2026年のi18nライブラリ比較：ディープダイブ`;
};
var ko_blog_list_post1title1 = () => {
	return `Comparing i18n Libraries in 2026: A Deep Dive`;
};
var ru_blog_list_post1title1 = () => {
	return `Сравнение библиотек i18n в 2026 году: глубокое погружение`;
};
var blog_list_post1title1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_blog_list_post1title1(inputs);
	if (locale === "es") return es_blog_list_post1title1(inputs);
	if (locale === "de") return de_blog_list_post1title1(inputs);
	if (locale === "it") return it_blog_list_post1title1(inputs);
	if (locale === "pt") return pt_blog_list_post1title1(inputs);
	if (locale === "zh") return zh_blog_list_post1title1(inputs);
	if (locale === "ja") return ja_blog_list_post1title1(inputs);
	if (locale === "ko") return ko_blog_list_post1title1(inputs);
	if (locale === "ru") return ru_blog_list_post1title1(inputs);
	return en_blog_list_post1title1(inputs);
});
var en_blog_list_post2category1 = () => {
	return `Tutorial`;
};
var fr_blog_list_post2category1 = () => {
	return `Tutoriel`;
};
var es_blog_list_post2category1 = () => {
	return `Tutorial`;
};
var de_blog_list_post2category1 = () => {
	return `Tutorial`;
};
var it_blog_list_post2category1 = () => {
	return `Tutorial`;
};
var pt_blog_list_post2category1 = () => {
	return `Tutorial`;
};
var zh_blog_list_post2category1 = () => {
	return `教程`;
};
var ja_blog_list_post2category1 = () => {
	return `チュートリアル`;
};
var ko_blog_list_post2category1 = () => {
	return `Tutorial`;
};
var ru_blog_list_post2category1 = () => {
	return `Туториал`;
};
var blog_list_post2category1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_blog_list_post2category1(inputs);
	if (locale === "es") return es_blog_list_post2category1(inputs);
	if (locale === "de") return de_blog_list_post2category1(inputs);
	if (locale === "it") return it_blog_list_post2category1(inputs);
	if (locale === "pt") return pt_blog_list_post2category1(inputs);
	if (locale === "zh") return zh_blog_list_post2category1(inputs);
	if (locale === "ja") return ja_blog_list_post2category1(inputs);
	if (locale === "ko") return ko_blog_list_post2category1(inputs);
	if (locale === "ru") return ru_blog_list_post2category1(inputs);
	return en_blog_list_post2category1(inputs);
});
var en_blog_list_post2date1 = () => {
	return `March 8, 2026`;
};
var fr_blog_list_post2date1 = () => {
	return `8 mars 2026`;
};
var es_blog_list_post2date1 = () => {
	return `8 de marzo de 2026`;
};
var de_blog_list_post2date1 = () => {
	return `8. März 2026`;
};
var it_blog_list_post2date1 = () => {
	return `8 marzo 2026`;
};
var pt_blog_list_post2date1 = () => {
	return `8 de março de 2026`;
};
var zh_blog_list_post2date1 = () => {
	return `2026年3月8日`;
};
var ja_blog_list_post2date1 = () => {
	return `2026年3月8日`;
};
var ko_blog_list_post2date1 = () => {
	return `March 8, 2026`;
};
var ru_blog_list_post2date1 = () => {
	return `8 марта 2026 г.`;
};
var blog_list_post2date1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_blog_list_post2date1(inputs);
	if (locale === "es") return es_blog_list_post2date1(inputs);
	if (locale === "de") return de_blog_list_post2date1(inputs);
	if (locale === "it") return it_blog_list_post2date1(inputs);
	if (locale === "pt") return pt_blog_list_post2date1(inputs);
	if (locale === "zh") return zh_blog_list_post2date1(inputs);
	if (locale === "ja") return ja_blog_list_post2date1(inputs);
	if (locale === "ko") return ko_blog_list_post2date1(inputs);
	if (locale === "ru") return ru_blog_list_post2date1(inputs);
	return en_blog_list_post2date1(inputs);
});
var en_blog_list_post2excerpt1 = () => {
	return `Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.`;
};
var fr_blog_list_post2excerpt1 = () => {
	return `Stratégies concrètes : chargement paresseux, découpage et optimisations à la compilation.`;
};
var es_blog_list_post2excerpt1 = () => {
	return `Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.`;
};
var de_blog_list_post2excerpt1 = () => {
	return `Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Build-Zeit.`;
};
var it_blog_list_post2excerpt1 = () => {
	return `Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni al momento della compilazione.`;
};
var pt_blog_list_post2excerpt1 = () => {
	return `Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de build.`;
};
var zh_blog_list_post2excerpt1 = () => {
	return `优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。`;
};
var ja_blog_list_post2excerpt1 = () => {
	return `遅延読み込み、コード分割、ビルド時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。`;
};
var ko_blog_list_post2excerpt1 = () => {
	return `Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.`;
};
var ru_blog_list_post2excerpt1 = () => {
	return `Практические стратегии оптимизации бандлов переводов, включая ленивую загрузку, разделение кода и оптимизацию во время сборки.`;
};
var blog_list_post2excerpt1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_blog_list_post2excerpt1(inputs);
	if (locale === "es") return es_blog_list_post2excerpt1(inputs);
	if (locale === "de") return de_blog_list_post2excerpt1(inputs);
	if (locale === "it") return it_blog_list_post2excerpt1(inputs);
	if (locale === "pt") return pt_blog_list_post2excerpt1(inputs);
	if (locale === "zh") return zh_blog_list_post2excerpt1(inputs);
	if (locale === "ja") return ja_blog_list_post2excerpt1(inputs);
	if (locale === "ko") return ko_blog_list_post2excerpt1(inputs);
	if (locale === "ru") return ru_blog_list_post2excerpt1(inputs);
	return en_blog_list_post2excerpt1(inputs);
});
var en_blog_list_post2title1 = () => {
	return `How to Reduce Your i18n Bundle by 60%`;
};
var fr_blog_list_post2title1 = () => {
	return `Réduire votre bundle i18n de 60 %`;
};
var es_blog_list_post2title1 = () => {
	return `Cómo reducir tu bundle i18n en un 60%`;
};
var de_blog_list_post2title1 = () => {
	return `Wie Sie Ihr i18n-Bundle um 60 % reduzieren`;
};
var it_blog_list_post2title1 = () => {
	return `Come ridurre il bundle i18n del 60%`;
};
var pt_blog_list_post2title1 = () => {
	return `Como reduzir seu bundle i18n em 60%`;
};
var zh_blog_list_post2title1 = () => {
	return `如何将 i18n 包大小减少 60%`;
};
var ja_blog_list_post2title1 = () => {
	return `i18nバンドルを60%削減する方法`;
};
var ko_blog_list_post2title1 = () => {
	return `How to Reduce Your i18n Bundle by 60%`;
};
var ru_blog_list_post2title1 = () => {
	return `Как уменьшить бандл i18n на 60%`;
};
var blog_list_post2title1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_blog_list_post2title1(inputs);
	if (locale === "es") return es_blog_list_post2title1(inputs);
	if (locale === "de") return de_blog_list_post2title1(inputs);
	if (locale === "it") return it_blog_list_post2title1(inputs);
	if (locale === "pt") return pt_blog_list_post2title1(inputs);
	if (locale === "zh") return zh_blog_list_post2title1(inputs);
	if (locale === "ja") return ja_blog_list_post2title1(inputs);
	if (locale === "ko") return ko_blog_list_post2title1(inputs);
	if (locale === "ru") return ru_blog_list_post2title1(inputs);
	return en_blog_list_post2title1(inputs);
});
var en_blog_list_post3category1 = () => {
	return `Analysis`;
};
var fr_blog_list_post3category1 = () => {
	return `Analyse`;
};
var es_blog_list_post3category1 = () => {
	return `Análisis`;
};
var de_blog_list_post3category1 = () => {
	return `Analyse`;
};
var it_blog_list_post3category1 = () => {
	return `Analisi`;
};
var pt_blog_list_post3category1 = () => {
	return `Análise`;
};
var zh_blog_list_post3category1 = () => {
	return `分析`;
};
var ja_blog_list_post3category1 = () => {
	return `分析`;
};
var ko_blog_list_post3category1 = () => {
	return `Analysis`;
};
var ru_blog_list_post3category1 = () => {
	return `Анализ`;
};
var blog_list_post3category1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_blog_list_post3category1(inputs);
	if (locale === "es") return es_blog_list_post3category1(inputs);
	if (locale === "de") return de_blog_list_post3category1(inputs);
	if (locale === "it") return it_blog_list_post3category1(inputs);
	if (locale === "pt") return pt_blog_list_post3category1(inputs);
	if (locale === "zh") return zh_blog_list_post3category1(inputs);
	if (locale === "ja") return ja_blog_list_post3category1(inputs);
	if (locale === "ko") return ko_blog_list_post3category1(inputs);
	if (locale === "ru") return ru_blog_list_post3category1(inputs);
	return en_blog_list_post3category1(inputs);
});
var en_blog_list_post3date1 = () => {
	return `February 28, 2026`;
};
var fr_blog_list_post3date1 = () => {
	return `28 février 2026`;
};
var es_blog_list_post3date1 = () => {
	return `28 de febrero de 2026`;
};
var de_blog_list_post3date1 = () => {
	return `28. Februar 2026`;
};
var it_blog_list_post3date1 = () => {
	return `28 febbraio 2026`;
};
var pt_blog_list_post3date1 = () => {
	return `28 de fevereiro de 2026`;
};
var zh_blog_list_post3date1 = () => {
	return `2026年2月28日`;
};
var ja_blog_list_post3date1 = () => {
	return `2026年2月28日`;
};
var ko_blog_list_post3date1 = () => {
	return `February 28, 2026`;
};
var ru_blog_list_post3date1 = () => {
	return `28 февраля 2026 г.`;
};
var blog_list_post3date1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_blog_list_post3date1(inputs);
	if (locale === "es") return es_blog_list_post3date1(inputs);
	if (locale === "de") return de_blog_list_post3date1(inputs);
	if (locale === "it") return it_blog_list_post3date1(inputs);
	if (locale === "pt") return pt_blog_list_post3date1(inputs);
	if (locale === "zh") return zh_blog_list_post3date1(inputs);
	if (locale === "ja") return ja_blog_list_post3date1(inputs);
	if (locale === "ko") return ko_blog_list_post3date1(inputs);
	if (locale === "ru") return ru_blog_list_post3date1(inputs);
	return en_blog_list_post3date1(inputs);
});
var en_blog_list_post3excerpt1 = () => {
	return `An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.`;
};
var fr_blog_list_post3excerpt1 = () => {
	return `Panorama des tendances, patterns émergents et préférences de la communauté.`;
};
var es_blog_list_post3excerpt1 = () => {
	return `Una visión general del ecosistema i18n actual en React, cubriendo tendencias, patrones emergentes y preferencias de la comunidad.`;
};
var de_blog_list_post3excerpt1 = () => {
	return `Ein Überblick über das aktuelle i18n-Ökosystem in React, der Trends, aufkommende Muster und Community-Präferenzen abdeckt.`;
};
var it_blog_list_post3excerpt1 = () => {
	return `Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.`;
};
var pt_blog_list_post3excerpt1 = () => {
	return `Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.`;
};
var zh_blog_list_post3excerpt1 = () => {
	return `React 中当前 i18n 生态系统的概述，涵盖趋势、新兴模式和社区偏好。`;
};
var ja_blog_list_post3excerpt1 = () => {
	return `トレンド、新興パターン、コミュニティの好みをカバーする、Reactにおける現在のi18nエコシステムの概要。`;
};
var ko_blog_list_post3excerpt1 = () => {
	return `An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.`;
};
var ru_blog_list_post3excerpt1 = () => {
	return `Обзор текущей экосистемы i18n в React, охватывающий тенденции, новые паттерны и предпочтения сообщества.`;
};
var blog_list_post3excerpt1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_blog_list_post3excerpt1(inputs);
	if (locale === "es") return es_blog_list_post3excerpt1(inputs);
	if (locale === "de") return de_blog_list_post3excerpt1(inputs);
	if (locale === "it") return it_blog_list_post3excerpt1(inputs);
	if (locale === "pt") return pt_blog_list_post3excerpt1(inputs);
	if (locale === "zh") return zh_blog_list_post3excerpt1(inputs);
	if (locale === "ja") return ja_blog_list_post3excerpt1(inputs);
	if (locale === "ko") return ko_blog_list_post3excerpt1(inputs);
	if (locale === "ru") return ru_blog_list_post3excerpt1(inputs);
	return en_blog_list_post3excerpt1(inputs);
});
var en_blog_list_post3title1 = () => {
	return `The State of Internationalization in React`;
};
var fr_blog_list_post3title1 = () => {
	return `État de l'internationalisation dans l'écosystème React`;
};
var es_blog_list_post3title1 = () => {
	return `El estado de la internacionalización en React`;
};
var de_blog_list_post3title1 = () => {
	return `Der Stand der Internationalisierung in React`;
};
var it_blog_list_post3title1 = () => {
	return `Lo stato dell'internazionalizzazione in React`;
};
var pt_blog_list_post3title1 = () => {
	return `O estado da internacionalização no React`;
};
var zh_blog_list_post3title1 = () => {
	return `React 国际化现状`;
};
var ja_blog_list_post3title1 = () => {
	return `Reactにおける国際化の現状`;
};
var ko_blog_list_post3title1 = () => {
	return `The State of Internationalization in React`;
};
var ru_blog_list_post3title1 = () => {
	return `Состояние интернационализации в React`;
};
var blog_list_post3title1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_blog_list_post3title1(inputs);
	if (locale === "es") return es_blog_list_post3title1(inputs);
	if (locale === "de") return de_blog_list_post3title1(inputs);
	if (locale === "it") return it_blog_list_post3title1(inputs);
	if (locale === "pt") return pt_blog_list_post3title1(inputs);
	if (locale === "zh") return zh_blog_list_post3title1(inputs);
	if (locale === "ja") return ja_blog_list_post3title1(inputs);
	if (locale === "ko") return ko_blog_list_post3title1(inputs);
	if (locale === "ru") return ru_blog_list_post3title1(inputs);
	return en_blog_list_post3title1(inputs);
});
var en_blog_list_post4category1 = () => {
	return `Tutorial`;
};
var fr_blog_list_post4category1 = () => {
	return `Tutoriel`;
};
var es_blog_list_post4category1 = () => {
	return `Tutorial`;
};
var de_blog_list_post4category1 = () => {
	return `Tutorial`;
};
var it_blog_list_post4category1 = () => {
	return `Tutorial`;
};
var pt_blog_list_post4category1 = () => {
	return `Tutorial`;
};
var zh_blog_list_post4category1 = () => {
	return `教程`;
};
var ja_blog_list_post4category1 = () => {
	return `チュートリアル`;
};
var ko_blog_list_post4category1 = () => {
	return `Tutorial`;
};
var ru_blog_list_post4category1 = () => {
	return `Туториал`;
};
var blog_list_post4category1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_blog_list_post4category1(inputs);
	if (locale === "es") return es_blog_list_post4category1(inputs);
	if (locale === "de") return de_blog_list_post4category1(inputs);
	if (locale === "it") return it_blog_list_post4category1(inputs);
	if (locale === "pt") return pt_blog_list_post4category1(inputs);
	if (locale === "zh") return zh_blog_list_post4category1(inputs);
	if (locale === "ja") return ja_blog_list_post4category1(inputs);
	if (locale === "ko") return ko_blog_list_post4category1(inputs);
	if (locale === "ru") return ru_blog_list_post4category1(inputs);
	return en_blog_list_post4category1(inputs);
});
var en_blog_list_post4date1 = () => {
	return `February 15, 2026`;
};
var fr_blog_list_post4date1 = () => {
	return `15 février 2026`;
};
var es_blog_list_post4date1 = () => {
	return `15 de febrero de 2026`;
};
var de_blog_list_post4date1 = () => {
	return `15. Februar 2026`;
};
var it_blog_list_post4date1 = () => {
	return `15 febbraio 2026`;
};
var pt_blog_list_post4date1 = () => {
	return `15 de fevereiro de 2026`;
};
var zh_blog_list_post4date1 = () => {
	return `2026年2月15日`;
};
var ja_blog_list_post4date1 = () => {
	return `2026年2月15日`;
};
var ko_blog_list_post4date1 = () => {
	return `February 15, 2026`;
};
var ru_blog_list_post4date1 = () => {
	return `15 февраля 2026 г.`;
};
var blog_list_post4date1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_blog_list_post4date1(inputs);
	if (locale === "es") return es_blog_list_post4date1(inputs);
	if (locale === "de") return de_blog_list_post4date1(inputs);
	if (locale === "it") return it_blog_list_post4date1(inputs);
	if (locale === "pt") return pt_blog_list_post4date1(inputs);
	if (locale === "zh") return zh_blog_list_post4date1(inputs);
	if (locale === "ja") return ja_blog_list_post4date1(inputs);
	if (locale === "ko") return ko_blog_list_post4date1(inputs);
	if (locale === "ru") return ru_blog_list_post4date1(inputs);
	return en_blog_list_post4date1(inputs);
});
var en_blog_list_post4excerpt1 = () => {
	return `A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.`;
};
var fr_blog_list_post4excerpt1 = () => {
	return `Guide pas à pas pour migrer une app en production avec 50 000 clés de traduction.`;
};
var es_blog_list_post4excerpt1 = () => {
	return `Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.`;
};
var de_blog_list_post4excerpt1 = () => {
	return `Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.`;
};
var it_blog_list_post4excerpt1 = () => {
	return `Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.`;
};
var pt_blog_list_post4excerpt1 = () => {
	return `Um guia passo a passo sobre a migração de um app de produção com 50.000 chaves de tradução do react-i18next para o Lingui.`;
};
var zh_blog_list_post4excerpt1 = () => {
	return `关于将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。`;
};
var ja_blog_list_post4excerpt1 = () => {
	return `50,000の翻訳キーを持つ本番アプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。`;
};
var ko_blog_list_post4excerpt1 = () => {
	return `A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.`;
};
var ru_blog_list_post4excerpt1 = () => {
	return `Пошаговое руководство по миграции продакшн-приложения с 50 000 ключей перевода с react-i18next на Lingui.`;
};
var blog_list_post4excerpt1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_blog_list_post4excerpt1(inputs);
	if (locale === "es") return es_blog_list_post4excerpt1(inputs);
	if (locale === "de") return de_blog_list_post4excerpt1(inputs);
	if (locale === "it") return it_blog_list_post4excerpt1(inputs);
	if (locale === "pt") return pt_blog_list_post4excerpt1(inputs);
	if (locale === "zh") return zh_blog_list_post4excerpt1(inputs);
	if (locale === "ja") return ja_blog_list_post4excerpt1(inputs);
	if (locale === "ko") return ko_blog_list_post4excerpt1(inputs);
	if (locale === "ru") return ru_blog_list_post4excerpt1(inputs);
	return en_blog_list_post4excerpt1(inputs);
});
var en_blog_list_post4title1 = () => {
	return `Migrating from react-i18next to Lingui`;
};
var fr_blog_list_post4title1 = () => {
	return `Migrer de react-i18next vers Lingui`;
};
var es_blog_list_post4title1 = () => {
	return `Migración de react-i18next a Lingui`;
};
var de_blog_list_post4title1 = () => {
	return `Migration von react-i18next zu Lingui`;
};
var it_blog_list_post4title1 = () => {
	return `Migrazione da react-i18next a Lingui`;
};
var pt_blog_list_post4title1 = () => {
	return `Migrando de react-i18next para o Lingui`;
};
var zh_blog_list_post4title1 = () => {
	return `从 react-i18next 迁移到 Lingui`;
};
var ja_blog_list_post4title1 = () => {
	return `react-i18nextからLinguiへの移行`;
};
var ko_blog_list_post4title1 = () => {
	return `Migrating from react-i18next to Lingui`;
};
var ru_blog_list_post4title1 = () => {
	return `Миграция с react-i18next на Lingui`;
};
var blog_list_post4title1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_blog_list_post4title1(inputs);
	if (locale === "es") return es_blog_list_post4title1(inputs);
	if (locale === "de") return de_blog_list_post4title1(inputs);
	if (locale === "it") return it_blog_list_post4title1(inputs);
	if (locale === "pt") return pt_blog_list_post4title1(inputs);
	if (locale === "zh") return zh_blog_list_post4title1(inputs);
	if (locale === "ja") return ja_blog_list_post4title1(inputs);
	if (locale === "ko") return ko_blog_list_post4title1(inputs);
	if (locale === "ru") return ru_blog_list_post4title1(inputs);
	return en_blog_list_post4title1(inputs);
});
var en_blog_list_post5category1 = () => {
	return `Analysis`;
};
var fr_blog_list_post5category1 = () => {
	return `Analyse`;
};
var es_blog_list_post5category1 = () => {
	return `Análisis`;
};
var de_blog_list_post5category1 = () => {
	return `Analyse`;
};
var it_blog_list_post5category1 = () => {
	return `Analisi`;
};
var pt_blog_list_post5category1 = () => {
	return `Análise`;
};
var zh_blog_list_post5category1 = () => {
	return `分析`;
};
var ja_blog_list_post5category1 = () => {
	return `分析`;
};
var ko_blog_list_post5category1 = () => {
	return `Analysis`;
};
var ru_blog_list_post5category1 = () => {
	return `Анализ`;
};
var blog_list_post5category1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_blog_list_post5category1(inputs);
	if (locale === "es") return es_blog_list_post5category1(inputs);
	if (locale === "de") return de_blog_list_post5category1(inputs);
	if (locale === "it") return it_blog_list_post5category1(inputs);
	if (locale === "pt") return pt_blog_list_post5category1(inputs);
	if (locale === "zh") return zh_blog_list_post5category1(inputs);
	if (locale === "ja") return ja_blog_list_post5category1(inputs);
	if (locale === "ko") return ko_blog_list_post5category1(inputs);
	if (locale === "ru") return ru_blog_list_post5category1(inputs);
	return en_blog_list_post5category1(inputs);
});
var en_blog_list_post5date1 = () => {
	return `February 1, 2026`;
};
var fr_blog_list_post5date1 = () => {
	return `1er février 2026`;
};
var es_blog_list_post5date1 = () => {
	return `1 de febrero de 2026`;
};
var de_blog_list_post5date1 = () => {
	return `1. Februar 2026`;
};
var it_blog_list_post5date1 = () => {
	return `1 febbraio 2026`;
};
var pt_blog_list_post5date1 = () => {
	return `1 de fevereiro de 2026`;
};
var zh_blog_list_post5date1 = () => {
	return `2026年2月1日`;
};
var ja_blog_list_post5date1 = () => {
	return `2026年2月1日`;
};
var ko_blog_list_post5date1 = () => {
	return `February 1, 2026`;
};
var ru_blog_list_post5date1 = () => {
	return `1 февраля 2026 г.`;
};
var blog_list_post5date1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_blog_list_post5date1(inputs);
	if (locale === "es") return es_blog_list_post5date1(inputs);
	if (locale === "de") return de_blog_list_post5date1(inputs);
	if (locale === "it") return it_blog_list_post5date1(inputs);
	if (locale === "pt") return pt_blog_list_post5date1(inputs);
	if (locale === "zh") return zh_blog_list_post5date1(inputs);
	if (locale === "ja") return ja_blog_list_post5date1(inputs);
	if (locale === "ko") return ko_blog_list_post5date1(inputs);
	if (locale === "ru") return ru_blog_list_post5date1(inputs);
	return en_blog_list_post5date1(inputs);
});
var en_blog_list_post5excerpt1 = () => {
	return `React Server Components introduce new patterns for internationalization. We explore the implications and best practices.`;
};
var fr_blog_list_post5excerpt1 = () => {
	return `Les React Server Components introduisent de nouveaux motifs pour l'i18n.`;
};
var es_blog_list_post5excerpt1 = () => {
	return `Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.`;
};
var de_blog_list_post5excerpt1 = () => {
	return `React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.`;
};
var it_blog_list_post5excerpt1 = () => {
	return `I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.`;
};
var pt_blog_list_post5excerpt1 = () => {
	return `React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e melhores práticas.`;
};
var zh_blog_list_post5excerpt1 = () => {
	return `React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。`;
};
var ja_blog_list_post5excerpt1 = () => {
	return `React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。`;
};
var ko_blog_list_post5excerpt1 = () => {
	return `React Server Components introduce new patterns for internationalization. We explore the implications and best practices.`;
};
var ru_blog_list_post5excerpt1 = () => {
	return `React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.`;
};
var blog_list_post5excerpt1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_blog_list_post5excerpt1(inputs);
	if (locale === "es") return es_blog_list_post5excerpt1(inputs);
	if (locale === "de") return de_blog_list_post5excerpt1(inputs);
	if (locale === "it") return it_blog_list_post5excerpt1(inputs);
	if (locale === "pt") return pt_blog_list_post5excerpt1(inputs);
	if (locale === "zh") return zh_blog_list_post5excerpt1(inputs);
	if (locale === "ja") return ja_blog_list_post5excerpt1(inputs);
	if (locale === "ko") return ko_blog_list_post5excerpt1(inputs);
	if (locale === "ru") return ru_blog_list_post5excerpt1(inputs);
	return en_blog_list_post5excerpt1(inputs);
});
var en_blog_list_post5title1 = () => {
	return `Server Components and i18n: What Changes?`;
};
var fr_blog_list_post5title1 = () => {
	return `Server Components et i18n : qu'est-ce qui change ?`;
};
var es_blog_list_post5title1 = () => {
	return `Server Components e i18n: ¿Qué cambia?`;
};
var de_blog_list_post5title1 = () => {
	return `Server Components und i18n: Was ändert sich?`;
};
var it_blog_list_post5title1 = () => {
	return `Server Components e i18n: cosa cambia?`;
};
var pt_blog_list_post5title1 = () => {
	return `Server Components e i18n: o que muda?`;
};
var zh_blog_list_post5title1 = () => {
	return `Server Components 与 i18n：发生了什么变化？`;
};
var ja_blog_list_post5title1 = () => {
	return `Server Componentsとi18n：何が変わるのか？`;
};
var ko_blog_list_post5title1 = () => {
	return `Server Components and i18n: What Changes?`;
};
var ru_blog_list_post5title1 = () => {
	return `Server Components и i18n: что меняется?`;
};
var blog_list_post5title1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_blog_list_post5title1(inputs);
	if (locale === "es") return es_blog_list_post5title1(inputs);
	if (locale === "de") return de_blog_list_post5title1(inputs);
	if (locale === "it") return it_blog_list_post5title1(inputs);
	if (locale === "pt") return pt_blog_list_post5title1(inputs);
	if (locale === "zh") return zh_blog_list_post5title1(inputs);
	if (locale === "ja") return ja_blog_list_post5title1(inputs);
	if (locale === "ko") return ko_blog_list_post5title1(inputs);
	if (locale === "ru") return ru_blog_list_post5title1(inputs);
	return en_blog_list_post5title1(inputs);
});
var en_blog_list_post6category1 = () => {
	return `Meta`;
};
var fr_blog_list_post6category1 = () => {
	return `Méta`;
};
var es_blog_list_post6category1 = () => {
	return `Meta`;
};
var de_blog_list_post6category1 = () => {
	return `Meta`;
};
var it_blog_list_post6category1 = () => {
	return `Meta`;
};
var pt_blog_list_post6category1 = () => {
	return `Meta`;
};
var zh_blog_list_post6category1 = () => {
	return `Meta`;
};
var ja_blog_list_post6category1 = () => {
	return `メタ`;
};
var ko_blog_list_post6category1 = () => {
	return `Meta`;
};
var ru_blog_list_post6category1 = () => {
	return `Мета`;
};
var blog_list_post6category1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_blog_list_post6category1(inputs);
	if (locale === "es") return es_blog_list_post6category1(inputs);
	if (locale === "de") return de_blog_list_post6category1(inputs);
	if (locale === "it") return it_blog_list_post6category1(inputs);
	if (locale === "pt") return pt_blog_list_post6category1(inputs);
	if (locale === "zh") return zh_blog_list_post6category1(inputs);
	if (locale === "ja") return ja_blog_list_post6category1(inputs);
	if (locale === "ko") return ko_blog_list_post6category1(inputs);
	if (locale === "ru") return ru_blog_list_post6category1(inputs);
	return en_blog_list_post6category1(inputs);
});
var en_blog_list_post6date1 = () => {
	return `January 20, 2026`;
};
var fr_blog_list_post6date1 = () => {
	return `20 janvier 2026`;
};
var es_blog_list_post6date1 = () => {
	return `20 de enero de 2026`;
};
var de_blog_list_post6date1 = () => {
	return `20. Januar 2026`;
};
var it_blog_list_post6date1 = () => {
	return `20 gennaio 2026`;
};
var pt_blog_list_post6date1 = () => {
	return `20 de janeiro de 2026`;
};
var zh_blog_list_post6date1 = () => {
	return `2026年1月20日`;
};
var ja_blog_list_post6date1 = () => {
	return `2026年1月20日`;
};
var ko_blog_list_post6date1 = () => {
	return `January 20, 2026`;
};
var ru_blog_list_post6date1 = () => {
	return `20 января 2026 г.`;
};
var blog_list_post6date1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_blog_list_post6date1(inputs);
	if (locale === "es") return es_blog_list_post6date1(inputs);
	if (locale === "de") return de_blog_list_post6date1(inputs);
	if (locale === "it") return it_blog_list_post6date1(inputs);
	if (locale === "pt") return pt_blog_list_post6date1(inputs);
	if (locale === "zh") return zh_blog_list_post6date1(inputs);
	if (locale === "ja") return ja_blog_list_post6date1(inputs);
	if (locale === "ko") return ko_blog_list_post6date1(inputs);
	if (locale === "ru") return ru_blog_list_post6date1(inputs);
	return en_blog_list_post6date1(inputs);
});
var en_blog_list_post6excerpt1 = () => {
	return `A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.`;
};
var fr_blog_list_post6excerpt1 = () => {
	return `Transparence sur l'environnement de test, les méthodes statistiques et la reproductibilité.`;
};
var es_blog_list_post6excerpt1 = () => {
	return `Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.`;
};
var de_blog_list_post6excerpt1 = () => {
	return `Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.`;
};
var it_blog_list_post6excerpt1 = () => {
	return `Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.`;
};
var pt_blog_list_post6excerpt1 = () => {
	return `Uma visão transparente da nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.`;
};
var zh_blog_list_post6excerpt1 = () => {
	return `透明地展示我们的基准测试方法，包括测试环境、统计方法和可复现性。`;
};
var ja_blog_list_post6excerpt1 = () => {
	return `テスト環境、統計手法、再現性など、私たちのベンチマーク手法を透明性を持って公開します。`;
};
var ko_blog_list_post6excerpt1 = () => {
	return `A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.`;
};
var ru_blog_list_post6excerpt1 = () => {
	return `Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.`;
};
var blog_list_post6excerpt1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_blog_list_post6excerpt1(inputs);
	if (locale === "es") return es_blog_list_post6excerpt1(inputs);
	if (locale === "de") return de_blog_list_post6excerpt1(inputs);
	if (locale === "it") return it_blog_list_post6excerpt1(inputs);
	if (locale === "pt") return pt_blog_list_post6excerpt1(inputs);
	if (locale === "zh") return zh_blog_list_post6excerpt1(inputs);
	if (locale === "ja") return ja_blog_list_post6excerpt1(inputs);
	if (locale === "ko") return ko_blog_list_post6excerpt1(inputs);
	if (locale === "ru") return ru_blog_list_post6excerpt1(inputs);
	return en_blog_list_post6excerpt1(inputs);
});
var en_blog_list_post6title1 = () => {
	return `Benchmark Methodology: How We Test`;
};
var fr_blog_list_post6title1 = () => {
	return `Méthodologie de benchmark : comment nous testons`;
};
var es_blog_list_post6title1 = () => {
	return `Metodología de benchmark: Cómo probamos`;
};
var de_blog_list_post6title1 = () => {
	return `Benchmark-Methodik: Wie wir testen`;
};
var it_blog_list_post6title1 = () => {
	return `Metodologia del benchmark: come testiamo`;
};
var pt_blog_list_post6title1 = () => {
	return `Metodologia de benchmark: como testamos`;
};
var zh_blog_list_post6title1 = () => {
	return `基准测试方法论：我们如何测试`;
};
var ja_blog_list_post6title1 = () => {
	return `ベンチマーク手法：テスト方法について`;
};
var ko_blog_list_post6title1 = () => {
	return `Benchmark Methodology: How We Test`;
};
var ru_blog_list_post6title1 = () => {
	return `Методология бенчмарка: как мы тестируем`;
};
var blog_list_post6title1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_blog_list_post6title1(inputs);
	if (locale === "es") return es_blog_list_post6title1(inputs);
	if (locale === "de") return de_blog_list_post6title1(inputs);
	if (locale === "it") return it_blog_list_post6title1(inputs);
	if (locale === "pt") return pt_blog_list_post6title1(inputs);
	if (locale === "zh") return zh_blog_list_post6title1(inputs);
	if (locale === "ja") return ja_blog_list_post6title1(inputs);
	if (locale === "ko") return ko_blog_list_post6title1(inputs);
	if (locale === "ru") return ru_blog_list_post6title1(inputs);
	return en_blog_list_post6title1(inputs);
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
	return `Mehr lesen →`;
};
var it_blog_list_readmore1 = () => {
	return `Leggi di più →`;
};
var pt_blog_list_readmore1 = () => {
	return `Ler Mais →`;
};
var zh_blog_list_readmore1 = () => {
	return `阅读更多 →`;
};
var ja_blog_list_readmore1 = () => {
	return `続きを読む →`;
};
var ko_blog_list_readmore1 = () => {
	return `Read More →`;
};
var ru_blog_list_readmore1 = () => {
	return `Читать далее →`;
};
var blog_list_readmore1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_blog_list_readmore1(inputs);
	if (locale === "es") return es_blog_list_readmore1(inputs);
	if (locale === "de") return de_blog_list_readmore1(inputs);
	if (locale === "it") return it_blog_list_readmore1(inputs);
	if (locale === "pt") return pt_blog_list_readmore1(inputs);
	if (locale === "zh") return zh_blog_list_readmore1(inputs);
	if (locale === "ja") return ja_blog_list_readmore1(inputs);
	if (locale === "ko") return ko_blog_list_readmore1(inputs);
	if (locale === "ru") return ru_blog_list_readmore1(inputs);
	return en_blog_list_readmore1(inputs);
});
var _tmpl$ = template(`<div class="grid gap-6 md:grid-cols-2">`);
var _tmpl$2 = template(`<article class="rounded-lg border border-border bg-card p-6"><div class="mb-3 flex items-center gap-3"><span class="rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground"></span><span class="text-xs text-muted-foreground"></span></div><h2 class="mb-2 text-lg font-semibold text-foreground"></h2><p class="mb-4 text-sm text-muted-foreground"></p><button type=button class="text-sm font-medium text-primary hover:underline">`);
function BlogList() {
	const posts = () => [
		{
			title: blog_list_post1title1(),
			date: blog_list_post1date1(),
			excerpt: blog_list_post1excerpt1(),
			category: blog_list_post1category1()
		},
		{
			title: blog_list_post2title1(),
			date: blog_list_post2date1(),
			excerpt: blog_list_post2excerpt1(),
			category: blog_list_post2category1()
		},
		{
			title: blog_list_post3title1(),
			date: blog_list_post3date1(),
			excerpt: blog_list_post3excerpt1(),
			category: blog_list_post3category1()
		},
		{
			title: blog_list_post4title1(),
			date: blog_list_post4date1(),
			excerpt: blog_list_post4excerpt1(),
			category: blog_list_post4category1()
		},
		{
			title: blog_list_post5title1(),
			date: blog_list_post5date1(),
			excerpt: blog_list_post5excerpt1(),
			category: blog_list_post5category1()
		},
		{
			title: blog_list_post6title1(),
			date: blog_list_post6date1(),
			excerpt: blog_list_post6excerpt1(),
			category: blog_list_post6category1()
		}
	];
	return (() => {
		var _el$ = _tmpl$();
		insert(_el$, createComponent(For, {
			get each() {
				return posts();
			},
			children: (p) => (() => {
				var _el$2 = _tmpl$2(), _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, _el$5 = _el$4.nextSibling, _el$6 = _el$3.nextSibling, _el$7 = _el$6.nextSibling, _el$8 = _el$7.nextSibling;
				insert(_el$4, () => p.category);
				insert(_el$5, () => p.date);
				insert(_el$6, () => p.title);
				insert(_el$7, () => p.excerpt);
				insert(_el$8, () => blog_list_readmore1());
				return _el$2;
			})()
		}));
		return _el$;
	})();
}
export { BlogList as default };
