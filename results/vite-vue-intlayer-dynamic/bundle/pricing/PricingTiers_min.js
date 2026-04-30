import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, createTextVNode as i, defineComponent as a, getCurrentInstance as o, h as s, inject as c, isRef as l, markRaw as u, normalizeClass as d, openBlock as f, ref as p, renderList as m, shallowRef as h, toDisplayString as g, toValue as _, watch as v } from "vue";
var y = {
	key: "pricing-tiers",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				l: "Starter",
				n: "$0",
				m: "forever",
				k: [
					"5 benchmark runs/day",
					"3 libraries",
					"Community support",
					"Public results"
				],
				h: "Pro",
				j: "$29",
				i: "/month",
				g: [
					"Unlimited runs",
					"All libraries",
					"Priority support",
					"Private results",
					"CI integration",
					"Historical data"
				],
				c: "Enterprise",
				e: "Custom",
				d: "",
				b: [
					"Everything in Pro",
					"On-premise option",
					"SSO & SAML",
					"Dedicated account manager",
					"Custom SLAs",
					"Audit logs",
					"Training sessions"
				],
				a: "Contact Sales",
				f: "Get Started"
			},
			fr: {
				l: "Starter",
				n: "0 €",
				m: "pour toujours",
				k: [
					"5 exécutions de benchmark / jour",
					"3 bibliothèques",
					"Support communautaire",
					"Résultats publics"
				],
				h: "Pro",
				j: "29 €",
				i: "/ mois",
				g: [
					"Exécutions illimitées",
					"Toutes les bibliothèques",
					"Support prioritaire",
					"Résultats privés",
					"Intégration CI",
					"Historique"
				],
				c: "Enterprise",
				e: "Sur mesure",
				d: "",
				b: [
					"Tout le Pro",
					"Option on-premise",
					"SSO et SAML",
					"Account manager dédié",
					"SLA sur mesure",
					"Journaux d'audit",
					"Sessions de formation"
				],
				a: "Contacter les ventes",
				f: "Commencer"
			},
			es: {
				l: "Starter",
				n: "0 $",
				m: "para siempre",
				k: [
					"5 ejecuciones de benchmark al día",
					"3 bibliotecas",
					"Soporte de la comunidad",
					"Resultados públicos"
				],
				h: "Pro",
				j: "29 $",
				i: "/mes",
				g: [
					"Ejecuciones ilimitadas",
					"Todas las bibliotecas",
					"Soporte prioritario",
					"Resultados privados",
					"Integración CI",
					"Datos históricos"
				],
				c: "Enterprise",
				e: "Personalizado",
				d: "",
				b: [
					"Todo lo de Pro",
					"Opción local",
					"SSO y SAML",
					"Gerente de cuenta dedicado",
					"SLAs personalizados",
					"Registros de auditoría",
					"Sesiones de formación"
				],
				a: "Contactar ventas",
				f: "Comenzar"
			},
			de: {
				l: "Starter",
				n: "0 €",
				m: "für immer",
				k: [
					"5 Benchmark-Durchläufe/Tag",
					"3 Bibliotheken",
					"Community-Support",
					"Öffentliche Ergebnisse"
				],
				h: "Pro",
				j: "29 €",
				i: "/Monat",
				g: [
					"Unbegrenzte Durchläufe",
					"Alle Bibliotheken",
					"Prioritäts-Support",
					"Private Ergebnisse",
					"CI-Integration",
					"Historische Daten"
				],
				c: "Enterprise",
				e: "Individuell",
				d: "",
				b: [
					"Alles in Pro",
					"On-Premise-Option",
					"SSO & SAML",
					"Dedizierter Account Manager",
					"Benutzerdefinierte SLAs",
					"Audit-Protokolle",
					"Schulungssitzungen"
				],
				a: "Vertrieb kontaktieren",
				f: "Erste Schritte"
			},
			it: {
				l: "Starter",
				n: "0 €",
				m: "per sempre",
				k: [
					"5 esecuzioni benchmark/giorno",
					"3 librerie",
					"Supporto della comunità",
					"Risultati pubblici"
				],
				h: "Pro",
				j: "29 €",
				i: "/mese",
				g: [
					"Esecuzioni illimitate",
					"Tutte le librerie",
					"Supporto prioritario",
					"Risultati privati",
					"Integrazione CI",
					"Dati storici"
				],
				c: "Enterprise",
				e: "Personalizzato",
				d: "",
				b: [
					"Tutto in Pro",
					"Opzione on-premise",
					"SSO e SAML",
					"Account manager dedicato",
					"SLA personalizzati",
					"Log di audit",
					"Sessioni di formazione"
				],
				a: "Contatta l'ufficio vendite",
				f: "Inizia"
			},
			pt: {
				l: "Starter",
				n: "0 $",
				m: "para sempre",
				k: [
					"5 execuções de benchmark/dia",
					"3 bibliotecas",
					"Suporte da comunidade",
					"Resultados públicos"
				],
				h: "Pro",
				j: "29 $",
				i: "/mês",
				g: [
					"Execuções ilimitadas",
					"Todas as bibliotecas",
					"Suporte prioritário",
					"Resultados privados",
					"Integração CI",
					"Dados históricos"
				],
				c: "Enterprise",
				e: "Personalizado",
				d: "",
				b: [
					"Tudo no Pro",
					"Opção on-premise",
					"SSO e SAML",
					"Gerente de conta dedicado",
					"SLAs personalizados",
					"Logs de auditoria",
					"Sessões de treinamento"
				],
				a: "Contatar Vendas",
				f: "Começar"
			},
			zh: {
				l: "入门版",
				n: "0 美元",
				m: "永久",
				k: [
					"每天 5 次基准测试",
					"3 个库",
					"社区支持",
					"公开结果"
				],
				h: "专业版",
				j: "29 美元",
				i: "/月",
				g: [
					"无限次运行",
					"所有库",
					"优先支持",
					"私人结果",
					"CI 集成",
					"历史数据"
				],
				c: "企业版",
				e: "自定义",
				d: "",
				b: [
					"包含专业版所有功能",
					"本地部署选项",
					"SSO 和 SAML",
					"专属客户经理",
					"定制 SLA",
					"审计日志",
					"培训课程"
				],
				a: "联系销售",
				f: "开始使用"
			},
			ja: {
				l: "スターター",
				n: "0ドル",
				m: "永久に",
				k: [
					"1日5回のベンチマーク実行",
					"3つのライブラリ",
					"コミュニティサポート",
					"公開結果"
				],
				h: "プロ",
				j: "29ドル",
				i: "/月",
				g: [
					"実行回数無制限",
					"すべてのライブラリ",
					"優先サポート",
					"非公開結果",
					"CI統合",
					"履歴データ"
				],
				c: "エンタープライズ",
				e: "カスタム",
				d: "",
				b: [
					"Proのすべての機能",
					"オンプレミスオプション",
					"SSOおよびSAML",
					"専任のアカウントマネージャー",
					"カスタムSLA",
					"監査ログ",
					"トレーニングセッション"
				],
				a: "営業に連絡",
				f: "開始する"
			},
			ko: {
				l: "스타터",
				n: "0달러",
				m: "영구적으로",
				k: [
					"하루 5회 벤치마크 실행",
					"3개 라이브러리",
					"커뮤니티 지원",
					"공개 결과"
				],
				h: "프로",
				j: "29달러",
				i: "/월",
				g: [
					"무제한 실행",
					"모든 라이브러리",
					"우선 지원",
					"비공개 결과",
					"CI 통합",
					"기록 데이터"
				],
				c: "엔터프라이즈",
				e: "맞춤형",
				d: "",
				b: [
					"프로의 모든 기능 포함",
					"온프레미스 옵션",
					"SSO 및 SAML",
					"전담 어카운트 매니저",
					"맞춤형 SLA",
					"감사 로그",
					"교육 세션"
				],
				a: "영업팀 문의",
				f: "시작하기"
			},
			ru: {
				l: "Начальный",
				n: "0 $",
				m: "навсегда",
				k: [
					"5 запусков бенчмарков в день",
					"3 библиотеки",
					"Поддержка сообщества",
					"Публичные результаты"
				],
				h: "Профессиональный",
				j: "29 $",
				i: "/мес",
				g: [
					"Неограниченное количество запусков",
					"Все библиотеки",
					"Приоритетная поддержка",
					"Приватные результаты",
					"Интеграция с CI",
					"Исторические данные"
				],
				c: "Предприятие",
				e: "Индивидуально",
				d: "",
				b: [
					"Все функции Pro",
					"Локальное развертывание",
					"SSO и SAML",
					"Выделенный менеджер",
					"Индивидуальные SLA",
					"Журналы аудита",
					"Сессии по обучению"
				],
				a: "Связаться с отделом продаж",
				f: "Начать"
			}
		}
	}
}, b = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = p(e), i = typeof t == "function" ? (e) => t(e) : () => t, a = (e) => (r.value, i(e)), o = ((e) => a(e));
	return Object.setPrototypeOf(o, String.prototype), Object.assign(o, {
		render: a,
		toString: () => String(r.value ?? ""),
		valueOf: () => r.value,
		[Symbol.toPrimitive]: () => r.value,
		toJSON: () => r.value,
		get raw() {
			return r.value;
		},
		set raw(e) {
			r.value = e;
		},
		get value() {
			return r.value;
		},
		use(e) {
			return b({
				value: r.value,
				children: () => i(e),
				additionalProps: n
			});
		},
		__update(e) {
			i = e.render, this.raw = e.raw;
		},
		...n
	}), u(o);
}, x = "translation", S = "object", C = "array", w = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => w(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => w(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: C,
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
					type: S,
					key: r
				}]
			}, i = w(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, T = {
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
}, E = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, D = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (E(e) && E(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : D(e[r], t[r]));
		return n;
	}
	return e;
}, O = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => D(e, t));
}, k = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, A = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? k : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: x,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return O(o, e, t);
	}
}, j = k, M = k, ee = k, N = k, P = (e) => k, F = k, I = (e, t = !0) => [
	A(e ?? T.defaultLocale, t ? T.defaultLocale : void 0),
	j,
	M,
	ee,
	P(e ?? T.defaultLocale),
	F,
	N
], L = (e, t, n = []) => w(e, {
	...t,
	plugins: n
}), R = (e, t, n = I(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return L(e.content, r, n);
}, z = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => b({
			...n,
			value: e,
			children: e
		}), i = r(t);
		if (typeof t != "function") return i;
		let a = (...e) => r(t(...e));
		Object.setPrototypeOf(a, Object.getPrototypeOf(i));
		for (let e of Object.getOwnPropertyNames(i)) {
			let t = Object.getOwnPropertyDescriptor(i, e);
			t && Object.defineProperty(a, e, t);
		}
		for (let e of Object.getOwnPropertySymbols(i)) {
			let t = Object.getOwnPropertyDescriptor(i, e);
			t && Object.defineProperty(a, e, t);
		}
		return u(a);
	}
}, B = k, V = k, H = k, U = /* @__PURE__ */ new Map(), W = (e, t = !0) => {
	let n = `${e ?? T.defaultLocale}_${t}`;
	if (U.has(n)) return U.get(n);
	let r = [
		A(e ?? T.defaultLocale, t ? T.defaultLocale : void 0),
		j,
		M,
		P(e ?? T.defaultLocale),
		F,
		N,
		z,
		B,
		V,
		H
	];
	return U.set(n, r), r;
}, G = (e, t) => R(e, t, W(t)), K = Symbol("intlayer"), q = (e, t) => t.reduce((e, t) => e?.[t], e), J = (e) => typeof e == "object" && !!e, Y = (e) => typeof e == "function" || J(e) && ("render" in e || "setup" in e), X = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Z = (e) => u(a({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : Y(t) ? s(t) : Array.isArray(t) ? s("span", t) : t;
		};
	}
})), Q = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return Z(() => e.value);
		if (r == null) return n === Symbol.toPrimitive || n === "toString" ? () => "" : void 0;
		let i = r[n];
		return typeof i == "function" ? i.bind(r) : i;
	},
	ownKeys() {
		let t = e.value;
		return typeof t == "object" && t ? Reflect.ownKeys(t) : [];
	},
	getOwnPropertyDescriptor() {
		return {
			enumerable: !0,
			configurable: !0
		};
	}
}), te = (e, n) => {
	let r = o() ? c(K) : void 0, i = l(r?.locale) ? r.locale : p(r?.locale ?? T.defaultLocale), a = t(() => (n === void 0 ? void 0 : _(n)) ?? i.value), s = h({});
	v([() => _(e), () => a.value], ([e, t]) => {
		s.value = G(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let u = (e) => new Proxy({}, {
		get(n, r, i) {
			if (r === "__v_isRef") return !0;
			let a = t(() => q(s.value, e));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return Z(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let o = e.concat(r), c = q(s.value, o);
			if (c === void 0 || J(c) && !Y(c)) return u(o);
			if (X(c)) return Q(t(() => q(s.value, o)));
			let l = t(() => q(s.value, o));
			return new Proxy(l, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = q(s.value, e);
			return J(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return u([]);
}, ne = a({
	__name: "PricingTiers",
	setup(e, { expose: n }) {
		n();
		let { l: r, n: i, m: a, k: o, h: s, j: c, i: l, g: u, c: d, e: f, d: p, b: m, a: h, f: g } = te(y), _ = {
			starterName: r,
			starterPrice: i,
			starterPeriod: a,
			starterFeatures: o,
			proName: s,
			proPrice: c,
			proPeriod: l,
			proFeatures: u,
			enterpriseName: d,
			enterprisePrice: f,
			enterprisePeriod: p,
			enterpriseFeatures: m,
			contactSales: h,
			getStarted: g,
			tiers: t(() => [
				{
					name: r.value,
					price: i.value,
					period: a.value,
					features: o.value
				},
				{
					name: s.value,
					price: c.value,
					period: l.value,
					features: u.value,
					highlighted: !0
				},
				{
					name: d.value,
					price: f.value,
					period: p.value,
					features: m.value
				}
			])
		};
		return Object.defineProperty(_, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), _;
	}
}), re = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, ie = { class: "grid gap-6 md:grid-cols-3" }, ae = { class: "text-lg font-semibold text-foreground" }, $ = { class: "my-4" }, oe = { class: "text-3xl font-bold text-foreground" }, se = { class: "text-sm text-muted-foreground" }, ce = { class: "mb-6 flex-1 space-y-2" };
function le(t, a, o, s, c, l) {
	return f(), n("div", ie, [(f(!0), n(e, null, m(s.tiers, (t) => (f(), n("div", {
		key: t.name,
		class: d(["flex flex-col rounded-lg border p-6", t.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"])
	}, [
		r("h3", ae, g(t.name), 1),
		r("div", $, [r("span", oe, g(t.price), 1), r("span", se, g(t.period), 1)]),
		r("ul", ce, [(f(!0), n(e, null, m(t.features, (e) => (f(), n("li", {
			key: e,
			class: "flex items-center gap-2 text-sm text-muted-foreground"
		}, [a[0] ||= r("span", { class: "text-primary" }, "✓", -1), i(" " + g(e), 1)]))), 128))]),
		r("button", {
			type: "button",
			class: d(["w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90", t.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"])
		}, g(t.name === s.enterpriseName ? s.contactSales : s.getStarted), 3)
	], 2))), 128))]);
}
var ue = re(ne, [["render", le], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-dynamic/vue-intlayer-app/src/components/pages/pricing/PricingTiers.vue"]]);
export { ue as default };
