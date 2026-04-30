import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { getContext as t } from "svelte";
import { derived as n, get as r, writable as i } from "svelte/store";
var a = {
	key: "careers-benefits",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				x20TimeForOssContributions: "20% time for OSS contributions",
				openSourceTime: "Open source time",
				topOfMarketCompensation: "Top-of-market compensation",
				competitivePay: "Competitive pay",
				workFromAnywhereInThe: "Work from anywhere in the world"
			},
			fr: {
				x20TimeForOssContributions: "20 % du temps pour les contributions OSS",
				openSourceTime: "Temps open source",
				topOfMarketCompensation: "Rémunération au sommet du marché",
				competitivePay: "Salaire compétitif",
				workFromAnywhereInThe: "Travaillez de n'importe où dans le monde"
			},
			es: {
				x20TimeForOssContributions: "20% de tiempo para contribuciones de OSS",
				openSourceTime: "Tiempo de código abierto",
				topOfMarketCompensation: "Compensación superior al mercado",
				competitivePay: "Salario competitivo",
				workFromAnywhereInThe: "Trabaje desde cualquier lugar del mundo"
			},
			de: {
				x20TimeForOssContributions: "20 % Zeit für OSS-Beiträge",
				openSourceTime: "Open-Source-Zeit",
				topOfMarketCompensation: "Marktgerechte Vergütung",
				competitivePay: "Wettbewerbsfähige Bezahlung",
				workFromAnywhereInThe: "Arbeiten Sie von überall auf der Welt"
			},
			it: {
				x20TimeForOssContributions: "20% del tempo per i contributi OSS",
				openSourceTime: "Tempo open source",
				topOfMarketCompensation: "Compenso ai vertici del mercato",
				competitivePay: "Retribuzione competitiva",
				workFromAnywhereInThe: "Lavora da qualsiasi parte del mondo"
			},
			pt: {
				x20TimeForOssContributions: "20% do tempo para contribuições OSS",
				openSourceTime: "Tempo de código aberto",
				topOfMarketCompensation: "Remuneração acima do mercado",
				competitivePay: "Salário competitivo",
				workFromAnywhereInThe: "Trabalhe de qualquer lugar do mundo"
			},
			zh: {
				x20TimeForOssContributions: "20% 的时间用于 OSS 贡献",
				openSourceTime: "开源时间",
				topOfMarketCompensation: "市场顶尖的薪酬",
				competitivePay: "具有竞争力的薪酬",
				workFromAnywhereInThe: "在全球任何地方工作"
			},
			ja: {
				x20TimeForOssContributions: "OSS への貢献のための 20% の時間",
				openSourceTime: "オープンソースの時間",
				topOfMarketCompensation: "市場トップレベルの報酬",
				competitivePay: "競争力のある給与",
				workFromAnywhereInThe: "世界中のどこからでも仕事ができます"
			},
			ko: {
				x20TimeForOssContributions: "OSS 기여를 위한 20%의 시간",
				openSourceTime: "오픈 소스 시간",
				topOfMarketCompensation: "업계 최고 수준의 보상",
				competitivePay: "경쟁력 있는 급여",
				workFromAnywhereInThe: "전 세계 어디서나 근무 가능"
			},
			ru: {
				x20TimeForOssContributions: "20% времени на вклад в OSS",
				openSourceTime: "Время на open source",
				topOfMarketCompensation: "Компенсация выше рыночной",
				competitivePay: "Конкурентоспособная зарплата",
				workFromAnywhereInThe: "Работайте из любой точки мира"
			}
		}
	},
	localIds: ["careers-benefits::local::src/components/pages/careers/careersBenefits.content.ts"]
}, o = Symbol("intlayer"), s = () => t(o), c = {
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
}, l = c?.defaultLocale, u = (() => {
	let { subscribe: e, set: t, update: r } = i({ locale: l });
	return {
		subscribe: e,
		setLocale: (e) => r((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => n({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: l })
	};
})(), d = "translation", f = "object", p = "array", m = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => m(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => m(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: p,
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
					type: f,
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
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: d,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return _(o, e, t);
	}
}, x = y, S = y, C = y, w = y, T = (e) => y, E = y, D = (e, t = !0) => [
	b(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
	x,
	S,
	C,
	T(e ?? c.defaultLocale),
	E,
	w
], O = (e, t, n = []) => m(e, {
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
};
function A(t, n) {
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
var j = (e) => {
	let t = !!A.prototype?.$destroy, n;
	return n = t ? class extends A {
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
	} : (t) => A(t, {
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
}, M = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false" ? y : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => j({
		value: t ?? e,
		component: void 0,
		props: n
	})
}, N = M, P = y, F = y, I = y, L = /* @__PURE__ */ new Map(), R = (e, t = !0) => {
	let n = `${e ?? c.defaultLocale}_${t}`;
	if (L.has(n)) return L.get(n);
	let r = [
		b(e ?? c.defaultLocale, t ? c.defaultLocale : void 0),
		x,
		S,
		T(e ?? c.defaultLocale),
		E,
		w,
		M,
		N,
		P,
		F,
		I
	];
	return L.set(n, r), r;
}, z = (e, t) => k(e, t, R(t)), B = (e, t) => {
	let r = s();
	return n([u], ([n]) => z(e, t ?? r?.locale ?? n.locale));
}, V = e.from_html("<div class=\"rounded-lg border border-border bg-card p-4 text-center\"><p class=\"text-sm font-semibold text-foreground\"> </p> <p class=\"text-xs text-muted-foreground\"> </p></div>"), H = e.from_html("<div class=\"mb-12 grid gap-4 md:grid-cols-3\"></div>");
function U(t, n) {
	e.push(n, !1);
	let i = B(a), o = [
		{
			label: "Remote-first",
			value: r(i).workFromAnywhereInThe
		},
		{
			label: r(i).competitivePay,
			value: r(i).topOfMarketCompensation
		},
		{
			label: r(i).openSourceTime,
			value: r(i).x20TimeForOssContributions
		}
	];
	e.init();
	var s = H();
	e.each(s, 5, () => o, (e) => e.label, (t, n) => {
		var r = V(), i = e.child(r), a = e.child(i, !0);
		e.reset(i);
		var o = e.sibling(i, 2), s = e.child(o, !0);
		e.reset(o), e.reset(r), e.template_effect(() => {
			e.set_text(a, e.get(n).label), e.set_text(s, e.get(n).value);
		}), e.append(t, r);
	}), e.reset(s), e.append(t, s), e.pop();
}
export { U as default };
