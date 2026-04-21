import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useContext as i, useEffect as a, useMemo as o, useRef as s, useState as ee } from "react";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
var d = {
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
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, m = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : l(c, { children: e });
	return new Proxy(i, { get(e, r, i) {
		return r === "value" ? t : n && r in n ? n[r] : Reflect.get(e, r, i);
	} });
}, h = (e) => {
	if (typeof e != "object" || !e) return e;
	let { type: t, props: r } = ((e) => {
		let t = e.props?.children;
		if (Array.isArray(t)) {
			let r = t.map((e, t) => {
				let r = h(e);
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
			let n = h(t);
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
}, te = "translation", g = "insertion", ne = "object", _ = "array", v = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => v(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => v(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: _,
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
					type: ne,
					key: r
				}]
			}, i = v(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, re = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), y = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, b = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (y(e) && y(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : b(e[r], t[r]));
		return n;
	}
	return e;
}, x = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => b(e, t));
}, S = process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false", C = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", w = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, T = (e, t) => S ? w : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: te,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return x(o, e, t);
	}
}, E = w, D = w, ie = C ? w : {
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
					let a = re(i, e);
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
}, O = w, k = (e) => w, A = w, j = (e, t = !0) => [
	T(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	E,
	D,
	ie,
	k(e ?? f.defaultLocale),
	A,
	O
], M = (e, t, n = []) => v(e, {
	...t,
	plugins: n
}), N = (e, t, n = j(t)) => {
	let r = {
		dictionaryKey: e.key,
		dictionaryPath: e.filePath,
		keyPath: [],
		plugins: n
	};
	return M(e.content, r, n);
}, P = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", F = /\{\{\s*(.*?)\s*\}\}/g, I = (e, t = {}) => {
	if (!Object.values(t).some(P)) return {
		isSimple: !0,
		parts: e.replace(F, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(F), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, L = process.env.INTLAYER_NODE_TYPE_INTLAYER_NODE === "false", R = process.env.INTLAYER_NODE_TYPE_REACT_NODE === "false", z = process.env.INTLAYER_NODE_TYPE_INSERTION === "false", B = L ? w : {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => m({
		...n,
		value: n.children,
		children: n.children
	})
}, V = R ? w : {
	id: "react-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 && e.key !== void 0,
	transform: (e, { plugins: t, ...n }) => m({
		...n,
		value: "[[react-element]]",
		children: h(e)
	})
}, H = (t, r) => {
	let i = I(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, U = z ? w : {
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
					let a = H(i, e);
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
}, W = w, ae = w, G = /* @__PURE__ */ new Map(), K = (e, t = !0) => {
	let n = `${e ?? f.defaultLocale}_${t}`;
	if (G.has(n)) return G.get(n);
	let r = [
		T(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
		E,
		D,
		k(e ?? f.defaultLocale),
		A,
		O,
		B,
		V,
		U,
		W,
		ae
	];
	return G.set(n, r), r;
}, q = (e, t) => N(e, t, K(t)), J = (e, t = f?.locales, n = f?.defaultLocale) => {
	let r = [e].flat(), i = (e) => e.trim().toLowerCase();
	try {
		for (let e of r) {
			let n = i(e), r = t.find((e) => i(e) === n);
			if (r) return r;
			let [a] = n.split("-"), o = t.find((e) => i(e).split("-")[0] === a);
			if (o) return o;
		}
	} catch {}
	return n;
}, Y = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var oe = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	return n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`), n.expires instanceof Date && r.push(`Expires=${n.expires.toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, se = (e) => {
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!Y) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ce = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !Y && p.storage.cookies) for (let n = 0; n < p.storage.cookies.length; n++) {
		let { name: r, attributes: i } = p.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: i.expires instanceof Date ? i.expires.getTime() : i.expires
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, oe(r, e, i));
			} catch {}
		}
	}
}, X = {
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
}, Z = se(X), le = (e, t) => ce(e, {
	...X,
	isCookieEnabled: t
}), ue = () => {
	let { locale: e } = i(Q) ?? {}, t = s(null);
	a(() => {}, []), a(() => {
		!e || !t.current || t.current.currentLocale.set(e);
	}, [e]);
}, de = ({ children: e }) => (ue(), e), fe = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Q = t({
	locale: Z ?? f?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), pe = ({ locale: e, defaultLocale: t, children: n, setLocale: r, disableEditor: i, isCookieEnabled: o }) => {
	let { locales: s, defaultLocale: c } = f ?? {}, [u, d] = ee(e ?? Z ?? t ?? c);
	a(() => {
		e && e !== u && d(e);
	}, [e]), a(() => {
		fe();
	}, []);
	let p = r ?? ((e) => {
		if (u.toString() !== e.toString()) {
			if (!s?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			d(e), le(e, o);
		}
	}), m = J(u);
	return l(Q.Provider, {
		value: {
			locale: m,
			setLocale: p,
			disableEditor: i
		},
		children: n
	});
}, $ = ({ children: e, ...t }) => u(pe, {
	...t,
	children: [l(de, {}), e]
}), me = (e, t) => {
	let { locale: n } = i(Q) ?? {};
	return o(() => q(e, t ?? n), [
		e.key,
		n,
		t
	]);
};
function he() {
	let e = me(d);
	return l("div", {
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
		].map((t) => u("div", {
			className: `flex flex-col rounded-lg border p-6 ${t.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`,
			children: [
				l("h3", {
					className: "text-lg font-semibold text-foreground",
					children: t.name
				}),
				u("div", {
					className: "my-4",
					children: [l("span", {
						className: "text-3xl font-bold text-foreground",
						children: t.price
					}), l("span", {
						className: "text-sm text-muted-foreground",
						children: t.period
					})]
				}),
				l("ul", {
					className: "mb-6 flex-1 space-y-2",
					children: t.features.map((e, t) => u("li", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [
							l("span", {
								className: "text-primary",
								children: "✓"
							}),
							" ",
							e
						]
					}, t))
				}),
				l("button", {
					type: "button",
					className: `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${t.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`,
					children: t.name === e.j ? e.f : e.m
				})
			]
		}, t.name.value))
	});
}
function ge({ children: e }) {
	return l($, {
		locale: "en",
		children: e
	});
}
function _e() {
	return l(ge, { children: l(he, {}) });
}
export { _e as default };
