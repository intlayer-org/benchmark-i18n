import { Dynamic, className, createComponent, effect, insert, memo, template } from "solid-js/web";
import { For, createContext, createMemo, useContext } from "solid-js";
var pricing_tiers_default = {
	key: "pricing-tiers",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"u": "Starter",
				"x": "5 benchmark runs/day",
				"f": "Community support",
				"s": "Public results",
				"r": "Pro",
				"w": "Unlimited runs",
				"a": "All libraries",
				"p": "Priority support",
				"q": "Private results",
				"e": "CI integration",
				"n": "Historical data",
				"k": "Enterprise",
				"h": "Custom",
				"l": "Everything in Pro",
				"o": "On-premise option",
				"t": "SSO & SAML",
				"j": "Dedicated account manager",
				"i": "Custom SLAs",
				"b": "Audit logs",
				"v": "Training sessions",
				"d": "border-primary bg-primary/5 ring-1 ring-primary",
				"c": "border border-border text-foreground hover:bg-accent",
				"g": "Contact Sales",
				"m": "Get Started"
			},
			"fr": {
				"u": "Débutant",
				"x": "5 exécutions de benchmark/jour",
				"f": "Support communautaire",
				"s": "Résultats publics",
				"r": "Pro",
				"w": "Exécutions illimitées",
				"a": "Toutes les bibliothèques",
				"p": "Support prioritaire",
				"q": "Résultats privés",
				"e": "Intégration CI",
				"n": "Données historiques",
				"k": "Entreprise",
				"h": "Personnalisé",
				"l": "Tout ce qui est dans Pro",
				"o": "Option sur site",
				"t": "SSO et SAML",
				"j": "Gestionnaire de compte dédié",
				"i": "SLA personnalisés",
				"b": "Logs d'audit",
				"v": "Sessions de formation",
				"d": "border-primary bg-primary/5 ring-1 ring-primary",
				"c": "border border-border text-foreground hover:bg-accent",
				"g": "Contacter le service commercial",
				"m": "Démarrer"
			},
			"es": {
				"u": "Starter",
				"x": "5 ejecuciones de benchmark al día",
				"f": "Soporte de la comunidad",
				"s": "Resultados públicos",
				"r": "Pro",
				"w": "Ejecuciones ilimitadas",
				"a": "Todas las bibliotecas",
				"p": "Soporte prioritario",
				"q": "Resultados privados",
				"e": "Integración de CI",
				"n": "Datos históricos",
				"k": "Enterprise",
				"h": "Personalizado",
				"l": "Todo en Pro",
				"o": "Opción on-premise",
				"t": "SSO y SAML",
				"j": "Gestor de cuentas dedicado",
				"i": "SLAs personalizados",
				"b": "Registros de auditoría",
				"v": "Sesiones de formación",
				"d": "border-primary bg-primary/5 ring-1 ring-primary",
				"c": "border border-border text-foreground hover:bg-accent",
				"g": "Contactar con ventas",
				"m": "Empezar"
			},
			"de": {
				"u": "Starter",
				"x": "5 Benchmark-Läufe/Tag",
				"f": "Community-Support",
				"s": "Öffentliche Ergebnisse",
				"r": "Pro",
				"w": "Unbegrenzte Läufe",
				"a": "Alle Bibliotheken",
				"p": "Prioritäts-Support",
				"q": "Private Ergebnisse",
				"e": "CI-Integration",
				"n": "Historische Daten",
				"k": "Enterprise",
				"h": "Benutzerdefiniert",
				"l": "Alles in Pro",
				"o": "On-Premise-Option",
				"t": "SSO & SAML",
				"j": "Dedizierter Account Manager",
				"i": "Benutzerdefinierte SLAs",
				"b": "Audit-Protokolle",
				"v": "Schulungen",
				"d": "border-primary bg-primary/5 ring-1 ring-primary",
				"c": "border border-border text-foreground hover:bg-accent",
				"g": "Vertrieb kontaktieren",
				"m": "Erste Schritte"
			},
			"it": {
				"u": "Starter",
				"x": "5 esecuzioni di benchmark al giorno",
				"f": "Supporto della comunità",
				"s": "Risultati pubblici",
				"r": "Pro",
				"w": "Esecuzioni illimitate",
				"a": "Tutte le librerie",
				"p": "Supporto prioritario",
				"q": "Risultati privati",
				"e": "Integrazione CI",
				"n": "Dati storici",
				"k": "Enterprise",
				"h": "Personalizzato",
				"l": "Tutto quello che c'è in Pro",
				"o": "Opzione on-premise",
				"t": "SSO e SAML",
				"j": "Account manager dedicato",
				"i": "SLA personalizzati",
				"b": "Log di audit",
				"v": "Sessioni di formazione",
				"d": "border-primary bg-primary/5 ring-1 ring-primary",
				"c": "border border-border text-foreground hover:bg-accent",
				"g": "Contatta l'ufficio vendite",
				"m": "Inizia subito"
			},
			"pt": {
				"u": "Starter",
				"x": "5 execuções de benchmark/dia",
				"f": "Suporte da comunidade",
				"s": "Resultados públicos",
				"r": "Pro",
				"w": "Execuções ilimitadas",
				"a": "Todas as biblioteche",
				"p": "Suporte prioritário",
				"q": "Resultados privados",
				"e": "Integração CI",
				"n": "Dados históricos",
				"k": "Enterprise",
				"h": "Personalizado",
				"l": "Tudo no Pro",
				"o": "Opção on-premise",
				"t": "SSO e SAML",
				"j": "Gerente de conta dedicado",
				"i": "SLAs personalizados",
				"b": "Logs de auditoria",
				"v": "Sessões de treinamento",
				"d": "border-primary bg-primary/5 ring-1 ring-primary",
				"c": "border border-border text-foreground hover:bg-accent",
				"g": "Contatar Vendas",
				"m": "Começar"
			},
			"zh": {
				"u": "入门版",
				"x": "每天 5 次基准测试运行",
				"f": "社区支持",
				"s": "公开结果",
				"r": "专业版",
				"w": "无限次运行",
				"a": "所有库",
				"p": "优先支持",
				"q": "私人结果",
				"e": "CI 集成",
				"n": "历史数据",
				"k": "企业版",
				"h": "自定义",
				"l": "包含专业版所有功能",
				"o": "本地部署选项",
				"t": "SSO 和 SAML",
				"j": "专属客户经理",
				"i": "自定义 SLA",
				"b": "审核日志",
				"v": "培训课程",
				"d": "border-primary bg-primary/5 ring-1 ring-primary",
				"c": "border border-border text-foreground hover:bg-accent",
				"g": "联系销售",
				"m": "开始使用"
			},
			"ja": {
				"u": "スターター",
				"x": "1日5回のベンチマーク実行",
				"f": "コミュニティサポート",
				"s": "公開結果",
				"r": "プロ",
				"w": "実行無制限",
				"a": "すべてのライブラリ",
				"p": "優先サポート",
				"q": "プライベートな結果",
				"e": "CI 統合",
				"n": "履歴データ",
				"k": "エンタープライズ",
				"h": "カスタム",
				"l": "プロのすべての機能",
				"o": "オンプレミスオプション",
				"t": "SSO と SAML",
				"j": "専任のアカウントマネージャー",
				"i": "カスタムSLA",
				"b": "監査ログ",
				"v": "トレーニングセッション",
				"d": "border-primary bg-primary/5 ring-1 ring-primary",
				"c": "border border-border text-foreground hover:bg-accent",
				"g": "営業に連絡",
				"m": "始める"
			},
			"ko": {
				"u": "스타터",
				"x": "일일 5회 벤치마크 실행",
				"f": "커뮤니티 지원",
				"s": "공개 결과",
				"r": "프로",
				"w": "무제한 실행",
				"a": "모든 라이브러리",
				"p": "우선 지원",
				"q": "비공개 결과",
				"e": "CI 통합",
				"n": "기록 데이터",
				"k": "엔터프라이즈",
				"h": "커스텀",
				"l": "Pro의 모든 기능 포함",
				"o": "온프레미스 옵션",
				"t": "SSO 및 SAML",
				"j": "전담 어카운트 매니저",
				"i": "맞춤형 SLA",
				"b": "감사 로그",
				"v": "교육 세션",
				"d": "border-primary bg-primary/5 ring-1 ring-primary",
				"c": "border border-border text-foreground hover:bg-accent",
				"g": "영업팀 문의",
				"m": "시작하기"
			},
			"ru": {
				"u": "Стартовый",
				"x": "5 запусков бенчмарка в день",
				"f": "Поддержка сообщества",
				"s": "Публичные результаты",
				"r": "Профи",
				"w": "Безлимитные запуски",
				"a": "Все библиотеки",
				"p": "Приоритетная поддержка",
				"q": "Приватные результаты",
				"e": "Интеграция с CI",
				"n": "Исторические данные",
				"k": "Корпоративный",
				"h": "Индивидуальный",
				"l": "Все, что в Профи",
				"o": "Локальная установка",
				"t": "SSO и SAML",
				"j": "Выделенный менеджер",
				"i": "Индивидуальные SLA",
				"b": "Журналы аудита",
				"v": "Обучающие сессии",
				"d": "border-primary bg-primary/5 ring-1 ring-primary",
				"c": "border border-border text-foreground hover:bg-accent",
				"g": "Связаться с отделом продаж",
				"m": "Начать"
			}
		}
	}
};
var e = ({ children: e, value: t, additionalProps: n }) => {
	let r = [e];
	if (r.value = t, n) for (let e in n) r[e] = n[e];
	return new Proxy(r, { get(e, n, r) {
		return n === "value" ? t : n === "toString" ? () => String(t) : n === Symbol.toPrimitive ? (e) => e === "string" ? String(t) : e === "number" ? Number(t) : t : Reflect.get(e, n, r);
	} });
};
var t = (n) => {
	if (typeof n == "string") return n;
	let { type: r, props: i } = ((e) => {
		if (e?.props && typeof e.props.children == "object") {
			let n = [], { children: r } = e.props;
			return Object.keys(r ?? {}).forEach((e) => {
				n.push(t(r?.[e]));
			}), {
				...e,
				props: {
					...e.props,
					children: n
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
	})(n);
	return Dynamic({
		component: r ?? "span",
		...i,
		children: i.children
	});
};
var internationalization = {
	"locales": [
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
	"requiredLocales": [
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
	"strictMode": "inclusive",
	"defaultLocale": "en"
};
var routing = {
	"mode": "prefix-all",
	"storage": {
		"cookies": [{
			"name": "INTLAYER_LOCALE",
			"attributes": {}
		}],
		"headers": [{ "name": "x-intlayer-locale" }]
	},
	"basePath": ""
};
var TRANSLATION = "translation";
var OBJECT = "object";
var ARRAY = "array";
var deepTransformNode = (node, props) => {
	for (const plugin of props.plugins ?? []) if (plugin.canHandle(node)) return plugin.transform(node, props, (node, props) => deepTransformNode(node, props));
	if (node === null || typeof node !== "object") return node;
	if (node.$$typeof !== void 0 || node.__v_isVNode !== void 0 || node._isVNode !== void 0 || node.isJSX !== void 0 || typeof node === "function") return node;
	if (Array.isArray(node)) return node.map((child, index) => {
		return deepTransformNode(child, {
			...props,
			children: child,
			keyPath: [...props.keyPath, {
				type: ARRAY,
				key: index
			}]
		});
	});
	const result = {};
	for (const key in node) Object.defineProperty(result, key, {
		enumerable: true,
		configurable: true,
		get: function() {
			const childProps = {
				...props,
				children: node[key],
				keyPath: [...props.keyPath, {
					type: OBJECT,
					key
				}]
			};
			const transformed = deepTransformNode(node[key], childProps);
			Object.defineProperty(this, key, {
				value: transformed,
				enumerable: true,
				configurable: true
			});
			return transformed;
		}
	});
	return result;
};
var isPlainObject = (value) => {
	if (value === null || typeof value !== "object") return false;
	if (typeof value.then === "function") return false;
	if (value.$$typeof !== void 0 || value.__v_isVNode !== void 0 || value._isVNode !== void 0 || value.isJSX !== void 0) return false;
	const proto = Object.getPrototypeOf(value);
	return proto === Object.prototype || proto === null || Array.isArray(value);
};
var deepMerge = (target, source) => {
	if (target === void 0) return source;
	if (source === void 0) return target;
	if (Array.isArray(target)) return target;
	if (isPlainObject(target) && isPlainObject(source)) {
		const result = { ...target };
		for (const key of Object.keys(source)) {
			if (key === "__proto__" || key === "constructor" || source[key] === void 0) continue;
			result[key] = target[key] !== void 0 ? deepMerge(target[key], source[key]) : source[key];
		}
		return result;
	}
	return target;
};
var getTranslation = (languageContent, locale, fallback) => {
	const get = (loc) => languageContent[loc];
	const seen = /* @__PURE__ */ new Set();
	const locales = [];
	const addLocale = (loc) => {
		if (loc && !seen.has(loc)) {
			seen.add(loc);
			locales.push(loc);
		}
	};
	addLocale(locale);
	if (locale.includes("-")) addLocale(locale.split("-")[0]);
	addLocale(fallback);
	if (fallback?.includes("-")) addLocale(fallback.split("-")[0]);
	const results = [];
	for (const loc of locales) {
		const val = get(loc);
		if (val === void 0) continue;
		if (typeof val === "string") {
			if (results.length === 0) return val;
			continue;
		}
		results.push(val);
	}
	if (results.length === 0) return void 0;
	if (results.length === 1) return results[0];
	if (Array.isArray(results[0])) return results[0];
	return results.reduce((acc, curr) => deepMerge(acc, curr));
};
var fallbackPlugin = {
	id: "fallback-plugin",
	canHandle: () => false,
	transform: (node) => node
};
var translationPlugin = (locale, fallback) => process.env["INTLAYER_NODE_TYPE_TRANSLATION"] === "false" ? fallbackPlugin : {
	id: "translation-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "translation",
	transform: (node, props, deepTransformNode) => {
		const original = node["translation"] ?? {};
		const result = {};
		for (const key in original) {
			const childProps = {
				...props,
				children: original[key],
				keyPath: [...props.keyPath, {
					type: TRANSLATION,
					key
				}]
			};
			result[key] = deepTransformNode(original[key], childProps);
		}
		return getTranslation(result, locale, fallback);
	}
};
var enumerationPlugin = fallbackPlugin;
var conditionPlugin = fallbackPlugin;
var insertionPlugin = fallbackPlugin;
var genderPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	conditionPlugin,
	insertionPlugin,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin
];
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
var getDictionary = (dictionary, locale, plugins = getBasePlugins(locale)) => {
	const props = {
		dictionaryKey: dictionary.key,
		dictionaryPath: dictionary.filePath,
		keyPath: [],
		plugins
	};
	return getContent(dictionary.content, props, plugins);
}, S$1 = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (t, { plugins: a, ...o }) => e({
		...o,
		value: o.children,
		children: o.children
	})
}, C = process.env.INTLAYER_NODE_TYPE_SOLID_NODE === "false" ? fallbackPlugin : {
	id: "solid-node-plugin",
	canHandle: (e) => typeof e == "object" && e?.props !== void 0 || typeof Node < "u" && e instanceof Node,
	transform: (a, { plugins: o, ...s }) => e({
		...s,
		value: "[[solid-element]]",
		children: typeof Node < "u" && a instanceof Node ? a : t(a)
	})
}, T = fallbackPlugin, D = fallbackPlugin, O = fallbackPlugin, k = /* @__PURE__ */ new Map(), A = (e, t = !0) => {
	let n = `${e ?? internationalization.defaultLocale}_${t}`;
	if (k.has(n)) return k.get(n);
	let r = [
		translationPlugin(e ?? internationalization.defaultLocale, t ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		conditionPlugin,
		nestedPlugin(e ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		S$1,
		C,
		T,
		D,
		O
	];
	return k.set(n, r), r;
};
var n = (n, r) => getDictionary(n, r, A(r));
var TREE_SHAKE_STORAGE_COOKIES = process.env["INTLAYER_ROUTING_STORAGE_COOKIES"] === "false";
process.env["INTLAYER_ROUTING_STORAGE_HEADERS"];
var getLocaleFromStorageClient = (options = localeStorageOptions) => {
	const { locales } = internationalization;
	if (options?.isCookieEnabled === false) return void 0;
	const isValidLocale = (value) => !!value && locales.includes(value);
	if (!TREE_SHAKE_STORAGE_COOKIES) for (let i = 0; i < (routing.storage.cookies ?? []).length; i++) try {
		const value = options?.getCookie?.(routing.storage.cookies[i].name);
		if (isValidLocale(value)) return value;
	} catch {}
}, localeStorageOptions = {
	getCookie: (name) => document.cookie.split(";").find((c) => c.trim().startsWith(`${name}=`))?.split("=")[1],
	getLocaleStorage: (name) => localStorage.getItem(name),
	getSessionStorage: (name) => sessionStorage.getItem(name),
	isCookieEnabled: true,
	setCookieStore: (name, value, attributes) => cookieStore.set({
		name,
		value,
		path: attributes.path,
		domain: attributes.domain,
		expires: attributes.expires,
		sameSite: attributes.sameSite
	}),
	setCookieString: (_name, cookie) => {
		document.cookie = cookie;
	},
	setSessionStorage: (name, value) => sessionStorage.setItem(name, value),
	setLocaleStorage: (name, value) => localStorage.setItem(name, value)
}, a = getLocaleFromStorageClient(localeStorageOptions), y = createContext({
	locale: () => a ?? internationalization?.defaultLocale,
	setLocale: () => null
});
var i = (i, a) => {
	let o = useContext(y) ?? {};
	return createMemo(() => n(i, a ?? o?.locale?.()));
};
var _tmpl$ = template(`<div class="grid gap-6 md:grid-cols-3">`), _tmpl$2 = template(`<div><h3 class="text-lg font-semibold text-foreground"></h3><div class=my-4><span class="text-3xl font-bold text-foreground"></span><span class="text-sm text-muted-foreground"></span></div><ul class="mb-6 flex-1 space-y-2"></ul><button type=button>`), _tmpl$3 = template(`<li class="flex items-center gap-2 text-sm text-muted-foreground"><span class=text-primary>✓</span> `);
function PricingTiers() {
	const content = i(pricing_tiers_default);
	const tiers = [
		{
			name: content().starter.value,
			price: "$0",
			period: "forever",
			features: [
				content().x5BenchmarkRunsday.value,
				"3 libraries",
				content().communitySupport.value,
				content().publicResults.value
			]
		},
		{
			name: content().pro.value,
			price: "$29",
			period: "/month",
			features: [
				content().unlimitedRuns.value,
				content().allLibraries.value,
				content().prioritySupport.value,
				content().privateResults.value,
				content().ciIntegration.value,
				content().historicalData.value
			],
			highlighted: true
		},
		{
			name: content().enterprise.value,
			price: content().custom.value,
			period: "",
			features: [
				content().everythingInPro.value,
				content().onPremiseOption.value,
				content().ssoSaml.value,
				content().dedicatedAccountManager.value,
				content().customSlas.value,
				content().auditLogs.value,
				content().trainingSessions.value
			]
		}
	];
	return (() => {
		var _el$ = _tmpl$();
		insert(_el$, createComponent(For, {
			each: tiers,
			children: (t) => (() => {
				var _el$2 = _tmpl$2(), _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling, _el$5 = _el$4.firstChild, _el$6 = _el$5.nextSibling, _el$7 = _el$4.nextSibling, _el$8 = _el$7.nextSibling;
				insert(_el$3, () => t.name);
				insert(_el$5, () => t.price);
				insert(_el$6, () => t.period);
				insert(_el$7, createComponent(For, {
					get each() {
						return t.features;
					},
					children: (f) => (() => {
						var _el$9 = _tmpl$3();
						_el$9.firstChild.nextSibling;
						insert(_el$9, f, null);
						return _el$9;
					})()
				}));
				insert(_el$8, (() => {
					var _c$ = memo(() => t.name === content().enterprise.value);
					return () => _c$() ? content().contactSales.value : content().getStarted.value;
				})());
				effect((_p$) => {
					var _v$ = `flex flex-col rounded-lg border p-6 ${t.highlighted ? content().borderPrimaryBgPrimary5Ring.value : "border-border bg-card"}`, _v$2 = `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${t.highlighted ? "bg-primary text-primary-foreground" : content().borderBorderBorderTextForeground.value}`;
					_v$ !== _p$.e && className(_el$2, _p$.e = _v$);
					_v$2 !== _p$.t && className(_el$8, _p$.t = _v$2);
					return _p$;
				}, {
					e: void 0,
					t: void 0
				});
				return _el$2;
			})()
		}));
		return _el$;
	})();
}
export { PricingTiers as default };
