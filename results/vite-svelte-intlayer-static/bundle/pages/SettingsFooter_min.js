import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { getContext as t } from "svelte";
import { derived as n, writable as r } from "svelte/store";
var i = {
	key: "settings-footer",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				saveChanges: "Save Changes",
				cancel: "Cancel"
			},
			fr: {
				saveChanges: "Enregistrer les modifications",
				cancel: "Annuler"
			},
			es: {
				saveChanges: "Guardar cambios",
				cancel: "Cancelar"
			},
			de: {
				saveChanges: "Änderungen speichern",
				cancel: "Abbrechen"
			},
			it: {
				saveChanges: "Salva modifiche",
				cancel: "Annulla"
			},
			pt: {
				saveChanges: "Salvar alterações",
				cancel: "Cancelar"
			},
			zh: {
				saveChanges: "保存更改",
				cancel: "取消"
			},
			ja: {
				saveChanges: "変更を保存",
				cancel: "キャンセル"
			},
			ko: {
				saveChanges: "변경 사항 저장",
				cancel: "취소"
			},
			ru: {
				saveChanges: "Сохранить изменения",
				cancel: "Отмена"
			}
		}
	}
}, a = {
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
}, o = a?.defaultLocale, s = (() => {
	let { subscribe: e, set: t, update: i } = r({ locale: o });
	return {
		subscribe: e,
		setLocale: (e) => i((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => n({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: o })
	};
})(), c = Symbol("intlayer"), l = () => t(c), u = /* @__PURE__ */ new Map(), d = (e, t) => Object.create(new Proxy(e, {
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
}), f = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = u.get(t);
	i || (i = /* @__PURE__ */ new Map(), u.set(t, i));
	let a = i.get(r);
	return a || (a = d(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, p = "translation", m = "object", h = "array", g = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), _ = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, _);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => _(e, g(t, e, {
		type: h,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: m,
			key: r
		};
		if (t.eager) {
			n[r] = _(e[r], g(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = _(e[r], g(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, v = /* @__PURE__ */ new WeakMap(), y = 0, b = (e) => {
	if (!e) return "base";
	let t = v.get(e);
	if (t) return t;
	y += 1;
	let n = `p${y}`;
	return v.set(e, n), n;
}, x = 256, S = /* @__PURE__ */ new WeakMap(), C = (e) => typeof e == "object" && !!e, w = (e, t, n) => `${e}_${t}_${b(n)}`, T = (e, t) => {
	if (!C(e)) return { hit: !1 };
	let n = S.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, E = (e, t, n) => {
	if (!C(e)) return n;
	let r = S.get(e);
	return r || (r = /* @__PURE__ */ new Map(), S.set(e, r)), r.size >= x && r.clear(), r.set(t, n), n;
}, D = (e, t = !0) => [
	F(e ?? a.defaultLocale, t ? a.defaultLocale : void 0),
	I,
	L(e ?? a.defaultLocale),
	R,
	z,
	H(e ?? a.defaultLocale),
	U,
	B,
	V
].filter((e) => e !== P), O = (e, t, n = []) => _(e, {
	...t,
	plugins: n
}), k = /* @__PURE__ */ new WeakSet(), A = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, o = w(r ?? a.defaultLocale, "", n), s = T(e, o);
	if (s.hit) return s.content;
	let c = n ?? D(r), l = e, u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries,
			eager: !k.has(e)
		};
		k.add(e);
		try {
			return O(e.content, t, c);
		} finally {
			t.eager && k.delete(e);
		}
	};
	return l === null ? E(e, o, null) : Array.isArray(l) ? E(e, o, l.map(u)) : E(e, o, u(l));
}, j = (e) => {
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
}, P = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, F = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? P : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = N(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: p,
				key: e
			}]
		});
	}
}, I = P, L = (e) => P, R = P, z = P, B = P, V = P, H = (e) => P, U = P;
function W(t, n) {
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
var G = (e) => {
	let t = !!W.prototype?.$destroy, n;
	return n = t ? function(t) {
		return new W({
			...t,
			props: {
				...t.props,
				Renderer: e.component,
				rendererProps: e.props,
				value: e.value
			}
		});
	} : (t) => W(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), e.additionalProps && Object.assign(n, e.additionalProps), Object.setPrototypeOf(n, f(e.value, Function.prototype)), n;
}, K = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => G({
		value: t.children ?? e,
		component: void 0,
		props: {}
	})
}, q = K, J = P, Y = P, X = P, Z = /* @__PURE__ */ new Map(), Q = (e, t = !0) => {
	let n = `${e ?? a.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		K,
		F(e ?? a.defaultLocale, t ? a.defaultLocale : void 0),
		I,
		L(e ?? a.defaultLocale),
		R,
		H(e ?? a.defaultLocale),
		U,
		B,
		V,
		q,
		J,
		Y,
		X
	].filter((e) => e !== P);
	return Z.set(n, r), r;
}, $ = (e, t) => A(e, t, Q(typeof t == "object" && t ? t.locale : t)), ee = (e, t) => {
	let r = l();
	return n([s], ([n]) => {
		let i = r?.locale ?? n.locale;
		return $(e, t ?? i);
	});
}, te = e.from_html("<div class=\"flex justify-end gap-3\"><button type=\"button\" class=\"rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent\"> </button> <button type=\"submit\" class=\"rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\"> </button></div>");
function ne(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(s, "$content", a), [a, o] = e.setup_stores(), s = ee(i);
	e.init();
	var c = te(), l = e.child(c), u = e.only_child(l, !0), d = e.sibling(l, 2), f = e.only_child(d, !0);
	e.reset(c), e.template_effect(() => {
		e.set_text(u, r().cancel), e.set_text(f, r().saveChanges);
	}), e.append(t, c), e.pop(), o();
}
export { ne as default };
