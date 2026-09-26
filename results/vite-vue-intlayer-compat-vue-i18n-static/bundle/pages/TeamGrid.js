import { Fragment, computed, createElementBlock, createElementVNode, defineComponent, getCurrentInstance, h, inject, openBlock, readonly, ref, renderList, renderSlot, toDisplayString, unref } from "vue";
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
var dictionaries = {
	"faq": {
		key: "faq",
		content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"header\":{\"title\":\"Frequently Asked Questions\",\"description\":\"Everything you need to know about i18n Benchmark.\"},\"list\":{\"q1\":\"What is i18n Benchmark?\",\"a1\":\"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.\",\"q2\":\"How are benchmarks conducted?\",\"a2\":\"We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.\",\"q3\":\"Which libraries are currently supported?\",\"a3\":{\"fields\":[\"'@'\"],\"nodeType\":\"insertion\",\"insertion\":\"We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, {{'@'}}fluent/react, and Tolgee.\"},\"q4\":\"Can I submit my own benchmarks?\",\"a4\":\"Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.\",\"q5\":\"How often are benchmarks updated?\",\"a5\":\"We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.\",\"q6\":\"Is the data reliable?\",\"a6\":\"We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.\",\"q7\":\"Do you offer consulting services?\",\"a7\":\"Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.\",\"q8\":\"How can I contribute?\",\"a8\":\"There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.\"}},\"fr\":{\"header\":{\"title\":\"Questions fréquentes\",\"description\":\"Tout savoir sur i18n Benchmark.\"},\"list\":{\"q1\":\"Qu'est-ce qu'i18n Benchmark ?\",\"a1\":\"Une suite open source qui mesure et compare performance, taille de bundle et expérience développeur des bibliothèques i18n pour JavaScript et React.\",\"q2\":\"Comment sont menés les benchmarks ?\",\"a2\":\"Tests standardisés sur matériel cohomogène, répétés pour la significativité statistique. Les configs sont publiques sur GitHub.\",\"q3\":\"Quelles bibliothèques sont prises en charge ?\",\"a3\":{\"fields\":[\"'@'\"],\"nodeType\":\"insertion\",\"insertion\":\"react-i18next, react-intl, Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, {{'@'}}fluent/react, Tolgee, etc.\"},\"q4\":\"Puis-je proposer des benchmarks ?\",\"a4\":\"Oui — forkez le dépôt, suivez le guide de contribution et ouvrez une pull request.\",\"q5\":\"À quelle fréquence sont-ils mis à jour ?\",\"a5\":\"Chaque semaine sur les dernières versions stables ; une release majeure relance immédiatement les mesures.\",\"q6\":\"Les données sont-elles fiables ?\",\"a6\":\"Méthodologie statistique stricte, échauffement, détection d'anomalies, intervalles de confiance — données brutes publiées.\",\"q7\":\"Proposez-vous du conseil ?\",\"a7\":\"Oui, le plan Enterprise inclut des heures pour aider les équipes à choisir une solution i18n.\",\"q8\":\"Comment contribuer ?\",\"a8\":\"Benchmarks, documentation, bugs, nouvelles métriques ou sponsorship — voir GitHub.\"}},\"es\":{\"header\":{\"title\":\"Preguntas frecuentes\",\"description\":\"Todo lo que necesitas saber sobre i18n Benchmark.\"},\"list\":{\"q1\":\"¿Qué es i18n Benchmark?\",\"a1\":\"i18n Benchmark es una suite de benchmarking de código abierto que mide y compara el rendimiento, el tamaño del bundle y la experiencia del desarrollador de las bibliotecas de internacionalización para aplicaciones JavaScript y React.\",\"q2\":\"¿Cómo se realizan los benchmarks?\",\"a2\":\"Realizamos pruebas estandarizadas en entornos aislados utilizando hardware consistente. Cada benchmark se repite varias veces para asegurar la significación estadística. Todas las configuraciones de las pruebas están disponibles públicamente en nuestro repositorio de GitHub.\",\"q3\":\"¿Qué bibliotecas se admiten actualmente?\",\"a3\":{\"fields\":[\"'@'\"],\"nodeType\":\"insertion\",\"insertion\":\"Admitimos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, {{'@'}}fluent/react y Tolgee.\"},\"q4\":\"¿Puedo enviar mis propios benchmarks?\",\"a4\":\"¡Sí! Los envíos de benchmarks de la comunidad son bienvenidos. Haz un fork de nuestro repositorio, añade tu benchmark siguiendo nuestra guía de contribución y envía una pull request. Nuestro equipo revisará y fusionará los envíos que califiquen.\",\"q5\":\"¿Con qué frecuencia se actualizan los benchmarks?\",\"a5\":\"Volvemos a ejecutar todos los benchmarks semanalmente con las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones principales activan un ciclo de re-benchmarking inmediato.\",\"q6\":\"¿Son fiables los datos?\",\"a6\":\"Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos brutos se publican junto con nuestro análisis para una total transparencia.\",\"q7\":\"¿Ofrecen servicios de consultoría?\",\"a7\":\"Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso específico, escala y limitaciones.\",\"q8\":\"¿Cómo puedo contribuir?\",\"a8\":\"Hay muchas formas de contribuir: enviar benchmarks, mejorar la documentación, informar de errores, sugerir nuevas métricas o patrocinar el proyecto. Visite nuestro repositorio de GitHub para obtener más detalles.\"}},\"de\":{\"header\":{\"title\":\"Häufig gestellte Fragen\",\"description\":\"Alles, was Sie über i18n Benchmark wissen müssen.\"},\"list\":{\"q1\":\"Was ist i18n Benchmark?\",\"a1\":\"i18n Benchmark ist eine Open-Source-Benchmarking-Suite, die die Leistung, die Bundle-Größe und die Entwicklererfahrung von Internationalisierungsbibliotheken für JavaScript- und React-Anwendungen misst und vergleicht.\",\"q2\":\"Wie werden Benchmarks durchgeführt?\",\"a2\":\"Wir führen standardisierte Tests in isolierten Umgebungen mit konsistenter Hardware durch. Jeder Benchmark wird mehrmals wiederholt, um die statistische Signifikanz sicherzustellen. Alle Testkonfigurationen sind öffentlich in unserem GitHub-Repository verfügbar.\",\"q3\":\"Welche Bibliotheken werden derzeit unterstützt?\",\"a3\":{\"fields\":[\"'@'\"],\"nodeType\":\"insertion\",\"insertion\":\"Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, {{'@'}}fluent/react und Tolgee.\"},\"q4\":\"Kann ich meine eigenen Benchmarks einreichen?\",\"a4\":\"Ja! Community-Beiträge für Benchmarks sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Leitfaden für Beiträge hinzu und senden Sie einen Pull-Request. Unser Team wird die qualifizierten Einsendungen prüfen und zusammenführen.\",\"q5\":\"Wie oft werden Benchmarks aktualisiert?\",\"a5\":\"Wir führen alle Benchmarks wöchentlich mit den neuesten stabilen Versionen jeder Bibliothek erneut aus. Major-Version-Releases lösen sofort einen Re-Benchmark-Zyklus aus.\",\"q6\":\"Sind die Daten zuverlässig?\",\"a6\":\"Wir folgen einer strengen statistischen Methodik, einschließlich Warm-up-Läufen, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.\",\"q7\":\"Bieten Sie Beratungsdienstleistungen an?\",\"a7\":\"Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Ihrer Skalierung und Ihren Einschränkungen geben.\",\"q8\":\"Wie kann ich beitragen?\",\"a8\":\"Es gibt viele Möglichkeiten beizutragen: Benchmarks einreichen, Dokumentation verbessern, Fehler melden, neue Metriken vorschlagen oder das Projekt sponsern. Besuchen Sie unser GitHub-Repository für weitere Details.\"}},\"it\":{\"header\":{\"title\":\"Domande frequenti\",\"description\":\"Tutto quello che c'è da sapere su i18n Benchmark.\"},\"list\":{\"q1\":\"Cos'è i18n Benchmark?\",\"a1\":\"i18n Benchmark è una suite di benchmarking open source che misura e confronta le prestazioni, le dimensioni del bundle e l'esperienza degli sviluppatori delle librerie di internazionalizzazione per applicazioni JavaScript e React.\",\"q2\":\"Come vengono condotti i benchmark?\",\"a2\":\"Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni dei test sono disponibili pubblicamente nel nostro repository GitHub.\",\"q3\":\"Quali librerie sono attualmente supportate?\",\"a3\":{\"fields\":[\"'@'\"],\"nodeType\":\"insertion\",\"insertion\":\"Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, {{'@'}}fluent/react e Tolgee.\"},\"q4\":\"Posso inviare i miei benchmark?\",\"a4\":\"Sì! Gli invii di benchmark da parte della comunità sono i benvenuti. Fai un fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida ai contributi e invia una pull request. Il nostro team esaminerà e unirà gli invii idonei.\",\"q5\":\"Con quale frequenza vengono aggiornati i benchmark?\",\"a5\":\"Rieseguiamo tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ogni libreria. I rilasci di versioni principali innescano un ciclo di re-benchmark immediato.\",\"q6\":\"I dati sono affidabili?\",\"a6\":\"Seguiamo una rigorosa metodologia statistica che include esecuzioni di riscaldamento, rilevamento di valori anomali e intervalli di confidenza. Tutti i dati grezzi sono pubblicati insieme alla nostra analisi per la massima trasparenza.\",\"q7\":\"Offrite servizi di consulenza?\",\"a7\":\"Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano soluzioni i18n. Possiamo fornire raccomandazioni personalizzate in base al caso d'uso specifico, alla scala e ai vincoli.\",\"q8\":\"Come posso contribuire?\",\"a8\":\"Ci sono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per maggiori dettagli.\"}},\"pt\":{\"header\":{\"title\":\"Perguntas frequentes\",\"description\":\"Tudo o que você precisa saber sobre o i18n Benchmark.\"},\"list\":{\"q1\":\"O que é o i18n Benchmark?\",\"a1\":\"O i18n Benchmark é uma suíte de benchmarking de código aberto que mede e compara o desempenho, o tamanho do bundle e a experiência do desenvolvedor das bibliotecas de internacionalização para aplicações JavaScript e React.\",\"q2\":\"Como os benchmarks são conduzidos?\",\"a2\":\"Realizamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir a significância estatística. Todas as configurações de teste estão disponíveis publicamente no nosso repositório GitHub.\",\"q3\":\"Quais bibliotecas são suportadas atualmente?\",\"a3\":{\"fields\":[\"'@'\"],\"nodeType\":\"insertion\",\"insertion\":\"Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, {{'@'}}fluent/react e Tolgee.\"},\"q4\":\"Posso enviar meus próprios benchmarks?\",\"a4\":\"Sim! Contribuições de benchmarks da comunidade são bem-vindas. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará as submissões qualificadas.\",\"q5\":\"Com que frequência os benchmarks são atualizados?\",\"a5\":\"Rexecutamos todos os benchmarks semanalmente contra as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões principais disparam um ciclo de re-benchmarking imediato.\",\"q6\":\"Os dados são confiáveis?\",\"a6\":\"Seguimos uma metodologia estatística rigorosa, incluindo execuções de aquecimento, detecção de valores atípicos e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.\",\"q7\":\"Vocês oferecem serviços de consultoria?\",\"a7\":\"Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base no seu caso de uso específico, escala e restrições.\",\"q8\":\"Como posso contribuir?\",\"a8\":\"Existem muitas maneiras de contribuir: enviar benchmarks, melhorar a documentação, relatar bugs, sugerir novas métricas ou patrocinar o projeto. Visite nosso repositório GitHub para mais detalhes.\"}},\"zh\":{\"header\":{\"title\":\"常见问题\",\"description\":\"关于 i18n 基准测试您需要了解的一切。\"},\"list\":{\"q1\":\"什么是 i18n 基准测试？\",\"a1\":\"i18n 基准测试是一个开源基准测试套件，旨在衡量和比较 JavaScript 和 React 应用程序国际化库的性能、包大小和开发人员体验。\",\"q2\":\"基准测试是如何进行的？\",\"a2\":\"我们在使用一致硬件的隔离环境中运行标准化测试。每个基准测试都重复多次以确保统计显著性。所有测试配置都在我们的 GitHub 存储库中公开可用。\",\"q3\":\"目前支持哪些库？\",\"a3\":{\"fields\":[\"'@'\"],\"nodeType\":\"insertion\",\"insertion\":\"我们支持 react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, {{'@'}}fluent/react 和 Tolgee。\"},\"q4\":\"我可以提交我自己的基准测试吗？\",\"a4\":\"是的！欢迎社区提交基准测试。Fork 我们的存储库，按照我们的贡献指南添加您的基准测试，并提交拉取请求。我们的团队将审核并合并符合条件的提交。\",\"q5\":\"基准测试多久更新一次？\",\"a5\":\"我们每周针对每个库的最新稳定版本重新运行所有基准测试。主要版本发布会立即触发重新基准测试周期。\",\"q6\":\"数据可靠吗？\",\"a6\":\"我们遵循严格的统计方法，包括预热运行、异常值检测和置信区间。所有原始数据都与我们的分析一起发布，以实现完全透明。\",\"q7\":\"你们提供咨询服务吗？\",\"a7\":\"是的，我们的企业计划包括为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的具体用例、规模和限制提供量身定制的建议。\",\"q8\":\"我该如何贡献？\",\"a8\":\"有很多贡献方式：提交基准测试、改进文档、报告错误、建议新指标或赞助项目。访问我们的 GitHub 存储库了解更多详情。\"}},\"ja\":{\"header\":{\"title\":\"よくある質問\",\"description\":\"i18n Benchmarkについて知っておくべきすべてのこと。\"},\"list\":{\"q1\":\"i18n Benchmarkとは何ですか？\",\"a1\":\"i18n Benchmarkは、JavaScriptおよびReactアプリケーション用の国際化ライブラリのパフォーマンス、バンドルサイズ、および開発者体験を測定および比較するオープンソースのベンチマークスイートです。\",\"q2\":\"ベンチマークはどのように実施されますか？\",\"a2\":\"一貫したハードウェアを使用し、分離された環境で標準化されたテストを実行します。統計的な有意性を確保するために、各ベンチマークは複数回繰り返されます。すべてのテスト構成は、GitHubリポジトリで公開されています。\",\"q3\":\"現在サポートされているライブラリは何ですか？\",\"a3\":{\"fields\":[\"'@'\"],\"nodeType\":\"insertion\",\"insertion\":\"react-i18next、react-intl (FormatJS)、Lingui、typesafe-i18n、next-intl、Paraglide、Rosetta、i18n-js、Polyglot.js、vue-i18n、{{'@'}}fluent/react、およびTolgeeをサポートしています。\"},\"q4\":\"自分のベンチマークを投稿できますか？\",\"a4\":\"はい！コミュニティからのベンチマーク投稿を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加し、プルリクエストを送信してください。チームが審査し、要件を満たす投稿をマージします。\",\"q5\":\"ベンチマークはどのくらいの頻度で更新されますか？\",\"a5\":\"各ライブラリの最新の安定版に対して、毎週すべてのベンチマークを再実行します。メジャーバージョンのリリース時は、即座に再ベンチマークサイクルが実行されます。\",\"q6\":\"データは信頼できますか？\",\"a6\":\"ウォームアップ実行、外れ値検出、信頼区間を含む厳格な統計手法に従っています。完全な透明性を確保するため、すべての生データは分析結果とともに公開されます。\",\"q7\":\"コンサルティングサービスは提供していますか？\",\"a7\":\"はい。Enterpriseプランには、i18nソリューションを評価しているチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいて、カスタマイズされた推奨事項を提供できます。\",\"q8\":\"どのように貢献できますか？\",\"a8\":\"貢献する方法はたくさんあります。ベンチマークの投稿、ドキュメントの改善、バグ報告、新しい指標の提案、プロジェクトへのスポンサーなどです。詳細はGitHubリポジトリをご覧ください。\"}},\"ko\":{\"header\":{\"title\":\"자주 묻는 질문\",\"description\":\"i18n Benchmark에 대해 알아야 할 모든 것.\"},\"list\":{\"q1\":\"i18n Benchmark란 무엇인가요?\",\"a1\":\"i18n Benchmark는 JavaScript 및 React 애플리케이션용 국제화 라이브러리의 성능, 번들 크기, 개발자 경험을 측정·비교하는 오픈소스 벤치마크 스위트입니다.\",\"q2\":\"벤치마크는 어떻게 진행되나요?\",\"a2\":\"일관된 하드웨어로 격리된 환경에서 표준화된 테스트를 실행합니다. 통계적 유의성을 위해 각 벤치마크는 여러 번 반복됩니다. 모든 테스트 구성은 GitHub 저장소에 공개되어 있습니다.\",\"q3\":\"현재 지원되는 라이브러리는 무엇인가요?\",\"a3\":{\"fields\":[\"'@'\"],\"nodeType\":\"insertion\",\"insertion\":\"react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, {{'@'}}fluent/react, Tolgee를 지원합니다.\"},\"q4\":\"직접 벤치마크를 제출할 수 있나요?\",\"a4\":\"네, 커뮤니티 벤치마크 제출을 환영합니다. 저장소를 포크하고 기여 가이드에 따라 벤치마크를 추가한 뒤 풀 리퀘스트를 보내 주세요. 팀이 검토하여 조건을 충족하면 병합합니다.\",\"q5\":\"벤치마크는 얼마나 자주 갱신되나요?\",\"a5\":\"각 라이브러리의 최신 안정 버전을 대상으로 매주 모든 벤치마크를 다시 실행합니다. 메이저 버전 출시 시에는 즉시 재벤치마크 사이클을 돌립니다.\",\"q6\":\"데이터는 신뢰할 수 있나요?\",\"a6\":\"웜업 실행, 이상치 제거, 신뢰 구간을 포함한 엄격한 통계 방법을 따릅니다. 완전한 투명성을 위해 모든 원시 데이터를 분석과 함께 공개합니다.\",\"q7\":\"컨설팅 서비스를 제공하나요?\",\"a7\":\"네. Enterprise 플랜에는 i18n 솔루션을 검토하는 팀을 위한 컨설팅 시간이 포함됩니다. 사용 사례, 규모, 제약에 맞춘 권장 사항을 드릴 수 있습니다.\",\"q8\":\"어떻게 기여할 수 있나요?\",\"a8\":\"벤치마크 제출, 문서 개선, 버그 신고, 새 지표 제안, 프로젝트 후원 등 다양한 방법이 있습니다. 자세한 내용은 GitHub 저장소를 참고하세요.\"}},\"ru\":{\"header\":{\"title\":\"Часто задаваемые вопросы\",\"description\":\"Все, что вам нужно знать об i18n Benchmark.\"},\"list\":{\"q1\":\"Что такое i18n Benchmark?\",\"a1\":\"i18n Benchmark — это набор инструментов для бенчмаркинга с открытым исходным кодом, который измеряет и сравнивает производительность, размер бандла и опыт разработчиков библиотек интернационализации для приложений на JavaScript и React.\",\"q2\":\"Как проводятся бенчмарки?\",\"a2\":\"Мы запускаем стандартизированные тесты в изолированных средах на идентичном оборудовании. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов общедоступны в нашем репозитории на GitHub.\",\"q3\":\"Какие библиотеки поддерживаются в данный момент?\",\"a3\":{\"fields\":[\"'@'\"],\"nodeType\":\"insertion\",\"insertion\":\"Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, {{'@'}}fluent/react и Tolgee.\"},\"q4\":\"Могу ли я прислать свои собственные бенчмарки?\",\"a4\":\"Да! Мы приветствуем бенчмарки от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк, следуя руководству для участников, и создайте pull request. Наша команда рассмотрит и примет подходящие заявки.\",\"q5\":\"Как часто обновляются бенчмарки?\",\"a5\":\"Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выход мажорных версий инициирует немедленный цикл повторного тестирования.\",\"q6\":\"Можно ли доверять данным?\",\"a6\":\"Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и расчет доверительных интервалов. Все исходные данные публикуются вместе с нашим анализом для полной прозрачности.\",\"q7\":\"Предоставляете ли вы консалтинговые услуги?\",\"a7\":\"Да, наш план Enterprise включает консультации для команд, выбирающих i18n-решения. Мы можем дать индивидуальные рекомендации на основе вашего конкретного случая, масштаба и ограничений.\",\"q8\":\"Как я могу помочь проекту?\",\"a8\":\"Есть много способов: присылайте бенчмарки, улучшайте документацию, сообщайте о багах, предлагайте новые метрики или станьте спонсором проекта. Посетите наш репозиторий на GitHub для подробностей.\"}}}}"),
		localIds: [
			"faq::sync-json::./locales/{{locale}}.json::locales/en.json",
			"faq::sync-json::./locales/{{locale}}.json::locales/fr.json",
			"faq::sync-json::./locales/{{locale}}.json::locales/es.json",
			"faq::sync-json::./locales/{{locale}}.json::locales/de.json",
			"faq::sync-json::./locales/{{locale}}.json::locales/it.json",
			"faq::sync-json::./locales/{{locale}}.json::locales/pt.json",
			"faq::sync-json::./locales/{{locale}}.json::locales/zh.json",
			"faq::sync-json::./locales/{{locale}}.json::locales/ja.json",
			"faq::sync-json::./locales/{{locale}}.json::locales/ko.json",
			"faq::sync-json::./locales/{{locale}}.json::locales/ru.json"
		]
	},
	"header": {
		key: "header",
		content: {
			"nodeType": "translation",
			"translation": {
				"en": {
					"home": "Home",
					"methodology": "Methodology",
					"mockPages": "Mock Pages",
					"products": "Products",
					"pricing": "Pricing",
					"team": "Team",
					"blog": "Blog",
					"careers": "Careers",
					"faq": "FAQ",
					"contact": "Contact",
					"settings": "Settings"
				},
				"fr": {
					"home": "Accueil",
					"methodology": "Méthodologie",
					"mockPages": "Pages fictives",
					"products": "Produits",
					"pricing": "Tarifs",
					"team": "Équipe",
					"blog": "Blog",
					"careers": "Carrières",
					"faq": "FAQ",
					"contact": "Contact",
					"settings": "Paramètres"
				},
				"es": {
					"home": "Inicio",
					"methodology": "Metodología",
					"mockPages": "Páginas de prueba",
					"products": "Productos",
					"pricing": "Precios",
					"team": "Equipo",
					"blog": "Blog",
					"careers": "Carreras",
					"faq": "FAQ",
					"contact": "Contacto",
					"settings": "Ajustes"
				},
				"de": {
					"home": "Home",
					"methodology": "Methodik",
					"mockPages": "Testseiten",
					"products": "Produkte",
					"pricing": "Preise",
					"team": "Team",
					"blog": "Blog",
					"careers": "Karriere",
					"faq": "FAQ",
					"contact": "Kontakt",
					"settings": "Einstellungen"
				},
				"it": {
					"home": "Home",
					"methodology": "Metodologia",
					"mockPages": "Pagine di test",
					"products": "Prodotti",
					"pricing": "Prezzi",
					"team": "Team",
					"blog": "Blog",
					"careers": "Carriere",
					"faq": "FAQ",
					"contact": "Contatti",
					"settings": "Impostazioni"
				},
				"pt": {
					"home": "Início",
					"methodology": "Metodologia",
					"mockPages": "Páginas de Teste",
					"products": "Produtos",
					"pricing": "Preços",
					"team": "Equipe",
					"blog": "Blog",
					"careers": "Carreiras",
					"faq": "FAQ",
					"contact": "Contato",
					"settings": "Configurações"
				},
				"zh": {
					"home": "首页",
					"methodology": "方法论",
					"mockPages": "模拟页面",
					"products": "产品",
					"pricing": "价格",
					"team": "团队",
					"blog": "博客",
					"careers": "招聘",
					"faq": "常见问题",
					"contact": "联系我们",
					"settings": "设置"
				},
				"ja": {
					"home": "ホーム",
					"methodology": "手法",
					"mockPages": "テストページ",
					"products": "製品",
					"pricing": "価格",
					"team": "チーム",
					"blog": "ブログ",
					"careers": "採用情報",
					"faq": "FAQ",
					"contact": "お問い合わせ",
					"settings": "設定"
				},
				"ko": {
					"home": "홈",
					"methodology": "방법론",
					"mockPages": "모의 페이지",
					"products": "제품",
					"pricing": "가격",
					"team": "팀",
					"blog": "블로그",
					"careers": "채용",
					"faq": "FAQ",
					"contact": "문의",
					"settings": "설정"
				},
				"ru": {
					"home": "Главная",
					"methodology": "Методология",
					"mockPages": "Тестовые страницы",
					"products": "Продукты",
					"pricing": "Цены",
					"team": "Команда",
					"blog": "Блог",
					"careers": "Вакансии",
					"faq": "FAQ",
					"contact": "Контакт",
					"settings": "Настройки"
				}
			}
		},
		localIds: [
			"header::sync-json::./locales/{{locale}}.json::locales/en.json",
			"header::sync-json::./locales/{{locale}}.json::locales/fr.json",
			"header::sync-json::./locales/{{locale}}.json::locales/es.json",
			"header::sync-json::./locales/{{locale}}.json::locales/de.json",
			"header::sync-json::./locales/{{locale}}.json::locales/it.json",
			"header::sync-json::./locales/{{locale}}.json::locales/pt.json",
			"header::sync-json::./locales/{{locale}}.json::locales/zh.json",
			"header::sync-json::./locales/{{locale}}.json::locales/ja.json",
			"header::sync-json::./locales/{{locale}}.json::locales/ko.json",
			"header::sync-json::./locales/{{locale}}.json::locales/ru.json"
		]
	},
	"settings": {
		key: "settings",
		content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"header\":{\"title\":\"Settings\",\"description\":\"Manage your account preferences and configuration.\"},\"profile\":{\"title\":\"Profile\",\"displayName\":\"Display Name\",\"email\":\"Email\"},\"preferences\":{\"title\":\"Preferences\",\"emailNotifications\":\"Email Notifications\",\"weeklyReports\":\"Receive weekly benchmark reports\",\"toggleNotifications\":\"Toggle notifications\",\"darkMode\":\"Dark Mode\",\"darkColorScheme\":\"Use dark color scheme\",\"toggleDarkMode\":\"Toggle dark mode\",\"defaultLanguage\":\"Default Language\",\"english\":\"English (en)\",\"french\":\"French (fr)\",\"german\":\"German (de)\",\"spanish\":\"Spanish (es)\",\"japanese\":\"Japanese (ja)\",\"chinese\":\"Chinese Simplified (zh-CN)\",\"arabic\":\"Arabic (ar)\"},\"apiAccess\":{\"title\":\"API Access\",\"apiKey\":\"API Key\",\"copy\":\"Copy\",\"description\":\"Use this key to access the benchmarking API programmatically.\"},\"footer\":{\"cancel\":\"Cancel\",\"saveChanges\":\"Save Changes\"}},\"fr\":{\"header\":{\"title\":\"Paramètres\",\"description\":\"Gérez les préférences et la configuration de votre compte.\"},\"profile\":{\"title\":\"Profil\",\"displayName\":\"Nom affiché\",\"email\":\"E-mail\"},\"preferences\":{\"title\":\"Préférences\",\"emailNotifications\":\"Notifications e-mail\",\"weeklyReports\":\"Recevoir les rapports hebdomadaires\",\"toggleNotifications\":\"Activer/désactiver les notifications\",\"darkMode\":\"Mode sombre\",\"darkColorScheme\":\"Utiliser le thème sombre\",\"toggleDarkMode\":\"Basculer le mode sombre\",\"defaultLanguage\":\"Langue par défaut\",\"english\":\"Anglais (en)\",\"french\":\"Français (fr)\",\"german\":\"Allemand (de)\",\"spanish\":\"Espagnol (es)\",\"japanese\":\"Japonais (ja)\",\"chinese\":\"Chinois simplifié (zh-CN)\",\"arabic\":\"Arabe (ar)\"},\"apiAccess\":{\"title\":\"Accès API\",\"apiKey\":\"Clé API\",\"copy\":\"Copier\",\"description\":\"Utilisez cette clé pour appeler l'API de benchmark par programmation.\"},\"footer\":{\"cancel\":\"Annuler\",\"saveChanges\":\"Enregistrer\"}},\"es\":{\"header\":{\"title\":\"Ajustes\",\"description\":\"Gestiona las preferencias y la configuración de tu cuenta.\"},\"profile\":{\"title\":\"Perfil\",\"displayName\":\"Nombre visible\",\"email\":\"Correo electrónico\"},\"preferences\":{\"title\":\"Preferencias\",\"emailNotifications\":\"Notificaciones por correo electrónico\",\"weeklyReports\":\"Recibir informes semanales de benchmarks\",\"toggleNotifications\":\"Cambiar notificaciones\",\"darkMode\":\"Modo oscuro\",\"darkColorScheme\":\"Usar esquema de colores oscuro\",\"toggleDarkMode\":\"Cambiar modo oscuro\",\"defaultLanguage\":\"Idioma predeterminado\",\"english\":\"Inglés (en)\",\"french\":\"Francés (fr)\",\"german\":\"Alemán (de)\",\"spanish\":\"Español (es)\",\"japanese\":\"Japonés (ja)\",\"chinese\":\"Chino simplificado (zh-CN)\",\"arabic\":\"Árabe (ar)\"},\"apiAccess\":{\"title\":\"Acceso API\",\"apiKey\":\"Llave API\",\"copy\":\"Copiar\",\"description\":\"Usa esta llave para acceder a la API de benchmarking de forma programática.\"},\"footer\":{\"cancel\":\"Cancelar\",\"saveChanges\":\"Guardar cambios\"}},\"de\":{\"header\":{\"title\":\"Einstellungen\",\"description\":\"Verwalten Sie Ihre Kontoeinstellungen und Konfiguration.\"},\"profile\":{\"title\":\"Profil\",\"displayName\":\"Anzeigename\",\"email\":\"E-Mail\"},\"preferences\":{\"title\":\"Einstellungen\",\"emailNotifications\":\"E-Mail-Benachrichtigungen\",\"weeklyReports\":\"Wöchentliche Benchmark-Berichte erhalten\",\"toggleNotifications\":\"Benachrichtigungen umschalten\",\"darkMode\":\"Dunkelmodus\",\"darkColorScheme\":\"Dunkles Farbschema verwenden\",\"toggleDarkMode\":\"Dunkelmodus umschalten\",\"defaultLanguage\":\"Standardsprache\",\"english\":\"Englisch (en)\",\"french\":\"Französisch (fr)\",\"german\":\"Deutsch (de)\",\"spanish\":\"Spanisch (es)\",\"japanese\":\"Japanisch (ja)\",\"chinese\":\"Chinesisch vereinfacht (zh-CN)\",\"arabic\":\"Arabisch (ar)\"},\"apiAccess\":{\"title\":\"API-Zugriff\",\"apiKey\":\"API-Schlüssel\",\"copy\":\"Kopieren\",\"description\":\"Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen.\"},\"footer\":{\"cancel\":\"Abbrechen\",\"saveChanges\":\"Änderungen speichern\"}},\"it\":{\"header\":{\"title\":\"Impostazioni\",\"description\":\"Gestisci le preferenze del tuo account e la configurazione.\"},\"profile\":{\"title\":\"Profilo\",\"displayName\":\"Nome visualizzato\",\"email\":\"Email\"},\"preferences\":{\"title\":\"Preferenze\",\"emailNotifications\":\"Notifiche via email\",\"weeklyReports\":\"Ricevi rapporti settimanali sui benchmark\",\"toggleNotifications\":\"Attiva/disattiva notifiche\",\"darkMode\":\"Modalità scura\",\"darkColorScheme\":\"Usa lo schema colori scuro\",\"toggleDarkMode\":\"Attiva/disattiva modalità scura\",\"defaultLanguage\":\"Lingua predefinita\",\"english\":\"Inglese (en)\",\"french\":\"Francese (fr)\",\"german\":\"Tedesco (de)\",\"spanish\":\"Spagnolo (es)\",\"japanese\":\"Giapponese (ja)\",\"chinese\":\"Cinese semplificato (zh-CN)\",\"arabic\":\"Arabo (ar)\"},\"apiAccess\":{\"title\":\"Accesso API\",\"apiKey\":\"Chiave API\",\"copy\":\"Copia\",\"description\":\"Usa questa chiave per accedere programmaticamente alle API di benchmarking.\"},\"footer\":{\"cancel\":\"Annulla\",\"saveChanges\":\"Salva modifiche\"}},\"pt\":{\"header\":{\"title\":\"Configurações\",\"description\":\"Gerencie suas preferências de conta e configuração.\"},\"profile\":{\"title\":\"Perfil\",\"displayName\":\"Nome de exibição\",\"email\":\"E-mail\"},\"preferences\":{\"title\":\"Preferências\",\"emailNotifications\":\"Notificações por e-mail\",\"weeklyReports\":\"Receber relatórios semanais de benchmarks\",\"toggleNotifications\":\"Alternar notificações\",\"darkMode\":\"Modo Escuro\",\"darkColorScheme\":\"Usar esquema de cores escuro\",\"toggleDarkMode\":\"Alternar modo escuro\",\"defaultLanguage\":\"Idioma padrão\",\"english\":\"Inglês (en)\",\"french\":\"Francés (fr)\",\"german\":\"Alemão (de)\",\"spanish\":\"Espanhol (es)\",\"japanese\":\"Japonês (ja)\",\"chinese\":\"Chinês Simplificado (zh-CN)\",\"arabic\":\"Árabe (ar)\"},\"apiAccess\":{\"title\":\"Acesso API\",\"apiKey\":\"Chave API\",\"copy\":\"Copiar\",\"description\":\"Use esta chave para acessar a API de benchmarking programaticamente.\"},\"footer\":{\"cancel\":\"Cancelar\",\"saveChanges\":\"Salvar alterações\"}},\"zh\":{\"header\":{\"title\":\"设置\",\"description\":\"管理您的账户偏好和配置。\"},\"profile\":{\"title\":\"个人资料\",\"displayName\":\"显示名称\",\"email\":\"电子邮件\"},\"preferences\":{\"title\":\"偏好\",\"emailNotifications\":\"电子邮件通知\",\"weeklyReports\":\"接收每周基准测试报告\",\"toggleNotifications\":\"切换通知\",\"darkMode\":\"深色模式\",\"darkColorScheme\":\"使用深色配色方案\",\"toggleDarkMode\":\"切换深色模式\",\"defaultLanguage\":\"默认语言\",\"english\":\"英语 (en)\",\"french\":\"法语 (fr)\",\"german\":\"德语 (de)\",\"spanish\":\"西班牙语 (es)\",\"japanese\":\"日语 (ja)\",\"chinese\":\"简体中文 (zh-CN)\",\"arabic\":\"阿拉伯语 (ar)\"},\"apiAccess\":{\"title\":\"API 访问\",\"apiKey\":\"API 密钥\",\"copy\":\"复制\",\"description\":\"使用此密钥以编程方式访问基准测试 API。\"},\"footer\":{\"cancel\":\"取消\",\"saveChanges\":\"保存更改\"}},\"ja\":{\"header\":{\"title\":\"設定\",\"description\":\"アカウント設定と構成を管理します。\"},\"profile\":{\"title\":\"プロフィール\",\"displayName\":\"表示名\",\"email\":\"メールアドレス\"},\"preferences\":{\"title\":\"設定\",\"emailNotifications\":\"メール通知\",\"weeklyReports\":\"毎週のベンチマークレポートを受け取る\",\"toggleNotifications\":\"通知の切り替え\",\"darkMode\":\"ダークモード\",\"darkColorScheme\":\"ダークカラー（暗い配色）を使用する\",\"toggleDarkMode\":\"ダークモードの切り替え\",\"defaultLanguage\":\"デフォルトの言語\",\"english\":\"英語 (en)\",\"french\":\"フランス語 (fr)\",\"german\":\"ドイツ語 (de)\",\"spanish\":\"スペイン語 (es)\",\"japanese\":\"日本語 (ja)\",\"chinese\":\"中国語（簡体字） (zh-CN)\",\"arabic\":\"アラビア語 (ar)\"},\"apiAccess\":{\"title\":\"APIアクセス\",\"apiKey\":\"APIキー\",\"copy\":\"コピー\",\"description\":\"このキーを使用して、プログラムでベンチマークAPIにアクセスします。\"},\"footer\":{\"cancel\":\"キャンセル\",\"saveChanges\":\"変更を保存\"}},\"ko\":{\"header\":{\"title\":\"설정\",\"description\":\"계정 기본 설정과 구성을 관리합니다.\"},\"profile\":{\"title\":\"프로필\",\"displayName\":\"표시 이름\",\"email\":\"이메일\"},\"preferences\":{\"title\":\"환경 설정\",\"emailNotifications\":\"이메일 알림\",\"weeklyReports\":\"주간 벤치마크 리포트 받기\",\"toggleNotifications\":\"알림 켜기/끄기\",\"darkMode\":\"다크 모드\",\"darkColorScheme\":\"어두운 색 구성 사용\",\"toggleDarkMode\":\"다크 모드 전환\",\"defaultLanguage\":\"기본 언어\",\"english\":\"영어 (en)\",\"french\":\"프랑스어 (fr)\",\"german\":\"독일어 (de)\",\"spanish\":\"스페인어 (es)\",\"japanese\":\"일본어 (ja)\",\"chinese\":\"중국어 간체 (zh-CN)\",\"arabic\":\"아랍어 (ar)\"},\"apiAccess\":{\"title\":\"API 액세스\",\"apiKey\":\"API 키\",\"copy\":\"복사\",\"description\":\"이 키를 사용하면 벤치마크 API를 프로그래밍 방식으로 호출할 수 있습니다.\"},\"footer\":{\"cancel\":\"취소\",\"saveChanges\":\"변경 저장\"}},\"ru\":{\"header\":{\"title\":\"Настройки\",\"description\":\"Управляйте предпочтениями и конфигурацией вашей учетной записи.\"},\"profile\":{\"title\":\"Профиль\",\"displayName\":\"Отображаемое имя\",\"email\":\"Электронная почта\"},\"preferences\":{\"title\":\"Предпочтения\",\"emailNotifications\":\"Уведомления по почте\",\"weeklyReports\":\"Получать еженедельные отчеты о бенчмарках\",\"toggleNotifications\":\"Переключить уведомления\",\"darkMode\":\"Темная тема\",\"darkColorScheme\":\"Использовать темную цветовую схему\",\"toggleDarkMode\":\"Переключить темную тему\",\"defaultLanguage\":\"Язык по умолчанию\",\"english\":\"Английский (en)\",\"french\":\"Французский (fr)\",\"german\":\"Немецкий (de)\",\"spanish\":\"Испанский (es)\",\"japanese\":\"Японский (ja)\",\"chinese\":\"Китайский упрощенный (zh-CN)\",\"arabic\":\"Арабский (ar)\"},\"apiAccess\":{\"title\":\"Доступ к API\",\"apiKey\":\"Ключ API\",\"copy\":\"Копировать\",\"description\":\"Используйте этот ключ для программного доступа к API бенчмаркинга.\"},\"footer\":{\"cancel\":\"Отмена\",\"saveChanges\":\"Сохранить изменения\"}}}}"),
		localIds: [
			"settings::sync-json::./locales/{{locale}}.json::locales/en.json",
			"settings::sync-json::./locales/{{locale}}.json::locales/fr.json",
			"settings::sync-json::./locales/{{locale}}.json::locales/es.json",
			"settings::sync-json::./locales/{{locale}}.json::locales/de.json",
			"settings::sync-json::./locales/{{locale}}.json::locales/it.json",
			"settings::sync-json::./locales/{{locale}}.json::locales/pt.json",
			"settings::sync-json::./locales/{{locale}}.json::locales/zh.json",
			"settings::sync-json::./locales/{{locale}}.json::locales/ja.json",
			"settings::sync-json::./locales/{{locale}}.json::locales/ko.json",
			"settings::sync-json::./locales/{{locale}}.json::locales/ru.json"
		]
	},
	"footer": {
		key: "footer",
		content: {
			"nodeType": "translation",
			"translation": {
				"en": {
					"title": "i18n Benchmark",
					"description": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
					"resources": "Resources",
					"github": "GitHub",
					"methodology": "Methodology",
					"contributing": "Contributing",
					"contact": "Contact",
					"builtWith": "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router."
				},
				"fr": {
					"title": "Benchmark i18n",
					"description": "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.",
					"resources": "Ressources",
					"github": "GitHub",
					"methodology": "Méthodologie",
					"contributing": "Contribuer",
					"contact": "Contact",
					"builtWith": "Benchmark i18n — Projet open-source. Construit avec Vue, Vite et un routeur côté client."
				},
				"es": {
					"title": "i18n Benchmark",
					"description": "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.",
					"resources": "Recursos",
					"github": "GitHub",
					"methodology": "Metodología",
					"contributing": "Contribuir",
					"contact": "Contacto",
					"builtWith": "i18n Benchmark — Proyecto de código abierto. Construido con Vue, Vite y un enrutador en el lado del cliente."
				},
				"de": {
					"title": "i18n Benchmark",
					"description": "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.",
					"resources": "Ressourcen",
					"github": "GitHub",
					"methodology": "Methodik",
					"contributing": "Beitragen",
					"contact": "Kontakt",
					"builtWith": "i18n Benchmark — Open-Source-Projekt. Erstellt mit Vue, Vite & einem clientseitigen Router."
				},
				"it": {
					"title": "i18n Benchmark",
					"description": "Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.",
					"resources": "Risorse",
					"github": "GitHub",
					"methodology": "Metodologia",
					"contributing": "Contribuire",
					"contact": "Contatti",
					"builtWith": "i18n Benchmark — Progetto open source. Costruito con Vue, Vite e un router lato client."
				},
				"pt": {
					"title": "i18n Benchmark",
					"description": "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade da aplicação.",
					"resources": "Recursos",
					"github": "GitHub",
					"methodology": "Metodologia",
					"contributing": "Contribuindo",
					"contact": "Contato",
					"builtWith": "i18n Benchmark — Projeto de código aberto. Construído com Vue, Vite e um roteador no lado do cliente."
				},
				"zh": {
					"title": "i18n Benchmark",
					"description": "一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。",
					"resources": "资源",
					"github": "GitHub",
					"methodology": "方法论",
					"contributing": "贡献",
					"contact": "联系我们",
					"builtWith": "i18n 基准测试 — 开源项目。使用 Vue, Vite 和客户端路由构建。"
				},
				"ja": {
					"title": "i18n Benchmark",
					"description": "国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実世界の影響を測定するためのオープンソーステストアプリケーション。",
					"resources": "リソース",
					"github": "GitHub",
					"methodology": "手法",
					"contributing": "貢献する",
					"contact": "お問い合わせ",
					"builtWith": "i18n Benchmark — オープンソースプロジェクト。Vue、Vite、およびクライアントサイドローターで構築されています。"
				},
				"ko": {
					"title": "i18n Benchmark",
					"description": "국제화 라이브러리가 번들 크기, 로딩 시간, 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈소스 테스트 애플리케이션입니다.",
					"resources": "리소스",
					"github": "GitHub",
					"methodology": "방법론",
					"contributing": "기여",
					"contact": "문의",
					"builtWith": "i18n Benchmark — 오픈소스 프로젝트. Vue, Vite 및 클라이언트 사이드 라우터로 제작되었습니다."
				},
				"ru": {
					"title": "i18n Benchmark",
					"description": "Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.",
					"resources": "Ресурсы",
					"github": "GitHub",
					"methodology": "Методология",
					"contributing": "Участие в проекте",
					"contact": "Контакт",
					"builtWith": "i18n Benchmark — проект с открытым исходным кодом. Создано с использованием Vue, Vite и клиентского роутера."
				}
			}
		},
		localIds: [
			"footer::sync-json::./locales/{{locale}}.json::locales/en.json",
			"footer::sync-json::./locales/{{locale}}.json::locales/fr.json",
			"footer::sync-json::./locales/{{locale}}.json::locales/es.json",
			"footer::sync-json::./locales/{{locale}}.json::locales/de.json",
			"footer::sync-json::./locales/{{locale}}.json::locales/it.json",
			"footer::sync-json::./locales/{{locale}}.json::locales/pt.json",
			"footer::sync-json::./locales/{{locale}}.json::locales/zh.json",
			"footer::sync-json::./locales/{{locale}}.json::locales/ja.json",
			"footer::sync-json::./locales/{{locale}}.json::locales/ko.json",
			"footer::sync-json::./locales/{{locale}}.json::locales/ru.json"
		]
	},
	"mockBanner": {
		key: "mockBanner",
		content: {
			"nodeType": "translation",
			"translation": {
				"en": "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.",
				"fr": "⚠️ Cette page contient des données fictives à des fins de benchmark uniquement. Elle n'est liée à aucune activité commerciale ou service réel.",
				"es": "⚠️ Esta página contiene datos ficticios solo con fines de benchmarking. No está relacionada con ninguna empresa o servicio real.",
				"de": "⚠️ Diese Seite enthält fiktive Daten, die nur für Benchmarking-Zwecke bestimmt sind. Sie steht in keiner Verbindung zu einem realen Unternehmen oder Dienst.",
				"it": "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è collegata ad alcuna attività o servizio reale.",
				"pt": "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhuma empresa ou serviço real.",
				"zh": "⚠️ 此页面包含虚构数据，仅用于基准测试目的。与任何实际业务或服务无关。",
				"ja": "⚠️ このページにはベンチマーク目的のみの架空のデータが含まれています。実在の企業やサービスとは関係ありません。",
				"ko": "⚠️ 이 페이지는 벤치마킹 목적으로만 사용되는 모의 데이터를 포함합니다. 실제 사업이나 서비스와는 관련이 없습니다.",
				"ru": "⚠️ Эта страница содержит фиктивные данные только для целей бенчмаркинга. Она не связана ни с каким реальным бизнесом или сервисом."
			}
		},
		localIds: [
			"mockBanner::sync-json::./locales/{{locale}}.json::locales/en.json",
			"mockBanner::sync-json::./locales/{{locale}}.json::locales/fr.json",
			"mockBanner::sync-json::./locales/{{locale}}.json::locales/es.json",
			"mockBanner::sync-json::./locales/{{locale}}.json::locales/de.json",
			"mockBanner::sync-json::./locales/{{locale}}.json::locales/it.json",
			"mockBanner::sync-json::./locales/{{locale}}.json::locales/pt.json",
			"mockBanner::sync-json::./locales/{{locale}}.json::locales/zh.json",
			"mockBanner::sync-json::./locales/{{locale}}.json::locales/ja.json",
			"mockBanner::sync-json::./locales/{{locale}}.json::locales/ko.json",
			"mockBanner::sync-json::./locales/{{locale}}.json::locales/ru.json"
		]
	},
	"shared": {
		key: "shared",
		content: {
			"nodeType": "translation",
			"translation": {
				"en": {
					"appName": "i18n Bench",
					"siteName": "i18n Benchmark",
					"contactEmail": {
						"fields": ["'@'"],
						"nodeType": "insertion",
						"insertion": "contact{{'@'}}intlayer.org"
					},
					"goToGithub": "Go to GitHub"
				},
				"fr": {
					"appName": "Bench i18n",
					"siteName": "Benchmark i18n",
					"contactEmail": {
						"fields": ["'@'"],
						"nodeType": "insertion",
						"insertion": "contact{{'@'}}intlayer.org"
					},
					"goToGithub": "Aller sur GitHub"
				},
				"es": {
					"appName": "i18n Bench",
					"siteName": "i18n Benchmark",
					"contactEmail": {
						"fields": ["'@'"],
						"nodeType": "insertion",
						"insertion": "contact{{'@'}}intlayer.org"
					},
					"goToGithub": "Ir a GitHub"
				},
				"de": {
					"appName": "i18n Bench",
					"siteName": "i18n Benchmark",
					"contactEmail": {
						"fields": ["'@'"],
						"nodeType": "insertion",
						"insertion": "contact{{'@'}}intlayer.org"
					},
					"goToGithub": "Zu GitHub"
				},
				"it": {
					"appName": "i18n Bench",
					"siteName": "i18n Benchmark",
					"contactEmail": {
						"fields": ["'@'"],
						"nodeType": "insertion",
						"insertion": "contact{{'@'}}intlayer.org"
					},
					"goToGithub": "Vai su GitHub"
				},
				"pt": {
					"appName": "i18n Bench",
					"siteName": "i18n Benchmark",
					"contactEmail": {
						"fields": ["'@'"],
						"nodeType": "insertion",
						"insertion": "contact{{'@'}}intlayer.org"
					},
					"goToGithub": "Ir para o GitHub"
				},
				"zh": {
					"appName": "i18n Bench",
					"siteName": "i18n Benchmark",
					"contactEmail": {
						"fields": ["'@'"],
						"nodeType": "insertion",
						"insertion": "contact{{'@'}}intlayer.org"
					},
					"goToGithub": "前往 GitHub"
				},
				"ja": {
					"appName": "i18n Bench",
					"siteName": "i18n Benchmark",
					"contactEmail": {
						"fields": ["'@'"],
						"nodeType": "insertion",
						"insertion": "contact{{'@'}}intlayer.org"
					},
					"goToGithub": "GitHubへ"
				},
				"ko": {
					"appName": "i18n Bench",
					"siteName": "i18n Benchmark",
					"contactEmail": {
						"fields": ["'@'"],
						"nodeType": "insertion",
						"insertion": "contact{{'@'}}intlayer.org"
					},
					"goToGithub": "GitHub로 이동"
				},
				"ru": {
					"appName": "i18n Bench",
					"siteName": "i18n Benchmark",
					"contactEmail": {
						"fields": ["'@'"],
						"nodeType": "insertion",
						"insertion": "contact{{'@'}}intlayer.org"
					},
					"goToGithub": "Перейти на GitHub"
				}
			}
		},
		localIds: [
			"shared::sync-json::./locales/{{locale}}.json::locales/en.json",
			"shared::sync-json::./locales/{{locale}}.json::locales/fr.json",
			"shared::sync-json::./locales/{{locale}}.json::locales/es.json",
			"shared::sync-json::./locales/{{locale}}.json::locales/de.json",
			"shared::sync-json::./locales/{{locale}}.json::locales/it.json",
			"shared::sync-json::./locales/{{locale}}.json::locales/pt.json",
			"shared::sync-json::./locales/{{locale}}.json::locales/zh.json",
			"shared::sync-json::./locales/{{locale}}.json::locales/ja.json",
			"shared::sync-json::./locales/{{locale}}.json::locales/ko.json",
			"shared::sync-json::./locales/{{locale}}.json::locales/ru.json"
		]
	},
	"careers": {
		key: "careers",
		content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"header\":{\"title\":\"Careers\",\"description\":\"Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.\"},\"benefits\":{\"remoteLabel\":\"Remote-first\",\"remoteValue\":\"Work from anywhere in the world\",\"payLabel\":\"Competitive pay\",\"payValue\":\"Top-of-market compensation\",\"ossLabel\":\"Open source time\",\"ossValue\":\"20% time for OSS contributions\"},\"openPositions\":{\"title\":\"Open Positions\",\"applyNow\":\"Apply Now\",\"remote\":\"Remote\",\"fullTime\":\"Full-time\",\"partTime\":\"Part-time\",\"engineering\":\"Engineering\",\"documentation\":\"Documentation\",\"community\":\"Community\",\"sfRemote\":\"San Francisco / Remote\",\"frontendTitle\":\"Senior Frontend Engineer\",\"frontendDesc\":\"Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.\",\"backendTitle\":\"Backend Engineer\",\"backendDesc\":\"Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.\",\"writerTitle\":\"Technical Writer\",\"writerDesc\":\"Create comprehensive guides, API references, and tutorials for our benchmarking platform.\",\"devrelTitle\":\"DevRel Engineer\",\"devrelDesc\":\"Engage with the i18n community through talks, workshops, blog posts, and open source contributions.\",\"qaTitle\":\"QA Engineer\",\"qaDesc\":\"Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.\"}},\"fr\":{\"header\":{\"title\":\"Carrières\",\"description\":\"Rejoignez notre mission pour améliorer l'écosystème i18n. Équipe remote-first, impact, transparence et apprentissage continu.\"},\"benefits\":{\"remoteLabel\":\"Télétravail d'abord\",\"remoteValue\":\"Travaillez depuis n'importe où\",\"payLabel\":\"Rémunération compétitive\",\"payValue\":\"Fourchettes haut de marché\",\"ossLabel\":\"Temps open source\",\"ossValue\":\"20 % du temps pour contribuer à l'OSS\"},\"openPositions\":{\"title\":\"Postes ouverts\",\"applyNow\":\"Postuler\",\"remote\":\"À distance\",\"fullTime\":\"Temps plein\",\"partTime\":\"Temps partiel\",\"engineering\":\"Ingénierie\",\"documentation\":\"Documentation\",\"community\":\"Communauté\",\"sfRemote\":\"San Francisco / télétravail\",\"frontendTitle\":\"Ingénieur front-end senior\",\"frontendDesc\":\"Construire et maintenir le tableau de bord de benchmark et les outils dev avec React, TypeScript et Vite.\",\"backendTitle\":\"Ingénieur back-end\",\"backendDesc\":\"Concevoir et faire évoluer l'infrastructure cloud qui exécute des milliers de benchmarks automatisés.\",\"writerTitle\":\"Rédacteur·rice technique\",\"writerDesc\":\"Guides, références d'API et tutoriels pour la plateforme de benchmark.\",\"devrelTitle\":\"Ingénieur DevRel\",\"devrelDesc\":\"Animer la communauté i18n : conférences, ateliers, articles et contributions OSS.\",\"qaTitle\":\"Ingénieur QA\",\"qaDesc\":\"Garantir la fiabilité des résultats par des tests et validations rigoureux.\"}},\"es\":{\"header\":{\"title\":\"Carreras\",\"description\":\"Únete a nuestra misión de mejorar el ecosistema de la internacionalización. Somos un equipo que trabaja primero en remoto y que valora el impacto, la transparencia y el aprendizaje continuo.\"},\"benefits\":{\"remoteLabel\":\"Remoto primero\",\"remoteValue\":\"Trabaja desde cualquier lugar del mundo\",\"payLabel\":\"Salario competitivo\",\"payValue\":\"Compensación superior a la del mercado\",\"ossLabel\":\"Tiempo para el código abierto\",\"ossValue\":\"20% del tiempo para contribuciones a OSS\"},\"openPositions\":{\"title\":\"Puestos vacantes\",\"applyNow\":\"Postular ahora\",\"remote\":\"Remoto\",\"fullTime\":\"Tiempo completo\",\"partTime\":\"Tiempo parcial\",\"engineering\":\"Ingeniería\",\"documentation\":\"Documentación\",\"community\":\"Comunidad\",\"sfRemote\":\"San Francisco / Remoto\",\"frontendTitle\":\"Ingeniero Frontend Senior\",\"frontendDesc\":\"Construir y mantener nuestro panel de benchmarking y herramientas para desarrolladores utilizando React, TypeScript y Vite.\",\"backendTitle\":\"Ingeniero Backend\",\"backendDesc\":\"Diseñar y escalar nuestra infraestructura de benchmarking en la nube que maneja miles de ejecuciones automatizadas diariamente.\",\"writerTitle\":\"Redactor técnico\",\"writerDesc\":\"Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.\",\"devrelTitle\":\"Ingeniero de DevRel\",\"devrelDesc\":\"Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones en blogs y contribuciones de código abierto.\",\"qaTitle\":\"Ingeniero de QA\",\"qaDesc\":\"Asegurar la precisión y fiabilidad de los resultados del benchmark mediante pruebas y validaciones rigurosas.\"}},\"de\":{\"header\":{\"title\":\"Karriere\",\"description\":\"Schließen Sie sich unserer Mission an, das Internationalisierungs-Ökosystem zu verbessern. Wir sind ein Remote-First-Team, das Wert auf Wirkung, Transparenz und kontinuierliches Lernen legt.\"},\"benefits\":{\"remoteLabel\":\"Remote-First\",\"remoteValue\":\"Arbeiten Sie von überall auf der Welt\",\"payLabel\":\"Wettbewerbsfähige Bezahlung\",\"payValue\":\"Überdurchschnittliche Vergütung\",\"ossLabel\":\"Open-Source-Zeit\",\"ossValue\":\"20 % der Zeit für OSS-Beiträge\"},\"openPositions\":{\"title\":\"Offene Stellen\",\"applyNow\":\"Jetzt bewerben\",\"remote\":\"Remote\",\"fullTime\":\"Vollzeit\",\"partTime\":\"Teilzeit\",\"engineering\":\"Engineering\",\"documentation\":\"Dokumentation\",\"community\":\"Community\",\"sfRemote\":\"San Francisco / Remote\",\"frontendTitle\":\"Senior Frontend Engineer\",\"frontendDesc\":\"Erstellen und warten Sie unser Benchmarking-Dashboard und unsere Entwicklertools mit React, TypeScript und Vite.\",\"backendTitle\":\"Backend-Ingenieur\",\"backendDesc\":\"Entwerfen und skalieren Sie unsere Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.\",\"writerTitle\":\"Technischer Redakteur\",\"writerDesc\":\"Erstellen Sie umfassende Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.\",\"devrelTitle\":\"DevRel-Ingenieur\",\"devrelDesc\":\"Engagieren Sie sich in der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.\",\"qaTitle\":\"QA-Ingenieur\",\"qaDesc\":\"Gewährleisten Sie die Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierung.\"}},\"it\":{\"header\":{\"title\":\"Carriere\",\"description\":\"Unisciti alla nostra missione per migliorare l'ecosistema dell'internazionalizzazione. Siamo un team remote-first che apprezza l'impatto, la trasparenza e l'apprendimento continuo.\"},\"benefits\":{\"remoteLabel\":\"Remote-first\",\"remoteValue\":\"Lavora da qualsiasi parte del mondo\",\"payLabel\":\"Retribuzione competitiva\",\"payValue\":\"Compensazione ai vertici del mercato\",\"ossLabel\":\"Tempo per l'open source\",\"ossValue\":\"20% del tempo per contributi open source\"},\"openPositions\":{\"title\":\"Posizioni aperte\",\"applyNow\":\"Candidati ora\",\"remote\":\"Remoto\",\"fullTime\":\"Tempo pieno\",\"partTime\":\"Part-time\",\"engineering\":\"Engineering\",\"documentation\":\"Documentazione\",\"community\":\"Comunità\",\"sfRemote\":\"San Francisco / Remoto\",\"frontendTitle\":\"Ingegnere Frontend Senior\",\"frontendDesc\":\"Costruisci e mantieni la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.\",\"backendTitle\":\"Backend Engineer\",\"backendDesc\":\"Progetta e scala la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.\",\"writerTitle\":\"Scrittore tecnico\",\"writerDesc\":\"Crea guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.\",\"devrelTitle\":\"Ingegnere DevRel\",\"devrelDesc\":\"Interagisci con la comunità i18n tramite talk, workshop, post sul blog e contributi open source.\",\"qaTitle\":\"Ingegnere QA\",\"qaDesc\":\"Garantisci l'accuratezza e l'affidabilità dei risultati dei benchmark attraverso test e validazioni rigorosi.\"}},\"pt\":{\"header\":{\"title\":\"Carreiras\",\"description\":\"Junte-se à nossa missão de melhorar o ecossistema de internacionalização. Somos uma equipe remota que valoriza o impacto, a transparência e o aprendizado contínuo.\"},\"benefits\":{\"remoteLabel\":\"Remoto primeiro\",\"remoteValue\":\"Trabalhe de qualquer lugar do mundo\",\"payLabel\":\"Salário competitivo\",\"payValue\":\"Remuneração acima do mercado\",\"ossLabel\":\"Tempo para o código aberto\",\"ossValue\":\"20% do tempo para contribuições OSS\"},\"openPositions\":{\"title\":\"Vagas abertas\",\"applyNow\":\"Candidatar-se agora\",\"remote\":\"Remoto\",\"fullTime\":\"Tempo integral\",\"partTime\":\"Tempo parcial\",\"engineering\":\"Engenharia\",\"documentation\":\"Documentação\",\"community\":\"Comunidade\",\"sfRemote\":\"San Francisco / Remoto\",\"frontendTitle\":\"Engenheiro Frontend Sênior\",\"frontendDesc\":\"Construa e mantenha nosso painel de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.\",\"backendTitle\":\"Engenheiro Backend\",\"backendDesc\":\"Projete e dimensione nossa infraestrutura de benchmarking na nuvem que lida com milhares de execuções automatizadas diariamente.\",\"writerTitle\":\"Redator técnico\",\"writerDesc\":\"Crie guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.\",\"devrelTitle\":\"Engenheiro de DevRel\",\"devrelDesc\":\"Envolva-se com a comunidade i18n através de palestras, workshops, postagens em blogs e contribuições de código aberto.\",\"qaTitle\":\"Engenheiro de QA\",\"qaDesc\":\"Garanta a precisão e a confiabilidade dos resultados do benchmark através de testes e validações rigorosos.\"}},\"zh\":{\"header\":{\"title\":\"招聘\",\"description\":\"加入我们，共同改善国际化生态系统。我们是一个远程优先的团队，重视影响力、透明度和持续学习。\"},\"benefits\":{\"remoteLabel\":\"远程优先\",\"remoteValue\":\"在世界任何地方工作\",\"payLabel\":\"具有竞争力的薪酬\",\"payValue\":\"市场顶尖的薪资水平\",\"ossLabel\":\"开源时间\",\"ossValue\":\"20% 的时间用于 OSS 贡献\"},\"openPositions\":{\"title\":\"开放职位\",\"applyNow\":\"立即申请\",\"remote\":\"远程\",\"fullTime\":\"全职\",\"partTime\":\"兼职\",\"engineering\":\"工程\",\"documentation\":\"文档\",\"community\":\"社区\",\"sfRemote\":\"旧金山 / 远程\",\"frontendTitle\":\"高级前端工程师\",\"frontendDesc\":\"使用 React、TypeScript 和 Vite 构建和维护我们的基准测试仪表板和开发人员工具。\",\"backendTitle\":\"后端工程师\",\"backendDesc\":\"设计和扩展我们的云基准测试基础设施，每天处理数千次自动化运行。\",\"writerTitle\":\"技术作家\",\"writerDesc\":\"为我们的基准测试平台编写全面的指南、API 参考和教程。\",\"devrelTitle\":\"DevRel 工程师\",\"devrelDesc\":\"通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。\",\"qaTitle\":\"QA 工程师\",\"qaDesc\":\"通过严格的测试和验证确保基准测试结果 agrarian 准确性和可靠性。\"}},\"ja\":{\"header\":{\"title\":\"採用情報\",\"description\":\"国際化エコシステムを改善するという私たちの使命に参加してください。私たちは、影響力、透明性、そして継続的な学習を重視するリモートファーストのチームです。\"},\"benefits\":{\"remoteLabel\":\"リモートファースト\",\"remoteValue\":\"世界中のどこからでも仕事ができます\",\"payLabel\":\"競争力のある給与\",\"payValue\":\"市場トップクラスの報酬\",\"ossLabel\":\"オープンソースの時間\",\"ossValue\":\"時間の20%をOSSへの貢献に\"},\"openPositions\":{\"title\":\"募集中の職種\",\"applyNow\":\"今すぐ応募\",\"remote\":\"リモート\",\"fullTime\":\"フルタイム\",\"partTime\":\"パートタイム\",\"engineering\":\"エンジニアリング\",\"documentation\":\"ドキュメンテーション\",\"community\":\"コミュニティ\",\"sfRemote\":\"サンフランシスコ / リモート\",\"frontendTitle\":\"シニアフロントエンドエンジニア\",\"frontendDesc\":\"React、TypeScript、Viteを使用して、ベンチマークダッシュボードと開発者ツールの構築と保守を行います。\",\"backendTitle\":\"バックエンドエンジニア\",\"backendDesc\":\"毎日数千の自動実行を処理するクラウドベンチマークインフラストラクチャの設計とスケーリングを行います。\",\"writerTitle\":\"テクニカルライター\",\"writerDesc\":\"ベンチマークプラットフォームのための包括的なガイド、APIリファレンス、およびチュートリアルを作成します。\",\"devrelTitle\":\"DevRelエンジニア\",\"devrelDesc\":\"トーク、ワークショップ、ブログ投稿、オープンソースへの貢献を通じて、i18nコミュニティと関わります。\",\"qaTitle\":\"QAエンジニア\",\"qaDesc\":\"厳格なテストと検証を通じて、ベンチマーク結果の正確性と信頼性を確保します。\"}},\"ko\":{\"header\":{\"title\":\"채용\",\"description\":\"국제화 생태계를 개선하겠다는 우리의 미션에 합류하세요. 영향력, 투명성, 지속적 학습을 중시하는 원격 우선 팀입니다.\"},\"benefits\":{\"remoteLabel\":\"원격 우선\",\"remoteValue\":\"전 세계 어디서나 근무\",\"payLabel\":\"경쟁력 있는 보상\",\"payValue\":\"시장 상위 수준의 급여\",\"ossLabel\":\"오픈소스 시간\",\"ossValue\":\"시간의 20%를 OSS 기여에\"},\"openPositions\":{\"title\":\"채용 중인 포지션\",\"applyNow\":\"지원하기\",\"remote\":\"원격\",\"fullTime\":\"정규\",\"partTime\":\"파트타임\",\"engineering\":\"엔지니어링\",\"documentation\":\"문서\",\"community\":\"커뮤니티\",\"sfRemote\":\"샌프란시스코 / 원격\",\"frontendTitle\":\"시니어 프론트엔드 엔지니어\",\"frontendDesc\":\"React, TypeScript, Vite로 벤치마크 대시보드와 개발자 도구를 구축·유지합니다.\",\"backendTitle\":\"백엔드 엔지니어\",\"backendDesc\":\"매일 수천 건의 자동 실행을 처리하는 클라우드 벤치마크 인프라를 설계·확장합니다.\",\"writerTitle\":\"기술 작가\",\"writerDesc\":\"벤치마크 플랫폼을 위한 가이드, API 참조, 튜토리얼을 작성합니다.\",\"devrelTitle\":\"DevRel 엔지니어\",\"devrelDesc\":\"강연, 워크숍, 블로그, 오픈소스 기여를 통해 i18n 커뮤니티와 소통합니다.\",\"qaTitle\":\"QA 엔지니어\",\"qaDesc\":\"엄격한 테스트와 검증으로 벤치마크 결과의 정확성과 신뢰성을 보장합니다.\"}},\"ru\":{\"header\":{\"title\":\"Вакансии\",\"description\":\"Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы — распределенная команда, которая ценит результат, прозрачность и непрерывное обучение.\"},\"benefits\":{\"remoteLabel\":\"Удаленная работа\",\"remoteValue\":\"Работайте из любой точки мира\",\"payLabel\":\"Конкурентная зарплата\",\"payValue\":\"Вознаграждение выше рыночного\",\"ossLabel\":\"Время на open source\",\"ossValue\":\"20% времени на вклад в OSS\"},\"openPositions\":{\"title\":\"Открытые вакансии\",\"applyNow\":\"Подать заявку\",\"remote\":\"Удаленно\",\"fullTime\":\"Полная занятость\",\"partTime\":\"Частичная занятость\",\"engineering\":\"Разработка\",\"documentation\":\"Документация\",\"community\":\"Сообщество\",\"sfRemote\":\"Сан-Франциско / Удаленно\",\"frontendTitle\":\"Старший фронтенд-инженер\",\"frontendDesc\":\"Разработка и поддержка нашей панели управления бенчмарками и инструментов разработчика с использованием React, TypeScript и Vite.\",\"backendTitle\":\"Бэкенд-инженер\",\"backendDesc\":\"Проектирование и масштабирование нашей облачной инфраструктуры бенчмаркинга, обрабатывающей тысячи автоматических запусков ежедневно.\",\"writerTitle\":\"Технический писатель\",\"writerDesc\":\"Создание подробных руководств, API-справок и туториалов для нашей платформы бенчмаркинга.\",\"devrelTitle\":\"DevRel-инженер\",\"devrelDesc\":\"Взаимодействие с сообществом i18n через доклады, воркшопы, посты в блоге и вклад в open source.\",\"qaTitle\":\"QA-инженер\",\"qaDesc\":\"Обеспечение точности и надежности результатов бенчмарков путем строгого тестирования и валидации.\"}}}}"),
		localIds: [
			"careers::sync-json::./locales/{{locale}}.json::locales/en.json",
			"careers::sync-json::./locales/{{locale}}.json::locales/fr.json",
			"careers::sync-json::./locales/{{locale}}.json::locales/es.json",
			"careers::sync-json::./locales/{{locale}}.json::locales/de.json",
			"careers::sync-json::./locales/{{locale}}.json::locales/it.json",
			"careers::sync-json::./locales/{{locale}}.json::locales/pt.json",
			"careers::sync-json::./locales/{{locale}}.json::locales/zh.json",
			"careers::sync-json::./locales/{{locale}}.json::locales/ja.json",
			"careers::sync-json::./locales/{{locale}}.json::locales/ko.json",
			"careers::sync-json::./locales/{{locale}}.json::locales/ru.json"
		]
	},
	"notFound": {
		key: "notFound",
		content: {
			"nodeType": "translation",
			"translation": {
				"en": {
					"title": "404",
					"description": "Oops! Page not found",
					"returnHome": "Return to Home"
				},
				"fr": {
					"title": "404",
					"description": "Oups ! Page introuvable",
					"returnHome": "Retour à l'accueil"
				},
				"es": {
					"title": "404",
					"description": "¡Ups! Página no encontrada",
					"returnHome": "Volver al inicio"
				},
				"de": {
					"title": "404",
					"description": "Hoppla! Seite nicht gefunden",
					"returnHome": "Zurück zur Startseite"
				},
				"it": {
					"title": "404",
					"description": "Ops! Pagina non trovata",
					"returnHome": "Torna alla Home"
				},
				"pt": {
					"title": "404",
					"description": "Ops! Página não encontrada",
					"returnHome": "Voltar para o início"
				},
				"zh": {
					"title": "404",
					"description": "哎呀！页面未找到",
					"returnHome": "返回首页"
				},
				"ja": {
					"title": "404",
					"description": "おっと！ページが見つかりません",
					"returnHome": "ホームに戻る"
				},
				"ko": {
					"title": "404",
					"description": "페이지를 찾을 수 없습니다",
					"returnHome": "홈으로 돌아가기"
				},
				"ru": {
					"title": "404",
					"description": "Упс! Страница не найдена",
					"returnHome": "Вернуться на главную"
				}
			}
		},
		localIds: [
			"notFound::sync-json::./locales/{{locale}}.json::locales/en.json",
			"notFound::sync-json::./locales/{{locale}}.json::locales/fr.json",
			"notFound::sync-json::./locales/{{locale}}.json::locales/es.json",
			"notFound::sync-json::./locales/{{locale}}.json::locales/de.json",
			"notFound::sync-json::./locales/{{locale}}.json::locales/it.json",
			"notFound::sync-json::./locales/{{locale}}.json::locales/pt.json",
			"notFound::sync-json::./locales/{{locale}}.json::locales/zh.json",
			"notFound::sync-json::./locales/{{locale}}.json::locales/ja.json",
			"notFound::sync-json::./locales/{{locale}}.json::locales/ko.json",
			"notFound::sync-json::./locales/{{locale}}.json::locales/ru.json"
		]
	},
	"pricing": {
		key: "pricing",
		content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"header\":{\"title\":\"Simple, Transparent Pricing\",\"description\":\"Choose the plan that fits your team. No hidden fees.\"},\"tiers\":{\"starterName\":\"Starter\",\"starterPrice\":\"$0\",\"starterPeriod\":\"forever\",\"starterFeature1\":\"5 benchmark runs/day\",\"starterFeature2\":\"3 libraries\",\"starterFeature3\":\"Community support\",\"starterFeature4\":\"Public results\",\"proName\":\"Pro\",\"proPrice\":\"$29\",\"proPeriod\":\"/month\",\"proFeature1\":\"Unlimited runs\",\"proFeature2\":\"All libraries\",\"proFeature3\":\"Priority support\",\"proFeature4\":\"Private results\",\"proFeature5\":\"CI integration\",\"proFeature6\":\"Historical data\",\"enterpriseName\":\"Enterprise\",\"enterprisePrice\":\"Custom\",\"enterpriseFeature1\":\"Everything in Pro\",\"enterpriseFeature2\":\"On-premise option\",\"enterpriseFeature3\":\"SSO & SAML\",\"enterpriseFeature4\":\"Dedicated account manager\",\"enterpriseFeature5\":\"Custom SLAs\",\"enterpriseFeature6\":\"Audit logs\",\"enterpriseFeature7\":\"Training sessions\",\"contactSales\":\"Contact Sales\",\"getStarted\":\"Get Started\"}},\"fr\":{\"header\":{\"title\":\"Tarification simple et transparente\",\"description\":\"Choisissez l'offre adaptée à votre équipe. Sans frais cachés.\"},\"tiers\":{\"starterName\":\"Starter\",\"starterPrice\":\"0 €\",\"starterPeriod\":\"pour toujours\",\"starterFeature1\":\"5 exécutions de benchmark / jour\",\"starterFeature2\":\"3 bibliothèques\",\"starterFeature3\":\"Support communautaire\",\"starterFeature4\":\"Résultats publics\",\"proName\":\"Pro\",\"proPrice\":\"29 €\",\"proPeriod\":\"/ mois\",\"proFeature1\":\"Exécutions illimitées\",\"proFeature2\":\"Toutes les bibliothèques\",\"proFeature3\":\"Support prioritaire\",\"proFeature4\":\"Résultats privés\",\"proFeature5\":\"Intégration CI\",\"proFeature6\":\"Historique\",\"enterpriseName\":\"Entreprise\",\"enterprisePrice\":\"Sur mesure\",\"enterpriseFeature1\":\"Tout le Pro\",\"enterpriseFeature2\":\"Option on-premise\",\"enterpriseFeature3\":\"SSO et SAML\",\"enterpriseFeature4\":\"Account manager dédié\",\"enterpriseFeature5\":\"SLA sur mesure\",\"enterpriseFeature6\":\"Journaux d'audit\",\"enterpriseFeature7\":\"Sessions de formation\",\"contactSales\":\"Contacter les ventes\",\"getStarted\":\"Commencer\"}},\"es\":{\"header\":{\"title\":\"Precios sencillos y transparentes\",\"description\":\"Elige el plan que mejor se adapte a tu equipo. Sin cuotas ocultas.\"},\"tiers\":{\"starterName\":\"Starter\",\"starterPrice\":\"0 $\",\"starterPeriod\":\"para siempre\",\"starterFeature1\":\"5 ejecuciones de benchmark al día\",\"starterFeature2\":\"3 bibliotecas\",\"starterFeature3\":\"Soporte de la comunidad\",\"starterFeature4\":\"Resultados públicos\",\"proName\":\"Pro\",\"proPrice\":\"29 $\",\"proPeriod\":\"/mes\",\"proFeature1\":\"Ejecuciones ilimitadas\",\"proFeature2\":\"Todas las bibliotecas\",\"proFeature3\":\"Soporte prioritario\",\"proFeature4\":\"Resultados privados\",\"proFeature5\":\"Integración CI\",\"proFeature6\":\"Datos históricos\",\"enterpriseName\":\"Enterprise\",\"enterprisePrice\":\"Personalizado\",\"enterpriseFeature1\":\"Todo lo que hay en Pro\",\"enterpriseFeature2\":\"Opción on-premise\",\"enterpriseFeature3\":\"SSO y SAML\",\"enterpriseFeature4\":\"Gestor de cuentas dedicado\",\"enterpriseFeature5\":\"SLAs personalizados\",\"enterpriseFeature6\":\"Registros de auditoría\",\"enterpriseFeature7\":\"Sesiones de formación\",\"contactSales\":\"Contactar con ventas\",\"getStarted\":\"Empezar\"}},\"de\":{\"header\":{\"title\":\"Einfache, transparente Preisgestaltung\",\"description\":\"Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren.\"},\"tiers\":{\"starterName\":\"Starter\",\"starterPrice\":\"0 $\",\"starterPeriod\":\"für immer\",\"starterFeature1\":\"5 Benchmark-Durchläufe/Tag\",\"starterFeature2\":\"3 Bibliotheken\",\"starterFeature3\":\"Community-Support\",\"starterFeature4\":\"Öffentliche Ergebnisse\",\"proName\":\"Pro\",\"proPrice\":\"29 $\",\"proPeriod\":\"/Monat\",\"proFeature1\":\"Unbegrenzte Durchläufe\",\"proFeature2\":\"Alle Bibliotheken\",\"proFeature3\":\"Priorisierter Support\",\"proFeature4\":\"Private Ergebnisse\",\"proFeature5\":\"CI-Integration\",\"proFeature6\":\"Historische Daten\",\"enterpriseName\":\"Enterprise\",\"enterprisePrice\":\"Individuell\",\"enterpriseFeature1\":\"Alles in Pro enthalten\",\"enterpriseFeature2\":\"On-Premise-Option\",\"enterpriseFeature3\":\"SSO & SAML\",\"enterpriseFeature4\":\"Dedizierter Account Manager\",\"enterpriseFeature5\":\"Individuelle SLAs\",\"enterpriseFeature6\":\"Audit-Protokolle\",\"enterpriseFeature7\":\"Schulungssitzungen\",\"contactSales\":\"Vertrieb kontaktieren\",\"getStarted\":\"Erste Schritte\"}},\"it\":{\"header\":{\"title\":\"Prezzi semplici e trasparenti\",\"description\":\"Scegli il piano più adatto al tuo team. Nessun costo nascosto.\"},\"tiers\":{\"starterName\":\"Starter\",\"starterPrice\":\"0 $\",\"starterPeriod\":\"per sempre\",\"starterFeature1\":\"5 esecuzioni benchmark al giorno\",\"starterFeature2\":\"3 librerie\",\"starterFeature3\":\"Supporto della comunità\",\"starterFeature4\":\"Risultati pubblici\",\"proName\":\"Pro\",\"proPrice\":\"29 $\",\"proPeriod\":\"/mese\",\"proFeature1\":\"Esecuzioni illimitate\",\"proFeature2\":\"Tutte le librerie\",\"proFeature3\":\"Supporto prioritario\",\"proFeature4\":\"Risultati privati\",\"proFeature5\":\"Integrazione CI\",\"proFeature6\":\"Dati storici\",\"enterpriseName\":\"Enterprise\",\"enterprisePrice\":\"Personalizzato\",\"enterpriseFeature1\":\"Tutto quello che c'è in Pro\",\"enterpriseFeature2\":\"Opzione on-premise\",\"enterpriseFeature3\":\"SSO e SAML\",\"enterpriseFeature4\":\"Account manager dedicato\",\"enterpriseFeature5\":\"SLA personalizzati\",\"enterpriseFeature6\":\"Log di controllo\",\"enterpriseFeature7\":\"Sessioni di formazione\",\"contactSales\":\"Contatta l'ufficio vendite\",\"getStarted\":\"Inizia ora\"}},\"pt\":{\"header\":{\"title\":\"Preços simples e transparentes\",\"description\":\"Escolha o plano que se adapta à sua equipe. Sem taxas ocultas.\"},\"tiers\":{\"starterName\":\"Starter\",\"starterPrice\":\"0 $\",\"starterPeriod\":\"para sempre\",\"starterFeature1\":\"5 execuções de benchmark/dia\",\"starterFeature2\":\"3 bibliotecas\",\"starterFeature3\":\"Suporte da comunidade\",\"starterFeature4\":\"Resultados públicos\",\"proName\":\"Pro\",\"proPrice\":\"29 $\",\"proPeriod\":\"/mês\",\"proFeature1\":\"Execuções ilimitadas\",\"proFeature2\":\"Todas as bibliotecas\",\"proFeature3\":\"Suporte prioritário\",\"proFeature4\":\"Resultados privados\",\"proFeature5\":\"Integração CI\",\"proFeature6\":\"Dados históricos\",\"enterpriseName\":\"Enterprise\",\"enterprisePrice\":\"Personalizado\",\"enterpriseFeature1\":\"Tudo o que está no Pro\",\"enterpriseFeature2\":\"Opção on-premise\",\"enterpriseFeature3\":\"SSO e SAML\",\"enterpriseFeature4\":\"Gerente de conta dedicado\",\"enterpriseFeature5\":\"SLAs personalizados\",\"enterpriseFeature6\":\"Logs de auditoria\",\"enterpriseFeature7\":\"Sessões de treinamento\",\"contactSales\":\"Contatar vendas\",\"getStarted\":\"Começar\"}},\"zh\":{\"header\":{\"title\":\"简单透明的定价\",\"description\":\"选择适合您团队的计划。无隐藏费用。\"},\"tiers\":{\"starterName\":\"入门版\",\"starterPrice\":\"0 $\",\"starterPeriod\":\"永久\",\"starterFeature1\":\"每天 5 次基准测试运行\",\"starterFeature2\":\"3 个库\",\"starterFeature3\":\"社区支持\",\"starterFeature4\":\"公开结果\",\"proName\":\"专业版\",\"proPrice\":\"29 $\",\"proPeriod\":\"/月\",\"proFeature1\":\"无限次运行\",\"proFeature2\":\"所有库\",\"proFeature3\":\"优先支持\",\"proFeature4\":\"私有结果\",\"proFeature5\":\"CI 集成\",\"proFeature6\":\"历史数据\",\"enterpriseName\":\"企业版\",\"enterprisePrice\":\"定制\",\"enterpriseFeature1\":\"包含专业版中的所有功能\",\"enterpriseFeature2\":\"本地部署选项\",\"enterpriseFeature3\":\"SSO 和 SAML\",\"enterpriseFeature4\":\"专属客户经理\",\"enterpriseFeature5\":\"定制 SLA\",\"enterpriseFeature6\":\"审计日志\",\"enterpriseFeature7\":\"培训课程\",\"contactSales\":\"联系销售\",\"getStarted\":\"开始使用\"}},\"ja\":{\"header\":{\"title\":\"シンプルで透明性の高い価格設定\",\"description\":\"チームに合ったプランをお選びください。隠れた費用はありません。\"},\"tiers\":{\"starterName\":\"スターター\",\"starterPrice\":\"0円\",\"starterPeriod\":\"ずっと無料\",\"starterFeature1\":\"1日あたり5回のベンチマーク実行\",\"starterFeature2\":\"3ライブラリ\",\"starterFeature3\":\"コミュニティサポート\",\"starterFeature4\":\"公開結果\",\"proName\":\"プロ\",\"proPrice\":\"29ドル\",\"proPeriod\":\"/月\",\"proFeature1\":\"無制限の実行\",\"proFeature2\":\"すべてのライブラリ\",\"proFeature3\":\"優先サポート\",\"proFeature4\":\"非公開の結果\",\"proFeature5\":\"CI統合\",\"proFeature6\":\"履歴データ\",\"enterpriseName\":\"エンタープライズ\",\"enterprisePrice\":\"カスタム\",\"enterpriseFeature1\":\"Proプランのすべてを含む\",\"enterpriseFeature2\":\"オンプレミスオプション\",\"enterpriseFeature3\":\"SSO & SAML\",\"enterpriseFeature4\":\"専任のアカウントマネージャー\",\"enterpriseFeature5\":\"カスタムSLA\",\"enterpriseFeature6\":\"監査ログ\",\"enterpriseFeature7\":\"トレーニングセッション\",\"contactSales\":\"営業に問い合わせる\",\"getStarted\":\"始める\"}},\"ko\":{\"header\":{\"title\":\"단순하고 투명한 가격\",\"description\":\"팀에 맞는 플랜을 선택하세요. 숨겨진 요금은 없습니다.\"},\"tiers\":{\"starterName\":\"스타터\",\"starterPrice\":\"$0\",\"starterPeriod\":\"영구 무료\",\"starterFeature1\":\"하루 5회 벤치마크 실행\",\"starterFeature2\":\"3개 라이브러리\",\"starterFeature3\":\"커뮤니티 지원\",\"starterFeature4\":\"공개 결과\",\"proName\":\"Pro\",\"proPrice\":\"$29\",\"proPeriod\":\"/월\",\"proFeature1\":\"무제한 실행\",\"proFeature2\":\"모든 라이브러리\",\"proFeature3\":\"우선 지원\",\"proFeature4\":\"비공개 결과\",\"proFeature5\":\"CI 연동\",\"proFeature6\":\"과거 데이터\",\"enterpriseName\":\"엔터프라이즈\",\"enterprisePrice\":\"맞춤\",\"enterpriseFeature1\":\"Pro의 모든 것\",\"enterpriseFeature2\":\"온프레미스 옵션\",\"enterpriseFeature3\":\"SSO 및 SAML\",\"enterpriseFeature4\":\"전담 계정 매니저\",\"enterpriseFeature5\":\"맞춤 SLA\",\"enterpriseFeature6\":\"감사 로그\",\"enterpriseFeature7\":\"교육 세션\",\"contactSales\":\"영업 문의\",\"getStarted\":\"시작하기\"}},\"ru\":{\"header\":{\"title\":\"Простые и прозрачные цены\",\"description\":\"Выберите подходящий план для вашей команды. Никаких скрытых комиссий.\"},\"tiers\":{\"starterName\":\"Starter\",\"starterPrice\":\"0 $\",\"starterPeriod\":\"навсегда\",\"starterFeature1\":\"5 запусков бенчмарка в день\",\"starterFeature2\":\"3 библиотеки\",\"starterFeature3\":\"Поддержка сообщества\",\"starterFeature4\":\"Публичные результаты\",\"proName\":\"Pro\",\"proPrice\":\"29 $\",\"proPeriod\":\"/мес\",\"proFeature1\":\"Неограниченное число запусков\",\"proFeature2\":\"Все библиотеки\",\"proFeature3\":\"Приоритетная поддержка\",\"proFeature4\":\"Приватные результаты\",\"proFeature5\":\"Интеграция с CI\",\"proFeature6\":\"Исторические данные\",\"enterpriseName\":\"Enterprise\",\"enterprisePrice\":\"Индивидуально\",\"enterpriseFeature1\":\"Все, что есть в Pro\",\"enterpriseFeature2\":\"Локальная установка\",\"enterpriseFeature3\":\"SSO и SAML\",\"enterpriseFeature4\":\"Персональный менеджер\",\"enterpriseFeature5\":\"Индивидуальные SLA\",\"enterpriseFeature6\":\"Журналы аудита\",\"enterpriseFeature7\":\"Обучающие сессии\",\"contactSales\":\"Связаться с отделом продаж\",\"getStarted\":\"Начать работу\"}}}}"),
		localIds: [
			"pricing::sync-json::./locales/{{locale}}.json::locales/en.json",
			"pricing::sync-json::./locales/{{locale}}.json::locales/fr.json",
			"pricing::sync-json::./locales/{{locale}}.json::locales/es.json",
			"pricing::sync-json::./locales/{{locale}}.json::locales/de.json",
			"pricing::sync-json::./locales/{{locale}}.json::locales/it.json",
			"pricing::sync-json::./locales/{{locale}}.json::locales/pt.json",
			"pricing::sync-json::./locales/{{locale}}.json::locales/zh.json",
			"pricing::sync-json::./locales/{{locale}}.json::locales/ja.json",
			"pricing::sync-json::./locales/{{locale}}.json::locales/ko.json",
			"pricing::sync-json::./locales/{{locale}}.json::locales/ru.json"
		]
	},
	"products": {
		key: "products",
		content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"header\":{\"title\":\"Products\",\"description\":\"Tools and services to streamline your internationalization workflow.\"},\"grid\":{\"learnMore\":\"Learn More\",\"cliName\":\"Benchmark CLI\",\"cliDesc\":\"Run benchmarks locally from your terminal. Supports custom configurations and CI integration.\",\"cliPrice\":\"Free\",\"cloudName\":\"Benchmark Cloud\",\"cloudDesc\":\"Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.\",\"cloudPrice\":\"$29/mo\",\"enterpriseName\":\"Benchmark Enterprise\",\"enterpriseDesc\":\"On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.\",\"enterprisePrice\":\"Contact Us\",\"migrationName\":\"Migration Assistant\",\"migrationDesc\":\"AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.\",\"migrationPrice\":\"$99 one-time\",\"qaName\":\"Translation QA\",\"qaDesc\":\"Automated quality checks for missing translations, pluralization issues, and context errors.\",\"qaPrice\":\"$19/mo\",\"optimizerName\":\"Bundle Optimizer\",\"optimizerDesc\":\"Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.\",\"optimizerPrice\":\"$49/mo\"}},\"fr\":{\"header\":{\"title\":\"Produits\",\"description\":\"Outils et services pour fluidifier votre flux i18n.\"},\"grid\":{\"learnMore\":\"En savoir plus\",\"cliName\":\"CLI de Benchmark\",\"cliDesc\":\"Lancez des benchmarks en local. Configurations personnalisées et CI.\",\"cliPrice\":\"Gratuit\",\"cloudName\":\"Benchmark Cloud\",\"cloudDesc\":\"Benchmarks cloud automatisés, historique, alertes et tableaux d'équipe.\",\"cloudPrice\":\"29 €/mois\",\"enterpriseName\":\"Benchmark Entreprise\",\"enterpriseDesc\":\"On-premise avec SSO, journaux d'audit, SLA et support dédié.\",\"enterprisePrice\":\"Nous contacter\",\"migrationName\":\"Assistant de migration\",\"migrationDesc\":\"Outil assisté par IA pour migrer entre bibliothèques i18n sans interruption.\",\"migrationPrice\":\"99 € (unique)\",\"qaName\":\"QA des traductions\",\"qaDesc\":\"Contrôles automatiques : clés manquantes, pluriels, contexte.\",\"qaPrice\":\"19 €/mois\",\"optimizerName\":\"Optimiseur de bundle\",\"optimizerDesc\":\"Analyse et optimise votre bundle i18n en production (tree-shaking, découpage).\",\"optimizerPrice\":\"49 €/mois\"}},\"es\":{\"header\":{\"title\":\"Productos\",\"description\":\"Herramientas y servicios para agilizar su flujo de trabajo de internacionalización.\"},\"grid\":{\"learnMore\":\"Más información\",\"cliName\":\"CLI de Benchmark\",\"cliDesc\":\"Ejecuta benchmarks localmente desde tu terminal. Soporta configuraciones personalizadas e integración CI.\",\"cliPrice\":\"Gratis\",\"cloudName\":\"Benchmark Cloud\",\"cloudDesc\":\"Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.\",\"cloudPrice\":\"29 $/mes\",\"enterpriseName\":\"Benchmark Enterprise\",\"enterpriseDesc\":\"Despliegue on-premise con SSO, registros de auditoría, SLAs personalizados y soporte dedicado.\",\"enterprisePrice\":\"Contáctanos\",\"migrationName\":\"Asistente de migración\",\"migrationDesc\":\"Herramienta basada en IA que ayuda a migrar tu código base entre bibliotecas i18n sin tiempo de inactividad.\",\"migrationPrice\":\"99 $ pago único\",\"qaName\":\"QA de traducción\",\"qaDesc\":\"Controles de calidad automatizados para traducciones faltantes, problemas de pluralización y errores de contexto.\",\"qaPrice\":\"19 $/mes\",\"optimizerName\":\"Optimizador de bundle\",\"optimizerDesc\":\"Analiza y optimiza tu bundle i18n para producción con tree-shaking y división de código.\",\"optimizerPrice\":\"49 $/mes\"}},\"de\":{\"header\":{\"title\":\"Produkte\",\"description\":\"Tools und Dienstleistungen zur Optimierung Ihres Internationalisierungs-Workflows.\"},\"grid\":{\"learnMore\":\"Mehr erfahren\",\"cliName\":\"Benchmark CLI\",\"cliDesc\":\"Führen Sie Benchmarks lokal von Ihrem Terminal aus. Unterstützt benutzerdefinierte Konfigurationen und CI-Integration.\",\"cliPrice\":\"Kostenlos\",\"cloudName\":\"Benchmark Cloud\",\"cloudDesc\":\"Automatisiertes cloudbasiertes Benchmarking mit historischem Tracking, Warnungen und Team-Dashboards.\",\"cloudPrice\":\"29 $/Monat\",\"enterpriseName\":\"Benchmark Enterprise\",\"enterpriseDesc\":\"On-Premise-Bereitstellung mit SSO, Audit-Protokollen, individuellen SLAs und dediziertem Support.\",\"enterprisePrice\":\"Kontaktieren Sie uns\",\"migrationName\":\"Migrationsassistent\",\"migrationDesc\":\"KI-gestütztes Tool, das hilft, Ihre Codebasis ohne Ausfallzeiten zwischen i18n-Bibliotheken zu migrieren.\",\"migrationPrice\":\"Einmalig 99 $\",\"qaName\":\"Übersetzungs-QA\",\"qaDesc\":\"Automatisierte Qualitätsprüfungen für fehlende Übersetzungen, Pluralisierungsprobleme und Kontextfehler.\",\"qaPrice\":\"19 $/Monat\",\"optimizerName\":\"Bundle-Optimierer\",\"optimizerDesc\":\"Analysiert und optimiert Ihr i18n-Bundle für die Produktion mit Tree-Shaking und Code-Splitting.\",\"optimizerPrice\":\"49 $/Monat\"}},\"it\":{\"header\":{\"title\":\"Prodotti\",\"description\":\"Strumenti e servizi per semplificare il flusso di lavoro di internazionalizzazione.\"},\"grid\":{\"learnMore\":\"Scopri di più\",\"cliName\":\"CLI del Benchmark\",\"cliDesc\":\"Esegui i benchmark localmente dal tuo terminale. Supporta configurazioni personalizzate e integrazione CI.\",\"cliPrice\":\"Gratis\",\"cloudName\":\"Benchmark Cloud\",\"cloudDesc\":\"Benchmarking automatizzato basato su cloud con tracciamento storico, avvisi e dashboard del team.\",\"cloudPrice\":\"29 $/mese\",\"enterpriseName\":\"Benchmark Enterprise\",\"enterpriseDesc\":\"Distribuzione on-premise con SSO, log di controllo, SLA personalizzati e supporto dedicato.\",\"enterprisePrice\":\"Contattaci\",\"migrationName\":\"Assistente alla migrazione\",\"migrationDesc\":\"Strumento basato sull'IA che aiuta a migrare la tua codebase tra librerie i18n senza tempi di inattività.\",\"migrationPrice\":\"99 $ una tantum\",\"qaName\":\"QA delle traduzioni\",\"qaDesc\":\"Controlli di qualità automatizzati per traduzioni mancanti, problemi di pluralizzazione ed errori di contesto.\",\"qaPrice\":\"19 $/mese\",\"optimizerName\":\"Ottimizzatore del bundle\",\"optimizerDesc\":\"Analizza e ottimizza il tuo bundle i18n per la produzione con tree-shaking e code splitting.\",\"optimizerPrice\":\"49 $/mese\"}},\"pt\":{\"header\":{\"title\":\"Produtos\",\"description\":\"Ferramentas e serviços para agilizar seu fluxo de trabalho de internacionalização.\"},\"grid\":{\"learnMore\":\"Saiba Mais\",\"cliName\":\"Benchmark CLI\",\"cliDesc\":\"Execute benchmarks localmente pelo terminal. Suporta configurações personalizadas e integração CI.\",\"cliPrice\":\"Grátis\",\"cloudName\":\"Benchmark Cloud\",\"cloudDesc\":\"Benchmarking automatizado baseado em nuvem com rastreamento histórico, alertas e painéis de equipe.\",\"cloudPrice\":\"29 $/mês\",\"enterpriseName\":\"Benchmark Enterprise\",\"enterpriseDesc\":\"Implantação on-premise com SSO, logs de auditoria, SLAs personalizados e suporte dedicado.\",\"enterprisePrice\":\"Contate-nos\",\"migrationName\":\"Assistente de migração\",\"migrationDesc\":\"Ferramenta baseada em IA que ajuda a migrar sua base de código entre bibliotecas i18n sem tempo de inatividade.\",\"migrationPrice\":\"99 $ taxa única\",\"qaName\":\"QA de tradução\",\"qaDesc\":\"Verificações de qualidade automatizadas para traduções ausentes, problemas de pluralização e erros de contexto.\",\"qaPrice\":\"19 $/mês\",\"optimizerName\":\"Otimizador de bundle\",\"optimizerDesc\":\"Analisa e otimiza seu bundle i18n para produção com tree-shaking e divisão de código.\",\"optimizerPrice\":\"49 $/mês\"}},\"zh\":{\"header\":{\"title\":\"产品\",\"description\":\"用于简化国际化工作流程的工具和服务。\"},\"grid\":{\"learnMore\":\"了解更多\",\"cliName\":\"基准测试 CLI\",\"cliDesc\":\"从您的终端本地运行基准测试。支持自定义配置和 CI 集成。\",\"cliPrice\":\"免费\",\"cloudName\":\"基准测试云\",\"cloudDesc\":\"具有历史追踪、警报和团队仪表板的自动化云基准测试。\",\"cloudPrice\":\"29 $/月\",\"enterpriseName\":\"基准测试企业版\",\"enterpriseDesc\":\"支持 SSO、审计日志、定制 SLA 和专属支持的本地部署。\",\"enterprisePrice\":\"联系我们\",\"migrationName\":\"迁移助手\",\"migrationDesc\":\"AI 驱动的工具，可帮助您在 i18n 库之间迁移代码库，零停机时间。\",\"migrationPrice\":\"99 $ 一次性费用\",\"qaName\":\"翻译 QA\",\"qaDesc\":\"自动检查翻译缺失、复数问题和上下文错误。\",\"qaPrice\":\"19 $/月\",\"optimizerName\":\"包优化器\",\"optimizerDesc\":\"通过 tree-shaking 和代码拆分分析并优化您的生产 i18n 包。\",\"optimizerPrice\":\"49 $/月\"}},\"ja\":{\"header\":{\"title\":\"製品\",\"description\":\"国際化ワークフローを効率化するためのツールとサービス。\"},\"grid\":{\"learnMore\":\"詳細はこちら\",\"cliName\":\"Benchmark CLI\",\"cliDesc\":\"ターミナルからローカルでベンチマークを実行します。カスタム構成とCI統合をサポートしています。\",\"cliPrice\":\"無料\",\"cloudName\":\"Benchmark Cloud\",\"cloudDesc\":\"履歴追跡、アラート、チームダッシュボードを備えた、自動化されたクラウドベースのベンチマーク。\",\"cloudPrice\":\"29ドル/月\",\"enterpriseName\":\"Benchmark Enterprise\",\"enterpriseDesc\":\"SSO、監査ログ、カスタムSLA、および専任サポートを備えたオンプレミス展開。\",\"enterprisePrice\":\"お問い合わせ\",\"migrationName\":\"移行アシスタント\",\"migrationDesc\":\"ダウンタイムなしでi18nライブラリ間でコードベースを移行するのを支援するAI駆動ツール。\",\"migrationPrice\":\"99ドル（一回限り）\",\"qaName\":\"翻訳QA\",\"qaDesc\":\"翻訳の欠落、複数形化の問題、コンテキストエラーの自動品質チェック。\",\"qaPrice\":\"19ドル/月\",\"optimizerName\":\"バンドルオプティマイザー\",\"optimizerDesc\":\"ツリーシェイキングとコード分割を使用して、本番用にi18nバンドルを分析および最適化します。\",\"optimizerPrice\":\"49ドル/月\"}},\"ko\":{\"header\":{\"title\":\"제품\",\"description\":\"국제화 워크플로를 간소화하는 도구와 서비스.\"},\"grid\":{\"learnMore\":\"자세히 보기\",\"cliName\":\"Benchmark CLI\",\"cliDesc\":\"터미널에서 로컬로 벤치마크를 실행합니다. 사용자 정의 구성과 CI 연동을 지원합니다.\",\"cliPrice\":\"무료\",\"cloudName\":\"Benchmark Cloud\",\"cloudDesc\":\"이력 추적, 알림, 팀 대시보드가 있는 자동화 클라우드 벤치마크.\",\"cloudPrice\":\"$29/월\",\"enterpriseName\":\"Benchmark Enterprise\",\"enterpriseDesc\":\"SSO, 감사 로그, 맞춤 SLA, 전담 지원이 있는 온프레미스 배포.\",\"enterprisePrice\":\"문의\",\"migrationName\":\"마이그레이션 어시스턴트\",\"migrationDesc\":\"다운타임 없이 i18n 라이브러리 간 코드베이스 이전을 돕는 AI 기반 도구.\",\"migrationPrice\":\"$99 일회성\",\"qaName\":\"번역 QA\",\"qaDesc\":\"누락된 번역, 복수형 문제, 맥락 오류에 대한 자동 품질 검사.\",\"qaPrice\":\"$19/월\",\"optimizerName\":\"번들 옵티마이저\",\"optimizerDesc\":\"트리 쉐이킹과 코드 분할로 프로덕션용 i18n 번들을 분석·최적화합니다.\",\"optimizerPrice\":\"$49/월\"}},\"ru\":{\"header\":{\"title\":\"Продукты\",\"description\":\"Инструменты и сервисы для оптимизации вашего рабочего процесса с интернационализацией.\"},\"grid\":{\"learnMore\":\"Узнать больше\",\"cliName\":\"Benchmark CLI\",\"cliDesc\":\"Запускайте бенчмарки локально из терминала. Поддерживает пользовательские конфигурации и интеграцию с CI.\",\"cliPrice\":\"Бесплатно\",\"cloudName\":\"Benchmark Cloud\",\"cloudDesc\":\"Автоматизированный облачный бенчмаркинг с отслеживанием истории, уведомлениями и командными дашбордами.\",\"cloudPrice\":\"29 $/мес\",\"enterpriseName\":\"Benchmark Enterprise\",\"enterpriseDesc\":\"Локальное развертывание с SSO, журналами аудита, индивидуальными SLA и выделенной поддержкой.\",\"enterprisePrice\":\"Связаться с нами\",\"migrationName\":\"Помощник по миграции\",\"migrationDesc\":\"Инструмент на базе ИИ, помогающий переносить кодовую базу между библиотеками i18n без простоев.\",\"migrationPrice\":\"99 $ (разово)\",\"qaName\":\"QA переводов\",\"qaDesc\":\"Автоматическая проверка качества на наличие пропущенных переводов, проблем с плюрализацией и контекстных ошибок.\",\"qaPrice\":\"19 $/мес\",\"optimizerName\":\"Оптимизатор бандла\",\"optimizerDesc\":\"Анализирует и оптимизирует ваш бандл i18n для продакшена с помощью tree-shaking и разделения кода.\",\"optimizerPrice\":\"49 $/мес\"}}}}"),
		localIds: [
			"products::sync-json::./locales/{{locale}}.json::locales/en.json",
			"products::sync-json::./locales/{{locale}}.json::locales/fr.json",
			"products::sync-json::./locales/{{locale}}.json::locales/es.json",
			"products::sync-json::./locales/{{locale}}.json::locales/de.json",
			"products::sync-json::./locales/{{locale}}.json::locales/it.json",
			"products::sync-json::./locales/{{locale}}.json::locales/pt.json",
			"products::sync-json::./locales/{{locale}}.json::locales/zh.json",
			"products::sync-json::./locales/{{locale}}.json::locales/ja.json",
			"products::sync-json::./locales/{{locale}}.json::locales/ko.json",
			"products::sync-json::./locales/{{locale}}.json::locales/ru.json"
		]
	},
	"contact": {
		key: "contact",
		content: {
			"nodeType": "translation",
			"translation": {
				"en": {
					"header": {
						"title": "Get in Touch",
						"description": "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at"
					},
					"form": {
						"name": "Name",
						"yourName": "Your name",
						"email": "Email",
						"emailPlaceholder": {
							"fields": ["'@'"],
							"nodeType": "insertion",
							"insertion": "you{{'@'}}example.com"
						},
						"topic": "Topic",
						"bugReport": "Bug Report",
						"newBenchmarkIdea": "New Benchmark Idea",
						"methodologyQuestion": "Methodology Question",
						"contribution": "Contribution",
						"other": "Other",
						"message": "Message",
						"messagePlaceholder": "Describe your question or idea...",
						"sendMessage": "Send Message"
					}
				},
				"fr": {
					"header": {
						"title": "Contact",
						"description": "Une idée, un bug ou envie de contribuer un benchmark ? Écrivez-nous à"
					},
					"form": {
						"name": "Nom",
						"yourName": "Votre nom",
						"email": "E-mail",
						"emailPlaceholder": {
							"fields": ["'@'"],
							"nodeType": "insertion",
							"insertion": "vous{{'@'}}exemple.com"
						},
						"topic": "Sujet",
						"bugReport": "Rapport de bug",
						"newBenchmarkIdea": "Idée de benchmark",
						"methodologyQuestion": "Question de méthodologie",
						"contribution": "Contribution",
						"other": "Autre",
						"message": "Message",
						"messagePlaceholder": "Décrivez votre question ou idée…",
						"sendMessage": "Envoyer"
					}
				},
				"es": {
					"header": {
						"title": "Ponte en contacto",
						"description": "¿Tienes ideas, has encontrado un error o quieres contribuir con un benchmark? Ponte en contacto con nosotros en"
					},
					"form": {
						"name": "Nombre",
						"yourName": "Tu nombre",
						"email": "Correo electrónico",
						"emailPlaceholder": {
							"fields": ["'@'"],
							"nodeType": "insertion",
							"insertion": "tu{{'@'}}ejemplo.com"
						},
						"topic": "Tema",
						"bugReport": "Informe de error",
						"newBenchmarkIdea": "Nueva idea de benchmark",
						"methodologyQuestion": "Pregunta sobre la metodología",
						"contribution": "Contribución",
						"other": "Otro",
						"message": "Mensaje",
						"messagePlaceholder": "Describe tu pregunta o idea...",
						"sendMessage": "Enviar mensaje"
					}
				},
				"de": {
					"header": {
						"title": "Kontakt aufnehmen",
						"description": "Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern? Kontaktieren Sie uns unter"
					},
					"form": {
						"name": "Name",
						"yourName": "Ihr Name",
						"email": "E-Mail",
						"emailPlaceholder": {
							"fields": ["'@'"],
							"nodeType": "insertion",
							"insertion": "ihre{{'@'}}beispiel.de"
						},
						"topic": "Thema",
						"bugReport": "Fehlerbericht",
						"newBenchmarkIdea": "Neue Benchmark-Idee",
						"methodologyQuestion": "Frage zur Methodik",
						"contribution": "Beitrag",
						"other": "Sonstiges",
						"message": "Nachricht",
						"messagePlaceholder": "Beschreiben Sie Ihre Frage oder Idee...",
						"sendMessage": "Nachricht senden"
					}
				},
				"it": {
					"header": {
						"title": "Contattaci",
						"description": "Hai idee, hai trovato un bug o vuoi contribuire con un benchmark? Contattaci all'indirizzo"
					},
					"form": {
						"name": "Nome",
						"yourName": "Il tuo nome",
						"email": "Email",
						"emailPlaceholder": {
							"fields": ["'@'"],
							"nodeType": "insertion",
							"insertion": "tu{{'@'}}esempio.com"
						},
						"topic": "Argomento",
						"bugReport": "Segnalazione bug",
						"newBenchmarkIdea": "Nuova idea di benchmark",
						"methodologyQuestion": "Domanda sulla metodologia",
						"contribution": "Contributo",
						"other": "Altro",
						"message": "Messaggio",
						"messagePlaceholder": "Descrivi la tua domanda o idea...",
						"sendMessage": "Invia messaggio"
					}
				},
				"pt": {
					"header": {
						"title": "Entre em contato",
						"description": "Tem ideias, encontrou um bug ou quer contribuir com um benchmark? Entre em contato conosco em"
					},
					"form": {
						"name": "Nome",
						"yourName": "Seu nome",
						"email": "E-mail",
						"emailPlaceholder": {
							"fields": ["'@'"],
							"nodeType": "insertion",
							"insertion": "voce{{'@'}}exemplo.com"
						},
						"topic": "Assunto",
						"bugReport": "Relatório de bug",
						"newBenchmarkIdea": "Nova ideia de benchmark",
						"methodologyQuestion": "Pergunta sobre metodologia",
						"contribution": "Contribuição",
						"other": "Outro",
						"message": "Mensagem",
						"messagePlaceholder": "Descreva sua pergunta ou ideia...",
						"sendMessage": "Enviar mensagem"
					}
				},
				"zh": {
					"header": {
						"title": "取得联系",
						"description": "有想法、发现了错误或想贡献基准测试？请联系我们："
					},
					"form": {
						"name": "姓名",
						"yourName": "您的姓名",
						"email": "电子邮件",
						"emailPlaceholder": {
							"fields": ["'@'"],
							"nodeType": "insertion",
							"insertion": "you{{'@'}}example.com"
						},
						"topic": "主题",
						"bugReport": "错误报告",
						"newBenchmarkIdea": "新基准测试想法",
						"methodologyQuestion": "方法论问题",
						"contribution": "贡献",
						"other": "其他",
						"message": "消息",
						"messagePlaceholder": "描述您的问题或想法...",
						"sendMessage": "发送消息"
					}
				},
				"ja": {
					"header": {
						"title": "お問い合わせ",
						"description": "アイデアがある、バグを見つけた、またはベンチマークを投稿したいですか？こちらまでご連絡ください："
					},
					"form": {
						"name": "名前",
						"yourName": "お名前",
						"email": "メールアドレス",
						"emailPlaceholder": {
							"fields": ["'@'"],
							"nodeType": "insertion",
							"insertion": "you{{'@'}}example.com"
						},
						"topic": "トピック",
						"bugReport": "バグ報告",
						"newBenchmarkIdea": "新しいベンチマークのアイデア",
						"methodologyQuestion": "手法に関する質問",
						"contribution": "貢献",
						"other": "その他",
						"message": "メッセージ",
						"messagePlaceholder": "ご質問やアイデアを記入してください...",
						"sendMessage": "メッセージを送信"
					}
				},
				"ko": {
					"header": {
						"title": "문의하기",
						"description": "아이디어가 있거나 버그를 찾았거나 벤치마크에 기여하고 싶으신가요? 다음으로 연락 주세요"
					},
					"form": {
						"name": "이름",
						"yourName": "이름을 입력하세요",
						"email": "이메일",
						"emailPlaceholder": {
							"fields": ["'@'"],
							"nodeType": "insertion",
							"insertion": "you{{'@'}}example.com"
						},
						"topic": "주제",
						"bugReport": "버그 신고",
						"newBenchmarkIdea": "새 벤치마크 아이디어",
						"methodologyQuestion": "방법론 질문",
						"contribution": "기여",
						"other": "기타",
						"message": "메시지",
						"messagePlaceholder": "질문이나 아이디어를 적어 주세요...",
						"sendMessage": "메시지 보내기"
					}
				},
				"ru": {
					"header": {
						"title": "Связаться с нами",
						"description": "Есть идеи, нашли баг или хотите предложить бенчмарк? Напишите нам по адресу"
					},
					"form": {
						"name": "Имя",
						"yourName": "Ваше имя",
						"email": "Электронная почта",
						"emailPlaceholder": {
							"fields": ["'@'"],
							"nodeType": "insertion",
							"insertion": "you{{'@'}}example.com"
						},
						"topic": "Тема",
						"bugReport": "Отчет об ошибке",
						"newBenchmarkIdea": "Идея нового бенчмарка",
						"methodologyQuestion": "Вопрос по методологии",
						"contribution": "Вклад в проект",
						"other": "Другое",
						"message": "Сообщение",
						"messagePlaceholder": "Опишите ваш вопрос или идею...",
						"sendMessage": "Отправить сообщение"
					}
				}
			}
		},
		localIds: [
			"contact::sync-json::./locales/{{locale}}.json::locales/en.json",
			"contact::sync-json::./locales/{{locale}}.json::locales/fr.json",
			"contact::sync-json::./locales/{{locale}}.json::locales/es.json",
			"contact::sync-json::./locales/{{locale}}.json::locales/de.json",
			"contact::sync-json::./locales/{{locale}}.json::locales/it.json",
			"contact::sync-json::./locales/{{locale}}.json::locales/pt.json",
			"contact::sync-json::./locales/{{locale}}.json::locales/zh.json",
			"contact::sync-json::./locales/{{locale}}.json::locales/ja.json",
			"contact::sync-json::./locales/{{locale}}.json::locales/ko.json",
			"contact::sync-json::./locales/{{locale}}.json::locales/ru.json"
		]
	},
	"themeToggle": {
		key: "themeToggle",
		content: {
			"nodeType": "translation",
			"translation": {
				"en": {
					"auto": "Theme: Auto",
					"dark": "Theme: Dark",
					"light": "Theme: Light",
					"labelAuto": "Theme mode: auto (system). Click to switch to light mode.",
					"labelOther": {
						"fields": ["mode"],
						"nodeType": "insertion",
						"insertion": "Theme mode: {{mode}}. Click to switch mode."
					}
				},
				"fr": {
					"auto": "Thème : automatique",
					"dark": "Thème : sombre",
					"light": "Thème : clair",
					"labelAuto": "Mode thème : automatique (système). Cliquez pour passer en mode clair.",
					"labelOther": {
						"fields": ["mode"],
						"nodeType": "insertion",
						"insertion": "Mode thème : {{mode}}. Cliquez pour changer de mode."
					}
				},
				"es": {
					"auto": "Tema: Auto",
					"dark": "Tema: Oscuro",
					"light": "Tema: Claro",
					"labelAuto": "Modo de tema: automático (sistema). Haz clic para cambiar al modo claro.",
					"labelOther": {
						"fields": ["mode"],
						"nodeType": "insertion",
						"insertion": "Modo de tema: {{mode}}. Haz clic para cambiar de modo."
					}
				},
				"de": {
					"auto": "Thema: Auto",
					"dark": "Thema: Dunkel",
					"light": "Thema: Hell",
					"labelAuto": "Themenmodus: Auto (System). Klicken Sie hier, um zum hellen Modus zu wechseln.",
					"labelOther": {
						"fields": ["mode"],
						"nodeType": "insertion",
						"insertion": "Themenmodus: {{mode}}. Klicken Sie hier, um den Modus zu wechseln."
					}
				},
				"it": {
					"auto": "Tema: Auto",
					"dark": "Tema: Scuro",
					"light": "Tema: Chiaro",
					"labelAuto": "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.",
					"labelOther": {
						"fields": ["mode"],
						"nodeType": "insertion",
						"insertion": "Modalità tema: {{mode}}. Clicca per cambiare modalità."
					}
				},
				"pt": {
					"auto": "Tema: Automático",
					"dark": "Tema: Escuro",
					"light": "Tema: Claro",
					"labelAuto": "Modo de tema: auto (sistema). Clique para mudar para o modo claro.",
					"labelOther": {
						"fields": ["mode"],
						"nodeType": "insertion",
						"insertion": "Modo de tema: {{mode}}. Clique para mudar de modo."
					}
				},
				"zh": {
					"auto": "主题：自动",
					"dark": "主题：深色",
					"light": "主题：浅色",
					"labelAuto": "主题模式：自动（系统）。点击切换到浅色模式。",
					"labelOther": {
						"fields": ["mode"],
						"nodeType": "insertion",
						"insertion": "主题模式：{{mode}}。点击切换模式。"
					}
				},
				"ja": {
					"auto": "テーマ：自動",
					"dark": "テーマ：ダーク",
					"light": "テーマ：ライト",
					"labelAuto": "テーマモード：自動（システム）。クリックするとライトモードに切り替わります。",
					"labelOther": {
						"fields": ["mode"],
						"nodeType": "insertion",
						"insertion": "テーマモード：{{mode}}。クリックしてモードを切り替えます。"
					}
				},
				"ko": {
					"auto": "테마: 자동",
					"dark": "테마: 다크",
					"light": "테마: 라이트",
					"labelAuto": "테마 모드: 자동(시스템). 클릭하면 라이트 모드로 전환됩니다.",
					"labelOther": {
						"fields": ["mode"],
						"nodeType": "insertion",
						"insertion": "테마 모드: {{mode}}. 클릭하여 모드를 전환합니다."
					}
				},
				"ru": {
					"auto": "Тема: Авто",
					"dark": "Тема: Темная",
					"light": "Тема: Светлая",
					"labelAuto": "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.",
					"labelOther": {
						"fields": ["mode"],
						"nodeType": "insertion",
						"insertion": "Режим темы: {{mode}}. Нажмите, чтобы сменить режим."
					}
				}
			}
		},
		localIds: [
			"themeToggle::sync-json::./locales/{{locale}}.json::locales/en.json",
			"themeToggle::sync-json::./locales/{{locale}}.json::locales/fr.json",
			"themeToggle::sync-json::./locales/{{locale}}.json::locales/es.json",
			"themeToggle::sync-json::./locales/{{locale}}.json::locales/de.json",
			"themeToggle::sync-json::./locales/{{locale}}.json::locales/it.json",
			"themeToggle::sync-json::./locales/{{locale}}.json::locales/pt.json",
			"themeToggle::sync-json::./locales/{{locale}}.json::locales/zh.json",
			"themeToggle::sync-json::./locales/{{locale}}.json::locales/ja.json",
			"themeToggle::sync-json::./locales/{{locale}}.json::locales/ko.json",
			"themeToggle::sync-json::./locales/{{locale}}.json::locales/ru.json"
		]
	},
	"about": {
		key: "about",
		content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"header\":{\"title\":\"About This Benchmark\",\"description\":\"This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.\"},\"grid\":{\"whyExistsTitle\":\"Why This Exists\",\"whyExistsDesc\":\"Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.\",\"methodologyTitle\":\"Methodology\",\"methodologyDesc\":\"The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.\"},\"whatWeMeasure\":{\"title\":\"What We Measure\",\"bundleSizeImpact\":\"Bundle size impact\",\"bundleSizeImpactDesc\":\"The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.\",\"renderingOverhead\":\"Rendering overhead\",\"renderingOverheadDesc\":\"How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.\",\"hydrationCost\":\"Hydration cost\",\"hydrationCostDesc\":\"During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.\",\"lazyLoading\":\"Lazy loading effectiveness\",\"lazyLoadingDesc\":\"Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).\",\"localeSwitch\":\"Locale switch speed\",\"localeSwitchDesc\":\"How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.\"}},\"fr\":{\"header\":{\"title\":\"À propos de ce benchmark\",\"description\":\"Il s'agit d'une application de test open source — pas d'un produit ni d'une entreprise. Elle sert uniquement de base multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans les mêmes conditions.\"},\"grid\":{\"whyExistsTitle\":\"Pourquoi ce projet existe\",\"whyExistsDesc\":\"Choisir une bibliothèque i18n est une décision d'architecture à long terme. Beaucoup de comparatifs insistent sur l'ergonomie d'API, mais peu mesurent le coût performance : poids ajouté au bundle ? impact sur le rendu avec des milliers de clés ? le chargement paresseux aide-t-il vraiment ou déplace-t-il seulement le coût ? Ce benchmark répond avec des données réelles.\",\"methodologyTitle\":\"Méthodologie\",\"methodologyDesc\":\"La même application 10 pages est construite pour chaque bibliothèque. Nous mesurons le bundle de production (rollup-plugin-visualizer), lançons des audits Lighthouse et utilisons le profilage pour capturer le rendu lors des changements de langue. Tout s'exécute en CI sur du matériel homogène pour des résultats reproductibles.\"},\"whatWeMeasure\":{\"title\":\"Ce que nous mesurons\",\"bundleSizeImpact\":\"Impact sur la taille du bundle\",\"bundleSizeImpactDesc\":\"Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers sont inclus — impact direct sur les réseaux lents.\",\"renderingOverhead\":\"Surcharge de rendu\",\"renderingOverheadDesc\":\"Temps supplémentaire ajouté au cycle de rendu. Les bibliothèques qui injectent les traductions via un seul provider de contexte peuvent provoquer des re-rendus inutiles.\",\"hydrationCost\":\"Coût d'hydratation\",\"hydrationCostDesc\":\"En SSR, les données de traduction sont sérialisées dans le HTML. De gros dictionnaires alourdissent la page et ralentissent l'hydratation.\",\"lazyLoading\":\"Efficacité du chargement paresseux\",\"lazyLoadingDesc\":\"Le découpage par route ou espace de noms réduit-il vraiment la charge initiale, et quels compromis cela introduit (cascade, FOUC, cache) ?\",\"localeSwitch\":\"Vitesse de changement de langue\",\"localeSwitchDesc\":\"À quelle vitesse l'application peut basculer de langue à l'exécution — récupération des traductions, re-rendu, mise à jour du DOM.\"}},\"es\":{\"header\":{\"title\":\"Acerca de este benchmark\",\"description\":\"Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React de varias páginas realista donde se puedan integrar y medir diferentes bibliotecas i18n en condiciones idénticas.\"},\"grid\":{\"whyExistsTitle\":\"Por qué existe esto\",\"whyExistsDesc\":\"Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al bundle? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿Realmente ayuda la carga diferida o solo desplaza el coste? Este benchmark responde a esas preguntas con datos reales.\",\"methodologyTitle\":\"Metodología\",\"methodologyDesc\":\"La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el bundle de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos React Profiler para capturar los tiempos de renderizado durante los cambios de idioma. Todas las pruebas se ejecutan en CI en hardware consistente para asegurar resultados reproducibles.\"},\"whatWeMeasure\":{\"title\":\"Qué medimos\",\"bundleSizeImpact\":\"Impacto en el tamaño del bundle\",\"bundleSizeImpactDesc\":\"Los bytes adicionales de JavaScript enviados a los usuarios cuando se incluyen la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.\",\"renderingOverhead\":\"Sobrecarga de renderizado\",\"renderingOverheadDesc\":\"Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar re-renderizados innecesarios en todo el árbol de componentes.\",\"hydrationCost\":\"Coste de hidratación\",\"hydrationCostDesc\":\"Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan el payload HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.\",\"lazyLoading\":\"Eficacia de la carga diferida\",\"lazyLoadingDesc\":\"Si dividir las traducciones por ruta o espacio de nombres realmente reduce la carga inicial y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché).\",\"localeSwitch\":\"Velocidad de cambio de idioma\",\"localeSwitchDesc\":\"Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.\"}},\"de\":{\"header\":{\"title\":\"Über diesen Benchmark\",\"description\":\"Dies ist eine Open-Source-Testanwendung — kein Produkt und kein Unternehmen. Ihr einziger Zweck ist es, eine realistische React-App mit mehreren Seiten bereitzustellen, in die verschiedene i18n-Bibliotheken integriert und unter identischen Bedingungen gemessen werden können.\"},\"grid\":{\"whyExistsTitle\":\"Warum dies existiert\",\"whyExistsDesc\":\"Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Konsequenzen. Die meisten Vergleiche konzentrieren sich auf die Ergonomie der API, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt es sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading tatsächlich oder verlagert es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit realen Daten.\",\"methodologyTitle\":\"Methodik\",\"methodologyDesc\":\"Die gleiche 10-seitige App wird einmal pro Bibliothek gebaut. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Lademetriken durch und verwenden den React Profiler, um die Renderzeiten während der Sprachwechsel zu erfassen. Alle Tests laufen in der CI auf konsistenter Hardware, um reproduzierbare Ergebnisse zu gewährleisten.\"},\"whatWeMeasure\":{\"title\":\"Was wir messen\",\"bundleSizeImpact\":\"Auswirkungen auf die Bundle-Größe\",\"bundleSizeImpactDesc\":\"Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Downloadzeit in langsamen Netzwerken aus.\",\"renderingOverhead\":\"Rendering-Overhead\",\"renderingOverheadDesc\":\"Wie viel zusätzliche Zeit die Bibliothek zum Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontextanbieter injizieren, können unnötige Re-Renderings im gesamten Komponentenbaum verursachen.\",\"hydrationCost\":\"Hydrierungskosten\",\"hydrationCostDesc\":\"Während des SSR werden Übersetzungsdaten in HTML serialisiert. Große Verzeichnisse erhöhen die HTML-Nutzlast und verlangsamen die Hydrierung — den Moment, in dem die Seite interaktiv wird.\",\"lazyLoading\":\"Effektivität von Lazy Loading\",\"lazyLoadingDesc\":\"Ob das Aufteilen von Übersetzungen nach Route oder Namespace die anfängliche Last tatsächlich reduziert und welche Kompromisse es mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).\",\"localeSwitch\":\"Geschwindigkeit des Sprachwechsels\",\"localeSwitchDesc\":\"Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderns von Komponenten und der Aktualisierung des DOM.\"}},\"it\":{\"header\":{\"title\":\"Informazioni su questo benchmark\",\"description\":\"Questa è un'applicazione di test open source — non un prodotto o un'azienda. Il suo unico scopo è quello di fornire un'app React multipagina realistica in cui diverse librerie i18n possono essere integrate e misurate in condizioni identiche.\"},\"grid\":{\"whyExistsTitle\":\"Perché esiste\",\"whyExistsDesc\":\"Scegliere una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo delle prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.\",\"methodologyTitle\":\"Metodologia\",\"methodologyDesc\":\"La stessa app di 10 pagine viene costruita una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per catturare i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.\"},\"whatWeMeasure\":{\"title\":\"Cosa misuriamo\",\"bundleSizeImpact\":\"Impatto sulla dimensione del bundle\",\"bundleSizeImpactDesc\":\"I byte JavaScript aggiuntivi inviati agli utenti quando vengono incluse la libreria i18n e i suoi file di traduzione. Ciò influisce direttamente sul tempo di download su reti lente.\",\"renderingOverhead\":\"Sovrapprezzo di rendering\",\"renderingOverheadDesc\":\"Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.\",\"hydrationCost\":\"Costo di idratazione\",\"hydrationCostDesc\":\"Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione — il momento in cui la pagina diventa interattiva.\",\"lazyLoading\":\"Efficacia del caricamento pigro\",\"lazyLoadingDesc\":\"Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).\",\"localeSwitch\":\"Velocità di cambio lingua\",\"localeSwitchDesc\":\"Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione — inclusi il recupero delle nuove traduzioni, il rendering dei componenti e l'aggiornamento del DOM.\"}},\"pt\":{\"header\":{\"title\":\"Sobre este benchmark\",\"description\":\"Esta é uma aplicação de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer uma aplicação React de várias páginas realista onde diferentes bibliotecas i18n podem ser integradas e medidas sob condições idênticas.\"},\"grid\":{\"whyExistsTitle\":\"Por que isto existe\",\"whyExistsDesc\":\"Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências a longo prazo. A maioria das comparações foca na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lento realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.\",\"methodologyTitle\":\"Metodologia\",\"methodologyDesc\":\"O mesmo app de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), executamos auditorias Lighthouse para as métricas de carregamento e usamos o React Profiler para capturar tempos de renderização durante as trocas de localidade. Todos os testes rodam em CI em hardware consistente para garantir resultados reprodutíveis.\"},\"whatWeMeasure\":{\"title\":\"O que medimos\",\"bundleSizeImpact\":\"Impacto no tamanho do bundle\",\"bundleSizeImpactDesc\":\"Os bytes JavaScript adicionais enviados aos usuários quando a biblioteca i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.\",\"renderingOverhead\":\"Sobrecarga de renderização\",\"renderingOverheadDesc\":\"Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções através de um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes.\",\"hydrationCost\":\"Custo de hidratação\",\"hydrationCostDesc\":\"Durante o SSR, os dados de tradução são serializados no HTML. Dicionários grandes aumentam o payload HTML e retardam a hidratação — o momento em que a página se torna interativa.\",\"lazyLoading\":\"Eficácia do carregamento lento\",\"lazyLoadingDesc\":\"Se dividir as traduções por rota ou namespace realmente reduz a carga inicial e quais trade-offs isso introduz (requisições em cascata, FOUC, complexidade de cache).\",\"localeSwitch\":\"Velocidade de troca de localidade\",\"localeSwitchDesc\":\"Quão rápido o app pode alternar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a renderização de componentes e a atualização do DOM.\"}},\"zh\":{\"header\":{\"title\":\"关于此基准测试\",\"description\":\"这是一个开源测试应用程序 — 不是产品或公司。其唯一目的是提供一个现实的、多页面的 React 应用，以便在相同条件下集成和衡量不同的 i18n 库。\"},\"grid\":{\"whyExistsTitle\":\"为什么存在这个测试\",\"whyExistsDesc\":\"选择 i18n 库是一个具有长期影响的架构决策。大多数比较关注 API 的易用性，但很少有衡量性能成本的：库为包增加了多少重量？当加载数千个翻译键时，它如何影响渲染？延迟加载是否真的有帮助，还是只是转移了成本？本基准测试通过真实数据回答了这些问题。\",\"methodologyTitle\":\"方法论\",\"methodologyDesc\":\"相同的 10 页应用为每个库构建一次。我们测量生产包（通过 rollup-plugin-visualizer），运行加载指标的 Lighthouse 审核，并使用 React Profiler 捕获语言环境切换期间的渲染时间。所有测试都在一致硬件上的 CI 中运行，以确保结果可复现。\"},\"whatWeMeasure\":{\"title\":\"衡量指标\",\"bundleSizeImpact\":\"包大小影响\",\"bundleSizeImpactDesc\":\"包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络下的下载时间。\",\"renderingOverhead\":\"渲染开销\",\"renderingOverheadDesc\":\"库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树的不必要重新渲染。\",\"hydrationCost\":\"注水成本\",\"hydrationCostDesc\":\"在 SSR 期间，翻译数据被序列化到 HTML 中。大型字典会增加 HTML 负载并减慢注水速度 — 即页面变得可交互的时刻。\",\"lazyLoading\":\"延迟加载有效性\",\"lazyLoadingDesc\":\"按路由或命名空间拆分翻译是否确实减少了初始加载，以及它引入了哪些权衡（瀑布流请求、FOUC、缓存复杂性）。\",\"localeSwitch\":\"语言环境切换速度\",\"localeSwitchDesc\":\"应用程序在运行时从一种语言切换到另一种语言的速度 — 包括获取新翻译、重新渲染组件和更新 DOM。\"}},\"ja\":{\"header\":{\"title\":\"このベンチマークについて\",\"description\":\"これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、現実的なマルチページReactアプリを提供し、異なるi18nライブラリを同一条件下で統合して測定できるようにすることです。\"},\"grid\":{\"whyExistsTitle\":\"なぜこれが存在するのか\",\"whyExistsDesc\":\"i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使いやすさに焦点を当てていますが、パフォーマンスコストを測定しているものはほとんどありません。ライブラリはバンドルにどれだけの重量を追加しますか？数千の翻訳キーが読み込まれたとき、レンダリングにどのように影響しますか？遅延読み込みは実際に役立ちますか、それともコストをシフトするだけですか？このベンチマークは、実際のデータでこれらの質問に答えます。\",\"methodologyTitle\":\"手法\",\"methodologyDesc\":\"同じ10ページのアプリをライブラリごとに1回構築します。本番バンドルを測定し（rollup-plugin-visualizer経由）、読み込み指標のLighthouse監査を実行し、React Profilerを使用してロケール切り替え中のレンダー時間をキャプチャします。再現可能な結果を確保するために、すべてのテストは一貫したハードウェア上のCIで実行されます。\"},\"whatWeMeasure\":{\"title\":\"測定項目\",\"bundleSizeImpact\":\"バンドルサイズへの影響\",\"bundleSizeImpactDesc\":\"i18nライブラリとその翻訳ファイルが含まれるときにユーザーに送信される追加のJavaScriptバイト。これは、低速なネットワークでのダウンロード時間に直接影響します。\",\"renderingOverhead\":\"レンダリングのオーバーヘッド\",\"renderingOverheadDesc\":\"ライブラリがReactのレンダーサイクルに追加する余分な時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。\",\"hydrationCost\":\"ハイドレーションコスト\",\"hydrationCostDesc\":\"SSR中、翻訳データはHTMLにシリアル化されます。巨大な辞書はHTMLペイロードを増加させ、ページがインタラクティブになるまでのハイドレーションを遅らせます。\",\"lazyLoading\":\"遅延読み込みの有効性\",\"lazyLoadingDesc\":\"ルートごとまたは名前空間ごとに翻訳を分割することが実際に初期負荷を軽減するかどうか、またどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）が導入されるか。\",\"localeSwitch\":\"ロケール切り替え速度\",\"localeSwitchDesc\":\"実行時にある言語から別の言語にどれだけ速く切り替えられるか。新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新が含まれます。\"}},\"ko\":{\"header\":{\"title\":\"이 벤치마크에 대해\",\"description\":\"이것은 오픈소스 테스트 애플리케이션이며 제품이나 회사가 아닙니다. 목적은 서로 다른 i18n 라이브러리를 동일한 조건에서 통합·측정할 수 있도록 현실적인 다중 페이지 React 앱을 제공하는 것뿐입니다.\"},\"grid\":{\"whyExistsTitle\":\"존재 이유\",\"whyExistsDesc\":\"i18n 라이브러리 선택은 장기적인 영향을 미치는 아키텍처 결정입니다. 대부분의 비교는 API 사용성에 초점을 맞추지만, 성능 비용을 측정하는 경우는 적습니다. 라이브러리가 번들에 얼마나 무게를 더하는가? 수천 개의 번역 키가 로드될 때 렌더링에 어떤 영향을 주는가? 지연 로딩이 실제로 도움이 되는가, 아니면 비용만 옮기는가? 이 벤치마크는 이런 질문에 실제 데이터로 답합니다.\",\"methodologyTitle\":\"방법론\",\"methodologyDesc\":\"동일한 10페이지 앱을 라이브러리마다 한 번씩 구축합니다. 프로덕션 번들(rollup-plugin-visualizer)을 측정하고, 로딩 지표에 대해 Lighthouse를 실행하며, 로케일 전환 시 렌더 시간을 React Profiler로 기록합니다. 모든 테스트는 재현 가능한 결과를 위해 일관된 하드웨어에서 CI로 실행됩니다.\"},\"whatWeMeasure\":{\"title\":\"측정 항목\",\"bundleSizeImpact\":\"번들 크기 영향\",\"bundleSizeImpactDesc\":\"i18n 라이브러리와 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 느린 네트워크에서 다운로드 시간에 직접 영향을 줍니다.\",\"renderingOverhead\":\"렌더링 오버헤드\",\"renderingOverheadDesc\":\"라이브러리가 React 렌더 사이클에 더하는 추가 시간입니다. 단일 컨텍스트 프로바이더로 번역을 주입하는 라이브러리는 컴포넌트 트리 전반에 불필요한 재렌더를 유발할 수 있습니다.\",\"hydrationCost\":\"하이드레이션 비용\",\"hydrationCostDesc\":\"SSR 중 번역 데이터는 HTML에 직렬화됩니다. 큰 사전은 HTML 페이로드를 키우고 페이지가 인터랙티브해지는 순간인 하이드레이션을 늦춥니다.\",\"lazyLoading\":\"지연 로딩 효과\",\"lazyLoadingDesc\":\"라우트나 네임스페이스별로 번역을 나누는 것이 실제로 초기 부하를 줄이는지, 그리고 어떤 트레이드오프(워터폴 요청, FOUC, 캐시 복잡성)를 가져오는지입니다.\",\"localeSwitch\":\"로케일 전환 속도\",\"localeSwitchDesc\":\"실행 중에 한 언어에서 다른 언어로 얼마나 빨리 바꿀 수 있는지 — 새 번역 가져오기, 컴포넌트 재렌더, DOM 업데이트를 포함합니다.\"}},\"ru\":{\"header\":{\"title\":\"Об этом бенчмарке\",\"description\":\"Это тестовое приложение с открытым исходным кодом, а не продукт или компания. Его единственная цель — предоставить реалистичное многостраничное React-приложение, в которое можно интегрировать и измерять различные библиотеки i18n в идентичных условиях.\"},\"grid\":{\"whyExistsTitle\":\"Зачем это нужно\",\"whyExistsDesc\":\"Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений фокусируются на удобстве API, но лишь немногие измеряют влияние на производительность: какой вес библиотека добавляет к бандлу? Как она влияет на рендеринг при загрузке тысяч ключей перевода? Действительно ли помогает ленивая загрузка или она просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.\",\"methodologyTitle\":\"Методология\",\"methodologyDesc\":\"Одно и то же 10-страничное приложение собирается один раз для каждой библиотеки. Мы измеряем продакшн-бандл (через rollup-plugin-visualizer), проводим аудит Lighthouse для метрик загрузки и используем React Profiler для фиксации времени рендеринга при смене языка. Все тесты запускаются в CI на идентичном оборудовании для обеспечения воспроизводимости результатов.\"},\"whatWeMeasure\":{\"title\":\"Что мы измеряем\",\"bundleSizeImpact\":\"Влияние на размер бандла\",\"bundleSizeImpactDesc\":\"Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов перевода. Это напрямую влияет на время загрузки в медленных сетях.\",\"renderingOverhead\":\"Накладные расходы на рендеринг\",\"renderingOverheadDesc\":\"Сколько дополнительного времени библиотека добавляет к циклу рендеринга React. Библиотеки, которые внедряют переводы через единый провайдер контекста, могут вызывать ненужные повторные рендеринги по всему дереву компонентов.\",\"hydrationCost\":\"Стоимость гидратации\",\"hydrationCostDesc\":\"Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем полезной нагрузки HTML и замедляют гидратацию — момент, когда страница становится интерактивной.\",\"lazyLoading\":\"Эффективность ленивой загрузки\",\"lazyLoadingDesc\":\"Снижает ли разделение переводов по маршрутам или пространствам имен фактическую начальную нагрузку, и какие компромиссы это вносит (каскадные запросы, FOUC, сложность кэширования).\",\"localeSwitch\":\"Скорость переключения языка\",\"localeSwitchDesc\":\"Как быстро приложение может переключиться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.\"}}}}"),
		localIds: [
			"about::sync-json::./locales/{{locale}}.json::locales/en.json",
			"about::sync-json::./locales/{{locale}}.json::locales/fr.json",
			"about::sync-json::./locales/{{locale}}.json::locales/es.json",
			"about::sync-json::./locales/{{locale}}.json::locales/de.json",
			"about::sync-json::./locales/{{locale}}.json::locales/it.json",
			"about::sync-json::./locales/{{locale}}.json::locales/pt.json",
			"about::sync-json::./locales/{{locale}}.json::locales/zh.json",
			"about::sync-json::./locales/{{locale}}.json::locales/ja.json",
			"about::sync-json::./locales/{{locale}}.json::locales/ko.json",
			"about::sync-json::./locales/{{locale}}.json::locales/ru.json"
		]
	},
	"home": {
		key: "home",
		content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"hero\":{\"title\":\"i18n Benchmark\",\"description\":\"A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.\",\"viewResults\":\"View Results\",\"methodology\":\"Methodology\"},\"whyItMatters\":{\"title\":\"Why These Metrics Matter\",\"bundleSizeTitle\":\"Bundle Size\",\"bundleSizeDesc\":\"The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.\",\"renderingTitle\":\"Rendering & Hydration\",\"renderingDesc\":\"Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).\",\"dynamicLoadingTitle\":\"Dynamic Loading\",\"dynamicLoadingDesc\":\"Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.\"},\"understandingImpact\":{\"title\":\"Understanding the Impact\",\"singleJsonTitle\":\"Why a single large JSON can hurt performance\",\"singleJsonIntro\":\"Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:\",\"singleJsonBullet1\":\"The JSON must be parsed on every page load — blocking the main thread.\",\"singleJsonBullet2\":\"Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.\",\"singleJsonBullet3\":\"During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.\",\"tradeOffsTitle\":\"The trade-offs of dynamic loading\",\"tradeOffsIntro\":\"Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:\",\"waterfallLabel\":\"Waterfall requests:\",\"waterfallDesc\":\"the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.\",\"foucLabel\":\"Flash of untranslated content (FOUC):\",\"foucDesc\":\"users may briefly see translation keys or a fallback language before the chunk arrives.\",\"cacheLabel\":\"Cache invalidation:\",\"cacheDesc\":\"updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.\",\"measuresTitle\":\"What this benchmark measures\",\"measuresDesc\":\"This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.\"},\"resultsTable\":{\"title\":\"Sample Results\",\"library\":\"Library\",\"bundleSize\":\"Bundle Size\",\"lookupTime\":\"Lookup Time\",\"lazyLoading\":\"Lazy Loading\",\"yes\":\"Yes\",\"manual\":\"Manual\",\"builtIn\":\"Built-in\"}},\"fr\":{\"hero\":{\"title\":\"Benchmark i18n\",\"description\":\"Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.\",\"viewResults\":\"Voir les résultats\",\"methodology\":\"Méthodologie\"},\"whyItMatters\":{\"title\":\"Pourquoi ces métriques comptent\",\"bundleSizeTitle\":\"Taille du bundle\",\"bundleSizeDesc\":\"Le bundle est l'ensemble des données livrées à chaque utilisateur dans le monde. Un bundle plus lourd implique des temps de téléchargement plus longs — surtout sur des connexions 3G lentes encore très répandues. Les bibliothèques i18n ont des poids très variables : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, sans compter les fichiers de traduction.\",\"renderingTitle\":\"Rendu et hydratation\",\"renderingDesc\":\"Brancher un gros dictionnaire JSON sur chaque composant crée une dépendance cachée : tout changement de contexte de traduction peut déclencher des re-rendus sur tout l'arbre. Lors de l'hydratation SSR, analyser et attacher d'immenses objets de traduction ajoute de la latence avant que la page soit interactive — impact direct sur le Time to Interactive (TTI).\",\"dynamicLoadingTitle\":\"Chargement dynamique\",\"dynamicLoadingDesc\":\"Charger toutes les traductions d'un coup surdimensionne la charge initiale. Le chargement paresseux découpe les traductions par route ou espace de noms et n'envoie que le nécessaire. Il introduit pourtant ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité du cache. Il faut mesurer les deux approches.\"},\"understandingImpact\":{\"title\":\"Comprendre l'impact\",\"singleJsonTitle\":\"Pourquoi un unique gros JSON peut nuire aux performances\",\"singleJsonIntro\":\"Beaucoup de bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsqu'il est volumineux (milliers de clés), chaque composant qui consomme des traductions garde une référence à tout le dictionnaire. Cela signifie :\",\"singleJsonBullet1\":\"Le JSON doit être analysé à chaque chargement de page — en bloquant le thread principal.\",\"singleJsonBullet2\":\"Les architectures fondées sur le contexte peuvent provoquer des re-rendus en cascade quand la langue change, car chaque consommateur est notifié même si ses clés n'ont pas changé.\",\"singleJsonBullet3\":\"Lors du rendu serveur, tout le dictionnaire est sérialisé dans le HTML, alourdissant le document à télécharger et à hydrater.\",\"tradeOffsTitle\":\"Les compromis du chargement dynamique\",\"tradeOffsIntro\":\"Découper les traductions par route ou espace de noms réduit fortement la charge initiale, mais pose de nouveaux défis :\",\"waterfallLabel\":\"Requêtes en cascade :\",\"waterfallDesc\":\"l'application doit d'abord charger, déterminer la langue, puis récupérer le bon fragment — avec des allers-retours réseau supplémentaires.\",\"foucLabel\":\"Flash de contenu non traduit (FOUC) :\",\"foucDesc\":\"l'utilisateur peut voir brièvement des clés ou une langue de secours avant l'arrivée du fragment.\",\"cacheLabel\":\"Invalidation du cache :\",\"cacheDesc\":\"mettre à jour les traductions exige des stratégies de cache busting pour livrer du contenu à jour sans re-télécharger l'inutile.\",\"measuresTitle\":\"Ce que mesure ce benchmark\",\"measuresDesc\":\"Cette appli de test offre un environnement contrôlé — 10 pages au contenu réaliste — pour comparer les bibliothèques i18n sur trois axes : le poids ajouté au bundle JavaScript, le temps passé à analyser et afficher le texte traduit, et l'efficacité du découpage de code et du chargement paresseux. Chaque bibliothèque est intégrée dans la même base pour des résultats comparables.\"},\"resultsTable\":{\"title\":\"Exemple de résultats\",\"library\":\"Bibliothèque\",\"bundleSize\":\"Taille du bundle\",\"lookupTime\":\"Temps de recherche\",\"lazyLoading\":\"Chargement paresseux\",\"yes\":\"Oui\",\"manual\":\"Manuel\",\"builtIn\":\"Intégré\"}},\"es\":{\"hero\":{\"title\":\"i18n Benchmark\",\"description\":\"Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.\",\"viewResults\":\"Ver resultados\",\"methodology\":\"Metodología\"},\"whyItMatters\":{\"title\":\"Por qué son importantes estas métricas\",\"bundleSizeTitle\":\"Tamaño del bundle\",\"bundleSizeDesc\":\"El bundle representa los datos enviados a cada usuario en todo el mundo. Un bundle más grande significa tiempos de descarga más largos, especialmente en las conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código runtime, además de los propios archivos de traducción.\",\"renderingTitle\":\"Renderizado e hidratación\",\"renderingDesc\":\"Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página sea interactiva, lo que afecta directamente al Time to Interactive (TTI).\",\"dynamicLoadingTitle\":\"Carga dinámica\",\"dynamicLoadingDesc\":\"Cargar todas las traducciones por adelantado sobrecarga el payload inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, la carga diferida introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial.\"},\"understandingImpact\":{\"title\":\"Entendiendo el impacto\",\"singleJsonTitle\":\"Por qué un solo JSON grande puede perjudicar el rendimiento\",\"singleJsonIntro\":\"Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:\",\"singleJsonBullet1\":\"El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.\",\"singleJsonBullet2\":\"Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.\",\"singleJsonBullet3\":\"Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.\",\"tradeOffsTitle\":\"Las compensaciones de la carga dinámica\",\"tradeOffsIntro\":\"Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:\",\"waterfallLabel\":\"Solicitudes en cascada:\",\"waterfallDesc\":\"la aplicación debe primero cargarse, determinar el idioma, luego obtener el fragmento correcto, lo que añade viajes de red de ida y vuelta.\",\"foucLabel\":\"Parpadeo de contenido no traducido (FOUC):\",\"foucDesc\":\"los usuarios pueden ver brevemente las claves de traducción o un idioma de respaldo antes de que llegue el fragmento.\",\"cacheLabel\":\"Invalidación de la caché:\",\"cacheDesc\":\"actualizar las traducciones requiere estrategias de invalidación de la caché para asegurar que los usuarios obtengan contenido fresco sin volver a descargar fragmentos no modificados.\",\"measuresTitle\":\"Qué mide este benchmark\",\"measuresDesc\":\"Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.\"},\"resultsTable\":{\"title\":\"Resultados de muestra\",\"library\":\"Biblioteca\",\"bundleSize\":\"Tamaño del bundle\",\"lookupTime\":\"Tiempo de búsqueda\",\"lazyLoading\":\"Carga diferida\",\"yes\":\"Sí\",\"manual\":\"Manual\",\"builtIn\":\"Integrado\"}},\"de\":{\"hero\":{\"title\":\"i18n Benchmark\",\"description\":\"Eine Testanwendung, die entwickelt wurde, um die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen.\",\"viewResults\":\"Ergebnisse anzeigen\",\"methodology\":\"Methodik\"},\"whyItMatters\":{\"title\":\"Warum diese Metriken wichtig sind\",\"bundleSizeTitle\":\"Bundle-Größe\",\"bundleSizeDesc\":\"Das Bundle sind die Daten, die an jeden Benutzer auf der ganzen Welt gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — besonders bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren stark in ihrem Gewicht: von einigen Kilobyte bis zu Dutzenden von Kilobyte an Laufzeitcode, plus die Übersetzungsdateien selbst.\",\"renderingTitle\":\"Rendering & Hydrierung\",\"renderingDesc\":\"Die Anbindung eines großen JSON-Verzeichnisses an jede Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydrierung verursacht das Parsen und Anhängen massiver Übersetzungsobjekte Latenzzeit, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.\",\"dynamicLoadingTitle\":\"Dynamisches Laden\",\"dynamicLoadingDesc\":\"Das Laden aller Übersetzungen im Voraus überlastet die anfängliche Nutzlast. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namespace auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Flash of Untranslated Content und Caching-Komplexität. Die Messung beider Strategien ist unerlässlich.\"},\"understandingImpact\":{\"title\":\"Die Auswirkungen verstehen\",\"singleJsonTitle\":\"Warum ein einzelnes großes JSON die Leistung beeinträchtigen kann\",\"singleJsonIntro\":\"Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verbraucht, eine Referenz auf das gesamte Verzeichnis. Das bedeutet:\",\"singleJsonBullet1\":\"Das JSON muss bei jedem Seitenladen analysiert werden — was den Haupt-Thread blockiert.\",\"singleJsonBullet2\":\"Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich die Sprache ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.\",\"singleJsonBullet3\":\"Beim serverseitigen Rendering wird das vollständige Verzeichnis in die HTML-Nutzlast serialisiert, was die Dokumentgröße erhöht, die heruntergeladen und hydriert werden muss.\",\"tradeOffsTitle\":\"Die Kompromisse beim dynamischen Laden\",\"tradeOffsIntro\":\"Das Aufteilen von Übersetzungen in Chunks pro Route oder pro Namespace kann die anfängliche Nutzlast drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:\",\"waterfallLabel\":\"Waterfall-Anfragen:\",\"waterfallDesc\":\"Die App muss zuerst laden, die Sprache bestimmen und dann den richtigen Chunk abrufen — was zusätzliche Netzwerk-Roundtrips verursacht.\",\"foucLabel\":\"Flash of Untranslated Content (FOUC):\",\"foucDesc\":\"Benutzer sehen möglicherweise kurzzeitig Übersetzungsschlüssel oder eine Fallback-Sprache, bevor der Chunk eintrifft.\",\"cacheLabel\":\"Cache-Invalidierung:\",\"cacheDesc\":\"Die Aktualisierung von Übersetzungen erfordert Strategien zur Cache-Invalidierung, um sicherzustellen, dass Benutzer frische Inhalte erhalten, ohne unveränderte Chunks erneut herunterzuladen.\",\"measuresTitle\":\"Was dieser Benchmark misst\",\"measuresDesc\":\"Diese Testanwendung bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken auf drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe Anwendung integriert, sodass die Ergebnisse direkt vergleichbar sind.\"},\"resultsTable\":{\"title\":\"Beispielergebnisse\",\"library\":\"Bibliothek\",\"bundleSize\":\"Bundle-Größe\",\"lookupTime\":\"Lookup-Zeit\",\"lazyLoading\":\"Lazy Loading\",\"yes\":\"Ja\",\"manual\":\"Manuell\",\"builtIn\":\"Integriert\"}},\"it\":{\"hero\":{\"title\":\"i18n Benchmark\",\"description\":\"Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.\",\"viewResults\":\"Visualizza i risultati\",\"methodology\":\"Metodologia\"},\"whyItMatters\":{\"title\":\"Perché queste metriche sono importanti\",\"bundleSizeTitle\":\"Dimensione del bundle\",\"bundleSizeDesc\":\"Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.\",\"renderingTitle\":\"Rendering e idratazione\",\"renderingDesc\":\"Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).\",\"dynamicLoadingTitle\":\"Caricamento dinamico\",\"dynamicLoadingDesc\":\"Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale.\"},\"understandingImpact\":{\"title\":\"Capire l'impatto\",\"singleJsonTitle\":\"Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni\",\"singleJsonIntro\":\"Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:\",\"singleJsonBullet1\":\"Il JSON deve essere analizzato a ogni caricamento della pagina — bloccando il thread principale.\",\"singleJsonBullet2\":\"Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.\",\"singleJsonBullet3\":\"Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idratato.\",\"tradeOffsTitle\":\"I compromessi del caricamento dinamico\",\"tradeOffsIntro\":\"La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:\",\"waterfallLabel\":\"Richieste a cascata:\",\"waterfallDesc\":\"l'app deve prima caricarsi, determinare la locale, quindi recuperare il chunk corretto — aggiungendo round-trip di rete.\",\"foucLabel\":\"Flash di contenuti non tradotti (FOUC):\",\"foucDesc\":\"gli utenti possono vedere brevemente le chiavi di traduzione o una lingua di fallback prima che arrivi il chunk.\",\"cacheLabel\":\"Invalidazione della cache:\",\"cacheDesc\":\"l'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza riscaricare chunk non modificati.\",\"measuresTitle\":\"Cosa misura questo benchmark\",\"measuresDesc\":\"Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.\"},\"resultsTable\":{\"title\":\"Risultati di esempio\",\"library\":\"Libreria\",\"bundleSize\":\"Dimensione del bundle\",\"lookupTime\":\"Tempo di ricerca\",\"lazyLoading\":\"Caricamento lazy\",\"yes\":\"Sì\",\"manual\":\"Manuale\",\"builtIn\":\"Integrato\"}},\"pt\":{\"hero\":{\"title\":\"i18n Benchmark\",\"description\":\"Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade de renderização.\",\"viewResults\":\"Ver Resultados\",\"methodology\":\"Metodologia\"},\"whyItMatters\":{\"title\":\"Por que estas métricas importam\",\"bundleSizeTitle\":\"Tamanho do bundle\",\"bundleSizeDesc\":\"O bundle representa os dados enviados para cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas, comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código runtime, além dos próprios arquivos de tradução.\",\"renderingTitle\":\"Renderização e hidratação\",\"renderingDesc\":\"Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode disparar renderizações em toda a árvore. Durante a hidratação SSR, analisar e anexar objetos de tradução massivos adiciona latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).\",\"dynamicLoadingTitle\":\"Carregamento dinâmico\",\"dynamicLoadingDesc\":\"Carregar todas as traduções antecipadamente sobrecarrega o payload inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento lento introduz seus próprios trade-offs: requisições em cascata, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.\"},\"understandingImpact\":{\"title\":\"Entendendo o impacto\",\"singleJsonTitle\":\"Por que um único JSON grande pode prejudicar o desempenho\",\"singleJsonIntro\":\"Muitas bibliotecas i18n armazenam traduções em um único objeto JSON fornecido via contexto React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isso significa:\",\"singleJsonBullet1\":\"O JSON deve ser analisado a cada carregamento de página — bloqueando a thread principal.\",\"singleJsonBullet2\":\"Arquiteturas baseadas em contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que suas chaves específicas não tenham mudado.\",\"singleJsonBullet3\":\"Durante a renderização no lado do servidor, o dicionário completo é serializado no payload HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.\",\"tradeOffsTitle\":\"Os trade-offs do carregamento dinâmico\",\"tradeOffsIntro\":\"Dividir as traduções em pedaços por rota ou por namespace pode reduzir drasticamente o payload inicial. Mas introduz novos desafios:\",\"waterfallLabel\":\"Requisições em cascata:\",\"waterfallDesc\":\"o app deve primeiro carregar, determinar a localidade, então buscar o chunk certo — adicionando network round-trips.\",\"foucLabel\":\"Flash de conteúdo não traduzido (FOUC):\",\"foucDesc\":\"usuários podem ver brevemente as chaves de tradução ou um idioma de fallback antes de o chunk chegar.\",\"cacheLabel\":\"Invalidação de cache:\",\"cacheDesc\":\"atualizar as traduções requer estratégias de invalidação de cache para garantir que os usuários obtenham conteúdo fresco sem baixar novamente os chunks inalterados.\",\"measuresTitle\":\"O que este benchmark mede\",\"measuresDesc\":\"Este app de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas i18n em três eixos: o peso que elas adicionam ao seu bundle JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia de suas estratégias de divisão de código e carregamento lento. Cada biblioteca é integrada no mesmo app para que os resultados sejam diretamente comparáveis.\"},\"resultsTable\":{\"title\":\"Resultados de exemplo\",\"library\":\"Biblioteca\",\"bundleSize\":\"Tamanho do Bundle\",\"lookupTime\":\"Tempo de Busca\",\"lazyLoading\":\"Carregamento Lento\",\"yes\":\"Sim\",\"manual\":\"Manual\",\"builtIn\":\"Integrado\"}},\"zh\":{\"hero\":{\"title\":\"i18n Benchmark\",\"description\":\"一个旨在衡量国际化库对包大小、加载性能和渲染反应性实际影响的测试应用程序。\",\"viewResults\":\"查看结果\",\"methodology\":\"方法论\"},\"whyItMatters\":{\"title\":\"为什么这些指标很重要\",\"bundleSizeTitle\":\"包大小\",\"bundleSizeDesc\":\"包是发送给全球每个用户的数据。较大的包意味着较长的下载时间 — 特别是在许多地区常见的慢速 3G 连接下。i18n 库的重量差异巨大：从几 KB 到几十 KB 的运行时代码，外加翻译文件本身。\",\"renderingTitle\":\"渲染与注水\",\"renderingDesc\":\"将大型 JSON 字典连接到每个组件会创建隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加海量的翻译对象会增加页面变为可交互之前的延迟 — 直接影响可交互时间 (TTI)。\",\"dynamicLoadingTitle\":\"动态加载\",\"dynamicLoadingDesc\":\"预先加载所有翻译会使初始负载过重。动态（延迟）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，延迟加载引入了它自己的权衡：瀑布流请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。\"},\"understandingImpact\":{\"title\":\"理解影响\",\"singleJsonTitle\":\"为什么单个大型 JSON 会损害性能\",\"singleJsonIntro\":\"许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个消耗翻译的组件都会保留对整个字典的引用。这意味着：\",\"singleJsonBullet1\":\"每次页面加载时都必须解析 JSON — 阻塞主线程。\",\"singleJsonBullet2\":\"当语言环境更改时，基于上下文的架构可能会导致级联重新渲染，因为即使特定键未更改，每个使用者也会收到通知。\",\"singleJsonBullet3\":\"在服务器端渲染期间，整个字典被序列化到 HTML 负载中，增加了必须下载和注水的文档大小。\",\"tradeOffsTitle\":\"动态加载的权衡\",\"tradeOffsIntro\":\"将翻译拆分为每个路由或每个命名空间的块可以大幅减少初始负载。但它引入了新的挑战：\",\"waterfallLabel\":\"瀑布流请求：\",\"waterfallDesc\":\"应用必须首先加载，确定语言环境，然后获取正确的块 — 增加了网络往返时间。\",\"foucLabel\":\"未翻译内容闪烁 (FOUC)：\",\"foucDesc\":\"在块到达之前，用户可能会短暂看到翻译键或回退语言。\",\"cacheLabel\":\"缓存失效：\",\"cacheDesc\":\"更新翻译需要缓存刷新策略，以确保用户获得最新内容，而无需重新下载未更改的块。\",\"measuresTitle\":\"此基准测试衡量的内容\",\"measuresDesc\":\"此测试应用提供了一个受控环境 — 10 个具有真实内容的页面 — 以在三个轴上比较 i18n 库：它们为您的 JavaScript 包增加的重量、解析和渲染翻译内容所花费的时间，以及它们代码拆分和延迟加载策略的有效性。每个库都集成在同一个应用中，因此结果具有直接可比性。\"},\"resultsTable\":{\"title\":\"示例结果\",\"library\":\"库\",\"bundleSize\":\"包大小\",\"lookupTime\":\"查找时间\",\"lazyLoading\":\"延迟加载\",\"yes\":\"是\",\"manual\":\"手动\",\"builtIn\":\"内置\"}},\"ja\":{\"hero\":{\"title\":\"i18n Benchmark\",\"description\":\"国際化ライブラリがバンドルサイズ、読み込みパフォーマンス、レンダリングの反応性に与える実世界の影響を測定するために設計されたテストアプリケーション。\",\"viewResults\":\"結果を見る\",\"methodology\":\"手法\"},\"whyItMatters\":{\"title\":\"なぜこれらの指標が重要なのか\",\"bundleSizeTitle\":\"バンドルサイズ\",\"bundleSizeDesc\":\"バンドルは世界中のすべてのユーザーに送られるデータです。バンドルが大きいほどダウンロード時間が長くなります。これは多くの地域で一般的な低速な3G接続において特に顕著です。i18nライブラリの重量は、数キロバイトから数十キロバイトのランタイムコード、さらに翻訳ファイル自体に至るまで、劇的に異なります。\",\"renderingTitle\":\"レンダリングとハイドレーション\",\"renderingDesc\":\"巨大なJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体の再レンダリングを引き起こす可能性があります。SSRハイドレーション中、大規模な翻訳オブジェクトの解析とアタッチは、ページがインタラクティブになるまでのレイテンシを増加させ、Time to Interactive (TTI) に直接影響します。\",\"dynamicLoadingTitle\":\"動的読み込み\",\"dynamicLoadingDesc\":\"すべての翻訳を事前読み込みすると、初期ペイロードに過負荷がかかります。動的（遅延）読み込みは翻訳をルートや名前空間ごとに分割し、現在のページに必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、翻訳されていないコンテンツのフラッシュ、キャッシュの複雑さなどのトレードオフがあります。両方の戦略を測定することが不可欠です。\"},\"understandingImpact\":{\"title\":\"影響を理解する\",\"singleJsonTitle\":\"なぜ1つの大きなJSONがパフォーマンスを低下させるのか\",\"singleJsonIntro\":\"多くのi18nライブラリは、Reactコンテキストを介して提供される単一のJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい場合（数千のキー）、翻訳を使用するすべてのコンポーネントが辞書全体への参照を保持することになります。これは以下を意味します：\",\"singleJsonBullet1\":\"ページを読み込むたびにJSONを解析する必要があり、メインスレッドをブロックします。\",\"singleJsonBullet2\":\"コンテキストベースのアーキテクチャでは、特定のキーが変更されていなくてもすべての消費者に通知されるため、ロケール変更時にカスケードレンダリングが発生する可能性があります。\",\"singleJsonBullet3\":\"サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。\",\"tradeOffsTitle\":\"動的読み込みのトレードオフ\",\"tradeOffsIntro\":\"翻訳をルートごとまたは名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新しい課題も生じます：\",\"waterfallLabel\":\"ウォーターフォールリクエスト：\",\"waterfallDesc\":\"アプリは最初に読み込み、ロケールを決定し、次に正しいチャンクを取得する必要があり、ネットワークのラウンドトリップが追加されます。\",\"foucLabel\":\"翻訳されていないコンテンツのフラッシュ (FOUC)：\",\"foucDesc\":\"チャンクが到着する前に、ユーザーに翻訳キーまたはフォールバック言語が一時的に表示されることがあります。\",\"cacheLabel\":\"キャッシュの無効化：\",\"cacheDesc\":\"翻訳を更新するには、ユーザーが変更されていないチャンクを再ダウンロードすることなく最新のコンテンツを取得できるようにするためのキャッシュバースト戦略が必要です。\",\"measuresTitle\":\"このベンチマークが測定するもの\",\"measuresDesc\":\"このテストアプリは、現実的なコンテンツを含む10ページという制御された環境を提供し、JavaScriptバンドルに追加される重量、翻訳コンテンツの解析とレンダリングに費される時間、およびコード分割と遅延読み込み戦略の効果という3つの軸でi18nライブラリを比較します。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。\"},\"resultsTable\":{\"title\":\"サンプル結果\",\"library\":\"ライブラリ\",\"bundleSize\":\"バンドルサイズ\",\"lookupTime\":\"ルックアップ時間\",\"lazyLoading\":\"遅延読み込み\",\"yes\":\"はい\",\"manual\":\"手動\",\"builtIn\":\"内蔵\"}},\"ko\":{\"hero\":{\"title\":\"i18n Benchmark\",\"description\":\"국제화 라이브러리가 번들 크기, 로딩 성능, 렌더링 반응성에 미치는 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.\",\"viewResults\":\"결과 보기\",\"methodology\":\"방법론\"},\"whyItMatters\":{\"title\":\"이 지표가 중요한 이유\",\"bundleSizeTitle\":\"번들 크기\",\"bundleSizeDesc\":\"번들은 전 세계 모든 사용자에게 전달되는 데이터입니다. 번들이 클수록 다운로드 시간이 길어집니다. 특히 많은 지역에서 흔한 느린 3G 환경에서 그렇습니다. i18n 라이브러리는 몇 킬로바이트에서 수십 킬로바이트의 런타임 코드와 번역 파일까지 무게가 크게 다릅니다.\",\"renderingTitle\":\"렌더링 및 하이드레이션\",\"renderingDesc\":\"큰 JSON 사전을 모든 컴포넌트에 연결하면 숨겨진 의존성이 생깁니다. 번역 컨텍스트가 바뀌면 트리 전체가 다시 그려질 수 있습니다. SSR 하이드레이션 중에는 방대한 번역 객체를 파싱하고 붙이는 데 지연이 생겨, 페이지가 인터랙티브해지기 전까지 시간이 길어지며 Time to Interactive(TTI)에 직접 영향을 줍니다.\",\"dynamicLoadingTitle\":\"동적 로딩\",\"dynamicLoadingDesc\":\"모든 번역을 미리 불러오면 초기 페이로드가 과부하됩니다. 동적(지연) 로딩은 번역을 라우트나 네임스페이스별로 나누어 현재 페이지에 필요한 것만 보냅니다. 다만 지연 로딩에는 워터폴 요청, 번역되지 않은 콘텐츠의 깜빡임, 캐시 복잡성 같은 트레이드오프가 따릅니다. 두 전략을 모두 측정하는 것이 중요합니다.\"},\"understandingImpact\":{\"title\":\"영향 이해하기\",\"singleJsonTitle\":\"하나의 큰 JSON이 성능을 해치는 이유\",\"singleJsonIntro\":\"많은 i18n 라이브러리는 React 컨텍스트로 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 매우 크면(수천 개의 키) 번역을 쓰는 모든 컴포넌트가 전체 사전을 참조하게 됩니다. 즉:\",\"singleJsonBullet1\":\"페이지를 불러올 때마다 JSON을 파싱해야 하며 메인 스레드를 막습니다.\",\"singleJsonBullet2\":\"컨텍스트 기반 아키텍처에서는 로케일이 바뀔 때 특정 키가 바뀌지 않아도 모든 소비자에게 알림이 가며 연쇄 재렌더링이 일어날 수 있습니다.\",\"singleJsonBullet3\":\"서버 사이드 렌더링에서는 전체 사전이 HTML 페이로드에 직렬화되어 다운로드·하이드레이션해야 할 문서 크기가 커집니다.\",\"tradeOffsTitle\":\"동적 로딩의 트레이드오프\",\"tradeOffsIntro\":\"번역을 라우트별 또는 네임스페이스별 청크로 나누면 초기 페이로드를 크게 줄일 수 있습니다. 하지만 새로운 과제도 생깁니다:\",\"waterfallLabel\":\"워터폴 요청:\",\"waterfallDesc\":\"앱이 먼저 로드되고 로케일을 결정한 뒤 올바른 청크를 가져와야 하며, 네트워크 왕복이 추가됩니다.\",\"foucLabel\":\"번역되지 않은 콘텐츠의 깜빡임(FOUC):\",\"foucDesc\":\"청크가 도착하기 전에 사용자가 번역 키나 대체 언어를 잠깐 볼 수 있습니다.\",\"cacheLabel\":\"캐시 무효화:\",\"cacheDesc\":\"번역을 갱신하려면 사용자가 바뀌지 않은 청크를 다시 받지 않고도 최신 콘텐츠를 받도록 캐시 무효화 전략이 필요합니다.\",\"measuresTitle\":\"이 벤치마크가 측정하는 것\",\"measuresDesc\":\"이 테스트 앱은 현실적인 콘텐츠가 있는 10개 페이지라는 통제된 환경에서, JavaScript 번들에 더해지는 무게, 번역 콘텐츠 파싱·렌더링에 쓰이는 시간, 코드 분할과 지연 로딩 전략의 효과라는 세 축으로 i18n 라이브러리를 비교합니다. 각 라이브러리는 동일한 앱에 통합되어 있어 결과를 직접 비교할 수 있습니다.\"},\"resultsTable\":{\"title\":\"샘플 결과\",\"library\":\"라이브러리\",\"bundleSize\":\"번들 크기\",\"lookupTime\":\"조회 시간\",\"lazyLoading\":\"지연 로딩\",\"yes\":\"예\",\"manual\":\"수동\",\"builtIn\":\"내장\"}},\"ru\":{\"hero\":{\"title\":\"i18n Benchmark\",\"description\":\"Тестовое приложение, разработанное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.\",\"viewResults\":\"Посмотреть результаты\",\"methodology\":\"Методология\"},\"whyItMatters\":{\"title\":\"Почему эти метрики важны\",\"bundleSizeTitle\":\"Размер бандла\",\"bundleSizeDesc\":\"Бандл — это данные, отправляемые каждому пользователю по всему миру. Больший бандл означает более длительное время загрузки — особенно при медленном 3G-соединении, распространенном во многих регионах. Вес библиотек i18n сильно варьируется: от нескольких килобайт до десятков килобайт кода среды выполнения, плюс сами файлы переводов.\",\"renderingTitle\":\"Рендеринг и гидратация\",\"renderingDesc\":\"Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг по всему дереву. Во время SSR-гидратации парсинг и присоединение массивных объектов перевода добавляет задержку до того, как страница станет интерактивной, что напрямую влияет на время до интерактивности (TTI).\",\"dynamicLoadingTitle\":\"Динамическая загрузка\",\"dynamicLoadingDesc\":\"Загрузка всех переводов заранее перегружает начальный объем данных. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно текущей странице. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы, мерцание непереведенного контента и сложность кэширования. Важно измерять обе стратегии.\"},\"understandingImpact\":{\"title\":\"Понимание влияния\",\"singleJsonTitle\":\"Почему один большой JSON может снизить производительность\",\"singleJsonIntro\":\"Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:\",\"singleJsonBullet1\":\"JSON должен парситься при каждой загрузке страницы, что блокирует основной поток.\",\"singleJsonBullet2\":\"Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при смене языка, так как каждый потребитель получает уведомление, даже если его конкретные ключи не изменились.\",\"singleJsonBullet3\":\"При серверном рендеринге весь словарь сериализуется в HTML, что увеличивает размер документа, который необходимо загрузить и гидратировать.\",\"tradeOffsTitle\":\"Компромиссы динамической загрузки\",\"tradeOffsIntro\":\"Разделение переводов на части для каждого маршрута или пространства имен может значительно уменьшить начальный объем данных. Но это создает новые проблемы:\",\"waterfallLabel\":\"Каскадные запросы:\",\"waterfallDesc\":\"приложение должно сначала загрузиться, определить язык, а затем получить нужную часть, что добавляет сетевые задержки.\",\"foucLabel\":\"Мерцание непереведенного контента (FOUC):\",\"foucDesc\":\"пользователи могут кратковременно видеть ключи перевода или резервный язык до загрузки нужной части.\",\"cacheLabel\":\"Инвалидация кэша:\",\"cacheDesc\":\"обновление переводов требует стратегий сброса кэша, чтобы пользователи получали свежий контент без повторной загрузки неизмененных частей.\",\"measuresTitle\":\"Что измеряет этот бенчмарк\",\"measuresDesc\":\"Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют к вашему JavaScript-бандлу, время, затрачиваемое на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.\"},\"resultsTable\":{\"title\":\"Примеры результатов\",\"library\":\"Библиотека\",\"bundleSize\":\"Размер бандла\",\"lookupTime\":\"Время поиска\",\"lazyLoading\":\"Ленивая загрузка\",\"yes\":\"Да\",\"manual\":\"Вручную\",\"builtIn\":\"Встроено\"}}}}"),
		localIds: [
			"home::sync-json::./locales/{{locale}}.json::locales/en.json",
			"home::sync-json::./locales/{{locale}}.json::locales/fr.json",
			"home::sync-json::./locales/{{locale}}.json::locales/es.json",
			"home::sync-json::./locales/{{locale}}.json::locales/de.json",
			"home::sync-json::./locales/{{locale}}.json::locales/it.json",
			"home::sync-json::./locales/{{locale}}.json::locales/pt.json",
			"home::sync-json::./locales/{{locale}}.json::locales/zh.json",
			"home::sync-json::./locales/{{locale}}.json::locales/ja.json",
			"home::sync-json::./locales/{{locale}}.json::locales/ko.json",
			"home::sync-json::./locales/{{locale}}.json::locales/ru.json"
		]
	},
	"team": {
		key: "team",
		content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"header\":{\"title\":\"Our Team\",\"description\":\"Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.\"},\"grid\":{\"member1Name\":\"Sarah Chen\",\"member1Role\":\"Founder & Lead Engineer\",\"member1Bio\":\"Former Google engineer with 10 years of experience building internationalization systems at scale.\",\"member2Name\":\"Marcus Weber\",\"member2Role\":\"Performance Engineer\",\"member2Bio\":\"Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.\",\"member3Name\":\"Aisha Patel\",\"member3Role\":\"Developer Advocate\",\"member3Bio\":\"Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.\",\"member4Name\":\"Tomás Rodríguez\",\"member4Role\":\"Full-Stack Developer\",\"member4Bio\":\"Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.\",\"member5Name\":\"Yuki Tanaka\",\"member5Role\":\"Data Analyst\",\"member5Bio\":\"Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.\",\"member6Name\":\"Elena Kowalski\",\"member6Role\":\"Community Manager\",\"member6Bio\":\"Manages community contributions, partnerships, and events. Background in open source governance.\"}},\"fr\":{\"header\":{\"title\":\"Notre équipe\",\"description\":\"Les personnes derrière i18n Benchmark, unies par la passion des outils développeurs.\"},\"grid\":{\"member1Name\":\"Sarah Chen\",\"member1Role\":\"Fondatrice & lead ingénieur\",\"member1Bio\":\"Ex-ingénieure Google, 10 ans sur l'internationalisation à grande échelle.\",\"member2Name\":\"Marcus Weber\",\"member2Role\":\"Ingénieur performance\",\"member2Bio\":\"Optimisation JavaScript et méthodologie de benchmark — précédemment chez Vercel.\",\"member3Name\":\"Aisha Patel\",\"member3Role\":\"Developer advocate\",\"member3Bio\":\"Expérience développeur et pédagogie — conférencière React Conf, JSConf, i18nNext.\",\"member4Name\":\"Tomás Rodríguez\",\"member4Role\":\"Développeur full-stack\",\"member4Bio\":\"Infrastructure de benchmark et CI/CD — contributeur open source à Lingui.\",\"member5Name\":\"Yuki Tanaka\",\"member5Role\":\"Analyste de données\",\"member5Bio\":\"Rigueur statistique des résultats — doctorat en statistiques appliquées (MIT).\",\"member6Name\":\"Elena Kowalski\",\"member6Role\":\"Community manager\",\"member6Bio\":\"Contributions communautaires, partenariats et événements — gouvernance open source.\"}},\"es\":{\"header\":{\"title\":\"Nuestro equipo\",\"description\":\"Conoce a las personas que están detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las grandes herramientas para desarrolladores.\"},\"grid\":{\"member1Name\":\"Sarah Chen\",\"member1Role\":\"Fundadora e ingeniera principal\",\"member1Bio\":\"Exingeniera de Google con 10 años de experiencia en la creación de sistemas de internacionalización a escala.\",\"member2Name\":\"Marcus Weber\",\"member2Role\":\"Ingeniero de rendimiento\",\"member2Bio\":\"Especializado en la optimización del rendimiento de JavaScript y la metodología de benchmarking. Anteriormente en Vercel.\",\"member3Name\":\"Aisha Patel\",\"member3Role\":\"Developer Advocate\",\"member3Bio\":\"Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.\",\"member4Name\":\"Tomás Rodríguez\",\"member4Role\":\"Desarrollador Full-Stack\",\"member4Bio\":\"Mantiene la infraestructura de benchmarking y el pipeline de CI/CD. Colaborador de código abierto de Lingui.\",\"member5Name\":\"Yuki Tanaka\",\"member5Role\":\"Analista de datos\",\"member5Bio\":\"Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.\",\"member6Name\":\"Elena Kowalski\",\"member6Role\":\"Responsable de la comunidad\",\"member6Bio\":\"Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.\"}},\"de\":{\"header\":{\"title\":\"Unser Team\",\"description\":\"Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, das durch die gemeinsame Leidenschaft für großartige Entwicklertools vereint ist.\"},\"grid\":{\"member1Name\":\"Sarah Chen\",\"member1Role\":\"Gründerin & Leitende Ingenieurin\",\"member1Bio\":\"Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.\",\"member2Name\":\"Marcus Weber\",\"member2Role\":\"Performance-Ingenieur\",\"member2Bio\":\"Spezialisiert auf JavaScript-Performance-Optimierung und Benchmarking-Methodik. Zuvor bei Vercel.\",\"member3Name\":\"Aisha Patel\",\"member3Role\":\"Developer Advocate\",\"member3Bio\":\"Begeistert von Developer Experience und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.\",\"member4Name\":\"Tomás Rodríguez\",\"member4Role\":\"Full-Stack-Entwickler\",\"member4Bio\":\"Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Contributor bei Lingui.\",\"member5Name\":\"Yuki Tanaka\",\"member5Role\":\"Datenanalyst\",\"member5Bio\":\"Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. Promotion in angewandter Statistik am MIT.\",\"member6Name\":\"Elena Kowalski\",\"member6Role\":\"Community Manager\",\"member6Bio\":\"Verwaltet Community-Beiträge, Partnerschaften und Veranstaltungen. Hintergrund in Open-Source-Governance.\"}},\"it\":{\"header\":{\"title\":\"Il nostro team\",\"description\":\"Incontra le persone che stanno dietro i18n Benchmark. Un team eterogeneo unito dalla passione comune per i grandi strumenti per gli sviluppatori.\"},\"grid\":{\"member1Name\":\"Sarah Chen\",\"member1Role\":\"Fondatrice e Responsabile tecnico\",\"member1Bio\":\"Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.\",\"member2Name\":\"Marcus Weber\",\"member2Role\":\"Ingegnere delle prestazioni\",\"member2Bio\":\"Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente presso Vercel.\",\"member3Name\":\"Aisha Patel\",\"member3Role\":\"Developer Advocate\",\"member3Bio\":\"Appassionata di esperienza degli sviluppatori e formazione. Relatrice a React Conf, JSConf e i18nNext.\",\"member4Name\":\"Tomás Rodríguez\",\"member4Role\":\"Sviluppatore Full-Stack\",\"member4Bio\":\"Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source di Lingui.\",\"member5Name\":\"Yuki Tanaka\",\"member5Role\":\"Analista dati\",\"member5Bio\":\"Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.\",\"member6Name\":\"Elena Kowalski\",\"member6Role\":\"Responsable della comunità\",\"member6Bio\":\"Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.\"}},\"pt\":{\"header\":{\"title\":\"Nossa equipe\",\"description\":\"Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor.\"},\"grid\":{\"member1Name\":\"Sarah Chen\",\"member1Role\":\"Fundadora e Engenheira Líder\",\"member1Bio\":\"Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.\",\"member2Name\":\"Marcus Weber\",\"member2Role\":\"Engenheiro de performance\",\"member2Bio\":\"Especialista em otimização de performance JavaScript e metodologia de benchmarking. Anteriormente na Vercel.\",\"member3Name\":\"Aisha Patel\",\"member3Role\":\"Developer Advocate\",\"member3Bio\":\"Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.\",\"member4Name\":\"Tomás Rodríguez\",\"member4Role\":\"Desenvolvedor Full-Stack\",\"member4Bio\":\"Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Contribuidor de código aberto do Lingui.\",\"member5Name\":\"Yuki Tanaka\",\"member5Role\":\"Analista de dados\",\"member5Bio\":\"Garante o rigor estatístico em todos os resultados de benchmark. PhD em Estatística Aplicada pelo MIT.\",\"member6Name\":\"Elena Kowalski\",\"member6Role\":\"Gerente de comunidade\",\"member6Bio\":\"Gere as contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.\"}},\"zh\":{\"header\":{\"title\":\"我们的团队\",\"description\":\"了解 i18n 基准测试背后的团队成员。一个因对优秀开发工具的共同热情而团结在一起的多元化团队。\"},\"grid\":{\"member1Name\":\"Sarah Chen\",\"member1Role\":\"创始人兼首席工程师\",\"member1Bio\":\"前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。\",\"member2Name\":\"Marcus Weber\",\"member2Role\":\"性能工程师\",\"member2Bio\":\"专注于 JavaScript 性能优化和基准测试方法论。此前就职于 Vercel。\",\"member3Name\":\"Aisha Patel\",\"member3Role\":\"开发者倡导者\",\"member3Bio\":\"对开发者体验和教育充满热情。曾在 React Conf, JSConf 和 i18nNext 发表演讲。\",\"member4Name\":\"Tomás Rodríguez\",\"member4Role\":\"全栈开发人员\",\"member4Bio\":\"维护基准测试基础设施和 CI/CD 流水线。Lingui 的开源贡献者。\",\"member5Name\":\"Yuki Tanaka\",\"member5Role\":\"数据分析师\",\"member5Bio\":\"确保所有基准测试结果 agrarian 统计严谨性。获得 MIT 应用统计学博士学位。\",\"member6Name\":\"Elena Kowalski\",\"member6Role\":\"社区经理\",\"member6Bio\":\"管理社区贡献、合作伙伴关系和活动。具有开源治理背景。\"}},\"ja\":{\"header\":{\"title\":\"私たちのチーム\",\"description\":\"i18n Benchmarkを支えるメンバーをご紹介します。優れた開発者ツールへの情熱で結ばれた多様なチームです。\"},\"grid\":{\"member1Name\":\"Sarah Chen\",\"member1Role\":\"創設者 & リードエンジニア\",\"member1Bio\":\"大規模な国際化システムの構築において10年の経験を持つ元Googleエンジニア。\",\"member2Name\":\"Marcus Weber\",\"member2Role\":\"パフォーマンスエンジニア\",\"member2Bio\":\"JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。前職はVercel。\",\"member3Name\":\"Aisha Patel\",\"member3Role\":\"Developer Advocate\",\"member3Bio\":\"開発者体験と教育に情熱を注いています。React Conf、JSConf、i18nNextのスピーカー。\",\"member4Name\":\"Tomás Rodríguez\",\"member4Role\":\"フルスタックデベロッパー\",\"member4Bio\":\"ベンチマークインフラストラクチャとCI/CDパイプラインを維持しています。Linguiのオープンソースコントリビューター。\",\"member5Name\":\"Yuki Tanaka\",\"member5Role\":\"データアナリスト\",\"member5Bio\":\"すべてのベンチマーク結果における統計的厳密さを確保します。MITの応用統計学博士。\",\"member6Name\":\"Elena Kowalski\",\"member6Role\":\"コミュニティマネージャー\",\"member6Bio\":\"コミュニティの貢献、パートナーシップ、イベントを管理しています。オープンソースガバナンスの経歴。\"}},\"ko\":{\"header\":{\"title\":\"팀\",\"description\":\"i18n Benchmark를 만드는 사람들을 소개합니다. 훌륭한 개발자 도구에 대한 열정으로 뭉친 다양한 팀입니다.\"},\"grid\":{\"member1Name\":\"Sarah Chen\",\"member1Role\":\"창립자 · 리드 엔지니어\",\"member1Bio\":\"대규모 국제화 시스템 구축 경험 10년의 전 Google 엔지니어.\",\"member2Name\":\"Marcus Weber\",\"member2Role\":\"성능 엔지니어\",\"member2Bio\":\"JavaScript 성능 최적화와 벤치마크 방법론 전문. 이전 직장 Vercel.\",\"member3Name\":\"Aisha Patel\",\"member3Role\":\"Developer Advocate\",\"member3Bio\":\"개발자 경험과 교육에 열정. React Conf, JSConf, i18nNext 연사.\",\"member4Name\":\"Tomás Rodríguez\",\"member4Role\":\"풀스택 개발자\",\"member4Bio\":\"벤치마크 인프라와 CI/CD 파이프라인을 유지합니다. Lingui 오픈소스 기여자.\",\"member5Name\":\"Yuki Tanaka\",\"member5Role\":\"데이터 분석가\",\"member5Bio\":\"모든 벤치마크 결과의 통계적 엄밀함을 담당. MIT 응용통계학 박사.\",\"member6Name\":\"Elena Kowalski\",\"member6Role\":\"커뮤니티 매니저\",\"member6Bio\":\"커뮤니티 기여, 파트너십, 이벤트를 담당. 오픈소스 거버넌스 배경.\"}},\"ru\":{\"header\":{\"title\":\"Наша команда\",\"description\":\"Познакомьтесь с людьми, создавшими i18n Benchmark. Команда единомышленников, влюбленных в отличные инструменты для разработчиков.\"},\"grid\":{\"member1Name\":\"Сара Чен\",\"member1Role\":\"Основатель и ведущий инженер\",\"member1Bio\":\"Бывший инженер Google с 10-летним опытом создания систем интернационализации в больших масштабах.\",\"member2Name\":\"Маркус Вебер\",\"member2Role\":\"Инженер по производительности\",\"member2Bio\":\"Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.\",\"member3Name\":\"Айша Патель\",\"member3Role\":\"Developer Advocate\",\"member3Bio\":\"Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext.\",\"member4Name\":\"Томас Родригес\",\"member4Role\":\"Full-Stack разработчик\",\"member4Bio\":\"Поддерживает инфраструктуру бенчмаркинга и CI/CD конвейер. Участник open source проекта Lingui.\",\"member5Name\":\"Юки Танака\",\"member5Role\":\"Аналитик данных\",\"member5Bio\":\"Обеспечивает статистическую строгость во всех результатах бенчмарков. Доктор прикладной статистики (MIT).\",\"member6Name\":\"Елена Ковальски\",\"member6Role\":\"Комьюнити-менеджер\",\"member6Bio\":\"Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении open source проектами.\"}}}}"),
		localIds: [
			"team::sync-json::./locales/{{locale}}.json::locales/en.json",
			"team::sync-json::./locales/{{locale}}.json::locales/fr.json",
			"team::sync-json::./locales/{{locale}}.json::locales/es.json",
			"team::sync-json::./locales/{{locale}}.json::locales/de.json",
			"team::sync-json::./locales/{{locale}}.json::locales/it.json",
			"team::sync-json::./locales/{{locale}}.json::locales/pt.json",
			"team::sync-json::./locales/{{locale}}.json::locales/zh.json",
			"team::sync-json::./locales/{{locale}}.json::locales/ja.json",
			"team::sync-json::./locales/{{locale}}.json::locales/ko.json",
			"team::sync-json::./locales/{{locale}}.json::locales/ru.json"
		]
	},
	"blog": {
		key: "blog",
		content: JSON.parse("{\"nodeType\":\"translation\",\"translation\":{\"en\":{\"header\":{\"title\":\"Blog\",\"description\":\"Insights, tutorials, and analysis from the i18n community.\"},\"list\":{\"readMore\":\"Read More →\",\"post1Title\":\"Comparing i18n Libraries in 2026: A Deep Dive\",\"post1Date\":\"March 15, 2026\",\"post1Excerpt\":\"We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.\",\"post1Category\":\"Benchmark\",\"post2Title\":\"How to Reduce Your i18n Bundle by 60%\",\"post2Date\":\"March 8, 2026\",\"post2Excerpt\":\"Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.\",\"post2Category\":\"Tutorial\",\"post3Title\":\"The State of Internationalization in React\",\"post3Date\":\"February 28, 2026\",\"post3Excerpt\":\"An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.\",\"post3Category\":\"Analysis\",\"post4Title\":\"Migrating from react-i18next to Lingui\",\"post4Date\":\"February 15, 2026\",\"post4Excerpt\":\"A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.\",\"post4Category\":\"Tutorial\",\"post5Title\":\"Server Components and i18n: What Changes?\",\"post5Date\":\"February 1, 2026\",\"post5Excerpt\":\"React Server Components introduce new patterns for internationalization. We explore the implications and best practices.\",\"post5Category\":\"Analysis\",\"post6Title\":\"Benchmark Methodology: How We Test\",\"post6Date\":\"January 20, 2026\",\"post6Excerpt\":\"A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.\",\"post6Category\":\"Meta\"}},\"fr\":{\"header\":{\"title\":\"Blog\",\"description\":\"Articles, tutoriels et analyses de la communauté i18n.\"},\"list\":{\"readMore\":\"Lire la suite →\",\"post1Title\":\"Comparer les bibliothèques i18n en 2026 : plongée détaillée\",\"post1Date\":\"15 mars 2026\",\"post1Excerpt\":\"Nous avons testé 12 bibliothèques sur la perf, la taille du bundle et l'expérience développeur. Voici les résultats surprenants.\",\"post1Category\":\"Benchmark\",\"post2Title\":\"Réduire votre bundle i18n de 60 %\",\"post2Date\":\"8 mars 2026\",\"post2Excerpt\":\"Stratégies concrètes : chargement paresseux, découpage et optimisations à la compilation.\",\"post2Category\":\"Tutoriel\",\"post3Title\":\"État de l'internationalisation dans l'écosystème React\",\"post3Date\":\"28 février 2026\",\"post3Excerpt\":\"Panorama des tendances, patterns émergents et préférences de la communauté.\",\"post3Category\":\"Analyse\",\"post4Title\":\"Migrer de react-i18next vers Lingui\",\"post4Date\":\"15 février 2026\",\"post4Excerpt\":\"Guide pas à pas pour migrer une app en production avec 50 000 clés de traduction.\",\"post4Category\":\"Tutoriel\",\"post5Title\":\"Server Components et i18n : qu'est-ce qui change ?\",\"post5Date\":\"1er février 2026\",\"post5Excerpt\":\"Les React Server Components introduisent de nouveaux motifs pour l'i18n.\",\"post5Category\":\"Analyse\",\"post6Title\":\"Méthodologie de benchmark : comment nous testons\",\"post6Date\":\"20 janvier 2026\",\"post6Excerpt\":\"Transparence sur l'environnement de test, les méthodes statistiques et la reproductibilité.\",\"post6Category\":\"Méta\"}},\"es\":{\"header\":{\"title\":\"Blog\",\"description\":\"Información, tutoriales y análisis de la comunidad i18n.\"},\"list\":{\"readMore\":\"Leer más →\",\"post1Title\":\"Comparativa de bibliotecas i18n en 2026: Un análisis profundo\",\"post1Date\":\"15 de marzo de 2026\",\"post1Excerpt\":\"Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del bundle y DX. Aquí están los sorprendentes resultados.\",\"post1Category\":\"Benchmark\",\"post2Title\":\"Cómo reducir tu bundle i18n en un 60%\",\"post2Date\":\"8 de marzo de 2026\",\"post2Excerpt\":\"Estrategias prácticas para optimizar los bundles de traducción, incluyendo carga diferida, división de código y optimizaciones en tiempo de compilación.\",\"post2Category\":\"Tutorial\",\"post3Title\":\"El estado de la internacionalización en React\",\"post3Date\":\"28 de febrero de 2026\",\"post3Excerpt\":\"Una visión general del ecosistema i18n actual en React, cubriendo tendencias, patrones emergentes y preferencias de la comunidad.\",\"post3Category\":\"Análisis\",\"post4Title\":\"Migración de react-i18next a Lingui\",\"post4Date\":\"15 de febrero de 2026\",\"post4Excerpt\":\"Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.\",\"post4Category\":\"Tutorial\",\"post5Title\":\"Server Components e i18n: ¿Qué cambia?\",\"post5Date\":\"1 de febrero de 2026\",\"post5Excerpt\":\"Los React Server Components introducen nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.\",\"post5Category\":\"Análisis\",\"post6Title\":\"Metodología de benchmark: Cómo probamos\",\"post6Date\":\"20 de enero de 2026\",\"post6Excerpt\":\"Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.\",\"post6Category\":\"Meta\"}},\"de\":{\"header\":{\"title\":\"Blog\",\"description\":\"Einblicke, Tutorials und Analysen aus der i18n-Community.\"},\"list\":{\"readMore\":\"Mehr lesen →\",\"post1Title\":\"Vergleich von i18n-Bibliotheken im Jahr 2026: Ein tiefer Einblick\",\"post1Date\":\"15. März 2026\",\"post1Excerpt\":\"Wir haben 12 verschiedene Internationalisierungsbibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.\",\"post1Category\":\"Benchmark\",\"post2Title\":\"Wie Sie Ihr i18n-Bundle um 60 % reduzieren\",\"post2Date\":\"8. März 2026\",\"post2Excerpt\":\"Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code Splitting und Optimierungen zur Build-Zeit.\",\"post2Category\":\"Tutorial\",\"post3Title\":\"Der Stand der Internationalisierung in React\",\"post3Date\":\"28. Februar 2026\",\"post3Excerpt\":\"Ein Überblick über das aktuelle i18n-Ökosystem in React, der Trends, aufkommende Muster und Community-Präferenzen abdeckt.\",\"post3Category\":\"Analyse\",\"post4Title\":\"Migration von react-i18next zu Lingui\",\"post4Date\":\"15. Februar 2026\",\"post4Excerpt\":\"Eine Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.\",\"post4Category\":\"Tutorial\",\"post5Title\":\"Server Components und i18n: Was ändert sich?\",\"post5Date\":\"1. Februar 2026\",\"post5Excerpt\":\"React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.\",\"post5Category\":\"Analyse\",\"post6Title\":\"Benchmark-Methodik: Wie wir testen\",\"post6Date\":\"20. Januar 2026\",\"post6Excerpt\":\"Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.\",\"post6Category\":\"Meta\"}},\"it\":{\"header\":{\"title\":\"Blog\",\"description\":\"Approfondimenti, tutorial e analisi dalla comunità i18n.\"},\"list\":{\"readMore\":\"Leggi di più →\",\"post1Title\":\"Confronto delle librerie i18n nel 2026: un'analisi approfondita\",\"post1Date\":\"15 marzo 2026\",\"post1Excerpt\":\"Abbiamo testato 12 diverse librerie di internazionalizzazione in termini di prestazioni, dimensioni del bundle e DX. Ecco i risultati sorprendenti.\",\"post1Category\":\"Benchmark\",\"post2Title\":\"Come ridurre il bundle i18n del 60%\",\"post2Date\":\"8 marzo 2026\",\"post2Excerpt\":\"Strategie pratiche per ottimizzare i bundle di traduzione, inclusi caricamento pigro, code splitting e ottimizzazioni al momento della compilazione.\",\"post2Category\":\"Tutorial\",\"post3Title\":\"Lo stato dell'internazionalizzazione in React\",\"post3Date\":\"28 febbraio 2026\",\"post3Excerpt\":\"Una panoramica dell'attuale ecosistema i18n in React, che copre tendenze, modelli emergenti e preferenze della comunità.\",\"post3Category\":\"Analisi\",\"post4Title\":\"Migrazione da react-i18next a Lingui\",\"post4Date\":\"15 febbraio 2026\",\"post4Excerpt\":\"Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.\",\"post4Category\":\"Tutorial\",\"post5Title\":\"Server Components e i18n: cosa cambia?\",\"post5Date\":\"1 febbraio 2026\",\"post5Excerpt\":\"I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.\",\"post5Category\":\"Analisi\",\"post6Title\":\"Metodologia del benchmark: come testiamo\",\"post6Date\":\"20 gennaio 2026\",\"post6Excerpt\":\"Uno sguardo trasparente alla nostra metodologia di benchmarking, compresi gli ambienti di test, i metodi statistici e la riproducibilità.\",\"post6Category\":\"Meta\"}},\"pt\":{\"header\":{\"title\":\"Blog\",\"description\":\"Insights, tutoriais e análises da comunidade i18n.\"},\"list\":{\"readMore\":\"Ler Mais →\",\"post1Title\":\"Comparando bibliotecas i18n em 2026: um mergulho profundo\",\"post1Date\":\"15 de março de 2026\",\"post1Excerpt\":\"Testamos 12 bibliotecas de internacionalização diferentes em termos de desempenho, tamanho de bundle e DX. Aqui estão os resultados surpreendentes.\",\"post1Category\":\"Benchmark\",\"post2Title\":\"Como reduzir seu bundle i18n em 60%\",\"post2Date\":\"8 de março de 2026\",\"post2Excerpt\":\"Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lento, divisão de código e otimizações em tempo de build.\",\"post2Category\":\"Tutorial\",\"post3Title\":\"O estado da internacionalização no React\",\"post3Date\":\"28 de fevereiro de 2026\",\"post3Excerpt\":\"Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.\",\"post3Category\":\"Análise\",\"post4Title\":\"Migrando de react-i18next para o Lingui\",\"post4Date\":\"15 de fevereiro de 2026\",\"post4Excerpt\":\"Um guia passo a passo sobre a migração de um app de produção com 50.000 chaves de tradução do react-i18next para o Lingui.\",\"post4Category\":\"Tutorial\",\"post5Title\":\"Server Components e i18n: o que muda?\",\"post5Date\":\"1 de fevereiro de 2026\",\"post5Excerpt\":\"React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e melhores práticas.\",\"post5Category\":\"Análise\",\"post6Title\":\"Metodologia de benchmark: como testamos\",\"post6Date\":\"20 de janeiro de 2026\",\"post6Excerpt\":\"Uma visão transparente da nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.\",\"post6Category\":\"Meta\"}},\"zh\":{\"header\":{\"title\":\"博客\",\"description\":\"来自 i18n 社区的见解、教程和分析。\"},\"list\":{\"readMore\":\"阅读更多 →\",\"post1Title\":\"2026 年 i18n 库对比：深度分析\",\"post1Date\":\"2026年3月15日\",\"post1Excerpt\":\"我们在性能、包大小和 DX 方面测试了 12 种不同的国际化库。以下是令人惊讶的结果。\",\"post1Category\":\"基准测试\",\"post2Title\":\"如何将 i18n 包大小减少 60%\",\"post2Date\":\"2026年3月8日\",\"post2Excerpt\":\"优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。\",\"post2Category\":\"教程\",\"post3Title\":\"React 国际化现状\",\"post3Date\":\"2026年2月28日\",\"post3Excerpt\":\"React 中当前 i18n 生态系统的概述，涵盖趋势、新兴模式和社区偏好。\",\"post3Category\":\"分析\",\"post4Title\":\"从 react-i18next 迁移到 Lingui\",\"post4Date\":\"2026年2月15日\",\"post4Excerpt\":\"关于将具有 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。\",\"post4Category\":\"教程\",\"post5Title\":\"Server Components 与 i18n：发生了什么变化？\",\"post5Date\":\"2026年2月1日\",\"post5Excerpt\":\"React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。\",\"post5Category\":\"分析\",\"post6Title\":\"基准测试方法论：我们如何测试\",\"post6Date\":\"2026年1月20日\",\"post6Excerpt\":\"透明地展示我们的基准测试方法，包括测试环境、统计方法和可复现性。\",\"post6Category\":\"Meta\"}},\"ja\":{\"header\":{\"title\":\"ブログ\",\"description\":\"i18nコミュニティからのインサイト、チュートリアル、分析。\"},\"list\":{\"readMore\":\"続きを読む →\",\"post1Title\":\"2026年のi18nライブラリ比較：ディープダイブ\",\"post1Date\":\"2026年3月15日\",\"post1Excerpt\":\"パフォーマンス、バンドルサイズ、DXにわたって12の異なる国際化ライブラリをテストしました。驚くべき結果がここにあります。\",\"post1Category\":\"ベンチマーク\",\"post2Title\":\"i18nバンドルを60%削減する方法\",\"post2Date\":\"2026年3月8日\",\"post2Excerpt\":\"遅延読み込み、コード分割、ビルド時の最適化を含む、翻訳バンドルを最適化するための実践的な戦略。\",\"post2Category\":\"チュートリアル\",\"post3Title\":\"Reactにおける国際化の現状\",\"post3Date\":\"2026年2月28日\",\"post3Excerpt\":\"トレンド、新興パターン、コミュニティの好みをカバーする、Reactにおける現在のi18nエコシステムの概要。\",\"post3Category\":\"分析\",\"post4Title\":\"react-i18nextからLinguiへの移行\",\"post4Date\":\"2026年2月15日\",\"post4Excerpt\":\"50,000の翻訳キーを持つ本番アプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。\",\"post4Category\":\"チュートリアル\",\"post5Title\":\"Server Componentsとi18n：何が変わるのか？\",\"post5Date\":\"2026年2月1日\",\"post5Excerpt\":\"React Server Componentsは、国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。\",\"post5Category\":\"分析\",\"post6Title\":\"ベンチマーク手法：テスト方法について\",\"post6Date\":\"2026年1月20日\",\"post6Excerpt\":\"テスト環境、統計手法、再現性など、私たちのベンチマーク手法を透明性を持って公開します。\",\"post6Category\":\"メタ\"}},\"ko\":{\"header\":{\"title\":\"블로그\",\"description\":\"i18n 커뮤니티의 인사이트, 튜토리얼, 분석.\"},\"list\":{\"readMore\":\"더 읽기 →\",\"post1Title\":\"2026년 i18n 라이브러리 비교: 심층 분석\",\"post1Date\":\"2026년 3월 15일\",\"post1Excerpt\":\"성능, 번들 크기, DX를 놓고 12개 국제화 라이브러리를 테스트했습니다. 놀라운 결과를 소개합니다.\",\"post1Category\":\"벤치마크\",\"post2Title\":\"i18n 번들을 60% 줄이는 방법\",\"post2Date\":\"2026년 3월 8일\",\"post2Excerpt\":\"지연 로딩, 코드 분할, 컴파일 타임 최적화를 포함한 번역 번들 최적화 실전 전략.\",\"post2Category\":\"튜토리얼\",\"post3Title\":\"React에서 국제화의 현주소\",\"post3Date\":\"2026년 2월 28일\",\"post3Excerpt\":\"트렌드, 신흥 패턴, 커뮤니티 선호를 다루는 React i18n 생태계 개요.\",\"post3Category\":\"분석\",\"post4Title\":\"react-i18next에서 Lingui로 마이그레이션\",\"post4Date\":\"2026년 2월 15일\",\"post4Excerpt\":\"5만 개의 번역 키를 가진 프로덕션 앱을 react-i18next에서 Lingui로 옮기는 단계별 가이드.\",\"post4Category\":\"튜토리얼\",\"post5Title\":\"Server Components와 i18n: 무엇이 달라지나\",\"post5Date\":\"2026년 2월 1일\",\"post5Excerpt\":\"React Server Components가 국제화에 가져오는 새 패턴과 그 함의, 모범 사례를 살펴봅니다.\",\"post5Category\":\"분석\",\"post6Title\":\"벤치마크 방법론: 테스트 방식\",\"post6Date\":\"2026년 1월 20일\",\"post6Excerpt\":\"테스트 환경, 통계 방법, 재현성을 포함한 벤치마크 방법을 투명하게 공개합니다.\",\"post6Category\":\"메타\"}},\"ru\":{\"header\":{\"title\":\"Блог\",\"description\":\"Инсайты, туториалы и аналитика от сообщества i18n.\"},\"list\":{\"readMore\":\"Читать далее →\",\"post1Title\":\"Сравнение библиотек i18n в 2026 году: глубокое погружение\",\"post1Date\":\"15 марта 2026 г.\",\"post1Excerpt\":\"Мы протестировали 12 различных библиотек интернационализации по производительности, размеру бандла и DX. Вот удивительные результаты.\",\"post1Category\":\"Бенчмарк\",\"post2Title\":\"Как уменьшить бандл i18n на 60%\",\"post2Date\":\"8 марта 2026 г.\",\"post2Excerpt\":\"Практические стратегии оптимизации бандлов переводов, включая ленивую загрузку, разделение кода и оптимизацию во время сборки.\",\"post2Category\":\"Туториал\",\"post3Title\":\"Состояние интернационализации в React\",\"post3Date\":\"28 февраля 2026 г.\",\"post3Excerpt\":\"Обзор текущей экосистемы i18n в React, охватывающий тенденции, новые паттерны и предпочтения сообщества.\",\"post3Category\":\"Анализ\",\"post4Title\":\"Миграция с react-i18next на Lingui\",\"post4Date\":\"15 февраля 2026 г.\",\"post4Excerpt\":\"Пошаговое руководство по миграции продакшн-приложения с 50 000 ключей перевода с react-i18next на Lingui.\",\"post4Category\":\"Туториал\",\"post5Title\":\"Server Components и i18n: что меняется?\",\"post5Date\":\"1 февраля 2026 г.\",\"post5Excerpt\":\"React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.\",\"post5Category\":\"Анализ\",\"post6Title\":\"Методология бенчмарка: как мы тестируем\",\"post6Date\":\"20 января 2026 г.\",\"post6Excerpt\":\"Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.\",\"post6Category\":\"Мета\"}}}}"),
		localIds: [
			"blog::sync-json::./locales/{{locale}}.json::locales/en.json",
			"blog::sync-json::./locales/{{locale}}.json::locales/fr.json",
			"blog::sync-json::./locales/{{locale}}.json::locales/es.json",
			"blog::sync-json::./locales/{{locale}}.json::locales/de.json",
			"blog::sync-json::./locales/{{locale}}.json::locales/it.json",
			"blog::sync-json::./locales/{{locale}}.json::locales/pt.json",
			"blog::sync-json::./locales/{{locale}}.json::locales/zh.json",
			"blog::sync-json::./locales/{{locale}}.json::locales/ja.json",
			"blog::sync-json::./locales/{{locale}}.json::locales/ko.json",
			"blog::sync-json::./locales/{{locale}}.json::locales/ru.json"
		]
	}
};
var getDictionaries = () => dictionaries;
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
process.env.INTLAYER_OPTIMIZED_NESTING;
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
var _hoisted_1 = { class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" };
var _hoisted_2 = { class: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground" };
var _hoisted_3 = { class: "text-base font-semibold text-foreground" };
var _hoisted_4 = { class: "mb-2 text-xs font-medium text-primary" };
var _hoisted_5 = { class: "text-sm text-muted-foreground" };
var TeamGrid_default = defineComponent({
	__name: "TeamGrid",
	setup(__props) {
		const { t } = useI18n();
		const memberIndices = [
			1,
			2,
			3,
			4,
			5,
			6
		];
		const getInitials = (name) => name.split(" ").map((n) => n[0]).join("");
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createElementBlock(Fragment, null, renderList(memberIndices, (i) => {
				return createElementVNode("div", {
					key: i,
					class: "rounded-lg border border-border bg-card p-6 text-center"
				}, [
					createElementVNode("div", _hoisted_2, toDisplayString(getInitials(unref(t)(`team.grid.member${i}Name`))), 1),
					createElementVNode("h3", _hoisted_3, toDisplayString(unref(t)(`team.grid.member${i}Name`)), 1),
					createElementVNode("p", _hoisted_4, toDisplayString(unref(t)(`team.grid.member${i}Role`)), 1),
					createElementVNode("p", _hoisted_5, toDisplayString(unref(t)(`team.grid.member${i}Bio`)), 1)
				]);
			}), 64))]);
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
var TeamGrid_wrapper_default = { render() {
	return h(Wrapper_default, {}, { default: () => h(TeamGrid_default) });
} };
export { TeamGrid_wrapper_default as default };
