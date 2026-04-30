import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
import { getContext } from "svelte";
import { derived, writable } from "svelte/store";
var content = {
	"de": () => import("./de-DA-ImZpG.js").then((m) => m.default),
	"en": () => import("./en-TI9Z_UJp.js").then((m) => m.default),
	"es": () => import("./es-DCxVju49.js").then((m) => m.default),
	"fr": () => import("./fr-BUpEWzki.js").then((m) => m.default),
	"it": () => import("./it-CYhB2shw.js").then((m) => m.default),
	"ja": () => import("./ja-JGmA-mpt.js").then((m) => m.default),
	"ko": () => import("./ko-dQ0ou-5l.js").then((m) => m.default),
	"pt": () => import("./pt-B0hsBMb0.js").then((m) => m.default),
	"ru": () => import("./ru-CJLW1QVO.js").then((m) => m.default),
	"zh": () => import("./zh-CvN39DDp.js").then((m) => m.default)
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
var root = $.from_html(`<div class="grid gap-8 md:grid-cols-2"><div class="rounded-lg border border-border bg-card p-6"><h2 class="mb-3 text-xl font-semibold text-foreground"> </h2> <p class="text-sm text-muted-foreground"> </p></div> <div class="rounded-lg border border-border bg-card p-6"><h2 class="mb-3 text-xl font-semibold text-foreground"> </h2> <p class="text-sm text-muted-foreground"> </p></div></div>`);
function AboutGrid($$anchor, $$props) {
	$.push($$props, false);
	const $content = () => $.store_get(content$1, "$content", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	const content$1 = useDictionaryDynamic(content, "about-grid");
	$.init();
	var div = root();
	var div_1 = $.child(div);
	var h2 = $.child(div_1);
	var text = $.child(h2, true);
	$.reset(h2);
	var p = $.sibling(h2, 2);
	var text_1 = $.child(p, true);
	$.reset(p);
	$.reset(div_1);
	var div_2 = $.sibling(div_1, 2);
	var h2_1 = $.child(div_2);
	var text_2 = $.child(h2_1, true);
	$.reset(h2_1);
	var p_1 = $.sibling(h2_1, 2);
	var text_3 = $.child(p_1, true);
	$.reset(p_1);
	$.reset(div_2);
	$.reset(div);
	$.template_effect(() => {
		$.set_text(text, $content().why.title);
		$.set_text(text_1, $content().why.description);
		$.set_text(text_2, $content().methodology.title);
		$.set_text(text_3, $content().methodology.description);
	});
	$.append($$anchor, div);
	$.pop();
	$$cleanup();
}
export { AboutGrid as default };
var de_default = {
	key: "about-grid",
	content: {
		"why": {
			"title": "Warum dies existiert",
			"description": "Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Folgen. Die meisten Vergleiche konzentrieren sich auf die Ergonomie der API, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt es sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading tatsächlich oder verschiebt es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit echten Daten."
		},
		"methodology": {
			"title": "Methodik",
			"description": "Die gleiche 10-seitige App wird einmal pro Bibliothek erstellt. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden Performance-Profiling, um die Renderzeiten während des Gebietschemawechsels zu erfassen. Alle Tests werden in CI auf konsistenter Hardware ausgeführt, um reproduzierbare Ergebnisse zu gewährleisten."
		}
	}
};
export { de_default as default };
var en_default = {
	key: "about-grid",
	content: {
		"why": {
			"title": "Why This Exists",
			"description": "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data."
		},
		"methodology": {
			"title": "Methodology",
			"description": "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use performance profiling to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
		}
	}
};
export { en_default as default };
var es_default = {
	key: "about-grid",
	content: {
		"why": {
			"title": "Por qué existe esto",
			"description": "Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el costo de rendimiento: ¿cuánto peso agrega la biblioteca al paquete? ¿Cómo afecta el renderizado cuando se cargan miles de claves de traducción? ¿La carga diferida realmente ayuda o simplemente traslada el costo? Este benchmark responde a esas preguntas con datos reales."
		},
		"methodology": {
			"title": "Metodología",
			"description": "La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el paquete de producción (a través de rollup-plugin-visualizer), realizamos auditorías Lighthouse para las métricas de carga y utilizamos perfiles de rendimiento para capturar los tiempos de renderizado durante los cambios de configuración regional. Todas las pruebas se ejecutan en CI en hardware consistente para garantizar resultados reproducibles."
		}
	}
};
export { es_default as default };
var fr_default = {
	key: "about-grid",
	content: {
		"why": {
			"title": "Pourquoi cela existe",
			"description": "Le choix d'une bibliothèque i18n est une décision architecturale aux conséquences à long terme. La plupart des comparaisons se concentrent sur l'ergonomie de l'API, mais peu mesurent le coût en performances : quel poids la bibliothèque ajoute-t-elle au bundle ? Comment affecte-t-elle le rendu lorsque des milliers de clés de traduction sont chargées ? Le chargement différé aide-t-il réellement ou ne fait-il que déplacer le coût ? Ce benchmark répond à ces questions avec des données réelles."
		},
		"methodology": {
			"title": "Méthodologie",
			"description": "La même application de 10 pages est construite une fois par bibliothèque. Nous mesurons le bundle de production (via rollup-plugin-visualizer), effectuons des audits Lighthouse pour les mesures de chargement et utilisons le profilage des performances pour capturer les temps de rendu lors des changements de langue. Tous les tests sont exécutés en CI sur un matériel cohérent pour garantir des résultats reproductibles."
		}
	}
};
export { fr_default as default };
var it_default = {
	key: "about-grid",
	content: {
		"why": {
			"title": "Perché esiste questo",
			"description": "La scelta di una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia dell'API, ma pochi misurano il costo in termini di prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali."
		},
		"methodology": {
			"title": "Metodologia",
			"description": "La stessa app di 10 pagine viene creata una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo il profiling delle prestazioni per acquisire i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili."
		}
	}
};
export { it_default as default };
var ja_default = {
	key: "about-grid",
	content: {
		"why": {
			"title": "なぜこれが存在するのか",
			"description": "i18n ライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較は API のエルゴノミクスに焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリはバンドルにどれだけの重みを加えるのか？何千もの翻訳キーがロードされたとき、レンダリングにどのように影響するのか？遅延読み込みは本当に役立つのか、それともコストをシフトさせるだけなのか？このベンチマークは、実際のデータでこれらの質問に答えます。"
		},
		"methodology": {
			"title": "方法論",
			"description": "同じ 10 ページのアプリが、ライブラリごとに 1 回ビルドされます。プロダクションバンドルを測定し（rollup-plugin-visualizer 経由）、ロードメトリクスの Lighthouse 監査を実行し、パフォーマンスプロファイリングを使用してロケール切り替え中のレンダリング時間をキャプチャします。再現可能な結果を確実にするために、すべてのテストは一貫したハードウェア上の CI で実行されます。"
		}
	}
};
export { ja_default as default };
var ko_default = {
	key: "about-grid",
	content: {
		"why": {
			"title": "이것이 존재하는 이유",
			"description": "i18n 라이브러리를 선택하는 것은 장기적인 결과를 초래하는 아키텍처 결정입니다. 대부분의 비교는 API 인체 공학에 중점을 두지만 성능 비용을 측정하는 경우는 거의 없습니다. 라이브러리가 번들에 얼마나 많은 가중치를 추가합니까? 수천 개의 번역 키가 로드될 때 렌더링에 어떤 영향을 줍니까? 지연 로딩이 실제로 도움이 됩니까, 아니면 단지 비용을 전가할 뿐입니까? 이 벤치마크는 실제 데이터로 이러한 질문에 답합니다."
		},
		"methodology": {
			"title": "방법론",
			"description": "동일한 10페이지 앱이 라이브러리당 한 번씩 빌드됩니다. 프로덕션 번들을 측정하고(rollup-plugin-visualizer를 통해), 로딩 메트릭에 대한 Lighthouse 감사를 실행하고, 성능 프로파일링을 사용하여 로케일 전환 중 렌더링 시간을 캡처합니다. 재현 가능한 결과를 보장하기 위해 모든 테스트는 일관된 하드웨어의 CI에서 실행됩니다."
		}
	}
};
export { ko_default as default };
var pt_default = {
	key: "about-grid",
	content: {
		"why": {
			"title": "Por que isso existe",
			"description": "Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências a longo prazo. A maioria das comparações se concentra na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lento realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais."
		},
		"methodology": {
			"title": "Metodologia",
			"description": "O mesmo aplicativo de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), executamos auditorias do Lighthouse para métricas de carregamento e usamos o perfil de desempenho para capturar os tempos de renderização durante as mudanças de localidade. Todos os testes são executados em CI em hardware consistente para garantir resultados reproduzibles."
		}
	}
};
export { pt_default as default };
var ru_default = {
	key: "about-grid",
	content: {
		"why": {
			"title": "Почему это существует",
			"description": "Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений сосредоточено на эргономике API, но немногие измеряют стоимость производительности: какой вес библиотека добавляет к бандлу? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Действительно ли помогает ленивая загрузка или она просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных."
		},
		"methodology": {
			"title": "Методология",
			"description": "Одно и то же 10-страничное приложение создается один раз для каждой библиотеки. Мы измеряем продакшн-бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем профилирование производительности для фиксации времени рендеринга при переключении локалей. Все тесты запускаются в CI на одинаковом оборудовании для обеспечения воспроизводимости результатов."
		}
	}
};
export { ru_default as default };
var zh_default = {
	key: "about-grid",
	content: {
		"why": {
			"title": "为什么存在这个项目",
			"description": "选择 i18n 库是一个具有长期影响的架构决策。大多数比较都集中在 API 人机工程学上，但很少有比较衡量性能成本：该库为捆绑包增加了多少重量？当加载数千个翻译键时，它如何影响渲染？延迟加载真的有帮助还是只是转嫁了成本？本基准测试用真实数据回答了这些问题。"
		},
		"methodology": {
			"title": "方法论",
			"description": "同一个 10 页的应用程序每个库构建一次。我们测量生产包（通过 rollup-plugin-visualizer），运行 Lighthouse 审核以获取加载指标，并使用性能分析来捕捉区域设置切换期间的渲染时间。所有测试都在一致的硬件上的 CI 中运行，以确保结果可重复。"
		}
	}
};
export { zh_default as default };
