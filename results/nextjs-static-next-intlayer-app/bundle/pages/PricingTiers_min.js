import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useEffect as a, useLayoutEffect as o, useMemo as s, useState as c } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
var ee = {
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
}, f = {
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
}, p = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, m = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : u(l, { children: e });
	return new Proxy(i, { get(e, r, i) {
		if (r === "value") return t;
		if (r === Symbol.toPrimitive) return () => t ?? "";
		if (r === "toString") return () => String(t ?? "");
		if (r === "valueOf") return () => t;
		if (n && Object.hasOwn(n, r)) return n[r];
		if (t != null && typeof r == "string" && r !== "constructor" && !(r in e)) {
			let e = Object(t);
			if (r in e) {
				let n = e[r];
				return typeof n == "function" ? n.bind(t) : n;
			}
		}
		return Reflect.get(e, r, i);
	} });
}, h = /* @__PURE__ */ new WeakMap(), g = 0, _ = (e) => {
	if (!e) return "base";
	let t = h.get(e);
	if (t) return t;
	g += 1;
	let n = `p${g}`;
	return h.set(e, n), n;
}, te = 256, v = /* @__PURE__ */ new WeakMap(), y = (e) => typeof e == "object" && !!e, b = (e, t, n) => `${e}_${t}_${_(n)}`, x = (e, t) => {
	if (!y(e)) return { hit: !1 };
	let n = v.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, S = (e, t, n) => {
	if (!y(e)) return n;
	let r = v.get(e);
	return r || (r = /* @__PURE__ */ new Map(), v.set(e, r)), r.size >= te && r.clear(), r.set(t, n), n;
}, ne = "translation", C = "insertion", re = "object", ie = "array", w = "markdown", T = "html", E = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => E(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => E(e, {
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
}, D = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), O = "default", k = /[^A-Za-z0-9._&=-]/g, A = /[^A-Za-z0-9._-]/g, ae = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, j = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, ae);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, M = (e) => e === void 0 ? O : typeof e == "string" ? j(e, k) : Object.keys(e).sort().map((t) => `${j(t, A)}=${j(String(e[t]), A)}`).join("&"), N = (e) => Array.isArray(e) ? e.length === 0 ? [O] : e.map(M) : [M(e)], oe = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? O : e[0] ?? "default";
}, se = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, ce = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, le = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, ue = (e, t) => {
	if (!ce(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? O : oe(N(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => se(e, n, t, s)).map((t) => le(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, de = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, P = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? N(n).join(",") : String(n)}`;
}).join("|") : "", F = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, I = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (F(e) && F(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : I(e[r], t[r]));
		return n;
	}
	return e;
}, L = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => I(e, t));
}, R = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, z = (e) => {
	if (typeof e == "string") return e;
	if (R(e)) return e.nodeType === "html" ? e[T] : e[w];
}, B = (e, t) => {
	if (typeof e == "string") return t;
	if (R(e)) {
		let n = e.nodeType === "html" ? T : w;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, V = (e, t, n, r, i) => {
	let a = B(e, D(z(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, H = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, U = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? H : {
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
		return L(o, e, t);
	}
}, W = H, fe = (e) => H, G = H, pe = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? H : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: C }], i = e[C], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || R(e),
			transform: (e, n, r) => {
				if (R(e)) return (i) => V(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = D(i, e);
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
}, K = H, q = H, J = (e) => H, Y = H, me = (e, t = !0) => [
	U(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	W,
	G,
	pe,
	J(e ?? f.defaultLocale),
	Y,
	K,
	q
], he = (e, t, n = []) => E(e, {
	...t,
	plugins: n
}), ge = (e, t, n) => {
	let { locale: r, selector: i } = de(t), a = b(r ?? f.defaultLocale, P(i), n), o = x(e, a);
	if (o.hit) return o.content;
	let s = n ?? me(r), c = ue(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return he(e.content, t, s);
	};
	return c === null ? S(e, a, null) : Array.isArray(c) ? S(e, a, c.map(l)) : S(e, a, l(c));
}, _e = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", X = /\{\{\s*(.*?)\s*\}\}/g, ve = (e, t = {}) => {
	if (!Object.values(t).some(_e)) return {
		isSimple: !0,
		parts: e.replace(X, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(X), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, ye = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => m({
		...n,
		value: n.children,
		children: n.children
	})
}, be = H, xe = (t, r) => {
	let i = ve(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, Se = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? H : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: C }], i = e[C], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || R(e),
			transform: (e, n, r) => {
				if (R(e)) return (i) => V(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = xe(i, e);
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
}, Ce = H, we = H, Z = /* @__PURE__ */ new Map(), Te = (e, t = !0) => {
	let n = `${e ?? f.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		U(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
		W,
		fe(e ?? f.defaultLocale),
		G,
		J(e ?? f.defaultLocale),
		Y,
		K,
		q,
		ye,
		be,
		Se,
		Ce,
		we
	];
	return Z.set(n, r), r;
}, Ee = (e, t) => ge(e, t, Te(typeof t == "object" && t ? t.locale : t)), De = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var Q = {
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
}, $ = ((e = Q) => {
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!De) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
})(Q), Oe = t({
	locale: $ ?? f?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), ke = (e, t) => {
	let { locale: n, variant: r } = i(Oe) ?? {}, a = t ?? n, o = typeof a == "object" && a ? `${a.locale ?? ""}|${P(a)}` : a;
	return s(() => Ee(e, a), [e.key, o]);
};
function Ae() {
	let e = ke(ee), t = [
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
	];
	return u("div", {
		className: "grid gap-6 md:grid-cols-3",
		children: t.map((t) => d("div", {
			className: `flex flex-col rounded-lg border p-6 ${t.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`,
			children: [
				u("h3", {
					className: "text-lg font-semibold text-foreground",
					children: t.name
				}),
				d("div", {
					className: "my-4",
					children: [u("span", {
						className: "text-3xl font-bold text-foreground",
						children: t.price
					}), u("span", {
						className: "text-sm text-muted-foreground",
						children: t.period
					})]
				}),
				u("ul", {
					className: "mb-6 flex-1 space-y-2",
					children: t.features.map((e, t) => d("li", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [
							u("span", {
								className: "text-primary",
								children: "✓"
							}),
							" ",
							e
						]
					}, t))
				}),
				u("button", {
					type: "button",
					className: `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${t.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`,
					children: t.name === e.j ? e.f : e.m
				})
			]
		}, t.name.value))
	});
}
function je() {
	if (!(typeof window > "u")) {
		console.log("--- BROWSER: RootDocument mounted"), performance.mark("hydration_end");
		try {
			if (performance.getEntriesByName("hydration_start").length > 0) {
				performance.measure("hydration_duration", "hydration_start", "hydration_end"), console.log("--- BROWSER: hydration_duration measured");
				let e = performance.getEntriesByName("hydration_duration")[0]?.duration;
				e && console.log(`Hydration Duration: ${e.toFixed(2)}ms`);
			} else console.warn("--- BROWSER: hydration_start NOT FOUND");
		} catch (e) {
			console.warn("Could not measure hydration duration:", e);
		}
	}
}
function Me(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Ne({ children: e, locale: t }) {
	let [n] = c(() => typeof performance < "u" ? performance.now() : 0);
	return o(() => {
		Me("AppRoot", n);
	}, [n]), a(() => {
		t && (document.documentElement.lang = t);
	}, [t]), a(() => {
		je();
	}, []), e;
}
function Pe({ children: e }) {
	return u(Ne, {
		locale: "en",
		children: e
	});
}
function Fe() {
	return u(Pe, { children: u(Ae, {}) });
}
export { Fe as default };
