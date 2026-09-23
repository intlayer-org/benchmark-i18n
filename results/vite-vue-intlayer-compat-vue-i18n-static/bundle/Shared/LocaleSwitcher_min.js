import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, defineComponent as i, getCurrentInstance as a, h as o, openBlock as s, readonly as c, ref as l, renderList as u, renderSlot as d, toDisplayString as ee, unref as f } from "vue";
import { useRoute as p, useRouter as te } from "vue-router";
var ne = [
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
], re = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, ie = { class: "flex items-center gap-2" }, ae = ["value"], oe = ["value"], se = i({
	__name: "LocaleSwitcher",
	setup(i) {
		let a = p(), o = te(), c = t(() => a.params.locale || "en"), l = (e) => {
			let t = a.path.replace(/^\/[^/]+/, `/${e}`);
			o.push({
				path: t,
				query: a.query,
				hash: a.hash
			});
		};
		return (t, i) => (s(), n("div", ie, [r("select", {
			value: c.value,
			onChange: i[0] ||= (e) => l(e.target.value),
			class: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
		}, [(s(!0), n(e, null, u(f(ne), (e) => (s(), n("option", {
			key: e,
			value: e
		}, ee(f(re)(e)), 9, oe))), 128))], 40, ae)]));
	}
}), m = (e, t, n) => typeof e == "string" ? n?.[t]?.[e] ?? n?.[t.split("-")[0] ?? ""]?.[e] : e, ce = (e, t, n, r) => {
	let i = e instanceof Date ? e : new Date(e), a = m(t, n, r);
	try {
		return new Intl.DateTimeFormat(n, a).format(i);
	} catch {
		return String(e);
	}
}, le = (e, t, n, r) => {
	let i = m(t, n, r);
	try {
		return new Intl.NumberFormat(n, i).format(e);
	} catch {
		return String(e);
	}
}, ue = "translation", de = "enumeration", fe = "plural", h = "insertion", pe = "object", me = "array", g = "markdown", _ = "html", he = "gender", ge = "select", v = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => v(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => v(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: me,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: pe,
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
}, _e = (e, t, n = ".") => {
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
}, ve = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, ye = (e, t) => e[ve(e, t) ?? "fallback"], y = {
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
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, be = 50, x = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Set(), Se = (e) => {
	xe.has(e) || (xe.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Ce = {
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
}, we = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Se(e), Ce[e]);
};
function S(e, t, n) {
	let r = t ?? y?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = x.get(a);
	o || (o = /* @__PURE__ */ new Map(), x.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? we(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > be && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Te = (e, t, n) => e[S("PluralRules", n).select(t)] ?? e.other, Ee = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, De = [
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
	if (r.nodeType === "insertion") return D(r[h], t, n);
	if (r.nodeType === "html") return D(r[_], t, n);
	if (r.nodeType === "plural") {
		let e = r[fe];
		return D(Te(e, Number(E(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[de], i = De.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) De.includes(t) || (o[t] = n);
		let s = E(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = S("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? ye(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return D(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[ge], i = E(t, typeof r.variable == "string" ? r.variable : "value");
		return D(Ee(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[he];
		return D(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Oe = (e) => e.split(/(?<!\\)\|/).map((e) => e.replace(/\\\|/g, "|").trim()), ke = (e, t) => {
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
			let e = Oe(t);
			t = e[ke(n ?? 1, e.length)] ?? t;
		}
		return T(t, i, r);
	}
	let a = D(e, i, r);
	return typeof a == "string" ? a : String(a ?? "");
}, A = "\x1B[0m", Ae = "\x1B[90m", je = "\x1B[34m", Me = "\x1B[31m", Ne = "\x1B[32m", Pe = "\x1B[35m", Fe = "\x1B[38;5;3m", j = "\x1B[36m", Ie = (e) => e, Le = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Ie(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, M = (e, t) => (n, r) => Le(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), N = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? A : n : A}` : e, Re = (e, t = Fe, n = A) => [e].flat().map((e) => N(e, t, n)).join(", ");
N("✗", Me), N("✓", Ne), N("⏲", je);
var ze = /* @__PURE__ */ new WeakMap(), P = 0, Be = (e) => {
	if (!e) return "base";
	let t = ze.get(e);
	if (t) return t;
	P += 1;
	let n = `p${P}`;
	return ze.set(e, n), n;
}, Ve = 256, F = /* @__PURE__ */ new WeakMap(), I = (e) => typeof e == "object" && !!e, He = (e, t, n) => `${e}_${t}_${Be(n)}`, Ue = (e, t) => {
	if (!I(e)) return { hit: !1 };
	let n = F.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, L = (e, t, n) => {
	if (!I(e)) return n;
	let r = F.get(e);
	return r || (r = /* @__PURE__ */ new Map(), F.set(e, r)), r.size >= Ve && r.clear(), r.set(t, n), n;
}, R = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), z = "default", We = /[^A-Za-z0-9._&=-]/g, B = /[^A-Za-z0-9._-]/g, Ge = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, V = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Ge);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, H = (e) => e === void 0 ? z : typeof e == "string" ? V(e, We) : Object.keys(e).sort().map((t) => `${V(t, B)}=${V(String(e[t]), B)}`).join("&"), U = (e) => Array.isArray(e) ? e.length === 0 ? [z] : e.map(H) : [H(e)], Ke = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? z : e[0] ?? "default";
}, qe = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Je = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Ye = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Xe = (e, t) => {
	if (!Je(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? z : Ke(U(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => qe(e, n, t, s)).map((t) => Ye(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Ze = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Qe = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? U(n).join(",") : String(n)}`;
}).join("|") : "", $e = () => ({}), et = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), W = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : et.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : W(e ? `${e}.${String(n)}` : String(n)) }), G = /* @__PURE__ */ new Set(), tt = (e, t, n) => {
	let r = $e()[e];
	return r ? gt(r, t, n) : (G.has(e) || (M({ log: b })(typeof window > "u" ? `Dictionary ${Re(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), G.add(e)), W(e));
}, K = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, q = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (K(e) && K(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : q(e[r], t[r]));
		return n;
	}
	return e;
}, nt = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => q(e, t));
}, J = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, rt = (e) => {
	if (typeof e == "string") return e;
	if (J(e)) return e.nodeType === "html" ? e[_] : e[g];
}, it = (e, t) => {
	if (typeof e == "string") return t;
	if (J(e)) {
		let n = e.nodeType === "html" ? _ : g;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, at = (e, t, n, r, i) => {
	let a = it(e, R(rt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, Y = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, ot = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? Y : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ue,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return nt(o, e, t);
	}
}, st = Y, ct = Y, lt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? Y : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: h }], i = e[h], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || J(e),
			transform: (e, n, r) => {
				if (J(e)) return (i) => at(e, i, n, t.plugins, r);
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
}, ut = Y, dt = Y, ft = (e) => Y, pt = Y, mt = (e, t = !0) => [
	ot(e ?? y.defaultLocale, t ? y.defaultLocale : void 0),
	st,
	ct,
	lt,
	ft(e ?? y.defaultLocale),
	pt,
	ut,
	dt
], ht = (e, t, n = []) => v(e, {
	...t,
	plugins: n
}), gt = (e, t, n) => {
	let { locale: r, selector: i } = Ze(t), a = He(r ?? y.defaultLocale, Qe(i), n), o = Ue(e, a);
	if (o.hit) return o.content;
	let s = n ?? mt(r), c = Xe(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return ht(e.content, t, s);
	};
	return c === null ? L(e, a, null) : Array.isArray(c) ? L(e, a, c.map(l)) : L(e, a, l(c));
}, _t = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, vt = Symbol("intlayer"), X = null, yt = (e, t = !0, n) => {
	if (X) return X;
	_t();
	let { defaultLocale: r } = y ?? {}, i = l(e ?? r), a = (e) => {
		i.value = e;
	}, o = l(n);
	return X = {
		locale: c(i),
		setLocale: a,
		variant: c(o),
		setVariant: (e) => {
			o.value = e;
		},
		isCookieEnabled: t
	}, X;
}, bt = (e, t) => {
	let { locale: n, isCookieEnabled: r, variant: i } = t ?? {}, a = yt(n, r, i);
	return e.provide(vt, a), e;
}, xt = Symbol("global-i18n"), St = "translation", Z = (e, t, n) => {
	try {
		let r = _e(tt(t, e), n);
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
			let r = t ? `${t}.${n}` : n, s = _e(i[e], r);
			if (s !== void 0) return k(s, a, o, e);
		}
		return s === void 0 ? n : k(s, a, o, e);
	}
	return k(c, a, o, e);
}, wt = () => y?.locales?.map(String) ?? [], $ = (e) => {
	M({ log: b })(`${N(e, j)} has no effect with ${N("@intlayer/vue-i18n", Pe)} — translations are managed by the compiled intlayer dictionaries.`);
}, Tt = ((e = {}) => {
	let n = e.messages;
	e.messages !== void 0 && M({ log: b })(`${N("createI18n", j)}: the ${N("`messages`", j)} option is used as a fallback. For optimal bundle size, remove the locale JSON imports and use ${N("useDictionary", j)} or compile your intlayer dictionaries instead:\n  ${N("Before:", Ae)} createI18n({ messages: { en, fr, … } })\n  ${N("After: ", Ae)} createI18n({})`);
	let r = yt(e.locale), i = e.datetimeFormats, a = e.numberFormats, o = () => String(r.locale.value), s = t({
		get: () => o(),
		set: (e) => {
			r.setLocale(e);
		}
	}), c = (e, ...t) => Ct(o(), void 0, e, t, n), l = (e, t) => ce(e, t, o(), i), u = (e, t) => le(e, t, o(), a), d = {
		locale: s,
		availableLocales: wt(),
		fallbackLocale: e.fallbackLocale ?? y?.defaultLocale,
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
			return wt();
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
			bt(t, { locale: e.locale }), t.provide(xt, p), t.config.globalProperties.$t = c, t.config.globalProperties.$tc = c, t.config.globalProperties.$te = d.te, t.config.globalProperties.$tm = d.tm, t.config.globalProperties.$rt = d.rt, t.config.globalProperties.$d = l, t.config.globalProperties.$n = u, t.config.globalProperties.$i18n = ee, t.directive("t", {
				beforeMount: f,
				updated: f
			});
		}
	};
	return p;
})({
	legacy: !1,
	locale: "en",
	fallbackLocale: "en"
}), Et = i({
	__name: "Wrapper",
	setup(e) {
		let t = a()?.appContext.app;
		return t && !t.config.globalProperties.$i18n && t.use(Tt), (e, t) => d(e.$slots, "default");
	}
}), Dt = { render() {
	return o(Et, {}, { default: () => o(se) });
} };
export { Dt as default };
