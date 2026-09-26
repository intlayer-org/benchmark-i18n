import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useLayoutEffect as s, useMemo as c, useState as l } from "react";
import { Link as u, useNavigate as d, useParams as f } from "@tanstack/react-router";
import { ChevronDown as p } from "lucide-react";
import { Fragment as m, jsx as h, jsxs as g } from "react/jsx-runtime";
var _ = {
	key: "header",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				products: "Products",
				pricing: "Pricing",
				team: "Team",
				careers: "Careers",
				faq: "FAQ",
				contact: "Contact",
				settings: "Settings",
				i18nBench: "i18n Bench",
				home: "Home",
				methodology: "Methodology",
				mockPages: "Mock Pages",
				goToGithub: "Go to GitHub",
				blog: "Blog"
			},
			fr: {
				products: "Produits",
				pricing: "Tarifs",
				team: "Équipe",
				careers: "Carrières",
				faq: "FAQ",
				contact: "Contact",
				settings: "Paramètres",
				i18nBench: "Bench i18n",
				home: "Accueil",
				methodology: "Méthodologie",
				mockPages: "Pages de test",
				goToGithub: "Aller sur GitHub",
				blog: "Blog"
			},
			es: {
				products: "Productos",
				pricing: "Precios",
				team: "Equipo",
				careers: "Carreras",
				faq: "FAQ",
				contact: "Contacto",
				settings: "Ajustes",
				i18nBench: "i18n Bench",
				home: "Inicio",
				methodology: "Metodología",
				mockPages: "Páginas de prueba",
				goToGithub: "Ir a GitHub",
				blog: "Blog"
			},
			de: {
				products: "Produkte",
				pricing: "Preise",
				team: "Team",
				careers: "Karriere",
				faq: "FAQ",
				contact: "Kontakt",
				settings: "Einstellungen",
				i18nBench: "i18n Bench",
				home: "Startseite",
				methodology: "Methodik",
				mockPages: "Testseiten",
				goToGithub: "Zu GitHub",
				blog: "Blog"
			},
			it: {
				products: "Prodotti",
				pricing: "Prezzi",
				team: "Team",
				careers: "Carriere",
				faq: "FAQ",
				contact: "Contatti",
				settings: "Impostazioni",
				i18nBench: "i18n Bench",
				home: "Home",
				methodology: "Metodologia",
				mockPages: "Pagine di test",
				goToGithub: "Vai su GitHub",
				blog: "Blog"
			},
			pt: {
				products: "Produtos",
				pricing: "Preços",
				team: "Equipe",
				careers: "Carreiras",
				faq: "FAQ",
				contact: "Contato",
				settings: "Configurações",
				i18nBench: "i18n Bench",
				home: "Início",
				methodology: "Metodologia",
				mockPages: "Páginas de teste",
				goToGithub: "Ir para GitHub",
				blog: "Blog"
			},
			zh: {
				products: "产品",
				pricing: "价格",
				team: "团队",
				careers: "职业生涯",
				faq: "常见问题",
				contact: "联系我们",
				settings: "设置",
				i18nBench: "i18n Bench",
				home: "首页",
				methodology: "方法论",
				mockPages: "模拟页面",
				goToGithub: "访问 GitHub",
				blog: "博客"
			},
			ja: {
				products: "製品",
				pricing: "料金",
				team: "チーム",
				careers: "採用情報",
				faq: "FAQ",
				contact: "お問い合わせ",
				settings: "設定",
				i18nBench: "i18n Bench",
				home: "ホーム",
				methodology: "方法論",
				mockPages: "モックページ",
				goToGithub: "GitHubへ",
				blog: "ブログ"
			},
			ko: {
				products: "제품",
				pricing: "요금",
				team: "팀",
				careers: "채용",
				faq: "FAQ",
				contact: "문의하기",
				settings: "설정",
				i18nBench: "i18n Bench",
				home: "홈",
				methodology: "방법론",
				mockPages: "모의 페이지",
				goToGithub: "GitHub으로 이동",
				blog: "블로그"
			},
			ru: {
				products: "Продукты",
				pricing: "Цены",
				team: "Команда",
				careers: "Карьера",
				faq: "FAQ",
				contact: "Контакт",
				settings: "Настройки",
				i18nBench: "i18n Bench",
				home: "Главная",
				methodology: "Методология",
				mockPages: "Тестовые страницы",
				goToGithub: "Перейти на GitHub",
				blog: "Блог"
			}
		}
	}
}, ee = t(null), v = class {
	_events = /* @__PURE__ */ new Map();
	on(e, t) {
		return this._events.has(e) || this._events.set(e, /* @__PURE__ */ new Set()), this._events.get(e).add(t), () => this.removeListener(e, t);
	}
	removeListener(e, t) {
		this._events.get(e)?.delete(t);
	}
	emit(e, ...t) {
		this._events.get(e)?.forEach((e) => {
			e(...t);
		});
	}
}, y = (e, t) => {
	if (!t) return e;
	if (typeof e != "object" || !e) return;
	let n = e[t];
	if (n !== void 0) return n;
	if (!t.includes(".")) return;
	let r = e;
	for (let e of t.split(".")) {
		if (typeof r != "object" || !r) return;
		r = r[e];
	}
	return r;
}, b = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, x = (e, t) => {
	let n = y(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return y(n, t);
	}
}, te = (e) => {
	if (typeof e == "string") return e;
	if (!Array.isArray(e)) return "";
	let [t, n, r] = e;
	if (n === void 0) return `{${String(t)}}`;
	if (n === "plural" || n === "select" || n === "selectordinal") {
		let e = r ?? {}, i = [], a = "";
		for (let [t, n] of Object.entries(e)) {
			if (t === "offset") {
				a = `offset:${String(n)} `;
				continue;
			}
			i.push(`${t} {${ne(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, ne = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(te).join("") : String(e ?? ""), re = "translation", S = "enumeration", C = "plural", ie = "condition", w = "insertion", ae = "object", oe = "array", se = "markdown", T = "html", E = "gender", D = "select", O = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), k = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), A = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, A);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => A(e, k(t, e, {
		type: oe,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: ae,
			key: r
		};
		if (t.eager) {
			n[r] = A(e[r], k(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = A(e[r], k(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, ce = (e) => O(S, e), le = (e) => O(E, e), ue = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, j = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = ue(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, de = /* @__PURE__ */ new Set([
	"area",
	"base",
	"br",
	"col",
	"embed",
	"hr",
	"img",
	"input",
	"link",
	"meta",
	"source",
	"track",
	"wbr"
]), fe = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, pe = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(fe)) {
		let e = !!r[1], i = r[2], a = r[3], o = !!r[4];
		if (!(a.trimStart().startsWith("://") || a.trimStart().startsWith(":"))) {
			if (e) {
				if (n.length === 0) t.push({
					type: "error",
					message: `Closing tag </${i}> has no matching opening tag`
				});
				else {
					let e = n[n.length - 1];
					e.tag.toLowerCase() !== i.toLowerCase() && t.push({
						type: "error",
						message: `Mismatched closing tag: expected </${e.tag}> but found </${i}>`
					}), n.pop();
				}
			} else {
				let e = de.has(i.toLowerCase());
				!o && !e && n.push({ tag: i });
			}
		}
	}
	for (let e of n) t.push({
		type: "error",
		message: `Unclosed HTML tag: <${e.tag}>`
	});
	return {
		valid: t.filter((e) => e.type === "error").length === 0,
		issues: t
	};
}, M = (e, t) => O(T, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = pe(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return j(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => j(await e)), typeof n == "string") return j(n);
	try {
		return j(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), N = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, P = (e) => O(w, e, { fields: (() => {
	if (typeof e == "string") return N(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => N(await e)), typeof t == "string") return N(t);
	try {
		return N(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), me = (e) => O(C, e), he = (e, t) => O(D, e, { variable: t }), ge = (e) => {
	let t = 0, n = () => {
		let n = [], i = "";
		for (; t < e.length;) {
			let a = e[t];
			if (a === "{") i &&= (n.push(i), ""), t++, n.push(r());
			else if (a === "}") break;
			else if (a === "'") {
				if (t + 1 < e.length && e[t + 1] === "'") i += "'", t += 2;
				else {
					let n = e.indexOf("'", t + 1);
					n === -1 ? (i += "'", t++) : (i += e.substring(t + 1, n), t = n + 1);
				}
			} else i += a, t++;
		}
		return i && n.push(i), n;
	}, r = () => {
		let r = "";
		for (; t < e.length && /[^,}]/.test(e[t]);) r += e[t], t++;
		if (r = r.trim(), t >= e.length) throw Error("Unclosed argument");
		if (e[t] === "}") return t++, {
			type: "argument",
			name: r
		};
		if (e[t] === ",") {
			t++;
			let i = "";
			for (; t < e.length && /[^,}]/.test(e[t]);) i += e[t], t++;
			if (i = i.trim(), t >= e.length) throw Error("Unclosed argument");
			if (e[t] === "}") return t++, {
				type: "argument",
				name: r,
				format: { type: i }
			};
			if (e[t] === ",") {
				if (t++, i === "plural" || i === "select" || i === "selectordinal") {
					let a = {};
					for (; t < e.length && e[t] !== "}";) {
						for (; t < e.length && /\s/.test(e[t]);) t++;
						let r = "";
						for (; t < e.length && /[^{\s]/.test(e[t]);) r += e[t], t++;
						for (; t < e.length && /\s/.test(e[t]);) t++;
						if (e[t] !== "{") throw Error("Expected { after option key");
						t++;
						let i = n();
						if (e[t] !== "}") throw Error("Expected } after option value");
						for (t++, a[r] = i; t < e.length && /\s/.test(e[t]);) t++;
					}
					if (t++, i === "plural") return {
						type: "plural",
						name: r,
						options: a
					};
					if (i === "select") return {
						type: "select",
						name: r,
						options: a
					};
					if (i === "selectordinal") return {
						type: "selectordinal",
						name: r,
						options: a
					};
				} else {
					let n = "";
					for (; t < e.length && e[t] !== "}";) n += e[t], t++;
					if (t >= e.length) throw Error("Unclosed argument");
					return n = n.trim(), t++, {
						type: "argument",
						name: r,
						format: {
							type: i,
							style: n
						}
					};
				}
			}
		}
		throw Error("Malformed argument");
	};
	return n();
}, F = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? M(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e?.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n?.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? M(t) : P(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? M(t) : t;
		if (t?.type === "argument") return t.format ? P(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : P(`{{${t.name}}}`);
		if (t?.type === "plural") {
			let e = {}, n = !1;
			for (let e of Object.keys(t.options)) if (e.startsWith("=")) {
				n = !0;
				break;
			}
			if (n) {
				for (let [n, r] of Object.entries(t.options)) {
					let i = n;
					n.startsWith("=") ? i = n.substring(1) : n === "one" ? i = "1" : n === "two" ? i = "2" : n === "few" ? i = "<=3" : n === "many" ? i = ">=4" : n === "other" && (i = "fallback");
					let a = r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e);
					e[i] = F(a);
				}
				return e.__intlayer_icu_var = t.name, ce(e);
			}
			for (let [n, r] of Object.entries(t.options)) {
				let i = r?.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e);
				e[n] = F(i);
			}
			return me(e);
		}
		if (t?.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = F(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? le({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : he(e, t.name);
		}
		if (t?.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = F(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, ce(e);
		}
	}
	return e.map((e) => F([e]));
}, _e = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return F(ge(e));
		} catch {
			return e;
		}
	}
}, ve = (e) => A(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		..._e
	}]
}), ye = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, be = (e, t) => e[ye(e, t) ?? "fallback"], I = {
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
}, L = {
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
}, xe = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, Se = 50, Ce = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Set(), Te = (e) => {
	we.has(e) || (we.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Ee = {
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
}, De = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Te(e), Ee[e]);
};
function R(e, t, n) {
	let r = t ?? I?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = Ce.get(a);
	o || (o = /* @__PURE__ */ new Map(), Ce.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? De(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Se && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Oe = (e, t, n) => e[R("PluralRules", n).select(t)] ?? e.other, ke = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, Ae = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], z = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, je = (e, t, n, r) => {
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
}, Me = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = z(t, r);
	return o === void 0 ? e : i ? je(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = z(t, r);
	return o === void 0 ? e : je(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = z(t, n);
	return r === void 0 ? e : String(r);
}), B = (e, t) => e[t] ?? e.count ?? e.n, V = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Me(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return V(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(V(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return V(r[w], t, n);
	if (r.nodeType === "html") return V(r[T], t, n);
	if (r.nodeType === "plural") {
		let e = r[C];
		return V(Oe(e, Number(B(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[S], i = Ae.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Ae.includes(t) || (o[t] = n);
		let s = B(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = R("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? be(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return V(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[D], i = B(t, typeof r.variable == "string" ? r.variable : "value");
		return V(ke(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[E];
		return V(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, Ne = (e, t = {}, n = "en") => {
	let r = V(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Pe = ((e) => (t, n = {}, r = "en") => Ne(typeof t == "string" ? e(t) : t, n, r))(ve), Fe = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, Ie = class extends v {
	_locale;
	_locales;
	_catalogs = {};
	_loadFallbackWarned = !1;
	_boundDictionaries = {};
	_registry;
	constructor({ locale: e = "en", locales: t, messages: n, registry: r } = {}) {
		super(), this._locale = typeof e == "string" ? e : "en", this._locales = t, this._registry = r, n && this.mergeAllCatalogs(n);
	}
	get locale() {
		return this._locale;
	}
	get locales() {
		return this._locales;
	}
	get messages() {
		let e = { ...this._registry?.all(this._locale) };
		for (let t of Object.values(this._boundDictionaries)) Object.assign(e, b(t));
		return {
			...this._catalogs[this._locale] ?? {},
			...e
		};
	}
	mergeLocaleCatalog(e, t) {
		this._catalogs[e] = {
			...this._catalogs[e],
			...t
		};
	}
	mergeAllCatalogs(e) {
		for (let [t, n] of Object.entries(e)) n && typeof n == "object" && this.mergeLocaleCatalog(t, n);
	}
	setMessagesCompiler(e) {
		return console.warn("@intlayer/lingui: i18n.setMessagesCompiler() is a no-op — message compilation is handled at build time by intlayer."), this;
	}
	load(e, t) {
		typeof e == "string" ? this.mergeLocaleCatalog(e, t ?? {}) : this.mergeAllCatalogs(e), this._loadFallbackWarned || (this._loadFallbackWarned = !0, console.warn("@intlayer/lingui: i18n.load() messages are used as a runtime fallback. For optimal bundle size, compile your catalogs into intlayer dictionaries instead of importing lingui locale files."));
	}
	loadAndActivate({ locale: e, locales: t, messages: n }) {
		n && this.mergeLocaleCatalog(e, n), this.activate(e, t);
	}
	bindDictionaries(e) {
		return this._boundDictionaries = e, this;
	}
	activate(e, t) {
		this._locale = e, this._locales = t, this.emit("change");
	}
	lookupBoundDictionaries(e) {
		let { dictionaryKey: t, remainder: n } = Fe(e), r = this._boundDictionaries[t];
		if (r !== void 0) {
			let e = x(r, n);
			if (e !== void 0) return e;
		}
		for (let t of Object.values(this._boundDictionaries)) {
			let n = x(t, e);
			if (n !== void 0) return n;
		}
	}
	resolveTemplate(e) {
		let t = this.lookupBoundDictionaries(e);
		if (t !== void 0) return {
			kind: "node",
			node: t
		};
		let n = this._registry?.lookup(e, this._locale);
		if (n !== void 0) return {
			kind: "node",
			node: n
		};
		let r = this._catalogs[this._locale];
		if (r) {
			let t = x(r, e);
			if (t !== void 0) return {
				kind: "icu",
				message: ne(t)
			};
		}
	}
	_(e, t, n) {
		let r = typeof e == "object" && !!e, i = r ? e.id : e, a = r ? e.message ?? n?.message : n?.message, o = r ? {
			...e.values ?? {},
			...t ?? {}
		} : t ?? {}, s = this._locale, c = this.resolveTemplate(i) ?? {
			kind: "icu",
			message: a ?? i
		};
		return (c.kind === "node" ? Ne(c.node, o, s) : Pe(c.message, o, s)) ?? i;
	}
	t = (e, t, n) => this._(e, t, n);
	date(e, t) {
		if (e == null) return "";
		let n = e instanceof Date ? e : new Date(e);
		return new Intl.DateTimeFormat(this._locale, t).format(n);
	}
	number(e, t) {
		return new Intl.NumberFormat(this._locale, t).format(e);
	}
}, Le = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, Re = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = Le(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, ze = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var H = {
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
}, Be = (e = H) => {
	let { locales: t } = I;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!ze) for (let t = 0; t < (L.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(L.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, Ve = !1, He, Ue = () => typeof window > "u" ? Be(H) : (Ve ||= (He = Be(H), !0), He), We = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (Ve = !1, !ze && L.storage.cookies)) for (let n = 0; n < L.storage.cookies.length; n++) {
		let { name: r, attributes: i } = L.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: Le(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, Re(r, e, i));
			} catch {}
		}
	}
}, Ge = /* @__PURE__ */ new Map(), Ke = (e, t) => Object.create(new Proxy(e, {
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
}), qe = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = Ge.get(t);
	i || (i = /* @__PURE__ */ new Map(), Ge.set(t, i));
	let a = i.get(r);
	return a || (a = Ke(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, Je = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : h(m, { children: e }),
	value: t,
	...n
}, qe(t)), U = /* @__PURE__ */ new WeakMap(), Ye = 0, Xe = (e) => {
	if (!e) return "base";
	let t = U.get(e);
	if (t) return t;
	Ye += 1;
	let n = `p${Ye}`;
	return U.set(e, n), n;
}, Ze = 256, W = /* @__PURE__ */ new WeakMap(), Qe = (e) => typeof e == "object" && !!e, $e = (e, t, n) => `${e}_${t}_${Xe(n)}`, et = (e, t) => {
	if (!Qe(e)) return { hit: !1 };
	let n = W.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, G = (e, t, n) => {
	if (!Qe(e)) return n;
	let r = W.get(e);
	return r || (r = /* @__PURE__ */ new Map(), W.set(e, r)), r.size >= Ze && r.clear(), r.set(t, n), n;
}, tt = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), K = "\x1B[0m", nt = "\x1B[34m", rt = "\x1B[31m", it = "\x1B[32m", at = "\x1B[38;5;3m", ot = (e) => e, st = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = ot(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, ct = (e, t) => (n, r) => st(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), q = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? K : n : K}` : e, lt = (e, t = at, n = K) => [e].flat().map((e) => q(e, t, n)).join(", ");
q("✗", rt), q("✓", it), q("⏲", nt);
var ut = () => ({}), dt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), ft = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : dt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : ft(e ? `${e}.${String(n)}` : String(n)) }), pt = /* @__PURE__ */ new Set(), mt = (e, t, n) => {
	let r = ut()[e];
	return r ? It(r, t, n) : (pt.has(e) || (ct({ log: xe })(typeof window > "u" ? `Dictionary ${lt(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), pt.add(e)), ft(e));
}, ht = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, gt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !ht(e) || !ht(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? gt(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, _t = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => gt(e, t));
}, J = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, vt = (e) => {
	if (typeof e == "string") return e;
	if (J(e)) return e.nodeType === "html" ? e[T] : e[se];
}, yt = (e, t) => {
	if (typeof e == "string") return t;
	if (J(e)) {
		let n = e.nodeType === "html" ? T : se;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, bt = (e, t, n, r, i) => {
	let a = yt(e, tt(vt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, Y = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, xt = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, St = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? Y : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = _t(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: re,
				key: e
			}]
		});
	}
}, Ct = Y, wt = (e) => Y, Tt = Y, Et = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? Y : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: w }], i = e[w], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || J(e),
			transform: (e, n, r) => {
				if (J(e)) return (i) => bt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = tt(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return kt(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Dt = [
	S,
	ie,
	C,
	E,
	D
], Ot = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !Dt.includes(i)) return t;
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
		return !r && xt(i) ? i(n) : i;
	};
}, kt = (e, t) => typeof t == "function" && Dt.includes(e?.nodeType ?? "") ? (n) => Ot(e, t, n) : t, At = Y, jt = Y, Mt = (e) => Y, Nt = Y, Pt = (e, t = !0) => [
	St(e ?? I.defaultLocale, t ? I.defaultLocale : void 0),
	Ct,
	wt(e ?? I.defaultLocale),
	Tt,
	Et,
	Mt(e ?? I.defaultLocale),
	Nt,
	At,
	jt
].filter((e) => e !== Y), Ft = (e, t, n = []) => A(e, {
	...t,
	plugins: n
}), X = /* @__PURE__ */ new WeakSet(), It = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = $e(r ?? I.defaultLocale, "", n), o = et(e, a);
	if (o.hit) return o.content;
	let s = n ?? Pt(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !X.has(e)
		};
		X.add(e);
		try {
			return Ft(e.content, t, s);
		} finally {
			t.eager && X.delete(e);
		}
	};
	return c === null ? G(e, a, null) : Array.isArray(c) ? G(e, a, c.map(l)) : G(e, a, l(c));
}, Lt = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", Rt = /\{\{\s*(.*?)\s*\}\}/g, zt = (e, t = {}) => {
	if (!Object.values(t).some(Lt)) return {
		isSimple: !0,
		parts: e.replace(Rt, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(Rt), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, Bt = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => Je({
		value: t.children,
		children: t.children
	})
}, Vt = Y, Ht = (t, r) => {
	let i = zt(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Ut = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? Y : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: w }], i = e[w], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || J(e),
			transform: (e, n, r) => {
				if (J(e)) return (i) => bt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Ht(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return kt(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Wt = Y, Gt = Y, Z = /* @__PURE__ */ new Map(), Kt = (e, t = !0) => {
	let n = `${e ?? I.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		Bt,
		St(e ?? I.defaultLocale, t ? I.defaultLocale : void 0),
		Ct,
		wt(e ?? I.defaultLocale),
		Tt,
		Mt(e ?? I.defaultLocale),
		Nt,
		At,
		jt,
		Vt,
		Ut,
		Wt,
		Gt
	].filter((e) => e !== Y);
	return Z.set(n, r), r;
}, qt = (e, t) => It(e, t, Kt(typeof t == "object" && t ? t.locale : t)), Jt = Ue, Yt = (e, t) => We(e, {
	...H,
	isCookieEnabled: t
}), Xt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Zt = (e, t = I?.locales, n = I?.defaultLocale) => {
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
}, Qt = t({
	get locale() {
		return Jt() ?? I?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), $t = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: a, disableEditor: s, isCookieEnabled: u }) => {
	let { locales: d, defaultLocale: f } = I ?? {}, [p, m] = l(() => e ?? Jt() ?? t ?? f), [g, _] = l(e);
	e !== g && (_(e), e && e !== p && m(e)), o(() => {
		Xt();
	}, []);
	let ee = i((e) => {
		if (p.toString() !== e.toString()) {
			if (!d?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			m(e), Yt(e, u);
		}
	}, [
		p,
		d,
		u
	]), v = a ?? ee, y = Zt(p), b = c(() => ({
		locale: y,
		setLocale: v,
		variant: n,
		disableEditor: s
	}), [
		y,
		v,
		n,
		s
	]);
	return h(Qt.Provider, {
		value: b,
		children: r
	});
}, en = ({ children: e, ...t }) => g($t, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), { defaultLocale: tn, locales: Q } = I ?? {}, nn = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(Qt) ?? {};
	return {
		locale: n,
		defaultLocale: tn,
		availableLocales: Q,
		setLocale: i((n) => {
			if (!Q?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), Yt(n, e ?? o ?? !0), t?.(n);
		}, [
			Q,
			t,
			r,
			e
		])
	};
}, rn = (e, t) => {
	let n = new Ie({ locale: e }).bindDictionaries(t);
	return {
		i18n: n,
		_: n._.bind(n)
	};
}, an = (...e) => {
	let { locale: t } = nn(), n = e.map((e) => e.key).join("\0");
	return c(() => rn(t, Object.fromEntries(e.map((e) => [e.key, qt(e, t)]))), [t, n]);
}, on = () => {
	try {
		return Object.keys(ut());
	} catch {
		return [];
	}
}, sn = (e, t) => {
	let n = on(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return mt(e, t);
		} catch {
			return;
		}
	};
	if (n.includes(i)) {
		let t = x(a(i), r === -1 ? "" : e.slice(r + 1));
		if (t !== void 0) return t;
	}
	for (let t of n) {
		let n = x(a(t), e);
		if (n !== void 0) return n;
	}
}, cn = (e) => {
	let t = {};
	for (let n of on()) try {
		Object.assign(t, b(mt(n, e)));
	} catch {}
	return t;
}, ln = () => ({
	lookup: sn,
	all: cn
}), un = (e) => new Ie({
	...e,
	registry: ln()
});
un({ locale: "en" });
var dn = ({ i18n: e, defaultComponent: t, children: n }) => {
	let r = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [i, a] = l(() => r(e)), [s, c] = l(e.locale);
	return o(() => (a(r(e)), c(e.locale), e.on("change", () => {
		a(r(e)), c(e.locale);
	})), [e]), h(ee.Provider, {
		value: i,
		children: h(en, {
			locale: s,
			children: n
		})
	});
}, fn = {
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
				themeModeAutoSystemClick: "主题模式：自动（系统）。点击切换到明亮模式。",
				themeModeLightClick: "主题模式：明亮。点击切换到暗黑模式。",
				themeModeDarkClick: "主题模式：暗黑。点击切换到自动（系统）模式。",
				themeAuto: "主题：自动",
				themeDark: "主题：暗黑",
				themeLight: "主题：明亮"
			},
			ja: {
				themeModeAutoSystemClick: "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。",
				themeModeLightClick: "テーマモード：ライト。クリックしてダークモードに切り替えます。",
				themeModeDarkClick: "テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。",
				themeAuto: "テーマ：自動",
				themeDark: "テーマ：ダーク",
				themeLight: "テーマ：ライト"
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
function pn() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function mn() {
	let { i18n: e } = an(fn), [t, n] = l("auto");
	o(() => {
		let e = pn();
		n(e), $(e);
	}, []), o(() => {
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
	let i = t === "auto" ? e._("theme-toggle.themeModeAutoSystemClick") : t === "light" ? e._("theme-toggle.themeModeLightClick") : e._("theme-toggle.themeModeDarkClick");
	return h("button", {
		type: "button",
		onClick: r,
		"aria-label": i,
		title: i,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: t === "auto" ? e._("theme-toggle.themeAuto") : t === "dark" ? e._("theme-toggle.themeDark") : e._("theme-toggle.themeLight")
	});
}
var hn = [
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
function gn(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function _n(e, t) {
	let n = un();
	return n.activate(e), n;
}
function vn() {
	let e = f({ strict: !1 }).locale ?? "en", t = d(), n = (e) => {
		t({ params: (t) => ({
			...t,
			locale: e
		}) });
	};
	return h("div", {
		className: "flex items-center gap-2",
		children: h("select", {
			value: e,
			onChange: (e) => n(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: hn.map((e) => h("option", {
				value: e,
				children: gn(e)
			}, e))
		})
	});
}
function yn(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), s(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
function bn() {
	let { i18n: e } = an(_);
	yn("Header");
	let [t, n] = l(!1), r = f({ strict: !1 }).locale ?? "en", i = [
		{
			to: "/$locale/products",
			label: e._("header.products")
		},
		{
			to: "/$locale/pricing",
			label: e._("header.pricing")
		},
		{
			to: "/$locale/team",
			label: e._("header.team")
		},
		{
			to: "/$locale/blog",
			label: e._("header.blog")
		},
		{
			to: "/$locale/careers",
			label: e._("header.careers")
		},
		{
			to: "/$locale/faq",
			label: e._("header.faq")
		},
		{
			to: "/$locale/contact",
			label: e._("header.contact")
		},
		{
			to: "/$locale/settings",
			label: e._("header.settings")
		}
	];
	return h("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: g("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [g("div", {
				className: "flex items-center gap-8",
				children: [h(u, {
					preload: !1,
					to: "/$locale",
					params: { locale: r },
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: e._("header.i18nBench")
				}), g("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						h(u, {
							preload: !1,
							to: "/$locale",
							params: { locale: r },
							activeOptions: { exact: !0 },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: e._("header.home")
						}),
						h(u, {
							preload: !1,
							to: "/$locale/about",
							params: { locale: r },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: e._("header.methodology")
						}),
						g("div", {
							className: "relative",
							children: [g("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								onClick: () => n(!t),
								children: [e._("header.mockPages"), h(p, {
									size: 14,
									className: `transition-transform ${t ? "rotate-180" : ""}`
								})]
							}), t && h("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								children: h("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: i.map((e) => h(u, {
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
			}), g("div", {
				className: "flex items-center gap-4",
				children: [
					g("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [h("span", {
							className: "sr-only",
							children: e._("header.goToGithub")
						}), h("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: h("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					h(vn, {}),
					h(mn, {})
				]
			})]
		})
	});
}
function xn({ children: e }) {
	let t = c(() => _n("en"), []);
	return h(dn, {
		i18n: t,
		children: e
	});
}
function Sn() {
	return h(xn, { children: h(bn, {}) });
}
export { Sn as default };
