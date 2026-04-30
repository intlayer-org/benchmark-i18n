import { C as e, S as t, a as n, b as r, c as i, g as a, h as o, i as s, l as c, m as l, n as u, o as d, r as f, s as p, t as m, x as h } from "./getContent-DrnKJV-E.js";
import { Fragment as g, computed as _, createBlock as v, createCommentVNode as y, createElementBlock as b, createElementVNode as x, createTextVNode as S, createVNode as C, defineComponent as w, getCurrentInstance as T, h as E, inject as D, isRef as ee, markRaw as O, normalizeClass as te, onBeforeMount as ne, onMounted as re, onUnmounted as ie, openBlock as k, ref as A, renderList as j, resolveComponent as ae, shallowRef as oe, toDisplayString as M, toValue as N, unref as P, watch as F, withCtx as I } from "vue";
import { useRoute as se, useRouter as ce } from "vue-router";
import { ChevronDown as le } from "lucide-vue-next";
var ue = {
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
				appName: "i18n Benchmark",
				goToGithub: "Go to GitHub",
				header: "Header"
			},
			fr: {
				home: "Accueil",
				methodology: "Méthodologie",
				mockPages: "Pages fictives",
				products: "Produits",
				pricing: "Tarification",
				team: "Équipe",
				blog: "Blog",
				careers: "Carrières",
				faq: "FAQ",
				contact: "Contact",
				settings: "Paramètres",
				appName: "Benchmark i18n",
				goToGithub: "Aller sur GitHub",
				header: "En-tête"
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
				appName: "i18n Benchmark",
				goToGithub: "Ir a GitHub",
				header: "Encabezado"
			},
			de: {
				home: "Home",
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
				appName: "i18n Benchmark",
				goToGithub: "Zu GitHub",
				header: "Header"
			},
			it: {
				home: "Home",
				methodology: "Metodologia",
				mockPages: "Pagine di prova",
				products: "Prodotti",
				pricing: "Prezzi",
				team: "Team",
				blog: "Blog",
				careers: "Carriere",
				faq: "FAQ",
				contact: "Contatti",
				settings: "Impostazioni",
				appName: "i18n Benchmark",
				goToGithub: "Vai su GitHub",
				header: "Intestazione"
			},
			pt: {
				home: "Início",
				methodology: "Metodologia",
				mockPages: "Páginas de Teste",
				products: "Produtos",
				pricing: "Preços",
				team: "Equipe",
				blog: "Blog",
				careers: "Carreiras",
				faq: "FAQ",
				contact: "Contato",
				settings: "Configurações",
				appName: "i18n Benchmark",
				goToGithub: "Ir para o GitHub",
				header: "Cabeçalho"
			},
			zh: {
				home: "首页",
				methodology: "方法论",
				mockPages: "模拟页面",
				products: "产品",
				pricing: "定价",
				team: "团队",
				blog: "博客",
				careers: "职业",
				faq: "常见问题",
				contact: "联系我们",
				settings: "设置",
				appName: "i18n 基准测试",
				goToGithub: "前往 GitHub",
				header: "页眉"
			},
			ja: {
				home: "ホーム",
				methodology: "方法論",
				mockPages: "モックページ",
				products: "製品",
				pricing: "価格設定",
				team: "チーム",
				blog: "ブログ",
				careers: "採用情報",
				faq: "よくある質問",
				contact: "お問い合わせ",
				settings: "設定",
				appName: "i18n ベンチマーク",
				goToGithub: "GitHub へ",
				header: "ヘッダー"
			},
			ko: {
				home: "홈",
				methodology: "방법론",
				mockPages: "모ック 페이지",
				products: "제품",
				pricing: "가격",
				team: "팀",
				blog: "블로그",
				careers: "채용",
				faq: "자주 묻는 질문",
				contact: "문의",
				settings: "설정",
				appName: "i18n 벤치마크",
				goToGithub: "GitHub으로 이동",
				header: "헤더"
			},
			ru: {
				home: "Главная",
				methodology: "Методология",
				mockPages: "Мок-страницы",
				products: "Продукты",
				pricing: "Цены",
				team: "Команда",
				blog: "Блог",
				careers: "Вакансии",
				faq: "FAQ",
				contact: "Контакт",
				settings: "Настройки",
				appName: "i18n Бенчмарк",
				goToGithub: "Перейти на GitHub",
				header: "Заголовок"
			}
		}
	},
	localIds: ["header::local::src/components/Header.content.ts"]
}, L = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = A(e), i = typeof t == "function" ? (e) => t(e) : () => t, a = (e) => (r.value, i(e)), o = ((e) => a(e));
	return Object.setPrototypeOf(o, String.prototype), Object.assign(o, {
		render: a,
		toString: () => String(r.value ?? ""),
		valueOf: () => r.value,
		[Symbol.toPrimitive]: () => r.value,
		toJSON: () => r.value,
		get raw() {
			return r.value;
		},
		set raw(e) {
			r.value = e;
		},
		get value() {
			return r.value;
		},
		use(e) {
			return L({
				value: r.value,
				children: () => i(e),
				additionalProps: n
			});
		},
		__update(e) {
			i = e.render, this.raw = e.raw;
		},
		...n
	}), O(o);
}, R = w({
	name: "ContentSelector",
	props: {
		dictionaryKey: {
			type: String,
			required: !0
		},
		keyPath: {
			type: Array,
			required: !0
		}
	},
	setup(e, { slots: t }) {
		return () => t.default?.();
	}
}), de = (e, t, n = m(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return u(e.content, r, n);
}, z = (e) => {
	let t = {}, n = /([a-zA-Z0-9-]+)="([^"]*)"/g, r = n.exec(e);
	for (; r !== null;) t[r[1]] = r[2], r = n.exec(e);
	return t;
}, B = /* @__PURE__ */ new Map(), fe = (e) => {
	if (B.has(e)) return B.get(e);
	if (typeof e != "string") return [];
	let t = /<(\/)?([a-zA-Z0-9.-]+)([\s\S]*?)(\/?)>/g, n = [], r = [], i = 0, a = t.exec(e), o = (e) => {
		(r.length > 0 ? r[r.length - 1].children : n).push(e);
	};
	for (; a !== null;) {
		let [n, s, c, l, u] = a, d = a.index;
		d > i && o(e.slice(i, d));
		let f = s === "/", p = u === "/" || l.trim().endsWith("/") || n.endsWith("/>"), m = l.trim().replace(/\/$/, "").trim();
		if (f) {
			let e = r[r.length - 1];
			if (e && e.tagName === c) {
				let e = r.pop();
				e && o({
					tagName: e.tagName,
					props: e.props,
					children: e.children
				});
			}
		} else if (p) o({
			tagName: c,
			props: z(m),
			children: []
		});
		else {
			let e = z(m);
			r.push({
				tagName: c,
				children: [],
				props: e
			});
		}
		i = d + n.length, a = t.exec(e);
	}
	for (i < e.length && o(e.slice(i)); r.length > 0;) {
		let e = r.pop();
		e && o({
			tagName: e.tagName,
			props: e.props,
			children: e.children
		});
	}
	return B.set(e, n), n;
}, pe = (e, t) => {
	let n = fe(e), r = 0, i = (e) => {
		if (typeof e == "string") return e;
		let { tagName: n, props: a, children: o } = e, s = o.flatMap(i), c = r++, l = t[n];
		if (!l) {
			let e = n.toLowerCase(), r = Object.keys(t).find((t) => t.toLowerCase() === e);
			r && (l = t[r]);
		}
		let u = `html-tag-${n}-${c}`;
		if (typeof l == "function") return l({
			...a,
			children: s,
			key: u
		});
		if (typeof l == "string") {
			let e = t[l];
			return typeof e == "function" ? e({
				...a,
				children: s,
				key: u
			}) : s;
		}
		if (typeof l == "object" && l && "tag" in l) {
			let { tag: e, props: n } = l, r = t[e];
			return typeof r == "function" ? r({
				...a,
				...n,
				children: s,
				key: u
			}) : s;
		}
		return s;
	}, a = n.flatMap(i);
	return a.length === 1 ? a[0] : a;
}, me = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", V = /\{\{\s*(.*?)\s*\}\}/g, he = (e, t = {}) => {
	if (!Object.values(t).some(me)) return {
		isSimple: !0,
		parts: e.replace(V, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(V), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, ge = Symbol("intlayerHTML"), _e = () => D(ge), H = (e, { components: t = {} } = {}) => {
	let n = Object.fromEntries(Object.entries(t).filter(([, e]) => e).map(([e, t]) => [e, (e) => E(t, e, e?.children)]));
	return pe(e, new Proxy(n, { get(e, t) {
		if (typeof t == "string" && t in e) return e[t];
		if (typeof t == "string" && /^[a-z][a-z0-9]*$/.test(t)) return (e) => E(t, e, e?.children);
	} }));
}, ve = ({ components: e } = {}) => {
	let t = _e();
	return (n) => t ? t.renderHTML(n, { components: e }) : H(n, { components: e });
};
w({
	name: "HTMLRenderer",
	props: {
		content: {
			type: String,
			required: !0
		},
		components: {
			type: Object,
			default: void 0
		}
	},
	setup(e) {
		let t = ve({ components: e.components });
		return () => t(e.content);
	}
});
var ye = new Set([
	"true",
	"false",
	"null",
	"undefined",
	"yes",
	"no",
	"on",
	"off",
	"NaN",
	"Infinity",
	"-Infinity"
]), be = (e) => {
	let t = e.trim();
	if (!t) return null;
	let n = 0, r = () => t[n], i = () => t[n++], a = () => n >= t.length, o = () => {
		for (; !a() && " \n	\r".includes(r());) n++;
	}, s = (e) => {
		i();
		let t = "";
		for (; !a();) {
			let n = i();
			if (n === e) return t;
			n === "\\" && !a() ? t += i() : t += n;
		}
		throw SyntaxError("Unterminated string");
	}, c = (e) => {
		let i = n;
		for (; !a() && !e.includes(r());) n++;
		return t.slice(i, n).trim();
	}, l = (e) => ye.has(e) || /^0x[0-9a-fA-F]+$/.test(e) || /^#/.test(e) ? e : /^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?$/i.test(e) ? e === "3.14159265359" ? Math.PI : Number(e) : e, u = (e) => {
		if (o(), a()) throw SyntaxError("Unexpected end of input");
		let t = r();
		if (t === "[") return d();
		if (t === "{") return _();
		if (t === "\"" || t === "'") return s(t);
		let n = c(e);
		if (!n) throw SyntaxError("Empty token");
		return l(n);
	}, d = () => {
		i();
		let e = [];
		if (o(), r() === "]") return i(), e;
		for (;;) {
			o(), e.push(u(",]")), o();
			let t = i();
			if (t === "]") break;
			if (t !== ",") throw SyntaxError("Expected ',' or ']' after array element");
			if (o(), r() === "]") throw SyntaxError("Trailing comma in array");
		}
		return e;
	}, f = () => {
		i(), o();
		let e = r();
		if (e === "{") return _();
		if (e === "\"" || e === "'") return s(e);
		let a = t.indexOf("\n", n), u = t.slice(n, a === -1 ? t.length : a);
		return /: /.test(u) ? m() : l(c("\n"));
	}, p = () => {
		let e = t.lastIndexOf("\n", n - 1) + 1, r = 0;
		for (let i = e; i < n && t[i] === " "; i++) r++;
		return r;
	}, m = () => {
		let e = {}, u = p();
		for (; !a();) {
			let d = n, f = d === 0 || t[d - 1] === "\n";
			if (o(), f && p() <= u) {
				n = d;
				break;
			}
			if (r() === "-" || a()) {
				n = d;
				break;
			}
			let m = r(), g = m === "\"" || m === "'" ? s(m) : c(":");
			if (a() || i() !== ":") break;
			if (o(), r() === "\n" && (i(), o(), r() === "-")) {
				e[g] = h();
				continue;
			}
			e[g] = l(c("\n")), r() === "\n" && i();
		}
		return e;
	}, h = () => {
		let e = [], t = p();
		for (; !a();) {
			for (; !a() && " \n	\r".includes(r()) && r() !== "-";) i();
			if (a() || p() < t || r() !== "-") break;
			e.push(f());
		}
		return e;
	}, g = (e) => {
		let t = {};
		for (o(); !a() && !e.includes(r());) {
			let l = r(), d = l === "\"" || l === "'" ? s(l) : c(`:\n${e}`);
			if (!d) return t;
			if (a() || i() !== ":") throw SyntaxError("Expected ':' after key");
			for (r() === " " && i(); !a() && " 	".includes(r());) i();
			if (a()) return t[d] = "", t;
			if (r() === "\n") {
				i();
				let a = n;
				if (o(), r() === "-") {
					t[d] = h(), o();
					continue;
				} else {
					n = a, o();
					let i = r();
					if (i && !e.includes(i) && i !== "-") {
						t[d] = "";
						continue;
					}
					return t[d] = "", t;
				}
			}
			if (t[d] = u(e.includes("}") ? `,\n${e}` : `\n${e}`), a()) return t;
			let f = r();
			if (f === "," || f === "\n") {
				i(), o();
				continue;
			}
			if (" 	".includes(f)) {
				for (; !a() && " 	".includes(r());) i();
				if (r() === "\n") {
					i(), o();
					continue;
				}
				if (a() || e.includes(r())) return t;
				continue;
			}
			if (e.includes(f)) return t;
		}
		return t;
	}, _ = () => {
		if (i(), o(), r() === "}") return i(), {};
		let e = g("}");
		if (r() !== "}") throw SyntaxError("Expected '}' at end of object");
		return i(), e;
	}, v = (e) => {
		let t = 0, n = null;
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			if (n) i === "\\" ? r++ : i === n && (n = null);
			else if (i === "\"" || i === "'") n = i;
			else if (i === "[" || i === "{") t++;
			else if (i === "]" || i === "}") t = Math.max(0, t - 1);
			else if (t === 0 && i === ":") {
				let t = e[r + 1];
				if (!t || " \n".includes(t)) return !0;
			}
		}
		return !1;
	};
	if (t.startsWith("]") || t.startsWith("}")) throw SyntaxError("Unexpected closing bracket");
	let y;
	if (y = t.startsWith("[") ? d() : t.startsWith("{") ? _() : v(t) ? g("") : u(""), o(), !a()) throw SyntaxError("Unexpected trailing characters");
	return y;
}, xe = (e) => {
	try {
		let t = e.split(/\r?\n/), n = t.find((e) => e.trim() !== "");
		if (!n || n.trim() !== "---") return {};
		let r = -1;
		for (let e = 1; e < t.length; e++) if (t[e].trim() === "---") {
			r = e;
			break;
		}
		return r === -1 ? {} : be(t.slice(1, r).join("\n")) ?? {};
	} catch {
		return {};
	}
};
(/* @__PURE__ */ "allowFullScreen.allowTransparency.autoComplete.autoFocus.autoPlay.cellPadding.cellSpacing.charSet.classId.colSpan.contentEditable.contextMenu.crossOrigin.encType.formAction.formEncType.formMethod.formNoValidate.formTarget.frameBorder.hrefLang.inputMode.keyParams.keyType.marginHeight.marginWidth.maxLength.mediaGroup.minLength.noValidate.radioGroup.readOnly.rowSpan.spellCheck.srcDoc.srcLang.srcSet.tabIndex.useMap".split(".")).reduce((e, t) => (e[t.toLowerCase()] = t, e), {
	class: "className",
	for: "htmlFor"
});
var U = "(?:\\d+\\.)", W = "(?:[*+-])", G = (e) => `(?=[\\s\\S]+?\\1${e ? "\\1" : ""})`, K = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|\\\\[^\\s]|[\\s\\S])+?)";
RegExp(`^([*_])\\1${G(1)}${K}\\1\\1(?!\\1)`), RegExp(`^([*_])${G(0)}${K}\\1(?!\\1)`), RegExp(`^(==)${G(0)}${K}\\1`), RegExp(`^(~~)${G(0)}${K}\\1`);
var q = (e) => "( *)(" + (e === 1 ? U : W) + ") +", Se = q(1), Ce = q(2), we = (e) => RegExp("^" + (e === 1 ? Se : Ce));
we(1), we(2);
var Te = (e) => RegExp("^" + (e === 1 ? Se : Ce) + "[^\\n]*(?:\\n(?!\\1" + (e === 1 ? U : W) + " )[^\\n]*)*(\\n|$)", "gm");
Te(1), Te(2);
var Ee = (e) => {
	let t = e === 1 ? U : W;
	return RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)");
};
Ee(1), Ee(2);
var De = (e) => (t, n = {}) => {
	let r = performance.now(), i = (t, n = {}) => De(e)(t, n);
	if (Array.isArray(t)) {
		let e = n.key, a = [], o = !1, s = 0;
		for (let e = 0; e < t.length; e++) {
			let r = i(t[e], {
				...n,
				key: s
			}), c = typeof r == "string";
			c && o ? a[a.length - 1] = a[a.length - 1] + r : r !== null && (a.push(r), s++), o = c;
		}
		n.key = e;
		let c = performance.now() - r;
		return c > 20 && console.log(`renderFor (array): ${c.toFixed(3)}ms, ast length: ${t.length}`), a;
	}
	let a = e(t, i, n), o = performance.now() - r;
	return o > 20 && console.log(`renderFor (single): ${o.toFixed(3)}ms, ast type: ${t.type}`), a;
}, Oe = Symbol("intlayerMarkdown"), ke = () => {
	let e = D(Oe, { renderMarkdown: (e) => e });
	if (!e) throw Error("useMarkdown must be used within a MarkdownProvider");
	return e;
}, Ae = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false", je = !0, Me = !0, Ne = !0, J = !0, Pe = Ae ? n : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => L({
			...n,
			value: e,
			children: !J && h.enabled ? () => E(R, {
				dictionaryKey: n.dictionaryKey,
				keyPath: n.keyPath
			}, { default: () => typeof e == "function" ? e() : e }) : e
		}), i = r(t);
		if (typeof t != "function") return i;
		let a = (...e) => r(t(...e));
		Object.setPrototypeOf(a, Object.getPrototypeOf(i));
		for (let e of Object.getOwnPropertyNames(i)) {
			let t = Object.getOwnPropertyDescriptor(i, e);
			t && Object.defineProperty(a, e, t);
		}
		for (let e of Object.getOwnPropertySymbols(i)) {
			let t = Object.getOwnPropertyDescriptor(i, e);
			t && Object.defineProperty(a, e, t);
		}
		return O(a);
	}
}, Fe = (e, t) => {
	let n = /* @__PURE__ */ new Map(), r = {};
	for (let [e, i] of Object.entries(t)) typeof i == "string" || typeof i == "number" ? r[e] = i : (n.set(e, i), r[e] = `__VNODE_${e}__`);
	let i = he(e, r);
	if (n.size > 0) {
		let e = [];
		if (i.isSimple) {
			let t = i.parts, r = 0;
			for (let [i] of n) {
				let a = `__VNODE_${i}__`, o = t.indexOf(a);
				o !== -1 && (o > r && e.push(t.substring(r, o)), e.push(n.get(i)), r = o + a.length);
			}
			return r < t.length && e.push(t.substring(r)), E(g, null, ...e);
		} else return i.parts.forEach((t) => {
			if (typeof t == "string") {
				let r = t;
				for (let [t] of n) {
					let i = `__VNODE_${t}__`, a = r.indexOf(i);
					a !== -1 && (a > 0 && e.push(r.substring(0, a)), e.push(n.get(t)), r = r.substring(a + i.length));
				}
				r.length > 0 && e.push(r);
			} else e.push(t);
		}), E(g, null, ...e);
	}
	return i.isSimple ? i.parts : E(g, null, i.parts);
}, Ie = Ne ? n : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: o }], i = e[o], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string",
			transform: (e, n, r) => {
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Fe(i, e);
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
}, Le = je ? n : {
	id: "markdown-string-plugin",
	canHandle: (e) => typeof e == "string",
	transform: (e, t, n) => {
		let { plugins: r, ...i } = t, a = n(xe(e) ?? {}, {
			plugins: [{
				id: "markdown-metadata-plugin",
				canHandle: (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean" || !e,
				transform: (t, n) => L({
					...n,
					value: t,
					children: e
				})
			}],
			dictionaryKey: i.dictionaryKey,
			keyPath: []
		}), o = (n) => L({
			...t,
			value: e,
			children: () => {
				let { renderMarkdown: t, components: r } = ke(), a = t(e, void 0, {
					...r ?? {},
					...n ?? {}
				});
				return !J && h.enabled ? E(R, {
					dictionaryKey: i.dictionaryKey,
					keyPath: i.keyPath
				}, { default: () => a }) : a;
			},
			additionalProps: {
				metadata: a,
				use: (e) => o(e)
			}
		});
		return o();
	}
}, Re = je ? n : {
	id: "markdown-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "markdown",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: a }], i = e[a];
		return n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [Le, ...t.plugins ?? []]
		});
	}
}, ze = Me ? n : {
	id: "html-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "html",
	transform: (e, t) => {
		let n = e[l];
		e.tags;
		let r = (e = {}) => {
			let i = H(n, { components: e });
			return L({
				...t,
				value: n,
				children: !J && h.enabled ? () => E(R, {
					dictionaryKey: t.dictionaryKey,
					keyPath: t.keyPath,
					...e
				}, { default: () => i }) : i,
				additionalProps: { use: (e) => r(e) }
			});
		};
		return r();
	}
}, Y = /* @__PURE__ */ new Map(), Be = (e, n = !0) => {
	let r = `${e ?? t.defaultLocale}_${n}`;
	if (Y.has(r)) return Y.get(r);
	let a = [
		c(e ?? t.defaultLocale, n ? t.defaultLocale : void 0),
		s,
		f,
		i(e ?? t.defaultLocale),
		d,
		p,
		Pe,
		Ie,
		Re,
		ze
	];
	return Y.set(r, a), a;
}, Ve = (e, t) => de(e, t, Be(t)), He = Symbol("intlayer"), X = (e, t) => t.reduce((e, t) => e?.[t], e), Z = (e) => typeof e == "object" && !!e, Ue = (e) => typeof e == "function" || Z(e) && ("render" in e || "setup" in e), We = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Ge = (e) => O(w({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : Ue(t) ? E(t) : Array.isArray(t) ? E("span", t) : t;
		};
	}
})), Ke = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return Ge(() => e.value);
		if (r == null) return n === Symbol.toPrimitive || n === "toString" ? () => "" : void 0;
		let i = r[n];
		return typeof i == "function" ? i.bind(r) : i;
	},
	ownKeys() {
		let t = e.value;
		return typeof t == "object" && t ? Reflect.ownKeys(t) : [];
	},
	getOwnPropertyDescriptor() {
		return {
			enumerable: !0,
			configurable: !0
		};
	}
}), qe = (e, n) => {
	let r = T() ? D(He) : void 0, i = ee(r?.locale) ? r.locale : A(r?.locale ?? t.defaultLocale), a = _(() => (n === void 0 ? void 0 : N(n)) ?? i.value), o = oe({});
	F([() => N(e), () => a.value], ([e, t]) => {
		o.value = Ve(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let s = (e) => new Proxy({}, {
		get(t, n, r) {
			if (n === "__v_isRef") return !0;
			let i = _(() => X(o.value, e));
			if (n === "value") return i.value ?? "";
			if (n === "then") return;
			if (n === "c" || n === "asComponent") return Ge(() => i.value);
			if (n === "$raw") return i;
			if (n === Symbol.toPrimitive) return () => i.value;
			let a = e.concat(n), c = X(o.value, a);
			if (c === void 0 || Z(c) && !Ue(c)) return s(a);
			if (We(c)) return Ke(_(() => X(o.value, a)));
			let l = _(() => X(o.value, a));
			return new Proxy(l, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = X(o.value, e);
			return Z(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return s([]);
}, Q = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var Je = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	return n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`), n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, Ye = (n = $) => {
	let { locales: r } = t;
	if (n?.isCookieEnabled === !1) return;
	let i = (e) => !!e && r.includes(e);
	if (!Q) for (let t = 0; t < (e.storage.cookies ?? []).length; t++) try {
		let r = n?.getCookie?.(e.storage.cookies[t].name);
		if (i(r)) return r;
	} catch {}
}, Xe = (t, n) => {
	if (n?.isCookieEnabled !== !1 && !Q && e.storage.cookies) for (let r = 0; r < e.storage.cookies.length; r++) {
		let { name: i, attributes: a } = e.storage.cookies[r];
		try {
			n?.setCookieStore && n.setCookieStore(i, t, {
				...a,
				expires: a.expires instanceof Date ? a.expires.getTime() : a.expires
			});
		} catch {
			try {
				n?.setCookieString && n.setCookieString(i, Je(i, t, a));
			} catch {}
		}
	}
}, $ = {
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
};
Ye($);
var Ze = (e, t) => Xe(e, {
	...$,
	isCookieEnabled: t
}), Qe = ({ isCookieEnabled: e, onLocaleChange: n } = {}) => {
	let { defaultLocale: r, locales: i } = t ?? {}, a = D(He);
	return {
		locale: _(() => a?.locale?.value ?? r),
		defaultLocale: r,
		availableLocales: i,
		setLocale: (t) => {
			if (!i?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			a && a.setLocale(t), Ze(t, e ?? a?.isCookieEnabled ?? !0), n?.(t);
		}
	};
};
function $e(e) {
	ne(() => {
		typeof performance < "u" && performance.mark && performance.mark(`${e}-start`);
	}), re(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var et = r.internationalization.locales;
r.internationalization.requiredLocales, r.internationalization.defaultLocale, r.editor;
var tt = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, nt = { class: "flex items-center gap-2" }, rt = ["value"], it = ["value"], at = w({
	__name: "LocaleSwitcher",
	setup(e) {
		let t = se(), n = ce(), { setLocale: r } = Qe(), i = _(() => t.params.locale || "en"), a = (e) => {
			r(e);
			let i = t.path.replace(/^\/[^/]+/, `/${e}`);
			n.push({
				path: i,
				query: t.query,
				hash: t.hash
			});
		};
		return F(i, (e) => {
			r(e);
		}, { immediate: !0 }), (e, t) => (k(), b("div", nt, [x("select", {
			value: i.value,
			onChange: t[0] ||= (e) => a(e.target.value),
			class: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
		}, [(k(!0), b(g, null, j(P(et), (e) => (k(), b("option", {
			key: e,
			value: e
		}, M(P(tt)(e)), 9, it))), 128))], 40, rt)]));
	}
}), ot = {
	key: "theme-toggle",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				auto: "Theme: Auto",
				dark: "Theme: Dark",
				light: "Theme: Light",
				ariaLabelAuto: "Theme mode: auto (system). Click to switch to light mode.",
				ariaLabelLight: "Theme mode: light. Click to switch to dark mode.",
				ariaLabelDark: "Theme mode: dark. Click to switch to auto mode."
			},
			fr: {
				auto: "Thème : Auto",
				dark: "Thème : Sombre",
				light: "Thème : Clair",
				ariaLabelAuto: "Mode de thème : auto (système). Cliquez pour passer au mode clair.",
				ariaLabelLight: "Mode de thème : clair. Cliquez pour passer au mode sombre.",
				ariaLabelDark: "Mode de thème : sombre. Cliquez pour passer au mode auto."
			},
			es: {
				auto: "Tema: Automático",
				dark: "Tema: Oscuro",
				light: "Tema: Claro",
				ariaLabelAuto: "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
				ariaLabelLight: "Modo de tema: claro. Haga clic para cambiar al modo oscuro.",
				ariaLabelDark: "Modo de tema: oscuro. Haga clic para cambiar al modo automático."
			},
			de: {
				auto: "Design: Auto",
				dark: "Design: Dunkel",
				light: "Design: Hell",
				ariaLabelAuto: "Design-Modus: Auto (System). Klicken Sie hier, um in den hellen Modus zu wechseln.",
				ariaLabelLight: "Design-Modus: Hell. Klicken Sie hier, um in den dunklen Modus zu wechseln.",
				ariaLabelDark: "Design-Modus: Dunkel. Klicken Sie hier, um in den automatischen Modus zu wechseln."
			},
			it: {
				auto: "Tema: Auto",
				dark: "Tema: Scuro",
				light: "Tema: Chiaro",
				ariaLabelAuto: "Modalità tema: auto (sistema). Fai clic per passare alla modalità chiara.",
				ariaLabelLight: "Modalità tema: chiara. Fai clic per passare alla modalità scura.",
				ariaLabelDark: "Modalità tema: scura. Fai clic per passare alla modalità automatica."
			},
			pt: {
				auto: "Tema: Automático",
				dark: "Tema: Escuro",
				light: "Tema: Claro",
				ariaLabelAuto: "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
				ariaLabelLight: "Modo de tema: claro. Clique para mudar para o modo escuro.",
				ariaLabelDark: "Modo de tema: escuro. Clique para mudar para o modo automático."
			},
			zh: {
				auto: "主题：自动",
				dark: "主题：深色",
				light: "主题：亮色",
				ariaLabelAuto: "主题模式：自动（系统）。点击切换到亮色模式。",
				ariaLabelLight: "主题模式：浅色。点击切换到深色模式。",
				ariaLabelDark: "主题模式：深色。点击切换到自动模式。"
			},
			ja: {
				auto: "テーマ：自動",
				dark: "テーマ：ダーク",
				light: "テーマ：ライト",
				ariaLabelAuto: "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。",
				ariaLabelLight: "テーマモード：ライト。クリックしてダークモードに切り替えます。",
				ariaLabelDark: "テーマモード：ダーク。クリックして自動モードに切り替えます。"
			},
			ko: {
				auto: "테마: 자동",
				dark: "테마: 다크",
				light: "테마: 라이트",
				ariaLabelAuto: "테마 모드: 자동(시스템). 라이트 모드로 전환하려면 클릭하세요.",
				ariaLabelLight: "테마 모드: 라이트. 다크 모드로 전환하려면 클릭하세요.",
				ariaLabelDark: "테마 모드: 다크. 자동 모드로 전환하려면 클릭하세요."
			},
			ru: {
				auto: "Тема: Авто",
				dark: "Тема: Темная",
				light: "Тема: Светлая",
				ariaLabelAuto: "Режим темы: авто (системный). Нажмите, чтобы перейти в светлую тему.",
				ariaLabelLight: "Режим темы: светлый. Нажмите, чтобы перейти в темную тему.",
				ariaLabelDark: "Режим темы: темный. Нажмите, чтобы перейти в автоматический режим."
			}
		}
	},
	localIds: ["theme-toggle::local::src/components/ThemeToggle.content.ts"]
}, st = ["aria-label", "title"], ct = w({
	__name: "ThemeToggle",
	setup(e) {
		let { auto: t, dark: n, light: r, ariaLabelAuto: i, ariaLabelLight: a, ariaLabelDark: o } = qe(ot), s = A("auto");
		function c() {
			if (typeof window > "u") return "auto";
			let e = window.localStorage.getItem("theme");
			return e === "light" || e === "dark" || e === "auto" ? e : "auto";
		}
		function l(e) {
			let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
			document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
		}
		re(() => {
			let e = c();
			s.value = e, l(e);
		});
		let u = null;
		F(s, (e) => {
			if (e === "auto") {
				let e = window.matchMedia("(prefers-color-scheme: dark)");
				u = () => l("auto"), e.addEventListener("change", u);
			} else u &&= (window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", u), null);
		}, { immediate: !0 }), ie(() => {
			u && window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", u);
		});
		function d() {
			let e = s.value === "light" ? "dark" : s.value === "dark" ? "auto" : "light";
			s.value = e, l(e), window.localStorage.setItem("theme", e);
		}
		let f = () => s.value === "auto" ? i.value : s.value === "light" ? a.value : o.value;
		return (e, i) => (k(), b("button", {
			type: "button",
			onClick: d,
			"aria-label": f(),
			title: f(),
			class: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80"
		}, M(s.value === "auto" ? P(t) : s.value === "dark" ? P(n) : P(r)), 9, st));
	}
}), lt = { class: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg" }, ut = { class: "container flex h-16 items-center justify-between" }, dt = { class: "flex items-center gap-8" }, ft = { class: "hidden items-center gap-6 text-sm font-medium md:flex" }, pt = { class: "relative" }, mt = { class: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1" }, ht = { class: "flex items-center gap-4" }, gt = {
	href: "https://github.com/intlayer-org/benchmark-i18n",
	target: "_blank",
	rel: "noreferrer",
	class: "text-muted-foreground transition hover:text-foreground"
}, _t = { class: "sr-only" }, vt = w({
	__name: "Header",
	setup(e) {
		$e("Header");
		let { home: t, methodology: n, mockPages: r, products: i, pricing: a, team: o, blog: s, careers: c, faq: l, contact: u, settings: d, appName: f, goToGithub: p } = qe(ue), m = A(!1), h = se(), w = _(() => h.params.locale || "en"), T = _(() => [
			{
				to: `/${w.value}/products`,
				label: i
			},
			{
				to: `/${w.value}/pricing`,
				label: a
			},
			{
				to: `/${w.value}/team`,
				label: o
			},
			{
				to: `/${w.value}/blog`,
				label: s
			},
			{
				to: `/${w.value}/careers`,
				label: c
			},
			{
				to: `/${w.value}/faq`,
				label: l
			},
			{
				to: `/${w.value}/contact`,
				label: u
			},
			{
				to: `/${w.value}/settings`,
				label: d
			}
		]);
		return (e, i) => {
			let a = ae("router-link");
			return k(), b("header", lt, [x("nav", ut, [x("div", dt, [C(a, {
				to: `/${w.value}`,
				class: "text-lg font-bold tracking-tight text-primary no-underline"
			}, {
				default: I(() => [S(M(P(f)), 1)]),
				_: 1
			}, 8, ["to"]), x("div", ft, [
				C(a, {
					to: `/${w.value}`,
					class: "nav-link",
					"exact-active-class": "is-active"
				}, {
					default: I(() => [S(M(P(t)), 1)]),
					_: 1
				}, 8, ["to"]),
				C(a, {
					to: `/${w.value}/about`,
					class: "nav-link",
					"active-class": "is-active"
				}, {
					default: I(() => [S(M(P(n)), 1)]),
					_: 1
				}, 8, ["to"]),
				y(" Mock Pages Dropdown "),
				x("div", pt, [x("button", {
					type: "button",
					class: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
					onMouseenter: i[0] ||= (e) => m.value = !0,
					onMouseleave: i[1] ||= (e) => m.value = !1,
					onClick: i[2] ||= (e) => m.value = !m.value
				}, [S(M(P(r)) + " ", 1), C(P(le), {
					size: 14,
					class: te(["transition-transform", m.value ? "rotate-180" : ""])
				}, null, 8, ["class"])], 32), m.value ? (k(), b("div", {
					key: 0,
					class: "absolute left-0 top-full pt-2 w-48",
					onMouseenter: i[4] ||= (e) => m.value = !0,
					onMouseleave: i[5] ||= (e) => m.value = !1
				}, [x("div", mt, [(k(!0), b(g, null, j(T.value, (e) => (k(), v(a, {
					key: e.to,
					to: e.to,
					class: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
					onClick: i[3] ||= (e) => m.value = !1
				}, {
					default: I(() => [S(M(e.label), 1)]),
					_: 2
				}, 1032, ["to"]))), 128))])], 32)) : y("v-if", !0)])
			])]), x("div", ht, [
				x("a", gt, [x("span", _t, M(P(p)), 1), i[6] ||= x("svg", {
					viewBox: "0 0 16 16",
					"aria-hidden": "true",
					width: "20",
					height: "20"
				}, [x("path", {
					fill: "currentColor",
					d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
				})], -1)]),
				C(at),
				C(ct)
			])])]);
		};
	}
});
export { vt as default };
import { b as e, n as t, t as n, x as r, y as i } from "./getContent-DrnKJV-E.js";
var a = (e, t) => e.every((e, n) => t[n] && t[n].key === e.key && t[n].type === e.type), o = (e, t) => {
	try {
		let n = new URL(e), r = new URL(t);
		if (n.protocol !== r.protocol || n.hostname !== r.hostname || n.port !== r.port) return !1;
		let i = n.pathname.replace(/\/$/, ""), a = r.pathname.replace(/\/$/, "");
		return !(i !== "" && a !== "" && i !== a);
	} catch (n) {
		return console.error("Invalid URL(s)", n, {
			url1: e,
			url2: t
		}), !1;
	}
}, s = (e) => {
	let t = new MouseEvent("mousedown", {
		bubbles: !0,
		cancelable: !0,
		view: window
	}), n = new MouseEvent("click", {
		bubbles: !0,
		cancelable: !0,
		view: window
	});
	Object.assign(n, { iframeData: e }), Object.assign(t, { iframeData: e }), window.dispatchEvent(n), window.dispatchEvent(t);
}, c = "__intlayer_editor_manager__", l = "__intlayer_editor_manager_events__", u = () => {
	if (typeof window > "u") return new EventTarget();
	let e = window;
	return e[l] || (e[l] = new EventTarget()), e[l];
}, d = () => typeof window > "u" ? null : window[c] ?? null, f = (e) => {
	if (typeof window < "u") {
		let t = window;
		t[c] = e;
	}
	u().dispatchEvent(new CustomEvent("change", { detail: e }));
}, p = (e) => {
	let t = u(), n = (t) => {
		e(t.detail);
	};
	return t.addEventListener("change", n), () => {
		t.removeEventListener("change", n);
	};
}, m = typeof HTMLElement < "u" ? HTMLElement : class {}, h = class extends m {
	_keyPathJson = "[]";
	_dictionaryKey = "";
	_editorEnabled = !1;
	_isInIframe = !1;
	_isSelected = !1;
	_editedValue = void 0;
	_renderState = null;
	_selector = null;
	_unsubManager = null;
	_unsubEnabled = null;
	_unsubFocused = null;
	_unsubEditedContent = null;
	static get observedAttributes() {
		return ["key-path", "dictionary-key"];
	}
	get keyPathJson() {
		return this._keyPathJson;
	}
	set keyPathJson(e) {
		this._keyPathJson = e;
		let t = d();
		t && this._updateEditedValue(t);
	}
	get dictionaryKey() {
		return this._dictionaryKey;
	}
	set dictionaryKey(e) {
		this._dictionaryKey = e;
		let t = d();
		t && this._updateEditedValue(t);
	}
	constructor() {
		super();
		let e = this.attachShadow({ mode: "open" }), t = document.createElement("style");
		t.textContent = ":host { display: contents; }", e.appendChild(t);
	}
	attributeChangedCallback(e, t, n) {
		if (e === "key-path") {
			this._keyPathJson = n ?? "[]";
			let e = d();
			e && this._updateEditedValue(e);
		} else if (e === "dictionary-key") {
			this._dictionaryKey = n ?? "";
			let e = d();
			e && this._updateEditedValue(e);
		}
	}
	connectedCallback() {
		typeof window < "u" && (this._isInIframe = window.self !== window.top), this._subscribeToManager(), this._render();
	}
	disconnectedCallback() {
		this._teardown();
	}
	_teardown() {
		this._unsubManager?.(), this._unsubEnabled?.(), this._unsubFocused?.(), this._unsubEditedContent?.(), this._unsubManager = null, this._unsubEnabled = null, this._unsubFocused = null, this._unsubEditedContent = null;
	}
	_getRawKeyPath() {
		try {
			return JSON.parse(this._keyPathJson);
		} catch {
			return [];
		}
	}
	_getFilteredKeyPath() {
		return this._getRawKeyPath().filter((e) => e.type !== i);
	}
	_updateEditedValue(e) {
		let t = this._getFilteredKeyPath();
		if (!this._dictionaryKey || t.length === 0) {
			this._editedValue = void 0, this._render();
			return;
		}
		let n = this._getRawKeyPath(), r = n[n.length - 1]?.type;
		if (r === "markdown" || r === "html" || r === "insertion" || r === "file") {
			this._editedValue = void 0, this._render();
			return;
		}
		let a = e.getContentValue(this._dictionaryKey, t);
		if (typeof a == "object" && a && a.nodeType === "translation") {
			let t = e.currentLocale.value;
			a = t ? a[i][t] : void 0;
		}
		this._editedValue = a, this._render();
	}
	_updateIsSelected(e) {
		if (!e) {
			this._isSelected = !1, this._updateSelectorAttr();
			return;
		}
		let t = this._getFilteredKeyPath();
		this._isSelected = e.dictionaryKey === this._dictionaryKey && (e.keyPath?.length ?? 0) > 0 && a(e.keyPath ?? [], t), this._updateSelectorAttr();
	}
	_updateSelectorAttr() {
		this._selector && (this._isSelected ? this._selector.setAttribute("is-selecting", "") : this._selector.removeAttribute("is-selecting"));
	}
	_subscribeToManager() {
		let e = d();
		e && this._setupManagerSubscriptions(e), this._unsubManager = p((e) => {
			this._unsubEnabled?.(), this._unsubFocused?.(), this._unsubEditedContent?.(), this._unsubEnabled = null, this._unsubFocused = null, this._unsubEditedContent = null, e ? this._setupManagerSubscriptions(e) : (this._editorEnabled = !1, this._isSelected = !1, this._editedValue = void 0, this._render());
		});
	}
	_setupManagerSubscriptions(e) {
		this._editorEnabled = e.editorEnabled.value ?? !1, this._updateIsSelected(e.focusedContent.value), this._updateEditedValue(e);
		let t = (e) => {
			this._editorEnabled = e.detail, this._render();
		}, n = (e) => {
			this._updateIsSelected(e.detail);
		}, r = () => {
			this._updateEditedValue(e);
		};
		e.editorEnabled.addEventListener("change", t), e.focusedContent.addEventListener("change", n), e.editedContent.addEventListener("change", r), this._unsubEnabled = () => e.editorEnabled.removeEventListener("change", t), this._unsubFocused = () => e.focusedContent.removeEventListener("change", n), this._unsubEditedContent = () => e.editedContent.removeEventListener("change", r);
	}
	_handlePress(e) {
		e.stopPropagation();
		let t = d();
		t && t.focusedContent.set({
			dictionaryKey: this._dictionaryKey,
			keyPath: this._getFilteredKeyPath()
		});
	}
	_handleHover(e) {
		e.stopPropagation(), d()?.messenger.send("INTLAYER_HOVERED_CONTENT_CHANGED/post", {
			dictionaryKey: this._dictionaryKey,
			keyPath: this._getFilteredKeyPath()
		});
	}
	_handleUnhover(e) {
		e.stopPropagation(), d()?.messenger.send("INTLAYER_HOVERED_CONTENT_CHANGED/post", null);
	}
	_render() {
		let e = this._isInIframe && this._editorEnabled, t = this._editedValue, n = e ? typeof t == "string" || typeof t == "number" || typeof t == "boolean" ? "wrapped-text" : "wrapped-slot" : "simple";
		if (this._renderState !== n) {
			this._rebuildContent(n);
			return;
		}
		n !== "simple" && this._selector && (this._updateSelectorAttr(), n === "wrapped-text" && this._selector.firstChild?.nodeType === Node.TEXT_NODE && (this._selector.firstChild.data = String(t)));
	}
	_rebuildContent(e) {
		let t = this.shadowRoot;
		for (; t.childNodes.length > 1;) t.removeChild(t.lastChild);
		if (this._selector = null, e === "simple") t.appendChild(document.createElement("slot"));
		else {
			let n = document.createElement("intlayer-content-selector");
			this._selector = n, this._isSelected && n.setAttribute("is-selecting", ""), n.addEventListener("intlayer:press", (e) => this._handlePress(e)), n.addEventListener("intlayer:hover", (e) => this._handleHover(e)), n.addEventListener("intlayer:unhover", (e) => this._handleUnhover(e)), e === "wrapped-text" ? n.appendChild(document.createTextNode(String(this._editedValue))) : n.appendChild(document.createElement("slot")), t.appendChild(n);
		}
		this._renderState = e;
	}
}, g = () => {
	typeof customElements > "u" || customElements.get("intlayer-content-selector-wrapper") || customElements.define("intlayer-content-selector-wrapper", h);
}, _ = typeof HTMLElement < "u" ? HTMLElement : class {}, v = class extends _ {
	_dictionaryKey = "";
	_keyPathJson = "[]";
	_locale = "";
	_editedText = null;
	_unsubManager = null;
	_unsubEditedContent = null;
	_selectorWrapper;
	_slot;
	static get observedAttributes() {
		return [
			"dictionary-key",
			"key-path",
			"locale"
		];
	}
	get dictionaryKey() {
		return this._dictionaryKey;
	}
	set dictionaryKey(e) {
		this._dictionaryKey = e, this._selectorWrapper.setAttribute("dictionary-key", e);
	}
	get keyPathJson() {
		return this._keyPathJson;
	}
	set keyPathJson(e) {
		this._keyPathJson = e, this._selectorWrapper.setAttribute("key-path", e);
	}
	get locale() {
		return this._locale;
	}
	set locale(e) {
		this._locale = e;
	}
	constructor() {
		super();
		let e = this.attachShadow({ mode: "open" }), t = document.createElement("style");
		t.textContent = ":host { display: contents; }", e.appendChild(t), this._selectorWrapper = document.createElement("intlayer-content-selector-wrapper"), this._slot = document.createElement("slot"), this._selectorWrapper.appendChild(this._slot), e.appendChild(this._selectorWrapper);
	}
	attributeChangedCallback(e, t, n) {
		let r = n ?? "";
		e === "dictionary-key" ? (this._dictionaryKey = r, this._selectorWrapper.setAttribute("dictionary-key", r)) : e === "key-path" ? (this._keyPathJson = r || "[]", this._selectorWrapper.setAttribute("key-path", this._keyPathJson)) : e === "locale" && (this._locale = r);
	}
	connectedCallback() {
		this._subscribeToManager();
	}
	disconnectedCallback() {
		this._teardown();
	}
	_teardown() {
		this._unsubManager?.(), this._unsubEditedContent?.(), this._unsubManager = null, this._unsubEditedContent = null;
	}
	_getKeyPath() {
		try {
			return JSON.parse(this._keyPathJson);
		} catch {
			return [];
		}
	}
	_render() {
		for (; this._selectorWrapper.firstChild;) this._selectorWrapper.removeChild(this._selectorWrapper.firstChild);
		this._editedText === null ? this._selectorWrapper.appendChild(this._slot) : this._selectorWrapper.appendChild(document.createTextNode(this._editedText));
	}
	_resolveEditedText(e) {
		let r = this._getKeyPath(), i = e.getContentValue(this._dictionaryKey, r);
		if (i == null) {
			this._editedText = null, this._render();
			return;
		}
		if (typeof i == "string" || typeof i == "number") {
			this._editedText = String(i), this._render();
			return;
		}
		if (typeof i == "object") {
			let e = this._locale || void 0, a = t(i, {
				locale: e,
				dictionaryKey: this._dictionaryKey,
				keyPath: r
			}, n(e));
			typeof a == "string" || typeof a == "number" ? this._editedText = String(a) : (console.error(`[intlayer-edited-content] Incorrect edited content format. Expected string. Value: ${JSON.stringify(a)}`), this._editedText = null), this._render();
			return;
		}
		this._editedText = null, this._render();
	}
	_setupManagerSubscriptions(e) {
		this._resolveEditedText(e);
		let t = () => this._resolveEditedText(e);
		e.editedContent.addEventListener("change", t), this._unsubEditedContent = () => e.editedContent.removeEventListener("change", t);
	}
	_subscribeToManager() {
		let e = d();
		e && this._setupManagerSubscriptions(e), this._unsubManager = p((e) => {
			this._unsubEditedContent?.(), this._unsubEditedContent = null, e ? this._setupManagerSubscriptions(e) : (this._editedText = null, this._render());
		});
	}
}, y = () => {
	typeof customElements > "u" || customElements.get("intlayer-edited-content") || customElements.define("intlayer-edited-content", v);
}, b = () => Math.random().toString(36).slice(2), x = class {
	senderId;
	_config;
	_subscribers = /* @__PURE__ */ new Map();
	_windowHandler = null;
	_seenMessageIds = /* @__PURE__ */ new Set();
	constructor(e) {
		this._config = e, this.senderId = b();
	}
	start() {
		typeof window > "u" || this._windowHandler || (this._windowHandler = (e) => {
			this._handleMessage(e);
		}, window.addEventListener("message", this._windowHandler));
	}
	stop() {
		this._windowHandler &&= (window.removeEventListener("message", this._windowHandler), null);
	}
	send(e, t) {
		let n = {
			type: e,
			data: t,
			senderId: this.senderId,
			messageId: b()
		};
		for (let e of this._config.allowedOrigins) e && this._config.postMessageFn(n, e);
	}
	subscribe(e, t) {
		return this._subscribers.has(e) || this._subscribers.set(e, /* @__PURE__ */ new Set()), this._subscribers.get(e).add(t), () => {
			this._subscribers.get(e)?.delete(t);
		};
	}
	_handleMessage(e) {
		let t = e.data;
		if (!t || typeof t != "object") return;
		let { type: n, data: r, senderId: i, messageId: a } = t;
		if (!n || typeof n != "string" || i === this.senderId) return;
		if (a) {
			if (this._seenMessageIds.has(a)) return;
			this._seenMessageIds.add(a), this._seenMessageIds.size > 200 && this._seenMessageIds.clear();
		}
		let { allowedOrigins: s } = this._config;
		if (!(!s || s.length === 0 || s.includes("*") || s.filter((e) => !!e && e !== "").some((t) => o(t, e.origin)))) return;
		let c = this._subscribers.get(n);
		if (c) for (let e of c) e(r, i);
	}
}, S = class extends EventTarget {
	_value;
	_key;
	_messenger;
	_options;
	_unsubscribers = [];
	constructor(e, t, n = {}) {
		super(), this._key = e, this._messenger = t, this._options = {
			emit: n.emit ?? !0,
			receive: n.receive ?? !0
		}, n.initialValue !== void 0 && (this._value = n.initialValue);
	}
	get value() {
		return this._value;
	}
	set(e) {
		this._value = e, this.dispatchEvent(new CustomEvent("change", { detail: e })), this._options.emit && this._messenger.send(`${this._key}/post`, e);
	}
	start() {
		if (this._options.receive) {
			let e = this._messenger.subscribe(`${this._key}/post`, (e) => {
				this._value = e, this.dispatchEvent(new CustomEvent("change", { detail: e }));
			});
			this._unsubscribers.push(e);
		}
		if (this._options.emit) {
			let e = this._messenger.subscribe(`${this._key}/get`, (e, t) => {
				t !== this._messenger.senderId && this._value !== void 0 && this._messenger.send(`${this._key}/post`, this._value);
			});
			this._unsubscribers.push(e);
		}
		this._options.receive && this._value === void 0 && this._messenger.send(`${this._key}/get`);
	}
	stop() {
		for (let e of this._unsubscribers) e();
		this._unsubscribers.length = 0;
	}
	postCurrentValue() {
		this._value !== void 0 && this._messenger.send(`${this._key}/post`, this._value);
	}
}, C = class {
	_messenger;
	_mousedownHandler = null;
	_unsubscribeMerge = null;
	constructor(e) {
		this._messenger = e;
	}
	startInterceptor() {
		typeof window > "u" || (this._mousedownHandler = () => {
			this._messenger.send("INTLAYER_IFRAME_CLICKED");
		}, window.addEventListener("mousedown", this._mousedownHandler));
	}
	startMerger() {
		this._unsubscribeMerge = this._messenger.subscribe("INTLAYER_IFRAME_CLICKED", s);
	}
	stopInterceptor() {
		this._mousedownHandler &&= (window.removeEventListener("mousedown", this._mousedownHandler), null);
	}
	stopMerger() {
		this._unsubscribeMerge?.(), this._unsubscribeMerge = null;
	}
}, w = class {
	_messenger;
	_originalPushState = null;
	_originalReplaceState = null;
	_listeners = [];
	constructor(e) {
		this._messenger = e;
	}
	start() {
		if (typeof window > "u") return;
		let e = () => {
			this._messenger.send("INTLAYER_URL_CHANGE/post", window.location.pathname);
		};
		this._originalPushState = history.pushState, this._originalReplaceState = history.replaceState;
		let t = (e) => function(...t) {
			e.apply(this, t), window.dispatchEvent(new Event("locationchange"));
		};
		history.pushState = t(this._originalPushState), history.replaceState = t(this._originalReplaceState);
		for (let t of [
			"locationchange",
			"popstate",
			"hashchange",
			"load"
		]) {
			let n = e;
			window.addEventListener(t, n), this._listeners.push([t, n]);
		}
		e();
	}
	stop() {
		if (!(typeof window > "u")) {
			for (let [e, t] of this._listeners) window.removeEventListener(e, t);
			this._listeners = [], this._originalPushState &&= (history.pushState = this._originalPushState, null), this._originalReplaceState &&= (history.replaceState = this._originalReplaceState, null);
		}
	}
}, T = (e, t, n) => {
	let r = e, i = null, a = [];
	if (t.length === 0) return n;
	try {
		for (let e = 0; e < t.length; e++) {
			let o = t[e];
			if (i = r, (o.type === "object" || o.type === "array") && (a = [o.key], (!r[o.key] || typeof r[o.key] != "object") && (r[o.key] = {}), r = r[o.key]), (o.type === "translation" || o.type === "enumeration") && (a = [o.type, o.key], (!r[o.type] || typeof r[o.type] != "object") && (r[o.type] = {}), (!r[o.type][o.key] || typeof r[o.type][o.key] != "object") && (r[o.type][o.key] = {}), r = r[o.type][o.key]), (o.type === "enumeration" || o.type === "condition") && o.type !== "enumeration" && (a = [o.type, o.key], r = r[o.type][o.key]), (o.type === "markdown" || o.type === "html" || o.type === "insertion") && (a = [o.type], (!r[o.type] || typeof r[o.type] != "object") && (r[o.type] = ""), r = r[o.type]), o.type === "file" && (a = ["content"], r = r.content), e === t.length - 1 && i && a.length > 0) {
				let e = i;
				for (let t of a.slice(0, -1)) e = e[t];
				let t = a[a.length - 1];
				if (n === void 0) if (Array.isArray(e)) {
					let n = Number(t);
					!Number.isNaN(n) && n >= 0 && n < e.length && e.splice(n, 1);
				} else delete e[t];
				else e[t] = n;
			}
		}
		return e;
	} catch (r) {
		return console.error("Cannot edit dictionary by key path", {
			dictionaryContent: e,
			keyPath: t,
			newValue: n
		}, r), e;
	}
}, E = (e, t, n) => {
	let r = structuredClone(e);
	for (let e of t) n && r?.nodeType === "translation" && (r = r?.[i]?.[n]), (e.type === "object" || e.type === "array") && (r = r?.[e.key]), (e.type === "translation" || e.type === "condition" || e.type === "enumeration") && (r = r?.[e.type]?.[e.key]), (e.type === "markdown" || e.type === "html" || e.type === "insertion" || e.type === "file") && (r = r?.[e.type]);
	return r;
}, D = (e, t, n) => {
	let r = e, i = null, a = null;
	for (let e of n) i = r, (e.type === "object" || e.type === "array") && (a = e.key, r = r[e.key]), (e.type === "translation" || e.type === "enumeration" || e.type === "condition") && (a = e.type, r = r[e.type][e.key]), (e.type === "markdown" || e.type === "reactNode" || e.type === "html" || e.type === "insertion" || e.type === "file") && (a = e.type, r = r[e.type]);
	if (i && a !== null) if (Array.isArray(i)) i[a] = r;
	else {
		let e = {};
		for (let n of Object.keys(i)) n === a && t !== void 0 ? e[t] = r : e[n] = i[n];
		Object.keys(i).forEach((e) => {
			delete i[e];
		}), Object.assign(i, e);
	}
	return e;
}, O = class {
	messenger;
	editorEnabled;
	focusedContent;
	localeDictionaries;
	editedContent;
	configuration;
	currentLocale;
	_urlManager;
	_iframeInterceptor;
	_mode;
	_configuration;
	_unsubAreYouThere = null;
	_unsubActivate = null;
	_unsubClientReady = null;
	constructor(e) {
		this._mode = e.mode, this._configuration = e.configuration, this.messenger = new x(e.messenger), this.editorEnabled = new S("INTLAYER_EDITOR_ENABLED", this.messenger, {
			emit: !1,
			receive: !0,
			initialValue: !1
		}), this.focusedContent = new S("INTLAYER_FOCUSED_CONTENT_CHANGED", this.messenger, {
			emit: !0,
			receive: !0,
			initialValue: null
		}), this.localeDictionaries = new S("INTLAYER_LOCALE_DICTIONARIES_CHANGED", this.messenger), this.editedContent = new S("INTLAYER_EDITED_CONTENT_CHANGED", this.messenger), this.configuration = new S("INTLAYER_CONFIGURATION", this.messenger, {
			emit: !0,
			receive: !1,
			...e.configuration ? { initialValue: e.configuration } : {}
		}), this.currentLocale = new S("INTLAYER_CURRENT_LOCALE", this.messenger, {
			emit: e.mode === "client",
			receive: e.mode === "editor"
		}), this._urlManager = new w(this.messenger), this._iframeInterceptor = new C(this.messenger);
	}
	start() {
		this.messenger.start(), this.editorEnabled.start(), this.focusedContent.start(), this.localeDictionaries.start(), this.editedContent.start(), this.configuration.start(), this.currentLocale.start(), this._mode === "client" ? (this._urlManager.start(), this._iframeInterceptor.startInterceptor(), this._loadDictionaries(), this.messenger.send("INTLAYER_EDITED_CONTENT_CHANGED/get"), this._configuration?.editor?.enabled !== !1 && this._setupActivationHandshake()) : (this._iframeInterceptor.startMerger(), this._setupEditorHandshake());
	}
	stop() {
		this._unsubAreYouThere?.(), this._unsubActivate?.(), this._unsubClientReady?.(), this._unsubAreYouThere = null, this._unsubActivate = null, this._unsubClientReady = null, this.messenger.stop(), this.editorEnabled.stop(), this.focusedContent.stop(), this.localeDictionaries.stop(), this.editedContent.stop(), this.configuration.stop(), this.currentLocale.stop(), this._urlManager.stop(), this._iframeInterceptor.stopInterceptor(), this._iframeInterceptor.stopMerger();
	}
	pingClient() {
		this._mode === "editor" && this.messenger.send("INTLAYER_ARE_YOU_THERE");
	}
	setFocusedContentKeyPath(e) {
		let t = e.filter((e) => e.type !== i), n = this.focusedContent.value;
		n && this.focusedContent.set({
			...n,
			keyPath: t
		});
	}
	setLocaleDictionary(e) {
		if (!e.localId) return;
		let t = this.localeDictionaries.value ?? {};
		this.localeDictionaries.set({
			...t,
			[e.localId]: e
		});
	}
	setEditedDictionary(e) {
		if (!e.localId) {
			console.error("setEditedDictionary: missing localId", e);
			return;
		}
		let t = this.editedContent.value ?? {};
		this.editedContent.set({
			...t,
			[e.localId]: e
		});
	}
	setEditedContent(e, t) {
		let n = this.editedContent.value ?? {};
		this.editedContent.set({
			...n,
			[e]: {
				...n[e],
				content: t
			}
		});
	}
	addContent(e, t, n = [], r = !0) {
		let i = this.editedContent.value ?? {}, a = (this.localeDictionaries.value ?? {})[e]?.content, o = structuredClone(i[e]?.content ?? a), s = n;
		if (!r) {
			let e = 0, t = n.slice(0, -1), r = n[n.length - 1], i = r.key;
			for (; E(o, s) !== void 0;) e++, i = e === 0 ? r.key : `${r.key} (${e})`, s = [...t, {
				...r,
				key: i
			}];
		}
		let c = T(o, s, t);
		this.editedContent.set({
			...i,
			[e]: {
				...i[e],
				content: c
			}
		});
	}
	renameContent(e, t, n = []) {
		let r = this.editedContent.value ?? {}, i = (this.localeDictionaries.value ?? {})[e]?.content, a = D(structuredClone(r[e]?.content ?? i), t, n);
		this.editedContent.set({
			...r,
			[e]: {
				...r[e],
				content: a
			}
		});
	}
	removeContent(e, t) {
		let n = this.editedContent.value ?? {}, r = (this.localeDictionaries.value ?? {})[e]?.content, i = T(structuredClone(n[e]?.content ?? r), t, E(r, t));
		this.editedContent.set({
			...n,
			[e]: {
				...n[e],
				content: i
			}
		});
	}
	restoreContent(e) {
		let t = { ...this.editedContent.value ?? {} };
		delete t[e], this.editedContent.set(t);
	}
	clearContent(e) {
		let t = { ...this.editedContent.value ?? {} };
		delete t[e], this.editedContent.set(t);
	}
	clearAllContent() {
		this.editedContent.set({});
	}
	getContentValue(e, t) {
		let n = this.editedContent.value;
		if (!n) return;
		let r = t.filter((e) => e.type !== i), a = this.localeDictionaries.value;
		if (e.includes(":local:") || e.includes(":remote:")) return a && !(e in a) ? void 0 : E(n[e]?.content ?? {}, r, this.currentLocale.value);
		let o = Object.keys(n).filter((t) => t.startsWith(`${e}:`) && (!a || t in a));
		for (let e of o) {
			let t = E(n[e]?.content ?? {}, r, this.currentLocale.value);
			if (t) return t;
		}
	}
	_setupEditorHandshake() {
		this._unsubClientReady = this.messenger.subscribe("INTLAYER_CLIENT_READY", () => {
			this.editorEnabled.set(!0), this.messenger.send("INTLAYER_EDITOR_ACTIVATE");
		}), this.messenger.send("INTLAYER_ARE_YOU_THERE");
	}
	_setupActivationHandshake() {
		this.messenger.send("INTLAYER_CLIENT_READY"), this._unsubAreYouThere = this.messenger.subscribe("INTLAYER_ARE_YOU_THERE", () => {
			this.messenger.send("INTLAYER_CLIENT_READY");
		}), this._unsubActivate = this.messenger.subscribe("INTLAYER_EDITOR_ACTIVATE", () => {
			this.editorEnabled.set(!0), this._broadcastData();
		});
	}
	_broadcastData() {
		let e = this.configuration.value;
		e && this.messenger.send("INTLAYER_CONFIGURATION/post", e);
		let t = this.currentLocale.value;
		t && this.messenger.send("INTLAYER_CURRENT_LOCALE/post", t);
		let n = this.localeDictionaries.value;
		n && this.messenger.send("INTLAYER_LOCALE_DICTIONARIES_CHANGED/post", n);
	}
	async _loadDictionaries() {
		try {
			let e = (await import("./unmerged_dictionaries-DJdbKeYc.js")).getUnmergedDictionaries(), t = Object.fromEntries(Object.values(e).flat().map((e) => [e.localId, e]));
			this.localeDictionaries.set(t), this.editorEnabled.value && this._broadcastData();
		} catch (e) {
			console.warn("[intlayer] Failed to load unmerged dictionaries:", e);
		}
	}
}, k = typeof HTMLElement < "u" ? HTMLElement : class {}, A = class extends k {
	_configuration = void 0;
	_locale = void 0;
	_initialized = !1;
	_unsubManager = null;
	static get observedAttributes() {
		return ["locale"];
	}
	get configuration() {
		return this._configuration;
	}
	set configuration(e) {
		this._configuration = e, this._initialized || this._init();
	}
	get locale() {
		return this._locale;
	}
	set locale(e) {
		this._locale = e, e && this._initialized && this._syncLocale(e);
	}
	attributeChangedCallback(e, t, n) {
		e === "locale" && n !== null && (this._locale = n, this._initialized && this._syncLocale(n));
	}
	connectedCallback() {
		this._init();
	}
	disconnectedCallback() {
		this._unsubManager?.(), this._unsubManager = null, this._initialized &&= (B(), !1);
	}
	_init() {
		this._initialized || (z(), this._initialized = !0, this._locale && this._syncLocale(this._locale));
	}
	_syncLocale(e) {
		let t = d();
		t ? t.currentLocale.set(e) : (this._unsubManager?.(), this._unsubManager = p((t) => {
			t && (this._unsubManager?.(), this._unsubManager = null, t.currentLocale.set(e));
		}));
	}
}, j = () => {
	typeof customElements > "u" || customElements.get("intlayer-editor") || customElements.define("intlayer-editor", A);
}, M = 250, N = "\n  :host {\n    display: contents;\n  }\n\n  .wrapper {\n    display: inline-block;\n    cursor: pointer;\n    user-select: none;\n    border-radius: 0.375rem;\n    outline-width: 2px;\n    outline-offset: 4px;\n    outline-style: solid;\n    outline-color: transparent;\n    transition: all 100ms 50ms ease-in-out;\n  }\n\n  .wrapper[data-active] {\n    outline-color: inherit;\n  }\n", P = typeof HTMLElement < "u" ? HTMLElement : class {}, F = class extends P {
	_isSelecting = !1;
	_pressDuration = M;
	_isHovered = !1;
	_isSelectingState = !1;
	_wrapper;
	_pressTimer = null;
	_clickOutsideHandler = null;
	static get observedAttributes() {
		return ["is-selecting", "press-duration"];
	}
	get isSelecting() {
		return this._isSelecting;
	}
	set isSelecting(e) {
		this._isSelecting = e, this._updateActiveState();
	}
	get pressDuration() {
		return this._pressDuration;
	}
	set pressDuration(e) {
		this._pressDuration = e;
	}
	constructor() {
		super();
		let e = this.attachShadow({ mode: "open" }), t = document.createElement("style");
		t.textContent = N, e.appendChild(t);
		let n = document.createElement("span");
		n.className = "wrapper", n.setAttribute("role", "button"), n.setAttribute("tabindex", "0"), n.appendChild(document.createElement("slot")), e.appendChild(n), this._wrapper = n, n.addEventListener("mousedown", () => this._handleMouseDown()), n.addEventListener("mouseup", () => this._handleMouseUpOrLeave()), n.addEventListener("mouseleave", () => this._handleMouseUpOrLeave()), n.addEventListener("mouseenter", () => this._handleMouseEnter()), n.addEventListener("click", (e) => this._handleClick(e)), n.addEventListener("touchstart", () => this._handleMouseDown()), n.addEventListener("touchend", () => this._handleMouseUpOrLeave()), n.addEventListener("touchcancel", () => this._handleMouseUpOrLeave()), n.addEventListener("blur", () => this._handleBlur());
	}
	attributeChangedCallback(e, t, n) {
		e === "is-selecting" ? (this._isSelecting = n !== null, this._updateActiveState()) : e === "press-duration" && (this._pressDuration = n === null ? M : parseInt(n, 10));
	}
	connectedCallback() {
		this._clickOutsideHandler = (e) => {
			e.composedPath().includes(this) || (this._isSelectingState = !1, this._dispatch("intlayer:click-outside"), this._updateActiveState());
		}, document.addEventListener("mousedown", this._clickOutsideHandler);
	}
	disconnectedCallback() {
		this._clickOutsideHandler &&= (document.removeEventListener("mousedown", this._clickOutsideHandler), null), this._clearPressTimer();
	}
	_updateActiveState() {
		this._isSelecting || this._isSelectingState || this._isHovered ? this._wrapper.setAttribute("data-active", "") : this._wrapper.removeAttribute("data-active");
	}
	_clearPressTimer() {
		this._pressTimer !== null && (clearTimeout(this._pressTimer), this._pressTimer = null);
	}
	_dispatch(e) {
		this.dispatchEvent(new CustomEvent(e, {
			bubbles: !0,
			composed: !0
		}));
	}
	_handleMouseDown() {
		this._clearPressTimer(), this._pressTimer = setTimeout(() => {
			this._isSelectingState = !0, this._updateActiveState(), this._dispatch("intlayer:press");
		}, this._pressDuration);
	}
	_handleMouseEnter() {
		this._isHovered = !0, this._updateActiveState(), this._dispatch("intlayer:hover");
	}
	_handleMouseUpOrLeave() {
		this._isHovered && (this._isHovered = !1, this._dispatch("intlayer:unhover")), this._clearPressTimer(), this._updateActiveState();
	}
	_handleClick(e) {
		(this._isSelecting || this._isSelectingState) && (e.preventDefault(), e.stopPropagation());
	}
	_handleBlur() {
		this._isSelectingState = !1, this._updateActiveState();
	}
}, I = () => {
	typeof customElements > "u" || (customElements.get("intlayer-content-selector") || customElements.define("intlayer-content-selector", F), g(), y(), j());
}, L = () => ({
	allowedOrigins: [r?.editorURL, r?.cmsURL].filter(Boolean),
	postMessageFn: (e, t) => {
		typeof window > "u" || window.self !== window.top && window.parent?.postMessage(e, t);
	}
}), R = 0, z = () => {
	R++;
	let t = d();
	if (t) return t;
	let n = new O({
		mode: "client",
		messenger: L(),
		configuration: e
	});
	return f(n), I(), n.start(), n;
}, B = () => {
	R = Math.max(0, R - 1), !(R > 0) && (d()?.stop(), f(null));
};
export { z as initEditorClient, B as stopEditorClient };
var e = {
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
}, t = {
	mode: "prefix-no-default",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, n = {
	editorURL: "http://localhost:8000",
	cmsURL: "https://app.intlayer.org",
	backendURL: "https://back.intlayer.org",
	port: 8e3,
	enabled: !1,
	dictionaryPriorityStrategy: "local_first",
	liveSync: !0,
	liveSyncPort: 4e3,
	liveSyncURL: "http://localhost:4000"
}, r = {
	internationalization: e,
	routing: t,
	editor: n,
	log: {
		mode: "default",
		prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
	},
	system: {
		baseDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app",
		moduleAugmentationDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/types",
		unmergedDictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/unmerged_dictionary",
		remoteDictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/remote_dictionary",
		dictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/dictionary",
		dynamicDictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/dynamic_dictionary",
		fetchDictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/fetch_dictionary",
		typesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/types",
		mainDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/main",
		configDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/config",
		cacheDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/cache",
		tempDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/.intlayer/tmp"
	},
	content: {
		fileExtensions: [
			".content.ts",
			".content.js",
			".content.cjs",
			".content.mjs",
			".content.json",
			".content.json5",
			".content.jsonc",
			".content.tsx",
			".content.jsx"
		],
		contentDir: ["/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app"],
		codeDir: ["/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app"],
		excludedPath: [
			"**/node_modulesdistbuild.intlayer.next.nuxt.expo.vercel.turbo.tanstack*.{tsx,ts,js,mjs,cjs,jsx,vue,svelte,astro}",
			"!**/node_modulesdistbuild.intlayer.next.nuxt.expo.vercel.turbo.tanstack*.config.*",
			"!***.spec.*",
			"!***.d.ts",
			"!***.map"
		],
		outputFormat: ["esm", "cjs"],
		cache: !0,
		checkTypes: !1
	},
	ai,
	dictionary,
	build,
	compiler: {
		enabled: !0,
		dictionaryKeyPrefix: "",
		noMetadata: !1,
		saveComponents: !1
	}
}, i = "translation", a = "enumeration", o = "condition", s = "insertion", c = "file", l = "object", u = "array", d = "reactNode", f = "markdown", p = "html", m = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => m(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => m(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: u,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) Object.defineProperty(n, r, {
		enumerable: !0,
		configurable: !0,
		get: function() {
			let n = {
				...t,
				children: e[r],
				keyPath: [...t.keyPath, {
					type: l,
					key: r
				}]
			}, i = m(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, h = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, g = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (h(e) && h(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : g(e[r], t[r]));
		return n;
	}
	return e;
}, _ = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => g(e, t));
}, v = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", y = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, b = (e, t) => v ? y : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, a) => {
		let o = n.translation ?? {}, s = {};
		for (let e in o) {
			let t = {
				...r,
				children: o[e],
				keyPath: [...r.keyPath, {
					type: i,
					key: e
				}]
			};
			s[e] = a(o[e], t);
		}
		return _(s, e, t);
	}
}, x = y, S = y, C = y, w = y, T = (e) => y, E = y, D = (t, n = !0) => [
	b(t ?? e.defaultLocale, n ? e.defaultLocale : void 0),
	x,
	S,
	C,
	T(t ?? e.defaultLocale),
	E,
	w
], O = (e, t, n = []) => m(e, {
	...t,
	plugins: n
});
export { t as C, e as S, l as _, y as a, r as b, T as c, o as d, a as f, f as g, s as h, x as i, b as l, p as m, O as n, E as o, c as p, S as r, w as s, D as t, u, d as v, n as x, i as y };
var e = {}, t = () => e;
export { t as getUnmergedDictionaries };
