import { Fragment as e, createContext as t, useContext as n, useEffect as r, useId as i, useLayoutEffect as a, useMemo as o, useRef as s, useState as c } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
import { usePathname as f } from "next/navigation";
import { jsxDEV as p } from "react/jsx-dev-runtime";
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
	enableProxy: !1,
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, g = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, _ = /* @__PURE__ */ new WeakMap(), ee = 0, te = (e) => {
	if (!e) return "base";
	let t = _.get(e);
	if (t) return t;
	ee += 1;
	let n = `p${ee}`;
	return _.set(e, n), n;
}, ne = 256, v = /* @__PURE__ */ new WeakMap(), y = (e) => typeof e == "object" && !!e, re = (e, t, n) => `${e}_${t}_${te(n)}`, ie = (e, t) => {
	if (!y(e)) return { hit: !1 };
	let n = v.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, b = (e, t, n) => {
	if (!y(e)) return n;
	let r = v.get(e);
	return r || (r = /* @__PURE__ */ new Map(), v.set(e, r)), r.size >= ne && r.clear(), r.set(t, n), n;
}, ae = "translation", oe = "enumeration", se = "plural", x = "insertion", ce = "object", le = "array", ue = "markdown", S = "html", de = "gender", fe = "select", C = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => C(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => C(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: le,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ce,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = C(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = C(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, pe = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, me = (e, t) => e[pe(e, t) ?? "fallback"], w = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), T = "default", he = /[^A-Za-z0-9._&=-]/g, E = /[^A-Za-z0-9._-]/g, ge = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, D = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, ge);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, O = (e) => e === void 0 ? T : typeof e == "string" ? D(e, he) : Object.keys(e).sort().map((t) => `${D(t, E)}=${D(String(e[t]), E)}`).join("&"), k = (e) => Array.isArray(e) ? e.length === 0 ? [T] : e.map(O) : [O(e)], _e = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? T : e[0] ?? "default";
}, ve = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, ye = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, be = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, xe = (e, t) => {
	if (!ye(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? T : _e(k(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ve(e, n, t, s)).map((t) => be(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Se = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Ce = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? k(n).join(",") : String(n)}`;
}).join("|") : "", A = "\x1B[0m", we = "\x1B[34m", Te = "\x1B[31m", Ee = "\x1B[32m", De = "\x1B[38;5;3m", Oe = "\x1B[36m", ke = (e) => e, Ae = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = ke(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, j = (e, t) => (n, r) => Ae(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), M = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? A : n : A}` : e, je = (e, t = De, n = A) => [e].flat().map((e) => M(e, t, n)).join(", ");
M("✗", Te), M("✓", Ee), M("⏲", we);
var N = () => ({}), Me = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), P = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Me.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : P(e ? `${e}.${String(n)}` : String(n)) }), F = /* @__PURE__ */ new Set(), I = (e, t, n) => {
	let r = N()[e];
	return r ? $e(r, t, n) : (F.has(e) || (j({ log: g })(typeof window > "u" ? `Dictionary ${je(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), F.add(e)), P(e));
}, Ne = 50, L = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Set(), Pe = (e) => {
	R.has(e) || (R.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Fe = {
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
}, Ie = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Pe(e), Fe[e]);
};
function z(e, t, n) {
	let r = t ?? m?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = L.get(a);
	o || (o = /* @__PURE__ */ new Map(), L.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Ie(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Ne && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Le = (e, t, n) => e[z("PluralRules", n).select(t)] ?? e.other, Re = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, B = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, V = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (B(e) && B(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : V(e[r], t[r]));
		return n;
	}
	return e;
}, ze = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => V(e, t));
}, H = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Be = (e) => {
	if (typeof e == "string") return e;
	if (H(e)) return e.nodeType === "html" ? e[S] : e[ue];
}, Ve = (e, t) => {
	if (typeof e == "string") return t;
	if (H(e)) {
		let n = e.nodeType === "html" ? S : ue;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, He = (e, t, n, r, i) => {
	let a = Ve(e, w(Be(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, U = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Ue = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? U : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ae,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return ze(o, e, t);
	}
}, We = U, Ge = U, Ke = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? U : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: x }], i = e[x], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || H(e),
			transform: (e, n, r) => {
				if (H(e)) return (i) => He(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = w(i, e);
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
}, qe = U, Je = U, Ye = (e) => U, Xe = U, Ze = (e, t = !0) => [
	Ue(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
	We,
	Ge,
	Ke,
	Ye(e ?? m.defaultLocale),
	Xe,
	qe,
	Je
], Qe = (e, t, n = []) => C(e, {
	...t,
	plugins: n
}), $e = (e, t, n) => {
	let { locale: r, selector: i } = Se(t), a = re(r ?? m.defaultLocale, Ce(i), n), o = ie(e, a);
	if (o.hit) return o.content;
	let s = n ?? Ze(r), c = xe(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Qe(e.content, t, s);
	};
	return c === null ? b(e, a, null) : Array.isArray(c) ? b(e, a, c.map(l)) : b(e, a, l(c));
}, et = ["en"], tt = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), W = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, nt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = W(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, G = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var K = {
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
}, rt = (e = K) => {
	let { locales: t } = m;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!G) for (let t = 0; t < (h.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(h.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, it = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !G && h.storage.cookies) for (let n = 0; n < h.storage.cookies.length; n++) {
		let { name: r, attributes: i } = h.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: W(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, nt(r, e, i));
			} catch {}
		}
	}
}, at = rt(K), ot = (e, t) => it(e, {
	...K,
	isCookieEnabled: t
}), st = () => {
	let { locale: e } = n(q) ?? {}, t = s(null);
	r(() => {}, []), r(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, ct = ({ children: e }) => (st(), e), lt = () => {
	let { locale: e } = n(q) ?? {}, t = s(null);
	r(() => {}, []), r(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, ut = ({ children: e }) => (lt(), e), dt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, ft = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? m?.defaultLocale ?? "en",
	mode: e.mode ?? h?.mode ?? "prefix-no-default",
	locales: e.locales ?? m?.locales ?? et,
	rewrite: e.rewrite ?? h?.rewrite,
	domains: e.domains ?? h?.domains
}), pt = (e, t) => !!e && (t ?? m.locales).includes(e), mt = (e, t = m?.locales, n = m?.defaultLocale) => {
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
}, ht = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = ft(t);
	if (!n || !r) return n;
	let a = tt(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return pt(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (pt(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, q = t({
	locale: at ?? m?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), gt = ({ locale: e, defaultLocale: t, variant: n, children: i, setLocale: a, disableEditor: o, isCookieEnabled: s }) => {
	let { locales: l, defaultLocale: d } = m ?? {}, [f, p] = c(e ?? at ?? t ?? d);
	r(() => {
		e && e !== f && p(e);
	}, [e]), r(() => {
		dt();
	}, []);
	let h = a ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!l?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), ot(e, s);
		}
	}), g = mt(f);
	return u(q.Provider, {
		value: {
			locale: g,
			setLocale: h,
			variant: n,
			disableEditor: o
		},
		children: i
	});
}, _t = ({ children: e, ...t }) => d(gt, {
	...t,
	children: [
		u(ct, {}),
		u(ut, {}),
		e
	]
}), vt = ({ locale: e, children: t, messages: n, timeZone: r, now: i, ...a }) => {
	n !== void 0 && j({ log: g })(`${M("NextIntlClientProvider", Oe)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`);
	let o = f(), s = h?.mode ?? "prefix-no-default", c = e ?? (s === "prefix-all" || s === "prefix-no-default" ? ht(o) : void 0);
	return u(_t, {
		locale: c,
		...a,
		children: t
	}, String(c));
}, yt = (e, t, n = ".") => {
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
}, bt = [
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
}, xt = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? z("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? z("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : z("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return z("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, St = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = J(t, r);
	return o === void 0 ? e : i ? xt(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = J(t, r);
	return o === void 0 ? e : xt(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = J(t, n);
	return r === void 0 ? e : String(r);
}), Y = (e, t) => e[t] ?? e.count ?? e.n, X = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return St(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return X(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(X(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return X(r[x], t, n);
	if (r.nodeType === "html") return X(r[S], t, n);
	if (r.nodeType === "plural") {
		let e = r[se];
		return X(Le(e, Number(Y(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[oe], i = bt.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) bt.includes(t) || (o[t] = n);
		let s = Y(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = z("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? me(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return X(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[fe], i = Y(t, typeof r.variable == "string" ? r.variable : "value");
		return X(Re(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[de];
		return X(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Ct = (e, t = {}, n = "en") => {
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
}, wt = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, Tt = (t, n) => t.map((t, r) => {
	if (typeof t == "string") return t;
	let i = Tt(t.children, n), a = n[t.tag];
	return typeof a == "function" ? u(e, { children: a(i) }, r) : u(e, { children: i }, r);
}), Et = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = Et(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), Dt = (e, t) => {
	let [n, ...r] = (t ?? "").split("."), i = r.join(".");
	return kt(e, (t) => Ot(e, n ?? "", i, t), (e) => t ? `${t}.${e}` : e);
}, Ot = (e, t, n, r) => {
	let i = t, a = n ? `${n}.${r}` : r, o = N();
	if (!i) {
		let [t, ...n] = r.split(".");
		if (i = t ?? r, a = n.join("."), !o[i]) for (let t of Object.keys(o)) try {
			let n = yt(I(t, e), r);
			if (n !== void 0) return n;
		} catch {}
	}
	try {
		return yt(I(i, e), a);
	} catch {
		return;
	}
}, kt = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return Ct(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = wt(t), o = r(e, i);
			return o === void 0 ? n(e) : u(l, { children: Tt(Z(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = wt(t), o = r(e, i);
			return o === void 0 ? n(e) : Et(Z(o), a);
		}
	});
}, At = ((e) => {
	let { locale: t } = n(q) ?? {};
	return o(() => Dt(t, e), [t, e]);
}), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-intl-app/components/pages/contact/ContactForm.tsx";
function jt() {
	let e = At(), t = At("header"), n = i(), r = i(), a = i(), o = i();
	return p("form", {
		className: "space-y-6",
		children: [
			p("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [p("div", { children: [p("label", {
					htmlFor: n,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: "Name"
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 18,
					columnNumber: 11
				}, this), p("input", {
					id: n,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: e("contact-form.yourName")
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 24,
					columnNumber: 11
				}, this)] }, void 0, !0, {
					fileName: Q,
					lineNumber: 17,
					columnNumber: 9
				}, this), p("div", { children: [p("label", {
					htmlFor: r,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: "Email"
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 31,
					columnNumber: 11
				}, this), p("input", {
					id: r,
					type: "email",
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: "you@example.com"
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 37,
					columnNumber: 11
				}, this)] }, void 0, !0, {
					fileName: Q,
					lineNumber: 30,
					columnNumber: 9
				}, this)]
			}, void 0, !0, {
				fileName: Q,
				lineNumber: 16,
				columnNumber: 7
			}, this),
			p("div", { children: [p("label", {
				htmlFor: a,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Topic"
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 46,
				columnNumber: 9
			}, this), p("select", {
				id: a,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				children: [
					p("option", { children: e("contact-form.bugReport") }, void 0, !1, {
						fileName: Q,
						lineNumber: 56,
						columnNumber: 11
					}, this),
					p("option", { children: e("contact-form.newBenchmarkIdea") }, void 0, !1, {
						fileName: Q,
						lineNumber: 57,
						columnNumber: 11
					}, this),
					p("option", { children: e("contact-form.methodologyQuestion") }, void 0, !1, {
						fileName: Q,
						lineNumber: 58,
						columnNumber: 11
					}, this),
					p("option", { children: t("contact") }, void 0, !1, {
						fileName: Q,
						lineNumber: 59,
						columnNumber: 11
					}, this),
					p("option", { children: "Other" }, void 0, !1, {
						fileName: Q,
						lineNumber: 60,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: Q,
				lineNumber: 52,
				columnNumber: 9
			}, this)] }, void 0, !0, {
				fileName: Q,
				lineNumber: 45,
				columnNumber: 7
			}, this),
			p("div", { children: [p("label", {
				htmlFor: o,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Message"
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 64,
				columnNumber: 9
			}, this), p("textarea", {
				id: o,
				rows: 5,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: e("contact-form.describeYourQuestionOrIdea")
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 70,
				columnNumber: 9
			}, this)] }, void 0, !0, {
				fileName: Q,
				lineNumber: 63,
				columnNumber: 7
			}, this),
			p("button", {
				type: "submit",
				className: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: e("contact.contact-form.sendMessage")
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 77,
				columnNumber: 7
			}, this)
		]
	}, void 0, !0, {
		fileName: Q,
		lineNumber: 15,
		columnNumber: 5
	}, this);
}
function Mt() {
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
function Nt(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var Pt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-intl-app/components/AppProviders.tsx";
function Ft({ children: e, locale: t }) {
	let [n] = c(() => typeof performance < "u" ? performance.now() : 0);
	return a(() => {
		Nt("AppRoot", n);
	}, [n]), r(() => {
		document.documentElement.lang = t;
	}, [t]), r(() => {
		Mt();
	}, []), p(vt, {
		locale: t,
		timeZone: "UTC",
		children: e
	}, void 0, !1, {
		fileName: Pt,
		lineNumber: 32,
		columnNumber: 7
	}, this);
}
var It = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-intl-app/scripts/Wrapper.tsx", Lt = "en";
function Rt({ children: e }) {
	return p(Ft, {
		locale: Lt,
		children: e
	}, void 0, !1, {
		fileName: It,
		lineNumber: 11,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-intl-app/components/pages/contact/ContactForm.wrapper.tsx";
function zt() {
	return p(Rt, { children: p(jt, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { zt as default };
