import { computed as e, createElementBlock as t, createElementVNode as n, defineComponent as r, getCurrentInstance as i, h as a, inject as o, isRef as s, markRaw as c, openBlock as l, ref as u, shallowRef as d, toDisplayString as f, toValue as p, watch as m } from "vue";
var h = {
	key: "settings-footer",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				a: "Cancel",
				b: "Save Changes"
			},
			fr: {
				a: "Annuler",
				b: "Enregistrer"
			},
			es: {
				a: "Cancelar",
				b: "Guardar cambios"
			},
			de: {
				a: "Abbrechen",
				b: "Änderungen speichern"
			},
			it: {
				a: "Annulla",
				b: "Salva modifiche"
			},
			pt: {
				a: "Cancelar",
				b: "Salvar alterações"
			},
			zh: {
				a: "取消",
				b: "保存更改"
			},
			ja: {
				a: "キャンセル",
				b: "変更を保存"
			},
			ko: {
				a: "취소",
				b: "변경 사항 저장"
			},
			ru: {
				a: "Отмена",
				b: "Сохранить изменения"
			}
		}
	}
}, g = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = u(e), i = typeof t == "function" ? (e) => t(e) : () => t, a = (e) => (r.value, i(e)), o = ((e) => a(e));
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
			return g({
				value: r.value,
				children: () => i(e),
				additionalProps: n
			});
		},
		__update(e) {
			i = e.render, this.raw = e.raw;
		},
		...n
	}), c(o);
}, _ = "translation", v = "object", y = "array", b = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => b(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => b(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: y,
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
					type: v,
					key: r
				}]
			}, i = b(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, x = {
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
}, S = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, C = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (S(e) && S(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : C(e[r], t[r]));
		return n;
	}
	return e;
}, w = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => C(e, t));
}, T = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, E = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? T : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: _,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return w(o, e, t);
	}
}, D = T, O = T, k = T, A = T, j = (e) => T, M = T, N = (e, t = !0) => [
	E(e ?? x.defaultLocale, t ? x.defaultLocale : void 0),
	D,
	O,
	k,
	j(e ?? x.defaultLocale),
	M,
	A
], P = (e, t, n = []) => b(e, {
	...t,
	plugins: n
}), F = (e, t, n = N(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return P(e.content, r, n);
}, I = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => g({
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
		return c(a);
	}
}, L = T, R = T, z = T, B = /* @__PURE__ */ new Map(), V = (e, t = !0) => {
	let n = `${e ?? x.defaultLocale}_${t}`;
	if (B.has(n)) return B.get(n);
	let r = [
		E(e ?? x.defaultLocale, t ? x.defaultLocale : void 0),
		D,
		O,
		j(e ?? x.defaultLocale),
		M,
		A,
		I,
		L,
		R,
		z
	];
	return B.set(n, r), r;
}, H = (e, t) => F(e, t, V(t)), U = Symbol("intlayer"), W = (e, t) => t.reduce((e, t) => e?.[t], e), G = (e) => typeof e == "object" && !!e, K = (e) => typeof e == "function" || G(e) && ("render" in e || "setup" in e), q = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, J = (e) => c(r({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : K(t) ? a(t) : Array.isArray(t) ? a("span", t) : t;
		};
	}
})), Y = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return J(() => e.value);
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
}), X = (t, n) => {
	let r = i() ? o(U) : void 0, a = s(r?.locale) ? r.locale : u(r?.locale ?? x.defaultLocale), c = e(() => (n === void 0 ? void 0 : p(n)) ?? a.value), l = d({});
	m([() => p(t), () => c.value], ([e, t]) => {
		l.value = H(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let f = (t) => new Proxy({}, {
		get(n, r, i) {
			if (r === "__v_isRef") return !0;
			let a = e(() => W(l.value, t));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return J(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let o = t.concat(r), s = W(l.value, o);
			if (s === void 0 || G(s) && !K(s)) return f(o);
			if (q(s)) return Y(e(() => W(l.value, o)));
			let c = e(() => W(l.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let e = W(l.value, t);
			return G(e) ? Reflect.ownKeys(e) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return f([]);
}, Z = r({
	__name: "SettingsFooter",
	setup(e, { expose: t }) {
		t();
		let { a: n, b: r } = X(h), i = {
			cancel: n,
			saveChanges: r
		};
		return Object.defineProperty(i, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), i;
	}
}), Q = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, $ = { class: "flex justify-end gap-3" }, ee = {
	type: "button",
	class: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
}, te = {
	type: "submit",
	class: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
};
function ne(e, r, i, a, o, s) {
	return l(), t("div", $, [n("button", ee, f(a.cancel), 1), n("button", te, f(a.saveChanges), 1)]);
}
var re = Q(Z, [["render", ne], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/pages/settings/SettingsFooter.vue"]]);
export { re as default };
