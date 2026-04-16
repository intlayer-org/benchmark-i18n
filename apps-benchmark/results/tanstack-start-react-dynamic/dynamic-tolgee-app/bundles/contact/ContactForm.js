import { t as en_default } from "./en-CMFc584c.js";
import React, { Suspense, useCallback, useContext, useEffect, useId, useMemo, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
	enumerable: true,
	configurable: true,
	writable: true,
	value
}) : obj[key] = value;
var __spreadValues = (a, b) => {
	for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
	if (__getOwnPropSymbols) {
		for (var prop of __getOwnPropSymbols(b)) if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
	}
	return a;
};
var _a;
function _mergeNamespaces(n, m) {
	for (var i = 0; i < m.length; i++) {
		const e = m[i];
		if (typeof e !== "string" && !Array.isArray(e)) {
			for (const k in e) if (k !== "default" && !(k in n)) {
				const d = Object.getOwnPropertyDescriptor(e, k);
				if (d) Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: () => e[k]
				});
			}
		}
	}
	return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
function isPromise(value) {
	return Boolean(value && typeof value.then === "function");
}
function valueOrPromise(value, callback) {
	if (isPromise(value)) return Promise.resolve(value).then(callback);
	else return callback(value);
}
function handleRegularOrAsyncErr(onError, createError, callback) {
	function handle(e) {
		const error = createError(e);
		onError.emit(error);
		console.error(error);
		throw error;
	}
	try {
		const result = callback();
		if (isPromise(result)) return result.catch(handle);
		return result;
	} catch (e) {
		handle(e);
	}
}
function missingOptionError(option) {
	const options = (Array.isArray(option) ? option : [option]).map((val) => `'${val}'`);
	const lastPart = options.slice(-2).join(" or ");
	return `Tolgee: You need to specify ${[...options.slice(0, -2), lastPart].join(", ")} option`;
}
function isObject(item) {
	return typeof item === "object" && !Array.isArray(item) && item !== null;
}
function getFallback(value) {
	if (typeof value === "string") return [value];
	if (Array.isArray(value)) return value;
}
function getFallbackArray(value) {
	return getFallback(value) || [];
}
function getFallbackFromStruct(language, fallbackLanguage) {
	if (isObject(fallbackLanguage)) return getFallbackArray(fallbackLanguage === null || fallbackLanguage === void 0 ? void 0 : fallbackLanguage[language]);
	else return getFallbackArray(fallbackLanguage);
}
function unique(arr) {
	return Array.from(new Set(arr));
}
function sanitizeUrl(url) {
	return url ? url.replace(/\/+$/, "") : url;
}
function getErrorMessage(error) {
	if (typeof error === "string") return error;
	else if (typeof (error === null || error === void 0 ? void 0 : error.message) === "string") return error.message;
}
var defaultFetchFunction = (input, options) => fetch(input, options);
function headersInitToRecord(headersInit) {
	return Object.fromEntries(new Headers(headersInit).entries());
}
var createFetchFunction = (fetchFn = defaultFetchFunction) => {
	return (input, init) => {
		let headers = headersInitToRecord(init === null || init === void 0 ? void 0 : init.headers);
		if (headers["x-api-key"]) headers = Object.assign({
			"x-tolgee-sdk-type": "JS",
			"x-tolgee-sdk-version": "prerelease"
		}, headers);
		return fetchFn(input, Object.assign(Object.assign({}, init), { headers }));
	};
};
var EventEmitter = (type, isActive) => {
	let handlers = [];
	return {
		listen(handler) {
			const handlerWrapper = (e) => {
				handler(e);
			};
			handlers.push(handlerWrapper);
			return { unsubscribe() {
				handlers = handlers.filter((i) => handlerWrapper !== i);
			} };
		},
		emit(data) {
			if (isActive()) handlers.forEach((handler) => handler({
				type,
				value: data
			}));
		}
	};
};
function EventEmitterCombined(isActive) {
	let handlers = [];
	let queue = [];
	function solveQueue() {
		if (queue.length === 0) return;
		const queueCopy = queue;
		queue = [];
		handlers.forEach((handler) => {
			handler(queueCopy);
		});
	}
	return Object.freeze({
		listen(handler) {
			const handlerWrapper = (events) => {
				handler(events);
			};
			handlers.push(handlerWrapper);
			return { unsubscribe() {
				handlers = handlers.filter((i) => handlerWrapper !== i);
			} };
		},
		emit(e, delayed) {
			if (isActive()) {
				if (isActive()) {
					queue.push(e);
					if (!delayed) solveQueue();
					else setTimeout(solveQueue, 0);
				}
			}
		}
	});
}
function Events() {
	let emitterActive = true;
	function isActive() {
		return emitterActive;
	}
	const self2 = Object.freeze({
		onPendingLanguageChange: EventEmitter("pendingLanguage", isActive),
		onLanguageChange: EventEmitter("language", isActive),
		onLoadingChange: EventEmitter("loading", isActive),
		onFetchingChange: EventEmitter("fetching", isActive),
		onInitialLoaded: EventEmitter("initialLoad", isActive),
		onRunningChange: EventEmitter("running", isActive),
		onCacheChange: EventEmitter("cache", isActive),
		onPermanentChange: EventEmitter("permanentChange", isActive),
		onError: EventEmitter("error", isActive),
		onUpdate: EventEmitterCombined(isActive),
		setEmitterActive(active) {
			emitterActive = active;
		},
		on: (event, handler) => {
			switch (event) {
				case "pendingLanguage": return self2.onPendingLanguageChange.listen(handler);
				case "language": return self2.onLanguageChange.listen(handler);
				case "loading": return self2.onLoadingChange.listen(handler);
				case "fetching": return self2.onFetchingChange.listen(handler);
				case "initialLoad": return self2.onInitialLoaded.listen(handler);
				case "running": return self2.onRunningChange.listen(handler);
				case "cache": return self2.onCacheChange.listen(handler);
				case "update": return self2.onUpdate.listen(handler);
				case "permanentChange": return self2.onPermanentChange.listen(handler);
				case "error": return self2.onError.listen(handler);
			}
		}
	});
	self2.onInitialLoaded.listen((e) => self2.onUpdate.emit(e, false));
	self2.onLanguageChange.listen((e) => self2.onUpdate.emit(e, false));
	self2.onCacheChange.listen((e) => self2.onUpdate.emit(e, true));
	return self2;
}
var RecordFetchError = class extends Error {
	constructor(descriptor, cause, isDev = false) {
		const { language, namespace } = descriptor;
		super(`Tolgee: Failed to fetch record for "${language}"${namespace && ` and "${namespace}"`}`);
		this.cause = cause;
		this.isDev = isDev;
		this.name = "RecordFetchError";
		this.language = language;
		this.namespace = namespace;
	}
};
var LanguageDetectorError = class extends Error {
	constructor(message, cause) {
		super(message);
		this.cause = cause;
		this.name = "LanguageDetectorError";
	}
};
var LanguageStorageError = class extends Error {
	constructor(message, cause) {
		super(message);
		this.cause = cause;
		this.name = "LanguageStorageError";
	}
};
var flattenTranslationsToMap = (data) => {
	const result = /* @__PURE__ */ new Map();
	Object.entries(data).forEach(([key, value]) => {
		if (value === void 0 || value === null) return;
		if (typeof value === "object") {
			flattenTranslationsToMap(value).forEach((flatValue, flatKey) => {
				result.set(key + "." + flatKey, flatValue);
			});
			return;
		}
		result.set(key, value);
	});
	return result;
};
var flattenTranslations = (data) => {
	return Object.fromEntries(flattenTranslationsToMap(data).entries());
};
var decodeCacheKey = (key) => {
	const [firstPart, ...rest] = key.split(":");
	return {
		language: firstPart,
		namespace: rest.join(":") || ""
	};
};
var encodeCacheKey = ({ language, namespace }) => {
	if (namespace) return `${language}:${namespace}`;
	else return language;
};
function Cache(events, backendGetRecord, backendGetDevRecord, withDefaultNs, isInitialLoading, fetchingObserver, loadingObserver) {
	const asyncRequests = /* @__PURE__ */ new Map();
	const cache = /* @__PURE__ */ new Map();
	let staticData = {};
	let version = 0;
	function addRecordInternal(descriptor, data, recordVersion) {
		const cacheKey = encodeCacheKey(descriptor);
		cache.set(cacheKey, {
			data: flattenTranslations(data),
			version: recordVersion
		});
		events.onCacheChange.emit(decodeCacheKey(cacheKey));
	}
	async function fetchProd(keyObject) {
		function handleError(e) {
			const error = new RecordFetchError(keyObject, e);
			events.onError.emit(error);
			console.error(error);
			throw error;
		}
		const dataFromBackend = backendGetRecord(keyObject);
		if (isPromise(dataFromBackend)) {
			const result = await dataFromBackend.catch(handleError);
			if (result !== void 0) return result;
		}
		const staticDataValue = staticData[encodeCacheKey(keyObject)];
		if (typeof staticDataValue === "function") try {
			return await staticDataValue();
		} catch (e) {
			handleError(e);
		}
		else return staticDataValue;
	}
	async function fetchData(keyObject, isDev) {
		let result = void 0;
		if (isDev) try {
			result = await backendGetDevRecord(keyObject);
		} catch (e) {
			const error = new RecordFetchError(keyObject, e, true);
			events.onError.emit(error);
			console.warn(error);
		}
		if (!result) result = await fetchProd(keyObject);
		return result;
	}
	const self2 = Object.freeze({
		addStaticData(data) {
			if (Array.isArray(data)) for (const record of data) {
				const key = encodeCacheKey(record);
				const existing = cache.get(key);
				if (!existing || existing.version === 0) addRecordInternal(record, flattenTranslations(record.data), 0);
			}
			else if (data) {
				staticData = Object.assign(Object.assign({}, staticData), data);
				Object.entries(data).forEach(([key, value]) => {
					if (typeof value !== "function") {
						const descriptor = decodeCacheKey(key);
						const existing = cache.get(key);
						if (!existing || existing.version === 0) addRecordInternal(descriptor, flattenTranslations(value), 0);
					}
				});
			}
		},
		invalidate() {
			asyncRequests.clear();
			version += 1;
		},
		addRecord(descriptor, data) {
			addRecordInternal(descriptor, flattenTranslations(data), version);
		},
		exists(descriptor, strict = false) {
			const record = cache.get(encodeCacheKey(descriptor));
			if (record && strict) return record.version === version;
			return Boolean(record);
		},
		getRecord(descriptor) {
			const descriptorWithNs = withDefaultNs(descriptor);
			const cacheKey = encodeCacheKey(descriptorWithNs);
			const cacheRecord = cache.get(cacheKey);
			if (!cacheRecord) return;
			return Object.assign(Object.assign({}, descriptorWithNs), {
				cacheKey,
				data: cacheRecord.data
			});
		},
		getAllRecords() {
			return Array.from(cache.entries()).map(([key]) => self2.getRecord(decodeCacheKey(key)));
		},
		getTranslation(descriptor, key) {
			var _a2;
			return (_a2 = cache.get(encodeCacheKey(descriptor))) === null || _a2 === void 0 ? void 0 : _a2.data[key];
		},
		getTranslationNs(namespaces, languages, key) {
			var _a2;
			for (const namespace of namespaces) for (const language of languages) {
				const value = (_a2 = cache.get(encodeCacheKey({
					language,
					namespace
				}))) === null || _a2 === void 0 ? void 0 : _a2.data[key];
				if (value !== void 0 && value !== null) return [namespace];
			}
			return unique(namespaces);
		},
		getTranslationFallback(namespaces, languages, key) {
			var _a2;
			for (const namespace of namespaces) for (const language of languages) {
				const value = (_a2 = cache.get(encodeCacheKey({
					language,
					namespace
				}))) === null || _a2 === void 0 ? void 0 : _a2.data[key];
				if (value !== void 0 && value !== null) return value;
			}
		},
		changeTranslation(descriptor, key, value) {
			var _a2;
			const record = (_a2 = cache.get(encodeCacheKey(descriptor))) === null || _a2 === void 0 ? void 0 : _a2.data;
			if (record) {
				record[key] = value;
				events.onCacheChange.emit(Object.assign(Object.assign({}, descriptor), { key }));
			}
		},
		isFetching(ns) {
			if (isInitialLoading()) return true;
			if (ns === void 0) return asyncRequests.size > 0;
			const namespaces = getFallbackArray(ns);
			return Boolean(Array.from(asyncRequests.keys()).find((key) => namespaces.includes(decodeCacheKey(key).namespace)));
		},
		isLoading(language, ns) {
			const namespaces = getFallbackArray(ns);
			if (isInitialLoading()) return true;
			const pendingCacheKeys = Array.from(asyncRequests.keys());
			return Boolean(pendingCacheKeys.find((key) => {
				const descriptor = decodeCacheKey(key);
				return (!namespaces.length || namespaces.includes(descriptor.namespace)) && !self2.exists({
					namespace: descriptor.namespace,
					language
				});
			}));
		},
		async loadRecords(descriptors, options) {
			const withPromises = descriptors.map((descriptor) => {
				const keyObject = withDefaultNs(descriptor);
				const cacheKey = encodeCacheKey(keyObject);
				if (options === null || options === void 0 ? void 0 : options.useCache) {
					if (self2.exists(keyObject, true)) return Object.assign(Object.assign({}, keyObject), {
						new: false,
						cacheKey,
						data: self2.getRecord(keyObject).data
					});
				}
				const existingPromise = asyncRequests.get(cacheKey);
				if (existingPromise) return Object.assign(Object.assign({}, keyObject), {
					new: false,
					promise: existingPromise,
					cacheKey
				});
				const dataPromise = fetchData(keyObject, !(options === null || options === void 0 ? void 0 : options.noDev)) || Promise.resolve(void 0);
				asyncRequests.set(cacheKey, dataPromise);
				return Object.assign(Object.assign({}, keyObject), {
					new: true,
					promise: dataPromise,
					cacheKey
				});
			});
			fetchingObserver.notify();
			loadingObserver.notify();
			const promisesToWait = withPromises.map((val) => val.promise).filter(Boolean);
			const fetchedData = await Promise.all(promisesToWait);
			withPromises.forEach((value) => {
				var _a2;
				if (value.promise) {
					value.data = flattenTranslations((_a2 = fetchedData[0]) !== null && _a2 !== void 0 ? _a2 : {});
					fetchedData.shift();
				}
				const promiseChanged = asyncRequests.get(value.cacheKey) !== value.promise;
				if (value.new && !promiseChanged) {
					asyncRequests.delete(value.cacheKey);
					if (value.data) self2.addRecord(value, value.data);
					else if (!self2.getRecord(value)) self2.addRecord(value, {});
				}
			});
			fetchingObserver.notify();
			loadingObserver.notify();
			return withPromises.map((val) => {
				var _a2;
				return {
					language: val.language,
					namespace: val.namespace,
					data: (_a2 = val.data) !== null && _a2 !== void 0 ? _a2 : {},
					cacheKey: val.cacheKey
				};
			});
		}
	});
	return self2;
}
function __rest(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
}
var defaultObserverOptions = {
	tagAttributes: {
		textarea: ["placeholder"],
		input: ["value", "placeholder"],
		img: ["alt"],
		"*": ["aria-label", "title"]
	},
	restrictedElements: ["script", "style"],
	highlightKeys: ["Alt"],
	highlightColor: "rgb(255, 0, 0)",
	highlightWidth: 5,
	inputPrefix: "%-%tolgee:",
	inputSuffix: "%-%",
	passToParent: ["option", "optgroup"],
	fullKeyEncode: false
};
var DEFAULT_FORMAT_ERROR = "invalid";
var DEFAULT_API_URL = "https://app.tolgee.io";
var DEFAULT_MISSING_TRANSLATION = ({ key }) => key;
var defaultValues = {
	observerOptions: defaultObserverOptions,
	observerType: "invisible",
	onFormatError: DEFAULT_FORMAT_ERROR,
	apiUrl: DEFAULT_API_URL,
	autoLoadRequiredData: true,
	fetch: createFetchFunction(),
	onTranslationMissing: DEFAULT_MISSING_TRANSLATION
};
var combineOptions = (...states) => {
	let result = {};
	states.forEach((state) => {
		result = Object.assign(Object.assign(Object.assign({}, result), state), { observerOptions: Object.assign(Object.assign({}, result.observerOptions), state === null || state === void 0 ? void 0 : state.observerOptions) });
	});
	return result;
};
function initState(options, previousState) {
	const initialOptions = combineOptions(defaultValues, previousState === null || previousState === void 0 ? void 0 : previousState.initialOptions, options);
	initialOptions.apiUrl = sanitizeUrl(initialOptions.apiUrl);
	if (options === null || options === void 0 ? void 0 : options.fetch) initialOptions.fetch = createFetchFunction(options.fetch);
	return {
		initialOptions,
		activeNamespaces: (previousState === null || previousState === void 0 ? void 0 : previousState.activeNamespaces) || /* @__PURE__ */ new Map(),
		language: previousState === null || previousState === void 0 ? void 0 : previousState.language,
		pendingLanguage: previousState === null || previousState === void 0 ? void 0 : previousState.language,
		isInitialLoading: false,
		isRunning: false
	};
}
function Plugins(getLanguage, getInitialOptions, getAvailableLanguages, getFallbackNamespaces, getTranslationNs, getTranslation, changeTranslation, events) {
	const plugins = { ui: void 0 };
	const instances = {
		formatters: [],
		finalFormatter: void 0,
		observer: void 0,
		devBackend: void 0,
		backends: [],
		ui: void 0,
		languageDetector: void 0,
		languageStorage: void 0
	};
	const onClick = async ({ keysAndDefaults, target }) => {
		var _a2;
		const withNs = keysAndDefaults.map(({ key, ns, defaultValue }) => {
			return {
				key,
				defaultValue,
				fallbackNamespaces: getFallbackNamespaces(ns),
				namespace: getTranslationNs({
					key,
					ns
				})[0],
				translation: getTranslation({
					key,
					ns
				})
			};
		});
		(_a2 = instances.ui) === null || _a2 === void 0 || _a2.handleElementClick(withNs, target);
	};
	const findPositions = (key, ns) => {
		var _a2;
		return ((_a2 = instances.observer) === null || _a2 === void 0 ? void 0 : _a2.findPositions(key, ns)) || [];
	};
	function translate(props) {
		const translation = getTranslation({
			key: props.key,
			ns: props.ns
		});
		return self2.formatTranslation(Object.assign(Object.assign({}, props), {
			translation,
			formatEnabled: true
		}));
	}
	function getCommonProps() {
		return { fetch: getInitialOptions().fetch };
	}
	function setObserver(observer) {
		instances.observer = observer === null || observer === void 0 ? void 0 : observer();
	}
	function hasObserver() {
		return Boolean(instances.observer);
	}
	function addFormatter(formatter2) {
		if (formatter2) instances.formatters.push(formatter2);
	}
	function setFinalFormatter(formatter2) {
		instances.finalFormatter = formatter2;
	}
	function setUi(ui) {
		plugins.ui = ui;
	}
	function hasUi() {
		return Boolean(plugins.ui);
	}
	function setLanguageStorage(storage) {
		instances.languageStorage = storage;
	}
	function setLanguageDetector(detector) {
		instances.languageDetector = detector;
	}
	function storageLoadLanguage() {
		return handleRegularOrAsyncErr(events.onError, (e) => new LanguageStorageError("Tolgee: Failed to load language", e), () => {
			var _a2;
			return (_a2 = instances.languageStorage) === null || _a2 === void 0 ? void 0 : _a2.getLanguage(getCommonProps());
		});
	}
	function detectLanguage2() {
		if (!instances.languageDetector) return;
		const availableLanguages = getAvailableLanguages();
		return handleRegularOrAsyncErr(events.onError, (e) => new LanguageDetectorError("Tolgee: Failed to detect language", e), () => {
			var _a2;
			return (_a2 = instances.languageDetector) === null || _a2 === void 0 ? void 0 : _a2.getLanguage(Object.assign({ availableLanguages }, getCommonProps()));
		});
	}
	function addBackend(backend) {
		if (backend) instances.backends.push(backend);
	}
	function setDevBackend(backend) {
		instances.devBackend = backend;
	}
	function addPlugin(tolgeeInstance, plugin) {
		plugin(tolgeeInstance, Object.freeze({
			setFinalFormatter,
			addFormatter,
			setObserver,
			hasObserver,
			setUi,
			hasUi,
			setDevBackend,
			addBackend,
			setLanguageDetector,
			setLanguageStorage
		}));
	}
	const self2 = Object.freeze({
		addPlugin,
		findPositions,
		run() {
			var _a2, _b;
			const { apiKey, apiUrl, projectId, branch, observerOptions, tagNewKeys, filterTag } = getInitialOptions();
			instances.ui = (_a2 = plugins.ui) === null || _a2 === void 0 ? void 0 : _a2.call(plugins, {
				apiKey,
				apiUrl,
				projectId,
				branch,
				highlight: self2.highlight,
				changeTranslation,
				findPositions,
				onPermanentChange: (data) => events.onPermanentChange.emit(data),
				tagNewKeys,
				filterTag
			});
			(_b = instances.observer) === null || _b === void 0 || _b.run({
				mouseHighlight: Boolean(instances.ui),
				options: observerOptions,
				translate,
				onClick
			});
		},
		stop() {
			var _a2;
			instances.ui = void 0;
			(_a2 = instances.observer) === null || _a2 === void 0 || _a2.stop();
		},
		getLanguageStorage() {
			return instances.languageStorage;
		},
		getInitialLanguage() {
			const availableLanguages = getAvailableLanguages();
			return valueOrPromise(storageLoadLanguage(), (language) => {
				if ((!availableLanguages || availableLanguages.includes(language)) && language) return language;
				return detectLanguage2();
			});
		},
		setStoredLanguage(language) {
			return handleRegularOrAsyncErr(events.onError, (e) => new LanguageStorageError("Tolgee: Failed to store language", e), () => {
				var _a2;
				return (_a2 = instances.languageStorage) === null || _a2 === void 0 ? void 0 : _a2.setLanguage(language, getCommonProps());
			});
		},
		getDevBackend() {
			return instances.devBackend;
		},
		getBackendRecord: async ({ language, namespace }) => {
			for (const backend of instances.backends) {
				const data = await backend.getRecord(Object.assign({
					language,
					namespace
				}, getCommonProps()));
				if (data !== void 0) return data;
			}
		},
		getBackendDevRecord: async ({ language, namespace }) => {
			var _a2;
			const { apiKey, apiUrl, projectId, branch, filterTag } = getInitialOptions();
			if (!apiKey || !apiUrl || !self2.hasDevBackend()) return;
			return (_a2 = instances.devBackend) === null || _a2 === void 0 ? void 0 : _a2.getRecord(Object.assign({
				apiKey,
				apiUrl,
				projectId,
				branch,
				language,
				namespace,
				filterTag
			}, getCommonProps()));
		},
		getLanguageDetector() {
			return instances.languageDetector;
		},
		retranslate() {
			var _a2;
			(_a2 = instances.observer) === null || _a2 === void 0 || _a2.retranslate();
		},
		highlight: (key, ns) => {
			var _a2, _b;
			return ((_b = (_a2 = instances.observer) === null || _a2 === void 0 ? void 0 : _a2.highlight) === null || _b === void 0 ? void 0 : _b.call(_a2, key, ns)) || { unhighlight() {} };
		},
		unwrap(text) {
			var _a2;
			if (instances.observer) return (_a2 = instances.observer) === null || _a2 === void 0 ? void 0 : _a2.unwrap(text);
			return {
				text,
				keys: []
			};
		},
		wrap(params) {
			var _a2;
			if (instances.observer) return (_a2 = instances.observer) === null || _a2 === void 0 ? void 0 : _a2.wrap(params);
			return params.translation;
		},
		hasDevBackend() {
			return Boolean(self2.getDevBackend());
		},
		formatTranslation(_a2) {
			var _b;
			var { formatEnabled } = _a2, props = __rest(_a2, ["formatEnabled"]);
			const { key, translation, defaultValue, noWrap, params, ns, orEmpty } = props;
			const formattableTranslation = translation !== null && translation !== void 0 ? translation : defaultValue;
			let translationMissingResult = "";
			if (translation === void 0 || translation === null) translationMissingResult = getInitialOptions().onTranslationMissing(props);
			let result = formattableTranslation !== null && formattableTranslation !== void 0 ? formattableTranslation : orEmpty ? "" : translationMissingResult;
			const language = getLanguage();
			const isFormatEnabled = formatEnabled || !((_b = instances.observer) === null || _b === void 0 ? void 0 : _b.outputNotFormattable);
			const wrap = (result2) => {
				if (instances.observer && !noWrap) return instances.observer.wrap({
					key,
					translation: result2,
					defaultValue,
					params,
					ns
				});
				return result2;
			};
			result = wrap(result);
			try {
				if (formattableTranslation && language && isFormatEnabled) for (const formatter2 of instances.formatters) result = formatter2.format({
					translation: result,
					language,
					params
				});
				if (instances.finalFormatter && formattableTranslation && language && isFormatEnabled) result = instances.finalFormatter.format({
					translation: result,
					language,
					params
				});
			} catch (e) {
				console.error(e);
				const errorMessage = getErrorMessage(e) || DEFAULT_FORMAT_ERROR;
				const onFormatError = getInitialOptions().onFormatError;
				const formatErrorType = typeof onFormatError;
				if (formatErrorType === "string") result = onFormatError;
				else if (formatErrorType === "function") result = onFormatError(errorMessage, props);
				else result = DEFAULT_FORMAT_ERROR;
				result = wrap(result);
			}
			return result;
		}
	});
	return self2;
}
var ValueObserver = (initialValue, valueGetter, handler) => {
	let previousValue = initialValue;
	return Object.freeze({
		init(value) {
			previousValue = value;
		},
		notify() {
			const value = valueGetter();
			if (previousValue !== value) handler(value);
			previousValue = value;
		}
	});
};
function State(onLanguageChange, onPendingLanguageChange, onRunningChange) {
	let state = initState();
	let devCredentials = void 0;
	const self2 = Object.freeze({
		init(options) {
			state = initState(options, state);
		},
		isRunning() {
			return state.isRunning;
		},
		setRunning(value) {
			if (state.isRunning !== value) {
				state.isRunning = value;
				onRunningChange.emit(value);
			}
		},
		isInitialLoading() {
			return state.isInitialLoading;
		},
		setInitialLoading(value) {
			state.isInitialLoading = value;
		},
		getLanguage() {
			return state.language || state.initialOptions.language;
		},
		setLanguage(language) {
			if (state.language !== language) {
				state.language = language;
				onLanguageChange.emit(language);
			}
		},
		getPendingLanguage() {
			return state.pendingLanguage || self2.getLanguage();
		},
		setPendingLanguage(language) {
			if (state.pendingLanguage !== language) {
				state.pendingLanguage = language;
				onPendingLanguageChange.emit(language);
			}
		},
		getInitialOptions() {
			return Object.assign(Object.assign({}, state.initialOptions), devCredentials);
		},
		addActiveNs(ns) {
			getFallbackArray(ns).forEach((namespace) => {
				const value = state.activeNamespaces.get(namespace);
				if (value !== void 0) state.activeNamespaces.set(namespace, value + 1);
				else state.activeNamespaces.set(namespace, 1);
			});
		},
		removeActiveNs(ns) {
			getFallbackArray(ns).forEach((namespace) => {
				const value = state.activeNamespaces.get(namespace);
				if (value !== void 0 && value > 1) state.activeNamespaces.set(namespace, value - 1);
				else state.activeNamespaces.delete(namespace);
			});
		},
		getRequiredNamespaces() {
			return unique([
				self2.getDefaultNs(),
				...state.initialOptions.ns || [],
				...getFallbackArray(state.initialOptions.fallbackNs),
				...state.activeNamespaces.keys()
			]);
		},
		getFallbackLangs(lang) {
			const language = lang || self2.getLanguage();
			if (!language) return [];
			return unique([language, ...getFallbackFromStruct(language, state.initialOptions.fallbackLanguage)]);
		},
		getFallbackNs() {
			return getFallbackArray(state.initialOptions.fallbackNs);
		},
		getNs() {
			var _a2, _b;
			return ((_a2 = state.initialOptions.ns) === null || _a2 === void 0 ? void 0 : _a2.length) ? state.initialOptions.ns : [(_b = state.initialOptions.defaultNs) !== null && _b !== void 0 ? _b : ""];
		},
		getDefaultNs(ns) {
			var _a2, _b, _c;
			return ns === void 0 ? (_c = (_a2 = state.initialOptions.defaultNs) !== null && _a2 !== void 0 ? _a2 : (_b = state.initialOptions.ns) === null || _b === void 0 ? void 0 : _b[0]) !== null && _c !== void 0 ? _c : "" : ns;
		},
		getAvailableLanguages() {
			if (state.initialOptions.availableLanguages) return state.initialOptions.availableLanguages;
			else if (state.initialOptions.staticData) {
				const languagesFromStaticData = Object.keys(state.initialOptions.staticData).map((key) => decodeCacheKey(key).language);
				return Array.from(new Set(languagesFromStaticData));
			}
		},
		getAvailableNs() {
			return state.initialOptions.availableNs;
		},
		withDefaultNs(descriptor) {
			return {
				namespace: descriptor.namespace === void 0 ? self2.getDefaultNs() : descriptor.namespace,
				language: descriptor.language
			};
		},
		overrideCredentials(credentials) {
			if (credentials) devCredentials = Object.assign(Object.assign({}, credentials), { apiUrl: sanitizeUrl(credentials.apiUrl) });
			else devCredentials = void 0;
		}
	});
	return self2;
}
function parseCombinedOptions(_a2) {
	var { ns, noWrap, orEmpty, params, language } = _a2, rest = __rest(_a2, [
		"ns",
		"noWrap",
		"orEmpty",
		"params",
		"language"
	]);
	return Object.assign(Object.assign({}, {
		ns,
		noWrap,
		orEmpty,
		language
	}), { params: Object.assign({}, rest) });
}
var getTranslateProps = (keyOrProps, ...params) => {
	let result = {};
	let options;
	if (keyOrProps != null && typeof keyOrProps === "object") result = keyOrProps;
	else {
		result.key = keyOrProps;
		if (typeof params[0] === "string") {
			result.defaultValue = params[0];
			options = params[1];
		} else if (typeof params[0] === "object") options = params[0];
	}
	if (options) result = Object.assign(Object.assign({}, parseCombinedOptions(options)), result);
	return result;
};
function Controller({ options }) {
	const events = Events();
	const fetchingObserver = ValueObserver(false, () => cache.isFetching(), events.onFetchingChange.emit);
	const loadingObserver = ValueObserver(false, () => self2.isLoading(), events.onLoadingChange.emit);
	const state = State(events.onLanguageChange, events.onPendingLanguageChange, events.onRunningChange);
	const pluginService = Plugins(state.getLanguage, state.getInitialOptions, state.getAvailableLanguages, getDefaultAndFallbackNs, getTranslationNs, getTranslation, changeTranslation, events);
	const cache = Cache(events, pluginService.getBackendRecord, pluginService.getBackendDevRecord, state.withDefaultNs, state.isInitialLoading, fetchingObserver, loadingObserver);
	if (options) init(options);
	let runPromise;
	events.onUpdate.listen(() => {
		if (state.isRunning()) pluginService.retranslate();
	});
	function getFallbackNs() {
		return state.getFallbackNs();
	}
	function getDefaultNs(ns) {
		return state.getDefaultNs(ns);
	}
	function getDefaultAndFallbackNs(ns) {
		return unique([...getFallbackArray(getDefaultNs(ns)), ...getFallbackNs()]);
	}
	function getRequiredNamespaces(ns) {
		return unique([...getFallbackArray(ns !== null && ns !== void 0 ? ns : getDefaultNs()), ...state.getRequiredNamespaces()]);
	}
	function changeTranslation(descriptor, key, value) {
		const keyObject = state.withDefaultNs(descriptor);
		const previousValue = cache.getTranslation(keyObject, key);
		cache.changeTranslation(keyObject, key, value);
		return { revert() {
			cache.changeTranslation(keyObject, key, previousValue);
		} };
	}
	function init(options2) {
		state.init(options2);
		cache.addStaticData(state.getInitialOptions().staticData);
	}
	function getRequiredDescriptors(lang, ns) {
		const languages = state.getFallbackLangs(lang);
		const namespaces = getRequiredNamespaces(ns);
		const result = [];
		languages.forEach((language) => {
			namespaces.forEach((namespace) => {
				result.push({
					language,
					namespace
				});
			});
		});
		return result;
	}
	function getMissingDescriptors(lang, ns) {
		return getRequiredDescriptors(lang, ns).filter((descriptor) => !cache.exists(descriptor, true));
	}
	function getMatrixRecords(options2) {
		let languages = [];
		let namespaces = [];
		if (Array.isArray(options2.languages)) languages = options2.languages;
		else if (options2.languages === "all") {
			const availableLanguages = self2.getAvailableLanguages();
			if (!availableLanguages) throw new Error(missingOptionError("availableLanguages"));
			languages = availableLanguages;
		}
		if (Array.isArray(options2.namespaces)) namespaces = options2.namespaces;
		else if (options2.namespaces === "all") {
			const availableNs = self2.getAvailableNs();
			if (!availableNs) throw new Error(missingOptionError("availableNs"));
			namespaces = availableNs;
		}
		const records = [];
		languages.forEach((language) => {
			namespaces.forEach((namespace) => {
				records.push({
					language,
					namespace
				});
			});
		});
		return records;
	}
	function getTranslationNs({ key, ns }) {
		const languages = state.getFallbackLangs();
		const namespaces = getDefaultAndFallbackNs(ns !== null && ns !== void 0 ? ns : void 0);
		return cache.getTranslationNs(namespaces, languages, key);
	}
	function getTranslation({ key, ns, language }) {
		const namespaces = getDefaultAndFallbackNs(ns !== null && ns !== void 0 ? ns : void 0);
		const languages = state.getFallbackLangs(language);
		return cache.getTranslationFallback(namespaces, languages, key);
	}
	function loadInitial() {
		const data = valueOrPromise(initializeLanguage(), () => {
			const missingDescriptors = getMissingDescriptors();
			if (missingDescriptors.length && state.getInitialOptions().autoLoadRequiredData) return cache.loadRecords(missingDescriptors, { useCache: true });
		});
		if (isPromise(data)) {
			state.setInitialLoading(true);
			fetchingObserver.notify();
			loadingObserver.notify();
			return Promise.resolve(data).then(() => {
				state.setInitialLoading(false);
				fetchingObserver.notify();
				loadingObserver.notify();
				events.onInitialLoaded.emit();
			});
		} else events.onInitialLoaded.emit();
	}
	function initializeLanguage() {
		if (state.getLanguage()) return;
		return valueOrPromise(pluginService.getInitialLanguage(), (lang) => {
			const language = lang || state.getInitialOptions().defaultLanguage;
			language && state.setLanguage(language);
		});
	}
	function checkCorrectConfiguration() {
		if (pluginService.getLanguageDetector() || pluginService.getLanguageStorage()) {
			if (!state.getAvailableLanguages()) throw new Error(missingOptionError("availableLanguages"));
		}
		if (!state.getLanguage() && !state.getInitialOptions().defaultLanguage) throw new Error(missingOptionError(["defaultLanguage", "language"]));
	}
	const self2 = Object.freeze(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, events), state), pluginService), cache), {
		init,
		getTranslation,
		changeTranslation,
		getTranslationNs,
		getDefaultAndFallbackNs,
		findPositions: pluginService.findPositions,
		getRequiredDescriptors,
		async changeLanguage(language) {
			if (state.getPendingLanguage() === language && state.getLanguage() === language) return;
			state.setPendingLanguage(language);
			if (state.isRunning() && state.getInitialOptions().autoLoadRequiredData) await cache.loadRecords(getRequiredDescriptors(language), { useCache: true });
			if (language === state.getPendingLanguage()) {
				state.setLanguage(language);
				await pluginService.setStoredLanguage(language);
			}
		},
		async addActiveNs(ns, forget) {
			if (!forget) state.addActiveNs(ns);
			if (state.isRunning()) await cache.loadRecords(getRequiredDescriptors(void 0, ns), { useCache: true });
		},
		async loadRecord(descriptor, options2) {
			var _a2;
			return (_a2 = (await self2.loadRecords([descriptor], options2))[0]) === null || _a2 === void 0 ? void 0 : _a2.data;
		},
		isLoading(ns) {
			return cache.isLoading(state.getLanguage(), ns);
		},
		isLoaded(ns) {
			const language = state.getLanguage();
			if (!language) return false;
			const languages = state.getFallbackLangs(language);
			const namespaces = getRequiredNamespaces(ns);
			const result = [];
			languages.forEach((language2) => {
				namespaces.forEach((namespace) => {
					if (!cache.exists({
						language: language2,
						namespace
					})) result.push({
						language: language2,
						namespace
					});
				});
			});
			return result.length === 0;
		},
		t: (...args) => {
			const params = getTranslateProps(...args);
			const translation = getTranslation(params);
			return pluginService.formatTranslation(Object.assign(Object.assign({}, params), { translation }));
		},
		isDev() {
			return Boolean(state.getInitialOptions().apiKey && state.getInitialOptions().apiUrl);
		},
		async loadRequired(options2) {
			if (!(options2 === null || options2 === void 0 ? void 0 : options2.language)) await initializeLanguage();
			const requiredRecords = getRequiredDescriptors(options2 === null || options2 === void 0 ? void 0 : options2.language);
			return self2.loadRecords(requiredRecords, options2);
		},
		async loadMatrix(options2) {
			const records = getMatrixRecords(options2);
			return self2.loadRecords(records, options2);
		},
		run() {
			checkCorrectConfiguration();
			if (!state.isRunning()) {
				state.setRunning(true);
				pluginService.run();
				runPromise = loadInitial();
			}
			return Promise.resolve(runPromise);
		},
		stop() {
			if (state.isRunning()) {
				pluginService.stop();
				state.setRunning(false);
			}
		}
	}));
	return self2;
}
function createTolgee(options) {
	const controller = Controller({ options });
	if (controller.isDev()) controller.invalidate();
	function withRestart(callback) {
		const wasRunning = controller.isRunning();
		wasRunning && controller.stop();
		callback();
		controller.isDev() && controller.invalidate();
		wasRunning && controller.run();
	}
	const self2 = Object.freeze({
		on: controller.on,
		setEmitterActive: controller.setEmitterActive,
		getLanguage: controller.getLanguage,
		getPendingLanguage: controller.getPendingLanguage,
		changeLanguage: controller.changeLanguage,
		changeTranslation: controller.changeTranslation,
		addActiveNs: controller.addActiveNs,
		removeActiveNs: controller.removeActiveNs,
		loadRequired: controller.loadRequired,
		loadMatrix: controller.loadMatrix,
		loadRecords: controller.loadRecords,
		loadRecord: controller.loadRecord,
		addStaticData: controller.addStaticData,
		getRecord: controller.getRecord,
		getAllRecords: controller.getAllRecords,
		isLoaded: controller.isLoaded,
		getRequiredDescriptors: controller.getRequiredDescriptors,
		isInitialLoading: controller.isInitialLoading,
		isLoading: controller.isLoading,
		isFetching: controller.isFetching,
		isRunning: controller.isRunning,
		run: controller.run,
		stop: controller.stop,
		t: controller.t,
		highlight: controller.highlight,
		findPositions: controller.findPositions,
		getInitialOptions: controller.getInitialOptions,
		isDev: controller.isDev,
		wrap: controller.wrap,
		unwrap: controller.unwrap,
		overrideCredentials(credentials) {
			withRestart(() => controller.overrideCredentials(credentials));
		},
		addPlugin(plugin) {
			if (plugin) withRestart(() => controller.addPlugin(self2, plugin));
		},
		updateOptions(options2) {
			if (options2) withRestart(() => controller.init(options2));
		}
	});
	return self2;
}
var TolgeeCore = () => {
	const state = {
		plugins: [],
		options: {}
	};
	const tolgeeChain = Object.freeze({
		use(plugin) {
			state.plugins.push(plugin);
			return tolgeeChain;
		},
		updateDefaults(options) {
			state.options = combineOptions(state.options, options);
			return tolgeeChain;
		},
		init(options) {
			const tolgee = createTolgee(combineOptions(state.options, options));
			state.plugins.forEach(tolgee.addPlugin);
			return tolgee;
		}
	});
	return tolgeeChain;
};
var ERROR_PARAM_EMPTY = 0, ERROR_UNEXPECTED_CHAR = 1, ERROR_UNEXPECTED_END = 2;
var FormatError = class extends Error {
	constructor(code, index, text) {
		let error;
		let hint = "";
		if (code === ERROR_PARAM_EMPTY) error = "Empty parameter";
		else if (code === ERROR_UNEXPECTED_CHAR) {
			error = "Unexpected character";
			hint = "Did you forget to use FormatIcu to render ICU message syntax?";
		} else error = "Unexpected end";
		super(`Tolgee parser: ${error} at ${index} in "${text}"` + (hint ? "\n" + hint : ""));
		this.code = code;
		this.index = index;
	}
};
function isWhitespace(ch) {
	return /\s/.test(ch);
}
var STATE_TEXT = 0, STATE_ESCAPE_MAYBE = 1, STATE_ESCAPE = 2, STATE_PARAM = 3, STATE_PARAM_AFTER = 4;
var END_STATES = new Set([
	STATE_ESCAPE,
	STATE_ESCAPE_MAYBE,
	STATE_TEXT
]);
var CHAR_ESCAPE = "'";
var ESCAPABLE = new Set([
	"{",
	"}",
	CHAR_ESCAPE
]);
var isAllowedInParam = (char) => {
	return /[0-9a-zA-Z_]/.test(char);
};
function formatParser(translation) {
	let state = STATE_TEXT;
	let text = "";
	let param = "";
	let ch = "";
	const texts = [];
	const params = [];
	let i = 0;
	function parsingError(code) {
		throw new FormatError(code, i, translation);
	}
	const addText = () => {
		texts.push(text);
		text = "";
	};
	const addParamChar = () => {
		if (!isAllowedInParam(ch)) parsingError(ERROR_UNEXPECTED_CHAR);
		param += ch;
	};
	const addParam = () => {
		if (param === "") parsingError(ERROR_PARAM_EMPTY);
		params.push(param);
		param = "";
	};
	for (i = 0; i < translation.length; i++) {
		ch = translation[i];
		switch (state) {
			case STATE_TEXT:
				if (ch === CHAR_ESCAPE) {
					text += ch;
					state = STATE_ESCAPE_MAYBE;
				} else if (ch === "{") {
					addText();
					state = STATE_PARAM;
				} else {
					text += ch;
					state = STATE_TEXT;
				}
				break;
			case STATE_ESCAPE_MAYBE:
				if (ESCAPABLE.has(ch)) {
					text = text.slice(0, -1) + ch;
					state = STATE_ESCAPE;
				} else {
					text += ch;
					state = STATE_TEXT;
				}
				break;
			case STATE_ESCAPE:
				if (ch === CHAR_ESCAPE) state = STATE_TEXT;
				else {
					text += ch;
					state = STATE_ESCAPE;
				}
				break;
			case STATE_PARAM:
				if (ch === "}") {
					addParam();
					state = STATE_TEXT;
				} else if (!isWhitespace(ch)) {
					addParamChar();
					state = STATE_PARAM;
				} else if (param !== "") {
					addParam();
					state = STATE_PARAM_AFTER;
				}
				break;
			case STATE_PARAM_AFTER: if (ch == "}") state = STATE_TEXT;
			else if (isWhitespace(ch)) state = STATE_PARAM_AFTER;
			else parsingError(ERROR_UNEXPECTED_CHAR);
		}
	}
	if (!END_STATES.has(state)) parsingError(ERROR_UNEXPECTED_END);
	addText();
	return [texts, params];
}
function formatter(translation, params) {
	const [texts, pars] = formatParser(translation);
	const result = [texts[0]];
	for (let i = 1; i < texts.length; i++) {
		const parameter = params === null || params === void 0 ? void 0 : params[pars[i - 1]];
		if (parameter === void 0) throw new Error(`Missing parameter "${pars[i - 1]}" in "${translation}"`);
		result.push(String(parameter));
		result.push(texts[i]);
	}
	return result.join("");
}
function createFormatSimple() {
	return { format: ({ translation, params }) => formatter(translation, params) };
}
var FormatSimple = () => (tolgee, tools) => {
	tools.setFinalFormatter(createFormatSimple());
	return tolgee;
};
String(Number.MAX_SAFE_INTEGER);
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var text_min = {};
(function(scope) {
	function B(r, e) {
		var f;
		return r instanceof Buffer ? f = r : f = Buffer.from(r.buffer, r.byteOffset, r.byteLength), f.toString(e);
	}
	var w = function(r) {
		return Buffer.from(r);
	};
	function h(r) {
		for (var e = 0, f = Math.min(256 * 256, r.length + 1), n = new Uint16Array(f), i = [], o = 0;;) {
			var t = e < r.length;
			if (!t || o >= f - 1) {
				var m = n.subarray(0, o);
				if (i.push(String.fromCharCode.apply(null, m)), !t) return i.join("");
				r = r.subarray(e), e = 0, o = 0;
			}
			var a = r[e++];
			if ((a & 128) === 0) n[o++] = a;
			else if ((a & 224) === 192) {
				var d = r[e++] & 63;
				n[o++] = (a & 31) << 6 | d;
			} else if ((a & 240) === 224) {
				var d = r[e++] & 63, l = r[e++] & 63;
				n[o++] = (a & 31) << 12 | d << 6 | l;
			} else if ((a & 248) === 240) {
				var d = r[e++] & 63, l = r[e++] & 63, R = r[e++] & 63, c = (a & 7) << 18 | d << 12 | l << 6 | R;
				c > 65535 && (c -= 65536, n[o++] = c >>> 10 & 1023 | 55296, c = 56320 | c & 1023), n[o++] = c;
			}
		}
	}
	function F(r) {
		for (var e = 0, f = r.length, n = 0, i = Math.max(32, f + (f >>> 1) + 7), o = new Uint8Array(i >>> 3 << 3); e < f;) {
			var t = r.charCodeAt(e++);
			if (t >= 55296 && t <= 56319) {
				if (e < f) {
					var s = r.charCodeAt(e);
					(s & 64512) === 56320 && (++e, t = ((t & 1023) << 10) + (s & 1023) + 65536);
				}
				if (t >= 55296 && t <= 56319) continue;
			}
			if (n + 4 > o.length) {
				i += 8, i *= 1 + e / r.length * 2, i = i >>> 3 << 3;
				var m = new Uint8Array(i);
				m.set(o), o = m;
			}
			if ((t & 4294967168) === 0) {
				o[n++] = t;
				continue;
			} else if ((t & 4294965248) === 0) o[n++] = t >>> 6 & 31 | 192;
			else if ((t & 4294901760) === 0) o[n++] = t >>> 12 & 15 | 224, o[n++] = t >>> 6 & 63 | 128;
			else if ((t & 4292870144) === 0) o[n++] = t >>> 18 & 7 | 240, o[n++] = t >>> 12 & 63 | 128, o[n++] = t >>> 6 & 63 | 128;
			else continue;
			o[n++] = t & 63 | 128;
		}
		return o.slice ? o.slice(0, n) : o.subarray(0, n);
	}
	var u = "Failed to ", p = function(r, e, f) {
		if (r) throw new Error("".concat(u).concat(e, ": the '").concat(f, "' option is unsupported."));
	};
	var x = typeof Buffer == "function" && Buffer.from;
	var A = x ? w : F;
	function v() {
		this.encoding = "utf-8";
	}
	v.prototype.encode = function(r, e) {
		return p(e && e.stream, "encode", "stream"), A(r);
	};
	function U(r) {
		var e;
		try {
			var f = new Blob([r], { type: "text/plain;charset=UTF-8" });
			e = URL.createObjectURL(f);
			var n = new XMLHttpRequest();
			return n.open("GET", e, false), n.send(), n.responseText;
		} finally {
			e && URL.revokeObjectURL(e);
		}
	}
	var O = !x && typeof Blob == "function" && typeof URL == "function" && typeof URL.createObjectURL == "function", S = [
		"utf-8",
		"utf8",
		"unicode-1-1-utf-8"
	], T = h;
	x ? T = B : O && (T = function(r) {
		try {
			return U(r);
		} catch (e) {
			return h(r);
		}
	});
	var y = "construct 'TextDecoder'", E = "".concat(u, " ").concat(y, ": the ");
	function g(r, e) {
		p(e && e.fatal, y, "fatal"), r = r || "utf-8";
		var f;
		if (x ? f = Buffer.isEncoding(r) : f = S.indexOf(r.toLowerCase()) !== -1, !f) throw new RangeError("".concat(E, " encoding label provided ('").concat(r, "') is invalid."));
		this.encoding = r, this.fatal = false, this.ignoreBOM = false;
	}
	g.prototype.decode = function(r, e) {
		p(e && e.stream, "decode", "stream");
		var f;
		return r instanceof Uint8Array ? f = r : r.buffer instanceof ArrayBuffer ? f = new Uint8Array(r.buffer) : f = new Uint8Array(r), T(f, this.encoding);
	};
	scope.TextEncoder = scope.TextEncoder || v;
	scope.TextDecoder = scope.TextDecoder || g;
})(typeof window !== "undefined" ? window : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : commonjsGlobal);
var FastTextEncoding = _mergeNamespaces({
	__proto__: null,
	default: text_min
}, [text_min]);
(_a = console.assert) == null || _a.call(console, FastTextEncoding);
RegExp(`([${["‌", "‍"].join("")}]{9})+`, "g");
function listen(type, callback) {
	const handler = (e) => {
		var _a2, _b;
		if (type.includes((_a2 = e.data) == null ? void 0 : _a2.type)) callback((_b = e.data) == null ? void 0 : _b.data);
	};
	window.addEventListener("message", handler, false);
	return { unsubscribe() {
		window.removeEventListener("message", handler);
	} };
}
function sendAndRecieve({ message, recievingMessage, data, attempts = 1, timeout = 300 }) {
	let cancelled = false;
	const makeAttempt = () => new Promise((resolve, reject) => {
		const listener = listen(recievingMessage, handler);
		window.postMessage({
			type: message,
			data
		}, window.origin);
		const timer = setTimeout(expire, timeout);
		function handler(data2) {
			clearTimeout(timer);
			removeEventListener();
			resolve(data2);
		}
		function removeEventListener() {
			listener.unsubscribe();
		}
		function expire() {
			removeEventListener();
			reject();
		}
	});
	const getData = async () => {
		for (let i = 0; i < attempts; i++) {
			if (cancelled) return new Promise(() => {});
			try {
				return await makeAttempt();
			} catch (e) {
				continue;
			}
		}
		if (!cancelled) throw `Didn't recieve ${recievingMessage.join(" or ")} in time.`;
		return new Promise(() => {});
	};
	return {
		cancel() {
			cancelled = true;
		},
		promise: getData()
	};
}
function Handshaker() {
	let cancelLast = void 0;
	async function update(data) {
		cancelLast?.();
		const { cancel, promise } = sendAndRecieve({
			message: "TOLGEE_READY",
			recievingMessage: ["TOLGEE_PLUGIN_READY", "TOLGEE_PLUGIN_UPDATED"],
			data,
			attempts: 4
		});
		cancelLast = cancel;
		return promise;
	}
	return { update };
}
var IN_CONTEXT_FILE = "tolgee-in-context-tools.umd.min.js";
var IN_CONTEXT_UMD_NAME = "@tolgee/in-context-tools";
var IN_CONTEXT_EXPORT_NAME = "InContextTools";
var CDN_URL = "https://cdn.jsdelivr.net/npm";
function injectScript(src) {
	return new Promise((resolve, reject) => {
		const script = document.createElement("script");
		script.src = src;
		script.addEventListener("load", () => resolve());
		script.addEventListener("error", (e) => reject(e.error));
		document.head.appendChild(script);
	});
}
var injectPromise = null;
function loadInContextLib(version) {
	if (!injectPromise) injectPromise = injectScript(`${CDN_URL}/@tolgee/web@${version}/dist/${IN_CONTEXT_FILE}`).then(() => {
		return window[IN_CONTEXT_UMD_NAME][IN_CONTEXT_EXPORT_NAME];
	});
	return injectPromise;
}
var API_KEY_LOCAL_STORAGE = "__tolgee_apiKey";
var API_URL_LOCAL_STORAGE = "__tolgee_apiUrl";
var BRANCH_LOCAL_STORAGE = "__tolgee_branch";
function getCredentials() {
	const apiKey = sessionStorage.getItem(API_KEY_LOCAL_STORAGE) || void 0;
	const apiUrl = sessionStorage.getItem(API_URL_LOCAL_STORAGE) || void 0;
	const branch = sessionStorage.getItem(BRANCH_LOCAL_STORAGE) || void 0;
	if (!apiKey || !apiUrl) return;
	return __spreadValues({
		apiKey,
		apiUrl
	}, branch !== void 0 ? { branch } : {});
}
function clearSessionStorage() {
	sessionStorage.removeItem(API_KEY_LOCAL_STORAGE);
	sessionStorage.removeItem(API_URL_LOCAL_STORAGE);
	sessionStorage.removeItem(BRANCH_LOCAL_STORAGE);
}
function onDocumentReady(callback) {
	if (document.readyState !== "loading") Promise.resolve().then(() => {
		callback();
	});
	else if (document.addEventListener) document.addEventListener("DOMContentLoaded", callback);
}
var BrowserExtensionPlugin = () => (tolgee) => tolgee;
var sessionStorageAvailable = () => {
	if (typeof window === "undefined") return false;
	try {
		return typeof sessionStorage !== "undefined" && sessionStorage;
	} catch (err) {
		console.error("sessionStorage not available", err);
		return false;
	}
};
if (sessionStorageAvailable()) BrowserExtensionPlugin = () => (tolgee) => {
	const handshaker = Handshaker();
	const getConfig = () => ({
		uiPresent: true,
		uiVersion: void 0,
		mode: tolgee.isDev() ? "development" : "production",
		config: {
			apiUrl: tolgee.getInitialOptions().apiUrl || "",
			apiKey: tolgee.getInitialOptions().apiKey || "",
			branch: tolgee.getInitialOptions().branch
		}
	});
	const getTolgeePlugin = async () => {
		const InContextTools = await loadInContextLib("prerelease");
		return (tolgee2) => {
			const credentials2 = getCredentials();
			tolgee2.addPlugin(InContextTools({ credentials: credentials2 }));
			return tolgee2;
		};
	};
	tolgee.on("running", ({ value: isRunning }) => {
		if (isRunning) onDocumentReady(() => {
			handshaker.update(getConfig()).catch(clearSessionStorage);
		});
	});
	if (getCredentials()) getTolgeePlugin().then((plugin) => {
		tolgee.addPlugin(plugin);
	}).catch((e) => {
		console.error("Tolgee: Failed to load in-context tools");
		console.error(e);
	});
	return tolgee;
};
function Tolgee() {
	return TolgeeCore().use(BrowserExtensionPlugin());
}
var DevTools = () => (tolgee) => tolgee;
function getTolgeeWithDeactivatedWrapper(tolgee) {
	return Object.assign(Object.assign({}, tolgee), { t(...args) {
		const props = getTranslateProps(...args);
		return tolgee.t(Object.assign(Object.assign({}, props), { noWrap: true }));
	} });
}
function useTolgeeSSR(tolgeeInstance, language, data, enabled = true) {
	const [noWrappingTolgee] = useState(() => getTolgeeWithDeactivatedWrapper(tolgeeInstance));
	const [initialRender, setInitialRender] = useState(enabled);
	useEffect(() => {
		setInitialRender(false);
	}, []);
	useMemo(() => {
		if (enabled) {
			tolgeeInstance.setEmitterActive(false);
			tolgeeInstance.addStaticData(data);
			tolgeeInstance.changeLanguage(language);
			tolgeeInstance.setEmitterActive(true);
		}
	}, [
		language,
		data,
		tolgeeInstance
	]);
	useState(() => {
		if (!tolgeeInstance.isLoaded() && enabled) {
			const requiredRecords = tolgeeInstance.getRequiredDescriptors(language);
			const providedRecords = tolgeeInstance.getAllRecords();
			const missingRecords = requiredRecords.map(({ namespace, language }) => namespace ? `${namespace}:${language}` : language).filter((key) => !providedRecords.find((r) => (r === null || r === void 0 ? void 0 : r.cacheKey) === key));
			console.warn(`Tolgee: Missing records in "staticData" for proper SSR functionality: ${missingRecords.map((key) => `"${key}"`).join(", ")}`);
		}
	});
	return initialRender ? noWrappingTolgee : tolgeeInstance;
}
var DEFAULT_REACT_OPTIONS = { useSuspense: false };
var ProviderInstance;
var getProviderInstance = () => {
	if (!ProviderInstance) ProviderInstance = React.createContext(void 0);
	return ProviderInstance;
};
var LAST_TOLGEE_INSTANCE = void 0;
var TolgeeProvider = ({ tolgee, options, children, fallback, ssr }) => {
	useEffect(() => {
		if ((LAST_TOLGEE_INSTANCE === null || LAST_TOLGEE_INSTANCE === void 0 ? void 0 : LAST_TOLGEE_INSTANCE.run) !== tolgee.run) {
			if (LAST_TOLGEE_INSTANCE) LAST_TOLGEE_INSTANCE.stop();
			LAST_TOLGEE_INSTANCE = tolgee;
			tolgee.run().catch((e) => {
				console.error(e);
			}).finally(() => {
				setLoading(false);
			});
		}
	}, [tolgee]);
	let tolgeeSSR = tolgee;
	const { language, staticData } = typeof ssr !== "object" ? {} : ssr;
	tolgeeSSR = useTolgeeSSR(tolgee, language, staticData, Boolean(ssr));
	const [loading, setLoading] = useState(!tolgeeSSR.isLoaded());
	const optionsWithDefault = Object.assign(Object.assign({}, DEFAULT_REACT_OPTIONS), options);
	const TolgeeProviderContext = getProviderInstance();
	if (optionsWithDefault.useSuspense) return React.createElement(TolgeeProviderContext.Provider, { value: {
		tolgee: tolgeeSSR,
		options: optionsWithDefault
	} }, loading ? fallback : React.createElement(Suspense, { fallback: fallback || null }, children));
	return React.createElement(TolgeeProviderContext.Provider, { value: {
		tolgee: tolgeeSSR,
		options: optionsWithDefault
	} }, loading ? fallback : children);
};
var globalContext;
function getGlobalContext() {
	return globalContext;
}
var useTolgeeContext = () => {
	const context = useContext(getProviderInstance()) || getGlobalContext();
	if (!context) throw new Error("Couldn't find tolgee instance, did you forgot to use `TolgeeProvider`?");
	return context;
};
var useRerender = () => {
	const [instance, setCounter] = useState(0);
	return {
		instance,
		rerender: useCallback(() => {
			setCounter((num) => num + 1);
		}, [setCounter])
	};
};
var useTranslateInternal = (ns, options) => {
	const { tolgee, options: defaultOptions } = useTolgeeContext();
	const namespaces = getFallback(ns);
	const namespacesJoined = getFallbackArray(namespaces).join(":");
	const currentOptions = Object.assign(Object.assign({}, defaultOptions), options);
	const { rerender, instance } = useRerender();
	const subscriptionQueue = useRef([]);
	subscriptionQueue.current = [];
	const isLoaded = tolgee.isLoaded(namespaces);
	useEffect(() => {
		const subscription = tolgee.on("update", rerender);
		return () => {
			subscription.unsubscribe();
		};
	}, [namespacesJoined, tolgee]);
	useEffect(() => {
		tolgee.addActiveNs(namespaces);
		return () => tolgee.removeActiveNs(namespaces);
	}, [namespacesJoined, tolgee]);
	const t = useCallback((props) => {
		var _a;
		const fallbackNs = (_a = props.ns) !== null && _a !== void 0 ? _a : namespaces === null || namespaces === void 0 ? void 0 : namespaces[0];
		return tolgee.t(Object.assign(Object.assign({}, props), { ns: fallbackNs }));
	}, [tolgee, instance]);
	if (currentOptions.useSuspense && !isLoaded) throw tolgee.addActiveNs(namespaces, true);
	return {
		t,
		isLoading: !isLoaded
	};
};
var useTranslate$1 = (ns, options) => {
	const { t: tInternal, isLoading } = useTranslateInternal(ns, options);
	return {
		t: useCallback((...params) => {
			return tInternal(getTranslateProps(...params));
		}, [tInternal]),
		isLoading
	};
};
function unwrapSingleElementArray(value) {
	if (Array.isArray(value) && value.length === 1) return value[0];
	else return value;
}
var wrapTagHandlers = (params) => {
	if (!params) return;
	const result = {};
	Object.entries(params || {}).forEach(([key, value]) => {
		if (typeof value === "function") result[key] = (chunk) => {
			return value(addReactKeys(chunk));
		};
		else if (React.isValidElement(value)) {
			const el = value;
			result[key] = (chunk) => {
				return el.props.children === void 0 && (chunk === null || chunk === void 0 ? void 0 : chunk.length) ? React.cloneElement(el, {}, addReactKeys(chunk)) : React.cloneElement(el);
			};
		} else result[key] = value;
	});
	return result;
};
function unwrapFunctions(value) {
	if (typeof value === "function") return value();
	return value;
}
var addReactKeys = (children) => {
	const val = unwrapSingleElementArray(children);
	if (Array.isArray(val)) return val.map((item, i) => React.createElement(React.Fragment, { key: i }, unwrapFunctions(item)));
	else return unwrapFunctions(val);
};
var TBase = (props) => {
	const key = props.keyName || props.children;
	if (key === void 0) console.error("T component: keyName not defined");
	const defaultValue = props.defaultValue || (props.keyName ? props.children : void 0);
	const translation = addReactKeys(props.t({
		key,
		params: wrapTagHandlers(props.params),
		defaultValue,
		noWrap: props.noWrap,
		ns: props.ns,
		language: props.language
	}));
	return React.createElement(React.Fragment, null, translation);
};
var T$1 = (props) => {
	const { t } = useTranslateInternal();
	return React.createElement(TBase, Object.assign({ t }, props));
};
var tolgee = Tolgee().use(DevTools()).use(FormatSimple()).init({
	language: "en",
	apiUrl: void 0,
	apiKey: void 0,
	staticData: {
		en: () => import("./en-CMFc584c.js").then((n) => n.n),
		fr: () => import("../../../i18n/locales/fr.json"),
		es: () => import("../../../i18n/locales/es.json"),
		de: () => import("../../../i18n/locales/de.json"),
		it: () => import("../../../i18n/locales/it.json"),
		pt: () => import("../../../i18n/locales/pt.json"),
		zh: () => import("../../../i18n/locales/zh.json"),
		ja: () => import("../../../i18n/locales/ja.json"),
		ko: () => import("../../../i18n/locales/ko.json"),
		ru: () => import("../../../i18n/locales/ru.json")
	}
});
function useTranslate() {
	const { t, ...rest } = useTranslate$1();
	return {
		...rest,
		t: (key, defaultValue) => t(key, defaultValue)
	};
}
function T(props) {
	return jsx(T$1, { ...props });
}
function ContactForm() {
	const { t } = useTranslate();
	const nameId = useId();
	const emailId = useId();
	const topicId = useId();
	const messageId = useId();
	return jsxs("form", {
		className: "space-y-6",
		children: [
			jsxs("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [jsxs("div", { children: [jsx("label", {
					htmlFor: nameId,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: jsx(T, {
						keyName: "contactForm.name",
						defaultValue: "Name"
					})
				}), jsx("input", {
					id: nameId,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: t("contactForm.yourName", "Your name")
				})] }), jsxs("div", { children: [jsx("label", {
					htmlFor: emailId,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: jsx(T, {
						keyName: "contactForm.email",
						defaultValue: "Email"
					})
				}), jsx("input", {
					id: emailId,
					type: "email",
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: t("contactForm.emailPlaceholder", "you@example.com")
				})] })]
			}),
			jsxs("div", { children: [jsx("label", {
				htmlFor: topicId,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: jsx(T, {
					keyName: "contactForm.topic",
					defaultValue: "Topic"
				})
			}), jsxs("select", {
				id: topicId,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				children: [
					jsx("option", { children: t("contactForm.bugReport", "Bug Report") }),
					jsx("option", { children: t("contactForm.newBenchmarkIdea", "New Benchmark Idea") }),
					jsx("option", { children: t("contactForm.methodologyQuestion", "Methodology Question") }),
					jsx("option", { children: t("contactForm.contribution", "Contribution") }),
					jsx("option", { children: t("contactForm.other", "Other") })
				]
			})] }),
			jsxs("div", { children: [jsx("label", {
				htmlFor: messageId,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: jsx(T, {
					keyName: "contactForm.message",
					defaultValue: "Message"
				})
			}), jsx("textarea", {
				id: messageId,
				rows: 5,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: t("contactForm.messagePlaceholder", "Describe your question or idea...")
			})] }),
			jsx("button", {
				type: "submit",
				className: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: jsx(T, {
					keyName: "contactForm.sendMessage",
					defaultValue: "Send Message"
				})
			})
		]
	});
}
function Wrapper({ children }) {
	return jsx(TolgeeProvider, {
		tolgee,
		ssr: {
			language: "en",
			staticData: { en: en_default }
		},
		children
	});
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(ContactForm, {}) });
}
export { Wrapped as default };
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var en_exports = __exportAll({
	aboutGrid: () => aboutGrid,
	aboutHeader: () => aboutHeader,
	apiAccessSection: () => apiAccessSection,
	blogHeader: () => blogHeader,
	blogList: () => blogList,
	careersBenefits: () => careersBenefits,
	careersHeader: () => careersHeader,
	common: () => common,
	contactForm: () => contactForm,
	contactHeader: () => contactHeader,
	default: () => en_default,
	faqHeader: () => faqHeader,
	faqList: () => faqList,
	footer: () => footer,
	header: () => header,
	hero: () => hero,
	mockBanner: () => mockBanner,
	openPositions: () => openPositions,
	preferencesSection: () => preferencesSection,
	pricingHeader: () => pricingHeader,
	pricingTiers: () => pricingTiers,
	productsGrid: () => productsGrid,
	productsHeader: () => productsHeader,
	profileSection: () => profileSection,
	resultsTable: () => resultsTable,
	route: () => route,
	settingsFooter: () => settingsFooter,
	settingsHeader: () => settingsHeader,
	teamGrid: () => teamGrid,
	teamHeader: () => teamHeader,
	themeToggle: () => themeToggle,
	understandingImpact: () => understandingImpact,
	whatWeMeasure: () => whatWeMeasure,
	whyItMatters: () => whyItMatters
});
var route = {
	"oopsPageNotFound": "Oops! Page not found",
	"returnToHome": "Return to Home",
	"couldNotMeasureHydrationDuration": "Could not measure hydration duration:"
};
var header = {
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
	"settings": "Settings",
	"goToGithub": "Go to GitHub"
};
var footer = {
	"resources": "Resources",
	"contact": "Contact",
	"github": "GitHub",
	"methodology": "Methodology",
	"contributing": "Contributing",
	"builtWith": "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
	"anOpenSourceTestApplication": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
};
var common = {
	"readMore": "Read More",
	"copy": "Copy",
	"cancel": "Cancel",
	"saveChanges": "Save Changes"
};
var themeToggle = {
	"themeModeAutoSystemClick": "Theme mode: auto (system). Click to switch to light mode.",
	"themeModeLightClick": "Theme mode: light. Click to switch to dark mode.",
	"themeModeDarkClick": "Theme mode: dark. Click to switch to auto (system) mode.",
	"themeAuto": "Theme: Auto",
	"themeDark": "Theme: Dark",
	"themeLight": "Theme: Light"
};
var hero = {
	"aTestApplicationDesignedTo": "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
	"viewResults": "View Results"
};
var whyItMatters = {
	"whyTheseMetricsMatter": "Why These Metrics Matter",
	"bundleSize": "Bundle Size",
	"theBundleIsTheData": "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
	"renderingHydration": "Rendering & Hydration",
	"connectingALargeJson": "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
	"dynamicLoading": "Dynamic Loading",
	"loadingAllTranslationsUpfront": "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
};
var understandingImpact = {
	"understandingTheImpact": "Understanding the Impact",
	"whyASingleLargeJson": "Why a single large JSON can hurt performance",
	"manyI18nLibrariesStore": "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
	"manyI18nLibrariesStoreTranslations": "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
	"theJsonMustBeParsed": "The JSON must be parsed on every page load — blocking the main thread.",
	"contextBasedArchitecturesCan": "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
	"contextBasedArchitecturesCanCause": "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
	"duringServerSideRenderingThe": "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
	"theTradeOffsOfDynamic": "The trade-offs of dynamic loading",
	"splittingTranslationsIntoPerRoute": "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
	"waterfallRequests": "Waterfall requests:",
	"theAppMustFirstLoad": "The app must first load, determine the locale, then fetch the right chunk — adding network round-trips.",
	"flashOfUntranslatedContent": "Flash of untranslated content (FOUC):",
	"flashOfUntranslatedContentFouc": "Flash of untranslated content (FOUC):",
	"usersMayBrieflySeeTranslation": "Users may briefly see translation keys or a fallback language before the chunk arrives.",
	"cacheInvalidation": "Cache invalidation:",
	"updatingTranslationsRequiresCache": "Updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.",
	"whatThisBenchmarkMeasures": "What this benchmark measures",
	"thisTestAppProvidesA": "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
};
var resultsTable = {
	"sampleResults": "Sample Results",
	"bundleSize": "Bundle Size",
	"lookupTime": "Lookup Time",
	"lazyLoading": "Lazy Loading",
	"library": "Library"
};
var aboutHeader = {
	"methodology": "Methodology",
	"weDesignedThisBenchmarkTo": "We designed this benchmark to provide fair, reproducible, and meaningful comparisons of i18n libraries. Here's our approach.",
	"aboutThisBenchmark": "About This Benchmark",
	"thisIsAnOpenSource": "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
};
var aboutGrid = {
	"testEnvironment": "Test Environment",
	"allBenchmarksRunOn": "All benchmarks run on the same hardware (M2 MacBook Pro, 16 GB RAM), same browser (Chromium 120 via Playwright), and same network conditions (simulated 4G). Each test is repeated 50 times and we report the median with P95/P99 percentiles.",
	"applicationDesign": "Application Design",
	"theBenchmarkAppHas10": "The benchmark app has 10 pages with realistic content — navigation, forms, dynamic lists, and static text. Each page uses 15–30 translation keys to represent real-world usage patterns rather than synthetic micro-benchmarks.",
	"measurementMethodology": "Measurement Methodology",
	"weUseBrowserNativeApis": "We use browser-native APIs (Performance Timeline, Resource Timing, Layout Instability) combined with React Profiler data. Bundle sizes are measured post-gzip using source-map-explorer for accuracy.",
	"fairComparison": "Fair Comparison",
	"eachI18nLibraryIsIntegrated": "Each i18n library is integrated following its official documentation and best practices. We consult maintainers when possible to ensure optimal configuration. The same React app, same Vite config, same deployment.",
	"whyThisExists": "Why This Exists",
	"choosingAnI18nLibrary": "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
	"methodology": "Methodology",
	"theSame10PageApp": "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
};
var whatWeMeasure = {
	"bundleSizeImpact": "Bundle size impact",
	"theAdditionalJavascriptBytes": "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
	"theAdditionalJavascriptBytesSent": "The additional JavaScript bytes sent to the client specifically due to the i18n library runtime, plus the translation files for the current locale.",
	"renderingOverhead": "Rendering overhead",
	"howMuchExtraTimeTheLibraryAdds": "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
	"howMuchExtraTimeThe": "How much extra time the i18n layer adds to each component render — measured using React Profiler's actualDuration.",
	"hydrationCost": "Hydration cost",
	"duringSsrTranslationDataIsSerialized": "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
	"duringSsrTranslationDataIs": "During SSR, translation data is serialized into the HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
	"lazyLoadingEffectiveness": "Lazy loading effectiveness",
	"whetherSplittingTranslationsByRoute": "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
	"localeSwitchSpeed": "Locale switch speed",
	"howFastTheAppCan": "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
	"howFastTheAppCanSwitchFromOne": "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
	"whatWeMeasure": "What We Measure"
};
var blogHeader = {
	"blog": "Blog",
	"insightsDeepDivesAnd": "Insights, deep dives, and updates from the i18n benchmarking community.",
	"insightsTutorialsAndAnalysis": "Insights, tutorials, and analysis from the i18n community."
};
var blogList = {
	"comparingI18nLibrariesIn": "Comparing i18n Libraries in 2026: A Deep Dive",
	"comparingI18nLibrariesIn2026": "Comparing i18n Libraries in 2026: A Deep Dive",
	"march152026": "March 15, 2026",
	"weTested12DifferentInternationalization": "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.",
	"howToReduceYourI18n": "How to Reduce Your i18n Bundle by 60%",
	"march82026": "March 8, 2026",
	"practicalStrategiesForOptimizingTranslation": "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.",
	"theStateOfInternationalizationIn": "The State of Internationalization in React",
	"february282026": "February 28, 2026",
	"anOverviewOfTheCurrent": "An overview of the current i18n ecosystem, comparing approaches from message catalogs to compiler-based solutions.",
	"anOverviewOfTheCurrentI18n": "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.",
	"migratingFromReactI18nextTo": "Migrating from react-i18next to Lingui",
	"february152026": "February 15, 2026",
	"aStepByStepGuide": "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
	"aStepByStepGuideOnMigrating": "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
	"serverComponentsAndI18nWhat": "Server Components and i18n: What Changes?",
	"february12026": "February 1, 2026",
	"reactServerComponentsIntroduceNew": "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
	"benchmarkMethodologyHowWe": "Benchmark Methodology: How We Test",
	"benchmarkMethodologyHowWeTest": "Benchmark Methodology: How We Test",
	"january202026": "January 20, 2026",
	"aTransparentLookAtOur": "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
	"aTransparentLookAtOurBenchmarking": "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
	"readMore": "Read More →",
	"benchmark": "Benchmark",
	"tutorial": "Tutorial",
	"analysis": "Analysis",
	"meta": "Meta"
};
var careersHeader = {
	"careers": "Careers",
	"joinOurMissionToMake": "Join our mission to make the web faster and more accessible for everyone, everywhere.",
	"joinOurMission": "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
};
var careersBenefits = {
	"whyJoinUs": "Why Join Us?",
	"remoteFirst": "Remote-First",
	"workFromAnywhereFully": "Work from anywhere. Fully distributed team across 6 time zones.",
	"workFromAnywhere": "Work from anywhere in the world",
	"openSource": "Open Source",
	"allOurWorkIs": "All our work is open source. Build your public portfolio while making an impact.",
	"impactful": "Impactful",
	"yourWorkDirectlyHelps": "Your work directly helps developers build better, faster internationalized applications.",
	"competitivePay": "Competitive pay",
	"topOfMarketCompensation": "Top-of-market compensation",
	"openSourceTime": "Open source time",
	"percentTimeForOss": "20% time for OSS contributions"
};
var openPositions = {
	"openPositions": "Open Positions",
	"seniorPerformanceEngineer": "Senior Performance Engineer",
	"seniorFrontendEngineer": "Senior Frontend Engineer",
	"fullTime": "Full-Time",
	"remote": "Remote",
	"leadBenchmarkDesignAnd": "Lead benchmark design and implementation. Deep knowledge of V8 internals, browser performance APIs, and statistical analysis required.",
	"technicalWriter": "Technical Writer",
	"partTime": "Part-Time",
	"createAndMaintainDocumentation": "Create and maintain documentation, blog posts, and educational content about i18n performance best practices.",
	"frontendDeveloper": "Frontend Developer",
	"buildAndMaintainThe": "Build and maintain the benchmark dashboard, comparison tools, and interactive visualizations.",
	"buildAndMaintainOur": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
	"devOpsEngineer": "DevOps Engineer",
	"designAndMaintainThe": "Design and maintain the CI/CD pipeline that runs benchmarks automatically on every library update.",
	"applyNow": "Apply Now",
	"engineering": "Engineering",
	"backendEngineer": "Backend Engineer",
	"designAndScaleOur": "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
	"documentation": "Documentation",
	"createComprehensiveGuidesApi": "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
	"devrelEngineer": "DevRel Engineer",
	"sfRemote": "San Francisco / Remote",
	"community": "Community",
	"engageWithTheI18n": "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
	"qaEngineer": "QA Engineer",
	"ensureTheAccuracyAnd": "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation."
};
var contactHeader = {
	"contactUs": "Contact Us",
	"haveQuestionsOrWantTo": "Have questions or want to contribute? We'd love to hear from you.",
	"getInTouch": "Get in Touch",
	"haveIdeasFoundABug": "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us."
};
var contactForm = {
	"name": "Name",
	"yourName": "Your name",
	"email": "Email",
	"emailPlaceholder": "you@example.com",
	"subject": "Subject",
	"topic": "Topic",
	"bugReport": "Bug Report",
	"newBenchmarkIdea": "New Benchmark Idea",
	"methodologyQuestion": "Methodology Question",
	"contribution": "Contribution",
	"other": "Other",
	"message": "Message",
	"messagePlaceholder": "Describe your question or idea...",
	"sendMessage": "Send Message",
	"wellGetBackTo": "We'll get back to you within 48 hours."
};
var faqHeader = {
	"frequentlyAskedQuestions": "Frequently Asked Questions",
	"everythingYouNeedTo": "Everything you need to know about the i18n Benchmark project.",
	"everythingYouNeedToKnow": "Everything you need to know about i18n Benchmark."
};
var faqList = {
	"howAreTheBenchmarks": "How are the benchmarks run?",
	"allBenchmarksAreRun": "All benchmarks are run using Playwright on a consistent hardware setup (M2 MacBook Pro) with simulated 4G network conditions. Each test runs 50 iterations and we report median, P95, and P99 values.",
	"whatLibrariesAreCurrently": "What libraries are currently tested?",
	"weCurrentlyBenchmarkReactI18next": "We currently benchmark react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl, and Paraglide. We plan to add more based on community requests.",
	"canISubmitMyOwn": "Can I submit my own benchmarks?",
	"canISubmitMyOwnBenchmarks": "Can I submit my own benchmarks?",
	"absolutelyWeWelcomeCommunity": "Absolutely! We welcome community contributions. Fork the repository, add your library integration following our template, and submit a pull request. See the Contributing guide for details.",
	"howOftenAreResults": "How often are results updated?",
	"benchmarksRunAutomaticallyVia": "Benchmarks run automatically via CI on every dependency update and weekly on the main branch. Results are published to the dashboard within 24 hours.",
	"areTheResultsStatistically": "Are the results statistically significant?",
	"yesWeUseThe": "Yes. We use the Mann-Whitney U test with a significance level of 0.05 to compare distributions. We also report confidence intervals and effect sizes.",
	"whatIsI18nBenchmark": "What is i18n Benchmark?",
	"i18nBenchmarkIsAnOpenSource": "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.",
	"howAreBenchmarksConducted": "How are benchmarks conducted?",
	"weRunStandardizedTestsInIsolated": "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.",
	"whichLibrariesAreCurrentlySupported": "Which libraries are currently supported?",
	"weSupportReactI18nextReactIntl": "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.",
	"yesCommunityBenchmarkSubmissionsAre": "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.",
	"howOftenAreBenchmarksUpdated": "How often are benchmarks updated?",
	"weReRunAllBenchmarksWeekly": "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.",
	"isTheDataReliable": "Is the data reliable?",
	"weFollowRigorousStatisticalMethodologyIncluding": "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.",
	"doYouOfferConsultingServices": "Do you offer consulting services?",
	"yesOurEnterprisePlanIncludesConsulting": "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.",
	"howCanIContribute": "How can I contribute?",
	"thereAreManyWaysToContribute": "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
};
var pricingHeader = {
	"pricing": "Pricing",
	"transparentPricingForEvery": "Transparent pricing for every stage of your i18n journey."
};
var pricingTiers = {
	"freeTier": "Free Tier",
	"free": "Free",
	"publicBenchmarkDashboard": "Public benchmark dashboard",
	"basicLibraryComparisons": "Basic library comparisons",
	"communityForumAccess": "Community forum access",
	"monthlyResultDigest": "Monthly result digest",
	"getStarted": "Get Started",
	"proTier": "Pro Tier",
	"perMonth": "/month",
	"allFreeFeatures": "All Free features",
	"customBenchmarkConfigurations": "Custom benchmark configurations",
	"privateResultsDashboard": "Private results dashboard",
	"apiAccess1000Requests": "API access (1,000 requests/day)",
	"slackIntegration": "Slack integration",
	"subscribeToPro": "Subscribe to Pro",
	"enterpriseTier": "Enterprise Tier",
	"custom": "Custom",
	"allProFeatures": "All Pro features",
	"dedicatedBenchmarkInfrastructure": "Dedicated benchmark infrastructure",
	"customLibraryIntegrations": "Custom library integrations",
	"slaGuarantees": "SLA guarantees",
	"prioritySupport": "Priority support",
	"contactSales": "Contact Sales"
};
var productsHeader = {
	"products": "Products",
	"toolsAndServicesTo": "Tools and services to help you optimize your internationalization strategy."
};
var productsGrid = {
	"benchmarkDashboard": "Benchmark Dashboard",
	"interactiveChartsAndTables": "Interactive charts and tables comparing i18n libraries across bundle size, render time, and hydration cost.",
	"bundleAnalyzer": "Bundle Analyzer",
	"uploadYourBuildOutput": "Upload your build output and get a detailed breakdown of how much of your bundle is i18n overhead.",
	"migrationAssistant": "Migration Assistant",
	"automatedCodemodsAndGuides": "Automated codemods and guides for migrating between i18n libraries with minimal disruption.",
	"performanceMonitor": "Performance Monitor",
	"continuousPerformanceTrackingFor": "Continuous performance tracking for your i18n implementation. Get alerts when translation loading degrades.",
	"learnMore": "Learn More"
};
var settingsHeader = {
	"settings": "Settings",
	"manageYourAccountPreferences": "Manage your account preferences and configuration.",
	"manageYourAccount": "Manage your account preferences and configuration."
};
var profileSection = {
	"profile": "Profile",
	"displayName": "Display Name",
	"email": "Email"
};
var preferencesSection = {
	"preferences": "Preferences",
	"emailNotifications": "Email Notifications",
	"receiveWeeklyBenchmark": "Receive weekly benchmark reports",
	"receiveWeeklyBenchmarkReports": "Receive weekly benchmark reports",
	"toggleNotifications": "Toggle notifications",
	"darkMode": "Dark Mode",
	"useDarkColorScheme": "Use dark color scheme",
	"toggleDarkMode": "Toggle dark mode",
	"defaultLanguage": "Default Language",
	"englishEn": "English (en)",
	"frenchFr": "French (fr)",
	"germanDe": "German (de)",
	"spanishEs": "Spanish (es)",
	"japaneseJa": "Japanese (ja)",
	"chineseSimplifiedZhCn": "Chinese Simplified (zh-CN)",
	"arabicAr": "Arabic (ar)"
};
var apiAccessSection = {
	"apiAccess": "API Access",
	"apiKey": "API Key",
	"useThisKeyTo": "Use this key to access the benchmarking API programmatically.",
	"copy": "Copy"
};
var settingsFooter = {
	"cancel": "Cancel",
	"saveChanges": "Save Changes"
};
var teamHeader = {
	"ourTeam": "Our Team",
	"meetThePeopleBehindI18n": "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
};
var teamGrid = {
	"sarahChen": "Sarah Chen",
	"founderLeadEngineer": "Founder & Lead Engineer",
	"formerGoogleEngineerWith": "Former Google engineer with 10 years of experience building internationalization systems at scale.",
	"formerGoogleEngineerWith10": "Former Google engineer with 10 years of experience building internationalization systems at scale.",
	"marcusWeber": "Marcus Weber",
	"performanceEngineer": "Performance Engineer",
	"specializesInJavascriptPerformance": "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
	"specializesInJavascriptPerformanceOptimization": "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
	"aishaPatel": "Aisha Patel",
	"developerAdvocate": "Developer Advocate",
	"passionateAboutDeveloperExperience": "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
	"passionateAboutDeveloperExperienceAnd": "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
	"tomasRodriguez": "Tomás Rodríguez",
	"fullStackDeveloper": "Full-Stack Developer",
	"maintainsTheBenchmarkingInfrastructure": "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
	"maintainsTheBenchmarkingInfrastructureAnd": "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
	"yukiTanaka": "Yuki Tanaka",
	"dataAnalyst": "Data Analyst",
	"ensuresStatisticalRigorIn": "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
	"ensuresStatisticalRigorInAll": "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
	"elenaKowalski": "Elena Kowalski",
	"communityManager": "Community Manager",
	"managesCommunityContributions": "Manages community contributions, partnerships, and events. Background in open source governance.",
	"managesCommunityContributionsPartnershipsAnd": "Manages community contributions, partnerships, and events. Background in open source governance."
};
var mockBanner = "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.";
var en_default = {
	route,
	header,
	footer,
	common,
	themeToggle,
	hero,
	whyItMatters,
	understandingImpact,
	resultsTable,
	aboutHeader,
	aboutGrid,
	whatWeMeasure,
	blogHeader,
	blogList,
	careersHeader,
	careersBenefits,
	openPositions,
	contactHeader,
	contactForm,
	faqHeader,
	faqList,
	pricingHeader,
	pricingTiers,
	productsHeader,
	productsGrid,
	settingsHeader,
	profileSection,
	preferencesSection,
	apiAccessSection,
	settingsFooter,
	teamHeader,
	teamGrid,
	mockBanner
};
export { en_exports as n, en_default as t };
