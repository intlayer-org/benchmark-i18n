import { Fragment, computed, createBlock, createElementBlock, createElementVNode, createTextVNode, defineComponent, getCurrentInstance, h, inject, isRef, markRaw, openBlock, ref, renderList, resolveComponent, shallowRef, toDisplayString, toValue, watch, withCtx } from "vue";
import { useRoute } from "vue-router";
var footer_default = {
	key: "footer",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"e": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
				"i": "Resources",
				"b": "Contact",
				"g": "GitHub",
				"h": "Methodology",
				"d": "Contributing",
				"f": "i18n Benchmark — Open-source project. Built with Vue, Vite & Vue Router.",
				"a": "i18n Benchmark",
				"c": "contact@intlayer.org"
			},
			"fr": {
				"e": "Une application de test open-source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.",
				"i": "Ressources",
				"b": "Contact",
				"g": "GitHub",
				"h": "Méthodologie",
				"d": "Contribuer",
				"f": "Benchmark i18n — Projet open-source. Construit avec Vue, Vite et Vue Router.",
				"a": "Benchmark i18n",
				"c": "contact@intlayer.org"
			},
			"es": {
				"e": "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el tiempo de carga y la reactividad de la aplicación.",
				"i": "Recursos",
				"b": "Contacto",
				"g": "GitHub",
				"h": "Metodología",
				"d": "Contribuir",
				"f": "i18n Benchmark — Proyecto de código abierto. Construido con Vue, Vite y Vue Router.",
				"a": "i18n Benchmark",
				"c": "contact@intlayer.org"
			},
			"de": {
				"e": "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.",
				"i": "Ressourcen",
				"b": "Kontakt",
				"g": "GitHub",
				"h": "Methodik",
				"d": "Mitwirken",
				"f": "i18n Benchmark – Open-Source-Projekt. Erstellt mit Vue, Vite & Vue Router.",
				"a": "i18n Benchmark",
				"c": "contact@intlayer.org"
			},
			"it": {
				"e": "Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sui tempi di caricamento e sulla reattività dell'app.",
				"i": "Risorse",
				"b": "Contatto",
				"g": "GitHub",
				"h": "Metodologia",
				"d": "Contribuire",
				"f": "i18n Benchmark — Progetto open-source. Costruito con Vue, Vite e Vue Router.",
				"a": "i18n Benchmark",
				"c": "contact@intlayer.org"
			},
			"pt": {
				"e": "Um aplicativo de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo.",
				"i": "Recursos",
				"b": "Contato",
				"g": "GitHub",
				"h": "Metodologia",
				"d": "Contribuindo",
				"f": "i18n Benchmark — Projeto de código aberto. Construído com Vue, Vite e Vue Router.",
				"a": "i18n Benchmark",
				"c": "contact@intlayer.org"
			},
			"zh": {
				"e": "一个开源测试应用程序，用于衡量国际化库对捆绑包大小、加载时间和应用程序反应性的真实影响。",
				"i": "资源",
				"b": "联系我们",
				"g": "GitHub",
				"h": "方法论",
				"d": "贡献",
				"f": "i18n 基准测试——开源项目。使用 Vue、Vite 和 Vue Router 构建。",
				"a": "i18n 基准测试",
				"c": "contact@intlayer.org"
			},
			"ja": {
				"e": "バンドルサイズ、ロード時間、アプリの反応性に与える国際化ライブラリの実際の影響を測定するためのオープンソースのテストアプリケーション。",
				"i": "リソース",
				"b": "お問い合わせ",
				"g": "GitHub",
				"h": "方法論",
				"d": "貢献",
				"f": "i18n ベンチマーク — オープンソースプロジェクト。Vue、Vite、Vue Routerで構築されています。",
				"a": "i18n ベンチマーク",
				"c": "contact@intlayer.org"
			},
			"ko": {
				"e": "번들 크기, 로딩 시간 및 앱 반응성에 대한 국제화 라이브러리의 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.",
				"i": "리소스",
				"b": "연락처",
				"g": "GitHub",
				"h": "방법론",
				"d": "기여하기",
				"f": "i18n 벤치마크 — 오픈 소스 프로젝트. Vue, Vite 및 Vue Router로 제작되었습니다.",
				"a": "i18n 벤치마크",
				"c": "contact@intlayer.org"
			},
			"ru": {
				"e": "Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.",
				"i": "Ресурсы",
				"b": "Контакт",
				"g": "GitHub",
				"h": "Методология",
				"d": "Участие в проекте",
				"f": "i18n Benchmark — проект с открытым исходным кодом. Построен на Vue, Vite и Vue Router.",
				"a": "i18n Бенчмарк",
				"c": "contact@intlayer.org"
			}
		}
	}
};
var n$1 = ({ value: r, children: i, additionalProps: a = {} }) => {
	let o = ref(r), s = typeof i == "function" ? (e) => i(e) : () => i, c = (e) => (o.value, s(e)), l = ((e) => c(e));
	return Object.setPrototypeOf(l, String.prototype), Object.assign(l, {
		render: c,
		toString: () => String(o.value ?? ""),
		valueOf: () => o.value,
		[Symbol.toPrimitive]: () => o.value,
		toJSON: () => o.value,
		get raw() {
			return o.value;
		},
		set raw(e) {
			o.value = e;
		},
		get value() {
			return o.value;
		},
		use(e) {
			return n$1({
				value: o.value,
				children: () => s(e),
				additionalProps: a
			});
		},
		__update(e) {
			s = e.render, this.raw = e.raw;
		},
		...a
	}), markRaw(l);
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
var insertionPlugin = fallbackPlugin;
var genderPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	conditionPlugin,
	insertionPlugin,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin
];
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
}), getDictionary = (dictionary, locale, plugins = getBasePlugins(locale)) => {
	const props = {
		dictionaryKey: dictionary.key,
		dictionaryPath: dictionary.filePath,
		keyPath: [],
		plugins
	};
	return getContent(dictionary.content, props, plugins);
}, b$1 = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (t, { children: n, ...r }) => {
		let i = (t) => n$1({
			...r,
			value: t,
			children: t
		}), s = i(n);
		if (typeof n != "function") return s;
		let c = (...e) => i(n(...e));
		Object.setPrototypeOf(c, Object.getPrototypeOf(s));
		for (let e of Object.getOwnPropertyNames(s)) {
			let t = Object.getOwnPropertyDescriptor(s, e);
			t && Object.defineProperty(c, e, t);
		}
		for (let e of Object.getOwnPropertySymbols(s)) {
			let t = Object.getOwnPropertyDescriptor(s, e);
			t && Object.defineProperty(c, e, t);
		}
		return markRaw(c);
	}
}, S = fallbackPlugin, w = fallbackPlugin, T = fallbackPlugin, E = /* @__PURE__ */ new Map(), D = (e, t = !0) => {
	let n = `${e ?? internationalization.defaultLocale}_${t}`;
	if (E.has(n)) return E.get(n);
	let r = [
		translationPlugin(e ?? internationalization.defaultLocale, t ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		conditionPlugin,
		nestedPlugin(e ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		b$1,
		S,
		w,
		T
	];
	return E.set(n, r), r;
}, n = (n, r) => getDictionary(n, r, D(r)), i = Symbol("intlayer");
var m = (e, t) => t.reduce((e, t) => e?.[t], e), h$1 = (e) => typeof e == "object" && !!e, g = (e) => typeof e == "function" || h$1(e) && ("render" in e || "setup" in e), _ = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, v = (e) => markRaw(defineComponent({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : g(t) ? h(t) : Array.isArray(t) ? h("span", t) : t;
		};
	}
})), y = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return v(() => e.value);
		if (r == null) return n === Symbol.toPrimitive || n === "toString" ? () => "" : void 0;
		let i = r[n];
		return typeof i == "function" ? i.bind(r) : i;
	},
	ownKeys() {
		let t = e.value;
		return typeof t == "object" && t ? Reflect.ownKeys(t) : [];
	},
	getOwnPropertyDescriptor() {
		return {
			enumerable: !0,
			configurable: !0
		};
	}
}), b = (r, a) => {
	let c = getCurrentInstance() ? inject(i) : void 0, b = isRef(c?.locale) ? c.locale : ref(c?.locale ?? internationalization.defaultLocale), x = computed(() => (a === void 0 ? void 0 : toValue(a)) ?? b.value), S = shallowRef({});
	watch([() => toValue(r), () => x.value], ([t, n$2]) => {
		S.value = n(t, n$2);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let C = (e) => new Proxy({}, {
		get(t, r, i) {
			if (r === "__v_isRef") return !0;
			let a = computed(() => m(S.value, e));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return v(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let o = e.concat(r), s = m(S.value, o);
			if (s === void 0 || h$1(s) && !g(s)) return C(o);
			if (_(s)) return y(computed(() => m(S.value, o)));
			let c = computed(() => m(S.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = m(S.value, e);
			return h$1(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return C([]);
};
var Footer_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "Footer",
	setup(__props, { expose: __expose }) {
		__expose();
		const route = useRoute();
		const currentLocale = computed(() => route.params.locale || "en");
		const { e: description, i: resources, b: contactLabel, g: github, h: methodology, d: contributing, f: footerText, a: appName, c: contactEmail } = b(footer_default);
		const __returned__ = {
			route,
			currentLocale,
			description,
			resources,
			contactLabel,
			github,
			methodology,
			contributing,
			footerText,
			appName,
			contactEmail,
			footerLinks: computed(() => [
				{
					label: github,
					href: "https://github.com/intlayer-org/benchmark-i18n",
					isInternal: false
				},
				{
					label: methodology,
					to: `/${currentLocale.value}/about`,
					isInternal: true
				},
				{
					label: contributing,
					to: `/${currentLocale.value}/contact`,
					isInternal: true
				}
			])
		};
		Object.defineProperty(__returned__, "__isScriptSetup", {
			enumerable: false,
			value: true
		});
		return __returned__;
	}
});
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
var _hoisted_1 = { class: "mt-20 border-t border-border bg-card" };
var _hoisted_2 = { class: "container py-8" };
var _hoisted_3 = { class: "grid gap-8 md:grid-cols-3" };
var _hoisted_4 = { class: "mb-2 text-sm font-semibold text-foreground" };
var _hoisted_5 = { class: "text-sm text-muted-foreground" };
var _hoisted_6 = { class: "mb-2 text-sm font-semibold text-foreground" };
var _hoisted_7 = { class: "space-y-1" };
var _hoisted_8 = ["href"];
var _hoisted_9 = { class: "mb-2 text-sm font-semibold text-foreground" };
var _hoisted_10 = { class: "text-sm text-muted-foreground" };
var _hoisted_11 = { class: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_router_link = resolveComponent("router-link");
	return openBlock(), createElementBlock("footer", _hoisted_1, [createElementVNode("div", _hoisted_2, [createElementVNode("div", _hoisted_3, [
		createElementVNode("div", null, [createElementVNode("h3", _hoisted_4, toDisplayString($setup.appName), 1), createElementVNode("p", _hoisted_5, toDisplayString($setup.description), 1)]),
		createElementVNode("div", null, [createElementVNode("h3", _hoisted_6, toDisplayString($setup.resources), 1), createElementVNode("ul", _hoisted_7, [(openBlock(true), createElementBlock(Fragment, null, renderList($setup.footerLinks, (linkEl) => {
			return openBlock(), createElementBlock("li", { key: linkEl.label }, [linkEl.isInternal ? (openBlock(), createBlock(_component_router_link, {
				key: 0,
				to: linkEl.to,
				class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(linkEl.label), 1)]),
				_: 2
			}, 1032, ["to"])) : (openBlock(), createElementBlock("a", {
				key: 1,
				href: linkEl.href,
				target: "_blank",
				rel: "noreferrer",
				class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
			}, toDisplayString(linkEl.label), 9, _hoisted_8))]);
		}), 128))])]),
		createElementVNode("div", null, [createElementVNode("h3", _hoisted_9, toDisplayString($setup.contactLabel), 1), createElementVNode("p", _hoisted_10, toDisplayString($setup.contactEmail), 1)])
	]), createElementVNode("div", _hoisted_11, toDisplayString($setup.footerText), 1)])]);
}
var Footer_default = _plugin_vue_export_helper_default(Footer_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/Footer.vue"]]);
export { Footer_default as default };
