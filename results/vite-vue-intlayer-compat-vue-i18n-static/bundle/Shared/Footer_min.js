import { Fragment as e, computed as t, createBlock as n, createElementBlock as r, createElementVNode as i, createTextVNode as a, defineComponent as o, getCurrentInstance as s, h as c, inject as l, openBlock as u, readonly as d, ref as f, renderList as p, renderSlot as m, resolveComponent as ee, toDisplayString as h, withCtx as te } from "vue";
import { useRoute as ne } from "vue-router";
var re = (e, t, n) => typeof e == "string" ? n?.[t]?.[e] ?? n?.[t.split("-")[0] ?? ""]?.[e] : e, g = (e, t, n, r) => {
	let i = e instanceof Date ? e : new Date(e), a = re(t, n, r);
	try {
		return new Intl.DateTimeFormat(n, a).format(i);
	} catch {
		return String(e);
	}
}, ie = (e, t, n, r) => {
	let i = re(t, n, r);
	try {
		return new Intl.NumberFormat(n, i).format(e);
	} catch {
		return String(e);
	}
}, ae = "translation", oe = "enumeration", se = "plural", _ = "insertion", ce = "object", le = "array", v = "markdown", y = "html", ue = "gender", de = "select", b = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => b(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => b(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: le,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ce,
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
}, x = (e, t, n = ".") => {
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
}, pe = (e, t) => e[fe(e, t) ?? "fallback"], S = {
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
}, C = {
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
}, w = {
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
function T(e, t, n) {
	let r = t ?? S?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = he.get(a);
	o || (o = /* @__PURE__ */ new Map(), he.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? ye(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > me && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var be = (e, t, n) => e[T("PluralRules", n).select(t)] ?? e.other, xe = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, E = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], D = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, Se = (e, t, n, r) => {
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
}, Ce = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = D(t, r);
	return o === void 0 ? e : i ? Se(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = D(t, r);
	return o === void 0 ? e : Se(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = D(t, n);
	return r === void 0 ? e : String(r);
}), O = (e, t) => e[t] ?? e.count ?? e.n, k = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Ce(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return k(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(k(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return k(r[_], t, n);
	if (r.nodeType === "html") return k(r[y], t, n);
	if (r.nodeType === "plural") {
		let e = r[se];
		return k(be(e, Number(O(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[oe], i = E.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) E.includes(t) || (o[t] = n);
		let s = O(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = T("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? pe(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return k(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[de], i = O(t, typeof r.variable == "string" ? r.variable : "value");
		return k(xe(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[ue];
		return k(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, we = (e) => e.split(/(?<!\\)\|/).map((e) => e.replace(/\\\|/g, "|").trim()), Te = (e, t) => {
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
			let e = we(t);
			t = e[Te(n ?? 1, e.length)] ?? t;
		}
		return Ce(t, i, r);
	}
	let a = k(e, i, r);
	return typeof a == "string" ? a : String(a ?? "");
}, M = "\x1B[0m", N = "\x1B[90m", Ee = "\x1B[34m", De = "\x1B[31m", Oe = "\x1B[32m", ke = "\x1B[35m", Ae = "\x1B[38;5;3m", P = "\x1B[36m", je = (e) => e, Me = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = je(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, F = (e, t) => (n, r) => Me(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), I = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? M : n : M}` : e, Ne = (e, t = Ae, n = M) => [e].flat().map((e) => I(e, t, n)).join(", ");
I("✗", De), I("✓", Oe), I("⏲", Ee);
var Pe = /* @__PURE__ */ new WeakMap(), Fe = 0, Ie = (e) => {
	if (!e) return "base";
	let t = Pe.get(e);
	if (t) return t;
	Fe += 1;
	let n = `p${Fe}`;
	return Pe.set(e, n), n;
}, Le = 256, L = /* @__PURE__ */ new WeakMap(), R = (e) => typeof e == "object" && !!e, Re = (e, t, n) => `${e}_${t}_${Ie(n)}`, ze = (e, t) => {
	if (!R(e)) return { hit: !1 };
	let n = L.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, z = (e, t, n) => {
	if (!R(e)) return n;
	let r = L.get(e);
	return r || (r = /* @__PURE__ */ new Map(), L.set(e, r)), r.size >= Le && r.clear(), r.set(t, n), n;
}, B = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), V = "default", Be = /[^A-Za-z0-9._&=-]/g, H = /[^A-Za-z0-9._-]/g, Ve = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, U = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Ve);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, W = (e) => e === void 0 ? V : typeof e == "string" ? U(e, Be) : Object.keys(e).sort().map((t) => `${U(t, H)}=${U(String(e[t]), H)}`).join("&"), G = (e) => Array.isArray(e) ? e.length === 0 ? [V] : e.map(W) : [W(e)], He = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? V : e[0] ?? "default";
}, Ue = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, We = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Ge = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Ke = (e, t) => {
	if (!We(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? V : He(G(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Ue(e, n, t, s)).map((t) => Ge(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, qe = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Je = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? G(n).join(",") : String(n)}`;
}).join("|") : "", Ye = () => ({}), Xe = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), K = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Xe.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : K(e ? `${e}.${String(n)}` : String(n)) }), Ze = /* @__PURE__ */ new Set(), Qe = (e, t, n) => {
	let r = Ye()[e];
	return r ? ht(r, t, n) : (Ze.has(e) || (F({ log: w })(typeof window > "u" ? `Dictionary ${Ne(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), Ze.add(e)), K(e));
}, $e = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, et = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if ($e(e) && $e(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : et(e[r], t[r]));
		return n;
	}
	return e;
}, tt = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => et(e, t));
}, q = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, nt = (e) => {
	if (typeof e == "string") return e;
	if (q(e)) return e.nodeType === "html" ? e[y] : e[v];
}, rt = (e, t) => {
	if (typeof e == "string") return t;
	if (q(e)) {
		let n = e.nodeType === "html" ? y : v;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, it = (e, t, n, r, i) => {
	let a = rt(e, B(nt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, J = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, at = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? J : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ae,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return tt(o, e, t);
	}
}, ot = J, st = J, ct = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: _ }], i = e[_], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => it(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = B(i, e);
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
}, lt = J, ut = J, dt = (e) => J, ft = J, pt = (e, t = !0) => [
	at(e ?? S.defaultLocale, t ? S.defaultLocale : void 0),
	ot,
	st,
	ct,
	dt(e ?? S.defaultLocale),
	ft,
	lt,
	ut
], mt = (e, t, n = []) => b(e, {
	...t,
	plugins: n
}), ht = (e, t, n) => {
	let { locale: r, selector: i } = qe(t), a = Re(r ?? S.defaultLocale, Je(i), n), o = ze(e, a);
	if (o.hit) return o.content;
	let s = n ?? pt(r), c = Ke(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return mt(e.content, t, s);
	};
	return c === null ? z(e, a, null) : Array.isArray(c) ? z(e, a, c.map(l)) : z(e, a, l(c));
}, gt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, _t = Symbol("intlayer"), Y = null, vt = (e, t = !0, n) => {
	if (Y) return Y;
	gt();
	let { defaultLocale: r } = S ?? {}, i = f(e ?? r), a = (e) => {
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
}, yt = (e, t) => {
	let { locale: n, isCookieEnabled: r, variant: i } = t ?? {}, a = vt(n, r, i);
	return e.provide(_t, a), e;
}, bt = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, xt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = bt(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, St = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, Ct = (e = X) => {
	let { locales: t } = S;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!St) for (let t = 0; t < (C.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(C.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, wt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !St && C.storage.cookies) for (let n = 0; n < C.storage.cookies.length; n++) {
		let { name: r, attributes: i } = C.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: bt(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, xt(r, e, i));
			} catch {}
		}
	}
};
Ct(X);
var Tt = (e, t) => wt(e, {
	...X,
	isCookieEnabled: t
}), { defaultLocale: Et, locales: Dt } = S ?? {}, Ot = ({ isCookieEnabled: e, onLocaleChange: n } = {}) => {
	let r = l(_t);
	return {
		locale: t(() => r?.locale?.value ?? Et),
		defaultLocale: Et,
		availableLocales: Dt,
		setLocale: (t) => {
			if (!Dt?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			r && r.setLocale(t), Tt(t, e ?? r?.isCookieEnabled ?? !0), n?.(t);
		}
	};
}, kt = Symbol("global-i18n"), At = "translation", Z = (e, t, n) => {
	try {
		let r = x(Qe(t, e), n);
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
		let t = Z(e, At, i);
		if (t !== void 0) return t;
	}
}, jt = (e, t, n, r, i) => {
	let { values: a, count: o, defaultMessage: s } = A(r), c = Q(e, t, n);
	if (c === void 0) {
		if (i?.[e]) {
			let r = t ? `${t}.${n}` : n, s = x(i[e], r);
			if (s !== void 0) return j(s, a, o, e);
		}
		return s === void 0 ? n : j(s, a, o, e);
	}
	return j(c, a, o, e);
}, Mt = () => S?.locales?.map(String) ?? [], $ = (e) => {
	F({ log: w })(`${I(e, P)} has no effect with ${I("@intlayer/vue-i18n", ke)} — translations are managed by the compiled intlayer dictionaries.`);
}, Nt = ((e = {}) => {
	let n = e.messages;
	e.messages !== void 0 && F({ log: w })(`${I("createI18n", P)}: the ${I("`messages`", P)} option is used as a fallback. For optimal bundle size, remove the locale JSON imports and use ${I("useDictionary", P)} or compile your intlayer dictionaries instead:\n  ${I("Before:", N)} createI18n({ messages: { en, fr, … } })\n  ${I("After: ", N)} createI18n({})`);
	let r = vt(e.locale), i = e.datetimeFormats, a = e.numberFormats, o = () => String(r.locale.value), s = t({
		get: () => o(),
		set: (e) => {
			r.setLocale(e);
		}
	}), c = (e, ...t) => jt(o(), void 0, e, t, n), l = (e, t) => g(e, t, o(), i), u = (e, t) => ie(e, t, o(), a), d = {
		locale: s,
		availableLocales: Mt(),
		fallbackLocale: e.fallbackLocale ?? S?.defaultLocale,
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
			return Mt();
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
			yt(t, { locale: e.locale }), t.provide(kt, m), t.config.globalProperties.$t = c, t.config.globalProperties.$tc = c, t.config.globalProperties.$te = d.te, t.config.globalProperties.$tm = d.tm, t.config.globalProperties.$rt = d.rt, t.config.globalProperties.$d = l, t.config.globalProperties.$n = u, t.config.globalProperties.$i18n = f, t.directive("t", {
				beforeMount: p,
				updated: p
			});
		}
	};
	return m;
}), Pt = ((e) => {
	let { locale: n, setLocale: r, availableLocales: i } = Ot(), a = l(kt)?.__optionsMessages, o = e?.namespace, s = e?.datetimeFormats, c = e?.numberFormats, u = t({
		get: () => n.value,
		set: (e) => {
			r(e);
		}
	}), d = (e, ...t) => jt(n.value, o, e, t, a);
	return {
		locale: u,
		availableLocales: i,
		t: d,
		tc: d,
		te: (e) => Q(n.value, o, e) !== void 0,
		tm: (e) => Q(n.value, o, e) ?? {},
		rt: (e, ...t) => {
			let { values: r, count: i } = A(t);
			return j(e, r, i, n.value);
		},
		d: (e, t) => g(e, t, n.value, s),
		n: (e, t) => ie(e, t, n.value, c)
	};
}), Ft = o({
	__name: "Footer",
	setup(e, { expose: n }) {
		n();
		let { t: r } = Pt(), i = ne(), a = t(() => i.params.locale || "en"), o = {
			t: r,
			route: i,
			currentLocale: a,
			footerLinks: t(() => [
				{
					label: r("footer.github"),
					href: "https://github.com/intlayer-org/benchmark-i18n",
					isInternal: !1
				},
				{
					label: r("footer.methodology"),
					to: `/${a.value}/about`,
					isInternal: !0
				},
				{
					label: r("footer.contributing"),
					to: `/${a.value}/contact`,
					isInternal: !0
				}
			])
		};
		return Object.defineProperty(o, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), o;
	}
}), It = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, Lt = { class: "mt-20 border-t border-border bg-card" }, Rt = { class: "container py-8" }, zt = { class: "grid gap-8 md:grid-cols-3" }, Bt = { class: "mb-2 text-sm font-semibold text-foreground" }, Vt = { class: "text-sm text-muted-foreground" }, Ht = { class: "mb-2 text-sm font-semibold text-foreground" }, Ut = { class: "space-y-1" }, Wt = ["href"], Gt = { class: "mb-2 text-sm font-semibold text-foreground" }, Kt = { class: "text-sm text-muted-foreground" }, qt = { class: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground" };
function Jt(t, o, s, c, l, d) {
	let f = ee("router-link");
	return u(), r("footer", Lt, [i("div", Rt, [i("div", zt, [
		i("div", null, [i("h3", Bt, h(c.t("footer.title")), 1), i("p", Vt, h(c.t("footer.description")), 1)]),
		i("div", null, [i("h3", Ht, h(c.t("footer.resources")), 1), i("ul", Ut, [(u(!0), r(e, null, p(c.footerLinks, (e) => (u(), r("li", { key: e.label }, [e.isInternal ? (u(), n(f, {
			key: 0,
			to: e.to,
			class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
		}, {
			default: te(() => [a(h(e.label), 1)]),
			_: 2
		}, 1032, ["to"])) : (u(), r("a", {
			key: 1,
			href: e.href,
			target: "_blank",
			rel: "noreferrer",
			class: "text-sm text-muted-foreground hover:text-foreground transition-colors"
		}, h(e.label), 9, Wt))]))), 128))])]),
		i("div", null, [i("h3", Gt, h(c.t("footer.contact")), 1), i("p", Kt, h(c.t("shared.contactEmail")), 1)])
	]), i("div", qt, h(c.t("footer.builtWith")), 1)])]);
}
var Yt = It(Ft, [["render", Jt], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/src/components/Footer.vue"]]), Xt = Nt({
	legacy: !1,
	locale: "en",
	fallbackLocale: "en"
}), Zt = o({
	__name: "Wrapper",
	setup(e, { expose: t }) {
		t();
		let n = s()?.appContext.app;
		n && !n.config.globalProperties.$i18n && n.use(Xt);
		let r = { app: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
});
function Qt(e, t, n, r, i, a) {
	return m(e.$slots, "default");
}
var $t = It(Zt, [["render", Qt], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/intlayer-compat-vue-i18n-app/scripts/Wrapper.vue"]]), en = { render() {
	return c($t, {}, { default: () => c(Yt) });
} };
export { en as default };
