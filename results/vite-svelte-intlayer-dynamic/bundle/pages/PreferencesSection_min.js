import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { getContext as t } from "svelte";
import { derived as n, writable as r } from "svelte/store";
var i = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), a = {
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
}, o = {
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
}, s = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, c = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && s(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, l = ["en"], u = "__intlayerPreloaded", d = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? a?.defaultLocale ?? "en",
	mode: e.mode ?? o?.mode ?? "prefix-no-default",
	locales: e.locales ?? a?.locales ?? l,
	rewrite: e.rewrite ?? o?.rewrite,
	domains: e.domains ?? o?.domains
}), f = (e, t) => !!e && (t ?? a.locales).includes(e), p = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var m = {
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
}, ee = (e = m) => {
	let { locales: t } = a;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!p) for (let t = 0; t < (o.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(o.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, h = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: a } = d(t);
	if (!n || !r) return n;
	let o = i(e), s = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, c = o ? new URL(s) : new URL(s, "http://e.com");
	if (a === "search-params") {
		let e = c.searchParams.get("locale");
		return f(e, r) ? e : n;
	}
	if (a === "no-prefix") return n;
	let l = c.pathname.split("/")[1];
	if (f(l, r)) return l;
	if (a === "prefix-no-default") return n;
}, g = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = d(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = c(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = h(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return ee() ?? t;
}, _, v, y = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (v === void 0 || _ !== e) && (_ = e, v = g()), v;
}, b = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/de.json").then((e) => e.default),
	en: () => import("./intlayer-PreferencesSection-3cskxp-en-DB7yB9Ec.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/preferences-section/zh.json").then((e) => e.default)
}, x = y(), S = b[x];
typeof window < "u" && typeof S == "function" && S().then((e) => {
	b.__intlayerPreloaded = {
		locale: x,
		dictionary: e
	};
}, () => void 0);
var C = a?.defaultLocale, te = (() => {
	let { subscribe: e, set: t, update: i } = r({ locale: C });
	return {
		subscribe: e,
		setLocale: (e) => i((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => n({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: C })
	};
})(), w = Symbol("intlayer"), T = () => t(w), E = /* @__PURE__ */ new Map(), D = (e, t) => Object.create(new Proxy(e, {
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
}), O = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = E.get(t);
	i || (i = /* @__PURE__ */ new Map(), E.set(t, i));
	let a = i.get(r);
	return a || (a = D(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, ne = (e, t) => {
	if (e === void 0) return;
	if (typeof e == "string" || Array.isArray(e)) return e;
	let n = e;
	return n[t] ?? n.default;
}, k = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[u];
	if (n && n.locale === t) return n.dictionary;
}, A = "translation", j = "object", M = "array", N = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), P = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, P);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => P(e, N(t, e, {
		type: M,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: j,
			key: r
		};
		if (t.eager) {
			n[r] = P(e[r], N(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = P(e[r], N(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, F = /* @__PURE__ */ new WeakMap(), I = 0, re = (e) => {
	if (!e) return "base";
	let t = F.get(e);
	if (t) return t;
	I += 1;
	let n = `p${I}`;
	return F.set(e, n), n;
}, L = 256, R = /* @__PURE__ */ new WeakMap(), z = (e) => typeof e == "object" && !!e, B = (e, t, n) => `${e}_${t}_${re(n)}`, V = (e, t) => {
	if (!z(e)) return { hit: !1 };
	let n = R.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, H = (e, t, n) => {
	if (!z(e)) return n;
	let r = R.get(e);
	return r || (r = /* @__PURE__ */ new Map(), R.set(e, r)), r.size >= L && r.clear(), r.set(t, n), n;
}, U = (e, t = !0) => [
	ae(e ?? a.defaultLocale, t ? a.defaultLocale : void 0),
	oe,
	se(e ?? a.defaultLocale),
	ce,
	le,
	fe(e ?? a.defaultLocale),
	X,
	ue,
	de
].filter((e) => e !== Y), W = (e, t, n = []) => P(e, {
	...t,
	plugins: n
}), G = /* @__PURE__ */ new WeakSet(), K = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, o = B(r ?? a.defaultLocale, "", n), s = V(e, o);
	if (s.hit) return s.content;
	let c = n ?? U(r), l = e, u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries,
			eager: !G.has(e)
		};
		G.add(e);
		try {
			return W(e.content, t, c);
		} finally {
			t.eager && G.delete(e);
		}
	};
	return l === null ? H(e, o, null) : Array.isArray(l) ? H(e, o, l.map(u)) : H(e, o, u(l));
}, q = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, J = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !q(e) || !q(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? J(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, ie = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => J(e, t));
}, Y = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, ae = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? Y : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = ie(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: A,
				key: e
			}]
		});
	}
}, oe = Y, se = (e) => Y, ce = Y, le = Y, ue = Y, de = Y, fe = (e) => Y, X = Y;
function Z(t, n) {
	e.push(n, !1);
	let r = e.prop(n, "Renderer", 8, void 0), i = e.prop(n, "rendererProps", 24, () => ({})), a = e.prop(n, "value", 8, void 0), o = e.mutable_source(), s = e.mutable_source(!1);
	e.legacy_pre_effect(() => e.deep_read_state(r()), () => {
		typeof r()?.then == "function" ? (e.set(s, !0), r().then((t) => {
			e.set(o, t), e.set(s, !1);
		})) : (e.set(o, r()), e.set(s, !1));
	}), e.legacy_pre_effect_reset(), e.init();
	var c = e.comment(), l = e.first_child(c), u = (e) => {}, d = (t) => {
		var n = e.comment(), r = e.first_child(n);
		e.element(r, () => e.get(o), !1, (t, n) => {
			e.attribute_effect(t, () => ({ ...i() }));
			var r = e.text();
			e.template_effect(() => e.set_text(r, a())), e.append(n, r);
		}), e.append(t, n);
	}, f = (t) => {
		e.get(o)(t, e.spread_props(i, {
			children: (t, n) => {
				e.next();
				var r = e.text();
				e.template_effect(() => e.set_text(r, a())), e.append(t, r);
			},
			$$slots: { default: !0 }
		}));
	}, p = (t) => {
		var n = e.text();
		e.template_effect(() => e.set_text(n, a())), e.append(t, n);
	};
	e.if(l, (t) => {
		e.get(s) ? t(u) : typeof e.get(o) == "string" ? t(d, 1) : typeof e.get(o) == "function" ? t(f, 2) : t(p, -1);
	}), e.append(t, c), e.pop();
}
var pe = (e) => {
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
	}), e.additionalProps && Object.assign(n, e.additionalProps), Object.setPrototypeOf(n, O(e.value, Function.prototype)), n;
}, me = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => pe({
		value: t.children ?? e,
		component: void 0,
		props: {}
	})
}, he = me, ge = Y, _e = Y, ve = Y, Q = /* @__PURE__ */ new Map(), ye = (e, t = !0) => {
	let n = `${e ?? a.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		me,
		ae(e ?? a.defaultLocale, t ? a.defaultLocale : void 0),
		oe,
		se(e ?? a.defaultLocale),
		ce,
		fe(e ?? a.defaultLocale),
		X,
		ue,
		de,
		he,
		ge,
		_e,
		ve
	].filter((e) => e !== Y);
	return Q.set(n, r), r;
}, be = (e, t) => K(e, t, ye(typeof t == "object" && t ? t.locale : t)), $ = new Proxy(() => {}, {
	get: (e, t) => {
		if (t === Symbol.toPrimitive) return () => void 0;
		if (t === "toString") return () => "";
		if (t !== "then") return $;
	},
	apply: () => $
}), xe = () => new Proxy({
	isLoading: !0,
	error: null
}, { get: (e, t) => t === "isLoading" ? !0 : t === "error" ? null : $ }), Se = (e) => Array.isArray(e) ? Object.assign(e.slice(), {
	isLoading: !1,
	error: null
}) : e && typeof e == "object" ? {
	...e,
	isLoading: !1,
	error: null
} : {
	isLoading: !1,
	error: null
};
function Ce(e, t, r) {
	let i = T();
	ne(i?.variant, t);
	let a = r, o = n(te, (e) => a ?? i?.locale ?? e.locale);
	return n(o, (t, n) => {
		let r = k(e, t);
		if (r) {
			n(Se(be(r, t)));
			return;
		}
		n(xe());
		let i = !1;
		return (async () => {
			try {
				let r;
				{
					let n = e[t];
					if (!n) return;
					r = be(await n(), t);
				}
				if (i) return;
				n(Se(r));
			} catch (e) {
				if (i) return;
				console.error(e), n({
					isLoading: !1,
					error: e
				});
			}
		})(), () => {
			i = !0;
		};
	}, xe());
}
var we = e.from_html("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\"> </h2> <div class=\"space-y-4\"><div class=\"flex items-center justify-between\"><div><p class=\"text-sm font-medium text-foreground\"> </p> <p class=\"text-xs text-muted-foreground\"> </p></div> <button type=\"button\" class=\"h-6 w-11 rounded-full bg-primary transition-colors\"><span class=\"block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform\"></span></button></div> <div class=\"flex items-center justify-between\"><div><p class=\"text-sm font-medium text-foreground\"> </p> <p class=\"text-xs text-muted-foreground\"> </p></div> <button type=\"button\" class=\"h-6 w-11 rounded-full bg-muted transition-colors\"><span class=\"block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform\"></span></button></div> <div><label for=\"settings-default-language\" class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <select id=\"settings-default-language\" class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none\"><option> </option><option> </option><option> </option><option> </option><option> </option><option> </option><option> </option></select></div></div></section>");
function Te(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(o, "$content", i), [i, a] = e.setup_stores(), o = Ce(b, "preferences-section");
	e.init();
	var s = we(), c = e.child(s), l = e.only_child(c, !0), u = e.sibling(c, 2), d = e.child(u), f = e.child(d), p = e.child(f), m = e.only_child(p, !0), ee = e.sibling(p, 2), h = e.only_child(ee, !0);
	e.reset(f);
	var g = e.sibling(f, 2);
	e.reset(d);
	var _ = e.sibling(d, 2), v = e.child(_), y = e.child(v), x = e.only_child(y, !0), S = e.sibling(y, 2), C = e.only_child(S, !0);
	e.reset(v);
	var te = e.sibling(v, 2);
	e.reset(_);
	var w = e.sibling(_, 2), T = e.child(w), E = e.only_child(T, !0), D = e.sibling(T, 2), O = e.child(D), ne = e.only_child(O, !0), k = {}, A = e.sibling(O), j = e.only_child(A, !0), M = {}, N = e.sibling(A), P = e.only_child(N, !0), F = {}, I = e.sibling(N), re = e.only_child(I, !0), L = {}, R = e.sibling(I), z = e.only_child(R, !0), B = {}, V = e.sibling(R), H = e.only_child(V, !0), U = {}, W = e.sibling(V), G = e.only_child(W, !0), K = {};
	e.reset(D), e.reset(w), e.reset(u), e.reset(s), e.template_effect(() => {
		e.set_text(l, r().preferences), e.set_text(m, r().emailNotifications), e.set_text(h, r().receiveWeeklyBenchmarkReports), e.set_attribute(g, "aria-label", r().toggleNotifications), e.set_text(x, r().darkMode), e.set_text(C, r().useDarkColorScheme), e.set_attribute(te, "aria-label", r().toggleDarkMode), e.set_text(E, r().defaultLanguage), e.set_text(ne, r().englishEn), k !== (k = r().englishEn) && (O.__value = k), e.set_text(j, r().frenchFr), M !== (M = r().frenchFr) && (A.__value = M), e.set_text(P, r().germanDe), F !== (F = r().germanDe) && (N.__value = F), e.set_text(re, r().spanishEs), L !== (L = r().spanishEs) && (I.__value = L), e.set_text(z, r().japaneseJa), B !== (B = r().japaneseJa) && (R.__value = B), e.set_text(H, r().chineseSimplifiedZhCn), U !== (U = r().chineseSimplifiedZhCn) && (V.__value = U), e.set_text(G, r().arabicAr), K !== (K = r().arabicAr) && (W.__value = K);
	}), e.append(t, s), e.pop(), a();
}
export { Te as default };
var e = Object.defineProperty, t = ((t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
})({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "preferences-section", r = {
	arabicAr: "Arabic (ar)",
	chineseSimplifiedZhCn: "Chinese Simplified (zh-CN)",
	japaneseJa: "Japanese (ja)",
	spanishEs: "Spanish (es)",
	germanDe: "German (de)",
	frenchFr: "French (fr)",
	englishEn: "English (en)",
	defaultLanguage: "Default Language",
	toggleDarkMode: "Toggle dark mode",
	useDarkColorScheme: "Use dark color scheme",
	darkMode: "Dark Mode",
	toggleNotifications: "Toggle notifications",
	receiveWeeklyBenchmarkReports: "Receive weekly benchmark reports",
	emailNotifications: "Email Notifications",
	preferences: "Preferences"
}, i = {
	key: n,
	content: r
};
export { t };
