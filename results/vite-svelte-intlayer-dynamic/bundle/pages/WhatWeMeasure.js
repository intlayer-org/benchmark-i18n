import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
import { getContext, onMount } from "svelte";
import { derived, writable } from "svelte/store";
var content = {
	"de": () => import("./de-CZ3rR3Kg.js").then((m) => m.default),
	"en": () => import("./en-DfZSXZB3.js").then((m) => m.default),
	"es": () => import("./es-Brd53yaP.js").then((m) => m.default),
	"fr": () => import("./fr-xQ8Ec8iK.js").then((m) => m.default),
	"it": () => import("./it-UkLt-yZq.js").then((m) => m.default),
	"ja": () => import("./ja-BkqhiZqk.js").then((m) => m.default),
	"ko": () => import("./ko-B5nGeg6p.js").then((m) => m.default),
	"pt": () => import("./pt-CFi20r9Q.js").then((m) => m.default),
	"ru": () => import("./ru-DjeR3cQs.js").then((m) => m.default),
	"zh": () => import("./zh-BvTAuUzC.js").then((m) => m.default)
};
var INTLAYER_CONTEXT_KEY = Symbol("intlayer");
var getIntlayerContext = () => {
	return getContext(INTLAYER_CONTEXT_KEY);
};
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
	"requiredLocales": [
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
	"strictMode": "inclusive",
	"defaultLocale": "en"
};
var defaultLocale = internationalization?.defaultLocale;
var createIntlayerStore = () => {
	const { subscribe, set, update } = writable({ locale: defaultLocale });
	return {
		subscribe,
		setLocale: (locale) => update((store) => ({
			...store,
			locale
		})),
		getLocale: () => derived({ subscribe }, ($store) => $store.locale),
		reset: () => set({ locale: defaultLocale })
	};
};
var intlayerStore = createIntlayerStore();
var TRANSLATION = "translation";
var OBJECT = "object";
var ARRAY = "array";
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
	for (const key in node) Object.defineProperty(result, key, {
		enumerable: true,
		configurable: true,
		get: function() {
			const childProps = {
				...props,
				children: node[key],
				keyPath: [...props.keyPath, {
					type: OBJECT,
					key
				}]
			};
			const transformed = deepTransformNode(node[key], childProps);
			Object.defineProperty(this, key, {
				value: transformed,
				enumerable: true,
				configurable: true
			});
			return transformed;
		}
	});
	return result;
};
var isPlainObject = (value) => {
	if (value === null || typeof value !== "object") return false;
	if (typeof value.then === "function") return false;
	if (value.$$typeof !== void 0 || value.__v_isVNode !== void 0 || value._isVNode !== void 0 || value.isJSX !== void 0) return false;
	const proto = Object.getPrototypeOf(value);
	return proto === Object.prototype || proto === null || Array.isArray(value);
};
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
var fallbackPlugin = {
	id: "fallback-plugin",
	canHandle: () => false,
	transform: (node) => node
};
var translationPlugin = (locale, fallback) => process.env["INTLAYER_NODE_TYPE_TRANSLATION"] === "false" ? fallbackPlugin : {
	id: "translation-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "translation",
	transform: (node, props, deepTransformNode) => {
		const original = node["translation"] ?? {};
		const result = {};
		for (const key in original) {
			const childProps = {
				...props,
				children: original[key],
				keyPath: [...props.keyPath, {
					type: TRANSLATION,
					key
				}]
			};
			result[key] = deepTransformNode(original[key], childProps);
		}
		return getTranslation(result, locale, fallback);
	}
};
var enumerationPlugin = fallbackPlugin;
var conditionPlugin = fallbackPlugin;
var insertionPlugin$1 = fallbackPlugin;
var genderPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	conditionPlugin,
	insertionPlugin$1,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin
];
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
var getDictionary$1 = (dictionary, locale, plugins = getBasePlugins(locale)) => {
	const props = {
		dictionaryKey: dictionary.key,
		dictionaryPath: dictionary.filePath,
		keyPath: [],
		plugins
	};
	return getContent(dictionary.content, props, plugins);
};
function IntlayerNodeWrapper($$anchor, $$props) {
	let Renderer = $.prop($$props, "Renderer", 8, void 0);
	let rendererProps = $.prop($$props, "rendererProps", 24, () => ({}));
	let value = $.prop($$props, "value", 8, void 0);
	var fragment = $.comment();
	var node = $.first_child(fragment);
	var consequent = ($$anchor) => {
		var fragment_1 = $.comment();
		var node_1 = $.first_child(fragment_1);
		$.element(node_1, Renderer, false, ($$element, $$anchor) => {
			$.attribute_effect($$element, () => ({ ...rendererProps() }));
			var text = $.text();
			$.template_effect(() => $.set_text(text, value()));
			$.append($$anchor, text);
		});
		$.append($$anchor, fragment_1);
	};
	var consequent_1 = ($$anchor) => {
		Renderer()($$anchor, $.spread_props(rendererProps, {
			children: ($$anchor, $$slotProps) => {
				$.next();
				var text_1 = $.text();
				$.template_effect(() => $.set_text(text_1, value()));
				$.append($$anchor, text_1);
			},
			$$slots: { default: true }
		}));
	};
	var alternate = ($$anchor) => {
		var text_2 = $.text();
		$.template_effect(() => $.set_text(text_2, value()));
		$.append($$anchor, text_2);
	};
	$.if(node, ($$render) => {
		if (typeof Renderer() === "string") $$render(consequent);
		else if (typeof Renderer() === "function") $$render(consequent_1, 1);
		else $$render(alternate, -1);
	});
	$.append($$anchor, fragment);
}
var renderIntlayerNode = (args) => {
	const isClassComponent = Boolean(IntlayerNodeWrapper.prototype?.$destroy);
	let Node;
	if (isClassComponent) Node = class extends IntlayerNodeWrapper {
		constructor(options) {
			super({
				...options,
				props: {
					...options.props,
					Renderer: args.component,
					rendererProps: args.props,
					value: args.value
				}
			});
		}
	};
	else Node = (props) => {
		return IntlayerNodeWrapper(props, {
			Renderer: args.component,
			rendererProps: args.props,
			value: args.value
		});
	};
	Object.defineProperty(Node, "value", {
		value: args.value,
		writable: true,
		configurable: true
	});
	Object.defineProperty(Node, "toString", {
		value: () => args.value?.toString() ?? "",
		writable: true,
		configurable: true
	});
	if (args.additionalProps) Object.assign(Node, args.additionalProps);
	return Node;
};
var intlayerNodePlugins = {
	id: "intlayer-node-plugin",
	canHandle: (node) => typeof node === "bigint" || typeof node === "string" || typeof node === "number",
	transform: (node, { children, ...rest }) => renderIntlayerNode({
		value: children ?? node,
		component: void 0,
		props: rest
	})
};
var svelteNodePlugins = intlayerNodePlugins;
var insertionPlugin = fallbackPlugin;
var markdownPlugin = fallbackPlugin;
var htmlPlugin = fallbackPlugin;
var pluginsCache = /* @__PURE__ */ new Map();
var getPlugins = (locale, fallback = true) => {
	const cacheKey = `${locale ?? internationalization.defaultLocale}_${fallback}`;
	if (pluginsCache.has(cacheKey)) return pluginsCache.get(cacheKey);
	const plugins = [
		translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		conditionPlugin,
		nestedPlugin(locale ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		intlayerNodePlugins,
		svelteNodePlugins,
		insertionPlugin,
		markdownPlugin,
		htmlPlugin
	];
	pluginsCache.set(cacheKey, plugins);
	return plugins;
};
var getDictionary = (dictionary, locale) => getDictionary$1(dictionary, locale, getPlugins(locale));
var recursiveProxy = new Proxy(() => {}, {
	get: (_target, prop) => {
		if (prop === Symbol.toPrimitive) return () => void 0;
		if (prop === "toString") return () => "";
		if (prop === "then") return;
		return recursiveProxy;
	},
	apply: () => recursiveProxy
});
function useDictionaryDynamic(dictionaryPromise, _key, locale) {
	const context = getIntlayerContext();
	return derived(derived(intlayerStore, ($store) => locale ?? context?.locale ?? $store.locale), ($locale, set) => {
		set(new Proxy({
			isLoading: true,
			error: null
		}, { get: (_target, prop) => {
			if (prop === "isLoading") return true;
			if (prop === "error") return null;
			return recursiveProxy;
		} }));
		let isCancelled = false;
		const load = async () => {
			try {
				const loader = dictionaryPromise[$locale];
				if (!loader) return;
				const dict = await loader();
				if (isCancelled) return;
				set({
					...getDictionary(dict, $locale),
					isLoading: false,
					error: null
				});
			} catch (error) {
				if (isCancelled) return;
				console.error(error);
				set({
					isLoading: false,
					error
				});
			}
		};
		load();
		return () => {
			isCancelled = true;
		};
	}, new Proxy({
		isLoading: true,
		error: null
	}, { get: (_target, prop) => {
		if (prop === "isLoading") return true;
		if (prop === "error") return null;
		return recursiveProxy;
	} }));
}
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
var root_1 = $.from_html(`<li class="rounded-md border border-border p-4"><span class="block text-sm font-bold text-primary"> </span> <span class="mt-1 block text-sm text-muted-foreground"> </span></li>`);
var root = $.from_html(`<section class="mx-auto mt-12 max-w-3xl"><h2 class="mb-4 text-2xl font-bold text-foreground"> </h2> <ul class="space-y-4"></ul></section>`);
function WhatWeMeasure($$anchor, $$props) {
	$.push($$props, false);
	const $content = () => $.store_get(content$1, "$content", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	usePerformanceMeasure("WhatWeMeasure");
	const content$1 = useDictionaryDynamic(content, "what-we-measure");
	$.init();
	var section = root();
	var h2 = $.child(section);
	var text = $.child(h2, true);
	$.reset(h2);
	var ul = $.sibling(h2, 2);
	$.each(ul, 5, () => $content().metrics, (m) => m.metric, ($$anchor, m) => {
		var li = root_1();
		var span = $.child(li);
		var text_1 = $.child(span, true);
		$.reset(span);
		var span_1 = $.sibling(span, 2);
		var text_2 = $.child(span_1, true);
		$.reset(span_1);
		$.reset(li);
		$.template_effect(() => {
			$.set_text(text_1, $.get(m).metric);
			$.set_text(text_2, $.get(m).desc);
		});
		$.append($$anchor, li);
	});
	$.reset(ul);
	$.reset(section);
	$.template_effect(() => $.set_text(text, $content().title));
	$.append($$anchor, section);
	$.pop();
	$$cleanup();
}
export { WhatWeMeasure as default };
var de_default = {
	key: "what-we-measure",
	content: {
		"title": "Was wir messen",
		"metrics": [
			{
				"metric": "Auswirkungen auf die Bundle-Größe",
				"desc": "Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Download-Zeit in langsamen Netzwerken aus."
			},
			{
				"metric": "Rendering-Overhead",
				"desc": "Wie viel zusätzliche Zeit die Bibliothek dem Renderzyklus hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Context Provider einfügen, können unnötige Re-Renders im gesamten Komponentenbaum verursachen."
			},
			{
				"metric": "Hydratisierungskosten",
				"desc": "Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Wörterbücher erhöhen die HTML-Payload und verlangsamen die Hydratisierung – den Moment, in dem die Seite interaktiv wird."
			},
			{
				"metric": "Effektivität des Lazy Loading",
				"desc": "Ob das Aufteilen von Übersetzungen nach Route oder Namespace die anfängliche Last tatsächlich reduziert und welche Kompromisse dies mit sich bringt (Wasserfall-Anfragen, FOUC, Cache-Komplexität)."
			},
			{
				"metric": "Geschwindigkeit des Gebietschemawechsels",
				"desc": "Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann – einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderns von Komponenten und der Aktualisierung des DOM."
			}
		]
	}
};
export { de_default as default };
var en_default = {
	key: "what-we-measure",
	content: {
		"title": "What We Measure",
		"metrics": [
			{
				"metric": "Bundle size impact",
				"desc": "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks."
			},
			{
				"metric": "Rendering overhead",
				"desc": "How much extra time the library adds to the render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree."
			},
			{
				"metric": "Hydration cost",
				"desc": "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive."
			},
			{
				"metric": "Lazy loading effectiveness",
				"desc": "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity)."
			},
			{
				"metric": "Locale switch speed",
				"desc": "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM."
			}
		]
	}
};
export { en_default as default };
var es_default = {
	key: "what-we-measure",
	content: {
		"title": "Qué medimos",
		"metrics": [
			{
				"metric": "Impacto en el tamaño del paquete",
				"desc": "Los bytes JavaScript adicionales enviados a los usuarios cuando se incluyen la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas."
			},
			{
				"metric": "Sobrecarga de renderizado",
				"desc": "Cuánto tiempo extra agrega la biblioteca al ciclo de renderizado. Las bibliotecas que inyectan traductions a través de un único proveedor de contexto pueden causar re-renderizados innecesarios en todo el árbol de componentes."
			},
			{
				"metric": "Costo de hidratación",
				"desc": "Durante el SSR, los datos de traducción se serializan en HTML. Los diccionarios grandes aumentan la carga útil de HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva."
			},
			{
				"metric": "Efectividad de la carga diferida",
				"desc": "Si dividir las traducciones por ruta o espacio de nombres realmente reduce la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché)."
			},
			{
				"metric": "Velocidad de cambio de idioma",
				"desc": "Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluida la obtención de nuevas traducciones, el re-renderizado de componentes y la actualización del DOM."
			}
		]
	}
};
export { es_default as default };
var fr_default = {
	key: "what-we-measure",
	content: {
		"title": "Ce que nous mesurons",
		"metrics": [
			{
				"metric": "Impact sur la taille du bundle",
				"desc": "Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers de traduction sont inclus. Cela affecte directement le temps de téléchargement sur les réseaux lents."
			},
			{
				"metric": "Surcharge de rendu",
				"desc": "Combien de temps supplémentaire la bibliothèque ajoute au cycle de rendu. Les bibliothèques qui injectent des traductions via un seul fournisseur de contexte peuvent provoquer des re-rendus inutiles dans l'arborescence des composants."
			},
			{
				"metric": "Coût d'hydratation",
				"desc": "Pendant le SSR, les données de traduction sont sérialisées en HTML. Les dictionnaires volumineux augmentent la charge utile HTML et ralentissent l'hydratation — le moment où la page devient interactive."
			},
			{
				"metric": "Efficacité du chargement différé",
				"desc": "Si le fractionnement des traductions par itinéraire ou par espace de noms réduit réellement la charge initiale, et quels compromis il introduit (requêtes en cascade, FOUC, complexité du cache)."
			},
			{
				"metric": "Vitesse de changement de langue",
				"desc": "À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération de nouvelles traductions, le re-rendu des composants et la mise à jour du DOM."
			}
		]
	}
};
export { fr_default as default };
var it_default = {
	key: "what-we-measure",
	content: {
		"title": "Cosa misuriamo",
		"metrics": [
			{
				"metric": "Impatto sulla dimensione del bundle",
				"desc": "I byte JavaScript aggiuntivi inviati agli utenti quando sono incluse la libreria i18n e i relativi file di traduzione. Ciò influisce direttamente sul tempo di download su reti lente."
			},
			{
				"metric": "Sovraccarico di rendering",
				"desc": "Quanto tempo extra la libreria aggiunge al ciclo di rendering. Le librerie che iniettano traduzioni tramite un singolo provider di contesto possono causare re-rendering non necessari nell'albero dei componenti."
			},
			{
				"metric": "Costo di idratazione",
				"desc": "Durante l'SSR, i dati di traduzione vengono serializzati in HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione, il momento in que la pagina diventa interattiva."
			},
			{
				"metric": "Efficacia del caricamento pigro",
				"desc": "Se la suddivisione delle traduzioni per percorso o spazio dei nomi riduce effettivamente il carico iniziale e quali compromessi introduce (richieste a cascata, FOUC, complessità della cache)."
			},
			{
				"metric": "Velocità di cambio della lingua",
				"desc": "Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione, incluso il recupero di nuove traduzioni, il re-rendering dei componenti e l'aggiornamento del DOM."
			}
		]
	}
};
export { it_default as default };
var ja_default = {
	key: "what-we-measure",
	content: {
		"title": "測定項目",
		"metrics": [
			{
				"metric": "バンドルサイズへの影響",
				"desc": "i18n ライブラリとその翻訳ファイルが含まれている場合にユーザーに送信される追加の JavaScript バイト。これは、低速ネットワークでのダウンロード時間に直接影響します。"
			},
			{
				"metric": "レンダリングのオーバーヘッド",
				"desc": "ライブラリがレンダリングサイクルに追加する余分な時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不必要な再レンダリングを引き起こす可能性があります。"
			},
			{
				"metric": "ハイドレーションコスト",
				"desc": "SSR 中、翻訳データは HTML にシリアル化されます。大きな辞書は HTML ペイロードを増加させ、ハイドレーション（ページがインタラクティブになる瞬間）を遅らせます。"
			},
			{
				"metric": "遅延読み込みの有効性",
				"desc": "ルートまたは名前空間ごとに翻訳を分割することが実際に初期負荷を軽減するかどうか、およびどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）が導入されるか。"
			},
			{
				"metric": "ロケール切り替え速度",
				"desc": "実行時にアプリがある言語から別の言語にどれだけ速く切り替わることができるか。これには、新しい翻訳の取得、コンポーネントの再レンダリング、および DOM の更新が含まれます。"
			}
		]
	}
};
export { ja_default as default };
var ko_default = {
	key: "what-we-measure",
	content: {
		"title": "측정 항목",
		"metrics": [
			{
				"metric": "번들 크기 영향",
				"desc": "i18n 라이브러리 및 해당 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다."
			},
			{
				"metric": "렌더링 오버헤드",
				"desc": "라이브러리가 렌더링 주기에 추가하는 추가 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 주입하는 라이브러리는 구성 요소 트리 전체에서 불필요한 재렌더링을 유발할 수 있습니다."
			},
			{
				"metric": "하이드레이션 비용",
				"desc": "SSR 동안 번역 데이터는 HTML로 직렬화됩니다. 대용량 사전은 HTML 페이로드를 증가시키고 하이드레이션(페이지가 상호 작용하게 되는 순간)을 늦춥니다."
			},
			{
				"metric": "지연 로딩 효과",
				"desc": "경로 또는 네임스페이스별로 번역을 분할하는 것이 실제로 초기 로드를 줄이는지, 그리고 어떤 트레이드오프(폭포수 요청, FOUC, 캐시 복잡성)를 유발하는지 여부입니다."
			},
			{
				"metric": "로케일 전환 속도",
				"desc": "런타임에 앱이 한 언어에서 다른 언어로 얼마나 빨리 전환할 수 있는지(새 번역 가져오기, 구성 요소 재렌더링 및 DOM 업데이트 포함)입니다."
			}
		]
	}
};
export { ko_default as default };
var pt_default = {
	key: "what-we-measure",
	content: {
		"title": "O que medimos",
		"metrics": [
			{
				"metric": "Impacto no tamanho do bundle",
				"desc": "Os bytes JavaScript adicionais enviados aos usuários quando a biblioteca i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas."
			},
			{
				"metric": "Sobrecarga de renderização",
				"desc": "Quanto tempo extra a biblioteca adiciona ao ciclo de renderização. Bibliotecas que injetam traduções por meio de um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes."
			},
			{
				"metric": "Custo de hidratação",
				"desc": "Durante o SSR, os dados de tradução são serializados em HTML. Dicionários grandes aumentam a carga útil do HTML e retardam a hidratação — o momento em que a página se torna interativa."
			},
			{
				"metric": "Eficácia do carregamento lento",
				"desc": "Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais compensações introduz (solicitações em cascata, FOUC, complexidade de cache)."
			},
			{
				"metric": "Velocidade de mudança de localidade",
				"desc": "Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a re-renderização de componentes e a atualização do DOM."
			}
		]
	}
};
export { pt_default as default };
var ru_default = {
	key: "what-we-measure",
	content: {
		"title": "Что мы измеряем",
		"metrics": [
			{
				"metric": "Влияние на размер бандла",
				"desc": "Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях."
			},
			{
				"metric": "Издержки на рендеринг",
				"desc": "Сколько дополнительного времени библиотека добавляет к циклу рендеринга. Библиотеки, которые внедряют переводы через единый контекст-провайдер, могут вызывать ненужные повторные рендеринги во всем дереве компонентов."
			},
			{
				"metric": "Стоимость гидратации",
				"desc": "Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем HTML и замедляют гидратацию — момент, когда страница становится интерактивной."
			},
			{
				"metric": "Эффективность ленивой загрузки",
				"desc": "Действительно ли разделение переводов по маршрутам или пространствам имен снижает начальную нагрузку, и какие компромиссы оно вносит (каскадные запросы, FOUC, сложность кэширования)."
			},
			{
				"metric": "Скорость переключения локали",
				"desc": "Насколько быстро приложение может переключаться с одного языка на другой во время выполнения, включая получение новых переводов, повторный рендеринг компонентов и обновление DOM."
			}
		]
	}
};
export { ru_default as default };
var zh_default = {
	key: "what-we-measure",
	content: {
		"title": "我们的衡量标准",
		"metrics": [
			{
				"metric": "包大小影响",
				"desc": "包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络上的下载时间。"
			},
			{
				"metric": "渲染开销",
				"desc": "库为渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树中不必要的重新渲染。"
			},
			{
				"metric": "注水成本",
				"desc": "在 SSR 期间，翻译数据被序列化为 HTML。大型词典会增加 HTML 负载并减慢注水速度——即页面变得可交互的时刻。"
			},
			{
				"metric": "延迟加载有效性",
				"desc": "按路由或命名空间拆分翻译是否确实减少了初始加载，以及它引入了哪些权衡（瀑布请求、FOUC、缓存复杂性）。"
			},
			{
				"metric": "语言切换速度",
				"desc": "应用程序在运行时从一种语言切换到另一种语言的速度——包括获取新翻译、重新渲染组件和更新 DOM。"
			}
		]
	}
};
export { zh_default as default };
