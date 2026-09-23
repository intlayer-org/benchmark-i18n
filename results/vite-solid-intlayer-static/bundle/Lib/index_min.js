import e from "../.intlayer/dictionary/header.json";
import { createComponent as t, memo as n, mergeProps as r } from "solid-js/web";
import { Suspense as i, createContext as a, createEffect as o, createMemo as s, createSignal as c, lazy as l, on as u, onMount as ee, untrack as d, useContext as f } from "solid-js";
var p = {
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
}, m = {
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
}, h = /* @__PURE__ */ new WeakMap(), g = 0, te = (e) => {
	if (!e) return "base";
	let t = h.get(e);
	if (t) return t;
	g += 1;
	let n = `p${g}`;
	return h.set(e, n), n;
}, ne = 256, _ = /* @__PURE__ */ new WeakMap(), v = (e) => typeof e == "object" && !!e, re = (e, t, n) => `${e}_${t}_${te(n)}`, ie = (e, t) => {
	if (!v(e)) return { hit: !1 };
	let n = _.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, y = (e, t, n) => {
	if (!v(e)) return n;
	let r = _.get(e);
	return r || (r = /* @__PURE__ */ new Map(), _.set(e, r)), r.size >= ne && r.clear(), r.set(t, n), n;
}, b = "translation", ae = "object", x = "array", S = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => S(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => S(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: x,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ae,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = S(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = S(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, C = "default", oe = /[^A-Za-z0-9._&=-]/g, w = /[^A-Za-z0-9._-]/g, T = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, E = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, T);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, D = (e) => e === void 0 ? C : typeof e == "string" ? E(e, oe) : Object.keys(e).sort().map((t) => `${E(t, w)}=${E(String(e[t]), w)}`).join("&"), O = (e) => Array.isArray(e) ? e.length === 0 ? [C] : e.map(D) : [D(e)], k = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? C : e[0] ?? "default";
}, A = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, se = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, ce = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, le = (e, t) => {
	if (!se(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? C : k(O(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => A(e, n, t, s)).map((t) => ce(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, ue = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, de = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? O(n).join(",") : String(n)}`;
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
}, N = (e, t, n) => {
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
}, P = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, F = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? P : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: b,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return N(o, e, t);
	}
}, I = P, L = (e) => P, R = P, z = P, B = P, V = P, H = (e) => P, U = P, fe = (e, t = !0) => [
	F(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	I,
	R,
	z,
	H(e ?? p.defaultLocale),
	U,
	B,
	V
], pe = (e, t, n = []) => S(e, {
	...t,
	plugins: n
}), me = (e, t, n) => {
	let { locale: r, selector: i } = ue(t), a = re(r ?? p.defaultLocale, de(i), n), o = ie(e, a);
	if (o.hit) return o.content;
	let s = n ?? fe(r), c = le(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return pe(e.content, t, s);
	};
	return c === null ? y(e, a, null) : Array.isArray(c) ? y(e, a, c.map(l)) : y(e, a, l(c));
}, he = (e, t = p?.locales, n = p?.defaultLocale) => {
	let r = [e].flat(), i = (e) => e.trim().toLowerCase();
	try {
		for (let e of r) {
			let n = i(e), r = t.find((e) => i(e) === n);
			if (r) return r;
			let [a] = n.split("-"), o = t.find((e) => i(e).split("-")[0] === a);
			if (o) return o;
		}
	} catch {}
	return n;
}, W = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, ge = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = W(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, G = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var K = {
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
}, _e = (e = K) => {
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!G) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ve = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !G && m.storage.cookies) for (let n = 0; n < m.storage.cookies.length; n++) {
		let { name: r, attributes: i } = m.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: W(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ge(r, e, i));
			} catch {}
		}
	}
}, q = _e(K), ye = (e, t) => ve(e, {
	...K,
	isCookieEnabled: t
}), be = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, xe = null, Se = null, J = a({
	locale: () => q ?? p?.defaultLocale,
	setLocale: () => null
}), Ce = (e) => {
	let { defaultLocale: n, locales: r } = p ?? {}, i = e.locale ?? q ?? e.defaultLocale ?? n, [a, l] = c(i), f = e.setLocale ?? ((t) => {
		if (a().toString() !== t.toString()) {
			if (!r?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			l(t), ye(t, e.isCookieEnabled);
		}
	}), m = s(() => he(a()));
	return o(u(() => e.locale, (e) => {
		e && e !== d(a) && l(e);
	}, { defer: !0 })), ee(() => {
		be();
	}), t(J.Provider, {
		value: {
			locale: m,
			setLocale: f,
			variant: () => e.variant
		},
		get children() {
			return e.children;
		}
	});
}, we = (e) => t(Ce, r(e, { get children() {
	return [
		n(() => n(() => !1)() && t(i, { get children() {
			return t(xe, {});
		} })),
		n(() => n(() => !1)() && t(i, { get children() {
			return t(Se, {});
		} })),
		n(() => e.children)
	];
} })), Y = {
	constructor: "constructor",
	length: "length",
	slice: "slice",
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, Te = (e) => typeof e == "string" && /^\d+$/.test(e), Ee = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		if (n === Y.value) return t;
		if (n === Symbol.toPrimitive) return (e) => e === "number" ? Number(t) : t ?? "";
		if (n === Y.toString) return () => String(t ?? "");
		if (n === Y.valueOf) return () => t;
		if (n === Y.slice) return Reflect.get(e, n, r);
		if (t != null && typeof n == "string" && n !== Y.constructor && n !== Y.length && !Te(n)) {
			let e = Object(t);
			if (n in e) {
				let r = Reflect.get(e, n);
				return typeof r == "function" ? r.bind(t) : r;
			}
		}
		return Reflect.get(e, n, r);
	} });
}, X = null, Z = null;
X?.catch(() => {}), Z?.catch(() => {});
var De = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => Ee({
		...n,
		value: n.children,
		children: n.children
	})
}, Oe = P, ke = P;
l(() => X.then((e) => ({ default: e.MarkdownRenderer }))), l(() => X.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var Ae = P;
l(() => Z.then((e) => ({ default: e })));
var Q = P, $ = /* @__PURE__ */ new Map(), je = (e, t = !0) => {
	let n = `${e ?? p.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		F(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
		I,
		L(e ?? p.defaultLocale),
		R,
		H(e ?? p.defaultLocale),
		U,
		B,
		V,
		De,
		Oe,
		ke,
		Ae,
		Q
	];
	return $.set(n, r), r;
}, Me = (e, t) => me(e, t, je(typeof t == "object" && t ? t.locale : t)), Ne = Symbol("LOADABLE_SETTLED_VALUE"), Pe = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[Ne];
}, Fe = (e, t) => {
	let n = f(J) ?? {}, r = s(() => {
		let r = n?.locale?.();
		return Me(Pe(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, Ie = () => (Fe(e), null);
function Le() {
	return t(we, {
		get locale() {
			return "en";
		},
		get children() {
			return t(Ie, {});
		}
	});
}
export { Le as default };
