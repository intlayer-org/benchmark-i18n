import { Fragment as e, createContext as t, useContext as n, useEffect as r, useLayoutEffect as i, useMemo as a, useRef as o, useState as s } from "react";
import c from "next/link";
import { useParams as l, usePathname as u } from "next/navigation";
import { jsxDEV as d } from "react/jsx-dev-runtime";
import { Fragment as f, jsx as p, jsxs as m } from "react/jsx-runtime";
var h = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-next-intl-app/components/Link.tsx", ee = (e) => /^https?:\/\//.test(e ?? "");
function te(e, t) {
	return !e.startsWith("/") || e === `/${t}` || e.startsWith(`/${t}/`) ? e : `/${t}${e === "/" ? "" : e}`;
}
var ne = ({ href: e, children: t, ...n }) => {
	let r = l().locale ?? "en";
	return e == null || typeof e != "string" ? d(c, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}, void 0, !1, {
		fileName: h,
		lineNumber: 23,
		columnNumber: 7
	}, void 0) : ee(e) ? d(c, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}, void 0, !1, {
		fileName: h,
		lineNumber: 30,
		columnNumber: 7
	}, void 0) : d(c, {
		href: te(e, r),
		prefetch: !1,
		...n,
		children: t
	}, void 0, !1, {
		fileName: h,
		lineNumber: 36,
		columnNumber: 5
	}, void 0);
}, g = {
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
}, _ = {
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
}, v = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, y = /* @__PURE__ */ new WeakMap(), b = 0, re = (e) => {
	if (!e) return "base";
	let t = y.get(e);
	if (t) return t;
	b += 1;
	let n = `p${b}`;
	return y.set(e, n), n;
}, ie = 256, x = /* @__PURE__ */ new WeakMap(), ae = (e) => typeof e == "object" && !!e, oe = (e, t, n) => `${e}_${t}_${re(n)}`, se = (e, t) => {
	if (!ae(e)) return { hit: !1 };
	let n = x.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, S = (e, t, n) => {
	if (!ae(e)) return n;
	let r = x.get(e);
	return r || (r = /* @__PURE__ */ new Map(), x.set(e, r)), r.size >= ie && r.clear(), r.set(t, n), n;
}, ce = "translation", le = "enumeration", ue = "plural", C = "insertion", de = "object", fe = "array", w = "markdown", T = "html", pe = "gender", me = "select", E = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => E(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => E(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: fe,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: de,
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
}, he = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, ge = (e, t) => e[he(e, t) ?? "fallback"], D = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), O = "default", _e = /[^A-Za-z0-9._&=-]/g, k = /[^A-Za-z0-9._-]/g, ve = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, A = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, ve);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, j = (e) => e === void 0 ? O : typeof e == "string" ? A(e, _e) : Object.keys(e).sort().map((t) => `${A(t, k)}=${A(String(e[t]), k)}`).join("&"), M = (e) => Array.isArray(e) ? e.length === 0 ? [O] : e.map(j) : [j(e)], ye = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? O : e[0] ?? "default";
}, be = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, xe = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Se = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Ce = (e, t) => {
	if (!xe(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? O : ye(M(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => be(e, n, t, s)).map((t) => Se(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, we = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Te = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? M(n).join(",") : String(n)}`;
}).join("|") : "", N = "\x1B[0m", Ee = "\x1B[34m", De = "\x1B[31m", Oe = "\x1B[32m", ke = "\x1B[38;5;3m", Ae = "\x1B[36m", je = (e) => e, Me = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = je(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, P = (e, t) => (n, r) => Me(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), F = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? N : n : N}` : e, Ne = (e, t = ke, n = N) => [e].flat().map((e) => F(e, t, n)).join(", ");
F("✗", De), F("✓", Oe), F("⏲", Ee);
var I = () => ({}), Pe = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), L = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Pe.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : L(e ? `${e}.${String(n)}` : String(n)) }), R = /* @__PURE__ */ new Set(), z = (e, t, n) => {
	let r = I()[e];
	return r ? tt(r, t, n) : (R.has(e) || (P({ log: v })(typeof window > "u" ? `Dictionary ${Ne(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), R.add(e)), L(e));
}, Fe = 50, B = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Set(), Ie = (e) => {
	V.has(e) || (V.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Le = {
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
}, Re = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Ie(e), Le[e]);
};
function H(e, t, n) {
	let r = t ?? g?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = B.get(a);
	o || (o = /* @__PURE__ */ new Map(), B.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Re(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Fe && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var ze = (e, t, n) => e[H("PluralRules", n).select(t)] ?? e.other, Be = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, U = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, W = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (U(e) && U(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : W(e[r], t[r]));
		return n;
	}
	return e;
}, Ve = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => W(e, t));
}, G = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, He = (e) => {
	if (typeof e == "string") return e;
	if (G(e)) return e.nodeType === "html" ? e[T] : e[w];
}, Ue = (e, t) => {
	if (typeof e == "string") return t;
	if (G(e)) {
		let n = e.nodeType === "html" ? T : w;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, We = (e, t, n, r, i) => {
	let a = Ue(e, D(He(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, K = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Ge = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? K : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ce,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return Ve(o, e, t);
	}
}, Ke = K, qe = K, Je = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? K : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: C }], i = e[C], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || G(e),
			transform: (e, n, r) => {
				if (G(e)) return (i) => We(e, i, n, t.plugins, r);
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
}, Ye = K, Xe = K, Ze = (e) => K, Qe = K, $e = (e, t = !0) => [
	Ge(e ?? g.defaultLocale, t ? g.defaultLocale : void 0),
	Ke,
	qe,
	Je,
	Ze(e ?? g.defaultLocale),
	Qe,
	Ye,
	Xe
], et = (e, t, n = []) => E(e, {
	...t,
	plugins: n
}), tt = (e, t, n) => {
	let { locale: r, selector: i } = we(t), a = oe(r ?? g.defaultLocale, Te(i), n), o = se(e, a);
	if (o.hit) return o.content;
	let s = n ?? $e(r), c = Ce(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return et(e.content, t, s);
	};
	return c === null ? S(e, a, null) : Array.isArray(c) ? S(e, a, c.map(l)) : S(e, a, l(c));
}, nt = ["en"], rt = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), it = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, at = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = it(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, ot = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var q = {
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
}, st = (e = q) => {
	let { locales: t } = g;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!ot) for (let t = 0; t < (_.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(_.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ct = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !ot && _.storage.cookies) for (let n = 0; n < _.storage.cookies.length; n++) {
		let { name: r, attributes: i } = _.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: it(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, at(r, e, i));
			} catch {}
		}
	}
}, lt = st(q), ut = (e, t) => ct(e, {
	...q,
	isCookieEnabled: t
}), dt = () => {
	let { locale: e } = n(J) ?? {}, t = o(null);
	r(() => {}, []), r(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, ft = ({ children: e }) => (dt(), e), pt = () => {
	let { locale: e } = n(J) ?? {}, t = o(null);
	r(() => {}, []), r(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, mt = ({ children: e }) => (pt(), e), ht = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, gt = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? g?.defaultLocale ?? "en",
	mode: e.mode ?? _?.mode ?? "prefix-no-default",
	locales: e.locales ?? g?.locales ?? nt,
	rewrite: e.rewrite ?? _?.rewrite,
	domains: e.domains ?? _?.domains
}), _t = (e, t) => !!e && (t ?? g.locales).includes(e), vt = (e, t = g?.locales, n = g?.defaultLocale) => {
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
}, yt = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = gt(t);
	if (!n || !r) return n;
	let a = rt(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return _t(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (_t(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, J = t({
	locale: lt ?? g?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), bt = ({ locale: e, defaultLocale: t, variant: n, children: i, setLocale: a, disableEditor: o, isCookieEnabled: c }) => {
	let { locales: l, defaultLocale: u } = g ?? {}, [d, f] = s(e ?? lt ?? t ?? u);
	r(() => {
		e && e !== d && f(e);
	}, [e]), r(() => {
		ht();
	}, []);
	let m = a ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!l?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			f(e), ut(e, c);
		}
	}), h = vt(d);
	return p(J.Provider, {
		value: {
			locale: h,
			setLocale: m,
			variant: n,
			disableEditor: o
		},
		children: i
	});
}, xt = ({ children: e, ...t }) => m(bt, {
	...t,
	children: [
		p(ft, {}),
		p(mt, {}),
		e
	]
}), St = ({ locale: e, children: t, messages: n, timeZone: r, now: i, ...a }) => {
	n !== void 0 && P({ log: v })(`${F("NextIntlClientProvider", Ae)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`);
	let o = u(), s = _?.mode ?? "prefix-no-default", c = e ?? (s === "prefix-all" || s === "prefix-no-default" ? yt(o) : void 0);
	return p(xt, {
		locale: c,
		...a,
		children: t
	}, String(c));
}, Ct = (e, t, n = ".") => {
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
}, wt = [
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
}, Tt = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? H("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? H("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : H("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return H("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Et = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = Y(t, r);
	return o === void 0 ? e : i ? Tt(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = Y(t, r);
	return o === void 0 ? e : Tt(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = Y(t, n);
	return r === void 0 ? e : String(r);
}), X = (e, t) => e[t] ?? e.count ?? e.n, Z = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Et(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return Z(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(Z(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return Z(r[C], t, n);
	if (r.nodeType === "html") return Z(r[T], t, n);
	if (r.nodeType === "plural") {
		let e = r[ue];
		return Z(ze(e, Number(X(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[le], i = wt.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) wt.includes(t) || (o[t] = n);
		let s = X(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = H("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? ge(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return Z(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[me], i = X(t, typeof r.variable == "string" ? r.variable : "value");
		return Z(Be(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[pe];
		return Z(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Dt = (e, t = {}, n = "en") => {
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
		}) : t.push({
			tag: o,
			children: Q(s)
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, Ot = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, kt = (t, n) => t.map((t, r) => {
	if (typeof t == "string") return t;
	let i = kt(t.children, n), a = n[t.tag];
	return typeof a == "function" ? p(e, { children: a(i) }, r) : p(e, { children: i }, r);
}), At = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = At(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), jt = (e, t) => {
	let [n, ...r] = (t ?? "").split("."), i = r.join(".");
	return Nt(e, (t) => Mt(e, n ?? "", i, t), (e) => t ? `${t}.${e}` : e);
}, Mt = (e, t, n, r) => {
	let i = t, a = n ? `${n}.${r}` : r, o = I();
	if (!i) {
		let [t, ...n] = r.split(".");
		if (i = t ?? r, a = n.join("."), !o[i]) for (let t of Object.keys(o)) try {
			let n = Ct(z(t, e), r);
			if (n !== void 0) return n;
		} catch {}
	}
	try {
		return Ct(z(i, e), a);
	} catch {
		return;
	}
}, Nt = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return Dt(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = Ot(t), o = r(e, i);
			return o === void 0 ? n(e) : p(f, { children: kt(Q(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = Ot(t), o = r(e, i);
			return o === void 0 ? n(e) : At(Q(o), a);
		}
	});
}, Pt = ((e) => {
	let { locale: t } = n(J) ?? {};
	return a(() => jt(t, e), [t, e]);
}), $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-next-intl-app/components/Footer.tsx";
function Ft() {
	let e = Pt(), t = [
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
						children: e("footer.anOpenSourceTestApplication")
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
						children: e("footer.resources")
					}, void 0, !1, {
						fileName: $,
						lineNumber: 40,
						columnNumber: 13
					}, this), d("ul", {
						className: "space-y-1",
						children: t.map((e) => d("li", { children: e.isInternal ? d(ne, {
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
						children: e("footer.contact")
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
				children: e("footer.builtWith")
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
function It() {
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
function Lt(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var Rt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-next-intl-app/components/AppProviders.tsx";
function zt({ children: e, locale: t }) {
	let [n] = s(() => typeof performance < "u" ? performance.now() : 0);
	return i(() => {
		Lt("AppRoot", n);
	}, [n]), r(() => {
		document.documentElement.lang = t;
	}, [t]), r(() => {
		It();
	}, []), d(St, {
		locale: t,
		timeZone: "UTC",
		children: e
	}, void 0, !1, {
		fileName: Rt,
		lineNumber: 32,
		columnNumber: 7
	}, this);
}
var Bt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-next-intl-app/scripts/Wrapper.tsx", Vt = "en";
function Ht({ children: e }) {
	return d(zt, {
		locale: Vt,
		children: e
	}, void 0, !1, {
		fileName: Bt,
		lineNumber: 11,
		columnNumber: 10
	}, this);
}
var Ut = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-next-intl-app/components/Footer.wrapper.tsx";
function Wt() {
	return d(Ht, { children: d(Ft, {}, void 0, !1, {
		fileName: Ut,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: Ut,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Wt as default };
