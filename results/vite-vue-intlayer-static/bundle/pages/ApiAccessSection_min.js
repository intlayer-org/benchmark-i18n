import { computed as e, createElementBlock as t, createElementVNode as n, defineComponent as r, getCurrentInstance as i, h as a, inject as o, isRef as s, markRaw as c, openBlock as l, ref as u, shallowRef as ee, toDisplayString as d, toValue as f, unref as p, watch as m } from "vue";
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
}, g = {
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
}, _ = Symbol("intlayer"), v = /* @__PURE__ */ new WeakMap(), y = 0, te = (e) => {
	if (!e) return "base";
	let t = v.get(e);
	if (t) return t;
	y += 1;
	let n = `p${y}`;
	return v.set(e, n), n;
}, ne = 256, b = /* @__PURE__ */ new WeakMap(), x = (e) => typeof e == "object" && !!e, re = (e, t, n) => `${e}_${t}_${te(n)}`, ie = (e, t) => {
	if (!x(e)) return { hit: !1 };
	let n = b.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, S = (e, t, n) => {
	if (!x(e)) return n;
	let r = b.get(e);
	return r || (r = /* @__PURE__ */ new Map(), b.set(e, r)), r.size >= ne && r.clear(), r.set(t, n), n;
}, ae = "translation", C = "object", w = "array", T = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => T(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => T(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: w,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: C,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = T(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = T(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, E = "default", D = /[^A-Za-z0-9._&=-]/g, O = /[^A-Za-z0-9._-]/g, oe = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, k = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, oe);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, A = (e) => e === void 0 ? E : typeof e == "string" ? k(e, D) : Object.keys(e).sort().map((t) => `${k(t, O)}=${k(String(e[t]), O)}`).join("&"), j = (e) => Array.isArray(e) ? e.length === 0 ? [E] : e.map(A) : [A(e)], se = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? E : e[0] ?? "default";
}, ce = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, le = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, ue = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, de = (e, t) => {
	if (!le(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? E : se(j(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ce(e, n, t, s)).map((t) => ue(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, fe = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, M = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? j(n).join(",") : String(n)}`;
}).join("|") : "", N = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, P = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (N(e) && N(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : P(e[r], t[r]));
		return n;
	}
	return e;
}, F = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => P(e, t));
}, I = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, L = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? I : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ae,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return F(o, e, t);
	}
}, R = I, z = (e) => I, B = I, V = I, H = I, U = I, W = (e) => I, G = I, pe = (e, t = !0) => [
	L(e ?? g.defaultLocale, t ? g.defaultLocale : void 0),
	R,
	B,
	V,
	W(e ?? g.defaultLocale),
	G,
	H,
	U
], me = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), he = (e, t, n) => {
	let { locale: r, selector: i } = fe(t), a = re(r ?? g.defaultLocale, M(i), n), o = ie(e, a);
	if (o.hit) return o.content;
	let s = n ?? pe(r), c = de(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return me(e.content, t, s);
	};
	return c === null ? S(e, a, null) : Array.isArray(c) ? S(e, a, c.map(l)) : S(e, a, l(c));
}, K = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = u(e), i = typeof t == "function" ? (e) => t(e) : () => t, a = (e) => (r.value, i(e)), o = ((e) => a(e));
	if (Object.assign(o, {
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
	}), e != null) {
		let t = Object(e), n = Object.getPrototypeOf(t);
		for (let r of Object.getOwnPropertyNames(n)) {
			if (r === "constructor" || r in o) continue;
			let n = t[r];
			typeof n == "function" && Object.defineProperty(o, r, {
				value: n.bind(e),
				writable: !0,
				configurable: !0
			});
		}
	}
	return c(o);
}, q = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => K({
			...n,
			value: e,
			children: e
		}), i = r(t);
		if (typeof t != "function") return i;
		let a = (...e) => {
			let n = t(...e);
			return r(n);
		};
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
}, ge = I, _e = I, ve = I, J = /* @__PURE__ */ new Map(), ye = (e, t = !0) => {
	let n = `${e ?? g.defaultLocale}_${t}`;
	if (J.has(n)) return J.get(n);
	let r = [
		L(e ?? g.defaultLocale, t ? g.defaultLocale : void 0),
		R,
		z(e ?? g.defaultLocale),
		B,
		W(e ?? g.defaultLocale),
		G,
		H,
		U,
		q,
		ge,
		_e,
		ve
	];
	return J.set(n, r), r;
}, Y = (e, t) => he(e, t, ye(typeof t == "object" && t ? t.locale : t)), X = (e, t) => t.reduce((e, t) => e?.[t], e), Z = (e) => typeof e == "object" && !!e, Q = (e) => typeof e == "function" || Z(e) && ("render" in e || "setup" in e), be = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, $ = (e) => c(r({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : Q(t) ? a(t) : Array.isArray(t) ? a("span", t) : t;
		};
	}
})), xe = (e) => new Proxy({}, {
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
}), Se = (t, n) => {
	let r = i() ? o(_) : void 0, a = s(r?.locale) ? r.locale : u(r?.locale ?? g.defaultLocale), c = e(() => ({
		selector: void 0,
		locale: n === void 0 ? void 0 : f(n)
	})), l = e(() => c.value.locale ?? a.value), d = ee({});
	m([
		() => f(t),
		() => l.value,
		() => c.value.selector
	], ([e, t, n]) => {
		d.value = n ? Y(e, {
			...n,
			locale: t
		}) : Y(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let p = (t) => new Proxy({}, {
		get(n, r, i) {
			let a = e(() => X(d.value, t));
			if (typeof r == "symbol" || typeof r == "string" && (r.startsWith("__") || r.startsWith("$"))) return r === "__v_isRef" ? !0 : r === "$raw" ? a : r === Symbol.toPrimitive ? () => String(a.value ?? "") : Reflect.get(n, r, i);
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return $(() => a.value);
			let o = t.concat(r), s = X(d.value, o);
			if (s === void 0 || Z(s) && !Q(s)) return p(o);
			if (be(s)) return xe(e(() => X(d.value, o)));
			if (typeof s == "function") {
				let e = X(d.value, t);
				return e != null && !Object.hasOwn(e, r) ? s.bind(e) : (...e) => X(d.value, o)?.(...e);
			}
			let c = e(() => X(d.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let e = X(d.value, t);
			return Z(e) ? Reflect.ownKeys(e) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return p([]);
}, Ce = { class: "rounded-lg border border-border bg-card p-6" }, we = { class: "mb-4 text-lg font-semibold text-foreground" }, Te = {
	for: "apiKey",
	class: "mb-1 block text-sm font-medium text-foreground"
}, Ee = { class: "flex gap-2" }, De = {
	type: "button",
	class: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
}, Oe = { class: "mt-1 text-xs text-muted-foreground" }, ke = r({
	__name: "ApiAccessSection",
	setup(e) {
		let { d: r, a: i, b: a, c: o } = Se(h);
		return (e, s) => (l(), t("section", Ce, [n("h2", we, d(p(r)), 1), n("div", null, [
			n("label", Te, d(p(i)), 1),
			n("div", Ee, [s[0] ||= n("input", {
				id: "apiKey",
				readonly: "",
				value: "sk_bench_xxxxxxxxxxxxxxxxxxxx",
				class: "flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
			}, null, -1), n("button", De, d(p(a)), 1)]),
			n("p", Oe, d(p(o)), 1)
		])]));
	}
});
export { ke as default };
