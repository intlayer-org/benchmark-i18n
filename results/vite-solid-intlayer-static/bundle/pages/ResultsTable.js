import { Dynamic, createComponent, insert, template } from "solid-js/web";
import { For, createContext, createMemo, useContext } from "solid-js";
var results_table_default = {
	key: "results-table",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"g": "Yes",
				"e": "Manual",
				"f": "Sample Results",
				"c": "Library",
				"a": "Bundle Size",
				"d": "Lookup Time",
				"b": "Lazy Loading"
			},
			"fr": {
				"g": "Oui",
				"e": "Manuel",
				"f": "Exemples de résultats",
				"c": "Bibliothèque",
				"a": "Taille du bundle",
				"d": "Temps de recherche",
				"b": "Chargement différé"
			},
			"es": {
				"g": "Sí",
				"e": "Manual",
				"f": "Resultados de ejemplo",
				"c": "Biblioteca",
				"a": "Tamaño del bundle",
				"d": "Tiempo de búsqueda",
				"b": "Carga diferida"
			},
			"de": {
				"g": "Ja",
				"e": "Manuell",
				"f": "Beispielergebnisse",
				"c": "Bibliothek",
				"a": "Bundle-Größe",
				"d": "Lookup-Zeit",
				"b": "Lazy Loading"
			},
			"it": {
				"g": "Sì",
				"e": "Manuale",
				"f": "Risultati di esempio",
				"c": "Libreria",
				"a": "Dimensione del bundle",
				"d": "Tempo di ricerca",
				"b": "Caricamento lazy"
			},
			"pt": {
				"g": "Sim",
				"e": "Manual",
				"f": "Resultados de exemplo",
				"c": "Biblioteca",
				"a": "Tamanho do bundle",
				"d": "Tempo de Busca",
				"b": "Carregamento Lento"
			},
			"zh": {
				"g": "是",
				"e": "手动",
				"f": "示例结果",
				"c": "库",
				"a": "捆绑包大小",
				"d": "查找时间",
				"b": "延迟加载"
			},
			"ja": {
				"g": "はい",
				"e": "手動",
				"f": "サンプル結果",
				"c": "ライブラリ",
				"a": "バンドルサイズ",
				"d": "検索時間",
				"b": "遅延ロード"
			},
			"ko": {
				"g": "예",
				"e": "수동",
				"f": "샘플 결과",
				"c": "라이브러리",
				"a": "번들 크기",
				"d": "검색 시간",
				"b": "지연 로드"
			},
			"ru": {
				"g": "Да",
				"e": "Вручную",
				"f": "Примеры результатов",
				"c": "Библиотека",
				"a": "Размер бандла",
				"d": "Время поиска",
				"b": "Ленивая загрузка"
			}
		}
	}
};
var e = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		return n === "value" ? t : n === "toString" ? () => String(t) : n === Symbol.toPrimitive ? (e) => e === "string" ? String(t) : e === "number" ? Number(t) : t : Reflect.get(e, n, r);
	} });
};
var t = (n) => {
	if (typeof n == "string") return n;
	let { type: r, props: i } = ((e) => {
		if (e?.props && typeof e.props.children == "object") {
			let n = [], { children: r } = e.props;
			return Object.keys(r ?? {}).forEach((e) => {
				n.push(t(r?.[e]));
			}), {
				...e,
				props: {
					...e.props,
					children: n
				}
			};
		}
		return {
			...e,
			props: {
				...e.props,
				children: e.props?.children ?? []
			}
		};
	})(n);
	return Dynamic({
		component: r ?? "span",
		...i,
		children: i.children
	});
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
var routing = {
	"mode": "prefix-all",
	"storage": {
		"cookies": [{
			"name": "INTLAYER_LOCALE",
			"attributes": {}
		}],
		"headers": [{ "name": "x-intlayer-locale" }]
	},
	"basePath": ""
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
});
var getDictionary = (dictionary, locale, plugins = getBasePlugins(locale)) => {
	const props = {
		dictionaryKey: dictionary.key,
		dictionaryPath: dictionary.filePath,
		keyPath: [],
		plugins
	};
	return getContent(dictionary.content, props, plugins);
}, S$1 = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (t, { plugins: a, ...o }) => e({
		...o,
		value: o.children,
		children: o.children
	})
}, C = process.env.INTLAYER_NODE_TYPE_SOLID_NODE === "false" ? fallbackPlugin : {
	id: "solid-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 || typeof Node < "u" && e instanceof Node,
	transform: (a, { plugins: o, ...s }) => e({
		...s,
		value: "[[solid-element]]",
		children: typeof Node < "u" && a instanceof Node ? a : t(a)
	})
}, T = fallbackPlugin, D = fallbackPlugin, O = fallbackPlugin, k = /* @__PURE__ */ new Map(), A = (e, t = !0) => {
	let n = `${e ?? internationalization.defaultLocale}_${t}`;
	if (k.has(n)) return k.get(n);
	let r = [
		translationPlugin(e ?? internationalization.defaultLocale, t ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		conditionPlugin,
		nestedPlugin(e ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		S$1,
		C,
		T,
		D,
		O
	];
	return k.set(n, r), r;
};
var n = (n, r) => getDictionary(n, r, A(r));
var TREE_SHAKE_STORAGE_COOKIES = process.env["INTLAYER_ROUTING_STORAGE_COOKIES"] === "false";
process.env["INTLAYER_ROUTING_STORAGE_HEADERS"];
var getLocaleFromStorageClient = (options = localeStorageOptions) => {
	const { locales } = internationalization;
	if (options?.isCookieEnabled === false) return void 0;
	const isValidLocale = (value) => !!value && locales.includes(value);
	if (!TREE_SHAKE_STORAGE_COOKIES) for (let i = 0; i < (routing.storage.cookies ?? []).length; i++) try {
		const value = options?.getCookie?.(routing.storage.cookies[i].name);
		if (isValidLocale(value)) return value;
	} catch {}
}, localeStorageOptions = {
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
}, a = getLocaleFromStorageClient(localeStorageOptions), y = createContext({
	locale: () => a ?? internationalization?.defaultLocale,
	setLocale: () => null
});
var i = (i, a) => {
	let o = useContext(y) ?? {};
	return createMemo(() => n(i, a ?? o?.locale?.()));
};
var _tmpl$ = template(`<section><h2 class="mb-6 text-2xl font-bold text-foreground"></h2><div class="overflow-x-auto rounded-lg border border-border"><table class="w-full text-sm"><thead class=bg-muted><tr><th class="px-4 py-3 text-left font-medium text-muted-foreground"></th><th class="px-4 py-3 text-left font-medium text-muted-foreground"></th><th class="px-4 py-3 text-left font-medium text-muted-foreground"></th><th class="px-4 py-3 text-left font-medium text-muted-foreground"></th></tr></thead><tbody>`), _tmpl$2 = template(`<tr class="border-t border-border"><td class="px-4 py-3 font-medium text-foreground"></td><td class="px-4 py-3 text-muted-foreground"></td><td class="px-4 py-3 text-muted-foreground"></td><td class="px-4 py-3 text-muted-foreground">`);
function ResultsTable() {
	const content = i(results_table_default);
	const results = [
		{
			lib: "react-i18next",
			size: "42.3 kB",
			time: "0.12ms",
			lazy: content().yes.value
		},
		{
			lib: "react-intl",
			size: "38.1 kB",
			time: "0.15ms",
			lazy: content().manual.value
		},
		{
			lib: "lingui",
			size: "12.8 kB",
			time: "0.08ms",
			lazy: content().yes.value
		},
		{
			lib: "typesafe-i18n",
			size: "5.2 kB",
			time: "0.05ms",
			lazy: "Built-in"
		}
	];
	return (() => {
		var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$5 = _el$2.nextSibling.firstChild.firstChild, _el$7 = _el$5.firstChild.firstChild, _el$8 = _el$7.nextSibling, _el$9 = _el$8.nextSibling, _el$0 = _el$9.nextSibling, _el$1 = _el$5.nextSibling;
		insert(_el$2, () => content().sampleResults);
		insert(_el$7, () => content().library);
		insert(_el$8, () => content().bundleSize);
		insert(_el$9, () => content().lookupTime);
		insert(_el$0, () => content().lazyLoading);
		insert(_el$1, createComponent(For, {
			each: results,
			children: (r) => (() => {
				var _el$10 = _tmpl$2(), _el$11 = _el$10.firstChild, _el$12 = _el$11.nextSibling, _el$13 = _el$12.nextSibling, _el$14 = _el$13.nextSibling;
				insert(_el$11, () => r.lib);
				insert(_el$12, () => r.size);
				insert(_el$13, () => r.time);
				insert(_el$14, () => r.lazy);
				return _el$10;
			})()
		}));
		return _el$;
	})();
}
export { ResultsTable as default };
