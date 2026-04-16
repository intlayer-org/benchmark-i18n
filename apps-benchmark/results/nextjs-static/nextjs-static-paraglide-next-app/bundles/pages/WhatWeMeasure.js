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
var en_what_we_measure_bundlesizeimpact2 = () => {
	return `Bundle size impact`;
};
var fr_what_we_measure_bundlesizeimpact2 = () => {
	return `Impact sur la taille du bundle`;
};
var es_what_we_measure_bundlesizeimpact2 = () => {
	return `Impacto en el tamaño del bundle`;
};
var de_what_we_measure_bundlesizeimpact2 = () => {
	return `Auswirkung auf die Bundle-Größe`;
};
var it_what_we_measure_bundlesizeimpact2 = () => {
	return `Impatto sulla dimensione del bundle`;
};
var pt_what_we_measure_bundlesizeimpact2 = () => {
	return `Impacto no tamanho do bundle`;
};
var zh_what_we_measure_bundlesizeimpact2 = () => {
	return `包大小影响`;
};
var ja_what_we_measure_bundlesizeimpact2 = () => {
	return `バンドルサイズへの影響`;
};
var ko_what_we_measure_bundlesizeimpact2 = () => {
	return `번들 크기 영향`;
};
var ru_what_we_measure_bundlesizeimpact2 = () => {
	return `Влияние на размер бандла`;
};
var what_we_measure_bundlesizeimpact2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_what_we_measure_bundlesizeimpact2(inputs);
	if (locale === "fr") return fr_what_we_measure_bundlesizeimpact2(inputs);
	if (locale === "es") return es_what_we_measure_bundlesizeimpact2(inputs);
	if (locale === "de") return de_what_we_measure_bundlesizeimpact2(inputs);
	if (locale === "it") return it_what_we_measure_bundlesizeimpact2(inputs);
	if (locale === "pt") return pt_what_we_measure_bundlesizeimpact2(inputs);
	if (locale === "zh") return zh_what_we_measure_bundlesizeimpact2(inputs);
	if (locale === "ja") return ja_what_we_measure_bundlesizeimpact2(inputs);
	if (locale === "ko") return ko_what_we_measure_bundlesizeimpact2(inputs);
	return ru_what_we_measure_bundlesizeimpact2(inputs);
});
var en_what_we_measure_theadditionaljavascriptbytessent4 = () => {
	return `The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.`;
};
var fr_what_we_measure_theadditionaljavascriptbytessent4 = () => {
	return `Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers de traduction sont inclus. Cela affecte directement le temps de téléchargement sur les réseaux lents.`;
};
var es_what_we_measure_theadditionaljavascriptbytessent4 = () => {
	return `Los bytes adicionales de JavaScript enviados a los usuarios cuando se incluye la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.`;
};
var de_what_we_measure_theadditionaljavascriptbytessent4 = () => {
	return `Die zusätzlichen JavaScript-Bytes, die an die Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Download-Zeit bei langsamen Netzwerken aus.`;
};
var it_what_we_measure_theadditionaljavascriptbytessent4 = () => {
	return `I byte JavaScript aggiuntivi inviati agli utenti quando la libreria i18n e i suoi file di traduzione sono inclusi. Ciò influisce direttamente sul tempo di download sulle reti lente.`;
};
var pt_what_we_measure_theadditionaljavascriptbytessent4 = () => {
	return `Os bytes extras de JavaScript enviados aos usuários quando a biblioteca de i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.`;
};
var zh_what_we_measure_theadditionaljavascriptbytessent4 = () => {
	return `包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络下的下载时间。`;
};
var ja_what_we_measure_theadditionaljavascriptbytessent4 = () => {
	return `i18nライブラリとその翻訳ファイルが含まれる際にユーザーに送信される追加のJavaScriptバイト。これは低速なネットワークでのダウンロード時間に直接影響します。`;
};
var ko_what_we_measure_theadditionaljavascriptbytessent4 = () => {
	return `i18n 라이브러리와 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다.`;
};
var ru_what_we_measure_theadditionaljavascriptbytessent4 = () => {
	return `Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.`;
};
var what_we_measure_theadditionaljavascriptbytessent4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_what_we_measure_theadditionaljavascriptbytessent4(inputs);
	if (locale === "fr") return fr_what_we_measure_theadditionaljavascriptbytessent4(inputs);
	if (locale === "es") return es_what_we_measure_theadditionaljavascriptbytessent4(inputs);
	if (locale === "de") return de_what_we_measure_theadditionaljavascriptbytessent4(inputs);
	if (locale === "it") return it_what_we_measure_theadditionaljavascriptbytessent4(inputs);
	if (locale === "pt") return pt_what_we_measure_theadditionaljavascriptbytessent4(inputs);
	if (locale === "zh") return zh_what_we_measure_theadditionaljavascriptbytessent4(inputs);
	if (locale === "ja") return ja_what_we_measure_theadditionaljavascriptbytessent4(inputs);
	if (locale === "ko") return ko_what_we_measure_theadditionaljavascriptbytessent4(inputs);
	return ru_what_we_measure_theadditionaljavascriptbytessent4(inputs);
});
var en_what_we_measure_renderingoverhead1 = () => {
	return `Rendering overhead`;
};
var fr_what_we_measure_renderingoverhead1 = () => {
	return `Surcharge de rendu`;
};
var es_what_we_measure_renderingoverhead1 = () => {
	return `Sobrecarga de renderizado`;
};
var de_what_we_measure_renderingoverhead1 = () => {
	return `Rendering-Overhead`;
};
var it_what_we_measure_renderingoverhead1 = () => {
	return `Sovrapprezzo di rendering`;
};
var pt_what_we_measure_renderingoverhead1 = () => {
	return `Sobrecarga de renderização`;
};
var zh_what_we_measure_renderingoverhead1 = () => {
	return `渲染开销`;
};
var ja_what_we_measure_renderingoverhead1 = () => {
	return `レンダリングオーバーヘッド`;
};
var ko_what_we_measure_renderingoverhead1 = () => {
	return `렌더링 오버헤드`;
};
var ru_what_we_measure_renderingoverhead1 = () => {
	return `Затраты на рендеринг`;
};
var what_we_measure_renderingoverhead1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_what_we_measure_renderingoverhead1(inputs);
	if (locale === "fr") return fr_what_we_measure_renderingoverhead1(inputs);
	if (locale === "es") return es_what_we_measure_renderingoverhead1(inputs);
	if (locale === "de") return de_what_we_measure_renderingoverhead1(inputs);
	if (locale === "it") return it_what_we_measure_renderingoverhead1(inputs);
	if (locale === "pt") return pt_what_we_measure_renderingoverhead1(inputs);
	if (locale === "zh") return zh_what_we_measure_renderingoverhead1(inputs);
	if (locale === "ja") return ja_what_we_measure_renderingoverhead1(inputs);
	if (locale === "ko") return ko_what_we_measure_renderingoverhead1(inputs);
	return ru_what_we_measure_renderingoverhead1(inputs);
});
var en_what_we_measure_howmuchextratimethe4 = () => {
	return `How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.`;
};
var fr_what_we_measure_howmuchextratimethe4 = () => {
	return `Combien de temps supplémentaire la bibliothèque ajoute au cycle de rendu de React. Les bibliothèques qui injectent des traductions via un seul fournisseur de contexte peuvent provoquer des re-rendus inutiles dans l'arbre des composants.`;
};
var es_what_we_measure_howmuchextratimethe4 = () => {
	return `Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar renderizados innecesarios en todo el árbol de componentes.`;
};
var de_what_we_measure_howmuchextratimethe4 = () => {
	return `Wie viel zusätzliche Zeit die Bibliothek dem Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontext-Provider injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.`;
};
var it_what_we_measure_howmuchextratimethe4 = () => {
	return `Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.`;
};
var pt_what_we_measure_howmuchextratimethe4 = () => {
	return `Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções via um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes.`;
};
var zh_what_we_measure_howmuchextratimethe4 = () => {
	return `库为 React 渲染周期增加了多少额外时间。通过单个上下文提供者注入翻译的库可能会在整个组件树中导致不必要的重新渲染。`;
};
var ja_what_we_measure_howmuchextratimethe4 = () => {
	return `ライブラリがReactのレンダリングサイクルに加える追加時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。`;
};
var ko_what_we_measure_howmuchextratimethe4 = () => {
	return `라이브러리가 React의 렌더링 주기에 추가하는 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 주입하는 라이브러리는 컴포넌트 트리 전체에서 불필요한 리렌더링을 일으킬 수 있습니다.`;
};
var ru_what_we_measure_howmuchextratimethe4 = () => {
	return `Сколько дополнительного времени библиотека добавляет в цикл рендеринга React. Библиотеки, которые внедряют переводы через одного провайдера контекста, могут вызывать ненужные повторные рендеринги во всем дереве компонентов.`;
};
var what_we_measure_howmuchextratimethe4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_what_we_measure_howmuchextratimethe4(inputs);
	if (locale === "fr") return fr_what_we_measure_howmuchextratimethe4(inputs);
	if (locale === "es") return es_what_we_measure_howmuchextratimethe4(inputs);
	if (locale === "de") return de_what_we_measure_howmuchextratimethe4(inputs);
	if (locale === "it") return it_what_we_measure_howmuchextratimethe4(inputs);
	if (locale === "pt") return pt_what_we_measure_howmuchextratimethe4(inputs);
	if (locale === "zh") return zh_what_we_measure_howmuchextratimethe4(inputs);
	if (locale === "ja") return ja_what_we_measure_howmuchextratimethe4(inputs);
	if (locale === "ko") return ko_what_we_measure_howmuchextratimethe4(inputs);
	return ru_what_we_measure_howmuchextratimethe4(inputs);
});
var en_what_we_measure_hydrationcost1 = () => {
	return `Hydration cost`;
};
var fr_what_we_measure_hydrationcost1 = () => {
	return `Coût d'hydratation`;
};
var es_what_we_measure_hydrationcost1 = () => {
	return `Coste de hidratación`;
};
var de_what_we_measure_hydrationcost1 = () => {
	return `Hydratisierungskosten`;
};
var it_what_we_measure_hydrationcost1 = () => {
	return `Costo di idratazione`;
};
var pt_what_we_measure_hydrationcost1 = () => {
	return `Costo de hidratação`;
};
var zh_what_we_measure_hydrationcost1 = () => {
	return `注水成本`;
};
var ja_what_we_measure_hydrationcost1 = () => {
	return `ハイドレーションコスト`;
};
var ko_what_we_measure_hydrationcost1 = () => {
	return `수화 비용`;
};
var ru_what_we_measure_hydrationcost1 = () => {
	return `Стоимость гидратации`;
};
var what_we_measure_hydrationcost1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_what_we_measure_hydrationcost1(inputs);
	if (locale === "fr") return fr_what_we_measure_hydrationcost1(inputs);
	if (locale === "es") return es_what_we_measure_hydrationcost1(inputs);
	if (locale === "de") return de_what_we_measure_hydrationcost1(inputs);
	if (locale === "it") return it_what_we_measure_hydrationcost1(inputs);
	if (locale === "pt") return pt_what_we_measure_hydrationcost1(inputs);
	if (locale === "zh") return zh_what_we_measure_hydrationcost1(inputs);
	if (locale === "ja") return ja_what_we_measure_hydrationcost1(inputs);
	if (locale === "ko") return ko_what_we_measure_hydrationcost1(inputs);
	return ru_what_we_measure_hydrationcost1(inputs);
});
var en_what_we_measure_duringssrtranslationdatais4 = () => {
	return `During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.`;
};
var fr_what_we_measure_duringssrtranslationdatais4 = () => {
	return `Pendant le SSR, les données de traduction sont sérialisées dans le HTML. Les dictionnaire volumineux augmentent le payload HTML et ralentissent l'hydratation — le moment en que la page devient interactive.`;
};
var es_what_we_measure_duringssrtranslationdatais4 = () => {
	return `Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan el payload HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.`;
};
var de_what_we_measure_duringssrtranslationdatais4 = () => {
	return `Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Wörterbücher erhöhen den HTML-Payload und verlangsamen die Hydratisierung — den Moment, in dem die Seite interaktiv wird.`;
};
var it_what_we_measure_duringssrtranslationdatais4 = () => {
	return `Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione — il momento in cui la pagina diventa interattiva.`;
};
var pt_what_we_measure_duringssrtranslationdatais4 = () => {
	return `Durante o SSR, os dados de tradução são serializados em HTML. Dicionários grandes aumentam a carga de HTML e desaceleram a hidratação — o momento em que a página se torna interativa.`;
};
var zh_what_we_measure_duringssrtranslationdatais4 = () => {
	return `在 SSR 期间，翻译数据被序列化到 HTML 中。大型字典会增加 HTML 负载并减慢注水速度 —— 即页面变得可交互的时刻。`;
};
var ja_what_we_measure_duringssrtranslationdatais4 = () => {
	return `SSR中、翻訳データはHTMLにシリアライズされます。巨大な辞書はHTMLペイロードを増加させ、ページがインタラクティブになる瞬間であるハイドレーションを遅らせます。`;
};
var ko_what_we_measure_duringssrtranslationdatais4 = () => {
	return `SSR 중에 번역 데이터는 HTML로 직렬화됩니다. 대용량 사전은 HTML 페이로드를 증가시키고 페이지가 상호작용 가능해지는 순간인 수화 속도를 늦춥니다.`;
};
var ru_what_we_measure_duringssrtranslationdatais4 = () => {
	return `Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем HTML и замедляют гидратацию — момент, когда страница становится интерактивной.`;
};
var what_we_measure_duringssrtranslationdatais4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_what_we_measure_duringssrtranslationdatais4(inputs);
	if (locale === "fr") return fr_what_we_measure_duringssrtranslationdatais4(inputs);
	if (locale === "es") return es_what_we_measure_duringssrtranslationdatais4(inputs);
	if (locale === "de") return de_what_we_measure_duringssrtranslationdatais4(inputs);
	if (locale === "it") return it_what_we_measure_duringssrtranslationdatais4(inputs);
	if (locale === "pt") return pt_what_we_measure_duringssrtranslationdatais4(inputs);
	if (locale === "zh") return zh_what_we_measure_duringssrtranslationdatais4(inputs);
	if (locale === "ja") return ja_what_we_measure_duringssrtranslationdatais4(inputs);
	if (locale === "ko") return ko_what_we_measure_duringssrtranslationdatais4(inputs);
	return ru_what_we_measure_duringssrtranslationdatais4(inputs);
});
var en_what_we_measure_lazyloadingeffectiveness2 = () => {
	return `Lazy loading effectiveness`;
};
var fr_what_we_measure_lazyloadingeffectiveness2 = () => {
	return `Efficacité du chargement différé`;
};
var es_what_we_measure_lazyloadingeffectiveness2 = () => {
	return `Eficacia de la carga diferida`;
};
var de_what_we_measure_lazyloadingeffectiveness2 = () => {
	return `Effektivität von Lazy Loading`;
};
var it_what_we_measure_lazyloadingeffectiveness2 = () => {
	return `Efficacia del caricamento pigro`;
};
var pt_what_we_measure_lazyloadingeffectiveness2 = () => {
	return `Eficácia do carregamento lento`;
};
var zh_what_we_measure_lazyloadingeffectiveness2 = () => {
	return `延迟加载有效性`;
};
var ja_what_we_measure_lazyloadingeffectiveness2 = () => {
	return `遅延読み込みの有効性`;
};
var ko_what_we_measure_lazyloadingeffectiveness2 = () => {
	return `지연 로딩 효과`;
};
var ru_what_we_measure_lazyloadingeffectiveness2 = () => {
	return `Эффективность ленивой загрузки`;
};
var what_we_measure_lazyloadingeffectiveness2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_what_we_measure_lazyloadingeffectiveness2(inputs);
	if (locale === "fr") return fr_what_we_measure_lazyloadingeffectiveness2(inputs);
	if (locale === "es") return es_what_we_measure_lazyloadingeffectiveness2(inputs);
	if (locale === "de") return de_what_we_measure_lazyloadingeffectiveness2(inputs);
	if (locale === "it") return it_what_we_measure_lazyloadingeffectiveness2(inputs);
	if (locale === "pt") return pt_what_we_measure_lazyloadingeffectiveness2(inputs);
	if (locale === "zh") return zh_what_we_measure_lazyloadingeffectiveness2(inputs);
	if (locale === "ja") return ja_what_we_measure_lazyloadingeffectiveness2(inputs);
	if (locale === "ko") return ko_what_we_measure_lazyloadingeffectiveness2(inputs);
	return ru_what_we_measure_lazyloadingeffectiveness2(inputs);
});
var en_what_we_measure_whethersplittingtranslationsbyroute4 = () => {
	return `Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).`;
};
var fr_what_we_measure_whethersplittingtranslationsbyroute4 = () => {
	return `Si le fractionnement des traductions par route ou par espace de noms réduit réellement la charge initiale, et quels compromis cela introduit (requêtes en cascade, FOUC, complexité du cache).`;
};
var es_what_we_measure_whethersplittingtranslationsbyroute4 = () => {
	return `Si dividir las traducciones por ruta o espacio de nombres realmente reduce la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché).`;
};
var de_what_we_measure_whethersplittingtranslationsbyroute4 = () => {
	return `Ob das Aufteilen von Übersetzungen nach Route oder Namensraum die initiale Last tatsächlich reduziert und welche Kompromisse dies mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).`;
};
var it_what_we_measure_whethersplittingtranslationsbyroute4 = () => {
	return `Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).`;
};
var pt_what_we_measure_whethersplittingtranslationsbyroute4 = () => {
	return `Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais compensações ela introduz (solicitações em cascada, FOUC, complexidade de cache).`;
};
var zh_what_we_measure_whethersplittingtranslationsbyroute4 = () => {
	return `按路由或命名空间拆分翻译是否真的减少了初始负载，以及它引入了哪些权衡（瀑布流请求、FOUC、缓存复杂性）。`;
};
var ja_what_we_measure_whethersplittingtranslationsbyroute4 = () => {
	return `ルートまたは名前空間ごとに翻訳を分割することが実際に初期ロードを削減するのか、そしてどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）をもたらすのか。`;
};
var ko_what_we_measure_whethersplittingtranslationsbyroute4 = () => {
	return `경로 또는 네임스페이스별로 번역을 분할하는 것이 실제로 초기 로드를 줄이는지, 그리고 어떤 트레이드오프(워터폴 요청, FOUC, 캐시 복잡성)를 유발하는지 측정합니다.`;
};
var ru_what_we_measure_whethersplittingtranslationsbyroute4 = () => {
	return `Действительно ли разделение переводов по маршрутам или пространствам имен снижает начальную нагрузку, и какие компромиссы оно вносит (каскадные запросы, FOUC, сложность кэширования).`;
};
var what_we_measure_whethersplittingtranslationsbyroute4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_what_we_measure_whethersplittingtranslationsbyroute4(inputs);
	if (locale === "fr") return fr_what_we_measure_whethersplittingtranslationsbyroute4(inputs);
	if (locale === "es") return es_what_we_measure_whethersplittingtranslationsbyroute4(inputs);
	if (locale === "de") return de_what_we_measure_whethersplittingtranslationsbyroute4(inputs);
	if (locale === "it") return it_what_we_measure_whethersplittingtranslationsbyroute4(inputs);
	if (locale === "pt") return pt_what_we_measure_whethersplittingtranslationsbyroute4(inputs);
	if (locale === "zh") return zh_what_we_measure_whethersplittingtranslationsbyroute4(inputs);
	if (locale === "ja") return ja_what_we_measure_whethersplittingtranslationsbyroute4(inputs);
	if (locale === "ko") return ko_what_we_measure_whethersplittingtranslationsbyroute4(inputs);
	return ru_what_we_measure_whethersplittingtranslationsbyroute4(inputs);
});
var en_what_we_measure_localeswitchspeed2 = () => {
	return `Locale switch speed`;
};
var fr_what_we_measure_localeswitchspeed2 = () => {
	return `Vitesse de changement de langue`;
};
var es_what_we_measure_localeswitchspeed2 = () => {
	return `Velocidad de cambio de idioma`;
};
var de_what_we_measure_localeswitchspeed2 = () => {
	return `Geschwindigkeit des Gebietsschemawechsels`;
};
var it_what_we_measure_localeswitchspeed2 = () => {
	return `Velocità di cambio lingua`;
};
var pt_what_we_measure_localeswitchspeed2 = () => {
	return `Velocidade de troca de idioma`;
};
var zh_what_we_measure_localeswitchspeed2 = () => {
	return `语言切换速度`;
};
var ja_what_we_measure_localeswitchspeed2 = () => {
	return `ロケール切り替え速度`;
};
var ko_what_we_measure_localeswitchspeed2 = () => {
	return `로케일 전환 속도`;
};
var ru_what_we_measure_localeswitchspeed2 = () => {
	return `Скорость переключения языка`;
};
var what_we_measure_localeswitchspeed2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_what_we_measure_localeswitchspeed2(inputs);
	if (locale === "fr") return fr_what_we_measure_localeswitchspeed2(inputs);
	if (locale === "es") return es_what_we_measure_localeswitchspeed2(inputs);
	if (locale === "de") return de_what_we_measure_localeswitchspeed2(inputs);
	if (locale === "it") return it_what_we_measure_localeswitchspeed2(inputs);
	if (locale === "pt") return pt_what_we_measure_localeswitchspeed2(inputs);
	if (locale === "zh") return zh_what_we_measure_localeswitchspeed2(inputs);
	if (locale === "ja") return ja_what_we_measure_localeswitchspeed2(inputs);
	if (locale === "ko") return ko_what_we_measure_localeswitchspeed2(inputs);
	return ru_what_we_measure_localeswitchspeed2(inputs);
});
var en_what_we_measure_howfasttheappcan4 = () => {
	return `How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.`;
};
var fr_what_we_measure_howfasttheappcan4 = () => {
	return `À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération des nouvelles traductions, le rendu des composants et la mise à jour du DOM.`;
};
var es_what_we_measure_howfasttheappcan4 = () => {
	return `Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.`;
};
var de_what_we_measure_howfasttheappcan4 = () => {
	return `Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderns von Komponenten und der Aktualisierung des DOM.`;
};
var it_what_we_measure_howfasttheappcan4 = () => {
	return `Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione — inclusi il recupero delle nuove traduzioni, il rendering dei componenti e l'aggiornamento del DOM.`;
};
var pt_what_we_measure_howfasttheappcan4 = () => {
	return `Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a re-renderização de componentes e a atualização do DOM.`;
};
var zh_what_we_measure_howfasttheappcan4 = () => {
	return `应用在运行时从一种语言切换到另一种语言的速度 —— 包括获取新翻译、重新渲染组件和更新 DOM。`;
};
var ja_what_we_measure_howfasttheappcan4 = () => {
	return `実行時にアプリが1つの言語から別の言語にどれだけ速く切り替えられるか。これには、新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新が含まれます。`;
};
var ko_what_we_measure_howfasttheappcan4 = () => {
	return `실행 중에 앱이 한 언어에서 다른 언어로 얼마나 빨리 전환될 수 있는지를 측정합니다. 여기에는 새 번역 가져오기, 컴포넌트 리렌더링 및 DOM 업데이트가 포함됩니다.`;
};
var ru_what_we_measure_howfasttheappcan4 = () => {
	return `Как быстро приложение может переключаться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.`;
};
var what_we_measure_howfasttheappcan4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_what_we_measure_howfasttheappcan4(inputs);
	if (locale === "fr") return fr_what_we_measure_howfasttheappcan4(inputs);
	if (locale === "es") return es_what_we_measure_howfasttheappcan4(inputs);
	if (locale === "de") return de_what_we_measure_howfasttheappcan4(inputs);
	if (locale === "it") return it_what_we_measure_howfasttheappcan4(inputs);
	if (locale === "pt") return pt_what_we_measure_howfasttheappcan4(inputs);
	if (locale === "zh") return zh_what_we_measure_howfasttheappcan4(inputs);
	if (locale === "ja") return ja_what_we_measure_howfasttheappcan4(inputs);
	if (locale === "ko") return ko_what_we_measure_howfasttheappcan4(inputs);
	return ru_what_we_measure_howfasttheappcan4(inputs);
});
var en_what_we_measure_whatwemeasure2 = () => {
	return `What We Measure`;
};
var fr_what_we_measure_whatwemeasure2 = () => {
	return `Ce que nous mesurons`;
};
var es_what_we_measure_whatwemeasure2 = () => {
	return `Qué medimos`;
};
var de_what_we_measure_whatwemeasure2 = () => {
	return `Was wir messen`;
};
var it_what_we_measure_whatwemeasure2 = () => {
	return `Cosa misuriamo`;
};
var pt_what_we_measure_whatwemeasure2 = () => {
	return `O que medimos`;
};
var zh_what_we_measure_whatwemeasure2 = () => {
	return `我们测量什么`;
};
var ja_what_we_measure_whatwemeasure2 = () => {
	return `私たちが測定するもの`;
};
var ko_what_we_measure_whatwemeasure2 = () => {
	return `측정 항목`;
};
var ru_what_we_measure_whatwemeasure2 = () => {
	return `Что мы измеряем`;
};
var what_we_measure_whatwemeasure2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_what_we_measure_whatwemeasure2(inputs);
	if (locale === "fr") return fr_what_we_measure_whatwemeasure2(inputs);
	if (locale === "es") return es_what_we_measure_whatwemeasure2(inputs);
	if (locale === "de") return de_what_we_measure_whatwemeasure2(inputs);
	if (locale === "it") return it_what_we_measure_whatwemeasure2(inputs);
	if (locale === "pt") return pt_what_we_measure_whatwemeasure2(inputs);
	if (locale === "zh") return zh_what_we_measure_whatwemeasure2(inputs);
	if (locale === "ja") return ja_what_we_measure_whatwemeasure2(inputs);
	if (locale === "ko") return ko_what_we_measure_whatwemeasure2(inputs);
	return ru_what_we_measure_whatwemeasure2(inputs);
});
function WhatWeMeasure() {
	const metrics = [
		{
			metric: what_we_measure_bundlesizeimpact2(),
			desc: what_we_measure_theadditionaljavascriptbytessent4()
		},
		{
			metric: what_we_measure_renderingoverhead1(),
			desc: what_we_measure_howmuchextratimethe4()
		},
		{
			metric: what_we_measure_hydrationcost1(),
			desc: what_we_measure_duringssrtranslationdatais4()
		},
		{
			metric: what_we_measure_lazyloadingeffectiveness2(),
			desc: what_we_measure_whethersplittingtranslationsbyroute4()
		},
		{
			metric: what_we_measure_localeswitchspeed2(),
			desc: what_we_measure_howfasttheappcan4()
		}
	];
	return jsxs("section", {
		className: "mt-12 mx-auto max-w-3xl",
		children: [jsx("h2", {
			className: "mb-4 text-2xl font-bold text-foreground",
			children: what_we_measure_whatwemeasure2()
		}), jsx("ul", {
			className: "space-y-4",
			children: metrics.map((metricEl) => jsxs("li", {
				className: "rounded-md border border-border p-4",
				children: [jsx("span", {
					className: "block text-sm font-bold text-primary",
					children: metricEl.metric
				}), jsx("span", {
					className: "block mt-1 text-sm text-muted-foreground",
					children: metricEl.desc
				})]
			}, metricEl.metric))
		})]
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
	return jsx(Wrapper, { children: jsx(WhatWeMeasure, {}) });
}
export { Wrapped as default };
