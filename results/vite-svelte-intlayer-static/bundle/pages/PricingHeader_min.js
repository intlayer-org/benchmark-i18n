import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { getContext as t } from "svelte";
import { derived as n, writable as r } from "svelte/store";
var i = {
	key: "pricing-header",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				chooseThePlanThatFits: "Choose the plan that fits your team. No hidden fees.",
				simpleTransparentPricing: "Simple, Transparent Pricing"
			},
			fr: {
				chooseThePlanThatFits: "Choisissez le plan qui convient à votre équipe. Pas de frais cachés.",
				simpleTransparentPricing: "Une tarification simple et transparente"
			},
			es: {
				chooseThePlanThatFits: "Elija el plan que se adapte a su equipo. Sin cargos ocultos.",
				simpleTransparentPricing: "Precios simples и transparentes"
			},
			de: {
				chooseThePlanThatFits: "Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren.",
				simpleTransparentPricing: "Einfache, transparente Preisgestaltung"
			},
			it: {
				chooseThePlanThatFits: "Scegli il piano più adatto al tuo team. Nessun costo nascosto.",
				simpleTransparentPricing: "Prezzi semplici e trasparenti"
			},
			pt: {
				chooseThePlanThatFits: "Escolha o plano adequado à sua equipe. Sem taxas ocultas.",
				simpleTransparentPricing: "Preços simples e transparentes"
			},
			zh: {
				chooseThePlanThatFits: "选择适合您团队的计划。没有隐藏费用。",
				simpleTransparentPricing: "简单透明的定价"
			},
			ja: {
				chooseThePlanThatFits: "チームにぴったりのプランをお選びください。隠れた費用はありません。",
				simpleTransparentPricing: "シンプルで透明性の高い価格設定"
			},
			ko: {
				chooseThePlanThatFits: "팀에 적합한 플랜을 선택하세요. 숨겨진 수수료가 없습니다.",
				simpleTransparentPricing: "심플하고 투명한 가격 정책"
			},
			ru: {
				chooseThePlanThatFits: "Выберите план, который подходит вашей команде. Никаких скрытых комиссий.",
				simpleTransparentPricing: "Простая и прозрачная цена"
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
}, z = {
	key: "mock-banner",
	content: {
		nodeType: "translation",
		translation: {
			en: { message: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service." },
			fr: { message: "⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel." },
			es: { message: "⚠️ Esta página contiene datos de prueba solo para fines de benchmarking. No está relacionada con ninguna empresa o servicio real." },
			de: { message: "⚠️ Diese Seite enthält Mock-Daten nur zu Benchmarking-Zwecken. Sie steht in keinem Zusammenhang mit einem echten Unternehmen oder einer echten Dienstleistung." },
			it: { message: "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è correlata ad alcuna attività o servizio reale." },
			pt: { message: "⚠️ Esta página contém données fictícios apenas para fins de benchmarking. Não está relacionada a nenhum negócio ou serviço real." },
			zh: { message: "⚠️ 本页面包含仅用于基准测试目的的模拟数据。它与任何真实的业务或服务无关。" },
			ja: { message: "⚠️ このページにはベンチマーク目的のモックデータのみが含まれています。実際のビジネスやサービスとは関係ありません。" },
			ko: { message: "⚠️ 이 페이지에는 벤치마킹 목적의 모의 데이터만 포함되어 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다." },
			ru: { message: "⚠️ Эта страница содержит мок-данные только для целей бенчмаркинга. Она не связана с каким-либо реальным бизнесом или услугой." }
		}
	}
}, B = e.from_html("<div class=\"mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground\"> </div>");
function V(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(o, "$banner", i), [i, a] = e.setup_stores(), o = R(z);
	e.init();
	var s = B(), c = e.child(s, !0);
	e.reset(s), e.template_effect(() => e.set_text(c, r().message)), e.append(t, s), e.pop(), a();
}
var H = e.from_html("<!> <div class=\"mb-12 text-center\"><h1 class=\"mb-3 text-3xl font-bold text-foreground\"> </h1> <p class=\"text-muted-foreground\"> </p></div>", 1);
function U(t, n) {
	e.push(n, !1);
	let r = () => e.store_get(s, "$content", a), [a, o] = e.setup_stores(), s = R(i);
	e.init();
	var c = H(), l = e.first_child(c);
	V(l, {});
	var u = e.sibling(l, 2), d = e.child(u), f = e.child(d, !0);
	e.reset(d);
	var p = e.sibling(d, 2), m = e.child(p, !0);
	e.reset(p), e.reset(u), e.template_effect(() => {
		e.set_text(f, r().simpleTransparentPricing), e.set_text(m, r().chooseThePlanThatFits);
	}), e.append(t, c), e.pop(), o();
}
export { U as default };
