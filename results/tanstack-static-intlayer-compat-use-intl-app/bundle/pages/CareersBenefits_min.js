import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useContext as a, useEffect as o, useMemo as s, useRef as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { jsxDEV as p } from "react/jsx-dev-runtime";
var ee = {
	key: "careers-benefits",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				workFromAnywhereInThe: "Work from anywhere in the world",
				competitivePay: "Competitive pay",
				topOfMarketCompensation: "Top-of-market compensation",
				openSourceTime: "Open source time"
			},
			fr: {
				workFromAnywhereInThe: "Travaillez de n'importe où dans le monde",
				competitivePay: "Rémunération compétitive",
				topOfMarketCompensation: "Rémunération au-dessus du marché",
				openSourceTime: "Temps dédié à l'open source"
			},
			es: {
				workFromAnywhereInThe: "Trabaja desde cualquier lugar del mundo",
				competitivePay: "Salario competitivo",
				topOfMarketCompensation: "Compensación superior a la del mercado",
				openSourceTime: "Tiempo dedicado al código abierto"
			},
			de: {
				workFromAnywhereInThe: "Arbeiten Sie von überall auf der Welt",
				competitivePay: "Wettbewerbsfähige Bezahlung",
				topOfMarketCompensation: "Überdurchschnittliche Vergütung",
				openSourceTime: "Zeit für Open Source"
			},
			it: {
				workFromAnywhereInThe: "Lavora da qualsiasi parte del mondo",
				competitivePay: "Retribuzione competitiva",
				topOfMarketCompensation: "Compensazione ai vertici del mercato",
				openSourceTime: "Tempo dedicato all'open source"
			},
			pt: {
				workFromAnywhereInThe: "Trabalhe de qualquer lugar do mundo",
				competitivePay: "Remuneração competitiva",
				topOfMarketCompensation: "Remuneração acima da média do mercado",
				openSourceTime: "Tempo dedicado ao código aberto"
			},
			zh: {
				workFromAnywhereInThe: "在世界任何地方工作",
				competitivePay: "具有竞争力的薪酬",
				topOfMarketCompensation: "市场领先的薪酬",
				openSourceTime: "开源贡献时间"
			},
			ja: {
				workFromAnywhereInThe: "世界中のどこからでも勤務可能",
				competitivePay: "競争力のある給与",
				topOfMarketCompensation: "市場最高水準の報酬",
				openSourceTime: "オープンソースへの貢献時間"
			},
			ko: {
				workFromAnywhereInThe: "전 세계 어디서나 근무 가능",
				competitivePay: "경쟁력 있는 급여",
				topOfMarketCompensation: "업계 최고 수준의 보상",
				openSourceTime: "오픈 소스 기여 시간"
			},
			ru: {
				workFromAnywhereInThe: "Работайте из любой точки мира",
				competitivePay: "Конкурентоспособная оплата",
				topOfMarketCompensation: "Компенсация выше рыночной",
				openSourceTime: "Время на open source"
			}
		}
	}
}, m = /* @__PURE__ */ new WeakMap(), h = 0, te = (e) => {
	if (!e) return "base";
	let t = m.get(e);
	if (t) return t;
	h += 1;
	let n = `p${h}`;
	return m.set(e, n), n;
}, ne = 256, g = /* @__PURE__ */ new WeakMap(), re = (e) => typeof e == "object" && !!e, ie = (e, t, n) => `${e}_${t}_${te(n)}`, ae = (e, t) => {
	if (!re(e)) return { hit: !1 };
	let n = g.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, _ = (e, t, n) => {
	if (!re(e)) return n;
	let r = g.get(e);
	return r || (r = /* @__PURE__ */ new Map(), g.set(e, r)), r.size >= ne && r.clear(), r.set(t, n), n;
}, oe = "translation", se = "enumeration", ce = "plural", v = "insertion", le = "object", ue = "array", de = "markdown", y = "html", fe = "gender", pe = "select", b = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => b(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => b(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ue,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: le,
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
}, me = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, he = (e, t) => e[me(e, t) ?? "fallback"], x = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), S = "default", ge = /[^A-Za-z0-9._&=-]/g, C = /[^A-Za-z0-9._-]/g, _e = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, w = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, _e);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, ve = (e) => e === void 0 ? S : typeof e == "string" ? w(e, ge) : Object.keys(e).sort().map((t) => `${w(t, C)}=${w(String(e[t]), C)}`).join("&"), ye = (e) => Array.isArray(e) ? e.length === 0 ? [S] : e.map(ve) : [ve(e)], be = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? S : e[0] ?? "default";
}, xe = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Se = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Ce = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, we = (e, t) => {
	if (!Se(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? S : be(ye(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => xe(e, n, t, s)).map((t) => Ce(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Te = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Ee = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? ye(n).join(",") : String(n)}`;
}).join("|") : "", T = {
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
}, E = {
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
}, De = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, Oe = "\x1B[0m", ke = "\x1B[34m", Ae = "\x1B[31m", je = "\x1B[32m", Me = "\x1B[36m", Ne = (e) => e, Pe = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Ne(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Fe = (e, t) => (n, r) => Pe(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), D = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? Oe : n : Oe}` : e;
D("✗", Ae), D("✓", je), D("⏲", ke);
var Ie = 50, O = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Set(), Le = (e) => {
	k.has(e) || (k.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Re = {
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
}, ze = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Le(e), Re[e]);
};
function A(e, t, n) {
	let r = t ?? T?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = O.get(a);
	o || (o = /* @__PURE__ */ new Map(), O.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? ze(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Ie && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Be = (e, t, n) => e[A("PluralRules", n).select(t)] ?? e.other, Ve = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, j = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, M = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (j(e) && j(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : M(e[r], t[r]));
		return n;
	}
	return e;
}, He = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => M(e, t));
}, N = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ue = (e) => {
	if (typeof e == "string") return e;
	if (N(e)) return e.nodeType === "html" ? e[y] : e[de];
}, We = (e, t) => {
	if (typeof e == "string") return t;
	if (N(e)) {
		let n = e.nodeType === "html" ? y : de;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, P = (e, t, n, r, i) => {
	let a = We(e, x(Ue(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, F = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, I = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? F : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: oe,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return He(o, e, t);
	}
}, L = F, Ge = (e) => F, R = F, Ke = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? F : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: v }], i = e[v], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || N(e),
			transform: (e, n, r) => {
				if (N(e)) return (i) => P(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = x(i, e);
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
}, z = F, B = F, V = (e) => F, H = F, qe = (e, t = !0) => [
	I(e ?? T.defaultLocale, t ? T.defaultLocale : void 0),
	L,
	R,
	Ke,
	V(e ?? T.defaultLocale),
	H,
	z,
	B
], Je = (e, t, n = []) => b(e, {
	...t,
	plugins: n
}), Ye = (e, t, n) => {
	let { locale: r, selector: i } = Te(t), a = ie(r ?? T.defaultLocale, Ee(i), n), o = ae(e, a);
	if (o.hit) return o.content;
	let s = n ?? qe(r), c = we(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Je(e.content, t, s);
	};
	return c === null ? _(e, a, null) : Array.isArray(c) ? _(e, a, c.map(l)) : _(e, a, l(c));
}, Xe = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", U = /\{\{\s*(.*?)\s*\}\}/g, Ze = (e, t = {}) => {
	if (!Object.values(t).some(Xe)) return {
		isSimple: !0,
		parts: e.replace(U, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(U), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Qe = (e, t, n = ".") => {
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
}, W = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], G = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, $e = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? A("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? A("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : A("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return A("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, et = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = G(t, r);
	return o === void 0 ? e : i ? $e(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = G(t, r);
	return o === void 0 ? e : $e(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = G(t, n);
	return r === void 0 ? e : String(r);
}), K = (e, t) => e[t] ?? e.count ?? e.n, q = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return et(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return q(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(q(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return q(r[v], t, n);
	if (r.nodeType === "html") return q(r[y], t, n);
	if (r.nodeType === "plural") {
		let e = r[ce];
		return q(Be(e, Number(K(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[se], i = W.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) W.includes(t) || (o[t] = n);
		let s = K(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = A("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? he(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return q(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[pe], i = K(t, typeof r.variable == "string" ? r.variable : "value");
		return q(Ve(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[fe];
		return q(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, tt = (e, t = {}, n = "en") => {
	let r = q(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, J = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : t.push({
			tag: o,
			children: J(s)
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, nt = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, rt = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = rt(e.children, n), a = n[e.tag];
	return typeof a == "function" ? d(t, { children: a(i) }, r) : d(t, { children: i }, r);
}), it = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = it(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), at = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return ot(e, (e) => Qe(t, r(e)), r);
}, ot = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return tt(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = nt(t), o = r(e, i);
			return o === void 0 ? n(e) : d(u, { children: rt(J(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = nt(t), o = r(e, i);
			return o === void 0 ? n(e) : it(J(o), a);
		}
	});
}, st = ({ children: e, value: t, additionalProps: n }) => {
	let r = i(e) ? e : d(u, { children: e });
	return new Proxy(r, { get(e, r, i) {
		if (r === "value") return t;
		if (r === Symbol.toPrimitive) return () => t ?? "";
		if (r === "toString") return () => String(t ?? "");
		if (r === "valueOf") return () => t;
		if (n && Object.hasOwn(n, r)) return n[r];
		if (t != null && typeof r == "string" && r !== "constructor" && !(r in e)) {
			let e = Object(t);
			if (r in e) {
				let n = e[r];
				return typeof n == "function" ? n.bind(t) : n;
			}
		}
		return Reflect.get(e, r, i);
	} });
}, ct = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => st({
		...n,
		value: n.children,
		children: n.children
	})
}, lt = F, ut = (e, n) => {
	let i = Ze(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, dt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? F : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: v }], i = e[v], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || N(e),
			transform: (e, n, r) => {
				if (N(e)) return (i) => P(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = ut(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		}, o = n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
		return typeof i == "object" && i && "nodeType" in i && ["enumeration", "condition"].includes(i.nodeType) ? (e) => (t) => {
			let n = o(t);
			return typeof n == "function" ? n(e) : n;
		} : o;
	}
}, ft = F, pt = F, Y = /* @__PURE__ */ new Map(), mt = (e, t = !0) => {
	let n = `${e ?? T.defaultLocale}_${t}`;
	if (Y.has(n)) return Y.get(n);
	let r = [
		I(e ?? T.defaultLocale, t ? T.defaultLocale : void 0),
		L,
		Ge(e ?? T.defaultLocale),
		R,
		V(e ?? T.defaultLocale),
		H,
		z,
		B,
		ct,
		lt,
		dt,
		ft,
		pt
	];
	return Y.set(n, r), r;
}, ht = (e, t) => Ye(e, t, mt(typeof t == "object" && t ? t.locale : t)), gt = (e) => {
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
}, yt = (e = X) => {
	let { locales: t } = T;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!vt) for (let t = 0; t < (E.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(E.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, bt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !vt && E.storage.cookies) for (let n = 0; n < E.storage.cookies.length; n++) {
		let { name: r, attributes: i } = E.storage.cookies[n];
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
}, xt = yt(X), St = (e, t) => bt(e, {
	...X,
	isCookieEnabled: t
}), Ct = () => {
	let { locale: e } = a(Z) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, wt = ({ children: e }) => (Ct(), e), Tt = () => {
	let { locale: e } = a(Z) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, Et = ({ children: e }) => (Tt(), e), Dt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Ot = (e, t = T?.locales, n = T?.defaultLocale) => {
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
}, Z = n({
	locale: xt ?? T?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), kt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: u } = T ?? {}, [f, p] = l(e ?? xt ?? t ?? u);
	o(() => {
		e && e !== f && p(e);
	}, [e]), o(() => {
		Dt();
	}, []);
	let ee = i ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), St(e, s);
		}
	}), m = Ot(f);
	return d(Z.Provider, {
		value: {
			locale: m,
			setLocale: ee,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, At = ({ children: e, ...t }) => f(kt, {
	...t,
	children: [
		d(wt, {}),
		d(Et, {}),
		e
	]
}), jt = (e, t) => {
	let { locale: n, variant: r } = a(Z) ?? {}, i = t ?? n, o = typeof i == "object" && i ? `${i.locale ?? ""}|${Ee(i)}` : i;
	return s(() => ht(e, i), [e.key, o]);
}, Mt = ((e, t) => {
	let { locale: n } = a(Z) ?? {};
	return at(n, jt(e), t);
}), Nt = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && Fe({ log: De })(`${D("IntlProvider", Me)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), d(At, {
	locale: e,
	children: t
}, String(e))), Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/pages/careers/CareersBenefits.tsx";
function Pt() {
	let e = Mt(ee), t = [
		{
			label: "Remote-first",
			value: e("workFromAnywhereInThe")
		},
		{
			label: e("competitivePay"),
			value: e("topOfMarketCompensation")
		},
		{
			label: e("openSourceTime"),
			value: "20% time for OSS contributions"
		}
	];
	return p("div", {
		className: "mb-12 grid gap-4 md:grid-cols-3",
		children: t.map((e) => p("div", {
			className: "rounded-lg border border-border bg-card p-4 text-center",
			children: [p("p", {
				className: "text-sm font-semibold text-foreground",
				children: e.label
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 21,
				columnNumber: 11
			}, this), p("p", {
				className: "text-xs text-muted-foreground",
				children: e.value
			}, void 0, !1, {
				fileName: Q,
				lineNumber: 22,
				columnNumber: 11
			}, this)]
		}, e.label, !0, {
			fileName: Q,
			lineNumber: 17,
			columnNumber: 9
		}, this))
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 15,
		columnNumber: 5
	}, this);
}
var Ft = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/scripts/Wrapper.tsx";
function It({ children: t }) {
	return p(e.Suspense, {
		fallback: null,
		children: p(Nt, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		}, void 0, !1, {
			fileName: Ft,
			lineNumber: 9,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Ft,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/pages/careers/CareersBenefits.wrapper.tsx";
function Lt() {
	return p(It, { children: p(Pt, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Lt as default };
