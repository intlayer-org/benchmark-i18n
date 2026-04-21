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
var en_why_it_matters_whythesemetricsmatter3 = () => {
	return `Why These Metrics Matter`;
};
var fr_why_it_matters_whythesemetricsmatter3 = () => {
	return `Pourquoi ces mesures sont importantes`;
};
var es_why_it_matters_whythesemetricsmatter3 = () => {
	return `Por qué son importantes estas métricas`;
};
var de_why_it_matters_whythesemetricsmatter3 = () => {
	return `Warum diese Metriken wichtig sind`;
};
var it_why_it_matters_whythesemetricsmatter3 = () => {
	return `Perché queste metriche sono importanti`;
};
var pt_why_it_matters_whythesemetricsmatter3 = () => {
	return `Por que essas métricas são importantes`;
};
var zh_why_it_matters_whythesemetricsmatter3 = () => {
	return `为什么这些指标很重要`;
};
var ja_why_it_matters_whythesemetricsmatter3 = () => {
	return `これらの指標が重要な理由`;
};
var ko_why_it_matters_whythesemetricsmatter3 = () => {
	return `이 지표가 중요한 이유`;
};
var ru_why_it_matters_whythesemetricsmatter3 = () => {
	return `Почему эти показатели важны`;
};
var why_it_matters_whythesemetricsmatter3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_why_it_matters_whythesemetricsmatter3(inputs);
	if (locale === "fr") return fr_why_it_matters_whythesemetricsmatter3(inputs);
	if (locale === "es") return es_why_it_matters_whythesemetricsmatter3(inputs);
	if (locale === "de") return de_why_it_matters_whythesemetricsmatter3(inputs);
	if (locale === "it") return it_why_it_matters_whythesemetricsmatter3(inputs);
	if (locale === "pt") return pt_why_it_matters_whythesemetricsmatter3(inputs);
	if (locale === "zh") return zh_why_it_matters_whythesemetricsmatter3(inputs);
	if (locale === "ja") return ja_why_it_matters_whythesemetricsmatter3(inputs);
	if (locale === "ko") return ko_why_it_matters_whythesemetricsmatter3(inputs);
	return ru_why_it_matters_whythesemetricsmatter3(inputs);
});
var en_why_it_matters_bundlesize1 = () => {
	return `Bundle Size`;
};
var fr_why_it_matters_bundlesize1 = () => {
	return `Taille du bundle`;
};
var es_why_it_matters_bundlesize1 = () => {
	return `Tamaño del bundle`;
};
var de_why_it_matters_bundlesize1 = () => {
	return `Bundle-Größe`;
};
var it_why_it_matters_bundlesize1 = () => {
	return `Dimensione del bundle`;
};
var pt_why_it_matters_bundlesize1 = () => {
	return `Tamanho do Bundle`;
};
var zh_why_it_matters_bundlesize1 = () => {
	return `包大小`;
};
var ja_why_it_matters_bundlesize1 = () => {
	return `バンドルサイズ`;
};
var ko_why_it_matters_bundlesize1 = () => {
	return `번들 크기`;
};
var ru_why_it_matters_bundlesize1 = () => {
	return `Размер бандла`;
};
var why_it_matters_bundlesize1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_why_it_matters_bundlesize1(inputs);
	if (locale === "fr") return fr_why_it_matters_bundlesize1(inputs);
	if (locale === "es") return es_why_it_matters_bundlesize1(inputs);
	if (locale === "de") return de_why_it_matters_bundlesize1(inputs);
	if (locale === "it") return it_why_it_matters_bundlesize1(inputs);
	if (locale === "pt") return pt_why_it_matters_bundlesize1(inputs);
	if (locale === "zh") return zh_why_it_matters_bundlesize1(inputs);
	if (locale === "ja") return ja_why_it_matters_bundlesize1(inputs);
	if (locale === "ko") return ko_why_it_matters_bundlesize1(inputs);
	return ru_why_it_matters_bundlesize1(inputs);
});
var en_why_it_matters_thebundleisthedata4 = () => {
	return `The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.`;
};
var fr_why_it_matters_thebundleisthedata4 = () => {
	return `Le bundle représente les données envoyées à chaque utilisateur dans le monde. Un bundle plus volumineux signifie des temps de téléchargement plus longs — particulièrement sur des connexions 3G lentes courantes dans de nombreuses régions. Les bibliothèques i18n varient considérablement dans leur poids : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, plus les fichiers de traduction eux-mêmes.`;
};
var es_why_it_matters_thebundleisthedata4 = () => {
	return `El bundle representa los datos enviados a cada usuario en todo el mundo. Un bundle más grande significa tiempos de descarga más largos, especialmente en las conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código runtime, además de los propios archivos de traducción.`;
};
var de_why_it_matters_thebundleisthedata4 = () => {
	return `Das Bundle sind die Daten, die an jeden Benutzer weltweit gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — besonders bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren drastisch in ihrem Gewicht: von einigen Kilobytes bis zu zig Kilobytes an Laufzeitcode, plus die Übersetzungsdateien selbst.`;
};
var it_why_it_matters_thebundleisthedata4 = () => {
	return `Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.`;
};
var pt_why_it_matters_thebundleisthedata4 = () => {
	return `O bundle representa os dados enviados a cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código de tempo de execução, além dos próprios arquivos de tradução.`;
};
var zh_why_it_matters_thebundleisthedata4 = () => {
	return `包是发送给全球每个用户的数据。更大的包意味着更长的下载时间——特别是在许多地区常见的慢速 3G 连接上。i18n 库的权重差异巨大：从几 KB 到几十 KB 的运行时代码，外加翻译文件本身。`;
};
var ja_why_it_matters_thebundleisthedata4 = () => {
	return `バンドルは、世界中のすべてのユーザーに送られるデータです。バンドルが大きいほどダウンロード時間が長くなります。特に多くの地域で一般的な低速な3G接続では顕著です。i18nライブラリはその重量が劇的に異なります。ランタイムコードだけで数キロバイトから数十キロバイト、さらに翻訳ファイル自体が加わります。`;
};
var ko_why_it_matters_thebundleisthedata4 = () => {
	return `번들은 전 세계 모든 사용자에게 전송되는 데이터를 나타냅니다. 번들이 클수록 다운로드 시간이 길어집니다. 특히 많은 지역에서 흔히 발생하는 느린 3G 연결에서 더욱 그렇습니다. i18n 라이브러리는 런타임 코드만으로도 수 킬로바이트에서 수십 킬로바이트까지 무게가 크게 다르며, 여기에 번역 파일 자체가 추가됩니다.`;
};
var ru_why_it_matters_thebundleisthedata4 = () => {
	return `Бандл — это данные, которые отправляются каждому пользователю по всему миру. Большой размер бандла означает более долгое время загрузки, особенно при медленном 3G-соединении, характерном для многих регионов. Библиотеки i18n сильно различаются по весу: от нескольких килобайт до десятков килобайт рантайм-кода, плюс сами файлы переводов.`;
};
var why_it_matters_thebundleisthedata4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_why_it_matters_thebundleisthedata4(inputs);
	if (locale === "fr") return fr_why_it_matters_thebundleisthedata4(inputs);
	if (locale === "es") return es_why_it_matters_thebundleisthedata4(inputs);
	if (locale === "de") return de_why_it_matters_thebundleisthedata4(inputs);
	if (locale === "it") return it_why_it_matters_thebundleisthedata4(inputs);
	if (locale === "pt") return pt_why_it_matters_thebundleisthedata4(inputs);
	if (locale === "zh") return zh_why_it_matters_thebundleisthedata4(inputs);
	if (locale === "ja") return ja_why_it_matters_thebundleisthedata4(inputs);
	if (locale === "ko") return ko_why_it_matters_thebundleisthedata4(inputs);
	return ru_why_it_matters_thebundleisthedata4(inputs);
});
var en_why_it_matters_renderinghydration1 = () => {
	return `Rendering & Hydration`;
};
var fr_why_it_matters_renderinghydration1 = () => {
	return `Rendu & Hydratation`;
};
var es_why_it_matters_renderinghydration1 = () => {
	return `Renderizado e hidratación`;
};
var de_why_it_matters_renderinghydration1 = () => {
	return `Rendering & Hydratisierung`;
};
var it_why_it_matters_renderinghydration1 = () => {
	return `Rendering e idratazione`;
};
var pt_why_it_matters_renderinghydration1 = () => {
	return `Renderização e Hidratação`;
};
var zh_why_it_matters_renderinghydration1 = () => {
	return `渲染与注水`;
};
var ja_why_it_matters_renderinghydration1 = () => {
	return `レンダリングとハイドレーション`;
};
var ko_why_it_matters_renderinghydration1 = () => {
	return `렌더링 및 수화(Hydration)`;
};
var ru_why_it_matters_renderinghydration1 = () => {
	return `Рендеринг и гидратация`;
};
var why_it_matters_renderinghydration1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_why_it_matters_renderinghydration1(inputs);
	if (locale === "fr") return fr_why_it_matters_renderinghydration1(inputs);
	if (locale === "es") return es_why_it_matters_renderinghydration1(inputs);
	if (locale === "de") return de_why_it_matters_renderinghydration1(inputs);
	if (locale === "it") return it_why_it_matters_renderinghydration1(inputs);
	if (locale === "pt") return pt_why_it_matters_renderinghydration1(inputs);
	if (locale === "zh") return zh_why_it_matters_renderinghydration1(inputs);
	if (locale === "ja") return ja_why_it_matters_renderinghydration1(inputs);
	if (locale === "ko") return ko_why_it_matters_renderinghydration1(inputs);
	return ru_why_it_matters_renderinghydration1(inputs);
});
var en_why_it_matters_connectingalargejsondictionary4 = () => {
	return `Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).`;
};
var fr_why_it_matters_connectingalargejsondictionary4 = () => {
	return `La connexion d'un dictionnaire JSON volumineux à chaque composant crée une dépendance cachée : tout changement dans le contexte de traduction peut déclencher des re-rendus sur l'ensemble de l'arbre. Pendant l'hydratation SSR, l'analyse et l'attachement d'objets de traduction massifs ajoutent de la latence avant que la page ne devienne interactive — impactant directement le Time to Interactive (TTI).`;
};
var es_why_it_matters_connectingalargejsondictionary4 = () => {
	return `Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página sea interactiva, lo que afecta directamente al Time to Interactive (TTI).`;
};
var de_why_it_matters_connectingalargejsondictionary4 = () => {
	return `Das Verbinden eines großen JSON-Wörterbuchs mit jeder Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydratisierung führt das Parsen und Anhängen massiver Übersetzungsobjekte zu Latenzzeiten, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.`;
};
var it_why_it_matters_connectingalargejsondictionary4 = () => {
	return `Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).`;
};
var pt_why_it_matters_connectingalargejsondictionary4 = () => {
	return `Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode desencadear novas renderizações em toda a árvore. Durante a hidratação do SSR, a análise e a anexação de objetos de tradução massivos adicionam latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).`;
};
var zh_why_it_matters_connectingalargejsondictionary4 = () => {
	return `将大型 JSON 字典连接到每个组件会创建一个隐藏的依赖：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加庞大的翻译对象会在页面变得可交互之前增加延迟——直接影响可交互时间 (TTI)。`;
};
var ja_why_it_matters_connectingalargejsondictionary4 = () => {
	return `巨大なJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更がツリー全体の再レンダリングを引き起こす可能性があります。SSRのハイドレーション中、巨大な翻訳オブジェクトのパースとアタッチにより、ページがインタラクティブになるまでの遅延が発生し、Time to Interactive (TTI) に直接影響します。`;
};
var ko_why_it_matters_connectingalargejsondictionary4 = () => {
	return `모든 컴포넌트에 대규모 JSON 사전(dictionary)을 연결하면 숨겨진 종속성이 생성됩니다. 번역 컨텍스트의 모든 변경 사항은 전체 트리에서 리렌더링을 유발할 수 있습니다. SSR 수화 단계에서 방대한 번역 객체를 파싱하고 연결하면 페이지가 상호작용 가능해지는 시간까지 지연이 발생하며, 이는 Time to Interactive(TTI)에 직접적인 영향을 미칩니다.`;
};
var ru_why_it_matters_connectingalargejsondictionary4 = () => {
	return `Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг всего дерева. Во время гидратации SSR парсинг и присоединение массивных объектов перевода добавляют задержку до того, как страница станет интерактивной, что напрямую влияет на Time to Interactive (TTI).`;
};
var why_it_matters_connectingalargejsondictionary4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_why_it_matters_connectingalargejsondictionary4(inputs);
	if (locale === "fr") return fr_why_it_matters_connectingalargejsondictionary4(inputs);
	if (locale === "es") return es_why_it_matters_connectingalargejsondictionary4(inputs);
	if (locale === "de") return de_why_it_matters_connectingalargejsondictionary4(inputs);
	if (locale === "it") return it_why_it_matters_connectingalargejsondictionary4(inputs);
	if (locale === "pt") return pt_why_it_matters_connectingalargejsondictionary4(inputs);
	if (locale === "zh") return zh_why_it_matters_connectingalargejsondictionary4(inputs);
	if (locale === "ja") return ja_why_it_matters_connectingalargejsondictionary4(inputs);
	if (locale === "ko") return ko_why_it_matters_connectingalargejsondictionary4(inputs);
	return ru_why_it_matters_connectingalargejsondictionary4(inputs);
});
var en_why_it_matters_dynamicloading1 = () => {
	return `Dynamic Loading`;
};
var fr_why_it_matters_dynamicloading1 = () => {
	return `Chargement dynamique`;
};
var es_why_it_matters_dynamicloading1 = () => {
	return `Carga dinámica`;
};
var de_why_it_matters_dynamicloading1 = () => {
	return `Dynamisches Laden`;
};
var it_why_it_matters_dynamicloading1 = () => {
	return `Caricamento dinamico`;
};
var pt_why_it_matters_dynamicloading1 = () => {
	return `Carregamento Dinâmico`;
};
var zh_why_it_matters_dynamicloading1 = () => {
	return `动态加载`;
};
var ja_why_it_matters_dynamicloading1 = () => {
	return `動的ローディング`;
};
var ko_why_it_matters_dynamicloading1 = () => {
	return `동적 로딩`;
};
var ru_why_it_matters_dynamicloading1 = () => {
	return `Динамическая загрузка`;
};
var why_it_matters_dynamicloading1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_why_it_matters_dynamicloading1(inputs);
	if (locale === "fr") return fr_why_it_matters_dynamicloading1(inputs);
	if (locale === "es") return es_why_it_matters_dynamicloading1(inputs);
	if (locale === "de") return de_why_it_matters_dynamicloading1(inputs);
	if (locale === "it") return it_why_it_matters_dynamicloading1(inputs);
	if (locale === "pt") return pt_why_it_matters_dynamicloading1(inputs);
	if (locale === "zh") return zh_why_it_matters_dynamicloading1(inputs);
	if (locale === "ja") return ja_why_it_matters_dynamicloading1(inputs);
	if (locale === "ko") return ko_why_it_matters_dynamicloading1(inputs);
	return ru_why_it_matters_dynamicloading1(inputs);
});
var en_why_it_matters_loadingalltranslationsupfrontoverloads4 = () => {
	return `Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.`;
};
var fr_why_it_matters_loadingalltranslationsupfrontoverloads4 = () => {
	return `Le chargement de toutes les traductions à l'avance surcharge le payload initial. Le chargement dynamique (lazy) divise les traductions par route ou par namespace, n'envoyant que ce dont la page actuelle a besoin. Cependant, le lazy loading introduit ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité de mise en cache. Mesurer les deux stratégies est essentiel.`;
};
var es_why_it_matters_loadingalltranslationsupfrontoverloads4 = () => {
	return `Cargar todas las traducciones por adelantado sobrecarga el payload inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, la carga diferida introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial.`;
};
var de_why_it_matters_loadingalltranslationsupfrontoverloads4 = () => {
	return `Das Laden aller Übersetzungen im Voraus überlastet den initialen Payload. Dynamisches (Lazy) Loading teilt Übersetzungen nach Route oder Namensraum auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Aufblitzen von nicht übersetzten Inhalten (FOUC) und Cache-Komplexität. Die Messung beider Strategien ist essenziell.`;
};
var it_why_it_matters_loadingalltranslationsupfrontoverloads4 = () => {
	return `Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale.`;
};
var pt_why_it_matters_loadingalltranslationsupfrontoverloads4 = () => {
	return `Carregar todas as traduções antecipadamente sobrecarrega a carga útil inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento tardio introduz suas próprias compensações: solicitações em cascada, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.`;
};
var zh_why_it_matters_loadingalltranslationsupfrontoverloads4 = () => {
	return `预先加载所有翻译会使初始负载过重。动态（延迟）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，延迟加载引入了它自己的权衡：瀑布流请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。`;
};
var ja_why_it_matters_loadingalltranslationsupfrontoverloads4 = () => {
	return `すべての翻訳を事前に読み込むと、初期のペイロードが過負荷になります。動的（遅延）読み込みは、ルートまたは名前空間ごとに翻訳を分割し、現在のページに必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、未翻訳コンテンツのフラッシュ、キャッシュの複雑化といった独自のトレードオフがあります。両方の戦略を測定することが不可欠です。`;
};
var ko_why_it_matters_loadingalltranslationsupfrontoverloads4 = () => {
	return `모든 번역을 미리 로드하면 초기 페이로드가 과부하됩니다. 동적(지연) 로딩은 경로 또는 네임스페이스별로 번역을 분할하여 현재 페이지에 필요한 내용만 전송합니다. 그러나 지연 로딩은 워터폴 요청, 번역되지 않은 콘텐츠의 깜빡임(FOUC), 캐시 복잡성 등 자체적인 트레이드오프를 수반합니다. 두 전략을 모두 측정하는 것이 필수적입니다.`;
};
var ru_why_it_matters_loadingalltranslationsupfrontoverloads4 = () => {
	return `Загрузка всех переводов сразу перегружает начальную полезную нагрузку. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно для текущей страницы. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы (waterfall), мерцание непереведенного контента и сложность кэширования. Измерение обеих стратегий необходимо.`;
};
var why_it_matters_loadingalltranslationsupfrontoverloads4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_why_it_matters_loadingalltranslationsupfrontoverloads4(inputs);
	if (locale === "fr") return fr_why_it_matters_loadingalltranslationsupfrontoverloads4(inputs);
	if (locale === "es") return es_why_it_matters_loadingalltranslationsupfrontoverloads4(inputs);
	if (locale === "de") return de_why_it_matters_loadingalltranslationsupfrontoverloads4(inputs);
	if (locale === "it") return it_why_it_matters_loadingalltranslationsupfrontoverloads4(inputs);
	if (locale === "pt") return pt_why_it_matters_loadingalltranslationsupfrontoverloads4(inputs);
	if (locale === "zh") return zh_why_it_matters_loadingalltranslationsupfrontoverloads4(inputs);
	if (locale === "ja") return ja_why_it_matters_loadingalltranslationsupfrontoverloads4(inputs);
	if (locale === "ko") return ko_why_it_matters_loadingalltranslationsupfrontoverloads4(inputs);
	return ru_why_it_matters_loadingalltranslationsupfrontoverloads4(inputs);
});
function WhyItMatters() {
	return jsxs("section", {
		className: "mb-16",
		children: [jsx("h2", {
			className: "mb-6 text-2xl font-bold text-foreground",
			children: why_it_matters_whythesemetricsmatter3()
		}), jsxs("div", {
			className: "grid gap-6 md:grid-cols-3",
			children: [
				jsxs("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [jsx("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: why_it_matters_bundlesize1()
					}), jsx("p", {
						className: "text-sm text-muted-foreground",
						children: why_it_matters_thebundleisthedata4()
					})]
				}),
				jsxs("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [jsx("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: why_it_matters_renderinghydration1()
					}), jsx("p", {
						className: "text-sm text-muted-foreground",
						children: why_it_matters_connectingalargejsondictionary4()
					})]
				}),
				jsxs("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [jsx("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: why_it_matters_dynamicloading1()
					}), jsx("p", {
						className: "text-sm text-muted-foreground",
						children: why_it_matters_loadingalltranslationsupfrontoverloads4()
					})]
				})
			]
		})]
	});
}
setLocale("en", { reload: false });
function Wrapper({ children }) {
	return jsx(Fragment, { children });
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(WhyItMatters, {}) });
}
export { Wrapped as default };
