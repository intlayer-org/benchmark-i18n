import { createComponent as e, insert as t, template as n } from "solid-js/web";
import { createContext as r, createMemo as i, lazy as a, useContext as o } from "solid-js";
import { A as s, useParams as c } from "@solidjs/router";
var l = {
	key: "footer",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				a: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
				f: "Resources",
				e: "Methodology",
				c: "Contributing",
				b: "Contact",
				d: "i18n Benchmark — Open-source project. Built with Solid, Vite & Solid Router."
			},
			fr: {
				a: "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.",
				f: "Ressources",
				e: "Méthodologie",
				c: "Contribuer",
				b: "Contact",
				d: "i18n Benchmark — Projet open source. Construit avec Solid, Vite & Solid Router."
			},
			es: {
				a: "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el tiempo de carga y la reactividad de la aplicación.",
				f: "Recursos",
				e: "Metodología",
				c: "Contribución",
				b: "Contacto",
				d: "i18n Benchmark — Proyecto de código abierto. Construido con Solid, Vite y Solid Router."
			},
			de: {
				a: "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.",
				f: "Ressourcen",
				e: "Methodik",
				c: "Beitragen",
				b: "Kontakt",
				d: "i18n Benchmark — Open-Source-Projekt. Erstellt mit Solid, Vite & Solid Router."
			},
			it: {
				a: "Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sui tempi di caricamento e sulla reattività dell'app.",
				f: "Risorse",
				e: "Metodologia",
				c: "Contribuire",
				b: "Contatti",
				d: "i18n Benchmark — Progetto open source. Creato con Solid, Vite & Solid Router."
			},
			pt: {
				a: "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade da aplicação.",
				f: "Recursos",
				e: "Metodologia",
				c: "Contribuindo",
				b: "Contato",
				d: "i18n Benchmark — Projeto de código aberto. Construído com Solid, Vite & Solid Router."
			},
			zh: {
				a: "一个开源测试应用程序，用于衡量国际化库对捆绑包大小、加载时间和应用程序反应性的真实影响。",
				f: "资源",
				e: "方法论",
				c: "贡献",
				b: "联系我们",
				d: "i18n Benchmark — 开源项目。使用 Solid、Vite 和 Solid Router 构建。"
			},
			ja: {
				a: "国際化ライブラリがバンドルサイズ、ロード時間、アプリの反応性に与える実際の影響を測定するためのオープンソーステストアプリケーションです。",
				f: "リソース",
				e: "方法論",
				c: "貢献する",
				b: "お問い合わせ",
				d: "i18n Benchmark — オープンソースプロジェクト。Solid、Vite、Solid Routerで構築されています。"
			},
			ko: {
				a: "번들 크기, 로딩 시간 및 앱 반응성에 대한 국제화 라이브러리의 실제 영향을 측정하기 위한 오픈 소스 테스트 애플ри케이션입니다.",
				f: "리소스",
				e: "방법론",
				c: "기여",
				b: "문의",
				d: "i18n Benchmark — 오픈 소스 프로젝트. Solid, Vite 및 Solid Router로 제작되었습니다."
			},
			ru: {
				a: "Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.",
				f: "Ресурсы",
				e: "Методология",
				c: "Вклад",
				b: "Контакт",
				d: "i18n Benchmark — проект с открытым исходным кодом. Построен на Solid, Vite и Solid Router."
			}
		}
	}
}, u = {
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
}, d = {
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
}, f = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var p = {
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
}, m = (e = p) => {
	let { locales: t } = u;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!f) for (let t = 0; t < (d.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(d.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, h = !1, g, _ = () => typeof window > "u" ? m(p) : (h ||= (g = m(p), !0), g), v = /* @__PURE__ */ new Map(), ee = (e, t) => Object.create(new Proxy(e, {
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
}), y = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = v.get(t);
	i || (i = /* @__PURE__ */ new Map(), v.set(t, i));
	let a = i.get(r);
	return a || (a = ee(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, b = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return Object.setPrototypeOf(r, y(t, Array.prototype)), r;
}, x = /* @__PURE__ */ new WeakMap(), S = 0, C = (e) => {
	if (!e) return "base";
	let t = x.get(e);
	if (t) return t;
	S += 1;
	let n = `p${S}`;
	return x.set(e, n), n;
}, w = 256, T = /* @__PURE__ */ new WeakMap(), E = (e) => typeof e == "object" && !!e, D = (e, t, n) => `${e}_${t}_${C(n)}`, O = (e, t) => {
	if (!E(e)) return { hit: !1 };
	let n = T.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, k = (e, t, n) => {
	if (!E(e)) return n;
	let r = T.get(e);
	return r || (r = /* @__PURE__ */ new Map(), T.set(e, r)), r.size >= w && r.clear(), r.set(t, n), n;
}, A = "translation", j = "object", M = "array", N = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), P = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, P);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => P(e, N(t, e, {
		type: M,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: j,
			key: r
		};
		if (t.eager) {
			n[r] = P(e[r], N(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = P(e[r], N(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, F = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, I = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !F(e) || !F(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? I(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, te = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => I(e, t));
}, L = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, R = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? L : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = te(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: A,
				key: e
			}]
		});
	}
}, z = L, B = (e) => L, V = L, H = L, U = L, W = L, G = (e) => L, K = L, q = (e, t = !0) => [
	R(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
	z,
	B(e ?? u.defaultLocale),
	V,
	H,
	G(e ?? u.defaultLocale),
	K,
	U,
	W
].filter((e) => e !== L), J = (e, t, n = []) => P(e, {
	...t,
	plugins: n
}), Y = /* @__PURE__ */ new WeakSet(), X = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = D(r ?? u.defaultLocale, "", n), o = O(e, a);
	if (o.hit) return o.content;
	let s = n ?? q(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !Y.has(e)
		};
		Y.add(e);
		try {
			return J(e.content, t, s);
		} finally {
			t.eager && Y.delete(e);
		}
	};
	return c === null ? k(e, a, null) : Array.isArray(c) ? k(e, a, c.map(l)) : k(e, a, l(c));
}, Z = null, Q = null;
Z?.catch(() => {}), Q?.catch(() => {});
var ne = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => b({
		value: t.children,
		children: t.children
	})
}, re = L, ie = L;
a(() => Z.then((e) => ({ default: e.MarkdownRenderer }))), a(() => Z.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var ae = L;
a(() => Q.then((e) => ({ default: e })));
var oe = L, $ = /* @__PURE__ */ new Map(), se = (e, t = !0) => {
	let n = `${e ?? u.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		ne,
		R(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
		z,
		B(e ?? u.defaultLocale),
		V,
		G(e ?? u.defaultLocale),
		K,
		U,
		W,
		re,
		ie,
		ae,
		oe
	].filter((e) => e !== L);
	return $.set(n, r), r;
}, ce = (e, t) => X(e, t, se(typeof t == "object" && t ? t.locale : t)), le = _, ue = r({
	locale: () => le() ?? u?.defaultLocale,
	setLocale: () => null
}), de = Symbol("LOADABLE_SETTLED_VALUE"), fe = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[de];
}, pe = (e, t) => {
	let n = o(ue) ?? {}, r = i(() => {
		let r = n?.locale?.();
		return ce(fe(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, me = n("<footer class=\"mt-20 border-t border-border bg-card\"><div class=\"container py-8\"><div class=\"grid gap-8 md:grid-cols-3\"><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\">i18n Benchmark</h3><p class=\"text-sm text-muted-foreground\"></p></div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"></h3><ul class=space-y-1><li><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\">GitHub</a></li><li></li><li></li></ul></div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\">contact@intlayer.org</p></div></div><div class=\"mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground\">");
function he() {
	let n = pe(l), r = c(), i = () => r.locale ?? "en";
	return (() => {
		var r = me(), a = r.firstChild.firstChild, o = a.firstChild, c = o.firstChild.nextSibling, l = o.nextSibling, u = l.firstChild, d = u.nextSibling.firstChild.nextSibling, f = d.nextSibling, p = l.nextSibling.firstChild, m = a.nextSibling;
		return t(c, () => n().a), t(u, () => n().f), t(d, e(s, {
			get href() {
				return `/${i()}/about`;
			},
			class: "text-sm text-muted-foreground transition-colors hover:text-foreground",
			get children() {
				return n().e;
			}
		})), t(f, e(s, {
			get href() {
				return `/${i()}/contact`;
			},
			class: "text-sm text-muted-foreground transition-colors hover:text-foreground",
			get children() {
				return n().c;
			}
		})), t(p, () => n().b), t(m, () => n().d), r;
	})();
}
export { he as default };
