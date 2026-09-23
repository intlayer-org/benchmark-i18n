import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, createTextVNode as i, createVNode as a, defineComponent as o, getCurrentInstance as s, h as c, inject as l, openBlock as u, readonly as d, ref as f, renderSlot as p, toDisplayString as m, unref as h } from "vue";
var ee = (e, t, n) => typeof e == "string" ? n?.[t]?.[e] ?? n?.[t.split("-")[0] ?? ""]?.[e] : e, g = (e, t, n, r) => {
	let i = e instanceof Date ? e : new Date(e), a = ee(t, n, r);
	try {
		return new Intl.DateTimeFormat(n, a).format(i);
	} catch {
		return String(e);
	}
}, _ = (e, t, n, r) => {
	let i = ee(t, n, r);
	try {
		return new Intl.NumberFormat(n, i).format(e);
	} catch {
		return String(e);
	}
}, te = "translation", ne = "enumeration", re = "plural", v = "insertion", ie = "object", ae = "array", y = "markdown", b = "html", oe = "gender", se = "select", x = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => x(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => x(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ae,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ie,
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
}, S = (e, t, n = ".") => {
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
}, ce = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, le = (e, t) => e[ce(e, t) ?? "fallback"], C = {
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
}, w = {
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
}, T = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, ue = 50, de = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Set(), pe = (e) => {
	fe.has(e) || (fe.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, me = {
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
}, he = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (pe(e), me[e]);
};
function E(e, t, n) {
	let r = t ?? C?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = de.get(a);
	o || (o = /* @__PURE__ */ new Map(), de.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? he(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > ue && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var ge = (e, t, n) => e[E("PluralRules", n).select(t)] ?? e.other, _e = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, D = [
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
			return n === "percent" ? E("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? E("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : E("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return E("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, A = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = O(t, r);
	return o === void 0 ? e : i ? k(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = O(t, r);
	return o === void 0 ? e : k(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = O(t, n);
	return r === void 0 ? e : String(r);
}), j = (e, t) => e[t] ?? e.count ?? e.n, M = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return A(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return M(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(M(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return M(r[v], t, n);
	if (r.nodeType === "html") return M(r[b], t, n);
	if (r.nodeType === "plural") {
		let e = r[re];
		return M(ge(e, Number(j(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[ne], i = D.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) D.includes(t) || (o[t] = n);
		let s = j(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = E("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? le(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return M(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[se], i = j(t, typeof r.variable == "string" ? r.variable : "value");
		return M(_e(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[oe];
		return M(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, ve = (e) => e.split(/(?<!\\)\|/).map((e) => e.replace(/\\\|/g, "|").trim()), ye = (e, t) => {
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
			let e = ve(t);
			t = e[ye(n ?? 1, e.length)] ?? t;
		}
		return A(t, i, r);
	}
	let a = M(e, i, r);
	return typeof a == "string" ? a : String(a ?? "");
}, F = "\x1B[0m", I = "\x1B[90m", be = "\x1B[34m", xe = "\x1B[31m", Se = "\x1B[32m", Ce = "\x1B[35m", we = "\x1B[38;5;3m", L = "\x1B[36m", Te = (e) => e, Ee = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Te(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, R = (e, t) => (n, r) => Ee(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), z = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? F : n : F}` : e, De = (e, t = we, n = F) => [e].flat().map((e) => z(e, t, n)).join(", ");
z("✗", xe), z("✓", Se), z("⏲", be);
var B = /* @__PURE__ */ new WeakMap(), V = 0, Oe = (e) => {
	if (!e) return "base";
	let t = B.get(e);
	if (t) return t;
	V += 1;
	let n = `p${V}`;
	return B.set(e, n), n;
}, ke = 256, H = /* @__PURE__ */ new WeakMap(), Ae = (e) => typeof e == "object" && !!e, je = (e, t, n) => `${e}_${t}_${Oe(n)}`, Me = (e, t) => {
	if (!Ae(e)) return { hit: !1 };
	let n = H.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, U = (e, t, n) => {
	if (!Ae(e)) return n;
	let r = H.get(e);
	return r || (r = /* @__PURE__ */ new Map(), H.set(e, r)), r.size >= ke && r.clear(), r.set(t, n), n;
}, Ne = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), W = "default", Pe = /[^A-Za-z0-9._&=-]/g, G = /[^A-Za-z0-9._-]/g, Fe = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, K = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Fe);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, Ie = (e) => e === void 0 ? W : typeof e == "string" ? K(e, Pe) : Object.keys(e).sort().map((t) => `${K(t, G)}=${K(String(e[t]), G)}`).join("&"), Le = (e) => Array.isArray(e) ? e.length === 0 ? [W] : e.map(Ie) : [Ie(e)], Re = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? W : e[0] ?? "default";
}, ze = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Be = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Ve = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, He = (e, t) => {
	if (!Be(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? W : Re(Le(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ze(e, n, t, s)).map((t) => Ve(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Ue = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, We = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? Le(n).join(",") : String(n)}`;
}).join("|") : "", Ge = () => ({}), Ke = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), qe = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Ke.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : qe(e ? `${e}.${String(n)}` : String(n)) }), Je = /* @__PURE__ */ new Set(), Ye = (e, t, n) => {
	let r = Ge()[e];
	return r ? ft(r, t, n) : (Je.has(e) || (R({ log: T })(typeof window > "u" ? `Dictionary ${De(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), Je.add(e)), qe(e));
}, Xe = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Ze = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (Xe(e) && Xe(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : Ze(e[r], t[r]));
		return n;
	}
	return e;
}, Qe = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => Ze(e, t));
}, q = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, $e = (e) => {
	if (typeof e == "string") return e;
	if (q(e)) return e.nodeType === "html" ? e[b] : e[y];
}, et = (e, t) => {
	if (typeof e == "string") return t;
	if (q(e)) {
		let n = e.nodeType === "html" ? b : y;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, tt = (e, t, n, r, i) => {
	let a = et(e, Ne($e(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, J = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, nt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? J : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: te,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return Qe(o, e, t);
	}
}, rt = J, it = J, at = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: v }], i = e[v], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => tt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Ne(i, e);
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
}, ot = J, st = J, ct = (e) => J, lt = J, ut = (e, t = !0) => [
	nt(e ?? C.defaultLocale, t ? C.defaultLocale : void 0),
	rt,
	it,
	at,
	ct(e ?? C.defaultLocale),
	lt,
	ot,
	st
], dt = (e, t, n = []) => x(e, {
	...t,
	plugins: n
}), ft = (e, t, n) => {
	let { locale: r, selector: i } = Ue(t), a = je(r ?? C.defaultLocale, We(i), n), o = Me(e, a);
	if (o.hit) return o.content;
	let s = n ?? ut(r), c = He(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return dt(e.content, t, s);
	};
	return c === null ? U(e, a, null) : Array.isArray(c) ? U(e, a, c.map(l)) : U(e, a, l(c));
}, pt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, mt = Symbol("intlayer"), Y = null, ht = (e, t = !0, n) => {
	if (Y) return Y;
	pt();
	let { defaultLocale: r } = C ?? {}, i = f(e ?? r), a = (e) => {
		i.value = e;
	}, o = f(n);
	return Y = {
		locale: d(i),
		setLocale: a,
		variant: d(o),
		setVariant: (e) => {
			o.value = e;
		},
		isCookieEnabled: t
	}, Y;
}, gt = (e, t) => {
	let { locale: n, isCookieEnabled: r, variant: i } = t ?? {}, a = ht(n, r, i);
	return e.provide(mt, a), e;
}, _t = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, vt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = _t(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, yt = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, bt = (e = X) => {
	let { locales: t } = C;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!yt) for (let t = 0; t < (w.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(w.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, xt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !yt && w.storage.cookies) for (let n = 0; n < w.storage.cookies.length; n++) {
		let { name: r, attributes: i } = w.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: _t(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, vt(r, e, i));
			} catch {}
		}
	}
};
bt(X);
var St = (e, t) => xt(e, {
	...X,
	isCookieEnabled: t
}), { defaultLocale: Ct, locales: wt } = C ?? {}, Tt = ({ isCookieEnabled: e, onLocaleChange: n } = {}) => {
	let r = l(mt);
	return {
		locale: t(() => r?.locale?.value ?? Ct),
		defaultLocale: Ct,
		availableLocales: wt,
		setLocale: (t) => {
			if (!wt?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			r && r.setLocale(t), St(t, e ?? r?.isCookieEnabled ?? !0), n?.(t);
		}
	};
}, Et = Symbol("global-i18n"), Dt = "translation", Z = (e, t, n) => {
	try {
		let r = S(Ye(t, e), n);
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
		let t = Z(e, Dt, i);
		if (t !== void 0) return t;
	}
}, Ot = (e, t, n, r, i) => {
	let { values: a, count: o, defaultMessage: s } = N(r), c = Q(e, t, n);
	if (c === void 0) {
		if (i?.[e]) {
			let r = t ? `${t}.${n}` : n, s = S(i[e], r);
			if (s !== void 0) return P(s, a, o, e);
		}
		return s === void 0 ? n : P(s, a, o, e);
	}
	return P(c, a, o, e);
}, kt = () => C?.locales?.map(String) ?? [], $ = (e) => {
	R({ log: T })(`${z(e, L)} has no effect with ${z("@intlayer/vue-i18n", Ce)} — translations are managed by the compiled intlayer dictionaries.`);
}, At = ((e = {}) => {
	let n = e.messages;
	e.messages !== void 0 && R({ log: T })(`${z("createI18n", L)}: the ${z("`messages`", L)} option is used as a fallback. For optimal bundle size, remove the locale JSON imports and use ${z("useDictionary", L)} or compile your intlayer dictionaries instead:\n  ${z("Before:", I)} createI18n({ messages: { en, fr, … } })\n  ${z("After: ", I)} createI18n({})`);
	let r = ht(e.locale), i = e.datetimeFormats, a = e.numberFormats, o = () => String(r.locale.value), s = t({
		get: () => o(),
		set: (e) => {
			r.setLocale(e);
		}
	}), c = (e, ...t) => Ot(o(), void 0, e, t, n), l = (e, t) => g(e, t, o(), i), u = (e, t) => _(e, t, o(), a), d = {
		locale: s,
		availableLocales: kt(),
		fallbackLocale: e.fallbackLocale ?? C?.defaultLocale,
		t: c,
		tc: c,
		te: (e) => Q(o(), void 0, e) !== void 0,
		tm: (e) => Q(o(), void 0, e) ?? {},
		rt: (e, ...t) => {
			let { values: n, count: r } = N(t);
			return P(e, n, r, o());
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
			return kt();
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
			gt(t, { locale: e.locale }), t.provide(Et, m), t.config.globalProperties.$t = c, t.config.globalProperties.$tc = c, t.config.globalProperties.$te = d.te, t.config.globalProperties.$tm = d.tm, t.config.globalProperties.$rt = d.rt, t.config.globalProperties.$d = l, t.config.globalProperties.$n = u, t.config.globalProperties.$i18n = f, t.directive("t", {
				beforeMount: p,
				updated: p
			});
		}
	};
	return m;
}), jt = ((e) => {
	let { locale: n, setLocale: r, availableLocales: i } = Tt(), a = l(Et)?.__optionsMessages, o = e?.namespace, s = e?.datetimeFormats, c = e?.numberFormats, u = t({
		get: () => n.value,
		set: (e) => {
			r(e);
		}
	}), d = (e, ...t) => Ot(n.value, o, e, t, a);
	return {
		locale: u,
		availableLocales: i,
		t: d,
		tc: d,
		te: (e) => Q(n.value, o, e) !== void 0,
		tm: (e) => Q(n.value, o, e) ?? {},
		rt: (e, ...t) => {
			let { values: r, count: i } = N(t);
			return P(e, r, i, n.value);
		},
		d: (e, t) => g(e, t, n.value, s),
		n: (e, t) => _(e, t, n.value, c)
	};
}), Mt = { class: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground" }, Nt = o({
	__name: "MockBanner",
	setup(e) {
		let { t } = jt();
		return (e, r) => (u(), n("div", Mt, m(h(t)("mockBanner")), 1));
	}
}), Pt = { class: "mb-2 text-3xl font-bold text-foreground" }, Ft = { class: "mb-8 text-muted-foreground" }, It = {
	href: "mailto:contact@intlayer.org",
	class: "text-primary hover:underline"
}, Lt = o({
	__name: "ContactHeader",
	setup(t) {
		let { t: o } = jt();
		return (t, s) => (u(), n(e, null, [
			a(Nt),
			r("h1", Pt, m(h(o)("contact.header.title")), 1),
			r("p", Ft, [
				i(m(h(o)("contact.header.description")) + " ", 1),
				r("a", It, m(h(o)("shared.contactEmail")), 1),
				s[0] ||= i(". ", -1)
			])
		], 64));
	}
}), Rt = At({
	legacy: !1,
	locale: "en",
	fallbackLocale: "en"
}), zt = o({
	__name: "Wrapper",
	setup(e) {
		let t = s()?.appContext.app;
		return t && !t.config.globalProperties.$i18n && t.use(Rt), (e, t) => p(e.$slots, "default");
	}
}), Bt = { render() {
	return c(zt, {}, { default: () => c(Lt) });
} };
export { Bt as default };
