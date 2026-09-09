import { a as routing, c as getAppLogger, i as log, l as CYAN, n as editor, o as colorize, r as internationalization, t as analytics, u as MAGENTA } from "./built-BvRk9kiK.js";
import { _ as PLURAL, a as getSelect, f as GENDER, i as getDictionaries, m as INSERTION, o as getEnumeration, p as HTML, r as getIntlayer, s as deepTransformNode, u as ENUMERATION, x as formatNodeType, y as SELECT } from "./getDictionary-CYX4W6mH.js";
import { n as isBotEnvironment } from "./isBot-BB-W_mf9.js";
import * as React from "react";
import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { jsxDEV } from "react/jsx-dev-runtime";
import { useParams } from "next/navigation";
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
var TREE_SHAKE_STORAGE_LOCAL_STORAGE = process.env.INTLAYER_ROUTING_STORAGE_LOCALSTORAGE === "false";
var TREE_SHAKE_STORAGE_SESSION_STORAGE = process.env.INTLAYER_ROUTING_STORAGE_SESSIONSTORAGE === "false";
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
	if (!TREE_SHAKE_STORAGE_LOCAL_STORAGE) for (let i = 0; i < (routing.storage.localStorage ?? []).length; i++) try {
		const value = options?.getLocaleStorage?.(routing.storage.localStorage[i].name);
		if (isValidLocale(value)) return value;
	} catch {}
	if (!TREE_SHAKE_STORAGE_SESSION_STORAGE && routing.storage.sessionStorage) for (let i = 0; i < routing.storage.sessionStorage.length; i++) try {
		const value = options?.getSessionStorage?.(routing.storage.sessionStorage[i].name);
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
	if (!TREE_SHAKE_STORAGE_LOCAL_STORAGE && routing.storage.localStorage && options?.setLocaleStorage) for (let i = 0; i < routing.storage.localStorage.length; i++) {
		const { name } = routing.storage.localStorage[i];
		try {
			if (!(options?.overwrite ?? true) && options?.getLocaleStorage) {
				if (options.getLocaleStorage(name)) continue;
			}
			options.setLocaleStorage(name, locale);
		} catch {}
	}
	if (!TREE_SHAKE_STORAGE_SESSION_STORAGE && routing.storage.sessionStorage && options?.setSessionStorage) for (let i = 0; i < routing.storage.sessionStorage.length; i++) {
		const { name } = routing.storage.sessionStorage[i];
		try {
			if (!(options?.overwrite ?? true) && options?.getSessionStorage) {
				if (options.getSessionStorage(name)) continue;
			}
			options.setSessionStorage(name, locale);
		} catch {}
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
var getPlural = (pluralContent, count, locale) => {
	return pluralContent[getCachedIntl("PluralRules", locale).select(count)] ?? pluralContent.other;
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
var interpolateMessage = (template, values = {}, locale = "en") => template.replace(/\{\{\s*([^{}]+?)\s*\}\}/g, (match, path) => {
	const value = resolveValuePath(values, path);
	return value === void 0 ? match : String(value);
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
var DIALECT_FORMATTERS = {
	icu: (message) => icuToIntlayerFormatter(message),
	i18next: (message) => i18nextToIntlayerFormatter(message),
	"vue-i18n": (message) => vueI18nToIntlayerFormatter(message)
};
var resolveMessage = (message, values = {}, locale = "en", dialect = "icu") => {
	const resolved = resolveMessageNode(typeof message === "string" ? DIALECT_FORMATTERS[dialect](message) : message, values, locale);
	return typeof resolved === "string" ? resolved : String(resolved ?? "");
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
var isEnabled$1 = !(process.env.INTLAYER_EDITOR_ENABLED === "false") && editor?.enabled && typeof window !== "undefined" && window.self !== window.top;
var localeInStorage = getLocaleFromStorageClient(localeStorageOptions);
var setLocaleInStorage = (locale, isCookieEnabled) => setLocaleInStorageClient(locale, {
	...localeStorageOptions,
	isCookieEnabled
});
var useEditor = () => {
	const { locale } = useContext(IntlayerClientContext) ?? {};
	const managerRef = useRef(null);
	useEffect(() => {
		if (process.env.INTLAYER_EDITOR_ENABLED === "false" || !isEnabled$1) return;
		import("./esm-smh260Ns.js").then(({ initEditorClient }) => {
			const manager = initEditorClient();
			managerRef.current = manager;
			if (locale) manager.currentLocale.set(locale);
		}).catch(() => {});
		return () => {
			managerRef.current = null;
			import("./esm-smh260Ns.js").then(({ stopEditorClient }) => {
				stopEditorClient();
			}).catch(() => {});
		};
	}, []);
	useEffect(() => {
		if (!locale || !managerRef.current) return;
		managerRef.current.currentLocale.set(locale);
	}, [locale]);
};
var EditorProvider = ({ children }) => {
	useEditor();
	return children;
};
var isEnabled = !(process.env.INTLAYER_ANALYTICS_ENABLED === "false") && analytics?.enabled === true && Boolean(editor?.clientId) && typeof window !== "undefined" && window.self === window.top && !isBotEnvironment();
var useAnalytics = () => {
	const { locale } = useContext(IntlayerClientContext) ?? {};
	const clientRef = useRef(null);
	useEffect(() => {
		if (process.env.INTLAYER_ANALYTICS_ENABLED === "false" || !isEnabled) return;
		let cancelled = false;
		let initialized = false;
		import("./esm-CCYIgmJu.js").then(({ initAnalyticsClient, buildContentExposure }) => {
			if (cancelled) return;
			const client = initAnalyticsClient();
			initialized = true;
			clientRef.current = client;
			if (locale) client.setLocale(locale);
			client.trackPageView({ reason: "initial" });
		}).catch(() => {});
		return () => {
			cancelled = true;
			clientRef.current = null;
			import("./esm-CCYIgmJu.js").then(({ stopAnalyticsClient }) => {
				if (initialized) stopAnalyticsClient();
			}).catch(() => {});
		};
	}, []);
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
React.createContext({ i18n: null });
var initReactI18next = {
	type: "3rdParty",
	init: (instance) => {}
};
var _jsxFileName$3 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-next-i18next-app/components/pages/products/ProductsHeader.tsx";
function ProductsHeader() {
	const { t } = useTranslation();
	return jsxDEV("header", {
		className: "mb-10 text-center",
		children: [jsxDEV("h1", {
			className: "mb-3 text-3xl font-bold text-foreground",
			children: t("products.productsHeader.ourProducts")
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 10,
			columnNumber: 7
		}, this), jsxDEV("p", {
			className: "mx-auto max-w-2xl text-muted-foreground",
			children: t("products.productsHeader.exploreOurSuiteOfTools")
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 13,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
var IntlayerClientProviderBase = (props) => jsx(IntlayerProvider, { ...props });
var IntlayerClientProvider = IntlayerClientProviderBase;
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
var _jsxFileName$2 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-next-i18next-app/components/AppProviders.tsx";
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
	return jsxDEV(IntlayerClientProvider, {
		locale,
		children
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 37,
		columnNumber: 7
	}, this);
}
var _jsxFileName$1 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-next-i18next-app/scripts/Wrapper.tsx";
function Wrapper({ children }) {
	return jsxDEV(AppProviders, { children }, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-next-i18next-app/components/pages/products/ProductsHeader.wrapper.tsx";
function Wrapped() {
	return jsxDEV(Wrapper, { children: jsxDEV(ProductsHeader, {}, void 0, false, {
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
import { n as editor, t as analytics } from "./built-BvRk9kiK.js";
import { n as isBotEnvironment } from "./isBot-BB-W_mf9.js";
var hashString = (input) => {
	let hash = 2166136261;
	for (let index = 0; index < input.length; index++) {
		hash ^= input.charCodeAt(index);
		hash = Math.imul(hash, 16777619);
	}
	return hash >>> 0;
};
var assignVariant = (sessionId, experimentKey, variants, weights) => {
	if (variants.length === 0) throw new Error("assignVariant requires at least one variant");
	if (variants.length === 1) return variants[0];
	const bucket = hashString(`${sessionId}:${experimentKey}`) / 4294967296;
	if (!weights || weights.length !== variants.length) {
		const index = Math.floor(bucket * variants.length);
		return variants[Math.min(index, variants.length - 1)];
	}
	const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
	if (totalWeight <= 0) return variants[Math.floor(bucket * variants.length)];
	let cumulative = 0;
	const target = bucket * totalWeight;
	for (let index = 0; index < variants.length; index++) {
		cumulative += weights[index];
		if (target < cumulative) return variants[index];
	}
	return variants[variants.length - 1];
};
var KEY_SEPARATOR = "";
var exposureKey = (event) => [
	event.url,
	event.dictionaryKey,
	event.keyPath,
	event.locale,
	event.experimentKey ?? "",
	event.variant ?? ""
].join(KEY_SEPARATOR);
var createEventBuffer = ({ max }) => {
	let discreteEvents = [];
	const exposures = /* @__PURE__ */ new Map();
	const size = () => discreteEvents.length + exposures.size;
	const enforceCap = () => {
		while (size() > max && exposures.size > 0) {
			const oldestKey = exposures.keys().next().value;
			exposures.delete(oldestKey);
		}
		if (size() > max) discreteEvents = discreteEvents.slice(size() - max);
	};
	const push = (event) => {
		if (event.type === "content_exposure") {
			const key = exposureKey(event);
			const existing = exposures.get(key);
			if (existing) {
				existing.count = (existing.count ?? 1) + (event.count ?? 1);
				existing.t = event.t;
			} else exposures.set(key, {
				...event,
				count: event.count ?? 1
			});
		} else discreteEvents.push(event);
		enforceCap();
		return size();
	};
	const drain = () => {
		const drained = [...discreteEvents, ...exposures.values()];
		discreteEvents = [];
		exposures.clear();
		return drained;
	};
	return {
		push,
		drain,
		size
	};
};
var isSampledIn = (sessionId, sampleRate) => {
	if (sampleRate >= 1) return true;
	if (sampleRate <= 0) return false;
	return hashString(sessionId) / 4294967295 < sampleRate;
};
var SESSION_STORAGE_KEY = "__intlayer_analytics_sid__";
var generateSessionId = () => {
	const cryptoObj = typeof globalThis !== "undefined" ? globalThis.crypto : void 0;
	if (cryptoObj?.randomUUID) return cryptoObj.randomUUID();
	return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
};
var getSessionId = () => {
	if (typeof window === "undefined" || !window.sessionStorage) return generateSessionId();
	try {
		const existing = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
		if (existing) return existing;
		const created = generateSessionId();
		window.sessionStorage.setItem(SESSION_STORAGE_KEY, created);
		return created;
	} catch {
		return generateSessionId();
	}
};
var sendEvents = (endpoint, body, { useBeacon = false, token } = {}) => {
	try {
		const payload = JSON.stringify(body);
		if (useBeacon && typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") return navigator.sendBeacon(endpoint, payload);
		if (typeof fetch === "function") {
			fetch(endpoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					...token ? { Authorization: `Bearer ${token}` } : {}
				},
				body: payload,
				keepalive: true,
				credentials: "omit",
				mode: "cors"
			}).catch(() => {});
			return true;
		}
		return false;
	} catch {
		return false;
	}
};
var onIdle = (callback) => {
	if (typeof window === "undefined") return;
	const requestIdle = window.requestIdleCallback;
	if (typeof requestIdle === "function") {
		requestIdle(() => callback());
		return;
	}
	setTimeout(callback, 1);
};
var TOKEN_STORAGE_KEY = "__intlayer_public_token__";
var EXPIRY_MARGIN_MS = 6e4;
var readStoredToken = () => {
	try {
		const raw = window.sessionStorage?.getItem(TOKEN_STORAGE_KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw);
		if (typeof parsed?.token !== "string") return null;
		if (typeof parsed?.expiresAt !== "number") return null;
		return parsed;
	} catch {
		return null;
	}
};
var writeStoredToken = (cached) => {
	try {
		window.sessionStorage?.setItem(TOKEN_STORAGE_KEY, JSON.stringify(cached));
	} catch {}
};
var createPublicTokenManager = ({ backendURL, clientId }) => {
	const endpoint = `${backendURL.replace(/\/$/, "")}/api/public/token`;
	let cached = null;
	let pendingExchange = null;
	const isUsable = (candidate) => candidate !== null && candidate.expiresAt - EXPIRY_MARGIN_MS > Date.now();
	const getToken = () => {
		if (isUsable(cached)) return cached.token;
		if (typeof window !== "undefined") {
			const stored = readStoredToken();
			if (isUsable(stored)) {
				cached = stored;
				return stored.token;
			}
		}
	};
	const exchange = async () => {
		try {
			const response = await fetch(endpoint, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ clientId }),
				credentials: "omit",
				mode: "cors"
			});
			if (!response.ok) return;
			const payload = await response.json();
			const token = payload?.data?.token;
			const expiresIn = payload?.data?.expiresIn ?? 0;
			if (!token || expiresIn <= 0) return;
			cached = {
				token,
				expiresAt: Date.now() + expiresIn * 1e3
			};
			if (typeof window !== "undefined") writeStoredToken(cached);
		} catch {} finally {
			pendingExchange = null;
		}
	};
	const prime = () => {
		if (!clientId || typeof fetch !== "function") return;
		if (getToken()) return;
		if (pendingExchange) return;
		pendingExchange = exchange();
	};
	return {
		getToken,
		prime
	};
};
var SDK_VERSION = "intlayer-analytics/1";
var currentUrl = () => {
	if (typeof window === "undefined" || !window.location) return "";
	return window.location.pathname;
};
var referrerHost = () => {
	if (typeof document === "undefined" || !document.referrer) return void 0;
	try {
		return new URL(document.referrer).host;
	} catch {
		return;
	}
};
var createAnalyticsClient = (config) => {
	const sessionId = getSessionId();
	const isBotSession = isBotEnvironment();
	const sampledIn = !isBotSession && isSampledIn(sessionId, config.sampleRate);
	const buffer = createEventBuffer({ max: config.maxBufferSize });
	const endpoint = `${config.backendURL.replace(/\/$/, "")}/api/analytics/events`;
	const publicToken = createPublicTokenManager({
		backendURL: config.backendURL,
		clientId: config.clientId
	});
	let ambientLocale = "";
	let flushTimer = null;
	let started = false;
	let detachListeners = null;
	let lastPageViewUrl = null;
	let seenExposureKeys = /* @__PURE__ */ new Set();
	const flush = (useBeacon = false) => {
		const events = buffer.drain();
		const token = publicToken.getToken();
		for (let start = 0; start < events.length; start += 200) sendEvents(endpoint, {
			token,
			clientId: token ? void 0 : config.clientId,
			sessionId,
			sdkVersion: SDK_VERSION,
			events: events.slice(start, start + 200)
		}, {
			useBeacon,
			token
		});
	};
	const enqueue = (event) => {
		if (buffer.push(event) >= config.maxBufferSize) flush();
	};
	const setLocale = (locale) => {
		ambientLocale = locale;
	};
	const trackPageView = (event = {}) => {
		if (!sampledIn) return;
		const url = event.url ?? currentUrl();
		const reason = event.reason ?? "initial";
		if (reason === "route_change" && url === lastPageViewUrl) return;
		lastPageViewUrl = url;
		seenExposureKeys = /* @__PURE__ */ new Set();
		enqueue({
			type: "page_view",
			t: Date.now(),
			url,
			locale: event.locale ?? ambientLocale,
			ref: event.ref ?? referrerHost(),
			vw: event.vw ?? (typeof window !== "undefined" ? window.innerWidth : void 0),
			vh: event.vh ?? (typeof window !== "undefined" ? window.innerHeight : void 0),
			reason
		});
	};
	const trackContentExposure = (event) => {
		if (!sampledIn) return;
		const locale = event.locale ?? ambientLocale;
		const exposureKey = [
			event.dictionaryKey,
			event.keyPath,
			locale,
			event.experimentKey ?? "",
			event.variant ?? ""
		].join("");
		if (seenExposureKeys.has(exposureKey)) return;
		seenExposureKeys.add(exposureKey);
		enqueue({
			...event,
			type: "content_exposure",
			t: Date.now(),
			url: currentUrl(),
			locale
		});
	};
	const trackConversion = (event) => {
		if (isBotSession) return;
		enqueue({
			...event,
			type: "conversion",
			t: Date.now(),
			url: currentUrl(),
			locale: event.locale ?? ambientLocale
		});
		flush();
	};
	const getVariant = (experimentKey, variants, weights) => assignVariant(sessionId, experimentKey, variants, weights);
	const attachListeners = () => {
		if (typeof window === "undefined") return;
		const onHidden = () => {
			if (document.visibilityState === "hidden") flush(true);
		};
		const onPageHide = () => flush(true);
		const onPopState = () => trackPageView({ reason: "route_change" });
		document.addEventListener("visibilitychange", onHidden);
		window.addEventListener("pagehide", onPageHide, { capture: true });
		window.addEventListener("popstate", onPopState);
		const history = window.history;
		const originalPush = history.pushState;
		const patchedPushState = function patchedPush(...args) {
			const result = originalPush.apply(this, args);
			trackPageView({ reason: "route_change" });
			return result;
		};
		history.pushState = patchedPushState;
		detachListeners = () => {
			document.removeEventListener("visibilitychange", onHidden);
			window.removeEventListener("pagehide", onPageHide, { capture: true });
			window.removeEventListener("popstate", onPopState);
			if (history.pushState === patchedPushState) history.pushState = originalPush;
		};
	};
	const start = () => {
		if (started || isBotSession) return;
		started = true;
		publicToken.prime();
		flushTimer = setInterval(flush, config.flushInterval);
		flushTimer?.unref?.();
		onIdle(attachListeners);
	};
	const stop = () => {
		if (!started) return;
		started = false;
		if (flushTimer) {
			clearInterval(flushTimer);
			flushTimer = null;
		}
		detachListeners?.();
		detachListeners = null;
		flush(true);
	};
	return {
		setLocale,
		trackPageView,
		trackContentExposure,
		trackConversion,
		getVariant,
		flush,
		start,
		stop
	};
};
var CLIENT_KEY = "__intlayer_analytics_client__";
var REF_COUNT_KEY = "__intlayer_analytics_ref_count__";
var getGlobalAnalyticsClient = () => {
	if (typeof window === "undefined") return null;
	return window[CLIENT_KEY] ?? null;
};
var setGlobalAnalyticsClient = (client) => {
	if (typeof window === "undefined") return;
	window[CLIENT_KEY] = client;
};
var incrementAnalyticsClientRefCount = () => {
	if (typeof window === "undefined") return 0;
	const globals = window;
	globals[REF_COUNT_KEY] = (globals[REF_COUNT_KEY] ?? 0) + 1;
	return globals[REF_COUNT_KEY];
};
var decrementAnalyticsClientRefCount = () => {
	if (typeof window === "undefined") return 0;
	const globals = window;
	globals[REF_COUNT_KEY] = Math.max(0, (globals[REF_COUNT_KEY] ?? 0) - 1);
	return globals[REF_COUNT_KEY];
};
var initAnalyticsClient = () => {
	incrementAnalyticsClientRefCount();
	const existing = getGlobalAnalyticsClient();
	if (existing) return existing;
	const client = createAnalyticsClient({
		backendURL: editor?.backendURL ?? "",
		clientId: editor?.clientId,
		flushInterval: analytics?.flushInterval ?? 2e4,
		maxBufferSize: 500,
		sampleRate: analytics?.sampleRate ?? 1
	});
	setGlobalAnalyticsClient(client);
	client.start();
	return client;
};
var stopAnalyticsClient = () => {
	if (decrementAnalyticsClientRefCount() > 0) return;
	getGlobalAnalyticsClient()?.stop();
	setGlobalAnalyticsClient(null);
};
var serializeKeyPath = (keyPath) => keyPath.map((segment) => segment.key === void 0 ? "*" : String(segment.key)).join(".");
var buildContentExposure = (params) => ({
	dictionaryKey: params.dictionaryKey,
	keyPath: serializeKeyPath(params.keyPath),
	locale: params.locale,
	nodeType: params.nodeType,
	experimentKey: params.experimentKey,
	variant: params.variant
});
export { buildContentExposure, getGlobalAnalyticsClient, initAnalyticsClient, stopAnalyticsClient };
import { n as editor } from "./built-BvRk9kiK.js";
import { b as TRANSLATION, n as getContent, t as getBasePlugins } from "./getDictionary-CYX4W6mH.js";
var isSameKeyPath = (keyPath1, keyPath2) => keyPath1.every((element, index) => keyPath2[index] && keyPath2[index].key === element.key && keyPath2[index].type === element.type);
var editDictionaryByKeyPath = (dictionaryContent, keyPath, newValue) => {
	let currentValue = dictionaryContent;
	let parentValue = null;
	let lastKeys = [];
	if (keyPath.length === 0) return newValue;
	try {
		for (let i = 0; i < keyPath.length; i++) {
			const keyObj = keyPath[i];
			parentValue = currentValue;
			if (keyObj?.type === "object" || keyObj?.type === "array") {
				lastKeys = [keyObj.key];
				if (!currentValue[keyObj.key] || typeof currentValue[keyObj.key] !== "object") currentValue[keyObj.key] = {};
				currentValue = currentValue[keyObj.key];
			}
			if (keyObj?.type === "translation" || keyObj?.type === "enumeration" || keyObj?.type === "plural" || keyObj?.type === "gender" || keyObj?.type === "select") {
				lastKeys = [keyObj.type, keyObj.key];
				if (!currentValue[keyObj.type] || typeof currentValue[keyObj.type] !== "object") currentValue[keyObj.type] = {};
				if (!currentValue[keyObj.type][keyObj.key] || typeof currentValue[keyObj.type][keyObj.key] !== "object") currentValue[keyObj.type][keyObj.key] = {};
				currentValue = currentValue[keyObj.type][keyObj.key];
			}
			if (keyObj?.type === "enumeration" || keyObj?.type === "plural" || keyObj?.type === "condition") {
				if (keyObj.type !== "enumeration" && keyObj.type !== "plural") {
					lastKeys = [keyObj.type, keyObj.key];
					currentValue = currentValue[keyObj.type][keyObj.key];
				}
			}
			if (keyObj?.type === "markdown" || keyObj?.type === "html" || keyObj?.type === "insertion") {
				lastKeys = [keyObj.type];
				if (currentValue[keyObj.type] == null) currentValue[keyObj.type] = "";
				currentValue = currentValue[keyObj.type];
			}
			if (keyObj?.type === "file") {
				lastKeys = ["content"];
				currentValue = currentValue.content;
			}
			if (i === keyPath.length - 1 && parentValue && lastKeys.length > 0) {
				let target = parentValue;
				for (const key of lastKeys.slice(0, -1)) target = target[key];
				const finalKey = lastKeys[lastKeys.length - 1];
				if (typeof newValue === "undefined") {
					if (Array.isArray(target)) {
						const index = Number(finalKey);
						if (!Number.isNaN(index) && index >= 0 && index < target.length) target.splice(index, 1);
					} else delete target[finalKey];
				} else target[finalKey] = newValue;
			}
		}
		return dictionaryContent;
	} catch (error) {
		console.error("Cannot edit dictionary by key path", {
			dictionaryContent,
			keyPath,
			newValue
		}, error);
		return dictionaryContent;
	}
};
var getContentNodeByKeyPath = (dictionaryContent, keyPath, fallbackLocale) => {
	let currentValue = structuredClone(dictionaryContent);
	for (const keyObj of keyPath) {
		if (fallbackLocale && currentValue?.nodeType === "translation") currentValue = currentValue?.[TRANSLATION]?.[fallbackLocale];
		if (keyObj.type === "object" || keyObj.type === "array") currentValue = currentValue?.[keyObj.key];
		if (keyObj.type === "translation" || keyObj.type === "condition" || keyObj.type === "enumeration" || keyObj.type === "plural" || keyObj.type === "gender" || keyObj.type === "select") currentValue = currentValue?.[keyObj.type]?.[keyObj.key];
		if (keyObj.type === "markdown" || keyObj.type === "html" || keyObj.type === "insertion" || keyObj.type === "file") currentValue = currentValue?.[keyObj.type];
	}
	return currentValue;
};
var renameContentNodeByKeyPath = (dictionaryContent, newKey, keyPath) => {
	let currentValue = dictionaryContent;
	let parentValue = null;
	let lastKey = null;
	for (const keyObj of keyPath) {
		parentValue = currentValue;
		if (keyObj.type === "object" || keyObj.type === "array") {
			lastKey = keyObj.key;
			currentValue = currentValue[keyObj.key];
		}
		if (keyObj.type === "translation" || keyObj.type === "enumeration" || keyObj.type === "plural" || keyObj.type === "condition" || keyObj.type === "gender" || keyObj.type === "select") {
			lastKey = keyObj.type;
			currentValue = currentValue[keyObj.type][keyObj.key];
		}
		if (keyObj.type === "markdown" || keyObj.type === "reactNode" || keyObj.type === "html" || keyObj.type === "insertion" || keyObj.type === "file") {
			lastKey = keyObj.type;
			currentValue = currentValue[keyObj.type];
		}
	}
	if (parentValue && lastKey !== null) {
		if (Array.isArray(parentValue)) parentValue[lastKey] = currentValue;
		else {
			const newParentValue = {};
			for (const key of Object.keys(parentValue)) if (key === lastKey && typeof newKey !== "undefined") newParentValue[newKey] = currentValue;
			else newParentValue[key] = parentValue[key];
			Object.keys(parentValue).forEach((key) => {
				delete parentValue[key];
			});
			Object.assign(parentValue, newParentValue);
		}
	}
	return dictionaryContent;
};
var compareUrls = (url1, url2) => {
	try {
		const parsedUrl1 = new URL(url1);
		const parsedUrl2 = new URL(url2);
		if (parsedUrl1.protocol !== parsedUrl2.protocol || parsedUrl1.hostname !== parsedUrl2.hostname || parsedUrl1.port !== parsedUrl2.port) return false;
		const path1 = parsedUrl1.pathname.replace(/\/$/, "");
		const path2 = parsedUrl2.pathname.replace(/\/$/, "");
		if (path1 !== "" && path2 !== "" && path1 !== path2) return false;
		return true;
	} catch (error) {
		console.error("Invalid URL(s)", error, {
			url1,
			url2
		});
		return false;
	}
};
var mergeIframeClick = (event) => {
	const simulatedMouseDownEvent = new MouseEvent("mousedown", {
		bubbles: true,
		cancelable: true,
		view: window
	});
	const simulatedClickEvent = new MouseEvent("click", {
		bubbles: true,
		cancelable: true,
		view: window
	});
	Object.assign(simulatedClickEvent, { iframeData: event });
	Object.assign(simulatedMouseDownEvent, { iframeData: event });
	window.dispatchEvent(simulatedClickEvent);
	window.dispatchEvent(simulatedMouseDownEvent);
};
var MANAGER_KEY = "__intlayer_editor_manager__";
var EVENTS_KEY = "__intlayer_editor_manager_events__";
var getEventTarget = () => {
	if (typeof window === "undefined") return new EventTarget();
	const windowGlobals = window;
	if (!windowGlobals[EVENTS_KEY]) windowGlobals[EVENTS_KEY] = new EventTarget();
	return windowGlobals[EVENTS_KEY];
};
var getGlobalEditorManager = () => {
	if (typeof window === "undefined") return null;
	return window[MANAGER_KEY] ?? null;
};
var setGlobalEditorManager = (manager) => {
	if (typeof window !== "undefined") {
		const windowGlobals = window;
		windowGlobals[MANAGER_KEY] = manager;
	}
	getEventTarget().dispatchEvent(new CustomEvent("change", { detail: manager }));
};
var onGlobalEditorManagerChange = (changeCallback) => {
	const eventTarget = getEventTarget();
	const eventHandler = (event) => {
		changeCallback(event.detail);
	};
	eventTarget.addEventListener("change", eventHandler);
	return () => {
		eventTarget.removeEventListener("change", eventHandler);
	};
};
var _HTMLElement$3 = typeof HTMLElement !== "undefined" ? HTMLElement : class {};
var IntlayerContentSelectorWrapperElement = class extends _HTMLElement$3 {
	_keyPathJson = "[]";
	_dictionaryKey = "";
	_editorEnabled = false;
	_isInIframe = false;
	_isSelected = false;
	_editedValue = void 0;
	_renderState = null;
	_selector = null;
	_unsubManager = null;
	_unsubEnabled = null;
	_unsubFocused = null;
	_unsubEditedContent = null;
	static get observedAttributes() {
		return ["key-path", "dictionary-key"];
	}
	get keyPathJson() {
		return this._keyPathJson;
	}
	set keyPathJson(v) {
		this._keyPathJson = v;
		const manager = getGlobalEditorManager();
		if (manager) this._updateEditedValue(manager);
	}
	get dictionaryKey() {
		return this._dictionaryKey;
	}
	set dictionaryKey(v) {
		this._dictionaryKey = v;
		const manager = getGlobalEditorManager();
		if (manager) this._updateEditedValue(manager);
	}
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: "open" });
		const style = document.createElement("style");
		style.textContent = ":host { display: contents; }";
		shadow.appendChild(style);
	}
	attributeChangedCallback(name, _oldVal, newVal) {
		if (name === "key-path") {
			this._keyPathJson = newVal ?? "[]";
			const manager = getGlobalEditorManager();
			if (manager) this._updateEditedValue(manager);
		} else if (name === "dictionary-key") {
			this._dictionaryKey = newVal ?? "";
			const manager = getGlobalEditorManager();
			if (manager) this._updateEditedValue(manager);
		}
	}
	connectedCallback() {
		if (typeof window !== "undefined") this._isInIframe = window.self !== window.top;
		this._subscribeToManager();
		this._render();
	}
	disconnectedCallback() {
		this._teardown();
	}
	_teardown() {
		this._unsubManager?.();
		this._unsubEnabled?.();
		this._unsubFocused?.();
		this._unsubEditedContent?.();
		this._unsubManager = null;
		this._unsubEnabled = null;
		this._unsubFocused = null;
		this._unsubEditedContent = null;
	}
	_getRawKeyPath() {
		try {
			return JSON.parse(this._keyPathJson);
		} catch {
			return [];
		}
	}
	_getFilteredKeyPath() {
		return this._getRawKeyPath().filter((keyPath) => keyPath.type !== TRANSLATION);
	}
	_updateEditedValue(manager) {
		const filteredKeyPath = this._getFilteredKeyPath();
		if (!this._dictionaryKey || filteredKeyPath.length === 0) {
			this._editedValue = void 0;
			this._render();
			return;
		}
		const rawKeyPath = this._getRawKeyPath();
		const lastStepType = rawKeyPath[rawKeyPath.length - 1]?.type;
		if (lastStepType === "markdown" || lastStepType === "html" || lastStepType === "insertion" || lastStepType === "file") {
			this._editedValue = void 0;
			this._render();
			return;
		}
		let value = manager.getContentValue(this._dictionaryKey, filteredKeyPath);
		if (value !== null && value !== void 0 && typeof value === "object" && value.nodeType === "translation") {
			const locale = manager.currentLocale.value;
			value = locale ? value[TRANSLATION][locale] : void 0;
		}
		this._editedValue = value;
		this._render();
	}
	_updateIsSelected(focusedContent) {
		if (!focusedContent) {
			this._isSelected = false;
			this._updateSelectorAttr();
			return;
		}
		const keyPath = this._getFilteredKeyPath();
		const wasSelected = this._isSelected;
		this._isSelected = focusedContent.dictionaryKey === this._dictionaryKey && (focusedContent.keyPath?.length ?? 0) > 0 && isSameKeyPath(focusedContent.keyPath ?? [], keyPath);
		this._updateSelectorAttr();
		if (this._isSelected && !wasSelected) this._scrollIntoViewIfNeeded();
	}
	_scrollIntoViewIfNeeded() {
		try {
			let rect;
			if (this._selector) {
				const innerWrapper = this._selector.shadowRoot?.querySelector(".wrapper");
				if (innerWrapper) {
					const r = innerWrapper.getBoundingClientRect();
					if (r.width > 0 || r.height > 0) rect = r;
				}
			}
			if (!rect && this.childNodes.length > 0) {
				const range = document.createRange();
				range.selectNodeContents(this);
				const r = range.getBoundingClientRect();
				if (r.width > 0 || r.height > 0) rect = r;
			}
			if (!rect) rect = this.getBoundingClientRect();
			const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
			const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
			if (!(rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.right > 0 && rect.top < viewportHeight && rect.left < viewportWidth)) {
				const scrollY = window.scrollY ?? document.documentElement.scrollTop;
				const targetScrollY = rect.top + scrollY - viewportHeight * .25;
				window.scrollTo({
					top: Math.max(0, targetScrollY),
					behavior: "smooth"
				});
			}
		} catch {}
	}
	_updateSelectorAttr() {
		if (!this._selector) return;
		if (this._isSelected) this._selector.setAttribute("is-selecting", "");
		else this._selector.removeAttribute("is-selecting");
	}
	_subscribeToManager() {
		const manager = getGlobalEditorManager();
		if (manager) this._setupManagerSubscriptions(manager);
		this._unsubManager = onGlobalEditorManagerChange((m) => {
			this._unsubEnabled?.();
			this._unsubFocused?.();
			this._unsubEditedContent?.();
			this._unsubEnabled = null;
			this._unsubFocused = null;
			this._unsubEditedContent = null;
			if (m) this._setupManagerSubscriptions(m);
			else {
				this._editorEnabled = false;
				this._isSelected = false;
				this._editedValue = void 0;
				this._render();
			}
		});
	}
	_setupManagerSubscriptions(manager) {
		this._editorEnabled = manager.editorEnabled.value ?? false;
		this._updateIsSelected(manager.focusedContent.value);
		this._updateEditedValue(manager);
		const handleEnabledChange = (e) => {
			this._editorEnabled = e.detail;
			this._render();
		};
		const handleFocusedChange = (e) => {
			this._updateIsSelected(e.detail);
		};
		const handleEditedContentChange = () => {
			this._updateEditedValue(manager);
		};
		manager.editorEnabled.addEventListener("change", handleEnabledChange);
		manager.focusedContent.addEventListener("change", handleFocusedChange);
		manager.editedContent.addEventListener("change", handleEditedContentChange);
		this._unsubEnabled = () => manager.editorEnabled.removeEventListener("change", handleEnabledChange);
		this._unsubFocused = () => manager.focusedContent.removeEventListener("change", handleFocusedChange);
		this._unsubEditedContent = () => manager.editedContent.removeEventListener("change", handleEditedContentChange);
	}
	_handlePress(e) {
		e.stopPropagation();
		const manager = getGlobalEditorManager();
		if (!manager) return;
		manager.focusedContent.set({
			dictionaryKey: this._dictionaryKey,
			keyPath: this._getFilteredKeyPath()
		});
	}
	_handleHover(e) {
		e.stopPropagation();
		getGlobalEditorManager()?.messenger.send(`INTLAYER_HOVERED_CONTENT_CHANGED/post`, {
			dictionaryKey: this._dictionaryKey,
			keyPath: this._getFilteredKeyPath()
		});
	}
	_handleUnhover(e) {
		e.stopPropagation();
		getGlobalEditorManager()?.messenger.send(`INTLAYER_HOVERED_CONTENT_CHANGED/post`, null);
	}
	_render() {
		const useWrapper = this._isInIframe && this._editorEnabled;
		const editedValue = this._editedValue;
		const newState = !useWrapper ? "simple" : typeof editedValue === "string" || typeof editedValue === "number" || typeof editedValue === "boolean" ? "wrapped-text" : "wrapped-slot";
		if (this._renderState !== newState) {
			this._rebuildContent(newState);
			return;
		}
		if (newState !== "simple" && this._selector) {
			this._updateSelectorAttr();
			if (newState === "wrapped-text" && this._selector.firstChild?.nodeType === Node.TEXT_NODE) this._selector.firstChild.data = String(editedValue);
		}
	}
	_rebuildContent(state) {
		const shadow = this.shadowRoot;
		while (shadow.childNodes.length > 1) shadow.removeChild(shadow.lastChild);
		this._selector = null;
		if (state === "simple") shadow.appendChild(document.createElement("slot"));
		else {
			const selector = document.createElement("intlayer-content-selector");
			this._selector = selector;
			if (this._isSelected) selector.setAttribute("is-selecting", "");
			selector.addEventListener("intlayer:press", (e) => this._handlePress(e));
			selector.addEventListener("intlayer:hover", (e) => this._handleHover(e));
			selector.addEventListener("intlayer:unhover", (e) => this._handleUnhover(e));
			if (state === "wrapped-text") selector.appendChild(document.createTextNode(String(this._editedValue)));
			else selector.appendChild(document.createElement("slot"));
			shadow.appendChild(selector);
		}
		this._renderState = state;
	}
};
var defineIntlayerContentSelectorWrapper = () => {
	if (typeof customElements === "undefined") return;
	if (!customElements.get("intlayer-content-selector-wrapper")) customElements.define("intlayer-content-selector-wrapper", IntlayerContentSelectorWrapperElement);
};
var _HTMLElement$2 = typeof HTMLElement !== "undefined" ? HTMLElement : class {};
var IntlayerEditedContentElement = class extends _HTMLElement$2 {
	_dictionaryKey = "";
	_keyPathJson = "[]";
	_locale = "";
	_editedText = null;
	_unsubManager = null;
	_unsubEditedContent = null;
	_selectorWrapper;
	_slot;
	static get observedAttributes() {
		return [
			"dictionary-key",
			"key-path",
			"locale"
		];
	}
	get dictionaryKey() {
		return this._dictionaryKey;
	}
	set dictionaryKey(v) {
		this._dictionaryKey = v;
		this._selectorWrapper.setAttribute("dictionary-key", v);
	}
	get keyPathJson() {
		return this._keyPathJson;
	}
	set keyPathJson(v) {
		this._keyPathJson = v;
		this._selectorWrapper.setAttribute("key-path", v);
	}
	get locale() {
		return this._locale;
	}
	set locale(v) {
		this._locale = v;
	}
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: "open" });
		const style = document.createElement("style");
		style.textContent = ":host { display: contents; }";
		shadow.appendChild(style);
		this._selectorWrapper = document.createElement("intlayer-content-selector-wrapper");
		this._slot = document.createElement("slot");
		this._selectorWrapper.appendChild(this._slot);
		shadow.appendChild(this._selectorWrapper);
	}
	attributeChangedCallback(name, _oldVal, newVal) {
		const val = newVal ?? "";
		if (name === "dictionary-key") {
			this._dictionaryKey = val;
			this._selectorWrapper.setAttribute("dictionary-key", val);
		} else if (name === "key-path") {
			this._keyPathJson = val || "[]";
			this._selectorWrapper.setAttribute("key-path", this._keyPathJson);
		} else if (name === "locale") this._locale = val;
	}
	connectedCallback() {
		this._subscribeToManager();
	}
	disconnectedCallback() {
		this._teardown();
	}
	_teardown() {
		this._unsubManager?.();
		this._unsubEditedContent?.();
		this._unsubManager = null;
		this._unsubEditedContent = null;
	}
	_getKeyPath() {
		try {
			return JSON.parse(this._keyPathJson);
		} catch {
			return [];
		}
	}
	_render() {
		while (this._selectorWrapper.firstChild) this._selectorWrapper.removeChild(this._selectorWrapper.firstChild);
		if (this._editedText !== null) this._selectorWrapper.appendChild(document.createTextNode(this._editedText));
		else this._selectorWrapper.appendChild(this._slot);
	}
	_resolveEditedText(manager) {
		const keyPath = this._getKeyPath();
		const editedValue = manager.getContentValue(this._dictionaryKey, keyPath);
		if (editedValue === void 0 || editedValue === null) {
			this._editedText = null;
			this._render();
			return;
		}
		if (typeof editedValue === "string" || typeof editedValue === "number") {
			this._editedText = String(editedValue);
			this._render();
			return;
		}
		if (typeof editedValue === "object") {
			const locale = this._locale || void 0;
			const transformed = getContent(editedValue, {
				locale,
				dictionaryKey: this._dictionaryKey,
				keyPath
			}, getBasePlugins(locale));
			if (typeof transformed === "string" || typeof transformed === "number") this._editedText = String(transformed);
			else {
				console.error(`[intlayer-edited-content] Incorrect edited content format. Expected string. Value: ${JSON.stringify(transformed)}`);
				this._editedText = null;
			}
			this._render();
			return;
		}
		this._editedText = null;
		this._render();
	}
	_setupManagerSubscriptions(manager) {
		this._resolveEditedText(manager);
		const handleChange = () => this._resolveEditedText(manager);
		manager.editedContent.addEventListener("change", handleChange);
		this._unsubEditedContent = () => manager.editedContent.removeEventListener("change", handleChange);
	}
	_subscribeToManager() {
		const manager = getGlobalEditorManager();
		if (manager) this._setupManagerSubscriptions(manager);
		this._unsubManager = onGlobalEditorManagerChange((m) => {
			this._unsubEditedContent?.();
			this._unsubEditedContent = null;
			if (m) this._setupManagerSubscriptions(m);
			else {
				this._editedText = null;
				this._render();
			}
		});
	}
};
var defineIntlayerEditedContent = () => {
	if (typeof customElements === "undefined") return;
	if (!customElements.get("intlayer-edited-content")) customElements.define("intlayer-edited-content", IntlayerEditedContentElement);
};
var randomUUID = () => Math.random().toString(36).slice(2);
var CrossFrameMessenger = class {
	senderId;
	_config;
	_subscribers = /* @__PURE__ */ new Map();
	_windowHandler = null;
	_seenMessageIds = /* @__PURE__ */ new Set();
	_warnedRejectedOrigins = /* @__PURE__ */ new Set();
	constructor(config) {
		this._config = config;
		this.senderId = randomUUID();
	}
	start() {
		if (typeof window === "undefined") return;
		if (this._windowHandler) return;
		this._windowHandler = (event) => {
			this._handleMessage(event);
		};
		window.addEventListener("message", this._windowHandler);
	}
	stop() {
		if (this._windowHandler) {
			window.removeEventListener("message", this._windowHandler);
			this._windowHandler = null;
		}
	}
	send(type, data) {
		const payload = {
			type,
			data,
			senderId: this.senderId,
			messageId: randomUUID()
		};
		for (const origin of this._config.allowedOrigins) if (origin) this._config.postMessageFn(payload, origin);
	}
	subscribe(type, handler) {
		if (!this._subscribers.has(type)) this._subscribers.set(type, /* @__PURE__ */ new Set());
		this._subscribers.get(type).add(handler);
		return () => {
			this._subscribers.get(type)?.delete(handler);
		};
	}
	_handleMessage(event) {
		const payload = event.data;
		if (!payload || typeof payload !== "object") return;
		const { type, data, senderId: msgSenderId, messageId } = payload;
		if (!type || typeof type !== "string") return;
		if (msgSenderId === this.senderId) return;
		if (messageId) {
			if (this._seenMessageIds.has(messageId)) return;
			this._seenMessageIds.add(messageId);
			if (this._seenMessageIds.size > 200) this._seenMessageIds.clear();
		}
		const { allowedOrigins } = this._config;
		if (!(!allowedOrigins || allowedOrigins.length === 0 || allowedOrigins.includes("*") || allowedOrigins.filter((url) => Boolean(url) && url !== "").some((url) => compareUrls(url, event.origin)))) {
			if (type.startsWith("INTLAYER") && !this._warnedRejectedOrigins.has(event.origin)) {
				this._warnedRejectedOrigins.add(event.origin);
				console.warn(`[intlayer] Ignored editor message "${type}" from origin "${event.origin}" — not in allowed origins [${allowedOrigins.join(", ")}]. Check the editor.editorURL / editor.cmsURL configuration.`);
			}
			return;
		}
		const handlers = this._subscribers.get(type);
		if (handlers) for (const handler of handlers) handler(data, msgSenderId);
	}
};
var CrossFrameStateManager = class extends EventTarget {
	_value;
	_key;
	_messenger;
	_options;
	_unsubscribers = [];
	constructor(key, messenger, options = {}) {
		super();
		this._key = key;
		this._messenger = messenger;
		this._options = {
			emit: options.emit ?? true,
			receive: options.receive ?? true
		};
		if (options.initialValue !== void 0) this._value = options.initialValue;
	}
	get value() {
		return this._value;
	}
	set(newValue) {
		const resolvedValue = typeof newValue === "function" ? newValue(this._value) : newValue;
		this._value = resolvedValue;
		this.dispatchEvent(new CustomEvent("change", { detail: resolvedValue }));
		if (this._options.emit) this._messenger.send(`${this._key}/post`, resolvedValue);
	}
	start() {
		if (this._options.receive) {
			const unsub = this._messenger.subscribe(`${this._key}/post`, (data) => {
				this._value = data;
				this.dispatchEvent(new CustomEvent("change", { detail: data }));
			});
			this._unsubscribers.push(unsub);
		}
		if (this._options.emit) {
			const unsub = this._messenger.subscribe(`${this._key}/get`, (_, originSenderId) => {
				if (originSenderId === this._messenger.senderId) return;
				if (this._value === void 0) return;
				this._messenger.send(`${this._key}/post`, this._value);
			});
			this._unsubscribers.push(unsub);
		}
		if (this._options.receive && this._value === void 0) this._messenger.send(`${this._key}/get`);
	}
	stop() {
		for (const unsub of this._unsubscribers) unsub();
		this._unsubscribers.length = 0;
	}
	postCurrentValue() {
		if (this._value !== void 0) this._messenger.send(`${this._key}/post`, this._value);
	}
};
var BUS_KEY$1 = "__intlayer_edited_content_bus__";
var BUS_EVENTS_KEY$1 = "__intlayer_edited_content_bus_events__";
var getBusTarget$1 = () => {
	if (typeof window === "undefined") return new EventTarget();
	const w = window;
	if (!w[BUS_EVENTS_KEY$1]) w[BUS_EVENTS_KEY$1] = new EventTarget();
	return w[BUS_EVENTS_KEY$1];
};
var getGlobalEditedContent = () => {
	if (typeof window === "undefined") return {};
	return window[BUS_KEY$1] ?? {};
};
var setGlobalEditedContent = (content, sourceId) => {
	if (typeof window !== "undefined") window[BUS_KEY$1] = content;
	getBusTarget$1().dispatchEvent(new CustomEvent("change", { detail: {
		content,
		sourceId
	} }));
};
var subscribeToGlobalEditedContent = (cb) => {
	const handler = (e) => {
		const { content, sourceId } = e.detail;
		cb(content, sourceId);
	};
	const target = getBusTarget$1();
	target.addEventListener("change", handler);
	return () => target.removeEventListener("change", handler);
};
var BUS_KEY = "__intlayer_focused_content_bus__";
var BUS_EVENTS_KEY = "__intlayer_focused_content_bus_events__";
var getBusTarget = () => {
	if (typeof window === "undefined") return new EventTarget();
	const w = window;
	if (!w[BUS_EVENTS_KEY]) w[BUS_EVENTS_KEY] = new EventTarget();
	return w[BUS_EVENTS_KEY];
};
var getGlobalFocusedContent = () => {
	if (typeof window === "undefined") return void 0;
	const w = window;
	if (!w.__intlayer_focused_content_bus_set__) return void 0;
	return w[BUS_KEY] ?? null;
};
var setGlobalFocusedContent = (content, sourceId) => {
	if (typeof window !== "undefined") {
		const w = window;
		w[BUS_KEY] = content;
		w.__intlayer_focused_content_bus_set__ = true;
	}
	getBusTarget().dispatchEvent(new CustomEvent("change", { detail: {
		content,
		sourceId
	} }));
};
var subscribeToGlobalFocusedContent = (cb) => {
	const handler = (e) => {
		const { content, sourceId } = e.detail;
		cb(content, sourceId);
	};
	const target = getBusTarget();
	target.addEventListener("change", handler);
	return () => target.removeEventListener("change", handler);
};
var IframeClickInterceptor = class {
	_messenger;
	_mousedownHandler = null;
	_unsubscribeMerge = null;
	constructor(messenger) {
		this._messenger = messenger;
	}
	startInterceptor() {
		if (typeof window === "undefined") return;
		this._mousedownHandler = () => {
			this._messenger.send("INTLAYER_IFRAME_CLICKED");
		};
		window.addEventListener("mousedown", this._mousedownHandler);
	}
	startMerger() {
		this._unsubscribeMerge = this._messenger.subscribe("INTLAYER_IFRAME_CLICKED", mergeIframeClick);
	}
	stopInterceptor() {
		if (this._mousedownHandler) {
			window.removeEventListener("mousedown", this._mousedownHandler);
			this._mousedownHandler = null;
		}
	}
	stopMerger() {
		this._unsubscribeMerge?.();
		this._unsubscribeMerge = null;
	}
};
var UrlStateManager = class {
	_messenger;
	_originalPushState = null;
	_originalReplaceState = null;
	_listeners = [];
	constructor(messenger) {
		this._messenger = messenger;
	}
	start() {
		if (typeof window === "undefined") return;
		const updateURLState = () => {
			this._messenger.send(`INTLAYER_URL_CHANGE/post`, window.location.pathname);
		};
		this._originalPushState = history.pushState;
		this._originalReplaceState = history.replaceState;
		const injectLocationChange = (method) => function(...args) {
			method.apply(this, args);
			window.dispatchEvent(new Event("locationchange"));
		};
		history.pushState = injectLocationChange(this._originalPushState);
		history.replaceState = injectLocationChange(this._originalReplaceState);
		for (const eventName of [
			"locationchange",
			"popstate",
			"hashchange",
			"load"
		]) {
			const listener = updateURLState;
			window.addEventListener(eventName, listener);
			this._listeners.push([eventName, listener]);
		}
		updateURLState();
	}
	stop() {
		if (typeof window === "undefined") return;
		for (const [eventName, listener] of this._listeners) window.removeEventListener(eventName, listener);
		this._listeners = [];
		if (this._originalPushState) {
			history.pushState = this._originalPushState;
			this._originalPushState = null;
		}
		if (this._originalReplaceState) {
			history.replaceState = this._originalReplaceState;
			this._originalReplaceState = null;
		}
	}
};
var EditorStateManager = class {
	messenger;
	editorEnabled;
	focusedContent;
	localeDictionaries;
	editedContent;
	configuration;
	currentLocale;
	displayedDictionaryKeys;
	_urlManager;
	_iframeInterceptor;
	_mode;
	_configuration;
	_unsubAreYouThere = null;
	_unsubActivate = null;
	_unsubClientReady = null;
	_displayedKeysObserver = null;
	_displayedKeysTimer = null;
	_displayedKeysListeners = [];
	_editedContentFromBus = false;
	_unsubGlobalEditedContent = null;
	_editedContentBusHandler = null;
	_focusedContentFromBus = false;
	_unsubGlobalFocusedContent = null;
	_focusedContentBusHandler = null;
	constructor(config) {
		this._mode = config.mode;
		this._configuration = config.configuration;
		this.messenger = new CrossFrameMessenger(config.messenger);
		this.editorEnabled = new CrossFrameStateManager("INTLAYER_EDITOR_ENABLED", this.messenger, {
			emit: false,
			receive: true,
			initialValue: false
		});
		this.focusedContent = new CrossFrameStateManager("INTLAYER_FOCUSED_CONTENT_CHANGED", this.messenger, {
			emit: true,
			receive: true,
			initialValue: null
		});
		this.localeDictionaries = new CrossFrameStateManager("INTLAYER_LOCALE_DICTIONARIES_CHANGED", this.messenger);
		this.editedContent = new CrossFrameStateManager("INTLAYER_EDITED_CONTENT_CHANGED", this.messenger);
		this.configuration = new CrossFrameStateManager("INTLAYER_CONFIGURATION", this.messenger, {
			emit: true,
			receive: false,
			...config.configuration ? { initialValue: config.configuration } : {}
		});
		this.currentLocale = new CrossFrameStateManager("INTLAYER_CURRENT_LOCALE", this.messenger, {
			emit: config.mode === "client",
			receive: config.mode === "editor"
		});
		this.displayedDictionaryKeys = new CrossFrameStateManager("INTLAYER_DISPLAYED_DICTIONARY_KEYS", this.messenger, {
			emit: config.mode === "client",
			receive: config.mode === "editor",
			initialValue: []
		});
		this._urlManager = new UrlStateManager(this.messenger);
		this._iframeInterceptor = new IframeClickInterceptor(this.messenger);
	}
	start() {
		this.messenger.start();
		this.editorEnabled.start();
		this.focusedContent.start();
		this.localeDictionaries.start();
		this.editedContent.start();
		this.configuration.start();
		this.currentLocale.start();
		this.displayedDictionaryKeys.start();
		this._startEditedContentBusSync();
		this._startFocusedContentBusSync();
		if (this._mode === "client") {
			this._urlManager.start();
			this._iframeInterceptor.startInterceptor();
			this._loadDictionaries();
			this._startDisplayedDictionariesTracking();
			this.messenger.send(`INTLAYER_EDITED_CONTENT_CHANGED/get`);
			if (this._configuration?.editor?.enabled !== false) this._setupActivationHandshake();
		} else {
			this._iframeInterceptor.startMerger();
			this._setupEditorHandshake();
		}
	}
	stop() {
		this._unsubAreYouThere?.();
		this._unsubActivate?.();
		this._unsubClientReady?.();
		this._unsubAreYouThere = null;
		this._unsubActivate = null;
		this._unsubClientReady = null;
		this.messenger.stop();
		this.editorEnabled.stop();
		this.focusedContent.stop();
		this.localeDictionaries.stop();
		this.editedContent.stop();
		this.configuration.stop();
		this.currentLocale.stop();
		this.displayedDictionaryKeys.stop();
		this._stopDisplayedDictionariesTracking();
		this._stopEditedContentBusSync();
		this._stopFocusedContentBusSync();
		this._urlManager.stop();
		this._iframeInterceptor.stopInterceptor();
		this._iframeInterceptor.stopMerger();
	}
	pingClient() {
		if (this._mode !== "editor") return;
		this.messenger.send("INTLAYER_ARE_YOU_THERE");
	}
	setFocusedContentKeyPath(keyPath) {
		const filtered = keyPath.filter((key) => key.type !== TRANSLATION);
		const prev = this.focusedContent.value;
		if (!prev) return;
		this.focusedContent.set({
			...prev,
			keyPath: filtered
		});
	}
	setLocaleDictionary(dictionary) {
		if (!dictionary.localId) return;
		const current = this.localeDictionaries.value ?? {};
		this.localeDictionaries.set({
			...current,
			[dictionary.localId]: dictionary
		});
	}
	setEditedDictionary(newDict) {
		if (!newDict.localId) {
			console.error("setEditedDictionary: missing localId", newDict);
			return;
		}
		const current = this.editedContent.value ?? {};
		this.editedContent.set({
			...current,
			[newDict.localId]: newDict
		});
	}
	setEditedContent(localDictionaryId, newValue) {
		const current = this.editedContent.value ?? {};
		this.editedContent.set({
			...current,
			[localDictionaryId]: {
				...current[localDictionaryId],
				content: newValue
			}
		});
	}
	addContent(localDictionaryId, newValue, keyPath = [], overwrite = true) {
		const current = this.editedContent.value ?? {};
		const originalContent = (this.localeDictionaries.value ?? {})[localDictionaryId]?.content;
		const currentContent = structuredClone(current[localDictionaryId]?.content ?? originalContent);
		let newKeyPath = keyPath;
		if (!overwrite) {
			let index = 0;
			const otherKeyPath = keyPath.slice(0, -1);
			const lastKeyPath = keyPath[keyPath.length - 1];
			let finalKey = lastKeyPath.key;
			while (typeof getContentNodeByKeyPath(currentContent, newKeyPath) !== "undefined") {
				index++;
				finalKey = index === 0 ? lastKeyPath.key : `${lastKeyPath.key} (${index})`;
				newKeyPath = [...otherKeyPath, {
					...lastKeyPath,
					key: finalKey
				}];
			}
		}
		const updatedContent = editDictionaryByKeyPath(currentContent, newKeyPath, newValue);
		this.editedContent.set({
			...current,
			[localDictionaryId]: {
				...current[localDictionaryId],
				content: updatedContent
			}
		});
	}
	renameContent(localDictionaryId, newKey, keyPath = []) {
		const current = this.editedContent.value ?? {};
		const originalContent = (this.localeDictionaries.value ?? {})[localDictionaryId]?.content;
		const updated = renameContentNodeByKeyPath(structuredClone(current[localDictionaryId]?.content ?? originalContent), newKey, keyPath);
		this.editedContent.set({
			...current,
			[localDictionaryId]: {
				...current[localDictionaryId],
				content: updated
			}
		});
	}
	removeContent(localDictionaryId, keyPath) {
		const current = this.editedContent.value ?? {};
		const originalContent = (this.localeDictionaries.value ?? {})[localDictionaryId]?.content;
		const restored = editDictionaryByKeyPath(structuredClone(current[localDictionaryId]?.content ?? originalContent), keyPath, getContentNodeByKeyPath(originalContent, keyPath));
		this.editedContent.set({
			...current,
			[localDictionaryId]: {
				...current[localDictionaryId],
				content: restored
			}
		});
	}
	restoreContent(localDictionaryId) {
		const updated = { ...this.editedContent.value ?? {} };
		delete updated[localDictionaryId];
		this.editedContent.set(updated);
	}
	clearContent(localDictionaryId) {
		const filtered = { ...this.editedContent.value ?? {} };
		delete filtered[localDictionaryId];
		this.editedContent.set(filtered);
	}
	clearAllContent() {
		this.editedContent.set({});
	}
	getContentValue(localDictionaryIdOrKey, keyPath) {
		const edited = this.editedContent.value;
		if (!edited) return void 0;
		const filteredKeyPath = keyPath.filter((key) => key.type !== TRANSLATION);
		const localeDicts = this.localeDictionaries.value;
		if (localDictionaryIdOrKey.includes(":local:") || localDictionaryIdOrKey.includes(":remote:")) {
			if (localeDicts && !(localDictionaryIdOrKey in localeDicts)) return;
			return getContentNodeByKeyPath(edited[localDictionaryIdOrKey]?.content ?? {}, filteredKeyPath, this.currentLocale.value);
		}
		const matchingIds = Object.keys(edited).filter((key) => key.startsWith(`${localDictionaryIdOrKey}:`) && (!localeDicts || key in localeDicts));
		for (const localId of matchingIds) {
			const node = getContentNodeByKeyPath(edited[localId]?.content ?? {}, filteredKeyPath, this.currentLocale.value);
			if (node) return node;
		}
	}
	_startEditedContentBusSync() {
		this._editedContentBusHandler = (e) => {
			if (this._editedContentFromBus) return;
			const content = e.detail;
			setGlobalEditedContent(content, this.messenger.senderId);
		};
		this.editedContent.addEventListener("change", this._editedContentBusHandler);
		this._unsubGlobalEditedContent = subscribeToGlobalEditedContent((content, sourceId) => {
			if (sourceId === this.messenger.senderId) return;
			this._editedContentFromBus = true;
			this.editedContent.set(content);
			this._editedContentFromBus = false;
		});
		const existing = getGlobalEditedContent();
		if (Object.keys(existing).length > 0) {
			this._editedContentFromBus = true;
			this.editedContent.set(existing);
			this._editedContentFromBus = false;
		}
	}
	_stopEditedContentBusSync() {
		if (this._editedContentBusHandler) {
			this.editedContent.removeEventListener("change", this._editedContentBusHandler);
			this._editedContentBusHandler = null;
		}
		this._unsubGlobalEditedContent?.();
		this._unsubGlobalEditedContent = null;
	}
	_startFocusedContentBusSync() {
		this._focusedContentBusHandler = (e) => {
			if (this._focusedContentFromBus) return;
			const content = e.detail;
			setGlobalFocusedContent(content, this.messenger.senderId);
		};
		this.focusedContent.addEventListener("change", this._focusedContentBusHandler);
		this._unsubGlobalFocusedContent = subscribeToGlobalFocusedContent((content, sourceId) => {
			if (sourceId === this.messenger.senderId) return;
			this._focusedContentFromBus = true;
			this.focusedContent.set(content);
			this._focusedContentFromBus = false;
		});
		const existing = getGlobalFocusedContent();
		if (existing !== void 0) {
			this._focusedContentFromBus = true;
			this.focusedContent.set(existing);
			this._focusedContentFromBus = false;
		}
	}
	_stopFocusedContentBusSync() {
		if (this._focusedContentBusHandler) {
			this.focusedContent.removeEventListener("change", this._focusedContentBusHandler);
			this._focusedContentBusHandler = null;
		}
		this._unsubGlobalFocusedContent?.();
		this._unsubGlobalFocusedContent = null;
	}
	_scanDisplayedDictionaryKeys() {
		if (typeof document === "undefined") return;
		const elements = document.querySelectorAll("intlayer-content-selector-wrapper[dictionary-key]");
		const keys = Array.from(new Set(Array.from(elements).map((el) => el.getAttribute("dictionary-key") ?? "").filter(Boolean)));
		this.displayedDictionaryKeys.set(keys);
	}
	_startDisplayedDictionariesTracking() {
		if (typeof document === "undefined" || typeof MutationObserver === "undefined") return;
		const schedule = () => {
			if (this._displayedKeysTimer) clearTimeout(this._displayedKeysTimer);
			this._displayedKeysTimer = setTimeout(() => this._scanDisplayedDictionaryKeys(), 100);
		};
		this._displayedKeysObserver = new MutationObserver(schedule);
		this._displayedKeysObserver.observe(document.body, {
			childList: true,
			subtree: true
		});
		for (const evt of ["locationchange", "popstate"]) {
			const listener = schedule;
			window.addEventListener(evt, listener);
			this._displayedKeysListeners.push([evt, listener]);
		}
		this._scanDisplayedDictionaryKeys();
	}
	_stopDisplayedDictionariesTracking() {
		this._displayedKeysObserver?.disconnect();
		this._displayedKeysObserver = null;
		if (this._displayedKeysTimer) {
			clearTimeout(this._displayedKeysTimer);
			this._displayedKeysTimer = null;
		}
		for (const [evt, listener] of this._displayedKeysListeners) window.removeEventListener(evt, listener);
		this._displayedKeysListeners = [];
	}
	_setupEditorHandshake() {
		this._unsubClientReady = this.messenger.subscribe("INTLAYER_CLIENT_READY", () => {
			this.editorEnabled.set(true);
			this.messenger.send("INTLAYER_EDITOR_ACTIVATE");
		});
		this.messenger.send("INTLAYER_ARE_YOU_THERE");
	}
	_setupActivationHandshake() {
		this.messenger.send("INTLAYER_CLIENT_READY");
		this._unsubAreYouThere = this.messenger.subscribe("INTLAYER_ARE_YOU_THERE", () => {
			this.messenger.send("INTLAYER_CLIENT_READY");
		});
		this._unsubActivate = this.messenger.subscribe("INTLAYER_EDITOR_ACTIVATE", () => {
			this.editorEnabled.set(true);
			this._broadcastData();
		});
	}
	_broadcastData() {
		const configVal = this.configuration.value;
		if (configVal) this.messenger.send(`INTLAYER_CONFIGURATION/post`, configVal);
		const localeVal = this.currentLocale.value;
		if (localeVal) this.messenger.send(`INTLAYER_CURRENT_LOCALE/post`, localeVal);
		const dicts = this.localeDictionaries.value;
		if (dicts) this.messenger.send(`INTLAYER_LOCALE_DICTIONARIES_CHANGED/post`, dicts);
	}
	async _loadDictionaries() {
		try {
			const unmergedDictionaries = (await import("./index.browser-CPfTICg8.js")).getUnmergedDictionaries();
			const dictionariesList = Object.fromEntries(Object.values(unmergedDictionaries).flat().map((dictionary) => [dictionary.localId, dictionary]));
			this.localeDictionaries.set(dictionariesList);
			if (this.editorEnabled.value) this._broadcastData();
		} catch (e) {
			console.warn("[intlayer] Failed to load unmerged dictionaries:", e);
		}
	}
};
var _HTMLElement$1 = typeof HTMLElement !== "undefined" ? HTMLElement : class {};
var IntlayerEditorElement = class extends _HTMLElement$1 {
	_configuration = void 0;
	_locale = void 0;
	_initialized = false;
	_unsubManager = null;
	static get observedAttributes() {
		return ["locale"];
	}
	get configuration() {
		return this._configuration;
	}
	set configuration(v) {
		this._configuration = v;
		if (!this._initialized) this._init();
	}
	get locale() {
		return this._locale;
	}
	set locale(v) {
		this._locale = v;
		if (v && this._initialized) this._syncLocale(v);
	}
	attributeChangedCallback(name, _oldVal, newVal) {
		if (name === "locale" && newVal !== null) {
			this._locale = newVal;
			if (this._initialized) this._syncLocale(newVal);
		}
	}
	connectedCallback() {
		this._init();
	}
	disconnectedCallback() {
		this._unsubManager?.();
		this._unsubManager = null;
		if (this._initialized) {
			stopEditorClient();
			this._initialized = false;
		}
	}
	_init() {
		if (this._initialized) return;
		initEditorClient();
		this._initialized = true;
		if (this._locale) this._syncLocale(this._locale);
	}
	_syncLocale(locale) {
		const manager = getGlobalEditorManager();
		if (manager) manager.currentLocale.set(locale);
		else {
			this._unsubManager?.();
			this._unsubManager = onGlobalEditorManagerChange((m) => {
				if (m) {
					this._unsubManager?.();
					this._unsubManager = null;
					m.currentLocale.set(locale);
				}
			});
		}
	}
};
var defineIntlayerEditorElement = () => {
	if (typeof customElements === "undefined") return;
	if (!customElements.get("intlayer-editor")) customElements.define("intlayer-editor", IntlayerEditorElement);
};
var DEFAULT_PRESS_DURATION = 250;
var STYLES = `
  :host {
    display: contents;
  }

  .wrapper {
    display: inline-block;
    cursor: pointer;
    user-select: none;
    border-radius: 0.375rem;
    outline-width: 2px;
    outline-offset: 4px;
    outline-style: solid;
    outline-color: transparent;
    transition: all 100ms 50ms ease-in-out;
  }

  .wrapper[data-active] {
    outline-color: inherit;
  }
`;
var _HTMLElement = typeof HTMLElement !== "undefined" ? HTMLElement : class {};
var IntlayerContentSelectorElement = class extends _HTMLElement {
	_isSelecting = false;
	_pressDuration = DEFAULT_PRESS_DURATION;
	_isHovered = false;
	_isSelectingState = false;
	_wrapper;
	_pressTimer = null;
	_clickOutsideHandler = null;
	static get observedAttributes() {
		return ["is-selecting", "press-duration"];
	}
	get isSelecting() {
		return this._isSelecting;
	}
	set isSelecting(v) {
		this._isSelecting = v;
		this._updateActiveState();
	}
	get pressDuration() {
		return this._pressDuration;
	}
	set pressDuration(v) {
		this._pressDuration = v;
	}
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: "open" });
		const style = document.createElement("style");
		style.textContent = STYLES;
		shadow.appendChild(style);
		const wrapper = document.createElement("span");
		wrapper.className = "wrapper";
		wrapper.setAttribute("role", "button");
		wrapper.setAttribute("tabindex", "0");
		wrapper.appendChild(document.createElement("slot"));
		shadow.appendChild(wrapper);
		this._wrapper = wrapper;
		wrapper.addEventListener("mousedown", () => this._handleMouseDown());
		wrapper.addEventListener("mouseup", () => this._handleMouseUpOrLeave());
		wrapper.addEventListener("mouseleave", () => this._handleMouseUpOrLeave());
		wrapper.addEventListener("mouseenter", () => this._handleMouseEnter());
		wrapper.addEventListener("click", (e) => this._handleClick(e));
		wrapper.addEventListener("touchstart", () => this._handleMouseDown());
		wrapper.addEventListener("touchend", () => this._handleMouseUpOrLeave());
		wrapper.addEventListener("touchcancel", () => this._handleMouseUpOrLeave());
		wrapper.addEventListener("blur", () => this._handleBlur());
	}
	attributeChangedCallback(name, _oldVal, newVal) {
		if (name === "is-selecting") {
			this._isSelecting = newVal !== null;
			this._updateActiveState();
		} else if (name === "press-duration") this._pressDuration = newVal !== null ? parseInt(newVal, 10) : DEFAULT_PRESS_DURATION;
	}
	connectedCallback() {
		this._clickOutsideHandler = (e) => {
			if (!e.composedPath().includes(this)) {
				this._isSelectingState = false;
				this._dispatch("intlayer:click-outside");
				this._updateActiveState();
			}
		};
		document.addEventListener("mousedown", this._clickOutsideHandler);
	}
	disconnectedCallback() {
		if (this._clickOutsideHandler) {
			document.removeEventListener("mousedown", this._clickOutsideHandler);
			this._clickOutsideHandler = null;
		}
		this._clearPressTimer();
	}
	_updateActiveState() {
		if (this._isSelecting || this._isSelectingState || this._isHovered) this._wrapper.setAttribute("data-active", "");
		else this._wrapper.removeAttribute("data-active");
	}
	_clearPressTimer() {
		if (this._pressTimer !== null) {
			clearTimeout(this._pressTimer);
			this._pressTimer = null;
		}
	}
	_dispatch(eventName) {
		this.dispatchEvent(new CustomEvent(eventName, {
			bubbles: true,
			composed: true
		}));
	}
	_handleMouseDown() {
		this._clearPressTimer();
		this._pressTimer = setTimeout(() => {
			this._isSelectingState = true;
			this._updateActiveState();
			this._dispatch("intlayer:press");
		}, this._pressDuration);
	}
	_handleMouseEnter() {
		this._isHovered = true;
		this._updateActiveState();
		this._dispatch("intlayer:hover");
	}
	_handleMouseUpOrLeave() {
		if (this._isHovered) {
			this._isHovered = false;
			this._dispatch("intlayer:unhover");
		}
		this._clearPressTimer();
		this._updateActiveState();
	}
	_handleClick(e) {
		if (this._isSelecting || this._isSelectingState) {
			e.preventDefault();
			e.stopPropagation();
		}
	}
	_handleBlur() {
		this._isSelectingState = false;
		this._updateActiveState();
	}
};
var defineIntlayerElements = () => {
	if (typeof customElements === "undefined") return;
	if (!customElements.get("intlayer-content-selector")) customElements.define("intlayer-content-selector", IntlayerContentSelectorElement);
	defineIntlayerContentSelectorWrapper();
	defineIntlayerEditedContent();
	defineIntlayerEditorElement();
};
var buildClientMessengerConfig = () => {
	const sameOrigin = typeof window !== "undefined" ? window.location.origin : void 0;
	return {
		allowedOrigins: [...new Set([
			editor?.editorURL,
			editor?.cmsURL,
			sameOrigin
		].filter(Boolean))],
		postMessageFn: (payload, origin) => {
			if (typeof window === "undefined") return;
			if (!(window.self !== window.top)) return;
			window.parent?.postMessage(payload, origin);
		}
	};
};
var _clientRefCount = 0;
var initEditorClient = () => {
	_clientRefCount++;
	const existing = getGlobalEditorManager();
	if (existing) return existing;
	const manager = new EditorStateManager({
		mode: "client",
		messenger: buildClientMessengerConfig(),
		configuration: { editor }
	});
	setGlobalEditorManager(manager);
	defineIntlayerElements();
	manager.start();
	return manager;
};
var stopEditorClient = () => {
	_clientRefCount = Math.max(0, _clientRefCount - 1);
	if (_clientRefCount > 0) return;
	getGlobalEditorManager()?.stop();
	setGlobalEditorManager(null);
};
export { initEditorClient, stopEditorClient };
import { c as getAppLogger, i as log, r as internationalization, s as colorizeKey } from "./built-BvRk9kiK.js";
var TRANSLATION = "translation";
var ENUMERATION = "enumeration";
var PLURAL = "plural";
var CONDITION = "condition";
var INSERTION = "insertion";
var FILE = "file";
var OBJECT = "object";
var ARRAY = "array";
var NESTED = "nested";
var REACT_NODE = "reactNode";
var MARKDOWN = "markdown";
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
var getSelect = (selectContent, value) => {
	const caseList = Object.keys(selectContent);
	const lastCase = caseList[caseList.length - 1];
	return selectContent[value] ?? selectContent.fallback ?? selectContent.other ?? selectContent[lastCase];
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
var getCondition = (conditionContent, state) => {
	const stateList = Object.keys(conditionContent);
	const fallbackState = stateList[stateList.length - 1];
	return conditionContent[`${state}`] ?? conditionContent.fallback ?? conditionContent[fallbackState];
};
var getGenderEntry = (gender) => {
	if (gender === "m" || gender === "male") return "male";
	if (gender === "f" || gender === "female") return "female";
	return "fallback";
};
var getGender = (genderContent, gender) => {
	const stateList = Object.keys(genderContent);
	const fallbackState = stateList[stateList.length - 1];
	return genderContent[getGenderEntry(gender)] ?? genderContent.fallback ?? genderContent[fallbackState];
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
var getNesting$1 = (dictionaryKey, path, props) => {
	const dictionary = getIntlayer(dictionaryKey, props?.locale, props?.plugins);
	if (typeof path === "string") {
		const pathArray = path.split(".");
		let current = dictionary;
		for (const key of pathArray) {
			current = current?.[key];
			if (current === void 0) return dictionary;
		}
		return current;
	}
	return dictionary;
};
var walkPath = (content, path) => {
	let current = content;
	for (const segment of path.split(".")) {
		current = current?.[segment];
		if (current === void 0) return content;
	}
	return current;
};
var getNesting = (dictionaryKey, path, props) => {
	const nestedDictionaries = props?.nestedDictionaries;
	const nestedDictionary = nestedDictionaries?.[dictionaryKey];
	if (!nestedDictionary) return void 0;
	const content = getDictionary({
		...nestedDictionary,
		nestedDictionaries: {
			...nestedDictionaries,
			...nestedDictionary.nestedDictionaries
		}
	}, props?.locale, props?.plugins);
	if (typeof path !== "string") return content;
	return walkPath(content, path);
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
	return process.env.INTLAYER_NODE_TYPE_HTML !== "false" && nodeType === "html" || process.env.INTLAYER_NODE_TYPE_MARKDOWN !== "false" && nodeType === "markdown";
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
var enumerationPlugin = process.env.INTLAYER_NODE_TYPE_ENUMERATION === "false" ? fallbackPlugin : {
	id: "enumeration-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "enumeration",
	transform: (node, props, deepTransformNode) => {
		const original = node[ENUMERATION];
		const result = {};
		for (const key in original) {
			const child = original[key];
			result[key] = deepTransformNode(child, {
				...props,
				children: child,
				keyPath: [...props.keyPath, {
					type: ENUMERATION,
					key
				}]
			});
		}
		return (arg) => {
			const quantity = typeof arg === "number" ? arg : arg.count;
			const subResult = getEnumeration(result, quantity);
			if (typeof subResult === "function" && typeof arg === "object") return subResult(arg);
			return subResult;
		};
	}
};
var conditionPlugin = process.env.INTLAYER_NODE_TYPE_CONDITION === "false" ? fallbackPlugin : {
	id: "condition-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "condition",
	transform: (node, props, deepTransformNode) => {
		const original = node[CONDITION];
		const result = {};
		for (const key in original) {
			const child = original[key];
			result[key] = deepTransformNode(child, {
				...props,
				children: child,
				keyPath: [...props.keyPath, {
					type: CONDITION,
					key
				}]
			});
		}
		return (arg) => {
			const value = typeof arg === "boolean" ? arg : arg.value;
			const subResult = getCondition(result, value);
			if (typeof subResult === "function" && typeof arg === "object") return subResult(arg);
			return subResult;
		};
	}
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
var genderPlugin = process.env.INTLAYER_NODE_TYPE_GENDER === "false" ? fallbackPlugin : {
	id: "gender-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "gender",
	transform: (node, props, deepTransformNode) => {
		const original = node[GENDER];
		const result = {};
		for (const key in original) {
			const child = original[key];
			result[key] = deepTransformNode(child, {
				...props,
				children: child,
				keyPath: [...props.keyPath, {
					type: GENDER,
					key
				}]
			});
		}
		return (value) => getGender(result, value);
	}
};
var selectPlugin = process.env.INTLAYER_NODE_TYPE_SELECT === "false" ? fallbackPlugin : {
	id: "select-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "select",
	transform: (node, props, deepTransformNode) => {
		const original = node[SELECT];
		const result = {};
		for (const key in original) {
			const child = original[key];
			result[key] = deepTransformNode(child, {
				...props,
				children: child,
				keyPath: [...props.keyPath, {
					type: SELECT,
					key
				}]
			});
		}
		return (arg) => {
			const value = typeof arg === "string" ? arg : arg?.value;
			const subResult = getSelect(result, value);
			if (typeof subResult === "function" && typeof arg === "object") return subResult(arg);
			return subResult;
		};
	}
};
var resolveNesting = process.env.INTLAYER_OPTIMIZED_NESTING === "true" ? getNesting : getNesting$1;
var nestedPlugin = (locale) => process.env.INTLAYER_NODE_TYPE_NESTED === "false" ? fallbackPlugin : {
	id: "nested-plugin",
	canHandle: (node) => typeof node === "object" && (node?.nodeType === "nested" || node?.nodeType === "n"),
	transform: (node, props) => resolveNesting(node[NESTED].dictionaryKey, node[NESTED].path, {
		...props,
		locale: locale ?? props.locale
	})
};
var filePlugin = process.env.INTLAYER_NODE_TYPE_FILE === "false" ? fallbackPlugin : {
	id: "file-plugin",
	canHandle: (node) => typeof node === "object" && node?.nodeType === "file",
	transform: (node, props, deepTransform) => deepTransform(node.content, {
		...props,
		children: node.content
	})
};
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
export { PLURAL as _, getSelect as a, TRANSLATION as b, ARRAY as c, FILE as d, GENDER as f, OBJECT as g, MARKDOWN as h, getDictionaries as i, CONDITION as l, INSERTION as m, getContent as n, getEnumeration as o, HTML as p, getIntlayer as r, deepTransformNode as s, getBasePlugins as t, ENUMERATION as u, REACT_NODE as v, formatNodeType as x, SELECT as y };
var getUnmergedDictionaries = () => ({});
export { getUnmergedDictionaries };
var HUMAN_USER_AGENT_EXCEPTION_PATTERN = /cubot/i;
var BOT_USER_AGENT_PATTERN = /bot\b|bot[/\-\s]|crawler|crawling|spider|scraper|slurp|archiver|feedfetcher|validator|curl\/|wget\/|python-requests|python-urllib|okhttp|axios\/|node-fetch|got \(|go-http-client|java\/|libwww|httpunit|http_request|apache-httpclient|headless|phantomjs|puppeteer|playwright|selenium|webdriver|cypress|lighthouse|pagespeed|gtmetrix|prerender|pingdom|uptime|statuscake|site24x7|bingpreview|yandex|baiduspider|sogou|exabot|semrush|ahrefs|mj12|dotbot|petalbot|applebot|amazonbot|bytespider|facebookexternalhit|meta-externalagent|embedly|outbrain|quora link preview|skypeuripreview|vkshare|w3c_validator|apis-google|mediapartners|adsbot|storebot-google|google-inspectiontool|google-read-aloud|google-extended|duplexweb-google|gptbot|oai-searchbot|chatgpt-user|perplexity|claudebot|claude-web|anthropic-ai|cohere-ai|ccbot|diffbot|imagesift|omgili|timpi|youbot/i;
var isBotUserAgent = (userAgent) => {
	if (!userAgent) return true;
	if (HUMAN_USER_AGENT_EXCEPTION_PATTERN.test(userAgent)) return false;
	return BOT_USER_AGENT_PATTERN.test(userAgent);
};
var AUTOMATION_GLOBAL_KEYS = [
	"_phantom",
	"__nightmare",
	"callPhantom",
	"__selenium_unwrapped",
	"__webdriver_evaluate",
	"__driver_evaluate",
	"domAutomation",
	"Cypress"
];
var isBotEnvironment = () => {
	if (typeof navigator === "undefined") return false;
	if (navigator.webdriver === true) return true;
	const automationGlobals = globalThis;
	if (AUTOMATION_GLOBAL_KEYS.some((key) => key in automationGlobals)) return true;
	if (!navigator.userAgent) return false;
	return isBotUserAgent(navigator.userAgent);
};
export { isBotEnvironment as n, isBotUserAgent as r, BOT_USER_AGENT_PATTERN as t };
