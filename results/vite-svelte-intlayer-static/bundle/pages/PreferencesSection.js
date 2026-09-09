import "svelte/internal/disclose-version";
import "svelte/internal/flags/legacy";
import * as $ from "svelte/internal/client";
import { getContext } from "svelte";
import { derived, writable } from "svelte/store";
var preferences_section_default = {
	key: "preferences-section",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"arabicAr": "Arabic (ar)",
				"chineseSimplifiedZhCn": "Chinese Simplified (zh-CN)",
				"japaneseJa": "Japanese (ja)",
				"spanishEs": "Spanish (es)",
				"germanDe": "German (de)",
				"frenchFr": "French (fr)",
				"englishEn": "English (en)",
				"defaultLanguage": "Default Language",
				"toggleDarkMode": "Toggle dark mode",
				"useDarkColorScheme": "Use dark color scheme",
				"darkMode": "Dark Mode",
				"toggleNotifications": "Toggle notifications",
				"receiveWeeklyBenchmarkReports": "Receive weekly benchmark reports",
				"emailNotifications": "Email Notifications",
				"preferences": "Preferences"
			},
			"fr": {
				"arabicAr": "Arabe (ar)",
				"chineseSimplifiedZhCn": "Chinois simplifié (zh-CN)",
				"japaneseJa": "Japonais (ja)",
				"spanishEs": "Espagnol (es)",
				"germanDe": "Allemand (de)",
				"frenchFr": "Français (fr)",
				"englishEn": "Anglais (en)",
				"defaultLanguage": "Langue par défaut",
				"toggleDarkMode": "Basculer en mode sombre",
				"useDarkColorScheme": "Utiliser le thème sombre",
				"darkMode": "Mode sombre",
				"toggleNotifications": "Basculer les notifications",
				"receiveWeeklyBenchmarkReports": "Recevoir les rapports hebdomadaires",
				"emailNotifications": "Notifications par email",
				"preferences": "Préférences"
			},
			"es": {
				"arabicAr": "Árabe (ar)",
				"chineseSimplifiedZhCn": "Chino simplificado (zh-CN)",
				"japaneseJa": "Japonés (ja)",
				"spanishEs": "Español (es)",
				"germanDe": "Alemán (de)",
				"frenchFr": "Francés (fr)",
				"englishEn": "Inglés (en)",
				"defaultLanguage": "Idioma predeterminado",
				"toggleDarkMode": "Alternar modo oscuro",
				"useDarkColorScheme": "Usar combinación de colores oscuros",
				"darkMode": "Modo oscuro",
				"toggleNotifications": "Alternar notificaciones",
				"receiveWeeklyBenchmarkReports": "Recibir informes semanales de benchmarks",
				"emailNotifications": "Notificaciones por correo electrónico",
				"preferences": "Preferencias"
			},
			"de": {
				"arabicAr": "Arabisch (ar)",
				"chineseSimplifiedZhCn": "Chinesisch (vereinfacht) (zh-CN)",
				"japaneseJa": "Japanisch (ja)",
				"spanishEs": "Spanisch (es)",
				"germanDe": "Deutsch (de)",
				"frenchFr": "Französisch (fr)",
				"englishEn": "Englisch (en)",
				"defaultLanguage": "Standardsprache",
				"toggleDarkMode": "Dunkelmodus umschalten",
				"useDarkColorScheme": "Dunkles Farbschema verwenden",
				"darkMode": "Dunkelmodus",
				"toggleNotifications": "Benachrichtigungen umschalten",
				"receiveWeeklyBenchmarkReports": "Wöchentliche Benchmark-Berichte erhalten",
				"emailNotifications": "E-Mail-Benachrichtigungen",
				"preferences": "Einstellungen"
			},
			"it": {
				"arabicAr": "Arabo (ar)",
				"chineseSimplifiedZhCn": "Cinese semplificato (zh-CN)",
				"japaneseJa": "Giapponese (ja)",
				"spanishEs": "Spagnolo (es)",
				"germanDe": "Tedesco (de)",
				"frenchFr": "Francese (fr)",
				"englishEn": "Inglese (en)",
				"defaultLanguage": "Lingua predefinita",
				"toggleDarkMode": "Attiva/disattiva modalità scura",
				"useDarkColorScheme": "Usa combinazione di colori scuri",
				"darkMode": "Modalità scura",
				"toggleNotifications": "Attiva/disattiva notifiche",
				"receiveWeeklyBenchmarkReports": "Ricevi rapporti settimanali sui benchmark",
				"emailNotifications": "Notifiche email",
				"preferences": "Preferenze"
			},
			"pt": {
				"arabicAr": "Árabe (ar)",
				"chineseSimplifiedZhCn": "Chinês Simplificado (zh-CN)",
				"japaneseJa": "Japonês (ja)",
				"spanishEs": "Espanhol (es)",
				"germanDe": "Alemão (de)",
				"frenchFr": "Francês (fr)",
				"englishEn": "Inglês (en)",
				"defaultLanguage": "Idioma padrão",
				"toggleDarkMode": "Alternar modo escuro",
				"useDarkColorScheme": "Usar esquema de cores escuras",
				"darkMode": "Modo Escuro",
				"toggleNotifications": "Alternar notificações",
				"receiveWeeklyBenchmarkReports": "Receber relatórios semanais de benchmark",
				"emailNotifications": "Notificações por e-mail",
				"preferences": "Preferências"
			},
			"zh": {
				"arabicAr": "阿拉伯语 (ar)",
				"chineseSimplifiedZhCn": "简体中文 (zh-CN)",
				"japaneseJa": "日语 (ja)",
				"spanishEs": "西班牙语 (es)",
				"germanDe": "德语 (de)",
				"frenchFr": "法语 (fr)",
				"englishEn": "英语 (en)",
				"defaultLanguage": "默认语言",
				"toggleDarkMode": "切换深色模式",
				"useDarkColorScheme": "使用深色配色方案",
				"darkMode": "深色模式",
				"toggleNotifications": "切换通知",
				"receiveWeeklyBenchmarkReports": "接收每周基准报告",
				"emailNotifications": "电子邮件通知",
				"preferences": "偏好设置"
			},
			"ja": {
				"arabicAr": "アラビア語 (ar)",
				"chineseSimplifiedZhCn": "中国語（簡体字）(zh-CN)",
				"japaneseJa": "日本語 (ja)",
				"spanishEs": "スペイン語 (es)",
				"germanDe": "ドイツ語 (de)",
				"frenchFr": "フランス語 (fr)",
				"englishEn": "英語 (en)",
				"defaultLanguage": "デフォルトの言語",
				"toggleDarkMode": "ダークモードを切り替える",
				"useDarkColorScheme": "ダークカラー構成を使用する",
				"darkMode": "ダークモード",
				"toggleNotifications": "通知を切り替える",
				"receiveWeeklyBenchmarkReports": "毎週のベンチマークレポートを受け取る",
				"emailNotifications": "メール通知",
				"preferences": "設定"
			},
			"ko": {
				"arabicAr": "아랍어 (ar)",
				"chineseSimplifiedZhCn": "중국어 간체 (zh-CN)",
				"japaneseJa": "일본어 (ja)",
				"spanishEs": "스페인어 (es)",
				"germanDe": "독일어 (de)",
				"frenchFr": "프랑스어 (fr)",
				"englishEn": "영어 (en)",
				"defaultLanguage": "기본 언어",
				"toggleDarkMode": "어두운 모드 전환",
				"useDarkColorScheme": "어두운 색 구성표 사용",
				"darkMode": "어두운 모드",
				"toggleNotifications": "알림 전환",
				"receiveWeeklyBenchmarkReports": "주간 벤치마크 보고서 받기",
				"emailNotifications": "이메일 알림",
				"preferences": "환경 설정"
			},
			"ru": {
				"arabicAr": "Арабский (ar)",
				"chineseSimplifiedZhCn": "Китайский упрощенный (zh-CN)",
				"japaneseJa": "Японский (ja)",
				"spanishEs": "Испанский (es)",
				"germanDe": "Немецкий (de)",
				"frenchFr": "Французский (fr)",
				"englishEn": "Английский (en)",
				"defaultLanguage": "Язык по умолчанию",
				"toggleDarkMode": "Переключить темный режим",
				"useDarkColorScheme": "Использовать темную цветовую схему",
				"darkMode": "Темный режим",
				"toggleNotifications": "Переключить уведомления",
				"receiveWeeklyBenchmarkReports": "Получать еженедельные отчеты о бенчмарках",
				"emailNotifications": "Email-уведомления",
				"preferences": "Предпочтения"
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
var root = $.from_html(`<section class="rounded-lg border border-border bg-card p-6"><h2 class="mb-4 text-lg font-semibold text-foreground"> </h2> <div class="space-y-4"><div class="flex items-center justify-between"><div><p class="text-sm font-medium text-foreground"> </p> <p class="text-xs text-muted-foreground"> </p></div> <button type="button" class="h-6 w-11 rounded-full bg-primary transition-colors"><span class="block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform"></span></button></div> <div class="flex items-center justify-between"><div><p class="text-sm font-medium text-foreground"> </p> <p class="text-xs text-muted-foreground"> </p></div> <button type="button" class="h-6 w-11 rounded-full bg-muted transition-colors"><span class="block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform"></span></button></div> <div><label for="settings-default-language" class="mb-1 block text-sm font-medium text-foreground"> </label> <select id="settings-default-language" class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none"><option> </option><option> </option><option> </option><option> </option><option> </option><option> </option><option> </option></select></div></div></section>`);
function PreferencesSection($$anchor, $$props) {
	$.push($$props, false);
	const $content = () => $.store_get(content, "$content", $$stores);
	const [$$stores, $$cleanup] = $.setup_stores();
	const content = useDictionary(preferences_section_default);
	$.init();
	var section = root();
	var h2 = $.child(section);
	var text = $.only_child(h2, true);
	var div = $.sibling(h2, 2);
	var div_1 = $.child(div);
	var div_2 = $.child(div_1);
	var p = $.child(div_2);
	var text_1 = $.only_child(p, true);
	var p_1 = $.sibling(p, 2);
	var text_2 = $.only_child(p_1, true);
	$.reset(div_2);
	var button = $.sibling(div_2, 2);
	$.reset(div_1);
	var div_3 = $.sibling(div_1, 2);
	var div_4 = $.child(div_3);
	var p_2 = $.child(div_4);
	var text_3 = $.only_child(p_2, true);
	var p_3 = $.sibling(p_2, 2);
	var text_4 = $.only_child(p_3, true);
	$.reset(div_4);
	var button_1 = $.sibling(div_4, 2);
	$.reset(div_3);
	var div_5 = $.sibling(div_3, 2);
	var label = $.child(div_5);
	var text_5 = $.only_child(label, true);
	var select = $.sibling(label, 2);
	var option = $.child(select);
	var text_6 = $.only_child(option, true);
	var option_value = {};
	var option_1 = $.sibling(option);
	var text_7 = $.only_child(option_1, true);
	var option_1_value = {};
	var option_2 = $.sibling(option_1);
	var text_8 = $.only_child(option_2, true);
	var option_2_value = {};
	var option_3 = $.sibling(option_2);
	var text_9 = $.only_child(option_3, true);
	var option_3_value = {};
	var option_4 = $.sibling(option_3);
	var text_10 = $.only_child(option_4, true);
	var option_4_value = {};
	var option_5 = $.sibling(option_4);
	var text_11 = $.only_child(option_5, true);
	var option_5_value = {};
	var option_6 = $.sibling(option_5);
	var text_12 = $.only_child(option_6, true);
	var option_6_value = {};
	$.reset(select);
	$.reset(div_5);
	$.reset(div);
	$.reset(section);
	$.template_effect(() => {
		$.set_text(text, $content().preferences);
		$.set_text(text_1, $content().emailNotifications);
		$.set_text(text_2, $content().receiveWeeklyBenchmarkReports);
		$.set_attribute(button, "aria-label", $content().toggleNotifications);
		$.set_text(text_3, $content().darkMode);
		$.set_text(text_4, $content().useDarkColorScheme);
		$.set_attribute(button_1, "aria-label", $content().toggleDarkMode);
		$.set_text(text_5, $content().defaultLanguage);
		$.set_text(text_6, $content().englishEn);
		if (option_value !== (option_value = $content().englishEn)) option.__value = option_value;
		$.set_text(text_7, $content().frenchFr);
		if (option_1_value !== (option_1_value = $content().frenchFr)) option_1.__value = option_1_value;
		$.set_text(text_8, $content().germanDe);
		if (option_2_value !== (option_2_value = $content().germanDe)) option_2.__value = option_2_value;
		$.set_text(text_9, $content().spanishEs);
		if (option_3_value !== (option_3_value = $content().spanishEs)) option_3.__value = option_3_value;
		$.set_text(text_10, $content().japaneseJa);
		if (option_4_value !== (option_4_value = $content().japaneseJa)) option_4.__value = option_4_value;
		$.set_text(text_11, $content().chineseSimplifiedZhCn);
		if (option_5_value !== (option_5_value = $content().chineseSimplifiedZhCn)) option_5.__value = option_5_value;
		$.set_text(text_12, $content().arabicAr);
		if (option_6_value !== (option_6_value = $content().arabicAr)) option_6.__value = option_6_value;
	});
	$.append($$anchor, section);
	$.pop();
	$$cleanup();
}
export { PreferencesSection as default };
