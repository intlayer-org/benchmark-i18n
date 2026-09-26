import { computed as e, defineComponent as t, getCurrentInstance as n, h as r, inject as i, readonly as a, ref as o, renderSlot as s } from "vue";
import c from "../.intlayer/dictionary/faq.json";
import l from "../.intlayer/dictionary/header.json";
import u from "../.intlayer/dictionary/settings.json";
import d from "../.intlayer/dictionary/footer.json";
import ee from "../.intlayer/dictionary/mockBanner.json";
import f from "../.intlayer/dictionary/shared.json";
import p from "../.intlayer/dictionary/careers.json";
import te from "../.intlayer/dictionary/notFound.json";
import ne from "../.intlayer/dictionary/pricing.json";
import re from "../.intlayer/dictionary/products.json";
import ie from "../.intlayer/dictionary/contact.json";
import ae from "../.intlayer/dictionary/themeToggle.json";
import oe from "../.intlayer/dictionary/about.json";
import se from "../.intlayer/dictionary/home.json";
import ce from "../.intlayer/dictionary/team.json";
import le from "../.intlayer/dictionary/blog.json";
var ue = (e, t, n) => typeof e == "string" ? n?.[t]?.[e] ?? n?.[t.split("-")[0] ?? ""]?.[e] : e, de = (e, t, n, r) => {
	let i = e instanceof Date ? e : new Date(e), a = ue(t, n, r);
	try {
		return new Intl.DateTimeFormat(n, a).format(i);
	} catch {
		return String(e);
	}
}, fe = (e, t, n, r) => {
	let i = ue(t, n, r);
	try {
		return new Intl.NumberFormat(n, i).format(e);
	} catch {
		return String(e);
	}
}, pe = "translation", me = "enumeration", he = "plural", m = "insertion", ge = "object", _e = "array", h = "markdown", g = "html", ve = "gender", ye = "select", _ = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => _(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => _(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: _e,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ge,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = _(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = _(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, v = (e, t, n = ".") => {
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
}, be = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, xe = (e, t) => e[be(e, t) ?? "fallback"], y = {
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
}, b = {
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
}, x = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, Se = 50, S = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Set(), Ce = (e) => {
	C.has(e) || (C.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, we = {
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
}, Te = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Ce(e), we[e]);
};
function w(e, t, n) {
	let r = t ?? y?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = S.get(a);
	o || (o = /* @__PURE__ */ new Map(), S.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Te(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Se && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Ee = (e, t, n) => e[w("PluralRules", n).select(t)] ?? e.other, De = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, T = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], E = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, Oe = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? w("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? w("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : w("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return w("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, ke = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = E(t, r);
	return o === void 0 ? e : i ? Oe(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = E(t, r);
	return o === void 0 ? e : Oe(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = E(t, n);
	return r === void 0 ? e : String(r);
}), D = (e, t) => e[t] ?? e.count ?? e.n, O = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return ke(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return O(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(O(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return O(r[m], t, n);
	if (r.nodeType === "html") return O(r[g], t, n);
	if (r.nodeType === "plural") {
		let e = r[he];
		return O(Ee(e, Number(D(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[me], i = T.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) T.includes(t) || (o[t] = n);
		let s = D(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = w("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? xe(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return O(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[ye], i = D(t, typeof r.variable == "string" ? r.variable : "value");
		return O(De(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[ve];
		return O(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Ae = (e) => e.split(/(?<!\\)\|/).map((e) => e.replace(/\\\|/g, "|").trim()), je = (e, t) => {
	let n = Math.abs(e);
	return t === 2 ? n ? +(n > 1) : 1 : n ? Math.min(n, 2) : 0;
}, k = (e) => {
	let t = { values: {} };
	for (let n of e) if (typeof n == "number") t.count = n;
	else if (typeof n == "string") t.defaultMessage = n;
	else if (Array.isArray(n)) t.values = { ...n.map(String) };
	else if (typeof n == "object" && n) {
		let e = n;
		t.values = e, typeof e.plural == "number" && (t.count = e.plural);
	}
	return t;
}, A = (e, t, n, r) => {
	let i = { ...t };
	if (n !== void 0 && (i.count ??= n, i.n ??= n), typeof e == "string") {
		let t = e;
		if (/(?<!\\)\|/.test(t)) {
			let e = Ae(t);
			t = e[je(n ?? 1, e.length)] ?? t;
		}
		return ke(t, i, r);
	}
	let a = O(e, i, r);
	return typeof a == "string" ? a : String(a ?? "");
}, j = "\x1B[0m", M = "\x1B[90m", Me = "\x1B[34m", Ne = "\x1B[31m", Pe = "\x1B[32m", Fe = "\x1B[35m", Ie = "\x1B[38;5;3m", N = "\x1B[36m", Le = (e) => e, Re = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Le(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, P = (e, t) => (n, r) => Re(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), F = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? j : n : j}` : e, ze = (e, t = Ie, n = j) => [e].flat().map((e) => F(e, t, n)).join(", ");
F("✗", Ne), F("✓", Pe), F("⏲", Me);
var I = /* @__PURE__ */ new WeakMap(), L = 0, Be = (e) => {
	if (!e) return "base";
	let t = I.get(e);
	if (t) return t;
	L += 1;
	let n = `p${L}`;
	return I.set(e, n), n;
}, Ve = 256, R = /* @__PURE__ */ new WeakMap(), z = (e) => typeof e == "object" && !!e, He = (e, t, n) => `${e}_${t}_${Be(n)}`, Ue = (e, t) => {
	if (!z(e)) return { hit: !1 };
	let n = R.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, B = (e, t, n) => {
	if (!z(e)) return n;
	let r = R.get(e);
	return r || (r = /* @__PURE__ */ new Map(), R.set(e, r)), r.size >= Ve && r.clear(), r.set(t, n), n;
}, V = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), H = "default", We = /[^A-Za-z0-9._&=-]/g, U = /[^A-Za-z0-9._-]/g, Ge = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, W = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Ge);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, G = (e) => e === void 0 ? H : typeof e == "string" ? W(e, We) : Object.keys(e).sort().map((t) => `${W(t, U)}=${W(String(e[t]), U)}`).join("&"), Ke = (e) => Array.isArray(e) ? e.length === 0 ? [H] : e.map(G) : [G(e)], qe = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? H : e[0] ?? "default";
}, Je = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Ye = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Xe = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Ze = (e, t) => {
	if (!Ye(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? H : qe(Ke(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Je(e, n, t, s)).map((t) => Xe(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Qe = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, $e = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? Ke(n).join(",") : String(n)}`;
}).join("|") : "", et = {
	faq: c,
	header: l,
	settings: u,
	footer: d,
	mockBanner: ee,
	shared: f,
	careers: p,
	notFound: te,
	pricing: ne,
	products: re,
	contact: ie,
	themeToggle: ae,
	about: oe,
	home: se,
	team: ce,
	blog: le
}, tt = () => et, nt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), rt = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : nt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : rt(e ? `${e}.${String(n)}` : String(n)) }), it = /* @__PURE__ */ new Set(), at = (e, t, n) => {
	let r = tt()[e];
	return r ? St(r, t, n) : (it.has(e) || (P({ log: x })(typeof window > "u" ? `Dictionary ${ze(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), it.add(e)), rt(e));
}, ot = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, st = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (ot(e) && ot(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : st(e[r], t[r]));
		return n;
	}
	return e;
}, ct = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => st(e, t));
}, K = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, lt = (e) => {
	if (typeof e == "string") return e;
	if (K(e)) return e.nodeType === "html" ? e[g] : e[h];
}, ut = (e, t) => {
	if (typeof e == "string") return t;
	if (K(e)) {
		let n = e.nodeType === "html" ? g : h;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, dt = (e, t, n, r, i) => {
	let a = ut(e, V(lt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, q = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, ft = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? q : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: pe,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return ct(o, e, t);
	}
}, pt = q, mt = q, ht = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? q : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: m }], i = e[m], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || K(e),
			transform: (e, n, r) => {
				if (K(e)) return (i) => dt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = V(i, e);
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
}, gt = q, _t = q;
process.env.INTLAYER_OPTIMIZED_NESTING;
var vt = (e) => q, yt = q, bt = (e, t = !0) => [
	ft(e ?? y.defaultLocale, t ? y.defaultLocale : void 0),
	pt,
	mt,
	ht,
	vt(e ?? y.defaultLocale),
	yt,
	gt,
	_t
], xt = (e, t, n = []) => _(e, {
	...t,
	plugins: n
}), St = (e, t, n) => {
	let { locale: r, selector: i } = Qe(t), a = He(r ?? y.defaultLocale, $e(i), n), o = Ue(e, a);
	if (o.hit) return o.content;
	let s = n ?? bt(r), c = Ze(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return xt(e.content, t, s);
	};
	return c === null ? B(e, a, null) : Array.isArray(c) ? B(e, a, c.map(l)) : B(e, a, l(c));
}, Ct = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, wt = Symbol("intlayer"), J = null, Y = (e, t = !0, n) => {
	if (J) return J;
	Ct();
	let { defaultLocale: r } = y ?? {}, i = o(e ?? r), s = (e) => {
		i.value = e;
	}, c = o(n);
	return J = {
		locale: a(i),
		setLocale: s,
		variant: a(c),
		setVariant: (e) => {
			c.value = e;
		},
		isCookieEnabled: t
	}, J;
}, Tt = (e, t) => {
	let { locale: n, isCookieEnabled: r, variant: i } = t ?? {}, a = Y(n, r, i);
	return e.provide(wt, a), e;
}, Et = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, Dt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = Et(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, Ot = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var X = {
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
}, kt = (e = X) => {
	let { locales: t } = y;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Ot) for (let t = 0; t < (b.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(b.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, At = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !Ot && b.storage.cookies) for (let n = 0; n < b.storage.cookies.length; n++) {
		let { name: r, attributes: i } = b.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: Et(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, Dt(r, e, i));
			} catch {}
		}
	}
};
kt(X);
var jt = (e, t) => At(e, {
	...X,
	isCookieEnabled: t
}), { defaultLocale: Mt, locales: Nt } = y ?? {}, Pt = ({ isCookieEnabled: t, onLocaleChange: n } = {}) => {
	let r = i(wt);
	return {
		locale: e(() => r?.locale?.value ?? Mt),
		defaultLocale: Mt,
		availableLocales: Nt,
		setLocale: (e) => {
			if (!Nt?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			r && r.setLocale(e), jt(e, t ?? r?.isCookieEnabled ?? !0), n?.(e);
		}
	};
}, Ft = Symbol("global-i18n"), It = "translation", Z = (e, t, n) => {
	try {
		let r = v(at(t, e), n);
		if (r != null) return r;
	} catch {}
}, Q = (e, t, n) => {
	let r = t, i = n;
	if (n.includes(":")) {
		let e = n.indexOf(":");
		r = n.slice(0, e), i = n.slice(e + 1);
	}
	if (r) {
		let t = Z(e, r, i);
		if (t !== void 0) return t;
	}
	if (i.includes(".")) {
		let t = i.indexOf("."), n = Z(e, i.slice(0, t), i.slice(t + 1));
		if (n !== void 0) return n;
	}
	if (!r) {
		let t = Z(e, It, i);
		if (t !== void 0) return t;
	}
}, Lt = (e, t, n, r, i) => {
	let { values: a, count: o, defaultMessage: s } = k(r), c = Q(e, t, n);
	if (c === void 0) {
		if (i?.[e]) {
			let r = t ? `${t}.${n}` : n, s = v(i[e], r);
			if (s !== void 0) return A(s, a, o, e);
		}
		return s === void 0 ? n : A(s, a, o, e);
	}
	return A(c, a, o, e);
}, Rt = () => y?.locales?.map(String) ?? [], $ = (e) => {
	P({ log: x })(`${F(e, N)} has no effect with ${F("@intlayer/vue-i18n", Fe)} — translations are managed by the compiled intlayer dictionaries.`);
}, zt = ((t = {}) => {
	let n = t.messages;
	t.messages !== void 0 && P({ log: x })(`${F("createI18n", N)}: the ${F("`messages`", N)} option is used as a fallback. For optimal bundle size, remove the locale JSON imports and use ${F("useDictionary", N)} or compile your intlayer dictionaries instead:\n  ${F("Before:", M)} createI18n({ messages: { en, fr, … } })\n  ${F("After: ", M)} createI18n({})`);
	let r = Y(t.locale), i = t.datetimeFormats, a = t.numberFormats, o = () => String(r.locale.value), s = e({
		get: () => o(),
		set: (e) => {
			r.setLocale(e);
		}
	}), c = (e, ...t) => Lt(o(), void 0, e, t, n), l = (e, t) => de(e, t, o(), i), u = (e, t) => fe(e, t, o(), a), d = {
		locale: s,
		availableLocales: Rt(),
		fallbackLocale: t.fallbackLocale ?? y?.defaultLocale,
		t: c,
		tc: c,
		te: (e) => Q(o(), void 0, e) !== void 0,
		tm: (e) => Q(o(), void 0, e) ?? {},
		rt: (e, ...t) => {
			let { values: n, count: r } = k(t);
			return A(e, n, r, o());
		},
		d: l,
		n: u,
		setLocaleMessage: (e, t) => {
			$("setLocaleMessage");
		},
		mergeLocaleMessage: (e, t) => {
			$("mergeLocaleMessage");
		},
		getLocaleMessage: (e) => ($("getLocaleMessage"), {})
	}, ee = {
		get locale() {
			return o();
		},
		set locale(e) {
			r.setLocale(e);
		},
		get availableLocales() {
			return Rt();
		},
		t: c,
		tc: c,
		te: d.te,
		tm: d.tm,
		rt: d.rt,
		d: l,
		n: u
	}, f = (e, t) => {
		let n = t.value;
		if (typeof n == "string") e.textContent = c(n);
		else if (n && typeof n == "object") {
			let t = [];
			n.args && t.push(n.args), typeof n.choice == "number" && t.push(n.choice), e.textContent = c(n.path, ...t);
		}
	}, p = {
		global: d,
		mode: t.legacy === !0 ? "legacy" : "composition",
		__optionsMessages: n,
		install(e) {
			Tt(e, { locale: t.locale }), e.provide(Ft, p), e.config.globalProperties.$t = c, e.config.globalProperties.$tc = c, e.config.globalProperties.$te = d.te, e.config.globalProperties.$tm = d.tm, e.config.globalProperties.$rt = d.rt, e.config.globalProperties.$d = l, e.config.globalProperties.$n = u, e.config.globalProperties.$i18n = ee, e.directive("t", {
				beforeMount: f,
				updated: f
			});
		}
	};
	return p;
}), Bt = ((t) => {
	let { locale: n, setLocale: r, availableLocales: a } = Pt(), o = i(Ft)?.__optionsMessages, s = t?.namespace, c = t?.datetimeFormats, l = t?.numberFormats, u = e({
		get: () => n.value,
		set: (e) => {
			r(e);
		}
	}), d = (e, ...t) => Lt(n.value, s, e, t, o);
	return {
		locale: u,
		availableLocales: a,
		t: d,
		tc: d,
		te: (e) => Q(n.value, s, e) !== void 0,
		tm: (e) => Q(n.value, s, e) ?? {},
		rt: (e, ...t) => {
			let { values: r, count: i } = k(t);
			return A(e, r, i, n.value);
		},
		d: (e, t) => de(e, t, n.value, c),
		n: (e, t) => fe(e, t, n.value, l)
	};
}), Vt = t({
	__name: "EmptyComponent",
	setup(e) {
		let { t } = Bt();
		return t("header.home"), (e, t) => null;
	}
}), Ht = t({
	__name: "LibWrapper",
	setup(e) {
		let t = zt({
			legacy: !1,
			locale: "en"
		}), r = n()?.appContext.app;
		return r && !r.config.globalProperties.$i18n && r.use(t), (e, t) => s(e.$slots, "default");
	}
}), Ut = { render() {
	return r(Ht, {}, { default: () => r(Vt) });
} };
export { Ut as default };
