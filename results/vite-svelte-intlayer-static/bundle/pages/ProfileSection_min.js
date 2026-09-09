import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { getContext as t } from "svelte";
import { derived as n, writable as r } from "svelte/store";
var i = {
	key: "profile-section",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				email: "Email",
				displayName: "Display Name",
				profile: "Profile"
			},
			fr: {
				email: "Email",
				displayName: "Nom affiché",
				profile: "Profil"
			},
			es: {
				email: "Correo electrónico",
				displayName: "Nombre a mostrar",
				profile: "Perfil"
			},
			de: {
				email: "E-Mail",
				displayName: "Anzeigename",
				profile: "Profil"
			},
			it: {
				email: "Email",
				displayName: "Nome visualizzato",
				profile: "Profilo"
			},
			pt: {
				email: "E-mail",
				displayName: "Nome de exibição",
				profile: "Perfil"
			},
			zh: {
				email: "电子邮件",
				displayName: "显示名称",
				profile: "个人资料"
			},
			ja: {
				email: "メールアドレス",
				displayName: "表示名",
				profile: "プロフィール"
			},
			ko: {
				email: "이메일",
				displayName: "표시 이름",
				profile: "프로필"
			},
			ru: {
				email: "Email",
				displayName: "Отображаемое имя",
				profile: "Профиль"
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
})(), c = Symbol("intlayer"), l = () => t(c), u = "default", d = /[^A-Za-z0-9._&=-]/g, f = /[^A-Za-z0-9._-]/g, p = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, m = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, p);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, h = (e) => e === void 0 ? u : typeof e == "string" ? m(e, d) : Object.keys(e).sort().map((t) => `${m(t, f)}=${m(String(e[t]), f)}`).join("&"), g = (e) => Array.isArray(e) ? e.length === 0 ? [u] : e.map(h) : [h(e)], _ = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? u : e[0] ?? "default";
}, v = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, y = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, b = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, ee = (e, t) => {
	if (!y(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? u : _(g(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => v(e, n, t, s)).map((t) => b(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, x = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, S = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? g(n).join(",") : String(n)}`;
}).join("|") : "", te = "translation", C = "object", w = "array", T = (e, t) => {
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
}, E = /* @__PURE__ */ new WeakMap(), D = 0, O = (e) => {
	if (!e) return "base";
	let t = E.get(e);
	if (t) return t;
	D += 1;
	let n = `p${D}`;
	return E.set(e, n), n;
}, k = 256, A = /* @__PURE__ */ new WeakMap(), j = (e) => typeof e == "object" && !!e, M = (e, t, n) => `${e}_${t}_${O(n)}`, N = (e, t) => {
	if (!j(e)) return { hit: !1 };
	let n = A.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, P = (e, t, n) => {
	if (!j(e)) return n;
	let r = A.get(e);
	return r || (r = /* @__PURE__ */ new Map(), A.set(e, r)), r.size >= k && r.clear(), r.set(t, n), n;
}, F = (e, t = !0) => [
	V(e ?? a.defaultLocale, t ? a.defaultLocale : void 0),
	H,
	W,
	G,
	J(e ?? a.defaultLocale),
	Y,
	K,
	q
], ne = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), I = (e, t, n) => {
	let { locale: r, selector: i } = x(t), o = M(r ?? a.defaultLocale, S(i), n), s = N(e, o);
	if (s.hit) return s.content;
	let c = n ?? F(r), l = ee(e, i), u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries
		};
		return ne(e.content, t, c);
	};
	return l === null ? P(e, o, null) : Array.isArray(l) ? P(e, o, l.map(u)) : P(e, o, u(l));
}, L = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, R = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (L(e) && L(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : R(e[r], t[r]));
		return n;
	}
	return e;
}, z = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => R(e, t));
}, B = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, V = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? B : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: te,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return z(o, e, t);
	}
}, H = B, U = (e) => B, W = B, G = B, K = B, q = B, J = (e) => B, Y = B;
function X(t, n) {
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
var re = (e) => {
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
	transform: (e, { children: t, ...n }) => re({
		value: t ?? e,
		component: void 0,
		props: n
	})
}, ie = Z, ae = B, oe = B, Q = B, $ = /* @__PURE__ */ new Map(), se = (e, t = !0) => {
	let n = `${e ?? a.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		V(e ?? a.defaultLocale, t ? a.defaultLocale : void 0),
		H,
		U(e ?? a.defaultLocale),
		W,
		J(e ?? a.defaultLocale),
		Y,
		K,
		q,
		Z,
		ie,
		ae,
		oe,
		Q
	];
	return $.set(n, r), r;
}, ce = (e, t) => I(e, t, se(typeof t == "object" && t ? t.locale : t)), le = (e, t) => {
	let r = l();
	return n([s], ([n]) => {
		let i = r?.locale ?? n.locale;
		return ce(e, t ?? i);
	});
}, ue = e.from_html("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\"> </h2> <div class=\"space-y-4\"><div><label for=\"settings-display-name\" class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <input id=\"settings-display-name\" value=\"John Developer\" class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none\"/></div> <div><label for=\"settings-email\" class=\"mb-1 block text-sm font-medium text-foreground\"> </label> <input id=\"settings-email\" value=\"john@example.com\" class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none\"/></div></div></section>");
function de(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(s, "$content", a), [a, o] = e.setup_stores(), s = le(i);
	e.init();
	var c = ue(), l = e.child(c), u = e.only_child(l, !0), d = e.sibling(l, 2), f = e.child(d), p = e.child(f), m = e.only_child(p, !0);
	e.sibling(p, 2), e.reset(f);
	var h = e.sibling(f, 2), g = e.child(h), _ = e.only_child(g, !0);
	e.sibling(g, 2), e.reset(h), e.reset(d), e.reset(c), e.template_effect(() => {
		e.set_text(u, r().profile), e.set_text(m, r().displayName), e.set_text(_, r().email);
	}), e.append(t, c), e.pop(), o();
}
export { de as default };
