import { computed as e, createElementBlock as t, createElementVNode as n, defineComponent as r, getCurrentInstance as i, h as a, inject as o, isRef as s, markRaw as c, openBlock as l, ref as u, shallowRef as d, toDisplayString as f, toValue as p, watch as m } from "vue";
var h = {
	key: "profile-section",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				c: "Profile",
				a: "Display Name",
				b: "Email"
			},
			fr: {
				c: "Profil",
				a: "Nom affiché",
				b: "E-mail"
			},
			es: {
				c: "Perfil",
				a: "Nombre a mostrar",
				b: "Correo electrónico"
			},
			de: {
				c: "Profil",
				a: "Anzeigename",
				b: "E-Mail"
			},
			it: {
				c: "Profilo",
				a: "Nome visualizzato",
				b: "E-mail"
			},
			pt: {
				c: "Perfil",
				a: "Nome de exibição",
				b: "E-mail"
			},
			zh: {
				c: "个人资料",
				a: "显示名称",
				b: "电子邮件"
			},
			ja: {
				c: "プロフィール",
				a: "表示名",
				b: "メールアドレス"
			},
			ko: {
				c: "프로필",
				a: "표시 이름",
				b: "이메일"
			},
			ru: {
				c: "Профиль",
				a: "Отображаемое имя",
				b: "Электронная почта"
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
}, T = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", E = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, D = (e, t) => T ? E : {
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
}, O = E, k = E, A = E, j = E, M = (e) => E, N = E, P = (e, t = !0) => [
	D(e ?? x.defaultLocale, t ? x.defaultLocale : void 0),
	O,
	k,
	A,
	M(e ?? x.defaultLocale),
	N,
	j
], F = (e, t, n = []) => b(e, {
	...t,
	plugins: n
}), I = (e, t, n = P(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return F(e.content, r, n);
}, L = {
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
}, R = E, z = E, B = E, V = /* @__PURE__ */ new Map(), H = (e, t = !0) => {
	let n = `${e ?? x.defaultLocale}_${t}`;
	if (V.has(n)) return V.get(n);
	let r = [
		D(e ?? x.defaultLocale, t ? x.defaultLocale : void 0),
		O,
		k,
		M(e ?? x.defaultLocale),
		N,
		j,
		L,
		R,
		z,
		B
	];
	return V.set(n, r), r;
}, U = (e, t) => I(e, t, H(t)), W = Symbol("intlayer"), G = (e, t) => t.reduce((e, t) => e?.[t], e), K = (e) => typeof e == "object" && !!e, q = (e) => typeof e == "function" || K(e) && ("render" in e || "setup" in e), J = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Y = (e) => c(r({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : q(t) ? a(t) : Array.isArray(t) ? a("span", t) : t;
		};
	}
})), X = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return Y(() => e.value);
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
}), Z = (t, n) => {
	let r = i() ? o(W) : void 0, a = s(r?.locale) ? r.locale : u(r?.locale ?? x.defaultLocale), c = e(() => (n === void 0 ? void 0 : p(n)) ?? a.value), l = d({});
	m([() => p(t), () => c.value], ([e, t]) => {
		l.value = U(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let f = (t) => new Proxy({}, {
		get(n, r, i) {
			if (r === "__v_isRef") return !0;
			let a = e(() => G(l.value, t));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return Y(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let o = t.concat(r), s = G(l.value, o);
			if (s === void 0 || K(s) && !q(s)) return f(o);
			if (J(s)) return X(e(() => G(l.value, o)));
			let c = e(() => G(l.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let e = G(l.value, t);
			return K(e) ? Reflect.ownKeys(e) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return f([]);
}, Q = r({
	__name: "ProfileSection",
	setup(e, { expose: t }) {
		t();
		let { c: n, a: r, b: i } = Z(h), a = {
			title: n,
			displayNameLabel: r,
			emailLabel: i
		};
		return Object.defineProperty(a, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), a;
	}
}), $ = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, ee = { class: "rounded-lg border border-border bg-card p-6" }, te = { class: "mb-4 text-lg font-semibold text-foreground" }, ne = { class: "space-y-4" }, re = {
	for: "displayName",
	class: "mb-1 block text-sm font-medium text-foreground"
}, ie = {
	for: "email",
	class: "mb-1 block text-sm font-medium text-foreground"
};
function ae(e, r, i, a, o, s) {
	return l(), t("section", ee, [n("h2", te, f(a.title), 1), n("div", ne, [n("div", null, [n("label", re, f(a.displayNameLabel), 1), r[0] ||= n("input", {
		id: "displayName",
		value: "John Developer",
		class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
	}, null, -1)]), n("div", null, [n("label", ie, f(a.emailLabel), 1), r[1] ||= n("input", {
		id: "email",
		value: "john@example.com",
		class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
	}, null, -1)])])]);
}
var oe = $(Q, [["render", ae], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/pages/settings/ProfileSection.vue"]]);
export { oe as default };
