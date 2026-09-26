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
	"de": () => import("./intlayer-ProductsGrid-1geobf-de-DZ9JReaG.js").then((n) => n.t).then((m) => m.default),
	"en": () => import("./intlayer-ProductsGrid-1geobf-en-BLaR0K-B.js").then((n) => n.t).then((m) => m.default),
	"es": () => import("./intlayer-ProductsGrid-1geobf-es-Bjt1j5pk.js").then((n) => n.t).then((m) => m.default),
	"fr": () => import("./intlayer-ProductsGrid-1geobf-fr-ydSBueGo.js").then((n) => n.t).then((m) => m.default),
	"it": () => import("./intlayer-ProductsGrid-1geobf-it-DKzfawUJ.js").then((n) => n.t).then((m) => m.default),
	"ja": () => import("./intlayer-ProductsGrid-1geobf-ja-5WLR5uYJ.js").then((n) => n.t).then((m) => m.default),
	"ko": () => import("./intlayer-ProductsGrid-1geobf-ko-yZc4yy7n.js").then((n) => n.t).then((m) => m.default),
	"pt": () => import("./intlayer-ProductsGrid-1geobf-pt-B6_lnPPx.js").then((n) => n.t).then((m) => m.default),
	"ru": () => import("./intlayer-ProductsGrid-1geobf-ru-BHdf85Mp.js").then((n) => n.t).then((m) => m.default),
	"zh": () => import("./intlayer-ProductsGrid-1geobf-zh-CbBbd__6.js").then((n) => n.t).then((m) => m.default)
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
var _tmpl$ = template(`<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">`);
var _tmpl$2 = template(`<div class="flex flex-col justify-between rounded-lg border border-border bg-card p-6"><div><h3 class="mb-2 text-lg font-semibold text-foreground"></h3><p class="mb-4 text-sm text-muted-foreground"></p></div><div class="flex items-center justify-between"><span class="text-sm font-bold text-primary"></span><button type=button class="rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90">`);
function ProductsGrid() {
	const content$1 = _(content, "products-grid");
	const products = () => [
		{
			name: content$1().e.value,
			desc: content$1().n.value,
			price: content$1().j.value
		},
		{
			name: content$1().f.value,
			desc: content$1().c.value,
			price: "$29/mo"
		},
		{
			name: content$1().g.value,
			desc: content$1().m.value,
			price: content$1().i.value
		},
		{
			name: content$1().l.value,
			desc: content$1().a.value,
			price: "$99 one-time"
		},
		{
			name: content$1().o.value,
			desc: content$1().d.value,
			price: "$19/mo"
		},
		{
			name: content$1().h.value,
			desc: content$1().b.value,
			price: "$49/mo"
		}
	];
	return (() => {
		var _el$ = _tmpl$();
		insert(_el$, createComponent(For, {
			get each() {
				return products();
			},
			children: (p) => (() => {
				var _el$2 = _tmpl$2(), _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, _el$5 = _el$4.nextSibling, _el$7 = _el$3.nextSibling.firstChild, _el$8 = _el$7.nextSibling;
				insert(_el$4, () => p.name);
				insert(_el$5, () => p.desc);
				insert(_el$7, () => p.price);
				insert(_el$8, () => content$1().k);
				return _el$2;
			})()
		}));
		return _el$;
	})();
}
export { ProductsGrid as default };
import { t as __exportAll } from "./rolldown-runtime-DpJrqANO.js";
var de_exports = __exportAll({
	content: () => content,
	default: () => de_default,
	key: () => key
});
var key = "products-grid";
var content = {
	"e": "Benchmark CLI",
	"n": "Führen Sie Benchmarks lokal von Ihrem Terminal aus durch. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.",
	"j": "Kostenlos",
	"f": "Benchmark Cloud",
	"c": "Automatisiertes cloudbasiertes Benchmarking mit historischer Nachverfolgung, Warnungen und Team-Dashboards.",
	"g": "Benchmark Enterprise",
	"m": "On-Premise-Bereitstellung mit SSO, Audit-Logs, benutzerdefinierten SLAs und dediziertem Support.",
	"i": "Kontaktieren Sie uns",
	"l": "Migrationsassistent",
	"a": "KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.",
	"o": "Übersetzungs-QA",
	"d": "Automatisierte Qualitätsprüfungen auf fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.",
	"h": "Bundle-Optimierer",
	"b": "Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.",
	"k": "Mehr erfahren"
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
var key = "products-grid";
var content = {
	"e": "Benchmark CLI",
	"n": "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
	"j": "Free",
	"f": "Benchmark Cloud",
	"c": "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
	"g": "Benchmark Enterprise",
	"m": "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
	"i": "Contact Us",
	"l": "Migration Assistant",
	"a": "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
	"o": "Translation QA",
	"d": "Automated quality checks for missing translations, pluralization issues, and context errors.",
	"h": "Bundle Optimizer",
	"b": "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
	"k": "Learn More"
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
var key = "products-grid";
var content = {
	"e": "CLI de Benchmark",
	"n": "Ejecute benchmarks localmente desde su terminal. Admite configuraciones personalizadas e integración de CI.",
	"j": "Gratis",
	"f": "Benchmark Cloud",
	"c": "Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.",
	"g": "Benchmark Enterprise",
	"m": "Despliegue local con SSO, registros de auditoría, SLA personalizados y soporte dedicado.",
	"i": "Contáctenos",
	"l": "Asistente de migración",
	"a": "Herramienta impulsada por IA que ayuda a migrar su base de código entre bibliotecas i18n sin tiempo de inactividad.",
	"o": "Control de calidad de traducción",
	"d": "Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.",
	"h": "Optimizador de bundle",
	"b": "Analiza y optimiza su bundle i18n para producción con tree-shaking y división de código.",
	"k": "Más información"
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
var key = "products-grid";
var content = {
	"e": "CLI Benchmark",
	"n": "Exécutez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l'intégration CI.",
	"j": "Gratuit",
	"f": "Benchmark Cloud",
	"c": "Benchmarking automatisé basé sur le cloud avec suivi historique, alertes et tableaux de bord d'équipe.",
	"g": "Benchmark Enterprise",
	"m": "Déploiement sur site avec SSO, journaux d'audit, SLA personnalisés et support dédié.",
	"i": "Contactez-nous",
	"l": "Assistant de migration",
	"a": "Outil alimenté par l'IA qui aide à migrer votre base de code entre les bibliothèques i18n sans temps d'arrêt.",
	"o": "QA de traduction",
	"d": "Contrôles de qualité automatisés pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.",
	"h": "Optimiseur de bundle",
	"b": "Analyse et optimise votre bundle i18n pour la production avec élimination des codes morts (tree-shaking) et fractionnement du code.",
	"k": "En savoir plus"
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
var key = "products-grid";
var content = {
	"e": "CLI del Benchmark",
	"n": "Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.",
	"j": "Gratis",
	"f": "Benchmark Cloud",
	"c": "Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.",
	"g": "Benchmark Enterprise",
	"m": "Distribuzione on-premise con SSO, log di controllo, SLA personalizzati e supporto dedicato.",
	"i": "Contattaci",
	"l": "Assistente alla migrazione",
	"a": "Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n senza tempi di inattività.",
	"o": "QA delle traduzioni",
	"d": "Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.",
	"h": "Ottimizzatore del bundle",
	"b": "Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.",
	"k": "Scopri di più"
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
var key = "products-grid";
var content = {
	"e": "ベンチマーク CLI",
	"n": "ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートします。",
	"j": "無料",
	"f": "ベンチマーククラウド",
	"c": "履歴の追跡、アラート、およびチームダッシュボードを備えた自動クラウドベースのベンチマーク。",
	"g": "ベンチマークエンタープライズ",
	"m": "SSO、監査ログ、カスタムSLA、および専用サポートを備えたオンプレミス展開。",
	"i": "お問い合わせ",
	"l": "移行アシスタント",
	"a": "i18nライブラリ間でコードベースをダウンタイムなしで移行するのを支援するAI搭載ツール。",
	"o": "翻訳QA",
	"d": "欠落している翻訳、複数形の問題、およびコンテキストエラーの自動品質チェック。",
	"h": "バンドルオプティマイザー",
	"b": "ツリーシェイキングとコード分割を使用して、本番用のi18nバンドルを分析および最適化します。",
	"k": "詳細はこちら"
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
var key = "products-grid";
var content = {
	"e": "벤치마크 CLI",
	"n": "터미널에서 로컬로 벤치마크를 실행합니다. 사용자 정의 구성 및 CI 통합을 지원합니다.",
	"j": "무료",
	"f": "벤치마크 클라우드",
	"c": "기록 추적, 알림 및 팀 대시보드를 갖춘 자동화된 클라우드 기반 벤치마킹.",
	"g": "벤치마크 엔터프라이즈",
	"m": "SSO, 감사 로그, 맞춤형 SLA 및 전담 지원을 갖춘 온프레미스 배포.",
	"i": "문의하기",
	"l": "마이그레이션 어시스턴트",
	"a": "다운타임 없이 i18n 라이브러리 간에 코드베이스를 마이그레이션하는 데 도움이 되는 AI 기반 도구입니다.",
	"o": "번역 QA",
	"d": "누락된 번역, 복수형 문제 및 컨텍스트 오류에 대한 자동 품질 검사.",
	"h": "번들 최적화 도구",
	"b": "트리 쉐이킹 및 코드 분할을 통해 프로덕션용 i18n 번들을 분석하고 최적화합니다.",
	"k": "자세히 알아보기"
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
var key = "products-grid";
var content = {
	"e": "CLI de Benchmark",
	"n": "Execute benchmarks localmente em seu terminal. Suporta configurações personalizadas e integração de CI.",
	"j": "Grátis",
	"f": "Benchmark Cloud",
	"c": "Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.",
	"g": "Benchmark Enterprise",
	"m": "Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.",
	"i": "Contate-nos",
	"l": "Assistente de migração",
	"a": "Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.",
	"o": "QA de tradução",
	"d": "Verificações de qualidade automatizadas para traduções ausentes, problemas de pluralização e erros de contexto.",
	"h": "Otimizador de bundle",
	"b": "Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.",
	"k": "Saiba Mais"
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
var key = "products-grid";
var content = {
	"e": "CLI для бенчмарков",
	"n": "Запускайте бенчмарки локально из терминала. Поддержка пользовательских конфигураций и интеграции с CI.",
	"j": "Бесплатно",
	"f": "Облачный бенчмарк",
	"c": "Автоматизированное облачное тестирование с отслеживанием истории, оповещениями и командными дашбордами.",
	"g": "Бенчмарк для предприятий",
	"m": "Локальное развертывание с поддержкой SSO, журналами аудита, индивидуальными SLA и выделенной поддержкой.",
	"i": "Связаться с нами",
	"l": "Помощник по миграции",
	"a": "Инструмент на базе ИИ, который помогает переносить кодовую базу между библиотеками i18n без простоев.",
	"o": "QA переводов",
	"d": "Автоматизированные проверки качества на наличие отсутствующих переводов, проблем с множественным числом и контекстных ошибок.",
	"h": "Оптимизатор бандла",
	"b": "Анализирует и оптимизирует ваш i18n-бандл для продакшена с помощью tree-shaking и разделения кода.",
	"k": "Узнать больше"
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
var key = "products-grid";
var content = {
	"e": "基准测试 CLI",
	"n": "从您的终端在本地运行基准测试。支持自定义配置和 CI 集成。",
	"j": "免费",
	"f": "基准测试云",
	"c": "具有历史跟踪、警报和团队仪表板的自动化云基准测试。",
	"g": "基准测试企业版",
	"m": "支持 SSO、审计日志、自定义 SLA 和专用支持的本地部署。",
	"i": "联系我们",
	"l": "迁移助手",
	"a": "人工智能驱动的工具，可帮助您在 i18n 库之间迁移代码库，实现零停机时间。",
	"o": "翻译质量保证",
	"d": "针对缺失翻译、复数问题和上下文错误的自动质量检查。",
	"h": "捆绑包优化器",
	"b": "通过摇树优化和代码拆分，分析并优化您的生产 i18n 捆绑包。",
	"k": "了解更多"
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
