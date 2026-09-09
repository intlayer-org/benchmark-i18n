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
	constructor: "constructor",
	length: "length",
	slice: "slice",
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
}, p = (e) => typeof e == "string" && /^\d+$/.test(e), m = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		if (n === f.value) return t;
		if (n === Symbol.toPrimitive) return (e) => e === "number" ? Number(t) : t ?? "";
		if (n === f.toString) return () => String(t ?? "");
		if (n === f.valueOf) return () => t;
		if (n === f.slice) return Reflect.get(e, n, r);
		if (t != null && typeof n == "string" && n !== f.constructor && n !== f.length && !p(n)) {
			let e = Object(t);
			if (n in e) {
				let r = Reflect.get(e, n);
				return typeof r == "function" ? r.bind(t) : r;
			}
		}
		return Reflect.get(e, n, r);
	} });
}, h = {
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
}, g = {
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
}, _ = /* @__PURE__ */ new WeakMap(), v = 0, y = (e) => {
	if (!e) return "base";
	let t = _.get(e);
	if (t) return t;
	v += 1;
	let n = `p${v}`;
	return _.set(e, n), n;
}, b = 256, x = /* @__PURE__ */ new WeakMap(), S = (e) => typeof e == "object" && !!e, ee = (e, t, n) => `${e}_${t}_${y(n)}`, te = (e, t) => {
	if (!S(e)) return { hit: !1 };
	let n = x.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, C = (e, t, n) => {
	if (!S(e)) return n;
	let r = x.get(e);
	return r || (r = /* @__PURE__ */ new Map(), x.set(e, r)), r.size >= b && r.clear(), r.set(t, n), n;
}, ne = "translation", w = "object", T = "array", E = (e, t) => {
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
}, D = "default", O = /[^A-Za-z0-9._&=-]/g, k = /[^A-Za-z0-9._-]/g, A = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, j = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, A);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, M = (e) => e === void 0 ? D : typeof e == "string" ? j(e, O) : Object.keys(e).sort().map((t) => `${j(t, k)}=${j(String(e[t]), k)}`).join("&"), N = (e) => Array.isArray(e) ? e.length === 0 ? [D] : e.map(M) : [M(e)], P = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? D : e[0] ?? "default";
}, F = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, re = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, ie = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, ae = (e, t) => {
	if (!re(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? D : P(N(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => F(e, n, t, s)).map((t) => ie(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, oe = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, se = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? N(n).join(",") : String(n)}`;
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
}, R = (e, t, n) => {
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
}, z = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, B = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? z : {
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
		return R(o, e, t);
	}
}, V = z, H = (e) => z, U = z, W = z, G = z, K = z, q = (e) => z, J = z, ce = (e, t = !0) => [
	B(e ?? h.defaultLocale, t ? h.defaultLocale : void 0),
	V,
	U,
	W,
	q(e ?? h.defaultLocale),
	J,
	G,
	K
], Y = (e, t, n = []) => E(e, {
	...t,
	plugins: n
}), le = (e, t, n) => {
	let { locale: r, selector: i } = oe(t), a = ee(r ?? h.defaultLocale, se(i), n), o = te(e, a);
	if (o.hit) return o.content;
	let s = n ?? ce(r), c = ae(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Y(e.content, t, s);
	};
	return c === null ? C(e, a, null) : Array.isArray(c) ? C(e, a, c.map(l)) : C(e, a, l(c));
}, X = null, Z = null;
X?.catch(() => {}), Z?.catch(() => {});
var ue = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => m({
		...n,
		value: n.children,
		children: n.children
	})
}, de = z, fe = z;
l(() => X.then((e) => ({ default: e.MarkdownRenderer }))), l(() => X.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var pe = z;
l(() => Z.then((e) => ({ default: e })));
var me = z, Q = /* @__PURE__ */ new Map(), he = (e, t = !0) => {
	let n = `${e ?? h.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		B(e ?? h.defaultLocale, t ? h.defaultLocale : void 0),
		V,
		H(e ?? h.defaultLocale),
		U,
		q(e ?? h.defaultLocale),
		J,
		G,
		K,
		ue,
		de,
		fe,
		pe,
		me
	];
	return Q.set(n, r), r;
}, ge = (e, t) => le(e, t, he(typeof t == "object" && t ? t.locale : t)), _e = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var $ = {
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
}, ve = ((e = $) => {
	let { locales: t } = h;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!_e) for (let t = 0; t < (g.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(g.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
})($), ye = s({
	locale: () => ve ?? h?.defaultLocale,
	setLocale: () => null
}), be = Symbol("LOADABLE_SETTLED_VALUE"), xe = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[be];
}, Se = (e, t) => {
	let n = u(ye) ?? {}, r = c(() => {
		let r = n?.locale?.();
		return ge(xe(e) ?? e, t ?? r);
	});
	return new Proxy(r, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
}, Ce = a("<div class=\"grid gap-6 md:grid-cols-3\">"), we = a("<div><h3 class=\"text-lg font-semibold text-foreground\"></h3><div class=my-4><span class=\"text-3xl font-bold text-foreground\"></span><span class=\"text-sm text-muted-foreground\"></span></div><ul class=\"mb-6 flex-1 space-y-2\"></ul><button type=button>"), Te = a("<li class=\"flex items-center gap-2 text-sm text-muted-foreground\"><span class=text-primary>✓</span> ");
function Ee() {
	let a = Se(d), s = [
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
		var c = Ce();
		return r(c, t(o, {
			each: s,
			children: (s) => (() => {
				var c = we(), l = c.firstChild, u = l.nextSibling, d = u.firstChild, f = d.nextSibling, p = u.nextSibling, m = p.nextSibling;
				return r(l, () => s.name), r(d, () => s.price), r(f, () => s.period), r(p, t(o, {
					get each() {
						return s.features;
					},
					children: (e) => (() => {
						var t = Te();
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
export { Ee as default };
