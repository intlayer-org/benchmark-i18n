import { n as e } from "./markdown-CqmJh0aV.js";
import { a as t, c as n, f as r, h as i, i as a, l as o, n as s, o as c, p as l, r as u, s as d, t as ee } from "./getContent-BYwbnwE9.js";
import { a as f, o as p, s as m } from "./nodeType-JEOtEAxc.js";
import h from "../.intlayer/dictionary/header.json";
import { Dynamic as te, createComponent as g, memo as _, mergeProps as v } from "solid-js/web";
import { Suspense as y, createContext as b, createEffect as x, createMemo as S, createSignal as C, lazy as w, on as ne, onMount as re, untrack as ie, useContext as ae } from "solid-js";
var T = "\x1B[0m", oe = "\x1B[34m", se = "\x1B[31m", ce = "\x1B[32m", E = (e, t, n) => t ? `${t}${e}${n ? typeof n == "boolean" ? T : n : T}` : e;
E("✗", se), E("✓", ce), E("⏲", oe);
var D = (e = "") => new Proxy(() => e, {
	get: (t, n) => {
		if (n === "toJSON" || n === Symbol.toPrimitive || n === "toString") return () => e;
		if (n !== "then") return n === Symbol.iterator ? function* () {
			yield e;
		} : D(e ? `${e}.${String(n)}` : String(n));
	},
	apply: () => e
}), O = (e, t, n = ee(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return s(e.content, r, n);
}, k = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", A = /\{\{\s*(.*?)\s*\}\}/g, j = (e, t = {}) => {
	if (!Object.values(t).some(k)) return {
		isSimple: !0,
		parts: e.replace(A, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(A), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, M = (e, t = l?.locales, n = l?.defaultLocale) => {
	let r = [e].flat(), i = (e) => e.trim().toLowerCase();
	try {
		for (let e of r) {
			let n = i(e), r = t.find((e) => i(e) === n);
			if (r) return r;
			let [a] = n.split("-"), o = t.find((e) => i(e).split("-")[0] === a);
			if (o) return o;
		}
	} catch {}
	return n;
}, N = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var P = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	return n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`), n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, F = (e = L) => {
	let { locales: t } = l;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!N) for (let t = 0; t < (i.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(i.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, I = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !N && i.storage.cookies) for (let n = 0; n < i.storage.cookies.length; n++) {
		let { name: r, attributes: a } = i.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...a,
				expires: a.expires instanceof Date ? a.expires.getTime() : a.expires
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, P(r, e, a));
			} catch {}
		}
	}
}, L = {
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
}, R = (e) => e.children, z = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		return n === "value" ? t : n === "toString" ? () => String(t) : n === Symbol.toPrimitive ? (e) => e === "string" ? String(t) : e === "number" ? Number(t) : t : Reflect.get(e, n, r);
	} });
}, B = (e) => {
	if (typeof e == "string") return e;
	let { type: t, props: n } = ((e) => {
		if (e?.props && typeof e.props.children == "object") {
			let t = [], { children: n } = e.props;
			return Object.keys(n ?? {}).forEach((e) => {
				t.push(B(n?.[e]));
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
	return te({
		component: t ?? "span",
		...n,
		children: n.children
	});
}, V = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false", H = process.env.INTLAYER_NODE_TYPE_SOLID_NODE === "false", U = !0, W = !0, G = !0, K = !0, q = U ? null : w(() => import("./MarkdownRenderer-CSImESwc.js").then((e) => ({ default: e.MarkdownMetadataRenderer }))), J = U ? null : w(() => import("./MarkdownRenderer-CSImESwc.js").then((e) => ({ default: e.MarkdownRenderer }))), Y = W ? null : w(() => import("./HTMLRenderer-D40MLOni.js").then((e) => ({ default: e.HTMLRenderer }))), le = V ? t : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => z({
		...n,
		value: n.children,
		children: !K && r.enabled ? g(R, v(n, { get children() {
			return n.children;
		} })) : n.children
	})
}, ue = H ? t : {
	id: "solid-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 || typeof Node < "u" && e instanceof Node,
	transform: (e, { plugins: t, ...n }) => z({
		...n,
		value: "[[solid-element]]",
		children: !K && r.enabled ? g(R, v(n, { get children() {
			return typeof Node < "u" && e instanceof Node ? e : B(e);
		} })) : typeof Node < "u" && e instanceof Node ? e : B(e)
	})
}, de = (e, t) => {
	let n = j(e, t);
	return n.isSimple, n.parts;
}, fe = G ? t : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: p }], i = e[p];
		return (e) => {
			let a = {
				id: "insertion-string-plugin",
				canHandle: (e) => typeof e == "string",
				transform: (n, r, i) => {
					let a = de(i(n, {
						...r,
						children: n,
						plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
					}), e);
					return i(a, {
						...r,
						plugins: t.plugins,
						children: a
					});
				}
			};
			return n(i, {
				...t,
				children: i,
				keyPath: r,
				plugins: [a, ...t.plugins ?? []]
			});
		};
	}
}, pe = U ? t : {
	id: "markdown-string-plugin",
	canHandle: (e) => typeof e == "string",
	transform: (t, n, i) => {
		let { plugins: a, ...o } = n, s = i(e(t) ?? {}, {
			plugins: [{
				id: "markdown-metadata-plugin",
				canHandle: (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean" || !e,
				transform: (e, n) => z({
					...n,
					value: e,
					children: !K && r.enabled ? g(R, v(o, { get children() {
						return g(y, {
							fallback: t,
							get children() {
								return g(q, v(o, {
									get metadataKeyPath() {
										return n.keyPath;
									},
									children: t
								}));
							}
						});
					} })) : g(y, {
						fallback: t,
						get children() {
							return g(q, v(o, {
								get metadataKeyPath() {
									return n.keyPath;
								},
								children: t
							}));
						}
					})
				})
			}],
			dictionaryKey: o.dictionaryKey,
			keyPath: []
		}), c = (e) => z({
			...n,
			value: t,
			children: !K && r.enabled ? g(R, v(o, { get children() {
				return g(y, {
					fallback: t,
					get children() {
						return g(J, v(o, {
							components: e,
							children: t
						}));
					}
				});
			} })) : g(y, {
				fallback: t,
				get children() {
					return g(J, v(o, {
						components: e,
						children: t
					}));
				}
			}),
			additionalProps: { metadata: s }
		}), l = c();
		return new Proxy(l, { get(e, n, r) {
			return n === "value" ? t : n === "metadata" ? s : n === "use" ? (e) => c(e) : Reflect.get(e, n, r);
		} });
	}
}, me = U ? t : {
	id: "markdown-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "markdown",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: m }], i = e[m];
		return n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [pe, ...t.plugins ?? []]
		});
	}
}, he = W ? t : {
	id: "html-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "html",
	transform: (e, t) => {
		let n = e[f], { plugins: i, ...a } = t, o = (e) => z({
			...a,
			value: n,
			children: !K && r.enabled ? g(R, v(a, { get children() {
				return g(y, {
					fallback: n,
					get children() {
						return g(Y, v(a, {
							html: n,
							components: e
						}));
					}
				});
			} })) : g(y, {
				fallback: n,
				get children() {
					return g(Y, v(a, {
						html: n,
						components: e
					}));
				}
			})
		}), s = [o()];
		return new Proxy(s, { get(e, t, r) {
			return t === "value" ? n : t === "use" ? (e) => o(e) : Reflect.get(e, t, r);
		} });
	}
}, X = /* @__PURE__ */ new Map(), ge = (e, t = !0) => {
	let r = `${e ?? l.defaultLocale}_${t}`;
	if (X.has(r)) return X.get(r);
	let i = [
		o(e ?? l.defaultLocale, t ? l.defaultLocale : void 0),
		a,
		u,
		n(e ?? l.defaultLocale),
		c,
		d,
		le,
		ue,
		fe,
		me,
		he
	];
	return X.set(r, i), i;
}, _e = (e, t) => O(e, t, ge(t)), Z = F(L), Q = (e, t) => I(e, {
	...L,
	isCookieEnabled: t
}), ve = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, ye = ({ children: e }) => e, $ = b({
	locale: () => Z ?? l?.defaultLocale,
	setLocale: () => null
}), be = (e) => {
	let { defaultLocale: t, locales: n } = l ?? {}, [r, i] = C(e.locale ?? Z ?? e.defaultLocale ?? t), a = e.setLocale ?? ((t) => {
		if (r().toString() !== t.toString()) {
			if (!n?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			i(t), Q(t, e.isCookieEnabled);
		}
	}), o = S(() => M(r()));
	return x(ne(() => e.locale, (e) => {
		e && e !== ie(r) && i(e);
	}, { defer: !0 })), re(() => {
		ve();
	}), g($.Provider, {
		value: {
			locale: o,
			setLocale: a
		},
		get children() {
			return e.children;
		}
	});
}, xe = (e) => g(be, v(e, { get children() {
	return [g(ye, {}), _(() => e.children)];
} })), Se = (e, t) => {
	let n = ae($) ?? {};
	return S(() => _e(e, t ?? n?.locale?.()));
}, { defaultLocale: Ce, locales: we } = l, Te = () => (Se(h), null);
function Ee() {
	return g(xe, {
		get locale() {
			return "en";
		},
		get children() {
			return g(Te, {});
		}
	});
}
export { Ee as default };
import { Dynamic as e, createComponent as t, mergeProps as n } from "solid-js/web";
import { createContext as r, useContext as i } from "solid-js";
var a = (e) => {
	let t = {}, n = /([a-zA-Z0-9-]+)="([^"]*)"/g, r = n.exec(e);
	for (; r !== null;) t[r[1]] = r[2], r = n.exec(e);
	return t;
}, o = /* @__PURE__ */ new Map(), s = (e) => {
	if (o.has(e)) return o.get(e);
	if (typeof e != "string") return [];
	let t = /<(\/)?([a-zA-Z0-9.-]+)([\s\S]*?)(\/?)>/g, n = [], r = [], i = 0, s = t.exec(e), c = (e) => {
		(r.length > 0 ? r[r.length - 1].children : n).push(e);
	};
	for (; s !== null;) {
		let [n, o, l, u, d] = s, f = s.index;
		f > i && c(e.slice(i, f));
		let p = o === "/", m = d === "/" || u.trim().endsWith("/") || n.endsWith("/>"), h = u.trim().replace(/\/$/, "").trim();
		if (p) {
			let e = r[r.length - 1];
			if (e && e.tagName === l) {
				let e = r.pop();
				e && c({
					tagName: e.tagName,
					props: e.props,
					children: e.children
				});
			}
		} else if (m) c({
			tagName: l,
			props: a(h),
			children: []
		});
		else {
			let e = a(h);
			r.push({
				tagName: l,
				children: [],
				props: e
			});
		}
		i = f + n.length, s = t.exec(e);
	}
	for (i < e.length && c(e.slice(i)); r.length > 0;) {
		let e = r.pop();
		e && c({
			tagName: e.tagName,
			props: e.props,
			children: e.children
		});
	}
	return o.set(e, n), n;
}, c = (e, t) => {
	let n = s(e), r = 0, i = (e) => {
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
}, l = r(), u = () => i(l), d = (r, { components: i = {} } = {}) => {
	let a = Object.fromEntries(Object.entries(i).filter(([, e]) => e).map(([r, i]) => [r, (r) => t(e, n({ component: i }, r))]));
	return c(r, new Proxy(a, { get(r, i) {
		if (typeof i == "string" && i in r) return r[i];
		if (typeof i == "string" && /^[a-z][a-z0-9]*$/.test(i)) return (r) => t(e, n({ component: i }, r));
	} }));
}, f = ({ components: e } = {}) => {
	let t = u();
	return (n) => d(n, { components: {
		...t?.components,
		...e
	} });
}, p = (e) => f({ components: e.components || e.userComponents })(e.children || e.html || "");
export { p as HTMLRenderer };
import { n as e } from "./markdown-CqmJh0aV.js";
import { t } from "./getContentNodeByKeyPath-Dx4fxVHS.js";
import { createComponent as n } from "solid-js/web";
import { Suspense as r, createContext as i, createMemo as a, createResource as o, useContext as s } from "solid-js";
var c = i(), l = () => {
	let e = s(c);
	if (!e) throw Error("useMarkdown must be used within a MarkdownProvider. To fix this error, wrap your component with <MarkdownProvider>.");
	return e;
}, u = (e) => {
	let t = s(c), { renderMarkdown: i } = l(), [a] = o(() => [
		e.children,
		e.forceBlock,
		e.preserveFrontmatter,
		e.tagfilter,
		e.components,
		e.wrapper
	], ([e, n, r, a, o, s]) => i(e, {
		forceBlock: n,
		preserveFrontmatter: r,
		tagfilter: a
	}, {
		...t?.components ?? {},
		...o ?? {}
	}, s));
	return n(r, {
		fallback: null,
		get children() {
			return a();
		}
	});
}, d = (n) => {
	let r = a(() => e(n.children));
	return a(() => t(r(), n.metadataKeyPath))();
};
export { d as MarkdownMetadataRenderer, u as MarkdownRenderer };
import { d as e, f as t, n, t as r } from "./getContent-BYwbnwE9.js";
import { u as i } from "./nodeType-JEOtEAxc.js";
import { t as a } from "./getContentNodeByKeyPath-Dx4fxVHS.js";
var o = (e, t) => e.every((e, n) => t[n] && t[n].key === e.key && t[n].type === e.type), s = (e, t) => {
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
}, c = (e) => {
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
}, l = "__intlayer_editor_manager__", u = "__intlayer_editor_manager_events__", d = () => {
	if (typeof window > "u") return new EventTarget();
	let e = window;
	return e[u] || (e[u] = new EventTarget()), e[u];
}, f = () => typeof window > "u" ? null : window[l] ?? null, p = (e) => {
	if (typeof window < "u") {
		let t = window;
		t[l] = e;
	}
	d().dispatchEvent(new CustomEvent("change", { detail: e }));
}, m = (e) => {
	let t = d(), n = (t) => {
		e(t.detail);
	};
	return t.addEventListener("change", n), () => {
		t.removeEventListener("change", n);
	};
}, h = typeof HTMLElement < "u" ? HTMLElement : class {}, g = class extends h {
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
		let t = f();
		t && this._updateEditedValue(t);
	}
	get dictionaryKey() {
		return this._dictionaryKey;
	}
	set dictionaryKey(e) {
		this._dictionaryKey = e;
		let t = f();
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
			let e = f();
			e && this._updateEditedValue(e);
		} else if (e === "dictionary-key") {
			this._dictionaryKey = n ?? "";
			let e = f();
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
		this._isSelected = e.dictionaryKey === this._dictionaryKey && (e.keyPath?.length ?? 0) > 0 && o(e.keyPath ?? [], t), this._updateSelectorAttr();
	}
	_updateSelectorAttr() {
		this._selector && (this._isSelected ? this._selector.setAttribute("is-selecting", "") : this._selector.removeAttribute("is-selecting"));
	}
	_subscribeToManager() {
		let e = f();
		e && this._setupManagerSubscriptions(e), this._unsubManager = m((e) => {
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
		let t = f();
		t && t.focusedContent.set({
			dictionaryKey: this._dictionaryKey,
			keyPath: this._getFilteredKeyPath()
		});
	}
	_handleHover(e) {
		e.stopPropagation(), f()?.messenger.send("INTLAYER_HOVERED_CONTENT_CHANGED/post", {
			dictionaryKey: this._dictionaryKey,
			keyPath: this._getFilteredKeyPath()
		});
	}
	_handleUnhover(e) {
		e.stopPropagation(), f()?.messenger.send("INTLAYER_HOVERED_CONTENT_CHANGED/post", null);
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
}, _ = () => {
	typeof customElements > "u" || customElements.get("intlayer-content-selector-wrapper") || customElements.define("intlayer-content-selector-wrapper", g);
}, v = typeof HTMLElement < "u" ? HTMLElement : class {}, y = class extends v {
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
		let e = f();
		e && this._setupManagerSubscriptions(e), this._unsubManager = m((e) => {
			this._unsubEditedContent?.(), this._unsubEditedContent = null, e ? this._setupManagerSubscriptions(e) : (this._editedText = null, this._render());
		});
	}
}, b = () => {
	typeof customElements > "u" || customElements.get("intlayer-edited-content") || customElements.define("intlayer-edited-content", y);
}, x = () => Math.random().toString(36).slice(2), S = class {
	senderId;
	_config;
	_subscribers = /* @__PURE__ */ new Map();
	_windowHandler = null;
	_seenMessageIds = /* @__PURE__ */ new Set();
	constructor(e) {
		this._config = e, this.senderId = x();
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
			messageId: x()
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
		if (!(!o || o.length === 0 || o.includes("*") || o.filter((e) => !!e && e !== "").some((t) => s(t, e.origin)))) return;
		let c = this._subscribers.get(n);
		if (c) for (let e of c) e(r, i);
	}
}, C = class extends EventTarget {
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
}, w = class {
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
		this._unsubscribeMerge = this._messenger.subscribe("INTLAYER_IFRAME_CLICKED", c);
	}
	stopInterceptor() {
		this._mousedownHandler &&= (window.removeEventListener("mousedown", this._mousedownHandler), null);
	}
	stopMerger() {
		this._unsubscribeMerge?.(), this._unsubscribeMerge = null;
	}
}, T = class {
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
}, E = (e, t, n) => {
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
		this._mode = e.mode, this._configuration = e.configuration, this.messenger = new S(e.messenger), this.editorEnabled = new C("INTLAYER_EDITOR_ENABLED", this.messenger, {
			emit: !1,
			receive: !0,
			initialValue: !1
		}), this.focusedContent = new C("INTLAYER_FOCUSED_CONTENT_CHANGED", this.messenger, {
			emit: !0,
			receive: !0,
			initialValue: null
		}), this.localeDictionaries = new C("INTLAYER_LOCALE_DICTIONARIES_CHANGED", this.messenger), this.editedContent = new C("INTLAYER_EDITED_CONTENT_CHANGED", this.messenger), this.configuration = new C("INTLAYER_CONFIGURATION", this.messenger, {
			emit: !0,
			receive: !1,
			...e.configuration ? { initialValue: e.configuration } : {}
		}), this.currentLocale = new C("INTLAYER_CURRENT_LOCALE", this.messenger, {
			emit: e.mode === "client",
			receive: e.mode === "editor"
		}), this._urlManager = new T(this.messenger), this._iframeInterceptor = new w(this.messenger);
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
		let i = this.editedContent.value ?? {}, o = (this.localeDictionaries.value ?? {})[e]?.content, s = structuredClone(i[e]?.content ?? o), c = n;
		if (!r) {
			let e = 0, t = n.slice(0, -1), r = n[n.length - 1], i = r.key;
			for (; a(s, c) !== void 0;) e++, i = e === 0 ? r.key : `${r.key} (${e})`, c = [...t, {
				...r,
				key: i
			}];
		}
		let l = E(s, c, t);
		this.editedContent.set({
			...i,
			[e]: {
				...i[e],
				content: l
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
		let n = this.editedContent.value ?? {}, r = (this.localeDictionaries.value ?? {})[e]?.content, i = E(structuredClone(n[e]?.content ?? r), t, a(r, t));
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
		let r = t.filter((e) => e.type !== i), o = this.localeDictionaries.value;
		if (e.includes(":local:") || e.includes(":remote:")) return o && !(e in o) ? void 0 : a(n[e]?.content ?? {}, r, this.currentLocale.value);
		let s = Object.keys(n).filter((t) => t.startsWith(`${e}:`) && (!o || t in o));
		for (let e of s) {
			let t = a(n[e]?.content ?? {}, r, this.currentLocale.value);
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
		let t = f();
		t ? t.currentLocale.set(e) : (this._unsubManager?.(), this._unsubManager = m((t) => {
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
	typeof customElements > "u" || (customElements.get("intlayer-content-selector") || customElements.define("intlayer-content-selector", F), _(), b(), j());
}, L = () => ({
	allowedOrigins: [t?.editorURL, t?.cmsURL].filter(Boolean),
	postMessageFn: (e, t) => {
		typeof window > "u" || window.self !== window.top && window.parent?.postMessage(e, t);
	}
}), R = 0, z = () => {
	R++;
	let t = f();
	if (t) return t;
	let n = new O({
		mode: "client",
		messenger: L(),
		configuration: e
	});
	return p(n), I(), n.start(), n;
}, B = () => {
	R = Math.max(0, R - 1), !(R > 0) && (f()?.stop(), p(null));
};
export { z as initEditorClient, B as stopEditorClient };
import { c as e, t, u as n } from "./nodeType-JEOtEAxc.js";
var r = {
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
}, i = {
	mode: "prefix-no-default",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, a = {
	editorURL: "http://localhost:8000",
	cmsURL: "https://app.intlayer.org",
	backendURL: "https://back.intlayer.org",
	port: 8e3,
	enabled: !1,
	dictionaryPriorityStrategy: "local_first",
	liveSync: !0,
	liveSyncPort: 4e3,
	liveSyncURL: "http://localhost:4000"
}, o = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, s = {
	internationalization: r,
	routing: i,
	editor: a,
	log: o,
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
}, c = (n, r) => {
	for (let e of r.plugins ?? []) if (e.canHandle(n)) return e.transform(n, r, (e, t) => c(e, t));
	if (typeof n != "object" || !n || n.$$typeof !== void 0 || n.__v_isVNode !== void 0 || n._isVNode !== void 0 || n.isJSX !== void 0 || typeof n == "function") return n;
	if (Array.isArray(n)) return n.map((e, n) => c(e, {
		...r,
		children: e,
		keyPath: [...r.keyPath, {
			type: t,
			key: n
		}]
	}));
	let i = {};
	for (let t in n) Object.defineProperty(i, t, {
		enumerable: !0,
		configurable: !0,
		get: function() {
			let i = {
				...r,
				children: n[t],
				keyPath: [...r.keyPath, {
					type: e,
					key: t
				}]
			}, a = c(n[t], i);
			return Object.defineProperty(this, t, {
				value: a,
				enumerable: !0,
				configurable: !0
			}), a;
		}
	});
	return i;
}, l = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, u = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (l(e) && l(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : u(e[r], t[r]));
		return n;
	}
	return e;
}, d = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => u(e, t));
}, f = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", p = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, m = (e, t) => f ? p : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (r, i, a) => {
		let o = r.translation ?? {}, s = {};
		for (let e in o) {
			let t = {
				...i,
				children: o[e],
				keyPath: [...i.keyPath, {
					type: n,
					key: e
				}]
			};
			s[e] = a(o[e], t);
		}
		return d(s, e, t);
	}
}, h = p, g = p, _ = p, v = p, y = (e) => p, b = p, x = (e, t = !0) => [
	m(e ?? r.defaultLocale, t ? r.defaultLocale : void 0),
	h,
	g,
	_,
	y(e ?? r.defaultLocale),
	b,
	v
], S = (e, t, n = []) => c(e, {
	...t,
	plugins: n
});
export { p as a, y as c, s as d, a as f, i as h, h as i, m as l, o as m, S as n, b as o, r as p, g as r, v as s, x as t, d as u };
import { u as e } from "./nodeType-JEOtEAxc.js";
var t = (t, n, r) => {
	let i = structuredClone(t);
	for (let t of n) r && i?.nodeType === "translation" && (i = i?.[e]?.[r]), (t.type === "object" || t.type === "array") && (i = i?.[t.key]), (t.type === "translation" || t.type === "condition" || t.type === "enumeration") && (i = i?.[t.type]?.[t.key]), (t.type === "markdown" || t.type === "html" || t.type === "insertion" || t.type === "file") && (i = i?.[t.type]);
	return i;
};
export { t };
var e = Object.defineProperty, t = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
}, n = new Set([
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
]), r = (e) => {
	let t = e.trim();
	if (!t) return null;
	let r = 0, i = () => t[r], a = () => t[r++], o = () => r >= t.length, s = () => {
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
		let n = r;
		for (; !o() && !e.includes(i());) r++;
		return t.slice(n, r).trim();
	}, u = (e) => n.has(e) || /^0x[0-9a-fA-F]+$/.test(e) || /^#/.test(e) ? e : /^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?$/i.test(e) ? e === "3.14159265359" ? Math.PI : Number(e) : e, d = (e) => {
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
		a(), s();
		let e = i();
		if (e === "{") return v();
		if (e === "\"" || e === "'") return c(e);
		let n = t.indexOf("\n", r), o = t.slice(r, n === -1 ? t.length : n);
		return /: /.test(o) ? h() : u(l("\n"));
	}, m = () => {
		let e = t.lastIndexOf("\n", r - 1) + 1, n = 0;
		for (let i = e; i < r && t[i] === " "; i++) n++;
		return n;
	}, h = () => {
		let e = {}, n = m();
		for (; !o();) {
			let d = r, f = d === 0 || t[d - 1] === "\n";
			if (s(), f && m() <= n) {
				r = d;
				break;
			}
			if (i() === "-" || o()) {
				r = d;
				break;
			}
			let p = i(), h = p === "\"" || p === "'" ? c(p) : l(":");
			if (o() || a() !== ":") break;
			if (s(), i() === "\n" && (a(), s(), i() === "-")) {
				e[h] = g();
				continue;
			}
			e[h] = u(l("\n")), i() === "\n" && a();
		}
		return e;
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
			let n = i(), u = n === "\"" || n === "'" ? c(n) : l(`:\n${e}`);
			if (!u) return t;
			if (o() || a() !== ":") throw SyntaxError("Expected ':' after key");
			for (i() === " " && a(); !o() && " 	".includes(i());) a();
			if (o()) return t[u] = "", t;
			if (i() === "\n") {
				a();
				let n = r;
				if (s(), i() === "-") {
					t[u] = g(), s();
					continue;
				} else {
					r = n, s();
					let a = i();
					if (a && !e.includes(a) && a !== "-") {
						t[u] = "";
						continue;
					}
					return t[u] = "", t;
				}
			}
			if (t[u] = d(e.includes("}") ? `,\n${e}` : `\n${e}`), o()) return t;
			let f = i();
			if (f === "," || f === "\n") {
				a(), s();
				continue;
			}
			if (" 	".includes(f)) {
				for (; !o() && " 	".includes(i());) a();
				if (i() === "\n") {
					a(), s();
					continue;
				}
				if (o() || e.includes(i())) return t;
				continue;
			}
			if (e.includes(f)) return t;
		}
		return t;
	}, v = () => {
		if (a(), s(), i() === "}") return a(), {};
		let e = _("}");
		if (i() !== "}") throw SyntaxError("Expected '}' at end of object");
		return a(), e;
	}, y = (e) => {
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
	if (t.startsWith("]") || t.startsWith("}")) throw SyntaxError("Unexpected closing bracket");
	let b;
	if (b = t.startsWith("[") ? f() : t.startsWith("{") ? v() : y(t) ? _("") : d(""), s(), !o()) throw SyntaxError("Unexpected trailing characters");
	return b;
}, i = (e) => {
	try {
		let t = e.split(/\r?\n/), n = t.find((e) => e.trim() !== "");
		if (!n || n.trim() !== "---") return {};
		let i = -1;
		for (let e = 1; e < t.length; e++) if (t[e].trim() === "---") {
			i = e;
			break;
		}
		return i === -1 ? {} : r(t.slice(1, i).join("\n")) ?? {};
	} catch {
		return {};
	}
}, a = {
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
}, o = {
	MAX: 0,
	HIGH: 1,
	MED: 2,
	LOW: 3,
	MIN: 4
}, s = (/* @__PURE__ */ "allowFullScreen.allowTransparency.autoComplete.autoFocus.autoPlay.cellPadding.cellSpacing.charSet.classId.colSpan.contentEditable.contextMenu.crossOrigin.encType.formAction.formEncType.formMethod.formNoValidate.formTarget.frameBorder.hrefLang.inputMode.keyParams.keyType.marginHeight.marginWidth.maxLength.mediaGroup.minLength.noValidate.radioGroup.readOnly.rowSpan.spellCheck.srcDoc.srcLang.srcSet.tabIndex.useMap".split(".")).reduce((e, t) => (e[t.toLowerCase()] = t, e), {
	class: "className",
	for: "htmlFor"
}), c = {
	amp: "&",
	apos: "'",
	gt: ">",
	lt: "<",
	nbsp: "\xA0",
	quot: "“"
}, l = [
	"style",
	"script",
	"pre"
], u = [
	"src",
	"href",
	"data",
	"formAction",
	"srcDoc",
	"action"
], d = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, f = /\n{2,}$/, p = /^(\s*>[\s\S]*?)(?=\n\n|$)/, m = /^ *> ?/gm, h = /^(?:\[!([^\]]*)\]\n)?([\s\S]*)/, g = /^ {2,}\n/, _ = /^(?:([-*_])( *\1){2,}) *(?:\n *)+\n/, v = /^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/, y = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, b = /^(`+)((?:\\`|(?!\1)`|[^`])+)\1/, x = /^(?:\n *)*\n/, S = /\r\n?/g, ee = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/, te = /^\[\^([^\]]+)]/, C = /\f/g, ne = /^---[ \t]*\n(.|\n)*?\n---[ \t]*\n/, re = /^\s*?\[(x|\s)\]/, w = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, T = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, E = /^([^\n]+)\n *(=|-)\2{2,} *\n/, D = /^ *(?!<[a-zA-Z][^ >/]* ?\/>)<([a-zA-Z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i, ie = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, ae = /^<!--[\s\S]*?(?:-->)/, O = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, k = /^ *<([a-zA-Z][a-zA-Z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, A = /^ *<([A-Z][a-zA-Z0-9]*)(?:\s+((?:<.*?>|[^>])*))?>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/, oe = /^\{.*\}$/, se = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, ce = /^<([^ >]+[:@/][^ >]+)>/, le = /-([a-z])?/gi, ue = /^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/, de = /(^ *\||\| *$)/g, fe = /^ *:-+: *$/, pe = /^ *:-+ *$/, me = /^ *-+: *$/, he = /^[^\n]+(?: {2}\n|\n{2,})/, ge = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, _e = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, ve = /^\[([^\]]*)\] ?\[([^\]]*)\]/, ye = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, be = /\t/g, j = /^\n+/, xe = /^\n*([ \t]*)/, Se = /(?:^|\n)( *)$/, M = "(?:\\d+\\.)", N = "(?:[*+-])", Ce = /^\\([^0-9A-Za-z\s])/, we = /\\([^0-9A-Za-z\s])/g, Te = /^[\s\S](?:(?! {2}\n|[0-9]\.|http)[^=*_~\-\n:<`\\[!])*/, Ee = /^(:[a-zA-Z0-9-_]+:)/, P = (e) => `(?=[\\s\\S]+?\\1${e ? "\\1" : ""})`, F = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|\\\\[^\\s]|[\\s\\S])+?)", De = RegExp(`^([*_])\\1${P(1)}${F}\\1\\1(?!\\1)`), Oe = RegExp(`^([*_])${P(0)}${F}\\1(?!\\1)`), ke = RegExp(`^(==)${P(0)}${F}\\1`), Ae = RegExp(`^(~~)${P(0)}${F}\\1`), I = (e) => "( *)(" + (e === 1 ? M : N) + ") +", je = I(1), Me = I(2), Ne = (e) => RegExp("^" + (e === 1 ? je : Me)), Pe = Ne(1), Fe = Ne(2), Ie = (e) => RegExp("^" + (e === 1 ? je : Me) + "[^\\n]*(?:\\n(?!\\1" + (e === 1 ? M : N) + " )[^\\n]*)*(\\n|$)", "gm"), Le = Ie(1), Re = Ie(2), ze = (e) => {
	let t = e === 1 ? M : N;
	return RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)");
}, Be = ze(1), Ve = ze(2), L = (e) => {
	let t = e.length;
	for (; t > 0 && e[t - 1] <= " ";) t--;
	return e.slice(0, t);
}, R = (e, t) => e.startsWith(t), He = (e) => {
	let t = e[0];
	return (t === "\"" || t === "'") && e.length >= 2 && e[e.length - 1] === t ? e.slice(1, -1) : e;
}, z = (e) => e && e.replace(we, "$1"), Ue = (...e) => e.filter(Boolean).join(" "), B = (e, t, n) => {
	let r = e, i = t.split(".");
	for (; i.length && (r = r[i[0]], r !== void 0);) i.shift();
	return r ?? n;
}, V = (e) => e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase(), We = /(javascript|vbscript|data(?!:image)):/i, Ge = (e) => {
	try {
		let t = decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "");
		if (We.test(t)) return console.warn("Input contains an unsafe JavaScript/VBScript/data expression, it will not be rendered.", t), null;
	} catch {
		return console.warn("Input could not be decoded due to malformed syntax or characters, it will not be rendered.", e), null;
	}
	return e;
}, Ke = (e) => {
	let t = performance.now(), n = e.replace(S, "\n").replace(C, "").replace(be, "    "), r = performance.now() - t;
	return r > 20 && console.log(`normalizeWhitespace: ${r.toFixed(3)}ms, source length: ${e.length}`), n;
}, qe = (e, t) => {
	let n = performance.now();
	if (!t) return e;
	let r = e.split("\n"), i = !1, a = null, o = (e) => e.match(/^\s*(`{3,}|~{3,})/), s = (e) => {
		let t = o(e);
		if (!t) return;
		let n = t[1];
		i ? a && e.includes(a) && (i = !1, a = null) : (i = !0, a = n);
	}, c = r.map((e) => {
		if (o(e)) {
			let n = e.startsWith(t) ? e.slice(t.length) : e;
			return s(e), n;
		}
		return i ? e : e.startsWith(t) ? e.slice(t.length) : e;
	}).join("\n"), l = performance.now() - n;
	return l > 20 && console.log(`trimLeadingWhitespaceOutsideFences: ${l.toFixed(3)}ms, text length: ${e.length}, lines count: ${r.length}`), c;
}, Je = (e) => (e.indexOf("-") !== -1 && e.match(O) === null && (e = e.replace(le, (e, t) => t.toUpperCase())), e), Ye = (e) => {
	let t = performance.now(), n = [], r = "", i = !1, a = !1, o = "";
	if (!e) return n;
	for (let t = 0; t < e.length; t++) {
		let s = e[t];
		if ((s === "\"" || s === "'") && !i && (a ? s === o && (a = !1, o = "") : (a = !0, o = s)), s === "(" && r.endsWith("url") ? i = !0 : s === ")" && i && (i = !1), s === ";" && !a && !i) {
			let e = r.trim();
			if (e) {
				let t = e.indexOf(":");
				if (t > 0) {
					let r = e.slice(0, t).trim(), i = e.slice(t + 1).trim();
					n.push([r, i]);
				}
			}
			r = "";
		} else r += s;
	}
	let s = r.trim();
	if (s) {
		let e = s.indexOf(":");
		if (e > 0) {
			let t = s.slice(0, e).trim(), r = s.slice(e + 1).trim();
			n.push([t, r]);
		}
	}
	let c = performance.now() - t;
	return c > 20 && console.log(`parseStyleAttribute: ${c.toFixed(3)}ms, styleString length: ${e.length}, styles count: ${n.length}`), n;
}, Xe = (e, t, n, r) => t === "style" ? Ye(n).reduce((t, [n, i]) => {
	let a = n.replace(/(-[a-z])/g, (e) => e[1].toUpperCase());
	return t[a] = r(i, e, n), t;
}, {}) : u.indexOf(t) === -1 ? (n.match(oe) && (n = z(n.slice(1, n.length - 1))), n === "true" ? !0 : n === "false" ? !1 : n) : r(z(n), e, t), Ze = (e) => me.test(e) ? "right" : fe.test(e) ? "center" : (pe.test(e), "left"), Qe = (e) => e.replace(de, "").split("|").map(Ze), $e = (e, t, n, r) => {
	let i = performance.now(), a = n.inTable;
	n.inTable = !0;
	let o = [[]], s = "", c = () => {
		if (!s) return;
		let e = o[o.length - 1];
		e.push.apply(e, t(s, n)), s = "";
	};
	e.trim().split(/(`[^`]*`|\\\||\|)/).filter(Boolean).forEach((e, t, n) => {
		if (e.trim() === "|" && (c(), r)) {
			t !== 0 && t !== n.length - 1 && o.push([]);
			return;
		}
		s += e;
	}), c(), n.inTable = a;
	let l = performance.now() - i;
	return l > 20 && console.log(`parseTableRow: ${l.toFixed(3)}ms, source length: ${e.length}, cells count: ${o.length}`), o;
}, et = (e, t, n) => {
	let r = performance.now(), i = e.trim().split("\n"), a = i.map((e) => $e(e, t, n, !0)), o = performance.now() - r;
	return o > 20 && console.log(`parseTableCells: ${o.toFixed(3)}ms, source length: ${e.length}, rows count: ${i.length}`), a;
}, tt = (e, t, n) => {
	if (Array.isArray(n)) {
		for (let t = 0; t < n.length; t++) if (R(e, n[t])) return !0;
		return !1;
	}
	return n(e, t);
}, H = (e) => (e.inline = 1, e), U = (e) => H((t, n) => n.inline ? e.exec(t) : null), W = (e) => H((t, n) => n.inline || n.simple ? e.exec(t) : null), G = (e) => (t, n) => n.inline || n.simple ? null : e.exec(t), K = (e) => H((t, n) => typeof e == "function" ? e(t, n) : e.exec(t)), q = (e, t, n) => {
	let r = performance.now(), i = n.inline ?? !1, a = n.simple ?? !1;
	n.inline = !0, n.simple = !0;
	let o = e(t, n);
	n.inline = i, n.simple = a;
	let s = performance.now() - r;
	return s > 20 && console.log(`parseInline: ${s.toFixed(3)}ms, children length: ${t.length}, result count: ${o.length}`), o;
}, nt = (e, t, n) => {
	let r = performance.now(), i = n.inline ?? !1, a = n.simple ?? !1;
	n.inline = !1, n.simple = !0;
	let o = e(t, n);
	n.inline = i, n.simple = a;
	let s = performance.now() - r;
	return s > 20 && console.log(`parseSimpleInline: ${s.toFixed(3)}ms, children length: ${t.length}, result count: ${o.length}`), o;
}, J = (e, t, n = {}) => {
	let r = performance.now(), i = n.inline || !1;
	n.inline = !1;
	let a = L(t), o = e(/\n\n$/.test(a) === !1 ? a.endsWith("\n") ? `${a}\n` : `${a}\n\n` : a, n);
	n.inline = i;
	let s = performance.now() - r;
	return s > 20 && console.log(`parseBlock: ${s.toFixed(3)}ms, children length: ${t.length}, result count: ${o.length}`), o;
}, Y = (e, t, n) => ({ children: q(t, e[2], n) }), X = () => ({}), Z = () => null, Q = (e, t) => {
	for (let n = 0; n < e.length; n++) if (e[n].test(t)) return !0;
	return !1;
}, rt = (e) => {
	let t = performance.now(), n = Object.keys(e);
	n.forEach((t) => {
		let n = e[t]._order;
		(typeof n != "number" || !Number.isFinite(n)) && console.warn(`intlayer: Invalid order for rule \`${t}\`: ${n}`);
	}), n.sort((t, n) => e[t]._order - e[n]._order || t - +n);
	let r = (t, i = {}) => {
		let a = performance.now(), o = [];
		if (i.prevCapture = i.prevCapture || "", t.trim()) for (; t;) {
			let a = 0;
			for (; a < n.length;) {
				let s = n[a], c = e[s];
				if (c._qualify && !tt(t, i, c._qualify)) {
					a++;
					continue;
				}
				let l = performance.now(), u = c._match(t, i), d = performance.now() - l;
				if (d > 1 && console.log(`${s}._match: ${d.toFixed(3)}ms, source length: ${t.length}`), u?.[0]) {
					t = t.substring(u[0].length);
					let e = performance.now(), n = c._parse(u, r, i), a = performance.now() - e;
					a > 1 && console.log(`${s}._parse: ${a.toFixed(3)}ms, capture length: ${u[0].length}`), i.prevCapture = (i.prevCapture || "") + u[0], n.type ||= s, o.push(n);
					break;
				}
				a++;
			}
		}
		let s = performance.now() - a;
		return s > 1 && console.log(`nestedParse: ${s.toFixed(3)}ms, source length: ${t.length}, result count: ${o.length}`), o;
	}, i = performance.now() - t;
	return i > 20 && console.log(`parserFor: ${i.toFixed(3)}ms, rules count: ${n.length}`), (e, t) => r(Ke(e), t);
}, $ = (e) => (t, n = {}) => {
	let r = performance.now(), i = (t, n = {}) => $(e)(t, n);
	if (Array.isArray(t)) {
		let e = n.key, a = [], o = !1, s = 0;
		for (let e = 0; e < t.length; e++) {
			let r = i(t[e], {
				...n,
				key: s
			}), c = typeof r == "string";
			c && o ? a[a.length - 1] = a[a.length - 1] + r : r !== null && (a.push(r), s++), o = c;
		}
		n.key = e;
		let c = performance.now() - r;
		return c > 20 && console.log(`renderFor (array): ${c.toFixed(3)}ms, ast length: ${t.length}`), a;
	}
	let a = e(t, i, n), o = performance.now() - r;
	return o > 20 && console.log(`renderFor (single): ${o.toFixed(3)}ms, ast type: ${t.type}`), a;
}, it = (e, t) => (n, r, i) => {
	let a = performance.now(), o = e[n.type]?._render, s = t ? t(() => o?.(n, r, i), n, r, i) : o?.(n, r, i), c = performance.now() - a;
	return c > 20 && console.log(`createRenderer: ${c.toFixed(3)}ms, ast type: ${n.type}, hasUserRender: ${!!t}`), s;
}, at = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, ot = RegExp("^\\[((?:\\[[^\\[\\]]*(?:\\[[^\\[\\]]*\\][^\\[\\]]*)*\\]|[^\\[\\]])*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"), st = (e, t) => {
	if (typeof e != "string") return e;
	let n = B(t, e);
	if (!n && typeof e == "string") {
		let r = e.toLowerCase(), i = Object.keys(t).find((e) => e.toLowerCase() === r);
		i && (n = B(t, i));
	}
	return n || e;
}, ct = (e, t) => {
	let { runtime: n, components: r = {} } = e, i = t.tagfilter ? [
		"title",
		"textarea",
		"style",
		"xmp",
		"iframe",
		"noembed",
		"noframes",
		"script",
		"plaintext"
	] : [];
	return (e, t, ...a) => {
		if (typeof e == "string" && i.includes(e.toLowerCase())) return null;
		let o = typeof e == "string", s = Ue(t?.className, t?.class), c = {}, l = !1;
		if (t) for (let e in t) {
			let n = t[e];
			n != null && (e === "className" || e === "class" ? l ||= (s && (c.className = s), !0) : c[e] = n);
		}
		!l && s && (c.className = s);
		let u = c;
		n.normalizeProps && o && (u = n.normalizeProps(e, c));
		let d = st(e, r);
		return n.createElement(d, u, ...a.length === 1 ? [a[0]] : a);
	};
}, lt = (e, t, n, r, i, s, u, d) => {
	let S = (e) => t.slugify ? t.slugify(e, V) : V(e), C = t.sanitizer ?? Ge, ne = t.namedCodesToUnicode ? {
		...c,
		...t.namedCodesToUnicode
	} : c, O = (t) => {
		let n = t === 1, r = n ? Be : Ve, i = n ? Le : Re, a = n ? Pe : Fe;
		return {
			_qualify: (e) => a.test(e),
			_match: H((e, t) => {
				let n = Se.exec(t.prevCapture ?? ""), i = t.list ?? (!t.inline && !t.simple);
				if (n && i) {
					let t = (n[1] || "") + e;
					return r.exec(t);
				}
				return null;
			}),
			_order: o.HIGH,
			_parse(e, t, r) {
				let o = e[2], s = n ? +o.slice(0, -1) : void 0, c = e[0].replace(f, "\n").match(i);
				if (!c) return {
					items: [],
					ordered: n,
					start: s
				};
				let l = !1;
				return {
					items: c.map((e, n) => {
						let i = a.exec(e), o = i ? i[0].length : 0, s = RegExp(`^ {1,${o}}`, "gm"), u = e.replace(s, "").replace(a, ""), d = n === c.length - 1, f = u.indexOf("\n\n") !== -1 || d && l;
						l = f;
						let p = r.inline, m = r.list;
						r.list = !0;
						let h;
						f ? (r.inline = !1, h = `${L(u)}\n\n`) : (r.inline = !0, h = L(u));
						let g = t(h, r);
						return r.inline = p, r.list = m, g;
					}),
					ordered: n,
					start: s
				};
			},
			_render(t, n, r = {}) {
				let i = t.ordered ? "ol" : "ul", a = { key: r.key };
				return t.ordered && t.start != null && (a.start = t.start), e(i, a, ...t.items.map((t, i) => e("li", { key: i }, n(t, r))));
			}
		};
	}, oe = (e, t) => {
		if (t.inline || t.simple || t.inHTML && e.indexOf("\n\n") === -1 && t.prevCapture?.indexOf("\n\n") === -1) return null;
		let n = 0;
		for (;;) {
			let t = e.indexOf("\n", n), r = e.slice(n, t === -1 ? void 0 : t + 1);
			if (Q(d, r) || t === -1 || !r.trim()) break;
			n = t + 1;
		}
		let r = e.slice(0, n);
		if (r === "") return null;
		let i = L(r);
		return i === "" ? null : [
			r,
			void 0,
			i
		];
	};
	return {
		[a.blockQuote]: {
			_qualify: [">"],
			_match: G(p),
			_order: o.HIGH,
			_parse(e, t, n) {
				let r = e[0].replace(m, "").match(h), i = r?.[1], a = r?.[2] ?? "";
				return {
					alert: i,
					children: a.indexOf("\n") === -1 ? q(t, a, n) : J(t, a, n)
				};
			},
			_render(t, n, r = {}) {
				let i = { key: r.key };
				return t.alert && (i.className = `markdown-alert-${S(t.alert.toLowerCase())}`, t.children.unshift({
					attrs: {},
					children: [{
						type: a.text,
						text: t.alert
					}],
					noInnerParse: !0,
					type: a.htmlBlock,
					tag: "header"
				})), e("blockquote", i, n(t.children, r));
			}
		},
		[a.breakLine]: {
			_qualify: ["  "],
			_match: K(g),
			_order: o.HIGH,
			_parse: X,
			_render(t, n, r = {}) {
				return e("br", { key: r.key });
			}
		},
		[a.breakThematic]: {
			_qualify: [
				"--",
				"__",
				"**",
				"- ",
				"* ",
				"_ "
			],
			_match: G(_),
			_order: o.HIGH,
			_parse: X,
			_render(t, n, r = {}) {
				return e("hr", { key: r.key });
			}
		},
		[a.codeBlock]: {
			_qualify: ["    "],
			_match: G(y),
			_order: o.MAX,
			_parse(e) {
				return {
					type: a.codeBlock,
					lang: void 0,
					text: z(L(e[0].replace(/^ {4}/gm, "")))
				};
			},
			_render(t, n, r = {}) {
				let i = { ...t.attrs ?? {} }, a = t.lang ? `lang-${t.lang}` : "lang-plaintext";
				return i.className = i.className ? `${i.className} ${a}` : a, t.lang && !i.lang && (i.lang = t.lang), e("pre", { key: r.key }, e("code", i, t.text));
			}
		},
		[a.codeFenced]: {
			_qualify: ["```", "~~~"],
			_match: G(v),
			_order: o.MAX,
			_parse(e) {
				return {
					attrs: s("code", e[3] ?? ""),
					lang: e[2] || void 0,
					text: e[4],
					type: a.codeBlock
				};
			}
		},
		[a.codeInline]: {
			_qualify: ["`"],
			_match: W(b),
			_order: o.LOW,
			_parse(e) {
				return { text: z(e[2]) };
			},
			_render(t, n, r = {}) {
				return e("code", { key: r.key }, t.text);
			}
		},
		[a.footnote]: {
			_qualify: ["[^"],
			_match: G(ee),
			_order: o.MAX,
			_parse(e) {
				return r.push({
					footnote: e[2],
					identifier: e[1]
				}), {};
			},
			_render: Z
		},
		[a.footnoteReference]: {
			_qualify: ["[^"],
			_match: U(te),
			_order: o.HIGH,
			_parse(e) {
				return {
					target: `#${S(e[1])}`,
					text: e[1]
				};
			},
			_render(t, n, r = {}) {
				return e("a", {
					key: r.key,
					href: C(t.target, "a", "href") ?? void 0
				}, e("sup", { key: r.key }, t.text));
			}
		},
		[a.gfmTask]: {
			_qualify: ["[ ]", "[x]"],
			_match: U(re),
			_order: o.HIGH,
			_parse(e) {
				return { completed: e[1].toLowerCase() === "x" };
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
		[a.heading]: {
			_qualify: ["#"],
			_match: G(n.enforceAtxHeadings ? T : w),
			_order: o.HIGH,
			_parse(e, t, n) {
				return {
					children: q(t, e[2], n),
					id: S(e[2]),
					level: e[1].length
				};
			},
			_render(t, n, r = {}) {
				return e(`h${t.level}`, {
					id: t.id,
					key: r.key
				}, n(t.children, r));
			}
		},
		[a.headingSetext]: {
			_qualify: (e) => {
				let t = e.indexOf("\n");
				return t > 0 && t < e.length - 1 && (e[t + 1] === "=" || e[t + 1] === "-");
			},
			_match: G(E),
			_order: o.MAX,
			_parse(e, t, n) {
				return {
					children: q(t, e[1], n),
					level: e[2] === "=" ? 1 : 2,
					type: a.heading
				};
			}
		},
		[a.htmlBlock]: {
			_qualify: (e) => {
				if (n.disableParsingRawHTML) return !1;
				let t = e.match(/^ *<([a-z][a-z0-9:-]*)\b/i);
				if (!t) return !1;
				let r = t[1];
				return e.toLowerCase().indexOf(`</${r.toLowerCase()}>`) !== -1;
			},
			_match: K(D),
			_order: o.HIGH,
			_parse(e, t, n) {
				let r = e[3].match(xe)?.[1] ?? "", i = qe(e[3], r), a = u(i) ? J : q, o = e[1].trim(), c = l.indexOf(o.toLowerCase()) !== -1, d = c ? o.toLowerCase() : o, f = {
					attrs: s(d, e[2] ?? ""),
					noInnerParse: c,
					tag: d
				};
				if (n.inAnchor = n.inAnchor || o.toLowerCase() === "a", c) f.text = e[3];
				else {
					let e = n.inHTML;
					n.inHTML = !0, f.children = a(t, i, n), n.inHTML = e;
				}
				return n.inAnchor = !1, f;
			},
			_render(t, n, r = {}) {
				return e(t.tag, {
					key: r.key,
					...t.attrs ?? {}
				}, t.text ?? (t.children ? n(t.children, r) : ""));
			}
		},
		[a.htmlComment]: {
			_qualify: ["<!"],
			_match: K(ae),
			_order: o.HIGH,
			_parse: X,
			_render: Z
		},
		[a.htmlSelfClosing]: {
			_qualify: (e) => n.disableParsingRawHTML ? !1 : /^ *<([a-zA-Z][a-zA-Z0-9:]*)[\s>/]/.test(e),
			_match: K(k),
			_order: o.HIGH,
			_parse(e) {
				let t = e[1].trim();
				return {
					attrs: s(t, e[2] || ""),
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
		[a.customComponent]: {
			_qualify: (e) => /^ *<([A-Z][a-zA-Z0-9]*)/.test(e),
			_match: K(A),
			_order: o.MAX,
			_parse(e, t, n) {
				let r = e[3].match(xe)?.[1] ?? "", i = qe(e[3], r), a = u(i) ? J : q, o = e[1].trim(), c = {
					attrs: s(o, e[2] ?? ""),
					noInnerParse: !1,
					tag: o
				}, l = n.inHTML;
				return n.inHTML = !0, c.children = a(t, i, n), n.inHTML = l, c;
			},
			_render(t, n, r = {}) {
				return e(t.tag, {
					key: r.key,
					...t.attrs ?? {}
				}, t.text ?? (t.children ? n(t.children, r) : ""));
			}
		},
		[a.paragraph]: {
			_match: oe,
			_order: o.LOW,
			_parse: Y,
			_render(t, n, r = {}) {
				return e("p", { key: r.key }, n(t.children, r));
			}
		},
		[a.image]: {
			_qualify: ["!["],
			_match: W(at),
			_order: o.HIGH,
			_parse(e) {
				return {
					alt: z(e[1]),
					target: z(e[2]),
					title: z(e[3])
				};
			},
			_render(t, n, r = {}) {
				return e("img", {
					key: r.key,
					alt: t.alt ?? void 0,
					title: t.title ?? void 0,
					src: C(t.target, "img", "src") ?? void 0
				});
			}
		},
		[a.link]: {
			_qualify: ["["],
			_match: U(ot),
			_order: o.LOW,
			_parse(e, t, n) {
				return {
					children: nt(t, e[1], n),
					target: z(e[2]),
					title: z(e[3])
				};
			},
			_render(t, n, r = {}) {
				let i = C(t.target, "a", "href");
				return e("a", {
					key: r.key,
					href: i ?? void 0,
					title: t.title ?? void 0
				}, n(t.children, r));
			}
		},
		[a.linkAngleBraceStyleDetector]: {
			_qualify: ["<"],
			_match: U(ce),
			_order: o.MAX,
			_parse(e) {
				let t = e[1], n = !1;
				return t.indexOf("@") !== -1 && t.indexOf("//") === -1 && (n = !0, t = t.replace("mailto:", "")), {
					children: [{
						text: t,
						type: a.text
					}],
					target: n ? `mailto:${t}` : t,
					type: a.link
				};
			}
		},
		[a.linkBareUrlDetector]: {
			_qualify: (e, t) => !!(t.inline && !t.inAnchor && !n.disableAutoLink && (R(e, "http://") || R(e, "https://"))),
			_match: U(se),
			_order: o.MAX,
			_parse(e) {
				return {
					children: [{
						text: e[1],
						type: a.text
					}],
					target: e[1],
					type: a.link
				};
			}
		},
		[a.newlineCoalescer]: {
			_match: G(x),
			_order: o.LOW,
			_parse: X,
			_render() {
				return "\n";
			}
		},
		[a.orderedList]: O(1),
		[a.unorderedList]: O(2),
		[a.ref]: {
			_qualify: ["["],
			_match: K(ge),
			_order: o.MAX,
			_parse(e) {
				return i[e[1]] = {
					target: e[2],
					title: e[4]
				}, {};
			},
			_render: Z
		},
		[a.refImage]: {
			_qualify: ["!["],
			_match: W(_e),
			_order: o.MAX,
			_parse(e) {
				return {
					alt: e[1] ? z(e[1]) : void 0,
					ref: e[2]
				};
			},
			_render(t, n, r = {}) {
				let a = i[t.ref];
				return a ? e("img", {
					key: r.key,
					alt: t.alt,
					src: C(a.target, "img", "src") ?? void 0,
					title: a.title
				}) : null;
			}
		},
		[a.refLink]: {
			_qualify: (e) => e[0] === "[" && e.indexOf("](") === -1,
			_match: U(ve),
			_order: o.MAX,
			_parse(e, t, n) {
				return {
					children: nt(t, e[1], n),
					fallbackChildren: e[0],
					ref: e[2]
				};
			},
			_render(t, n, r = {}) {
				let a = i[t.ref];
				return a ? e("a", {
					key: r.key,
					href: C(a.target, "a", "href") ?? void 0,
					title: a.title
				}, n(t.children, r)) : e("span", { key: r.key }, t.fallbackChildren);
			}
		},
		[a.table]: {
			_qualify: ["|"],
			_match: G(ue),
			_order: o.HIGH,
			_parse(e, t, n) {
				n.inline = !0;
				let r = e[2] ? Qe(e[2]) : [], i = e[3] ? et(e[3], t, n) : [], o = $e(e[1], t, n, !!i.length);
				return n.inline = !1, i.length ? {
					align: r,
					cells: i,
					header: o,
					type: a.table
				} : {
					children: o.flat(),
					type: a.paragraph
				};
			},
			_render(t, n, r = {}) {
				let i = t, a = (e) => i.align[e] && i.align[e] !== "left" ? { textAlign: i.align[e] } : {};
				return e("table", { key: r.key }, e("thead", null, e("tr", null, ...i.header.map((t, i) => e("th", {
					key: i,
					style: a(i)
				}, n(t, r))))), e("tbody", null, ...i.cells.map((t, i) => e("tr", { key: i }, ...t.map((t, i) => e("td", {
					key: i,
					style: a(i)
				}, n(t, r)))))));
			}
		},
		[a.tableSeparator]: {
			_match: (e, t) => t.inTable && e[0] === "|" ? /^\|/.exec(e) : null,
			_order: o.HIGH,
			_parse() {
				return { type: a.tableSeparator };
			},
			_render() {
				return " | ";
			}
		},
		[a.text]: {
			_match: H((e, t) => Ee.exec(e) || Te.exec(e) || /^[\s\S]/.exec(e)),
			_order: o.MIN,
			_parse(e) {
				let t = e[0];
				return { text: t.indexOf("&") === -1 ? t : t.replace(ie, (e, t) => t.startsWith("#x") ? String.fromCharCode(parseInt(t.slice(2), 16)) : t.startsWith("#") ? String.fromCharCode(parseInt(t.slice(1), 10)) : ne[t] || e) };
			},
			_render(e) {
				return e.text;
			}
		},
		[a.textBolded]: {
			_qualify: ["**", "__"],
			_match: W(De),
			_order: o.MED,
			_parse(e, t, n) {
				return { children: t(e[2], n) };
			},
			_render(t, n, r = {}) {
				return e("strong", { key: r.key }, n(t.children, r));
			}
		},
		[a.textEmphasized]: {
			_qualify: ["*", "_"],
			_match: W(Oe),
			_order: o.LOW,
			_parse(e, t, n) {
				return { children: t(e[2], n) };
			},
			_render(t, n, r = {}) {
				return e("em", { key: r.key }, n(t.children, r));
			}
		},
		[a.textEscaped]: {
			_qualify: ["\\"],
			_match: W(Ce),
			_order: o.HIGH,
			_parse(e) {
				return {
					text: e[1],
					type: a.text
				};
			}
		},
		[a.textMarked]: {
			_qualify: ["=="],
			_match: W(ke),
			_order: o.LOW,
			_parse: Y,
			_render(t, n, r = {}) {
				return e("mark", { key: r.key }, n(t.children, r));
			}
		},
		[a.textStrikethroughed]: {
			_qualify: ["~~"],
			_match: W(Ae),
			_order: o.LOW,
			_parse: Y,
			_render(t, n, r = {}) {
				return e("del", { key: r.key }, n(t.children, r));
			}
		}
	};
}, ut = (e = "", t, n = {}) => {
	let r = t.components ?? {}, i = (e) => t.slugify ? t.slugify(e, V) : V(e), o = ct(t, n), c = [], l = {}, u = (e, n) => {
		if (!n || !n.trim()) return null;
		let r = n.match(d);
		return r ? r.reduce((n, r) => {
			let i = r.indexOf("=");
			if (i !== -1) {
				let a = Je(r.slice(0, i)).trim(), o = He(r.slice(i + 1).trim()), c = s[a] ?? a;
				if (c === "ref") return n;
				n[c] = Xe(e, a, o, t.sanitizer ?? Ge), typeof n[c] == "string" && (D.test(n[c]) || k.test(n[c])) && (n[c] = b(n[c].trim()));
			} else r !== "style" && (n[s[r] ?? r] = !0);
			return n;
		}, {}) : null;
	}, f = [
		p,
		v,
		y,
		n.enforceAtxHeadings ? T : w,
		E,
		ue,
		Be,
		Ve,
		A
	], m = lt(o, t, n, c, l, u, (e) => {
		let t = e.replace(j, ""), r = t.length > 2048 ? t.slice(0, 2048) : t;
		return Q(n.disableParsingRawHTML ? f : [
			...f,
			he,
			D,
			ae,
			k,
			A
		], r);
	}, f), h = n.disableParsingRawHTML ? Object.keys(m).reduce((e, t) => (t !== a.htmlBlock && t !== a.htmlSelfClosing && (e[t] = m[t]), e), {}) : m, g = rt(h), _ = $(it(h, n.renderRule)), b = (e) => {
		let t = n.preserveFrontmatter ? e : e.replace(ne, ""), i = n.forceInline || !n.forceBlock && ye.test(t.replace(j, "")) === !1, a = _(g(i ? t : `${L(t).replace(j, "")}\n\n`, { inline: i }), { inline: i });
		for (; typeof a[a.length - 1] == "string" && !a[a.length - 1].trim();) a.pop();
		if (n.wrapper === null) return a;
		let s = n.wrapper ?? (i ? "span" : "div");
		if (a.length > 1 || n.forceWrapper) return o(s, { key: "outer" }, a);
		if (a.length === 1) {
			let e = a[0];
			if (typeof e == "string") {
				let t = { key: "outer" };
				if (!i && r) {
					let n = B(r, "p.props", {}) ?? {}, i = Ue(t.className, n.className), a = {
						...t,
						...n
					};
					return i && (a.className = i), o("span", a, e);
				}
				return o("span", t, e);
			}
			return e;
		}
		return o(s, { key: "outer" }, null);
	};
	if (typeof e != "string") throw console.error("intlayer: the first argument must be a string. Received", typeof e), Error("intlayer: the first argument must be a string");
	let x = b(e);
	return c.length ? o("div", null, x, o("footer", { key: "footer" }, ...c.map((e) => o("div", {
		id: i(e.identifier),
		key: e.identifier
	}, e.identifier, _(g(e.footnote, { inline: !0 }), { inline: !0 }))))) : x;
}, dt = (e, t, n = {}) => {
	let { components: r, namedCodesToUnicode: i, sanitizer: a, slugify: o, ...s } = n;
	return ut(e, {
		runtime: t,
		components: r,
		namedCodesToUnicode: i,
		sanitizer: a,
		slugify: o
	}, s);
}, ft = t({
	DURATION_DELAY_TRIGGER: () => 20,
	INLINE_SKIP_R: () => F,
	ORDERED: () => 1,
	ORDERED_LIST_BULLET: () => M,
	UNORDERED: () => 2,
	UNORDERED_LIST_BULLET: () => N,
	compileWithOptions: () => dt
});
export { i as n, ft as t };
var e = "translation", t = "enumeration", n = "condition", r = "insertion", i = "file", a = "object", o = "array", s = "reactNode", c = "markdown", l = "html";
export { l as a, a as c, i, s as l, n, r as o, t as r, c as s, o as t, e as u };
var e = {}, t = () => e;
export { t as getUnmergedDictionaries };
