import { Fragment as e, createContext as t, useCallback as n, useContext as r, useEffect as i, useLayoutEffect as a, useMemo as o, useState as s } from "react";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
import d from "../.intlayer/dictionary/faq.json";
import f from "../.intlayer/dictionary/header.json";
import p from "../.intlayer/dictionary/open-positions.json";
import m from "../.intlayer/dictionary/careers-benefits.json";
import h from "../.intlayer/dictionary/settings.json";
import g from "../.intlayer/dictionary/footer.json";
import _ from "../.intlayer/dictionary/results-table.json";
import ee from "../.intlayer/dictionary/contact-form.json";
import v from "../.intlayer/dictionary/contact-header.json";
import y from "../.intlayer/dictionary/about-grid.json";
import te from "../.intlayer/dictionary/mockBanner.json";
import ne from "../.intlayer/dictionary/theme-toggle.json";
import re from "../.intlayer/dictionary/about-header.json";
import ie from "../.intlayer/dictionary/faq-header1.json";
import ae from "../.intlayer/dictionary/careers.json";
import oe from "../.intlayer/dictionary/blog-header.json";
import se from "../.intlayer/dictionary/route.json";
import ce from "../.intlayer/dictionary/faq-list.json";
import le from "../.intlayer/dictionary/careers-header.json";
import ue from "../.intlayer/dictionary/pricing.json";
import de from "../.intlayer/dictionary/what-we-measure.json";
import fe from "../.intlayer/dictionary/products.json";
import pe from "../.intlayer/dictionary/contact.json";
import me from "../.intlayer/dictionary/blog-list.json";
import he from "../.intlayer/dictionary/about.json";
import ge from "../.intlayer/dictionary/understanding-impact.json";
import _e from "../.intlayer/dictionary/home.json";
import ve from "../.intlayer/dictionary/team.json";
import ye from "../.intlayer/dictionary/blog.json";
import be from "../.intlayer/dictionary/why-it-matters.json";
import xe from "../.intlayer/dictionary/hero.json";
import { usePathname as Se } from "next/navigation";
var b = {
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
}, x = {
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
}, S = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, Ce = 50, we = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Set(), Te = (e) => {
	C.has(e) || (C.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Ee = {
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
}, De = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Te(e), Ee[e]);
};
function w(e, t, n) {
	let r = t ?? b?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = we.get(a);
	o || (o = /* @__PURE__ */ new Map(), we.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? De(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Ce && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Oe = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), T = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, ke = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = T(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, E = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var D = {
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
}, Ae = (e = D) => {
	let { locales: t } = b;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!E) for (let t = 0; t < (x.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(x.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, je = !1, Me, Ne = () => typeof window > "u" ? Ae(D) : (je ||= (Me = Ae(D), !0), Me), Pe = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (je = !1, !E && x.storage.cookies)) for (let n = 0; n < x.storage.cookies.length; n++) {
		let { name: r, attributes: i } = x.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: T(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ke(r, e, i));
			} catch {}
		}
	}
}, Fe = /* @__PURE__ */ new WeakMap(), Ie = 0, Le = (e) => {
	if (!e) return "base";
	let t = Fe.get(e);
	if (t) return t;
	Ie += 1;
	let n = `p${Ie}`;
	return Fe.set(e, n), n;
}, Re = 256, O = /* @__PURE__ */ new WeakMap(), k = (e) => typeof e == "object" && !!e, ze = (e, t, n) => `${e}_${t}_${Le(n)}`, Be = (e, t) => {
	if (!k(e)) return { hit: !1 };
	let n = O.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, A = (e, t, n) => {
	if (!k(e)) return n;
	let r = O.get(e);
	return r || (r = /* @__PURE__ */ new Map(), O.set(e, r)), r.size >= Re && r.clear(), r.set(t, n), n;
}, Ve = "translation", j = "enumeration", M = "plural", He = "condition", N = "insertion", Ue = "object", We = "array", P = "markdown", F = "html", I = "gender", L = "select", R = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), z = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, z);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => z(e, R(t, e, {
		type: We,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: Ue,
			key: r
		};
		if (t.eager) {
			n[r] = z(e[r], R(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = z(e[r], R(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, Ge = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Ke = (e, t) => e[Ge(e, t) ?? "fallback"], B = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), V = "\x1B[0m", qe = "\x1B[34m", Je = "\x1B[31m", Ye = "\x1B[32m", Xe = "\x1B[38;5;3m", Ze = "\x1B[36m", Qe = (e) => e, $e = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Qe(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, H = (e, t) => (n, r) => $e(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), U = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? V : n : V}` : e, et = (e, t = Xe, n = V) => [e].flat().map((e) => U(e, t, n)).join(", ");
U("✗", Je), U("✓", Ye), U("⏲", qe);
var tt = {
	faq: d,
	header: f,
	"open-positions": p,
	"careers-benefits": m,
	settings: h,
	footer: g,
	"results-table": _,
	"contact-form": ee,
	"contact-header": v,
	"about-grid": y,
	mockBanner: te,
	"theme-toggle": ne,
	"about-header": re,
	"faq-header1": ie,
	careers: ae,
	"blog-header": oe,
	route: se,
	"faq-list": ce,
	"careers-header": le,
	pricing: ue,
	"what-we-measure": de,
	products: fe,
	contact: pe,
	"blog-list": me,
	about: he,
	"understanding-impact": ge,
	home: _e,
	team: ve,
	blog: ye,
	"why-it-matters": be,
	hero: xe
}, W = () => tt, nt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), G = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : nt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : G(e ? `${e}.${String(n)}` : String(n)) }), rt = /* @__PURE__ */ new Set(), it = (e, t, n) => {
	let r = W()[e];
	return r ? Ot(r, t, n) : (rt.has(e) || (H({ log: S })(typeof window > "u" ? `Dictionary ${et(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), rt.add(e)), G(e));
}, at = (e, t, n) => e[w("PluralRules", n).select(t)] ?? e.other, ot = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, st = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, ct = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !st(e) || !st(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? ct(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, lt = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => ct(e, t));
}, K = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, ut = (e) => {
	if (typeof e == "string") return e;
	if (K(e)) return e.nodeType === "html" ? e[F] : e[P];
}, dt = (e, t) => {
	if (typeof e == "string") return t;
	if (K(e)) {
		let n = e.nodeType === "html" ? F : P;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, ft = (e, t, n, r, i) => {
	let a = dt(e, B(ut(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, q = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, pt = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, mt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? q : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = lt(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: Ve,
				key: e
			}]
		});
	}
}, ht = q, gt = (e) => q, _t = q, vt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? q : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: N }], i = e[N], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || K(e),
			transform: (e, n, r) => {
				if (K(e)) return (i) => ft(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = B(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return xt(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, yt = [
	j,
	He,
	M,
	I,
	L
], bt = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !yt.includes(i)) return t;
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
		return !r && pt(i) ? i(n) : i;
	};
}, xt = (e, t) => typeof t == "function" && yt.includes(e?.nodeType ?? "") ? (n) => bt(e, t, n) : t, St = q, Ct = q;
process.env.INTLAYER_OPTIMIZED_NESTING;
var wt = (e) => q, Tt = q, Et = (e, t = !0) => [
	mt(e ?? b.defaultLocale, t ? b.defaultLocale : void 0),
	ht,
	gt(e ?? b.defaultLocale),
	_t,
	vt,
	wt(e ?? b.defaultLocale),
	Tt,
	St,
	Ct
].filter((e) => e !== q), Dt = (e, t, n = []) => z(e, {
	...t,
	plugins: n
}), J = /* @__PURE__ */ new WeakSet(), Ot = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = ze(r ?? b.defaultLocale, "", n), o = Be(e, a);
	if (o.hit) return o.content;
	let s = n ?? Et(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !J.has(e)
		};
		J.add(e);
		try {
			return Dt(e.content, t, s);
		} finally {
			t.eager && J.delete(e);
		}
	};
	return c === null ? A(e, a, null) : Array.isArray(c) ? A(e, a, c.map(l)) : A(e, a, l(c));
}, kt = ["en"], At = Ne, jt = (e, t) => Pe(e, {
	...D,
	isCookieEnabled: t
}), Mt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Nt = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? b?.defaultLocale ?? "en",
	mode: e.mode ?? x?.mode ?? "prefix-no-default",
	locales: e.locales ?? b?.locales ?? kt,
	rewrite: e.rewrite ?? x?.rewrite,
	domains: e.domains ?? x?.domains
}), Pt = (e, t) => !!e && (t ?? b.locales).includes(e), Ft = (e, t = b?.locales, n = b?.defaultLocale) => {
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
}, It = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = Nt(t);
	if (!n || !r) return n;
	let a = Oe(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return Pt(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (Pt(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, Lt = t({
	get locale() {
		return At() ?? b?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), Rt = ({ locale: e, defaultLocale: t, variant: r, children: a, setLocale: c, disableEditor: u, isCookieEnabled: d }) => {
	let { locales: f, defaultLocale: p } = b ?? {}, [m, h] = s(() => e ?? At() ?? t ?? p), [g, _] = s(e);
	e !== g && (_(e), e && e !== m && h(e)), i(() => {
		Mt();
	}, []);
	let ee = n((e) => {
		if (m.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			h(e), jt(e, d);
		}
	}, [
		m,
		f,
		d
	]), v = c ?? ee, y = Ft(m), te = o(() => ({
		locale: y,
		setLocale: v,
		variant: r,
		disableEditor: u
	}), [
		y,
		v,
		r,
		u
	]);
	return l(Lt.Provider, {
		value: te,
		children: a
	});
}, zt = ({ children: e, ...t }) => u(Rt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), Bt = ({ locale: e, children: t, messages: n, timeZone: r, now: i, ...a }) => {
	n !== void 0 && H({ log: S })(`${U("NextIntlClientProvider", Ze)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`);
	let o = Se(), s = x?.mode ?? "prefix-no-default", c = e ?? (s === "prefix-all" || s === "prefix-no-default" ? It(o) : void 0);
	return l(zt, {
		locale: c,
		...a,
		children: t
	}, String(c));
}, Vt = (e, t, n = ".") => {
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
}, Ht = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], Y = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, Ut = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? w("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? w("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : w("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return w("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Wt = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = Y(t, r);
	return o === void 0 ? e : i ? Ut(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = Y(t, r);
	return o === void 0 ? e : Ut(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = Y(t, n);
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
	if (r.nodeType === "insertion") return Z(r[N], t, n);
	if (r.nodeType === "html") return Z(r[F], t, n);
	if (r.nodeType === "plural") {
		let e = r[M];
		return Z(at(e, Number(X(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[j], i = Ht.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Ht.includes(t) || (o[t] = n);
		let s = X(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = w("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Ke(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return Z(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[L], i = X(t, typeof r.variable == "string" ? r.variable : "value");
		return Z(ot(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[I];
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
	let i = t, a = n ? `${n}.${r}` : r, o = W();
	if (!i) {
		let [t, ...n] = r.split(".");
		if (i = t ?? r, a = n.join("."), !o[i]) for (let t of Object.keys(o)) try {
			let n = Vt(it(t, e), r);
			if (n !== void 0) return n;
		} catch {}
	}
	try {
		return Vt(it(i, e), a);
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
	let { locale: t } = r(Lt) ?? {};
	return o(() => Jt(t, e), [t, e]);
}), Qt = () => {
	let e = Zt();
	return l("div", {
		className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
		children: e("mockBanner")
	});
};
function $t() {
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
function en(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function tn({ children: e, locale: t }) {
	let [n] = s(() => typeof performance < "u" ? performance.now() : 0);
	return a(() => {
		en("AppRoot", n);
	}, [n]), i(() => {
		document.documentElement.lang = t;
	}, [t]), i(() => {
		$t();
	}, []), l(Bt, {
		locale: t,
		timeZone: "UTC",
		children: e
	});
}
var nn = "en";
function rn({ children: e }) {
	return l(tn, {
		locale: nn,
		children: e
	});
}
function an() {
	return l(rn, { children: l(Qt, {}) });
}
export { an as default };
