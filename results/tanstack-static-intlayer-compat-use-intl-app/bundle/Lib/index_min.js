import e, { Fragment as t, createContext as n, useCallback as r, useContext as i, useEffect as a, useMemo as o, useState as s } from "react";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
var d = /* @__PURE__ */ new WeakMap(), f = 0, p = (e) => {
	if (!e) return "base";
	let t = d.get(e);
	if (t) return t;
	f += 1;
	let n = `p${f}`;
	return d.set(e, n), n;
}, m = 256, h = /* @__PURE__ */ new WeakMap(), g = (e) => typeof e == "object" && !!e, _ = (e, t, n) => `${e}_${t}_${p(n)}`, v = (e, t) => {
	if (!g(e)) return { hit: !1 };
	let n = h.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, y = (e, t, n) => {
	if (!g(e)) return n;
	let r = h.get(e);
	return r || (r = /* @__PURE__ */ new Map(), h.set(e, r)), r.size >= m && r.clear(), r.set(t, n), n;
}, b = "translation", x = "enumeration", ee = "plural", te = "condition", S = "insertion", ne = "object", re = "array", C = "markdown", w = "html", T = "gender", E = "select", D = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), O = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, O);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => O(e, D(t, e, {
		type: re,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: ne,
			key: r
		};
		if (t.eager) {
			n[r] = O(e[r], D(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = O(e[r], D(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, ie = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, ae = (e, t) => e[ie(e, t) ?? "fallback"], oe = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), k = {
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
}, A = {
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
}, j = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, M = "\x1B[0m", se = "\x1B[34m", ce = "\x1B[31m", le = "\x1B[32m", ue = "\x1B[38;5;3m", de = "\x1B[36m", fe = (e) => e, pe = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = fe(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, N = (e, t) => (n, r) => pe(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), P = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? M : n : M}` : e, me = (e, t = ue, n = M) => [e].flat().map((e) => P(e, t, n)).join(", ");
P("✗", ce), P("✓", le), P("⏲", se);
var F = () => ({}), he = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), I = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : he.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : I(e ? `${e}.${String(n)}` : String(n)) }), L = /* @__PURE__ */ new Set(), R = (e, t, n) => {
	let r = F()[e];
	return r ? Be(r, t, n) : (L.has(e) || (N({ log: j })(typeof window > "u" ? `Dictionary ${me(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), L.add(e)), I(e));
}, ge = 50, z = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Set(), _e = (e) => {
	B.has(e) || (B.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, ve = {
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
}, ye = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (_e(e), ve[e]);
};
function V(e, t, n) {
	let r = t ?? k?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = z.get(a);
	o || (o = /* @__PURE__ */ new Map(), z.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? ye(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > ge && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var be = (e, t, n) => e[V("PluralRules", n).select(t)] ?? e.other, xe = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, H = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, U = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !H(e) || !H(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? U(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, Se = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => U(e, t));
}, W = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ce = (e) => {
	if (typeof e == "string") return e;
	if (W(e)) return e.nodeType === "html" ? e[w] : e[C];
}, we = (e, t) => {
	if (typeof e == "string") return t;
	if (W(e)) {
		let n = e.nodeType === "html" ? w : C;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Te = (e, t, n, r, i) => {
	let a = we(e, oe(Ce(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, G = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Ee = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, De = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? G : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Se(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: b,
				key: e
			}]
		});
	}
}, Oe = G, ke = (e) => G, Ae = G, je = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? G : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: S }], i = e[S], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || W(e),
			transform: (e, n, r) => {
				if (W(e)) return (i) => Te(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = oe(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return Ne(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, K = [
	x,
	te,
	ee,
	T,
	E
], Me = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !K.includes(i)) return t;
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
		return !r && Ee(i) ? i(n) : i;
	};
}, Ne = (e, t) => typeof t == "function" && K.includes(e?.nodeType ?? "") ? (n) => Me(e, t, n) : t, Pe = G, Fe = G, Ie = (e) => G, Le = G, Re = (e, t = !0) => [
	De(e ?? k.defaultLocale, t ? k.defaultLocale : void 0),
	Oe,
	ke(e ?? k.defaultLocale),
	Ae,
	je,
	Ie(e ?? k.defaultLocale),
	Le,
	Pe,
	Fe
].filter((e) => e !== G), ze = (e, t, n = []) => O(e, {
	...t,
	plugins: n
}), q = /* @__PURE__ */ new WeakSet(), Be = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = _(r ?? k.defaultLocale, "", n), o = v(e, a);
	if (o.hit) return o.content;
	let s = n ?? Re(r), c = e, l = (e) => {
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
			return ze(e.content, t, s);
		} finally {
			t.eager && q.delete(e);
		}
	};
	return c === null ? y(e, a, null) : Array.isArray(c) ? y(e, a, c.map(l)) : y(e, a, l(c));
}, J = (e, t, n = ".") => {
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
}, Ve = [
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
}, He = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? V("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? V("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : V("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return V("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Ue = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = Y(t, r);
	return o === void 0 ? e : i ? He(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = Y(t, r);
	return o === void 0 ? e : He(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = Y(t, n);
	return r === void 0 ? e : String(r);
}), X = (e, t) => e[t] ?? e.count ?? e.n, Z = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Ue(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return Z(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(Z(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return Z(r[S], t, n);
	if (r.nodeType === "html") return Z(r[w], t, n);
	if (r.nodeType === "plural") {
		let e = r[ee];
		return Z(be(e, Number(X(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[x], i = Ve.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Ve.includes(t) || (o[t] = n);
		let s = X(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = V("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? ae(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return Z(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[E], i = X(t, typeof r.variable == "string" ? r.variable : "value");
		return Z(xe(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[T];
		return Z(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, We = (e, t = {}, n = "en") => {
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
}, Ge = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, Ke = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = Ke(e.children, n), a = n[e.tag];
	return typeof a == "function" ? l(t, { children: a(i) }, r) : l(t, { children: i }, r);
}), qe = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = qe(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), Je = (e, t) => {
	let [n, ...r] = (t ?? "").split("."), i = r.join(".");
	return Xe(e, (t) => Ye(e, n ?? "", i, t), (e) => t ? `${t}.${e}` : e);
}, Ye = (e, t, n, r) => {
	let i = t, a = n ? `${n}.${r}` : r, o = F();
	if (!i) {
		let [t, ...n] = r.split(".");
		if (i = t ?? r, a = n.join("."), !o[i]) for (let t of Object.keys(o)) try {
			let n = J(R(t, e), r);
			if (n !== void 0) return n;
		} catch {}
	}
	try {
		return J(R(i, e), a);
	} catch {
		return;
	}
}, Xe = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return We(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = Ge(t), o = r(e, i);
			return o === void 0 ? n(e) : l(c, { children: Ke(Q(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = Ge(t), o = r(e, i);
			return o === void 0 ? n(e) : qe(Q(o), a);
		}
	});
}, Ze = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, Qe = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = Ze(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, $e = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var $ = {
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
}, et = (e = $) => {
	let { locales: t } = k;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!$e) for (let t = 0; t < (A.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(A.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, tt = !1, nt, rt = () => typeof window > "u" ? et($) : (tt ||= (nt = et($), !0), nt), it = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (tt = !1, !$e && A.storage.cookies)) for (let n = 0; n < A.storage.cookies.length; n++) {
		let { name: r, attributes: i } = A.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: Ze(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, Qe(r, e, i));
			} catch {}
		}
	}
}, at = rt, ot = (e, t) => it(e, {
	...$,
	isCookieEnabled: t
}), st = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, ct = (e, t = k?.locales, n = k?.defaultLocale) => {
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
}, lt = n({
	get locale() {
		return at() ?? k?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), ut = ({ locale: e, defaultLocale: t, variant: n, children: i, setLocale: c, disableEditor: u, isCookieEnabled: d }) => {
	let { locales: f, defaultLocale: p } = k ?? {}, [m, h] = s(() => e ?? at() ?? t ?? p), [g, _] = s(e);
	e !== g && (_(e), e && e !== m && h(e)), a(() => {
		st();
	}, []);
	let v = r((e) => {
		if (m.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			h(e), ot(e, d);
		}
	}, [
		m,
		f,
		d
	]), y = c ?? v, b = ct(m), x = o(() => ({
		locale: b,
		setLocale: y,
		variant: n,
		disableEditor: u
	}), [
		b,
		y,
		n,
		u
	]);
	return l(lt.Provider, {
		value: x,
		children: i
	});
}, dt = ({ children: e, ...t }) => u(ut, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), ft = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && N({ log: j })(`${P("IntlProvider", de)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), l(dt, {
	locale: e,
	children: t
}, String(e))), pt = ((e) => {
	let { locale: t } = i(lt) ?? {};
	return o(() => Je(t, e), [t, e]);
}), mt = () => (pt(), null);
function ht() {
	return l(ft, {
		locale: "en",
		timeZone: "UTC",
		children: l(mt, {})
	});
}
function gt({ children: t }) {
	return l(e.Suspense, {
		fallback: null,
		children: l(ft, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		})
	});
}
function _t() {
	return l(gt, { children: l(ht, {}) });
}
export { _t as default };
