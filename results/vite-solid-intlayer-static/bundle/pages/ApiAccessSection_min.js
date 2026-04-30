import { i as e, o as t, r as n } from "./__vite-browser-external-BeyPM-Ev.js";
import { a as r, c as i, f as a, i as o, l as s, o as c, s as ee, u as l } from "./getDictionary-BTlZiT1o.js";
import { c as u, o as d, s as f } from "./nodeType-CG6hvPHO.js";
import { n as te } from "./markdown-BZysCahS.js";
import { Dynamic as p, createComponent as m, insert as h, mergeProps as g, setAttribute as _, template as v } from "solid-js/web";
import { Suspense as y, createContext as b, createMemo as x, createUniqueId as S, lazy as C, useContext as w } from "solid-js";
var T = process.env.INTLAYER_EDITOR_ENABLED !== "false" && n?.enabled && typeof window < "u" && window.self !== window.top, E = process.env.INTLAYER_EDITOR_ENABLED === "false", D = (e) => E || !T ? e.children : m(p, {
	component: "intlayer-content-selector-wrapper",
	get "attr:key-path"() {
		return JSON.stringify(e.keyPath);
	},
	get "attr:dictionary-key"() {
		return e.dictionaryKey;
	},
	get children() {
		return e.children;
	}
}), O = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		return n === "value" ? t : n === "toString" ? () => String(t) : n === Symbol.toPrimitive ? (e) => e === "string" ? String(t) : e === "number" ? Number(t) : t : Reflect.get(e, n, r);
	} });
}, k = (e) => {
	if (typeof e == "string") return e;
	let { type: t, props: n } = ((e) => {
		if (e?.props && typeof e.props.children == "object") {
			let t = [], { children: n } = e.props;
			return Object.keys(n ?? {}).forEach((e) => {
				t.push(k(n?.[e]));
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
}, A = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", j = /\{\{\s*(.*?)\s*\}\}/g, M = (e, t = {}) => {
	if (!Object.values(t).some(A)) return {
		isSimple: !0,
		parts: e.replace(j, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(j), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, N = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false", P = process.env.INTLAYER_NODE_TYPE_SOLID_NODE === "false", F = process.env.INTLAYER_NODE_TYPE_MARKDOWN === "false", I = process.env.INTLAYER_NODE_TYPE_HTML === "false", L = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", R = process.env.INTLAYER_EDITOR_ENABLED === "false", z = F ? null : C(() => import("./MarkdownRenderer-iWMAOT1d.js").then((e) => ({ default: e.MarkdownMetadataRenderer }))), B = F ? null : C(() => import("./MarkdownRenderer-iWMAOT1d.js").then((e) => ({ default: e.MarkdownRenderer }))), V = I ? null : C(() => import("./HTMLRenderer-_RkJwpIh.js").then((e) => ({ default: e.HTMLRenderer }))), H = N ? c : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...r }) => O({
		...r,
		value: r.children,
		children: !R && n.enabled ? m(D, g(r, { get children() {
			return r.children;
		} })) : r.children
	})
}, U = P ? c : {
	id: "solid-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 || typeof Node < "u" && e instanceof Node,
	transform: (e, { plugins: t, ...r }) => O({
		...r,
		value: "[[solid-element]]",
		children: !R && n.enabled ? m(D, g(r, { get children() {
			return typeof Node < "u" && e instanceof Node ? e : k(e);
		} })) : typeof Node < "u" && e instanceof Node ? e : k(e)
	})
}, W = (e, t) => {
	let n = M(e, t);
	return n.isSimple, n.parts;
}, ne = L ? c : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: f }], i = e[f];
		return (e) => {
			let a = {
				id: "insertion-string-plugin",
				canHandle: (e) => typeof e == "string",
				transform: (n, r, i) => {
					let a = W(i(n, {
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
}, G = F ? c : {
	id: "markdown-string-plugin",
	canHandle: (e) => typeof e == "string",
	transform: (e, t, r) => {
		let { plugins: i, ...a } = t, o = r(te(e) ?? {}, {
			plugins: [{
				id: "markdown-metadata-plugin",
				canHandle: (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean" || !e,
				transform: (t, r) => O({
					...r,
					value: t,
					children: !R && n.enabled ? m(D, g(a, { get children() {
						return m(y, {
							fallback: e,
							get children() {
								return m(z, g(a, {
									get metadataKeyPath() {
										return r.keyPath;
									},
									children: e
								}));
							}
						});
					} })) : m(y, {
						fallback: e,
						get children() {
							return m(z, g(a, {
								get metadataKeyPath() {
									return r.keyPath;
								},
								children: e
							}));
						}
					})
				})
			}],
			dictionaryKey: a.dictionaryKey,
			keyPath: []
		}), s = (r) => O({
			...t,
			value: e,
			children: !R && n.enabled ? m(D, g(a, { get children() {
				return m(y, {
					fallback: e,
					get children() {
						return m(B, g(a, {
							components: r,
							children: e
						}));
					}
				});
			} })) : m(y, {
				fallback: e,
				get children() {
					return m(B, g(a, {
						components: r,
						children: e
					}));
				}
			}),
			additionalProps: { metadata: o }
		}), c = s();
		return new Proxy(c, { get(t, n, r) {
			return n === "value" ? e : n === "metadata" ? o : n === "use" ? (e) => s(e) : Reflect.get(t, n, r);
		} });
	}
}, K = F ? c : {
	id: "markdown-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "markdown",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: u }], i = e[u];
		return n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [G, ...t.plugins ?? []]
		});
	}
}, q = I ? c : {
	id: "html-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "html",
	transform: (e, t) => {
		let r = e[d], { plugins: i, ...a } = t, o = (e) => O({
			...a,
			value: r,
			children: !R && n.enabled ? m(D, g(a, { get children() {
				return m(y, {
					fallback: r,
					get children() {
						return m(V, g(a, {
							html: r,
							components: e
						}));
					}
				});
			} })) : m(y, {
				fallback: r,
				get children() {
					return m(V, g(a, {
						html: r,
						components: e
					}));
				}
			})
		}), s = [o()];
		return new Proxy(s, { get(e, t, n) {
			return t === "value" ? r : t === "use" ? (e) => o(e) : Reflect.get(e, t, n);
		} });
	}
}, J = /* @__PURE__ */ new Map(), Y = (t, n = !0) => {
	let a = `${t ?? e.defaultLocale}_${n}`;
	if (J.has(a)) return J.get(a);
	let c = [
		l(t ?? e.defaultLocale, n ? e.defaultLocale : void 0),
		r,
		o,
		s(t ?? e.defaultLocale),
		ee,
		i,
		H,
		U,
		ne,
		K,
		q
	];
	return J.set(a, c), c;
}, X = (e, t) => a(e, t, Y(t));
process.env.INTLAYER_ROUTING_REWRITE_RULES;
var Z = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false", re = process.env.INTLAYER_ROUTING_STORAGE_LOCALSTORAGE === "false", Q = process.env.INTLAYER_ROUTING_STORAGE_SESSIONSTORAGE === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var ie = (n = $) => {
	let { locales: r } = e;
	if (n?.isCookieEnabled === !1) return;
	let i = (e) => !!e && r.includes(e);
	if (!Z) for (let e = 0; e < (t.storage.cookies ?? []).length; e++) try {
		let r = n?.getCookie?.(t.storage.cookies[e].name);
		if (i(r)) return r;
	} catch {}
	if (!re) for (let e = 0; e < (t.storage.localStorage ?? []).length; e++) try {
		let r = n?.getLocaleStorage?.(t.storage.localStorage[e].name);
		if (i(r)) return r;
	} catch {}
	if (!Q && t.storage.sessionStorage) for (let e = 0; e < t.storage.sessionStorage.length; e++) try {
		let r = n?.getSessionStorage?.(t.storage.sessionStorage[e].name);
		if (i(r)) return r;
	} catch {}
}, $ = {
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
}, ae = ie($);
process.env.INTLAYER_EDITOR_ENABLED;
var oe = b({
	locale: () => ae ?? e?.defaultLocale,
	setLocale: () => null
}), se = (e, t) => {
	let n = w(oe) ?? {};
	return x(() => {
		let r = n?.locale();
		return X(e, t ?? r);
	});
}, { defaultLocale: ce, locales: le } = e, ue = v("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\"></h2><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><div class=\"flex gap-2\"><input readonly defaultvalue=sk_bench_xxxxxxxxxxxxxxxxxxxx class=\"flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground\"><button type=button class=\"rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent\"></button></div><p class=\"mt-1 text-xs text-muted-foreground\">");
function de() {
	let e = se("api-access-section"), t = S();
	return (() => {
		var n = ue(), r = n.firstChild, i = r.nextSibling.firstChild, a = i.nextSibling, o = a.firstChild, s = o.nextSibling, c = a.nextSibling;
		return h(r, () => e().apiAccess), _(i, "for", t), h(i, () => e().apiKey), _(o, "id", t), h(s, () => e().copy), h(c, () => e().useThisKeyToAccess), n;
	})();
}
export { de as default };
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
import { n as e } from "./markdown-BZysCahS.js";
import { t } from "./getContentNodeByKeyPath-YzfTlexn.js";
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
import { t as e } from "./rolldown-runtime-7cpC8i0w.js";
var t = new Proxy({}, {
	get(e, t) {
		return (typeof window < "u" ? window.INTLAYER_CONFIG : void 0)?.[t];
	},
	has(e, t) {
		let n = typeof window < "u" ? window.INTLAYER_CONFIG : void 0;
		return n != null && t in n;
	}
}), n = t.internationalization;
t.dictionary;
var r = t.routing;
t.content, t.system;
var i = t.editor, a = t.log;
t.ai, t.build, t.compiler, t.schemas, t.plugins;
var o = e(((e, t) => {
	t.exports = {};
}));
export { a, n as i, t as n, r as o, i as r, o as t };
import { n as e, t } from "./__vite-browser-external-BeyPM-Ev.js";
var n = t(), r = (t = e) => {
	let { system: r } = t, { unmergedDictionariesDir: i } = r, a = {};
	if ((0, n.existsSync)(i)) {
		let e = (0, n.readdirSync)(i).filter((e) => e.endsWith(".json"));
		for (let t of e) {
			let e = (0, n.basename)(t, (0, n.extname)(t)), r = (0, n.readFileSync)((0, n.join)(i, t), "utf-8");
			a[e] = JSON.parse(r);
		}
	}
	return a;
};
export { r as getUnmergedDictionaries };
import { n as e, r as t } from "./__vite-browser-external-BeyPM-Ev.js";
import { n, r } from "./getDictionary-BTlZiT1o.js";
import { f as i } from "./nodeType-CG6hvPHO.js";
import { t as a } from "./getContentNodeByKeyPath-YzfTlexn.js";
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
			let e = this._locale || void 0, a = r(i, {
				locale: e,
				dictionaryKey: this._dictionaryKey,
				keyPath: t
			}, n(e));
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
			let e = (await import("./esm-BtD6xXvR.js")).getUnmergedDictionaries(), t = Object.fromEntries(Object.values(e).flat().map((e) => [e.localId, e]));
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
import { f as e } from "./nodeType-CG6hvPHO.js";
var t = (t, n, r) => {
	let i = structuredClone(t);
	for (let t of n) r && i?.nodeType === "translation" && (i = i?.[e]?.[r]), (t.type === "object" || t.type === "array") && (i = i?.[t.key]), (t.type === "translation" || t.type === "condition" || t.type === "enumeration") && (i = i?.[t.type]?.[t.key]), (t.type === "markdown" || t.type === "html" || t.type === "insertion" || t.type === "file") && (i = i?.[t.type]);
	return i;
};
export { t };
import { r as e } from "./rolldown-runtime-7cpC8i0w.js";
import { a as t, i as n, n as r, t as i } from "./__vite-browser-external-BeyPM-Ev.js";
import { a, f as o, l as s, n as c, r as l, s as u, t as ee, u as d } from "./nodeType-CG6hvPHO.js";
var te = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[`${t}`] ?? e.fallback ?? e[r];
}, f = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => f(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => f(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ee,
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
					type: d,
					key: r
				}]
			}, i = f(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, p = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, m = (e, t) => e[p(e, t) ?? "fallback"], h = (e) => e === "m" || e === "male" ? "male" : e === "f" || e === "female" ? "female" : "fallback", g = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[h(t)] ?? e.fallback ?? e[r];
}, _ = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), v = "\x1B[0m", y = "\x1B[34m", b = "\x1B[31m", x = "\x1B[32m", S = "\x1B[38;5;3m", C, w = (e) => C === void 0 ? e : C, ne = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = w(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, re = (e, t) => (n, r) => ne(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), T = (e, t, n) => t ? `${t}${e}${n ? typeof n == "boolean" ? v : n : v}` : e, ie = (e, t = S, n = v) => [e].flat().map((e) => T(e, t, n)).join(", ");
T("✗", b), T("✓", x), T("⏲", y);
var ae = ((t) => e === void 0 ? typeof Proxy < "u" ? new Proxy(t, { get: (t, n) => (e === void 0 ? t : e)[n] }) : t : e)(function(t) {
	if (e !== void 0) return e.apply(this, arguments);
	throw Error("Calling `require` for \"" + t + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), E = i(), D = typeof import.meta.url == "string" ? (0, E.createRequire)(import.meta.url) : ae, O = (e = r) => {
	let { system: t, build: n } = e, i = (0, E.join)(t.mainDir, "dictionaries.cjs"), a = {};
	return (0, E.existsSync)(i) && (a = (n.require ?? D)(i)), a ?? {};
}, k = (e = "") => new Proxy(() => e, {
	get: (t, n) => {
		if (n === "toJSON" || n === Symbol.toPrimitive || n === "toString") return () => e;
		if (n !== "then") return n === Symbol.iterator ? function* () {
			yield e;
		} : k(e ? `${e}.${String(n)}` : String(n));
	},
	apply: () => e
}), A = /* @__PURE__ */ new Map(), j = (e, n, r) => {
	let i = O()[e];
	if (!i) return re({ log: t })(`Dictionary ${ie(e)} was not found. Using fallback proxy.`, {
		level: "warn",
		isVerbose: !0
	}), k(e);
	let a = `${e}_${n ?? "default"}_${r ? "custom_plugins" : "default_plugins"}`;
	if (A.has(a)) return A.get(a);
	let o = $(i, n, r);
	return A.set(a, o), o;
}, M = (e, t, n) => {
	let r = j(e, n?.locale, n?.plugins);
	if (typeof t == "string") {
		let e = t.split("."), n = r;
		for (let t of e) if (n = n?.[t], n === void 0) return r;
		return n;
	}
	return r;
}, N = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, P = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (N(e) && N(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : P(e[r], t[r]));
		return n;
	}
	return e;
}, F = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => P(e, t));
}, I = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", L = process.env.INTLAYER_NODE_TYPE_ENUMERATION === "false", R = process.env.INTLAYER_NODE_TYPE_CONDITION === "false", z = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", B = process.env.INTLAYER_NODE_TYPE_GENDER === "false", V = process.env.INTLAYER_NODE_TYPE_NESTED === "false", H = process.env.INTLAYER_NODE_TYPE_FILE === "false", U = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, W = (e, t) => I ? U : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, s = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: o,
					key: e
				}]
			};
			s[e] = i(a[e], t);
		}
		return F(s, e, t);
	}
}, G = L ? U : {
	id: "enumeration-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "enumeration",
	transform: (e, t, n) => {
		let r = e[l], i = {};
		for (let e in r) {
			let a = r[e];
			i[e] = n(a, {
				...t,
				children: a,
				keyPath: [...t.keyPath, {
					type: l,
					key: e
				}]
			});
		}
		return (e) => {
			let t = m(i, typeof e == "number" ? e : e.count);
			return typeof t == "function" && typeof e == "object" ? t(e) : t;
		};
	}
}, K = R ? U : {
	id: "condition-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "condition",
	transform: (e, t, n) => {
		let r = e[c], i = {};
		for (let e in r) {
			let a = r[e];
			i[e] = n(a, {
				...t,
				children: a,
				keyPath: [...t.keyPath, {
					type: c,
					key: e
				}]
			});
		}
		return (e) => {
			let t = te(i, typeof e == "boolean" ? e : e.value);
			return typeof t == "function" && typeof e == "object" ? t(e) : t;
		};
	}
}, q = z ? U : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: u }], i = e[u], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string",
			transform: (e, n, r) => {
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = _(i, e);
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
}, J = B ? U : {
	id: "gender-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "gender",
	transform: (e, t, n) => {
		let r = e[a], i = {};
		for (let e in r) {
			let o = r[e];
			i[e] = n(o, {
				...t,
				children: o,
				keyPath: [...t.keyPath, {
					type: a,
					key: e
				}]
			});
		}
		return (e) => g(i, e);
	}
}, Y = (e) => V ? U : {
	id: "nested-plugin",
	canHandle: (e) => typeof e == "object" && (e?.nodeType === "nested" || e?.nodeType === "n"),
	transform: (t, n) => M(t[s].dictionaryKey, t[s].path, {
		...n,
		locale: e ?? n.locale
	})
}, X = H ? U : {
	id: "file-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "file",
	transform: (e, t, n) => n(e.content, {
		...t,
		children: e.content
	})
}, Z = (e, t = !0) => [
	W(e ?? n.defaultLocale, t ? n.defaultLocale : void 0),
	G,
	K,
	q,
	Y(e ?? n.defaultLocale),
	X,
	J
], Q = (e, t, n = []) => f(e, {
	...t,
	plugins: n
}), $ = (e, t, n = Z(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return Q(e.content, r, n);
};
export { G as a, J as c, F as d, j as f, K as i, Y as l, Z as n, U as o, Q as r, X as s, $ as t, W as u };
import { n as e } from "./rolldown-runtime-7cpC8i0w.js";
var t = new Set([
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
		a(), s();
		let e = i();
		if (e === "{") return v();
		if (e === "\"" || e === "'") return c(e);
		let t = n.indexOf("\n", r), o = n.slice(r, t === -1 ? n.length : t);
		return /: /.test(o) ? h() : u(l("\n"));
	}, m = () => {
		let e = n.lastIndexOf("\n", r - 1) + 1, t = 0;
		for (let i = e; i < r && n[i] === " "; i++) t++;
		return t;
	}, h = () => {
		let e = {}, t = m();
		for (; !o();) {
			let d = r, f = d === 0 || n[d - 1] === "\n";
			if (s(), f && m() <= t) {
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
	if (n.startsWith("]") || n.startsWith("}")) throw SyntaxError("Unexpected closing bracket");
	let b;
	if (b = n.startsWith("[") ? f() : n.startsWith("{") ? v() : y(n) ? _("") : d(""), s(), !o()) throw SyntaxError("Unexpected trailing characters");
	return b;
}, r = (e) => {
	try {
		let t = e.split(/\r?\n/), r = t.find((e) => e.trim() !== "");
		if (!r || r.trim() !== "---") return {};
		let i = -1;
		for (let e = 1; e < t.length; e++) if (t[e].trim() === "---") {
			i = e;
			break;
		}
		return i === -1 ? {} : n(t.slice(1, i).join("\n")) ?? {};
	} catch {
		return {};
	}
}, i = {
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
}, a = {
	MAX: 0,
	HIGH: 1,
	MED: 2,
	LOW: 3,
	MIN: 4
}, o = (/* @__PURE__ */ "allowFullScreen.allowTransparency.autoComplete.autoFocus.autoPlay.cellPadding.cellSpacing.charSet.classId.colSpan.contentEditable.contextMenu.crossOrigin.encType.formAction.formEncType.formMethod.formNoValidate.formTarget.frameBorder.hrefLang.inputMode.keyParams.keyType.marginHeight.marginWidth.maxLength.mediaGroup.minLength.noValidate.radioGroup.readOnly.rowSpan.spellCheck.srcDoc.srcLang.srcSet.tabIndex.useMap".split(".")).reduce((e, t) => (e[t.toLowerCase()] = t, e), {
	class: "className",
	for: "htmlFor"
}), s = {
	amp: "&",
	apos: "'",
	gt: ">",
	lt: "<",
	nbsp: "\xA0",
	quot: "“"
}, c = [
	"style",
	"script",
	"pre"
], l = [
	"src",
	"href",
	"data",
	"formAction",
	"srcDoc",
	"action"
], u = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, d = /\n{2,}$/, f = /^(\s*>[\s\S]*?)(?=\n\n|$)/, p = /^ *> ?/gm, m = /^(?:\[!([^\]]*)\]\n)?([\s\S]*)/, h = /^ {2,}\n/, g = /^(?:([-*_])( *\1){2,}) *(?:\n *)+\n/, _ = /^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/, v = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, y = /^(`+)((?:\\`|(?!\1)`|[^`])+)\1/, b = /^(?:\n *)*\n/, x = /\r\n?/g, ee = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/, te = /^\[\^([^\]]+)]/, S = /\f/g, C = /^---[ \t]*\n(.|\n)*?\n---[ \t]*\n/, ne = /^\s*?\[(x|\s)\]/, re = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, w = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, T = /^([^\n]+)\n *(=|-)\2{2,} *\n/, E = /^ *(?!<[a-zA-Z][^ >/]* ?\/>)<([a-zA-Z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i, ie = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, D = /^<!--[\s\S]*?(?:-->)/, ae = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, O = /^ *<([a-zA-Z][a-zA-Z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, k = /^ *<([A-Z][a-zA-Z0-9]*)(?:\s+((?:<.*?>|[^>])*))?>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/, A = /^\{.*\}$/, oe = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, se = /^<([^ >]+[:@/][^ >]+)>/, ce = /-([a-z])?/gi, le = /^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/, ue = /(^ *\||\| *$)/g, de = /^ *:-+: *$/, fe = /^ *:-+ *$/, pe = /^ *-+: *$/, me = /^[^\n]+(?: {2}\n|\n{2,})/, he = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, ge = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, _e = /^\[([^\]]*)\] ?\[([^\]]*)\]/, ve = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, ye = /\t/g, j = /^\n+/, M = /^\n*([ \t]*)/, be = /(?:^|\n)( *)$/, N = "(?:\\d+\\.)", P = "(?:[*+-])", xe = /^\\([^0-9A-Za-z\s])/, Se = /\\([^0-9A-Za-z\s])/g, Ce = /^[\s\S](?:(?! {2}\n|[0-9]\.|http)[^=*_~\-\n:<`\\[!])*/, we = /^(:[a-zA-Z0-9-_]+:)/, F = (e) => `(?=[\\s\\S]+?\\1${e ? "\\1" : ""})`, I = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|\\\\[^\\s]|[\\s\\S])+?)", Te = RegExp(`^([*_])\\1${F(1)}${I}\\1\\1(?!\\1)`), Ee = RegExp(`^([*_])${F(0)}${I}\\1(?!\\1)`), De = RegExp(`^(==)${F(0)}${I}\\1`), Oe = RegExp(`^(~~)${F(0)}${I}\\1`), ke = (e) => "( *)(" + (e === 1 ? N : P) + ") +", L = ke(1), Ae = ke(2), je = (e) => RegExp("^" + (e === 1 ? L : Ae)), Me = je(1), Ne = je(2), Pe = (e) => RegExp("^" + (e === 1 ? L : Ae) + "[^\\n]*(?:\\n(?!\\1" + (e === 1 ? N : P) + " )[^\\n]*)*(\\n|$)", "gm"), Fe = Pe(1), Ie = Pe(2), Le = (e) => {
	let t = e === 1 ? N : P;
	return RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)");
}, Re = Le(1), ze = Le(2), R = (e) => {
	let t = e.length;
	for (; t > 0 && e[t - 1] <= " ";) t--;
	return e.slice(0, t);
}, z = (e, t) => e.startsWith(t), Be = (e) => {
	let t = e[0];
	return (t === "\"" || t === "'") && e.length >= 2 && e[e.length - 1] === t ? e.slice(1, -1) : e;
}, B = (e) => e && e.replace(Se, "$1"), Ve = (...e) => e.filter(Boolean).join(" "), V = (e, t, n) => {
	let r = e, i = t.split(".");
	for (; i.length && (r = r[i[0]], r !== void 0);) i.shift();
	return r ?? n;
}, H = (e) => e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase(), He = /(javascript|vbscript|data(?!:image)):/i, Ue = (e) => {
	try {
		let t = decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "");
		if (He.test(t)) return console.warn("Input contains an unsafe JavaScript/VBScript/data expression, it will not be rendered.", t), null;
	} catch {
		return console.warn("Input could not be decoded due to malformed syntax or characters, it will not be rendered.", e), null;
	}
	return e;
}, We = (e) => {
	let t = performance.now(), n = e.replace(x, "\n").replace(S, "").replace(ye, "    "), r = performance.now() - t;
	return r > 20 && console.log(`normalizeWhitespace: ${r.toFixed(3)}ms, source length: ${e.length}`), n;
}, Ge = (e, t) => {
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
}, Ke = (e) => (e.indexOf("-") !== -1 && e.match(ae) === null && (e = e.replace(ce, (e, t) => t.toUpperCase())), e), qe = (e) => {
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
}, Je = (e, t, n, r) => t === "style" ? qe(n).reduce((t, [n, i]) => {
	let a = n.replace(/(-[a-z])/g, (e) => e[1].toUpperCase());
	return t[a] = r(i, e, n), t;
}, {}) : l.indexOf(t) === -1 ? (n.match(A) && (n = B(n.slice(1, n.length - 1))), n === "true" ? !0 : n === "false" ? !1 : n) : r(B(n), e, t), Ye = (e) => pe.test(e) ? "right" : de.test(e) ? "center" : (fe.test(e), "left"), Xe = (e) => e.replace(ue, "").split("|").map(Ye), Ze = (e, t, n, r) => {
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
}, Qe = (e, t, n) => {
	let r = performance.now(), i = e.trim().split("\n"), a = i.map((e) => Ze(e, t, n, !0)), o = performance.now() - r;
	return o > 20 && console.log(`parseTableCells: ${o.toFixed(3)}ms, source length: ${e.length}, rows count: ${i.length}`), a;
}, $e = (e, t, n) => {
	if (Array.isArray(n)) {
		for (let t = 0; t < n.length; t++) if (z(e, n[t])) return !0;
		return !1;
	}
	return n(e, t);
}, U = (e) => (e.inline = 1, e), W = (e) => U((t, n) => n.inline ? e.exec(t) : null), G = (e) => U((t, n) => n.inline || n.simple ? e.exec(t) : null), K = (e) => (t, n) => n.inline || n.simple ? null : e.exec(t), q = (e) => U((t, n) => typeof e == "function" ? e(t, n) : e.exec(t)), J = (e, t, n) => {
	let r = performance.now(), i = n.inline ?? !1, a = n.simple ?? !1;
	n.inline = !0, n.simple = !0;
	let o = e(t, n);
	n.inline = i, n.simple = a;
	let s = performance.now() - r;
	return s > 20 && console.log(`parseInline: ${s.toFixed(3)}ms, children length: ${t.length}, result count: ${o.length}`), o;
}, et = (e, t, n) => {
	let r = performance.now(), i = n.inline ?? !1, a = n.simple ?? !1;
	n.inline = !1, n.simple = !0;
	let o = e(t, n);
	n.inline = i, n.simple = a;
	let s = performance.now() - r;
	return s > 20 && console.log(`parseSimpleInline: ${s.toFixed(3)}ms, children length: ${t.length}, result count: ${o.length}`), o;
}, Y = (e, t, n = {}) => {
	let r = performance.now(), i = n.inline || !1;
	n.inline = !1;
	let a = R(t), o = e(/\n\n$/.test(a) === !1 ? a.endsWith("\n") ? `${a}\n` : `${a}\n\n` : a, n);
	n.inline = i;
	let s = performance.now() - r;
	return s > 20 && console.log(`parseBlock: ${s.toFixed(3)}ms, children length: ${t.length}, result count: ${o.length}`), o;
}, X = (e, t, n) => ({ children: J(t, e[2], n) }), Z = () => ({}), Q = () => null, tt = (e, t) => {
	for (let n = 0; n < e.length; n++) if (e[n].test(t)) return !0;
	return !1;
}, nt = (e) => {
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
				if (c._qualify && !$e(t, i, c._qualify)) {
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
	return i > 20 && console.log(`parserFor: ${i.toFixed(3)}ms, rules count: ${n.length}`), (e, t) => r(We(e), t);
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
}, rt = (e, t) => (n, r, i) => {
	let a = performance.now(), o = e[n.type]?._render, s = t ? t(() => o?.(n, r, i), n, r, i) : o?.(n, r, i), c = performance.now() - a;
	return c > 20 && console.log(`createRenderer: ${c.toFixed(3)}ms, ast type: ${n.type}, hasUserRender: ${!!t}`), s;
}, it = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, at = RegExp("^\\[((?:\\[[^\\[\\]]*(?:\\[[^\\[\\]]*\\][^\\[\\]]*)*\\]|[^\\[\\]])*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"), ot = (e, t) => {
	if (typeof e != "string") return e;
	let n = V(t, e);
	if (!n && typeof e == "string") {
		let r = e.toLowerCase(), i = Object.keys(t).find((e) => e.toLowerCase() === r);
		i && (n = V(t, i));
	}
	return n || e;
}, st = (e, t) => {
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
		let o = typeof e == "string", s = Ve(t?.className, t?.class), c = {}, l = !1;
		if (t) for (let e in t) {
			let n = t[e];
			n != null && (e === "className" || e === "class" ? l ||= (s && (c.className = s), !0) : c[e] = n);
		}
		!l && s && (c.className = s);
		let u = c;
		n.normalizeProps && o && (u = n.normalizeProps(e, c));
		let d = ot(e, r);
		return n.createElement(d, u, ...a.length === 1 ? [a[0]] : a);
	};
}, ct = (e, t, n, r, o, l, u, x) => {
	let S = (e) => t.slugify ? t.slugify(e, H) : H(e), C = t.sanitizer ?? Ue, ae = t.namedCodesToUnicode ? {
		...s,
		...t.namedCodesToUnicode
	} : s, A = (t) => {
		let n = t === 1, r = n ? Re : ze, i = n ? Fe : Ie, o = n ? Me : Ne;
		return {
			_qualify: (e) => o.test(e),
			_match: U((e, t) => {
				let n = be.exec(t.prevCapture ?? ""), i = t.list ?? (!t.inline && !t.simple);
				if (n && i) {
					let t = (n[1] || "") + e;
					return r.exec(t);
				}
				return null;
			}),
			_order: a.HIGH,
			_parse(e, t, r) {
				let a = e[2], s = n ? +a.slice(0, -1) : void 0, c = e[0].replace(d, "\n").match(i);
				if (!c) return {
					items: [],
					ordered: n,
					start: s
				};
				let l = !1;
				return {
					items: c.map((e, n) => {
						let i = o.exec(e), a = i ? i[0].length : 0, s = RegExp(`^ {1,${a}}`, "gm"), u = e.replace(s, "").replace(o, ""), d = n === c.length - 1, f = u.indexOf("\n\n") !== -1 || d && l;
						l = f;
						let p = r.inline, m = r.list;
						r.list = !0;
						let h;
						f ? (r.inline = !1, h = `${R(u)}\n\n`) : (r.inline = !0, h = R(u));
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
	}, ce = (e, t) => {
		if (t.inline || t.simple || t.inHTML && e.indexOf("\n\n") === -1 && t.prevCapture?.indexOf("\n\n") === -1) return null;
		let n = 0;
		for (;;) {
			let t = e.indexOf("\n", n), r = e.slice(n, t === -1 ? void 0 : t + 1);
			if (tt(x, r) || t === -1 || !r.trim()) break;
			n = t + 1;
		}
		let r = e.slice(0, n);
		if (r === "") return null;
		let i = R(r);
		return i === "" ? null : [
			r,
			void 0,
			i
		];
	};
	return {
		[i.blockQuote]: {
			_qualify: [">"],
			_match: K(f),
			_order: a.HIGH,
			_parse(e, t, n) {
				let r = e[0].replace(p, "").match(m), i = r?.[1], a = r?.[2] ?? "";
				return {
					alert: i,
					children: a.indexOf("\n") === -1 ? J(t, a, n) : Y(t, a, n)
				};
			},
			_render(t, n, r = {}) {
				let a = { key: r.key };
				return t.alert && (a.className = `markdown-alert-${S(t.alert.toLowerCase())}`, t.children.unshift({
					attrs: {},
					children: [{
						type: i.text,
						text: t.alert
					}],
					noInnerParse: !0,
					type: i.htmlBlock,
					tag: "header"
				})), e("blockquote", a, n(t.children, r));
			}
		},
		[i.breakLine]: {
			_qualify: ["  "],
			_match: q(h),
			_order: a.HIGH,
			_parse: Z,
			_render(t, n, r = {}) {
				return e("br", { key: r.key });
			}
		},
		[i.breakThematic]: {
			_qualify: [
				"--",
				"__",
				"**",
				"- ",
				"* ",
				"_ "
			],
			_match: K(g),
			_order: a.HIGH,
			_parse: Z,
			_render(t, n, r = {}) {
				return e("hr", { key: r.key });
			}
		},
		[i.codeBlock]: {
			_qualify: ["    "],
			_match: K(v),
			_order: a.MAX,
			_parse(e) {
				return {
					type: i.codeBlock,
					lang: void 0,
					text: B(R(e[0].replace(/^ {4}/gm, "")))
				};
			},
			_render(t, n, r = {}) {
				let i = { ...t.attrs ?? {} }, a = t.lang ? `lang-${t.lang}` : "lang-plaintext";
				return i.className = i.className ? `${i.className} ${a}` : a, t.lang && !i.lang && (i.lang = t.lang), e("pre", { key: r.key }, e("code", i, t.text));
			}
		},
		[i.codeFenced]: {
			_qualify: ["```", "~~~"],
			_match: K(_),
			_order: a.MAX,
			_parse(e) {
				return {
					attrs: l("code", e[3] ?? ""),
					lang: e[2] || void 0,
					text: e[4],
					type: i.codeBlock
				};
			}
		},
		[i.codeInline]: {
			_qualify: ["`"],
			_match: G(y),
			_order: a.LOW,
			_parse(e) {
				return { text: B(e[2]) };
			},
			_render(t, n, r = {}) {
				return e("code", { key: r.key }, t.text);
			}
		},
		[i.footnote]: {
			_qualify: ["[^"],
			_match: K(ee),
			_order: a.MAX,
			_parse(e) {
				return r.push({
					footnote: e[2],
					identifier: e[1]
				}), {};
			},
			_render: Q
		},
		[i.footnoteReference]: {
			_qualify: ["[^"],
			_match: W(te),
			_order: a.HIGH,
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
		[i.gfmTask]: {
			_qualify: ["[ ]", "[x]"],
			_match: W(ne),
			_order: a.HIGH,
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
		[i.heading]: {
			_qualify: ["#"],
			_match: K(n.enforceAtxHeadings ? w : re),
			_order: a.HIGH,
			_parse(e, t, n) {
				return {
					children: J(t, e[2], n),
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
		[i.headingSetext]: {
			_qualify: (e) => {
				let t = e.indexOf("\n");
				return t > 0 && t < e.length - 1 && (e[t + 1] === "=" || e[t + 1] === "-");
			},
			_match: K(T),
			_order: a.MAX,
			_parse(e, t, n) {
				return {
					children: J(t, e[1], n),
					level: e[2] === "=" ? 1 : 2,
					type: i.heading
				};
			}
		},
		[i.htmlBlock]: {
			_qualify: (e) => {
				if (n.disableParsingRawHTML) return !1;
				let t = e.match(/^ *<([a-z][a-z0-9:-]*)\b/i);
				if (!t) return !1;
				let r = t[1];
				return e.toLowerCase().indexOf(`</${r.toLowerCase()}>`) !== -1;
			},
			_match: q(E),
			_order: a.HIGH,
			_parse(e, t, n) {
				let r = e[3].match(M)?.[1] ?? "", i = Ge(e[3], r), a = u(i) ? Y : J, o = e[1].trim(), s = c.indexOf(o.toLowerCase()) !== -1, d = s ? o.toLowerCase() : o, f = {
					attrs: l(d, e[2] ?? ""),
					noInnerParse: s,
					tag: d
				};
				if (n.inAnchor = n.inAnchor || o.toLowerCase() === "a", s) f.text = e[3];
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
		[i.htmlComment]: {
			_qualify: ["<!"],
			_match: q(D),
			_order: a.HIGH,
			_parse: Z,
			_render: Q
		},
		[i.htmlSelfClosing]: {
			_qualify: (e) => n.disableParsingRawHTML ? !1 : /^ *<([a-zA-Z][a-zA-Z0-9:]*)[\s>/]/.test(e),
			_match: q(O),
			_order: a.HIGH,
			_parse(e) {
				let t = e[1].trim();
				return {
					attrs: l(t, e[2] || ""),
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
		[i.customComponent]: {
			_qualify: (e) => /^ *<([A-Z][a-zA-Z0-9]*)/.test(e),
			_match: q(k),
			_order: a.MAX,
			_parse(e, t, n) {
				let r = e[3].match(M)?.[1] ?? "", i = Ge(e[3], r), a = u(i) ? Y : J, o = e[1].trim(), s = {
					attrs: l(o, e[2] ?? ""),
					noInnerParse: !1,
					tag: o
				}, c = n.inHTML;
				return n.inHTML = !0, s.children = a(t, i, n), n.inHTML = c, s;
			},
			_render(t, n, r = {}) {
				return e(t.tag, {
					key: r.key,
					...t.attrs ?? {}
				}, t.text ?? (t.children ? n(t.children, r) : ""));
			}
		},
		[i.paragraph]: {
			_match: ce,
			_order: a.LOW,
			_parse: X,
			_render(t, n, r = {}) {
				return e("p", { key: r.key }, n(t.children, r));
			}
		},
		[i.image]: {
			_qualify: ["!["],
			_match: G(it),
			_order: a.HIGH,
			_parse(e) {
				return {
					alt: B(e[1]),
					target: B(e[2]),
					title: B(e[3])
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
		[i.link]: {
			_qualify: ["["],
			_match: W(at),
			_order: a.LOW,
			_parse(e, t, n) {
				return {
					children: et(t, e[1], n),
					target: B(e[2]),
					title: B(e[3])
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
		[i.linkAngleBraceStyleDetector]: {
			_qualify: ["<"],
			_match: W(se),
			_order: a.MAX,
			_parse(e) {
				let t = e[1], n = !1;
				return t.indexOf("@") !== -1 && t.indexOf("//") === -1 && (n = !0, t = t.replace("mailto:", "")), {
					children: [{
						text: t,
						type: i.text
					}],
					target: n ? `mailto:${t}` : t,
					type: i.link
				};
			}
		},
		[i.linkBareUrlDetector]: {
			_qualify: (e, t) => !!(t.inline && !t.inAnchor && !n.disableAutoLink && (z(e, "http://") || z(e, "https://"))),
			_match: W(oe),
			_order: a.MAX,
			_parse(e) {
				return {
					children: [{
						text: e[1],
						type: i.text
					}],
					target: e[1],
					type: i.link
				};
			}
		},
		[i.newlineCoalescer]: {
			_match: K(b),
			_order: a.LOW,
			_parse: Z,
			_render() {
				return "\n";
			}
		},
		[i.orderedList]: A(1),
		[i.unorderedList]: A(2),
		[i.ref]: {
			_qualify: ["["],
			_match: q(he),
			_order: a.MAX,
			_parse(e) {
				return o[e[1]] = {
					target: e[2],
					title: e[4]
				}, {};
			},
			_render: Q
		},
		[i.refImage]: {
			_qualify: ["!["],
			_match: G(ge),
			_order: a.MAX,
			_parse(e) {
				return {
					alt: e[1] ? B(e[1]) : void 0,
					ref: e[2]
				};
			},
			_render(t, n, r = {}) {
				let i = o[t.ref];
				return i ? e("img", {
					key: r.key,
					alt: t.alt,
					src: C(i.target, "img", "src") ?? void 0,
					title: i.title
				}) : null;
			}
		},
		[i.refLink]: {
			_qualify: (e) => e[0] === "[" && e.indexOf("](") === -1,
			_match: W(_e),
			_order: a.MAX,
			_parse(e, t, n) {
				return {
					children: et(t, e[1], n),
					fallbackChildren: e[0],
					ref: e[2]
				};
			},
			_render(t, n, r = {}) {
				let i = o[t.ref];
				return i ? e("a", {
					key: r.key,
					href: C(i.target, "a", "href") ?? void 0,
					title: i.title
				}, n(t.children, r)) : e("span", { key: r.key }, t.fallbackChildren);
			}
		},
		[i.table]: {
			_qualify: ["|"],
			_match: K(le),
			_order: a.HIGH,
			_parse(e, t, n) {
				n.inline = !0;
				let r = e[2] ? Xe(e[2]) : [], a = e[3] ? Qe(e[3], t, n) : [], o = Ze(e[1], t, n, !!a.length);
				return n.inline = !1, a.length ? {
					align: r,
					cells: a,
					header: o,
					type: i.table
				} : {
					children: o.flat(),
					type: i.paragraph
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
		[i.tableSeparator]: {
			_match: (e, t) => t.inTable && e[0] === "|" ? /^\|/.exec(e) : null,
			_order: a.HIGH,
			_parse() {
				return { type: i.tableSeparator };
			},
			_render() {
				return " | ";
			}
		},
		[i.text]: {
			_match: U((e, t) => we.exec(e) || Ce.exec(e) || /^[\s\S]/.exec(e)),
			_order: a.MIN,
			_parse(e) {
				let t = e[0];
				return { text: t.indexOf("&") === -1 ? t : t.replace(ie, (e, t) => t.startsWith("#x") ? String.fromCharCode(parseInt(t.slice(2), 16)) : t.startsWith("#") ? String.fromCharCode(parseInt(t.slice(1), 10)) : ae[t] || e) };
			},
			_render(e) {
				return e.text;
			}
		},
		[i.textBolded]: {
			_qualify: ["**", "__"],
			_match: G(Te),
			_order: a.MED,
			_parse(e, t, n) {
				return { children: t(e[2], n) };
			},
			_render(t, n, r = {}) {
				return e("strong", { key: r.key }, n(t.children, r));
			}
		},
		[i.textEmphasized]: {
			_qualify: ["*", "_"],
			_match: G(Ee),
			_order: a.LOW,
			_parse(e, t, n) {
				return { children: t(e[2], n) };
			},
			_render(t, n, r = {}) {
				return e("em", { key: r.key }, n(t.children, r));
			}
		},
		[i.textEscaped]: {
			_qualify: ["\\"],
			_match: G(xe),
			_order: a.HIGH,
			_parse(e) {
				return {
					text: e[1],
					type: i.text
				};
			}
		},
		[i.textMarked]: {
			_qualify: ["=="],
			_match: G(De),
			_order: a.LOW,
			_parse: X,
			_render(t, n, r = {}) {
				return e("mark", { key: r.key }, n(t.children, r));
			}
		},
		[i.textStrikethroughed]: {
			_qualify: ["~~"],
			_match: G(Oe),
			_order: a.LOW,
			_parse: X,
			_render(t, n, r = {}) {
				return e("del", { key: r.key }, n(t.children, r));
			}
		}
	};
}, lt = (e = "", t, n = {}) => {
	let r = t.components ?? {}, a = (e) => t.slugify ? t.slugify(e, H) : H(e), s = st(t, n), c = [], l = {}, d = (e, n) => {
		if (!n || !n.trim()) return null;
		let r = n.match(u);
		return r ? r.reduce((n, r) => {
			let i = r.indexOf("=");
			if (i !== -1) {
				let a = Ke(r.slice(0, i)).trim(), s = Be(r.slice(i + 1).trim()), c = o[a] ?? a;
				if (c === "ref") return n;
				n[c] = Je(e, a, s, t.sanitizer ?? Ue), typeof n[c] == "string" && (E.test(n[c]) || O.test(n[c])) && (n[c] = b(n[c].trim()));
			} else r !== "style" && (n[o[r] ?? r] = !0);
			return n;
		}, {}) : null;
	}, p = [
		f,
		_,
		v,
		n.enforceAtxHeadings ? w : re,
		T,
		le,
		Re,
		ze,
		k
	], m = ct(s, t, n, c, l, d, (e) => {
		let t = e.replace(j, ""), r = t.length > 2048 ? t.slice(0, 2048) : t;
		return tt(n.disableParsingRawHTML ? p : [
			...p,
			me,
			E,
			D,
			O,
			k
		], r);
	}, p), h = n.disableParsingRawHTML ? Object.keys(m).reduce((e, t) => (t !== i.htmlBlock && t !== i.htmlSelfClosing && (e[t] = m[t]), e), {}) : m, g = nt(h), y = $(rt(h, n.renderRule)), b = (e) => {
		let t = n.preserveFrontmatter ? e : e.replace(C, ""), i = n.forceInline || !n.forceBlock && ve.test(t.replace(j, "")) === !1, a = y(g(i ? t : `${R(t).replace(j, "")}\n\n`, { inline: i }), { inline: i });
		for (; typeof a[a.length - 1] == "string" && !a[a.length - 1].trim();) a.pop();
		if (n.wrapper === null) return a;
		let o = n.wrapper ?? (i ? "span" : "div");
		if (a.length > 1 || n.forceWrapper) return s(o, { key: "outer" }, a);
		if (a.length === 1) {
			let e = a[0];
			if (typeof e == "string") {
				let t = { key: "outer" };
				if (!i && r) {
					let n = V(r, "p.props", {}) ?? {}, i = Ve(t.className, n.className), a = {
						...t,
						...n
					};
					return i && (a.className = i), s("span", a, e);
				}
				return s("span", t, e);
			}
			return e;
		}
		return s(o, { key: "outer" }, null);
	};
	if (typeof e != "string") throw console.error("intlayer: the first argument must be a string. Received", typeof e), Error("intlayer: the first argument must be a string");
	let x = b(e);
	return c.length ? s("div", null, x, s("footer", { key: "footer" }, ...c.map((e) => s("div", {
		id: a(e.identifier),
		key: e.identifier
	}, e.identifier, y(g(e.footnote, { inline: !0 }), { inline: !0 }))))) : x;
}, ut = (e, t, n = {}) => {
	let { components: r, namedCodesToUnicode: i, sanitizer: a, slugify: o, ...s } = n;
	return lt(e, {
		runtime: t,
		components: r,
		namedCodesToUnicode: i,
		sanitizer: a,
		slugify: o
	}, s);
}, dt = e({
	DURATION_DELAY_TRIGGER: () => 20,
	INLINE_SKIP_R: () => I,
	ORDERED: () => 1,
	ORDERED_LIST_BULLET: () => N,
	UNORDERED: () => 2,
	UNORDERED_LIST_BULLET: () => P,
	compileWithOptions: () => ut
});
export { r as n, dt as t };
var e = "translation", t = "enumeration", n = "condition", r = "insertion", i = "file", a = "object", o = "array", s = "nested", c = "reactNode", l = "markdown", u = "html", d = "gender";
export { d as a, l as c, c as d, e as f, i, s as l, n, u as o, t as r, r as s, o as t, a as u };
var e = Object.defineProperty, t = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), n = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
}, r = ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
});
export { n, r, t };
