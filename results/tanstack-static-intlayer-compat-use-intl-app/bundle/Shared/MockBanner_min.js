import e, { Fragment as t, createContext as n, useContext as r, useEffect as i, useMemo as a, useRef as o, useState as s } from "react";
import { Fragment as c, jsx as l, jsxs as ee } from "react/jsx-runtime";
import { jsxDEV as u } from "react/jsx-dev-runtime";
var d = /* @__PURE__ */ new WeakMap(), f = 0, te = (e) => {
	if (!e) return "base";
	let t = d.get(e);
	if (t) return t;
	f += 1;
	let n = `p${f}`;
	return d.set(e, n), n;
}, p = 256, m = /* @__PURE__ */ new WeakMap(), h = (e) => typeof e == "object" && !!e, ne = (e, t, n) => `${e}_${t}_${te(n)}`, re = (e, t) => {
	if (!h(e)) return { hit: !1 };
	let n = m.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, g = (e, t, n) => {
	if (!h(e)) return n;
	let r = m.get(e);
	return r || (r = /* @__PURE__ */ new Map(), m.set(e, r)), r.size >= p && r.clear(), r.set(t, n), n;
}, ie = "translation", ae = "enumeration", oe = "plural", _ = "insertion", se = "object", ce = "array", v = "markdown", y = "html", le = "gender", ue = "select", b = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => b(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => b(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ce,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: se,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = b(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = b(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, de = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, fe = (e, t) => e[de(e, t) ?? "fallback"], x = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), S = "default", pe = /[^A-Za-z0-9._&=-]/g, C = /[^A-Za-z0-9._-]/g, me = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, w = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, me);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, T = (e) => e === void 0 ? S : typeof e == "string" ? w(e, pe) : Object.keys(e).sort().map((t) => `${w(t, C)}=${w(String(e[t]), C)}`).join("&"), E = (e) => Array.isArray(e) ? e.length === 0 ? [S] : e.map(T) : [T(e)], he = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? S : e[0] ?? "default";
}, ge = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, _e = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, ve = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, ye = (e, t) => {
	if (!_e(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? S : he(E(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ge(e, n, t, s)).map((t) => ve(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, be = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, xe = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? E(n).join(",") : String(n)}`;
}).join("|") : "", D = {
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
}, O = {
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
}, k = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, A = "\x1B[0m", Se = "\x1B[34m", Ce = "\x1B[31m", we = "\x1B[32m", Te = "\x1B[38;5;3m", Ee = "\x1B[36m", De = (e) => e, Oe = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = De(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, ke = (e, t) => (n, r) => Oe(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), j = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? A : n : A}` : e, Ae = (e, t = Te, n = A) => [e].flat().map((e) => j(e, t, n)).join(", ");
j("✗", Ce), j("✓", we), j("⏲", Se);
var M = () => ({}), je = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), N = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : je.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : N(e ? `${e}.${String(n)}` : String(n)) }), P = /* @__PURE__ */ new Set(), F = (e, t, n) => {
	let r = M()[e];
	return r ? Qe(r, t, n) : (P.has(e) || (ke({ log: k })(typeof window > "u" ? `Dictionary ${Ae(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), P.add(e)), N(e));
}, Me = 50, I = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Set(), Ne = (e) => {
	L.has(e) || (L.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Pe = {
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
}, Fe = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Ne(e), Pe[e]);
};
function R(e, t, n) {
	let r = t ?? D?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = I.get(a);
	o || (o = /* @__PURE__ */ new Map(), I.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Fe(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Me && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Ie = (e, t, n) => e[R("PluralRules", n).select(t)] ?? e.other, Le = (e, t) => {
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
}, Re = (e, t, n) => {
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
}, ze = (e) => {
	if (typeof e == "string") return e;
	if (V(e)) return e.nodeType === "html" ? e[y] : e[v];
}, Be = (e, t) => {
	if (typeof e == "string") return t;
	if (V(e)) {
		let n = e.nodeType === "html" ? y : v;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Ve = (e, t, n, r, i) => {
	let a = Be(e, x(ze(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, H = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, He = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? H : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ie,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return Re(o, e, t);
	}
}, Ue = H, We = H, Ge = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? H : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: _ }], i = e[_], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || V(e),
			transform: (e, n, r) => {
				if (V(e)) return (i) => Ve(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = x(i, e);
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
}, Ke = H, qe = H, Je = (e) => H, Ye = H, Xe = (e, t = !0) => [
	He(e ?? D.defaultLocale, t ? D.defaultLocale : void 0),
	Ue,
	We,
	Ge,
	Je(e ?? D.defaultLocale),
	Ye,
	Ke,
	qe
], Ze = (e, t, n = []) => b(e, {
	...t,
	plugins: n
}), Qe = (e, t, n) => {
	let { locale: r, selector: i } = be(t), a = ne(r ?? D.defaultLocale, xe(i), n), o = re(e, a);
	if (o.hit) return o.content;
	let s = n ?? Xe(r), c = ye(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Ze(e.content, t, s);
	};
	return c === null ? g(e, a, null) : Array.isArray(c) ? g(e, a, c.map(l)) : g(e, a, l(c));
}, U = (e, t, n = ".") => {
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
}, W = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], G = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, K = (e, t, n, r) => {
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
}, $e = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = G(t, r);
	return o === void 0 ? e : i ? K(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = G(t, r);
	return o === void 0 ? e : K(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = G(t, n);
	return r === void 0 ? e : String(r);
}), q = (e, t) => e[t] ?? e.count ?? e.n, J = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return $e(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return J(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(J(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return J(r[_], t, n);
	if (r.nodeType === "html") return J(r[y], t, n);
	if (r.nodeType === "plural") {
		let e = r[oe];
		return J(Ie(e, Number(q(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[ae], i = W.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) W.includes(t) || (o[t] = n);
		let s = q(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = R("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? fe(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return J(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[ue], i = q(t, typeof r.variable == "string" ? r.variable : "value");
		return J(Le(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[le];
		return J(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, et = (e, t = {}, n = "en") => {
	let r = J(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Y = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : t.push({
			tag: o,
			children: Y(s)
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, X = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, Z = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = Z(e.children, n), a = n[e.tag];
	return typeof a == "function" ? l(t, { children: a(i) }, r) : l(t, { children: i }, r);
}), tt = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = tt(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), nt = (e, t) => {
	let [n, ...r] = (t ?? "").split("."), i = r.join(".");
	return it(e, (t) => rt(e, n ?? "", i, t), (e) => t ? `${t}.${e}` : e);
}, rt = (e, t, n, r) => {
	let i = t, a = n ? `${n}.${r}` : r, o = M();
	if (!i) {
		let [t, ...n] = r.split(".");
		if (i = t ?? r, a = n.join("."), !o[i]) for (let t of Object.keys(o)) try {
			let n = U(F(t, e), r);
			if (n !== void 0) return n;
		} catch {}
	}
	try {
		return U(F(i, e), a);
	} catch {
		return;
	}
}, it = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return et(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = X(t), o = r(e, i);
			return o === void 0 ? n(e) : l(c, { children: Z(Y(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = X(t), o = r(e, i);
			return o === void 0 ? n(e) : tt(Y(o), a);
		}
	});
}, at = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, ot = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = at(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, st = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var Q = {
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
}, ct = (e = Q) => {
	let { locales: t } = D;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!st) for (let t = 0; t < (O.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(O.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, lt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !st && O.storage.cookies) for (let n = 0; n < O.storage.cookies.length; n++) {
		let { name: r, attributes: i } = O.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: at(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ot(r, e, i));
			} catch {}
		}
	}
}, ut = ct(Q), dt = (e, t) => lt(e, {
	...Q,
	isCookieEnabled: t
}), ft = () => {
	let { locale: e } = r($) ?? {}, t = o(null);
	i(() => {}, []), i(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, pt = ({ children: e }) => (ft(), e), mt = () => {
	let { locale: e } = r($) ?? {}, t = o(null);
	i(() => {}, []), i(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, ht = ({ children: e }) => (mt(), e), gt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, _t = (e, t = D?.locales, n = D?.defaultLocale) => {
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
}, $ = n({
	locale: ut ?? D?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), vt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: a, disableEditor: o, isCookieEnabled: c }) => {
	let { locales: ee, defaultLocale: u } = D ?? {}, [d, f] = s(e ?? ut ?? t ?? u);
	i(() => {
		e && e !== d && f(e);
	}, [e]), i(() => {
		gt();
	}, []);
	let te = a ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!ee?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			f(e), dt(e, c);
		}
	}), p = _t(d);
	return l($.Provider, {
		value: {
			locale: p,
			setLocale: te,
			variant: n,
			disableEditor: o
		},
		children: r
	});
}, yt = ({ children: e, ...t }) => ee(vt, {
	...t,
	children: [
		l(pt, {}),
		l(ht, {}),
		e
	]
}), bt = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && ke({ log: k })(`${j("IntlProvider", Ee)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), l(yt, {
	locale: e,
	children: t
}, String(e))), xt = ((e) => {
	let { locale: t } = r($) ?? {};
	return a(() => nt(t, e), [t, e]);
}), St = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/MockBanner.tsx", Ct = () => {
	let e = xt();
	return u("div", {
		className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
		children: e("mockBanner")
	}, void 0, !1, {
		fileName: St,
		lineNumber: 6,
		columnNumber: 5
	}, void 0);
}, wt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/scripts/Wrapper.tsx";
function Tt({ children: t }) {
	return u(e.Suspense, {
		fallback: null,
		children: u(bt, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		}, void 0, !1, {
			fileName: wt,
			lineNumber: 9,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: wt,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var Et = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/MockBanner.wrapper.tsx";
function Dt() {
	return u(Tt, { children: u(Ct, {}, void 0, !1, {
		fileName: Et,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: Et,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Dt as default };
