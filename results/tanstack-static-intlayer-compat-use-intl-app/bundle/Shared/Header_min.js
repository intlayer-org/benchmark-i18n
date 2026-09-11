import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useContext as a, useEffect as o, useLayoutEffect as s, useMemo as c, useRef as l, useState as u } from "react";
import { Link as d, useNavigate as f, useParams as p } from "@tanstack/react-router";
import { ChevronDown as ee } from "lucide-react";
import { Fragment as te, jsx as m, jsxs as ne } from "react/jsx-runtime";
import { jsxDEV as h } from "react/jsx-dev-runtime";
var re = {
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
}, ie = /* @__PURE__ */ new WeakMap(), ae = 0, oe = (e) => {
	if (!e) return "base";
	let t = ie.get(e);
	if (t) return t;
	ae += 1;
	let n = `p${ae}`;
	return ie.set(e, n), n;
}, se = 256, g = /* @__PURE__ */ new WeakMap(), _ = (e) => typeof e == "object" && !!e, ce = (e, t, n) => `${e}_${t}_${oe(n)}`, le = (e, t) => {
	if (!_(e)) return { hit: !1 };
	let n = g.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, v = (e, t, n) => {
	if (!_(e)) return n;
	let r = g.get(e);
	return r || (r = /* @__PURE__ */ new Map(), g.set(e, r)), r.size >= se && r.clear(), r.set(t, n), n;
}, ue = "translation", de = "enumeration", fe = "plural", y = "insertion", pe = "object", me = "array", he = "markdown", b = "html", ge = "gender", _e = "select", x = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => x(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => x(e, {
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
}, ve = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, ye = (e, t) => e[ve(e, t) ?? "fallback"], S = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), C = "default", be = /[^A-Za-z0-9._&=-]/g, xe = /[^A-Za-z0-9._-]/g, Se = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, w = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Se);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, Ce = (e) => e === void 0 ? C : typeof e == "string" ? w(e, be) : Object.keys(e).sort().map((t) => `${w(t, xe)}=${w(String(e[t]), xe)}`).join("&"), T = (e) => Array.isArray(e) ? e.length === 0 ? [C] : e.map(Ce) : [Ce(e)], we = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? C : e[0] ?? "default";
}, Te = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Ee = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, De = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Oe = (e, t) => {
	if (!Ee(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? C : we(T(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Te(e, n, t, s)).map((t) => De(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, ke = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, E = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? T(n).join(",") : String(n)}`;
}).join("|") : "", D = {
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
}, Ae = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, je = "\x1B[0m", Me = "\x1B[34m", Ne = "\x1B[31m", Pe = "\x1B[32m", Fe = "\x1B[36m", Ie = (e) => e, Le = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Ie(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Re = (e, t) => (n, r) => Le(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), k = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? je : n : je}` : e;
k("✗", Ne), k("✓", Pe), k("⏲", Me);
var ze = 50, Be = /* @__PURE__ */ new Map(), Ve = /* @__PURE__ */ new Set(), He = (e) => {
	Ve.has(e) || (Ve.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Ue = {
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
}, We = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (He(e), Ue[e]);
};
function A(e, t, n) {
	let r = t ?? D?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = Be.get(a);
	o || (o = /* @__PURE__ */ new Map(), Be.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? We(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > ze && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Ge = (e, t, n) => e[A("PluralRules", n).select(t)] ?? e.other, Ke = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, qe = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, j = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (qe(e) && qe(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : j(e[r], t[r]));
		return n;
	}
	return e;
}, Je = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => j(e, t));
}, M = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ye = (e) => {
	if (typeof e == "string") return e;
	if (M(e)) return e.nodeType === "html" ? e[b] : e[he];
}, Xe = (e, t) => {
	if (typeof e == "string") return t;
	if (M(e)) {
		let n = e.nodeType === "html" ? b : he;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, N = (e, t, n, r, i) => {
	let a = Xe(e, S(Ye(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, P = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, F = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? P : {
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
		return Je(o, e, t);
	}
}, I = P, Ze = (e) => P, L = P, Qe = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? P : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: y }], i = e[y], a = {
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
					let a = S(i, e);
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
}, R = P, z = P, B = (e) => P, V = P, $e = (e, t = !0) => [
	F(e ?? D.defaultLocale, t ? D.defaultLocale : void 0),
	I,
	L,
	Qe,
	B(e ?? D.defaultLocale),
	V,
	R,
	z
], et = (e, t, n = []) => x(e, {
	...t,
	plugins: n
}), tt = (e, t, n) => {
	let { locale: r, selector: i } = ke(t), a = ce(r ?? D.defaultLocale, E(i), n), o = le(e, a);
	if (o.hit) return o.content;
	let s = n ?? $e(r), c = Oe(e, i), l = (e) => {
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
}, nt = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", H = /\{\{\s*(.*?)\s*\}\}/g, rt = (e, t = {}) => {
	if (!Object.values(t).some(nt)) return {
		isSimple: !0,
		parts: e.replace(H, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(H), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, it = (e, t, n = ".") => {
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
}, U = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], W = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, at = (e, t, n, r) => {
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
}, ot = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = W(t, r);
	return o === void 0 ? e : i ? at(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = W(t, r);
	return o === void 0 ? e : at(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = W(t, n);
	return r === void 0 ? e : String(r);
}), G = (e, t) => e[t] ?? e.count ?? e.n, K = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return ot(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return K(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(K(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return K(r[y], t, n);
	if (r.nodeType === "html") return K(r[b], t, n);
	if (r.nodeType === "plural") {
		let e = r[fe];
		return K(Ge(e, Number(G(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[de], i = U.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) U.includes(t) || (o[t] = n);
		let s = G(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = A("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? ye(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return K(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[_e], i = G(t, typeof r.variable == "string" ? r.variable : "value");
		return K(Ke(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[ge];
		return K(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, st = (e, t = {}, n = "en") => {
	let r = K(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, q = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : t.push({
			tag: o,
			children: q(s)
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, ct = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, lt = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = lt(e.children, n), a = n[e.tag];
	return typeof a == "function" ? m(t, { children: a(i) }, r) : m(t, { children: i }, r);
}), ut = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = ut(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), dt = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return ft(e, (e) => it(t, r(e)), r);
}, ft = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return st(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = ct(t), o = r(e, i);
			return o === void 0 ? n(e) : m(te, { children: lt(q(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = ct(t), o = r(e, i);
			return o === void 0 ? n(e) : ut(q(o), a);
		}
	});
}, pt = ({ children: e, value: t, additionalProps: n }) => {
	let r = i(e) ? e : m(te, { children: e });
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
}, mt = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => pt({
		...n,
		value: n.children,
		children: n.children
	})
}, ht = P, gt = (e, n) => {
	let i = rt(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, _t = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? P : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: y }], i = e[y], a = {
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
					let a = gt(i, e);
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
}, vt = P, yt = P, J = /* @__PURE__ */ new Map(), bt = (e, t = !0) => {
	let n = `${e ?? D.defaultLocale}_${t}`;
	if (J.has(n)) return J.get(n);
	let r = [
		F(e ?? D.defaultLocale, t ? D.defaultLocale : void 0),
		I,
		Ze(e ?? D.defaultLocale),
		L,
		B(e ?? D.defaultLocale),
		V,
		R,
		z,
		mt,
		ht,
		_t,
		vt,
		yt
	];
	return J.set(n, r), r;
}, xt = (e, t) => tt(e, t, bt(typeof t == "object" && t ? t.locale : t)), St = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, Ct = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = St(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, wt = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, Tt = (e = Y) => {
	let { locales: t } = D;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!wt) for (let t = 0; t < (O.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(O.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, Et = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !wt && O.storage.cookies) for (let n = 0; n < O.storage.cookies.length; n++) {
		let { name: r, attributes: i } = O.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: St(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, Ct(r, e, i));
			} catch {}
		}
	}
}, Dt = Tt(Y), Ot = (e, t) => Et(e, {
	...Y,
	isCookieEnabled: t
}), kt = () => {
	let { locale: e } = a(X) ?? {}, t = l(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, At = ({ children: e }) => (kt(), e), jt = () => {
	let { locale: e } = a(X) ?? {}, t = l(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, Mt = ({ children: e }) => (jt(), e), Nt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Pt = (e, t = D?.locales, n = D?.defaultLocale) => {
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
}, X = n({
	locale: Dt ?? D?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Ft = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: l } = D ?? {}, [d, f] = u(e ?? Dt ?? t ?? l);
	o(() => {
		e && e !== d && f(e);
	}, [e]), o(() => {
		Nt();
	}, []);
	let p = i ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			f(e), Ot(e, s);
		}
	}), ee = Pt(d);
	return m(X.Provider, {
		value: {
			locale: ee,
			setLocale: p,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, It = ({ children: e, ...t }) => ne(Ft, {
	...t,
	children: [
		m(At, {}),
		m(Mt, {}),
		e
	]
}), Lt = (e, t) => {
	let { locale: n, variant: r } = a(X) ?? {}, i = t ?? n, o = typeof i == "object" && i ? `${i.locale ?? ""}|${E(i)}` : i;
	return c(() => xt(e, i), [e.key, o]);
}, Rt = ((e, t) => {
	let { locale: n } = a(X) ?? {};
	return dt(n, Lt(e), t);
}), zt = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && Re({ log: Ae })(`${k("IntlProvider", Fe)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), m(It, {
	locale: e,
	children: t
}, String(e))), Bt = {
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
}, Vt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/ThemeToggle.tsx";
function Ht() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function Z(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Ut() {
	let e = Rt(Bt), [t, n] = u("auto");
	o(() => {
		let e = Ht();
		n(e), Z(e);
	}, []), o(() => {
		if (t !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => Z("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	}, [t]);
	function r() {
		let e = t === "light" ? "dark" : t === "dark" ? "auto" : "light";
		n(e), Z(e), window.localStorage.setItem("theme", e);
	}
	let i = e(t === "auto" ? "themeModeAutoSystemClick" : t === "light" ? "themeModeLightClick" : "themeModeDarkClick");
	return h("button", {
		type: "button",
		onClick: r,
		"aria-label": i,
		title: i,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: e(t === "auto" ? "themeAuto" : t === "dark" ? "themeDark" : "themeLight")
	}, void 0, !1, {
		fileName: Vt,
		lineNumber: 75,
		columnNumber: 5
	}, this);
}
var Wt = [
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
function Gt(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
var Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/LocaleSwitcher.tsx";
function Kt() {
	let e = p({ strict: !1 }).locale ?? "en", t = f(), n = (e) => {
		t({
			to: ".",
			params: (t) => ({
				...t,
				locale: e
			})
		});
	};
	return h("div", {
		className: "flex items-center gap-2",
		children: h("select", {
			value: e,
			onChange: (e) => n(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: Wt.map((e) => h("option", {
				value: e,
				children: Gt(e)
			}, e, !1, {
				fileName: Q,
				lineNumber: 24,
				columnNumber: 11
			}, this))
		}, void 0, !1, {
			fileName: Q,
			lineNumber: 18,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 17,
		columnNumber: 5
	}, this);
}
function qt(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), s(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/Header.tsx";
function Jt() {
	let e = Rt(re);
	qt("Header");
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
	return h("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: h("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [h("div", {
				className: "flex items-center gap-8",
				children: [h(d, {
					preload: !1,
					to: "/$locale",
					params: { locale: r },
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}, void 0, !1, {
					fileName: $,
					lineNumber: 32,
					columnNumber: 11
				}, this), h("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						h(d, {
							preload: !1,
							to: "/$locale",
							params: { locale: r },
							activeOptions: { exact: !0 },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: e("home")
						}, void 0, !1, {
							fileName: $,
							lineNumber: 42,
							columnNumber: 13
						}, this),
						h(d, {
							preload: !1,
							to: "/$locale/about",
							params: { locale: r },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: e("methodology")
						}, void 0, !1, {
							fileName: $,
							lineNumber: 52,
							columnNumber: 13
						}, this),
						h("div", {
							className: "relative",
							children: [h("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								onClick: () => n(!t),
								children: [e("mockPages"), h(ee, {
									size: 14,
									className: `transition-transform ${t ? "rotate-180" : ""}`
								}, void 0, !1, {
									fileName: $,
									lineNumber: 72,
									columnNumber: 17
								}, this)]
							}, void 0, !0, {
								fileName: $,
								lineNumber: 64,
								columnNumber: 15
							}, this), t && h("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								children: h("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: i.map((e) => h(d, {
										preload: !1,
										to: e.to,
										params: { locale: r },
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => n(!1),
										children: e.label
									}, e.to, !1, {
										fileName: $,
										lineNumber: 86,
										columnNumber: 23
									}, this))
								}, void 0, !1, {
									fileName: $,
									lineNumber: 84,
									columnNumber: 19
								}, this)
							}, void 0, !1, {
								fileName: $,
								lineNumber: 79,
								columnNumber: 17
							}, this)]
						}, void 0, !0, {
							fileName: $,
							lineNumber: 63,
							columnNumber: 13
						}, this)
					]
				}, void 0, !0, {
					fileName: $,
					lineNumber: 41,
					columnNumber: 11
				}, this)]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 31,
				columnNumber: 9
			}, this), h("div", {
				className: "flex items-center gap-4",
				children: [
					h("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [h("span", {
							className: "sr-only",
							children: e("goToGithub")
						}, void 0, !1, {
							fileName: $,
							lineNumber: 111,
							columnNumber: 13
						}, this), h("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: h("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							}, void 0, !1, {
								fileName: $,
								lineNumber: 113,
								columnNumber: 15
							}, this)
						}, void 0, !1, {
							fileName: $,
							lineNumber: 112,
							columnNumber: 13
						}, this)]
					}, void 0, !0, {
						fileName: $,
						lineNumber: 105,
						columnNumber: 11
					}, this),
					h(Kt, {}, void 0, !1, {
						fileName: $,
						lineNumber: 119,
						columnNumber: 11
					}, this),
					h(Ut, {}, void 0, !1, {
						fileName: $,
						lineNumber: 120,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 104,
				columnNumber: 9
			}, this)]
		}, void 0, !0, {
			fileName: $,
			lineNumber: 30,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: $,
		lineNumber: 29,
		columnNumber: 5
	}, this);
}
var Yt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/scripts/Wrapper.tsx";
function Xt({ children: t }) {
	return h(e.Suspense, {
		fallback: null,
		children: h(zt, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		}, void 0, !1, {
			fileName: Yt,
			lineNumber: 9,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Yt,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var Zt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/Header.wrapper.tsx";
function Qt() {
	return h(Xt, { children: h(Jt, {}, void 0, !1, {
		fileName: Zt,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: Zt,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Qt as default };
