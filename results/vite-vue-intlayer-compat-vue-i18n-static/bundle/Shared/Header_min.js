import { Fragment as e, computed as t, createBlock as n, createCommentVNode as r, createElementBlock as i, createElementVNode as a, createTextVNode as o, createVNode as s, defineComponent as c, getCurrentInstance as l, h as u, inject as d, normalizeClass as f, onBeforeMount as p, onMounted as m, onUnmounted as ee, openBlock as h, readonly as te, ref as g, renderList as ne, renderSlot as re, resolveComponent as ie, toDisplayString as _, watch as ae, withCtx as v } from "vue";
import { useRoute as y, useRouter as oe } from "vue-router";
import { ChevronDown as se } from "lucide-vue-next";
var b = (e, t, n) => typeof e == "string" ? n?.[t]?.[e] ?? n?.[t.split("-")[0] ?? ""]?.[e] : e, ce = (e, t, n, r) => {
	let i = e instanceof Date ? e : new Date(e), a = b(t, n, r);
	try {
		return new Intl.DateTimeFormat(n, a).format(i);
	} catch {
		return String(e);
	}
}, le = (e, t, n, r) => {
	let i = b(t, n, r);
	try {
		return new Intl.NumberFormat(n, i).format(e);
	} catch {
		return String(e);
	}
}, ue = "translation", de = "enumeration", fe = "plural", x = "insertion", pe = "object", me = "array", he = "markdown", S = "html", ge = "gender", _e = "select", C = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => C(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => C(e, {
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
}, ve = (e, t, n = ".") => {
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
}, ye = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, be = (e, t) => e[ye(e, t) ?? "fallback"], w = {
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
}, T = {
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
}, E = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, xe = 50, Se = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Set(), Ce = (e) => {
	D.has(e) || (D.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
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
function O(e, t, n) {
	let r = t ?? w?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = Se.get(a);
	o || (o = /* @__PURE__ */ new Map(), Se.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Te(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > xe && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Ee = (e, t, n) => e[O("PluralRules", n).select(t)] ?? e.other, De = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, k = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], A = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, j = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? O("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? O("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : O("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return O("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, M = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = A(t, r);
	return o === void 0 ? e : i ? j(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = A(t, r);
	return o === void 0 ? e : j(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = A(t, n);
	return r === void 0 ? e : String(r);
}), N = (e, t) => e[t] ?? e.count ?? e.n, P = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return M(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return P(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(P(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return P(r[x], t, n);
	if (r.nodeType === "html") return P(r[S], t, n);
	if (r.nodeType === "plural") {
		let e = r[fe];
		return P(Ee(e, Number(N(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[de], i = k.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) k.includes(t) || (o[t] = n);
		let s = N(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = O("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? be(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return P(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[_e], i = N(t, typeof r.variable == "string" ? r.variable : "value");
		return P(De(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[ge];
		return P(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Oe = (e) => e.split(/(?<!\\)\|/).map((e) => e.replace(/\\\|/g, "|").trim()), ke = (e, t) => {
	let n = Math.abs(e);
	return t === 2 ? n ? +(n > 1) : 1 : n ? Math.min(n, 2) : 0;
}, F = (e) => {
	let t = { values: {} };
	for (let n of e) if (typeof n == "number") t.count = n;
	else if (typeof n == "string") t.defaultMessage = n;
	else if (Array.isArray(n)) t.values = { ...n.map(String) };
	else if (typeof n == "object" && n) {
		let e = n;
		t.values = e, typeof e.plural == "number" && (t.count = e.plural);
	}
	return t;
}, I = (e, t, n, r) => {
	let i = { ...t };
	if (n !== void 0 && (i.count ??= n, i.n ??= n), typeof e == "string") {
		let t = e;
		if (/(?<!\\)\|/.test(t)) {
			let e = Oe(t);
			t = e[ke(n ?? 1, e.length)] ?? t;
		}
		return M(t, i, r);
	}
	let a = P(e, i, r);
	return typeof a == "string" ? a : String(a ?? "");
}, L = "\x1B[0m", Ae = "\x1B[90m", je = "\x1B[34m", Me = "\x1B[31m", Ne = "\x1B[32m", Pe = "\x1B[35m", Fe = "\x1B[38;5;3m", R = "\x1B[36m", Ie = (e) => e, Le = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Ie(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, z = (e, t) => (n, r) => Le(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), B = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? L : n : L}` : e, Re = (e, t = Fe, n = L) => [e].flat().map((e) => B(e, t, n)).join(", ");
B("✗", Me), B("✓", Ne), B("⏲", je);
var ze = /* @__PURE__ */ new WeakMap(), Be = 0, Ve = (e) => {
	if (!e) return "base";
	let t = ze.get(e);
	if (t) return t;
	Be += 1;
	let n = `p${Be}`;
	return ze.set(e, n), n;
}, He = 256, V = /* @__PURE__ */ new WeakMap(), Ue = (e) => typeof e == "object" && !!e, We = (e, t, n) => `${e}_${t}_${Ve(n)}`, Ge = (e, t) => {
	if (!Ue(e)) return { hit: !1 };
	let n = V.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, H = (e, t, n) => {
	if (!Ue(e)) return n;
	let r = V.get(e);
	return r || (r = /* @__PURE__ */ new Map(), V.set(e, r)), r.size >= He && r.clear(), r.set(t, n), n;
}, Ke = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), U = "default", qe = /[^A-Za-z0-9._&=-]/g, W = /[^A-Za-z0-9._-]/g, Je = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, G = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Je);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, Ye = (e) => e === void 0 ? U : typeof e == "string" ? G(e, qe) : Object.keys(e).sort().map((t) => `${G(t, W)}=${G(String(e[t]), W)}`).join("&"), Xe = (e) => Array.isArray(e) ? e.length === 0 ? [U] : e.map(Ye) : [Ye(e)], Ze = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? U : e[0] ?? "default";
}, Qe = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, $e = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, et = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, tt = (e, t) => {
	if (!$e(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? U : Ze(Xe(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Qe(e, n, t, s)).map((t) => et(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, nt = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, rt = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? Xe(n).join(",") : String(n)}`;
}).join("|") : "", it = () => ({}), at = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), ot = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : at.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : ot(e ? `${e}.${String(n)}` : String(n)) }), st = /* @__PURE__ */ new Set(), ct = (e, t, n) => {
	let r = it()[e];
	return r ? Tt(r, t, n) : (st.has(e) || (z({ log: E })(typeof window > "u" ? `Dictionary ${Re(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), st.add(e)), ot(e));
}, lt = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, ut = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (lt(e) && lt(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : ut(e[r], t[r]));
		return n;
	}
	return e;
}, dt = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => ut(e, t));
}, K = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, ft = (e) => {
	if (typeof e == "string") return e;
	if (K(e)) return e.nodeType === "html" ? e[S] : e[he];
}, pt = (e, t) => {
	if (typeof e == "string") return t;
	if (K(e)) {
		let n = e.nodeType === "html" ? S : he;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, mt = (e, t, n, r, i) => {
	let a = pt(e, Ke(ft(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, q = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, ht = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? q : {
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
		return dt(o, e, t);
	}
}, gt = q, _t = q, vt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? q : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: x }], i = e[x], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || K(e),
			transform: (e, n, r) => {
				if (K(e)) return (i) => mt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Ke(i, e);
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
}, yt = q, bt = q, xt = (e) => q, St = q, Ct = (e, t = !0) => [
	ht(e ?? w.defaultLocale, t ? w.defaultLocale : void 0),
	gt,
	_t,
	vt,
	xt(e ?? w.defaultLocale),
	St,
	yt,
	bt
], wt = (e, t, n = []) => C(e, {
	...t,
	plugins: n
}), Tt = (e, t, n) => {
	let { locale: r, selector: i } = nt(t), a = We(r ?? w.defaultLocale, rt(i), n), o = Ge(e, a);
	if (o.hit) return o.content;
	let s = n ?? Ct(r), c = tt(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return wt(e.content, t, s);
	};
	return c === null ? H(e, a, null) : Array.isArray(c) ? H(e, a, c.map(l)) : H(e, a, l(c));
}, Et = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Dt = Symbol("intlayer"), J = null, Ot = (e, t = !0, n) => {
	if (J) return J;
	Et();
	let { defaultLocale: r } = w ?? {}, i = g(e ?? r), a = (e) => {
		i.value = e;
	}, o = g(n);
	return J = {
		locale: te(i),
		setLocale: a,
		variant: te(o),
		setVariant: (e) => {
			o.value = e;
		},
		isCookieEnabled: t
	}, J;
}, kt = (e, t) => {
	let { locale: n, isCookieEnabled: r, variant: i } = t ?? {}, a = Ot(n, r, i);
	return e.provide(Dt, a), e;
}, At = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, jt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = At(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, Mt = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var Y = {
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
}, Nt = (e = Y) => {
	let { locales: t } = w;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Mt) for (let t = 0; t < (T.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(T.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, Pt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !Mt && T.storage.cookies) for (let n = 0; n < T.storage.cookies.length; n++) {
		let { name: r, attributes: i } = T.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: At(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, jt(r, e, i));
			} catch {}
		}
	}
};
Nt(Y);
var Ft = (e, t) => Pt(e, {
	...Y,
	isCookieEnabled: t
}), { defaultLocale: It, locales: Lt } = w ?? {}, Rt = ({ isCookieEnabled: e, onLocaleChange: n } = {}) => {
	let r = d(Dt);
	return {
		locale: t(() => r?.locale?.value ?? It),
		defaultLocale: It,
		availableLocales: Lt,
		setLocale: (t) => {
			if (!Lt?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			r && r.setLocale(t), Ft(t, e ?? r?.isCookieEnabled ?? !0), n?.(t);
		}
	};
}, zt = Symbol("global-i18n"), Bt = "translation", X = (e, t, n) => {
	try {
		let r = ve(ct(t, e), n);
		if (r != null) return r;
	} catch {}
}, Z = (e, t, n) => {
	let r = t, i = n;
	if (n.includes(":")) {
		let e = n.indexOf(":");
		r = n.slice(0, e), i = n.slice(e + 1);
	}
	if (r) {
		let t = X(e, r, i);
		if (t !== void 0) return t;
	}
	if (i.includes(".")) {
		let t = i.indexOf("."), n = X(e, i.slice(0, t), i.slice(t + 1));
		if (n !== void 0) return n;
	}
	if (!r) {
		let t = X(e, Bt, i);
		if (t !== void 0) return t;
	}
}, Vt = (e, t, n, r, i) => {
	let { values: a, count: o, defaultMessage: s } = F(r), c = Z(e, t, n);
	if (c === void 0) {
		if (i?.[e]) {
			let r = t ? `${t}.${n}` : n, s = ve(i[e], r);
			if (s !== void 0) return I(s, a, o, e);
		}
		return s === void 0 ? n : I(s, a, o, e);
	}
	return I(c, a, o, e);
}, Ht = () => w?.locales?.map(String) ?? [], Q = (e) => {
	z({ log: E })(`${B(e, R)} has no effect with ${B("@intlayer/vue-i18n", Pe)} — translations are managed by the compiled intlayer dictionaries.`);
}, Ut = ((e = {}) => {
	let n = e.messages;
	e.messages !== void 0 && z({ log: E })(`${B("createI18n", R)}: the ${B("`messages`", R)} option is used as a fallback. For optimal bundle size, remove the locale JSON imports and use ${B("useDictionary", R)} or compile your intlayer dictionaries instead:\n  ${B("Before:", Ae)} createI18n({ messages: { en, fr, … } })\n  ${B("After: ", Ae)} createI18n({})`);
	let r = Ot(e.locale), i = e.datetimeFormats, a = e.numberFormats, o = () => String(r.locale.value), s = t({
		get: () => o(),
		set: (e) => {
			r.setLocale(e);
		}
	}), c = (e, ...t) => Vt(o(), void 0, e, t, n), l = (e, t) => ce(e, t, o(), i), u = (e, t) => le(e, t, o(), a), d = {
		locale: s,
		availableLocales: Ht(),
		fallbackLocale: e.fallbackLocale ?? w?.defaultLocale,
		t: c,
		tc: c,
		te: (e) => Z(o(), void 0, e) !== void 0,
		tm: (e) => Z(o(), void 0, e) ?? {},
		rt: (e, ...t) => {
			let { values: n, count: r } = F(t);
			return I(e, n, r, o());
		},
		d: l,
		n: u,
		setLocaleMessage: (e, t) => {
			Q("setLocaleMessage");
		},
		mergeLocaleMessage: (e, t) => {
			Q("mergeLocaleMessage");
		},
		getLocaleMessage: (e) => (Q("getLocaleMessage"), {})
	}, f = {
		get locale() {
			return o();
		},
		set locale(e) {
			r.setLocale(e);
		},
		get availableLocales() {
			return Ht();
		},
		t: c,
		tc: c,
		te: d.te,
		tm: d.tm,
		rt: d.rt,
		d: l,
		n: u
	}, p = (e, t) => {
		let n = t.value;
		if (typeof n == "string") e.textContent = c(n);
		else if (n && typeof n == "object") {
			let t = [];
			n.args && t.push(n.args), typeof n.choice == "number" && t.push(n.choice), e.textContent = c(n.path, ...t);
		}
	}, m = {
		global: d,
		mode: e.legacy === !0 ? "legacy" : "composition",
		__optionsMessages: n,
		install(t) {
			kt(t, { locale: e.locale }), t.provide(zt, m), t.config.globalProperties.$t = c, t.config.globalProperties.$tc = c, t.config.globalProperties.$te = d.te, t.config.globalProperties.$tm = d.tm, t.config.globalProperties.$rt = d.rt, t.config.globalProperties.$d = l, t.config.globalProperties.$n = u, t.config.globalProperties.$i18n = f, t.directive("t", {
				beforeMount: p,
				updated: p
			});
		}
	};
	return m;
}), Wt = ((e) => {
	let { locale: n, setLocale: r, availableLocales: i } = Rt(), a = d(zt)?.__optionsMessages, o = e?.namespace, s = e?.datetimeFormats, c = e?.numberFormats, l = t({
		get: () => n.value,
		set: (e) => {
			r(e);
		}
	}), u = (e, ...t) => Vt(n.value, o, e, t, a);
	return {
		locale: l,
		availableLocales: i,
		t: u,
		tc: u,
		te: (e) => Z(n.value, o, e) !== void 0,
		tm: (e) => Z(n.value, o, e) ?? {},
		rt: (e, ...t) => {
			let { values: r, count: i } = F(t);
			return I(e, r, i, n.value);
		},
		d: (e, t) => ce(e, t, n.value, s),
		n: (e, t) => le(e, t, n.value, c)
	};
});
function Gt(e) {
	p(() => {
		typeof performance < "u" && performance.mark && performance.mark(`${e}-start`);
	}), m(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var Kt = [
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
], qt = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, Jt = c({
	__name: "LocaleSwitcher",
	setup(e, { expose: n }) {
		n();
		let r = y(), i = oe(), a = {
			route: r,
			router: i,
			currentLocale: t(() => r.params.locale || "en"),
			handleLocaleChange: (e) => {
				let t = r.path.replace(/^\/[^/]+/, `/${e}`);
				i.push({
					path: t,
					query: r.query,
					hash: r.hash
				});
			},
			get getLocaleName() {
				return qt;
			},
			get locales() {
				return Kt;
			}
		};
		return Object.defineProperty(a, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), a;
	}
}), $ = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Yt = { class: "flex items-center gap-2" }, Xt = ["value"], Zt = ["value"];
function Qt(t, n, r, o, s, c) {
	return h(), i("div", Yt, [a("select", {
		value: o.currentLocale,
		onChange: n[0] ||= (e) => o.handleLocaleChange(e.target.value),
		class: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
	}, [(h(!0), i(e, null, ne(o.locales, (e) => (h(), i("option", {
		key: e,
		value: e
	}, _(o.getLocaleName(e)), 9, Zt))), 128))], 40, Xt)]);
}
var $t = $(Jt, [["render", Qt], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/src/components/LocaleSwitcher.vue"]]), en = c({
	__name: "ThemeToggle",
	setup(e, { expose: t }) {
		t();
		let { t: n } = Wt(), r = g("auto");
		function i() {
			if (typeof window > "u") return "auto";
			let e = window.localStorage.getItem("theme");
			return e === "light" || e === "dark" || e === "auto" ? e : "auto";
		}
		function a(e) {
			let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
			document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
		}
		m(() => {
			let e = i();
			r.value = e, a(e);
		});
		let o = null;
		ae(r, (e) => {
			if (e === "auto") {
				let e = window.matchMedia("(prefers-color-scheme: dark)");
				o = () => a("auto"), e.addEventListener("change", o);
			} else o &&= (window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", o), null);
		}, { immediate: !0 }), ee(() => {
			o && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", o);
		});
		function s() {
			let e = r.value === "light" ? "dark" : r.value === "dark" ? "auto" : "light";
			r.value = e, a(e), window.localStorage.setItem("theme", e);
		}
		let c = {
			t: n,
			mode: r,
			getInitialMode: i,
			applyThemeMode: a,
			get mediaQueryListener() {
				return o;
			},
			set mediaQueryListener(e) {
				o = e;
			},
			toggleMode: s,
			getLabel: () => r.value === "auto" ? n("themeToggle.labelAuto") : n("themeToggle.labelOther", { mode: r.value })
		};
		return Object.defineProperty(c, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), c;
	}
}), tn = ["aria-label", "title"];
function nn(e, t, n, r, a, o) {
	return h(), i("button", {
		type: "button",
		onClick: r.toggleMode,
		"aria-label": r.getLabel(),
		title: r.getLabel(),
		class: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"
	}, _(r.mode === "auto" ? r.t("themeToggle.auto") : r.mode === "dark" ? r.t("themeToggle.dark") : r.t("themeToggle.light")), 9, tn);
}
var rn = $(en, [["render", nn], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/src/components/ThemeToggle.vue"]]), an = c({
	__name: "Header",
	setup(e, { expose: n }) {
		n(), Gt("Header");
		let { t: r } = Wt(), i = g(!1), a = y(), o = t(() => a.params.locale || "en"), s = {
			t: r,
			isMockPagesOpen: i,
			route: a,
			currentLocale: o,
			mockPages: t(() => [
				{
					to: `/${o.value}/products`,
					label: r("header.products")
				},
				{
					to: `/${o.value}/pricing`,
					label: r("header.pricing")
				},
				{
					to: `/${o.value}/team`,
					label: r("header.team")
				},
				{
					to: `/${o.value}/blog`,
					label: r("header.blog")
				},
				{
					to: `/${o.value}/careers`,
					label: r("header.careers")
				},
				{
					to: `/${o.value}/faq`,
					label: r("header.faq")
				},
				{
					to: `/${o.value}/contact`,
					label: r("header.contact")
				},
				{
					to: `/${o.value}/settings`,
					label: r("header.settings")
				}
			]),
			get ChevronDown() {
				return se;
			},
			LocaleSwitcher: $t,
			ThemeToggle: rn
		};
		return Object.defineProperty(s, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), s;
	}
}), on = { class: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg" }, sn = { class: "container flex h-16 items-center justify-between" }, cn = { class: "flex items-center gap-8" }, ln = { class: "hidden items-center gap-6 text-sm font-medium md:flex" }, un = ["href", "onClick"], dn = ["href", "onClick"], fn = { class: "relative" }, pn = { class: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1" }, mn = { class: "flex items-center gap-4" }, hn = {
	href: "https://github.com/intlayer-org/benchmark-i18n",
	target: "_blank",
	rel: "noreferrer",
	class: "text-muted-foreground transition hover:text-foreground"
}, gn = { class: "sr-only" };
function _n(t, c, l, u, d, p) {
	let m = ie("router-link");
	return h(), i("header", on, [a("nav", sn, [a("div", cn, [s(m, {
		to: `/${u.currentLocale}`,
		class: "text-lg font-bold tracking-tight text-primary no-underline"
	}, {
		default: v(() => [o(_(u.t("shared.appName")), 1)]),
		_: 1
	}, 8, ["to"]), a("div", ln, [
		s(m, {
			to: `/${u.currentLocale}`,
			custom: ""
		}, {
			default: v(({ href: e, navigate: t, isExactActive: n }) => [a("a", {
				href: e,
				class: f(["nav-link", { "router-link-active": n }]),
				onClick: t
			}, _(u.t("header.home")), 11, un)]),
			_: 1
		}, 8, ["to"]),
		s(m, {
			to: `/${u.currentLocale}/about`,
			custom: ""
		}, {
			default: v(({ href: e, navigate: t, isActive: n }) => [a("a", {
				href: e,
				class: f(["nav-link", { "router-link-active": n }]),
				onClick: t
			}, _(u.t("header.methodology")), 11, dn)]),
			_: 1
		}, 8, ["to"]),
		a("div", fn, [a("button", {
			type: "button",
			class: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
			onMouseenter: c[0] ||= (e) => u.isMockPagesOpen = !0,
			onMouseleave: c[1] ||= (e) => u.isMockPagesOpen = !1,
			onClick: c[2] ||= (e) => u.isMockPagesOpen = !u.isMockPagesOpen
		}, [o(_(u.t("header.mockPages")) + " ", 1), s(u.ChevronDown, {
			size: 14,
			class: f(["transition-transform", u.isMockPagesOpen ? "rotate-180" : ""])
		}, null, 8, ["class"])], 32), u.isMockPagesOpen ? (h(), i("div", {
			key: 0,
			class: "absolute left-0 top-full pt-2 w-48",
			onMouseenter: c[4] ||= (e) => u.isMockPagesOpen = !0,
			onMouseleave: c[5] ||= (e) => u.isMockPagesOpen = !1
		}, [a("div", pn, [(h(!0), i(e, null, ne(u.mockPages, (e) => (h(), n(m, {
			key: e.to,
			to: e.to,
			class: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
			onClick: c[3] ||= (e) => u.isMockPagesOpen = !1
		}, {
			default: v(() => [o(_(e.label), 1)]),
			_: 2
		}, 1032, ["to"]))), 128))])], 32)) : r("v-if", !0)])
	])]), a("div", mn, [
		a("a", hn, [a("span", gn, _(u.t("shared.goToGithub")), 1), c[6] ||= a("svg", {
			viewBox: "0 0 16 16",
			"aria-hidden": "true",
			width: "20",
			height: "20"
		}, [a("path", {
			fill: "currentColor",
			d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
		})], -1)]),
		s(u.LocaleSwitcher),
		s(u.ThemeToggle)
	])])]);
}
var vn = $(an, [["render", _n], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/src/components/Header.vue"]]), yn = Ut({
	legacy: !1,
	locale: "en",
	fallbackLocale: "en"
}), bn = c({
	__name: "Wrapper",
	setup(e, { expose: t }) {
		t();
		let n = l()?.appContext.app;
		n && !n.config.globalProperties.$i18n && n.use(yn);
		let r = { app: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
});
function xn(e, t, n, r, i, a) {
	return re(e.$slots, "default");
}
var Sn = $(bn, [["render", xn], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/scripts/Wrapper.vue"]]), Cn = { render() {
	return u(Sn, {}, { default: () => u(vn) });
} };
export { Cn as default };
