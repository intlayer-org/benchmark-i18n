import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useCallback as a, useContext as o, useEffect as s, useMemo as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
var ee = {
	key: "pricing-header",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				simpleTransparentPricing: "Simple, Transparent Pricing",
				chooseThePlanThatFits: "Choose the plan that fits your team. No hidden fees."
			},
			fr: {
				simpleTransparentPricing: "Une tarification simple et transparente",
				chooseThePlanThatFits: "Choisissez l'offre qui convient à votre équipe. Pas de frais cachés."
			},
			es: {
				simpleTransparentPricing: "Precios simples y transparentes",
				chooseThePlanThatFits: "Elige el plan que se adapte a tu equipo. Sin cargos ocultos."
			},
			de: {
				simpleTransparentPricing: "Einfache, transparente Preisgestaltung",
				chooseThePlanThatFits: "Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren."
			},
			it: {
				simpleTransparentPricing: "Prezzi Semplici e Trasparenti",
				chooseThePlanThatFits: "Scegli il piano adatto al tuo team. Nessun costo nascosto."
			},
			pt: {
				simpleTransparentPricing: "Preços Simples e Trasparentes",
				chooseThePlanThatFits: "Escolha o plano que se adapta à sua equipe. Sem taxas ocultas."
			},
			zh: {
				simpleTransparentPricing: "简单、透明的价格",
				chooseThePlanThatFits: "选择适合您团队的计划。无隐藏费用。"
			},
			ja: {
				simpleTransparentPricing: "シンプルで透明性の高い価格設定",
				chooseThePlanThatFits: "チームに合ったプランをお選びください。隠れた費用はありません。"
			},
			ko: {
				simpleTransparentPricing: "심플하고 투명한 요금제",
				chooseThePlanThatFits: "팀에 맞는 플랜을 선택하세요. 숨겨진 수수료는 없습니다."
			},
			ru: {
				simpleTransparentPricing: "Простое и прозрачное ценообразование",
				chooseThePlanThatFits: "Выберите план, который подходит вашей команде. Никаких скрытых комиссий."
			}
		}
	}
}, p = /* @__PURE__ */ new WeakMap(), m = 0, te = (e) => {
	if (!e) return "base";
	let t = p.get(e);
	if (t) return t;
	m += 1;
	let n = `p${m}`;
	return p.set(e, n), n;
}, ne = 256, h = /* @__PURE__ */ new WeakMap(), g = (e) => typeof e == "object" && !!e, _ = (e, t, n) => `${e}_${t}_${te(n)}`, re = (e, t) => {
	if (!g(e)) return { hit: !1 };
	let n = h.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, v = (e, t, n) => {
	if (!g(e)) return n;
	let r = h.get(e);
	return r || (r = /* @__PURE__ */ new Map(), h.set(e, r)), r.size >= ne && r.clear(), r.set(t, n), n;
}, ie = "translation", y = "enumeration", b = "plural", ae = "condition", x = "insertion", oe = "object", se = "array", ce = "markdown", S = "html", le = "gender", C = "select", w = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), T = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, T);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => T(e, w(t, e, {
		type: se,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: oe,
			key: r
		};
		if (t.eager) {
			n[r] = T(e[r], w(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = T(e[r], w(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, ue = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, de = (e, t) => e[ue(e, t) ?? "fallback"], fe = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), E = {
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
}, D = {
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
}, pe = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, O = "\x1B[0m", me = "\x1B[34m", he = "\x1B[31m", ge = "\x1B[32m", _e = "\x1B[38;5;3m", ve = "\x1B[36m", ye = (e) => e, be = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = ye(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, xe = (e, t) => (n, r) => be(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), k = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? O : n : O}` : e, Se = (e, t = _e, n = O) => [e].flat().map((e) => k(e, t, n)).join(", ");
k("✗", he), k("✓", ge), k("⏲", me);
var Ce = () => ({}), we = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Te = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : we.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Te(e ? `${e}.${String(n)}` : String(n)) }), Ee = /* @__PURE__ */ new Set(), A = (e, t, n) => {
	let r = Ce()[e];
	return r ? Ke(r, t, n) : (Ee.has(e) || (xe({ log: pe })(typeof window > "u" ? `Dictionary ${Se(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), Ee.add(e)), Te(e));
}, De = 50, j = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Set(), Oe = (e) => {
	M.has(e) || (M.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, ke = {
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
}, Ae = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Oe(e), ke[e]);
};
function N(e, t, n) {
	let r = t ?? E?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = j.get(a);
	o || (o = /* @__PURE__ */ new Map(), j.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Ae(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > De && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var je = (e, t, n) => e[N("PluralRules", n).select(t)] ?? e.other, Me = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, P = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, F = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !P(e) || !P(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? F(a, i) : a;
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => F(e, t));
}, I = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Pe = (e) => {
	if (typeof e == "string") return e;
	if (I(e)) return e.nodeType === "html" ? e[S] : e[ce];
}, Fe = (e, t) => {
	if (typeof e == "string") return t;
	if (I(e)) {
		let n = e.nodeType === "html" ? S : ce;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, L = (e, t, n, r, i) => {
	let a = Fe(e, fe(Pe(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, R = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Ie = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, z = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? R : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Ne(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: ie,
				key: e
			}]
		});
	}
}, B = R, V = (e) => R, H = R, Le = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? R : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: x }], i = e[x], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || I(e),
			transform: (e, n, r) => {
				if (I(e)) return (i) => L(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = fe(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return ze(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, U = [
	y,
	ae,
	b,
	le,
	C
], Re = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !U.includes(i)) return t;
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
		return !r && Ie(i) ? i(n) : i;
	};
}, ze = (e, t) => typeof t == "function" && U.includes(e?.nodeType ?? "") ? (n) => Re(e, t, n) : t, Be = R, Ve = R, He = (e) => R, Ue = R, We = (e, t = !0) => [
	z(e ?? E.defaultLocale, t ? E.defaultLocale : void 0),
	B,
	V(e ?? E.defaultLocale),
	H,
	Le,
	He(e ?? E.defaultLocale),
	Ue,
	Be,
	Ve
].filter((e) => e !== R), Ge = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), W = /* @__PURE__ */ new WeakSet(), Ke = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = _(r ?? E.defaultLocale, "", n), o = re(e, a);
	if (o.hit) return o.content;
	let s = n ?? We(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !W.has(e)
		};
		W.add(e);
		try {
			return Ge(e.content, t, s);
		} finally {
			t.eager && W.delete(e);
		}
	};
	return c === null ? v(e, a, null) : Array.isArray(c) ? v(e, a, c.map(l)) : v(e, a, l(c));
}, qe = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Je = /\{\{\s*(.*?)\s*\}\}/g, Ye = (e, t = {}) => {
	if (!Object.values(t).some(qe)) return {
		isSimple: !0,
		parts: e.replace(Je, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Je), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, G = (e, t, n = ".") => {
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
}, Xe = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], K = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, Ze = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? N("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? N("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : N("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return N("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Qe = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = K(t, r);
	return o === void 0 ? e : i ? Ze(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = K(t, r);
	return o === void 0 ? e : Ze(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = K(t, n);
	return r === void 0 ? e : String(r);
}), q = (e, t) => e[t] ?? e.count ?? e.n, J = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Qe(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return J(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(J(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return J(r[x], t, n);
	if (r.nodeType === "html") return J(r[S], t, n);
	if (r.nodeType === "plural") {
		let e = r[b];
		return J(je(e, Number(q(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[y], i = Xe.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Xe.includes(t) || (o[t] = n);
		let s = q(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = N("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? de(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return J(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[C], i = q(t, typeof r.variable == "string" ? r.variable : "value");
		return J(Me(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[le];
		return J(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, $e = (e, t = {}, n = "en") => {
	let r = J(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Y = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : o && t.push({
			tag: o,
			children: Y(s ?? "")
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, et = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, tt = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = tt(e.children, n), a = n[e.tag];
	return typeof a == "function" ? d(t, { children: a(i) }, r) : d(t, { children: i }, r);
}), nt = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = nt(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), rt = (e, t) => {
	let [n, ...r] = (t ?? "").split("."), i = r.join(".");
	return ot(e, (t) => it(e, n ?? "", i, t), (e) => t ? `${t}.${e}` : e);
}, it = (e, t, n, r) => {
	let i = t, a = n ? `${n}.${r}` : r, o = Ce();
	if (!i) {
		let [t, ...n] = r.split(".");
		if (i = t ?? r, a = n.join("."), !o[i]) for (let t of Object.keys(o)) try {
			let n = G(A(t, e), r);
			if (n !== void 0) return n;
		} catch {}
	}
	try {
		return G(A(i, e), a);
	} catch {
		return;
	}
}, at = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return ot(e, (e) => G(t, r(e)), r);
}, ot = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return $e(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = et(t), o = r(e, i);
			return o === void 0 ? n(e) : d(u, { children: tt(Y(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = et(t), o = r(e, i);
			return o === void 0 ? n(e) : nt(Y(o), a);
		}
	});
}, X = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, st = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = X(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, ct = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var Z = {
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
}, lt = (e = Z) => {
	let { locales: t } = E;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!ct) for (let t = 0; t < (D.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(D.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ut = !1, dt, ft = () => typeof window > "u" ? lt(Z) : (ut ||= (dt = lt(Z), !0), dt), pt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (ut = !1, !ct && D.storage.cookies)) for (let n = 0; n < D.storage.cookies.length; n++) {
		let { name: r, attributes: i } = D.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: X(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, st(r, e, i));
			} catch {}
		}
	}
}, mt = /* @__PURE__ */ new Map(), ht = (e, t) => Object.create(new Proxy(e, {
	get: (e, t, n) => {
		if (typeof t != "string" || t === "constructor" || t in e) return Reflect.get(e, t, n);
		let { value: r } = n;
		if (r == null) return;
		let i = Object(r)[t];
		return typeof i == "function" ? i.bind(r) : i;
	},
	has: (e, n) => n in e || typeof n == "string" && n !== "constructor" && t !== null && n in t
}), {
	toString: { value() {
		return String(this.value ?? "");
	} },
	valueOf: { value() {
		return this.value;
	} },
	[Symbol.toPrimitive]: { value() {
		return this.value ?? "";
	} }
}), gt = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = mt.get(t);
	i || (i = /* @__PURE__ */ new Map(), mt.set(t, i));
	let a = i.get(r);
	return a || (a = ht(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, _t = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...i(e) ? e : d(u, { children: e }),
	value: t,
	...n
}, gt(t)), vt = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => _t({
		value: t.children,
		children: t.children
	})
}, yt = R, bt = (e, n) => {
	let i = Ye(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, xt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? R : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: x }], i = e[x], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || I(e),
			transform: (e, n, r) => {
				if (I(e)) return (i) => L(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = bt(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return ze(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, St = R, Ct = R, Q = /* @__PURE__ */ new Map(), wt = (e, t = !0) => {
	let n = `${e ?? E.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		vt,
		z(e ?? E.defaultLocale, t ? E.defaultLocale : void 0),
		B,
		V(e ?? E.defaultLocale),
		H,
		He(e ?? E.defaultLocale),
		Ue,
		Be,
		Ve,
		yt,
		xt,
		St,
		Ct
	].filter((e) => e !== R);
	return Q.set(n, r), r;
}, Tt = (e, t) => Ke(e, t, wt(typeof t == "object" && t ? t.locale : t)), Et = ft, Dt = (e, t) => pt(e, {
	...Z,
	isCookieEnabled: t
}), Ot = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, kt = (e, t = E?.locales, n = E?.defaultLocale) => {
	if (t?.includes(e)) return e;
	let r = [e].flat(), i = (e) => e.trim().toLowerCase();
	try {
		for (let e of r) {
			let n = i(e), r = t.find((e) => i(e) === n);
			if (r) return r;
			let [a] = n.split("-"), o = t.find((e) => i(e).split("-")[0] === a);
			if (o) return o;
		}
	} catch {}
	return n;
}, $ = n({
	get locale() {
		return Et() ?? E?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), At = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: o, isCookieEnabled: u }) => {
	let { locales: f, defaultLocale: ee } = E ?? {}, [p, m] = l(() => e ?? Et() ?? t ?? ee), [te, ne] = l(e);
	e !== te && (ne(e), e && e !== p && m(e)), s(() => {
		Ot();
	}, []);
	let h = a((e) => {
		if (p.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			m(e), Dt(e, u);
		}
	}, [
		p,
		f,
		u
	]), g = i ?? h, _ = kt(p), re = c(() => ({
		locale: _,
		setLocale: g,
		variant: n,
		disableEditor: o
	}), [
		_,
		g,
		n,
		o
	]);
	return d($.Provider, {
		value: re,
		children: r
	});
}, jt = ({ children: e, ...t }) => f(At, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), Mt = (e, t) => {
	let { locale: n, variant: r } = o($) ?? {}, i = t ?? n, a = i;
	return c(() => Tt(e, i), [e.key, a]);
}, Nt = ((e, t) => {
	let { locale: n } = o($) ?? {};
	return at(n, Mt(e), t);
}), Pt = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && xe({ log: pe })(`${k("IntlProvider", ve)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), d(jt, {
	locale: e,
	children: t
}, String(e))), Ft = ((e) => {
	let { locale: t } = o($) ?? {};
	return c(() => rt(t, e), [t, e]);
}), It = () => {
	let e = Ft();
	return d("div", {
		className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
		children: e("mockBanner")
	});
};
function Lt() {
	let e = Nt(ee);
	return f(u, { children: [d(It, {}), f("div", {
		className: "mb-12 text-center",
		children: [d("h1", {
			className: "mb-3 text-3xl font-bold text-foreground",
			children: e("simpleTransparentPricing")
		}), d("p", {
			className: "text-muted-foreground",
			children: e("chooseThePlanThatFits")
		})]
	})] });
}
function Rt({ children: t }) {
	return d(e.Suspense, {
		fallback: null,
		children: d(Pt, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		})
	});
}
function zt() {
	return d(Rt, { children: d(Lt, {}) });
}
export { zt as default };
