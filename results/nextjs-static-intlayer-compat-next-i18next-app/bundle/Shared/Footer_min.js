import * as e from "react";
import { createContext as t, useCallback as n, useContext as r, useEffect as i, useLayoutEffect as a, useMemo as o, useRef as s, useState as c } from "react";
import l from "next/link";
import { useParams as u } from "next/navigation";
import { jsxDEV as d } from "react/jsx-dev-runtime";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
var m = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-i18next-app/components/Link.tsx", h = (e) => /^https?:\/\//.test(e ?? "");
function ee(e, t) {
	return !e.startsWith("/") || e === `/${t}` || e.startsWith(`/${t}/`) ? e : `/${t}${e === "/" ? "" : e}`;
}
var g = ({ href: e, children: t, ...n }) => {
	let r = u().locale ?? "en";
	return e == null || typeof e != "string" ? d(l, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}, void 0, !1, {
		fileName: m,
		lineNumber: 23,
		columnNumber: 7
	}, void 0) : h(e) ? d(l, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}, void 0, !1, {
		fileName: m,
		lineNumber: 30,
		columnNumber: 7
	}, void 0) : d(l, {
		href: ee(e, r),
		prefetch: !1,
		...n,
		children: t
	}, void 0, !1, {
		fileName: m,
		lineNumber: 36,
		columnNumber: 5
	}, void 0);
}, _ = {
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
}, v = {
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
}, y = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, b = "\x1B[0m", te = "\x1B[34m", ne = "\x1B[31m", re = "\x1B[32m", ie = "\x1B[35m", ae = "\x1B[38;5;3m", x = "\x1B[36m", oe = (e) => e, se = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = oe(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, S = (e, t) => (n, r) => se(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), C = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? b : n : b}` : e, ce = (e, t = ae, n = b) => [e].flat().map((e) => C(e, t, n)).join(", ");
C("✗", ne), C("✓", re), C("⏲", te);
var w = /* @__PURE__ */ new WeakMap(), le = 0, ue = (e) => {
	if (!e) return "base";
	let t = w.get(e);
	if (t) return t;
	le += 1;
	let n = `p${le}`;
	return w.set(e, n), n;
}, de = 256, T = /* @__PURE__ */ new WeakMap(), E = (e) => typeof e == "object" && !!e, fe = (e, t, n) => `${e}_${t}_${ue(n)}`, pe = (e, t) => {
	if (!E(e)) return { hit: !1 };
	let n = T.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, D = (e, t, n) => {
	if (!E(e)) return n;
	let r = T.get(e);
	return r || (r = /* @__PURE__ */ new Map(), T.set(e, r)), r.size >= de && r.clear(), r.set(t, n), n;
}, me = "translation", he = "enumeration", ge = "plural", _e = "insertion", ve = "object", ye = "array", be = "html", xe = "gender", Se = "select", O = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => O(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => O(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ye,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ve,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = O(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = O(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, Ce = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, we = (e, t) => e[Ce(e, t) ?? "fallback"], k = "default", Te = /[^A-Za-z0-9._&=-]/g, Ee = /[^A-Za-z0-9._-]/g, De = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, A = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, De);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, Oe = (e) => e === void 0 ? k : typeof e == "string" ? A(e, Te) : Object.keys(e).sort().map((t) => `${A(t, Ee)}=${A(String(e[t]), Ee)}`).join("&"), ke = (e) => Array.isArray(e) ? e.length === 0 ? [k] : e.map(Oe) : [Oe(e)], Ae = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? k : e[0] ?? "default";
}, je = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Me = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Ne = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Pe = (e, t) => {
	if (!Me(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? k : Ae(ke(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => je(e, n, t, s)).map((t) => Ne(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Fe = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Ie = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? ke(n).join(",") : String(n)}`;
}).join("|") : "", Le = () => ({}), Re = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), ze = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Re.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : ze(e ? `${e}.${String(n)}` : String(n)) }), j = /* @__PURE__ */ new Set(), M = (e, t, n) => {
	let r = Le()[e];
	return r ? rt(r, t, n) : (j.has(e) || (S({ log: y })(typeof window > "u" ? `Dictionary ${ce(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), j.add(e)), ze(e));
}, Be = 50, N = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Set(), Ve = (e) => {
	P.has(e) || (P.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, He = {
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
}, Ue = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Ve(e), He[e]);
};
function F(e, t, n) {
	let r = t ?? _?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = N.get(a);
	o || (o = /* @__PURE__ */ new Map(), N.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Ue(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Be && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var We = (e, t, n) => e[F("PluralRules", n).select(t)] ?? e.other, Ge = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, I = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, L = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (I(e) && I(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : L(e[r], t[r]));
		return n;
	}
	return e;
}, Ke = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => L(e, t));
}, R = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, qe = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? R : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: me,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return Ke(o, e, t);
	}
}, Je = R, Ye = R, Xe = R, Ze = R, Qe = R, $e = (e) => R, et = R, tt = (e, t = !0) => [
	qe(e ?? _.defaultLocale, t ? _.defaultLocale : void 0),
	Je,
	Ye,
	Xe,
	$e(e ?? _.defaultLocale),
	et,
	Ze,
	Qe
], nt = (e, t, n = []) => O(e, {
	...t,
	plugins: n
}), rt = (e, t, n) => {
	let { locale: r, selector: i } = Fe(t), a = fe(r ?? _.defaultLocale, Ie(i), n), o = pe(e, a);
	if (o.hit) return o.content;
	let s = n ?? tt(r), c = Pe(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return nt(e.content, t, s);
	};
	return c === null ? D(e, a, null) : Array.isArray(c) ? D(e, a, c.map(l)) : D(e, a, l(c));
}, z = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, it = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = z(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, B = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var V = {
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
}, at = (e = V) => {
	let { locales: t } = _;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!B) for (let t = 0; t < (v.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(v.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ot = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !B && v.storage.cookies) for (let n = 0; n < v.storage.cookies.length; n++) {
		let { name: r, attributes: i } = v.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: z(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, it(r, e, i));
			} catch {}
		}
	}
}, st = at(V), ct = (e, t) => ot(e, {
	...V,
	isCookieEnabled: t
}), lt = () => {
	let { locale: e } = r(H) ?? {}, t = s(null);
	i(() => {}, []), i(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, ut = ({ children: e }) => (lt(), e), dt = () => {
	let { locale: e } = r(H) ?? {}, t = s(null);
	i(() => {}, []), i(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, ft = ({ children: e }) => (dt(), e), pt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, mt = (e, t = _?.locales, n = _?.defaultLocale) => {
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
}, ht = [
	"Arab",
	"Hebr",
	"Thaa",
	"Syrc",
	"Mand",
	"Adlm",
	"Rohg",
	"Nkoo"
], gt = (e) => {
	if (!e) return "ltr";
	try {
		let t = new Intl.Locale(e);
		if ("getTextInfo" in t) return t.getTextInfo().direction;
		if ("textInfo" in t) return t.textInfo.direction;
		let n = t.maximize();
		return ht.includes(n.script ?? "") ? "rtl" : "ltr";
	} catch {
		return "ltr";
	}
}, H = t({
	locale: st ?? _?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), _t = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: a, disableEditor: o, isCookieEnabled: s }) => {
	let { locales: l, defaultLocale: u } = _ ?? {}, [d, p] = c(e ?? st ?? t ?? u);
	i(() => {
		e && e !== d && p(e);
	}, [e]), i(() => {
		pt();
	}, []);
	let m = a ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!l?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), ct(e, s);
		}
	}), h = mt(d);
	return f(H.Provider, {
		value: {
			locale: h,
			setLocale: m,
			variant: n,
			disableEditor: o
		},
		children: r
	});
}, vt = ({ children: e, ...t }) => p(_t, {
	...t,
	children: [
		f(ut, {}),
		f(ft, {}),
		e
	]
}), { defaultLocale: yt, locales: U } = _ ?? {}, bt = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: i, setLocale: a, isCookieEnabled: o } = r(H) ?? {};
	return {
		locale: i,
		defaultLocale: yt,
		availableLocales: U,
		setLocale: n((n) => {
			if (!U?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			a(n), ct(n, e ?? o ?? !0), t?.(n);
		}, [
			U,
			t,
			a,
			e
		])
	};
}, xt = (e, t, n = ".") => {
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
}, St = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], W = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, Ct = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? F("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? F("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : F("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return F("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, wt = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = W(t, r);
	return o === void 0 ? e : i ? Ct(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = W(t, r);
	return o === void 0 ? e : Ct(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = W(t, n);
	return r === void 0 ? e : String(r);
}), G = (e, t) => e[t] ?? e.count ?? e.n, K = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return wt(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return K(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(K(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return K(r[_e], t, n);
	if (r.nodeType === "html") return K(r[be], t, n);
	if (r.nodeType === "plural") {
		let e = r[ge];
		return K(We(e, Number(G(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[he], i = St.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) St.includes(t) || (o[t] = n);
		let s = G(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = F("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? we(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return K(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[Se], i = G(t, typeof r.variable == "string" ? r.variable : "value");
		return K(Ge(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[xe];
		return K(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, q = (e, t = {}, n = "en") => {
	let r = K(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Tt = /* @__PURE__ */ new Set([
	"defaultValue",
	"ns",
	"lng",
	"lngs",
	"fallbackLng",
	"returnObjects",
	"returnDetails",
	"keySeparator",
	"nsSeparator",
	"ordinal",
	"postProcess",
	"postProcessPassResolved",
	"interpolation",
	"replace",
	"joinArrays",
	"nsMode",
	"keyPrefix"
]), Et = 5, J = "index", Dt = (e, t) => {
	if (e in Le()) return M(e, t);
}, Ot = (e, t, n, r, i) => {
	let a = [], o = n === void 0 ? void 0 : new Intl.PluralRules(t, { type: i ? "ordinal" : "cardinal" }).select(n);
	return r && (o && (i && a.push(`${e}_${r}_ordinal_${o}`), a.push(`${e}_${r}_${o}`), n !== 1 && a.push(`${e}_${r}_plural`)), a.push(`${e}_${r}`)), o && (i && a.push(`${e}_ordinal_${o}`), a.push(`${e}_${o}`), n !== 1 && a.push(`${e}_plural`)), a.push(e), a;
}, Y = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.replace;
	if (t) {
		let n = { ...t };
		return e.count !== void 0 && (n.count ??= e.count), e.context !== void 0 && (n.context ??= e.context), n;
	}
	let n = {};
	for (let [t, r] of Object.entries(e)) Tt.has(t) || (n[t] = r);
	return n;
}, X = ({ locale: e, namespace: t, key: n, options: r, keySeparator: i = ".", nsSeparator: a = ":", depth: o = 0, dictionaryContent: s }) => {
	let c = t, l = n;
	if (a !== !1 && n.includes(a)) {
		let e = n.indexOf(a);
		c = n.slice(0, e), l = n.slice(e + a.length);
	} else r?.ns && (c = Array.isArray(r.ns) ? r.ns[0] : r.ns);
	let u = typeof r?.count == "number" ? r.count : void 0, d = r?.context === void 0 ? void 0 : String(r.context), f = r?.ordinal === !0, p = r?.lng ?? e, m;
	if (s !== void 0 && c === t && r?.lng === void 0) m = s;
	else if (m = Dt(c, p), m === void 0 && c === t && c !== J && (m = Dt(J, p)), m === void 0) return;
	let h;
	for (let t of Ot(l, r?.lng ?? e, u, d, f)) {
		let e = xt(m, t, i);
		if (e != null) {
			h = e;
			break;
		}
	}
	if (h == null) return;
	if (r?.returnObjects && typeof h == "object" && h) return h;
	let ee = Y(r), g = q(h, ee, r?.lng ?? e);
	return o < Et && g.includes("$t(") && (g = g.replace(/\$t\(\s*([^),]+?)\s*(?:,[^)]*)?\)/g, (n, l) => {
		let u = X({
			locale: e,
			namespace: c,
			key: l.trim(),
			options: r,
			keySeparator: i,
			nsSeparator: a,
			depth: o + 1,
			dictionaryContent: c === t ? s : void 0
		});
		return typeof u == "string" ? u : n;
	})), g;
}, kt = (e) => {
	S({ log: y })(`${C(e, x)}: the ${C("`resources`", x)} option is ignored when using ${C("@intlayer/i18next", ie)} — translations are served from the compiled intlayer dictionaries instead. Remove the resource imports and the ${C("`resources`", x)} option to reduce your bundle size.`);
}, Z = (e = {}) => {
	e.resources !== void 0 && kt("createInstance");
	let t = _, n = e.lng ?? t?.defaultLocale ?? "en", r = e.defaultNS ?? (Array.isArray(e.ns) ? e.ns[0] : e.ns) ?? "translation", i = /* @__PURE__ */ new Map(), a = !1, o = (e, ...t) => {
		i.get(e)?.forEach((e) => {
			e(...t);
		});
	}, s = () => ({
		keySeparator: e.keySeparator ?? ".",
		nsSeparator: e.nsSeparator ?? ":"
	}), c = (e, t, n, r) => {
		let i = typeof r == "string" ? { defaultValue: r } : r, a = X({
			locale: e,
			namespace: t,
			key: n,
			options: i,
			...s()
		});
		if (a !== void 0) return a;
		let o = i?.defaultValue;
		return typeof o == "string" ? q(o, Y(i), e) : n;
	}, l = {
		get language() {
			return n;
		},
		get languages() {
			return t?.locales?.map(String) ?? [n];
		},
		get resolvedLanguage() {
			return n;
		},
		get isInitialized() {
			return a;
		},
		isInitializing: !1,
		initializedStoreOnce: !1,
		initializedLanguageOnce: !1,
		options: e,
		modules: {},
		services: {},
		store: {},
		format: ((e) => String(e)),
		async init(e, t) {
			let i = typeof e == "function" ? {} : e ?? {};
			i.resources !== void 0 && kt("i18next.init"), i.lng && (n = i.lng), i.defaultNS ? r = i.defaultNS : i.ns && (r = Array.isArray(i.ns) ? i.ns[0] : i.ns), a = !0, o("initialized", i);
			let s = l.t.bind(l);
			return (typeof e == "function" ? e : t)?.(null, s), s;
		},
		t(e, t, i) {
			let a = typeof t == "string" ? {
				defaultValue: t,
				...i ?? {}
			} : t, o = Array.isArray(e) ? e : [String(e)];
			for (let e of o) {
				let t = X({
					locale: n,
					namespace: r,
					key: e,
					options: a,
					...s()
				});
				if (t !== void 0) return t;
			}
			let c = a?.defaultValue;
			return typeof c == "string" ? q(c, Y(a), n) : c ?? (Array.isArray(e) ? e[e.length - 1] : e);
		},
		async changeLanguage(e, t) {
			let r = n;
			e && (n = e), o("languageChanged", n, r);
			let i = l.t.bind(l);
			return t?.(null, i), i;
		},
		exists(e, t) {
			return X({
				locale: n,
				namespace: r,
				key: e,
				options: t,
				...s()
			}) !== void 0;
		},
		getFixedT: ((e, t, i) => {
			let a = Array.isArray(e) ? e[0] ?? n : e ?? n, o = t ?? r;
			return (e, t) => {
				let n = i ? `${i}.${e}` : e;
				return c(a, o, n, t);
			};
		}),
		use(e) {
			return e?.init?.(l), l;
		},
		on(e, t) {
			return i.has(e) || i.set(e, /* @__PURE__ */ new Set()), i.get(e).add(t), l;
		},
		once(e, t) {
			let n = (...r) => {
				t(...r), l.off(e, n);
			};
			return l.on(e, n), l;
		},
		off(e, t) {
			t ? i.get(e)?.delete(t) : i.delete(e);
		},
		emit(e, ...t) {
			o(e, ...t);
		},
		createInstance(t, n) {
			return Z({
				...e,
				...t
			});
		},
		cloneInstance(t, n) {
			return Z({
				...e,
				...t
			});
		},
		dir(e) {
			return [
				"ar",
				"he",
				"fa",
				"ur",
				"ps",
				"yi",
				"dv",
				"ug"
			].some((t) => (e ?? n).startsWith(t)) ? "rtl" : "ltr";
		},
		setDefaultNamespace(e) {
			r = e;
		},
		hasLoadedNamespace(e) {
			try {
				return M(Array.isArray(e) ? e[0] : e, n), !0;
			} catch {
				return !1;
			}
		},
		async loadNamespaces(e) {},
		async loadLanguages(e) {},
		loadResources(e) {},
		async reloadResources() {},
		getDataByLanguage(e) {},
		getResource(e, t, n) {
			try {
				return xt(M(t, e), n);
			} catch {
				return;
			}
		},
		addResource: () => l,
		addResources: () => l,
		addResourceBundle: () => l,
		hasResourceBundle: () => !1,
		getResourceBundle: () => void 0,
		removeResourceBundle: () => l,
		toJSON() {
			return {
				options: e,
				store: {},
				language: n,
				languages: t?.locales?.map(String) ?? [n],
				resolvedLanguage: n
			};
		}
	};
	return l;
}, Q = Z();
Q.dir.bind(Q), Q.init.bind(Q), Q.loadResources.bind(Q), Q.reloadResources.bind(Q), Q.use.bind(Q), Q.changeLanguage.bind(Q), Q.getFixedT.bind(Q), Q.t.bind(Q), Q.exists.bind(Q), Q.setDefaultNamespace.bind(Q), Q.hasLoadedNamespace.bind(Q), Q.loadNamespaces.bind(Q), Q.loadLanguages.bind(Q);
var At = ({ locale: e, setLocale: t, availableLocales: n, namespace: r, keyPrefix: i, dictionaryContent: a }) => {
	let o = (t, n) => X({
		locale: e,
		namespace: r,
		key: i ? `${i}.${t}` : t,
		options: n,
		dictionaryContent: a
	}), s = (t, n, r) => {
		let i = typeof n == "string" ? {
			defaultValue: n,
			...r
		} : n ?? {}, a = Array.isArray(t) ? t : [t];
		for (let e of a) {
			let t = o(e, i);
			if (t !== void 0) return t;
		}
		let s = i.defaultValue;
		return typeof s == "string" ? q(s, Y(i), e) : a[a.length - 1];
	};
	return {
		translate: s,
		i18n: {
			language: e,
			languages: n ?? [],
			resolvedLanguage: e,
			isInitialized: !0,
			changeLanguage: async (e) => {
				t(e);
			},
			dir: (t) => gt(t ?? e) === "rtl" ? "rtl" : "ltr",
			exists: (t, n) => X({
				locale: e,
				namespace: r,
				key: t,
				options: n,
				dictionaryContent: a
			}) !== void 0,
			t: s,
			getFixedT: (t, n) => (i, o) => {
				let s = X({
					locale: t ?? e,
					namespace: n ?? r,
					key: i,
					options: o,
					dictionaryContent: (t ?? e) === e && (n ?? r) === r ? a : void 0
				});
				return s === void 0 ? i : s;
			}
		}
	};
}, jt = (e, t) => {
	let n = Array.isArray(e) ? e[0] ?? "translation" : e ?? "translation", { locale: r, setLocale: i, availableLocales: a } = bt(), s = t?.keyPrefix, { translate: c, i18n: l } = o(() => At({
		locale: r,
		setLocale: i,
		availableLocales: a ?? [],
		namespace: n,
		keyPrefix: s
	}), [
		r,
		i,
		a,
		n,
		s
	]);
	return {
		t: c,
		i18n: l,
		ready: !0
	};
};
e.createContext({ i18n: null });
var Mt = {
	type: "3rdParty",
	init: (e) => {}
}, $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-i18next-app/components/Footer.tsx";
function Nt() {
	let { t: e } = jt(), t = [
		{
			label: e("shared.footer.github"),
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: e("shared.footer.methodology"),
			href: "/about",
			isInternal: !0
		},
		{
			label: e("shared.footer.contributing"),
			href: "/contact",
			isInternal: !0
		}
	];
	return d("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: d("div", {
			className: "container py-8",
			children: [d("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					d("div", { children: [d("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "i18n Benchmark"
					}, void 0, !1, {
						fileName: $,
						lineNumber: 32,
						columnNumber: 13
					}, this), d("p", {
						className: "text-sm text-muted-foreground",
						children: e("shared.footer.anOpenSourceTestApplication")
					}, void 0, !1, {
						fileName: $,
						lineNumber: 35,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: $,
						lineNumber: 31,
						columnNumber: 11
					}, this),
					d("div", { children: [d("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e("shared.footer.resources")
					}, void 0, !1, {
						fileName: $,
						lineNumber: 40,
						columnNumber: 13
					}, this), d("ul", {
						className: "space-y-1",
						children: t.map((e) => d("li", { children: e.isInternal ? d(g, {
							href: e.href,
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}, void 0, !1, {
							fileName: $,
							lineNumber: 47,
							columnNumber: 21
						}, this) : d("a", {
							href: e.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}, void 0, !1, {
							fileName: $,
							lineNumber: 54,
							columnNumber: 21
						}, this) }, e.label, !1, {
							fileName: $,
							lineNumber: 45,
							columnNumber: 17
						}, this))
					}, void 0, !1, {
						fileName: $,
						lineNumber: 43,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: $,
						lineNumber: 39,
						columnNumber: 11
					}, this),
					d("div", { children: [d("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e("shared.footer.contact")
					}, void 0, !1, {
						fileName: $,
						lineNumber: 68,
						columnNumber: 13
					}, this), d("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					}, void 0, !1, {
						fileName: $,
						lineNumber: 71,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: $,
						lineNumber: 67,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 30,
				columnNumber: 9
			}, this), d("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: e("shared.footer.builtWith")
			}, void 0, !1, {
				fileName: $,
				lineNumber: 76,
				columnNumber: 9
			}, this)]
		}, void 0, !0, {
			fileName: $,
			lineNumber: 29,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: $,
		lineNumber: 28,
		columnNumber: 5
	}, this);
}
var Pt = (e) => f(vt, { ...e });
function Ft() {
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
function It(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
Q.use(Mt).init({
	lng: "en",
	fallbackLng: "en",
	interpolation: { escapeValue: !1 },
	react: { useSuspense: !1 },
	keySeparator: !1,
	nsSeparator: !1
});
var Lt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-i18next-app/components/AppProviders.tsx";
function Rt({ children: e }) {
	let t = u().locale ?? "en", [n] = c(() => typeof performance < "u" ? performance.now() : 0);
	return a(() => {
		It("AppRoot", n);
	}, [n]), i(() => {
		document.documentElement.lang = t;
	}, [t]), i(() => {
		Ft();
	}, []), d(Pt, {
		locale: t,
		children: e
	}, void 0, !1, {
		fileName: Lt,
		lineNumber: 37,
		columnNumber: 7
	}, this);
}
var zt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-i18next-app/scripts/Wrapper.tsx";
function Bt({ children: e }) {
	return d(Rt, { children: e }, void 0, !1, {
		fileName: zt,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var Vt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-i18next-app/components/Footer.wrapper.tsx";
function Ht() {
	return d(Bt, { children: d(Nt, {}, void 0, !1, {
		fileName: Vt,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: Vt,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Ht as default };
