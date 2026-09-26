import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useCallback as a, useContext as o, useEffect as s, useMemo as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
var p = {
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
}, m = {
	key: "products-header",
	content: {
		nodeType: "translation",
		translation: {
			en: { toolsAndServicesToStreamline: "Tools and services to streamline your internationalization workflow." },
			fr: { toolsAndServicesToStreamline: "Des outils et services pour rationaliser votre flux de travail d'internationalisation." },
			es: { toolsAndServicesToStreamline: "Herramientas y servicios para agilizar tu flujo de trabajo de internacionalización." },
			de: { toolsAndServicesToStreamline: "Tools und Services zur Optimierung Ihres Internationalisierungs-Worflows." },
			it: { toolsAndServicesToStreamline: "Strumenti e servizi per snellire il flusso di lavoro dell'internazionalizzazione." },
			pt: { toolsAndServicesToStreamline: "Ferramentas e serviços para agilizar seu fluxo de trabalho de internacionalização." },
			zh: { toolsAndServicesToStreamline: "简化国际化工作流程的工具和服务。" },
			ja: { toolsAndServicesToStreamline: "国際化ワークフローを合理化するためのツールとサービス。" },
			ko: { toolsAndServicesToStreamline: "국제화 워크플로우를 간소화하기 위한 도구 및 서비스." },
			ru: { toolsAndServicesToStreamline: "Инструменты и услуги для оптимизации рабочего процесса интернационализации." }
		}
	}
}, h = /* @__PURE__ */ new WeakMap(), g = 0, ee = (e) => {
	if (!e) return "base";
	let t = h.get(e);
	if (t) return t;
	g += 1;
	let n = `p${g}`;
	return h.set(e, n), n;
}, te = 256, _ = /* @__PURE__ */ new WeakMap(), v = (e) => typeof e == "object" && !!e, ne = (e, t, n) => `${e}_${t}_${ee(n)}`, re = (e, t) => {
	if (!v(e)) return { hit: !1 };
	let n = _.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, y = (e, t, n) => {
	if (!v(e)) return n;
	let r = _.get(e);
	return r || (r = /* @__PURE__ */ new Map(), _.set(e, r)), r.size >= te && r.clear(), r.set(t, n), n;
}, ie = "translation", b = "enumeration", x = "plural", ae = "condition", S = "insertion", oe = "object", se = "array", ce = "markdown", C = "html", le = "gender", ue = "select", w = (e, t, n) => ({
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
}, de = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, fe = (e, t) => e[de(e, t) ?? "fallback"], pe = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), E = {
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
}, O = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, k = "\x1B[0m", me = "\x1B[34m", he = "\x1B[31m", ge = "\x1B[32m", _e = "\x1B[38;5;3m", ve = "\x1B[36m", ye = (e) => e, be = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = ye(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, A = (e, t) => (n, r) => be(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), j = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? k : n : k}` : e, xe = (e, t = _e, n = k) => [e].flat().map((e) => j(e, t, n)).join(", ");
j("✗", he), j("✓", ge), j("⏲", me);
var M = () => ({}), Se = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), N = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Se.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : N(e ? `${e}.${String(n)}` : String(n)) }), P = /* @__PURE__ */ new Set(), F = (e, t, n) => {
	let r = M()[e];
	return r ? Ke(r, t, n) : (P.has(e) || (A({ log: O })(typeof window > "u" ? `Dictionary ${xe(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), P.add(e)), N(e));
}, Ce = 50, I = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Set(), we = (e) => {
	L.has(e) || (L.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Te = {
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
}, Ee = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (we(e), Te[e]);
};
function R(e, t, n) {
	let r = t ?? E?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = I.get(a);
	o || (o = /* @__PURE__ */ new Map(), I.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Ee(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Ce && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var De = (e, t, n) => e[R("PluralRules", n).select(t)] ?? e.other, Oe = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, z = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, B = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !z(e) || !z(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? B(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, ke = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => B(e, t));
}, V = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ae = (e) => {
	if (typeof e == "string") return e;
	if (V(e)) return e.nodeType === "html" ? e[C] : e[ce];
}, je = (e, t) => {
	if (typeof e == "string") return t;
	if (V(e)) {
		let n = e.nodeType === "html" ? C : ce;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, H = (e, t, n, r, i) => {
	let a = je(e, pe(Ae(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, U = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Me = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, Ne = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? U : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = ke(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: ie,
				key: e
			}]
		});
	}
}, Pe = U, Fe = (e) => U, W = U, Ie = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? U : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: S }], i = e[S], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || V(e),
			transform: (e, n, r) => {
				if (V(e)) return (i) => H(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = pe(i, e);
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
}, Le = [
	b,
	ae,
	x,
	le,
	ue
], Re = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !Le.includes(i)) return t;
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
		return !r && Me(i) ? i(n) : i;
	};
}, ze = (e, t) => typeof t == "function" && Le.includes(e?.nodeType ?? "") ? (n) => Re(e, t, n) : t, Be = U, Ve = U, He = (e) => U, Ue = U, We = (e, t = !0) => [
	Ne(e ?? E.defaultLocale, t ? E.defaultLocale : void 0),
	Pe,
	Fe(e ?? E.defaultLocale),
	W,
	Ie,
	He(e ?? E.defaultLocale),
	Ue,
	Be,
	Ve
].filter((e) => e !== U), Ge = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), G = /* @__PURE__ */ new WeakSet(), Ke = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = ne(r ?? E.defaultLocale, "", n), o = re(e, a);
	if (o.hit) return o.content;
	let s = n ?? We(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !G.has(e)
		};
		G.add(e);
		try {
			return Ge(e.content, t, s);
		} finally {
			t.eager && G.delete(e);
		}
	};
	return c === null ? y(e, a, null) : Array.isArray(c) ? y(e, a, c.map(l)) : y(e, a, l(c));
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
}, K = (e, t, n = ".") => {
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
], q = (e, t) => {
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
			return n === "percent" ? R("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? R("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : R("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return R("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Qe = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = q(t, r);
	return o === void 0 ? e : i ? Ze(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = q(t, r);
	return o === void 0 ? e : Ze(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = q(t, n);
	return r === void 0 ? e : String(r);
}), J = (e, t) => e[t] ?? e.count ?? e.n, Y = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Qe(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return Y(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(Y(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return Y(r[S], t, n);
	if (r.nodeType === "html") return Y(r[C], t, n);
	if (r.nodeType === "plural") {
		let e = r[x];
		return Y(De(e, Number(J(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[b], i = Xe.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Xe.includes(t) || (o[t] = n);
		let s = J(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = R("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? fe(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return Y(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[ue], i = J(t, typeof r.variable == "string" ? r.variable : "value");
		return Y(Oe(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[le];
		return Y(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, $e = (e, t = {}, n = "en") => {
	let r = Y(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, X = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : o && t.push({
			tag: o,
			children: X(s ?? "")
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
	let i = t, a = n ? `${n}.${r}` : r, o = M();
	if (!i) {
		let [t, ...n] = r.split(".");
		if (i = t ?? r, a = n.join("."), !o[i]) for (let t of Object.keys(o)) try {
			let n = K(F(t, e), r);
			if (n !== void 0) return n;
		} catch {}
	}
	try {
		return K(F(i, e), a);
	} catch {
		return;
	}
}, at = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return ot(e, (e) => K(t, r(e)), r);
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
			return o === void 0 ? n(e) : d(u, { children: tt(X(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = et(t), o = r(e, i);
			return o === void 0 ? n(e) : nt(X(o), a);
		}
	});
}, st = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, ct = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = st(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, lt = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, ut = (e = Z) => {
	let { locales: t } = E;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!lt) for (let t = 0; t < (D.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(D.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, dt = !1, ft, pt = () => typeof window > "u" ? ut(Z) : (dt ||= (ft = ut(Z), !0), ft), mt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (dt = !1, !lt && D.storage.cookies)) for (let n = 0; n < D.storage.cookies.length; n++) {
		let { name: r, attributes: i } = D.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: st(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ct(r, e, i));
			} catch {}
		}
	}
}, ht = /* @__PURE__ */ new Map(), gt = (e, t) => Object.create(new Proxy(e, {
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
}), _t = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = ht.get(t);
	i || (i = /* @__PURE__ */ new Map(), ht.set(t, i));
	let a = i.get(r);
	return a || (a = gt(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, vt = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...i(e) ? e : d(u, { children: e }),
	value: t,
	...n
}, _t(t)), yt = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => vt({
		value: t.children,
		children: t.children
	})
}, bt = U, xt = (e, n) => {
	let i = Ye(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, St = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? U : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: S }], i = e[S], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || V(e),
			transform: (e, n, r) => {
				if (V(e)) return (i) => H(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = xt(i, e);
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
}, Ct = U, wt = U, Q = /* @__PURE__ */ new Map(), Tt = (e, t = !0) => {
	let n = `${e ?? E.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		yt,
		Ne(e ?? E.defaultLocale, t ? E.defaultLocale : void 0),
		Pe,
		Fe(e ?? E.defaultLocale),
		W,
		He(e ?? E.defaultLocale),
		Ue,
		Be,
		Ve,
		bt,
		St,
		Ct,
		wt
	].filter((e) => e !== U);
	return Q.set(n, r), r;
}, Et = (e, t) => Ke(e, t, Tt(typeof t == "object" && t ? t.locale : t)), Dt = pt, Ot = (e, t) => mt(e, {
	...Z,
	isCookieEnabled: t
}), kt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, At = (e, t = E?.locales, n = E?.defaultLocale) => {
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
		return Dt() ?? E?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), jt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: o, isCookieEnabled: u }) => {
	let { locales: f, defaultLocale: p } = E ?? {}, [m, h] = l(() => e ?? Dt() ?? t ?? p), [g, ee] = l(e);
	e !== g && (ee(e), e && e !== m && h(e)), s(() => {
		kt();
	}, []);
	let te = a((e) => {
		if (m.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			h(e), Ot(e, u);
		}
	}, [
		m,
		f,
		u
	]), _ = i ?? te, v = At(m), ne = c(() => ({
		locale: v,
		setLocale: _,
		variant: n,
		disableEditor: o
	}), [
		v,
		_,
		n,
		o
	]);
	return d($.Provider, {
		value: ne,
		children: r
	});
}, Mt = ({ children: e, ...t }) => f(jt, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), Nt = (e, t) => {
	let { locale: n, variant: r } = o($) ?? {}, i = t ?? n, a = i;
	return c(() => Et(e, i), [e.key, a]);
}, Pt = ((e, t) => {
	let { locale: n } = o($) ?? {};
	return at(n, Nt(e), t);
}), Ft = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && A({ log: O })(`${j("IntlProvider", ve)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), d(Mt, {
	locale: e,
	children: t
}, String(e))), It = ((e) => {
	let { locale: t } = o($) ?? {};
	return c(() => rt(t, e), [t, e]);
}), Lt = () => {
	let e = It();
	return d("div", {
		className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
		children: e("mockBanner")
	});
};
function Rt() {
	let e = Pt(p), t = Pt(m);
	return f(u, { children: [
		d(Lt, {}),
		d("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: e("products")
		}),
		d("p", {
			className: "mb-10 text-muted-foreground",
			children: t("toolsAndServicesToStreamline")
		})
	] });
}
function zt({ children: t }) {
	return d(e.Suspense, {
		fallback: null,
		children: d(Ft, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		})
	});
}
function Bt() {
	return d(zt, { children: d(Rt, {}) });
}
export { Bt as default };
