import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useMemo as s, useState as c } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
var f = {
	key: "pricing-tiers",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				y: "Starter",
				r: "$0",
				l: "forever",
				c: {
					fields: ["runs"],
					nodeType: "insertion",
					insertion: "{{runs}} benchmark runs/day"
				},
				o: {
					fields: ["libs"],
					nodeType: "insertion",
					insertion: "{{libs}} libraries"
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
					fields: ["runs"],
					nodeType: "insertion",
					insertion: "{{runs}} lancements de benchmark/jour"
				},
				o: {
					fields: ["libs"],
					nodeType: "insertion",
					insertion: "{{libs}} bibliothèques"
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
					fields: ["runs"],
					nodeType: "insertion",
					insertion: "{{runs}} ejecuciones de benchmark/día"
				},
				o: {
					fields: ["libs"],
					nodeType: "insertion",
					insertion: "{{libs}} bibliotecas"
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
					fields: ["runs"],
					nodeType: "insertion",
					insertion: "{{runs}} Benchmark-Läufe/Tag"
				},
				o: {
					fields: ["libs"],
					nodeType: "insertion",
					insertion: "{{libs}} Bibliotheken"
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
					fields: ["runs"],
					nodeType: "insertion",
					insertion: "{{runs}} esecuzioni di benchmark/giorno"
				},
				o: {
					fields: ["libs"],
					nodeType: "insertion",
					insertion: "{{libs}} librerie"
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
					fields: ["runs"],
					nodeType: "insertion",
					insertion: "{{runs}} execuções de benchmark/dia"
				},
				o: {
					fields: ["libs"],
					nodeType: "insertion",
					insertion: "{{libs}} bibliotecas"
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
					fields: ["runs"],
					nodeType: "insertion",
					insertion: "每天 {{runs}} 次基准测试运行"
				},
				o: {
					fields: ["libs"],
					nodeType: "insertion",
					insertion: "{{libs}} 个库"
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
					fields: ["runs"],
					nodeType: "insertion",
					insertion: "毎日 {{runs}} 回のベンチマーク実行"
				},
				o: {
					fields: ["libs"],
					nodeType: "insertion",
					insertion: "{{libs}} 個のライブラリ"
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
					fields: ["runs"],
					nodeType: "insertion",
					insertion: "하루 {{runs}} 회의 벤치마크 실행"
				},
				o: {
					fields: ["libs"],
					nodeType: "insertion",
					insertion: "{{libs}} 개의 라이브러리"
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
					fields: ["runs"],
					nodeType: "insertion",
					insertion: "{{runs}} запусков бенчмарка в день"
				},
				o: {
					fields: ["libs"],
					nodeType: "insertion",
					insertion: "{{libs}} библиотек"
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
}, p = {
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
}, m = {
	mode: "prefix-all",
	enableProxy: !1,
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, h = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, g = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = h(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, _ = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var v = {
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
}, y = (e = v) => {
	let { locales: t } = p;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!_) for (let t = 0; t < (m.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(m.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, b = !1, x, S = () => typeof window > "u" ? y(v) : (b ||= (x = y(v), !0), x), ee = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (b = !1, !_ && m.storage.cookies)) for (let n = 0; n < m.storage.cookies.length; n++) {
		let { name: r, attributes: i } = m.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: h(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, g(r, e, i));
			} catch {}
		}
	}
}, C = /* @__PURE__ */ new Map(), te = (e, t) => Object.create(new Proxy(e, {
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
}), ne = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = C.get(t);
	i || (i = /* @__PURE__ */ new Map(), C.set(t, i));
	let a = i.get(r);
	return a || (a = te(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, re = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : u(l, { children: e }),
	value: t,
	...n
}, ne(t)), w = /* @__PURE__ */ new WeakMap(), T = 0, ie = (e) => {
	if (!e) return "base";
	let t = w.get(e);
	if (t) return t;
	T += 1;
	let n = `p${T}`;
	return w.set(e, n), n;
}, ae = 256, E = /* @__PURE__ */ new WeakMap(), D = (e) => typeof e == "object" && !!e, oe = (e, t, n) => `${e}_${t}_${ie(n)}`, se = (e, t) => {
	if (!D(e)) return { hit: !1 };
	let n = E.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, O = (e, t, n) => {
	if (!D(e)) return n;
	let r = E.get(e);
	return r || (r = /* @__PURE__ */ new Map(), E.set(e, r)), r.size >= ae && r.clear(), r.set(t, n), n;
}, ce = "translation", le = "enumeration", ue = "plural", de = "condition", k = "insertion", fe = "object", pe = "array", A = "markdown", j = "html", me = "gender", he = "select", M = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), N = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, N);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => N(e, M(t, e, {
		type: pe,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: fe,
			key: r
		};
		if (t.eager) {
			n[r] = N(e[r], M(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = N(e[r], M(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, P = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), F = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, I = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !F(e) || !F(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? I(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, ge = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => I(e, t));
}, L = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, _e = (e) => {
	if (typeof e == "string") return e;
	if (L(e)) return e.nodeType === "html" ? e[j] : e[A];
}, ve = (e, t) => {
	if (typeof e == "string") return t;
	if (L(e)) {
		let n = e.nodeType === "html" ? j : A;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, R = (e, t, n, r, i) => {
	let a = ve(e, P(_e(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, z = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, ye = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, B = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? z : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = ge(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: ce,
				key: e
			}]
		});
	}
}, V = z, H = (e) => z, U = z, be = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? z : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: k }], i = e[k], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || L(e),
			transform: (e, n, r) => {
				if (L(e)) return (i) => R(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = P(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return G(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, W = [
	le,
	de,
	ue,
	me,
	he
], xe = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !W.includes(i)) return t;
	let a = i === "plural" || i === "enumeration";
	return (e) => {
		if (typeof e == "object" && e) return t({
			...n,
			...e
		});
		if (a) return t({
			...n,
			count: e
		});
		let i = t(e);
		return !r && ye(i) ? i(n) : i;
	};
}, G = (e, t) => typeof t == "function" && W.includes(e?.nodeType ?? "") ? (n) => xe(e, t, n) : t, Se = z, K = z, q = (e) => z, J = z, Ce = (e, t = !0) => [
	B(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
	V,
	H(e ?? p.defaultLocale),
	U,
	be,
	q(e ?? p.defaultLocale),
	J,
	Se,
	K
].filter((e) => e !== z), we = (e, t, n = []) => N(e, {
	...t,
	plugins: n
}), Y = /* @__PURE__ */ new WeakSet(), Te = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = oe(r ?? p.defaultLocale, "", n), o = se(e, a);
	if (o.hit) return o.content;
	let s = n ?? Ce(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !Y.has(e)
		};
		Y.add(e);
		try {
			return we(e.content, t, s);
		} finally {
			t.eager && Y.delete(e);
		}
	};
	return c === null ? O(e, a, null) : Array.isArray(c) ? O(e, a, c.map(l)) : O(e, a, l(c));
}, Ee = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", X = /\{\{\s*(.*?)\s*\}\}/g, De = (e, t = {}) => {
	if (!Object.values(t).some(Ee)) return {
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
}, Oe = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => re({
		value: t.children,
		children: t.children
	})
}, ke = z, Ae = (t, r) => {
	let i = De(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, je = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? z : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: k }], i = e[k], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || L(e),
			transform: (e, n, r) => {
				if (L(e)) return (i) => R(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Ae(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return G(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Me = z, Ne = z, Z = /* @__PURE__ */ new Map(), Pe = (e, t = !0) => {
	let n = `${e ?? p.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		Oe,
		B(e ?? p.defaultLocale, t ? p.defaultLocale : void 0),
		V,
		H(e ?? p.defaultLocale),
		U,
		q(e ?? p.defaultLocale),
		J,
		Se,
		K,
		ke,
		je,
		Me,
		Ne
	].filter((e) => e !== z);
	return Z.set(n, r), r;
}, Fe = (e, t) => Te(e, t, Pe(typeof t == "object" && t ? t.locale : t)), Q = S, Ie = (e, t) => ee(e, {
	...v,
	isCookieEnabled: t
}), Le = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Re = (e, t = p?.locales, n = p?.defaultLocale) => {
	if (t?.includes(e)) return e;
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
}, $ = t({
	get locale() {
		return Q() ?? p?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), ze = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: a, disableEditor: l, isCookieEnabled: d }) => {
	let { locales: f, defaultLocale: m } = p ?? {}, [h, g] = c(() => e ?? Q() ?? t ?? m), [_, v] = c(e);
	e !== _ && (v(e), e && e !== h && g(e)), o(() => {
		Le();
	}, []);
	let y = i((e) => {
		if (h.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			g(e), Ie(e, d);
		}
	}, [
		h,
		f,
		d
	]), b = a ?? y, x = Re(h), S = s(() => ({
		locale: x,
		setLocale: b,
		variant: n,
		disableEditor: l
	}), [
		x,
		b,
		n,
		l
	]);
	return u($.Provider, {
		value: S,
		children: r
	});
}, Be = ({ children: e, ...t }) => d(ze, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), Ve = (e, t) => {
	let { locale: n, variant: r } = a($) ?? {}, i = t ?? n, o = i;
	return s(() => Fe(e, i), [e.key, o]);
};
function He() {
	let e = Ve(f), t = [
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
function Ue({ children: e }) {
	return u(Be, {
		locale: "en",
		children: e
	});
}
function We() {
	return u(Ue, { children: u(He, {}) });
}
export { We as default };
