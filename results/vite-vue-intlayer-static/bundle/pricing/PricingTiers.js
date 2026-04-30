import { Fragment, computed, createElementBlock, createElementVNode, createTextVNode, defineComponent, getCurrentInstance, h, inject, isRef, markRaw, normalizeClass, openBlock, ref, renderList, shallowRef, toDisplayString, toValue, watch } from "vue";
var pricing_tiers_default = {
	key: "pricing-tiers",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"l": "Starter",
				"n": "$0",
				"m": "forever",
				"k": [
					"5 benchmark runs/day",
					"3 libraries",
					"Community support",
					"Public results"
				],
				"h": "Pro",
				"j": "$29",
				"i": "/month",
				"g": [
					"Unlimited runs",
					"All libraries",
					"Priority support",
					"Private results",
					"CI integration",
					"Historical data"
				],
				"c": "Enterprise",
				"e": "Custom",
				"d": "",
				"b": [
					"Everything in Pro",
					"On-premise option",
					"SSO & SAML",
					"Dedicated account manager",
					"Custom SLAs",
					"Audit logs",
					"Training sessions"
				],
				"a": "Contact Sales",
				"f": "Get Started"
			},
			"fr": {
				"l": "Starter",
				"n": "0 €",
				"m": "pour toujours",
				"k": [
					"5 exécutions de benchmark / jour",
					"3 bibliothèques",
					"Support communautaire",
					"Résultats publics"
				],
				"h": "Pro",
				"j": "29 €",
				"i": "/ mois",
				"g": [
					"Exécutions illimitées",
					"Toutes les bibliothèques",
					"Support prioritaire",
					"Résultats privés",
					"Intégration CI",
					"Historique"
				],
				"c": "Enterprise",
				"e": "Sur mesure",
				"d": "",
				"b": [
					"Tout le Pro",
					"Option on-premise",
					"SSO et SAML",
					"Account manager dédié",
					"SLA sur mesure",
					"Journaux d'audit",
					"Sessions de formation"
				],
				"a": "Contacter les ventes",
				"f": "Commencer"
			},
			"es": {
				"l": "Starter",
				"n": "0 $",
				"m": "para siempre",
				"k": [
					"5 ejecuciones de benchmark al día",
					"3 bibliotecas",
					"Soporte de la comunidad",
					"Resultados públicos"
				],
				"h": "Pro",
				"j": "29 $",
				"i": "/mes",
				"g": [
					"Ejecuciones ilimitadas",
					"Todas las bibliotecas",
					"Soporte prioritario",
					"Resultados privados",
					"Integración CI",
					"Datos históricos"
				],
				"c": "Enterprise",
				"e": "Personalizado",
				"d": "",
				"b": [
					"Todo lo de Pro",
					"Opción local",
					"SSO y SAML",
					"Gerente de cuenta dedicado",
					"SLAs personalizados",
					"Registros de auditoría",
					"Sesiones de formación"
				],
				"a": "Contactar ventas",
				"f": "Comenzar"
			},
			"de": {
				"l": "Starter",
				"n": "0 €",
				"m": "für immer",
				"k": [
					"5 Benchmark-Durchläufe/Tag",
					"3 Bibliotheken",
					"Community-Support",
					"Öffentliche Ergebnisse"
				],
				"h": "Pro",
				"j": "29 €",
				"i": "/Monat",
				"g": [
					"Unbegrenzte Durchläufe",
					"Alle Bibliotheken",
					"Prioritäts-Support",
					"Private Ergebnisse",
					"CI-Integration",
					"Historische Daten"
				],
				"c": "Enterprise",
				"e": "Individuell",
				"d": "",
				"b": [
					"Alles in Pro",
					"On-Premise-Option",
					"SSO & SAML",
					"Dedizierter Account Manager",
					"Benutzerdefinierte SLAs",
					"Audit-Protokolle",
					"Schulungssitzungen"
				],
				"a": "Vertrieb kontaktieren",
				"f": "Erste Schritte"
			},
			"it": {
				"l": "Starter",
				"n": "0 €",
				"m": "per sempre",
				"k": [
					"5 esecuzioni benchmark/giorno",
					"3 librerie",
					"Supporto della comunità",
					"Risultati pubblici"
				],
				"h": "Pro",
				"j": "29 €",
				"i": "/mese",
				"g": [
					"Esecuzioni illimitate",
					"Tutte le librerie",
					"Supporto prioritario",
					"Risultati privati",
					"Integrazione CI",
					"Dati storici"
				],
				"c": "Enterprise",
				"e": "Personalizzato",
				"d": "",
				"b": [
					"Tutto in Pro",
					"Opzione on-premise",
					"SSO e SAML",
					"Account manager dedicato",
					"SLA personalizzati",
					"Log di audit",
					"Sessioni di formazione"
				],
				"a": "Contatta l'ufficio vendite",
				"f": "Inizia"
			},
			"pt": {
				"l": "Starter",
				"n": "0 $",
				"m": "para sempre",
				"k": [
					"5 execuções de benchmark/dia",
					"3 bibliotecas",
					"Suporte da comunidade",
					"Resultados públicos"
				],
				"h": "Pro",
				"j": "29 $",
				"i": "/mês",
				"g": [
					"Execuções ilimitadas",
					"Todas as bibliotecas",
					"Suporte prioritário",
					"Resultados privados",
					"Integração CI",
					"Dados históricos"
				],
				"c": "Enterprise",
				"e": "Personalizado",
				"d": "",
				"b": [
					"Tudo no Pro",
					"Opção on-premise",
					"SSO e SAML",
					"Gerente de conta dedicado",
					"SLAs personalizados",
					"Logs de auditoria",
					"Sessões de treinamento"
				],
				"a": "Contatar Vendas",
				"f": "Começar"
			},
			"zh": {
				"l": "入门版",
				"n": "0 美元",
				"m": "永久",
				"k": [
					"每天 5 次基准测试",
					"3 个库",
					"社区支持",
					"公开结果"
				],
				"h": "专业版",
				"j": "29 美元",
				"i": "/月",
				"g": [
					"无限次运行",
					"所有库",
					"优先支持",
					"私人结果",
					"CI 集成",
					"历史数据"
				],
				"c": "企业版",
				"e": "自定义",
				"d": "",
				"b": [
					"包含专业版所有功能",
					"本地部署选项",
					"SSO 和 SAML",
					"专属客户经理",
					"定制 SLA",
					"审计日志",
					"培训课程"
				],
				"a": "联系销售",
				"f": "开始使用"
			},
			"ja": {
				"l": "スターター",
				"n": "0ドル",
				"m": "永久に",
				"k": [
					"1日5回のベンチマーク実行",
					"3つのライブラリ",
					"コミュニティサポート",
					"公開結果"
				],
				"h": "プロ",
				"j": "29ドル",
				"i": "/月",
				"g": [
					"実行回数無制限",
					"すべてのライブラリ",
					"優先サポート",
					"非公開結果",
					"CI統合",
					"履歴データ"
				],
				"c": "エンタープライズ",
				"e": "カスタム",
				"d": "",
				"b": [
					"Proのすべての機能",
					"オンプレミスオプション",
					"SSOおよびSAML",
					"専任のアカウントマネージャー",
					"カスタムSLA",
					"監査ログ",
					"トレーニングセッション"
				],
				"a": "営業に連絡",
				"f": "開始する"
			},
			"ko": {
				"l": "스타터",
				"n": "0달러",
				"m": "영구적으로",
				"k": [
					"하루 5회 벤치마크 실행",
					"3개 라이브러리",
					"커뮤니티 지원",
					"공개 결과"
				],
				"h": "프로",
				"j": "29달러",
				"i": "/월",
				"g": [
					"무제한 실행",
					"모든 라이브러리",
					"우선 지원",
					"비공개 결과",
					"CI 통합",
					"기록 데이터"
				],
				"c": "엔터프라이즈",
				"e": "맞춤형",
				"d": "",
				"b": [
					"프로의 모든 기능 포함",
					"온프레미스 옵션",
					"SSO 및 SAML",
					"전담 어카운트 매니저",
					"맞춤형 SLA",
					"감사 로그",
					"교육 세션"
				],
				"a": "영업팀 문의",
				"f": "시작하기"
			},
			"ru": {
				"l": "Начальный",
				"n": "0 $",
				"m": "навсегда",
				"k": [
					"5 запусков бенчмарков в день",
					"3 библиотеки",
					"Поддержка сообщества",
					"Публичные результаты"
				],
				"h": "Профессиональный",
				"j": "29 $",
				"i": "/мес",
				"g": [
					"Неограниченное количество запусков",
					"Все библиотеки",
					"Приоритетная поддержка",
					"Приватные результаты",
					"Интеграция с CI",
					"Исторические данные"
				],
				"c": "Предприятие",
				"e": "Индивидуально",
				"d": "",
				"b": [
					"Все функции Pro",
					"Локальное развертывание",
					"SSO и SAML",
					"Выделенный менеджер",
					"Индивидуальные SLA",
					"Журналы аудита",
					"Сессии по обучению"
				],
				"a": "Связаться с отделом продаж",
				"f": "Начать"
			}
		}
	}
};
var n$1 = ({ value: r, children: i, additionalProps: a = {} }) => {
	let o = ref(r), s = typeof i == "function" ? (e) => i(e) : () => i, c = (e) => (o.value, s(e)), l = ((e) => c(e));
	return Object.setPrototypeOf(l, String.prototype), Object.assign(l, {
		render: c,
		toString: () => String(o.value ?? ""),
		valueOf: () => o.value,
		[Symbol.toPrimitive]: () => o.value,
		toJSON: () => o.value,
		get raw() {
			return o.value;
		},
		set raw(e) {
			o.value = e;
		},
		get value() {
			return o.value;
		},
		use(e) {
			return n$1({
				value: o.value,
				children: () => s(e),
				additionalProps: a
			});
		},
		__update(e) {
			s = e.render, this.raw = e.raw;
		},
		...a
	}), markRaw(l);
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
var TREE_SHAKE_TRANSLATION = process.env["INTLAYER_NODE_TYPE_TRANSLATION"] === "false";
var fallbackPlugin = {
	id: "fallback-plugin",
	canHandle: () => false,
	transform: (node) => node
};
var translationPlugin = (locale, fallback) => TREE_SHAKE_TRANSLATION ? fallbackPlugin : {
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
}), getDictionary = (dictionary, locale, plugins = getBasePlugins(locale)) => {
	const props = {
		dictionaryKey: dictionary.key,
		dictionaryPath: dictionary.filePath,
		keyPath: [],
		plugins
	};
	return getContent(dictionary.content, props, plugins);
}, b$1 = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (t, { children: n, ...r }) => {
		let i = (t) => n$1({
			...r,
			value: t,
			children: t
		}), s = i(n);
		if (typeof n != "function") return s;
		let c = (...e) => i(n(...e));
		Object.setPrototypeOf(c, Object.getPrototypeOf(s));
		for (let e of Object.getOwnPropertyNames(s)) {
			let t = Object.getOwnPropertyDescriptor(s, e);
			t && Object.defineProperty(c, e, t);
		}
		for (let e of Object.getOwnPropertySymbols(s)) {
			let t = Object.getOwnPropertyDescriptor(s, e);
			t && Object.defineProperty(c, e, t);
		}
		return markRaw(c);
	}
}, S = fallbackPlugin, w = fallbackPlugin, T = fallbackPlugin, E = /* @__PURE__ */ new Map(), D = (e, t = !0) => {
	let n = `${e ?? internationalization.defaultLocale}_${t}`;
	if (E.has(n)) return E.get(n);
	let r = [
		translationPlugin(e ?? internationalization.defaultLocale, t ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		conditionPlugin,
		nestedPlugin(e ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		b$1,
		S,
		w,
		T
	];
	return E.set(n, r), r;
}, n = (n, r) => getDictionary(n, r, D(r)), i = Symbol("intlayer");
var m = (e, t) => t.reduce((e, t) => e?.[t], e), h$1 = (e) => typeof e == "object" && !!e, g = (e) => typeof e == "function" || h$1(e) && ("render" in e || "setup" in e), _ = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e, v = (e) => markRaw(defineComponent({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : g(t) ? h(t) : Array.isArray(t) ? h("span", t) : t;
		};
	}
})), y = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return v(() => e.value);
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
}), b = (r, a) => {
	let c = getCurrentInstance() ? inject(i) : void 0, b = isRef(c?.locale) ? c.locale : ref(c?.locale ?? internationalization.defaultLocale), x = computed(() => (a === void 0 ? void 0 : toValue(a)) ?? b.value), S = shallowRef({});
	watch([() => toValue(r), () => x.value], ([t, n$2]) => {
		S.value = n(t, n$2);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let C = (e) => new Proxy({}, {
		get(t, r, i) {
			if (r === "__v_isRef") return !0;
			let a = computed(() => m(S.value, e));
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return v(() => a.value);
			if (r === "$raw") return a;
			if (r === Symbol.toPrimitive) return () => a.value;
			let o = e.concat(r), s = m(S.value, o);
			if (s === void 0 || h$1(s) && !g(s)) return C(o);
			if (_(s)) return y(computed(() => m(S.value, o)));
			let c = computed(() => m(S.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = m(S.value, e);
			return h$1(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return C([]);
};
var PricingTiers_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "PricingTiers",
	setup(__props, { expose: __expose }) {
		__expose();
		const { l: starterName, n: starterPrice, m: starterPeriod, k: starterFeatures, h: proName, j: proPrice, i: proPeriod, g: proFeatures, c: enterpriseName, e: enterprisePrice, d: enterprisePeriod, b: enterpriseFeatures, a: contactSales, f: getStarted } = b(pricing_tiers_default);
		const __returned__ = {
			starterName,
			starterPrice,
			starterPeriod,
			starterFeatures,
			proName,
			proPrice,
			proPeriod,
			proFeatures,
			enterpriseName,
			enterprisePrice,
			enterprisePeriod,
			enterpriseFeatures,
			contactSales,
			getStarted,
			tiers: computed(() => [
				{
					name: starterName.value,
					price: starterPrice.value,
					period: starterPeriod.value,
					features: starterFeatures.value
				},
				{
					name: proName.value,
					price: proPrice.value,
					period: proPeriod.value,
					features: proFeatures.value,
					highlighted: true
				},
				{
					name: enterpriseName.value,
					price: enterprisePrice.value,
					period: enterprisePeriod.value,
					features: enterpriseFeatures.value
				}
			])
		};
		Object.defineProperty(__returned__, "__isScriptSetup", {
			enumerable: false,
			value: true
		});
		return __returned__;
	}
});
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
var _hoisted_1 = { class: "grid gap-6 md:grid-cols-3" };
var _hoisted_2 = { class: "text-lg font-semibold text-foreground" };
var _hoisted_3 = { class: "my-4" };
var _hoisted_4 = { class: "text-3xl font-bold text-foreground" };
var _hoisted_5 = { class: "text-sm text-muted-foreground" };
var _hoisted_6 = { class: "mb-6 flex-1 space-y-2" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList($setup.tiers, (t) => {
		return openBlock(), createElementBlock("div", {
			key: t.name,
			class: normalizeClass(["flex flex-col rounded-lg border p-6", t.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"])
		}, [
			createElementVNode("h3", _hoisted_2, toDisplayString(t.name), 1),
			createElementVNode("div", _hoisted_3, [createElementVNode("span", _hoisted_4, toDisplayString(t.price), 1), createElementVNode("span", _hoisted_5, toDisplayString(t.period), 1)]),
			createElementVNode("ul", _hoisted_6, [(openBlock(true), createElementBlock(Fragment, null, renderList(t.features, (f) => {
				return openBlock(), createElementBlock("li", {
					key: f,
					class: "flex items-center gap-2 text-sm text-muted-foreground"
				}, [_cache[0] || (_cache[0] = createElementVNode("span", { class: "text-primary" }, "✓", -1)), createTextVNode(" " + toDisplayString(f), 1)]);
			}), 128))]),
			createElementVNode("button", {
				type: "button",
				class: normalizeClass(["w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90", t.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"])
			}, toDisplayString(t.name === $setup.enterpriseName ? $setup.contactSales : $setup.getStarted), 3)
		], 2);
	}), 128))]);
}
var PricingTiers_default = _plugin_vue_export_helper_default(PricingTiers_vue_vue_type_script_setup_true_lang_default, [["render", _sfc_render], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/vue-intlayer-app/src/components/pages/pricing/PricingTiers.vue"]]);
export { PricingTiers_default as default };
