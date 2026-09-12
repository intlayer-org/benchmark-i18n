import { computed as e, createElementBlock as t, createElementVNode as n, defineComponent as r, getCurrentInstance as i, h as a, inject as o, openBlock as s, readonly as c, ref as l, renderSlot as u, toDisplayString as d } from "vue";
var f = (e, t, n) => typeof e == "string" ? n?.[t]?.[e] ?? n?.[t.split("-")[0] ?? ""]?.[e] : e, p = (e, t, n, r) => {
	let i = e instanceof Date ? e : new Date(e), a = f(t, n, r);
	try {
		return new Intl.DateTimeFormat(n, a).format(i);
	} catch {
		return String(e);
	}
}, ee = (e, t, n, r) => {
	let i = f(t, n, r);
	try {
		return new Intl.NumberFormat(n, i).format(e);
	} catch {
		return String(e);
	}
}, m = "translation", h = "enumeration", te = "plural", g = "insertion", ne = "object", re = "array", ie = "markdown", _ = "html", ae = "gender", oe = "select", v = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => v(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => v(e, {
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
}, y = (e, t, n = ".") => {
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
}, ce = (e, t) => e[se(e, t) ?? "fallback"], b = {
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
}, le = 50, C = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Set(), ue = (e) => {
	w.has(e) || (w.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, de = {
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
}, fe = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (ue(e), de[e]);
};
function T(e, t, n) {
	let r = t ?? b?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = C.get(a);
	o || (o = /* @__PURE__ */ new Map(), C.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? fe(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > le && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var pe = (e, t, n) => e[T("PluralRules", n).select(t)] ?? e.other, me = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, he = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], E = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, ge = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? T("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? T("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : T("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return T("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, D = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = E(t, r);
	return o === void 0 ? e : i ? ge(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = E(t, r);
	return o === void 0 ? e : ge(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = E(t, n);
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
	if (r.nodeType === "insertion") return k(r[g], t, n);
	if (r.nodeType === "html") return k(r[_], t, n);
	if (r.nodeType === "plural") {
		let e = r[te];
		return k(pe(e, Number(O(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[h], i = he.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) he.includes(t) || (o[t] = n);
		let s = O(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = T("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? ce(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return k(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[oe], i = O(t, typeof r.variable == "string" ? r.variable : "value");
		return k(me(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[ae];
		return k(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, _e = (e) => e.split(/(?<!\\)\|/).map((e) => e.replace(/\\\|/g, "|").trim()), ve = (e, t) => {
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
			let e = _e(t);
			t = e[ve(n ?? 1, e.length)] ?? t;
		}
		return D(t, i, r);
	}
	let a = k(e, i, r);
	return typeof a == "string" ? a : String(a ?? "");
}, M = "\x1B[0m", N = "\x1B[90m", ye = "\x1B[34m", be = "\x1B[31m", xe = "\x1B[32m", Se = "\x1B[35m", Ce = "\x1B[38;5;3m", P = "\x1B[36m", we = (e) => e, Te = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = we(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, F = (e, t) => (n, r) => Te(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), I = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? M : n : M}` : e, Ee = (e, t = Ce, n = M) => [e].flat().map((e) => I(e, t, n)).join(", ");
I("✗", be), I("✓", xe), I("⏲", ye);
var L = /* @__PURE__ */ new WeakMap(), R = 0, De = (e) => {
	if (!e) return "base";
	let t = L.get(e);
	if (t) return t;
	R += 1;
	let n = `p${R}`;
	return L.set(e, n), n;
}, Oe = 256, z = /* @__PURE__ */ new WeakMap(), B = (e) => typeof e == "object" && !!e, ke = (e, t, n) => `${e}_${t}_${De(n)}`, Ae = (e, t) => {
	if (!B(e)) return { hit: !1 };
	let n = z.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, V = (e, t, n) => {
	if (!B(e)) return n;
	let r = z.get(e);
	return r || (r = /* @__PURE__ */ new Map(), z.set(e, r)), r.size >= Oe && r.clear(), r.set(t, n), n;
}, H = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), U = "default", je = /[^A-Za-z0-9._&=-]/g, W = /[^A-Za-z0-9._-]/g, Me = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, G = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Me);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, Ne = (e) => e === void 0 ? U : typeof e == "string" ? G(e, je) : Object.keys(e).sort().map((t) => `${G(t, W)}=${G(String(e[t]), W)}`).join("&"), K = (e) => Array.isArray(e) ? e.length === 0 ? [U] : e.map(Ne) : [Ne(e)], Pe = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? U : e[0] ?? "default";
}, Fe = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Ie = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Le = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Re = (e, t) => {
	if (!Ie(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? U : Pe(K(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Fe(e, n, t, s)).map((t) => Le(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, ze = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Be = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? K(n).join(",") : String(n)}`;
}).join("|") : "", Ve = () => ({}), He = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Ue = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : He.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Ue(e ? `${e}.${String(n)}` : String(n)) }), We = /* @__PURE__ */ new Set(), Ge = (e, t, n) => {
	let r = Ve()[e];
	return r ? ct(r, t, n) : (We.has(e) || (F({ log: S })(typeof window > "u" ? `Dictionary ${Ee(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), We.add(e)), Ue(e));
}, Ke = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, qe = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (Ke(e) && Ke(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : qe(e[r], t[r]));
		return n;
	}
	return e;
}, Je = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => qe(e, t));
}, q = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ye = (e) => {
	if (typeof e == "string") return e;
	if (q(e)) return e.nodeType === "html" ? e[_] : e[ie];
}, Xe = (e, t) => {
	if (typeof e == "string") return t;
	if (q(e)) {
		let n = e.nodeType === "html" ? _ : ie;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Ze = (e, t, n, r, i) => {
	let a = Xe(e, H(Ye(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, J = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Qe = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? J : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: m,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return Je(o, e, t);
	}
}, $e = J, et = J, tt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: g }], i = e[g], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => Ze(e, i, n, t.plugins, r);
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
}, nt = J, rt = J, it = (e) => J, at = J, ot = (e, t = !0) => [
	Qe(e ?? b.defaultLocale, t ? b.defaultLocale : void 0),
	$e,
	et,
	tt,
	it(e ?? b.defaultLocale),
	at,
	nt,
	rt
], st = (e, t, n = []) => v(e, {
	...t,
	plugins: n
}), ct = (e, t, n) => {
	let { locale: r, selector: i } = ze(t), a = ke(r ?? b.defaultLocale, Be(i), n), o = Ae(e, a);
	if (o.hit) return o.content;
	let s = n ?? ot(r), c = Re(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return st(e.content, t, s);
	};
	return c === null ? V(e, a, null) : Array.isArray(c) ? V(e, a, c.map(l)) : V(e, a, l(c));
}, lt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, ut = Symbol("intlayer"), Y = null, dt = (e, t = !0, n) => {
	if (Y) return Y;
	lt();
	let { defaultLocale: r } = b ?? {}, i = l(e ?? r), a = (e) => {
		i.value = e;
	}, o = l(n);
	return Y = {
		locale: c(i),
		setLocale: a,
		variant: c(o),
		setVariant: (e) => {
			o.value = e;
		},
		isCookieEnabled: t
	}, Y;
}, ft = (e, t) => {
	let { locale: n, isCookieEnabled: r, variant: i } = t ?? {}, a = dt(n, r, i);
	return e.provide(ut, a), e;
}, pt = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, mt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = pt(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, ht = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, gt = (e = X) => {
	let { locales: t } = b;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!ht) for (let t = 0; t < (x.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(x.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, _t = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !ht && x.storage.cookies) for (let n = 0; n < x.storage.cookies.length; n++) {
		let { name: r, attributes: i } = x.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: pt(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, mt(r, e, i));
			} catch {}
		}
	}
};
gt(X);
var vt = (e, t) => _t(e, {
	...X,
	isCookieEnabled: t
}), { defaultLocale: yt, locales: bt } = b ?? {}, xt = ({ isCookieEnabled: t, onLocaleChange: n } = {}) => {
	let r = o(ut);
	return {
		locale: e(() => r?.locale?.value ?? yt),
		defaultLocale: yt,
		availableLocales: bt,
		setLocale: (e) => {
			if (!bt?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			r && r.setLocale(e), vt(e, t ?? r?.isCookieEnabled ?? !0), n?.(e);
		}
	};
}, St = Symbol("global-i18n"), Ct = "translation", Z = (e, t, n) => {
	try {
		let r = y(Ge(t, e), n);
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
		let t = Z(e, Ct, i);
		if (t !== void 0) return t;
	}
}, wt = (e, t, n, r, i) => {
	let { values: a, count: o, defaultMessage: s } = A(r), c = Q(e, t, n);
	if (c === void 0) {
		if (i?.[e]) {
			let r = t ? `${t}.${n}` : n, s = y(i[e], r);
			if (s !== void 0) return j(s, a, o, e);
		}
		return s === void 0 ? n : j(s, a, o, e);
	}
	return j(c, a, o, e);
}, Tt = () => b?.locales?.map(String) ?? [], $ = (e) => {
	F({ log: S })(`${I(e, P)} has no effect with ${I("@intlayer/vue-i18n", Se)} — translations are managed by the compiled intlayer dictionaries.`);
}, Et = ((t = {}) => {
	let n = t.messages;
	t.messages !== void 0 && F({ log: S })(`${I("createI18n", P)}: the ${I("`messages`", P)} option is used as a fallback. For optimal bundle size, remove the locale JSON imports and use ${I("useDictionary", P)} or compile your intlayer dictionaries instead:\n  ${I("Before:", N)} createI18n({ messages: { en, fr, … } })\n  ${I("After: ", N)} createI18n({})`);
	let r = dt(t.locale), i = t.datetimeFormats, a = t.numberFormats, o = () => String(r.locale.value), s = e({
		get: () => o(),
		set: (e) => {
			r.setLocale(e);
		}
	}), c = (e, ...t) => wt(o(), void 0, e, t, n), l = (e, t) => p(e, t, o(), i), u = (e, t) => ee(e, t, o(), a), d = {
		locale: s,
		availableLocales: Tt(),
		fallbackLocale: t.fallbackLocale ?? b?.defaultLocale,
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
			return Tt();
		},
		t: c,
		tc: c,
		te: d.te,
		tm: d.tm,
		rt: d.rt,
		d: l,
		n: u
	}, m = (e, t) => {
		let n = t.value;
		if (typeof n == "string") e.textContent = c(n);
		else if (n && typeof n == "object") {
			let t = [];
			n.args && t.push(n.args), typeof n.choice == "number" && t.push(n.choice), e.textContent = c(n.path, ...t);
		}
	}, h = {
		global: d,
		mode: t.legacy === !0 ? "legacy" : "composition",
		__optionsMessages: n,
		install(e) {
			ft(e, { locale: t.locale }), e.provide(St, h), e.config.globalProperties.$t = c, e.config.globalProperties.$tc = c, e.config.globalProperties.$te = d.te, e.config.globalProperties.$tm = d.tm, e.config.globalProperties.$rt = d.rt, e.config.globalProperties.$d = l, e.config.globalProperties.$n = u, e.config.globalProperties.$i18n = f, e.directive("t", {
				beforeMount: m,
				updated: m
			});
		}
	};
	return h;
}), Dt = ((t) => {
	let { locale: n, setLocale: r, availableLocales: i } = xt(), a = o(St)?.__optionsMessages, s = t?.namespace, c = t?.datetimeFormats, l = t?.numberFormats, u = e({
		get: () => n.value,
		set: (e) => {
			r(e);
		}
	}), d = (e, ...t) => wt(n.value, s, e, t, a);
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
		d: (e, t) => p(e, t, n.value, c),
		n: (e, t) => ee(e, t, n.value, l)
	};
}), Ot = r({
	__name: "ApiAccessSection",
	setup(e, { expose: t }) {
		t();
		let { t: n } = Dt(), r = { t: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), kt = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, At = { class: "rounded-lg border border-border bg-card p-6" }, jt = { class: "mb-4 text-lg font-semibold text-foreground" }, Mt = {
	for: "api-key",
	class: "mb-1 block text-sm font-medium text-foreground"
}, Nt = { class: "flex gap-2" }, Pt = {
	type: "button",
	class: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
}, Ft = { class: "mt-1 text-xs text-muted-foreground" };
function It(e, r, i, a, o, c) {
	return s(), t("section", At, [n("h2", jt, d(a.t("settings.apiAccess.title")), 1), n("div", null, [
		n("label", Mt, d(a.t("settings.apiAccess.apiKey")), 1),
		n("div", Nt, [r[0] ||= n("input", {
			id: "api-key",
			readonly: "",
			value: "sk_bench_xxxxxxxxxxxxxxxxxxxx",
			class: "flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
		}, null, -1), n("button", Pt, d(a.t("settings.apiAccess.copy")), 1)]),
		n("p", Ft, d(a.t("settings.apiAccess.description")), 1)
	])]);
}
var Lt = kt(Ot, [["render", It], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/src/components/pages/settings/ApiAccessSection.vue"]]), Rt = Et({
	legacy: !1,
	locale: "en",
	fallbackLocale: "en"
}), zt = r({
	__name: "Wrapper",
	setup(e, { expose: t }) {
		t();
		let n = i()?.appContext.app;
		n && !n.config.globalProperties.$i18n && n.use(Rt);
		let r = { app: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
});
function Bt(e, t, n, r, i, a) {
	return u(e.$slots, "default");
}
var Vt = kt(zt, [["render", Bt], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/scripts/Wrapper.vue"]]), Ht = { render() {
	return a(Vt, {}, { default: () => a(Lt) });
} };
export { Ht as default };
