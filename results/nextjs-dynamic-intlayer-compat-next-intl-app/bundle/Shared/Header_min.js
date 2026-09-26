import { Fragment as e, createContext as t, useCallback as n, useContext as r, useEffect as i, useLayoutEffect as a, useMemo as o, useState as s } from "react";
import c from "next/link";
import { useParams as l, usePathname as u, useRouter as d } from "next/navigation";
import { Fragment as f, jsx as p, jsxs as m } from "react/jsx-runtime";
import { ChevronDown as h } from "lucide-react";
import g from "../.intlayer/dictionary/faq.json";
import _ from "../.intlayer/dictionary/header.json";
import v from "../.intlayer/dictionary/open-positions.json";
import y from "../.intlayer/dictionary/careers-benefits.json";
import b from "../.intlayer/dictionary/settings.json";
import x from "../.intlayer/dictionary/footer.json";
import ee from "../.intlayer/dictionary/results-table.json";
import te from "../.intlayer/dictionary/contact-form.json";
import ne from "../.intlayer/dictionary/contact-header.json";
import re from "../.intlayer/dictionary/about-grid.json";
import ie from "../.intlayer/dictionary/mockBanner.json";
import ae from "../.intlayer/dictionary/theme-toggle.json";
import oe from "../.intlayer/dictionary/about-header.json";
import se from "../.intlayer/dictionary/faq-header1.json";
import ce from "../.intlayer/dictionary/careers.json";
import le from "../.intlayer/dictionary/blog-header.json";
import ue from "../.intlayer/dictionary/route.json";
import de from "../.intlayer/dictionary/faq-list.json";
import fe from "../.intlayer/dictionary/careers-header.json";
import pe from "../.intlayer/dictionary/pricing.json";
import me from "../.intlayer/dictionary/what-we-measure.json";
import he from "../.intlayer/dictionary/products.json";
import ge from "../.intlayer/dictionary/contact.json";
import _e from "../.intlayer/dictionary/blog-list.json";
import ve from "../.intlayer/dictionary/about.json";
import ye from "../.intlayer/dictionary/understanding-impact.json";
import be from "../.intlayer/dictionary/home.json";
import xe from "../.intlayer/dictionary/team.json";
import Se from "../.intlayer/dictionary/blog.json";
import Ce from "../.intlayer/dictionary/why-it-matters.json";
import we from "../.intlayer/dictionary/hero.json";
var Te = (e) => /^https?:\/\//.test(e ?? "");
function S(e, t) {
	return !e.startsWith("/") || e === `/${t}` || e.startsWith(`/${t}/`) ? e : `/${t}${e === "/" ? "" : e}`;
}
var C = ({ href: e, children: t, ...n }) => {
	let r = l().locale ?? "en";
	return e == null || typeof e != "string" || Te(e) ? p(c, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}) : p(c, {
		href: S(e, r),
		prefetch: !1,
		...n,
		children: t
	});
}, w = {
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
}, T = {
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
}, E = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, Ee = 50, D = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Set(), De = (e) => {
	O.has(e) || (O.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
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
function k(e, t, n) {
	let r = t ?? w?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = D.get(a);
	o || (o = /* @__PURE__ */ new Map(), D.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? ke(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Ee && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Ae = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), A = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, je = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = A(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, j = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var M = {
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
}, N = (e = M) => {
	let { locales: t } = w;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!j) for (let t = 0; t < (T.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(T.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, P = !1, F, Me = () => typeof window > "u" ? N(M) : (P ||= (F = N(M), !0), F), Ne = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (P = !1, !j && T.storage.cookies)) for (let n = 0; n < T.storage.cookies.length; n++) {
		let { name: r, attributes: i } = T.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: A(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, je(r, e, i));
			} catch {}
		}
	}
}, I = /* @__PURE__ */ new WeakMap(), Pe = 0, Fe = (e) => {
	if (!e) return "base";
	let t = I.get(e);
	if (t) return t;
	Pe += 1;
	let n = `p${Pe}`;
	return I.set(e, n), n;
}, Ie = 256, L = /* @__PURE__ */ new WeakMap(), Le = (e) => typeof e == "object" && !!e, Re = (e, t, n) => `${e}_${t}_${Fe(n)}`, ze = (e, t) => {
	if (!Le(e)) return { hit: !1 };
	let n = L.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, R = (e, t, n) => {
	if (!Le(e)) return n;
	let r = L.get(e);
	return r || (r = /* @__PURE__ */ new Map(), L.set(e, r)), r.size >= Ie && r.clear(), r.set(t, n), n;
}, Be = "translation", Ve = "enumeration", He = "plural", Ue = "condition", z = "insertion", We = "object", Ge = "array", Ke = "markdown", B = "html", qe = "gender", Je = "select", V = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), H = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, H);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => H(e, V(t, e, {
		type: Ge,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: We,
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
}, Ye = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Xe = (e, t) => e[Ye(e, t) ?? "fallback"], Ze = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), U = "\x1B[0m", Qe = "\x1B[34m", $e = "\x1B[31m", et = "\x1B[32m", tt = "\x1B[38;5;3m", nt = "\x1B[36m", rt = (e) => e, it = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = rt(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, at = (e, t) => (n, r) => it(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), W = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? U : n : U}` : e, ot = (e, t = tt, n = U) => [e].flat().map((e) => W(e, t, n)).join(", ");
W("✗", $e), W("✓", et), W("⏲", Qe);
var st = {
	faq: g,
	header: _,
	"open-positions": v,
	"careers-benefits": y,
	settings: b,
	footer: x,
	"results-table": ee,
	"contact-form": te,
	"contact-header": ne,
	"about-grid": re,
	mockBanner: ie,
	"theme-toggle": ae,
	"about-header": oe,
	"faq-header1": se,
	careers: ce,
	"blog-header": le,
	route: ue,
	"faq-list": de,
	"careers-header": fe,
	pricing: pe,
	"what-we-measure": me,
	products: he,
	contact: ge,
	"blog-list": _e,
	about: ve,
	"understanding-impact": ye,
	home: be,
	team: xe,
	blog: Se,
	"why-it-matters": Ce,
	hero: we
}, ct = () => st, lt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), ut = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : lt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : ut(e ? `${e}.${String(n)}` : String(n)) }), dt = /* @__PURE__ */ new Set(), ft = (e, t, n) => {
	let r = ct()[e];
	return r ? It(r, t, n) : (dt.has(e) || (at({ log: E })(typeof window > "u" ? `Dictionary ${ot(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), dt.add(e)), ut(e));
}, pt = (e, t, n) => e[k("PluralRules", n).select(t)] ?? e.other, mt = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, ht = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, gt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !ht(e) || !ht(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? gt(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, _t = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => gt(e, t));
}, G = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, vt = (e) => {
	if (typeof e == "string") return e;
	if (G(e)) return e.nodeType === "html" ? e[B] : e[Ke];
}, yt = (e, t) => {
	if (typeof e == "string") return t;
	if (G(e)) {
		let n = e.nodeType === "html" ? B : Ke;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, bt = (e, t, n, r, i) => {
	let a = yt(e, Ze(vt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, K = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, xt = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, St = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? K : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = _t(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: Be,
				key: e
			}]
		});
	}
}, Ct = K, wt = (e) => K, Tt = K, Et = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? K : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: z }], i = e[z], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || G(e),
			transform: (e, n, r) => {
				if (G(e)) return (i) => bt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Ze(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return kt(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Dt = [
	Ve,
	Ue,
	He,
	qe,
	Je
], Ot = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !Dt.includes(i)) return t;
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
		return !r && xt(i) ? i(n) : i;
	};
}, kt = (e, t) => typeof t == "function" && Dt.includes(e?.nodeType ?? "") ? (n) => Ot(e, t, n) : t, At = K, jt = K;
process.env.INTLAYER_OPTIMIZED_NESTING;
var Mt = (e) => K, Nt = K, Pt = (e, t = !0) => [
	St(e ?? w.defaultLocale, t ? w.defaultLocale : void 0),
	Ct,
	wt(e ?? w.defaultLocale),
	Tt,
	Et,
	Mt(e ?? w.defaultLocale),
	Nt,
	At,
	jt
].filter((e) => e !== K), Ft = (e, t, n = []) => H(e, {
	...t,
	plugins: n
}), q = /* @__PURE__ */ new WeakSet(), It = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = Re(r ?? w.defaultLocale, "", n), o = ze(e, a);
	if (o.hit) return o.content;
	let s = n ?? Pt(r), c = e, l = (e) => {
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
			return Ft(e.content, t, s);
		} finally {
			t.eager && q.delete(e);
		}
	};
	return c === null ? R(e, a, null) : Array.isArray(c) ? R(e, a, c.map(l)) : R(e, a, l(c));
}, Lt = ["en"], Rt = Me, zt = (e, t) => Ne(e, {
	...M,
	isCookieEnabled: t
}), Bt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Vt = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? w?.defaultLocale ?? "en",
	mode: e.mode ?? T?.mode ?? "prefix-no-default",
	locales: e.locales ?? w?.locales ?? Lt,
	rewrite: e.rewrite ?? T?.rewrite,
	domains: e.domains ?? T?.domains
}), Ht = (e, t) => !!e && (t ?? w.locales).includes(e), Ut = (e, t = w?.locales, n = w?.defaultLocale) => {
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
}, Wt = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = Vt(t);
	if (!n || !r) return n;
	let a = Ae(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return Ht(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (Ht(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, Gt = t({
	get locale() {
		return Rt() ?? w?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), Kt = ({ locale: e, defaultLocale: t, variant: r, children: a, setLocale: c, disableEditor: l, isCookieEnabled: u }) => {
	let { locales: d, defaultLocale: f } = w ?? {}, [m, h] = s(() => e ?? Rt() ?? t ?? f), [g, _] = s(e);
	e !== g && (_(e), e && e !== m && h(e)), i(() => {
		Bt();
	}, []);
	let v = n((e) => {
		if (m.toString() !== e.toString()) {
			if (!d?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			h(e), zt(e, u);
		}
	}, [
		m,
		d,
		u
	]), y = c ?? v, b = Ut(m), x = o(() => ({
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
	return p(Gt.Provider, {
		value: x,
		children: a
	});
}, qt = ({ children: e, ...t }) => m(Kt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), Jt = ({ locale: e, children: t, messages: n, timeZone: r, now: i, ...a }) => {
	n !== void 0 && at({ log: E })(`${W("NextIntlClientProvider", nt)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`);
	let o = u(), s = T?.mode ?? "prefix-no-default", c = e ?? (s === "prefix-all" || s === "prefix-no-default" ? Wt(o) : void 0);
	return p(qt, {
		locale: c,
		...a,
		children: t
	}, String(c));
}, Yt = (e, t, n = ".") => {
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
}, Xt = [
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
}, Zt = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? k("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? k("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : k("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return k("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Qt = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = J(t, r);
	return o === void 0 ? e : i ? Zt(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = J(t, r);
	return o === void 0 ? e : Zt(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = J(t, n);
	return r === void 0 ? e : String(r);
}), Y = (e, t) => e[t] ?? e.count ?? e.n, X = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Qt(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return X(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(X(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return X(r[z], t, n);
	if (r.nodeType === "html") return X(r[B], t, n);
	if (r.nodeType === "plural") {
		let e = r[He];
		return X(pt(e, Number(Y(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[Ve], i = Xt.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Xt.includes(t) || (o[t] = n);
		let s = Y(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = k("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Xe(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return X(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[Je], i = Y(t, typeof r.variable == "string" ? r.variable : "value");
		return X(mt(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[qe];
		return X(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, $t = (e, t = {}, n = "en") => {
	let r = X(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Z = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : o && t.push({
			tag: o,
			children: Z(s ?? "")
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, en = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, tn = (t, n) => t.map((t, r) => {
	if (typeof t == "string") return t;
	let i = tn(t.children, n), a = n[t.tag];
	return typeof a == "function" ? p(e, { children: a(i) }, r) : p(e, { children: i }, r);
}), Q = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = Q(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), nn = (e, t) => {
	let [n, ...r] = (t ?? "").split("."), i = r.join(".");
	return an(e, (t) => rn(e, n ?? "", i, t), (e) => t ? `${t}.${e}` : e);
}, rn = (e, t, n, r) => {
	let i = t, a = n ? `${n}.${r}` : r, o = ct();
	if (!i) {
		let [t, ...n] = r.split(".");
		if (i = t ?? r, a = n.join("."), !o[i]) for (let t of Object.keys(o)) try {
			let n = Yt(ft(t, e), r);
			if (n !== void 0) return n;
		} catch {}
	}
	try {
		return Yt(ft(i, e), a);
	} catch {
		return;
	}
}, an = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return $t(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = en(t), o = r(e, i);
			return o === void 0 ? n(e) : p(f, { children: tn(Z(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = en(t), o = r(e, i);
			return o === void 0 ? n(e) : Q(Z(o), a);
		}
	});
}, on = ((e) => {
	let { locale: t } = r(Gt) ?? {};
	return o(() => nn(t, e), [t, e]);
});
function sn() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function cn() {
	let e = on(), [t, n] = s("auto");
	i(() => {
		let e = sn();
		n(e), $(e);
	}, []), i(() => {
		if (t !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => $("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	}, [t]);
	function r() {
		let e = t === "light" ? "dark" : t === "dark" ? "auto" : "light";
		n(e), $(e), window.localStorage.setItem("theme", e);
	}
	let a = e(t === "auto" ? "theme-toggle.themeModeAutoSystemClick" : t === "light" ? "theme-toggle.themeModeLightClick" : "theme-toggle.themeModeDarkClick");
	return p("button", {
		type: "button",
		onClick: r,
		"aria-label": a,
		title: a,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: e(t === "auto" ? "theme-toggle.themeAuto" : t === "dark" ? "theme-toggle.themeDark" : "theme-toggle.themeLight")
	});
}
var ln = [
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
];
function un(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function dn() {
	let e = l().locale ?? "en", t = u(), n = d(), r = (r) => {
		let i = t.replace(`/${e}`, `/${r}`);
		n.push(i);
	};
	return p("div", {
		className: "flex items-center gap-2",
		children: p("select", {
			value: e,
			onChange: (e) => r(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: ln.map((e) => p("option", {
				value: e,
				children: un(e)
			}, e))
		})
	});
}
function fn(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), a(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
function pn() {
	let e = on();
	fn("Header");
	let [t, n] = s(!1), r = l(), i = u(), a = r.locale ?? "en", o = [
		{
			href: "/products",
			label: e("header.products")
		},
		{
			href: "/pricing",
			label: e("header.pricing")
		},
		{
			href: "/team",
			label: e("header.team")
		},
		{
			href: "/blog",
			label: e("header.blog")
		},
		{
			href: "/careers",
			label: e("header.careers")
		},
		{
			href: "/faq",
			label: e("header.faq")
		},
		{
			href: "/contact",
			label: e("footer.contact")
		},
		{
			href: "/settings",
			label: e("header.settings")
		}
	];
	return p("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: m("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [m("div", {
				className: "flex items-center gap-8",
				children: [p(C, {
					href: "/",
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}), m("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						p(C, {
							href: "/",
							className: `nav-link${((e) => i === S(e, a))("/") ? " is-active" : ""}`,
							children: e("header.home")
						}),
						p(C, {
							href: "/about",
							className: `nav-link${((e) => {
								let t = S(e, a);
								return i.startsWith(t) && (e !== "/" || i === t);
							})("/about") ? " is-active" : ""}`,
							children: e("footer.methodology")
						}),
						m("div", {
							className: "relative",
							children: [m("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								onClick: () => n(!t),
								children: [e("header.mockPages"), p(h, {
									size: 14,
									className: `transition-transform ${t ? "rotate-180" : ""}`
								})]
							}), t && p("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								children: p("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: o.map((e) => p(C, {
										href: e.href,
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => n(!1),
										children: e.label
									}, e.href))
								})
							})]
						})
					]
				})]
			}), m("div", {
				className: "flex items-center gap-4",
				children: [
					m("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [p("span", {
							className: "sr-only",
							children: e("header.goToGithub")
						}), p("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: p("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					p(dn, {}),
					p(cn, {})
				]
			})]
		})
	});
}
function mn() {
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
function hn(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function gn({ children: e, locale: t }) {
	let [n] = s(() => typeof performance < "u" ? performance.now() : 0);
	return a(() => {
		hn("AppRoot", n);
	}, [n]), i(() => {
		document.documentElement.lang = t;
	}, [t]), i(() => {
		mn();
	}, []), p(Jt, {
		locale: t,
		timeZone: "UTC",
		children: e
	});
}
var _n = "en";
function vn({ children: e }) {
	return p(gn, {
		locale: _n,
		children: e
	});
}
function yn() {
	return p(vn, { children: p(pn, {}) });
}
export { yn as default };
