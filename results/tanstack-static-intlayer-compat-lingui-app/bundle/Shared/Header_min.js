import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useLayoutEffect as s, useMemo as c, useRef as l, useState as u } from "react";
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
				i18nBench: "i18n Bench",
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
}, ie = class {
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
}, ae = (e, t) => {
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
}, oe = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, g = (e, t) => {
	let n = ae(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return ae(n, t);
	}
}, se = (e) => {
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
			i.push(`${t} {${ce(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, ce = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(se).join("") : String(e ?? ""), le = "translation", ue = "enumeration", de = "plural", _ = "insertion", fe = "object", pe = "array", v = "markdown", y = "html", b = "gender", x = "select", S = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), C = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => C(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => C(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: pe,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: fe,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = C(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = C(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, me = (e) => S(ue, e), he = (e) => S(b, e), ge = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, w = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = ge(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, _e = /* @__PURE__ */ new Set([
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
]), ve = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, ye = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(ve)) {
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
				let e = _e.has(i.toLowerCase());
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
}, T = (e, t) => S(y, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = ye(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return w(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => w(await e)), typeof n == "string") return w(n);
	try {
		return w(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), E = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, D = (e) => S(_, e, { fields: (() => {
	if (typeof e == "string") return E(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => E(await e)), typeof t == "string") return E(t);
	try {
		return E(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), be = (e) => S(de, e), xe = (e, t) => S(x, e, { variable: t }), Se = (e) => {
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
}, O = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? T(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? T(t) : D(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? T(t) : t;
		if (t.type === "argument") return t.format ? D(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : D(`{{${t.name}}}`);
		if (t.type === "plural") {
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
					e[i] = O(a);
				}
				return e.__intlayer_icu_var = t.name, me(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = O(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return be(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = O(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? he({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : xe(e, t.name);
		}
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = O(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, me(e);
		}
	}
	return e.map((e) => O([e]));
}, Ce = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return O(Se(e));
		} catch {
			return e;
		}
	}
}, we = (e) => C(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...Ce
	}]
}), Te = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Ee = (e, t) => e[Te(e, t) ?? "fallback"], k = {
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
}, A = {
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
}, Oe = 50, ke = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Set(), je = (e) => {
	Ae.has(e) || (Ae.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Me = {
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
}, Ne = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (je(e), Me[e]);
};
function j(e, t, n) {
	let r = t ?? k?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = ke.get(a);
	o || (o = /* @__PURE__ */ new Map(), ke.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Ne(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Oe && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Pe = (e, t, n) => e[j("PluralRules", n).select(t)] ?? e.other, Fe = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, Ie = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], M = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, Le = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? j("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? j("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : j("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return j("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Re = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = M(t, r);
	return o === void 0 ? e : i ? Le(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = M(t, r);
	return o === void 0 ? e : Le(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = M(t, n);
	return r === void 0 ? e : String(r);
}), N = (e, t) => e[t] ?? e.count ?? e.n, P = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Re(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return P(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(P(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return P(r[_], t, n);
	if (r.nodeType === "html") return P(r[y], t, n);
	if (r.nodeType === "plural") {
		let e = r[de];
		return P(Pe(e, Number(N(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[ue], i = Ie.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Ie.includes(t) || (o[t] = n);
		let s = N(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = j("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Ee(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return P(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[x], i = N(t, typeof r.variable == "string" ? r.variable : "value");
		return P(Fe(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[b];
		return P(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, ze = (e, t = {}, n = "en") => {
	let r = P(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, Be = ((e) => (t, n = {}, r = "en") => ze(typeof t == "string" ? e(t) : t, n, r))(we), Ve = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, He = class extends ie {
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
		for (let t of Object.values(this._boundDictionaries)) Object.assign(e, oe(t));
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
		let { dictionaryKey: t, remainder: n } = Ve(e), r = this._boundDictionaries[t];
		if (r !== void 0) {
			let e = g(r, n);
			if (e !== void 0) return e;
		}
		for (let t of Object.values(this._boundDictionaries)) {
			let n = g(t, e);
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
			let t = g(r, e);
			if (t !== void 0) return {
				kind: "icu",
				message: ce(t)
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
		return (c.kind === "node" ? ze(c.node, o, s) : Be(c.message, o, s)) ?? i;
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
}, Ue = t(null), We = /* @__PURE__ */ new WeakMap(), Ge = 0, Ke = (e) => {
	if (!e) return "base";
	let t = We.get(e);
	if (t) return t;
	Ge += 1;
	let n = `p${Ge}`;
	return We.set(e, n), n;
}, qe = 256, F = /* @__PURE__ */ new WeakMap(), I = (e) => typeof e == "object" && !!e, Je = (e, t, n) => `${e}_${t}_${Ke(n)}`, Ye = (e, t) => {
	if (!I(e)) return { hit: !1 };
	let n = F.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, L = (e, t, n) => {
	if (!I(e)) return n;
	let r = F.get(e);
	return r || (r = /* @__PURE__ */ new Map(), F.set(e, r)), r.size >= qe && r.clear(), r.set(t, n), n;
}, R = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), z = "default", Xe = /[^A-Za-z0-9._&=-]/g, B = /[^A-Za-z0-9._-]/g, Ze = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, V = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Ze);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, Qe = (e) => e === void 0 ? z : typeof e == "string" ? V(e, Xe) : Object.keys(e).sort().map((t) => `${V(t, B)}=${V(String(e[t]), B)}`).join("&"), $e = (e) => Array.isArray(e) ? e.length === 0 ? [z] : e.map(Qe) : [Qe(e)], et = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? z : e[0] ?? "default";
}, tt = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, nt = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, rt = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, it = (e, t) => {
	if (!nt(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? z : et($e(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => tt(e, n, t, s)).map((t) => rt(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, at = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, ot = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? $e(n).join(",") : String(n)}`;
}).join("|") : "", H = "\x1B[0m", st = "\x1B[34m", ct = "\x1B[31m", lt = "\x1B[32m", ut = "\x1B[38;5;3m", dt = (e) => e, ft = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = dt(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, pt = (e, t) => (n, r) => ft(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), U = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? H : n : H}` : e, mt = (e, t = ut, n = H) => [e].flat().map((e) => U(e, t, n)).join(", ");
U("✗", ct), U("✓", lt), U("⏲", st);
var ht = () => ({}), gt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), _t = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : gt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : _t(e ? `${e}.${String(n)}` : String(n)) }), vt = /* @__PURE__ */ new Set(), yt = (e, t, n) => {
	let r = ht()[e];
	return r ? It(r, t, n) : (vt.has(e) || (pt({ log: De })(typeof window > "u" ? `Dictionary ${mt(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), vt.add(e)), _t(e));
}, bt = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, xt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (bt(e) && bt(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : xt(e[r], t[r]));
		return n;
	}
	return e;
}, St = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => xt(e, t));
}, W = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ct = (e) => {
	if (typeof e == "string") return e;
	if (W(e)) return e.nodeType === "html" ? e[y] : e[v];
}, wt = (e, t) => {
	if (typeof e == "string") return t;
	if (W(e)) {
		let n = e.nodeType === "html" ? y : v;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, G = (e, t, n, r, i) => {
	let a = wt(e, R(Ct(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, K = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Tt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? K : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: le,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return St(o, e, t);
	}
}, Et = K, Dt = (e) => K, Ot = K, kt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? K : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: _ }], i = e[_], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || W(e),
			transform: (e, n, r) => {
				if (W(e)) return (i) => G(e, i, n, t.plugins, r);
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
}, At = K, jt = K, Mt = (e) => K, Nt = K, Pt = (e, t = !0) => [
	Tt(e ?? k.defaultLocale, t ? k.defaultLocale : void 0),
	Et,
	Ot,
	kt,
	Mt(e ?? k.defaultLocale),
	Nt,
	At,
	jt
], Ft = (e, t, n = []) => C(e, {
	...t,
	plugins: n
}), It = (e, t, n) => {
	let { locale: r, selector: i } = at(t), a = Je(r ?? k.defaultLocale, ot(i), n), o = Ye(e, a);
	if (o.hit) return o.content;
	let s = n ?? Pt(r), c = it(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Ft(e.content, t, s);
	};
	return c === null ? L(e, a, null) : Array.isArray(c) ? L(e, a, c.map(l)) : L(e, a, l(c));
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
}, Bt = () => {
	try {
		return Object.keys(ht());
	} catch {
		return [];
	}
}, Vt = (e, t) => {
	let n = Bt(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return yt(e, t);
		} catch {
			return;
		}
	};
	if (n.includes(i)) {
		let t = g(a(i), r === -1 ? "" : e.slice(r + 1));
		if (t !== void 0) return t;
	}
	for (let t of n) {
		let n = g(a(t), e);
		if (n !== void 0) return n;
	}
}, Ht = (e) => {
	let t = {};
	for (let n of Bt()) try {
		Object.assign(t, oe(yt(n, e)));
	} catch {}
	return t;
}, Ut = () => ({
	lookup: Vt,
	all: Ht
}), Wt = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : m(te, { children: e });
	return new Proxy(i, { get(e, r, i) {
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
}, Gt = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => Wt({
		...n,
		value: n.children,
		children: n.children
	})
}, Kt = K, qt = (t, r) => {
	let i = zt(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Jt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? K : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: _ }], i = e[_], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || W(e),
			transform: (e, n, r) => {
				if (W(e)) return (i) => G(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = qt(i, e);
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
}, Yt = K, Xt = K, q = /* @__PURE__ */ new Map(), Zt = (e, t = !0) => {
	let n = `${e ?? k.defaultLocale}_${t}`;
	if (q.has(n)) return q.get(n);
	let r = [
		Tt(e ?? k.defaultLocale, t ? k.defaultLocale : void 0),
		Et,
		Dt(e ?? k.defaultLocale),
		Ot,
		Mt(e ?? k.defaultLocale),
		Nt,
		At,
		jt,
		Gt,
		Kt,
		Jt,
		Yt,
		Xt
	];
	return q.set(n, r), r;
}, Qt = (e, t) => It(e, t, Zt(typeof t == "object" && t ? t.locale : t)), $t = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, en = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = $t(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, tn = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var J = {
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
}, nn = (e = J) => {
	let { locales: t } = k;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!tn) for (let t = 0; t < (A.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(A.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, rn = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !tn && A.storage.cookies) for (let n = 0; n < A.storage.cookies.length; n++) {
		let { name: r, attributes: i } = A.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: $t(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, en(r, e, i));
			} catch {}
		}
	}
}, an = nn(J), on = (e, t) => rn(e, {
	...J,
	isCookieEnabled: t
}), sn = () => {
	let { locale: e } = a(Y) ?? {}, t = l(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, cn = ({ children: e }) => (sn(), e), ln = () => {
	let { locale: e } = a(Y) ?? {}, t = l(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, un = ({ children: e }) => (ln(), e), dn = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, fn = (e, t = k?.locales, n = k?.defaultLocale) => {
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
}, Y = t({
	locale: an ?? k?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), pn = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: l } = k ?? {}, [d, f] = u(e ?? an ?? t ?? l);
	o(() => {
		e && e !== d && f(e);
	}, [e]), o(() => {
		dn();
	}, []);
	let p = i ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			f(e), on(e, s);
		}
	}), ee = fn(d);
	return m(Y.Provider, {
		value: {
			locale: ee,
			setLocale: p,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, mn = ({ children: e, ...t }) => ne(pn, {
	...t,
	children: [
		m(cn, {}),
		m(un, {}),
		e
	]
}), { defaultLocale: hn, locales: X } = k ?? {}, gn = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(Y) ?? {};
	return {
		locale: n,
		defaultLocale: hn,
		availableLocales: X,
		setLocale: i((n) => {
			if (!X?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), on(n, e ?? o ?? !0), t?.(n);
		}, [
			X,
			t,
			r,
			e
		])
	};
}, _n = ({ i18n: e, defaultComponent: t, children: n }) => {
	let r = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [i, a] = u(() => r(e)), [s, c] = u(e.locale);
	return o(() => (a(r(e)), c(e.locale), e.on("change", () => {
		a(r(e)), c(e.locale);
	})), [e]), m(Ue.Provider, {
		value: i,
		children: m(mn, {
			locale: s,
			children: n
		})
	});
}, vn = (e, t) => {
	let n = new He({ locale: e }).bindDictionaries(t);
	return {
		i18n: n,
		_: n._.bind(n)
	};
}, yn = (...e) => {
	let { locale: t } = gn(), n = e.map((e) => e.key).join("\0");
	return c(() => vn(t, Object.fromEntries(e.map((e) => [e.key, Qt(e, t)]))), [t, n]);
}, bn = (e) => new He({
	...e,
	registry: Ut()
});
bn({ locale: "en" });
var xn = {
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
}, Sn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-lingui-app/src/components/ThemeToggle.tsx";
function Cn() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function Z(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function wn() {
	let { i18n: e } = yn(xn), [t, n] = u("auto");
	o(() => {
		let e = Cn();
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
	let i = t === "auto" ? e._("theme-toggle.themeModeAutoSystemClick") : t === "light" ? e._("theme-toggle.themeModeLightClick") : e._("theme-toggle.themeModeDarkClick");
	return h("button", {
		type: "button",
		onClick: r,
		"aria-label": i,
		title: i,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: t === "auto" ? e._("theme-toggle.themeAuto") : t === "dark" ? e._("theme-toggle.themeDark") : e._("theme-toggle.themeLight")
	}, void 0, !1, {
		fileName: Sn,
		lineNumber: 76,
		columnNumber: 5
	}, this);
}
var Tn = [
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
function En(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function Dn(e, t) {
	let n = bn();
	return n.activate(e), n;
}
var Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-lingui-app/src/components/LocaleSwitcher.tsx";
function On() {
	let e = p({ strict: !1 }).locale ?? "en", t = f(), n = (e) => {
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
			children: Tn.map((e) => h("option", {
				value: e,
				children: En(e)
			}, e, !1, {
				fileName: Q,
				lineNumber: 23,
				columnNumber: 11
			}, this))
		}, void 0, !1, {
			fileName: Q,
			lineNumber: 17,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 16,
		columnNumber: 5
	}, this);
}
function kn(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), s(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-lingui-app/src/components/Header.tsx";
function An() {
	let { i18n: e } = yn(re);
	kn("Header");
	let [t, n] = u(!1), r = p({ strict: !1 }).locale ?? "en", i = [
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
		children: h("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [h("div", {
				className: "flex items-center gap-8",
				children: [h(d, {
					preload: !1,
					to: "/$locale",
					params: { locale: r },
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: e._("header.i18nBench")
				}, void 0, !1, {
					fileName: $,
					lineNumber: 33,
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
							children: e._("header.home")
						}, void 0, !1, {
							fileName: $,
							lineNumber: 43,
							columnNumber: 13
						}, this),
						h(d, {
							preload: !1,
							to: "/$locale/about",
							params: { locale: r },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: e._("header.methodology")
						}, void 0, !1, {
							fileName: $,
							lineNumber: 53,
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
								children: [e._("header.mockPages"), h(ee, {
									size: 14,
									className: `transition-transform ${t ? "rotate-180" : ""}`
								}, void 0, !1, {
									fileName: $,
									lineNumber: 73,
									columnNumber: 17
								}, this)]
							}, void 0, !0, {
								fileName: $,
								lineNumber: 65,
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
										lineNumber: 87,
										columnNumber: 23
									}, this))
								}, void 0, !1, {
									fileName: $,
									lineNumber: 85,
									columnNumber: 19
								}, this)
							}, void 0, !1, {
								fileName: $,
								lineNumber: 80,
								columnNumber: 17
							}, this)]
						}, void 0, !0, {
							fileName: $,
							lineNumber: 64,
							columnNumber: 13
						}, this)
					]
				}, void 0, !0, {
					fileName: $,
					lineNumber: 42,
					columnNumber: 11
				}, this)]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 32,
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
							children: e._("header.goToGithub")
						}, void 0, !1, {
							fileName: $,
							lineNumber: 112,
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
								lineNumber: 114,
								columnNumber: 15
							}, this)
						}, void 0, !1, {
							fileName: $,
							lineNumber: 113,
							columnNumber: 13
						}, this)]
					}, void 0, !0, {
						fileName: $,
						lineNumber: 106,
						columnNumber: 11
					}, this),
					h(On, {}, void 0, !1, {
						fileName: $,
						lineNumber: 120,
						columnNumber: 11
					}, this),
					h(wn, {}, void 0, !1, {
						fileName: $,
						lineNumber: 121,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 105,
				columnNumber: 9
			}, this)]
		}, void 0, !0, {
			fileName: $,
			lineNumber: 31,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: $,
		lineNumber: 30,
		columnNumber: 5
	}, this);
}
var jn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-lingui-app/scripts/Wrapper.tsx";
function Mn({ children: e }) {
	let t = c(() => Dn("en"), []);
	return h(_n, {
		i18n: t,
		children: e
	}, void 0, !1, {
		fileName: jn,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
var Nn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/intlayer-compat-lingui-app/src/components/Header.wrapper.tsx";
function Pn() {
	return h(Mn, { children: h(An, {}, void 0, !1, {
		fileName: Nn,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: Nn,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Pn as default };
