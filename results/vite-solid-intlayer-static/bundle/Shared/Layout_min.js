import { createComponent as e, delegateEvents as t, effect as n, insert as r, memo as i, mergeProps as a, setAttribute as o, template as s } from "solid-js/web";
import { A as c, useLocation as l, useNavigate as u, useParams as d } from "@solidjs/router";
import { For as f, Suspense as p, createContext as m, createEffect as h, createMemo as g, createSignal as _, lazy as v, on as ee, onMount as y, untrack as te, useContext as ne } from "solid-js";
import { recordHydrationDuration as re, recordRenderTime as ie } from "test-utils/browser-metrics";
var b = {
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
}, x = {
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
}, ae = (e, t = b?.locales, n = b?.defaultLocale) => {
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
}, S = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, oe = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = S(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, C = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var w = {
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
}, se = (e = w) => {
	let { locales: t } = b;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!C) for (let t = 0; t < (x.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(x.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ce = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !C && x.storage.cookies) for (let n = 0; n < x.storage.cookies.length; n++) {
		let { name: r, attributes: i } = x.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: S(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, oe(r, e, i));
			} catch {}
		}
	}
}, T = se(w), le = (e, t) => ce(e, {
	...w,
	isCookieEnabled: t
}), ue = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, de = null, fe = null, E = m({
	locale: () => T ?? b?.defaultLocale,
	setLocale: () => null
}), pe = (t) => {
	let { defaultLocale: n, locales: r } = b ?? {}, i = t.locale ?? T ?? t.defaultLocale ?? n, [a, o] = _(i), s = t.setLocale ?? ((e) => {
		if (a().toString() !== e.toString()) {
			if (!r?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			o(e), le(e, t.isCookieEnabled);
		}
	}), c = g(() => ae(a()));
	return h(ee(() => t.locale, (e) => {
		e && e !== te(a) && o(e);
	}, { defer: !0 })), y(() => {
		ue();
	}), e(E.Provider, {
		value: {
			locale: c,
			setLocale: s,
			variant: () => t.variant
		},
		get children() {
			return t.children;
		}
	});
}, me = (t) => e(pe, a(t, { get children() {
	return [
		i(() => i(() => !1)() && e(p, { get children() {
			return e(de, {});
		} })),
		i(() => i(() => !1)() && e(p, { get children() {
			return e(fe, {});
		} })),
		i(() => t.children)
	];
} })), D = /* @__PURE__ */ new WeakMap(), O = 0, he = (e) => {
	if (!e) return "base";
	let t = D.get(e);
	if (t) return t;
	O += 1;
	let n = `p${O}`;
	return D.set(e, n), n;
}, ge = 256, k = /* @__PURE__ */ new WeakMap(), A = (e) => typeof e == "object" && !!e, _e = (e, t, n) => `${e}_${t}_${he(n)}`, ve = (e, t) => {
	if (!A(e)) return { hit: !1 };
	let n = k.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, j = (e, t, n) => {
	if (!A(e)) return n;
	let r = k.get(e);
	return r || (r = /* @__PURE__ */ new Map(), k.set(e, r)), r.size >= ge && r.clear(), r.set(t, n), n;
}, ye = "translation", be = "object", xe = "array", M = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => M(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => M(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: xe,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: be,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = M(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = M(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, N = "default", Se = /[^A-Za-z0-9._&=-]/g, P = /[^A-Za-z0-9._-]/g, Ce = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, F = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Ce);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, I = (e) => e === void 0 ? N : typeof e == "string" ? F(e, Se) : Object.keys(e).sort().map((t) => `${F(t, P)}=${F(String(e[t]), P)}`).join("&"), L = (e) => Array.isArray(e) ? e.length === 0 ? [N] : e.map(I) : [I(e)], we = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? N : e[0] ?? "default";
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
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? N : we(L(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Te(e, n, t, s)).map((t) => De(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, ke = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Ae = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? L(n).join(",") : String(n)}`;
}).join("|") : "", R = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, z = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (R(e) && R(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : z(e[r], t[r]));
		return n;
	}
	return e;
}, je = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => z(e, t));
}, B = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, V = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? B : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ye,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return je(o, e, t);
	}
}, H = B, Me = (e) => B, U = B, Ne = B, W = B, G = B, K = (e) => B, q = B, Pe = (e, t = !0) => [
	V(e ?? b.defaultLocale, t ? b.defaultLocale : void 0),
	H,
	U,
	Ne,
	K(e ?? b.defaultLocale),
	q,
	W,
	G
], Fe = (e, t, n = []) => M(e, {
	...t,
	plugins: n
}), Ie = (e, t, n) => {
	let { locale: r, selector: i } = ke(t), a = _e(r ?? b.defaultLocale, Ae(i), n), o = ve(e, a);
	if (o.hit) return o.content;
	let s = n ?? Pe(r), c = Oe(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Fe(e.content, t, s);
	};
	return c === null ? j(e, a, null) : Array.isArray(c) ? j(e, a, c.map(l)) : j(e, a, l(c));
}, J = {
	constructor: "constructor",
	length: "length",
	slice: "slice",
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, Le = (e) => typeof e == "string" && /^\d+$/.test(e), Re = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		if (n === J.value) return t;
		if (n === Symbol.toPrimitive) return (e) => e === "number" ? Number(t) : t ?? "";
		if (n === J.toString) return () => String(t ?? "");
		if (n === J.valueOf) return () => t;
		if (n === J.slice) return Reflect.get(e, n, r);
		if (t != null && typeof n == "string" && n !== J.constructor && n !== J.length && !Le(n)) {
			let e = Object(t);
			if (n in e) {
				let r = Reflect.get(e, n);
				return typeof r == "function" ? r.bind(t) : r;
			}
		}
		return Reflect.get(e, n, r);
	} });
}, Y = null, X = null;
Y?.catch(() => {}), X?.catch(() => {});
var ze = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => Re({
		...n,
		value: n.children,
		children: n.children
	})
}, Be = B, Ve = B;
v(() => Y.then((e) => ({ default: e.MarkdownRenderer }))), v(() => Y.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var He = B;
v(() => X.then((e) => ({ default: e })));
var Ue = B, Z = /* @__PURE__ */ new Map(), We = (e, t = !0) => {
	let n = `${e ?? b.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		V(e ?? b.defaultLocale, t ? b.defaultLocale : void 0),
		H,
		Me(e ?? b.defaultLocale),
		U,
		K(e ?? b.defaultLocale),
		q,
		W,
		G,
		ze,
		Be,
		Ve,
		He,
		Ue
	];
	return Z.set(n, r), r;
}, Ge = (e, t) => Ie(e, t, We(typeof t == "object" && t ? t.locale : t)), Ke = Symbol("LOADABLE_SETTLED_VALUE"), qe = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[Ke];
}, Q = (e, t) => {
	let n = ne(E) ?? {}, r = g(() => {
		let r = n?.locale?.();
		return Ge(qe(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, Je = {
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
}, Ye = s("<footer class=\"mt-20 border-t border-border bg-card\"><div class=\"container py-8\"><div class=\"grid gap-8 md:grid-cols-3\"><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\">i18n Benchmark</h3><p class=\"text-sm text-muted-foreground\"></p></div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"></h3><ul class=space-y-1><li><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\">GitHub</a></li><li></li><li></li></ul></div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\">contact@intlayer.org</p></div></div><div class=\"mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground\">");
function Xe() {
	let t = Q(Je), n = d(), i = () => n.locale ?? "en";
	return (() => {
		var n = Ye(), a = n.firstChild.firstChild, o = a.firstChild, s = o.firstChild.nextSibling, l = o.nextSibling, u = l.firstChild, d = u.nextSibling.firstChild.nextSibling, f = d.nextSibling, p = l.nextSibling.firstChild, m = a.nextSibling;
		return r(s, () => t().a), r(u, () => t().f), r(d, e(c, {
			get href() {
				return `/${i()}/about`;
			},
			class: "text-sm text-muted-foreground transition-colors hover:text-foreground",
			get children() {
				return t().e;
			}
		})), r(f, e(c, {
			get href() {
				return `/${i()}/contact`;
			},
			class: "text-sm text-muted-foreground transition-colors hover:text-foreground",
			get children() {
				return t().c;
			}
		})), r(p, () => t().b), r(m, () => t().d), n;
	})();
}
var Ze = {
	key: "header",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				f: "Header",
				k: "Products",
				j: "Pricing",
				m: "Team",
				a: "Blog",
				b: "Careers",
				d: "FAQ",
				c: "Contact",
				l: "Settings",
				g: "Home",
				h: "Methodology",
				i: "Mock Pages",
				e: "Go to GitHub"
			},
			fr: {
				f: "En-tête",
				k: "Produits",
				j: "Tarification",
				m: "Équipe",
				a: "Blog",
				b: "Carrières",
				d: "FAQ",
				c: "Contact",
				l: "Paramètres",
				g: "Accueil",
				h: "Méthodologie",
				i: "Pages fictives",
				e: "Aller sur GitHub"
			},
			es: {
				f: "Encabezado",
				k: "Productos",
				j: "Precios",
				m: "Equipo",
				a: "Blog",
				b: "Carreras",
				d: "FAQ",
				c: "Contacto",
				l: "Ajustes",
				g: "Inicio",
				h: "Metodología",
				i: "Páginas de prueba",
				e: "Ir a GitHub"
			},
			de: {
				f: "Header",
				k: "Produkte",
				j: "Preise",
				m: "Team",
				a: "Blog",
				b: "Karriere",
				d: "FAQ",
				c: "Kontakt",
				l: "Einstellungen",
				g: "Home",
				h: "Methodik",
				i: "Testseiten",
				e: "Zu GitHub"
			},
			it: {
				f: "Intestazione",
				k: "Prodotti",
				j: "Prezzi",
				m: "Team",
				a: "Blog",
				b: "Carriere",
				d: "FAQ",
				c: "Contatti",
				l: "Impostazioni",
				g: "Home",
				h: "Metodologia",
				i: "Pagine di prova",
				e: "Vai su GitHub"
			},
			pt: {
				f: "Cabeçalho",
				k: "Produtos",
				j: "Preços",
				m: "Equipe",
				a: "Blog",
				b: "Carreiras",
				d: "FAQ",
				c: "Contato",
				l: "Configurações",
				g: "Início",
				h: "Metodologia",
				i: "Páginas de Teste",
				e: "Ir para o GitHub"
			},
			zh: {
				f: "页眉",
				k: "产品",
				j: "定价",
				m: "团队",
				a: "博客",
				b: "职业",
				d: "常见问题",
				c: "联系我们",
				l: "设置",
				g: "首页",
				h: "方法论",
				i: "模拟页面",
				e: "前往 GitHub"
			},
			ja: {
				f: "ヘッダー",
				k: "製品",
				j: "価格設定",
				m: "チーム",
				a: "ブログ",
				b: "採用情報",
				d: "よくある質問",
				c: "お問い合わせ",
				l: "設定",
				g: "ホーム",
				h: "方法論",
				i: "モックページ",
				e: "GitHub へ"
			},
			ko: {
				f: "헤더",
				k: "제품",
				j: "가격",
				m: "팀",
				a: "블로그",
				b: "채용",
				d: "자주 묻는 질문",
				c: "문의",
				l: "설정",
				g: "홈",
				h: "방법론",
				i: "모ック 페이지",
				e: "GitHub으로 이동"
			},
			ru: {
				f: "Заголовок",
				k: "Продукты",
				j: "Цены",
				m: "Команда",
				a: "Блог",
				b: "Вакансии",
				d: "FAQ",
				c: "Контакт",
				l: "Настройки",
				g: "Главная",
				h: "Методология",
				i: "Мок-страницы",
				e: "Перейти на GitHub"
			}
		}
	}
};
function Qe(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), y(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var $e = [
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
], et = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, tt = s("<div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-primary\">"), nt = s("<option>");
function rt() {
	let t = d(), i = u(), a = l(), o = (e) => {
		let t = a.pathname.replace(/^\/[^/]+/, `/${e}`);
		i(`${t}${a.search}${a.hash}`);
	};
	return (() => {
		var i = tt(), a = i.firstChild;
		return a.addEventListener("change", (e) => o(e.currentTarget.value)), r(a, e(f, {
			each: $e,
			children: (e) => (() => {
				var t = nt();
				return t.value = e, r(t, () => et(e)), t;
			})()
		})), n(() => a.value = t.locale ?? "en"), i;
	})();
}
var it = {
	key: "theme-toggle",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				d: "Theme mode: auto (system). Click to switch to light mode.",
				a: "Theme: Auto",
				b: "Theme: Dark",
				c: "Theme: Light"
			},
			fr: {
				d: "Mode thématique : auto (système). Cliquez pour passer en mode clair.",
				a: "Thème : Auto",
				b: "Thème : Sombre",
				c: "Thème : Clair"
			},
			es: {
				d: "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
				a: "Tema: Automático",
				b: "Tema: Oscuro",
				c: "Tema: Claro"
			},
			de: {
				d: "Design-Modus: Auto (System). Klicken Sie hier, um in den hellen Modus zu wechseln.",
				a: "Design: Auto",
				b: "Design: Dunkel",
				c: "Design: Hell"
			},
			it: {
				d: "Modalità tema: auto (sistema). Fai clic per passare alla modalità chiara.",
				a: "Tema: Auto",
				b: "Tema: Scuro",
				c: "Tema: Chiaro"
			},
			pt: {
				d: "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
				a: "Tema: Automático",
				b: "Tema: Escuro",
				c: "Tema: Claro"
			},
			zh: {
				d: "主题模式：自动（系统）。点击切换到亮色模式。",
				a: "主题：自动",
				b: "主题：深色",
				c: "主题：亮色"
			},
			ja: {
				d: "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。",
				a: "テーマ：自動",
				b: "テーマ：ダーク",
				c: "テーマ：ライト"
			},
			ko: {
				d: "테마 모드: 자동(시스템). 라이트 모드로 전환하려면 클릭하세요.",
				a: "테마: 자동",
				b: "테마: 다크",
				c: "테마: 라이트"
			},
			ru: {
				d: "Режим темы: авто (системный). Нажмите, чтобы перейти в светлую тему.",
				a: "Тема: Авто",
				b: "Тема: Темная",
				c: "Тема: Светлая"
			}
		}
	}
}, at = s("<button type=button class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\">");
function ot() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function st() {
	let e = Q(it), [t, i] = _("auto");
	y(() => {
		let e = ot();
		i(e), $(e);
	}), h(() => {
		if (t() !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => $("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	});
	function a() {
		let e = t(), n = e === "light" ? "dark" : e === "dark" ? "auto" : "light";
		i(n), $(n), window.localStorage.setItem("theme", n);
	}
	let s = () => t() === "auto" ? e().d.value : `Theme mode: ${t()}. Click to switch mode.`, c = () => t() === "auto" ? e().a.value : t() === "dark" ? e().b.value : e().c.value;
	return (() => {
		var e = at();
		return e.$$click = a, r(e, c), n((t) => {
			var n = s(), r = s();
			return n !== t.e && o(e, "aria-label", t.e = n), r !== t.t && o(e, "title", t.t = r), t;
		}, {
			e: void 0,
			t: void 0
		}), e;
	})();
}
t(["click"]);
var ct = s("<svg width=14 height=14 viewBox=\"0 0 24 24\"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round aria-hidden=true><path d=\"m6 9 6 6 6-6\">"), lt = s("<header class=\"sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><div class=relative><button type=button class=\"flex cursor-pointer items-center gap-1 border-none bg-transparent nav-link\"></button></div></div></div><div class=\"flex items-center gap-4\"><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class=\"text-muted-foreground transition hover:text-foreground\"><span class=sr-only></span><svg viewBox=\"0 0 16 16\"aria-hidden=true width=20 height=20><path fill=currentColor d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\">"), ut = s("<div class=\"absolute left-0 top-full w-48 pt-2\"><div class=\"overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg\">");
function dt(e) {
	return (() => {
		var t = ct();
		return n(() => o(t, "class", e.class)), t;
	})();
}
function ft() {
	let t = Q(Ze);
	Qe(t().f.value);
	let [n, a] = _(!1), o = d(), s = () => o.locale ?? "en", l = () => [
		{
			to: `/${s()}/products`,
			label: t().k.value
		},
		{
			to: `/${s()}/pricing`,
			label: t().j.value
		},
		{
			to: `/${s()}/team`,
			label: t().m.value
		},
		{
			to: `/${s()}/blog`,
			label: t().a.value
		},
		{
			to: `/${s()}/careers`,
			label: t().b.value
		},
		{
			to: `/${s()}/faq`,
			label: t().d.value
		},
		{
			to: `/${s()}/contact`,
			label: t().c.value
		},
		{
			to: `/${s()}/settings`,
			label: t().l.value
		}
	];
	return (() => {
		var o = lt(), u = o.firstChild.firstChild, d = u.firstChild, p = d.firstChild, m = p.firstChild, h = u.nextSibling, g = h.firstChild.firstChild;
		return r(u, e(c, {
			get href() {
				return `/${s()}`;
			},
			class: "text-lg font-bold tracking-tight text-primary no-underline",
			children: "i18n Bench"
		}), d), r(d, e(c, {
			get href() {
				return `/${s()}`;
			},
			end: !0,
			class: "nav-link",
			activeClass: "is-active",
			inactiveClass: "",
			get children() {
				return t().g;
			}
		}), p), r(d, e(c, {
			get href() {
				return `/${s()}/about`;
			},
			class: "nav-link",
			activeClass: "is-active",
			inactiveClass: "",
			get children() {
				return t().h;
			}
		}), p), m.$$click = () => a(!n()), m.addEventListener("mouseleave", () => a(!1)), m.addEventListener("mouseenter", () => a(!0)), r(m, () => t().i, null), r(m, e(dt, { get class() {
			return `transition-transform ${n() ? "rotate-180" : ""}`;
		} }), null), r(p, (() => {
			var t = i(() => !!n());
			return () => t() && (() => {
				var t = ut(), n = t.firstChild;
				return t.addEventListener("mouseleave", () => a(!1)), t.addEventListener("mouseenter", () => a(!0)), r(n, e(f, {
					get each() {
						return l();
					},
					children: (t) => e(c, {
						get href() {
							return t.to;
						},
						class: "block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent",
						onClick: () => a(!1),
						get children() {
							return t.label;
						}
					})
				})), t;
			})();
		})(), null), r(g, () => t().e), r(h, e(rt, {}), null), r(h, e(st, {}), null), o;
	})();
}
t(["click"]);
function pt(t) {
	let n = d(), r = typeof performance < "u" ? performance.now() : 0;
	return y(() => {
		re(), ie("AppRoot", r);
	}), h(() => {
		document.documentElement.lang = n.locale ?? "en";
	}), e(me, {
		get locale() {
			return n.locale;
		},
		get children() {
			return [
				e(ft, {}),
				i(() => t.children),
				e(Xe, {})
			];
		}
	});
}
export { pt as default };
