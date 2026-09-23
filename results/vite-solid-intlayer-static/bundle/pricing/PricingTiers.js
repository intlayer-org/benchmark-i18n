import { className, createComponent, effect, insert, memo, template } from "solid-js/web";
import { For, createContext, createMemo, lazy, useContext } from "solid-js";
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
var e = {
	constructor: "constructor",
	length: "length",
	slice: "slice",
	promiseThen: "then",
	toString: "toString",
	valueOf: "valueOf",
	value: "value"
};
var t = (e) => typeof e == "string" && /^\d+$/.test(e);
var n$1 = ({ children: n, value: r, additionalProps: i }) => {
	let a = [n];
	if (a.value = r, i) for (let e in i) a[e] = i[e];
	return new Proxy(a, { get(n, i, a) {
		if (i === e.value) return r;
		if (i === Symbol.toPrimitive) return (e) => e === "number" ? Number(r) : r ?? "";
		if (i === e.toString) return () => String(r ?? "");
		if (i === e.valueOf) return () => r;
		if (i === e.slice) return Reflect.get(n, i, a);
		if (r != null && typeof i == "string" && i !== e.constructor && i !== e.length && !t(i)) {
			let e = Object(r);
			if (i in e) {
				let t = Reflect.get(e, i);
				return typeof t == "function" ? t.bind(r) : t;
			}
		}
		return Reflect.get(n, i, a);
	} });
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
	"enableProxy": false,
	"storage": {
		"cookies": [{
			"name": "INTLAYER_LOCALE",
			"attributes": { "path": "/" }
		}],
		"headers": [{ "name": "x-intlayer-locale" }]
	},
	"basePath": ""
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
var w = null;
var T = null;
w?.catch(() => {}), T?.catch(() => {});
var E = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (n, { plugins: o, ...s }) => n$1({
		...s,
		value: s.children,
		children: s.children
	})
};
var D = fallbackPlugin;
var k = fallbackPlugin;
lazy(() => w.then((e) => ({ default: e.MarkdownRenderer })));
lazy(() => w.then((e) => ({ default: e.MarkdownMetadataRenderer })));
var N = fallbackPlugin;
lazy(() => T.then((e) => ({ default: e })));
var F = fallbackPlugin;
var I = /* @__PURE__ */ new Map();
var L = (e, t = !0) => {
	let n = `${e ?? internationalization.defaultLocale}_${t}`;
	if (I.has(n)) return I.get(n);
	let r = [
		translationPlugin(e ?? internationalization.defaultLocale, t ? internationalization.defaultLocale : void 0),
		enumerationPlugin,
		pluralPlugin(e ?? internationalization.defaultLocale),
		conditionPlugin,
		nestedPlugin(e ?? internationalization.defaultLocale),
		filePlugin,
		genderPlugin,
		selectPlugin,
		E,
		D,
		k,
		N,
		F
	];
	return I.set(n, r), r;
};
var n = (n, r) => {
	return getDictionary(n, r, L(typeof r == "object" && r ? r.locale : r));
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
var a$1 = getLocaleFromStorageClient(localeStorageOptions);
var b = createContext({
	locale: () => a$1 ?? internationalization?.defaultLocale,
	setLocale: () => null
});
var a = Symbol("LOADABLE_SETTLED_VALUE");
var h = (e) => {
	if (!(e === null || typeof e != "object" && typeof e != "function")) return e[a];
};
var o = (o, s) => {
	let c = useContext(b) ?? {}, l = createMemo(() => {
		let t = c?.locale?.();
		return n(h(o) ?? o, s ?? t);
	});
	return new Proxy(l, {
		get(e, t) {
			return e()?.[t];
		},
		apply(e, t, n) {
			return Reflect.apply(e, t, n);
		}
	});
};
var _tmpl$ = template(`<div class="grid gap-6 md:grid-cols-3">`);
var _tmpl$2 = template(`<div><h3 class="text-lg font-semibold text-foreground"></h3><div class=my-4><span class="text-3xl font-bold text-foreground"></span><span class="text-sm text-muted-foreground"></span></div><ul class="mb-6 flex-1 space-y-2"></ul><button type=button>`);
var _tmpl$3 = template(`<li class="flex items-center gap-2 text-sm text-muted-foreground"><span class=text-primary>✓</span> `);
function PricingTiers() {
	const content = o(pricing_tiers_default);
	const tiers = [
		{
			name: content().u.value,
			price: "$0",
			period: "forever",
			features: [
				content().x.value,
				"3 libraries",
				content().f.value,
				content().s.value
			]
		},
		{
			name: content().r.value,
			price: "$29",
			period: "/month",
			features: [
				content().w.value,
				content().a.value,
				content().p.value,
				content().q.value,
				content().e.value,
				content().n.value
			],
			highlighted: true
		},
		{
			name: content().k.value,
			price: content().h.value,
			period: "",
			features: [
				content().l.value,
				content().o.value,
				content().t.value,
				content().j.value,
				content().i.value,
				content().b.value,
				content().v.value
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
					var _c$ = memo(() => t.name === content().k.value);
					return () => _c$() ? content().g.value : content().m.value;
				})());
				effect((_p$) => {
					var _v$ = `flex flex-col rounded-lg border p-6 ${t.highlighted ? content().d.value : "border-border bg-card"}`, _v$2 = `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${t.highlighted ? "bg-primary text-primary-foreground" : content().c.value}`;
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
