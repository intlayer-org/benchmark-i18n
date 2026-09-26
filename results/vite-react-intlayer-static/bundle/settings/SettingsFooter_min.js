import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useMemo as a } from "react";
import { Fragment as o, jsx as s, jsxs as c } from "react/jsx-runtime";
var l = {
	key: "settings-footer",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				b: "Save Changes",
				a: "Cancel"
			},
			fr: {
				b: "Enregistrer les modifications",
				a: "Annuler"
			},
			es: {
				b: "Guardar cambios",
				a: "Cancelar"
			},
			de: {
				b: "Änderungen speichern",
				a: "Abbrechen"
			},
			it: {
				b: "Salva modifiche",
				a: "Annulla"
			},
			pt: {
				b: "Salvar alterações",
				a: "Cancelar"
			},
			zh: {
				b: "保存更改",
				a: "取消"
			},
			ja: {
				b: "変更を保存",
				a: "キャンセル"
			},
			ko: {
				b: "변경 사항 저장",
				a: "취소"
			},
			ru: {
				b: "Сохранить изменения",
				a: "Отмена"
			}
		}
	}
}, u = {
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
}, d = {
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
}, ee = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var f = {
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
}, p = (e = f) => {
	let { locales: t } = u;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!ee) for (let t = 0; t < (d.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(d.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, te = !1, m, ne = () => typeof window > "u" ? p(f) : (te ||= (m = p(f), !0), m), h = /* @__PURE__ */ new Map(), re = (e, t) => Object.create(new Proxy(e, {
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
	return a || (a = re(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, ie = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : s(o, { children: e }),
	value: t,
	...n
}, g(t)), _ = /* @__PURE__ */ new WeakMap(), v = 0, ae = (e) => {
	if (!e) return "base";
	let t = _.get(e);
	if (t) return t;
	v += 1;
	let n = `p${v}`;
	return _.set(e, n), n;
}, oe = 256, y = /* @__PURE__ */ new WeakMap(), b = (e) => typeof e == "object" && !!e, se = (e, t, n) => `${e}_${t}_${ae(n)}`, x = (e, t) => {
	if (!b(e)) return { hit: !1 };
	let n = y.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, S = (e, t, n) => {
	if (!b(e)) return n;
	let r = y.get(e);
	return r || (r = /* @__PURE__ */ new Map(), y.set(e, r)), r.size >= oe && r.clear(), r.set(t, n), n;
}, C = "translation", w = "enumeration", ce = "plural", le = "condition", T = "insertion", ue = "object", de = "array", E = "markdown", D = "html", fe = "gender", pe = "select", O = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), k = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, k);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => k(e, O(t, e, {
		type: de,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: ue,
			key: r
		};
		if (t.eager) {
			n[r] = k(e[r], O(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = k(e[r], O(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, A = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), j = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, M = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !j(e) || !j(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? M(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, N = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => M(e, t));
}, P = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, F = (e) => {
	if (typeof e == "string") return e;
	if (P(e)) return e.nodeType === "html" ? e[D] : e[E];
}, I = (e, t) => {
	if (typeof e == "string") return t;
	if (P(e)) {
		let n = e.nodeType === "html" ? D : E;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, L = (e, t, n, r, i) => {
	let a = I(e, A(F(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, R = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, z = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, B = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? R : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = N(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: C,
				key: e
			}]
		});
	}
}, V = R, H = (e) => R, U = R, me = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? R : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: T }], i = e[T], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || P(e),
			transform: (e, n, r) => {
				if (P(e)) return (i) => L(e, i, n, t.plugins, r);
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
		return G(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, W = [
	w,
	le,
	ce,
	fe,
	pe
], he = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !W.includes(i)) return t;
	let a = i === "plural" || i === "enumeration";
	return (e) => {
		if (typeof e == "object" && e) return t({
			...n,
			...e
		});
		if (a) return t({
			...n,
			count: e
		});
		let i = t(e);
		return !r && z(i) ? i(n) : i;
	};
}, G = (e, t) => typeof t == "function" && W.includes(e?.nodeType ?? "") ? (n) => he(e, t, n) : t, K = R, q = R, J = (e) => R, Y = R, ge = (e, t = !0) => [
	B(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
	V,
	H(e ?? u.defaultLocale),
	U,
	me,
	J(e ?? u.defaultLocale),
	Y,
	K,
	q
].filter((e) => e !== R), _e = (e, t, n = []) => k(e, {
	...t,
	plugins: n
}), X = /* @__PURE__ */ new WeakSet(), ve = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = se(r ?? u.defaultLocale, "", n), o = x(e, a);
	if (o.hit) return o.content;
	let s = n ?? ge(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !X.has(e)
		};
		X.add(e);
		try {
			return _e(e.content, t, s);
		} finally {
			t.eager && X.delete(e);
		}
	};
	return c === null ? S(e, a, null) : Array.isArray(c) ? S(e, a, c.map(l)) : S(e, a, l(c));
}, ye = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Z = /\{\{\s*(.*?)\s*\}\}/g, be = (e, t = {}) => {
	if (!Object.values(t).some(ye)) return {
		isSimple: !0,
		parts: e.replace(Z, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Z), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, xe = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => ie({
		value: t.children,
		children: t.children
	})
}, Q = R, Se = (t, r) => {
	let i = be(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Ce = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? R : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: T }], i = e[T], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || P(e),
			transform: (e, n, r) => {
				if (P(e)) return (i) => L(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Se(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return G(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, we = R, Te = R, $ = /* @__PURE__ */ new Map(), Ee = (e, t = !0) => {
	let n = `${e ?? u.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		xe,
		B(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
		V,
		H(e ?? u.defaultLocale),
		U,
		J(e ?? u.defaultLocale),
		Y,
		K,
		q,
		Q,
		Ce,
		we,
		Te
	].filter((e) => e !== R);
	return $.set(n, r), r;
}, De = (e, t) => ve(e, t, Ee(typeof t == "object" && t ? t.locale : t)), Oe = ne, ke = t({
	get locale() {
		return Oe() ?? u?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), Ae = (e, t) => {
	let { locale: n, variant: r } = i(ke) ?? {}, o = t ?? n, s = o;
	return a(() => De(e, o), [e.key, s]);
};
function je() {
	let e = Ae(l);
	return c("div", {
		className: "flex justify-end gap-3",
		children: [s("button", {
			type: "button",
			className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors",
			children: e.a
		}), s("button", {
			type: "submit",
			className: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
			children: e.b
		})]
	});
}
export { je as default };
