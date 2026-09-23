import { Dynamic, createComponent, delegateEvents, effect, insert, memo, mergeProps, setAttribute, template } from "solid-js/web";
import { A, useLocation, useNavigate, useParams } from "@solidjs/router";
import { For, Suspense, createContext, createEffect, createMemo, createSignal, on, onMount, untrack, useContext } from "solid-js";
import { recordHydrationDuration, recordRenderTime } from "test-utils/browser-metrics";
var e$1 = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		return n === "value" ? t : n === "toString" ? () => String(t) : n === Symbol.toPrimitive ? (e) => e === "string" ? String(t) : e === "number" ? Number(t) : t : Reflect.get(e, n, r);
	} });
};
var t$1 = (n) => {
	if (typeof n == "string") return n;
	let { type: r, props: i } = ((e) => {
		if (e?.props && typeof e.props.children == "object") {
			let n = [], { children: r } = e.props;
			return Object.keys(r ?? {}).forEach((e) => {
				n.push(t$1(r?.[e]));
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
	transform: (t, { plugins: a, ...o }) => e$1({
		...o,
		value: o.children,
		children: o.children
	})
}, C = process.env.INTLAYER_NODE_TYPE_SOLID_NODE === "false" ? fallbackPlugin : {
	id: "solid-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 || typeof Node < "u" && e instanceof Node,
	transform: (a, { plugins: o, ...s }) => e$1({
		...s,
		value: "[[solid-element]]",
		children: typeof Node < "u" && a instanceof Node ? a : t$1(a)
	})
}, T = fallbackPlugin, D = fallbackPlugin, O = fallbackPlugin, k = /* @__PURE__ */ new Map(), A$1 = (e, t = !0) => {
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
var n$1 = (n, r) => getDictionary(n, r, A$1(r));
var localeResolver = (selectedLocale, locales = internationalization?.locales, defaultLocale = internationalization?.defaultLocale) => {
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
var TREE_SHAKE_STORAGE_COOKIES = process.env["INTLAYER_ROUTING_STORAGE_COOKIES"] === "false";
process.env["INTLAYER_ROUTING_STORAGE_HEADERS"];
var buildCookieString = (name, value, attributes) => {
	const parts = [`${name}=${encodeURIComponent(value)}`];
	if (attributes.path) parts.push(`Path=${attributes.path}`);
	if (attributes.domain) parts.push(`Domain=${attributes.domain}`);
	if (attributes.expires instanceof Date) parts.push(`Expires=${attributes.expires.toUTCString()}`);
	if (attributes.secure) parts.push("Secure");
	if (attributes.sameSite) parts.push(`SameSite=${attributes.sameSite}`);
	return parts.join("; ");
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
				expires: attributes.expires instanceof Date ? attributes.expires.getTime() : attributes.expires
			});
		} catch {
			try {
				if (options?.setCookieString) options.setCookieString(name, buildCookieString(name, locale, attributes));
			} catch {}
		}
	}
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
}, a$1 = getLocaleFromStorageClient(localeStorageOptions), s = (e, n) => setLocaleInStorageClient(e, {
	...localeStorageOptions,
	isCookieEnabled: n
});
var setIntlayerIdentifier = () => {
	if (typeof window !== "undefined") window.intlayer = { enabled: true };
}, v = null, y = createContext({
	locale: () => a$1 ?? internationalization?.defaultLocale,
	setLocale: () => null
}), x = (r) => {
	let { defaultLocale: i, locales: o } = internationalization ?? {}, [s$1, d] = createSignal(r.locale ?? a$1 ?? r.defaultLocale ?? i), h = r.setLocale ?? ((e) => {
		if (s$1().toString() !== e.toString()) {
			if (!o?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			d(e), s(e, r.isCookieEnabled);
		}
	}), v = createMemo(() => localeResolver(s$1()));
	return createEffect(on(() => r.locale, (e) => {
		e && e !== untrack(s$1) && d(e);
	}, { defer: !0 })), onMount(() => {
		setIntlayerIdentifier();
	}), createComponent(y.Provider, {
		value: {
			locale: v,
			setLocale: h
		},
		get children() {
			return r.children;
		}
	});
}, S = (e) => createComponent(x, mergeProps(e, { get children() {
	return [memo(() => memo(() => false)() && createComponent(Suspense, { get children() {
		return createComponent(v, {});
	} })), memo(() => e.children)];
} }));
var i = (i, a) => {
	let o = useContext(y) ?? {};
	return createMemo(() => n$1(i, a ?? o?.locale?.()));
};
var e = (e) => {
	let t = "pending", n, r = e.then((e) => {
		t = "success", n = e;
	}, (e) => {
		t = "error", n = e;
	});
	return { read() {
		if (t === "pending") throw r;
		if (t === "error") throw n;
		return n;
	} };
}, t = /* @__PURE__ */ new Map(), n = (n, r) => (t.has(n) || t.set(n, e(r)), t.get(n).read());
var a = (a, o, s) => {
	let { locale: c } = useContext(y) ?? {}, l = internationalization.defaultLocale, u = s ?? c?.() ?? l;
	return i(n(`${String(o)}.${u}`, a[u]?.()), u);
};
var content$2 = {
	"de": () => import("../../.intlayer/dynamic_dictionary/json/footer/de.json").then((m) => m.default),
	"en": () => import("./en-DHhlOEhJ.js").then((m) => m.default),
	"es": () => import("../../.intlayer/dynamic_dictionary/json/footer/es.json").then((m) => m.default),
	"fr": () => import("../../.intlayer/dynamic_dictionary/json/footer/fr.json").then((m) => m.default),
	"it": () => import("../../.intlayer/dynamic_dictionary/json/footer/it.json").then((m) => m.default),
	"ja": () => import("../../.intlayer/dynamic_dictionary/json/footer/ja.json").then((m) => m.default),
	"ko": () => import("../../.intlayer/dynamic_dictionary/json/footer/ko.json").then((m) => m.default),
	"pt": () => import("../../.intlayer/dynamic_dictionary/json/footer/pt.json").then((m) => m.default),
	"ru": () => import("../../.intlayer/dynamic_dictionary/json/footer/ru.json").then((m) => m.default),
	"zh": () => import("../../.intlayer/dynamic_dictionary/json/footer/zh.json").then((m) => m.default)
};
var _tmpl$$3 = template(`<footer class="mt-20 border-t border-border bg-card"><div class="container py-8"><div class="grid gap-8 md:grid-cols-3"><div><h3 class="mb-2 text-sm font-semibold text-foreground">i18n Benchmark</h3><p class="text-sm text-muted-foreground"></p></div><div><h3 class="mb-2 text-sm font-semibold text-foreground"></h3><ul class=space-y-1><li><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class="text-sm text-muted-foreground transition-colors hover:text-foreground">GitHub</a></li><li></li><li></li></ul></div><div><h3 class="mb-2 text-sm font-semibold text-foreground"></h3><p class="text-sm text-muted-foreground">contact@intlayer.org</p></div></div><div class="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">`);
function Footer() {
	const content = a(content$2, "footer");
	const params = useParams();
	const locale = () => params.locale ?? "en";
	return (() => {
		var _el$ = _tmpl$$3(), _el$3 = _el$.firstChild.firstChild, _el$4 = _el$3.firstChild, _el$6 = _el$4.firstChild.nextSibling, _el$7 = _el$4.nextSibling, _el$8 = _el$7.firstChild, _el$1 = _el$8.nextSibling.firstChild.nextSibling, _el$10 = _el$1.nextSibling, _el$12 = _el$7.nextSibling.firstChild, _el$13 = _el$3.nextSibling;
		insert(_el$6, () => content().anOpenSourceTestApplication);
		insert(_el$8, () => content().resources);
		insert(_el$1, createComponent(A, {
			get href() {
				return `/${locale()}/about`;
			},
			"class": "text-sm text-muted-foreground transition-colors hover:text-foreground",
			get children() {
				return content().methodology;
			}
		}));
		insert(_el$10, createComponent(A, {
			get href() {
				return `/${locale()}/contact`;
			},
			"class": "text-sm text-muted-foreground transition-colors hover:text-foreground",
			get children() {
				return content().contributing;
			}
		}));
		insert(_el$12, () => content().contact);
		insert(_el$13, () => content().i18nBenchmarkOpenSourceProject);
		return _el$;
	})();
}
var content$1 = {
	"de": () => import("../../.intlayer/dynamic_dictionary/json/header/de.json").then((m) => m.default),
	"en": () => import("./en-CuZfIsSV.js").then((m) => m.default),
	"es": () => import("../../.intlayer/dynamic_dictionary/json/header/es.json").then((m) => m.default),
	"fr": () => import("../../.intlayer/dynamic_dictionary/json/header/fr.json").then((m) => m.default),
	"it": () => import("../../.intlayer/dynamic_dictionary/json/header/it.json").then((m) => m.default),
	"ja": () => import("../../.intlayer/dynamic_dictionary/json/header/ja.json").then((m) => m.default),
	"ko": () => import("../../.intlayer/dynamic_dictionary/json/header/ko.json").then((m) => m.default),
	"pt": () => import("../../.intlayer/dynamic_dictionary/json/header/pt.json").then((m) => m.default),
	"ru": () => import("../../.intlayer/dynamic_dictionary/json/header/ru.json").then((m) => m.default),
	"zh": () => import("../../.intlayer/dynamic_dictionary/json/header/zh.json").then((m) => m.default)
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
var _tmpl$$2 = template(`<div class="flex items-center gap-2"><select class="h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-primary">`), _tmpl$2$1 = template(`<option>`);
function LocaleSwitcher() {
	const params = useParams();
	const navigate = useNavigate();
	const location = useLocation();
	const handleLocaleChange = (newLocale) => {
		navigate(`${location.pathname.replace(/^\/[^/]+/, `/${newLocale}`)}${location.search}${location.hash}`);
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
var content = {
	"de": () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/de.json").then((m) => m.default),
	"en": () => import("./en-E08Ak35c.js").then((m) => m.default),
	"es": () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/es.json").then((m) => m.default),
	"fr": () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/fr.json").then((m) => m.default),
	"it": () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/it.json").then((m) => m.default),
	"ja": () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ja.json").then((m) => m.default),
	"ko": () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ko.json").then((m) => m.default),
	"pt": () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/pt.json").then((m) => m.default),
	"ru": () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ru.json").then((m) => m.default),
	"zh": () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/zh.json").then((m) => m.default)
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
	const content$3 = a(content, "theme-toggle");
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
	const label = () => mode() === "auto" ? content$3().themeModeAutoSystemClick.value : `Theme mode: ${mode()}. Click to switch mode.`;
	const buttonText = () => mode() === "auto" ? content$3().themeAuto.value : mode() === "dark" ? content$3().themeDark.value : content$3().themeLight.value;
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
var _tmpl$ = template(`<svg width=14 height=14 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round aria-hidden=true><path d="m6 9 6 6 6-6">`), _tmpl$2 = template(`<header class="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg"><nav class="container flex h-16 items-center justify-between"><div class="flex items-center gap-8"><div class="hidden items-center gap-6 text-sm font-medium md:flex"><div class=relative><button type=button class="flex cursor-pointer items-center gap-1 border-none bg-transparent nav-link"></button></div></div></div><div class="flex items-center gap-4"><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class="text-muted-foreground transition hover:text-foreground"><span class=sr-only></span><svg viewBox="0 0 16 16"aria-hidden=true width=20 height=20><path fill=currentColor d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">`), _tmpl$3 = template(`<div class="absolute left-0 top-full w-48 pt-2"><div class="overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg">`);
function ChevronDown(props) {
	return (() => {
		var _el$ = _tmpl$();
		effect(() => setAttribute(_el$, "class", props.class));
		return _el$;
	})();
}
function Header() {
	const content = a(content$1, "header");
	usePerformanceMeasure(content().header.value);
	const [isMockPagesOpen, setIsMockPagesOpen] = createSignal(false);
	const params = useParams();
	const currentLocale = () => params.locale ?? "en";
	const mockPages = () => [
		{
			to: `/${currentLocale()}/products`,
			label: content().products.value
		},
		{
			to: `/${currentLocale()}/pricing`,
			label: content().pricing.value
		},
		{
			to: `/${currentLocale()}/team`,
			label: content().team.value
		},
		{
			to: `/${currentLocale()}/blog`,
			label: content().blog.value
		},
		{
			to: `/${currentLocale()}/careers`,
			label: content().careers.value
		},
		{
			to: `/${currentLocale()}/faq`,
			label: content().faq.value
		},
		{
			to: `/${currentLocale()}/contact`,
			label: content().contact.value
		},
		{
			to: `/${currentLocale()}/settings`,
			label: content().settings.value
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
				return content().home;
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
				return content().methodology;
			}
		}), _el$6);
		_el$7.$$click = () => setIsMockPagesOpen(!isMockPagesOpen());
		_el$7.addEventListener("mouseleave", () => setIsMockPagesOpen(false));
		_el$7.addEventListener("mouseenter", () => setIsMockPagesOpen(true));
		insert(_el$7, () => content().mockPages, null);
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
		insert(_el$0, () => content().goToGithub);
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
	return createComponent(S, {
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
var en_default = {
	key: "header",
	content: {
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
	}
};
export { en_default as default };
var en_default = {
	key: "footer",
	content: {
		"a": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
		"f": "Resources",
		"e": "Methodology",
		"c": "Contributing",
		"b": "Contact",
		"d": "i18n Benchmark — Open-source project. Built with Solid, Vite & Solid Router."
	}
};
export { en_default as default };
var en_default = {
	key: "theme-toggle",
	content: {
		"d": "Theme mode: auto (system). Click to switch to light mode.",
		"a": "Theme: Auto",
		"b": "Theme: Dark",
		"c": "Theme: Light"
	}
};
export { en_default as default };
