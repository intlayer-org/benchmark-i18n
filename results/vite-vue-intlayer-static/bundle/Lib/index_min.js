import { computed as e, defineComponent as t, h as n, inject as r, isRef as i, markRaw as a, ref as o, shallowRef as s, toValue as c, watch as l } from "vue";
import u from "../.intlayer/dictionary/products-grid.json";
import d from "../.intlayer/dictionary/preferences-section.json";
import f from "../.intlayer/dictionary/header.json";
import p from "../.intlayer/dictionary/open-positions.json";
import m from "../.intlayer/dictionary/careers-benefits.json";
import h from "../.intlayer/dictionary/footer.json";
import ee from "../.intlayer/dictionary/results-table.json";
import te from "../.intlayer/dictionary/settings-header.json";
import ne from "../.intlayer/dictionary/contact-form.json";
import re from "../.intlayer/dictionary/contact-header.json";
import g from "../.intlayer/dictionary/about-grid.json";
import _ from "../.intlayer/dictionary/pricing-tiers.json";
import ie from "../.intlayer/dictionary/settings-footer.json";
import ae from "../.intlayer/dictionary/theme-toggle.json";
import oe from "../.intlayer/dictionary/about-header.json";
import se from "../.intlayer/dictionary/profile-section.json";
import ce from "../.intlayer/dictionary/pricing-header.json";
import le from "../.intlayer/dictionary/faq-header.json";
import ue from "../.intlayer/dictionary/blog-header.json";
import de from "../.intlayer/dictionary/team-header.json";
import fe from "../.intlayer/dictionary/not-found.json";
import pe from "../.intlayer/dictionary/mock-banner.json";
import me from "../.intlayer/dictionary/faq-list.json";
import he from "../.intlayer/dictionary/careers-header.json";
import ge from "../.intlayer/dictionary/products-header.json";
import _e from "../.intlayer/dictionary/what-we-measure.json";
import ve from "../.intlayer/dictionary/blog-list.json";
import ye from "../.intlayer/dictionary/understanding-impact.json";
import be from "../.intlayer/dictionary/team-grid.json";
import xe from "../.intlayer/dictionary/api-access-section.json";
import Se from "../.intlayer/dictionary/why-it-matters.json";
import Ce from "../.intlayer/dictionary/hero.json";
var v = /* @__PURE__ */ new WeakMap(), y = 0, we = (e) => {
	if (!e) return "base";
	let t = v.get(e);
	if (t) return t;
	y += 1;
	let n = `p${y}`;
	return v.set(e, n), n;
}, Te = 256, b = /* @__PURE__ */ new WeakMap(), x = (e) => typeof e == "object" && !!e, Ee = (e, t, n) => `${e}_${t}_${we(n)}`, De = (e, t) => {
	if (!x(e)) return { hit: !1 };
	let n = b.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, S = (e, t, n) => {
	if (!x(e)) return n;
	let r = b.get(e);
	return r || (r = /* @__PURE__ */ new Map(), b.set(e, r)), r.size >= Te && r.clear(), r.set(t, n), n;
}, C = "translation", w = "object", T = "array", E = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), D = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, D);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => D(e, E(t, e, {
		type: T,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: w,
			key: r
		};
		if (t.eager) {
			n[r] = D(e[r], E(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = D(e[r], E(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, O = {
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
}, Oe = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, k = "\x1B[0m", ke = "\x1B[34m", Ae = "\x1B[31m", je = "\x1B[32m", Me = "\x1B[38;5;3m", Ne = (e) => e, Pe = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Ne(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Fe = (e, t) => (n, r) => Pe(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), A = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? k : n : k}` : e, Ie = (e, t = Me, n = k) => [e].flat().map((e) => A(e, t, n)).join(", ");
A("✗", Ae), A("✓", je), A("⏲", ke);
var Le = {
	"products-grid": u,
	"preferences-section": d,
	header: f,
	"open-positions": p,
	"careers-benefits": m,
	footer: h,
	"results-table": ee,
	"settings-header": te,
	"contact-form": ne,
	"contact-header": re,
	"about-grid": g,
	"pricing-tiers": _,
	"settings-footer": ie,
	"theme-toggle": ae,
	"about-header": oe,
	"profile-section": se,
	"pricing-header": ce,
	"faq-header": le,
	"blog-header": ue,
	"team-header": de,
	"not-found": fe,
	"mock-banner": pe,
	"faq-list": me,
	"careers-header": he,
	"products-header": ge,
	"what-we-measure": _e,
	"blog-list": ve,
	"understanding-impact": ye,
	"team-grid": be,
	"api-access-section": xe,
	"why-it-matters": Se,
	hero: Ce
}, Re = () => Le, ze = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), j = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : ze.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : j(e ? `${e}.${String(n)}` : String(n)) }), M = /* @__PURE__ */ new Set(), Be = (e, t, n) => {
	let r = Re()[e];
	return r ? Ge(r, t, n) : (M.has(e) || (Fe({ log: Oe })(typeof window > "u" ? `Dictionary ${Ie(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), M.add(e)), j(e));
}, N = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, P = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !N(e) || !N(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? P(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, Ve = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => P(e, t));
}, F = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, I = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? F : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Ve(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: C,
				key: e
			}]
		});
	}
}, L = F, R = (e) => F, z = F, He = F, B = F, V = F;
process.env.INTLAYER_OPTIMIZED_NESTING;
var H = (e) => F, U = F, Ue = (e, t = !0) => [
	I(e ?? O.defaultLocale, t ? O.defaultLocale : void 0),
	L,
	R(e ?? O.defaultLocale),
	z,
	He,
	H(e ?? O.defaultLocale),
	U,
	B,
	V
].filter((e) => e !== F), We = (e, t, n = []) => D(e, {
	...t,
	plugins: n
}), W = /* @__PURE__ */ new WeakSet(), Ge = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = Ee(r ?? O.defaultLocale, "", n), o = De(e, a);
	if (o.hit) return o.content;
	let s = n ?? Ue(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !W.has(e)
		};
		W.add(e);
		try {
			return We(e.content, t, s);
		} finally {
			t.eager && W.delete(e);
		}
	};
	return c === null ? S(e, a, null) : Array.isArray(c) ? S(e, a, c.map(l)) : S(e, a, l(c));
}, G = /* @__PURE__ */ new Map(), Ke = (e, t) => Object.create(new Proxy(e, {
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
}), qe = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = G.get(t);
	i || (i = /* @__PURE__ */ new Map(), G.set(t, i));
	let a = i.get(r);
	return a || (a = Ke(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, K = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = o(e), i = typeof t == "function" ? (e) => t(e) : () => t, s = (e) => (r.value, i(e)), c = ((e) => s(e));
	return Object.assign(c, {
		render: s,
		toString: () => String(r.value ?? ""),
		valueOf: () => r.value,
		[Symbol.toPrimitive]: () => r.value,
		toJSON: () => r.value,
		get raw() {
			return r.value;
		},
		set raw(e) {
			r.value = e;
		},
		get value() {
			return r.value;
		},
		use(e) {
			return K({
				value: r.value,
				children: () => i(e),
				additionalProps: n
			});
		},
		__update(e) {
			i = e.render, this.raw = e.raw;
		},
		...n
	}), Object.setPrototypeOf(c, qe(e, Function.prototype)), a(c);
}, Je = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => {
		let { children: n, dictionaryKey: r, keyPath: i } = t, o = (e) => K({
			value: e,
			children: e
		}), s = o(n);
		if (typeof n != "function") return s;
		let c = (...e) => {
			let t = n(...e);
			return o(t);
		};
		Object.setPrototypeOf(c, Object.getPrototypeOf(s));
		for (let e of Object.getOwnPropertyNames(s)) {
			let t = Object.getOwnPropertyDescriptor(s, e);
			t && Object.defineProperty(c, e, t);
		}
		for (let e of Object.getOwnPropertySymbols(s)) {
			let t = Object.getOwnPropertyDescriptor(s, e);
			t && Object.defineProperty(c, e, t);
		}
		return a(c);
	}
}, Ye = F, Xe = F, q = F, J = /* @__PURE__ */ new Map(), Ze = (e, t = !0) => {
	let n = `${e ?? O.defaultLocale}_${t}`;
	if (J.has(n)) return J.get(n);
	let r = [
		Je,
		I(e ?? O.defaultLocale, t ? O.defaultLocale : void 0),
		L,
		R(e ?? O.defaultLocale),
		z,
		H(e ?? O.defaultLocale),
		U,
		B,
		V,
		Ye,
		Xe,
		q
	].filter((e) => e !== F);
	return J.set(n, r), r;
}, Y = (e, t) => Be(e, t, Ze(typeof t == "object" && t ? t.locale : t)), Qe = Symbol("intlayer"), X = (e, t) => t.reduce((e, t) => e?.[t], e), Z = (e) => typeof e == "object" && !!e, Q = (e) => typeof e == "function" || Z(e) && ("render" in e || "setup" in e), $e = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, $ = (e) => a(t({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : Q(t) ? n(t) : Array.isArray(t) ? n("span", t) : t;
		};
	}
})), et = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return $(() => e.value);
		if (r == null) return n === Symbol.toPrimitive || n === "toString" ? () => "" : void 0;
		let i = r[n];
		return typeof i == "function" ? i.bind(r) : i;
	},
	ownKeys() {
		let t = e.value;
		return typeof t == "object" && t ? Reflect.ownKeys(t) : [];
	},
	getOwnPropertyDescriptor() {
		return {
			enumerable: !0,
			configurable: !0
		};
	}
}), tt = (t, n) => {
	let a = r(Qe), u = i(a?.locale) ? a.locale : o(a?.locale ?? O.defaultLocale), d = e(() => ({
		selector: void 0,
		locale: n === void 0 ? void 0 : c(n)
	})), f = e(() => d.value.locale ?? u.value), p = s({});
	l([
		() => c(t),
		() => f.value,
		() => d.value.selector
	], ([e, t, n]) => {
		p.value = n ? Y(e, {
			...n,
			locale: t
		}) : Y(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let m = /* @__PURE__ */ new Map(), h = (t) => {
		let n = t.join(".");
		if (m.has(n)) return m.get(n);
		let r = e(() => X(p.value, t)), i = new Proxy({}, {
			get(n, i, a) {
				if (typeof i == "symbol" || typeof i == "string" && (i.startsWith("__") || i.startsWith("$"))) return i === "__v_isRef" ? !0 : i === "then" ? void 0 : Reflect.get(n, i, a);
				if (i === "value") return r.value ?? "";
				if (i === "c" || i === "asComponent") return $(() => r.value);
				if (i === "$raw") return r;
				if (i === Symbol.toPrimitive) return () => String(r.value ?? "");
				let o = t.concat(i), s = X(p.value, o);
				if (s === void 0 || Z(s) && !Q(s)) return h(o);
				if ($e(s)) return et(e(() => X(p.value, o)));
				if (typeof s == "function") {
					let e = X(p.value, t);
					return e != null && !Object.hasOwn(e, i) ? s.bind(e) : (...e) => X(p.value, o)?.(...e);
				}
				let c = e(() => X(p.value, o));
				return new Proxy(c, { get(e, t, n) {
					return t === "value" ? e.value ?? "" : t === "__v_isRef" || Reflect.get(e, t, n);
				} });
			},
			ownKeys() {
				let e = X(p.value, t);
				return Z(e) ? Reflect.ownKeys(e) : [];
			},
			getOwnPropertyDescriptor() {
				return {
					enumerable: !0,
					configurable: !0
				};
			}
		});
		return m.set(n, i), i;
	};
	return h([]);
}, nt = t({
	__name: "EmptyComponent",
	setup(e) {
		return tt("header"), (e, t) => null;
	}
});
export { nt as default };
