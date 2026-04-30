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
}, s = "translation", c = "object", l = "array", u = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => u(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => u(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: l,
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
					type: c,
					key: r
				}]
			}, i = u(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, d = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, f = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (d(e) && d(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : f(e[r], t[r]));
		return n;
	}
	return e;
}, p = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => f(e, t));
}, m = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, h = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? m : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: s,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return p(o, e, t);
	}
}, g = m, _ = m, v = m, y = m, b = (e) => m, x = m, S = (e, t = !0) => [
	h(e ?? o.defaultLocale, t ? o.defaultLocale : void 0),
	g,
	_,
	v,
	b(e ?? o.defaultLocale),
	x,
	y
], C = (e, t, n = []) => u(e, {
	...t,
	plugins: n
}), w = (e, t, n = S(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return C(e.content, r, n);
}, T = Symbol("intlayer"), E = (e) => {
	r(T, e);
}, D = () => n(T), O = o?.defaultLocale, k = (() => {
	let { subscribe: e, set: t, update: n } = a({ locale: O });
	return {
		subscribe: e,
		setLocale: (e) => n((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => i({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: O })
	};
})(), A = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, j = (e) => {
	A();
	let n = t.state(t.proxy(e));
	e && k.setLocale(e);
	let r = {
		get locale() {
			return t.get(n) ?? o.defaultLocale;
		},
		setLocale: (e) => {
			t.set(n, e, !0), k.setLocale(e);
		}
	};
	return E(r), r;
};
function M(e, n) {
	let r = t.prop(n, "Renderer", 8, void 0), i = t.prop(n, "rendererProps", 24, () => ({})), a = t.prop(n, "value", 8, void 0);
	var o = t.comment(), s = t.first_child(o), c = (e) => {
		var n = t.comment(), o = t.first_child(n);
		t.element(o, r, !1, (e, n) => {
			t.attribute_effect(e, () => ({ ...i() }));
			var r = t.text();
			t.template_effect(() => t.set_text(r, a())), t.append(n, r);
		}), t.append(e, n);
	}, l = (e) => {
		r()(e, t.spread_props(i, {
			children: (e, n) => {
				t.next();
				var r = t.text();
				t.template_effect(() => t.set_text(r, a())), t.append(e, r);
			},
			$$slots: { default: !0 }
		}));
	}, u = (e) => {
		var n = t.text();
		t.template_effect(() => t.set_text(n, a())), t.append(e, n);
	};
	t.if(s, (e) => {
		typeof r() == "string" ? e(c) : typeof r() == "function" ? e(l, 1) : e(u, -1);
	}), t.append(e, o);
}
var N = (e) => {
	let t = !!M.prototype?.$destroy, n;
	return n = t ? class extends M {
		constructor(t) {
			super({
				...t,
				props: {
					...t.props,
					Renderer: e.component,
					rendererProps: e.props,
					value: e.value
				}
			});
		}
	} : (t) => M(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, "toString", {
		value: () => e.value?.toString() ?? "",
		writable: !0,
		configurable: !0
	}), e.additionalProps && Object.assign(n, e.additionalProps), n;
}, P = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => N({
		value: t ?? e,
		component: void 0,
		props: n
	})
}, F = P, I = m, L = m, R = m, z = /* @__PURE__ */ new Map(), B = (e, t = !0) => {
	let n = `${e ?? o.defaultLocale}_${t}`;
	if (z.has(n)) return z.get(n);
	let r = [
		h(e ?? o.defaultLocale, t ? o.defaultLocale : void 0),
		g,
		_,
		b(e ?? o.defaultLocale),
		x,
		y,
		P,
		F,
		I,
		L,
		R
	];
	return z.set(n, r), r;
}, V = (e, t) => w(e, t, B(t)), H = (e, t) => {
	let n = D();
	return i([k], ([r]) => V(e, t ?? n?.locale ?? r.locale));
};
function U(n, r) {
	t.push(r, !1), j("en"), H(e), t.init(), t.pop();
}
export { U as default };
