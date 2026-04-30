import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
import { onMount } from "svelte";
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
var en_home_understandingimpact_title1 = () => {
	return `Understanding the Impact`;
};
var fr_home_understandingimpact_title1 = () => {
	return `Comprendre l'impact`;
};
var es_home_understandingimpact_title1 = () => {
	return `Entendiendo el impacto`;
};
var de_home_understandingimpact_title1 = () => {
	return `Die Auswirkungen verstehen`;
};
var it_home_understandingimpact_title1 = () => {
	return `Capire l'impatto`;
};
var pt_home_understandingimpact_title1 = () => {
	return `Entendendo o impacto`;
};
var zh_home_understandingimpact_title1 = () => {
	return `理解影响`;
};
var ja_home_understandingimpact_title1 = () => {
	return `影響を理解する`;
};
var ko_home_understandingimpact_title1 = () => {
	return `Understanding the Impact`;
};
var ru_home_understandingimpact_title1 = () => {
	return `Понимание влияния`;
};
var home_understandingimpact_title1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_title1(inputs);
	if (locale === "fr") return fr_home_understandingimpact_title1(inputs);
	if (locale === "es") return es_home_understandingimpact_title1(inputs);
	if (locale === "de") return de_home_understandingimpact_title1(inputs);
	if (locale === "it") return it_home_understandingimpact_title1(inputs);
	if (locale === "pt") return pt_home_understandingimpact_title1(inputs);
	if (locale === "zh") return zh_home_understandingimpact_title1(inputs);
	if (locale === "ja") return ja_home_understandingimpact_title1(inputs);
	if (locale === "ko") return ko_home_understandingimpact_title1(inputs);
	return ru_home_understandingimpact_title1(inputs);
});
var en_home_understandingimpact_singlejsontitle3 = () => {
	return `Why a single large JSON can hurt performance`;
};
var fr_home_understandingimpact_singlejsontitle3 = () => {
	return `Pourquoi un unique gros JSON peut nuire aux performances`;
};
var es_home_understandingimpact_singlejsontitle3 = () => {
	return `Por qué un solo JSON grande puede perjudicar el rendimiento`;
};
var de_home_understandingimpact_singlejsontitle3 = () => {
	return `Warum ein einzelnes großes JSON die Leistung beeinträchtigen kann`;
};
var it_home_understandingimpact_singlejsontitle3 = () => {
	return `Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni`;
};
var pt_home_understandingimpact_singlejsontitle3 = () => {
	return `Por que um único JSON grande pode prejudicar o desempenho`;
};
var zh_home_understandingimpact_singlejsontitle3 = () => {
	return `为什么单个大型 JSON 会损害性能`;
};
var ja_home_understandingimpact_singlejsontitle3 = () => {
	return `なぜ1つの大きなJSONがパフォーマンスを低下させるのか`;
};
var ko_home_understandingimpact_singlejsontitle3 = () => {
	return `Why a single large JSON can hurt performance`;
};
var ru_home_understandingimpact_singlejsontitle3 = () => {
	return `Почему один большой JSON может снизить производительность`;
};
var home_understandingimpact_singlejsontitle3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_singlejsontitle3(inputs);
	if (locale === "fr") return fr_home_understandingimpact_singlejsontitle3(inputs);
	if (locale === "es") return es_home_understandingimpact_singlejsontitle3(inputs);
	if (locale === "de") return de_home_understandingimpact_singlejsontitle3(inputs);
	if (locale === "it") return it_home_understandingimpact_singlejsontitle3(inputs);
	if (locale === "pt") return pt_home_understandingimpact_singlejsontitle3(inputs);
	if (locale === "zh") return zh_home_understandingimpact_singlejsontitle3(inputs);
	if (locale === "ja") return ja_home_understandingimpact_singlejsontitle3(inputs);
	if (locale === "ko") return ko_home_understandingimpact_singlejsontitle3(inputs);
	return ru_home_understandingimpact_singlejsontitle3(inputs);
});
var en_home_understandingimpact_singlejsonintro3 = () => {
	return `Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:`;
};
var fr_home_understandingimpact_singlejsonintro3 = () => {
	return `Beaucoup de bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsqu'il est volumineux (milliers de clés), chaque composant qui consomme des traductions garde une référence à tout le dictionnaire. Cela signifie :`;
};
var es_home_understandingimpact_singlejsonintro3 = () => {
	return `Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:`;
};
var de_home_understandingimpact_singlejsonintro3 = () => {
	return `Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verbraucht, eine Referenz auf das gesamte Verzeichnis. Das bedeutet:`;
};
var it_home_understandingimpact_singlejsonintro3 = () => {
	return `Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:`;
};
var pt_home_understandingimpact_singlejsonintro3 = () => {
	return `Muitas bibliotecas i18n armazenam traduções em um único objeto JSON fornecido via contexto React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isso significa:`;
};
var zh_home_understandingimpact_singlejsonintro3 = () => {
	return `许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会保留对整个字典的引用。这意味着：`;
};
var ja_home_understandingimpact_singlejsonintro3 = () => {
	return `多くのi18nライブラリは、Reactコンテキストを介して提供される単一のJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい場合（数千のキー）、翻訳を使用するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：`;
};
var ko_home_understandingimpact_singlejsonintro3 = () => {
	return `Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:`;
};
var ru_home_understandingimpact_singlejsonintro3 = () => {
	return `Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:`;
};
var home_understandingimpact_singlejsonintro3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_singlejsonintro3(inputs);
	if (locale === "fr") return fr_home_understandingimpact_singlejsonintro3(inputs);
	if (locale === "es") return es_home_understandingimpact_singlejsonintro3(inputs);
	if (locale === "de") return de_home_understandingimpact_singlejsonintro3(inputs);
	if (locale === "it") return it_home_understandingimpact_singlejsonintro3(inputs);
	if (locale === "pt") return pt_home_understandingimpact_singlejsonintro3(inputs);
	if (locale === "zh") return zh_home_understandingimpact_singlejsonintro3(inputs);
	if (locale === "ja") return ja_home_understandingimpact_singlejsonintro3(inputs);
	if (locale === "ko") return ko_home_understandingimpact_singlejsonintro3(inputs);
	return ru_home_understandingimpact_singlejsonintro3(inputs);
});
var en_home_understandingimpact_singlejsonbullet13 = () => {
	return `The JSON must be parsed on every page load — blocking the main thread.`;
};
var fr_home_understandingimpact_singlejsonbullet13 = () => {
	return `Le JSON doit être analysé à chaque chargement de page — en bloquant le thread principal.`;
};
var es_home_understandingimpact_singlejsonbullet13 = () => {
	return `El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.`;
};
var de_home_understandingimpact_singlejsonbullet13 = () => {
	return `Das JSON muss bei jedem Seitenladen analysiert werden — was den Haupt-Thread blockiert.`;
};
var it_home_understandingimpact_singlejsonbullet13 = () => {
	return `Il JSON deve essere analizzato a ogni caricamento della pagina — bloccando il thread principale.`;
};
var pt_home_understandingimpact_singlejsonbullet13 = () => {
	return `O JSON deve ser analisado a cada carregamento de página — bloqueando a thread principal.`;
};
var zh_home_understandingimpact_singlejsonbullet13 = () => {
	return `每次页面加载时都必须解析 JSON — 阻塞主线程。`;
};
var ja_home_understandingimpact_singlejsonbullet13 = () => {
	return `ページを読み込むたびにJSONを解析する必要があり、メインスレッドをブロックします。`;
};
var ko_home_understandingimpact_singlejsonbullet13 = () => {
	return `The JSON must be parsed on every page load — blocking the main thread.`;
};
var ru_home_understandingimpact_singlejsonbullet13 = () => {
	return `JSON должен парситься при каждой загрузке страницы, что блокирует основной поток.`;
};
var home_understandingimpact_singlejsonbullet13 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_singlejsonbullet13(inputs);
	if (locale === "fr") return fr_home_understandingimpact_singlejsonbullet13(inputs);
	if (locale === "es") return es_home_understandingimpact_singlejsonbullet13(inputs);
	if (locale === "de") return de_home_understandingimpact_singlejsonbullet13(inputs);
	if (locale === "it") return it_home_understandingimpact_singlejsonbullet13(inputs);
	if (locale === "pt") return pt_home_understandingimpact_singlejsonbullet13(inputs);
	if (locale === "zh") return zh_home_understandingimpact_singlejsonbullet13(inputs);
	if (locale === "ja") return ja_home_understandingimpact_singlejsonbullet13(inputs);
	if (locale === "ko") return ko_home_understandingimpact_singlejsonbullet13(inputs);
	return ru_home_understandingimpact_singlejsonbullet13(inputs);
});
var en_home_understandingimpact_singlejsonbullet23 = () => {
	return `Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.`;
};
var fr_home_understandingimpact_singlejsonbullet23 = () => {
	return `Les architectures fondées sur le contexte peuvent provoquer des re-rendus en cascade quand la langue change, car chaque consommateur est notifié même si ses clés n'ont pas changé.`;
};
var es_home_understandingimpact_singlejsonbullet23 = () => {
	return `Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.`;
};
var de_home_understandingimpact_singlejsonbullet23 = () => {
	return `Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich die Sprache ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.`;
};
var it_home_understandingimpact_singlejsonbullet23 = () => {
	return `Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.`;
};
var pt_home_understandingimpact_singlejsonbullet23 = () => {
	return `Arquiteturas baseadas em contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que suas chaves específicas não tenham mudado.`;
};
var zh_home_understandingimpact_singlejsonbullet23 = () => {
	return `当语言环境更改时，基于上下文的架构可能会导致级联重新渲染，因为即使特定键未更改，每个使用者也会收到通知。`;
};
var ja_home_understandingimpact_singlejsonbullet23 = () => {
	return `コンテキストベースのアーキテクチャでは、特定のキーが変更されていなくてもすべての消費者に通知されるため、ロケール変更時にカスケードレンダリングが発生する可能性があります。`;
};
var ko_home_understandingimpact_singlejsonbullet23 = () => {
	return `Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.`;
};
var ru_home_understandingimpact_singlejsonbullet23 = () => {
	return `Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при смене языка, так как каждый потребитель получает уведомление, даже если его конкретные ключи не изменились.`;
};
var home_understandingimpact_singlejsonbullet23 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_singlejsonbullet23(inputs);
	if (locale === "fr") return fr_home_understandingimpact_singlejsonbullet23(inputs);
	if (locale === "es") return es_home_understandingimpact_singlejsonbullet23(inputs);
	if (locale === "de") return de_home_understandingimpact_singlejsonbullet23(inputs);
	if (locale === "it") return it_home_understandingimpact_singlejsonbullet23(inputs);
	if (locale === "pt") return pt_home_understandingimpact_singlejsonbullet23(inputs);
	if (locale === "zh") return zh_home_understandingimpact_singlejsonbullet23(inputs);
	if (locale === "ja") return ja_home_understandingimpact_singlejsonbullet23(inputs);
	if (locale === "ko") return ko_home_understandingimpact_singlejsonbullet23(inputs);
	return ru_home_understandingimpact_singlejsonbullet23(inputs);
});
var en_home_understandingimpact_singlejsonbullet33 = () => {
	return `During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.`;
};
var fr_home_understandingimpact_singlejsonbullet33 = () => {
	return `Lors du rendu serveur, tout le dictionnaire est sérialisé dans le HTML, alourdissant le document à télécharger et à hydrater.`;
};
var es_home_understandingimpact_singlejsonbullet33 = () => {
	return `Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.`;
};
var de_home_understandingimpact_singlejsonbullet33 = () => {
	return `Beim serverseitigen Rendering wird das vollständige Verzeichnis in die HTML-Nutzlast serialisiert, was die Dokumentgröße erhöht, die heruntergeladen und hydriert werden muss.`;
};
var it_home_understandingimpact_singlejsonbullet33 = () => {
	return `Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idratato.`;
};
var pt_home_understandingimpact_singlejsonbullet33 = () => {
	return `Durante a renderização no lado do servidor, o dicionário completo é serializado no payload HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.`;
};
var zh_home_understandingimpact_singlejsonbullet33 = () => {
	return `在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。`;
};
var ja_home_understandingimpact_singlejsonbullet33 = () => {
	return `サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。`;
};
var ko_home_understandingimpact_singlejsonbullet33 = () => {
	return `During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.`;
};
var ru_home_understandingimpact_singlejsonbullet33 = () => {
	return `При серверном рендеринге весь словарь сериализуется в HTML, что увеличивает размер документа, который необходимо загрузить и гидратировать.`;
};
var home_understandingimpact_singlejsonbullet33 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_singlejsonbullet33(inputs);
	if (locale === "fr") return fr_home_understandingimpact_singlejsonbullet33(inputs);
	if (locale === "es") return es_home_understandingimpact_singlejsonbullet33(inputs);
	if (locale === "de") return de_home_understandingimpact_singlejsonbullet33(inputs);
	if (locale === "it") return it_home_understandingimpact_singlejsonbullet33(inputs);
	if (locale === "pt") return pt_home_understandingimpact_singlejsonbullet33(inputs);
	if (locale === "zh") return zh_home_understandingimpact_singlejsonbullet33(inputs);
	if (locale === "ja") return ja_home_understandingimpact_singlejsonbullet33(inputs);
	if (locale === "ko") return ko_home_understandingimpact_singlejsonbullet33(inputs);
	return ru_home_understandingimpact_singlejsonbullet33(inputs);
});
var en_home_understandingimpact_tradeoffstitle3 = () => {
	return `The trade-offs of dynamic loading`;
};
var fr_home_understandingimpact_tradeoffstitle3 = () => {
	return `Les compromis du chargement dynamique`;
};
var es_home_understandingimpact_tradeoffstitle3 = () => {
	return `Las compensaciones de la carga dinámica`;
};
var de_home_understandingimpact_tradeoffstitle3 = () => {
	return `Die Kompromisse beim dynamischen Laden`;
};
var it_home_understandingimpact_tradeoffstitle3 = () => {
	return `I compromessi del caricamento dinamico`;
};
var pt_home_understandingimpact_tradeoffstitle3 = () => {
	return `Os trade-offs do carregamento dinâmico`;
};
var zh_home_understandingimpact_tradeoffstitle3 = () => {
	return `动态加载的权衡`;
};
var ja_home_understandingimpact_tradeoffstitle3 = () => {
	return `動的読み込みのトレードオフ`;
};
var ko_home_understandingimpact_tradeoffstitle3 = () => {
	return `The trade-offs of dynamic loading`;
};
var ru_home_understandingimpact_tradeoffstitle3 = () => {
	return `Компромиссы динамической загрузки`;
};
var home_understandingimpact_tradeoffstitle3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_tradeoffstitle3(inputs);
	if (locale === "fr") return fr_home_understandingimpact_tradeoffstitle3(inputs);
	if (locale === "es") return es_home_understandingimpact_tradeoffstitle3(inputs);
	if (locale === "de") return de_home_understandingimpact_tradeoffstitle3(inputs);
	if (locale === "it") return it_home_understandingimpact_tradeoffstitle3(inputs);
	if (locale === "pt") return pt_home_understandingimpact_tradeoffstitle3(inputs);
	if (locale === "zh") return zh_home_understandingimpact_tradeoffstitle3(inputs);
	if (locale === "ja") return ja_home_understandingimpact_tradeoffstitle3(inputs);
	if (locale === "ko") return ko_home_understandingimpact_tradeoffstitle3(inputs);
	return ru_home_understandingimpact_tradeoffstitle3(inputs);
});
var en_home_understandingimpact_tradeoffsintro3 = () => {
	return `Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:`;
};
var fr_home_understandingimpact_tradeoffsintro3 = () => {
	return `Découper les traductions par route ou espace de noms réduit fortement la charge initiale, mais pose de nouveaux défis :`;
};
var es_home_understandingimpact_tradeoffsintro3 = () => {
	return `Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:`;
};
var de_home_understandingimpact_tradeoffsintro3 = () => {
	return `Das Aufteilen von Übersetzungen in Chunks pro Route oder pro Namespace kann die anfängliche Nutzlast drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:`;
};
var it_home_understandingimpact_tradeoffsintro3 = () => {
	return `La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:`;
};
var pt_home_understandingimpact_tradeoffsintro3 = () => {
	return `Dividir as traduções em pedaços por rota ou por namespace pode reduzir drasticamente o payload inicial. Mas introduz novos desafios:`;
};
var zh_home_understandingimpact_tradeoffsintro3 = () => {
	return `将翻译拆分为每个路由或每个命名空间的块可以大幅减少初始负载。但它引入了新的挑战：`;
};
var ja_home_understandingimpact_tradeoffsintro3 = () => {
	return `翻訳をルートごとまたは名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新しい課題も生じます：`;
};
var ko_home_understandingimpact_tradeoffsintro3 = () => {
	return `Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:`;
};
var ru_home_understandingimpact_tradeoffsintro3 = () => {
	return `Разделение переводов на части для каждого маршрута или пространства имен может значительно уменьшить начальный объем данных. Но это создает новые проблемы:`;
};
var home_understandingimpact_tradeoffsintro3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_tradeoffsintro3(inputs);
	if (locale === "fr") return fr_home_understandingimpact_tradeoffsintro3(inputs);
	if (locale === "es") return es_home_understandingimpact_tradeoffsintro3(inputs);
	if (locale === "de") return de_home_understandingimpact_tradeoffsintro3(inputs);
	if (locale === "it") return it_home_understandingimpact_tradeoffsintro3(inputs);
	if (locale === "pt") return pt_home_understandingimpact_tradeoffsintro3(inputs);
	if (locale === "zh") return zh_home_understandingimpact_tradeoffsintro3(inputs);
	if (locale === "ja") return ja_home_understandingimpact_tradeoffsintro3(inputs);
	if (locale === "ko") return ko_home_understandingimpact_tradeoffsintro3(inputs);
	return ru_home_understandingimpact_tradeoffsintro3(inputs);
});
var en_home_understandingimpact_waterfalllabel2 = () => {
	return `Waterfall requests:`;
};
var fr_home_understandingimpact_waterfalllabel2 = () => {
	return `Requêtes en cascade :`;
};
var es_home_understandingimpact_waterfalllabel2 = () => {
	return `Solicitudes en cascada:`;
};
var de_home_understandingimpact_waterfalllabel2 = () => {
	return `Waterfall-Anfragen:`;
};
var it_home_understandingimpact_waterfalllabel2 = () => {
	return `Richieste a cascata:`;
};
var pt_home_understandingimpact_waterfalllabel2 = () => {
	return `Requisições em cascata:`;
};
var zh_home_understandingimpact_waterfalllabel2 = () => {
	return `瀑布流请求：`;
};
var ja_home_understandingimpact_waterfalllabel2 = () => {
	return `ウォーターフォールリクエスト：`;
};
var ko_home_understandingimpact_waterfalllabel2 = () => {
	return `Waterfall requests:`;
};
var ru_home_understandingimpact_waterfalllabel2 = () => {
	return `Каскадные запросы:`;
};
var home_understandingimpact_waterfalllabel2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_waterfalllabel2(inputs);
	if (locale === "fr") return fr_home_understandingimpact_waterfalllabel2(inputs);
	if (locale === "es") return es_home_understandingimpact_waterfalllabel2(inputs);
	if (locale === "de") return de_home_understandingimpact_waterfalllabel2(inputs);
	if (locale === "it") return it_home_understandingimpact_waterfalllabel2(inputs);
	if (locale === "pt") return pt_home_understandingimpact_waterfalllabel2(inputs);
	if (locale === "zh") return zh_home_understandingimpact_waterfalllabel2(inputs);
	if (locale === "ja") return ja_home_understandingimpact_waterfalllabel2(inputs);
	if (locale === "ko") return ko_home_understandingimpact_waterfalllabel2(inputs);
	return ru_home_understandingimpact_waterfalllabel2(inputs);
});
var en_home_understandingimpact_waterfalldesc2 = () => {
	return `the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.`;
};
var fr_home_understandingimpact_waterfalldesc2 = () => {
	return `l'application doit d'abord charger, déterminer la langue, puis récupérer le bon fragment — avec des allers-retours réseau supplémentaires.`;
};
var es_home_understandingimpact_waterfalldesc2 = () => {
	return `la aplicación debe primero cargarse, determinar el idioma, luego obtener el fragmento correcto, lo que añade viajes de red de ida y vuelta.`;
};
var de_home_understandingimpact_waterfalldesc2 = () => {
	return `Die App muss zuerst laden, die Sprache bestimmen und dann den richtigen Chunk abrufen — was zusätzliche Netzwerk-Roundtrips verursacht.`;
};
var it_home_understandingimpact_waterfalldesc2 = () => {
	return `l'app deve prima caricarsi, determinare la locale, quindi recuperare il chunk corretto — aggiungendo round-trip di rete.`;
};
var pt_home_understandingimpact_waterfalldesc2 = () => {
	return `o app deve primeiro carregar, determinar a localidade, então buscar o chunk certo — adicionando network round-trips.`;
};
var zh_home_understandingimpact_waterfalldesc2 = () => {
	return `应用必须首先加载，确定语言环境，然后获取正确的块 — 增加了网络往返时间。`;
};
var ja_home_understandingimpact_waterfalldesc2 = () => {
	return `アプリは最初に読み込み、ロケールを決定し、次に正しいチャンクを取得する必要があり、ネットワークのラウンドトリップが追加されます。`;
};
var ko_home_understandingimpact_waterfalldesc2 = () => {
	return `the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.`;
};
var ru_home_understandingimpact_waterfalldesc2 = () => {
	return `приложение должно сначала загрузиться, определить язык, а затем получить нужную часть, что добавляет сетевые задержки.`;
};
var home_understandingimpact_waterfalldesc2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_waterfalldesc2(inputs);
	if (locale === "fr") return fr_home_understandingimpact_waterfalldesc2(inputs);
	if (locale === "es") return es_home_understandingimpact_waterfalldesc2(inputs);
	if (locale === "de") return de_home_understandingimpact_waterfalldesc2(inputs);
	if (locale === "it") return it_home_understandingimpact_waterfalldesc2(inputs);
	if (locale === "pt") return pt_home_understandingimpact_waterfalldesc2(inputs);
	if (locale === "zh") return zh_home_understandingimpact_waterfalldesc2(inputs);
	if (locale === "ja") return ja_home_understandingimpact_waterfalldesc2(inputs);
	if (locale === "ko") return ko_home_understandingimpact_waterfalldesc2(inputs);
	return ru_home_understandingimpact_waterfalldesc2(inputs);
});
var en_home_understandingimpact_fouclabel2 = () => {
	return `Flash of untranslated content (FOUC):`;
};
var fr_home_understandingimpact_fouclabel2 = () => {
	return `Flash de contenu non traduit (FOUC) :`;
};
var es_home_understandingimpact_fouclabel2 = () => {
	return `Parpadeo de contenido no traducido (FOUC):`;
};
var de_home_understandingimpact_fouclabel2 = () => {
	return `Flash of Untranslated Content (FOUC):`;
};
var it_home_understandingimpact_fouclabel2 = () => {
	return `Flash di contenuti non tradotti (FOUC):`;
};
var pt_home_understandingimpact_fouclabel2 = () => {
	return `Flash de conteúdo não traduzido (FOUC):`;
};
var zh_home_understandingimpact_fouclabel2 = () => {
	return `未翻译内容闪烁 (FOUC)：`;
};
var ja_home_understandingimpact_fouclabel2 = () => {
	return `翻訳されていないコンテンツのフラッシュ (FOUC)：`;
};
var ko_home_understandingimpact_fouclabel2 = () => {
	return `Flash of untranslated content (FOUC):`;
};
var ru_home_understandingimpact_fouclabel2 = () => {
	return `Мерцание непереведенного контента (FOUC):`;
};
var home_understandingimpact_fouclabel2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_fouclabel2(inputs);
	if (locale === "fr") return fr_home_understandingimpact_fouclabel2(inputs);
	if (locale === "es") return es_home_understandingimpact_fouclabel2(inputs);
	if (locale === "de") return de_home_understandingimpact_fouclabel2(inputs);
	if (locale === "it") return it_home_understandingimpact_fouclabel2(inputs);
	if (locale === "pt") return pt_home_understandingimpact_fouclabel2(inputs);
	if (locale === "zh") return zh_home_understandingimpact_fouclabel2(inputs);
	if (locale === "ja") return ja_home_understandingimpact_fouclabel2(inputs);
	if (locale === "ko") return ko_home_understandingimpact_fouclabel2(inputs);
	return ru_home_understandingimpact_fouclabel2(inputs);
});
var en_home_understandingimpact_foucdesc2 = () => {
	return `users may briefly see translation keys or a fallback language before the chunk arrives.`;
};
var fr_home_understandingimpact_foucdesc2 = () => {
	return `l'utilisateur peut voir brièvement des clés ou une langue de secours avant l'arrivée du fragment.`;
};
var es_home_understandingimpact_foucdesc2 = () => {
	return `los usuarios pueden ver brevemente las claves de traducción o un idioma de respaldo antes de que llegue el fragmento.`;
};
var de_home_understandingimpact_foucdesc2 = () => {
	return `Benutzer sehen möglicherweise kurzzeitig Übersetzungsschlüssel oder eine Fallback-Sprache, bevor der Chunk eintrifft.`;
};
var it_home_understandingimpact_foucdesc2 = () => {
	return `gli utenti possono vedere brevemente le chiavi di traduzione o una lingua di fallback prima che arrivi il chunk.`;
};
var pt_home_understandingimpact_foucdesc2 = () => {
	return `usuários podem ver brevemente as chaves de tradução ou um idioma de fallback antes de o chunk chegar.`;
};
var zh_home_understandingimpact_foucdesc2 = () => {
	return `在块到达之前，用户可能会短暂看到翻译键或回退语言。`;
};
var ja_home_understandingimpact_foucdesc2 = () => {
	return `チャンクが到着する前に、ユーザーに翻訳キーまたはフォールバック言語が一時的に表示されることがあります。`;
};
var ko_home_understandingimpact_foucdesc2 = () => {
	return `users may briefly see translation keys or a fallback language before the chunk arrives.`;
};
var ru_home_understandingimpact_foucdesc2 = () => {
	return `пользователи могут кратковременно видеть ключи перевода или резервный язык до загрузки нужной части.`;
};
var home_understandingimpact_foucdesc2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_foucdesc2(inputs);
	if (locale === "fr") return fr_home_understandingimpact_foucdesc2(inputs);
	if (locale === "es") return es_home_understandingimpact_foucdesc2(inputs);
	if (locale === "de") return de_home_understandingimpact_foucdesc2(inputs);
	if (locale === "it") return it_home_understandingimpact_foucdesc2(inputs);
	if (locale === "pt") return pt_home_understandingimpact_foucdesc2(inputs);
	if (locale === "zh") return zh_home_understandingimpact_foucdesc2(inputs);
	if (locale === "ja") return ja_home_understandingimpact_foucdesc2(inputs);
	if (locale === "ko") return ko_home_understandingimpact_foucdesc2(inputs);
	return ru_home_understandingimpact_foucdesc2(inputs);
});
var en_home_understandingimpact_cachelabel2 = () => {
	return `Cache invalidation:`;
};
var fr_home_understandingimpact_cachelabel2 = () => {
	return `Invalidation du cache :`;
};
var es_home_understandingimpact_cachelabel2 = () => {
	return `Invalidación de la caché:`;
};
var de_home_understandingimpact_cachelabel2 = () => {
	return `Cache-Invalidierung:`;
};
var it_home_understandingimpact_cachelabel2 = () => {
	return `Invalidazione della cache:`;
};
var pt_home_understandingimpact_cachelabel2 = () => {
	return `Invalidação de cache:`;
};
var zh_home_understandingimpact_cachelabel2 = () => {
	return `缓存失效：`;
};
var ja_home_understandingimpact_cachelabel2 = () => {
	return `キャッシュの無効化：`;
};
var ko_home_understandingimpact_cachelabel2 = () => {
	return `Cache invalidation:`;
};
var ru_home_understandingimpact_cachelabel2 = () => {
	return `Инвалидация кэша:`;
};
var home_understandingimpact_cachelabel2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_cachelabel2(inputs);
	if (locale === "fr") return fr_home_understandingimpact_cachelabel2(inputs);
	if (locale === "es") return es_home_understandingimpact_cachelabel2(inputs);
	if (locale === "de") return de_home_understandingimpact_cachelabel2(inputs);
	if (locale === "it") return it_home_understandingimpact_cachelabel2(inputs);
	if (locale === "pt") return pt_home_understandingimpact_cachelabel2(inputs);
	if (locale === "zh") return zh_home_understandingimpact_cachelabel2(inputs);
	if (locale === "ja") return ja_home_understandingimpact_cachelabel2(inputs);
	if (locale === "ko") return ko_home_understandingimpact_cachelabel2(inputs);
	return ru_home_understandingimpact_cachelabel2(inputs);
});
var en_home_understandingimpact_cachedesc2 = () => {
	return `updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.`;
};
var fr_home_understandingimpact_cachedesc2 = () => {
	return `mettre à jour les traductions exige des stratégies de cache busting pour livrer du contenu à jour sans re-télécharger l'inutile.`;
};
var es_home_understandingimpact_cachedesc2 = () => {
	return `actualizar las traducciones requiere estrategias de invalidación de la caché para asegurar que los usuarios obtengan contenido fresco sin volver a descargar fragmentos no modificados.`;
};
var de_home_understandingimpact_cachedesc2 = () => {
	return `Die Aktualisierung von Übersetzungen erfordert Strategien zur Cache-Invalidierung, um sicherzustellen, dass Benutzer frische Inhalte erhalten, ohne unveränderte Chunks erneut herunterzuladen.`;
};
var it_home_understandingimpact_cachedesc2 = () => {
	return `l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza riscaricare chunk non modificati.`;
};
var pt_home_understandingimpact_cachedesc2 = () => {
	return `atualizar as traduções requer estratégias de invalidação de cache para garantir que os usuários obtenham conteúdo fresco sem baixar novamente os chunks inalterados.`;
};
var zh_home_understandingimpact_cachedesc2 = () => {
	return `更新翻译需要缓存刷新策略，以确保用户获得最新内容，而无需重新下载未更改的块。`;
};
var ja_home_understandingimpact_cachedesc2 = () => {
	return `翻訳を更新するには、ユーザーが変更されていないチャンクを再ダウンロードすることなく最新のコンテンツを取得できるようにするためのキャッシュバースト戦略が必要です。`;
};
var ko_home_understandingimpact_cachedesc2 = () => {
	return `updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.`;
};
var ru_home_understandingimpact_cachedesc2 = () => {
	return `обновление переводов требует стратегий сброса кэша, чтобы пользователи получали свежий контент без повторной загрузки неизмененных частей.`;
};
var home_understandingimpact_cachedesc2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_cachedesc2(inputs);
	if (locale === "fr") return fr_home_understandingimpact_cachedesc2(inputs);
	if (locale === "es") return es_home_understandingimpact_cachedesc2(inputs);
	if (locale === "de") return de_home_understandingimpact_cachedesc2(inputs);
	if (locale === "it") return it_home_understandingimpact_cachedesc2(inputs);
	if (locale === "pt") return pt_home_understandingimpact_cachedesc2(inputs);
	if (locale === "zh") return zh_home_understandingimpact_cachedesc2(inputs);
	if (locale === "ja") return ja_home_understandingimpact_cachedesc2(inputs);
	if (locale === "ko") return ko_home_understandingimpact_cachedesc2(inputs);
	return ru_home_understandingimpact_cachedesc2(inputs);
});
var en_home_understandingimpact_measurestitle2 = () => {
	return `What this benchmark measures`;
};
var fr_home_understandingimpact_measurestitle2 = () => {
	return `Ce que mesure ce benchmark`;
};
var es_home_understandingimpact_measurestitle2 = () => {
	return `Qué mide este benchmark`;
};
var de_home_understandingimpact_measurestitle2 = () => {
	return `Was dieser Benchmark misst`;
};
var it_home_understandingimpact_measurestitle2 = () => {
	return `Cosa misura questo benchmark`;
};
var pt_home_understandingimpact_measurestitle2 = () => {
	return `O que este benchmark mede`;
};
var zh_home_understandingimpact_measurestitle2 = () => {
	return `此基准测试衡量的内容`;
};
var ja_home_understandingimpact_measurestitle2 = () => {
	return `このベンチマークが測定するもの`;
};
var ko_home_understandingimpact_measurestitle2 = () => {
	return `What this benchmark measures`;
};
var ru_home_understandingimpact_measurestitle2 = () => {
	return `Что измеряет этот бенчмарк`;
};
var home_understandingimpact_measurestitle2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_measurestitle2(inputs);
	if (locale === "fr") return fr_home_understandingimpact_measurestitle2(inputs);
	if (locale === "es") return es_home_understandingimpact_measurestitle2(inputs);
	if (locale === "de") return de_home_understandingimpact_measurestitle2(inputs);
	if (locale === "it") return it_home_understandingimpact_measurestitle2(inputs);
	if (locale === "pt") return pt_home_understandingimpact_measurestitle2(inputs);
	if (locale === "zh") return zh_home_understandingimpact_measurestitle2(inputs);
	if (locale === "ja") return ja_home_understandingimpact_measurestitle2(inputs);
	if (locale === "ko") return ko_home_understandingimpact_measurestitle2(inputs);
	return ru_home_understandingimpact_measurestitle2(inputs);
});
var en_home_understandingimpact_measuresdesc2 = () => {
	return `This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.`;
};
var fr_home_understandingimpact_measuresdesc2 = () => {
	return `Cette appli de test offre un environnement contrôlé — 10 pages au contenu réaliste — pour comparer les bibliothèques i18n sur trois axes : le poids ajouté au bundle JavaScript, le temps passé à analyser et afficher le texte traduit, et l'efficacité du découpage de code et du chargement paresseux. Chaque bibliothèque est intégrée dans la même base pour des résultats comparables.`;
};
var es_home_understandingimpact_measuresdesc2 = () => {
	return `Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.`;
};
var de_home_understandingimpact_measuresdesc2 = () => {
	return `Diese Testanwendung bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken auf drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe Anwendung integriert, sodass die Ergebnisse direkt vergleichbar sind.`;
};
var it_home_understandingimpact_measuresdesc2 = () => {
	return `Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.`;
};
var pt_home_understandingimpact_measuresdesc2 = () => {
	return `Este app de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas i18n em três eixos: o peso que elas adicionam ao seu bundle JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia de suas estratégias de divisão de código e carregamento lento. Cada biblioteca é integrada no mesmo app para que os resultados sejam diretamente comparáveis.`;
};
var zh_home_understandingimpact_measuresdesc2 = () => {
	return `此测试应用提供了一个受控环境 — 10 个具有真实内容的页面 — 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的重量、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。`;
};
var ja_home_understandingimpact_measuresdesc2 = () => {
	return `このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、JavaScriptバンドルに追加される重量、翻訳コンテンツの解析とレンダリングに費される時間、およびコード分割と遅延読み込み戦略の効果という3つの軸でi18nライブラリを比較します。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。`;
};
var ko_home_understandingimpact_measuresdesc2 = () => {
	return `This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.`;
};
var ru_home_understandingimpact_measuresdesc2 = () => {
	return `Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют к вашему JavaScript-бандлу, время, затрачиваемое на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.`;
};
var home_understandingimpact_measuresdesc2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_home_understandingimpact_measuresdesc2(inputs);
	if (locale === "fr") return fr_home_understandingimpact_measuresdesc2(inputs);
	if (locale === "es") return es_home_understandingimpact_measuresdesc2(inputs);
	if (locale === "de") return de_home_understandingimpact_measuresdesc2(inputs);
	if (locale === "it") return it_home_understandingimpact_measuresdesc2(inputs);
	if (locale === "pt") return pt_home_understandingimpact_measuresdesc2(inputs);
	if (locale === "zh") return zh_home_understandingimpact_measuresdesc2(inputs);
	if (locale === "ja") return ja_home_understandingimpact_measuresdesc2(inputs);
	if (locale === "ko") return ko_home_understandingimpact_measuresdesc2(inputs);
	return ru_home_understandingimpact_measuresdesc2(inputs);
});
function usePerformanceMeasure(name) {
	if (typeof performance !== "undefined" && performance.mark) performance.mark(`${name}-start`);
	onMount(() => {
		if (typeof performance !== "undefined" && performance.mark && performance.measure) {
			performance.mark(`${name}-end`);
			try {
				performance.measure(`${name}-render`, `${name}-start`, `${name}-end`);
			} catch {}
		}
	});
}
var root = $.from_html(`<section class="mb-16 mx-auto max-w-3xl space-y-6"><h2 class="text-2xl font-bold text-foreground"> </h2> <div class="rounded-lg border border-border bg-card p-6"><h3 class="mb-2 text-lg font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p> <ul class="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5"><li> </li> <li> </li> <li> </li></ul></div> <div class="rounded-lg border border-border bg-card p-6"><h3 class="mb-2 text-lg font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p> <ul class="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5"><li><strong class="text-foreground"> </strong> </li> <li><strong class="text-foreground"> </strong> </li> <li><strong class="text-foreground"> </strong> </li></ul></div> <div class="rounded-lg border border-border bg-card p-6"><h3 class="mb-2 text-lg font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p></div></section>`);
function UnderstandingImpact($$anchor, $$props) {
	$.push($$props, false);
	usePerformanceMeasure("UnderstandingImpact");
	$.init();
	var section = root();
	var h2 = $.child(section);
	var text = $.child(h2, true);
	$.reset(h2);
	var div = $.sibling(h2, 2);
	var h3 = $.child(div);
	var text_1 = $.child(h3, true);
	$.reset(h3);
	var p = $.sibling(h3, 2);
	var text_2 = $.child(p, true);
	$.reset(p);
	var ul = $.sibling(p, 2);
	var li = $.child(ul);
	var text_3 = $.child(li, true);
	$.reset(li);
	var li_1 = $.sibling(li, 2);
	var text_4 = $.child(li_1, true);
	$.reset(li_1);
	var li_2 = $.sibling(li_1, 2);
	var text_5 = $.child(li_2, true);
	$.reset(li_2);
	$.reset(ul);
	$.reset(div);
	var div_1 = $.sibling(div, 2);
	var h3_1 = $.child(div_1);
	var text_6 = $.child(h3_1, true);
	$.reset(h3_1);
	var p_1 = $.sibling(h3_1, 2);
	var text_7 = $.child(p_1, true);
	$.reset(p_1);
	var ul_1 = $.sibling(p_1, 2);
	var li_3 = $.child(ul_1);
	var strong = $.child(li_3);
	var text_8 = $.child(strong, true);
	$.reset(strong);
	var text_9 = $.sibling(strong);
	$.reset(li_3);
	var li_4 = $.sibling(li_3, 2);
	var strong_1 = $.child(li_4);
	var text_10 = $.child(strong_1, true);
	$.reset(strong_1);
	var text_11 = $.sibling(strong_1);
	$.reset(li_4);
	var li_5 = $.sibling(li_4, 2);
	var strong_2 = $.child(li_5);
	var text_12 = $.child(strong_2, true);
	$.reset(strong_2);
	var text_13 = $.sibling(strong_2);
	$.reset(li_5);
	$.reset(ul_1);
	$.reset(div_1);
	var div_2 = $.sibling(div_1, 2);
	var h3_2 = $.child(div_2);
	var text_14 = $.child(h3_2, true);
	$.reset(h3_2);
	var p_2 = $.sibling(h3_2, 2);
	var text_15 = $.child(p_2, true);
	$.reset(p_2);
	$.reset(div_2);
	$.reset(section);
	$.template_effect(($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) => {
		$.set_text(text, $0);
		$.set_text(text_1, $1);
		$.set_text(text_2, $2);
		$.set_text(text_3, $3);
		$.set_text(text_4, $4);
		$.set_text(text_5, $5);
		$.set_text(text_6, $6);
		$.set_text(text_7, $7);
		$.set_text(text_8, $8);
		$.set_text(text_9, ` ${$9 ?? ""}`);
		$.set_text(text_10, $10);
		$.set_text(text_11, ` ${$11 ?? ""}`);
		$.set_text(text_12, $12);
		$.set_text(text_13, ` ${$13 ?? ""}`);
		$.set_text(text_14, $14);
		$.set_text(text_15, $15);
	}, [
		() => home_understandingimpact_title1(),
		() => home_understandingimpact_singlejsontitle3(),
		() => home_understandingimpact_singlejsonintro3(),
		() => home_understandingimpact_singlejsonbullet13(),
		() => home_understandingimpact_singlejsonbullet23(),
		() => home_understandingimpact_singlejsonbullet33(),
		() => home_understandingimpact_tradeoffstitle3(),
		() => home_understandingimpact_tradeoffsintro3(),
		() => home_understandingimpact_waterfalllabel2(),
		() => home_understandingimpact_waterfalldesc2(),
		() => home_understandingimpact_fouclabel2(),
		() => home_understandingimpact_foucdesc2(),
		() => home_understandingimpact_cachelabel2(),
		() => home_understandingimpact_cachedesc2(),
		() => home_understandingimpact_measurestitle2(),
		() => home_understandingimpact_measuresdesc2()
	]);
	$.append($$anchor, section);
	$.pop();
}
export { UnderstandingImpact as default };
