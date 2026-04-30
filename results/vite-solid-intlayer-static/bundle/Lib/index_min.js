import { r as e } from "./configuration-61rcLhUL.js";
import { a as t, c as n, i as r, l as i, n as a, o, r as s, s as c, t as l } from "./getContent-DLoRJ-dr.js";
import { n as u, t as d } from "./IntlayerProvider-DNJRAhHx.js";
import f from "../.intlayer/dictionary/header.json";
import { Dynamic as p, createComponent as m } from "solid-js/web";
import { createMemo as h, useContext as g } from "solid-js";
var _ = (e, t, n = l(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return a(e.content, r, n);
}, v = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		return n === "value" ? t : n === "toString" ? () => String(t) : n === Symbol.toPrimitive ? (e) => e === "string" ? String(t) : e === "number" ? Number(t) : t : Reflect.get(e, n, r);
	} });
}, y = (e) => {
	if (typeof e == "string") return e;
	let { type: t, props: n } = ((e) => {
		if (e?.props && typeof e.props.children == "object") {
			let t = [], { children: n } = e.props;
			return Object.keys(n ?? {}).forEach((e) => {
				t.push(y(n?.[e]));
			}), {
				...e,
				props: {
					...e.props,
					children: t
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
	})(e);
	return p({
		component: t ?? "span",
		...n,
		children: n.children
	});
}, b = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => v({
		...n,
		value: n.children,
		children: n.children
	})
}, x = process.env.INTLAYER_NODE_TYPE_SOLID_NODE === "false" ? t : {
	id: "solid-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 || typeof Node < "u" && e instanceof Node,
	transform: (e, { plugins: t, ...n }) => v({
		...n,
		value: "[[solid-element]]",
		children: typeof Node < "u" && e instanceof Node ? e : y(e)
	})
}, S = t, C = t, w = t, T = /* @__PURE__ */ new Map(), E = (t, a = !0) => {
	let l = `${t ?? e.defaultLocale}_${a}`;
	if (T.has(l)) return T.get(l);
	let u = [
		i(t ?? e.defaultLocale, a ? e.defaultLocale : void 0),
		r,
		s,
		n(t ?? e.defaultLocale),
		o,
		c,
		b,
		x,
		S,
		C,
		w
	];
	return T.set(l, u), u;
}, D = (e, t) => _(e, t, E(t)), O = (e, t) => {
	let n = g(u) ?? {};
	return h(() => D(e, t ?? n?.locale?.()));
}, k = () => (O(f), null);
function A() {
	return m(d, {
		get locale() {
			return "en";
		},
		get children() {
			return m(k, {});
		}
	});
}
export { A as default };
import "./IntlayerProvider-DNJRAhHx.js";
import "solid-js";
var e = ({ children: e }) => e;
export { e as EditorProvider };
import { i as e, r as t } from "./configuration-61rcLhUL.js";
import { createComponent as n, memo as r, mergeProps as i } from "solid-js/web";
import { Suspense as a, createContext as o, createEffect as s, createMemo as c, createSignal as l, lazy as u, on as d, onMount as f, untrack as p, useContext as m } from "solid-js";
var h = (e, n = t?.locales, r = t?.defaultLocale) => {
	let i = [e].flat(), a = (e) => e.trim().toLowerCase();
	try {
		for (let e of i) {
			let t = a(e), r = n.find((e) => a(e) === t);
			if (r) return r;
			let [i] = t.split("-"), o = n.find((e) => a(e).split("-")[0] === i);
			if (o) return o;
		}
	} catch {}
	return r;
}, g = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var _ = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	return n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`), n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, v = (n = b) => {
	let { locales: r } = t;
	if (n?.isCookieEnabled === !1) return;
	let i = (e) => !!e && r.includes(e);
	if (!g) for (let t = 0; t < (e.storage.cookies ?? []).length; t++) try {
		let r = n?.getCookie?.(e.storage.cookies[t].name);
		if (i(r)) return r;
	} catch {}
}, y = (t, n) => {
	if (n?.isCookieEnabled !== !1 && !g && e.storage.cookies) for (let r = 0; r < e.storage.cookies.length; r++) {
		let { name: i, attributes: a } = e.storage.cookies[r];
		try {
			n?.setCookieStore && n.setCookieStore(i, t, {
				...a,
				expires: a.expires instanceof Date ? a.expires.getTime() : a.expires
			});
		} catch {
			try {
				n?.setCookieString && n.setCookieString(i, _(i, t, a));
			} catch {}
		}
	}
}, b = {
	getCookie: (e) => document.cookie.split(";").find((t) => t.trim().startsWith(`${e}=`))?.split("=")[1],
	getLocaleStorage: (e) => localStorage.getItem(e),
	getSessionStorage: (e) => sessionStorage.getItem(e),
	isCookieEnabled: !0,
	setCookieStore: (e, t, n) => cookieStore.set({
		name: e,
		value: t,
		path: n.path,
		domain: n.domain,
		expires: n.expires,
		sameSite: n.sameSite
	}),
	setCookieString: (e, t) => {
		document.cookie = t;
	},
	setSessionStorage: (e, t) => sessionStorage.setItem(e, t),
	setLocaleStorage: (e, t) => localStorage.setItem(e, t)
}, x = v(b), S = (e, t) => y(e, {
	...b,
	isCookieEnabled: t
}), C = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, w = !0, T = w ? null : u(() => import("./EditorProvider-BfWC8yFw.js").then((e) => ({ default: e.EditorProvider }))), E = o({
	locale: () => x ?? t?.defaultLocale,
	setLocale: () => null
}), D = () => m(E) ?? {}, O = (e) => {
	let { defaultLocale: r, locales: i } = t ?? {}, [a, o] = l(e.locale ?? x ?? e.defaultLocale ?? r), u = e.setLocale ?? ((t) => {
		if (a().toString() !== t.toString()) {
			if (!i?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			o(t), S(t, e.isCookieEnabled);
		}
	}), m = c(() => h(a()));
	return s(d(() => e.locale, (e) => {
		e && e !== p(a) && o(e);
	}, { defer: !0 })), f(() => {
		C();
	}), n(E.Provider, {
		value: {
			locale: m,
			setLocale: u
		},
		get children() {
			return e.children;
		}
	});
}, k = (e) => n(O, i(e, { get children() {
	return [r(() => !w && T && n(a, { get children() {
		return n(T, {});
	} })), r(() => e.children)];
} }));
export { E as n, D as r, k as t };
var e = {
	locales: [
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
	requiredLocales: [
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
	strictMode: "inclusive",
	defaultLocale: "en"
}, t = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, n = {
	applicationURL: "http://localhost:3000",
	editorURL: "http://localhost:8000",
	cmsURL: "https://app.intlayer.org",
	backendURL: "https://back.intlayer.org",
	port: 8e3,
	enabled: !1,
	dictionaryPriorityStrategy: "local_first",
	liveSync: !0,
	liveSyncPort: 4e3,
	liveSyncURL: "http://localhost:4000"
}, r = {
	internationalization: e,
	routing: t,
	editor: n,
	log: {
		mode: "default",
		prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
	},
	system: {
		baseDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app",
		moduleAugmentationDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/types",
		unmergedDictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/unmerged_dictionary",
		remoteDictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/remote_dictionary",
		dictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/dictionary",
		dynamicDictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/dynamic_dictionary",
		fetchDictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/fetch_dictionary",
		typesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/types",
		mainDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/main",
		configDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/config",
		cacheDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/cache",
		tempDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app/.intlayer/tmp"
	},
	content: {
		fileExtensions: [
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
		contentDir: ["/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app"],
		codeDir: ["/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-static/solid-intlayer-app"],
		excludedPath: [
			"**/node_modulesdistbuild.intlayer.next.nuxt.expo.vercel.turbo.tanstack*.{tsx,ts,js,mjs,cjs,jsx,vue,svelte,astro}",
			"!**/node_modulesdistbuild.intlayer.next.nuxt.expo.vercel.turbo.tanstack*.config.*",
			"!***.spec.*",
			"!***.d.ts",
			"!***.map"
		],
		outputFormat: ["esm", "cjs"],
		cache: !0,
		checkTypes: !1
	},
	ai,
	dictionary,
	build,
	compiler: {
		enabled: !0,
		dictionaryKeyPrefix: "",
		noMetadata: !1,
		saveComponents: !1
	}
};
export { t as i, n, e as r, r as t };
import { n as e, t } from "./configuration-61rcLhUL.js";
import { n, t as r, y as i } from "./getContent-DLoRJ-dr.js";
var a = (e, t) => e.every((e, n) => t[n] && t[n].key === e.key && t[n].type === e.type), o = (e, t) => {
	try {
		let n = new URL(e), r = new URL(t);
		if (n.protocol !== r.protocol || n.hostname !== r.hostname || n.port !== r.port) return !1;
		let i = n.pathname.replace(/\/$/, ""), a = r.pathname.replace(/\/$/, "");
		return !(i !== "" && a !== "" && i !== a);
	} catch (n) {
		return console.error("Invalid URL(s)", n, {
			url1: e,
			url2: t
		}), !1;
	}
}, s = (e) => {
	let t = new MouseEvent("mousedown", {
		bubbles: !0,
		cancelable: !0,
		view: window
	}), n = new MouseEvent("click", {
		bubbles: !0,
		cancelable: !0,
		view: window
	});
	Object.assign(n, { iframeData: e }), Object.assign(t, { iframeData: e }), window.dispatchEvent(n), window.dispatchEvent(t);
}, c = "__intlayer_editor_manager__", l = "__intlayer_editor_manager_events__", u = () => {
	if (typeof window > "u") return new EventTarget();
	let e = window;
	return e[l] || (e[l] = new EventTarget()), e[l];
}, d = () => typeof window > "u" ? null : window[c] ?? null, f = (e) => {
	if (typeof window < "u") {
		let t = window;
		t[c] = e;
	}
	u().dispatchEvent(new CustomEvent("change", { detail: e }));
}, p = (e) => {
	let t = u(), n = (t) => {
		e(t.detail);
	};
	return t.addEventListener("change", n), () => {
		t.removeEventListener("change", n);
	};
}, m = typeof HTMLElement < "u" ? HTMLElement : class {}, h = class extends m {
	_keyPathJson = "[]";
	_dictionaryKey = "";
	_editorEnabled = !1;
	_isInIframe = !1;
	_isSelected = !1;
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
	set keyPathJson(e) {
		this._keyPathJson = e;
		let t = d();
		t && this._updateEditedValue(t);
	}
	get dictionaryKey() {
		return this._dictionaryKey;
	}
	set dictionaryKey(e) {
		this._dictionaryKey = e;
		let t = d();
		t && this._updateEditedValue(t);
	}
	constructor() {
		super();
		let e = this.attachShadow({ mode: "open" }), t = document.createElement("style");
		t.textContent = ":host { display: contents; }", e.appendChild(t);
	}
	attributeChangedCallback(e, t, n) {
		if (e === "key-path") {
			this._keyPathJson = n ?? "[]";
			let e = d();
			e && this._updateEditedValue(e);
		} else if (e === "dictionary-key") {
			this._dictionaryKey = n ?? "";
			let e = d();
			e && this._updateEditedValue(e);
		}
	}
	connectedCallback() {
		typeof window < "u" && (this._isInIframe = window.self !== window.top), this._subscribeToManager(), this._render();
	}
	disconnectedCallback() {
		this._teardown();
	}
	_teardown() {
		this._unsubManager?.(), this._unsubEnabled?.(), this._unsubFocused?.(), this._unsubEditedContent?.(), this._unsubManager = null, this._unsubEnabled = null, this._unsubFocused = null, this._unsubEditedContent = null;
	}
	_getRawKeyPath() {
		try {
			return JSON.parse(this._keyPathJson);
		} catch {
			return [];
		}
	}
	_getFilteredKeyPath() {
		return this._getRawKeyPath().filter((e) => e.type !== i);
	}
	_updateEditedValue(e) {
		let t = this._getFilteredKeyPath();
		if (!this._dictionaryKey || t.length === 0) {
			this._editedValue = void 0, this._render();
			return;
		}
		let n = this._getRawKeyPath(), r = n[n.length - 1]?.type;
		if (r === "markdown" || r === "html" || r === "insertion" || r === "file") {
			this._editedValue = void 0, this._render();
			return;
		}
		let a = e.getContentValue(this._dictionaryKey, t);
		if (typeof a == "object" && a && a.nodeType === "translation") {
			let t = e.currentLocale.value;
			a = t ? a[i][t] : void 0;
		}
		this._editedValue = a, this._render();
	}
	_updateIsSelected(e) {
		if (!e) {
			this._isSelected = !1, this._updateSelectorAttr();
			return;
		}
		let t = this._getFilteredKeyPath();
		this._isSelected = e.dictionaryKey === this._dictionaryKey && (e.keyPath?.length ?? 0) > 0 && a(e.keyPath ?? [], t), this._updateSelectorAttr();
	}
	_updateSelectorAttr() {
		this._selector && (this._isSelected ? this._selector.setAttribute("is-selecting", "") : this._selector.removeAttribute("is-selecting"));
	}
	_subscribeToManager() {
		let e = d();
		e && this._setupManagerSubscriptions(e), this._unsubManager = p((e) => {
			this._unsubEnabled?.(), this._unsubFocused?.(), this._unsubEditedContent?.(), this._unsubEnabled = null, this._unsubFocused = null, this._unsubEditedContent = null, e ? this._setupManagerSubscriptions(e) : (this._editorEnabled = !1, this._isSelected = !1, this._editedValue = void 0, this._render());
		});
	}
	_setupManagerSubscriptions(e) {
		this._editorEnabled = e.editorEnabled.value ?? !1, this._updateIsSelected(e.focusedContent.value), this._updateEditedValue(e);
		let t = (e) => {
			this._editorEnabled = e.detail, this._render();
		}, n = (e) => {
			this._updateIsSelected(e.detail);
		}, r = () => {
			this._updateEditedValue(e);
		};
		e.editorEnabled.addEventListener("change", t), e.focusedContent.addEventListener("change", n), e.editedContent.addEventListener("change", r), this._unsubEnabled = () => e.editorEnabled.removeEventListener("change", t), this._unsubFocused = () => e.focusedContent.removeEventListener("change", n), this._unsubEditedContent = () => e.editedContent.removeEventListener("change", r);
	}
	_handlePress(e) {
		e.stopPropagation();
		let t = d();
		t && t.focusedContent.set({
			dictionaryKey: this._dictionaryKey,
			keyPath: this._getFilteredKeyPath()
		});
	}
	_handleHover(e) {
		e.stopPropagation(), d()?.messenger.send("INTLAYER_HOVERED_CONTENT_CHANGED/post", {
			dictionaryKey: this._dictionaryKey,
			keyPath: this._getFilteredKeyPath()
		});
	}
	_handleUnhover(e) {
		e.stopPropagation(), d()?.messenger.send("INTLAYER_HOVERED_CONTENT_CHANGED/post", null);
	}
	_render() {
		let e = this._isInIframe && this._editorEnabled, t = this._editedValue, n = e ? typeof t == "string" || typeof t == "number" || typeof t == "boolean" ? "wrapped-text" : "wrapped-slot" : "simple";
		if (this._renderState !== n) {
			this._rebuildContent(n);
			return;
		}
		n !== "simple" && this._selector && (this._updateSelectorAttr(), n === "wrapped-text" && this._selector.firstChild?.nodeType === Node.TEXT_NODE && (this._selector.firstChild.data = String(t)));
	}
	_rebuildContent(e) {
		let t = this.shadowRoot;
		for (; t.childNodes.length > 1;) t.removeChild(t.lastChild);
		if (this._selector = null, e === "simple") t.appendChild(document.createElement("slot"));
		else {
			let n = document.createElement("intlayer-content-selector");
			this._selector = n, this._isSelected && n.setAttribute("is-selecting", ""), n.addEventListener("intlayer:press", (e) => this._handlePress(e)), n.addEventListener("intlayer:hover", (e) => this._handleHover(e)), n.addEventListener("intlayer:unhover", (e) => this._handleUnhover(e)), e === "wrapped-text" ? n.appendChild(document.createTextNode(String(this._editedValue))) : n.appendChild(document.createElement("slot")), t.appendChild(n);
		}
		this._renderState = e;
	}
}, g = () => {
	typeof customElements > "u" || customElements.get("intlayer-content-selector-wrapper") || customElements.define("intlayer-content-selector-wrapper", h);
}, _ = typeof HTMLElement < "u" ? HTMLElement : class {}, v = class extends _ {
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
	set dictionaryKey(e) {
		this._dictionaryKey = e, this._selectorWrapper.setAttribute("dictionary-key", e);
	}
	get keyPathJson() {
		return this._keyPathJson;
	}
	set keyPathJson(e) {
		this._keyPathJson = e, this._selectorWrapper.setAttribute("key-path", e);
	}
	get locale() {
		return this._locale;
	}
	set locale(e) {
		this._locale = e;
	}
	constructor() {
		super();
		let e = this.attachShadow({ mode: "open" }), t = document.createElement("style");
		t.textContent = ":host { display: contents; }", e.appendChild(t), this._selectorWrapper = document.createElement("intlayer-content-selector-wrapper"), this._slot = document.createElement("slot"), this._selectorWrapper.appendChild(this._slot), e.appendChild(this._selectorWrapper);
	}
	attributeChangedCallback(e, t, n) {
		let r = n ?? "";
		e === "dictionary-key" ? (this._dictionaryKey = r, this._selectorWrapper.setAttribute("dictionary-key", r)) : e === "key-path" ? (this._keyPathJson = r || "[]", this._selectorWrapper.setAttribute("key-path", this._keyPathJson)) : e === "locale" && (this._locale = r);
	}
	connectedCallback() {
		this._subscribeToManager();
	}
	disconnectedCallback() {
		this._teardown();
	}
	_teardown() {
		this._unsubManager?.(), this._unsubEditedContent?.(), this._unsubManager = null, this._unsubEditedContent = null;
	}
	_getKeyPath() {
		try {
			return JSON.parse(this._keyPathJson);
		} catch {
			return [];
		}
	}
	_render() {
		for (; this._selectorWrapper.firstChild;) this._selectorWrapper.removeChild(this._selectorWrapper.firstChild);
		this._editedText === null ? this._selectorWrapper.appendChild(this._slot) : this._selectorWrapper.appendChild(document.createTextNode(this._editedText));
	}
	_resolveEditedText(e) {
		let t = this._getKeyPath(), i = e.getContentValue(this._dictionaryKey, t);
		if (i == null) {
			this._editedText = null, this._render();
			return;
		}
		if (typeof i == "string" || typeof i == "number") {
			this._editedText = String(i), this._render();
			return;
		}
		if (typeof i == "object") {
			let e = this._locale || void 0, a = n(i, {
				locale: e,
				dictionaryKey: this._dictionaryKey,
				keyPath: t
			}, r(e));
			typeof a == "string" || typeof a == "number" ? this._editedText = String(a) : (console.error(`[intlayer-edited-content] Incorrect edited content format. Expected string. Value: ${JSON.stringify(a)}`), this._editedText = null), this._render();
			return;
		}
		this._editedText = null, this._render();
	}
	_setupManagerSubscriptions(e) {
		this._resolveEditedText(e);
		let t = () => this._resolveEditedText(e);
		e.editedContent.addEventListener("change", t), this._unsubEditedContent = () => e.editedContent.removeEventListener("change", t);
	}
	_subscribeToManager() {
		let e = d();
		e && this._setupManagerSubscriptions(e), this._unsubManager = p((e) => {
			this._unsubEditedContent?.(), this._unsubEditedContent = null, e ? this._setupManagerSubscriptions(e) : (this._editedText = null, this._render());
		});
	}
}, y = () => {
	typeof customElements > "u" || customElements.get("intlayer-edited-content") || customElements.define("intlayer-edited-content", v);
}, b = () => Math.random().toString(36).slice(2), x = class {
	senderId;
	_config;
	_subscribers = /* @__PURE__ */ new Map();
	_windowHandler = null;
	_seenMessageIds = /* @__PURE__ */ new Set();
	constructor(e) {
		this._config = e, this.senderId = b();
	}
	start() {
		typeof window > "u" || this._windowHandler || (this._windowHandler = (e) => {
			this._handleMessage(e);
		}, window.addEventListener("message", this._windowHandler));
	}
	stop() {
		this._windowHandler &&= (window.removeEventListener("message", this._windowHandler), null);
	}
	send(e, t) {
		let n = {
			type: e,
			data: t,
			senderId: this.senderId,
			messageId: b()
		};
		for (let e of this._config.allowedOrigins) e && this._config.postMessageFn(n, e);
	}
	subscribe(e, t) {
		return this._subscribers.has(e) || this._subscribers.set(e, /* @__PURE__ */ new Set()), this._subscribers.get(e).add(t), () => {
			this._subscribers.get(e)?.delete(t);
		};
	}
	_handleMessage(e) {
		let t = e.data;
		if (!t || typeof t != "object") return;
		let { type: n, data: r, senderId: i, messageId: a } = t;
		if (!n || typeof n != "string" || i === this.senderId) return;
		if (a) {
			if (this._seenMessageIds.has(a)) return;
			this._seenMessageIds.add(a), this._seenMessageIds.size > 200 && this._seenMessageIds.clear();
		}
		let { allowedOrigins: s } = this._config;
		if (!(!s || s.length === 0 || s.includes("*") || s.filter((e) => !!e && e !== "").some((t) => o(t, e.origin)))) return;
		let c = this._subscribers.get(n);
		if (c) for (let e of c) e(r, i);
	}
}, S = class extends EventTarget {
	_value;
	_key;
	_messenger;
	_options;
	_unsubscribers = [];
	constructor(e, t, n = {}) {
		super(), this._key = e, this._messenger = t, this._options = {
			emit: n.emit ?? !0,
			receive: n.receive ?? !0
		}, n.initialValue !== void 0 && (this._value = n.initialValue);
	}
	get value() {
		return this._value;
	}
	set(e) {
		this._value = e, this.dispatchEvent(new CustomEvent("change", { detail: e })), this._options.emit && this._messenger.send(`${this._key}/post`, e);
	}
	start() {
		if (this._options.receive) {
			let e = this._messenger.subscribe(`${this._key}/post`, (e) => {
				this._value = e, this.dispatchEvent(new CustomEvent("change", { detail: e }));
			});
			this._unsubscribers.push(e);
		}
		if (this._options.emit) {
			let e = this._messenger.subscribe(`${this._key}/get`, (e, t) => {
				t !== this._messenger.senderId && this._value !== void 0 && this._messenger.send(`${this._key}/post`, this._value);
			});
			this._unsubscribers.push(e);
		}
		this._options.receive && this._value === void 0 && this._messenger.send(`${this._key}/get`);
	}
	stop() {
		for (let e of this._unsubscribers) e();
		this._unsubscribers.length = 0;
	}
	postCurrentValue() {
		this._value !== void 0 && this._messenger.send(`${this._key}/post`, this._value);
	}
}, C = class {
	_messenger;
	_mousedownHandler = null;
	_unsubscribeMerge = null;
	constructor(e) {
		this._messenger = e;
	}
	startInterceptor() {
		typeof window > "u" || (this._mousedownHandler = () => {
			this._messenger.send("INTLAYER_IFRAME_CLICKED");
		}, window.addEventListener("mousedown", this._mousedownHandler));
	}
	startMerger() {
		this._unsubscribeMerge = this._messenger.subscribe("INTLAYER_IFRAME_CLICKED", s);
	}
	stopInterceptor() {
		this._mousedownHandler &&= (window.removeEventListener("mousedown", this._mousedownHandler), null);
	}
	stopMerger() {
		this._unsubscribeMerge?.(), this._unsubscribeMerge = null;
	}
}, w = class {
	_messenger;
	_originalPushState = null;
	_originalReplaceState = null;
	_listeners = [];
	constructor(e) {
		this._messenger = e;
	}
	start() {
		if (typeof window > "u") return;
		let e = () => {
			this._messenger.send("INTLAYER_URL_CHANGE/post", window.location.pathname);
		};
		this._originalPushState = history.pushState, this._originalReplaceState = history.replaceState;
		let t = (e) => function(...t) {
			e.apply(this, t), window.dispatchEvent(new Event("locationchange"));
		};
		history.pushState = t(this._originalPushState), history.replaceState = t(this._originalReplaceState);
		for (let t of [
			"locationchange",
			"popstate",
			"hashchange",
			"load"
		]) {
			let n = e;
			window.addEventListener(t, n), this._listeners.push([t, n]);
		}
		e();
	}
	stop() {
		if (!(typeof window > "u")) {
			for (let [e, t] of this._listeners) window.removeEventListener(e, t);
			this._listeners = [], this._originalPushState &&= (history.pushState = this._originalPushState, null), this._originalReplaceState &&= (history.replaceState = this._originalReplaceState, null);
		}
	}
}, T = (e, t, n) => {
	let r = e, i = null, a = [];
	if (t.length === 0) return n;
	try {
		for (let e = 0; e < t.length; e++) {
			let o = t[e];
			if (i = r, (o.type === "object" || o.type === "array") && (a = [o.key], (!r[o.key] || typeof r[o.key] != "object") && (r[o.key] = {}), r = r[o.key]), (o.type === "translation" || o.type === "enumeration") && (a = [o.type, o.key], (!r[o.type] || typeof r[o.type] != "object") && (r[o.type] = {}), (!r[o.type][o.key] || typeof r[o.type][o.key] != "object") && (r[o.type][o.key] = {}), r = r[o.type][o.key]), (o.type === "enumeration" || o.type === "condition") && o.type !== "enumeration" && (a = [o.type, o.key], r = r[o.type][o.key]), (o.type === "markdown" || o.type === "html" || o.type === "insertion") && (a = [o.type], (!r[o.type] || typeof r[o.type] != "object") && (r[o.type] = ""), r = r[o.type]), o.type === "file" && (a = ["content"], r = r.content), e === t.length - 1 && i && a.length > 0) {
				let e = i;
				for (let t of a.slice(0, -1)) e = e[t];
				let t = a[a.length - 1];
				if (n === void 0) if (Array.isArray(e)) {
					let n = Number(t);
					!Number.isNaN(n) && n >= 0 && n < e.length && e.splice(n, 1);
				} else delete e[t];
				else e[t] = n;
			}
		}
		return e;
	} catch (r) {
		return console.error("Cannot edit dictionary by key path", {
			dictionaryContent: e,
			keyPath: t,
			newValue: n
		}, r), e;
	}
}, E = (e, t, n) => {
	let r = structuredClone(e);
	for (let e of t) n && r?.nodeType === "translation" && (r = r?.[i]?.[n]), (e.type === "object" || e.type === "array") && (r = r?.[e.key]), (e.type === "translation" || e.type === "condition" || e.type === "enumeration") && (r = r?.[e.type]?.[e.key]), (e.type === "markdown" || e.type === "html" || e.type === "insertion" || e.type === "file") && (r = r?.[e.type]);
	return r;
}, D = (e, t, n) => {
	let r = e, i = null, a = null;
	for (let e of n) i = r, (e.type === "object" || e.type === "array") && (a = e.key, r = r[e.key]), (e.type === "translation" || e.type === "enumeration" || e.type === "condition") && (a = e.type, r = r[e.type][e.key]), (e.type === "markdown" || e.type === "reactNode" || e.type === "html" || e.type === "insertion" || e.type === "file") && (a = e.type, r = r[e.type]);
	if (i && a !== null) if (Array.isArray(i)) i[a] = r;
	else {
		let e = {};
		for (let n of Object.keys(i)) n === a && t !== void 0 ? e[t] = r : e[n] = i[n];
		Object.keys(i).forEach((e) => {
			delete i[e];
		}), Object.assign(i, e);
	}
	return e;
}, O = class {
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
	constructor(e) {
		this._mode = e.mode, this._configuration = e.configuration, this.messenger = new x(e.messenger), this.editorEnabled = new S("INTLAYER_EDITOR_ENABLED", this.messenger, {
			emit: !1,
			receive: !0,
			initialValue: !1
		}), this.focusedContent = new S("INTLAYER_FOCUSED_CONTENT_CHANGED", this.messenger, {
			emit: !0,
			receive: !0,
			initialValue: null
		}), this.localeDictionaries = new S("INTLAYER_LOCALE_DICTIONARIES_CHANGED", this.messenger), this.editedContent = new S("INTLAYER_EDITED_CONTENT_CHANGED", this.messenger), this.configuration = new S("INTLAYER_CONFIGURATION", this.messenger, {
			emit: !0,
			receive: !1,
			...e.configuration ? { initialValue: e.configuration } : {}
		}), this.currentLocale = new S("INTLAYER_CURRENT_LOCALE", this.messenger, {
			emit: e.mode === "client",
			receive: e.mode === "editor"
		}), this._urlManager = new w(this.messenger), this._iframeInterceptor = new C(this.messenger);
	}
	start() {
		this.messenger.start(), this.editorEnabled.start(), this.focusedContent.start(), this.localeDictionaries.start(), this.editedContent.start(), this.configuration.start(), this.currentLocale.start(), this._mode === "client" ? (this._urlManager.start(), this._iframeInterceptor.startInterceptor(), this._loadDictionaries(), this.messenger.send("INTLAYER_EDITED_CONTENT_CHANGED/get"), this._configuration?.editor?.enabled !== !1 && this._setupActivationHandshake()) : (this._iframeInterceptor.startMerger(), this._setupEditorHandshake());
	}
	stop() {
		this._unsubAreYouThere?.(), this._unsubActivate?.(), this._unsubClientReady?.(), this._unsubAreYouThere = null, this._unsubActivate = null, this._unsubClientReady = null, this.messenger.stop(), this.editorEnabled.stop(), this.focusedContent.stop(), this.localeDictionaries.stop(), this.editedContent.stop(), this.configuration.stop(), this.currentLocale.stop(), this._urlManager.stop(), this._iframeInterceptor.stopInterceptor(), this._iframeInterceptor.stopMerger();
	}
	pingClient() {
		this._mode === "editor" && this.messenger.send("INTLAYER_ARE_YOU_THERE");
	}
	setFocusedContentKeyPath(e) {
		let t = e.filter((e) => e.type !== i), n = this.focusedContent.value;
		n && this.focusedContent.set({
			...n,
			keyPath: t
		});
	}
	setLocaleDictionary(e) {
		if (!e.localId) return;
		let t = this.localeDictionaries.value ?? {};
		this.localeDictionaries.set({
			...t,
			[e.localId]: e
		});
	}
	setEditedDictionary(e) {
		if (!e.localId) {
			console.error("setEditedDictionary: missing localId", e);
			return;
		}
		let t = this.editedContent.value ?? {};
		this.editedContent.set({
			...t,
			[e.localId]: e
		});
	}
	setEditedContent(e, t) {
		let n = this.editedContent.value ?? {};
		this.editedContent.set({
			...n,
			[e]: {
				...n[e],
				content: t
			}
		});
	}
	addContent(e, t, n = [], r = !0) {
		let i = this.editedContent.value ?? {}, a = (this.localeDictionaries.value ?? {})[e]?.content, o = structuredClone(i[e]?.content ?? a), s = n;
		if (!r) {
			let e = 0, t = n.slice(0, -1), r = n[n.length - 1], i = r.key;
			for (; E(o, s) !== void 0;) e++, i = e === 0 ? r.key : `${r.key} (${e})`, s = [...t, {
				...r,
				key: i
			}];
		}
		let c = T(o, s, t);
		this.editedContent.set({
			...i,
			[e]: {
				...i[e],
				content: c
			}
		});
	}
	renameContent(e, t, n = []) {
		let r = this.editedContent.value ?? {}, i = (this.localeDictionaries.value ?? {})[e]?.content, a = D(structuredClone(r[e]?.content ?? i), t, n);
		this.editedContent.set({
			...r,
			[e]: {
				...r[e],
				content: a
			}
		});
	}
	removeContent(e, t) {
		let n = this.editedContent.value ?? {}, r = (this.localeDictionaries.value ?? {})[e]?.content, i = T(structuredClone(n[e]?.content ?? r), t, E(r, t));
		this.editedContent.set({
			...n,
			[e]: {
				...n[e],
				content: i
			}
		});
	}
	restoreContent(e) {
		let t = { ...this.editedContent.value ?? {} };
		delete t[e], this.editedContent.set(t);
	}
	clearContent(e) {
		let t = { ...this.editedContent.value ?? {} };
		delete t[e], this.editedContent.set(t);
	}
	clearAllContent() {
		this.editedContent.set({});
	}
	getContentValue(e, t) {
		let n = this.editedContent.value;
		if (!n) return;
		let r = t.filter((e) => e.type !== i), a = this.localeDictionaries.value;
		if (e.includes(":local:") || e.includes(":remote:")) return a && !(e in a) ? void 0 : E(n[e]?.content ?? {}, r, this.currentLocale.value);
		let o = Object.keys(n).filter((t) => t.startsWith(`${e}:`) && (!a || t in a));
		for (let e of o) {
			let t = E(n[e]?.content ?? {}, r, this.currentLocale.value);
			if (t) return t;
		}
	}
	_setupEditorHandshake() {
		this._unsubClientReady = this.messenger.subscribe("INTLAYER_CLIENT_READY", () => {
			this.editorEnabled.set(!0), this.messenger.send("INTLAYER_EDITOR_ACTIVATE");
		}), this.messenger.send("INTLAYER_ARE_YOU_THERE");
	}
	_setupActivationHandshake() {
		this.messenger.send("INTLAYER_CLIENT_READY"), this._unsubAreYouThere = this.messenger.subscribe("INTLAYER_ARE_YOU_THERE", () => {
			this.messenger.send("INTLAYER_CLIENT_READY");
		}), this._unsubActivate = this.messenger.subscribe("INTLAYER_EDITOR_ACTIVATE", () => {
			this.editorEnabled.set(!0), this._broadcastData();
		});
	}
	_broadcastData() {
		let e = this.configuration.value;
		e && this.messenger.send("INTLAYER_CONFIGURATION/post", e);
		let t = this.currentLocale.value;
		t && this.messenger.send("INTLAYER_CURRENT_LOCALE/post", t);
		let n = this.localeDictionaries.value;
		n && this.messenger.send("INTLAYER_LOCALE_DICTIONARIES_CHANGED/post", n);
	}
	async _loadDictionaries() {
		try {
			let e = (await import("./unmerged_dictionaries-DtQGnj7W.js")).getUnmergedDictionaries(), t = Object.fromEntries(Object.values(e).flat().map((e) => [e.localId, e]));
			this.localeDictionaries.set(t), this.editorEnabled.value && this._broadcastData();
		} catch (e) {
			console.warn("[intlayer] Failed to load unmerged dictionaries:", e);
		}
	}
}, k = typeof HTMLElement < "u" ? HTMLElement : class {}, A = class extends k {
	_configuration = void 0;
	_locale = void 0;
	_initialized = !1;
	_unsubManager = null;
	static get observedAttributes() {
		return ["locale"];
	}
	get configuration() {
		return this._configuration;
	}
	set configuration(e) {
		this._configuration = e, this._initialized || this._init();
	}
	get locale() {
		return this._locale;
	}
	set locale(e) {
		this._locale = e, e && this._initialized && this._syncLocale(e);
	}
	attributeChangedCallback(e, t, n) {
		e === "locale" && n !== null && (this._locale = n, this._initialized && this._syncLocale(n));
	}
	connectedCallback() {
		this._init();
	}
	disconnectedCallback() {
		this._unsubManager?.(), this._unsubManager = null, this._initialized &&= (B(), !1);
	}
	_init() {
		this._initialized || (z(), this._initialized = !0, this._locale && this._syncLocale(this._locale));
	}
	_syncLocale(e) {
		let t = d();
		t ? t.currentLocale.set(e) : (this._unsubManager?.(), this._unsubManager = p((t) => {
			t && (this._unsubManager?.(), this._unsubManager = null, t.currentLocale.set(e));
		}));
	}
}, j = () => {
	typeof customElements > "u" || customElements.get("intlayer-editor") || customElements.define("intlayer-editor", A);
}, M = 250, N = "\n  :host {\n    display: contents;\n  }\n\n  .wrapper {\n    display: inline-block;\n    cursor: pointer;\n    user-select: none;\n    border-radius: 0.375rem;\n    outline-width: 2px;\n    outline-offset: 4px;\n    outline-style: solid;\n    outline-color: transparent;\n    transition: all 100ms 50ms ease-in-out;\n  }\n\n  .wrapper[data-active] {\n    outline-color: inherit;\n  }\n", P = typeof HTMLElement < "u" ? HTMLElement : class {}, F = class extends P {
	_isSelecting = !1;
	_pressDuration = M;
	_isHovered = !1;
	_isSelectingState = !1;
	_wrapper;
	_pressTimer = null;
	_clickOutsideHandler = null;
	static get observedAttributes() {
		return ["is-selecting", "press-duration"];
	}
	get isSelecting() {
		return this._isSelecting;
	}
	set isSelecting(e) {
		this._isSelecting = e, this._updateActiveState();
	}
	get pressDuration() {
		return this._pressDuration;
	}
	set pressDuration(e) {
		this._pressDuration = e;
	}
	constructor() {
		super();
		let e = this.attachShadow({ mode: "open" }), t = document.createElement("style");
		t.textContent = N, e.appendChild(t);
		let n = document.createElement("span");
		n.className = "wrapper", n.setAttribute("role", "button"), n.setAttribute("tabindex", "0"), n.appendChild(document.createElement("slot")), e.appendChild(n), this._wrapper = n, n.addEventListener("mousedown", () => this._handleMouseDown()), n.addEventListener("mouseup", () => this._handleMouseUpOrLeave()), n.addEventListener("mouseleave", () => this._handleMouseUpOrLeave()), n.addEventListener("mouseenter", () => this._handleMouseEnter()), n.addEventListener("click", (e) => this._handleClick(e)), n.addEventListener("touchstart", () => this._handleMouseDown()), n.addEventListener("touchend", () => this._handleMouseUpOrLeave()), n.addEventListener("touchcancel", () => this._handleMouseUpOrLeave()), n.addEventListener("blur", () => this._handleBlur());
	}
	attributeChangedCallback(e, t, n) {
		e === "is-selecting" ? (this._isSelecting = n !== null, this._updateActiveState()) : e === "press-duration" && (this._pressDuration = n === null ? M : parseInt(n, 10));
	}
	connectedCallback() {
		this._clickOutsideHandler = (e) => {
			e.composedPath().includes(this) || (this._isSelectingState = !1, this._dispatch("intlayer:click-outside"), this._updateActiveState());
		}, document.addEventListener("mousedown", this._clickOutsideHandler);
	}
	disconnectedCallback() {
		this._clickOutsideHandler &&= (document.removeEventListener("mousedown", this._clickOutsideHandler), null), this._clearPressTimer();
	}
	_updateActiveState() {
		this._isSelecting || this._isSelectingState || this._isHovered ? this._wrapper.setAttribute("data-active", "") : this._wrapper.removeAttribute("data-active");
	}
	_clearPressTimer() {
		this._pressTimer !== null && (clearTimeout(this._pressTimer), this._pressTimer = null);
	}
	_dispatch(e) {
		this.dispatchEvent(new CustomEvent(e, {
			bubbles: !0,
			composed: !0
		}));
	}
	_handleMouseDown() {
		this._clearPressTimer(), this._pressTimer = setTimeout(() => {
			this._isSelectingState = !0, this._updateActiveState(), this._dispatch("intlayer:press");
		}, this._pressDuration);
	}
	_handleMouseEnter() {
		this._isHovered = !0, this._updateActiveState(), this._dispatch("intlayer:hover");
	}
	_handleMouseUpOrLeave() {
		this._isHovered && (this._isHovered = !1, this._dispatch("intlayer:unhover")), this._clearPressTimer(), this._updateActiveState();
	}
	_handleClick(e) {
		(this._isSelecting || this._isSelectingState) && (e.preventDefault(), e.stopPropagation());
	}
	_handleBlur() {
		this._isSelectingState = !1, this._updateActiveState();
	}
}, I = () => {
	typeof customElements > "u" || (customElements.get("intlayer-content-selector") || customElements.define("intlayer-content-selector", F), g(), y(), j());
}, L = () => ({
	allowedOrigins: [e?.editorURL, e?.cmsURL].filter(Boolean),
	postMessageFn: (e, t) => {
		typeof window > "u" || window.self !== window.top && window.parent?.postMessage(e, t);
	}
}), R = 0, z = () => {
	R++;
	let e = d();
	if (e) return e;
	let n = new O({
		mode: "client",
		messenger: L(),
		configuration: t
	});
	return f(n), I(), n.start(), n;
}, B = () => {
	R = Math.max(0, R - 1), !(R > 0) && (d()?.stop(), f(null));
};
export { z as initEditorClient, B as stopEditorClient };
import { r as e } from "./configuration-61rcLhUL.js";
var t = "translation", n = "enumeration", r = "condition", i = "insertion", a = "file", o = "object", s = "array", c = "reactNode", l = "markdown", u = "html", d = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => d(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => d(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: s,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) Object.defineProperty(n, r, {
		enumerable: !0,
		configurable: !0,
		get: function() {
			let n = {
				...t,
				children: e[r],
				keyPath: [...t.keyPath, {
					type: o,
					key: r
				}]
			}, i = d(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, f = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, p = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (f(e) && f(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : p(e[r], t[r]));
		return n;
	}
	return e;
}, m = (e, t, n) => {
	let r = (t) => e[t], i = /* @__PURE__ */ new Set(), a = [], o = (e) => {
		e && !i.has(e) && (i.add(e), a.push(e));
	};
	o(t), t.includes("-") && o(t.split("-")[0]), o(n), n?.includes("-") && o(n.split("-")[0]);
	let s = [];
	for (let e of a) {
		let t = r(e);
		if (t !== void 0) {
			if (typeof t == "string") {
				if (s.length === 0) return t;
				continue;
			}
			s.push(t);
		}
	}
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => p(e, t));
}, h = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", g = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, _ = (e, n) => h ? g : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (r, i, a) => {
		let o = r.translation ?? {}, s = {};
		for (let e in o) {
			let n = {
				...i,
				children: o[e],
				keyPath: [...i.keyPath, {
					type: t,
					key: e
				}]
			};
			s[e] = a(o[e], n);
		}
		return m(s, e, n);
	}
}, v = g, y = g, b = g, x = g, S = (e) => g, C = g, w = (t, n = !0) => [
	_(t ?? e.defaultLocale, n ? e.defaultLocale : void 0),
	v,
	y,
	b,
	S(t ?? e.defaultLocale),
	C,
	x
], T = (e, t, n = []) => d(e, {
	...t,
	plugins: n
});
export { o as _, g as a, S as c, r as d, n as f, l as g, i as h, v as i, _ as l, u as m, T as n, C as o, a as p, y as r, x as s, w as t, s as u, c as v, t as y };
var e = {}, t = () => e;
export { t as getUnmergedDictionaries };
