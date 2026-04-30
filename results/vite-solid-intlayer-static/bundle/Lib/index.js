import { r as internationalization } from "./configuration-xVLV3WNi.js";
import { a as fallbackPlugin, c as nestedPlugin, i as enumerationPlugin, l as translationPlugin, n as getContent, o as filePlugin, r as conditionPlugin, s as genderPlugin, t as getBasePlugins } from "./getContent-gxxqv3yZ.js";
import { n as b, t as C$1 } from "./IntlayerProvider-CcGBlRyY.js";
import _5YAR0pGEba36ehifjZtw from "../.intlayer/dictionary/header.json";
import { Dynamic, createComponent } from "solid-js/web";
import { createMemo, useContext } from "solid-js";
var getDictionary = (dictionary, locale, plugins = getBasePlugins(locale)) => {
	const props = {
		dictionaryKey: dictionary.key,
		dictionaryPath: dictionary.filePath,
		keyPath: [],
		plugins
	};
	return getContent(dictionary.content, props, plugins);
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
}, S = {
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
		S,
		C,
		T,
		D,
		O
	];
	return k.set(n, r), r;
};
var n = (n, r) => getDictionary(n, r, A(r));
var i = (i, a) => {
	let o = useContext(b) ?? {};
	return createMemo(() => n(i, a ?? o?.locale?.()));
};
var TestComponent = () => {
	i(_5YAR0pGEba36ehifjZtw);
	return null;
};
function EmptyComponent() {
	return createComponent(C$1, {
		get locale() {
			return "en";
		},
		get children() {
			return createComponent(TestComponent, {});
		}
	});
}
export { EmptyComponent as default };
import "./IntlayerProvider-CcGBlRyY.js";
import "solid-js";
var s = () => {};
var t = ({ children: t }) => (s(), t);
export { t as EditorProvider };
import { i as routing, r as internationalization } from "./configuration-xVLV3WNi.js";
import { createComponent, memo, mergeProps } from "solid-js/web";
import { Suspense, createContext, createEffect, createMemo, createSignal, lazy, on, onMount, untrack, useContext } from "solid-js";
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
}, a = getLocaleFromStorageClient(localeStorageOptions), s = (e, n) => setLocaleInStorageClient(e, {
	...localeStorageOptions,
	isCookieEnabled: n
});
var setIntlayerIdentifier = () => {
	if (typeof window !== "undefined") window.intlayer = { enabled: true };
};
var v = true, y = v ? null : lazy(() => import("./EditorProvider-kbN_49EW.js").then((e) => ({ default: e.EditorProvider }))), b = createContext({
	locale: () => a ?? internationalization?.defaultLocale,
	setLocale: () => null
}), x = () => useContext(b) ?? {}, S = (r) => {
	let { defaultLocale: i, locales: o } = internationalization ?? {}, [s$1, d] = createSignal(r.locale ?? a ?? r.defaultLocale ?? i), h = r.setLocale ?? ((e) => {
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
	}), createComponent(b.Provider, {
		value: {
			locale: v,
			setLocale: h
		},
		get children() {
			return r.children;
		}
	});
}, C = (e) => createComponent(S, mergeProps(e, { get children() {
	return [memo(() => !v && y && createComponent(Suspense, { get children() {
		return createComponent(y, {});
	} })), memo(() => e.children)];
} }));
export { b as n, x as r, C as t };
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
var editor = {
	"applicationURL": "http://localhost:3000",
	"editorURL": "http://localhost:8000",
	"cmsURL": "https://app.intlayer.org",
	"backendURL": "https://back.intlayer.org",
	"port": 8e3,
	"enabled": false,
	"dictionaryPriorityStrategy": "local_first",
	"liveSync": true,
	"liveSyncPort": 4e3,
	"liveSyncURL": "http://localhost:4000"
};
var configuration = {
	internationalization,
	routing,
	editor,
	log: {
		"mode": "default",
		"prefix": "\x1B[38;5;239m[intlayer] \x1B[0m"
	},
	system: {
		"baseDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app",
		"moduleAugmentationDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/types",
		"unmergedDictionariesDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/unmerged_dictionary",
		"remoteDictionariesDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/remote_dictionary",
		"dictionariesDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/dictionary",
		"dynamicDictionariesDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/dynamic_dictionary",
		"fetchDictionariesDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/fetch_dictionary",
		"typesDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/types",
		"mainDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/main",
		"configDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/config",
		"cacheDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/cache",
		"tempDir": "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/tmp"
	},
	content: {
		"fileExtensions": [
			".content.ts",
			".content.js",
			".content.cjs",
			".content.mjs",
			".content.json",
			".content.json5",
			".content.jsonc",
			".content.tsx",
			".content.jsx"
		],
		"contentDir": ["/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app"],
		"codeDir": ["/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app"],
		"excludedPath": [
			"**/node_modulesdistbuild.intlayer.next.nuxt.expo.vercel.turbo.tanstack*.{tsx,ts,js,mjs,cjs,jsx,vue,svelte,astro}",
			"!**/node_modulesdistbuild.intlayer.next.nuxt.expo.vercel.turbo.tanstack*.config.*",
			"!***.spec.*",
			"!***.d.ts",
			"!***.map"
		],
		"outputFormat": ["esm", "cjs"],
		"cache": true,
		"checkTypes": false
	},
	ai,
	dictionary,
	build,
	compiler: {
		"enabled": true,
		"dictionaryKeyPrefix": "",
		"noMetadata": false,
		"saveComponents": false
	}
};
export { routing as i, editor as n, internationalization as r, configuration as t };
import { n as editor, t as configuration } from "./configuration-xVLV3WNi.js";
import { n as getContent, t as getBasePlugins, y as TRANSLATION } from "./getContent-gxxqv3yZ.js";
var isSameKeyPath = (keyPath1, keyPath2) => keyPath1.every((element, index) => keyPath2[index] && keyPath2[index].key === element.key && keyPath2[index].type === element.type);
var compareUrls = (url1, url2) => {
	try {
		const parsedUrl1 = new URL(url1);
		const parsedUrl2 = new URL(url2);
		if (parsedUrl1.protocol !== parsedUrl2.protocol || parsedUrl1.hostname !== parsedUrl2.hostname || parsedUrl1.port !== parsedUrl2.port) return false;
		const path1 = parsedUrl1.pathname.replace(/\/$/, "");
		const path2 = parsedUrl2.pathname.replace(/\/$/, "");
		if (path1 !== "" && path2 !== "" && path1 !== path2) return false;
		return true;
	} catch (error) {
		console.error("Invalid URL(s)", error, {
			url1,
			url2
		});
		return false;
	}
};
var mergeIframeClick = (event) => {
	const simulatedMouseDownEvent = new MouseEvent("mousedown", {
		bubbles: true,
		cancelable: true,
		view: window
	});
	const simulatedClickEvent = new MouseEvent("click", {
		bubbles: true,
		cancelable: true,
		view: window
	});
	Object.assign(simulatedClickEvent, { iframeData: event });
	Object.assign(simulatedMouseDownEvent, { iframeData: event });
	window.dispatchEvent(simulatedClickEvent);
	window.dispatchEvent(simulatedMouseDownEvent);
};
var MANAGER_KEY = "__intlayer_editor_manager__";
var EVENTS_KEY = "__intlayer_editor_manager_events__";
var getEventTarget = () => {
	if (typeof window === "undefined") return new EventTarget();
	const windowGlobals = window;
	if (!windowGlobals[EVENTS_KEY]) windowGlobals[EVENTS_KEY] = new EventTarget();
	return windowGlobals[EVENTS_KEY];
};
var getGlobalEditorManager = () => {
	if (typeof window === "undefined") return null;
	return window[MANAGER_KEY] ?? null;
};
var setGlobalEditorManager = (manager) => {
	if (typeof window !== "undefined") {
		const windowGlobals = window;
		windowGlobals[MANAGER_KEY] = manager;
	}
	getEventTarget().dispatchEvent(new CustomEvent("change", { detail: manager }));
};
var onGlobalEditorManagerChange = (changeCallback) => {
	const eventTarget = getEventTarget();
	const eventHandler = (event) => {
		changeCallback(event.detail);
	};
	eventTarget.addEventListener("change", eventHandler);
	return () => {
		eventTarget.removeEventListener("change", eventHandler);
	};
};
var _HTMLElement$3 = typeof HTMLElement !== "undefined" ? HTMLElement : class {};
var IntlayerContentSelectorWrapperElement = class extends _HTMLElement$3 {
	_keyPathJson = "[]";
	_dictionaryKey = "";
	_editorEnabled = false;
	_isInIframe = false;
	_isSelected = false;
	_editedValue = void 0;
	_renderState = null;
	_selector = null;
	_unsubManager = null;
	_unsubEnabled = null;
	_unsubFocused = null;
	_unsubEditedContent = null;
	static get observedAttributes() {
		return ["key-path", "dictionary-key"];
	}
	get keyPathJson() {
		return this._keyPathJson;
	}
	set keyPathJson(v) {
		this._keyPathJson = v;
		const manager = getGlobalEditorManager();
		if (manager) this._updateEditedValue(manager);
	}
	get dictionaryKey() {
		return this._dictionaryKey;
	}
	set dictionaryKey(v) {
		this._dictionaryKey = v;
		const manager = getGlobalEditorManager();
		if (manager) this._updateEditedValue(manager);
	}
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: "open" });
		const style = document.createElement("style");
		style.textContent = ":host { display: contents; }";
		shadow.appendChild(style);
	}
	attributeChangedCallback(name, _oldVal, newVal) {
		if (name === "key-path") {
			this._keyPathJson = newVal ?? "[]";
			const manager = getGlobalEditorManager();
			if (manager) this._updateEditedValue(manager);
		} else if (name === "dictionary-key") {
			this._dictionaryKey = newVal ?? "";
			const manager = getGlobalEditorManager();
			if (manager) this._updateEditedValue(manager);
		}
	}
	connectedCallback() {
		if (typeof window !== "undefined") this._isInIframe = window.self !== window.top;
		this._subscribeToManager();
		this._render();
	}
	disconnectedCallback() {
		this._teardown();
	}
	_teardown() {
		this._unsubManager?.();
		this._unsubEnabled?.();
		this._unsubFocused?.();
		this._unsubEditedContent?.();
		this._unsubManager = null;
		this._unsubEnabled = null;
		this._unsubFocused = null;
		this._unsubEditedContent = null;
	}
	_getRawKeyPath() {
		try {
			return JSON.parse(this._keyPathJson);
		} catch {
			return [];
		}
	}
	_getFilteredKeyPath() {
		return this._getRawKeyPath().filter((k) => k.type !== TRANSLATION);
	}
	_updateEditedValue(manager) {
		const filteredKeyPath = this._getFilteredKeyPath();
		if (!this._dictionaryKey || filteredKeyPath.length === 0) {
			this._editedValue = void 0;
			this._render();
			return;
		}
		const rawKeyPath = this._getRawKeyPath();
		const lastStepType = rawKeyPath[rawKeyPath.length - 1]?.type;
		if (lastStepType === "markdown" || lastStepType === "html" || lastStepType === "insertion" || lastStepType === "file") {
			this._editedValue = void 0;
			this._render();
			return;
		}
		let value = manager.getContentValue(this._dictionaryKey, filteredKeyPath);
		if (value !== null && value !== void 0 && typeof value === "object" && value.nodeType === "translation") {
			const locale = manager.currentLocale.value;
			value = locale ? value[TRANSLATION][locale] : void 0;
		}
		this._editedValue = value;
		this._render();
	}
	_updateIsSelected(focusedContent) {
		if (!focusedContent) {
			this._isSelected = false;
			this._updateSelectorAttr();
			return;
		}
		const keyPath = this._getFilteredKeyPath();
		this._isSelected = focusedContent.dictionaryKey === this._dictionaryKey && (focusedContent.keyPath?.length ?? 0) > 0 && isSameKeyPath(focusedContent.keyPath ?? [], keyPath);
		this._updateSelectorAttr();
	}
	_updateSelectorAttr() {
		if (!this._selector) return;
		if (this._isSelected) this._selector.setAttribute("is-selecting", "");
		else this._selector.removeAttribute("is-selecting");
	}
	_subscribeToManager() {
		const manager = getGlobalEditorManager();
		if (manager) this._setupManagerSubscriptions(manager);
		this._unsubManager = onGlobalEditorManagerChange((m) => {
			this._unsubEnabled?.();
			this._unsubFocused?.();
			this._unsubEditedContent?.();
			this._unsubEnabled = null;
			this._unsubFocused = null;
			this._unsubEditedContent = null;
			if (m) this._setupManagerSubscriptions(m);
			else {
				this._editorEnabled = false;
				this._isSelected = false;
				this._editedValue = void 0;
				this._render();
			}
		});
	}
	_setupManagerSubscriptions(manager) {
		this._editorEnabled = manager.editorEnabled.value ?? false;
		this._updateIsSelected(manager.focusedContent.value);
		this._updateEditedValue(manager);
		const handleEnabledChange = (e) => {
			this._editorEnabled = e.detail;
			this._render();
		};
		const handleFocusedChange = (e) => {
			this._updateIsSelected(e.detail);
		};
		const handleEditedContentChange = () => {
			this._updateEditedValue(manager);
		};
		manager.editorEnabled.addEventListener("change", handleEnabledChange);
		manager.focusedContent.addEventListener("change", handleFocusedChange);
		manager.editedContent.addEventListener("change", handleEditedContentChange);
		this._unsubEnabled = () => manager.editorEnabled.removeEventListener("change", handleEnabledChange);
		this._unsubFocused = () => manager.focusedContent.removeEventListener("change", handleFocusedChange);
		this._unsubEditedContent = () => manager.editedContent.removeEventListener("change", handleEditedContentChange);
	}
	_handlePress(e) {
		e.stopPropagation();
		const manager = getGlobalEditorManager();
		if (!manager) return;
		manager.focusedContent.set({
			dictionaryKey: this._dictionaryKey,
			keyPath: this._getFilteredKeyPath()
		});
	}
	_handleHover(e) {
		e.stopPropagation();
		getGlobalEditorManager()?.messenger.send(`INTLAYER_HOVERED_CONTENT_CHANGED/post`, {
			dictionaryKey: this._dictionaryKey,
			keyPath: this._getFilteredKeyPath()
		});
	}
	_handleUnhover(e) {
		e.stopPropagation();
		getGlobalEditorManager()?.messenger.send(`INTLAYER_HOVERED_CONTENT_CHANGED/post`, null);
	}
	_render() {
		const useWrapper = this._isInIframe && this._editorEnabled;
		const editedValue = this._editedValue;
		const newState = !useWrapper ? "simple" : typeof editedValue === "string" || typeof editedValue === "number" || typeof editedValue === "boolean" ? "wrapped-text" : "wrapped-slot";
		if (this._renderState !== newState) {
			this._rebuildContent(newState);
			return;
		}
		if (newState !== "simple" && this._selector) {
			this._updateSelectorAttr();
			if (newState === "wrapped-text" && this._selector.firstChild?.nodeType === Node.TEXT_NODE) this._selector.firstChild.data = String(editedValue);
		}
	}
	_rebuildContent(state) {
		const shadow = this.shadowRoot;
		while (shadow.childNodes.length > 1) shadow.removeChild(shadow.lastChild);
		this._selector = null;
		if (state === "simple") shadow.appendChild(document.createElement("slot"));
		else {
			const selector = document.createElement("intlayer-content-selector");
			this._selector = selector;
			if (this._isSelected) selector.setAttribute("is-selecting", "");
			selector.addEventListener("intlayer:press", (e) => this._handlePress(e));
			selector.addEventListener("intlayer:hover", (e) => this._handleHover(e));
			selector.addEventListener("intlayer:unhover", (e) => this._handleUnhover(e));
			if (state === "wrapped-text") selector.appendChild(document.createTextNode(String(this._editedValue)));
			else selector.appendChild(document.createElement("slot"));
			shadow.appendChild(selector);
		}
		this._renderState = state;
	}
};
var defineIntlayerContentSelectorWrapper = () => {
	if (typeof customElements === "undefined") return;
	if (!customElements.get("intlayer-content-selector-wrapper")) customElements.define("intlayer-content-selector-wrapper", IntlayerContentSelectorWrapperElement);
};
var _HTMLElement$2 = typeof HTMLElement !== "undefined" ? HTMLElement : class {};
var IntlayerEditedContentElement = class extends _HTMLElement$2 {
	_dictionaryKey = "";
	_keyPathJson = "[]";
	_locale = "";
	_editedText = null;
	_unsubManager = null;
	_unsubEditedContent = null;
	_selectorWrapper;
	_slot;
	static get observedAttributes() {
		return [
			"dictionary-key",
			"key-path",
			"locale"
		];
	}
	get dictionaryKey() {
		return this._dictionaryKey;
	}
	set dictionaryKey(v) {
		this._dictionaryKey = v;
		this._selectorWrapper.setAttribute("dictionary-key", v);
	}
	get keyPathJson() {
		return this._keyPathJson;
	}
	set keyPathJson(v) {
		this._keyPathJson = v;
		this._selectorWrapper.setAttribute("key-path", v);
	}
	get locale() {
		return this._locale;
	}
	set locale(v) {
		this._locale = v;
	}
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: "open" });
		const style = document.createElement("style");
		style.textContent = ":host { display: contents; }";
		shadow.appendChild(style);
		this._selectorWrapper = document.createElement("intlayer-content-selector-wrapper");
		this._slot = document.createElement("slot");
		this._selectorWrapper.appendChild(this._slot);
		shadow.appendChild(this._selectorWrapper);
	}
	attributeChangedCallback(name, _oldVal, newVal) {
		const val = newVal ?? "";
		if (name === "dictionary-key") {
			this._dictionaryKey = val;
			this._selectorWrapper.setAttribute("dictionary-key", val);
		} else if (name === "key-path") {
			this._keyPathJson = val || "[]";
			this._selectorWrapper.setAttribute("key-path", this._keyPathJson);
		} else if (name === "locale") this._locale = val;
	}
	connectedCallback() {
		this._subscribeToManager();
	}
	disconnectedCallback() {
		this._teardown();
	}
	_teardown() {
		this._unsubManager?.();
		this._unsubEditedContent?.();
		this._unsubManager = null;
		this._unsubEditedContent = null;
	}
	_getKeyPath() {
		try {
			return JSON.parse(this._keyPathJson);
		} catch {
			return [];
		}
	}
	_render() {
		while (this._selectorWrapper.firstChild) this._selectorWrapper.removeChild(this._selectorWrapper.firstChild);
		if (this._editedText !== null) this._selectorWrapper.appendChild(document.createTextNode(this._editedText));
		else this._selectorWrapper.appendChild(this._slot);
	}
	_resolveEditedText(manager) {
		const keyPath = this._getKeyPath();
		const editedValue = manager.getContentValue(this._dictionaryKey, keyPath);
		if (editedValue === void 0 || editedValue === null) {
			this._editedText = null;
			this._render();
			return;
		}
		if (typeof editedValue === "string" || typeof editedValue === "number") {
			this._editedText = String(editedValue);
			this._render();
			return;
		}
		if (typeof editedValue === "object") {
			const locale = this._locale || void 0;
			const transformed = getContent(editedValue, {
				locale,
				dictionaryKey: this._dictionaryKey,
				keyPath
			}, getBasePlugins(locale));
			if (typeof transformed === "string" || typeof transformed === "number") this._editedText = String(transformed);
			else {
				console.error(`[intlayer-edited-content] Incorrect edited content format. Expected string. Value: ${JSON.stringify(transformed)}`);
				this._editedText = null;
			}
			this._render();
			return;
		}
		this._editedText = null;
		this._render();
	}
	_setupManagerSubscriptions(manager) {
		this._resolveEditedText(manager);
		const handleChange = () => this._resolveEditedText(manager);
		manager.editedContent.addEventListener("change", handleChange);
		this._unsubEditedContent = () => manager.editedContent.removeEventListener("change", handleChange);
	}
	_subscribeToManager() {
		const manager = getGlobalEditorManager();
		if (manager) this._setupManagerSubscriptions(manager);
		this._unsubManager = onGlobalEditorManagerChange((m) => {
			this._unsubEditedContent?.();
			this._unsubEditedContent = null;
			if (m) this._setupManagerSubscriptions(m);
			else {
				this._editedText = null;
				this._render();
			}
		});
	}
};
var defineIntlayerEditedContent = () => {
	if (typeof customElements === "undefined") return;
	if (!customElements.get("intlayer-edited-content")) customElements.define("intlayer-edited-content", IntlayerEditedContentElement);
};
var randomUUID = () => Math.random().toString(36).slice(2);
var CrossFrameMessenger = class {
	senderId;
	_config;
	_subscribers = /* @__PURE__ */ new Map();
	_windowHandler = null;
	_seenMessageIds = /* @__PURE__ */ new Set();
	constructor(config) {
		this._config = config;
		this.senderId = randomUUID();
	}
	start() {
		if (typeof window === "undefined") return;
		if (this._windowHandler) return;
		this._windowHandler = (event) => {
			this._handleMessage(event);
		};
		window.addEventListener("message", this._windowHandler);
	}
	stop() {
		if (this._windowHandler) {
			window.removeEventListener("message", this._windowHandler);
			this._windowHandler = null;
		}
	}
	send(type, data) {
		const payload = {
			type,
			data,
			senderId: this.senderId,
			messageId: randomUUID()
		};
		for (const origin of this._config.allowedOrigins) if (origin) this._config.postMessageFn(payload, origin);
	}
	subscribe(type, handler) {
		if (!this._subscribers.has(type)) this._subscribers.set(type, /* @__PURE__ */ new Set());
		this._subscribers.get(type).add(handler);
		return () => {
			this._subscribers.get(type)?.delete(handler);
		};
	}
	_handleMessage(event) {
		const payload = event.data;
		if (!payload || typeof payload !== "object") return;
		const { type, data, senderId: msgSenderId, messageId } = payload;
		if (!type || typeof type !== "string") return;
		if (msgSenderId === this.senderId) return;
		if (messageId) {
			if (this._seenMessageIds.has(messageId)) return;
			this._seenMessageIds.add(messageId);
			if (this._seenMessageIds.size > 200) this._seenMessageIds.clear();
		}
		const { allowedOrigins } = this._config;
		if (!(!allowedOrigins || allowedOrigins.length === 0 || allowedOrigins.includes("*") || allowedOrigins.filter((url) => Boolean(url) && url !== "").some((url) => compareUrls(url, event.origin)))) return;
		const handlers = this._subscribers.get(type);
		if (handlers) for (const handler of handlers) handler(data, msgSenderId);
	}
};
var CrossFrameStateManager = class extends EventTarget {
	_value;
	_key;
	_messenger;
	_options;
	_unsubscribers = [];
	constructor(key, messenger, options = {}) {
		super();
		this._key = key;
		this._messenger = messenger;
		this._options = {
			emit: options.emit ?? true,
			receive: options.receive ?? true
		};
		if (options.initialValue !== void 0) this._value = options.initialValue;
	}
	get value() {
		return this._value;
	}
	set(newValue) {
		this._value = newValue;
		this.dispatchEvent(new CustomEvent("change", { detail: newValue }));
		if (this._options.emit) this._messenger.send(`${this._key}/post`, newValue);
	}
	start() {
		if (this._options.receive) {
			const unsub = this._messenger.subscribe(`${this._key}/post`, (data) => {
				this._value = data;
				this.dispatchEvent(new CustomEvent("change", { detail: data }));
			});
			this._unsubscribers.push(unsub);
		}
		if (this._options.emit) {
			const unsub = this._messenger.subscribe(`${this._key}/get`, (_, originSenderId) => {
				if (originSenderId === this._messenger.senderId) return;
				if (this._value === void 0) return;
				this._messenger.send(`${this._key}/post`, this._value);
			});
			this._unsubscribers.push(unsub);
		}
		if (this._options.receive && this._value === void 0) this._messenger.send(`${this._key}/get`);
	}
	stop() {
		for (const unsub of this._unsubscribers) unsub();
		this._unsubscribers.length = 0;
	}
	postCurrentValue() {
		if (this._value !== void 0) this._messenger.send(`${this._key}/post`, this._value);
	}
};
var IframeClickInterceptor = class {
	_messenger;
	_mousedownHandler = null;
	_unsubscribeMerge = null;
	constructor(messenger) {
		this._messenger = messenger;
	}
	startInterceptor() {
		if (typeof window === "undefined") return;
		this._mousedownHandler = () => {
			this._messenger.send("INTLAYER_IFRAME_CLICKED");
		};
		window.addEventListener("mousedown", this._mousedownHandler);
	}
	startMerger() {
		this._unsubscribeMerge = this._messenger.subscribe("INTLAYER_IFRAME_CLICKED", mergeIframeClick);
	}
	stopInterceptor() {
		if (this._mousedownHandler) {
			window.removeEventListener("mousedown", this._mousedownHandler);
			this._mousedownHandler = null;
		}
	}
	stopMerger() {
		this._unsubscribeMerge?.();
		this._unsubscribeMerge = null;
	}
};
var UrlStateManager = class {
	_messenger;
	_originalPushState = null;
	_originalReplaceState = null;
	_listeners = [];
	constructor(messenger) {
		this._messenger = messenger;
	}
	start() {
		if (typeof window === "undefined") return;
		const updateURLState = () => {
			this._messenger.send(`INTLAYER_URL_CHANGE/post`, window.location.pathname);
		};
		this._originalPushState = history.pushState;
		this._originalReplaceState = history.replaceState;
		const injectLocationChange = (method) => function(...args) {
			method.apply(this, args);
			window.dispatchEvent(new Event("locationchange"));
		};
		history.pushState = injectLocationChange(this._originalPushState);
		history.replaceState = injectLocationChange(this._originalReplaceState);
		for (const eventName of [
			"locationchange",
			"popstate",
			"hashchange",
			"load"
		]) {
			const listener = updateURLState;
			window.addEventListener(eventName, listener);
			this._listeners.push([eventName, listener]);
		}
		updateURLState();
	}
	stop() {
		if (typeof window === "undefined") return;
		for (const [eventName, listener] of this._listeners) window.removeEventListener(eventName, listener);
		this._listeners = [];
		if (this._originalPushState) {
			history.pushState = this._originalPushState;
			this._originalPushState = null;
		}
		if (this._originalReplaceState) {
			history.replaceState = this._originalReplaceState;
			this._originalReplaceState = null;
		}
	}
};
var editDictionaryByKeyPath = (dictionaryContent, keyPath, newValue) => {
	let currentValue = dictionaryContent;
	let parentValue = null;
	let lastKeys = [];
	if (keyPath.length === 0) return newValue;
	try {
		for (let i = 0; i < keyPath.length; i++) {
			const keyObj = keyPath[i];
			parentValue = currentValue;
			if (keyObj.type === "object" || keyObj.type === "array") {
				lastKeys = [keyObj.key];
				if (!currentValue[keyObj.key] || typeof currentValue[keyObj.key] !== "object") currentValue[keyObj.key] = {};
				currentValue = currentValue[keyObj.key];
			}
			if (keyObj.type === "translation" || keyObj.type === "enumeration") {
				lastKeys = [keyObj.type, keyObj.key];
				if (!currentValue[keyObj.type] || typeof currentValue[keyObj.type] !== "object") currentValue[keyObj.type] = {};
				if (!currentValue[keyObj.type][keyObj.key] || typeof currentValue[keyObj.type][keyObj.key] !== "object") currentValue[keyObj.type][keyObj.key] = {};
				currentValue = currentValue[keyObj.type][keyObj.key];
			}
			if (keyObj.type === "enumeration" || keyObj.type === "condition") {
				if (keyObj.type !== "enumeration") {
					lastKeys = [keyObj.type, keyObj.key];
					currentValue = currentValue[keyObj.type][keyObj.key];
				}
			}
			if (keyObj.type === "markdown" || keyObj.type === "html" || keyObj.type === "insertion") {
				lastKeys = [keyObj.type];
				if (!currentValue[keyObj.type] || typeof currentValue[keyObj.type] !== "object") currentValue[keyObj.type] = "";
				currentValue = currentValue[keyObj.type];
			}
			if (keyObj.type === "file") {
				lastKeys = ["content"];
				currentValue = currentValue.content;
			}
			if (i === keyPath.length - 1 && parentValue && lastKeys.length > 0) {
				let target = parentValue;
				for (const key of lastKeys.slice(0, -1)) target = target[key];
				const finalKey = lastKeys[lastKeys.length - 1];
				if (typeof newValue === "undefined") if (Array.isArray(target)) {
					const index = Number(finalKey);
					if (!Number.isNaN(index) && index >= 0 && index < target.length) target.splice(index, 1);
				} else delete target[finalKey];
				else target[finalKey] = newValue;
			}
		}
		return dictionaryContent;
	} catch (error) {
		console.error("Cannot edit dictionary by key path", {
			dictionaryContent,
			keyPath,
			newValue
		}, error);
		return dictionaryContent;
	}
};
var getContentNodeByKeyPath = (dictionaryContent, keyPath, fallbackLocale) => {
	let currentValue = structuredClone(dictionaryContent);
	for (const keyObj of keyPath) {
		if (fallbackLocale && currentValue?.nodeType === "translation") currentValue = currentValue?.[TRANSLATION]?.[fallbackLocale];
		if (keyObj.type === "object" || keyObj.type === "array") currentValue = currentValue?.[keyObj.key];
		if (keyObj.type === "translation" || keyObj.type === "condition" || keyObj.type === "enumeration") currentValue = currentValue?.[keyObj.type]?.[keyObj.key];
		if (keyObj.type === "markdown" || keyObj.type === "html" || keyObj.type === "insertion" || keyObj.type === "file") currentValue = currentValue?.[keyObj.type];
	}
	return currentValue;
};
var renameContentNodeByKeyPath = (dictionaryContent, newKey, keyPath) => {
	let currentValue = dictionaryContent;
	let parentValue = null;
	let lastKey = null;
	for (const keyObj of keyPath) {
		parentValue = currentValue;
		if (keyObj.type === "object" || keyObj.type === "array") {
			lastKey = keyObj.key;
			currentValue = currentValue[keyObj.key];
		}
		if (keyObj.type === "translation" || keyObj.type === "enumeration" || keyObj.type === "condition") {
			lastKey = keyObj.type;
			currentValue = currentValue[keyObj.type][keyObj.key];
		}
		if (keyObj.type === "markdown" || keyObj.type === "reactNode" || keyObj.type === "html" || keyObj.type === "insertion" || keyObj.type === "file") {
			lastKey = keyObj.type;
			currentValue = currentValue[keyObj.type];
		}
	}
	if (parentValue && lastKey !== null) if (Array.isArray(parentValue)) parentValue[lastKey] = currentValue;
	else {
		const newParentValue = {};
		for (const key of Object.keys(parentValue)) if (key === lastKey && typeof newKey !== "undefined") newParentValue[newKey] = currentValue;
		else newParentValue[key] = parentValue[key];
		Object.keys(parentValue).forEach((key) => {
			delete parentValue[key];
		});
		Object.assign(parentValue, newParentValue);
	}
	return dictionaryContent;
};
var EditorStateManager = class {
	messenger;
	editorEnabled;
	focusedContent;
	localeDictionaries;
	editedContent;
	configuration;
	currentLocale;
	_urlManager;
	_iframeInterceptor;
	_mode;
	_configuration;
	_unsubAreYouThere = null;
	_unsubActivate = null;
	_unsubClientReady = null;
	constructor(config) {
		this._mode = config.mode;
		this._configuration = config.configuration;
		this.messenger = new CrossFrameMessenger(config.messenger);
		this.editorEnabled = new CrossFrameStateManager("INTLAYER_EDITOR_ENABLED", this.messenger, {
			emit: false,
			receive: true,
			initialValue: false
		});
		this.focusedContent = new CrossFrameStateManager("INTLAYER_FOCUSED_CONTENT_CHANGED", this.messenger, {
			emit: true,
			receive: true,
			initialValue: null
		});
		this.localeDictionaries = new CrossFrameStateManager("INTLAYER_LOCALE_DICTIONARIES_CHANGED", this.messenger);
		this.editedContent = new CrossFrameStateManager("INTLAYER_EDITED_CONTENT_CHANGED", this.messenger);
		this.configuration = new CrossFrameStateManager("INTLAYER_CONFIGURATION", this.messenger, {
			emit: true,
			receive: false,
			...config.configuration ? { initialValue: config.configuration } : {}
		});
		this.currentLocale = new CrossFrameStateManager("INTLAYER_CURRENT_LOCALE", this.messenger, {
			emit: config.mode === "client",
			receive: config.mode === "editor"
		});
		this._urlManager = new UrlStateManager(this.messenger);
		this._iframeInterceptor = new IframeClickInterceptor(this.messenger);
	}
	start() {
		this.messenger.start();
		this.editorEnabled.start();
		this.focusedContent.start();
		this.localeDictionaries.start();
		this.editedContent.start();
		this.configuration.start();
		this.currentLocale.start();
		if (this._mode === "client") {
			this._urlManager.start();
			this._iframeInterceptor.startInterceptor();
			this._loadDictionaries();
			this.messenger.send(`INTLAYER_EDITED_CONTENT_CHANGED/get`);
			if (this._configuration?.editor?.enabled !== false) this._setupActivationHandshake();
		} else {
			this._iframeInterceptor.startMerger();
			this._setupEditorHandshake();
		}
	}
	stop() {
		this._unsubAreYouThere?.();
		this._unsubActivate?.();
		this._unsubClientReady?.();
		this._unsubAreYouThere = null;
		this._unsubActivate = null;
		this._unsubClientReady = null;
		this.messenger.stop();
		this.editorEnabled.stop();
		this.focusedContent.stop();
		this.localeDictionaries.stop();
		this.editedContent.stop();
		this.configuration.stop();
		this.currentLocale.stop();
		this._urlManager.stop();
		this._iframeInterceptor.stopInterceptor();
		this._iframeInterceptor.stopMerger();
	}
	pingClient() {
		if (this._mode !== "editor") return;
		this.messenger.send("INTLAYER_ARE_YOU_THERE");
	}
	setFocusedContentKeyPath(keyPath) {
		const filtered = keyPath.filter((key) => key.type !== TRANSLATION);
		const prev = this.focusedContent.value;
		if (!prev) return;
		this.focusedContent.set({
			...prev,
			keyPath: filtered
		});
	}
	setLocaleDictionary(dictionary) {
		if (!dictionary.localId) return;
		const current = this.localeDictionaries.value ?? {};
		this.localeDictionaries.set({
			...current,
			[dictionary.localId]: dictionary
		});
	}
	setEditedDictionary(newDict) {
		if (!newDict.localId) {
			console.error("setEditedDictionary: missing localId", newDict);
			return;
		}
		const current = this.editedContent.value ?? {};
		this.editedContent.set({
			...current,
			[newDict.localId]: newDict
		});
	}
	setEditedContent(localDictionaryId, newValue) {
		const current = this.editedContent.value ?? {};
		this.editedContent.set({
			...current,
			[localDictionaryId]: {
				...current[localDictionaryId],
				content: newValue
			}
		});
	}
	addContent(localDictionaryId, newValue, keyPath = [], overwrite = true) {
		const current = this.editedContent.value ?? {};
		const originalContent = (this.localeDictionaries.value ?? {})[localDictionaryId]?.content;
		const currentContent = structuredClone(current[localDictionaryId]?.content ?? originalContent);
		let newKeyPath = keyPath;
		if (!overwrite) {
			let index = 0;
			const otherKeyPath = keyPath.slice(0, -1);
			const lastKeyPath = keyPath[keyPath.length - 1];
			let finalKey = lastKeyPath.key;
			while (typeof getContentNodeByKeyPath(currentContent, newKeyPath) !== "undefined") {
				index++;
				finalKey = index === 0 ? lastKeyPath.key : `${lastKeyPath.key} (${index})`;
				newKeyPath = [...otherKeyPath, {
					...lastKeyPath,
					key: finalKey
				}];
			}
		}
		const updatedContent = editDictionaryByKeyPath(currentContent, newKeyPath, newValue);
		this.editedContent.set({
			...current,
			[localDictionaryId]: {
				...current[localDictionaryId],
				content: updatedContent
			}
		});
	}
	renameContent(localDictionaryId, newKey, keyPath = []) {
		const current = this.editedContent.value ?? {};
		const originalContent = (this.localeDictionaries.value ?? {})[localDictionaryId]?.content;
		const updated = renameContentNodeByKeyPath(structuredClone(current[localDictionaryId]?.content ?? originalContent), newKey, keyPath);
		this.editedContent.set({
			...current,
			[localDictionaryId]: {
				...current[localDictionaryId],
				content: updated
			}
		});
	}
	removeContent(localDictionaryId, keyPath) {
		const current = this.editedContent.value ?? {};
		const originalContent = (this.localeDictionaries.value ?? {})[localDictionaryId]?.content;
		const restored = editDictionaryByKeyPath(structuredClone(current[localDictionaryId]?.content ?? originalContent), keyPath, getContentNodeByKeyPath(originalContent, keyPath));
		this.editedContent.set({
			...current,
			[localDictionaryId]: {
				...current[localDictionaryId],
				content: restored
			}
		});
	}
	restoreContent(localDictionaryId) {
		const updated = { ...this.editedContent.value ?? {} };
		delete updated[localDictionaryId];
		this.editedContent.set(updated);
	}
	clearContent(localDictionaryId) {
		const filtered = { ...this.editedContent.value ?? {} };
		delete filtered[localDictionaryId];
		this.editedContent.set(filtered);
	}
	clearAllContent() {
		this.editedContent.set({});
	}
	getContentValue(localDictionaryIdOrKey, keyPath) {
		const edited = this.editedContent.value;
		if (!edited) return void 0;
		const filteredKeyPath = keyPath.filter((key) => key.type !== TRANSLATION);
		const localeDicts = this.localeDictionaries.value;
		if (localDictionaryIdOrKey.includes(":local:") || localDictionaryIdOrKey.includes(":remote:")) {
			if (localeDicts && !(localDictionaryIdOrKey in localeDicts)) return;
			return getContentNodeByKeyPath(edited[localDictionaryIdOrKey]?.content ?? {}, filteredKeyPath, this.currentLocale.value);
		}
		const matchingIds = Object.keys(edited).filter((key) => key.startsWith(`${localDictionaryIdOrKey}:`) && (!localeDicts || key in localeDicts));
		for (const localId of matchingIds) {
			const node = getContentNodeByKeyPath(edited[localId]?.content ?? {}, filteredKeyPath, this.currentLocale.value);
			if (node) return node;
		}
	}
	_setupEditorHandshake() {
		this._unsubClientReady = this.messenger.subscribe("INTLAYER_CLIENT_READY", () => {
			this.editorEnabled.set(true);
			this.messenger.send("INTLAYER_EDITOR_ACTIVATE");
		});
		this.messenger.send("INTLAYER_ARE_YOU_THERE");
	}
	_setupActivationHandshake() {
		this.messenger.send("INTLAYER_CLIENT_READY");
		this._unsubAreYouThere = this.messenger.subscribe("INTLAYER_ARE_YOU_THERE", () => {
			this.messenger.send("INTLAYER_CLIENT_READY");
		});
		this._unsubActivate = this.messenger.subscribe("INTLAYER_EDITOR_ACTIVATE", () => {
			this.editorEnabled.set(true);
			this._broadcastData();
		});
	}
	_broadcastData() {
		const configVal = this.configuration.value;
		if (configVal) this.messenger.send(`INTLAYER_CONFIGURATION/post`, configVal);
		const localeVal = this.currentLocale.value;
		if (localeVal) this.messenger.send(`INTLAYER_CURRENT_LOCALE/post`, localeVal);
		const dicts = this.localeDictionaries.value;
		if (dicts) this.messenger.send(`INTLAYER_LOCALE_DICTIONARIES_CHANGED/post`, dicts);
	}
	async _loadDictionaries() {
		try {
			const unmergedDictionaries = (await import("./unmerged_dictionaries-B19gLIn0.js")).getUnmergedDictionaries();
			const dictionariesList = Object.fromEntries(Object.values(unmergedDictionaries).flat().map((dictionary) => [dictionary.localId, dictionary]));
			this.localeDictionaries.set(dictionariesList);
			if (this.editorEnabled.value) this._broadcastData();
		} catch (e) {
			console.warn("[intlayer] Failed to load unmerged dictionaries:", e);
		}
	}
};
var _HTMLElement$1 = typeof HTMLElement !== "undefined" ? HTMLElement : class {};
var IntlayerEditorElement = class extends _HTMLElement$1 {
	_configuration = void 0;
	_locale = void 0;
	_initialized = false;
	_unsubManager = null;
	static get observedAttributes() {
		return ["locale"];
	}
	get configuration() {
		return this._configuration;
	}
	set configuration(v) {
		this._configuration = v;
		if (!this._initialized) this._init();
	}
	get locale() {
		return this._locale;
	}
	set locale(v) {
		this._locale = v;
		if (v && this._initialized) this._syncLocale(v);
	}
	attributeChangedCallback(name, _oldVal, newVal) {
		if (name === "locale" && newVal !== null) {
			this._locale = newVal;
			if (this._initialized) this._syncLocale(newVal);
		}
	}
	connectedCallback() {
		this._init();
	}
	disconnectedCallback() {
		this._unsubManager?.();
		this._unsubManager = null;
		if (this._initialized) {
			stopEditorClient();
			this._initialized = false;
		}
	}
	_init() {
		if (this._initialized) return;
		initEditorClient();
		this._initialized = true;
		if (this._locale) this._syncLocale(this._locale);
	}
	_syncLocale(locale) {
		const manager = getGlobalEditorManager();
		if (manager) manager.currentLocale.set(locale);
		else {
			this._unsubManager?.();
			this._unsubManager = onGlobalEditorManagerChange((m) => {
				if (m) {
					this._unsubManager?.();
					this._unsubManager = null;
					m.currentLocale.set(locale);
				}
			});
		}
	}
};
var defineIntlayerEditorElement = () => {
	if (typeof customElements === "undefined") return;
	if (!customElements.get("intlayer-editor")) customElements.define("intlayer-editor", IntlayerEditorElement);
};
var DEFAULT_PRESS_DURATION = 250;
var STYLES = `
  :host {
    display: contents;
  }

  .wrapper {
    display: inline-block;
    cursor: pointer;
    user-select: none;
    border-radius: 0.375rem;
    outline-width: 2px;
    outline-offset: 4px;
    outline-style: solid;
    outline-color: transparent;
    transition: all 100ms 50ms ease-in-out;
  }

  .wrapper[data-active] {
    outline-color: inherit;
  }
`;
var _HTMLElement = typeof HTMLElement !== "undefined" ? HTMLElement : class {};
var IntlayerContentSelectorElement = class extends _HTMLElement {
	_isSelecting = false;
	_pressDuration = DEFAULT_PRESS_DURATION;
	_isHovered = false;
	_isSelectingState = false;
	_wrapper;
	_pressTimer = null;
	_clickOutsideHandler = null;
	static get observedAttributes() {
		return ["is-selecting", "press-duration"];
	}
	get isSelecting() {
		return this._isSelecting;
	}
	set isSelecting(v) {
		this._isSelecting = v;
		this._updateActiveState();
	}
	get pressDuration() {
		return this._pressDuration;
	}
	set pressDuration(v) {
		this._pressDuration = v;
	}
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: "open" });
		const style = document.createElement("style");
		style.textContent = STYLES;
		shadow.appendChild(style);
		const wrapper = document.createElement("span");
		wrapper.className = "wrapper";
		wrapper.setAttribute("role", "button");
		wrapper.setAttribute("tabindex", "0");
		wrapper.appendChild(document.createElement("slot"));
		shadow.appendChild(wrapper);
		this._wrapper = wrapper;
		wrapper.addEventListener("mousedown", () => this._handleMouseDown());
		wrapper.addEventListener("mouseup", () => this._handleMouseUpOrLeave());
		wrapper.addEventListener("mouseleave", () => this._handleMouseUpOrLeave());
		wrapper.addEventListener("mouseenter", () => this._handleMouseEnter());
		wrapper.addEventListener("click", (e) => this._handleClick(e));
		wrapper.addEventListener("touchstart", () => this._handleMouseDown());
		wrapper.addEventListener("touchend", () => this._handleMouseUpOrLeave());
		wrapper.addEventListener("touchcancel", () => this._handleMouseUpOrLeave());
		wrapper.addEventListener("blur", () => this._handleBlur());
	}
	attributeChangedCallback(name, _oldVal, newVal) {
		if (name === "is-selecting") {
			this._isSelecting = newVal !== null;
			this._updateActiveState();
		} else if (name === "press-duration") this._pressDuration = newVal !== null ? parseInt(newVal, 10) : DEFAULT_PRESS_DURATION;
	}
	connectedCallback() {
		this._clickOutsideHandler = (e) => {
			if (!e.composedPath().includes(this)) {
				this._isSelectingState = false;
				this._dispatch("intlayer:click-outside");
				this._updateActiveState();
			}
		};
		document.addEventListener("mousedown", this._clickOutsideHandler);
	}
	disconnectedCallback() {
		if (this._clickOutsideHandler) {
			document.removeEventListener("mousedown", this._clickOutsideHandler);
			this._clickOutsideHandler = null;
		}
		this._clearPressTimer();
	}
	_updateActiveState() {
		if (this._isSelecting || this._isSelectingState || this._isHovered) this._wrapper.setAttribute("data-active", "");
		else this._wrapper.removeAttribute("data-active");
	}
	_clearPressTimer() {
		if (this._pressTimer !== null) {
			clearTimeout(this._pressTimer);
			this._pressTimer = null;
		}
	}
	_dispatch(eventName) {
		this.dispatchEvent(new CustomEvent(eventName, {
			bubbles: true,
			composed: true
		}));
	}
	_handleMouseDown() {
		this._clearPressTimer();
		this._pressTimer = setTimeout(() => {
			this._isSelectingState = true;
			this._updateActiveState();
			this._dispatch("intlayer:press");
		}, this._pressDuration);
	}
	_handleMouseEnter() {
		this._isHovered = true;
		this._updateActiveState();
		this._dispatch("intlayer:hover");
	}
	_handleMouseUpOrLeave() {
		if (this._isHovered) {
			this._isHovered = false;
			this._dispatch("intlayer:unhover");
		}
		this._clearPressTimer();
		this._updateActiveState();
	}
	_handleClick(e) {
		if (this._isSelecting || this._isSelectingState) {
			e.preventDefault();
			e.stopPropagation();
		}
	}
	_handleBlur() {
		this._isSelectingState = false;
		this._updateActiveState();
	}
};
var defineIntlayerElements = () => {
	if (typeof customElements === "undefined") return;
	if (!customElements.get("intlayer-content-selector")) customElements.define("intlayer-content-selector", IntlayerContentSelectorElement);
	defineIntlayerContentSelectorWrapper();
	defineIntlayerEditedContent();
	defineIntlayerEditorElement();
};
var buildClientMessengerConfig = () => {
	return {
		allowedOrigins: [editor?.editorURL, editor?.cmsURL].filter(Boolean),
		postMessageFn: (payload, origin) => {
			if (typeof window === "undefined") return;
			if (!(window.self !== window.top)) return;
			window.parent?.postMessage(payload, origin);
		}
	};
};
var _clientRefCount = 0;
var initEditorClient = () => {
	_clientRefCount++;
	const existing = getGlobalEditorManager();
	if (existing) return existing;
	const manager = new EditorStateManager({
		mode: "client",
		messenger: buildClientMessengerConfig(),
		configuration
	});
	setGlobalEditorManager(manager);
	defineIntlayerElements();
	manager.start();
	return manager;
};
var stopEditorClient = () => {
	_clientRefCount = Math.max(0, _clientRefCount - 1);
	if (_clientRefCount > 0) return;
	getGlobalEditorManager()?.stop();
	setGlobalEditorManager(null);
};
export { initEditorClient, stopEditorClient };
import { r as internationalization } from "./configuration-xVLV3WNi.js";
var TRANSLATION = "translation";
var ENUMERATION = "enumeration";
var CONDITION = "condition";
var INSERTION = "insertion";
var FILE = "file";
var OBJECT = "object";
var ARRAY = "array";
var REACT_NODE = "reactNode";
var MARKDOWN = "markdown";
var HTML = "html";
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
});
export { OBJECT as _, fallbackPlugin as a, nestedPlugin as c, CONDITION as d, ENUMERATION as f, MARKDOWN as g, INSERTION as h, enumerationPlugin as i, translationPlugin as l, HTML as m, getContent as n, filePlugin as o, FILE as p, conditionPlugin as r, genderPlugin as s, getBasePlugins as t, ARRAY as u, REACT_NODE as v, TRANSLATION as y };
var dictionaries = {};
var getUnmergedDictionaries = () => dictionaries;
export { getUnmergedDictionaries };
