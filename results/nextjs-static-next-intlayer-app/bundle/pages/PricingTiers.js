import { Fragment, createContext, createElement, isValidElement, useContext, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
var pricing_tiers_default = {
	key: "pricing-tiers",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"y": "Starter",
				"r": "$0",
				"l": "forever",
				"c": {
					"fields": ["runs"],
					"nodeType": "insertion",
					"insertion": "{{runs}} benchmark runs/day"
				},
				"o": {
					"fields": ["libs"],
					"nodeType": "insertion",
					"insertion": "{{libs}} libraries"
				},
				"e": "Community support",
				"w": "Public results",
				"v": "Pro",
				"s": "$29",
				"p": "/month",
				"aa": "Unlimited runs",
				"a": "All libraries",
				"t": "Priority support",
				"u": "Private results",
				"d": "CI integration",
				"n": "Historical data",
				"j": "Enterprise",
				"g": "Custom",
				"k": "Everything in Pro",
				"q": "On-premise option",
				"x": "SSO & SAML",
				"i": "Dedicated account manager",
				"h": "Custom SLAs",
				"b": "Audit logs",
				"z": "Training sessions",
				"f": "Contact Sales",
				"m": "Get Started"
			},
			"fr": {
				"y": "Starter",
				"r": "0 $",
				"l": "pour toujours",
				"c": {
					"fields": ["runs"],
					"nodeType": "insertion",
					"insertion": "{{runs}} lancements de benchmark/jour"
				},
				"o": {
					"fields": ["libs"],
					"nodeType": "insertion",
					"insertion": "{{libs}} bibliothèques"
				},
				"e": "Support de la communauté",
				"w": "Résultats publics",
				"v": "Pro",
				"s": "29 $",
				"p": "/mois",
				"aa": "Lancements illimités",
				"a": "Toutes les bibliothèques",
				"t": "Support prioritaire",
				"u": "Résultats privés",
				"d": "Intégration CI",
				"n": "Données historiques",
				"j": "Entreprise",
				"g": "Custom",
				"k": "Tout dans Pro",
				"q": "Option sur site",
				"x": "SSO & SAML",
				"i": "Gestionnaire de compte dédié",
				"h": "SLA personnalisés",
				"b": "Journaux d'audit",
				"z": "Sessions de formation",
				"f": "Contacter les ventes",
				"m": "Commencer"
			},
			"es": {
				"y": "Starter",
				"r": "0 $",
				"l": "para siempre",
				"c": {
					"fields": ["runs"],
					"nodeType": "insertion",
					"insertion": "{{runs}} ejecuciones de benchmark/día"
				},
				"o": {
					"fields": ["libs"],
					"nodeType": "insertion",
					"insertion": "{{libs}} bibliotecas"
				},
				"e": "Soporte de la comunidad",
				"w": "Resultados públicos",
				"v": "Pro",
				"s": "29 $",
				"p": "/mes",
				"aa": "Ejecuciones ilimitadas",
				"a": "Todas las bibliotecas",
				"t": "Soporte prioritario",
				"u": "Résultats privés",
				"d": "Integración de CI",
				"n": "Datos históricos",
				"j": "Personalizado",
				"g": "Custom",
				"k": "Todo en Pro",
				"q": "Opción local",
				"x": "SSO y SAML",
				"i": "Gerente de cuenta dedicado",
				"h": "SLA personalizados",
				"b": "Registros de auditoría",
				"z": "Sesiones de formación",
				"f": "Contactar a Ventas",
				"m": "Empezar"
			},
			"de": {
				"y": "Starter",
				"r": "0 $",
				"l": "für immer",
				"c": {
					"fields": ["runs"],
					"nodeType": "insertion",
					"insertion": "{{runs}} Benchmark-Läufe/Tag"
				},
				"o": {
					"fields": ["libs"],
					"nodeType": "insertion",
					"insertion": "{{libs}} Bibliotheken"
				},
				"e": "Community-Support",
				"w": "Öffentliche Ergebnisse",
				"v": "Pro",
				"s": "29 $",
				"p": "/Monat",
				"aa": "Unbegrenzte Läufe",
				"a": "Alle Bibliotheken",
				"t": "Prioritäts-Support",
				"u": "Private Ergebnisse",
				"d": "CI-Integration",
				"n": "Historische Daten",
				"j": "Enterprise",
				"g": "Benutzerdefiniert",
				"k": "Alles in Pro",
				"q": "On-Premise-Option",
				"x": "SSO & SAML",
				"i": "Dedizierter Account-Manager",
				"h": "Benutzerdefinierte SLAs",
				"b": "Audit-Logs",
				"z": "Schulungssitzungen",
				"f": "Vertrieb kontaktieren",
				"m": "Erste Schritte"
			},
			"it": {
				"y": "Starter",
				"r": "0 $",
				"l": "per sempre",
				"c": {
					"fields": ["runs"],
					"nodeType": "insertion",
					"insertion": "{{runs}} esecuzioni di benchmark/giorno"
				},
				"o": {
					"fields": ["libs"],
					"nodeType": "insertion",
					"insertion": "{{libs}} librerie"
				},
				"e": "Supporto della comunità",
				"w": "Risultati pubblici",
				"v": "Pro",
				"s": "29 $",
				"p": "/mese",
				"aa": "Esecuzioni illimitate",
				"a": "Tutte le librerie",
				"t": "Supporto prioritario",
				"u": "Risultati privati",
				"d": "Integrazione CI",
				"n": "Dati storici",
				"j": "Enterprise",
				"g": "Custom",
				"k": "Tutto in Pro",
				"q": "Opzione on-premise",
				"x": "SSO e SAML",
				"i": "Account manager dedicato",
				"h": "SLA personalizzati",
				"b": "Log di audit",
				"z": "Sessioni di formazione",
				"f": "Contatta le vendite",
				"m": "Inizia ora"
			},
			"pt": {
				"y": "Iniciante",
				"r": "0 $",
				"l": "para sempre",
				"c": {
					"fields": ["runs"],
					"nodeType": "insertion",
					"insertion": "{{runs}} execuções de benchmark/dia"
				},
				"o": {
					"fields": ["libs"],
					"nodeType": "insertion",
					"insertion": "{{libs}} bibliotecas"
				},
				"e": "Suporte da comunidade",
				"w": "Resultados públicos",
				"v": "Pro",
				"s": "29 $",
				"p": "/mês",
				"aa": "Execuções ilimitadas",
				"a": "Todas as bibliotecas",
				"t": "Suporte prioritário",
				"u": "Resultados privados",
				"d": "Integração de CI",
				"n": "Dados históricos",
				"j": "Personalizado",
				"g": "Personalizado",
				"k": "Tudo no Pro",
				"q": "Opção on-premise",
				"x": "SSO e SAML",
				"i": "Gerente de conta dedicado",
				"h": "SLAs personalizados",
				"b": "Logs de auditoria",
				"z": "Sessões de treinamento",
				"f": "Contatar Vendas",
				"m": "Começar"
			},
			"zh": {
				"y": "Starter",
				"r": "0 $",
				"l": "永久",
				"c": {
					"fields": ["runs"],
					"nodeType": "insertion",
					"insertion": "每天 {{runs}} 次基准测试运行"
				},
				"o": {
					"fields": ["libs"],
					"nodeType": "insertion",
					"insertion": "{{libs}} 个库"
				},
				"e": "社区支持",
				"w": "公共结果",
				"v": "Pro",
				"s": "29 $",
				"p": "/月",
				"aa": "无限运行",
				"a": "所有库",
				"t": "优先支持",
				"u": "私人结果",
				"d": "CI 集成",
				"n": "历史数据",
				"j": "企业版",
				"g": "定制价格",
				"k": "Pro 计划中的一切",
				"q": "本地部署选项",
				"x": "SSO & SAML",
				"i": "专属大客户经理",
				"h": "定制 SLA",
				"b": "审核日志",
				"z": "培训会议",
				"f": "联系销售人员",
				"m": "开始使用"
			},
			"ja": {
				"y": "スターター",
				"r": "0 $",
				"l": "永久",
				"c": {
					"fields": ["runs"],
					"nodeType": "insertion",
					"insertion": "毎日 {{runs}} 回のベンチマーク実行"
				},
				"o": {
					"fields": ["libs"],
					"nodeType": "insertion",
					"insertion": "{{libs}} 個のライブラリ"
				},
				"e": "コミュニティサポート",
				"w": "公開結果",
				"v": "プロ",
				"s": "29 $",
				"p": "/月",
				"aa": "無限の実行",
				"a": "すべてのライブラリ",
				"t": "優先サポート",
				"u": "プライベート結果",
				"d": "CI 統合",
				"n": "履歴データ",
				"j": "エンタープライズ",
				"g": "カスタム価格",
				"k": "Pro のすべて",
				"q": "オンプレミスオプション",
				"x": "SSO & SAML",
				"i": "専任のアカウントマネージャー",
				"h": "カスタム SLA",
				"b": "監査ログ",
				"z": "トレーニングセッション",
				"f": "営業に問い合わせる",
				"m": "使ってみる"
			},
			"ko": {
				"y": "스타터",
				"r": "0 $",
				"l": "영구적",
				"c": {
					"fields": ["runs"],
					"nodeType": "insertion",
					"insertion": "하루 {{runs}} 회의 벤치마크 실행"
				},
				"o": {
					"fields": ["libs"],
					"nodeType": "insertion",
					"insertion": "{{libs}} 개의 라이브러리"
				},
				"e": "커뮤니티 지원",
				"w": "공개 결과",
				"v": "프로",
				"s": "29 $",
				"p": "/월",
				"aa": "무제한 실행",
				"a": "모든 라이브러리",
				"t": "우선 지원",
				"u": "비공개 결과",
				"d": "CI 통합",
				"n": "기록 데이터",
				"j": "엔터프라이즈",
				"g": "맞춤형 가격",
				"k": "프로의 모든 기능",
				"q": "온프레미스 옵션",
				"x": "SSO & SAML",
				"i": "전담 어카운트 매니저",
				"h": "사용자 지정 SLA",
				"b": "감사 로그",
				"z": "교육 세션",
				"f": "영업 문의",
				"m": "시작하기"
			},
			"ru": {
				"y": "Starter",
				"r": "0 $",
				"l": "навсегда",
				"c": {
					"fields": ["runs"],
					"nodeType": "insertion",
					"insertion": "{{runs}} запусков бенчмарка в день"
				},
				"o": {
					"fields": ["libs"],
					"nodeType": "insertion",
					"insertion": "{{libs}} библиотек"
				},
				"e": "Сообщество поддержки",
				"w": "Публичные результаты",
				"v": "Pro",
				"s": "29 $",
				"p": "/месяц",
				"aa": "Неограниченное количество запусков",
				"a": "Все библиотеки",
				"t": "Приоритетная поддержка",
				"u": "Приватные результаты",
				"d": "Интеграция с CI",
				"n": "Исторические данные",
				"j": "Корпоративный",
				"g": "Индивидуальная цена",
				"k": "Все возможности Pro",
				"q": "Локальное развертывание",
				"x": "SSO и SAML",
				"i": "Выделенный менеджер",
				"h": "Индивидуальные SLA",
				"b": "Журналы аудита",
				"z": "Сессии обучения",
				"f": "Связаться с отделом продаж",
				"m": "Начать"
			}
		}
	}
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
			"attributes": { "path": "/" }
		}],
		"headers": [{ "name": "x-intlayer-locale" }]
	},
	"basePath": ""
};
var TREE_SHAKE_STORAGE_COOKIES = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var localeStorageOptions = {
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
};
var getLocaleFromStorageClient = (options = localeStorageOptions) => {
	const { locales } = internationalization;
	if (options?.isCookieEnabled === false) return void 0;
	const isValidLocale = (value) => !!value && locales.includes(value);
	if (!TREE_SHAKE_STORAGE_COOKIES) for (let i = 0; i < (routing.storage.cookies ?? []).length; i++) try {
		const value = options?.getCookie?.(routing.storage.cookies[i].name);
		if (isValidLocale(value)) return value;
	} catch {}
};
var isStoredLocaleCached = false;
var storedLocale;
var getCachedLocaleFromStorageClient = () => {
	if (typeof window === "undefined") return getLocaleFromStorageClient(localeStorageOptions);
	if (!isStoredLocaleCached) {
		storedLocale = getLocaleFromStorageClient(localeStorageOptions);
		isStoredLocaleCached = true;
	}
	return storedLocale;
};
var prototypeCache = /* @__PURE__ */ new Map();
var createIntlayerNodePrototype = (basePrototype, valuePrototype) => Object.create(new Proxy(basePrototype, {
	get: (target, property, receiver) => {
		if (typeof property !== "string" || property === "constructor" || property in target) return Reflect.get(target, property, receiver);
		const { value } = receiver;
		if (value === null || value === void 0) return void 0;
		const member = Object(value)[property];
		return typeof member === "function" ? member.bind(value) : member;
	},
	has: (target, property) => property in target || typeof property === "string" && property !== "constructor" && valuePrototype !== null && property in valuePrototype
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
});
var getIntlayerNodePrototype = (value, basePrototype = Object.prototype) => {
	const valueType = typeof value;
	const valueKey = value === null || value === void 0 ? null : valueType === "object" || valueType === "function" ? Object.getPrototypeOf(value) : valueType;
	let prototypes = prototypeCache.get(basePrototype);
	if (!prototypes) {
		prototypes = /* @__PURE__ */ new Map();
		prototypeCache.set(basePrototype, prototypes);
	}
	let prototype = prototypes.get(valueKey);
	if (!prototype) {
		prototype = createIntlayerNodePrototype(basePrototype, valueKey === null ? null : Object.getPrototypeOf(Object(value)));
		prototypes.set(valueKey, prototype);
	}
	return prototype;
};
var renderIntlayerNode = ({ children, value, additionalProps }) => Object.setPrototypeOf({
	...isValidElement(children) ? children : jsx(Fragment$1, { children }),
	value,
	...additionalProps
}, getIntlayerNodePrototype(value));
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
var ENUMERATION = "enumeration";
var PLURAL = "plural";
var CONDITION = "condition";
var INSERTION = "insertion";
var OBJECT = "object";
var ARRAY = "array";
var MARKDOWN = "markdown";
var HTML = "html";
var GENDER = "gender";
var SELECT = "select";
var getChildProps = (props, children, keyPathSegment) => ({
	...props,
	children,
	keyPath: [...props.keyPath, keyPathSegment]
});
var deepTransformNode = (node, props) => {
	for (const plugin of props.plugins ?? []) if (plugin.canHandle(node)) return plugin.transform(node, props, deepTransformNode);
	if (node === null || typeof node !== "object") return node;
	if (node.$$typeof !== void 0 || node.__v_isVNode !== void 0 || node._isVNode !== void 0 || node.isJSX !== void 0) return node;
	if (Array.isArray(node)) return node.map((child, index) => deepTransformNode(child, getChildProps(props, child, {
		type: ARRAY,
		key: index
	})));
	const result = {};
	for (const key in node) {
		const keyPathSegment = {
			type: OBJECT,
			key
		};
		if (props.eager) {
			result[key] = deepTransformNode(node[key], getChildProps(props, node[key], keyPathSegment));
			continue;
		}
		Object.defineProperty(result, key, {
			enumerable: true,
			configurable: true,
			get: function() {
				const transformed = deepTransformNode(node[key], getChildProps(props, node[key], keyPathSegment));
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
var getInsertion = (content, values) => content.replace(/\{\{\s*(.*?)\s*\}\}/g, (_, key) => {
	return (values[key.trim()] ?? "").toString();
});
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
	if (!isPlainObject(target) || !isPlainObject(source)) return target;
	let result = target;
	for (const key of Object.keys(source)) {
		const sourceValue = source[key];
		if (key === "__proto__" || key === "constructor" || sourceValue === void 0) continue;
		const targetValue = target[key];
		const merged = targetValue === void 0 ? sourceValue : typeof targetValue === "object" ? deepMerge(targetValue, sourceValue) : targetValue;
		if (merged === targetValue) continue;
		if (result === target) result = { ...target };
		result[key] = merged;
	}
	return result;
};
var getTranslation = (languageContent, locale, fallback) => {
	const get = (localeEl) => languageContent[localeEl];
	const exactMatch = get(locale);
	if (typeof exactMatch === "string") return exactMatch;
	const candidates = [
		locale,
		locale.split("-")[0],
		fallback,
		fallback?.split("-")[0]
	];
	const results = [];
	for (let index = 0; index < candidates.length; index++) {
		const candidate = candidates[index];
		if (!candidate || candidates.indexOf(candidate) < index) continue;
		const value = get(candidate);
		if (value === void 0) continue;
		if (typeof value === "string") {
			if (results.length === 0) return value;
			continue;
		}
		results.push(value);
	}
	if (results.length === 0) return void 0;
	if (results.length === 1) return results[0];
	if (Array.isArray(results[0])) return results[0];
	return results.reduce((acc, curr) => deepMerge(acc, curr));
};
var isInterpolableWrapperNode = (node) => {
	if (typeof node !== "object" || node === null || !("nodeType" in node)) return false;
	const { nodeType } = node;
	return false;
};
var getInterpolableContent = (node) => {
	if (typeof node === "string") return node;
	if (isInterpolableWrapperNode(node)) return node.nodeType === "html" ? node[HTML] : node[MARKDOWN];
};
var rebuildInterpolableContent = (node, interpolated) => {
	if (typeof node === "string") return interpolated;
	if (isInterpolableWrapperNode(node)) {
		const key = node.nodeType === "html" ? HTML : MARKDOWN;
		return {
			...node,
			[key]: interpolated
		};
	}
	return node;
};
var transformInterpolableNode = (node, values, subProps, parentPlugins, deepTransformNode) => {
	const children = rebuildInterpolableContent(node, getInsertion(getInterpolableContent(node), values));
	return deepTransformNode(children, {
		...subProps,
		plugins: parentPlugins,
		children
	});
};
var fallbackPlugin = {
	id: "fallback-plugin",
	canHandle: () => false,
	transform: (node) => node
};
var isAwaitingValues = (branch) => {
	if (typeof branch !== "function") return false;
	const { value } = branch;
	return value === void 0 || typeof value === "function";
};
var translationPlugin = (locale, fallback) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? fallbackPlugin : {
	id: "translation-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "translation",
	transform: (node, props, deepTransformNode) => {
		const content = getTranslation(node["translation"] ?? {}, locale, fallback);
		return deepTransformNode(content, {
			...props,
			children: content,
			keyPath: [...props.keyPath, {
				type: TRANSLATION,
				key: locale
			}]
		});
	}
};
var enumerationPlugin = fallbackPlugin;
var pluralPlugin = (locale) => fallbackPlugin;
var conditionPlugin = fallbackPlugin;
var insertionPlugin$1 = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? fallbackPlugin : {
	id: "insertion-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "insertion",
	transform: (node, props, deepTransformNode) => {
		const newKeyPath = [...props.keyPath, { type: INSERTION }];
		const children = node[INSERTION];
		const insertionStringPlugin = {
			id: "insertion-string-plugin",
			canHandle: (node) => typeof node === "string" || isInterpolableWrapperNode(node),
			transform: (node, subProps, deepTransformNode) => {
				if (isInterpolableWrapperNode(node)) return (values) => transformInterpolableNode(node, values, subProps, props.plugins, deepTransformNode);
				const transformedResult = deepTransformNode(node, {
					...subProps,
					children: node,
					plugins: [...(props.plugins ?? []).filter((plugin) => plugin.id !== "intlayer-node-plugin")]
				});
				return (values) => {
					const children = getInsertion(transformedResult, values);
					return deepTransformNode(children, {
						...subProps,
						plugins: props.plugins,
						children
					});
				};
			}
		};
		return resolveInsertedSelector(children, deepTransformNode(children, {
			...props,
			children,
			keyPath: newKeyPath,
			plugins: [insertionStringPlugin, ...props.plugins ?? []]
		}));
	}
};
var selectorNodeTypes = [
	ENUMERATION,
	CONDITION,
	PLURAL,
	GENDER,
	SELECT
];
var bindInsertedValues = (children, result, values, areBranchesInterpolated = false) => {
	const nodeType = children?.nodeType;
	if (typeof result !== "function" || !nodeType || !selectorNodeTypes.includes(nodeType)) return result;
	const isCountSelector = nodeType === "plural" || nodeType === "enumeration";
	return (selector) => {
		if (typeof selector === "object" && selector !== null) return result({
			...values,
			...selector
		});
		if (isCountSelector) return result({
			...values,
			count: selector
		});
		const selected = result(selector);
		return !areBranchesInterpolated && isAwaitingValues(selected) ? selected(values) : selected;
	};
};
var resolveInsertedSelector = (children, result) => typeof result === "function" && selectorNodeTypes.includes(children?.nodeType ?? "") ? (values) => bindInsertedValues(children, result, values) : result;
var genderPlugin = fallbackPlugin;
var selectPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	pluralPlugin(locale ?? internationalization.defaultLocale),
	conditionPlugin,
	insertionPlugin$1,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin,
	selectPlugin
].filter((plugin) => plugin !== fallbackPlugin);
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
var transformsInProgress = /* @__PURE__ */ new WeakSet();
var getDictionary$1 = (dictionary, localeOrSelector, plugins) => {
	const { locale, selector } = {
		locale: localeOrSelector,
		selector: void 0
	};
	const cacheKey = getDictionaryTransformCacheKey(locale ?? internationalization.defaultLocale, "", plugins);
	const cached = readTransformCache(dictionary, cacheKey);
	if (cached.hit) return cached.content;
	const appliedPlugins = plugins ?? getBasePlugins(locale);
	const resolved = dictionary;
	const transformDictionary = (resolvedDictionary) => {
		const props = {
			dictionaryKey: resolvedDictionary.key,
			dictionaryPath: resolvedDictionary.filePath,
			keyPath: [],
			plugins: appliedPlugins,
			nestedDictionaries: resolvedDictionary.nestedDictionaries,
			eager: !transformsInProgress.has(resolvedDictionary)
		};
		transformsInProgress.add(resolvedDictionary);
		try {
			return getContent(resolvedDictionary.content, props, appliedPlugins);
		} finally {
			if (props.eager) transformsInProgress.delete(resolvedDictionary);
		}
	};
	if (resolved === null) return writeTransformCache(dictionary, cacheKey, null);
	if (Array.isArray(resolved)) return writeTransformCache(dictionary, cacheKey, resolved.map(transformDictionary));
	return writeTransformCache(dictionary, cacheKey, transformDictionary(resolved));
};
var isComplexValue = (value) => value != null && typeof value !== "string" && typeof value !== "number" && typeof value !== "boolean";
var insertionRegex = /\{\{\s*(.*?)\s*\}\}/g;
var splitInsertionTemplate = (template, values = {}) => {
	if (!Object.values(values).some(isComplexValue)) return {
		isSimple: true,
		parts: template.replace(insertionRegex, (_, key) => (values[key.trim()] ?? "").toString())
	};
	const chunks = template.split(insertionRegex);
	const parts = [];
	for (let i = 0; i < chunks.length; i++) if (i % 2 === 0) {
		if (chunks[i]) parts.push(chunks[i]);
	} else {
		const val = values[chunks[i].trim()];
		if (val != null) parts.push(val);
	}
	return {
		isSimple: false,
		parts
	};
};
var intlayerNodePlugins = {
	id: "intlayer-node-plugin",
	canHandle: (node) => typeof node === "bigint" || typeof node === "string" || typeof node === "number",
	transform: (_node, props) => {
		return renderIntlayerNode({
			value: props.children,
			children: props.children
		});
	}
};
var reactNodePlugins = fallbackPlugin;
var splitAndJoinInsertion = (template, values) => {
	const result = splitInsertionTemplate(template, values);
	if (result.isSimple) return result.parts;
	return createElement(Fragment, null, ...result.parts.map((part, index) => createElement(Fragment, { key: index }, part)));
};
var insertionPlugin = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? fallbackPlugin : {
	id: "insertion-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "insertion",
	transform: (node, props, deepTransformNode) => {
		const newKeyPath = [...props.keyPath, { type: INSERTION }];
		const children = node[INSERTION];
		const insertionStringPlugin = {
			id: "insertion-string-plugin",
			canHandle: (node) => typeof node === "string" || isInterpolableWrapperNode(node),
			transform: (node, subProps, deepTransformNode) => {
				if (isInterpolableWrapperNode(node)) return (values) => transformInterpolableNode(node, values, subProps, props.plugins, deepTransformNode);
				const transformedResult = deepTransformNode(node, {
					...subProps,
					children: node,
					plugins: [...(props.plugins ?? []).filter((plugin) => plugin.id !== "intlayer-node-plugin")]
				});
				return (values) => {
					const result = splitAndJoinInsertion(transformedResult, values);
					return deepTransformNode(result, {
						...subProps,
						plugins: props.plugins,
						children: result
					});
				};
			}
		};
		return resolveInsertedSelector(children, deepTransformNode(children, {
			...props,
			children,
			keyPath: newKeyPath,
			plugins: [insertionStringPlugin, ...props.plugins ?? []]
		}));
	}
};
var markdownPlugin = fallbackPlugin;
var htmlPlugin = fallbackPlugin;
var pluginsCache = /* @__PURE__ */ new Map();
var getPlugins = (locale, fallback = true) => {
	const cacheKey = `${locale ?? internationalization.defaultLocale}_${fallback}`;
	if (pluginsCache.has(cacheKey)) return pluginsCache.get(cacheKey);
	const enabledPlugins = [
		intlayerNodePlugins,
		translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		pluralPlugin(locale ?? internationalization.defaultLocale),
		conditionPlugin,
		nestedPlugin(locale ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		selectPlugin,
		reactNodePlugins,
		insertionPlugin,
		markdownPlugin,
		htmlPlugin
	].filter((plugin) => plugin !== fallbackPlugin);
	pluginsCache.set(cacheKey, enabledPlugins);
	return enabledPlugins;
};
var getDictionary = (dictionary, localeOrSelector) => {
	return getDictionary$1(dictionary, localeOrSelector, getPlugins(typeof localeOrSelector === "object" && localeOrSelector !== null ? localeOrSelector.locale : localeOrSelector));
};
var getLocaleInStorage = getCachedLocaleFromStorageClient;
var IntlayerClientContext = createContext({
	get locale() {
		return getLocaleInStorage() ?? internationalization?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: true
});
var useDictionary = (dictionary, localeOrSelector) => {
	const { locale: currentLocale, variant: contextVariant } = useContext(IntlayerClientContext) ?? {};
	const argument = localeOrSelector ?? currentLocale;
	const argumentIdentity = argument;
	return useMemo(() => getDictionary(dictionary, argument), [dictionary.key, argumentIdentity]);
};
function PricingTiers() {
	const content = useDictionary(pricing_tiers_default);
	const tiers = [
		{
			name: content.y,
			price: content.r,
			period: content.l,
			features: [
				content.c({ runs: "5" }),
				content.o({ libs: "3" }),
				content.e,
				content.w
			]
		},
		{
			name: content.v,
			price: content.s,
			period: content.p,
			features: [
				content.aa,
				content.a,
				content.t,
				content.u,
				content.d,
				content.n
			],
			highlighted: true
		},
		{
			name: content.j,
			price: content.g,
			period: "",
			features: [
				content.k,
				content.q,
				content.x,
				content.i,
				content.h,
				content.b,
				content.z
			]
		}
	];
	return jsx("div", {
		className: "grid gap-6 md:grid-cols-3",
		children: tiers.map((t) => jsxs("div", {
			className: `flex flex-col rounded-lg border p-6 ${t.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`,
			children: [
				jsx("h3", {
					className: "text-lg font-semibold text-foreground",
					children: t.name
				}),
				jsxs("div", {
					className: "my-4",
					children: [jsx("span", {
						className: "text-3xl font-bold text-foreground",
						children: t.price
					}), jsx("span", {
						className: "text-sm text-muted-foreground",
						children: t.period
					})]
				}),
				jsx("ul", {
					className: "mb-6 flex-1 space-y-2",
					children: t.features.map((f, i) => jsxs("li", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [
							jsx("span", {
								className: "text-primary",
								children: "✓"
							}),
							" ",
							f
						]
					}, i))
				}),
				jsx("button", {
					type: "button",
					className: `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${t.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`,
					children: t.name === content.j ? content.f : content.m
				})
			]
		}, t.name.value))
	});
}
function recordHydrationDuration() {
	if (typeof window === "undefined") return;
	console.log("--- BROWSER: RootDocument mounted");
	performance.mark("hydration_end");
	try {
		if (performance.getEntriesByName("hydration_start").length > 0) {
			performance.measure("hydration_duration", "hydration_start", "hydration_end");
			console.log("--- BROWSER: hydration_duration measured");
			const duration = performance.getEntriesByName("hydration_duration")[0]?.duration;
			if (duration) console.log(`Hydration Duration: ${duration.toFixed(2)}ms`);
		} else console.warn("--- BROWSER: hydration_start NOT FOUND");
	} catch (err) {
		console.warn("Could not measure hydration duration:", err);
	}
}
function recordRenderTime(id, startTime) {
	if (typeof window === "undefined") return;
	const renderTime = performance.now() - startTime;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {};
	window.__RENDER_METRICS__[id] = window.__RENDER_METRICS__[id] || [];
	window.__RENDER_METRICS__[id].push(renderTime);
}
function AppProviders({ children, locale }) {
	const [renderStart] = useState(() => typeof performance !== "undefined" ? performance.now() : 0);
	useLayoutEffect(() => {
		recordRenderTime("AppRoot", renderStart);
	}, [renderStart]);
	useEffect(() => {
		if (locale) document.documentElement.lang = locale;
	}, [locale]);
	useEffect(() => {
		recordHydrationDuration();
	}, []);
	return children;
}
function Wrapper({ children }) {
	return jsx(AppProviders, {
		locale: "en",
		children
	});
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(PricingTiers, {}) });
}
export { Wrapped as default };
