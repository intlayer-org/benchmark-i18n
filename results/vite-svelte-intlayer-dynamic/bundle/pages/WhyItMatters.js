import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
import { getContext, onMount } from "svelte";
import { derived, writable } from "svelte/store";
var content = {
	"de": () => import("./de-Cznx4DrA.js").then((m) => m.default),
	"en": () => import("./en-BQJQjLCn.js").then((m) => m.default),
	"es": () => import("./es-CC3Rfmge.js").then((m) => m.default),
	"fr": () => import("./fr-Bo6X34XI.js").then((m) => m.default),
	"it": () => import("./it-ChEqxygh.js").then((m) => m.default),
	"ja": () => import("./ja-mk3pYv0B.js").then((m) => m.default),
	"ko": () => import("./ko-B0EQzrU6.js").then((m) => m.default),
	"pt": () => import("./pt-f-uEzGkn.js").then((m) => m.default),
	"ru": () => import("./ru-B8Iy7HH4.js").then((m) => m.default),
	"zh": () => import("./zh-oe-3KlVn.js").then((m) => m.default)
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
var root = $.from_html(`<section class="mb-16"><h2 class="mb-6 text-2xl font-bold text-foreground"> </h2> <div class="grid gap-6 md:grid-cols-3"><div class="rounded-lg border border-border bg-card p-6"><h3 class="mb-2 text-lg font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p></div> <div class="rounded-lg border border-border bg-card p-6"><h3 class="mb-2 text-lg font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p></div> <div class="rounded-lg border border-border bg-card p-6"><h3 class="mb-2 text-lg font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p></div></div></section>`);
function WhyItMatters($$anchor, $$props) {
	$.push($$props, false);
	const $content = () => $.store_get(content$1, "$content", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	usePerformanceMeasure("WhyItMatters");
	const content$1 = useDictionaryDynamic(content, "why-it-matters");
	$.init();
	var section = root();
	var h2 = $.child(section);
	var text = $.child(h2, true);
	$.reset(h2);
	var div = $.sibling(h2, 2);
	var div_1 = $.child(div);
	var h3 = $.child(div_1);
	var text_1 = $.child(h3, true);
	$.reset(h3);
	var p = $.sibling(h3, 2);
	var text_2 = $.child(p, true);
	$.reset(p);
	$.reset(div_1);
	var div_2 = $.sibling(div_1, 2);
	var h3_1 = $.child(div_2);
	var text_3 = $.child(h3_1, true);
	$.reset(h3_1);
	var p_1 = $.sibling(h3_1, 2);
	var text_4 = $.child(p_1, true);
	$.reset(p_1);
	$.reset(div_2);
	var div_3 = $.sibling(div_2, 2);
	var h3_2 = $.child(div_3);
	var text_5 = $.child(h3_2, true);
	$.reset(h3_2);
	var p_2 = $.sibling(h3_2, 2);
	var text_6 = $.child(p_2, true);
	$.reset(p_2);
	$.reset(div_3);
	$.reset(div);
	$.reset(section);
	$.template_effect(() => {
		$.set_text(text, $content().title);
		$.set_text(text_1, $content().bundleSize.title);
		$.set_text(text_2, $content().bundleSize.description);
		$.set_text(text_3, $content().renderingHydration.title);
		$.set_text(text_4, $content().renderingHydration.description);
		$.set_text(text_5, $content().dynamicLoading.title);
		$.set_text(text_6, $content().dynamicLoading.description);
	});
	$.append($$anchor, section);
	$.pop();
	$$cleanup();
}
export { WhyItMatters as default };
var de_default = {
	key: "why-it-matters",
	content: {
		"title": "Warum diese Metriken wichtig sind",
		"bundleSize": {
			"title": "Bundle-Größe",
			"description": "Das Bundle sind die Daten, die an jeden Benutzer auf der ganzen Welt gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten – insbesondere bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren drastisch in ihrem Gewicht: von einigen Kilobytes bis hin zu Zehntausenden von Kilobytes an Laufzeitcode, plus die Übersetzungsdateien selbst."
		},
		"renderingHydration": {
			"title": "Rendering & Hydratation",
			"description": "Das Verbinden eines großen JSON-Wörterbuchs mit jeder Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydratation fügt das Parsen und Anhängen massiver Übersetzungsobjekte Latenz hinzu, bevor die Seite interaktiv wird – was sich direkt auf die Time to Interactive (TTI) auswirkt."
		},
		"dynamicLoading": {
			"title": "Dynamisches Laden",
			"description": "Das Laden aller Übersetzungen im Voraus überlastet die anfängliche Nutzlast. Dynamisches (Lazy) Loading teilt Übersetzungen nach Route oder Namensraum auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Wasserfall-Anfragen, Aufblitzen nicht übersetzter Inhalte und Cache-Komplexität. Die Messung beider Strategien ist unerlässlich."
		}
	}
};
export { de_default as default };
var en_default = {
	key: "why-it-matters",
	content: {
		"title": "Why These Metrics Matter",
		"bundleSize": {
			"title": "Bundle Size",
			"description": "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves."
		},
		"renderingHydration": {
			"title": "Rendering & Hydration",
			"description": "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI)."
		},
		"dynamicLoading": {
			"title": "Dynamic Loading",
			"description": "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
		}
	}
};
export { en_default as default };
var es_default = {
	key: "why-it-matters",
	content: {
		"title": "Por qué importan estas métricas",
		"bundleSize": {
			"title": "Tamaño del bundle",
			"description": "El bundle son los datos que se envían a cada usuario en todo el mundo. Un bundle más grande significa tiempos de descarga más largos, especialmente en las conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código de tiempo de ejecución, además de los propios archivos de traducción."
		},
		"renderingHydration": {
			"title": "Renderizado e Hidratación",
			"description": "Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede activar re-renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la vinculación de objetos de traducción masivos añaden latencia antes de que la página se vuelva interactiva, lo que afecta directamente al tiempo de interacción (TTI)."
		},
		"dynamicLoading": {
			"title": "Carga dinámica",
			"description": "Cargar todas las traducciones por adelantado sobrecarga la carga útil inicial. La carga dinámica (perezosa) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, la carga perezosa introduce sus propias compensaciones: solicitudes en cascada, destellos de contenido no traducido y complejidad de almacenamiento en caché. Medir ambas estrategias es esencial."
		}
	}
};
export { es_default as default };
var fr_default = {
	key: "why-it-matters",
	content: {
		"title": "Pourquoi ces mesures sont importantes",
		"bundleSize": {
			"title": "Taille du Bundle",
			"description": "Le bundle est l'ensemble des données envoyées à chaque utilisateur à travers le monde. Un bundle plus volumineux signifie des temps de téléchargement plus longs — particulièrement sur les connexions 3G lentes courantes dans de nombreuses régions. Les bibliothèques i18n varient considérablement dans leur poids : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, plus les fichiers de traduction eux-mêmes."
		},
		"renderingHydration": {
			"title": "Rendu et Hydratation",
			"description": "La connexion d'un dictionnaire JSON volumineux à chaque composant crée une dépendance cachée : tout changement dans le contexte de traduction peut déclencher des re-rendus sur l'ensemble de l'arborescence. Lors de l'hydratation SSR, l'analyse et l'attachement d'objets de traduction massifs ajoutent de la latence avant que la page ne devienne interactive — impactant directement le Time to Interactive (TTI)."
		},
		"dynamicLoading": {
			"title": "Chargement Dynamique",
			"description": "Le chargement de toutes les traductions à l'avance surcharge la charge utile initiale. Le chargement dynamique (lazy loading) répartit les traductions par itinéraire ou par espace de noms, n'envoyant que ce dont la page actuelle a besoin. Cependant, le chargement différé introduit ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité de la mise en cache. Il est essentiel de mesurer les deux stratégies."
		}
	}
};
export { fr_default as default };
var it_default = {
	key: "why-it-matters",
	content: {
		"title": "Perché queste metriche sono importanti",
		"bundleSize": {
			"title": "Dimensioni del bundle",
			"description": "Il bundle è l'insieme dei dati inviati a ogni utente in tutto il mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi."
		},
		"renderingHydration": {
			"title": "Rendering e idratazione",
			"description": "Il collegamento di un dizionario JSON di grandi dimensioni a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può innescare nuovi rendering nell'intero albero. Durante l'idratazione SSR, l'analisi e il collegamento di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, con un impatto diretto sul Time to Interactive (TTI)."
		},
		"dynamicLoading": {
			"title": "Caricamento dinamico",
			"description": "Il caricamento anticipato di tutte le traduzioni sovraccarica il payload iniziale. Il caricamento dinamico (lazy) suddivide le traduzioni per percorso o spazio dei nomi, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il caricamento pigro introduce i suoi compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della memorizzazione nella cache. Misurare entrambe le strategie è essenziale."
		}
	}
};
export { it_default as default };
var ja_default = {
	key: "why-it-matters",
	content: {
		"title": "これらの指標が重要な理由",
		"bundleSize": {
			"title": "バンドルサイズ",
			"description": "バンドルは、世界中のすべてのユーザーに送信されるデータです。バンドルが大きくなると、特に多くの地域で一般的な低速な3G接続では、ダウンロード時間が長くなります。i18nライブラリはその重量が劇的に異なり、数キロバイトから数十キロバイトのランタイムコードに加えて、翻訳ファイル自体が含まれます。"
		},
		"renderingHydration": {
			"title": "レンダリングとハイドレーション",
			"description": "大きなJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が作成されます。翻訳コンテキストの変更は、ツリー全体で再レンダリングをトリガーする可能性があります。SSRハイドレーション中、大規模な翻訳オブジェクトの解析とアタッチは、ページがインタラクティブになる前にレイテンシを追加し、Time to Interactive（TTI）に直接影響します。"
		},
		"dynamicLoading": {
			"title": "動的ロード",
			"description": "すべての翻訳を事前にロードすると、初期ペイロードが過負荷になります。動的（遅延）ロードは、ルートや名前空間ごとに翻訳を分割し、現在のページが必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、翻訳されていないコンテンツのフラッシュ、キャッシュの複雑さなど、独自のトレードオフが伴います。両方の戦略を測定することが不可欠です。"
		}
	}
};
export { ja_default as default };
var ko_default = {
	key: "why-it-matters",
	content: {
		"title": "이러한 지표가 중요한 이유",
		"bundleSize": {
			"title": "번들 크기",
			"description": "번들은 전 세계 모든 사용자에게 전송되는 데이터입니다. 번들이 클수록 다운로드 시간이 길어집니다. 특히 많은 지역에서 흔히 발생하는 느린 3G 연결에서는 더욱 그렇습니다. i18n 라이브러리는 런타임 코드 몇 킬로바이트에서 수십 킬로바이트에 이르기까지 무게가 매우 다양하며 번역 파일 자체도 포함됩니다."
		},
		"renderingHydration": {
			"title": "렌더링 및 하이드레이션",
			"description": "대규모 JSON 사전을 모든 구성 요소에 연결하면 숨겨진 종속성이 생성됩니다. 번역 컨텍스트가 변경되면 전체 트리에서 재렌더링이 발생할 수 있습니다. SSR 하이드레이션 중에 대규모 번역 개체를 구문 분석하고 첨부하면 페이지가 대화형이 되기 전에 대기 시간이 추가되어 TTI(Time to Interactive)에 직접적인 영향을 미칩니다."
		},
		"dynamicLoading": {
			"title": "동적 로딩",
			"description": "모든 번역을 미리 로드하면 초기 페이로드가 과부하됩니다. 동적(지연) 로딩은 경로 또는 네임스페이스별로 번역을 분할하여 현재 페이지에 필요한 내용만 전송합니다. 그러나 지연 로딩은 폭포수 요청, 번역되지 않은 콘텐츠의 플래시, 캐시 복잡성과 같은 트레이드오프를 수반합니다. 두 전략을 모두 측정하는 것이 필수적입니다."
		}
	}
};
export { ko_default as default };
var pt_default = {
	key: "why-it-matters",
	content: {
		"title": "Por que Essas Métricas Importam",
		"bundleSize": {
			"title": "Tamanho do bundle",
			"description": "O bundle são os dados enviados a cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código de tempo de execução, além dos próprios arquivos de tradução."
		},
		"renderingHydration": {
			"title": "Renderização e Hidratação",
			"description": "Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode disparar novas renderizações em toda a árvore. Durante a hidratação do SSR, a análise e a anexação de objetos de tradução massivos adicionam latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI)."
		},
		"dynamicLoading": {
			"title": "Carregamento Dinâmico",
			"description": "Carregar todas as traduções antecipadamente sobrecarrega a carga útil inicial. O carregamento dinâmico (lento) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento lento introduz suas próprias compensações: solicitações em cascata, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial."
		}
	}
};
export { pt_default as default };
var ru_default = {
	key: "why-it-matters",
	content: {
		"title": "Почему эти показатели важны",
		"bundleSize": {
			"title": "Размер бандла",
			"description": "Бандл — это данные, отправляемые каждому пользователю по всему миру. Больший размер бандла означает более длительное время загрузки, особенно при медленном 3G-соединении, распространенном во многих регионах. Библиотеки i18n сильно различаются по своему весу: от нескольких килобайт до десятков килобайт исполняемого кода, плюс сами файлы переводов."
		},
		"renderingHydration": {
			"title": "Рендеринг и гидратация",
			"description": "Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг всего дерева. Во время гидратации SSR парсинг и присоединение массивных объектов перевода увеличивает задержку до того, как страница станет интерактивной, что напрямую влияет на время до интерактивности (TTI)."
		},
		"dynamicLoading": {
			"title": "Динамическая загрузка",
			"description": "Предварительная загрузка всех переводов перегружает начальный объем данных. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно текущей странице. Однако ленивая загрузка влечет за собой свои компромиссы: каскадные запросы, вспышки непереведенного контента и сложность кэширования. Важно измерять обе стратегии."
		}
	}
};
export { ru_default as default };
var zh_default = {
	key: "why-it-matters",
	content: {
		"title": "为什么这些指标很重要",
		"bundleSize": {
			"title": "捆绑包大小",
			"description": "捆绑包是发送给全球每个用户的数据。更大的捆绑包意味着更长的下载时间——尤其是在许多地区常见的慢速 3G 连接上。i18n 库的重量差异巨大：从几 KB 到几十 KB 的运行时代码，外加翻译文件本身。"
		},
		"renderingHydration": {
			"title": "渲染和注水（Hydration）",
			"description": "将大型 JSON 词典连接到每个组件会创建一个隐藏依赖项：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加海量翻译对象会增加页面变得可交互之前的延迟——直接影响可交互时间 (TTI)。"
		},
		"dynamicLoading": {
			"title": "动态加载",
			"description": "预先加载所有翻译会使初始负载过重。动态（延迟）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。但是，延迟加载也有其权衡：瀑布请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。"
		}
	}
};
export { zh_default as default };
