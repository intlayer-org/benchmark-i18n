import { computed as e, createElementBlock as t, createElementVNode as n, defineComponent as r, getCurrentInstance as i, h as a, inject as o, isRef as s, markRaw as c, openBlock as l, ref as u, shallowRef as d, toDisplayString as f, toValue as p, watch as m } from "vue";
var h = {
	key: "api-access-section",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				d: "API Access",
				a: "API Key",
				b: "Copy",
				c: "Use this key to access the benchmarking API programmatically."
			},
			fr: {
				d: "Accès API",
				a: "Clé API",
				b: "Copier",
				c: "Utilisez cette clé pour appeler l'API de benchmark par programmation."
			},
			es: {
				d: "Acceso API",
				a: "Clave API",
				b: "Copiar",
				c: "Utilice esta clave para acceder a la API de benchmarking de forma programada."
			},
			de: {
				d: "API-Zugriff",
				a: "API-Schlüssel",
				b: "Kopieren",
				c: "Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen."
			},
			it: {
				d: "Accesso API",
				a: "Chiave API",
				b: "Copia",
				c: "Usa questa chiave per accedere all'API di benchmarking in modo programmatico."
			},
			pt: {
				d: "Acesso API",
				a: "Chave API",
				b: "Copiar",
				c: "Use esta chave para acessar a API de benchmarking programaticamente."
			},
			zh: {
				d: "API 访问",
				a: "API 密钥",
				b: "复制",
				c: "使用此密钥以编程方式访问基准测试 API。"
			},
			ja: {
				d: "API アクセス",
				a: "API キー",
				b: "コピー",
				c: "このキーを使用して、プログラムでベンチマーク API にアクセスします。"
			},
			ko: {
				d: "API 액세스",
				a: "API 키",
				b: "복사",
				c: "이 키를 사용하여 프로그래밍 방식으로 벤치마킹 API에 액세스하십시오."
			},
			ru: {
				d: "Доступ к API",
				a: "Ключ API",
				b: "Копировать",
				c: "Используйте этот ключ для программного доступа к API бенчмаркинга."
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
	__name: "ApiAccessSection",
	setup(e, { expose: t }) {
		t();
		let { d: n, a: r, b: i, c: a } = X(h), o = {
			title: n,
			apiKeyLabel: r,
			copy: i,
			description: a
		};
		return Object.defineProperty(o, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), o;
	}
}), Q = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, $ = { class: "rounded-lg border border-border bg-card p-6" }, ee = { class: "mb-4 text-lg font-semibold text-foreground" }, te = {
	for: "apiKey",
	class: "mb-1 block text-sm font-medium text-foreground"
}, ne = { class: "flex gap-2" }, re = {
	type: "button",
	class: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
}, ie = { class: "mt-1 text-xs text-muted-foreground" };
function ae(e, r, i, a, o, s) {
	return l(), t("section", $, [n("h2", ee, f(a.title), 1), n("div", null, [
		n("label", te, f(a.apiKeyLabel), 1),
		n("div", ne, [r[0] ||= n("input", {
			id: "apiKey",
			readonly: "",
			value: "sk_bench_xxxxxxxxxxxxxxxxxxxx",
			class: "flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
		}, null, -1), n("button", re, f(a.copy), 1)]),
		n("p", ie, f(a.description), 1)
	])]);
}
var oe = Q(Z, [["render", ae], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-dynamic/vue-intlayer-app/src/components/pages/settings/ApiAccessSection.vue"]]);
export { oe as default };
