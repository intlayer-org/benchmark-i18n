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
	if (Object.assign(l, {
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
	}), r != null) {
		let e = Object(r), t = Object.getPrototypeOf(e);
		for (let n of Object.getOwnPropertyNames(t)) {
			if (n === "constructor" || n in l) continue;
			let t = e[n];
			typeof t == "function" && Object.defineProperty(l, n, {
				value: t.bind(r),
				writable: !0,
				configurable: !0
			});
		}
	}
	return markRaw(l);
};
var pluginsIdentities = /* @__PURE__ */ new WeakMap();
var nextPluginsIdentity = 0;
var getPluginsCacheKey = (plugins) => {
	if (!plugins) return "base";
	const existingIdentity = pluginsIdentities.get(plugins);
	if (existingIdentity) return existingIdentity;
	nextPluginsIdentity += 1;
	const identity = `p${nextPluginsIdentity}`;
	pluginsIdentities.set(plugins, identity);
	return identity;
};
var MAX_ENTRIES_PER_DICTIONARY = 256;
var transformCache = /* @__PURE__ */ new WeakMap();
var isMemoizableDictionary = (value) => value !== null && typeof value === "object";
var getDictionaryTransformCacheKey = (locale, selectorCacheKey, plugins) => `${locale}_${selectorCacheKey}_${getPluginsCacheKey(plugins)}`;
var readTransformCache = (dictionary, cacheKey) => {
	if (!isMemoizableDictionary(dictionary)) return { hit: false };
	const entries = transformCache.get(dictionary);
	if (!entries?.has(cacheKey)) return { hit: false };
	return {
		hit: true,
		content: entries.get(cacheKey)
	};
};
var writeTransformCache = (dictionary, cacheKey, content) => {
	if (!isMemoizableDictionary(dictionary)) return content;
	let entries = transformCache.get(dictionary);
	if (!entries) {
		entries = /* @__PURE__ */ new Map();
		transformCache.set(dictionary, entries);
	}
	if (entries.size >= MAX_ENTRIES_PER_DICTIONARY) entries.clear();
	entries.set(cacheKey, content);
	return content;
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
	for (const key in node) {
		const childProps = {
			...props,
			children: node[key],
			keyPath: [...props.keyPath, {
				type: OBJECT,
				key
			}]
		};
		if (props.eager) {
			result[key] = deepTransformNode(node[key], childProps);
			continue;
		}
		Object.defineProperty(result, key, {
			enumerable: true,
			configurable: true,
			get: function() {
				const transformed = deepTransformNode(node[key], childProps);
				Object.defineProperty(this, key, {
					value: transformed,
					enumerable: true,
					configurable: true
				});
				return transformed;
			}
		});
	}
	return result;
};
var DEFAULT_VARIANT_ID = "default";
var SEGMENT_UNSAFE_CHARS = /[^A-Za-z0-9._&=-]/g;
var COMPONENT_UNSAFE_CHARS = /[^A-Za-z0-9._-]/g;
var percentEncodeChar = (char) => `%${char.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`;
var encodeSegmentText = (raw, unsafeChars) => {
	if (raw === "") return "%";
	const encoded = raw.replace(unsafeChars, percentEncodeChar);
	if (encoded === "." || encoded === "..") return encoded.replace(/\./g, "%002E");
	return encoded;
};
var serializeVariant = (variant) => {
	if (variant === void 0) return DEFAULT_VARIANT_ID;
	if (typeof variant === "string") return encodeSegmentText(variant, SEGMENT_UNSAFE_CHARS);
	return Object.keys(variant).sort().map((field) => `${encodeSegmentText(field, COMPONENT_UNSAFE_CHARS)}=${encodeSegmentText(String(variant[field]), COMPONENT_UNSAFE_CHARS)}`).join("&");
};
var serializeVariantChain = (variant) => {
	if (!Array.isArray(variant)) return [serializeVariant(variant)];
	if (variant.length === 0) return [DEFAULT_VARIANT_ID];
	return variant.map(serializeVariant);
};
var resolveEffectiveVariantId = (requestedVariantIds, isVariantIdDeclared) => {
	for (const requestedVariantId of requestedVariantIds) if (isVariantIdDeclared(requestedVariantId)) return requestedVariantId;
	return isVariantIdDeclared("default") ? DEFAULT_VARIANT_ID : requestedVariantIds[0] ?? "default";
};
var compositeIdMatchesSelector = (compositeId, qualifierTypes, selector, effectiveVariantId) => {
	const segments = compositeId.split("/");
	return qualifierTypes.every((qualifierType, index) => {
		if (qualifierType === "variant") return segments[index] === effectiveVariantId;
		return selector?.item === void 0 || segments[index] === String(selector.item);
	});
};
var isQualifiedDictionaryGroup = (value) => typeof value === "object" && value !== null && "qualifierTypes" in value && Array.isArray(value.qualifierTypes) && "content" in value;
var reconstructQualifiedEntry = (group, compositeId) => {
	const segments = compositeId.split("/");
	const entry = {
		key: group.key,
		content: group.content[compositeId]
	};
	group.qualifierTypes.forEach((qualifierType, index) => {
		if (qualifierType === "variant") entry.variant = segments[index];
		else if (qualifierType === "item") entry.item = Number(segments[index]);
	});
	return entry;
};
var resolveQualifiedDictionary = (dictionaryOrGroup, selector) => {
	if (!isQualifiedDictionaryGroup(dictionaryOrGroup)) return dictionaryOrGroup;
	const { qualifierTypes, content } = dictionaryOrGroup;
	const itemAxisOpen = qualifierTypes.includes("item") && selector?.item === void 0;
	const compositeIds = Object.keys(content);
	const variantIndex = qualifierTypes.indexOf("variant");
	const effectiveVariantId = variantIndex === -1 ? DEFAULT_VARIANT_ID : resolveEffectiveVariantId(serializeVariantChain(selector?.variant), (variantId) => compositeIds.some((compositeId) => compositeId.split("/")[variantIndex] === variantId));
	const matchedEntries = compositeIds.filter((compositeId) => compositeIdMatchesSelector(compositeId, qualifierTypes, selector, effectiveVariantId)).map((compositeId) => reconstructQualifiedEntry(dictionaryOrGroup, compositeId));
	if (itemAxisOpen) return matchedEntries.sort((left, right) => (left.item ?? 0) - (right.item ?? 0));
	return matchedEntries[0] ?? null;
};
var parseDictionarySelector = (localeOrSelector) => {
	if (typeof localeOrSelector === "object" && localeOrSelector !== null) return {
		locale: localeOrSelector.locale,
		selector: localeOrSelector
	};
	return { locale: localeOrSelector };
};
var getDictionarySelectorCacheKey = (selector) => {
	if (!selector) return "";
	return Object.keys(selector).filter((selectorKey) => selectorKey !== "locale").sort().map((selectorKey) => {
		const value = selector[selectorKey];
		return `${selectorKey}:${selectorKey === "variant" ? serializeVariantChain(value).join(",") : String(value)}`;
	}).join("|");
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
var fallbackPlugin = {
	id: "fallback-plugin",
	canHandle: () => false,
	transform: (node) => node
};
var translationPlugin = (locale, fallback) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? fallbackPlugin : {
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
var pluralPlugin = (locale) => fallbackPlugin;
var conditionPlugin = fallbackPlugin;
var insertionPlugin = fallbackPlugin;
var genderPlugin = fallbackPlugin;
var selectPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	conditionPlugin,
	insertionPlugin,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin,
	selectPlugin
];
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
var getDictionary = (dictionary, localeOrSelector, plugins) => {
	const { locale, selector } = parseDictionarySelector(localeOrSelector);
	const cacheKey = getDictionaryTransformCacheKey(locale ?? internationalization.defaultLocale, getDictionarySelectorCacheKey(selector), plugins);
	const cached = readTransformCache(dictionary, cacheKey);
	if (cached.hit) return cached.content;
	const appliedPlugins = plugins ?? getBasePlugins(locale);
	const resolved = resolveQualifiedDictionary(dictionary, selector);
	const transformDictionary = (resolvedDictionary) => {
		const props = {
			dictionaryKey: resolvedDictionary.key,
			dictionaryPath: resolvedDictionary.filePath,
			keyPath: [],
			plugins: appliedPlugins,
			nestedDictionaries: resolvedDictionary.nestedDictionaries
		};
		return getContent(resolvedDictionary.content, props, appliedPlugins);
	};
	if (resolved === null) return writeTransformCache(dictionary, cacheKey, null);
	if (Array.isArray(resolved)) return writeTransformCache(dictionary, cacheKey, resolved.map(transformDictionary));
	return writeTransformCache(dictionary, cacheKey, transformDictionary(resolved));
};
var T = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (n, { children: r, ...i }) => {
		let a = (t) => n$1({
			...i,
			value: t,
			children: t
		}), c = a(r);
		if (typeof r != "function") return c;
		let l = (...e) => {
			let t = r(...e);
			return a(t);
		};
		Object.setPrototypeOf(l, Object.getPrototypeOf(c));
		for (let e of Object.getOwnPropertyNames(c)) {
			let t = Object.getOwnPropertyDescriptor(c, e);
			t && Object.defineProperty(l, e, t);
		}
		for (let e of Object.getOwnPropertySymbols(c)) {
			let t = Object.getOwnPropertyDescriptor(c, e);
			t && Object.defineProperty(l, e, t);
		}
		return markRaw(l);
	}
};
var D = fallbackPlugin;
var k = fallbackPlugin;
var A = fallbackPlugin;
var j = /* @__PURE__ */ new Map();
var M = (e, t = !0) => {
	let n = `${e ?? internationalization.defaultLocale}_${t}`;
	if (j.has(n)) return j.get(n);
	let r = [
		translationPlugin(e ?? internationalization.defaultLocale, t ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		pluralPlugin(e ?? internationalization.defaultLocale),
		conditionPlugin,
		nestedPlugin(e ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		selectPlugin,
		T,
		D,
		k,
		A
	];
	return j.set(n, r), r;
};
var n = (n, r) => {
	return getDictionary(n, r, M(typeof r == "object" && r ? r.locale : r));
};
var i = Symbol("intlayer");
var g = (e, t) => t.reduce((e, t) => e?.[t], e);
var _ = (e) => typeof e == "object" && !!e;
var v = (e) => typeof e == "function" || _(e) && ("render" in e || "setup" in e);
var y = (e) => e != null && (typeof e == "object" || typeof e == "function") && "__update" in e && "render" in e && "raw" in e;
var b = (e) => markRaw(defineComponent({
	name: "IntlayerLeaf",
	setup() {
		return () => {
			let t = e();
			return t == null ? null : v(t) ? h(t) : Array.isArray(t) ? h("span", t) : t;
		};
	}
}));
var x = (e) => new Proxy({}, {
	get(t, n) {
		let r = e.value;
		if (n === "__v_isRef") return !0;
		if (n === "value") return r ?? "";
		if (n === "$raw") return e;
		if (n === "__v_skip") return !0;
		if (n === "c" || n === "asComponent") return b(() => e.value);
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
});
var S = (r, a) => {
	let c = getCurrentInstance() ? inject(i) : void 0, S = isRef(c?.locale) ? c.locale : ref(c?.locale ?? internationalization.defaultLocale), C = computed(() => {
		return {
			selector: void 0,
			locale: a === void 0 ? void 0 : toValue(a)
		};
	}), w = computed(() => C.value.locale ?? S.value), T = shallowRef({});
	watch([
		() => toValue(r),
		() => w.value,
		() => C.value.selector
	], ([t, n$2, r]) => {
		T.value = r ? n(t, {
			...r,
			locale: n$2
		}) : n(t, n$2);
	}, {
		immediate: !0,
		flush: "sync"
	});
	let E = (e) => new Proxy({}, {
		get(t, r, i) {
			let a = computed(() => g(T.value, e));
			if (typeof r == "symbol" || typeof r == "string" && (r.startsWith("__") || r.startsWith("$"))) return r === "__v_isRef" ? !0 : r === "$raw" ? a : r === Symbol.toPrimitive ? () => String(a.value ?? "") : Reflect.get(t, r, i);
			if (r === "value") return a.value ?? "";
			if (r === "then") return;
			if (r === "c" || r === "asComponent") return b(() => a.value);
			let o = e.concat(r), s = g(T.value, o);
			if (s === void 0 || _(s) && !v(s)) return E(o);
			if (y(s)) return x(computed(() => g(T.value, o)));
			if (typeof s == "function") {
				let t = g(T.value, e);
				return t != null && !Object.hasOwn(t, r) ? s.bind(t) : (...e) => g(T.value, o)?.(...e);
			}
			let c = computed(() => g(T.value, o));
			return new Proxy(c, { get(e, t, n) {
				return t === "value" ? e.value ?? "" : Reflect.get(e, t, n);
			} });
		},
		ownKeys() {
			let t = g(T.value, e);
			return _(t) ? Reflect.ownKeys(t) : [];
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return E([]);
};
var PricingTiers_vue_vue_type_script_setup_true_lang_default = defineComponent({
	__name: "PricingTiers",
	setup(__props, { expose: __expose }) {
		__expose();
		const { l: starterName, n: starterPrice, m: starterPeriod, k: starterFeatures, h: proName, j: proPrice, i: proPeriod, g: proFeatures, c: enterpriseName, e: enterprisePrice, d: enterprisePeriod, b: enterpriseFeatures, a: contactSales, f: getStarted } = S(pricing_tiers_default);
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
