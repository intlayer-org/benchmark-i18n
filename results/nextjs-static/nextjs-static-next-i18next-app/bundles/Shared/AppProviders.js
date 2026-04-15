"use client";
import { Profiler, createContext, createElement, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import { jsx } from "react/jsx-runtime";
//#region ../../node_modules/.bun/i18next@26.0.4+1fb4c65d43e298b9/node_modules/i18next/dist/esm/i18next.js
var isString = (obj) => typeof obj === "string";
var defer = () => {
	let res;
	let rej;
	const promise = new Promise((resolve, reject) => {
		res = resolve;
		rej = reject;
	});
	promise.resolve = res;
	promise.reject = rej;
	return promise;
};
var makeString = (object) => {
	if (object == null) return "";
	return String(object);
};
var copy = (a, s, t) => {
	a.forEach((m) => {
		if (s[m]) t[m] = s[m];
	});
};
var lastOfPathSeparatorRegExp = /###/g;
var cleanKey = (key) => key && key.includes("###") ? key.replace(lastOfPathSeparatorRegExp, ".") : key;
var canNotTraverseDeeper = (object) => !object || isString(object);
var getLastOfPath = (object, path, Empty) => {
	const stack = !isString(path) ? path : path.split(".");
	let stackIndex = 0;
	while (stackIndex < stack.length - 1) {
		if (canNotTraverseDeeper(object)) return {};
		const key = cleanKey(stack[stackIndex]);
		if (!object[key] && Empty) object[key] = new Empty();
		if (Object.prototype.hasOwnProperty.call(object, key)) object = object[key];
		else object = {};
		++stackIndex;
	}
	if (canNotTraverseDeeper(object)) return {};
	return {
		obj: object,
		k: cleanKey(stack[stackIndex])
	};
};
var setPath = (object, path, newValue) => {
	const { obj, k } = getLastOfPath(object, path, Object);
	if (obj !== void 0 || path.length === 1) {
		obj[k] = newValue;
		return;
	}
	let e = path[path.length - 1];
	let p = path.slice(0, path.length - 1);
	let last = getLastOfPath(object, p, Object);
	while (last.obj === void 0 && p.length) {
		e = `${p[p.length - 1]}.${e}`;
		p = p.slice(0, p.length - 1);
		last = getLastOfPath(object, p, Object);
		if (last?.obj && typeof last.obj[`${last.k}.${e}`] !== "undefined") last.obj = void 0;
	}
	last.obj[`${last.k}.${e}`] = newValue;
};
var pushPath = (object, path, newValue, concat) => {
	const { obj, k } = getLastOfPath(object, path, Object);
	obj[k] = obj[k] || [];
	obj[k].push(newValue);
};
var getPath = (object, path) => {
	const { obj, k } = getLastOfPath(object, path);
	if (!obj) return void 0;
	if (!Object.prototype.hasOwnProperty.call(obj, k)) return void 0;
	return obj[k];
};
var getPathWithDefaults = (data, defaultData, key) => {
	const value = getPath(data, key);
	if (value !== void 0) return value;
	return getPath(defaultData, key);
};
var deepExtend = (target, source, overwrite) => {
	for (const prop in source) if (prop !== "__proto__" && prop !== "constructor") if (prop in target) if (isString(target[prop]) || target[prop] instanceof String || isString(source[prop]) || source[prop] instanceof String) {
		if (overwrite) target[prop] = source[prop];
	} else deepExtend(target[prop], source[prop], overwrite);
	else target[prop] = source[prop];
	return target;
};
var regexEscape = (str) => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var _entityMap = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;",
	"/": "&#x2F;"
};
var escape = (data) => {
	if (isString(data)) return data.replace(/[&<>"'\/]/g, (s) => _entityMap[s]);
	return data;
};
var RegExpCache = class {
	constructor(capacity) {
		this.capacity = capacity;
		this.regExpMap = /* @__PURE__ */ new Map();
		this.regExpQueue = [];
	}
	getRegExp(pattern) {
		const regExpFromCache = this.regExpMap.get(pattern);
		if (regExpFromCache !== void 0) return regExpFromCache;
		const regExpNew = new RegExp(pattern);
		if (this.regExpQueue.length === this.capacity) this.regExpMap.delete(this.regExpQueue.shift());
		this.regExpMap.set(pattern, regExpNew);
		this.regExpQueue.push(pattern);
		return regExpNew;
	}
};
var chars = [
	" ",
	",",
	"?",
	"!",
	";"
];
var looksLikeObjectPathRegExpCache = new RegExpCache(20);
var looksLikeObjectPath = (key, nsSeparator, keySeparator) => {
	nsSeparator = nsSeparator || "";
	keySeparator = keySeparator || "";
	const possibleChars = chars.filter((c) => !nsSeparator.includes(c) && !keySeparator.includes(c));
	if (possibleChars.length === 0) return true;
	const r = looksLikeObjectPathRegExpCache.getRegExp(`(${possibleChars.map((c) => c === "?" ? "\\?" : c).join("|")})`);
	let matched = !r.test(key);
	if (!matched) {
		const ki = key.indexOf(keySeparator);
		if (ki > 0 && !r.test(key.substring(0, ki))) matched = true;
	}
	return matched;
};
var deepFind = (obj, path, keySeparator = ".") => {
	if (!obj) return void 0;
	if (obj[path]) {
		if (!Object.prototype.hasOwnProperty.call(obj, path)) return void 0;
		return obj[path];
	}
	const tokens = path.split(keySeparator);
	let current = obj;
	for (let i = 0; i < tokens.length;) {
		if (!current || typeof current !== "object") return;
		let next;
		let nextPath = "";
		for (let j = i; j < tokens.length; ++j) {
			if (j !== i) nextPath += keySeparator;
			nextPath += tokens[j];
			next = current[nextPath];
			if (next !== void 0) {
				if ([
					"string",
					"number",
					"boolean"
				].includes(typeof next) && j < tokens.length - 1) continue;
				i += j - i + 1;
				break;
			}
		}
		current = next;
	}
	return current;
};
var getCleanedCode = (code) => code?.replace(/_/g, "-");
var consoleLogger = {
	type: "logger",
	log(args) {
		this.output("log", args);
	},
	warn(args) {
		this.output("warn", args);
	},
	error(args) {
		this.output("error", args);
	},
	output(type, args) {
		console?.[type]?.apply?.(console, args);
	}
};
var baseLogger = new class Logger {
	constructor(concreteLogger, options = {}) {
		this.init(concreteLogger, options);
	}
	init(concreteLogger, options = {}) {
		this.prefix = options.prefix || "i18next:";
		this.logger = concreteLogger || consoleLogger;
		this.options = options;
		this.debug = options.debug;
	}
	log(...args) {
		return this.forward(args, "log", "", true);
	}
	warn(...args) {
		return this.forward(args, "warn", "", true);
	}
	error(...args) {
		return this.forward(args, "error", "");
	}
	deprecate(...args) {
		return this.forward(args, "warn", "WARNING DEPRECATED: ", true);
	}
	forward(args, lvl, prefix, debugOnly) {
		if (debugOnly && !this.debug) return null;
		if (isString(args[0])) args[0] = `${prefix}${this.prefix} ${args[0]}`;
		return this.logger[lvl](args);
	}
	create(moduleName) {
		return new Logger(this.logger, {
			prefix: `${this.prefix}:${moduleName}:`,
			...this.options
		});
	}
	clone(options) {
		options = options || this.options;
		options.prefix = options.prefix || this.prefix;
		return new Logger(this.logger, options);
	}
}();
var EventEmitter = class {
	constructor() {
		this.observers = {};
	}
	on(events, listener) {
		events.split(" ").forEach((event) => {
			if (!this.observers[event]) this.observers[event] = /* @__PURE__ */ new Map();
			const numListeners = this.observers[event].get(listener) || 0;
			this.observers[event].set(listener, numListeners + 1);
		});
		return this;
	}
	off(event, listener) {
		if (!this.observers[event]) return;
		if (!listener) {
			delete this.observers[event];
			return;
		}
		this.observers[event].delete(listener);
	}
	once(event, listener) {
		const wrapper = (...args) => {
			listener(...args);
			this.off(event, wrapper);
		};
		this.on(event, wrapper);
		return this;
	}
	emit(event, ...args) {
		if (this.observers[event]) Array.from(this.observers[event].entries()).forEach(([observer, numTimesAdded]) => {
			for (let i = 0; i < numTimesAdded; i++) observer(...args);
		});
		if (this.observers["*"]) Array.from(this.observers["*"].entries()).forEach(([observer, numTimesAdded]) => {
			for (let i = 0; i < numTimesAdded; i++) observer(event, ...args);
		});
	}
};
var ResourceStore = class extends EventEmitter {
	constructor(data, options = {
		ns: ["translation"],
		defaultNS: "translation"
	}) {
		super();
		this.data = data || {};
		this.options = options;
		if (this.options.keySeparator === void 0) this.options.keySeparator = ".";
		if (this.options.ignoreJSONStructure === void 0) this.options.ignoreJSONStructure = true;
	}
	addNamespaces(ns) {
		if (!this.options.ns.includes(ns)) this.options.ns.push(ns);
	}
	removeNamespaces(ns) {
		const index = this.options.ns.indexOf(ns);
		if (index > -1) this.options.ns.splice(index, 1);
	}
	getResource(lng, ns, key, options = {}) {
		const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
		const ignoreJSONStructure = options.ignoreJSONStructure !== void 0 ? options.ignoreJSONStructure : this.options.ignoreJSONStructure;
		let path;
		if (lng.includes(".")) path = lng.split(".");
		else {
			path = [lng, ns];
			if (key) if (Array.isArray(key)) path.push(...key);
			else if (isString(key) && keySeparator) path.push(...key.split(keySeparator));
			else path.push(key);
		}
		const result = getPath(this.data, path);
		if (!result && !ns && !key && lng.includes(".")) {
			lng = path[0];
			ns = path[1];
			key = path.slice(2).join(".");
		}
		if (result || !ignoreJSONStructure || !isString(key)) return result;
		return deepFind(this.data?.[lng]?.[ns], key, keySeparator);
	}
	addResource(lng, ns, key, value, options = { silent: false }) {
		const keySeparator = options.keySeparator !== void 0 ? options.keySeparator : this.options.keySeparator;
		let path = [lng, ns];
		if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);
		if (lng.includes(".")) {
			path = lng.split(".");
			value = ns;
			ns = path[1];
		}
		this.addNamespaces(ns);
		setPath(this.data, path, value);
		if (!options.silent) this.emit("added", lng, ns, key, value);
	}
	addResources(lng, ns, resources, options = { silent: false }) {
		for (const m in resources) if (isString(resources[m]) || Array.isArray(resources[m])) this.addResource(lng, ns, m, resources[m], { silent: true });
		if (!options.silent) this.emit("added", lng, ns, resources);
	}
	addResourceBundle(lng, ns, resources, deep, overwrite, options = {
		silent: false,
		skipCopy: false
	}) {
		let path = [lng, ns];
		if (lng.includes(".")) {
			path = lng.split(".");
			deep = resources;
			resources = ns;
			ns = path[1];
		}
		this.addNamespaces(ns);
		let pack = getPath(this.data, path) || {};
		if (!options.skipCopy) resources = JSON.parse(JSON.stringify(resources));
		if (deep) deepExtend(pack, resources, overwrite);
		else pack = {
			...pack,
			...resources
		};
		setPath(this.data, path, pack);
		if (!options.silent) this.emit("added", lng, ns, resources);
	}
	removeResourceBundle(lng, ns) {
		if (this.hasResourceBundle(lng, ns)) delete this.data[lng][ns];
		this.removeNamespaces(ns);
		this.emit("removed", lng, ns);
	}
	hasResourceBundle(lng, ns) {
		return this.getResource(lng, ns) !== void 0;
	}
	getResourceBundle(lng, ns) {
		if (!ns) ns = this.options.defaultNS;
		return this.getResource(lng, ns);
	}
	getDataByLanguage(lng) {
		return this.data[lng];
	}
	hasLanguageSomeTranslations(lng) {
		const data = this.getDataByLanguage(lng);
		return !!(data && Object.keys(data) || []).find((v) => data[v] && Object.keys(data[v]).length > 0);
	}
	toJSON() {
		return this.data;
	}
};
var postProcessor = {
	processors: {},
	addPostProcessor(module) {
		this.processors[module.name] = module;
	},
	handle(processors, value, key, options, translator) {
		processors.forEach((processor) => {
			value = this.processors[processor]?.process(value, key, options, translator) ?? value;
		});
		return value;
	}
};
var PATH_KEY = Symbol("i18next/PATH_KEY");
function createProxy() {
	const state = [];
	const handler = Object.create(null);
	let proxy;
	handler.get = (target, key) => {
		proxy?.revoke?.();
		if (key === PATH_KEY) return state;
		state.push(key);
		proxy = Proxy.revocable(target, handler);
		return proxy.proxy;
	};
	return Proxy.revocable(Object.create(null), handler).proxy;
}
function keysFromSelector(selector, opts) {
	const { [PATH_KEY]: path } = selector(createProxy());
	const keySeparator = opts?.keySeparator ?? ".";
	const nsSeparator = opts?.nsSeparator ?? ":";
	if (path.length > 1 && nsSeparator) {
		const ns = opts?.ns;
		const nsArray = Array.isArray(ns) ? ns : null;
		if (nsArray && nsArray.length > 1 && nsArray.slice(1).includes(path[0])) return `${path[0]}${nsSeparator}${path.slice(1).join(keySeparator)}`;
	}
	return path.join(keySeparator);
}
var shouldHandleAsObject = (res) => !isString(res) && typeof res !== "boolean" && typeof res !== "number";
var Translator = class Translator extends EventEmitter {
	constructor(services, options = {}) {
		super();
		copy([
			"resourceStore",
			"languageUtils",
			"pluralResolver",
			"interpolator",
			"backendConnector",
			"i18nFormat",
			"utils"
		], services, this);
		this.options = options;
		if (this.options.keySeparator === void 0) this.options.keySeparator = ".";
		this.logger = baseLogger.create("translator");
		this.checkedLoadedFor = {};
	}
	changeLanguage(lng) {
		if (lng) this.language = lng;
	}
	exists(key, o = { interpolation: {} }) {
		const opt = { ...o };
		if (key == null) return false;
		const resolved = this.resolve(key, opt);
		if (resolved?.res === void 0) return false;
		const isObject = shouldHandleAsObject(resolved.res);
		if (opt.returnObjects === false && isObject) return false;
		return true;
	}
	extractFromKey(key, opt) {
		let nsSeparator = opt.nsSeparator !== void 0 ? opt.nsSeparator : this.options.nsSeparator;
		if (nsSeparator === void 0) nsSeparator = ":";
		const keySeparator = opt.keySeparator !== void 0 ? opt.keySeparator : this.options.keySeparator;
		let namespaces = opt.ns || this.options.defaultNS || [];
		const wouldCheckForNsInKey = nsSeparator && key.includes(nsSeparator);
		const seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !opt.keySeparator && !this.options.userDefinedNsSeparator && !opt.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
		if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
			const m = key.match(this.interpolator.nestingRegexp);
			if (m && m.length > 0) return {
				key,
				namespaces: isString(namespaces) ? [namespaces] : namespaces
			};
			const parts = key.split(nsSeparator);
			if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.includes(parts[0])) namespaces = parts.shift();
			key = parts.join(keySeparator);
		}
		return {
			key,
			namespaces: isString(namespaces) ? [namespaces] : namespaces
		};
	}
	translate(keys, o, lastKey) {
		let opt = typeof o === "object" ? { ...o } : o;
		if (typeof opt !== "object" && this.options.overloadTranslationOptionHandler) opt = this.options.overloadTranslationOptionHandler(arguments);
		if (typeof opt === "object") opt = { ...opt };
		if (!opt) opt = {};
		if (keys == null) return "";
		if (typeof keys === "function") keys = keysFromSelector(keys, {
			...this.options,
			...opt
		});
		if (!Array.isArray(keys)) keys = [String(keys)];
		keys = keys.map((k) => typeof k === "function" ? keysFromSelector(k, {
			...this.options,
			...opt
		}) : String(k));
		const returnDetails = opt.returnDetails !== void 0 ? opt.returnDetails : this.options.returnDetails;
		const keySeparator = opt.keySeparator !== void 0 ? opt.keySeparator : this.options.keySeparator;
		const { key, namespaces } = this.extractFromKey(keys[keys.length - 1], opt);
		const namespace = namespaces[namespaces.length - 1];
		let nsSeparator = opt.nsSeparator !== void 0 ? opt.nsSeparator : this.options.nsSeparator;
		if (nsSeparator === void 0) nsSeparator = ":";
		const lng = opt.lng || this.language;
		const appendNamespaceToCIMode = opt.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
		if (lng?.toLowerCase() === "cimode") {
			if (appendNamespaceToCIMode) {
				if (returnDetails) return {
					res: `${namespace}${nsSeparator}${key}`,
					usedKey: key,
					exactUsedKey: key,
					usedLng: lng,
					usedNS: namespace,
					usedParams: this.getUsedParamsDetails(opt)
				};
				return `${namespace}${nsSeparator}${key}`;
			}
			if (returnDetails) return {
				res: key,
				usedKey: key,
				exactUsedKey: key,
				usedLng: lng,
				usedNS: namespace,
				usedParams: this.getUsedParamsDetails(opt)
			};
			return key;
		}
		const resolved = this.resolve(keys, opt);
		let res = resolved?.res;
		const resUsedKey = resolved?.usedKey || key;
		const resExactUsedKey = resolved?.exactUsedKey || key;
		const noObject = [
			"[object Number]",
			"[object Function]",
			"[object RegExp]"
		];
		const joinArrays = opt.joinArrays !== void 0 ? opt.joinArrays : this.options.joinArrays;
		const handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
		const needsPluralHandling = opt.count !== void 0 && !isString(opt.count);
		const hasDefaultValue = Translator.hasDefaultValue(opt);
		const defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, opt.count, opt) : "";
		const defaultValueSuffixOrdinalFallback = opt.ordinal && needsPluralHandling ? this.pluralResolver.getSuffix(lng, opt.count, { ordinal: false }) : "";
		const needsZeroSuffixLookup = needsPluralHandling && !opt.ordinal && opt.count === 0;
		const defaultValue = needsZeroSuffixLookup && opt[`defaultValue${this.options.pluralSeparator}zero`] || opt[`defaultValue${defaultValueSuffix}`] || opt[`defaultValue${defaultValueSuffixOrdinalFallback}`] || opt.defaultValue;
		let resForObjHndl = res;
		if (handleAsObjectInI18nFormat && !res && hasDefaultValue) resForObjHndl = defaultValue;
		const handleAsObject = shouldHandleAsObject(resForObjHndl);
		const resType = Object.prototype.toString.apply(resForObjHndl);
		if (handleAsObjectInI18nFormat && resForObjHndl && handleAsObject && !noObject.includes(resType) && !(isString(joinArrays) && Array.isArray(resForObjHndl))) {
			if (!opt.returnObjects && !this.options.returnObjects) {
				if (!this.options.returnedObjectHandler) this.logger.warn("accessing an object - but returnObjects options is not enabled!");
				const r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, resForObjHndl, {
					...opt,
					ns: namespaces
				}) : `key '${key} (${this.language})' returned an object instead of string.`;
				if (returnDetails) {
					resolved.res = r;
					resolved.usedParams = this.getUsedParamsDetails(opt);
					return resolved;
				}
				return r;
			}
			if (keySeparator) {
				const resTypeIsArray = Array.isArray(resForObjHndl);
				const copy = resTypeIsArray ? [] : {};
				const newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
				for (const m in resForObjHndl) if (Object.prototype.hasOwnProperty.call(resForObjHndl, m)) {
					const deepKey = `${newKeyToUse}${keySeparator}${m}`;
					if (hasDefaultValue && !res) copy[m] = this.translate(deepKey, {
						...opt,
						defaultValue: shouldHandleAsObject(defaultValue) ? defaultValue[m] : void 0,
						joinArrays: false,
						ns: namespaces
					});
					else copy[m] = this.translate(deepKey, {
						...opt,
						joinArrays: false,
						ns: namespaces
					});
					if (copy[m] === deepKey) copy[m] = resForObjHndl[m];
				}
				res = copy;
			}
		} else if (handleAsObjectInI18nFormat && isString(joinArrays) && Array.isArray(res)) {
			res = res.join(joinArrays);
			if (res) res = this.extendTranslation(res, keys, opt, lastKey);
		} else {
			let usedDefault = false;
			let usedKey = false;
			if (!this.isValidLookup(res) && hasDefaultValue) {
				usedDefault = true;
				res = defaultValue;
			}
			if (!this.isValidLookup(res)) {
				usedKey = true;
				res = key;
			}
			const resForMissing = (opt.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && usedKey ? void 0 : res;
			const updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
			if (usedKey || usedDefault || updateMissing) {
				this.logger.log(updateMissing ? "updateKey" : "missingKey", lng, namespace, key, updateMissing ? defaultValue : res);
				if (keySeparator) {
					const fk = this.resolve(key, {
						...opt,
						keySeparator: false
					});
					if (fk && fk.res) this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
				}
				let lngs = [];
				const fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, opt.lng || this.language);
				if (this.options.saveMissingTo === "fallback" && fallbackLngs && fallbackLngs[0]) for (let i = 0; i < fallbackLngs.length; i++) lngs.push(fallbackLngs[i]);
				else if (this.options.saveMissingTo === "all") lngs = this.languageUtils.toResolveHierarchy(opt.lng || this.language);
				else lngs.push(opt.lng || this.language);
				const send = (l, k, specificDefaultValue) => {
					const defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
					if (this.options.missingKeyHandler) this.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, opt);
					else if (this.backendConnector?.saveMissing) this.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, opt);
					this.emit("missingKey", l, namespace, k, res);
				};
				if (this.options.saveMissing) if (this.options.saveMissingPlurals && needsPluralHandling) lngs.forEach((language) => {
					const suffixes = this.pluralResolver.getSuffixes(language, opt);
					if (needsZeroSuffixLookup && opt[`defaultValue${this.options.pluralSeparator}zero`] && !suffixes.includes(`${this.options.pluralSeparator}zero`)) suffixes.push(`${this.options.pluralSeparator}zero`);
					suffixes.forEach((suffix) => {
						send([language], key + suffix, opt[`defaultValue${suffix}`] || defaultValue);
					});
				});
				else send(lngs, key, defaultValue);
			}
			res = this.extendTranslation(res, keys, opt, resolved, lastKey);
			if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = `${namespace}${nsSeparator}${key}`;
			if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${namespace}${nsSeparator}${key}` : key, usedDefault ? res : void 0, opt);
		}
		if (returnDetails) {
			resolved.res = res;
			resolved.usedParams = this.getUsedParamsDetails(opt);
			return resolved;
		}
		return res;
	}
	extendTranslation(res, key, opt, resolved, lastKey) {
		if (this.i18nFormat?.parse) res = this.i18nFormat.parse(res, {
			...this.options.interpolation.defaultVariables,
			...opt
		}, opt.lng || this.language || resolved.usedLng, resolved.usedNS, resolved.usedKey, { resolved });
		else if (!opt.skipInterpolation) {
			if (opt.interpolation) this.interpolator.init({
				...opt,
				interpolation: {
					...this.options.interpolation,
					...opt.interpolation
				}
			});
			const skipOnVariables = isString(res) && (opt?.interpolation?.skipOnVariables !== void 0 ? opt.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
			let nestBef;
			if (skipOnVariables) {
				const nb = res.match(this.interpolator.nestingRegexp);
				nestBef = nb && nb.length;
			}
			let data = opt.replace && !isString(opt.replace) ? opt.replace : opt;
			if (this.options.interpolation.defaultVariables) data = {
				...this.options.interpolation.defaultVariables,
				...data
			};
			res = this.interpolator.interpolate(res, data, opt.lng || this.language || resolved.usedLng, opt);
			if (skipOnVariables) {
				const na = res.match(this.interpolator.nestingRegexp);
				const nestAft = na && na.length;
				if (nestBef < nestAft) opt.nest = false;
			}
			if (!opt.lng && resolved && resolved.res) opt.lng = this.language || resolved.usedLng;
			if (opt.nest !== false) res = this.interpolator.nest(res, (...args) => {
				if (lastKey?.[0] === args[0] && !opt.context) {
					this.logger.warn(`It seems you are nesting recursively key: ${args[0]} in key: ${key[0]}`);
					return null;
				}
				return this.translate(...args, key);
			}, opt);
			if (opt.interpolation) this.interpolator.reset();
		}
		const postProcess = opt.postProcess || this.options.postProcess;
		const postProcessorNames = isString(postProcess) ? [postProcess] : postProcess;
		if (res != null && postProcessorNames?.length && opt.applyPostProcessor !== false) res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? {
			i18nResolved: {
				...resolved,
				usedParams: this.getUsedParamsDetails(opt)
			},
			...opt
		} : opt, this);
		return res;
	}
	resolve(keys, opt = {}) {
		let found;
		let usedKey;
		let exactUsedKey;
		let usedLng;
		let usedNS;
		if (isString(keys)) keys = [keys];
		if (Array.isArray(keys)) keys = keys.map((k) => typeof k === "function" ? keysFromSelector(k, {
			...this.options,
			...opt
		}) : k);
		keys.forEach((k) => {
			if (this.isValidLookup(found)) return;
			const extracted = this.extractFromKey(k, opt);
			const key = extracted.key;
			usedKey = key;
			let namespaces = extracted.namespaces;
			if (this.options.fallbackNS) namespaces = namespaces.concat(this.options.fallbackNS);
			const needsPluralHandling = opt.count !== void 0 && !isString(opt.count);
			const needsZeroSuffixLookup = needsPluralHandling && !opt.ordinal && opt.count === 0;
			const needsContextHandling = opt.context !== void 0 && (isString(opt.context) || typeof opt.context === "number") && opt.context !== "";
			const codes = opt.lngs ? opt.lngs : this.languageUtils.toResolveHierarchy(opt.lng || this.language, opt.fallbackLng);
			namespaces.forEach((ns) => {
				if (this.isValidLookup(found)) return;
				usedNS = ns;
				if (!this.checkedLoadedFor[`${codes[0]}-${ns}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(usedNS)) {
					this.checkedLoadedFor[`${codes[0]}-${ns}`] = true;
					this.logger.warn(`key "${usedKey}" for languages "${codes.join(", ")}" won't get resolved as namespace "${usedNS}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
				}
				codes.forEach((code) => {
					if (this.isValidLookup(found)) return;
					usedLng = code;
					const finalKeys = [key];
					if (this.i18nFormat?.addLookupKeys) this.i18nFormat.addLookupKeys(finalKeys, key, code, ns, opt);
					else {
						let pluralSuffix;
						if (needsPluralHandling) pluralSuffix = this.pluralResolver.getSuffix(code, opt.count, opt);
						const zeroSuffix = `${this.options.pluralSeparator}zero`;
						const ordinalPrefix = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
						if (needsPluralHandling) {
							if (opt.ordinal && pluralSuffix.startsWith(ordinalPrefix)) finalKeys.push(key + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
							finalKeys.push(key + pluralSuffix);
							if (needsZeroSuffixLookup) finalKeys.push(key + zeroSuffix);
						}
						if (needsContextHandling) {
							const contextKey = `${key}${this.options.contextSeparator || "_"}${opt.context}`;
							finalKeys.push(contextKey);
							if (needsPluralHandling) {
								if (opt.ordinal && pluralSuffix.startsWith(ordinalPrefix)) finalKeys.push(contextKey + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
								finalKeys.push(contextKey + pluralSuffix);
								if (needsZeroSuffixLookup) finalKeys.push(contextKey + zeroSuffix);
							}
						}
					}
					let possibleKey;
					while (possibleKey = finalKeys.pop()) if (!this.isValidLookup(found)) {
						exactUsedKey = possibleKey;
						found = this.getResource(code, ns, possibleKey, opt);
					}
				});
			});
		});
		return {
			res: found,
			usedKey,
			exactUsedKey,
			usedLng,
			usedNS
		};
	}
	isValidLookup(res) {
		return res !== void 0 && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === "");
	}
	getResource(code, ns, key, options = {}) {
		if (this.i18nFormat?.getResource) return this.i18nFormat.getResource(code, ns, key, options);
		return this.resourceStore.getResource(code, ns, key, options);
	}
	getUsedParamsDetails(options = {}) {
		const optionsKeys = [
			"defaultValue",
			"ordinal",
			"context",
			"replace",
			"lng",
			"lngs",
			"fallbackLng",
			"ns",
			"keySeparator",
			"nsSeparator",
			"returnObjects",
			"returnDetails",
			"joinArrays",
			"postProcess",
			"interpolation"
		];
		const useOptionsReplaceForData = options.replace && !isString(options.replace);
		let data = useOptionsReplaceForData ? options.replace : options;
		if (useOptionsReplaceForData && typeof options.count !== "undefined") data.count = options.count;
		if (this.options.interpolation.defaultVariables) data = {
			...this.options.interpolation.defaultVariables,
			...data
		};
		if (!useOptionsReplaceForData) {
			data = { ...data };
			for (const key of optionsKeys) delete data[key];
		}
		return data;
	}
	static hasDefaultValue(options) {
		const prefix = "defaultValue";
		for (const option in options) if (Object.prototype.hasOwnProperty.call(options, option) && option.startsWith(prefix) && void 0 !== options[option]) return true;
		return false;
	}
};
var LanguageUtil = class {
	constructor(options) {
		this.options = options;
		this.supportedLngs = this.options.supportedLngs || false;
		this.logger = baseLogger.create("languageUtils");
	}
	getScriptPartFromCode(code) {
		code = getCleanedCode(code);
		if (!code || !code.includes("-")) return null;
		const p = code.split("-");
		if (p.length === 2) return null;
		p.pop();
		if (p[p.length - 1].toLowerCase() === "x") return null;
		return this.formatLanguageCode(p.join("-"));
	}
	getLanguagePartFromCode(code) {
		code = getCleanedCode(code);
		if (!code || !code.includes("-")) return code;
		const p = code.split("-");
		return this.formatLanguageCode(p[0]);
	}
	formatLanguageCode(code) {
		if (isString(code) && code.includes("-")) {
			let formattedCode;
			try {
				formattedCode = Intl.getCanonicalLocales(code)[0];
			} catch (e) {}
			if (formattedCode && this.options.lowerCaseLng) formattedCode = formattedCode.toLowerCase();
			if (formattedCode) return formattedCode;
			if (this.options.lowerCaseLng) return code.toLowerCase();
			return code;
		}
		return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
	}
	isSupportedCode(code) {
		if (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) code = this.getLanguagePartFromCode(code);
		return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.includes(code);
	}
	getBestMatchFromCodes(codes) {
		if (!codes) return null;
		let found;
		codes.forEach((code) => {
			if (found) return;
			const cleanedLng = this.formatLanguageCode(code);
			if (!this.options.supportedLngs || this.isSupportedCode(cleanedLng)) found = cleanedLng;
		});
		if (!found && this.options.supportedLngs) codes.forEach((code) => {
			if (found) return;
			const lngScOnly = this.getScriptPartFromCode(code);
			if (this.isSupportedCode(lngScOnly)) return found = lngScOnly;
			const lngOnly = this.getLanguagePartFromCode(code);
			if (this.isSupportedCode(lngOnly)) return found = lngOnly;
			found = this.options.supportedLngs.find((supportedLng) => {
				if (supportedLng === lngOnly) return true;
				if (!supportedLng.includes("-") && !lngOnly.includes("-")) return false;
				if (supportedLng.includes("-") && !lngOnly.includes("-") && supportedLng.slice(0, supportedLng.indexOf("-")) === lngOnly) return true;
				if (supportedLng.startsWith(lngOnly) && lngOnly.length > 1) return true;
				return false;
			});
		});
		if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
		return found;
	}
	getFallbackCodes(fallbacks, code) {
		if (!fallbacks) return [];
		if (typeof fallbacks === "function") fallbacks = fallbacks(code);
		if (isString(fallbacks)) fallbacks = [fallbacks];
		if (Array.isArray(fallbacks)) return fallbacks;
		if (!code) return fallbacks.default || [];
		let found = fallbacks[code];
		if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
		if (!found) found = fallbacks[this.formatLanguageCode(code)];
		if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
		if (!found) found = fallbacks.default;
		return found || [];
	}
	toResolveHierarchy(code, fallbackCode) {
		const fallbackCodes = this.getFallbackCodes((fallbackCode === false ? [] : fallbackCode) || this.options.fallbackLng || [], code);
		const codes = [];
		const addCode = (c) => {
			if (!c) return;
			if (this.isSupportedCode(c)) codes.push(c);
			else this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`);
		};
		if (isString(code) && (code.includes("-") || code.includes("_"))) {
			if (this.options.load !== "languageOnly") addCode(this.formatLanguageCode(code));
			if (this.options.load !== "languageOnly" && this.options.load !== "currentOnly") addCode(this.getScriptPartFromCode(code));
			if (this.options.load !== "currentOnly") addCode(this.getLanguagePartFromCode(code));
		} else if (isString(code)) addCode(this.formatLanguageCode(code));
		fallbackCodes.forEach((fc) => {
			if (!codes.includes(fc)) addCode(this.formatLanguageCode(fc));
		});
		return codes;
	}
};
var suffixesOrder = {
	zero: 0,
	one: 1,
	two: 2,
	few: 3,
	many: 4,
	other: 5
};
var dummyRule = {
	select: (count) => count === 1 ? "one" : "other",
	resolvedOptions: () => ({ pluralCategories: ["one", "other"] })
};
var PluralResolver = class {
	constructor(languageUtils, options = {}) {
		this.languageUtils = languageUtils;
		this.options = options;
		this.logger = baseLogger.create("pluralResolver");
		this.pluralRulesCache = {};
	}
	clearCache() {
		this.pluralRulesCache = {};
	}
	getRule(code, options = {}) {
		const cleanedCode = getCleanedCode(code === "dev" ? "en" : code);
		const type = options.ordinal ? "ordinal" : "cardinal";
		const cacheKey = JSON.stringify({
			cleanedCode,
			type
		});
		if (cacheKey in this.pluralRulesCache) return this.pluralRulesCache[cacheKey];
		let rule;
		try {
			rule = new Intl.PluralRules(cleanedCode, { type });
		} catch (err) {
			if (typeof Intl === "undefined") {
				this.logger.error("No Intl support, please use an Intl polyfill!");
				return dummyRule;
			}
			if (!code.match(/-|_/)) return dummyRule;
			const lngPart = this.languageUtils.getLanguagePartFromCode(code);
			rule = this.getRule(lngPart, options);
		}
		this.pluralRulesCache[cacheKey] = rule;
		return rule;
	}
	needsPlural(code, options = {}) {
		let rule = this.getRule(code, options);
		if (!rule) rule = this.getRule("dev", options);
		return rule?.resolvedOptions().pluralCategories.length > 1;
	}
	getPluralFormsOfKey(code, key, options = {}) {
		return this.getSuffixes(code, options).map((suffix) => `${key}${suffix}`);
	}
	getSuffixes(code, options = {}) {
		let rule = this.getRule(code, options);
		if (!rule) rule = this.getRule("dev", options);
		if (!rule) return [];
		return rule.resolvedOptions().pluralCategories.sort((pluralCategory1, pluralCategory2) => suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2]).map((pluralCategory) => `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${pluralCategory}`);
	}
	getSuffix(code, count, options = {}) {
		const rule = this.getRule(code, options);
		if (rule) return `${this.options.prepend}${options.ordinal ? `ordinal${this.options.prepend}` : ""}${rule.select(count)}`;
		this.logger.warn(`no plural rule found for: ${code}`);
		return this.getSuffix("dev", count, options);
	}
};
var deepFindWithDefaults = (data, defaultData, key, keySeparator = ".", ignoreJSONStructure = true) => {
	let path = getPathWithDefaults(data, defaultData, key);
	if (!path && ignoreJSONStructure && isString(key)) {
		path = deepFind(data, key, keySeparator);
		if (path === void 0) path = deepFind(defaultData, key, keySeparator);
	}
	return path;
};
var regexSafe = (val) => val.replace(/\$/g, "$$$$");
var Interpolator = class {
	constructor(options = {}) {
		this.logger = baseLogger.create("interpolator");
		this.options = options;
		this.format = options?.interpolation?.format || ((value) => value);
		this.init(options);
	}
	init(options = {}) {
		if (!options.interpolation) options.interpolation = { escapeValue: true };
		const { escape: escape$1, escapeValue, useRawValueToEscape, prefix, prefixEscaped, suffix, suffixEscaped, formatSeparator, unescapeSuffix, unescapePrefix, nestingPrefix, nestingPrefixEscaped, nestingSuffix, nestingSuffixEscaped, nestingOptionsSeparator, maxReplaces, alwaysFormat } = options.interpolation;
		this.escape = escape$1 !== void 0 ? escape$1 : escape;
		this.escapeValue = escapeValue !== void 0 ? escapeValue : true;
		this.useRawValueToEscape = useRawValueToEscape !== void 0 ? useRawValueToEscape : false;
		this.prefix = prefix ? regexEscape(prefix) : prefixEscaped || "{{";
		this.suffix = suffix ? regexEscape(suffix) : suffixEscaped || "}}";
		this.formatSeparator = formatSeparator || ",";
		this.unescapePrefix = unescapeSuffix ? "" : unescapePrefix || "-";
		this.unescapeSuffix = this.unescapePrefix ? "" : unescapeSuffix || "";
		this.nestingPrefix = nestingPrefix ? regexEscape(nestingPrefix) : nestingPrefixEscaped || regexEscape("$t(");
		this.nestingSuffix = nestingSuffix ? regexEscape(nestingSuffix) : nestingSuffixEscaped || regexEscape(")");
		this.nestingOptionsSeparator = nestingOptionsSeparator || ",";
		this.maxReplaces = maxReplaces || 1e3;
		this.alwaysFormat = alwaysFormat !== void 0 ? alwaysFormat : false;
		this.resetRegExp();
	}
	reset() {
		if (this.options) this.init(this.options);
	}
	resetRegExp() {
		const getOrResetRegExp = (existingRegExp, pattern) => {
			if (existingRegExp?.source === pattern) {
				existingRegExp.lastIndex = 0;
				return existingRegExp;
			}
			return new RegExp(pattern, "g");
		};
		this.regexp = getOrResetRegExp(this.regexp, `${this.prefix}(.+?)${this.suffix}`);
		this.regexpUnescape = getOrResetRegExp(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`);
		this.nestingRegexp = getOrResetRegExp(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
	}
	interpolate(str, data, lng, options) {
		let match;
		let value;
		let replaces;
		const defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
		const handleFormat = (key) => {
			if (!key.includes(this.formatSeparator)) {
				const path = deepFindWithDefaults(data, defaultData, key, this.options.keySeparator, this.options.ignoreJSONStructure);
				return this.alwaysFormat ? this.format(path, void 0, lng, {
					...options,
					...data,
					interpolationkey: key
				}) : path;
			}
			const p = key.split(this.formatSeparator);
			const k = p.shift().trim();
			const f = p.join(this.formatSeparator).trim();
			return this.format(deepFindWithDefaults(data, defaultData, k, this.options.keySeparator, this.options.ignoreJSONStructure), f, lng, {
				...options,
				...data,
				interpolationkey: k
			});
		};
		this.resetRegExp();
		const missingInterpolationHandler = options?.missingInterpolationHandler || this.options.missingInterpolationHandler;
		const skipOnVariables = options?.interpolation?.skipOnVariables !== void 0 ? options.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
		[{
			regex: this.regexpUnescape,
			safeValue: (val) => regexSafe(val)
		}, {
			regex: this.regexp,
			safeValue: (val) => this.escapeValue ? regexSafe(this.escape(val)) : regexSafe(val)
		}].forEach((todo) => {
			replaces = 0;
			while (match = todo.regex.exec(str)) {
				const matchedVar = match[1].trim();
				value = handleFormat(matchedVar);
				if (value === void 0) if (typeof missingInterpolationHandler === "function") {
					const temp = missingInterpolationHandler(str, match, options);
					value = isString(temp) ? temp : "";
				} else if (options && Object.prototype.hasOwnProperty.call(options, matchedVar)) value = "";
				else if (skipOnVariables) {
					value = match[0];
					continue;
				} else {
					this.logger.warn(`missed to pass in variable ${matchedVar} for interpolating ${str}`);
					value = "";
				}
				else if (!isString(value) && !this.useRawValueToEscape) value = makeString(value);
				const safeValue = todo.safeValue(value);
				str = str.replace(match[0], safeValue);
				if (skipOnVariables) {
					todo.regex.lastIndex += value.length;
					todo.regex.lastIndex -= match[0].length;
				} else todo.regex.lastIndex = 0;
				replaces++;
				if (replaces >= this.maxReplaces) break;
			}
		});
		return str;
	}
	nest(str, fc, options = {}) {
		let match;
		let value;
		let clonedOptions;
		const handleHasOptions = (key, inheritedOptions) => {
			const sep = this.nestingOptionsSeparator;
			if (!key.includes(sep)) return key;
			const c = key.split(new RegExp(`${regexEscape(sep)}[ ]*{`));
			let optionsString = `{${c[1]}`;
			key = c[0];
			optionsString = this.interpolate(optionsString, clonedOptions);
			const matchedSingleQuotes = optionsString.match(/'/g);
			const matchedDoubleQuotes = optionsString.match(/"/g);
			if ((matchedSingleQuotes?.length ?? 0) % 2 === 0 && !matchedDoubleQuotes || (matchedDoubleQuotes?.length ?? 0) % 2 !== 0) optionsString = optionsString.replace(/'/g, "\"");
			try {
				clonedOptions = JSON.parse(optionsString);
				if (inheritedOptions) clonedOptions = {
					...inheritedOptions,
					...clonedOptions
				};
			} catch (e) {
				this.logger.warn(`failed parsing options string in nesting for key ${key}`, e);
				return `${key}${sep}${optionsString}`;
			}
			if (clonedOptions.defaultValue && clonedOptions.defaultValue.includes(this.prefix)) delete clonedOptions.defaultValue;
			return key;
		};
		while (match = this.nestingRegexp.exec(str)) {
			let formatters = [];
			clonedOptions = { ...options };
			clonedOptions = clonedOptions.replace && !isString(clonedOptions.replace) ? clonedOptions.replace : clonedOptions;
			clonedOptions.applyPostProcessor = false;
			delete clonedOptions.defaultValue;
			const keyEndIndex = /{.*}/.test(match[1]) ? match[1].lastIndexOf("}") + 1 : match[1].indexOf(this.formatSeparator);
			if (keyEndIndex !== -1) {
				formatters = match[1].slice(keyEndIndex).split(this.formatSeparator).map((elem) => elem.trim()).filter(Boolean);
				match[1] = match[1].slice(0, keyEndIndex);
			}
			value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
			if (value && match[0] === str && !isString(value)) return value;
			if (!isString(value)) value = makeString(value);
			if (!value) {
				this.logger.warn(`missed to resolve ${match[1]} for nesting ${str}`);
				value = "";
			}
			if (formatters.length) value = formatters.reduce((v, f) => this.format(v, f, options.lng, {
				...options,
				interpolationkey: match[1].trim()
			}), value.trim());
			str = str.replace(match[0], value);
			this.regexp.lastIndex = 0;
		}
		return str;
	}
};
var parseFormatStr = (formatStr) => {
	let formatName = formatStr.toLowerCase().trim();
	const formatOptions = {};
	if (formatStr.includes("(")) {
		const p = formatStr.split("(");
		formatName = p[0].toLowerCase().trim();
		const optStr = p[1].slice(0, -1);
		if (formatName === "currency" && !optStr.includes(":")) {
			if (!formatOptions.currency) formatOptions.currency = optStr.trim();
		} else if (formatName === "relativetime" && !optStr.includes(":")) {
			if (!formatOptions.range) formatOptions.range = optStr.trim();
		} else optStr.split(";").forEach((opt) => {
			if (opt) {
				const [key, ...rest] = opt.split(":");
				const val = rest.join(":").trim().replace(/^'+|'+$/g, "");
				const trimmedKey = key.trim();
				if (!formatOptions[trimmedKey]) formatOptions[trimmedKey] = val;
				if (val === "false") formatOptions[trimmedKey] = false;
				if (val === "true") formatOptions[trimmedKey] = true;
				if (!isNaN(val)) formatOptions[trimmedKey] = parseInt(val, 10);
			}
		});
	}
	return {
		formatName,
		formatOptions
	};
};
var createCachedFormatter = (fn) => {
	const cache = {};
	return (v, l, o) => {
		let optForCache = o;
		if (o && o.interpolationkey && o.formatParams && o.formatParams[o.interpolationkey] && o[o.interpolationkey]) optForCache = {
			...optForCache,
			[o.interpolationkey]: void 0
		};
		const key = l + JSON.stringify(optForCache);
		let frm = cache[key];
		if (!frm) {
			frm = fn(getCleanedCode(l), o);
			cache[key] = frm;
		}
		return frm(v);
	};
};
var createNonCachedFormatter = (fn) => (v, l, o) => fn(getCleanedCode(l), o)(v);
var Formatter = class {
	constructor(options = {}) {
		this.logger = baseLogger.create("formatter");
		this.options = options;
		this.init(options);
	}
	init(services, options = { interpolation: {} }) {
		this.formatSeparator = options.interpolation.formatSeparator || ",";
		const cf = options.cacheInBuiltFormats ? createCachedFormatter : createNonCachedFormatter;
		this.formats = {
			number: cf((lng, opt) => {
				const formatter = new Intl.NumberFormat(lng, { ...opt });
				return (val) => formatter.format(val);
			}),
			currency: cf((lng, opt) => {
				const formatter = new Intl.NumberFormat(lng, {
					...opt,
					style: "currency"
				});
				return (val) => formatter.format(val);
			}),
			datetime: cf((lng, opt) => {
				const formatter = new Intl.DateTimeFormat(lng, { ...opt });
				return (val) => formatter.format(val);
			}),
			relativetime: cf((lng, opt) => {
				const formatter = new Intl.RelativeTimeFormat(lng, { ...opt });
				return (val) => formatter.format(val, opt.range || "day");
			}),
			list: cf((lng, opt) => {
				const formatter = new Intl.ListFormat(lng, { ...opt });
				return (val) => formatter.format(val);
			})
		};
	}
	add(name, fc) {
		this.formats[name.toLowerCase().trim()] = fc;
	}
	addCached(name, fc) {
		this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
	}
	format(value, format, lng, options = {}) {
		if (!format) return value;
		if (value == null) return value;
		const formats = format.split(this.formatSeparator);
		if (formats.length > 1 && formats[0].indexOf("(") > 1 && !formats[0].includes(")") && formats.find((f) => f.includes(")"))) {
			const lastIndex = formats.findIndex((f) => f.includes(")"));
			formats[0] = [formats[0], ...formats.splice(1, lastIndex)].join(this.formatSeparator);
		}
		return formats.reduce((mem, f) => {
			const { formatName, formatOptions } = parseFormatStr(f);
			if (this.formats[formatName]) {
				let formatted = mem;
				try {
					const valOptions = options?.formatParams?.[options.interpolationkey] || {};
					const l = valOptions.locale || valOptions.lng || options.locale || options.lng || lng;
					formatted = this.formats[formatName](mem, l, {
						...formatOptions,
						...options,
						...valOptions
					});
				} catch (error) {
					this.logger.warn(error);
				}
				return formatted;
			} else this.logger.warn(`there was no format function for ${formatName}`);
			return mem;
		}, value);
	}
};
var removePending = (q, name) => {
	if (q.pending[name] !== void 0) {
		delete q.pending[name];
		q.pendingCount--;
	}
};
var Connector = class extends EventEmitter {
	constructor(backend, store, services, options = {}) {
		super();
		this.backend = backend;
		this.store = store;
		this.services = services;
		this.languageUtils = services.languageUtils;
		this.options = options;
		this.logger = baseLogger.create("backendConnector");
		this.waitingReads = [];
		this.maxParallelReads = options.maxParallelReads || 10;
		this.readingCalls = 0;
		this.maxRetries = options.maxRetries >= 0 ? options.maxRetries : 5;
		this.retryTimeout = options.retryTimeout >= 1 ? options.retryTimeout : 350;
		this.state = {};
		this.queue = [];
		this.backend?.init?.(services, options.backend, options);
	}
	queueLoad(languages, namespaces, options, callback) {
		const toLoad = {};
		const pending = {};
		const toLoadLanguages = {};
		const toLoadNamespaces = {};
		languages.forEach((lng) => {
			let hasAllNamespaces = true;
			namespaces.forEach((ns) => {
				const name = `${lng}|${ns}`;
				if (!options.reload && this.store.hasResourceBundle(lng, ns)) this.state[name] = 2;
				else if (this.state[name] < 0);
				else if (this.state[name] === 1) {
					if (pending[name] === void 0) pending[name] = true;
				} else {
					this.state[name] = 1;
					hasAllNamespaces = false;
					if (pending[name] === void 0) pending[name] = true;
					if (toLoad[name] === void 0) toLoad[name] = true;
					if (toLoadNamespaces[ns] === void 0) toLoadNamespaces[ns] = true;
				}
			});
			if (!hasAllNamespaces) toLoadLanguages[lng] = true;
		});
		if (Object.keys(toLoad).length || Object.keys(pending).length) this.queue.push({
			pending,
			pendingCount: Object.keys(pending).length,
			loaded: {},
			errors: [],
			callback
		});
		return {
			toLoad: Object.keys(toLoad),
			pending: Object.keys(pending),
			toLoadLanguages: Object.keys(toLoadLanguages),
			toLoadNamespaces: Object.keys(toLoadNamespaces)
		};
	}
	loaded(name, err, data) {
		const s = name.split("|");
		const lng = s[0];
		const ns = s[1];
		if (err) this.emit("failedLoading", lng, ns, err);
		if (!err && data) this.store.addResourceBundle(lng, ns, data, void 0, void 0, { skipCopy: true });
		this.state[name] = err ? -1 : 2;
		if (err && data) this.state[name] = 0;
		const loaded = {};
		this.queue.forEach((q) => {
			pushPath(q.loaded, [lng], ns);
			removePending(q, name);
			if (err) q.errors.push(err);
			if (q.pendingCount === 0 && !q.done) {
				Object.keys(q.loaded).forEach((l) => {
					if (!loaded[l]) loaded[l] = {};
					const loadedKeys = q.loaded[l];
					if (loadedKeys.length) loadedKeys.forEach((n) => {
						if (loaded[l][n] === void 0) loaded[l][n] = true;
					});
				});
				q.done = true;
				if (q.errors.length) q.callback(q.errors);
				else q.callback();
			}
		});
		this.emit("loaded", loaded);
		this.queue = this.queue.filter((q) => !q.done);
	}
	read(lng, ns, fcName, tried = 0, wait = this.retryTimeout, callback) {
		if (!lng.length) return callback(null, {});
		if (this.readingCalls >= this.maxParallelReads) {
			this.waitingReads.push({
				lng,
				ns,
				fcName,
				tried,
				wait,
				callback
			});
			return;
		}
		this.readingCalls++;
		const resolver = (err, data) => {
			this.readingCalls--;
			if (this.waitingReads.length > 0) {
				const next = this.waitingReads.shift();
				this.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
			}
			if (err && data && tried < this.maxRetries) {
				setTimeout(() => {
					this.read(lng, ns, fcName, tried + 1, wait * 2, callback);
				}, wait);
				return;
			}
			callback(err, data);
		};
		const fc = this.backend[fcName].bind(this.backend);
		if (fc.length === 2) {
			try {
				const r = fc(lng, ns);
				if (r && typeof r.then === "function") r.then((data) => resolver(null, data)).catch(resolver);
				else resolver(null, r);
			} catch (err) {
				resolver(err);
			}
			return;
		}
		return fc(lng, ns, resolver);
	}
	prepareLoading(languages, namespaces, options = {}, callback) {
		if (!this.backend) {
			this.logger.warn("No backend was added via i18next.use. Will not load resources.");
			return callback && callback();
		}
		if (isString(languages)) languages = this.languageUtils.toResolveHierarchy(languages);
		if (isString(namespaces)) namespaces = [namespaces];
		const toLoad = this.queueLoad(languages, namespaces, options, callback);
		if (!toLoad.toLoad.length) {
			if (!toLoad.pending.length) callback();
			return null;
		}
		toLoad.toLoad.forEach((name) => {
			this.loadOne(name);
		});
	}
	load(languages, namespaces, callback) {
		this.prepareLoading(languages, namespaces, {}, callback);
	}
	reload(languages, namespaces, callback) {
		this.prepareLoading(languages, namespaces, { reload: true }, callback);
	}
	loadOne(name, prefix = "") {
		const s = name.split("|");
		const lng = s[0];
		const ns = s[1];
		this.read(lng, ns, "read", void 0, void 0, (err, data) => {
			if (err) this.logger.warn(`${prefix}loading namespace ${ns} for language ${lng} failed`, err);
			if (!err && data) this.logger.log(`${prefix}loaded namespace ${ns} for language ${lng}`, data);
			this.loaded(name, err, data);
		});
	}
	saveMissing(languages, namespace, key, fallbackValue, isUpdate, options = {}, clb = () => {}) {
		if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(namespace)) {
			this.logger.warn(`did not save key "${key}" as the namespace "${namespace}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
			return;
		}
		if (key === void 0 || key === null || key === "") return;
		if (this.backend?.create) {
			const opts = {
				...options,
				isUpdate
			};
			const fc = this.backend.create.bind(this.backend);
			if (fc.length < 6) try {
				let r;
				if (fc.length === 5) r = fc(languages, namespace, key, fallbackValue, opts);
				else r = fc(languages, namespace, key, fallbackValue);
				if (r && typeof r.then === "function") r.then((data) => clb(null, data)).catch(clb);
				else clb(null, r);
			} catch (err) {
				clb(err);
			}
			else fc(languages, namespace, key, fallbackValue, clb, opts);
		}
		if (!languages || !languages[0]) return;
		this.store.addResource(languages[0], namespace, key, fallbackValue);
	}
};
var get = () => ({
	debug: false,
	initAsync: true,
	ns: ["translation"],
	defaultNS: ["translation"],
	fallbackLng: ["dev"],
	fallbackNS: false,
	supportedLngs: false,
	nonExplicitSupportedLngs: false,
	load: "all",
	preload: false,
	keySeparator: ".",
	nsSeparator: ":",
	pluralSeparator: "_",
	contextSeparator: "_",
	partialBundledLanguages: false,
	saveMissing: false,
	updateMissing: false,
	saveMissingTo: "fallback",
	saveMissingPlurals: true,
	missingKeyHandler: false,
	missingInterpolationHandler: false,
	postProcess: false,
	postProcessPassResolved: false,
	returnNull: false,
	returnEmptyString: true,
	returnObjects: false,
	joinArrays: false,
	returnedObjectHandler: false,
	parseMissingKeyHandler: false,
	appendNamespaceToMissingKey: false,
	appendNamespaceToCIMode: false,
	overloadTranslationOptionHandler: (args) => {
		let ret = {};
		if (typeof args[1] === "object") ret = args[1];
		if (isString(args[1])) ret.defaultValue = args[1];
		if (isString(args[2])) ret.tDescription = args[2];
		if (typeof args[2] === "object" || typeof args[3] === "object") {
			const options = args[3] || args[2];
			Object.keys(options).forEach((key) => {
				ret[key] = options[key];
			});
		}
		return ret;
	},
	interpolation: {
		escapeValue: true,
		prefix: "{{",
		suffix: "}}",
		formatSeparator: ",",
		unescapePrefix: "-",
		nestingPrefix: "$t(",
		nestingSuffix: ")",
		nestingOptionsSeparator: ",",
		maxReplaces: 1e3,
		skipOnVariables: true
	},
	cacheInBuiltFormats: true
});
var transformOptions = (options) => {
	if (isString(options.ns)) options.ns = [options.ns];
	if (isString(options.fallbackLng)) options.fallbackLng = [options.fallbackLng];
	if (isString(options.fallbackNS)) options.fallbackNS = [options.fallbackNS];
	if (options.supportedLngs && !options.supportedLngs.includes("cimode")) options.supportedLngs = options.supportedLngs.concat(["cimode"]);
	return options;
};
var noop = () => {};
var bindMemberFunctions = (inst) => {
	Object.getOwnPropertyNames(Object.getPrototypeOf(inst)).forEach((mem) => {
		if (typeof inst[mem] === "function") inst[mem] = inst[mem].bind(inst);
	});
};
var instance = class I18n extends EventEmitter {
	constructor(options = {}, callback) {
		super();
		this.options = transformOptions(options);
		this.services = {};
		this.logger = baseLogger;
		this.modules = { external: [] };
		bindMemberFunctions(this);
		if (callback && !this.isInitialized && !options.isClone) {
			if (!this.options.initAsync) {
				this.init(options, callback);
				return this;
			}
			setTimeout(() => {
				this.init(options, callback);
			}, 0);
		}
	}
	init(options = {}, callback) {
		this.isInitializing = true;
		if (typeof options === "function") {
			callback = options;
			options = {};
		}
		if (options.defaultNS == null && options.ns) {
			if (isString(options.ns)) options.defaultNS = options.ns;
			else if (!options.ns.includes("translation")) options.defaultNS = options.ns[0];
		}
		const defOpts = get();
		this.options = {
			...defOpts,
			...this.options,
			...transformOptions(options)
		};
		this.options.interpolation = {
			...defOpts.interpolation,
			...this.options.interpolation
		};
		if (options.keySeparator !== void 0) this.options.userDefinedKeySeparator = options.keySeparator;
		if (options.nsSeparator !== void 0) this.options.userDefinedNsSeparator = options.nsSeparator;
		if (typeof this.options.overloadTranslationOptionHandler !== "function") this.options.overloadTranslationOptionHandler = defOpts.overloadTranslationOptionHandler;
		const createClassOnDemand = (ClassOrObject) => {
			if (!ClassOrObject) return null;
			if (typeof ClassOrObject === "function") return new ClassOrObject();
			return ClassOrObject;
		};
		if (!this.options.isClone) {
			if (this.modules.logger) baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
			else baseLogger.init(null, this.options);
			let formatter;
			if (this.modules.formatter) formatter = this.modules.formatter;
			else formatter = Formatter;
			const lu = new LanguageUtil(this.options);
			this.store = new ResourceStore(this.options.resources, this.options);
			const s = this.services;
			s.logger = baseLogger;
			s.resourceStore = this.store;
			s.languageUtils = lu;
			s.pluralResolver = new PluralResolver(lu, { prepend: this.options.pluralSeparator });
			if (formatter) {
				s.formatter = createClassOnDemand(formatter);
				if (s.formatter.init) s.formatter.init(s, this.options);
				this.options.interpolation.format = s.formatter.format.bind(s.formatter);
			}
			s.interpolator = new Interpolator(this.options);
			s.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) };
			s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
			s.backendConnector.on("*", (event, ...args) => {
				this.emit(event, ...args);
			});
			if (this.modules.languageDetector) {
				s.languageDetector = createClassOnDemand(this.modules.languageDetector);
				if (s.languageDetector.init) s.languageDetector.init(s, this.options.detection, this.options);
			}
			if (this.modules.i18nFormat) {
				s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
				if (s.i18nFormat.init) s.i18nFormat.init(this);
			}
			this.translator = new Translator(this.services, this.options);
			this.translator.on("*", (event, ...args) => {
				this.emit(event, ...args);
			});
			this.modules.external.forEach((m) => {
				if (m.init) m.init(this);
			});
		}
		this.format = this.options.interpolation.format;
		if (!callback) callback = noop;
		if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
			const codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
			if (codes.length > 0 && codes[0] !== "dev") this.options.lng = codes[0];
		}
		if (!this.services.languageDetector && !this.options.lng) this.logger.warn("init: no languageDetector is used and no lng is defined");
		[
			"getResource",
			"hasResourceBundle",
			"getResourceBundle",
			"getDataByLanguage"
		].forEach((fcName) => {
			this[fcName] = (...args) => this.store[fcName](...args);
		});
		[
			"addResource",
			"addResources",
			"addResourceBundle",
			"removeResourceBundle"
		].forEach((fcName) => {
			this[fcName] = (...args) => {
				this.store[fcName](...args);
				return this;
			};
		});
		const deferred = defer();
		const load = () => {
			const finish = (err, t) => {
				this.isInitializing = false;
				if (this.isInitialized && !this.initializedStoreOnce) this.logger.warn("init: i18next is already initialized. You should call init just once!");
				this.isInitialized = true;
				if (!this.options.isClone) this.logger.log("initialized", this.options);
				this.emit("initialized", this.options);
				deferred.resolve(t);
				callback(err, t);
			};
			if (this.languages && !this.isInitialized) return finish(null, this.t.bind(this));
			this.changeLanguage(this.options.lng, finish);
		};
		if (this.options.resources || !this.options.initAsync) load();
		else setTimeout(load, 0);
		return deferred;
	}
	loadResources(language, callback = noop) {
		let usedCallback = callback;
		const usedLng = isString(language) ? language : this.language;
		if (typeof language === "function") usedCallback = language;
		if (!this.options.resources || this.options.partialBundledLanguages) {
			if (usedLng?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return usedCallback();
			const toLoad = [];
			const append = (lng) => {
				if (!lng) return;
				if (lng === "cimode") return;
				this.services.languageUtils.toResolveHierarchy(lng).forEach((l) => {
					if (l === "cimode") return;
					if (!toLoad.includes(l)) toLoad.push(l);
				});
			};
			if (!usedLng) this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => append(l));
			else append(usedLng);
			this.options.preload?.forEach?.((l) => append(l));
			this.services.backendConnector.load(toLoad, this.options.ns, (e) => {
				if (!e && !this.resolvedLanguage && this.language) this.setResolvedLanguage(this.language);
				usedCallback(e);
			});
		} else usedCallback(null);
	}
	reloadResources(lngs, ns, callback) {
		const deferred = defer();
		if (typeof lngs === "function") {
			callback = lngs;
			lngs = void 0;
		}
		if (typeof ns === "function") {
			callback = ns;
			ns = void 0;
		}
		if (!lngs) lngs = this.languages;
		if (!ns) ns = this.options.ns;
		if (!callback) callback = noop;
		this.services.backendConnector.reload(lngs, ns, (err) => {
			deferred.resolve();
			callback(err);
		});
		return deferred;
	}
	use(module) {
		if (!module) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
		if (!module.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
		if (module.type === "backend") this.modules.backend = module;
		if (module.type === "logger" || module.log && module.warn && module.error) this.modules.logger = module;
		if (module.type === "languageDetector") this.modules.languageDetector = module;
		if (module.type === "i18nFormat") this.modules.i18nFormat = module;
		if (module.type === "postProcessor") postProcessor.addPostProcessor(module);
		if (module.type === "formatter") this.modules.formatter = module;
		if (module.type === "3rdParty") this.modules.external.push(module);
		return this;
	}
	setResolvedLanguage(l) {
		if (!l || !this.languages) return;
		if (["cimode", "dev"].includes(l)) return;
		for (let li = 0; li < this.languages.length; li++) {
			const lngInLngs = this.languages[li];
			if (["cimode", "dev"].includes(lngInLngs)) continue;
			if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
				this.resolvedLanguage = lngInLngs;
				break;
			}
		}
		if (!this.resolvedLanguage && !this.languages.includes(l) && this.store.hasLanguageSomeTranslations(l)) {
			this.resolvedLanguage = l;
			this.languages.unshift(l);
		}
	}
	changeLanguage(lng, callback) {
		this.isLanguageChangingTo = lng;
		const deferred = defer();
		this.emit("languageChanging", lng);
		const setLngProps = (l) => {
			this.language = l;
			this.languages = this.services.languageUtils.toResolveHierarchy(l);
			this.resolvedLanguage = void 0;
			this.setResolvedLanguage(l);
		};
		const done = (err, l) => {
			if (l) {
				if (this.isLanguageChangingTo === lng) {
					setLngProps(l);
					this.translator.changeLanguage(l);
					this.isLanguageChangingTo = void 0;
					this.emit("languageChanged", l);
					this.logger.log("languageChanged", l);
				}
			} else this.isLanguageChangingTo = void 0;
			deferred.resolve((...args) => this.t(...args));
			if (callback) callback(err, (...args) => this.t(...args));
		};
		const setLng = (lngs) => {
			if (!lng && !lngs && this.services.languageDetector) lngs = [];
			const fl = isString(lngs) ? lngs : lngs && lngs[0];
			const l = this.store.hasLanguageSomeTranslations(fl) ? fl : this.services.languageUtils.getBestMatchFromCodes(isString(lngs) ? [lngs] : lngs);
			if (l) {
				if (!this.language) setLngProps(l);
				if (!this.translator.language) this.translator.changeLanguage(l);
				this.services.languageDetector?.cacheUserLanguage?.(l);
			}
			this.loadResources(l, (err) => {
				done(err, l);
			});
		};
		if (!lng && this.services.languageDetector && !this.services.languageDetector.async) setLng(this.services.languageDetector.detect());
		else if (!lng && this.services.languageDetector && this.services.languageDetector.async) if (this.services.languageDetector.detect.length === 0) this.services.languageDetector.detect().then(setLng);
		else this.services.languageDetector.detect(setLng);
		else setLng(lng);
		return deferred;
	}
	getFixedT(lng, ns, keyPrefix) {
		const fixedT = (key, opts, ...rest) => {
			let o;
			if (typeof opts !== "object") o = this.options.overloadTranslationOptionHandler([key, opts].concat(rest));
			else o = { ...opts };
			o.lng = o.lng || fixedT.lng;
			o.lngs = o.lngs || fixedT.lngs;
			o.ns = o.ns || fixedT.ns;
			if (o.keyPrefix !== "") o.keyPrefix = o.keyPrefix || keyPrefix || fixedT.keyPrefix;
			const selectorOpts = {
				...this.options,
				...o
			};
			if (typeof o.keyPrefix === "function") o.keyPrefix = keysFromSelector(o.keyPrefix, selectorOpts);
			const keySeparator = this.options.keySeparator || ".";
			let resultKey;
			if (o.keyPrefix && Array.isArray(key)) resultKey = key.map((k) => {
				if (typeof k === "function") k = keysFromSelector(k, selectorOpts);
				return `${o.keyPrefix}${keySeparator}${k}`;
			});
			else {
				if (typeof key === "function") key = keysFromSelector(key, selectorOpts);
				resultKey = o.keyPrefix ? `${o.keyPrefix}${keySeparator}${key}` : key;
			}
			return this.t(resultKey, o);
		};
		if (isString(lng)) fixedT.lng = lng;
		else fixedT.lngs = lng;
		fixedT.ns = ns;
		fixedT.keyPrefix = keyPrefix;
		return fixedT;
	}
	t(...args) {
		return this.translator?.translate(...args);
	}
	exists(...args) {
		return this.translator?.exists(...args);
	}
	setDefaultNamespace(ns) {
		this.options.defaultNS = ns;
	}
	hasLoadedNamespace(ns, options = {}) {
		if (!this.isInitialized) {
			this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages);
			return false;
		}
		if (!this.languages || !this.languages.length) {
			this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages);
			return false;
		}
		const lng = options.lng || this.resolvedLanguage || this.languages[0];
		const fallbackLng = this.options ? this.options.fallbackLng : false;
		const lastLng = this.languages[this.languages.length - 1];
		if (lng.toLowerCase() === "cimode") return true;
		const loadNotPending = (l, n) => {
			const loadState = this.services.backendConnector.state[`${l}|${n}`];
			return loadState === -1 || loadState === 0 || loadState === 2;
		};
		if (options.precheck) {
			const preResult = options.precheck(this, loadNotPending);
			if (preResult !== void 0) return preResult;
		}
		if (this.hasResourceBundle(lng, ns)) return true;
		if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
		if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
		return false;
	}
	loadNamespaces(ns, callback) {
		const deferred = defer();
		if (!this.options.ns) {
			if (callback) callback();
			return Promise.resolve();
		}
		if (isString(ns)) ns = [ns];
		ns.forEach((n) => {
			if (!this.options.ns.includes(n)) this.options.ns.push(n);
		});
		this.loadResources((err) => {
			deferred.resolve();
			if (callback) callback(err);
		});
		return deferred;
	}
	loadLanguages(lngs, callback) {
		const deferred = defer();
		if (isString(lngs)) lngs = [lngs];
		const preloaded = this.options.preload || [];
		const newLngs = lngs.filter((lng) => !preloaded.includes(lng) && this.services.languageUtils.isSupportedCode(lng));
		if (!newLngs.length) {
			if (callback) callback();
			return Promise.resolve();
		}
		this.options.preload = preloaded.concat(newLngs);
		this.loadResources((err) => {
			deferred.resolve();
			if (callback) callback(err);
		});
		return deferred;
	}
	dir(lng) {
		if (!lng) lng = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language);
		if (!lng) return "rtl";
		try {
			const l = new Intl.Locale(lng);
			if (l && l.getTextInfo) {
				const ti = l.getTextInfo();
				if (ti && ti.direction) return ti.direction;
			}
		} catch (e) {}
		const rtlLngs = [
			"ar",
			"shu",
			"sqr",
			"ssh",
			"xaa",
			"yhd",
			"yud",
			"aao",
			"abh",
			"abv",
			"acm",
			"acq",
			"acw",
			"acx",
			"acy",
			"adf",
			"ads",
			"aeb",
			"aec",
			"afb",
			"ajp",
			"apc",
			"apd",
			"arb",
			"arq",
			"ars",
			"ary",
			"arz",
			"auz",
			"avl",
			"ayh",
			"ayl",
			"ayn",
			"ayp",
			"bbz",
			"pga",
			"he",
			"iw",
			"ps",
			"pbt",
			"pbu",
			"pst",
			"prp",
			"prd",
			"ug",
			"ur",
			"ydd",
			"yds",
			"yih",
			"ji",
			"yi",
			"hbo",
			"men",
			"xmn",
			"fa",
			"jpr",
			"peo",
			"pes",
			"prs",
			"dv",
			"sam",
			"ckb"
		];
		const languageUtils = this.services?.languageUtils || new LanguageUtil(get());
		if (lng.toLowerCase().indexOf("-latn") > 1) return "ltr";
		return rtlLngs.includes(languageUtils.getLanguagePartFromCode(lng)) || lng.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
	}
	static createInstance(options = {}, callback) {
		const instance = new I18n(options, callback);
		instance.createInstance = I18n.createInstance;
		return instance;
	}
	cloneInstance(options = {}, callback = noop) {
		const forkResourceStore = options.forkResourceStore;
		if (forkResourceStore) delete options.forkResourceStore;
		const mergedOptions = {
			...this.options,
			...options,
			isClone: true
		};
		const clone = new I18n(mergedOptions);
		if (options.debug !== void 0 || options.prefix !== void 0) clone.logger = clone.logger.clone(options);
		[
			"store",
			"services",
			"language"
		].forEach((m) => {
			clone[m] = this[m];
		});
		clone.services = { ...this.services };
		clone.services.utils = { hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone) };
		if (forkResourceStore) {
			clone.store = new ResourceStore(Object.keys(this.store.data).reduce((prev, l) => {
				prev[l] = { ...this.store.data[l] };
				prev[l] = Object.keys(prev[l]).reduce((acc, n) => {
					acc[n] = { ...prev[l][n] };
					return acc;
				}, prev[l]);
				return prev;
			}, {}), mergedOptions);
			clone.services.resourceStore = clone.store;
		}
		if (options.interpolation) {
			const mergedInterpolation = {
				...get().interpolation,
				...this.options.interpolation,
				...options.interpolation
			};
			const mergedForInterpolator = {
				...mergedOptions,
				interpolation: mergedInterpolation
			};
			clone.services.interpolator = new Interpolator(mergedForInterpolator);
		}
		clone.translator = new Translator(clone.services, mergedOptions);
		clone.translator.on("*", (event, ...args) => {
			clone.emit(event, ...args);
		});
		clone.init(mergedOptions, callback);
		clone.translator.options = mergedOptions;
		clone.translator.backendConnector.services.utils = { hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone) };
		return clone;
	}
	toJSON() {
		return {
			options: this.options,
			store: this.store,
			language: this.language,
			languages: this.languages,
			resolvedLanguage: this.resolvedLanguage
		};
	}
}.createInstance();
instance.createInstance;
instance.dir;
instance.init;
instance.loadResources;
instance.reloadResources;
instance.use;
instance.changeLanguage;
instance.getFixedT;
instance.t;
instance.exists;
instance.setDefaultNamespace;
instance.hasLoadedNamespace;
instance.loadNamespaces;
instance.loadLanguages;
//#endregion
//#region ../../node_modules/.bun/react-i18next@17.0.2+e79e2198a3ad32db/node_modules/react-i18next/dist/es/unescape.js
var matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
var htmlEntities = {
	"&amp;": "&",
	"&#38;": "&",
	"&lt;": "<",
	"&#60;": "<",
	"&gt;": ">",
	"&#62;": ">",
	"&apos;": "'",
	"&#39;": "'",
	"&quot;": "\"",
	"&#34;": "\"",
	"&nbsp;": " ",
	"&#160;": " ",
	"&copy;": "©",
	"&#169;": "©",
	"&reg;": "®",
	"&#174;": "®",
	"&hellip;": "…",
	"&#8230;": "…",
	"&#x2F;": "/",
	"&#47;": "/"
};
var unescapeHtmlEntity = (m) => htmlEntities[m];
var unescape = (text) => text.replace(matchHtmlEntity, unescapeHtmlEntity);
//#endregion
//#region ../../node_modules/.bun/react-i18next@17.0.2+e79e2198a3ad32db/node_modules/react-i18next/dist/es/defaults.js
var defaultOptions = {
	bindI18n: "languageChanged",
	bindI18nStore: "",
	transEmptyNodeValue: "",
	transSupportBasicHtmlNodes: true,
	transWrapTextNodes: "",
	transKeepBasicHtmlNodesFor: [
		"br",
		"strong",
		"i",
		"p"
	],
	useSuspense: true,
	unescape,
	transDefaultProps: void 0
};
var setDefaults = (options = {}) => {
	defaultOptions = {
		...defaultOptions,
		...options
	};
};
var setI18n = (instance) => {};
//#endregion
//#region ../../node_modules/.bun/react-i18next@17.0.2+e79e2198a3ad32db/node_modules/react-i18next/dist/es/initReactI18next.js
var initReactI18next = {
	type: "3rdParty",
	init(instance) {
		setDefaults(instance.options.react);
		setI18n(instance);
	}
};
//#endregion
//#region ../../node_modules/.bun/react-i18next@17.0.2+e79e2198a3ad32db/node_modules/react-i18next/dist/es/context.js
var I18nContext = createContext();
//#endregion
//#region ../../node_modules/.bun/react-i18next@17.0.2+e79e2198a3ad32db/node_modules/react-i18next/dist/es/I18nextProvider.js
function I18nextProvider({ i18n, defaultNS, children }) {
	const value = useMemo(() => ({
		i18n,
		defaultNS
	}), [i18n, defaultNS]);
	return createElement(I18nContext.Provider, { value }, children);
}
//#endregion
//#region ../../test-utils/src/browser-metrics.ts
/**
* Utilities for browser-side performance measurement and monitoring.
* These are intended to be used within the benchmark applications.
*/
/**
* Records and logs hydration duration using the Performance API.
* This should be called in a \`useEffect\` hook within the root component
* to mark the end of the hydration process.
*
* It expects a "hydration_start" mark to have been previously set
* (e.g., in a script tag in the document's head).
*/
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
/**
* A standard Profiler onRender callback that collects metrics into a global object.
* This allows automated tests to retrieve render performance data from the browser.
*/
function onRenderCallback(id, phase, actualDuration) {
	if (typeof window === "undefined") return;
	if (phase === "nested-update") return;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {};
	window.__RENDER_METRICS__[id] = window.__RENDER_METRICS__[id] || [];
	window.__RENDER_METRICS__[id].push(actualDuration);
}
//#endregion
//#region i18n/i18n.ts
instance.use(initReactI18next).init({
	resources: {
		de: { translation: {
			"faq.faqList.howAreTheBenchmarks": "Wie werden die Benchmarks durchgeführt?",
			"faq.faqList.allBenchmarksAreRun": "Alle Benchmarks werden mit Playwright auf einem einheitlichen Hardware-Setup (M2 MacBook Pro) mit simulierten 4G-Netzwerkbedingungen ausgeführt. Jeder Test umfasst 50 Iterationen, und wir geben den Median, P95- und P99-Werte an.",
			"faq.faqList.whatLibrariesAreCurrently": "Welche Bibliotheken werden derzeit getestet?",
			"faq.faqList.weCurrentlyBenchmarkReactI18next": "Wir benchmarken derzeit react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl und Paraglide. Wir planen, basierend auf Community-Anfragen weitere hinzuzufügen.",
			"faq.faqList.canIContributeA": "Kann ich eine neue Bibliotheksintegration beisteuern?",
			"faq.faqList.absolutelyWeWelcomeCommunity": "Absolut! Wir begrüßen Beiträge aus der Community. Forken Sie das Repository, fügen Sie Ihre Bibliotheksintegration gemäß unserer Vorlage hinzu und senden Sie einen Pull-Request.",
			"faq.faqList.howOftenAreResults": "Wie oft werden die Ergebnisse aktualisiert?",
			"faq.faqList.benchmarksRunAutomaticallyVia": "Benchmarks laufen automatisch über CI bei jedem Dependency-Update und wöchentlich auf dem Main-Branch. Ergebnisse werden innerhalb von 24 Stunden auf dem Dashboard veröffentlicht.",
			"faq.faqList.areTheResultsStatistically": "Sind die Ergebnisse statistisch signifikant?",
			"faq.faqList.yesWeUseThe": "Ja. Wir verwenden den Mann-Whitney-U-Test mit einem Signifikanzniveau von 0,05, um Verteilungen zu vergleichen. Wir geben auch Konfidenzintervalle und Effektstärken an.",
			"faq.faq-header1.frequentlyAskedQuestions": "Häufig gestellte Fragen",
			"faq.faq-header1.everythingYouNeedToKnow": "Alles, was Sie über das i18n-Benchmark-Projekt wissen müssen.",
			"settings.preferencesSection.preferences": "Einstellungen",
			"settings.preferencesSection.emailNotifications": "E-Mail-Benachrichtigungen",
			"settings.preferencesSection.receiveWeeklyBenchmarkReports": "Wöchentliche Benchmark-Berichte erhalten",
			"settings.preferencesSection.darkMode": "Dunkelmodus",
			"settings.preferencesSection.useDarkColorScheme": "Dunkles Farbschema verwenden",
			"settings.preferencesSection.defaultLanguage": "Standardsprache",
			"settings.settingsHeader.settings": "Einstellungen",
			"settings.settingsHeader.manageYourAccountPreferences": "Verwalten Sie Ihre Kontoeinstellungen und -konfigurationen.",
			"settings.settingsFooter.cancel": "Abbrechen",
			"settings.settingsFooter.saveChanges": "Änderungen speichern",
			"settings.apiAccessSection.apiAccess": "API-Zugriff",
			"settings.apiAccessSection.apiKey": "API-Schlüssel",
			"settings.apiAccessSection.useThisKeyTo": "Verwenden Sie diesen Schlüssel für den programmgesteuerten Zugriff auf die Benchmarking-API.",
			"settings.apiAccessSection.copy": "Kopieren",
			"settings.profileSection.profile": "Profil",
			"settings.profileSection.displayName": "Anzeigename",
			"settings.profileSection.email": "E-Mail",
			"shared.header.home": "Startseite",
			"shared.header.methodology": "Methodik",
			"shared.header.mockPages": "Testseiten",
			"shared.header.products": "Produkte",
			"shared.header.pricing": "Preise",
			"shared.header.team": "Team",
			"shared.header.blog": "Blog",
			"shared.header.careers": "Karriere",
			"shared.header.faq": "FAQ",
			"shared.header.contact": "Kontakt",
			"shared.header.settings": "Einstellungen",
			"shared.header.goToGithub": "Zu GitHub",
			"shared.footer.resources": "Ressourcen",
			"shared.footer.contact": "Kontakt",
			"shared.footer.github": "GitHub",
			"shared.footer.methodology": "Methodik",
			"shared.footer.contributing": "Beitragen",
			"shared.footer.builtWith": "i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite und TanStack Router.",
			"shared.footer.anOpenSourceTestApplication": "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladezeit und die Reaktivität der App.",
			"shared.mockBanner.text": "⚠️ Diese Seite enthält fiktive Daten, die nur Benchmark-Zwecken dienen. Sie stehen in keinem Zusammenhang mit realen Unternehmen oder Dienstleistungen.",
			"shared.themeToggle.themeModeAutoSystemClick": "Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.",
			"shared.themeToggle.themeModeLightClick": "Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.",
			"shared.themeToggle.themeModeDarkClick": "Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.",
			"shared.themeToggle.themeAuto": "Thema: Auto",
			"shared.themeToggle.themeDark": "Thema: Dunkel",
			"shared.themeToggle.themeLight": "Thema: Hell",
			"careers.openPositions.openPositions": "Offene Stellen",
			"careers.openPositions.seniorPerformanceEngineer": "Senior Performance Engineer",
			"careers.openPositions.fullTime": "Vollzeit",
			"careers.openPositions.remote": "Remote",
			"careers.openPositions.leadBenchmarkDesignAnd": "Leiten Sie das Benchmark-Design und die Implementierung. Fundierte Kenntnisse der V8-Interna, der Browser-Performance-APIs und der statistischen Analyse erforderlich.",
			"careers.openPositions.technicalWriter": "Technischer Redakteur",
			"careers.openPositions.partTime": "Teilzeit",
			"careers.openPositions.createAndMaintainDocumentation": "Erstellen und pflegen Sie Dokumentationen, Blog-Beiträge und Schulungsinhalte zu Best Practices für die i18n-Leistung.",
			"careers.openPositions.frontendDeveloper": "Frontend-Entwickler",
			"careers.openPositions.buildAndMaintainThe": "Erstellen und pflegen Sie das Benchmark-Dashboard, Vergleichstools und interaktive Visualisierungen.",
			"careers.openPositions.devOpsEngineer": "DevOps-Ingenieur",
			"careers.openPositions.designAndMaintainThe": "Design und Wartung der CI/CD-Pipeline, die Benchmarks automatisch bei jedem Bibliotheks-Update ausführt.",
			"careers.openPositions.applyNow": "Jetzt bewerben",
			"careers.careersHeader.careers": "Karriere",
			"careers.careersHeader.joinOurMissionToMake": "Helfen Sie uns bei unserer Mission, das Internet für alle und überall schneller und zugänglicher zu machen.",
			"careers.careersBenefits.whyJoinUs": "Warum zu uns kommen?",
			"careers.careersBenefits.remoteFirst": "Remote-First",
			"careers.careersBenefits.workFromAnywhereFully": "Arbeiten Sie von überall. Vollständig verteiltes Team in 6 Zeitzonen.",
			"careers.careersBenefits.openSource": "Open Source",
			"careers.careersBenefits.allOurWorkIs": "Unsere gesamte Arbeit ist Open Source. Bauen Sie Ihr öffentliches Portfolio auf, während Sie etwas bewirken.",
			"careers.careersBenefits.impactful": "Wirkungsvoll",
			"careers.careersBenefits.yourWorkDirectlyHelps": "Ihre Arbeit hilft Entwicklern direkt dabei, bessere und schnellere internationalisierte Anwendungen zu erstellen.",
			"route.route.oopsPageNotFound": "Hoppla! Seite nicht gefunden",
			"route.route.returnToHome": "Zurück zur Startseite",
			"route.route.couldNotMeasureHydrationDuration": "Hydratationsdauer konnte nicht gemessen werden:",
			"pricing.pricingTiers.freeTier": "Kostenlose Stufe",
			"pricing.pricingTiers.free": "Kostenlos",
			"pricing.pricingTiers.publicBenchmarkDashboard": "Öffentliches Benchmark-Dashboard",
			"pricing.pricingTiers.basicLibraryComparisons": "Einfache Bibliotheksvergleiche",
			"pricing.pricingTiers.communityForumAccess": "Zugang zum Community-Forum",
			"pricing.pricingTiers.monthlyResultDigest": "Monatliche Ergebniszusammenfassung",
			"pricing.pricingTiers.getStarted": "Loslegen",
			"pricing.pricingTiers.proTier": "Pro-Stufe",
			"pricing.pricingTiers.perMonth": "/Monat",
			"pricing.pricingTiers.allFreeFeatures": "Alle kostenlosen Funktionen",
			"pricing.pricingTiers.customBenchmarkConfigurations": "Benutzerdefinierte Benchmark-Konfigurationen",
			"pricing.pricingTiers.privateResultsDashboard": "Privates Ergebnis-Dashboard",
			"pricing.pricingTiers.apiAccess1000Requests": "API-Zugriff (1.000 Anfragen/Tag)",
			"pricing.pricingTiers.slackIntegration": "Slack-Integration",
			"pricing.pricingTiers.subscribeToPro": "Pro abonnieren",
			"pricing.pricingTiers.enterpriseTier": "Enterprise-Stufe",
			"pricing.pricingTiers.custom": "Individuell",
			"pricing.pricingTiers.allProFeatures": "Alle Pro-Funktionen",
			"pricing.pricingTiers.dedicatedBenchmarkInfrastructure": "Dedizierte Benchmark-Infrastruktur",
			"pricing.pricingTiers.customLibraryIntegrations": "Benutzerdefinierte Bibliotheksintegrationen",
			"pricing.pricingTiers.slaGuarantees": "SLA-Garantien",
			"pricing.pricingTiers.prioritySupport": "Priorisierter Support",
			"pricing.pricingTiers.contactSales": "Vertrieb kontaktieren",
			"pricing.pricingHeader.pricing": "Preise",
			"pricing.pricingHeader.transparentPricingForEvery": "Transparente Preise für jede Phase Ihrer i18n-Reise.",
			"products.productsGrid.benchmarkDashboard": "Benchmark-Dashboard",
			"products.productsGrid.interactiveChartsAndTables": "Interaktive Diagramme und Tabellen, die i18n-Bibliotheken hinsichtlich Bundle-Größe, Renderzeit und Hydratationskosten vergleichen.",
			"products.productsGrid.bundleAnalyzer": "Bundle-Analyzer",
			"products.productsGrid.uploadYourBuildOutput": "Laden Sie Ihren Build-Output hoch und erhalten Sie eine detaillierte Aufschlüsselung, wie viel von Ihrem Bundle i18n-Overhead ist.",
			"products.productsGrid.migrationAssistant": "Migrationsassistent",
			"products.productsGrid.automatedCodemodsAndGuides": "Automatisierte Codemods und Anleitungen für die Migration zwischen i18n-Bibliotheken mit minimaler Unterbrechung.",
			"products.productsGrid.performanceMonitor": "Leistungsmonitor",
			"products.productsGrid.continuousPerformanceTrackingFor": "Kontinuierliche Leistungsverfolgung für Ihre i18n-Implementierung. Erhalten Sie Warnungen, wenn sich das Laden von Übersetzungen verschlechtert.",
			"products.productsGrid.learnMore": "Mehr erfahren",
			"products.productsHeader.products": "Produkte",
			"products.productsHeader.toolsAndServicesTo": "Tools und Services unterstützen Sie bei der Optimierung Ihrer Internationalisierungsstrategie.",
			"contact.contactForm.name": "Name",
			"contact.contactForm.email": "E-Mail",
			"contact.contactForm.subject": "Betreff",
			"contact.contactForm.message": "Nachricht",
			"contact.contactForm.sendMessage": "Nachricht senden",
			"contact.contactForm.wellGetBackTo": "Wir melden uns innerhalb von 48 Stunden bei Ihnen.",
			"contact.contactHeader.contactUs": "Kontaktieren Sie uns",
			"contact.contactHeader.haveQuestionsOrWantTo": "Haben Sie Fragen oder möchten Sie einen Beitrag leisten? Wir würden uns freuen, von Ihnen zu hören.",
			"about.aboutHeader.methodology": "Methodik",
			"about.aboutHeader.weDesignedThisBenchmarkTo": "Wir haben diesen Benchmark so konzipiert, dass er faire, reproduzierbare und aussagekräftige Vergleiche von i18n-Bibliotheken ermöglicht.",
			"about.whatWeMeasure.bundleSizeImpact": "Auswirkung auf die Bundle-Größe",
			"about.whatWeMeasure.theAdditionalJavascriptBytesSent": "Die zusätzlichen JavaScript-Bytes, die speziell aufgrund der Laufzeit der i18n-Bibliothek an den Client gesendet werden, plus die Übersetzungsdateien für das aktuelle Gebietsschema.",
			"about.whatWeMeasure.renderingOverhead": "Rendering-Overhead",
			"about.whatWeMeasure.howMuchExtraTimeThe": "Wie viel zusätzliche Zeit die i18n-Schicht zu jedem Komponenten-Rendering hinzufügt — gemessen mit actualDuration des React Profilers.",
			"about.whatWeMeasure.hydrationCost": "Hydratationskosten",
			"about.whatWeMeasure.duringSsrTranslationDataIs": "Während des SSR werden Übersetzungsdaten in das HTML serialisiert. Große Wörterbücher erhöhen die HTML-Payload und verlangsamen die Hydratation — den Moment, in dem die Seite interaktiv wird.",
			"about.whatWeMeasure.lazyLoadingEffectiveness": "Effektivität von Lazy Loading",
			"about.whatWeMeasure.whetherSplittingTranslationsByRoute": "Ob das Aufteilen von Übersetzungen nach Route oder Namespace die anfängliche Belastung tatsächlich reduziert und welche Kompromisse es mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).",
			"about.whatWeMeasure.localeSwitchSpeed": "Geschwindigkeit des Sprachwechsels",
			"about.whatWeMeasure.howFastTheAppCan": "Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderings von Komponenten und der Aktualisierung des DOM.",
			"about.whatWeMeasure.whatWeMeasure": "Was wir messen",
			"about.aboutGrid.testEnvironment": "Testumgebung",
			"about.aboutGrid.allBenchmarksRunOn": "Alle Benchmarks laufen auf derselben Hardware (M2 MacBook Pro, 16 GB RAM), demselben Browser (Chromium 120 über Playwright) und denselben Netzwerkbedingungen (simuliertes 4G). Jeder Test wird 50 Mal wiederholt, und wir geben den Median mit P95/P99-Perzentilen an.",
			"about.aboutGrid.applicationDesign": "Anwendungsdesign",
			"about.aboutGrid.theBenchmarkAppHas10": "Die Benchmark-App verfügt über 10 Seiten mit realistischem Inhalt — Navigation, Formulare, dynamische Listen und statischen Text. Jede Seite verwendet 15–30 Übersetzungsschlüssel, um reale Nutzungsmuster darzustellen.",
			"about.aboutGrid.measurementMethodology": "Messmethodik",
			"about.aboutGrid.weUseBrowserNativeApis": "Wir verwenden browsernative APIs (Performance Timeline, Resource Timing, Layout Instability) kombiniert mit React Profiler-Daten. Bundle-Größen werden nach dem Gzip-Verfahren mit source-map-explorer für die Genauigkeit gemessen.",
			"about.aboutGrid.fairComparison": "Fairer Vergleich",
			"about.aboutGrid.eachI18nLibraryIsIntegrated": "Jede i18n-Bibliothek wird gemäß ihrer offiziellen Dokumentation und Best Practices integriert. Wir konsultieren nach Möglichkeit die Maintainer, um eine optimale Konfiguration sicherzustellen. Dieselbe React-App, dieselbe Vite-Konfiguration, dasselbe Deployment.",
			"home.understandingImpact.understandingTheImpact": "Die Auswirkungen verstehen",
			"home.understandingImpact.whyASingleLargeJson": "Warum ein einziges großes JSON die Leistung beeinträchtigen kann",
			"home.understandingImpact.manyI18nLibrariesStoreTranslations": "Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verbraucht, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:",
			"home.understandingImpact.theJsonMustBeParsed": "Das JSON muss bei jedem Seitenladen analysiert werden — was den Hauptthread blockiert.",
			"home.understandingImpact.contextBasedArchitecturesCanCause": "Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Gebietsschema ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.",
			"home.understandingImpact.duringServerSideRenderingThe": "Während des serverseitigen Renderings wird das vollständige Wörterbuch in die HTML-Payload serialisiert, wodurch die Größe des Dokuments erhöht wird, das heruntergeladen und hydratisiert werden muss.",
			"home.understandingImpact.theTradeOffsOfDynamic": "Die Kompromisse beim dynamischen Laden",
			"home.understandingImpact.splittingTranslationsIntoPerRoute": "Das Aufteilen der Übersetzungen in Chunks pro Route oder Namespace kann die anfängliche Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:",
			"home.understandingImpact.waterfallRequests": "Waterfall-Anfragen:",
			"home.understandingImpact.flashOfUntranslatedContentFouc": "Aufblitzen von nicht übersetztem Inhalt (FOUC):",
			"home.understandingImpact.cacheInvalidation": "Cache-Invalidierung:",
			"home.understandingImpact.whatThisBenchmarkMeasures": "Was dieser Benchmark misst",
			"home.understandingImpact.thisTestAppProvidesA": "Diese Test-App bietet eine kontrollierte Umgebung — 10 Seiten mit realistischem Inhalt —, um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.",
			"home.whyItMatters.whyTheseMetricsMatter": "Warum diese Kennzahlen wichtig sind",
			"home.whyItMatters.bundleSize": "Bundle-Größe",
			"home.whyItMatters.theBundleIsTheData": "Das Bundle stellt die Daten dar, die an jeden Benutzer weltweit gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — insbesondere bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren drastisch in ihrem Gewicht: von einigen Kilobyte bis zu Dutzenden von Kilobyte an Laufzeitcode, zusätzlich zu den Übersetzungsdateien selbst.",
			"home.whyItMatters.renderingHydration": "Rendering & Hydratation",
			"home.whyItMatters.connectingALargeJson": "Das Verbinden eines großen JSON-Wörterbuchs mit jeder Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydratisierung fügt das Parsen und Anhängen massiver Übersetzungsobjekte Latenz hinzu, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.",
			"home.whyItMatters.dynamicLoading": "Dynamisches Laden",
			"home.whyItMatters.loadingAllTranslationsUpfront": "Das Vorabladen aller Übersetzungen überlastet die anfängliche Payload. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namespace auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Aufblitzen nicht übersetzter Inhalte und Komplexität des Cachings. Die Messung beider Strategien ist unerlässlich.",
			"home.resultsTable.sampleResults": "Beispielergebnisse",
			"home.resultsTable.bundleSize": "Bundle-Größe",
			"home.resultsTable.lookupTime": "Suchzeit",
			"home.resultsTable.lazyLoading": "Lazy Loading",
			"home.hero.aTestApplicationDesignedTo": "Eine Testanwendung, die darauf ausgelegt ist, die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen.",
			"home.hero.viewResults": "Ergebnisse anzeigen",
			"team.teamGrid.sarahChen": "Sarah Chen",
			"team.teamGrid.founderLeadEngineer": "Gründerin & Leitende Ingenieurin",
			"team.teamGrid.formerGoogleEngineerWith10": "Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.",
			"team.teamGrid.marcusWeber": "Marcus Weber",
			"team.teamGrid.performanceEngineer": "Performance-Ingenieur",
			"team.teamGrid.specializesInJavascriptPerformanceOptimization": "Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.",
			"team.teamGrid.aishaPatel": "Aisha Patel",
			"team.teamGrid.developerAdvocate": "Developer Advocate",
			"team.teamGrid.passionateAboutDeveloperExperienceAnd": "Begeistert von Entwicklererfahrung und Bildung. Sprecherin bei React Conf, JSConf und i18nNext.",
			"team.teamGrid.tomasRodriguez": "Tomás Rodríguez",
			"team.teamGrid.fullStackDeveloper": "Full-Stack-Entwickler",
			"team.teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Contributor bei Lingui.",
			"team.teamGrid.yukiTanaka": "Yuki Tanaka",
			"team.teamGrid.dataAnalyst": "Datenanalystin",
			"team.teamGrid.ensuresStatisticalRigorInAll": "Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. PhD in Angewandter Statistik vom MIT.",
			"team.teamGrid.elenaKowalski": "Elena Kowalski",
			"team.teamGrid.communityManager": "Community-Managerin",
			"team.teamGrid.managesCommunityContributionsPartnershipsAnd": "Verwaltet Community-Beiträge, Partnerschaften und Events. Hintergrund in Open-Source-Governance.",
			"team.teamHeader.ourTeam": "Unser Team",
			"team.teamHeader.meetThePeopleBehindI18n": "Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, vereint durch die Leidenschaft für großartige Entwicklertools.",
			"blog.blogList.i18nBenchmark2026Results": "i18n Benchmark 2026 Ergebnisse",
			"blog.blogList.march152026": "15. März 2026",
			"blog.blogList.weTested12DifferentInternationalization": "Wir haben 12 verschiedene Internationalisierungsbibliotheken auf 10 Seiten getestet. Hier sind die detaillierten Ergebnisse mit interaktiven Diagrammen.",
			"blog.blogList.howToReduceYourI18n": "So reduzieren Sie Ihr i18n-Bundle um 60 %",
			"blog.blogList.march82026": "8. März 2026",
			"blog.blogList.practicalStrategiesForOptimizingTranslation": "Praktische Strategien zur Optimierung des Ladens von Übersetzungsdateien, Tree-Shaking nicht verwendeter Gebietsschemata und Nutzung der Kompilierung zur Erstellungszeit.",
			"blog.blogList.theStateOfInternationalizationIn": "Der Stand der Internationalisierung im Jahr 2026",
			"blog.blogList.february282026": "28. Februar 2026",
			"blog.blogList.anOverviewOfTheCurrent": "Eine Übersicht über das aktuelle i18n-Ökosystem, Vergleich von Ansätzen von Nachrichtenkatalogen bis hin zu compilerbasierten Lösungen.",
			"blog.blogList.migratingFromReactI18nextTo": "Migration von react-i18next zu Lingui",
			"blog.blogList.february152026": "15. Februar 2026",
			"blog.blogList.aStepByStepGuide": "Schritt-für-Schritt-Anleitung für die Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.",
			"blog.blogList.serverComponentsAndI18nWhat": "Server Components und i18n: Was ändert sich?",
			"blog.blogList.february12026": "1. Februar 2026",
			"blog.blogList.reactServerComponentsIntroduceNew": "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.",
			"blog.blogList.benchmarkMethodologyHowWeTest": "Benchmark-Methodik: Wie wir testen",
			"blog.blogList.january202026": "20. Januar 2026",
			"blog.blogList.aTransparentLookAtOur": "Ein transparenter Einblick in unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.",
			"blog.blogList.readMore": "Mehr lesen →",
			"blog.blogHeader.blog": "Blog",
			"blog.blogHeader.insightsDeepDivesAnd": "Einblicke, tiefgehende Analysen und Updates aus der i18n-Benchmarking-Community."
		} },
		en: { translation: {
			"faq.faqList.howAreTheBenchmarks": "How are the benchmarks run?",
			"faq.faqList.allBenchmarksAreRun": "All benchmarks are run using Playwright on a consistent hardware setup (M2 MacBook Pro) with simulated 4G network conditions. Each test runs 50 iterations and we report median, P95, and P99 values.",
			"faq.faqList.whatLibrariesAreCurrently": "What libraries are currently tested?",
			"faq.faqList.weCurrentlyBenchmarkReactI18next": "We currently benchmark react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl, and Paraglide. We plan to add more based on community requests.",
			"faq.faqList.canIContributeA": "Can I contribute a new library integration?",
			"faq.faqList.absolutelyWeWelcomeCommunity": "Absolutely! We welcome community contributions. Fork the repository, add your library integration following our template, and submit a pull request. See the Contributing guide for details.",
			"faq.faqList.howOftenAreResults": "How often are results updated?",
			"faq.faqList.benchmarksRunAutomaticallyVia": "Benchmarks run automatically via CI on every dependency update and weekly on the main branch. Results are published to the dashboard within 24 hours.",
			"faq.faqList.areTheResultsStatistically": "Are the results statistically significant?",
			"faq.faqList.yesWeUseThe": "Yes. We use the Mann-Whitney U test with a significance level of 0.05 to compare distributions. We also report confidence intervals and effect sizes.",
			"faq.faq-header1.frequentlyAskedQuestions": "Frequently Asked Questions",
			"faq.faq-header1.everythingYouNeedToKnow": "Everything you need to know about i18n Benchmark.",
			"settings.preferencesSection.preferences": "Preferences",
			"settings.preferencesSection.emailNotifications": "Email Notifications",
			"settings.preferencesSection.receiveWeeklyBenchmarkReports": "Receive weekly benchmark reports",
			"settings.preferencesSection.darkMode": "Dark Mode",
			"settings.preferencesSection.useDarkColorScheme": "Use dark color scheme",
			"settings.preferencesSection.defaultLanguage": "Default Language",
			"settings.settingsHeader.settings": "Settings",
			"settings.settingsHeader.manageYourAccountPreferences": "Manage your account preferences and configuration.",
			"settings.settingsFooter.cancel": "Cancel",
			"settings.settingsFooter.saveChanges": "Save Changes",
			"settings.apiAccessSection.apiAccess": "API Access",
			"settings.apiAccessSection.apiKey": "API Key",
			"settings.apiAccessSection.useThisKeyTo": "Use this key to access the benchmarking API programmatically.",
			"settings.apiAccessSection.copy": "Copy",
			"settings.profileSection.profile": "Profile",
			"settings.profileSection.displayName": "Display Name",
			"settings.profileSection.email": "Email",
			"shared.header.home": "Home",
			"shared.header.methodology": "Methodology",
			"shared.header.mockPages": "Mock Pages",
			"shared.header.products": "Products",
			"shared.header.pricing": "Pricing",
			"shared.header.team": "Team",
			"shared.header.blog": "Blog",
			"shared.header.careers": "Careers",
			"shared.header.faq": "FAQ",
			"shared.header.contact": "Contact",
			"shared.header.settings": "Settings",
			"shared.header.goToGithub": "Go to GitHub",
			"shared.footer.resources": "Resources",
			"shared.footer.contact": "Contact",
			"shared.footer.github": "GitHub",
			"shared.footer.methodology": "Methodology",
			"shared.footer.contributing": "Contributing",
			"shared.footer.builtWith": "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
			"shared.footer.anOpenSourceTestApplication": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
			"shared.mockBanner.text": "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.",
			"shared.themeToggle.themeModeAutoSystemClick": "Theme mode: auto (system). Click to switch to light mode.",
			"shared.themeToggle.themeModeLightClick": "Theme mode: light. Click to switch to dark mode.",
			"shared.themeToggle.themeModeDarkClick": "Theme mode: dark. Click to switch to auto (system) mode.",
			"shared.themeToggle.themeAuto": "Theme: Auto",
			"shared.themeToggle.themeDark": "Theme: Dark",
			"shared.themeToggle.themeLight": "Theme: Light",
			"careers.careersHeader.careers": "Careers",
			"careers.careersHero.fromAnywhere": "from anywhere in the world",
			"careers.careersBenefits.competitivePay": "Competitive pay",
			"careers.careersBenefits.topOfMarket": "Top-of-market compensation",
			"careers.careersBenefits.openSourceTime": "Open source time",
			"careers.careersBenefits.twentyPercentTime": "20% time for OSS",
			"careers.careersPositions.seniorFrontendEngineer": "Senior Frontend Engineer",
			"careers.careersPositions.seniorFrontendEngineerDesc": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
			"careers.openPositions.openPositions": "Open Positions",
			"careers.openPositions.remote": "Remote",
			"careers.openPositions.fullTime": "Full-time",
			"careers.openPositions.applyNow": "Apply Now",
			"route.route.oopsPageNotFound": "Oops! Page not found",
			"route.route.returnToHome": "Return to Home",
			"route.route.couldNotMeasureHydrationDuration": "Could not measure hydration duration:",
			"pricing.pricingTiers.starterTier": "Starter",
			"pricing.pricingTiers.starterPrice": "$0",
			"pricing.pricingTiers.forever": "forever",
			"pricing.pricingTiers.runsPerDay": "5 benchmark runs/day",
			"pricing.pricingTiers.libraries3": "3 libraries",
			"pricing.pricingTiers.communitySupport": "Community support",
			"pricing.pricingTiers.publicResults": "Public results",
			"pricing.pricingTiers.getStarted": "Get Started",
			"pricing.pricingTiers.proTier": "Pro",
			"pricing.pricingTiers.proPrice": "$29",
			"pricing.pricingTiers.perMonth": "/month",
			"pricing.pricingTiers.unlimitedRuns": "Unlimited runs",
			"pricing.pricingTiers.allLibraries": "All libraries",
			"pricing.pricingTiers.prioritySupport": "Priority support",
			"pricing.pricingTiers.privateResults": "Private results",
			"pricing.pricingTiers.ciIntegration": "CI integration",
			"pricing.pricingTiers.historicalData": "Historical data",
			"pricing.pricingTiers.enterpriseTier": "Enterprise",
			"pricing.pricingTiers.custom": "Custom",
			"pricing.pricingTiers.everythingInPro": "Everything in Pro",
			"pricing.pricingTiers.onPremiseOption": "On-premise option",
			"pricing.pricingTiers.ssoSaml": "SSO & SAML",
			"pricing.pricingTiers.dedicatedAccountManager": "Dedicated account manager",
			"pricing.pricingTiers.customSLAs": "Custom SLAs",
			"pricing.pricingTiers.auditLogs": "Audit logs",
			"pricing.pricingTiers.trainingSessions": "Training sessions",
			"pricing.pricingTiers.contactSales": "Contact Sales",
			"pricing.pricingHeader.pricing": "Pricing",
			"pricing.pricingHeader.transparentPricingForEvery": "Transparent pricing for every stage of your i18n journey.",
			"products.products.benchmarkCLI": "Benchmark CLI",
			"products.products.benchmarkCLIDesc": "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
			"products.products.benchmarkCLIPrice": "Free",
			"products.products.benchmarkCloud": "Benchmark Cloud",
			"products.products.benchmarkCloudDesc": "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
			"products.products.benchmarkCloudPrice": "$29/mo",
			"products.products.benchmarkEnterprise": "Benchmark Enterprise",
			"products.products.benchmarkEnterpriseDesc": "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
			"products.products.benchmarkEnterprisePrice": "Contact Us",
			"products.products.migrationAssistant": "Migration Assistant",
			"products.products.migrationAssistantDesc": "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
			"products.products.migrationAssistantPrice": "$99 one-time",
			"products.products.translationQA": "Translation QA",
			"products.products.translationQADesc": "Automated quality checks for missing translations, pluralization issues, and context errors.",
			"products.products.translationQAPrice": "$19/mo",
			"products.products.bundleOptimizer": "Bundle Optimizer",
			"products.products.bundleOptimizerDesc": "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
			"products.products.bundleOptimizerPrice": "$49/mo",
			"products.products.learnMore": "Learn More",
			"products.productsHeader.ourProducts": "Our Products",
			"products.productsHeader.exploreOurSuiteOfTools": "Explore our suite of tools designed to help you build better i18n apps.",
			"contact.contactForm.name": "Name",
			"contact.contactForm.email": "Email",
			"contact.contactForm.subject": "Subject",
			"contact.contactForm.message": "Message",
			"contact.contactForm.sendMessage": "Send Message",
			"contact.contactForm.wellGetBackTo": "We'll get back to you within 48 hours.",
			"contact.contactHeader.contactUs": "Contact Us",
			"contact.contactHeader.haveQuestionsOrWantTo": "Have questions or want to contribute? We'd love to hear from you.",
			"about.aboutHeader.methodology": "Methodology",
			"about.aboutHeader.weDesignedThisBenchmarkTo": "We designed this benchmark to provide fair, reproducible, and meaningful comparisons of i18n libraries. Here's our approach.",
			"about.whatWeMeasure.bundleSizeImpact": "Bundle size impact",
			"about.whatWeMeasure.theAdditionalJavascriptBytesSent": "The additional JavaScript bytes sent to the client specifically due to the i18n library runtime, plus the translation files for the current locale.",
			"about.whatWeMeasure.renderingOverhead": "Rendering overhead",
			"about.whatWeMeasure.howMuchExtraTimeThe": "How much extra time the i18n layer adds to each component render — measured using React Profiler's actualDuration.",
			"about.whatWeMeasure.hydrationCost": "Hydration cost",
			"about.whatWeMeasure.duringSsrTranslationDataIs": "During SSR, translation data is serialized into the HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
			"about.whatWeMeasure.lazyLoadingEffectiveness": "Lazy loading effectiveness",
			"about.whatWeMeasure.whetherSplittingTranslationsByRoute": "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
			"about.whatWeMeasure.localeSwitchSpeed": "Locale switch speed",
			"about.whatWeMeasure.howFastTheAppCan": "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
			"about.whatWeMeasure.whatWeMeasure": "What We Measure",
			"about.aboutGrid.testEnvironment": "Test Environment",
			"about.aboutGrid.allBenchmarksRunOn": "All benchmarks run on the same hardware (M2 MacBook Pro, 16 GB RAM), same browser (Chromium 120 via Playwright), and same network conditions (simulated 4G). Each test is repeated 50 times and we report the median with P95/P99 percentiles.",
			"about.aboutGrid.applicationDesign": "Application Design",
			"about.aboutGrid.theBenchmarkAppHas10": "The benchmark app has 10 pages with realistic content — navigation, forms, dynamic lists, and static text. Each page uses 15–30 translation keys to represent real-world usage patterns rather than synthetic micro-benchmarks.",
			"about.aboutGrid.measurementMethodology": "Measurement Methodology",
			"about.aboutGrid.weUseBrowserNativeApis": "We use browser-native APIs (Performance Timeline, Resource Timing, Layout Instability) combined with React Profiler data. Bundle sizes are measured post-gzip using source-map-explorer for accuracy.",
			"about.aboutGrid.fairComparison": "Fair Comparison",
			"about.aboutGrid.eachI18nLibraryIsIntegrated": "Each i18n library is integrated following its official documentation and best practices. We consult maintainers when possible to ensure optimal configuration. The same React app, same Vite config, same deployment.",
			"home.understandingImpact.understandingTheImpact": "Understanding the Impact",
			"home.understandingImpact.whyASingleLargeJson": "Why a single large JSON can hurt performance",
			"home.understandingImpact.manyI18nLibrariesStoreTranslations": "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
			"home.understandingImpact.theJsonMustBeParsed": "The JSON must be parsed on every page load — blocking the main thread.",
			"home.understandingImpact.contextBasedArchitecturesCanCause": "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
			"home.understandingImpact.duringServerSideRenderingThe": "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
			"home.understandingImpact.theTradeOffsOfDynamic": "The trade-offs of dynamic loading",
			"home.understandingImpact.splittingTranslationsIntoPerRoute": "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
			"home.understandingImpact.waterfallRequests": "Waterfall requests:",
			"home.understandingImpact.flashOfUntranslatedContentFouc": "Flash of untranslated content (FOUC):",
			"home.understandingImpact.cacheInvalidation": "Cache invalidation:",
			"home.understandingImpact.whatThisBenchmarkMeasures": "What this benchmark measures",
			"home.understandingImpact.thisTestAppProvidesA": "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.",
			"home.whyItMatters.whyTheseMetricsMatter": "Why These Metrics Matter",
			"home.whyItMatters.bundleSize": "Bundle Size",
			"home.whyItMatters.theBundleIsTheData": "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
			"home.whyItMatters.renderingHydration": "Rendering & Hydration",
			"home.whyItMatters.connectingALargeJson": "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
			"home.whyItMatters.dynamicLoading": "Dynamic Loading",
			"home.whyItMatters.loadingAllTranslationsUpfront": "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.",
			"home.resultsTable.sampleResults": "Sample Results",
			"home.resultsTable.bundleSize": "Bundle Size",
			"home.resultsTable.lookupTime": "Lookup Time",
			"home.resultsTable.lazyLoading": "Lazy Loading",
			"home.hero.aTestApplicationDesignedTo": "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
			"home.hero.viewResults": "View Results",
			"team.teamGrid.sarahChen": "Sarah Chen",
			"team.teamGrid.founderLeadEngineer": "Founder & Lead Engineer",
			"team.teamGrid.formerGoogleEngineerWith10": "Former Google engineer with 10 years of experience building internationalization systems at scale.",
			"team.teamGrid.marcusWeber": "Marcus Weber",
			"team.teamGrid.performanceEngineer": "Performance Engineer",
			"team.teamGrid.specializesInJavascriptPerformanceOptimization": "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
			"team.teamGrid.aishaPatel": "Aisha Patel",
			"team.teamGrid.developerAdvocate": "Developer Advocate",
			"team.teamGrid.passionateAboutDeveloperExperienceAnd": "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
			"team.teamGrid.tomasRodriguez": "Tomás Rodríguez",
			"team.teamGrid.fullStackDeveloper": "Full-Stack Developer",
			"team.teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
			"team.teamGrid.yukiTanaka": "Yuki Tanaka",
			"team.teamGrid.dataAnalyst": "Data Analyst",
			"team.teamGrid.ensuresStatisticalRigorInAll": "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
			"team.teamGrid.elenaKowalski": "Elena Kowalski",
			"team.teamGrid.communityManager": "Community Manager",
			"team.teamGrid.managesCommunityContributionsPartnershipsAnd": "Manages community contributions, partnerships, and events. Background in open source governance.",
			"team.teamHeader.ourTeam": "Our Team",
			"team.teamHeader.meetThePeopleBehindI18n": "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.",
			"blog.blogList.i18nBenchmark2026Results": "i18n Benchmark 2026 Results",
			"blog.blogList.march152026": "March 15, 2026",
			"blog.blogList.weTested12DifferentInternationalization": "We tested 12 different internationalization libraries across 10 pages. Here are the detailed results with interactive charts.",
			"blog.blogList.howToReduceYourI18n": "How to Reduce Your i18n Bundle by 60%",
			"blog.blogList.march82026": "March 8, 2026",
			"blog.blogList.practicalStrategiesForOptimizingTranslation": "Practical strategies for optimizing translation file loading, tree-shaking unused locales, and leveraging build-time compilation.",
			"blog.blogList.theStateOfInternationalizationIn": "The State of Internationalization in 2026",
			"blog.blogList.february282026": "February 28, 2026",
			"blog.blogList.anOverviewOfTheCurrent": "An overview of the current i18n ecosystem, comparing approaches from message catalogs to compiler-based solutions.",
			"blog.blogList.migratingFromReactI18nextTo": "Migrating from react-i18next to Lingui",
			"blog.blogList.february152026": "February 15, 2026",
			"blog.blogList.aStepByStepGuide": "A step-by-step guide for migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
			"blog.blogList.serverComponentsAndI18nWhat": "Server Components and i18n: What Changes?",
			"blog.blogList.february12026": "February 1, 2026",
			"blog.blogList.reactServerComponentsIntroduceNew": "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
			"blog.blogList.benchmarkMethodologyHowWeTest": "Benchmark Methodology: How We Test",
			"blog.blogList.january202026": "January 20, 2026",
			"blog.blogList.aTransparentLookAtOur": "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
			"blog.blogList.readMore": "Read More →",
			"blog.blogHeader.blog": "Blog",
			"blog.blogHeader.insightsDeepDivesAnd": "Insights, deep dives, and updates from the i18n benchmarking community."
		} },
		es: { translation: {
			"faq.faqList.howAreTheBenchmarks": "¿Cómo se ejecutan los benchmarks?",
			"faq.faqList.allBenchmarksAreRun": "Todos los benchmarks se ejecutan utilizando Playwright en una configuración de hardware consistente (M2 MacBook Pro) con condiciones de red 4G simuladas. Cada prueba realiza 50 iteraciones y reportamos la mediana, los valores P95 y P99.",
			"faq.faqList.whatLibrariesAreCurrently": "¿Qué bibliotecas se prueban actualmente?",
			"faq.faqList.weCurrentlyBenchmarkReactI18next": "Actualmente probamos react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl y Paraglide. Planeamos añadir más basándonos en las peticiones de la comunidad.",
			"faq.faqList.canIContributeA": "¿Puedo contribuir con una nueva integración de biblioteca?",
			"faq.faqList.absolutelyWeWelcomeCommunity": "¡Absolutamente! Damos la bienvenida a las contribuciones de la comunidad. Bifurque el repositorio, añada su integración de biblioteca siguiendo nuestra plantilla y envíe una pull request.",
			"faq.faqList.howOftenAreResults": "¿Con qué frecuencia se actualizan los resultados?",
			"faq.faqList.benchmarksRunAutomaticallyVia": "Los benchmarks se ejecutan automáticamente a través de CI en cada actualización de dependencia y semanalmente en la rama principal. Los resultados se publican en el tablero en un plazo de 24 horas.",
			"faq.faqList.areTheResultsStatistically": "¿Son los resultados estadísticamente significativos?",
			"faq.faqList.yesWeUseThe": "Sí. Utilizamos la prueba U de Mann-Whitney con un nivel de significación de 0,05 para comparar distribuciones. También reportamos intervalos de confianza y tamaños del efecto.",
			"faq.faq-header1.frequentlyAskedQuestions": "Preguntas frecuentes",
			"faq.faq-header1.everythingYouNeedToKnow": "Todo lo que necesita saber sobre el proyecto i18n Benchmark.",
			"settings.preferencesSection.preferences": "Preferencias",
			"settings.preferencesSection.emailNotifications": "Notificaciones por correo electrónico",
			"settings.preferencesSection.receiveWeeklyBenchmarkReports": "Recibir informes semanales de benchmark",
			"settings.preferencesSection.darkMode": "Modo oscuro",
			"settings.preferencesSection.useDarkColorScheme": "Usar esquema de colores oscuros",
			"settings.preferencesSection.defaultLanguage": "Idioma predeterminado",
			"settings.settingsHeader.settings": "Configuración",
			"settings.settingsHeader.manageYourAccountPreferences": "Gestione sus preferencias de cuenta y configuración.",
			"settings.settingsFooter.cancel": "Cancelar",
			"settings.settingsFooter.saveChanges": "Guardar cambios",
			"settings.apiAccessSection.apiAccess": "Acceso API",
			"settings.apiAccessSection.apiKey": "Clave API",
			"settings.apiAccessSection.useThisKeyTo": "Utilice esta clave para acceder a la API de benchmarking de forma programática.",
			"settings.apiAccessSection.copy": "Copiar",
			"settings.profileSection.profile": "Perfil",
			"settings.profileSection.displayName": "Nombre de pantalla",
			"settings.profileSection.email": "Correo electrónico",
			"shared.header.home": "Inicio",
			"shared.header.methodology": "Metodología",
			"shared.header.mockPages": "Páginas de prueba",
			"shared.header.products": "Productos",
			"shared.header.pricing": "Precios",
			"shared.header.team": "Equipo",
			"shared.header.blog": "Blog",
			"shared.header.careers": "Carreras",
			"shared.header.faq": "FAQ",
			"shared.header.contact": "Contacto",
			"shared.header.settings": "Configuración",
			"shared.header.goToGithub": "Ir a GitHub",
			"shared.footer.resources": "Recursos",
			"shared.footer.contact": "Contacto",
			"shared.footer.github": "GitHub",
			"shared.footer.methodology": "Metodología",
			"shared.footer.contributing": "Contribuir",
			"shared.footer.builtWith": "i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y TanStack Router.",
			"shared.footer.anOpenSourceTestApplication": "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el tiempo de carga y la reactividad de la aplicación.",
			"shared.mockBanner.text": "⚠️ Esta página contiene datos simulados solo para fines de benchmarking. No está relacionada con ningún negocio o servicio real.",
			"shared.themeToggle.themeModeAutoSystemClick": "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
			"shared.themeToggle.themeModeLightClick": "Modo de tema: claro. Haga clic para cambiar al modo oscuro.",
			"shared.themeToggle.themeModeDarkClick": "Modo de tema: oscuro. Haga clic para cambiar al modo automático (sistema).",
			"shared.themeToggle.themeAuto": "Tema: Auto",
			"shared.themeToggle.themeDark": "Tema: Oscuro",
			"shared.themeToggle.themeLight": "Tema: Claro",
			"careers.openPositions.openPositions": "Puestos abiertos",
			"careers.openPositions.seniorPerformanceEngineer": "Ingeniero de rendimiento senior",
			"careers.openPositions.fullTime": "Tiempo completo",
			"careers.openPositions.remote": "Remoto",
			"careers.openPositions.leadBenchmarkDesignAnd": "Liderar el diseño e implementación de benchmarks. Se requiere un conocimiento profundo de los componentes internos de V8, las API de rendimiento del navegador y el análisis estadístico.",
			"careers.openPositions.technicalWriter": "Redactor técnico",
			"careers.openPositions.partTime": "Tiempo parcial",
			"careers.openPositions.createAndMaintainDocumentation": "Crear y mantener documentación, publicaciones de blog y contenido educativo sobre las mejores prácticas de rendimiento de i18n.",
			"careers.openPositions.frontendDeveloper": "Desarrollador Frontend",
			"careers.openPositions.buildAndMaintainThe": "Construir y mantener el tablero de benchmark, herramientas de comparación y visualizaciones interactivas.",
			"careers.openPositions.devOpsEngineer": "Ingeniero DevOps",
			"careers.openPositions.designAndMaintainThe": "Diseñar y mantener la tubería de CI/CD que ejecuta los benchmarks automáticamente en cada actualización de biblioteca.",
			"careers.openPositions.applyNow": "Solicitar ahora",
			"careers.careersHeader.careers": "Carreras",
			"careers.careersHeader.joinOurMissionToMake": "Únase a nuestra misión para hacer la web más rápida y accesible para todos, en cualquier lugar.",
			"careers.careersBenefits.whyJoinUs": "¿Por qué unirse a nosotros?",
			"careers.careersBenefits.remoteFirst": "Remoto primero",
			"careers.careersBenefits.workFromAnywhereFully": "Trabaje desde cualquier lugar. Equipo totalmente distribuido en 6 zonas horarias.",
			"careers.careersBenefits.openSource": "Código abierto",
			"careers.careersBenefits.allOurWorkIs": "Todo nuestro trabajo es de código abierto. Construya su portafolio público mientras genera un impacto.",
			"careers.careersBenefits.impactful": "Impactante",
			"careers.careersBenefits.yourWorkDirectlyHelps": "Su trabajo ayuda directamente a los desarrolladores a crear aplicaciones internacionalizadas mejores y más rápidas.",
			"route.route.oopsPageNotFound": "¡Ups! Página no encontrada",
			"route.route.returnToHome": "Volver al inicio",
			"route.route.couldNotMeasureHydrationDuration": "No se pudo medir la duración de la hidratación:",
			"pricing.pricingTiers.freeTier": "Nivel gratuito",
			"pricing.pricingTiers.free": "Gratis",
			"pricing.pricingTiers.publicBenchmarkDashboard": "Tablero público de benchmarks",
			"pricing.pricingTiers.basicLibraryComparisons": "Comparaciones básicas de bibliotecas",
			"pricing.pricingTiers.communityForumAccess": "Acceso al foro de la comunidad",
			"pricing.pricingTiers.monthlyResultDigest": "Resumen mensual de resultados",
			"pricing.pricingTiers.getStarted": "Comenzar",
			"pricing.pricingTiers.proTier": "Nivel Pro",
			"pricing.pricingTiers.perMonth": "/mes",
			"pricing.pricingTiers.allFreeFeatures": "Todas las características del nivel gratuito",
			"pricing.pricingTiers.customBenchmarkConfigurations": "Configuraciones de benchmark personalizadas",
			"pricing.pricingTiers.privateResultsDashboard": "Tablero de resultados privado",
			"pricing.pricingTiers.apiAccess1000Requests": "Acceso API (1.000 peticiones/día)",
			"pricing.pricingTiers.slackIntegration": "Integración de Slack",
			"pricing.pricingTiers.subscribeToPro": "Suscribirse a Pro",
			"pricing.pricingTiers.enterpriseTier": "Nivel Enterprise",
			"pricing.pricingTiers.custom": "Personalizado",
			"pricing.pricingTiers.allProFeatures": "Todas las características del nivel Pro",
			"pricing.pricingTiers.dedicatedBenchmarkInfrastructure": "Infraestructura de benchmark dedicada",
			"pricing.pricingTiers.customLibraryIntegrations": "Integraciones de bibliotecas personalizadas",
			"pricing.pricingTiers.slaGuarantees": "Garantías de SLA",
			"pricing.pricingTiers.prioritySupport": "Soporte prioritario",
			"pricing.pricingTiers.contactSales": "Contactar con ventas",
			"pricing.pricingHeader.pricing": "Precios",
			"pricing.pricingHeader.transparentPricingForEvery": "Precios transparentes para cada etapa de su viaje i18n.",
			"products.productsGrid.benchmarkDashboard": "Tablero de benchmarks",
			"products.productsGrid.interactiveChartsAndTables": "Gráficos y tablas interactivos que comparan las bibliotecas i18n por tamaño de paquete, tiempo de renderizado y costo de hidratación.",
			"products.productsGrid.bundleAnalyzer": "Analizador de paquetes",
			"products.productsGrid.uploadYourBuildOutput": "Cargue su salida de construcción y obtenga un desglose detallado de cuánto de su paquete es sobrecarga de i18n.",
			"products.productsGrid.migrationAssistant": "Asistente de migración",
			"products.productsGrid.automatedCodemodsAndGuides": "Codemods y guías automatizadas para migrar entre bibliotecas i18n con una interrupción mínima.",
			"products.productsGrid.performanceMonitor": "Monitor de rendimiento",
			"products.productsGrid.continuousPerformanceTrackingFor": "Seguimiento continuo del rendimiento para su implementación de i18n. Reciba alertas cuando la carga de traducciones se degrade.",
			"products.productsGrid.learnMore": "Saber más",
			"products.productsHeader.products": "Productos",
			"products.productsHeader.toolsAndServicesTo": "Herramientas y servicios para ayudarle a optimizar su estrategia de internacionalización.",
			"contact.contactForm.name": "Nombre",
			"contact.contactForm.email": "Correo electrónico",
			"contact.contactForm.subject": "Asunto",
			"contact.contactForm.message": "Mensaje",
			"contact.contactForm.sendMessage": "Enviar mensaje",
			"contact.contactForm.wellGetBackTo": "Nos pondremos en contacto con usted en un plazo de 48 horas.",
			"contact.contactHeader.contactUs": "Contáctenos",
			"contact.contactHeader.haveQuestionsOrWantTo": "¿Tiene preguntas o quiere contribuir? Nos encantaría saber de usted.",
			"about.aboutHeader.methodology": "Metodología",
			"about.aboutHeader.weDesignedThisBenchmarkTo": "Diseñamos este benchmark para proporcionar comparaciones justas, reproducibles y significativas de las bibliotecas i18n.",
			"about.whatWeMeasure.bundleSizeImpact": "Impacto en el tamaño del paquete",
			"about.whatWeMeasure.theAdditionalJavascriptBytesSent": "Los bytes adicionales de JavaScript enviados al cliente específicamente debido al tiempo de ejecución de la biblioteca i18n, además de los archivos de traducción para el local actual.",
			"about.whatWeMeasure.renderingOverhead": "Sobrecarga de renderizado",
			"about.whatWeMeasure.howMuchExtraTimeThe": "Cuánto tiempo extra añade la capa i18n a cada renderizado de componente — medido con actualDuration del React Profiler.",
			"about.whatWeMeasure.hydrationCost": "Costo de hidratación",
			"about.whatWeMeasure.duringSsrTranslationDataIs": "Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan la carga útil de HTML y ralentizan la hidratación — el momento en que la página se vuelve interactiva.",
			"about.whatWeMeasure.lazyLoadingEffectiveness": "Eficacia de la carga diferida",
			"about.whatWeMeasure.whetherSplittingTranslationsByRoute": "Si dividir las traducciones por ruta o por espacio de nombres realmente reduce la carga inicial, y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché).",
			"about.whatWeMeasure.localeSwitchSpeed": "Velocidad de cambio de idioma",
			"about.whatWeMeasure.howFastTheAppCan": "Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución — incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.",
			"about.whatWeMeasure.whatWeMeasure": "Lo que medimos",
			"about.aboutGrid.testEnvironment": "Entorno de prueba",
			"about.aboutGrid.allBenchmarksRunOn": "Todos los benchmarks se ejecutan en el mismo hardware (M2 MacBook Pro, 16 GB de RAM), el mismo navegador (Chromium 120 a través de Playwright) y las mismas condiciones de red (4G simulado). Cada prueba se repite 50 veces y reportamos la mediana con los percentiles P95/P99.",
			"about.aboutGrid.applicationDesign": "Diseño de la aplicación",
			"about.aboutGrid.theBenchmarkAppHas10": "La aplicación del benchmark tiene 10 páginas con contenido realista — navegación, formularios, listas dinámicas y texto estático. Cada página utiliza entre 15 y 30 claves de traducción para representar patrones de uso del mundo real.",
			"about.aboutGrid.measurementMethodology": "Metodología de medición",
			"about.aboutGrid.weUseBrowserNativeApis": "Utilizamos las API nativas del navegador (Performance Timeline, Resource Timing, Layout Instability) combinadas con los datos del React Profiler. Los tamaños de los paquetes se miden después de gzip utilizando source-map-explorer para mayor precisión.",
			"about.aboutGrid.fairComparison": "Comparación justa",
			"about.aboutGrid.eachI18nLibraryIsIntegrated": "Cada biblioteca i18n se integra siguiendo su documentación oficial y sus mejores prácticas. Consultamos a los mantenedores cuando es posible para garantizar una configuración óptima. La misma aplicación React, la misma configuración Vite, el mismo despliegue.",
			"home.understandingImpact.understandingTheImpact": "Entendiendo el impacto",
			"home.understandingImpact.whyASingleLargeJson": "Por qué un solo JSON grande puede perjudicar el rendimiento",
			"home.understandingImpact.manyI18nLibrariesStoreTranslations": "Muchas bibliotecas i18n almacenan las traducciones en un solo objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:",
			"home.understandingImpact.theJsonMustBeParsed": "El JSON debe ser analizado en cada carga de página — bloqueando el hilo principal.",
			"home.understandingImpact.contextBasedArchitecturesCanCause": "Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el local, porque cada consumidor es notificado incluso si sus claves específicas no han cambiado.",
			"home.understandingImpact.duringServerSideRenderingThe": "Durante la renderización del lado del servidor, el diccionario completo se serializa en la carga útil de HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.",
			"home.understandingImpact.theTradeOffsOfDynamic": "Las compensaciones de la carga dinámica",
			"home.understandingImpact.splittingTranslationsIntoPerRoute": "Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente la carga útil inicial. Pero introduce nuevos desafíos:",
			"home.understandingImpact.waterfallRequests": "Solicitudes en cascada:",
			"home.understandingImpact.flashOfUntranslatedContentFouc": "Parpadeo de contenido no traducido (FOUC):",
			"home.understandingImpact.cacheInvalidation": "Invalidación de la caché:",
			"home.understandingImpact.whatThisBenchmarkMeasures": "Lo que mide este benchmark",
			"home.understandingImpact.thisTestAppProvidesA": "Esta aplicación de prueba proporciona un entorno controlado — 10 páginas con contenido realista — para comparar las bibliotecas i18n en tres ejes: el peso que añaden a su paquete de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.",
			"home.whyItMatters.whyTheseMetricsMatter": "Por qué son importantes estas métricas",
			"home.whyItMatters.bundleSize": "Tamaño del paquete",
			"home.whyItMatters.theBundleIsTheData": "El paquete representa los datos enviados a cada usuario en todo el mundo. Un paquete más grande significa tiempos de descarga más largos — especialmente en conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código de tiempo de ejecución, además de los propios archivos de traducción.",
			"home.whyItMatters.renderingHydration": "Renderizado e hidratación",
			"home.whyItMatters.connectingALargeJson": "Conectar un gran diccionario JSON a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página se vuelva interactiva — impactando directamente el tiempo de interacción (TTI).",
			"home.whyItMatters.dynamicLoading": "Carga dinámica",
			"home.whyItMatters.loadingAllTranslationsUpfront": "Cargar todas las traducciones por adelantado sobrecarga la carga útil inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, el lazy loading introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial.",
			"home.resultsTable.sampleResults": "Resultados de muestra",
			"home.resultsTable.bundleSize": "Tamaño del paquete",
			"home.resultsTable.lookupTime": "Tiempo de búsqueda",
			"home.resultsTable.lazyLoading": "Carga diferida",
			"home.hero.aTestApplicationDesignedTo": "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el rendimiento de carga y la reactividad de renderizado.",
			"home.hero.viewResults": "Ver resultados",
			"team.teamGrid.sarahChen": "Sarah Chen",
			"team.teamGrid.founderLeadEngineer": "Fundadora e Ingeniera Principal",
			"team.teamGrid.formerGoogleEngineerWith10": "Ex ingeniera de Google con 10 años de experiencia en la construcción de sistemas de internacionalización a escala.",
			"team.teamGrid.marcusWeber": "Marcus Weber",
			"team.teamGrid.performanceEngineer": "Ingeniero de rendimiento",
			"team.teamGrid.specializesInJavascriptPerformanceOptimization": "Especializado en la optimización del rendimiento de JavaScript y en la metodología de benchmarking. Anteriormente en Vercel.",
			"team.teamGrid.aishaPatel": "Aisha Patel",
			"team.teamGrid.developerAdvocate": "Abogado de desarrolladores",
			"team.teamGrid.passionateAboutDeveloperExperienceAnd": "Apasionada por la experiencia y la educación de los desarrolladores. Ponente en React Conf, JSConf e i18nNext.",
			"team.teamGrid.tomasRodriguez": "Tomás Rodríguez",
			"team.teamGrid.fullStackDeveloper": "Desarrollador Full-Stack",
			"team.teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Mantiene la infraestructura de benchmarking y la tubería de CI/CD. Colaborador de código abierto en Lingui.",
			"team.teamGrid.yukiTanaka": "Yuki Tanaka",
			"team.teamGrid.dataAnalyst": "Analista de datos",
			"team.teamGrid.ensuresStatisticalRigorInAll": "Garantiza el rigor estadístico en todos los resultados de los benchmarks. Doctorado en Estadística Aplicada por el MIT.",
			"team.teamGrid.elenaKowalski": "Elena Kowalski",
			"team.teamGrid.communityManager": "Responsable de la comunidad",
			"team.teamGrid.managesCommunityContributionsPartnershipsAnd": "Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.",
			"team.teamHeader.ourTeam": "Nuestro equipo",
			"team.teamHeader.meetThePeopleBehindI18n": "Conozca a la gente detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las excelentes herramientas de desarrollo.",
			"blog.blogList.i18nBenchmark2026Results": "Resultados de i18n Benchmark 2026",
			"blog.blogList.march152026": "15 de marzo de 2026",
			"blog.blogList.weTested12DifferentInternationalization": "Probamos 12 bibliotecas de internacionalización diferentes en 10 páginas. Aquí están los resultados detallados con gráficos interactivos.",
			"blog.blogList.howToReduceYourI18n": "Cómo reducir su paquete i18n en un 60%",
			"blog.blogList.march82026": "8 de marzo de 2026",
			"blog.blogList.practicalStrategiesForOptimizingTranslation": "Estrategias prácticas para optimizar la carga de archivos de traducción, tree-shaking de locales no utilizados y aprovechamiento de la compilación en tiempo de construcción.",
			"blog.blogList.theStateOfInternationalizationIn": "El estado de la internacionalización en 2026",
			"blog.blogList.february282026": "28 de febrero de 2026",
			"blog.blogList.anOverviewOfTheCurrent": "Una visión general del ecosistema i18n actual, comparando enfoques desde catálogos de mensajes hasta soluciones basadas en compiladores.",
			"blog.blogList.migratingFromReactI18nextTo": "Migración de react-i18next a Lingui",
			"blog.blogList.february152026": "15 de febrero de 2026",
			"blog.blogList.aStepByStepGuide": "Una guía paso a paso para migrar una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.",
			"blog.blogList.serverComponentsAndI18nWhat": "Server Components e i18n: ¿Qué cambia?",
			"blog.blogList.february12026": "1 de febrero de 2026",
			"blog.blogList.reactServerComponentsIntroduceNew": "React Server Components introduce nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.",
			"blog.blogList.benchmarkMethodologyHowWeTest": "Metodología de benchmark: cómo probamos",
			"blog.blogList.january202026": "20 de enero de 2026",
			"blog.blogList.aTransparentLookAtOur": "Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.",
			"blog.blogList.readMore": "Leer más →",
			"blog.blogHeader.blog": "Blog",
			"blog.blogHeader.insightsDeepDivesAnd": "Información, análisis profundos y actualizaciones de la comunidad de benchmarking i18n."
		} },
		fr: { translation: {
			"faq.faqList.howAreTheBenchmarks": "Comment les benchmarks sont-ils exécutés ?",
			"faq.faqList.allBenchmarksAreRun": "Tous les benchmarks sont exécutés à l'aide de Playwright sur une configuration matérielle cohérente (M2 MacBook Pro) avec des conditions de réseau 4G simulées. Chaque test effectue 50 itérations et nous rapportons les valeurs médiane, P95 et P99.",
			"faq.faqList.whatLibrariesAreCurrently": "Quelles bibliotecas sont actuellement testées ?",
			"faq.faqList.weCurrentlyBenchmarkReactI18next": "Nous testons actuellement react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl et Paraglide. Nous prévoyons d'en ajouter d'autres sur demande de la communauté.",
			"faq.faqList.canIContributeA": "Puis-je contribuer avec une nouvelle intégration de bibliothèque ?",
			"faq.faqList.absolutelyWeWelcomeCommunity": "Absolument ! Nous accueillons avec plaisir les contributions de la communauté. Forkez le dépôt, ajoutez l'intégration de votre bibliothèque en suivant notre modèle et soumettez une pull request.",
			"faq.faqList.howOftenAreResults": "À quelle fréquence les résultats sont-ils mis à jour ?",
			"faq.faqList.benchmarksRunAutomaticallyVia": "Les benchmarks s'exécutent automatiquement via CI à chaque mise à jour de dépendance et de manière hebdomadaire sur la branche principale. Les résultats sont publiés dans les 24 heures.",
			"faq.faqList.areTheResultsStatistically": "Les résultats sont-ils statistiquement significatifs ?",
			"faq.faqList.yesWeUseThe": "Oui. Nous utilisons le test U de Mann-Whitney avec un niveau de signification de 0,05 pour comparer les distributions. Nous rapportons également les intervalles de confiance et les tailles d'effet.",
			"faq.faq-header1.frequentlyAskedQuestions": "Foire aux questions",
			"faq.faq-header1.everythingYouNeedToKnow": "Tout ce que vous devez savoir sur le projet i18n Benchmark.",
			"settings.preferencesSection.preferences": "Préférences",
			"settings.preferencesSection.emailNotifications": "Notifications par email",
			"settings.preferencesSection.receiveWeeklyBenchmarkReports": "Recevoir des rapports hebdomadaires de benchmark",
			"settings.preferencesSection.darkMode": "Mode sombre",
			"settings.preferencesSection.useDarkColorScheme": "Utiliser le schéma de couleurs sombres",
			"settings.preferencesSection.defaultLanguage": "Langue par défaut",
			"settings.settingsHeader.settings": "Paramètres",
			"settings.settingsHeader.manageYourAccountPreferences": "Gérez vos préférences de compte et votre configuration.",
			"settings.settingsFooter.cancel": "Annuler",
			"settings.settingsFooter.saveChanges": "Enregistrer les modifications",
			"settings.apiAccessSection.apiAccess": "Accès API",
			"settings.apiAccessSection.apiKey": "Clé API",
			"settings.apiAccessSection.useThisKeyTo": "Utilisez cette clé pour accéder à l'API de benchmarking par programmation.",
			"settings.apiAccessSection.copy": "Copier",
			"settings.profileSection.profile": "Profil",
			"settings.profileSection.displayName": "Nom d'affichage",
			"settings.profileSection.email": "Email",
			"shared.header.home": "Accueil",
			"shared.header.methodology": "Méthodologie",
			"shared.header.mockPages": "Pages de test",
			"shared.header.products": "Produits",
			"shared.header.pricing": "Tarifs",
			"shared.header.team": "Équipe",
			"shared.header.blog": "Blog",
			"shared.header.careers": "Carrières",
			"shared.header.faq": "FAQ",
			"shared.header.contact": "Contact",
			"shared.header.settings": "Paramètres",
			"shared.header.goToGithub": "Aller sur GitHub",
			"shared.footer.resources": "Ressources",
			"shared.footer.contact": "Contact",
			"shared.footer.github": "GitHub",
			"shared.footer.methodology": "Méthodologie",
			"shared.footer.contributing": "Contribuer",
			"shared.footer.builtWith": "i18n Benchmark — Projet open source. Construit avec React, Vite & TanStack Router.",
			"shared.footer.anOpenSourceTestApplication": "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.",
			"shared.mockBanner.text": "⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel.",
			"shared.themeToggle.themeModeAutoSystemClick": "Mode thématique : auto (système). Cliquez pour passer en mode clair.",
			"shared.themeToggle.themeModeLightClick": "Mode thématique : clair. Cliquez pour passer en mode sombre.",
			"shared.themeToggle.themeModeDarkClick": "Mode thématique : sombre. Cliquez pour passer en mode auto (système).",
			"shared.themeToggle.themeAuto": "Thème : Auto",
			"shared.themeToggle.themeDark": "Thème : Sombre",
			"shared.themeToggle.themeLight": "Thème : Clair",
			"careers.careersHeader.careers": "Carrières",
			"careers.careersHero.fromAnywhere": "de n'importe où dans le monde",
			"careers.careersBenefits.competitivePay": "Salaire compétitif",
			"careers.careersBenefits.topOfMarket": "Rémunération au sommet du marché",
			"careers.careersBenefits.openSourceTime": "Temps open source",
			"careers.careersBenefits.twentyPercentTime": "20 % du temps pour l'OSS",
			"careers.careersPositions.seniorFrontendEngineer": "Ingénieur Frontend Senior",
			"careers.careersPositions.seniorFrontendEngineerDesc": "Construisez et maintenez notre tableau de bord de benchmarking et nos outils de développement en utilisant React, TypeScript et Vite.",
			"careers.openPositions.openPositions": "Postes vacants",
			"careers.openPositions.remote": "À distance",
			"careers.openPositions.fullTime": "Temps plein",
			"careers.openPositions.applyNow": "Postuler maintenant",
			"route.route.oopsPageNotFound": "Oups ! Page non trouvée",
			"route.route.returnToHome": "Retour à l'accueil",
			"route.route.couldNotMeasureHydrationDuration": "Impossible de mesurer la durée d'hydratation :",
			"pricing.pricingTiers.starterTier": "Starter",
			"pricing.pricingTiers.starterPrice": "0 $",
			"pricing.pricingTiers.forever": "à vie",
			"pricing.pricingTiers.runsPerDay": "5 analyses de benchmark/jour",
			"pricing.pricingTiers.libraries3": "3 bibliothèques",
			"pricing.pricingTiers.communitySupport": "Support communautaire",
			"pricing.pricingTiers.publicResults": "Résultats publics",
			"pricing.pricingTiers.getStarted": "Démarrer",
			"pricing.pricingTiers.proTier": "Pro",
			"pricing.pricingTiers.proPrice": "29 $",
			"pricing.pricingTiers.perMonth": "/mois",
			"pricing.pricingTiers.unlimitedRuns": "Analyses illimitées",
			"pricing.pricingTiers.allLibraries": "Toutes les bibliothèques",
			"pricing.pricingTiers.prioritySupport": "Support prioritaire",
			"pricing.pricingTiers.privateResults": "Résultats privés",
			"pricing.pricingTiers.ciIntegration": "Intégration CI",
			"pricing.pricingTiers.historicalData": "Données historiques",
			"pricing.pricingTiers.enterpriseTier": "Entreprise",
			"pricing.pricingTiers.custom": "Sur mesure",
			"pricing.pricingTiers.everythingInPro": "Tout ce qui est dans Pro",
			"pricing.pricingTiers.onPremiseOption": "Option sur site",
			"pricing.pricingTiers.ssoSaml": "SSO & SAML",
			"pricing.pricingTiers.dedicatedAccountManager": "Gestionnaire de compte dédié",
			"pricing.pricingTiers.customSLAs": "SLAs personnalisés",
			"pricing.pricingTiers.auditLogs": "Journaux d'audit",
			"pricing.pricingTiers.trainingSessions": "Sessions de formation",
			"pricing.pricingTiers.contactSales": "Contacter les ventes",
			"pricing.pricingHeader.pricing": "Tarifs",
			"pricing.pricingHeader.transparentPricingForEvery": "Une tarification transparente pour chaque étape de votre voyage i18n.",
			"products.products.benchmarkCLI": "Benchmark CLI",
			"products.products.benchmarkCLIDesc": "Exécutez des benchmarks localement depuis votre terminal. Supporte les configurations personnalisées et l'intégration CI.",
			"products.products.benchmarkCLIPrice": "Gratuit",
			"products.products.benchmarkCloud": "Benchmark Cloud",
			"products.products.benchmarkCloudDesc": "Benchmarking automatisé dans le cloud avec suivi historique, alertes et tableaux de bord d'équipe.",
			"products.products.benchmarkCloudPrice": "29 $/mois",
			"products.products.benchmarkEnterprise": "Benchmark Enterprise",
			"products.products.benchmarkEnterpriseDesc": "Déploiement sur site avec SSO, journaux d'audit, SLAs personnalisés et support dédié.",
			"products.products.benchmarkEnterprisePrice": "Nous contacter",
			"products.products.migrationAssistant": "Assistant de migration",
			"products.products.migrationAssistantDesc": "Outil propulsé par l'IA qui aide à migrer votre base de code entre les bibliothèques i18n sans temps d'arrêt.",
			"products.products.migrationAssistantPrice": "99 $ une fois",
			"products.products.translationQA": "Translation QA",
			"products.products.translationQADesc": "Vérifications automatiques de la qualité pour les traductions manquantes, les problèmes de pluralisation et les erreurs de contexte.",
			"products.products.translationQAPrice": "19 $/mois",
			"products.products.bundleOptimizer": "Optimiseur de bundle",
			"products.products.bundleOptimizerDesc": "Analyse et optimise votre bundle i18n pour la production avec le tree-shaking et le code splitting.",
			"products.products.bundleOptimizerPrice": "49 $/mois",
			"products.products.learnMore": "En savoir plus",
			"products.productsHeader.ourProducts": "Nos Produits",
			"products.productsHeader.exploreOurSuiteOfTools": "Explorez notre suite d'outils conçus pour vous aider à créer de meilleures applications i18n.",
			"contact.contactForm.name": "Nom",
			"contact.contactForm.email": "Email",
			"contact.contactForm.subject": "Sujet",
			"contact.contactForm.message": "Message",
			"contact.contactForm.sendMessage": "Envoyer le message",
			"contact.contactForm.wellGetBackTo": "Nous vous répondrons dans les 48 heures.",
			"contact.contactHeader.contactUs": "Contactez-nous",
			"contact.contactHeader.haveQuestionsOrWantTo": "Vous avez des questions ou vous voulez contribuer ? Nous serions ravis de vous entendre.",
			"about.aboutHeader.methodology": "Méthodologie",
			"about.aboutHeader.weDesignedThisBenchmarkTo": "Nous avons conçu ce benchmark pour fournir des comparaisons équitables, reproductibles et significatives des bibliothèques i18n.",
			"about.whatWeMeasure.bundleSizeImpact": "Impact sur la taille du bundle",
			"about.whatWeMeasure.theAdditionalJavascriptBytesSent": "Les octets JavaScript supplémentaires envoyés au client spécifiquement en raison du runtime de la bibliothèque i18n, plus les fichiers de traduction pour la langue actuelle.",
			"about.whatWeMeasure.renderingOverhead": "Surcharge de rendu",
			"about.whatWeMeasure.howMuchExtraTimeThe": "Combien de temps supplémentaire la couche i18n ajoute au rendu de chaque composant — mesuré à l'aide de actualDuration du React Profiler.",
			"about.whatWeMeasure.hydrationCost": "Coût d'hydratation",
			"about.whatWeMeasure.duringSsrTranslationDataIs": "Pendant le SSR, les données de traduction sont sérialisées dans le HTML. Les dictionnaire volumineux augmentent le payload HTML et ralentissent l'hydratation — le moment où la page devient interactive.",
			"about.whatWeMeasure.lazyLoadingEffectiveness": "Efficacité du chargement différé",
			"about.whatWeMeasure.whetherSplittingTranslationsByRoute": "Si le fractionnement des traductions par route ou par espace de noms réduit réellement la charge initiale, et quels compromis cela introduit (requêtes en cascade, FOUC, complexité du cache).",
			"about.whatWeMeasure.localeSwitchSpeed": "Vitesse de changement de langue",
			"about.whatWeMeasure.howFastTheAppCan": "À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération des nouvelles traductions, le rendu des composants et la mise à jour du DOM.",
			"about.whatWeMeasure.whatWeMeasure": "Ce que nous mesurons",
			"about.aboutGrid.testEnvironment": "Environnement de test",
			"about.aboutGrid.allBenchmarksRunOn": "Tous les benchmarks sont exécutés sur le même matériel (M2 MacBook Pro, 16 Go de RAM), le même navigateur (Chromium 120 via Playwright) et les mêmes conditions réseau (4G simulée). Chaque test est répété 50 fois et nous rapportons la médiane avec les percentiles P95/P99.",
			"about.aboutGrid.applicationDesign": "Conception de l'application",
			"about.aboutGrid.theBenchmarkAppHas10": "L'application de benchmark dispose de 10 pages avec un contenu réaliste — navigation, formulaires, listes dynamiques et texte statique. Chaque page utilise 15 à 30 clés de traduction pour représenter les modèles d'utilisation du monde réel.",
			"about.aboutGrid.measurementMethodology": "Méthodologie de mesure",
			"about.aboutGrid.weUseBrowserNativeApis": "Nous utilisons les API natives du navigateur (Performance Timeline, Resource Timing, Layout Instability) combinées aux données de React Profiler. La taille des bundles est mesurée après gzip à l'aide de source-map-explorer pour plus de précision.",
			"about.aboutGrid.fairComparison": "Comparaison équitable",
			"about.aboutGrid.eachI18nLibraryIsIntegrated": "Chaque bibliothèque i18n est intégrée en suivant sa documentation officielle et ses meilleures pratiques. Nous consultons les mainteneurs lorsque cela est possible. Même application React, même configuration Vite, même déploiement.",
			"home.understandingImpact.understandingTheImpact": "Comprendre l'impact",
			"home.understandingImpact.whyASingleLargeJson": "Pourquoi un seul JSON volumineux peut nuire aux performances",
			"home.understandingImpact.manyI18nLibrariesStoreTranslations": "De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (des milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :",
			"home.understandingImpact.theJsonMustBeParsed": "Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.",
			"home.understandingImpact.contextBasedArchitecturesCanCause": "Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.",
			"home.understandingImpact.duringServerSideRenderingThe": "Lors du rendu côté serveur, le dictionnaire complet est sérialisé dans le payload HTML, augmentant la taille du document qui doit être téléchargé et hydraté.",
			"home.understandingImpact.theTradeOffsOfDynamic": "Les compromis du chargement dynamique",
			"home.understandingImpact.splittingTranslationsIntoPerRoute": "La division des traductions en morceaux par route ou par espace de noms peut réduire considérablement le payload initial. Mais cela introduit de nouveaux défis :",
			"home.understandingImpact.waterfallRequests": "Requêtes en cascade :",
			"home.understandingImpact.flashOfUntranslatedContentFouc": "Flash de contenu non traduit (FOUC) :",
			"home.understandingImpact.cacheInvalidation": "Invalidation du cache :",
			"home.understandingImpact.whatThisBenchmarkMeasures": "Ce que ce benchmark mesure",
			"home.understandingImpact.thisTestAppProvidesA": "Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.",
			"home.whyItMatters.whyTheseMetricsMatter": "Pourquoi ces mesures sont importantes",
			"home.whyItMatters.bundleSize": "Taille du bundle",
			"home.whyItMatters.theBundleIsTheData": "Le bundle représente les données envoyées à chaque utilisateur dans le monde. Un bundle plus volumineux signifie des temps de téléchargement plus longs — particulièrement sur des connexions 3G lentes courantes dans de nombreuses régions. Les bibliothèques i18n varient considérablement dans leur poids : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, plus les fichiers de traduction eux-mêmes.",
			"home.whyItMatters.renderingHydration": "Rendu & Hydratation",
			"home.whyItMatters.connectingALargeJson": "La connexion d'un dictionnaire JSON volumineux à chaque composant crée une dépendance cachée : tout changement dans le contexte de traduction peut déclencher des re-rendus sur l'ensemble de l'arbre. Pendant l'hydratation SSR, l'analyse et l'attachement d'objets de traduction massifs ajoutent de la latence avant que la page ne devienne interactive — impactant directement le Time to Interactive (TTI).",
			"home.whyItMatters.dynamicLoading": "Chargement dynamique",
			"home.whyItMatters.loadingAllTranslationsUpfront": "Le chargement de toutes les traductions à l'avance surcharge le payload initial. Le chargement dynamique (lazy) divise les traductions par route ou par namespace, n'envoyant que ce dont la page actuelle a besoin. Cependant, le lazy loading introduit ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité de mise en cache. Mesurer les deux stratégies est essentiel.",
			"home.resultsTable.sampleResults": "Exemples de résultats",
			"home.resultsTable.bundleSize": "Taille du bundle",
			"home.resultsTable.lookupTime": "Temps de recherche",
			"home.resultsTable.lazyLoading": "Chargement différé",
			"home.hero.aTestApplicationDesignedTo": "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.",
			"home.hero.viewResults": "Voir les résultats",
			"team.teamGrid.sarahChen": "Sarah Chen",
			"team.teamGrid.founderLeadEngineer": "Fondatrice & Ingénieure en chef",
			"team.teamGrid.formerGoogleEngineerWith10": "Ancienne ingénieure Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.",
			"team.teamGrid.marcusWeber": "Marcus Weber",
			"team.teamGrid.performanceEngineer": "Ingénieur Performance",
			"team.teamGrid.specializesInJavascriptPerformanceOptimization": "Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Précédemment chez Vercel.",
			"team.teamGrid.aishaPatel": "Aisha Patel",
			"team.teamGrid.developerAdvocate": "Developer Advocate",
			"team.teamGrid.passionateAboutDeveloperExperienceAnd": "Passionnée par l'expérience développeur et l'éducation. Conférencière à React Conf, JSConf et i18nNext.",
			"team.teamGrid.tomasRodriguez": "Tomás Rodríguez",
			"team.teamGrid.fullStackDeveloper": "Développeur Full-Stack",
			"team.teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Entretient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.",
			"team.teamGrid.yukiTanaka": "Yuki Tanaka",
			"team.teamGrid.dataAnalyst": "Analyste de données",
			"team.teamGrid.ensuresStatisticalRigorInAll": "Assure la rigueur statistique de tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.",
			"team.teamGrid.elenaKowalski": "Elena Kowalski",
			"team.teamGrid.communityManager": "Responsable de communauté",
			"team.teamGrid.managesCommunityContributionsPartnershipsAnd": "Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source.",
			"team.teamHeader.ourTeam": "Notre équipe",
			"team.teamHeader.meetThePeopleBehindI18n": "Rencontrez les personnes derrière i18n Benchmark. Une équipe diversifiée unie par une passion commune pour les excellents outils de développement.",
			"blog.blogList.i18nBenchmark2026Results": "Résultats de l'i18n Benchmark 2026",
			"blog.blogList.march152026": "15 mars 2026",
			"blog.blogList.weTested12DifferentInternationalization": "Nous avons testé 12 bibliothèques d'internationalisation différentes sur 10 pages. Voici les résultats détaillés avec des graphiques interactifs.",
			"blog.blogList.howToReduceYourI18n": "Comment réduire votre bundle i18n de 60 %",
			"blog.blogList.march82026": "8 mars 2026",
			"blog.blogList.practicalStrategiesForOptimizingTranslation": "Stratégies pratiques pour l'optimisation du chargement des fichiers de traduction, l'élimination des locales inutilisées et l'exploitation de la compilation au moment de la construction.",
			"blog.blogList.theStateOfInternationalizationIn": "L'état de l'internationalisation en 2026",
			"blog.blogList.february282026": "28 février 2026",
			"blog.blogList.anOverviewOfTheCurrent": "Un aperçu de l'écosystème i18n actuel, comparant les approches des catalogues de messages aux solutions basées sur des compilateurs.",
			"blog.blogList.migratingFromReactI18nextTo": "Migration de react-i18next vers Lingui",
			"blog.blogList.february152026": "15 février 2026",
			"blog.blogList.aStepByStepGuide": "Un guide étape par étape pour la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.",
			"blog.blogList.serverComponentsAndI18nWhat": "Server Components et i18n : Qu'est-ce qui change ?",
			"blog.blogList.february12026": "1er février 2026",
			"blog.blogList.reactServerComponentsIntroduceNew": "Les React Server Components introduisent de nouveaux modèles pour l'internationalisation. Nous explorons les implications et les meilleures pratiques.",
			"blog.blogList.benchmarkMethodologyHowWeTest": "Méthodologie du benchmark : comment nous testons",
			"blog.blogList.january202026": "20 janvier 2026",
			"blog.blogList.aTransparentLookAtOur": "Un regard transparent sur notre méthodologie de benchmarking, y compris les environnements de test, les méthodes statistiques et la reproductibilité.",
			"blog.blogList.readMore": "Lire la suite →",
			"blog.blogHeader.blog": "Blog",
			"blog.blogHeader.insightsDeepDivesAnd": "Aperçus, analyses approfondies et mises à jour de la communauté de benchmarking i18n."
		} },
		it: { translation: {
			"faq.faqList.howAreTheBenchmarks": "Come vengono eseguiti i benchmark?",
			"faq.faqList.allBenchmarksAreRun": "Tutti i benchmark vengono eseguiti utilizzando Playwright su una configurazione hardware coerente (M2 MacBook Pro) con condizioni di rete 4G simulate. Ogni test esegue 50 iterazioni e riportiamo la mediana, i valori P95 e P99.",
			"faq.faqList.whatLibrariesAreCurrently": "Quali librerie sono attualmente testate?",
			"faq.faqList.weCurrentlyBenchmarkReactI18next": "Attualmente testiamo react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl e Paraglide. Prevediamo di aggiungerne altre in base alle richieste della comunità.",
			"faq.faqList.canIContributeA": "Posso contribuire con l'integrazione di una nuova libreria?",
			"faq.faqList.absolutelyWeWelcomeCommunity": "Assolutamente! Accogliamo con favore i contributi della comunità. Forka il repository, aggiungi l'integrazione della tua libreria seguendo il nostro template e invia una pull request.",
			"faq.faqList.howOftenAreResults": "Con quale frequenza vengono aggiornati i risultati?",
			"faq.faqList.benchmarksRunAutomaticallyVia": "I benchmark vengono eseguiti automaticamente tramite CI a ogni aggiornamento di dipendenza e settimanalmente sul branch main. I risultati vengono pubblicati sul cruscotto entro 24 ore.",
			"faq.faqList.areTheResultsStatistically": "I risultati sono statisticamente significativi?",
			"faq.faqList.yesWeUseThe": "Sì. Utilizziamo il test U di Mann-Whitney con un livello di significatività di 0,05 per confrontare le distribuzioni. Riportiamo anche gli intervalli di confidenza e le dimensioni dell'effetto.",
			"faq.faq-header1.frequentlyAskedQuestions": "Domande frequenti",
			"faq.faq-header1.everythingYouNeedToKnow": "Tutto quello che c'è da sapere sul progetto i18n Benchmark.",
			"settings.preferencesSection.preferences": "Preferenze",
			"settings.preferencesSection.emailNotifications": "Notifiche via email",
			"settings.preferencesSection.receiveWeeklyBenchmarkReports": "Ricevi rapporti settimanali sui benchmark",
			"settings.preferencesSection.darkMode": "Modalità scura",
			"settings.preferencesSection.useDarkColorScheme": "Usa lo schema colori scuro",
			"settings.preferencesSection.defaultLanguage": "Lingua predefinita",
			"settings.settingsHeader.settings": "Impostazioni",
			"settings.settingsHeader.manageYourAccountPreferences": "Gestisci le preferenze del tuo account e la configurazione.",
			"settings.settingsFooter.cancel": "Annulla",
			"settings.settingsFooter.saveChanges": "Salva modifiche",
			"settings.apiAccessSection.apiAccess": "Accesso API",
			"settings.apiAccessSection.apiKey": "Chiave API",
			"settings.apiAccessSection.useThisKeyTo": "Usa questa chiave per accedere programmaticamente all'API di benchmarking.",
			"settings.apiAccessSection.copy": "Copia",
			"settings.profileSection.profile": "Profilo",
			"settings.profileSection.displayName": "Nome visualizzato",
			"settings.profileSection.email": "Email",
			"shared.header.home": "Home",
			"shared.header.methodology": "Metodologia",
			"shared.header.mockPages": "Pagine di test",
			"shared.header.products": "Prodotti",
			"shared.header.pricing": "Prezzi",
			"shared.header.team": "Team",
			"shared.header.blog": "Blog",
			"shared.header.careers": "Carriere",
			"shared.header.faq": "FAQ",
			"shared.header.contact": "Contatti",
			"shared.header.settings": "Impostazioni",
			"shared.header.goToGithub": "Vai su GitHub",
			"shared.footer.resources": "Risorse",
			"shared.footer.contact": "Contatti",
			"shared.footer.github": "GitHub",
			"shared.footer.methodology": "Metodologia",
			"shared.footer.contributing": "Contribuire",
			"shared.footer.builtWith": "i18n Benchmark — Progetto open-source. Costruito con React, Vite e TanStack Router.",
			"shared.footer.anOpenSourceTestApplication": "Un'applicazione di test open-source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.",
			"shared.mockBanner.text": "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è correlata ad alcuna attività o servizio reale.",
			"shared.themeToggle.themeModeAutoSystemClick": "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.",
			"shared.themeToggle.themeModeLightClick": "Modalità tema: chiara. Clicca per passare alla modalità scura.",
			"shared.themeToggle.themeModeDarkClick": "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).",
			"shared.themeToggle.themeAuto": "Tema: Auto",
			"shared.themeToggle.themeDark": "Tema: Scuro",
			"shared.themeToggle.themeLight": "Tema: Chiaro",
			"careers.openPositions.openPositions": "Posizioni aperte",
			"careers.openPositions.seniorPerformanceEngineer": "Ingegnere delle prestazioni senior",
			"careers.openPositions.fullTime": "Tempo pieno",
			"careers.openPositions.remote": "Remoto",
			"careers.openPositions.leadBenchmarkDesignAnd": "Guidare la progettazione e l'implementazione del benchmark. È richiesta una profonda conoscenza dei meccanismi interni di V8, delle API delle prestazioni del browser e dell'analisi statistica.",
			"careers.openPositions.technicalWriter": "Scrittore tecnico",
			"careers.openPositions.partTime": "Part-time",
			"careers.openPositions.createAndMaintainDocumentation": "Creare e mantenere documentazione, post sul blog e contenuti educativi sulle migliori pratiche per le prestazioni i18n.",
			"careers.openPositions.frontendDeveloper": "Sviluppatore Frontend",
			"careers.openPositions.buildAndMaintainThe": "Costruire e mantenere la dashboard dei benchmark, gli strumenti di confronto e le visualizzazioni interattive.",
			"careers.openPositions.devOpsEngineer": "Ingegnere DevOps",
			"careers.openPositions.designAndMaintainThe": "Progettare e mantenere la pipeline CI/CD che esegue i benchmark automaticamente a ogni aggiornamento della libreria.",
			"careers.openPositions.applyNow": "Candidati ora",
			"careers.careersHeader.careers": "Carriere",
			"careers.careersHeader.joinOurMissionToMake": "Unisciti alla nostra missione per rendere il web più veloce e accessibile per tutti, ovunque.",
			"careers.careersBenefits.whyJoinUs": "Perché unirti a noi?",
			"careers.careersBenefits.remoteFirst": "Remoto-first",
			"careers.careersBenefits.workFromAnywhereFully": "Lavora da ovunque. Team completamente distribuito in 6 fusi orari.",
			"careers.careersBenefits.openSource": "Open Source",
			"careers.careersBenefits.allOurWorkIs": "Tutto il nostro lavoro è open source. Costruisci il tuo portfolio pubblico mentre generi un impatto.",
			"careers.careersBenefits.impactful": "Impattante",
			"careers.careersBenefits.yourWorkDirectlyHelps": "Il tuo lavoro aiuta direttamente i sviluppatori a creare applicazioni internazionalizzate migliori e più veloci.",
			"route.route.oopsPageNotFound": "Ops! Pagina non trovata",
			"route.route.returnToHome": "Torna alla Home",
			"route.route.couldNotMeasureHydrationDuration": "Impossibile misurare la durata dell'idratazione:",
			"pricing.pricingTiers.freeTier": "Piano Gratuito",
			"pricing.pricingTiers.free": "Gratis",
			"pricing.pricingTiers.publicBenchmarkDashboard": "Dashboard pubblica dei benchmark",
			"pricing.pricingTiers.basicLibraryComparisons": "Confronti base tra librerie",
			"pricing.pricingTiers.communityForumAccess": "Accesso al forum della comunità",
			"pricing.pricingTiers.monthlyResultDigest": "Riepilogo mensile dei risultati",
			"pricing.pricingTiers.getStarted": "Inizia ora",
			"pricing.pricingTiers.proTier": "Piano Pro",
			"pricing.pricingTiers.perMonth": "/mese",
			"pricing.pricingTiers.allFreeFeatures": "Tutte le funzioni del piano gratuito",
			"pricing.pricingTiers.customBenchmarkConfigurations": "Configurazioni di benchmark personalizzate",
			"pricing.pricingTiers.privateResultsDashboard": "Dashboard dei risultati privata",
			"pricing.pricingTiers.apiAccess1000Requests": "Accesso API (1.000 richieste/giorno)",
			"pricing.pricingTiers.slackIntegration": "Integrazione Slack",
			"pricing.pricingTiers.subscribeToPro": "Abbonati a Pro",
			"pricing.pricingTiers.enterpriseTier": "Piano Enterprise",
			"pricing.pricingTiers.custom": "Personalizzato",
			"pricing.pricingTiers.allProFeatures": "Tutte le funzioni del piano Pro",
			"pricing.pricingTiers.dedicatedBenchmarkInfrastructure": "Infrastruttura di benchmark dedicata",
			"pricing.pricingTiers.customLibraryIntegrations": "Integrazioni librerie personalizzate",
			"pricing.pricingTiers.slaGuarantees": "Garanzie SLA",
			"pricing.pricingTiers.prioritySupport": "Supporto prioritario",
			"pricing.pricingTiers.contactSales": "Contatta l'ufficio vendite",
			"pricing.pricingHeader.pricing": "Prezzi",
			"pricing.pricingHeader.transparentPricingForEvery": "Prezzi trasparenti per ogni fase del tuo percorso i18n.",
			"products.productsGrid.benchmarkDashboard": "Dashboard dei benchmark",
			"products.productsGrid.interactiveChartsAndTables": "Grafici e tabelle interattive che confrontano le librerie i18n per dimensione del bundle, tempo di rendering e costo di idratazione.",
			"products.productsGrid.bundleAnalyzer": "Analizzatore di bundle",
			"products.productsGrid.uploadYourBuildOutput": "Carica l'output della tua build e ottieni una scomposizione dettagliata di quanto del tuo bundle è sovraccarico i18n.",
			"products.productsGrid.migrationAssistant": "Assistente alla migrazione",
			"products.productsGrid.automatedCodemodsAndGuides": "Codemod e guide automatizzate per la migrazione tra librerie i18n con il minimo disturbo.",
			"products.productsGrid.performanceMonitor": "Monitor delle prestazioni",
			"products.productsGrid.continuousPerformanceTrackingFor": "Monitoraggio continuo delle prestazioni per la tua implementazione i18n. Ricevi avvisi quando il caricamento delle traduzioni peggiora.",
			"products.productsGrid.learnMore": "Scopri di più",
			"products.productsHeader.products": "Prodotti",
			"products.productsHeader.toolsAndServicesTo": "Strumenti e servizi per aiutarti a ottimizzare la tua strategia di internazionalizzazione.",
			"contact.contactForm.name": "Nome",
			"contact.contactForm.email": "Email",
			"contact.contactForm.subject": "Oggetto",
			"contact.contactForm.message": "Messaggio",
			"contact.contactForm.sendMessage": "Invia messaggio",
			"contact.contactForm.wellGetBackTo": "Ti risponderemo entro 48 ore.",
			"contact.contactHeader.contactUs": "Contattaci",
			"contact.contactHeader.haveQuestionsOrWantTo": "Hai domande o vuoi contribuire? Ci piacerebbe sentirti.",
			"about.aboutHeader.methodology": "Metodologia",
			"about.aboutHeader.weDesignedThisBenchmarkTo": "Abbiamo progettato questo benchmark per fornire confronti equi, riproducibili e significativi delle librerie i18n.",
			"about.whatWeMeasure.bundleSizeImpact": "Impatto sulla dimensione del bundle",
			"about.whatWeMeasure.theAdditionalJavascriptBytesSent": "I byte JavaScript aggiuntivi inviati al client specificamente a causa del runtime della libreria i18n, oltre ai file di traduzione per la localizzazione corrente.",
			"about.whatWeMeasure.renderingOverhead": "Sovrapprezzo di rendering",
			"about.whatWeMeasure.howMuchExtraTimeThe": "Quanto tempo extra aggiunge lo strato i18n a ogni rendering di componente — misurato utilizzando actualDuration di React Profiler.",
			"about.whatWeMeasure.hydrationCost": "Costo di idratazione",
			"about.whatWeMeasure.duringSsrTranslationDataIs": "Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. I grandi dizionari aumentano il payload HTML e rallentano l'idratazione, il momento in cui la pagina diventa interattiva.",
			"about.whatWeMeasure.lazyLoadingEffectiveness": "Efficacia del caricamento lazy",
			"about.whatWeMeasure.whetherSplittingTranslationsByRoute": "Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).",
			"about.whatWeMeasure.localeSwitchSpeed": "Velocità di cambio localizzazione",
			"about.whatWeMeasure.howFastTheAppCan": "Quanto velocemente l'app può passare da una lingua all'altra in esecuzione, includendo il recupero delle nuove traduzioni, il re-rendering dei componenti e l'aggiornamento del DOM.",
			"about.whatWeMeasure.whatWeMeasure": "Cosa misuriamo",
			"about.aboutGrid.testEnvironment": "Ambiente di test",
			"about.aboutGrid.allBenchmarksRunOn": "Tutti i benchmark vengono eseguiti sullo stesso hardware (M2 MacBook Pro, 16 GB di RAM), lo stesso browser (Chromium 120 tramite Playwright) e le stesse condizioni di rete (4G simulato). Ogni test viene ripetuto 50 volte e riportiamo la mediana con i percentili P95/P99.",
			"about.aboutGrid.applicationDesign": "Design dell'applicazione",
			"about.aboutGrid.theBenchmarkAppHas10": "L'app di benchmark ha 10 pagine con contenuti realistici: navigazione, moduli, elenchi dinamici e testo statico. Ogni pagina utilizza 15-30 chiavi di traduzione per rappresentare modelli di utilizzo reali.",
			"about.aboutGrid.measurementMethodology": "Metodologia di misurazione",
			"about.aboutGrid.weUseBrowserNativeApis": "Utilizziamo le API native del browser (Performance Timeline, Resource Timing, Layout Instability) combinate con i dati di React Profiler. Le dimensioni dei bundle vengono misurate dopo la compressione gzip utilizzando source-map-explorer per accuratezza.",
			"about.aboutGrid.fairComparison": "Confronto equo",
			"about.aboutGrid.eachI18nLibraryIsIntegrated": "Ogni libreria i18n viene integrata seguendo la sua documentazione ufficiale e le migliori pratiche. Consultiamo i manutentori, quando possibile, per garantire una configurazione ottimale. Stessa app React, stessa configurazione Vite, stessa distribuzione.",
			"home.understandingImpact.understandingTheImpact": "Capire l'impatto",
			"home.understandingImpact.whyASingleLargeJson": "Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni",
			"home.understandingImpact.manyI18nLibrariesStoreTranslations": "Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:",
			"home.understandingImpact.theJsonMustBeParsed": "Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.",
			"home.understandingImpact.contextBasedArchitecturesCanCause": "Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.",
			"home.understandingImpact.duringServerSideRenderingThe": "Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idratato.",
			"home.understandingImpact.theTradeOffsOfDynamic": "I compromessi del caricamento dinamico",
			"home.understandingImpact.splittingTranslationsIntoPerRoute": "La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:",
			"home.understandingImpact.waterfallRequests": "Richieste a cascata:",
			"home.understandingImpact.flashOfUntranslatedContentFouc": "Flash di contenuti non tradotti (FOUC):",
			"home.understandingImpact.cacheInvalidation": "Invalidazione della cache:",
			"home.understandingImpact.whatThisBenchmarkMeasures": "Cosa misura questo benchmark",
			"home.understandingImpact.thisTestAppProvidesA": "Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.",
			"home.whyItMatters.whyTheseMetricsMatter": "Perché queste metriche sono importanti",
			"home.whyItMatters.bundleSize": "Dimensione del bundle",
			"home.whyItMatters.theBundleIsTheData": "Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.",
			"home.whyItMatters.renderingHydration": "Rendering e idratazione",
			"home.whyItMatters.connectingALargeJson": "Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).",
			"home.whyItMatters.dynamicLoading": "Caricamento dinamico",
			"home.whyItMatters.loadingAllTranslationsUpfront": "Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale.",
			"home.resultsTable.sampleResults": "Risultati di esempio",
			"home.resultsTable.bundleSize": "Dimensione del bundle",
			"home.resultsTable.lookupTime": "Tempo di ricerca",
			"home.resultsTable.lazyLoading": "Caricamento lazy",
			"home.hero.aTestApplicationDesignedTo": "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.",
			"home.hero.viewResults": "Visualizza i risultati",
			"team.teamGrid.sarahChen": "Sarah Chen",
			"team.teamGrid.founderLeadEngineer": "Fondatrice & Lead Engineer",
			"team.teamGrid.formerGoogleEngineerWith10": "Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.",
			"team.teamGrid.marcusWeber": "Marcus Weber",
			"team.teamGrid.performanceEngineer": "Ingegnere delle prestazioni",
			"team.teamGrid.specializesInJavascriptPerformanceOptimization": "Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. In precedenza in Vercel.",
			"team.teamGrid.aishaPatel": "Aisha Patel",
			"team.teamGrid.developerAdvocate": "Developer Advocate",
			"team.teamGrid.passionateAboutDeveloperExperienceAnd": "Appassionata di esperienza sviluppatore e formazione. Relatrice a React Conf, JSConf e i18nNext.",
			"team.teamGrid.tomasRodriguez": "Tomás Rodríguez",
			"team.teamGrid.fullStackDeveloper": "Sviluppatore Full-Stack",
			"team.teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source per Lingui.",
			"team.teamGrid.yukiTanaka": "Yuki Tanaka",
			"team.teamGrid.dataAnalyst": "Analista dati",
			"team.teamGrid.ensuresStatisticalRigorInAll": "Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.",
			"team.teamGrid.elenaKowalski": "Elena Kowalski",
			"team.teamGrid.communityManager": "Responsabile della comunità",
			"team.teamGrid.managesCommunityContributionsPartnershipsAnd": "Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.",
			"team.teamHeader.ourTeam": "Il nostro team",
			"team.teamHeader.meetThePeopleBehindI18n": "Incontra le persone dietro i18n Benchmark. Un team diversificato unito da una passione condivisa per gli ottimi strumenti di sviluppo.",
			"blog.blogList.i18nBenchmark2026Results": "Risultati i18n Benchmark 2026",
			"blog.blogList.march152026": "15 marzo 2026",
			"blog.blogList.weTested12DifferentInternationalization": "Abbiamo testato 12 diverse librerie di internazionalizzazione su 10 pagine. Ecco i risultati dettagliati con grafici interattivi.",
			"blog.blogList.howToReduceYourI18n": "Come ridurre il bundle i18n del 60%",
			"blog.blogList.march82026": "8 marzo 2026",
			"blog.blogList.practicalStrategiesForOptimizingTranslation": "Strategie pratiche per ottimizzare il caricamento dei file di traduzione, il tree-shaking delle localizzazioni inutilizzate e l'uso della compilazione in fase di build.",
			"blog.blogList.theStateOfInternationalizationIn": "Lo stato dell'internazionalizzazione nel 2026",
			"blog.blogList.february282026": "28 febbraio 2026",
			"blog.blogList.anOverviewOfTheCurrent": "Una panoramica dell'attuale ecosistema i18n, confrontando approcci dai cataloghi di messaggi alle soluzioni basate su compilatore.",
			"blog.blogList.migratingFromReactI18nextTo": "Migrazione da react-i18next a Lingui",
			"blog.blogList.february152026": "15 febbraio 2026",
			"blog.blogList.aStepByStepGuide": "Una guida passo-passo per la migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.",
			"blog.blogList.serverComponentsAndI18nWhat": "Server Components e i18n: cosa cambia?",
			"blog.blogList.february12026": "1 febbraio 2026",
			"blog.blogList.reactServerComponentsIntroduceNew": "I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.",
			"blog.blogList.benchmarkMethodologyHowWeTest": "Metodologia del benchmark: come testiamo",
			"blog.blogList.january202026": "20 gennaio 2026",
			"blog.blogList.aTransparentLookAtOur": "Uno sguardo trasparente alla nostra metodologia di benchmarking, inclusi gli ambienti di test, i metodi statistici e la riproducibilità.",
			"blog.blogList.readMore": "Leggi di più →",
			"blog.blogHeader.blog": "Blog",
			"blog.blogHeader.insightsDeepDivesAnd": "Approfondimenti e aggiornamenti dalla comunità di benchmarking i18n."
		} },
		ja: { translation: {
			"faq.faqList.howAreTheBenchmarks": "ベンチマークはどのように実行されますか？",
			"faq.faqList.allBenchmarksAreRun": "すべてのベンチマークは、Playwrightを使用して、一貫したハードウェア（M2 MacBook Pro）上でシミュレートされた4Gネットワーク条件で実行されます。各テストは50回繰り返され、中央値、P95、およびP99の値を報告します。",
			"faq.faqList.whatLibrariesAreCurrently": "現在テストされているライブラリは何ですか？",
			"faq.faqList.weCurrentlyBenchmarkReactI18next": "現在はreact-i18next、react-intl (FormatJS)、LinguiJS、typesafe-i18n、next-intl、Paraglideをベンチマークしています。コミュニティの要望に応じてさらに追加する予定です。",
			"faq.faqList.canIContributeA": "新しいライブラリの統合を提案できますか？",
			"faq.faqList.absolutelyWeWelcomeCommunity": "もちろんです！コミュニティからの貢献を歓迎します。リポジトリをフォークし、テンプレートに従ってライブラリの統合を追加し、プルリクエストを送信してください。",
			"faq.faqList.howOftenAreResults": "結果はどのくらいの頻度で更新されますか？",
			"faq.faqList.benchmarksRunAutomaticallyVia": "ベンチマークは、依存関係の更新ごとにCIを介して自動的に実行され、さらにメインブランチで毎週実行されます。結果は24時間以内にダッシュボードに公開されます。",
			"faq.faqList.areTheResultsStatistically": "結果は統計的に有意ですか？",
			"faq.faqList.yesWeUseThe": "はい。分布を比較するために、有意水準0.05のマン・ホイットニーのU検定を使用します。また、信頼区間と効果量も報告します。",
			"faq.faq-header1.frequentlyAskedQuestions": "よくある質問",
			"faq.faq-header1.everythingYouNeedToKnow": "i18nベンチマークプロジェクトについて知っておくべきことのすべて。",
			"settings.preferencesSection.preferences": "設定",
			"settings.preferencesSection.emailNotifications": "メール通知",
			"settings.preferencesSection.receiveWeeklyBenchmarkReports": "ベンチマーク週報を受け取る",
			"settings.preferencesSection.darkMode": "ダークモード",
			"settings.preferencesSection.useDarkColorScheme": "ダークカラー体系を使用する",
			"settings.preferencesSection.defaultLanguage": "デフォルト言語",
			"settings.settingsHeader.settings": "設定",
			"settings.settingsHeader.manageYourAccountPreferences": "アカウントの設定と構成を管理します。",
			"settings.settingsFooter.cancel": "キャンセル",
			"settings.settingsFooter.saveChanges": "変更を保存",
			"settings.apiAccessSection.apiAccess": "APIアクセス",
			"settings.apiAccessSection.apiKey": "APIキー",
			"settings.apiAccessSection.useThisKeyTo": "このキーを使用して、ベンチマークAPIにプログラムでアクセスします。",
			"settings.apiAccessSection.copy": "コピー",
			"settings.profileSection.profile": "プロフィール",
			"settings.profileSection.displayName": "表示名",
			"settings.profileSection.email": "メールアドレス",
			"shared.header.home": "ホーム",
			"shared.header.methodology": "メソッド",
			"shared.header.mockPages": "テストページ",
			"shared.header.products": "製品",
			"shared.header.pricing": "料金",
			"shared.header.team": "チーム",
			"shared.header.blog": "ブログ",
			"shared.header.careers": "採用",
			"shared.header.faq": "FAQ",
			"shared.header.contact": "お問い合わせ",
			"shared.header.settings": "設定",
			"shared.header.goToGithub": "GitHubへ",
			"shared.footer.resources": "リソース",
			"shared.footer.contact": "お問い合わせ",
			"shared.footer.github": "GitHub",
			"shared.footer.methodology": "メソッド",
			"shared.footer.contributing": "貢献する",
			"shared.footer.builtWith": "i18n Benchmark — オープンソースプロジェクト。React、Vite、TanStack Routerで構築。",
			"shared.footer.anOpenSourceTestApplication": "国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実際の影響を測定するためのオープンソーステストアプリケーション。",
			"shared.mockBanner.text": "⚠️ このページにはベンチマークのみを目的とした模擬データが含まれています。実際のビジネスやサービスとは関係ありません。",
			"shared.themeToggle.themeModeAutoSystemClick": "テーマモード：自動（システム）。クリックしてライトモードに切り替え。",
			"shared.themeToggle.themeModeLightClick": "テーマモード：ライト。クリックしてダークモードに切り替え。",
			"shared.themeToggle.themeModeDarkClick": "テーマモード：ダーク。クリックして自動（システム）モードに切り替え。",
			"shared.themeToggle.themeAuto": "テーマ：自動",
			"shared.themeToggle.themeDark": "テーマ：ダーク",
			"shared.themeToggle.themeLight": "テーマ：ライト",
			"careers.openPositions.openPositions": "募集中の職種",
			"careers.openPositions.seniorPerformanceEngineer": "シニアパフォーマンスエンジニア",
			"careers.openPositions.fullTime": "正社員",
			"careers.openPositions.remote": "リモート",
			"careers.openPositions.leadBenchmarkDesignAnd": "ベンチマークの設計と実装をリード。V8の内部構造、ブラウザのパフォーマンスAPI、および統計分析に関する深い知識が必要です。",
			"careers.openPositions.technicalWriter": "テクニカルライター",
			"careers.openPositions.partTime": "パートタイム",
			"careers.openPositions.createAndMaintainDocumentation": "i18nパフォーマンスのベストプラクティスに関するドキュメント、ブログ記事、教育コンテンツを作成および維持管理します。",
			"careers.openPositions.frontendDeveloper": "フロントエンドデベロッパー",
			"careers.openPositions.buildAndMaintainThe": "ベンチマークダッシュボード、比較ツール、インタラクティブな視覚化を構築および維持管理します。",
			"careers.openPositions.devOpsEngineer": "DevOpsエンジニア",
			"careers.openPositions.designAndMaintainThe": "ライブラリの更新ごとにベンチマークを自動的に実行するCI/CDパイプラインを設計および維持管理します。",
			"careers.openPositions.applyNow": "今すぐ応募",
			"careers.careersHeader.careers": "採用",
			"careers.careersHeader.joinOurMissionToMake": "世界中のすべての人にとって、ウェブをより速く、よりアクセスしやすくするという私たちのミッションに参加してください。",
			"careers.careersBenefits.whyJoinUs": "なぜ参加するのか？",
			"careers.careersBenefits.remoteFirst": "リモートファースト",
			"careers.careersBenefits.workFromAnywhereFully": "どこからでも仕事ができます。6つのタイムゾーンにまたがる完全分散型チーム。",
			"careers.careersBenefits.openSource": "オープンソース",
			"careers.careersBenefits.allOurWorkIs": "私たちの仕事はすべてオープンソースです。影響を与えながら、公開ポートフォリオを構築してください。",
			"careers.careersBenefits.impactful": "インパクトがある",
			"careers.careersBenefits.yourWorkDirectlyHelps": "あなたの仕事は、開発者がより良く、より速い国際化アプリを構築するのを直接助けます。",
			"route.route.oopsPageNotFound": "おっと！ページが見つかりません",
			"route.route.returnToHome": "ホームに戻る",
			"route.route.couldNotMeasureHydrationDuration": "ハイドレーション時間を測定できませんでした：",
			"pricing.pricingTiers.freeTier": "無料プラン",
			"pricing.pricingTiers.free": "無料",
			"pricing.pricingTiers.publicBenchmarkDashboard": "公開ベンチマークダッシュボード",
			"pricing.pricingTiers.basicLibraryComparisons": "基本的なライブラリ比較",
			"pricing.pricingTiers.communityForumAccess": "コミュニティフォーラムへのアクセス",
			"pricing.pricingTiers.monthlyResultDigest": "月次結果ダイジェスト",
			"pricing.pricingTiers.getStarted": "始める",
			"pricing.pricingTiers.proTier": "Proプラン",
			"pricing.pricingTiers.perMonth": "/月",
			"pricing.pricingTiers.allFreeFeatures": "無料プランの全機能",
			"pricing.pricingTiers.customBenchmarkConfigurations": "カスタムベンチマーク設定",
			"pricing.pricingTiers.privateResultsDashboard": "プライベート結果ダッシュボード",
			"pricing.pricingTiers.apiAccess1000Requests": "APIアクセス（1日1,000リクエスト）",
			"pricing.pricingTiers.slackIntegration": "Slack統合",
			"pricing.pricingTiers.subscribeToPro": "Proに登録",
			"pricing.pricingTiers.enterpriseTier": "Enterpriseプラン",
			"pricing.pricingTiers.custom": "カスタム",
			"pricing.pricingTiers.allProFeatures": "Proプランの全機能",
			"pricing.pricingTiers.dedicatedBenchmarkInfrastructure": "専用ベンチマークインフラ",
			"pricing.pricingTiers.customLibraryIntegrations": "カスタムライブラリ統合",
			"pricing.pricingTiers.slaGuarantees": "SLA保証",
			"pricing.pricingTiers.prioritySupport": "優先サポート",
			"pricing.pricingTiers.contactSales": "営業に問い合わせる",
			"pricing.pricingHeader.pricing": "料金",
			"pricing.pricingHeader.transparentPricingForEvery": "i18nジャーニーのあらゆる段階に対応する、透明性の高い料金体系。",
			"products.productsGrid.benchmarkDashboard": "ベンチマークダッシュボード",
			"products.productsGrid.interactiveChartsAndTables": "バンドルサイズ、レンダリング時間、ハイドレーションコストにわたってi18nライブラリを比較するインタラクティブなチャートと表。",
			"products.productsGrid.bundleAnalyzer": "バンドルアナライザー",
			"products.productsGrid.uploadYourBuildOutput": "ビルド出力をアップロードして、バンドルのうちどの程度がi18nのオーバーヘッドであるかの詳細な内訳を取得します。",
			"products.productsGrid.migrationAssistant": "移行アシスタント",
			"products.productsGrid.automatedCodemodsAndGuides": "最小限の中断でi18nライブラリ間を移行するための自動コードモッドとガイド。",
			"products.productsGrid.performanceMonitor": "パフォーマンスモニター",
			"products.productsGrid.continuousPerformanceTrackingFor": "i18n実装の継続的なパフォーマンス追跡。翻訳の読み込みが低下したときにアラートを受け取ります。",
			"products.productsGrid.learnMore": "詳細はこちら",
			"products.productsHeader.products": "製品",
			"products.productsHeader.toolsAndServicesTo": "国際化戦略の最適化に役立つツールとサービス。",
			"contact.contactForm.name": "お名前",
			"contact.contactForm.email": "メールアドレス",
			"contact.contactForm.subject": "件名",
			"contact.contactForm.message": "メッセージ",
			"contact.contactForm.sendMessage": "メッセージを送信",
			"contact.contactForm.wellGetBackTo": "48時間以内に返信いたします。",
			"contact.contactHeader.contactUs": "お問い合わせ",
			"contact.contactHeader.haveQuestionsOrWantTo": "質問がある、または貢献したいですか？ぜひご連絡ください。",
			"about.aboutHeader.methodology": "メソッド",
			"about.aboutHeader.weDesignedThisBenchmarkTo": "私たちは、i18nライブラリを公平、再現可能、そして有意義に比較できるようにこのベンチマークを設計しました。",
			"about.whatWeMeasure.bundleSizeImpact": "バンドルサイズへの影響",
			"about.whatWeMeasure.theAdditionalJavascriptBytesSent": "i18nライブラリとその翻訳ファイルが含まれているときにユーザーに送信される追加のJavaScriptバイト。これは、低速なネットワークでのダウンロード時間に直接影響します。",
			"about.whatWeMeasure.renderingOverhead": "レンダリングのオーバーヘッド",
			"about.whatWeMeasure.howMuchExtraTimeThe": "ライブラリがReactのレンダリングサイクルに追加する余分な時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。",
			"about.whatWeMeasure.hydrationCost": "ハイドレーションのコスト",
			"about.whatWeMeasure.duringSsrTranslationDataIs": "SSR中、翻訳データはHTMLにシリアル化されます。大きな辞書はHTMLペイロードを増加させ、ハイドレーション（ページがインタラクティブになる瞬間）を遅らせます。",
			"about.whatWeMeasure.lazyLoadingEffectiveness": "遅延読み込みの有効性",
			"about.whatWeMeasure.whetherSplittingTranslationsByRoute": "ルートまたは名前空間ごとに翻訳を分割することで、初期負荷が実際に軽減されるか、またどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）が生じるかがわかります。",
			"about.whatWeMeasure.localeSwitchSpeed": "ロケール切り替え速度",
			"about.whatWeMeasure.howFastTheAppCan": "実行時にアプリが1つの言語から別の言語にどれだけ速く切り替えられるか（新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新を含む）。",
			"about.whatWeMeasure.whatWeMeasure": "測定するもの",
			"about.aboutGrid.testEnvironment": "テスト環境",
			"about.aboutGrid.allBenchmarksRunOn": "すべてのベンチマークは、同じハードウェア（M2 MacBook Pro、16 GB RAM）、同じブラウザ（Playwright経由のChromium 120）、および同じネットワーク条件（シミュレートされた4G）で実行されます。各テストは50回繰り返され、P95/P99パーセンタイルの中央値を報告します。",
			"about.aboutGrid.applicationDesign": "アプリケーション設計",
			"about.aboutGrid.theBenchmarkAppHas10": "ベンチマークアプリには、ナビゲーション、フォーム、動的リスト、静的テキストなど、現実的なコンテンツを含む10ページがあります。各ページは、実際の使用パターンを表すために15〜30個の翻訳キーを使用しています。",
			"about.aboutGrid.measurementMethodology": "測定メソッド",
			"about.aboutGrid.weUseBrowserNativeApis": "Performance Timeline、Resource Timing、Layout InstabilityなどのブラウザネイティブAPIと、React Profilerデータを組み合わせて使用します。バンドルサイズは、正確を期すためにsource-map-explorerを使用してgzip後に測定されます。",
			"about.aboutGrid.fairComparison": "公平な比較",
			"about.aboutGrid.eachI18nLibraryIsIntegrated": "各i18nライブラリは、公式ドキュメントとベストプラクティスに従って統合されています。最適な構成を確保するために、可能な場合はメンテナに相談しています。同じReactアプリ、同じVite設定、同じデプロイメント。",
			"home.understandingImpact.understandingTheImpact": "影響を理解する",
			"home.understandingImpact.whyASingleLargeJson": "なぜ1つの大きなJSONがパフォーマンスを低下させるのか",
			"home.understandingImpact.manyI18nLibrariesStoreTranslations": "多くのi18nライブラリは、Reactコンテキストを介して提供される1つのJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい（数千のキーがある）場合、翻訳を使用するすべてのコンポーネントが辞書全体への参照を保持します。これは以下のことを意味します：",
			"home.understandingImpact.theJsonMustBeParsed": "JSONはページ読み込みのたびに解析される必要があり、メインスレッドをブロックします。",
			"home.understandingImpact.contextBasedArchitecturesCanCause": "コンテキストベースのアーキテクチャでは、ロケールが変更されたときにカスケード的な再レンダリングが発生する可能性があります。これは、特定のキーが変更されていなくても、すべてのコンシューマーに通知されるためです。",
			"home.understandingImpact.duringServerSideRenderingThe": "サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。",
			"home.understandingImpact.theTradeOffsOfDynamic": "動的読み込みのトレードオフ",
			"home.understandingImpact.splittingTranslationsIntoPerRoute": "ルートごとまたは名前空間ごとのチャンクに翻訳を分割すると、初期ペイロードを劇的に削減できます。しかし、新たな課題も生じます：",
			"home.understandingImpact.waterfallRequests": "ウォーターフォールリクエスト：",
			"home.understandingImpact.flashOfUntranslatedContentFouc": "未翻訳コンテンツのフラッシュ（FOUC）：",
			"home.understandingImpact.cacheInvalidation": "キャッシュの無効化：",
			"home.understandingImpact.whatThisBenchmarkMeasures": "このベンチマークが測定するもの",
			"home.understandingImpact.thisTestAppProvidesA": "このテストアプリは、10ページの現実的なコンテンツを含む制御された環境を提供し、3つの軸でi18nライブラリを比較します：JavaScriptバンドルに追加される重量、翻訳されたコンテンツの解析とレンダリングに費やされる時間、そしてコード分割と遅延読み込み戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。",
			"home.whyItMatters.whyTheseMetricsMatter": "なぜこれらの指標が重要なのか",
			"home.whyItMatters.bundleSize": "バンドルサイズ",
			"home.whyItMatters.theBundleIsTheData": "バンドルは世界中のすべてのユーザーに送信されるデータです。バンドルが大きいほど、ダウンロード時間が長くなります。特に多くの地域で一般的な低速な3G接続では顕著です。i18nライブラリはその重量において、数キロバイトから数十キロバイトのランタイムコード、さらに翻訳ファイル自体まで大きく異なります。",
			"home.whyItMatters.renderingHydration": "レンダリングとハイドレーション",
			"home.whyItMatters.connectingALargeJson": "大きなJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体で再レンダリングを引き起こす可能性があります。SSRのハイドレーション中、巨大な翻訳オブジェクトの解析とアタッチは、ページがインタラクティブになるまでの遅延を追加し、Time to Interactive（TTI）に直接影響します。",
			"home.whyItMatters.dynamicLoading": "動的読み込み",
			"home.whyItMatters.loadingAllTranslationsUpfront": "すべての翻訳を事前に読み込むと、初期ペイロードが過負荷になります。動的（遅延）読み込みは、ルートまたは名前空間ごとに翻訳を分割し、現在のページが必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、未翻訳コンテンツのフラッシュ、キャッシュの複雑さといった独自のトレードオフが伴います。両方の戦略を測定することが不可欠です。",
			"home.resultsTable.sampleResults": "サンプル結果",
			"home.resultsTable.bundleSize": "バンドルサイズ",
			"home.resultsTable.lookupTime": "検索時間",
			"home.resultsTable.lazyLoading": "遅延読み込み",
			"home.hero.aTestApplicationDesignedTo": "国際化ライブラリがバンドルサイズ、読み込みパフォーマンス、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーション。",
			"home.hero.viewResults": "結果を表示",
			"team.teamGrid.sarahChen": "Sarah Chen",
			"team.teamGrid.founderLeadEngineer": "創設者兼リードエンジニア",
			"team.teamGrid.formerGoogleEngineerWith10": "以前はGoogleのエンジニアで、大規模な国際化システムの構築に10年の経験があります。",
			"team.teamGrid.marcusWeber": "Marcus Weber",
			"team.teamGrid.performanceEngineer": "パフォーマンスエンジニア",
			"team.teamGrid.specializesInJavascriptPerformanceOptimization": "JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。以前はVercelに在籍。",
			"team.teamGrid.aishaPatel": "Aisha Patel",
			"team.teamGrid.developerAdvocate": "デベロッパーアドボケイト",
			"team.teamGrid.passionateAboutDeveloperExperienceAnd": "開発者体験と教育に情熱を注いでいます。React Conf、JSConf、およびi18nNextのスピーカー。",
			"team.teamGrid.tomasRodriguez": "Tomás Rodríguez",
			"team.teamGrid.fullStackDeveloper": "フルスタックデベロッパー",
			"team.teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "ベンチマークインフラストラクチャとCI/CDパイプラインを維持。Linguiのオープンソースコントリビューター。",
			"team.teamGrid.yukiTanaka": "Yuki Tanaka",
			"team.teamGrid.dataAnalyst": "データアナリスト",
			"team.teamGrid.ensuresStatisticalRigorInAll": "すべてのベンチマーク結果において統計的な厳密さを確保。MITで応用統計学の博士号を取得。",
			"team.teamGrid.elenaKowalski": "Elena Kowalski",
			"team.teamGrid.communityManager": "コミュニティマネージャー",
			"team.teamGrid.managesCommunityContributionsPartnershipsAnd": "コミュニティの貢献、パートナーシップ、およびイベントを管理。オープンソースガバナンスの経歴を持つ。",
			"team.teamHeader.ourTeam": "私たちのチーム",
			"team.teamHeader.meetThePeopleBehindI18n": "i18nベンチマークの裏側にいる人々に会いましょう。優れた開発者ツールへの共通の情熱によって結ばれた多様なチームです。",
			"blog.blogList.i18nBenchmark2026Results": "i18nベンチマーク2026の結果",
			"blog.blogList.march152026": "2026年3月15日",
			"blog.blogList.weTested12DifferentInternationalization": "10ページにわたって12種類の国際化ライブラリをテストしました。インタラクティブなチャートを含む詳細な結果はこちらです。",
			"blog.blogList.howToReduceYourI18n": "i18nバンドルを60%削減する方法",
			"blog.blogList.march82026": "2026年3月8日",
			"blog.blogList.practicalStrategiesForOptimizingTranslation": "翻訳ファイルの読み込みの最適化、未使用ロケールのツリーシェイキング、ビルド時のコンパイルの活用など、実践的な戦略。",
			"blog.blogList.theStateOfInternationalizationIn": "2026年における国際化の現状",
			"blog.blogList.february282026": "2026年2月28日",
			"blog.blogList.anOverviewOfTheCurrent": "メッセージカタログからコンパイラベースのソリューションまで、現在のアプローチを比較したi18nエコシステムの概要。",
			"blog.blogList.migratingFromReactI18nextTo": "react-i18nextからLinguiへの移行",
			"blog.blogList.february152026": "2026年2月15日",
			"blog.blogList.aStepByStepGuide": "5万個の翻訳キーを持つプロダクションアプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。",
			"blog.blogList.serverComponentsAndI18nWhat": "Server Componentsとi18n：何が変わるのか？",
			"blog.blogList.february12026": "2026年2月1日",
			"blog.blogList.reactServerComponentsIntroduceNew": "React Server Componentsは国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。",
			"blog.blogList.benchmarkMethodologyHowWeTest": "ベンチマーク手法：どのようにテストするか",
			"blog.blogList.january202026": "2026年1月20日",
			"blog.blogList.aTransparentLookAtOur": "テスト環境、統計手法、再現性を含む、私たちのベンチマーク手法の透明な公開。",
			"blog.blogList.readMore": "続きを読む →",
			"blog.blogHeader.blog": "ブログ",
			"blog.blogHeader.insightsDeepDivesAnd": "i18nベンチマークコミュニティからの洞察、詳細な分析、および最新情報。"
		} },
		ko: { translation: {
			"faq.faqList.howAreTheBenchmarks": "벤치마크는 어떻게 실행되나요?",
			"faq.faqList.allBenchmarksAreRun": "모든 벤치마크는 일관된 하드웨어 설정(M2 MacBook Pro)에서 시뮬레이션된 4G 네트워크 조건으로 Playwright를 사용하여 실행됩니다. 각 테스트는 50번 반복되며 중앙값, P95 및 P99 값을 보고합니다.",
			"faq.faqList.whatLibrariesAreCurrently": "현재 어떤 라이브러리가 테스트되고 있나요?",
			"faq.faqList.weCurrentlyBenchmarkReactI18next": "현재 react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl 및 Paraglide를 벤치마킹하고 있습니다. 커뮤니티의 요청에 따라 더 많은 라이브러리를 추가할 계획입니다.",
			"faq.faqList.canIContributeA": "새로운 라이브러리 통합을 제안할 수 있나요?",
			"faq.faqList.absolutelyWeWelcomeCommunity": "물론입니다! 커뮤니티의 기여를 환영합니다. 저장소를 포크하고 템플릿에 따라 라이브러리 통합을 추가한 후 풀 리퀘스트를 제출하세요.",
			"faq.faqList.howOftenAreResults": "결과는 얼마나 자주 업데이트되나요?",
			"faq.faqList.benchmarksRunAutomaticallyVia": "벤치마크는 모든 종속성 업데이트 시 CI를 통해 자동으로 실행되며 메인 브랜치에서 매주 실행됩니다. 결과는 24시간 이내에 대시보드에 게시됩니다.",
			"faq.faqList.areTheResultsStatistically": "결과가 통계적으로 유의미한가요?",
			"faq.faqList.yesWeUseThe": "네. 0.05 유의 수준에서 Mann-Whitney U 검정을 사용하여 분포를 비교합니다. 또한 신뢰 구간과 효과 크기를 보고합니다.",
			"faq.faq-header1.frequentlyAskedQuestions": "자주 묻는 질문",
			"faq.faq-header1.everythingYouNeedToKnow": "i18n Benchmark 프로젝트에 대해 알아야 할 모든 것.",
			"settings.preferencesSection.preferences": "기본 설정",
			"settings.preferencesSection.emailNotifications": "이메일 알림",
			"settings.preferencesSection.receiveWeeklyBenchmarkReports": "주간 벤치마크 보고서 받기",
			"settings.preferencesSection.darkMode": "다크 모드",
			"settings.preferencesSection.useDarkColorScheme": "어두운 색상 체계 사용",
			"settings.preferencesSection.defaultLanguage": "기본 언어",
			"settings.settingsHeader.settings": "설정",
			"settings.settingsHeader.manageYourAccountPreferences": "계정 기본 설정 및 구성을 관리합니다.",
			"settings.settingsFooter.cancel": "취소",
			"settings.settingsFooter.saveChanges": "변경 사항 저장",
			"settings.apiAccessSection.apiAccess": "API 액세스",
			"settings.apiAccessSection.apiKey": "API 키",
			"settings.apiAccessSection.useThisKeyTo": "이 키를 사용하여 프로그래밍 방식으로 벤치마킹 API에 액세스하십시오.",
			"settings.apiAccessSection.copy": "복사",
			"settings.profileSection.profile": "프로필",
			"settings.profileSection.displayName": "표시 이름",
			"settings.profileSection.email": "이메일",
			"shared.header.home": "홈",
			"shared.header.methodology": "방법론",
			"shared.header.mockPages": "테스트 페이지",
			"shared.header.products": "제품",
			"shared.header.pricing": "가격",
			"shared.header.team": "팀",
			"shared.header.blog": "블로그",
			"shared.header.careers": "채용",
			"shared.header.faq": "FAQ",
			"shared.header.contact": "문의하기",
			"shared.header.settings": "설정",
			"shared.header.goToGithub": "GitHub로 이동",
			"shared.footer.resources": "리소스",
			"shared.footer.contact": "문의",
			"shared.footer.github": "GitHub",
			"shared.footer.methodology": "방법론",
			"shared.footer.contributing": "기여하기",
			"shared.footer.builtWith": "i18n Benchmark — 오픈 소스 프로젝트. React, Vite 및 TanStack Router로 구축되었습니다.",
			"shared.footer.anOpenSourceTestApplication": "국제화 라이브러리가 번들 크기, 로드 시간 및 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.",
			"shared.mockBanner.text": "⚠️ 이 페이지는 벤치마킹 목적으로만 사용되는 모의 데이터를 포함하고 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.",
			"shared.themeToggle.themeModeAutoSystemClick": "테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환하십시오.",
			"shared.themeToggle.themeModeLightClick": "테마 모드: 라이트. 클릭하여 다크 모드로 전환하십시오.",
			"shared.themeToggle.themeModeDarkClick": "테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환하십시오.",
			"shared.themeToggle.themeAuto": "테마: 자동",
			"shared.themeToggle.themeDark": "테마: 다크",
			"shared.themeToggle.themeLight": "테마: 라이트",
			"careers.openPositions.openPositions": "채용 중인 직책",
			"careers.openPositions.seniorPerformanceEngineer": "시니어 성능 엔지니어",
			"careers.openPositions.fullTime": "정규직",
			"careers.openPositions.remote": "원격",
			"careers.openPositions.leadBenchmarkDesignAnd": "벤치마크 설계 및 구현을 주도합니다. V8 내부 구조, 브라우저 성능 API 및 통계 분석에 대한 깊은 지식이 필요합니다.",
			"careers.openPositions.technicalWriter": "테크니컬 라이터",
			"careers.openPositions.partTime": "파트타임",
			"careers.openPositions.createAndMaintainDocumentation": "i18n 성능 베스트 프랙티스에 관한 문서, 블로그 게시물 및 교육 콘텐츠를 작성하고 유지 관리합니다.",
			"careers.openPositions.frontendDeveloper": "프론트엔드 개발자",
			"careers.openPositions.buildAndMaintainThe": "벤치마크 대시보드, 비교 도구 및 대화형 시각화를 구축하고 유지 관리합니다.",
			"careers.openPositions.devOpsEngineer": "DevOps 엔지니어",
			"careers.openPositions.designAndMaintainThe": "라이브러리가 업데이트될 때마다 벤치마크를 자동으로 실행하는 CI/CD 파이프라인을 설계하고 유지 관리합니다.",
			"careers.openPositions.applyNow": "지금 지원하기",
			"careers.careersHeader.careers": "채용",
			"careers.careersHeader.joinOurMissionToMake": "전 세계 모든 사람을 위해 웹을 더 빠르고 접근하기 쉽게 만들려는 우리의 미션에 동참하세요.",
			"careers.careersBenefits.whyJoinUs": "왜 합류해야 하나요?",
			"careers.careersBenefits.remoteFirst": "리모트 퍼스트",
			"careers.careersBenefits.workFromAnywhereFully": "어디서나 일하세요. 6개 시간대에 걸쳐 있는 완전 분산형 팀입니다.",
			"careers.careersBenefits.openSource": "오픈 소스",
			"careers.careersBenefits.allOurWorkIs": "우리의 모든 작업은 오픈 소스입니다. 영향력을 미치는 동시에 공개 포트폴리오를 만드세요.",
			"careers.careersBenefits.impactful": "영향력 있는",
			"careers.careersBenefits.yourWorkDirectlyHelps": "여러분의 작업은 개발자가 더 나은, 더 빠른 국제화 앱을 구축하는 데 직접적인 도움이 됩니다.",
			"route.route.oopsPageNotFound": "앗! 페이지를 찾을 수 없습니다",
			"route.route.returnToHome": "홈으로 돌아가기",
			"route.route.couldNotMeasureHydrationDuration": "하이드레이션 시간을 측정할 수 없습니다:",
			"pricing.pricingTiers.freeTier": "무료 티어",
			"pricing.pricingTiers.free": "무료",
			"pricing.pricingTiers.publicBenchmarkDashboard": "공개 벤치마크 대시보드",
			"pricing.pricingTiers.basicLibraryComparisons": "기본 라이브러리 비교",
			"pricing.pricingTiers.communityForumAccess": "커뮤니티 포럼 액세스",
			"pricing.pricingTiers.monthlyResultDigest": "월간 결과 요약",
			"pricing.pricingTiers.getStarted": "시작하기",
			"pricing.pricingTiers.proTier": "프로 티어",
			"pricing.pricingTiers.perMonth": "/월",
			"pricing.pricingTiers.allFreeFeatures": "모든 무료 기능 포함",
			"pricing.pricingTiers.customBenchmarkConfigurations": "맞춤형 벤치마크 구성",
			"pricing.pricingTiers.privateResultsDashboard": "비공개 결과 대시보드",
			"pricing.pricingTiers.apiAccess1000Requests": "API 액세스(일일 1,000건)",
			"pricing.pricingTiers.slackIntegration": "Slack 연동",
			"pricing.pricingTiers.subscribeToPro": "프로 구독",
			"pricing.pricingTiers.enterpriseTier": "엔터프라이즈 티어",
			"pricing.pricingTiers.custom": "커스텀",
			"pricing.pricingTiers.allProFeatures": "모든 프로 기능 포함",
			"pricing.pricingTiers.dedicatedBenchmarkInfrastructure": "전용 벤치마크 인프라",
			"pricing.pricingTiers.customLibraryIntegrations": "맞춤형 라이브러리 통합",
			"pricing.pricingTiers.slaGuarantees": "SLA 보장",
			"pricing.pricingTiers.prioritySupport": "우선 지원",
			"pricing.pricingTiers.contactSales": "영업팀 문의",
			"pricing.pricingHeader.pricing": "가격",
			"pricing.pricingHeader.transparentPricingForEvery": "i18n 여정의 모든 단계에 적합한 투명한 요금제.",
			"products.productsGrid.benchmarkDashboard": "벤치마크 대시보드",
			"products.productsGrid.interactiveChartsAndTables": "번들 크기, 렌더링 시간, 하이드레이션 비용에 따라 i18n 라이브러리를 비교하는 대화형 차트와 표.",
			"products.productsGrid.bundleAnalyzer": "번들 분석기",
			"products.productsGrid.uploadYourBuildOutput": "빌드 결과물을 업로드하고 번들 중 i18n 오버헤드가 얼마나 되는지 자세한 분석을 받아보세요.",
			"products.productsGrid.migrationAssistant": "마이그레이션 도우미",
			"products.productsGrid.automatedCodemodsAndGuides": "최소한의 중단으로 i18n 라이브러리 간의 마이그레이션을 돕는 자동 코드 수정 도구와 가이드.",
			"products.productsGrid.performanceMonitor": "성능 모니터",
			"products.productsGrid.continuousPerformanceTrackingFor": "i18n 구현의 지속적인 성능 추적. 번역 로딩 속도가 느려지면 알림을 받으세요.",
			"products.productsGrid.learnMore": "더 알아보기",
			"products.productsHeader.products": "제품",
			"products.productsHeader.toolsAndServicesTo": "국제화 전략을 최적화하는 데 도움이 되는 도구와 서비스.",
			"contact.contactForm.name": "이름",
			"contact.contactForm.email": "이메일",
			"contact.contactForm.subject": "제목",
			"contact.contactForm.message": "메시지",
			"contact.contactForm.sendMessage": "메시지 보내기",
			"contact.contactForm.wellGetBackTo": "48시간 이내에 답변해 드리겠습니다.",
			"contact.contactHeader.contactUs": "문의처",
			"contact.contactHeader.haveQuestionsOrWantTo": "궁금한 점이 있거나 기여하고 싶으신가요? 여러분의 의견을 기다립니다.",
			"about.aboutHeader.methodology": "방법론",
			"about.aboutHeader.weDesignedThisBenchmarkTo": "우리는 i18n 라이브러리를 공정하고, 재현 가능하며, 의미 있게 비교할 수 있도록 이 벤치마크를 설계했습니다.",
			"about.whatWeMeasure.bundleSizeImpact": "번들 크기 영향",
			"about.whatWeMeasure.theAdditionalJavascriptBytesSent": "i18n 라이브러리와 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다.",
			"about.whatWeMeasure.renderingOverhead": "렌더링 오버헤드",
			"about.whatWeMeasure.howMuchExtraTimeThe": "라이브러리가 React의 렌더링 주기에 추가하는 여분의 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 주입하는 라이브러리는 구성 요소 트리 전체에서 불필요한 다시 렌더링을 유발할 수 있습니다.",
			"about.whatWeMeasure.hydrationCost": "하이드레이션 비용",
			"about.whatWeMeasure.duringSsrTranslationDataIs": "SSR 중에 번역 데이터는 HTML로 직렬화됩니다. 대형 사전은 HTML 페이로드를 증가시키고 하이드레이션(페이지가 인터랙티브해지는 순간)을 늦춥니다.",
			"about.whatWeMeasure.lazyLoadingEffectiveness": "지연 로딩 효과",
			"about.whatWeMeasure.whetherSplittingTranslationsByRoute": "번역을 경로 또는 네임스페이스별로 분할하는 것이 실제로 초기 로드를 줄이는지, 그리고 어떤 트레이드오프(워터폴 요청, FOUC, 캐시 복잡성)가 발생하는지 측정합니다.",
			"about.whatWeMeasure.localeSwitchSpeed": "로케일 전환 속도",
			"about.whatWeMeasure.howFastTheAppCan": "실행 중에 앱이 한 언어에서 다른 언어로 얼마나 빨리 전환할 수 있는지(새 번역 가져오기, 구성 요소 다시 렌더링, DOM 업데이트 포함) 측정합니다.",
			"about.whatWeMeasure.whatWeMeasure": "측정 항목",
			"about.aboutGrid.testEnvironment": "테스트 환경",
			"about.aboutGrid.allBenchmarksRunOn": "모든 벤치마크는 동일한 하드웨어(M2 MacBook Pro, 16 GB RAM), 동일한 브라우저(Playwright를 통한 Chromium 120) 및 동일한 네트워크 조건(시뮬레이션된 4G)에서 실행됩니다. 각 테스트는 50회 반복되며, P95/P99 백분위수의 중앙값을 보고합니다.",
			"about.aboutGrid.applicationDesign": "애플리케이션 설계",
			"about.aboutGrid.theBenchmarkAppHas10": "벤치마크 앱에는 탐색, 양식, 동적 목록 및 정적 텍스트와 같은 현실적인 콘텐츠가 포함된 10개의 페이지가 있습니다. 각 페이지는 실제 사용 패턴을 나타내기 위해 15-30개의 번역 키를 사용합니다.",
			"about.aboutGrid.measurementMethodology": "측정 방법론",
			"about.aboutGrid.weUseBrowserNativeApis": "Performance Timeline, Resource Timing, Layout Instability와 같은 브라우저 기반 API와 React Profiler 데이터를 결합하여 사용합니다. 번들 크기는 정확성을 위해 source-map-explorer를 사용하여 gzip 후에 측정됩니다.",
			"about.aboutGrid.fairComparison": "공정한 비교",
			"about.aboutGrid.eachI18nLibraryIsIntegrated": "각 i18n 라이브러리는 공식 문서와 모범 사례에 따라 통합되었습니다. 최적의 구성을 보장하기 위해 가능한 경우 유지 관리자와 상담합니다. 동일한 React 앱, 동일한 Vite 설정, 동일한 배포 방식이 적용됩니다.",
			"home.understandingImpact.understandingTheImpact": "영향 이해하기",
			"home.understandingImpact.whyASingleLargeJson": "단일 대형 JSON이 성능을 저해하는 이유",
			"home.understandingImpact.manyI18nLibrariesStoreTranslations": "많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 경우(수천 개의 키), 번역을 사용하는 모든 구성 요소가 전체 사전에 대한 참조를 보유하게 됩니다. 이는 다음을 의미합니다:",
			"home.understandingImpact.theJsonMustBeParsed": "JSON은 페이지를 로드할 때마다 구문 분석되어야 하므로 메인 스레드를 차단합니다.",
			"home.understandingImpact.contextBasedArchitecturesCanCause": "로케일이 변경될 때 컨텍스트 기반 아키텍처는 연쇄적인 다시 렌더링을 유발할 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자가 알림을 받기 때문입니다.",
			"home.understandingImpact.duringServerSideRenderingThe": "서버 측 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어 다운로드 및 하이드레이션해야 하는 문서 크기가 증가합니다.",
			"home.understandingImpact.theTradeOffsOfDynamic": "동적 로딩의 트레이드오프",
			"home.understandingImpact.splittingTranslationsIntoPerRoute": "번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 획기적으로 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다:",
			"home.understandingImpact.waterfallRequests": "워터폴 요청:",
			"home.understandingImpact.flashOfUntranslatedContentFouc": "번역되지 않은 콘텐츠의 플래시 (FOUC):",
			"home.understandingImpact.cacheInvalidation": "캐시 무효화:",
			"home.understandingImpact.whatThisBenchmarkMeasures": "이 벤치마크가 측정하는 것",
			"home.understandingImpact.thisTestAppProvidesA": "이 테스트 앱은 현실적인 콘텐츠가 포함된 10개의 페이지로 구성된 제어된 환경을 제공하여 세 가지 측면에서 i18n 라이브러리를 비교합니다: JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 구문 분석하고 렌더링하는 데 소요되는 시간, 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접적으로 비교 가능합니다.",
			"home.whyItMatters.whyTheseMetricsMatter": "이 지표들이 중요한 이유",
			"home.whyItMatters.bundleSize": "번들 크기",
			"home.whyItMatters.theBundleIsTheData": "번들은 전 세계 모든 사용자에게 전송되는 데이터입니다. 번들이 클수록 다운로드 시간이 길어집니다. 특히 많은 지역에서 흔히 사용되는 느린 3G 연결에서 더욱 그렇습니다. i18n 라이브러리는 수 킬로바이트에서 수십 킬로바이트의 런타임 코드와 번역 파일 자체에 이르기까지 그 무게가 매우 다양합니다.",
			"home.whyItMatters.renderingHydration": "렌더링 및 하이드레이션",
			"home.whyItMatters.connectingALargeJson": "모든 구성 요소에 대형 JSON 사전을 연결하면 숨겨진 종속성이 생성됩니다. 번역 컨텍스트가 변경되면 트리 전체에서 다시 렌더링이 발생할 수 있습니다. SSR 하이드레이션 중에 방대한 번역 개체를 구문 분석하고 첨부하면 페이지가 인터랙티브해지기 전까지 지연이 추가되어 TTI(Time to Interactive)에 직접적인 영향을 미칩니다.",
			"home.whyItMatters.dynamicLoading": "동적 로딩",
			"home.whyItMatters.loadingAllTranslationsUpfront": "모든 번역을 미리 로드하면 초기 페이로드가 과부하됩니다. 동적(지연) 로딩은 경로 또는 네임스페이스별로 번역을 분할하여 현재 페이지에 필요한 것만 전송합니다. 그러나 지연 로딩은 워터포럴 요청, 번역되지 않은 콘텐츠의 플래시, 캐싱 복잡성 등의 자체적인 트레이드오프가 있습니다. 두 전략을 모두 측정하는 것이 필수적입니다.",
			"home.resultsTable.sampleResults": "샘플 결과",
			"home.resultsTable.bundleSize": "번들 크기",
			"home.resultsTable.lookupTime": "조회 시간",
			"home.resultsTable.lazyLoading": "지연 로딩",
			"home.hero.aTestApplicationDesignedTo": "국제화 라이브러리가 번들 크기, 로드 성능 및 렌더링 반응성에 미치는 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.",
			"home.hero.viewResults": "결과 보기",
			"team.teamGrid.sarahChen": "Sarah Chen",
			"team.teamGrid.founderLeadEngineer": "창립자 및 리드 엔지니어",
			"team.teamGrid.formerGoogleEngineerWith10": "전 Google 엔지니어로 대규모 국제화 시스템 구축에 10년의 경험이 있습니다.",
			"team.teamGrid.marcusWeber": "Marcus Weber",
			"team.teamGrid.performanceEngineer": "성능 엔지니어",
			"team.teamGrid.specializesInJavascriptPerformanceOptimization": "JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전 Vercel 근무.",
			"team.teamGrid.aishaPatel": "Aisha Patel",
			"team.teamGrid.developerAdvocate": "개발자 에반젤리스트",
			"team.teamGrid.passionateAboutDeveloperExperienceAnd": "개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext 강연자.",
			"team.teamGrid.tomasRodriguez": "Tomás Rodríguez",
			"team.teamGrid.fullStackDeveloper": "풀스택 개발자",
			"team.teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "벤치마킹 인프라 및 CI/CD 파이프라인 유지 관리. Lingui 오픈 소스 기여자.",
			"team.teamGrid.yukiTanaka": "Yuki Tanaka",
			"team.teamGrid.dataAnalyst": "데이터 분석가",
			"team.teamGrid.ensuresStatisticalRigorInAll": "모든 벤치마크 결과의 통계적 엄격함을 보장합니다. MIT 응용통계학 박사.",
			"team.teamGrid.elenaKowalski": "Elena Kowalski",
			"team.teamGrid.communityManager": "커뮤니티 매니저",
			"team.teamGrid.managesCommunityContributionsPartnershipsAnd": "커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 배경 보유。",
			"team.teamHeader.ourTeam": "우리 팀",
			"team.teamHeader.meetThePeopleBehindI18n": "i18n Benchmark를 만드는 사람들을 만나보세요. 훌륭한 개발자 도구에 대한 열정으로 뭉친 다양한 팀입니다.",
			"blog.blogList.i18nBenchmark2026Results": "i18n 벤치마크 2026 결과",
			"blog.blogList.march152026": "2026년 3월 15일",
			"blog.blogList.weTested12DifferentInternationalization": "우리는 10개 페이지에 걸쳐 12가지 서로 다른 국제화 라이브러리를 테스트했습니다. 대화형 차트가 포함된 자세한 결과는 다음과 같습니다.",
			"blog.blogList.howToReduceYourI18n": "i18n 번들을 60% 줄이는 방법",
			"blog.blogList.march82026": "2026년 3월 8일",
			"blog.blogList.practicalStrategiesForOptimizingTranslation": "번역 파일 로딩 최적화, 사용하지 않는 로케일의 트리 쉐이킹, 빌드 타임 컴파일 활용을 포함한 번역 번들 최적화를 위한 실질적인 전략.",
			"blog.blogList.theStateOfInternationalizationIn": "2026년 React 국제화의 현주소",
			"blog.blogList.february282026": "2026년 2월 28일",
			"blog.blogList.anOverviewOfTheCurrent": "메시지 카탈로그에서 컴파일러 기반 솔루션에 이르기까지 현재의 접근 방식을 비교한 i18n 생태계 개요.",
			"blog.blogList.migratingFromReactI18nextTo": "react-i18next에서 Lingui로 마이그레이션",
			"blog.blogList.february152026": "2026년 2월 15일",
			"blog.blogList.aStepByStepGuide": "50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하기 위한 단계별 가이드.",
			"blog.blogList.serverComponentsAndI18nWhat": "서버 컴포넌트와 i18n: 무엇이 변하는가?",
			"blog.blogList.february12026": "2026年 2월 1일",
			"blog.blogList.reactServerComponentsIntroduceNew": "React 서버 구성 요소는 국제화를 위한 새로운 패턴을 도입합니다. 그 영향과 모범 사례를 살펴봅니다.",
			"blog.blogList.benchmarkMethodologyHowWeTest": "벤치마크 방법론: 테스트 방법",
			"blog.blogList.january202026": "2026년 1월 20일",
			"blog.blogList.aTransparentLookAtOur": "테스트 환경, 통계적 방법 및 재현성을 포함한 벤치마크 방법론에 대한 투명한 공개.",
			"blog.blogList.readMore": "더 읽어보기 →",
			"blog.blogHeader.blog": "블로그",
			"blog.blogHeader.insightsDeepDivesAnd": "i18n 벤치마킹 커뮤니티의 통찰력, 심층 분석 및 업데이트."
		} },
		pt: { translation: {
			"faq.faqList.howAreTheBenchmarks": "Como os benchmarks são executados?",
			"faq.faqList.allBenchmarksAreRun": "Todos os benchmarks são executados usando o Playwright em uma configuração de hardware consistente (M2 MacBook Pro) com condições de rede 4G simuladas. Cada teste executa 50 iterações e relatamos a mediana, e os valores P95 e P99.",
			"faq.faqList.whatLibrariesAreCurrently": "Quais bibliotecas são testadas atualmente?",
			"faq.faqList.weCurrentlyBenchmarkReactI18next": "Atualmente testamos react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl e Paraglide. Planejamos adicionar mais com base nas solicitações da comunidade.",
			"faq.faqList.canIContributeA": "Posso contribuir com uma nova integração de biblioteca?",
			"faq.faqList.absolutelyWeWelcomeCommunity": "Com certeza! Aceitamos contribuições da comunidade. Faça um fork do repositório, adicione a integração da sua biblioteca seguindo o nosso modelo e envie um pull request.",
			"faq.faqList.howOftenAreResults": "Com que frequência os resultados são atualizados?",
			"faq.faqList.benchmarksRunAutomaticallyVia": "Os benchmarks são executados automaticamente via CI a cada atualização de dependência e semanalmente no branch main. Os resultados são publicados no dashboard em até 24 horas.",
			"faq.faqList.areTheResultsStatistically": "Os resultados são estatisticamente significativos?",
			"faq.faqList.yesWeUseThe": "Sim. Usamos o teste U de Mann-Whitney com um nível de significância de 0,05 para comparar distribuições. Também relatamos intervalos de confiança e tamanhos de efeito.",
			"faq.faq-header1.frequentlyAskedQuestions": "Perguntas Frequentes",
			"faq.faq-header1.everythingYouNeedToKnow": "Tudo o que você precisa saber sobre o projeto i18n Benchmark.",
			"settings.preferencesSection.preferences": "Preferências",
			"settings.preferencesSection.emailNotifications": "Notificações por e-mail",
			"settings.preferencesSection.receiveWeeklyBenchmarkReports": "Receber relatórios semanais de benchmarks",
			"settings.preferencesSection.darkMode": "Modo Escuro",
			"settings.preferencesSection.useDarkColorScheme": "Usar esquema de cores escuras",
			"settings.preferencesSection.defaultLanguage": "Idioma Padrão",
			"settings.settingsHeader.settings": "Configurações",
			"settings.settingsHeader.manageYourAccountPreferences": "Gerencie as suas preferências e configuração da conta.",
			"settings.settingsFooter.cancel": "Cancelar",
			"settings.settingsFooter.saveChanges": "Guardar alterações",
			"settings.apiAccessSection.apiAccess": "Acesso à API",
			"settings.apiAccessSection.apiKey": "Chave da API",
			"settings.apiAccessSection.useThisKeyTo": "Utilize esta chave para aceder à API de benchmarking de forma programática.",
			"settings.apiAccessSection.copy": "Copiar",
			"settings.profileSection.profile": "Perfil",
			"settings.profileSection.displayName": "Nome de exibição",
			"settings.profileSection.email": "E-Mail",
			"shared.header.home": "Início",
			"shared.header.methodology": "Metodologia",
			"shared.header.mockPages": "Páginas de teste",
			"shared.header.products": "Produtos",
			"shared.header.pricing": "Preços",
			"shared.header.team": "Equipe",
			"shared.header.blog": "Blog",
			"shared.header.careers": "Carreiras",
			"shared.header.faq": "FAQ",
			"shared.header.contact": "Contato",
			"shared.header.settings": "Configurações",
			"shared.header.goToGithub": "Ir para GitHub",
			"shared.footer.resources": "Recursos",
			"shared.footer.contact": "Contato",
			"shared.footer.github": "GitHub",
			"shared.footer.methodology": "Metodologia",
			"shared.footer.contributing": "Contribuir",
			"shared.footer.builtWith": "i18n Benchmark — Projeto de código aberto. Construído com React, Vite e TanStack Router.",
			"shared.footer.anOpenSourceTestApplication": "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo.",
			"shared.mockBanner.text": "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada com qualquer negócio ou serviço real.",
			"shared.themeToggle.themeModeAutoSystemClick": "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
			"shared.themeToggle.themeModeLightClick": "Modo de tema: claro. Clique para mudar para o modo escuro.",
			"shared.themeToggle.themeModeDarkClick": "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).",
			"shared.themeToggle.themeAuto": "Tema: Auto",
			"shared.themeToggle.themeDark": "Tema: Escuro",
			"shared.themeToggle.themeLight": "Tema: Claro",
			"careers.openPositions.openPositions": "Vagas abertas",
			"careers.openPositions.seniorPerformanceEngineer": "Engenheiro de Performance Sênior",
			"careers.openPositions.fullTime": "Tempo integral",
			"careers.openPositions.remote": "Remoto",
			"careers.openPositions.leadBenchmarkDesignAnd": "Liderar o design e a implementação de benchmarks. É necessário conhecimento profundo dos componentes internos da V8, das APIs de desempenho do navegador e de análise estatística.",
			"careers.openPositions.technicalWriter": "Redator Técnico",
			"careers.openPositions.partTime": "Meio período",
			"careers.openPositions.createAndMaintainDocumentation": "Criar e manter documentação, postagens em blogs e conteúdo educacional sobre as melhores práticas de desempenho de i18n.",
			"careers.openPositions.frontendDeveloper": "Desenvolvedor Frontend",
			"careers.openPositions.buildAndMaintainThe": "Construir e manter o dashboard de benchmark, ferramentas de comparação e visualizações interativas.",
			"careers.openPositions.devOpsEngineer": "Engenheiro DevOps",
			"careers.openPositions.designAndMaintainThe": "Projetar e manter o pipeline de CI/CD que executa benchmarks automaticamente a cada atualização de biblioteca.",
			"careers.openPositions.applyNow": "Candidatar-se agora",
			"careers.careersHeader.careers": "Carreiras",
			"careers.careersHeader.joinOurMissionToMake": "Junte-se à nossa missão de tornar a web mais rápida e acessível para todos, em todos os lugares.",
			"careers.careersBenefits.whyJoinUs": "Por que se juntar a nós?",
			"careers.careersBenefits.remoteFirst": "Remoto primeiro",
			"careers.careersBenefits.workFromAnywhereFully": "Trabalhe de qualquer lugar. Equipe totalmente distribuída em 6 fusos horários.",
			"careers.careersBenefits.openSource": "Open Source",
			"careers.careersBenefits.allOurWorkIs": "Todo o nosso trabalho é open source. Construa seu portfólio público enquanto causa impacto.",
			"careers.careersBenefits.impactful": "Impactante",
			"careers.careersBenefits.yourWorkDirectlyHelps": "Seu trabalho ajuda diretamente os desenvolvedores a criar aplicativos internacionalizados melhores e mais rápidos.",
			"route.route.oopsPageNotFound": "Ops! Página não encontrada",
			"route.route.returnToHome": "Voltar para o Início",
			"route.route.couldNotMeasureHydrationDuration": "Não foi possível medir a duração da hidratação:",
			"pricing.pricingTiers.freeTier": "Nível Gratuito",
			"pricing.pricingTiers.free": "Grátis",
			"pricing.pricingTiers.publicBenchmarkDashboard": "Dashboard público de benchmark",
			"pricing.pricingTiers.basicLibraryComparisons": "Comparações básicas de bibliotecas",
			"pricing.pricingTiers.communityForumAccess": "Acesso ao fórum da comunidade",
			"pricing.pricingTiers.monthlyResultDigest": "Resumo mensal dos resultados",
			"pricing.pricingTiers.getStarted": "Começar",
			"pricing.pricingTiers.proTier": "Nível Pro",
			"pricing.pricingTiers.perMonth": "/mês",
			"pricing.pricingTiers.allFreeFeatures": "Todas as funcionalidades gratuitas",
			"pricing.pricingTiers.customBenchmarkConfigurations": "Configurações de benchmark personalizadas",
			"pricing.pricingTiers.privateResultsDashboard": "Dashboard de resultados privado",
			"pricing.pricingTiers.apiAccess1000Requests": "Acesso à API (1.000 requisições/dia)",
			"pricing.pricingTiers.slackIntegration": "Integração com Slack",
			"pricing.pricingTiers.subscribeToPro": "Assinar Pro",
			"pricing.pricingTiers.enterpriseTier": "Nível Enterprise",
			"pricing.pricingTiers.custom": "Personalizado",
			"pricing.pricingTiers.allProFeatures": "Todas as funcionalidades Pro",
			"pricing.pricingTiers.dedicatedBenchmarkInfrastructure": "Infraestrutura de benchmark dedicada",
			"pricing.pricingTiers.customLibraryIntegrations": "Integrações de bibliotecas personalizadas",
			"pricing.pricingTiers.slaGuarantees": "Garantias de SLA",
			"pricing.pricingTiers.prioritySupport": "Suporte prioritário",
			"pricing.pricingTiers.contactSales": "Contatar Vendas",
			"pricing.pricingHeader.pricing": "Preços",
			"pricing.pricingHeader.transparentPricingForEvery": "Preços transparentes para cada etapa da sua jornada i18n.",
			"products.productsGrid.benchmarkDashboard": "Dashboard de Benchmark",
			"products.productsGrid.interactiveChartsAndTables": "Gráficos e tabelas interativos comparando bibliotecas i18n em tamanho de bundle, tempo de renderização e custo de hidratação.",
			"products.productsGrid.bundleAnalyzer": "Analisador de Bundle",
			"products.productsGrid.uploadYourBuildOutput": "Faça o upload da sua saída de build e obtenha um detalhamento de quanto do seu bundle é overhead de i18n.",
			"products.productsGrid.migrationAssistant": "Assistente de Migração",
			"products.productsGrid.automatedCodemodsAndGuides": "Codemods e guias automatizados para migração entre bibliotecas i18n com o mínimo de interrupção.",
			"products.productsGrid.performanceMonitor": "Monitor de Performance",
			"products.productsGrid.continuousPerformanceTrackingFor": "Acompanhamento contínuo de desempenho para sua implementação de i18n. Receba alertas quando o carregamento das traduções piorar.",
			"products.productsGrid.learnMore": "Saiba Mais",
			"products.productsHeader.products": "Produtos",
			"products.productsHeader.toolsAndServicesTo": "Ferramentas e serviços para ajudá-lo a otimizar sua estratégia de internacionalização.",
			"contact.contactForm.name": "Nome",
			"contact.contactForm.email": "E-mail",
			"contact.contactForm.subject": "Assunto",
			"contact.contactForm.message": "Mensagem",
			"contact.contactForm.sendMessage": "Enviar Mensagem",
			"contact.contactForm.wellGetBackTo": "Retornaremos em até 48 horas.",
			"contact.contactHeader.contactUs": "Contate-nos",
			"contact.contactHeader.haveQuestionsOrWantTo": "Tem dúvidas ou quer contribuir? Gostaríamos muito de ouvir você.",
			"about.aboutHeader.methodology": "Metodologia",
			"about.aboutHeader.weDesignedThisBenchmarkTo": "Projetamos este benchmark para fornecer comparações justas, reproduzíveis e significativas das bibliotecas de i18n.",
			"about.whatWeMeasure.bundleSizeImpact": "Impacto no tamanho do bundle",
			"about.whatWeMeasure.theAdditionalJavascriptBytesSent": "Os bytes extras de JavaScript enviados aos usuários quando a biblioteca de i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.",
			"about.whatWeMeasure.renderingOverhead": "Sobrecarga de renderização",
			"about.whatWeMeasure.howMuchExtraTimeThe": "Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React — medido usando o actualDuration do React Profiler.",
			"about.whatWeMeasure.hydrationCost": "Custo de hidratação",
			"about.whatWeMeasure.duringSsrTranslationDataIs": "Durante o SSR, os dados de tradução são serializados em HTML. Dicionários grandes aumentam a carga de HTML e desaceleram a hidratação — o momento em que a página se torna interativa.",
			"about.whatWeMeasure.lazyLoadingEffectiveness": "Eficácia do carregamento lento",
			"about.whatWeMeasure.whetherSplittingTranslationsByRoute": "Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais compensações ela introduz (solicitações em cascada, FOUC, complexidade de cache).",
			"about.whatWeMeasure.localeSwitchSpeed": "Velocidade de troca de idioma",
			"about.whatWeMeasure.howFastTheAppCan": "Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a re-renderização de componentes e a atualização do DOM.",
			"about.whatWeMeasure.whatWeMeasure": "O que medimos",
			"about.aboutGrid.testEnvironment": "Ambiente de Teste",
			"about.aboutGrid.allBenchmarksRunOn": "Todos os benchmarks são executados no mesmo hardware (M2 MacBook Pro, 16 GB de RAM), no mesmo navegador (Chromium 120 via Playwright) e nas mesmas condições de rede (4G simulado). Cada teste é repetido 50 vezes e reportamos a mediana com percentis P95/P99.",
			"about.aboutGrid.applicationDesign": "Design do Aplicativo",
			"about.aboutGrid.theBenchmarkAppHas10": "O aplicativo de benchmark tem 10 páginas com conteúdo realista — navegação, formulários, listas dinâmicas e texto estático. Cada página usa de 15 a 30 chaves de tradução para representar padrões de uso do mundo real.",
			"about.aboutGrid.measurementMethodology": "Metodologia de Medição",
			"about.aboutGrid.weUseBrowserNativeApis": "Usamos APIs nativas do navegador (Performance Timeline, Resource Timing, Layout Instability) combinadas com dados do React Profiler. Os tamanhos dos bundles são medidos pós-gzip usando source-map-explorer para maior precisão.",
			"about.aboutGrid.fairComparison": "Comparação Justa",
			"about.aboutGrid.eachI18nLibraryIsIntegrated": "Cada biblioteca i18n é integrada seguindo sua documentação oficial e as melhores práticas. Consultamos os mantenedores quando possível para garantir a configuração ideal. O mesmo aplicativo React, a mesma configuração Vite, o mesmo deploy.",
			"home.understandingImpact.understandingTheImpact": "Entendendo o impacto",
			"home.understandingImpact.whyASingleLargeJson": "Por que um único JSON grande pode prejudicar o desempenho",
			"home.understandingImpact.manyI18nLibrariesStoreTranslations": "Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido através do contexto de React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isto significa:",
			"home.understandingImpact.theJsonMustBeParsed": "O JSON deve ser analisado em cada carga de página — bloqueando a thread principal.",
			"home.understandingImpact.contextBasedArchitecturesCanCause": "As arquiteturas baseadas no contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que as suas chaves específicas não tenham mudado.",
			"home.understandingImpact.duringServerSideRenderingThe": "Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil de HTML, aumentando o tamanho do documento que deve ser descarregado e hidratado.",
			"home.understandingImpact.theTradeOffsOfDynamic": "As compensações do carregamento dinâmico",
			"home.understandingImpact.splittingTranslationsIntoPerRoute": "Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas introduz novos desafios:",
			"home.understandingImpact.waterfallRequests": "Pedidos em cascata:",
			"home.understandingImpact.flashOfUntranslatedContentFouc": "Flash de conteúdo não traduzido (FOUC):",
			"home.understandingImpact.cacheInvalidation": "Invalidação da cache:",
			"home.understandingImpact.whatThisBenchmarkMeasures": "O que este benchmark mede",
			"home.understandingImpact.thisTestAppProvidesA": "Esta aplicação de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu pacote de JavaScript, o tempo gasto a analisar e renderizar conteúdo traduzido e a eficácia das suas estratégias de divisão de código e de carregamento preguiçoso. Cada biblioteca é integrada na mesma aplicação para que os resultados sejam diretamente comparáveis.",
			"home.whyItMatters.whyTheseMetricsMatter": "Por que essas métricas são importantes",
			"home.whyItMatters.bundleSize": "Tamanho do Bundle",
			"home.whyItMatters.theBundleIsTheData": "O bundle representa os dados enviados a cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código de tempo de execução, além dos próprios arquivos de tradução mesmos.",
			"home.whyItMatters.renderingHydration": "Renderização e Hidratação",
			"home.whyItMatters.connectingALargeJson": "Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode desencadear novas renderizações em toda a árvore. Durante a hidratação do SSR, a análise e a anexação de objetos de tradução massivos adicionam latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).",
			"home.whyItMatters.dynamicLoading": "Carregamento Dinâmico",
			"home.whyItMatters.loadingAllTranslationsUpfront": "Carregar todas as traduções antecipadamente sobrecarrega a carga útil inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento preguiçoso introduz suas próprias compensações: solicitações em cascada, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.",
			"home.resultsTable.sampleResults": "Resultados de amostra",
			"home.resultsTable.bundleSize": "Tamanho do bundle",
			"home.resultsTable.lookupTime": "Tempo de consulta",
			"home.resultsTable.lazyLoading": "Carregamento lento",
			"home.hero.aTestApplicationDesignedTo": "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.",
			"home.hero.viewResults": "Ver Resultados",
			"team.teamGrid.sarahChen": "Sarah Chen",
			"team.teamGrid.founderLeadEngineer": "Fundadora e Engenheira Líder",
			"team.teamGrid.formerGoogleEngineerWith10": "Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.",
			"team.teamGrid.marcusWeber": "Marcus Weber",
			"team.teamGrid.performanceEngineer": "Engenheiro de Performance",
			"team.teamGrid.specializesInJavascriptPerformanceOptimization": "Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.",
			"team.teamGrid.aishaPatel": "Aisha Patel",
			"team.teamGrid.developerAdvocate": "Advogado de Desenvolvedores",
			"team.teamGrid.passionateAboutDeveloperExperienceAnd": "Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.",
			"team.teamGrid.tomasRodriguez": "Tomás Rodríguez",
			"team.teamGrid.fullStackDeveloper": "Desenvolvedor Full-Stack",
			"team.teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Colaborador de código aberto do Lingui.",
			"team.teamGrid.yukiTanaka": "Yuki Tanaka",
			"team.teamGrid.dataAnalyst": "Analista de Dados",
			"team.teamGrid.ensuresStatisticalRigorInAll": "Garante o rigor estatístico em todos os resultados de benchmark. Doutorado em Estatística Aplicada pelo MIT.",
			"team.teamGrid.elenaKowalski": "Elena Kowalski",
			"team.teamGrid.communityManager": "Gerente de Comunidade",
			"team.teamGrid.managesCommunityContributionsPartnershipsAnd": "Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.",
			"team.teamHeader.ourTeam": "Nossa Equipe",
			"team.teamHeader.meetThePeopleBehindI18n": "Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor.",
			"blog.blogList.i18nBenchmark2026Results": "Resultados do i18n Benchmark 2026",
			"blog.blogList.march152026": "15 de março de 2026",
			"blog.blogList.weTested12DifferentInternationalization": "Testamos 12 bibliotecas de internacionalização diferentes em 10 páginas. Aqui estão os resultados detalhados com gráficos interativos.",
			"blog.blogList.howToReduceYourI18n": "Como reduzir seu bundle i18n em 60%",
			"blog.blogList.march82026": "8 de março de 2026",
			"blog.blogList.practicalStrategiesForOptimizingTranslation": "Estratégias práticas para otimizar bundles de tradução, incluindo lazy loading, divisão de código e otimizações em tempo de compilação.",
			"blog.blogList.theStateOfInternationalizationIn": "O estado da internacionalização em 2026",
			"blog.blogList.february282026": "28 de fevereiro de 2026",
			"blog.blogList.anOverviewOfTheCurrent": "Uma visão geral do ecossistema i18n atual, comparando abordagens de catálogos de mensagens a soluções baseadas em compiladores.",
			"blog.blogList.migratingFromReactI18nextTo": "Migrando do react-i18next para o Lingui",
			"blog.blogList.february152026": "15 de fevereiro de 2026",
			"blog.blogList.aStepByStepGuide": "Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.",
			"blog.blogList.serverComponentsAndI18nWhat": "Server Components e i18n: o que muda?",
			"blog.blogList.february12026": "1 de fevereiro de 2026",
			"blog.blogList.reactServerComponentsIntroduceNew": "Os React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.",
			"blog.blogList.benchmarkMethodologyHowWeTest": "Metodologia de Benchmark: como testamos",
			"blog.blogList.january202026": "20 de janeiro de 2026",
			"blog.blogList.aTransparentLookAtOur": "Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.",
			"blog.blogList.readMore": "Leia mais →",
			"blog.blogHeader.blog": "Blog",
			"blog.blogHeader.insightsDeepDivesAnd": "Insights, análises aprofundadas e atualizações da comunidade de benchmarking i18n."
		} },
		ru: { translation: {
			"faq.faqList.howAreTheBenchmarks": "Как запускаются бенчмарки?",
			"faq.faqList.allBenchmarksAreRun": "Все бенчмарки запускаются с использованием Playwright на стабильной конфигурации оборудования (M2 MacBook Pro) с симулированными условиями сети 4G. Каждый тест выполняется 50 раз, и мы сообщаем медиану, значения P95 и P99.",
			"faq.faqList.whatLibrariesAreCurrently": "Какие библиотеки сейчас тестируются?",
			"faq.faqList.weCurrentlyBenchmarkReactI18next": "В настоящее время мы тестируем react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl и Paraglide. Мы планируем добавить больше библиотек на основе запросов сообщества.",
			"faq.faqList.canIContributeA": "Могу ли я предложить интеграцию новой библиотеки?",
			"faq.faqList.absolutelyWeWelcomeCommunity": "Безусловно! Мы приветствуем вклад сообщества. Сделайте форк репозитория, добавьте интеграцию вашей библиотеки, следуя нашему шаблону, и отправьте пулл-реквест. Подробности см. в руководстве для контрибьюторов.",
			"faq.faqList.howOftenAreResults": "Как часто обновляются результаты?",
			"faq.faqList.benchmarksRunAutomaticallyVia": "Бенчмарки запускаются автоматически через CI при каждом обновлении зависимостей и еженедельно в основной ветке. Результаты публикуются на дашборде в течение 24 часов.",
			"faq.faqList.areTheResultsStatistically": "Являются ли результаты статистически значимыми?",
			"faq.faqList.yesWeUseThe": "Да. Мы используем U-критерий Манна-Уитни с уровнем значимости 0,05 для сравнения распределений. Мы также сообщаем доверительные интервалы и размеры эффекта.",
			"faq.faq-header1.frequentlyAskedQuestions": "Часто задаваемые вопросы",
			"faq.faq-header1.everythingYouNeedToKnow": "Все, что вам нужно знать о проекте i18n Benchmark.",
			"settings.preferencesSection.preferences": "Настройки",
			"settings.preferencesSection.emailNotifications": "Email-уведомления",
			"settings.preferencesSection.receiveWeeklyBenchmarkReports": "Получать еженедельные отчеты о бенчмарках",
			"settings.preferencesSection.darkMode": "Темный режим",
			"settings.preferencesSection.useDarkColorScheme": "Использовать темную цветовою схему",
			"settings.preferencesSection.defaultLanguage": "Язык по умолчанию",
			"settings.settingsHeader.settings": "Настройки",
			"settings.settingsHeader.manageYourAccountPreferences": "Управляйте настройками своего аккаунта и конфигурацией.",
			"settings.settingsFooter.cancel": "Отмена",
			"settings.settingsFooter.saveChanges": "Сохранить изменения",
			"settings.apiAccessSection.apiAccess": "Доступ к API",
			"settings.apiAccessSection.apiKey": "Ключ API",
			"settings.apiAccessSection.useThisKeyTo": "Используйте этот ключ для программного доступа к API бенчмаркинга.",
			"settings.apiAccessSection.copy": "Копировать",
			"settings.profileSection.profile": "Профиль",
			"settings.profileSection.displayName": "Отображаемое имя",
			"settings.profileSection.email": "Email",
			"shared.header.home": "Главная",
			"shared.header.methodology": "Методология",
			"shared.header.mockPages": "Тестовые страницы",
			"shared.header.products": "Продукты",
			"shared.header.pricing": "Цены",
			"shared.header.team": "Команда",
			"shared.header.blog": "Блог",
			"shared.header.careers": "Карьера",
			"shared.header.faq": "FAQ",
			"shared.header.contact": "Контакт",
			"shared.header.settings": "Настройки",
			"shared.header.goToGithub": "Перейти на GitHub",
			"shared.footer.resources": "Ресурсы",
			"shared.footer.contact": "Контакт",
			"shared.footer.github": "GitHub",
			"shared.footer.methodology": "Методология",
			"shared.footer.contributing": "Вклад",
			"shared.footer.builtWith": "i18n Benchmark — Открытый проект. Построен на React, Vite и TanStack Router.",
			"shared.footer.anOpenSourceTestApplication": "Открытое приложение для тестирования реального влияния библиотек интернационализации на размер бандла, время загрузки и отзывчивость приложения.",
			"shared.mockBanner.text": "⚠️ Эта страница содержит фиктивные данные только для целей тестирования производительности. Она не связана с каким-либо реальным бизнесом или услугой.",
			"shared.themeToggle.themeModeAutoSystemClick": "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.",
			"shared.themeToggle.themeModeLightClick": "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.",
			"shared.themeToggle.themeModeDarkClick": "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.",
			"shared.themeToggle.themeAuto": "Тема: Авто",
			"shared.themeToggle.themeDark": "Тема: Темная",
			"shared.themeToggle.themeLight": "Тема: Светлая",
			"careers.openPositions.openPositions": "Открытые вакансии",
			"careers.openPositions.seniorPerformanceEngineer": "Старший инженер по производительности",
			"careers.openPositions.fullTime": "Полный рабочий день",
			"careers.openPositions.remote": "Удаленно",
			"careers.openPositions.leadBenchmarkDesignAnd": "Руководство дизайном и реализацией бенчмарков. Требуются глубокие знания внутренностей V8, API производительности браузера и статистического анализа.",
			"careers.openPositions.technicalWriter": "Технический писатель",
			"careers.openPositions.partTime": "Неполный рабочий день",
			"careers.openPositions.createAndMaintainDocumentation": "Создание и поддержка документации, постов в блоге и образовательного контента о лучших практиках производительности i18n.",
			"careers.openPositions.frontendDeveloper": "Frontend-разработчик",
			"careers.openPositions.buildAndMaintainThe": "Создание и поддержка дашборда бенчмарков, инструментов сравнения и интерактивных визуализаций.",
			"careers.openPositions.devOpsEngineer": "DevOps-инженер",
			"careers.openPositions.designAndMaintainThe": "Проектирование и поддержка CI/CD пайплайна, который автоматически запускает бенчмарки при каждом обновлении библиотеки.",
			"careers.openPositions.applyNow": "Подать заявку",
			"careers.careersHeader.careers": "Карьера",
			"careers.careersHeader.joinOurMissionToMake": "Присоединяйтесь к нашей миссии сделать веб быстрее и доступнее для всех и везде.",
			"careers.careersBenefits.whyJoinUs": "Почему стоит присоединиться к нам?",
			"careers.careersBenefits.remoteFirst": "Сначала удаленка",
			"careers.careersBenefits.workFromAnywhereFully": "Работайте откуда угодно. Полностью распределенная команда в 6 часовых поясах.",
			"careers.careersBenefits.openSource": "Открытый исходный код",
			"careers.careersBenefits.allOurWorkIs": "Вся наша работа — open source. Создавайте свое публичное портфолио, оказывая реальное влияние.",
			"careers.careersBenefits.impactful": "Значимо",
			"careers.careersBenefits.yourWorkDirectlyHelps": "Ваша работа напрямую помогает разработчикам создавать более качественные и быстрые локализованные приложения.",
			"route.route.oopsPageNotFound": "Упс! Страница не найдена",
			"route.route.returnToHome": "Вернуться на главную",
			"route.route.couldNotMeasureHydrationDuration": "Не удалось измерить продолжительность гидратации:",
			"pricing.pricingTiers.freeTier": "Бесплатный уровень",
			"pricing.pricingTiers.free": "Бесплатно",
			"pricing.pricingTiers.publicBenchmarkDashboard": "Публичный дашборд бенчмарков",
			"pricing.pricingTiers.basicLibraryComparisons": "Базовые сравнения библиотек",
			"pricing.pricingTiers.communityForumAccess": "Доступ к форуму сообщества",
			"pricing.pricingTiers.monthlyResultDigest": "Ежемесячный дайджест результатов",
			"pricing.pricingTiers.getStarted": "Начать",
			"pricing.pricingTiers.proTier": "Профессиональный уровень",
			"pricing.pricingTiers.perMonth": "/месяц",
			"pricing.pricingTiers.allFreeFeatures": "Все функции бесплатного уровня",
			"pricing.pricingTiers.customBenchmarkConfigurations": "Собственные конфигурации бенчмарков",
			"pricing.pricingTiers.privateResultsDashboard": "Приватный дашборд результатов",
			"pricing.pricingTiers.apiAccess1000Requests": "Доступ к API (1000 запросов/день)",
			"pricing.pricingTiers.slackIntegration": "Интеграция со Slack",
			"pricing.pricingTiers.subscribeToPro": "Подписаться на Pro",
			"pricing.pricingTiers.enterpriseTier": "Корпоративный уровень",
			"pricing.pricingTiers.custom": "Индивидуально",
			"pricing.pricingTiers.allProFeatures": "Все функции уровня Pro",
			"pricing.pricingTiers.dedicatedBenchmarkInfrastructure": "Выделенная инфраструктура для бенчмарков",
			"pricing.pricingTiers.customLibraryIntegrations": "Индивидуальные интеграции библиотек",
			"pricing.pricingTiers.slaGuarantees": "Гарантии SLA",
			"pricing.pricingTiers.prioritySupport": "Приоритетная поддержка",
			"pricing.pricingTiers.contactSales": "Связаться с отделом продаж",
			"pricing.pricingHeader.pricing": "Цены",
			"pricing.pricingHeader.transparentPricingForEvery": "Прозрачные цены для каждого этапа вашего пути в i18n.",
			"products.productsGrid.benchmarkDashboard": "Дашборд бенчмарков",
			"products.productsGrid.interactiveChartsAndTables": "Интерактивные графики и таблицы, сравнивающие библиотеки i18n по размеру бандла, времени рендеринга и стоимости гидратации.",
			"products.productsGrid.bundleAnalyzer": "Анализатор бандла",
			"products.productsGrid.uploadYourBuildOutput": "Загрузите вывод вашей сборки и получите подробный отчет о том, какую часть бандла составляют накладные расходы i18n.",
			"products.productsGrid.migrationAssistant": "Помощник по миграции",
			"products.productsGrid.automatedCodemodsAndGuides": "Автоматизированные кодомоды и руководства для миграции между библиотеками i18n с минимальными перерывами.",
			"products.productsGrid.performanceMonitor": "Монитор производительности",
			"products.productsGrid.continuousPerformanceTrackingFor": "Непрерывное отслеживание производительности вашей реализации i18n. Получайте оповещения при ухудшении загрузки переводов.",
			"products.productsGrid.learnMore": "Узнать больше",
			"products.productsHeader.products": "Продукты",
			"products.productsHeader.toolsAndServicesTo": "Инструменты и услуги, которые помогут вам оптимизировать стратегию интернационализации.",
			"contact.contactForm.name": "Имя",
			"contact.contactForm.email": "Email",
			"contact.contactForm.subject": "Тема",
			"contact.contactForm.message": "Сообщение",
			"contact.contactForm.sendMessage": "Отправить сообщение",
			"contact.contactForm.wellGetBackTo": "Мы ответим вам в течение 48 часов.",
			"contact.contactHeader.contactUs": "Связаться с нами",
			"contact.contactHeader.haveQuestionsOrWantTo": "Есть вопросы или хотите внести вклад? Мы будем рады услышать вас.",
			"about.aboutHeader.methodology": "Методология",
			"about.aboutHeader.weDesignedThisBenchmarkTo": "Мы разработали этот бенчмарк, чтобы обеспечить справедливое, воспроизводимое и значимое сравнение библиотек i18n. Вот наш подход.",
			"about.whatWeMeasure.bundleSizeImpact": "Влияние на размер бандла",
			"about.whatWeMeasure.theAdditionalJavascriptBytesSent": "Дополнительные байты JavaScript, отправляемые клиенту специально из-за рантайма библиотеки i18n, плюс файлы перевода для текущего языка.",
			"about.whatWeMeasure.renderingOverhead": "Затраты на рендеринг",
			"about.whatWeMeasure.howMuchExtraTimeThe": "Сколько дополнительного времени слой i18n добавляет к рендерингу каждого компонента — измеряется с помощью actualDuration в React Profiler.",
			"about.whatWeMeasure.hydrationCost": "Стоимость гидратации",
			"about.whatWeMeasure.duringSsrTranslationDataIs": "Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают HTML-пейлоад и замедляют гидратацию — момент, когда страница становится интерактивной.",
			"about.whatWeMeasure.lazyLoadingEffectiveness": "Эффективность ленивой загрузки",
			"about.whatWeMeasure.whetherSplittingTranslationsByRoute": "Действительно ли разделение переводов по маршрутам или пространствам имен снижает начальную нагрузку, и какие компромиссы оно вносит (каскадные запросы, FOUC, сложность кэширования).",
			"about.whatWeMeasure.localeSwitchSpeed": "Скорость переключения языка",
			"about.whatWeMeasure.howFastTheAppCan": "Как быстро приложение может переключаться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.",
			"about.whatWeMeasure.whatWeMeasure": "Что мы измеряем",
			"about.aboutGrid.testEnvironment": "Тестовая среда",
			"about.aboutGrid.allBenchmarksRunOn": "Все бенчмарки запускаются на одном и том же оборудовании (M2 MacBook Pro, 16 ГБ ОЗУ), в одном и том же браузере (Chromium 120 через Playwright) и в одинаковых сетевых условиях (симуляция 4G). Каждый тест повторяется 50 раз, и мы сообщаем медиану с процентилями P95/P99.",
			"about.aboutGrid.applicationDesign": "Дизайн приложения",
			"about.aboutGrid.theBenchmarkAppHas10": "Приложение для бенчмарка имеет 10 страниц с реалистичным контентом — навигацией, формами, динамическими списками и статическим текстом. Каждая страница использует 15–30 ключей перевода для представления реальных сценариев использования, а не синтетических микро-бенчмарков.",
			"about.aboutGrid.measurementMethodology": "Методология измерения",
			"about.aboutGrid.weUseBrowserNativeApis": "Мы используем нативные API браузера (Performance Timeline, Resource Timing, Layout Instability) в сочетании с данными React Profiler. Размеры бандлов измеряются после gzip с использованием source-map-explorer для точности.",
			"about.aboutGrid.fairComparison": "Справедливое сравнение",
			"about.aboutGrid.eachI18nLibraryIsIntegrated": "Каждая библиотека i18n интегрируется в соответствии с ее официальной документацией и лучшими практиками. Мы консультируемся с мейнтейнерами, когда это возможно, чтобы обеспечить оптимальную конфигурацию. Одно и то же приложение React, один и тот же конфиг Vite, одно и то же развертывание.",
			"home.understandingImpact.understandingTheImpact": "Понимание влияния",
			"home.understandingImpact.whyASingleLargeJson": "Почему один большой JSON может снизить производительность",
			"home.understandingImpact.manyI18nLibrariesStoreTranslations": "Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:",
			"home.understandingImpact.theJsonMustBeParsed": "JSON должен парситься при каждой загрузке страницы — блокируя основной поток.",
			"home.understandingImpact.contextBasedArchitecturesCanCause": "Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, потому что каждый потребитель уведомляется, даже если его конкретные ключи не изменились.",
			"home.understandingImpact.duringServerSideRenderingThe": "Во время серверного рендеринга весь словарь сериализуется в HTML-пейлоад, увеличивая размер документа, который необходимо загрузить и гидратировать.",
			"home.understandingImpact.theTradeOffsOfDynamic": "Компромиссы динамической загрузки",
			"home.understandingImpact.splittingTranslationsIntoPerRoute": "Разделение переводов на чанки для каждого маршрута или пространства имен может значительно уменьшить начальный пейлоад. Но это создает новые проблемы:",
			"home.understandingImpact.waterfallRequests": "Каскадные запросы (Waterfall requests):",
			"home.understandingImpact.flashOfUntranslatedContentFouc": "Мерцание непереведенного контента (FOUC):",
			"home.understandingImpact.cacheInvalidation": "Инвалидация кэша:",
			"home.understandingImpact.whatThisBenchmarkMeasures": "Что измеряет этот бенчмарк",
			"home.understandingImpact.thisTestAppProvidesA": "Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют вашему JavaScript-бандлу, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.",
			"home.whyItMatters.whyTheseMetricsMatter": "Почему эти показатели важны",
			"home.whyItMatters.bundleSize": "Размер бандла",
			"home.whyItMatters.theBundleIsTheData": "Бандл — это данные, которые отправляются каждому пользователю по всему миру. Большой размер бандла означает более долгое время загрузки, особенно при медленном 3G-соединении, характерном для многих регионов. Библиотеки i18n сильно различаются по весу: от нескольких килобайт до десятков килобайт рантайм-кода, плюс сами файлы переводов.",
			"home.whyItMatters.renderingHydration": "Рендеринг и гидратация",
			"home.whyItMatters.connectingALargeJson": "Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг всего дерева. Во время гидратации SSR парсинг и присоединение массивных объектов перевода добавляют задержку до того, как страница станет интерактивной, что напрямую влияет на Time to Interactive (TTI).",
			"home.whyItMatters.dynamicLoading": "Динамическая загрузка",
			"home.whyItMatters.loadingAllTranslationsUpfront": "Загрузка всех переводов сразу перегружает начальную полезную нагрузку. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно для текущей страницы. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы (waterfall), мерцание непереведенного контента и сложность кэширования. Измерение обеих стратегий необходимо.",
			"home.resultsTable.sampleResults": "Примеры результатов",
			"home.resultsTable.bundleSize": "Размер бандла",
			"home.resultsTable.lookupTime": "Время поиска",
			"home.resultsTable.lazyLoading": "Ленивая загрузка",
			"home.hero.aTestApplicationDesignedTo": "Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.",
			"home.hero.viewResults": "Посмотреть результаты",
			"team.teamGrid.sarahChen": "Сара Чен",
			"team.teamGrid.founderLeadEngineer": "Основатель и ведущий инженер",
			"team.teamGrid.formerGoogleEngineerWith10": "Бывший инженер Google с 10-летним опытом создания систем интернационализации в масштабе.",
			"team.teamGrid.marcusWeber": "Маркус Вебер",
			"team.teamGrid.performanceEngineer": "Инженер по производительности",
			"team.teamGrid.specializesInJavascriptPerformanceOptimization": "Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.",
			"team.teamGrid.aishaPatel": "Айша Патель",
			"team.teamGrid.developerAdvocate": "Адвокат разработчиков",
			"team.teamGrid.passionateAboutDeveloperExperienceAnd": "Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext.",
			"team.teamGrid.tomasRodriguez": "Томас Родригес",
			"team.teamGrid.fullStackDeveloper": "Full-Stack разработчик",
			"team.teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Поддерживает инфраструктуру бенчмаркинга и пайплайн CI/CD. Участник разработки Lingui с открытым исходным кодом.",
			"team.teamGrid.yukiTanaka": "Юки Танака",
			"team.teamGrid.dataAnalyst": "Аналитик данных",
			"team.teamGrid.ensuresStatisticalRigorInAll": "Обеспечивает статистическую строгость всех результатов бенчмарков. Доктор прикладной статистики из Массачусетского технологического института (MIT).",
			"team.teamGrid.elenaKowalski": "Елена Ковальски",
			"team.teamGrid.communityManager": "Комьюнити-менеджер",
			"team.teamGrid.managesCommunityContributionsPartnershipsAnd": "Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении проектами с открытым исходным кодом.",
			"team.teamHeader.ourTeam": "Наша команда",
			"team.teamHeader.meetThePeopleBehindI18n": "Познакомьтесь с людьми, стоящими за i18n Benchmark. Разнообразная команда, объединенная общей страстью к отличным инструментам для разработчиков.",
			"blog.blogList.i18nBenchmark2026Results": "Результаты i18n Benchmark 2026",
			"blog.blogList.march152026": "15 марта 2026 года",
			"blog.blogList.weTested12DifferentInternationalization": "Мы протестировали 12 различных библиотек интернационализации на 10 страницах. Вот подробные результаты с интерактивными графиками.",
			"blog.blogList.howToReduceYourI18n": "Как уменьшить бандл i18n на 60%",
			"blog.blogList.march82026": "8 марта 2026 года",
			"blog.blogList.practicalStrategiesForOptimizingTranslation": "Практические стратегии по оптимизации загрузки файлов перевода, tree-shaking неиспользуемых локалей и использование компиляции во время сборки.",
			"blog.blogList.theStateOfInternationalizationIn": "Состояние интернационализации в 2026 году",
			"blog.blogList.february282026": "28 февраля 2026 года",
			"blog.blogList.anOverviewOfTheCurrent": "Обзор текущей экосистемы i18n, сравнение подходов от каталогов сообщений до решений на основе компиляторов.",
			"blog.blogList.migratingFromReactI18nextTo": "Миграция с react-i18next на Lingui",
			"blog.blogList.february152026": "15 февраля 2026 года",
			"blog.blogList.aStepByStepGuide": "Пошаговое руководство по миграции продакшн-приложения с 50 000 ключами перевода с react-i18next на Lingui.",
			"blog.blogList.serverComponentsAndI18nWhat": "Server Components и i18n: что меняется?",
			"blog.blogList.february12026": "1 февраля 2026 года",
			"blog.blogList.reactServerComponentsIntroduceNew": "React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.",
			"blog.blogList.benchmarkMethodologyHowWeTest": "Методология бенчмарка: как мы тестируем",
			"blog.blogList.january202026": "20 января 2026 года",
			"blog.blogList.aTransparentLookAtOur": "Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.",
			"blog.blogList.readMore": "Читать далее →",
			"blog.blogHeader.blog": "Блог",
			"blog.blogHeader.insightsDeepDivesAnd": "Инсайты, глубокие погружения и обновления от сообщества бенчмаркинга i18n."
		} },
		zh: { translation: {
			"faq.faqList.howAreTheBenchmarks": "基准测试是如何运行的？",
			"faq.faqList.allBenchmarksAreRun": "所有的基准测试都是使用 Playwright 在一致的硬件设置（M2 MacBook Pro）上运行的，并模拟了 4G 网络条件。每个测试运行 50 次迭代，我们报告中位数、P95 和 P99 值。",
			"faq.faqList.whatLibrariesAreCurrently": "目前测试了哪些库？",
			"faq.faqList.weCurrentlyBenchmarkReactI18next": "我们目前对 react-i18next、react-intl (FormatJS)、LinguiJS、typesafe-i18n、next-intl 和 Paraglide 进行基准测试。我们计划根据社区要求增加更多。",
			"faq.faqList.canIContributeA": "我可以贡献一个新的库集成吗？",
			"faq.faqList.absolutelyWeWelcomeCommunity": "当然可以！我们欢迎社区做出贡献。Fork 该仓库，按照我们的模板添加您的库集成，并提交拉取请求。",
			"faq.faqList.howOftenAreResults": "结果多久更新一次？",
			"faq.faqList.benchmarksRunAutomaticallyVia": "基准测试在每次依赖项更新时通过 CI 自动运行，并每周在主分支上运行。结果会在 24 小时内发布到仪表板上。",
			"faq.faqList.areTheResultsStatistically": "结果是否具有统计学意义？",
			"faq.faqList.yesWeUseThe": "是的。我们使用 Mann-Whitney U 检验（显着性水平为 0.05）来比较分布。我们还报告置信区间和效应大小。",
			"faq.faq-header1.frequentlyAskedQuestions": "常见问题",
			"faq.faq-header1.everythingYouNeedToKnow": "关于 i18n 基准测试项目，你需要知道的一切。",
			"settings.preferencesSection.preferences": "偏好设置",
			"settings.preferencesSection.emailNotifications": "邮件通知",
			"settings.preferencesSection.receiveWeeklyBenchmarkReports": "接收每周基准测试报告",
			"settings.preferencesSection.darkMode": "深色模式",
			"settings.preferencesSection.useDarkColorScheme": "使用深色配色方案",
			"settings.preferencesSection.defaultLanguage": "默认语言",
			"settings.settingsHeader.settings": "设置",
			"settings.settingsHeader.manageYourAccountPreferences": "管理您的账户偏好和配置。",
			"settings.settingsFooter.cancel": "取消",
			"settings.settingsFooter.saveChanges": "保存更改",
			"settings.apiAccessSection.apiAccess": "API 访问",
			"settings.apiAccessSection.apiKey": "API 密钥",
			"settings.apiAccessSection.useThisKeyTo": "使用此密钥以编程方式访问基准测试 API。",
			"settings.apiAccessSection.copy": "复制",
			"settings.profileSection.profile": "个人资料",
			"settings.profileSection.displayName": "显示名称",
			"settings.profileSection.email": "电子邮件",
			"shared.header.home": "首页",
			"shared.header.methodology": "方法学",
			"shared.header.mockPages": "模拟页面",
			"shared.header.products": "产品",
			"shared.header.pricing": "价格",
			"shared.header.team": "团队",
			"shared.header.blog": "博客",
			"shared.header.careers": "职业",
			"shared.header.faq": "常见问题",
			"shared.header.contact": "联系我们",
			"shared.header.settings": "设置",
			"shared.header.goToGithub": "前往 GitHub",
			"shared.footer.resources": "资源",
			"shared.footer.contact": "联系",
			"shared.footer.github": "GitHub",
			"shared.footer.methodology": "方法学",
			"shared.footer.contributing": "贡献",
			"shared.footer.builtWith": "i18n Benchmark — 开源项目。使用 React, Vite 和 TanStack Router 构建。",
			"shared.footer.anOpenSourceTestApplication": "一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。",
			"shared.mockBanner.text": "⚠️ 此页面仅包含用于基准测试的模拟数据。它与任何真实的业务或服务无关。",
			"shared.themeToggle.themeModeAutoSystemClick": "主题模式：自动（系统）。点击切换到浅色模式。",
			"shared.themeToggle.themeModeLightClick": "主题模式：浅色。点击切换到深色模式。",
			"shared.themeToggle.themeModeDarkClick": "主题模式：深色。点击切换到自动（系统）模式。",
			"shared.themeToggle.themeAuto": "主题：自动",
			"shared.themeToggle.themeDark": "主题：深色",
			"shared.themeToggle.themeLight": "主题：浅色",
			"careers.openPositions.openPositions": "开放职位",
			"careers.openPositions.seniorPerformanceEngineer": "高级性能工程师",
			"careers.openPositions.fullTime": "全职",
			"careers.openPositions.remote": "远程",
			"careers.openPositions.leadBenchmarkDesignAnd": "领导基准设计和实施。需要深入了解 V8 内部、浏览器性能 API 和统计分析。",
			"careers.openPositions.technicalWriter": "技术文档工程师",
			"careers.openPositions.partTime": "兼职",
			"careers.openPositions.createAndMaintainDocumentation": "创建并维护有关 i18n 性能最佳实践的文档、博客文章和教育内容。",
			"careers.openPositions.frontendDeveloper": "前端开发人员",
			"careers.openPositions.buildAndMaintainThe": "构建并维护基准仪表板、比较工具和交互式可视化效果。",
			"careers.openPositions.devOpsEngineer": "运维工程师",
			"careers.openPositions.designAndMaintainThe": "设计并维护在每次库更新时自动运行基准测试的 CI/CD 流水线。",
			"careers.openPositions.applyNow": "立即申请",
			"careers.careersHeader.careers": "职业",
			"careers.careersHeader.joinOurMissionToMake": "加入我们的使命，让网络对世界各地的每一个人都更快、更方便。",
			"careers.careersBenefits.whyJoinUs": "为什么加入我们？",
			"careers.careersBenefits.remoteFirst": "远程优先",
			"careers.careersBenefits.workFromAnywhereFully": "在任何地方工作。完全分布在 6 个时区的团队。",
			"careers.careersBenefits.openSource": "开源",
			"careers.careersBenefits.allOurWorkIs": "我们所有的工作都是开源的。在产生影响的同时建立你的公共投资组合。",
			"careers.careersBenefits.impactful": "有影响力的",
			"careers.careersBenefits.yourWorkDirectlyHelps": "你的工作直接帮助开发人员构建更好、更快的国际化应用程序。",
			"route.route.oopsPageNotFound": "糟糕！找不到页面",
			"route.route.returnToHome": "返回首页",
			"route.route.couldNotMeasureHydrationDuration": "无法测量注水时长：",
			"pricing.pricingTiers.freeTier": "免费版",
			"pricing.pricingTiers.free": "免费",
			"pricing.pricingTiers.publicBenchmarkDashboard": "公共基准测试仪表板",
			"pricing.pricingTiers.basicLibraryComparisons": "基本库比较",
			"pricing.pricingTiers.communityForumAccess": "社区论坛访问权限",
			"pricing.pricingTiers.monthlyResultDigest": "每月结果摘要",
			"pricing.pricingTiers.getStarted": "开始使用",
			"pricing.pricingTiers.proTier": "专业版",
			"pricing.pricingTiers.perMonth": "/月",
			"pricing.pricingTiers.allFreeFeatures": "包含所有免费版功能",
			"pricing.pricingTiers.customBenchmarkConfigurations": "自定义基准测试配置",
			"pricing.pricingTiers.privateResultsDashboard": "私人结果仪表板",
			"pricing.pricingTiers.apiAccess1000Requests": "API 访问（1,000 次请求/天）",
			"pricing.pricingTiers.slackIntegration": "Slack 集成",
			"pricing.pricingTiers.subscribeToPro": "订阅专业版",
			"pricing.pricingTiers.enterpriseTier": "企业版",
			"pricing.pricingTiers.custom": "定制",
			"pricing.pricingTiers.allProFeatures": "包含所有专业版功能",
			"pricing.pricingTiers.dedicatedBenchmarkInfrastructure": "专用基准测试基础设施",
			"pricing.pricingTiers.customLibraryIntegrations": "自定义库集成",
			"pricing.pricingTiers.slaGuarantees": "SLA 保证",
			"pricing.pricingTiers.prioritySupport": "优先支持",
			"pricing.pricingTiers.contactSales": "联系销售人员",
			"pricing.pricingHeader.pricing": "价格",
			"pricing.pricingHeader.transparentPricingForEvery": "为您 i18n 旅程的每个阶段提供透明的价格。",
			"products.productsGrid.benchmarkDashboard": "基准测试仪表板",
			"products.productsGrid.interactiveChartsAndTables": "交互式图表和表格，对比了不同 i18n 库在包大小、渲染时间和注水成本方面的表现。",
			"products.productsGrid.bundleAnalyzer": "包分析器",
			"products.productsGrid.uploadYourBuildOutput": "上传您的构建输出，获取关于 i18n 开销在您的包中占比的详细分析。",
			"products.productsGrid.migrationAssistant": "迁移助手",
			"products.productsGrid.automatedCodemodsAndGuides": "自动化代码修改工具和指南，助您在 i18n 库之间平滑迁移，最大程度减少中断。",
			"products.productsGrid.performanceMonitor": "性能监控器",
			"products.productsGrid.continuousPerformanceTrackingFor": "对您的 i18n 实现进行持续的性能跟踪。当翻译加载速度下降时获得警报。",
			"products.productsGrid.learnMore": "了解更多",
			"products.productsHeader.products": "产品",
			"products.productsHeader.toolsAndServicesTo": "帮助您优化国际化战略的工具和服务。",
			"contact.contactForm.name": "姓名",
			"contact.contactForm.email": "电子邮件",
			"contact.contactForm.subject": "主题",
			"contact.contactForm.message": "留言",
			"contact.contactForm.sendMessage": "发送消息",
			"contact.contactForm.wellGetBackTo": "我们将在 48 小时内回复您。",
			"contact.contactHeader.contactUs": "联系我们",
			"contact.contactHeader.haveQuestionsOrWantTo": "有疑问或想做出贡献？我们很期待听到你的声音。",
			"about.aboutHeader.methodology": "方法学",
			"about.aboutHeader.weDesignedThisBenchmarkTo": "我们设计这个基准是为了提供公平、可重现和有意义的 i18n 库比较。",
			"about.whatWeMeasure.bundleSizeImpact": "包大小影响",
			"about.whatWeMeasure.theAdditionalJavascriptBytesSent": "包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络上的下载时间。",
			"about.whatWeMeasure.renderingOverhead": "渲染开销",
			"about.whatWeMeasure.howMuchExtraTimeThe": "库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树中不必要的重新渲染。",
			"about.whatWeMeasure.hydrationCost": "注水成本",
			"about.whatWeMeasure.duringSsrTranslationDataIs": "在 SSR 期间，翻译数据被序列化为 HTML。大型词典会增加 HTML 负载并减慢注水速度——即页面变得可交互的时刻。",
			"about.whatWeMeasure.lazyLoadingEffectiveness": "延迟加载有效性",
			"about.whatWeMeasure.whetherSplittingTranslationsByRoute": "按路线或命名空间拆分翻译是否真的能减少初始负载，以及它引入了哪些权衡（瀑布请求、FOUC、缓存复杂性）。",
			"about.whatWeMeasure.localeSwitchSpeed": "本地语言切换速度",
			"about.whatWeMeasure.howFastTheAppCan": "应用程序在运行时从一种语言切换到另一种语言的速度——包括获取新翻译、重新渲染组件和更新 DOM。",
			"about.whatWeMeasure.whatWeMeasure": "我们测量什么",
			"about.aboutGrid.testEnvironment": "测试环境",
			"about.aboutGrid.allBenchmarksRunOn": "所有基准测试都在相同的硬件（M2 MacBook Pro, 16 GB RAM）、相同的浏览器（通过 Playwright 运行 Chromium 120）和相同的网络条件（模拟 4G）下运行。每项测试重复 50 次，我们报告 P95/P99 百分位数的平均值。",
			"about.aboutGrid.applicationDesign": "应用设计",
			"about.aboutGrid.theBenchmarkAppHas10": "该基准测试应用有 10 个页面，包含现实内容 —— 导航、表单、动态列表和静态文本。每个页面使用 15-30 个翻译键，以代表真实世界的使用模式。",
			"about.aboutGrid.measurementMethodology": "测量方法学",
			"about.aboutGrid.weUseBrowserNativeApis": "我们使用浏览器原生的 API（Performance Timeline, Resource Timing, Layout Instability）结合 React Profiler 数据。包大小在 gzip 后使用 source-map-explorer 测量以确保准确性。",
			"about.aboutGrid.fairComparison": "公平比较",
			"about.aboutGrid.eachI18nLibraryIsIntegrated": "每个 i18n 库都按照其官方文档和最佳实践进行集成。我们尽可能咨询维护者以确保最佳配置。相同的 React 应用，相同的 Vite 配置，相同的部署。",
			"home.understandingImpact.understandingTheImpact": "理解影响",
			"home.understandingImpact.whyASingleLargeJson": "为什么单个大型 JSON 会损害性能",
			"home.understandingImpact.manyI18nLibrariesStoreTranslations": "许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当这个对象很大（数千个键）时，每个使用翻译的组件都会持有对整个字典的引用。这意味着：",
			"home.understandingImpact.theJsonMustBeParsed": "JSON 必须在每次页面加载时进行解析 —— 这会阻塞主线程。",
			"home.understandingImpact.contextBasedArchitecturesCanCause": "当本地化发生变化时，基于上下文的架构可能会导致级联重新渲染，因为即使某些组件的特定键没有变化，每个消费者也会收到通知。",
			"home.understandingImpact.duringServerSideRenderingThe": "在服务器端渲染期间，整个字典会被序列化到 HTML 负载中，从而增加了必须下载和注水的文件大小。",
			"home.understandingImpact.theTradeOffsOfDynamic": "动态加载的权衡",
			"home.understandingImpact.splittingTranslationsIntoPerRoute": "将翻译拆分为按路由或按命名空间的块可以显著减少初始负载。但它引入了新的挑战：",
			"home.understandingImpact.waterfallRequests": "瀑布请求：",
			"home.understandingImpact.flashOfUntranslatedContentFouc": "未翻译内容闪烁 (FOUC)：",
			"home.understandingImpact.cacheInvalidation": "缓存失效：",
			"home.understandingImpact.whatThisBenchmarkMeasures": "此基准测试测量什么",
			"home.understandingImpact.thisTestAppProvidesA": "此测试应用提供了一个受控环境 —— 10 个具有现实内容的页面 —— 以在三个维度上比较 i18n 库：它们为 JavaScript 包增加的重量、解析和渲染翻译内容所花费的时间，以及它们的代码拆分和懒加载策略的有效性。每个库都集成到同一个应用中，因此结果具有直接可比性。",
			"home.whyItMatters.whyTheseMetricsMatter": "为什么这些指标很重要",
			"home.whyItMatters.bundleSize": "包大小",
			"home.whyItMatters.theBundleIsTheData": "Bundle 是运送给全球每一位用户的数据。更大的 Bundle 意味着更长的下载时间——尤其是在许多地区常见的缓慢 3G 连接上。i18n 库的重量差异巨大：从几 KB 到数十 KB 的运行时代码，再加上翻译文件本身。",
			"home.whyItMatters.renderingHydration": "渲染与注水",
			"home.whyItMatters.connectingALargeJson": "将大型 JSON 字典连接到每个组件会创建一个隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加庞大的翻译对象会在页面变得可交互之前增加延迟——直接影响可交互时间 (TTI)。",
			"home.whyItMatters.dynamicLoading": "动态加载",
			"home.whyItMatters.loadingAllTranslationsUpfront": "预先加载所有翻译会使初始有效载荷过载。动态（懒）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，懒加载也会带来自身的权衡：瀑布请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。",
			"home.resultsTable.sampleResults": "样本结果",
			"home.resultsTable.bundleSize": "包大小",
			"home.resultsTable.lookupTime": "查询时间",
			"home.resultsTable.lazyLoading": "延迟加载",
			"home.hero.aTestApplicationDesignedTo": "一个测试应用程序，旨在衡量国际化库对包大小、加载性能和渲染反应性的实际影响。",
			"home.hero.viewResults": "查看结果",
			"team.teamGrid.sarahChen": "Sarah Chen",
			"team.teamGrid.founderLeadEngineer": "创始人兼首席工程师",
			"team.teamGrid.formerGoogleEngineerWith10": "前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。",
			"team.teamGrid.marcusWeber": "Marcus Weber",
			"team.teamGrid.performanceEngineer": "性能工程师",
			"team.teamGrid.specializesInJavascriptPerformanceOptimization": "专注于 JavaScript 性能优化和基准测试方法。曾任职于 Vercel。",
			"team.teamGrid.aishaPatel": "Aisha Patel",
			"team.teamGrid.developerAdvocate": "开发者倡导者",
			"team.teamGrid.passionateAboutDeveloperExperienceAnd": "热爱开发者体验和教育。React Conf、JSConf 和 i18nNext 的演讲者。",
			"team.teamGrid.tomasRodriguez": "Tomás Rodríguez",
			"team.teamGrid.fullStackDeveloper": "全栈开发人员",
			"team.teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "维护基准测试基础架构和 CI/CD 流水线。Lingui 的开源贡献者。",
			"team.teamGrid.yukiTanaka": "Yuki Tanaka",
			"team.teamGrid.dataAnalyst": "数据分析师",
			"team.teamGrid.ensuresStatisticalRigorInAll": "确保所有基准测试结果的统计严谨性。麻省理工学院应用统计学博士。",
			"team.teamGrid.elenaKowalski": "Elena Kowalski",
			"team.teamGrid.communityManager": "社区经理",
			"team.teamGrid.managesCommunityContributionsPartnershipsAnd": "管理社区贡献、合作伙伴关系和活动。具有开源治理背景。",
			"team.teamHeader.ourTeam": "我们的团队",
			"team.teamHeader.meetThePeopleBehindI18n": "认识 i18n 基准测试背后的团队。一支多元化的团队，因为对优秀开发人员工具的共同热情而团结在一起。",
			"blog.blogList.i18nBenchmark2026Results": "i18n 基准测试 2026 结果",
			"blog.blogList.march152026": "2026年3月15日",
			"blog.blogList.weTested12DifferentInternationalization": "我们针对 10 个页面测试了 12 种不同的国际化库。以下是带有交互式图表的详细结果。",
			"blog.blogList.howToReduceYourI18n": "如何将 i18n 包大小减少 60%",
			"blog.blogList.march82026": "2026年3月8日",
			"blog.blogList.practicalStrategiesForOptimizingTranslation": "优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。",
			"blog.blogList.theStateOfInternationalizationIn": "React 国际化的现状",
			"blog.blogList.february282026": "2026年2月28日",
			"blog.blogList.anOverviewOfTheCurrent": "React 当前 i18n 生态系统概览，涵盖趋势、新兴模式和社区偏好。",
			"blog.blogList.migratingFromReactI18nextTo": "从 react-i18next 迁移到 Lingui",
			"blog.blogList.february152026": "2026年2月15日",
			"blog.blogList.aStepByStepGuide": "从 react-i18next 迁移拥有 50,000 个翻译键的生产应用程序到 Lingui 的逐步指南。",
			"blog.blogList.serverComponentsAndI18nWhat": "服务器组件和 i18n：有什么变化？",
			"blog.blogList.february12026": "2026年2月1日",
			"blog.blogList.reactServerComponentsIntroduceNew": "React 服务器组件为国际化引入了新模式。我们探讨了其影响和最佳实践。",
			"blog.blogList.benchmarkMethodologyHowWeTest": "基准测试方法学：我们如何测试",
			"blog.blogList.january202026": "2026年1月20日",
			"blog.blogList.aTransparentLookAtOur": "透明地了解我们的基准测试方法，包括测试环境、统计方法和可重现性。",
			"blog.blogList.readMore": "阅读更多 →",
			"blog.blogHeader.blog": "博客",
			"blog.blogHeader.insightsDeepDivesAnd": "来自 i18n 基准测试社区的见解、深入探讨和更新。"
		} }
	},
	lng: "en",
	fallbackLng: "en",
	interpolation: { escapeValue: false },
	react: { useSuspense: false },
	keySeparator: false,
	nsSeparator: false
});
var i18n_default = instance;
//#endregion
//#region components/AppProviders.tsx
function AppProviders({ children }) {
	const locale = useParams().locale ?? "en";
	useEffect(() => {
		if (i18n_default.language !== locale) i18n_default.changeLanguage(locale);
	}, [locale]);
	useEffect(() => {
		document.documentElement.lang = locale;
	}, [locale]);
	useEffect(() => {
		recordHydrationDuration();
	}, []);
	return /* @__PURE__ */ jsx(Profiler, {
		id: "AppRoot",
		onRender: onRenderCallback,
		children: /* @__PURE__ */ jsx(I18nextProvider, {
			i18n: i18n_default,
			children
		})
	});
}
//#endregion
export { AppProviders as default };
