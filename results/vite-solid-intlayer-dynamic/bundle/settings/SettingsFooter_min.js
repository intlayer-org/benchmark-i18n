import { insert as e, template as t } from "solid-js/web";
import { createContext as n, createMemo as r, createRenderEffect as i, createResource as a, lazy as o, untrack as s, useContext as c } from "solid-js";
var l = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), u = {
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
}, d = {
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
}, f = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, p = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && f(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, ee = ["en"], te = "__intlayerPreloaded", ne = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? u?.defaultLocale ?? "en",
	mode: e.mode ?? d?.mode ?? "prefix-no-default",
	locales: e.locales ?? u?.locales ?? ee,
	rewrite: e.rewrite ?? d?.rewrite,
	domains: e.domains ?? d?.domains
}), m = (e, t) => !!e && (t ?? u.locales).includes(e), re = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var h = {
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
}, g = (e = h) => {
	let { locales: t } = u;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!re) for (let t = 0; t < (d.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(d.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ie = !1, _, ae = () => typeof window > "u" ? g(h) : (ie ||= (_ = g(h), !0), _), oe = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = ne(t);
	if (!n || !r) return n;
	let a = l(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return m(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (m(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, se = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = ne(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = p(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = oe(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return g() ?? t;
}, v, y, ce = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (y === void 0 || v !== e) && (v = e, y = se()), y;
}, b = {
	de: () => import("./intlayer-SettingsFooter-u8vy7m-de-CbkeMXVb.js").then((e) => e.t).then((e) => e.default),
	en: () => import("./intlayer-SettingsFooter-u8vy7m-en-DSGig4Y6.js").then((e) => e.t).then((e) => e.default),
	es: () => import("./intlayer-SettingsFooter-u8vy7m-es-ilr1LvQB.js").then((e) => e.t).then((e) => e.default),
	fr: () => import("./intlayer-SettingsFooter-u8vy7m-fr-CwIXdl1d.js").then((e) => e.t).then((e) => e.default),
	it: () => import("./intlayer-SettingsFooter-u8vy7m-it-CdtfpvBg.js").then((e) => e.t).then((e) => e.default),
	ja: () => import("./intlayer-SettingsFooter-u8vy7m-ja-Bsp_556T.js").then((e) => e.t).then((e) => e.default),
	ko: () => import("./intlayer-SettingsFooter-u8vy7m-ko-D5GUvuId.js").then((e) => e.t).then((e) => e.default),
	pt: () => import("./intlayer-SettingsFooter-u8vy7m-pt-BMINdKUA.js").then((e) => e.t).then((e) => e.default),
	ru: () => import("./intlayer-SettingsFooter-u8vy7m-ru-RUtcC9S2.js").then((e) => e.t).then((e) => e.default),
	zh: () => import("./intlayer-SettingsFooter-u8vy7m-zh-CKxV1vrr.js").then((e) => e.t).then((e) => e.default)
}, x = ce(), S = b[x];
typeof window < "u" && typeof S == "function" && S().then((e) => {
	b.__intlayerPreloaded = {
		locale: x,
		dictionary: e
	};
}, () => void 0);
var C = /* @__PURE__ */ new Map(), le = (e, t) => Object.create(new Proxy(e, {
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
}), ue = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = C.get(t);
	i || (i = /* @__PURE__ */ new Map(), C.set(t, i));
	let a = i.get(r);
	return a || (a = le(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, de = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return Object.setPrototypeOf(r, ue(t, Array.prototype)), r;
}, w = /* @__PURE__ */ new WeakMap(), T = 0, fe = (e) => {
	if (!e) return "base";
	let t = w.get(e);
	if (t) return t;
	T += 1;
	let n = `p${T}`;
	return w.set(e, n), n;
}, pe = 256, E = /* @__PURE__ */ new WeakMap(), D = (e) => typeof e == "object" && !!e, me = (e, t, n) => `${e}_${t}_${fe(n)}`, he = (e, t) => {
	if (!D(e)) return { hit: !1 };
	let n = E.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, O = (e, t, n) => {
	if (!D(e)) return n;
	let r = E.get(e);
	return r || (r = /* @__PURE__ */ new Map(), E.set(e, r)), r.size >= pe && r.clear(), r.set(t, n), n;
}, ge = "translation", _e = "object", ve = "array", k = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), A = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, A);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => A(e, k(t, e, {
		type: ve,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: _e,
			key: r
		};
		if (t.eager) {
			n[r] = A(e[r], k(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = A(e[r], k(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
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
}, ye = (e, t, n) => {
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
}, N = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, P = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? N : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = ye(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: ge,
				key: e
			}]
		});
	}
}, F = N, I = (e) => N, L = N, be = N, R = N, z = N, B = (e) => N, V = N, xe = (e, t = !0) => [
	P(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
	F,
	I(e ?? u.defaultLocale),
	L,
	be,
	B(e ?? u.defaultLocale),
	V,
	R,
	z
].filter((e) => e !== N), Se = (e, t, n = []) => A(e, {
	...t,
	plugins: n
}), H = /* @__PURE__ */ new WeakSet(), Ce = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = me(r ?? u.defaultLocale, "", n), o = he(e, a);
	if (o.hit) return o.content;
	let s = n ?? xe(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !H.has(e)
		};
		H.add(e);
		try {
			return Se(e.content, t, s);
		} finally {
			t.eager && H.delete(e);
		}
	};
	return c === null ? O(e, a, null) : Array.isArray(c) ? O(e, a, c.map(l)) : O(e, a, l(c));
}, we = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[te];
	if (n && n.locale === t) return n.dictionary;
}, U = null, W = null;
U?.catch(() => {}), W?.catch(() => {});
var Te = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => de({
		value: t.children,
		children: t.children
	})
}, Ee = N, De = N;
o(() => U.then((e) => ({ default: e.MarkdownRenderer }))), o(() => U.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var Oe = N;
o(() => W.then((e) => ({ default: e })));
var ke = N, G = /* @__PURE__ */ new Map(), Ae = (e, t = !0) => {
	let n = `${e ?? u.defaultLocale}_${t}`;
	if (G.has(n)) return G.get(n);
	let r = [
		Te,
		P(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
		F,
		I(e ?? u.defaultLocale),
		L,
		B(e ?? u.defaultLocale),
		V,
		R,
		z,
		Ee,
		De,
		Oe,
		ke
	].filter((e) => e !== N);
	return G.set(n, r), r;
}, je = (e, t) => Ce(e, t, Ae(typeof t == "object" && t ? t.locale : t)), Me = ae, K = n({
	locale: () => Me() ?? u?.defaultLocale,
	setLocale: () => null
}), q = {
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, J = Symbol("NO_PENDING_PRIMITIVE_FALLBACK"), Y = Symbol("LOADABLE_SETTLED_VALUE"), X = /* @__PURE__ */ new Map(), Z = (e) => typeof e == "string" ? e : e.cacheKey, Q = (e, t) => t.reduce((e, t) => {
	if (e != null) return Reflect.get(Object(e), t);
}, e), Ne = (e, t) => typeof e == "function" ? e(t) : e, Pe = (e, t) => {
	let n = Z(e), r = X.get(n);
	if (r?.status === "success") return r.value;
	if (r?.status === "pending") return r.promise;
	let i = Ne(t, e).then((e) => (X.set(n, {
		status: "success",
		value: e
	}), e), (e) => {
		throw X.delete(n), e;
	});
	return X.set(n, {
		status: "pending",
		promise: i
	}), i;
}, Fe = (e, t) => {
	let n = Z(e);
	X.has(n) || X.set(n, {
		status: "success",
		value: t
	});
}, Ie = (e, t) => typeof t == "function" ? t.bind(e) : t, Le = (e) => e === Symbol.toPrimitive ? () => "" : e === Symbol.iterator ? () => ({ next: () => ({
	done: !0,
	value: void 0
}) }) : e === "length" ? 0 : e === q.toString ? () => "" : e === q.valueOf ? () => void 0 : e === q.value ? "" : J, $ = (e) => {
	let t = (n) => new Proxy(() => void 0, {
		get(r, i) {
			if (i === q.promiseThen) return;
			let a = Q(e(), n);
			if (i === Y) return a;
			if (a != null) return i === Symbol.toPrimitive ? () => a : Ie(a, Reflect.get(Object(a), i));
			let o = Le(i);
			return o === J ? t([...n, i]) : o;
		},
		apply(t, r, i) {
			let a = Q(e(), n);
			return typeof a == "function" ? Reflect.apply(a, r, i) : i.length === 0 ? a ?? "" : $(() => {
				let t = Q(e(), n);
				if (typeof t == "function") return s(() => Reflect.apply(t, r, i));
			});
		}
	});
	return t([]);
}, Re = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[Y];
}, ze = (e, t) => {
	let [n] = a(() => typeof e == "function" ? e() : e, (e) => Pe(e, t));
	return i(() => {
		n();
	}), $(() => n());
}, Be = (e, t) => {
	let n = c(K) ?? {}, i = r(() => {
		let r = n?.locale?.();
		return je(Re(e) ?? e, t ?? r);
	});
	return new Proxy(i, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, Ve = (e, t, n) => {
	let { locale: r } = c(K) ?? {}, i = u.defaultLocale, a = String(t), o = e, s = n, l = () => s ?? r?.() ?? i, d = () => {
		let e = l();
		return {
			cacheKey: `${a}.${e}`,
			locale: e
		};
	}, f = ({ locale: e }) => {
		let t = o[e];
		return t ? t() : Promise.reject(Error(`No dynamic dictionary loader found for key "${a}" and locale "${e}".`));
	}, p = we(o, l());
	return p && Fe(d(), p), Be(ze(d, f), s);
}, He = t("<div class=\"flex justify-end gap-3\"><button type=button class=\"rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent\"></button><button type=submit class=\"rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\">");
function Ue() {
	let t = Ve(b, "settings-footer");
	return (() => {
		var n = He(), r = n.firstChild, i = r.nextSibling;
		return e(r, () => t().a), e(i, () => t().b), n;
	})();
}
export { Ue as default };
import { t as e } from "./rolldown-runtime-D5OxutzX.js";
var t = e({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "settings-footer", r = {
	a: "Abbrechen",
	b: "Änderungen speichern"
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
}), n = "settings-footer", r = {
	a: "Cancel",
	b: "Save Changes"
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
}), n = "settings-footer", r = {
	a: "Cancelar",
	b: "Guardar cambios"
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
}), n = "settings-footer", r = {
	a: "Annuler",
	b: "Enregistrer les modifications"
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
}), n = "settings-footer", r = {
	a: "Annulla",
	b: "Salva modifiche"
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
}), n = "settings-footer", r = {
	a: "キャンセル",
	b: "変更を保存"
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
}), n = "settings-footer", r = {
	a: "취소",
	b: "변경 사항 저장"
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
}), n = "settings-footer", r = {
	a: "Cancelar",
	b: "Salvar alterações"
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
}), n = "settings-footer", r = {
	a: "Отмена",
	b: "Сохранить изменения"
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
}), n = "settings-footer", r = {
	a: "取消",
	b: "保存更改"
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
