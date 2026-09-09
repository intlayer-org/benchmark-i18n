import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as e from "svelte/internal/client";
import { getContext as t } from "svelte";
import { derived as n, get as r, writable as i } from "svelte/store";
var a = {
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
}, o = {
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
}, s = o?.defaultLocale, c = (() => {
	let { subscribe: e, set: t, update: r } = i({ locale: s });
	return {
		subscribe: e,
		setLocale: (e) => r((t) => ({
			...t,
			locale: e
		})),
		getLocale: () => n({ subscribe: e }, (e) => e.locale),
		reset: () => t({ locale: s })
	};
})(), l = Symbol("intlayer"), u = () => t(l), d = "default", f = /[^A-Za-z0-9._&=-]/g, p = /[^A-Za-z0-9._-]/g, m = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, h = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, m);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, g = (e) => e === void 0 ? d : typeof e == "string" ? h(e, f) : Object.keys(e).sort().map((t) => `${h(t, p)}=${h(String(e[t]), p)}`).join("&"), _ = (e) => Array.isArray(e) ? e.length === 0 ? [d] : e.map(g) : [g(e)], v = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? d : e[0] ?? "default";
}, y = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, ee = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, te = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, b = (e, t) => {
	if (!ee(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? d : v(_(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => y(e, n, t, s)).map((t) => te(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, x = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, S = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? _(n).join(",") : String(n)}`;
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
}, A = 256, j = /* @__PURE__ */ new WeakMap(), M = (e) => typeof e == "object" && !!e, ne = (e, t, n) => `${e}_${t}_${k(n)}`, re = (e, t) => {
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
	V(e ?? o.defaultLocale, t ? o.defaultLocale : void 0),
	H,
	W,
	G,
	J(e ?? o.defaultLocale),
	Y,
	K,
	q
], F = (e, t, n = []) => E(e, {
	...t,
	plugins: n
}), I = (e, t, n) => {
	let { locale: r, selector: i } = x(t), a = ne(r ?? o.defaultLocale, S(i), n), s = re(e, a);
	if (s.hit) return s.content;
	let c = n ?? P(r), l = b(e, i), u = (e) => {
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
var ie = (e) => {
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
	transform: (e, { children: t, ...n }) => ie({
		value: t ?? e,
		component: void 0,
		props: n
	})
}, ae = Z, oe = B, se = B, ce = B, Q = /* @__PURE__ */ new Map(), le = (e, t = !0) => {
	let n = `${e ?? o.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		V(e ?? o.defaultLocale, t ? o.defaultLocale : void 0),
		H,
		U(e ?? o.defaultLocale),
		W,
		J(e ?? o.defaultLocale),
		Y,
		K,
		q,
		Z,
		ae,
		oe,
		se,
		ce
	];
	return Q.set(n, r), r;
}, $ = (e, t) => I(e, t, le(typeof t == "object" && t ? t.locale : t)), ue = (e, t) => {
	let r = u();
	return n([c], ([n]) => {
		let i = r?.locale ?? n.locale;
		return $(e, t ?? i);
	});
}, de = e.from_html("<li class=\"flex items-center gap-2 text-sm text-muted-foreground\"><span class=\"text-primary\">✓</span> </li>"), fe = e.from_html("<div><h3 class=\"text-lg font-semibold text-foreground\"> </h3> <div class=\"my-4\"><span class=\"text-3xl font-bold text-foreground\"> </span> <span class=\"text-sm text-muted-foreground\"> </span></div> <ul class=\"mb-6 flex-1 space-y-2\"></ul> <button type=\"button\"> </button></div>"), pe = e.from_html("<div class=\"grid gap-6 md:grid-cols-3\"></div>");
function me(t, n) {
	e.push(n, !1);
	let i = ue(a), o = [
		{
			name: r(i).starter,
			price: "$0",
			period: "forever",
			features: [
				r(i).x5BenchmarkRunsday,
				"3 libraries",
				r(i).communitySupport,
				r(i).publicResults
			]
		},
		{
			name: r(i).pro,
			price: "$29",
			period: "/month",
			features: [
				r(i).unlimitedRuns,
				r(i).allLibraries,
				r(i).prioritySupport,
				r(i).privateResults,
				r(i).ciIntegration,
				r(i).historicalData
			],
			highlighted: !0
		},
		{
			name: r(i).enterprise,
			price: r(i).custom,
			period: "",
			features: [
				r(i).everythingInPro,
				r(i).onPremiseOption,
				r(i).ssoSaml,
				r(i).dedicatedAccountManager,
				r(i).customSlas,
				r(i).auditLogs,
				r(i).trainingSessions
			]
		}
	];
	e.init();
	var s = pe();
	e.each(s, 5, () => o, (e) => e.name, (t, n) => {
		var r = fe(), i = e.child(r), a = e.only_child(i, !0), o = e.sibling(i, 2), s = e.child(o), c = e.only_child(s, !0), l = e.sibling(s, 2), u = e.only_child(l, !0);
		e.reset(o);
		var d = e.sibling(o, 2);
		e.each(d, 5, () => e.get(n).features, (e) => e, (t, n) => {
			var r = de(), i = e.sibling(e.child(r));
			e.reset(r), e.template_effect(() => e.set_text(i, ` ${e.get(n) ?? ""}`)), e.append(t, r);
		}), e.reset(d);
		var f = e.sibling(d, 2), p = e.only_child(f, !0);
		e.reset(r), e.template_effect(() => {
			e.set_class(r, 1, `flex flex-col rounded-lg border p-6 ${e.get(n).highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`), e.set_text(a, e.get(n).name), e.set_text(c, e.get(n).price), e.set_text(u, e.get(n).period), e.set_class(f, 1, `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${e.get(n).highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`), e.set_text(p, e.get(n).name === "Enterprise" ? "Contact Sales" : "Get Started");
		}), e.append(t, r);
	}), e.reset(s), e.append(t, s), e.pop();
}
export { me as default };
