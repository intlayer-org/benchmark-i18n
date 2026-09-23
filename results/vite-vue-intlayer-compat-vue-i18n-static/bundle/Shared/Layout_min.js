import { Fragment as e, computed as t, createBlock as n, createCommentVNode as r, createElementBlock as i, createElementVNode as a, createTextVNode as o, createVNode as s, defineComponent as c, getCurrentInstance as l, h as u, inject as d, normalizeClass as f, onBeforeMount as p, onMounted as m, onUnmounted as ee, openBlock as h, readonly as te, ref as g, renderList as _, renderSlot as ne, resolveComponent as v, toDisplayString as y, unref as b, watch as re, withCtx as x } from "vue";
import { useRoute as S, useRouter as ie } from "vue-router";
import { ChevronDown as ae } from "lucide-vue-next";
var C = (e, t, n) => typeof e == "string" ? n?.[t]?.[e] ?? n?.[t.split("-")[0] ?? ""]?.[e] : e, oe = (e, t, n, r) => {
	let i = e instanceof Date ? e : new Date(e), a = C(t, n, r);
	try {
		return new Intl.DateTimeFormat(n, a).format(i);
	} catch {
		return String(e);
	}
}, se = (e, t, n, r) => {
	let i = C(t, n, r);
	try {
		return new Intl.NumberFormat(n, i).format(e);
	} catch {
		return String(e);
	}
}, ce = "translation", le = "enumeration", ue = "plural", w = "insertion", de = "object", fe = "array", pe = "markdown", T = "html", me = "gender", he = "select", E = (e, t) => {
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
}, ge = (e, t, n = ".") => {
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
}, _e = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, ve = (e, t) => e[_e(e, t) ?? "fallback"], D = {
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
}, ye = 50, be = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Set(), xe = (e) => {
	A.has(e) || (A.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Se = {
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
}, Ce = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (xe(e), Se[e]);
};
function j(e, t, n) {
	let r = t ?? D?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = be.get(a);
	o || (o = /* @__PURE__ */ new Map(), be.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Ce(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > ye && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var we = (e, t, n) => e[j("PluralRules", n).select(t)] ?? e.other, Te = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, Ee = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], M = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, De = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? j("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? j("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : j("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return j("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Oe = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = M(t, r);
	return o === void 0 ? e : i ? De(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = M(t, r);
	return o === void 0 ? e : De(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = M(t, n);
	return r === void 0 ? e : String(r);
}), N = (e, t) => e[t] ?? e.count ?? e.n, P = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Oe(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return P(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(P(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return P(r[w], t, n);
	if (r.nodeType === "html") return P(r[T], t, n);
	if (r.nodeType === "plural") {
		let e = r[ue];
		return P(we(e, Number(N(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[le], i = Ee.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Ee.includes(t) || (o[t] = n);
		let s = N(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = j("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? ve(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return P(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[he], i = N(t, typeof r.variable == "string" ? r.variable : "value");
		return P(Te(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[me];
		return P(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, ke = (e) => e.split(/(?<!\\)\|/).map((e) => e.replace(/\\\|/g, "|").trim()), Ae = (e, t) => {
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
			let e = ke(t);
			t = e[Ae(n ?? 1, e.length)] ?? t;
		}
		return Oe(t, i, r);
	}
	let a = P(e, i, r);
	return typeof a == "string" ? a : String(a ?? "");
}, L = "\x1B[0m", je = "\x1B[90m", Me = "\x1B[34m", Ne = "\x1B[31m", Pe = "\x1B[32m", Fe = "\x1B[35m", Ie = "\x1B[38;5;3m", R = "\x1B[36m", Le = (e) => e, Re = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Le(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, z = (e, t) => (n, r) => Re(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), B = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? L : n : L}` : e, ze = (e, t = Ie, n = L) => [e].flat().map((e) => B(e, t, n)).join(", ");
B("✗", Ne), B("✓", Pe), B("⏲", Me);
var Be = /* @__PURE__ */ new WeakMap(), Ve = 0, He = (e) => {
	if (!e) return "base";
	let t = Be.get(e);
	if (t) return t;
	Ve += 1;
	let n = `p${Ve}`;
	return Be.set(e, n), n;
}, Ue = 256, V = /* @__PURE__ */ new WeakMap(), We = (e) => typeof e == "object" && !!e, Ge = (e, t, n) => `${e}_${t}_${He(n)}`, Ke = (e, t) => {
	if (!We(e)) return { hit: !1 };
	let n = V.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, H = (e, t, n) => {
	if (!We(e)) return n;
	let r = V.get(e);
	return r || (r = /* @__PURE__ */ new Map(), V.set(e, r)), r.size >= Ue && r.clear(), r.set(t, n), n;
}, qe = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), U = "default", Je = /[^A-Za-z0-9._&=-]/g, Ye = /[^A-Za-z0-9._-]/g, Xe = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, W = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Xe);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, Ze = (e) => e === void 0 ? U : typeof e == "string" ? W(e, Je) : Object.keys(e).sort().map((t) => `${W(t, Ye)}=${W(String(e[t]), Ye)}`).join("&"), Qe = (e) => Array.isArray(e) ? e.length === 0 ? [U] : e.map(Ze) : [Ze(e)], $e = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? U : e[0] ?? "default";
}, et = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, tt = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, nt = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, rt = (e, t) => {
	if (!tt(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? U : $e(Qe(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => et(e, n, t, s)).map((t) => nt(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, it = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, at = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? Qe(n).join(",") : String(n)}`;
}).join("|") : "", ot = () => ({}), st = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), ct = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : st.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : ct(e ? `${e}.${String(n)}` : String(n)) }), G = /* @__PURE__ */ new Set(), lt = (e, t, n) => {
	let r = ot()[e];
	return r ? Et(r, t, n) : (G.has(e) || (z({ log: k })(typeof window > "u" ? `Dictionary ${ze(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), G.add(e)), ct(e));
}, ut = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, dt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (ut(e) && ut(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : dt(e[r], t[r]));
		return n;
	}
	return e;
}, ft = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => dt(e, t));
}, K = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, pt = (e) => {
	if (typeof e == "string") return e;
	if (K(e)) return e.nodeType === "html" ? e[T] : e[pe];
}, mt = (e, t) => {
	if (typeof e == "string") return t;
	if (K(e)) {
		let n = e.nodeType === "html" ? T : pe;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, ht = (e, t, n, r, i) => {
	let a = mt(e, qe(pt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, q = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, gt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? q : {
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
		return ft(o, e, t);
	}
}, _t = q, vt = q, yt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? q : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: w }], i = e[w], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || K(e),
			transform: (e, n, r) => {
				if (K(e)) return (i) => ht(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = qe(i, e);
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
}, bt = q, xt = q, St = (e) => q, Ct = q, wt = (e, t = !0) => [
	gt(e ?? D.defaultLocale, t ? D.defaultLocale : void 0),
	_t,
	vt,
	yt,
	St(e ?? D.defaultLocale),
	Ct,
	bt,
	xt
], Tt = (e, t, n = []) => E(e, {
	...t,
	plugins: n
}), Et = (e, t, n) => {
	let { locale: r, selector: i } = it(t), a = Ge(r ?? D.defaultLocale, at(i), n), o = Ke(e, a);
	if (o.hit) return o.content;
	let s = n ?? wt(r), c = rt(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Tt(e.content, t, s);
	};
	return c === null ? H(e, a, null) : Array.isArray(c) ? H(e, a, c.map(l)) : H(e, a, l(c));
}, Dt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Ot = Symbol("intlayer"), J = null, kt = (e, t = !0, n) => {
	if (J) return J;
	Dt();
	let { defaultLocale: r } = D ?? {}, i = g(e ?? r), a = (e) => {
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
}, At = (e, t) => {
	let { locale: n, isCookieEnabled: r, variant: i } = t ?? {}, a = kt(n, r, i);
	return e.provide(Ot, a), e;
}, jt = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, Mt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = jt(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, Nt = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, Pt = (e = Y) => {
	let { locales: t } = D;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Nt) for (let t = 0; t < (O.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(O.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, Ft = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !Nt && O.storage.cookies) for (let n = 0; n < O.storage.cookies.length; n++) {
		let { name: r, attributes: i } = O.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: jt(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, Mt(r, e, i));
			} catch {}
		}
	}
};
Pt(Y);
var It = (e, t) => Ft(e, {
	...Y,
	isCookieEnabled: t
}), { defaultLocale: Lt, locales: Rt } = D ?? {}, zt = ({ isCookieEnabled: e, onLocaleChange: n } = {}) => {
	let r = d(Ot);
	return {
		locale: t(() => r?.locale?.value ?? Lt),
		defaultLocale: Lt,
		availableLocales: Rt,
		setLocale: (t) => {
			if (!Rt?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			r && r.setLocale(t), It(t, e ?? r?.isCookieEnabled ?? !0), n?.(t);
		}
	};
}, Bt = Symbol("global-i18n"), Vt = "translation", X = (e, t, n) => {
	try {
		let r = ge(lt(t, e), n);
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
		let t = X(e, Vt, i);
		if (t !== void 0) return t;
	}
}, Ht = (e, t, n, r, i) => {
	let { values: a, count: o, defaultMessage: s } = F(r), c = Z(e, t, n);
	if (c === void 0) {
		if (i?.[e]) {
			let r = t ? `${t}.${n}` : n, s = ge(i[e], r);
			if (s !== void 0) return I(s, a, o, e);
		}
		return s === void 0 ? n : I(s, a, o, e);
	}
	return I(c, a, o, e);
}, Ut = () => D?.locales?.map(String) ?? [], Q = (e) => {
	z({ log: k })(`${B(e, R)} has no effect with ${B("@intlayer/vue-i18n", Fe)} — translations are managed by the compiled intlayer dictionaries.`);
}, Wt = ((e = {}) => {
	let n = e.messages;
	e.messages !== void 0 && z({ log: k })(`${B("createI18n", R)}: the ${B("`messages`", R)} option is used as a fallback. For optimal bundle size, remove the locale JSON imports and use ${B("useDictionary", R)} or compile your intlayer dictionaries instead:\n  ${B("Before:", je)} createI18n({ messages: { en, fr, … } })\n  ${B("After: ", je)} createI18n({})`);
	let r = kt(e.locale), i = e.datetimeFormats, a = e.numberFormats, o = () => String(r.locale.value), s = t({
		get: () => o(),
		set: (e) => {
			r.setLocale(e);
		}
	}), c = (e, ...t) => Ht(o(), void 0, e, t, n), l = (e, t) => oe(e, t, o(), i), u = (e, t) => se(e, t, o(), a), d = {
		locale: s,
		availableLocales: Ut(),
		fallbackLocale: e.fallbackLocale ?? D?.defaultLocale,
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
			return Ut();
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
			At(t, { locale: e.locale }), t.provide(Bt, m), t.config.globalProperties.$t = c, t.config.globalProperties.$tc = c, t.config.globalProperties.$te = d.te, t.config.globalProperties.$tm = d.tm, t.config.globalProperties.$rt = d.rt, t.config.globalProperties.$d = l, t.config.globalProperties.$n = u, t.config.globalProperties.$i18n = f, t.directive("t", {
				beforeMount: p,
				updated: p
			});
		}
	};
	return m;
}), $ = ((e) => {
	let { locale: n, setLocale: r, availableLocales: i } = zt(), a = d(Bt)?.__optionsMessages, o = e?.namespace, s = e?.datetimeFormats, c = e?.numberFormats, l = t({
		get: () => n.value,
		set: (e) => {
			r(e);
		}
	}), u = (e, ...t) => Ht(n.value, o, e, t, a);
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
		d: (e, t) => oe(e, t, n.value, s),
		n: (e, t) => se(e, t, n.value, c)
	};
});
function Gt() {
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
function Kt(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var qt = { class: "mt-20 border-t border-border bg-card" }, Jt = { class: "container py-8" }, Yt = { class: "grid gap-8 md:grid-cols-3" }, Xt = { class: "mb-2 text-sm font-semibold text-foreground" }, Zt = { class: "text-sm text-muted-foreground" }, Qt = { class: "mb-2 text-sm font-semibold text-foreground" }, $t = { class: "space-y-1" }, en = ["href"], tn = { class: "mb-2 text-sm font-semibold text-foreground" }, nn = { class: "text-sm text-muted-foreground" }, rn = { class: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground" }, an = c({
	__name: "Footer",
	setup(r) {
		let { t: s } = $(), c = S(), l = t(() => c.params.locale || "en"), u = t(() => [
			{
				label: s("footer.github"),
				href: "https://github.com/intlayer-org/benchmark-i18n",
				isInternal: !1
			},
			{
				label: s("footer.methodology"),
				to: `/${l.value}/about`,
				isInternal: !0
			},
			{
				label: s("footer.contributing"),
				to: `/${l.value}/contact`,
				isInternal: !0
			}
		]);
		return (t, r) => {
			let c = v("router-link");
			return h(), i("footer", qt, [a("div", Jt, [a("div", Yt, [
				a("div", null, [a("h3", Xt, y(b(s)("footer.title")), 1), a("p", Zt, y(b(s)("footer.description")), 1)]),
				a("div", null, [a("h3", Qt, y(b(s)("footer.resources")), 1), a("ul", $t, [(h(!0), i(e, null, _(u.value, (e) => (h(), i("li", { key: e.label }, [e.isInternal ? (h(), n(c, {
					key: 0,
					to: e.to,
					class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
				}, {
					default: x(() => [o(y(e.label), 1)]),
					_: 2
				}, 1032, ["to"])) : (h(), i("a", {
					key: 1,
					href: e.href,
					target: "_blank",
					rel: "noreferrer",
					class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
				}, y(e.label), 9, en))]))), 128))])]),
				a("div", null, [a("h3", tn, y(b(s)("footer.contact")), 1), a("p", nn, y(b(s)("shared.contactEmail")), 1)])
			]), a("div", rn, y(b(s)("footer.builtWith")), 1)])]);
		};
	}
});
function on(e) {
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
var sn = [
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
], cn = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, ln = { class: "flex items-center gap-2" }, un = ["value"], dn = ["value"], fn = c({
	__name: "LocaleSwitcher",
	setup(n) {
		let r = S(), o = ie(), s = t(() => r.params.locale || "en"), c = (e) => {
			let t = r.path.replace(/^\/[^/]+/, `/${e}`);
			o.push({
				path: t,
				query: r.query,
				hash: r.hash
			});
		};
		return (t, n) => (h(), i("div", ln, [a("select", {
			value: s.value,
			onChange: n[0] ||= (e) => c(e.target.value),
			class: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
		}, [(h(!0), i(e, null, _(b(sn), (e) => (h(), i("option", {
			key: e,
			value: e
		}, y(b(cn)(e)), 9, dn))), 128))], 40, un)]));
	}
}), pn = ["aria-label", "title"], mn = c({
	__name: "ThemeToggle",
	setup(e) {
		let { t } = $(), n = g("auto");
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
		re(n, (e) => {
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
		}, y(n.value === "auto" ? b(t)("themeToggle.auto") : n.value === "dark" ? b(t)("themeToggle.dark") : b(t)("themeToggle.light")), 9, pn));
	}
}), hn = { class: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg" }, gn = { class: "container flex h-16 items-center justify-between" }, _n = { class: "flex items-center gap-8" }, vn = { class: "hidden items-center gap-6 text-sm font-medium md:flex" }, yn = ["href", "onClick"], bn = ["href", "onClick"], xn = { class: "relative" }, Sn = { class: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1" }, Cn = { class: "flex items-center gap-4" }, wn = {
	href: "https://github.com/intlayer-org/benchmark-i18n",
	target: "_blank",
	rel: "noreferrer",
	class: "text-muted-foreground transition hover:text-foreground"
}, Tn = { class: "sr-only" }, En = c({
	__name: "Header",
	setup(c) {
		on("Header");
		let { t: l } = $(), u = g(!1), d = S(), p = t(() => d.params.locale || "en"), m = t(() => [
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
			let d = v("router-link");
			return h(), i("header", hn, [a("nav", gn, [a("div", _n, [s(d, {
				to: `/${p.value}`,
				class: "text-lg font-bold tracking-tight text-primary no-underline"
			}, {
				default: x(() => [o(y(b(l)("shared.appName")), 1)]),
				_: 1
			}, 8, ["to"]), a("div", vn, [
				s(d, {
					to: `/${p.value}`,
					custom: ""
				}, {
					default: x(({ href: e, navigate: t, isExactActive: n }) => [a("a", {
						href: e,
						class: f(["nav-link", { "router-link-active": n }]),
						onClick: t
					}, y(b(l)("header.home")), 11, yn)]),
					_: 1
				}, 8, ["to"]),
				s(d, {
					to: `/${p.value}/about`,
					custom: ""
				}, {
					default: x(({ href: e, navigate: t, isActive: n }) => [a("a", {
						href: e,
						class: f(["nav-link", { "router-link-active": n }]),
						onClick: t
					}, y(b(l)("header.methodology")), 11, bn)]),
					_: 1
				}, 8, ["to"]),
				a("div", xn, [a("button", {
					type: "button",
					class: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
					onMouseenter: c[0] ||= (e) => u.value = !0,
					onMouseleave: c[1] ||= (e) => u.value = !1,
					onClick: c[2] ||= (e) => u.value = !u.value
				}, [o(y(b(l)("header.mockPages")) + " ", 1), s(b(ae), {
					size: 14,
					class: f(["transition-transform", u.value ? "rotate-180" : ""])
				}, null, 8, ["class"])], 32), u.value ? (h(), i("div", {
					key: 0,
					class: "absolute left-0 top-full pt-2 w-48",
					onMouseenter: c[4] ||= (e) => u.value = !0,
					onMouseleave: c[5] ||= (e) => u.value = !1
				}, [a("div", Sn, [(h(!0), i(e, null, _(m.value, (e) => (h(), n(d, {
					key: e.to,
					to: e.to,
					class: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
					onClick: c[3] ||= (e) => u.value = !1
				}, {
					default: x(() => [o(y(e.label), 1)]),
					_: 2
				}, 1032, ["to"]))), 128))])], 32)) : r("v-if", !0)])
			])]), a("div", Cn, [
				a("a", wn, [a("span", Tn, y(b(l)("shared.goToGithub")), 1), c[6] ||= a("svg", {
					viewBox: "0 0 16 16",
					"aria-hidden": "true",
					width: "20",
					height: "20"
				}, [a("path", {
					fill: "currentColor",
					d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
				})], -1)]),
				s(fn),
				s(mn)
			])])]);
		};
	}
}), Dn = c({
	__name: "Layout",
	setup(t) {
		let n = S(), { locale: r } = $(), a = g(0);
		return p(() => {
			a.value = typeof performance < "u" ? performance.now() : 0;
		}), m(() => {
			Gt(), Kt("AppRoot", a.value);
		}), re(() => n.params.locale, (e) => {
			e && (document.documentElement.lang = e, r.value = e);
		}, { immediate: !0 }), (t, n) => {
			let r = v("router-view");
			return h(), i(e, null, [
				s(En),
				s(r),
				s(an)
			], 64);
		};
	}
}), On = Wt({
	legacy: !1,
	locale: "en",
	fallbackLocale: "en"
}), kn = c({
	__name: "Wrapper",
	setup(e) {
		let t = l()?.appContext.app;
		return t && !t.config.globalProperties.$i18n && t.use(On), (e, t) => ne(e.$slots, "default");
	}
}), An = { render() {
	return u(kn, {}, { default: () => u(Dn) });
} };
export { An as default };
