import e from "../.intlayer/dictionary/header.json";
import { createComponent as t, memo as n, mergeProps as r } from "solid-js/web";
import { Suspense as i, createContext as a, createEffect as o, createMemo as s, createSignal as c, lazy as l, on as ee, onMount as te, untrack as ne, useContext as u } from "solid-js";
var d = {
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
}, f = {
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
}, p = {
	constructor: "constructor",
	length: "length",
	slice: "slice",
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, re = (e) => typeof e == "string" && /^\d+$/.test(e), m = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		if (n === p.value) return t;
		if (n === Symbol.toPrimitive) return (e) => e === "number" ? Number(t) : t ?? "";
		if (n === p.toString) return () => String(t ?? "");
		if (n === p.valueOf) return () => t;
		if (n === p.slice) return Reflect.get(e, n, r);
		if (t != null && typeof n == "string" && n !== p.constructor && n !== p.length && !re(n)) {
			let e = Object(t);
			if (n in e) {
				let r = Reflect.get(e, n);
				return typeof r == "function" ? r.bind(t) : r;
			}
		}
		return Reflect.get(e, n, r);
	} });
}, h = /* @__PURE__ */ new WeakMap(), g = 0, ie = (e) => {
	if (!e) return "base";
	let t = h.get(e);
	if (t) return t;
	g += 1;
	let n = `p${g}`;
	return h.set(e, n), n;
}, ae = 256, _ = /* @__PURE__ */ new WeakMap(), v = (e) => typeof e == "object" && !!e, y = (e, t, n) => `${e}_${t}_${ie(n)}`, b = (e, t) => {
	if (!v(e)) return { hit: !1 };
	let n = _.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, x = (e, t, n) => {
	if (!v(e)) return n;
	let r = _.get(e);
	return r || (r = /* @__PURE__ */ new Map(), _.set(e, r)), r.size >= ae && r.clear(), r.set(t, n), n;
}, S = "translation", C = "object", w = "array", T = (e, t) => {
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
}, E = "default", oe = /[^A-Za-z0-9._&=-]/g, D = /[^A-Za-z0-9._-]/g, se = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, O = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, se);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, k = (e) => e === void 0 ? E : typeof e == "string" ? O(e, oe) : Object.keys(e).sort().map((t) => `${O(t, D)}=${O(String(e[t]), D)}`).join("&"), A = (e) => Array.isArray(e) ? e.length === 0 ? [E] : e.map(k) : [k(e)], ce = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? E : e[0] ?? "default";
}, le = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, ue = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, de = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, fe = (e, t) => {
	if (!ue(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? E : ce(A(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => le(e, n, t, s)).map((t) => de(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, pe = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, j = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? A(n).join(",") : String(n)}`;
}).join("|") : "", M = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, N = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (M(e) && M(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : N(e[r], t[r]));
		return n;
	}
	return e;
}, P = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => N(e, t));
}, F = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, I = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? F : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: S,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return P(o, e, t);
	}
}, L = F, R = (e) => F, z = F, B = F, V = F, H = F, U = (e) => F, W = F, me = (e, t = !0) => [
	I(e ?? d.defaultLocale, t ? d.defaultLocale : void 0),
	L,
	z,
	B,
	U(e ?? d.defaultLocale),
	W,
	V,
	H
], he = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), ge = (e, t, n) => {
	let { locale: r, selector: i } = pe(t), a = y(r ?? d.defaultLocale, j(i), n), o = b(e, a);
	if (o.hit) return o.content;
	let s = n ?? me(r), c = fe(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return he(e.content, t, s);
	};
	return c === null ? x(e, a, null) : Array.isArray(c) ? x(e, a, c.map(l)) : x(e, a, l(c));
}, G = null, K = null;
G?.catch(() => {}), K?.catch(() => {});
var _e = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => m({
		...n,
		value: n.children,
		children: n.children
	})
}, ve = F, ye = F;
l(() => G.then((e) => ({ default: e.MarkdownRenderer }))), l(() => G.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var be = F;
l(() => K.then((e) => ({ default: e })));
var xe = F, q = /* @__PURE__ */ new Map(), Se = (e, t = !0) => {
	let n = `${e ?? d.defaultLocale}_${t}`;
	if (q.has(n)) return q.get(n);
	let r = [
		I(e ?? d.defaultLocale, t ? d.defaultLocale : void 0),
		L,
		R(e ?? d.defaultLocale),
		z,
		U(e ?? d.defaultLocale),
		W,
		V,
		H,
		_e,
		ve,
		ye,
		be,
		xe
	];
	return q.set(n, r), r;
}, Ce = (e, t) => ge(e, t, Se(typeof t == "object" && t ? t.locale : t)), we = (e, t = d?.locales, n = d?.defaultLocale) => {
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
}, J = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, Te = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = J(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, Y = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var X = {
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
}, Ee = (e = X) => {
	let { locales: t } = d;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Y) for (let t = 0; t < (f.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(f.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, De = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !Y && f.storage.cookies) for (let n = 0; n < f.storage.cookies.length; n++) {
		let { name: r, attributes: i } = f.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: J(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, Te(r, e, i));
			} catch {}
		}
	}
}, Z = Ee(X), Oe = (e, t) => De(e, {
	...X,
	isCookieEnabled: t
}), Q = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, ke = null, Ae = null, $ = a({
	locale: () => Z ?? d?.defaultLocale,
	setLocale: () => null
}), je = (e) => {
	let { defaultLocale: n, locales: r } = d ?? {}, i = e.locale ?? Z ?? e.defaultLocale ?? n, [a, l] = c(i), u = e.setLocale ?? ((t) => {
		if (a().toString() !== t.toString()) {
			if (!r?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			l(t), Oe(t, e.isCookieEnabled);
		}
	}), f = s(() => we(a()));
	return o(ee(() => e.locale, (e) => {
		e && e !== ne(a) && l(e);
	}, { defer: !0 })), te(() => {
		Q();
	}), t($.Provider, {
		value: {
			locale: f,
			setLocale: u,
			variant: () => e.variant
		},
		get children() {
			return e.children;
		}
	});
}, Me = (e) => t(je, r(e, { get children() {
	return [
		n(() => n(() => !1)() && t(i, { get children() {
			return t(ke, {});
		} })),
		n(() => n(() => !1)() && t(i, { get children() {
			return t(Ae, {});
		} })),
		n(() => e.children)
	];
} })), Ne = Symbol("LOADABLE_SETTLED_VALUE"), Pe = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[Ne];
}, Fe = (e, t) => {
	let n = u($) ?? {}, r = s(() => {
		let r = n?.locale?.();
		return Ce(Pe(e) ?? e, t ?? r);
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
	return t(Me, {
		get locale() {
			return "en";
		},
		get children() {
			return t(Ie, {});
		}
	});
}
export { Le as default };
