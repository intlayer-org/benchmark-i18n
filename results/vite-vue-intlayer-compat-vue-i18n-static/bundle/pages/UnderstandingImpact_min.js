import { computed as e, createElementBlock as t, createElementVNode as n, createTextVNode as r, defineComponent as i, getCurrentInstance as a, h as o, inject as s, onBeforeMount as c, onMounted as l, openBlock as u, readonly as d, ref as f, renderSlot as p, toDisplayString as m } from "vue";
var ee = (e, t, n) => typeof e == "string" ? n?.[t]?.[e] ?? n?.[t.split("-")[0] ?? ""]?.[e] : e, te = (e, t, n, r) => {
	let i = e instanceof Date ? e : new Date(e), a = ee(t, n, r);
	try {
		return new Intl.DateTimeFormat(n, a).format(i);
	} catch {
		return String(e);
	}
}, ne = (e, t, n, r) => {
	let i = ee(t, n, r);
	try {
		return new Intl.NumberFormat(n, i).format(e);
	} catch {
		return String(e);
	}
}, re = "translation", ie = "enumeration", ae = "plural", h = "insertion", oe = "object", se = "array", g = "markdown", _ = "html", ce = "gender", le = "select", v = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => v(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => v(e, {
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
}, ue = (e, t, n = ".") => {
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
}, de = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, fe = (e, t) => e[de(e, t) ?? "fallback"], y = {
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
}, pe = 50, me = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Set(), ge = (e) => {
	he.has(e) || (he.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, _e = {
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
}, ve = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (ge(e), _e[e]);
};
function S(e, t, n) {
	let r = t ?? y?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = me.get(a);
	o || (o = /* @__PURE__ */ new Map(), me.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? ve(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > pe && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var ye = (e, t, n) => e[S("PluralRules", n).select(t)] ?? e.other, be = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, C = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], w = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, xe = (e, t, n, r) => {
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
}, T = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = w(t, r);
	return o === void 0 ? e : i ? xe(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = w(t, r);
	return o === void 0 ? e : xe(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = w(t, n);
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
	if (r.nodeType === "insertion") return D(r[h], t, n);
	if (r.nodeType === "html") return D(r[_], t, n);
	if (r.nodeType === "plural") {
		let e = r[ae];
		return D(ye(e, Number(E(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[ie], i = C.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) C.includes(t) || (o[t] = n);
		let s = E(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = S("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? fe(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return D(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[le], i = E(t, typeof r.variable == "string" ? r.variable : "value");
		return D(be(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[ce];
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
var Me = /* @__PURE__ */ new WeakMap(), Ne = 0, Pe = (e) => {
	if (!e) return "base";
	let t = Me.get(e);
	if (t) return t;
	Ne += 1;
	let n = `p${Ne}`;
	return Me.set(e, n), n;
}, Fe = 256, F = /* @__PURE__ */ new WeakMap(), I = (e) => typeof e == "object" && !!e, Ie = (e, t, n) => `${e}_${t}_${Pe(n)}`, Le = (e, t) => {
	if (!I(e)) return { hit: !1 };
	let n = F.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, L = (e, t, n) => {
	if (!I(e)) return n;
	let r = F.get(e);
	return r || (r = /* @__PURE__ */ new Map(), F.set(e, r)), r.size >= Fe && r.clear(), r.set(t, n), n;
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
	return r ? ft(r, t, n) : (G.has(e) || (N({ log: x })(typeof window > "u" ? `Dictionary ${je(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), G.add(e)), W(e));
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
	if (K(e)) return e.nodeType === "html" ? e[_] : e[g];
}, et = (e, t) => {
	if (typeof e == "string") return t;
	if (K(e)) {
		let n = e.nodeType === "html" ? _ : g;
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
					type: re,
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
		let r = [...t.keyPath, { type: h }], i = e[h], a = {
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
	nt(e ?? y.defaultLocale, t ? y.defaultLocale : void 0),
	rt,
	it,
	at,
	ct(e ?? y.defaultLocale),
	lt,
	ot,
	st
], dt = (e, t, n = []) => v(e, {
	...t,
	plugins: n
}), ft = (e, t, n) => {
	let { locale: r, selector: i } = Ge(t), a = Ie(r ?? y.defaultLocale, Ke(i), n), o = Le(e, a);
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
	let { defaultLocale: r } = y ?? {}, i = f(e ?? r), a = (e) => {
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
}, Y = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
	let { locales: t } = y;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Y) for (let t = 0; t < (b.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(b.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, bt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !Y && b.storage.cookies) for (let n = 0; n < b.storage.cookies.length; n++) {
		let { name: r, attributes: i } = b.storage.cookies[n];
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
yt(X);
var xt = (e, t) => bt(e, {
	...X,
	isCookieEnabled: t
}), { defaultLocale: St, locales: Ct } = y ?? {}, wt = ({ isCookieEnabled: t, onLocaleChange: n } = {}) => {
	let r = s(mt);
	return {
		locale: e(() => r?.locale?.value ?? St),
		defaultLocale: St,
		availableLocales: Ct,
		setLocale: (e) => {
			if (!Ct?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			r && r.setLocale(e), xt(e, t ?? r?.isCookieEnabled ?? !0), n?.(e);
		}
	};
}, Tt = Symbol("global-i18n"), Et = "translation", Z = (e, t, n) => {
	try {
		let r = ue(Ye(t, e), n);
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
			let r = t ? `${t}.${n}` : n, s = ue(i[e], r);
			if (s !== void 0) return k(s, a, o, e);
		}
		return s === void 0 ? n : k(s, a, o, e);
	}
	return k(c, a, o, e);
}, Ot = () => y?.locales?.map(String) ?? [], $ = (e) => {
	N({ log: x })(`${P(e, M)} has no effect with ${P("@intlayer/vue-i18n", De)} — translations are managed by the compiled intlayer dictionaries.`);
}, kt = ((t = {}) => {
	let n = t.messages;
	t.messages !== void 0 && N({ log: x })(`${P("createI18n", M)}: the ${P("`messages`", M)} option is used as a fallback. For optimal bundle size, remove the locale JSON imports and use ${P("useDictionary", M)} or compile your intlayer dictionaries instead:\n  ${P("Before:", j)} createI18n({ messages: { en, fr, … } })\n  ${P("After: ", j)} createI18n({})`);
	let r = ht(t.locale), i = t.datetimeFormats, a = t.numberFormats, o = () => String(r.locale.value), s = e({
		get: () => o(),
		set: (e) => {
			r.setLocale(e);
		}
	}), c = (e, ...t) => Dt(o(), void 0, e, t, n), l = (e, t) => te(e, t, o(), i), u = (e, t) => ne(e, t, o(), a), d = {
		locale: s,
		availableLocales: Ot(),
		fallbackLocale: t.fallbackLocale ?? y?.defaultLocale,
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
		mode: t.legacy === !0 ? "legacy" : "composition",
		__optionsMessages: n,
		install(e) {
			gt(e, { locale: t.locale }), e.provide(Tt, m), e.config.globalProperties.$t = c, e.config.globalProperties.$tc = c, e.config.globalProperties.$te = d.te, e.config.globalProperties.$tm = d.tm, e.config.globalProperties.$rt = d.rt, e.config.globalProperties.$d = l, e.config.globalProperties.$n = u, e.config.globalProperties.$i18n = f, e.directive("t", {
				beforeMount: p,
				updated: p
			});
		}
	};
	return m;
}), At = ((t) => {
	let { locale: n, setLocale: r, availableLocales: i } = wt(), a = s(Tt)?.__optionsMessages, o = t?.namespace, c = t?.datetimeFormats, l = t?.numberFormats, u = e({
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
		d: (e, t) => te(e, t, n.value, c),
		n: (e, t) => ne(e, t, n.value, l)
	};
});
function jt(e) {
	c(() => {
		typeof performance < "u" && performance.mark && performance.mark(`${e}-start`);
	}), l(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var Mt = i({
	__name: "UnderstandingImpact",
	setup(e, { expose: t }) {
		t(), jt("UnderstandingImpact");
		let { t: n } = At(), r = { t: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), Nt = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Pt = { class: "mb-16 mx-auto max-w-3xl space-y-6" }, Ft = { class: "text-2xl font-bold text-foreground" }, It = { class: "rounded-lg border border-border bg-card p-6" }, Lt = { class: "mb-2 text-lg font-semibold text-foreground" }, Rt = { class: "text-sm text-muted-foreground" }, zt = { class: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5" }, Bt = { class: "rounded-lg border border-border bg-card p-6" }, Vt = { class: "mb-2 text-lg font-semibold text-foreground" }, Ht = { class: "text-sm text-muted-foreground" }, Ut = { class: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5" }, Wt = { class: "text-foreground" }, Gt = { class: "text-foreground" }, Kt = { class: "text-foreground" }, qt = { class: "rounded-lg border border-border bg-card p-6" }, Jt = { class: "mb-2 text-lg font-semibold text-foreground" }, Yt = { class: "text-sm text-muted-foreground" };
function Xt(e, i, a, o, s, c) {
	return u(), t("section", Pt, [
		n("h2", Ft, m(o.t("home.understandingImpact.title")), 1),
		n("div", It, [
			n("h3", Lt, m(o.t("home.understandingImpact.singleJsonTitle")), 1),
			n("p", Rt, m(o.t("home.understandingImpact.singleJsonIntro")), 1),
			n("ul", zt, [
				n("li", null, m(o.t("home.understandingImpact.singleJsonBullet1")), 1),
				n("li", null, m(o.t("home.understandingImpact.singleJsonBullet2")), 1),
				n("li", null, m(o.t("home.understandingImpact.singleJsonBullet3")), 1)
			])
		]),
		n("div", Bt, [
			n("h3", Vt, m(o.t("home.understandingImpact.tradeOffsTitle")), 1),
			n("p", Ht, m(o.t("home.understandingImpact.tradeOffsIntro")), 1),
			n("ul", Ut, [
				n("li", null, [n("strong", Wt, m(o.t("home.understandingImpact.waterfallLabel")), 1), r(" " + m(o.t("home.understandingImpact.waterfallDesc")), 1)]),
				n("li", null, [n("strong", Gt, m(o.t("home.understandingImpact.foucLabel")), 1), r(" " + m(o.t("home.understandingImpact.foucDesc")), 1)]),
				n("li", null, [n("strong", Kt, m(o.t("home.understandingImpact.cacheLabel")), 1), r(" " + m(o.t("home.understandingImpact.cacheDesc")), 1)])
			])
		]),
		n("div", qt, [n("h3", Jt, m(o.t("home.understandingImpact.measuresTitle")), 1), n("p", Yt, m(o.t("home.understandingImpact.measuresDesc")), 1)])
	]);
}
var Zt = Nt(Mt, [["render", Xt], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/src/components/pages/home/UnderstandingImpact.vue"]]), Qt = kt({
	legacy: !1,
	locale: "en",
	fallbackLocale: "en"
}), $t = i({
	__name: "Wrapper",
	setup(e, { expose: t }) {
		t();
		let n = a()?.appContext.app;
		n && !n.config.globalProperties.$i18n && n.use(Qt);
		let r = { app: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
});
function en(e, t, n, r, i, a) {
	return p(e.$slots, "default");
}
var tn = Nt($t, [["render", en], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/scripts/Wrapper.vue"]]), nn = { render() {
	return o(tn, {}, { default: () => o(Zt) });
} };
export { nn as default };
