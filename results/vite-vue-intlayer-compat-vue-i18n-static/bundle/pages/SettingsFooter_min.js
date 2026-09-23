import { computed as e, createElementBlock as t, createElementVNode as n, defineComponent as r, getCurrentInstance as i, h as a, inject as o, openBlock as s, readonly as c, ref as l, renderSlot as u, toDisplayString as d, unref as f } from "vue";
var p = (e, t, n) => typeof e == "string" ? n?.[t]?.[e] ?? n?.[t.split("-")[0] ?? ""]?.[e] : e, m = (e, t, n, r) => {
	let i = e instanceof Date ? e : new Date(e), a = p(t, n, r);
	try {
		return new Intl.DateTimeFormat(n, a).format(i);
	} catch {
		return String(e);
	}
}, h = (e, t, n, r) => {
	let i = p(t, n, r);
	try {
		return new Intl.NumberFormat(n, i).format(e);
	} catch {
		return String(e);
	}
}, g = "translation", ee = "enumeration", te = "plural", _ = "insertion", ne = "object", re = "array", ie = "markdown", v = "html", ae = "gender", oe = "select", y = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => y(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => y(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: re,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ne,
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
}, b = (e, t, n = ".") => {
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
}, se = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, ce = (e, t) => e[se(e, t) ?? "fallback"], x = {
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
}, S = {
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
}, C = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, le = 50, ue = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Set(), fe = (e) => {
	de.has(e) || (de.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, pe = {
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
}, me = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (fe(e), pe[e]);
};
function w(e, t, n) {
	let r = t ?? x?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = ue.get(a);
	o || (o = /* @__PURE__ */ new Map(), ue.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? me(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > le && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var he = (e, t, n) => e[w("PluralRules", n).select(t)] ?? e.other, ge = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, _e = [
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
}, E = (e, t, n, r) => {
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
}, D = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = T(t, r);
	return o === void 0 ? e : i ? E(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = T(t, r);
	return o === void 0 ? e : E(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = T(t, n);
	return r === void 0 ? e : String(r);
}), O = (e, t) => e[t] ?? e.count ?? e.n, k = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return D(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return k(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(k(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return k(r[_], t, n);
	if (r.nodeType === "html") return k(r[v], t, n);
	if (r.nodeType === "plural") {
		let e = r[te];
		return k(he(e, Number(O(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[ee], i = _e.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) _e.includes(t) || (o[t] = n);
		let s = O(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = w("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? ce(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return k(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[oe], i = O(t, typeof r.variable == "string" ? r.variable : "value");
		return k(ge(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[ae];
		return k(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, ve = (e) => e.split(/(?<!\\)\|/).map((e) => e.replace(/\\\|/g, "|").trim()), ye = (e, t) => {
	let n = Math.abs(e);
	return t === 2 ? n ? +(n > 1) : 1 : n ? Math.min(n, 2) : 0;
}, A = (e) => {
	let t = { values: {} };
	for (let n of e) if (typeof n == "number") t.count = n;
	else if (typeof n == "string") t.defaultMessage = n;
	else if (Array.isArray(n)) t.values = { ...n.map(String) };
	else if (typeof n == "object" && n) {
		let e = n;
		t.values = e, typeof e.plural == "number" && (t.count = e.plural);
	}
	return t;
}, j = (e, t, n, r) => {
	let i = { ...t };
	if (n !== void 0 && (i.count ??= n, i.n ??= n), typeof e == "string") {
		let t = e;
		if (/(?<!\\)\|/.test(t)) {
			let e = ve(t);
			t = e[ye(n ?? 1, e.length)] ?? t;
		}
		return D(t, i, r);
	}
	let a = k(e, i, r);
	return typeof a == "string" ? a : String(a ?? "");
}, M = "\x1B[0m", N = "\x1B[90m", be = "\x1B[34m", xe = "\x1B[31m", Se = "\x1B[32m", Ce = "\x1B[35m", we = "\x1B[38;5;3m", P = "\x1B[36m", Te = (e) => e, Ee = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Te(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, F = (e, t) => (n, r) => Ee(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), I = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? M : n : M}` : e, De = (e, t = we, n = M) => [e].flat().map((e) => I(e, t, n)).join(", ");
I("✗", xe), I("✓", Se), I("⏲", be);
var L = /* @__PURE__ */ new WeakMap(), R = 0, Oe = (e) => {
	if (!e) return "base";
	let t = L.get(e);
	if (t) return t;
	R += 1;
	let n = `p${R}`;
	return L.set(e, n), n;
}, ke = 256, z = /* @__PURE__ */ new WeakMap(), B = (e) => typeof e == "object" && !!e, Ae = (e, t, n) => `${e}_${t}_${Oe(n)}`, je = (e, t) => {
	if (!B(e)) return { hit: !1 };
	let n = z.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, V = (e, t, n) => {
	if (!B(e)) return n;
	let r = z.get(e);
	return r || (r = /* @__PURE__ */ new Map(), z.set(e, r)), r.size >= ke && r.clear(), r.set(t, n), n;
}, H = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), U = "default", Me = /[^A-Za-z0-9._&=-]/g, W = /[^A-Za-z0-9._-]/g, Ne = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, G = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Ne);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, Pe = (e) => e === void 0 ? U : typeof e == "string" ? G(e, Me) : Object.keys(e).sort().map((t) => `${G(t, W)}=${G(String(e[t]), W)}`).join("&"), Fe = (e) => Array.isArray(e) ? e.length === 0 ? [U] : e.map(Pe) : [Pe(e)], Ie = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? U : e[0] ?? "default";
}, Le = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Re = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, ze = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Be = (e, t) => {
	if (!Re(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? U : Ie(Fe(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Le(e, n, t, s)).map((t) => ze(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Ve = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, He = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? Fe(n).join(",") : String(n)}`;
}).join("|") : "", Ue = () => ({}), We = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Ge = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : We.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Ge(e ? `${e}.${String(n)}` : String(n)) }), Ke = /* @__PURE__ */ new Set(), qe = (e, t, n) => {
	let r = Ue()[e];
	return r ? ut(r, t, n) : (Ke.has(e) || (F({ log: C })(typeof window > "u" ? `Dictionary ${De(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), Ke.add(e)), Ge(e));
}, Je = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Ye = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (Je(e) && Je(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : Ye(e[r], t[r]));
		return n;
	}
	return e;
}, Xe = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => Ye(e, t));
}, K = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ze = (e) => {
	if (typeof e == "string") return e;
	if (K(e)) return e.nodeType === "html" ? e[v] : e[ie];
}, Qe = (e, t) => {
	if (typeof e == "string") return t;
	if (K(e)) {
		let n = e.nodeType === "html" ? v : ie;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, $e = (e, t, n, r, i) => {
	let a = Qe(e, H(Ze(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, q = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, et = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? q : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: g,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return Xe(o, e, t);
	}
}, tt = q, nt = q, rt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? q : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: _ }], i = e[_], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || K(e),
			transform: (e, n, r) => {
				if (K(e)) return (i) => $e(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = H(i, e);
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
}, it = q, at = q, ot = (e) => q, st = q, ct = (e, t = !0) => [
	et(e ?? x.defaultLocale, t ? x.defaultLocale : void 0),
	tt,
	nt,
	rt,
	ot(e ?? x.defaultLocale),
	st,
	it,
	at
], lt = (e, t, n = []) => y(e, {
	...t,
	plugins: n
}), ut = (e, t, n) => {
	let { locale: r, selector: i } = Ve(t), a = Ae(r ?? x.defaultLocale, He(i), n), o = je(e, a);
	if (o.hit) return o.content;
	let s = n ?? ct(r), c = Be(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return lt(e.content, t, s);
	};
	return c === null ? V(e, a, null) : Array.isArray(c) ? V(e, a, c.map(l)) : V(e, a, l(c));
}, dt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, ft = Symbol("intlayer"), J = null, pt = (e, t = !0, n) => {
	if (J) return J;
	dt();
	let { defaultLocale: r } = x ?? {}, i = l(e ?? r), a = (e) => {
		i.value = e;
	}, o = l(n);
	return J = {
		locale: c(i),
		setLocale: a,
		variant: c(o),
		setVariant: (e) => {
			o.value = e;
		},
		isCookieEnabled: t
	}, J;
}, mt = (e, t) => {
	let { locale: n, isCookieEnabled: r, variant: i } = t ?? {}, a = pt(n, r, i);
	return e.provide(ft, a), e;
}, ht = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, gt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = ht(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, _t = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, vt = (e = Y) => {
	let { locales: t } = x;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!_t) for (let t = 0; t < (S.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(S.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, yt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !_t && S.storage.cookies) for (let n = 0; n < S.storage.cookies.length; n++) {
		let { name: r, attributes: i } = S.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: ht(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, gt(r, e, i));
			} catch {}
		}
	}
};
vt(Y);
var bt = (e, t) => yt(e, {
	...Y,
	isCookieEnabled: t
}), { defaultLocale: xt, locales: X } = x ?? {}, St = ({ isCookieEnabled: t, onLocaleChange: n } = {}) => {
	let r = o(ft);
	return {
		locale: e(() => r?.locale?.value ?? xt),
		defaultLocale: xt,
		availableLocales: X,
		setLocale: (e) => {
			if (!X?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			r && r.setLocale(e), bt(e, t ?? r?.isCookieEnabled ?? !0), n?.(e);
		}
	};
}, Ct = Symbol("global-i18n"), wt = "translation", Z = (e, t, n) => {
	try {
		let r = b(qe(t, e), n);
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
		let t = Z(e, wt, i);
		if (t !== void 0) return t;
	}
}, Tt = (e, t, n, r, i) => {
	let { values: a, count: o, defaultMessage: s } = A(r), c = Q(e, t, n);
	if (c === void 0) {
		if (i?.[e]) {
			let r = t ? `${t}.${n}` : n, s = b(i[e], r);
			if (s !== void 0) return j(s, a, o, e);
		}
		return s === void 0 ? n : j(s, a, o, e);
	}
	return j(c, a, o, e);
}, Et = () => x?.locales?.map(String) ?? [], $ = (e) => {
	F({ log: C })(`${I(e, P)} has no effect with ${I("@intlayer/vue-i18n", Ce)} — translations are managed by the compiled intlayer dictionaries.`);
}, Dt = ((t = {}) => {
	let n = t.messages;
	t.messages !== void 0 && F({ log: C })(`${I("createI18n", P)}: the ${I("`messages`", P)} option is used as a fallback. For optimal bundle size, remove the locale JSON imports and use ${I("useDictionary", P)} or compile your intlayer dictionaries instead:\n  ${I("Before:", N)} createI18n({ messages: { en, fr, … } })\n  ${I("After: ", N)} createI18n({})`);
	let r = pt(t.locale), i = t.datetimeFormats, a = t.numberFormats, o = () => String(r.locale.value), s = e({
		get: () => o(),
		set: (e) => {
			r.setLocale(e);
		}
	}), c = (e, ...t) => Tt(o(), void 0, e, t, n), l = (e, t) => m(e, t, o(), i), u = (e, t) => h(e, t, o(), a), d = {
		locale: s,
		availableLocales: Et(),
		fallbackLocale: t.fallbackLocale ?? x?.defaultLocale,
		t: c,
		tc: c,
		te: (e) => Q(o(), void 0, e) !== void 0,
		tm: (e) => Q(o(), void 0, e) ?? {},
		rt: (e, ...t) => {
			let { values: n, count: r } = A(t);
			return j(e, n, r, o());
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
			return Et();
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
	}, g = {
		global: d,
		mode: t.legacy === !0 ? "legacy" : "composition",
		__optionsMessages: n,
		install(e) {
			mt(e, { locale: t.locale }), e.provide(Ct, g), e.config.globalProperties.$t = c, e.config.globalProperties.$tc = c, e.config.globalProperties.$te = d.te, e.config.globalProperties.$tm = d.tm, e.config.globalProperties.$rt = d.rt, e.config.globalProperties.$d = l, e.config.globalProperties.$n = u, e.config.globalProperties.$i18n = f, e.directive("t", {
				beforeMount: p,
				updated: p
			});
		}
	};
	return g;
}), Ot = ((t) => {
	let { locale: n, setLocale: r, availableLocales: i } = St(), a = o(Ct)?.__optionsMessages, s = t?.namespace, c = t?.datetimeFormats, l = t?.numberFormats, u = e({
		get: () => n.value,
		set: (e) => {
			r(e);
		}
	}), d = (e, ...t) => Tt(n.value, s, e, t, a);
	return {
		locale: u,
		availableLocales: i,
		t: d,
		tc: d,
		te: (e) => Q(n.value, s, e) !== void 0,
		tm: (e) => Q(n.value, s, e) ?? {},
		rt: (e, ...t) => {
			let { values: r, count: i } = A(t);
			return j(e, r, i, n.value);
		},
		d: (e, t) => m(e, t, n.value, c),
		n: (e, t) => h(e, t, n.value, l)
	};
}), kt = { class: "flex justify-end gap-3" }, At = {
	type: "button",
	class: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
}, jt = {
	type: "submit",
	class: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
}, Mt = r({
	__name: "SettingsFooter",
	setup(e) {
		let { t: r } = Ot();
		return (e, i) => (s(), t("div", kt, [n("button", At, d(f(r)("settings.footer.cancel")), 1), n("button", jt, d(f(r)("settings.footer.saveChanges")), 1)]));
	}
}), Nt = Dt({
	legacy: !1,
	locale: "en",
	fallbackLocale: "en"
}), Pt = r({
	__name: "Wrapper",
	setup(e) {
		let t = i()?.appContext.app;
		return t && !t.config.globalProperties.$i18n && t.use(Nt), (e, t) => u(e.$slots, "default");
	}
}), Ft = { render() {
	return a(Pt, {}, { default: () => a(Mt) });
} };
export { Ft as default };
