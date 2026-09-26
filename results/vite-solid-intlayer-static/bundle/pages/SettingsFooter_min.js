import { insert as e, template as t } from "solid-js/web";
import { createContext as n, createMemo as r, lazy as i, useContext as a } from "solid-js";
var o = {
	key: "settings-footer",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				a: "Cancel",
				b: "Save Changes"
			},
			fr: {
				a: "Annuler",
				b: "Enregistrer les modifications"
			},
			es: {
				a: "Cancelar",
				b: "Guardar cambios"
			},
			de: {
				a: "Abbrechen",
				b: "Änderungen speichern"
			},
			it: {
				a: "Annulla",
				b: "Salva modifiche"
			},
			pt: {
				a: "Cancelar",
				b: "Salvar alterações"
			},
			zh: {
				a: "取消",
				b: "保存更改"
			},
			ja: {
				a: "キャンセル",
				b: "変更を保存"
			},
			ko: {
				a: "취소",
				b: "변경 사항 저장"
			},
			ru: {
				a: "Отмена",
				b: "Сохранить изменения"
			}
		}
	}
}, s = {
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
}, c = {
	mode: "prefix-all",
	enableProxy: !1,
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, l = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var u = {
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
}, d = (e = u) => {
	let { locales: t } = s;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!l) for (let t = 0; t < (c.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(c.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, f = !1, p, m = () => typeof window > "u" ? d(u) : (f ||= (p = d(u), !0), p), h = /* @__PURE__ */ new Map(), ee = (e, t) => Object.create(new Proxy(e, {
	get: (e, t, n) => {
		if (typeof t != "string" || t === "constructor" || t in e) return Reflect.get(e, t, n);
		let { value: r } = n;
		if (r == null) return;
		let i = Object(r)[t];
		return typeof i == "function" ? i.bind(r) : i;
	},
	has: (e, n) => n in e || typeof n == "string" && n !== "constructor" && t !== null && n in t
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
}), g = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = h.get(t);
	i || (i = /* @__PURE__ */ new Map(), h.set(t, i));
	let a = i.get(r);
	return a || (a = ee(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, _ = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return Object.setPrototypeOf(r, g(t, Array.prototype)), r;
}, v = /* @__PURE__ */ new WeakMap(), y = 0, b = (e) => {
	if (!e) return "base";
	let t = v.get(e);
	if (t) return t;
	y += 1;
	let n = `p${y}`;
	return v.set(e, n), n;
}, x = 256, S = /* @__PURE__ */ new WeakMap(), C = (e) => typeof e == "object" && !!e, w = (e, t, n) => `${e}_${t}_${b(n)}`, T = (e, t) => {
	if (!C(e)) return { hit: !1 };
	let n = S.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, E = (e, t, n) => {
	if (!C(e)) return n;
	let r = S.get(e);
	return r || (r = /* @__PURE__ */ new Map(), S.set(e, r)), r.size >= x && r.clear(), r.set(t, n), n;
}, D = "translation", O = "object", k = "array", A = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), j = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, j);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => j(e, A(t, e, {
		type: k,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: O,
			key: r
		};
		if (t.eager) {
			n[r] = j(e[r], A(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = j(e[r], A(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, M = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, N = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !M(e) || !M(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? N(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, P = (e, t, n) => {
	let r = (t) => e[t], i = r(t);
	if (typeof i == "string") return i;
	let a = [
		t,
		t.split("-")[0],
		n,
		n?.split("-")[0]
	], o = [];
	for (let e = 0; e < a.length; e++) {
		let t = a[e];
		if (!t || a.indexOf(t) < e) continue;
		let n = r(t);
		if (n !== void 0) {
			if (typeof n == "string") {
				if (o.length === 0) return n;
				continue;
			}
			o.push(n);
		}
	}
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => N(e, t));
}, F = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, I = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? F : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = P(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: D,
				key: e
			}]
		});
	}
}, L = F, R = (e) => F, z = F, B = F, V = F, H = F, U = (e) => F, W = F, G = (e, t = !0) => [
	I(e ?? s.defaultLocale, t ? s.defaultLocale : void 0),
	L,
	R(e ?? s.defaultLocale),
	z,
	B,
	U(e ?? s.defaultLocale),
	W,
	V,
	H
].filter((e) => e !== F), K = (e, t, n = []) => j(e, {
	...t,
	plugins: n
}), q = /* @__PURE__ */ new WeakSet(), J = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = w(r ?? s.defaultLocale, "", n), o = T(e, a);
	if (o.hit) return o.content;
	let c = n ?? G(r), l = e, u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries,
			eager: !q.has(e)
		};
		q.add(e);
		try {
			return K(e.content, t, c);
		} finally {
			t.eager && q.delete(e);
		}
	};
	return l === null ? E(e, a, null) : Array.isArray(l) ? E(e, a, l.map(u)) : E(e, a, u(l));
}, Y = null, X = null;
Y?.catch(() => {}), X?.catch(() => {});
var Z = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => _({
		value: t.children,
		children: t.children
	})
}, Q = F, te = F;
i(() => Y.then((e) => ({ default: e.MarkdownRenderer }))), i(() => Y.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var ne = F;
i(() => X.then((e) => ({ default: e })));
var re = F, $ = /* @__PURE__ */ new Map(), ie = (e, t = !0) => {
	let n = `${e ?? s.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		Z,
		I(e ?? s.defaultLocale, t ? s.defaultLocale : void 0),
		L,
		R(e ?? s.defaultLocale),
		z,
		U(e ?? s.defaultLocale),
		W,
		V,
		H,
		Q,
		te,
		ne,
		re
	].filter((e) => e !== F);
	return $.set(n, r), r;
}, ae = (e, t) => J(e, t, ie(typeof t == "object" && t ? t.locale : t)), oe = m, se = n({
	locale: () => oe() ?? s?.defaultLocale,
	setLocale: () => null
}), ce = Symbol("LOADABLE_SETTLED_VALUE"), le = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[ce];
}, ue = (e, t) => {
	let n = a(se) ?? {}, i = r(() => {
		let r = n?.locale?.();
		return ae(le(e) ?? e, t ?? r);
	});
	return new Proxy(i, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, de = t("<div class=\"flex justify-end gap-3\"><button type=button class=\"rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent\"></button><button type=submit class=\"rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\">");
function fe() {
	let t = ue(o);
	return (() => {
		var n = de(), r = n.firstChild, i = r.nextSibling;
		return e(r, () => t().a), e(i, () => t().b), n;
	})();
}
export { fe as default };
