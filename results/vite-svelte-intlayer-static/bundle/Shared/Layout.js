import "svelte/internal/disclose-version";
import * as $ from "svelte/internal/client";
import { getContext, onMount, setContext } from "svelte";
import { derived, get, writable } from "svelte/store";
import "svelte/internal/flags/legacy";
import { recordHydrationDuration, recordRenderTime } from "test-utils/browser-metrics";
import ChevronDown from "lucide-svelte/icons/chevron-down";
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
var configuration = {
	internationalization,
	routing: {
		"mode": "prefix-no-default",
		"storage": {
			"cookies": [{
				"name": "INTLAYER_LOCALE",
				"attributes": {}
			}],
			"headers": [{ "name": "x-intlayer-locale" }]
		},
		"basePath": ""
	},
	editor: {
		"editorURL": "http://localhost:8000",
		"cmsURL": "https://app.intlayer.org",
		"backendURL": "https://back.intlayer.org",
		"port": 8e3,
		"enabled": false,
		"dictionaryPriorityStrategy": "local_first",
		"liveSync": true,
		"liveSyncPort": 4e3,
		"liveSyncURL": "http://localhost:4000"
	},
	log: {
		"mode": "default",
		"prefix": "\x1B[38;5;239m[intlayer] \x1B[0m"
	},
	system: {
		"baseDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-static/svelte-intlayer-app",
		"moduleAugmentationDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-static/svelte-intlayer-app/.intlayer/types",
		"unmergedDictionariesDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-static/svelte-intlayer-app/.intlayer/unmerged_dictionary",
		"remoteDictionariesDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-static/svelte-intlayer-app/.intlayer/remote_dictionary",
		"dictionariesDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-static/svelte-intlayer-app/.intlayer/dictionary",
		"dynamicDictionariesDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-static/svelte-intlayer-app/.intlayer/dynamic_dictionary",
		"fetchDictionariesDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-static/svelte-intlayer-app/.intlayer/fetch_dictionary",
		"typesDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-static/svelte-intlayer-app/.intlayer/types",
		"mainDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-static/svelte-intlayer-app/.intlayer/main",
		"configDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-static/svelte-intlayer-app/.intlayer/config",
		"cacheDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-static/svelte-intlayer-app/.intlayer/cache",
		"tempDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-static/svelte-intlayer-app/.intlayer/tmp"
	},
	content: {
		"fileExtensions": [
			".content.ts",
			".content.js",
			".content.cjs",
			".content.mjs",
			".content.json",
			".content.json5",
			".content.jsonc",
			".content.tsx",
			".content.jsx"
		],
		"contentDir": ["/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-static/svelte-intlayer-app"],
		"codeDir": ["/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-static/svelte-intlayer-app"],
		"excludedPath": [
			"**/node_modulesdistbuild.intlayer.next.nuxt.expo.vercel.turbo.tanstack*.{tsx,ts,js,mjs,cjs,jsx,vue,svelte,astro}",
			"!**/node_modulesdistbuild.intlayer.next.nuxt.expo.vercel.turbo.tanstack*.config.*",
			"!***.spec.*",
			"!***.d.ts",
			"!***.map"
		],
		"outputFormat": ["esm", "cjs"],
		"cache": true,
		"checkTypes": false
	},
	ai,
	dictionary,
	build,
	compiler: {
		"enabled": true,
		"dictionaryKeyPrefix": "",
		"noMetadata": false,
		"saveComponents": false
	}
};
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
var TREE_SHAKE_TRANSLATION = process.env["INTLAYER_NODE_TYPE_TRANSLATION"] === "false";
var fallbackPlugin = {
	id: "fallback-plugin",
	canHandle: () => false,
	transform: (node) => node
};
var translationPlugin = (locale, fallback) => TREE_SHAKE_TRANSLATION ? fallbackPlugin : {
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
var locales$1 = configuration.internationalization.locales;
configuration.internationalization.requiredLocales;
configuration.internationalization.defaultLocale;
configuration.editor;
var INTLAYER_CONTEXT_KEY = Symbol("intlayer");
var setIntlayerContext = (context) => {
	setContext(INTLAYER_CONTEXT_KEY, context);
};
var getIntlayerContext = () => {
	return getContext(INTLAYER_CONTEXT_KEY);
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
var setIntlayerIdentifier = () => {
	if (typeof window !== "undefined") window.intlayer = { enabled: true };
};
var useEditor = () => {};
var setupIntlayer = (initialLocale) => {
	setIntlayerIdentifier();
	useEditor();
	let locale = $.state($.proxy(initialLocale));
	if (initialLocale) intlayerStore.setLocale(initialLocale);
	const contextValue = {
		get locale() {
			return $.get(locale) ?? internationalization.defaultLocale;
		},
		setLocale: (newLocale) => {
			$.set(locale, newLocale, true);
			intlayerStore.setLocale(newLocale);
		}
	};
	setIntlayerContext(contextValue);
	return contextValue;
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
var intlayerNodePlugins = process.env["INTLAYER_NODE_TYPE_INTLAYER_NODE"] === "false" ? fallbackPlugin : {
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
var useDictionary = (dictionary, locale) => {
	const context = getIntlayerContext();
	return derived([intlayerStore], ([$store]) => {
		return getDictionary(dictionary, locale ?? context?.locale ?? $store.locale);
	});
};
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
	},
	localIds: ["footer::local::src/components/Footer.content.ts"]
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
function getLocaleName(locale) {
	try {
		const name = new Intl.DisplayNames([locale], { type: "language" }).of(locale);
		return name ? name.charAt(0).toUpperCase() + name.slice(1) : locale;
	} catch {
		return locale.toUpperCase();
	}
}
function isLocale(value) {
	return locales.includes(value);
}
var PAGE_SEGMENTS = new Set([
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
function navigate(url, replace = false) {
	if (typeof window === "undefined") return;
	if (replace) history.replaceState(null, "", url);
	else history.pushState(null, "", url);
	pathname.set(window.location.pathname);
}
var root_2$1 = $.from_html(`<a class="text-sm text-muted-foreground transition-colors hover:text-foreground"> </a>`);
var root_3 = $.from_html(`<a target="_blank" rel="noreferrer" class="text-sm text-muted-foreground transition-colors hover:text-foreground"> </a>`);
var root_1$2 = $.from_html(`<li><!></li>`);
var root$4 = $.from_html(`<footer class="mt-20 border-t border-border bg-card"><div class="container py-8"><div class="grid gap-8 md:grid-cols-3"><div><h3 class="mb-2 text-sm font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p></div> <div><h3 class="mb-2 text-sm font-semibold text-foreground"> </h3> <ul class="space-y-1"></ul></div> <div><h3 class="mb-2 text-sm font-semibold text-foreground"> </h3> <p class="text-sm text-muted-foreground"> </p></div></div> <div class="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground"> </div></div></footer>`);
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
	var footer_1 = root$4();
	var div = $.child(footer_1);
	var div_1 = $.child(div);
	var div_2 = $.child(div_1);
	var h3 = $.child(div_2);
	var text = $.child(h3, true);
	$.reset(h3);
	var p = $.sibling(h3, 2);
	var text_1 = $.child(p, true);
	$.reset(p);
	$.reset(div_2);
	var div_3 = $.sibling(div_2, 2);
	var h3_1 = $.child(div_3);
	var text_2 = $.child(h3_1, true);
	$.reset(h3_1);
	var ul = $.sibling(h3_1, 2);
	$.each(ul, 21, () => $.get(footerLinks), $.index, ($$anchor, linkEl) => {
		var li = root_1$2();
		var node = $.child(li);
		var consequent = ($$anchor) => {
			var a = root_2$1();
			var text_3 = $.child(a, true);
			$.reset(a);
			$.template_effect(() => {
				$.set_attribute(a, "href", $.get(linkEl).to);
				$.set_text(text_3, $.get(linkEl).label);
			});
			$.append($$anchor, a);
		};
		var alternate = ($$anchor) => {
			var a_1 = root_3();
			var text_4 = $.child(a_1, true);
			$.reset(a_1);
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
	var text_5 = $.child(h3_2, true);
	$.reset(h3_2);
	var p_1 = $.sibling(h3_2, 2);
	var text_6 = $.child(p_1, true);
	$.reset(p_1);
	$.reset(div_4);
	$.reset(div_1);
	var div_5 = $.sibling(div_1, 2);
	var text_7 = $.child(div_5, true);
	$.reset(div_5);
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
var header_default = {
	key: "header",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"home": "Home",
				"methodology": "Methodology",
				"mockPages": "Mock Pages",
				"products": "Products",
				"pricing": "Pricing",
				"team": "Team",
				"blog": "Blog",
				"careers": "Careers",
				"faq": "FAQ",
				"contact": "Contact",
				"settings": "Settings",
				"appName": "i18n Bench",
				"goToGithub": "Go to GitHub",
				"header": "Header"
			},
			"fr": {
				"home": "Accueil",
				"methodology": "Méthodologie",
				"mockPages": "Pages fictives",
				"products": "Produits",
				"pricing": "Tarification",
				"team": "Équipe",
				"blog": "Blog",
				"careers": "Carrières",
				"faq": "FAQ",
				"contact": "Contact",
				"settings": "Paramètres",
				"appName": "Benchmark i18n",
				"goToGithub": "Aller sur GitHub",
				"header": "En-tête"
			},
			"es": {
				"home": "Inicio",
				"methodology": "Metodología",
				"mockPages": "Páginas de prueba",
				"products": "Productos",
				"pricing": "Precios",
				"team": "Equipo",
				"blog": "Blog",
				"careers": "Carreras",
				"faq": "FAQ",
				"contact": "Contacto",
				"settings": "Ajustes",
				"appName": "i18n Bench",
				"goToGithub": "Ir a GitHub",
				"header": "Encabezado"
			},
			"de": {
				"home": "Startseite",
				"methodology": "Methodik",
				"mockPages": "Mock-Seiten",
				"products": "Produkte",
				"pricing": "Preise",
				"team": "Team",
				"blog": "Blog",
				"careers": "Karriere",
				"faq": "FAQ",
				"contact": "Kontakt",
				"settings": "Einstellungen",
				"appName": "i18n Bench",
				"goToGithub": "Zu GitHub gehen",
				"header": "Header"
			},
			"it": {
				"home": "Home",
				"methodology": "Metodologia",
				"mockPages": "Pagine mock",
				"products": "Prodotti",
				"pricing": "Prezzi",
				"team": "Team",
				"blog": "Blog",
				"careers": "Carriere",
				"faq": "FAQ",
				"contact": "Contatti",
				"settings": "Impostazioni",
				"appName": "i18n Bench",
				"goToGithub": "Vai su GitHub",
				"header": "Intestazione"
			},
			"pt": {
				"home": "Início",
				"methodology": "Metodologia",
				"mockPages": "Páginas fictícias",
				"products": "Produtos",
				"pricing": "Preços",
				"team": "Equipe",
				"blog": "Blog",
				"careers": "Carreiras",
				"faq": "FAQ",
				"contact": "Contato",
				"settings": "Configurações",
				"appName": "i18n Bench",
				"goToGithub": "Ir para o GitHub",
				"header": "Cabeçalho"
			},
			"zh": {
				"home": "首页",
				"methodology": "方法论",
				"mockPages": "模拟页面",
				"products": "产品",
				"pricing": "价格",
				"team": "团队",
				"blog": "博客",
				"careers": "职业生涯",
				"faq": "常见问题",
				"contact": "联系我们",
				"settings": "设置",
				"appName": "i18n 基准",
				"goToGithub": "前往 GitHub",
				"header": "页眉"
			},
			"ja": {
				"home": "ホーム",
				"methodology": "方法論",
				"mockPages": "モックページ",
				"products": "製品",
				"pricing": "価格",
				"team": "チーム",
				"blog": "ブログ",
				"careers": "採用情報",
				"faq": "よくある質問",
				"contact": "お問い合わせ",
				"settings": "設定",
				"appName": "i18n ベンチ",
				"goToGithub": "GitHub へ",
				"header": "ヘッダー"
			},
			"ko": {
				"home": "홈",
				"methodology": "방법론",
				"mockPages": "모의 페이지",
				"products": "제품",
				"pricing": "가격",
				"team": "팀",
				"blog": "블로그",
				"careers": "채용",
				"faq": "FAQ",
				"contact": "연락처",
				"settings": "설정",
				"appName": "i18n 벤치",
				"goToGithub": "GitHub로 이동",
				"header": "헤더"
			},
			"ru": {
				"home": "Главная",
				"methodology": "Методология",
				"mockPages": "Мок-страницы",
				"products": "Продукты",
				"pricing": "Цены",
				"team": "Команда",
				"blog": "Блог",
				"careers": "Вакансии",
				"faq": "FAQ",
				"contact": "Контакты",
				"settings": "Настройки",
				"appName": "i18n Бенч",
				"goToGithub": "Перейти на GitHub",
				"header": "Шапка"
			}
		}
	},
	localIds: ["header::local::src/components/Header.content.ts"]
};
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
var root_1$1 = $.from_html(`<option> </option>`);
var root$3 = $.from_html(`<div class="flex items-center gap-2"><select class="h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:ring-1 focus:ring-primary focus:outline-none"></select></div>`);
function LocaleSwitcher($$anchor, $$props) {
	$.push($$props, false);
	const $pathname = () => $.store_get(pathname, "$pathname", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	function handleLocaleChange(e) {
		const newLocale = e.target.value;
		navigate(get(pathname).replace(/^\/[^/]+/, `/${newLocale}`) + window.location.search + window.location.hash, false);
	}
	$.init();
	var div = root$3();
	var select = $.child(div);
	$.each(select, 5, () => locales$1, (localeItem) => localeItem, ($$anchor, localeItem) => {
		var option = root_1$1();
		var text = $.child(option, true);
		$.reset(option);
		var option_value = {};
		$.template_effect(($0) => {
			$.set_text(text, $0);
			if (option_value !== (option_value = $.get(localeItem))) option.value = (option.__value = $.get(localeItem)) ?? "";
		}, [() => getLocaleName($.get(localeItem))]);
		$.append($$anchor, option);
	});
	$.reset(select);
	var select_value;
	$.init_select(select);
	$.reset(div);
	$.template_effect(($0) => {
		if (select_value !== (select_value = $0)) select.value = (select.__value = $0) ?? "", $.select_option(select, $0);
	}, [() => $pathname().split("/").filter(Boolean)[0] ?? "en"]);
	$.delegated("change", select, handleLocaleChange);
	$.append($$anchor, div);
	$.pop();
	$$cleanup();
}
$.delegate(["change"]);
var theme_toggle_default = {
	key: "theme-toggle",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"auto": "Theme: Auto",
				"dark": "Theme: Dark",
				"light": "Theme: Light",
				"ariaLabelAuto": "Theme mode: auto (system). Click to switch to light mode.",
				"ariaLabelLight": "Theme mode: light. Click to switch to dark mode.",
				"ariaLabelDark": "Theme mode: dark. Click to switch to auto mode."
			},
			"fr": {
				"auto": "Thème : Auto",
				"dark": "Thème : Sombre",
				"light": "Thème : Clair",
				"ariaLabelAuto": "Mode de thème : auto (système). Cliquez pour passer au mode clair.",
				"ariaLabelLight": "Mode de thème : clair. Cliquez pour passer au mode sombre.",
				"ariaLabelDark": "Mode de thème : sombre. Cliquez pour passer au mode auto."
			},
			"es": {
				"auto": "Tema: Auto",
				"dark": "Tema: Oscuro",
				"light": "Tema: Claro",
				"ariaLabelAuto": "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
				"ariaLabelLight": "Modo de tema: claro. Haga clic para cambiar al modo oscuro.",
				"ariaLabelDark": "Modo de tema: oscuro. Haga clic para cambiar al modo automático."
			},
			"de": {
				"auto": "Design: Auto",
				"dark": "Design: Dunkel",
				"light": "Design: Hell",
				"ariaLabelAuto": "Design-Modus: Auto (System). Klicken Sie hier, um in den hellen Modus zu wechseln.",
				"ariaLabelLight": "Design-Modus: Hell. Klicken Sie hier, um in den dunklen Modus zu wechseln.",
				"ariaLabelDark": "Design-Modus: Dunkel. Klicken Sie hier, um in den Auto-Modus zu wechseln."
			},
			"it": {
				"auto": "Tema: Auto",
				"dark": "Tema: Scuro",
				"light": "Tema: Chiaro",
				"ariaLabelAuto": "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.",
				"ariaLabelLight": "Modalità tema: chiaro. Clicca per passare alla modalità scura.",
				"ariaLabelDark": "Modalità tema: scuro. Clicca per passare alla modalità auto."
			},
			"pt": {
				"auto": "Tema: Automático",
				"dark": "Tema: Escuro",
				"light": "Tema: Claro",
				"ariaLabelAuto": "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
				"ariaLabelLight": "Modo de tema: claro. Clique para mudar para o modo escuro.",
				"ariaLabelDark": "Modo de tema: escuro. Clique para mudar para o modo automático."
			},
			"zh": {
				"auto": "主题：自动",
				"dark": "主题：深色",
				"light": "主题：浅色",
				"ariaLabelAuto": "主题模式：自动（系统）。点击切换到浅色模式。",
				"ariaLabelLight": "主题模式：浅色。点击切换到深色模式。",
				"ariaLabelDark": "主题模式：深色。点击切换到自动模式。"
			},
			"ja": {
				"auto": "テーマ：自動",
				"dark": "テーマ：ダーク",
				"light": "テーマ：ライト",
				"ariaLabelAuto": "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。",
				"ariaLabelLight": "テーマモード：ライト。クリックしてダークモードに切り替えます。",
				"ariaLabelDark": "テーマモード：ダーク。クリックして自動モードに切り替えます。"
			},
			"ko": {
				"auto": "테마: 자동",
				"dark": "테마: 어둡게",
				"light": "테마: 밝게",
				"ariaLabelAuto": "테마 모드: 자동(시스템). 클릭하여 밝은 모드로 전환합니다.",
				"ariaLabelLight": "테마 모드: 밝게. 클릭하여 어두운 모드로 전환합니다.",
				"ariaLabelDark": "테마 모드: 어둡게. 클릭하여 자동 모드로 전환합니다."
			},
			"ru": {
				"auto": "Тема: Авто",
				"dark": "Тема: Темная",
				"light": "Тема: Светлая",
				"ariaLabelAuto": "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.",
				"ariaLabelLight": "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.",
				"ariaLabelDark": "Режим темы: темный. Нажмите, чтобы переключиться в автоматический режим."
			}
		}
	},
	localIds: ["theme-toggle::local::src/components/ThemeToggle.content.ts"]
};
var root$2 = $.from_html(`<button type="button" class="rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"> </button>`);
function ThemeToggle($$anchor, $$props) {
	$.push($$props, true);
	const $tt = () => $.store_get(tt, "$tt", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	const tt = useDictionary(theme_toggle_default);
	function getInitialMode() {
		if (typeof window === "undefined") return "auto";
		const stored = window.localStorage.getItem("theme");
		if (stored === "light" || stored === "dark" || stored === "auto") return stored;
		return "auto";
	}
	function applyThemeMode(mode) {
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		const resolved = mode === "auto" ? prefersDark ? "dark" : "light" : mode;
		document.documentElement.classList.remove("light", "dark");
		document.documentElement.classList.add(resolved);
		if (mode === "auto") document.documentElement.removeAttribute("data-theme");
		else document.documentElement.setAttribute("data-theme", mode);
		document.documentElement.style.colorScheme = resolved;
	}
	let mode = $.state("auto");
	onMount(() => {
		const initialMode = getInitialMode();
		$.set(mode, initialMode, true);
		applyThemeMode(initialMode);
	});
	$.user_effect(() => {
		if ($.get(mode) !== "auto") return;
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => applyThemeMode("auto");
		media.addEventListener("change", onChange);
		return () => media.removeEventListener("change", onChange);
	});
	function toggleMode() {
		const nextMode = $.get(mode) === "light" ? "dark" : $.get(mode) === "dark" ? "auto" : "light";
		$.set(mode, nextMode, true);
		applyThemeMode(nextMode);
		window.localStorage.setItem("theme", nextMode);
	}
	const label = $.derived(() => $.get(mode) === "auto" ? $tt().ariaLabelAuto : $.get(mode) === "light" ? $tt().ariaLabelLight : $tt().ariaLabelDark);
	const buttonText = $.derived(() => $.get(mode) === "auto" ? $tt().auto : $.get(mode) === "dark" ? $tt().dark : $tt().light);
	var button = root$2();
	var text = $.child(button, true);
	$.reset(button);
	$.template_effect(() => {
		$.set_attribute(button, "aria-label", $.get(label));
		$.set_attribute(button, "title", $.get(label));
		$.set_text(text, $.get(buttonText));
	});
	$.delegated("click", button, toggleMode);
	$.append($$anchor, button);
	$.pop();
	$$cleanup();
}
$.delegate(["click"]);
var root_2 = $.from_html(`<a class="block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent"> </a>`);
var root_1 = $.from_html(`<div class="absolute top-full left-0 w-48 pt-2" role="presentation"><div class="overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg"></div></div>`);
var root$1 = $.from_html(`<header class="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg"><nav class="container flex h-16 items-center justify-between"><div class="flex items-center gap-8"><a class="text-lg font-bold tracking-tight text-primary no-underline"> </a> <div class="hidden items-center gap-6 text-sm font-medium md:flex"><a> </a> <a> </a> <div class="relative"><button type="button" class="nav-link flex cursor-pointer items-center gap-1 border-none bg-transparent"> <!></button> <!></div></div></div> <div class="flex items-center gap-4"><a href="https://github.com/intlayer-org/benchmark-i18n" target="_blank" rel="noreferrer" class="text-muted-foreground transition hover:text-foreground"><span class="sr-only"> </span> <svg viewBox="0 0 16 16" aria-hidden="true" width="20" height="20"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a> <!> <!></div></nav></header>`);
function Header($$anchor, $$props) {
	$.push($$props, true);
	const $route = () => $.store_get(route, "$route", $$stores);
	const $header = () => $.store_get(header, "$header", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	const header = useDictionary(header_default);
	usePerformanceMeasure(get(header).header);
	let isMockPagesOpen = $.state(false);
	const currentLocale = $.derived(() => $route().kind === "ok" ? $route().locale : "en");
	const mockPages = $.derived(() => [
		{
			to: `/${$.get(currentLocale)}/products`,
			label: $header().products
		},
		{
			to: `/${$.get(currentLocale)}/pricing`,
			label: $header().pricing
		},
		{
			to: `/${$.get(currentLocale)}/team`,
			label: $header().team
		},
		{
			to: `/${$.get(currentLocale)}/blog`,
			label: $header().blog
		},
		{
			to: `/${$.get(currentLocale)}/careers`,
			label: $header().careers
		},
		{
			to: `/${$.get(currentLocale)}/faq`,
			label: $header().faq
		},
		{
			to: `/${$.get(currentLocale)}/contact`,
			label: $header().contact
		},
		{
			to: `/${$.get(currentLocale)}/settings`,
			label: $header().settings
		}
	]);
	const homeActive = $.derived(() => $route().kind === "ok" && $route().page === "");
	const methodologyActive = $.derived(() => $route().kind === "ok" && $route().page === "about");
	var header_1 = root$1();
	var nav = $.child(header_1);
	var div = $.child(nav);
	var a = $.child(div);
	var text = $.child(a, true);
	$.reset(a);
	var div_1 = $.sibling(a, 2);
	var a_1 = $.child(div_1);
	let classes;
	var text_1 = $.child(a_1, true);
	$.reset(a_1);
	var a_2 = $.sibling(a_1, 2);
	let classes_1;
	var text_2 = $.child(a_2, true);
	$.reset(a_2);
	var div_2 = $.sibling(a_2, 2);
	var button = $.child(div_2);
	var text_3 = $.child(button);
	var node = $.sibling(text_3);
	{
		let $0 = $.derived(() => $.get(isMockPagesOpen) ? "transition-transform rotate-180" : "transition-transform");
		ChevronDown(node, {
			size: 14,
			get class() {
				return $.get($0);
			}
		});
	}
	$.reset(button);
	var node_1 = $.sibling(button, 2);
	var consequent = ($$anchor) => {
		var div_3 = root_1();
		var div_4 = $.child(div_3);
		$.each(div_4, 21, () => $.get(mockPages), (page) => page.to, ($$anchor, page) => {
			var a_3 = root_2();
			var text_4 = $.child(a_3, true);
			$.reset(a_3);
			$.template_effect(() => {
				$.set_attribute(a_3, "href", $.get(page).to);
				$.set_text(text_4, $.get(page).label);
			});
			$.delegated("click", a_3, () => $.set(isMockPagesOpen, false));
			$.append($$anchor, a_3);
		});
		$.reset(div_4);
		$.reset(div_3);
		$.event("mouseenter", div_3, () => $.set(isMockPagesOpen, true));
		$.event("mouseleave", div_3, () => $.set(isMockPagesOpen, false));
		$.append($$anchor, div_3);
	};
	$.if(node_1, ($$render) => {
		if ($.get(isMockPagesOpen)) $$render(consequent);
	});
	$.reset(div_2);
	$.reset(div_1);
	$.reset(div);
	var div_5 = $.sibling(div, 2);
	var a_4 = $.child(div_5);
	var span = $.child(a_4);
	var text_5 = $.child(span, true);
	$.reset(span);
	$.next(2);
	$.reset(a_4);
	var node_2 = $.sibling(a_4, 2);
	LocaleSwitcher(node_2, {});
	ThemeToggle($.sibling(node_2, 2), {});
	$.reset(div_5);
	$.reset(nav);
	$.reset(header_1);
	$.template_effect(() => {
		$.set_attribute(a, "href", `/${$.get(currentLocale)}`);
		$.set_text(text, $header().appName);
		$.set_attribute(a_1, "href", `/${$.get(currentLocale)}`);
		classes = $.set_class(a_1, 1, "nav-link", null, classes, { "is-active": $.get(homeActive) });
		$.set_text(text_1, $header().home);
		$.set_attribute(a_2, "href", `/${$.get(currentLocale)}/about`);
		classes_1 = $.set_class(a_2, 1, "nav-link", null, classes_1, { "is-active": $.get(methodologyActive) });
		$.set_text(text_2, $header().methodology);
		$.set_text(text_3, `${$header().mockPages ?? ""} `);
		$.set_text(text_5, $header().goToGithub);
	});
	$.event("mouseenter", button, () => $.set(isMockPagesOpen, true));
	$.event("mouseleave", button, () => $.set(isMockPagesOpen, false));
	$.delegated("click", button, () => $.set(isMockPagesOpen, !$.get(isMockPagesOpen)));
	$.append($$anchor, header_1);
	$.pop();
	$$cleanup();
}
$.delegate(["click"]);
var root = $.from_html(`<!> <!> <!>`, 1);
function Layout($$anchor, $$props) {
	$.push($$props, true);
	const intlayer = setupIntlayer("en");
	const renderStart = typeof performance !== "undefined" ? performance.now() : 0;
	onMount(() => {
		recordHydrationDuration();
		recordRenderTime("AppRoot", renderStart);
	});
	$.user_effect(() => {
		intlayer.setLocale($$props.locale);
		document.documentElement.lang = $$props.locale;
	});
	var fragment = root();
	var node = $.first_child(fragment);
	Header(node, {});
	var node_1 = $.sibling(node, 2);
	$.snippet(node_1, () => $$props.children);
	Footer($.sibling(node_1, 2), {});
	$.append($$anchor, fragment);
	$.pop();
}
export { Layout as default };
