import e, { Fragment as t, createContext as n, useContext as r, useEffect as i, useMemo as a, useRef as o, useState as s } from "react";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
import { jsxDEV as d } from "react/jsx-dev-runtime";
var f = /* @__PURE__ */ new WeakMap(), p = 0, m = (e) => {
	if (!e) return "base";
	let t = f.get(e);
	if (t) return t;
	p += 1;
	let n = `p${p}`;
	return f.set(e, n), n;
}, h = 256, g = /* @__PURE__ */ new WeakMap(), ee = (e) => typeof e == "object" && !!e, te = (e, t, n) => `${e}_${t}_${m(n)}`, ne = (e, t) => {
	if (!ee(e)) return { hit: !1 };
	let n = g.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, _ = (e, t, n) => {
	if (!ee(e)) return n;
	let r = g.get(e);
	return r || (r = /* @__PURE__ */ new Map(), g.set(e, r)), r.size >= h && r.clear(), r.set(t, n), n;
}, re = "translation", ie = "enumeration", ae = "plural", v = "insertion", oe = "object", se = "array", y = "markdown", b = "html", ce = "gender", le = "select", x = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => x(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => x(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: se,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: oe,
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
}, ue = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, de = (e, t) => e[ue(e, t) ?? "fallback"], fe = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), S = "default", pe = /[^A-Za-z0-9._&=-]/g, C = /[^A-Za-z0-9._-]/g, me = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, w = (e, t) => {
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
}, Se = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, k = "\x1B[0m", Ce = "\x1B[34m", we = "\x1B[31m", Te = "\x1B[32m", Ee = "\x1B[38;5;3m", De = "\x1B[36m", Oe = (e) => e, ke = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Oe(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Ae = (e, t) => (n, r) => ke(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), A = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? k : n : k}` : e, je = (e, t = Ee, n = k) => [e].flat().map((e) => A(e, t, n)).join(", ");
A("✗", we), A("✓", Te), A("⏲", Ce);
var j = () => ({}), Me = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), M = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Me.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : M(e ? `${e}.${String(n)}` : String(n)) }), N = /* @__PURE__ */ new Set(), P = (e, t, n) => {
	let r = j()[e];
	return r ? $e(r, t, n) : (N.has(e) || (Ae({ log: Se })(typeof window > "u" ? `Dictionary ${je(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), N.add(e)), M(e));
}, Ne = 50, F = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Set(), Pe = (e) => {
	I.has(e) || (I.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
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
function L(e, t, n) {
	let r = t ?? D?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = F.get(a);
	o || (o = /* @__PURE__ */ new Map(), F.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Ie(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Ne && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Le = (e, t, n) => e[L("PluralRules", n).select(t)] ?? e.other, Re = (e, t) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => z(e, t));
}, B = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Be = (e) => {
	if (typeof e == "string") return e;
	if (B(e)) return e.nodeType === "html" ? e[b] : e[y];
}, Ve = (e, t) => {
	if (typeof e == "string") return t;
	if (B(e)) {
		let n = e.nodeType === "html" ? b : y;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, He = (e, t, n, r, i) => {
	let a = Ve(e, fe(Be(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, V = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Ue = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? V : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: re,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return ze(o, e, t);
	}
}, We = V, Ge = V, Ke = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? V : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: v }], i = e[v], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || B(e),
			transform: (e, n, r) => {
				if (B(e)) return (i) => He(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = fe(i, e);
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
}, qe = V, Je = V, Ye = (e) => V, Xe = V, Ze = (e, t = !0) => [
	Ue(e ?? D.defaultLocale, t ? D.defaultLocale : void 0),
	We,
	Ge,
	Ke,
	Ye(e ?? D.defaultLocale),
	Xe,
	qe,
	Je
], Qe = (e, t, n = []) => x(e, {
	...t,
	plugins: n
}), $e = (e, t, n) => {
	let { locale: r, selector: i } = be(t), a = te(r ?? D.defaultLocale, xe(i), n), o = ne(e, a);
	if (o.hit) return o.content;
	let s = n ?? Ze(r), c = ye(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Qe(e.content, t, s);
	};
	return c === null ? _(e, a, null) : Array.isArray(c) ? _(e, a, c.map(l)) : _(e, a, l(c));
}, H = (e, t, n = ".") => {
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
}, U = [
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
}, G = (e, t, n, r) => {
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
}, et = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = W(t, r);
	return o === void 0 ? e : i ? G(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = W(t, r);
	return o === void 0 ? e : G(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = W(t, n);
	return r === void 0 ? e : String(r);
}), K = (e, t) => e[t] ?? e.count ?? e.n, q = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return et(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return q(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(q(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return q(r[v], t, n);
	if (r.nodeType === "html") return q(r[b], t, n);
	if (r.nodeType === "plural") {
		let e = r[ae];
		return q(Le(e, Number(K(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[ie], i = U.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) U.includes(t) || (o[t] = n);
		let s = K(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = L("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? de(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return q(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[le], i = K(t, typeof r.variable == "string" ? r.variable : "value");
		return q(Re(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[ce];
		return q(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, tt = (e, t = {}, n = "en") => {
	let r = q(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, J = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : t.push({
			tag: o,
			children: J(s)
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, Y = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, X = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = X(e.children, n), a = n[e.tag];
	return typeof a == "function" ? l(t, { children: a(i) }, r) : l(t, { children: i }, r);
}), nt = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = nt(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), rt = (e, t) => {
	let [n, ...r] = (t ?? "").split("."), i = r.join(".");
	return at(e, (t) => it(e, n ?? "", i, t), (e) => t ? `${t}.${e}` : e);
}, it = (e, t, n, r) => {
	let i = t, a = n ? `${n}.${r}` : r, o = j();
	if (!i) {
		let [t, ...n] = r.split(".");
		if (i = t ?? r, a = n.join("."), !o[i]) for (let t of Object.keys(o)) try {
			let n = H(P(t, e), r);
			if (n !== void 0) return n;
		} catch {}
	}
	try {
		return H(P(i, e), a);
	} catch {
		return;
	}
}, at = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return tt(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = Y(t), o = r(e, i);
			return o === void 0 ? n(e) : l(c, { children: X(J(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = Y(t), o = r(e, i);
			return o === void 0 ? n(e) : nt(J(o), a);
		}
	});
}, ot = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, st = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = ot(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, ct = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var Z = {
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
}, lt = (e = Z) => {
	let { locales: t } = D;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!ct) for (let t = 0; t < (O.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(O.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ut = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !ct && O.storage.cookies) for (let n = 0; n < O.storage.cookies.length; n++) {
		let { name: r, attributes: i } = O.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: ot(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, st(r, e, i));
			} catch {}
		}
	}
}, dt = lt(Z), ft = (e, t) => ut(e, {
	...Z,
	isCookieEnabled: t
}), pt = () => {
	let { locale: e } = r(Q) ?? {}, t = o(null);
	i(() => {}, []), i(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, mt = ({ children: e }) => (pt(), e), ht = () => {
	let { locale: e } = r(Q) ?? {}, t = o(null);
	i(() => {}, []), i(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, gt = ({ children: e }) => (ht(), e), _t = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, vt = (e, t = D?.locales, n = D?.defaultLocale) => {
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
}, Q = n({
	locale: dt ?? D?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), yt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: a, disableEditor: o, isCookieEnabled: c }) => {
	let { locales: u, defaultLocale: d } = D ?? {}, [f, p] = s(e ?? dt ?? t ?? d);
	i(() => {
		e && e !== f && p(e);
	}, [e]), i(() => {
		_t();
	}, []);
	let m = a ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!u?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), ft(e, c);
		}
	}), h = vt(f);
	return l(Q.Provider, {
		value: {
			locale: h,
			setLocale: m,
			variant: n,
			disableEditor: o
		},
		children: r
	});
}, bt = ({ children: e, ...t }) => u(yt, {
	...t,
	children: [
		l(mt, {}),
		l(gt, {}),
		e
	]
}), xt = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && Ae({ log: Se })(`${A("IntlProvider", De)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), l(bt, {
	locale: e,
	children: t
}, String(e))), St = ((e) => {
	let { locale: t } = r(Q) ?? {};
	return a(() => rt(t, e), [t, e]);
}), Ct = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/scripts/EmptyComponent.tsx", wt = () => (St(), null);
function Tt() {
	return d(xt, {
		locale: "en",
		timeZone: "UTC",
		children: d(wt, {}, void 0, !1, {
			fileName: Ct,
			lineNumber: 13,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Ct,
		lineNumber: 12,
		columnNumber: 5
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/scripts/Wrapper.tsx";
function Et({ children: t }) {
	return d(e.Suspense, {
		fallback: null,
		children: d(xt, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		}, void 0, !1, {
			fileName: $,
			lineNumber: 9,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var Dt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/scripts/EmptyComponent.wrapper.tsx";
function Ot() {
	return d(Et, { children: d(Tt, {}, void 0, !1, {
		fileName: Dt,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: Dt,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Ot as default };
