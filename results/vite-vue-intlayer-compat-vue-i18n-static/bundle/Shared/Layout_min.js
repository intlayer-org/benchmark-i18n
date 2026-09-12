import { Fragment as e, computed as t, createBlock as n, createCommentVNode as r, createElementBlock as i, createElementVNode as a, createTextVNode as o, createVNode as s, defineComponent as c, getCurrentInstance as l, h as u, inject as d, normalizeClass as f, onBeforeMount as p, onMounted as m, onUnmounted as ee, openBlock as h, readonly as te, ref as g, renderList as _, renderSlot as ne, resolveComponent as v, toDisplayString as y, watch as re, withCtx as b } from "vue";
import { useRoute as x, useRouter as ie } from "vue-router";
import { ChevronDown as ae } from "lucide-vue-next";
var oe = (e, t, n) => typeof e == "string" ? n?.[t]?.[e] ?? n?.[t.split("-")[0] ?? ""]?.[e] : e, se = (e, t, n, r) => {
	let i = e instanceof Date ? e : new Date(e), a = oe(t, n, r);
	try {
		return new Intl.DateTimeFormat(n, a).format(i);
	} catch {
		return String(e);
	}
}, ce = (e, t, n, r) => {
	let i = oe(t, n, r);
	try {
		return new Intl.NumberFormat(n, i).format(e);
	} catch {
		return String(e);
	}
}, le = "translation", ue = "enumeration", de = "plural", S = "insertion", fe = "object", pe = "array", me = "markdown", C = "html", he = "gender", ge = "select", w = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => w(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => w(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: pe,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: fe,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = w(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = w(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, _e = (e, t, n = ".") => {
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
}, ve = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, ye = (e, t) => e[ve(e, t) ?? "fallback"], T = {
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
}, E = {
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
}, D = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, be = 50, xe = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Set(), Ce = (e) => {
	Se.has(e) || (Se.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
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
	let r = t ?? T?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = xe.get(a);
	o || (o = /* @__PURE__ */ new Map(), xe.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Te(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > be && o.clear(), s = new t(r, n), o.set(i, s);
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
}, Oe = (e, t, n, r) => {
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
}, ke = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = A(t, r);
	return o === void 0 ? e : i ? Oe(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = A(t, r);
	return o === void 0 ? e : Oe(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = A(t, n);
	return r === void 0 ? e : String(r);
}), j = (e, t) => e[t] ?? e.count ?? e.n, M = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return ke(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return M(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(M(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return M(r[S], t, n);
	if (r.nodeType === "html") return M(r[C], t, n);
	if (r.nodeType === "plural") {
		let e = r[de];
		return M(Ee(e, Number(j(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[ue], i = k.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) k.includes(t) || (o[t] = n);
		let s = j(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = O("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? ye(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return M(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[ge], i = j(t, typeof r.variable == "string" ? r.variable : "value");
		return M(De(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[he];
		return M(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Ae = (e) => e.split(/(?<!\\)\|/).map((e) => e.replace(/\\\|/g, "|").trim()), je = (e, t) => {
	let n = Math.abs(e);
	return t === 2 ? n ? +(n > 1) : 1 : n ? Math.min(n, 2) : 0;
}, N = (e) => {
	let t = { values: {} };
	for (let n of e) if (typeof n == "number") t.count = n;
	else if (typeof n == "string") t.defaultMessage = n;
	else if (Array.isArray(n)) t.values = { ...n.map(String) };
	else if (typeof n == "object" && n) {
		let e = n;
		t.values = e, typeof e.plural == "number" && (t.count = e.plural);
	}
	return t;
}, P = (e, t, n, r) => {
	let i = { ...t };
	if (n !== void 0 && (i.count ??= n, i.n ??= n), typeof e == "string") {
		let t = e;
		if (/(?<!\\)\|/.test(t)) {
			let e = Ae(t);
			t = e[je(n ?? 1, e.length)] ?? t;
		}
		return ke(t, i, r);
	}
	let a = M(e, i, r);
	return typeof a == "string" ? a : String(a ?? "");
}, F = "\x1B[0m", Me = "\x1B[90m", Ne = "\x1B[34m", Pe = "\x1B[31m", Fe = "\x1B[32m", Ie = "\x1B[35m", Le = "\x1B[38;5;3m", I = "\x1B[36m", Re = (e) => e, ze = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Re(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, L = (e, t) => (n, r) => ze(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), R = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? F : n : F}` : e, Be = (e, t = Le, n = F) => [e].flat().map((e) => R(e, t, n)).join(", ");
R("✗", Pe), R("✓", Fe), R("⏲", Ne);
var Ve = /* @__PURE__ */ new WeakMap(), He = 0, Ue = (e) => {
	if (!e) return "base";
	let t = Ve.get(e);
	if (t) return t;
	He += 1;
	let n = `p${He}`;
	return Ve.set(e, n), n;
}, We = 256, z = /* @__PURE__ */ new WeakMap(), B = (e) => typeof e == "object" && !!e, Ge = (e, t, n) => `${e}_${t}_${Ue(n)}`, Ke = (e, t) => {
	if (!B(e)) return { hit: !1 };
	let n = z.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, V = (e, t, n) => {
	if (!B(e)) return n;
	let r = z.get(e);
	return r || (r = /* @__PURE__ */ new Map(), z.set(e, r)), r.size >= We && r.clear(), r.set(t, n), n;
}, qe = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), H = "default", Je = /[^A-Za-z0-9._&=-]/g, Ye = /[^A-Za-z0-9._-]/g, Xe = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, U = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Xe);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, Ze = (e) => e === void 0 ? H : typeof e == "string" ? U(e, Je) : Object.keys(e).sort().map((t) => `${U(t, Ye)}=${U(String(e[t]), Ye)}`).join("&"), W = (e) => Array.isArray(e) ? e.length === 0 ? [H] : e.map(Ze) : [Ze(e)], Qe = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? H : e[0] ?? "default";
}, $e = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, et = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, tt = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, nt = (e, t) => {
	if (!et(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? H : Qe(W(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => $e(e, n, t, s)).map((t) => tt(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, rt = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, it = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? W(n).join(",") : String(n)}`;
}).join("|") : "", at = () => ({}), ot = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), st = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : ot.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : st(e ? `${e}.${String(n)}` : String(n)) }), ct = /* @__PURE__ */ new Set(), lt = (e, t, n) => {
	let r = at()[e];
	return r ? Et(r, t, n) : (ct.has(e) || (L({ log: D })(typeof window > "u" ? `Dictionary ${Be(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), ct.add(e)), st(e));
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
}, G = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, pt = (e) => {
	if (typeof e == "string") return e;
	if (G(e)) return e.nodeType === "html" ? e[C] : e[me];
}, mt = (e, t) => {
	if (typeof e == "string") return t;
	if (G(e)) {
		let n = e.nodeType === "html" ? C : me;
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
}, K = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, gt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? K : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: le,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return ft(o, e, t);
	}
}, _t = K, vt = K, yt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? K : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: S }], i = e[S], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || G(e),
			transform: (e, n, r) => {
				if (G(e)) return (i) => ht(e, i, n, t.plugins, r);
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
}, bt = K, xt = K, St = (e) => K, Ct = K, wt = (e, t = !0) => [
	gt(e ?? T.defaultLocale, t ? T.defaultLocale : void 0),
	_t,
	vt,
	yt,
	St(e ?? T.defaultLocale),
	Ct,
	bt,
	xt
], Tt = (e, t, n = []) => w(e, {
	...t,
	plugins: n
}), Et = (e, t, n) => {
	let { locale: r, selector: i } = rt(t), a = Ge(r ?? T.defaultLocale, it(i), n), o = Ke(e, a);
	if (o.hit) return o.content;
	let s = n ?? wt(r), c = nt(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Tt(e.content, t, s);
	};
	return c === null ? V(e, a, null) : Array.isArray(c) ? V(e, a, c.map(l)) : V(e, a, l(c));
}, Dt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Ot = Symbol("intlayer"), q = null, kt = (e, t = !0, n) => {
	if (q) return q;
	Dt();
	let { defaultLocale: r } = T ?? {}, i = g(e ?? r), a = (e) => {
		i.value = e;
	}, o = g(n);
	return q = {
		locale: te(i),
		setLocale: a,
		variant: te(o),
		setVariant: (e) => {
			o.value = e;
		},
		isCookieEnabled: t
	}, q;
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
var J = {
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
}, Pt = (e = J) => {
	let { locales: t } = T;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Nt) for (let t = 0; t < (E.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(E.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, Ft = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !Nt && E.storage.cookies) for (let n = 0; n < E.storage.cookies.length; n++) {
		let { name: r, attributes: i } = E.storage.cookies[n];
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
Pt(J);
var It = (e, t) => Ft(e, {
	...J,
	isCookieEnabled: t
}), { defaultLocale: Lt, locales: Rt } = T ?? {}, zt = ({ isCookieEnabled: e, onLocaleChange: n } = {}) => {
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
}, Bt = Symbol("global-i18n"), Vt = "translation", Y = (e, t, n) => {
	try {
		let r = _e(lt(t, e), n);
		if (r != null) return r;
	} catch {}
}, X = (e, t, n) => {
	let r = t, i = n;
	if (n.includes(":")) {
		let e = n.indexOf(":");
		r = n.slice(0, e), i = n.slice(e + 1);
	}
	if (r) {
		let t = Y(e, r, i);
		if (t !== void 0) return t;
	}
	if (i.includes(".")) {
		let t = i.indexOf("."), n = Y(e, i.slice(0, t), i.slice(t + 1));
		if (n !== void 0) return n;
	}
	if (!r) {
		let t = Y(e, Vt, i);
		if (t !== void 0) return t;
	}
}, Ht = (e, t, n, r, i) => {
	let { values: a, count: o, defaultMessage: s } = N(r), c = X(e, t, n);
	if (c === void 0) {
		if (i?.[e]) {
			let r = t ? `${t}.${n}` : n, s = _e(i[e], r);
			if (s !== void 0) return P(s, a, o, e);
		}
		return s === void 0 ? n : P(s, a, o, e);
	}
	return P(c, a, o, e);
}, Ut = () => T?.locales?.map(String) ?? [], Z = (e) => {
	L({ log: D })(`${R(e, I)} has no effect with ${R("@intlayer/vue-i18n", Ie)} — translations are managed by the compiled intlayer dictionaries.`);
}, Wt = ((e = {}) => {
	let n = e.messages;
	e.messages !== void 0 && L({ log: D })(`${R("createI18n", I)}: the ${R("`messages`", I)} option is used as a fallback. For optimal bundle size, remove the locale JSON imports and use ${R("useDictionary", I)} or compile your intlayer dictionaries instead:\n  ${R("Before:", Me)} createI18n({ messages: { en, fr, … } })\n  ${R("After: ", Me)} createI18n({})`);
	let r = kt(e.locale), i = e.datetimeFormats, a = e.numberFormats, o = () => String(r.locale.value), s = t({
		get: () => o(),
		set: (e) => {
			r.setLocale(e);
		}
	}), c = (e, ...t) => Ht(o(), void 0, e, t, n), l = (e, t) => se(e, t, o(), i), u = (e, t) => ce(e, t, o(), a), d = {
		locale: s,
		availableLocales: Ut(),
		fallbackLocale: e.fallbackLocale ?? T?.defaultLocale,
		t: c,
		tc: c,
		te: (e) => X(o(), void 0, e) !== void 0,
		tm: (e) => X(o(), void 0, e) ?? {},
		rt: (e, ...t) => {
			let { values: n, count: r } = N(t);
			return P(e, n, r, o());
		},
		d: l,
		n: u,
		setLocaleMessage: (e, t) => {
			Z("setLocaleMessage");
		},
		mergeLocaleMessage: (e, t) => {
			Z("mergeLocaleMessage");
		},
		getLocaleMessage: (e) => (Z("getLocaleMessage"), {})
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
}), Q = ((e) => {
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
		te: (e) => X(n.value, o, e) !== void 0,
		tm: (e) => X(n.value, o, e) ?? {},
		rt: (e, ...t) => {
			let { values: r, count: i } = N(t);
			return P(e, r, i, n.value);
		},
		d: (e, t) => se(e, t, n.value, s),
		n: (e, t) => ce(e, t, n.value, c)
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
var qt = c({
	__name: "Footer",
	setup(e, { expose: n }) {
		n();
		let { t: r } = Q(), i = x(), a = t(() => i.params.locale || "en"), o = {
			t: r,
			route: i,
			currentLocale: a,
			footerLinks: t(() => [
				{
					label: r("footer.github"),
					href: "https://github.com/intlayer-org/benchmark-i18n",
					isInternal: !1
				},
				{
					label: r("footer.methodology"),
					to: `/${a.value}/about`,
					isInternal: !0
				},
				{
					label: r("footer.contributing"),
					to: `/${a.value}/contact`,
					isInternal: !0
				}
			])
		};
		return Object.defineProperty(o, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), o;
	}
}), $ = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Jt = { class: "mt-20 border-t border-border bg-card" }, Yt = { class: "container py-8" }, Xt = { class: "grid gap-8 md:grid-cols-3" }, Zt = { class: "mb-2 text-sm font-semibold text-foreground" }, Qt = { class: "text-sm text-muted-foreground" }, $t = { class: "mb-2 text-sm font-semibold text-foreground" }, en = { class: "space-y-1" }, tn = ["href"], nn = { class: "mb-2 text-sm font-semibold text-foreground" }, rn = { class: "text-sm text-muted-foreground" }, an = { class: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground" };
function on(t, r, s, c, l, u) {
	let d = v("router-link");
	return h(), i("footer", Jt, [a("div", Yt, [a("div", Xt, [
		a("div", null, [a("h3", Zt, y(c.t("footer.title")), 1), a("p", Qt, y(c.t("footer.description")), 1)]),
		a("div", null, [a("h3", $t, y(c.t("footer.resources")), 1), a("ul", en, [(h(!0), i(e, null, _(c.footerLinks, (e) => (h(), i("li", { key: e.label }, [e.isInternal ? (h(), n(d, {
			key: 0,
			to: e.to,
			class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
		}, {
			default: b(() => [o(y(e.label), 1)]),
			_: 2
		}, 1032, ["to"])) : (h(), i("a", {
			key: 1,
			href: e.href,
			target: "_blank",
			rel: "noreferrer",
			class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
		}, y(e.label), 9, tn))]))), 128))])]),
		a("div", null, [a("h3", nn, y(c.t("footer.contact")), 1), a("p", rn, y(c.t("shared.contactEmail")), 1)])
	]), a("div", an, y(c.t("footer.builtWith")), 1)])]);
}
var sn = $(qt, [["render", on], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/src/components/Footer.vue"]]);
function cn(e) {
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
var ln = [
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
], un = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, dn = c({
	__name: "LocaleSwitcher",
	setup(e, { expose: n }) {
		n();
		let r = x(), i = ie(), a = {
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
				return un;
			},
			get locales() {
				return ln;
			}
		};
		return Object.defineProperty(a, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), a;
	}
}), fn = { class: "flex items-center gap-2" }, pn = ["value"], mn = ["value"];
function hn(t, n, r, o, s, c) {
	return h(), i("div", fn, [a("select", {
		value: o.currentLocale,
		onChange: n[0] ||= (e) => o.handleLocaleChange(e.target.value),
		class: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
	}, [(h(!0), i(e, null, _(o.locales, (e) => (h(), i("option", {
		key: e,
		value: e
	}, y(o.getLocaleName(e)), 9, mn))), 128))], 40, pn)]);
}
var gn = $(dn, [["render", hn], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/src/components/LocaleSwitcher.vue"]]), _n = c({
	__name: "ThemeToggle",
	setup(e, { expose: t }) {
		t();
		let { t: n } = Q(), r = g("auto");
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
		re(r, (e) => {
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
}), vn = ["aria-label", "title"];
function yn(e, t, n, r, a, o) {
	return h(), i("button", {
		type: "button",
		onClick: r.toggleMode,
		"aria-label": r.getLabel(),
		title: r.getLabel(),
		class: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"
	}, y(r.mode === "auto" ? r.t("themeToggle.auto") : r.mode === "dark" ? r.t("themeToggle.dark") : r.t("themeToggle.light")), 9, vn);
}
var bn = $(_n, [["render", yn], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/src/components/ThemeToggle.vue"]]), xn = c({
	__name: "Header",
	setup(e, { expose: n }) {
		n(), cn("Header");
		let { t: r } = Q(), i = g(!1), a = x(), o = t(() => a.params.locale || "en"), s = {
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
				return ae;
			},
			LocaleSwitcher: gn,
			ThemeToggle: bn
		};
		return Object.defineProperty(s, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), s;
	}
}), Sn = { class: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg" }, Cn = { class: "container flex h-16 items-center justify-between" }, wn = { class: "flex items-center gap-8" }, Tn = { class: "hidden items-center gap-6 text-sm font-medium md:flex" }, En = ["href", "onClick"], Dn = ["href", "onClick"], On = { class: "relative" }, kn = { class: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1" }, An = { class: "flex items-center gap-4" }, jn = {
	href: "https://github.com/intlayer-org/benchmark-i18n",
	target: "_blank",
	rel: "noreferrer",
	class: "text-muted-foreground transition hover:text-foreground"
}, Mn = { class: "sr-only" };
function Nn(t, c, l, u, d, p) {
	let m = v("router-link");
	return h(), i("header", Sn, [a("nav", Cn, [a("div", wn, [s(m, {
		to: `/${u.currentLocale}`,
		class: "text-lg font-bold tracking-tight text-primary no-underline"
	}, {
		default: b(() => [o(y(u.t("shared.appName")), 1)]),
		_: 1
	}, 8, ["to"]), a("div", Tn, [
		s(m, {
			to: `/${u.currentLocale}`,
			custom: ""
		}, {
			default: b(({ href: e, navigate: t, isExactActive: n }) => [a("a", {
				href: e,
				class: f(["nav-link", { "router-link-active": n }]),
				onClick: t
			}, y(u.t("header.home")), 11, En)]),
			_: 1
		}, 8, ["to"]),
		s(m, {
			to: `/${u.currentLocale}/about`,
			custom: ""
		}, {
			default: b(({ href: e, navigate: t, isActive: n }) => [a("a", {
				href: e,
				class: f(["nav-link", { "router-link-active": n }]),
				onClick: t
			}, y(u.t("header.methodology")), 11, Dn)]),
			_: 1
		}, 8, ["to"]),
		a("div", On, [a("button", {
			type: "button",
			class: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
			onMouseenter: c[0] ||= (e) => u.isMockPagesOpen = !0,
			onMouseleave: c[1] ||= (e) => u.isMockPagesOpen = !1,
			onClick: c[2] ||= (e) => u.isMockPagesOpen = !u.isMockPagesOpen
		}, [o(y(u.t("header.mockPages")) + " ", 1), s(u.ChevronDown, {
			size: 14,
			class: f(["transition-transform", u.isMockPagesOpen ? "rotate-180" : ""])
		}, null, 8, ["class"])], 32), u.isMockPagesOpen ? (h(), i("div", {
			key: 0,
			class: "absolute left-0 top-full pt-2 w-48",
			onMouseenter: c[4] ||= (e) => u.isMockPagesOpen = !0,
			onMouseleave: c[5] ||= (e) => u.isMockPagesOpen = !1
		}, [a("div", kn, [(h(!0), i(e, null, _(u.mockPages, (e) => (h(), n(m, {
			key: e.to,
			to: e.to,
			class: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
			onClick: c[3] ||= (e) => u.isMockPagesOpen = !1
		}, {
			default: b(() => [o(y(e.label), 1)]),
			_: 2
		}, 1032, ["to"]))), 128))])], 32)) : r("v-if", !0)])
	])]), a("div", An, [
		a("a", jn, [a("span", Mn, y(u.t("shared.goToGithub")), 1), c[6] ||= a("svg", {
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
var Pn = $(xn, [["render", Nn], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/src/components/Header.vue"]]), Fn = c({
	__name: "Layout",
	setup(e, { expose: t }) {
		t();
		let n = x(), { locale: r } = Q(), i = g(0);
		p(() => {
			i.value = typeof performance < "u" ? performance.now() : 0;
		}), m(() => {
			Gt(), Kt("AppRoot", i.value);
		}), re(() => n.params.locale, (e) => {
			e && (document.documentElement.lang = e, r.value = e);
		}, { immediate: !0 });
		let a = {
			route: n,
			locale: r,
			renderStart: i,
			Footer: sn,
			Header: Pn
		};
		return Object.defineProperty(a, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), a;
	}
});
function In(t, n, r, a, o, c) {
	let l = v("router-view");
	return h(), i(e, null, [
		s(a.Header),
		s(l),
		s(a.Footer)
	], 64);
}
var Ln = $(Fn, [["render", In], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/src/components/Layout.vue"]]), Rn = Wt({
	legacy: !1,
	locale: "en",
	fallbackLocale: "en"
}), zn = c({
	__name: "Wrapper",
	setup(e, { expose: t }) {
		t();
		let n = l()?.appContext.app;
		n && !n.config.globalProperties.$i18n && n.use(Rn);
		let r = { app: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
});
function Bn(e, t, n, r, i, a) {
	return ne(e.$slots, "default");
}
var Vn = $(zn, [["render", Bn], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/scripts/Wrapper.vue"]]), Hn = { render() {
	return u(Vn, {}, { default: () => u(Ln) });
} };
export { Hn as default };
