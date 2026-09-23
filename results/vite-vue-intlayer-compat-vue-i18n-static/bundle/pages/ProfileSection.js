import { computed, createElementBlock, createElementVNode, defineComponent, getCurrentInstance, h, inject, openBlock, readonly, ref, renderSlot, toDisplayString, unref } from "vue";
var resolveNamedOptions = (formatOrOptions, locale, namedFormats) => {
	if (typeof formatOrOptions === "string") return namedFormats?.[locale]?.[formatOrOptions] ?? namedFormats?.[locale.split("-")[0] ?? ""]?.[formatOrOptions];
	return formatOrOptions;
};
var formatDateValue = (value, formatOrOptions, locale, datetimeFormats) => {
	const dateValue = value instanceof Date ? value : new Date(value);
	const options = resolveNamedOptions(formatOrOptions, locale, datetimeFormats);
	try {
		return new Intl.DateTimeFormat(locale, options).format(dateValue);
	} catch {
		return String(value);
	}
};
var formatNumberValue = (value, formatOrOptions, locale, numberFormats) => {
	const options = resolveNamedOptions(formatOrOptions, locale, numberFormats);
	try {
		return new Intl.NumberFormat(locale, options).format(value);
	} catch {
		return String(value);
	}
};
var TRANSLATION = "translation";
var ENUMERATION = "enumeration";
var PLURAL = "plural";
var INSERTION = "insertion";
var OBJECT = "object";
var ARRAY = "array";
var MARKDOWN = "markdown";
var HTML = "html";
var GENDER = "gender";
var SELECT = "select";
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
var splitChoices = (message) => message.split(/(?<!\\)\|/).map((part) => part.replace(/\\\|/g, "|").trim());
var getChoiceIndex = (choice, choicesLength) => {
	const absoluteChoice = Math.abs(choice);
	if (choicesLength === 2) return absoluteChoice ? absoluteChoice > 1 ? 1 : 0 : 1;
	return absoluteChoice ? Math.min(absoluteChoice, 2) : 0;
};
var parseTranslateArguments = (args) => {
	const parsed = { values: {} };
	for (const arg of args) if (typeof arg === "number") parsed.count = arg;
	else if (typeof arg === "string") parsed.defaultMessage = arg;
	else if (Array.isArray(arg)) parsed.values = { ...arg.map(String) };
	else if (typeof arg === "object" && arg !== null) {
		const objectArg = arg;
		parsed.values = objectArg;
		if (typeof objectArg.plural === "number") parsed.count = objectArg.plural;
	}
	return parsed;
};
var resolveVueMessage = (value, values, count, locale) => {
	const interpolationValues = { ...values };
	if (count !== void 0) {
		interpolationValues.count ??= count;
		interpolationValues.n ??= count;
	}
	if (typeof value === "string") {
		let message = value;
		if (/(?<!\\)\|/.test(message)) {
			const parts = splitChoices(message);
			message = parts[getChoiceIndex(count ?? 1, parts.length)] ?? message;
		}
		return interpolateMessage(message, interpolationValues, locale);
	}
	const resolved = resolveMessageNode(value, interpolationValues, locale);
	return typeof resolved === "string" ? resolved : String(resolved ?? "");
};
var RESET = "\x1B[0m";
var GREY = "\x1B[90m";
var BLUE = "\x1B[34m";
var RED = "\x1B[31m";
var GREEN = "\x1B[32m";
var MAGENTA = "\x1B[35m";
var BEIGE = "\x1B[38;5;3m";
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
var colorizeKey = (keyPath, color = BEIGE, reset = RESET) => [keyPath].flat().map((key) => colorize(key, color, reset)).join(`, `);
colorize("✗", RED);
colorize("✓", GREEN);
colorize("⏲", BLUE);
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
var getDictionaries = () => ({});
var PROTOTYPE_METHOD_NAMES = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]);
var createSafeFallback = (path = "") => {
	return new Proxy((() => path), { get: (target, prop) => {
		if (prop === "toJSON" || prop === Symbol.toPrimitive || prop === "toString" || prop === "valueOf") return () => path;
		if (prop === "then") return;
		if (PROTOTYPE_METHOD_NAMES.has(prop)) return Object.prototype[prop].bind(target);
		if (prop === Symbol.iterator) return function* () {
			yield path;
		};
		return createSafeFallback(path ? `${path}.${String(prop)}` : String(prop));
	} });
};
var warnedMissingDictionaries = /* @__PURE__ */ new Set();
var getIntlayer = (key, localeOrSelector, plugins) => {
	const dictionary = getDictionaries()[key];
	if (!dictionary && true) {
		if (!warnedMissingDictionaries.has(key)) {
			getAppLogger({ log })(typeof window === "undefined" ? `Dictionary ${colorizeKey(key)} was not found. Using fallback proxy.` : `Dictionary ${key} was not found. Using fallback proxy.`, { level: "warn" });
			warnedMissingDictionaries.add(key);
		}
		return createSafeFallback(key);
	}
	return getDictionary(dictionary, localeOrSelector, plugins);
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
var conditionPlugin = fallbackPlugin;
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
var setIntlayerIdentifier = () => {
	if (typeof window !== "undefined") window.intlayer = { enabled: true };
};
var i = Symbol("intlayer");
var a$2 = null;
var o$1 = (i, o = !0, s) => {
	if (a$2) return a$2;
	setIntlayerIdentifier();
	let { defaultLocale: c } = internationalization ?? {}, l = ref(i ?? c), u = (e) => {
		l.value = e;
	}, d = ref(s);
	return a$2 = {
		locale: readonly(l),
		setLocale: u,
		variant: readonly(d),
		setVariant: (e) => {
			d.value = e;
		},
		isCookieEnabled: o
	}, a$2;
};
var s$2 = (e, t) => {
	let { locale: n, isCookieEnabled: r, variant: a } = t ?? {}, s = o$1(n, r, a);
	return e.provide(i, s), e;
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
getLocaleFromStorageClient(localeStorageOptions);
var s$1 = (e, t) => setLocaleInStorageClient(e, {
	...localeStorageOptions,
	isCookieEnabled: t
});
var { defaultLocale: a, locales: o } = internationalization ?? {}, s = ({ isCookieEnabled: i$1, onLocaleChange: s } = {}) => {
	let c = inject(i);
	return {
		locale: computed(() => c?.locale?.value ?? a),
		defaultLocale: a,
		availableLocales: o,
		setLocale: (e) => {
			if (!o?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			c && c.setLocale(e), s$1(e, i$1 ?? c?.isCookieEnabled ?? !0), s?.(e);
		}
	};
};
var I18nInjectionKey = Symbol("global-i18n");
var DEFAULT_NAMESPACE = "translation";
var lookupInDictionary = (locale, dictionaryKey, path) => {
	try {
		const value = navigatePath(getIntlayer(dictionaryKey, locale), path);
		if (value !== void 0 && value !== null) return value;
	} catch {}
};
var lookupRaw = (locale, namespace, key) => {
	let targetNamespace = namespace;
	let path = key;
	if (key.includes(":")) {
		const separatorIndex = key.indexOf(":");
		targetNamespace = key.slice(0, separatorIndex);
		path = key.slice(separatorIndex + 1);
	}
	if (targetNamespace) {
		const value = lookupInDictionary(locale, targetNamespace, path);
		if (value !== void 0) return value;
	}
	if (path.includes(".")) {
		const separatorIndex = path.indexOf(".");
		const value = lookupInDictionary(locale, path.slice(0, separatorIndex), path.slice(separatorIndex + 1));
		if (value !== void 0) return value;
	}
	if (!targetNamespace) {
		const value = lookupInDictionary(locale, DEFAULT_NAMESPACE, path);
		if (value !== void 0) return value;
	}
};
var translateKey = (locale, namespace, key, args, fallbackMessages) => {
	const { values, count, defaultMessage } = parseTranslateArguments(args);
	const rawValue = lookupRaw(locale, namespace, key);
	if (rawValue === void 0) {
		if (fallbackMessages?.[locale]) {
			const targetPath = namespace ? `${namespace}.${key}` : key;
			const fallbackValue = navigatePath(fallbackMessages[locale], targetPath);
			if (fallbackValue !== void 0) return resolveVueMessage(fallbackValue, values, count, locale);
		}
		if (defaultMessage !== void 0) return resolveVueMessage(defaultMessage, values, count, locale);
		return key;
	}
	return resolveVueMessage(rawValue, values, count, locale);
};
var getAvailableLocales = () => internationalization?.locales?.map(String) ?? [];
var warnDeprecatedRuntimeMessages = (location) => {
	getAppLogger({ log })(`${colorize(location, CYAN)} has no effect with ${colorize("@intlayer/vue-i18n", MAGENTA)} — translations are managed by the compiled intlayer dictionaries.`);
};
var createI18n = ((options = {}) => {
	const fallbackMessages = options.messages;
	if (options.messages !== void 0 && true) getAppLogger({ log })(`${colorize("createI18n", CYAN)}: the ${colorize("`messages`", CYAN)} option is used as a fallback. For optimal bundle size, remove the locale JSON imports and use ${colorize("useDictionary", CYAN)} or compile your intlayer dictionaries instead:\n  ${colorize("Before:", GREY)} createI18n({ messages: { en, fr, … } })\n  ${colorize("After: ", GREY)} createI18n({})`);
	const client = o$1(options.locale);
	const datetimeFormats = options.datetimeFormats;
	const numberFormats = options.numberFormats;
	const currentLocale = () => String(client.locale.value);
	const localeRef = computed({
		get: () => currentLocale(),
		set: (newLocale) => {
			client.setLocale(newLocale);
		}
	});
	const globalTranslate = (key, ...args) => translateKey(currentLocale(), void 0, key, args, fallbackMessages);
	const globalDate = (value, formatOrOptions) => formatDateValue(value, formatOrOptions, currentLocale(), datetimeFormats);
	const globalNumber = (value, formatOrOptions) => formatNumberValue(value, formatOrOptions, currentLocale(), numberFormats);
	const global = {
		locale: localeRef,
		availableLocales: getAvailableLocales(),
		fallbackLocale: options.fallbackLocale ?? internationalization?.defaultLocale,
		t: globalTranslate,
		tc: globalTranslate,
		te: (key) => lookupRaw(currentLocale(), void 0, key) !== void 0,
		tm: (key) => lookupRaw(currentLocale(), void 0, key) ?? {},
		rt: (message, ...args) => {
			const { values, count } = parseTranslateArguments(args);
			return resolveVueMessage(message, values, count, currentLocale());
		},
		d: globalDate,
		n: globalNumber,
		setLocaleMessage: (_locale, _messages) => {
			warnDeprecatedRuntimeMessages("setLocaleMessage");
		},
		mergeLocaleMessage: (_locale, _messages) => {
			warnDeprecatedRuntimeMessages("mergeLocaleMessage");
		},
		getLocaleMessage: (_locale) => {
			warnDeprecatedRuntimeMessages("getLocaleMessage");
			return {};
		}
	};
	const legacyI18n = {
		get locale() {
			return currentLocale();
		},
		set locale(newLocale) {
			client.setLocale(newLocale);
		},
		get availableLocales() {
			return getAvailableLocales();
		},
		t: globalTranslate,
		tc: globalTranslate,
		te: global.te,
		tm: global.tm,
		rt: global.rt,
		d: globalDate,
		n: globalNumber
	};
	const applyTranslateDirective = (element, binding) => {
		const bindingValue = binding.value;
		if (typeof bindingValue === "string") element.textContent = globalTranslate(bindingValue);
		else if (bindingValue && typeof bindingValue === "object") {
			const directiveArgs = [];
			if (bindingValue.args) directiveArgs.push(bindingValue.args);
			if (typeof bindingValue.choice === "number") directiveArgs.push(bindingValue.choice);
			element.textContent = globalTranslate(bindingValue.path, ...directiveArgs);
		}
	};
	const i18nInstance = {
		global,
		mode: options.legacy === true ? "legacy" : "composition",
		__optionsMessages: fallbackMessages,
		install(app) {
			s$2(app, { locale: options.locale });
			app.provide(I18nInjectionKey, i18nInstance);
			app.config.globalProperties.$t = globalTranslate;
			app.config.globalProperties.$tc = globalTranslate;
			app.config.globalProperties.$te = global.te;
			app.config.globalProperties.$tm = global.tm;
			app.config.globalProperties.$rt = global.rt;
			app.config.globalProperties.$d = globalDate;
			app.config.globalProperties.$n = globalNumber;
			app.config.globalProperties.$i18n = legacyI18n;
			app.directive("t", {
				beforeMount: applyTranslateDirective,
				updated: applyTranslateDirective
			});
		}
	};
	return i18nInstance;
});
var useI18n = ((options) => {
	const { locale: currentLocale, setLocale, availableLocales } = s();
	const fallbackMessages = inject(I18nInjectionKey)?.__optionsMessages;
	const namespace = options?.namespace;
	const datetimeFormats = options?.datetimeFormats;
	const numberFormats = options?.numberFormats;
	const localeRef = computed({
		get: () => currentLocale.value,
		set: (newLocale) => {
			setLocale(newLocale);
		}
	});
	const translate = (key, ...args) => translateKey(currentLocale.value, namespace, key, args, fallbackMessages);
	return {
		locale: localeRef,
		availableLocales,
		t: translate,
		tc: translate,
		te: (key) => lookupRaw(currentLocale.value, namespace, key) !== void 0,
		tm: (key) => lookupRaw(currentLocale.value, namespace, key) ?? {},
		rt: (message, ...args) => {
			const { values, count } = parseTranslateArguments(args);
			return resolveVueMessage(message, values, count, currentLocale.value);
		},
		d: (value, formatOrOptions) => formatDateValue(value, formatOrOptions, currentLocale.value, datetimeFormats),
		n: (value, formatOrOptions) => formatNumberValue(value, formatOrOptions, currentLocale.value, numberFormats)
	};
});
var _hoisted_1 = { class: "rounded-lg border border-border bg-card p-6" };
var _hoisted_2 = { class: "mb-4 text-lg font-semibold text-foreground" };
var _hoisted_3 = { class: "space-y-4" };
var _hoisted_4 = {
	for: "display-name",
	class: "mb-1 block text-sm font-medium text-foreground"
};
var _hoisted_5 = {
	for: "email",
	class: "mb-1 block text-sm font-medium text-foreground"
};
var ProfileSection_default = defineComponent({
	__name: "ProfileSection",
	setup(__props) {
		const { t } = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("section", _hoisted_1, [createElementVNode("h2", _hoisted_2, toDisplayString(unref(t)("settings.profile.title")), 1), createElementVNode("div", _hoisted_3, [createElementVNode("div", null, [createElementVNode("label", _hoisted_4, toDisplayString(unref(t)("settings.profile.displayName")), 1), _cache[0] || (_cache[0] = createElementVNode("input", {
				id: "display-name",
				value: "John Developer",
				class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			}, null, -1))]), createElementVNode("div", null, [createElementVNode("label", _hoisted_5, toDisplayString(unref(t)("settings.profile.email")), 1), _cache[1] || (_cache[1] = createElementVNode("input", {
				id: "email",
				value: "john@example.com",
				class: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
			}, null, -1))])])]);
		};
	}
});
var i18n = createI18n({
	legacy: false,
	locale: "en",
	fallbackLocale: "en"
});
var Wrapper_default = defineComponent({
	__name: "Wrapper",
	setup(__props) {
		const app = getCurrentInstance()?.appContext.app;
		if (app && !app.config.globalProperties.$i18n) app.use(i18n);
		return (_ctx, _cache) => {
			return renderSlot(_ctx.$slots, "default");
		};
	}
});
var ProfileSection_wrapper_default = { render() {
	return h(Wrapper_default, {}, { default: () => h(ProfileSection_default) });
} };
export { ProfileSection_wrapper_default as default };
