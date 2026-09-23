import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, createVNode as i, defineComponent as a, getCurrentInstance as o, h as s, inject as c, openBlock as l, readonly as u, ref as d, renderSlot as ee, toDisplayString as f, unref as p } from "vue";
var te = (e, t, n) => typeof e == "string" ? n?.[t]?.[e] ?? n?.[t.split("-")[0] ?? ""]?.[e] : e, ne = (e, t, n, r) => {
	let i = e instanceof Date ? e : new Date(e), a = te(t, n, r);
	try {
		return new Intl.DateTimeFormat(n, a).format(i);
	} catch {
		return String(e);
	}
}, re = (e, t, n, r) => {
	let i = te(t, n, r);
	try {
		return new Intl.NumberFormat(n, i).format(e);
	} catch {
		return String(e);
	}
}, ie = "translation", ae = "enumeration", oe = "plural", m = "insertion", se = "object", ce = "array", le = "markdown", h = "html", ue = "gender", de = "select", g = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => g(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => g(e, {
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
			n[r] = g(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = g(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, _ = (e, t, n = ".") => {
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
}, fe = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, pe = (e, t) => e[fe(e, t) ?? "fallback"], v = {
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
}, y = {
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
}, b = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, me = 50, he = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Set(), _e = (e) => {
	ge.has(e) || (ge.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
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
function x(e, t, n) {
	let r = t ?? v?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = he.get(a);
	o || (o = /* @__PURE__ */ new Map(), he.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? ye(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > me && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var be = (e, t, n) => e[x("PluralRules", n).select(t)] ?? e.other, xe = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, S = [
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
			return n === "percent" ? x("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? x("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : x("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return x("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, T = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = C(t, r);
	return o === void 0 ? e : i ? w(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = C(t, r);
	return o === void 0 ? e : w(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = C(t, n);
	return r === void 0 ? e : String(r);
}), E = (e, t) => e[t] ?? e.count ?? e.n, D = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return T(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return D(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(D(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return D(r[m], t, n);
	if (r.nodeType === "html") return D(r[h], t, n);
	if (r.nodeType === "plural") {
		let e = r[oe];
		return D(be(e, Number(E(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[ae], i = S.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) S.includes(t) || (o[t] = n);
		let s = E(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = x("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? pe(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return D(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[de], i = E(t, typeof r.variable == "string" ? r.variable : "value");
		return D(xe(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[ue];
		return D(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Se = (e) => e.split(/(?<!\\)\|/).map((e) => e.replace(/\\\|/g, "|").trim()), Ce = (e, t) => {
	let n = Math.abs(e);
	return t === 2 ? n ? +(n > 1) : 1 : n ? Math.min(n, 2) : 0;
}, O = (e) => {
	let t = { values: {} };
	for (let n of e) if (typeof n == "number") t.count = n;
	else if (typeof n == "string") t.defaultMessage = n;
	else if (Array.isArray(n)) t.values = { ...n.map(String) };
	else if (typeof n == "object" && n) {
		let e = n;
		t.values = e, typeof e.plural == "number" && (t.count = e.plural);
	}
	return t;
}, k = (e, t, n, r) => {
	let i = { ...t };
	if (n !== void 0 && (i.count ??= n, i.n ??= n), typeof e == "string") {
		let t = e;
		if (/(?<!\\)\|/.test(t)) {
			let e = Se(t);
			t = e[Ce(n ?? 1, e.length)] ?? t;
		}
		return T(t, i, r);
	}
	let a = D(e, i, r);
	return typeof a == "string" ? a : String(a ?? "");
}, A = "\x1B[0m", j = "\x1B[90m", we = "\x1B[34m", Te = "\x1B[31m", Ee = "\x1B[32m", De = "\x1B[35m", Oe = "\x1B[38;5;3m", M = "\x1B[36m", ke = (e) => e, Ae = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = ke(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, N = (e, t) => (n, r) => Ae(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), P = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? A : n : A}` : e, je = (e, t = Oe, n = A) => [e].flat().map((e) => P(e, t, n)).join(", ");
P("✗", Te), P("✓", Ee), P("⏲", we);
var Me = /* @__PURE__ */ new WeakMap(), F = 0, Ne = (e) => {
	if (!e) return "base";
	let t = Me.get(e);
	if (t) return t;
	F += 1;
	let n = `p${F}`;
	return Me.set(e, n), n;
}, Pe = 256, I = /* @__PURE__ */ new WeakMap(), L = (e) => typeof e == "object" && !!e, Fe = (e, t, n) => `${e}_${t}_${Ne(n)}`, Ie = (e, t) => {
	if (!L(e)) return { hit: !1 };
	let n = I.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, R = (e, t, n) => {
	if (!L(e)) return n;
	let r = I.get(e);
	return r || (r = /* @__PURE__ */ new Map(), I.set(e, r)), r.size >= Pe && r.clear(), r.set(t, n), n;
}, z = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), B = "default", Le = /[^A-Za-z0-9._&=-]/g, V = /[^A-Za-z0-9._-]/g, Re = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, H = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Re);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, U = (e) => e === void 0 ? B : typeof e == "string" ? H(e, Le) : Object.keys(e).sort().map((t) => `${H(t, V)}=${H(String(e[t]), V)}`).join("&"), W = (e) => Array.isArray(e) ? e.length === 0 ? [B] : e.map(U) : [U(e)], ze = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? B : e[0] ?? "default";
}, Be = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Ve = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, He = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Ue = (e, t) => {
	if (!Ve(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? B : ze(W(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Be(e, n, t, s)).map((t) => He(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, We = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Ge = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? W(n).join(",") : String(n)}`;
}).join("|") : "", Ke = () => ({}), qe = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), G = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : qe.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : G(e ? `${e}.${String(n)}` : String(n)) }), K = /* @__PURE__ */ new Set(), Je = (e, t, n) => {
	let r = Ke()[e];
	return r ? dt(r, t, n) : (K.has(e) || (N({ log: b })(typeof window > "u" ? `Dictionary ${je(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), K.add(e)), G(e));
}, Ye = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Xe = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (Ye(e) && Ye(t)) {
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
}, q = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Qe = (e) => {
	if (typeof e == "string") return e;
	if (q(e)) return e.nodeType === "html" ? e[h] : e[le];
}, $e = (e, t) => {
	if (typeof e == "string") return t;
	if (q(e)) {
		let n = e.nodeType === "html" ? h : le;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, et = (e, t, n, r, i) => {
	let a = $e(e, z(Qe(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, J = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, tt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? J : {
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
		return Ze(o, e, t);
	}
}, nt = J, rt = J, it = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: m }], i = e[m], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => et(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = z(i, e);
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
}, at = J, ot = J, st = (e) => J, ct = J, lt = (e, t = !0) => [
	tt(e ?? v.defaultLocale, t ? v.defaultLocale : void 0),
	nt,
	rt,
	it,
	st(e ?? v.defaultLocale),
	ct,
	at,
	ot
], ut = (e, t, n = []) => g(e, {
	...t,
	plugins: n
}), dt = (e, t, n) => {
	let { locale: r, selector: i } = We(t), a = Fe(r ?? v.defaultLocale, Ge(i), n), o = Ie(e, a);
	if (o.hit) return o.content;
	let s = n ?? lt(r), c = Ue(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return ut(e.content, t, s);
	};
	return c === null ? R(e, a, null) : Array.isArray(c) ? R(e, a, c.map(l)) : R(e, a, l(c));
}, ft = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, pt = Symbol("intlayer"), Y = null, mt = (e, t = !0, n) => {
	if (Y) return Y;
	ft();
	let { defaultLocale: r } = v ?? {}, i = d(e ?? r), a = (e) => {
		i.value = e;
	}, o = d(n);
	return Y = {
		locale: u(i),
		setLocale: a,
		variant: u(o),
		setVariant: (e) => {
			o.value = e;
		},
		isCookieEnabled: t
	}, Y;
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
}, yt = (e = X) => {
	let { locales: t } = v;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!vt) for (let t = 0; t < (y.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(y.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, bt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !vt && y.storage.cookies) for (let n = 0; n < y.storage.cookies.length; n++) {
		let { name: r, attributes: i } = y.storage.cookies[n];
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
yt(X);
var xt = (e, t) => bt(e, {
	...X,
	isCookieEnabled: t
}), { defaultLocale: St, locales: Ct } = v ?? {}, wt = ({ isCookieEnabled: e, onLocaleChange: n } = {}) => {
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
}, Tt = Symbol("global-i18n"), Et = "translation", Z = (e, t, n) => {
	try {
		let r = _(Je(t, e), n);
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
		let t = Z(e, Et, i);
		if (t !== void 0) return t;
	}
}, Dt = (e, t, n, r, i) => {
	let { values: a, count: o, defaultMessage: s } = O(r), c = Q(e, t, n);
	if (c === void 0) {
		if (i?.[e]) {
			let r = t ? `${t}.${n}` : n, s = _(i[e], r);
			if (s !== void 0) return k(s, a, o, e);
		}
		return s === void 0 ? n : k(s, a, o, e);
	}
	return k(c, a, o, e);
}, Ot = () => v?.locales?.map(String) ?? [], $ = (e) => {
	N({ log: b })(`${P(e, M)} has no effect with ${P("@intlayer/vue-i18n", De)} — translations are managed by the compiled intlayer dictionaries.`);
}, kt = ((e = {}) => {
	let n = e.messages;
	e.messages !== void 0 && N({ log: b })(`${P("createI18n", M)}: the ${P("`messages`", M)} option is used as a fallback. For optimal bundle size, remove the locale JSON imports and use ${P("useDictionary", M)} or compile your intlayer dictionaries instead:\n  ${P("Before:", j)} createI18n({ messages: { en, fr, … } })\n  ${P("After: ", j)} createI18n({})`);
	let r = mt(e.locale), i = e.datetimeFormats, a = e.numberFormats, o = () => String(r.locale.value), s = t({
		get: () => o(),
		set: (e) => {
			r.setLocale(e);
		}
	}), c = (e, ...t) => Dt(o(), void 0, e, t, n), l = (e, t) => ne(e, t, o(), i), u = (e, t) => re(e, t, o(), a), d = {
		locale: s,
		availableLocales: Ot(),
		fallbackLocale: e.fallbackLocale ?? v?.defaultLocale,
		t: c,
		tc: c,
		te: (e) => Q(o(), void 0, e) !== void 0,
		tm: (e) => Q(o(), void 0, e) ?? {},
		rt: (e, ...t) => {
			let { values: n, count: r } = O(t);
			return k(e, n, r, o());
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
			return Ot();
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
		mode: e.legacy === !0 ? "legacy" : "composition",
		__optionsMessages: n,
		install(t) {
			ht(t, { locale: e.locale }), t.provide(Tt, p), t.config.globalProperties.$t = c, t.config.globalProperties.$tc = c, t.config.globalProperties.$te = d.te, t.config.globalProperties.$tm = d.tm, t.config.globalProperties.$rt = d.rt, t.config.globalProperties.$d = l, t.config.globalProperties.$n = u, t.config.globalProperties.$i18n = ee, t.directive("t", {
				beforeMount: f,
				updated: f
			});
		}
	};
	return p;
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
		te: (e) => Q(n.value, o, e) !== void 0,
		tm: (e) => Q(n.value, o, e) ?? {},
		rt: (e, ...t) => {
			let { values: r, count: i } = O(t);
			return k(e, r, i, n.value);
		},
		d: (e, t) => ne(e, t, n.value, s),
		n: (e, t) => re(e, t, n.value, l)
	};
}), jt = { class: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground" }, Mt = a({
	__name: "MockBanner",
	setup(e) {
		let { t } = At();
		return (e, r) => (l(), n("div", jt, f(p(t)("mockBanner")), 1));
	}
}), Nt = { class: "mb-2 text-3xl font-bold text-foreground" }, Pt = { class: "mb-8 text-muted-foreground" }, Ft = a({
	__name: "SettingsHeader",
	setup(t) {
		let { t: a } = At();
		return (t, o) => (l(), n(e, null, [
			i(Mt),
			r("h1", Nt, f(p(a)("settings.header.title")), 1),
			r("p", Pt, f(p(a)("settings.header.description")), 1)
		], 64));
	}
}), It = kt({
	legacy: !1,
	locale: "en",
	fallbackLocale: "en"
}), Lt = a({
	__name: "Wrapper",
	setup(e) {
		let t = o()?.appContext.app;
		return t && !t.config.globalProperties.$i18n && t.use(It), (e, t) => ee(e.$slots, "default");
	}
}), Rt = { render() {
	return s(Lt, {}, { default: () => s(Ft) });
} };
export { Rt as default };
