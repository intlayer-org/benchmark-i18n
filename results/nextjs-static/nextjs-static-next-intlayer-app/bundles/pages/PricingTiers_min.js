import { Fragment as e, createContext as t, createElement as n, isValidElement as r, lazy as i, useContext as a, useMemo as o } from "react";
import { Fragment as s, jsx as c, jsxs as l } from "react/jsx-runtime";
var u = {
	key: "pricing-tiers",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				y: "Starter",
				r: "$0",
				l: "forever",
				c: {
					fields: [],
					nodeType: "insertion",
					insertion: "{runs} benchmark runs/day"
				},
				o: {
					fields: [],
					nodeType: "insertion",
					insertion: "{libs} libraries"
				},
				e: "Community support",
				w: "Public results",
				v: "Pro",
				s: "$29",
				p: "/month",
				aa: "Unlimited runs",
				a: "All libraries",
				t: "Priority support",
				u: "Private results",
				d: "CI integration",
				n: "Historical data",
				j: "Enterprise",
				g: "Custom",
				k: "Everything in Pro",
				q: "On-premise option",
				x: "SSO & SAML",
				i: "Dedicated account manager",
				h: "Custom SLAs",
				b: "Audit logs",
				z: "Training sessions",
				f: "Contact Sales",
				m: "Get Started"
			},
			fr: {
				y: "Starter",
				r: "0 $",
				l: "pour toujours",
				c: {
					fields: [],
					nodeType: "insertion",
					insertion: "{runs} lancements de benchmark/jour"
				},
				o: {
					fields: [],
					nodeType: "insertion",
					insertion: "{libs} bibliothèques"
				},
				e: "Support de la communauté",
				w: "Résultats publics",
				v: "Pro",
				s: "29 $",
				p: "/mois",
				aa: "Lancements illimités",
				a: "Toutes les bibliothèques",
				t: "Support prioritaire",
				u: "Résultats privés",
				d: "Intégration CI",
				n: "Données historiques",
				j: "Entreprise",
				g: "Custom",
				k: "Tout dans Pro",
				q: "Option sur site",
				x: "SSO & SAML",
				i: "Gestionnaire de compte dédié",
				h: "SLA personnalisés",
				b: "Journaux d'audit",
				z: "Sessions de formation",
				f: "Contacter les ventes",
				m: "Commencer"
			},
			es: {
				y: "Starter",
				r: "0 $",
				l: "para siempre",
				c: {
					fields: [],
					nodeType: "insertion",
					insertion: "{runs} ejecuciones de benchmark/día"
				},
				o: {
					fields: [],
					nodeType: "insertion",
					insertion: "{libs} bibliotecas"
				},
				e: "Soporte de la comunidad",
				w: "Resultados públicos",
				v: "Pro",
				s: "29 $",
				p: "/mes",
				aa: "Ejecuciones ilimitadas",
				a: "Todas las bibliotecas",
				t: "Soporte prioritario",
				u: "Résultats privés",
				d: "Integración de CI",
				n: "Datos históricos",
				j: "Personalizado",
				g: "Custom",
				k: "Todo en Pro",
				q: "Opción local",
				x: "SSO y SAML",
				i: "Gerente de cuenta dedicado",
				h: "SLA personalizados",
				b: "Registros de auditoría",
				z: "Sesiones de formación",
				f: "Contactar a Ventas",
				m: "Empezar"
			},
			de: {
				y: "Starter",
				r: "0 $",
				l: "für immer",
				c: {
					fields: [],
					nodeType: "insertion",
					insertion: "{runs} Benchmark-Läufe/Tag"
				},
				o: {
					fields: [],
					nodeType: "insertion",
					insertion: "{libs} Bibliotheken"
				},
				e: "Community-Support",
				w: "Öffentliche Ergebnisse",
				v: "Pro",
				s: "29 $",
				p: "/Monat",
				aa: "Unbegrenzte Läufe",
				a: "Alle Bibliotheken",
				t: "Prioritäts-Support",
				u: "Private Ergebnisse",
				d: "CI-Integration",
				n: "Historische Daten",
				j: "Enterprise",
				g: "Benutzerdefiniert",
				k: "Alles in Pro",
				q: "On-Premise-Option",
				x: "SSO & SAML",
				i: "Dedizierter Account-Manager",
				h: "Benutzerdefinierte SLAs",
				b: "Audit-Logs",
				z: "Schulungssitzungen",
				f: "Vertrieb kontaktieren",
				m: "Erste Schritte"
			},
			it: {
				y: "Starter",
				r: "0 $",
				l: "per sempre",
				c: {
					fields: [],
					nodeType: "insertion",
					insertion: "{runs} esecuzioni di benchmark/giorno"
				},
				o: {
					fields: [],
					nodeType: "insertion",
					insertion: "{libs} librerie"
				},
				e: "Supporto della comunità",
				w: "Risultati pubblici",
				v: "Pro",
				s: "29 $",
				p: "/mese",
				aa: "Esecuzioni illimitate",
				a: "Tutte le librerie",
				t: "Supporto prioritario",
				u: "Risultati privati",
				d: "Integrazione CI",
				n: "Dati storici",
				j: "Enterprise",
				g: "Custom",
				k: "Tutto in Pro",
				q: "Opzione on-premise",
				x: "SSO e SAML",
				i: "Account manager dedicato",
				h: "SLA personalizzati",
				b: "Log di audit",
				z: "Sessioni di formazione",
				f: "Contatta le vendite",
				m: "Inizia ora"
			},
			pt: {
				y: "Iniciante",
				r: "0 $",
				l: "para sempre",
				c: {
					fields: [],
					nodeType: "insertion",
					insertion: "{runs} execuções de benchmark/dia"
				},
				o: {
					fields: [],
					nodeType: "insertion",
					insertion: "{libs} bibliotecas"
				},
				e: "Suporte da comunidade",
				w: "Resultados públicos",
				v: "Pro",
				s: "29 $",
				p: "/mês",
				aa: "Execuções ilimitadas",
				a: "Todas as bibliotecas",
				t: "Suporte prioritário",
				u: "Resultados privados",
				d: "Integração de CI",
				n: "Dados históricos",
				j: "Personalizado",
				g: "Personalizado",
				k: "Tudo no Pro",
				q: "Opção on-premise",
				x: "SSO e SAML",
				i: "Gerente de conta dedicado",
				h: "SLAs personalizados",
				b: "Logs de auditoria",
				z: "Sessões de treinamento",
				f: "Contatar Vendas",
				m: "Começar"
			},
			zh: {
				y: "Starter",
				r: "0 $",
				l: "永久",
				c: {
					fields: [],
					nodeType: "insertion",
					insertion: "每天 {runs} 次基准测试运行"
				},
				o: {
					fields: [],
					nodeType: "insertion",
					insertion: "{libs} 个库"
				},
				e: "社区支持",
				w: "公共结果",
				v: "Pro",
				s: "29 $",
				p: "/月",
				aa: "无限运行",
				a: "所有库",
				t: "优先支持",
				u: "私人结果",
				d: "CI 集成",
				n: "历史数据",
				j: "企业版",
				g: "定制价格",
				k: "Pro 计划中的一切",
				q: "本地部署选项",
				x: "SSO & SAML",
				i: "专属大客户经理",
				h: "定制 SLA",
				b: "审核日志",
				z: "培训会议",
				f: "联系销售人员",
				m: "开始使用"
			},
			ja: {
				y: "スターター",
				r: "0 $",
				l: "永久",
				c: {
					fields: [],
					nodeType: "insertion",
					insertion: "毎日 {runs} 回のベンチマーク実行"
				},
				o: {
					fields: [],
					nodeType: "insertion",
					insertion: "{libs} 個のライブラリ"
				},
				e: "コミュニティサポート",
				w: "公開結果",
				v: "プロ",
				s: "29 $",
				p: "/月",
				aa: "無限の実行",
				a: "すべてのライブラリ",
				t: "優先サポート",
				u: "プライベート結果",
				d: "CI 統合",
				n: "履歴データ",
				j: "エンタープライズ",
				g: "カスタム価格",
				k: "Pro のすべて",
				q: "オンプレミスオプション",
				x: "SSO & SAML",
				i: "専任のアカウントマネージャー",
				h: "カスタム SLA",
				b: "監査ログ",
				z: "トレーニングセッション",
				f: "営業に問い合わせる",
				m: "使ってみる"
			},
			ko: {
				y: "스타터",
				r: "0 $",
				l: "영구적",
				c: {
					fields: [],
					nodeType: "insertion",
					insertion: "하루 {runs} 회의 벤치마크 실행"
				},
				o: {
					fields: [],
					nodeType: "insertion",
					insertion: "{libs} 개의 라이브러리"
				},
				e: "커뮤니티 지원",
				w: "공개 결과",
				v: "프로",
				s: "29 $",
				p: "/월",
				aa: "무제한 실행",
				a: "모든 라이브러리",
				t: "우선 지원",
				u: "비공개 결과",
				d: "CI 통합",
				n: "기록 데이터",
				j: "엔터프라이즈",
				g: "맞춤형 가격",
				k: "프로의 모든 기능",
				q: "온프레미스 옵션",
				x: "SSO & SAML",
				i: "전담 어카운트 매니저",
				h: "사용자 지정 SLA",
				b: "감사 로그",
				z: "교육 세션",
				f: "영업 문의",
				m: "시작하기"
			},
			ru: {
				y: "Starter",
				r: "0 $",
				l: "навсегда",
				c: {
					fields: [],
					nodeType: "insertion",
					insertion: "{runs} запусков бенчмарка в день"
				},
				o: {
					fields: [],
					nodeType: "insertion",
					insertion: "{libs} библиотек"
				},
				e: "Сообщество поддержки",
				w: "Публичные результаты",
				v: "Pro",
				s: "29 $",
				p: "/месяц",
				aa: "Неограниченное количество запусков",
				a: "Все библиотеки",
				t: "Приоритетная поддержка",
				u: "Приватные результаты",
				d: "Интеграция с CI",
				n: "Исторические данные",
				j: "Корпоративный",
				g: "Индивидуальная цена",
				k: "Все возможности Pro",
				q: "Локальное развертывание",
				x: "SSO и SAML",
				i: "Выделенный менеджер",
				h: "Индивидуальные SLA",
				b: "Журналы аудита",
				z: "Сессии обучения",
				f: "Связаться с отделом продаж",
				m: "Начать"
			}
		}
	}
}, d = {
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
	defaultLocale: "en"
}, f = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, p = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : /* @__PURE__ */ c(s, { children: e });
	return new Proxy(i, { get(e, r, i) {
		return r === "value" ? t : n && Object.keys(n).includes(r) ? n[r] : Reflect.get(e, r, i);
	} });
}, m = (e) => {
	if (typeof e != "object" || !e) return e;
	let { type: t, props: r } = ((e) => {
		let t = e.props?.children;
		if (Array.isArray(t)) {
			let r = t.map((e, t) => {
				let r = m(e);
				if (typeof r == "object" && r && "type" in r) {
					let e = r;
					return n(e.type, {
						...e.props,
						key: t
					}, ...Array.isArray(e.props?.children) ? e.props.children : e.props?.children === void 0 ? [] : [e.props.children]);
				}
				return r;
			});
			return {
				...e,
				props: {
					...e.props,
					children: r
				}
			};
		} else if (t != null) {
			let n = m(t);
			return {
				...e,
				props: {
					...e.props,
					children: [n]
				}
			};
		}
		return {
			...e,
			props: {
				...e.props,
				children: []
			}
		};
	})(e);
	return n(t ?? "span", r, ...r.children);
}, h = "translation", g = "insertion", _ = "object", v = "array", y = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => y(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => y(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: v,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: _,
				key: r
			}]
		};
		n[r] = y(e[r], i);
	}
	return n;
}, b = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), x = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, S = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (x(e) && x(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : S(e[r], t[r]));
		return n;
	}
	return e;
}, C = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => S(e, t));
}, w = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", T = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", E = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, D = (e, t) => w ? E : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = { ...n.translation ?? {} };
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: h,
					key: e
				}]
			};
			a[e] = i(a[e], t);
		}
		return C(a, e, t);
	}
}, O = E, k = E, A = T ? E : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: g }], i = e[g], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string",
			transform: (e, n, r) => {
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = b(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
	}
}, j = E, M = (e) => E, N = E, P = (e, t = !0) => [
	D(e ?? d.defaultLocale, t ? d.defaultLocale : void 0),
	O,
	k,
	A,
	M(e ?? d.defaultLocale),
	N,
	j
].filter(Boolean), F = (e, t, n = []) => y(e, {
	...t,
	plugins: n
}), I = (e, t, n = P(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return F(e.content, r, n);
}, L = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", R = /\{\{\s*(.*?)\s*\}\}/g, z = (e, t = {}) => {
	if (!Object.values(t).some(L)) return {
		isSimple: !0,
		parts: e.replace(R, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(R), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, B = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false", V = process.env.INTLAYER_NODE_TYPE_REACT_NODE === "false", H = process.env.INTLAYER_NODE_TYPE_INSERTION === "false";
i(() => import("./MarkdownRendererPlugin-BJew_ddL.js").then((e) => ({ default: e.MarkdownRendererPlugin }))), i(() => import("./HTMLRendererPlugin-ytPPxvV0.js").then((e) => ({ default: e.HTMLRendererPlugin })));
var U = B ? E : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => p({
		...n,
		value: n.children,
		children: n.children
	})
}, W = V ? E : {
	id: "react-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 && e.key !== void 0,
	transform: (e, { plugins: t, ...n }) => p({
		...n,
		value: "[[react-element]]",
		children: m(e)
	})
}, G = (t, r) => {
	let i = z(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, K = H ? E : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: g }], i = e[g], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string",
			transform: (e, n, r) => {
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = G(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		}, o = n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
		return typeof i == "object" && i && "nodeType" in i && ["enumeration", "condition"].includes(i.nodeType) ? (e) => (t) => {
			let n = o(t);
			return typeof n == "function" ? n(e) : n;
		} : o;
	}
}, q = E, J = E, Y = (e, t = !0) => [
	D(e ?? d.defaultLocale, t ? d.defaultLocale : void 0),
	O,
	k,
	M(e ?? d.defaultLocale),
	N,
	j,
	U,
	W,
	K,
	q,
	J
].filter(Boolean), X = (e, t) => I(e, t, Y(t)), Z = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
//#endregion
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/client/IntlayerProvider.mjs
var Q = t({
	locale: ((e) => {
		let { locales: t } = d;
		if (e?.isCookieEnabled === !1) return;
		let n = (e) => !!e && t.includes(e);
		if (!Z) for (let t = 0; t < (f.storage.cookies ?? []).length; t++) try {
			let r = e?.getCookie?.(f.storage.cookies[t].name);
			if (n(r)) return r;
		} catch {}
	})({
		getCookie: (e) => document.cookie.split(";").find((t) => t.trim().startsWith(`${e}=`))?.split("=")[1],
		getLocaleStorage: (e) => localStorage.getItem(e),
		getSessionStorage: (e) => sessionStorage.getItem(e),
		isCookieEnabled: !0,
		setCookieStore: (e, t, n) => cookieStore.set({
			name: e,
			value: t,
			path: n.path,
			domain: n.domain,
			expires: n.expires,
			sameSite: n.sameSite
		}),
		setCookieString: (e, t) => {
			document.cookie = t;
		},
		setSessionStorage: (e, t) => sessionStorage.setItem(e, t),
		setLocaleStorage: (e, t) => localStorage.setItem(e, t)
	}) ?? d?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), $ = (e, t) => {
	let { locale: n } = a(Q) ?? {};
	return o(() => X(e, t ?? n), [
		e.key,
		n,
		t
	]);
};
//#endregion
//#region src/components/pages/pricing/PricingTiers.tsx
function ee() {
	let e = $(u);
	return /* @__PURE__ */ c("div", {
		className: "grid gap-6 md:grid-cols-3",
		children: [
			{
				name: e.y,
				price: e.r,
				period: e.l,
				features: [
					e.c({ runs: "5" }),
					e.o({ libs: "3" }),
					e.e,
					e.w
				]
			},
			{
				name: e.v,
				price: e.s,
				period: e.p,
				features: [
					e.aa,
					e.a,
					e.t,
					e.u,
					e.d,
					e.n
				],
				highlighted: !0
			},
			{
				name: e.j,
				price: e.g,
				period: "",
				features: [
					e.k,
					e.q,
					e.x,
					e.i,
					e.h,
					e.b,
					e.z
				]
			}
		].map((t) => /* @__PURE__ */ l("div", {
			className: `flex flex-col rounded-lg border p-6 ${t.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`,
			children: [
				/* @__PURE__ */ c("h3", {
					className: "text-lg font-semibold text-foreground",
					children: t.name
				}),
				/* @__PURE__ */ l("div", {
					className: "my-4",
					children: [/* @__PURE__ */ c("span", {
						className: "text-3xl font-bold text-foreground",
						children: t.price
					}), /* @__PURE__ */ c("span", {
						className: "text-sm text-muted-foreground",
						children: t.period
					})]
				}),
				/* @__PURE__ */ c("ul", {
					className: "mb-6 flex-1 space-y-2",
					children: t.features.map((e, t) => /* @__PURE__ */ l("li", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ c("span", {
								className: "text-primary",
								children: "✓"
							}),
							" ",
							e
						]
					}, t))
				}),
				/* @__PURE__ */ c("button", {
					type: "button",
					className: `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${t.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`,
					children: t.name === e.j ? e.f : e.m
				})
			]
		}, t.name.value))
	});
}
//#endregion
export { ee as default };
import { Fragment as e, createContext as t, createElement as n, useContext as r } from "react";
import { jsx as i } from "react/jsx-runtime";
//#region ../../node_modules/.bun/@intlayer+core@8.7.1-canary-0+b1ab299f0a400331/node_modules/@intlayer/core/dist/esm/interpreter/getHTML.mjs
var a = (e) => {
	let t = {}, n = /([a-zA-Z0-9-]+)="([^"]*)"/g, r = n.exec(e);
	for (; r !== null;) t[r[1]] = r[2], r = n.exec(e);
	return t;
}, o = /* @__PURE__ */ new Map(), s = (e) => {
	if (o.has(e)) return o.get(e);
	if (typeof e != "string") return [];
	let t = /<(\/)?([a-zA-Z0-9.-]+)([\s\S]*?)(\/?)>/g, n = [], r = [], i = 0, s = t.exec(e), c = (e) => {
		(r.length > 0 ? r[r.length - 1].children : n).push(e);
	};
	for (; s !== null;) {
		let [n, o, l, u, d] = s, f = s.index;
		f > i && c(e.slice(i, f));
		let p = o === "/", m = d === "/" || u.trim().endsWith("/") || n.endsWith("/>"), h = u.trim().replace(/\/$/, "").trim();
		if (p) {
			let e = r[r.length - 1];
			if (e && e.tagName === l) {
				let e = r.pop();
				e && c({
					tagName: e.tagName,
					props: e.props,
					children: e.children
				});
			}
		} else if (m) c({
			tagName: l,
			props: a(h),
			children: []
		});
		else {
			let e = a(h);
			r.push({
				tagName: l,
				children: [],
				props: e
			});
		}
		i = f + n.length, s = t.exec(e);
	}
	for (i < e.length && c(e.slice(i)); r.length > 0;) {
		let e = r.pop();
		e && c({
			tagName: e.tagName,
			props: e.props,
			children: e.children
		});
	}
	return o.set(e, n), n;
}, c = (e, t) => {
	let n = s(e), r = 0, i = (e) => {
		if (typeof e == "string") return e;
		let { tagName: n, props: a, children: o } = e, s = o.flatMap(i), c = r++, l = t[n];
		if (!l) {
			let e = n.toLowerCase(), r = Object.keys(t).find((t) => t.toLowerCase() === e);
			r && (l = t[r]);
		}
		let u = `html-tag-${n}-${c}`;
		if (typeof l == "function") return l({
			...a,
			children: s,
			key: u
		});
		if (typeof l == "string") {
			let e = t[l];
			return typeof e == "function" ? e({
				...a,
				children: s,
				key: u
			}) : s;
		}
		if (typeof l == "object" && l && "tag" in l) {
			let { tag: e, props: n } = l, r = t[e];
			return typeof r == "function" ? r({
				...a,
				...n,
				children: s,
				key: u
			}) : s;
		}
		return s;
	}, a = n.flatMap(i);
	return a.length === 1 ? a[0] : a;
}, l = t(void 0), u = () => r(l), d = (t, { components: r = {} } = {}) => {
	let a = Object.fromEntries(Object.entries(r).filter(([, e]) => e).map(([e, t]) => [e, (e) => n(t, e)]));
	return /* @__PURE__ */ i(e, { children: c(t, new Proxy(a, { get(e, t) {
		if (typeof t == "string" && t in e) return e[t];
		if (typeof t == "string" && /^[a-z][a-z0-9]*$/.test(t)) return (e) => n(t, e);
	} })) });
}, f = (e) => {
	let { html: t, userComponents: n } = e;
	return d(t, { components: {
		...u()?.components,
		...n
	} });
};
//#endregion
export { f as HTMLRendererPlugin };
import { createContext as e, useContext as t } from "react";
import "react/jsx-runtime";
//#region ../../node_modules/.bun/react-intlayer@8.7.1-canary-0+bf16f8eded5e12ee/node_modules/react-intlayer/dist/esm/markdown/MarkdownProvider.mjs
var n = e(void 0), r = () => t(n), i = (e) => {
	let { children: t, options: n, components: i } = e, a = r();
	return (a?.renderMarkdown ?? ((e) => e))(t, n, {
		...a?.components ?? {},
		...i ?? {}
	});
};
//#endregion
export { i as MarkdownRendererPlugin };
