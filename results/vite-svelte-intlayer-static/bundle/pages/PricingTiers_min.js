import "svelte/internal/disclose-version";
import * as e from "svelte/internal/client";
import { getContext as t } from "svelte";
import { derived as n, writable as r } from "svelte/store";
import "svelte/internal/flags/legacy";
var i = {
	key: "pricing-tiers",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				trainingSessions: "Training sessions",
				auditLogs: "Audit logs",
				customSlas: "Custom SLAs",
				dedicatedAccountManager: "Dedicated account manager",
				ssoSaml: "SSO & SAML",
				onPremiseOption: "On-premise option",
				everythingInPro: "Everything in Pro",
				custom: "Custom",
				enterprise: "Enterprise",
				historicalData: "Historical data",
				ciIntegration: "CI integration",
				privateResults: "Private results",
				prioritySupport: "Priority support",
				allLibraries: "All libraries",
				unlimitedRuns: "Unlimited runs",
				pro: "Pro",
				publicResults: "Public results",
				communitySupport: "Community support",
				x5BenchmarkRunsday: "5 benchmark runs/day",
				starter: "Starter"
			},
			fr: {
				trainingSessions: "Sessions de formation",
				auditLogs: "Journaux d'audit",
				customSlas: "SLA personnalisés",
				dedicatedAccountManager: "Gestionnaire de compte dédié",
				ssoSaml: "SSO et SAML",
				onPremiseOption: "Option sur site",
				everythingInPro: "Tout ce qui est dans Pro",
				custom: "Personnalisé",
				enterprise: "Entreprise",
				historicalData: "Données historiques",
				ciIntegration: "Intégration CI",
				privateResults: "Résultats privés",
				prioritySupport: "Support prioritaire",
				allLibraries: "Toutes les bibliothèques",
				unlimitedRuns: "Lancements illimités",
				pro: "Pro",
				publicResults: "Résultats publics",
				communitySupport: "Support de la communauté",
				x5BenchmarkRunsday: "5 lancements de benchmark par jour",
				starter: "Starter"
			},
			es: {
				trainingSessions: "Sesiones de formación",
				auditLogs: "Registros de auditoría",
				customSlas: "SLAs personalizados",
				dedicatedAccountManager: "Gerente de cuenta dedicado",
				ssoSaml: "SSO y SAML",
				onPremiseOption: "Opción local",
				everythingInPro: "Todo lo de Pro",
				custom: "Personalizado",
				enterprise: "Empresa",
				historicalData: "Datos históricos",
				ciIntegration: "Integración de CI",
				privateResults: "Resultados privados",
				prioritySupport: "Soporte prioritario",
				allLibraries: "Todas las bibliotecas",
				unlimitedRuns: "Ejecuciones ilimitadas",
				pro: "Pro",
				publicResults: "Resultados públicos",
				communitySupport: "Soporte de la comunidad",
				x5BenchmarkRunsday: "5 ejecuciones de benchmark al día",
				starter: "Starter"
			},
			de: {
				trainingSessions: "Schulungen",
				auditLogs: "Audit-Protokolle",
				customSlas: "Individuelle SLAs",
				dedicatedAccountManager: "Dedizierter Account-Manager",
				ssoSaml: "SSO und SAML",
				onPremiseOption: "On-Premise-Option",
				everythingInPro: "Alles in Pro",
				custom: "Individuell",
				enterprise: "Enterprise",
				historicalData: "Historische Daten",
				ciIntegration: "CI-Integration",
				privateResults: "Private Ergebnisse",
				prioritySupport: "Vorrangiger Support",
				allLibraries: "Alle Bibliotheken",
				unlimitedRuns: "Unbegrenzte Läufe",
				pro: "Pro",
				publicResults: "Öffentliche Ergebnisse",
				communitySupport: "Community-Support",
				x5BenchmarkRunsday: "5 Benchmark-Läufe/Tag",
				starter: "Starter"
			},
			it: {
				trainingSessions: "Sessioni di formazione",
				auditLogs: "Registri di audit",
				customSlas: "SLA personalizzati",
				dedicatedAccountManager: "Account manager dedicato",
				ssoSaml: "SSO e SAML",
				onPremiseOption: "Opzione on-premise",
				everythingInPro: "Tutto in Pro",
				custom: "Personalizzato",
				enterprise: "Enterprise",
				historicalData: "Dati storici",
				ciIntegration: "Integrazione CI",
				privateResults: "Risultati privati",
				prioritySupport: "Supporto prioritario",
				allLibraries: "Tutte le librerie",
				unlimitedRuns: "Esecuzioni illimitate",
				pro: "Pro",
				publicResults: "Risultati pubblici",
				communitySupport: "Supporto della community",
				x5BenchmarkRunsday: "5 esecuzioni di benchmark al giorno",
				starter: "Starter"
			},
			pt: {
				trainingSessions: "Sessões de treinamento",
				auditLogs: "Logs de auditoria",
				customSlas: "SLAs personalizados",
				dedicatedAccountManager: "Gerente de conta dedicado",
				ssoSaml: "SSO e SAML",
				onPremiseOption: "Opção on-premise",
				everythingInPro: "Tudo no Pro",
				custom: "Personalizado",
				enterprise: "Enterprise",
				historicalData: "Dados históricos",
				ciIntegration: "Integração de CI",
				privateResults: "Resultados privados",
				prioritySupport: "Suporte prioritário",
				allLibraries: "Todas as bibliotecas",
				unlimitedRuns: "Execuções ilimitadas",
				pro: "Pro",
				publicResults: "Resultados públicos",
				communitySupport: "Suporte da comunidade",
				x5BenchmarkRunsday: "5 execuções de benchmark por dia",
				starter: "Starter"
			},
			zh: {
				trainingSessions: "培训课程",
				auditLogs: "审计日志",
				customSlas: "自定义 SLA",
				dedicatedAccountManager: "专属客户经理",
				ssoSaml: "SSO 和 SAML",
				onPremiseOption: "本地部署选项",
				everythingInPro: "Pro 计划中的所有内容",
				custom: "自定义",
				enterprise: "企业级",
				historicalData: "历史数据",
				ciIntegration: "CI 集成",
				privateResults: "私有结果",
				prioritySupport: "优先支持",
				allLibraries: "所有库",
				unlimitedRuns: "无限次运行",
				pro: "Pro",
				publicResults: "公开结果",
				communitySupport: "社区支持",
				x5BenchmarkRunsday: "每天 5 次基准测试运行",
				starter: "Starter"
			},
			ja: {
				trainingSessions: "トレーニングセッション",
				auditLogs: "監査ログ",
				customSlas: "カスタム SLA",
				dedicatedAccountManager: "専任のアカウントマネージャー",
				ssoSaml: "SSO および SAML",
				onPremiseOption: "オンプレミスオプション",
				everythingInPro: "Pro プランの全機能",
				custom: "カスタム",
				enterprise: "エンタープライズ",
				historicalData: "履歴データ",
				ciIntegration: "CI 統合",
				privateResults: "プライベートな結果",
				prioritySupport: "優先サポート",
				allLibraries: "すべてのライブラリ",
				unlimitedRuns: "無制限の実行",
				pro: "Pro",
				publicResults: "公開された結果",
				communitySupport: "コミュニティサポート",
				x5BenchmarkRunsday: "1 日 5 回のベンチマーク実行",
				starter: "スターター"
			},
			ko: {
				trainingSessions: "교육 세션",
				auditLogs: "감사 로그",
				customSlas: "맞춤형 SLA",
				dedicatedAccountManager: "전담 계정 관리자",
				ssoSaml: "SSO 및 SAML",
				onPremiseOption: "온프레미스 옵션",
				everythingInPro: "Pro의 모든 기능",
				custom: "맞춤형",
				enterprise: "엔터프라이즈",
				historicalData: "기록 데이터",
				ciIntegration: "CI 통합",
				privateResults: "비공개 결과",
				prioritySupport: "우선 지원",
				allLibraries: "모든 라이브러리",
				unlimitedRuns: "무제한 실행",
				pro: "Pro",
				publicResults: "공개 결과",
				communitySupport: "커뮤니티 지원",
				x5BenchmarkRunsday: "일 5회 벤치마크 실행",
				starter: "스타터"
			},
			ru: {
				trainingSessions: "Тренинги",
				auditLogs: "Журналы аудита",
				customSlas: "Индивидуальные SLA",
				dedicatedAccountManager: "Персональный менеджер",
				ssoSaml: "SSO и SAML",
				onPremiseOption: "Локальная установка",
				everythingInPro: "Все функции Pro",
				custom: "Индивидуальный",
				enterprise: "Корпоративный",
				historicalData: "Исторические данные",
				ciIntegration: "Интеграция с CI",
				privateResults: "Приватные результаты",
				prioritySupport: "Приоритетная поддержка",
				allLibraries: "Все библиотеки",
				unlimitedRuns: "Безлимитные запуски",
				pro: "Pro",
				publicResults: "Публичные результаты",
				communitySupport: "Поддержка сообщества",
				x5BenchmarkRunsday: "5 запусков бенчмарков в день",
				starter: "Стартовый"
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
	F(e ?? a.defaultLocale, t ? a.defaultLocale : void 0),
	I,
	L(e ?? a.defaultLocale),
	R,
	z,
	H(e ?? a.defaultLocale),
	U,
	B,
	V
].filter((e) => e !== P), O = (e, t, n = []) => _(e, {
	...t,
	plugins: n
}), k = /* @__PURE__ */ new WeakSet(), A = (e, t, n) => {
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
}, j = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, M = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !j(e) || !j(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? M(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, N = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => M(e, t));
}, P = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, F = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? P : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = N(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: p,
				key: e
			}]
		});
	}
}, I = P, L = (e) => P, R = P, z = P, B = P, V = P, H = (e) => P, U = P;
function W(t, n) {
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
var G = (e) => {
	let t = !!W.prototype?.$destroy, n;
	return n = t ? function(t) {
		return new W({
			...t,
			props: {
				...t.props,
				Renderer: e.component,
				rendererProps: e.props,
				value: e.value
			}
		});
	} : (t) => W(t, {
		Renderer: e.component,
		rendererProps: e.props,
		value: e.value
	}), Object.defineProperty(n, "value", {
		value: e.value,
		writable: !0,
		configurable: !0
	}), e.additionalProps && Object.assign(n, e.additionalProps), Object.setPrototypeOf(n, f(e.value, Function.prototype)), n;
}, K = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => G({
		value: t.children ?? e,
		component: void 0,
		props: {}
	})
}, q = K, J = P, Y = P, X = P, Z = /* @__PURE__ */ new Map(), Q = (e, t = !0) => {
	let n = `${e ?? a.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		K,
		F(e ?? a.defaultLocale, t ? a.defaultLocale : void 0),
		I,
		L(e ?? a.defaultLocale),
		R,
		H(e ?? a.defaultLocale),
		U,
		B,
		V,
		q,
		J,
		Y,
		X
	].filter((e) => e !== P);
	return Z.set(n, r), r;
}, $ = (e, t) => A(e, t, Q(typeof t == "object" && t ? t.locale : t)), ee = (e, t) => {
	let r = l();
	return n([s], ([n]) => {
		let i = r?.locale ?? n.locale;
		return $(e, t ?? i);
	});
}, te = e.from_html("<li class=\"flex items-center gap-2 text-sm text-muted-foreground\"><span class=\"text-primary\">✓</span> </li>"), ne = e.from_html("<div><h3 class=\"text-lg font-semibold text-foreground\"> </h3> <div class=\"my-4\"><span class=\"text-3xl font-bold text-foreground\"> </span> <span class=\"text-sm text-muted-foreground\"> </span></div> <ul class=\"mb-6 flex-1 space-y-2\"></ul> <button type=\"button\"> </button></div>"), re = e.from_html("<div class=\"grid gap-6 md:grid-cols-3\"></div>");
function ie(t, n) {
	e.push(n, !0);
	let r = () => e.store_get(s, "$content", a), [a, o] = e.setup_stores(), s = ee(i), c = e.derived(() => [
		{
			name: r().starter,
			price: "$0",
			period: "forever",
			features: [
				r().x5BenchmarkRunsday,
				"3 libraries",
				r().communitySupport,
				r().publicResults
			]
		},
		{
			name: r().pro,
			price: "$29",
			period: "/month",
			features: [
				r().unlimitedRuns,
				r().allLibraries,
				r().prioritySupport,
				r().privateResults,
				r().ciIntegration,
				r().historicalData
			],
			highlighted: !0
		},
		{
			name: r().enterprise,
			price: r().custom,
			period: "",
			features: [
				r().everythingInPro,
				r().onPremiseOption,
				r().ssoSaml,
				r().dedicatedAccountManager,
				r().customSlas,
				r().auditLogs,
				r().trainingSessions
			]
		}
	]);
	var l = re();
	e.each(l, 21, () => e.get(c), e.index, (t, n) => {
		var r = ne(), i = e.child(r), a = e.only_child(i, !0), o = e.sibling(i, 2), s = e.child(o), c = e.only_child(s, !0), l = e.sibling(s, 2), u = e.only_child(l, !0);
		e.reset(o);
		var d = e.sibling(o, 2);
		e.each(d, 21, () => e.get(n).features, e.index, (t, n) => {
			var r = te(), i = e.sibling(e.child(r));
			e.reset(r), e.template_effect(() => e.set_text(i, ` ${e.get(n) ?? ""}`)), e.append(t, r);
		}), e.reset(d);
		var f = e.sibling(d, 2), p = e.only_child(f, !0);
		e.reset(r), e.template_effect(() => {
			e.set_class(r, 1, `flex flex-col rounded-lg border p-6 ${e.get(n).highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`), e.set_text(a, e.get(n).name), e.set_text(c, e.get(n).price), e.set_text(u, e.get(n).period), e.set_class(f, 1, `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${e.get(n).highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`), e.set_text(p, e.get(n).name === "Enterprise" ? "Contact Sales" : "Get Started");
		}), e.append(t, r);
	}), e.reset(l), e.append(t, l), e.pop(), o();
}
export { ie as default };
