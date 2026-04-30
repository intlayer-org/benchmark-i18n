import "svelte/internal/disclose-version";
import * as e from "svelte/internal/client";
import { getContext as t } from "svelte";
import { derived as n, writable as r } from "svelte/store";
import "svelte/internal/flags/legacy";
var i = {
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
}, a = Symbol("intlayer"), o = () => t(a), s = {
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
}, c = s?.defaultLocale, l = (() => {
	let { subscribe: e, set: t, update: i } = r({ locale: c });
	return {
		subscribe: e,
		setLocale: (e) => i((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => n({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: c })
	};
})(), u = "translation", d = "object", f = "array", p = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => p(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => p(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: f,
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
					type: d,
					key: r
				}]
			}, i = p(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, m = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, h = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (m(e) && m(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : h(e[r], t[r]));
		return n;
	}
	return e;
}, g = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => h(e, t));
}, _ = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, v = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? _ : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: u,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return g(o, e, t);
	}
}, y = _, b = _, x = _, S = _, C = (e) => _, w = _, T = (e, t = !0) => [
	v(e ?? s.defaultLocale, t ? s.defaultLocale : void 0),
	y,
	b,
	x,
	C(e ?? s.defaultLocale),
	w,
	S
], E = (e, t, n = []) => p(e, {
	...t,
	plugins: n
}), D = (e, t, n = T(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return E(e.content, r, n);
};
function O(t, n) {
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
var k = (e) => {
	let t = !!O.prototype?.$destroy, n;
	return n = t ? class extends O {
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
	} : (t) => O(t, {
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
}, A = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => k({
		value: t ?? e,
		component: void 0,
		props: n
	})
}, j = A, M = _, N = _, P = _, F = /* @__PURE__ */ new Map(), I = (e, t = !0) => {
	let n = `${e ?? s.defaultLocale}_${t}`;
	if (F.has(n)) return F.get(n);
	let r = [
		v(e ?? s.defaultLocale, t ? s.defaultLocale : void 0),
		y,
		b,
		C(e ?? s.defaultLocale),
		w,
		S,
		A,
		j,
		M,
		N,
		P
	];
	return F.set(n, r), r;
}, L = (e, t) => D(e, t, I(t)), R = (e, t) => {
	let r = o();
	return n([l], ([n]) => L(e, t ?? r?.locale ?? n.locale));
}, z = [
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
function B(e) {
	return z.includes(e);
}
var V = new Set([
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
function H(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!B(n)) return { kind: "notfound" };
	let i = r[0] ?? "";
	return r.length > 1 || !V.has(i) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: i
	};
}
var U = n(r(typeof window < "u" ? window.location.pathname : "/en"), (e) => H(e)), W = e.from_html("<a class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"> </a>"), G = e.from_html("<a target=\"_blank\" rel=\"noreferrer\" class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"> </a>"), K = e.from_html("<li><!></li>"), q = e.from_html("<footer class=\"mt-20 border-t border-border bg-card\"><div class=\"container py-8\"><div class=\"grid gap-8 md:grid-cols-3\"><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div> <div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <ul class=\"space-y-1\"></ul></div> <div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div></div> <div class=\"mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground\"> </div></div></footer>");
function J(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(U, "$route", o), a = () => e.store_get(c, "$footer", o), [o, s] = e.setup_stores(), c = R(i), l = e.derived(() => r().kind === "ok" ? r().locale : "en"), u = e.derived(() => [
		{
			label: a().github,
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: a().methodology,
			to: `/${e.get(l)}/about`,
			isInternal: !0
		},
		{
			label: a().contributing,
			to: `/${e.get(l)}/contact`,
			isInternal: !0
		}
	]);
	var d = q(), f = e.child(d), p = e.child(f), m = e.child(p), h = e.child(m), g = e.child(h, !0);
	e.reset(h);
	var _ = e.sibling(h, 2), v = e.child(_, !0);
	e.reset(_), e.reset(m);
	var y = e.sibling(m, 2), b = e.child(y), x = e.child(b, !0);
	e.reset(b);
	var S = e.sibling(b, 2);
	e.each(S, 21, () => e.get(u), e.index, (t, n) => {
		var r = K(), i = e.child(r), a = (t) => {
			var r = W(), i = e.child(r, !0);
			e.reset(r), e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).to), e.set_text(i, e.get(n).label);
			}), e.append(t, r);
		}, o = (t) => {
			var r = G(), i = e.child(r, !0);
			e.reset(r), e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).href), e.set_text(i, e.get(n).label);
			}), e.append(t, r);
		};
		e.if(i, (t) => {
			e.get(n).isInternal ? t(a) : t(o, -1);
		}), e.reset(r), e.append(t, r);
	}), e.reset(S), e.reset(y);
	var C = e.sibling(y, 2), w = e.child(C), T = e.child(w, !0);
	e.reset(w);
	var E = e.sibling(w, 2), D = e.child(E, !0);
	e.reset(E), e.reset(C), e.reset(p);
	var O = e.sibling(p, 2), k = e.child(O, !0);
	e.reset(O), e.reset(f), e.reset(d), e.template_effect(() => {
		e.set_text(g, a().appName), e.set_text(v, a().description), e.set_text(x, a().resources), e.set_text(T, a().contact), e.set_text(D, a().contactEmail), e.set_text(k, a().footerText);
	}), e.append(t, d), e.pop(), s();
}
export { J as default };
