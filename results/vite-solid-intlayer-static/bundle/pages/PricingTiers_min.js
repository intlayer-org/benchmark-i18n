import { Dynamic as e, className as t, createComponent as n, effect as r, insert as i, memo as a, template as o } from "solid-js/web";
import { For as s, createContext as c, createMemo as l, useContext as u } from "solid-js";
var d = {
	key: "pricing-tiers",
	content: {
		nodeType: "translation",
		translation: {
			en: {
				u: "Starter",
				x: "5 benchmark runs/day",
				f: "Community support",
				s: "Public results",
				r: "Pro",
				w: "Unlimited runs",
				a: "All libraries",
				p: "Priority support",
				q: "Private results",
				e: "CI integration",
				n: "Historical data",
				k: "Enterprise",
				h: "Custom",
				l: "Everything in Pro",
				o: "On-premise option",
				t: "SSO & SAML",
				j: "Dedicated account manager",
				i: "Custom SLAs",
				b: "Audit logs",
				v: "Training sessions",
				d: "border-primary bg-primary/5 ring-1 ring-primary",
				c: "border border-border text-foreground hover:bg-accent",
				g: "Contact Sales",
				m: "Get Started"
			},
			fr: {
				u: "Débutant",
				x: "5 exécutions de benchmark/jour",
				f: "Support communautaire",
				s: "Résultats publics",
				r: "Pro",
				w: "Exécutions illimitées",
				a: "Toutes les bibliothèques",
				p: "Support prioritaire",
				q: "Résultats privés",
				e: "Intégration CI",
				n: "Données historiques",
				k: "Entreprise",
				h: "Personnalisé",
				l: "Tout ce qui est dans Pro",
				o: "Option sur site",
				t: "SSO et SAML",
				j: "Gestionnaire de compte dédié",
				i: "SLA personnalisés",
				b: "Logs d'audit",
				v: "Sessions de formation",
				d: "border-primary bg-primary/5 ring-1 ring-primary",
				c: "border border-border text-foreground hover:bg-accent",
				g: "Contacter le service commercial",
				m: "Démarrer"
			},
			es: {
				u: "Starter",
				x: "5 ejecuciones de benchmark al día",
				f: "Soporte de la comunidad",
				s: "Resultados públicos",
				r: "Pro",
				w: "Ejecuciones ilimitadas",
				a: "Todas las bibliotecas",
				p: "Soporte prioritario",
				q: "Resultados privados",
				e: "Integración de CI",
				n: "Datos históricos",
				k: "Enterprise",
				h: "Personalizado",
				l: "Todo en Pro",
				o: "Opción on-premise",
				t: "SSO y SAML",
				j: "Gestor de cuentas dedicado",
				i: "SLAs personalizados",
				b: "Registros de auditoría",
				v: "Sesiones de formación",
				d: "border-primary bg-primary/5 ring-1 ring-primary",
				c: "border border-border text-foreground hover:bg-accent",
				g: "Contactar con ventas",
				m: "Empezar"
			},
			de: {
				u: "Starter",
				x: "5 Benchmark-Läufe/Tag",
				f: "Community-Support",
				s: "Öffentliche Ergebnisse",
				r: "Pro",
				w: "Unbegrenzte Läufe",
				a: "Alle Bibliotheken",
				p: "Prioritäts-Support",
				q: "Private Ergebnisse",
				e: "CI-Integration",
				n: "Historische Daten",
				k: "Enterprise",
				h: "Benutzerdefiniert",
				l: "Alles in Pro",
				o: "On-Premise-Option",
				t: "SSO & SAML",
				j: "Dedizierter Account Manager",
				i: "Benutzerdefinierte SLAs",
				b: "Audit-Protokolle",
				v: "Schulungen",
				d: "border-primary bg-primary/5 ring-1 ring-primary",
				c: "border border-border text-foreground hover:bg-accent",
				g: "Vertrieb kontaktieren",
				m: "Erste Schritte"
			},
			it: {
				u: "Starter",
				x: "5 esecuzioni di benchmark al giorno",
				f: "Supporto della comunità",
				s: "Risultati pubblici",
				r: "Pro",
				w: "Esecuzioni illimitate",
				a: "Tutte le librerie",
				p: "Supporto prioritario",
				q: "Risultati privati",
				e: "Integrazione CI",
				n: "Dati storici",
				k: "Enterprise",
				h: "Personalizzato",
				l: "Tutto quello che c'è in Pro",
				o: "Opzione on-premise",
				t: "SSO e SAML",
				j: "Account manager dedicato",
				i: "SLA personalizzati",
				b: "Log di audit",
				v: "Sessioni di formazione",
				d: "border-primary bg-primary/5 ring-1 ring-primary",
				c: "border border-border text-foreground hover:bg-accent",
				g: "Contatta l'ufficio vendite",
				m: "Inizia subito"
			},
			pt: {
				u: "Starter",
				x: "5 execuções de benchmark/dia",
				f: "Suporte da comunidade",
				s: "Resultados públicos",
				r: "Pro",
				w: "Execuções ilimitadas",
				a: "Todas as biblioteche",
				p: "Suporte prioritário",
				q: "Resultados privados",
				e: "Integração CI",
				n: "Dados históricos",
				k: "Enterprise",
				h: "Personalizado",
				l: "Tudo no Pro",
				o: "Opção on-premise",
				t: "SSO e SAML",
				j: "Gerente de conta dedicado",
				i: "SLAs personalizados",
				b: "Logs de auditoria",
				v: "Sessões de treinamento",
				d: "border-primary bg-primary/5 ring-1 ring-primary",
				c: "border border-border text-foreground hover:bg-accent",
				g: "Contatar Vendas",
				m: "Começar"
			},
			zh: {
				u: "入门版",
				x: "每天 5 次基准测试运行",
				f: "社区支持",
				s: "公开结果",
				r: "专业版",
				w: "无限次运行",
				a: "所有库",
				p: "优先支持",
				q: "私人结果",
				e: "CI 集成",
				n: "历史数据",
				k: "企业版",
				h: "自定义",
				l: "包含专业版所有功能",
				o: "本地部署选项",
				t: "SSO 和 SAML",
				j: "专属客户经理",
				i: "自定义 SLA",
				b: "审核日志",
				v: "培训课程",
				d: "border-primary bg-primary/5 ring-1 ring-primary",
				c: "border border-border text-foreground hover:bg-accent",
				g: "联系销售",
				m: "开始使用"
			},
			ja: {
				u: "スターター",
				x: "1日5回のベンチマーク実行",
				f: "コミュニティサポート",
				s: "公開結果",
				r: "プロ",
				w: "実行無制限",
				a: "すべてのライブラリ",
				p: "優先サポート",
				q: "プライベートな結果",
				e: "CI 統合",
				n: "履歴データ",
				k: "エンタープライズ",
				h: "カスタム",
				l: "プロのすべての機能",
				o: "オンプレミスオプション",
				t: "SSO と SAML",
				j: "専任のアカウントマネージャー",
				i: "カスタムSLA",
				b: "監査ログ",
				v: "トレーニングセッション",
				d: "border-primary bg-primary/5 ring-1 ring-primary",
				c: "border border-border text-foreground hover:bg-accent",
				g: "営業に連絡",
				m: "始める"
			},
			ko: {
				u: "스타터",
				x: "일일 5회 벤치마크 실행",
				f: "커뮤니티 지원",
				s: "공개 결과",
				r: "프로",
				w: "무제한 실행",
				a: "모든 라이브러리",
				p: "우선 지원",
				q: "비공개 결과",
				e: "CI 통합",
				n: "기록 데이터",
				k: "엔터프라이즈",
				h: "커스텀",
				l: "Pro의 모든 기능 포함",
				o: "온프레미스 옵션",
				t: "SSO 및 SAML",
				j: "전담 어카운트 매니저",
				i: "맞춤형 SLA",
				b: "감사 로그",
				v: "교육 세션",
				d: "border-primary bg-primary/5 ring-1 ring-primary",
				c: "border border-border text-foreground hover:bg-accent",
				g: "영업팀 문의",
				m: "시작하기"
			},
			ru: {
				u: "Стартовый",
				x: "5 запусков бенчмарка в день",
				f: "Поддержка сообщества",
				s: "Публичные результаты",
				r: "Профи",
				w: "Безлимитные запуски",
				a: "Все библиотеки",
				p: "Приоритетная поддержка",
				q: "Приватные результаты",
				e: "Интеграция с CI",
				n: "Исторические данные",
				k: "Корпоративный",
				h: "Индивидуальный",
				l: "Все, что в Профи",
				o: "Локальная установка",
				t: "SSO и SAML",
				j: "Выделенный менеджер",
				i: "Индивидуальные SLA",
				b: "Журналы аудита",
				v: "Обучающие сессии",
				d: "border-primary bg-primary/5 ring-1 ring-primary",
				c: "border border-border text-foreground hover:bg-accent",
				g: "Связаться с отделом продаж",
				m: "Начать"
			}
		}
	}
}, f = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		return n === "value" ? t : n === "toString" ? () => String(t) : n === Symbol.toPrimitive ? (e) => e === "string" ? String(t) : e === "number" ? Number(t) : t : Reflect.get(e, n, r);
	} });
}, p = (t) => {
	if (typeof t == "string") return t;
	let { type: n, props: r } = ((e) => {
		if (e?.props && typeof e.props.children == "object") {
			let t = [], { children: n } = e.props;
			return Object.keys(n ?? {}).forEach((e) => {
				t.push(p(n?.[e]));
			}), {
				...e,
				props: {
					...e.props,
					children: t
				}
			};
		}
		return {
			...e,
			props: {
				...e.props,
				children: e.props?.children ?? []
			}
		};
	})(t);
	return e({
		component: n ?? "span",
		...r,
		children: r.children
	});
}, m = {
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
}, h = {
	mode: "prefix-all",
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: {}
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, g = "translation", _ = "object", v = "array", y = (e, t) => {
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
	for (let r in e) Object.defineProperty(n, r, {
		enumerable: !0,
		configurable: !0,
		get: function() {
			let n = {
				...t,
				children: e[r],
				keyPath: [...t.keyPath, {
					type: _,
					key: r
				}]
			}, i = y(e[r], n);
			return Object.defineProperty(this, r, {
				value: i,
				enumerable: !0,
				configurable: !0
			}), i;
		}
	});
	return n;
}, b = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, x = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (b(e) && b(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r === "__proto__" || r === "constructor" || t[r] === void 0 || (n[r] = e[r] === void 0 ? t[r] : x(e[r], t[r]));
		return n;
	}
	return e;
}, S = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => x(e, t));
}, C = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, w = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? C : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: g,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return S(o, e, t);
	}
}, T = C, E = C, D = C, O = C, k = (e) => C, A = C, j = (e, t = !0) => [
	w(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
	T,
	E,
	D,
	k(e ?? m.defaultLocale),
	A,
	O
], M = (e, t, n = []) => y(e, {
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
}, P = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => f({
		...n,
		value: n.children,
		children: n.children
	})
}, F = process.env.INTLAYER_NODE_TYPE_SOLID_NODE === "false" ? C : {
	id: "solid-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 || typeof Node < "u" && e instanceof Node,
	transform: (e, { plugins: t, ...n }) => f({
		...n,
		value: "[[solid-element]]",
		children: typeof Node < "u" && e instanceof Node ? e : p(e)
	})
}, I = C, L = C, R = C, z = /* @__PURE__ */ new Map(), B = (e, t = !0) => {
	let n = `${e ?? m.defaultLocale}_${t}`;
	if (z.has(n)) return z.get(n);
	let r = [
		w(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
		T,
		E,
		k(e ?? m.defaultLocale),
		A,
		O,
		P,
		F,
		I,
		L,
		R
	];
	return z.set(n, r), r;
}, V = (e, t) => N(e, t, B(t)), H = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var U = (e = W) => {
	let { locales: t } = m;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!H) for (let t = 0; t < (h.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(h.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, W = {
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
}, G = U(W), K = c({
	locale: () => G ?? m?.defaultLocale,
	setLocale: () => null
}), q = (e, t) => {
	let n = u(K) ?? {};
	return l(() => V(e, t ?? n?.locale?.()));
}, J = o("<div class=\"grid gap-6 md:grid-cols-3\">"), Y = o("<div><h3 class=\"text-lg font-semibold text-foreground\"></h3><div class=my-4><span class=\"text-3xl font-bold text-foreground\"></span><span class=\"text-sm text-muted-foreground\"></span></div><ul class=\"mb-6 flex-1 space-y-2\"></ul><button type=button>"), X = o("<li class=\"flex items-center gap-2 text-sm text-muted-foreground\"><span class=text-primary>✓</span> ");
function Z() {
	let e = q(d), o = [
		{
			name: e().starter.value,
			price: "$0",
			period: "forever",
			features: [
				e().x5BenchmarkRunsday.value,
				"3 libraries",
				e().communitySupport.value,
				e().publicResults.value
			]
		},
		{
			name: e().pro.value,
			price: "$29",
			period: "/month",
			features: [
				e().unlimitedRuns.value,
				e().allLibraries.value,
				e().prioritySupport.value,
				e().privateResults.value,
				e().ciIntegration.value,
				e().historicalData.value
			],
			highlighted: !0
		},
		{
			name: e().enterprise.value,
			price: e().custom.value,
			period: "",
			features: [
				e().everythingInPro.value,
				e().onPremiseOption.value,
				e().ssoSaml.value,
				e().dedicatedAccountManager.value,
				e().customSlas.value,
				e().auditLogs.value,
				e().trainingSessions.value
			]
		}
	];
	return (() => {
		var c = J();
		return i(c, n(s, {
			each: o,
			children: (o) => (() => {
				var c = Y(), l = c.firstChild, u = l.nextSibling, d = u.firstChild, f = d.nextSibling, p = u.nextSibling, m = p.nextSibling;
				return i(l, () => o.name), i(d, () => o.price), i(f, () => o.period), i(p, n(s, {
					get each() {
						return o.features;
					},
					children: (e) => (() => {
						var t = X();
						return t.firstChild.nextSibling, i(t, e, null), t;
					})()
				})), i(m, (() => {
					var t = a(() => o.name === e().enterprise.value);
					return () => t() ? e().contactSales.value : e().getStarted.value;
				})()), r((n) => {
					var r = `flex flex-col rounded-lg border p-6 ${o.highlighted ? e().borderPrimaryBgPrimary5Ring.value : "border-border bg-card"}`, i = `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${o.highlighted ? "bg-primary text-primary-foreground" : e().borderBorderBorderTextForeground.value}`;
					return r !== n.e && t(c, n.e = r), i !== n.t && t(m, n.t = i), n;
				}, {
					e: void 0,
					t: void 0
				}), c;
			})()
		})), c;
	})();
}
export { Z as default };
