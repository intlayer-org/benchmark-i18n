import { computed as e, createElementBlock as t, defineComponent as n, getCurrentInstance as r, h as i, inject as a, openBlock as o, readonly as s, ref as c, renderSlot as l, toDisplayString as u } from "vue";
var d = (e, t, n) => typeof e == "string" ? n?.[t]?.[e] ?? n?.[t.split("-")[0] ?? ""]?.[e] : e, f = (e, t, n, r) => {
	let i = e instanceof Date ? e : new Date(e), a = d(t, n, r);
	try {
		return new Intl.DateTimeFormat(n, a).format(i);
	} catch {
		return String(e);
	}
}, ee = (e, t, n, r) => {
	let i = d(t, n, r);
	try {
		return new Intl.NumberFormat(n, i).format(e);
	} catch {
		return String(e);
	}
}, te = "translation", p = "enumeration", m = "plural", h = "insertion", ne = "object", re = "array", g = "markdown", _ = "html", ie = "gender", ae = "select", v = (e, t) => {
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
}, oe = (e, t, n = ".") => {
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
}, ce = (e, t) => e[se(e, t) ?? "fallback"], y = {
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
function S(e, t, n) {
	let r = t ?? y?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = ue.get(a);
	o || (o = /* @__PURE__ */ new Map(), ue.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? me(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > le && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var he = (e, t, n) => e[S("PluralRules", n).select(t)] ?? e.other, ge = (e, t) => {
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
}, _e = (e, t, n, r) => {
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
	return o === void 0 ? e : i ? _e(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = w(t, r);
	return o === void 0 ? e : _e(o, i, a, n);
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
		let e = r[m];
		return D(he(e, Number(E(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[p], i = C.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) C.includes(t) || (o[t] = n);
		let s = E(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = S("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? ce(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return D(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[ae], i = E(t, typeof r.variable == "string" ? r.variable : "value");
		return D(ge(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[ie];
		return D(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, ve = (e) => e.split(/(?<!\\)\|/).map((e) => e.replace(/\\\|/g, "|").trim()), ye = (e, t) => {
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
			let e = ve(t);
			t = e[ye(n ?? 1, e.length)] ?? t;
		}
		return T(t, i, r);
	}
	let a = D(e, i, r);
	return typeof a == "string" ? a : String(a ?? "");
}, A = "\x1B[0m", be = "\x1B[90m", xe = "\x1B[34m", Se = "\x1B[31m", Ce = "\x1B[32m", we = "\x1B[35m", Te = "\x1B[38;5;3m", j = "\x1B[36m", Ee = (e) => e, De = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Ee(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, M = (e, t) => (n, r) => De(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), N = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? A : n : A}` : e, Oe = (e, t = Te, n = A) => [e].flat().map((e) => N(e, t, n)).join(", ");
N("✗", Se), N("✓", Ce), N("⏲", xe);
var ke = /* @__PURE__ */ new WeakMap(), Ae = 0, je = (e) => {
	if (!e) return "base";
	let t = ke.get(e);
	if (t) return t;
	Ae += 1;
	let n = `p${Ae}`;
	return ke.set(e, n), n;
}, Me = 256, P = /* @__PURE__ */ new WeakMap(), F = (e) => typeof e == "object" && !!e, Ne = (e, t, n) => `${e}_${t}_${je(n)}`, Pe = (e, t) => {
	if (!F(e)) return { hit: !1 };
	let n = P.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, I = (e, t, n) => {
	if (!F(e)) return n;
	let r = P.get(e);
	return r || (r = /* @__PURE__ */ new Map(), P.set(e, r)), r.size >= Me && r.clear(), r.set(t, n), n;
}, L = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), R = "default", Fe = /[^A-Za-z0-9._&=-]/g, z = /[^A-Za-z0-9._-]/g, Ie = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, B = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Ie);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, V = (e) => e === void 0 ? R : typeof e == "string" ? B(e, Fe) : Object.keys(e).sort().map((t) => `${B(t, z)}=${B(String(e[t]), z)}`).join("&"), H = (e) => Array.isArray(e) ? e.length === 0 ? [R] : e.map(V) : [V(e)], Le = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? R : e[0] ?? "default";
}, Re = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, ze = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Be = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Ve = (e, t) => {
	if (!ze(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? R : Le(H(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Re(e, n, t, s)).map((t) => Be(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, He = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Ue = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? H(n).join(",") : String(n)}`;
}).join("|") : "", We = () => ({}), Ge = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), U = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Ge.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : U(e ? `${e}.${String(n)}` : String(n)) }), W = /* @__PURE__ */ new Set(), Ke = (e, t, n) => {
	let r = We()[e];
	return r ? ct(r, t, n) : (W.has(e) || (M({ log: x })(typeof window > "u" ? `Dictionary ${Oe(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), W.add(e)), U(e));
}, G = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, qe = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (G(e) && G(t)) {
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
}, K = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ye = (e) => {
	if (typeof e == "string") return e;
	if (K(e)) return e.nodeType === "html" ? e[_] : e[g];
}, Xe = (e, t) => {
	if (typeof e == "string") return t;
	if (K(e)) {
		let n = e.nodeType === "html" ? _ : g;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Ze = (e, t, n, r, i) => {
	let a = Xe(e, L(Ye(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, q = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Qe = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? q : {
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
		return Je(o, e, t);
	}
}, $e = q, et = q, tt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? q : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: h }], i = e[h], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || K(e),
			transform: (e, n, r) => {
				if (K(e)) return (i) => Ze(e, i, n, t.plugins, r);
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
}, nt = q, rt = q, it = (e) => q, at = q, ot = (e, t = !0) => [
	Qe(e ?? y.defaultLocale, t ? y.defaultLocale : void 0),
	$e,
	et,
	tt,
	it(e ?? y.defaultLocale),
	at,
	nt,
	rt
], st = (e, t, n = []) => v(e, {
	...t,
	plugins: n
}), ct = (e, t, n) => {
	let { locale: r, selector: i } = He(t), a = Ne(r ?? y.defaultLocale, Ue(i), n), o = Pe(e, a);
	if (o.hit) return o.content;
	let s = n ?? ot(r), c = Ve(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return st(e.content, t, s);
	};
	return c === null ? I(e, a, null) : Array.isArray(c) ? I(e, a, c.map(l)) : I(e, a, l(c));
}, lt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, ut = Symbol("intlayer"), J = null, dt = (e, t = !0, n) => {
	if (J) return J;
	lt();
	let { defaultLocale: r } = y ?? {}, i = c(e ?? r), a = (e) => {
		i.value = e;
	}, o = c(n);
	return J = {
		locale: s(i),
		setLocale: a,
		variant: s(o),
		setVariant: (e) => {
			o.value = e;
		},
		isCookieEnabled: t
	}, J;
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
}, ht = (e = X) => {
	let { locales: t } = y;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Y) for (let t = 0; t < (b.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(b.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, gt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !Y && b.storage.cookies) for (let n = 0; n < b.storage.cookies.length; n++) {
		let { name: r, attributes: i } = b.storage.cookies[n];
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
ht(X);
var _t = (e, t) => gt(e, {
	...X,
	isCookieEnabled: t
}), { defaultLocale: vt, locales: yt } = y ?? {}, bt = ({ isCookieEnabled: t, onLocaleChange: n } = {}) => {
	let r = a(ut);
	return {
		locale: e(() => r?.locale?.value ?? vt),
		defaultLocale: vt,
		availableLocales: yt,
		setLocale: (e) => {
			if (!yt?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			r && r.setLocale(e), _t(e, t ?? r?.isCookieEnabled ?? !0), n?.(e);
		}
	};
}, xt = Symbol("global-i18n"), St = "translation", Z = (e, t, n) => {
	try {
		let r = oe(Ke(t, e), n);
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
		let t = Z(e, St, i);
		if (t !== void 0) return t;
	}
}, Ct = (e, t, n, r, i) => {
	let { values: a, count: o, defaultMessage: s } = O(r), c = Q(e, t, n);
	if (c === void 0) {
		if (i?.[e]) {
			let r = t ? `${t}.${n}` : n, s = oe(i[e], r);
			if (s !== void 0) return k(s, a, o, e);
		}
		return s === void 0 ? n : k(s, a, o, e);
	}
	return k(c, a, o, e);
}, wt = () => y?.locales?.map(String) ?? [], $ = (e) => {
	M({ log: x })(`${N(e, j)} has no effect with ${N("@intlayer/vue-i18n", we)} — translations are managed by the compiled intlayer dictionaries.`);
}, Tt = ((t = {}) => {
	let n = t.messages;
	t.messages !== void 0 && M({ log: x })(`${N("createI18n", j)}: the ${N("`messages`", j)} option is used as a fallback. For optimal bundle size, remove the locale JSON imports and use ${N("useDictionary", j)} or compile your intlayer dictionaries instead:\n  ${N("Before:", be)} createI18n({ messages: { en, fr, … } })\n  ${N("After: ", be)} createI18n({})`);
	let r = dt(t.locale), i = t.datetimeFormats, a = t.numberFormats, o = () => String(r.locale.value), s = e({
		get: () => o(),
		set: (e) => {
			r.setLocale(e);
		}
	}), c = (e, ...t) => Ct(o(), void 0, e, t, n), l = (e, t) => f(e, t, o(), i), u = (e, t) => ee(e, t, o(), a), d = {
		locale: s,
		availableLocales: wt(),
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
	}, te = {
		get locale() {
			return o();
		},
		set locale(e) {
			r.setLocale(e);
		},
		get availableLocales() {
			return wt();
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
			ft(e, { locale: t.locale }), e.provide(xt, m), e.config.globalProperties.$t = c, e.config.globalProperties.$tc = c, e.config.globalProperties.$te = d.te, e.config.globalProperties.$tm = d.tm, e.config.globalProperties.$rt = d.rt, e.config.globalProperties.$d = l, e.config.globalProperties.$n = u, e.config.globalProperties.$i18n = te, e.directive("t", {
				beforeMount: p,
				updated: p
			});
		}
	};
	return m;
}), Et = ((t) => {
	let { locale: n, setLocale: r, availableLocales: i } = bt(), o = a(xt)?.__optionsMessages, s = t?.namespace, c = t?.datetimeFormats, l = t?.numberFormats, u = e({
		get: () => n.value,
		set: (e) => {
			r(e);
		}
	}), d = (e, ...t) => Ct(n.value, s, e, t, o);
	return {
		locale: u,
		availableLocales: i,
		t: d,
		tc: d,
		te: (e) => Q(n.value, s, e) !== void 0,
		tm: (e) => Q(n.value, s, e) ?? {},
		rt: (e, ...t) => {
			let { values: r, count: i } = O(t);
			return k(e, r, i, n.value);
		},
		d: (e, t) => f(e, t, n.value, c),
		n: (e, t) => ee(e, t, n.value, l)
	};
}), Dt = n({
	__name: "MockBanner",
	setup(e, { expose: t }) {
		t();
		let { t: n } = Et(), r = { t: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), Ot = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, kt = { class: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground" };
function At(e, n, r, i, a, s) {
	return o(), t("div", kt, u(i.t("mockBanner")), 1);
}
var jt = Ot(Dt, [["render", At], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/src/components/MockBanner.vue"]]), Mt = Tt({
	legacy: !1,
	locale: "en",
	fallbackLocale: "en"
}), Nt = n({
	__name: "Wrapper",
	setup(e, { expose: t }) {
		t();
		let n = r()?.appContext.app;
		n && !n.config.globalProperties.$i18n && n.use(Mt);
		let i = { app: n };
		return Object.defineProperty(i, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), i;
	}
});
function Pt(e, t, n, r, i, a) {
	return l(e.$slots, "default");
}
var Ft = Ot(Nt, [["render", Pt], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/scripts/Wrapper.vue"]]), It = { render() {
	return i(Ft, {}, { default: () => i(jt) });
} };
export { It as default };
