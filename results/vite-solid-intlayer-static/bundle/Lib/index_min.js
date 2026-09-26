import e from "../.intlayer/dictionary/header.json";
import { createComponent as t, memo as n, mergeProps as r } from "solid-js/web";
import { Suspense as i, createComputed as a, createContext as o, createMemo as s, createSignal as c, lazy as l, on as ee, onMount as u, untrack as te, useContext as d } from "solid-js";
var f = {
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
}, p = {
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
}, m = /* @__PURE__ */ new WeakMap(), h = 0, ne = (e) => {
	if (!e) return "base";
	let t = m.get(e);
	if (t) return t;
	h += 1;
	let n = `p${h}`;
	return m.set(e, n), n;
}, re = 256, g = /* @__PURE__ */ new WeakMap(), _ = (e) => typeof e == "object" && !!e, v = (e, t, n) => `${e}_${t}_${ne(n)}`, y = (e, t) => {
	if (!_(e)) return { hit: !1 };
	let n = g.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, b = (e, t, n) => {
	if (!_(e)) return n;
	let r = g.get(e);
	return r || (r = /* @__PURE__ */ new Map(), g.set(e, r)), r.size >= re && r.clear(), r.set(t, n), n;
}, x = "translation", S = "object", ie = "array", C = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), w = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, w);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => w(e, C(t, e, {
		type: ie,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: S,
			key: r
		};
		if (t.eager) {
			n[r] = w(e[r], C(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = w(e[r], C(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, T = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, E = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !T(e) || !T(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? E(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, D = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => E(e, t));
}, O = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, k = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? O : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = D(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: x,
				key: e
			}]
		});
	}
}, A = O, j = (e) => O, M = O, ae = O, N = O, P = O, F = (e) => O, I = O, oe = (e, t = !0) => [
	k(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	A,
	j(e ?? f.defaultLocale),
	M,
	ae,
	F(e ?? f.defaultLocale),
	I,
	N,
	P
].filter((e) => e !== O), se = (e, t, n = []) => w(e, {
	...t,
	plugins: n
}), L = /* @__PURE__ */ new WeakSet(), R = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = v(r ?? f.defaultLocale, "", n), o = y(e, a);
	if (o.hit) return o.content;
	let s = n ?? oe(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !L.has(e)
		};
		L.add(e);
		try {
			return se(e.content, t, s);
		} finally {
			t.eager && L.delete(e);
		}
	};
	return c === null ? b(e, a, null) : Array.isArray(c) ? b(e, a, c.map(l)) : b(e, a, l(c));
}, z = (e, t = f?.locales, n = f?.defaultLocale) => {
	if (t?.includes(e)) return e;
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
}, B = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, V = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = B(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, H = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var U = {
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
}, W = (e = U) => {
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!H) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, G = !1, K, ce = () => typeof window > "u" ? W(U) : (G ||= (K = W(U), !0), K), le = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (G = !1, !H && p.storage.cookies)) for (let n = 0; n < p.storage.cookies.length; n++) {
		let { name: r, attributes: i } = p.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: B(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, V(r, e, i));
			} catch {}
		}
	}
}, q = /* @__PURE__ */ new Map(), ue = (e, t) => Object.create(new Proxy(e, {
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
}), de = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = q.get(t);
	i || (i = /* @__PURE__ */ new Map(), q.set(t, i));
	let a = i.get(r);
	return a || (a = ue(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, fe = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return Object.setPrototypeOf(r, de(t, Array.prototype)), r;
}, J = null, Y = null;
J?.catch(() => {}), Y?.catch(() => {});
var pe = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => fe({
		value: t.children,
		children: t.children
	})
}, me = O, he = O;
l(() => J.then((e) => ({ default: e.MarkdownRenderer }))), l(() => J.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var ge = O;
l(() => Y.then((e) => ({ default: e })));
var _e = O, X = /* @__PURE__ */ new Map(), ve = (e, t = !0) => {
	let n = `${e ?? f.defaultLocale}_${t}`;
	if (X.has(n)) return X.get(n);
	let r = [
		pe,
		k(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
		A,
		j(e ?? f.defaultLocale),
		M,
		F(e ?? f.defaultLocale),
		I,
		N,
		P,
		me,
		he,
		ge,
		_e
	].filter((e) => e !== O);
	return X.set(n, r), r;
}, ye = (e, t) => R(e, t, ve(typeof t == "object" && t ? t.locale : t)), Z = ce, be = (e, t) => le(e, {
	...U,
	isCookieEnabled: t
}), xe = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Q = null, Se = null, $ = o({
	locale: () => Z() ?? f?.defaultLocale,
	setLocale: () => null
}), Ce = (e) => {
	let { defaultLocale: n, locales: r } = f ?? {}, i = e.locale ?? Z() ?? e.defaultLocale ?? n, [o, l] = c(i), d = e.setLocale ?? ((t) => {
		if (o().toString() !== t.toString()) {
			if (!r?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			l(t), be(t, e.isCookieEnabled);
		}
	}), p = s(() => z(o()));
	return a(ee(() => e.locale, (e) => {
		e && e !== te(o) && l(e);
	}, { defer: !0 })), u(() => {
		xe();
	}), t($.Provider, {
		value: {
			locale: p,
			setLocale: d,
			variant: () => e.variant
		},
		get children() {
			return e.children;
		}
	});
}, we = (e) => t(Ce, r(e, { get children() {
	return [
		n(() => n(() => !1)() && t(i, { get children() {
			return t(Q, {});
		} })),
		n(() => n(() => !1)() && t(i, { get children() {
			return t(Se, {});
		} })),
		n(() => e.children)
	];
} })), Te = Symbol("LOADABLE_SETTLED_VALUE"), Ee = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[Te];
}, De = (e, t) => {
	let n = d($) ?? {}, r = s(() => {
		let r = n?.locale?.();
		return ye(Ee(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, Oe = () => (De(e), null);
function ke() {
	return t(we, {
		get locale() {
			return "en";
		},
		get children() {
			return t(Oe, {});
		}
	});
}
export { ke as default };
