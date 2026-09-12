import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, createTextVNode as i, createVNode as a, defineComponent as o, getCurrentInstance as s, h as c, inject as l, openBlock as u, readonly as d, ref as f, renderSlot as p, toDisplayString as m } from "vue";
var ee = (e, t, n) => typeof e == "string" ? n?.[t]?.[e] ?? n?.[t.split("-")[0] ?? ""]?.[e] : e, h = (e, t, n, r) => {
	let i = e instanceof Date ? e : new Date(e), a = ee(t, n, r);
	try {
		return new Intl.DateTimeFormat(n, a).format(i);
	} catch {
		return String(e);
	}
}, te = (e, t, n, r) => {
	let i = ee(t, n, r);
	try {
		return new Intl.NumberFormat(n, i).format(e);
	} catch {
		return String(e);
	}
}, ne = "translation", re = "enumeration", ie = "plural", g = "insertion", ae = "object", oe = "array", _ = "markdown", v = "html", se = "gender", ce = "select", y = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => y(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => y(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: oe,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ae,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = y(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = y(e[r], i);
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
}, de = (e, t) => e[ue(e, t) ?? "fallback"], b = {
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
}, x = {
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
}, S = {
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
function C(e, t, n) {
	let r = t ?? b?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = pe.get(a);
	o || (o = /* @__PURE__ */ new Map(), pe.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? _e(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > fe && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var ve = (e, t, n) => e[C("PluralRules", n).select(t)] ?? e.other, ye = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, w = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], T = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, be = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? C("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? C("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : C("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return C("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, E = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = T(t, r);
	return o === void 0 ? e : i ? be(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = T(t, r);
	return o === void 0 ? e : be(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = T(t, n);
	return r === void 0 ? e : String(r);
}), D = (e, t) => e[t] ?? e.count ?? e.n, O = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return E(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return O(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(O(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return O(r[g], t, n);
	if (r.nodeType === "html") return O(r[v], t, n);
	if (r.nodeType === "plural") {
		let e = r[ie];
		return O(ve(e, Number(D(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[re], i = w.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) w.includes(t) || (o[t] = n);
		let s = D(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = C("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? de(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return O(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[ce], i = D(t, typeof r.variable == "string" ? r.variable : "value");
		return O(ye(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[se];
		return O(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, xe = (e) => e.split(/(?<!\\)\|/).map((e) => e.replace(/\\\|/g, "|").trim()), Se = (e, t) => {
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
			let e = xe(t);
			t = e[Se(n ?? 1, e.length)] ?? t;
		}
		return E(t, i, r);
	}
	let a = O(e, i, r);
	return typeof a == "string" ? a : String(a ?? "");
}, j = "\x1B[0m", M = "\x1B[90m", Ce = "\x1B[34m", we = "\x1B[31m", Te = "\x1B[32m", Ee = "\x1B[35m", De = "\x1B[38;5;3m", N = "\x1B[36m", Oe = (e) => e, ke = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Oe(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, P = (e, t) => (n, r) => ke(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), F = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? j : n : j}` : e, Ae = (e, t = De, n = j) => [e].flat().map((e) => F(e, t, n)).join(", ");
F("✗", we), F("✓", Te), F("⏲", Ce);
var je = /* @__PURE__ */ new WeakMap(), Me = 0, Ne = (e) => {
	if (!e) return "base";
	let t = je.get(e);
	if (t) return t;
	Me += 1;
	let n = `p${Me}`;
	return je.set(e, n), n;
}, Pe = 256, I = /* @__PURE__ */ new WeakMap(), Fe = (e) => typeof e == "object" && !!e, Ie = (e, t, n) => `${e}_${t}_${Ne(n)}`, Le = (e, t) => {
	if (!Fe(e)) return { hit: !1 };
	let n = I.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, L = (e, t, n) => {
	if (!Fe(e)) return n;
	let r = I.get(e);
	return r || (r = /* @__PURE__ */ new Map(), I.set(e, r)), r.size >= Pe && r.clear(), r.set(t, n), n;
}, R = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), z = "default", Re = /[^A-Za-z0-9._&=-]/g, B = /[^A-Za-z0-9._-]/g, ze = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, V = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, ze);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, H = (e) => e === void 0 ? z : typeof e == "string" ? V(e, Re) : Object.keys(e).sort().map((t) => `${V(t, B)}=${V(String(e[t]), B)}`).join("&"), U = (e) => Array.isArray(e) ? e.length === 0 ? [z] : e.map(H) : [H(e)], Be = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? z : e[0] ?? "default";
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
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? z : Be(U(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Ve(e, n, t, s)).map((t) => Ue(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Ge = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Ke = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? U(n).join(",") : String(n)}`;
}).join("|") : "", qe = () => ({}), Je = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), W = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Je.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : W(e ? `${e}.${String(n)}` : String(n)) }), G = /* @__PURE__ */ new Set(), Ye = (e, t, n) => {
	let r = qe()[e];
	return r ? ft(r, t, n) : (G.has(e) || (P({ log: S })(typeof window > "u" ? `Dictionary ${Ae(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), G.add(e)), W(e));
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
}, K = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, $e = (e) => {
	if (typeof e == "string") return e;
	if (K(e)) return e.nodeType === "html" ? e[v] : e[_];
}, et = (e, t) => {
	if (typeof e == "string") return t;
	if (K(e)) {
		let n = e.nodeType === "html" ? v : _;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, tt = (e, t, n, r, i) => {
	let a = et(e, R($e(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, q = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, nt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? q : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ne,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return Qe(o, e, t);
	}
}, rt = q, it = q, at = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? q : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: g }], i = e[g], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || K(e),
			transform: (e, n, r) => {
				if (K(e)) return (i) => tt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = R(i, e);
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
}, ot = q, st = q, ct = (e) => q, lt = q, ut = (e, t = !0) => [
	nt(e ?? b.defaultLocale, t ? b.defaultLocale : void 0),
	rt,
	it,
	at,
	ct(e ?? b.defaultLocale),
	lt,
	ot,
	st
], dt = (e, t, n = []) => y(e, {
	...t,
	plugins: n
}), ft = (e, t, n) => {
	let { locale: r, selector: i } = Ge(t), a = Ie(r ?? b.defaultLocale, Ke(i), n), o = Le(e, a);
	if (o.hit) return o.content;
	let s = n ?? ut(r), c = We(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return dt(e.content, t, s);
	};
	return c === null ? L(e, a, null) : Array.isArray(c) ? L(e, a, c.map(l)) : L(e, a, l(c));
}, pt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, mt = Symbol("intlayer"), J = null, ht = (e, t = !0, n) => {
	if (J) return J;
	pt();
	let { defaultLocale: r } = b ?? {}, i = f(e ?? r), a = (e) => {
		i.value = e;
	}, o = f(n);
	return J = {
		locale: d(i),
		setLocale: a,
		variant: d(o),
		setVariant: (e) => {
			o.value = e;
		},
		isCookieEnabled: t
	}, J;
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
}, bt = (e = Y) => {
	let { locales: t } = b;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!yt) for (let t = 0; t < (x.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(x.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, xt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !yt && x.storage.cookies) for (let n = 0; n < x.storage.cookies.length; n++) {
		let { name: r, attributes: i } = x.storage.cookies[n];
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
bt(Y);
var St = (e, t) => xt(e, {
	...Y,
	isCookieEnabled: t
}), { defaultLocale: Ct, locales: wt } = b ?? {}, Tt = ({ isCookieEnabled: e, onLocaleChange: n } = {}) => {
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
}, Et = Symbol("global-i18n"), Dt = "translation", X = (e, t, n) => {
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
		let t = X(e, Dt, i);
		if (t !== void 0) return t;
	}
}, Ot = (e, t, n, r, i) => {
	let { values: a, count: o, defaultMessage: s } = k(r), c = Z(e, t, n);
	if (c === void 0) {
		if (i?.[e]) {
			let r = t ? `${t}.${n}` : n, s = le(i[e], r);
			if (s !== void 0) return A(s, a, o, e);
		}
		return s === void 0 ? n : A(s, a, o, e);
	}
	return A(c, a, o, e);
}, kt = () => b?.locales?.map(String) ?? [], Q = (e) => {
	P({ log: S })(`${F(e, N)} has no effect with ${F("@intlayer/vue-i18n", Ee)} — translations are managed by the compiled intlayer dictionaries.`);
}, At = ((e = {}) => {
	let n = e.messages;
	e.messages !== void 0 && P({ log: S })(`${F("createI18n", N)}: the ${F("`messages`", N)} option is used as a fallback. For optimal bundle size, remove the locale JSON imports and use ${F("useDictionary", N)} or compile your intlayer dictionaries instead:\n  ${F("Before:", M)} createI18n({ messages: { en, fr, … } })\n  ${F("After: ", M)} createI18n({})`);
	let r = ht(e.locale), i = e.datetimeFormats, a = e.numberFormats, o = () => String(r.locale.value), s = t({
		get: () => o(),
		set: (e) => {
			r.setLocale(e);
		}
	}), c = (e, ...t) => Ot(o(), void 0, e, t, n), l = (e, t) => h(e, t, o(), i), u = (e, t) => te(e, t, o(), a), d = {
		locale: s,
		availableLocales: kt(),
		fallbackLocale: e.fallbackLocale ?? b?.defaultLocale,
		t: c,
		tc: c,
		te: (e) => Z(o(), void 0, e) !== void 0,
		tm: (e) => Z(o(), void 0, e) ?? {},
		rt: (e, ...t) => {
			let { values: n, count: r } = k(t);
			return A(e, n, r, o());
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
		te: (e) => Z(n.value, o, e) !== void 0,
		tm: (e) => Z(n.value, o, e) ?? {},
		rt: (e, ...t) => {
			let { values: r, count: i } = k(t);
			return A(e, r, i, n.value);
		},
		d: (e, t) => h(e, t, n.value, s),
		n: (e, t) => te(e, t, n.value, c)
	};
}), Mt = o({
	__name: "MockBanner",
	setup(e, { expose: t }) {
		t();
		let { t: n } = jt(), r = { t: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), $ = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Nt = { class: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground" };
function Pt(e, t, r, i, a, o) {
	return u(), n("div", Nt, m(i.t("mockBanner")), 1);
}
var Ft = $(Mt, [["render", Pt], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/src/components/MockBanner.vue"]]), It = o({
	__name: "ContactHeader",
	setup(e, { expose: t }) {
		t();
		let { t: n } = jt(), r = {
			t: n,
			MockBanner: Ft
		};
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), Lt = { class: "mb-2 text-3xl font-bold text-foreground" }, Rt = { class: "mb-8 text-muted-foreground" }, zt = {
	href: "mailto:contact@intlayer.org",
	class: "text-primary hover:underline"
};
function Bt(t, o, s, c, l, d) {
	return u(), n(e, null, [
		a(c.MockBanner),
		r("h1", Lt, m(c.t("contact.header.title")), 1),
		r("p", Rt, [
			i(m(c.t("contact.header.description")) + " ", 1),
			r("a", zt, m(c.t("shared.contactEmail")), 1),
			o[0] ||= i(". ", -1)
		])
	], 64);
}
var Vt = $(It, [["render", Bt], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/src/components/pages/contact/ContactHeader.vue"]]), Ht = At({
	legacy: !1,
	locale: "en",
	fallbackLocale: "en"
}), Ut = o({
	__name: "Wrapper",
	setup(e, { expose: t }) {
		t();
		let n = s()?.appContext.app;
		n && !n.config.globalProperties.$i18n && n.use(Ht);
		let r = { app: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
});
function Wt(e, t, n, r, i, a) {
	return p(e.$slots, "default");
}
var Gt = $(Ut, [["render", Wt], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/scripts/Wrapper.vue"]]), Kt = { render() {
	return c(Gt, {}, { default: () => c(Vt) });
} };
export { Kt as default };
