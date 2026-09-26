import { createComponent, insert, template } from "solid-js/web";
import { For, createContext, createMemo, createRenderEffect, createResource, lazy, untrack, useContext } from "solid-js";
var checkIsURLAbsolute = (url) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url);
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
var getDomainHostname = (domain) => {
	try {
		return /^https?:\/\//.test(domain) ? new URL(domain).hostname : domain;
	} catch {
		return domain;
	}
};
var getLocaleFromDomain = (hostname, domains) => {
	if (!domains) return void 0;
	const matchingLocales = Object.entries(domains).filter(([, domain]) => typeof domain === "string" && getDomainHostname(domain) === hostname);
	return matchingLocales.length === 1 ? matchingLocales[0]?.[0] : void 0;
};
var LOCALES = ["en"];
var PRELOADED_DYNAMIC_KEY = "__intlayerPreloaded";
var resolveRoutingConfig = (options = {}) => ({
	...options,
	defaultLocale: options.defaultLocale ?? internationalization?.defaultLocale ?? "en",
	mode: options.mode ?? routing?.mode ?? "prefix-no-default",
	locales: options.locales ?? internationalization?.locales ?? LOCALES,
	rewrite: options.rewrite ?? routing?.rewrite,
	domains: options.domains ?? routing?.domains
});
var isDeclaredLocale = (value, locales) => !!value && (locales ?? internationalization.locales).includes(value);
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
var getLocaleFromPath = (inputUrl = "/", options) => {
	const { defaultLocale, locales, mode } = resolveRoutingConfig(options);
	if (!defaultLocale || !locales) return defaultLocale;
	const isAbsoluteUrl = checkIsURLAbsolute(inputUrl);
	const fixedInputUrl = inputUrl?.endsWith("/") && inputUrl.length > 1 ? inputUrl.slice(0, -1) : inputUrl;
	const url = isAbsoluteUrl ? new URL(fixedInputUrl) : new URL(fixedInputUrl, "http://e.com");
	if (mode === "search-params") {
		const localeParam = url.searchParams.get("locale");
		if (isDeclaredLocale(localeParam, locales)) return localeParam;
		return defaultLocale;
	}
	if (mode === "no-prefix") return defaultLocale;
	const firstSegment = url.pathname.split("/")[1];
	if (isDeclaredLocale(firstSegment, locales)) return firstSegment;
	if (mode === "prefix-no-default") return defaultLocale;
};
var resolveBrowserLocale = (options) => {
	const { defaultLocale, mode, domains } = resolveRoutingConfig(options);
	if (typeof window === "undefined") return defaultLocale;
	if (domains) {
		const localeFromDomain = getLocaleFromDomain(window.location.hostname, domains);
		if (localeFromDomain) return localeFromDomain;
	}
	if (mode === "prefix-all" || mode === "prefix-no-default" || mode === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		const localeFromPath = getLocaleFromPath(window.location.pathname + window.location.search, options);
		if (localeFromPath) return localeFromPath;
	}
	return getLocaleFromStorageClient() ?? defaultLocale;
};
var memoizedUrl;
var memoizedLocale;
var getPreloadLocale = () => {
	const currentUrl = typeof window === "undefined" ? "" : window.location.pathname + window.location.search;
	if (memoizedLocale === void 0 || memoizedUrl !== currentUrl) {
		memoizedUrl = currentUrl;
		memoizedLocale = resolveBrowserLocale();
	}
	return memoizedLocale;
};
var content = {
	"de": () => import("./intlayer-WhatWeMeasure-1284rs-de-Dsgr-cgn.js").then((n) => n.t).then((m) => m.default),
	"en": () => import("./intlayer-WhatWeMeasure-1284rs-en-DMoYK_7H.js").then((n) => n.t).then((m) => m.default),
	"es": () => import("./intlayer-WhatWeMeasure-1284rs-es-wXwCgyEw.js").then((n) => n.t).then((m) => m.default),
	"fr": () => import("./intlayer-WhatWeMeasure-1284rs-fr-I2qinqL9.js").then((n) => n.t).then((m) => m.default),
	"it": () => import("./intlayer-WhatWeMeasure-1284rs-it-f20lUXXD.js").then((n) => n.t).then((m) => m.default),
	"ja": () => import("./intlayer-WhatWeMeasure-1284rs-ja-N4rzJu4M.js").then((n) => n.t).then((m) => m.default),
	"ko": () => import("./intlayer-WhatWeMeasure-1284rs-ko-B0KhkI5H.js").then((n) => n.t).then((m) => m.default),
	"pt": () => import("./intlayer-WhatWeMeasure-1284rs-pt-Bd3zbKVi.js").then((n) => n.t).then((m) => m.default),
	"ru": () => import("./intlayer-WhatWeMeasure-1284rs-ru-DJpzDkox.js").then((n) => n.t).then((m) => m.default),
	"zh": () => import("./intlayer-WhatWeMeasure-1284rs-zh-Cmd1RhD5.js").then((n) => n.t).then((m) => m.default)
};
var __intlayerLocale = getPreloadLocale();
var __intlayerLoader = content[__intlayerLocale];
if (typeof window !== "undefined" && typeof __intlayerLoader === "function") __intlayerLoader().then((__intlayerDictionary) => {
	content["__intlayerPreloaded"] = {
		locale: __intlayerLocale,
		dictionary: __intlayerDictionary
	};
}, () => void 0);
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
var getPreloadedDictionary = (loaderMap, locale) => {
	if (typeof loaderMap !== "object" || loaderMap === null) return void 0;
	const preloaded = loaderMap[PRELOADED_DYNAMIC_KEY];
	if (!preloaded || preloaded.locale !== locale) return void 0;
	return preloaded.dictionary;
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
var A = fallbackPlugin;
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
		A,
		P,
		I
	].filter((e) => e !== fallbackPlugin);
	return L.set(n, r), r;
};
var n = (n, r) => {
	return getDictionary(n, r, R(typeof r == "object" && r ? r.locale : r));
};
var o$2 = getCachedLocaleFromStorageClient;
var b = createContext({
	locale: () => o$2() ?? internationalization?.defaultLocale,
	setLocale: () => null
});
var e = {
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
};
var i = Symbol("NO_PENDING_PRIMITIVE_FALLBACK");
var a = Symbol("LOADABLE_SETTLED_VALUE");
var o$1 = /* @__PURE__ */ new Map();
var s = (e) => typeof e == "string" ? e : e.cacheKey;
var c = (e, t) => t.reduce((e, t) => {
	if (e != null) return Reflect.get(Object(e), t);
}, e);
var l = (e, t) => typeof e == "function" ? e(t) : e;
var u = (e, t) => {
	let n = s(e), r = o$1.get(n);
	if (r?.status === "success") return r.value;
	if (r?.status === "pending") return r.promise;
	let i = l(t, e).then((e) => (o$1.set(n, {
		status: "success",
		value: e
	}), e), (e) => {
		throw o$1.delete(n), e;
	});
	return o$1.set(n, {
		status: "pending",
		promise: i
	}), i;
};
var d = (e, t) => {
	let n = s(e);
	o$1.has(n) || o$1.set(n, {
		status: "success",
		value: t
	});
};
var f = (e, t) => typeof t == "function" ? t.bind(e) : t;
var p = (t) => t === Symbol.toPrimitive ? () => "" : t === Symbol.iterator ? () => ({ next: () => ({
	done: !0,
	value: void 0
}) }) : t === "length" ? 0 : t === e.toString ? () => "" : t === e.valueOf ? () => void 0 : t === e.value ? "" : i;
var m = (t) => {
	let n = (o) => new Proxy(() => void 0, {
		get(r, s) {
			if (s === e.promiseThen) return;
			let l = c(t(), o);
			if (s === a) return l;
			if (l != null) return s === Symbol.toPrimitive ? () => l : f(l, Reflect.get(Object(l), s));
			let u = p(s);
			return u === i ? n([...o, s]) : u;
		},
		apply(e, n, i) {
			let a = c(t(), o);
			return typeof a == "function" ? Reflect.apply(a, n, i) : i.length === 0 ? a ?? "" : m(() => {
				let e = c(t(), o);
				if (typeof e == "function") return untrack(() => Reflect.apply(e, n, i));
			});
		}
	});
	return n([]);
};
var h = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[a];
};
var g = (e, r) => {
	let [i] = createResource(() => typeof e == "function" ? e() : e, (e) => u(e, r));
	return createRenderEffect(() => {
		i();
	}), m(() => i());
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
var _ = (_, v, y) => {
	let { locale: x } = useContext(b) ?? {}, S = internationalization.defaultLocale, C = String(v);
	let w = _, T = y, E = () => T ?? x?.() ?? S, D = () => {
		let e = E();
		return {
			cacheKey: `${C}.${e}`,
			locale: e
		};
	}, O = ({ locale: e }) => {
		let t = w[e];
		return t ? t() : Promise.reject(Error(`No dynamic dictionary loader found for key "${C}" and locale "${e}".`));
	}, k = getPreloadedDictionary(w, E());
	k && d(D(), k);
	return o(g(D, O), T);
};
var _tmpl$ = template(`<section class="mx-auto mt-12 max-w-3xl"><h2 class="mb-4 text-2xl font-bold text-foreground"></h2><ul class=space-y-4>`);
var _tmpl$2 = template(`<li class="rounded-md border border-border p-4"><span class="block text-sm font-bold text-primary"></span><span class="mt-1 block text-sm text-muted-foreground">`);
function WhatWeMeasure() {
	const content$1 = _(content, "what-we-measure");
	const metrics = () => [
		{
			metric: content$1().a.value,
			desc: content$1().i.value
		},
		{
			metric: content$1().h.value,
			desc: content$1().d.value
		},
		{
			metric: content$1().e.value,
			desc: content$1().b.value
		},
		{
			metric: content$1().f.value,
			desc: content$1().k.value
		},
		{
			metric: content$1().g.value,
			desc: content$1().c.value
		}
	];
	return (() => {
		var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
		insert(_el$2, () => content$1().j);
		insert(_el$3, createComponent(For, {
			get each() {
				return metrics();
			},
			children: (m) => (() => {
				var _el$4 = _tmpl$2(), _el$5 = _el$4.firstChild, _el$6 = _el$5.nextSibling;
				insert(_el$5, () => m.metric);
				insert(_el$6, () => m.desc);
				return _el$4;
			})()
		}));
		return _el$;
	})();
}
export { WhatWeMeasure as default };
import { t as __exportAll } from "./rolldown-runtime-DpJrqANO.js";
var de_exports = __exportAll({
	content: () => content,
	default: () => de_default,
	key: () => key
});
var key = "what-we-measure";
var content = {
	"a": "Auswirkungen auf die Bundle-Größe",
	"i": "Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Downloadzeit in langsamen Netzwerken aus.",
	"h": "Rendering-Overhead",
	"d": "Wie viel zusätzliche Zeit die Bibliothek dem Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontextanbieter injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.",
	"e": "Hydrierungskosten",
	"b": "Während SSR werden Übersetzungsdaten in HTML serialisiert. Große Wörterbücher erhöhen die HTML-Nutzlast und verlangsamen die Hydrierung — den Moment, in dem die Seite interaktiv wird.",
	"f": "Effektivität von Lazy Loading",
	"k": "Ob das Aufteilen von Übersetzungen nach Route oder Namespace die anfängliche Belastung tatsächlich reduziert und welche Kompromisse dies mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).",
	"g": "Geschwindigkeit beim Gebietschemata-Wechsel",
	"c": "Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des Re-Renderings von Komponenten und der Aktualisierung des DOM.",
	"j": "Was wir messen"
};
var de_default = {
	key,
	content
};
export { de_exports as t };
import { t as __exportAll } from "./rolldown-runtime-DpJrqANO.js";
var en_exports = __exportAll({
	content: () => content,
	default: () => en_default,
	key: () => key
});
var key = "what-we-measure";
var content = {
	"a": "Bundle size impact",
	"i": "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
	"h": "Rendering overhead",
	"d": "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
	"e": "Hydration cost",
	"b": "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
	"f": "Lazy loading effectiveness",
	"k": "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
	"g": "Locale switch speed",
	"c": "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
	"j": "What We Measure"
};
var en_default = {
	key,
	content
};
export { en_exports as t };
import { t as __exportAll } from "./rolldown-runtime-DpJrqANO.js";
var es_exports = __exportAll({
	content: () => content,
	default: () => es_default,
	key: () => key
});
var key = "what-we-measure";
var content = {
	"a": "Impacto en el tamaño del paquete",
	"i": "Los bytes adicionales de JavaScript enviados a los usuarios cuando se incluyen la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.",
	"h": "Sobrecarga de renderizado",
	"d": "Cuánto tiempo adicional añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar re-renderizaciones innecesarias en todo el árbol de componentes.",
	"e": "Coste de hidratación",
	"b": "Durante el SSR, los datos de traducción se serializan en HTML. Los diccionarios grandes aumentan la carga útil de HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.",
	"f": "Efectividad de la carga diferida",
	"k": "Si la división de las traducciones por ruta o espacio de nombres reduce realmente la carga inicial y qué compromisos introduce (solicitudes en cascada, FOUC, complejidad de la caché).",
	"g": "Velocidad de cambio de idioma",
	"c": "Qué tan rápido la aplicación puede cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, la re-renderización de componentes y la actualización del DOM.",
	"j": "Qué medimos"
};
var es_default = {
	key,
	content
};
export { es_exports as t };
import { t as __exportAll } from "./rolldown-runtime-DpJrqANO.js";
var fr_exports = __exportAll({
	content: () => content,
	default: () => fr_default,
	key: () => key
});
var key = "what-we-measure";
var content = {
	"a": "Impact sur la taille du bundle",
	"i": "Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers de traduction sont inclus. Cela affecte directement le temps de téléchargement sur les réseaux lents.",
	"h": "Surcharge de rendu",
	"d": "Combien de temps supplémentaire la bibliothèque ajoute au cycle de rendu de React. Les bibliothèques qui injectent des traductions via un seul fournisseur de contexte peuvent provoquer des re-rendus inutiles dans l'arbre des composants.",
	"e": "Coût d'hydratation",
	"b": "Pendant le SSR, les données de traduction sont sérialisées en HTML. Les dictionnaires volumineux augmentent le payload HTML et ralentissent l'hydratation — le moment où la page devient interactive.",
	"f": "Efficacité du chargement différé",
	"k": "Si la division des traductions par route ou par espace de noms réduit réellement la charge initiale, et quels compromis elle introduit (requêtes en cascade, FOUC, complexité du cache).",
	"g": "Vitesse de changement de langue",
	"c": "À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération de nouvelles traductions, le rendu des composants et la mise à jour du DOM.",
	"j": "Ce que nous mesurons"
};
var fr_default = {
	key,
	content
};
export { fr_exports as t };
import { t as __exportAll } from "./rolldown-runtime-DpJrqANO.js";
var it_exports = __exportAll({
	content: () => content,
	default: () => it_default,
	key: () => key
});
var key = "what-we-measure";
var content = {
	"a": "Impatto sulla dimensione del bundle",
	"i": "I byte JavaScript aggiuntivi inviati agli utenti quando vengono incluse la libreria i18n e i suoi file di traduzione. Ciò influisce direttamente sul tempo di download su reti lente.",
	"h": "Overhead di rendering",
	"d": "Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un singolo fornitore di contesto possono causare re-rendering non necessari nell'albero dei componenti.",
	"e": "Costo di idratazione",
	"b": "Durante il SSR, i dati di traduzione vengono serializzati in HTML. I dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione, il momento in cui la pagina diventa interattiva.",
	"f": "Efficacia del lazy loading",
	"k": "Se la suddivisione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste waterfall, FOUC, complessità della cache).",
	"g": "Velocità di cambio lingua",
	"c": "Quanto velocemente l'app può passare da una lingua all'altra in fase di runtime, inclusi il recupero di nuove traduzioni, il re-rendering dei componenti e l'aggiornamento del DOM.",
	"j": "Cosa misuriamo"
};
var it_default = {
	key,
	content
};
export { it_exports as t };
import { t as __exportAll } from "./rolldown-runtime-DpJrqANO.js";
var ja_exports = __exportAll({
	content: () => content,
	default: () => ja_default,
	key: () => key
});
var key = "what-we-measure";
var content = {
	"a": "バンドルサイズの影響",
	"i": "i18nライブラリとその翻訳ファイルが含まれているときにユーザーに送信される追加のJavaScriptバイト。これは、低速ネットワークでのダウンロード時間に直接影響します。",
	"h": "レンダリングオーバーヘッド",
	"d": "ライブラリがReactのレンダリングサイクルにどれだけの時間を追加するか。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要なリレンダリングを引き起こす可能性があります。",
	"e": "ハイドレーションコスト",
	"b": "SSR中、翻訳データはHTMLにシリアル化されます。大きな辞書はHTMLペイロードを増加させ、ハイドレーション（ページがインタラクティブになる瞬間）を遅らせます。",
	"f": "遅延ロードの有効性",
	"k": "ルートまたは名前空間ごとに翻訳を分割することが実際に初期ロードを削減するかどうか、およびどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）が導入されるか。",
	"g": "ロケール切り替え速度",
	"c": "新しい翻訳の取得、コンポーネントのリレンダリング、DOMの更新を含め、実行時にアプリが1つの言語から別の言語にどれだけ速く切り替えられるか。",
	"j": "測定内容"
};
var ja_default = {
	key,
	content
};
export { ja_exports as t };
import { t as __exportAll } from "./rolldown-runtime-DpJrqANO.js";
var ko_exports = __exportAll({
	content: () => content,
	default: () => ko_default,
	key: () => key
});
var key = "what-we-measure";
var content = {
	"a": "번들 크기 영향",
	"i": "i18n 라이브러리 및 해당 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다.",
	"h": "렌더링 오버헤드",
	"d": "라이브러리가 React의 렌더링 주기에 추가하는 추가 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 삽입하는 라이브러리는 컴포넌트 트리 전체에서 불필요한 리렌더링을 유발할 수 있습니다.",
	"e": "수화 비용",
	"b": "SSR 중에는 번역 데이터가 HTML로 직렬화됩니다. 대용량 사전은 HTML 페이로드를 증가시키고 페이지가 대화형이 되는 순간인 수화를 늦춥니다.",
	"f": "지연 로딩 효과",
	"k": "경로 또는 네임스페이스별로 번역을 분할하는 것이 실제로 초기 로드를 줄이는지, 그리고 어떤 트레이드오프(워터폴 요청, FOUC, 캐시 복잡성)를 유발하는지 여부입니다.",
	"g": "로케일 전환 속도",
	"c": "새 번역 가져오기, 컴포넌트 리렌더링 및 DOM 업데이트를 포함하여 런타임에 앱이 한 언어에서 다른 언어로 얼마나 빨리 전환할 수 있는지입니다.",
	"j": "측정 항목"
};
var ko_default = {
	key,
	content
};
export { ko_exports as t };
import { t as __exportAll } from "./rolldown-runtime-DpJrqANO.js";
var pt_exports = __exportAll({
	content: () => content,
	default: () => pt_default,
	key: () => key
});
var key = "what-we-measure";
var content = {
	"a": "Impacto no tamanho do pacote",
	"i": "Os bytes JavaScript adicionais enviados aos usuários quando a biblioteca i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.",
	"h": "Sobrecarga de renderização",
	"d": "Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções por meio de um único provedor de contexto podem causar renderizações desnecessárias em toda a árvore de componentes.",
	"e": "Custo de hidratação",
	"b": "Durante o SSR, os dados de tradução são serializados em HTML. Dicionários grandes aumentano o payload HTML e retardam a hidratação — o momento em que a página se torna interativa.",
	"f": "Eficácia do carregamento lento",
	"k": "Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais trade-offs ela introduz (requisições em cascata, FOUC, complexità de cache).",
	"g": "Velocidade de troca de idioma",
	"c": "Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a renderização de componentes e a atualização do DOM.",
	"j": "O que medimos"
};
var pt_default = {
	key,
	content
};
export { pt_exports as t };
import { t as __exportAll } from "./rolldown-runtime-DpJrqANO.js";
var ru_exports = __exportAll({
	content: () => content,
	default: () => ru_default,
	key: () => key
});
var key = "what-we-measure";
var content = {
	"a": "Влияние на размер бандла",
	"i": "Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и её файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.",
	"h": "Накладные расходы на рендеринг",
	"d": "Сколько дополнительного времени библиотека добавляет к циклу рендеринга React. Библиотеки, которые внедряют переводы через одного провайдера контекста, могут вызывать ненужные повторные рендеринги во всем дереве компонентов.",
	"e": "Стоимость гидратации",
	"b": "Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают размер HTML-пейлоада и замедляют гидратацию — момент, когда страница становится интерактивной.",
	"f": "Эффективность ленивой загрузки",
	"k": "Действительно ли разделение переводов по маршрутам или пространствам имен уменьшает начальную загрузку, и какие компромиссы оно привносит (каскадные запросы, FOUC, сложность кэширования).",
	"g": "Скорость переключения локали",
	"c": "Как быстро приложение может переключаться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.",
	"j": "Что мы измеряем"
};
var ru_default = {
	key,
	content
};
export { ru_exports as t };
import { t as __exportAll } from "./rolldown-runtime-DpJrqANO.js";
var zh_exports = __exportAll({
	content: () => content,
	default: () => zh_default,
	key: () => key
});
var key = "what-we-measure";
var content = {
	"a": "捆绑包大小影响",
	"i": "包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络上的下载时间。",
	"h": "渲染开销",
	"d": "库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树发生不必要的重新渲染。",
	"e": "水合成本",
	"b": "在 SSR 期间，翻译数据被序列化为 HTML。大型字典会增加 HTML 负载并减慢水合过程（即页面变得可交互的时刻）。",
	"f": "延迟加载效果",
	"k": "按路由或命名空间拆分翻译是否真的减少了初始加载，以及它引入了哪些权衡（瀑布请求、FOUC、缓存复杂性）。",
	"g": "语言环境切换速度",
	"c": "应用程序在运行时从一种语言切换到另一种语言的速度——包括获取新翻译、重新渲染组件和更新 DOM。",
	"j": "我们测量什么"
};
var zh_default = {
	key,
	content
};
export { zh_exports as t };
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
export { __exportAll as t };
