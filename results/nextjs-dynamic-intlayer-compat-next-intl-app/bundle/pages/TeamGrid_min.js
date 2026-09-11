import { Fragment as e, createContext as t, useContext as n, useEffect as r, useLayoutEffect as i, useMemo as a, useRef as o, useState as s } from "react";
import { Fragment as c, jsx as l, jsxs as ee } from "react/jsx-runtime";
import { usePathname as u } from "next/navigation";
import { jsxDEV as d } from "react/jsx-dev-runtime";
var f = {
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
}, p = {
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
}, m = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, h = /* @__PURE__ */ new WeakMap(), g = 0, te = (e) => {
	if (!e) return "base";
	let t = h.get(e);
	if (t) return t;
	g += 1;
	let n = `p${g}`;
	return h.set(e, n), n;
}, ne = 256, _ = /* @__PURE__ */ new WeakMap(), re = (e) => typeof e == "object" && !!e, ie = (e, t, n) => `${e}_${t}_${te(n)}`, ae = (e, t) => {
	if (!re(e)) return { hit: !1 };
	let n = _.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, v = (e, t, n) => {
	if (!re(e)) return n;
	let r = _.get(e);
	return r || (r = /* @__PURE__ */ new Map(), _.set(e, r)), r.size >= ne && r.clear(), r.set(t, n), n;
}, oe = "translation", se = "enumeration", ce = "plural", y = "insertion", le = "object", ue = "array", de = "markdown", b = "html", fe = "gender", pe = "select", x = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => x(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => x(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ue,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: le,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = x(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = x(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, me = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, he = (e, t) => e[me(e, t) ?? "fallback"], S = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), C = "default", ge = /[^A-Za-z0-9._&=-]/g, w = /[^A-Za-z0-9._-]/g, _e = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, T = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, _e);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, E = (e) => e === void 0 ? C : typeof e == "string" ? T(e, ge) : Object.keys(e).sort().map((t) => `${T(t, w)}=${T(String(e[t]), w)}`).join("&"), D = (e) => Array.isArray(e) ? e.length === 0 ? [C] : e.map(E) : [E(e)], ve = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? C : e[0] ?? "default";
}, ye = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, be = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, xe = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Se = (e, t) => {
	if (!be(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? C : ve(D(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ye(e, n, t, s)).map((t) => xe(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Ce = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, we = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? D(n).join(",") : String(n)}`;
}).join("|") : "", O = "\x1B[0m", Te = "\x1B[34m", Ee = "\x1B[31m", De = "\x1B[32m", Oe = "\x1B[38;5;3m", ke = "\x1B[36m", Ae = (e) => e, je = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Ae(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, k = (e, t) => (n, r) => je(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), A = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? O : n : O}` : e, Me = (e, t = Oe, n = O) => [e].flat().map((e) => A(e, t, n)).join(", ");
A("✗", Ee), A("✓", De), A("⏲", Te);
var Ne = () => ({}), Pe = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Fe = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Pe.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Fe(e ? `${e}.${String(n)}` : String(n)) }), Ie = /* @__PURE__ */ new Set(), j = (e, t, n) => {
	let r = Ne()[e];
	return r ? rt(r, t, n) : (Ie.has(e) || (k({ log: m })(typeof window > "u" ? `Dictionary ${Me(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), Ie.add(e)), Fe(e));
}, Le = 50, M = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Set(), Re = (e) => {
	N.has(e) || (N.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, ze = {
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
}, Be = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Re(e), ze[e]);
};
function P(e, t, n) {
	let r = t ?? f?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = M.get(a);
	o || (o = /* @__PURE__ */ new Map(), M.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Be(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Le && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Ve = (e, t, n) => e[P("PluralRules", n).select(t)] ?? e.other, He = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, F = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, I = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (F(e) && F(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : I(e[r], t[r]));
		return n;
	}
	return e;
}, Ue = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => I(e, t));
}, L = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, We = (e) => {
	if (typeof e == "string") return e;
	if (L(e)) return e.nodeType === "html" ? e[b] : e[de];
}, Ge = (e, t) => {
	if (typeof e == "string") return t;
	if (L(e)) {
		let n = e.nodeType === "html" ? b : de;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Ke = (e, t, n, r, i) => {
	let a = Ge(e, S(We(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
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
					type: oe,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return Ue(o, e, t);
	}
}, Je = R, Ye = R, Xe = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? R : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: y }], i = e[y], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || L(e),
			transform: (e, n, r) => {
				if (L(e)) return (i) => Ke(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = S(i, e);
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
}, Ze = R, Qe = R, $e = (e) => R, et = R, tt = (e, t = !0) => [
	qe(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	Je,
	Ye,
	Xe,
	$e(e ?? f.defaultLocale),
	et,
	Ze,
	Qe
], nt = (e, t, n = []) => x(e, {
	...t,
	plugins: n
}), rt = (e, t, n) => {
	let { locale: r, selector: i } = Ce(t), a = ie(r ?? f.defaultLocale, we(i), n), o = ae(e, a);
	if (o.hit) return o.content;
	let s = n ?? tt(r), c = Se(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return nt(e.content, t, s);
	};
	return c === null ? v(e, a, null) : Array.isArray(c) ? v(e, a, c.map(l)) : v(e, a, l(c));
}, it = ["en"], at = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), z = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, ot = (e, t, n) => {
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
}, st = (e = V) => {
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!B) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ct = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !B && p.storage.cookies) for (let n = 0; n < p.storage.cookies.length; n++) {
		let { name: r, attributes: i } = p.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: z(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ot(r, e, i));
			} catch {}
		}
	}
}, H = st(V), lt = (e, t) => ct(e, {
	...V,
	isCookieEnabled: t
}), ut = () => {
	let { locale: e } = n(W) ?? {}, t = o(null);
	r(() => {}, []), r(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, dt = ({ children: e }) => (ut(), e), ft = () => {
	let { locale: e } = n(W) ?? {}, t = o(null);
	r(() => {}, []), r(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, pt = ({ children: e }) => (ft(), e), mt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, ht = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? f?.defaultLocale ?? "en",
	mode: e.mode ?? p?.mode ?? "prefix-no-default",
	locales: e.locales ?? f?.locales ?? it,
	rewrite: e.rewrite ?? p?.rewrite,
	domains: e.domains ?? p?.domains
}), U = (e, t) => !!e && (t ?? f.locales).includes(e), gt = (e, t = f?.locales, n = f?.defaultLocale) => {
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
}, _t = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = ht(t);
	if (!n || !r) return n;
	let a = at(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return U(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (U(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, W = t({
	locale: H ?? f?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), vt = ({ locale: e, defaultLocale: t, variant: n, children: i, setLocale: a, disableEditor: o, isCookieEnabled: c }) => {
	let { locales: ee, defaultLocale: u } = f ?? {}, [d, p] = s(e ?? H ?? t ?? u);
	r(() => {
		e && e !== d && p(e);
	}, [e]), r(() => {
		mt();
	}, []);
	let m = a ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!ee?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), lt(e, c);
		}
	}), h = gt(d);
	return l(W.Provider, {
		value: {
			locale: h,
			setLocale: m,
			variant: n,
			disableEditor: o
		},
		children: i
	});
}, yt = ({ children: e, ...t }) => ee(vt, {
	...t,
	children: [
		l(dt, {}),
		l(pt, {}),
		e
	]
}), bt = ({ locale: e, children: t, messages: n, timeZone: r, now: i, ...a }) => {
	n !== void 0 && k({ log: m })(`${A("NextIntlClientProvider", ke)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`);
	let o = u(), s = p?.mode ?? "prefix-no-default", c = e ?? (s === "prefix-all" || s === "prefix-no-default" ? _t(o) : void 0);
	return l(yt, {
		locale: c,
		...a,
		children: t
	}, String(c));
}, G = (e, t, n = ".") => {
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
}, K = [
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
}, J = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? P("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? P("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : P("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return P("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, xt = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = q(t, r);
	return o === void 0 ? e : i ? J(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = q(t, r);
	return o === void 0 ? e : J(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = q(t, n);
	return r === void 0 ? e : String(r);
}), Y = (e, t) => e[t] ?? e.count ?? e.n, X = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return xt(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return X(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(X(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return X(r[y], t, n);
	if (r.nodeType === "html") return X(r[b], t, n);
	if (r.nodeType === "plural") {
		let e = r[ce];
		return X(Ve(e, Number(Y(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[se], i = K.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) K.includes(t) || (o[t] = n);
		let s = Y(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = P("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? he(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return X(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[pe], i = Y(t, typeof r.variable == "string" ? r.variable : "value");
		return X(He(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[fe];
		return X(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, St = (e, t = {}, n = "en") => {
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
		}) : t.push({
			tag: o,
			children: Z(s)
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, Ct = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, Q = (t, n) => t.map((t, r) => {
	if (typeof t == "string") return t;
	let i = Q(t.children, n), a = n[t.tag];
	return typeof a == "function" ? l(e, { children: a(i) }, r) : l(e, { children: i }, r);
}), wt = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = wt(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), Tt = (e, t) => {
	let [n, ...r] = (t ?? "").split("."), i = r.join(".");
	return Dt(e, (t) => Et(e, n ?? "", i, t), (e) => t ? `${t}.${e}` : e);
}, Et = (e, t, n, r) => {
	let i = t, a = n ? `${n}.${r}` : r, o = Ne();
	if (!i) {
		let [t, ...n] = r.split(".");
		if (i = t ?? r, a = n.join("."), !o[i]) for (let t of Object.keys(o)) try {
			let n = G(j(t, e), r);
			if (n !== void 0) return n;
		} catch {}
	}
	try {
		return G(j(i, e), a);
	} catch {
		return;
	}
}, Dt = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return St(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = Ct(t), o = r(e, i);
			return o === void 0 ? n(e) : l(c, { children: Q(Z(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = Ct(t), o = r(e, i);
			return o === void 0 ? n(e) : wt(Z(o), a);
		}
	});
}, Ot = ((e) => {
	let { locale: t } = n(W) ?? {};
	return a(() => Tt(t, e), [t, e]);
}), $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-next-intl-app/components/pages/team/TeamGrid.tsx";
function kt() {
	let e = Ot(), t = [
		{
			name: e("team.team-grid.sarahChen"),
			role: e("team.team-grid.founderLeadEngineer"),
			bio: e("team.team-grid.formerGoogleEngineerWith10")
		},
		{
			name: e("team.team-grid.marcusWeber"),
			role: e("team.team-grid.performanceEngineer"),
			bio: e("team.team-grid.specializesInJavascriptPerformanceOptimization")
		},
		{
			name: e("team.team-grid.aishaPatel"),
			role: e("team.team-grid.developerAdvocate"),
			bio: e("team.team-grid.passionateAboutDeveloperExperienceAnd")
		},
		{
			name: e("team.team-grid.tomasRodriguez"),
			role: e("team.team-grid.fullStackDeveloper"),
			bio: e("team.team-grid.maintainsTheBenchmarkingInfrastructureAnd")
		},
		{
			name: e("team.team-grid.yukiTanaka"),
			role: e("team.team-grid.dataAnalyst"),
			bio: e("team.team-grid.ensuresStatisticalRigorInAll")
		},
		{
			name: e("team.team-grid.elenaKowalski"),
			role: e("team.team-grid.communityManager"),
			bio: e("team.team-grid.managesCommunityContributionsPartnershipsAnd")
		}
	];
	return d("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: t.map((e) => d("div", {
			className: "rounded-lg border border-border bg-card p-6 text-center",
			children: [
				d("div", {
					className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground",
					children: e.name.split("team-grid. ").map((e) => e[0]).join("")
				}, void 0, !1, {
					fileName: $,
					lineNumber: 48,
					columnNumber: 11
				}, this),
				d("h3", {
					className: "text-base font-semibold text-foreground",
					children: e.name
				}, void 0, !1, {
					fileName: $,
					lineNumber: 54,
					columnNumber: 11
				}, this),
				d("p", {
					className: "mb-2 text-xs font-medium text-primary",
					children: e.role
				}, void 0, !1, {
					fileName: $,
					lineNumber: 55,
					columnNumber: 11
				}, this),
				d("p", {
					className: "text-sm text-muted-foreground",
					children: e.bio
				}, void 0, !1, {
					fileName: $,
					lineNumber: 56,
					columnNumber: 11
				}, this)
			]
		}, e.name, !0, {
			fileName: $,
			lineNumber: 44,
			columnNumber: 9
		}, this))
	}, void 0, !1, {
		fileName: $,
		lineNumber: 42,
		columnNumber: 5
	}, this);
}
function At() {
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
function jt(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var Mt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-next-intl-app/components/AppProviders.tsx";
function Nt({ children: e, locale: t }) {
	let [n] = s(() => typeof performance < "u" ? performance.now() : 0);
	return i(() => {
		jt("AppRoot", n);
	}, [n]), r(() => {
		document.documentElement.lang = t;
	}, [t]), r(() => {
		At();
	}, []), d(bt, {
		locale: t,
		timeZone: "UTC",
		children: e
	}, void 0, !1, {
		fileName: Mt,
		lineNumber: 32,
		columnNumber: 7
	}, this);
}
var Pt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-next-intl-app/scripts/Wrapper.tsx", Ft = "en";
function It({ children: e }) {
	return d(Nt, {
		locale: Ft,
		children: e
	}, void 0, !1, {
		fileName: Pt,
		lineNumber: 11,
		columnNumber: 10
	}, this);
}
var Lt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-next-intl-app/components/pages/team/TeamGrid.wrapper.tsx";
function Rt() {
	return d(It, { children: d(kt, {}, void 0, !1, {
		fileName: Lt,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: Lt,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Rt as default };
