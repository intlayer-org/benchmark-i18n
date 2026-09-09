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
var en_home_whyitmatters_bundlesizedesc4 = () => {
	return `The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.`;
};
var fr_home_whyitmatters_bundlesizedesc4 = () => {
	return `Le bundle est l'ensemble des données livrées à chaque utilisateur dans le monde. Un bundle plus lourd implique des temps de téléchargement plus longs — surtout sur des connexions 3G lentes encore très répandues. Les bibliothèques i18n ont des poids très variables : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, sans compter les fichiers de traduction.`;
};
var es_home_whyitmatters_bundlesizedesc4 = () => {
	return `El bundle representa los datos enviados a cada usuario en todo el mundo. Un bundle más grande significa tiempos de descarga más largos, especialmente en las conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código runtime, además de los propios archivos de traducción.`;
};
var de_home_whyitmatters_bundlesizedesc4 = () => {
	return `Das Bundle sind die Daten, die an jeden Benutzer auf der ganzen Welt gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — besonders bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren stark in ihrem Gewicht: von einigen Kilobyte bis zu Dutzenden von Kilobyte an Laufzeitcode, plus die Übersetzungsdateien selbst.`;
};
var it_home_whyitmatters_bundlesizedesc4 = () => {
	return `Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.`;
};
var pt_home_whyitmatters_bundlesizedesc4 = () => {
	return `O bundle representa os dados enviados para cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas, comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código runtime, além dos próprios arquivos de tradução.`;
};
var zh_home_whyitmatters_bundlesizedesc4 = () => {
	return `包是发送给全球每个用户的数据。较大的包意味着较长的下载时间 — 特别是在许多地区常见的慢速 3G 连接下。i18n 库的重量差异巨大：从几 KB 到几十 KB 的运行时代码，外加翻译文件本身。`;
};
var ja_home_whyitmatters_bundlesizedesc4 = () => {
	return `バンドルは世界中のすべてのユーザーに送られるデータです。バンドルが大きいほどダウンロード時間が長くなります。これは多くの地域で一般的な低速な3G接続において特に顕著です。i18nライブラリの重量は、数キロバイトから数十キロバイトのランタイムコード、さらに翻訳ファイル自体に至るまで、劇的に異なります。`;
};
var ko_home_whyitmatters_bundlesizedesc4 = () => {
	return `The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.`;
};
var ru_home_whyitmatters_bundlesizedesc4 = () => {
	return `Бандл — это данные, отправляемые каждому пользователю по всему миру. Больший бандл означает более длительное время загрузки — особенно при медленном 3G-соединении, распространенном во многих регионах. Вес библиотек i18n сильно варьируется: от нескольких килобайт до десятков килобайт кода среды выполнения, плюс сами файлы переводов.`;
};
var home_whyitmatters_bundlesizedesc4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_home_whyitmatters_bundlesizedesc4(inputs);
	if (locale === "es") return es_home_whyitmatters_bundlesizedesc4(inputs);
	if (locale === "de") return de_home_whyitmatters_bundlesizedesc4(inputs);
	if (locale === "it") return it_home_whyitmatters_bundlesizedesc4(inputs);
	if (locale === "pt") return pt_home_whyitmatters_bundlesizedesc4(inputs);
	if (locale === "zh") return zh_home_whyitmatters_bundlesizedesc4(inputs);
	if (locale === "ja") return ja_home_whyitmatters_bundlesizedesc4(inputs);
	if (locale === "ko") return ko_home_whyitmatters_bundlesizedesc4(inputs);
	if (locale === "ru") return ru_home_whyitmatters_bundlesizedesc4(inputs);
	return en_home_whyitmatters_bundlesizedesc4(inputs);
});
var en_home_whyitmatters_bundlesizetitle4 = () => {
	return `Bundle Size`;
};
var fr_home_whyitmatters_bundlesizetitle4 = () => {
	return `Taille du bundle`;
};
var es_home_whyitmatters_bundlesizetitle4 = () => {
	return `Tamaño del bundle`;
};
var de_home_whyitmatters_bundlesizetitle4 = () => {
	return `Bundle-Größe`;
};
var it_home_whyitmatters_bundlesizetitle4 = () => {
	return `Dimensione del bundle`;
};
var pt_home_whyitmatters_bundlesizetitle4 = () => {
	return `Tamanho do bundle`;
};
var zh_home_whyitmatters_bundlesizetitle4 = () => {
	return `包大小`;
};
var ja_home_whyitmatters_bundlesizetitle4 = () => {
	return `バンドルサイズ`;
};
var ko_home_whyitmatters_bundlesizetitle4 = () => {
	return `Bundle Size`;
};
var ru_home_whyitmatters_bundlesizetitle4 = () => {
	return `Размер бандла`;
};
var home_whyitmatters_bundlesizetitle4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_home_whyitmatters_bundlesizetitle4(inputs);
	if (locale === "es") return es_home_whyitmatters_bundlesizetitle4(inputs);
	if (locale === "de") return de_home_whyitmatters_bundlesizetitle4(inputs);
	if (locale === "it") return it_home_whyitmatters_bundlesizetitle4(inputs);
	if (locale === "pt") return pt_home_whyitmatters_bundlesizetitle4(inputs);
	if (locale === "zh") return zh_home_whyitmatters_bundlesizetitle4(inputs);
	if (locale === "ja") return ja_home_whyitmatters_bundlesizetitle4(inputs);
	if (locale === "ko") return ko_home_whyitmatters_bundlesizetitle4(inputs);
	if (locale === "ru") return ru_home_whyitmatters_bundlesizetitle4(inputs);
	return en_home_whyitmatters_bundlesizetitle4(inputs);
});
var en_home_whyitmatters_dynamicloadingdesc4 = () => {
	return `Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.`;
};
var fr_home_whyitmatters_dynamicloadingdesc4 = () => {
	return `Charger toutes les traductions d'un coup surdimensionne la charge initiale. Le chargement paresseux découpe les traductions par route ou espace de noms et n'envoie que le nécessaire. Il introduit pourtant ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité du cache. Il faut mesurer les deux approches.`;
};
var es_home_whyitmatters_dynamicloadingdesc4 = () => {
	return `Cargar todas las traducciones por adelantado sobrecarga el payload inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, la carga diferida introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial.`;
};
var de_home_whyitmatters_dynamicloadingdesc4 = () => {
	return `Das Laden aller Übersetzungen im Voraus überlastet die anfängliche Nutzlast. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namespace auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Flash of Untranslated Content und Caching-Komplexität. Die Messung beider Strategien ist unerlässlich.`;
};
var it_home_whyitmatters_dynamicloadingdesc4 = () => {
	return `Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale.`;
};
var pt_home_whyitmatters_dynamicloadingdesc4 = () => {
	return `Carregar todas as traduções antecipadamente sobrecarrega o payload inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento lento introduz seus próprios trade-offs: requisições em cascata, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.`;
};
var zh_home_whyitmatters_dynamicloadingdesc4 = () => {
	return `预先加载所有翻译会使初始负载过重。动态（延迟）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，延迟加载引入了它自己的权衡：瀑布流请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。`;
};
var ja_home_whyitmatters_dynamicloadingdesc4 = () => {
	return `すべての翻訳を事前読み込みすると、初期ペイロードに過負荷がかかります。動的（遅延）読み込みは翻訳をルートや名前空間ごとに分割し、現在のページに必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、翻訳されていないコンテンツのフラッシュ、キャッシュの複雑さなどのトレードオフがあります。両方の戦略を測定することが不可欠です。`;
};
var ko_home_whyitmatters_dynamicloadingdesc4 = () => {
	return `Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.`;
};
var ru_home_whyitmatters_dynamicloadingdesc4 = () => {
	return `Загрузка всех переводов заранее перегружает начальный объем данных. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно текущей странице. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы, мерцание непереведенного контента и сложность кэширования. Важно измерять обе стратегии.`;
};
var home_whyitmatters_dynamicloadingdesc4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_home_whyitmatters_dynamicloadingdesc4(inputs);
	if (locale === "es") return es_home_whyitmatters_dynamicloadingdesc4(inputs);
	if (locale === "de") return de_home_whyitmatters_dynamicloadingdesc4(inputs);
	if (locale === "it") return it_home_whyitmatters_dynamicloadingdesc4(inputs);
	if (locale === "pt") return pt_home_whyitmatters_dynamicloadingdesc4(inputs);
	if (locale === "zh") return zh_home_whyitmatters_dynamicloadingdesc4(inputs);
	if (locale === "ja") return ja_home_whyitmatters_dynamicloadingdesc4(inputs);
	if (locale === "ko") return ko_home_whyitmatters_dynamicloadingdesc4(inputs);
	if (locale === "ru") return ru_home_whyitmatters_dynamicloadingdesc4(inputs);
	return en_home_whyitmatters_dynamicloadingdesc4(inputs);
});
var en_home_whyitmatters_dynamicloadingtitle4 = () => {
	return `Dynamic Loading`;
};
var fr_home_whyitmatters_dynamicloadingtitle4 = () => {
	return `Chargement dynamique`;
};
var es_home_whyitmatters_dynamicloadingtitle4 = () => {
	return `Carga dinámica`;
};
var de_home_whyitmatters_dynamicloadingtitle4 = () => {
	return `Dynamisches Laden`;
};
var it_home_whyitmatters_dynamicloadingtitle4 = () => {
	return `Caricamento dinamico`;
};
var pt_home_whyitmatters_dynamicloadingtitle4 = () => {
	return `Carregamento dinâmico`;
};
var zh_home_whyitmatters_dynamicloadingtitle4 = () => {
	return `动态加载`;
};
var ja_home_whyitmatters_dynamicloadingtitle4 = () => {
	return `動的読み込み`;
};
var ko_home_whyitmatters_dynamicloadingtitle4 = () => {
	return `Dynamic Loading`;
};
var ru_home_whyitmatters_dynamicloadingtitle4 = () => {
	return `Динамическая загрузка`;
};
var home_whyitmatters_dynamicloadingtitle4 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_home_whyitmatters_dynamicloadingtitle4(inputs);
	if (locale === "es") return es_home_whyitmatters_dynamicloadingtitle4(inputs);
	if (locale === "de") return de_home_whyitmatters_dynamicloadingtitle4(inputs);
	if (locale === "it") return it_home_whyitmatters_dynamicloadingtitle4(inputs);
	if (locale === "pt") return pt_home_whyitmatters_dynamicloadingtitle4(inputs);
	if (locale === "zh") return zh_home_whyitmatters_dynamicloadingtitle4(inputs);
	if (locale === "ja") return ja_home_whyitmatters_dynamicloadingtitle4(inputs);
	if (locale === "ko") return ko_home_whyitmatters_dynamicloadingtitle4(inputs);
	if (locale === "ru") return ru_home_whyitmatters_dynamicloadingtitle4(inputs);
	return en_home_whyitmatters_dynamicloadingtitle4(inputs);
});
var en_home_whyitmatters_renderingdesc3 = () => {
	return `Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).`;
};
var fr_home_whyitmatters_renderingdesc3 = () => {
	return `Brancher un gros dictionnaire JSON sur chaque composant crée une dépendance cachée : tout changement de contexte de traduction peut déclencher des re-rendus sur tout l'arbre. Lors de l'hydratation SSR, analyser et attacher d'immenses objets de traduction ajoute de la latence avant que la page soit interactive — impact direct sur le Time to Interactive (TTI).`;
};
var es_home_whyitmatters_renderingdesc3 = () => {
	return `Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página sea interactiva, lo que afecta directamente al Time to Interactive (TTI).`;
};
var de_home_whyitmatters_renderingdesc3 = () => {
	return `Die Anbindung eines großen JSON-Verzeichnisses an jede Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydrierung verursacht das Parsen und Anhängen massiver Übersetzungsobjekte Latenzzeit, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.`;
};
var it_home_whyitmatters_renderingdesc3 = () => {
	return `Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).`;
};
var pt_home_whyitmatters_renderingdesc3 = () => {
	return `Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode disparar renderizações em toda a árvore. Durante a hidratação SSR, analisar e anexar objetos de tradução massivos adiciona latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).`;
};
var zh_home_whyitmatters_renderingdesc3 = () => {
	return `将大型 JSON 字典连接到每个组件会创建隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加海量的翻译对象会增加页面变为可交互之前的延迟 — 直接影响可交互时间 (TTI)。`;
};
var ja_home_whyitmatters_renderingdesc3 = () => {
	return `巨大なJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体の再レンダリングを引き起こす可能性があります。SSRハイドレーション中、大規模な翻訳オブジェクトの解析とアタッチは、ページがインタラクティブになるまでのレイテンシを増加させ、Time to Interactive (TTI) に直接影響します。`;
};
var ko_home_whyitmatters_renderingdesc3 = () => {
	return `Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).`;
};
var ru_home_whyitmatters_renderingdesc3 = () => {
	return `Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг по всему дереву. Во время SSR-гидратации парсинг и присоединение массивных объектов перевода добавляет задержку до того, как страница станет интерактивной, что напрямую влияет на время до интерактивности (TTI).`;
};
var home_whyitmatters_renderingdesc3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_home_whyitmatters_renderingdesc3(inputs);
	if (locale === "es") return es_home_whyitmatters_renderingdesc3(inputs);
	if (locale === "de") return de_home_whyitmatters_renderingdesc3(inputs);
	if (locale === "it") return it_home_whyitmatters_renderingdesc3(inputs);
	if (locale === "pt") return pt_home_whyitmatters_renderingdesc3(inputs);
	if (locale === "zh") return zh_home_whyitmatters_renderingdesc3(inputs);
	if (locale === "ja") return ja_home_whyitmatters_renderingdesc3(inputs);
	if (locale === "ko") return ko_home_whyitmatters_renderingdesc3(inputs);
	if (locale === "ru") return ru_home_whyitmatters_renderingdesc3(inputs);
	return en_home_whyitmatters_renderingdesc3(inputs);
});
var en_home_whyitmatters_renderingtitle3 = () => {
	return `Rendering & Hydration`;
};
var fr_home_whyitmatters_renderingtitle3 = () => {
	return `Rendu et hydratation`;
};
var es_home_whyitmatters_renderingtitle3 = () => {
	return `Renderizado e hidratación`;
};
var de_home_whyitmatters_renderingtitle3 = () => {
	return `Rendering & Hydrierung`;
};
var it_home_whyitmatters_renderingtitle3 = () => {
	return `Rendering e idratazione`;
};
var pt_home_whyitmatters_renderingtitle3 = () => {
	return `Renderização e hidratação`;
};
var zh_home_whyitmatters_renderingtitle3 = () => {
	return `渲染与注水`;
};
var ja_home_whyitmatters_renderingtitle3 = () => {
	return `レンダリングとハイドレーション`;
};
var ko_home_whyitmatters_renderingtitle3 = () => {
	return `Rendering & Hydration`;
};
var ru_home_whyitmatters_renderingtitle3 = () => {
	return `Рендеринг и гидратация`;
};
var home_whyitmatters_renderingtitle3 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_home_whyitmatters_renderingtitle3(inputs);
	if (locale === "es") return es_home_whyitmatters_renderingtitle3(inputs);
	if (locale === "de") return de_home_whyitmatters_renderingtitle3(inputs);
	if (locale === "it") return it_home_whyitmatters_renderingtitle3(inputs);
	if (locale === "pt") return pt_home_whyitmatters_renderingtitle3(inputs);
	if (locale === "zh") return zh_home_whyitmatters_renderingtitle3(inputs);
	if (locale === "ja") return ja_home_whyitmatters_renderingtitle3(inputs);
	if (locale === "ko") return ko_home_whyitmatters_renderingtitle3(inputs);
	if (locale === "ru") return ru_home_whyitmatters_renderingtitle3(inputs);
	return en_home_whyitmatters_renderingtitle3(inputs);
});
var en_home_whyitmatters_title2 = () => {
	return `Why These Metrics Matter`;
};
var fr_home_whyitmatters_title2 = () => {
	return `Pourquoi ces métriques comptent`;
};
var es_home_whyitmatters_title2 = () => {
	return `Por qué son importantes estas métricas`;
};
var de_home_whyitmatters_title2 = () => {
	return `Warum diese Metriken wichtig sind`;
};
var it_home_whyitmatters_title2 = () => {
	return `Perché queste metriche sono importanti`;
};
var pt_home_whyitmatters_title2 = () => {
	return `Por que estas métricas importam`;
};
var zh_home_whyitmatters_title2 = () => {
	return `为什么这些指标很重要`;
};
var ja_home_whyitmatters_title2 = () => {
	return `なぜこれらの指標が重要なのか`;
};
var ko_home_whyitmatters_title2 = () => {
	return `Why These Metrics Matter`;
};
var ru_home_whyitmatters_title2 = () => {
	return `Почему эти метрики важны`;
};
var home_whyitmatters_title2 = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "fr") return fr_home_whyitmatters_title2(inputs);
	if (locale === "es") return es_home_whyitmatters_title2(inputs);
	if (locale === "de") return de_home_whyitmatters_title2(inputs);
	if (locale === "it") return it_home_whyitmatters_title2(inputs);
	if (locale === "pt") return pt_home_whyitmatters_title2(inputs);
	if (locale === "zh") return zh_home_whyitmatters_title2(inputs);
	if (locale === "ja") return ja_home_whyitmatters_title2(inputs);
	if (locale === "ko") return ko_home_whyitmatters_title2(inputs);
	if (locale === "ru") return ru_home_whyitmatters_title2(inputs);
	return en_home_whyitmatters_title2(inputs);
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
var root = $.from_html(`<section class="mb-16"><h2 class="mb-6 text-2xl font-bold text-foreground"> </h2> <div class="grid gap-6 md:grid-cols-3"><div class="rounded-lg border border-border bg-card p-6"><h3 class="mb-2 text-lg font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p></div> <div class="rounded-lg border border-border bg-card p-6"><h3 class="mb-2 text-lg font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p></div> <div class="rounded-lg border border-border bg-card p-6"><h3 class="mb-2 text-lg font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p></div></div></section>`);
function WhyItMatters($$anchor, $$props) {
	$.push($$props, false);
	usePerformanceMeasure("WhyItMatters");
	$.init();
	var section = root();
	var h2 = $.child(section);
	var text = $.only_child(h2, true);
	var div = $.sibling(h2, 2);
	var div_1 = $.child(div);
	var h3 = $.child(div_1);
	var text_1 = $.only_child(h3, true);
	var p = $.sibling(h3, 2);
	var text_2 = $.only_child(p, true);
	$.reset(div_1);
	var div_2 = $.sibling(div_1, 2);
	var h3_1 = $.child(div_2);
	var text_3 = $.only_child(h3_1, true);
	var p_1 = $.sibling(h3_1, 2);
	var text_4 = $.only_child(p_1, true);
	$.reset(div_2);
	var div_3 = $.sibling(div_2, 2);
	var h3_2 = $.child(div_3);
	var text_5 = $.only_child(h3_2, true);
	var p_2 = $.sibling(h3_2, 2);
	var text_6 = $.only_child(p_2, true);
	$.reset(div_3);
	$.reset(div);
	$.reset(section);
	$.template_effect(($0, $1, $2, $3, $4, $5, $6) => {
		$.set_text(text, $0);
		$.set_text(text_1, $1);
		$.set_text(text_2, $2);
		$.set_text(text_3, $3);
		$.set_text(text_4, $4);
		$.set_text(text_5, $5);
		$.set_text(text_6, $6);
	}, [
		() => home_whyitmatters_title2(),
		() => home_whyitmatters_bundlesizetitle4(),
		() => home_whyitmatters_bundlesizedesc4(),
		() => home_whyitmatters_renderingtitle3(),
		() => home_whyitmatters_renderingdesc3(),
		() => home_whyitmatters_dynamicloadingtitle4(),
		() => home_whyitmatters_dynamicloadingdesc4()
	]);
	$.append($$anchor, section);
	$.pop();
}
export { WhyItMatters as default };
