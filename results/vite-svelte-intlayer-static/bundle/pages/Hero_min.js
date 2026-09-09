import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { derived as t, get as n, writable as r } from "svelte/store";
import { getContext as i, onMount as a } from "svelte";
var o = {
	key: "hero",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				title: "i18n Benchmark",
				description: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
				viewResults: "View Results",
				methodology: "Methodology",
				hero: "Hero"
			},
			fr: {
				title: "Benchmark i18n",
				description: "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.",
				viewResults: "Voir les résultats",
				methodology: "Méthodologie",
				hero: "Héros"
			},
			es: {
				title: "i18n Benchmark",
				description: "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el rendimiento de carga y la reactividad de la representación.",
				viewResults: "Ver resultados",
				methodology: "Metodología",
				hero: "Heroe"
			},
			de: {
				title: "i18n Benchmark",
				description: "Eine Testanwendung, die entwickelt wurde, um die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen.",
				viewResults: "Ergebnisse anzeigen",
				methodology: "Methodik",
				hero: "Hero"
			},
			it: {
				title: "i18n Benchmark",
				description: "Un'applicazione di test progettata per misurare l'impatto nel mondo reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.",
				viewResults: "Visualizza i risultati",
				methodology: "Metodologia",
				hero: "Hero"
			},
			pt: {
				title: "i18n Benchmark",
				description: "Um aplicativo de teste projetado para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.",
				viewResults: "Ver Resultados",
				methodology: "Metodologia",
				hero: "Herói"
			},
			zh: {
				title: "i18n 基准测试",
				description: "一个旨在衡量国际化库对捆绑包大小、加载性能和渲染反应性的实际影响的测试应用程序。",
				viewResults: "查看结果",
				methodology: "方法论",
				hero: "主视觉"
			},
			ja: {
				title: "i18n ベンチマーク",
				description: "国際化ライブラリがバンドルサイズ、ロードパフォーマンス、およびレンダリングの反応性に与える実世界の影響を測定するために設計されたテストアプリケーション。",
				viewResults: "結果を見る",
				methodology: "方法論",
				hero: "ヒーロー"
			},
			ko: {
				title: "i18n 벤치마크",
				description: "국제화 라이브러리가 번들 크기, 로딩 성능 및 렌더링 반응성에 미치는 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.",
				viewResults: "결과 보기",
				methodology: "방법론",
				hero: "히어로"
			},
			ru: {
				title: "i18n Бенчмарк",
				description: "Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.",
				viewResults: "Посмотреть результаты",
				methodology: "Методология",
				hero: "Главный баннер"
			}
		}
	}
}, s = {
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
	let { subscribe: e, set: n, update: i } = r({ locale: c });
	return {
		subscribe: e,
		setLocale: (e) => i((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => t({ subscribe: e }, (e) => e.locale),
		reset: () => n({ locale: c })
	};
})(), u = Symbol("intlayer"), d = () => i(u), f = "default", p = /[^A-Za-z0-9._&=-]/g, m = /[^A-Za-z0-9._-]/g, h = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, g = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, h);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, _ = (e) => e === void 0 ? f : typeof e == "string" ? g(e, p) : Object.keys(e).sort().map((t) => `${g(t, m)}=${g(String(e[t]), m)}`).join("&"), v = (e) => Array.isArray(e) ? e.length === 0 ? [f] : e.map(_) : [_(e)], y = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? f : e[0] ?? "default";
}, b = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, x = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, ee = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, te = (e, t) => {
	if (!x(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? f : y(v(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => b(e, n, t, s)).map((t) => ee(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, ne = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, S = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? v(n).join(",") : String(n)}`;
}).join("|") : "", C = "translation", w = "object", T = "array", E = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => E(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => E(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: T,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: w,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = E(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = E(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, D = /* @__PURE__ */ new WeakMap(), O = 0, k = (e) => {
	if (!e) return "base";
	let t = D.get(e);
	if (t) return t;
	O += 1;
	let n = `p${O}`;
	return D.set(e, n), n;
}, A = 256, j = /* @__PURE__ */ new WeakMap(), M = (e) => typeof e == "object" && !!e, re = (e, t, n) => `${e}_${t}_${k(n)}`, ie = (e, t) => {
	if (!M(e)) return { hit: !1 };
	let n = j.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, N = (e, t, n) => {
	if (!M(e)) return n;
	let r = j.get(e);
	return r || (r = /* @__PURE__ */ new Map(), j.set(e, r)), r.size >= A && r.clear(), r.set(t, n), n;
}, P = (e, t = !0) => [
	V(e ?? s.defaultLocale, t ? s.defaultLocale : void 0),
	H,
	W,
	G,
	J(e ?? s.defaultLocale),
	Y,
	K,
	q
], F = (e, t, n = []) => E(e, {
	...t,
	plugins: n
}), I = (e, t, n) => {
	let { locale: r, selector: i } = ne(t), a = re(r ?? s.defaultLocale, S(i), n), o = ie(e, a);
	if (o.hit) return o.content;
	let c = n ?? P(r), l = te(e, i), u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries
		};
		return F(e.content, t, c);
	};
	return l === null ? N(e, a, null) : Array.isArray(l) ? N(e, a, l.map(u)) : N(e, a, u(l));
}, L = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, R = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (L(e) && L(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : R(e[r], t[r]));
		return n;
	}
	return e;
}, z = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => R(e, t));
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
					type: C,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return z(o, e, t);
	}
}, H = B, U = (e) => B, W = B, G = B, K = B, q = B, J = (e) => B, Y = B;
function X(t, n) {
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
var ae = (e) => {
	let t = !!X.prototype?.$destroy, n;
	if (n = t ? class extends X {
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
	} : (t) => X(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, "toString", {
		value: () => String(e.value ?? ""),
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, "valueOf", {
		value: () => e.value,
		writable: !0,
		configurable: !0
	}), Object.defineProperty(n, Symbol.toPrimitive, {
		value: () => e.value ?? "",
		writable: !0,
		configurable: !0
	}), e.value !== null && e.value !== void 0) {
		let t = Object(e.value), r = Object.getPrototypeOf(t);
		for (let i of Object.getOwnPropertyNames(r)) {
			if (i === "constructor" || i in n) continue;
			let r = t[i];
			typeof r == "function" && Object.defineProperty(n, i, {
				value: r.bind(e.value),
				writable: !0,
				configurable: !0
			});
		}
	}
	return e.additionalProps && Object.assign(n, e.additionalProps), n;
}, Z = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => ae({
		value: t ?? e,
		component: void 0,
		props: n
	})
}, oe = Z, se = B, Q = B, ce = B, $ = /* @__PURE__ */ new Map(), le = (e, t = !0) => {
	let n = `${e ?? s.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		V(e ?? s.defaultLocale, t ? s.defaultLocale : void 0),
		H,
		U(e ?? s.defaultLocale),
		W,
		J(e ?? s.defaultLocale),
		Y,
		K,
		q,
		Z,
		oe,
		se,
		Q,
		ce
	];
	return $.set(n, r), r;
}, ue = (e, t) => I(e, t, le(typeof t == "object" && t ? t.locale : t)), de = (e, n) => {
	let r = d();
	return t([l], ([t]) => {
		let i = r?.locale ?? t.locale;
		return ue(e, n ?? i);
	});
};
function fe(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), a(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	});
}
var pe = e.from_html("<section class=\"mb-16 text-center\"><h1 class=\"mb-4 text-4xl font-bold tracking-tight text-foreground\"> </h1> <p class=\"mx-auto max-w-2xl text-lg text-muted-foreground\"> </p> <div class=\"mt-8 flex justify-center gap-4\"><button type=\"button\" class=\"rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90\"> </button> <button type=\"button\" class=\"rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent\"> </button></div></section>");
function me(t, r) {
	e.push(r, !1);
	let i = () => e.store_get(c, "$content", a), [a, s] = e.setup_stores(), c = de(o);
	fe(n(c).hero), e.init();
	var l = pe(), u = e.child(l), d = e.only_child(u, !0), f = e.sibling(u, 2), p = e.only_child(f, !0), m = e.sibling(f, 2), h = e.child(m), g = e.only_child(h, !0), _ = e.sibling(h, 2), v = e.only_child(_, !0);
	e.reset(m), e.reset(l), e.template_effect(() => {
		e.set_text(d, i().title), e.set_text(p, i().description), e.set_text(g, i().viewResults), e.set_text(v, i().methodology);
	}), e.append(t, l), e.pop(), s();
}
export { me as default };
