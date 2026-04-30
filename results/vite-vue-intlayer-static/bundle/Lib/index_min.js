import e from "../.intlayer/dictionary/header.json";
import { computed as t, defineComponent as n, getCurrentInstance as r, h as i, inject as a, isRef as o, markRaw as s, ref as c, shallowRef as l, toValue as u, watch as d } from "vue";
var f = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = c(e), i = typeof t == "function" ? (e) => t(e) : () => t, a = (e) => (r.value, i(e)), o = ((e) => a(e));
	return Object.setPrototypeOf(o, String.prototype), Object.assign(o, {
		render: a,
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
			return f({
				value: r.value,
				children: () => i(e),
				additionalProps: n
			});
		},
		__update(e) {
			i = e.render, this.raw = e.raw;
		},
		...n
	}), s(o);
}, p = "translation", m = "object", h = "array", g = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => g(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => g(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: h,
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
					type: m,
					key: r
				}]
			}, i = g(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, _ = {
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
}, v = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, y = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (v(e) && v(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : y(e[r], t[r]));
		return n;
	}
	return e;
}, b = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => y(e, t));
}, x = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, S = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? x : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: p,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return b(o, e, t);
	}
}, C = x, w = x, T = x, E = x, D = (e) => x, O = x, k = (e, t = !0) => [
	S(e ?? _.defaultLocale, t ? _.defaultLocale : void 0),
	C,
	w,
	T,
	D(e ?? _.defaultLocale),
	O,
	E
], A = (e, t, n = []) => g(e, {
	...t,
	plugins: n
}), j = (e, t, n = k(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return A(e.content, r, n);
}, M = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => f({
			...n,
			value: e,
			children: e
		}), i = r(t);
		if (typeof t != "function") return i;
		let a = (...e) => r(t(...e));
		Object.setPrototypeOf(a, Object.getPrototypeOf(i));
		for (let e of Object.getOwnPropertyNames(i)) {
			let t = Object.getOwnPropertyDescriptor(i, e);
			t && Object.defineProperty(a, e, t);
		}
		for (let e of Object.getOwnPropertySymbols(i)) {
			let t = Object.getOwnPropertyDescriptor(i, e);
			t && Object.defineProperty(a, e, t);
		}
		return s(a);
	}
}, N = x, P = x, F = x, I = /* @__PURE__ */ new Map(), L = (e, t = !0) => {
	let n = `${e ?? _.defaultLocale}_${t}`;
	if (I.has(n)) return I.get(n);
	let r = [
		S(e ?? _.defaultLocale, t ? _.defaultLocale : void 0),
		C,
		w,
		D(e ?? _.defaultLocale),
		O,
		E,
		M,
		N,
		P,
		F
	];
	return I.set(n, r), r;
}, R = (e, t) => j(e, t, L(t)), z = Symbol("intlayer"), B = (e, t) => t.reduce((e, t) => e?.[t], e), V = (e) => typeof e == "object" && !!e, H = (e) => typeof e == "function" || V(e) && ("render" in e || "setup" in e), U = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, W = (e) => s(n({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : H(t) ? i(t) : Array.isArray(t) ? i("span", t) : t;
		};
	}
})), G = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return W(() => e.value);
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
}), K = (e, n) => {
	let i = r() ? a(z) : void 0, s = o(i?.locale) ? i.locale : c(i?.locale ?? _.defaultLocale), f = t(() => (n === void 0 ? void 0 : u(n)) ?? s.value), p = l({});
	d([() => u(e), () => f.value], ([e, t]) => {
		p.value = R(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let m = (e) => new Proxy({}, {
		get(n, r, i) {
			if (r === "__v_isRef") return !0;
			let a = t(() => B(p.value, e));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return W(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let o = e.concat(r), s = B(p.value, o);
			if (s === void 0 || V(s) && !H(s)) return m(o);
			if (U(s)) return G(t(() => B(p.value, o)));
			let c = t(() => B(p.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = B(p.value, e);
			return V(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return m([]);
}, q = n({
	__name: "EmptyComponent",
	setup(t, { expose: n }) {
		n();
		let r = { content: K(e) };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), J = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
};
function Y(e, t, n, r, i, a) {
	return null;
}
var X = J(q, [["render", Y], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/scripts/EmptyComponent.vue"]]);
export { X as default };
