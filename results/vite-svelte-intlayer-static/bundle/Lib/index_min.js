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
}, s = /* @__PURE__ */ new WeakMap(), c = 0, l = (e) => {
	if (!e) return "base";
	let t = s.get(e);
	if (t) return t;
	c += 1;
	let n = `p${c}`;
	return s.set(e, n), n;
}, u = 256, d = /* @__PURE__ */ new WeakMap(), f = (e) => typeof e == "object" && !!e, p = (e, t, n) => `${e}_${t}_${l(n)}`, m = (e, t) => {
	if (!f(e)) return { hit: !1 };
	let n = d.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, h = (e, t, n) => {
	if (!f(e)) return n;
	let r = d.get(e);
	return r || (r = /* @__PURE__ */ new Map(), d.set(e, r)), r.size >= u && r.clear(), r.set(t, n), n;
}, g = "translation", ee = "object", _ = "array", v = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => v(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => v(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: _,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ee,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = v(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = v(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, y = "default", te = /[^A-Za-z0-9._&=-]/g, b = /[^A-Za-z0-9._-]/g, ne = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, x = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, ne);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, S = (e) => e === void 0 ? y : typeof e == "string" ? x(e, te) : Object.keys(e).sort().map((t) => `${x(t, b)}=${x(String(e[t]), b)}`).join("&"), C = (e) => Array.isArray(e) ? e.length === 0 ? [y] : e.map(S) : [S(e)], w = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? y : e[0] ?? "default";
}, T = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, E = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, D = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, O = (e, t) => {
	if (!E(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? y : w(C(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => T(e, n, t, s)).map((t) => D(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, k = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, A = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? C(n).join(",") : String(n)}`;
}).join("|") : "", j = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, M = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (j(e) && j(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : M(e[r], t[r]));
		return n;
	}
	return e;
}, re = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => M(e, t));
}, N = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, P = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? N : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: g,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return re(o, e, t);
	}
}, F = N, I = (e) => N, L = N, R = N, z = N, B = N, V = (e) => N, H = N, U = (e, t = !0) => [
	P(e ?? o.defaultLocale, t ? o.defaultLocale : void 0),
	F,
	L,
	R,
	V(e ?? o.defaultLocale),
	H,
	z,
	B
], W = (e, t, n = []) => v(e, {
	...t,
	plugins: n
}), G = (e, t, n) => {
	let { locale: r, selector: i } = k(t), a = p(r ?? o.defaultLocale, A(i), n), s = m(e, a);
	if (s.hit) return s.content;
	let c = n ?? U(r), l = O(e, i), u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries
		};
		return W(e.content, t, c);
	};
	return l === null ? h(e, a, null) : Array.isArray(l) ? h(e, a, l.map(u)) : h(e, a, u(l));
}, K = o?.defaultLocale, q = (() => {
	let { subscribe: e, set: t, update: n } = a({ locale: K });
	return {
		subscribe: e,
		setLocale: (e) => n((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => i({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: K })
	};
})(), J = Symbol("intlayer"), Y = (e) => {
	r(J, e);
}, ie = () => n(J), ae = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, oe = (e, n) => {
	ae();
	let r = t.state(t.proxy(e)), i = t.state(t.proxy(n));
	e && q.setLocale(e);
	let a = {
		get locale() {
			return t.get(r) ?? o.defaultLocale;
		},
		setLocale: (e) => {
			t.set(r, e, !0), q.setLocale(e);
		},
		get variant() {
			return t.get(i);
		},
		setVariant: (e) => {
			t.set(i, e, !0);
		}
	};
	return Y(a), a;
};
function X(e, n) {
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
var se = (e) => {
	let t = !!X.prototype?.$destroy, n;
	if (n = t ? class extends X {
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
	} : (t) => X(t, {
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
}, Z = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => se({
		value: t ?? e,
		component: void 0,
		props: n
	})
}, Q = Z, ce = N, le = N, ue = N, $ = /* @__PURE__ */ new Map(), de = (e, t = !0) => {
	let n = `${e ?? o.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		P(e ?? o.defaultLocale, t ? o.defaultLocale : void 0),
		F,
		I(e ?? o.defaultLocale),
		L,
		V(e ?? o.defaultLocale),
		H,
		z,
		B,
		Z,
		Q,
		ce,
		le,
		ue
	];
	return $.set(n, r), r;
}, fe = (e, t) => G(e, t, de(typeof t == "object" && t ? t.locale : t)), pe = (e, t) => {
	let n = ie();
	return i([q], ([r]) => {
		let i = n?.locale ?? r.locale;
		return fe(e, t ?? i);
	});
};
function me(n, r) {
	t.push(r, !1), oe("en"), pe(e), t.init(), t.pop();
}
export { me as default };
