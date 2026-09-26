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
}, h = (e = m) => {
	let { locales: t } = a;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!p) for (let t = 0; t < (o.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(o.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, g = (e = "/", t) => {
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
}, _ = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = d(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = c(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = g(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return h() ?? t;
}, v, y, b = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (y === void 0 || v !== e) && (v = e, y = _()), y;
}, x = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/de.json").then((e) => e.default),
	en: () => import("./intlayer-ContactForm-1opvm4-en-jwQT4YI-.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/zh.json").then((e) => e.default)
}, S = b(), C = x[S];
typeof window < "u" && typeof C == "function" && C().then((e) => {
	x.__intlayerPreloaded = {
		locale: S,
		dictionary: e
	};
}, () => void 0);
var w = a?.defaultLocale, T = (() => {
	let { subscribe: e, set: t, update: i } = r({ locale: w });
	return {
		subscribe: e,
		setLocale: (e) => i((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => n({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: w })
	};
})(), E = Symbol("intlayer"), ee = () => t(E), D = /* @__PURE__ */ new Map(), O = (e, t) => Object.create(new Proxy(e, {
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
}), te = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = D.get(t);
	i || (i = /* @__PURE__ */ new Map(), D.set(t, i));
	let a = i.get(r);
	return a || (a = O(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, k = (e, t) => {
	if (e === void 0) return;
	if (typeof e == "string" || Array.isArray(e)) return e;
	let n = e;
	return n[t] ?? n.default;
}, A = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[u];
	if (n && n.locale === t) return n.dictionary;
}, j = "translation", M = "object", N = "array", P = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), F = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, F);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => F(e, P(t, e, {
		type: N,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: M,
			key: r
		};
		if (t.eager) {
			n[r] = F(e[r], P(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = F(e[r], P(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, I = /* @__PURE__ */ new WeakMap(), L = 0, R = (e) => {
	if (!e) return "base";
	let t = I.get(e);
	if (t) return t;
	L += 1;
	let n = `p${L}`;
	return I.set(e, n), n;
}, z = 256, B = /* @__PURE__ */ new WeakMap(), V = (e) => typeof e == "object" && !!e, H = (e, t, n) => `${e}_${t}_${R(n)}`, ne = (e, t) => {
	if (!V(e)) return { hit: !1 };
	let n = B.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, U = (e, t, n) => {
	if (!V(e)) return n;
	let r = B.get(e);
	return r || (r = /* @__PURE__ */ new Map(), B.set(e, r)), r.size >= z && r.clear(), r.set(t, n), n;
}, re = (e, t = !0) => [
	J(e ?? a.defaultLocale, t ? a.defaultLocale : void 0),
	Y,
	se(e ?? a.defaultLocale),
	ce,
	le,
	fe(e ?? a.defaultLocale),
	pe,
	ue,
	de
].filter((e) => e !== q), ie = (e, t, n = []) => F(e, {
	...t,
	plugins: n
}), W = /* @__PURE__ */ new WeakSet(), ae = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, o = H(r ?? a.defaultLocale, "", n), s = ne(e, o);
	if (s.hit) return s.content;
	let c = n ?? re(r), l = e, u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries,
			eager: !W.has(e)
		};
		W.add(e);
		try {
			return ie(e.content, t, c);
		} finally {
			t.eager && W.delete(e);
		}
	};
	return l === null ? U(e, o, null) : Array.isArray(l) ? U(e, o, l.map(u)) : U(e, o, u(l));
}, G = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, K = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !G(e) || !G(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? K(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, oe = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => K(e, t));
}, q = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, J = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? q : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = oe(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: j,
				key: e
			}]
		});
	}
}, Y = q, se = (e) => q, ce = q, le = q, ue = q, de = q, fe = (e) => q, pe = q;
function X(t, n) {
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
var me = (e) => {
	let t = !!X.prototype?.$destroy, n;
	return n = t ? function(t) {
		return new X({
			...t,
			props: {
				...t.props,
				Renderer: e.component,
				rendererProps: e.props,
				value: e.value
			}
		});
	} : (t) => X(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), e.additionalProps && Object.assign(n, e.additionalProps), Object.setPrototypeOf(n, te(e.value, Function.prototype)), n;
}, he = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => me({
		value: t.children ?? e,
		component: void 0,
		props: {}
	})
}, ge = he, _e = q, ve = q, ye = q, Z = /* @__PURE__ */ new Map(), be = (e, t = !0) => {
	let n = `${e ?? a.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		he,
		J(e ?? a.defaultLocale, t ? a.defaultLocale : void 0),
		Y,
		se(e ?? a.defaultLocale),
		ce,
		fe(e ?? a.defaultLocale),
		pe,
		ue,
		de,
		ge,
		_e,
		ve,
		ye
	].filter((e) => e !== q);
	return Z.set(n, r), r;
}, xe = (e, t) => ae(e, t, be(typeof t == "object" && t ? t.locale : t)), Q = new Proxy(() => {}, {
	get: (e, t) => {
		if (t === Symbol.toPrimitive) return () => void 0;
		if (t === "toString") return () => "";
		if (t !== "then") return Q;
	},
	apply: () => Q
}), Se = () => new Proxy({
	isLoading: !0,
	error: null
}, { get: (e, t) => t === "isLoading" ? !0 : t === "error" ? null : Q }), $ = (e) => Array.isArray(e) ? Object.assign(e.slice(), {
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
	let i = ee();
	k(i?.variant, t);
	let a = r, o = n(T, (e) => a ?? i?.locale ?? e.locale);
	return n(o, (t, n) => {
		let r = A(e, t);
		if (r) {
			n($(xe(r, t)));
			return;
		}
		n(Se());
		let i = !1;
		return (async () => {
			try {
				let r;
				{
					let n = e[t];
					if (!n) return;
					r = xe(await n(), t);
				}
				if (i) return;
				n($(r));
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
	}, Se());
}
var we = e.from_html("<form class=\"space-y-6\"><div class=\"grid gap-4 md:grid-cols-2\"><div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <input class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none\"/></div> <div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <input type=\"email\" class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none\" placeholder=\"you@example.com\"/></div></div> <div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <select class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none\"><option> </option><option> </option><option> </option><option> </option><option> </option></select></div> <div><label class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <textarea class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none\"></textarea></div> <button type=\"submit\" class=\"rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\"> </button></form>");
function Te(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(o, "$content", i), [i, a] = e.setup_stores(), o = Ce(x, "contact-form"), s = "contact-name", c = "contact-email", l = "contact-topic", u = "contact-message";
	e.init();
	var d = we(), f = e.child(d), p = e.child(f), m = e.child(p);
	e.set_attribute(m, "for", s);
	var h = e.only_child(m, !0), g = e.sibling(m, 2);
	e.set_attribute(g, "id", s), e.reset(p);
	var _ = e.sibling(p, 2), v = e.child(_);
	e.set_attribute(v, "for", c);
	var y = e.only_child(v, !0), b = e.sibling(v, 2);
	e.set_attribute(b, "id", c), e.reset(_), e.reset(f);
	var S = e.sibling(f, 2), C = e.child(S);
	e.set_attribute(C, "for", l);
	var w = e.only_child(C, !0), T = e.sibling(C, 2);
	e.set_attribute(T, "id", l);
	var E = e.child(T), ee = e.only_child(E, !0), D = {}, O = e.sibling(E), te = e.only_child(O, !0), k = {}, A = e.sibling(O), j = e.only_child(A, !0), M = {}, N = e.sibling(A), P = e.only_child(N, !0), F = {}, I = e.sibling(N), L = e.only_child(I, !0), R = {};
	e.reset(T), e.reset(S);
	var z = e.sibling(S, 2), B = e.child(z);
	e.set_attribute(B, "for", u);
	var V = e.only_child(B, !0), H = e.sibling(B, 2);
	e.set_attribute(H, "id", u), e.set_attribute(H, "rows", 5), e.reset(z);
	var ne = e.sibling(z, 2), U = e.only_child(ne, !0);
	e.reset(d), e.template_effect(() => {
		e.set_text(h, r().name), e.set_attribute(g, "placeholder", r().yourName), e.set_text(y, r().email), e.set_text(w, r().topic), e.set_text(ee, r().bugReport), D !== (D = r().bugReport) && (E.__value = D), e.set_text(te, r().newBenchmarkIdea), k !== (k = r().newBenchmarkIdea) && (O.__value = k), e.set_text(j, r().methodologyQuestion), M !== (M = r().methodologyQuestion) && (A.__value = M), e.set_text(P, r().contribution), F !== (F = r().contribution) && (N.__value = F), e.set_text(L, r().other), R !== (R = r().other) && (I.__value = R), e.set_text(V, r().message), e.set_attribute(H, "placeholder", r().describeYourQuestionOrIdea), e.set_text(U, r().sendMessage);
	}), e.append(t, d), e.pop(), a();
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
}), n = "contact-form", r = {
	sendMessage: "Send Message",
	describeYourQuestionOrIdea: "Describe your question or idea...",
	message: "Message",
	other: "Other",
	contribution: "Contribution",
	methodologyQuestion: "Methodology Question",
	newBenchmarkIdea: "New Benchmark Idea",
	bugReport: "Bug Report",
	topic: "Topic",
	email: "Email",
	yourName: "Your name",
	name: "Name"
}, i = {
	key: n,
	content: r
};
export { t };
