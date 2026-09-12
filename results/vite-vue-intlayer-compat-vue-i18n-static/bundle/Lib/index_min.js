import { computed as e, defineComponent as t, getCurrentInstance as n, h as r, inject as i, readonly as a, ref as o, renderSlot as s } from "vue";
var c = (e, t, n) => typeof e == "string" ? n?.[t]?.[e] ?? n?.[t.split("-")[0] ?? ""]?.[e] : e, l = (e, t, n, r) => {
	let i = e instanceof Date ? e : new Date(e), a = c(t, n, r);
	try {
		return new Intl.DateTimeFormat(n, a).format(i);
	} catch {
		return String(e);
	}
}, u = (e, t, n, r) => {
	let i = c(t, n, r);
	try {
		return new Intl.NumberFormat(n, i).format(e);
	} catch {
		return String(e);
	}
}, d = "translation", f = "enumeration", p = "plural", m = "insertion", h = "object", g = "array", _ = "markdown", v = "html", ee = "gender", te = "select", y = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => y(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => y(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: g,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: h,
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
}, ne = (e, t, n = ".") => {
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
}, re = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, ie = (e, t) => e[re(e, t) ?? "fallback"], b = {
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
}, ae = 50, C = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Set(), oe = (e) => {
	w.has(e) || (w.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, se = {
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
}, ce = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (oe(e), se[e]);
};
function T(e, t, n) {
	let r = t ?? b?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = C.get(a);
	o || (o = /* @__PURE__ */ new Map(), C.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? ce(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > ae && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var le = (e, t, n) => e[T("PluralRules", n).select(t)] ?? e.other, ue = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, de = [
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
}, fe = (e, t, n, r) => {
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
}, pe = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = E(t, r);
	return o === void 0 ? e : i ? fe(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = E(t, r);
	return o === void 0 ? e : fe(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = E(t, n);
	return r === void 0 ? e : String(r);
}), D = (e, t) => e[t] ?? e.count ?? e.n, O = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return pe(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return O(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(O(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return O(r[m], t, n);
	if (r.nodeType === "html") return O(r[v], t, n);
	if (r.nodeType === "plural") {
		let e = r[p];
		return O(le(e, Number(D(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[f], i = de.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) de.includes(t) || (o[t] = n);
		let s = D(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = T("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? ie(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return O(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[te], i = D(t, typeof r.variable == "string" ? r.variable : "value");
		return O(ue(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[ee];
		return O(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, me = (e) => e.split(/(?<!\\)\|/).map((e) => e.replace(/\\\|/g, "|").trim()), he = (e, t) => {
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
			let e = me(t);
			t = e[he(n ?? 1, e.length)] ?? t;
		}
		return pe(t, i, r);
	}
	let a = O(e, i, r);
	return typeof a == "string" ? a : String(a ?? "");
}, j = "\x1B[0m", M = "\x1B[90m", ge = "\x1B[34m", _e = "\x1B[31m", ve = "\x1B[32m", ye = "\x1B[35m", be = "\x1B[38;5;3m", N = "\x1B[36m", xe = (e) => e, Se = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = xe(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, P = (e, t) => (n, r) => Se(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), F = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? j : n : j}` : e, Ce = (e, t = be, n = j) => [e].flat().map((e) => F(e, t, n)).join(", ");
F("✗", _e), F("✓", ve), F("⏲", ge);
var I = /* @__PURE__ */ new WeakMap(), L = 0, we = (e) => {
	if (!e) return "base";
	let t = I.get(e);
	if (t) return t;
	L += 1;
	let n = `p${L}`;
	return I.set(e, n), n;
}, Te = 256, R = /* @__PURE__ */ new WeakMap(), z = (e) => typeof e == "object" && !!e, Ee = (e, t, n) => `${e}_${t}_${we(n)}`, De = (e, t) => {
	if (!z(e)) return { hit: !1 };
	let n = R.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, B = (e, t, n) => {
	if (!z(e)) return n;
	let r = R.get(e);
	return r || (r = /* @__PURE__ */ new Map(), R.set(e, r)), r.size >= Te && r.clear(), r.set(t, n), n;
}, V = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), H = "default", Oe = /[^A-Za-z0-9._&=-]/g, U = /[^A-Za-z0-9._-]/g, ke = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, W = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, ke);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, Ae = (e) => e === void 0 ? H : typeof e == "string" ? W(e, Oe) : Object.keys(e).sort().map((t) => `${W(t, U)}=${W(String(e[t]), U)}`).join("&"), je = (e) => Array.isArray(e) ? e.length === 0 ? [H] : e.map(Ae) : [Ae(e)], Me = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? H : e[0] ?? "default";
}, Ne = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Pe = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Fe = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Ie = (e, t) => {
	if (!Pe(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? H : Me(je(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Ne(e, n, t, s)).map((t) => Fe(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Le = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Re = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? je(n).join(",") : String(n)}`;
}).join("|") : "", ze = () => ({}), Be = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Ve = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Be.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Ve(e ? `${e}.${String(n)}` : String(n)) }), He = /* @__PURE__ */ new Set(), Ue = (e, t, n) => {
	let r = ze()[e];
	return r ? ot(r, t, n) : (He.has(e) || (P({ log: S })(typeof window > "u" ? `Dictionary ${Ce(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), He.add(e)), Ve(e));
}, We = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Ge = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (We(e) && We(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : Ge(e[r], t[r]));
		return n;
	}
	return e;
}, Ke = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => Ge(e, t));
}, G = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, qe = (e) => {
	if (typeof e == "string") return e;
	if (G(e)) return e.nodeType === "html" ? e[v] : e[_];
}, Je = (e, t) => {
	if (typeof e == "string") return t;
	if (G(e)) {
		let n = e.nodeType === "html" ? v : _;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Ye = (e, t, n, r, i) => {
	let a = Je(e, V(qe(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, K = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Xe = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? K : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: d,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return Ke(o, e, t);
	}
}, Ze = K, Qe = K, $e = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? K : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: m }], i = e[m], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || G(e),
			transform: (e, n, r) => {
				if (G(e)) return (i) => Ye(e, i, n, t.plugins, r);
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
}, et = K, tt = K, nt = (e) => K, rt = K, it = (e, t = !0) => [
	Xe(e ?? b.defaultLocale, t ? b.defaultLocale : void 0),
	Ze,
	Qe,
	$e,
	nt(e ?? b.defaultLocale),
	rt,
	et,
	tt
], at = (e, t, n = []) => y(e, {
	...t,
	plugins: n
}), ot = (e, t, n) => {
	let { locale: r, selector: i } = Le(t), a = Ee(r ?? b.defaultLocale, Re(i), n), o = De(e, a);
	if (o.hit) return o.content;
	let s = n ?? it(r), c = Ie(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return at(e.content, t, s);
	};
	return c === null ? B(e, a, null) : Array.isArray(c) ? B(e, a, c.map(l)) : B(e, a, l(c));
}, st = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, ct = Symbol("intlayer"), q = null, lt = (e, t = !0, n) => {
	if (q) return q;
	st();
	let { defaultLocale: r } = b ?? {}, i = o(e ?? r), s = (e) => {
		i.value = e;
	}, c = o(n);
	return q = {
		locale: a(i),
		setLocale: s,
		variant: a(c),
		setVariant: (e) => {
			c.value = e;
		},
		isCookieEnabled: t
	}, q;
}, ut = (e, t) => {
	let { locale: n, isCookieEnabled: r, variant: i } = t ?? {}, a = lt(n, r, i);
	return e.provide(ct, a), e;
}, dt = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, ft = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = dt(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, pt = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var J = {
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
}, mt = (e = J) => {
	let { locales: t } = b;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!pt) for (let t = 0; t < (x.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(x.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ht = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !pt && x.storage.cookies) for (let n = 0; n < x.storage.cookies.length; n++) {
		let { name: r, attributes: i } = x.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: dt(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ft(r, e, i));
			} catch {}
		}
	}
};
mt(J);
var gt = (e, t) => ht(e, {
	...J,
	isCookieEnabled: t
}), { defaultLocale: _t, locales: vt } = b ?? {}, yt = ({ isCookieEnabled: t, onLocaleChange: n } = {}) => {
	let r = i(ct);
	return {
		locale: e(() => r?.locale?.value ?? _t),
		defaultLocale: _t,
		availableLocales: vt,
		setLocale: (e) => {
			if (!vt?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			r && r.setLocale(e), gt(e, t ?? r?.isCookieEnabled ?? !0), n?.(e);
		}
	};
}, bt = Symbol("global-i18n"), xt = "translation", Y = (e, t, n) => {
	try {
		let r = ne(Ue(t, e), n);
		if (r != null) return r;
	} catch {}
}, X = (e, t, n) => {
	let r = t, i = n;
	if (n.includes(":")) {
		let e = n.indexOf(":");
		r = n.slice(0, e), i = n.slice(e + 1);
	}
	if (r) {
		let t = Y(e, r, i);
		if (t !== void 0) return t;
	}
	if (i.includes(".")) {
		let t = i.indexOf("."), n = Y(e, i.slice(0, t), i.slice(t + 1));
		if (n !== void 0) return n;
	}
	if (!r) {
		let t = Y(e, xt, i);
		if (t !== void 0) return t;
	}
}, Z = (e, t, n, r, i) => {
	let { values: a, count: o, defaultMessage: s } = k(r), c = X(e, t, n);
	if (c === void 0) {
		if (i?.[e]) {
			let r = t ? `${t}.${n}` : n, s = ne(i[e], r);
			if (s !== void 0) return A(s, a, o, e);
		}
		return s === void 0 ? n : A(s, a, o, e);
	}
	return A(c, a, o, e);
}, St = () => b?.locales?.map(String) ?? [], Q = (e) => {
	P({ log: S })(`${F(e, N)} has no effect with ${F("@intlayer/vue-i18n", ye)} — translations are managed by the compiled intlayer dictionaries.`);
}, Ct = ((t = {}) => {
	let n = t.messages;
	t.messages !== void 0 && P({ log: S })(`${F("createI18n", N)}: the ${F("`messages`", N)} option is used as a fallback. For optimal bundle size, remove the locale JSON imports and use ${F("useDictionary", N)} or compile your intlayer dictionaries instead:\n  ${F("Before:", M)} createI18n({ messages: { en, fr, … } })\n  ${F("After: ", M)} createI18n({})`);
	let r = lt(t.locale), i = t.datetimeFormats, a = t.numberFormats, o = () => String(r.locale.value), s = e({
		get: () => o(),
		set: (e) => {
			r.setLocale(e);
		}
	}), c = (e, ...t) => Z(o(), void 0, e, t, n), d = (e, t) => l(e, t, o(), i), f = (e, t) => u(e, t, o(), a), p = {
		locale: s,
		availableLocales: St(),
		fallbackLocale: t.fallbackLocale ?? b?.defaultLocale,
		t: c,
		tc: c,
		te: (e) => X(o(), void 0, e) !== void 0,
		tm: (e) => X(o(), void 0, e) ?? {},
		rt: (e, ...t) => {
			let { values: n, count: r } = k(t);
			return A(e, n, r, o());
		},
		d,
		n: f,
		setLocaleMessage: (e, t) => {
			Q("setLocaleMessage");
		},
		mergeLocaleMessage: (e, t) => {
			Q("mergeLocaleMessage");
		},
		getLocaleMessage: (e) => (Q("getLocaleMessage"), {})
	}, m = {
		get locale() {
			return o();
		},
		set locale(e) {
			r.setLocale(e);
		},
		get availableLocales() {
			return St();
		},
		t: c,
		tc: c,
		te: p.te,
		tm: p.tm,
		rt: p.rt,
		d,
		n: f
	}, h = (e, t) => {
		let n = t.value;
		if (typeof n == "string") e.textContent = c(n);
		else if (n && typeof n == "object") {
			let t = [];
			n.args && t.push(n.args), typeof n.choice == "number" && t.push(n.choice), e.textContent = c(n.path, ...t);
		}
	}, g = {
		global: p,
		mode: t.legacy === !0 ? "legacy" : "composition",
		__optionsMessages: n,
		install(e) {
			ut(e, { locale: t.locale }), e.provide(bt, g), e.config.globalProperties.$t = c, e.config.globalProperties.$tc = c, e.config.globalProperties.$te = p.te, e.config.globalProperties.$tm = p.tm, e.config.globalProperties.$rt = p.rt, e.config.globalProperties.$d = d, e.config.globalProperties.$n = f, e.config.globalProperties.$i18n = m, e.directive("t", {
				beforeMount: h,
				updated: h
			});
		}
	};
	return g;
}), wt = ((t) => {
	let { locale: n, setLocale: r, availableLocales: a } = yt(), o = i(bt)?.__optionsMessages, s = t?.namespace, c = t?.datetimeFormats, d = t?.numberFormats, f = e({
		get: () => n.value,
		set: (e) => {
			r(e);
		}
	}), p = (e, ...t) => Z(n.value, s, e, t, o);
	return {
		locale: f,
		availableLocales: a,
		t: p,
		tc: p,
		te: (e) => X(n.value, s, e) !== void 0,
		tm: (e) => X(n.value, s, e) ?? {},
		rt: (e, ...t) => {
			let { values: r, count: i } = k(t);
			return A(e, r, i, n.value);
		},
		d: (e, t) => l(e, t, n.value, c),
		n: (e, t) => u(e, t, n.value, d)
	};
}), Tt = t({
	__name: "EmptyComponent",
	setup(e, { expose: t }) {
		t();
		let { t: n } = wt(), r = {
			t: n,
			value: n("header.home")
		};
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), $ = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
};
function Et(e, t, n, r, i, a) {
	return null;
}
var Dt = $(Tt, [["render", Et], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/scripts/EmptyComponent.vue"]]), Ot = t({
	__name: "LibWrapper",
	setup(e, { expose: t }) {
		t();
		let r = Ct({
			legacy: !1,
			locale: "en"
		}), i = n()?.appContext.app;
		i && !i.config.globalProperties.$i18n && i.use(r);
		let a = {
			i18n: r,
			app: i
		};
		return Object.defineProperty(a, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), a;
	}
});
function kt(e, t, n, r, i, a) {
	return s(e.$slots, "default");
}
var At = $(Ot, [["render", kt], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/scripts/LibWrapper.vue"]]), jt = { render() {
	return r(At, {}, { default: () => r(Dt) });
} };
export { jt as default };
