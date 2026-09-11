import { Fragment as e, createContext as t, useContext as n, useEffect as r, useLayoutEffect as i, useMemo as a, useRef as o, useState as s } from "react";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
import { usePathname as d } from "next/navigation";
import { Fragment as f, jsxDEV as p } from "react/jsx-dev-runtime";
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
}, ee = /* @__PURE__ */ new WeakMap(), te = 0, ne = (e) => {
	if (!e) return "base";
	let t = ee.get(e);
	if (t) return t;
	te += 1;
	let n = `p${te}`;
	return ee.set(e, n), n;
}, re = 256, _ = /* @__PURE__ */ new WeakMap(), v = (e) => typeof e == "object" && !!e, ie = (e, t, n) => `${e}_${t}_${ne(n)}`, ae = (e, t) => {
	if (!v(e)) return { hit: !1 };
	let n = _.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, y = (e, t, n) => {
	if (!v(e)) return n;
	let r = _.get(e);
	return r || (r = /* @__PURE__ */ new Map(), _.set(e, r)), r.size >= re && r.clear(), r.set(t, n), n;
}, oe = "translation", se = "enumeration", ce = "plural", b = "insertion", le = "object", ue = "array", de = "markdown", x = "html", fe = "gender", pe = "select", S = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => S(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => S(e, {
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
			n[r] = S(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = S(e[r], i);
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
}, he = (e, t) => e[me(e, t) ?? "fallback"], C = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), w = "default", ge = /[^A-Za-z0-9._&=-]/g, T = /[^A-Za-z0-9._-]/g, _e = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, E = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, _e);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, D = (e) => e === void 0 ? w : typeof e == "string" ? E(e, ge) : Object.keys(e).sort().map((t) => `${E(t, T)}=${E(String(e[t]), T)}`).join("&"), O = (e) => Array.isArray(e) ? e.length === 0 ? [w] : e.map(D) : [D(e)], ve = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? w : e[0] ?? "default";
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
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? w : ve(O(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ye(e, n, t, s)).map((t) => xe(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Ce = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, we = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? O(n).join(",") : String(n)}`;
}).join("|") : "", k = "\x1B[0m", Te = "\x1B[34m", Ee = "\x1B[31m", De = "\x1B[32m", Oe = "\x1B[38;5;3m", ke = "\x1B[36m", Ae = (e) => e, je = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Ae(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, A = (e, t) => (n, r) => je(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), j = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? k : n : k}` : e, Me = (e, t = Oe, n = k) => [e].flat().map((e) => j(e, t, n)).join(", ");
j("✗", Ee), j("✓", De), j("⏲", Te);
var M = () => ({}), Ne = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), N = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Ne.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : N(e ? `${e}.${String(n)}` : String(n)) }), P = /* @__PURE__ */ new Set(), F = (e, t, n) => {
	let r = M()[e];
	return r ? et(r, t, n) : (P.has(e) || (A({ log: g })(typeof window > "u" ? `Dictionary ${Me(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), P.add(e)), N(e));
}, Pe = 50, I = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Set(), Fe = (e) => {
	L.has(e) || (L.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Ie = {
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
}, Le = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Fe(e), Ie[e]);
};
function R(e, t, n) {
	let r = t ?? m?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = I.get(a);
	o || (o = /* @__PURE__ */ new Map(), I.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Le(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Pe && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Re = (e, t, n) => e[R("PluralRules", n).select(t)] ?? e.other, ze = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, z = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, B = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (z(e) && z(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : B(e[r], t[r]));
		return n;
	}
	return e;
}, Be = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => B(e, t));
}, V = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ve = (e) => {
	if (typeof e == "string") return e;
	if (V(e)) return e.nodeType === "html" ? e[x] : e[de];
}, He = (e, t) => {
	if (typeof e == "string") return t;
	if (V(e)) {
		let n = e.nodeType === "html" ? x : de;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Ue = (e, t, n, r, i) => {
	let a = He(e, C(Ve(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, H = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, We = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? H : {
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
		return Be(o, e, t);
	}
}, Ge = H, Ke = H, qe = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? H : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: b }], i = e[b], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || V(e),
			transform: (e, n, r) => {
				if (V(e)) return (i) => Ue(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = C(i, e);
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
}, Je = H, Ye = H, Xe = (e) => H, Ze = H, Qe = (e, t = !0) => [
	We(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
	Ge,
	Ke,
	qe,
	Xe(e ?? m.defaultLocale),
	Ze,
	Je,
	Ye
], $e = (e, t, n = []) => S(e, {
	...t,
	plugins: n
}), et = (e, t, n) => {
	let { locale: r, selector: i } = Ce(t), a = ie(r ?? m.defaultLocale, we(i), n), o = ae(e, a);
	if (o.hit) return o.content;
	let s = n ?? Qe(r), c = Se(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return $e(e.content, t, s);
	};
	return c === null ? y(e, a, null) : Array.isArray(c) ? y(e, a, c.map(l)) : y(e, a, l(c));
}, tt = ["en"], nt = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), U = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, rt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = U(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, W = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var G = {
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
}, it = (e = G) => {
	let { locales: t } = m;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!W) for (let t = 0; t < (h.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(h.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, at = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !W && h.storage.cookies) for (let n = 0; n < h.storage.cookies.length; n++) {
		let { name: r, attributes: i } = h.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: U(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, rt(r, e, i));
			} catch {}
		}
	}
}, ot = it(G), st = (e, t) => at(e, {
	...G,
	isCookieEnabled: t
}), ct = () => {
	let { locale: e } = n(K) ?? {}, t = o(null);
	r(() => {}, []), r(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, lt = ({ children: e }) => (ct(), e), ut = () => {
	let { locale: e } = n(K) ?? {}, t = o(null);
	r(() => {}, []), r(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, dt = ({ children: e }) => (ut(), e), ft = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, pt = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? m?.defaultLocale ?? "en",
	mode: e.mode ?? h?.mode ?? "prefix-no-default",
	locales: e.locales ?? m?.locales ?? tt,
	rewrite: e.rewrite ?? h?.rewrite,
	domains: e.domains ?? h?.domains
}), mt = (e, t) => !!e && (t ?? m.locales).includes(e), ht = (e, t = m?.locales, n = m?.defaultLocale) => {
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
}, gt = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = pt(t);
	if (!n || !r) return n;
	let a = nt(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return mt(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (mt(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, K = t({
	locale: ot ?? m?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), _t = ({ locale: e, defaultLocale: t, variant: n, children: i, setLocale: a, disableEditor: o, isCookieEnabled: c }) => {
	let { locales: u, defaultLocale: d } = m ?? {}, [f, p] = s(e ?? ot ?? t ?? d);
	r(() => {
		e && e !== f && p(e);
	}, [e]), r(() => {
		ft();
	}, []);
	let h = a ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!u?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), st(e, c);
		}
	}), g = ht(f);
	return l(K.Provider, {
		value: {
			locale: g,
			setLocale: h,
			variant: n,
			disableEditor: o
		},
		children: i
	});
}, vt = ({ children: e, ...t }) => u(_t, {
	...t,
	children: [
		l(lt, {}),
		l(dt, {}),
		e
	]
}), yt = ({ locale: e, children: t, messages: n, timeZone: r, now: i, ...a }) => {
	n !== void 0 && A({ log: g })(`${j("NextIntlClientProvider", ke)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`);
	let o = d(), s = h?.mode ?? "prefix-no-default", c = e ?? (s === "prefix-all" || s === "prefix-no-default" ? gt(o) : void 0);
	return l(vt, {
		locale: c,
		...a,
		children: t
	}, String(c));
}, bt = (e, t, n = ".") => {
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
}, xt = [
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
}, St = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? R("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? R("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : R("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return R("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Ct = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = q(t, r);
	return o === void 0 ? e : i ? St(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = q(t, r);
	return o === void 0 ? e : St(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = q(t, n);
	return r === void 0 ? e : String(r);
}), J = (e, t) => e[t] ?? e.count ?? e.n, Y = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Ct(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return Y(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(Y(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return Y(r[b], t, n);
	if (r.nodeType === "html") return Y(r[x], t, n);
	if (r.nodeType === "plural") {
		let e = r[ce];
		return Y(Re(e, Number(J(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[se], i = xt.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) xt.includes(t) || (o[t] = n);
		let s = J(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = R("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? he(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return Y(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[pe], i = J(t, typeof r.variable == "string" ? r.variable : "value");
		return Y(ze(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[fe];
		return Y(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, wt = (e, t = {}, n = "en") => {
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
}, Tt = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, Et = (t, n) => t.map((t, r) => {
	if (typeof t == "string") return t;
	let i = Et(t.children, n), a = n[t.tag];
	return typeof a == "function" ? l(e, { children: a(i) }, r) : l(e, { children: i }, r);
}), Dt = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = Dt(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), Ot = (e, t) => {
	let [n, ...r] = (t ?? "").split("."), i = r.join(".");
	return At(e, (t) => kt(e, n ?? "", i, t), (e) => t ? `${t}.${e}` : e);
}, kt = (e, t, n, r) => {
	let i = t, a = n ? `${n}.${r}` : r, o = M();
	if (!i) {
		let [t, ...n] = r.split(".");
		if (i = t ?? r, a = n.join("."), !o[i]) for (let t of Object.keys(o)) try {
			let n = bt(F(t, e), r);
			if (n !== void 0) return n;
		} catch {}
	}
	try {
		return bt(F(i, e), a);
	} catch {
		return;
	}
}, At = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return wt(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = Tt(t), o = r(e, i);
			return o === void 0 ? n(e) : l(c, { children: Et(X(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = Tt(t), o = r(e, i);
			return o === void 0 ? n(e) : Dt(X(o), a);
		}
	});
}, Z = ((e) => {
	let { locale: t } = n(K) ?? {};
	return a(() => Ot(t, e), [t, e]);
}), jt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-next-intl-app/components/MockBanner.tsx", Mt = () => {
	let e = Z();
	return p("div", {
		className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
		children: e("mockBanner")
	}, void 0, !1, {
		fileName: jt,
		lineNumber: 8,
		columnNumber: 5
	}, void 0);
}, Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-next-intl-app/components/pages/settings/SettingsHeader.tsx";
function Nt() {
	let e = Z(), t = Z("settings.settings-header");
	return p(f, { children: [
		p(Mt, {}, void 0, !1, {
			fileName: Q,
			lineNumber: 11,
			columnNumber: 7
		}, this),
		p("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: e("header.settings")
		}, void 0, !1, {
			fileName: Q,
			lineNumber: 12,
			columnNumber: 7
		}, this),
		p("p", {
			className: "mb-8 text-muted-foreground",
			children: t("manageYourAccountPreferencesAnd")
		}, void 0, !1, {
			fileName: Q,
			lineNumber: 15,
			columnNumber: 7
		}, this)
	] }, void 0, !0, {
		fileName: Q,
		lineNumber: 10,
		columnNumber: 5
	}, this);
}
function Pt() {
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
function Ft(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var It = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-next-intl-app/components/AppProviders.tsx";
function Lt({ children: e, locale: t }) {
	let [n] = s(() => typeof performance < "u" ? performance.now() : 0);
	return i(() => {
		Ft("AppRoot", n);
	}, [n]), r(() => {
		document.documentElement.lang = t;
	}, [t]), r(() => {
		Pt();
	}, []), p(yt, {
		locale: t,
		timeZone: "UTC",
		children: e
	}, void 0, !1, {
		fileName: It,
		lineNumber: 32,
		columnNumber: 7
	}, this);
}
var Rt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-next-intl-app/scripts/Wrapper.tsx", zt = "en";
function Bt({ children: e }) {
	return p(Lt, {
		locale: zt,
		children: e
	}, void 0, !1, {
		fileName: Rt,
		lineNumber: 11,
		columnNumber: 10
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-next-intl-app/components/pages/settings/SettingsHeader.wrapper.tsx";
function Vt() {
	return p(Bt, { children: p(Nt, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Vt as default };
