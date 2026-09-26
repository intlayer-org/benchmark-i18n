import { Fragment as e, createContext as t, useCallback as n, useContext as r, useEffect as i, useLayoutEffect as a, useMemo as o, useState as s } from "react";
import c from "next/link";
import { useParams as l, usePathname as u } from "next/navigation";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
import m from "../.intlayer/dictionary/faq.json";
import h from "../.intlayer/dictionary/header.json";
import g from "../.intlayer/dictionary/open-positions.json";
import _ from "../.intlayer/dictionary/careers-benefits.json";
import v from "../.intlayer/dictionary/settings.json";
import y from "../.intlayer/dictionary/footer.json";
import b from "../.intlayer/dictionary/results-table.json";
import x from "../.intlayer/dictionary/contact-form.json";
import ee from "../.intlayer/dictionary/contact-header.json";
import te from "../.intlayer/dictionary/about-grid.json";
import ne from "../.intlayer/dictionary/mockBanner.json";
import re from "../.intlayer/dictionary/theme-toggle.json";
import ie from "../.intlayer/dictionary/about-header.json";
import ae from "../.intlayer/dictionary/faq-header1.json";
import oe from "../.intlayer/dictionary/careers.json";
import se from "../.intlayer/dictionary/blog-header.json";
import ce from "../.intlayer/dictionary/route.json";
import le from "../.intlayer/dictionary/faq-list.json";
import ue from "../.intlayer/dictionary/careers-header.json";
import de from "../.intlayer/dictionary/pricing.json";
import fe from "../.intlayer/dictionary/what-we-measure.json";
import pe from "../.intlayer/dictionary/products.json";
import me from "../.intlayer/dictionary/contact.json";
import he from "../.intlayer/dictionary/blog-list.json";
import ge from "../.intlayer/dictionary/about.json";
import _e from "../.intlayer/dictionary/understanding-impact.json";
import ve from "../.intlayer/dictionary/home.json";
import ye from "../.intlayer/dictionary/team.json";
import be from "../.intlayer/dictionary/blog.json";
import xe from "../.intlayer/dictionary/why-it-matters.json";
import Se from "../.intlayer/dictionary/hero.json";
var Ce = (e) => /^https?:\/\//.test(e ?? "");
function we(e, t) {
	return !e.startsWith("/") || e === `/${t}` || e.startsWith(`/${t}/`) ? e : `/${t}${e === "/" ? "" : e}`;
}
var Te = ({ href: e, children: t, ...n }) => {
	let r = l().locale ?? "en";
	return e == null || typeof e != "string" || Ce(e) ? f(c, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}) : f(c, {
		href: we(e, r),
		prefetch: !1,
		...n,
		children: t
	});
}, S = {
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
}, Ee = 50, T = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Set(), De = (e) => {
	E.has(e) || (E.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Oe = {
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
}, ke = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (De(e), Oe[e]);
};
function D(e, t, n) {
	let r = t ?? S?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = T.get(a);
	o || (o = /* @__PURE__ */ new Map(), T.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? ke(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Ee && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Ae = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), O = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, je = (e, t, n) => {
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
}, M = !1, N, Me = () => typeof window > "u" ? j(A) : (M ||= (N = j(A), !0), N), Ne = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (M = !1, !k && C.storage.cookies)) for (let n = 0; n < C.storage.cookies.length; n++) {
		let { name: r, attributes: i } = C.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: O(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, je(r, e, i));
			} catch {}
		}
	}
}, P = /* @__PURE__ */ new WeakMap(), F = 0, Pe = (e) => {
	if (!e) return "base";
	let t = P.get(e);
	if (t) return t;
	F += 1;
	let n = `p${F}`;
	return P.set(e, n), n;
}, Fe = 256, I = /* @__PURE__ */ new WeakMap(), L = (e) => typeof e == "object" && !!e, Ie = (e, t, n) => `${e}_${t}_${Pe(n)}`, Le = (e, t) => {
	if (!L(e)) return { hit: !1 };
	let n = I.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, R = (e, t, n) => {
	if (!L(e)) return n;
	let r = I.get(e);
	return r || (r = /* @__PURE__ */ new Map(), I.set(e, r)), r.size >= Fe && r.clear(), r.set(t, n), n;
}, Re = "translation", ze = "enumeration", Be = "plural", Ve = "condition", z = "insertion", He = "object", Ue = "array", B = "markdown", V = "html", We = "gender", Ge = "select", H = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), U = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, U);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => U(e, H(t, e, {
		type: Ue,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: He,
			key: r
		};
		if (t.eager) {
			n[r] = U(e[r], H(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = U(e[r], H(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, Ke = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, qe = (e, t) => e[Ke(e, t) ?? "fallback"], Je = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), W = "\x1B[0m", Ye = "\x1B[34m", Xe = "\x1B[31m", Ze = "\x1B[32m", Qe = "\x1B[38;5;3m", $e = "\x1B[36m", et = (e) => e, tt = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = et(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, nt = (e, t) => (n, r) => tt(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), G = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? W : n : W}` : e, rt = (e, t = Qe, n = W) => [e].flat().map((e) => G(e, t, n)).join(", ");
G("✗", Xe), G("✓", Ze), G("⏲", Ye);
var it = {
	faq: m,
	header: h,
	"open-positions": g,
	"careers-benefits": _,
	settings: v,
	footer: y,
	"results-table": b,
	"contact-form": x,
	"contact-header": ee,
	"about-grid": te,
	mockBanner: ne,
	"theme-toggle": re,
	"about-header": ie,
	"faq-header1": ae,
	careers: oe,
	"blog-header": se,
	route: ce,
	"faq-list": le,
	"careers-header": ue,
	pricing: de,
	"what-we-measure": fe,
	products: pe,
	contact: me,
	"blog-list": he,
	about: ge,
	"understanding-impact": _e,
	home: ve,
	team: ye,
	blog: be,
	"why-it-matters": xe,
	hero: Se
}, at = () => it, ot = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), st = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : ot.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : st(e ? `${e}.${String(n)}` : String(n)) }), ct = /* @__PURE__ */ new Set(), lt = (e, t, n) => {
	let r = at()[e];
	return r ? Nt(r, t, n) : (ct.has(e) || (nt({ log: w })(typeof window > "u" ? `Dictionary ${rt(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), ct.add(e)), st(e));
}, ut = (e, t, n) => e[D("PluralRules", n).select(t)] ?? e.other, dt = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, ft = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, pt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !ft(e) || !ft(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? pt(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, mt = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => pt(e, t));
}, K = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, ht = (e) => {
	if (typeof e == "string") return e;
	if (K(e)) return e.nodeType === "html" ? e[V] : e[B];
}, gt = (e, t) => {
	if (typeof e == "string") return t;
	if (K(e)) {
		let n = e.nodeType === "html" ? V : B;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, _t = (e, t, n, r, i) => {
	let a = gt(e, Je(ht(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, q = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, vt = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, yt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? q : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = mt(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: Re,
				key: e
			}]
		});
	}
}, bt = q, xt = (e) => q, St = q, Ct = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? q : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: z }], i = e[z], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || K(e),
			transform: (e, n, r) => {
				if (K(e)) return (i) => _t(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Je(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return Et(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, wt = [
	ze,
	Ve,
	Be,
	We,
	Ge
], Tt = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !wt.includes(i)) return t;
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
		return !r && vt(i) ? i(n) : i;
	};
}, Et = (e, t) => typeof t == "function" && wt.includes(e?.nodeType ?? "") ? (n) => Tt(e, t, n) : t, Dt = q, Ot = q;
process.env.INTLAYER_OPTIMIZED_NESTING;
var kt = (e) => q, At = q, jt = (e, t = !0) => [
	yt(e ?? S.defaultLocale, t ? S.defaultLocale : void 0),
	bt,
	xt(e ?? S.defaultLocale),
	St,
	Ct,
	kt(e ?? S.defaultLocale),
	At,
	Dt,
	Ot
].filter((e) => e !== q), Mt = (e, t, n = []) => U(e, {
	...t,
	plugins: n
}), J = /* @__PURE__ */ new WeakSet(), Nt = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = Ie(r ?? S.defaultLocale, "", n), o = Le(e, a);
	if (o.hit) return o.content;
	let s = n ?? jt(r), c = e, l = (e) => {
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
			return Mt(e.content, t, s);
		} finally {
			t.eager && J.delete(e);
		}
	};
	return c === null ? R(e, a, null) : Array.isArray(c) ? R(e, a, c.map(l)) : R(e, a, l(c));
}, Pt = ["en"], Ft = Me, It = (e, t) => Ne(e, {
	...A,
	isCookieEnabled: t
}), Lt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Rt = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? S?.defaultLocale ?? "en",
	mode: e.mode ?? C?.mode ?? "prefix-no-default",
	locales: e.locales ?? S?.locales ?? Pt,
	rewrite: e.rewrite ?? C?.rewrite,
	domains: e.domains ?? C?.domains
}), zt = (e, t) => !!e && (t ?? S.locales).includes(e), Bt = (e, t = S?.locales, n = S?.defaultLocale) => {
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
}, Vt = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = Rt(t);
	if (!n || !r) return n;
	let a = Ae(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return zt(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (zt(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, Ht = t({
	get locale() {
		return Ft() ?? S?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), Ut = ({ locale: e, defaultLocale: t, variant: r, children: a, setLocale: c, disableEditor: l, isCookieEnabled: u }) => {
	let { locales: d, defaultLocale: p } = S ?? {}, [m, h] = s(() => e ?? Ft() ?? t ?? p), [g, _] = s(e);
	e !== g && (_(e), e && e !== m && h(e)), i(() => {
		Lt();
	}, []);
	let v = n((e) => {
		if (m.toString() !== e.toString()) {
			if (!d?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			h(e), It(e, u);
		}
	}, [
		m,
		d,
		u
	]), y = c ?? v, b = Bt(m), x = o(() => ({
		locale: b,
		setLocale: y,
		variant: r,
		disableEditor: l
	}), [
		b,
		y,
		r,
		l
	]);
	return f(Ht.Provider, {
		value: x,
		children: a
	});
}, Wt = ({ children: e, ...t }) => p(Ut, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), Gt = ({ locale: e, children: t, messages: n, timeZone: r, now: i, ...a }) => {
	n !== void 0 && nt({ log: w })(`${G("NextIntlClientProvider", $e)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`);
	let o = u(), s = C?.mode ?? "prefix-no-default", c = e ?? (s === "prefix-all" || s === "prefix-no-default" ? Vt(o) : void 0);
	return f(Wt, {
		locale: c,
		...a,
		children: t
	}, String(c));
}, Kt = (e, t, n = ".") => {
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
}, qt = [
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
}, Jt = (e, t, n, r) => {
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
}, Yt = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = Y(t, r);
	return o === void 0 ? e : i ? Jt(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = Y(t, r);
	return o === void 0 ? e : Jt(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = Y(t, n);
	return r === void 0 ? e : String(r);
}), X = (e, t) => e[t] ?? e.count ?? e.n, Z = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Yt(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return Z(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(Z(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return Z(r[z], t, n);
	if (r.nodeType === "html") return Z(r[V], t, n);
	if (r.nodeType === "plural") {
		let e = r[Be];
		return Z(ut(e, Number(X(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[ze], i = qt.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) qt.includes(t) || (o[t] = n);
		let s = X(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = D("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? qe(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return Z(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[Ge], i = X(t, typeof r.variable == "string" ? r.variable : "value");
		return Z(dt(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[We];
		return Z(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Xt = (e, t = {}, n = "en") => {
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
}, Zt = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, Qt = (t, n) => t.map((t, r) => {
	if (typeof t == "string") return t;
	let i = Qt(t.children, n), a = n[t.tag];
	return typeof a == "function" ? f(e, { children: a(i) }, r) : f(e, { children: i }, r);
}), $ = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = $(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), $t = (e, t) => {
	let [n, ...r] = (t ?? "").split("."), i = r.join(".");
	return tn(e, (t) => en(e, n ?? "", i, t), (e) => t ? `${t}.${e}` : e);
}, en = (e, t, n, r) => {
	let i = t, a = n ? `${n}.${r}` : r, o = at();
	if (!i) {
		let [t, ...n] = r.split(".");
		if (i = t ?? r, a = n.join("."), !o[i]) for (let t of Object.keys(o)) try {
			let n = Kt(lt(t, e), r);
			if (n !== void 0) return n;
		} catch {}
	}
	try {
		return Kt(lt(i, e), a);
	} catch {
		return;
	}
}, tn = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return Xt(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = Zt(t), o = r(e, i);
			return o === void 0 ? n(e) : f(d, { children: Qt(Q(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = Zt(t), o = r(e, i);
			return o === void 0 ? n(e) : $(Q(o), a);
		}
	});
}, nn = ((e) => {
	let { locale: t } = r(Ht) ?? {};
	return o(() => $t(t, e), [t, e]);
});
function rn() {
	let e = nn(), t = [
		{
			label: e("footer.github"),
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: e("footer.methodology"),
			href: "/about",
			isInternal: !0
		},
		{
			label: e("footer.contributing"),
			href: "/contact",
			isInternal: !0
		}
	];
	return f("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: p("div", {
			className: "container py-8",
			children: [p("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					p("div", { children: [f("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "i18n Benchmark"
					}), f("p", {
						className: "text-sm text-muted-foreground",
						children: e("footer.anOpenSourceTestApplication")
					})] }),
					p("div", { children: [f("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e("footer.resources")
					}), f("ul", {
						className: "space-y-1",
						children: t.map((e) => f("li", { children: e.isInternal ? f(Te, {
							href: e.href,
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) : f("a", {
							href: e.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) }, e.label))
					})] }),
					p("div", { children: [f("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e("footer.contact")
					}), f("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					})] })
				]
			}), f("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: e("footer.builtWith")
			})]
		})
	});
}
function an() {
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
function on(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function sn({ children: e, locale: t }) {
	let [n] = s(() => typeof performance < "u" ? performance.now() : 0);
	return a(() => {
		on("AppRoot", n);
	}, [n]), i(() => {
		document.documentElement.lang = t;
	}, [t]), i(() => {
		an();
	}, []), f(Gt, {
		locale: t,
		timeZone: "UTC",
		children: e
	});
}
var cn = "en";
function ln({ children: e }) {
	return f(sn, {
		locale: cn,
		children: e
	});
}
function un() {
	return f(ln, { children: f(rn, {}) });
}
export { un as default };
