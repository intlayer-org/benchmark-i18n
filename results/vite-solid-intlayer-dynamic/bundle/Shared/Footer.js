import { createComponent, insert, template } from "solid-js/web";
import { createContext, createMemo, createRenderEffect, createResource, lazy, untrack, useContext } from "solid-js";
import { A, useParams } from "@solidjs/router";
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
	"de": () => import("./intlayer-Footer-g5mu0y-de-5BCv52rp.js").then((n) => n.t).then((m) => m.default),
	"en": () => import("./intlayer-Footer-g5mu0y-en-qessYX45.js").then((n) => n.t).then((m) => m.default),
	"es": () => import("./intlayer-Footer-g5mu0y-es-Gznvl0mR.js").then((n) => n.t).then((m) => m.default),
	"fr": () => import("./intlayer-Footer-g5mu0y-fr-8egI-GRl.js").then((n) => n.t).then((m) => m.default),
	"it": () => import("./intlayer-Footer-g5mu0y-it-C1qdiYyx.js").then((n) => n.t).then((m) => m.default),
	"ja": () => import("./intlayer-Footer-g5mu0y-ja-I4tEYJgD.js").then((n) => n.t).then((m) => m.default),
	"ko": () => import("./intlayer-Footer-g5mu0y-ko-Bjn9-_iH.js").then((n) => n.t).then((m) => m.default),
	"pt": () => import("./intlayer-Footer-g5mu0y-pt-Bpgp3zQV.js").then((n) => n.t).then((m) => m.default),
	"ru": () => import("./intlayer-Footer-g5mu0y-ru-DYT3c9sF.js").then((n) => n.t).then((m) => m.default),
	"zh": () => import("./intlayer-Footer-g5mu0y-zh-CsYUKdz8.js").then((n) => n.t).then((m) => m.default)
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
var _tmpl$ = template(`<footer class="mt-20 border-t border-border bg-card"><div class="container py-8"><div class="grid gap-8 md:grid-cols-3"><div><h3 class="mb-2 text-sm font-semibold text-foreground">i18n Benchmark</h3><p class="text-sm text-muted-foreground"></p></div><div><h3 class="mb-2 text-sm font-semibold text-foreground"></h3><ul class=space-y-1><li><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class="text-sm text-muted-foreground transition-colors hover:text-foreground">GitHub</a></li><li></li><li></li></ul></div><div><h3 class="mb-2 text-sm font-semibold text-foreground"></h3><p class="text-sm text-muted-foreground">contact@intlayer.org</p></div></div><div class="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">`);
function Footer() {
	const content$1 = _(content, "footer");
	const params = useParams();
	const locale = () => params.locale ?? "en";
	return (() => {
		var _el$ = _tmpl$(), _el$3 = _el$.firstChild.firstChild, _el$4 = _el$3.firstChild, _el$6 = _el$4.firstChild.nextSibling, _el$7 = _el$4.nextSibling, _el$8 = _el$7.firstChild, _el$1 = _el$8.nextSibling.firstChild.nextSibling, _el$10 = _el$1.nextSibling, _el$12 = _el$7.nextSibling.firstChild, _el$13 = _el$3.nextSibling;
		insert(_el$6, () => content$1().a);
		insert(_el$8, () => content$1().f);
		insert(_el$1, createComponent(A, {
			get href() {
				return `/${locale()}/about`;
			},
			"class": "text-sm text-muted-foreground transition-colors hover:text-foreground",
			get children() {
				return content$1().e;
			}
		}));
		insert(_el$10, createComponent(A, {
			get href() {
				return `/${locale()}/contact`;
			},
			"class": "text-sm text-muted-foreground transition-colors hover:text-foreground",
			get children() {
				return content$1().c;
			}
		}));
		insert(_el$12, () => content$1().b);
		insert(_el$13, () => content$1().d);
		return _el$;
	})();
}
export { Footer as default };
import { t as __exportAll } from "./rolldown-runtime-DpJrqANO.js";
var de_exports = __exportAll({
	content: () => content,
	default: () => de_default,
	key: () => key
});
var key = "footer";
var content = {
	"a": "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.",
	"f": "Ressourcen",
	"e": "Methodik",
	"c": "Beitragen",
	"b": "Kontakt",
	"d": "i18n Benchmark — Open-Source-Projekt. Erstellt mit Solid, Vite & Solid Router."
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
var key = "footer";
var content = {
	"a": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
	"f": "Resources",
	"e": "Methodology",
	"c": "Contributing",
	"b": "Contact",
	"d": "i18n Benchmark — Open-source project. Built with Solid, Vite & Solid Router."
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
var key = "footer";
var content = {
	"a": "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el tiempo de carga y la reactividad de la aplicación.",
	"f": "Recursos",
	"e": "Metodología",
	"c": "Contribución",
	"b": "Contacto",
	"d": "i18n Benchmark — Proyecto de código abierto. Construido con Solid, Vite y Solid Router."
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
var key = "footer";
var content = {
	"a": "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.",
	"f": "Ressources",
	"e": "Méthodologie",
	"c": "Contribuer",
	"b": "Contact",
	"d": "i18n Benchmark — Projet open source. Construit avec Solid, Vite & Solid Router."
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
var key = "footer";
var content = {
	"a": "Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sui tempi di caricamento e sulla reattività dell'app.",
	"f": "Risorse",
	"e": "Metodologia",
	"c": "Contribuire",
	"b": "Contatti",
	"d": "i18n Benchmark — Progetto open source. Creato con Solid, Vite & Solid Router."
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
var key = "footer";
var content = {
	"a": "国際化ライブラリがバンドルサイズ、ロード時間、アプリの反応性に与える実際の影響を測定するためのオープンソーステストアプリケーションです。",
	"f": "リソース",
	"e": "方法論",
	"c": "貢献する",
	"b": "お問い合わせ",
	"d": "i18n Benchmark — オープンソースプロジェクト。Solid、Vite、Solid Routerで構築されています。"
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
var key = "footer";
var content = {
	"a": "번들 크기, 로딩 시간 및 앱 반응성에 대한 국제화 라이브러리의 실제 영향을 측정하기 위한 오픈 소스 테스트 애플ри케이션입니다.",
	"f": "리소스",
	"e": "방법론",
	"c": "기여",
	"b": "문의",
	"d": "i18n Benchmark — 오픈 소스 프로젝트. Solid, Vite 및 Solid Router로 제작되었습니다."
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
var key = "footer";
var content = {
	"a": "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade da aplicação.",
	"f": "Recursos",
	"e": "Metodologia",
	"c": "Contribuindo",
	"b": "Contato",
	"d": "i18n Benchmark — Projeto de código aberto. Construído com Solid, Vite & Solid Router."
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
var key = "footer";
var content = {
	"a": "Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.",
	"f": "Ресурсы",
	"e": "Методология",
	"c": "Вклад",
	"b": "Контакт",
	"d": "i18n Benchmark — проект с открытым исходным кодом. Построен на Solid, Vite и Solid Router."
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
var key = "footer";
var content = {
	"a": "一个开源测试应用程序，用于衡量国际化库对捆绑包大小、加载时间和应用程序反应性的真实影响。",
	"f": "资源",
	"e": "方法论",
	"c": "贡献",
	"b": "联系我们",
	"d": "i18n Benchmark — 开源项目。使用 Solid、Vite 和 Solid Router 构建。"
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
