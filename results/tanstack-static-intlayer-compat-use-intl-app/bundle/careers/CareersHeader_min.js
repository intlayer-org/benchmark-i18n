import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useContext as a, useEffect as o, useMemo as s, useRef as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { Fragment as p, jsxDEV as m } from "react/jsx-dev-runtime";
var ee = {
	key: "careers-header",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				title: "Careers",
				joinOurMissionToImprove: "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
			},
			fr: {
				title: "Carrières",
				joinOurMissionToImprove: "Rejoignez notre mission pour améliorer l'écosystème de l'internationalisation. Nous sommes une équipe privilégiant le télétravail qui valorise l'impact, la transparence et l'apprentissage continu."
			},
			es: {
				title: "Carreras",
				joinOurMissionToImprove: "Únete a nuestra misión de mejorar el ecosistema de internacionalización. Somos un equipo que prioriza el trabajo remoto y valora el impacto, la transparencia y el aprendizaje continuo."
			},
			de: {
				title: "Karriere",
				joinOurMissionToImprove: "Schließen Sie sich unserer Mission an, das Internationalisierungs-Ökosystem zu verbessern. Wir sind ein Remote-First-Team, das Wirkung, Transparenz und kontinuierliches Lernen schätzt."
			},
			it: {
				title: "Carriere",
				joinOurMissionToImprove: "Unisciti alla nostra missione per migliorare l'ecosistema dell'internazionalizzazione. Siamo un team che lavora principalmente in remoto e che valorizza l'impatto, la trasparenza e l'apprendimento continuo."
			},
			pt: {
				title: "Carreiras",
				joinOurMissionToImprove: "Junte-se à nossa missão de melhorar o ecossistema de internacionalização. Somos uma equipe que prioriza o trabalho remoto e valora o impacto, a transparência e o aprendizado contínuo."
			},
			zh: {
				title: "招聘",
				joinOurMissionToImprove: "加入我们的使命，改善国际化生态系统。我们是一个远程优先的团队，重视影响力、透明度和持续学习。"
			},
			ja: {
				title: "採用",
				joinOurMissionToImprove: "国際化エコシステムを改善するという私たちの使命に参加してください。私たちは、影響、透明性、継続的な学習を大切にするリモートファーストのチームです。"
			},
			ko: {
				title: "채용",
				joinOurMissionToImprove: "국제화 생태계를 개선하기 위한 우리의 사명에 동참하세요. 저희는 영향력, 투명성 및 지속적인 학습을 소중히 여기는 원격 근무 우선 팀입니다."
			},
			ru: {
				title: "Карьера",
				joinOurMissionToImprove: "Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы команда, работающая удаленно, которая ценит влияние, прозрачность и непрерывное обучение."
			}
		}
	}
}, h = /* @__PURE__ */ new WeakMap(), te = 0, ne = (e) => {
	if (!e) return "base";
	let t = h.get(e);
	if (t) return t;
	te += 1;
	let n = `p${te}`;
	return h.set(e, n), n;
}, re = 256, g = /* @__PURE__ */ new WeakMap(), _ = (e) => typeof e == "object" && !!e, ie = (e, t, n) => `${e}_${t}_${ne(n)}`, ae = (e, t) => {
	if (!_(e)) return { hit: !1 };
	let n = g.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, v = (e, t, n) => {
	if (!_(e)) return n;
	let r = g.get(e);
	return r || (r = /* @__PURE__ */ new Map(), g.set(e, r)), r.size >= re && r.clear(), r.set(t, n), n;
}, oe = "translation", se = "enumeration", ce = "plural", y = "insertion", le = "object", ue = "array", de = "markdown", b = "html", fe = "gender", pe = "select", x = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => x(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => x(e, {
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
			n[r] = x(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = x(e[r], i);
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
}, he = (e, t) => e[me(e, t) ?? "fallback"], ge = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), S = "default", _e = /[^A-Za-z0-9._&=-]/g, C = /[^A-Za-z0-9._-]/g, ve = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, w = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, ve);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, T = (e) => e === void 0 ? S : typeof e == "string" ? w(e, _e) : Object.keys(e).sort().map((t) => `${w(t, C)}=${w(String(e[t]), C)}`).join("&"), E = (e) => Array.isArray(e) ? e.length === 0 ? [S] : e.map(T) : [T(e)], ye = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? S : e[0] ?? "default";
}, be = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, xe = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Se = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Ce = (e, t) => {
	if (!xe(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? S : ye(E(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => be(e, n, t, s)).map((t) => Se(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, we = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, D = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? E(n).join(",") : String(n)}`;
}).join("|") : "", O = {
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
}, k = {
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
}, A = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, j = "\x1B[0m", Te = "\x1B[34m", Ee = "\x1B[31m", De = "\x1B[32m", Oe = "\x1B[38;5;3m", ke = "\x1B[36m", Ae = (e) => e, je = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Ae(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, M = (e, t) => (n, r) => je(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), N = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? j : n : j}` : e, Me = (e, t = Oe, n = j) => [e].flat().map((e) => N(e, t, n)).join(", ");
N("✗", Ee), N("✓", De), N("⏲", Te);
var P = () => ({}), Ne = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), F = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Ne.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : F(e ? `${e}.${String(n)}` : String(n)) }), I = /* @__PURE__ */ new Set(), L = (e, t, n) => {
	let r = P()[e];
	return r ? tt(r, t, n) : (I.has(e) || (M({ log: A })(typeof window > "u" ? `Dictionary ${Me(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), I.add(e)), F(e));
}, Pe = 50, R = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Set(), Fe = (e) => {
	z.has(e) || (z.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Ie = {
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
}, Le = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Fe(e), Ie[e]);
};
function B(e, t, n) {
	let r = t ?? O?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = R.get(a);
	o || (o = /* @__PURE__ */ new Map(), R.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Le(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Pe && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Re = (e, t, n) => e[B("PluralRules", n).select(t)] ?? e.other, ze = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, V = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Be = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (V(e) && V(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : Be(e[r], t[r]));
		return n;
	}
	return e;
}, Ve = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => Be(e, t));
}, H = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, He = (e) => {
	if (typeof e == "string") return e;
	if (H(e)) return e.nodeType === "html" ? e[b] : e[de];
}, Ue = (e, t) => {
	if (typeof e == "string") return t;
	if (H(e)) {
		let n = e.nodeType === "html" ? b : de;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, We = (e, t, n, r, i) => {
	let a = Ue(e, ge(He(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, U = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Ge = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? U : {
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
		return Ve(o, e, t);
	}
}, W = U, Ke = (e) => U, qe = U, Je = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? U : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: y }], i = e[y], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || H(e),
			transform: (e, n, r) => {
				if (H(e)) return (i) => We(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = ge(i, e);
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
}, Ye = U, Xe = U, Ze = (e) => U, Qe = U, $e = (e, t = !0) => [
	Ge(e ?? O.defaultLocale, t ? O.defaultLocale : void 0),
	W,
	qe,
	Je,
	Ze(e ?? O.defaultLocale),
	Qe,
	Ye,
	Xe
], et = (e, t, n = []) => x(e, {
	...t,
	plugins: n
}), tt = (e, t, n) => {
	let { locale: r, selector: i } = we(t), a = ie(r ?? O.defaultLocale, D(i), n), o = ae(e, a);
	if (o.hit) return o.content;
	let s = n ?? $e(r), c = Ce(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return et(e.content, t, s);
	};
	return c === null ? v(e, a, null) : Array.isArray(c) ? v(e, a, c.map(l)) : v(e, a, l(c));
}, nt = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", rt = /\{\{\s*(.*?)\s*\}\}/g, it = (e, t = {}) => {
	if (!Object.values(t).some(nt)) return {
		isSimple: !0,
		parts: e.replace(rt, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(rt), r = [];
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
}, at = [
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
}, ot = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? B("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? B("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : B("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return B("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, st = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = K(t, r);
	return o === void 0 ? e : i ? ot(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = K(t, r);
	return o === void 0 ? e : ot(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = K(t, n);
	return r === void 0 ? e : String(r);
}), q = (e, t) => e[t] ?? e.count ?? e.n, J = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return st(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return J(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(J(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return J(r[y], t, n);
	if (r.nodeType === "html") return J(r[b], t, n);
	if (r.nodeType === "plural") {
		let e = r[ce];
		return J(Re(e, Number(q(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[se], i = at.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) at.includes(t) || (o[t] = n);
		let s = q(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = B("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? he(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return J(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[pe], i = q(t, typeof r.variable == "string" ? r.variable : "value");
		return J(ze(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[fe];
		return J(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, ct = (e, t = {}, n = "en") => {
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
		}) : t.push({
			tag: o,
			children: Y(s)
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, lt = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, ut = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = ut(e.children, n), a = n[e.tag];
	return typeof a == "function" ? d(t, { children: a(i) }, r) : d(t, { children: i }, r);
}), dt = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = dt(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), ft = (e, t) => {
	let [n, ...r] = (t ?? "").split("."), i = r.join(".");
	return ht(e, (t) => pt(e, n ?? "", i, t), (e) => t ? `${t}.${e}` : e);
}, pt = (e, t, n, r) => {
	let i = t, a = n ? `${n}.${r}` : r, o = P();
	if (!i) {
		let [t, ...n] = r.split(".");
		if (i = t ?? r, a = n.join("."), !o[i]) for (let t of Object.keys(o)) try {
			let n = G(L(t, e), r);
			if (n !== void 0) return n;
		} catch {}
	}
	try {
		return G(L(i, e), a);
	} catch {
		return;
	}
}, mt = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return ht(e, (e) => G(t, r(e)), r);
}, ht = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return ct(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = lt(t), o = r(e, i);
			return o === void 0 ? n(e) : d(u, { children: ut(Y(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = lt(t), o = r(e, i);
			return o === void 0 ? n(e) : dt(Y(o), a);
		}
	});
}, gt = ({ children: e, value: t, additionalProps: n }) => {
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
}, _t = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => gt({
		...n,
		value: n.children,
		children: n.children
	})
}, vt = U, yt = (e, n) => {
	let i = it(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, bt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? U : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: y }], i = e[y], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || H(e),
			transform: (e, n, r) => {
				if (H(e)) return (i) => We(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = yt(i, e);
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
}, xt = U, St = U, X = /* @__PURE__ */ new Map(), Ct = (e, t = !0) => {
	let n = `${e ?? O.defaultLocale}_${t}`;
	if (X.has(n)) return X.get(n);
	let r = [
		Ge(e ?? O.defaultLocale, t ? O.defaultLocale : void 0),
		W,
		Ke(e ?? O.defaultLocale),
		qe,
		Ze(e ?? O.defaultLocale),
		Qe,
		Ye,
		Xe,
		_t,
		vt,
		bt,
		xt,
		St
	];
	return X.set(n, r), r;
}, wt = (e, t) => tt(e, t, Ct(typeof t == "object" && t ? t.locale : t)), Tt = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, Et = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = Tt(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, Dt = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, Ot = (e = Z) => {
	let { locales: t } = O;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Dt) for (let t = 0; t < (k.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(k.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, kt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !Dt && k.storage.cookies) for (let n = 0; n < k.storage.cookies.length; n++) {
		let { name: r, attributes: i } = k.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: Tt(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, Et(r, e, i));
			} catch {}
		}
	}
}, At = Ot(Z), jt = (e, t) => kt(e, {
	...Z,
	isCookieEnabled: t
}), Mt = () => {
	let { locale: e } = a(Q) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, Nt = ({ children: e }) => (Mt(), e), Pt = () => {
	let { locale: e } = a(Q) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, Ft = ({ children: e }) => (Pt(), e), It = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Lt = (e, t = O?.locales, n = O?.defaultLocale) => {
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
}, Q = n({
	locale: At ?? O?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Rt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: u } = O ?? {}, [f, p] = l(e ?? At ?? t ?? u);
	o(() => {
		e && e !== f && p(e);
	}, [e]), o(() => {
		It();
	}, []);
	let m = i ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), jt(e, s);
		}
	}), ee = Lt(f);
	return d(Q.Provider, {
		value: {
			locale: ee,
			setLocale: m,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, zt = ({ children: e, ...t }) => f(Rt, {
	...t,
	children: [
		d(Nt, {}),
		d(Ft, {}),
		e
	]
}), Bt = (e, t) => {
	let { locale: n, variant: r } = a(Q) ?? {}, i = t ?? n, o = typeof i == "object" && i ? `${i.locale ?? ""}|${D(i)}` : i;
	return s(() => wt(e, i), [e.key, o]);
}, Vt = ((e, t) => {
	let { locale: n } = a(Q) ?? {};
	return mt(n, Bt(e), t);
}), Ht = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && M({ log: A })(`${N("IntlProvider", ke)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), d(zt, {
	locale: e,
	children: t
}, String(e))), Ut = ((e) => {
	let { locale: t } = a(Q) ?? {};
	return s(() => ft(t, e), [t, e]);
}), Wt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/MockBanner.tsx", Gt = () => {
	let e = Ut();
	return m("div", {
		className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
		children: e("mockBanner")
	}, void 0, !1, {
		fileName: Wt,
		lineNumber: 6,
		columnNumber: 5
	}, void 0);
}, $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/pages/careers/CareersHeader.tsx";
function Kt() {
	let e = Vt(ee);
	return m(p, { children: [
		m(Gt, {}, void 0, !1, {
			fileName: $,
			lineNumber: 8,
			columnNumber: 7
		}, this),
		m("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: e("title")
		}, void 0, !1, {
			fileName: $,
			lineNumber: 9,
			columnNumber: 7
		}, this),
		m("p", {
			className: "mb-4 text-muted-foreground",
			children: e("joinOurMissionToImprove")
		}, void 0, !1, {
			fileName: $,
			lineNumber: 10,
			columnNumber: 7
		}, this)
	] }, void 0, !0, {
		fileName: $,
		lineNumber: 7,
		columnNumber: 5
	}, this);
}
var qt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/scripts/Wrapper.tsx";
function Jt({ children: t }) {
	return m(e.Suspense, {
		fallback: null,
		children: m(Ht, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		}, void 0, !1, {
			fileName: qt,
			lineNumber: 9,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: qt,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var Yt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/pages/careers/CareersHeader.wrapper.tsx";
function Xt() {
	return m(Jt, { children: m(Kt, {}, void 0, !1, {
		fileName: Yt,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: Yt,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Xt as default };
