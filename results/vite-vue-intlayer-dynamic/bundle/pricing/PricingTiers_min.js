import { Fragment as e, computed as t, createElementBlock as n, createElementVNode as r, createTextVNode as i, defineComponent as a, getCurrentInstance as o, h as s, inject as c, isRef as l, markRaw as u, normalizeClass as d, openBlock as f, ref as p, renderList as m, shallowRef as h, toDisplayString as g, toValue as _, unref as v, watch as y } from "vue";
var b = {
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
}, x = ({ value: e, children: t, additionalProps: n = {} }) => {
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
			return x({
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
}, S = "translation", C = "object", w = "array", T = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => T(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => T(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: w,
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
					type: C,
					key: r
				}]
			}, i = T(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, E = {
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
}, D = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, O = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (D(e) && D(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : O(e[r], t[r]));
		return n;
	}
	return e;
}, k = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => O(e, t));
}, A = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, j = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? A : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: S,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return k(o, e, t);
	}
}, M = A, N = A, P = A, F = A, I = (e) => A, L = A, R = (e, t = !0) => [
	j(e ?? E.defaultLocale, t ? E.defaultLocale : void 0),
	M,
	N,
	P,
	I(e ?? E.defaultLocale),
	L,
	F
], z = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), B = (e, t, n = R(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return z(e.content, r, n);
}, V = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => x({
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
}, H = A, U = A, W = A, G = /* @__PURE__ */ new Map(), K = (e, t = !0) => {
	let n = `${e ?? E.defaultLocale}_${t}`;
	if (G.has(n)) return G.get(n);
	let r = [
		j(e ?? E.defaultLocale, t ? E.defaultLocale : void 0),
		M,
		N,
		I(e ?? E.defaultLocale),
		L,
		F,
		V,
		H,
		U,
		W
	];
	return G.set(n, r), r;
}, q = (e, t) => B(e, t, K(t)), J = Symbol("intlayer"), Y = (e, t) => t.reduce((e, t) => e?.[t], e), X = (e) => typeof e == "object" && !!e, Z = (e) => typeof e == "function" || X(e) && ("render" in e || "setup" in e), Q = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, $ = (e) => u(a({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : Z(t) ? s(t) : Array.isArray(t) ? s("span", t) : t;
		};
	}
})), ee = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return $(() => e.value);
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
	let r = o() ? c(J) : void 0, i = l(r?.locale) ? r.locale : p(r?.locale ?? E.defaultLocale), a = t(() => (n === void 0 ? void 0 : _(n)) ?? i.value), s = h({});
	y([() => _(e), () => a.value], ([e, t]) => {
		s.value = q(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let u = (e) => new Proxy({}, {
		get(n, r, i) {
			if (r === "__v_isRef") return !0;
			let a = t(() => Y(s.value, e));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return $(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let o = e.concat(r), c = Y(s.value, o);
			if (c === void 0 || X(c) && !Z(c)) return u(o);
			if (Q(c)) return ee(t(() => Y(s.value, o)));
			let l = t(() => Y(s.value, o));
			return new Proxy(l, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = Y(s.value, e);
			return X(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return u([]);
}, ne = { class: "grid gap-6 md:grid-cols-3" }, re = { class: "text-lg font-semibold text-foreground" }, ie = { class: "my-4" }, ae = { class: "text-3xl font-bold text-foreground" }, oe = { class: "text-sm text-muted-foreground" }, se = { class: "mb-6 flex-1 space-y-2" }, ce = a({
	__name: "PricingTiers",
	setup(a) {
		let { l: o, n: s, m: c, k: l, h: u, j: p, i: h, g: _, c: y, e: x, d: S, b: C, a: w, f: T } = te(b), E = t(() => [
			{
				name: o.value,
				price: s.value,
				period: c.value,
				features: l.value
			},
			{
				name: u.value,
				price: p.value,
				period: h.value,
				features: _.value,
				highlighted: !0
			},
			{
				name: y.value,
				price: x.value,
				period: S.value,
				features: C.value
			}
		]);
		return (t, a) => (f(), n("div", ne, [(f(!0), n(e, null, m(E.value, (t) => (f(), n("div", {
			key: t.name,
			class: d(["flex flex-col rounded-lg border p-6", t.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"])
		}, [
			r("h3", re, g(t.name), 1),
			r("div", ie, [r("span", ae, g(t.price), 1), r("span", oe, g(t.period), 1)]),
			r("ul", se, [(f(!0), n(e, null, m(t.features, (e) => (f(), n("li", {
				key: e,
				class: "flex items-center gap-2 text-sm text-muted-foreground"
			}, [a[0] ||= r("span", { class: "text-primary" }, "✓", -1), i(" " + g(e), 1)]))), 128))]),
			r("button", {
				type: "button",
				class: d(["w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90", t.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"])
			}, g(t.name === v(y) ? v(w) : v(T)), 3)
		], 2))), 128))]));
	}
});
export { ce as default };
