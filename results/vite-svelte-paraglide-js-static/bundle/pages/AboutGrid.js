import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
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
var en_about_grid_methodologydesc1 = () => {
	return `The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.`;
};
var fr_about_grid_methodologydesc1 = () => {
	return `La même application 10 pages est construite pour chaque bibliothèque. Nous mesurons le bundle de production (rollup-plugin-visualizer), lançons des audits Lighthouse et utilisons le profilage pour capturer le rendu lors des changements de langue. Tout s'exécute en CI sur du matériel homogène pour des résultats reproductibles.`;
};
var es_about_grid_methodologydesc1 = () => {
	return `La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el bundle de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos React Profiler para capturar los tiempos de renderizado durante los cambios de idioma. Todas las pruebas se ejecutan en CI en hardware consistente para asegurar resultados reproducibles.`;
};
var de_about_grid_methodologydesc1 = () => {
	return `Die gleiche 10-seitige App wird einmal pro Bibliothek gebaut. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden den React Profiler, um die Renderzeiten während der Sprachwechsel zu erfassen. Alle Tests laufen in der CI auf konsistenter Hardware, um reproduzierbare Ergebnisse zu gewährleisten.`;
};
var it_about_grid_methodologydesc1 = () => {
	return `La stessa app di 10 pagine viene costruita una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per catturare i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.`;
};
var pt_about_grid_methodologydesc1 = () => {
	return `O mesmo app de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), executamos auditorias Lighthouse para as métricas de carregamento e usamos o React Profiler para capturar tempos de renderização durante as trocas de localidade. Todos os testes rodam em CI em hardware consistente para garantir resultados reprodutíveis.`;
};
var zh_about_grid_methodologydesc1 = () => {
	return `相同的 10 页应用为每个库构建一次。我们测量生产包（通过 rollup-plugin-visualizer），运行加载指标的 Lighthouse 审核，并使用 React Profiler 捕获语言环境切换期间的渲染时间。所有测试都在一致硬件上的 CI 中运行，以确保结果可复现。`;
};
var ja_about_grid_methodologydesc1 = () => {
	return `同じ10ページのアプリをライブラリごとに1回構築します。本番バンドルを測定し（rollup-plugin-visualizer経由）、読み込み指標のLighthouse監査を実行し、React Profilerを使用してロケール切り替え中のレンダー時間をキャプチャします。再現可能な結果を確保するために、すべてのテストは一貫したハードウェア上のCIで実行されます。`;
};
var ko_about_grid_methodologydesc1 = () => {
	return `The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.`;
};
var ru_about_grid_methodologydesc1 = () => {
	return `Одно и то же 10-страничное приложение собирается один раз для каждой библиотеки. Мы измеряем продакшн-бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для фиксации времени рендеринга при смене языка. Все тесты запускаются в CI на идентичном оборудовании для обеспечения воспроизводимости результатов.`;
};
var about_grid_methodologydesc1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_about_grid_methodologydesc1(inputs);
	if (locale === "es") return es_about_grid_methodologydesc1(inputs);
	if (locale === "de") return de_about_grid_methodologydesc1(inputs);
	if (locale === "it") return it_about_grid_methodologydesc1(inputs);
	if (locale === "pt") return pt_about_grid_methodologydesc1(inputs);
	if (locale === "zh") return zh_about_grid_methodologydesc1(inputs);
	if (locale === "ja") return ja_about_grid_methodologydesc1(inputs);
	if (locale === "ko") return ko_about_grid_methodologydesc1(inputs);
	if (locale === "ru") return ru_about_grid_methodologydesc1(inputs);
	return en_about_grid_methodologydesc1(inputs);
});
var en_about_grid_methodologytitle1 = () => {
	return `Methodology`;
};
var fr_about_grid_methodologytitle1 = () => {
	return `Méthodologie`;
};
var es_about_grid_methodologytitle1 = () => {
	return `Metodología`;
};
var de_about_grid_methodologytitle1 = () => {
	return `Methodik`;
};
var it_about_grid_methodologytitle1 = () => {
	return `Metodologia`;
};
var pt_about_grid_methodologytitle1 = () => {
	return `Metodologia`;
};
var zh_about_grid_methodologytitle1 = () => {
	return `方法论`;
};
var ja_about_grid_methodologytitle1 = () => {
	return `手法`;
};
var ko_about_grid_methodologytitle1 = () => {
	return `Methodology`;
};
var ru_about_grid_methodologytitle1 = () => {
	return `Методология`;
};
var about_grid_methodologytitle1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_about_grid_methodologytitle1(inputs);
	if (locale === "es") return es_about_grid_methodologytitle1(inputs);
	if (locale === "de") return de_about_grid_methodologytitle1(inputs);
	if (locale === "it") return it_about_grid_methodologytitle1(inputs);
	if (locale === "pt") return pt_about_grid_methodologytitle1(inputs);
	if (locale === "zh") return zh_about_grid_methodologytitle1(inputs);
	if (locale === "ja") return ja_about_grid_methodologytitle1(inputs);
	if (locale === "ko") return ko_about_grid_methodologytitle1(inputs);
	if (locale === "ru") return ru_about_grid_methodologytitle1(inputs);
	return en_about_grid_methodologytitle1(inputs);
});
var en_about_grid_whyexistsdesc2 = () => {
	return `Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.`;
};
var fr_about_grid_whyexistsdesc2 = () => {
	return `Choisir une bibliothèque i18n est une décision d'architecture à long terme. Beaucoup de comparatifs insistent sur l'ergonomie d'API, mais peu mesurent le coût performance : poids ajouté au bundle ? impact sur le rendu avec des milliers de clés ? le chargement paresseux aide-t-il vraiment ou déplace-t-il seulement le coût ? Ce benchmark répond avec des données réelles.`;
};
var es_about_grid_whyexistsdesc2 = () => {
	return `Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿Realmente ayuda la carga diferida o solo desplaza el coste? Este benchmark responde a esas preguntas con datos reales.`;
};
var de_about_grid_whyexistsdesc2 = () => {
	return `Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Konsequenzen. Die meisten Vergleiche konzentrieren sich auf die Ergonomie der API, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt es sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading tatsächlich oder verlagert es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit realen Daten.`;
};
var it_about_grid_whyexistsdesc2 = () => {
	return `Scegliere una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo delle prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.`;
};
var pt_about_grid_whyexistsdesc2 = () => {
	return `Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências a longo prazo. A maioria das comparações foca na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lento realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.`;
};
var zh_about_grid_whyexistsdesc2 = () => {
	return `选择 i18n 库是一个具有长期影响的架构决策。大多数比较关注 API 的易用性，但很少有衡量性能成本的：库为包增加了多少重量？当加载数千个翻译键时，它如何影响渲染？延迟加载是否真的有帮助，还是只是转移了成本？本基准测试通过真实数据回答了这些问题。`;
};
var ja_about_grid_whyexistsdesc2 = () => {
	return `i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使いやすさに焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリはバンドルにどれだけの重量を追加しますか？数千の翻訳キーが読み込まれたとき、レンダリングにどのように影響しますか？遅延読み込みは実際に役立ちますか、それともコストをシフトするだけですか？このベンチマークは、実際のデータでこれらの質問に答えます。`;
};
var ko_about_grid_whyexistsdesc2 = () => {
	return `Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.`;
};
var ru_about_grid_whyexistsdesc2 = () => {
	return `Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений фокусируются на удобстве API, но лишь немногие измеряют влияние на производительность: какой вес библиотека добавляет к бандлу? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Действительно ли помогает ленивая загрузка или она просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.`;
};
var about_grid_whyexistsdesc2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_about_grid_whyexistsdesc2(inputs);
	if (locale === "es") return es_about_grid_whyexistsdesc2(inputs);
	if (locale === "de") return de_about_grid_whyexistsdesc2(inputs);
	if (locale === "it") return it_about_grid_whyexistsdesc2(inputs);
	if (locale === "pt") return pt_about_grid_whyexistsdesc2(inputs);
	if (locale === "zh") return zh_about_grid_whyexistsdesc2(inputs);
	if (locale === "ja") return ja_about_grid_whyexistsdesc2(inputs);
	if (locale === "ko") return ko_about_grid_whyexistsdesc2(inputs);
	if (locale === "ru") return ru_about_grid_whyexistsdesc2(inputs);
	return en_about_grid_whyexistsdesc2(inputs);
});
var en_about_grid_whyexiststitle2 = () => {
	return `Why This Exists`;
};
var fr_about_grid_whyexiststitle2 = () => {
	return `Pourquoi ce projet existe`;
};
var es_about_grid_whyexiststitle2 = () => {
	return `Por qué existe esto`;
};
var de_about_grid_whyexiststitle2 = () => {
	return `Warum dies existiert`;
};
var it_about_grid_whyexiststitle2 = () => {
	return `Perché esiste`;
};
var pt_about_grid_whyexiststitle2 = () => {
	return `Por que isto existe`;
};
var zh_about_grid_whyexiststitle2 = () => {
	return `为什么存在这个测试`;
};
var ja_about_grid_whyexiststitle2 = () => {
	return `なぜこれが存在するのか`;
};
var ko_about_grid_whyexiststitle2 = () => {
	return `Why This Exists`;
};
var ru_about_grid_whyexiststitle2 = () => {
	return `Зачем это нужно`;
};
var about_grid_whyexiststitle2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_about_grid_whyexiststitle2(inputs);
	if (locale === "es") return es_about_grid_whyexiststitle2(inputs);
	if (locale === "de") return de_about_grid_whyexiststitle2(inputs);
	if (locale === "it") return it_about_grid_whyexiststitle2(inputs);
	if (locale === "pt") return pt_about_grid_whyexiststitle2(inputs);
	if (locale === "zh") return zh_about_grid_whyexiststitle2(inputs);
	if (locale === "ja") return ja_about_grid_whyexiststitle2(inputs);
	if (locale === "ko") return ko_about_grid_whyexiststitle2(inputs);
	if (locale === "ru") return ru_about_grid_whyexiststitle2(inputs);
	return en_about_grid_whyexiststitle2(inputs);
});
var root = $.from_html(`<div class="grid gap-8 md:grid-cols-2"><div class="rounded-lg border border-border bg-card p-6"><h2 class="mb-3 text-xl font-semibold text-foreground"> </h2> <p class="text-sm text-muted-foreground"> </p></div> <div class="rounded-lg border border-border bg-card p-6"><h2 class="mb-3 text-xl font-semibold text-foreground"> </h2> <p class="text-sm text-muted-foreground"> </p></div></div>`);
function AboutGrid($$anchor, $$props) {
	$.push($$props, false);
	$.init();
	var div = root();
	var div_1 = $.child(div);
	var h2 = $.child(div_1);
	var text = $.only_child(h2, true);
	var p = $.sibling(h2, 2);
	var text_1 = $.only_child(p, true);
	$.reset(div_1);
	var div_2 = $.sibling(div_1, 2);
	var h2_1 = $.child(div_2);
	var text_2 = $.only_child(h2_1, true);
	var p_1 = $.sibling(h2_1, 2);
	var text_3 = $.only_child(p_1, true);
	$.reset(div_2);
	$.reset(div);
	$.template_effect(($0, $1, $2, $3) => {
		$.set_text(text, $0);
		$.set_text(text_1, $1);
		$.set_text(text_2, $2);
		$.set_text(text_3, $3);
	}, [
		() => about_grid_whyexiststitle2(),
		() => about_grid_whyexistsdesc2(),
		() => about_grid_methodologytitle1(),
		() => about_grid_methodologydesc1()
	]);
	$.append($$anchor, div);
	$.pop();
}
export { AboutGrid as default };
