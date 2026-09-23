import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, h as o, inject as s, onBeforeMount as c, onMounted as l, openBlock as u, readonly as d, ref as f, renderList as p, renderSlot as m, toDisplayString as h, unref as g } from "vue";
var _ = (e, t, n) => typeof e == "string" ? n?.[t]?.[e] ?? n?.[t.split("-")[0] ?? ""]?.[e] : e, ee = (e, t, n, r) => {
	let i = e instanceof Date ? e : new Date(e), a = _(t, n, r);
	try {
		return new Intl.DateTimeFormat(n, a).format(i);
	} catch {
		return String(e);
	}
}, te = (e, t, n, r) => {
	let i = _(t, n, r);
	try {
		return new Intl.NumberFormat(n, i).format(e);
	} catch {
		return String(e);
	}
}, ne = "translation", re = "enumeration", ie = "plural", v = "insertion", ae = "object", oe = "array", se = "markdown", y = "html", ce = "gender", le = "select", b = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => b(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => b(e, {
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
			n[r] = b(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = b(e[r], i);
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
}, fe = (e, t) => e[de(e, t) ?? "fallback"], x = {
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
}, pe = 50, me = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Set(), he = (e) => {
	w.has(e) || (w.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
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
function T(e, t, n) {
	let r = t ?? x?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = me.get(a);
	o || (o = /* @__PURE__ */ new Map(), me.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? _e(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > pe && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var ve = (e, t, n) => e[T("PluralRules", n).select(t)] ?? e.other, ye = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, be = [
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
	if (r.nodeType === "insertion") return A(r[v], t, n);
	if (r.nodeType === "html") return A(r[y], t, n);
	if (r.nodeType === "plural") {
		let e = r[ie];
		return A(ve(e, Number(k(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[re], i = be.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) be.includes(t) || (o[t] = n);
		let s = k(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = T("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? fe(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return A(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[le], i = k(t, typeof r.variable == "string" ? r.variable : "value");
		return A(ye(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[ce];
		return A(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, xe = (e) => e.split(/(?<!\\)\|/).map((e) => e.replace(/\\\|/g, "|").trim()), Se = (e, t) => {
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
			let e = xe(t);
			t = e[Se(n ?? 1, e.length)] ?? t;
		}
		return O(t, i, r);
	}
	let a = A(e, i, r);
	return typeof a == "string" ? a : String(a ?? "");
}, N = "\x1B[0m", P = "\x1B[90m", Ce = "\x1B[34m", we = "\x1B[31m", Te = "\x1B[32m", Ee = "\x1B[35m", De = "\x1B[38;5;3m", F = "\x1B[36m", Oe = (e) => e, ke = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Oe(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, I = (e, t) => (n, r) => ke(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), L = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? N : n : N}` : e, Ae = (e, t = De, n = N) => [e].flat().map((e) => L(e, t, n)).join(", ");
L("✗", we), L("✓", Te), L("⏲", Ce);
var je = /* @__PURE__ */ new WeakMap(), Me = 0, Ne = (e) => {
	if (!e) return "base";
	let t = je.get(e);
	if (t) return t;
	Me += 1;
	let n = `p${Me}`;
	return je.set(e, n), n;
}, Pe = 256, R = /* @__PURE__ */ new WeakMap(), z = (e) => typeof e == "object" && !!e, Fe = (e, t, n) => `${e}_${t}_${Ne(n)}`, Ie = (e, t) => {
	if (!z(e)) return { hit: !1 };
	let n = R.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, B = (e, t, n) => {
	if (!z(e)) return n;
	let r = R.get(e);
	return r || (r = /* @__PURE__ */ new Map(), R.set(e, r)), r.size >= Pe && r.clear(), r.set(t, n), n;
}, V = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), H = "default", Le = /[^A-Za-z0-9._&=-]/g, U = /[^A-Za-z0-9._-]/g, Re = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, W = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Re);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, G = (e) => e === void 0 ? H : typeof e == "string" ? W(e, Le) : Object.keys(e).sort().map((t) => `${W(t, U)}=${W(String(e[t]), U)}`).join("&"), K = (e) => Array.isArray(e) ? e.length === 0 ? [H] : e.map(G) : [G(e)], ze = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? H : e[0] ?? "default";
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
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? H : ze(K(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Be(e, n, t, s)).map((t) => He(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, We = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Ge = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? K(n).join(",") : String(n)}`;
}).join("|") : "", Ke = () => ({}), qe = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Je = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : qe.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Je(e ? `${e}.${String(n)}` : String(n)) }), Ye = /* @__PURE__ */ new Set(), Xe = (e, t, n) => {
	let r = Ke()[e];
	return r ? pt(r, t, n) : (Ye.has(e) || (I({ log: C })(typeof window > "u" ? `Dictionary ${Ae(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), Ye.add(e)), Je(e));
}, Ze = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Qe = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (Ze(e) && Ze(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : Qe(e[r], t[r]));
		return n;
	}
	return e;
}, $e = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => Qe(e, t));
}, q = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, et = (e) => {
	if (typeof e == "string") return e;
	if (q(e)) return e.nodeType === "html" ? e[y] : e[se];
}, tt = (e, t) => {
	if (typeof e == "string") return t;
	if (q(e)) {
		let n = e.nodeType === "html" ? y : se;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, nt = (e, t, n, r, i) => {
	let a = tt(e, V(et(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, J = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, rt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? J : {
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
		return $e(o, e, t);
	}
}, it = J, at = J, ot = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: v }], i = e[v], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => nt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = V(i, e);
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
}, st = J, ct = J, lt = (e) => J, ut = J, dt = (e, t = !0) => [
	rt(e ?? x.defaultLocale, t ? x.defaultLocale : void 0),
	it,
	at,
	ot,
	lt(e ?? x.defaultLocale),
	ut,
	st,
	ct
], ft = (e, t, n = []) => b(e, {
	...t,
	plugins: n
}), pt = (e, t, n) => {
	let { locale: r, selector: i } = We(t), a = Fe(r ?? x.defaultLocale, Ge(i), n), o = Ie(e, a);
	if (o.hit) return o.content;
	let s = n ?? dt(r), c = Ue(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return ft(e.content, t, s);
	};
	return c === null ? B(e, a, null) : Array.isArray(c) ? B(e, a, c.map(l)) : B(e, a, l(c));
}, mt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, ht = Symbol("intlayer"), Y = null, gt = (e, t = !0, n) => {
	if (Y) return Y;
	mt();
	let { defaultLocale: r } = x ?? {}, i = f(e ?? r), a = (e) => {
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
}, _t = (e, t) => {
	let { locale: n, isCookieEnabled: r, variant: i } = t ?? {}, a = gt(n, r, i);
	return e.provide(ht, a), e;
}, vt = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, yt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = vt(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, bt = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, xt = (e = X) => {
	let { locales: t } = x;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!bt) for (let t = 0; t < (S.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(S.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, St = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !bt && S.storage.cookies) for (let n = 0; n < S.storage.cookies.length; n++) {
		let { name: r, attributes: i } = S.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: vt(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, yt(r, e, i));
			} catch {}
		}
	}
};
xt(X);
var Ct = (e, t) => St(e, {
	...X,
	isCookieEnabled: t
}), { defaultLocale: wt, locales: Tt } = x ?? {}, Et = ({ isCookieEnabled: e, onLocaleChange: n } = {}) => {
	let r = s(ht);
	return {
		locale: t(() => r?.locale?.value ?? wt),
		defaultLocale: wt,
		availableLocales: Tt,
		setLocale: (t) => {
			if (!Tt?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			r && r.setLocale(t), Ct(t, e ?? r?.isCookieEnabled ?? !0), n?.(t);
		}
	};
}, Dt = Symbol("global-i18n"), Ot = "translation", Z = (e, t, n) => {
	try {
		let r = ue(Xe(t, e), n);
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
		let t = Z(e, Ot, i);
		if (t !== void 0) return t;
	}
}, kt = (e, t, n, r, i) => {
	let { values: a, count: o, defaultMessage: s } = j(r), c = Q(e, t, n);
	if (c === void 0) {
		if (i?.[e]) {
			let r = t ? `${t}.${n}` : n, s = ue(i[e], r);
			if (s !== void 0) return M(s, a, o, e);
		}
		return s === void 0 ? n : M(s, a, o, e);
	}
	return M(c, a, o, e);
}, At = () => x?.locales?.map(String) ?? [], $ = (e) => {
	I({ log: C })(`${L(e, F)} has no effect with ${L("@intlayer/vue-i18n", Ee)} — translations are managed by the compiled intlayer dictionaries.`);
}, jt = ((e = {}) => {
	let n = e.messages;
	e.messages !== void 0 && I({ log: C })(`${L("createI18n", F)}: the ${L("`messages`", F)} option is used as a fallback. For optimal bundle size, remove the locale JSON imports and use ${L("useDictionary", F)} or compile your intlayer dictionaries instead:\n  ${L("Before:", P)} createI18n({ messages: { en, fr, … } })\n  ${L("After: ", P)} createI18n({})`);
	let r = gt(e.locale), i = e.datetimeFormats, a = e.numberFormats, o = () => String(r.locale.value), s = t({
		get: () => o(),
		set: (e) => {
			r.setLocale(e);
		}
	}), c = (e, ...t) => kt(o(), void 0, e, t, n), l = (e, t) => ee(e, t, o(), i), u = (e, t) => te(e, t, o(), a), d = {
		locale: s,
		availableLocales: At(),
		fallbackLocale: e.fallbackLocale ?? x?.defaultLocale,
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
	}, f = {
		get locale() {
			return o();
		},
		set locale(e) {
			r.setLocale(e);
		},
		get availableLocales() {
			return At();
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
			_t(t, { locale: e.locale }), t.provide(Dt, m), t.config.globalProperties.$t = c, t.config.globalProperties.$tc = c, t.config.globalProperties.$te = d.te, t.config.globalProperties.$tm = d.tm, t.config.globalProperties.$rt = d.rt, t.config.globalProperties.$d = l, t.config.globalProperties.$n = u, t.config.globalProperties.$i18n = f, t.directive("t", {
				beforeMount: p,
				updated: p
			});
		}
	};
	return m;
}), Mt = ((e) => {
	let { locale: n, setLocale: r, availableLocales: i } = Et(), a = s(Dt)?.__optionsMessages, o = e?.namespace, c = e?.datetimeFormats, l = e?.numberFormats, u = t({
		get: () => n.value,
		set: (e) => {
			r(e);
		}
	}), d = (e, ...t) => kt(n.value, o, e, t, a);
	return {
		locale: u,
		availableLocales: i,
		t: d,
		tc: d,
		te: (e) => Q(n.value, o, e) !== void 0,
		tm: (e) => Q(n.value, o, e) ?? {},
		rt: (e, ...t) => {
			let { values: r, count: i } = j(t);
			return M(e, r, i, n.value);
		},
		d: (e, t) => ee(e, t, n.value, c),
		n: (e, t) => te(e, t, n.value, l)
	};
});
function Nt(e) {
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
var Pt = { class: "mb-6 text-2xl font-bold text-foreground" }, Ft = { class: "overflow-x-auto rounded-lg border border-border" }, It = { class: "w-full text-sm" }, Lt = { class: "bg-muted" }, Rt = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, zt = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, Bt = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, Vt = { class: "px-4 py-3 text-left font-medium text-muted-foreground" }, Ht = { class: "px-4 py-3 font-medium text-foreground" }, Ut = { class: "px-4 py-3 text-muted-foreground" }, Wt = { class: "px-4 py-3 text-muted-foreground" }, Gt = { class: "px-4 py-3 text-muted-foreground" }, Kt = i({
	__name: "ResultsTable",
	setup(i) {
		Nt("ResultsTable");
		let { t: a } = Mt(), o = t(() => [
			{
				lib: "react-i18next",
				size: "42.3 kB",
				time: "0.12ms",
				lazy: a("home.resultsTable.yes")
			},
			{
				lib: "react-intl",
				size: "38.1 kB",
				time: "0.15ms",
				lazy: a("home.resultsTable.manual")
			},
			{
				lib: "lingui",
				size: "12.8 kB",
				time: "0.08ms",
				lazy: a("home.resultsTable.yes")
			},
			{
				lib: "typesafe-i18n",
				size: "5.2 kB",
				time: "0.05ms",
				lazy: a("home.resultsTable.builtIn")
			}
		]);
		return (t, i) => (u(), n("section", null, [r("h2", Pt, h(g(a)("home.resultsTable.title")), 1), r("div", Ft, [r("table", It, [r("thead", Lt, [r("tr", null, [
			r("th", Rt, h(g(a)("home.resultsTable.library")), 1),
			r("th", zt, h(g(a)("home.resultsTable.bundleSize")), 1),
			r("th", Bt, h(g(a)("home.resultsTable.lookupTime")), 1),
			r("th", Vt, h(g(a)("home.resultsTable.lazyLoading")), 1)
		])]), r("tbody", null, [(u(!0), n(e, null, p(o.value, (e) => (u(), n("tr", {
			key: e.lib,
			class: "border-t border-border"
		}, [
			r("td", Ht, h(e.lib), 1),
			r("td", Ut, h(e.size), 1),
			r("td", Wt, h(e.time), 1),
			r("td", Gt, h(e.lazy), 1)
		]))), 128))])])])]));
	}
}), qt = jt({
	legacy: !1,
	locale: "en",
	fallbackLocale: "en"
}), Jt = i({
	__name: "Wrapper",
	setup(e) {
		let t = a()?.appContext.app;
		return t && !t.config.globalProperties.$i18n && t.use(qt), (e, t) => m(e.$slots, "default");
	}
}), Yt = { render() {
	return o(Jt, {}, { default: () => o(Kt) });
} };
export { Yt as default };
