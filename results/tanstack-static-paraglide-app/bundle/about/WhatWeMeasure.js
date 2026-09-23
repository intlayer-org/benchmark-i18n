import "react";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
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
var what_we_measure_bundlesizeimpact2$10 = () => {
	return `Bundle size impact`;
};
var what_we_measure_duringssrtranslationdatais4$10 = () => {
	return `During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.`;
};
var what_we_measure_howfasttheappcan4$10 = () => {
	return `How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.`;
};
var what_we_measure_howmuchextratimethe4$10 = () => {
	return `How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.`;
};
var what_we_measure_hydrationcost1$10 = () => {
	return `Hydration cost`;
};
var what_we_measure_lazyloadingeffectiveness2$10 = () => {
	return `Lazy loading effectiveness`;
};
var what_we_measure_localeswitchspeed2$10 = () => {
	return `Locale switch speed`;
};
var what_we_measure_renderingoverhead1$10 = () => {
	return `Rendering overhead`;
};
var what_we_measure_theadditionaljavascriptbytessent4$10 = () => {
	return `The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.`;
};
var what_we_measure_whatwemeasure2$10 = () => {
	return `What We Measure`;
};
var what_we_measure_whethersplittingtranslationsbyroute4$10 = () => {
	return `Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).`;
};
var what_we_measure_bundlesizeimpact2$9 = () => {
	return `Impact sur la taille du bundle`;
};
var what_we_measure_duringssrtranslationdatais4$9 = () => {
	return `Pendant le SSR, les données de traduction sont sérialisées dans le HTML. Les dictionnaire volumineux augmentent le payload HTML et ralentissent l'hydratation — le moment en que la page devient interactive.`;
};
var what_we_measure_howfasttheappcan4$9 = () => {
	return `À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération des nouvelles traductions, le rendu des composants et la mise à jour du DOM.`;
};
var what_we_measure_howmuchextratimethe4$9 = () => {
	return `Combien de temps supplémentaire la bibliothèque ajoute au cycle de rendu de React. Les bibliothèques qui injectent des traductions via un seul fournisseur de contexte peuvent provoquer des re-rendus inutiles dans l'arbre des composants.`;
};
var what_we_measure_hydrationcost1$9 = () => {
	return `Coût d'hydratation`;
};
var what_we_measure_lazyloadingeffectiveness2$9 = () => {
	return `Efficacité du chargement différé`;
};
var what_we_measure_localeswitchspeed2$9 = () => {
	return `Vitesse de changement de langue`;
};
var what_we_measure_renderingoverhead1$9 = () => {
	return `Surcharge de rendu`;
};
var what_we_measure_theadditionaljavascriptbytessent4$9 = () => {
	return `Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers de traduction sont inclus. Cela affecte directement le temps de téléchargement sur les réseaux lents.`;
};
var what_we_measure_whatwemeasure2$9 = () => {
	return `Ce que nous mesurons`;
};
var what_we_measure_whethersplittingtranslationsbyroute4$9 = () => {
	return `Si le fractionnement des traductions par route ou par espace de noms réduit réellement la charge initiale, et quels compromis cela introduit (requêtes en cascade, FOUC, complexité du cache).`;
};
var what_we_measure_bundlesizeimpact2$8 = () => {
	return `Impacto en el tamaño del bundle`;
};
var what_we_measure_duringssrtranslationdatais4$8 = () => {
	return `Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan el payload HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.`;
};
var what_we_measure_howfasttheappcan4$8 = () => {
	return `Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.`;
};
var what_we_measure_howmuchextratimethe4$8 = () => {
	return `Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar renderizados innecesarios en todo el árbol de componentes.`;
};
var what_we_measure_hydrationcost1$8 = () => {
	return `Coste de hidratación`;
};
var what_we_measure_lazyloadingeffectiveness2$8 = () => {
	return `Eficacia de la carga diferida`;
};
var what_we_measure_localeswitchspeed2$8 = () => {
	return `Velocidad de cambio de idioma`;
};
var what_we_measure_renderingoverhead1$8 = () => {
	return `Sobrecarga de renderizado`;
};
var what_we_measure_theadditionaljavascriptbytessent4$8 = () => {
	return `Los bytes adicionales de JavaScript enviados a los usuarios cuando se incluye la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.`;
};
var what_we_measure_whatwemeasure2$8 = () => {
	return `Qué medimos`;
};
var what_we_measure_whethersplittingtranslationsbyroute4$8 = () => {
	return `Si dividir las traducciones por ruta o espacio de nombres realmente reduce la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché).`;
};
var what_we_measure_bundlesizeimpact2$7 = () => {
	return `Auswirkung auf die Bundle-Größe`;
};
var what_we_measure_duringssrtranslationdatais4$7 = () => {
	return `Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Wörterbücher erhöhen den HTML-Payload und verlangsamen die Hydratisierung — den Moment, in dem die Seite interaktiv wird.`;
};
var what_we_measure_howfasttheappcan4$7 = () => {
	return `Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderns von Komponenten und der Aktualisierung des DOM.`;
};
var what_we_measure_howmuchextratimethe4$7 = () => {
	return `Wie viel zusätzliche Zeit die Bibliothek dem Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontext-Provider injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.`;
};
var what_we_measure_hydrationcost1$7 = () => {
	return `Hydratisierungskosten`;
};
var what_we_measure_lazyloadingeffectiveness2$7 = () => {
	return `Effektivität von Lazy Loading`;
};
var what_we_measure_localeswitchspeed2$7 = () => {
	return `Geschwindigkeit des Gebietsschemawechsels`;
};
var what_we_measure_renderingoverhead1$7 = () => {
	return `Rendering-Overhead`;
};
var what_we_measure_theadditionaljavascriptbytessent4$7 = () => {
	return `Die zusätzlichen JavaScript-Bytes, die an die Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Download-Zeit bei langsamen Netzwerken aus.`;
};
var what_we_measure_whatwemeasure2$7 = () => {
	return `Was wir messen`;
};
var what_we_measure_whethersplittingtranslationsbyroute4$7 = () => {
	return `Ob das Aufteilen von Übersetzungen nach Route oder Namensraum die initiale Last tatsächlich reduziert und welche Kompromisse dies mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).`;
};
var what_we_measure_bundlesizeimpact2$6 = () => {
	return `Impatto sulla dimensione del bundle`;
};
var what_we_measure_duringssrtranslationdatais4$6 = () => {
	return `Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione — il momento in cui la pagina diventa interattiva.`;
};
var what_we_measure_howfasttheappcan4$6 = () => {
	return `Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione — inclusi il recupero delle nuove traduzioni, il rendering dei componenti e l'aggiornamento del DOM.`;
};
var what_we_measure_howmuchextratimethe4$6 = () => {
	return `Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.`;
};
var what_we_measure_hydrationcost1$6 = () => {
	return `Costo di idratazione`;
};
var what_we_measure_lazyloadingeffectiveness2$6 = () => {
	return `Efficacia del caricamento pigro`;
};
var what_we_measure_localeswitchspeed2$6 = () => {
	return `Velocità di cambio lingua`;
};
var what_we_measure_renderingoverhead1$6 = () => {
	return `Sovrapprezzo di rendering`;
};
var what_we_measure_theadditionaljavascriptbytessent4$6 = () => {
	return `I byte JavaScript aggiuntivi inviati agli utenti quando la libreria i18n e i suoi file di traduzione sono inclusi. Ciò influisce direttamente sul tempo di download sulle reti lente.`;
};
var what_we_measure_whatwemeasure2$6 = () => {
	return `Cosa misuriamo`;
};
var what_we_measure_whethersplittingtranslationsbyroute4$6 = () => {
	return `Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).`;
};
var what_we_measure_bundlesizeimpact2$5 = () => {
	return `Impacto no tamanho do bundle`;
};
var what_we_measure_duringssrtranslationdatais4$5 = () => {
	return `Durante o SSR, os dados de tradução são serializados em HTML. Dicionários grandes aumentam a carga de HTML e desaceleram a hidratação — o momento em que a página se torna interativa.`;
};
var what_we_measure_howfasttheappcan4$5 = () => {
	return `Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a re-renderização de componentes e a atualização do DOM.`;
};
var what_we_measure_howmuchextratimethe4$5 = () => {
	return `Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções via um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes.`;
};
var what_we_measure_hydrationcost1$5 = () => {
	return `Costo de hidratação`;
};
var what_we_measure_lazyloadingeffectiveness2$5 = () => {
	return `Eficácia do carregamento lento`;
};
var what_we_measure_localeswitchspeed2$5 = () => {
	return `Velocidade de troca de idioma`;
};
var what_we_measure_renderingoverhead1$5 = () => {
	return `Sobrecarga de renderização`;
};
var what_we_measure_theadditionaljavascriptbytessent4$5 = () => {
	return `Os bytes extras de JavaScript enviados aos usuários quando a biblioteca de i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.`;
};
var what_we_measure_whatwemeasure2$5 = () => {
	return `O que medimos`;
};
var what_we_measure_whethersplittingtranslationsbyroute4$5 = () => {
	return `Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais compensações ela introduz (solicitações em cascada, FOUC, complexidade de cache).`;
};
var what_we_measure_bundlesizeimpact2$4 = () => {
	return `包大小影响`;
};
var what_we_measure_duringssrtranslationdatais4$4 = () => {
	return `在 SSR 期间，翻译数据被序列化到 HTML 中。大型字典会增加 HTML 负载并减慢注水速度 —— 即页面变得可交互的时刻。`;
};
var what_we_measure_howfasttheappcan4$4 = () => {
	return `应用在运行时从一种语言切换到另一种语言的速度 —— 包括获取新翻译、重新渲染组件和更新 DOM。`;
};
var what_we_measure_howmuchextratimethe4$4 = () => {
	return `库为 React 渲染周期增加了多少额外时间。通过单个上下文提供者注入翻译的库可能会在整个组件树中导致不必要的重新渲染。`;
};
var what_we_measure_hydrationcost1$4 = () => {
	return `注水成本`;
};
var what_we_measure_lazyloadingeffectiveness2$4 = () => {
	return `延迟加载有效性`;
};
var what_we_measure_localeswitchspeed2$4 = () => {
	return `语言切换速度`;
};
var what_we_measure_renderingoverhead1$4 = () => {
	return `渲染开销`;
};
var what_we_measure_theadditionaljavascriptbytessent4$4 = () => {
	return `包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络下的下载时间。`;
};
var what_we_measure_whatwemeasure2$4 = () => {
	return `我们测量什么`;
};
var what_we_measure_whethersplittingtranslationsbyroute4$4 = () => {
	return `按路由或命名空间拆分翻译是否真的减少了初始负载，以及它引入了哪些权衡（瀑布流请求、FOUC、缓存复杂性）。`;
};
var what_we_measure_bundlesizeimpact2$3 = () => {
	return `バンドルサイズへの影響`;
};
var what_we_measure_duringssrtranslationdatais4$3 = () => {
	return `SSR中、翻訳データはHTMLにシリアライズされます。巨大な辞書はHTMLペイロードを増加させ、ページがインタラクティブになる瞬間であるハイドレーションを遅らせます。`;
};
var what_we_measure_howfasttheappcan4$3 = () => {
	return `実行時にアプリが1つの言語から別の言語にどれだけ速く切り替えられるか。これには、新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新が含まれます。`;
};
var what_we_measure_howmuchextratimethe4$3 = () => {
	return `ライブラリがReactのレンダリングサイクルに加える追加時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。`;
};
var what_we_measure_hydrationcost1$3 = () => {
	return `ハイドレーションコスト`;
};
var what_we_measure_lazyloadingeffectiveness2$3 = () => {
	return `遅延読み込みの有効性`;
};
var what_we_measure_localeswitchspeed2$3 = () => {
	return `ロケール切り替え速度`;
};
var what_we_measure_renderingoverhead1$3 = () => {
	return `レンダリングオーバーヘッド`;
};
var what_we_measure_theadditionaljavascriptbytessent4$3 = () => {
	return `i18nライブラリとその翻訳ファイルが含まれる際にユーザーに送信される追加のJavaScriptバイト。これは低速なネットワークでのダウンロード時間に直接影響します。`;
};
var what_we_measure_whatwemeasure2$3 = () => {
	return `私たちが測定するもの`;
};
var what_we_measure_whethersplittingtranslationsbyroute4$3 = () => {
	return `ルートまたは名前空間ごとに翻訳を分割することが実際に初期ロードを削減するのか、そしてどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）をもたらすのか。`;
};
var what_we_measure_bundlesizeimpact2$2 = () => {
	return `번들 크기 영향`;
};
var what_we_measure_duringssrtranslationdatais4$2 = () => {
	return `SSR 중에 번역 데이터는 HTML로 직렬화됩니다. 대용량 사전은 HTML 페이로드를 증가시키고 페이지가 상호작용 가능해지는 순간인 수화 속도를 늦춥니다.`;
};
var what_we_measure_howfasttheappcan4$2 = () => {
	return `실행 중에 앱이 한 언어에서 다른 언어로 얼마나 빨리 전환될 수 있는지를 측정합니다. 여기에는 새 번역 가져오기, 컴포넌트 리렌더링 및 DOM 업데이트가 포함됩니다.`;
};
var what_we_measure_howmuchextratimethe4$2 = () => {
	return `라이브러리가 React의 렌더링 주기에 추가하는 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 주입하는 라이브러리는 컴포넌트 트리 전체에서 불필요한 리렌더링을 일으킬 수 있습니다.`;
};
var what_we_measure_hydrationcost1$2 = () => {
	return `수화 비용`;
};
var what_we_measure_lazyloadingeffectiveness2$2 = () => {
	return `지연 로딩 효과`;
};
var what_we_measure_localeswitchspeed2$2 = () => {
	return `로케일 전환 속도`;
};
var what_we_measure_renderingoverhead1$2 = () => {
	return `렌더링 오버헤드`;
};
var what_we_measure_theadditionaljavascriptbytessent4$2 = () => {
	return `i18n 라이브러리와 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다.`;
};
var what_we_measure_whatwemeasure2$2 = () => {
	return `측정 항목`;
};
var what_we_measure_whethersplittingtranslationsbyroute4$2 = () => {
	return `경로 또는 네임스페이스별로 번역을 분할하는 것이 실제로 초기 로드를 줄이는지, 그리고 어떤 트레이드오프(워터폴 요청, FOUC, 캐시 복잡성)를 유발하는지 측정합니다.`;
};
var what_we_measure_bundlesizeimpact2$1 = () => {
	return `Влияние на размер бандла`;
};
var what_we_measure_duringssrtranslationdatais4$1 = () => {
	return `Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем HTML и замедляют гидратацию — момент, когда страница становится интерактивной.`;
};
var what_we_measure_howfasttheappcan4$1 = () => {
	return `Как быстро приложение может переключаться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.`;
};
var what_we_measure_howmuchextratimethe4$1 = () => {
	return `Сколько дополнительного времени библиотека добавляет в цикл рендеринга React. Библиотеки, которые внедряют переводы через одного провайдера контекста, могут вызывать ненужные повторные рендеринги во всем дереве компонентов.`;
};
var what_we_measure_hydrationcost1$1 = () => {
	return `Стоимость гидратации`;
};
var what_we_measure_lazyloadingeffectiveness2$1 = () => {
	return `Эффективность ленивой загрузки`;
};
var what_we_measure_localeswitchspeed2$1 = () => {
	return `Скорость переключения языка`;
};
var what_we_measure_renderingoverhead1$1 = () => {
	return `Затраты на рендеринг`;
};
var what_we_measure_theadditionaljavascriptbytessent4$1 = () => {
	return `Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.`;
};
var what_we_measure_whatwemeasure2$1 = () => {
	return `Что мы измеряем`;
};
var what_we_measure_whethersplittingtranslationsbyroute4$1 = () => {
	return `Действительно ли разделение переводов по маршрутам или пространствам имен снижает начальную нагрузку, и какие компромиссы оно вносит (каскадные запросы, FOUC, сложность кэширования).`;
};
var what_we_measure_bundlesizeimpact2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return what_we_measure_bundlesizeimpact2$9(inputs);
	if (locale === "es") return what_we_measure_bundlesizeimpact2$8(inputs);
	if (locale === "de") return what_we_measure_bundlesizeimpact2$7(inputs);
	if (locale === "it") return what_we_measure_bundlesizeimpact2$6(inputs);
	if (locale === "pt") return what_we_measure_bundlesizeimpact2$5(inputs);
	if (locale === "zh") return what_we_measure_bundlesizeimpact2$4(inputs);
	if (locale === "ja") return what_we_measure_bundlesizeimpact2$3(inputs);
	if (locale === "ko") return what_we_measure_bundlesizeimpact2$2(inputs);
	if (locale === "ru") return what_we_measure_bundlesizeimpact2$1(inputs);
	return what_we_measure_bundlesizeimpact2$10(inputs);
});
var what_we_measure_duringssrtranslationdatais4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return what_we_measure_duringssrtranslationdatais4$9(inputs);
	if (locale === "es") return what_we_measure_duringssrtranslationdatais4$8(inputs);
	if (locale === "de") return what_we_measure_duringssrtranslationdatais4$7(inputs);
	if (locale === "it") return what_we_measure_duringssrtranslationdatais4$6(inputs);
	if (locale === "pt") return what_we_measure_duringssrtranslationdatais4$5(inputs);
	if (locale === "zh") return what_we_measure_duringssrtranslationdatais4$4(inputs);
	if (locale === "ja") return what_we_measure_duringssrtranslationdatais4$3(inputs);
	if (locale === "ko") return what_we_measure_duringssrtranslationdatais4$2(inputs);
	if (locale === "ru") return what_we_measure_duringssrtranslationdatais4$1(inputs);
	return what_we_measure_duringssrtranslationdatais4$10(inputs);
});
var what_we_measure_howfasttheappcan4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return what_we_measure_howfasttheappcan4$9(inputs);
	if (locale === "es") return what_we_measure_howfasttheappcan4$8(inputs);
	if (locale === "de") return what_we_measure_howfasttheappcan4$7(inputs);
	if (locale === "it") return what_we_measure_howfasttheappcan4$6(inputs);
	if (locale === "pt") return what_we_measure_howfasttheappcan4$5(inputs);
	if (locale === "zh") return what_we_measure_howfasttheappcan4$4(inputs);
	if (locale === "ja") return what_we_measure_howfasttheappcan4$3(inputs);
	if (locale === "ko") return what_we_measure_howfasttheappcan4$2(inputs);
	if (locale === "ru") return what_we_measure_howfasttheappcan4$1(inputs);
	return what_we_measure_howfasttheappcan4$10(inputs);
});
var what_we_measure_howmuchextratimethe4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return what_we_measure_howmuchextratimethe4$9(inputs);
	if (locale === "es") return what_we_measure_howmuchextratimethe4$8(inputs);
	if (locale === "de") return what_we_measure_howmuchextratimethe4$7(inputs);
	if (locale === "it") return what_we_measure_howmuchextratimethe4$6(inputs);
	if (locale === "pt") return what_we_measure_howmuchextratimethe4$5(inputs);
	if (locale === "zh") return what_we_measure_howmuchextratimethe4$4(inputs);
	if (locale === "ja") return what_we_measure_howmuchextratimethe4$3(inputs);
	if (locale === "ko") return what_we_measure_howmuchextratimethe4$2(inputs);
	if (locale === "ru") return what_we_measure_howmuchextratimethe4$1(inputs);
	return what_we_measure_howmuchextratimethe4$10(inputs);
});
var what_we_measure_hydrationcost1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return what_we_measure_hydrationcost1$9(inputs);
	if (locale === "es") return what_we_measure_hydrationcost1$8(inputs);
	if (locale === "de") return what_we_measure_hydrationcost1$7(inputs);
	if (locale === "it") return what_we_measure_hydrationcost1$6(inputs);
	if (locale === "pt") return what_we_measure_hydrationcost1$5(inputs);
	if (locale === "zh") return what_we_measure_hydrationcost1$4(inputs);
	if (locale === "ja") return what_we_measure_hydrationcost1$3(inputs);
	if (locale === "ko") return what_we_measure_hydrationcost1$2(inputs);
	if (locale === "ru") return what_we_measure_hydrationcost1$1(inputs);
	return what_we_measure_hydrationcost1$10(inputs);
});
var what_we_measure_lazyloadingeffectiveness2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return what_we_measure_lazyloadingeffectiveness2$9(inputs);
	if (locale === "es") return what_we_measure_lazyloadingeffectiveness2$8(inputs);
	if (locale === "de") return what_we_measure_lazyloadingeffectiveness2$7(inputs);
	if (locale === "it") return what_we_measure_lazyloadingeffectiveness2$6(inputs);
	if (locale === "pt") return what_we_measure_lazyloadingeffectiveness2$5(inputs);
	if (locale === "zh") return what_we_measure_lazyloadingeffectiveness2$4(inputs);
	if (locale === "ja") return what_we_measure_lazyloadingeffectiveness2$3(inputs);
	if (locale === "ko") return what_we_measure_lazyloadingeffectiveness2$2(inputs);
	if (locale === "ru") return what_we_measure_lazyloadingeffectiveness2$1(inputs);
	return what_we_measure_lazyloadingeffectiveness2$10(inputs);
});
var what_we_measure_localeswitchspeed2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return what_we_measure_localeswitchspeed2$9(inputs);
	if (locale === "es") return what_we_measure_localeswitchspeed2$8(inputs);
	if (locale === "de") return what_we_measure_localeswitchspeed2$7(inputs);
	if (locale === "it") return what_we_measure_localeswitchspeed2$6(inputs);
	if (locale === "pt") return what_we_measure_localeswitchspeed2$5(inputs);
	if (locale === "zh") return what_we_measure_localeswitchspeed2$4(inputs);
	if (locale === "ja") return what_we_measure_localeswitchspeed2$3(inputs);
	if (locale === "ko") return what_we_measure_localeswitchspeed2$2(inputs);
	if (locale === "ru") return what_we_measure_localeswitchspeed2$1(inputs);
	return what_we_measure_localeswitchspeed2$10(inputs);
});
var what_we_measure_renderingoverhead1 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return what_we_measure_renderingoverhead1$9(inputs);
	if (locale === "es") return what_we_measure_renderingoverhead1$8(inputs);
	if (locale === "de") return what_we_measure_renderingoverhead1$7(inputs);
	if (locale === "it") return what_we_measure_renderingoverhead1$6(inputs);
	if (locale === "pt") return what_we_measure_renderingoverhead1$5(inputs);
	if (locale === "zh") return what_we_measure_renderingoverhead1$4(inputs);
	if (locale === "ja") return what_we_measure_renderingoverhead1$3(inputs);
	if (locale === "ko") return what_we_measure_renderingoverhead1$2(inputs);
	if (locale === "ru") return what_we_measure_renderingoverhead1$1(inputs);
	return what_we_measure_renderingoverhead1$10(inputs);
});
var what_we_measure_theadditionaljavascriptbytessent4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return what_we_measure_theadditionaljavascriptbytessent4$9(inputs);
	if (locale === "es") return what_we_measure_theadditionaljavascriptbytessent4$8(inputs);
	if (locale === "de") return what_we_measure_theadditionaljavascriptbytessent4$7(inputs);
	if (locale === "it") return what_we_measure_theadditionaljavascriptbytessent4$6(inputs);
	if (locale === "pt") return what_we_measure_theadditionaljavascriptbytessent4$5(inputs);
	if (locale === "zh") return what_we_measure_theadditionaljavascriptbytessent4$4(inputs);
	if (locale === "ja") return what_we_measure_theadditionaljavascriptbytessent4$3(inputs);
	if (locale === "ko") return what_we_measure_theadditionaljavascriptbytessent4$2(inputs);
	if (locale === "ru") return what_we_measure_theadditionaljavascriptbytessent4$1(inputs);
	return what_we_measure_theadditionaljavascriptbytessent4$10(inputs);
});
var what_we_measure_whatwemeasure2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return what_we_measure_whatwemeasure2$9(inputs);
	if (locale === "es") return what_we_measure_whatwemeasure2$8(inputs);
	if (locale === "de") return what_we_measure_whatwemeasure2$7(inputs);
	if (locale === "it") return what_we_measure_whatwemeasure2$6(inputs);
	if (locale === "pt") return what_we_measure_whatwemeasure2$5(inputs);
	if (locale === "zh") return what_we_measure_whatwemeasure2$4(inputs);
	if (locale === "ja") return what_we_measure_whatwemeasure2$3(inputs);
	if (locale === "ko") return what_we_measure_whatwemeasure2$2(inputs);
	if (locale === "ru") return what_we_measure_whatwemeasure2$1(inputs);
	return what_we_measure_whatwemeasure2$10(inputs);
});
var what_we_measure_whethersplittingtranslationsbyroute4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return what_we_measure_whethersplittingtranslationsbyroute4$9(inputs);
	if (locale === "es") return what_we_measure_whethersplittingtranslationsbyroute4$8(inputs);
	if (locale === "de") return what_we_measure_whethersplittingtranslationsbyroute4$7(inputs);
	if (locale === "it") return what_we_measure_whethersplittingtranslationsbyroute4$6(inputs);
	if (locale === "pt") return what_we_measure_whethersplittingtranslationsbyroute4$5(inputs);
	if (locale === "zh") return what_we_measure_whethersplittingtranslationsbyroute4$4(inputs);
	if (locale === "ja") return what_we_measure_whethersplittingtranslationsbyroute4$3(inputs);
	if (locale === "ko") return what_we_measure_whethersplittingtranslationsbyroute4$2(inputs);
	if (locale === "ru") return what_we_measure_whethersplittingtranslationsbyroute4$1(inputs);
	return what_we_measure_whethersplittingtranslationsbyroute4$10(inputs);
});
var _jsxFileName$2 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/about/WhatWeMeasure.tsx";
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
	return jsxDEV("section", {
		className: "mt-12 mx-auto max-w-3xl",
		children: [jsxDEV("h2", {
			className: "mb-4 text-2xl font-bold text-foreground",
			children: what_we_measure_whatwemeasure2()
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 29,
			columnNumber: 7
		}, this), jsxDEV("ul", {
			className: "space-y-4",
			children: metrics.map((metricEl) => jsxDEV("li", {
				className: "rounded-md border border-border p-4",
				children: [jsxDEV("span", {
					className: "block text-sm font-bold text-primary",
					children: metricEl.metric
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 38,
					columnNumber: 13
				}, this), jsxDEV("span", {
					className: "block mt-1 text-sm text-muted-foreground",
					children: metricEl.desc
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 41,
					columnNumber: 13
				}, this)]
			}, metricEl.metric, true, {
				fileName: _jsxFileName$2,
				lineNumber: 34,
				columnNumber: 11
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 32,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 28,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/scripts/Wrapper.tsx";
setLocale("en", { reload: false });
function Wrapper({ children }) {
	return jsxDEV(Fragment, { children }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/paraglide-app/src/components/pages/about/WhatWeMeasure.wrapper.tsx";
function Wrapped() {
	return jsxDEV(Wrapper, { children: jsxDEV(WhatWeMeasure, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Wrapped as default };
