import { Fragment, computed, createBlock, createCommentVNode, createElementBlock, createElementVNode, createTextVNode, createVNode, defineComponent, getCurrentInstance, h, inject, isRef, markRaw, normalizeClass, onBeforeMount, onMounted, onUnmounted, openBlock, ref, renderList, resolveComponent, shallowRef, toDisplayString, toValue, watch, withCtx } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ChevronDown } from "lucide-vue-next";
var n$1 = ({ value: r, children: i, additionalProps: a = {} }) => {
	let o = ref(r), s = typeof i == "function" ? (e) => i(e) : () => i, c = (e) => (o.value, s(e)), l = ((e) => c(e));
	if (Object.assign(l, {
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
	}), r != null) {
		let e = Object(r), t = Object.getPrototypeOf(e);
		for (let n of Object.getOwnPropertyNames(t)) {
			if (n === "constructor" || n in l) continue;
			let t = e[n];
			typeof t == "function" && Object.defineProperty(l, n, {
				value: t.bind(r),
				writable: !0,
				configurable: !0
			});
		}
	}
	return markRaw(l);
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
	for (const key in node) {
		const childProps = {
			...props,
			children: node[key],
			keyPath: [...props.keyPath, {
				type: OBJECT,
				key
			}]
		};
		if (props.eager) {
			result[key] = deepTransformNode(node[key], childProps);
			continue;
		}
		Object.defineProperty(result, key, {
			enumerable: true,
			configurable: true,
			get: function() {
				const transformed = deepTransformNode(node[key], childProps);
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
var DEFAULT_VARIANT_ID = "default";
var SEGMENT_UNSAFE_CHARS = /[^A-Za-z0-9._&=-]/g;
var COMPONENT_UNSAFE_CHARS = /[^A-Za-z0-9._-]/g;
var percentEncodeChar = (char) => `%${char.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`;
var encodeSegmentText = (raw, unsafeChars) => {
	if (raw === "") return "%";
	const encoded = raw.replace(unsafeChars, percentEncodeChar);
	if (encoded === "." || encoded === "..") return encoded.replace(/\./g, "%002E");
	return encoded;
};
var serializeVariant = (variant) => {
	if (variant === void 0) return DEFAULT_VARIANT_ID;
	if (typeof variant === "string") return encodeSegmentText(variant, SEGMENT_UNSAFE_CHARS);
	return Object.keys(variant).sort().map((field) => `${encodeSegmentText(field, COMPONENT_UNSAFE_CHARS)}=${encodeSegmentText(String(variant[field]), COMPONENT_UNSAFE_CHARS)}`).join("&");
};
var serializeVariantChain = (variant) => {
	if (!Array.isArray(variant)) return [serializeVariant(variant)];
	if (variant.length === 0) return [DEFAULT_VARIANT_ID];
	return variant.map(serializeVariant);
};
var resolveEffectiveVariantId = (requestedVariantIds, isVariantIdDeclared) => {
	for (const requestedVariantId of requestedVariantIds) if (isVariantIdDeclared(requestedVariantId)) return requestedVariantId;
	return isVariantIdDeclared("default") ? DEFAULT_VARIANT_ID : requestedVariantIds[0] ?? "default";
};
var compositeIdMatchesSelector = (compositeId, qualifierTypes, selector, effectiveVariantId) => {
	const segments = compositeId.split("/");
	return qualifierTypes.every((qualifierType, index) => {
		if (qualifierType === "variant") return segments[index] === effectiveVariantId;
		return selector?.item === void 0 || segments[index] === String(selector.item);
	});
};
var isQualifiedDictionaryGroup = (value) => typeof value === "object" && value !== null && "qualifierTypes" in value && Array.isArray(value.qualifierTypes) && "content" in value;
var reconstructQualifiedEntry = (group, compositeId) => {
	const segments = compositeId.split("/");
	const entry = {
		key: group.key,
		content: group.content[compositeId]
	};
	group.qualifierTypes.forEach((qualifierType, index) => {
		if (qualifierType === "variant") entry.variant = segments[index];
		else if (qualifierType === "item") entry.item = Number(segments[index]);
	});
	return entry;
};
var resolveQualifiedDictionary = (dictionaryOrGroup, selector) => {
	if (!isQualifiedDictionaryGroup(dictionaryOrGroup)) return dictionaryOrGroup;
	const { qualifierTypes, content } = dictionaryOrGroup;
	const itemAxisOpen = qualifierTypes.includes("item") && selector?.item === void 0;
	const compositeIds = Object.keys(content);
	const variantIndex = qualifierTypes.indexOf("variant");
	const effectiveVariantId = variantIndex === -1 ? DEFAULT_VARIANT_ID : resolveEffectiveVariantId(serializeVariantChain(selector?.variant), (variantId) => compositeIds.some((compositeId) => compositeId.split("/")[variantIndex] === variantId));
	const matchedEntries = compositeIds.filter((compositeId) => compositeIdMatchesSelector(compositeId, qualifierTypes, selector, effectiveVariantId)).map((compositeId) => reconstructQualifiedEntry(dictionaryOrGroup, compositeId));
	if (itemAxisOpen) return matchedEntries.sort((left, right) => (left.item ?? 0) - (right.item ?? 0));
	return matchedEntries[0] ?? null;
};
var parseDictionarySelector = (localeOrSelector) => {
	if (typeof localeOrSelector === "object" && localeOrSelector !== null) return {
		locale: localeOrSelector.locale,
		selector: localeOrSelector
	};
	return { locale: localeOrSelector };
};
var getDictionarySelectorCacheKey = (selector) => {
	if (!selector) return "";
	return Object.keys(selector).filter((selectorKey) => selectorKey !== "locale").sort().map((selectorKey) => {
		const value = selector[selectorKey];
		return `${selectorKey}:${selectorKey === "variant" ? serializeVariantChain(value).join(",") : String(value)}`;
	}).join("|");
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
var translationPlugin = (locale, fallback) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? fallbackPlugin : {
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
	conditionPlugin,
	insertionPlugin,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin,
	selectPlugin
];
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
var getDictionary = (dictionary, localeOrSelector, plugins) => {
	const { locale, selector } = parseDictionarySelector(localeOrSelector);
	const cacheKey = getDictionaryTransformCacheKey(locale ?? internationalization.defaultLocale, getDictionarySelectorCacheKey(selector), plugins);
	const cached = readTransformCache(dictionary, cacheKey);
	if (cached.hit) return cached.content;
	const appliedPlugins = plugins ?? getBasePlugins(locale);
	const resolved = resolveQualifiedDictionary(dictionary, selector);
	const transformDictionary = (resolvedDictionary) => {
		const props = {
			dictionaryKey: resolvedDictionary.key,
			dictionaryPath: resolvedDictionary.filePath,
			keyPath: [],
			plugins: appliedPlugins,
			nestedDictionaries: resolvedDictionary.nestedDictionaries
		};
		return getContent(resolvedDictionary.content, props, appliedPlugins);
	};
	if (resolved === null) return writeTransformCache(dictionary, cacheKey, null);
	if (Array.isArray(resolved)) return writeTransformCache(dictionary, cacheKey, resolved.map(transformDictionary));
	return writeTransformCache(dictionary, cacheKey, transformDictionary(resolved));
};
var T = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (n, { children: r, ...i }) => {
		let a = (t) => n$1({
			...i,
			value: t,
			children: t
		}), c = a(r);
		if (typeof r != "function") return c;
		let l = (...e) => {
			let t = r(...e);
			return a(t);
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
var D = fallbackPlugin;
var k = fallbackPlugin;
var A = fallbackPlugin;
var j = /* @__PURE__ */ new Map();
var M = (e, t = !0) => {
	let n = `${e ?? internationalization.defaultLocale}_${t}`;
	if (j.has(n)) return j.get(n);
	let r = [
		translationPlugin(e ?? internationalization.defaultLocale, t ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		pluralPlugin(e ?? internationalization.defaultLocale),
		conditionPlugin,
		nestedPlugin(e ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		selectPlugin,
		T,
		D,
		k,
		A
	];
	return j.set(n, r), r;
};
var n = (n, r) => {
	return getDictionary(n, r, M(typeof r == "object" && r ? r.locale : r));
};
var i = Symbol("intlayer");
var g = (e, t) => t.reduce((e, t) => e?.[t], e);
var _ = (e) => typeof e == "object" && !!e;
var v = (e) => typeof e == "function" || _(e) && ("render" in e || "setup" in e);
var y = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e;
var b = (e) => markRaw(defineComponent({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : v(t) ? h(t) : Array.isArray(t) ? h("span", t) : t;
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
var S = (r, a) => {
	let c = getCurrentInstance() ? inject(i) : void 0, S = isRef(c?.locale) ? c.locale : ref(c?.locale ?? internationalization.defaultLocale), C = computed(() => {
		return {
			selector: void 0,
			locale: a === void 0 ? void 0 : toValue(a)
		};
	}), w = computed(() => C.value.locale ?? S.value), T = shallowRef({});
	watch([
		() => toValue(r),
		() => w.value,
		() => C.value.selector
	], ([t, n$2, r]) => {
		T.value = r ? n(t, {
			...r,
			locale: n$2
		}) : n(t, n$2);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let E = (e) => new Proxy({}, {
		get(t, r, i) {
			let a = computed(() => g(T.value, e));
			if (typeof r == "symbol" || typeof r == "string" && (r.startsWith("__") || r.startsWith("$"))) return r === "__v_isRef" ? !0 : r === "$raw" ? a : r === Symbol.toPrimitive ? () => String(a.value ?? "") : Reflect.get(t, r, i);
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return b(() => a.value);
			let o = e.concat(r), s = g(T.value, o);
			if (s === void 0 || _(s) && !v(s)) return E(o);
			if (y(s)) return x(computed(() => g(T.value, o)));
			if (typeof s == "function") {
				let t = g(T.value, e);
				return t != null && !Object.hasOwn(t, r) ? s.bind(t) : (...e) => g(T.value, o)?.(...e);
			}
			let c = computed(() => g(T.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = g(T.value, e);
			return _(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return E([]);
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
var setLocaleInStorageClient = (locale, options) => {
	if (options?.isCookieEnabled === false) return;
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
getLocaleFromStorageClient(localeStorageOptions);
var s = (e, t) => setLocaleInStorageClient(e, {
	...localeStorageOptions,
	isCookieEnabled: t
});
var a = ({ isCookieEnabled: a, onLocaleChange: o } = {}) => {
	let { defaultLocale: s$1, locales: c } = internationalization ?? {}, l = inject(i);
	return {
		locale: computed(() => l?.locale?.value ?? s$1),
		defaultLocale: s$1,
		availableLocales: c,
		setLocale: (e) => {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			l && l.setLocale(e), s(e, a ?? l?.isCookieEnabled ?? !0), o?.(e);
		}
	};
};
function recordHydrationDuration() {
	if (typeof window === "undefined") return;
	console.log("--- BROWSER: RootDocument mounted");
	performance.mark("hydration_end");
	try {
		if (performance.getEntriesByName("hydration_start").length > 0) {
			performance.measure("hydration_duration", "hydration_start", "hydration_end");
			console.log("--- BROWSER: hydration_duration measured");
			const duration = performance.getEntriesByName("hydration_duration")[0]?.duration;
			if (duration) console.log(`Hydration Duration: ${duration.toFixed(2)}ms`);
		} else console.warn("--- BROWSER: hydration_start NOT FOUND");
	} catch (err) {
		console.warn("Could not measure hydration duration:", err);
	}
}
function recordRenderTime(id, startTime) {
	if (typeof window === "undefined") return;
	const renderTime = performance.now() - startTime;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {};
	window.__RENDER_METRICS__[id] = window.__RENDER_METRICS__[id] || [];
	window.__RENDER_METRICS__[id].push(renderTime);
}
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
var Footer_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "Footer",
	setup(__props, { expose: __expose }) {
		__expose();
		const route = useRoute();
		const currentLocale = computed(() => route.params.locale || "en");
		const { e: description, i: resources, b: contactLabel, g: github, h: methodology, d: contributing, f: footerText, a: appName, c: contactEmail } = S(footer_default);
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
var _hoisted_1$3 = { class: "mt-20 border-t border-border bg-card" };
var _hoisted_2$2 = { class: "container py-8" };
var _hoisted_3$2 = { class: "grid gap-8 md:grid-cols-3" };
var _hoisted_4$1 = { class: "mb-2 text-sm font-semibold text-foreground" };
var _hoisted_5$1 = { class: "text-sm text-muted-foreground" };
var _hoisted_6$1 = { class: "mb-2 text-sm font-semibold text-foreground" };
var _hoisted_7$1 = { class: "space-y-1" };
var _hoisted_8$1 = ["href"];
var _hoisted_9$1 = { class: "mb-2 text-sm font-semibold text-foreground" };
var _hoisted_10 = { class: "text-sm text-muted-foreground" };
var _hoisted_11 = { class: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground" };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_router_link = resolveComponent("router-link");
	return openBlock(), createElementBlock("footer", _hoisted_1$3, [createElementVNode("div", _hoisted_2$2, [createElementVNode("div", _hoisted_3$2, [
		createElementVNode("div", null, [createElementVNode("h3", _hoisted_4$1, toDisplayString($setup.appName), 1), createElementVNode("p", _hoisted_5$1, toDisplayString($setup.description), 1)]),
		createElementVNode("div", null, [createElementVNode("h3", _hoisted_6$1, toDisplayString($setup.resources), 1), createElementVNode("ul", _hoisted_7$1, [(openBlock(true), createElementBlock(Fragment, null, renderList($setup.footerLinks, (linkEl) => {
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
			}, toDisplayString(linkEl.label), 9, _hoisted_8$1))]);
		}), 128))])]),
		createElementVNode("div", null, [createElementVNode("h3", _hoisted_9$1, toDisplayString($setup.contactLabel), 1), createElementVNode("p", _hoisted_10, toDisplayString($setup.contactEmail), 1)])
	]), createElementVNode("div", _hoisted_11, toDisplayString($setup.footerText), 1)])]);
}
var Footer_default = _plugin_vue_export_helper_default(Footer_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render$4], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/Footer.vue"]]);
var header_default = {
	key: "header",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"h": "Home",
				"i": "Methodology",
				"j": "Mock Pages",
				"l": "Products",
				"k": "Pricing",
				"n": "Team",
				"b": "Blog",
				"c": "Careers",
				"e": "FAQ",
				"d": "Contact",
				"m": "Settings",
				"a": "i18n Benchmark",
				"f": "Go to GitHub"
			},
			"fr": {
				"h": "Accueil",
				"i": "Méthodologie",
				"j": "Pages fictives",
				"l": "Produits",
				"k": "Tarification",
				"n": "Équipe",
				"b": "Blog",
				"c": "Carrières",
				"e": "FAQ",
				"d": "Contact",
				"m": "Paramètres",
				"a": "Benchmark i18n",
				"f": "Aller sur GitHub"
			},
			"es": {
				"h": "Inicio",
				"i": "Metodología",
				"j": "Páginas de prueba",
				"l": "Productos",
				"k": "Precios",
				"n": "Equipo",
				"b": "Blog",
				"c": "Carreras",
				"e": "FAQ",
				"d": "Contacto",
				"m": "Ajustes",
				"a": "i18n Benchmark",
				"f": "Ir a GitHub"
			},
			"de": {
				"h": "Home",
				"i": "Methodik",
				"j": "Testseiten",
				"l": "Produkte",
				"k": "Preise",
				"n": "Team",
				"b": "Blog",
				"c": "Karriere",
				"e": "FAQ",
				"d": "Kontakt",
				"m": "Einstellungen",
				"a": "i18n Benchmark",
				"f": "Zu GitHub"
			},
			"it": {
				"h": "Home",
				"i": "Metodologia",
				"j": "Pagine di prova",
				"l": "Prodotti",
				"k": "Prezzi",
				"n": "Team",
				"b": "Blog",
				"c": "Carriere",
				"e": "FAQ",
				"d": "Contatti",
				"m": "Impostazioni",
				"a": "i18n Benchmark",
				"f": "Vai su GitHub"
			},
			"pt": {
				"h": "Início",
				"i": "Metodologia",
				"j": "Páginas de Teste",
				"l": "Produtos",
				"k": "Preços",
				"n": "Equipe",
				"b": "Blog",
				"c": "Carreiras",
				"e": "FAQ",
				"d": "Contato",
				"m": "Configurações",
				"a": "i18n Benchmark",
				"f": "Ir para o GitHub"
			},
			"zh": {
				"h": "首页",
				"i": "方法论",
				"j": "模拟页面",
				"l": "产品",
				"k": "定价",
				"n": "团队",
				"b": "博客",
				"c": "职业",
				"e": "常见问题",
				"d": "联系我们",
				"m": "设置",
				"a": "i18n 基准测试",
				"f": "前往 GitHub"
			},
			"ja": {
				"h": "ホーム",
				"i": "方法論",
				"j": "モックページ",
				"l": "製品",
				"k": "価格設定",
				"n": "チーム",
				"b": "ブログ",
				"c": "採用情報",
				"e": "よくある質問",
				"d": "お問い合わせ",
				"m": "設定",
				"a": "i18n ベンチマーク",
				"f": "GitHub へ"
			},
			"ko": {
				"h": "홈",
				"i": "방법론",
				"j": "모ック 페이지",
				"l": "제품",
				"k": "가격",
				"n": "팀",
				"b": "블로그",
				"c": "채용",
				"e": "자주 묻는 질문",
				"d": "문의",
				"m": "설정",
				"a": "i18n 벤치마크",
				"f": "GitHub으로 이동"
			},
			"ru": {
				"h": "Главная",
				"i": "Методология",
				"j": "Мок-страницы",
				"l": "Продукты",
				"k": "Цены",
				"n": "Команда",
				"b": "Блог",
				"c": "Вакансии",
				"e": "FAQ",
				"d": "Контакт",
				"m": "Настройки",
				"a": "i18n Бенчмарк",
				"f": "Перейти на GitHub"
			}
		}
	}
};
function usePerformanceMeasure(name) {
	onBeforeMount(() => {
		if (typeof performance !== "undefined" && performance.mark) performance.mark(`${name}-start`);
	});
	onMounted(() => {
		if (typeof performance !== "undefined" && performance.mark && performance.measure) {
			performance.mark(`${name}-end`);
			try {
				performance.measure(`${name}-render`, `${name}-start`, `${name}-end`);
			} catch (e) {}
		}
	});
}
var locales = internationalization.locales;
internationalization.requiredLocales;
internationalization.defaultLocale;
var getLocaleName = (locale) => {
	try {
		const name = new Intl.DisplayNames([locale], { type: "language" }).of(locale);
		return name ? name.charAt(0).toUpperCase() + name.slice(1) : locale;
	} catch (e) {
		return locale.toUpperCase();
	}
};
var LocaleSwitcher_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "LocaleSwitcher",
	setup(__props, { expose: __expose }) {
		__expose();
		const route = useRoute();
		const router = useRouter();
		const { setLocale } = a();
		const currentLocale = computed(() => route.params.locale || "en");
		const handleLocaleChange = (newLocale) => {
			setLocale(newLocale);
			const newPath = route.path.replace(/^\/[^/]+/, `/${newLocale}`);
			router.push({
				path: newPath,
				query: route.query,
				hash: route.hash
			});
		};
		watch(currentLocale, (newLocale) => {
			setLocale(newLocale);
		}, { immediate: true });
		const __returned__ = {
			route,
			router,
			setLocale,
			currentLocale,
			handleLocaleChange,
			get locales() {
				return locales;
			},
			get getLocaleName() {
				return getLocaleName;
			}
		};
		Object.defineProperty(__returned__, "__isScriptSetup", {
			enumerable: false,
			value: true
		});
		return __returned__;
	}
});
var _hoisted_1$2 = { class: "flex items-center gap-2" };
var _hoisted_2$1 = ["value"];
var _hoisted_3$1 = ["value"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", _hoisted_1$2, [createElementVNode("select", {
		value: $setup.currentLocale,
		onChange: _cache[0] || (_cache[0] = (e) => $setup.handleLocaleChange(e.target.value)),
		class: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
	}, [(openBlock(true), createElementBlock(Fragment, null, renderList($setup.locales, (localeItem) => {
		return openBlock(), createElementBlock("option", {
			key: localeItem,
			value: localeItem
		}, toDisplayString($setup.getLocaleName(localeItem)), 9, _hoisted_3$1);
	}), 128))], 40, _hoisted_2$1)]);
}
var LocaleSwitcher_default = _plugin_vue_export_helper_default(LocaleSwitcher_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render$3], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/LocaleSwitcher.vue"]]);
var theme_toggle_default = {
	key: "theme-toggle",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"d": "Theme: Auto",
				"e": "Theme: Dark",
				"f": "Theme: Light",
				"a": "Theme mode: auto (system). Click to switch to light mode.",
				"c": "Theme mode: light. Click to switch to dark mode.",
				"b": "Theme mode: dark. Click to switch to auto mode."
			},
			"fr": {
				"d": "Thème : Auto",
				"e": "Thème : Sombre",
				"f": "Thème : Clair",
				"a": "Mode de thème : auto (système). Cliquez pour passer au mode clair.",
				"c": "Mode de thème : clair. Cliquez pour passer au mode sombre.",
				"b": "Mode de thème : sombre. Cliquez pour passer au mode auto."
			},
			"es": {
				"d": "Tema: Automático",
				"e": "Tema: Oscuro",
				"f": "Tema: Claro",
				"a": "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
				"c": "Modo de tema: claro. Haga clic para cambiar al modo oscuro.",
				"b": "Modo de tema: oscuro. Haga clic para cambiar al modo automático."
			},
			"de": {
				"d": "Design: Auto",
				"e": "Design: Dunkel",
				"f": "Design: Hell",
				"a": "Design-Modus: Auto (System). Klicken Sie hier, um in den hellen Modus zu wechseln.",
				"c": "Design-Modus: Hell. Klicken Sie hier, um in den dunklen Modus zu wechseln.",
				"b": "Design-Modus: Dunkel. Klicken Sie hier, um in den automatischen Modus zu wechseln."
			},
			"it": {
				"d": "Tema: Auto",
				"e": "Tema: Scuro",
				"f": "Tema: Chiaro",
				"a": "Modalità tema: auto (sistema). Fai clic per passare alla modalità chiara.",
				"c": "Modalità tema: chiara. Fai clic per passare alla modalità scura.",
				"b": "Modalità tema: scura. Fai clic per passare alla modalità automatica."
			},
			"pt": {
				"d": "Tema: Automático",
				"e": "Tema: Escuro",
				"f": "Tema: Claro",
				"a": "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
				"c": "Modo de tema: claro. Clique para mudar para o modo escuro.",
				"b": "Modo de tema: escuro. Clique para mudar para o modo automático."
			},
			"zh": {
				"d": "主题：自动",
				"e": "主题：深色",
				"f": "主题：亮色",
				"a": "主题模式：自动（系统）。点击切换到亮色模式。",
				"c": "主题模式：浅色。点击切换到深色模式。",
				"b": "主题模式：深色。点击切换到自动模式。"
			},
			"ja": {
				"d": "テーマ：自動",
				"e": "テーマ：ダーク",
				"f": "テーマ：ライト",
				"a": "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。",
				"c": "テーマモード：ライト。クリックしてダークモードに切り替えます。",
				"b": "テーマモード：ダーク。クリックして自動モードに切り替えます。"
			},
			"ko": {
				"d": "테마: 자동",
				"e": "테마: 다크",
				"f": "테마: 라이트",
				"a": "테마 모드: 자동(시스템). 라이트 모드로 전환하려면 클릭하세요.",
				"c": "테마 모드: 라이트. 다크 모드로 전환하려면 클릭하세요.",
				"b": "테마 모드: 다크. 자동 모드로 전환하려면 클릭하세요."
			},
			"ru": {
				"d": "Тема: Авто",
				"e": "Тема: Темная",
				"f": "Тема: Светлая",
				"a": "Режим темы: авто (системный). Нажмите, чтобы перейти в светлую тему.",
				"c": "Режим темы: светлый. Нажмите, чтобы перейти в темную тему.",
				"b": "Режим темы: темный. Нажмите, чтобы перейти в автоматический режим."
			}
		}
	}
};
var ThemeToggle_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "ThemeToggle",
	setup(__props, { expose: __expose }) {
		__expose();
		const { d: auto, e: dark, f: light, a: ariaLabelAuto, c: ariaLabelLight, b: ariaLabelDark } = S(theme_toggle_default);
		const mode = ref("auto");
		function getInitialMode() {
			if (typeof window === "undefined") return "auto";
			const stored = window.localStorage.getItem("theme");
			if (stored === "light" || stored === "dark" || stored === "auto") return stored;
			return "auto";
		}
		function applyThemeMode(m) {
			const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
			const resolved = m === "auto" ? prefersDark ? "dark" : "light" : m;
			document.documentElement.classList.remove("light", "dark");
			document.documentElement.classList.add(resolved);
			if (m === "auto") document.documentElement.removeAttribute("data-theme");
			else document.documentElement.setAttribute("data-theme", m);
			document.documentElement.style.colorScheme = resolved;
		}
		onMounted(() => {
			const initialMode = getInitialMode();
			mode.value = initialMode;
			applyThemeMode(initialMode);
		});
		let mediaQueryListener = null;
		watch(mode, (newMode) => {
			if (newMode === "auto") {
				const media = window.matchMedia("(prefers-color-scheme: dark)");
				mediaQueryListener = () => applyThemeMode("auto");
				media.addEventListener("change", mediaQueryListener);
			} else if (mediaQueryListener) {
				window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", mediaQueryListener);
				mediaQueryListener = null;
			}
		}, { immediate: true });
		onUnmounted(() => {
			if (mediaQueryListener) window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", mediaQueryListener);
		});
		function toggleMode() {
			const nextMode = mode.value === "light" ? "dark" : mode.value === "dark" ? "auto" : "light";
			mode.value = nextMode;
			applyThemeMode(nextMode);
			window.localStorage.setItem("theme", nextMode);
		}
		const getLabel = () => mode.value === "auto" ? ariaLabelAuto.value : mode.value === "light" ? ariaLabelLight.value : ariaLabelDark.value;
		const __returned__ = {
			auto,
			dark,
			light,
			ariaLabelAuto,
			ariaLabelLight,
			ariaLabelDark,
			mode,
			getInitialMode,
			applyThemeMode,
			get mediaQueryListener() {
				return mediaQueryListener;
			},
			set mediaQueryListener(v) {
				mediaQueryListener = v;
			},
			toggleMode,
			getLabel
		};
		Object.defineProperty(__returned__, "__isScriptSetup", {
			enumerable: false,
			value: true
		});
		return __returned__;
	}
});
var _hoisted_1$1 = ["aria-label", "title"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("button", {
		type: "button",
		onClick: $setup.toggleMode,
		"aria-label": $setup.getLabel(),
		title: $setup.getLabel(),
		class: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"
	}, toDisplayString($setup.mode === "auto" ? $setup.auto : $setup.mode === "dark" ? $setup.dark : $setup.light), 9, _hoisted_1$1);
}
var ThemeToggle_default = _plugin_vue_export_helper_default(ThemeToggle_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render$2], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/ThemeToggle.vue"]]);
var Header_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "Header",
	setup(__props, { expose: __expose }) {
		__expose();
		usePerformanceMeasure("Header");
		const { h: home, i: methodology, j: mockPagesLabel, l: products, k: pricing, n: team, b: blog, c: careers, e: faq, d: contact, m: settings, a: appName, f: goToGithub } = S(header_default);
		const isMockPagesOpen = ref(false);
		const route = useRoute();
		const currentLocale = computed(() => route.params.locale || "en");
		const __returned__ = {
			home,
			methodology,
			mockPagesLabel,
			products,
			pricing,
			team,
			blog,
			careers,
			faq,
			contact,
			settings,
			appName,
			goToGithub,
			isMockPagesOpen,
			route,
			currentLocale,
			mockPagesList: computed(() => [
				{
					to: `/${currentLocale.value}/products`,
					label: products
				},
				{
					to: `/${currentLocale.value}/pricing`,
					label: pricing
				},
				{
					to: `/${currentLocale.value}/team`,
					label: team
				},
				{
					to: `/${currentLocale.value}/blog`,
					label: blog
				},
				{
					to: `/${currentLocale.value}/careers`,
					label: careers
				},
				{
					to: `/${currentLocale.value}/faq`,
					label: faq
				},
				{
					to: `/${currentLocale.value}/contact`,
					label: contact
				},
				{
					to: `/${currentLocale.value}/settings`,
					label: settings
				}
			]),
			get ChevronDown() {
				return ChevronDown;
			},
			LocaleSwitcher: LocaleSwitcher_default,
			ThemeToggle: ThemeToggle_default
		};
		Object.defineProperty(__returned__, "__isScriptSetup", {
			enumerable: false,
			value: true
		});
		return __returned__;
	}
});
var _hoisted_1 = { class: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg" };
var _hoisted_2 = { class: "container flex h-16 items-center justify-between" };
var _hoisted_3 = { class: "flex items-center gap-8" };
var _hoisted_4 = { class: "hidden items-center gap-6 text-sm font-medium md:flex" };
var _hoisted_5 = { class: "relative" };
var _hoisted_6 = { class: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1" };
var _hoisted_7 = { class: "flex items-center gap-4" };
var _hoisted_8 = {
	href: "https://github.com/intlayer-org/benchmark-i18n",
	target: "_blank",
	rel: "noreferrer",
	class: "text-muted-foreground transition hover:text-foreground"
};
var _hoisted_9 = { class: "sr-only" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_router_link = resolveComponent("router-link");
	return openBlock(), createElementBlock("header", _hoisted_1, [createElementVNode("nav", _hoisted_2, [createElementVNode("div", _hoisted_3, [createVNode(_component_router_link, {
		to: `/${$setup.currentLocale}`,
		class: "text-lg font-bold tracking-tight text-primary no-underline"
	}, {
		default: withCtx(() => [createTextVNode(toDisplayString($setup.appName), 1)]),
		_: 1
	}, 8, ["to"]), createElementVNode("div", _hoisted_4, [
		createVNode(_component_router_link, {
			to: `/${$setup.currentLocale}`,
			class: "nav-link",
			"exact-active-class": "is-active"
		}, {
			default: withCtx(() => [createTextVNode(toDisplayString($setup.home), 1)]),
			_: 1
		}, 8, ["to"]),
		createVNode(_component_router_link, {
			to: `/${$setup.currentLocale}/about`,
			class: "nav-link",
			"active-class": "is-active"
		}, {
			default: withCtx(() => [createTextVNode(toDisplayString($setup.methodology), 1)]),
			_: 1
		}, 8, ["to"]),
		createCommentVNode(" Mock Pages Dropdown "),
		createElementVNode("div", _hoisted_5, [createElementVNode("button", {
			type: "button",
			class: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
			onMouseenter: _cache[0] || (_cache[0] = ($event) => $setup.isMockPagesOpen = true),
			onMouseleave: _cache[1] || (_cache[1] = ($event) => $setup.isMockPagesOpen = false),
			onClick: _cache[2] || (_cache[2] = ($event) => $setup.isMockPagesOpen = !$setup.isMockPagesOpen)
		}, [createTextVNode(toDisplayString($setup.mockPagesLabel) + " ", 1), createVNode($setup["ChevronDown"], {
			size: 14,
			class: normalizeClass(["transition-transform", $setup.isMockPagesOpen ? "rotate-180" : ""])
		}, null, 8, ["class"])], 32), $setup.isMockPagesOpen ? (openBlock(), createElementBlock("div", {
			key: 0,
			class: "absolute left-0 top-full pt-2 w-48",
			onMouseenter: _cache[4] || (_cache[4] = ($event) => $setup.isMockPagesOpen = true),
			onMouseleave: _cache[5] || (_cache[5] = ($event) => $setup.isMockPagesOpen = false)
		}, [createElementVNode("div", _hoisted_6, [(openBlock(true), createElementBlock(Fragment, null, renderList($setup.mockPagesList, (page) => {
			return openBlock(), createBlock(_component_router_link, {
				key: page.to,
				to: page.to,
				class: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
				onClick: _cache[3] || (_cache[3] = ($event) => $setup.isMockPagesOpen = false)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(page.label), 1)]),
				_: 2
			}, 1032, ["to"]);
		}), 128))])], 32)) : createCommentVNode("v-if", true)])
	])]), createElementVNode("div", _hoisted_7, [
		createElementVNode("a", _hoisted_8, [createElementVNode("span", _hoisted_9, toDisplayString($setup.goToGithub), 1), _cache[6] || (_cache[6] = createElementVNode("svg", {
			viewBox: "0 0 16 16",
			"aria-hidden": "true",
			width: "20",
			height: "20"
		}, [createElementVNode("path", {
			fill: "currentColor",
			d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
		})], -1))]),
		createVNode($setup["LocaleSwitcher"]),
		createVNode($setup["ThemeToggle"])
	])])]);
}
var Header_default = _plugin_vue_export_helper_default(Header_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render$1], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/Header.vue"]]);
var Layout_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "Layout",
	setup(__props, { expose: __expose }) {
		__expose();
		const route = useRoute();
		const { setLocale } = a();
		const renderStart = ref(0);
		onBeforeMount(() => {
			renderStart.value = typeof performance !== "undefined" ? performance.now() : 0;
		});
		onMounted(() => {
			recordHydrationDuration();
			recordRenderTime("AppRoot", renderStart.value);
		});
		watch(() => route.params.locale, (newLocale) => {
			if (newLocale) {
				document.documentElement.lang = newLocale;
				setLocale(newLocale);
			}
		}, { immediate: true });
		const __returned__ = {
			route,
			setLocale,
			renderStart,
			Footer: Footer_default,
			Header: Header_default
		};
		Object.defineProperty(__returned__, "__isScriptSetup", {
			enumerable: false,
			value: true
		});
		return __returned__;
	}
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	const _component_router_view = resolveComponent("router-view");
	return openBlock(), createElementBlock(Fragment, null, [
		createVNode($setup["Header"]),
		createVNode(_component_router_view),
		createVNode($setup["Footer"])
	], 64);
}
var Layout_default = _plugin_vue_export_helper_default(Layout_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/Layout.vue"]]);
export { Layout_default as default };
