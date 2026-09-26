import e from "../.intlayer/dictionary/header.json";
import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as t from "svelte/internal/client";
import { getContext as n, setContext as r } from "svelte";
import { derived as i, writable as a } from "svelte/store";
var o = {
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
}, s = {
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
}, c = /* @__PURE__ */ new WeakMap(), l = 0, u = (e) => {
	if (!e) return "base";
	let t = c.get(e);
	if (t) return t;
	l += 1;
	let n = `p${l}`;
	return c.set(e, n), n;
}, d = 256, f = /* @__PURE__ */ new WeakMap(), p = (e) => typeof e == "object" && !!e, ee = (e, t, n) => `${e}_${t}_${u(n)}`, te = (e, t) => {
	if (!p(e)) return { hit: !1 };
	let n = f.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, m = (e, t, n) => {
	if (!p(e)) return n;
	let r = f.get(e);
	return r || (r = /* @__PURE__ */ new Map(), f.set(e, r)), r.size >= d && r.clear(), r.set(t, n), n;
}, h = "translation", g = "object", _ = "array", v = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), y = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, y);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => y(e, v(t, e, {
		type: _,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: g,
			key: r
		};
		if (t.eager) {
			n[r] = y(e[r], v(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = y(e[r], v(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, b = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, x = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !b(e) || !b(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? x(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, S = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => x(e, t));
}, C = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, w = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? C : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = S(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: h,
				key: e
			}]
		});
	}
}, T = C, E = (e) => C, D = C, O = C, k = C, A = C, j = (e) => C, M = C, N = (e, t = !0) => [
	w(e ?? o.defaultLocale, t ? o.defaultLocale : void 0),
	T,
	E(e ?? o.defaultLocale),
	D,
	O,
	j(e ?? o.defaultLocale),
	M,
	k,
	A
].filter((e) => e !== C), P = (e, t, n = []) => y(e, {
	...t,
	plugins: n
}), F = /* @__PURE__ */ new WeakSet(), ne = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = ee(r ?? o.defaultLocale, "", n), s = te(e, a);
	if (s.hit) return s.content;
	let c = n ?? N(r), l = e, u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries,
			eager: !F.has(e)
		};
		F.add(e);
		try {
			return P(e.content, t, c);
		} finally {
			t.eager && F.delete(e);
		}
	};
	return l === null ? m(e, a, null) : Array.isArray(l) ? m(e, a, l.map(u)) : m(e, a, u(l));
}, I = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var L = {
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
}, R = (e = L) => {
	let { locales: t } = o;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!I) for (let t = 0; t < (s.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(s.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, z = !1, B, V = () => typeof window > "u" ? R(L) : (z ||= (B = R(L), !0), B), H = /* @__PURE__ */ new Map(), U = (e, t) => Object.create(new Proxy(e, {
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
}), W = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = H.get(t);
	i || (i = /* @__PURE__ */ new Map(), H.set(t, i));
	let a = i.get(r);
	return a || (a = U(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, G = o?.defaultLocale, K = (() => {
	let { subscribe: e, set: t, update: n } = a({ locale: G });
	return {
		subscribe: e,
		setLocale: (e) => n((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => i({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: G })
	};
})(), q = Symbol("intlayer"), J = (e) => {
	r(q, e);
}, Y = () => n(q), X = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, re = V, ie = (e, n) => {
	let r = e ?? re();
	X();
	let i = t.state(t.proxy(r)), a = t.state(t.proxy(n));
	r && K.setLocale(r);
	let s = {
		get locale() {
			return t.get(i) ?? o.defaultLocale;
		},
		setLocale: (e) => {
			t.set(i, e, !0), K.setLocale(e);
		},
		get variant() {
			return t.get(a);
		},
		setVariant: (e) => {
			t.set(a, e, !0);
		}
	};
	return J(s), s;
};
function Z(e, n) {
	t.push(n, !1);
	let r = t.prop(n, "Renderer", 8, void 0), i = t.prop(n, "rendererProps", 24, () => ({})), a = t.prop(n, "value", 8, void 0), o = t.mutable_source(), s = t.mutable_source(!1);
	t.legacy_pre_effect(() => t.deep_read_state(r()), () => {
		typeof r()?.then == "function" ? (t.set(s, !0), r().then((e) => {
			t.set(o, e), t.set(s, !1);
		})) : (t.set(o, r()), t.set(s, !1));
	}), t.legacy_pre_effect_reset(), t.init();
	var c = t.comment(), l = t.first_child(c), u = (e) => {}, d = (e) => {
		var n = t.comment(), r = t.first_child(n);
		t.element(r, () => t.get(o), !1, (e, n) => {
			t.attribute_effect(e, () => ({ ...i() }));
			var r = t.text();
			t.template_effect(() => t.set_text(r, a())), t.append(n, r);
		}), t.append(e, n);
	}, f = (e) => {
		t.get(o)(e, t.spread_props(i, {
			children: (e, n) => {
				t.next();
				var r = t.text();
				t.template_effect(() => t.set_text(r, a())), t.append(e, r);
			},
			$$slots: { default: !0 }
		}));
	}, p = (e) => {
		var n = t.text();
		t.template_effect(() => t.set_text(n, a())), t.append(e, n);
	};
	t.if(l, (e) => {
		t.get(s) ? e(u) : typeof t.get(o) == "string" ? e(d, 1) : typeof t.get(o) == "function" ? e(f, 2) : e(p, -1);
	}), t.append(e, c), t.pop();
}
var ae = (e) => {
	let t = !!Z.prototype?.$destroy, n;
	return n = t ? function(t) {
		return new Z({
			...t,
			props: {
				...t.props,
				Renderer: e.component,
				rendererProps: e.props,
				value: e.value
			}
		});
	} : (t) => Z(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), e.additionalProps && Object.assign(n, e.additionalProps), Object.setPrototypeOf(n, W(e.value, Function.prototype)), n;
}, Q = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => ae({
		value: t.children ?? e,
		component: void 0,
		props: {}
	})
}, oe = Q, se = C, ce = C, le = C, $ = /* @__PURE__ */ new Map(), ue = (e, t = !0) => {
	let n = `${e ?? o.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		Q,
		w(e ?? o.defaultLocale, t ? o.defaultLocale : void 0),
		T,
		E(e ?? o.defaultLocale),
		D,
		j(e ?? o.defaultLocale),
		M,
		k,
		A,
		oe,
		se,
		ce,
		le
	].filter((e) => e !== C);
	return $.set(n, r), r;
}, de = (e, t) => ne(e, t, ue(typeof t == "object" && t ? t.locale : t)), fe = (e, t) => {
	let n = Y();
	return i([K], ([r]) => {
		let i = n?.locale ?? r.locale;
		return de(e, t ?? i);
	});
};
function pe(n, r) {
	t.push(r, !1), ie("en"), fe(e), t.init(), t.pop();
}
export { pe as default };
