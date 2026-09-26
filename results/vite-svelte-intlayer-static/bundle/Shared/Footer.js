import "svelte/internal/disclose-version";
import * as $ from "svelte/internal/client";
import { getContext } from "svelte";
import { derived, writable } from "svelte/store";
import "svelte/internal/flags/legacy";
var footer_default = {
	key: "footer",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"description": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
				"resources": "Resources",
				"contact": "Contact",
				"github": "GitHub",
				"methodology": "Methodology",
				"contributing": "Contributing",
				"footerText": "i18n Benchmark — Open-source project. Built with Svelte, Vite, and a client-side router.",
				"appName": "i18n Benchmark",
				"contactEmail": "contact@intlayer.org"
			},
			"fr": {
				"description": "Une application de test open-source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.",
				"resources": "Ressources",
				"contact": "Contact",
				"github": "GitHub",
				"methodology": "Méthodologie",
				"contributing": "Contribuer",
				"footerText": "Benchmark i18n — Projet open-source. Construit avec Svelte, Vite et un routeur côté client.",
				"appName": "Benchmark i18n",
				"contactEmail": "contact@intlayer.org"
			},
			"es": {
				"description": "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el tiempo de carga y la reactividad de la aplicación.",
				"resources": "Recursos",
				"contact": "Contacto",
				"github": "GitHub",
				"methodology": "Metodología",
				"contributing": "Contribuir",
				"footerText": "i18n Benchmark — Proyecto de código abierto. Construido con Svelte, Vite y un enrutador del lado del cliente.",
				"appName": "i18n Benchmark",
				"contactEmail": "contact@intlayer.org"
			},
			"de": {
				"description": "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladezeit und die App-Reaktivität.",
				"resources": "Ressourcen",
				"contact": "Kontakt",
				"github": "GitHub",
				"methodology": "Methodik",
				"contributing": "Beitragen",
				"footerText": "i18n Benchmark — Open-Source-Projekt. Erstellt mit Svelte, Vite und einem clientseitigen Router.",
				"appName": "i18n Benchmark",
				"contactEmail": "contact@intlayer.org"
			},
			"it": {
				"description": "Un'applicazione di test open source per misurare l'impatto nel mondo reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sui tempi di caricamento e sulla reattività dell'app.",
				"resources": "Risorse",
				"contact": "Contatti",
				"github": "GitHub",
				"methodology": "Metodologia",
				"contributing": "Contribuire",
				"footerText": "i18n Benchmark — Progetto open source. Costruito con Svelte, Vite e un router lato client.",
				"appName": "i18n Benchmark",
				"contactEmail": "contact@intlayer.org"
			},
			"pt": {
				"description": "Um aplicativo de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade do aplicativo.",
				"resources": "Recursos",
				"contact": "Contato",
				"github": "GitHub",
				"methodology": "Metodologia",
				"contributing": "Contribuir",
				"footerText": "i18n Benchmark — Projeto de código aberto. Construído com Svelte, Vite e um roteador do lado do cliente.",
				"appName": "i18n Benchmark",
				"contactEmail": "contact@intlayer.org"
			},
			"zh": {
				"description": "一个开源测试应用程序，用于衡量国际化库对捆绑包大小、加载时间和应用程序反应性的实际影响。",
				"resources": "资源",
				"contact": "联系我们",
				"github": "GitHub",
				"methodology": "方法论",
				"contributing": "贡献",
				"footerText": "i18n 基准测试 — 开源项目。使用 Svelte、Vite 和客户端路由器构建。",
				"appName": "i18n 基准测试",
				"contactEmail": "contact@intlayer.org"
			},
			"ja": {
				"description": "バンドルサイズ、ロード時間、およびアプリの反応性に対する国際化ライブラリの実世界の影響を測定するためのオープンソーステストアプリケーション。",
				"resources": "リソース",
				"contact": "お問い合わせ",
				"github": "GitHub",
				"methodology": "方法論",
				"contributing": "貢献",
				"footerText": "i18n ベンチマーク — オープンソースプロジェクト。Svelte、Vite、およびクライアントサイドルーティングで構築されています。",
				"appName": "i18n ベンチマーク",
				"contactEmail": "contact@intlayer.org"
			},
			"ko": {
				"description": "번들 크기, 로딩 시간 및 앱 반응성에 대한 국제화 라이브러리의 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.",
				"resources": "리소스",
				"contact": "연락처",
				"github": "GitHub",
				"methodology": "방법론",
				"contributing": "기여하기",
				"footerText": "i18n 벤치마크 — 오픈 소스 프로젝트입니다. Svelte, Vite 및 클라이언트 측 라우터로 구축되었습니다.",
				"appName": "i18n 벤치마크",
				"contactEmail": "contact@intlayer.org"
			},
			"ru": {
				"description": "Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.",
				"resources": "Ресурсы",
				"contact": "Контакты",
				"github": "GitHub",
				"methodology": "Методология",
				"contributing": "Участие в разработке",
				"footerText": "i18n Бенчмарк — проект с открытым исходным кодом. Построен на Svelte, Vite и клиентском роутере.",
				"appName": "i18n Бенчмарк",
				"contactEmail": "contact@intlayer.org"
			}
		}
	}
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
var INTLAYER_CONTEXT_KEY = Symbol("intlayer");
var getIntlayerContext = () => {
	return getContext(INTLAYER_CONTEXT_KEY);
};
var prototypeCache = /* @__PURE__ */ new Map();
var createIntlayerNodePrototype = (basePrototype, valuePrototype) => Object.create(new Proxy(basePrototype, {
	get: (target, property, receiver) => {
		if (typeof property !== "string" || property === "constructor" || property in target) return Reflect.get(target, property, receiver);
		const { value } = receiver;
		if (value === null || value === void 0) return void 0;
		const member = Object(value)[property];
		return typeof member === "function" ? member.bind(value) : member;
	},
	has: (target, property) => property in target || typeof property === "string" && property !== "constructor" && valuePrototype !== null && property in valuePrototype
}), {
	toString: { value() {
		return String(this.value ?? "");
	} },
	valueOf: { value() {
		return this.value;
	} },
	[Symbol.toPrimitive]: { value() {
		return this.value ?? "";
	} }
});
var getIntlayerNodePrototype = (value, basePrototype = Object.prototype) => {
	const valueType = typeof value;
	const valueKey = value === null || value === void 0 ? null : valueType === "object" || valueType === "function" ? Object.getPrototypeOf(value) : valueType;
	let prototypes = prototypeCache.get(basePrototype);
	if (!prototypes) {
		prototypes = /* @__PURE__ */ new Map();
		prototypeCache.set(basePrototype, prototypes);
	}
	let prototype = prototypes.get(valueKey);
	if (!prototype) {
		prototype = createIntlayerNodePrototype(basePrototype, valueKey === null ? null : Object.getPrototypeOf(Object(value)));
		prototypes.set(valueKey, prototype);
	}
	return prototype;
};
var TRANSLATION = "translation";
var OBJECT = "object";
var ARRAY = "array";
var getChildProps = (props, children, keyPathSegment) => ({
	...props,
	children,
	keyPath: [...props.keyPath, keyPathSegment]
});
var deepTransformNode = (node, props) => {
	for (const plugin of props.plugins ?? []) if (plugin.canHandle(node)) return plugin.transform(node, props, deepTransformNode);
	if (node === null || typeof node !== "object") return node;
	if (node.$$typeof !== void 0 || node.__v_isVNode !== void 0 || node._isVNode !== void 0 || node.isJSX !== void 0) return node;
	if (Array.isArray(node)) return node.map((child, index) => deepTransformNode(child, getChildProps(props, child, {
		type: ARRAY,
		key: index
	})));
	const result = {};
	for (const key in node) {
		const keyPathSegment = {
			type: OBJECT,
			key
		};
		if (props.eager) {
			result[key] = deepTransformNode(node[key], getChildProps(props, node[key], keyPathSegment));
			continue;
		}
		Object.defineProperty(result, key, {
			enumerable: true,
			configurable: true,
			get: function() {
				const transformed = deepTransformNode(node[key], getChildProps(props, node[key], keyPathSegment));
				Object.defineProperty(this, key, {
					value: transformed,
					enumerable: true,
					configurable: true
				});
				return transformed;
			}
		});
	}
	return result;
};
var pluginsIdentities = /* @__PURE__ */ new WeakMap();
var nextPluginsIdentity = 0;
var getPluginsCacheKey = (plugins) => {
	if (!plugins) return "base";
	const existingIdentity = pluginsIdentities.get(plugins);
	if (existingIdentity) return existingIdentity;
	nextPluginsIdentity += 1;
	const identity = `p${nextPluginsIdentity}`;
	pluginsIdentities.set(plugins, identity);
	return identity;
};
var MAX_ENTRIES_PER_DICTIONARY = 256;
var transformCache = /* @__PURE__ */ new WeakMap();
var isMemoizableDictionary = (value) => value !== null && typeof value === "object";
var getDictionaryTransformCacheKey = (locale, selectorCacheKey, plugins) => `${locale}_${selectorCacheKey}_${getPluginsCacheKey(plugins)}`;
var readTransformCache = (dictionary, cacheKey) => {
	if (!isMemoizableDictionary(dictionary)) return { hit: false };
	const entries = transformCache.get(dictionary);
	if (!entries?.has(cacheKey)) return { hit: false };
	return {
		hit: true,
		content: entries.get(cacheKey)
	};
};
var writeTransformCache = (dictionary, cacheKey, content) => {
	if (!isMemoizableDictionary(dictionary)) return content;
	let entries = transformCache.get(dictionary);
	if (!entries) {
		entries = /* @__PURE__ */ new Map();
		transformCache.set(dictionary, entries);
	}
	if (entries.size >= MAX_ENTRIES_PER_DICTIONARY) entries.clear();
	entries.set(cacheKey, content);
	return content;
};
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	pluralPlugin(locale ?? internationalization.defaultLocale),
	conditionPlugin,
	insertionPlugin$1,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin,
	selectPlugin
].filter((plugin) => plugin !== fallbackPlugin);
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
var transformsInProgress = /* @__PURE__ */ new WeakSet();
var getDictionary$1 = (dictionary, localeOrSelector, plugins) => {
	const { locale, selector } = {
		locale: localeOrSelector,
		selector: void 0
	};
	const cacheKey = getDictionaryTransformCacheKey(locale ?? internationalization.defaultLocale, "", plugins);
	const cached = readTransformCache(dictionary, cacheKey);
	if (cached.hit) return cached.content;
	const appliedPlugins = plugins ?? getBasePlugins(locale);
	const resolved = dictionary;
	const transformDictionary = (resolvedDictionary) => {
		const props = {
			dictionaryKey: resolvedDictionary.key,
			dictionaryPath: resolvedDictionary.filePath,
			keyPath: [],
			plugins: appliedPlugins,
			nestedDictionaries: resolvedDictionary.nestedDictionaries,
			eager: !transformsInProgress.has(resolvedDictionary)
		};
		transformsInProgress.add(resolvedDictionary);
		try {
			return getContent(resolvedDictionary.content, props, appliedPlugins);
		} finally {
			if (props.eager) transformsInProgress.delete(resolvedDictionary);
		}
	};
	if (resolved === null) return writeTransformCache(dictionary, cacheKey, null);
	if (Array.isArray(resolved)) return writeTransformCache(dictionary, cacheKey, resolved.map(transformDictionary));
	return writeTransformCache(dictionary, cacheKey, transformDictionary(resolved));
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
	if (!isPlainObject(target) || !isPlainObject(source)) return target;
	let result = target;
	for (const key of Object.keys(source)) {
		const sourceValue = source[key];
		if (key === "__proto__" || key === "constructor" || sourceValue === void 0) continue;
		const targetValue = target[key];
		const merged = targetValue === void 0 ? sourceValue : typeof targetValue === "object" ? deepMerge(targetValue, sourceValue) : targetValue;
		if (merged === targetValue) continue;
		if (result === target) result = { ...target };
		result[key] = merged;
	}
	return result;
};
var getTranslation = (languageContent, locale, fallback) => {
	const get = (localeEl) => languageContent[localeEl];
	const exactMatch = get(locale);
	if (typeof exactMatch === "string") return exactMatch;
	const candidates = [
		locale,
		locale.split("-")[0],
		fallback,
		fallback?.split("-")[0]
	];
	const results = [];
	for (let index = 0; index < candidates.length; index++) {
		const candidate = candidates[index];
		if (!candidate || candidates.indexOf(candidate) < index) continue;
		const value = get(candidate);
		if (value === void 0) continue;
		if (typeof value === "string") {
			if (results.length === 0) return value;
			continue;
		}
		results.push(value);
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
var translationPlugin = (locale, fallback) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? fallbackPlugin : {
	id: "translation-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "translation",
	transform: (node, props, deepTransformNode) => {
		const content = getTranslation(node["translation"] ?? {}, locale, fallback);
		return deepTransformNode(content, {
			...props,
			children: content,
			keyPath: [...props.keyPath, {
				type: TRANSLATION,
				key: locale
			}]
		});
	}
};
var enumerationPlugin = fallbackPlugin;
var pluralPlugin = (locale) => fallbackPlugin;
var conditionPlugin = fallbackPlugin;
var insertionPlugin$1 = fallbackPlugin;
var genderPlugin = fallbackPlugin;
var selectPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
function IntlayerNodeWrapper($$anchor, $$props) {
	$.push($$props, false);
	let Renderer = $.prop($$props, "Renderer", 8, void 0);
	let rendererProps = $.prop($$props, "rendererProps", 24, () => ({}));
	let value = $.prop($$props, "value", 8, void 0);
	let ResolvedRenderer = $.mutable_source();
	let isAwaitingRenderer = $.mutable_source(false);
	$.legacy_pre_effect(() => $.deep_read_state(Renderer()), () => {
		if (typeof Renderer()?.then === "function") {
			$.set(isAwaitingRenderer, true);
			Renderer().then((component) => {
				$.set(ResolvedRenderer, component);
				$.set(isAwaitingRenderer, false);
			});
		} else {
			$.set(ResolvedRenderer, Renderer());
			$.set(isAwaitingRenderer, false);
		}
	});
	$.legacy_pre_effect_reset();
	$.init();
	var fragment = $.comment();
	var node = $.first_child(fragment);
	var consequent = ($$anchor) => {};
	var consequent_1 = ($$anchor) => {
		var fragment_1 = $.comment();
		var node_1 = $.first_child(fragment_1);
		$.element(node_1, () => $.get(ResolvedRenderer), false, ($$element, $$anchor) => {
			$.attribute_effect($$element, () => ({ ...rendererProps() }));
			var text = $.text();
			$.template_effect(() => $.set_text(text, value()));
			$.append($$anchor, text);
		});
		$.append($$anchor, fragment_1);
	};
	var consequent_2 = ($$anchor) => {
		$.get(ResolvedRenderer)($$anchor, $.spread_props(rendererProps, {
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
		if ($.get(isAwaitingRenderer)) $$render(consequent);
		else if (typeof $.get(ResolvedRenderer) === "string") $$render(consequent_1, 1);
		else if (typeof $.get(ResolvedRenderer) === "function") $$render(consequent_2, 2);
		else $$render(alternate, -1);
	});
	$.append($$anchor, fragment);
	$.pop();
}
var renderIntlayerNode = (args) => {
	const isClassComponent = Boolean(IntlayerNodeWrapper.prototype?.$destroy);
	let Node;
	if (isClassComponent) Node = function IntlayerNode(options) {
		return new IntlayerNodeWrapper({
			...options,
			props: {
				...options.props,
				Renderer: args.component,
				rendererProps: args.props,
				value: args.value
			}
		});
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
	if (args.additionalProps) Object.assign(Node, args.additionalProps);
	Object.setPrototypeOf(Node, getIntlayerNodePrototype(args.value, Function.prototype));
	return Node;
};
var intlayerNodePlugins = {
	id: "intlayer-node-plugin",
	canHandle: (node) => typeof node === "bigint" || typeof node === "string" || typeof node === "number",
	transform: (node, props) => {
		return renderIntlayerNode({
			value: props.children ?? node,
			component: void 0,
			props: {}
		});
	}
};
var svelteNodePlugins = intlayerNodePlugins;
var insertionPlugin = fallbackPlugin;
var markdownPlugin = fallbackPlugin;
var htmlPlugin = fallbackPlugin;
var pluginsCache = /* @__PURE__ */ new Map();
var getPlugins = (locale, fallback = true) => {
	const cacheKey = `${locale ?? internationalization.defaultLocale}_${fallback}`;
	if (pluginsCache.has(cacheKey)) return pluginsCache.get(cacheKey);
	const enabledPlugins = [
		intlayerNodePlugins,
		translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		pluralPlugin(locale ?? internationalization.defaultLocale),
		conditionPlugin,
		nestedPlugin(locale ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		selectPlugin,
		svelteNodePlugins,
		insertionPlugin,
		markdownPlugin,
		htmlPlugin
	].filter((plugin) => plugin !== fallbackPlugin);
	pluginsCache.set(cacheKey, enabledPlugins);
	return enabledPlugins;
};
var getDictionary = (dictionary, localeOrSelector) => {
	return getDictionary$1(dictionary, localeOrSelector, getPlugins(typeof localeOrSelector === "object" && localeOrSelector !== null ? localeOrSelector.locale : localeOrSelector));
};
var useDictionary = (dictionary, localeOrSelector) => {
	const context = getIntlayerContext();
	return derived([intlayerStore], ([$store]) => {
		const contextLocale = context?.locale ?? $store.locale;
		return getDictionary(dictionary, localeOrSelector ?? contextLocale);
	});
};
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
function isLocale(value) {
	return locales.includes(value);
}
var PAGE_SEGMENTS = /* @__PURE__ */ new Set([
	"",
	"about",
	"blog",
	"careers",
	"contact",
	"faq",
	"pricing",
	"products",
	"settings",
	"team"
]);
function parsePath(pathname) {
	const parts = pathname.split("/").filter(Boolean);
	if (parts.length === 0) return { kind: "notfound" };
	const [locale, ...rest] = parts;
	if (!isLocale(locale)) return { kind: "notfound" };
	const seg = rest[0] ?? "";
	if (rest.length > 1) return { kind: "notfound" };
	if (!PAGE_SEGMENTS.has(seg)) return { kind: "notfound" };
	return {
		kind: "ok",
		locale,
		page: seg
	};
}
var pathname = writable(typeof window !== "undefined" ? window.location.pathname : "/en");
var route = derived(pathname, (p) => parsePath(p));
var root = $.from_html(`<a class="text-sm text-muted-foreground transition-colors hover:text-foreground"> </a>`);
var root_1 = $.from_html(`<a target="_blank" rel="noreferrer" class="text-sm text-muted-foreground transition-colors hover:text-foreground"> </a>`);
var root_2 = $.from_html(`<li><!></li>`);
var root_3 = $.from_html(`<footer class="mt-20 border-t border-border bg-card"><div class="container py-8"><div class="grid gap-8 md:grid-cols-3"><div><h3 class="mb-2 text-sm font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p></div> <div><h3 class="mb-2 text-sm font-semibold text-foreground"> </h3> <ul class="space-y-1"></ul></div> <div><h3 class="mb-2 text-sm font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p></div></div> <div class="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground"> </div></div></footer>`);
function Footer($$anchor, $$props) {
	$.push($$props, true);
	const $route = () => $.store_get(route, "$route", $$stores);
	const $footer = () => $.store_get(footer, "$footer", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	const footer = useDictionary(footer_default);
	const currentLocale = $.derived(() => $route().kind === "ok" ? $route().locale : "en");
	const footerLinks = $.derived(() => [
		{
			label: $footer().github,
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: false
		},
		{
			label: $footer().methodology,
			to: `/${$.get(currentLocale)}/about`,
			isInternal: true
		},
		{
			label: $footer().contributing,
			to: `/${$.get(currentLocale)}/contact`,
			isInternal: true
		}
	]);
	var footer_1 = root_3();
	var div = $.child(footer_1);
	var div_1 = $.child(div);
	var div_2 = $.child(div_1);
	var h3 = $.child(div_2);
	var text = $.only_child(h3, true);
	var p = $.sibling(h3, 2);
	var text_1 = $.only_child(p, true);
	$.reset(div_2);
	var div_3 = $.sibling(div_2, 2);
	var h3_1 = $.child(div_3);
	var text_2 = $.only_child(h3_1, true);
	var ul = $.sibling(h3_1, 2);
	$.each(ul, 21, () => $.get(footerLinks), $.index, ($$anchor, linkEl) => {
		var li = root_2();
		var node = $.child(li);
		var consequent = ($$anchor) => {
			var a = root();
			var text_3 = $.only_child(a, true);
			$.template_effect(() => {
				$.set_attribute(a, "href", $.get(linkEl).to);
				$.set_text(text_3, $.get(linkEl).label);
			});
			$.append($$anchor, a);
		};
		var alternate = ($$anchor) => {
			var a_1 = root_1();
			var text_4 = $.only_child(a_1, true);
			$.template_effect(() => {
				$.set_attribute(a_1, "href", $.get(linkEl).href);
				$.set_text(text_4, $.get(linkEl).label);
			});
			$.append($$anchor, a_1);
		};
		$.if(node, ($$render) => {
			if ($.get(linkEl).isInternal) $$render(consequent);
			else $$render(alternate, -1);
		});
		$.reset(li);
		$.append($$anchor, li);
	});
	$.reset(ul);
	$.reset(div_3);
	var div_4 = $.sibling(div_3, 2);
	var h3_2 = $.child(div_4);
	var text_5 = $.only_child(h3_2, true);
	var p_1 = $.sibling(h3_2, 2);
	var text_6 = $.only_child(p_1, true);
	$.reset(div_4);
	$.reset(div_1);
	var div_5 = $.sibling(div_1, 2);
	var text_7 = $.only_child(div_5, true);
	$.reset(div);
	$.reset(footer_1);
	$.template_effect(() => {
		$.set_text(text, $footer().appName);
		$.set_text(text_1, $footer().description);
		$.set_text(text_2, $footer().resources);
		$.set_text(text_5, $footer().contact);
		$.set_text(text_6, $footer().contactEmail);
		$.set_text(text_7, $footer().footerText);
	});
	$.append($$anchor, footer_1);
	$.pop();
	$$cleanup();
}
export { Footer as default };
