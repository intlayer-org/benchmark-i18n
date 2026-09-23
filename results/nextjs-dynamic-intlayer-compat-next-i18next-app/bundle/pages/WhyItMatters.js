import * as React from "react";
import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { useParams } from "next/navigation";
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
var MAGENTA = "\x1B[35m";
var BEIGE = "\x1B[38;5;3m";
var CYAN = "\x1B[36m";
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
var rtlScripts = [
	"Arab",
	"Hebr",
	"Thaa",
	"Syrc",
	"Mand",
	"Adlm",
	"Rohg",
	"Nkoo"
];
var getHTMLTextDir = (locale) => {
	if (!locale) return "ltr";
	try {
		const localeInfo = new Intl.Locale(locale);
		if ("getTextInfo" in localeInfo) return localeInfo.getTextInfo().direction;
		if ("textInfo" in localeInfo) return localeInfo.textInfo.direction;
		const maximized = localeInfo.maximize();
		return rtlScripts.includes(maximized.script ?? "") ? "rtl" : "ltr";
	} catch {
		return "ltr";
	}
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
var TRANSLATION = "translation";
var ENUMERATION = "enumeration";
var PLURAL = "plural";
var INSERTION = "insertion";
var OBJECT = "object";
var ARRAY = "array";
var HTML = "html";
var GENDER = "gender";
var SELECT = "select";
var formatNodeType = (nodeType, content, additionalAttributes) => ({
	...additionalAttributes,
	nodeType,
	[nodeType]: content
});
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
var enumeration = (content) => formatNodeType(ENUMERATION, content);
var gender = (content) => formatNodeType(GENDER, content);
var parseAttributes = (attributesString) => {
	const attributes = {};
	if (!attributesString?.trim()) return attributes;
	[...attributesString.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((match) => {
		const attrName = match[1];
		attributes[attrName] = "string";
	});
	return attributes;
};
var getHTMLCustomComponents = (content) => {
	if (typeof content !== "string") throw new Error("content must be a string");
	const matches = [...content.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)];
	const components = {};
	matches.forEach((match) => {
		const isClosing = !!match[1];
		const tagName = match[2];
		const attributesString = match[3];
		const isSelfClosing = !!match[4];
		if (/^[a-z][a-z0-9]*$/.test(tagName)) {
			components[tagName] = true;
			return;
		}
		if (!components[tagName]) components[tagName] = {};
		if (components[tagName] === true) return;
		if (isClosing) return;
		const attributes = parseAttributes(attributesString);
		const componentDef = components[tagName];
		Object.assign(componentDef, attributes);
		if (!isSelfClosing) componentDef.children = "string";
	});
	return components;
};
var VOID_HTML_ELEMENTS = /* @__PURE__ */ new Set([
	"area",
	"base",
	"br",
	"col",
	"embed",
	"hr",
	"img",
	"input",
	"link",
	"meta",
	"source",
	"track",
	"wbr"
]);
var TAG_REGEX = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g;
var validateHTML = (content) => {
	const issues = [];
	const stack = [];
	for (const match of content.matchAll(TAG_REGEX)) {
		const isClosing = !!match[1];
		const tagName = match[2];
		const attrs = match[3];
		const isSelfClosing = !!match[4];
		if (attrs.trimStart().startsWith("://") || attrs.trimStart().startsWith(":")) continue;
		if (isClosing) {
			if (stack.length === 0) issues.push({
				type: "error",
				message: `Closing tag </${tagName}> has no matching opening tag`
			});
			else {
				const last = stack[stack.length - 1];
				if (last.tag.toLowerCase() !== tagName.toLowerCase()) issues.push({
					type: "error",
					message: `Mismatched closing tag: expected </${last.tag}> but found </${tagName}>`
				});
				stack.pop();
			}
		} else {
			const isVoidElement = VOID_HTML_ELEMENTS.has(tagName.toLowerCase());
			if (!isSelfClosing && !isVoidElement) stack.push({ tag: tagName });
		}
	}
	for (const unclosed of stack) issues.push({
		type: "error",
		message: `Unclosed HTML tag: <${unclosed.tag}>`
	});
	return {
		valid: issues.filter((i) => i.type === "error").length === 0,
		issues
	};
};
var html = (content, components) => {
	const getComponents = () => {
		if (components) return components;
		if (typeof content === "string") {
			const { issues } = validateHTML(content);
			for (const issue of issues) if (issue.type === "error") console.error(`[intlayer/html] ${issue.message}`);
			else console.warn(`[intlayer/html] ${issue.message}`);
			return getHTMLCustomComponents(content);
		}
		let stringContent;
		if (typeof content === "function") stringContent = content();
		else if (typeof content.then === "function") stringContent = async () => getHTMLCustomComponents(await content);
		if (typeof stringContent === "string") return getHTMLCustomComponents(stringContent);
		try {
			return getHTMLCustomComponents(JSON.stringify(content));
		} catch (_e) {
			return [];
		}
	};
	return formatNodeType(HTML, content, { tags: getComponents() });
};
var getInsertionValues = (content) => {
	const matches = [...content.matchAll(/{{\s*(.*?)\s*}}/g)];
	if (matches.length === 0) return [];
	return [...new Set(matches.map((match) => match[1].trim()))].filter(Boolean);
};
var insertion = (content) => {
	const getInsertions = () => {
		if (typeof content === "string") return getInsertionValues(content);
		let stringContent;
		if (typeof content === "function") stringContent = content();
		else if (typeof content.then === "function") stringContent = async () => getInsertionValues(await content);
		if (typeof stringContent === "string") return getInsertionValues(stringContent);
		try {
			return getInsertionValues(JSON.stringify(content));
		} catch (_e) {
			return [];
		}
	};
	return formatNodeType(INSERTION, content, { fields: getInsertions() });
};
var plural = (content) => formatNodeType(PLURAL, content);
var select = (content, variable) => formatNodeType(SELECT, content, { variable });
var parseICU = (text) => {
	let index = 0;
	const parseNodes = () => {
		const nodes = [];
		let currentText = "";
		while (index < text.length) {
			const char = text[index];
			if (char === "{") {
				if (currentText) {
					nodes.push(currentText);
					currentText = "";
				}
				index++;
				nodes.push(parseArgument());
			} else if (char === "}") break;
			else if (char === "'") {
				if (index + 1 < text.length && text[index + 1] === "'") {
					currentText += "'";
					index += 2;
				} else {
					const nextQuote = text.indexOf("'", index + 1);
					if (nextQuote !== -1) {
						currentText += text.substring(index + 1, nextQuote);
						index = nextQuote + 1;
					} else {
						currentText += "'";
						index++;
					}
				}
			} else {
				currentText += char;
				index++;
			}
		}
		if (currentText) nodes.push(currentText);
		return nodes;
	};
	const parseArgument = () => {
		let name = "";
		while (index < text.length && /[^,}]/.test(text[index])) {
			name += text[index];
			index++;
		}
		name = name.trim();
		if (index >= text.length) throw new Error("Unclosed argument");
		if (text[index] === "}") {
			index++;
			return {
				type: "argument",
				name
			};
		}
		if (text[index] === ",") {
			index++;
			let type = "";
			while (index < text.length && /[^,}]/.test(text[index])) {
				type += text[index];
				index++;
			}
			type = type.trim();
			if (index >= text.length) throw new Error("Unclosed argument");
			if (text[index] === "}") {
				index++;
				return {
					type: "argument",
					name,
					format: { type }
				};
			}
			if (text[index] === ",") {
				index++;
				if (type === "plural" || type === "select" || type === "selectordinal") {
					const options = {};
					while (index < text.length && text[index] !== "}") {
						while (index < text.length && /\s/.test(text[index])) index++;
						let key = "";
						while (index < text.length && /[^{\s]/.test(text[index])) {
							key += text[index];
							index++;
						}
						while (index < text.length && /\s/.test(text[index])) index++;
						if (text[index] !== "{") throw new Error("Expected { after option key");
						index++;
						const value = parseNodes();
						if (text[index] !== "}") throw new Error("Expected } after option value");
						index++;
						options[key] = value;
						while (index < text.length && /\s/.test(text[index])) index++;
					}
					index++;
					if (type === "plural") return {
						type: "plural",
						name,
						options
					};
					else if (type === "select") return {
						type: "select",
						name,
						options
					};
					else if (type === "selectordinal") return {
						type: "selectordinal",
						name,
						options
					};
				} else {
					let style = "";
					while (index < text.length && text[index] !== "}") {
						style += text[index];
						index++;
					}
					if (index >= text.length) throw new Error("Unclosed argument");
					style = style.trim();
					index++;
					return {
						type: "argument",
						name,
						format: {
							type,
							style
						}
					};
				}
			}
		}
		throw new Error("Malformed argument");
	};
	return parseNodes();
};
var icuNodesToIntlayer = (nodes) => {
	if (nodes.length === 0) return "";
	if (nodes.length === 1 && typeof nodes[0] === "string") {
		const node = nodes[0];
		if (/<[a-zA-Z0-9-]+[^>]*>/.test(node)) return html(node);
		return node;
	}
	if (nodes.every((node) => typeof node === "string" || node.type === "argument")) {
		let str = "";
		for (const node of nodes) if (typeof node === "string") str += node;
		else if (typeof node !== "string" && node.type === "argument") {
			if (node.format) str += `{${node.name}, ${node.format.type}${node.format.style ? `, ${node.format.style}` : ""}}`;
			else str += `{{${node.name}}}`;
		}
		if (/<[a-zA-Z0-9-]+[^>]*>/.test(str)) return html(str);
		return insertion(str);
	}
	if (nodes.length === 1) {
		const node = nodes[0];
		if (typeof node === "string") {
			if (/<[a-zA-Z0-9-]+[^>]*>/.test(node)) return html(node);
			return node;
		}
		if (node.type === "argument") {
			if (node.format) return insertion(`{${node.name}, ${node.format.type}${node.format.style ? `, ${node.format.style}` : ""}}`);
			return insertion(`{{${node.name}}}`);
		}
		if (node.type === "plural") {
			const options = {};
			let hasExactMatch = false;
			for (const key of Object.keys(node.options)) if (key.startsWith("=")) {
				hasExactMatch = true;
				break;
			}
			if (hasExactMatch) {
				for (const [key, val] of Object.entries(node.options)) {
					let newKey = key;
					if (key.startsWith("=")) newKey = key.substring(1);
					else if (key === "one") newKey = "1";
					else if (key === "two") newKey = "2";
					else if (key === "few") newKey = "<=3";
					else if (key === "many") newKey = ">=4";
					else if (key === "other") newKey = "fallback";
					const replacedVal = val.map((v) => {
						if (typeof v === "string") return v.replace(/#/g, `{{${node.name}}}`);
						return v;
					});
					options[newKey] = icuNodesToIntlayer(replacedVal);
				}
				options.__intlayer_icu_var = node.name;
				return enumeration(options);
			} else {
				for (const [key, val] of Object.entries(node.options)) options[key] = icuNodesToIntlayer(val.map((v) => {
					if (typeof v === "string") return v.replace(/#/g, `{{${node.name}}}`);
					return v;
				}));
				return plural(options);
			}
		}
		if (node.type === "select") {
			const options = {};
			for (const [key, val] of Object.entries(node.options)) options[key === "other" ? "fallback" : key] = icuNodesToIntlayer(val);
			const optionKeys = Object.keys(options);
			if ((options.male || options.female) && optionKeys.every((k) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(k))) return gender({
				fallback: options.fallback,
				male: options.male,
				female: options.female
			});
			return select(options, node.name);
		}
		if (node.type === "selectordinal") {
			const options = {};
			for (const [key, val] of Object.entries(node.options)) {
				const newKey = key.startsWith("=") ? key.substring(1) : key === "other" ? "fallback" : key;
				options[newKey] = icuNodesToIntlayer(val.map((value) => {
					if (typeof value === "string") return value.replace(/#/g, `{{${node.name}}}`);
					return value;
				}));
			}
			options.__intlayer_icu_var = node.name;
			options.__intlayer_icu_ordinal = true;
			return enumeration(options);
		}
	}
	return nodes.map((node) => icuNodesToIntlayer([node]));
};
var icuToIntlayerPlugin = {
	canHandle: (node) => typeof node === "string" && (node.includes("{") || node.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(node)),
	transform: (node) => {
		try {
			return icuNodesToIntlayer(parseICU(node));
		} catch {
			return node;
		}
	}
};
var icuToIntlayerFormatter = (message) => {
	return deepTransformNode(message, {
		dictionaryKey: "icu",
		keyPath: [],
		plugins: [{
			id: "icu",
			...icuToIntlayerPlugin
		}]
	});
};
var parseI18Next = (text) => {
	let index = 0;
	const parseNodes = () => {
		const nodes = [];
		let currentText = "";
		while (index < text.length) {
			const char = text[index];
			if (char === "{" && text[index + 1] === "{") {
				if (currentText) {
					nodes.push(currentText);
					currentText = "";
				}
				index += 2;
				nodes.push(parseStandardArgument());
			} else if (char === "{") {
				if (currentText) {
					nodes.push(currentText);
					currentText = "";
				}
				index++;
				nodes.push(parseICUArgument());
			} else if (char === "}") break;
			else {
				currentText += char;
				index++;
			}
		}
		if (currentText) nodes.push(currentText);
		return nodes;
	};
	const parseStandardArgument = () => {
		let name = "";
		while (index < text.length) {
			if (text[index] === "}" && text[index + 1] === "}") {
				index += 2;
				return {
					type: "argument",
					name: name.trim()
				};
			}
			name += text[index];
			index++;
		}
		throw new Error("Unclosed i18next variable");
	};
	const parseICUArgument = () => {
		let name = "";
		while (index < text.length && /[^,}]/.test(text[index])) {
			name += text[index];
			index++;
		}
		name = name.trim();
		if (index >= text.length) throw new Error("Unclosed argument");
		if (text[index] === "}") {
			index++;
			return {
				type: "argument",
				name
			};
		}
		if (text[index] === ",") {
			index++;
			let type = "";
			while (index < text.length && /[^,}]/.test(text[index])) {
				type += text[index];
				index++;
			}
			type = type.trim();
			if (index >= text.length) throw new Error("Unclosed argument");
			if (text[index] === "}") {
				index++;
				return {
					type: "argument",
					name,
					format: { type }
				};
			}
			if (text[index] === ",") {
				index++;
				if (type === "plural" || type === "select") {
					const options = {};
					while (index < text.length && text[index] !== "}") {
						while (index < text.length && /\s/.test(text[index])) index++;
						let key = "";
						while (index < text.length && /[^{\s]/.test(text[index])) {
							key += text[index];
							index++;
						}
						while (index < text.length && /\s/.test(text[index])) index++;
						if (text[index] !== "{") throw new Error("Expected { after option key");
						index++;
						const value = parseNodes();
						if (text[index] !== "}") throw new Error("Expected } after option value");
						index++;
						options[key] = value;
						while (index < text.length && /\s/.test(text[index])) index++;
					}
					index++;
					if (type === "plural") return {
						type: "plural",
						name,
						options
					};
					else if (type === "select") return {
						type: "select",
						name,
						options
					};
				} else {
					let style = "";
					while (index < text.length && text[index] !== "}") {
						style += text[index];
						index++;
					}
					if (index >= text.length) throw new Error("Unclosed argument");
					style = style.trim();
					index++;
					return {
						type: "argument",
						name,
						format: {
							type,
							style
						}
					};
				}
			}
		}
		throw new Error("Malformed argument");
	};
	return parseNodes();
};
var i18nextNodesToIntlayer = (nodes) => {
	if (nodes.length === 0) return "";
	if (nodes.length === 1 && typeof nodes[0] === "string") {
		const node = nodes[0];
		if (/<[a-zA-Z0-9-]+[^>]*>/.test(node)) return html(node);
		return node;
	}
	if (nodes.every((node) => typeof node === "string" || node.type === "argument")) {
		let str = "";
		for (const node of nodes) if (typeof node === "string") str += node;
		else if (typeof node !== "string" && node.type === "argument") {
			if (node.format) str += `{${node.name}, ${node.format.type}${node.format.style ? `, ${node.format.style}` : ""}}`;
			else str += `{{${node.name}}}`;
		}
		if (/<[a-zA-Z0-9-]+[^>]*>/.test(str)) return html(str);
		return insertion(str);
	}
	if (nodes.length === 1) {
		const node = nodes[0];
		if (typeof node === "string") {
			if (/<[a-zA-Z0-9-]+[^>]*>/.test(node)) return html(node);
			return node;
		}
		if (node.type === "argument") {
			if (node.format) return insertion(`{${node.name}, ${node.format.type}${node.format.style ? `, ${node.format.style}` : ""}}`);
			return insertion(`{{${node.name}}}`);
		}
		if (node.type === "plural") {
			const options = {};
			let hasExactMatch = false;
			for (const key of Object.keys(node.options)) if (key.startsWith("=")) {
				hasExactMatch = true;
				break;
			}
			if (hasExactMatch) {
				for (const [key, val] of Object.entries(node.options)) {
					let newKey = key;
					if (key.startsWith("=")) newKey = key.substring(1);
					else if (key === "one") newKey = "1";
					else if (key === "two") newKey = "2";
					else if (key === "few") newKey = "<=3";
					else if (key === "many") newKey = ">=4";
					else if (key === "other") newKey = "fallback";
					const replacedVal = val.map((v) => {
						if (typeof v === "string") return v.replace(/#/g, `{{${node.name}}}`);
						return v;
					});
					options[newKey] = i18nextNodesToIntlayer(replacedVal);
				}
				options.__intlayer_icu_var = node.name;
				return enumeration(options);
			} else {
				for (const [key, val] of Object.entries(node.options)) options[key] = i18nextNodesToIntlayer(val.map((v) => {
					if (typeof v === "string") return v.replace(/#/g, `{{${node.name}}}`);
					return v;
				}));
				return plural(options);
			}
		}
		if (node.type === "select") {
			const options = {};
			for (const [key, val] of Object.entries(node.options)) options[key === "other" ? "fallback" : key] = i18nextNodesToIntlayer(val);
			const optionKeys = Object.keys(options);
			if ((options.male || options.female) && optionKeys.every((k) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(k))) return gender({
				fallback: options.fallback,
				male: options.male,
				female: options.female
			});
			return select(options, node.name);
		}
	}
	return nodes.map((node) => i18nextNodesToIntlayer([node]));
};
var i18nextToIntlayerPlugin = {
	canHandle: (node) => typeof node === "string" && (node.includes("{") || node.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(node)),
	transform: (node) => {
		try {
			return i18nextNodesToIntlayer(parseI18Next(node));
		} catch {
			return node;
		}
	}
};
var i18nextToIntlayerFormatter = (message) => {
	return deepTransformNode(message, {
		dictionaryKey: "i18next",
		keyPath: [],
		plugins: [{
			id: "i18next",
			...i18nextToIntlayerPlugin
		}]
	});
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
var parseVueI18nPart = (text) => {
	let index = 0;
	const nodes = [];
	let currentText = "";
	while (index < text.length) {
		const char = text[index];
		if (char === "{") {
			if (currentText) {
				nodes.push(currentText);
				currentText = "";
			}
			index++;
			let name = "";
			while (index < text.length && text[index] !== "}") {
				name += text[index];
				index++;
			}
			if (index < text.length) index++;
			nodes.push({
				type: "argument",
				name: name.trim()
			});
		} else {
			currentText += char;
			index++;
		}
	}
	if (currentText) nodes.push(currentText);
	return nodes;
};
var parseVueI18n = (text) => {
	const parts = [];
	let currentPart = "";
	let index = 0;
	while (index < text.length) {
		const char = text[index];
		if (char === "\\" && index + 1 < text.length && text[index + 1] === "|") {
			currentPart += "|";
			index += 2;
		} else if (char === "|") {
			parts.push(currentPart.trim());
			currentPart = "";
			index++;
		} else {
			currentPart += char;
			index++;
		}
	}
	parts.push(currentPart.trim());
	return parts.map(parseVueI18nPart);
};
var vueI18nPartToIntlayer = (nodes) => {
	if (nodes.length === 0) return "";
	if (nodes.length === 1 && typeof nodes[0] === "string") return nodes[0];
	let str = "";
	for (const node of nodes) if (typeof node === "string") str += node;
	else str += `{{${node.name}}}`;
	return insertion(str);
};
var vueI18nNodesToIntlayer = (parts) => {
	if (parts.length === 1) return vueI18nPartToIntlayer(parts[0]);
	const options = {};
	const varName = "count";
	if (parts.length === 2) return enumeration({
		"1": vueI18nPartToIntlayer(parts[0]),
		fallback: vueI18nPartToIntlayer(parts[1])
	});
	if (parts.length === 3) return enumeration({
		"0": vueI18nPartToIntlayer(parts[0]),
		"1": vueI18nPartToIntlayer(parts[1]),
		fallback: vueI18nPartToIntlayer(parts[2])
	});
	parts.forEach((part, index) => {
		if (index === parts.length - 1) options.fallback = vueI18nPartToIntlayer(part);
		else options[index.toString()] = vueI18nPartToIntlayer(part);
	});
	options.__intlayer_vue_i18n_var = varName;
	return enumeration(options);
};
var vueI18nToIntlayerPlugin = {
	canHandle: (node) => typeof node === "string" && (node.includes("{") || node.includes("|")),
	transform: (node) => {
		try {
			return vueI18nNodesToIntlayer(parseVueI18n(node));
		} catch {
			return node;
		}
	}
};
var vueI18nToIntlayerFormatter = (message) => {
	return deepTransformNode(message, {
		dictionaryKey: "vue-i18n",
		keyPath: [],
		plugins: [{
			id: "vue-i18n",
			...vueI18nToIntlayerPlugin
		}]
	});
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
var resolveMessageNodeToString = (node, values = {}, locale = "en") => {
	const resolved = resolveMessageNode(node, values, locale);
	return typeof resolved === "string" ? resolved : String(resolved ?? "");
};
var createMessageResolver = (formatter) => (message, values = {}, locale = "en") => resolveMessageNodeToString(typeof message === "string" ? formatter(message) : message, values, locale);
var DIALECT_FORMATTERS = {
	icu: icuToIntlayerFormatter,
	i18next: i18nextToIntlayerFormatter,
	"vue-i18n": vueI18nToIntlayerFormatter
};
var resolveMessage = (message, values = {}, locale = "en", dialect = "icu") => createMessageResolver(DIALECT_FORMATTERS[dialect])(message, values, locale);
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
var CONTROL_OPTION_KEYS = /* @__PURE__ */ new Set([
	"defaultValue",
	"ns",
	"lng",
	"lngs",
	"fallbackLng",
	"returnObjects",
	"returnDetails",
	"keySeparator",
	"nsSeparator",
	"ordinal",
	"postProcess",
	"postProcessPassResolved",
	"interpolation",
	"replace",
	"joinArrays",
	"nsMode",
	"keyPrefix"
]);
var MAX_NESTING_DEPTH = 5;
var ROOT_DICTIONARY_KEY = "index";
var getDictionaryOrUndefined = (namespace, locale) => {
	if (!(namespace in getDictionaries())) return void 0;
	return getIntlayer(namespace, locale);
};
var buildKeyCandidates = (path, locale, count, context, ordinal) => {
	const candidates = [];
	const pluralCategory = count === void 0 ? void 0 : new Intl.PluralRules(locale, { type: ordinal ? "ordinal" : "cardinal" }).select(count);
	if (context) {
		if (pluralCategory) {
			if (ordinal) candidates.push(`${path}_${context}_ordinal_${pluralCategory}`);
			candidates.push(`${path}_${context}_${pluralCategory}`);
			if (count !== 1) candidates.push(`${path}_${context}_plural`);
		}
		candidates.push(`${path}_${context}`);
	}
	if (pluralCategory) {
		if (ordinal) candidates.push(`${path}_ordinal_${pluralCategory}`);
		candidates.push(`${path}_${pluralCategory}`);
		if (count !== 1) candidates.push(`${path}_plural`);
	}
	candidates.push(path);
	return candidates;
};
var getInterpolationValues = (options) => {
	if (!options || typeof options !== "object") return {};
	const replace = options.replace;
	if (replace) {
		const values = { ...replace };
		if (options.count !== void 0) values.count ??= options.count;
		if (options.context !== void 0) values.context ??= options.context;
		return values;
	}
	const values = {};
	for (const [optionKey, optionValue] of Object.entries(options)) if (!CONTROL_OPTION_KEYS.has(optionKey)) values[optionKey] = optionValue;
	return values;
};
var resolveTranslation = ({ locale, namespace, key, options, keySeparator = ".", nsSeparator = ":", depth = 0, dictionaryContent }) => {
	let targetNamespace = namespace;
	let path = key;
	if (nsSeparator !== false && key.includes(nsSeparator)) {
		const separatorIndex = key.indexOf(nsSeparator);
		targetNamespace = key.slice(0, separatorIndex);
		path = key.slice(separatorIndex + nsSeparator.length);
	} else if (options?.ns) targetNamespace = Array.isArray(options.ns) ? options.ns[0] : options.ns;
	const count = typeof options?.count === "number" ? options.count : void 0;
	const context = options?.context !== void 0 ? String(options.context) : void 0;
	const ordinal = options?.ordinal === true;
	const resolvedLocale = options?.lng ?? locale;
	let dictionary;
	if (dictionaryContent !== void 0 && targetNamespace === namespace && options?.lng === void 0) dictionary = dictionaryContent;
	else {
		dictionary = getDictionaryOrUndefined(targetNamespace, resolvedLocale);
		if (dictionary === void 0 && targetNamespace === namespace && targetNamespace !== ROOT_DICTIONARY_KEY) dictionary = getDictionaryOrUndefined(ROOT_DICTIONARY_KEY, resolvedLocale);
		if (dictionary === void 0) return void 0;
	}
	let resolvedValue;
	for (const candidate of buildKeyCandidates(path, options?.lng ?? locale, count, context, ordinal)) {
		const value = navigatePath(dictionary, candidate, keySeparator);
		if (value !== null && value !== void 0) {
			resolvedValue = value;
			break;
		}
	}
	if (resolvedValue === null || resolvedValue === void 0) return void 0;
	if (options?.returnObjects && typeof resolvedValue === "object" && resolvedValue !== null) return resolvedValue;
	const values = getInterpolationValues(options);
	let resolved = resolveMessage(resolvedValue, values, options?.lng ?? locale, "i18next");
	if (depth < MAX_NESTING_DEPTH && resolved.includes("$t(")) resolved = resolved.replace(/\$t\(\s*([^),]+?)\s*(?:,[^)]*)?\)/g, (match, nestedKey) => {
		const nestedValue = resolveTranslation({
			locale,
			namespace: targetNamespace,
			key: nestedKey.trim(),
			options,
			keySeparator,
			nsSeparator,
			depth: depth + 1,
			dictionaryContent: targetNamespace === namespace ? dictionaryContent : void 0
		});
		return typeof nestedValue === "string" ? nestedValue : match;
	});
	return resolved;
};
var warnIgnoredResources = (location) => {
	getAppLogger({ log })(`${colorize(location, CYAN)}: the ${colorize("`resources`", CYAN)} option is ignored when using ${colorize("@intlayer/i18next", MAGENTA)} — translations are served from the compiled intlayer dictionaries instead. Remove the resource imports and the ${colorize("`resources`", CYAN)} option to reduce your bundle size.`);
};
var createInstance = (instanceOptions = {}) => {
	if (instanceOptions.resources !== void 0) warnIgnoredResources("createInstance");
	const config = internationalization;
	let currentLanguage = instanceOptions.lng ?? config?.defaultLocale ?? "en";
	let defaultNS = instanceOptions.defaultNS ?? (Array.isArray(instanceOptions.ns) ? instanceOptions.ns[0] : instanceOptions.ns) ?? "translation";
	const listeners = /* @__PURE__ */ new Map();
	let initialized = false;
	const emit = (event, ...args) => {
		listeners.get(event)?.forEach((h) => {
			h(...args);
		});
	};
	const getSeparators = () => ({
		keySeparator: instanceOptions.keySeparator ?? ".",
		nsSeparator: instanceOptions.nsSeparator ?? ":"
	});
	const resolveKey = (lang, ns, key, opts) => {
		const options = typeof opts === "string" ? { defaultValue: opts } : opts;
		const resolved = resolveTranslation({
			locale: lang,
			namespace: ns,
			key,
			options,
			...getSeparators()
		});
		if (resolved !== void 0) return resolved;
		const defaultValue = options?.defaultValue;
		if (typeof defaultValue === "string") return resolveMessage(defaultValue, getInterpolationValues(options), lang, "i18next");
		return key;
	};
	const instance = {
		get language() {
			return currentLanguage;
		},
		get languages() {
			return config?.locales?.map(String) ?? [currentLanguage];
		},
		get resolvedLanguage() {
			return currentLanguage;
		},
		get isInitialized() {
			return initialized;
		},
		isInitializing: false,
		initializedStoreOnce: false,
		initializedLanguageOnce: false,
		options: instanceOptions,
		modules: {},
		services: {},
		store: {},
		format: ((value) => String(value)),
		async init(optionsOrCb, cb) {
			const opts = typeof optionsOrCb === "function" ? {} : optionsOrCb ?? {};
			if (opts.resources !== void 0) warnIgnoredResources("i18next.init");
			if (opts.lng) currentLanguage = opts.lng;
			if (opts.defaultNS) defaultNS = opts.defaultNS;
			else if (opts.ns) defaultNS = Array.isArray(opts.ns) ? opts.ns[0] : opts.ns;
			initialized = true;
			emit("initialized", opts);
			const t = instance.t.bind(instance);
			(typeof optionsOrCb === "function" ? optionsOrCb : cb)?.(null, t);
			return t;
		},
		t(key, optionsOrDefaultValue, extraOpts) {
			const options = typeof optionsOrDefaultValue === "string" ? {
				defaultValue: optionsOrDefaultValue,
				...extraOpts ?? {}
			} : optionsOrDefaultValue;
			const keys = Array.isArray(key) ? key : [String(key)];
			for (const candidateKey of keys) {
				const result = resolveTranslation({
					locale: currentLanguage,
					namespace: defaultNS,
					key: candidateKey,
					options,
					...getSeparators()
				});
				if (result !== void 0) return result;
			}
			const defaultValue = options?.defaultValue;
			if (typeof defaultValue === "string") return resolveMessage(defaultValue, getInterpolationValues(options), currentLanguage, "i18next");
			return defaultValue ?? (Array.isArray(key) ? key[key.length - 1] : key);
		},
		async changeLanguage(lng, cb) {
			const prev = currentLanguage;
			if (lng) currentLanguage = lng;
			emit("languageChanged", currentLanguage, prev);
			const t = instance.t.bind(instance);
			cb?.(null, t);
			return t;
		},
		exists(key, options) {
			return resolveTranslation({
				locale: currentLanguage,
				namespace: defaultNS,
				key,
				options,
				...getSeparators()
			}) !== void 0;
		},
		getFixedT: ((lng, ns, keyPrefix) => {
			const fixedLng = Array.isArray(lng) ? lng[0] ?? currentLanguage : lng ?? currentLanguage;
			const fixedNS = ns ?? defaultNS;
			return (key, opts) => {
				const fullKey = keyPrefix ? `${keyPrefix}.${key}` : key;
				return resolveKey(fixedLng, fixedNS, fullKey, opts);
			};
		}),
		use(module) {
			module?.init?.(instance);
			return instance;
		},
		on(event, handler) {
			if (!listeners.has(event)) listeners.set(event, /* @__PURE__ */ new Set());
			listeners.get(event).add(handler);
			return instance;
		},
		once(event, handler) {
			const wrapper = (...args) => {
				handler(...args);
				instance.off(event, wrapper);
			};
			instance.on(event, wrapper);
			return instance;
		},
		off(event, handler) {
			if (!handler) listeners.delete(event);
			else listeners.get(event)?.delete(handler);
		},
		emit(eventName, ...args) {
			emit(eventName, ...args);
		},
		createInstance(opts, _cb) {
			return createInstance({
				...instanceOptions,
				...opts
			});
		},
		cloneInstance(opts, _cb) {
			return createInstance({
				...instanceOptions,
				...opts
			});
		},
		dir(lng) {
			return [
				"ar",
				"he",
				"fa",
				"ur",
				"ps",
				"yi",
				"dv",
				"ug"
			].some((l) => (lng ?? currentLanguage).startsWith(l)) ? "rtl" : "ltr";
		},
		setDefaultNamespace(ns) {
			defaultNS = ns;
		},
		hasLoadedNamespace(ns) {
			try {
				getIntlayer(Array.isArray(ns) ? ns[0] : ns, currentLanguage);
				return true;
			} catch {
				return false;
			}
		},
		async loadNamespaces(_ns) {},
		async loadLanguages(_lngs) {},
		loadResources(_cb) {},
		async reloadResources() {},
		getDataByLanguage(_lng) {},
		getResource(lng, ns, key) {
			try {
				return navigatePath(getIntlayer(ns, lng), key);
			} catch {
				return;
			}
		},
		addResource: () => instance,
		addResources: () => instance,
		addResourceBundle: () => instance,
		hasResourceBundle: () => false,
		getResourceBundle: () => void 0,
		removeResourceBundle: () => instance,
		toJSON() {
			return {
				options: instanceOptions,
				store: {},
				language: currentLanguage,
				languages: config?.locales?.map(String) ?? [currentLanguage],
				resolvedLanguage: currentLanguage
			};
		}
	};
	return instance;
};
var i18next = createInstance();
i18next.dir.bind(i18next);
i18next.init.bind(i18next);
i18next.loadResources.bind(i18next);
i18next.reloadResources.bind(i18next);
i18next.use.bind(i18next);
i18next.changeLanguage.bind(i18next);
i18next.getFixedT.bind(i18next);
i18next.t.bind(i18next);
i18next.exists.bind(i18next);
i18next.setDefaultNamespace.bind(i18next);
i18next.hasLoadedNamespace.bind(i18next);
i18next.loadNamespaces.bind(i18next);
i18next.loadLanguages.bind(i18next);
var createTranslationApi = ({ locale, setLocale, availableLocales, namespace, keyPrefix, dictionaryContent }) => {
	const resolveSingleKey = (key, translateOptions) => resolveTranslation({
		locale,
		namespace,
		key: keyPrefix ? `${keyPrefix}.${key}` : key,
		options: translateOptions,
		dictionaryContent
	});
	const translate = (key, optionsOrDefaultValue, extraOptions) => {
		const translateOptions = typeof optionsOrDefaultValue === "string" ? {
			defaultValue: optionsOrDefaultValue,
			...extraOptions
		} : optionsOrDefaultValue ?? {};
		const keys = Array.isArray(key) ? key : [key];
		for (const candidateKey of keys) {
			const resolved = resolveSingleKey(candidateKey, translateOptions);
			if (resolved !== void 0) return resolved;
		}
		const defaultValue = translateOptions.defaultValue;
		if (typeof defaultValue === "string") return resolveMessage(defaultValue, getInterpolationValues(translateOptions), locale, "i18next");
		return keys[keys.length - 1];
	};
	return {
		translate,
		i18n: {
			language: locale,
			languages: availableLocales ?? [],
			resolvedLanguage: locale,
			isInitialized: true,
			changeLanguage: async (newLanguage) => {
				setLocale(newLanguage);
			},
			dir: (language) => {
				return getHTMLTextDir(language ?? locale) === "rtl" ? "rtl" : "ltr";
			},
			exists: (key, existsOptions) => resolveTranslation({
				locale,
				namespace,
				key,
				options: existsOptions,
				dictionaryContent
			}) !== void 0,
			t: translate,
			getFixedT: (language, fixedNamespace) => (key, fixedOptions) => {
				const resolved = resolveTranslation({
					locale: language ?? locale,
					namespace: fixedNamespace ?? namespace,
					key,
					options: fixedOptions,
					dictionaryContent: (language ?? locale) === locale && (fixedNamespace ?? namespace) === namespace ? dictionaryContent : void 0
				});
				return resolved !== void 0 ? resolved : key;
			}
		}
	};
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
var { defaultLocale, locales: availableLocales } = internationalization ?? {};
var useLocale = ({ isCookieEnabled, onLocaleChange } = {}) => {
	const { locale, setLocale: setLocaleState, isCookieEnabled: isCookieEnabledContext } = useContext(IntlayerClientContext) ?? {};
	return {
		locale,
		defaultLocale,
		availableLocales,
		setLocale: useCallback((locale) => {
			if (!availableLocales?.map(String).includes(locale)) {
				console.error(`Locale ${locale} is not available`);
				return;
			}
			setLocaleState(locale);
			setLocaleInStorage(locale, isCookieEnabled ?? isCookieEnabledContext ?? true);
			onLocaleChange?.(locale);
		}, [
			availableLocales,
			onLocaleChange,
			setLocaleState,
			isCookieEnabled
		])
	};
};
var useTranslationImplementation = (ns, options) => {
	const namespace = Array.isArray(ns) ? ns[0] ?? "translation" : ns ?? "translation";
	const { locale, setLocale, availableLocales } = useLocale();
	const keyPrefix = options?.keyPrefix;
	const { translate, i18n } = useMemo(() => createTranslationApi({
		locale,
		setLocale,
		availableLocales: availableLocales ?? [],
		namespace,
		keyPrefix
	}), [
		locale,
		setLocale,
		availableLocales,
		namespace,
		keyPrefix
	]);
	return {
		t: translate,
		i18n,
		ready: true
	};
};
var useTranslation = useTranslationImplementation;
var I18nextProvider = ({ children, i18n: _i18n }) => {
	if (_i18n !== void 0) getAppLogger({ log })(`${colorize("I18nextProvider", CYAN)}: the \`i18n\` prop has no effect with intlayer. Intlayer manages its own i18n instance — you can safely remove the prop.`);
	return jsx(IntlayerProvider, { children });
};
React.createContext({ i18n: null });
var initReactI18next = {
	type: "3rdParty",
	init: (instance) => {}
};
function WhyItMatters() {
	const { t } = useTranslation();
	return jsxs("section", {
		className: "mb-16",
		children: [jsx("h2", {
			className: "mb-6 text-2xl font-bold text-foreground",
			children: t("home.whyItMatters.whyTheseMetricsMatter")
		}), jsxs("div", {
			className: "grid gap-6 md:grid-cols-3",
			children: [
				jsxs("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [jsx("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: t("home.whyItMatters.bundleSize")
					}), jsx("p", {
						className: "text-sm text-muted-foreground",
						children: t("home.whyItMatters.theBundleIsTheData")
					})]
				}),
				jsxs("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [jsx("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: t("home.whyItMatters.renderingHydration")
					}), jsx("p", {
						className: "text-sm text-muted-foreground",
						children: t("home.whyItMatters.connectingALargeJson")
					})]
				}),
				jsxs("div", {
					className: "rounded-lg border border-border bg-card p-6",
					children: [jsx("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: t("home.whyItMatters.dynamicLoading")
					}), jsx("p", {
						className: "text-sm text-muted-foreground",
						children: t("home.whyItMatters.loadingAllTranslationsUpfront")
					})]
				})
			]
		})]
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
i18next.use(initReactI18next).init({
	lng: "en",
	fallbackLng: "en",
	interpolation: { escapeValue: false },
	react: { useSuspense: false },
	keySeparator: false,
	nsSeparator: false
});
var i18n_default = i18next;
function LocaleSync({ locale }) {
	const { i18n: providerI18n } = useTranslation();
	useEffect(() => {
		if (providerI18n.language !== locale) providerI18n.changeLanguage(locale);
	}, [providerI18n, locale]);
	return null;
}
function AppProviders({ children }) {
	const locale = useParams().locale ?? "en";
	const [renderStart] = useState(() => typeof performance !== "undefined" ? performance.now() : 0);
	useLayoutEffect(() => {
		recordRenderTime("AppRoot", renderStart);
	}, [renderStart]);
	useEffect(() => {
		document.documentElement.lang = locale;
	}, [locale]);
	useEffect(() => {
		recordHydrationDuration();
	}, []);
	return jsxs(I18nextProvider, {
		i18n: i18n_default,
		children: [jsx(LocaleSync, { locale }), children]
	});
}
function Wrapper({ children }) {
	return jsx(AppProviders, { children });
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(WhyItMatters, {}) });
}
export { Wrapped as default };
