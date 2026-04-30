import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { getContext as t } from "svelte";
import { derived as n, writable as r } from "svelte/store";
var i = {
	de: () => import("./de-BPq0bRZp.js").then((e) => e.default),
	en: () => import("./en-CzzEpCpd.js").then((e) => e.default),
	es: () => import("./es-Bylatf0u.js").then((e) => e.default),
	fr: () => import("./fr-BR7TnBIo.js").then((e) => e.default),
	it: () => import("./it-Dbbgm_Tt.js").then((e) => e.default),
	ja: () => import("./ja-_42hrVy5.js").then((e) => e.default),
	ko: () => import("./ko-C1vx63mz.js").then((e) => e.default),
	pt: () => import("./pt--bPF41Tq.js").then((e) => e.default),
	ru: () => import("./ru-DZCDdQ1f.js").then((e) => e.default),
	zh: () => import("./zh-CW7V8FYy.js").then((e) => e.default)
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
}, L = (e, t) => D(e, t, I(t)), R = new Proxy(() => {}, {
	get: (e, t) => {
		if (t === Symbol.toPrimitive) return () => void 0;
		if (t === "toString") return () => "";
		if (t !== "then") return R;
	},
	apply: () => R
});
function z(e, t, r) {
	let i = o();
	return n(n(l, (e) => r ?? i?.locale ?? e.locale), (t, n) => {
		n(new Proxy({
			isLoading: !0,
			error: null
		}, { get: (e, t) => t === "isLoading" ? !0 : t === "error" ? null : R }));
		let r = !1;
		return (async () => {
			try {
				let i = e[t];
				if (!i) return;
				let a = await i();
				if (r) return;
				n({
					...L(a, t),
					isLoading: !1,
					error: null
				});
			} catch (e) {
				if (r) return;
				console.error(e), n({
					isLoading: !1,
					error: e
				});
			}
		})(), () => {
			r = !0;
		};
	}, new Proxy({
		isLoading: !0,
		error: null
	}, { get: (e, t) => t === "isLoading" ? !0 : t === "error" ? null : R }));
}
var B = {
	de: () => import("./de-pf2V_pZ9.js").then((e) => e.default),
	en: () => import("./en-DiHrX_FU.js").then((e) => e.default),
	es: () => import("./es-D6kQHtkK.js").then((e) => e.default),
	fr: () => import("./fr-DKDlyBBJ.js").then((e) => e.default),
	it: () => import("./it-DdmcIccO.js").then((e) => e.default),
	ja: () => import("./ja-3kmoh25X.js").then((e) => e.default),
	ko: () => import("./ko-BPW2ws6D.js").then((e) => e.default),
	pt: () => import("./pt-B7FuRggF.js").then((e) => e.default),
	ru: () => import("./ru-v8xvck-e.js").then((e) => e.default),
	zh: () => import("./zh-D0kzZKf3.js").then((e) => e.default)
}, V = e.from_html("<div class=\"mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground\"> </div>");
function H(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(o, "$banner", i), [i, a] = e.setup_stores(), o = z(B, "mock-banner");
	e.init();
	var s = V(), c = e.child(s, !0);
	e.reset(s), e.template_effect(() => e.set_text(c, r().message)), e.append(t, s), e.pop(), a();
}
var U = e.from_html("<!> <h1 class=\"mb-2 text-3xl font-bold text-foreground\"> </h1> <p class=\"mb-10 text-muted-foreground\"> </p>", 1);
function W(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(s, "$content", a), [a, o] = e.setup_stores(), s = z(i, "team-header");
	e.init();
	var c = U(), l = e.first_child(c);
	H(l, {});
	var u = e.sibling(l, 2), d = e.child(u, !0);
	e.reset(u);
	var f = e.sibling(u, 2), p = e.child(f, !0);
	e.reset(f), e.template_effect(() => {
		e.set_text(d, r().title), e.set_text(p, r().description);
	}), e.append(t, c), e.pop(), o();
}
export { W as default };
var e = {
	key: "team-header",
	content: {
		title: "Unser Team",
		description: "Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, das durch die gemeinsame Leidenschaft für großartige Entwickler-Tools vereint ist."
	}
};
export { e as default };
var e = {
	key: "mock-banner",
	content: { message: "⚠️ Diese Seite enthält Mock-Daten nur zu Benchmarking-Zwecken. Sie steht in keinem Zusammenhang mit einem echten Unternehmen oder einer echten Dienstleistung." }
};
export { e as default };
var e = {
	key: "team-header",
	content: {
		title: "Our Team",
		description: "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
	}
};
export { e as default };
var e = {
	key: "mock-banner",
	content: { message: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service." }
};
export { e as default };
var e = {
	key: "team-header",
	content: {
		title: "Nuestro Equipo",
		description: "Conozca a las personas detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las excelentes herramientas para desarrolladores."
	}
};
export { e as default };
var e = {
	key: "mock-banner",
	content: { message: "⚠️ Esta página contiene datos de prueba solo para fines de benchmarking. No está relacionada con ninguna empresa o servicio real." }
};
export { e as default };
var e = {
	key: "team-header",
	content: {
		title: "Notre Équipe",
		description: "Rencontrez les personnes derrière i18n Benchmark. Une équipe diversifiée unie par une passion commune pour les excellents outils de développement."
	}
};
export { e as default };
var e = {
	key: "mock-banner",
	content: { message: "⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel." }
};
export { e as default };
var e = {
	key: "team-header",
	content: {
		title: "Il nostro team",
		description: "Incontra le persone dietro i18n Benchmark. Un team diversificato unito da una passione condivisa per i grandi strumenti di sviluppo."
	}
};
export { e as default };
var e = {
	key: "mock-banner",
	content: { message: "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è correlata ad alcuna attività o servizio reale." }
};
export { e as default };
var e = {
	key: "mock-banner",
	content: { message: "⚠️ このページにはベンチマーク目的のモックデータのみが含まれています。実際のビジネスやサービスとは関係ありません。" }
};
export { e as default };
var e = {
	key: "team-header",
	content: {
		title: "私たちのチーム",
		description: "i18n Benchmark の背後にいる人々を紹介します。優れた開発者ツールへの情熱を共有する多様なチームです。"
	}
};
export { e as default };
var e = {
	key: "mock-banner",
	content: { message: "⚠️ 이 페이지에는 벤치마킹 목적의 모의 데이터만 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다." }
};
export { e as default };
var e = {
	key: "team-header",
	content: {
		title: "우리 팀",
		description: "i18n Benchmark의 주역들을 만나보세요. 훌륭한 개발자 도구에 대한 공통된 열정으로 뭉친 다양한 팀입니다."
	}
};
export { e as default };
var e = {
	key: "team-header",
	content: {
		title: "Nossa Equipe",
		description: "Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor."
	}
};
export { e as default };
var e = {
	key: "mock-banner",
	content: { message: "⚠️ Esta página contém données fictícios apenas para fins de benchmarking. Não está relacionada a nenhum negócio ou serviço real." }
};
export { e as default };
var e = {
	key: "team-header",
	content: {
		title: "Наша команда",
		description: "Познакомьтесь с людьми, стоящими за i18n Benchmark. Разнообразная команда, объединенная общей страстью к созданию отличных инструментов для разработчиков."
	}
};
export { e as default };
var e = {
	key: "mock-banner",
	content: { message: "⚠️ Эта страница содержит мок-данные только для целей бенчмаркинга. Она не связана с каким-либо реальным бизнесом или услугой." }
};
export { e as default };
var e = {
	key: "team-header",
	content: {
		title: "我们的团队",
		description: "结识 i18n Benchmark 背后的团队。一支多元化的团队，因对出色开发工具的共同热情而团结在一起。"
	}
};
export { e as default };
var e = {
	key: "mock-banner",
	content: { message: "⚠️ 本页面包含仅用于基准测试目的的模拟数据。它与任何真实的业务或服务无关。" }
};
export { e as default };
