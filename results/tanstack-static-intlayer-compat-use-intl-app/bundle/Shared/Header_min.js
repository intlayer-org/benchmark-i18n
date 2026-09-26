import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useCallback as a, useContext as o, useEffect as s, useLayoutEffect as c, useMemo as l, useState as u } from "react";
import { Link as d, useNavigate as f, useParams as p } from "@tanstack/react-router";
import { ChevronDown as m } from "lucide-react";
import { Fragment as h, jsx as g, jsxs as _ } from "react/jsx-runtime";
var ee = {
	key: "header",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				home: "Home",
				methodology: "Methodology",
				mockPages: "Mock Pages",
				products: "Products",
				pricing: "Pricing",
				team: "Team",
				blog: "Blog",
				careers: "Careers",
				faq: "FAQ",
				contact: "Contact",
				settings: "Settings",
				goToGithub: "Go to GitHub"
			},
			fr: {
				home: "Accueil",
				methodology: "Méthodologie",
				mockPages: "Pages de test",
				products: "Produits",
				pricing: "Tarifs",
				team: "Équipe",
				blog: "Blog",
				careers: "Carrières",
				faq: "FAQ",
				contact: "Contact",
				settings: "Paramètres",
				goToGithub: "Aller sur GitHub"
			},
			es: {
				home: "Inicio",
				methodology: "Metodología",
				mockPages: "Páginas de prueba",
				products: "Productos",
				pricing: "Precios",
				team: "Equipo",
				blog: "Blog",
				careers: "Carreras",
				faq: "FAQ",
				contact: "Contacto",
				settings: "Ajustes",
				goToGithub: "Ir a GitHub"
			},
			de: {
				home: "Startseite",
				methodology: "Methodik",
				mockPages: "Testseiten",
				products: "Produkte",
				pricing: "Preise",
				team: "Team",
				blog: "Blog",
				careers: "Karriere",
				faq: "FAQ",
				contact: "Kontakt",
				settings: "Einstellungen",
				goToGithub: "Zu GitHub"
			},
			it: {
				home: "Home",
				methodology: "Metodologia",
				mockPages: "Pagine di test",
				products: "Prodotti",
				pricing: "Prezzi",
				team: "Team",
				blog: "Blog",
				careers: "Carriere",
				faq: "FAQ",
				contact: "Contatti",
				settings: "Impostazioni",
				goToGithub: "Vai su GitHub"
			},
			pt: {
				home: "Início",
				methodology: "Metodologia",
				mockPages: "Páginas de teste",
				products: "Produtos",
				pricing: "Preços",
				team: "Equipe",
				blog: "Blog",
				careers: "Carreiras",
				faq: "FAQ",
				contact: "Contato",
				settings: "Configurações",
				goToGithub: "Ir para GitHub"
			},
			zh: {
				home: "首页",
				methodology: "方法论",
				mockPages: "模拟页面",
				products: "产品",
				pricing: "价格",
				team: "团队",
				blog: "博客",
				careers: "招聘",
				faq: "常见问题",
				contact: "联系我们",
				settings: "设置",
				goToGithub: "前往 GitHub"
			},
			ja: {
				home: "ホーム",
				methodology: "方法論",
				mockPages: "模擬ページ",
				products: "製品",
				pricing: "料金",
				team: "チーム",
				blog: "ブログ",
				careers: "採用",
				faq: "FAQ",
				contact: "お問い合わせ",
				settings: "設定",
				goToGithub: "GitHubへ移動"
			},
			ko: {
				home: "홈",
				methodology: "방법론",
				mockPages: "모의 페이지",
				products: "제품",
				pricing: "요금",
				team: "팀",
				blog: "블로그",
				careers: "채용",
				faq: "FAQ",
				contact: "문의하기",
				settings: "설정",
				goToGithub: "GitHub으로 이동"
			},
			ru: {
				home: "Главная",
				methodology: "Методология",
				mockPages: "Тестовые страницы",
				products: "Продукты",
				pricing: "Цены",
				team: "Команда",
				blog: "Блог",
				careers: "Карьера",
				faq: "FAQ",
				contact: "Контакт",
				settings: "Настройки",
				goToGithub: "Перейти на GitHub"
			}
		}
	}
}, v = /* @__PURE__ */ new WeakMap(), y = 0, te = (e) => {
	if (!e) return "base";
	let t = v.get(e);
	if (t) return t;
	y += 1;
	let n = `p${y}`;
	return v.set(e, n), n;
}, ne = 256, b = /* @__PURE__ */ new WeakMap(), re = (e) => typeof e == "object" && !!e, ie = (e, t, n) => `${e}_${t}_${te(n)}`, ae = (e, t) => {
	if (!re(e)) return { hit: !1 };
	let n = b.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, x = (e, t, n) => {
	if (!re(e)) return n;
	let r = b.get(e);
	return r || (r = /* @__PURE__ */ new Map(), b.set(e, r)), r.size >= ne && r.clear(), r.set(t, n), n;
}, oe = "translation", se = "enumeration", ce = "plural", le = "condition", S = "insertion", ue = "object", de = "array", fe = "markdown", C = "html", w = "gender", pe = "select", T = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), E = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, E);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => E(e, T(t, e, {
		type: de,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: ue,
			key: r
		};
		if (t.eager) {
			n[r] = E(e[r], T(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = E(e[r], T(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
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
}, he = (e, t) => e[me(e, t) ?? "fallback"], ge = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), D = {
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
}, O = {
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
}, _e = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, ve = "\x1B[0m", ye = "\x1B[34m", be = "\x1B[31m", xe = "\x1B[32m", Se = "\x1B[36m", Ce = (e) => e, we = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Ce(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Te = (e, t) => (n, r) => we(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), k = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? ve : n : ve}` : e;
k("✗", be), k("✓", xe), k("⏲", ye);
var Ee = 50, De = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Set(), ke = (e) => {
	Oe.has(e) || (Oe.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Ae = {
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
}, je = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (ke(e), Ae[e]);
};
function A(e, t, n) {
	let r = t ?? D?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = De.get(a);
	o || (o = /* @__PURE__ */ new Map(), De.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? je(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Ee && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Me = (e, t, n) => e[A("PluralRules", n).select(t)] ?? e.other, Ne = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, Pe = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, j = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !Pe(e) || !Pe(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? j(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, Fe = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => j(e, t));
}, M = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ie = (e) => {
	if (typeof e == "string") return e;
	if (M(e)) return e.nodeType === "html" ? e[C] : e[fe];
}, Le = (e, t) => {
	if (typeof e == "string") return t;
	if (M(e)) {
		let n = e.nodeType === "html" ? C : fe;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, N = (e, t, n, r, i) => {
	let a = Le(e, ge(Ie(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, P = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Re = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, F = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? P : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Fe(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: oe,
				key: e
			}]
		});
	}
}, I = P, L = (e) => P, R = P, ze = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? P : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: S }], i = e[S], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || M(e),
			transform: (e, n, r) => {
				if (M(e)) return (i) => N(e, i, n, t.plugins, r);
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
		return B(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, z = [
	se,
	le,
	ce,
	w,
	pe
], Be = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !z.includes(i)) return t;
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
		return !r && Re(i) ? i(n) : i;
	};
}, B = (e, t) => typeof t == "function" && z.includes(e?.nodeType ?? "") ? (n) => Be(e, t, n) : t, V = P, H = P, U = (e) => P, Ve = P, He = (e, t = !0) => [
	F(e ?? D.defaultLocale, t ? D.defaultLocale : void 0),
	I,
	L(e ?? D.defaultLocale),
	R,
	ze,
	U(e ?? D.defaultLocale),
	Ve,
	V,
	H
].filter((e) => e !== P), Ue = (e, t, n = []) => E(e, {
	...t,
	plugins: n
}), W = /* @__PURE__ */ new WeakSet(), We = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = ie(r ?? D.defaultLocale, "", n), o = ae(e, a);
	if (o.hit) return o.content;
	let s = n ?? He(r), c = e, l = (e) => {
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
			return Ue(e.content, t, s);
		} finally {
			t.eager && W.delete(e);
		}
	};
	return c === null ? x(e, a, null) : Array.isArray(c) ? x(e, a, c.map(l)) : x(e, a, l(c));
}, Ge = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Ke = /\{\{\s*(.*?)\s*\}\}/g, qe = (e, t = {}) => {
	if (!Object.values(t).some(Ge)) return {
		isSimple: !0,
		parts: e.replace(Ke, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Ke), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Je = (e, t, n = ".") => {
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
}, Ye = [
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
}, Xe = (e, t, n, r) => {
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
}, Ze = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = G(t, r);
	return o === void 0 ? e : i ? Xe(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = G(t, r);
	return o === void 0 ? e : Xe(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = G(t, n);
	return r === void 0 ? e : String(r);
}), K = (e, t) => e[t] ?? e.count ?? e.n, q = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Ze(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return q(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(q(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return q(r[S], t, n);
	if (r.nodeType === "html") return q(r[C], t, n);
	if (r.nodeType === "plural") {
		let e = r[ce];
		return q(Me(e, Number(K(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[se], i = Ye.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Ye.includes(t) || (o[t] = n);
		let s = K(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = A("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? he(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return q(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[pe], i = K(t, typeof r.variable == "string" ? r.variable : "value");
		return q(Ne(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[w];
		return q(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Qe = (e, t = {}, n = "en") => {
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
		}) : o && t.push({
			tag: o,
			children: J(s ?? "")
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, $e = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, et = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = et(e.children, n), a = n[e.tag];
	return typeof a == "function" ? g(t, { children: a(i) }, r) : g(t, { children: i }, r);
}), tt = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = tt(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), nt = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return rt(e, (e) => Je(t, r(e)), r);
}, rt = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return Qe(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = $e(t), o = r(e, i);
			return o === void 0 ? n(e) : g(h, { children: et(J(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = $e(t), o = r(e, i);
			return o === void 0 ? n(e) : tt(J(o), a);
		}
	});
}, it = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, at = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = it(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, ot = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, st = (e = Y) => {
	let { locales: t } = D;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!ot) for (let t = 0; t < (O.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(O.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ct = !1, lt, ut = () => typeof window > "u" ? st(Y) : (ct ||= (lt = st(Y), !0), lt), dt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (ct = !1, !ot && O.storage.cookies)) for (let n = 0; n < O.storage.cookies.length; n++) {
		let { name: r, attributes: i } = O.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: it(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, at(r, e, i));
			} catch {}
		}
	}
}, ft = /* @__PURE__ */ new Map(), pt = (e, t) => Object.create(new Proxy(e, {
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
}), mt = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = ft.get(t);
	i || (i = /* @__PURE__ */ new Map(), ft.set(t, i));
	let a = i.get(r);
	return a || (a = pt(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, ht = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...i(e) ? e : g(h, { children: e }),
	value: t,
	...n
}, mt(t)), gt = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => ht({
		value: t.children,
		children: t.children
	})
}, _t = P, vt = (e, n) => {
	let i = qe(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, yt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? P : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: S }], i = e[S], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || M(e),
			transform: (e, n, r) => {
				if (M(e)) return (i) => N(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = vt(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return B(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, bt = P, xt = P, X = /* @__PURE__ */ new Map(), St = (e, t = !0) => {
	let n = `${e ?? D.defaultLocale}_${t}`;
	if (X.has(n)) return X.get(n);
	let r = [
		gt,
		F(e ?? D.defaultLocale, t ? D.defaultLocale : void 0),
		I,
		L(e ?? D.defaultLocale),
		R,
		U(e ?? D.defaultLocale),
		Ve,
		V,
		H,
		_t,
		yt,
		bt,
		xt
	].filter((e) => e !== P);
	return X.set(n, r), r;
}, Ct = (e, t) => We(e, t, St(typeof t == "object" && t ? t.locale : t)), wt = ut, Tt = (e, t) => dt(e, {
	...Y,
	isCookieEnabled: t
}), Et = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Dt = (e, t = D?.locales, n = D?.defaultLocale) => {
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
}, Z = n({
	get locale() {
		return wt() ?? D?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), Ot = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: o, isCookieEnabled: c }) => {
	let { locales: d, defaultLocale: f } = D ?? {}, [p, m] = u(() => e ?? wt() ?? t ?? f), [h, _] = u(e);
	e !== h && (_(e), e && e !== p && m(e)), s(() => {
		Et();
	}, []);
	let ee = a((e) => {
		if (p.toString() !== e.toString()) {
			if (!d?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			m(e), Tt(e, c);
		}
	}, [
		p,
		d,
		c
	]), v = i ?? ee, y = Dt(p), te = l(() => ({
		locale: y,
		setLocale: v,
		variant: n,
		disableEditor: o
	}), [
		y,
		v,
		n,
		o
	]);
	return g(Z.Provider, {
		value: te,
		children: r
	});
}, kt = ({ children: e, ...t }) => _(Ot, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), At = (e, t) => {
	let { locale: n, variant: r } = o(Z) ?? {}, i = t ?? n, a = i;
	return l(() => Ct(e, i), [e.key, a]);
}, Q = ((e, t) => {
	let { locale: n } = o(Z) ?? {};
	return nt(n, At(e), t);
}), jt = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && Te({ log: _e })(`${k("IntlProvider", Se)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), g(kt, {
	locale: e,
	children: t
}, String(e))), Mt = {
	key: "theme-toggle",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				themeModeAutoSystemClick: "Theme mode: auto (system). Click to switch to light mode.",
				themeModeLightClick: "Theme mode: light. Click to switch to dark mode.",
				themeModeDarkClick: "Theme mode: dark. Click to switch to auto (system) mode.",
				themeAuto: "Theme: Auto",
				themeDark: "Theme: Dark",
				themeLight: "Theme: Light"
			},
			fr: {
				themeModeAutoSystemClick: "Mode thématique : auto (système). Cliquez pour passer en mode clair.",
				themeModeLightClick: "Mode thématique : clair. Cliquez pour passer en mode sombre.",
				themeModeDarkClick: "Mode thématique : sombre. Cliquez pour passer en mode auto (système).",
				themeAuto: "Thème : Auto",
				themeDark: "Thème : Sombre",
				themeLight: "Thème : Clair"
			},
			es: {
				themeModeAutoSystemClick: "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.",
				themeModeLightClick: "Modo de tema: claro. Haz clic para cambiar al modo oscuro.",
				themeModeDarkClick: "Modo de tema: oscuro. Haz clic para cambiar al modo automático (sistema).",
				themeAuto: "Tema: Auto",
				themeDark: "Tema: Oscuro",
				themeLight: "Tema: Claro"
			},
			de: {
				themeModeAutoSystemClick: "Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.",
				themeModeLightClick: "Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.",
				themeModeDarkClick: "Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.",
				themeAuto: "Thema: Auto",
				themeDark: "Thema: Dunkel",
				themeLight: "Thema: Hell"
			},
			it: {
				themeModeAutoSystemClick: "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.",
				themeModeLightClick: "Modalità tema: chiara. Clicca per passare alla modalità scura.",
				themeModeDarkClick: "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).",
				themeAuto: "Tema: Auto",
				themeDark: "Tema: Scuro",
				themeLight: "Tema: Chiaro"
			},
			pt: {
				themeModeAutoSystemClick: "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
				themeModeLightClick: "Modo de tema: claro. Clique para mudar para o modo escuro.",
				themeModeDarkClick: "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).",
				themeAuto: "Tema: Auto",
				themeDark: "Tema: Escuro",
				themeLight: "Tema: Claro"
			},
			zh: {
				themeModeAutoSystemClick: "主题模式：自动（系统）。点击切换到亮色模式。",
				themeModeLightClick: "主题模式：亮色。点击切换到暗色模式。",
				themeModeDarkClick: "主题模式：暗色。点击切换到自动（系统）模式。",
				themeAuto: "主题：自动",
				themeDark: "主题：暗色",
				themeLight: "主题：亮色"
			},
			ja: {
				themeModeAutoSystemClick: "テーマモード: 自動 (システム)。クリックしてライトモードに切り替えます。",
				themeModeLightClick: "テーマモード: ライト。クリックしてダークモードに切り替えます。",
				themeModeDarkClick: "テーマモード: ダーク。クリックして自動 (システム) モードに切り替えます。",
				themeAuto: "テーマ: 自動",
				themeDark: "テーマ: ダーク",
				themeLight: "テーマ: ライト"
			},
			ko: {
				themeModeAutoSystemClick: "테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환합니다.",
				themeModeLightClick: "테마 모드: 라이트. 클릭하여 다크 모드로 전환합니다.",
				themeModeDarkClick: "테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환합니다.",
				themeAuto: "테마: 자동",
				themeDark: "테마: 다크",
				themeLight: "테마: 라이트"
			},
			ru: {
				themeModeAutoSystemClick: "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.",
				themeModeLightClick: "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.",
				themeModeDarkClick: "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.",
				themeAuto: "Тема: Авто",
				themeDark: "Тема: Темная",
				themeLight: "Тема: Светлая"
			}
		}
	}
};
function Nt() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Pt() {
	let e = Q(Mt), [t, n] = u("auto");
	s(() => {
		let e = Nt();
		n(e), $(e);
	}, []), s(() => {
		if (t !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => $("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	}, [t]);
	function r() {
		let e = t === "light" ? "dark" : t === "dark" ? "auto" : "light";
		n(e), $(e), window.localStorage.setItem("theme", e);
	}
	let i = e(t === "auto" ? "themeModeAutoSystemClick" : t === "light" ? "themeModeLightClick" : "themeModeDarkClick");
	return g("button", {
		type: "button",
		onClick: r,
		"aria-label": i,
		title: i,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: e(t === "auto" ? "themeAuto" : t === "dark" ? "themeDark" : "themeLight")
	});
}
var Ft = [
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
];
function It(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function Lt() {
	let e = p({ strict: !1 }).locale ?? "en", t = f(), n = (e) => {
		t({
			to: ".",
			params: (t) => ({
				...t,
				locale: e
			})
		});
	};
	return g("div", {
		className: "flex items-center gap-2",
		children: g("select", {
			value: e,
			onChange: (e) => n(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: Ft.map((e) => g("option", {
				value: e,
				children: It(e)
			}, e))
		})
	});
}
function Rt(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), c(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
function zt() {
	let e = Q(ee);
	Rt("Header");
	let [t, n] = u(!1), r = p({ strict: !1 }).locale ?? "en", i = [
		{
			to: "/$locale/products",
			label: e("products")
		},
		{
			to: "/$locale/pricing",
			label: e("pricing")
		},
		{
			to: "/$locale/team",
			label: e("team")
		},
		{
			to: "/$locale/blog",
			label: e("blog")
		},
		{
			to: "/$locale/careers",
			label: e("careers")
		},
		{
			to: "/$locale/faq",
			label: e("faq")
		},
		{
			to: "/$locale/contact",
			label: e("contact")
		},
		{
			to: "/$locale/settings",
			label: e("settings")
		}
	];
	return g("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: _("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [_("div", {
				className: "flex items-center gap-8",
				children: [g(d, {
					preload: !1,
					to: "/$locale",
					params: { locale: r },
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}), _("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						g(d, {
							preload: !1,
							to: "/$locale",
							params: { locale: r },
							activeOptions: { exact: !0 },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: e("home")
						}),
						g(d, {
							preload: !1,
							to: "/$locale/about",
							params: { locale: r },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: e("methodology")
						}),
						_("div", {
							className: "relative",
							children: [_("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								onClick: () => n(!t),
								children: [e("mockPages"), g(m, {
									size: 14,
									className: `transition-transform ${t ? "rotate-180" : ""}`
								})]
							}), t && g("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								children: g("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: i.map((e) => g(d, {
										preload: !1,
										to: e.to,
										params: { locale: r },
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => n(!1),
										children: e.label
									}, e.to))
								})
							})]
						})
					]
				})]
			}), _("div", {
				className: "flex items-center gap-4",
				children: [
					_("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [g("span", {
							className: "sr-only",
							children: e("goToGithub")
						}), g("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: g("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					g(Lt, {}),
					g(Pt, {})
				]
			})]
		})
	});
}
function Bt({ children: t }) {
	return g(e.Suspense, {
		fallback: null,
		children: g(jt, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		})
	});
}
function Vt() {
	return g(Bt, { children: g(zt, {}) });
}
export { Vt as default };
