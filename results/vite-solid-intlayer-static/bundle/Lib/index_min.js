import e from "../.intlayer/dictionary/header.json";
import { Dynamic as t, createComponent as n, memo as r, mergeProps as i } from "solid-js/web";
import { Suspense as a, createContext as o, createEffect as s, createMemo as c, createSignal as l, on as u, onMount as d, untrack as f, useContext as p } from "solid-js";
var m = {
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
}, h = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, g = "translation", _ = "object", v = "array", y = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => y(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => y(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: v,
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
					type: _,
					key: r
				}]
			}, i = y(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, b = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, x = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (b(e) && b(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : x(e[r], t[r]));
		return n;
	}
	return e;
}, ee = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => x(e, t));
}, S = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, C = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? S : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: g,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return ee(o, e, t);
	}
}, w = S, T = S, E = S, D = S, O = (e) => S, k = S, A = (e, t = !0) => [
	C(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
	w,
	T,
	E,
	O(e ?? m.defaultLocale),
	k,
	D
], j = (e, t, n = []) => y(e, {
	...t,
	plugins: n
}), M = (e, t, n = A(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return j(e.content, r, n);
}, N = (e, t = m?.locales, n = m?.defaultLocale) => {
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
}, P = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var F = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	return n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`), n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, I = (e = R) => {
	let { locales: t } = m;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!P) for (let t = 0; t < (h.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(h.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, L = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !P && h.storage.cookies) for (let n = 0; n < h.storage.cookies.length; n++) {
		let { name: r, attributes: i } = h.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: i.expires instanceof Date ? i.expires.getTime() : i.expires
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, F(r, e, i));
			} catch {}
		}
	}
}, R = {
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
}, z = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		return n === "value" ? t : n === "toString" ? () => String(t) : n === Symbol.toPrimitive ? (e) => e === "string" ? String(t) : e === "number" ? Number(t) : t : Reflect.get(e, n, r);
	} });
}, B = (e) => {
	if (typeof e == "string") return e;
	let { type: n, props: r } = ((e) => {
		if (e?.props && typeof e.props.children == "object") {
			let t = [], { children: n } = e.props;
			return Object.keys(n ?? {}).forEach((e) => {
				t.push(B(n?.[e]));
			}), {
				...e,
				props: {
					...e.props,
					children: t
				}
			};
		}
		return {
			...e,
			props: {
				...e.props,
				children: e.props?.children ?? []
			}
		};
	})(e);
	return t({
		component: n ?? "span",
		...r,
		children: r.children
	});
}, V = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => z({
		...n,
		value: n.children,
		children: n.children
	})
}, H = process.env.INTLAYER_NODE_TYPE_SOLID_NODE === "false" ? S : {
	id: "solid-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 || typeof Node < "u" && e instanceof Node,
	transform: (e, { plugins: t, ...n }) => z({
		...n,
		value: "[[solid-element]]",
		children: typeof Node < "u" && e instanceof Node ? e : B(e)
	})
}, U = S, W = S, G = S, K = /* @__PURE__ */ new Map(), q = (e, t = !0) => {
	let n = `${e ?? m.defaultLocale}_${t}`;
	if (K.has(n)) return K.get(n);
	let r = [
		C(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
		w,
		T,
		O(e ?? m.defaultLocale),
		k,
		D,
		V,
		H,
		U,
		W,
		G
	];
	return K.set(n, r), r;
}, J = (e, t) => M(e, t, q(t)), Y = I(R), X = (e, t) => L(e, {
	...R,
	isCookieEnabled: t
}), Z = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Q = null, $ = o({
	locale: () => Y ?? m?.defaultLocale,
	setLocale: () => null
}), te = (e) => {
	let { defaultLocale: t, locales: r } = m ?? {}, [i, a] = l(e.locale ?? Y ?? e.defaultLocale ?? t), o = e.setLocale ?? ((t) => {
		if (i().toString() !== t.toString()) {
			if (!r?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			a(t), X(t, e.isCookieEnabled);
		}
	}), p = c(() => N(i()));
	return s(u(() => e.locale, (e) => {
		e && e !== f(i) && a(e);
	}, { defer: !0 })), d(() => {
		Z();
	}), n($.Provider, {
		value: {
			locale: p,
			setLocale: o
		},
		get children() {
			return e.children;
		}
	});
}, ne = (e) => n(te, i(e, { get children() {
	return [r(() => r(() => !1)() && n(a, { get children() {
		return n(Q, {});
	} })), r(() => e.children)];
} })), re = (e, t) => {
	let n = p($) ?? {};
	return c(() => J(e, t ?? n?.locale?.()));
}, ie = () => (re(e), null);
function ae() {
	return n(ne, {
		get locale() {
			return "en";
		},
		get children() {
			return n(ie, {});
		}
	});
}
export { ae as default };
