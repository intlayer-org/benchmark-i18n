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
var en_about_whatwemeasure_title2 = () => {
	return `What We Measure`;
};
var fr_about_whatwemeasure_title2 = () => {
	return `Ce que nous mesurons`;
};
var es_about_whatwemeasure_title2 = () => {
	return `Qué medimos`;
};
var de_about_whatwemeasure_title2 = () => {
	return `Was wir messen`;
};
var it_about_whatwemeasure_title2 = () => {
	return `Cosa misuriamo`;
};
var pt_about_whatwemeasure_title2 = () => {
	return `O que medimos`;
};
var zh_about_whatwemeasure_title2 = () => {
	return `衡量指标`;
};
var ja_about_whatwemeasure_title2 = () => {
	return `測定項目`;
};
var ko_about_whatwemeasure_title2 = () => {
	return `What We Measure`;
};
var ru_about_whatwemeasure_title2 = () => {
	return `Что мы измеряем`;
};
var about_whatwemeasure_title2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_whatwemeasure_title2(inputs);
	if (locale === "fr") return fr_about_whatwemeasure_title2(inputs);
	if (locale === "es") return es_about_whatwemeasure_title2(inputs);
	if (locale === "de") return de_about_whatwemeasure_title2(inputs);
	if (locale === "it") return it_about_whatwemeasure_title2(inputs);
	if (locale === "pt") return pt_about_whatwemeasure_title2(inputs);
	if (locale === "zh") return zh_about_whatwemeasure_title2(inputs);
	if (locale === "ja") return ja_about_whatwemeasure_title2(inputs);
	if (locale === "ko") return ko_about_whatwemeasure_title2(inputs);
	return ru_about_whatwemeasure_title2(inputs);
});
var en_about_whatwemeasure_bundlesizeimpact4 = () => {
	return `Bundle size impact`;
};
var fr_about_whatwemeasure_bundlesizeimpact4 = () => {
	return `Impact sur la taille du bundle`;
};
var es_about_whatwemeasure_bundlesizeimpact4 = () => {
	return `Impacto en el tamaño del bundle`;
};
var de_about_whatwemeasure_bundlesizeimpact4 = () => {
	return `Auswirkungen auf die Bundle-Größe`;
};
var it_about_whatwemeasure_bundlesizeimpact4 = () => {
	return `Impatto sulla dimensione del bundle`;
};
var pt_about_whatwemeasure_bundlesizeimpact4 = () => {
	return `Impacto no tamanho do bundle`;
};
var zh_about_whatwemeasure_bundlesizeimpact4 = () => {
	return `包大小影响`;
};
var ja_about_whatwemeasure_bundlesizeimpact4 = () => {
	return `バンドルサイズへの影響`;
};
var ko_about_whatwemeasure_bundlesizeimpact4 = () => {
	return `Bundle size impact`;
};
var ru_about_whatwemeasure_bundlesizeimpact4 = () => {
	return `Влияние на размер бандла`;
};
var about_whatwemeasure_bundlesizeimpact4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_whatwemeasure_bundlesizeimpact4(inputs);
	if (locale === "fr") return fr_about_whatwemeasure_bundlesizeimpact4(inputs);
	if (locale === "es") return es_about_whatwemeasure_bundlesizeimpact4(inputs);
	if (locale === "de") return de_about_whatwemeasure_bundlesizeimpact4(inputs);
	if (locale === "it") return it_about_whatwemeasure_bundlesizeimpact4(inputs);
	if (locale === "pt") return pt_about_whatwemeasure_bundlesizeimpact4(inputs);
	if (locale === "zh") return zh_about_whatwemeasure_bundlesizeimpact4(inputs);
	if (locale === "ja") return ja_about_whatwemeasure_bundlesizeimpact4(inputs);
	if (locale === "ko") return ko_about_whatwemeasure_bundlesizeimpact4(inputs);
	return ru_about_whatwemeasure_bundlesizeimpact4(inputs);
});
var en_about_whatwemeasure_bundlesizeimpactdesc5 = () => {
	return `The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.`;
};
var fr_about_whatwemeasure_bundlesizeimpactdesc5 = () => {
	return `Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers sont inclus — impact direct sur les réseaux lents.`;
};
var es_about_whatwemeasure_bundlesizeimpactdesc5 = () => {
	return `Los bytes adicionales de JavaScript enviados a los usuarios cuando se incluyen la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.`;
};
var de_about_whatwemeasure_bundlesizeimpactdesc5 = () => {
	return `Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Downloadzeit in langsamen Netzwerken aus.`;
};
var it_about_whatwemeasure_bundlesizeimpactdesc5 = () => {
	return `I byte JavaScript aggiuntivi inviati agli utenti quando vengono incluse la libreria i18n e i suoi file di traduzione. Ciò influisce direttamente sul tempo di download su reti lente.`;
};
var pt_about_whatwemeasure_bundlesizeimpactdesc5 = () => {
	return `Os bytes JavaScript adicionais enviados aos usuários quando a biblioteca i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.`;
};
var zh_about_whatwemeasure_bundlesizeimpactdesc5 = () => {
	return `包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络下的下载时间。`;
};
var ja_about_whatwemeasure_bundlesizeimpactdesc5 = () => {
	return `i18nライブラリとその翻訳ファイルが含まれるときにユーザーに送信される追加のJavaScriptバイト。これは、低速なネットワークでのダウンロード時間に直接影響します。`;
};
var ko_about_whatwemeasure_bundlesizeimpactdesc5 = () => {
	return `The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.`;
};
var ru_about_whatwemeasure_bundlesizeimpactdesc5 = () => {
	return `Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.`;
};
var about_whatwemeasure_bundlesizeimpactdesc5 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_whatwemeasure_bundlesizeimpactdesc5(inputs);
	if (locale === "fr") return fr_about_whatwemeasure_bundlesizeimpactdesc5(inputs);
	if (locale === "es") return es_about_whatwemeasure_bundlesizeimpactdesc5(inputs);
	if (locale === "de") return de_about_whatwemeasure_bundlesizeimpactdesc5(inputs);
	if (locale === "it") return it_about_whatwemeasure_bundlesizeimpactdesc5(inputs);
	if (locale === "pt") return pt_about_whatwemeasure_bundlesizeimpactdesc5(inputs);
	if (locale === "zh") return zh_about_whatwemeasure_bundlesizeimpactdesc5(inputs);
	if (locale === "ja") return ja_about_whatwemeasure_bundlesizeimpactdesc5(inputs);
	if (locale === "ko") return ko_about_whatwemeasure_bundlesizeimpactdesc5(inputs);
	return ru_about_whatwemeasure_bundlesizeimpactdesc5(inputs);
});
var en_about_whatwemeasure_renderingoverhead3 = () => {
	return `Rendering overhead`;
};
var fr_about_whatwemeasure_renderingoverhead3 = () => {
	return `Surcharge de rendu`;
};
var es_about_whatwemeasure_renderingoverhead3 = () => {
	return `Sobrecarga de renderizado`;
};
var de_about_whatwemeasure_renderingoverhead3 = () => {
	return `Rendering-Overhead`;
};
var it_about_whatwemeasure_renderingoverhead3 = () => {
	return `Sovrapprezzo di rendering`;
};
var pt_about_whatwemeasure_renderingoverhead3 = () => {
	return `Sobrecarga de renderização`;
};
var zh_about_whatwemeasure_renderingoverhead3 = () => {
	return `渲染开销`;
};
var ja_about_whatwemeasure_renderingoverhead3 = () => {
	return `レンダリングのオーバーヘッド`;
};
var ko_about_whatwemeasure_renderingoverhead3 = () => {
	return `Rendering overhead`;
};
var ru_about_whatwemeasure_renderingoverhead3 = () => {
	return `Накладные расходы на рендеринг`;
};
var about_whatwemeasure_renderingoverhead3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_whatwemeasure_renderingoverhead3(inputs);
	if (locale === "fr") return fr_about_whatwemeasure_renderingoverhead3(inputs);
	if (locale === "es") return es_about_whatwemeasure_renderingoverhead3(inputs);
	if (locale === "de") return de_about_whatwemeasure_renderingoverhead3(inputs);
	if (locale === "it") return it_about_whatwemeasure_renderingoverhead3(inputs);
	if (locale === "pt") return pt_about_whatwemeasure_renderingoverhead3(inputs);
	if (locale === "zh") return zh_about_whatwemeasure_renderingoverhead3(inputs);
	if (locale === "ja") return ja_about_whatwemeasure_renderingoverhead3(inputs);
	if (locale === "ko") return ko_about_whatwemeasure_renderingoverhead3(inputs);
	return ru_about_whatwemeasure_renderingoverhead3(inputs);
});
var en_about_whatwemeasure_renderingoverheaddesc4 = () => {
	return `How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.`;
};
var fr_about_whatwemeasure_renderingoverheaddesc4 = () => {
	return `Temps supplémentaire ajouté au cycle de rendu. Les bibliothèques qui injectent les traductions via un seul provider de contexte peuvent provoquer des re-rendus inutiles.`;
};
var es_about_whatwemeasure_renderingoverheaddesc4 = () => {
	return `Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar re-renderizados innecesarios en todo el árbol de componentes.`;
};
var de_about_whatwemeasure_renderingoverheaddesc4 = () => {
	return `Wie viel zusätzliche Zeit die Bibliothek zum Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontextanbieter injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.`;
};
var it_about_whatwemeasure_renderingoverheaddesc4 = () => {
	return `Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.`;
};
var pt_about_whatwemeasure_renderingoverheaddesc4 = () => {
	return `Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções através de um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes.`;
};
var zh_about_whatwemeasure_renderingoverheaddesc4 = () => {
	return `库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树的不必要重新渲染。`;
};
var ja_about_whatwemeasure_renderingoverheaddesc4 = () => {
	return `ライブラリがReactのレンダーサイクルに追加する余分な時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。`;
};
var ko_about_whatwemeasure_renderingoverheaddesc4 = () => {
	return `How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.`;
};
var ru_about_whatwemeasure_renderingoverheaddesc4 = () => {
	return `Сколько дополнительного времени библиотека добавляет к циклу рендеринга React. Библиотеки, которые внедряют переводы через единый провайдер контекста, могут вызывать ненужные повторные рендеринги по всему дереву компонентов.`;
};
var about_whatwemeasure_renderingoverheaddesc4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_whatwemeasure_renderingoverheaddesc4(inputs);
	if (locale === "fr") return fr_about_whatwemeasure_renderingoverheaddesc4(inputs);
	if (locale === "es") return es_about_whatwemeasure_renderingoverheaddesc4(inputs);
	if (locale === "de") return de_about_whatwemeasure_renderingoverheaddesc4(inputs);
	if (locale === "it") return it_about_whatwemeasure_renderingoverheaddesc4(inputs);
	if (locale === "pt") return pt_about_whatwemeasure_renderingoverheaddesc4(inputs);
	if (locale === "zh") return zh_about_whatwemeasure_renderingoverheaddesc4(inputs);
	if (locale === "ja") return ja_about_whatwemeasure_renderingoverheaddesc4(inputs);
	if (locale === "ko") return ko_about_whatwemeasure_renderingoverheaddesc4(inputs);
	return ru_about_whatwemeasure_renderingoverheaddesc4(inputs);
});
var en_about_whatwemeasure_hydrationcost3 = () => {
	return `Hydration cost`;
};
var fr_about_whatwemeasure_hydrationcost3 = () => {
	return `Coût d'hydratation`;
};
var es_about_whatwemeasure_hydrationcost3 = () => {
	return `Coste de hidratación`;
};
var de_about_whatwemeasure_hydrationcost3 = () => {
	return `Hydrierungskosten`;
};
var it_about_whatwemeasure_hydrationcost3 = () => {
	return `Costo di idratazione`;
};
var pt_about_whatwemeasure_hydrationcost3 = () => {
	return `Custo de hidratação`;
};
var zh_about_whatwemeasure_hydrationcost3 = () => {
	return `注水成本`;
};
var ja_about_whatwemeasure_hydrationcost3 = () => {
	return `ハイドレーションコスト`;
};
var ko_about_whatwemeasure_hydrationcost3 = () => {
	return `Hydration cost`;
};
var ru_about_whatwemeasure_hydrationcost3 = () => {
	return `Стоимость гидратации`;
};
var about_whatwemeasure_hydrationcost3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_whatwemeasure_hydrationcost3(inputs);
	if (locale === "fr") return fr_about_whatwemeasure_hydrationcost3(inputs);
	if (locale === "es") return es_about_whatwemeasure_hydrationcost3(inputs);
	if (locale === "de") return de_about_whatwemeasure_hydrationcost3(inputs);
	if (locale === "it") return it_about_whatwemeasure_hydrationcost3(inputs);
	if (locale === "pt") return pt_about_whatwemeasure_hydrationcost3(inputs);
	if (locale === "zh") return zh_about_whatwemeasure_hydrationcost3(inputs);
	if (locale === "ja") return ja_about_whatwemeasure_hydrationcost3(inputs);
	if (locale === "ko") return ko_about_whatwemeasure_hydrationcost3(inputs);
	return ru_about_whatwemeasure_hydrationcost3(inputs);
});
var en_about_whatwemeasure_hydrationcostdesc4 = () => {
	return `During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.`;
};
var fr_about_whatwemeasure_hydrationcostdesc4 = () => {
	return `En SSR, les données de traduction sont sérialisées dans le HTML. De gros dictionnaires alourdissent la page et ralentissent l'hydratation.`;
};
var es_about_whatwemeasure_hydrationcostdesc4 = () => {
	return `Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan el payload HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.`;
};
var de_about_whatwemeasure_hydrationcostdesc4 = () => {
	return `Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Verzeichnisse erhöhen die HTML-Nutzlast und verlangsamen die Hydrierung — den Moment, in dem die Seite interaktiv wird.`;
};
var it_about_whatwemeasure_hydrationcostdesc4 = () => {
	return `Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione — il momento in cui la pagina diventa interattiva.`;
};
var pt_about_whatwemeasure_hydrationcostdesc4 = () => {
	return `Durante o SSR, os dados de tradução são serializados no HTML. Dicionários grandes aumentam o payload HTML e retardam a hidratação — o momento em que a página se torna interativa.`;
};
var zh_about_whatwemeasure_hydrationcostdesc4 = () => {
	return `在 SSR 期间，翻译数据被序列化到 HTML 中。大型字典会增加 HTML 负载并减慢注水速度 — 即页面变得可交互的时刻。`;
};
var ja_about_whatwemeasure_hydrationcostdesc4 = () => {
	return `SSR中、翻訳データはHTMLにシリアル化されます。巨大な辞書はHTMLペイロードを増加させ、ページがインタラクティブになるまでのハイドレーションを遅らせます。`;
};
var ko_about_whatwemeasure_hydrationcostdesc4 = () => {
	return `During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.`;
};
var ru_about_whatwemeasure_hydrationcostdesc4 = () => {
	return `Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем полезной нагрузки HTML и замедляют гидратацию — момент, когда страница становится интерактивной.`;
};
var about_whatwemeasure_hydrationcostdesc4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_whatwemeasure_hydrationcostdesc4(inputs);
	if (locale === "fr") return fr_about_whatwemeasure_hydrationcostdesc4(inputs);
	if (locale === "es") return es_about_whatwemeasure_hydrationcostdesc4(inputs);
	if (locale === "de") return de_about_whatwemeasure_hydrationcostdesc4(inputs);
	if (locale === "it") return it_about_whatwemeasure_hydrationcostdesc4(inputs);
	if (locale === "pt") return pt_about_whatwemeasure_hydrationcostdesc4(inputs);
	if (locale === "zh") return zh_about_whatwemeasure_hydrationcostdesc4(inputs);
	if (locale === "ja") return ja_about_whatwemeasure_hydrationcostdesc4(inputs);
	if (locale === "ko") return ko_about_whatwemeasure_hydrationcostdesc4(inputs);
	return ru_about_whatwemeasure_hydrationcostdesc4(inputs);
});
var en_about_whatwemeasure_lazyloading3 = () => {
	return `Lazy loading effectiveness`;
};
var fr_about_whatwemeasure_lazyloading3 = () => {
	return `Efficacité du chargement paresseux`;
};
var es_about_whatwemeasure_lazyloading3 = () => {
	return `Eficacia de la carga diferida`;
};
var de_about_whatwemeasure_lazyloading3 = () => {
	return `Effektivität von Lazy Loading`;
};
var it_about_whatwemeasure_lazyloading3 = () => {
	return `Efficacia del caricamento pigro`;
};
var pt_about_whatwemeasure_lazyloading3 = () => {
	return `Eficácia do carregamento lento`;
};
var zh_about_whatwemeasure_lazyloading3 = () => {
	return `延迟加载有效性`;
};
var ja_about_whatwemeasure_lazyloading3 = () => {
	return `遅延読み込みの有効性`;
};
var ko_about_whatwemeasure_lazyloading3 = () => {
	return `Lazy loading effectiveness`;
};
var ru_about_whatwemeasure_lazyloading3 = () => {
	return `Эффективность ленивой загрузки`;
};
var about_whatwemeasure_lazyloading3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_whatwemeasure_lazyloading3(inputs);
	if (locale === "fr") return fr_about_whatwemeasure_lazyloading3(inputs);
	if (locale === "es") return es_about_whatwemeasure_lazyloading3(inputs);
	if (locale === "de") return de_about_whatwemeasure_lazyloading3(inputs);
	if (locale === "it") return it_about_whatwemeasure_lazyloading3(inputs);
	if (locale === "pt") return pt_about_whatwemeasure_lazyloading3(inputs);
	if (locale === "zh") return zh_about_whatwemeasure_lazyloading3(inputs);
	if (locale === "ja") return ja_about_whatwemeasure_lazyloading3(inputs);
	if (locale === "ko") return ko_about_whatwemeasure_lazyloading3(inputs);
	return ru_about_whatwemeasure_lazyloading3(inputs);
});
var en_about_whatwemeasure_lazyloadingdesc4 = () => {
	return `Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).`;
};
var fr_about_whatwemeasure_lazyloadingdesc4 = () => {
	return `Le découpage par route ou espace de noms réduit-il vraiment la charge initiale, et quels compromis cela introduit (cascade, FOUC, cache) ?`;
};
var es_about_whatwemeasure_lazyloadingdesc4 = () => {
	return `Si dividir las traducciones por ruta o espacio de nombres realmente reduce la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché).`;
};
var de_about_whatwemeasure_lazyloadingdesc4 = () => {
	return `Ob das Aufteilen von Übersetzungen nach Route oder Namespace die anfängliche Last tatsächlich reduziert und welche Kompromisse es mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).`;
};
var it_about_whatwemeasure_lazyloadingdesc4 = () => {
	return `Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).`;
};
var pt_about_whatwemeasure_lazyloadingdesc4 = () => {
	return `Se dividir as traduções por rota ou namespace realmente reduz a carga inicial e quais trade-offs isso introduz (requisições em cascata, FOUC, complexidade de cache).`;
};
var zh_about_whatwemeasure_lazyloadingdesc4 = () => {
	return `按路由或命名空间拆分翻译是否确实减少了初始加载，以及它引入了哪些权衡（瀑布流请求、FOUC、缓存复杂性）。`;
};
var ja_about_whatwemeasure_lazyloadingdesc4 = () => {
	return `ルートごとまたは名前空間ごとに翻訳を分割することが実際に初期負荷を軽減するかどうか、またどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）が導入されるか。`;
};
var ko_about_whatwemeasure_lazyloadingdesc4 = () => {
	return `Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).`;
};
var ru_about_whatwemeasure_lazyloadingdesc4 = () => {
	return `Снижает ли разделение переводов по маршрутам или пространствам имен фактическую начальную нагрузку, и какие компромиссы это вносит (каскадные запросы, FOUC, сложность кэширования).`;
};
var about_whatwemeasure_lazyloadingdesc4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_whatwemeasure_lazyloadingdesc4(inputs);
	if (locale === "fr") return fr_about_whatwemeasure_lazyloadingdesc4(inputs);
	if (locale === "es") return es_about_whatwemeasure_lazyloadingdesc4(inputs);
	if (locale === "de") return de_about_whatwemeasure_lazyloadingdesc4(inputs);
	if (locale === "it") return it_about_whatwemeasure_lazyloadingdesc4(inputs);
	if (locale === "pt") return pt_about_whatwemeasure_lazyloadingdesc4(inputs);
	if (locale === "zh") return zh_about_whatwemeasure_lazyloadingdesc4(inputs);
	if (locale === "ja") return ja_about_whatwemeasure_lazyloadingdesc4(inputs);
	if (locale === "ko") return ko_about_whatwemeasure_lazyloadingdesc4(inputs);
	return ru_about_whatwemeasure_lazyloadingdesc4(inputs);
});
var en_about_whatwemeasure_localeswitch3 = () => {
	return `Locale switch speed`;
};
var fr_about_whatwemeasure_localeswitch3 = () => {
	return `Vitesse de changement de langue`;
};
var es_about_whatwemeasure_localeswitch3 = () => {
	return `Velocidad de cambio de idioma`;
};
var de_about_whatwemeasure_localeswitch3 = () => {
	return `Geschwindigkeit des Sprachwechsels`;
};
var it_about_whatwemeasure_localeswitch3 = () => {
	return `Velocità di cambio lingua`;
};
var pt_about_whatwemeasure_localeswitch3 = () => {
	return `Velocidade de troca de localidade`;
};
var zh_about_whatwemeasure_localeswitch3 = () => {
	return `语言环境切换速度`;
};
var ja_about_whatwemeasure_localeswitch3 = () => {
	return `ロケール切り替え速度`;
};
var ko_about_whatwemeasure_localeswitch3 = () => {
	return `Locale switch speed`;
};
var ru_about_whatwemeasure_localeswitch3 = () => {
	return `Скорость переключения языка`;
};
var about_whatwemeasure_localeswitch3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_whatwemeasure_localeswitch3(inputs);
	if (locale === "fr") return fr_about_whatwemeasure_localeswitch3(inputs);
	if (locale === "es") return es_about_whatwemeasure_localeswitch3(inputs);
	if (locale === "de") return de_about_whatwemeasure_localeswitch3(inputs);
	if (locale === "it") return it_about_whatwemeasure_localeswitch3(inputs);
	if (locale === "pt") return pt_about_whatwemeasure_localeswitch3(inputs);
	if (locale === "zh") return zh_about_whatwemeasure_localeswitch3(inputs);
	if (locale === "ja") return ja_about_whatwemeasure_localeswitch3(inputs);
	if (locale === "ko") return ko_about_whatwemeasure_localeswitch3(inputs);
	return ru_about_whatwemeasure_localeswitch3(inputs);
});
var en_about_whatwemeasure_localeswitchdesc4 = () => {
	return `How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.`;
};
var fr_about_whatwemeasure_localeswitchdesc4 = () => {
	return `À quelle vitesse l'application peut basculer de langue à l'exécution — récupération des traductions, re-rendu, mise à jour du DOM.`;
};
var es_about_whatwemeasure_localeswitchdesc4 = () => {
	return `Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.`;
};
var de_about_whatwemeasure_localeswitchdesc4 = () => {
	return `Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderns von Komponenten und der Aktualisierung des DOM.`;
};
var it_about_whatwemeasure_localeswitchdesc4 = () => {
	return `Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione — inclusi il recupero delle nuove traduzioni, il rendering dei componenti e l'aggiornamento del DOM.`;
};
var pt_about_whatwemeasure_localeswitchdesc4 = () => {
	return `Quão rápido o app pode alternar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a renderização de componentes e a atualização do DOM.`;
};
var zh_about_whatwemeasure_localeswitchdesc4 = () => {
	return `应用程序在运行时从一种语言切换到另一种语言的速度 — 包括获取新翻译、重新渲染组件和更新 DOM。`;
};
var ja_about_whatwemeasure_localeswitchdesc4 = () => {
	return `実行時にある言語から別の言語にどれだけ速く切り替えられるか。新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新が含まれます。`;
};
var ko_about_whatwemeasure_localeswitchdesc4 = () => {
	return `How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.`;
};
var ru_about_whatwemeasure_localeswitchdesc4 = () => {
	return `Как быстро приложение может переключиться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.`;
};
var about_whatwemeasure_localeswitchdesc4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_about_whatwemeasure_localeswitchdesc4(inputs);
	if (locale === "fr") return fr_about_whatwemeasure_localeswitchdesc4(inputs);
	if (locale === "es") return es_about_whatwemeasure_localeswitchdesc4(inputs);
	if (locale === "de") return de_about_whatwemeasure_localeswitchdesc4(inputs);
	if (locale === "it") return it_about_whatwemeasure_localeswitchdesc4(inputs);
	if (locale === "pt") return pt_about_whatwemeasure_localeswitchdesc4(inputs);
	if (locale === "zh") return zh_about_whatwemeasure_localeswitchdesc4(inputs);
	if (locale === "ja") return ja_about_whatwemeasure_localeswitchdesc4(inputs);
	if (locale === "ko") return ko_about_whatwemeasure_localeswitchdesc4(inputs);
	return ru_about_whatwemeasure_localeswitchdesc4(inputs);
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
var root_1 = $.from_html(`<li class="rounded-md border border-border p-4"><span class="block text-sm font-bold text-primary"> </span> <span class="mt-1 block text-sm text-muted-foreground"> </span></li>`);
var root = $.from_html(`<section class="mx-auto mt-12 max-w-3xl"><h2 class="mb-4 text-2xl font-bold text-foreground"> </h2> <ul class="space-y-4"></ul></section>`);
function WhatWeMeasure($$anchor, $$props) {
	$.push($$props, true);
	const $route = () => $.store_get(route, "$route", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	const currentLocale = $.derived(() => $route().kind === "ok" ? $route().locale : "en");
	const metrics = $.derived(() => {
		$.get(currentLocale);
		return [
			{
				metric: about_whatwemeasure_bundlesizeimpact4(),
				desc: about_whatwemeasure_bundlesizeimpactdesc5()
			},
			{
				metric: about_whatwemeasure_renderingoverhead3(),
				desc: about_whatwemeasure_renderingoverheaddesc4()
			},
			{
				metric: about_whatwemeasure_hydrationcost3(),
				desc: about_whatwemeasure_hydrationcostdesc4()
			},
			{
				metric: about_whatwemeasure_lazyloading3(),
				desc: about_whatwemeasure_lazyloadingdesc4()
			},
			{
				metric: about_whatwemeasure_localeswitch3(),
				desc: about_whatwemeasure_localeswitchdesc4()
			}
		];
	});
	var section = root();
	var h2 = $.child(section);
	var text = $.child(h2, true);
	$.reset(h2);
	var ul = $.sibling(h2, 2);
	$.each(ul, 21, () => $.get(metrics), $.index, ($$anchor, item) => {
		var li = root_1();
		var span = $.child(li);
		var text_1 = $.child(span, true);
		$.reset(span);
		var span_1 = $.sibling(span, 2);
		var text_2 = $.child(span_1, true);
		$.reset(span_1);
		$.reset(li);
		$.template_effect(() => {
			$.set_text(text_1, $.get(item).metric);
			$.set_text(text_2, $.get(item).desc);
		});
		$.append($$anchor, li);
	});
	$.reset(ul);
	$.reset(section);
	$.template_effect(($0) => $.set_text(text, $0), [() => about_whatwemeasure_title2()]);
	$.append($$anchor, section);
	$.pop();
	$$cleanup();
}
export { WhatWeMeasure as default };
