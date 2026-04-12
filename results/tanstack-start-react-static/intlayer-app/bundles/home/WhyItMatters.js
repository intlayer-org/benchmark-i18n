import { Fragment, createContext, createElement, isValidElement, lazy, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
var why_it_matters_default = {
	key: "why-it-matters",
	content: /* @__PURE__ */ JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"g\":\"Why These Metrics Matter\",\"a\":\"Bundle Size\",\"f\":\"The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.\",\"e\":\"Rendering & Hydration\",\"b\":\"Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).\",\"c\":\"Dynamic Loading\",\"d\":\"Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.\"},\"fr\":{\"g\":\"Pourquoi ces Métriques Comptent\",\"a\":\"Taille du Bundle\",\"f\":\"Le bundle représente les données envoyées à chaque utilisateur à travers le monde. Un bundle plus volumineux signifie des temps de téléchargement plus longs — particulièrement sur les connexions 3G lentes courantes dans de nombreuses régions. Les bibliothèques i18n varient considérablement en poids : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, plus les fichiers de traduction eux-mêmes.\",\"e\":\"Rendu & Hydratation\",\"b\":\"Connecter un dictionnaire JSON volumineux à chaque composant crée une dépendance cachée : tout changement dans le contexte de traduction peut déclencher des re-rendus sur l'ensemble de l'arborescence. Pendant l'hydratation SSR, l'analyse et l'attachement d'objets de traduction massifs ajoutent de la latence avant que la page ne devienne interactive — impactant directement le Time to Interactive (TTI).\",\"c\":\"Chargement Dynamique\",\"d\":\"Charger toutes les traductions à l'avance surcharge la charge utile initiale. Le chargement dynamique (lazy) divise les traductions par route ou espace de noms, n'envoyant que ce dont la page actuelle a besoin. Cependant, le lazy loading introduit ses propres compromis : requêtes en cascade (waterfall), flash de contenu non traduit et complexité de mise en cache. Mesurer les deux stratégies est essentiel.\"},\"es\":{\"g\":\"Por qué estas métricas son importantes\",\"a\":\"Tamaño del Bundle\",\"f\":\"El bundle es la información que se envía a cada usuario en todo el mundo. Un bundle más grande significa tiempos de descarga más largos, especialmente en conexiones 3G lentas comunes en muchas regiones. Las bibliotecas de i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código de ejecución, además de los propios archivos de traducción.\",\"e\":\"Renderizado e Hidratación\",\"b\":\"Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la fijación de objetos de traducción masivos agregan latencia antes de que la página se vuelva interactiva, lo que afecta directamente al Tiempo de Interacción (TTI).\",\"c\":\"Carga Dinámica\",\"d\":\"Cargar todas las traducciones por adelantado sobrecarga la carga útil inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que necesita la página actual. Sin embargo, la carga diferida presenta sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de almacenamiento en caché. Medir ambas estrategias es esencial.\"},\"de\":{\"g\":\"Warum diese Metriken wichtig sind\",\"a\":\"Bundle-Größe\",\"f\":\"Das Bundle ist die Datenmenge, die an jeden Benutzer weltweit gesendet wird. Ein größeres Bundle bedeutet längere Downloadzeiten – insbesondere bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren stark in ihrem Gewicht: von einigen Kilobytes bis zu zig Kilobytes an Laufzeitcode, plus die Übersetzungsdateien selbst.\",\"e\":\"Rendering & Hydratisierung\",\"b\":\"Das Verbinden eines großen JSON-Wörterbuchs mit jeder Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydratisierung führt das Parsen und Anhängen massiver Übersetzungsobjekte zu Latenzzeiten, bevor die Seite interaktiv wird – was sich direkt auf die Time to Interactive (TTI) auswirkt.\",\"c\":\"Dynamisches Laden\",\"d\":\"Das Vorabladen aller Übersetzungen überlastet die anfängliche Payload. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namensraum auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Aufblitzen von nicht übersetztem Inhalt und Caching-Komplexität. Die Messung beider Strategien ist unerlässlich.\"},\"it\":{\"g\":\"Perché queste metriche sono importanti\",\"a\":\"Dimensioni del bundle\",\"f\":\"Il bundle rappresenta i dati inviati a ogni utente in tutto il mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.\",\"e\":\"Rendering e idratazione\",\"b\":\"Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può innescare nuovi rendering nell'intero albero. Durante l'idratazione SSR, l'analisi e il collegamento di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).\",\"c\":\"Caricamento dinamico\",\"d\":\"Il caricamento preventivo di tutte le traduzioni sovraccarica il payload iniziale. Il caricamento dinamico (lazy) suddivide le traduzioni per percorso o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromis: richieste a cascata (waterfall), flash di contenuti non tradotti e complessità del caching. Misurare entrambe le strategie è essenziale.\"},\"pt\":{\"g\":\"Por que essas métricas são importantes\",\"a\":\"Tamanho do Bundle\",\"f\":\"O bundle representa os dados enviados a cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código de tempo de execução, além dos próprios arquivos de tradução.\",\"e\":\"Renderização e Hidratação\",\"b\":\"Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode desencadear novas renderizações em toda a árvore. Durante a hidratação do SSR, a análise e a anexação de objetos de tradução massivos adicionam latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).\",\"c\":\"Carregamento Dinâmico\",\"d\":\"Carregar todas as traduções antecipadamente sobrecarrega a carga útil inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento preguiçoso introduz suas próprias compensações: solicitações em cascada, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.\"},\"zh\":{\"g\":\"为什么这些指标很重要\",\"a\":\"包大小\",\"f\":\"Bundle 是运送给全球每一位用户的数据。更大的 Bundle 意味着更长的下载时间——尤其是在许多地区常见的缓慢 3G 连接上。i18n 库的重量差异巨大：从几 KB 到数十 KB 的运行时代码，再加上翻译文件本身。\",\"e\":\"渲染与注水\",\"b\":\"将大型 JSON 字典连接 to 每个组件会创建一个隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加庞大的翻译对象会在页面变得可交互之前增加延迟——直接影响可交互时间 (TTI)。\",\"c\":\"动态加载\",\"d\":\"预先加载所有翻译会使初始有效载荷过载。动态（懒）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，懒加载也会带来自身的权衡：瀑布请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。\"},\"ja\":{\"g\":\"これらの指標が重要な理由\",\"a\":\"バンドルサイズ\",\"f\":\"バンドルは、世界中のすべてのユーザーに送られるデータです。バンドルが大きいほど、ダウンロード時間が長くなります。これは、多くの地域で一般的な低速な 3G 接続では特に顕著です。i18n ライブラリはその重量が劇的に異なります。数キロバイトから数十キロバイトのランタイムコード、さらに翻訳ファイル自体が含まれます。\",\"e\":\"レンダリングとハイドレーション\",\"b\":\"大きな JSON 辞書を各コンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体の再レンダリングをトリガーする可能性があります。SSR ハイドレーション中、巨大な翻訳オブジェクトの解析とアタッチにより、ページがインタラクティブになるまでのレイテンシが増加し、Time to Interactive (TTI) に直接影響します。\",\"c\":\"ダイナミックローディング\",\"d\":\"すべての翻訳を事前読み込みすると、初期ペイロードが過負荷になります。ダイナミック（遅延）読み込みは、ルートまたは名前空間ごとに翻訳を分割し、現在のページに必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、翻訳されていないコンテンツのフラッシュ、キャッシュの複雑さなどのトレードオフがあります。両方の戦略を測定することが不可欠です。\"},\"ko\":{\"g\":\"이러한 지표가 중요한 이유\",\"a\":\"번들 크기\",\"f\":\"번들은 전 세계 모든 사용자에게 배송되는 데이터입니다. 번들이 클수록 다운로드 시간이 길어집니다. 특히 많은 지역에서 흔히 볼 수 있는 느린 3G 연결에서는 더욱 그렇습니다. i18n 라이브러리는 런타임 코드 몇 킬로바이트에서 수십 킬로바이트까지 무게가 매우 다양하며, 번역 파일 자체도 포함됩니다.\",\"e\":\"렌더링 및 하이드레이션\",\"b\":\"대규모 JSON 사전을 모든 컴포넌트에 연결하면 숨겨진 종속성이 생성됩니다. 번역 컨텍스트의 모든 변경 사항은 전체 트리에서 리렌더링을 트리거할 수 있습니다. SSR 하이드레이션 동안 대규모 번역 객체를 파싱하고 첨부하면 페이지가 상호 작용 가능해지기 전에 지연 시간이 추가되어 TTI(Time to Interactive)에 직접적인 영향을 미칩니다.\",\"c\":\"동적 로딩\",\"d\":\"모든 번역을 미리 로드하면 초기 페이로드가 과부하됩니다. 동적(지연) 로딩은 경로 또는 네임스페이스별로 번역을 분할하여 현재 페이지에 필요한 내용만 전송합니다. 그러나 지연 로딩은 워터폴 요청, 번역되지 않은 콘텐츠의 플래시, 캐싱 복잡성 등 자체적인 트레이드오프를 발생시킵니다. 두 전략을 모두 측정하는 것이 필수적입니다.\"},\"ru\":{\"g\":\"Почему эти показатели важны\",\"a\":\"Размер бандла\",\"f\":\"Бандл — это данные, которые отправляются каждому пользователю по всему миру. Большой размер бандла означает более долгое время загрузки, особенно при медленном 3G-соединении, характерном для многих регионов. Библиотеки i18n сильно различаются по весу: от нескольких килобайт до десятков килобайт рантайм-кода, плюс сами файлы переводов.\",\"e\":\"Рендеринг и гидратация\",\"b\":\"Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг всего дерева. Во время гидратации SSR парсинг и присоединение массивных объектов перевода добавляют задержку до того, как страница станет интерактивной, что напрямую влияет на Time to Interactive (TTI).\",\"c\":\"Динамическая загрузка\",\"d\":\"Загрузка всех переводов сразу перегружает начальную полезную нагрузку. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно для текущей страницы. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы (waterfall), мерцание непереведенного контента и сложность кэширования. Измерение обеих стратегий необходимо.\"}}}")
};
//#endregion
//#region .intlayer/config/configuration.mjs
var internationalization = {
	"locales": [
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
	],
	"defaultLocale": "en"
};
var routing = {
	"mode": "prefix-no-default",
	"storage": {
		"cookies": [{
			"name": "INTLAYER_LOCALE",
			"attributes": {}
		}],
		"headers": [{ "name": "x-intlayer-locale" }]
	},
	"basePath": ""
};
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.0-canary.0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/IntlayerNode.mjs
var renderIntlayerNode = ({ children, value, additionalProps }) => {
	const element = isValidElement(children) ? children : /* @__PURE__ */ jsx(Fragment$1, { children });
	return new Proxy(element, { get(target, prop, receiver) {
		if (prop === "value") return value;
		if (additionalProps && Object.keys(additionalProps).includes(prop)) return additionalProps[prop];
		return Reflect.get(target, prop, receiver);
	} });
};
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.0-canary.0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/reactElement/renderReactElement.mjs
var renderReactElement = (element) => {
	if (element === null || typeof element !== "object") return element;
	const convertChildrenAsArray = (element) => {
		const children = element.props?.children;
		if (Array.isArray(children)) {
			const childrenResult = children.map((child, index) => {
				const renderedChild = renderReactElement(child);
				if (typeof renderedChild === "object" && renderedChild !== null && "type" in renderedChild) {
					const childElement = renderedChild;
					return createElement(childElement.type, {
						...childElement.props,
						key: index
					}, ...Array.isArray(childElement.props?.children) ? childElement.props.children : typeof childElement.props?.children !== "undefined" ? [childElement.props.children] : []);
				}
				return renderedChild;
			});
			return {
				...element,
				props: {
					...element.props,
					children: childrenResult
				}
			};
		} else if (typeof children !== "undefined" && children !== null) {
			const renderedChild = renderReactElement(children);
			return {
				...element,
				props: {
					...element.props,
					children: [renderedChild]
				}
			};
		}
		return {
			...element,
			props: {
				...element.props,
				children: []
			}
		};
	};
	const { type, props } = convertChildrenAsArray(element);
	return createElement(type ?? "span", props, ...props.children);
};
//#endregion
//#region ../../node_modules/.bun/@intlayer+types@8.7.0-canary.0/node_modules/@intlayer/types/dist/esm/nodeType.mjs
var TRANSLATION = "translation";
var INSERTION = "insertion";
var OBJECT = "object";
var ARRAY = "array";
//#endregion
//#region ../../node_modules/.bun/@intlayer+core@8.7.0-canary.0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/interpreter/getContent/deepTransform.mjs
/**
* Recursively traverses a node (object/array/primitive).
* Applies the *first* plugin that can transform a node, then stops descending further.
* If no plugin transforms it, it recurses into its children.
*/
var deepTransformNode = (node, props) => {
	for (const plugin of props.plugins ?? []) if (plugin.canHandle(node)) return plugin.transform(node, props, (node, props) => deepTransformNode(node, props));
	if (node === null || typeof node !== "object") return node;
	if (node.$$typeof !== void 0 || node.__v_isVNode !== void 0 || node._isVNode !== void 0 || node.isJSX !== void 0 || typeof node === "function") return node;
	if (Array.isArray(node)) return node.map((child, index) => {
		return deepTransformNode(child, {
			...props,
			children: child,
			keyPath: [...props.keyPath, {
				type: ARRAY,
				key: index
			}]
		});
	});
	const result = {};
	for (const key in node) {
		const childProps = {
			...props,
			children: node[key],
			keyPath: [...props.keyPath, {
				type: OBJECT,
				key
			}]
		};
		result[key] = deepTransformNode(node[key], childProps);
	}
	return result;
};
//#endregion
//#region ../../node_modules/.bun/@intlayer+core@8.7.0-canary.0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/interpreter/getInsertion.mjs
/**
* Allow to insert values in a string.
*
* Usage:
*
* ```ts
* const content = getInsertion('Hello {{name}}!', {
*  name: 'John',
* });
* // 'Hello John!'
* ```
*
*/
var getInsertion = (content, values) => content.replace(/\{\{\s*(.*?)\s*\}\}/g, (_, key) => {
	return (values[key.trim()] ?? "").toString();
});
//#endregion
//#region ../../node_modules/.bun/@intlayer+core@8.7.0-canary.0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/interpreter/getTranslation.mjs
/**
* Check if a value is a plain object that can be safely merged.
* Returns false for Promises, React elements, class instances, etc.
*/
var isPlainObject = (value) => {
	if (value === null || typeof value !== "object") return false;
	if (typeof value.then === "function") return false;
	if (value.$$typeof !== void 0 || value.__v_isVNode !== void 0 || value._isVNode !== void 0 || value.isJSX !== void 0) return false;
	const proto = Object.getPrototypeOf(value);
	return proto === Object.prototype || proto === null || Array.isArray(value);
};
/**
* Recursively merges two objects, skipping undefined source values.
* First argument takes precedence. Arrays replace rather than merge.
*/
var deepMerge = (target, source) => {
	if (target === void 0) return source;
	if (source === void 0) return target;
	if (Array.isArray(target)) return target;
	if (isPlainObject(target) && isPlainObject(source)) {
		const result = { ...target };
		for (const key of Object.keys(source)) {
			if (key === "__proto__" || key === "constructor" || source[key] === void 0) continue;
			result[key] = target[key] !== void 0 ? deepMerge(target[key], source[key]) : source[key];
		}
		return result;
	}
	return target;
};
/**
* Picks the appropriate content from a locale map based on the provided locale.
*
* It handles:
* 1. Exact locale match (e.g., 'en-US').
* 2. Generic locale fallback (e.g., 'en' if 'en-US' is not found).
* 3. Explicit fallback locale.
* 4. Deep merging of objects to ensure partial translations are complemented by fallbacks.
*
* @param languageContent - A map of locales to content.
* @param locale - The target locale to retrieve.
* @param fallback - Optional fallback locale if the target is not found.
* @returns The translated content.
*
* @example
* ```ts
* const content = getTranslation({
*   en: 'Hello',
*   fr: 'Bonjour',
* }, 'fr');
* // 'Bonjour'
* ```
*/
var getTranslation = (languageContent, locale, fallback) => {
	const get = (loc) => languageContent[loc];
	const seen = /* @__PURE__ */ new Set();
	const locales = [];
	const addLocale = (loc) => {
		if (loc && !seen.has(loc)) {
			seen.add(loc);
			locales.push(loc);
		}
	};
	addLocale(locale);
	if (locale.includes("-")) addLocale(locale.split("-")[0]);
	addLocale(fallback);
	if (fallback?.includes("-")) addLocale(fallback.split("-")[0]);
	const results = [];
	for (const loc of locales) {
		const val = get(loc);
		if (val === void 0) continue;
		if (typeof val === "string") {
			if (results.length === 0) return val;
			continue;
		}
		results.push(val);
	}
	if (results.length === 0) return void 0;
	if (results.length === 1) return results[0];
	if (Array.isArray(results[0])) return results[0];
	return results.reduce((acc, curr) => deepMerge(acc, curr));
};
//#endregion
//#region ../../node_modules/.bun/@intlayer+core@8.7.0-canary.0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/interpreter/getContent/plugins.mjs
/**
* True when the translation node type is explicitly disabled at build time.
*/
var TREE_SHAKE_TRANSLATION = process.env["INTLAYER_NODE_TYPE_TRANSLATION"] === "false";
/**
* True when the insertion node type is explicitly disabled at build time.
*/
var TREE_SHAKE_INSERTION$1 = process.env["INTLAYER_NODE_TYPE_INSERTION"] === "false";
/** ---------------------------------------------
* FALLBACK PLUGIN
*
* Used to fallback a tree-shaken plugin
* --------------------------------------------- */
var fallbackPlugin = {
	id: "fallback-plugin",
	canHandle: () => false,
	transform: (node) => node
};
/** Translation plugin. Replaces node with a locale string if nodeType = Translation. */
var translationPlugin = (locale, fallback) => TREE_SHAKE_TRANSLATION ? fallbackPlugin : {
	id: "translation-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "translation",
	transform: (node, props, deepTransformNode) => {
		const result = { ...node["translation"] ?? {} };
		for (const key in result) {
			const childProps = {
				...props,
				children: result[key],
				keyPath: [...props.keyPath, {
					type: TRANSLATION,
					key
				}]
			};
			result[key] = deepTransformNode(result[key], childProps);
		}
		return getTranslation(result, locale, fallback);
	}
};
/** Enumeration plugin. Replaces node with a function that takes quantity => string. */
var enumerationPlugin = fallbackPlugin;
/** Condition plugin. Replaces node with a function that takes boolean => string. */
var conditionPlugin = fallbackPlugin;
/** Insertion plugin. Replaces node with a function that takes quantity => string. */
var insertionPlugin$1 = TREE_SHAKE_INSERTION$1 ? fallbackPlugin : {
	id: "insertion-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "insertion",
	transform: (node, props, deepTransformNode) => {
		const newKeyPath = [...props.keyPath, { type: INSERTION }];
		const children = node[INSERTION];
		/** Insertion string plugin. Replaces string node with a component that render the insertion. */
		const insertionStringPlugin = {
			id: "insertion-string-plugin",
			canHandle: (node) => typeof node === "string",
			transform: (node, subProps, deepTransformNode) => {
				const transformedResult = deepTransformNode(node, {
					...subProps,
					children: node,
					plugins: [...(props.plugins ?? []).filter((plugin) => plugin.id !== "intlayer-node-plugin")]
				});
				return (values) => {
					const children = getInsertion(transformedResult, values);
					return deepTransformNode(children, {
						...subProps,
						plugins: props.plugins,
						children
					});
				};
			}
		};
		return deepTransformNode(children, {
			...props,
			children,
			keyPath: newKeyPath,
			plugins: [insertionStringPlugin, ...props.plugins ?? []]
		});
	}
};
/** Gender plugin. Replaces node with a function that takes gender => string. */
var genderPlugin = fallbackPlugin;
/** Nested plugin. Replaces node with the result of `getNesting`. */
var nestedPlugin = (locale) => fallbackPlugin;
/** File plugin. Replaces node with the result of `getNesting`. */
var filePlugin = fallbackPlugin;
//#endregion
//#region ../../node_modules/.bun/@intlayer+core@8.7.0-canary.0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/interpreter/getContent/getContent.mjs
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	conditionPlugin,
	insertionPlugin$1,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin
].filter(Boolean);
/**
* Transforms a node in a single pass, applying each plugin as needed.
*
* @param node The node to transform.
* @param locale The locale to use if your transformers need it (e.g. for translations).
*/
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
//#endregion
//#region ../../node_modules/.bun/@intlayer+core@8.7.0-canary.0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/interpreter/getDictionary.mjs
/**
* Transforms a dictionary in a single pass, applying each plugin as needed.
*
* @param dictionary The dictionary to transform.
* @param locale The locale to use if your transformers need it (e.g. for translations).
* @param additionalPlugins An array of NodeTransformer that define how to transform recognized nodes.
*                      If omitted, we’ll use a default set of plugins.
*/
var getDictionary$1 = (dictionary, locale, plugins = getBasePlugins(locale)) => {
	const props = {
		dictionaryKey: dictionary.key,
		dictionaryPath: dictionary.filePath,
		keyPath: [],
		plugins
	};
	return getContent(dictionary.content, props, plugins);
};
//#endregion
//#region ../../node_modules/.bun/@intlayer+core@8.7.0-canary.0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/interpreter/splitAndJoinInsertion.mjs
/**
* Check if a value is a complex object (not a primitive)
* Used to determine if values need to be wrapped in fragments
*/
var isComplexValue = (value) => value != null && typeof value !== "string" && typeof value !== "number" && typeof value !== "boolean";
var insertionRegex = /\{\{\s*(.*?)\s*\}\}/g;
var splitInsertionTemplate = (template, values = {}) => {
	if (!Object.values(values).some(isComplexValue)) return {
		isSimple: true,
		parts: template.replace(insertionRegex, (_, key) => (values[key.trim()] ?? "").toString())
	};
	const chunks = template.split(insertionRegex);
	const parts = [];
	for (let i = 0; i < chunks.length; i++) if (i % 2 === 0) {
		if (chunks[i]) parts.push(chunks[i]);
	} else {
		const val = values[chunks[i].trim()];
		if (val != null) parts.push(val);
	}
	return {
		isSimple: false,
		parts
	};
};
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.0-canary.0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/plugins.mjs
/**
* True when the intlayer node type is explicitly disabled at build time.
*/
var TREE_SHAKE_INTLAYER_NODE = process.env["INTLAYER_NODE_TYPE_INTLAYER_NODE"] === "false";
/**
* True when the react node type is explicitly disabled at build time.
*/
var TREE_SHAKE_REACT_NODE = process.env["INTLAYER_NODE_TYPE_REACT_NODE"] === "false";
/**
* True when the insertion node type is explicitly disabled at build time.
*/
var TREE_SHAKE_INSERTION = process.env["INTLAYER_NODE_TYPE_INSERTION"] === "false";
lazy(() => import("./MarkdownRendererPlugin-CYdetnEJ.js").then((m) => ({ default: m.MarkdownRendererPlugin })));
lazy(() => import("./HTMLRendererPlugin-o4RKYXwj.js").then((m) => ({ default: m.HTMLRendererPlugin })));
/** Translation plugin. Replaces node with a locale string if nodeType = Translation. */
var intlayerNodePlugins = TREE_SHAKE_INTLAYER_NODE ? fallbackPlugin : {
	id: "intlayer-node-plugin",
	canHandle: (node) => typeof node === "bigint" || typeof node === "string" || typeof node === "number",
	transform: (_node, { plugins, ...rest }) => renderIntlayerNode({
		...rest,
		value: rest.children,
		children: rest.children
	})
};
/** Translation plugin. Replaces node with a locale string if nodeType = Translation. */
var reactNodePlugins = TREE_SHAKE_REACT_NODE ? fallbackPlugin : {
	id: "react-node-plugin",
	canHandle: (node) => typeof node === "object" && typeof node?.props !== "undefined" && typeof node.key !== "undefined",
	transform: (node, { plugins, ...rest }) => renderIntlayerNode({
		...rest,
		value: "[[react-element]]",
		children: renderReactElement(node)
	})
};
/**
* Split insertion string and join with React nodes using shared core logic
*/
var splitAndJoinInsertion = (template, values) => {
	const result = splitInsertionTemplate(template, values);
	if (result.isSimple) return result.parts;
	return createElement(Fragment, null, ...result.parts.map((part, index) => createElement(Fragment, { key: index }, part)));
};
/** Insertion plugin for React. Handles component/node insertion. */
var insertionPlugin = TREE_SHAKE_INSERTION ? fallbackPlugin : {
	id: "insertion-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "insertion",
	transform: (node, props, deepTransformNode) => {
		const newKeyPath = [...props.keyPath, { type: INSERTION }];
		const children = node[INSERTION];
		/** Insertion string plugin. Replaces string node with a component that render the insertion. */
		const insertionStringPlugin = {
			id: "insertion-string-plugin",
			canHandle: (node) => typeof node === "string",
			transform: (node, subProps, deepTransformNode) => {
				const transformedResult = deepTransformNode(node, {
					...subProps,
					children: node,
					plugins: [...(props.plugins ?? []).filter((plugin) => plugin.id !== "intlayer-node-plugin")]
				});
				return (values) => {
					const result = splitAndJoinInsertion(transformedResult, values);
					return deepTransformNode(result, {
						...subProps,
						plugins: props.plugins,
						children: result
					});
				};
			}
		};
		const result = deepTransformNode(children, {
			...props,
			children,
			keyPath: newKeyPath,
			plugins: [insertionStringPlugin, ...props.plugins ?? []]
		});
		if (typeof children === "object" && children !== null && "nodeType" in children && ["enumeration", "condition"].includes(children.nodeType)) return (values) => (arg) => {
			const inner = result(arg);
			if (typeof inner === "function") return inner(values);
			return inner;
		};
		return result;
	}
};
var markdownPlugin = fallbackPlugin;
/** HTML plugin. Replaces node with a function that takes components => ReactNode. */
var htmlPlugin = fallbackPlugin;
/**
* Get the plugins array for React content transformation.
* This function is used by both getIntlayer and getDictionary to ensure consistent plugin configuration.
*/
var getPlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	conditionPlugin,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin,
	intlayerNodePlugins,
	reactNodePlugins,
	insertionPlugin,
	markdownPlugin,
	htmlPlugin
].filter(Boolean);
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.0-canary.0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/getDictionary.mjs
var getDictionary = (dictionary, locale) => getDictionary$1(dictionary, locale, getPlugins(locale));
//#endregion
//#region ../../node_modules/.bun/@intlayer+core@8.7.0-canary.0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/localization/localeResolver.mjs
/**
* Resolves the most specific locale from a user-provided list,
* or falls back to the default locale if no match is found.
*/
var localeResolver = (selectedLocale, locales = internationalization?.locales, defaultLocale = internationalization?.defaultLocale) => {
	const requestedLocales = [selectedLocale].flat();
	const normalize = (locale) => locale.trim().toLowerCase();
	try {
		for (const requested of requestedLocales) {
			const normalizedRequested = normalize(requested);
			const exactMatch = locales.find((locale) => normalize(locale) === normalizedRequested);
			if (exactMatch) return exactMatch;
			const [requestedLang] = normalizedRequested.split("-");
			const partialMatch = locales.find((locale) => normalize(locale).split("-")[0] === requestedLang);
			if (partialMatch) return partialMatch;
		}
	} catch {}
	return defaultLocale;
};
//#endregion
//#region ../../node_modules/.bun/@intlayer+core@8.7.0-canary.0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/utils/localeStorage.mjs
/**
* True when cookie storage is explicitly disabled at build time.
*/
var TREE_SHAKE_STORAGE_COOKIES = process.env["INTLAYER_ROUTING_STORAGE_COOKIES"] === "false";
process.env["INTLAYER_ROUTING_STORAGE_HEADERS"];
var buildCookieString = (name, value, attributes) => {
	const parts = [`${name}=${encodeURIComponent(value)}`];
	if (attributes.path) parts.push(`Path=${attributes.path}`);
	if (attributes.domain) parts.push(`Domain=${attributes.domain}`);
	if (attributes.expires instanceof Date) parts.push(`Expires=${attributes.expires.toUTCString()}`);
	if (attributes.secure) parts.push("Secure");
	if (attributes.sameSite) parts.push(`SameSite=${attributes.sameSite}`);
	return parts.join("; ");
};
/**
* Retrieves the locale from browser storage mechanisms
* (cookies, localStorage, sessionStorage).
* Does not read from headers — use `getLocaleFromStorageServer` for that.
*/
var getLocaleFromStorageClient = (options) => {
	const { locales } = internationalization;
	if (options?.isCookieEnabled === false) return void 0;
	const isValidLocale = (value) => !!value && locales.includes(value);
	if (!TREE_SHAKE_STORAGE_COOKIES) for (let i = 0; i < (routing.storage.cookies ?? []).length; i++) try {
		const value = options?.getCookie?.(routing.storage.cookies[i].name);
		if (isValidLocale(value)) return value;
	} catch {}
};
/**
* Stores the locale in browser storage mechanisms
* (cookies, localStorage, sessionStorage).
* Does not write to headers — use `setLocaleInStorageServer` for that.
*/
var setLocaleInStorageClient = (locale, options) => {
	if (options?.isCookieEnabled === false) return;
	if (!TREE_SHAKE_STORAGE_COOKIES && routing.storage.cookies) for (let i = 0; i < routing.storage.cookies.length; i++) {
		const { name, attributes } = routing.storage.cookies[i];
		try {
			if (options?.setCookieStore) options.setCookieStore(name, locale, {
				...attributes,
				expires: attributes.expires instanceof Date ? attributes.expires.getTime() : attributes.expires
			});
		} catch {
			try {
				if (options?.setCookieString) options.setCookieString(name, buildCookieString(name, locale, attributes));
			} catch {}
		}
	}
};
//#endregion
//#region ../../node_modules/.bun/@intlayer+core@8.7.0-canary.0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/localization/getBrowserLocale.mjs
var localeStorageOptions = {
	getCookie: (name) => document.cookie.split(";").find((c) => c.trim().startsWith(`${name}=`))?.split("=")[1],
	getLocaleStorage: (name) => localStorage.getItem(name),
	getSessionStorage: (name) => sessionStorage.getItem(name),
	isCookieEnabled: true,
	setCookieStore: (name, value, attributes) => cookieStore.set({
		name,
		value,
		path: attributes.path,
		domain: attributes.domain,
		expires: attributes.expires,
		sameSite: attributes.sameSite
	}),
	setCookieString: (_name, cookie) => {
		document.cookie = cookie;
	},
	setSessionStorage: (name, value) => sessionStorage.setItem(name, value),
	setLocaleStorage: (name, value) => localStorage.setItem(name, value)
};
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.0-canary.0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/client/useLocaleStorage.mjs
/**
* Get the locale cookie
*/
/**
* Get the locale cookie
*/
var localeInStorage = getLocaleFromStorageClient(localeStorageOptions);
/**
* Set the locale cookie
*/
var setLocaleInStorage = (locale, isCookieEnabled) => setLocaleInStorageClient(locale, {
	...localeStorageOptions,
	isCookieEnabled
});
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.0-canary.0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/editor/useEditor.mjs
/**
* Initializes the Intlayer editor client singleton when the editor is enabled.
* Syncs the current locale from the Intlayer context into the editor manager so
* the editor always knows which locale the app is displaying.
*/
var useEditor = () => {
	const { locale } = useContext(IntlayerClientContext) ?? {};
	const managerRef = useRef(null);
	useEffect(() => {}, []);
	useEffect(() => {
		if (!locale || !managerRef.current) return;
		managerRef.current.currentLocale.set(locale);
	}, [locale]);
};
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.0-canary.0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/editor/EditorProvider.mjs
var EditorProvider = ({ children }) => {
	useEditor();
	return children;
};
//#endregion
//#region ../../node_modules/.bun/@intlayer+config@8.7.0-canary.0+3f10a4be4e334a9b/node_modules/@intlayer/config/dist/esm/utils/setIntlayerIdentifier.mjs
/**
* Sets the version of Intlayer in the window object.
* This is used for Intlayer detection in the browser.
*/
var setIntlayerIdentifier = () => {
	if (typeof window !== "undefined") window.intlayer = { enabled: true };
};
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.0-canary.0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/client/IntlayerProvider.mjs
/**
* Context that stores the current locale on the client side.
*/
var IntlayerClientContext = createContext({
	locale: localeInStorage ?? internationalization?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: true
});
/**
* Provider that stores the current locale on the client side.
*
* This component is focused on content delivery without the editor features.
*
* @param props - The provider props.
* @returns The provider component.
*/
var IntlayerProviderContent = ({ locale: localeProp, defaultLocale: defaultLocaleProp, children, setLocale: setLocaleProp, disableEditor, isCookieEnabled }) => {
	const { locales: availableLocales, defaultLocale: defaultLocaleConfig } = internationalization ?? {};
	const [currentLocale, setCurrentLocale] = useState(localeProp ?? localeInStorage ?? defaultLocaleProp ?? defaultLocaleConfig);
	useEffect(() => {
		if (localeProp && localeProp !== currentLocale) setCurrentLocale(localeProp);
	}, [localeProp]);
	useEffect(() => {
		setIntlayerIdentifier();
	}, []);
	const setLocaleBase = (newLocale) => {
		if (currentLocale.toString() === newLocale.toString()) return;
		if (!availableLocales?.map(String).includes(newLocale)) {
			console.error(`Locale ${newLocale} is not available`);
			return;
		}
		setCurrentLocale(newLocale);
		setLocaleInStorage(newLocale, isCookieEnabled);
	};
	const setLocale = setLocaleProp ?? setLocaleBase;
	const resolvedLocale = localeResolver(currentLocale);
	return /* @__PURE__ */ jsx(IntlayerClientContext.Provider, {
		value: {
			locale: resolvedLocale,
			setLocale,
			disableEditor
		},
		children
	});
};
/**
* Main provider for Intlayer in React applications.
*
* It includes the editor provider by default, allowing for live content editing
* if configured.
*
* @param props - The provider props.
* @returns The provider component with editor support.
*
* @example
* ```tsx
* import { IntlayerProvider } from 'react-intlayer';
*
* const App = () => (
*   <IntlayerProvider>
*     <MyComponent />
*   </IntlayerProvider>
* );
* ```
*/
var IntlayerProvider = ({ children, ...props }) => /* @__PURE__ */ jsxs(IntlayerProviderContent, {
	...props,
	children: [/* @__PURE__ */ jsx(EditorProvider, {}), children]
});
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.0-canary.0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/client/useDictionary.mjs
/**
* On the server side, Hook that transform a dictionary and return the content
*
* If the locale is not provided, it will use the locale from the client context
*/
var useDictionary = (dictionary, locale) => {
	const { locale: currentLocale } = useContext(IntlayerClientContext) ?? {};
	return useMemo(() => {
		return getDictionary(dictionary, locale ?? currentLocale);
	}, [
		dictionary.key,
		currentLocale,
		locale
	]);
};
//#endregion
//#region src/components/pages/home/WhyItMatters.tsx
function WhyItMatters() {
	const content = useDictionary(why_it_matters_default);
	return /* @__PURE__ */ jsxs("section", {
		className: "mb-16",
		children: [/* @__PURE__ */ jsx("h2", {
			className: "mb-6 text-2xl font-bold text-foreground",
			children: content.g
		}), /* @__PURE__ */ jsxs("div", {
			className: "grid gap-6 md:grid-cols-3",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: content.a
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: content.f
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: content.e
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: content.b
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: content.c
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						children: content.d
					})]
				})
			]
		})]
	});
}
//#endregion
//#region scripts/Wrapper.tsx
function Wrapper({ children }) {
	return /* @__PURE__ */ jsx(IntlayerProvider, {
		locale: "en",
		children
	});
}
//#endregion
//#region src/components/pages/home/WhyItMatters.wrapper.tsx
function Wrapped() {
	return /* @__PURE__ */ jsx(Wrapper, { children: /* @__PURE__ */ jsx(WhyItMatters, {}) });
}
//#endregion
export { Wrapped as default };
import { Fragment, createContext, createElement, useContext } from "react";
import { jsx } from "react/jsx-runtime";
//#region ../../node_modules/.bun/@intlayer+core@8.7.0-canary.0+3f10a4be4e334a9b/node_modules/@intlayer/core/dist/esm/interpreter/getHTML.mjs
/**
* Helper to parse attributes from a tag string.
*/
var parseAttributes = (attributes) => {
	const props = {};
	const attrRegex = /([a-zA-Z0-9-]+)="([^"]*)"/g;
	let match = attrRegex.exec(attributes);
	while (match !== null) {
		props[match[1]] = match[2];
		match = attrRegex.exec(attributes);
	}
	return props;
};
var astCache = /* @__PURE__ */ new Map();
var parseHTML = (content) => {
	if (astCache.has(content)) return astCache.get(content);
	if (typeof content !== "string") return [];
	const tagRegex = /<(\/)?([a-zA-Z0-9.-]+)([\s\S]*?)(\/?)>/g;
	const elements = [];
	const stack = [];
	let lastIndex = 0;
	let match = tagRegex.exec(content);
	const appendChild = (child) => {
		(stack.length > 0 ? stack[stack.length - 1].children : elements).push(child);
	};
	while (match !== null) {
		const [fullMatch, isClosingRaw, tagName, attributesRaw, isSelfClosingRaw] = match;
		const matchIndex = match.index;
		if (matchIndex > lastIndex) appendChild(content.slice(lastIndex, matchIndex));
		const isClosing = isClosingRaw === "/";
		const isSelfClosing = isSelfClosingRaw === "/" || attributesRaw.trim().endsWith("/") || fullMatch.endsWith("/>");
		const cleanedAttributes = attributesRaw.trim().replace(/\/$/, "").trim();
		if (isClosing) {
			const last = stack[stack.length - 1];
			if (last && last.tagName === tagName) {
				const popped = stack.pop();
				if (popped) appendChild({
					tagName: popped.tagName,
					props: popped.props,
					children: popped.children
				});
			}
		} else if (isSelfClosing) appendChild({
			tagName,
			props: parseAttributes(cleanedAttributes),
			children: []
		});
		else {
			const tagProps = parseAttributes(cleanedAttributes);
			stack.push({
				tagName,
				children: [],
				props: tagProps
			});
		}
		lastIndex = matchIndex + fullMatch.length;
		match = tagRegex.exec(content);
	}
	if (lastIndex < content.length) appendChild(content.slice(lastIndex));
	while (stack.length > 0) {
		const last = stack.pop();
		if (last) appendChild({
			tagName: last.tagName,
			props: last.props,
			children: last.children
		});
	}
	astCache.set(content, elements);
	return elements;
};
/**
* Interprets a string containing HTML-like tags and replaces them with provided components or strings.
*/
var getHTML = (content, values) => {
	const ast = parseHTML(content);
	let keyCounter = 0;
	const renderASTNode = (node) => {
		if (typeof node === "string") return node;
		const { tagName, props, children } = node;
		const renderedChildren = children.flatMap(renderASTNode);
		const index = keyCounter++;
		let override = values[tagName];
		if (!override) {
			const lowerTagName = tagName.toLowerCase();
			const foundKey = Object.keys(values).find((key) => key.toLowerCase() === lowerTagName);
			if (foundKey) override = values[foundKey];
		}
		const key = `html-tag-${tagName}-${index}`;
		if (typeof override === "function") return override({
			...props,
			children: renderedChildren,
			key
		});
		if (typeof override === "string") {
			const component = values[override];
			if (typeof component === "function") return component({
				...props,
				children: renderedChildren,
				key
			});
			return renderedChildren;
		}
		if (typeof override === "object" && override !== null && "tag" in override) {
			const { tag: targetTag, props: extraProps } = override;
			const component = values[targetTag];
			if (typeof component === "function") return component({
				...props,
				...extraProps,
				children: renderedChildren,
				key
			});
			return renderedChildren;
		}
		return renderedChildren;
	};
	const result = ast.flatMap(renderASTNode);
	return result.length === 1 ? result[0] : result;
};
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.0-canary.0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/html/HTMLProvider.mjs
var HTMLContext = createContext(void 0);
var useHTMLContext = () => useContext(HTMLContext);
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.0-canary.0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/html/HTMLRenderer.mjs
/**
* Renders HTML-like content to JSX with the provided components.
*
* This function does not use context from HTMLProvider. Use `useHTMLRenderer`
* hook if you want to leverage provider context.
*/
var renderHTML = (content, { components = {} } = {}) => {
	const userComponents = Object.fromEntries(Object.entries(components).filter(([, Component]) => Component).map(([key, Component]) => [key, (props) => createElement(Component, props)]));
	return /* @__PURE__ */ jsx(Fragment, { children: getHTML(content, new Proxy(userComponents, { get(target, prop) {
		if (typeof prop === "string" && prop in target) return target[prop];
		if (typeof prop === "string" && /^[a-z][a-z0-9]*$/.test(prop)) return (props) => createElement(prop, props);
	} })) });
};
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.0-canary.0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/html/HTMLRendererPlugin.mjs
var HTMLRendererPlugin = (props) => {
	const { html, userComponents } = props;
	return renderHTML(html, { components: {
		...useHTMLContext()?.components,
		...userComponents
	} });
};
//#endregion
export { HTMLRendererPlugin };
import { createContext, useContext } from "react";
import "react/jsx-runtime";
//#region ../../node_modules/.bun/react-intlayer@8.7.0-canary.0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/markdown/MarkdownProvider.mjs
var MarkdownContext = createContext(void 0);
var useMarkdownContext = () => useContext(MarkdownContext);
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.0-canary.0+21ccd8898788a04d/node_modules/react-intlayer/dist/esm/markdown/MarkdownRendererPlugin.mjs
var MarkdownRendererPlugin = (props) => {
	const { children, options, components } = props;
	const context = useMarkdownContext();
	return (context?.renderMarkdown ?? ((md) => md))(children, options, {
		...context?.components ?? {},
		...components ?? {}
	});
};
//#endregion
export { MarkdownRendererPlugin };
