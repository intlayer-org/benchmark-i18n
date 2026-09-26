import { className, createComponent, effect, insert, memo, template } from "solid-js/web";
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
	"de": () => import("./intlayer-PricingTiers-15q3jm-de-B4spcQge.js").then((n) => n.t).then((m) => m.default),
	"en": () => import("./intlayer-PricingTiers-15q3jm-en-xzJ2ycYy.js").then((n) => n.t).then((m) => m.default),
	"es": () => import("./intlayer-PricingTiers-15q3jm-es-xCBirKMM.js").then((n) => n.t).then((m) => m.default),
	"fr": () => import("./intlayer-PricingTiers-15q3jm-fr-DFluVI0m.js").then((n) => n.t).then((m) => m.default),
	"it": () => import("./intlayer-PricingTiers-15q3jm-it-DqIt1JX8.js").then((n) => n.t).then((m) => m.default),
	"ja": () => import("./intlayer-PricingTiers-15q3jm-ja-B02nj5TH.js").then((n) => n.t).then((m) => m.default),
	"ko": () => import("./intlayer-PricingTiers-15q3jm-ko-BeP1Za9T.js").then((n) => n.t).then((m) => m.default),
	"pt": () => import("./intlayer-PricingTiers-15q3jm-pt-amoN8iJd.js").then((n) => n.t).then((m) => m.default),
	"ru": () => import("./intlayer-PricingTiers-15q3jm-ru-9SVc-nuJ.js").then((n) => n.t).then((m) => m.default),
	"zh": () => import("./intlayer-PricingTiers-15q3jm-zh-iKVLZA7U.js").then((n) => n.t).then((m) => m.default)
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
var _tmpl$ = template(`<div class="grid gap-6 md:grid-cols-3">`);
var _tmpl$2 = template(`<div><h3 class="text-lg font-semibold text-foreground"></h3><div class=my-4><span class="text-3xl font-bold text-foreground"></span><span class="text-sm text-muted-foreground"></span></div><ul class="mb-6 flex-1 space-y-2"></ul><button type=button>`);
var _tmpl$3 = template(`<li class="flex items-center gap-2 text-sm text-muted-foreground"><span class=text-primary>✓</span> `);
function PricingTiers() {
	const content$1 = _(content, "pricing-tiers");
	const tiers = () => [
		{
			name: content$1().u.value,
			price: "$0",
			period: "forever",
			features: [
				content$1().x.value,
				"3 libraries",
				content$1().f.value,
				content$1().s.value
			]
		},
		{
			name: content$1().r.value,
			price: "$29",
			period: "/month",
			features: [
				content$1().w.value,
				content$1().a.value,
				content$1().p.value,
				content$1().q.value,
				content$1().e.value,
				content$1().n.value
			],
			highlighted: true
		},
		{
			name: content$1().k.value,
			price: content$1().h.value,
			period: "",
			features: [
				content$1().l.value,
				content$1().o.value,
				content$1().t.value,
				content$1().j.value,
				content$1().i.value,
				content$1().b.value,
				content$1().v.value
			]
		}
	];
	return (() => {
		var _el$ = _tmpl$();
		insert(_el$, createComponent(For, {
			get each() {
				return tiers();
			},
			children: (t) => (() => {
				var _el$2 = _tmpl$2(), _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling, _el$5 = _el$4.firstChild, _el$6 = _el$5.nextSibling, _el$7 = _el$4.nextSibling, _el$8 = _el$7.nextSibling;
				insert(_el$3, () => t.name);
				insert(_el$5, () => t.price);
				insert(_el$6, () => t.period);
				insert(_el$7, createComponent(For, {
					get each() {
						return t.features;
					},
					children: (f) => (() => {
						var _el$9 = _tmpl$3();
						_el$9.firstChild.nextSibling;
						insert(_el$9, f, null);
						return _el$9;
					})()
				}));
				insert(_el$8, (() => {
					var _c$ = memo(() => t.name === content$1().k.value);
					return () => _c$() ? content$1().g.value : content$1().m.value;
				})());
				effect((_p$) => {
					var _v$ = `flex flex-col rounded-lg border p-6 ${t.highlighted ? content$1().d.value : "border-border bg-card"}`, _v$2 = `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${t.highlighted ? "bg-primary text-primary-foreground" : content$1().c.value}`;
					_v$ !== _p$.e && className(_el$2, _p$.e = _v$);
					_v$2 !== _p$.t && className(_el$8, _p$.t = _v$2);
					return _p$;
				}, {
					e: void 0,
					t: void 0
				});
				return _el$2;
			})()
		}));
		return _el$;
	})();
}
export { PricingTiers as default };
import { t as __exportAll } from "./rolldown-runtime-DpJrqANO.js";
var de_exports = __exportAll({
	content: () => content,
	default: () => de_default,
	key: () => key
});
var key = "pricing-tiers";
var content = {
	"u": "Starter",
	"x": "5 Benchmark-Läufe/Tag",
	"f": "Community-Support",
	"s": "Öffentliche Ergebnisse",
	"r": "Pro",
	"w": "Unbegrenzte Läufe",
	"a": "Alle Bibliotheken",
	"p": "Prioritäts-Support",
	"q": "Private Ergebnisse",
	"e": "CI-Integration",
	"n": "Historische Daten",
	"k": "Enterprise",
	"h": "Benutzerdefiniert",
	"l": "Alles in Pro",
	"o": "On-Premise-Option",
	"t": "SSO & SAML",
	"j": "Dedizierter Account Manager",
	"i": "Benutzerdefinierte SLAs",
	"b": "Audit-Protokolle",
	"v": "Schulungen",
	"d": "border-primary bg-primary/5 ring-1 ring-primary",
	"c": "border border-border text-foreground hover:bg-accent",
	"g": "Vertrieb kontaktieren",
	"m": "Erste Schritte"
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
var key = "pricing-tiers";
var content = {
	"u": "Starter",
	"x": "5 benchmark runs/day",
	"f": "Community support",
	"s": "Public results",
	"r": "Pro",
	"w": "Unlimited runs",
	"a": "All libraries",
	"p": "Priority support",
	"q": "Private results",
	"e": "CI integration",
	"n": "Historical data",
	"k": "Enterprise",
	"h": "Custom",
	"l": "Everything in Pro",
	"o": "On-premise option",
	"t": "SSO & SAML",
	"j": "Dedicated account manager",
	"i": "Custom SLAs",
	"b": "Audit logs",
	"v": "Training sessions",
	"d": "border-primary bg-primary/5 ring-1 ring-primary",
	"c": "border border-border text-foreground hover:bg-accent",
	"g": "Contact Sales",
	"m": "Get Started"
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
var key = "pricing-tiers";
var content = {
	"u": "Starter",
	"x": "5 ejecuciones de benchmark al día",
	"f": "Soporte de la comunidad",
	"s": "Resultados públicos",
	"r": "Pro",
	"w": "Ejecuciones ilimitadas",
	"a": "Todas las bibliotecas",
	"p": "Soporte prioritario",
	"q": "Resultados privados",
	"e": "Integración de CI",
	"n": "Datos históricos",
	"k": "Enterprise",
	"h": "Personalizado",
	"l": "Todo en Pro",
	"o": "Opción on-premise",
	"t": "SSO y SAML",
	"j": "Gestor de cuentas dedicado",
	"i": "SLAs personalizados",
	"b": "Registros de auditoría",
	"v": "Sesiones de formación",
	"d": "border-primary bg-primary/5 ring-1 ring-primary",
	"c": "border border-border text-foreground hover:bg-accent",
	"g": "Contactar con ventas",
	"m": "Empezar"
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
var key = "pricing-tiers";
var content = {
	"u": "Débutant",
	"x": "5 exécutions de benchmark/jour",
	"f": "Support communautaire",
	"s": "Résultats publics",
	"r": "Pro",
	"w": "Exécutions illimitées",
	"a": "Toutes les bibliothèques",
	"p": "Support prioritaire",
	"q": "Résultats privés",
	"e": "Intégration CI",
	"n": "Données historiques",
	"k": "Entreprise",
	"h": "Personnalisé",
	"l": "Tout ce qui est dans Pro",
	"o": "Option sur site",
	"t": "SSO et SAML",
	"j": "Gestionnaire de compte dédié",
	"i": "SLA personnalisés",
	"b": "Logs d'audit",
	"v": "Sessions de formation",
	"d": "border-primary bg-primary/5 ring-1 ring-primary",
	"c": "border border-border text-foreground hover:bg-accent",
	"g": "Contacter le service commercial",
	"m": "Démarrer"
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
var key = "pricing-tiers";
var content = {
	"u": "Starter",
	"x": "5 esecuzioni di benchmark al giorno",
	"f": "Supporto della comunità",
	"s": "Risultati pubblici",
	"r": "Pro",
	"w": "Esecuzioni illimitate",
	"a": "Tutte le librerie",
	"p": "Supporto prioritario",
	"q": "Risultati privati",
	"e": "Integrazione CI",
	"n": "Dati storici",
	"k": "Enterprise",
	"h": "Personalizzato",
	"l": "Tutto quello che c'è in Pro",
	"o": "Opzione on-premise",
	"t": "SSO e SAML",
	"j": "Account manager dedicato",
	"i": "SLA personalizzati",
	"b": "Log di audit",
	"v": "Sessioni di formazione",
	"d": "border-primary bg-primary/5 ring-1 ring-primary",
	"c": "border border-border text-foreground hover:bg-accent",
	"g": "Contatta l'ufficio vendite",
	"m": "Inizia subito"
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
var key = "pricing-tiers";
var content = {
	"u": "スターター",
	"x": "1日5回のベンチマーク実行",
	"f": "コミュニティサポート",
	"s": "公開結果",
	"r": "プロ",
	"w": "実行無制限",
	"a": "すべてのライブラリ",
	"p": "優先サポート",
	"q": "プライベートな結果",
	"e": "CI 統合",
	"n": "履歴データ",
	"k": "エンタープライズ",
	"h": "カスタム",
	"l": "プロのすべての機能",
	"o": "オンプレミスオプション",
	"t": "SSO と SAML",
	"j": "専任のアカウントマネージャー",
	"i": "カスタムSLA",
	"b": "監査ログ",
	"v": "トレーニングセッション",
	"d": "border-primary bg-primary/5 ring-1 ring-primary",
	"c": "border border-border text-foreground hover:bg-accent",
	"g": "営業に連絡",
	"m": "始める"
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
var key = "pricing-tiers";
var content = {
	"u": "스타터",
	"x": "일일 5회 벤치마크 실행",
	"f": "커뮤니티 지원",
	"s": "공개 결과",
	"r": "프로",
	"w": "무제한 실행",
	"a": "모든 라이브러리",
	"p": "우선 지원",
	"q": "비공개 결과",
	"e": "CI 통합",
	"n": "기록 데이터",
	"k": "엔터프라이즈",
	"h": "커스텀",
	"l": "Pro의 모든 기능 포함",
	"o": "온프레미스 옵션",
	"t": "SSO 및 SAML",
	"j": "전담 어카운트 매니저",
	"i": "맞춤형 SLA",
	"b": "감사 로그",
	"v": "교육 세션",
	"d": "border-primary bg-primary/5 ring-1 ring-primary",
	"c": "border border-border text-foreground hover:bg-accent",
	"g": "영업팀 문의",
	"m": "시작하기"
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
var key = "pricing-tiers";
var content = {
	"u": "Starter",
	"x": "5 execuções de benchmark/dia",
	"f": "Suporte da comunidade",
	"s": "Resultados públicos",
	"r": "Pro",
	"w": "Execuções ilimitadas",
	"a": "Todas as biblioteche",
	"p": "Suporte prioritário",
	"q": "Resultados privados",
	"e": "Integração CI",
	"n": "Dados históricos",
	"k": "Enterprise",
	"h": "Personalizado",
	"l": "Tudo no Pro",
	"o": "Opção on-premise",
	"t": "SSO e SAML",
	"j": "Gerente de conta dedicado",
	"i": "SLAs personalizados",
	"b": "Logs de auditoria",
	"v": "Sessões de treinamento",
	"d": "border-primary bg-primary/5 ring-1 ring-primary",
	"c": "border border-border text-foreground hover:bg-accent",
	"g": "Contatar Vendas",
	"m": "Começar"
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
var key = "pricing-tiers";
var content = {
	"u": "Стартовый",
	"x": "5 запусков бенчмарка в день",
	"f": "Поддержка сообщества",
	"s": "Публичные результаты",
	"r": "Профи",
	"w": "Безлимитные запуски",
	"a": "Все библиотеки",
	"p": "Приоритетная поддержка",
	"q": "Приватные результаты",
	"e": "Интеграция с CI",
	"n": "Исторические данные",
	"k": "Корпоративный",
	"h": "Индивидуальный",
	"l": "Все, что в Профи",
	"o": "Локальная установка",
	"t": "SSO и SAML",
	"j": "Выделенный менеджер",
	"i": "Индивидуальные SLA",
	"b": "Журналы аудита",
	"v": "Обучающие сессии",
	"d": "border-primary bg-primary/5 ring-1 ring-primary",
	"c": "border border-border text-foreground hover:bg-accent",
	"g": "Связаться с отделом продаж",
	"m": "Начать"
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
var key = "pricing-tiers";
var content = {
	"u": "入门版",
	"x": "每天 5 次基准测试运行",
	"f": "社区支持",
	"s": "公开结果",
	"r": "专业版",
	"w": "无限次运行",
	"a": "所有库",
	"p": "优先支持",
	"q": "私人结果",
	"e": "CI 集成",
	"n": "历史数据",
	"k": "企业版",
	"h": "自定义",
	"l": "包含专业版所有功能",
	"o": "本地部署选项",
	"t": "SSO 和 SAML",
	"j": "专属客户经理",
	"i": "自定义 SLA",
	"b": "审核日志",
	"v": "培训课程",
	"d": "border-primary bg-primary/5 ring-1 ring-primary",
	"c": "border border-border text-foreground hover:bg-accent",
	"g": "联系销售",
	"m": "开始使用"
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
