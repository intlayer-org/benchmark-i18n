import "svelte/internal/disclose-version";
import * as e from "svelte/internal/client";
import { getContext as t, onMount as n, setContext as r } from "svelte";
import { derived as i, get as a, writable as o } from "svelte/store";
import "svelte/internal/flags/legacy";
import { recordHydrationDuration as s, recordRenderTime as c } from "test-utils/browser-metrics";
import l from "lucide-svelte/icons/chevron-down";
var u = {
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
	internationalization: u,
	routing: {
		mode: "prefix-all",
		storage: {
			cookies: [{
				name: "INTLAYER_LOCALE",
				attributes: {}
			}],
			headers: [{ name: "x-intlayer-locale" }]
		},
		basePath: ""
	},
	editor: {
		applicationURL: "http://localhost:3000",
		editorURL: "http://localhost:8000",
		cmsURL: "https://app.intlayer.org",
		backendURL: "https://back.intlayer.org",
		port: 8e3,
		enabled: !1,
		dictionaryPriorityStrategy: "local_first",
		liveSync: !0,
		liveSyncPort: 4e3,
		liveSyncURL: "http://localhost:4000"
	},
	log: {
		mode: "default",
		prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
	},
	system: {
		baseDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-static/svelte-intlayer-app",
		moduleAugmentationDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-static/svelte-intlayer-app/.intlayer/types",
		unmergedDictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-static/svelte-intlayer-app/.intlayer/unmerged_dictionary",
		remoteDictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-static/svelte-intlayer-app/.intlayer/remote_dictionary",
		dictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-static/svelte-intlayer-app/.intlayer/dictionary",
		dynamicDictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-static/svelte-intlayer-app/.intlayer/dynamic_dictionary",
		fetchDictionariesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-static/svelte-intlayer-app/.intlayer/fetch_dictionary",
		typesDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-static/svelte-intlayer-app/.intlayer/types",
		mainDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-static/svelte-intlayer-app/.intlayer/main",
		configDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-static/svelte-intlayer-app/.intlayer/config",
		cacheDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-static/svelte-intlayer-app/.intlayer/cache",
		tempDir: "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-static/svelte-intlayer-app/.intlayer/tmp"
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
		contentDir: ["/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-static/svelte-intlayer-app"],
		codeDir: ["/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-static/svelte-intlayer-app"],
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
}, f = "translation", p = "object", m = "array", h = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => h(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => h(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: m,
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
					type: p,
					key: r
				}]
			}, i = h(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, g = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, _ = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (g(e) && g(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : _(e[r], t[r]));
		return n;
	}
	return e;
}, v = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => _(e, t));
}, y = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, b = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? y : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: f,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return v(o, e, t);
	}
}, x = y, S = y, C = y, w = y, T = (e) => y, E = y, D = (e, t = !0) => [
	b(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
	x,
	S,
	C,
	T(e ?? u.defaultLocale),
	E,
	w
], O = (e, t, n = []) => h(e, {
	...t,
	plugins: n
}), k = (e, t, n = D(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return O(e.content, r, n);
}, A = d.internationalization.locales;
d.internationalization.requiredLocales, d.internationalization.defaultLocale, d.editor;
var j = Symbol("intlayer"), M = (e) => {
	r(j, e);
}, N = () => t(j), P = u?.defaultLocale, F = (() => {
	let { subscribe: e, set: t, update: n } = o({ locale: P });
	return {
		subscribe: e,
		setLocale: (e) => n((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => i({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: P })
	};
})(), I = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, L = (t) => {
	I();
	let n = e.state(e.proxy(t));
	t && F.setLocale(t);
	let r = {
		get locale() {
			return e.get(n) ?? u.defaultLocale;
		},
		setLocale: (t) => {
			e.set(n, t, !0), F.setLocale(t);
		}
	};
	return M(r), r;
};
function R(t, n) {
	let r = e.prop(n, "Renderer", 8, void 0), i = e.prop(n, "rendererProps", 24, () => ({})), a = e.prop(n, "value", 8, void 0);
	var o = e.comment(), s = e.first_child(o), c = (t) => {
		var n = e.comment(), o = e.first_child(n);
		e.element(o, r, !1, (t, n) => {
			e.attribute_effect(t, () => ({ ...i() }));
			var r = e.text();
			e.template_effect(() => e.set_text(r, a())), e.append(n, r);
		}), e.append(t, n);
	}, l = (t) => {
		r()(t, e.spread_props(i, {
			children: (t, n) => {
				e.next();
				var r = e.text();
				e.template_effect(() => e.set_text(r, a())), e.append(t, r);
			},
			$$slots: { default: !0 }
		}));
	}, u = (t) => {
		var n = e.text();
		e.template_effect(() => e.set_text(n, a())), e.append(t, n);
	};
	e.if(s, (e) => {
		typeof r() == "string" ? e(c) : typeof r() == "function" ? e(l, 1) : e(u, -1);
	}), e.append(t, o);
}
var ee = (e) => {
	let t = !!R.prototype?.$destroy, n;
	return n = t ? class extends R {
		constructor(t) {
			super({
				...t,
				props: {
					...t.props,
					Renderer: e.component,
					rendererProps: e.props,
					value: e.value
				}
			});
		}
	} : (t) => R(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, "toString", {
		value: () => e.value?.toString() ?? "",
		writable: !0,
		configurable: !0
	}), e.additionalProps && Object.assign(n, e.additionalProps), n;
}, z = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => ee({
		value: t ?? e,
		component: void 0,
		props: n
	})
}, te = z, B = y, V = y, ne = y, H = /* @__PURE__ */ new Map(), U = (e, t = !0) => {
	let n = `${e ?? u.defaultLocale}_${t}`;
	if (H.has(n)) return H.get(n);
	let r = [
		b(e ?? u.defaultLocale, t ? u.defaultLocale : void 0),
		x,
		S,
		T(e ?? u.defaultLocale),
		E,
		w,
		z,
		te,
		B,
		V,
		ne
	];
	return H.set(n, r), r;
}, W = (e, t) => k(e, t, U(t)), G = (e, t) => {
	let n = N();
	return i([F], ([r]) => W(e, t ?? n?.locale ?? r.locale));
}, K = {
	key: "footer",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				description: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
				resources: "Resources",
				contact: "Contact",
				github: "GitHub",
				methodology: "Methodology",
				contributing: "Contributing",
				footerText: "i18n Benchmark — Open-source project. Built with Svelte, Vite, and a client-side router.",
				appName: "i18n Benchmark",
				contactEmail: "contact@intlayer.org"
			},
			fr: {
				description: "Une application de test open-source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.",
				resources: "Ressources",
				contact: "Contact",
				github: "GitHub",
				methodology: "Méthodologie",
				contributing: "Contribuer",
				footerText: "Benchmark i18n — Projet open-source. Construit avec Svelte, Vite et un routeur côté client.",
				appName: "Benchmark i18n",
				contactEmail: "contact@intlayer.org"
			},
			es: {
				description: "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el tiempo de carga y la reactividad de la aplicación.",
				resources: "Recursos",
				contact: "Contacto",
				github: "GitHub",
				methodology: "Metodología",
				contributing: "Contribuir",
				footerText: "i18n Benchmark — Proyecto de código abierto. Construido con Svelte, Vite y un enrutador del lado del cliente.",
				appName: "i18n Benchmark",
				contactEmail: "contact@intlayer.org"
			},
			de: {
				description: "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladezeit und die App-Reaktivität.",
				resources: "Ressourcen",
				contact: "Kontakt",
				github: "GitHub",
				methodology: "Methodik",
				contributing: "Beitragen",
				footerText: "i18n Benchmark — Open-Source-Projekt. Erstellt mit Svelte, Vite und einem clientseitigen Router.",
				appName: "i18n Benchmark",
				contactEmail: "contact@intlayer.org"
			},
			it: {
				description: "Un'applicazione di test open source per misurare l'impatto nel mondo reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sui tempi di caricamento e sulla reattività dell'app.",
				resources: "Risorse",
				contact: "Contatti",
				github: "GitHub",
				methodology: "Metodologia",
				contributing: "Contribuire",
				footerText: "i18n Benchmark — Progetto open source. Costruito con Svelte, Vite e un router lato client.",
				appName: "i18n Benchmark",
				contactEmail: "contact@intlayer.org"
			},
			pt: {
				description: "Um aplicativo de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade do aplicativo.",
				resources: "Recursos",
				contact: "Contato",
				github: "GitHub",
				methodology: "Metodologia",
				contributing: "Contribuir",
				footerText: "i18n Benchmark — Projeto de código aberto. Construído com Svelte, Vite e um roteador do lado do cliente.",
				appName: "i18n Benchmark",
				contactEmail: "contact@intlayer.org"
			},
			zh: {
				description: "一个开源测试应用程序，用于衡量国际化库对捆绑包大小、加载时间和应用程序反应性的实际影响。",
				resources: "资源",
				contact: "联系我们",
				github: "GitHub",
				methodology: "方法论",
				contributing: "贡献",
				footerText: "i18n 基准测试 — 开源项目。使用 Svelte、Vite 和客户端路由器构建。",
				appName: "i18n 基准测试",
				contactEmail: "contact@intlayer.org"
			},
			ja: {
				description: "バンドルサイズ、ロード時間、およびアプリの反応性に対する国際化ライブラリの実世界の影響を測定するためのオープンソーステストアプリケーション。",
				resources: "リソース",
				contact: "お問い合わせ",
				github: "GitHub",
				methodology: "方法論",
				contributing: "貢献",
				footerText: "i18n ベンチマーク — オープンソースプロジェクト。Svelte、Vite、およびクライアントサイドルーティングで構築されています。",
				appName: "i18n ベンチマーク",
				contactEmail: "contact@intlayer.org"
			},
			ko: {
				description: "번들 크기, 로딩 시간 및 앱 반응성에 대한 국제화 라이브러리의 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.",
				resources: "리소스",
				contact: "연락처",
				github: "GitHub",
				methodology: "방법론",
				contributing: "기여하기",
				footerText: "i18n 벤치마크 — 오픈 소스 프로젝트입니다. Svelte, Vite 및 클라이언트 측 라우터로 구축되었습니다.",
				appName: "i18n 벤치마크",
				contactEmail: "contact@intlayer.org"
			},
			ru: {
				description: "Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.",
				resources: "Ресурсы",
				contact: "Контакты",
				github: "GitHub",
				methodology: "Методология",
				contributing: "Участие в разработке",
				footerText: "i18n Бенчмарк — проект с открытым исходным кодом. Построен на Svelte, Vite и клиентском роутере.",
				appName: "i18n Бенчмарк",
				contactEmail: "contact@intlayer.org"
			}
		}
	}
}, q = [
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
function J(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function Y(e) {
	return q.includes(e);
}
var X = new Set([
	"",
	"about",
	"blog",
	"careers",
	"contact",
	"faq",
	"pricing",
	"products",
	"settings",
	"team"
]);
function re(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!Y(n)) return { kind: "notfound" };
	let i = r[0] ?? "";
	return r.length > 1 || !X.has(i) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: i
	};
}
var Z = o(typeof window < "u" ? window.location.pathname : "/en"), Q = i(Z, (e) => re(e));
function ie(e, t = !1) {
	typeof window > "u" || (t ? history.replaceState(null, "", e) : history.pushState(null, "", e), Z.set(window.location.pathname));
}
var ae = e.from_html("<a class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"> </a>"), oe = e.from_html("<a target=\"_blank\" rel=\"noreferrer\" class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"> </a>"), $ = e.from_html("<li><!></li>"), se = e.from_html("<footer class=\"mt-20 border-t border-border bg-card\"><div class=\"container py-8\"><div class=\"grid gap-8 md:grid-cols-3\"><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div> <div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <ul class=\"space-y-1\"></ul></div> <div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div></div> <div class=\"mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground\"> </div></div></footer>");
function ce(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(Q, "$route", a), i = () => e.store_get(s, "$footer", a), [a, o] = e.setup_stores(), s = G(K), c = e.derived(() => r().kind === "ok" ? r().locale : "en"), l = e.derived(() => [
		{
			label: i().github,
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: i().methodology,
			to: `/${e.get(c)}/about`,
			isInternal: !0
		},
		{
			label: i().contributing,
			to: `/${e.get(c)}/contact`,
			isInternal: !0
		}
	]);
	var u = se(), d = e.child(u), f = e.child(d), p = e.child(f), m = e.child(p), h = e.child(m, !0);
	e.reset(m);
	var g = e.sibling(m, 2), _ = e.child(g, !0);
	e.reset(g), e.reset(p);
	var v = e.sibling(p, 2), y = e.child(v), b = e.child(y, !0);
	e.reset(y);
	var x = e.sibling(y, 2);
	e.each(x, 21, () => e.get(l), e.index, (t, n) => {
		var r = $(), i = e.child(r), a = (t) => {
			var r = ae(), i = e.child(r, !0);
			e.reset(r), e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).to), e.set_text(i, e.get(n).label);
			}), e.append(t, r);
		}, o = (t) => {
			var r = oe(), i = e.child(r, !0);
			e.reset(r), e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).href), e.set_text(i, e.get(n).label);
			}), e.append(t, r);
		};
		e.if(i, (t) => {
			e.get(n).isInternal ? t(a) : t(o, -1);
		}), e.reset(r), e.append(t, r);
	}), e.reset(x), e.reset(v);
	var S = e.sibling(v, 2), C = e.child(S), w = e.child(C, !0);
	e.reset(C);
	var T = e.sibling(C, 2), E = e.child(T, !0);
	e.reset(T), e.reset(S), e.reset(f);
	var D = e.sibling(f, 2), O = e.child(D, !0);
	e.reset(D), e.reset(d), e.reset(u), e.template_effect(() => {
		e.set_text(h, i().appName), e.set_text(_, i().description), e.set_text(b, i().resources), e.set_text(w, i().contact), e.set_text(E, i().contactEmail), e.set_text(O, i().footerText);
	}), e.append(t, u), e.pop(), o();
}
var le = {
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
				appName: "i18n Bench",
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
				appName: "i18n Bench",
				goToGithub: "Ir a GitHub",
				header: "Encabezado"
			},
			de: {
				home: "Startseite",
				methodology: "Methodik",
				mockPages: "Mock-Seiten",
				products: "Produkte",
				pricing: "Preise",
				team: "Team",
				blog: "Blog",
				careers: "Karriere",
				faq: "FAQ",
				contact: "Kontakt",
				settings: "Einstellungen",
				appName: "i18n Bench",
				goToGithub: "Zu GitHub gehen",
				header: "Header"
			},
			it: {
				home: "Home",
				methodology: "Metodologia",
				mockPages: "Pagine mock",
				products: "Prodotti",
				pricing: "Prezzi",
				team: "Team",
				blog: "Blog",
				careers: "Carriere",
				faq: "FAQ",
				contact: "Contatti",
				settings: "Impostazioni",
				appName: "i18n Bench",
				goToGithub: "Vai su GitHub",
				header: "Intestazione"
			},
			pt: {
				home: "Início",
				methodology: "Metodologia",
				mockPages: "Páginas fictícias",
				products: "Produtos",
				pricing: "Preços",
				team: "Equipe",
				blog: "Blog",
				careers: "Carreiras",
				faq: "FAQ",
				contact: "Contato",
				settings: "Configurações",
				appName: "i18n Bench",
				goToGithub: "Ir para o GitHub",
				header: "Cabeçalho"
			},
			zh: {
				home: "首页",
				methodology: "方法论",
				mockPages: "模拟页面",
				products: "产品",
				pricing: "价格",
				team: "团队",
				blog: "博客",
				careers: "职业生涯",
				faq: "常见问题",
				contact: "联系我们",
				settings: "设置",
				appName: "i18n 基准",
				goToGithub: "前往 GitHub",
				header: "页眉"
			},
			ja: {
				home: "ホーム",
				methodology: "方法論",
				mockPages: "モックページ",
				products: "製品",
				pricing: "価格",
				team: "チーム",
				blog: "ブログ",
				careers: "採用情報",
				faq: "よくある質問",
				contact: "お問い合わせ",
				settings: "設定",
				appName: "i18n ベンチ",
				goToGithub: "GitHub へ",
				header: "ヘッダー"
			},
			ko: {
				home: "홈",
				methodology: "방법론",
				mockPages: "모의 페이지",
				products: "제품",
				pricing: "가격",
				team: "팀",
				blog: "블로그",
				careers: "채용",
				faq: "FAQ",
				contact: "연락처",
				settings: "설정",
				appName: "i18n 벤치",
				goToGithub: "GitHub로 이동",
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
				contact: "Контакты",
				settings: "Настройки",
				appName: "i18n Бенч",
				goToGithub: "Перейти на GitHub",
				header: "Шапка"
			}
		}
	}
};
function ue(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), n(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var de = e.from_html("<option> </option>"), fe = e.from_html("<div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium transition-colors focus:ring-1 focus:ring-primary focus:outline-none\"></select></div>");
function pe(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(Z, "$pathname", i), [i, o] = e.setup_stores();
	function s(e) {
		let t = e.target.value;
		ie(a(Z).replace(/^\/[^/]+/, `/${t}`) + window.location.search + window.location.hash, !1);
	}
	e.init();
	var c = fe(), l = e.child(c);
	e.each(l, 5, () => A, (e) => e, (t, n) => {
		var r = de(), i = e.child(r, !0);
		e.reset(r);
		var a = {};
		e.template_effect((t) => {
			e.set_text(i, t), a !== (a = e.get(n)) && (r.value = (r.__value = e.get(n)) ?? "");
		}, [() => J(e.get(n))]), e.append(t, r);
	}), e.reset(l);
	var u;
	e.init_select(l), e.reset(c), e.template_effect((t) => {
		u !== (u = t) && (l.value = (l.__value = t) ?? "", e.select_option(l, t));
	}, [() => r().split("/").filter(Boolean)[0] ?? "en"]), e.delegated("change", l, s), e.append(t, c), e.pop(), o();
}
e.delegate(["change"]);
var me = {
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
				auto: "Tema: Auto",
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
				ariaLabelDark: "Design-Modus: Dunkel. Klicken Sie hier, um in den Auto-Modus zu wechseln."
			},
			it: {
				auto: "Tema: Auto",
				dark: "Tema: Scuro",
				light: "Tema: Chiaro",
				ariaLabelAuto: "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.",
				ariaLabelLight: "Modalità tema: chiaro. Clicca per passare alla modalità scura.",
				ariaLabelDark: "Modalità tema: scuro. Clicca per passare alla modalità auto."
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
				light: "主题：浅色",
				ariaLabelAuto: "主题模式：自动（系统）。点击切换到浅色模式。",
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
				dark: "테마: 어둡게",
				light: "테마: 밝게",
				ariaLabelAuto: "테마 모드: 자동(시스템). 클릭하여 밝은 모드로 전환합니다.",
				ariaLabelLight: "테마 모드: 밝게. 클릭하여 어두운 모드로 전환합니다.",
				ariaLabelDark: "테마 모드: 어둡게. 클릭하여 자동 모드로 전환합니다."
			},
			ru: {
				auto: "Тема: Авто",
				dark: "Тема: Темная",
				light: "Тема: Светлая",
				ariaLabelAuto: "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.",
				ariaLabelLight: "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.",
				ariaLabelDark: "Режим темы: темный. Нажмите, чтобы переключиться в автоматический режим."
			}
		}
	}
}, he = e.from_html("<button type=\"button\" class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80\"> </button>");
function ge(t, r) {
	e.push(r, !0);
	let i = () => e.store_get(s, "$tt", a), [a, o] = e.setup_stores(), s = G(me);
	function c() {
		if (typeof window > "u") return "auto";
		let e = window.localStorage.getItem("theme");
		return e === "light" || e === "dark" || e === "auto" ? e : "auto";
	}
	function l(e) {
		let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
		document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
	}
	let u = e.state("auto");
	n(() => {
		let t = c();
		e.set(u, t, !0), l(t);
	}), e.user_effect(() => {
		if (e.get(u) !== "auto") return;
		let t = window.matchMedia("(prefers-color-scheme: dark)"), n = () => l("auto");
		return t.addEventListener("change", n), () => t.removeEventListener("change", n);
	});
	function d() {
		let t = e.get(u) === "light" ? "dark" : e.get(u) === "dark" ? "auto" : "light";
		e.set(u, t, !0), l(t), window.localStorage.setItem("theme", t);
	}
	let f = e.derived(() => e.get(u) === "auto" ? i().ariaLabelAuto : e.get(u) === "light" ? i().ariaLabelLight : i().ariaLabelDark), p = e.derived(() => e.get(u) === "auto" ? i().auto : e.get(u) === "dark" ? i().dark : i().light);
	var m = he(), h = e.child(m, !0);
	e.reset(m), e.template_effect(() => {
		e.set_attribute(m, "aria-label", e.get(f)), e.set_attribute(m, "title", e.get(f)), e.set_text(h, e.get(p));
	}), e.delegated("click", m, d), e.append(t, m), e.pop(), o();
}
e.delegate(["click"]);
var _e = e.from_html("<a class=\"block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent\"> </a>"), ve = e.from_html("<div class=\"absolute top-full left-0 w-48 pt-2\" role=\"presentation\"><div class=\"overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg\"></div></div>"), ye = e.from_html("<header class=\"sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><a class=\"text-lg font-bold tracking-tight text-primary no-underline\"> </a> <div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><a> </a> <a> </a> <div class=\"relative\"><button type=\"button\" class=\"nav-link flex cursor-pointer items-center gap-1 border-none bg-transparent\"> <!></button> <!></div></div></div> <div class=\"flex items-center gap-4\"><a href=\"https://github.com/intlayer-org/benchmark-i18n\" target=\"_blank\" rel=\"noreferrer\" class=\"text-muted-foreground transition hover:text-foreground\"><span class=\"sr-only\"> </span> <svg viewBox=\"0 0 16 16\" aria-hidden=\"true\" width=\"20\" height=\"20\"><path fill=\"currentColor\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\"></path></svg></a> <!> <!></div></nav></header>");
function be(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(Q, "$route", o), i = () => e.store_get(c, "$header", o), [o, s] = e.setup_stores(), c = G(le);
	ue(a(c).header);
	let u = e.state(!1), d = e.derived(() => r().kind === "ok" ? r().locale : "en"), f = e.derived(() => [
		{
			to: `/${e.get(d)}/products`,
			label: i().products
		},
		{
			to: `/${e.get(d)}/pricing`,
			label: i().pricing
		},
		{
			to: `/${e.get(d)}/team`,
			label: i().team
		},
		{
			to: `/${e.get(d)}/blog`,
			label: i().blog
		},
		{
			to: `/${e.get(d)}/careers`,
			label: i().careers
		},
		{
			to: `/${e.get(d)}/faq`,
			label: i().faq
		},
		{
			to: `/${e.get(d)}/contact`,
			label: i().contact
		},
		{
			to: `/${e.get(d)}/settings`,
			label: i().settings
		}
	]), p = e.derived(() => r().kind === "ok" && r().page === ""), m = e.derived(() => r().kind === "ok" && r().page === "about");
	var h = ye(), g = e.child(h), _ = e.child(g), v = e.child(_), y = e.child(v, !0);
	e.reset(v);
	var b = e.sibling(v, 2), x = e.child(b);
	let S;
	var C = e.child(x, !0);
	e.reset(x);
	var w = e.sibling(x, 2);
	let T;
	var E = e.child(w, !0);
	e.reset(w);
	var D = e.sibling(w, 2), O = e.child(D), k = e.child(O), A = e.sibling(k);
	{
		let t = e.derived(() => e.get(u) ? "transition-transform rotate-180" : "transition-transform");
		l(A, {
			size: 14,
			get class() {
				return e.get(t);
			}
		});
	}
	e.reset(O);
	var j = e.sibling(O, 2), M = (t) => {
		var n = ve(), r = e.child(n);
		e.each(r, 21, () => e.get(f), (e) => e.to, (t, n) => {
			var r = _e(), i = e.child(r, !0);
			e.reset(r), e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).to), e.set_text(i, e.get(n).label);
			}), e.delegated("click", r, () => e.set(u, !1)), e.append(t, r);
		}), e.reset(r), e.reset(n), e.event("mouseenter", n, () => e.set(u, !0)), e.event("mouseleave", n, () => e.set(u, !1)), e.append(t, n);
	};
	e.if(j, (t) => {
		e.get(u) && t(M);
	}), e.reset(D), e.reset(b), e.reset(_);
	var N = e.sibling(_, 2), P = e.child(N), F = e.child(P), I = e.child(F, !0);
	e.reset(F), e.next(2), e.reset(P);
	var L = e.sibling(P, 2);
	pe(L, {}), ge(e.sibling(L, 2), {}), e.reset(N), e.reset(g), e.reset(h), e.template_effect(() => {
		e.set_attribute(v, "href", `/${e.get(d)}`), e.set_text(y, i().appName), e.set_attribute(x, "href", `/${e.get(d)}`), S = e.set_class(x, 1, "nav-link", null, S, { "is-active": e.get(p) }), e.set_text(C, i().home), e.set_attribute(w, "href", `/${e.get(d)}/about`), T = e.set_class(w, 1, "nav-link", null, T, { "is-active": e.get(m) }), e.set_text(E, i().methodology), e.set_text(k, `${i().mockPages ?? ""} `), e.set_text(I, i().goToGithub);
	}), e.event("mouseenter", O, () => e.set(u, !0)), e.event("mouseleave", O, () => e.set(u, !1)), e.delegated("click", O, () => e.set(u, !e.get(u))), e.append(t, h), e.pop(), s();
}
e.delegate(["click"]);
var xe = e.from_html("<!> <!> <!>", 1);
function Se(t, r) {
	e.push(r, !0);
	let i = L("en"), a = typeof performance < "u" ? performance.now() : 0;
	n(() => {
		s(), c("AppRoot", a);
	}), e.user_effect(() => {
		i.setLocale(r.locale), document.documentElement.lang = r.locale;
	});
	var o = xe(), l = e.first_child(o);
	be(l, {});
	var u = e.sibling(l, 2);
	e.snippet(u, () => r.children), ce(e.sibling(u, 2), {}), e.append(t, o), e.pop();
}
export { Se as default };
