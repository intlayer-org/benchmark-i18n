import { n as e } from "./rolldown-runtime-Bn0tnvxB.js";
import { i as t, t as n } from "./interpreter-m9oj_GnO.js";
import { n as r, t as i } from "./validateHTML-d8UKh3M9.js";
import { Fragment as a, createContext as o, createElement as s, useContext as c } from "react";
import { jsx as l } from "react/jsx-runtime";
var u, d, f = e((() => {
	u = o(void 0), d = () => c(u);
})), p = e((() => {
	r();
})), m, h = e((() => {
	n(), p(), m = (e, { components: n = {} } = {}) => {
		let r = Object.fromEntries(Object.entries(n).filter(([, e]) => e).map(([e, t]) => [e, (e) => s(t, e)])), o = new Proxy(r, { get(e, t) {
			if (typeof t == "string" && t in e) return e[t];
			if (typeof t == "string" && /^[a-z][a-z0-9]*$/.test(t)) return i.has(t) ? ({ children: e, ...n }) => s(t, n) : (e) => s(t, e);
		} });
		return l(a, { children: t(e, o) });
	};
})), g;
e((() => {
	f(), h(), g = (e) => {
		let { html: t, userComponents: n } = e, r = d();
		return m(t, { components: {
			...r?.components,
			...n
		} });
	};
}))();
export { g as HTMLRendererPlugin };
import { n as e } from "./rolldown-runtime-Bn0tnvxB.js";
import { i as t, n, t as r } from "./markdown-DHhSZOkp.js";
import { Fragment as i, cloneElement as a, createContext as o, createElement as s, useContext as c } from "react";
import "react/jsx-runtime";
var l, u, d = e((() => {
	try {
		let e = s("div");
		l = e && typeof e == "object" && "$$typeof" in e && typeof e.$$typeof == "symbol" ? e.$$typeof : Symbol.for("react.transitional.element");
	} catch {
		l = Symbol.for("react.transitional.element");
	}
	u = {
		createElement: (e, t, ...n) => {
			let r = null, i = t || {};
			t && t.key != null && (r = String(t.key), i.key = void 0);
			let a = n.length;
			return a === 1 ? i.children = n[0] : a > 1 && (i.children = n), {
				$$typeof: l,
				type: e,
				key: r,
				ref: null,
				props: i,
				_owner: null,
				_store: {},
				_debugStack: null,
				_debugTask: null
			};
		},
		cloneElement: (e, t, ...n) => n.length === 0 ? a(e, t) : a(e, t, ...n),
		Fragment: i,
		normalizeProps: (e, t) => t
	};
})), f, p = e((() => {
	d(), r(), f = (e = "", r = {}) => {
		let { createElement: i, disableAutoLink: a, disableParsingRawHTML: o, enforceAtxHeadings: s, forceBlock: c, forceInline: l, forceWrapper: d, namedCodesToUnicode: f, components: p, renderRule: m, sanitizer: h, slugify: g, wrapper: _, preserveFrontmatter: v, tagfilter: y } = r, b = {
			runtime: i ? {
				...u,
				createElement: i
			} : u,
			components: p,
			namedCodesToUnicode: f,
			sanitizer: h,
			slugify: g
		}, x = {
			disableAutoLink: a,
			disableParsingRawHTML: o,
			enforceAtxHeadings: s,
			forceBlock: c,
			forceInline: l,
			forceWrapper: d,
			renderRule: m,
			wrapper: _,
			preserveFrontmatter: v,
			tagfilter: y
		};
		return typeof e == "string" ? n(e, b, x) : t(e, b, x);
	};
})), m, h, g = e((() => {
	m = o(void 0), h = () => c(m);
})), _;
e((() => {
	p(), g(), _ = (e) => {
		let { children: t, options: n, components: r } = e, i = h();
		return i ? i.renderMarkdown(t, n, {
			...i.components,
			...r
		}) : f(t, {
			...n,
			components: r
		});
	};
}))();
export { _ as MarkdownRendererPlugin };
import { n as e } from "./rolldown-runtime-Bn0tnvxB.js";
import { i as t, o as n, r } from "./built-BvRk9kiK.js";
import { I as i, L as a, N as o, et as s, nt as c } from "./interpreter-m9oj_GnO.js";
var l, u, d = e((() => {
	l = "__intlayerQualifierTypes", u = "__intlayerPreloaded";
})), f = e((() => {
	d();
})), p, m, h, g = e((() => {
	o(), f(), p = (e) => typeof e == "object" && !!e && "__intlayerQualifierTypes" in e, m = (e, t, n, r) => {
		let o = e[l], s = e[n], c = o.includes("item") && r?.item === void 0;
		if (!s) return {
			itemAxisOpen: c,
			missed: !0,
			chunks: []
		};
		let u = [], d = (e, o, s) => {
			if (o.length === 0) return u.push({
				cacheKey: `${t}.${n}.${s.join("/")}`,
				loader: e
			}), !0;
			let [c, ...l] = o, f = e;
			if (c === "item" && r?.item === void 0) {
				for (let e of Object.keys(f).sort((e, t) => Number(e) - Number(t))) d(f[e], l, [...s, e]);
				return !0;
			}
			let p = c === "variant" ? i(a(r?.variant), (e) => f[e] !== void 0) : String(r?.item), m = f[p];
			return m ? d(m, l, [...s, p]) : !1;
		};
		return {
			itemAxisOpen: c,
			missed: !d(s, o, []),
			chunks: u
		};
	}, h = (e) => {
		let { loaderMap: t, key: n, locale: r, selector: i, loadChunk: a, transform: o } = e, { itemAxisOpen: s, missed: c, chunks: l } = m(t, n, r, i);
		if (c) return s ? [] : null;
		let u = l.map(({ cacheKey: e, loader: t }) => a(e, t()));
		if (s) return u.map(o);
		let [d] = u;
		return d ? o(d) : null;
	};
})), _, v = e((() => {
	f(), _ = (e, t) => {
		if (typeof e != "object" || !e) return;
		let n = e[u];
		if (n && n.locale === t) return n.dictionary;
	};
})), y, b, x = e((() => {
	y = (e) => {
		if (typeof e == "number") return Date.now() + e * 1e3;
		if (typeof e == "string") {
			let t = Date.parse(e);
			return Number.isNaN(t) ? void 0 : t;
		}
	}, b = (e, t, n) => {
		let r = [`${e}=${encodeURIComponent(t)}`];
		n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
		let i = y(n.expires);
		return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
	};
})), S, C, w, T, E, D, O = e((() => {
	x(), r(), S = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false", C = process.env.INTLAYER_ROUTING_STORAGE_LOCALSTORAGE === "false", w = process.env.INTLAYER_ROUTING_STORAGE_SESSIONSTORAGE === "false", process.env.INTLAYER_ROUTING_STORAGE_HEADERS, T = {
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
	}, E = (e = T) => {
		let { locales: r } = t;
		if (e?.isCookieEnabled === !1) return;
		let i = (e) => !!e && r.includes(e);
		if (!S) for (let t = 0; t < (n.storage.cookies ?? []).length; t++) try {
			let r = e?.getCookie?.(n.storage.cookies[t].name);
			if (i(r)) return r;
		} catch {}
		if (!C) for (let t = 0; t < (n.storage.localStorage ?? []).length; t++) try {
			let r = e?.getLocaleStorage?.(n.storage.localStorage[t].name);
			if (i(r)) return r;
		} catch {}
		if (!w && n.storage.sessionStorage) for (let t = 0; t < n.storage.sessionStorage.length; t++) try {
			let r = e?.getSessionStorage?.(n.storage.sessionStorage[t].name);
			if (i(r)) return r;
		} catch {}
	}, D = (e, t) => {
		if (t?.isCookieEnabled !== !1) {
			if (!S && n.storage.cookies) for (let r = 0; r < n.storage.cookies.length; r++) {
				let { name: i, attributes: a } = n.storage.cookies[r];
				try {
					t?.setCookieStore && t.setCookieStore(i, e, {
						...a,
						expires: y(a.expires)
					});
				} catch {
					try {
						t?.setCookieString && t.setCookieString(i, b(i, e, a));
					} catch {}
				}
			}
			if (!C && n.storage.localStorage && t?.setLocaleStorage) for (let r = 0; r < n.storage.localStorage.length; r++) {
				let { name: i } = n.storage.localStorage[r];
				try {
					if (!(t?.overwrite ?? !0) && t?.getLocaleStorage && t.getLocaleStorage(i)) continue;
					t.setLocaleStorage(i, e);
				} catch {}
			}
			if (!w && n.storage.sessionStorage && t?.setSessionStorage) for (let r = 0; r < n.storage.sessionStorage.length; r++) {
				let { name: i } = n.storage.sessionStorage[r];
				try {
					if (!(t?.overwrite ?? !0) && t?.getSessionStorage && t.getSessionStorage(i)) continue;
					t.setSessionStorage(i, e);
				} catch {}
			}
		}
	};
})), k, A = e((() => {
	k = (e, t) => e.every((e, n) => t[n] && t[n].key === e.key && t[n].type === e.type);
})), j = e((() => {
	O(), A();
})), M, N = e((() => {
	c(), M = (e, t, n) => {
		let r = e, i = null, a = [];
		if (t.length === 0) return n;
		try {
			for (let e = 0; e < t.length; e++) {
				let o = t[e];
				if (i = r, (o?.type === "object" || o?.type === "array") && (a = [o.key], (!r[o.key] || typeof r[o.key] != "object") && (r[o.key] = {}), r = r[o.key]), (o?.type === "translation" || o?.type === "enumeration" || o?.type === "plural" || o?.type === "gender" || o?.type === "select") && (a = [o.type, o.key], (!r[o.type] || typeof r[o.type] != "object") && (r[o.type] = {}), (!r[o.type][o.key] || typeof r[o.type][o.key] != "object") && (r[o.type][o.key] = {}), r = r[o.type][o.key]), (o?.type === "enumeration" || o?.type === "plural" || o?.type === "condition") && o.type !== "enumeration" && o.type !== "plural" && (a = [o.type, o.key], r = r[o.type][o.key]), (o?.type === "markdown" || o?.type === "html" || o?.type === "insertion") && (a = [o.type], r[o.type] ?? (r[o.type] = ""), r = r[o.type]), o?.type === "file" && (a = ["content"], r = r.content), e === t.length - 1 && i && a.length > 0) {
					let e = i;
					for (let t of a.slice(0, -1)) e = e[t];
					let t = a[a.length - 1];
					if (n === void 0) {
						if (Array.isArray(e)) {
							let n = Number(t);
							!Number.isNaN(n) && n >= 0 && n < e.length && e.splice(n, 1);
						} else delete e[t];
					} else e[t] = n;
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
	};
})), P, F = e((() => {
	c(), P = (e, t, n) => {
		let r = structuredClone(e);
		for (let e of t) n && r?.nodeType === "translation" && (r = r?.[s]?.[n]), (e.type === "object" || e.type === "array") && (r = r?.[e.key]), (e.type === "translation" || e.type === "condition" || e.type === "enumeration" || e.type === "plural" || e.type === "gender" || e.type === "select") && (r = r?.[e.type]?.[e.key]), (e.type === "markdown" || e.type === "html" || e.type === "insertion" || e.type === "file") && (r = r?.[e.type]);
		return r;
	};
})), I, L = e((() => {
	c(), I = (e, t, n) => {
		let r = e, i = null, a = null;
		for (let e of n) i = r, (e.type === "object" || e.type === "array") && (a = e.key, r = r[e.key]), (e.type === "translation" || e.type === "enumeration" || e.type === "plural" || e.type === "condition" || e.type === "gender" || e.type === "select") && (a = e.type, r = r[e.type][e.key]), (e.type === "markdown" || e.type === "reactNode" || e.type === "html" || e.type === "insertion" || e.type === "file") && (a = e.type, r = r[e.type]);
		if (i && a !== null) {
			if (Array.isArray(i)) i[a] = r;
			else {
				let e = {};
				for (let n of Object.keys(i)) n === a && t !== void 0 ? e[t] = r : e[n] = i[n];
				Object.keys(i).forEach((e) => {
					delete i[e];
				}), Object.assign(i, e);
			}
		}
		return e;
	};
})), R = e((() => {
	o(), v(), g(), N(), F(), L();
}));
export { g as _, F as a, j as c, E as d, O as f, v as g, _ as h, P as i, A as l, D as m, L as n, M as o, T as p, I as r, N as s, R as t, k as u, p as v, h as y };
import { n as e } from "./rolldown-runtime-Bn0tnvxB.js";
import { n as t, r as n } from "./built-BvRk9kiK.js";
import { c as r, et as i, l as a, nt as o, t as s } from "./interpreter-m9oj_GnO.js";
import { c, i as l, o as u, r as ee, t as te, u as ne } from "./dictionaryManipulator-CMK-tTiD.js";
var d, re = e((() => {
	d = (e, t) => {
		try {
			let n = new URL(e), r = new URL(t);
			if (n.protocol !== r.protocol || n.hostname !== r.hostname || n.port !== r.port) return !1;
			let i = n.pathname.replace(/\/$/, ""), a = r.pathname.replace(/\/$/, "");
			return i === "" || a === "" || i === a;
		} catch (n) {
			return console.error("Invalid URL(s)", n, {
				url1: e,
				url2: t
			}), !1;
		}
	};
})), f, ie = e((() => {
	f = (e) => {
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
	};
})), p, m, h, g, _, v, y = e((() => {
	p = "__intlayer_editor_manager__", m = "__intlayer_editor_manager_events__", h = () => {
		if (typeof window > "u") return new EventTarget();
		let e = window;
		return e[m] || (e[m] = new EventTarget()), e[m];
	}, g = () => typeof window > "u" ? null : window[p] ?? null, _ = (e) => {
		if (typeof window < "u") {
			let t = window;
			t[p] = e;
		}
		h().dispatchEvent(new CustomEvent("change", { detail: e }));
	}, v = (e) => {
		let t = h(), n = (t) => {
			e(t.detail);
		};
		return t.addEventListener("change", n), () => {
			t.removeEventListener("change", n);
		};
	};
})), b, x, S, ae = e((() => {
	y(), c(), o(), b = typeof HTMLElement < "u" ? HTMLElement : class {}, x = class extends b {
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
			let t = g();
			t && this._updateEditedValue(t);
		}
		get dictionaryKey() {
			return this._dictionaryKey;
		}
		set dictionaryKey(e) {
			this._dictionaryKey = e;
			let t = g();
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
				let e = g();
				e && this._updateEditedValue(e);
			} else if (e === "dictionary-key") {
				this._dictionaryKey = n ?? "";
				let e = g();
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
			let t = this._getFilteredKeyPath(), n = this._isSelected;
			this._isSelected = e.dictionaryKey === this._dictionaryKey && (e.keyPath?.length ?? 0) > 0 && ne(e.keyPath ?? [], t), this._updateSelectorAttr(), this._isSelected && !n && this._scrollIntoViewIfNeeded();
		}
		_scrollIntoViewIfNeeded() {
			try {
				let e;
				if (this._selector) {
					let t = this._selector.shadowRoot?.querySelector(".wrapper");
					if (t) {
						let n = t.getBoundingClientRect();
						(n.width > 0 || n.height > 0) && (e = n);
					}
				}
				if (!e && this.childNodes.length > 0) {
					let t = document.createRange();
					t.selectNodeContents(this);
					let n = t.getBoundingClientRect();
					(n.width > 0 || n.height > 0) && (e = n);
				}
				e ||= this.getBoundingClientRect();
				let t = window.innerHeight || document.documentElement.clientHeight, n = window.innerWidth || document.documentElement.clientWidth;
				if (!(e.width > 0 && e.height > 0 && e.bottom > 0 && e.right > 0 && e.top < t && e.left < n)) {
					let n = window.scrollY ?? document.documentElement.scrollTop, r = e.top + n - t * .25;
					window.scrollTo({
						top: Math.max(0, r),
						behavior: "smooth"
					});
				}
			} catch {}
		}
		_updateSelectorAttr() {
			this._selector && (this._isSelected ? this._selector.setAttribute("is-selecting", "") : this._selector.removeAttribute("is-selecting"));
		}
		_subscribeToManager() {
			let e = g();
			e && this._setupManagerSubscriptions(e), this._unsubManager = v((e) => {
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
			let t = g();
			t && t.focusedContent.set({
				dictionaryKey: this._dictionaryKey,
				keyPath: this._getFilteredKeyPath()
			});
		}
		_handleHover(e) {
			e.stopPropagation(), g()?.messenger.send("INTLAYER_HOVERED_CONTENT_CHANGED/post", {
				dictionaryKey: this._dictionaryKey,
				keyPath: this._getFilteredKeyPath()
			});
		}
		_handleUnhover(e) {
			e.stopPropagation(), g()?.messenger.send("INTLAYER_HOVERED_CONTENT_CHANGED/post", null);
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
	}, S = () => {
		typeof customElements > "u" || customElements.get("intlayer-content-selector-wrapper") || customElements.define("intlayer-content-selector-wrapper", x);
	};
})), oe, C, w, se = e((() => {
	y(), s(), oe = typeof HTMLElement < "u" ? HTMLElement : class {}, C = class extends oe {
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
			let t = this._getKeyPath(), n = e.getContentValue(this._dictionaryKey, t);
			if (n == null) {
				this._editedText = null, this._render();
				return;
			}
			if (typeof n == "string" || typeof n == "number") {
				this._editedText = String(n), this._render();
				return;
			}
			if (typeof n == "object") {
				let e = this._locale || void 0, i = a(n, {
					locale: e,
					dictionaryKey: this._dictionaryKey,
					keyPath: t
				}, r(e));
				typeof i == "string" || typeof i == "number" ? this._editedText = String(i) : (console.error(`[intlayer-edited-content] Incorrect edited content format. Expected string. Value: ${JSON.stringify(i)}`), this._editedText = null), this._render();
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
			let e = g();
			e && this._setupManagerSubscriptions(e), this._unsubManager = v((e) => {
				this._unsubEditedContent?.(), this._unsubEditedContent = null, e ? this._setupManagerSubscriptions(e) : (this._editedText = null, this._render());
			});
		}
	}, w = () => {
		typeof customElements > "u" || customElements.get("intlayer-edited-content") || customElements.define("intlayer-edited-content", C);
	};
})), T, E, ce = e((() => {
	re(), T = () => Math.random().toString(36).slice(2), E = class {
		senderId;
		_config;
		_subscribers = /* @__PURE__ */ new Map();
		_windowHandler = null;
		_seenMessageIds = /* @__PURE__ */ new Set();
		_warnedRejectedOrigins = /* @__PURE__ */ new Set();
		constructor(e) {
			this._config = e, this.senderId = T();
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
				messageId: T()
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
			let { allowedOrigins: o } = this._config;
			if (!(!o || o.length === 0 || o.includes("*") || o.filter((e) => !!e && e !== "").some((t) => d(t, e.origin)))) {
				n.startsWith("INTLAYER") && !this._warnedRejectedOrigins.has(e.origin) && (this._warnedRejectedOrigins.add(e.origin), console.warn(`[intlayer] Ignored editor message "${n}" from origin "${e.origin}" — not in allowed origins [${o.join(", ")}]. Check the editor.editorURL / editor.cmsURL configuration.`));
				return;
			}
			let s = this._subscribers.get(n);
			if (s) for (let e of s) e(r, i);
		}
	};
})), D, le = e((() => {
	D = class extends EventTarget {
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
			let t = typeof e == "function" ? e(this._value) : e;
			this._value = t, this.dispatchEvent(new CustomEvent("change", { detail: t })), this._options.emit && this._messenger.send(`${this._key}/post`, t);
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
	};
})), O, k, A, j, M, N, ue = e((() => {
	O = "__intlayer_edited_content_bus__", k = "__intlayer_edited_content_bus_events__", A = () => {
		if (typeof window > "u") return new EventTarget();
		let e = window;
		return e[k] || (e[k] = new EventTarget()), e[k];
	}, j = () => typeof window > "u" ? {} : window[O] ?? {}, M = (e, t) => {
		typeof window < "u" && (window[O] = e), A().dispatchEvent(new CustomEvent("change", { detail: {
			content: e,
			sourceId: t
		} }));
	}, N = (e) => {
		let t = (t) => {
			let { content: n, sourceId: r } = t.detail;
			e(n, r);
		}, n = A();
		return n.addEventListener("change", t), () => n.removeEventListener("change", t);
	};
})), P, F, I, L, de, R, fe = e((() => {
	P = "__intlayer_focused_content_bus__", F = "__intlayer_focused_content_bus_events__", I = () => {
		if (typeof window > "u") return new EventTarget();
		let e = window;
		return e[F] || (e[F] = new EventTarget()), e[F];
	}, L = () => {
		if (typeof window > "u") return;
		let e = window;
		if (e.__intlayer_focused_content_bus_set__) return e[P] ?? null;
	}, de = (e, t) => {
		if (typeof window < "u") {
			let t = window;
			t[P] = e, t.__intlayer_focused_content_bus_set__ = !0;
		}
		I().dispatchEvent(new CustomEvent("change", { detail: {
			content: e,
			sourceId: t
		} }));
	}, R = (e) => {
		let t = (t) => {
			let { content: n, sourceId: r } = t.detail;
			e(n, r);
		}, n = I();
		return n.addEventListener("change", t), () => n.removeEventListener("change", t);
	};
})), z, pe = e((() => {
	ie(), z = class {
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
			this._unsubscribeMerge = this._messenger.subscribe("INTLAYER_IFRAME_CLICKED", f);
		}
		stopInterceptor() {
			this._mousedownHandler &&= (window.removeEventListener("mousedown", this._mousedownHandler), null);
		}
		stopMerger() {
			this._unsubscribeMerge?.(), this._unsubscribeMerge = null;
		}
	};
})), B, me = e((() => {
	B = class {
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
	};
})), V, he = e((() => {
	ce(), le(), ue(), fe(), pe(), me(), o(), te(), V = class {
		messenger;
		editorEnabled;
		focusedContent;
		localeDictionaries;
		editedContent;
		configuration;
		currentLocale;
		displayedDictionaryKeys;
		_urlManager;
		_iframeInterceptor;
		_mode;
		_configuration;
		_unsubAreYouThere = null;
		_unsubActivate = null;
		_unsubClientReady = null;
		_displayedKeysObserver = null;
		_displayedKeysTimer = null;
		_displayedKeysListeners = [];
		_editedContentFromBus = !1;
		_unsubGlobalEditedContent = null;
		_editedContentBusHandler = null;
		_focusedContentFromBus = !1;
		_unsubGlobalFocusedContent = null;
		_focusedContentBusHandler = null;
		constructor(e) {
			this._mode = e.mode, this._configuration = e.configuration, this.messenger = new E(e.messenger), this.editorEnabled = new D("INTLAYER_EDITOR_ENABLED", this.messenger, {
				emit: !1,
				receive: !0,
				initialValue: !1
			}), this.focusedContent = new D("INTLAYER_FOCUSED_CONTENT_CHANGED", this.messenger, {
				emit: !0,
				receive: !0,
				initialValue: null
			}), this.localeDictionaries = new D("INTLAYER_LOCALE_DICTIONARIES_CHANGED", this.messenger), this.editedContent = new D("INTLAYER_EDITED_CONTENT_CHANGED", this.messenger), this.configuration = new D("INTLAYER_CONFIGURATION", this.messenger, {
				emit: !0,
				receive: !1,
				...e.configuration ? { initialValue: e.configuration } : {}
			}), this.currentLocale = new D("INTLAYER_CURRENT_LOCALE", this.messenger, {
				emit: e.mode === "client",
				receive: e.mode === "editor"
			}), this.displayedDictionaryKeys = new D("INTLAYER_DISPLAYED_DICTIONARY_KEYS", this.messenger, {
				emit: e.mode === "client",
				receive: e.mode === "editor",
				initialValue: []
			}), this._urlManager = new B(this.messenger), this._iframeInterceptor = new z(this.messenger);
		}
		start() {
			this.messenger.start(), this.editorEnabled.start(), this.focusedContent.start(), this.localeDictionaries.start(), this.editedContent.start(), this.configuration.start(), this.currentLocale.start(), this.displayedDictionaryKeys.start(), this._startEditedContentBusSync(), this._startFocusedContentBusSync(), this._mode === "client" ? (this._urlManager.start(), this._iframeInterceptor.startInterceptor(), this._loadDictionaries(), this._startDisplayedDictionariesTracking(), this.messenger.send("INTLAYER_EDITED_CONTENT_CHANGED/get"), this._configuration?.editor?.enabled !== !1 && this._setupActivationHandshake()) : (this._iframeInterceptor.startMerger(), this._setupEditorHandshake());
		}
		stop() {
			this._unsubAreYouThere?.(), this._unsubActivate?.(), this._unsubClientReady?.(), this._unsubAreYouThere = null, this._unsubActivate = null, this._unsubClientReady = null, this.messenger.stop(), this.editorEnabled.stop(), this.focusedContent.stop(), this.localeDictionaries.stop(), this.editedContent.stop(), this.configuration.stop(), this.currentLocale.stop(), this.displayedDictionaryKeys.stop(), this._stopDisplayedDictionariesTracking(), this._stopEditedContentBusSync(), this._stopFocusedContentBusSync(), this._urlManager.stop(), this._iframeInterceptor.stopInterceptor(), this._iframeInterceptor.stopMerger();
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
				for (; l(o, s) !== void 0;) e++, i = e === 0 ? r.key : `${r.key} (${e})`, s = [...t, {
					...r,
					key: i
				}];
			}
			let c = u(o, s, t);
			this.editedContent.set({
				...i,
				[e]: {
					...i[e],
					content: c
				}
			});
		}
		renameContent(e, t, n = []) {
			let r = this.editedContent.value ?? {}, i = (this.localeDictionaries.value ?? {})[e]?.content, a = structuredClone(r[e]?.content ?? i), o = ee(a, t, n);
			this.editedContent.set({
				...r,
				[e]: {
					...r[e],
					content: o
				}
			});
		}
		removeContent(e, t) {
			let n = this.editedContent.value ?? {}, r = (this.localeDictionaries.value ?? {})[e]?.content, i = structuredClone(n[e]?.content ?? r), a = l(r, t), o = u(i, t, a);
			this.editedContent.set({
				...n,
				[e]: {
					...n[e],
					content: o
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
			if (e.includes(":local:") || e.includes(":remote:")) {
				if (a && !(e in a)) return;
				let t = n[e]?.content ?? {};
				return l(t, r, this.currentLocale.value);
			}
			let o = Object.keys(n).filter((t) => t.startsWith(`${e}:`) && (!a || t in a));
			for (let e of o) {
				let t = n[e]?.content ?? {}, i = l(t, r, this.currentLocale.value);
				if (i) return i;
			}
		}
		_startEditedContentBusSync() {
			this._editedContentBusHandler = (e) => {
				if (this._editedContentFromBus) return;
				let t = e.detail;
				M(t, this.messenger.senderId);
			}, this.editedContent.addEventListener("change", this._editedContentBusHandler), this._unsubGlobalEditedContent = N((e, t) => {
				t !== this.messenger.senderId && (this._editedContentFromBus = !0, this.editedContent.set(e), this._editedContentFromBus = !1);
			});
			let e = j();
			Object.keys(e).length > 0 && (this._editedContentFromBus = !0, this.editedContent.set(e), this._editedContentFromBus = !1);
		}
		_stopEditedContentBusSync() {
			this._editedContentBusHandler &&= (this.editedContent.removeEventListener("change", this._editedContentBusHandler), null), this._unsubGlobalEditedContent?.(), this._unsubGlobalEditedContent = null;
		}
		_startFocusedContentBusSync() {
			this._focusedContentBusHandler = (e) => {
				if (this._focusedContentFromBus) return;
				let t = e.detail;
				de(t, this.messenger.senderId);
			}, this.focusedContent.addEventListener("change", this._focusedContentBusHandler), this._unsubGlobalFocusedContent = R((e, t) => {
				t !== this.messenger.senderId && (this._focusedContentFromBus = !0, this.focusedContent.set(e), this._focusedContentFromBus = !1);
			});
			let e = L();
			e !== void 0 && (this._focusedContentFromBus = !0, this.focusedContent.set(e), this._focusedContentFromBus = !1);
		}
		_stopFocusedContentBusSync() {
			this._focusedContentBusHandler &&= (this.focusedContent.removeEventListener("change", this._focusedContentBusHandler), null), this._unsubGlobalFocusedContent?.(), this._unsubGlobalFocusedContent = null;
		}
		_scanDisplayedDictionaryKeys() {
			if (typeof document > "u") return;
			let e = document.querySelectorAll("intlayer-content-selector-wrapper[dictionary-key]"), t = Array.from(new Set(Array.from(e).map((e) => e.getAttribute("dictionary-key") ?? "").filter(Boolean)));
			this.displayedDictionaryKeys.set(t);
		}
		_startDisplayedDictionariesTracking() {
			if (typeof document > "u" || typeof MutationObserver > "u") return;
			let e = () => {
				this._displayedKeysTimer && clearTimeout(this._displayedKeysTimer), this._displayedKeysTimer = setTimeout(() => this._scanDisplayedDictionaryKeys(), 100);
			};
			this._displayedKeysObserver = new MutationObserver(e), this._displayedKeysObserver.observe(document.body, {
				childList: !0,
				subtree: !0
			});
			for (let t of ["locationchange", "popstate"]) {
				let n = e;
				window.addEventListener(t, n), this._displayedKeysListeners.push([t, n]);
			}
			this._scanDisplayedDictionaryKeys();
		}
		_stopDisplayedDictionariesTracking() {
			this._displayedKeysObserver?.disconnect(), this._displayedKeysObserver = null, this._displayedKeysTimer &&= (clearTimeout(this._displayedKeysTimer), null);
			for (let [e, t] of this._displayedKeysListeners) window.removeEventListener(e, t);
			this._displayedKeysListeners = [];
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
				let e = (await import("./index.browser-Racy-4te.js")).getUnmergedDictionaries(), t = Object.fromEntries(Object.values(e).flat().map((e) => [e.localId, e]));
				this.localeDictionaries.set(t), this.editorEnabled.value && this._broadcastData();
			} catch (e) {
				console.warn("[intlayer] Failed to load unmerged dictionaries:", e);
			}
		}
	};
})), H, U, W, ge = e((() => {
	y(), ve(), H = typeof HTMLElement < "u" ? HTMLElement : class {}, U = class extends H {
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
			this._unsubManager?.(), this._unsubManager = null, this._initialized &&= ($(), !1);
		}
		_init() {
			this._initialized || (Q(), this._initialized = !0, this._locale && this._syncLocale(this._locale));
		}
		_syncLocale(e) {
			let t = g();
			t ? t.currentLocale.set(e) : (this._unsubManager?.(), this._unsubManager = v((t) => {
				t && (this._unsubManager?.(), this._unsubManager = null, t.currentLocale.set(e));
			}));
		}
	}, W = () => {
		typeof customElements > "u" || customElements.get("intlayer-editor") || customElements.define("intlayer-editor", U);
	};
})), G, K, q, J, Y, _e = e((() => {
	ae(), se(), ge(), G = 250, K = "\n  :host {\n    display: contents;\n  }\n\n  .wrapper {\n    display: inline-block;\n    cursor: pointer;\n    user-select: none;\n    border-radius: 0.375rem;\n    outline-width: 2px;\n    outline-offset: 4px;\n    outline-style: solid;\n    outline-color: transparent;\n    transition: all 100ms 50ms ease-in-out;\n  }\n\n  .wrapper[data-active] {\n    outline-color: inherit;\n  }\n", q = typeof HTMLElement < "u" ? HTMLElement : class {}, J = class extends q {
		_isSelecting = !1;
		_pressDuration = G;
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
			t.textContent = K, e.appendChild(t);
			let n = document.createElement("span");
			n.className = "wrapper", n.setAttribute("role", "button"), n.setAttribute("tabindex", "0"), n.appendChild(document.createElement("slot")), e.appendChild(n), this._wrapper = n, n.addEventListener("mousedown", () => this._handleMouseDown()), n.addEventListener("mouseup", () => this._handleMouseUpOrLeave()), n.addEventListener("mouseleave", () => this._handleMouseUpOrLeave()), n.addEventListener("mouseenter", () => this._handleMouseEnter()), n.addEventListener("click", (e) => this._handleClick(e)), n.addEventListener("touchstart", () => this._handleMouseDown()), n.addEventListener("touchend", () => this._handleMouseUpOrLeave()), n.addEventListener("touchcancel", () => this._handleMouseUpOrLeave()), n.addEventListener("blur", () => this._handleBlur());
		}
		attributeChangedCallback(e, t, n) {
			e === "is-selecting" ? (this._isSelecting = n !== null, this._updateActiveState()) : e === "press-duration" && (this._pressDuration = n === null ? G : parseInt(n, 10));
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
	}, Y = () => {
		typeof customElements > "u" || (customElements.get("intlayer-content-selector") || customElements.define("intlayer-content-selector", J), S(), w(), W());
	};
})), X, Z, Q, $, ve = e((() => {
	y(), he(), _e(), n(), X = () => {
		let e = typeof window < "u" ? window.location.origin : void 0;
		return {
			allowedOrigins: [...new Set([
				t?.editorURL,
				t?.cmsURL,
				e
			].filter(Boolean))],
			postMessageFn: (e, t) => {
				typeof window > "u" || window.self !== window.top && window.parent?.postMessage(e, t);
			}
		};
	}, Z = 0, Q = () => {
		Z++;
		let e = g();
		if (e) return e;
		let n = new V({
			mode: "client",
			messenger: X(),
			configuration: { editor: t }
		});
		return _(n), Y(), n.start(), n;
	}, $ = () => {
		Z = Math.max(0, Z - 1), !(Z > 0) && (g()?.stop(), _(null));
	};
}));
e((() => {
	ve();
}))();
export { Q as initEditorClient, $ as stopEditorClient };
import { n as e } from "./rolldown-runtime-Bn0tnvxB.js";
import { n as t, r as n, t as r } from "./built-BvRk9kiK.js";
import { n as i, r as a } from "./isBot-BcrVOEOv.js";
var o, s = e((() => {
	o = (e) => {
		let t = 2166136261;
		for (let n = 0; n < e.length; n++) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
		return t >>> 0;
	};
})), c, l = e((() => {
	s(), c = (e, t, n, r) => {
		if (n.length === 0) throw Error("assignVariant requires at least one variant");
		if (n.length === 1) return n[0];
		let i = o(`${e}:${t}`) / 4294967296;
		if (!r || r.length !== n.length) {
			let e = Math.floor(i * n.length);
			return n[Math.min(e, n.length - 1)];
		}
		let a = r.reduce((e, t) => e + t, 0);
		if (a <= 0) return n[Math.floor(i * n.length)];
		let s = 0, c = i * a;
		for (let e = 0; e < n.length; e++) if (s += r[e], c < s) return n[e];
		return n[n.length - 1];
	};
})), u, d, f, p = e((() => {
	u = "", d = (e) => [
		e.url,
		e.dictionaryKey,
		e.keyPath,
		e.locale,
		e.experimentKey ?? "",
		e.variant ?? ""
	].join(u), f = ({ max: e }) => {
		let t = [], n = /* @__PURE__ */ new Map(), r = () => t.length + n.size, i = () => {
			for (; r() > e && n.size > 0;) {
				let e = n.keys().next().value;
				n.delete(e);
			}
			r() > e && (t = t.slice(r() - e));
		};
		return {
			push: (e) => {
				if (e.type === "content_exposure") {
					let t = d(e), r = n.get(t);
					r ? (r.count = (r.count ?? 1) + (e.count ?? 1), r.t = e.t) : n.set(t, {
						...e,
						count: e.count ?? 1
					});
				} else t.push(e);
				return i(), r();
			},
			drain: () => {
				let e = [...t, ...n.values()];
				return t = [], n.clear(), e;
			},
			size: r
		};
	};
})), m, h = e((() => {
	s(), m = (e, t) => t >= 1 ? !0 : t <= 0 ? !1 : o(e) / 4294967295 < t;
})), g, _, v, y = e((() => {
	g = "__intlayer_analytics_sid__", _ = () => {
		let e = typeof globalThis < "u" ? globalThis.crypto : void 0;
		return e?.randomUUID ? e.randomUUID() : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
	}, v = () => {
		if (typeof window > "u" || !window.sessionStorage) return _();
		try {
			let e = window.sessionStorage.getItem(g);
			if (e) return e;
			let t = _();
			return window.sessionStorage.setItem(g, t), t;
		} catch {
			return _();
		}
	};
})), b, x = e((() => {
	b = (e, t, { useBeacon: n = !1, token: r } = {}) => {
		try {
			let i = JSON.stringify(t);
			return n && typeof navigator < "u" && typeof navigator.sendBeacon == "function" ? navigator.sendBeacon(e, i) : typeof fetch == "function" && (fetch(e, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					...r ? { Authorization: `Bearer ${r}` } : {}
				},
				body: i,
				keepalive: !0,
				credentials: "omit",
				mode: "cors"
			}).catch(() => {}), !0);
		} catch {
			return !1;
		}
	};
})), S, C = e((() => {
	S = (e) => {
		if (typeof window > "u") return;
		let t = window.requestIdleCallback;
		if (typeof t == "function") {
			t(() => e());
			return;
		}
		setTimeout(e, 1);
	};
})), w, T, E, D, O, k = e((() => {
	w = "__intlayer_public_token__", T = 6e4, E = () => {
		try {
			let e = window.sessionStorage?.getItem(w);
			if (!e) return null;
			let t = JSON.parse(e);
			return typeof t?.token != "string" || typeof t?.expiresAt != "number" ? null : t;
		} catch {
			return null;
		}
	}, D = (e) => {
		try {
			window.sessionStorage?.setItem(w, JSON.stringify(e));
		} catch {}
	}, O = ({ backendURL: e, clientId: t }) => {
		let n = `${e.replace(/\/$/, "")}/api/public/token`, r = null, i = null, a = (e) => e !== null && e.expiresAt - T > Date.now(), o = () => {
			if (a(r)) return r.token;
			if (typeof window < "u") {
				let e = E();
				if (a(e)) return r = e, e.token;
			}
		}, s = async () => {
			try {
				let e = await fetch(n, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ clientId: t }),
					credentials: "omit",
					mode: "cors"
				});
				if (!e.ok) return;
				let i = await e.json(), a = i?.data?.token, o = i?.data?.expiresIn ?? 0;
				if (!a || o <= 0) return;
				r = {
					token: a,
					expiresAt: Date.now() + o * 1e3
				}, typeof window < "u" && D(r);
			} catch {} finally {
				i = null;
			}
		};
		return {
			getToken: o,
			prime: () => {
				t && typeof fetch == "function" && (o() || (i ||= s()));
			}
		};
	};
})), A, j, M, N, P = e((() => {
	i(), C(), l(), p(), k(), h(), y(), x(), A = "intlayer-analytics/1", j = () => typeof window > "u" || !window.location ? "" : window.location.pathname, M = () => {
		if (!(typeof document > "u" || !document.referrer)) try {
			return new URL(document.referrer).host;
		} catch {
			return;
		}
	}, N = (e) => {
		let t = v(), n = a(), r = !n && m(t, e.sampleRate), i = f({ max: e.maxBufferSize }), o = `${e.backendURL.replace(/\/$/, "")}/api/analytics/events`, s = O({
			backendURL: e.backendURL,
			clientId: e.clientId
		}), l = "", u = null, d = !1, p = null, h = null, g = /* @__PURE__ */ new Set(), _ = (n = !1) => {
			let r = i.drain(), a = s.getToken();
			for (let i = 0; i < r.length; i += 200) b(o, {
				token: a,
				clientId: a ? void 0 : e.clientId,
				sessionId: t,
				sdkVersion: A,
				events: r.slice(i, i + 200)
			}, {
				useBeacon: n,
				token: a
			});
		}, y = (t) => {
			i.push(t) >= e.maxBufferSize && _();
		}, x = (e) => {
			l = e;
		}, C = (e = {}) => {
			if (!r) return;
			let t = e.url ?? j(), n = e.reason ?? "initial";
			(n !== "route_change" || t !== h) && (h = t, g = /* @__PURE__ */ new Set(), y({
				type: "page_view",
				t: Date.now(),
				url: t,
				locale: e.locale ?? l,
				ref: e.ref ?? M(),
				vw: e.vw ?? (typeof window < "u" ? window.innerWidth : void 0),
				vh: e.vh ?? (typeof window < "u" ? window.innerHeight : void 0),
				reason: n
			}));
		}, w = (e) => {
			if (!r) return;
			let t = e.locale ?? l, n = [
				e.dictionaryKey,
				e.keyPath,
				t,
				e.experimentKey ?? "",
				e.variant ?? ""
			].join("");
			g.has(n) || (g.add(n), y({
				...e,
				type: "content_exposure",
				t: Date.now(),
				url: j(),
				locale: t
			}));
		}, T = (e) => {
			n || (y({
				...e,
				type: "conversion",
				t: Date.now(),
				url: j(),
				locale: e.locale ?? l
			}), _());
		}, E = (e, n, r) => c(t, e, n, r), D = () => {
			if (typeof window > "u") return;
			let e = () => {
				document.visibilityState === "hidden" && _(!0);
			}, t = () => _(!0), n = () => C({ reason: "route_change" });
			document.addEventListener("visibilitychange", e), window.addEventListener("pagehide", t, { capture: !0 }), window.addEventListener("popstate", n);
			let r = window.history, i = r.pushState, a = function(...e) {
				let t = i.apply(this, e);
				return C({ reason: "route_change" }), t;
			};
			r.pushState = a, p = () => {
				document.removeEventListener("visibilitychange", e), window.removeEventListener("pagehide", t, { capture: !0 }), window.removeEventListener("popstate", n), r.pushState === a && (r.pushState = i);
			};
		};
		return {
			setLocale: x,
			trackPageView: C,
			trackContentExposure: w,
			trackConversion: T,
			getVariant: E,
			flush: _,
			start: () => {
				d || n || (d = !0, s.prime(), u = setInterval(_, e.flushInterval), u?.unref?.(), S(D));
			},
			stop: () => {
				d && (d = !1, u &&= (clearInterval(u), null), p?.(), p = null, _(!0));
			}
		};
	};
})), F, I, L, R, z, B, V = e((() => {
	F = "__intlayer_analytics_client__", I = "__intlayer_analytics_ref_count__", L = () => typeof window > "u" ? null : window[F] ?? null, R = (e) => {
		typeof window > "u" || (window[F] = e);
	}, z = () => {
		if (typeof window > "u") return 0;
		let e = window;
		return e[I] = (e[I] ?? 0) + 1, e[I];
	}, B = () => {
		if (typeof window > "u") return 0;
		let e = window;
		return e[I] = Math.max(0, (e[I] ?? 0) - 1), e[I];
	};
})), H, U, W = e((() => {
	P(), V(), n(), H = () => {
		z();
		let e = L();
		if (e) return e;
		let n = N({
			backendURL: t?.backendURL ?? "",
			clientId: t?.clientId,
			flushInterval: r?.flushInterval ?? 2e4,
			maxBufferSize: 500,
			sampleRate: r?.sampleRate ?? 1
		});
		return R(n), n.start(), n;
	}, U = () => {
		B() > 0 || (L()?.stop(), R(null));
	};
})), G, K, q = e((() => {
	G = (e) => e.map((e) => e.key === void 0 ? "*" : String(e.key)).join("."), K = (e) => ({
		dictionaryKey: e.dictionaryKey,
		keyPath: G(e.keyPath),
		locale: e.locale,
		nodeType: e.nodeType,
		experimentKey: e.experimentKey,
		variant: e.variant
	});
})), J = e((() => {
	V(), W(), q();
}));
i(), J();
export { K as buildContentExposure, L as getGlobalAnalyticsClient, H as initAnalyticsClient, U as stopAnalyticsClient };
import { n as e } from "./rolldown-runtime-Bn0tnvxB.js";
var t;
e((() => {
	t = () => ({});
}))();
export { t as getUnmergedDictionaries };
import { n as e, r as t } from "./rolldown-runtime-Bn0tnvxB.js";
import { a as n, c as r, i, l as a, r as o, u as s } from "./built-BvRk9kiK.js";
var c = t({ getDictionaries: () => l }), l, u = e((() => {
	l = () => ({});
})), d, f, p, m, h, g, ee, te, _, ne = e((() => {
	d = /* @__PURE__ */ new WeakMap(), f = 0, p = (e) => {
		if (!e) return "base";
		let t = d.get(e);
		if (t) return t;
		f += 1;
		let n = `p${f}`;
		return d.set(e, n), n;
	}, m = 256, h = /* @__PURE__ */ new WeakMap(), g = (e) => typeof e == "object" && !!e, ee = (e, t, n) => `${e}_${t}_${p(n)}`, te = (e, t) => {
		if (!g(e)) return { hit: !1 };
		let n = h.get(e);
		return n?.has(t) ? {
			hit: !0,
			content: n.get(t)
		} : { hit: !1 };
	}, _ = (e, t, n) => {
		if (!g(e)) return n;
		let r = h.get(e);
		return r || (r = /* @__PURE__ */ new Map(), h.set(e, r)), r.size >= m && r.clear(), r.set(t, n), n;
	};
})), re, ie = e((() => {
	re = (e, t) => {
		let n = Object.keys(e), r = n[n.length - 1];
		return e[`${t}`] ?? e.fallback ?? e[r];
	};
})), ae, v, y, b, x, oe, S, se, ce, le, C, w, T, E, ue, D = e((() => {
	ae = "translation", v = "enumeration", y = "plural", b = "condition", x = "insertion", oe = "file", S = "object", se = "array", ce = "nested", le = "reactNode", C = "markdown", w = "html", T = "gender", E = "select", ue = (e, t, n) => ({
		...n,
		nodeType: e,
		[e]: t
	});
})), O, de = e((() => {
	D(), O = (e, t) => {
		for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => O(e, t));
		if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
		if (Array.isArray(e)) return e.map((e, n) => {
			let r = {
				...t,
				children: e,
				keyPath: [...t.keyPath, {
					type: se,
					key: n
				}]
			};
			return O(e, r);
		});
		let n = {};
		for (let r in e) {
			let i = {
				...t,
				children: e[r],
				keyPath: [...t.keyPath, {
					type: S,
					key: r
				}]
			};
			if (t.eager) {
				n[r] = O(e[r], i);
				continue;
			}
			Object.defineProperty(n, r, {
				enumerable: !0,
				configurable: !0,
				get: function() {
					let t = O(e[r], i);
					return Object.defineProperty(this, r, {
						value: t,
						enumerable: !0,
						configurable: !0
					}), t;
				}
			});
		}
		return n;
	};
})), fe, k, pe = e((() => {
	fe = (e, t) => {
		let n = Object.keys(e);
		for (let e of n) {
			let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
			if (n || r || i || a || o) return e;
		}
	}, k = (e, t) => e[fe(e, t) ?? "fallback"];
})), me, he, ge = e((() => {
	me = (e) => e === "m" || e === "male" ? "male" : e === "f" || e === "female" ? "female" : "fallback", he = (e, t) => {
		let n = Object.keys(e), r = n[n.length - 1];
		return e[me(t)] ?? e.fallback ?? e[r];
	};
})), A, _e = e((() => {
	A = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString());
})), j, ve, M, ye, N, P, F, I, be, xe, Se, Ce, L, we, Te, R, Ee = e((() => {
	j = "default", ve = /[^A-Za-z0-9._&=-]/g, M = /[^A-Za-z0-9._-]/g, ye = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, N = (e, t) => {
		if (e === "") return "%";
		let n = e.replace(t, ye);
		return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
	}, P = (e) => e === void 0 ? j : typeof e == "string" ? N(e, ve) : Object.keys(e).sort().map((t) => `${N(t, M)}=${N(String(e[t]), M)}`).join("&"), F = (e) => Array.isArray(e) ? e.length === 0 ? [j] : e.map(P) : [P(e)], I = (e, t) => {
		for (let n of e) if (t(n)) return n;
		return t("default") ? j : e[0] ?? "default";
	}, be = (e, t, n, r) => {
		let i = e.split("/");
		return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
	}, xe = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Se = (e, t) => {
		let n = t.split("/"), r = {
			key: e.key,
			content: e.content[t]
		};
		return e.qualifierTypes.forEach((e, t) => {
			e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
		}), r;
	}, Ce = (e, t) => {
		if (!xe(e)) return e;
		let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? j : I(F(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => be(e, n, t, s)).map((t) => Se(e, t));
		return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
	}, L = (e) => typeof e == "object" && e ? {
		locale: e.locale,
		selector: e
	} : { locale: e }, we = (e, t) => {
		if (e === void 0) return;
		if (typeof e == "string" || Array.isArray(e)) return e;
		let n = e;
		return n[t] ?? n.default;
	}, Te = (e) => {
		let { localeOrSelector: t, contextLocale: n, contextVariant: r, dictionaryKey: i } = e, a = typeof t == "object" && t ? t : void 0, o = (a ? a.locale : t) ?? n, s = a?.variant ?? we(r, i);
		return s === void 0 ? a ? {
			...a,
			locale: o
		} : o : {
			...a,
			locale: o,
			variant: s
		};
	}, R = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
		let n = e[t];
		return `${t}:${t === "variant" ? F(n).join(",") : String(n)}`;
	}).join("|") : "";
})), De, z, B, V, H = e((() => {
	Q(), o(), s(), u(), De = /* @__PURE__ */ new Set([
		"hasOwnProperty",
		"isPrototypeOf",
		"propertyIsEnumerable",
		"toLocaleString"
	]), z = (e = "") => new Proxy((() => e), { get: (t, n) => {
		if (n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf") return () => e;
		if (n === "then") return;
		if (De.has(n)) return Object.prototype[n].bind(t);
		if (n === Symbol.iterator) return function* () {
			yield e;
		};
		let r = e ? `${e}.${String(n)}` : String(n);
		return z(r);
	} }), B = /* @__PURE__ */ new Set(), V = (e, t, i) => {
		let o = l()[e];
		return o ? Z(o, t, i) : (B.has(e) || (a({ log: n })(typeof window > "u" ? `Dictionary ${r(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), B.add(e)), z(e));
	};
})), Oe, ke = e((() => {
	H(), Oe = (e, t, n) => {
		let r = V(e, n?.locale, n?.plugins);
		if (typeof t == "string") {
			let e = t.split("."), n = r;
			for (let t of e) if (n = n?.[t], n === void 0) return r;
			return n;
		}
		return r;
	};
})), Ae, je, Me = e((() => {
	Q(), Ae = (e, t) => {
		let n = e;
		for (let r of t.split(".")) if (n = n?.[r], n === void 0) return e;
		return n;
	}, je = (e, t, n) => {
		let r = n?.nestedDictionaries, i = r?.[e];
		if (!i) return;
		let a = Z({
			...i,
			nestedDictionaries: {
				...r,
				...i.nestedDictionaries
			}
		}, n?.locale, n?.plugins);
		return typeof t == "string" ? Ae(a, t) : a;
	};
}));
function Ne(e, t, n) {
	let r = t ?? i?.defaultLocale, a = `${r}|${n ? JSON.stringify(n) : ""}`, o = e, s = U.get(o);
	s || (s = /* @__PURE__ */ new Map(), U.set(o, s));
	let c = s.get(a);
	if (!c) {
		let t = typeof e == "string" ? Le(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		s.size > Pe && s.clear(), c = new t(r, n), s.set(a, c);
	}
	return c;
}
var Pe, U, W, Fe, Ie, Le, Re = e((() => {
	o(), Pe = 50, U = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Set(), Fe = (e) => {
		W.has(e) || (W.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
	}, Ie = {
		DisplayNames: class {
			of(e) {
				return e;
			}
		},
		ListFormat: class {
			format(e) {
				return Array.from(e).join(", ");
			}
			formatToParts(e) {
				return Array.from(e).flatMap((e, t) => t === 0 ? [{
					type: "element",
					value: e
				}] : [{
					type: "literal",
					value: ", "
				}, {
					type: "element",
					value: e
				}]);
			}
		},
		Segmenter: class {
			segment(e) {
				let t = 0;
				return Array.from(e).map((e) => {
					let n = t;
					return t += e.length, {
						segment: e,
						index: n
					};
				});
			}
		}
	}, Le = (e) => {
		let t = Intl[e];
		return typeof t == "function" ? t : (Fe(e), Ie[e]);
	};
})), G, ze = e((() => {
	Re(), G = (e, t, n) => e[Ne("PluralRules", n).select(t)] ?? e.other;
})), Be, Ve = e((() => {
	Be = (e, t) => {
		let n = Object.keys(e), r = n[n.length - 1];
		return e[t] ?? e.fallback ?? e.other ?? e[r];
	};
})), K, He, Ue, We = e((() => {
	K = (e) => {
		if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
		let t = Object.getPrototypeOf(e);
		return t === Object.prototype || t === null || Array.isArray(e);
	}, He = (e, t) => {
		if (e === void 0) return t;
		if (t === void 0 || Array.isArray(e)) return e;
		if (K(e) && K(t)) {
			let n = { ...e };
			for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : He(e[r], t[r]));
			return n;
		}
		return e;
	}, Ue = (e, t, n) => {
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
		if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => He(e, t));
	};
})), q, Ge, Ke, J, qe = e((() => {
	_e(), D(), q = (e) => {
		if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
		let { nodeType: t } = e;
		return process.env.INTLAYER_NODE_TYPE_HTML !== "false" && t === "html" || process.env.INTLAYER_NODE_TYPE_MARKDOWN !== "false" && t === "markdown";
	}, Ge = (e) => {
		if (typeof e == "string") return e;
		if (q(e)) return e.nodeType === "html" ? e[w] : e[C];
	}, Ke = (e, t) => {
		if (typeof e == "string") return t;
		if (q(e)) {
			let n = e.nodeType === "html" ? w : C;
			return {
				...e,
				[n]: t
			};
		}
		return e;
	}, J = (e, t, n, r, i) => {
		let a = A(Ge(e), t), o = Ke(e, a);
		return i(o, {
			...n,
			plugins: r,
			children: o
		});
	};
})), Y, Je, Ye, Xe, Ze, Qe, $e, et, tt, nt, rt, it = e((() => {
	ie(), pe(), ge(), _e(), ke(), Me(), ze(), Ve(), We(), qe(), D(), Y = {
		id: "fallback-plugin",
		canHandle: () => !1,
		transform: (e) => e
	}, Je = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? Y : {
		id: "translation-plugin",
		canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
		transform: (n, r, i) => {
			let a = n.translation ?? {}, o = {};
			for (let e in a) {
				let t = {
					...r,
					children: a[e],
					keyPath: [...r.keyPath, {
						type: ae,
						key: e
					}]
				};
				o[e] = i(a[e], t);
			}
			return Ue(o, e, t);
		}
	}, Ye = process.env.INTLAYER_NODE_TYPE_ENUMERATION === "false" ? Y : {
		id: "enumeration-plugin",
		canHandle: (e) => typeof e == "object" && e?.nodeType === "enumeration",
		transform: (e, t, n) => {
			let r = e[v], i = {};
			for (let e in r) {
				let a = r[e];
				i[e] = n(a, {
					...t,
					children: a,
					keyPath: [...t.keyPath, {
						type: v,
						key: e
					}]
				});
			}
			return (e) => {
				let t = typeof e == "number" ? e : e.count, n = k(i, t);
				return typeof n == "function" && typeof e == "object" ? n(e) : n;
			};
		}
	}, Xe = (e) => process.env.INTLAYER_NODE_TYPE_PLURAL === "false" ? Y : {
		id: "plural-plugin",
		canHandle: (e) => typeof e == "object" && e?.nodeType === "plural",
		transform: (t, n, r) => {
			let i = t[y], a = {}, o = {
				id: "plural-string-plugin",
				canHandle: (e) => typeof e == "string" || q(e),
				transform: (e, t, r) => {
					if (q(e)) return (i) => J(e, i, t, n.plugins, r);
					let i = r(e, {
						...t,
						children: e,
						plugins: [...(n.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
					});
					return (e) => {
						let a = A(i, e);
						return r(a, {
							...t,
							plugins: n.plugins,
							children: a
						});
					};
				}
			};
			for (let e in i) {
				let t = i[e];
				a[e] = r(t, {
					...n,
					children: t,
					keyPath: [...n.keyPath, {
						type: y,
						key: e
					}],
					plugins: [o, ...n.plugins ?? []]
				});
			}
			let s = String(e ?? n.locale ?? "en");
			return (e) => {
				let t = typeof e == "number" ? e : e.count, n = typeof e == "number" ? { count: e } : e, r = G(a, t, s);
				return typeof r == "function" ? r(n) : r;
			};
		}
	}, Ze = process.env.INTLAYER_NODE_TYPE_CONDITION === "false" ? Y : {
		id: "condition-plugin",
		canHandle: (e) => typeof e == "object" && e?.nodeType === "condition",
		transform: (e, t, n) => {
			let r = e[b], i = {};
			for (let e in r) {
				let a = r[e];
				i[e] = n(a, {
					...t,
					children: a,
					keyPath: [...t.keyPath, {
						type: b,
						key: e
					}]
				});
			}
			return (e) => {
				let t = typeof e == "boolean" ? e : e.value, n = re(i, t);
				return typeof n == "function" && typeof e == "object" ? n(e) : n;
			};
		}
	}, Qe = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? Y : {
		id: "insertion-plugin",
		canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
		transform: (e, t, n) => {
			let r = [...t.keyPath, { type: x }], i = e[x], a = {
				id: "insertion-string-plugin",
				canHandle: (e) => typeof e == "string" || q(e),
				transform: (e, n, r) => {
					if (q(e)) return (i) => J(e, i, n, t.plugins, r);
					let i = r(e, {
						...n,
						children: e,
						plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
					});
					return (e) => {
						let a = A(i, e);
						return r(a, {
							...n,
							plugins: t.plugins,
							children: a
						});
					};
				}
			};
			return n(i, {
				...t,
				children: i,
				keyPath: r,
				plugins: [a, ...t.plugins ?? []]
			});
		}
	}, $e = process.env.INTLAYER_NODE_TYPE_GENDER === "false" ? Y : {
		id: "gender-plugin",
		canHandle: (e) => typeof e == "object" && e?.nodeType === "gender",
		transform: (e, t, n) => {
			let r = e[T], i = {};
			for (let e in r) {
				let a = r[e];
				i[e] = n(a, {
					...t,
					children: a,
					keyPath: [...t.keyPath, {
						type: T,
						key: e
					}]
				});
			}
			return (e) => he(i, e);
		}
	}, et = process.env.INTLAYER_NODE_TYPE_SELECT === "false" ? Y : {
		id: "select-plugin",
		canHandle: (e) => typeof e == "object" && e?.nodeType === "select",
		transform: (e, t, n) => {
			let r = e[E], i = {};
			for (let e in r) {
				let a = r[e];
				i[e] = n(a, {
					...t,
					children: a,
					keyPath: [...t.keyPath, {
						type: E,
						key: e
					}]
				});
			}
			return (e) => {
				let t = typeof e == "string" ? e : e?.value, n = Be(i, t);
				return typeof n == "function" && typeof e == "object" ? n(e) : n;
			};
		}
	}, tt = process.env.INTLAYER_OPTIMIZED_NESTING === "true" ? je : Oe, nt = (e) => process.env.INTLAYER_NODE_TYPE_NESTED === "false" ? Y : {
		id: "nested-plugin",
		canHandle: (e) => typeof e == "object" && (e?.nodeType === "nested" || e?.nodeType === "n"),
		transform: (t, n) => tt(t[ce].dictionaryKey, t[ce].path, {
			...n,
			locale: e ?? n.locale
		})
	}, rt = process.env.INTLAYER_NODE_TYPE_FILE === "false" ? Y : {
		id: "file-plugin",
		canHandle: (e) => typeof e == "object" && e?.nodeType === "file",
		transform: (e, t, n) => n(e.content, {
			...t,
			children: e.content
		})
	};
})), X, at, ot = e((() => {
	de(), it(), o(), X = (e, t = !0) => [
		Je(e ?? i.defaultLocale, t ? i.defaultLocale : void 0),
		Ye,
		Ze,
		Qe,
		nt(e ?? i.defaultLocale),
		rt,
		$e,
		et
	], at = (e, t, n = []) => O(e, {
		...t,
		plugins: n
	});
})), Z, Q = e((() => {
	ne(), Ee(), ot(), o(), Z = (e, t, n) => {
		let { locale: r, selector: a } = L(t), o = ee(r ?? i.defaultLocale, R(a), n), s = te(e, o);
		if (s.hit) return s.content;
		let c = n ?? X(r), l = Ce(e, a), u = (e) => {
			let t = {
				dictionaryKey: e.key,
				dictionaryPath: e.filePath,
				keyPath: [],
				plugins: c,
				nestedDictionaries: e.nestedDictionaries
			};
			return at(e.content, t, c);
		};
		return l === null ? _(e, o, null) : Array.isArray(l) ? _(e, o, l.map(u)) : _(e, o, u(l));
	};
})), st, $, ct, lt, ut = e((() => {
	st = (e) => {
		let t = {}, n = /([a-zA-Z0-9-]+)="([^"]*)"/g, r = n.exec(e);
		for (; r !== null;) t[r[1]] = r[2], r = n.exec(e);
		return t;
	}, $ = /* @__PURE__ */ new Map(), ct = (e) => {
		if ($.has(e)) return $.get(e);
		if (typeof e != "string") return [];
		let t = /<(\/)?([a-zA-Z0-9.-]+)([\s\S]*?)(\/?)>/g, n = [], r = [], i = 0, a = t.exec(e), o = (e) => {
			(r.length > 0 ? r[r.length - 1].children : n).push(e);
		};
		for (; a !== null;) {
			let [n, s, c, l, u] = a, d = a.index;
			d > i && o(e.slice(i, d));
			let f = s === "/", p = u === "/" || l.trim().endsWith("/") || n.endsWith("/>"), m = l.trim().replace(/\/$/, "").trim();
			if (f) {
				let e = r[r.length - 1];
				if (e && e.tagName === c) {
					let e = r.pop();
					e && o({
						tagName: e.tagName,
						props: e.props,
						children: e.children
					});
				}
			} else if (p) o({
				tagName: c,
				props: st(m),
				children: []
			});
			else {
				let e = st(m);
				r.push({
					tagName: c,
					children: [],
					props: e
				});
			}
			i = d + n.length, a = t.exec(e);
		}
		for (i < e.length && o(e.slice(i)); r.length > 0;) {
			let e = r.pop();
			e && o({
				tagName: e.tagName,
				props: e.props,
				children: e.children
			});
		}
		return $.set(e, n), n;
	}, lt = (e, t) => {
		let n = ct(e), r = 0, i = (e) => {
			if (typeof e == "string") return e;
			let { tagName: n, props: a, children: o } = e, s = o.flatMap(i), c = r++, l = t[n];
			if (!l) {
				let e = n.toLowerCase(), r = Object.keys(t).find((t) => t.toLowerCase() === e);
				r && (l = t[r]);
			}
			let u = `html-tag-${n}-${c}`;
			if (typeof l == "function") return l({
				...a,
				children: s,
				key: u
			});
			if (typeof l == "string") {
				let e = t[l];
				return typeof e == "function" ? e({
					...a,
					children: s,
					key: u
				}) : s;
			}
			if (typeof l == "object" && l && "tag" in l) {
				let { tag: e, props: n } = l, r = t[e];
				return typeof r == "function" ? r({
					...a,
					...n,
					children: s,
					key: u
				}) : s;
			}
			return s;
		}, a = n.flatMap(i);
		return a.length === 1 ? a[0] : a;
	};
})), dt, ft, pt, mt = e((() => {
	dt = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", ft = /\{\{\s*(.*?)\s*\}\}/g, pt = (e, t = {}) => {
		if (!Object.values(t).some(dt)) return {
			isSimple: !0,
			parts: e.replace(ft, (e, n) => (t[n.trim()] ?? "").toString())
		};
		let n = e.split(ft), r = [];
		for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
		else {
			let i = t[n[e].trim()];
			i != null && r.push(i);
		}
		return {
			isSimple: !1,
			parts: r
		};
	};
})), ht = e((() => {
	Q(), H(), qe(), it(), ot(), ut(), mt();
}));
export { E as $, V as A, O as B, J as C, ze as D, G as E, Te as F, oe as G, se as H, I, x as J, T as K, F as L, R as M, Ee as N, Ne as O, L as P, le as Q, k as R, q as S, Ve as T, b as U, de as V, v as W, S as X, C as Y, y as Z, nt as _, ut as a, u as at, Je as b, X as c, Ze as d, ae as et, Ye as f, it as g, $e as h, lt as i, c as it, H as j, Re as k, at as l, rt as m, mt as n, D as nt, Z as o, Y as p, w as q, pt as r, l as rt, Q as s, ht as t, ue as tt, ot as u, Xe as v, Be as w, qe as x, et as y, pe as z };
import { n as e } from "./rolldown-runtime-Bn0tnvxB.js";
var t, n, r, i, a, o = e((() => {
	t = /cubot/i, n = /bot\b|bot[/\-\s]|crawler|crawling|spider|scraper|slurp|archiver|feedfetcher|validator|curl\/|wget\/|python-requests|python-urllib|okhttp|axios\/|node-fetch|got \(|go-http-client|java\/|libwww|httpunit|http_request|apache-httpclient|headless|phantomjs|puppeteer|playwright|selenium|webdriver|cypress|lighthouse|pagespeed|gtmetrix|prerender|pingdom|uptime|statuscake|site24x7|bingpreview|yandex|baiduspider|sogou|exabot|semrush|ahrefs|mj12|dotbot|petalbot|applebot|amazonbot|bytespider|facebookexternalhit|meta-externalagent|embedly|outbrain|quora link preview|skypeuripreview|vkshare|w3c_validator|apis-google|mediapartners|adsbot|storebot-google|google-inspectiontool|google-read-aloud|google-extended|duplexweb-google|gptbot|oai-searchbot|chatgpt-user|perplexity|claudebot|claude-web|anthropic-ai|cohere-ai|ccbot|diffbot|imagesift|omgili|timpi|youbot/i, r = (e) => !e || !t.test(e) && n.test(e), i = [
		"_phantom",
		"__nightmare",
		"callPhantom",
		"__selenium_unwrapped",
		"__webdriver_evaluate",
		"__driver_evaluate",
		"domAutomation",
		"Cypress"
	], a = () => {
		if (typeof navigator > "u") return !1;
		if (navigator.webdriver === !0) return !0;
		let e = globalThis;
		return i.some((t) => t in e) ? !0 : navigator.userAgent ? r(navigator.userAgent) : !1;
	};
}));
export { r as i, o as n, a as r, n as t };
import { n as e } from "./rolldown-runtime-Bn0tnvxB.js";
var t, n, r = e((() => {
	t = /* @__PURE__ */ new Set([
		"true",
		"false",
		"null",
		"undefined",
		"yes",
		"no",
		"on",
		"off",
		"NaN",
		"Infinity",
		"-Infinity"
	]), n = (e) => {
		let n = e.trim();
		if (!n) return null;
		let r = 0, i = () => n[r], a = () => n[r++], o = () => r >= n.length, s = () => {
			for (; !o() && " \n	\r".includes(i());) r++;
		}, c = (e) => {
			a();
			let t = "";
			for (; !o();) {
				let n = a();
				if (n === e) return t;
				n === "\\" && !o() ? t += a() : t += n;
			}
			throw SyntaxError("Unterminated string");
		}, l = (e) => {
			let t = r;
			for (; !o() && !e.includes(i());) r++;
			return n.slice(t, r).trim();
		}, u = (e) => t.has(e) || /^0x[0-9a-fA-F]+$/.test(e) || /^#/.test(e) ? e : /^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?$/i.test(e) ? e === "3.14159265359" ? Math.PI : Number(e) : e, d = (e) => {
			if (s(), o()) throw SyntaxError("Unexpected end of input");
			let t = i();
			if (t === "[") return f();
			if (t === "{") return v();
			if (t === "\"" || t === "'") return c(t);
			let n = l(e);
			if (!n) throw SyntaxError("Empty token");
			return u(n);
		}, f = () => {
			a();
			let e = [];
			if (s(), i() === "]") return a(), e;
			for (;;) {
				s(), e.push(d(",]")), s();
				let t = a();
				if (t === "]") break;
				if (t !== ",") throw SyntaxError("Expected ',' or ']' after array element");
				if (s(), i() === "]") throw SyntaxError("Trailing comma in array");
			}
			return e;
		}, p = () => {
			let e = m();
			a(), s();
			let t = i();
			if (t === "{") return v();
			if (t === "\"" || t === "'") return c(t);
			let o = n.indexOf("\n", r), d = n.slice(r, o === -1 ? n.length : o);
			return /:/.test(d) ? h(e) : u(l("\n"));
		}, m = () => {
			let e = n.lastIndexOf("\n", r - 1) + 1, t = 0;
			for (let i = e; i < r && n[i] === " "; i++) t++;
			return t;
		}, h = (e = m()) => {
			let t = {};
			for (; !o();) {
				let d = r, f = d === 0 || n[d - 1] === "\n";
				s();
				let p = m();
				if (f && p <= e) {
					r = d;
					break;
				}
				if (i() === "-" || o()) {
					r = d;
					break;
				}
				let _ = i(), v = _ === "\"" || _ === "'" ? c(_) : l(":");
				if (o() || a() !== ":") break;
				if (s(), i() === "\n") {
					a();
					let e = r;
					s();
					let o = m();
					if (i() === "-") {
						t[v] = g();
						continue;
					}
					if (o > p) {
						let e = n.indexOf("\n", r), i = n.slice(r, e === -1 ? n.length : e);
						if (/:/.test(i)) {
							t[v] = h(p);
							continue;
						}
					}
					r = e, t[v] = "";
					continue;
				}
				t[v] = u(l("\n")), i() === "\n" && a();
			}
			return t;
		}, g = () => {
			let e = [], t = m();
			for (; !o();) {
				for (; !o() && " \n	\r".includes(i()) && i() !== "-";) a();
				if (o() || m() < t || i() !== "-") break;
				e.push(p());
			}
			return e;
		}, _ = (e) => {
			let t = {};
			for (s(); !o() && !e.includes(i());) {
				let u = i(), f = u === "\"" || u === "'" ? c(u) : l(`:\n${e}`);
				if (!f) return t;
				if (o() || a() !== ":") throw SyntaxError("Expected ':' after key");
				for (i() === " " && a(); !o() && " 	".includes(i());) a();
				if (o()) return t[f] = "", t;
				if (i() === "\n") {
					a();
					let o = r;
					s();
					let c = m();
					if (i() === "-") {
						t[f] = g(), s();
						continue;
					}
					if (e === "" && c > 0) {
						let e = n.indexOf("\n", r), i = n.slice(r, e === -1 ? n.length : e);
						if (/:/.test(i)) {
							t[f] = h(0), s();
							continue;
						}
					}
					r = o, s();
					let l = i();
					if (t[f] = "", l && !e.includes(l) && l !== "-") continue;
					return t;
				}
				if (t[f] = d(e.includes("}") ? `,\n${e}` : `\n${e}`), o()) return t;
				let p = i();
				if (p === "," || p === "\n") {
					a(), s();
					continue;
				}
				if (" 	".includes(p)) {
					for (; !o() && " 	".includes(i());) a();
					if (i() === "\n") {
						a(), s();
						continue;
					}
					if (o() || e.includes(i())) return t;
					continue;
				}
				if (e.includes(p)) return t;
			}
			return t;
		}, v = () => {
			if (a(), s(), i() === "}") return a(), {};
			let e = _("}");
			if (i() !== "}") throw SyntaxError("Expected '}' at end of object");
			return a(), e;
		}, ee = (e) => {
			let t = 0, n = null;
			for (let r = 0; r < e.length; r++) {
				let i = e[r];
				if (n) i === "\\" ? r++ : i === n && (n = null);
				else if (i === "\"" || i === "'") n = i;
				else if (i === "[" || i === "{") t++;
				else if (i === "]" || i === "}") t = Math.max(0, t - 1);
				else if (t === 0 && i === ":") {
					let t = e[r + 1];
					if (!t || " \n".includes(t)) return !0;
				}
			}
			return !1;
		};
		if (n.startsWith("]") || n.startsWith("}")) throw SyntaxError("Unexpected closing bracket");
		let te = n.startsWith("[") ? f() : n.startsWith("{") ? v() : ee(n) ? _("") : d("");
		if (s(), !o()) throw SyntaxError("Unexpected trailing characters");
		return te;
	};
})), i, a = e((() => {
	r(), i = (e) => {
		try {
			let t = e.split(/\r?\n/);
			if (t.find((e) => e.trim() !== "")?.trim() !== "---") return {};
			let r = -1;
			for (let e = 1; e < t.length; e++) if (t[e]?.trim() === "---") {
				r = e;
				break;
			}
			if (r === -1) return {};
			let i = t.slice(1, r).join("\n");
			return n(i) ?? {};
		} catch {
			return {};
		}
	};
})), o, s, c, l, u, d, f, p, m, h, g, _, v, ee, te, ne, re, y, b, x, ie, ae, S, oe, se, ce, le, ue, de, fe, pe, me, he, ge, _e, ve, ye, be, xe, Se, Ce, we, Te, Ee, De, Oe, ke, Ae, je, C, Me, w, T, Ne, Pe, Fe, E, D, Ie, Le, Re, ze, O, k, A, j, Be, Ve, M, He, Ue, We, Ge, Ke, N = e((() => {
	o = {
		blockQuote: "0",
		breakLine: "1",
		breakThematic: "2",
		codeBlock: "3",
		codeFenced: "4",
		codeInline: "5",
		footnote: "6",
		footnoteReference: "7",
		gfmTask: "8",
		heading: "9",
		headingSetext: "10",
		htmlBlock: "11",
		htmlComment: "12",
		htmlSelfClosing: "13",
		customComponent: "34",
		image: "14",
		link: "15",
		linkAngleBraceStyleDetector: "16",
		linkBareUrlDetector: "17",
		newlineCoalescer: "19",
		orderedList: "20",
		paragraph: "21",
		ref: "22",
		refImage: "23",
		refLink: "24",
		table: "25",
		tableSeparator: "26",
		text: "27",
		textBolded: "28",
		textEmphasized: "29",
		textEscaped: "30",
		textMarked: "31",
		textStrikethroughed: "32",
		unorderedList: "33"
	}, s = {
		MAX: 0,
		HIGH: 1,
		MED: 2,
		LOW: 3,
		MIN: 4
	}, c = {
		BLOCK: 1,
		INLINE: 2,
		BOTH: 3
	}, l = c.BLOCK, u = c.INLINE, d = c.BOTH, f = (/* @__PURE__ */ "allowFullScreen.allowTransparency.autoComplete.autoFocus.autoPlay.cellPadding.cellSpacing.charSet.classId.colSpan.contentEditable.contextMenu.crossOrigin.encType.formAction.formEncType.formMethod.formNoValidate.formTarget.frameBorder.hrefLang.inputMode.keyParams.keyType.marginHeight.marginWidth.maxLength.mediaGroup.minLength.noValidate.radioGroup.readOnly.rowSpan.spellCheck.srcDoc.srcLang.srcSet.tabIndex.useMap".split(".")).reduce((e, t) => (e[t.toLowerCase()] = t, e), {
		class: "className",
		for: "htmlFor"
	}), p = {
		amp: "&",
		apos: "'",
		gt: ">",
		lt: "<",
		nbsp: "\xA0",
		quot: "“"
	}, m = [
		"style",
		"script",
		"pre"
	], h = [
		"src",
		"href",
		"data",
		"formAction",
		"srcDoc",
		"action"
	], g = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, _ = /\n{2,}$/, v = /^(\s*>[\s\S]*?)(?=\n\n|$)/, ee = /^ *> ?/gm, te = /^(?:\[!([^\]]*)\]\n)?([\s\S]*)/, ne = /^(?=( {2,}))\1\n/, re = /^(?:([-*_])( *\1){2,}) *(?:\n *)+\n/, y = /^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n((?:[^\n]*(?:\n|$))*?)(?:\1\n?|$)/, b = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, x = /^([ \t]*)(`{3,}|~{3,})/, ie = /^(`+)((?:\\`|(?!\1)`|[^`])+)\1/, ae = /^(?:\n *)*\n/, S = /\r\n?/g, oe = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/, se = /^\[\^([^\]]+)]/, ce = /\f/g, le = /^---[ \t]*\n(.|\n)*?\n---[ \t]*\n/, ue = /^\s*?\[(x|\s)\]/, de = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, fe = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, pe = /^([^\n]+)\n *(=|-)\2{2,} *\n/, me = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, he = /^<!--[\s\S]*?(?:-->)/, ge = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, _e = /^\{.*\}$/, ve = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, ye = /^<([^ >]+[:@/][^ >]+)>/, be = /-([a-z])?/gi, xe = /^(\|[^\n]*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:[^\n]*\|[^\n]*\n)*))?\n?/, Se = /(^ *\||\| *$)/g, Ce = /^ *:-+: *$/, we = /^ *:-+ *$/, Te = /^ *-+: *$/, Ee = /^[^\n]+(?: {2}\n|\n{2,})/, De = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, Oe = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, ke = /^\[([^\]]*)\] ?\[([^\]]*)\]/, Ae = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, je = /\t/g, C = /^\n+/, Me = /^\n*([ \t]*)/, w = "(?:\\d+\\.)", T = "(?:[*+-])", Ne = /^\\([^0-9A-Za-z\s])/, Pe = /\\([^0-9A-Za-z\s])/g, Fe = /^(:[a-zA-Z0-9-_]+:)/, E = (e) => `(?=[\\s\\S]+?\\1${e ? "\\1" : ""})`, D = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|\\\\[^\\s]|[\\s\\S])+?)", Ie = RegExp(`^([*_])\\1${E(1)}${D}\\1\\1(?!\\1)`), Le = RegExp(`^([*_])${E(0)}${D}\\1(?!\\1)`), Re = RegExp(`^(==)${E(0)}${D}\\1`), ze = RegExp(`^(~~)${E(0)}${D}\\1`), O = (e) => "( *)(" + (e === 1 ? w : T) + ") +", k = O(1), A = O(2), j = (e) => RegExp("^" + (e === 1 ? k : A)), Be = j(1), Ve = j(2), M = (e) => RegExp("^" + (e === 1 ? k : A) + "[^\\n]*(?:\\n(?!\\1" + (e === 1 ? w : T) + " )[^\\n]*)*(\\n|$)", "gm"), He = M(1), Ue = M(2), We = (e) => {
		let t = e === 1 ? w : T;
		return RegExp("^( *)(" + t + ") (?=[\\s\\S])(?:[^\\n]*(?:\\n|$))+?(?:\\n+(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*$)");
	}, Ge = We(1), Ke = We(2);
})), P, F, qe, I, Je, L, Ye, Xe, Ze, Qe, $e, et, tt, nt, rt, it, at, ot, st, ct, lt, ut, dt, ft, R, z, B, V, H, U, pt, mt, W, G, K, ht, gt = e((() => {
	N(), P = (e) => {
		let t = e.length;
		for (; t > 0 && e.charCodeAt(t - 1) <= 32;) t--;
		return t === e.length ? e : e.slice(0, t);
	}, F = (e, t) => e.startsWith(t), qe = (e) => {
		let t = e[0];
		return (t === "\"" || t === "'") && e.length >= 2 && e[e.length - 1] === t ? e.slice(1, -1) : e;
	}, I = (e) => e && e.indexOf("\\") !== -1 ? e.replace(Pe, "$1") : e, Je = (...e) => e.filter(Boolean).join(" "), L = (e, t, n) => {
		if (t.indexOf(".") === -1) return e?.[t] ?? n;
		let r = e, i = t.split(".");
		for (; i.length && (r = r[i[0]], r !== void 0);) i.shift();
		return r ?? n;
	}, Ye = [
		[/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a"],
		[/[çÇ]/g, "c"],
		[/[ðÐ]/g, "d"],
		[/[ÈÉÊËéèêë]/g, "e"],
		[/[ÏïÎîÍíÌì]/g, "i"],
		[/[Ññ]/g, "n"],
		[/[øØœŒÕõÔôÓóÒò]/g, "o"],
		[/[ÜüÛûÚúÙù]/g, "u"],
		[/[ŸÿÝý]/g, "y"]
	], Xe = /[\u0080-\uffff]/, Ze = /[^a-z0-9- ]/gi, Qe = / /g, $e = (e) => {
		let t = e;
		if (Xe.test(t)) for (let e = 0; e < Ye.length; e++) {
			let [n, r] = Ye[e];
			t = t.replace(n, r);
		}
		return t = t.replace(Ze, "").replace(Qe, "-"), t.toLowerCase();
	}, et = /(javascript|vbscript|data(?!:image)):/i, tt = /[^A-Za-z0-9/:]/g, nt = (e) => {
		if (e.indexOf(":") === -1 && e.indexOf("%") === -1) return e;
		try {
			let t = decodeURIComponent(e).replace(tt, "");
			if (et.test(t)) return console.warn("Input contains an unsafe JavaScript/VBScript/data expression, it will not be rendered.", t), null;
		} catch {
			return console.warn("Input could not be decoded due to malformed syntax or characters, it will not be rendered.", e), null;
		}
		return e;
	}, rt = (e) => {
		let t = e;
		return t.indexOf("	") !== -1 && (t = t.replace(je, "    ")), t.indexOf("\r") !== -1 && (t = t.replace(S, "\n")), t.indexOf("\f") !== -1 && (t = t.replace(ce, "")), t;
	}, it = (e, t) => {
		if (!t) return e;
		let n = e.split("\n"), r = null, i = (e, t) => t && e.startsWith(t) ? e.slice(t.length) : e;
		return n.map((e) => {
			let n = e.match(x);
			if (!r) return n && (r = {
				indentation: n[1],
				marker: n[2]
			}), i(e, t);
			let a = n?.[2]?.startsWith(r.marker), { indentation: o } = r;
			return a && (r = null), i(e, o);
		}).join("\n");
	}, at = (e) => (e.indexOf("-") !== -1 && e.match(ge) === null && (e = e.replace(be, (e, t) => t.toUpperCase())), e), ot = (e) => {
		let t = [], n = "", r = !1, i = !1, a = "";
		if (!e) return t;
		for (let o = 0; o < e.length; o++) {
			let s = e[o];
			if ((s === "\"" || s === "'") && !r && (i ? s === a && (i = !1, a = "") : (i = !0, a = s)), s === "(" && n.endsWith("url") ? r = !0 : s === ")" && r && (r = !1), s === ";" && !i && !r) {
				let e = n.trim();
				if (e) {
					let n = e.indexOf(":");
					if (n > 0) {
						let r = e.slice(0, n).trim(), i = e.slice(n + 1).trim();
						t.push([r, i]);
					}
				}
				n = "";
			} else n += s;
		}
		let o = n.trim();
		if (o) {
			let e = o.indexOf(":");
			if (e > 0) {
				let n = o.slice(0, e).trim(), r = o.slice(e + 1).trim();
				t.push([n, r]);
			}
		}
		return t;
	}, st = (e, t, n, r) => t === "style" ? ot(n).reduce((t, [n, i]) => {
		let a = n.replace(/(-[a-z])/g, (e) => e[1].toUpperCase());
		return t[a] = r(i, e, n), t;
	}, {}) : h.indexOf(t) === -1 ? (n.match(_e) && (n = I(n.slice(1, n.length - 1))), n === "true" || n !== "false" && n) : r(I(n), e, t), ct = (e) => e.indexOf(":") === -1 ? "left" : Te.test(e) ? "right" : Ce.test(e) ? "center" : (we.test(e), "left"), lt = (e) => e.replace(Se, "").split("|").map(ct), ut = (e, t, n, r) => {
		let i = n.inTable;
		n.inTable = !0;
		let a = 0, o = e.length;
		for (; a < o;) {
			let t = e.charCodeAt(a);
			if (t === 32 || t === 9) a++;
			else break;
		}
		for (; o > a;) {
			let t = e.charCodeAt(o - 1);
			if (t === 32 || t === 9) o--;
			else break;
		}
		if (a < o && e.charCodeAt(a) === 124 && a++, o > a && e.charCodeAt(o - 1) === 124 && (o - 2 < a || e.charCodeAt(o - 2) !== 92) && o--, !r) {
			let r = t(e.slice(a, o), n);
			return n.inTable = i, [r];
		}
		let s = [], c = e.length, l = a, u = a, d = (r, i) => {
			let a = e.slice(r, i).trim();
			return a === "" ? [] : t(a, n);
		}, f = -1, p = -1, m = -1;
		for (; u < o;) {
			if (f < u) {
				let t = e.indexOf("|", u);
				f = t === -1 ? c : t;
			}
			if (p < u) {
				let t = e.indexOf("\\", u);
				p = t === -1 ? c : t;
			}
			if (m < u) {
				let t = e.indexOf("`", u);
				m = t === -1 ? c : t;
			}
			if (u = Math.min(f, p, m), u >= o) break;
			if (u === p) {
				u += u + 1 < o ? 2 : 1;
				continue;
			}
			if (u === m) {
				let t = 0;
				for (; u < o && e.charCodeAt(u) === 96;) t++, u++;
				let n = !1;
				for (; u < o && !n;) {
					let r = 0;
					for (; u < o && e.charCodeAt(u) === 96;) r++, u++;
					r === t ? n = !0 : r === 0 && u++;
				}
				continue;
			}
			s.push(d(l, u)), u++, l = u;
		}
		return s.push(d(l, o)), n.inTable = i, s;
	}, dt = (e, t, n) => {
		if (!e) return [];
		let r = [], i = 0, a = e.length;
		for (; i < a;) {
			let o = e.indexOf("\n", i);
			o === -1 && (o = a);
			let s = e.slice(i, o);
			i = o + 1;
			let c = !1;
			for (let e = 0; e < s.length; e++) {
				let t = s.charCodeAt(e);
				if (t !== 32 && t !== 9 && t !== 13) {
					c = !0;
					break;
				}
			}
			c && r.push(ut(s, t, n, !0));
		}
		return r;
	}, ft = (e, t, n) => {
		if (Array.isArray(n)) {
			for (let t = 0; t < n.length; t++) if (F(e, n[t])) return !0;
			return !1;
		}
		return n(e, t);
	}, R = (e) => (e.inline = 1, e), z = (e) => R((t, n) => n.inline ? e.exec(t) : null), B = (e) => R((t, n) => n.inline || n.simple ? e.exec(t) : null), V = (e) => (t, n) => n.inline || n.simple ? null : e.exec(t), H = (e) => R((t, n) => typeof e == "function" ? e(t, n) : e.exec(t)), U = (e, t, n) => {
		let r = n.inline ?? !1, i = n.simple ?? !1;
		n.inline = !0, n.simple = !0;
		let a = e(t, n);
		return n.inline = r, n.simple = i, a;
	}, pt = (e, t, n) => {
		let r = n.inline ?? !1, i = n.simple ?? !1;
		n.inline = !1, n.simple = !0;
		let a = e(t, n);
		return n.inline = r, n.simple = i, a;
	}, mt = (e, t, n = {}) => {
		let r = n.inline || !1;
		n.inline = !1;
		let i = P(t), a = e(/\n\n$/.test(i) === !1 ? i.endsWith("\n") ? `${i}\n` : `${i}\n\n` : i, n);
		return n.inline = r, a;
	}, W = (e, t, n) => ({ children: U(t, e[2] ?? "", n) }), G = () => ({}), K = () => null, ht = (e, t) => {
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (typeof r == "function" ? r(t) : r.test(t)) return !0;
		}
		return !1;
	};
})), _t, vt, yt = e((() => {
	N(), gt(), _t = (e, t) => {
		let n = t.charCodeAt(t.length - 1);
		if (e.prevCaptureHasBlankLine !== !0 && (e.prevCaptureHasBlankLine = t.indexOf("\n\n") !== -1 || e.prevCaptureHasBlankLine !== void 0 && t.charCodeAt(0) === 10 && e.prevCaptureIndent === ""), n !== 32 && n !== 10) {
			e.prevCaptureIndent = void 0;
			return;
		}
		let r = t.lastIndexOf("\n"), i = r === -1 ? e.prevCaptureIndent === void 0 ? void 0 : e.prevCaptureIndent === "" ? t : e.prevCaptureIndent + t : t.slice(r + 1);
		if (i === void 0 || i === "") {
			e.prevCaptureIndent = i;
			return;
		}
		for (let t = 0; t < i.length; t++) if (i.charCodeAt(t) !== 32) {
			e.prevCaptureIndent = void 0;
			return;
		}
		e.prevCaptureIndent = i;
	}, vt = (e) => {
		let t = Object.keys(e).sort((t, n) => e[t]._order - e[n]._order || +t - n), n = t.length, r = Array(n), i = Array(n), a = Array(n), s = Array(n), c = Array(n), d = Array(n), f = [], p = [];
		for (let o = 0; o < n; o++) {
			let n = e[t[o]], m = n._qualify;
			i[o] = n._match, a[o] = n._parse;
			let h = n._scope, g = h !== u, _ = h !== l;
			c[o] = g, d[o] = _, n._firstChars && n._firstChars.length > 0 ? s[o] = n._firstChars : Array.isArray(m) && m.length > 0 && m.every((e) => e.length > 0) ? (s[o] = m.map((e) => e.charCodeAt(0)), m.every((e) => e.length === 1) && (m = void 0)) : (s[o] = null, g && f.push(o), _ && p.push(o)), r[o] = m;
		}
		let m = Array(128), h = Array(128);
		for (let e = 0; e < 128; e++) {
			let t = [], r = [];
			for (let i = 0; i < n; i++) {
				let n = c[i], a = d[i], o = s[i];
				n && (!o || o.includes(e)) && t.push(i), a && (!o || o.includes(e)) && r.push(i);
			}
			m[e] = t, h[e] = r;
		}
		let g = (e, n = {}) => {
			let s = [], c = !!(n.inline || n.simple);
			n.prevCaptureHasBlankLine === void 0 && (n.prevCaptureIndent = "");
			let l = !1;
			for (let t = 0; t < e.length; t++) {
				let n = e.charCodeAt(t);
				if (n !== 32 && n !== 9 && n !== 10 && n !== 13) {
					l = !0;
					break;
				}
			}
			if (l) {
				let l = c ? h : m, u = c ? p : f;
				for (; e;) {
					let c = e.charCodeAt(0), d = c < 128 ? l[c] : u, f = d.length, p = !1;
					for (let c = 0; c < f; c++) {
						let l = d[c], u = r[l];
						if (u && !ft(e, n, u)) continue;
						let f = i[l](e, n);
						if (f?.[0]) {
							e = e.slice(f[0].length);
							let r = a[l](f, g, n);
							_t(n, f[0]);
							let i = r.type || t[l];
							r.type = i;
							let c = s.length;
							if (i === o.text) {
								if (!r.text) {
									p = !0;
									break;
								}
								if (c > 0 && s[c - 1].type === o.text) {
									s[c - 1].text += r.text, p = !0;
									break;
								}
							}
							s.push(r), p = !0;
							break;
						}
					}
					if (!p) break;
				}
			}
			return s;
		};
		return (e, t) => g(rt(e), t);
	};
})), bt, xt, St = e((() => {
	bt = (e) => {
		let t = (n, r = {}) => {
			if (!Array.isArray(n)) return e(n, t, r);
			let i = r.key, a = [], o = !1, s = 0;
			for (let i = 0; i < n.length; i++) {
				r.key = s;
				let c = n[i], l = Array.isArray(c) ? t(c, r) : e(c, t, r), u = typeof l == "string";
				u && o ? a[a.length - 1] = a[a.length - 1] + l : l !== null && (a.push(l), s++), o = u;
			}
			return r.key = i, a;
		};
		return t;
	}, xt = (e, t) => {
		let n = {};
		for (let t in e) n[t] = e[t]?._render;
		return t ? (e, r, i) => {
			let a = n[e.type];
			return t(() => a?.(e, r, i), e, r, i);
		} : (e, t, r) => {
			let i = n[e.type];
			return i ? i(e, t, r) : void 0;
		};
	};
})), q, Ct, wt, J, Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, It = e((() => {
	q = (e, t) => {
		let n = e.length, r = t;
		for (; r < n;) {
			let t = e.charCodeAt(r);
			if (t === 62) return r;
			if (t === 34 || t === 39) {
				let i = r + 1;
				for (; i < n && e.charCodeAt(i) !== t && e.charCodeAt(i) !== 10;) i++;
				r = e.charCodeAt(i) === t ? i + 1 : r + 1;
				continue;
			}
			r++;
		}
		return -1;
	}, Ct = (e) => e >= 65 && e <= 90 ? e + 32 : e, wt = (e, t, n) => {
		for (let r = 0; r < t.length; r++) if (Ct(e.charCodeAt(n + r)) !== Ct(t.charCodeAt(r))) return !1;
		return !0;
	}, J = (e, t, n, r, i) => {
		if (!r) {
			let r = e.indexOf(t, n);
			return r === -1 || r >= i ? -1 : r;
		}
		let a = Math.min(i, e.length - t.length + 1), o = n;
		for (; o < a;) {
			let n = e.indexOf("<", o);
			if (n === -1 || n >= a) return -1;
			if (wt(e, t, n)) return n;
			o = n + 1;
		}
		return -1;
	}, Tt = (e, t, n, r, i) => {
		let a = [
			e.slice(0, t),
			n,
			r,
			i
		];
		return a.index = 0, a.input = e, a;
	}, Et = (e) => e >= 97 && e <= 122 || e >= 65 && e <= 90 || e >= 48 && e <= 57, Dt = (e) => {
		let t = 0;
		for (; e.charCodeAt(t) === 32;) t++;
		return e.charCodeAt(t) === 60 ? t : -1;
	}, Ot = (e, t) => {
		let n = Dt(e);
		if (n === -1) return null;
		let r = n + 1, i = r, a = e.charCodeAt(r);
		if (t) {
			if (a < 65 || a > 90) return null;
			for (; i < e.length && Et(e.charCodeAt(i));) i++;
		} else {
			if (!(a >= 65 && a <= 90 || a >= 97 && a <= 122)) return null;
			for (; i < e.length;) {
				let t = e.charCodeAt(i);
				if (t === 32 || t === 9 || t === 10 || t === 13 || t === 62 || t === 47) break;
				i++;
			}
		}
		let o = e.slice(r, i), s = q(e, i);
		if (s === -1 || !t && e.charCodeAt(s - 1) === 47) return null;
		let c = s + 1;
		e.charCodeAt(c) === 10 && c++;
		let l = `<${o}`, u = `</${o}`, d = 1, f = c, p = e.length, m = -1, h = -1;
		for (; f < p;) {
			let n = J(e, u, f, !t, p);
			if (n === -1) return null;
			let r = J(e, l, f, !t, n);
			if (r !== -1) {
				let t = e.charCodeAt(r + l.length);
				if (t === 32 || t === 9 || t === 10 || t === 13 || t === 62 || t === 47) {
					let t = q(e, r + l.length);
					if (t === -1) return null;
					d++, f = t + 1;
				} else f = r + 1;
				continue;
			}
			if (e.charCodeAt(n + u.length) !== 62) {
				f = n + 1;
				continue;
			}
			let i = n + u.length + 1;
			if (d--, d > 0) {
				f = i;
				continue;
			}
			if (J(e, u, i, !t, p) === i && e.charCodeAt(i + u.length) === 62) {
				d = 1, f = i;
				continue;
			}
			m = n, h = i;
			break;
		}
		if (h === -1) return null;
		for (; e.charCodeAt(h) === 10;) h++;
		return Tt(e, h, o, e.slice(i, s), e.slice(c, m));
	}, kt = (e) => {
		let t = Dt(e);
		if (t === -1) return null;
		let n = t + 1, r = e.charCodeAt(n);
		if (!(r >= 65 && r <= 90 || r >= 97 && r <= 122)) return null;
		let i = n + 1;
		for (; i < e.length && (Et(e.charCodeAt(i)) || e.charCodeAt(i) === 58);) i++;
		let a = e.charCodeAt(i), o = a === 32 || a === 9 || a === 10 || a === 13, s;
		if (o) {
			if (s = q(e, i), s === -1) return null;
		} else if (s = e.charCodeAt(i) === 47 ? i + 1 : i, e.charCodeAt(s) !== 62) return null;
		let c = e.slice(n, i), l = s + 1;
		if (e.charCodeAt(l) === 60 && e.charCodeAt(l + 1) === 47 && wt(e, c, l + 2) && e.charCodeAt(l + 2 + c.length) === 62) return null;
		let u = l, d = l;
		for (; d < e.length;) {
			let t = e.charCodeAt(d);
			if (t !== 32 && t !== 9 && t !== 10 && t !== 13) break;
			d++, e.charCodeAt(d - 1) === 10 && (u = d);
		}
		return Tt(e, u, c, o ? e.slice(i + 1, s) : void 0, u > l ? e.slice(l, u) : void 0);
	}, At = (e) => Ot(e, !1), jt = (e) => Ot(e, !0), Mt = (e) => At(e) !== null, Nt = (e) => kt(e) !== null, Pt = (e) => jt(e) !== null, Ft = (e) => Mt(e) || Nt(e);
})), Lt, Rt, zt, Bt, Vt, Y, Ht, X, Ut, Z, Q, Wt, Gt, Kt, $, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn = e((() => {
	N(), It(), gt(), yt(), St(), Lt = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, Rt = /* @__PURE__ */ RegExp("^\\[((?:\\[[^\\[\\]]*(?:\\[[^\\[\\]]*\\][^\\[\\]]*)*\\]|[^\\[\\]])*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"), zt = (e) => {
		let t = null;
		if (Object.keys(e).length === 0) return (e) => e;
		let n = /* @__PURE__ */ new Map();
		return (r) => {
			if (typeof r != "string") return r;
			let i = n.get(r);
			if (i !== void 0) return i;
			let a = L(e, r);
			if (a) return n.set(r, a), a;
			if (!t) {
				t = /* @__PURE__ */ new Map();
				for (let n of Object.keys(e)) {
					let e = n.toLowerCase();
					t.has(e) || t.set(e, n);
				}
			}
			let o = t.get(r.toLowerCase()), s = (o ? L(e, o) : void 0) || r;
			return n.set(r, s), s;
		};
	}, Bt = (e) => (t) => e.slugify ? e.slugify(t, $e) : $e(t), Vt = (e, t) => {
		let { runtime: n, components: r = {} } = e, i = zt(r), a = t.tagfilter ? /* @__PURE__ */ new Set([
			"title",
			"textarea",
			"style",
			"xmp",
			"iframe",
			"noembed",
			"noframes",
			"script",
			"plaintext"
		]) : null, o = (e) => {
			if ("class" in e) return !0;
			for (let t in e) if (e[t] == null) return !0;
			return !1;
		};
		return (e, t, ...r) => {
			let s = typeof e == "string";
			if (a && s && (a.has(e) || a.has(e.toLowerCase()))) return null;
			let c;
			if (!t) c = {};
			else if (!o(t)) c = t;
			else {
				let e = Je(t.className, t.class), n = {}, r = !1;
				for (let i in t) {
					let a = t[i];
					a != null && (i === "className" || i === "class" ? r ||= (e && (n.className = e), !0) : n[i] = a);
				}
				!r && e && (n.className = e), c = n;
			}
			n.normalizeProps && s && (c = n.normalizeProps(e, c));
			let l = i(e);
			return n.createElement(l, c, ...r);
		};
	}, Y = () => ({
		footnotes: [],
		references: {}
	}), Ht = 8, X = [], Ut = (e, t, n, r) => e.parseOnly === r && e.ctx.runtime === t.runtime && e.ctx.components === t.components && e.ctx.namedCodesToUnicode === t.namedCodesToUnicode && e.ctx.sanitizer === t.sanitizer && e.ctx.slugify === t.slugify && e.options.disableAutoLink === n.disableAutoLink && e.options.disableParsingRawHTML === n.disableParsingRawHTML && e.options.enforceAtxHeadings === n.enforceAtxHeadings && e.options.tagfilter === n.tagfilter && e.options.renderRule === n.renderRule, Z = (e, t, n) => {
		for (let r = 0; r < X.length; r++) {
			let i = X[r];
			if (Ut(i, e, t, n)) return r > 0 && (X.splice(r, 1), X.unshift(i)), i;
		}
		let r = { current: Y() }, i = n ? Jt : Vt(e, t), a = Yt(i, e, t, r), o = {
			ctx: e,
			options: t,
			parseOnly: n,
			createElement: i,
			scope: r,
			parse: vt(a),
			emit: bt(xt(a, t.renderRule))
		};
		return X.unshift(o), X.length > Ht && X.pop(), o;
	}, Q = (e, t, n) => {
		let r = e.current;
		e.current = t;
		try {
			return n();
		} finally {
			e.current = r;
		}
	}, Wt = (e, t, n, r, i, a, c) => {
		let f = Bt(t), h = t.sanitizer ?? nt, g = t.namedCodesToUnicode ? {
			...p,
			...t.namedCodesToUnicode
		} : p, x = (t, n, r, o = d) => ({
			_scope: o,
			_qualify: ["<"],
			_match: H(t),
			_order: n,
			_parse(e, t, n) {
				let o = e[3] ?? "", s = o.match(Me)?.[1] ?? "", c = it(o, s), l = a(c) ? mt : U, u = (e[1] ?? "").trim(), d = u.toLowerCase(), f = r && m.indexOf(d) !== -1, p = f ? d : u, h = {
					attrs: i(p, e[2] ?? ""),
					noInnerParse: f,
					tag: p
				};
				if (r && (n.inAnchor = n.inAnchor || d === "a"), f) h.text = o;
				else {
					let e = n.inHTML;
					n.inHTML = !0, h.children = l(t, c, n), n.inHTML = e;
				}
				return r && (n.inAnchor = !1), h;
			},
			_render(t, n, r = {}) {
				return e(t.tag, {
					key: r.key,
					...t.attrs ?? {}
				}, t.text ?? (t.children ? n(t.children, r) : ""));
			}
		}), S = (t) => {
			let n = t === 1, r = n ? Ge : Ke, i = n ? He : Ue, a = n ? Be : Ve;
			return {
				_scope: d,
				_firstChars: n ? [
					32,
					9,
					48,
					49,
					50,
					51,
					52,
					53,
					54,
					55,
					56,
					57
				] : [
					32,
					9,
					42,
					43,
					45
				],
				_qualify: (e, t) => t.prevCaptureIndent !== void 0 && !!(t.list ?? (!t.inline && !t.simple)) && a.test(e),
				_match: R((e, t) => {
					let n = t.prevCaptureIndent, i = n !== void 0, a = t.list ?? (!t.inline && !t.simple);
					if (i && a) {
						let t = n ? n + e : e, i = r.exec(t);
						if (!i) return null;
						if (n && i[0].startsWith(n)) {
							let e = [...i];
							return e[0] = i[0].slice(n.length), e.fullMatch = i[0], e;
						}
						return i;
					}
					return null;
				}),
				_order: s.HIGH,
				_parse(e, t, r) {
					let o = e[2] ?? "", s = n ? +o.slice(0, -1) : void 0, c = (e.fullMatch ?? e[0] ?? "").replace(_, "\n").match(i);
					if (!c) return {
						items: [],
						ordered: n,
						start: s
					};
					let l = !1;
					return {
						items: c.map((e, n) => {
							let i = a.exec(e), o = i ? i[0].length : 0, s = o <= 8 ? Gt[o] : RegExp(`^ {1,${o}}`, "gm"), u = e.slice(o).replace(s, ""), d = n === c.length - 1, f = u.indexOf("\n\n") !== -1 || d && l;
							l = f;
							let p = r.inline, m = r.list;
							r.list = !0;
							let h;
							f ? (r.inline = !1, h = `${P(u)}\n\n`) : (r.inline = !0, h = P(u));
							let g = t(h, r);
							return r.inline = p, r.list = m, g;
						}),
						ordered: n,
						start: s
					};
				},
				_render(t, r, i = {}) {
					return e(n ? "ol" : "ul", {
						key: i.key,
						start: t.start
					}, ...t.items.map((t, n) => e("li", { key: n }, r(t, i))));
				}
			};
		}, ce = (e, t) => {
			if (t.inline || t.simple || t.inHTML && e.indexOf("\n\n") === -1 && !t.prevCaptureHasBlankLine) return null;
			let n = 0, r = e.length;
			for (; n < r;) {
				let t = e.indexOf("\n", n), i = t === -1 ? r : t, a = n;
				for (; a < i && (e.charCodeAt(a) === 32 || e.charCodeAt(a) === 9);) a++;
				if (a >= i || a - n >= 4 || e.charCodeAt(n) === 9) break;
				let o = e.charCodeAt(a);
				if (o === 62 || o === 96 || o === 126 || o === 35 || o === 124 || o === 42 || o === 43 || o === 45 || o === 61 || o === 60 || o >= 48 && o <= 57) {
					let r = e.slice(n, t === -1 ? void 0 : t + 1);
					if (ht(c, r)) break;
				}
				if (t === -1) {
					n = r;
					break;
				}
				n = t + 1;
			}
			let i = e.slice(0, n);
			if (i === "") return null;
			let a = P(i);
			return a === "" ? null : [
				i,
				void 0,
				a
			];
		};
		return {
			[o.blockQuote]: {
				_scope: l,
				_qualify: [">"],
				_match: V(v),
				_order: s.HIGH,
				_parse(e, t, n) {
					let r = (e[0] ?? "").replace(ee, "").match(te), i = r?.[1], a = r?.[2] ?? "";
					return {
						alert: i,
						children: a.indexOf("\n") === -1 ? U(t, a, n) : mt(t, a, n)
					};
				},
				_render(t, n, r = {}) {
					let i = { key: r.key };
					return t.alert && (i.className = `markdown-alert-${f(t.alert.toLowerCase())}`, t.children.unshift({
						attrs: {},
						children: [{
							type: o.text,
							text: t.alert
						}],
						noInnerParse: !0,
						type: o.htmlBlock,
						tag: "header"
					})), e("blockquote", i, n(t.children, r));
				}
			},
			[o.breakLine]: {
				_scope: d,
				_qualify: ["  "],
				_match: H(ne),
				_order: s.HIGH,
				_parse: G,
				_render(t, n, r = {}) {
					return e("br", { key: r.key });
				}
			},
			[o.breakThematic]: {
				_scope: l,
				_qualify: [
					"--",
					"__",
					"**",
					"- ",
					"* ",
					"_ "
				],
				_match: V(re),
				_order: s.HIGH,
				_parse: G,
				_render(t, n, r = {}) {
					return e("hr", { key: r.key });
				}
			},
			[o.codeBlock]: {
				_scope: l,
				_qualify: ["    "],
				_match: V(b),
				_order: s.MAX,
				_parse(e) {
					return {
						type: o.codeBlock,
						lang: void 0,
						text: I(P((e[0] ?? "").replace(/^ {4}/gm, "")))
					};
				},
				_render(t, n, r = {}) {
					let i = { ...t.attrs ?? {} }, a = t.lang ? `lang-${t.lang}` : "lang-plaintext";
					return i.className = i.className ? `${i.className} ${a}` : a, e("pre", { key: r.key }, e("code", i, t.text));
				}
			},
			[o.codeFenced]: {
				_scope: l,
				_qualify: ["```", "~~~"],
				_match: V(y),
				_order: s.MAX,
				_parse(e) {
					return {
						attrs: i("code", e[3] ?? ""),
						lang: e[2] || void 0,
						text: e[4] ?? "",
						type: o.codeBlock
					};
				}
			},
			[o.codeInline]: {
				_scope: u,
				_firstChars: [96],
				_qualify: (e) => e.charCodeAt(0) === 96 && e.indexOf("`", 1) !== -1,
				_match: B(ie),
				_order: s.LOW,
				_parse(e) {
					return { text: I(e[2] ?? "") };
				},
				_render(t, n, r = {}) {
					return e("code", { key: r.key }, t.text);
				}
			},
			[o.footnote]: {
				_scope: u,
				_qualify: ["[^"],
				_match: V(oe),
				_order: s.MAX,
				_parse(e) {
					return r.current.footnotes.push({
						footnote: e[2] ?? "",
						identifier: e[1] ?? ""
					}), {};
				},
				_render: K
			},
			[o.footnoteReference]: {
				_scope: u,
				_qualify: ["[^"],
				_match: z(se),
				_order: s.HIGH,
				_parse(e) {
					let t = e[1] ?? "";
					return {
						target: `#${f(t)}`,
						text: t
					};
				},
				_render(t, n, r = {}) {
					return e("a", {
						key: r.key,
						href: h(t.target, "a", "href") ?? void 0
					}, e("sup", { key: r.key }, t.text));
				}
			},
			[o.gfmTask]: {
				_scope: u,
				_qualify: ["[ ]", "[x]"],
				_match: z(ue),
				_order: s.HIGH,
				_parse(e) {
					return { completed: (e[1] ?? "").toLowerCase() === "x" };
				},
				_render(t, n, r = {}) {
					return e("input", {
						checked: t.completed,
						key: r.key,
						readOnly: !0,
						type: "checkbox"
					});
				}
			},
			[o.heading]: {
				_scope: l,
				_qualify: ["#"],
				_match: V(n.enforceAtxHeadings ? fe : de),
				_order: s.HIGH,
				_parse(e, t, n) {
					let r = e[2] ?? "";
					return {
						children: U(t, r, n),
						id: f(r),
						level: e[1]?.length ?? 1
					};
				},
				_render(t, n, r = {}) {
					return e(`h${t.level}`, {
						id: t.id,
						key: r.key
					}, n(t.children, r));
				}
			},
			[o.headingSetext]: {
				_scope: l,
				_qualify: (e, t) => {
					if (t.prevCaptureIndent === void 0 || t.inline || t.simple) return !1;
					let n = e.indexOf("\n");
					return n > 0 && n < e.length - 1 && (e[n + 1] === "=" || e[n + 1] === "-");
				},
				_match: V(pe),
				_order: s.MAX,
				_parse(e, t, n) {
					return {
						children: U(t, e[1] ?? "", n),
						level: e[2] === "=" ? 1 : 2,
						type: o.heading
					};
				}
			},
			[o.htmlBlock]: x(At, s.HIGH, !0, d),
			[o.htmlComment]: {
				_scope: d,
				_qualify: ["<!"],
				_match: H(he),
				_order: s.HIGH,
				_parse: G,
				_render: K
			},
			[o.htmlSelfClosing]: {
				_scope: d,
				_qualify: ["<"],
				_match: H(kt),
				_order: s.HIGH,
				_parse(e) {
					let t = (e[1] ?? "").trim();
					return {
						attrs: i(t, e[2] || ""),
						tag: t
					};
				},
				_render(t, n, r = {}) {
					return e(t.tag, {
						key: r.key,
						...t.attrs ?? {}
					});
				}
			},
			[o.customComponent]: x(jt, s.MAX, !1, d),
			[o.paragraph]: {
				_scope: l,
				_qualify: (e, t) => !t.inline && !t.simple,
				_match: ce,
				_order: s.LOW,
				_parse: W,
				_render(t, n, r = {}) {
					return e("p", { key: r.key }, n(t.children, r));
				}
			},
			[o.image]: {
				_scope: u,
				_firstChars: [33],
				_qualify: (e) => e.startsWith("![") && e.indexOf("](") !== -1,
				_match: B(Lt),
				_order: s.HIGH,
				_parse(e) {
					return {
						alt: I(e[1] ?? ""),
						target: I(e[2] ?? ""),
						title: e[3] ? I(e[3]) : void 0
					};
				},
				_render(t, n, r = {}) {
					return e("img", {
						key: r.key,
						alt: t.alt ?? void 0,
						title: t.title ?? void 0,
						src: h(t.target, "img", "src") ?? void 0
					});
				}
			},
			[o.link]: {
				_scope: u,
				_firstChars: [91],
				_qualify: (e) => e.charCodeAt(0) === 91 && e.indexOf("](") !== -1,
				_match: z(Rt),
				_order: s.LOW,
				_parse(e, t, n) {
					return {
						children: pt(t, e[1] ?? "", n),
						target: I(e[2] ?? ""),
						title: e[3] ? I(e[3]) : void 0
					};
				},
				_render(t, n, r = {}) {
					let i = h(t.target, "a", "href");
					return e("a", {
						key: r.key,
						href: i ?? void 0,
						title: t.title ?? void 0
					}, n(t.children, r));
				}
			},
			[o.linkAngleBraceStyleDetector]: {
				_scope: u,
				_qualify: ["<"],
				_match: z(ye),
				_order: s.MAX,
				_parse(e) {
					let t = e[1] ?? "", n = !1;
					return t.indexOf("@") !== -1 && t.indexOf("//") === -1 && (n = !0, t = t.replace("mailto:", "")), {
						children: [{
							text: t,
							type: o.text
						}],
						target: n ? `mailto:${t}` : t,
						type: o.link
					};
				}
			},
			[o.linkBareUrlDetector]: {
				_scope: u,
				_firstChars: [104],
				_qualify: (e, t) => !(!t.inline || t.inAnchor || n.disableAutoLink || !F(e, "http://") && !F(e, "https://")),
				_match: z(ve),
				_order: s.MAX,
				_parse(e) {
					let t = e[1] ?? "";
					return {
						children: [{
							text: t,
							type: o.text
						}],
						target: t,
						type: o.link
					};
				}
			},
			[o.newlineCoalescer]: {
				_scope: d,
				_qualify: ["\n"],
				_match: V(ae),
				_order: s.LOW,
				_parse: G,
				_render() {
					return "\n";
				}
			},
			[o.orderedList]: S(1),
			[o.unorderedList]: S(2),
			[o.ref]: {
				_scope: d,
				_qualify: ["["],
				_match: H(De),
				_order: s.MAX,
				_parse(e) {
					let t = e[1];
					return t !== void 0 && (r.current.references[t] = {
						target: e[2] ?? "",
						title: e[4]
					}), {};
				},
				_render: K
			},
			[o.refImage]: {
				_scope: u,
				_firstChars: [33],
				_qualify: (e) => e.startsWith("![") && e.indexOf("](") === -1,
				_match: B(Oe),
				_order: s.MAX,
				_parse(e) {
					return {
						alt: e[1] ? I(e[1]) : void 0,
						ref: e[2] ?? ""
					};
				},
				_render(t, n, i = {}) {
					let a = r.current.references[t.ref];
					return a ? e("img", {
						key: i.key,
						alt: t.alt,
						src: h(a.target, "img", "src") ?? void 0,
						title: a.title
					}) : null;
				}
			},
			[o.refLink]: {
				_scope: u,
				_firstChars: [91],
				_qualify: (e) => e.indexOf("](") === -1,
				_match: z(ke),
				_order: s.MAX,
				_parse(e, t, n) {
					return {
						children: pt(t, e[1] ?? "", n),
						fallbackChildren: e[0] ?? "",
						ref: e[2] ?? ""
					};
				},
				_render(t, n, i = {}) {
					let a = r.current.references[t.ref];
					return a ? e("a", {
						key: i.key,
						href: h(a.target, "a", "href") ?? void 0,
						title: a.title
					}, n(t.children, i)) : e("span", { key: i.key }, t.fallbackChildren);
				}
			},
			[o.table]: {
				_scope: l,
				_qualify: ["|"],
				_match: V(xe),
				_order: s.HIGH,
				_parse(e, t, n) {
					n.inline = !0;
					let r = e[2] ? lt(e[2]) : [], i = e[3] ? dt(e[3], t, n) : [], a = ut(e[1] ?? "", t, n, !!i.length);
					return n.inline = !1, i.length ? {
						align: r,
						cells: i,
						header: a,
						type: o.table
					} : {
						children: a.flat(),
						type: o.paragraph
					};
				},
				_render(t, n, r = {}) {
					let i = t, a = (e) => i.align[e] && i.align[e] !== "left" ? { textAlign: i.align[e] } : {};
					return e("table", { key: r.key }, e("thead", { key: "thead" }, e("tr", null, ...i.header.map((t, i) => e("th", {
						key: i,
						style: a(i)
					}, n(t, r))))), e("tbody", { key: "tbody" }, ...i.cells.map((t, i) => e("tr", { key: i }, ...t.map((t, i) => e("td", {
						key: i,
						style: a(i)
					}, n(t, r)))))));
				}
			},
			[o.tableSeparator]: {
				_scope: u,
				_qualify: ["|"],
				_match: (e, t) => t.inTable ? /^\|/.exec(e) : null,
				_order: s.HIGH,
				_parse() {
					return { type: o.tableSeparator };
				},
				_render() {
					return " | ";
				}
			},
			[o.text]: {
				_scope: u,
				_match: R((e, t) => {
					let n = e.length;
					if (e.charCodeAt(0) === 10) {
						let t = 1;
						for (; t < n && e.charCodeAt(t) === 32;) t++;
						return t < n && (e.charCodeAt(t) === 42 || e.charCodeAt(t) === 43 || e.charCodeAt(t) === 45 || e.charCodeAt(t) >= 48 && e.charCodeAt(t) <= 57) ? [e.slice(0, t)] : ["\n"];
					}
					if (e.charCodeAt(0) === 58) {
						let t = Fe.exec(e);
						if (t) return t;
					}
					return $.lastIndex = 1, $.test(e), Kt[0] = e.slice(0, qt(e, $.lastIndex)), Kt;
				}),
				_order: s.MIN,
				_parse(e) {
					let t = e[0] ?? "";
					return {
						type: o.text,
						text: t.charCodeAt(0) === 38 ? t.replace(me, (e, t) => t.startsWith("#x") ? String.fromCharCode(parseInt(t.slice(2), 16)) : t.startsWith("#") ? String.fromCharCode(parseInt(t.slice(1), 10)) : g[t] || e) : t
					};
				},
				_render(e) {
					return e.text;
				}
			},
			[o.textBolded]: {
				_scope: u,
				_firstChars: [42, 95],
				_qualify: (e) => {
					let t = e.charCodeAt(0);
					if (t === 42) {
						let t = e.charCodeAt(2);
						return t === 32 || t === 10 || t === 9 ? !1 : e.charCodeAt(1) === 42 && e.indexOf("**", 2) !== -1;
					}
					if (t === 95) {
						let t = e.charCodeAt(2);
						return t === 32 || t === 10 || t === 9 ? !1 : e.charCodeAt(1) === 95 && e.indexOf("__", 2) !== -1;
					}
					return !1;
				},
				_match: B(Ie),
				_order: s.MED,
				_parse(e, t, n) {
					return { children: t(e[2] ?? "", n) };
				},
				_render(t, n, r = {}) {
					return e("strong", { key: r.key }, n(t.children, r));
				}
			},
			[o.textEmphasized]: {
				_scope: u,
				_firstChars: [42, 95],
				_qualify: (e) => {
					let t = e.charCodeAt(0), n = e.charCodeAt(1);
					return n === 32 || n === 10 || n === 9 ? !1 : t === 42 && e.indexOf("*", 1) !== -1 || t === 95 && e.indexOf("_", 1) !== -1;
				},
				_match: B(Le),
				_order: s.LOW,
				_parse(e, t, n) {
					return { children: t(e[2] ?? "", n) };
				},
				_render(t, n, r = {}) {
					return e("em", { key: r.key }, n(t.children, r));
				}
			},
			[o.textEscaped]: {
				_scope: u,
				_qualify: ["\\"],
				_match: B(Ne),
				_order: s.HIGH,
				_parse(e) {
					return {
						text: e[1] ?? "",
						type: o.text
					};
				}
			},
			[o.textMarked]: {
				_scope: u,
				_firstChars: [61],
				_qualify: (e) => {
					let t = e.charCodeAt(2);
					return t === 32 || t === 10 || t === 9 ? !1 : e.charCodeAt(1) === 61 && e.indexOf("==", 2) !== -1;
				},
				_match: B(Re),
				_order: s.LOW,
				_parse(e, t, n) {
					return { children: W(e, t, n).children };
				},
				_render(t, n, r = {}) {
					return e("mark", { key: r.key }, n(t.children, r));
				}
			},
			[o.textStrikethroughed]: {
				_scope: u,
				_firstChars: [126],
				_qualify: (e) => {
					let t = e.charCodeAt(2);
					return t === 32 || t === 10 || t === 9 ? !1 : e.charCodeAt(1) === 126 && e.indexOf("~~", 2) !== -1;
				},
				_match: B(ze),
				_order: s.LOW,
				_parse(e, t, n) {
					return { children: W(e, t, n).children };
				},
				_render(t, n, r = {}) {
					return e("del", { key: r.key }, n(t.children, r));
				}
			}
		};
	}, Gt = [
		null,
		/^ {1,1}/gm,
		/^ {1,2}/gm,
		/^ {1,3}/gm,
		/^ {1,4}/gm,
		/^ {1,5}/gm,
		/^ {1,6}/gm,
		/^ {1,7}/gm,
		/^ {1,8}/gm
	], Kt = [""], $ = /(?:[^\n&h!*:<=[\\_`~]+|h(?!ttp))*/y, qt = (e, t) => t >= 3 && e.charCodeAt(t) === 10 && e.charCodeAt(t - 1) === 32 && e.charCodeAt(t - 2) === 32 ? t - 2 : t, Jt = (e, t, ...n) => ({
		children: n,
		props: t,
		type: e
	}), Yt = (e, t, n, r) => {
		let i = (e, r) => {
			if (!r?.trim()) return null;
			let i = r.match(g);
			return i ? i.reduce((r, i) => {
				let a = i.indexOf("=");
				if (a !== -1) {
					let o = at(i.slice(0, a)).trim(), s = qe(i.slice(a + 1).trim()), c = f[o] ?? o;
					if (c === "ref") return r;
					r[c] = st(e, o, s, t.sanitizer ?? nt), typeof r[c] == "string" && Ft(r[c]) && (r[c] = Qt(r[c].trim(), t, n).ast);
				} else i !== "style" && (r[f[i] ?? i] = !0);
				return r;
			}, {}) : null;
		}, a = [
			v,
			y,
			b,
			n.enforceAtxHeadings ? fe : de,
			xe,
			Ge,
			Ke,
			Pt
		], s = n.disableParsingRawHTML ? a : [
			...a,
			Ee,
			Mt,
			he,
			Nt,
			Pt
		], c = Wt(e, t, n, r, i, (e) => {
			let t = e.replace(C, ""), n = t.length > 2048 ? t.slice(0, 2048) : t;
			return n.indexOf("\n\n") !== -1 || ht(s, n);
		}, a);
		return n.disableParsingRawHTML ? Object.keys(c).reduce((e, t) => (t !== o.htmlBlock && t !== o.htmlSelfClosing && (e[t] = c[t]), e), {}) : c;
	}, Xt = (e, t, n, r, i) => {
		let a = !t.preserveFrontmatter && e.charCodeAt(0) === 45 ? e.replace(le, "") : e, o = a.charCodeAt(0) === 10 ? a.replace(C, "") : a, s = t.forceInline || !t.forceBlock && Ae.test(o) === !1, c = n(s ? a : `${P(o)}\n\n`, { inline: s });
		if (r.length > 0) for (let e of r) e.parsedAst = n(e.footnote, { inline: !0 });
		return {
			ast: c,
			footnotes: r,
			references: i,
			inline: s
		};
	}, Zt = (e, t, n, r, i) => {
		let a = t.components ?? {}, o = Bt(t), s = e.footnotes || [], c = e.inline, l = r(e.ast, { inline: c });
		for (; typeof l[l.length - 1] == "string" && !l[l.length - 1].trim();) l.pop();
		let u = (() => {
			if (n.wrapper === null) return l;
			let e = n.wrapper ?? (c ? "span" : "div");
			if (l.length > 1 || n.forceWrapper) return i(e, { key: "outer" }, l);
			if (l.length === 1) {
				let t = l[0];
				if (Array.isArray(t)) return i(e, { key: "outer" }, t);
				if (typeof t == "string") {
					let e = { key: "outer" };
					if (!c && a) {
						let n = L(a, "p.props", {}) ?? {}, r = Je(e.className, n.className), o = {
							...e,
							...n
						};
						return r && (o.className = r), i("span", o, t);
					}
					return i("span", e, t);
				}
				return t;
			}
			return i(e, { key: "outer" }, null);
		})();
		return s.length ? i("div", null, u, i("footer", { key: "footer" }, ...s.map((e) => i("div", {
			id: o(e.identifier),
			key: e.identifier
		}, e.identifier, r(e.parsedAst || e.footnote, { inline: !0 }))))) : u;
	}, Qt = (e = "", t, n = {}) => {
		let { parse: r, scope: i } = Z(t, n, !0), a = Y();
		return Q(i, a, () => Xt(e, n, r, a.footnotes, a.references));
	}, $t = (e, t, n = {}) => {
		let { emit: r, createElement: i, scope: a } = Z(t, n, !1), o = {
			footnotes: e.footnotes ?? [],
			references: e.references ?? {}
		};
		return Q(a, o, () => Zt(e, t, n, r, i));
	}, en = (e = "", t, n = {}) => {
		if (typeof e != "string") throw console.error("intlayer: the first argument must be a string. Received", typeof e), Error("intlayer: the first argument must be a string");
		let { parse: r, emit: i, createElement: a, scope: o } = Z(t, n, !1), s = Y();
		return Q(o, s, () => {
			let o = Xt(e, n, r, s.footnotes, s.references);
			return Zt(o, t, n, i, a);
		});
	};
})), nn = e((() => {
	a(), tn();
}));
export { i as a, $t as i, en as n, a as o, tn as r, nn as t };
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, s = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), c = (e, n) => {
	let r = {};
	for (var i in e) t(r, i, {
		get: e[i],
		enumerable: !0
	});
	return n || t(r, Symbol.toStringTag, { value: "Module" }), r;
}, l = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, u = (n, r, o) => (o = n == null ? {} : e(i(n)), l(r || !n || !n.__esModule || !a.call(n, "default") ? t(o, "default", {
	value: n,
	enumerable: !0
}) : o, n)), d = (e) => a.call(e, "module.exports") ? e["module.exports"] : l(t({}, "__esModule", { value: !0 }), e), f = ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
});
export { d as a, f as i, o as n, u as o, c as r, s as t };
import { n as e } from "./rolldown-runtime-Bn0tnvxB.js";
var t, n, r, i = e((() => {
	t = /* @__PURE__ */ new Set([
		"area",
		"base",
		"br",
		"col",
		"embed",
		"hr",
		"img",
		"input",
		"link",
		"meta",
		"source",
		"track",
		"wbr"
	]), n = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, r = (e) => {
		let r = [], i = [];
		for (let a of e.matchAll(n)) {
			let e = !!a[1], n = a[2], o = a[3], s = !!a[4];
			if (!(o.trimStart().startsWith("://") || o.trimStart().startsWith(":"))) {
				if (e) {
					if (i.length === 0) r.push({
						type: "error",
						message: `Closing tag </${n}> has no matching opening tag`
					});
					else {
						let e = i[i.length - 1];
						e.tag.toLowerCase() !== n.toLowerCase() && r.push({
							type: "error",
							message: `Mismatched closing tag: expected </${e.tag}> but found </${n}>`
						}), i.pop();
					}
				} else {
					let e = t.has(n.toLowerCase());
					!s && !e && i.push({ tag: n });
				}
			}
		}
		for (let e of i) r.push({
			type: "error",
			message: `Unclosed HTML tag: <${e.tag}>`
		});
		return {
			valid: r.filter((e) => e.type === "error").length === 0,
			issues: r
		};
	};
}));
export { i as n, r, t };
