import { createComponent, delegateEvents, effect, insert, memo, mergeProps, setAttribute, template } from "solid-js/web";
import { A, useLocation, useNavigate, useParams } from "@solidjs/router";
import { For, Suspense, createComputed, createContext, createEffect, createMemo, createSignal, lazy, on, onMount, untrack, useContext } from "solid-js";
import { recordHydrationDuration, recordRenderTime } from "test-utils/browser-metrics";
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
	"enableProxy": false,
	"storage": {
		"cookies": [{
			"name": "INTLAYER_LOCALE",
			"attributes": { "path": "/" }
		}],
		"headers": [{ "name": "x-intlayer-locale" }]
	},
	"basePath": ""
};
var resolveExpiresToTimestamp = (expires) => {
	if (typeof expires === "number") return Date.now() + expires * 1e3;
	if (typeof expires === "string") {
		const time = Date.parse(expires);
		return Number.isNaN(time) ? void 0 : time;
	}
};
var buildCookieString = (name, value, attributes) => {
	const parts = [`${name}=${encodeURIComponent(value)}`];
	if (attributes.path) parts.push(`Path=${attributes.path}`);
	if (attributes.domain) parts.push(`Domain=${attributes.domain}`);
	const expiresTimestamp = resolveExpiresToTimestamp(attributes.expires);
	if (expiresTimestamp !== void 0) parts.push(`Expires=${new Date(expiresTimestamp).toUTCString()}`);
	if (attributes.secure) parts.push("Secure");
	if (attributes.sameSite) parts.push(`SameSite=${attributes.sameSite}`);
	return parts.join("; ");
};
var TREE_SHAKE_STORAGE_COOKIES = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
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
var getLocaleFromStorageClient = (options = localeStorageOptions) => {
	const { locales } = internationalization;
	if (options?.isCookieEnabled === false) return void 0;
	const isValidLocale = (value) => !!value && locales.includes(value);
	if (!TREE_SHAKE_STORAGE_COOKIES) for (let i = 0; i < (routing.storage.cookies ?? []).length; i++) try {
		const value = options?.getCookie?.(routing.storage.cookies[i].name);
		if (isValidLocale(value)) return value;
	} catch {}
};
var isStoredLocaleCached = false;
var storedLocale;
var getCachedLocaleFromStorageClient = () => {
	if (typeof window === "undefined") return getLocaleFromStorageClient(localeStorageOptions);
	if (!isStoredLocaleCached) {
		storedLocale = getLocaleFromStorageClient(localeStorageOptions);
		isStoredLocaleCached = true;
	}
	return storedLocale;
};
var setLocaleInStorageClient = (locale, options) => {
	if (options?.isCookieEnabled === false) return;
	isStoredLocaleCached = false;
	if (!TREE_SHAKE_STORAGE_COOKIES && routing.storage.cookies) for (let i = 0; i < routing.storage.cookies.length; i++) {
		const { name, attributes } = routing.storage.cookies[i];
		try {
			if (options?.setCookieStore) options.setCookieStore(name, locale, {
				...attributes,
				expires: resolveExpiresToTimestamp(attributes.expires)
			});
		} catch {
			try {
				if (options?.setCookieString) options.setCookieString(name, buildCookieString(name, locale, attributes));
			} catch {}
		}
	}
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
var t = ({ children: t, value: n, additionalProps: r }) => {
	let i = [t];
	if (i.value = n, r) for (let e in r) i[e] = r[e];
	return Object.setPrototypeOf(i, getIntlayerNodePrototype(n, Array.prototype)), i;
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
var insertionPlugin = fallbackPlugin;
var genderPlugin = fallbackPlugin;
var selectPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	pluralPlugin(locale ?? internationalization.defaultLocale),
	conditionPlugin,
	insertionPlugin,
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
var getDictionary = (dictionary, localeOrSelector, plugins) => {
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
var T = null;
var E = null;
T?.catch(() => {}), E?.catch(() => {});
var D = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (n, r) => {
		return t({
			value: r.children,
			children: r.children
		});
	}
};
var O = fallbackPlugin;
var A$1 = fallbackPlugin;
lazy(() => T.then((e) => ({ default: e.MarkdownRenderer })));
lazy(() => T.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var P = fallbackPlugin;
lazy(() => E.then((e) => ({ default: e })));
var I = fallbackPlugin;
var L = /* @__PURE__ */ new Map();
var R = (e, t = !0) => {
	let n = `${e ?? internationalization.defaultLocale}_${t}`;
	if (L.has(n)) return L.get(n);
	let r = [
		D,
		translationPlugin(e ?? internationalization.defaultLocale, t ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		pluralPlugin(e ?? internationalization.defaultLocale),
		conditionPlugin,
		nestedPlugin(e ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		selectPlugin,
		O,
		A$1,
		P,
		I
	].filter((e) => e !== fallbackPlugin);
	return L.set(n, r), r;
};
var n = (n, r) => {
	return getDictionary(n, r, R(typeof r == "object" && r ? r.locale : r));
};
var localeResolver = (selectedLocale, locales = internationalization?.locales, defaultLocale = internationalization?.defaultLocale) => {
	if (locales?.includes(selectedLocale)) return selectedLocale;
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
var o$1 = getCachedLocaleFromStorageClient;
var l = (e, t) => setLocaleInStorageClient(e, {
	...localeStorageOptions,
	isCookieEnabled: t
});
var setIntlayerIdentifier = () => {
	if (typeof window !== "undefined") window.intlayer = { enabled: true };
};
var v = null;
var y = null;
var b = createContext({
	locale: () => o$1() ?? internationalization?.defaultLocale,
	setLocale: () => null
});
var S = (r) => {
	let { defaultLocale: i, locales: o } = internationalization ?? {}, c = r.locale ?? o$1() ?? r.defaultLocale ?? i, [d, h] = createSignal(c), v = r.setLocale ?? ((e) => {
		if (d().toString() !== e.toString()) {
			if (!o?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			h(e), l(e, r.isCookieEnabled);
		}
	}), y = createMemo(() => localeResolver(d()));
	return createComputed(on(() => r.locale, (e) => {
		e && e !== untrack(d) && h(e);
	}, { defer: !0 })), onMount(() => {
		setIntlayerIdentifier();
	}), createComponent(b.Provider, {
		value: {
			locale: y,
			setLocale: v,
			variant: () => r.variant
		},
		get children() {
			return r.children;
		}
	});
};
var C = (e) => createComponent(S, mergeProps(e, { get children() {
	return [
		memo(() => memo(() => false)() && createComponent(Suspense, { get children() {
			return createComponent(v, {});
		} })),
		memo(() => memo(() => false)() && createComponent(Suspense, { get children() {
			return createComponent(y, {});
		} })),
		memo(() => e.children)
	];
} }));
var a = Symbol("LOADABLE_SETTLED_VALUE");
var h = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[a];
};
var o = (o, s) => {
	let c = useContext(b) ?? {}, l = createMemo(() => {
		let t = c?.locale?.();
		return n(h(o) ?? o, s ?? t);
	});
	return new Proxy(l, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
};
var footer_default = {
	key: "footer",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"a": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
				"f": "Resources",
				"e": "Methodology",
				"c": "Contributing",
				"b": "Contact",
				"d": "i18n Benchmark — Open-source project. Built with Solid, Vite & Solid Router."
			},
			"fr": {
				"a": "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.",
				"f": "Ressources",
				"e": "Méthodologie",
				"c": "Contribuer",
				"b": "Contact",
				"d": "i18n Benchmark — Projet open source. Construit avec Solid, Vite & Solid Router."
			},
			"es": {
				"a": "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el tiempo de carga y la reactividad de la aplicación.",
				"f": "Recursos",
				"e": "Metodología",
				"c": "Contribución",
				"b": "Contacto",
				"d": "i18n Benchmark — Proyecto de código abierto. Construido con Solid, Vite y Solid Router."
			},
			"de": {
				"a": "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.",
				"f": "Ressourcen",
				"e": "Methodik",
				"c": "Beitragen",
				"b": "Kontakt",
				"d": "i18n Benchmark — Open-Source-Projekt. Erstellt mit Solid, Vite & Solid Router."
			},
			"it": {
				"a": "Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sui tempi di caricamento e sulla reattività dell'app.",
				"f": "Risorse",
				"e": "Metodologia",
				"c": "Contribuire",
				"b": "Contatti",
				"d": "i18n Benchmark — Progetto open source. Creato con Solid, Vite & Solid Router."
			},
			"pt": {
				"a": "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade da aplicação.",
				"f": "Recursos",
				"e": "Metodologia",
				"c": "Contribuindo",
				"b": "Contato",
				"d": "i18n Benchmark — Projeto de código aberto. Construído com Solid, Vite & Solid Router."
			},
			"zh": {
				"a": "一个开源测试应用程序，用于衡量国际化库对捆绑包大小、加载时间和应用程序反应性的真实影响。",
				"f": "资源",
				"e": "方法论",
				"c": "贡献",
				"b": "联系我们",
				"d": "i18n Benchmark — 开源项目。使用 Solid、Vite 和 Solid Router 构建。"
			},
			"ja": {
				"a": "国際化ライブラリがバンドルサイズ、ロード時間、アプリの反応性に与える実際の影響を測定するためのオープンソーステストアプリケーションです。",
				"f": "リソース",
				"e": "方法論",
				"c": "貢献する",
				"b": "お問い合わせ",
				"d": "i18n Benchmark — オープンソースプロジェクト。Solid、Vite、Solid Routerで構築されています。"
			},
			"ko": {
				"a": "번들 크기, 로딩 시간 및 앱 반응성에 대한 국제화 라이브러리의 실제 영향을 측정하기 위한 오픈 소스 테스트 애플ри케이션입니다.",
				"f": "리소스",
				"e": "방법론",
				"c": "기여",
				"b": "문의",
				"d": "i18n Benchmark — 오픈 소스 프로젝트. Solid, Vite 및 Solid Router로 제작되었습니다."
			},
			"ru": {
				"a": "Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.",
				"f": "Ресурсы",
				"e": "Методология",
				"c": "Вклад",
				"b": "Контакт",
				"d": "i18n Benchmark — проект с открытым исходным кодом. Построен на Solid, Vite и Solid Router."
			}
		}
	}
};
var _tmpl$$3 = template(`<footer class="mt-20 border-t border-border bg-card"><div class="container py-8"><div class="grid gap-8 md:grid-cols-3"><div><h3 class="mb-2 text-sm font-semibold text-foreground">i18n Benchmark</h3><p class="text-sm text-muted-foreground"></p></div><div><h3 class="mb-2 text-sm font-semibold text-foreground"></h3><ul class=space-y-1><li><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class="text-sm text-muted-foreground transition-colors hover:text-foreground">GitHub</a></li><li></li><li></li></ul></div><div><h3 class="mb-2 text-sm font-semibold text-foreground"></h3><p class="text-sm text-muted-foreground">contact@intlayer.org</p></div></div><div class="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">`);
function Footer() {
	const content = o(footer_default);
	const params = useParams();
	const locale = () => params.locale ?? "en";
	return (() => {
		var _el$ = _tmpl$$3(), _el$3 = _el$.firstChild.firstChild, _el$4 = _el$3.firstChild, _el$6 = _el$4.firstChild.nextSibling, _el$7 = _el$4.nextSibling, _el$8 = _el$7.firstChild, _el$1 = _el$8.nextSibling.firstChild.nextSibling, _el$10 = _el$1.nextSibling, _el$12 = _el$7.nextSibling.firstChild, _el$13 = _el$3.nextSibling;
		insert(_el$6, () => content().a);
		insert(_el$8, () => content().f);
		insert(_el$1, createComponent(A, {
			get href() {
				return `/${locale()}/about`;
			},
			"class": "text-sm text-muted-foreground transition-colors hover:text-foreground",
			get children() {
				return content().e;
			}
		}));
		insert(_el$10, createComponent(A, {
			get href() {
				return `/${locale()}/contact`;
			},
			"class": "text-sm text-muted-foreground transition-colors hover:text-foreground",
			get children() {
				return content().c;
			}
		}));
		insert(_el$12, () => content().b);
		insert(_el$13, () => content().d);
		return _el$;
	})();
}
var header_default = {
	key: "header",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"f": "Header",
				"k": "Products",
				"j": "Pricing",
				"m": "Team",
				"a": "Blog",
				"b": "Careers",
				"d": "FAQ",
				"c": "Contact",
				"l": "Settings",
				"g": "Home",
				"h": "Methodology",
				"i": "Mock Pages",
				"e": "Go to GitHub"
			},
			"fr": {
				"f": "En-tête",
				"k": "Produits",
				"j": "Tarification",
				"m": "Équipe",
				"a": "Blog",
				"b": "Carrières",
				"d": "FAQ",
				"c": "Contact",
				"l": "Paramètres",
				"g": "Accueil",
				"h": "Méthodologie",
				"i": "Pages fictives",
				"e": "Aller sur GitHub"
			},
			"es": {
				"f": "Encabezado",
				"k": "Productos",
				"j": "Precios",
				"m": "Equipo",
				"a": "Blog",
				"b": "Carreras",
				"d": "FAQ",
				"c": "Contacto",
				"l": "Ajustes",
				"g": "Inicio",
				"h": "Metodología",
				"i": "Páginas de prueba",
				"e": "Ir a GitHub"
			},
			"de": {
				"f": "Header",
				"k": "Produkte",
				"j": "Preise",
				"m": "Team",
				"a": "Blog",
				"b": "Karriere",
				"d": "FAQ",
				"c": "Kontakt",
				"l": "Einstellungen",
				"g": "Home",
				"h": "Methodik",
				"i": "Testseiten",
				"e": "Zu GitHub"
			},
			"it": {
				"f": "Intestazione",
				"k": "Prodotti",
				"j": "Prezzi",
				"m": "Team",
				"a": "Blog",
				"b": "Carriere",
				"d": "FAQ",
				"c": "Contatti",
				"l": "Impostazioni",
				"g": "Home",
				"h": "Metodologia",
				"i": "Pagine di prova",
				"e": "Vai su GitHub"
			},
			"pt": {
				"f": "Cabeçalho",
				"k": "Produtos",
				"j": "Preços",
				"m": "Equipe",
				"a": "Blog",
				"b": "Carreiras",
				"d": "FAQ",
				"c": "Contato",
				"l": "Configurações",
				"g": "Início",
				"h": "Metodologia",
				"i": "Páginas de Teste",
				"e": "Ir para o GitHub"
			},
			"zh": {
				"f": "页眉",
				"k": "产品",
				"j": "定价",
				"m": "团队",
				"a": "博客",
				"b": "职业",
				"d": "常见问题",
				"c": "联系我们",
				"l": "设置",
				"g": "首页",
				"h": "方法论",
				"i": "模拟页面",
				"e": "前往 GitHub"
			},
			"ja": {
				"f": "ヘッダー",
				"k": "製品",
				"j": "価格設定",
				"m": "チーム",
				"a": "ブログ",
				"b": "採用情報",
				"d": "よくある質問",
				"c": "お問い合わせ",
				"l": "設定",
				"g": "ホーム",
				"h": "方法論",
				"i": "モックページ",
				"e": "GitHub へ"
			},
			"ko": {
				"f": "헤더",
				"k": "제품",
				"j": "가격",
				"m": "팀",
				"a": "블로그",
				"b": "채용",
				"d": "자주 묻는 질문",
				"c": "문의",
				"l": "설정",
				"g": "홈",
				"h": "방법론",
				"i": "모ック 페이지",
				"e": "GitHub으로 이동"
			},
			"ru": {
				"f": "Заголовок",
				"k": "Продукты",
				"j": "Цены",
				"m": "Команда",
				"a": "Блог",
				"b": "Вакансии",
				"d": "FAQ",
				"c": "Контакт",
				"l": "Настройки",
				"g": "Главная",
				"h": "Методология",
				"i": "Мок-страницы",
				"e": "Перейти на GitHub"
			}
		}
	}
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
var getLocaleName = (locale) => {
	try {
		const name = new Intl.DisplayNames([locale], { type: "language" }).of(locale);
		return name ? name.charAt(0).toUpperCase() + name.slice(1) : locale;
	} catch {
		return locale.toUpperCase();
	}
};
var _tmpl$$2 = template(`<div class="flex items-center gap-2"><select class="h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-primary">`);
var _tmpl$2$1 = template(`<option>`);
function LocaleSwitcher() {
	const params = useParams();
	const navigate = useNavigate();
	const location = useLocation();
	const handleLocaleChange = (newLocale) => {
		const newPath = location.pathname.replace(/^\/[^/]+/, `/${newLocale}`);
		navigate(`${newPath}${location.search}${location.hash}`);
	};
	return (() => {
		var _el$ = _tmpl$$2(), _el$2 = _el$.firstChild;
		_el$2.addEventListener("change", (e) => handleLocaleChange(e.currentTarget.value));
		insert(_el$2, createComponent(For, {
			each: locales,
			children: (localeItem) => (() => {
				var _el$3 = _tmpl$2$1();
				_el$3.value = localeItem;
				insert(_el$3, () => getLocaleName(localeItem));
				return _el$3;
			})()
		}));
		effect(() => _el$2.value = params.locale ?? "en");
		return _el$;
	})();
}
var theme_toggle_default = {
	key: "theme-toggle",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"d": "Theme mode: auto (system). Click to switch to light mode.",
				"a": "Theme: Auto",
				"b": "Theme: Dark",
				"c": "Theme: Light"
			},
			"fr": {
				"d": "Mode thématique : auto (système). Cliquez pour passer en mode clair.",
				"a": "Thème : Auto",
				"b": "Thème : Sombre",
				"c": "Thème : Clair"
			},
			"es": {
				"d": "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
				"a": "Tema: Automático",
				"b": "Tema: Oscuro",
				"c": "Tema: Claro"
			},
			"de": {
				"d": "Design-Modus: Auto (System). Klicken Sie hier, um in den hellen Modus zu wechseln.",
				"a": "Design: Auto",
				"b": "Design: Dunkel",
				"c": "Design: Hell"
			},
			"it": {
				"d": "Modalità tema: auto (sistema). Fai clic per passare alla modalità chiara.",
				"a": "Tema: Auto",
				"b": "Tema: Scuro",
				"c": "Tema: Chiaro"
			},
			"pt": {
				"d": "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
				"a": "Tema: Automático",
				"b": "Tema: Escuro",
				"c": "Tema: Claro"
			},
			"zh": {
				"d": "主题模式：自动（系统）。点击切换到亮色模式。",
				"a": "主题：自动",
				"b": "主题：深色",
				"c": "主题：亮色"
			},
			"ja": {
				"d": "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。",
				"a": "テーマ：自動",
				"b": "テーマ：ダーク",
				"c": "テーマ：ライト"
			},
			"ko": {
				"d": "테마 모드: 자동(시스템). 라이트 모드로 전환하려면 클릭하세요.",
				"a": "테마: 자동",
				"b": "테마: 다크",
				"c": "테마: 라이트"
			},
			"ru": {
				"d": "Режим темы: авто (системный). Нажмите, чтобы перейти в светлую тему.",
				"a": "Тема: Авто",
				"b": "Тема: Темная",
				"c": "Тема: Светлая"
			}
		}
	}
};
var _tmpl$$1 = template(`<button type=button class="rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80">`);
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
function ThemeToggle() {
	const content = o(theme_toggle_default);
	const [mode, setMode] = createSignal("auto");
	onMount(() => {
		const initialMode = getInitialMode();
		setMode(initialMode);
		applyThemeMode(initialMode);
	});
	createEffect(() => {
		if (mode() !== "auto") return;
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => applyThemeMode("auto");
		media.addEventListener("change", onChange);
		return () => {
			media.removeEventListener("change", onChange);
		};
	});
	function toggleMode() {
		const current = mode();
		const nextMode = current === "light" ? "dark" : current === "dark" ? "auto" : "light";
		setMode(nextMode);
		applyThemeMode(nextMode);
		window.localStorage.setItem("theme", nextMode);
	}
	const label = () => mode() === "auto" ? content().d.value : `Theme mode: ${mode()}. Click to switch mode.`;
	const buttonText = () => mode() === "auto" ? content().a.value : mode() === "dark" ? content().b.value : content().c.value;
	return (() => {
		var _el$ = _tmpl$$1();
		_el$.$$click = toggleMode;
		insert(_el$, buttonText);
		effect((_p$) => {
			var _v$ = label(), _v$2 = label();
			_v$ !== _p$.e && setAttribute(_el$, "aria-label", _p$.e = _v$);
			_v$2 !== _p$.t && setAttribute(_el$, "title", _p$.t = _v$2);
			return _p$;
		}, {
			e: void 0,
			t: void 0
		});
		return _el$;
	})();
}
delegateEvents(["click"]);
var _tmpl$ = template(`<svg width=14 height=14 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round aria-hidden=true><path d="m6 9 6 6 6-6">`);
var _tmpl$2 = template(`<header class="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg"><nav class="container flex h-16 items-center justify-between"><div class="flex items-center gap-8"><div class="hidden items-center gap-6 text-sm font-medium md:flex"><div class=relative><button type=button class="flex cursor-pointer items-center gap-1 border-none bg-transparent nav-link"></button></div></div></div><div class="flex items-center gap-4"><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class="text-muted-foreground transition hover:text-foreground"><span class=sr-only></span><svg viewBox="0 0 16 16"aria-hidden=true width=20 height=20><path fill=currentColor d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">`);
var _tmpl$3 = template(`<div class="absolute left-0 top-full w-48 pt-2"><div class="overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg">`);
function ChevronDown(props) {
	return (() => {
		var _el$ = _tmpl$();
		effect(() => setAttribute(_el$, "class", props.class));
		return _el$;
	})();
}
function Header() {
	const content = o(header_default);
	usePerformanceMeasure(content().f.value);
	const [isMockPagesOpen, setIsMockPagesOpen] = createSignal(false);
	const params = useParams();
	const currentLocale = () => params.locale ?? "en";
	const mockPages = () => [
		{
			to: `/${currentLocale()}/products`,
			label: content().k.value
		},
		{
			to: `/${currentLocale()}/pricing`,
			label: content().j.value
		},
		{
			to: `/${currentLocale()}/team`,
			label: content().m.value
		},
		{
			to: `/${currentLocale()}/blog`,
			label: content().a.value
		},
		{
			to: `/${currentLocale()}/careers`,
			label: content().b.value
		},
		{
			to: `/${currentLocale()}/faq`,
			label: content().d.value
		},
		{
			to: `/${currentLocale()}/contact`,
			label: content().c.value
		},
		{
			to: `/${currentLocale()}/settings`,
			label: content().l.value
		}
	];
	return (() => {
		var _el$2 = _tmpl$2(), _el$4 = _el$2.firstChild.firstChild, _el$5 = _el$4.firstChild, _el$6 = _el$5.firstChild, _el$7 = _el$6.firstChild, _el$8 = _el$4.nextSibling, _el$0 = _el$8.firstChild.firstChild;
		insert(_el$4, createComponent(A, {
			get href() {
				return `/${currentLocale()}`;
			},
			"class": "text-lg font-bold tracking-tight text-primary no-underline",
			children: "i18n Bench"
		}), _el$5);
		insert(_el$5, createComponent(A, {
			get href() {
				return `/${currentLocale()}`;
			},
			end: true,
			"class": "nav-link",
			activeClass: "is-active",
			inactiveClass: "",
			get children() {
				return content().g;
			}
		}), _el$6);
		insert(_el$5, createComponent(A, {
			get href() {
				return `/${currentLocale()}/about`;
			},
			"class": "nav-link",
			activeClass: "is-active",
			inactiveClass: "",
			get children() {
				return content().h;
			}
		}), _el$6);
		_el$7.$$click = () => setIsMockPagesOpen(!isMockPagesOpen());
		_el$7.addEventListener("mouseleave", () => setIsMockPagesOpen(false));
		_el$7.addEventListener("mouseenter", () => setIsMockPagesOpen(true));
		insert(_el$7, () => content().i, null);
		insert(_el$7, createComponent(ChevronDown, { get ["class"]() {
			return `transition-transform ${isMockPagesOpen() ? "rotate-180" : ""}`;
		} }), null);
		insert(_el$6, (() => {
			var _c$ = memo(() => !!isMockPagesOpen());
			return () => _c$() && (() => {
				var _el$1 = _tmpl$3(), _el$10 = _el$1.firstChild;
				_el$1.addEventListener("mouseleave", () => setIsMockPagesOpen(false));
				_el$1.addEventListener("mouseenter", () => setIsMockPagesOpen(true));
				insert(_el$10, createComponent(For, {
					get each() {
						return mockPages();
					},
					children: (page) => createComponent(A, {
						get href() {
							return page.to;
						},
						"class": "block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent",
						onClick: () => setIsMockPagesOpen(false),
						get children() {
							return page.label;
						}
					})
				}));
				return _el$1;
			})();
		})(), null);
		insert(_el$0, () => content().e);
		insert(_el$8, createComponent(LocaleSwitcher, {}), null);
		insert(_el$8, createComponent(ThemeToggle, {}), null);
		return _el$2;
	})();
}
delegateEvents(["click"]);
function Layout(props) {
	const params = useParams();
	const start = typeof performance !== "undefined" ? performance.now() : 0;
	onMount(() => {
		recordHydrationDuration();
		recordRenderTime("AppRoot", start);
	});
	createEffect(() => {
		document.documentElement.lang = params.locale ?? "en";
	});
	return createComponent(C, {
		get locale() {
			return params.locale;
		},
		get children() {
			return [
				createComponent(Header, {}),
				memo(() => props.children),
				createComponent(Footer, {})
			];
		}
	});
}
export { Layout as default };
