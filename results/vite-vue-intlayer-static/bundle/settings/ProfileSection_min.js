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
}, _ = /* @__PURE__ */ new WeakMap(), v = 0, ee = (e) => {
	if (!e) return "base";
	let t = _.get(e);
	if (t) return t;
	v += 1;
	let n = `p${v}`;
	return _.set(e, n), n;
}, y = 256, b = /* @__PURE__ */ new WeakMap(), x = (e) => typeof e == "object" && !!e, te = (e, t, n) => `${e}_${t}_${ee(n)}`, ne = (e, t) => {
	if (!x(e)) return { hit: !1 };
	let n = b.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, S = (e, t, n) => {
	if (!x(e)) return n;
	let r = b.get(e);
	return r || (r = /* @__PURE__ */ new Map(), b.set(e, r)), r.size >= y && r.clear(), r.set(t, n), n;
}, re = "translation", C = "object", w = "array", T = (e, t) => {
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
}, E = "default", D = /[^A-Za-z0-9._&=-]/g, O = /[^A-Za-z0-9._-]/g, k = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, A = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, k);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, j = (e) => e === void 0 ? E : typeof e == "string" ? A(e, D) : Object.keys(e).sort().map((t) => `${A(t, O)}=${A(String(e[t]), O)}`).join("&"), M = (e) => Array.isArray(e) ? e.length === 0 ? [E] : e.map(j) : [j(e)], ie = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? E : e[0] ?? "default";
}, ae = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, oe = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, se = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, ce = (e, t) => {
	if (!oe(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? E : ie(M(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ae(e, n, t, s)).map((t) => se(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, le = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, ue = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? M(n).join(",") : String(n)}`;
}).join("|") : "", N = {
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
}, P = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, F = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (P(e) && P(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : F(e[r], t[r]));
		return n;
	}
	return e;
}, I = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => F(e, t));
}, L = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, R = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? L : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: re,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return I(o, e, t);
	}
}, z = L, B = (e) => L, V = L, H = L, U = L, W = L, G = (e) => L, K = L, de = (e, t = !0) => [
	R(e ?? N.defaultLocale, t ? N.defaultLocale : void 0),
	z,
	V,
	H,
	G(e ?? N.defaultLocale),
	K,
	U,
	W
], fe = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), pe = (e, t, n) => {
	let { locale: r, selector: i } = le(t), a = te(r ?? N.defaultLocale, ue(i), n), o = ne(e, a);
	if (o.hit) return o.content;
	let s = n ?? de(r), c = ce(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return fe(e.content, t, s);
	};
	return c === null ? S(e, a, null) : Array.isArray(c) ? S(e, a, c.map(l)) : S(e, a, l(c));
}, me = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => g({
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
}, he = L, ge = L, _e = L, q = /* @__PURE__ */ new Map(), ve = (e, t = !0) => {
	let n = `${e ?? N.defaultLocale}_${t}`;
	if (q.has(n)) return q.get(n);
	let r = [
		R(e ?? N.defaultLocale, t ? N.defaultLocale : void 0),
		z,
		B(e ?? N.defaultLocale),
		V,
		G(e ?? N.defaultLocale),
		K,
		U,
		W,
		me,
		he,
		ge,
		_e
	];
	return q.set(n, r), r;
}, J = (e, t) => pe(e, t, ve(typeof t == "object" && t ? t.locale : t)), ye = Symbol("intlayer"), Y = (e, t) => t.reduce((e, t) => e?.[t], e), X = (e) => typeof e == "object" && !!e, Z = (e) => typeof e == "function" || X(e) && ("render" in e || "setup" in e), be = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Q = (e) => c(r({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : Z(t) ? a(t) : Array.isArray(t) ? a("span", t) : t;
		};
	}
})), xe = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return Q(() => e.value);
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
	let r = i() ? o(ye) : void 0, a = s(r?.locale) ? r.locale : u(r?.locale ?? N.defaultLocale), c = e(() => ({
		selector: void 0,
		locale: n === void 0 ? void 0 : p(n)
	})), l = e(() => c.value.locale ?? a.value), f = d({});
	m([
		() => p(t),
		() => l.value,
		() => c.value.selector
	], ([e, t, n]) => {
		f.value = n ? J(e, {
			...n,
			locale: t
		}) : J(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let h = (t) => new Proxy({}, {
		get(n, r, i) {
			let a = e(() => Y(f.value, t));
			if (typeof r == "symbol" || typeof r == "string" && (r.startsWith("__") || r.startsWith("$"))) return r === "__v_isRef" ? !0 : r === "$raw" ? a : r === Symbol.toPrimitive ? () => String(a.value ?? "") : Reflect.get(n, r, i);
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return Q(() => a.value);
			let o = t.concat(r), s = Y(f.value, o);
			if (s === void 0 || X(s) && !Z(s)) return h(o);
			if (be(s)) return xe(e(() => Y(f.value, o)));
			if (typeof s == "function") {
				let e = Y(f.value, t);
				return e != null && !Object.hasOwn(e, r) ? s.bind(e) : (...e) => Y(f.value, o)?.(...e);
			}
			let c = e(() => Y(f.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let e = Y(f.value, t);
			return X(e) ? Reflect.ownKeys(e) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return h([]);
}, Ce = r({
	__name: "ProfileSection",
	setup(e, { expose: t }) {
		t();
		let { c: n, a: r, b: i } = Se(h), a = {
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
}, we = { class: "rounded-lg border border-border bg-card p-6" }, Te = { class: "mb-4 text-lg font-semibold text-foreground" }, Ee = { class: "space-y-4" }, De = {
	for: "displayName",
	class: "mb-1 block text-sm font-medium text-foreground"
}, Oe = {
	for: "email",
	class: "mb-1 block text-sm font-medium text-foreground"
};
function ke(e, r, i, a, o, s) {
	return l(), t("section", we, [n("h2", Te, f(a.title), 1), n("div", Ee, [n("div", null, [n("label", De, f(a.displayNameLabel), 1), r[0] ||= n("input", {
		id: "displayName",
		value: "John Developer",
		class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
	}, null, -1)]), n("div", null, [n("label", Oe, f(a.emailLabel), 1), r[1] ||= n("input", {
		id: "email",
		value: "john@example.com",
		class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
	}, null, -1)])])]);
}
var Ae = $(Ce, [["render", ke], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/pages/settings/ProfileSection.vue"]]);
export { Ae as default };
