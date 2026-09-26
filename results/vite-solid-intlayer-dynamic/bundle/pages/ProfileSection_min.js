import { insert as e, setAttribute as t, template as n } from "solid-js/web";
import { createContext as r, createMemo as i, createRenderEffect as a, createResource as o, createUniqueId as s, lazy as c, untrack as l, useContext as u } from "solid-js";
var d = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), f = {
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
}, p = {
	mode: "prefix-all",
	enableProxy: !1,
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, ee = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, te = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && ee(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, ne = ["en"], re = "__intlayerPreloaded", m = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? f?.defaultLocale ?? "en",
	mode: e.mode ?? p?.mode ?? "prefix-no-default",
	locales: e.locales ?? f?.locales ?? ne,
	rewrite: e.rewrite ?? p?.rewrite,
	domains: e.domains ?? p?.domains
}), h = (e, t) => !!e && (t ?? f.locales).includes(e), ie = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var g = {
	getCookie: (e) => document.cookie.split(";").find((t) => t.trim().startsWith(`${e}=`))?.split("=")[1],
	getLocaleStorage: (e) => localStorage.getItem(e),
	getSessionStorage: (e) => sessionStorage.getItem(e),
	isCookieEnabled: !0,
	setCookieStore: (e, t, n) => cookieStore.set({
		name: e,
		value: t,
		path: n.path,
		domain: n.domain,
		expires: n.expires,
		sameSite: n.sameSite
	}),
	setCookieString: (e, t) => {
		document.cookie = t;
	},
	setSessionStorage: (e, t) => sessionStorage.setItem(e, t),
	setLocaleStorage: (e, t) => localStorage.setItem(e, t)
}, _ = (e = g) => {
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!ie) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ae = !1, v, oe = () => typeof window > "u" ? _(g) : (ae ||= (v = _(g), !0), v), se = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = m(t);
	if (!n || !r) return n;
	let a = d(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return h(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (h(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, ce = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = m(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = te(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = se(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return _() ?? t;
}, y, b, le = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (b === void 0 || y !== e) && (y = e, b = ce()), b;
}, x = {
	de: () => import("./intlayer-ProfileSection-1c6oem-de-B-RBWZrD.js").then((e) => e.t).then((e) => e.default),
	en: () => import("./intlayer-ProfileSection-1c6oem-en-D-hR64bn.js").then((e) => e.t).then((e) => e.default),
	es: () => import("./intlayer-ProfileSection-1c6oem-es-Ys-Wz6eu.js").then((e) => e.t).then((e) => e.default),
	fr: () => import("./intlayer-ProfileSection-1c6oem-fr-Bl3ytC-A.js").then((e) => e.t).then((e) => e.default),
	it: () => import("./intlayer-ProfileSection-1c6oem-it-CCoTiufg.js").then((e) => e.t).then((e) => e.default),
	ja: () => import("./intlayer-ProfileSection-1c6oem-ja-CVUOALFk.js").then((e) => e.t).then((e) => e.default),
	ko: () => import("./intlayer-ProfileSection-1c6oem-ko-4_0KGJGC.js").then((e) => e.t).then((e) => e.default),
	pt: () => import("./intlayer-ProfileSection-1c6oem-pt-4SaRT16F.js").then((e) => e.t).then((e) => e.default),
	ru: () => import("./intlayer-ProfileSection-1c6oem-ru-CjSjPhI2.js").then((e) => e.t).then((e) => e.default),
	zh: () => import("./intlayer-ProfileSection-1c6oem-zh-D9rFwveE.js").then((e) => e.t).then((e) => e.default)
}, S = le(), C = x[S];
typeof window < "u" && typeof C == "function" && C().then((e) => {
	x.__intlayerPreloaded = {
		locale: S,
		dictionary: e
	};
}, () => void 0);
var w = /* @__PURE__ */ new Map(), ue = (e, t) => Object.create(new Proxy(e, {
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
}), de = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = w.get(t);
	i || (i = /* @__PURE__ */ new Map(), w.set(t, i));
	let a = i.get(r);
	return a || (a = ue(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, fe = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return Object.setPrototypeOf(r, de(t, Array.prototype)), r;
}, T = /* @__PURE__ */ new WeakMap(), E = 0, pe = (e) => {
	if (!e) return "base";
	let t = T.get(e);
	if (t) return t;
	E += 1;
	let n = `p${E}`;
	return T.set(e, n), n;
}, me = 256, D = /* @__PURE__ */ new WeakMap(), O = (e) => typeof e == "object" && !!e, he = (e, t, n) => `${e}_${t}_${pe(n)}`, ge = (e, t) => {
	if (!O(e)) return { hit: !1 };
	let n = D.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, k = (e, t, n) => {
	if (!O(e)) return n;
	let r = D.get(e);
	return r || (r = /* @__PURE__ */ new Map(), D.set(e, r)), r.size >= me && r.clear(), r.set(t, n), n;
}, _e = "translation", ve = "object", ye = "array", A = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), j = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, j);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => j(e, A(t, e, {
		type: ye,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: ve,
			key: r
		};
		if (t.eager) {
			n[r] = j(e[r], A(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = j(e[r], A(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, M = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, N = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !M(e) || !M(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? N(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, be = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => N(e, t));
}, P = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, F = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? P : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = be(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: _e,
				key: e
			}]
		});
	}
}, I = P, L = (e) => P, R = P, xe = P, z = P, B = P, V = (e) => P, H = P, Se = (e, t = !0) => [
	F(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	I,
	L(e ?? f.defaultLocale),
	R,
	xe,
	V(e ?? f.defaultLocale),
	H,
	z,
	B
].filter((e) => e !== P), Ce = (e, t, n = []) => j(e, {
	...t,
	plugins: n
}), U = /* @__PURE__ */ new WeakSet(), we = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = he(r ?? f.defaultLocale, "", n), o = ge(e, a);
	if (o.hit) return o.content;
	let s = n ?? Se(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !U.has(e)
		};
		U.add(e);
		try {
			return Ce(e.content, t, s);
		} finally {
			t.eager && U.delete(e);
		}
	};
	return c === null ? k(e, a, null) : Array.isArray(c) ? k(e, a, c.map(l)) : k(e, a, l(c));
}, Te = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[re];
	if (n && n.locale === t) return n.dictionary;
}, W = null, G = null;
W?.catch(() => {}), G?.catch(() => {});
var Ee = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => fe({
		value: t.children,
		children: t.children
	})
}, De = P, Oe = P;
c(() => W.then((e) => ({ default: e.MarkdownRenderer }))), c(() => W.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var ke = P;
c(() => G.then((e) => ({ default: e })));
var Ae = P, K = /* @__PURE__ */ new Map(), je = (e, t = !0) => {
	let n = `${e ?? f.defaultLocale}_${t}`;
	if (K.has(n)) return K.get(n);
	let r = [
		Ee,
		F(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
		I,
		L(e ?? f.defaultLocale),
		R,
		V(e ?? f.defaultLocale),
		H,
		z,
		B,
		De,
		Oe,
		ke,
		Ae
	].filter((e) => e !== P);
	return K.set(n, r), r;
}, Me = (e, t) => we(e, t, je(typeof t == "object" && t ? t.locale : t)), Ne = oe, q = r({
	locale: () => Ne() ?? f?.defaultLocale,
	setLocale: () => null
}), J = {
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, Y = Symbol("NO_PENDING_PRIMITIVE_FALLBACK"), X = Symbol("LOADABLE_SETTLED_VALUE"), Z = /* @__PURE__ */ new Map(), Pe = (e) => typeof e == "string" ? e : e.cacheKey, Q = (e, t) => t.reduce((e, t) => {
	if (e != null) return Reflect.get(Object(e), t);
}, e), Fe = (e, t) => typeof e == "function" ? e(t) : e, Ie = (e, t) => {
	let n = Pe(e), r = Z.get(n);
	if (r?.status === "success") return r.value;
	if (r?.status === "pending") return r.promise;
	let i = Fe(t, e).then((e) => (Z.set(n, {
		status: "success",
		value: e
	}), e), (e) => {
		throw Z.delete(n), e;
	});
	return Z.set(n, {
		status: "pending",
		promise: i
	}), i;
}, Le = (e, t) => {
	let n = Pe(e);
	Z.has(n) || Z.set(n, {
		status: "success",
		value: t
	});
}, Re = (e, t) => typeof t == "function" ? t.bind(e) : t, ze = (e) => e === Symbol.toPrimitive ? () => "" : e === Symbol.iterator ? () => ({ next: () => ({
	done: !0,
	value: void 0
}) }) : e === "length" ? 0 : e === J.toString ? () => "" : e === J.valueOf ? () => void 0 : e === J.value ? "" : Y, $ = (e) => {
	let t = (n) => new Proxy(() => void 0, {
		get(r, i) {
			if (i === J.promiseThen) return;
			let a = Q(e(), n);
			if (i === X) return a;
			if (a != null) return i === Symbol.toPrimitive ? () => a : Re(a, Reflect.get(Object(a), i));
			let o = ze(i);
			return o === Y ? t([...n, i]) : o;
		},
		apply(t, r, i) {
			let a = Q(e(), n);
			return typeof a == "function" ? Reflect.apply(a, r, i) : i.length === 0 ? a ?? "" : $(() => {
				let t = Q(e(), n);
				if (typeof t == "function") return l(() => Reflect.apply(t, r, i));
			});
		}
	});
	return t([]);
}, Be = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[X];
}, Ve = (e, t) => {
	let [n] = o(() => typeof e == "function" ? e() : e, (e) => Ie(e, t));
	return a(() => {
		n();
	}), $(() => n());
}, He = (e, t) => {
	let n = u(q) ?? {}, r = i(() => {
		let r = n?.locale?.();
		return Me(Be(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, Ue = (e, t, n) => {
	let { locale: r } = u(q) ?? {}, i = f.defaultLocale, a = String(t), o = e, s = n, c = () => s ?? r?.() ?? i, l = () => {
		let e = c();
		return {
			cacheKey: `${a}.${e}`,
			locale: e
		};
	}, d = ({ locale: e }) => {
		let t = o[e];
		return t ? t() : Promise.reject(Error(`No dynamic dictionary loader found for key "${a}" and locale "${e}".`));
	}, p = Te(o, c());
	return p && Le(l(), p), He(Ve(l, d), s);
}, We = n("<section class=\"rounded-lg border border-border bg-card p-6\"><h2 class=\"mb-4 text-lg font-semibold text-foreground\"></h2><div class=space-y-4><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><input defaultvalue=\"John Developer\"class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring\"></div><div><label class=\"mb-1 block text-sm font-medium text-foreground\"></label><input defaultvalue=john@example.com class=\"w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring\">");
function Ge() {
	let n = Ue(x, "profile-section"), r = s(), i = s();
	return (() => {
		var a = We(), o = a.firstChild, s = o.nextSibling.firstChild, c = s.firstChild, l = c.nextSibling, u = s.nextSibling.firstChild, d = u.nextSibling;
		return e(o, () => n().c), t(c, "for", r), e(c, () => n().a), t(l, "id", r), t(u, "for", i), e(u, () => n().b), t(d, "id", i), a;
	})();
}
export { Ge as default };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "profile-section", r = {
	c: "Profil",
	a: "Anzeigename",
	b: "E-Mail"
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "profile-section", r = {
	c: "Profile",
	a: "Display Name",
	b: "Email"
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "profile-section", r = {
	c: "Perfil",
	a: "Nombre de usuario",
	b: "Correo electrónico"
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "profile-section", r = {
	c: "Profil",
	a: "Nom d'affichage",
	b: "Email"
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "profile-section", r = {
	c: "Profilo",
	a: "Nome visualizzato",
	b: "Email"
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "profile-section", r = {
	c: "プロフィール",
	a: "表示名",
	b: "メールアドレス"
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "profile-section", r = {
	c: "프로필",
	a: "표시 이름",
	b: "이메일"
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "profile-section", r = {
	c: "Perfil",
	a: "Nome de exibição",
	b: "E-mail"
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "profile-section", r = {
	c: "Профиль",
	a: "Отображаемое имя",
	b: "Электронная почта"
}, i = {
	key: n,
	content: r
};
export { t };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "profile-section", r = {
	c: "个人资料",
	a: "显示名称",
	b: "电子邮件"
}, i = {
	key: n,
	content: r
};
export { t };
var e = Object.defineProperty, t = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
};
export { t };
