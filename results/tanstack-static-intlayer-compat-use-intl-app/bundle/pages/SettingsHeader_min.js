import e, { Fragment as t, createContext as n, createElement as r, isValidElement as i, useContext as a, useEffect as o, useMemo as s, useRef as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { Fragment as p, jsxDEV as m } from "react/jsx-dev-runtime";
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
}, te = {
	key: "settings-header",
	content: {
		nodeType: "translation",
		translation: {
			en: { manageYourAccountPreferencesAnd: "Manage your account preferences and configuration." },
			fr: { manageYourAccountPreferencesAnd: "Gérez vos préférences de compte et votre configuration." },
			es: { manageYourAccountPreferencesAnd: "Gestiona las preferencias y la configuración de tu cuenta." },
			de: { manageYourAccountPreferencesAnd: "Verwalten Sie Ihre Kontoeinstellungen und Konfigurationen." },
			it: { manageYourAccountPreferencesAnd: "Gestisci le preferenze del tuo account e la configurazione." },
			pt: { manageYourAccountPreferencesAnd: "Gerencie as preferências de sua conta e a configuração." },
			zh: { manageYourAccountPreferencesAnd: "管理您的帐户首选项和配置。" },
			ja: { manageYourAccountPreferencesAnd: "アカウントの設定と構成を管理します。" },
			ko: { manageYourAccountPreferencesAnd: "계정 기본 설정 및 구성을 관리합니다." },
			ru: { manageYourAccountPreferencesAnd: "Управляйте настройками и конфигурацией своего аккаунта." }
		}
	}
}, h = /* @__PURE__ */ new WeakMap(), g = 0, ne = (e) => {
	if (!e) return "base";
	let t = h.get(e);
	if (t) return t;
	g += 1;
	let n = `p${g}`;
	return h.set(e, n), n;
}, re = 256, _ = /* @__PURE__ */ new WeakMap(), ie = (e) => typeof e == "object" && !!e, ae = (e, t, n) => `${e}_${t}_${ne(n)}`, oe = (e, t) => {
	if (!ie(e)) return { hit: !1 };
	let n = _.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, v = (e, t, n) => {
	if (!ie(e)) return n;
	let r = _.get(e);
	return r || (r = /* @__PURE__ */ new Map(), _.set(e, r)), r.size >= re && r.clear(), r.set(t, n), n;
}, se = "translation", ce = "enumeration", le = "plural", y = "insertion", ue = "object", de = "array", fe = "markdown", b = "html", pe = "gender", me = "select", x = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => x(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => x(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: de,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: ue,
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
}, he = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, ge = (e, t) => e[he(e, t) ?? "fallback"], _e = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), S = "default", ve = /[^A-Za-z0-9._&=-]/g, ye = /[^A-Za-z0-9._-]/g, be = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, C = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, be);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, xe = (e) => e === void 0 ? S : typeof e == "string" ? C(e, ve) : Object.keys(e).sort().map((t) => `${C(t, ye)}=${C(String(e[t]), ye)}`).join("&"), w = (e) => Array.isArray(e) ? e.length === 0 ? [S] : e.map(xe) : [xe(e)], Se = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? S : e[0] ?? "default";
}, Ce = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, we = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Te = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Ee = (e, t) => {
	if (!we(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? S : Se(w(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Ce(e, n, t, s)).map((t) => Te(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, De = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Oe = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? w(n).join(",") : String(n)}`;
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
}, ke = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, D = "\x1B[0m", Ae = "\x1B[34m", je = "\x1B[31m", Me = "\x1B[32m", Ne = "\x1B[38;5;3m", Pe = "\x1B[36m", Fe = (e) => e, Ie = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Fe(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Le = (e, t) => (n, r) => Ie(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), O = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? D : n : D}` : e, Re = (e, t = Ne, n = D) => [e].flat().map((e) => O(e, t, n)).join(", ");
O("✗", je), O("✓", Me), O("⏲", Ae);
var ze = () => ({}), Be = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Ve = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Be.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Ve(e ? `${e}.${String(n)}` : String(n)) }), He = /* @__PURE__ */ new Set(), k = (e, t, n) => {
	let r = ze()[e];
	return r ? rt(r, t, n) : (He.has(e) || (Le({ log: ke })(typeof window > "u" ? `Dictionary ${Re(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), He.add(e)), Ve(e));
}, Ue = 50, A = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Set(), We = (e) => {
	j.has(e) || (j.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Ge = {
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
}, Ke = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (We(e), Ge[e]);
};
function M(e, t, n) {
	let r = t ?? T?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = A.get(a);
	o || (o = /* @__PURE__ */ new Map(), A.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Ke(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Ue && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var qe = (e, t, n) => e[M("PluralRules", n).select(t)] ?? e.other, Je = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, N = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, P = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (N(e) && N(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : P(e[r], t[r]));
		return n;
	}
	return e;
}, Ye = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => P(e, t));
}, F = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Xe = (e) => {
	if (typeof e == "string") return e;
	if (F(e)) return e.nodeType === "html" ? e[b] : e[fe];
}, Ze = (e, t) => {
	if (typeof e == "string") return t;
	if (F(e)) {
		let n = e.nodeType === "html" ? b : fe;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, I = (e, t, n, r, i) => {
	let a = Ze(e, _e(Xe(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, L = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, R = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? L : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: se,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return Ye(o, e, t);
	}
}, z = L, Qe = (e) => L, B = L, $e = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? L : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: y }], i = e[y], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || F(e),
			transform: (e, n, r) => {
				if (F(e)) return (i) => I(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = _e(i, e);
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
}, V = L, H = L, U = (e) => L, et = L, tt = (e, t = !0) => [
	R(e ?? T.defaultLocale, t ? T.defaultLocale : void 0),
	z,
	B,
	$e,
	U(e ?? T.defaultLocale),
	et,
	V,
	H
], nt = (e, t, n = []) => x(e, {
	...t,
	plugins: n
}), rt = (e, t, n) => {
	let { locale: r, selector: i } = De(t), a = ae(r ?? T.defaultLocale, Oe(i), n), o = oe(e, a);
	if (o.hit) return o.content;
	let s = n ?? tt(r), c = Ee(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return nt(e.content, t, s);
	};
	return c === null ? v(e, a, null) : Array.isArray(c) ? v(e, a, c.map(l)) : v(e, a, l(c));
}, it = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", at = /\{\{\s*(.*?)\s*\}\}/g, ot = (e, t = {}) => {
	if (!Object.values(t).some(it)) return {
		isSimple: !0,
		parts: e.replace(at, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(at), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, W = (e, t, n = ".") => {
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
}, st = [
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
}, ct = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? M("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? M("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : M("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return M("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, lt = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = G(t, r);
	return o === void 0 ? e : i ? ct(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = G(t, r);
	return o === void 0 ? e : ct(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = G(t, n);
	return r === void 0 ? e : String(r);
}), K = (e, t) => e[t] ?? e.count ?? e.n, q = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return lt(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return q(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(q(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return q(r[y], t, n);
	if (r.nodeType === "html") return q(r[b], t, n);
	if (r.nodeType === "plural") {
		let e = r[le];
		return q(qe(e, Number(K(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[ce], i = st.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) st.includes(t) || (o[t] = n);
		let s = K(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = M("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? ge(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return q(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[me], i = K(t, typeof r.variable == "string" ? r.variable : "value");
		return q(Je(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[pe];
		return q(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, ut = (e, t = {}, n = "en") => {
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
}, dt = (e = {}) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) typeof i == "function" ? n[r] = i : t[r] = i;
	return {
		scalarValues: t,
		renderers: n
	};
}, ft = (e, n) => e.map((e, r) => {
	if (typeof e == "string") return e;
	let i = ft(e.children, n), a = n[e.tag];
	return typeof a == "function" ? d(t, { children: a(i) }, r) : d(t, { children: i }, r);
}), pt = (e, t) => e.map((e) => {
	if (typeof e == "string") return e;
	let n = pt(e.children, t), r = t[e.tag];
	return typeof r == "function" ? r(n) : n;
}).join(""), mt = (e, t) => {
	let [n, ...r] = (t ?? "").split("."), i = r.join(".");
	return _t(e, (t) => ht(e, n ?? "", i, t), (e) => t ? `${t}.${e}` : e);
}, ht = (e, t, n, r) => {
	let i = t, a = n ? `${n}.${r}` : r, o = ze();
	if (!i) {
		let [t, ...n] = r.split(".");
		if (i = t ?? r, a = n.join("."), !o[i]) for (let t of Object.keys(o)) try {
			let n = W(k(t, e), r);
			if (n !== void 0) return n;
		} catch {}
	}
	try {
		return W(k(i, e), a);
	} catch {
		return;
	}
}, gt = (e, t, n) => {
	let r = (e) => n ? `${n}.${e}` : e;
	return _t(e, (e) => W(t, r(e)), r);
}, _t = (e, t, n) => {
	let r = (n, r = {}) => {
		let i = t(n);
		if (i != null) return ut(i, r, e);
	};
	return Object.assign((e, t) => r(e, t) ?? n(e), {
		has: (e) => t(e) !== void 0,
		raw: (e) => t(e),
		rich: (e, t) => {
			let { scalarValues: i, renderers: a } = dt(t), o = r(e, i);
			return o === void 0 ? n(e) : d(u, { children: ft(J(o), a) });
		},
		markup: (e, t) => {
			let { scalarValues: i, renderers: a } = dt(t), o = r(e, i);
			return o === void 0 ? n(e) : pt(J(o), a);
		}
	});
}, vt = ({ children: e, value: t, additionalProps: n }) => {
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
}, yt = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => vt({
		...n,
		value: n.children,
		children: n.children
	})
}, bt = L, xt = (e, n) => {
	let i = ot(e, n);
	return i.isSimple ? i.parts : r(t, null, ...i.parts.map((e, n) => r(t, { key: n }, e)));
}, St = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? L : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: y }], i = e[y], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || F(e),
			transform: (e, n, r) => {
				if (F(e)) return (i) => I(e, i, n, t.plugins, r);
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
}, Ct = L, wt = L, Y = /* @__PURE__ */ new Map(), Tt = (e, t = !0) => {
	let n = `${e ?? T.defaultLocale}_${t}`;
	if (Y.has(n)) return Y.get(n);
	let r = [
		R(e ?? T.defaultLocale, t ? T.defaultLocale : void 0),
		z,
		Qe(e ?? T.defaultLocale),
		B,
		U(e ?? T.defaultLocale),
		et,
		V,
		H,
		yt,
		bt,
		St,
		Ct,
		wt
	];
	return Y.set(n, r), r;
}, Et = (e, t) => rt(e, t, Tt(typeof t == "object" && t ? t.locale : t)), Dt = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, Ot = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = Dt(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, X = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, kt = (e = Z) => {
	let { locales: t } = T;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!X) for (let t = 0; t < (E.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(E.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, At = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !X && E.storage.cookies) for (let n = 0; n < E.storage.cookies.length; n++) {
		let { name: r, attributes: i } = E.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: Dt(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, Ot(r, e, i));
			} catch {}
		}
	}
}, jt = kt(Z), Mt = (e, t) => At(e, {
	...Z,
	isCookieEnabled: t
}), Nt = () => {
	let { locale: e } = a(Q) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, Pt = ({ children: e }) => (Nt(), e), Ft = () => {
	let { locale: e } = a(Q) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, It = ({ children: e }) => (Ft(), e), Lt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Rt = (e, t = T?.locales, n = T?.defaultLocale) => {
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
	locale: jt ?? T?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), zt = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: u } = T ?? {}, [f, p] = l(e ?? jt ?? t ?? u);
	o(() => {
		e && e !== f && p(e);
	}, [e]), o(() => {
		Lt();
	}, []);
	let m = i ?? ((e) => {
		if (f.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), Mt(e, s);
		}
	}), ee = Rt(f);
	return d(Q.Provider, {
		value: {
			locale: ee,
			setLocale: m,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, Bt = ({ children: e, ...t }) => f(zt, {
	...t,
	children: [
		d(Pt, {}),
		d(It, {}),
		e
	]
}), Vt = (e, t) => {
	let { locale: n, variant: r } = a(Q) ?? {}, i = t ?? n, o = typeof i == "object" && i ? `${i.locale ?? ""}|${Oe(i)}` : i;
	return s(() => Et(e, i), [e.key, o]);
}, Ht = ((e, t) => {
	let { locale: n } = a(Q) ?? {};
	return gt(n, Vt(e), t);
}), Ut = ({ locale: e, children: t, messages: n, formats: r, now: i, timeZone: a, onError: o, getMessageFallback: s }) => (n !== void 0 && Le({ log: ke })(`${O("IntlProvider", Pe)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`), d(Bt, {
	locale: e,
	children: t
}, String(e))), Wt = ((e) => {
	let { locale: t } = a(Q) ?? {};
	return s(() => mt(t, e), [t, e]);
}), Gt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/MockBanner.tsx", Kt = () => {
	let e = Wt();
	return m("div", {
		className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
		children: e("mockBanner")
	}, void 0, !1, {
		fileName: Gt,
		lineNumber: 6,
		columnNumber: 5
	}, void 0);
}, $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/pages/settings/SettingsHeader.tsx";
function qt() {
	let e = Ht(ee), t = Ht(te);
	return m(p, { children: [
		m(Kt, {}, void 0, !1, {
			fileName: $,
			lineNumber: 9,
			columnNumber: 7
		}, this),
		m("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: e("settings")
		}, void 0, !1, {
			fileName: $,
			lineNumber: 10,
			columnNumber: 7
		}, this),
		m("p", {
			className: "mb-8 text-muted-foreground",
			children: t("manageYourAccountPreferencesAnd")
		}, void 0, !1, {
			fileName: $,
			lineNumber: 13,
			columnNumber: 7
		}, this)
	] }, void 0, !0, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var Jt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/scripts/Wrapper.tsx";
function Yt({ children: t }) {
	return m(e.Suspense, {
		fallback: null,
		children: m(Ut, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children: t
		}, void 0, !1, {
			fileName: Jt,
			lineNumber: 9,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Jt,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var Xt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-use-intl-app/src/components/pages/settings/SettingsHeader.wrapper.tsx";
function Zt() {
	return m(Yt, { children: m(qt, {}, void 0, !1, {
		fileName: Xt,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: Xt,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Zt as default };
