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
}, a = {
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
}, o = a?.defaultLocale, s = (() => {
	let { subscribe: e, set: t, update: i } = r({ locale: o });
	return {
		subscribe: e,
		setLocale: (e) => i((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => n({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: o })
	};
})(), c = Symbol("intlayer"), l = () => t(c), u = /* @__PURE__ */ new Map(), d = (e, t) => Object.create(new Proxy(e, {
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
}), f = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = u.get(t);
	i || (i = /* @__PURE__ */ new Map(), u.set(t, i));
	let a = i.get(r);
	return a || (a = d(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, p = "translation", m = "object", h = "array", g = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), _ = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, _);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => _(e, g(t, e, {
		type: h,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: m,
			key: r
		};
		if (t.eager) {
			n[r] = _(e[r], g(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = _(e[r], g(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, v = /* @__PURE__ */ new WeakMap(), y = 0, b = (e) => {
	if (!e) return "base";
	let t = v.get(e);
	if (t) return t;
	y += 1;
	let n = `p${y}`;
	return v.set(e, n), n;
}, x = 256, S = /* @__PURE__ */ new WeakMap(), C = (e) => typeof e == "object" && !!e, w = (e, t, n) => `${e}_${t}_${b(n)}`, T = (e, t) => {
	if (!C(e)) return { hit: !1 };
	let n = S.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, E = (e, t, n) => {
	if (!C(e)) return n;
	let r = S.get(e);
	return r || (r = /* @__PURE__ */ new Map(), S.set(e, r)), r.size >= x && r.clear(), r.set(t, n), n;
}, D = (e, t = !0) => [
	P(e ?? a.defaultLocale, t ? a.defaultLocale : void 0),
	F,
	I(e ?? a.defaultLocale),
	L,
	R,
	V(e ?? a.defaultLocale),
	H,
	z,
	B
].filter((e) => e !== N), O = (e, t, n = []) => _(e, {
	...t,
	plugins: n
}), k = /* @__PURE__ */ new WeakSet(), ee = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, o = w(r ?? a.defaultLocale, "", n), s = T(e, o);
	if (s.hit) return s.content;
	let c = n ?? D(r), l = e, u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries,
			eager: !k.has(e)
		};
		k.add(e);
		try {
			return O(e.content, t, c);
		} finally {
			t.eager && k.delete(e);
		}
	};
	return l === null ? E(e, o, null) : Array.isArray(l) ? E(e, o, l.map(u)) : E(e, o, u(l));
}, A = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, j = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !A(e) || !A(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? j(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, M = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => j(e, t));
}, N = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, P = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? N : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = M(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: p,
				key: e
			}]
		});
	}
}, F = N, I = (e) => N, L = N, R = N, z = N, B = N, V = (e) => N, H = N;
function U(t, n) {
	e.push(n, !1);
	let r = e.prop(n, "Renderer", 8, void 0), i = e.prop(n, "rendererProps", 24, () => ({})), a = e.prop(n, "value", 8, void 0), o = e.mutable_source(), s = e.mutable_source(!1);
	e.legacy_pre_effect(() => e.deep_read_state(r()), () => {
		typeof r()?.then == "function" ? (e.set(s, !0), r().then((t) => {
			e.set(o, t), e.set(s, !1);
		})) : (e.set(o, r()), e.set(s, !1));
	}), e.legacy_pre_effect_reset(), e.init();
	var c = e.comment(), l = e.first_child(c), u = (e) => {}, d = (t) => {
		var n = e.comment(), r = e.first_child(n);
		e.element(r, () => e.get(o), !1, (t, n) => {
			e.attribute_effect(t, () => ({ ...i() }));
			var r = e.text();
			e.template_effect(() => e.set_text(r, a())), e.append(n, r);
		}), e.append(t, n);
	}, f = (t) => {
		e.get(o)(t, e.spread_props(i, {
			children: (t, n) => {
				e.next();
				var r = e.text();
				e.template_effect(() => e.set_text(r, a())), e.append(t, r);
			},
			$$slots: { default: !0 }
		}));
	}, p = (t) => {
		var n = e.text();
		e.template_effect(() => e.set_text(n, a())), e.append(t, n);
	};
	e.if(l, (t) => {
		e.get(s) ? t(u) : typeof e.get(o) == "string" ? t(d, 1) : typeof e.get(o) == "function" ? t(f, 2) : t(p, -1);
	}), e.append(t, c), e.pop();
}
var W = (e) => {
	let t = !!U.prototype?.$destroy, n;
	return n = t ? function(t) {
		return new U({
			...t,
			props: {
				...t.props,
				Renderer: e.component,
				rendererProps: e.props,
				value: e.value
			}
		});
	} : (t) => U(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), e.additionalProps && Object.assign(n, e.additionalProps), Object.setPrototypeOf(n, f(e.value, Function.prototype)), n;
}, G = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => W({
		value: t.children ?? e,
		component: void 0,
		props: {}
	})
}, K = G, q = N, J = N, Y = N, X = /* @__PURE__ */ new Map(), Z = (e, t = !0) => {
	let n = `${e ?? a.defaultLocale}_${t}`;
	if (X.has(n)) return X.get(n);
	let r = [
		G,
		P(e ?? a.defaultLocale, t ? a.defaultLocale : void 0),
		F,
		I(e ?? a.defaultLocale),
		L,
		V(e ?? a.defaultLocale),
		H,
		z,
		B,
		K,
		q,
		J,
		Y
	].filter((e) => e !== N);
	return X.set(n, r), r;
}, Q = (e, t) => ee(e, t, Z(typeof t == "object" && t ? t.locale : t)), te = (e, t) => {
	let r = l();
	return n([s], ([n]) => {
		let i = r?.locale ?? n.locale;
		return Q(e, t ?? i);
	});
}, ne = [
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
function re(e) {
	return ne.includes(e);
}
var ie = /* @__PURE__ */ new Set([
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
function $(e) {
	let t = e.split("/").filter(Boolean);
	if (t.length === 0) return { kind: "notfound" };
	let [n, ...r] = t;
	if (!re(n)) return { kind: "notfound" };
	let i = r[0] ?? "";
	return r.length > 1 || !ie.has(i) ? { kind: "notfound" } : {
		kind: "ok",
		locale: n,
		page: i
	};
}
var ae = r(typeof window < "u" ? window.location.pathname : "/en"), oe = n(ae, (e) => $(e)), se = e.from_html("<a class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"> </a>"), ce = e.from_html("<a target=\"_blank\" rel=\"noreferrer\" class=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"> </a>"), le = e.from_html("<li><!></li>"), ue = e.from_html("<footer class=\"mt-20 border-t border-border bg-card\"><div class=\"container py-8\"><div class=\"grid gap-8 md:grid-cols-3\"><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div> <div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <ul class=\"space-y-1\"></ul></div> <div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"> </h3> <p class=\"text-sm text-muted-foreground\"> </p></div></div> <div class=\"mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground\"> </div></div></footer>");
function de(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(oe, "$route", o), a = () => e.store_get(c, "$footer", o), [o, s] = e.setup_stores(), c = te(i), l = e.derived(() => r().kind === "ok" ? r().locale : "en"), u = e.derived(() => [
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
	var d = ue(), f = e.child(d), p = e.child(f), m = e.child(p), h = e.child(m), g = e.only_child(h, !0), _ = e.sibling(h, 2), v = e.only_child(_, !0);
	e.reset(m);
	var y = e.sibling(m, 2), b = e.child(y), x = e.only_child(b, !0), S = e.sibling(b, 2);
	e.each(S, 21, () => e.get(u), e.index, (t, n) => {
		var r = le(), i = e.child(r), a = (t) => {
			var r = se(), i = e.only_child(r, !0);
			e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).to), e.set_text(i, e.get(n).label);
			}), e.append(t, r);
		}, o = (t) => {
			var r = ce(), i = e.only_child(r, !0);
			e.template_effect(() => {
				e.set_attribute(r, "href", e.get(n).href), e.set_text(i, e.get(n).label);
			}), e.append(t, r);
		};
		e.if(i, (t) => {
			e.get(n).isInternal ? t(a) : t(o, -1);
		}), e.reset(r), e.append(t, r);
	}), e.reset(S), e.reset(y);
	var C = e.sibling(y, 2), w = e.child(C), T = e.only_child(w, !0), E = e.sibling(w, 2), D = e.only_child(E, !0);
	e.reset(C), e.reset(p);
	var O = e.sibling(p, 2), k = e.only_child(O, !0);
	e.reset(f), e.reset(d), e.template_effect(() => {
		e.set_text(g, a().appName), e.set_text(v, a().description), e.set_text(x, a().resources), e.set_text(T, a().contact), e.set_text(D, a().contactEmail), e.set_text(k, a().footerText);
	}), e.append(t, d), e.pop(), s();
}
export { de as default };
