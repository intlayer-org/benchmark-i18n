import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, createVNode as i, defineComponent as a, getCurrentInstance as o, h as s, inject as c, openBlock as l, readonly as u, ref as d, renderSlot as f, toDisplayString as p } from "vue";
var m = (e, t, n) => typeof e == "string" ? n?.[t]?.[e] ?? n?.[t.split("-")[0] ?? ""]?.[e] : e, h = (e, t, n, r) => {
	let i = e instanceof Date ? e : new Date(e), a = m(t, n, r);
	try {
		return new Intl.DateTimeFormat(n, a).format(i);
	} catch {
		return String(e);
	}
}, ee = (e, t, n, r) => {
	let i = m(t, n, r);
	try {
		return new Intl.NumberFormat(n, i).format(e);
	} catch {
		return String(e);
	}
}, te = "translation", ne = "enumeration", re = "plural", g = "insertion", ie = "object", ae = "array", oe = "markdown", _ = "html", se = "gender", ce = "select", v = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => v(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => v(e, {
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
			n[r] = v(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = v(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, le = (e, t, n = ".") => {
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
}, ue = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, de = (e, t) => e[ue(e, t) ?? "fallback"], y = {
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
}, fe = 50, pe = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Set(), he = (e) => {
	me.has(e) || (me.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, ge = {
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
}, _e = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (he(e), ge[e]);
};
function S(e, t, n) {
	let r = t ?? y?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = pe.get(a);
	o || (o = /* @__PURE__ */ new Map(), pe.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? _e(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > fe && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var ve = (e, t, n) => e[S("PluralRules", n).select(t)] ?? e.other, ye = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, be = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], C = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, w = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? S("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? S("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : S("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return S("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, xe = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = C(t, r);
	return o === void 0 ? e : i ? w(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = C(t, r);
	return o === void 0 ? e : w(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = C(t, n);
	return r === void 0 ? e : String(r);
}), T = (e, t) => e[t] ?? e.count ?? e.n, E = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return xe(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return E(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(E(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return E(r[g], t, n);
	if (r.nodeType === "html") return E(r[_], t, n);
	if (r.nodeType === "plural") {
		let e = r[re];
		return E(ve(e, Number(T(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[ne], i = be.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) be.includes(t) || (o[t] = n);
		let s = T(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = S("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? de(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return E(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[ce], i = T(t, typeof r.variable == "string" ? r.variable : "value");
		return E(ye(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[se];
		return E(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Se = (e) => e.split(/(?<!\\)\|/).map((e) => e.replace(/\\\|/g, "|").trim()), Ce = (e, t) => {
	let n = Math.abs(e);
	return t === 2 ? n ? +(n > 1) : 1 : n ? Math.min(n, 2) : 0;
}, D = (e) => {
	let t = { values: {} };
	for (let n of e) if (typeof n == "number") t.count = n;
	else if (typeof n == "string") t.defaultMessage = n;
	else if (Array.isArray(n)) t.values = { ...n.map(String) };
	else if (typeof n == "object" && n) {
		let e = n;
		t.values = e, typeof e.plural == "number" && (t.count = e.plural);
	}
	return t;
}, O = (e, t, n, r) => {
	let i = { ...t };
	if (n !== void 0 && (i.count ??= n, i.n ??= n), typeof e == "string") {
		let t = e;
		if (/(?<!\\)\|/.test(t)) {
			let e = Se(t);
			t = e[Ce(n ?? 1, e.length)] ?? t;
		}
		return xe(t, i, r);
	}
	let a = E(e, i, r);
	return typeof a == "string" ? a : String(a ?? "");
}, k = "\x1B[0m", A = "\x1B[90m", we = "\x1B[34m", Te = "\x1B[31m", Ee = "\x1B[32m", De = "\x1B[35m", Oe = "\x1B[38;5;3m", j = "\x1B[36m", ke = (e) => e, Ae = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = ke(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, M = (e, t) => (n, r) => Ae(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), N = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? k : n : k}` : e, je = (e, t = Oe, n = k) => [e].flat().map((e) => N(e, t, n)).join(", ");
N("✗", Te), N("✓", Ee), N("⏲", we);
var Me = /* @__PURE__ */ new WeakMap(), Ne = 0, Pe = (e) => {
	if (!e) return "base";
	let t = Me.get(e);
	if (t) return t;
	Ne += 1;
	let n = `p${Ne}`;
	return Me.set(e, n), n;
}, Fe = 256, P = /* @__PURE__ */ new WeakMap(), F = (e) => typeof e == "object" && !!e, Ie = (e, t, n) => `${e}_${t}_${Pe(n)}`, Le = (e, t) => {
	if (!F(e)) return { hit: !1 };
	let n = P.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, I = (e, t, n) => {
	if (!F(e)) return n;
	let r = P.get(e);
	return r || (r = /* @__PURE__ */ new Map(), P.set(e, r)), r.size >= Fe && r.clear(), r.set(t, n), n;
}, L = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), R = "default", Re = /[^A-Za-z0-9._&=-]/g, z = /[^A-Za-z0-9._-]/g, ze = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, B = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, ze);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, V = (e) => e === void 0 ? R : typeof e == "string" ? B(e, Re) : Object.keys(e).sort().map((t) => `${B(t, z)}=${B(String(e[t]), z)}`).join("&"), H = (e) => Array.isArray(e) ? e.length === 0 ? [R] : e.map(V) : [V(e)], Be = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? R : e[0] ?? "default";
}, Ve = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, He = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Ue = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, We = (e, t) => {
	if (!He(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? R : Be(H(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Ve(e, n, t, s)).map((t) => Ue(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Ge = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Ke = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? H(n).join(",") : String(n)}`;
}).join("|") : "", qe = () => ({}), Je = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), U = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Je.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : U(e ? `${e}.${String(n)}` : String(n)) }), W = /* @__PURE__ */ new Set(), Ye = (e, t, n) => {
	let r = qe()[e];
	return r ? dt(r, t, n) : (W.has(e) || (M({ log: x })(typeof window > "u" ? `Dictionary ${je(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), W.add(e)), U(e));
}, G = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Xe = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (G(e) && G(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : Xe(e[r], t[r]));
		return n;
	}
	return e;
}, Ze = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => Xe(e, t));
}, K = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Qe = (e) => {
	if (typeof e == "string") return e;
	if (K(e)) return e.nodeType === "html" ? e[_] : e[oe];
}, $e = (e, t) => {
	if (typeof e == "string") return t;
	if (K(e)) {
		let n = e.nodeType === "html" ? _ : oe;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, et = (e, t, n, r, i) => {
	let a = $e(e, L(Qe(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, q = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, tt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? q : {
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
		return Ze(o, e, t);
	}
}, nt = q, rt = q, it = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? q : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: g }], i = e[g], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || K(e),
			transform: (e, n, r) => {
				if (K(e)) return (i) => et(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = L(i, e);
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
}, at = q, ot = q, st = (e) => q, ct = q, lt = (e, t = !0) => [
	tt(e ?? y.defaultLocale, t ? y.defaultLocale : void 0),
	nt,
	rt,
	it,
	st(e ?? y.defaultLocale),
	ct,
	at,
	ot
], ut = (e, t, n = []) => v(e, {
	...t,
	plugins: n
}), dt = (e, t, n) => {
	let { locale: r, selector: i } = Ge(t), a = Ie(r ?? y.defaultLocale, Ke(i), n), o = Le(e, a);
	if (o.hit) return o.content;
	let s = n ?? lt(r), c = We(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return ut(e.content, t, s);
	};
	return c === null ? I(e, a, null) : Array.isArray(c) ? I(e, a, c.map(l)) : I(e, a, l(c));
}, ft = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, pt = Symbol("intlayer"), J = null, mt = (e, t = !0, n) => {
	if (J) return J;
	ft();
	let { defaultLocale: r } = y ?? {}, i = d(e ?? r), a = (e) => {
		i.value = e;
	}, o = d(n);
	return J = {
		locale: u(i),
		setLocale: a,
		variant: u(o),
		setVariant: (e) => {
			o.value = e;
		},
		isCookieEnabled: t
	}, J;
}, ht = (e, t) => {
	let { locale: n, isCookieEnabled: r, variant: i } = t ?? {}, a = mt(n, r, i);
	return e.provide(pt, a), e;
}, gt = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, _t = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = gt(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, vt = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, yt = (e = Y) => {
	let { locales: t } = y;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!vt) for (let t = 0; t < (b.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(b.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, bt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !vt && b.storage.cookies) for (let n = 0; n < b.storage.cookies.length; n++) {
		let { name: r, attributes: i } = b.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: gt(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, _t(r, e, i));
			} catch {}
		}
	}
};
yt(Y);
var xt = (e, t) => bt(e, {
	...Y,
	isCookieEnabled: t
}), { defaultLocale: St, locales: Ct } = y ?? {}, wt = ({ isCookieEnabled: e, onLocaleChange: n } = {}) => {
	let r = c(pt);
	return {
		locale: t(() => r?.locale?.value ?? St),
		defaultLocale: St,
		availableLocales: Ct,
		setLocale: (t) => {
			if (!Ct?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			r && r.setLocale(t), xt(t, e ?? r?.isCookieEnabled ?? !0), n?.(t);
		}
	};
}, Tt = Symbol("global-i18n"), Et = "translation", X = (e, t, n) => {
	try {
		let r = le(Ye(t, e), n);
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
		let t = X(e, Et, i);
		if (t !== void 0) return t;
	}
}, Dt = (e, t, n, r, i) => {
	let { values: a, count: o, defaultMessage: s } = D(r), c = Z(e, t, n);
	if (c === void 0) {
		if (i?.[e]) {
			let r = t ? `${t}.${n}` : n, s = le(i[e], r);
			if (s !== void 0) return O(s, a, o, e);
		}
		return s === void 0 ? n : O(s, a, o, e);
	}
	return O(c, a, o, e);
}, Ot = () => y?.locales?.map(String) ?? [], Q = (e) => {
	M({ log: x })(`${N(e, j)} has no effect with ${N("@intlayer/vue-i18n", De)} — translations are managed by the compiled intlayer dictionaries.`);
}, kt = ((e = {}) => {
	let n = e.messages;
	e.messages !== void 0 && M({ log: x })(`${N("createI18n", j)}: the ${N("`messages`", j)} option is used as a fallback. For optimal bundle size, remove the locale JSON imports and use ${N("useDictionary", j)} or compile your intlayer dictionaries instead:\n  ${N("Before:", A)} createI18n({ messages: { en, fr, … } })\n  ${N("After: ", A)} createI18n({})`);
	let r = mt(e.locale), i = e.datetimeFormats, a = e.numberFormats, o = () => String(r.locale.value), s = t({
		get: () => o(),
		set: (e) => {
			r.setLocale(e);
		}
	}), c = (e, ...t) => Dt(o(), void 0, e, t, n), l = (e, t) => h(e, t, o(), i), u = (e, t) => ee(e, t, o(), a), d = {
		locale: s,
		availableLocales: Ot(),
		fallbackLocale: e.fallbackLocale ?? y?.defaultLocale,
		t: c,
		tc: c,
		te: (e) => Z(o(), void 0, e) !== void 0,
		tm: (e) => Z(o(), void 0, e) ?? {},
		rt: (e, ...t) => {
			let { values: n, count: r } = D(t);
			return O(e, n, r, o());
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
			return Ot();
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
			ht(t, { locale: e.locale }), t.provide(Tt, m), t.config.globalProperties.$t = c, t.config.globalProperties.$tc = c, t.config.globalProperties.$te = d.te, t.config.globalProperties.$tm = d.tm, t.config.globalProperties.$rt = d.rt, t.config.globalProperties.$d = l, t.config.globalProperties.$n = u, t.config.globalProperties.$i18n = f, t.directive("t", {
				beforeMount: p,
				updated: p
			});
		}
	};
	return m;
}), At = ((e) => {
	let { locale: n, setLocale: r, availableLocales: i } = wt(), a = c(Tt)?.__optionsMessages, o = e?.namespace, s = e?.datetimeFormats, l = e?.numberFormats, u = t({
		get: () => n.value,
		set: (e) => {
			r(e);
		}
	}), d = (e, ...t) => Dt(n.value, o, e, t, a);
	return {
		locale: u,
		availableLocales: i,
		t: d,
		tc: d,
		te: (e) => Z(n.value, o, e) !== void 0,
		tm: (e) => Z(n.value, o, e) ?? {},
		rt: (e, ...t) => {
			let { values: r, count: i } = D(t);
			return O(e, r, i, n.value);
		},
		d: (e, t) => h(e, t, n.value, s),
		n: (e, t) => ee(e, t, n.value, l)
	};
}), jt = a({
	__name: "MockBanner",
	setup(e, { expose: t }) {
		t();
		let { t: n } = At(), r = { t: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), $ = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Mt = { class: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground" };
function Nt(e, t, r, i, a, o) {
	return l(), n("div", Mt, p(i.t("mockBanner")), 1);
}
var Pt = $(jt, [["render", Nt], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/src/components/MockBanner.vue"]]), Ft = a({
	__name: "ProductsHeader",
	setup(e, { expose: t }) {
		t();
		let { t: n } = At(), r = {
			t: n,
			MockBanner: Pt
		};
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), It = { class: "mb-2 text-3xl font-bold text-foreground" }, Lt = { class: "mb-10 text-muted-foreground" };
function Rt(t, a, o, s, c, u) {
	return l(), n(e, null, [
		i(s.MockBanner),
		r("h1", It, p(s.t("products.header.title")), 1),
		r("p", Lt, p(s.t("products.header.description")), 1)
	], 64);
}
var zt = $(Ft, [["render", Rt], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/src/components/pages/products/ProductsHeader.vue"]]), Bt = kt({
	legacy: !1,
	locale: "en",
	fallbackLocale: "en"
}), Vt = a({
	__name: "Wrapper",
	setup(e, { expose: t }) {
		t();
		let n = o()?.appContext.app;
		n && !n.config.globalProperties.$i18n && n.use(Bt);
		let r = { app: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
});
function Ht(e, t, n, r, i, a) {
	return f(e.$slots, "default");
}
var Ut = $(Vt, [["render", Ht], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/scripts/Wrapper.vue"]]), Wt = { render() {
	return s(Ut, {}, { default: () => s(zt) });
} };
export { Wt as default };
