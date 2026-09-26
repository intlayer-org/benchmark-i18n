import { Fragment as e, createContext as t, useCallback as n, useContext as r, useEffect as i, useLayoutEffect as a, useMemo as o, useState as s } from "react";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
import d from "../../../.intlayer/dictionary/faq.json";
import f from "../../../.intlayer/dictionary/header.json";
import p from "../../../.intlayer/dictionary/open-positions.json";
import m from "../../../.intlayer/dictionary/careers-benefits.json";
import h from "../../../.intlayer/dictionary/settings.json";
import g from "../../../.intlayer/dictionary/footer.json";
import _ from "../../../.intlayer/dictionary/results-table.json";
import v from "../../../.intlayer/dictionary/contact-form.json";
import y from "../../../.intlayer/dictionary/contact-header.json";
import b from "../../../.intlayer/dictionary/about-grid.json";
import x from "../../../.intlayer/dictionary/mockBanner.json";
import ee from "../../../.intlayer/dictionary/theme-toggle.json";
import te from "../../../.intlayer/dictionary/about-header.json";
import ne from "../../../.intlayer/dictionary/faq-header1.json";
import re from "../../../.intlayer/dictionary/careers.json";
import ie from "../../../.intlayer/dictionary/blog-header.json";
import ae from "../../../.intlayer/dictionary/route.json";
import oe from "../../../.intlayer/dictionary/faq-list.json";
import se from "../../../.intlayer/dictionary/careers-header.json";
import ce from "../../../.intlayer/dictionary/pricing.json";
import le from "../../../.intlayer/dictionary/what-we-measure.json";
import ue from "../../../.intlayer/dictionary/products.json";
import de from "../../../.intlayer/dictionary/contact.json";
import fe from "../../../.intlayer/dictionary/blog-list.json";
import pe from "../../../.intlayer/dictionary/about.json";
import me from "../../../.intlayer/dictionary/understanding-impact.json";
import he from "../../../.intlayer/dictionary/home.json";
import ge from "../../../.intlayer/dictionary/team.json";
import _e from "../../../.intlayer/dictionary/blog.json";
import ve from "../../../.intlayer/dictionary/why-it-matters.json";
import ye from "../../../.intlayer/dictionary/hero.json";
import { usePathname as be } from "next/navigation";
var S = {
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
}, C = {
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
}, w = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, xe = 50, T = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Set(), Se = (e) => {
	E.has(e) || (E.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Ce = {
	DisplayNames: class {
		of(e) {
			return e;
		}
	},
	ListFormat: class {
		format(e) {
			return Array.from(e).join(", ");
		}
		formatToParts(e) {
			return Array.from(e).flatMap((e, t) => t === 0 ? [{
				type: "element",
				value: e
			}] : [{
				type: "literal",
				value: ", "
			}, {
				type: "element",
				value: e
			}]);
		}
	},
	Segmenter: class {
		segment(e) {
			let t = 0;
			return Array.from(e).map((e) => {
				let n = t;
				return t += e.length, {
					segment: e,
					index: n
				};
			});
		}
	}
}, we = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Se(e), Ce[e]);
};
function D(e, t, n) {
	let r = t ?? S?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = T.get(a);
	o || (o = /* @__PURE__ */ new Map(), T.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? we(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > xe && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Te = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), O = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, Ee = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = O(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, k = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var A = {
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
}, j = (e = A) => {
	let { locales: t } = S;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!k) for (let t = 0; t < (C.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(C.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, M = !1, N, De = () => typeof window > "u" ? j(A) : (M ||= (N = j(A), !0), N), Oe = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (M = !1, !k && C.storage.cookies)) for (let n = 0; n < C.storage.cookies.length; n++) {
		let { name: r, attributes: i } = C.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: O(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, Ee(r, e, i));
			} catch {}
		}
	}
}, P = /* @__PURE__ */ new WeakMap(), F = 0, ke = (e) => {
	if (!e) return "base";
	let t = P.get(e);
	if (t) return t;
	F += 1;
	let n = `p${F}`;
	return P.set(e, n), n;
}, Ae = 256, I = /* @__PURE__ */ new WeakMap(), je = (e) => typeof e == "object" && !!e, Me = (e, t, n) => `${e}_${t}_${ke(n)}`, Ne = (e, t) => {
	if (!je(e)) return { hit: !1 };
	let n = I.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, L = (e, t, n) => {
	if (!je(e)) return n;
	let r = I.get(e);
	return r || (r = /* @__PURE__ */ new Map(), I.set(e, r)), r.size >= Ae && r.clear(), r.set(t, n), n;
}, Pe = "translation", R = "enumeration", Fe = "plural", Ie = "condition", z = "insertion", Le = "object", Re = "array", ze = "markdown", B = "html", Be = "gender", Ve = "select", V = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), H = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, H);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => H(e, V(t, e, {
		type: Re,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: Le,
			key: r
		};
		if (t.eager) {
			n[r] = H(e[r], V(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = H(e[r], V(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, He = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Ue = (e, t) => e[He(e, t) ?? "fallback"], We = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), U = "\x1B[0m", Ge = "\x1B[34m", Ke = "\x1B[31m", qe = "\x1B[32m", Je = "\x1B[38;5;3m", Ye = "\x1B[36m", Xe = (e) => e, Ze = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Xe(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Qe = (e, t) => (n, r) => Ze(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), W = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? U : n : U}` : e, $e = (e, t = Je, n = U) => [e].flat().map((e) => W(e, t, n)).join(", ");
W("✗", Ke), W("✓", qe), W("⏲", Ge);
var et = {
	faq: d,
	header: f,
	"open-positions": p,
	"careers-benefits": m,
	settings: h,
	footer: g,
	"results-table": _,
	"contact-form": v,
	"contact-header": y,
	"about-grid": b,
	mockBanner: x,
	"theme-toggle": ee,
	"about-header": te,
	"faq-header1": ne,
	careers: re,
	"blog-header": ie,
	route: ae,
	"faq-list": oe,
	"careers-header": se,
	pricing: ce,
	"what-we-measure": le,
	products: ue,
	contact: de,
	"blog-list": fe,
	about: pe,
	"understanding-impact": me,
	home: he,
	team: ge,
	blog: _e,
	"why-it-matters": ve,
	hero: ye
}, tt = () => et, nt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), rt = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : nt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : rt(e ? `${e}.${String(n)}` : String(n)) }), it = /* @__PURE__ */ new Set(), at = (e, t, n) => {
	let r = tt()[e];
	return r ? kt(r, t, n) : (it.has(e) || (Qe({ log: w })(typeof window > "u" ? `Dictionary ${$e(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), it.add(e)), rt(e));
}, ot = (e, t, n) => e[D("PluralRules", n).select(t)] ?? e.other, st = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, ct = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, lt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !ct(e) || !ct(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? lt(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, ut = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => lt(e, t));
}, G = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, dt = (e) => {
	if (typeof e == "string") return e;
	if (G(e)) return e.nodeType === "html" ? e[B] : e[ze];
}, ft = (e, t) => {
	if (typeof e == "string") return t;
	if (G(e)) {
		let n = e.nodeType === "html" ? B : ze;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, pt = (e, t, n, r, i) => {
	let a = ft(e, We(dt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, K = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, mt = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, ht = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? K : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = ut(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: Pe,
				key: e
			}]
		});
	}
}, gt = K, _t = (e) => K, vt = K, yt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? K : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: z }], i = e[z], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || G(e),
			transform: (e, n, r) => {
				if (G(e)) return (i) => pt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = We(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return St(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, bt = [
	R,
	Ie,
	Fe,
	Be,
	Ve
], xt = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !bt.includes(i)) return t;
	let a = i === "plural" || i === "enumeration";
	return (e) => {
		if (typeof e == "object" && e) return t({
			...n,
			...e
		});
		if (a) return t({
			...n,
			count: e
		});
		let i = t(e);
		return !r && mt(i) ? i(n) : i;
	};
}, St = (e, t) => typeof t == "function" && bt.includes(e?.nodeType ?? "") ? (n) => xt(e, t, n) : t, Ct = K, wt = K;
process.env.INTLAYER_OPTIMIZED_NESTING;
var Tt = (e) => K, Et = K, Dt = (e, t = !0) => [
	ht(e ?? S.defaultLocale, t ? S.defaultLocale : void 0),
	gt,
	_t(e ?? S.defaultLocale),
	vt,
	yt,
	Tt(e ?? S.defaultLocale),
	Et,
	Ct,
	wt
].filter((e) => e !== K), Ot = (e, t, n = []) => H(e, {
	...t,
	plugins: n
}), q = /* @__PURE__ */ new WeakSet(), kt = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = Me(r ?? S.defaultLocale, "", n), o = Ne(e, a);
	if (o.hit) return o.content;
	let s = n ?? Dt(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !q.has(e)
		};
		q.add(e);
		try {
			return Ot(e.content, t, s);
		} finally {
			t.eager && q.delete(e);
		}
	};
	return c === null ? L(e, a, null) : Array.isArray(c) ? L(e, a, c.map(l)) : L(e, a, l(c));
}, At = ["en"], jt = De, Mt = (e, t) => Oe(e, {
	...A,
	isCookieEnabled: t
}), Nt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Pt = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? S?.defaultLocale ?? "en",
	mode: e.mode ?? C?.mode ?? "prefix-no-default",
	locales: e.locales ?? S?.locales ?? At,
	rewrite: e.rewrite ?? C?.rewrite,
	domains: e.domains ?? C?.domains
}), Ft = (e, t) => !!e && (t ?? S.locales).includes(e), It = (e, t = S?.locales, n = S?.defaultLocale) => {
	if (t?.includes(e)) return e;
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
}, Lt = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = Pt(t);
	if (!n || !r) return n;
	let a = Te(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return Ft(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (Ft(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, Rt = t({
	get locale() {
		return jt() ?? S?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), zt = ({ locale: e, defaultLocale: t, variant: r, children: a, setLocale: c, disableEditor: u, isCookieEnabled: d }) => {
	let { locales: f, defaultLocale: p } = S ?? {}, [m, h] = s(() => e ?? jt() ?? t ?? p), [g, _] = s(e);
	e !== g && (_(e), e && e !== m && h(e)), i(() => {
		Nt();
	}, []);
	let v = n((e) => {
		if (m.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			h(e), Mt(e, d);
		}
	}, [
		m,
		f,
		d
	]), y = c ?? v, b = It(m), x = o(() => ({
		locale: b,
		setLocale: y,
		variant: r,
		disableEditor: u
	}), [
		b,
		y,
		r,
		u
	]);
	return l(Rt.Provider, {
		value: x,
		children: a
	});
}, Bt = ({ children: e, ...t }) => u(zt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), Vt = ({ locale: e, children: t, messages: n, timeZone: r, now: i, ...a }) => {
	n !== void 0 && Qe({ log: w })(`${W("NextIntlClientProvider", Ye)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`);
	let o = be(), s = C?.mode ?? "prefix-no-default", c = e ?? (s === "prefix-all" || s === "prefix-no-default" ? Lt(o) : void 0);
	return l(Bt, {
		locale: c,
		...a,
		children: t
	}, String(c));
}, Ht = (e, t, n = ".") => {
	if (!t) return e;
	if (typeof e == "object" && e) {
		let n = e[t];
		if (n !== void 0) return n;
	}
	if (n === !1 || !t.includes(n)) return;
	let r = e;
	for (let e of t.split(n)) {
		if (typeof r != "object" || !r) return;
		r = r[e];
	}
	return r;
}, Ut = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], J = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, Y = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? D("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? D("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : D("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return D("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Wt = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = J(t, r);
	return o === void 0 ? e : i ? Y(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = J(t, r);
	return o === void 0 ? e : Y(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = J(t, n);
	return r === void 0 ? e : String(r);
}), X = (e, t) => e[t] ?? e.count ?? e.n, Z = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Wt(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return Z(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(Z(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return Z(r[z], t, n);
	if (r.nodeType === "html") return Z(r[B], t, n);
	if (r.nodeType === "plural") {
		let e = r[Fe];
		return Z(ot(e, Number(X(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[R], i = Ut.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Ut.includes(t) || (o[t] = n);
		let s = X(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = D("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Ue(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return Z(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[Ve], i = X(t, typeof r.variable == "string" ? r.variable : "value");
		return Z(st(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[Be];
		return Z(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Gt = (e, t = {}, n = "en") => {
	let r = Z(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Q = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : o && t.push({
			tag: o,
			children: Q(s ?? "")
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, Kt = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, qt = (t, n) => t.map((t, r) => {
	if (typeof t == "string") return t;
	let i = qt(t.children, n), a = n[t.tag];
	return typeof a == "function" ? l(e, { children: a(i) }, r) : l(e, { children: i }, r);
}), $ = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = $(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), Jt = (e, t) => {
	let [n, ...r] = (t ?? "").split("."), i = r.join(".");
	return Xt(e, (t) => Yt(e, n ?? "", i, t), (e) => t ? `${t}.${e}` : e);
}, Yt = (e, t, n, r) => {
	let i = t, a = n ? `${n}.${r}` : r, o = tt();
	if (!i) {
		let [t, ...n] = r.split(".");
		if (i = t ?? r, a = n.join("."), !o[i]) for (let t of Object.keys(o)) try {
			let n = Ht(at(t, e), r);
			if (n !== void 0) return n;
		} catch {}
	}
	try {
		return Ht(at(i, e), a);
	} catch {
		return;
	}
}, Xt = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return Gt(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = Kt(t), o = r(e, i);
			return o === void 0 ? n(e) : l(c, { children: qt(Q(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = Kt(t), o = r(e, i);
			return o === void 0 ? n(e) : $(Q(o), a);
		}
	});
}, Zt = ((e) => {
	let { locale: t } = r(Rt) ?? {};
	return o(() => Jt(t, e), [t, e]);
});
function Qt(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), a(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
function $t() {
	let e = Zt();
	return Qt("AboutHeader"), u(c, { children: [l("h1", {
		className: "mb-4 text-3xl font-bold text-foreground",
		children: e("about-header.aboutThisBenchmark")
	}), l("p", {
		className: "mb-8 max-w-3xl text-muted-foreground",
		children: e("about-header.thisIsAnOpenSource")
	})] });
}
function en() {
	if (!(typeof window > "u")) {
		console.log("--- BROWSER: RootDocument mounted"), performance.mark("hydration_end");
		try {
			if (performance.getEntriesByName("hydration_start").length > 0) {
				performance.measure("hydration_duration", "hydration_start", "hydration_end"), console.log("--- BROWSER: hydration_duration measured");
				let e = performance.getEntriesByName("hydration_duration")[0]?.duration;
				e && console.log(`Hydration Duration: ${e.toFixed(2)}ms`);
			} else console.warn("--- BROWSER: hydration_start NOT FOUND");
		} catch (e) {
			console.warn("Could not measure hydration duration:", e);
		}
	}
}
function tn(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function nn({ children: e, locale: t }) {
	let [n] = s(() => typeof performance < "u" ? performance.now() : 0);
	return a(() => {
		tn("AppRoot", n);
	}, [n]), i(() => {
		document.documentElement.lang = t;
	}, [t]), i(() => {
		en();
	}, []), l(Vt, {
		locale: t,
		timeZone: "UTC",
		children: e
	});
}
var rn = "en";
function an({ children: e }) {
	return l(nn, {
		locale: rn,
		children: e
	});
}
function on() {
	return l(an, { children: l($t, {}) });
}
export { on as default };
