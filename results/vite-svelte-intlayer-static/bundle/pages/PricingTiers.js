import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
import { getContext } from "svelte";
import { derived, get, writable } from "svelte/store";
var pricing_tiers_default = {
	key: "pricing-tiers",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"trainingSessions": "Training sessions",
				"auditLogs": "Audit logs",
				"customSlas": "Custom SLAs",
				"dedicatedAccountManager": "Dedicated account manager",
				"ssoSaml": "SSO & SAML",
				"onPremiseOption": "On-premise option",
				"everythingInPro": "Everything in Pro",
				"custom": "Custom",
				"enterprise": "Enterprise",
				"historicalData": "Historical data",
				"ciIntegration": "CI integration",
				"privateResults": "Private results",
				"prioritySupport": "Priority support",
				"allLibraries": "All libraries",
				"unlimitedRuns": "Unlimited runs",
				"pro": "Pro",
				"publicResults": "Public results",
				"communitySupport": "Community support",
				"x5BenchmarkRunsday": "5 benchmark runs/day",
				"starter": "Starter"
			},
			"fr": {
				"trainingSessions": "Sessions de formation",
				"auditLogs": "Journaux d'audit",
				"customSlas": "SLA personnalisés",
				"dedicatedAccountManager": "Gestionnaire de compte dédié",
				"ssoSaml": "SSO et SAML",
				"onPremiseOption": "Option sur site",
				"everythingInPro": "Tout ce qui est dans Pro",
				"custom": "Personnalisé",
				"enterprise": "Entreprise",
				"historicalData": "Données historiques",
				"ciIntegration": "Intégration CI",
				"privateResults": "Résultats privés",
				"prioritySupport": "Support prioritaire",
				"allLibraries": "Toutes les bibliothèques",
				"unlimitedRuns": "Lancements illimités",
				"pro": "Pro",
				"publicResults": "Résultats publics",
				"communitySupport": "Support de la communauté",
				"x5BenchmarkRunsday": "5 lancements de benchmark par jour",
				"starter": "Starter"
			},
			"es": {
				"trainingSessions": "Sesiones de formación",
				"auditLogs": "Registros de auditoría",
				"customSlas": "SLAs personalizados",
				"dedicatedAccountManager": "Gerente de cuenta dedicado",
				"ssoSaml": "SSO y SAML",
				"onPremiseOption": "Opción local",
				"everythingInPro": "Todo lo de Pro",
				"custom": "Personalizado",
				"enterprise": "Empresa",
				"historicalData": "Datos históricos",
				"ciIntegration": "Integración de CI",
				"privateResults": "Resultados privados",
				"prioritySupport": "Soporte prioritario",
				"allLibraries": "Todas las bibliotecas",
				"unlimitedRuns": "Ejecuciones ilimitadas",
				"pro": "Pro",
				"publicResults": "Resultados públicos",
				"communitySupport": "Soporte de la comunidad",
				"x5BenchmarkRunsday": "5 ejecuciones de benchmark al día",
				"starter": "Starter"
			},
			"de": {
				"trainingSessions": "Schulungen",
				"auditLogs": "Audit-Protokolle",
				"customSlas": "Individuelle SLAs",
				"dedicatedAccountManager": "Dedizierter Account-Manager",
				"ssoSaml": "SSO und SAML",
				"onPremiseOption": "On-Premise-Option",
				"everythingInPro": "Alles in Pro",
				"custom": "Individuell",
				"enterprise": "Enterprise",
				"historicalData": "Historische Daten",
				"ciIntegration": "CI-Integration",
				"privateResults": "Private Ergebnisse",
				"prioritySupport": "Vorrangiger Support",
				"allLibraries": "Alle Bibliotheken",
				"unlimitedRuns": "Unbegrenzte Läufe",
				"pro": "Pro",
				"publicResults": "Öffentliche Ergebnisse",
				"communitySupport": "Community-Support",
				"x5BenchmarkRunsday": "5 Benchmark-Läufe/Tag",
				"starter": "Starter"
			},
			"it": {
				"trainingSessions": "Sessioni di formazione",
				"auditLogs": "Registri di audit",
				"customSlas": "SLA personalizzati",
				"dedicatedAccountManager": "Account manager dedicato",
				"ssoSaml": "SSO e SAML",
				"onPremiseOption": "Opzione on-premise",
				"everythingInPro": "Tutto in Pro",
				"custom": "Personalizzato",
				"enterprise": "Enterprise",
				"historicalData": "Dati storici",
				"ciIntegration": "Integrazione CI",
				"privateResults": "Risultati privati",
				"prioritySupport": "Supporto prioritario",
				"allLibraries": "Tutte le librerie",
				"unlimitedRuns": "Esecuzioni illimitate",
				"pro": "Pro",
				"publicResults": "Risultati pubblici",
				"communitySupport": "Supporto della community",
				"x5BenchmarkRunsday": "5 esecuzioni di benchmark al giorno",
				"starter": "Starter"
			},
			"pt": {
				"trainingSessions": "Sessões de treinamento",
				"auditLogs": "Logs de auditoria",
				"customSlas": "SLAs personalizados",
				"dedicatedAccountManager": "Gerente de conta dedicado",
				"ssoSaml": "SSO e SAML",
				"onPremiseOption": "Opção on-premise",
				"everythingInPro": "Tudo no Pro",
				"custom": "Personalizado",
				"enterprise": "Enterprise",
				"historicalData": "Dados históricos",
				"ciIntegration": "Integração de CI",
				"privateResults": "Resultados privados",
				"prioritySupport": "Suporte prioritário",
				"allLibraries": "Todas as bibliotecas",
				"unlimitedRuns": "Execuções ilimitadas",
				"pro": "Pro",
				"publicResults": "Resultados públicos",
				"communitySupport": "Suporte da comunidade",
				"x5BenchmarkRunsday": "5 execuções de benchmark por dia",
				"starter": "Starter"
			},
			"zh": {
				"trainingSessions": "培训课程",
				"auditLogs": "审计日志",
				"customSlas": "自定义 SLA",
				"dedicatedAccountManager": "专属客户经理",
				"ssoSaml": "SSO 和 SAML",
				"onPremiseOption": "本地部署选项",
				"everythingInPro": "Pro 计划中的所有内容",
				"custom": "自定义",
				"enterprise": "企业级",
				"historicalData": "历史数据",
				"ciIntegration": "CI 集成",
				"privateResults": "私有结果",
				"prioritySupport": "优先支持",
				"allLibraries": "所有库",
				"unlimitedRuns": "无限次运行",
				"pro": "Pro",
				"publicResults": "公开结果",
				"communitySupport": "社区支持",
				"x5BenchmarkRunsday": "每天 5 次基准测试运行",
				"starter": "Starter"
			},
			"ja": {
				"trainingSessions": "トレーニングセッション",
				"auditLogs": "監査ログ",
				"customSlas": "カスタム SLA",
				"dedicatedAccountManager": "専任のアカウントマネージャー",
				"ssoSaml": "SSO および SAML",
				"onPremiseOption": "オンプレミスオプション",
				"everythingInPro": "Pro プランの全機能",
				"custom": "カスタム",
				"enterprise": "エンタープライズ",
				"historicalData": "履歴データ",
				"ciIntegration": "CI 統合",
				"privateResults": "プライベートな結果",
				"prioritySupport": "優先サポート",
				"allLibraries": "すべてのライブラリ",
				"unlimitedRuns": "無制限の実行",
				"pro": "Pro",
				"publicResults": "公開された結果",
				"communitySupport": "コミュニティサポート",
				"x5BenchmarkRunsday": "1 日 5 回のベンチマーク実行",
				"starter": "スターター"
			},
			"ko": {
				"trainingSessions": "교육 세션",
				"auditLogs": "감사 로그",
				"customSlas": "맞춤형 SLA",
				"dedicatedAccountManager": "전담 계정 관리자",
				"ssoSaml": "SSO 및 SAML",
				"onPremiseOption": "온프레미스 옵션",
				"everythingInPro": "Pro의 모든 기능",
				"custom": "맞춤형",
				"enterprise": "엔터프라이즈",
				"historicalData": "기록 데이터",
				"ciIntegration": "CI 통합",
				"privateResults": "비공개 결과",
				"prioritySupport": "우선 지원",
				"allLibraries": "모든 라이브러리",
				"unlimitedRuns": "무제한 실행",
				"pro": "Pro",
				"publicResults": "공개 결과",
				"communitySupport": "커뮤니티 지원",
				"x5BenchmarkRunsday": "일 5회 벤치마크 실행",
				"starter": "스타터"
			},
			"ru": {
				"trainingSessions": "Тренинги",
				"auditLogs": "Журналы аудита",
				"customSlas": "Индивидуальные SLA",
				"dedicatedAccountManager": "Персональный менеджер",
				"ssoSaml": "SSO и SAML",
				"onPremiseOption": "Локальная установка",
				"everythingInPro": "Все функции Pro",
				"custom": "Индивидуальный",
				"enterprise": "Корпоративный",
				"historicalData": "Исторические данные",
				"ciIntegration": "Интеграция с CI",
				"privateResults": "Приватные результаты",
				"prioritySupport": "Приоритетная поддержка",
				"allLibraries": "Все библиотеки",
				"unlimitedRuns": "Безлимитные запуски",
				"pro": "Pro",
				"publicResults": "Публичные результаты",
				"communitySupport": "Поддержка сообщества",
				"x5BenchmarkRunsday": "5 запусков бенчмарков в день",
				"starter": "Стартовый"
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
var defaultLocale = internationalization?.defaultLocale;
var createIntlayerStore = () => {
	const { subscribe, set, update } = writable({ locale: defaultLocale });
	return {
		subscribe,
		setLocale: (locale) => update((store) => ({
			...store,
			locale
		})),
		getLocale: () => derived({ subscribe }, ($store) => $store.locale),
		reset: () => set({ locale: defaultLocale })
	};
};
var intlayerStore = createIntlayerStore();
var INTLAYER_CONTEXT_KEY = Symbol("intlayer");
var getIntlayerContext = () => {
	return getContext(INTLAYER_CONTEXT_KEY);
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
var insertionPlugin$1 = fallbackPlugin;
var genderPlugin = fallbackPlugin;
var selectPlugin = fallbackPlugin;
var nestedPlugin = (locale) => fallbackPlugin;
var filePlugin = fallbackPlugin;
function IntlayerNodeWrapper($$anchor, $$props) {
	$.push($$props, false);
	let Renderer = $.prop($$props, "Renderer", 8, void 0);
	let rendererProps = $.prop($$props, "rendererProps", 24, () => ({}));
	let value = $.prop($$props, "value", 8, void 0);
	let ResolvedRenderer = $.mutable_source();
	let isAwaitingRenderer = $.mutable_source(false);
	$.legacy_pre_effect(() => $.deep_read_state(Renderer()), () => {
		if (typeof Renderer()?.then === "function") {
			$.set(isAwaitingRenderer, true);
			Renderer().then((component) => {
				$.set(ResolvedRenderer, component);
				$.set(isAwaitingRenderer, false);
			});
		} else {
			$.set(ResolvedRenderer, Renderer());
			$.set(isAwaitingRenderer, false);
		}
	});
	$.legacy_pre_effect_reset();
	$.init();
	var fragment = $.comment();
	var node = $.first_child(fragment);
	var consequent = ($$anchor) => {};
	var consequent_1 = ($$anchor) => {
		var fragment_1 = $.comment();
		var node_1 = $.first_child(fragment_1);
		$.element(node_1, () => $.get(ResolvedRenderer), false, ($$element, $$anchor) => {
			$.attribute_effect($$element, () => ({ ...rendererProps() }));
			var text = $.text();
			$.template_effect(() => $.set_text(text, value()));
			$.append($$anchor, text);
		});
		$.append($$anchor, fragment_1);
	};
	var consequent_2 = ($$anchor) => {
		$.get(ResolvedRenderer)($$anchor, $.spread_props(rendererProps, {
			children: ($$anchor, $$slotProps) => {
				$.next();
				var text_1 = $.text();
				$.template_effect(() => $.set_text(text_1, value()));
				$.append($$anchor, text_1);
			},
			$$slots: { default: true }
		}));
	};
	var alternate = ($$anchor) => {
		var text_2 = $.text();
		$.template_effect(() => $.set_text(text_2, value()));
		$.append($$anchor, text_2);
	};
	$.if(node, ($$render) => {
		if ($.get(isAwaitingRenderer)) $$render(consequent);
		else if (typeof $.get(ResolvedRenderer) === "string") $$render(consequent_1, 1);
		else if (typeof $.get(ResolvedRenderer) === "function") $$render(consequent_2, 2);
		else $$render(alternate, -1);
	});
	$.append($$anchor, fragment);
	$.pop();
}
var renderIntlayerNode = (args) => {
	const isClassComponent = Boolean(IntlayerNodeWrapper.prototype?.$destroy);
	let Node;
	if (isClassComponent) Node = class extends IntlayerNodeWrapper {
		constructor(options) {
			super({
				...options,
				props: {
					...options.props,
					Renderer: args.component,
					rendererProps: args.props,
					value: args.value
				}
			});
		}
	};
	else Node = (props) => {
		return IntlayerNodeWrapper(props, {
			Renderer: args.component,
			rendererProps: args.props,
			value: args.value
		});
	};
	Object.defineProperty(Node, "value", {
		value: args.value,
		writable: true,
		configurable: true
	});
	Object.defineProperty(Node, "toString", {
		value: () => String(args.value ?? ""),
		writable: true,
		configurable: true
	});
	Object.defineProperty(Node, "valueOf", {
		value: () => args.value,
		writable: true,
		configurable: true
	});
	Object.defineProperty(Node, Symbol.toPrimitive, {
		value: () => args.value ?? "",
		writable: true,
		configurable: true
	});
	if (args.value !== null && args.value !== void 0) {
		const valObj = Object(args.value);
		const proto = Object.getPrototypeOf(valObj);
		for (const prop of Object.getOwnPropertyNames(proto)) {
			if (prop === "constructor" || prop in Node) continue;
			const valProp = valObj[prop];
			if (typeof valProp === "function") Object.defineProperty(Node, prop, {
				value: valProp.bind(args.value),
				writable: true,
				configurable: true
			});
		}
	}
	if (args.additionalProps) Object.assign(Node, args.additionalProps);
	return Node;
};
var intlayerNodePlugins = {
	id: "intlayer-node-plugin",
	canHandle: (node) => typeof node === "bigint" || typeof node === "string" || typeof node === "number",
	transform: (node, { children, ...rest }) => {
		return renderIntlayerNode({
			value: children ?? node,
			component: void 0,
			props: rest
		});
	}
};
var svelteNodePlugins = intlayerNodePlugins;
var insertionPlugin = fallbackPlugin;
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
		svelteNodePlugins,
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
var useDictionary = (dictionary, localeOrSelector) => {
	const context = getIntlayerContext();
	return derived([intlayerStore], ([$store]) => {
		const contextLocale = context?.locale ?? $store.locale;
		return getDictionary(dictionary, localeOrSelector ?? contextLocale);
	});
};
var root = $.from_html(`<li class="flex items-center gap-2 text-sm text-muted-foreground"><span class="text-primary">✓</span> </li>`);
var root_1 = $.from_html(`<div><h3 class="text-lg font-semibold text-foreground"> </h3> <div class="my-4"><span class="text-3xl font-bold text-foreground"> </span> <span class="text-sm text-muted-foreground"> </span></div> <ul class="mb-6 flex-1 space-y-2"></ul> <button type="button"> </button></div>`);
var root_2 = $.from_html(`<div class="grid gap-6 md:grid-cols-3"></div>`);
function PricingTiers($$anchor, $$props) {
	$.push($$props, false);
	const content = useDictionary(pricing_tiers_default);
	const tiers = [
		{
			name: get(content).starter,
			price: "$0",
			period: "forever",
			features: [
				get(content).x5BenchmarkRunsday,
				"3 libraries",
				get(content).communitySupport,
				get(content).publicResults
			]
		},
		{
			name: get(content).pro,
			price: "$29",
			period: "/month",
			features: [
				get(content).unlimitedRuns,
				get(content).allLibraries,
				get(content).prioritySupport,
				get(content).privateResults,
				get(content).ciIntegration,
				get(content).historicalData
			],
			highlighted: true
		},
		{
			name: get(content).enterprise,
			price: get(content).custom,
			period: "",
			features: [
				get(content).everythingInPro,
				get(content).onPremiseOption,
				get(content).ssoSaml,
				get(content).dedicatedAccountManager,
				get(content).customSlas,
				get(content).auditLogs,
				get(content).trainingSessions
			]
		}
	];
	$.init();
	var div = root_2();
	$.each(div, 5, () => tiers, (t) => t.name, ($$anchor, t) => {
		var div_1 = root_1();
		var h3 = $.child(div_1);
		var text = $.only_child(h3, true);
		var div_2 = $.sibling(h3, 2);
		var span = $.child(div_2);
		var text_1 = $.only_child(span, true);
		var span_1 = $.sibling(span, 2);
		var text_2 = $.only_child(span_1, true);
		$.reset(div_2);
		var ul = $.sibling(div_2, 2);
		$.each(ul, 5, () => $.get(t).features, (f) => f, ($$anchor, f) => {
			var li = root();
			var text_3 = $.sibling($.child(li));
			$.reset(li);
			$.template_effect(() => $.set_text(text_3, ` ${$.get(f) ?? ""}`));
			$.append($$anchor, li);
		});
		$.reset(ul);
		var button = $.sibling(ul, 2);
		var text_4 = $.only_child(button, true);
		$.reset(div_1);
		$.template_effect(() => {
			$.set_class(div_1, 1, `flex flex-col rounded-lg border p-6 ${$.get(t).highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`);
			$.set_text(text, $.get(t).name);
			$.set_text(text_1, $.get(t).price);
			$.set_text(text_2, $.get(t).period);
			$.set_class(button, 1, `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${$.get(t).highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`);
			$.set_text(text_4, $.get(t).name === "Enterprise" ? "Contact Sales" : "Get Started");
		});
		$.append($$anchor, div_1);
	});
	$.reset(div);
	$.append($$anchor, div);
	$.pop();
}
export { PricingTiers as default };
