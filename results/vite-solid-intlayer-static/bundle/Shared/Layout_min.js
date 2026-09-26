import { createComponent as e, delegateEvents as t, effect as n, insert as r, memo as i, mergeProps as a, setAttribute as o, template as s } from "solid-js/web";
import { A as c, useLocation as l, useNavigate as u, useParams as d } from "@solidjs/router";
import { For as f, Suspense as p, createComputed as m, createContext as h, createEffect as g, createMemo as _, createSignal as v, lazy as y, on as ee, onMount as b, untrack as te, useContext as ne } from "solid-js";
import { recordHydrationDuration as re, recordRenderTime as ie } from "test-utils/browser-metrics";
var x = {
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
}, S = {
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
}, C = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, ae = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = C(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, w = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var T = {
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
}, oe = (e = T) => {
	let { locales: t } = x;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!w) for (let t = 0; t < (S.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(S.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, se = !1, E, ce = () => typeof window > "u" ? oe(T) : (se ||= (E = oe(T), !0), E), le = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (se = !1, !w && S.storage.cookies)) for (let n = 0; n < S.storage.cookies.length; n++) {
		let { name: r, attributes: i } = S.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: C(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ae(r, e, i));
			} catch {}
		}
	}
}, D = /* @__PURE__ */ new Map(), ue = (e, t) => Object.create(new Proxy(e, {
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
}), de = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = D.get(t);
	i || (i = /* @__PURE__ */ new Map(), D.set(t, i));
	let a = i.get(r);
	return a || (a = ue(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, fe = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return Object.setPrototypeOf(r, de(t, Array.prototype)), r;
}, O = /* @__PURE__ */ new WeakMap(), k = 0, pe = (e) => {
	if (!e) return "base";
	let t = O.get(e);
	if (t) return t;
	k += 1;
	let n = `p${k}`;
	return O.set(e, n), n;
}, me = 256, A = /* @__PURE__ */ new WeakMap(), j = (e) => typeof e == "object" && !!e, he = (e, t, n) => `${e}_${t}_${pe(n)}`, ge = (e, t) => {
	if (!j(e)) return { hit: !1 };
	let n = A.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, M = (e, t, n) => {
	if (!j(e)) return n;
	let r = A.get(e);
	return r || (r = /* @__PURE__ */ new Map(), A.set(e, r)), r.size >= me && r.clear(), r.set(t, n), n;
}, _e = "translation", ve = "object", ye = "array", N = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), P = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, P);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => P(e, N(t, e, {
		type: ye,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: ve,
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
}, be = (e, t, n) => {
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
		let a = be(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: _e,
				key: e
			}]
		});
	}
}, z = L, B = (e) => L, V = L, xe = L, H = L, U = L, W = (e) => L, G = L, Se = (e, t = !0) => [
	R(e ?? x.defaultLocale, t ? x.defaultLocale : void 0),
	z,
	B(e ?? x.defaultLocale),
	V,
	xe,
	W(e ?? x.defaultLocale),
	G,
	H,
	U
].filter((e) => e !== L), Ce = (e, t, n = []) => P(e, {
	...t,
	plugins: n
}), K = /* @__PURE__ */ new WeakSet(), we = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = he(r ?? x.defaultLocale, "", n), o = ge(e, a);
	if (o.hit) return o.content;
	let s = n ?? Se(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !K.has(e)
		};
		K.add(e);
		try {
			return Ce(e.content, t, s);
		} finally {
			t.eager && K.delete(e);
		}
	};
	return c === null ? M(e, a, null) : Array.isArray(c) ? M(e, a, c.map(l)) : M(e, a, l(c));
}, q = null, J = null;
q?.catch(() => {}), J?.catch(() => {});
var Te = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => fe({
		value: t.children,
		children: t.children
	})
}, Ee = L, De = L;
y(() => q.then((e) => ({ default: e.MarkdownRenderer }))), y(() => q.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var Oe = L;
y(() => J.then((e) => ({ default: e })));
var ke = L, Y = /* @__PURE__ */ new Map(), Ae = (e, t = !0) => {
	let n = `${e ?? x.defaultLocale}_${t}`;
	if (Y.has(n)) return Y.get(n);
	let r = [
		Te,
		R(e ?? x.defaultLocale, t ? x.defaultLocale : void 0),
		z,
		B(e ?? x.defaultLocale),
		V,
		W(e ?? x.defaultLocale),
		G,
		H,
		U,
		Ee,
		De,
		Oe,
		ke
	].filter((e) => e !== L);
	return Y.set(n, r), r;
}, je = (e, t) => we(e, t, Ae(typeof t == "object" && t ? t.locale : t)), Me = (e, t = x?.locales, n = x?.defaultLocale) => {
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
}, X = ce, Ne = (e, t) => le(e, {
	...T,
	isCookieEnabled: t
}), Pe = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Fe = null, Ie = null, Z = h({
	locale: () => X() ?? x?.defaultLocale,
	setLocale: () => null
}), Le = (t) => {
	let { defaultLocale: n, locales: r } = x ?? {}, i = t.locale ?? X() ?? t.defaultLocale ?? n, [a, o] = v(i), s = t.setLocale ?? ((e) => {
		if (a().toString() !== e.toString()) {
			if (!r?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			o(e), Ne(e, t.isCookieEnabled);
		}
	}), c = _(() => Me(a()));
	return m(ee(() => t.locale, (e) => {
		e && e !== te(a) && o(e);
	}, { defer: !0 })), b(() => {
		Pe();
	}), e(Z.Provider, {
		value: {
			locale: c,
			setLocale: s,
			variant: () => t.variant
		},
		get children() {
			return t.children;
		}
	});
}, Re = (t) => e(Le, a(t, { get children() {
	return [
		i(() => i(() => !1)() && e(p, { get children() {
			return e(Fe, {});
		} })),
		i(() => i(() => !1)() && e(p, { get children() {
			return e(Ie, {});
		} })),
		i(() => t.children)
	];
} })), ze = Symbol("LOADABLE_SETTLED_VALUE"), Be = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[ze];
}, Q = (e, t) => {
	let n = ne(Z) ?? {}, r = _(() => {
		let r = n?.locale?.();
		return je(Be(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, Ve = {
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
}, He = s("<footer class=\"mt-20 border-t border-border bg-card\"><div class=\"container py-8\"><div class=\"grid gap-8 md:grid-cols-3\"><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\">i18n Benchmark</h3><p class=\"text-sm text-muted-foreground\"></p></div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"></h3><ul class=space-y-1><li><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\">GitHub</a></li><li></li><li></li></ul></div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"></h3><p class=\"text-sm text-muted-foreground\">contact@intlayer.org</p></div></div><div class=\"mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground\">");
function Ue() {
	let t = Q(Ve), n = d(), i = () => n.locale ?? "en";
	return (() => {
		var n = He(), a = n.firstChild.firstChild, o = a.firstChild, s = o.firstChild.nextSibling, l = o.nextSibling, u = l.firstChild, d = u.nextSibling.firstChild.nextSibling, f = d.nextSibling, p = l.nextSibling.firstChild, m = a.nextSibling;
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
var We = {
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
function Ge(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), b(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var Ke = [
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
], qe = (e) => {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}, Je = s("<div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-primary\">"), Ye = s("<option>");
function Xe() {
	let t = d(), i = u(), a = l(), o = (e) => {
		let t = a.pathname.replace(/^\/[^/]+/, `/${e}`);
		i(`${t}${a.search}${a.hash}`);
	};
	return (() => {
		var i = Je(), a = i.firstChild;
		return a.addEventListener("change", (e) => o(e.currentTarget.value)), r(a, e(f, {
			each: Ke,
			children: (e) => (() => {
				var t = Ye();
				return t.value = e, r(t, () => qe(e)), t;
			})()
		})), n(() => a.value = t.locale ?? "en"), i;
	})();
}
var Ze = {
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
}, Qe = s("<button type=button class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\">");
function $e() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function et() {
	let e = Q(Ze), [t, i] = v("auto");
	b(() => {
		let e = $e();
		i(e), $(e);
	}), g(() => {
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
		var e = Qe();
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
var tt = s("<svg width=14 height=14 viewBox=\"0 0 24 24\"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round aria-hidden=true><path d=\"m6 9 6 6 6-6\">"), nt = s("<header class=\"sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><div class=relative><button type=button class=\"flex cursor-pointer items-center gap-1 border-none bg-transparent nav-link\"></button></div></div></div><div class=\"flex items-center gap-4\"><a href=https://github.com/intlayer-org/benchmark-i18n target=_blank rel=noreferrer class=\"text-muted-foreground transition hover:text-foreground\"><span class=sr-only></span><svg viewBox=\"0 0 16 16\"aria-hidden=true width=20 height=20><path fill=currentColor d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\">"), rt = s("<div class=\"absolute left-0 top-full w-48 pt-2\"><div class=\"overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg\">");
function it(e) {
	return (() => {
		var t = tt();
		return n(() => o(t, "class", e.class)), t;
	})();
}
function at() {
	let t = Q(We);
	Ge(t().f.value);
	let [n, a] = v(!1), o = d(), s = () => o.locale ?? "en", l = () => [
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
		var o = nt(), u = o.firstChild.firstChild, d = u.firstChild, p = d.firstChild, m = p.firstChild, h = u.nextSibling, g = h.firstChild.firstChild;
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
		}), p), m.$$click = () => a(!n()), m.addEventListener("mouseleave", () => a(!1)), m.addEventListener("mouseenter", () => a(!0)), r(m, () => t().i, null), r(m, e(it, { get class() {
			return `transition-transform ${n() ? "rotate-180" : ""}`;
		} }), null), r(p, (() => {
			var t = i(() => !!n());
			return () => t() && (() => {
				var t = rt(), n = t.firstChild;
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
		})(), null), r(g, () => t().e), r(h, e(Xe, {}), null), r(h, e(et, {}), null), o;
	})();
}
t(["click"]);
function ot(t) {
	let n = d(), r = typeof performance < "u" ? performance.now() : 0;
	return b(() => {
		re(), ie("AppRoot", r);
	}), g(() => {
		document.documentElement.lang = n.locale ?? "en";
	}), e(Re, {
		get locale() {
			return n.locale;
		},
		get children() {
			return [
				e(at, {}),
				i(() => t.children),
				e(Ue, {})
			];
		}
	});
}
export { ot as default };
