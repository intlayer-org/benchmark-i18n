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
}, x = {
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
}, S = Symbol("intlayer"), C = /* @__PURE__ */ new WeakMap(), w = 0, T = (e) => {
	if (!e) return "base";
	let t = C.get(e);
	if (t) return t;
	w += 1;
	let n = `p${w}`;
	return C.set(e, n), n;
}, E = 256, D = /* @__PURE__ */ new WeakMap(), O = (e) => typeof e == "object" && !!e, ee = (e, t, n) => `${e}_${t}_${T(n)}`, te = (e, t) => {
	if (!O(e)) return { hit: !1 };
	let n = D.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, k = (e, t, n) => {
	if (!O(e)) return n;
	let r = D.get(e);
	return r || (r = /* @__PURE__ */ new Map(), D.set(e, r)), r.size >= E && r.clear(), r.set(t, n), n;
}, ne = "translation", re = "object", ie = "array", A = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => A(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => A(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: ie,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: re,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = A(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = A(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, j = "default", ae = /[^A-Za-z0-9._&=-]/g, M = /[^A-Za-z0-9._-]/g, oe = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, N = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, oe);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, P = (e) => e === void 0 ? j : typeof e == "string" ? N(e, ae) : Object.keys(e).sort().map((t) => `${N(t, M)}=${N(String(e[t]), M)}`).join("&"), F = (e) => Array.isArray(e) ? e.length === 0 ? [j] : e.map(P) : [P(e)], se = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? j : e[0] ?? "default";
}, ce = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, le = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, ue = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, de = (e, t) => {
	if (!le(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? j : se(F(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => ce(e, n, t, s)).map((t) => ue(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, fe = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, pe = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? F(n).join(",") : String(n)}`;
}).join("|") : "", I = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, L = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (I(e) && I(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : L(e[r], t[r]));
		return n;
	}
	return e;
}, me = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => L(e, t));
}, R = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, z = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? R : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: ne,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return me(o, e, t);
	}
}, B = R, he = (e) => R, V = R, ge = R, H = R, U = R, W = (e) => R, G = R, _e = (e, t = !0) => [
	z(e ?? x.defaultLocale, t ? x.defaultLocale : void 0),
	B,
	V,
	ge,
	W(e ?? x.defaultLocale),
	G,
	H,
	U
], ve = (e, t, n = []) => A(e, {
	...t,
	plugins: n
}), ye = (e, t, n) => {
	let { locale: r, selector: i } = fe(t), a = ee(r ?? x.defaultLocale, pe(i), n), o = te(e, a);
	if (o.hit) return o.content;
	let s = n ?? _e(r), c = de(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return ve(e.content, t, s);
	};
	return c === null ? k(e, a, null) : Array.isArray(c) ? k(e, a, c.map(l)) : k(e, a, l(c));
}, K = ({ value: e, children: t, additionalProps: n = {} }) => {
	let r = p(e), i = typeof t == "function" ? (e) => t(e) : () => t, a = (e) => (r.value, i(e)), o = ((e) => a(e));
	if (Object.assign(o, {
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
			return K({
				value: r.value,
				children: () => i(e),
				additionalProps: n
			});
		},
		__update(e) {
			i = e.render, this.raw = e.raw;
		},
		...n
	}), e != null) {
		let t = Object(e), n = Object.getPrototypeOf(t);
		for (let r of Object.getOwnPropertyNames(n)) {
			if (r === "constructor" || r in o) continue;
			let n = t[r];
			typeof n == "function" && Object.defineProperty(o, r, {
				value: n.bind(e),
				writable: !0,
				configurable: !0
			});
		}
	}
	return u(o);
}, be = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { children: t, ...n }) => {
		let r = (e) => K({
			...n,
			value: e,
			children: e
		}), i = r(t);
		if (typeof t != "function") return i;
		let a = (...e) => {
			let n = t(...e);
			return r(n);
		};
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
}, xe = R, Se = R, Ce = R, q = /* @__PURE__ */ new Map(), we = (e, t = !0) => {
	let n = `${e ?? x.defaultLocale}_${t}`;
	if (q.has(n)) return q.get(n);
	let r = [
		z(e ?? x.defaultLocale, t ? x.defaultLocale : void 0),
		B,
		he(e ?? x.defaultLocale),
		V,
		W(e ?? x.defaultLocale),
		G,
		H,
		U,
		be,
		xe,
		Se,
		Ce
	];
	return q.set(n, r), r;
}, J = (e, t) => ye(e, t, we(typeof t == "object" && t ? t.locale : t)), Y = (e, t) => t.reduce((e, t) => e?.[t], e), X = (e) => typeof e == "object" && !!e, Z = (e) => typeof e == "function" || X(e) && ("render" in e || "setup" in e), Te = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, Q = (e) => u(a({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : Z(t) ? s(t) : Array.isArray(t) ? s("span", t) : t;
		};
	}
})), Ee = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return Q(() => e.value);
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
}), De = (e, n) => {
	let r = o() ? c(S) : void 0, i = l(r?.locale) ? r.locale : p(r?.locale ?? x.defaultLocale), a = t(() => ({
		selector: void 0,
		locale: n === void 0 ? void 0 : _(n)
	})), s = t(() => a.value.locale ?? i.value), u = h({});
	y([
		() => _(e),
		() => s.value,
		() => a.value.selector
	], ([e, t, n]) => {
		u.value = n ? J(e, {
			...n,
			locale: t
		}) : J(e, t);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let d = (e) => new Proxy({}, {
		get(n, r, i) {
			let a = t(() => Y(u.value, e));
			if (typeof r == "symbol" || typeof r == "string" && (r.startsWith("__") || r.startsWith("$"))) return r === "__v_isRef" ? !0 : r === "$raw" ? a : r === Symbol.toPrimitive ? () => String(a.value ?? "") : Reflect.get(n, r, i);
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return Q(() => a.value);
			let o = e.concat(r), s = Y(u.value, o);
			if (s === void 0 || X(s) && !Z(s)) return d(o);
			if (Te(s)) return Ee(t(() => Y(u.value, o)));
			if (typeof s == "function") {
				let t = Y(u.value, e);
				return t != null && !Object.hasOwn(t, r) ? s.bind(t) : (...e) => Y(u.value, o)?.(...e);
			}
			let c = t(() => Y(u.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = Y(u.value, e);
			return X(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return d([]);
}, $ = { class: "grid gap-6 md:grid-cols-3" }, Oe = { class: "text-lg font-semibold text-foreground" }, ke = { class: "my-4" }, Ae = { class: "text-3xl font-bold text-foreground" }, je = { class: "text-sm text-muted-foreground" }, Me = { class: "mb-6 flex-1 space-y-2" }, Ne = a({
	__name: "PricingTiers",
	setup(a) {
		let { l: o, n: s, m: c, k: l, h: u, j: p, i: h, g: _, c: y, e: x, d: S, b: C, a: w, f: T } = De(b), E = t(() => [
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
		return (t, a) => (f(), n("div", $, [(f(!0), n(e, null, m(E.value, (t) => (f(), n("div", {
			key: t.name,
			class: d(["flex flex-col rounded-lg border p-6", t.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"])
		}, [
			r("h3", Oe, g(t.name), 1),
			r("div", ke, [r("span", Ae, g(t.price), 1), r("span", je, g(t.period), 1)]),
			r("ul", Me, [(f(!0), n(e, null, m(t.features, (e) => (f(), n("li", {
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
export { Ne as default };
