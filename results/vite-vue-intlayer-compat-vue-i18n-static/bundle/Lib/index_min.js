import { a as e, i as t, n, o as r, r as i, s as a, t as o } from "./installIntlayer-dRQhqPnG.js";
import { computed as s, defineComponent as c, getCurrentInstance as l, h as u, inject as d, renderSlot as f } from "vue";
var p = (e, t, n) => typeof e == "string" ? n?.[t]?.[e] ?? n?.[t.split("-")[0] ?? ""]?.[e] : e, ee = (e, t, n, r) => {
	let i = e instanceof Date ? e : new Date(e), a = p(t, n, r);
	try {
		return new Intl.DateTimeFormat(n, a).format(i);
	} catch {
		return String(e);
	}
}, m = (e, t, n, r) => {
	let i = p(t, n, r);
	try {
		return new Intl.NumberFormat(n, i).format(e);
	} catch {
		return String(e);
	}
}, h = "translation", g = "enumeration", _ = "plural", v = "condition", y = "insertion", te = "object", ne = "array", re = "markdown", b = "html", x = "gender", ie = "select", S = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), C = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, C);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => C(e, S(t, e, {
		type: ne,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: te,
			key: r
		};
		if (t.eager) {
			n[r] = C(e[r], S(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = C(e[r], S(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, ae = (e, t, n = ".") => {
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
}, oe = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, se = (e, t) => e[oe(e, t) ?? "fallback"], ce = 50, le = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Set(), de = (e) => {
	ue.has(e) || (ue.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, fe = {
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
}, pe = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (de(e), fe[e]);
};
function w(e, t, n) {
	let i = t ?? r?.defaultLocale, a = `${i}|${n ? JSON.stringify(n) : ""}`, o = e, s = le.get(o);
	s || (s = /* @__PURE__ */ new Map(), le.set(o, s));
	let c = s.get(a);
	if (!c) {
		let t = typeof e == "string" ? pe(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		s.size > ce && s.clear(), c = new t(i, n), s.set(a, c);
	}
	return c;
}
var me = (e, t, n) => e[w("PluralRules", n).select(t)] ?? e.other, he = (e, t) => {
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
	if (r.nodeType === "insertion") return A(r[y], t, n);
	if (r.nodeType === "html") return A(r[b], t, n);
	if (r.nodeType === "plural") {
		let e = r[_];
		return A(me(e, Number(k(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[g], i = T.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) T.includes(t) || (o[t] = n);
		let s = k(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = w("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? se(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return A(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[ie], i = k(t, typeof r.variable == "string" ? r.variable : "value");
		return A(he(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[x];
		return A(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, ge = (e) => e.split(/(?<!\\)\|/).map((e) => e.replace(/\\\|/g, "|").trim()), _e = (e, t) => {
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
			let e = ge(t);
			t = e[_e(n ?? 1, e.length)] ?? t;
		}
		return O(t, i, r);
	}
	let a = A(e, i, r);
	return typeof a == "string" ? a : String(a ?? "");
}, N = "\x1B[0m", ve = "\x1B[90m", ye = "\x1B[34m", be = "\x1B[31m", xe = "\x1B[32m", Se = "\x1B[35m", Ce = "\x1B[38;5;3m", P = "\x1B[36m", we = (e) => e, Te = (e, t) => {
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
}), I = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? N : n : N}` : e, Ee = (e, t = Ce, n = N) => [e].flat().map((e) => I(e, t, n)).join(", ");
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
}, H = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), je = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), U = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : je.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : U(e ? `${e}.${String(n)}` : String(n)) }), W = /* @__PURE__ */ new Set(), Me = (t, n, r) => {
	let i = e()[t];
	return i ? Qe(i, n, r) : (W.has(t) || (F({ log: a })(typeof window > "u" ? `Dictionary ${Ee(t)} was not found. Using fallback proxy.` : `Dictionary ${t} was not found. Using fallback proxy.`, { level: "warn" }), W.add(t)), U(t));
}, G = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, K = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !G(e) || !G(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? K(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, Ne = (e, t, n) => {
	let r = (t) => e[t], i = r(t);
	if (typeof i == "string") return i;
	let a = [
		t,
		t.split("-")[0],
		n,
		n?.split("-")[0]
	], o = [];
	for (let e = 0; e < a.length; e++) {
		let t = a[e];
		if (!t || a.indexOf(t) < e) continue;
		let n = r(t);
		if (n !== void 0) {
			if (typeof n == "string") {
				if (o.length === 0) return n;
				continue;
			}
			o.push(n);
		}
	}
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => K(e, t));
}, q = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Pe = (e) => {
	if (typeof e == "string") return e;
	if (q(e)) return e.nodeType === "html" ? e[b] : e[re];
}, Fe = (e, t) => {
	if (typeof e == "string") return t;
	if (q(e)) {
		let n = e.nodeType === "html" ? b : re;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Ie = (e, t, n, r, i) => {
	let a = Fe(e, H(Pe(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, J = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Le = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, Re = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? J : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Ne(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: h,
				key: e
			}]
		});
	}
}, ze = J, Be = (e) => J, Ve = J, He = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: y }], i = e[y], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => Ie(e, i, n, t.plugins, r);
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
		return Ge(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Ue = [
	g,
	v,
	_,
	x,
	ie
], We = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !Ue.includes(i)) return t;
	let a = i === "plural" || i === "enumeration";
	return (e) => {
		if (typeof e == "object" && e) return t({
			...n,
			...e
		});
		if (a) return t({
			...n,
			count: e
		});
		let i = t(e);
		return !r && Le(i) ? i(n) : i;
	};
}, Ge = (e, t) => typeof t == "function" && Ue.includes(e?.nodeType ?? "") ? (n) => We(e, t, n) : t, Ke = J, qe = J;
process.env.INTLAYER_OPTIMIZED_NESTING;
var Je = (e) => J, Ye = J, Xe = (e, t = !0) => [
	Re(e ?? r.defaultLocale, t ? r.defaultLocale : void 0),
	ze,
	Be(e ?? r.defaultLocale),
	Ve,
	He,
	Je(e ?? r.defaultLocale),
	Ye,
	Ke,
	qe
].filter((e) => e !== J), Ze = (e, t, n = []) => C(e, {
	...t,
	plugins: n
}), Y = /* @__PURE__ */ new WeakSet(), Qe = (e, t, n) => {
	let { locale: i, selector: a } = {
		locale: t,
		selector: void 0
	}, o = ke(i ?? r.defaultLocale, "", n), s = Ae(e, o);
	if (s.hit) return s.content;
	let c = n ?? Xe(i), l = e, u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries,
			eager: !Y.has(e)
		};
		Y.add(e);
		try {
			return Ze(e.content, t, c);
		} finally {
			t.eager && Y.delete(e);
		}
	};
	return l === null ? V(e, o, null) : Array.isArray(l) ? V(e, o, l.map(u)) : V(e, o, u(l));
}, { defaultLocale: $e, locales: et } = r ?? {}, tt = ({ isCookieEnabled: e, onLocaleChange: n } = {}) => {
	let r = d(o);
	return {
		locale: s(() => r?.locale?.value ?? $e),
		defaultLocale: $e,
		availableLocales: et,
		setLocale: (i) => {
			if (!et?.map(String).includes(i)) {
				console.error(`Locale ${i} is not available`);
				return;
			}
			r && r.setLocale(i), t(i, e ?? r?.isCookieEnabled ?? !0), n?.(i);
		}
	};
}, nt = Symbol("global-i18n"), rt = "translation", X = (e, t, n) => {
	try {
		let r = ae(Me(t, e), n);
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
		let t = X(e, rt, i);
		if (t !== void 0) return t;
	}
}, Q = (e, t, n, r, i) => {
	let { values: a, count: o, defaultMessage: s } = j(r), c = Z(e, t, n);
	if (c === void 0) {
		if (i?.[e]) {
			let r = t ? `${t}.${n}` : n, s = ae(i[e], r);
			if (s !== void 0) return M(s, a, o, e);
		}
		return s === void 0 ? n : M(s, a, o, e);
	}
	return M(c, a, o, e);
}, it = () => r?.locales?.map(String) ?? [], $ = (e) => {
	F({ log: a })(`${I(e, P)} has no effect with ${I("@intlayer/vue-i18n", Se)} — translations are managed by the compiled intlayer dictionaries.`);
}, at = ((e = {}) => {
	let t = e.messages;
	e.messages !== void 0 && F({ log: a })(`${I("createI18n", P)}: the ${I("`messages`", P)} option is used as a fallback. For optimal bundle size, remove the locale JSON imports and use ${I("useDictionary", P)} or compile your intlayer dictionaries instead:\n  ${I("Before:", ve)} createI18n({ messages: { en, fr, … } })\n  ${I("After: ", ve)} createI18n({})`);
	let o = i(e.locale), c = e.datetimeFormats, l = e.numberFormats, u = () => String(o.locale.value), d = s({
		get: () => u(),
		set: (e) => {
			o.setLocale(e);
		}
	}), f = (e, ...n) => Q(u(), void 0, e, n, t), p = (e, t) => ee(e, t, u(), c), h = (e, t) => m(e, t, u(), l), g = {
		locale: d,
		availableLocales: it(),
		fallbackLocale: e.fallbackLocale ?? r?.defaultLocale,
		t: f,
		tc: f,
		te: (e) => Z(u(), void 0, e) !== void 0,
		tm: (e) => Z(u(), void 0, e) ?? {},
		rt: (e, ...t) => {
			let { values: n, count: r } = j(t);
			return M(e, n, r, u());
		},
		d: p,
		n: h,
		setLocaleMessage: (e, t) => {
			$("setLocaleMessage");
		},
		mergeLocaleMessage: (e, t) => {
			$("mergeLocaleMessage");
		},
		getLocaleMessage: (e) => ($("getLocaleMessage"), {})
	}, _ = {
		get locale() {
			return u();
		},
		set locale(e) {
			o.setLocale(e);
		},
		get availableLocales() {
			return it();
		},
		t: f,
		tc: f,
		te: g.te,
		tm: g.tm,
		rt: g.rt,
		d: p,
		n: h
	}, v = (e, t) => {
		let n = t.value;
		if (typeof n == "string") e.textContent = f(n);
		else if (n && typeof n == "object") {
			let t = [];
			n.args && t.push(n.args), typeof n.choice == "number" && t.push(n.choice), e.textContent = f(n.path, ...t);
		}
	}, y = {
		global: g,
		mode: e.legacy === !0 ? "legacy" : "composition",
		__optionsMessages: t,
		install(t) {
			n(t, { locale: e.locale }), t.provide(nt, y), t.config.globalProperties.$t = f, t.config.globalProperties.$tc = f, t.config.globalProperties.$te = g.te, t.config.globalProperties.$tm = g.tm, t.config.globalProperties.$rt = g.rt, t.config.globalProperties.$d = p, t.config.globalProperties.$n = h, t.config.globalProperties.$i18n = _, t.directive("t", {
				beforeMount: v,
				updated: v
			});
		}
	};
	return y;
}), ot = ((e) => {
	let { locale: t, setLocale: n, availableLocales: r } = tt(), i = d(nt)?.__optionsMessages, a = e?.namespace, o = e?.datetimeFormats, c = e?.numberFormats, l = s({
		get: () => t.value,
		set: (e) => {
			n(e);
		}
	}), u = (e, ...n) => Q(t.value, a, e, n, i);
	return {
		locale: l,
		availableLocales: r,
		t: u,
		tc: u,
		te: (e) => Z(t.value, a, e) !== void 0,
		tm: (e) => Z(t.value, a, e) ?? {},
		rt: (e, ...n) => {
			let { values: r, count: i } = j(n);
			return M(e, r, i, t.value);
		},
		d: (e, n) => ee(e, n, t.value, o),
		n: (e, n) => m(e, n, t.value, c)
	};
}), st = c({
	__name: "EmptyComponent",
	setup(e) {
		let { t } = ot();
		return t("header.home"), (e, t) => null;
	}
}), ct = c({
	__name: "LibWrapper",
	setup(e) {
		let t = at({
			legacy: !1,
			locale: "en"
		}), n = l()?.appContext.app;
		return n && !n.config.globalProperties.$i18n && n.use(t), (e, t) => f(e.$slots, "default");
	}
}), lt = { render() {
	return u(ct, {}, { default: () => u(st) });
} };
export { lt as default };
import { a as e, i as t, o as n, r } from "./installIntlayer-dRQhqPnG.js";
import { watch as i } from "vue";
var a = (e) => typeof e == "object" && !!e && !Array.isArray(e), o = (e) => a(e) && e.nodeType === "translation" && a(e.translation), s = (e) => {
	if (typeof e == "string") return e;
	try {
		return JSON.stringify(e) ?? String(e);
	} catch {
		return String(e);
	}
}, c = (e, t, n) => {
	let r = t.length === 0 ? "(root)" : t.join(".");
	if (o(e)) {
		n[r] = e.translation;
		return;
	}
	if (a(e) && typeof e.nodeType == "string") {
		n[r] = s(e[e.nodeType]);
		return;
	}
	if (Array.isArray(e)) {
		e.forEach((e, r) => {
			c(e, [...t, String(r)], n);
		});
		return;
	}
	if (a(e)) {
		for (let [r, i] of Object.entries(e)) c(i, [...t, r], n);
		return;
	}
	t.length > 0 && (n[t.join(".")] = s(e));
}, l = (e) => {
	let t = {};
	return c(e.content, [], t), t;
}, u = "intlayer-locales", d = "locale:", f = ":current", { locales: p } = n ?? {}, m = (e) => e.startsWith(d), h = (e) => e.slice(7).replace(f, ""), g = (e) => {
	let t = p ?? [];
	return {
		id: u,
		label: "Locales",
		children: (e && t.includes(e) ? [e, ...t.filter((t) => t !== e)] : t).map((t) => ({
			id: `${d}${t}${t === e ? f : ""}`,
			label: t,
			tags: t === e ? [{
				label: "current",
				textColor: 16777215,
				backgroundColor: 4372611
			}] : []
		}))
	};
};
function _() {
	return v().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function v() {
	return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
var y = typeof Proxy == "function", b = "devtools-plugin:setup", x = "plugin:settings:set", S, C;
function w() {
	return S === void 0 && (typeof window < "u" && window.performance ? (S = !0, C = window.performance) : typeof globalThis < "u" && globalThis.perf_hooks?.performance ? (S = !0, C = globalThis.perf_hooks.performance) : S = !1), S;
}
function T() {
	return w() ? C.now() : Date.now();
}
var E = class {
	constructor(e, t) {
		this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = e, this.hook = t;
		let n = {};
		if (e.settings) for (let t in e.settings) n[t] = e.settings[t].defaultValue;
		let r = `__vue-devtools-plugin-settings__${e.id}`, i = Object.assign({}, n);
		try {
			let e = localStorage.getItem(r), t = JSON.parse(e);
			Object.assign(i, t);
		} catch {}
		this.fallbacks = {
			getSettings() {
				return i;
			},
			setSettings(e) {
				try {
					localStorage.setItem(r, JSON.stringify(e));
				} catch {}
				i = e;
			},
			now() {
				return T();
			}
		}, t && t.on(x, (e, t) => {
			e === this.plugin.id && this.fallbacks.setSettings(t);
		}), this.proxiedOn = new Proxy({}, { get: (e, t) => this.target ? this.target.on[t] : (...e) => {
			this.onQueue.push({
				method: t,
				args: e
			});
		} }), this.proxiedTarget = new Proxy({}, { get: (e, t) => this.target ? this.target[t] : t === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(t) ? (...e) => (this.targetQueue.push({
			method: t,
			args: e,
			resolve: () => {}
		}), this.fallbacks[t](...e)) : (...e) => new Promise((n) => {
			this.targetQueue.push({
				method: t,
				args: e,
				resolve: n
			});
		}) });
	}
	async setRealTarget(e) {
		this.target = e;
		for (let e of this.onQueue) this.target.on[e.method](...e.args);
		for (let e of this.targetQueue) e.resolve(await this.target[e.method](...e.args));
	}
};
function D(e, t) {
	let n = e, r = v(), i = _(), a = y && n.enableEarlyProxy;
	if (i && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a)) i.emit(b, e, t);
	else {
		let e = a ? new E(n, i) : null;
		(r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
			pluginDescriptor: n,
			setupFn: t,
			proxy: e
		}), e && t(e.proxiedTarget);
	}
}
var O = "intlayer", k = "intlayer-dictionaries-inspector", { defaultLocale: A, locales: j } = n ?? {}, M = D, N = (n) => {
	M({
		id: O,
		label: "Intlayer",
		packageName: "vue-intlayer",
		homepage: "https://intlayer.org",
		componentStateTypes: [O],
		app: n
	}, (n) => {
		n.addInspector({
			id: k,
			label: "Intlayer",
			icon: "language",
			treeFilterPlaceholder: "Search dictionaries",
			nodeActions: [{
				icon: "check",
				tooltip: "Set as current locale",
				action: (e) => {
					if (!m(e)) return;
					let i = h(e);
					if (!j?.map(String).includes(i)) {
						console.error(`Locale ${i} is not available`);
						return;
					}
					let a = r();
					a.setLocale(i), t(i, a.isCookieEnabled ?? !0), n.sendInspectorTree(k), n.sendInspectorState(k);
				}
			}]
		}), i(() => r().locale.value, () => {
			n.sendInspectorTree(k), n.sendInspectorState(k);
		}), n.on.getInspectorTree((t) => {
			if (t.inspectorId !== "intlayer-dictionaries-inspector") return;
			let n = e(), i = Object.keys(n), a = r().locale.value ?? A;
			t.rootNodes = [...i.length === 0 ? [{
				id: "intlayer-no-dictionaries",
				label: "No dictionaries loaded. Add an Intlayer build plugin (e.g. vite-intlayer) to generate them."
			}] : i.map((e) => ({
				id: e,
				label: e
			})), g(a)];
		}), n.on.getInspectorState((t) => {
			if (t.inspectorId !== "intlayer-dictionaries-inspector") return;
			let n = r().locale.value ?? A;
			if (t.nodeId === "intlayer-locales") {
				t.state = { Locales: (j ?? []).map((e) => ({
					key: e,
					value: e === n ? "current" : "",
					editable: !1
				})) };
				return;
			}
			if (m(t.nodeId)) {
				let e = h(t.nodeId);
				t.state = { Locale: [{
					key: "locale",
					value: e,
					editable: !1
				}, {
					key: "current",
					value: e === n,
					editable: !1
				}] };
				return;
			}
			let i = e()[t.nodeId];
			if (!i) {
				t.state = {};
				return;
			}
			let a = l(i);
			t.state = {
				Translations: Object.entries(a).map(([e, t]) => ({
					key: e,
					value: t,
					editable: !1
				})),
				Metadata: [
					{
						key: "key",
						value: i.key,
						editable: !1
					},
					{
						key: "title",
						value: i.title ?? "",
						editable: !1
					},
					{
						key: "description",
						value: i.description ?? "",
						editable: !1
					}
				]
			};
		});
	});
};
export { N as enableIntlayerDevtools };
import { readonly as e, ref as t } from "vue";
import n from "../.intlayer/dictionary/faq.json";
import r from "../.intlayer/dictionary/header.json";
import i from "../.intlayer/dictionary/settings.json";
import a from "../.intlayer/dictionary/footer.json";
import o from "../.intlayer/dictionary/mockBanner.json";
import s from "../.intlayer/dictionary/shared.json";
import c from "../.intlayer/dictionary/careers.json";
import l from "../.intlayer/dictionary/notFound.json";
import u from "../.intlayer/dictionary/pricing.json";
import d from "../.intlayer/dictionary/products.json";
import f from "../.intlayer/dictionary/contact.json";
import p from "../.intlayer/dictionary/themeToggle.json";
import m from "../.intlayer/dictionary/about.json";
import h from "../.intlayer/dictionary/home.json";
import g from "../.intlayer/dictionary/team.json";
import _ from "../.intlayer/dictionary/blog.json";
var v = {
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
}, y = {
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
}, b = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, x = {
	faq: n,
	header: r,
	settings: i,
	footer: a,
	mockBanner: o,
	shared: s,
	careers: c,
	notFound: l,
	pricing: u,
	products: d,
	contact: f,
	themeToggle: p,
	about: m,
	home: h,
	team: g,
	blog: _
}, S = () => x, C = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, w = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = C(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, T = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var E = {
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
}, D = (e = E) => {
	let { locales: t } = v;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!T) for (let t = 0; t < (y.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(y.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, O = !1, k, A = () => typeof window > "u" ? D(E) : (O ||= (k = D(E), !0), k), j = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (O = !1, !T && y.storage.cookies)) for (let n = 0; n < y.storage.cookies.length; n++) {
		let { name: r, attributes: i } = y.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: C(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, w(r, e, i));
			} catch {}
		}
	}
}, M = A, N = (e, t) => j(e, {
	...E,
	isCookieEnabled: t
}), P = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, F = Symbol("intlayer"), I = null, L = (n, r = !0, i) => {
	if (I) return I;
	P();
	let { defaultLocale: a } = v ?? {}, o = t(n ?? M() ?? a), s = (e) => {
		o.value = e;
	}, c = t(i);
	return I = {
		locale: e(o),
		setLocale: s,
		variant: e(c),
		setVariant: (e) => {
			c.value = e;
		},
		isCookieEnabled: r
	}, I;
}, R = (e, t) => {
	let { locale: n, isCookieEnabled: r, variant: i } = t ?? {}, a = L(n, r, i);
	return e.provide(F, a), process.env.INTLAYER_DEVTOOLS_ENABLED !== "false" && import("./devtools-D3HaTHJ-.js").then(({ enableIntlayerDevtools: t }) => {
		t(e);
	}).catch(() => {}), e;
};
export { S as a, N as i, R as n, v as o, L as r, b as s, F as t };
