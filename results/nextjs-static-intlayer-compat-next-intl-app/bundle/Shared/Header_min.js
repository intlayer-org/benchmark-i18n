import { Fragment as e, createContext as t, useContext as n, useEffect as r, useLayoutEffect as i, useMemo as a, useRef as o, useState as s } from "react";
import c from "next/link";
import { useParams as l, usePathname as u, useRouter as d } from "next/navigation";
import { jsxDEV as f } from "react/jsx-dev-runtime";
import { ChevronDown as ee } from "lucide-react";
import { Fragment as te, jsx as p, jsxs as ne } from "react/jsx-runtime";
var m = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-intl-app/components/Link.tsx", re = (e) => /^https?:\/\//.test(e ?? "");
function h(e, t) {
	return !e.startsWith("/") || e === `/${t}` || e.startsWith(`/${t}/`) ? e : `/${t}${e === "/" ? "" : e}`;
}
var g = ({ href: e, children: t, ...n }) => {
	let r = l().locale ?? "en";
	return e == null || typeof e != "string" ? f(c, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}, void 0, !1, {
		fileName: m,
		lineNumber: 23,
		columnNumber: 7
	}, void 0) : re(e) ? f(c, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}, void 0, !1, {
		fileName: m,
		lineNumber: 30,
		columnNumber: 7
	}, void 0) : f(c, {
		href: h(e, r),
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
}, b = /* @__PURE__ */ new WeakMap(), ie = 0, ae = (e) => {
	if (!e) return "base";
	let t = b.get(e);
	if (t) return t;
	ie += 1;
	let n = `p${ie}`;
	return b.set(e, n), n;
}, oe = 256, x = /* @__PURE__ */ new WeakMap(), se = (e) => typeof e == "object" && !!e, ce = (e, t, n) => `${e}_${t}_${ae(n)}`, le = (e, t) => {
	if (!se(e)) return { hit: !1 };
	let n = x.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, S = (e, t, n) => {
	if (!se(e)) return n;
	let r = x.get(e);
	return r || (r = /* @__PURE__ */ new Map(), x.set(e, r)), r.size >= oe && r.clear(), r.set(t, n), n;
}, ue = "translation", de = "enumeration", fe = "plural", C = "insertion", pe = "object", me = "array", w = "markdown", T = "html", he = "gender", ge = "select", E = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => E(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => E(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: me,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: pe,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = E(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = E(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, _e = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, ve = (e, t) => e[_e(e, t) ?? "fallback"], D = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), O = "default", ye = /[^A-Za-z0-9._&=-]/g, k = /[^A-Za-z0-9._-]/g, be = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, A = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, be);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, xe = (e) => e === void 0 ? O : typeof e == "string" ? A(e, ye) : Object.keys(e).sort().map((t) => `${A(t, k)}=${A(String(e[t]), k)}`).join("&"), Se = (e) => Array.isArray(e) ? e.length === 0 ? [O] : e.map(xe) : [xe(e)], Ce = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? O : e[0] ?? "default";
}, we = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Te = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Ee = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, De = (e, t) => {
	if (!Te(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? O : Ce(Se(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => we(e, n, t, s)).map((t) => Ee(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Oe = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, ke = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? Se(n).join(",") : String(n)}`;
}).join("|") : "", j = "\x1B[0m", Ae = "\x1B[34m", je = "\x1B[31m", Me = "\x1B[32m", Ne = "\x1B[38;5;3m", Pe = "\x1B[36m", Fe = (e) => e, Ie = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Fe(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Le = (e, t) => (n, r) => Ie(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), M = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? j : n : j}` : e, Re = (e, t = Ne, n = j) => [e].flat().map((e) => M(e, t, n)).join(", ");
M("✗", je), M("✓", Me), M("⏲", Ae);
var ze = () => ({}), Be = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Ve = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Be.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Ve(e ? `${e}.${String(n)}` : String(n)) }), N = /* @__PURE__ */ new Set(), P = (e, t, n) => {
	let r = ze()[e];
	return r ? ct(r, t, n) : (N.has(e) || (Le({ log: y })(typeof window > "u" ? `Dictionary ${Re(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), N.add(e)), Ve(e));
}, He = 50, F = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Set(), Ue = (e) => {
	I.has(e) || (I.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, We = {
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
}, Ge = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Ue(e), We[e]);
};
function L(e, t, n) {
	let r = t ?? _?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = F.get(a);
	o || (o = /* @__PURE__ */ new Map(), F.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Ge(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > He && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Ke = (e, t, n) => e[L("PluralRules", n).select(t)] ?? e.other, qe = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, R = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, z = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (R(e) && R(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : z(e[r], t[r]));
		return n;
	}
	return e;
}, Je = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => z(e, t));
}, B = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ye = (e) => {
	if (typeof e == "string") return e;
	if (B(e)) return e.nodeType === "html" ? e[T] : e[w];
}, Xe = (e, t) => {
	if (typeof e == "string") return t;
	if (B(e)) {
		let n = e.nodeType === "html" ? T : w;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Ze = (e, t, n, r, i) => {
	let a = Xe(e, D(Ye(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, V = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Qe = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? V : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ue,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return Je(o, e, t);
	}
}, $e = V, et = V, tt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? V : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: C }], i = e[C], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || B(e),
			transform: (e, n, r) => {
				if (B(e)) return (i) => Ze(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = D(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
	}
}, nt = V, rt = V, it = (e) => V, at = V, ot = (e, t = !0) => [
	Qe(e ?? _.defaultLocale, t ? _.defaultLocale : void 0),
	$e,
	et,
	tt,
	it(e ?? _.defaultLocale),
	at,
	nt,
	rt
], st = (e, t, n = []) => E(e, {
	...t,
	plugins: n
}), ct = (e, t, n) => {
	let { locale: r, selector: i } = Oe(t), a = ce(r ?? _.defaultLocale, ke(i), n), o = le(e, a);
	if (o.hit) return o.content;
	let s = n ?? ot(r), c = De(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return st(e.content, t, s);
	};
	return c === null ? S(e, a, null) : Array.isArray(c) ? S(e, a, c.map(l)) : S(e, a, l(c));
}, lt = ["en"], ut = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), H = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, dt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = H(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, U = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var W = {
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
}, ft = (e = W) => {
	let { locales: t } = _;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!U) for (let t = 0; t < (v.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(v.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, pt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !U && v.storage.cookies) for (let n = 0; n < v.storage.cookies.length; n++) {
		let { name: r, attributes: i } = v.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: H(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, dt(r, e, i));
			} catch {}
		}
	}
}, G = ft(W), mt = (e, t) => pt(e, {
	...W,
	isCookieEnabled: t
}), ht = () => {
	let { locale: e } = n(K) ?? {}, t = o(null);
	r(() => {}, []), r(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, gt = ({ children: e }) => (ht(), e), _t = () => {
	let { locale: e } = n(K) ?? {}, t = o(null);
	r(() => {}, []), r(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, vt = ({ children: e }) => (_t(), e), yt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, bt = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? _?.defaultLocale ?? "en",
	mode: e.mode ?? v?.mode ?? "prefix-no-default",
	locales: e.locales ?? _?.locales ?? lt,
	rewrite: e.rewrite ?? v?.rewrite,
	domains: e.domains ?? v?.domains
}), xt = (e, t) => !!e && (t ?? _.locales).includes(e), St = (e, t = _?.locales, n = _?.defaultLocale) => {
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
}, Ct = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = bt(t);
	if (!n || !r) return n;
	let a = ut(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return xt(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (xt(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, K = t({
	locale: G ?? _?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), wt = ({ locale: e, defaultLocale: t, variant: n, children: i, setLocale: a, disableEditor: o, isCookieEnabled: c }) => {
	let { locales: l, defaultLocale: u } = _ ?? {}, [d, f] = s(e ?? G ?? t ?? u);
	r(() => {
		e && e !== d && f(e);
	}, [e]), r(() => {
		yt();
	}, []);
	let ee = a ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!l?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			f(e), mt(e, c);
		}
	}), te = St(d);
	return p(K.Provider, {
		value: {
			locale: te,
			setLocale: ee,
			variant: n,
			disableEditor: o
		},
		children: i
	});
}, Tt = ({ children: e, ...t }) => ne(wt, {
	...t,
	children: [
		p(gt, {}),
		p(vt, {}),
		e
	]
}), Et = ({ locale: e, children: t, messages: n, timeZone: r, now: i, ...a }) => {
	n !== void 0 && Le({ log: y })(`${M("NextIntlClientProvider", Pe)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`);
	let o = u(), s = v?.mode ?? "prefix-no-default", c = e ?? (s === "prefix-all" || s === "prefix-no-default" ? Ct(o) : void 0);
	return p(Tt, {
		locale: c,
		...a,
		children: t
	}, String(c));
}, Dt = (e, t, n = ".") => {
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
}, Ot = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], q = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, kt = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? L("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? L("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : L("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return L("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, At = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = q(t, r);
	return o === void 0 ? e : i ? kt(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = q(t, r);
	return o === void 0 ? e : kt(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = q(t, n);
	return r === void 0 ? e : String(r);
}), J = (e, t) => e[t] ?? e.count ?? e.n, Y = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return At(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return Y(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(Y(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return Y(r[C], t, n);
	if (r.nodeType === "html") return Y(r[T], t, n);
	if (r.nodeType === "plural") {
		let e = r[fe];
		return Y(Ke(e, Number(J(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[de], i = Ot.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Ot.includes(t) || (o[t] = n);
		let s = J(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = L("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? ve(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return Y(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[ge], i = J(t, typeof r.variable == "string" ? r.variable : "value");
		return Y(qe(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[he];
		return Y(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, jt = (e, t = {}, n = "en") => {
	let r = Y(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, X = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : t.push({
			tag: o,
			children: X(s)
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, Mt = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, Nt = (t, n) => t.map((t, r) => {
	if (typeof t == "string") return t;
	let i = Nt(t.children, n), a = n[t.tag];
	return typeof a == "function" ? p(e, { children: a(i) }, r) : p(e, { children: i }, r);
}), Pt = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = Pt(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), Ft = (e, t) => {
	let [n, ...r] = (t ?? "").split("."), i = r.join(".");
	return Lt(e, (t) => It(e, n ?? "", i, t), (e) => t ? `${t}.${e}` : e);
}, It = (e, t, n, r) => {
	let i = t, a = n ? `${n}.${r}` : r, o = ze();
	if (!i) {
		let [t, ...n] = r.split(".");
		if (i = t ?? r, a = n.join("."), !o[i]) for (let t of Object.keys(o)) try {
			let n = Dt(P(t, e), r);
			if (n !== void 0) return n;
		} catch {}
	}
	try {
		return Dt(P(i, e), a);
	} catch {
		return;
	}
}, Lt = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return jt(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = Mt(t), o = r(e, i);
			return o === void 0 ? n(e) : p(te, { children: Nt(X(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = Mt(t), o = r(e, i);
			return o === void 0 ? n(e) : Pt(X(o), a);
		}
	});
}, Rt = ((e) => {
	let { locale: t } = n(K) ?? {};
	return a(() => Ft(t, e), [t, e]);
}), zt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-intl-app/components/ThemeToggle.tsx";
function Bt() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function Z(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Vt() {
	let e = Rt(), [t, n] = s("auto");
	r(() => {
		let e = Bt();
		n(e), Z(e);
	}, []), r(() => {
		if (t !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => Z("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	}, [t]);
	function i() {
		let e = t === "light" ? "dark" : t === "dark" ? "auto" : "light";
		n(e), Z(e), window.localStorage.setItem("theme", e);
	}
	let a = e(t === "auto" ? "theme-toggle.themeModeAutoSystemClick" : t === "light" ? "theme-toggle.themeModeLightClick" : "theme-toggle.themeModeDarkClick");
	return f("button", {
		type: "button",
		onClick: i,
		"aria-label": a,
		title: a,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: e(t === "auto" ? "theme-toggle.themeAuto" : t === "dark" ? "theme-toggle.themeDark" : "theme-toggle.themeLight")
	}, void 0, !1, {
		fileName: zt,
		lineNumber: 77,
		columnNumber: 5
	}, this);
}
var Ht = [
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
function Ut(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
var Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-intl-app/components/LocaleSwitcher.tsx";
function Wt() {
	let e = l().locale ?? "en", t = u(), n = d(), r = (r) => {
		let i = t.replace(`/${e}`, `/${r}`);
		n.push(i);
	};
	return f("div", {
		className: "flex items-center gap-2",
		children: f("select", {
			value: e,
			onChange: (e) => r(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: Ht.map((e) => f("option", {
				value: e,
				children: Ut(e)
			}, e, !1, {
				fileName: Q,
				lineNumber: 25,
				columnNumber: 11
			}, this))
		}, void 0, !1, {
			fileName: Q,
			lineNumber: 19,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 18,
		columnNumber: 5
	}, this);
}
function Gt(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), i(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-intl-app/components/Header.tsx";
function Kt() {
	let e = Rt();
	Gt("Header");
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
	return f("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: f("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [f("div", {
				className: "flex items-center gap-8",
				children: [f(g, {
					href: "/",
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}, void 0, !1, {
					fileName: $,
					lineNumber: 45,
					columnNumber: 11
				}, this), f("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						f(g, {
							href: "/",
							className: `nav-link${((e) => i === h(e, a))("/") ? " is-active" : ""}`,
							children: e("header.home")
						}, void 0, !1, {
							fileName: $,
							lineNumber: 53,
							columnNumber: 13
						}, this),
						f(g, {
							href: "/about",
							className: `nav-link${((e) => {
								let t = h(e, a);
								return i.startsWith(t) && (e !== "/" || i === t);
							})("/about") ? " is-active" : ""}`,
							children: e("footer.methodology")
						}, void 0, !1, {
							fileName: $,
							lineNumber: 59,
							columnNumber: 13
						}, this),
						f("div", {
							className: "relative",
							children: [f("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								onClick: () => n(!t),
								children: [e("header.mockPages"), f(ee, {
									size: 14,
									className: `transition-transform ${t ? "rotate-180" : ""}`
								}, void 0, !1, {
									fileName: $,
									lineNumber: 76,
									columnNumber: 17
								}, this)]
							}, void 0, !0, {
								fileName: $,
								lineNumber: 68,
								columnNumber: 15
							}, this), t && f("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								children: f("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: o.map((e) => f(g, {
										href: e.href,
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => n(!1),
										children: e.label
									}, e.href, !1, {
										fileName: $,
										lineNumber: 90,
										columnNumber: 23
									}, this))
								}, void 0, !1, {
									fileName: $,
									lineNumber: 88,
									columnNumber: 19
								}, this)
							}, void 0, !1, {
								fileName: $,
								lineNumber: 83,
								columnNumber: 17
							}, this)]
						}, void 0, !0, {
							fileName: $,
							lineNumber: 67,
							columnNumber: 13
						}, this)
					]
				}, void 0, !0, {
					fileName: $,
					lineNumber: 52,
					columnNumber: 11
				}, this)]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 44,
				columnNumber: 9
			}, this), f("div", {
				className: "flex items-center gap-4",
				children: [
					f("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [f("span", {
							className: "sr-only",
							children: e("header.goToGithub")
						}, void 0, !1, {
							fileName: $,
							lineNumber: 113,
							columnNumber: 13
						}, this), f("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: f("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							}, void 0, !1, {
								fileName: $,
								lineNumber: 115,
								columnNumber: 15
							}, this)
						}, void 0, !1, {
							fileName: $,
							lineNumber: 114,
							columnNumber: 13
						}, this)]
					}, void 0, !0, {
						fileName: $,
						lineNumber: 107,
						columnNumber: 11
					}, this),
					f(Wt, {}, void 0, !1, {
						fileName: $,
						lineNumber: 121,
						columnNumber: 11
					}, this),
					f(Vt, {}, void 0, !1, {
						fileName: $,
						lineNumber: 122,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 106,
				columnNumber: 9
			}, this)]
		}, void 0, !0, {
			fileName: $,
			lineNumber: 43,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: $,
		lineNumber: 42,
		columnNumber: 5
	}, this);
}
function qt() {
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
function Jt(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var Yt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-intl-app/components/AppProviders.tsx";
function Xt({ children: e, locale: t }) {
	let [n] = s(() => typeof performance < "u" ? performance.now() : 0);
	return i(() => {
		Jt("AppRoot", n);
	}, [n]), r(() => {
		document.documentElement.lang = t;
	}, [t]), r(() => {
		qt();
	}, []), f(Et, {
		locale: t,
		timeZone: "UTC",
		children: e
	}, void 0, !1, {
		fileName: Yt,
		lineNumber: 32,
		columnNumber: 7
	}, this);
}
var Zt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-intl-app/scripts/Wrapper.tsx", Qt = "en";
function $t({ children: e }) {
	return f(Xt, {
		locale: Qt,
		children: e
	}, void 0, !1, {
		fileName: Zt,
		lineNumber: 11,
		columnNumber: 10
	}, this);
}
var en = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-intl-app/components/Header.wrapper.tsx";
function tn() {
	return f($t, { children: f(Kt, {}, void 0, !1, {
		fileName: en,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: en,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { tn as default };
