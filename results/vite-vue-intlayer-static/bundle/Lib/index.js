import { computed, defineComponent, h, inject, isRef, markRaw, ref, shallowRef, toValue, watch } from "vue";
import _mb9fqtsfh1 from "../.intlayer/dictionary/products-grid.json";
import _g9v7k6zli9 from "../.intlayer/dictionary/preferences-section.json";
import _1om3fa733oe from "../.intlayer/dictionary/header.json";
import _hgpg7wr0oq from "../.intlayer/dictionary/open-positions.json";
import _frkeqklsaw from "../.intlayer/dictionary/careers-benefits.json";
import _53dp6b62zk from "../.intlayer/dictionary/footer.json";
import _w1ygrcix6e from "../.intlayer/dictionary/results-table.json";
import _e8mmjbyv6g from "../.intlayer/dictionary/settings-header.json";
import _donkvpkxbg from "../.intlayer/dictionary/contact-form.json";
import _1y0g1r26r2y from "../.intlayer/dictionary/contact-header.json";
import _i56o769pjw from "../.intlayer/dictionary/about-grid.json";
import _lf2iwu0c4d from "../.intlayer/dictionary/pricing-tiers.json";
import _1fta3mwiw24 from "../.intlayer/dictionary/settings-footer.json";
import _1n9ho4dhcqe from "../.intlayer/dictionary/theme-toggle.json";
import _ib54ari46e from "../.intlayer/dictionary/about-header.json";
import _16eraeinwk from "../.intlayer/dictionary/profile-section.json";
import _1hc41giolxu from "../.intlayer/dictionary/pricing-header.json";
import _11m726mxv3o from "../.intlayer/dictionary/faq-header.json";
import _272kzwjdhfx from "../.intlayer/dictionary/blog-header.json";
import _kpig639b4c from "../.intlayer/dictionary/team-header.json";
import _1obeux36sr2 from "../.intlayer/dictionary/not-found.json";
import _ak41az5vai from "../.intlayer/dictionary/mock-banner.json";
import _chz3oe5tsi from "../.intlayer/dictionary/faq-list.json";
import _12y78dib3xy from "../.intlayer/dictionary/careers-header.json";
import _w4h90geatj from "../.intlayer/dictionary/products-header.json";
import _opqka39lub from "../.intlayer/dictionary/what-we-measure.json";
import _2963l2gb3x8 from "../.intlayer/dictionary/blog-list.json";
import _1oqt8icdp40 from "../.intlayer/dictionary/understanding-impact.json";
import _1r0ihk8f4j7 from "../.intlayer/dictionary/team-grid.json";
import _800czf4sut from "../.intlayer/dictionary/api-access-section.json";
import _beqglstfdk from "../.intlayer/dictionary/why-it-matters.json";
import _23x1uv1v5qa from "../.intlayer/dictionary/hero.json";
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
var log = {
	"mode": "default",
	"prefix": "\x1B[38;5;239m[intlayer] \x1B[0m"
};
var RESET = "\x1B[0m";
var BLUE = "\x1B[34m";
var RED = "\x1B[31m";
var GREEN = "\x1B[32m";
var BEIGE = "\x1B[38;5;3m";
var getPrefix = (configPrefix) => {
	return configPrefix;
};
var logger = (content, details) => {
	const config = details?.config ?? {};
	const mode = config.mode ?? "default";
	if (mode === "disabled" || details?.isVerbose && mode !== "verbose") return;
	const prefix = getPrefix(config.prefix);
	const flatContent = prefix ? [prefix, ...[content].flat()] : [content].flat();
	const level = details?.level ?? "info";
	(config[level] ?? console[level] ?? config.log ?? console.log)(...flatContent);
};
var getAppLogger = (configuration, globalDetails) => (content, details) => logger(content, {
	...details ?? {},
	config: {
		...configuration?.log,
		...globalDetails?.config,
		...details?.config ?? {}
	}
});
var colorize = (string, color, reset) => color && typeof window === "undefined" ? `${color}${string}${reset ? typeof reset === "boolean" ? RESET : reset : RESET}` : string;
var colorizeKey = (keyPath, color = BEIGE, reset = RESET) => [keyPath].flat().map((key) => colorize(key, color, reset)).join(`, `);
colorize("✗", RED);
colorize("✓", GREEN);
colorize("⏲", BLUE);
var dictionaries = {
	"products-grid": _mb9fqtsfh1,
	"preferences-section": _g9v7k6zli9,
	"header": _1om3fa733oe,
	"open-positions": _hgpg7wr0oq,
	"careers-benefits": _frkeqklsaw,
	"footer": _53dp6b62zk,
	"results-table": _w1ygrcix6e,
	"settings-header": _e8mmjbyv6g,
	"contact-form": _donkvpkxbg,
	"contact-header": _1y0g1r26r2y,
	"about-grid": _i56o769pjw,
	"pricing-tiers": _lf2iwu0c4d,
	"settings-footer": _1fta3mwiw24,
	"theme-toggle": _1n9ho4dhcqe,
	"about-header": _ib54ari46e,
	"profile-section": _16eraeinwk,
	"pricing-header": _1hc41giolxu,
	"faq-header": _11m726mxv3o,
	"blog-header": _272kzwjdhfx,
	"team-header": _kpig639b4c,
	"not-found": _1obeux36sr2,
	"mock-banner": _ak41az5vai,
	"faq-list": _chz3oe5tsi,
	"careers-header": _12y78dib3xy,
	"products-header": _w4h90geatj,
	"what-we-measure": _opqka39lub,
	"blog-list": _2963l2gb3x8,
	"understanding-impact": _1oqt8icdp40,
	"team-grid": _1r0ihk8f4j7,
	"api-access-section": _800czf4sut,
	"why-it-matters": _beqglstfdk,
	"hero": _23x1uv1v5qa
};
var getDictionaries = () => dictionaries;
var PROTOTYPE_METHOD_NAMES = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]);
var createSafeFallback = (path = "") => {
	return new Proxy((() => path), { get: (target, prop) => {
		if (prop === "toJSON" || prop === Symbol.toPrimitive || prop === "toString" || prop === "valueOf") return () => path;
		if (prop === "then") return;
		if (PROTOTYPE_METHOD_NAMES.has(prop)) return Object.prototype[prop].bind(target);
		if (prop === Symbol.iterator) return function* () {
			yield path;
		};
		return createSafeFallback(path ? `${path}.${String(prop)}` : String(prop));
	} });
};
var warnedMissingDictionaries = /* @__PURE__ */ new Set();
var getIntlayer = (key, localeOrSelector, plugins) => {
	const dictionary = getDictionaries()[key];
	if (!dictionary && true) {
		if (!warnedMissingDictionaries.has(key)) {
			getAppLogger({ log })(typeof window === "undefined" ? `Dictionary ${colorizeKey(key)} was not found. Using fallback proxy.` : `Dictionary ${key} was not found. Using fallback proxy.`, { level: "warn" });
			warnedMissingDictionaries.add(key);
		}
		return createSafeFallback(key);
	}
	return getDictionary(dictionary, localeOrSelector, plugins);
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
process.env.INTLAYER_OPTIMIZED_NESTING;
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
var r = ({ value: i, children: a, additionalProps: o = {} }) => {
	let s = ref(i), c = typeof a == "function" ? (e) => a(e) : () => a, l = (e) => (s.value, c(e)), u = ((e) => l(e));
	return Object.assign(u, {
		render: l,
		toString: () => String(s.value ?? ""),
		valueOf: () => s.value,
		[Symbol.toPrimitive]: () => s.value,
		toJSON: () => s.value,
		get raw() {
			return s.value;
		},
		set raw(e) {
			s.value = e;
		},
		get value() {
			return s.value;
		},
		use(e) {
			return r({
				value: s.value,
				children: () => c(e),
				additionalProps: o
			});
		},
		__update(e) {
			c = e.render, this.raw = e.raw;
		},
		...o
	}), Object.setPrototypeOf(u, getIntlayerNodePrototype(i, Function.prototype)), markRaw(u);
};
var E = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (t, n) => {
		let { children: i, dictionaryKey: a, keyPath: o } = n;
		let s = (e) => r({
			value: e,
			children: e
		}), c = s(i);
		if (typeof i != "function") return c;
		let l = (...e) => {
			let t = i(...e);
			return s(t);
		};
		Object.setPrototypeOf(l, Object.getPrototypeOf(c));
		for (let e of Object.getOwnPropertyNames(c)) {
			let t = Object.getOwnPropertyDescriptor(c, e);
			t && Object.defineProperty(l, e, t);
		}
		for (let e of Object.getOwnPropertySymbols(c)) {
			let t = Object.getOwnPropertyDescriptor(c, e);
			t && Object.defineProperty(l, e, t);
		}
		return markRaw(l);
	}
};
var O = fallbackPlugin;
var A = fallbackPlugin;
var j = fallbackPlugin;
var M = /* @__PURE__ */ new Map();
var N = (e, t = !0) => {
	let n = `${e ?? internationalization.defaultLocale}_${t}`;
	if (M.has(n)) return M.get(n);
	let r = [
		E,
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
		j
	].filter((e) => e !== fallbackPlugin);
	return M.set(n, r), r;
};
var n = (n, r) => {
	return getIntlayer(n, r, N(typeof r == "object" && r ? r.locale : r));
};
var a = Symbol("intlayer");
var g = (e, t) => t.reduce((e, t) => e?.[t], e);
var _ = (e) => typeof e == "object" && !!e;
var v$1 = (e) => typeof e == "function" || _(e) && ("render" in e || "setup" in e);
var y = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e;
var b = (e) => markRaw(defineComponent({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : v$1(t) ? h(t) : Array.isArray(t) ? h("span", t) : t;
		};
	}
}));
var x = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return b(() => e.value);
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
});
var v = (v, y$1) => {
	let b$1 = inject(a), x$2 = isRef(b$1?.locale) ? b$1.locale : ref(b$1?.locale ?? internationalization.defaultLocale), S = computed(() => {
		return {
			selector: void 0,
			locale: y$1 === void 0 ? void 0 : toValue(y$1)
		};
	}), C = computed(() => S.value.locale ?? x$2.value), w = shallowRef({});
	watch([
		() => toValue(v),
		() => C.value,
		() => S.value.selector
	], ([t, n$1, r]) => {
		w.value = r ? n(t, {
			...r,
			locale: n$1
		}) : n(t, n$1);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let T = /* @__PURE__ */ new Map(), E = (e) => {
		let t = e.join(".");
		if (T.has(t)) return T.get(t);
		let c = computed(() => g(w.value, e)), u = new Proxy({}, {
			get(t, u, d) {
				if (typeof u == "symbol" || typeof u == "string" && (u.startsWith("__") || u.startsWith("$"))) return u === "__v_isRef" ? !0 : u === "then" ? void 0 : Reflect.get(t, u, d);
				if (u === "value") return c.value ?? "";
				if (u === "c" || u === "asComponent") return b(() => c.value);
				if (u === "$raw") return c;
				if (u === Symbol.toPrimitive) return () => String(c.value ?? "");
				let f = e.concat(u), p = g(w.value, f);
				if (p === void 0 || _(p) && !v$1(p)) return E(f);
				if (y(p)) return x(computed(() => g(w.value, f)));
				if (typeof p == "function") {
					let t = g(w.value, e);
					return t != null && !Object.hasOwn(t, u) ? p.bind(t) : (...e) => g(w.value, f)?.(...e);
				}
				let m = computed(() => g(w.value, f));
				return new Proxy(m, { get(e, t, n) {
					return t === "value" ? e.value ?? "" : t === "__v_isRef" || Reflect.get(e, t, n);
				} });
			},
			ownKeys() {
				let t = g(w.value, e);
				return _(t) ? Reflect.ownKeys(t) : [];
			},
			getOwnPropertyDescriptor() {
				return {
					enumerable: !0,
					configurable: !0
				};
			}
		});
		return T.set(t, u), u;
	};
	return E([]);
};
var EmptyComponent_default = defineComponent({
	__name: "EmptyComponent",
	setup(__props) {
		v("header");
		return (_ctx, _cache) => {
			return null;
		};
	}
});
export { EmptyComponent_default as default };
