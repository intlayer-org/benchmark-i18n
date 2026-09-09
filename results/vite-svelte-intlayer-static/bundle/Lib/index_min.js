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
}, s = o?.defaultLocale, c = (() => {
	let { subscribe: e, set: t, update: n } = a({ locale: s });
	return {
		subscribe: e,
		setLocale: (e) => n((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => i({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: s })
	};
})(), l = Symbol("intlayer"), u = (e) => {
	r(l, e);
}, d = () => n(l), f = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, p = (e, n) => {
	f();
	let r = t.state(t.proxy(e)), i = t.state(t.proxy(n));
	e && c.setLocale(e);
	let a = {
		get locale() {
			return t.get(r) ?? o.defaultLocale;
		},
		setLocale: (e) => {
			t.set(r, e, !0), c.setLocale(e);
		},
		get variant() {
			return t.get(i);
		},
		setVariant: (e) => {
			t.set(i, e, !0);
		}
	};
	return u(a), a;
}, m = "default", ee = /[^A-Za-z0-9._&=-]/g, h = /[^A-Za-z0-9._-]/g, g = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, _ = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, g);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, v = (e) => e === void 0 ? m : typeof e == "string" ? _(e, ee) : Object.keys(e).sort().map((t) => `${_(t, h)}=${_(String(e[t]), h)}`).join("&"), y = (e) => Array.isArray(e) ? e.length === 0 ? [m] : e.map(v) : [v(e)], b = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? m : e[0] ?? "default";
}, x = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, S = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, te = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, ne = (e, t) => {
	if (!S(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? m : b(y(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => x(e, n, t, s)).map((t) => te(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, C = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, w = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? y(n).join(",") : String(n)}`;
}).join("|") : "", T = "translation", E = "object", D = "array", O = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => O(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => O(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: D,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: E,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = O(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = O(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, k = /* @__PURE__ */ new WeakMap(), A = 0, re = (e) => {
	if (!e) return "base";
	let t = k.get(e);
	if (t) return t;
	A += 1;
	let n = `p${A}`;
	return k.set(e, n), n;
}, ie = 256, j = /* @__PURE__ */ new WeakMap(), M = (e) => typeof e == "object" && !!e, ae = (e, t, n) => `${e}_${t}_${re(n)}`, N = (e, t) => {
	if (!M(e)) return { hit: !1 };
	let n = j.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, P = (e, t, n) => {
	if (!M(e)) return n;
	let r = j.get(e);
	return r || (r = /* @__PURE__ */ new Map(), j.set(e, r)), r.size >= ie && r.clear(), r.set(t, n), n;
}, F = (e, t = !0) => [
	H(e ?? o.defaultLocale, t ? o.defaultLocale : void 0),
	U,
	G,
	K,
	Y(e ?? o.defaultLocale),
	X,
	q,
	J
], I = (e, t, n = []) => O(e, {
	...t,
	plugins: n
}), L = (e, t, n) => {
	let { locale: r, selector: i } = C(t), a = ae(r ?? o.defaultLocale, w(i), n), s = N(e, a);
	if (s.hit) return s.content;
	let c = n ?? F(r), l = ne(e, i), u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries
		};
		return I(e.content, t, c);
	};
	return l === null ? P(e, a, null) : Array.isArray(l) ? P(e, a, l.map(u)) : P(e, a, u(l));
}, R = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, z = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (R(e) && R(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : z(e[r], t[r]));
		return n;
	}
	return e;
}, B = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => z(e, t));
}, V = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, H = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? V : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: T,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return B(o, e, t);
	}
}, U = V, W = (e) => V, G = V, K = V, q = V, J = V, Y = (e) => V, X = V;
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
var oe = (e) => {
	let t = !!Z.prototype?.$destroy, n;
	if (n = t ? class extends Z {
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
	} : (t) => Z(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, "toString", {
		value: () => String(e.value ?? ""),
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, "valueOf", {
		value: () => e.value,
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, Symbol.toPrimitive, {
		value: () => e.value ?? "",
		writable: !0,
		configurable: !0
	}), e.value !== null && e.value !== void 0) {
		let t = Object(e.value), r = Object.getPrototypeOf(t);
		for (let i of Object.getOwnPropertyNames(r)) {
			if (i === "constructor" || i in n) continue;
			let r = t[i];
			typeof r == "function" && Object.defineProperty(n, i, {
				value: r.bind(e.value),
				writable: !0,
				configurable: !0
			});
		}
	}
	return e.additionalProps && Object.assign(n, e.additionalProps), n;
}, Q = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => oe({
		value: t ?? e,
		component: void 0,
		props: n
	})
}, se = Q, ce = V, le = V, ue = V, $ = /* @__PURE__ */ new Map(), de = (e, t = !0) => {
	let n = `${e ?? o.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		H(e ?? o.defaultLocale, t ? o.defaultLocale : void 0),
		U,
		W(e ?? o.defaultLocale),
		G,
		Y(e ?? o.defaultLocale),
		X,
		q,
		J,
		Q,
		se,
		ce,
		le,
		ue
	];
	return $.set(n, r), r;
}, fe = (e, t) => L(e, t, de(typeof t == "object" && t ? t.locale : t)), pe = (e, t) => {
	let n = d();
	return i([c], ([r]) => {
		let i = n?.locale ?? r.locale;
		return fe(e, t ?? i);
	});
};
function me(n, r) {
	t.push(r, !1), p("en"), pe(e), t.init(), t.pop();
}
export { me as default };
