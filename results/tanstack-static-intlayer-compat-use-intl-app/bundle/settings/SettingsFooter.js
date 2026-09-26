import React, { Fragment, createContext, createElement, isValidElement, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
var settings_footer_default = {
	key: "settings-footer",
	content: {
		"nodeType": "translation",
		"translation": {
			"en": {
				"saveChanges": "Save Changes",
				"cancel": "Cancel"
			},
			"fr": {
				"saveChanges": "Enregistrer les modifications",
				"cancel": "Annuler"
			},
			"es": {
				"saveChanges": "Guardar cambios",
				"cancel": "Cancelar"
			},
			"de": {
				"saveChanges": "Änderungen speichern",
				"cancel": "Abbrechen"
			},
			"it": {
				"saveChanges": "Salva modifiche",
				"cancel": "Annulla"
			},
			"pt": {
				"saveChanges": "Salvar alterações",
				"cancel": "Cancelar"
			},
			"zh": {
				"saveChanges": "保存更改",
				"cancel": "取消"
			},
			"ja": {
				"saveChanges": "変更を保存",
				"cancel": "キャンセル"
			},
			"ko": {
				"saveChanges": "변경 사항 저장",
				"cancel": "취소"
			},
			"ru": {
				"saveChanges": "Сохранить изменения",
				"cancel": "Отмена"
			}
		}
	}
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
var findMatchingCondition = (enumerationContent, quantity) => {
	const numericKeys = Object.keys(enumerationContent);
	for (const key of numericKeys) {
		const isEqual = !key.startsWith(">") && !key.startsWith("<") && !key.startsWith("=") && parseFloat(key) === quantity || key.startsWith("=") && parseFloat(key.slice(1)) === quantity;
		const isSuperior = key.startsWith(">") && quantity > parseFloat(key.slice(1));
		const isSuperiorOrEqual = key.startsWith(">=") && quantity >= parseFloat(key.slice(2));
		const isInferior = key.startsWith("<") && quantity < parseFloat(key.slice(1));
		const isInferiorOrEqual = key.startsWith("<=") && quantity <= parseFloat(key.slice(2));
		if (isEqual || isSuperior || isSuperiorOrEqual || isInferior || isInferiorOrEqual) return key;
	}
};
var getEnumeration = (enumerationContent, quantity) => {
	return enumerationContent[findMatchingCondition(enumerationContent, quantity) ?? "fallback"];
};
var getInsertion = (content, values) => content.replace(/\{\{\s*(.*?)\s*\}\}/g, (_, key) => {
	return (values[key.trim()] ?? "").toString();
});
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
var log = {
	"mode": "default",
	"prefix": "\x1B[38;5;239m[intlayer] \x1B[0m"
};
var RESET = "\x1B[0m";
var BLUE = "\x1B[34m";
var RED = "\x1B[31m";
var GREEN = "\x1B[32m";
var CYAN = "\x1B[36m";
var getPrefix = (configPrefix) => {
	return configPrefix;
};
var logger = (content, details) => {
	const config = details?.config ?? {};
	const mode = config.mode ?? "default";
	if (mode === "disabled" || details?.isVerbose && mode !== "verbose") return;
	const prefix = getPrefix(config.prefix);
	const flatContent = prefix ? [prefix, ...[content].flat()] : [content].flat();
	const level = details?.level ?? "info";
	(config[level] ?? console[level] ?? config.log ?? console.log)(...flatContent);
};
var getAppLogger = (configuration, globalDetails) => (content, details) => logger(content, {
	...details ?? {},
	config: {
		...configuration?.log,
		...globalDetails?.config,
		...details?.config ?? {}
	}
});
var colorize = (string, color, reset) => color && typeof window === "undefined" ? `${color}${string}${reset ? typeof reset === "boolean" ? RESET : reset : RESET}` : string;
colorize("✗", RED);
colorize("✓", GREEN);
colorize("⏲", BLUE);
var MAX_CACHE_SIZE = 50;
var cache = /* @__PURE__ */ new Map();
var alreadyWarnedConstructors = /* @__PURE__ */ new Set();
var warnMissingIntlConstructor = (constructorName) => {
	if (alreadyWarnedConstructors.has(constructorName)) return;
	alreadyWarnedConstructors.add(constructorName);
	console.warn(`[intlayer] \`Intl.${constructorName}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${constructorName.toLowerCase()}/polyfill\`) before rendering your app.`);
};
var intlConstructorFallbacks = {
	DisplayNames: class DisplayNamesFallback {
		of(code) {
			return code;
		}
	},
	ListFormat: class ListFormatFallback {
		format(list) {
			return Array.from(list).join(", ");
		}
		formatToParts(list) {
			return Array.from(list).flatMap((value, index) => index === 0 ? [{
				type: "element",
				value
			}] : [{
				type: "literal",
				value: ", "
			}, {
				type: "element",
				value
			}]);
		}
	},
	Segmenter: class SegmenterFallback {
		segment(input) {
			let index = 0;
			return Array.from(input).map((segment) => {
				const segmentStart = index;
				index += segment.length;
				return {
					segment,
					index: segmentStart
				};
			});
		}
	}
};
var resolveIntlConstructor = (constructorName) => {
	const nativeConstructor = Intl[constructorName];
	if (typeof nativeConstructor === "function") return nativeConstructor;
	warnMissingIntlConstructor(constructorName);
	return intlConstructorFallbacks[constructorName];
};
function getCachedIntl(intlConstructor, locale, options) {
	const resLoc = locale ?? internationalization?.defaultLocale;
	const key = `${resLoc}|${options ? JSON.stringify(options) : ""}`;
	const cacheKey = intlConstructor;
	let ctorCache = cache.get(cacheKey);
	if (!ctorCache) {
		ctorCache = /* @__PURE__ */ new Map();
		cache.set(cacheKey, ctorCache);
	}
	let instance = ctorCache.get(key);
	if (!instance) {
		const ResolvedConstructor = typeof intlConstructor === "string" ? resolveIntlConstructor(intlConstructor) : intlConstructor;
		if (typeof ResolvedConstructor !== "function") throw new Error(`[intlayer] \`Intl.${String(intlConstructor)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		if (ctorCache.size > MAX_CACHE_SIZE) ctorCache.clear();
		instance = new ResolvedConstructor(resLoc, options);
		ctorCache.set(key, instance);
	}
	return instance;
}
var getPlural = (pluralContent, count, locale) => {
	return pluralContent[getCachedIntl("PluralRules", locale).select(count)] ?? pluralContent.other;
};
var getSelect = (selectContent, value) => {
	const caseList = Object.keys(selectContent);
	const lastCase = caseList[caseList.length - 1];
	return selectContent[value] ?? selectContent.fallback ?? selectContent.other ?? selectContent[lastCase];
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
var navigatePath = (contentValue, path, keySeparator = ".") => {
	if (!path) return contentValue;
	if (contentValue !== null && contentValue !== void 0 && typeof contentValue === "object") {
		const flatValue = contentValue[path];
		if (flatValue !== void 0) return flatValue;
	}
	if (keySeparator === false || !path.includes(keySeparator)) return;
	let current = contentValue;
	for (const part of path.split(keySeparator)) {
		if (current === null || current === void 0 || typeof current !== "object") return;
		current = current[part];
	}
	return current;
};
var ENUMERATION_METADATA_KEYS = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
];
var resolveValuePath = (values, path) => {
	if (path in values) return values[path];
	let current = values;
	for (const part of path.split(".")) {
		if (current === null || current === void 0 || typeof current !== "object") return;
		current = current[part];
	}
	return current;
};
var formatArgument = (value, type, style, locale) => {
	try {
		if (type === "number") {
			const numberValue = Number(value);
			if (style === "percent") return getCachedIntl("NumberFormat", locale, { style: "percent" }).format(numberValue);
			if (style === "integer") return getCachedIntl("NumberFormat", locale, { maximumFractionDigits: 0 }).format(numberValue);
			return getCachedIntl("NumberFormat", locale).format(numberValue);
		}
		if (type === "date" || type === "time") {
			const dateValue = value instanceof Date ? value : new Date(value);
			const dateTimeStyle = [
				"short",
				"medium",
				"long",
				"full"
			].includes(style ?? "") ? style : type === "date" ? "medium" : "short";
			return getCachedIntl("DateTimeFormat", locale, type === "date" ? { dateStyle: dateTimeStyle } : { timeStyle: dateTimeStyle }).format(dateValue);
		}
	} catch {}
	return String(value);
};
var interpolateMessage = (template, values = {}, locale = "en") => template.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (match, path, type, style) => {
	const value = resolveValuePath(values, path);
	if (value === void 0) return match;
	return type ? formatArgument(value, type, style, locale) : String(value);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (match, path, type, style) => {
	const value = resolveValuePath(values, path);
	if (value === void 0) return match;
	return formatArgument(value, type, style, locale);
}).replace(/\{\s*([\w.]+)\s*\}/g, (match, path) => {
	const value = resolveValuePath(values, path);
	return value === void 0 ? match : String(value);
});
var getSelectorValue = (values, variableName) => values[variableName] ?? values.count ?? values.n;
var resolveMessageNode = (node, values = {}, locale = "en") => {
	if (node === null || node === void 0) return node;
	if (typeof node === "string") return interpolateMessage(node, values, locale);
	if (typeof node === "number" || typeof node === "boolean") return String(node);
	if (typeof node === "function") try {
		return resolveMessageNode(node(values), values, locale);
	} catch {
		return;
	}
	if (Array.isArray(node)) return node.map((item) => String(resolveMessageNode(item, values, locale) ?? "")).join("");
	const typedNode = node;
	if (typedNode.nodeType === "insertion") return resolveMessageNode(typedNode[INSERTION], values, locale);
	if (typedNode.nodeType === "html") return resolveMessageNode(typedNode[HTML], values, locale);
	if (typedNode.nodeType === "plural") {
		const pluralState = typedNode[PLURAL];
		return resolveMessageNode(getPlural(pluralState, Number(getSelectorValue(values, "count") ?? 1), locale), values, locale);
	}
	if (typedNode.nodeType === "enumeration") {
		const enumerationState = typedNode[ENUMERATION];
		const variableName = ENUMERATION_METADATA_KEYS.map((metadataKey) => enumerationState[metadataKey]).find((name) => typeof name === "string") ?? "count";
		const isOrdinal = enumerationState.__intlayer_icu_ordinal === true;
		const options = {};
		for (const [key, value] of Object.entries(enumerationState)) if (!ENUMERATION_METADATA_KEYS.includes(key)) options[key] = value;
		const selector = getSelectorValue(values, variableName);
		let selected;
		if (isOrdinal && !Number.isNaN(Number(selector))) {
			const ordinalCount = Number(selector);
			const ordinalCategory = getCachedIntl("PluralRules", locale, { type: "ordinal" }).select(ordinalCount);
			selected = options[String(ordinalCount)] ?? options[ordinalCategory] ?? options.fallback ?? options.other;
		} else if (typeof selector === "number" || !Number.isNaN(Number(selector))) selected = getEnumeration(options, Number(selector));
		else selected = options[String(selector)] ?? options.fallback ?? options.other;
		return resolveMessageNode(selected, values, locale);
	}
	if (typedNode.nodeType === "select") {
		const selectState = typedNode[SELECT];
		const selector = getSelectorValue(values, typeof typedNode.variable === "string" ? typedNode.variable : "value");
		return resolveMessageNode(getSelect(selectState, String(selector ?? "")), values, locale);
	}
	if (typedNode.nodeType === "gender") {
		const genderState = typedNode[GENDER];
		return resolveMessageNode(genderState[String(values.gender ?? "")] ?? genderState.fallback ?? genderState.other, values, locale);
	}
	return node;
};
var resolveMessageNodeToString = (node, values = {}, locale = "en") => {
	const resolved = resolveMessageNode(node, values, locale);
	return typeof resolved === "string" ? resolved : String(resolved ?? "");
};
var parseTaggedMessage = (message) => {
	const tokens = [];
	const tagRegex = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g;
	let lastIndex = 0;
	let match = tagRegex.exec(message);
	while (match !== null) {
		if (match.index > lastIndex) tokens.push(message.slice(lastIndex, match.index));
		const [, selfClosingTag, tag, inner] = match;
		if (selfClosingTag) tokens.push({
			tag: selfClosingTag,
			children: []
		});
		else if (tag) tokens.push({
			tag,
			children: parseTaggedMessage(inner ?? "")
		});
		lastIndex = match.index + match[0].length;
		match = tagRegex.exec(message);
	}
	if (lastIndex < message.length) tokens.push(message.slice(lastIndex));
	return tokens;
};
var splitRichValues = (values = {}) => {
	const scalarValues = {};
	const renderers = {};
	for (const [valueKey, value] of Object.entries(values)) if (typeof value === "function") renderers[valueKey] = value;
	else scalarValues[valueKey] = value;
	return {
		scalarValues,
		renderers
	};
};
var renderRichTokens = (tokens, renderers) => tokens.map((token, tokenIndex) => {
	if (typeof token === "string") return token;
	const children = renderRichTokens(token.children, renderers);
	const renderer = renderers[token.tag];
	if (typeof renderer === "function") return jsx(Fragment, { children: renderer(children) }, tokenIndex);
	return jsx(Fragment, { children }, tokenIndex);
});
var renderMarkupTokens = (tokens, renderers) => tokens.map((token) => {
	if (typeof token === "string") return token;
	const children = renderMarkupTokens(token.children, renderers);
	const renderer = renderers[token.tag];
	if (typeof renderer === "function") return renderer(children);
	return children;
}).join("");
var createDictionaryTranslator = (locale, content, namespacePrefix) => {
	const resolveKey = (key) => namespacePrefix ? `${namespacePrefix}.${key}` : key;
	return createLookupTranslator(locale, (key) => navigatePath(content, resolveKey(key)), resolveKey);
};
var createLookupTranslator = (locale, lookup, missingKeyFallback) => {
	const resolveToString = (key, values = {}) => {
		const rawValue = lookup(key);
		if (rawValue === null || rawValue === void 0) return void 0;
		return resolveMessageNodeToString(rawValue, values, locale);
	};
	const translate = (key, values) => resolveToString(key, values) ?? missingKeyFallback(key);
	return Object.assign(translate, {
		has: (key) => lookup(key) !== void 0,
		raw: (key) => lookup(key),
		rich: (key, values) => {
			const { scalarValues, renderers } = splitRichValues(values);
			const message = resolveToString(key, scalarValues);
			if (message === void 0) return missingKeyFallback(key);
			return jsx(Fragment$1, { children: renderRichTokens(parseTaggedMessage(message), renderers) });
		},
		markup: (key, values) => {
			const { scalarValues, renderers } = splitRichValues(values);
			const message = resolveToString(key, scalarValues);
			if (message === void 0) return missingKeyFallback(key);
			return renderMarkupTokens(parseTaggedMessage(message), renderers);
		}
	});
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
var setLocaleInStorageClient = (locale, options) => {
	if (options?.isCookieEnabled === false) return;
	isStoredLocaleCached = false;
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
var setLocaleInStorage = (locale, isCookieEnabled) => setLocaleInStorageClient(locale, {
	...localeStorageOptions,
	isCookieEnabled
});
var setIntlayerIdentifier = () => {
	if (typeof window !== "undefined") window.intlayer = { enabled: true };
};
var localeResolver = (selectedLocale, locales = internationalization?.locales, defaultLocale = internationalization?.defaultLocale) => {
	if (locales?.includes(selectedLocale)) return selectedLocale;
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
	get locale() {
		return getLocaleInStorage() ?? internationalization?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: true
});
var IntlayerProviderContent = ({ locale: localeProp, defaultLocale: defaultLocaleProp, variant, children, setLocale: setLocaleProp, disableEditor, isCookieEnabled }) => {
	const { locales: availableLocales, defaultLocale: defaultLocaleConfig } = internationalization ?? {};
	const [currentLocale, setCurrentLocale] = useState(() => localeProp ?? getLocaleInStorage() ?? defaultLocaleProp ?? defaultLocaleConfig);
	const [adoptedLocaleProp, setAdoptedLocaleProp] = useState(localeProp);
	if (localeProp !== adoptedLocaleProp) {
		setAdoptedLocaleProp(localeProp);
		if (localeProp && localeProp !== currentLocale) setCurrentLocale(localeProp);
	}
	useEffect(() => {
		setIntlayerIdentifier();
	}, []);
	const setLocaleBase = useCallback((newLocale) => {
		if (currentLocale.toString() === newLocale.toString()) return;
		if (!availableLocales?.map(String).includes(newLocale)) {
			console.error(`Locale ${newLocale} is not available`);
			return;
		}
		setCurrentLocale(newLocale);
		setLocaleInStorage(newLocale, isCookieEnabled);
	}, [
		currentLocale,
		availableLocales,
		isCookieEnabled
	]);
	const setLocale = setLocaleProp ?? setLocaleBase;
	const resolvedLocale = localeResolver(currentLocale);
	const contextValue = useMemo(() => ({
		locale: resolvedLocale,
		setLocale,
		variant,
		disableEditor
	}), [
		resolvedLocale,
		setLocale,
		variant,
		disableEditor
	]);
	return jsx(IntlayerClientContext.Provider, {
		value: contextValue,
		children
	});
};
var IntlayerProvider = ({ children, ...props }) => jsxs(IntlayerProviderContent, {
	...props,
	children: [
		false,
		false,
		children
	]
});
var useDictionary$1 = (dictionary, localeOrSelector) => {
	const { locale: currentLocale, variant: contextVariant } = useContext(IntlayerClientContext) ?? {};
	const argument = localeOrSelector ?? currentLocale;
	const argumentIdentity = argument;
	return useMemo(() => getDictionary(dictionary, argument), [dictionary.key, argumentIdentity]);
};
var useDictionary = ((dictionary, namespacePrefix) => {
	const { locale } = useContext(IntlayerClientContext) ?? {};
	return createDictionaryTranslator(locale, useDictionary$1(dictionary), namespacePrefix);
});
var IntlProvider = ({ locale, children, messages: _messages, formats: _formats, now: _now, timeZone: _timeZone, onError: _onError, getMessageFallback: _getMessageFallback }) => {
	if (typeof _messages !== "undefined") getAppLogger({ log })(`${colorize("IntlProvider", CYAN)} do not pass the messages prop with intlayer. Messages are loaded automatically under the hood for bundle optimization reason`);
	return jsx(IntlayerProvider, {
		locale,
		children
	}, String(locale));
};
function SettingsFooter() {
	const t = useDictionary(settings_footer_default);
	return jsxs("div", {
		className: "flex justify-end gap-3",
		children: [jsx("button", {
			type: "button",
			className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors",
			children: t("cancel")
		}), jsx("button", {
			type: "submit",
			className: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
			children: t("saveChanges")
		})]
	});
}
function Wrapper({ children }) {
	return jsx(React.Suspense, {
		fallback: null,
		children: jsx(IntlProvider, {
			locale: "en",
			timeZone: "UTC",
			now: /* @__PURE__ */ new Date("2024-01-01"),
			children
		})
	});
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(SettingsFooter, {}) });
}
export { Wrapped as default };
