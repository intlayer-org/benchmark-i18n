import { Fragment as e, computed as t, createBlock as n, createCommentVNode as r, createElementBlock as i, createElementVNode as a, createTextVNode as o, createVNode as s, defineComponent as c, getCurrentInstance as l, h as u, inject as d, normalizeClass as f, onBeforeMount as p, onMounted as m, onUnmounted as ee, openBlock as h, readonly as te, ref as g, renderList as ne, renderSlot as re, resolveComponent as ie, toDisplayString as _, unref as v, watch as ae, withCtx as y } from "vue";
import { useRoute as oe, useRouter as se } from "vue-router";
import { ChevronDown as ce } from "lucide-vue-next";
var le = (e, t, n) => typeof e == "string" ? n?.[t]?.[e] ?? n?.[t.split("-")[0] ?? ""]?.[e] : e, ue = (e, t, n, r) => {
	let i = e instanceof Date ? e : new Date(e), a = le(t, n, r);
	try {
		return new Intl.DateTimeFormat(n, a).format(i);
	} catch {
		return String(e);
	}
}, b = (e, t, n, r) => {
	let i = le(t, n, r);
	try {
		return new Intl.NumberFormat(n, i).format(e);
	} catch {
		return String(e);
	}
}, de = "translation", fe = "enumeration", pe = "plural", x = "insertion", me = "object", he = "array", ge = "markdown", S = "html", _e = "gender", ve = "select", C = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => C(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => C(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: he,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: me,
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
}, ye = (e, t, n = ".") => {
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
}, xe = (e, t) => e[be(e, t) ?? "fallback"], w = {
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
}, Se = 50, Ce = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Set(), Te = (e) => {
	we.has(e) || (we.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Ee = {
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
}, De = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Te(e), Ee[e]);
};
function D(e, t, n) {
	let r = t ?? w?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = Ce.get(a);
	o || (o = /* @__PURE__ */ new Map(), Ce.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? De(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Se && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Oe = (e, t, n) => e[D("PluralRules", n).select(t)] ?? e.other, ke = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, Ae = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], O = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, k = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? D("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? D("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : D("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return D("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, je = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = O(t, r);
	return o === void 0 ? e : i ? k(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = O(t, r);
	return o === void 0 ? e : k(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = O(t, n);
	return r === void 0 ? e : String(r);
}), A = (e, t) => e[t] ?? e.count ?? e.n, j = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return je(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return j(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(j(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return j(r[x], t, n);
	if (r.nodeType === "html") return j(r[S], t, n);
	if (r.nodeType === "plural") {
		let e = r[pe];
		return j(Oe(e, Number(A(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[fe], i = Ae.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Ae.includes(t) || (o[t] = n);
		let s = A(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = D("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? xe(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return j(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[ve], i = A(t, typeof r.variable == "string" ? r.variable : "value");
		return j(ke(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[_e];
		return j(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Me = (e) => e.split(/(?<!\\)\|/).map((e) => e.replace(/\\\|/g, "|").trim()), Ne = (e, t) => {
	let n = Math.abs(e);
	return t === 2 ? n ? +(n > 1) : 1 : n ? Math.min(n, 2) : 0;
}, M = (e) => {
	let t = { values: {} };
	for (let n of e) if (typeof n == "number") t.count = n;
	else if (typeof n == "string") t.defaultMessage = n;
	else if (Array.isArray(n)) t.values = { ...n.map(String) };
	else if (typeof n == "object" && n) {
		let e = n;
		t.values = e, typeof e.plural == "number" && (t.count = e.plural);
	}
	return t;
}, N = (e, t, n, r) => {
	let i = { ...t };
	if (n !== void 0 && (i.count ??= n, i.n ??= n), typeof e == "string") {
		let t = e;
		if (/(?<!\\)\|/.test(t)) {
			let e = Me(t);
			t = e[Ne(n ?? 1, e.length)] ?? t;
		}
		return je(t, i, r);
	}
	let a = j(e, i, r);
	return typeof a == "string" ? a : String(a ?? "");
}, P = "\x1B[0m", Pe = "\x1B[90m", Fe = "\x1B[34m", Ie = "\x1B[31m", Le = "\x1B[32m", Re = "\x1B[35m", ze = "\x1B[38;5;3m", F = "\x1B[36m", Be = (e) => e, Ve = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Be(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, I = (e, t) => (n, r) => Ve(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), L = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? P : n : P}` : e, He = (e, t = ze, n = P) => [e].flat().map((e) => L(e, t, n)).join(", ");
L("✗", Ie), L("✓", Le), L("⏲", Fe);
var R = /* @__PURE__ */ new WeakMap(), z = 0, Ue = (e) => {
	if (!e) return "base";
	let t = R.get(e);
	if (t) return t;
	z += 1;
	let n = `p${z}`;
	return R.set(e, n), n;
}, We = 256, B = /* @__PURE__ */ new WeakMap(), V = (e) => typeof e == "object" && !!e, Ge = (e, t, n) => `${e}_${t}_${Ue(n)}`, Ke = (e, t) => {
	if (!V(e)) return { hit: !1 };
	let n = B.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, H = (e, t, n) => {
	if (!V(e)) return n;
	let r = B.get(e);
	return r || (r = /* @__PURE__ */ new Map(), B.set(e, r)), r.size >= We && r.clear(), r.set(t, n), n;
}, U = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), W = "default", qe = /[^A-Za-z0-9._&=-]/g, Je = /[^A-Za-z0-9._-]/g, Ye = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, G = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Ye);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, K = (e) => e === void 0 ? W : typeof e == "string" ? G(e, qe) : Object.keys(e).sort().map((t) => `${G(t, Je)}=${G(String(e[t]), Je)}`).join("&"), Xe = (e) => Array.isArray(e) ? e.length === 0 ? [W] : e.map(K) : [K(e)], Ze = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? W : e[0] ?? "default";
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
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? W : Ze(Xe(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Qe(e, n, t, s)).map((t) => et(e, t));
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
	return r ? Tt(r, t, n) : (st.has(e) || (I({ log: E })(typeof window > "u" ? `Dictionary ${He(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), st.add(e)), ot(e));
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
}, q = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, ft = (e) => {
	if (typeof e == "string") return e;
	if (q(e)) return e.nodeType === "html" ? e[S] : e[ge];
}, pt = (e, t) => {
	if (typeof e == "string") return t;
	if (q(e)) {
		let n = e.nodeType === "html" ? S : ge;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, mt = (e, t, n, r, i) => {
	let a = pt(e, U(ft(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, J = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, ht = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? J : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: de,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return dt(o, e, t);
	}
}, gt = J, _t = J, vt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: x }], i = e[x], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => mt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = U(i, e);
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
}, yt = J, bt = J, xt = (e) => J, St = J, Ct = (e, t = !0) => [
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
	let { locale: r, selector: i } = nt(t), a = Ge(r ?? w.defaultLocale, rt(i), n), o = Ke(e, a);
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
}, Dt = Symbol("intlayer"), Y = null, Ot = (e, t = !0, n) => {
	if (Y) return Y;
	Et();
	let { defaultLocale: r } = w ?? {}, i = g(e ?? r), a = (e) => {
		i.value = e;
	}, o = g(n);
	return Y = {
		locale: te(i),
		setLocale: a,
		variant: te(o),
		setVariant: (e) => {
			o.value = e;
		},
		isCookieEnabled: t
	}, Y;
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
}, Nt = (e = X) => {
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
Nt(X);
var Ft = (e, t) => Pt(e, {
	...X,
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
}, zt = Symbol("global-i18n"), Bt = "translation", Z = (e, t, n) => {
	try {
		let r = ye(ct(t, e), n);
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
		let t = Z(e, Bt, i);
		if (t !== void 0) return t;
	}
}, Vt = (e, t, n, r, i) => {
	let { values: a, count: o, defaultMessage: s } = M(r), c = Q(e, t, n);
	if (c === void 0) {
		if (i?.[e]) {
			let r = t ? `${t}.${n}` : n, s = ye(i[e], r);
			if (s !== void 0) return N(s, a, o, e);
		}
		return s === void 0 ? n : N(s, a, o, e);
	}
	return N(c, a, o, e);
}, Ht = () => w?.locales?.map(String) ?? [], $ = (e) => {
	I({ log: E })(`${L(e, F)} has no effect with ${L("@intlayer/vue-i18n", Re)} — translations are managed by the compiled intlayer dictionaries.`);
}, Ut = ((e = {}) => {
	let n = e.messages;
	e.messages !== void 0 && I({ log: E })(`${L("createI18n", F)}: the ${L("`messages`", F)} option is used as a fallback. For optimal bundle size, remove the locale JSON imports and use ${L("useDictionary", F)} or compile your intlayer dictionaries instead:\n  ${L("Before:", Pe)} createI18n({ messages: { en, fr, … } })\n  ${L("After: ", Pe)} createI18n({})`);
	let r = Ot(e.locale), i = e.datetimeFormats, a = e.numberFormats, o = () => String(r.locale.value), s = t({
		get: () => o(),
		set: (e) => {
			r.setLocale(e);
		}
	}), c = (e, ...t) => Vt(o(), void 0, e, t, n), l = (e, t) => ue(e, t, o(), i), u = (e, t) => b(e, t, o(), a), d = {
		locale: s,
		availableLocales: Ht(),
		fallbackLocale: e.fallbackLocale ?? w?.defaultLocale,
		t: c,
		tc: c,
		te: (e) => Q(o(), void 0, e) !== void 0,
		tm: (e) => Q(o(), void 0, e) ?? {},
		rt: (e, ...t) => {
			let { values: n, count: r } = M(t);
			return N(e, n, r, o());
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
		te: (e) => Q(n.value, o, e) !== void 0,
		tm: (e) => Q(n.value, o, e) ?? {},
		rt: (e, ...t) => {
			let { values: r, count: i } = M(t);
			return N(e, r, i, n.value);
		},
		d: (e, t) => ue(e, t, n.value, s),
		n: (e, t) => b(e, t, n.value, c)
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
}, Jt = { class: "flex items-center gap-2" }, Yt = ["value"], Xt = ["value"], Zt = c({
	__name: "LocaleSwitcher",
	setup(n) {
		let r = oe(), o = se(), s = t(() => r.params.locale || "en"), c = (e) => {
			let t = r.path.replace(/^\/[^/]+/, `/${e}`);
			o.push({
				path: t,
				query: r.query,
				hash: r.hash
			});
		};
		return (t, n) => (h(), i("div", Jt, [a("select", {
			value: s.value,
			onChange: n[0] ||= (e) => c(e.target.value),
			class: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
		}, [(h(!0), i(e, null, ne(v(Kt), (e) => (h(), i("option", {
			key: e,
			value: e
		}, _(v(qt)(e)), 9, Xt))), 128))], 40, Yt)]));
	}
}), Qt = ["aria-label", "title"], $t = c({
	__name: "ThemeToggle",
	setup(e) {
		let { t } = Wt(), n = g("auto");
		function r() {
			if (typeof window > "u") return "auto";
			let e = window.localStorage.getItem("theme");
			return e === "light" || e === "dark" || e === "auto" ? e : "auto";
		}
		function a(e) {
			let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
			document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
		}
		m(() => {
			let e = r();
			n.value = e, a(e);
		});
		let o = null;
		ae(n, (e) => {
			if (e === "auto") {
				let e = window.matchMedia("(prefers-color-scheme: dark)");
				o = () => a("auto"), e.addEventListener("change", o);
			} else o &&= (window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", o), null);
		}, { immediate: !0 }), ee(() => {
			o && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", o);
		});
		function s() {
			let e = n.value === "light" ? "dark" : n.value === "dark" ? "auto" : "light";
			n.value = e, a(e), window.localStorage.setItem("theme", e);
		}
		let c = () => n.value === "auto" ? t("themeToggle.labelAuto") : t("themeToggle.labelOther", { mode: n.value });
		return (e, r) => (h(), i("button", {
			type: "button",
			onClick: s,
			"aria-label": c(),
			title: c(),
			class: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"
		}, _(n.value === "auto" ? v(t)("themeToggle.auto") : n.value === "dark" ? v(t)("themeToggle.dark") : v(t)("themeToggle.light")), 9, Qt));
	}
}), en = { class: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg" }, tn = { class: "container flex h-16 items-center justify-between" }, nn = { class: "flex items-center gap-8" }, rn = { class: "hidden items-center gap-6 text-sm font-medium md:flex" }, an = ["href", "onClick"], on = ["href", "onClick"], sn = { class: "relative" }, cn = { class: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1" }, ln = { class: "flex items-center gap-4" }, un = {
	href: "https://github.com/intlayer-org/benchmark-i18n",
	target: "_blank",
	rel: "noreferrer",
	class: "text-muted-foreground transition hover:text-foreground"
}, dn = { class: "sr-only" }, fn = c({
	__name: "Header",
	setup(c) {
		Gt("Header");
		let { t: l } = Wt(), u = g(!1), d = oe(), p = t(() => d.params.locale || "en"), m = t(() => [
			{
				to: `/${p.value}/products`,
				label: l("header.products")
			},
			{
				to: `/${p.value}/pricing`,
				label: l("header.pricing")
			},
			{
				to: `/${p.value}/team`,
				label: l("header.team")
			},
			{
				to: `/${p.value}/blog`,
				label: l("header.blog")
			},
			{
				to: `/${p.value}/careers`,
				label: l("header.careers")
			},
			{
				to: `/${p.value}/faq`,
				label: l("header.faq")
			},
			{
				to: `/${p.value}/contact`,
				label: l("header.contact")
			},
			{
				to: `/${p.value}/settings`,
				label: l("header.settings")
			}
		]);
		return (t, c) => {
			let d = ie("router-link");
			return h(), i("header", en, [a("nav", tn, [a("div", nn, [s(d, {
				to: `/${p.value}`,
				class: "text-lg font-bold tracking-tight text-primary no-underline"
			}, {
				default: y(() => [o(_(v(l)("shared.appName")), 1)]),
				_: 1
			}, 8, ["to"]), a("div", rn, [
				s(d, {
					to: `/${p.value}`,
					custom: ""
				}, {
					default: y(({ href: e, navigate: t, isExactActive: n }) => [a("a", {
						href: e,
						class: f(["nav-link", { "router-link-active": n }]),
						onClick: t
					}, _(v(l)("header.home")), 11, an)]),
					_: 1
				}, 8, ["to"]),
				s(d, {
					to: `/${p.value}/about`,
					custom: ""
				}, {
					default: y(({ href: e, navigate: t, isActive: n }) => [a("a", {
						href: e,
						class: f(["nav-link", { "router-link-active": n }]),
						onClick: t
					}, _(v(l)("header.methodology")), 11, on)]),
					_: 1
				}, 8, ["to"]),
				a("div", sn, [a("button", {
					type: "button",
					class: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
					onMouseenter: c[0] ||= (e) => u.value = !0,
					onMouseleave: c[1] ||= (e) => u.value = !1,
					onClick: c[2] ||= (e) => u.value = !u.value
				}, [o(_(v(l)("header.mockPages")) + " ", 1), s(v(ce), {
					size: 14,
					class: f(["transition-transform", u.value ? "rotate-180" : ""])
				}, null, 8, ["class"])], 32), u.value ? (h(), i("div", {
					key: 0,
					class: "absolute left-0 top-full pt-2 w-48",
					onMouseenter: c[4] ||= (e) => u.value = !0,
					onMouseleave: c[5] ||= (e) => u.value = !1
				}, [a("div", cn, [(h(!0), i(e, null, ne(m.value, (e) => (h(), n(d, {
					key: e.to,
					to: e.to,
					class: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
					onClick: c[3] ||= (e) => u.value = !1
				}, {
					default: y(() => [o(_(e.label), 1)]),
					_: 2
				}, 1032, ["to"]))), 128))])], 32)) : r("v-if", !0)])
			])]), a("div", ln, [
				a("a", un, [a("span", dn, _(v(l)("shared.goToGithub")), 1), c[6] ||= a("svg", {
					viewBox: "0 0 16 16",
					"aria-hidden": "true",
					width: "20",
					height: "20"
				}, [a("path", {
					fill: "currentColor",
					d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
				})], -1)]),
				s(Zt),
				s($t)
			])])]);
		};
	}
}), pn = Ut({
	legacy: !1,
	locale: "en",
	fallbackLocale: "en"
}), mn = c({
	__name: "Wrapper",
	setup(e) {
		let t = l()?.appContext.app;
		return t && !t.config.globalProperties.$i18n && t.use(pn), (e, t) => re(e.$slots, "default");
	}
}), hn = { render() {
	return u(mn, {}, { default: () => u(fn) });
} };
export { hn as default };
