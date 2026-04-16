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
var en_understanding_impact_understandingtheimpact2 = () => {
	return `Understanding the Impact`;
};
var fr_understanding_impact_understandingtheimpact2 = () => {
	return `Comprendre l'impact`;
};
var es_understanding_impact_understandingtheimpact2 = () => {
	return `Entendiendo el impacto`;
};
var de_understanding_impact_understandingtheimpact2 = () => {
	return `Die Auswirkungen verstehen`;
};
var it_understanding_impact_understandingtheimpact2 = () => {
	return `Capire l'impatto`;
};
var pt_understanding_impact_understandingtheimpact2 = () => {
	return `Entendendo o impacto`;
};
var zh_understanding_impact_understandingtheimpact2 = () => {
	return `理解影响`;
};
var ja_understanding_impact_understandingtheimpact2 = () => {
	return `影響を理解する`;
};
var ko_understanding_impact_understandingtheimpact2 = () => {
	return `영향 이해하기`;
};
var ru_understanding_impact_understandingtheimpact2 = () => {
	return `Понимание влияния`;
};
var understanding_impact_understandingtheimpact2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_understanding_impact_understandingtheimpact2(inputs);
	if (locale === "fr") return fr_understanding_impact_understandingtheimpact2(inputs);
	if (locale === "es") return es_understanding_impact_understandingtheimpact2(inputs);
	if (locale === "de") return de_understanding_impact_understandingtheimpact2(inputs);
	if (locale === "it") return it_understanding_impact_understandingtheimpact2(inputs);
	if (locale === "pt") return pt_understanding_impact_understandingtheimpact2(inputs);
	if (locale === "zh") return zh_understanding_impact_understandingtheimpact2(inputs);
	if (locale === "ja") return ja_understanding_impact_understandingtheimpact2(inputs);
	if (locale === "ko") return ko_understanding_impact_understandingtheimpact2(inputs);
	return ru_understanding_impact_understandingtheimpact2(inputs);
});
var en_understanding_impact_whyasinglelargejson4 = () => {
	return `Why a single large JSON can hurt performance`;
};
var fr_understanding_impact_whyasinglelargejson4 = () => {
	return `Pourquoi un seul JSON volumineux peut nuire aux performances`;
};
var es_understanding_impact_whyasinglelargejson4 = () => {
	return `Por qué un solo JSON grande puede perjudicar el rendimiento`;
};
var de_understanding_impact_whyasinglelargejson4 = () => {
	return `Warum ein einziges großes JSON die Leistung beeinträchtigen kann`;
};
var it_understanding_impact_whyasinglelargejson4 = () => {
	return `Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni`;
};
var pt_understanding_impact_whyasinglelargejson4 = () => {
	return `Por que um único JSON grande pode prejudicar o desempenho`;
};
var zh_understanding_impact_whyasinglelargejson4 = () => {
	return `为什么单个大型 JSON 会损害性能`;
};
var ja_understanding_impact_whyasinglelargejson4 = () => {
	return `ひとつの巨大な JSON がパフォーマンスを低下させる理由`;
};
var ko_understanding_impact_whyasinglelargejson4 = () => {
	return `단일 대형 JSON이 성능을 저하시키는 이유`;
};
var ru_understanding_impact_whyasinglelargejson4 = () => {
	return `Почему один большой JSON может снизить производительность`;
};
var understanding_impact_whyasinglelargejson4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_understanding_impact_whyasinglelargejson4(inputs);
	if (locale === "fr") return fr_understanding_impact_whyasinglelargejson4(inputs);
	if (locale === "es") return es_understanding_impact_whyasinglelargejson4(inputs);
	if (locale === "de") return de_understanding_impact_whyasinglelargejson4(inputs);
	if (locale === "it") return it_understanding_impact_whyasinglelargejson4(inputs);
	if (locale === "pt") return pt_understanding_impact_whyasinglelargejson4(inputs);
	if (locale === "zh") return zh_understanding_impact_whyasinglelargejson4(inputs);
	if (locale === "ja") return ja_understanding_impact_whyasinglelargejson4(inputs);
	if (locale === "ko") return ko_understanding_impact_whyasinglelargejson4(inputs);
	return ru_understanding_impact_whyasinglelargejson4(inputs);
});
var en_understanding_impact_manyi18nlibrariesstoretranslations4 = () => {
	return `Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:`;
};
var fr_understanding_impact_manyi18nlibrariesstoretranslations4 = () => {
	return `De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (des milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :`;
};
var es_understanding_impact_manyi18nlibrariesstoretranslations4 = () => {
	return `Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:`;
};
var de_understanding_impact_manyi18nlibrariesstoretranslations4 = () => {
	return `Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verwendet, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:`;
};
var it_understanding_impact_manyi18nlibrariesstoretranslations4 = () => {
	return `Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:`;
};
var pt_understanding_impact_manyi18nlibrariesstoretranslations4 = () => {
	return `Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido através do contexto de React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isto significa:`;
};
var zh_understanding_impact_manyi18nlibrariesstoretranslations4 = () => {
	return `许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会持有对整个字典的引用。这意味着：`;
};
var ja_understanding_impact_manyi18nlibrariesstoretranslations4 = () => {
	return `多くの i18n ライブラリは、React コンテキストを介して提供される単一の JSON オブジェクトに翻訳を保存します。このオブジェクトが巨大（数千のキー）な場合、翻訳を消費するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：`;
};
var ko_understanding_impact_manyi18nlibrariesstoretranslations4 = () => {
	return `많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 경우(수천 개의 키), 번역을 사용하는 모든 컴포넌트는 전체 사전에 대한 참조를 보유하게 됩니다. 이는 다음을 의미합니다:`;
};
var ru_understanding_impact_manyi18nlibrariesstoretranslations4 = () => {
	return `Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:`;
};
var understanding_impact_manyi18nlibrariesstoretranslations4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_understanding_impact_manyi18nlibrariesstoretranslations4(inputs);
	if (locale === "fr") return fr_understanding_impact_manyi18nlibrariesstoretranslations4(inputs);
	if (locale === "es") return es_understanding_impact_manyi18nlibrariesstoretranslations4(inputs);
	if (locale === "de") return de_understanding_impact_manyi18nlibrariesstoretranslations4(inputs);
	if (locale === "it") return it_understanding_impact_manyi18nlibrariesstoretranslations4(inputs);
	if (locale === "pt") return pt_understanding_impact_manyi18nlibrariesstoretranslations4(inputs);
	if (locale === "zh") return zh_understanding_impact_manyi18nlibrariesstoretranslations4(inputs);
	if (locale === "ja") return ja_understanding_impact_manyi18nlibrariesstoretranslations4(inputs);
	if (locale === "ko") return ko_understanding_impact_manyi18nlibrariesstoretranslations4(inputs);
	return ru_understanding_impact_manyi18nlibrariesstoretranslations4(inputs);
});
var en_understanding_impact_thejsonmustbeparsed4 = () => {
	return `The JSON must be parsed on every page load — blocking the main thread.`;
};
var fr_understanding_impact_thejsonmustbeparsed4 = () => {
	return `Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.`;
};
var es_understanding_impact_thejsonmustbeparsed4 = () => {
	return `El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.`;
};
var de_understanding_impact_thejsonmustbeparsed4 = () => {
	return `Das JSON muss bei jedem Seitenladen geparst werden — was den Haupt-Thread blockiert.`;
};
var it_understanding_impact_thejsonmustbeparsed4 = () => {
	return `Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.`;
};
var pt_understanding_impact_thejsonmustbeparsed4 = () => {
	return `O JSON deve ser analisado em cada carga de página — bloqueando a linha de execução principal.`;
};
var zh_understanding_impact_thejsonmustbeparsed4 = () => {
	return `JSON 必须在每次页面加载时进行解析 —— 阻塞主线程。`;
};
var ja_understanding_impact_thejsonmustbeparsed4 = () => {
	return `JSON はページ読み込みのたびにパースされる必要があり、メインスレッドをブロックします。`;
};
var ko_understanding_impact_thejsonmustbeparsed4 = () => {
	return `JSON은 모든 페이지 로드 시 파싱되어야 하며, 이는 메인 스레드를 차단합니다.`;
};
var ru_understanding_impact_thejsonmustbeparsed4 = () => {
	return `JSON должен парситься при каждой загрузке страницы — блокируя основной поток.`;
};
var understanding_impact_thejsonmustbeparsed4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_understanding_impact_thejsonmustbeparsed4(inputs);
	if (locale === "fr") return fr_understanding_impact_thejsonmustbeparsed4(inputs);
	if (locale === "es") return es_understanding_impact_thejsonmustbeparsed4(inputs);
	if (locale === "de") return de_understanding_impact_thejsonmustbeparsed4(inputs);
	if (locale === "it") return it_understanding_impact_thejsonmustbeparsed4(inputs);
	if (locale === "pt") return pt_understanding_impact_thejsonmustbeparsed4(inputs);
	if (locale === "zh") return zh_understanding_impact_thejsonmustbeparsed4(inputs);
	if (locale === "ja") return ja_understanding_impact_thejsonmustbeparsed4(inputs);
	if (locale === "ko") return ko_understanding_impact_thejsonmustbeparsed4(inputs);
	return ru_understanding_impact_thejsonmustbeparsed4(inputs);
});
var en_understanding_impact_contextbasedarchitecturescancause4 = () => {
	return `Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.`;
};
var fr_understanding_impact_contextbasedarchitecturescancause4 = () => {
	return `Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.`;
};
var es_understanding_impact_contextbasedarchitecturescancause4 = () => {
	return `Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.`;
};
var de_understanding_impact_contextbasedarchitecturescancause4 = () => {
	return `Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Gebietsschema ändert, da jeder Consumer benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.`;
};
var it_understanding_impact_contextbasedarchitecturescancause4 = () => {
	return `Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.`;
};
var pt_understanding_impact_contextbasedarchitecturescancause4 = () => {
	return `As arquiteturas baseadas no contexto podem causar renderizações em cascata quando o idioma muda, porque cada consumidor é notificado mesmo que as suas chaves específicas não tenham mudado.`;
};
var zh_understanding_impact_contextbasedarchitecturescancause4 = () => {
	return `基于上下文的架构在语言环境更改时会导致级联重新渲染，因为即使特定键没有更改，每个消费者都会收到通知。`;
};
var ja_understanding_impact_contextbasedarchitecturescancause4 = () => {
	return `コンテキストベースのアーキテクチャでは、ロケールが変更されると、特定のキーが変更されていなくてもすべてのコンシューマーに通知されるため、連鎖的な再レンダリングが発生する可能性があります。`;
};
var ko_understanding_impact_contextbasedarchitecturescancause4 = () => {
	return `컨텍스트 기반 아키텍처는 로케일이 변경될 때 연쇄적인 리렌더링을 일으킬 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자에게 알림이 가기 때문입니다.`;
};
var ru_understanding_impact_contextbasedarchitecturescancause4 = () => {
	return `Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, потому что каждый потребитель уведомляется, даже если его конкретные ключи не изменились.`;
};
var understanding_impact_contextbasedarchitecturescancause4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_understanding_impact_contextbasedarchitecturescancause4(inputs);
	if (locale === "fr") return fr_understanding_impact_contextbasedarchitecturescancause4(inputs);
	if (locale === "es") return es_understanding_impact_contextbasedarchitecturescancause4(inputs);
	if (locale === "de") return de_understanding_impact_contextbasedarchitecturescancause4(inputs);
	if (locale === "it") return it_understanding_impact_contextbasedarchitecturescancause4(inputs);
	if (locale === "pt") return pt_understanding_impact_contextbasedarchitecturescancause4(inputs);
	if (locale === "zh") return zh_understanding_impact_contextbasedarchitecturescancause4(inputs);
	if (locale === "ja") return ja_understanding_impact_contextbasedarchitecturescancause4(inputs);
	if (locale === "ko") return ko_understanding_impact_contextbasedarchitecturescancause4(inputs);
	return ru_understanding_impact_contextbasedarchitecturescancause4(inputs);
});
var en_understanding_impact_duringserversiderenderingthe4 = () => {
	return `During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.`;
};
var fr_understanding_impact_duringserversiderenderingthe4 = () => {
	return `Lors du rendu côté serveur, le dictionnaire complet est sérialisé dans le payload HTML, augmentant la taille du document qui doit être téléchargé et hydraté.`;
};
var es_understanding_impact_duringserversiderenderingthe4 = () => {
	return `Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.`;
};
var de_understanding_impact_duringserversiderenderingthe4 = () => {
	return `Während des serverseitigen Renderings wird das vollständige Wörterbuch in den HTML-Payload serialisiert, wodurch sich die Dokumentgröße erhöht, die heruntergeladen und hydratisiert werden muss.`;
};
var it_understanding_impact_duringserversiderenderingthe4 = () => {
	return `Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idrato.`;
};
var pt_understanding_impact_duringserversiderenderingthe4 = () => {
	return `Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil de HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.`;
};
var zh_understanding_impact_duringserversiderenderingthe4 = () => {
	return `在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。`;
};
var ja_understanding_impact_duringserversiderenderingthe4 = () => {
	return `サーバーサイドレンダリング中、辞書全体が HTML ペイロードにシリアライズされ、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。`;
};
var ko_understanding_impact_duringserversiderenderingthe4 = () => {
	return `서버 사이드 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어, 다운로드 및 수화가 필요한 문서 크기가 증가합니다.`;
};
var ru_understanding_impact_duringserversiderenderingthe4 = () => {
	return `Во время серверного рендеринга весь словарь сериализуется в HTML-пейлоад, увеличивая размер документа, который необходимо загрузить и гидратировать.`;
};
var understanding_impact_duringserversiderenderingthe4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_understanding_impact_duringserversiderenderingthe4(inputs);
	if (locale === "fr") return fr_understanding_impact_duringserversiderenderingthe4(inputs);
	if (locale === "es") return es_understanding_impact_duringserversiderenderingthe4(inputs);
	if (locale === "de") return de_understanding_impact_duringserversiderenderingthe4(inputs);
	if (locale === "it") return it_understanding_impact_duringserversiderenderingthe4(inputs);
	if (locale === "pt") return pt_understanding_impact_duringserversiderenderingthe4(inputs);
	if (locale === "zh") return zh_understanding_impact_duringserversiderenderingthe4(inputs);
	if (locale === "ja") return ja_understanding_impact_duringserversiderenderingthe4(inputs);
	if (locale === "ko") return ko_understanding_impact_duringserversiderenderingthe4(inputs);
	return ru_understanding_impact_duringserversiderenderingthe4(inputs);
});
var en_understanding_impact_thetradeoffsofdynamic4 = () => {
	return `The trade-offs of dynamic loading`;
};
var fr_understanding_impact_thetradeoffsofdynamic4 = () => {
	return `Les compromis du chargement dynamique`;
};
var es_understanding_impact_thetradeoffsofdynamic4 = () => {
	return `Las compensaciones de la carga dinámica`;
};
var de_understanding_impact_thetradeoffsofdynamic4 = () => {
	return `Die Kompromisse beim dynamischen Laden`;
};
var it_understanding_impact_thetradeoffsofdynamic4 = () => {
	return `I compromessi del caricamento dinamico`;
};
var pt_understanding_impact_thetradeoffsofdynamic4 = () => {
	return `As compensações do carregamento dinâmico`;
};
var zh_understanding_impact_thetradeoffsofdynamic4 = () => {
	return `动态加载的权衡`;
};
var ja_understanding_impact_thetradeoffsofdynamic4 = () => {
	return `動的読み込みのトレードオフ`;
};
var ko_understanding_impact_thetradeoffsofdynamic4 = () => {
	return `동적 로딩의 트레이드오프`;
};
var ru_understanding_impact_thetradeoffsofdynamic4 = () => {
	return `Компромиссы динамической загрузки`;
};
var understanding_impact_thetradeoffsofdynamic4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_understanding_impact_thetradeoffsofdynamic4(inputs);
	if (locale === "fr") return fr_understanding_impact_thetradeoffsofdynamic4(inputs);
	if (locale === "es") return es_understanding_impact_thetradeoffsofdynamic4(inputs);
	if (locale === "de") return de_understanding_impact_thetradeoffsofdynamic4(inputs);
	if (locale === "it") return it_understanding_impact_thetradeoffsofdynamic4(inputs);
	if (locale === "pt") return pt_understanding_impact_thetradeoffsofdynamic4(inputs);
	if (locale === "zh") return zh_understanding_impact_thetradeoffsofdynamic4(inputs);
	if (locale === "ja") return ja_understanding_impact_thetradeoffsofdynamic4(inputs);
	if (locale === "ko") return ko_understanding_impact_thetradeoffsofdynamic4(inputs);
	return ru_understanding_impact_thetradeoffsofdynamic4(inputs);
});
var en_understanding_impact_splittingtranslationsintoperroute4 = () => {
	return `Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:`;
};
var fr_understanding_impact_splittingtranslationsintoperroute4 = () => {
	return `La division des traductions en morceaux par route ou par espace de noms peut réduire considérablement le payload initial. Mais cela introduit de nouveaux défis :`;
};
var es_understanding_impact_splittingtranslationsintoperroute4 = () => {
	return `Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:`;
};
var de_understanding_impact_splittingtranslationsintoperroute4 = () => {
	return `Das Aufteilen von Übersetzungen in Teilstücke pro Route oder Namensraum kann den initialen Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:`;
};
var it_understanding_impact_splittingtranslationsintoperroute4 = () => {
	return `La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:`;
};
var pt_understanding_impact_splittingtranslationsintoperroute4 = () => {
	return `Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas introduz novos desafios:`;
};
var zh_understanding_impact_splittingtranslationsintoperroute4 = () => {
	return `将翻译拆分为每个路由或每个命名空间的块可以显著减少初始负载。但它引入了新的挑战：`;
};
var ja_understanding_impact_splittingtranslationsintoperroute4 = () => {
	return `翻訳をルートごと、または名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新たな課題も生じます：`;
};
var ko_understanding_impact_splittingtranslationsintoperroute4 = () => {
	return `번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 크게 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다:`;
};
var ru_understanding_impact_splittingtranslationsintoperroute4 = () => {
	return `Разделение переводов на чанки для каждого маршрута или пространства имен может значительно уменьшить начальный пейлоад. Но это создает новые проблемы:`;
};
var understanding_impact_splittingtranslationsintoperroute4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_understanding_impact_splittingtranslationsintoperroute4(inputs);
	if (locale === "fr") return fr_understanding_impact_splittingtranslationsintoperroute4(inputs);
	if (locale === "es") return es_understanding_impact_splittingtranslationsintoperroute4(inputs);
	if (locale === "de") return de_understanding_impact_splittingtranslationsintoperroute4(inputs);
	if (locale === "it") return it_understanding_impact_splittingtranslationsintoperroute4(inputs);
	if (locale === "pt") return pt_understanding_impact_splittingtranslationsintoperroute4(inputs);
	if (locale === "zh") return zh_understanding_impact_splittingtranslationsintoperroute4(inputs);
	if (locale === "ja") return ja_understanding_impact_splittingtranslationsintoperroute4(inputs);
	if (locale === "ko") return ko_understanding_impact_splittingtranslationsintoperroute4(inputs);
	return ru_understanding_impact_splittingtranslationsintoperroute4(inputs);
});
var en_understanding_impact_waterfallrequests1 = () => {
	return `Waterfall requests:`;
};
var fr_understanding_impact_waterfallrequests1 = () => {
	return `Requêtes en cascade :`;
};
var es_understanding_impact_waterfallrequests1 = () => {
	return `Solicitudes en cascada:`;
};
var de_understanding_impact_waterfallrequests1 = () => {
	return `Waterfall-Anfragen:`;
};
var it_understanding_impact_waterfallrequests1 = () => {
	return `Richieste a cascata:`;
};
var pt_understanding_impact_waterfallrequests1 = () => {
	return `Pedidos em cascata:`;
};
var zh_understanding_impact_waterfallrequests1 = () => {
	return `瀑布流请求：`;
};
var ja_understanding_impact_waterfallrequests1 = () => {
	return `ウォーターフォールリクエスト:`;
};
var ko_understanding_impact_waterfallrequests1 = () => {
	return `워터폴(Waterfall) 요청:`;
};
var ru_understanding_impact_waterfallrequests1 = () => {
	return `Каскадные запросы (Waterfall requests):`;
};
var understanding_impact_waterfallrequests1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_understanding_impact_waterfallrequests1(inputs);
	if (locale === "fr") return fr_understanding_impact_waterfallrequests1(inputs);
	if (locale === "es") return es_understanding_impact_waterfallrequests1(inputs);
	if (locale === "de") return de_understanding_impact_waterfallrequests1(inputs);
	if (locale === "it") return it_understanding_impact_waterfallrequests1(inputs);
	if (locale === "pt") return pt_understanding_impact_waterfallrequests1(inputs);
	if (locale === "zh") return zh_understanding_impact_waterfallrequests1(inputs);
	if (locale === "ja") return ja_understanding_impact_waterfallrequests1(inputs);
	if (locale === "ko") return ko_understanding_impact_waterfallrequests1(inputs);
	return ru_understanding_impact_waterfallrequests1(inputs);
});
var en_understanding_impact_waterfallrequestsdesc2 = () => {
	return `the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.`;
};
var fr_understanding_impact_waterfallrequestsdesc2 = () => {
	return `l'application doit d'abord se charger, déterminer la langue, puis récupérer le bon morceau — ajoutant des allers-retours réseau.`;
};
var es_understanding_impact_waterfallrequestsdesc2 = en_understanding_impact_waterfallrequestsdesc2;
var de_understanding_impact_waterfallrequestsdesc2 = en_understanding_impact_waterfallrequestsdesc2;
var it_understanding_impact_waterfallrequestsdesc2 = en_understanding_impact_waterfallrequestsdesc2;
var pt_understanding_impact_waterfallrequestsdesc2 = en_understanding_impact_waterfallrequestsdesc2;
var zh_understanding_impact_waterfallrequestsdesc2 = en_understanding_impact_waterfallrequestsdesc2;
var ja_understanding_impact_waterfallrequestsdesc2 = en_understanding_impact_waterfallrequestsdesc2;
var ko_understanding_impact_waterfallrequestsdesc2 = en_understanding_impact_waterfallrequestsdesc2;
var ru_understanding_impact_waterfallrequestsdesc2 = en_understanding_impact_waterfallrequestsdesc2;
var understanding_impact_waterfallrequestsdesc2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_understanding_impact_waterfallrequestsdesc2(inputs);
	if (locale === "fr") return fr_understanding_impact_waterfallrequestsdesc2(inputs);
	if (locale === "es") return es_understanding_impact_waterfallrequestsdesc2(inputs);
	if (locale === "de") return de_understanding_impact_waterfallrequestsdesc2(inputs);
	if (locale === "it") return it_understanding_impact_waterfallrequestsdesc2(inputs);
	if (locale === "pt") return pt_understanding_impact_waterfallrequestsdesc2(inputs);
	if (locale === "zh") return zh_understanding_impact_waterfallrequestsdesc2(inputs);
	if (locale === "ja") return ja_understanding_impact_waterfallrequestsdesc2(inputs);
	if (locale === "ko") return ko_understanding_impact_waterfallrequestsdesc2(inputs);
	return ru_understanding_impact_waterfallrequestsdesc2(inputs);
});
var en_understanding_impact_flashofuntranslatedcontentfouc4 = () => {
	return `Flash of untranslated content (FOUC):`;
};
var fr_understanding_impact_flashofuntranslatedcontentfouc4 = () => {
	return `Flash de contenu non traduit (FOUC) :`;
};
var es_understanding_impact_flashofuntranslatedcontentfouc4 = () => {
	return `Parpadeo de contenido no traducido (FOUC):`;
};
var de_understanding_impact_flashofuntranslatedcontentfouc4 = () => {
	return `Aufblitzen von nicht übersetztem Inhalt (FOUC):`;
};
var it_understanding_impact_flashofuntranslatedcontentfouc4 = () => {
	return `Flash di contenuti non tradotti (FOUC):`;
};
var pt_understanding_impact_flashofuntranslatedcontentfouc4 = () => {
	return `Flash de conteúdo não traduzido (FOUC):`;
};
var zh_understanding_impact_flashofuntranslatedcontentfouc4 = () => {
	return `未翻译内容闪烁 (FOUC)：`;
};
var ja_understanding_impact_flashofuntranslatedcontentfouc4 = () => {
	return `未翻訳コンテンツのフラッシュ (FOUC):`;
};
var ko_understanding_impact_flashofuntranslatedcontentfouc4 = () => {
	return `번역되지 않은 콘텐츠의 깜빡임 (FOUC):`;
};
var ru_understanding_impact_flashofuntranslatedcontentfouc4 = () => {
	return `Мерцание непереведенного контента (FOUC):`;
};
var understanding_impact_flashofuntranslatedcontentfouc4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_understanding_impact_flashofuntranslatedcontentfouc4(inputs);
	if (locale === "fr") return fr_understanding_impact_flashofuntranslatedcontentfouc4(inputs);
	if (locale === "es") return es_understanding_impact_flashofuntranslatedcontentfouc4(inputs);
	if (locale === "de") return de_understanding_impact_flashofuntranslatedcontentfouc4(inputs);
	if (locale === "it") return it_understanding_impact_flashofuntranslatedcontentfouc4(inputs);
	if (locale === "pt") return pt_understanding_impact_flashofuntranslatedcontentfouc4(inputs);
	if (locale === "zh") return zh_understanding_impact_flashofuntranslatedcontentfouc4(inputs);
	if (locale === "ja") return ja_understanding_impact_flashofuntranslatedcontentfouc4(inputs);
	if (locale === "ko") return ko_understanding_impact_flashofuntranslatedcontentfouc4(inputs);
	return ru_understanding_impact_flashofuntranslatedcontentfouc4(inputs);
});
var en_understanding_impact_flashofuntranslatedcontentfoucdesc5 = () => {
	return `users may briefly see translation keys or a fallback language before the chunk arrives.`;
};
var fr_understanding_impact_flashofuntranslatedcontentfoucdesc5 = () => {
	return `les utilisateurs peuvent brièvement voir les clés de traduction ou une langue de repli avant l'arrivée du morceau.`;
};
var es_understanding_impact_flashofuntranslatedcontentfoucdesc5 = en_understanding_impact_flashofuntranslatedcontentfoucdesc5;
var de_understanding_impact_flashofuntranslatedcontentfoucdesc5 = en_understanding_impact_flashofuntranslatedcontentfoucdesc5;
var it_understanding_impact_flashofuntranslatedcontentfoucdesc5 = en_understanding_impact_flashofuntranslatedcontentfoucdesc5;
var pt_understanding_impact_flashofuntranslatedcontentfoucdesc5 = en_understanding_impact_flashofuntranslatedcontentfoucdesc5;
var zh_understanding_impact_flashofuntranslatedcontentfoucdesc5 = en_understanding_impact_flashofuntranslatedcontentfoucdesc5;
var ja_understanding_impact_flashofuntranslatedcontentfoucdesc5 = en_understanding_impact_flashofuntranslatedcontentfoucdesc5;
var ko_understanding_impact_flashofuntranslatedcontentfoucdesc5 = en_understanding_impact_flashofuntranslatedcontentfoucdesc5;
var ru_understanding_impact_flashofuntranslatedcontentfoucdesc5 = en_understanding_impact_flashofuntranslatedcontentfoucdesc5;
var understanding_impact_flashofuntranslatedcontentfoucdesc5 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_understanding_impact_flashofuntranslatedcontentfoucdesc5(inputs);
	if (locale === "fr") return fr_understanding_impact_flashofuntranslatedcontentfoucdesc5(inputs);
	if (locale === "es") return es_understanding_impact_flashofuntranslatedcontentfoucdesc5(inputs);
	if (locale === "de") return de_understanding_impact_flashofuntranslatedcontentfoucdesc5(inputs);
	if (locale === "it") return it_understanding_impact_flashofuntranslatedcontentfoucdesc5(inputs);
	if (locale === "pt") return pt_understanding_impact_flashofuntranslatedcontentfoucdesc5(inputs);
	if (locale === "zh") return zh_understanding_impact_flashofuntranslatedcontentfoucdesc5(inputs);
	if (locale === "ja") return ja_understanding_impact_flashofuntranslatedcontentfoucdesc5(inputs);
	if (locale === "ko") return ko_understanding_impact_flashofuntranslatedcontentfoucdesc5(inputs);
	return ru_understanding_impact_flashofuntranslatedcontentfoucdesc5(inputs);
});
var en_understanding_impact_cacheinvalidation1 = () => {
	return `Cache invalidation:`;
};
var fr_understanding_impact_cacheinvalidation1 = () => {
	return `Invalidation du cache :`;
};
var es_understanding_impact_cacheinvalidation1 = () => {
	return `Invalidación de la caché:`;
};
var de_understanding_impact_cacheinvalidation1 = () => {
	return `Cache-Invalidierung:`;
};
var it_understanding_impact_cacheinvalidation1 = () => {
	return `Invalidazione della cache:`;
};
var pt_understanding_impact_cacheinvalidation1 = () => {
	return `Invalidação de cache:`;
};
var zh_understanding_impact_cacheinvalidation1 = () => {
	return `缓存失效：`;
};
var ja_understanding_impact_cacheinvalidation1 = () => {
	return `キャッシュの無効化:`;
};
var ko_understanding_impact_cacheinvalidation1 = () => {
	return `캐시 무효화:`;
};
var ru_understanding_impact_cacheinvalidation1 = () => {
	return `Инвалидация кэша:`;
};
var understanding_impact_cacheinvalidation1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_understanding_impact_cacheinvalidation1(inputs);
	if (locale === "fr") return fr_understanding_impact_cacheinvalidation1(inputs);
	if (locale === "es") return es_understanding_impact_cacheinvalidation1(inputs);
	if (locale === "de") return de_understanding_impact_cacheinvalidation1(inputs);
	if (locale === "it") return it_understanding_impact_cacheinvalidation1(inputs);
	if (locale === "pt") return pt_understanding_impact_cacheinvalidation1(inputs);
	if (locale === "zh") return zh_understanding_impact_cacheinvalidation1(inputs);
	if (locale === "ja") return ja_understanding_impact_cacheinvalidation1(inputs);
	if (locale === "ko") return ko_understanding_impact_cacheinvalidation1(inputs);
	return ru_understanding_impact_cacheinvalidation1(inputs);
});
var en_understanding_impact_cacheinvalidationdesc2 = () => {
	return `updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.`;
};
var fr_understanding_impact_cacheinvalidationdesc2 = () => {
	return `la mise à jour des traductions nécessite des stratégies de purge du cache pour garantir que les utilisateurs reçoivent le contenu frais sans re-télécharger les morceaux inchangés.`;
};
var es_understanding_impact_cacheinvalidationdesc2 = en_understanding_impact_cacheinvalidationdesc2;
var de_understanding_impact_cacheinvalidationdesc2 = en_understanding_impact_cacheinvalidationdesc2;
var it_understanding_impact_cacheinvalidationdesc2 = en_understanding_impact_cacheinvalidationdesc2;
var pt_understanding_impact_cacheinvalidationdesc2 = en_understanding_impact_cacheinvalidationdesc2;
var zh_understanding_impact_cacheinvalidationdesc2 = en_understanding_impact_cacheinvalidationdesc2;
var ja_understanding_impact_cacheinvalidationdesc2 = en_understanding_impact_cacheinvalidationdesc2;
var ko_understanding_impact_cacheinvalidationdesc2 = en_understanding_impact_cacheinvalidationdesc2;
var ru_understanding_impact_cacheinvalidationdesc2 = en_understanding_impact_cacheinvalidationdesc2;
var understanding_impact_cacheinvalidationdesc2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_understanding_impact_cacheinvalidationdesc2(inputs);
	if (locale === "fr") return fr_understanding_impact_cacheinvalidationdesc2(inputs);
	if (locale === "es") return es_understanding_impact_cacheinvalidationdesc2(inputs);
	if (locale === "de") return de_understanding_impact_cacheinvalidationdesc2(inputs);
	if (locale === "it") return it_understanding_impact_cacheinvalidationdesc2(inputs);
	if (locale === "pt") return pt_understanding_impact_cacheinvalidationdesc2(inputs);
	if (locale === "zh") return zh_understanding_impact_cacheinvalidationdesc2(inputs);
	if (locale === "ja") return ja_understanding_impact_cacheinvalidationdesc2(inputs);
	if (locale === "ko") return ko_understanding_impact_cacheinvalidationdesc2(inputs);
	return ru_understanding_impact_cacheinvalidationdesc2(inputs);
});
var en_understanding_impact_whatthisbenchmarkmeasures3 = () => {
	return `What this benchmark measures`;
};
var fr_understanding_impact_whatthisbenchmarkmeasures3 = () => {
	return `Ce que ce benchmark mesure`;
};
var es_understanding_impact_whatthisbenchmarkmeasures3 = () => {
	return `Qué mide este benchmark`;
};
var de_understanding_impact_whatthisbenchmarkmeasures3 = () => {
	return `Was dieser Benchmark misst`;
};
var it_understanding_impact_whatthisbenchmarkmeasures3 = () => {
	return `Cosa misura questo benchmark`;
};
var pt_understanding_impact_whatthisbenchmarkmeasures3 = () => {
	return `O que este benchmark mede`;
};
var zh_understanding_impact_whatthisbenchmarkmeasures3 = () => {
	return `本基准测试测量什么`;
};
var ja_understanding_impact_whatthisbenchmarkmeasures3 = () => {
	return `このベンチマークが測定するもの`;
};
var ko_understanding_impact_whatthisbenchmarkmeasures3 = () => {
	return `이 벤치마크가 측정하는 것`;
};
var ru_understanding_impact_whatthisbenchmarkmeasures3 = () => {
	return `Что измеряет этот бенчмарк`;
};
var understanding_impact_whatthisbenchmarkmeasures3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_understanding_impact_whatthisbenchmarkmeasures3(inputs);
	if (locale === "fr") return fr_understanding_impact_whatthisbenchmarkmeasures3(inputs);
	if (locale === "es") return es_understanding_impact_whatthisbenchmarkmeasures3(inputs);
	if (locale === "de") return de_understanding_impact_whatthisbenchmarkmeasures3(inputs);
	if (locale === "it") return it_understanding_impact_whatthisbenchmarkmeasures3(inputs);
	if (locale === "pt") return pt_understanding_impact_whatthisbenchmarkmeasures3(inputs);
	if (locale === "zh") return zh_understanding_impact_whatthisbenchmarkmeasures3(inputs);
	if (locale === "ja") return ja_understanding_impact_whatthisbenchmarkmeasures3(inputs);
	if (locale === "ko") return ko_understanding_impact_whatthisbenchmarkmeasures3(inputs);
	return ru_understanding_impact_whatthisbenchmarkmeasures3(inputs);
});
var en_understanding_impact_thistestappprovidesa4 = () => {
	return `This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.`;
};
var fr_understanding_impact_thistestappprovidesa4 = () => {
	return `Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.`;
};
var es_understanding_impact_thistestappprovidesa4 = () => {
	return `Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.`;
};
var de_understanding_impact_thistestappprovidesa4 = () => {
	return `Diese Test-App bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.`;
};
var it_understanding_impact_thistestappprovidesa4 = () => {
	return `Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.`;
};
var pt_understanding_impact_thistestappprovidesa4 = () => {
	return `Esta aplicação de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu pacote de JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia das suas estratégias de divisão de código e de carregamento tardio. Cada biblioteca é integrada na mesma aplicação para que os resultados sejam diretamente comparáveis.`;
};
var zh_understanding_impact_thistestappprovidesa4 = () => {
	return `此测试应用提供了一个受控环境 —— 10 个具有现实内容的页面 —— 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的权重、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。`;
};
var ja_understanding_impact_thistestappprovidesa4 = () => {
	return `このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、3つの軸でi18nライブラリを比較します：JavaScriptバンドルに追加される重量、翻訳されたコンテンツのパースとレンダリングに費やされる時間、そしてコード分割と遅延読み込み戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。`;
};
var ko_understanding_impact_thistestappprovidesa4 = () => {
	return `이 테스트 앱은 현실적인 콘텐츠가 포함된 10개의 페이지로 구성된 제어된 환경을 제공하여 세 가지 축에서 i18n 라이브러리를 비교합니다: JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 파싱하고 렌더링하는 데 소요되는 시간, 그리고 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접적으로 비교 가능합니다.`;
};
var ru_understanding_impact_thistestappprovidesa4 = () => {
	return `Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют вашему JavaScript-бандлу, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.`;
};
var understanding_impact_thistestappprovidesa4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_understanding_impact_thistestappprovidesa4(inputs);
	if (locale === "fr") return fr_understanding_impact_thistestappprovidesa4(inputs);
	if (locale === "es") return es_understanding_impact_thistestappprovidesa4(inputs);
	if (locale === "de") return de_understanding_impact_thistestappprovidesa4(inputs);
	if (locale === "it") return it_understanding_impact_thistestappprovidesa4(inputs);
	if (locale === "pt") return pt_understanding_impact_thistestappprovidesa4(inputs);
	if (locale === "zh") return zh_understanding_impact_thistestappprovidesa4(inputs);
	if (locale === "ja") return ja_understanding_impact_thistestappprovidesa4(inputs);
	if (locale === "ko") return ko_understanding_impact_thistestappprovidesa4(inputs);
	return ru_understanding_impact_thistestappprovidesa4(inputs);
});
function UnderstandingImpact() {
	return jsxs("section", {
		className: "mb-16 mx-auto max-w-3xl space-y-6",
		children: [
			jsx("h2", {
				className: "text-2xl font-bold text-foreground",
				children: understanding_impact_understandingtheimpact2()
			}),
			jsxs("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					jsx("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: understanding_impact_whyasinglelargejson4()
					}),
					jsx("p", {
						className: "text-sm text-muted-foreground",
						children: understanding_impact_manyi18nlibrariesstoretranslations4()
					}),
					jsxs("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							jsx("li", { children: understanding_impact_thejsonmustbeparsed4() }),
							jsx("li", { children: understanding_impact_contextbasedarchitecturescancause4() }),
							jsx("li", { children: understanding_impact_duringserversiderenderingthe4() })
						]
					})
				]
			}),
			jsxs("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					jsx("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: understanding_impact_thetradeoffsofdynamic4()
					}),
					jsx("p", {
						className: "text-sm text-muted-foreground",
						children: understanding_impact_splittingtranslationsintoperroute4()
					}),
					jsxs("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							jsxs("li", { children: [
								jsx("strong", {
									className: "text-foreground",
									children: understanding_impact_waterfallrequests1()
								}),
								" ",
								understanding_impact_waterfallrequestsdesc2 ? understanding_impact_waterfallrequestsdesc2() : "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips."
							] }),
							jsxs("li", { children: [
								jsx("strong", {
									className: "text-foreground",
									children: understanding_impact_flashofuntranslatedcontentfouc4()
								}),
								" ",
								understanding_impact_flashofuntranslatedcontentfoucdesc5 ? understanding_impact_flashofuntranslatedcontentfoucdesc5() : "users may briefly see translation keys or a fallback language before the chunk arrives."
							] }),
							jsxs("li", { children: [
								jsx("strong", {
									className: "text-foreground",
									children: understanding_impact_cacheinvalidation1()
								}),
								" ",
								understanding_impact_cacheinvalidationdesc2 ? understanding_impact_cacheinvalidationdesc2() : "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks."
							] })
						]
					})
				]
			}),
			jsxs("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [jsx("h3", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: understanding_impact_whatthisbenchmarkmeasures3()
				}), jsx("p", {
					className: "text-sm text-muted-foreground",
					children: understanding_impact_thistestappprovidesa4()
				})]
			})
		]
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
	return jsx(Wrapper, { children: jsx(UnderstandingImpact, {}) });
}
export { Wrapped as default };
