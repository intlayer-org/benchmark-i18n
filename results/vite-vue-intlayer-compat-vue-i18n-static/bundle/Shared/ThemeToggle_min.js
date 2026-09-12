import { computed as e, createElementBlock as t, defineComponent as n, getCurrentInstance as r, h as i, inject as a, onMounted as o, onUnmounted as s, openBlock as c, readonly as l, ref as u, renderSlot as d, toDisplayString as ee, watch as f } from "vue";
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
}, te = "translation", ne = "enumeration", re = "plural", g = "insertion", ie = "object", ae = "array", _ = "markdown", v = "html", oe = "gender", se = "select", y = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => y(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => y(e, {
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
}, ce = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, le = (e, t) => e[ce(e, t) ?? "fallback"], x = {
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
function w(e, t, n) {
	let r = t ?? x?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = de.get(a);
	o || (o = /* @__PURE__ */ new Map(), de.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? he(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > ue && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var ge = (e, t, n) => e[w("PluralRules", n).select(t)] ?? e.other, _e = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, T = [
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
}, D = (e, t, n, r) => {
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
}, O = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = E(t, r);
	return o === void 0 ? e : i ? D(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = E(t, r);
	return o === void 0 ? e : D(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = E(t, n);
	return r === void 0 ? e : String(r);
}), k = (e, t) => e[t] ?? e.count ?? e.n, A = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return O(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return A(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(A(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return A(r[g], t, n);
	if (r.nodeType === "html") return A(r[v], t, n);
	if (r.nodeType === "plural") {
		let e = r[re];
		return A(ge(e, Number(k(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[ne], i = T.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) T.includes(t) || (o[t] = n);
		let s = k(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = w("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? le(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return A(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[se], i = k(t, typeof r.variable == "string" ? r.variable : "value");
		return A(_e(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[oe];
		return A(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, ve = (e) => e.split(/(?<!\\)\|/).map((e) => e.replace(/\\\|/g, "|").trim()), ye = (e, t) => {
	let n = Math.abs(e);
	return t === 2 ? n ? +(n > 1) : 1 : n ? Math.min(n, 2) : 0;
}, j = (e) => {
	let t = { values: {} };
	for (let n of e) if (typeof n == "number") t.count = n;
	else if (typeof n == "string") t.defaultMessage = n;
	else if (Array.isArray(n)) t.values = { ...n.map(String) };
	else if (typeof n == "object" && n) {
		let e = n;
		t.values = e, typeof e.plural == "number" && (t.count = e.plural);
	}
	return t;
}, M = (e, t, n, r) => {
	let i = { ...t };
	if (n !== void 0 && (i.count ??= n, i.n ??= n), typeof e == "string") {
		let t = e;
		if (/(?<!\\)\|/.test(t)) {
			let e = ve(t);
			t = e[ye(n ?? 1, e.length)] ?? t;
		}
		return O(t, i, r);
	}
	let a = A(e, i, r);
	return typeof a == "string" ? a : String(a ?? "");
}, N = "\x1B[0m", P = "\x1B[90m", be = "\x1B[34m", xe = "\x1B[31m", Se = "\x1B[32m", Ce = "\x1B[35m", we = "\x1B[38;5;3m", F = "\x1B[36m", Te = (e) => e, Ee = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Te(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, I = (e, t) => (n, r) => Ee(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), L = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? N : n : N}` : e, De = (e, t = we, n = N) => [e].flat().map((e) => L(e, t, n)).join(", ");
L("✗", xe), L("✓", Se), L("⏲", be);
var R = /* @__PURE__ */ new WeakMap(), z = 0, Oe = (e) => {
	if (!e) return "base";
	let t = R.get(e);
	if (t) return t;
	z += 1;
	let n = `p${z}`;
	return R.set(e, n), n;
}, ke = 256, B = /* @__PURE__ */ new WeakMap(), V = (e) => typeof e == "object" && !!e, Ae = (e, t, n) => `${e}_${t}_${Oe(n)}`, je = (e, t) => {
	if (!V(e)) return { hit: !1 };
	let n = B.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, H = (e, t, n) => {
	if (!V(e)) return n;
	let r = B.get(e);
	return r || (r = /* @__PURE__ */ new Map(), B.set(e, r)), r.size >= ke && r.clear(), r.set(t, n), n;
}, U = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), W = "default", Me = /[^A-Za-z0-9._&=-]/g, Ne = /[^A-Za-z0-9._-]/g, Pe = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, G = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Pe);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, Fe = (e) => e === void 0 ? W : typeof e == "string" ? G(e, Me) : Object.keys(e).sort().map((t) => `${G(t, Ne)}=${G(String(e[t]), Ne)}`).join("&"), Ie = (e) => Array.isArray(e) ? e.length === 0 ? [W] : e.map(Fe) : [Fe(e)], Le = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? W : e[0] ?? "default";
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
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? W : Le(Ie(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Re(e, n, t, s)).map((t) => Be(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, He = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Ue = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? Ie(n).join(",") : String(n)}`;
}).join("|") : "", We = () => ({}), Ge = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Ke = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Ge.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Ke(e ? `${e}.${String(n)}` : String(n)) }), qe = /* @__PURE__ */ new Set(), Je = (e, t, n) => {
	let r = We()[e];
	return r ? dt(r, t, n) : (qe.has(e) || (I({ log: C })(typeof window > "u" ? `Dictionary ${De(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), qe.add(e)), Ke(e));
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
}, K = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Qe = (e) => {
	if (typeof e == "string") return e;
	if (K(e)) return e.nodeType === "html" ? e[v] : e[_];
}, $e = (e, t) => {
	if (typeof e == "string") return t;
	if (K(e)) {
		let n = e.nodeType === "html" ? v : _;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, et = (e, t, n, r, i) => {
	let a = $e(e, U(Qe(e), t));
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
					let a = U(i, e);
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
	tt(e ?? x.defaultLocale, t ? x.defaultLocale : void 0),
	nt,
	rt,
	it,
	st(e ?? x.defaultLocale),
	ct,
	at,
	ot
], ut = (e, t, n = []) => y(e, {
	...t,
	plugins: n
}), dt = (e, t, n) => {
	let { locale: r, selector: i } = He(t), a = Ae(r ?? x.defaultLocale, Ue(i), n), o = je(e, a);
	if (o.hit) return o.content;
	let s = n ?? lt(r), c = Ve(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return ut(e.content, t, s);
	};
	return c === null ? H(e, a, null) : Array.isArray(c) ? H(e, a, c.map(l)) : H(e, a, l(c));
}, ft = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, pt = Symbol("intlayer"), J = null, mt = (e, t = !0, n) => {
	if (J) return J;
	ft();
	let { defaultLocale: r } = x ?? {}, i = u(e ?? r), a = (e) => {
		i.value = e;
	}, o = u(n);
	return J = {
		locale: l(i),
		setLocale: a,
		variant: l(o),
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
	let { locales: t } = x;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!vt) for (let t = 0; t < (S.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(S.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, bt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !vt && S.storage.cookies) for (let n = 0; n < S.storage.cookies.length; n++) {
		let { name: r, attributes: i } = S.storage.cookies[n];
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
}), { defaultLocale: X, locales: St } = x ?? {}, Ct = ({ isCookieEnabled: t, onLocaleChange: n } = {}) => {
	let r = a(pt);
	return {
		locale: e(() => r?.locale?.value ?? X),
		defaultLocale: X,
		availableLocales: St,
		setLocale: (e) => {
			if (!St?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			r && r.setLocale(e), xt(e, t ?? r?.isCookieEnabled ?? !0), n?.(e);
		}
	};
}, wt = Symbol("global-i18n"), Tt = "translation", Z = (e, t, n) => {
	try {
		let r = b(Je(t, e), n);
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
		let t = Z(e, Tt, i);
		if (t !== void 0) return t;
	}
}, Et = (e, t, n, r, i) => {
	let { values: a, count: o, defaultMessage: s } = j(r), c = Q(e, t, n);
	if (c === void 0) {
		if (i?.[e]) {
			let r = t ? `${t}.${n}` : n, s = b(i[e], r);
			if (s !== void 0) return M(s, a, o, e);
		}
		return s === void 0 ? n : M(s, a, o, e);
	}
	return M(c, a, o, e);
}, Dt = () => x?.locales?.map(String) ?? [], $ = (e) => {
	I({ log: C })(`${L(e, F)} has no effect with ${L("@intlayer/vue-i18n", Ce)} — translations are managed by the compiled intlayer dictionaries.`);
}, Ot = ((t = {}) => {
	let n = t.messages;
	t.messages !== void 0 && I({ log: C })(`${L("createI18n", F)}: the ${L("`messages`", F)} option is used as a fallback. For optimal bundle size, remove the locale JSON imports and use ${L("useDictionary", F)} or compile your intlayer dictionaries instead:\n  ${L("Before:", P)} createI18n({ messages: { en, fr, … } })\n  ${L("After: ", P)} createI18n({})`);
	let r = mt(t.locale), i = t.datetimeFormats, a = t.numberFormats, o = () => String(r.locale.value), s = e({
		get: () => o(),
		set: (e) => {
			r.setLocale(e);
		}
	}), c = (e, ...t) => Et(o(), void 0, e, t, n), l = (e, t) => m(e, t, o(), i), u = (e, t) => h(e, t, o(), a), d = {
		locale: s,
		availableLocales: Dt(),
		fallbackLocale: t.fallbackLocale ?? x?.defaultLocale,
		t: c,
		tc: c,
		te: (e) => Q(o(), void 0, e) !== void 0,
		tm: (e) => Q(o(), void 0, e) ?? {},
		rt: (e, ...t) => {
			let { values: n, count: r } = j(t);
			return M(e, n, r, o());
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
			return Dt();
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
		mode: t.legacy === !0 ? "legacy" : "composition",
		__optionsMessages: n,
		install(e) {
			ht(e, { locale: t.locale }), e.provide(wt, p), e.config.globalProperties.$t = c, e.config.globalProperties.$tc = c, e.config.globalProperties.$te = d.te, e.config.globalProperties.$tm = d.tm, e.config.globalProperties.$rt = d.rt, e.config.globalProperties.$d = l, e.config.globalProperties.$n = u, e.config.globalProperties.$i18n = ee, e.directive("t", {
				beforeMount: f,
				updated: f
			});
		}
	};
	return p;
}), kt = ((t) => {
	let { locale: n, setLocale: r, availableLocales: i } = Ct(), o = a(wt)?.__optionsMessages, s = t?.namespace, c = t?.datetimeFormats, l = t?.numberFormats, u = e({
		get: () => n.value,
		set: (e) => {
			r(e);
		}
	}), d = (e, ...t) => Et(n.value, s, e, t, o);
	return {
		locale: u,
		availableLocales: i,
		t: d,
		tc: d,
		te: (e) => Q(n.value, s, e) !== void 0,
		tm: (e) => Q(n.value, s, e) ?? {},
		rt: (e, ...t) => {
			let { values: r, count: i } = j(t);
			return M(e, r, i, n.value);
		},
		d: (e, t) => m(e, t, n.value, c),
		n: (e, t) => h(e, t, n.value, l)
	};
}), At = n({
	__name: "ThemeToggle",
	setup(e, { expose: t }) {
		t();
		let { t: n } = kt(), r = u("auto");
		function i() {
			if (typeof window > "u") return "auto";
			let e = window.localStorage.getItem("theme");
			return e === "light" || e === "dark" || e === "auto" ? e : "auto";
		}
		function a(e) {
			let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
			document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
		}
		o(() => {
			let e = i();
			r.value = e, a(e);
		});
		let c = null;
		f(r, (e) => {
			if (e === "auto") {
				let e = window.matchMedia("(prefers-color-scheme: dark)");
				c = () => a("auto"), e.addEventListener("change", c);
			} else c &&= (window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", c), null);
		}, { immediate: !0 }), s(() => {
			c && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", c);
		});
		function l() {
			let e = r.value === "light" ? "dark" : r.value === "dark" ? "auto" : "light";
			r.value = e, a(e), window.localStorage.setItem("theme", e);
		}
		let d = {
			t: n,
			mode: r,
			getInitialMode: i,
			applyThemeMode: a,
			get mediaQueryListener() {
				return c;
			},
			set mediaQueryListener(e) {
				c = e;
			},
			toggleMode: l,
			getLabel: () => r.value === "auto" ? n("themeToggle.labelAuto") : n("themeToggle.labelOther", { mode: r.value })
		};
		return Object.defineProperty(d, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), d;
	}
}), jt = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Mt = ["aria-label", "title"];
function Nt(e, n, r, i, a, o) {
	return c(), t("button", {
		type: "button",
		onClick: i.toggleMode,
		"aria-label": i.getLabel(),
		title: i.getLabel(),
		class: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"
	}, ee(i.mode === "auto" ? i.t("themeToggle.auto") : i.mode === "dark" ? i.t("themeToggle.dark") : i.t("themeToggle.light")), 9, Mt);
}
var Pt = jt(At, [["render", Nt], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/src/components/ThemeToggle.vue"]]), Ft = Ot({
	legacy: !1,
	locale: "en",
	fallbackLocale: "en"
}), It = n({
	__name: "Wrapper",
	setup(e, { expose: t }) {
		t();
		let n = r()?.appContext.app;
		n && !n.config.globalProperties.$i18n && n.use(Ft);
		let i = { app: n };
		return Object.defineProperty(i, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), i;
	}
});
function Lt(e, t, n, r, i, a) {
	return d(e.$slots, "default");
}
var Rt = jt(It, [["render", Lt], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/scripts/Wrapper.vue"]]), zt = { render() {
	return i(Rt, {}, { default: () => i(Pt) });
} };
export { zt as default };
