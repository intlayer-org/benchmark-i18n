import { className as e, createComponent as t, effect as n, insert as r, memo as i, template as a } from "solid-js/web";
import { For as o, createContext as s, createMemo as c, lazy as l, useContext as u } from "solid-js";
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
	enableProxy: !1,
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, m = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var h = {
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
}, g = (e = h) => {
	let { locales: t } = f;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!m) for (let t = 0; t < (p.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(p.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ee = !1, _, v = () => typeof window > "u" ? g(h) : (ee ||= (_ = g(h), !0), _), y = /* @__PURE__ */ new Map(), b = (e, t) => Object.create(new Proxy(e, {
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
}), x = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = y.get(t);
	i || (i = /* @__PURE__ */ new Map(), y.set(t, i));
	let a = i.get(r);
	return a || (a = b(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, te = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return Object.setPrototypeOf(r, x(t, Array.prototype)), r;
}, S = /* @__PURE__ */ new WeakMap(), C = 0, ne = (e) => {
	if (!e) return "base";
	let t = S.get(e);
	if (t) return t;
	C += 1;
	let n = `p${C}`;
	return S.set(e, n), n;
}, w = 256, T = /* @__PURE__ */ new WeakMap(), E = (e) => typeof e == "object" && !!e, D = (e, t, n) => `${e}_${t}_${ne(n)}`, O = (e, t) => {
	if (!E(e)) return { hit: !1 };
	let n = T.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, k = (e, t, n) => {
	if (!E(e)) return n;
	let r = T.get(e);
	return r || (r = /* @__PURE__ */ new Map(), T.set(e, r)), r.size >= w && r.clear(), r.set(t, n), n;
}, A = "translation", j = "object", M = "array", N = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), P = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, P);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => P(e, N(t, e, {
		type: M,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: j,
			key: r
		};
		if (t.eager) {
			n[r] = P(e[r], N(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = P(e[r], N(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, F = (e) => {
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
}, re = (e, t, n) => {
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
}, L = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, R = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? L : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = re(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: A,
				key: e
			}]
		});
	}
}, z = L, B = (e) => L, V = L, H = L, U = L, W = L, G = (e) => L, K = L, q = (e, t = !0) => [
	R(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
	z,
	B(e ?? f.defaultLocale),
	V,
	H,
	G(e ?? f.defaultLocale),
	K,
	U,
	W
].filter((e) => e !== L), J = (e, t, n = []) => P(e, {
	...t,
	plugins: n
}), Y = /* @__PURE__ */ new WeakSet(), ie = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = D(r ?? f.defaultLocale, "", n), o = O(e, a);
	if (o.hit) return o.content;
	let s = n ?? q(r), c = e, l = (e) => {
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
			return J(e.content, t, s);
		} finally {
			t.eager && Y.delete(e);
		}
	};
	return c === null ? k(e, a, null) : Array.isArray(c) ? k(e, a, c.map(l)) : k(e, a, l(c));
}, X = null, Z = null;
X?.catch(() => {}), Z?.catch(() => {});
var Q = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => te({
		value: t.children,
		children: t.children
	})
}, ae = L, oe = L;
l(() => X.then((e) => ({ default: e.MarkdownRenderer }))), l(() => X.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var se = L;
l(() => Z.then((e) => ({ default: e })));
var ce = L, $ = /* @__PURE__ */ new Map(), le = (e, t = !0) => {
	let n = `${e ?? f.defaultLocale}_${t}`;
	if ($.has(n)) return $.get(n);
	let r = [
		Q,
		R(e ?? f.defaultLocale, t ? f.defaultLocale : void 0),
		z,
		B(e ?? f.defaultLocale),
		V,
		G(e ?? f.defaultLocale),
		K,
		U,
		W,
		ae,
		oe,
		se,
		ce
	].filter((e) => e !== L);
	return $.set(n, r), r;
}, ue = (e, t) => ie(e, t, le(typeof t == "object" && t ? t.locale : t)), de = v, fe = s({
	locale: () => de() ?? f?.defaultLocale,
	setLocale: () => null
}), pe = Symbol("LOADABLE_SETTLED_VALUE"), me = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[pe];
}, he = (e, t) => {
	let n = u(fe) ?? {}, r = c(() => {
		let r = n?.locale?.();
		return ue(me(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, ge = a("<div class=\"grid gap-6 md:grid-cols-3\">"), _e = a("<div><h3 class=\"text-lg font-semibold text-foreground\"></h3><div class=my-4><span class=\"text-3xl font-bold text-foreground\"></span><span class=\"text-sm text-muted-foreground\"></span></div><ul class=\"mb-6 flex-1 space-y-2\"></ul><button type=button>"), ve = a("<li class=\"flex items-center gap-2 text-sm text-muted-foreground\"><span class=text-primary>✓</span> ");
function ye() {
	let a = he(d), s = () => [
		{
			name: a().u.value,
			price: "$0",
			period: "forever",
			features: [
				a().x.value,
				"3 libraries",
				a().f.value,
				a().s.value
			]
		},
		{
			name: a().r.value,
			price: "$29",
			period: "/month",
			features: [
				a().w.value,
				a().a.value,
				a().p.value,
				a().q.value,
				a().e.value,
				a().n.value
			],
			highlighted: !0
		},
		{
			name: a().k.value,
			price: a().h.value,
			period: "",
			features: [
				a().l.value,
				a().o.value,
				a().t.value,
				a().j.value,
				a().i.value,
				a().b.value,
				a().v.value
			]
		}
	];
	return (() => {
		var c = ge();
		return r(c, t(o, {
			get each() {
				return s();
			},
			children: (s) => (() => {
				var c = _e(), l = c.firstChild, u = l.nextSibling, d = u.firstChild, f = d.nextSibling, p = u.nextSibling, m = p.nextSibling;
				return r(l, () => s.name), r(d, () => s.price), r(f, () => s.period), r(p, t(o, {
					get each() {
						return s.features;
					},
					children: (e) => (() => {
						var t = ve();
						return t.firstChild.nextSibling, r(t, e, null), t;
					})()
				})), r(m, (() => {
					var e = i(() => s.name === a().k.value);
					return () => e() ? a().g.value : a().m.value;
				})()), n((t) => {
					var n = `flex flex-col rounded-lg border p-6 ${s.highlighted ? a().d.value : "border-border bg-card"}`, r = `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${s.highlighted ? "bg-primary text-primary-foreground" : a().c.value}`;
					return n !== t.e && e(c, t.e = n), r !== t.t && e(m, t.t = r), t;
				}, {
					e: void 0,
					t: void 0
				}), c;
			})()
		})), c;
	})();
}
export { ye as default };
