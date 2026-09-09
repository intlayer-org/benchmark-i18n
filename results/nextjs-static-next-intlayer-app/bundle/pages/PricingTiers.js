import { Fragment, createContext, createElement, isValidElement, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { jsxDEV } from "react/jsx-dev-runtime";
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
					"fields": [],
					"nodeType": "insertion",
					"insertion": "{runs} benchmark runs/day"
				},
				"o": {
					"fields": [],
					"nodeType": "insertion",
					"insertion": "{libs} libraries"
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
					"fields": [],
					"nodeType": "insertion",
					"insertion": "{runs} lancements de benchmark/jour"
				},
				"o": {
					"fields": [],
					"nodeType": "insertion",
					"insertion": "{libs} bibliothèques"
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
					"fields": [],
					"nodeType": "insertion",
					"insertion": "{runs} ejecuciones de benchmark/día"
				},
				"o": {
					"fields": [],
					"nodeType": "insertion",
					"insertion": "{libs} bibliotecas"
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
					"fields": [],
					"nodeType": "insertion",
					"insertion": "{runs} Benchmark-Läufe/Tag"
				},
				"o": {
					"fields": [],
					"nodeType": "insertion",
					"insertion": "{libs} Bibliotheken"
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
					"fields": [],
					"nodeType": "insertion",
					"insertion": "{runs} esecuzioni di benchmark/giorno"
				},
				"o": {
					"fields": [],
					"nodeType": "insertion",
					"insertion": "{libs} librerie"
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
					"fields": [],
					"nodeType": "insertion",
					"insertion": "{runs} execuções de benchmark/dia"
				},
				"o": {
					"fields": [],
					"nodeType": "insertion",
					"insertion": "{libs} bibliotecas"
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
					"fields": [],
					"nodeType": "insertion",
					"insertion": "每天 {runs} 次基准测试运行"
				},
				"o": {
					"fields": [],
					"nodeType": "insertion",
					"insertion": "{libs} 个库"
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
					"fields": [],
					"nodeType": "insertion",
					"insertion": "毎日 {runs} 回のベンチマーク実行"
				},
				"o": {
					"fields": [],
					"nodeType": "insertion",
					"insertion": "{libs} 個のライブラリ"
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
					"fields": [],
					"nodeType": "insertion",
					"insertion": "하루 {runs} 회의 벤치마크 실행"
				},
				"o": {
					"fields": [],
					"nodeType": "insertion",
					"insertion": "{libs} 개의 라이브러리"
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
					"fields": [],
					"nodeType": "insertion",
					"insertion": "{runs} запусков бенчмарка в день"
				},
				"o": {
					"fields": [],
					"nodeType": "insertion",
					"insertion": "{libs} библиотек"
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
var renderIntlayerNode = ({ children, value, additionalProps }) => {
	const element = isValidElement(children) ? children : jsx(Fragment$1, { children });
	return new Proxy(element, { get(target, prop, receiver) {
		if (prop === "value") return value;
		if (prop === Symbol.toPrimitive) return () => value ?? "";
		if (prop === "toString") return () => String(value ?? "");
		if (prop === "valueOf") return () => value;
		if (additionalProps && Object.hasOwn(additionalProps, prop)) return additionalProps[prop];
		if (value !== null && value !== void 0 && typeof prop === "string" && prop !== "constructor" && !(prop in target)) {
			const valObj = Object(value);
			if (prop in valObj) {
				const valProp = valObj[prop];
				return typeof valProp === "function" ? valProp.bind(value) : valProp;
			}
		}
		return Reflect.get(target, prop, receiver);
	} });
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
var INSERTION = "insertion";
var OBJECT = "object";
var ARRAY = "array";
var MARKDOWN = "markdown";
var HTML = "html";
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
var getInsertion = (content, values) => content.replace(/\{\{\s*(.*?)\s*\}\}/g, (_, key) => {
	return (values[key.trim()] ?? "").toString();
});
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
		return deepTransformNode(children, {
			...props,
			children,
			keyPath: newKeyPath,
			plugins: [insertionStringPlugin, ...props.plugins ?? []]
		});
	}
};
var genderPlugin = fallbackPlugin;
var selectPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
var getBasePlugins = (locale, fallback = true) => [
	translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
	enumerationPlugin,
	conditionPlugin,
	insertionPlugin$1,
	nestedPlugin(locale ?? internationalization.defaultLocale),
	filePlugin,
	genderPlugin,
	selectPlugin
];
var getContent = (node, nodeProps, plugins = []) => deepTransformNode(node, {
	...nodeProps,
	plugins
});
var getDictionary$1 = (dictionary, localeOrSelector, plugins) => {
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
	transform: (_node, { plugins, ...rest }) => {
		return renderIntlayerNode({
			...rest,
			value: rest.children,
			children: rest.children
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
		const result = deepTransformNode(children, {
			...props,
			children,
			keyPath: newKeyPath,
			plugins: [insertionStringPlugin, ...props.plugins ?? []]
		});
		if (typeof children === "object" && children !== null && "nodeType" in children && ["enumeration", "condition"].includes(children.nodeType)) return (values) => (arg) => {
			const inner = result(arg);
			if (typeof inner === "function") return inner(values);
			return inner;
		};
		return result;
	}
};
var markdownPlugin = fallbackPlugin;
var htmlPlugin = fallbackPlugin;
var pluginsCache = /* @__PURE__ */ new Map();
var getPlugins = (locale, fallback = true) => {
	const cacheKey = `${locale ?? internationalization.defaultLocale}_${fallback}`;
	if (pluginsCache.has(cacheKey)) return pluginsCache.get(cacheKey);
	const plugins = [
		translationPlugin(locale ?? internationalization.defaultLocale, fallback ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		pluralPlugin(locale ?? internationalization.defaultLocale),
		conditionPlugin,
		nestedPlugin(locale ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		selectPlugin,
		intlayerNodePlugins,
		reactNodePlugins,
		insertionPlugin,
		markdownPlugin,
		htmlPlugin
	];
	pluginsCache.set(cacheKey, plugins);
	return plugins;
};
var getDictionary = (dictionary, localeOrSelector) => {
	return getDictionary$1(dictionary, localeOrSelector, getPlugins(typeof localeOrSelector === "object" && localeOrSelector !== null ? localeOrSelector.locale : localeOrSelector));
};
var resolveExpiresToTimestamp = (expires) => {
	if (typeof expires === "number") return Date.now() + expires * 1e3;
	if (typeof expires === "string") {
		const time = Date.parse(expires);
		return Number.isNaN(time) ? void 0 : time;
	}
};
var buildCookieString = (name, value, attributes) => {
	const parts = [`${name}=${encodeURIComponent(value)}`];
	if (attributes.path) parts.push(`Path=${attributes.path}`);
	if (attributes.domain) parts.push(`Domain=${attributes.domain}`);
	const expiresTimestamp = resolveExpiresToTimestamp(attributes.expires);
	if (expiresTimestamp !== void 0) parts.push(`Expires=${new Date(expiresTimestamp).toUTCString()}`);
	if (attributes.secure) parts.push("Secure");
	if (attributes.sameSite) parts.push(`SameSite=${attributes.sameSite}`);
	return parts.join("; ");
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
var setLocaleInStorageClient = (locale, options) => {
	if (options?.isCookieEnabled === false) return;
	if (!TREE_SHAKE_STORAGE_COOKIES && routing.storage.cookies) for (let i = 0; i < routing.storage.cookies.length; i++) {
		const { name, attributes } = routing.storage.cookies[i];
		try {
			if (options?.setCookieStore) options.setCookieStore(name, locale, {
				...attributes,
				expires: resolveExpiresToTimestamp(attributes.expires)
			});
		} catch {
			try {
				if (options?.setCookieString) options.setCookieString(name, buildCookieString(name, locale, attributes));
			} catch {}
		}
	}
};
var localeInStorage = getLocaleFromStorageClient(localeStorageOptions);
var setLocaleInStorage = (locale, isCookieEnabled) => setLocaleInStorageClient(locale, {
	...localeStorageOptions,
	isCookieEnabled
});
var useEditor = () => {
	const { locale } = useContext(IntlayerClientContext) ?? {};
	const managerRef = useRef(null);
	useEffect(() => {}, []);
	useEffect(() => {
		if (!locale || !managerRef.current) return;
		managerRef.current.currentLocale.set(locale);
	}, [locale]);
};
var EditorProvider = ({ children }) => {
	useEditor();
	return children;
};
var useAnalytics = () => {
	const { locale } = useContext(IntlayerClientContext) ?? {};
	const clientRef = useRef(null);
	useEffect(() => {}, []);
	useEffect(() => {
		if (!locale || !clientRef.current) return;
		clientRef.current.setLocale(locale);
		clientRef.current.trackPageView({ reason: "locale_change" });
	}, [locale]);
};
var AnalyticsProvider = ({ children }) => {
	useAnalytics();
	return children;
};
var setIntlayerIdentifier = () => {
	if (typeof window !== "undefined") window.intlayer = { enabled: true };
};
var localeResolver = (selectedLocale, locales = internationalization?.locales, defaultLocale = internationalization?.defaultLocale) => {
	const requestedLocales = [selectedLocale].flat();
	const normalize = (locale) => locale.trim().toLowerCase();
	try {
		for (const requested of requestedLocales) {
			const normalizedRequested = normalize(requested);
			const exactMatch = locales.find((locale) => normalize(locale) === normalizedRequested);
			if (exactMatch) return exactMatch;
			const [requestedLang] = normalizedRequested.split("-");
			const partialMatch = locales.find((locale) => normalize(locale).split("-")[0] === requestedLang);
			if (partialMatch) return partialMatch;
		}
	} catch {}
	return defaultLocale;
};
var IntlayerClientContext = createContext({
	locale: localeInStorage ?? internationalization?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: true
});
var IntlayerProviderContent = ({ locale: localeProp, defaultLocale: defaultLocaleProp, variant, children, setLocale: setLocaleProp, disableEditor, isCookieEnabled }) => {
	const { locales: availableLocales, defaultLocale: defaultLocaleConfig } = internationalization ?? {};
	const [currentLocale, setCurrentLocale] = useState(localeProp ?? localeInStorage ?? defaultLocaleProp ?? defaultLocaleConfig);
	useEffect(() => {
		if (localeProp && localeProp !== currentLocale) setCurrentLocale(localeProp);
	}, [localeProp]);
	useEffect(() => {
		setIntlayerIdentifier();
	}, []);
	const setLocaleBase = (newLocale) => {
		if (currentLocale.toString() === newLocale.toString()) return;
		if (!availableLocales?.map(String).includes(newLocale)) {
			console.error(`Locale ${newLocale} is not available`);
			return;
		}
		setCurrentLocale(newLocale);
		setLocaleInStorage(newLocale, isCookieEnabled);
	};
	const setLocale = setLocaleProp ?? setLocaleBase;
	const resolvedLocale = localeResolver(currentLocale);
	return jsx(IntlayerClientContext.Provider, {
		value: {
			locale: resolvedLocale,
			setLocale,
			variant,
			disableEditor
		},
		children
	});
};
var IntlayerProvider = ({ children, ...props }) => jsxs(IntlayerProviderContent, {
	...props,
	children: [
		jsx(EditorProvider, {}),
		jsx(AnalyticsProvider, {}),
		children
	]
});
var useDictionary = (dictionary, localeOrSelector) => {
	const { locale: currentLocale, variant: contextVariant } = useContext(IntlayerClientContext) ?? {};
	const argument = localeOrSelector ?? currentLocale;
	const argumentIdentity = typeof argument === "object" && argument !== null ? `${argument.locale ?? ""}|${getDictionarySelectorCacheKey(argument)}` : argument;
	return useMemo(() => getDictionary(dictionary, argument), [dictionary.key, argumentIdentity]);
};
var IntlayerClientProviderBase = (props) => jsx(IntlayerProvider, { ...props });
var IntlayerClientProvider = IntlayerClientProviderBase;
var _jsxFileName$3 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/src/components/pages/pricing/PricingTiers.tsx";
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
	return jsxDEV("div", {
		className: "grid gap-6 md:grid-cols-3",
		children: tiers.map((t) => jsxDEV("div", {
			className: `flex flex-col rounded-lg border p-6 ${t.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`,
			children: [
				jsxDEV("h3", {
					className: "text-lg font-semibold text-foreground",
					children: t.name
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 61,
					columnNumber: 11
				}, this),
				jsxDEV("div", {
					className: "my-4",
					children: [jsxDEV("span", {
						className: "text-3xl font-bold text-foreground",
						children: t.price
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 63,
						columnNumber: 13
					}, this), jsxDEV("span", {
						className: "text-sm text-muted-foreground",
						children: t.period
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 66,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$3,
					lineNumber: 62,
					columnNumber: 11
				}, this),
				jsxDEV("ul", {
					className: "mb-6 flex-1 space-y-2",
					children: t.features.map((f, i) => jsxDEV("li", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [
							jsxDEV("span", {
								className: "text-primary",
								children: "✓"
							}, void 0, false, {
								fileName: _jsxFileName$3,
								lineNumber: 74,
								columnNumber: 17
							}, this),
							" ",
							f
						]
					}, i, true, {
						fileName: _jsxFileName$3,
						lineNumber: 70,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 68,
					columnNumber: 11
				}, this),
				jsxDEV("button", {
					type: "button",
					className: `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${t.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`,
					children: t.name === content.j ? content.f : content.m
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 78,
					columnNumber: 11
				}, this)
			]
		}, t.name.value, true, {
			fileName: _jsxFileName$3,
			lineNumber: 53,
			columnNumber: 9
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 51,
		columnNumber: 5
	}, this);
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
var _jsxFileName$2 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/src/components/AppProviders.tsx";
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
	return jsxDEV(IntlayerClientProvider, {
		locale,
		children
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 35,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/scripts/Wrapper.tsx";
function Wrapper({ children }) {
	return jsxDEV(AppProviders, {
		locale: "en",
		children
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/next-intlayer-app/src/components/pages/pricing/PricingTiers.wrapper.tsx";
function Wrapped() {
	return jsxDEV(Wrapper, { children: jsxDEV(PricingTiers, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Wrapped as default };
