import React, { Suspense, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
function getErrorMessage$1(error) {
	if (typeof error === "string") return error;
	else if (typeof (error === null || error === void 0 ? void 0 : error.message) === "string") return error.message;
}
var defaultFetchFunction = (input, options) => fetch(input, options);
function headersInitToRecord(headersInit) {
	return Object.fromEntries(new Headers(headersInit).entries());
}
var sdkHeaders = () => ({
	"x-tolgee-sdk-type": "JS",
	"x-tolgee-sdk-version": "prerelease"
});
var createFetchFunction = (fetchFn = defaultFetchFunction) => {
	return (input, init) => {
		let headers = headersInitToRecord(init === null || init === void 0 ? void 0 : init.headers);
		if (headers["x-api-key"]) headers = Object.assign(Object.assign({}, sdkHeaders()), headers);
		return fetchFn(input, Object.assign(Object.assign({}, init), { headers }));
	};
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
var EventEmitter = (type, isActive) => {
	const handlers = /* @__PURE__ */ new Set();
	return {
		listen(handler) {
			const handlerWrapper = (e) => {
				handler(e);
			};
			handlers.add(handlerWrapper);
			return { unsubscribe() {
				handlers.delete(handlerWrapper);
			} };
		},
		emit(data) {
			if (isActive()) Array.from(handlers).forEach((handler) => handler({
				type,
				value: data
			}));
		}
	};
};
function EventEmitterCombined(isActive) {
	const handlers = /* @__PURE__ */ new Set();
	let queue = [];
	function solveQueue() {
		if (queue.length === 0) return;
		const queueCopy = queue;
		queue = [];
		Array.from(handlers).forEach((handler) => {
			handler(queueCopy);
		});
	}
	return Object.freeze({
		listen(handler) {
			const handlerWrapper = (events) => {
				handler(events);
			};
			handlers.add(handlerWrapper);
			return { unsubscribe() {
				handlers.delete(handlerWrapper);
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
			const { apiKey, transport, apiUrl, projectId, branch, observerOptions, tagNewKeys, filterTag } = getInitialOptions();
			instances.ui = (_a2 = plugins.ui) === null || _a2 === void 0 ? void 0 : _a2.call(plugins, {
				apiKey,
				transport,
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
			const { apiKey, transport, apiUrl, projectId, branch, filterTag } = getInitialOptions();
			if (!apiKey && !transport || !apiUrl || !self2.hasDevBackend()) return;
			return (_a2 = instances.devBackend) === null || _a2 === void 0 ? void 0 : _a2.getRecord(Object.assign({
				apiKey,
				transport,
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
				const errorMessage = getErrorMessage$1(e) || DEFAULT_FORMAT_ERROR;
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
			const merged = Object.assign(Object.assign({}, state.initialOptions), devCredentials);
			if (devCredentials && (devCredentials.apiKey || devCredentials.transport)) {
				merged.apiKey = devCredentials.apiKey;
				merged.transport = devCredentials.transport;
			}
			return merged;
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
			const options2 = state.getInitialOptions();
			return Boolean((options2.apiKey || options2.transport) && options2.apiUrl);
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
var ERROR_PARAM_EMPTY = 0;
var ERROR_UNEXPECTED_CHAR = 1;
var ERROR_UNEXPECTED_END = 2;
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
var STATE_TEXT = 0;
var STATE_ESCAPE_MAYBE = 1;
var STATE_ESCAPE = 2;
var STATE_PARAM = 3;
var STATE_PARAM_AFTER = 4;
var END_STATES = /* @__PURE__ */ new Set([
	STATE_ESCAPE,
	STATE_ESCAPE_MAYBE,
	STATE_TEXT
]);
var CHAR_ESCAPE = "'";
var ESCAPABLE = /* @__PURE__ */ new Set([
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
function isSSR() {
	var _a2, _b;
	return typeof ((_b = (_a2 = globalThis.window) == null ? void 0 : _a2.document) == null ? void 0 : _b.createElement) === "undefined";
}
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
		for (var e = 0, f = Math.min(65536, r.length + 1), n = new Uint16Array(f), i = [], o = 0;;) {
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
function getErrorMessage(code, status) {
	if (status) return `${status}: ${code}`;
	return code;
}
var HttpError = class HttpError extends Error {
	constructor(code, status, params) {
		super(getErrorMessage(code, status));
		this.code = code;
		this.status = status;
		this.params = params;
		Object.setPrototypeOf(this, HttpError.prototype);
	}
};
function isHttpError(error) {
	return error instanceof Error && typeof error.code === "string";
}
var EXTENSION_PROTOCOL_VERSION = 2;
var EXTENSION_REQUEST_TIMEOUT_MS = 35e3;
var TOLGEE_API_REQUEST = "TOLGEE_API_REQUEST";
var TOLGEE_API_RESPONSE = "TOLGEE_API_RESPONSE";
var TOLGEE_PROXY_PING = "TOLGEE_PROXY_PING";
var TOLGEE_PROXY_PONG = "TOLGEE_PROXY_PONG";
function isExtensionSessionKind(value) {
	return value === "oauth" || value === "apiKey";
}
var ExtensionRpcError = class ExtensionRpcError extends Error {
	constructor(kind, message) {
		super(message);
		this.kind = kind;
		this.name = "ExtensionRpcError";
		Object.setPrototypeOf(this, ExtensionRpcError.prototype);
	}
};
var RELAY_DISCOVERY_TIMEOUT_MS = 3e3;
var RELAY_PING_INTERVAL_MS = 200;
var counter = 0;
var pending = /* @__PURE__ */ new Map();
var listening = false;
var relayReady;
var onRelayPong;
async function requestFromExtension({ type, replyType, payload, timeoutMs = EXTENSION_REQUEST_TIMEOUT_MS, progressType, onProgress }) {
	ensureListener();
	const deadline = Date.now() + timeoutMs;
	await awaitRelay(Math.min(deadline, Date.now() + RELAY_DISCOVERY_TIMEOUT_MS));
	const remaining = deadline - Date.now();
	if (remaining <= 0) throw noAnswerInTime(type);
	const id = nextId();
	return new Promise((resolve, reject) => {
		const timer = setTimeout(() => {
			pending.delete(id);
			forgetRelay();
			reject(noAnswerInTime(type));
		}, remaining);
		pending.set(id, {
			replyType,
			progressType,
			onProgress,
			resolve,
			reject,
			timer
		});
		window.postMessage({
			type,
			data: __spreadValues({ id }, payload)
		}, window.origin);
	});
}
var noAnswerInTime = (type) => new ExtensionRpcError("unavailable", `the Tolgee browser extension did not answer ${type} in time`);
var nextId = () => `${Date.now()}-${counter++}-${Math.random()}`;
function ensureListener() {
	if (listening) return;
	listening = true;
	window.addEventListener("message", (event) => {
		var _a2, _b, _c;
		if (event.source !== window || event.origin !== window.location.origin) return;
		const type = (_a2 = event.data) == null ? void 0 : _a2.type;
		if (type === TOLGEE_PROXY_PONG) {
			onRelayPong?.();
			return;
		}
		const data = (_b = event.data) == null ? void 0 : _b.data;
		if (typeof (data == null ? void 0 : data.id) !== "string") return;
		const entry = pending.get(data.id);
		if (!entry) return;
		if (type === entry.progressType) {
			(_c = entry.onProgress) == null || _c.call(entry);
			return;
		}
		if (type !== entry.replyType) return;
		pending.delete(data.id);
		clearTimeout(entry.timer);
		if (data.error) entry.reject(new ExtensionRpcError(data.error.kind, data.error.message));
		else entry.resolve(data);
	});
}
function awaitRelay(deadline) {
	if (!relayReady) relayReady = new Promise((resolve, reject) => {
		const ping = () => window.postMessage({ type: TOLGEE_PROXY_PING }, window.origin);
		const giveUp = () => {
			clearInterval(timer);
			forgetRelay();
			onRelayPong = void 0;
			reject(new ExtensionRpcError("unavailable", "the Tolgee browser extension did not answer"));
		};
		const timer = setInterval(() => {
			if (Date.now() > deadline) {
				giveUp();
				return;
			}
			ping();
		}, RELAY_PING_INTERVAL_MS);
		onRelayPong = () => {
			clearInterval(timer);
			resolve();
		};
		ping();
	});
	return relayReady;
}
function forgetRelay() {
	relayReady = void 0;
}
function proxyTransport() {
	return async (request) => {
		const body = await encodeBody(request.body);
		let reply;
		try {
			reply = await requestFromExtension({
				type: TOLGEE_API_REQUEST,
				replyType: TOLGEE_API_RESPONSE,
				payload: {
					path: request.path,
					method: request.method,
					headers: request.headers,
					body
				}
			});
		} catch (e) {
			throw httpErrorFromExtension(e);
		}
		if (!reply.response) throw new HttpError("fetch_error");
		return toResponseLike(reply.response);
	};
}
async function encodeBody(body) {
	if (body === void 0) return { kind: "none" };
	if (typeof body === "string") return {
		kind: "json",
		text: body
	};
	const entries = [];
	body.forEach((value, name) => {
		if (typeof value === "string") {
			entries.push(Promise.resolve({
				name,
				value
			}));
			return;
		}
		entries.push(blobToBase64(value).then((base64) => ({
			name,
			file: {
				name: value.name || "blob",
				type: value.type,
				base64
			}
		})));
	});
	return {
		kind: "form",
		entries: await Promise.all(entries)
	};
}
var blobToBase64 = (blob) => new Promise((resolve, reject) => {
	const reader = new FileReader();
	reader.onload = () => resolve(String(reader.result).replace(/^data:[^,]*,/, ""));
	reader.onerror = () => reject(reader.error);
	reader.readAsDataURL(blob);
});
function toResponseLike(response) {
	var _a2;
	const headers = Object.fromEntries(Object.entries((_a2 = response.headers) != null ? _a2 : {}).map(([name, value]) => [name.toLowerCase(), value]));
	return {
		ok: response.status >= 200 && response.status < 300,
		status: response.status,
		statusText: response.statusText,
		headers: { get: (name) => {
			var _a3;
			return (_a3 = headers[name.toLowerCase()]) != null ? _a3 : null;
		} },
		text: () => Promise.resolve(response.body),
		json: async () => JSON.parse(response.body)
	};
}
function httpErrorFromExtension(e) {
	if (isHttpError(e)) return e;
	if (e instanceof ExtensionRpcError) switch (e.kind) {
		case "no_session": return new HttpError("extension_session_missing", 401);
		case "too_large": return new HttpError("extension_request_too_large");
		default:
			console.warn(`Tolgee: the browser extension did not serve the request (${e.kind}): ${e.message}`);
			return new HttpError("fetch_error");
	}
	return new HttpError("fetch_error");
}
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
function readChar(char) {
	const idx = alphabet.indexOf(char);
	if (idx === -1) throw new Error("Invalid character found: " + char);
	return idx;
}
function arrayBufferToString(buffer) {
	const bufView = new Uint8Array(buffer);
	const length = bufView.length;
	let result = "";
	let addition = Math.pow(2, 16) - 1;
	for (let i = 0; i < length; i += addition) {
		if (i + addition > length) addition = length - i;
		result += String.fromCharCode.apply(null, bufView.subarray(i, i + addition));
	}
	return result;
}
function base32Decode(input) {
	input = input.toUpperCase();
	const length = input.length;
	let bits = 0;
	let value = 0;
	let index = 0;
	const output = new Uint8Array(length * 5 / 8 | 0);
	for (let i = 0; i < length; i++) {
		value = value << 5 | readChar(input[i]);
		bits += 5;
		if (bits >= 8) {
			output[index++] = value >>> bits - 8 & 255;
			bits -= 8;
		}
	}
	return arrayBufferToString(output.buffer);
}
function getProjectIdFromApiKey(key) {
	if (!key) return;
	try {
		const [prefix, rest] = key.split("_");
		if (prefix === "tgpak") {
			const [projectId] = base32Decode(rest).split("_");
			return /^\d+$/.test(projectId) ? Number(projectId) : void 0;
		}
	} catch (e) {
		console.warn("Tolgee: Api key can't be parsed");
	}
}
function getApiKeyType(key) {
	if (!key) return;
	const [prefix] = key.split("_");
	if (prefix === "tgpak") return "tgpak";
	else if (prefix === "tgpat") return "tgpat";
	return "legacy";
}
function resolveLiveCredential(credentials) {
	var _a2;
	const { apiKey, projectId, transport } = credentials;
	if (transport) return {
		authHeader: {},
		viaExtension: true,
		hasCredential: true,
		projectId,
		requiresExplicitProject: true
	};
	return {
		authHeader: buildAuthHeader(apiKey),
		viaExtension: false,
		hasCredential: Boolean(apiKey),
		projectId: (_a2 = getProjectIdFromApiKey(apiKey)) != null ? _a2 : projectId,
		requiresExplicitProject: getApiKeyType(apiKey) === "tgpat"
	};
}
function buildAuthHeader(apiKey) {
	return apiKey ? { "X-API-Key": apiKey } : {};
}
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
var TOLGEE_EXTENSION_SESSION_STORAGE_PREFIX = "__tolgee_";
var API_KEY_SESSION_STORAGE = `${TOLGEE_EXTENSION_SESSION_STORAGE_PREFIX}apiKey`;
var API_URL_SESSION_STORAGE = `${TOLGEE_EXTENSION_SESSION_STORAGE_PREFIX}apiUrl`;
var BRANCH_SESSION_STORAGE = `${TOLGEE_EXTENSION_SESSION_STORAGE_PREFIX}branch`;
var PROJECT_ID_SESSION_STORAGE = `${TOLGEE_EXTENSION_SESSION_STORAGE_PREFIX}projectId`;
var EXTENSION_SESSION_STORAGE = `${TOLGEE_EXTENSION_SESSION_STORAGE_PREFIX}session`;
var IN_CONTEXT_FILE = "tolgee-in-context-tools.umd.min.js";
var IN_CONTEXT_UMD_NAME = "@tolgee/in-context-tools";
var IN_CONTEXT_EXPORT_NAME = "InContextTools";
var CDN_URL = "https://cdn.jsdelivr.net/npm";
var injectPromise = null;
function loadInContextLib(version) {
	if (!injectPromise) injectPromise = injectScript(inContextLibSrc(version)).then(() => {
		return window[IN_CONTEXT_UMD_NAME][IN_CONTEXT_EXPORT_NAME];
	});
	return injectPromise;
}
function inContextLibSrc(version) {
	return trustedOverrideUrl() || `${CDN_URL}/@tolgee/web@${version}/dist/${IN_CONTEXT_FILE}`;
}
function trustedOverrideUrl() {
	if (isSSR()) return;
	const override = window.__TOLGEE_IN_CONTEXT_URL__;
	return isTrustedInContextUrl(override, window.location) ? override : void 0;
}
var isDevHost = (hostname) => hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1" || hostname === "[::1]";
function isTrustedInContextUrl(override, location) {
	if (!override || !isDevHost(location.hostname)) return false;
	try {
		const url = new URL(override, location.href);
		return url.origin === location.origin || isDevHost(url.hostname);
	} catch (e) {
		return false;
	}
}
function injectScript(src) {
	return new Promise((resolve, reject) => {
		const script = document.createElement("script");
		script.src = src;
		script.addEventListener("load", () => resolve());
		script.addEventListener("error", (e) => reject(e.error));
		document.head.appendChild(script);
	});
}
function getCredentials() {
	const apiKey = sessionStorage.getItem(API_KEY_SESSION_STORAGE) || void 0;
	const apiUrl = sessionStorage.getItem(API_URL_SESSION_STORAGE) || void 0;
	const branch = sessionStorage.getItem(BRANCH_SESSION_STORAGE) || void 0;
	const projectId = sessionStorage.getItem(PROJECT_ID_SESSION_STORAGE) || void 0;
	const viaExtension = isExtensionSessionKind(sessionStorage.getItem(EXTENSION_SESSION_STORAGE));
	if (!apiUrl) return;
	const common = __spreadValues(__spreadValues({ apiUrl }, projectId !== void 0 ? { projectId } : {}), branch !== void 0 ? { branch } : {});
	if (apiKey) return __spreadProps(__spreadValues({}, common), { apiKey });
	if (viaExtension && projectId) return __spreadProps(__spreadValues({}, common), { transport: proxyTransport() });
}
function clearSessionStorage() {
	const keysToRemove = [];
	for (let i = 0; i < sessionStorage.length; i++) {
		const key = sessionStorage.key(i);
		if (key == null ? void 0 : key.startsWith(TOLGEE_EXTENSION_SESSION_STORAGE_PREFIX)) keysToRemove.push(key);
	}
	keysToRemove.forEach((key) => sessionStorage.removeItem(key));
}
function warnIfProjectIdMissing(tolgee) {
	if (!tolgee.isDev()) return;
	const { requiresExplicitProject, projectId } = resolveLiveCredential(tolgee.getInitialOptions());
	if (requiresExplicitProject && projectId === void 0) console.warn("Tolgee: `projectId` is missing from the SDK configuration. It is required when authenticating with a PAT or connecting through the Tolgee browser extension. See https://docs.tolgee.io/js-sdk/api/core_package/options#projectid");
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
	const getConfig = () => {
		const options = tolgee.getInitialOptions();
		return {
			uiPresent: true,
			uiVersion: void 0,
			protocolVersion: EXTENSION_PROTOCOL_VERSION,
			mode: tolgee.isDev() ? "development" : "production",
			config: {
				apiUrl: options.apiUrl || "",
				apiKey: options.transport ? "" : options.apiKey || "",
				projectId: options.projectId,
				branch: options.branch
			}
		};
	};
	const getTolgeePlugin = async () => {
		const InContextTools = await loadInContextLib("prerelease");
		return (tolgee2) => {
			const credentials2 = getCredentials();
			tolgee2.addPlugin(InContextTools({ credentials: credentials2 }));
			return tolgee2;
		};
	};
	warnIfProjectIdMissing(tolgee);
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
			const missingRecords = requiredRecords.map((descriptor) => encodeCacheKey(descriptor)).filter((key) => !providedRecords.find((r) => (r === null || r === void 0 ? void 0 : r.cacheKey) === key));
			if (missingRecords.length) console.warn(`Tolgee: Missing records in "staticData" for proper SSR functionality: ${missingRecords.map((key) => `"${key}"`).join(", ")}`);
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
var useTolgeeContext = () => {
	const TolgeeProviderContext = getProviderInstance();
	const context = useContext(TolgeeProviderContext) || void 0;
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
			const props = getTranslateProps(...params);
			return tInternal(props);
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
function useTranslate() {
	const { t, ...rest } = useTranslate$1();
	return {
		...rest,
		t: (key) => t(key)
	};
}
function T(props) {
	return jsx(T$1, { ...props });
}
function Footer() {
	const { t } = useTranslate();
	const currentLocale = useParams({ strict: false }).locale ?? "en";
	const footerLinks = [
		{
			label: t("footer.github"),
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: false
		},
		{
			label: t("footer.methodology"),
			to: "/$locale/about",
			isInternal: true
		},
		{
			label: t("footer.contributing"),
			to: "/$locale/contact",
			isInternal: true
		}
	];
	return jsx("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: jsxs("div", {
			className: "container py-8",
			children: [jsxs("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					jsxs("div", { children: [jsx("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "i18n Benchmark"
					}), jsx("p", {
						className: "text-sm text-muted-foreground",
						children: jsx(T, { keyName: "footer.anOpenSourceTestApplication" })
					})] }),
					jsxs("div", { children: [jsx("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: jsx(T, { keyName: "footer.resources" })
					}), jsx("ul", {
						className: "space-y-1",
						children: footerLinks.map((linkEl) => jsx("li", { children: linkEl.isInternal ? jsx(Link, {
							preload: false,
							to: linkEl.to,
							params: { locale: currentLocale },
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: linkEl.label
						}) : jsx("a", {
							href: linkEl.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: linkEl.label
						}) }, linkEl.label))
					})] }),
					jsxs("div", { children: [jsx("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: jsx(T, { keyName: "footer.contact" })
					}), jsx("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					})] })
				]
			}), jsx("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: jsx(T, { keyName: "footer.builtWith" })
			})]
		})
	});
}
var en_default = {
	route: {
		"oopsPageNotFound": "Oops! Page not found",
		"returnToHome": "Return to Home",
		"couldNotMeasureHydrationDuration": "Could not measure hydration duration:"
	},
	header: {
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
	},
	footer: {
		"resources": "Resources",
		"contact": "Contact",
		"github": "GitHub",
		"methodology": "Methodology",
		"contributing": "Contributing",
		"builtWith": "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
		"anOpenSourceTestApplication": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
	},
	common: {
		"readMore": "Read More",
		"copy": "Copy",
		"cancel": "Cancel",
		"saveChanges": "Save Changes"
	},
	themeToggle: {
		"themeModeAutoSystemClick": "Theme mode: auto (system). Click to switch to light mode.",
		"themeModeLightClick": "Theme mode: light. Click to switch to dark mode.",
		"themeModeDarkClick": "Theme mode: dark. Click to switch to auto (system) mode.",
		"themeAuto": "Theme: Auto",
		"themeDark": "Theme: Dark",
		"themeLight": "Theme: Light"
	},
	hero: {
		"aTestApplicationDesignedTo": "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
		"viewResults": "View Results"
	},
	whyItMatters: {
		"whyTheseMetricsMatter": "Why These Metrics Matter",
		"bundleSize": "Bundle Size",
		"theBundleIsTheData": "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
		"renderingHydration": "Rendering & Hydration",
		"connectingALargeJson": "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
		"dynamicLoading": "Dynamic Loading",
		"loadingAllTranslationsUpfront": "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
	},
	understandingImpact: {
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
	},
	resultsTable: {
		"sampleResults": "Sample Results",
		"bundleSize": "Bundle Size",
		"lookupTime": "Lookup Time",
		"lazyLoading": "Lazy Loading",
		"library": "Library"
	},
	aboutHeader: {
		"methodology": "Methodology",
		"weDesignedThisBenchmarkTo": "We designed this benchmark to provide fair, reproducible, and meaningful comparisons of i18n libraries. Here's our approach.",
		"aboutThisBenchmark": "About This Benchmark",
		"thisIsAnOpenSource": "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
	},
	aboutGrid: {
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
	},
	whatWeMeasure: {
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
	},
	blogHeader: {
		"blog": "Blog",
		"insightsDeepDivesAnd": "Insights, deep dives, and updates from the i18n benchmarking community.",
		"insightsTutorialsAndAnalysis": "Insights, tutorials, and analysis from the i18n community."
	},
	blogList: {
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
	},
	careersHeader: {
		"careers": "Careers",
		"joinOurMissionToMake": "Join our mission to make the web faster and more accessible for everyone, everywhere.",
		"joinOurMission": "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
	},
	careersBenefits: {
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
	},
	openPositions: {
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
	},
	contactHeader: {
		"contactUs": "Contact Us",
		"haveQuestionsOrWantTo": "Have questions or want to contribute? We'd love to hear from you.",
		"getInTouch": "Get in Touch",
		"haveIdeasFoundABug": "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us."
	},
	contactForm: {
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
	},
	faqHeader: {
		"frequentlyAskedQuestions": "Frequently Asked Questions",
		"everythingYouNeedTo": "Everything you need to know about the i18n Benchmark project.",
		"everythingYouNeedToKnow": "Everything you need to know about i18n Benchmark."
	},
	faqList: {
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
	},
	pricingHeader: {
		"pricing": "Pricing",
		"transparentPricingForEvery": "Transparent pricing for every stage of your i18n journey."
	},
	pricingTiers: {
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
	},
	productsHeader: {
		"products": "Products",
		"toolsAndServicesTo": "Tools and services to help you optimize your internationalization strategy."
	},
	productsGrid: {
		"benchmarkDashboard": "Benchmark Dashboard",
		"interactiveChartsAndTables": "Interactive charts and tables comparing i18n libraries across bundle size, render time, and hydration cost.",
		"bundleAnalyzer": "Bundle Analyzer",
		"uploadYourBuildOutput": "Upload your build output and get a detailed breakdown of how much of your bundle is i18n overhead.",
		"migrationAssistant": "Migration Assistant",
		"automatedCodemodsAndGuides": "Automated codemods and guides for migrating between i18n libraries with minimal disruption.",
		"performanceMonitor": "Performance Monitor",
		"continuousPerformanceTrackingFor": "Continuous performance tracking for your i18n implementation. Get alerts when translation loading degrades.",
		"learnMore": "Learn More"
	},
	settingsHeader: {
		"settings": "Settings",
		"manageYourAccountPreferences": "Manage your account preferences and configuration.",
		"manageYourAccount": "Manage your account preferences and configuration."
	},
	profileSection: {
		"profile": "Profile",
		"displayName": "Display Name",
		"email": "Email"
	},
	preferencesSection: {
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
	},
	apiAccessSection: {
		"apiAccess": "API Access",
		"apiKey": "API Key",
		"useThisKeyTo": "Use this key to access the benchmarking API programmatically.",
		"copy": "Copy"
	},
	settingsFooter: {
		"cancel": "Cancel",
		"saveChanges": "Save Changes"
	},
	teamHeader: {
		"ourTeam": "Our Team",
		"meetThePeopleBehindI18n": "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
	},
	teamGrid: {
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
	},
	mockBanner: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service."
};
var de_default = {
	route: {
		"oopsPageNotFound": "Hoppla! Seite nicht gefunden",
		"returnToHome": "Zurück zur Startseite",
		"couldNotMeasureHydrationDuration": "Hydratationsdauer konnte nicht gemessen werden:"
	},
	header: {
		"home": "Startseite",
		"methodology": "Methodik",
		"mockPages": "Beispielseiten",
		"products": "Produkte",
		"pricing": "Preise",
		"team": "Team",
		"blog": "Blog",
		"careers": "Karriere",
		"faq": "FAQ",
		"contact": "Kontakt",
		"settings": "Einstellungen",
		"goToGithub": "Zu GitHub gehen"
	},
	footer: {
		"resources": "Ressourcen",
		"contact": "Kontakt",
		"github": "GitHub",
		"methodology": "Methodik",
		"contributing": "Beitragen",
		"builtWith": "i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite & TanStack Router.",
		"anOpenSourceTestApplication": "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, Ladezeit und App-Reaktivität."
	},
	common: {
		"readMore": "Weiterlesen",
		"copy": "Kopieren",
		"cancel": "Abbrechen",
		"saveChanges": "Änderungen speichern"
	},
	themeToggle: {
		"themeModeAutoSystemClick": "Themenmodus: Auto (System). Klicken, um zum hellen Modus zu wechseln.",
		"themeModeLightClick": "Themenmodus: Hell. Klicken, um zum dunklen Modus zu wechseln.",
		"themeModeDarkClick": "Themenmodus: Dunkel. Klicken, um zum Auto-Modus (System) zu wechseln.",
		"themeAuto": "Design: Auto",
		"themeDark": "Design: Dunkel",
		"themeLight": "Design: Hell"
	},
	hero: {
		"aTestApplicationDesignedTo": "Eine Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladeleistung und Rendering-Reaktivität.",
		"viewResults": "Ergebnisse anzeigen"
	},
	whyItMatters: {
		"whyTheseMetricsMatter": "Warum diese Kennzahlen wichtig sind",
		"bundleSize": "Bundle-Größe",
		"theBundleIsTheData": "Das Bundle sind die Daten, die an jeden Benutzer weltweit gesendet werden. Ein größeres Bundle bedeutet längere Downloadzeiten – besonders bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren stark in ihrem Gewicht: von wenigen Kilobyte bis zu Dutzenden Kilobyte an Laufzeitcode, plus die Übersetzungsdateien selbst.",
		"renderingHydration": "Rendering & Hydratation",
		"connectingALargeJson": "Das Verbinden eines großen JSON-Wörterbuchs mit jeder Komponente schafft eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renders im gesamten Baum auslösen. Während der SSR-Hydratation führt das Parsen und Anhängen massiver Übersetzungsobjekte zu Latenzzeiten, bevor die Seite interaktiv wird – was sich direkt auf die Time to Interactive (TTI) auswirkt.",
		"dynamicLoading": "Dynamisches Laden",
		"loadingAllTranslationsUpfront": "Das Vorabladen aller Übersetzungen überlastet die anfängliche Payload. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namensraum auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Nachteile mit sich: Waterfall-Requests, kurzes Aufblitzen unübersetzter Inhalte und Cache-Komplexität. Die Messung beider Strategien ist unerlässlich."
	},
	understandingImpact: {
		"understandingTheImpact": "Die Auswirkungen verstehen",
		"whyASingleLargeJson": "Warum ein einziges großes JSON die Leistung beeinträchtigen kann",
		"manyI18nLibrariesStore": "Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verwendet, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:",
		"manyI18nLibrariesStoreTranslations": "Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verwendet, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:",
		"theJsonMustBeParsed": "Das JSON muss bei jedem Seitenladen geparst werden – das blockiert den Haupt-Thread.",
		"contextBasedArchitecturesCan": "Kontextbasierte Architekturen können kaskadierende Re-Renders verursachen, wenn sich die Locale ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.",
		"contextBasedArchitecturesCanCause": "Kontextbasierte Architekturen können kaskadierende Re-Renders verursachen, wenn sich die Locale ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.",
		"duringServerSideRenderingThe": "Beim serverseitigen Rendering wird das gesamte Wörterbuch in die HTML-Payload serialisiert, was die Größe des Dokuments erhöht, das heruntergeladen und hydriert werden muss.",
		"theTradeOffsOfDynamic": "Die Kompromisse des dynamischen Ladens",
		"splittingTranslationsIntoPerRoute": "Das Aufteilen von Übersetzungen in Chunks pro Route oder Namensraum kann die anfängliche Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:",
		"waterfallRequests": "Waterfall-Requests:",
		"theAppMustFirstLoad": "Die App muss zuerst geladen werden, die Locale bestimmen und dann den richtigen Chunk abrufen – was zusätzliche Netzwerk-Roundtrips verursacht.",
		"flashOfUntranslatedContent": "Aufblitzen unübersetzter Inhalte (FOUC):",
		"flashOfUntranslatedContentFouc": "Aufblitzen unübersetzter Inhalte (FOUC):",
		"usersMayBrieflySeeTranslation": "Benutzer sehen möglicherweise kurzzeitig Übersetzungsschlüssel oder eine Fallback-Sprache, bevor der Chunk eintrifft.",
		"cacheInvalidation": "Cache-Invalidierung:",
		"updatingTranslationsRequiresCache": "Das Aktualisieren von Übersetzungen erfordert Cache-Busting-Strategien, um sicherzustellen, dass Benutzer frische Inhalte erhalten, ohne unveränderte Chunks erneut herunterzuladen.",
		"whatThisBenchmarkMeasures": "Was dieser Benchmark misst",
		"thisTestAppProvidesA": "Diese Test-App bietet eine kontrollierte Umgebung – 10 Seiten mit realistischen Inhalten –, um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind."
	},
	resultsTable: {
		"sampleResults": "Beispielergebnisse",
		"bundleSize": "Bundle-Größe",
		"lookupTime": "Lookup-Zeit",
		"lazyLoading": "Lazy Loading",
		"library": "Bibliothek"
	},
	aboutHeader: {
		"methodology": "Methodik",
		"weDesignedThisBenchmarkTo": "Wir haben diesen Benchmark entwickelt, um faire, reproduzierbare und aussagekräftige Vergleiche von i18n-Bibliotheken zu ermöglichen. Hier ist unser Ansatz.",
		"aboutThisBenchmark": "Über diesen Benchmark",
		"thisIsAnOpenSource": "Dies ist eine Open-Source-Testanwendung – kein Produkt oder Unternehmen. Ihr einziger Zweck ist es, eine realistische, mehrseitige React-App bereitzustellen, in die verschiedene i18n-Bibliotheken integriert und unter identischen Bedingungen gemessen werden können."
	},
	aboutGrid: {
		"testEnvironment": "Testumgebung",
		"allBenchmarksRunOn": "Alle Benchmarks laufen auf derselben Hardware (M2 MacBook Pro, 16 GB RAM), demselben Browser (Chromium 120 über Playwright) und denselben Netzwerkbedingungen (simuliertes 4G). Jeder Test wird 50 Mal wiederholt und wir berichten den Median mit P95/P99 Perzentilen.",
		"applicationDesign": "Anwendungsdesign",
		"theBenchmarkAppHas10": "Die Benchmark-App hat 10 Seiten mit realistischen Inhalten – Navigation, Formulare, dynamische Listen und statischen Text. Jede Seite verwendet 15–30 Übersetzungsschlüssel, um reale Nutzungsmuster anstelle von synthetischen Mikro-Benchmarks darzustellen.",
		"measurementMethodology": "Messmethodik",
		"weUseBrowserNativeApis": "Wir verwenden browsernative APIs (Performance Timeline, Resource Timing, Layout Instability) kombiniert mit React Profiler-Daten. Bundle-Größen werden nach dem Gzippen mit source-map-explorer gemessen, um Genauigkeit zu gewährleisten.",
		"fairComparison": "Fairer Vergleich",
		"eachI18nLibraryIsIntegrated": "Jede i18n-Bibliothek wird gemäß ihrer offiziellen Dokumentation und Best Practices integriert. Wir konsultieren nach Möglichkeit die Maintainer, um eine optimale Konfiguration sicherzustellen. Dieselbe React-App, gleiche Vite-Konfiguration, gleiches Deployment.",
		"whyThisExists": "Warum es das gibt",
		"choosingAnI18nLibrary": "Die Wahl einer i18n-Bibliothek ist eine architektonische Entscheidung mit langfristigen Folgen. Die meisten Vergleiche konzentrieren sich auf die Ergonomie der API, aber nur wenige messen die Leistungskosten: Wie viel Gewicht fügt die Bibliothek dem Bundle hinzu? Wie wirkt sie sich auf das Rendering aus, wenn Tausende von Übersetzungsschlüsseln geladen werden? Hilft Lazy Loading wirklich oder verlagert es nur die Kosten? Dieser Benchmark beantwortet diese Fragen mit echten Daten.",
		"methodology": "Methodik",
		"theSame10PageApp": "Die gleiche 10-seitige App wird einmal pro Bibliothek erstellt. Wir messen das Produktions-Bundle (über rollup-plugin-visualizer), führen Lighthouse-Audits für Metriken durch und verwenden den React-Profiler, um die Renderzeiten bei Locale-Wechseln zu erfassen. Alle Tests laufen in der CI auf konsistenter Hardware, um reproduzierbare Ergebnisse zu gewährleisten."
	},
	whatWeMeasure: {
		"bundleSizeImpact": "Auswirkungen auf die Bundle-Größe",
		"theAdditionalJavascriptBytes": "Die zusätzlichen JavaScript-Bytes, die an Benutzer gesendet werden, wenn die i18n-Bibliothek und ihre Übersetzungsdateien enthalten sind. Dies wirkt sich direkt auf die Downloadzeit in langsamen Netzwerken aus.",
		"theAdditionalJavascriptBytesSent": "Die zusätzlichen JavaScript-Bytes, die speziell aufgrund der Laufzeit der i18n-Bibliothek plus der Übersetzungsdateien für die aktuelle Locale an den Client gesendet werden.",
		"renderingOverhead": "Rendering-Overhead",
		"howMuchExtraTimeTheLibraryAdds": "Wie viel zusätzliche Zeit die Bibliothek dem Renderzyklus von React hinzufügt. Bibliotheken, die Übersetzungen über einen einzigen Kontext-Provider injizieren, können unnötige Re-Renders im gesamten Komponentenbaum verursachen.",
		"howMuchExtraTimeThe": "Wie viel zusätzliche Zeit die i18n-Schicht zu jedem Komponenten-Render hinzufügt – gemessen mit actualDuration des React Profilers.",
		"hydrationCost": "Hydratationskosten",
		"duringSsrTranslationDataIsSerialized": "Während SSR werden Übersetzungsdaten in HTML serialisiert. Große Wörterbücher erhöhen die HTML-Payload und verlangsamen die Hydratation – den Moment, in dem die Seite interaktiv wird.",
		"duringSsrTranslationDataIs": "Während SSR werden Übersetzungsdaten in das HTML serialisiert. Große Wörterbücher erhöhen die HTML-Payload und verlangsamen die Hydratation – den Moment, in dem die Seite interaktiv wird.",
		"lazyLoadingEffectiveness": "Effektivität von Lazy Loading",
		"whetherSplittingTranslationsByRoute": "Ob das Aufteilen von Übersetzungen nach Route oder Namensraum die Anfangslast tatsächlich reduziert und welche Kompromisse es mit sich bringt (Waterfall-Requests, FOUC, Cache-Komplexität).",
		"localeSwitchSpeed": "Geschwindigkeit beim Locale-Wechsel",
		"howFastTheAppCan": "Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann – einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderns von Komponenten und der Aktualisierung des DOM.",
		"howFastTheAppCanSwitchFromOne": "Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann – einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderns von Komponenten und der Aktualisierung des DOM.",
		"whatWeMeasure": "Was wir messen"
	},
	blogHeader: {
		"blog": "Blog",
		"insightsDeepDivesAnd": "Einblicke, Deep Dives und Updates aus der i18n-Benchmarking-Community.",
		"insightsTutorialsAndAnalysis": "Einblicke, Tutorials und Analysen aus der i18n-Community."
	},
	blogList: {
		"comparingI18nLibrariesIn": "I18n-Bibliotheken im Vergleich 2026: Ein Deep Dive",
		"comparingI18nLibrariesIn2026": "I18n-Bibliotheken im Vergleich 2026: Ein Deep Dive",
		"march152026": "15. März 2026",
		"weTested12DifferentInternationalization": "Wir haben 12 verschiedene Internationalisierungsbibliotheken in Bezug auf Leistung, Bundle-Größe und DX getestet. Hier sind die überraschenden Ergebnisse.",
		"howToReduceYourI18n": "So reduzieren Sie Ihr i18n-Bundle um 60 %",
		"march82026": "8. März 2026",
		"practicalStrategiesForOptimizingTranslation": "Praktische Strategien zur Optimierung von Übersetzungs-Bundles, einschließlich Lazy Loading, Code-Splitting und Optimierungen zur Kompilierzeit.",
		"theStateOfInternationalizationIn": "Der Stand der Internationalisierung in React",
		"february282026": "28. Februar 2026",
		"anOverviewOfTheCurrent": "Ein Überblick über das aktuelle i18n-Ökosystem, der Ansätze von Nachrichtenkatalogen bis hin zu compilerbasierten Lösungen vergleicht.",
		"anOverviewOfTheCurrentI18n": "Ein Überblick über das aktuelle i18n-Ökosystem in React, der Trends, aufkommende Muster und Community-Präferenzen abdeckt.",
		"migratingFromReactI18nextTo": "Migration von react-i18next zu Lingui",
		"february152026": "15. Februar 2026",
		"aStepByStepGuide": "Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.",
		"aStepByStepGuideOnMigrating": "Schritt-für-Schritt-Anleitung zur Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.",
		"serverComponentsAndI18nWhat": "Server Components und i18n: Was ändert sich?",
		"february12026": "1. Februar 2026",
		"reactServerComponentsIntroduce": "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.",
		"benchmarkMethodologyHowWe": "Benchmark-Methodik: Wie wir testen",
		"benchmarkMethodologyHowWeTest": "Benchmark-Methodik: Wie wir testen",
		"january202026": "20. Januar 2026",
		"aTransparentLookAtOur": "Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.",
		"aTransparentLookAtOurBenchmarking": "Ein transparenter Blick auf unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.",
		"readMore": "Weiterlesen →",
		"benchmark": "Benchmark",
		"tutorial": "Tutorial",
		"analysis": "Analyse",
		"meta": "Meta",
		"reactServerComponentsIntroduceNew": "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices."
	},
	careersHeader: {
		"careers": "Karriere",
		"joinOurMissionToMake": "Helfen Sie uns bei unserer Mission, das Web für alle und überall schneller und zugänglicher zu machen.",
		"joinOurMission": "Helfen Sie uns bei unserer Mission, das Internationalisierungs-Ökosystem zu verbessern. Wir sind ein Remote-First-Team, das Wert auf Wirkung, Transparenz und kontinuierliches Lernen legt."
	},
	careersBenefits: {
		"whyJoinUs": "Warum zu uns kommen?",
		"remoteFirst": "Remote-First",
		"workFromAnywhereFully": "Arbeiten Sie von überall aus. Vollständig verteiltes Team in 6 Zeitzonen.",
		"workFromAnywhere": "Arbeiten Sie von überall auf der Welt",
		"openSource": "Open Source",
		"allOurWorkIs": "Unsere gesamte Arbeit ist Open Source. Bauen Sie Ihr öffentliches Portfolio auf, während Sie etwas bewirken.",
		"impactful": "Wirkungsvoll",
		"yourWorkDirectlyHelps": "Ihre Arbeit hilft Entwicklern direkt dabei, bessere und schnellere internationalisierte Anwendungen zu erstellen.",
		"competitivePay": "Wettbewerbsfähige Bezahlung",
		"topOfMarketCompensation": "Überdurchschnittliche Vergütung",
		"openSourceTime": "Open-Source-Zeit",
		"percentTimeForOss": "20 % Zeit für OSS-Beiträge"
	},
	openPositions: {
		"openPositions": "Offene Stellen",
		"seniorPerformanceEngineer": "Senior Performance Engineer",
		"seniorFrontendEngineer": "Senior Frontend Engineer",
		"fullTime": "Vollzeit",
		"remote": "Remote",
		"leadBenchmarkDesignAnd": "Leitung von Benchmark-Design und -Implementierung. Tiefe Kenntnisse der V8-Interna, Browser-Performance-APIs und statistischen Analyse erforderlich.",
		"technicalWriter": "Technischer Redakteur",
		"partTime": "Teilzeit",
		"createAndMaintainDocumentation": "Erstellung und Pflege von Dokumentationen, Blog-Posts und Bildungsinhalten über i18n-Performance-Best-Practices.",
		"frontendDeveloper": "Frontend-Entwickler",
		"buildAndMaintainThe": "Aufbau und Pflege des Benchmark-Dashboards, der Vergleichstools und der interaktiven Visualisierungen.",
		"buildAndMaintainOur": "Aufbau und Pflege unseres Benchmarking-Dashboards und der Entwickler-Tools unter Verwendung von React, TypeScript und Vite.",
		"devOpsEngineer": "DevOps Engineer",
		"designAndMaintainThe": "Design und Pflege der CI/CD-Pipeline, die Benchmarks bei jedem Bibliotheks-Update automatisch ausführt.",
		"applyNow": "Jetzt bewerben",
		"engineering": "Engineering",
		"backendEngineer": "Backend-Entwickler",
		"designAndScaleOur": "Design und Skalierung unserer Cloud-Benchmarking-Infrastruktur, die täglich Tausende von automatisierten Durchläufen verarbeitet.",
		"documentation": "Dokumentation",
		"createComprehensiveGuidesApi": "Erstellung umfassender Leitfäden, API-Referenzen und Tutorials für unsere Benchmarking-Plattform.",
		"devrelEngineer": "DevRel Engineer",
		"sfRemote": "San Francisco / Remote",
		"community": "Community",
		"engageWithTheI18n": "Zusammenarbeit mit der i18n-Community durch Vorträge, Workshops, Blog-Posts und Open-Source-Beiträge.",
		"qaEngineer": "QA Engineer",
		"ensureTheAccuracyAnd": "Sicherstellung der Genauigkeit und Zuverlässigkeit der Benchmark-Ergebnisse durch strenge Tests und Validierung."
	},
	contactHeader: {
		"contactUs": "Kontaktieren Sie uns",
		"haveQuestionsOrWantTo": "Haben Sie Fragen oder möchten Sie beitragen? Wir freuen uns, von Ihnen zu hören.",
		"getInTouch": "Kontakt aufnehmen",
		"haveIdeasFoundABug": "Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern? Kontaktieren Sie uns."
	},
	contactForm: {
		"name": "Name",
		"yourName": "Ihr Name",
		"email": "E-Mail",
		"emailPlaceholder": "sie@beispiel.de",
		"subject": "Betreff",
		"topic": "Thema",
		"bugReport": "Fehlerbericht",
		"newBenchmarkIdea": "Neue Benchmark-Idee",
		"methodologyQuestion": "Frage zur Methodik",
		"contribution": "Beitrag",
		"other": "Sonstiges",
		"message": "Nachricht",
		"messagePlaceholder": "Beschreiben Sie Ihre Frage oder Idee...",
		"sendMessage": "Nachricht senden",
		"wellGetBackTo": "Wir melden uns innerhalb von 48 Stunden bei Ihnen."
	},
	faqHeader: {
		"frequentlyAskedQuestions": "Häufig gestellte Fragen",
		"everythingYouNeedTo": "Alles, was Sie über das i18n Benchmark-Projekt wissen müssen.",
		"everythingYouNeedToKnow": "Alles, was Sie über i18n Benchmark wissen müssen."
	},
	faqList: {
		"howAreTheBenchmarks": "Wie werden die Benchmarks durchgeführt?",
		"allBenchmarksAreRun": "Alle Benchmarks werden mit Playwright auf einem konsistenten Hardware-Setup (M2 MacBook Pro) mit simulierten 4G-Netzwerkbedingungen durchgeführt. Jeder Test umfasst 50 Iterationen, und wir berichten Meridian-, P95- und P99-Werte.",
		"whatLibrariesAreCurrently": "Welche Bibliotheken werden derzeit getestet?",
		"weCurrentlyBenchmarkReactI18next": "Wir benchmarken derzeit react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl und Paraglide. Wir planen, basierend auf Community-Anfragen weitere hinzuzufügen.",
		"canISubmitMyOwn": "Kann ich meine eigenen Benchmarks einreichen?",
		"canISubmitMyOwnBenchmarks": "Kann ich meine eigenen Benchmarks einreichen?",
		"absolutelyWeWelcomeCommunity": "Absolut! Wir begrüßen Community-Beiträge. Forken Sie das Repository, fügen Sie Ihre Bibliotheksintegration gemäß unserer Vorlage hinzu und senden Sie einen Pull Request. Weitere Details finden Sie im Contributing Guide.",
		"howOftenAreResults": "Wie oft werden die Ergebnisse aktualisiert?",
		"benchmarksRunAutomaticallyVia": "Benchmarks laufen automatisch über CI bei jedem Dependency-Update und wöchentlich auf dem Main-Branch. Die Ergebnisse werden innerhalb von 24 Stunden im Dashboard veröffentlicht.",
		"areTheResultsStatistically": "Sind die Ergebnisse statistisch signifikant?",
		"yesWeUseThe": "Ja. Wir verwenden den Mann-Whitney-U-Test mit einem Signifikanzniveau von 0,05, um Verteilungen zu vergleichen. Wir berichten auch über Konfidenzintervalle und Effektstärken.",
		"whatIsI18nBenchmark": "Was ist i18n Benchmark?",
		"i18nBenchmarkIsAnOpenSource": "i18n Benchmark ist eine Open-Source-Benchmarking-Suite, die die Leistung, Bundle-Größe und Entwicklererfahrung von Internationalisierungsbibliotheken für JavaScript- und React-Anwendungen misst und vergleicht.",
		"howAreBenchmarksConducted": "Wie werden Benchmarks durchgeführt?",
		"weRunStandardizedTestsInIsolated": "Wir führen standardisierte Tests in isolierten Umgebungen unter Verwendung konsistenter Hardware durch. Jeder Benchmark wird mehrfach wiederholt, um die statistische Signifikanz zu gewährleisten. Alle Testkonfigurationen sind in unserem GitHub-Repository öffentlich zugänglich.",
		"whichLibrariesAreCurrentlySupported": "Welche Bibliotheken werden derzeit unterstützt?",
		"weSupportReactI18nextReactIntl": "Wir unterstützen react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react und Tolgee.",
		"yesCommunityBenchmarkSubmissionsAre": "Ja! Community-Benchmark-Einreichungen sind willkommen. Forken Sie unser Repository, fügen Sie Ihren Benchmark gemäß unserem Beitragsleitfaden hinzu und senden Sie einen Pull Request. Unser Team wird qualifizierte Einreichungen prüfen und zusammenführen.",
		"howOftenAreBenchmarksUpdated": "Wie oft werden Benchmarks aktualisiert?",
		"weReRunAllBenchmarksWeekly": "Wir führen alle Benchmarks wöchentlich mit den neuesten stabilen Versionen jeder Bibliothek erneut durch. Major-Releases lösen einen sofortigen Re-Benchmark-Zyklus aus.",
		"isTheDataReliable": "Sind die Daten zuverlässig?",
		"weFollowRigorousStatisticalMethodologyIncluding": "Wir folgen einer strengen statistischen Methodik einschließlich Warm-up-Runs, Ausreißererkennung und Konfidenzintervallen. Alle Rohdaten werden zusammen mit unserer Analyse für volle Transparenz veröffentlicht.",
		"doYouOfferConsultingServices": "Bieten Sie Beratungsdienstleistungen an?",
		"yesOurEnterprisePlanIncludesConsulting": "Ja, unser Enterprise-Plan umfasst Beratungsstunden für Teams, die i18n-Lösungen evaluieren. Wir können maßgeschneiderte Empfehlungen basierend auf Ihrem spezifischen Anwendungsfall, Ihrer Skalierung und Ihren Einschränkungen geben.",
		"howCanIContribute": "Wie kann ich beitragen?",
		"thereAreManyWaysToContribute": "Es gibt viele Möglichkeiten, beizutragen: Benchmarks einreichen, die Dokumentation verbessern, Fehler melden, neue Metriken vorschlagen oder das Projekt sponsern. Besuchen Sie unser GitHub-Repository für weitere Details."
	},
	pricingHeader: {
		"pricing": "Preise",
		"transparentPricingForEvery": "Transparente Preise für jede Phase Ihrer i18n-Reise."
	},
	pricingTiers: {
		"freeTier": "Kostenlose Stufe",
		"free": "Kostenlos",
		"publicBenchmarkDashboard": "Öffentliches Benchmark-Dashboard",
		"basicLibraryComparisons": "Einfache Bibliotheksvergleiche",
		"communityForumAccess": "Zugang zum Community-Forum",
		"monthlyResultDigest": "Monatliche Ergebniszusammenfassung",
		"getStarted": "Erste Schritte",
		"proTier": "Pro-Stufe",
		"perMonth": "/Monat",
		"allFreeFeatures": "Alle Funktionen der kostenlosen Stufe",
		"customBenchmarkConfigurations": "Benutzerdefinierte Benchmark-Konfigurationen",
		"privateResultsDashboard": "Privates Ergebnis-Dashboard",
		"apiAccess1000Requests": "API-Zugriff (1.000 Anfragen/Tag)",
		"slackIntegration": "Slack-Integration",
		"subscribeToPro": "Pro abonnieren",
		"enterpriseTier": "Enterprise-Stufe",
		"custom": "Individuell",
		"allProFeatures": "Alle Pro-Funktionen",
		"dedicatedBenchmarkInfrastructure": "Dedizierte Benchmark-Infrastruktur",
		"customLibraryIntegrations": "Benutzerdefinierte Bibliotheksintegrationen",
		"slaGuarantees": "SLA-Garantien",
		"prioritySupport": "Priorisierter Support",
		"contactSales": "Vertrieb kontaktieren"
	},
	productsHeader: {
		"products": "Produkte",
		"toolsAndServicesTo": "Tools und Services, die Ihnen bei der Optimierung Ihrer Internationalisierungsstrategie helfen."
	},
	productsGrid: {
		"benchmarkDashboard": "Benchmark-Dashboard",
		"interactiveChartsAndTables": "Interaktive Diagramme und Tabellen zum Vergleich von i18n-Bibliotheken in Bezug auf Bundle-Größe, Renderzeit und Hydratationskosten.",
		"bundleAnalyzer": "Bundle-Analyzer",
		"uploadYourBuildOutput": "Laden Sie Ihren Build-Output hoch und erhalten Sie eine detaillierte Aufschlüsselung, wie viel Ihr Bundle durch i18n-Overhead belastet wird.",
		"migrationAssistant": "Migrations-Assistent",
		"automatedCodemodsAndGuides": "Automatisierte Codemods und Leitfäden für die Migration zwischen i18n-Bibliotheken mit minimaler Unterbrechung.",
		"performanceMonitor": "Performance-Monitor",
		"continuousPerformanceTrackingFor": "Kontinuierliche Leistungsverfolgung für Ihre i18n-Implementierung. Erhalten Sie Benachrichtigungen, wenn sich das Laden von Übersetzungen verschlechtert.",
		"learnMore": "Mehr erfahren"
	},
	settingsHeader: {
		"settings": "Einstellungen",
		"manageYourAccountPreferences": "Verwalten Sie Ihre Kontoeinstellungen und Konfiguration.",
		"manageYourAccount": "Verwalten Sie Ihre Kontoeinstellungen und Konfiguration."
	},
	profileSection: {
		"profile": "Profil",
		"displayName": "Anzeigename",
		"email": "E-Mail"
	},
	preferencesSection: {
		"preferences": "Einstellungen",
		"emailNotifications": "E-Mail-Benachrichtigungen",
		"receiveWeeklyBenchmark": "Wöchentliche Benchmark-Berichte erhalten",
		"receiveWeeklyBenchmarkReports": "Wöchentliche Benchmark-Berichte erhalten",
		"toggleNotifications": "Benachrichtigungen umschalten",
		"darkMode": "Dunkelmodus",
		"useDarkColorScheme": "Dunkles Farbschema verwenden",
		"toggleDarkMode": "Dunkelmodus umschalten",
		"defaultLanguage": "Standardsprache",
		"englishEn": "Englisch (en)",
		"frenchFr": "Französisch (fr)",
		"germanDe": "Deutsch (de)",
		"spanishEs": "Spanisch (es)",
		"japaneseJa": "Japanisch (ja)",
		"chineseSimplifiedZhCn": "Chinesisch vereinfacht (zh-CN)",
		"arabicAr": "Arabisch (ar)"
	},
	apiAccessSection: {
		"apiAccess": "API-Zugriff",
		"apiKey": "API-Schlüssel",
		"useThisKeyTo": "Verwenden Sie diesen Schlüssel, um programmgesteuert auf die Benchmarking-API zuzugreifen.",
		"copy": "Kopieren"
	},
	settingsFooter: {
		"cancel": "Abbrechen",
		"saveChanges": "Änderungen speichern"
	},
	teamHeader: {
		"ourTeam": "Unser Team",
		"meetThePeopleBehindI18n": "Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, vereint durch die Leidenschaft für großartige Entwickler-Tools."
	},
	teamGrid: {
		"sarahChen": "Sarah Chen",
		"founderLeadEngineer": "Gründerin & Lead Engineer",
		"formerGoogleEngineerWith": "Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.",
		"formerGoogleEngineerWith10": "Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.",
		"marcusWeber": "Marcus Weber",
		"performanceEngineer": "Performance Engineer",
		"specializesInJavascriptPerformance": "Spezialisierung auf JavaScript-Performance-Optimierung und Benchmarking-Methodik. Zuvor bei Vercel.",
		"specializesInJavascriptPerformanceOptimization": "Spezialisierung auf JavaScript-Performance-Optimierung und Benchmarking-Methodik. Zuvor bei Vercel.",
		"aishaPatel": "Aisha Patel",
		"developerAdvocate": "Developer Advocate",
		"passionateAboutDeveloperExperience": "Leidenschaft für Developer Experience und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.",
		"passionateAboutDeveloperExperienceAnd": "Leidenschaft für Developer Experience und Bildung. Sprecherin auf der React Conf, JSConf und i18nNext.",
		"tomasRodriguez": "Tomás Rodríguez",
		"fullStackDeveloper": "Full-Stack-Entwickler",
		"maintainsTheBenchmarkingInfrastructure": "Pflegt die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Contributor für Lingui.",
		"maintainsTheBenchmarkingInfrastructureAnd": "Pflegt die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Contributor für Lingui.",
		"yukiTanaka": "Yuki Tanaka",
		"dataAnalyst": "Data Analyst",
		"ensuresStatisticalRigorIn": "Gewährleistet statistische Strenge bei allen Benchmark-Ergebnissen. PhD in Angewandter Statistik vom MIT.",
		"ensuresStatisticalRigorInAll": "Gewährleistet statistische Strenge bei allen Benchmark-Ergebnissen. PhD in Angewandter Statistik vom MIT.",
		"elenaKowalski": "Elena Kowalski",
		"communityManager": "Community Manager",
		"managesCommunityContributions": "Verwaltet Community-Beiträge, Partnerschaften und Events. Hintergrund in Open-Source-Governance.",
		"managesCommunityContributionsPartnershipsAnd": "Verwaltet Community-Beiträge, Partnerschaften und Events. Hintergrund in Open-Source-Governance."
	},
	mockBanner: "⚠️ Diese Seite enthält Beispieldaten, die nur für Benchmarking-Zwecke dienen. Sie steht in keiner Verbindung zu einem realen Unternehmen oder Dienst."
};
var es_default = {
	route: {
		"oopsPageNotFound": "¡Ups! Página no encontrada",
		"returnToHome": "Volver al inicio",
		"couldNotMeasureHydrationDuration": "No se pudo medir la duración de la hidratación:"
	},
	header: {
		"home": "Inicio",
		"methodology": "Metodología",
		"mockPages": "Páginas de prueba",
		"products": "Productos",
		"pricing": "Precios",
		"team": "Equipo",
		"blog": "Blog",
		"careers": "Carreras",
		"faq": "Preguntas frecuentes",
		"contact": "Contacto",
		"settings": "Ajustes",
		"goToGithub": "Ir a GitHub"
	},
	footer: {
		"resources": "Recursos",
		"contact": "Contacto",
		"github": "GitHub",
		"methodology": "Metodología",
		"contributing": "Contribuir",
		"builtWith": "i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y TanStack Router.",
		"anOpenSourceTestApplication": "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el tiempo de carga y la reactividad de la aplicación."
	},
	common: {
		"readMore": "Leer más",
		"copy": "Copiar",
		"cancel": "Cancelar",
		"saveChanges": "Guardar cambios"
	},
	themeToggle: {
		"themeModeAutoSystemClick": "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
		"themeModeLightClick": "Modo de tema: claro. Haga clic para cambiar al modo oscuro.",
		"themeModeDarkClick": "Modo de tema: oscuro. Haga clic para cambiar al modo automático (sistema).",
		"themeAuto": "Tema: Automático",
		"themeDark": "Tema: Oscuro",
		"themeLight": "Tema: Claro"
	},
	hero: {
		"aTestApplicationDesignedTo": "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el rendimiento de carga y la reactividad del renderizado.",
		"viewResults": "Ver resultados"
	},
	whyItMatters: {
		"whyTheseMetricsMatter": "Por qué importan estas métricas",
		"bundleSize": "Tamaño del paquete",
		"theBundleIsTheData": "El paquete son los datos que se envían a cada usuario en todo el mundo. Un paquete más grande significa tiempos de descarga más largos, especialmente en conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código de tiempo de ejecución, además de los propios archivos de traducción.",
		"renderingHydration": "Renderizado e hidratación",
		"connectingALargeJson": "Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la fijación de objetos de traducción masivos añade latencia antes de que la página se vuelva interactiva, lo que afecta directamente al tiempo de interacción (TTI).",
		"dynamicLoading": "Carga dinámica",
		"loadingAllTranslationsUpfront": "Cargar todas las traducciones por adelantado sobrecarga la carga útil inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que necesita la página actual. Sin embargo, la carga diferida introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de almacenamiento en caché. Medir ambas estrategias es esencial."
	},
	understandingImpact: {
		"understandingTheImpact": "Entendiendo el impacto",
		"whyASingleLargeJson": "Por qué un solo JSON grande puede dañar el rendimiento",
		"manyI18nLibrariesStore": "Muchas bibliotecas i18n almacenan las traducciones en un solo objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:",
		"manyI18nLibrariesStoreTranslations": "Muchas bibliotecas i18n almacenan las traducciones en un solo objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:",
		"theJsonMustBeParsed": "El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.",
		"contextBasedArchitecturesCan": "Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia la configuración regional, porque se notifica a cada consumidor incluso si sus claves específicas no han cambiado.",
		"contextBasedArchitecturesCanCause": "Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia la configuración regional, porque se notifica a cada consumidor incluso si sus claves específicas no han cambiado.",
		"duringServerSideRenderingThe": "Durante el renderizado del lado del servidor, el diccionario completo se serializa en la carga útil HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.",
		"theTradeOffsOfDynamic": "Las compensaciones de la carga dinámica",
		"splittingTranslationsIntoPerRoute": "Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente la carga útil inicial. Pero introduce nuevos desafíos:",
		"waterfallRequests": "Solicitudes en cascada:",
		"theAppMustFirstLoad": "La aplicación debe cargarse primero, determinar la configuración regional y luego buscar el fragmento correcto, lo que añade viajes de ida y vuelta a la red.",
		"flashOfUntranslatedContent": "Parpadeo de contenido no traducido (FOUC):",
		"flashOfUntranslatedContentFouc": "Parpadeo de contenido no traducido (FOUC):",
		"usersMayBrieflySeeTranslation": "Los usuarios pueden ver brevemente las claves de traducción o un idioma de respaldo antes de que llegue el fragmento.",
		"cacheInvalidation": "Invalidación de caché:",
		"updatingTranslationsRequiresCache": "La actualización de las traducciones requiere estrategias de invalidación de caché para garantizar que los usuarios obtengan contenido fresco sin volver a descargar fragmentos sin cambios.",
		"whatThisBenchmarkMeasures": "Lo que mide este benchmark",
		"thisTestAppProvidesA": "Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar las bibliotecas i18n en tres ejes: el peso que añaden a su paquete JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido, y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables."
	},
	resultsTable: {
		"sampleResults": "Resultados de muestra",
		"bundleSize": "Tamaño del paquete",
		"lookupTime": "Tiempo de búsqueda",
		"lazyLoading": "Carga diferida",
		"library": "Biblioteca"
	},
	aboutHeader: {
		"methodology": "Metodología",
		"weDesignedThisBenchmarkTo": "Diseñamos este benchmark para proporcionar comparaciones justas, reproducibles y significativas de las bibliotecas i18n. Este es nuestro enfoque.",
		"aboutThisBenchmark": "Sobre este benchmark",
		"thisIsAnOpenSource": "Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React de varias páginas realista donde se puedan integrar y medir diferentes bibliotecas i18n en condiciones idénticas."
	},
	aboutGrid: {
		"testEnvironment": "Entorno de prueba",
		"allBenchmarksRunOn": "Todos los benchmarks se ejecutan en el mismo hardware (M2 MacBook Pro, 16 GB de RAM), el mismo navegador (Chromium 120 a través de Playwright) y las mismas condiciones de red (4G simulado). Cada prueba se repite 50 veces e informamos la mediana con percentiles P95/P99.",
		"applicationDesign": "Diseño de la aplicación",
		"theBenchmarkAppHas10": "La aplicación de benchmark tiene 10 páginas con contenido realista: navegación, formularios, listas dinámicas y texto estático. Cada página utiliza de 15 a 30 claves de traducción para representar patrones de uso del mundo real en lugar de microbenchmarks sintéticos.",
		"measurementMethodology": "Metodología de medición",
		"weUseBrowserNativeApis": "Utilizamos API nativas del navegador (Performance Timeline, Resource Timing, Layout Instability) combinadas con datos de React Profiler. Los tamaños de los paquetes se miden después de gzip utilizando source-map-explorer para mayor precisión.",
		"fairComparison": "Comparación justa",
		"eachI18nLibraryIsIntegrated": "Cada biblioteca i18n se integra siguiendo su documentación oficial y mejores prácticas. Consultamos a los mantenedores cuando es posible para garantizar una configuración óptima. La misma aplicación React, la misma configuración de Vite, el mismo despliegue.",
		"whyThisExists": "Por qué existe esto",
		"choosingAnI18nLibrary": "Elegir una biblioteca i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso añade la biblioteca al paquete? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿La carga diferida realmente ayuda o solo traslada el coste? Este benchmark responde a esas preguntas con datos reales.",
		"methodology": "Metodología",
		"theSame10PageApp": "La misma aplicación de 10 páginas se construye una vez por biblioteca. Medimos el paquete de producción (a través de rollup-plugin-visualizer), realizamos auditorías de Lighthouse para las métricas de carga y utilizamos React Profiler para capturar los tiempos de renderizado durante los intercambios de configuración regional. Todas las pruebas se ejecutan en CI en hardware consistente para garantizar resultados reproducibles."
	},
	whatWeMeasure: {
		"bundleSizeImpact": "Impacto en el tamaño del paquete",
		"theAdditionalJavascriptBytes": "Los bytes de JavaScript adicionales enviados a los usuarios cuando se incluye la biblioteca i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.",
		"theAdditionalJavascriptBytesSent": "Los bytes de JavaScript adicionales enviados al cliente específicamente debido al tiempo de ejecución de la biblioteca i18n, más los archivos de traducción para la configuración regional actual.",
		"renderingOverhead": "Sobrecarga de renderizado",
		"howMuchExtraTimeTheLibraryAdds": "Cuánto tiempo extra añade la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar renderizados innecesarios en todo el árbol de componentes.",
		"howMuchExtraTimeThe": "Cuánto tiempo extra añade la capa i18n a cada renderizado de componente, medido utilizando el actualDuration de React Profiler.",
		"hydrationCost": "Coste de hidratación",
		"duringSsrTranslationDataIsSerialized": "Durante el SSR, los datos de traducción se serializan en HTML. Los diccionarios grandes aumentan la carga útil HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.",
		"duringSsrTranslationDataIs": "Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan la carga útil HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.",
		"lazyLoadingEffectiveness": "Eficacia de la carga diferida",
		"whetherSplittingTranslationsByRoute": "Si la división de las traducciones por ruta o por espacio de nombres reduce realmente la carga inicial, y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de caché).",
		"localeSwitchSpeed": "Velocidad de cambio de configuración regional",
		"howFastTheAppCan": "Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.",
		"howFastTheAppCanSwitchFromOne": "Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.",
		"whatWeMeasure": "Qué medimos"
	},
	blogHeader: {
		"blog": "Blog",
		"insightsDeepDivesAnd": "Perspectivas, inmersiones profundas y actualizaciones de la comunidad de benchmarking i18n.",
		"insightsTutorialsAndAnalysis": "Perspectivas, tutoriales y análisis de la comunidad i18n."
	},
	blogList: {
		"comparingI18nLibrariesIn": "Comparando bibliotecas i18n en 2026: Una inmersión profunda",
		"comparingI18nLibrariesIn2026": "Comparando bibliotecas i18n en 2026: Una inmersión profunda",
		"march152026": "15 de marzo de 2026",
		"weTested12DifferentInternationalization": "Probamos 12 bibliotecas de internacionalización diferentes en cuanto a rendimiento, tamaño del paquete y DX. Aquí están los sorprendentes resultados.",
		"howToReduceYourI18n": "Cómo reducir su paquete i18n en un 60%",
		"march82026": "8 de marzo de 2026",
		"practicalStrategiesForOptimizingTranslation": "Estrategias prácticas para optimizar los paquetes de traducción, incluyendo carga diferida, división de código y optimizaciones en el tiempo de compilación.",
		"theStateOfInternationalizationIn": "El estado de la internacionalización en React",
		"february282026": "28 de febrero de 2026",
		"anOverviewOfTheCurrent": "Una descripción general del ecosistema i18n actual, comparando enfoques desde catálogos de mensajes hasta soluciones basadas en compiladores.",
		"anOverviewOfTheCurrentI18n": "Una descripción general del ecosistema i18n actual en React, que cubre tendencias, patrones emergentes y preferencias de la comunidad.",
		"migratingFromReactI18nextTo": "Migrando de react-i18next a Lingui",
		"february152026": "15 de febrero de 2026",
		"aStepByStepGuide": "Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.",
		"aStepByStepGuideOnMigrating": "Una guía paso a paso sobre la migración de una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.",
		"serverComponentsAndI18nWhat": "Server Components e i18n: ¿Qué cambia?",
		"february12026": "1 de febrero de 2026",
		"reactServerComponentsIntroduce": "React Server Components introduce nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.",
		"benchmarkMethodologyHowWe": "Metodología de benchmark: Cómo probamos",
		"benchmarkMethodologyHowWeTest": "Metodología de benchmark: Cómo probamos",
		"january202026": "20 de enero de 2026",
		"aTransparentLookAtOur": "Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.",
		"aTransparentLookAtOurBenchmarking": "Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.",
		"readMore": "Leer más →",
		"benchmark": "Benchmark",
		"tutorial": "Tutorial",
		"analysis": "Análisis",
		"meta": "Meta",
		"reactServerComponentsIntroduceNew": "React Server Components introduce nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas."
	},
	careersHeader: {
		"careers": "Carreras",
		"joinOurMissionToMake": "Únase a nuestra misión para hacer que la web sea más rápida y accesible para todos, en todas partes.",
		"joinOurMission": "Únase a nuestra misión para mejorar el ecosystème de internacionalización. Somos un equipo que prioriza el trabajo remoto y valora el impacto, la transparencia y el aprendizaje continuo."
	},
	careersBenefits: {
		"whyJoinUs": "¿Por qué unirse a nosotros?",
		"remoteFirst": "Primero el trabajo remoto",
		"workFromAnywhereFully": "Trabaje desde cualquier lugar. Equipo totalmente distribuido en 6 zonas horarias.",
		"workFromAnywhere": "Trabaje desde cualquier lugar del mundo",
		"openSource": "Código abierto",
		"allOurWorkIs": "Todo nuestro trabajo es de código abierto. Construya su portfolio público mientras causa impacto.",
		"impactful": "Impactante",
		"yourWorkDirectlyHelps": "Su trabajo ayuda directamente a los desarrolladores a crear aplicaciones internacionalizadas mejores y más rápidas.",
		"competitivePay": "Pago competitivo",
		"topOfMarketCompensation": "Compensación superior al mercado",
		"openSourceTime": "Tiempo de código abierto",
		"percentTimeForOss": "20% tiempo para contribuciones OSS"
	},
	openPositions: {
		"openPositions": "Posiciones abiertas",
		"seniorPerformanceEngineer": "Ingeniero de rendimiento senior",
		"seniorFrontendEngineer": "Ingeniero de frontend senior",
		"fullTime": "Tiempo completo",
		"remote": "Remoto",
		"leadBenchmarkDesignAnd": "Liderar el diseño e implementación de benchmarks. Se requiere un conocimiento profundo de los internos de V8, API de rendimiento del navegador y análisis estadístico.",
		"technicalWriter": "Escritor técnico",
		"partTime": "Tiempo parcial",
		"createAndMaintainDocumentation": "Crear y mantener documentación, publicaciones de blog y contenido educativo sobre las mejores prácticas de rendimiento de i18n.",
		"frontendDeveloper": "Desarrollador frontend",
		"buildAndMaintainThe": "Construir y mantener el panel de benchmark, herramientas de comparación y visualizaciones interactivas.",
		"buildAndMaintainOur": "Construir y mantener nuestro panel de benchmarking y herramientas de desarrollo utilizando React, TypeScript y Vite.",
		"devOpsEngineer": "Ingeniero de DevOps",
		"designAndMaintainThe": "Diseñar y mantener la canalización de CI/CD que ejecuta benchmarks automáticamente en cada actualización de biblioteca.",
		"applyNow": "Aplicar ahora",
		"engineering": "Ingeniería",
		"backendEngineer": "Ingeniero de backend",
		"designAndScaleOur": "Diseñar y escalar nuestra infraestructura cloud de benchmarking que maneja miles de ejecuciones automatizadas diariamente.",
		"documentation": "Documentación",
		"createComprehensiveGuidesApi": "Crear guías completas, referencias de API y tutoriales para nuestra plataforma de benchmarking.",
		"devrelEngineer": "Ingeniero de DevRel",
		"sfRemote": "San Francisco / Remoto",
		"community": "Comunidad",
		"engageWithTheI18n": "Interactuar con la comunidad i18n a través de charlas, talleres, publicaciones de blog y contribuciones de código abierto.",
		"qaEngineer": "Ingeniero de QA",
		"ensureTheAccuracyAnd": "Asegurar la precisión y fiabilidad de los resultados de benchmark a través de pruebas rigurosas y validación."
	},
	contactHeader: {
		"contactUs": "Contáctenos",
		"haveQuestionsOrWantTo": "¿Tiene preguntas o quiere contribuir? Nos encantaría saber de usted.",
		"getInTouch": "Póngase en contacto",
		"haveIdeasFoundABug": "Tiene ideas, encontró un error o quiere contribuir con un benchmark? Contáctenos."
	},
	contactForm: {
		"name": "Nombre",
		"yourName": "Tu nombre",
		"email": "Correo electrónico",
		"emailPlaceholder": "tu@ejemplo.com",
		"subject": "Asunto",
		"topic": "Tema",
		"bugReport": "Informe de error",
		"newBenchmarkIdea": "Nueva idea de benchmark",
		"methodologyQuestion": "Pregunta de metodología",
		"contribution": "Contribución",
		"other": "Otro",
		"message": "Mensaje",
		"messagePlaceholder": "Describe tu pregunta o idea...",
		"sendMessage": "Enviar mensaje",
		"wellGetBackTo": "Nos pondremos en contacto con usted en un plazo de 48 horas."
	},
	faqHeader: {
		"frequentlyAskedQuestions": "Preguntas frecuentes",
		"everythingYouNeedTo": "Todo lo que necesita saber sobre el proyecto i18n Benchmark.",
		"everythingYouNeedToKnow": "Todo lo que necesita saber sobre i18n Benchmark."
	},
	faqList: {
		"howAreTheBenchmarks": "¿Cómo se ejecutan los benchmarks?",
		"allBenchmarksAreRun": "Todos los benchmarks se ejecutan utilizando Playwright en una configuración de hardware consistente (M2 MacBook Pro) con condiciones de red 4G simuladas. Cada prueba realiza 50 iteraciones e informamos los valores de mediana, P95 y P99.",
		"whatLibrariesAreCurrently": "¿Qué bibliotecas se prueban actualmente?",
		"weCurrentlyBenchmarkReactI18next": "Actualmente probamos react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl y Paraglide. Planeamos añadir más basándonos en las peticiones de la comunidad.",
		"canISubmitMyOwn": "¿Puedo enviar mis propios benchmarks?",
		"canISubmitMyOwnBenchmarks": "¿Puedo enviar mis propios benchmarks?",
		"absolutelyWeWelcomeCommunity": "¡Absolutamente! Agradecemos las contribuciones de la comunidad. Forkee el repositorio, añada la integración de su biblioteca siguiendo nuestra plantilla y envíe una solicitud de extracción. Consulte la guía de contribución para más detalles.",
		"howOftenAreResults": "¿Con qué frecuencia se actualizan los resultados?",
		"benchmarksRunAutomaticallyVia": "Los benchmarks se ejecutan automáticamente a través de CI en cada actualización de dependencia y semanalmente en la rama principal. Los resultados se publican en el panel en un plazo de 24 horas.",
		"areTheResultsStatistically": "¿Son los resultados estadísticamente significativos?",
		"yesWeUseThe": "Sí. Utilizamos la prueba U de Mann-Whitney con un nivel de significación de 0,05 para comparar distribuciones. También informamos intervalos de confianza y tamaños de efecto.",
		"whatIsI18nBenchmark": "¿Qué es i18n Benchmark?",
		"i18nBenchmarkIsAnOpenSource": "i18n Benchmark es una suite de benchmarking de código abierto que mide y compara el rendimiento, el tamaño del paquete y la experiencia del desarrollador de las bibliotecas de internacionalización para aplicaciones JavaScript y React.",
		"howAreBenchmarksConducted": "¿Cómo se llevan a cabo los benchmarks?",
		"weRunStandardizedTestsInIsolated": "Ejecutamos pruebas estandarizadas en entornos aislados utilizando hardware consistente. Cada benchmark se repite varias veces para garantizar la significación estadística. Todas las configuraciones de prueba están disponibles públicamente en nuestro repositorio de GitHub.",
		"whichLibrariesAreCurrentlySupported": "¿Qué bibliotecas son compatibles actualmente?",
		"weSupportReactI18nextReactIntl": "Soportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react y Tolgee.",
		"yesCommunityBenchmarkSubmissionsAre": "¡Sí! Los envíos de benchmarks de la comunidad son bienvenidos. Forkee nuestro repositorio, añada su benchmark siguiendo nuestra guía de contribución y envíe una solicitud de extracción. Nuestro equipo revisará y fusionará los envíos que califiquen.",
		"howOftenAreBenchmarksUpdated": "¿Con qué frecuencia se actualizan los benchmarks?",
		"weReRunAllBenchmarksWeekly": "Volvemos a ejecutar todos los benchmarks semanalmente contra las últimas versiones estables de cada biblioteca. Los lanzamientos de versiones mayores desencadenan un ciclo de benchmark inmediato.",
		"isTheDataReliable": "¿Son fiables los datos?",
		"weFollowRigorousStatisticalMethodologyIncluding": "Seguimos una metodología estadística rigurosa que incluye ejecuciones de calentamiento, detección de valores atípicos e intervalos de confianza. Todos los datos en bruto se publican junto con nuestro análisis para una total transparencia.",
		"doYouOfferConsultingServices": "¿Ofrecen servicios de consultoría?",
		"yesOurEnterprisePlanIncludesConsulting": "Sí, nuestro plan Enterprise incluye horas de consultoría para equipos que evalúan soluciones i18n. Podemos proporcionar recomendaciones personalizadas basadas en su caso de uso específico, escala y limitaciones.",
		"howCanIContribute": "¿Cómo puedo contribuir?",
		"thereAreManyWaysToContribute": "Hay muchas maneras de contribuir: enviar benchmarks, mejorar la documentación, informar de errores, sugerir nuevas métricas o patrocinar el proyecto. Visite nuestro repositorio de GitHub para más detalles."
	},
	pricingHeader: {
		"pricing": "Precios",
		"transparentPricingForEvery": "Precios transparentes para cada etapa de su viaje i18n."
	},
	pricingTiers: {
		"freeTier": "Nivel gratuito",
		"free": "Gratis",
		"publicBenchmarkDashboard": "Panel de benchmark público",
		"basicLibraryComparisons": "Comparaciones básicas de bibliotecas",
		"communityForumAccess": "Acceso al foro de la comunidad",
		"monthlyResultDigest": "Resumen mensual de resultados",
		"getStarted": "Empezar",
		"proTier": "Nivel Pro",
		"perMonth": "/mes",
		"allFreeFeatures": "Todas las funciones gratuitas",
		"customBenchmarkConfigurations": "Configuraciones de benchmark personalizadas",
		"privateResultsDashboard": "Panel de resultados privado",
		"apiAccess1000Requests": "Acceso API (1.000 solicitudes/día)",
		"slackIntegration": "Integración con Slack",
		"subscribeToPro": "Suscribirse a Pro",
		"enterpriseTier": "Nivel Enterprise",
		"custom": "Personalizado",
		"allProFeatures": "Todas las funciones Pro",
		"dedicatedBenchmarkInfrastructure": "Infraestructura de benchmark dedicada",
		"customLibraryIntegrations": "Integraciones de bibliotecas personalizadas",
		"slaGuarantees": "Garantías de SLA",
		"prioritySupport": "Soporte prioritario",
		"contactSales": "Contactar con ventas"
	},
	productsHeader: {
		"products": "Productos",
		"toolsAndServicesTo": "Herramientas y servicios para ayudarle a optimizar su estrategia de internacionalización."
	},
	productsGrid: {
		"benchmarkDashboard": "Panel de benchmark",
		"interactiveChartsAndTables": "Gráficos y tablas interactivos que comparan las bibliotecas i18n en cuanto a tamaño del paquete, tiempo de renderizado y coste de hidratación.",
		"bundleAnalyzer": "Analizador de paquetes",
		"uploadYourBuildOutput": "Envíe su salida de construcción y obtenga un desglose detallado de cuánto de su paquete es sobrecarga de i18n.",
		"migrationAssistant": "Asistente de migración",
		"automatedCodemodsAndGuides": "Codemods y guías automáticos para migrar entre bibliotecas i18n con la mínima interrupción.",
		"performanceMonitor": "Monitor de rendimiento",
		"continuousPerformanceTrackingFor": "Seguimiento continuo del rendimiento para su implementación i18n. Obtenga alertas cuando la carga de la traducción se degrade.",
		"learnMore": "Leer más"
	},
	settingsHeader: {
		"settings": "Ajustes",
		"manageYourAccountPreferences": "Administre sus preferencias de cuenta y configuración.",
		"manageYourAccount": "Administre sus preferencias de cuenta y configuración."
	},
	profileSection: {
		"profile": "Perfil",
		"displayName": "Nombre mostrado",
		"email": "Correo electrónico"
	},
	preferencesSection: {
		"preferences": "Preferencias",
		"emailNotifications": "Notificaciones por correo electrónico",
		"receiveWeeklyBenchmark": "Recibir informes semanales de benchmark",
		"receiveWeeklyBenchmarkReports": "Recibir informes semanales de benchmark",
		"toggleNotifications": "Alternar notificaciones",
		"darkMode": "Modo oscuro",
		"useDarkColorScheme": "Usar esquema de colores oscuros",
		"toggleDarkMode": "Alternar modo oscuro",
		"defaultLanguage": "Idioma predeterminado",
		"englishEn": "Inglés (en)",
		"frenchFr": "Francés (fr)",
		"germanDe": "Alemán (de)",
		"spanishEs": "Español (es)",
		"japaneseJa": "Japonés (ja)",
		"chineseSimplifiedZhCn": "Chino simplificado (zh-CN)",
		"arabicAr": "Árabe (ar)"
	},
	apiAccessSection: {
		"apiAccess": "Acceso API",
		"apiKey": "Clave API",
		"useThisKeyTo": "Utilice esta clave para acceder a la API de benchmarking mediante programación.",
		"copy": "Copiar"
	},
	settingsFooter: {
		"cancel": "Cancelar",
		"saveChanges": "Guardar cambios"
	},
	teamHeader: {
		"ourTeam": "Nuestro equipo",
		"meetThePeopleBehindI18n": "Conozca a las personas detrás del i18n Benchmark. Un equipo diverso unido por una pasión compartida por las grandes herramientas de desarrollo."
	},
	teamGrid: {
		"sarahChen": "Sarah Chen",
		"founderLeadEngineer": "Fundadora e Ingeniera Principal",
		"formerGoogleEngineerWith": "Ex ingeniera de Google con 10 años de experiencia construyendo sistemas de internacionalización a escala.",
		"formerGoogleEngineerWith10": "Ex ingeniera de Google con 10 años de experiencia construyendo sistemas de internacionalización a escala.",
		"marcusWeber": "Marcus Weber",
		"performanceEngineer": "Ingeniero de rendimiento",
		"specializesInJavascriptPerformance": "Se especializa en optimización de rendimiento de JavaScript y metodología de benchmarking. Anteriormente en Vercel.",
		"specializesInJavascriptPerformanceOptimization": "Se especializa en optimización de rendimiento de JavaScript y metodología de benchmarking. Anteriormente en Vercel.",
		"aishaPatel": "Aisha Patel",
		"developerAdvocate": "Defensora de desarrolladores",
		"passionateAboutDeveloperExperience": "Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.",
		"passionateAboutDeveloperExperienceAnd": "Apasionada por la experiencia del desarrollador y la educación. Ponente en React Conf, JSConf e i18nNext.",
		"tomasRodriguez": "Tomás Rodríguez",
		"fullStackDeveloper": "Desarrollador Full-Stack",
		"maintainsTheBenchmarkingInfrastructure": "Mantiene la infraestructura de benchmarking y la canalización CI/CD. Contribuidor de código abierto para Lingui.",
		"maintainsTheBenchmarkingInfrastructureAnd": "Mantiene la infraestructura de benchmarking y la canalización CI/CD. Contribuidor de código abierto para Lingui.",
		"yukiTanaka": "Yuki Tanaka",
		"dataAnalyst": "Analista de datos",
		"ensuresStatisticalRigorIn": "Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.",
		"ensuresStatisticalRigorInAll": "Garantiza el rigor estadístico en todos los resultados del benchmark. Doctorado en Estadística Aplicada por el MIT.",
		"elenaKowalski": "Elena Kowalski",
		"communityManager": "Gerente de comunidad",
		"managesCommunityContributions": "Gestiona contribuciones de la comunidad, alianzas y eventos. Experiencia en gobernanza de código abierto.",
		"managesCommunityContributionsPartnershipsAnd": "Gestiona contribuciones de la comunidad, alianzas y eventos. Experiencia en gobernanza de código abierto."
	},
	mockBanner: "⚠️ Esta página contiene datos de prueba solo para fines de benchmarking. No está relacionada con ningún negocio o servicio real."
};
var fr_default = {
	route: {
		"oopsPageNotFound": "Oups ! Page non trouvée",
		"returnToHome": "Retour à l'accueil",
		"couldNotMeasureHydrationDuration": "Impossible de mesurer la durée d'hydratation :"
	},
	header: {
		"home": "Accueil",
		"methodology": "Méthodologie",
		"mockPages": "Pages fictives",
		"products": "Produits",
		"pricing": "Tarification",
		"team": "Équipe",
		"blog": "Blog",
		"careers": "Carrières",
		"faq": "FAQ",
		"contact": "Contact",
		"settings": "Paramètres",
		"goToGithub": "Aller sur GitHub"
	},
	footer: {
		"resources": "Ressources",
		"contact": "Contact",
		"github": "GitHub",
		"methodology": "Méthodologie",
		"contributing": "Contribuer",
		"builtWith": "i18n Benchmark — Projet open-source. Construit avec React, Vite & TanStack Router.",
		"anOpenSourceTestApplication": "Une application de test open-source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application."
	},
	common: {
		"readMore": "Lire la suite",
		"copy": "Copier",
		"cancel": "Annuler",
		"saveChanges": "Enregistrer les modifications"
	},
	themeToggle: {
		"themeModeAutoSystemClick": "Mode thème : auto (système). Cliquez pour passer en mode clair.",
		"themeModeLightClick": "Mode thème : clair. Cliquez pour passer en mode sombre.",
		"themeModeDarkClick": "Mode thème : sombre. Cliquez pour passer en mode auto (système).",
		"themeAuto": "Thème : Auto",
		"themeDark": "Thème : Sombre",
		"themeLight": "Thème : Clair"
	},
	hero: {
		"aTestApplicationDesignedTo": "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.",
		"viewResults": "Voir les résultats"
	},
	whyItMatters: {
		"whyTheseMetricsMatter": "Pourquoi ces métriques comptent",
		"bundleSize": "Taille du bundle",
		"theBundleIsTheData": "Le bundle est la donnée envoyée à chaque utilisateur à travers le monde. Un bundle plus volumineux signifie des temps de téléchargement plus longs — particulièrement sur les connexions 3G lentes courantes dans de nombreuses régions. Les bibliothèques i18n varient considérablement dans leur poids : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, plus les fichiers de traduction eux-mêmes.",
		"renderingHydration": "Rendu & Hydratation",
		"connectingALargeJson": "Connecter un dictionnaire JSON volumineux à chaque composant crée une dépendance cachée : tout changement dans le contexte de traduction peut déclencher des re-rendus sur l'ensemble de l'arbre. Pendant l'hydratation SSR, l'analyse et l'attachement d'objets de traduction massifs ajoutent de la latence avant que la page ne devienne interactive — impactant directement le Time to Interactive (TTI).",
		"dynamicLoading": "Chargement dynamique",
		"loadingAllTranslationsUpfront": "Charger toutes les traductions à l'avance surcharge le payload initial. Le chargement dynamique (lazy) divise les traductions par route ou espace de noms, n'envoyant que ce dont la page actuelle a besoin. Cependant, le chargement paresseux introduit ses propres compromis : requêtes en cascade, affichage temporaire de contenu non traduit et complexité du cache. Mesurer les deux stratégies est essentiel."
	},
	understandingImpact: {
		"understandingTheImpact": "Comprendre l'impact",
		"whyASingleLargeJson": "Pourquoi un seul gros JSON peut nuire aux performances",
		"manyI18nLibrariesStore": "De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (milliers de clés), chaque composant qui consomme des traductions détient une référence au dictionnaire complet. Cela signifie :",
		"manyI18nLibrariesStoreTranslations": "De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (milliers de clés), chaque composant qui consomme des traductions détient une référence au dictionnaire complet. Cela signifie :",
		"theJsonMustBeParsed": "Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.",
		"contextBasedArchitecturesCan": "Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lors du changement de langue, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.",
		"contextBasedArchitecturesCanCause": "Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lors du changement de langue, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.",
		"duringServerSideRenderingThe": "Pendant le rendu côté serveur, le dictionnaire complet est sérialisé dans le payload HTML, augmentant la taille du document qui doit être téléchargé et hydraté.",
		"theTradeOffsOfDynamic": "Les compromis du chargement dynamique",
		"splittingTranslationsIntoPerRoute": "Diviser les traductions en morceaux par route ou par espace de noms peut réduire considérablement le payload initial. Mais cela introduit de nouveaux défis :",
		"waterfallRequests": "Requêtes en cascade :",
		"theAppMustFirstLoad": "L'application doit d'abord se charger, déterminer la locale, puis récupérer le bon morceau — ajoutant des allers-retours réseau.",
		"flashOfUntranslatedContent": "Affichage de contenu non traduit (FOUC) :",
		"flashOfUntranslatedContentFouc": "Affichage de contenu non traduit (FOUC) :",
		"usersMayBrieflySeeTranslation": "Les utilisateurs peuvent voir brièvement des clés de traduction ou une langue de repli avant que le morceau n'arrive.",
		"cacheInvalidation": "Invalidation du cache :",
		"updatingTranslationsRequiresCache": "La mise à jour des traductions nécessite des stratégies de purge de cache pour garantir que les utilisateurs reçoivent le contenu frais sans re-télécharger les morceaux inchangés.",
		"whatThisBenchmarkMeasures": "Ce que ce benchmark mesure",
		"thisTestAppProvidesA": "Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et restituer le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement paresseux. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables."
	},
	resultsTable: {
		"sampleResults": "Exemples de résultats",
		"bundleSize": "Taille du bundle",
		"lookupTime": "Temps de recherche",
		"lazyLoading": "Chargement différé",
		"library": "Bibliothèque"
	},
	aboutHeader: {
		"methodology": "Méthodologie",
		"weDesignedThisBenchmarkTo": "Nous avons conçu ce benchmark pour fournir des comparaisons équitables, reproductibles et significatives des bibliothèques i18n. Voici notre approche.",
		"aboutThisBenchmark": "À propos de ce benchmark",
		"thisIsAnOpenSource": "Ceci est une application de test open-source — pas un produit ou une entreprise. Son seul but est de fournir une application React multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans des conditions identiques."
	},
	aboutGrid: {
		"testEnvironment": "Environnement de test",
		"allBenchmarksRunOn": "Tous les benchmarks s'exécutent sur le même matériel (M2 MacBook Pro, 16 Go de RAM), le même navigateur (Chromium 120 via Playwright) et les mêmes conditions réseau (4G simulée). Chaque test est répété 50 fois et nous rapportons la médiane avec les centiles P95/P99.",
		"applicationDesign": "Conception de l'application",
		"theBenchmarkAppHas10": "L'application de benchmark dispose de 10 pages avec un contenu réaliste — navigation, formulaires, listes dynamiques et texte statique. Chaque page utilise 15 à 30 clés de traduction pour représenter des modèles d'utilisation réels plutôt que des micro-benchmarks synthétiques.",
		"measurementMethodology": "Méthodologie de mesure",
		"weUseBrowserNativeApis": "Nous utilisons des API natives du navigateur (Performance Timeline, Resource Timing, Layout Instability) combinées aux données de React Profiler. La taille des bundles est mesurée après compression gzip à l'aide de source-map-explorer pour plus de précision.",
		"fairComparison": "Comparaison équitable",
		"eachI18nLibraryIsIntegrated": "Chaque bibliothèque i18n est intégrée en suivant sa documentation officielle et ses meilleures pratiques. Nous consultons les mainteneurs lorsque cela est possible pour garantir une configuration optimale. Même application React, même configuration Vite, même déploiement.",
		"whyThisExists": "Pourquoi cela existe",
		"choosingAnI18nLibrary": "Choisir une bibliothèque i18n est une décision architecturale avec des conséquences à long terme. La plupart des comparaisons se concentrent sur l'ergonomie de l'API, mais peu mesurent le coût en performance : quel poids la bibliothèque ajoute-t-elle au bundle ? Comment affecte-t-elle le rendu lorsque des milliers de clés de traduction sont chargées ? Le chargement différé aide-t-il réellement ou ne fait-il que déplacer le coût ? Ce benchmark répond à ces questions avec des données réelles.",
		"methodology": "Méthodologie",
		"theSame10PageApp": "La même application de 10 pages est construite une fois par bibliothèque. Nous mesurons le bundle de production (via rollup-plugin-visualizer), effectuons des audits Lighthouse pour les métriques de chargement et utilisons React Profiler pour capturer les temps de rendu lors des changements de langue. Tous les tests s'exécutent en CI sur un matériel cohérent pour garantir des résultats reproductibles."
	},
	whatWeMeasure: {
		"bundleSizeImpact": "Impact sur la taille du bundle",
		"theAdditionalJavascriptBytes": "Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers de traduction sont inclus. Cela affecte directement le temps de téléchargement sur les réseaux lents.",
		"theAdditionalJavascriptBytesSent": "Les octets JavaScript supplémentaires envoyés au client spécifiquement en raison de l'exécution de la bibliothèque i18n, plus les fichiers de traduction pour la langue actuelle.",
		"renderingOverhead": "Surcharge de rendu",
		"howMuchExtraTimeTheLibraryAdds": "Le temps supplémentaire que la bibliothèque ajoute au cycle de rendu de React. Les bibliothèques qui injectent des traductions via un seul fournisseur de contexte peuvent provoquer des re-rendus inutiles dans l'arbre des composants.",
		"howMuchExtraTimeThe": "Le temps supplémentaire que la couche i18n ajoute à chaque rendu de composant — mesuré à l'aide de l'actualDuration de React Profiler.",
		"hydrationCost": "Coût d'hydratation",
		"duringSsrTranslationDataIsSerialized": "Pendant le SSR, les données de traduction sont sérialisées en HTML. Les dictionnaires volumineux augmentent le payload HTML et ralentissent l'hydratation — le moment où la page devient interactive.",
		"duringSsrTranslationDataIs": "Pendant le SSR, les données de traduction sont sérialisées dans le HTML. Les dictionnaires volumineux augmentent le payload HTML et ralentissent l'hydratation — le moment où la page devient interactive.",
		"lazyLoadingEffectiveness": "Efficacité du chargement différé",
		"whetherSplittingTranslationsByRoute": "Si la division des traductions par route ou par espace de noms réduit réellement la charge initiale, et quels compromis elle introduit (requêtes en cascade, FOUC, complexité du cache).",
		"localeSwitchSpeed": "Vitesse de changement de langue",
		"howFastTheAppCan": "La rapidité avec laquelle l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération des nouvelles traductions, le rendu des composants et la mise à jour du DOM.",
		"howFastTheAppCanSwitchFromOne": "La rapidité avec laquelle l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération des nouvelles traductions, le rendu des composants et la mise à jour du DOM.",
		"whatWeMeasure": "Ce que nous mesurons"
	},
	blogHeader: {
		"blog": "Blog",
		"insightsDeepDivesAnd": "Aperçus, analyses approfondies et mises à jour de la communauté de benchmarking i18n.",
		"insightsTutorialsAndAnalysis": "Aperçus, tutoriels et analyses de la communauté i18n."
	},
	blogList: {
		"comparingI18nLibrariesIn": "Comparaison des bibliothèques i18n en 2026 : une analyse approfondie",
		"comparingI18nLibrariesIn2026": "Comparaison des bibliothèques i18n en 2026 : une analyse approfondie",
		"march152026": "15 mars 2026",
		"weTested12DifferentInternationalization": "Nous avons testé 12 bibliothèques d'internationalisation différentes sur la performance, la taille du bundle et la DX. Voici les résultats surprenants.",
		"howToReduceYourI18n": "Comment réduire votre bundle i18n de 60%",
		"march82026": "8 mars 2026",
		"practicalStrategiesForOptimizingTranslation": "Stratégies pratiques pour optimiser les bundles de traduction, notamment le chargement différé, le fractionnement de code et les optimisations au moment de la compilation.",
		"theStateOfInternationalizationIn": "L'état de l'internationalisation dans React",
		"february282026": "28 février 2026",
		"anOverviewOfTheCurrent": "Un aperçu de l'écosystème i18n actuel, comparant les approches basées sur les catalogues de messages aux solutions basées sur les compilateurs.",
		"anOverviewOfTheCurrentI18n": "Un aperçu de l'écosystème i18n actuel dans React, couvrant les tendances, les modèles émergents et les préférences de la communauté.",
		"migratingFromReactI18nextTo": "Migrer de react-i18next vers Lingui",
		"february152026": "15 février 2026",
		"aStepByStepGuide": "Un guide étape par étape sur la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.",
		"aStepByStepGuideOnMigrating": "Un guide étape par étape sur la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.",
		"serverComponentsAndI18nWhat": "Server Components et i18n : qu'est-ce qui change ?",
		"february12026": "1er février 2026",
		"reactServerComponentsIntroduce new": "React Server Components introduit de nouveaux modèles pour l'internationalisation. Nous explorons les implications et les meilleures pratiques.",
		"benchmarkMethodologyHowWe": "Méthodologie du benchmark : comment nous testons",
		"benchmarkMethodologyHowWeTest": "Méthodologie du benchmark : comment nous testons",
		"january202026": "20 janvier 2026",
		"aTransparentLookAtOur": "Un regard transparent sur notre méthodologie de benchmarking, y compris les environnements de test, les méthodes statistiques et la reproductibilité.",
		"aTransparentLookAtOurBenchmarking": "Un regard transparent sur notre méthodologie de benchmarking, y compris les environnements de test, les méthodes statistiques et la reproductibilité.",
		"readMore": "Lire la suite →",
		"benchmark": "Benchmark",
		"tutorial": "Tutoriel",
		"analysis": "Analyse",
		"meta": "Méta",
		"reactServerComponentsIntroduceNew": "Les React Server Components introduisent de nouveaux modèles pour l'internationalisation. Nous explorons les implications et les meilleures pratiques."
	},
	careersHeader: {
		"careers": "Carrières",
		"joinOurMissionToMake": "Rejoignez notre mission pour rendre le web plus rapide et plus accessible pour tout le monde, partout.",
		"joinOurMission": "Rejoignez notre mission pour améliorer l'écosystème de l'internationalisation. Nous sommes une équipe privilégiant le télétravail qui valorise l'impact, la transparence et l'apprentissage continu."
	},
	careersBenefits: {
		"whyJoinUs": "Pourquoi nous rejoindre ?",
		"remoteFirst": "Télétravail d'abord",
		"workFromAnywhereFully": "Travaillez de n'importe où. Équipe entièrement distribuée sur 6 fuseaux horaires.",
		"workFromAnywhere": "Travaillez de n'importe où dans le monde",
		"openSource": "Open Source",
		"allOurWorkIs": "Tout notre travail est open source. Construisez votre portfolio public tout en ayant un impact.",
		"impactful": "Impactant",
		"yourWorkDirectlyHelps": "Votre travail aide directement les développeurs à créer de meilleures applications internationalisées et plus rapides.",
		"competitivePay": "Salaire compétitif",
		"topOfMarketCompensation": "Rémunération au sommet du marché",
		"openSourceTime": "Temps pour l'open source",
		"percentTimeForOss": "20% du temps pour les contributions OSS"
	},
	openPositions: {
		"openPositions": "Postes ouverts",
		"seniorPerformanceEngineer": "Ingénieur performance senior",
		"seniorFrontendEngineer": "Ingénieur frontend senior",
		"fullTime": "Temps plein",
		"remote": "À distance",
		"leadBenchmarkDesignAnd": "Diriger la conception et la mise en œuvre des benchmarks. Connaissance approfondie des composants internes de V8, des API de performance du navigateur et de l'analyse statistique requise.",
		"technicalWriter": "Rédacteur technique",
		"partTime": "Temps partiel",
		"createAndMaintainDocumentation": "Créer et maintenir la documentation, les articles de blog et le contenu éducatif sur les meilleures pratiques de performance i18n.",
		"frontendDeveloper": "Développeur frontend",
		"buildAndMaintainThe": "Construire et maintenir le tableau de bord du benchmark, les outils de comparaison et les visualisations interactives.",
		"buildAndMaintainOur": "Construire et maintenir notre tableau de bord de benchmarking et nos outils de développement à l'aide de React, TypeScript et Vite.",
		"devOpsEngineer": "Ingénieur DevOps",
		"designAndMaintainThe": "Concevoir et maintenir le pipeline CI/CD qui exécute automatiquement les benchmarks sur chaque mise à jour de bibliothèque.",
		"applyNow": "Postuler maintenant",
		"engineering": "Ingénierie",
		"backendEngineer": "Ingénieur backend",
		"designAndScaleOur": "Concevoir et mettre à l'échelle notre infrastructure de benchmarking cloud gérant des milliers de cycles automatisés quotidiennement.",
		"documentation": "Documentation",
		"createComprehensiveGuidesApi": "Créer des guides complets, des références d'API et des tutoriels pour notre plateforme de benchmarking.",
		"devrelEngineer": "Ingénieur DevRel",
		"sfRemote": "San Francisco / À distance",
		"community": "Communauté",
		"engageWithTheI18n": "S'engager avec la communauté i18n par le biais de conférences, d'ateliers, d'articles de blog et de contributions open source.",
		"qaEngineer": "Ingénieur QA",
		"ensureTheAccuracyAnd": "Assurer la précision et la fiabilité des résultats du benchmark grâce à des tests et une validation rigoureux."
	},
	contactHeader: {
		"contactUs": "Contactez-nous",
		"haveQuestionsOrWantTo": "Vous avez des questions ou vous voulez contribuer ? Nous aimerions avoir de vos nouvelles.",
		"getInTouch": "Contactez-nous",
		"haveIdeasFoundABug": "Vous avez des idées, trouvé un bug ou vous voulez contribuer à un benchmark ? Contactez-nous."
	},
	contactForm: {
		"name": "Nom",
		"yourName": "Votre nom",
		"email": "Email",
		"emailPlaceholder": "vous@exemple.com",
		"subject": "Sujet",
		"topic": "Sujet",
		"bugReport": "Rapport de bug",
		"newBenchmarkIdea": "Nouvelle idée de benchmark",
		"methodologyQuestion": "Question sur la méthodologie",
		"contribution": "Contribution",
		"other": "Autre",
		"message": "Message",
		"messagePlaceholder": "Décrivez votre question ou idée...",
		"sendMessage": "Envoyer le message",
		"wellGetBackTo": "Nous vous répondrons dans les 48 heures."
	},
	faqHeader: {
		"frequentlyAskedQuestions": "Foire Aux Questions",
		"everythingYouNeedTo": "Tout ce que vous devez savoir sur le projet i18n Benchmark.",
		"everythingYouNeedToKnow": "Tout ce que vous devez savoir sur i18n Benchmark."
	},
	faqList: {
		"howAreTheBenchmarks": "Comment les benchmarks sont-ils exécutés ?",
		"allBenchmarksAreRun": "Tous les benchmarks sont exécutés à l'aide de Playwright sur une configuration matérielle cohérente (M2 MacBook Pro) avec des conditions de réseau 4G simulées. Chaque test exécute 50 itérations et nous rapportons les valeurs médiane, P95 et P99.",
		"whatLibrariesAreCurrently": "Quelles bibliothèques sont actuellement testées ?",
		"weCurrentlyBenchmarkReactI18next": "Nous testons actuellement react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl et Paraglide. Nous prévoyons d'en ajouter d'autres en fonction des demandes de la communauté.",
		"canISubmitMyOwn": "Puis-je soumettre mes propres benchmarks ?",
		"canISubmitMyOwnBenchmarks": "Puis-je soumettre mes propres benchmarks ?",
		"absolutelyWeWelcomeCommunity": "Absolument ! Nous accueillons les contributions de la communauté. Forkez le dépôt, ajoutez l'intégration de votre bibliothèque en suivant notre modèle et soumettez une pull request. Consultez le guide de contribution pour plus de détails.",
		"howOftenAreResults": "À quelle fréquence les résultats sont-ils mis à jour ?",
		"benchmarksRunAutomaticallyVia": "Les benchmarks s'exécutent automatiquement via la CI sur chaque mise à jour de dépendance et de manière hebdomadaire sur la branche principale. Les résultats sont publiés sur le tableau de bord dans les 24 heures.",
		"areTheResultsStatistically": "Les résultats sont-ils statistiquement significatifs ?",
		"yesWeUseThe": "Oui. Nous utilisons le test U de Mann-Whitney avec un niveau de signification de 0,05 pour comparer les distributions. Nous rapportons également les intervalles de confiance et les tailles d'effet.",
		"whatIsI18nBenchmark": "Qu'est-ce que i18n Benchmark ?",
		"i18nBenchmarkIsAnOpenSource": "i18n Benchmark est une suite de benchmarking open-source qui mesure et compare les performances, la taille du bundle et l'expérience développeur des bibliothèques d'internationalisation pour les applications JavaScript et React.",
		"howAreBenchmarksConducted": "Comment les benchmarks sont-ils effectués ?",
		"weRunStandardizedTestsInIsolated": "Nous exécutons des tests standardisés dans des environnements isolés en utilisant un matériel cohérent. Chaque benchmark est répété plusieurs fois pour garantir une signification statistique. Toutes les configurations de test sont publiquement disponibles dans notre dépôt GitHub.",
		"whichLibrariesAreCurrentlySupported": "Quelles bibliothèques sont actuellement prises en charge ?",
		"weSupportReactI18nextReactIntl": "Nous prenons en charge react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react et Tolgee.",
		"yesCommunityBenchmarkSubmissionsAre": "Oui ! Les soumissions de benchmarks de la communauté sont les bienvenues. Forkez notre dépôt, ajoutez votre benchmark en suivant notre guide de contribution et soumettez une pull request. Notre équipe examinera et fusionnera les soumissions qualifiées.",
		"howOftenAreBenchmarksUpdated": "À quelle fréquence les benchmarks sont-ils mis à jour ?",
		"weReRunAllBenchmarksWeekly": "Nous relançons tous les benchmarks chaque semaine par rapport aux dernières versions stables de chaque bibliothèque. Les sorties de versions majeures déclenchent un cycle de benchmark immédiat.",
		"isTheDataReliable": "Les données sont-elles fiables ?",
		"weFollowRigorousStatisticalMethodologyIncluding": "Nous suivons une méthodologie statistique rigoureuse comprenant des cycles de rodage, la détection des valeurs aberrantes et des intervalles de confiance. Toutes les données brutes sont publiées avec notre analyse pour une transparence totale.",
		"doYouOfferConsultingServices": "Offrez-vous des services de conseil ?",
		"yesOurEnterprisePlanIncludesConsulting": "Oui, notre plan Entreprise comprend des heures de conseil pour les équipes évaluant des solutions i18n. Nous pouvons fournir des recommandations adaptées en fonction de votre cas d'utilisation spécifique, de votre échelle et de vos contraintes.",
		"howCanIContribute": "Comment puis-je contribuer ?",
		"thereAreManyWaysToContribute": "Il existe de nombreuses façons de contribuer : soumettre des benchmarks, améliorer la documentation, signaler des bugs, suggérer de nouvelles métriques ou parrainer le projet. Visitez notre dépôt GitHub pour plus de détails."
	},
	pricingHeader: {
		"pricing": "Tarification",
		"transparentPricingForEvery": "Une tarification transparente pour chaque étape de votre voyage i18n."
	},
	pricingTiers: {
		"freeTier": "Niveau gratuit",
		"free": "Gratuit",
		"publicBenchmarkDashboard": "Tableau de bord public des benchmarks",
		"basicLibraryComparisons": "Comparaisons de bibliothèques basiques",
		"communityForumAccess": "Accès au forum de la communauté",
		"monthlyResultDigest": "Résumé mensuel des résultats",
		"getStarted": "Démarrer",
		"proTier": "Niveau Pro",
		"perMonth": "/mois",
		"allFreeFeatures": "Toutes les fonctionnalités gratuites",
		"customBenchmarkConfigurations": "Configurations de benchmark personnalisées",
		"privateResultsDashboard": "Tableau de bord des résultats privés",
		"apiAccess1000Requests": "Accès API (1 000 requêtes/jour)",
		"slackIntegration": "Intégration Slack",
		"subscribeToPro": "S'abonner à Pro",
		"enterpriseTier": "Niveau Entreprise",
		"custom": "Personnalisé",
		"allProFeatures": "Toutes les fonctionnalités Pro",
		"dedicatedBenchmarkInfrastructure": "Infrastructure de benchmark dédiée",
		"customLibraryIntegrations": "Intégrations de bibliothèques personnalisées",
		"slaGuarantees": "Garanties SLA",
		"prioritySupport": "Support prioritaire",
		"contactSales": "Contacter le service commercial"
	},
	productsHeader: {
		"products": "Produits",
		"toolsAndServicesTo": "Des outils et des services pour vous aider à optimiser votre stratégie d'internationalisation."
	},
	productsGrid: {
		"benchmarkDashboard": "Tableau de bord des benchmarks",
		"interactiveChartsAndTables": "Tableaux et graphiques interactifs comparant les bibliothèques i18n sur la taille du bundle, le temps de rendu et le coût d'hydratation.",
		"bundleAnalyzer": "Analyseur de bundle",
		"uploadYourBuildOutput": "Téléchargez votre sortie de build et obtenez une décomposition détaillée de la surcharge i18n sur votre bundle.",
		"migrationAssistant": "Assistant de migration",
		"automatedCodemodsAndGuides": "Codemods et guides automatisés pour migrer entre les bibliothèques i18n avec un minimum de perturbations.",
		"performanceMonitor": "Moniteur de performance",
		"continuousPerformanceTrackingFor": "Suivi continu des performances de votre implémentation i18n. Recevez des alertes en cas de dégradation du chargement des traductions.",
		"learnMore": "En savoir plus"
	},
	settingsHeader: {
		"settings": "Paramètres",
		"manageYourAccountPreferences": "Gérez vos préférences de compte et votre configuration.",
		"manageYourAccount": "Gérez vos préférences de compte et votre configuration."
	},
	profileSection: {
		"profile": "Profil",
		"displayName": "Nom affiché",
		"email": "Email"
	},
	preferencesSection: {
		"preferences": "Préférences",
		"emailNotifications": "Notifications par email",
		"receiveWeeklyBenchmark": "Recevoir les rapports de benchmark hebdomadaires",
		"receiveWeeklyBenchmarkReports": "Recevoir les rapports de benchmark hebdomadaires",
		"toggleNotifications": "Basculer les notifications",
		"darkMode": "Mode sombre",
		"useDarkColorScheme": "Utiliser le schéma de couleurs sombres",
		"toggleDarkMode": "Basculer le mode sombre",
		"defaultLanguage": "Langue par défaut",
		"englishEn": "Anglais (en)",
		"frenchFr": "Français (fr)",
		"germanDe": "Allemand (de)",
		"spanishEs": "Espagnol (es)",
		"japaneseJa": "Japonais (ja)",
		"chineseSimplifiedZhCn": "Chinois simplifié (zh-CN)",
		"arabicAr": "Arabe (ar)"
	},
	apiAccessSection: {
		"apiAccess": "Accès API",
		"apiKey": "Clé API",
		"useThisKeyTo": "Utilisez cette clé pour accéder à l'API de benchmarking par programmation.",
		"copy": "Copier"
	},
	settingsFooter: {
		"cancel": "Annuler",
		"saveChanges": "Enregistrer les modifications"
	},
	teamHeader: {
		"ourTeam": "Notre équipe",
		"meetThePeopleBehindI18n": "Rencontrez les personnes derrière i18n Benchmark. Une équipe diversifiée unie par une passion commune pour les excellents outils de développement."
	},
	teamGrid: {
		"sarahChen": "Sarah Chen",
		"founderLeadEngineer": "Fondatrice & Ingénieure principale",
		"formerGoogleEngineerWith": "Ancienne ingénieure Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.",
		"formerGoogleEngineerWith10": "Ancienne ingénieure Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.",
		"marcusWeber": "Marcus Weber",
		"performanceEngineer": "Ingénieur performance",
		"specializesInJavascriptPerformance": "Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Auparavant chez Vercel.",
		"specializesInJavascriptPerformanceOptimization": "Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Auparavant chez Vercel.",
		"aishaPatel": "Aisha Patel",
		"developerAdvocate": "Developer Advocate",
		"passionateAboutDeveloperExperience": "Passionnée par l'expérience développeur et l'éducation. Conférencière à React Conf, JSConf et i18nNext.",
		"passionateAboutDeveloperExperienceAnd": "Passionnée par l'expérience développeur et l'éducation. Conférencière à React Conf, JSConf et i18nNext.",
		"tomasRodriguez": "Tomás Rodríguez",
		"fullStackDeveloper": "Développeur Full-Stack",
		"maintainsTheBenchmarkingInfrastructure": "Maintient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.",
		"maintainsTheBenchmarkingInfrastructureAnd": "Maintient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.",
		"yukiTanaka": "Yuki Tanaka",
		"dataAnalyst": "Analyste de données",
		"ensuresStatisticalRigorIn": "Garantit la rigueur statistique de tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.",
		"ensuresStatisticalRigorInAll": "Garantit la rigueur statistique de tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.",
		"elenaKowalski": "Elena Kowalski",
		"communityManager": "Gestionnaire de communauté",
		"managesCommunityContributions": "Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source.",
		"managesCommunityContributionsPartnershipsAnd": "Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source."
	},
	mockBanner: "⚠️ Cette page contient des données fictives à des fins de benchmark uniquement. Elle n'est liée à aucune entreprise ou service réel."
};
var it_default = {
	route: {
		"oopsPageNotFound": "Ops! Pagina non trovata",
		"returnToHome": "Torna alla Home",
		"couldNotMeasureHydrationDuration": "Impossibile misurare la durata dell'idratazione:"
	},
	header: {
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
		"settings": "Impostazioni",
		"goToGithub": "Vai su GitHub"
	},
	footer: {
		"resources": "Risorse",
		"contact": "Contatti",
		"github": "GitHub",
		"methodology": "Metodologia",
		"contributing": "Contribuire",
		"builtWith": "i18n Benchmark — Progetto open-source. Realizzato con React, Vite & TanStack Router.",
		"anOpenSourceTestApplication": "Un'applicazione di test open-source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, i tempi di caricamento e la reattività dell'app."
	},
	common: {
		"readMore": "Leggi di più",
		"copy": "Copia",
		"cancel": "Annulla",
		"saveChanges": "Salva modifiche"
	},
	themeToggle: {
		"themeModeAutoSystemClick": "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.",
		"themeModeLightClick": "Modalità tema: chiara. Clicca per passare alla modalità scura.",
		"themeModeDarkClick": "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).",
		"themeAuto": "Tema: Auto",
		"themeDark": "Tema: Scuro",
		"themeLight": "Tema: Chiaro"
	},
	hero: {
		"aTestApplicationDesignedTo": "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, le prestazioni di caricamento e la reattività del rendering.",
		"viewResults": "Visualizza risultati"
	},
	whyItMatters: {
		"whyTheseMetricsMatter": "Perché queste metriche sono importanti",
		"bundleSize": "Dimensione del bundle",
		"theBundleIsTheData": "Il bundle sono i dati inviati a ogni utente in tutto il mondo. Un bundle più grande significa tempi di download più lunghi, specialmente su connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.",
		"renderingHydration": "Rendering e idratazione",
		"connectingALargeJson": "Collegare un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può innescare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, il parsing e il collegamento di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).",
		"dynamicLoading": "Caricamento dinamico",
		"loadingAllTranslationsUpfront": "Caricare tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per route o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il caricamento lazy introduce i suoi compromessi: richieste a cascata (waterfall), flash di contenuto non tradotto e complessità del caching. Misurare entrambe le strategie è essenziale."
	},
	understandingImpact: {
		"understandingTheImpact": "Capire l'impatto",
		"whyASingleLargeJson": "Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni",
		"manyI18nLibrariesStore": "Molte librerie i18n memorizzano le traduzioni in un singolo oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Ciò significa:",
		"manyI18nLibrariesStoreTranslations": "Molte librerie i18n memorizzano le traduzioni in un singolo oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Ciò significa:",
		"theJsonMustBeParsed": "Il JSON deve essere analizzato ad ogni caricamento della pagina, bloccando il thread principale.",
		"contextBasedArchitecturesCan": "Le architetture basate sul contesto possono causare rendering a cascata quando cambia la lingua, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.",
		"contextBasedArchitecturesCanCause": "Le architetture basate sul contesto possono causare rendering a cascata quando cambia la lingua, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.",
		"duringServerSideRenderingThe": "Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idratato.",
		"theTradeOffsOfDynamic": "I compromessi del caricamento dinamico",
		"splittingTranslationsIntoPerRoute": "Dividere le traduzioni in blocchi per route o per namespace può ridurre drasticamente il payload iniziale. Ma ciò introduce nuove sfide:",
		"waterfallRequests": "Richieste a cascata (waterfall):",
		"theAppMustFirstLoad": "L'app deve prima caricarsi, determinare la lingua, quindi recuperare il blocco corretto, aggiungendo round-trip di rete.",
		"flashOfUntranslatedContent": "Flash di contenuto non tradotto (FOUC):",
		"flashOfUntranslatedContentFouc": "Flash di contenuto non tradotto (FOUC):",
		"usersMayBrieflySeeTranslation": "Gli utenti potrebbero vedere brevemente le chiavi di traduzione o una lingua di fallback prima che il blocco arrivi.",
		"cacheInvalidation": "Invalidazione della cache:",
		"updatingTranslationsRequiresCache": "L'aggiornamento delle traduzioni richiede strategie di cache-busting per garantire che gli utenti ricevano contenuti freschi senza scaricare nuovamente i blocchi non modificati.",
		"whatThisBenchmarkMeasures": "Cosa misura questo benchmark",
		"thisTestAppProvidesA": "Questa app di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al bundle JavaScript, il tempo speso per analizzare e renderizzare i contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app, quindi i risultati sono direttamente confrontabili."
	},
	resultsTable: {
		"sampleResults": "Risultati campionari",
		"bundleSize": "Dimensione del bundle",
		"lookupTime": "Tempo di ricerca",
		"lazyLoading": "Caricamento lazy",
		"library": "Libreria"
	},
	aboutHeader: {
		"methodology": "Metodologia",
		"weDesignedThisBenchmarkTo": "Abbiamo progettato questo benchmark per fornire confronti equi, riproducibili e significativi delle librerie i18n. Ecco il nostro approccio.",
		"aboutThisBenchmark": "Informazioni su questo benchmark",
		"thisIsAnOpenSource": "Questa è un'applicazione di test open-source — non un prodotto o un'azienda. Il suo unico scopo è fornire un'app React multi-pagina realistica in cui diverse librerie i18n possono essere integrate e misurate in condizioni identiche."
	},
	aboutGrid: {
		"testEnvironment": "Ambiente di test",
		"allBenchmarksRunOn": "Tutti i benchmark vengono eseguiti sullo stesso hardware (M2 MacBook Pro, 16 GB di RAM), lo stesso browser (Chromium 120 tramite Playwright) e le stesse condizioni di rete (4G simulato). Ogni test viene ripetuto 50 volte e riportiamo la mediana con i percentili P95/P99.",
		"applicationDesign": "Design dell'applicazione",
		"theBenchmarkAppHas10": "L'app benchmark ha 10 pagine con contenuti realistici — navigazione, moduli, liste dinamiche e testo statico. Ogni pagina utilizza 15-30 chiavi di traduzione per rappresentare modelli di utilizzo del mondo reale piuttosto che micro-benchmark sintetici.",
		"measurementMethodology": "Metodologia di misurazione",
		"weUseBrowserNativeApis": "Utilizziamo API native del browser (Performance Timeline, Resource Timing, Layout Instability) combinate con i dati di React Profiler. Le dimensioni dei bundle sono misurate post-gzip utilizzando source-map-explorer per accuratezza.",
		"fairComparison": "Confronto equo",
		"eachI18nLibraryIsIntegrated": "Ogni libreria i18n è integrata seguendo la sua documentazione ufficiale e le best practice. Consultiamo i manutentori quando possibile per garantire una configurazione ottimale. Stessa app React, stessa configurazione Vite, stesso deployment.",
		"whyThisExists": "Perché esiste questo progetto",
		"choosingAnI18nLibrary": "Scegliere una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo delle prestazioni: quanto peso aggiunge la libreria al bundle? Come influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento lazy aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.",
		"methodology": "Metodologia",
		"theSame10PageApp": "La stessa applicazione di 10 pagine viene creata una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per catturare i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili."
	},
	whatWeMeasure: {
		"bundleSizeImpact": "Impatto sulla dimensione del bundle",
		"theAdditionalJavascriptBytes": "I byte JavaScript aggiuntivi inviati agli utenti quando vengono inclusi la libreria i18n e i suoi file di traduzione. Ciò influisce direttamente sul tempo di download su reti lente.",
		"theAdditionalJavascriptBytesSent": "I byte JavaScript aggiuntivi inviati al client specificamente a causa del runtime della libreria i18n, più i file di traduzione per la lingua corrente.",
		"renderingOverhead": "Sovraccarico di rendering",
		"howMuchExtraTimeTheLibraryAdds": "Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un singolo fornitore di contesto possono causare rendering non necessari in tutto l'albero dei componenti.",
		"howMuchExtraTimeThe": "Quanto tempo extra lo strato i18n aggiunge a ogni rendering dei componenti — misurato utilizzando actualDuration di React Profiler.",
		"hydrationCost": "Costo dell'idratazione",
		"duringSsrTranslationDataIsSerialized": "Durante il SSR, i dati di traduzione vengono serializzati in HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione — il momento in cui la pagina diventa interattiva.",
		"duringSsrTranslationDataIs": "Durante il SSR, i dati di traduzione vengono serializzati nell'HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione — il momento in cui la pagina diventa interattiva.",
		"lazyLoadingEffectiveness": "Efficacia del caricamento lazy",
		"whetherSplittingTranslationsByRoute": "Se dividere le traduzioni per route o namespace riduce effettivamente il carico iniziale e quali compromessi introduce (richieste waterfall, FOUC, complessità della cache).",
		"localeSwitchSpeed": "Velocità di cambio lingua",
		"howFastTheAppCan": "Quanto velocemente l'app può passare da una lingua all'altra in fase di runtime — inclusi il recupero di nuove traduzioni, il rendering dei componenti e l'aggiornamento del DOM.",
		"howFastTheAppCanSwitchFromOne": "Quanto velocemente l'app può passare da una lingua all'altra in fase di runtime — inclusi il recupero di nuove traduzioni, il rendering dei componenti e l'aggiornamento del DOM.",
		"whatWeMeasure": "Cosa misuriamo"
	},
	blogHeader: {
		"blog": "Blog",
		"insightsDeepDivesAnd": "Approfondimenti e aggiornamenti dalla comunità di benchmarking i18n.",
		"insightsTutorialsAndAnalysis": "Approfondimenti, tutorial e analisi dalla comunità i18n."
	},
	blogList: {
		"comparingI18nLibrariesIn": "Confronto tra librerie i18n nel 2026: un approfondimento",
		"comparingI18nLibrariesIn2026": "Confronto tra librerie i18n nel 2026: un approfondimento",
		"march152026": "15 marzo 2026",
		"weTested12DifferentInternationalization": "Abbiamo testato 12 diverse librerie di internazionalizzazione su prestazioni, dimensione del bundle e DX. Ecco i risultati sorprendenti.",
		"howToReduceYourI18n": "Come ridurre il bundle i18n del 60%",
		"march82026": "8 marzo 2026",
		"practicalStrategiesForOptimizingTranslation": "Strategie pratiche per ottimizzare i bundle di traduzione tra cui caricamento lazy, suddivisione del codice e ottimizzazioni in fase di compilazione.",
		"theStateOfInternationalizationIn": "Lo stato dell'internazionalizzazione in React",
		"february282026": "28 febbraio 2026",
		"anOverviewOfTheCurrent": "Una panoramica dell'attuale ecosistema i18n, confrontando approcci dai cataloghi di messaggi alle soluzioni basate su compilatore.",
		"anOverviewOfTheCurrentI18n": "Una panoramica dell'attuale ecosistema i18n in React, coprendo tendenze, modelli emergenti e preferenze della comunità.",
		"migratingFromReactI18nextTo": "Migrazione da react-i18next a Lingui",
		"february152026": "15 febbraio 2026",
		"aStepByStepGuide": "Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.",
		"aStepByStepGuideOnMigrating": "Una guida passo passo sulla migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.",
		"serverComponentsAndI18nWhat": "Server Components e i18n: cosa cambia?",
		"february12026": "1 febbraio 2026",
		"reactServerComponentsIntroduce": "I React Server Components introducono nuovi modelli per l'internazionalizzazione. Ne esploriamo le implicazioni e le best practice.",
		"benchmarkMethodologyHowWe": "Metodologia del benchmark: come testiamo",
		"benchmarkMethodologyHowWeTest": "Metodologia del benchmark: come testiamo",
		"january202026": "20 gennaio 2026",
		"aTransparentLookAtOur": "Uno sguardo trasparente alla nostra metodologia di benchmarking, inclusi ambienti di test, metodi statistici e riproducibilità.",
		"aTransparentLookAtOurBenchmarking": "Uno sguardo trasparente alla nostra metodologia di benchmarking, inclusi ambienti di test, metodi statistici e riproducibilità.",
		"readMore": "Leggi di più →",
		"benchmark": "Benchmark",
		"tutorial": "Tutorial",
		"analysis": "Analisi",
		"meta": "Meta",
		"reactServerComponentsIntroduceNew": "I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche."
	},
	careersHeader: {
		"careers": "Carriere",
		"joinOurMissionToMake": "Unisciti alla nostra missione per rendere il web più veloce e accessibile per tutti, ovunque.",
		"joinOurMission": "Unisciti alla nostra missione per migliorare l'ecosistema dell'internazionalizzazione. Siamo un team prioritariamente remoto che valorizza l'impatto, la trasparenza e l'apprendimento continuo."
	},
	careersBenefits: {
		"whyJoinUs": "Perché unirti a noi?",
		"remoteFirst": "Remote-First",
		"workFromAnywhereFully": "Lavora da ovunque. Team completamente distribuito in 6 fusi orari.",
		"workFromAnywhere": "Lavora da qualsiasi parte del mondo",
		"openSource": "Open Source",
		"allOurWorkIs": "Tutto il nostro lavoro è open source. Costruisci il tuo portfolio pubblico mentre crei impatto.",
		"impactful": "Impattante",
		"yourWorkDirectlyHelps": "Il tuo lavoro aiuta direttamente i sviluppatori a creare applicazioni internazionalizzate migliori e più veloci.",
		"competitivePay": "Retribuzione competitiva",
		"topOfMarketCompensation": "Compensazione ai vertici del mercato",
		"openSourceTime": "Tempo per l'open source",
		"percentTimeForOss": "20% del tempo per contributi OSS"
	},
	openPositions: {
		"openPositions": "Posizioni aperte",
		"seniorPerformanceEngineer": "Senior Performance Engineer",
		"seniorFrontendEngineer": "Senior Frontend Engineer",
		"fullTime": "Full-Time",
		"remote": "Remoto",
		"leadBenchmarkDesignAnd": "Guidare il design e l'implementazione del benchmark. Richiesta profonda conoscenza dei componenti interni di V8, delle API di performance del browser e dell'analisi statistica.",
		"technicalWriter": "Scrittore tecnico",
		"partTime": "Part-Time",
		"createAndMaintainDocumentation": "Creare e mantenere documentazione, post del blog e contenuti educativi sulle best practice per le prestazioni i18n.",
		"frontendDeveloper": "Sviluppatore Frontend",
		"buildAndMaintainThe": "Costruire e mantenere la dashboard del benchmark, gli strumenti di confronto e le visualizzazioni interattive.",
		"buildAndMaintainOur": "Costruire e mantenere la nostra dashboard di benchmarking e gli strumenti per sviluppatori utilizzando React, TypeScript e Vite.",
		"devOpsEngineer": "Ingegnere DevOps",
		"designAndMaintainThe": "Progettare e mantenere la pipeline CI/CD che esegue automaticamente i benchmark su ogni aggiornamento della libreria.",
		"applyNow": "Candidati ora",
		"engineering": "Ingegneria",
		"backendEngineer": "Ingegnere Backend",
		"designAndScaleOur": "Progettare e scalare la nostra infrastruttura di benchmarking cloud che gestisce migliaia di esecuzioni automatizzate ogni giorno.",
		"documentation": "Documentazione",
		"createComprehensiveGuidesApi": "Creare guide complete, riferimenti API e tutorial per la nostra piattaforma di benchmarking.",
		"devrelEngineer": "Ingegnere DevRel",
		"sfRemote": "San Francisco / Remoto",
		"community": "Comunità",
		"engageWithTheI18n": "Interagire con la comunità i18n attraverso talk, workshop, post sul blog e contributi open source.",
		"qaEngineer": "Ingegnere QA",
		"ensureTheAccuracyAnd": "Garantire l'accuratezza e l'affidabilità dei risultati del benchmark attraverso test e validazioni rigorosi."
	},
	contactHeader: {
		"contactUs": "Contattaci",
		"haveQuestionsOrWantTo": "Hai domande o vuoi contribuire? Ci piacerebbe sentirti.",
		"getInTouch": "Mettiti in contatto",
		"haveIdeasFoundABug": "Hai idee, hai trovato un bug o vuoi contribuire con un benchmark? Contattaci."
	},
	contactForm: {
		"name": "Nome",
		"yourName": "Il tuo nome",
		"email": "Email",
		"emailPlaceholder": "tu@esempio.com",
		"subject": "Oggetto",
		"topic": "Argomento",
		"bugReport": "Segnalazione bug",
		"newBenchmarkIdea": "Nuova idea di benchmark",
		"methodologyQuestion": "Domanda sulla metodologia",
		"contribution": "Contributo",
		"other": "Altro",
		"message": "Messaggio",
		"messagePlaceholder": "Descrivi la tua domanda o idea...",
		"sendMessage": "Invia messaggio",
		"wellGetBackTo": "Ti ricontatteremo entro 48 ore."
	},
	faqHeader: {
		"frequentlyAskedQuestions": "Domande frequenti",
		"everythingYouNeedTo": "Tutto quello che c'è da sapere sul progetto i18n Benchmark.",
		"everythingYouNeedToKnow": "Tutto quello che c'è da sapere sul i18n Benchmark."
	},
	faqList: {
		"howAreTheBenchmarks": "Come vengono eseguiti i benchmark?",
		"allBenchmarksAreRun": "Tutti i benchmark vengono eseguiti utilizzando Playwright su una configurazione hardware coerente (M2 MacBook Pro) con condizioni di rete 4G simulate. Ogni test esegue 50 iterazioni e riportiamo i valori medi, P95 e P99.",
		"whatLibrariesAreCurrently": "Quali librerie vengono testate attualmente?",
		"weCurrentlyBenchmarkReactI18next": "Attualmente testiamo react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl e Paraglide. Abbiamo in programma di aggiungerne altre in base alle richieste della comunità.",
		"canISubmitMyOwn": "Posso inviare i miei benchmark?",
		"canISubmitMyOwnBenchmarks": "Posso inviare i miei benchmark?",
		"absolutelyWeWelcomeCommunity": "Assolutamente! Accogliamo con favore i contributi della comunità. Fai un fork del repository, aggiungi l'integrazione della tua libreria seguendo il nostro template e invia una pull request. Consulta la guida alla contribuzione per i dettagli.",
		"howOftenAreResults": "Con quale frequenza vengono aggiornati i risultati?",
		"benchmarksRunAutomaticallyVia": "I benchmark vengono eseguiti automaticamente tramite CI ad ogni aggiornamento delle dipendenze e settimanalmente sul branch main. I risultati vengono pubblicati sulla dashboard entro 24 ore.",
		"areTheResultsStatistically": "I risultati sono statisticamente significativi?",
		"yesWeUseThe": "Sì. Utilizziamo il test U di Mann-Whitney con un livello di significatività di 0,05 per confrontare le distribuzioni. Riportiamo anche intervalli di confidenza e dimensioni dell'effetto.",
		"whatIsI18nBenchmark": "Cos'è i18n Benchmark?",
		"i18nBenchmarkIsAnOpenSource": "i18n Benchmark è una suite di benchmarking open-source che misura e confronta le prestazioni, la dimensione del bundle e l'esperienza del sviluppatore delle librerie di internazionalizzazione per applicazioni JavaScript e React.",
		"howAreBenchmarksConducted": "Come vengono condotti i benchmark?",
		"weRunStandardizedTestsInIsolated": "Eseguiamo test standardizzati in ambienti isolati utilizzando hardware coerente. Ogni benchmark viene ripetuto più volte per garantire la significatività statistica. Tutte le configurazioni di test sono pubblicamente disponibili nel nostro repository GitHub.",
		"whichLibrariesAreCurrentlySupported": "Quali librerie sono attualmente supportate?",
		"weSupportReactI18nextReactIntl": "Supportiamo react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.",
		"yesCommunityBenchmarkSubmissionsAre": "Sì! Le proposte di benchmark della comunità sono le benvenute. Fai un fork del nostro repository, aggiungi il tuo benchmark seguendo la nostra guida alla contribuzione e invia una pull request. Il nostro team revisionerà e unirà le proposte ammissibili.",
		"howOftenAreBenchmarksUpdated": "Quanto spesso vengono aggiornati i benchmark?",
		"weReRunAllBenchmarksWeekly": "Rieseguiamo tutti i benchmark settimanalmente rispetto alle ultime versioni stabili di ogni libreria. I rilasci di versioni principali innescano un ciclo di re-benchmark immediato.",
		"isTheDataReliable": "I dati sono affidabili?",
		"weFollowRigorousStatisticalMethodologyIncluding": "Seguiamo una rigorosa metodologia statistica che include esecuzioni di riscaldamento, rilevamento di outlier e intervalli di confidenza. Tutti i dati grezzi sono pubblicati insieme alla nostra analisi per la massima trasparenza.",
		"doYouOfferConsultingServices": "Offrite servizi di consulenza?",
		"yesOurEnterprisePlanIncludesConsulting": "Sì, il nostro piano Enterprise include ore di consulenza per i team che valutano soluzioni i18n. Possiamo fornire raccomandazioni personalizzate basate sul tuo caso d'uso specifico, scala e vincoli.",
		"howCanIContribute": "Come posso contribuire?",
		"thereAreManyWaysToContribute": "Ci sono molti modi per contribuire: inviare benchmark, migliorare la documentazione, segnalare bug, suggerire nuove metriche o sponsorizzare il progetto. Visita il nostro repository GitHub per maggiori dettagli."
	},
	pricingHeader: {
		"pricing": "Prezzi",
		"transparentPricingForEvery": "Prezzi trasparenti per ogni fase del tuo viaggio i18n."
	},
	pricingTiers: {
		"freeTier": "Piano Gratuito",
		"free": "Gratis",
		"publicBenchmarkDashboard": "Dashboard pubblica del benchmark",
		"basicLibraryComparisons": "Confronti di base tra librerie",
		"communityForumAccess": "Accesso al forum della comunità",
		"monthlyResultDigest": "Resoconto mensile dei risultati",
		"getStarted": "Inizia subito",
		"proTier": "Piano Pro",
		"perMonth": "/mese",
		"allFreeFeatures": "Tutte le funzionalità del piano Gratuito",
		"customBenchmarkConfigurations": "Configurazioni personalizzate del benchmark",
		"privateResultsDashboard": "Dashboard dei risultati privati",
		"apiAccess1000Requests": "Accesso API (1.000 richieste/giorno)",
		"slackIntegration": "Integrazione Slack",
		"subscribeToPro": "Abbonati a Pro",
		"enterpriseTier": "Piano Enterprise",
		"custom": "Personalizzato",
		"allProFeatures": "Tutte le funzionalità del piano Pro",
		"dedicatedBenchmarkInfrastructure": "Infrastruttura dedicata per i benchmark",
		"customLibraryIntegrations": "Integrazioni personalizzate di librerie",
		"slaGuarantees": "Garanzie SLA",
		"prioritySupport": "Supporto prioritario",
		"contactSales": "Contatta l'ufficio vendite"
	},
	productsHeader: {
		"products": "Prodotti",
		"toolsAndServicesTo": "Strumenti e servizi per aiutarti a ottimizzare la tua strategia di internazionalizzazione."
	},
	productsGrid: {
		"benchmarkDashboard": "Dashboard del benchmark",
		"interactiveChartsAndTables": "Grafici e tabelle interattivi che confrontano le librerie i18n su dimensioni del bundle, tempi di rendering e costi di idratazione.",
		"bundleAnalyzer": "Analizzatore di bundle",
		"uploadYourBuildOutput": "Carica l'output della build e ottieni una scomposizione dettagliata di quanto il tuo bundle sia influenzato dal sovraccarico i18n.",
		"migrationAssistant": "Assistente alla migrazione",
		"automatedCodemodsAndGuides": "Codemod e guide automatizzate per migrare tra librerie i18n con il minimo disagio.",
		"performanceMonitor": "Monitor delle prestazioni",
		"continuousPerformanceTrackingFor": "Monitoraggio continuo delle prestazioni per la tua implementazione i18n. Ricevi avvisi quando il caricamento delle traduzioni peggiora.",
		"learnMore": "Scopri di più"
	},
	settingsHeader: {
		"settings": "Impostazioni",
		"manageYourAccountPreferences": "Gestisci le tue preferenze dell'account e la configurazione.",
		"manageYourAccount": "Gestisci le tue preferenze dell'account e la configurazione."
	},
	profileSection: {
		"profile": "Profilo",
		"displayName": "Nome visualizzato",
		"email": "Email"
	},
	preferencesSection: {
		"preferences": "Preferenze",
		"emailNotifications": "Notifiche via email",
		"receiveWeeklyBenchmark": "Ricevi report settimanali dei benchmark",
		"receiveWeeklyBenchmarkReports": "Ricevi report settimanali dei benchmark",
		"toggleNotifications": "Attiva/disattiva notifiche",
		"darkMode": "Modalità scura",
		"useDarkColorScheme": "Usa schema colori scuro",
		"toggleDarkMode": "Attiva/disattiva modalità scura",
		"defaultLanguage": "Lingua predefinita",
		"englishEn": "Inglese (en)",
		"frenchFr": "Francese (fr)",
		"germanDe": "Tedesco (de)",
		"spanishEs": "Spagnolo (es)",
		"japaneseJa": "Giapponese (ja)",
		"chineseSimplifiedZhCn": "Cinese semplificato (zh-CN)",
		"arabicAr": "Arabo (ar)"
	},
	apiAccessSection: {
		"apiAccess": "Accesso API",
		"apiKey": "Chiave API",
		"useThisKeyTo": "Usa questa chiave per accedere alle API di benchmarking in modo programmatico.",
		"copy": "Copia"
	},
	settingsFooter: {
		"cancel": "Annulla",
		"saveChanges": "Salva modifiche"
	},
	teamHeader: {
		"ourTeam": "Il nostro team",
		"meetThePeopleBehindI18n": "Incontra le persone dietro i18n Benchmark. Un team diversificato unito dalla passione per i grandi strumenti per sviluppatori."
	},
	teamGrid: {
		"sarahChen": "Sarah Chen",
		"founderLeadEngineer": "Fondatrice e Lead Engineer",
		"formerGoogleEngineerWith": "Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su larga scala.",
		"formerGoogleEngineerWith10": "Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su larga scala.",
		"marcusWeber": "Marcus Weber",
		"performanceEngineer": "Ingegnere delle prestazioni",
		"specializesInJavascriptPerformance": "Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente in Vercel.",
		"specializesInJavascriptPerformanceOptimization": "Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. Precedentemente in Vercel.",
		"aishaPatel": "Aisha Patel",
		"developerAdvocate": "Developer Advocate",
		"passionateAboutDeveloperExperience": "Appassionata di esperienza degli sviluppatori ed educazione. Relatrice a React Conf, JSConf e i18nNext.",
		"passionateAboutDeveloperExperienceAnd": "Appassionata di esperienza degli sviluppatori ed educazione. Relatrice a React Conf, JSConf e i18nNext.",
		"tomasRodriguez": "Tomás Rodríguez",
		"fullStackDeveloper": "Sviluppatore Full-Stack",
		"maintainsTheBenchmarkingInfrastructure": "Gestisce l'infrastruttura di benchmarking e la pipeline CI/CD. Contributore open source di Lingui.",
		"maintainsTheBenchmarkingInfrastructureAnd": "Gestisce l'infrastruttura di benchmarking e la pipeline CI/CD. Contributore open source di Lingui.",
		"yukiTanaka": "Yuki Tanaka",
		"dataAnalyst": "Analista di dati",
		"ensuresStatisticalRigorIn": "Garantisce il rigore statistico in tutti i risultati dei benchmark. PhD in Statistica Applicata al MIT.",
		"ensuresStatisticalRigorInAll": "Garantisce il rigore statistico in tutti i risultati dei benchmark. PhD in Statistica Applicata al MIT.",
		"elenaKowalski": "Elena Kowalski",
		"communityManager": "Community Manager",
		"managesCommunityContributions": "Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.",
		"managesCommunityContributionsPartnershipsAnd": "Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source."
	},
	mockBanner: "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è correlata ad alcun business o servizio reale."
};
var ja_default = {
	route: {
		"oopsPageNotFound": "おっと！ページが見つかりません",
		"returnToHome": "ホームに戻る",
		"couldNotMeasureHydrationDuration": "ハイドレーション時間を測定できませんでした："
	},
	header: {
		"home": "ホーム",
		"methodology": "測定方法",
		"mockPages": "モックページ",
		"products": "製品",
		"pricing": "料金",
		"team": "チーム",
		"blog": "ブログ",
		"careers": "採用情報",
		"faq": "FAQ",
		"contact": "お問い合わせ",
		"settings": "設定",
		"goToGithub": "GitHubへ"
	},
	footer: {
		"resources": "リソース",
		"contact": "お問い合わせ",
		"github": "GitHub",
		"methodology": "測定方法",
		"contributing": "貢献する",
		"builtWith": "i18n Benchmark — オープンソースプロジェクト。React, Vite & TanStack Routerで構築されています。",
		"anOpenSourceTestApplication": "国際化ライブラリがバンドルサイズ、ロード時間、アプリの反応性に与える実際の影響を測定するためのオープンソースのテストアプリケーションです。"
	},
	common: {
		"readMore": "もっと読む",
		"copy": "コピー",
		"cancel": "キャンセル",
		"saveChanges": "変更を保存"
	},
	themeToggle: {
		"themeModeAutoSystemClick": "テーマモード：自動（システム）。クリックしてライトモードに切り替えます。",
		"themeModeLightClick": "テーマモード：ライト。クリックしてダークモードに切り替えます。",
		"themeModeDarkClick": "テーマモード：ダーク。クリックして自動（システム）モードに切り替えます。",
		"themeAuto": "テーマ：自動",
		"themeDark": "テーマ：ダーク",
		"themeLight": "テーマ：ライト"
	},
	hero: {
		"aTestApplicationDesignedTo": "国際化ライブラリがバンドルサイズ、ロードパフォーマンス、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーションです。",
		"viewResults": "結果を見る"
	},
	whyItMatters: {
		"whyTheseMetricsMatter": "なぜこれらの指標が重要なのか",
		"bundleSize": "バンドルサイズ",
		"theBundleIsTheData": "バンドルは世界中のすべてのユーザーに送られるデータです。バンドルが大きければ、特に多くの地域で一般的な低速な3G回線ではダウンロード時間が長くなります。i18nライブラリの重さは、数キロバイトから数十キロバイトのランタイムコードに加え、翻訳ファイル自体まで劇的に異なります。",
		"renderingHydration": "レンダリングとハイドレーション",
		"connectingALargeJson": "大規模なJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生まれます。翻訳コンテキストの変更は、ツリー全体で再レンダリングを引き起こす可能性があります。SSRハイドレーション中、膨大な翻訳オブジェクトのパースとアタッチは、ページがインタラクティブになるまでのレイテンシを増加させ、Time to Interactive (TTI)に直接影響します。",
		"dynamicLoading": "動的ロード",
		"loadingAllTranslationsUpfront": "すべての翻訳を事前ロードすると、初期ペイロードに過負荷がかかります。動的（遅延）ロードは、ルートや名前空間ごとに翻訳を分割し、現在のページに必要なものだけを送信します。ただし、遅延ロードには独自のトレードオフ（ウォーターフォールリクエスト、翻訳されていないコンテンツのちらつき、キャッシュの複雑さ）が伴います。両方の戦略を測定することが不可欠です。"
	},
	understandingImpact: {
		"understandingTheImpact": "影響を理解する",
		"whyASingleLargeJson": "なぜ1つの大きなJSONがパフォーマンスを損なうのか",
		"manyI18nLibrariesStore": "多くのi18nライブラリは、Reactコンテキスト経由で提供される1つのJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい（数千のキーがある）場合、翻訳を消費するすべてのコンポーネントが辞書全体への参照を保持します。つまり、以下のことが起こります：",
		"manyI18nLibrariesStoreTranslations": "多くのi18nライブラリは、Reactコンテキスト経由で提供される1つのJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい（数千のキーがある）場合、翻訳を消費するすべてのコンポーネントが辞書全体への参照を保持します。つまり、以下のことが起こります：",
		"theJsonMustBeParsed": "ページがロードされるたびにJSONをパースする必要があり、メインスレッドをブロックします。",
		"contextBasedArchitecturesCan": "コンテキストベースのアーキテクチャでは、ロケールが変更されると、特定のキーが変更されていなくてもすべてのコンシューマーに通知されるため、連鎖的な再レンダリングが発生する可能性があります。",
		"contextBasedArchitecturesCanCause": "コンテキストベースのアーキテクチャでは、ロケールが変更されると、特定のキーが変更されていなくてもすべてのコンシューマーに通知されるため、連鎖的な再レンダリングが発生する可能性があります。",
		"duringServerSideRenderingThe": "サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアライズされ、ダウンロードとハイドレーションが必要なドキュメントのサイズが増加します。",
		"theTradeOffsOfDynamic": "動的ロードのトレードオフ",
		"splittingTranslationsIntoPerRoute": "翻訳をルートごとや名前空間ごとのチャンクに分割すると、初期ペイロードを劇的に削減できます。しかし、新たな課題も生じます：",
		"waterfallRequests": "ウォーターフォールリクエスト：",
		"theAppMustFirstLoad": "アプリがまずロードされ、ロケールを決定し、適切なチャンクを取得する必要があり、ネットワークの往復回数が増えます。",
		"flashOfUntranslatedContent": "翻訳されていないコンテンツのちらつき（FOUC）：",
		"flashOfUntranslatedContentFouc": "翻訳されていないコンテンツのちらつき（FOUC）：",
		"usersMayBrieflySeeTranslation": "チャンクが到着する前に、ユーザーに翻訳キーやフォールバック言語が一瞬見えることがあります。",
		"cacheInvalidation": "キャッシュの無効化：",
		"updatingTranslationsRequiresCache": "翻訳を更新するには、ユーザーが変更されていないチャンクを再ダウンロードせずに新しいコンテンツを取得できるようにするためのキャッシュ無効化戦略が必要です。",
		"whatThisBenchmarkMeasures": "このベンチマークが測定するもの",
		"thisTestAppProvidesA": "このテストアプリは、制御された環境（現実的なコンテンツを含む10ページ）を提供し、3つの要素でi18nライブラリを比較します：JavaScriptバンドルにかかる重量、翻訳されたコンテンツのパースとレンダリングに費やされた時間、およびコード分割と遅延ロード戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。"
	},
	resultsTable: {
		"sampleResults": "サンプル結果",
		"bundleSize": "バンドルサイズ",
		"lookupTime": "検索時間",
		"lazyLoading": "遅延ロード",
		"library": "ライブラリ"
	},
	aboutHeader: {
		"methodology": "測定方法",
		"weDesignedThisBenchmarkTo": "私たちは、i18nライブラリの公平で再現性のある有意義な比較を提供するために、このベンチマークを設計しました。以下が私たちの個別アプローチです。",
		"aboutThisBenchmark": "このベンチマークについて",
		"thisIsAnOpenSource": "これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、さまざまなi18nライブラリを統合し、同一条件で測定できる現実的なマルチページReactアプリを提供することです。"
	},
	aboutGrid: {
		"testEnvironment": "テスト環境",
		"allBenchmarksRunOn": "すべてのベンチマークは、同じハードウェア（M2 MacBook Pro, 16 GB RAM）、同じブラウザ（Playwright経由のChromium 120）、および同じネットワーク条件（シミュレートされた4G）で実行されます。各テストは50回繰り返され、中央値とP95/P99のパーセンタイルを報告します。",
		"applicationDesign": "アプリケーション設計",
		"theBenchmarkAppHas10": "ベンチマークアプリには、現実的なコンテンツ（ナビゲーション、フォーム、動的リスト、静的テキスト）を含む10ページがあります。各ページには15〜30の翻訳キーが使用されており、合成的なマイクロベンチマークではなく、現実の使用パターンを代表しています。",
		"measurementMethodology": "測定方法",
		"weUseBrowserNativeApis": "Performance Timeline, Resource Timing, Layout InstabilityなどのブラウザネイティブAPIと、React Profilerデータを組み合わせて使用します。バンドルサイズは、精度を高めるためにsource-map-explorerを使用してgzip後のサイズを測定します。",
		"fairComparison": "公平な比較",
		"eachI18nLibraryIsIntegrated": "各i18nライブラリは、公式ドキュメントとベストプラクティスに従って統合されています。可能な限りメンテナーに相談し、最適な構成を確保しています。同じReactアプリ、同じVite設定、同じデプロイメントです。",
		"whyThisExists": "なぜこれが必要なのか",
		"choosingAnI18nLibrary": "i18nライブラリの選択は、長期的な影響を伴うアーキテクチャ上の決定です。ほとんどの比較はAPIの使い勝手に焦点を当てていますが、パフォーマンスコスト（ライブラリがバンドルにどれだけの重量を加えるか、数千の翻訳キーがロードされたときにレンダリングにどう影響するか、遅延ロードは実際に役立つのか、それともコストをシフトするだけなのか）を測定しているものはほとんどありません。このベンチマークは、実際のデータでそれらの疑問に答えます。",
		"methodology": "測定方法",
		"theSame10PageApp": "ライブラリごとに同じ10ページのアプリが一度ビルドされます。プロダクションバンドルを測定し（rollup-plugin-visualizer経由）、ロード指標のためにLighthouse監査を実行し、React Profilerを使用してロケール切り替え中のレンダリング時間を取得します。再現可能な結果を保証するために、すべてのテストは一貫したハードウェアのCIで実行されます。"
	},
	whatWeMeasure: {
		"bundleSizeImpact": "バンドルサイズの影響",
		"theAdditionalJavascriptBytes": "i18nライブラリとその翻訳ファイルが含まれる際にユーザーに送信される追加のJavaScriptバイト。これは低速なネットワークでのダウンロード時間に直接影響します。",
		"theAdditionalJavascriptBytesSent": "i18nライブラリのランタイムと現在のロケールの翻訳ファイルのために、クライアントに送信される追加のJavaScriptバイト。",
		"renderingOverhead": "レンダリングのオーバーヘッド",
		"howMuchExtraTimeTheLibraryAdds": "ライブラリがReactのレンダリングサイクルに追加する時間。1つのコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。",
		"howMuchExtraTimeThe": "i18nレイヤーが各コンポーネントのレンダリングに追加する時間。React ProfilerのactualDurationを使用して測定されます。",
		"hydrationCost": "ハイドレーションコスト",
		"duringSsrTranslationDataIsSerialized": "SSR中、翻訳データはHTMLにシリアライズされます。大きな辞書はHTMLペイロードを増加させ、ページがインタラクティブになる瞬間であるハイドレーションを遅らせます。",
		"duringSsrTranslationDataIs": "SSR中、翻訳データはHTMLにシリアライズされます。大きな辞書はHTMLペイロードを増加させ、ページがインタラクティブになる瞬間であるハイドレーションを遅らせます。",
		"lazyLoadingEffectiveness": "遅延ロードの有効性",
		"whetherSplittingTranslationsByRoute": "ルートや名前空間ごとに翻訳を分割することが実際に初期ロードを削減するかどうか、そしてどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）をもたらすか。",
		"localeSwitchSpeed": "ロケール切り替え速度",
		"howFastTheAppCan": "アプリが実行時にある言語から別の言語にどれだけ速く切り替えられるか。これには新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新が含まれます。",
		"howFastTheAppCanSwitchFromOne": "アプリが実行時にある言語から別の言語にどれだけ速く切り替えられるか。これには新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新が含まれます。",
		"whatWeMeasure": "私たちが測定するもの"
	},
	blogHeader: {
		"blog": "ブログ",
		"insightsDeepDivesAnd": "i18nベンチマークコミュニティからの洞察、深掘り、アップデート。",
		"insightsTutorialsAndAnalysis": "i18nコミュニティからの洞察、チュートリアル、分析。"
	},
	blogList: {
		"comparingI18nLibrariesIn": "2026年i18nライブラリ比較：詳細分析",
		"comparingI18nLibrariesIn2026": "2026年i18nライブラリ比較：詳細分析",
		"march152026": "2026年3月15日",
		"weTested12DifferentInternationalization": "パフォーマンス、バンドルサイズ、DXにわたって12種類の国際化ライブラリをテストしました。驚くべき結果がこちらです。",
		"howToReduceYourI18n": "i18nバンドルを60%削減する方法",
		"march82026": "2026年3月8日",
		"practicalStrategiesForOptimizingTranslation": "遅延ロード、コード分割、コンパイル時最適化など、翻訳バンドルを最適化するための実践的な戦略。",
		"theStateOfInternationalizationIn": "Reactにおける国際化の現状",
		"february282026": "2026年2月28日",
		"anOverviewOfTheCurrent": "現在のi18nエコシステムの概要。メッセージカタログからコンパイラベースのソリューションまで、さまざまなアプローチを比較します。",
		"anOverviewOfTheCurrentI18n": "トレンド、新興パターン、コミュニティの好みをカバーする、Reactにおける現在のi18nエコシステムの概要。",
		"migratingFromReactI18nextTo": "react-i18nextからLinguiへの移行",
		"february152026": "2026年2月15日",
		"aStepByStepGuide": "50,000の翻訳キーを持つプロダクションアプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。",
		"aStepByStepGuideOnMigrating": "50,000の翻訳キーを持つプロダクションアプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。",
		"serverComponentsAndI18nWhat": "Server Componentsとi18n：何が変わるのか？",
		"february12026": "2026年2月1日",
		"reactServerComponentsIntroduce": "React Server Componentsは国際化に新しいパターンを導入します。その影響とベストプラクティスを探ります。",
		"benchmarkMethodologyHowWe": "ベンチマーク方法：テストの方法",
		"benchmarkMethodologyHowWeTest": "ベンチマーク方法：テストの方法",
		"january202026": "2026年1月20日",
		"aTransparentLookAtOur": "テスト環境、統計手法、再現性を含む、ベンチマーク方法の透明性のある考察。",
		"aTransparentLookAtOurBenchmarking": "テスト環境、統計手法、再現性を含む、ベンチマーク方法の透明性のある考察。",
		"readMore": "もっと読む →",
		"benchmark": "ベンチマーク",
		"tutorial": "チュートリアル",
		"analysis": "分析",
		"meta": "メタ",
		"reactServerComponentsIntroduceNew": "React Server Componentsは国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。"
	},
	careersHeader: {
		"careers": "採用情報",
		"joinOurMissionToMake": "世界中のすべての人がウェブをより速く、よりアクセシブルにするためのミッションに参加しませんか。",
		"joinOurMission": "国際化エコシステムを改善するための私たちのミッションに参加してください。私たちは影響力、透明性、継続的な学習を重視するリモートファーストのチームです。"
	},
	careersBenefits: {
		"whyJoinUs": "なぜ私たちと一緒に働くのか？",
		"remoteFirst": "リモートファースト",
		"workFromAnywhereFully": "どこからでも仕事ができます。6つのタイムゾーンに分散した完全に自律的なチームです。",
		"workFromAnywhere": "世界中のどこからでも働けます",
		"openSource": "オープンソース",
		"allOurWorkIs": "私たちの仕事はすべてオープンソースです。インパクトを与えながら、公開ポートフォリオを構築できます。",
		"impactful": "影響力がある",
		"yourWorkDirectlyHelps": "あなたの仕事は、開発者がより良く、より速い国際化アプリケーションを構築するのを直接助けます。",
		"competitivePay": "競争力のある給与",
		"topOfMarketCompensation": "市場最高レベルの報酬",
		"openSourceTime": "オープンソースの時間",
		"percentTimeForOss": "業務時間の20%をOSSへの貢献に充てられます"
	},
	openPositions: {
		"openPositions": "募集職種",
		"seniorPerformanceEngineer": "シニアパフォーマンスエンジニア",
		"seniorFrontendEngineer": "シニアフロントエンドエンジニア",
		"fullTime": "正社員",
		"remote": "リモート",
		"leadBenchmarkDesignAnd": "ベンチマークの設計と実装をリード。V8の内部構造、ブラウザのパフォーマンスAPI、統計分析に関する深い知識が必要です。",
		"technicalWriter": "テクニカルライター",
		"partTime": "アルバイト",
		"createAndMaintainDocumentation": "i18nパフォーマンスのベストプラクティスに関するドキュメント、ブログ、教育コンテンツの作成と維持。",
		"frontendDeveloper": "フロントエンドデベロッパー",
		"buildAndMaintainThe": "ベンチマークダッシュボード、比較ツール、インタラクティブな可視化の構築と維持。",
		"buildAndMaintainOur": "React, TypeScript, Viteを使用してベンチマークダッシュボードと開発者ツールを構築および維持します。",
		"devOpsEngineer": "DevOpsエンジニア",
		"designAndMaintainThe": "ライブラリの更新ごとにベンチマークを自動実行するCI/CDパイプラインの設計と維持。",
		"applyNow": "今すぐ応募する",
		"engineering": "エンジニアリング",
		"backendEngineer": "バックエンドエンジニア",
		"designAndScaleOur": "毎日数千の自動実行を処理するクラウドベンチマークインフラの設計とスケーリング。",
		"documentation": "ドキュメンテーション",
		"createComprehensiveGuidesApi": "ベンチマークプラットフォーム向けの包括的なガイド、APIリファレンス、チュートリアルの作成。",
		"devrelEngineer": "DevRelエンジニア",
		"sfRemote": "サンフランシスコ / リモート",
		"community": "コミュニティ",
		"engageWithTheI18n": "講演、ワークショップ、ブログ、オープンソース貢献を通じてi18nコミュニティと交流する。",
		"qaEngineer": "QAエンジニア",
		"ensureTheAccuracyAnd": "厳格なテストと検証を通じてベンチマーク結果の正確性と信頼性を確保する。"
	},
	contactHeader: {
		"contactUs": "お問い合わせ",
		"haveQuestionsOrWantTo": "質問や貢献のご提案がありますか？ご連絡をお待ちしております。",
		"getInTouch": "連絡を取る",
		"haveIdeasFoundABug": "アイデア、バグの報告、ベンチマークの提供など、お気軽にご連絡ください。"
	},
	contactForm: {
		"name": "お名前",
		"yourName": "あなたのお名前",
		"email": "メールアドレス",
		"emailPlaceholder": "you@example.com",
		"subject": "件名",
		"topic": "トピック",
		"bugReport": "バグ報告",
		"newBenchmarkIdea": "新しいベンチマークのアイデア",
		"methodologyQuestion": "測定方法に関する質問",
		"contribution": "貢献",
		"other": "その他",
		"message": "メッセージ",
		"messagePlaceholder": "質問やアイデアの内容を記入してください...",
		"sendMessage": "メッセージを送信",
		"wellGetBackTo": "48時間以内に返信いたします。"
	},
	faqHeader: {
		"frequentlyAskedQuestions": "よくある質問",
		"everythingYouNeedTo": "i18nベンチマークプロジェクトについて知っておくべきことのすべて。",
		"everythingYouNeedToKnow": "i18nベンチマークについて知っておくべきことのすべて。"
	},
	faqList: {
		"howAreTheBenchmarks": "ベンチマークはどのように実行されますか？",
		"allBenchmarksAreRun": "すべてのベンチマークは、一貫したハードウェア（M2 MacBook Pro）上でPlaywrightを使用し、シミュレートされた4Gネットワーク条件で実行されます。各テストは50回繰り返され、中央値、P95、P99の値を報告します。",
		"whatLibrariesAreCurrently": "現在どのライブラリがテストされていますか？",
		"weCurrentlyBenchmarkReactI18next": "現在はreact-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl, Paraglideを測定しています。コミュニティの要望に応じて追加予定です。",
		"canISubmitMyOwn": "自分のベンチマークを提出できますか？",
		"canISubmitMyOwnBenchmarks": "自分のベンチマークを提出できますか？",
		"absolutelyWeWelcomeCommunity": "もちろんです！コミュニティからの貢献を歓迎します。リポジトリをフォークし、テンプレートに従ってライブラリ統合を追加して、プルリクエストを送信してください。詳細は貢献ガイドをご覧ください。",
		"howOftenAreResults": "結果はどのくらいの頻度で更新されますか？",
		"benchmarksRunAutomaticallyVia": "ベンチマークは、依存関係の更新ごとにCI経由で自動的に実行され、さらにメインブランチで毎週実行されます。結果は24時間以内にダッシュボードに公開されます。",
		"areTheResultsStatistically": "結果は統計的に有意ですか？",
		"yesWeUseThe": "はい。分布を比較するために有意水準0.05のマン・ホイットニーのU検定を使用しています。信頼区間と効果量も報告します。",
		"whatIsI18nBenchmark": "i18n Benchmarkとは何ですか？",
		"i18nBenchmarkIsAnOpenSource": "i18n Benchmarkは、JavaScriptおよびReactアプリケーション向けの国際化ライブラリのパフォーマンス、バンドルサイズ、開発者体験を測定および比較するオープンソースのベンチマークスイートです。",
		"howAreBenchmarksConducted": "ベンチマークはどのように行われますか？",
		"weRunStandardizedTestsInIsolated": "一貫したハードウェアを使用し、隔離された環境で標準化されたテストを実行します。各ベンチマークは統計的な有意性を確保するために複数回繰り返されます。すべてのテスト構成はGitHubリポジトリで公開されています。",
		"whichLibrariesAreCurrentlySupported": "現在どのライブラリがサポートされていますか？",
		"weSupportReactI18nextReactIntl": "react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgeeをサポートしています。",
		"yesCommunityBenchmarkSubmissionsAre": "はい！コミュニティからのベンチマーク提出を歓迎します。リポジトリをフォークし、貢献ガイドに従ってベンチマークを追加して、プルリクエストを送信してください。チームが審査し、要件を満たすものをマージします。",
		"howOftenAreBenchmarksUpdated": "ベンチマークはどのくらいの頻度で更新されますか？",
		"weReRunAllBenchmarksWeekly": "すべてのベンチマークを各ライブラリの最新の安定版に対して毎週実行します。メジャーバージョンのリリース時は、即座に再ベンチマークサイクルが実行されます。",
		"isTheDataReliable": "データは信頼できますか？",
		"weFollowRigorousStatisticalMethodologyIncluding": "ウォームアップ実行、外れ値検出、信頼区間を含む厳格な統計手法に従っています。完全な透明性を確保するため、すべての生データは分析と共に公開されます。",
		"doYouOfferConsultingServices": "コンサルティングサービスは提供していますか？",
		"yesOurEnterprisePlanIncludesConsulting": "はい。エンタープライズプランには、i18nソリューションを評価するチーム向けのコンサルティング時間が含まれています。特定のユースケース、規模、制約に基づいたカスタマイズされた推奨事項を提供できます。",
		"howCanIContribute": "どのように貢献できますか？",
		"thereAreManyWaysToContribute": "ベンチマークの提出、ドキュメントの改善、バグ報告、新しい指標の提案、プロジェクトのスポンサーなど、多くの貢献方法があります。詳細はGitHubリポジトリをご覧ください。"
	},
	pricingHeader: {
		"pricing": "料金",
		"transparentPricingForEvery": "i18n導入のあらゆる段階に対応する透明性のある料金体系。"
	},
	pricingTiers: {
		"freeTier": "フリープラン",
		"free": "無料",
		"publicBenchmarkDashboard": "公開ベンチマークダッシュボード",
		"basicLibraryComparisons": "基本的なライブラリ比較",
		"communityForumAccess": "コミュニティフォーラムへのアクセス",
		"monthlyResultDigest": "月刊結果ダイジェスト",
		"getStarted": "始める",
		"proTier": "プロプラン",
		"perMonth": "/月",
		"allFreeFeatures": "フリープランのすべての機能",
		"customBenchmarkConfigurations": "カスタムベンチマーク構成",
		"privateResultsDashboard": "プライベート結果ダッシュボード",
		"apiAccess1000Requests": "APIアクセス（1日1,000リクエスト）",
		"slackIntegration": "Slack連携",
		"subscribeToPro": "プロプランに登録",
		"enterpriseTier": "エンタープライズプラン",
		"custom": "カスタム",
		"allProFeatures": "プロプランのすべての機能",
		"dedicatedBenchmarkInfrastructure": "専用ベンチマークインフラ",
		"customLibraryIntegrations": "カスタムライブラリ統合",
		"slaGuarantees": "SLA保証",
		"prioritySupport": "優先サポート",
		"contactSales": "営業に問い合わせる"
	},
	productsHeader: {
		"products": "製品",
		"toolsAndServicesTo": "国際化戦略の最適化を支援するツールとサービス。"
	},
	productsGrid: {
		"benchmarkDashboard": "ベンチマークダッシュボード",
		"interactiveChartsAndTables": "バンドルサイズ、レンダリング時間、ハイドレーションコストにわたってi18nライブラリを比較するインタラクティブなチャートと表。",
		"bundleAnalyzer": "バンドルアナライザー",
		"uploadYourBuildOutput": "ビルド出力をアップロードして、バンドルのうちi18nのオーバーヘッドがどれくらいあるか詳細な内訳を取得します。",
		"migrationAssistant": "移行アシスタント",
		"automatedCodemodsAndGuides": "影響を最小限に抑えながらi18nライブラリ間を移行するための自動化されたCodemodとガイド。",
		"performanceMonitor": "パフォーマンスモニター",
		"continuousPerformanceTrackingFor": "i18n実装の継続的なパフォーマンス追跡。翻訳のロードが低下したときにアラートを受け取ります。",
		"learnMore": "詳しく見る"
	},
	settingsHeader: {
		"settings": "設定",
		"manageYourAccountPreferences": "アカウント設定と構成を管理します。",
		"manageYourAccount": "アカウント設定と構成を管理します。"
	},
	profileSection: {
		"profile": "プロフィール",
		"displayName": "表示名",
		"email": "メールアドレス"
	},
	preferencesSection: {
		"preferences": "設定",
		"emailNotifications": "メール通知",
		"receiveWeeklyBenchmark": "毎週のベンチマークレポートを受け取る",
		"receiveWeeklyBenchmarkReports": "毎週のベンチマークレポートを受け取る",
		"toggleNotifications": "通知の切り替え",
		"darkMode": "ダークモード",
		"useDarkColorScheme": "ダークカラーテーマを使用する",
		"toggleDarkMode": "ダークモードの切り替え",
		"defaultLanguage": "デフォルト言語",
		"englishEn": "英語 (en)",
		"frenchFr": "フランス語 (fr)",
		"germanDe": "ドイツ語 (de)",
		"spanishEs": "スペイン語 (es)",
		"japaneseJa": "日本語 (ja)",
		"chineseSimplifiedZhCn": "中国語簡体字 (zh-CN)",
		"arabicAr": "アラビア語 (ar)"
	},
	apiAccessSection: {
		"apiAccess": "APIアクセス",
		"apiKey": "APIキー",
		"useThisKeyTo": "プログラムからベンチマークAPIにアクセスするためにこのキーを使用します。",
		"copy": "コピー"
	},
	settingsFooter: {
		"cancel": "キャンセル",
		"saveChanges": "変更を保存"
	},
	teamHeader: {
		"ourTeam": "私たちのチーム",
		"meetThePeopleBehindI18n": "i18n Benchmarkを支える人々を紹介します。優れた開発者ツールへの共通の情熱によって結ばれた多様なチームです。"
	},
	teamGrid: {
		"sarahChen": "Sarah Chen",
		"founderLeadEngineer": "創設者 & リードエンジニア",
		"formerGoogleEngineerWith": "元Googleエンジニア。大規模な国際化システムの構築に10年の経験があります。",
		"formerGoogleEngineerWith10": "元Googleエンジニア。大規模な国際化システムの構築に10年の経験があります。",
		"marcusWeber": "Marcus Weber",
		"performanceEngineer": "パフォーマンスエンジニア",
		"specializesInJavascriptPerformance": "JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。以前はVercelに在籍。",
		"specializesInJavascriptPerformanceOptimization": "JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。以前はVercelに在籍。",
		"aishaPatel": "Aisha Patel",
		"developerAdvocate": "デベロッパーアドボケイト",
		"passionateAboutDeveloperExperience": "デベロッパーエクスペリエンスと教育に情熱を注いでいます。React Conf, JSConf, i18nNextのスピーカー。",
		"passionateAboutDeveloperExperienceAnd": "デベロッパーエクスペリエンスと教育に情熱を注いでいます。React Conf, JSConf, i18nNextのスピーカー。",
		"tomasRodriguez": "Tomás Rodríguez",
		"fullStackDeveloper": "フルスタックデベロッパー",
		"maintainsTheBenchmarkingInfrastructure": "ベンチマークインフラとCI/CDパイプラインを維持。Linguiのオープンソースコントリビューター。",
		"maintainsTheBenchmarkingInfrastructureAnd": "ベンチマークインフラとCI/CDパイプラインを維持。Lingui de オープンソースコントリビューター。",
		"yukiTanaka": "Yuki Tanaka",
		"dataAnalyst": "データアナリスト",
		"ensuresStatisticalRigorIn": "すべてのベンチマーク結果における統計的な厳密さを確保。MITで応用統計学の博士号を取得。",
		"ensuresStatisticalRigorInAll": "すべてのベンチマーク結果における統計的な厳密さを確保。MITで応用統計学の博士号を取得。",
		"elenaKowalski": "Elena Kowalski",
		"communityManager": "コミュニティマネージャー",
		"managesCommunityContributions": "コミュニティへの貢献、パートナーシップ、イベントを管理。オープンソースガバナンスの経歴。",
		"managesCommunityContributionsPartnershipsAnd": "コミュニティへの貢献、パートナーシップ、イベントを管理。オープンソースガバナンスの経歴。"
	},
	mockBanner: "⚠️ このページにはベンチマーク目的のモックデータのみが含まれています。実際のビジネスやサービスとは関係ありません。"
};
var ko_default = {
	route: {
		"oopsPageNotFound": "어쿠! 페이지를 찾을 수 없습니다",
		"returnToHome": "홈으로 돌아가기",
		"couldNotMeasureHydrationDuration": "하이드레이션 시간을 측정할 수 없습니다:"
	},
	header: {
		"home": "홈",
		"methodology": "방법론",
		"mockPages": "모의 페이지",
		"products": "제품",
		"pricing": "요금",
		"team": "팀",
		"blog": "블로그",
		"careers": "채용",
		"faq": "자주 묻는 질문",
		"contact": "문의",
		"settings": "설정",
		"goToGithub": "GitHub로 이동"
	},
	footer: {
		"resources": "리소스",
		"contact": "문의",
		"github": "GitHub",
		"methodology": "방법론",
		"contributing": "기여하기",
		"builtWith": "i18n Benchmark — 오픈 소스 프로젝트. React, Vite 및 TanStack Router로 구축되었습니다.",
		"anOpenSourceTestApplication": "국제화 라이브러리가 번들 크기, 로딩 시간 및 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다."
	},
	common: {
		"readMore": "더 읽어보기",
		"copy": "복사",
		"cancel": "취소",
		"saveChanges": "변경 사항 저장"
	},
	themeToggle: {
		"themeModeAutoSystemClick": "테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환합니다.",
		"themeModeLightClick": "테마 모드: 라이트. 클릭하여 다크 모드로 전환합니다.",
		"themeModeDarkClick": "테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환합니다.",
		"themeAuto": "테마: 자동",
		"themeDark": "테마: 다크",
		"themeLight": "테마: 라이트"
	},
	hero: {
		"aTestApplicationDesignedTo": "국제화 라이브러리가 번들 크기, 로딩 성능 및 렌더링 반응성에 미치는 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.",
		"viewResults": "결과 보기"
	},
	whyItMatters: {
		"whyTheseMetricsMatter": "이러한 지표가 중요한 이유",
		"bundleSize": "번들 크기",
		"theBundleIsTheData": "번들은 전 세계의 모든 사용자에게 전송되는 데이터입니다. 번들이 클수록 다운로드 시간이 길어지며, 특히 많은 지역에서 흔히 볼 수 있는 느린 3G 연결에서는 더욱 그렇습니다. i18n 라이브러리는 런타임 코드 수 킬로바이트에서 수십 킬로바이트에 이르기까지 그 무게가 천차만별이며, 여기에 번역 파일 자체의 크기가 더해집니다.",
		"renderingHydration": "렌더링 및 하이드레이션",
		"connectingALargeJson": "대규모 JSON 사전을 모든 컴포넌트에 연결하면 숨겨진 종속성이 발생합니다. 번역 컨텍스트의 모든 변경 사항은 전체 트리에서 다시 렌더링을 유발할 수 있습니다. SSR 하이드레이션 중에 거대한 번역 객체를 파싱하고 연결하는 과정은 페이지가 대화형이 되기 전까지 지연을 추가하여 TTI(Time to Interactive)에 직접적인 영향을 미칩니다.",
		"dynamicLoading": "동적 로딩",
		"loadingAllTranslationsUpfront": "모든 번역을 미리 로드하면 초기 페이로드가 과부하됩니다. 동적(지연) 로딩은 경로 또는 네임스페이스별로 번역을 분할하여 현재 페이지에 필요한 것만 전송합니다. 그러나 지연 로딩은 워터폴 요청, 번역되지 않은 콘텐츠의 깜박임, 캐시 복잡성 등의 단점이 있습니다. 두 전략을 모두 측정하는 것이 필수적입니다."
	},
	understandingImpact: {
		"understandingTheImpact": "영향 이해하기",
		"whyASingleLargeJson": "단일 대형 JSON이 성능을 저하시키는 이유",
		"manyI18nLibrariesStore": "많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 경우(수천 개의 키), 번역을 사용하는 모든 컴포넌트가 전체 사전에 대한 참조를 유지합니다. 이는 다음을 의미합니다:",
		"manyI18nLibrariesStoreTranslations": "많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 경우(수천 개의 키), 번역을 사용하는 모든 컴포넌트가 전체 사전에 대한 참조를 유지합니다. 이는 다음을 의미합니다:",
		"theJsonMustBeParsed": "페이지를 로드할 때마다 JSON을 파싱해야 하므로 메인 스레드가 차단됩니다.",
		"contextBasedArchitecturesCan": "컨텍스트 기반 아키텍처는 로캘이 변경될 때 계단식 다시 렌더링을 유발할 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자가 알림을 받기 때문입니다.",
		"contextBasedArchitecturesCanCause": "컨텍스트 기반 아키텍처는 로캘이 변경될 때 계단식 다시 렌더링을 유발할 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자가 알림을 받기 때문입니다.",
		"duringServerSideRenderingThe": "서버 사이드 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어 다운로드 및 하이드레이션이 필요한 문서 크기가 증가합니다.",
		"theTradeOffsOfDynamic": "동적 로딩의 장단점",
		"splittingTranslationsIntoPerRoute": "번역을 경로별 또는 네임스페이스별 청크로 나누면 초기 페이로드를 획기적으로 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다:",
		"waterfallRequests": "워터폴 요청:",
		"theAppMustFirstLoad": "앱이 먼저 로드되고 로캘을 결정한 다음 올바른 청크를 가져와야 하므로 네트워크 왕복이 추가됩니다.",
		"flashOfUntranslatedContent": "번역되지 않은 콘텐츠의 깜박임(FOUC):",
		"flashOfUntranslatedContentFouc": "번역되지 않은 콘텐츠의 깜박임(FOUC):",
		"usersMayBrieflySeeTranslation": "청크가 도착하기 전에 사용자가 번역 키나 대체 언어를 잠시 볼 수 있습니다.",
		"cacheInvalidation": "캐시 무효화:",
		"updatingTranslationsRequiresCache": "번역을 업데이트하려면 사용자가 변경되지 않은 청크를 다시 다운로드하지 않고도 최신 콘텐츠를 받을 수 있도록 하는 캐시 무효화 전략이 필요합니다.",
		"whatThisBenchmarkMeasures": "이 벤치마크가 측정하는 것",
		"thisTestAppProvidesA": "이 테스트 앱은 제어된 환경(현실적인 콘텐츠가 포함된 10개 페이지)을 제공하여 세 가지 축에서 i18n 라이브러리를 비교합니다. JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 파싱하고 렌더링하는 데 소요되는 시간, 코드 분할 및 지연 로딩 전략의 효과성입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접 비교 가능합니다."
	},
	resultsTable: {
		"sampleResults": "샘플 결과",
		"bundleSize": "번들 크기",
		"lookupTime": "조회 시간",
		"lazyLoading": "지연 로딩",
		"library": "라이브러리"
	},
	aboutHeader: {
		"methodology": "방법론",
		"weDesignedThisBenchmarkTo": "우리는 i18n 라이브러리에 대한 공정하고 재현 가능하며 의미 있는 비교를 제공하기 위해 이 벤치마크를 설계했습니다. 우리의 접근 방식은 다음과 같습니다.",
		"aboutThisBenchmark": "이 벤치마크 정보",
		"thisIsAnOpenSource": "이것은 오픈 소스 테스트 애플리케이션이며 제품이나 회사가 아닙니다. 유일한 목적은 다양한 i18n 라이브러리를 통합하고 동일한 조건에서 측정할 수 있는 현실적인 다중 페이지 React 앱을 제공하는 것입니다."
	},
	aboutGrid: {
		"testEnvironment": "테스트 환경",
		"allBenchmarksRunOn": "모든 벤치마크는 동일한 하드웨어(M2 MacBook Pro, 16GB RAM), 동일한 브라우저(Playwright를 통한 Chromium 120) 및 동일한 네트워크 조건(시뮬레이션된 4G)에서 실행됩니다. 각 테스트는 50회 반복되며 중앙값과 P95/P99 백분위수를 보고합니다.",
		"applicationDesign": "애플리케이션 설계",
		"theBenchmarkAppHas10": "벤치마크 앱에는 내비게이션, 양식, 동적 목록 및 정적 텍스트와 같은 현실적인 콘텐츠가 포함된 10개의 페이지가 있습니다. 각 페이지는 인위적인 마이크로 벤치마크가 아닌 실제 사용 패턴을 나타내기 위해 15~30개의 번역 키를 사용합니다.",
		"measurementMethodology": "측정 방법론",
		"weUseBrowserNativeApis": "Performance Timeline, Resource Timing, Layout Instability 등 브라우저 네이티브 API와 React Profiler 데이터를 함께 사용합니다. 번들 크기는 정확성을 위해 source-map-explorer를 사용하여 gzip 후 측정됩니다.",
		"fairComparison": "공정한 비교",
		"eachI18nLibraryIsIntegrated": "각 i18n 라이브러리는 공식 문서와 모범 사례를 따라 통합됩니다. 최적의 구성을 보장하기 위해 가능한 경우 유지 관리자와 상담합니다. 동일한 React 앱, 동일한 Vite 구성, 동일한 배포 환경을 사용합니다.",
		"whyThisExists": "존재 이유",
		"choosingAnI18nLibrary": "i18n 라이브러리를 선택하는 것은 장기적인 영향을 미치는 아키텍처 결정입니다. 대부분의 비교는 API의 편의성에 집중하지만, 성능 비용을 측정하는 경우는 드뭅니다. 라이브러리가 번들에 얼마나 많은 무게를 추가하는지, 수천 개의 번역 키가 로드될 때 렌더링에 어떤 영향을 미치는지, 지연 로딩이 실제로 도움이 되는지 아니면 단순히 비용을 전가하는지 등입니다. 이 벤치마크는 실제 데이터로 이러한 질문에 답합니다.",
		"methodology": "방법론",
		"theSame10PageApp": "라이브러리당 동일한 10페이지 앱이 한 번 구축됩니다. 프로덕션 번들을 측정하고(rollup-plugin-visualizer 사용), 로딩 지표에 대한 Lighthouse 감사를 실행하며, React Profiler를 사용하여 로캘 전환 중 렌더링 시간을 캡처합니다. 모든 테스트는 재현 가능한 결과를 보장하기 위해 일관된 하드웨어의 CI에서 실행됩니다."
	},
	whatWeMeasure: {
		"bundleSizeImpact": "번들 크기 영향",
		"theAdditionalJavascriptBytes": "i18n 라이브러리와 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다.",
		"theAdditionalJavascriptBytesSent": "i18n 라이브러리 런타임과 현재 로캘의 번역 파일로 인해 클라이언트에 전송되는 추가 JavaScript 바이트입니다.",
		"renderingOverhead": "렌더링 오버헤드",
		"howMuchExtraTimeTheLibraryAdds": "라이브러리가 React의 렌더링 주기에 추가하는 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 주입하는 라이브러리는 컴포넌트 트리 전체에서 불필요한 다시 렌더링을 유발할 수 있습니다.",
		"howMuchExtraTimeThe": "i18n 레이어가 각 컴포넌트 렌더링에 추가하는 시간입니다. React Profiler의 actualDuration을 사용하여 측정됩니다.",
		"hydrationCost": "하이드레이션 비용",
		"duringSsrTranslationDataIsSerialized": "SSR 중에 번역 데이터가 HTML로 직렬화됩니다. 대형 사전은 HTML 페이로드를 늘리고 페이지가 대화형이 되는 순간인 하이드레이션 속도를 늦춥니다.",
		"duringSsrTranslationDataIs": "SSR 중에 번역 데이터가 HTML로 직렬화됩니다. 대형 사전은 HTML 페이로드를 늘리고 페이지가 대화형이 되는 순간인 하이드레이션 속도를 늦춥니다.",
		"lazyLoadingEffectiveness": "지연 로딩 효과성",
		"whetherSplittingTranslationsByRoute": "경로 또는 네임스페이스별로 번역을 나누는 것이 실제로 초기 로드를 줄이는지, 그리고 어떤 단점(워터폴 요청, FOUC, 캐시 복잡성)을 유발하는지 측정합니다.",
		"localeSwitchSpeed": "로캘 전환 속도",
		"howFastTheAppCan": "런타임에 앱이 한 언어에서 다른 언어로 얼마나 빨리 전환할 수 있는지 측정합니다. 여기에는 새 번역 가져오기, 컴포넌트 다시 렌더링 및 DOM 업데이트가 포함됩니다.",
		"howFastTheAppCanSwitchFromOne": "런타임에 앱이 한 언어에서 다른 언어로 얼마나 빨리 전환할 수 있는지 측정합니다. 여기에는 새 번역 가져오기, 컴포넌트 다시 렌더링 및 DOM 업데이트가 포함됩니다.",
		"whatWeMeasure": "측정 항목"
	},
	blogHeader: {
		"blog": "블로그",
		"insightsDeepDivesAnd": "i18n 벤치마킹 커뮤니티의 통찰력, 심층 분석 및 업데이트입니다.",
		"insightsTutorialsAndAnalysis": "i18n 커뮤니티의 통찰력, 튜토리얼 및 분석입니다."
	},
	blogList: {
		"comparingI18nLibrariesIn": "2026년 i18n 라이브러리 비교: 심층 분석",
		"comparingI18nLibrariesIn2026": "2026년 i18n 라이브러리 비교: 심층 분석",
		"march152026": "2026년 3월 15일",
		"weTested12DifferentInternationalization": "성능, 번들 크기 및 DX에 대해 12가지 서로 다른 국제화 라이브러리를 테스트했습니다. 놀라운 결과는 다음과 같습니다.",
		"howToReduceYourI18n": "i18n 번들을 60% 줄이는 방법",
		"march82026": "2026년 3월 8일",
		"practicalStrategiesForOptimizingTranslation": "지연 로딩, 코드 분할 및 컴파일 시간 최적화를 포함하여 번역 번들을 최적화하기 위한 실용적인 전략입니다.",
		"theStateOfInternationalizationIn": "React 국제화의 현주소",
		"february282026": "2026년 2월 28일",
		"anOverviewOfTheCurrent": "메시지 카탈로그에서 컴파일러 기반 솔루션에 이르기까지 접근 방식을 비교하는 현재 i18n 에코시스템의 개요입니다.",
		"anOverviewOfTheCurrentI18n": "트렌드, 새로운 패턴 및 커뮤니티 선호도를 다루는 React의 현재 i18n 에코시스템 개요입니다.",
		"migratingFromReactI18nextTo": "react-i18next에서 Lingui로 마이그레이션",
		"february152026": "2026년 2월 15일",
		"aStepByStepGuide": "50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하는 단계별 가이드입니다.",
		"aStepByStepGuideOnMigrating": "50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하는 단계별 가이드입니다.",
		"serverComponentsAndI18nWhat": "서버 컴포넌트와 i18n: 무엇이 변할까요?",
		"february12026": "2026년 2월 1일",
		"reactServerComponentsIntroduce": "React 서버 컴포넌트는 국제화에 대한 새로운 패턴을 도입합니다. 그 영향과 모범 사례를 살펴봅니다.",
		"benchmarkMethodologyHowWe": "벤치마크 방법론: 테스트 방법",
		"benchmarkMethodologyHowWeTest": "벤치마크 방법론: 테스트 방법",
		"january202026": "2026년 1월 20일",
		"aTransparentLookAtOur": "테스트 환경, 통계적 방법 및 재현성을 포함한 벤치마킹 방법론에 대한 투명한 고찰입니다.",
		"aTransparentLookAtOurBenchmarking": "테스트 환경, 통계적 방법 및 재현성을 포함한 벤치마킹 방법론에 대한 투명한 고찰입니다.",
		"readMore": "더 읽기 →",
		"benchmark": "벤치마크",
		"tutorial": "튜토리얼",
		"analysis": "분석",
		"meta": "메타",
		"reactServerComponentsIntroduceNew": "React 서버 구성 요소는 국제화를 위한 새로운 패턴을 도입합니다. 그 영향과 모범 사례를 살펴봅니다."
	},
	careersHeader: {
		"careers": "채용",
		"joinOurMissionToMake": "모든 곳에서 모든 사람을 위해 웹을 더 빠르고 접근 가능하게 만드는 미션에 동참하세요.",
		"joinOurMission": "국제화 에코시스템을 개선하기 위한 우리의 미션에 동참하세요. 우리는 영향력, 투명성 및 지속적인 학습을 소중히 여기는 원격 우선 팀입니다."
	},
	careersBenefits: {
		"whyJoinUs": "우리와 함께해야 하는 이유",
		"remoteFirst": "원격 우선",
		"workFromAnywhereFully": "어디서나 일하세요. 6개 시간대에 걸쳐 완전히 분산된 팀입니다.",
		"workFromAnywhere": "전 세계 어디에서나 일하세요",
		"openSource": "오픈 소스",
		"allOurWorkIs": "우리의 모든 작업은 오픈 소스입니다. 영향력을 행사하면서 공개 포트폴리오를 만드세요.",
		"impactful": "영향력 있는",
		"yourWorkDirectlyHelps": "당신의 작업은 개발자가 더 좋고 빠른 국제화된 애플리케이션을 구축하는 데 직접적인 도움이 됩니다.",
		"competitivePay": "경쟁력 있는 급여",
		"topOfMarketCompensation": "업계 최고 수준의 보상",
		"openSourceTime": "오픈 소스 시간",
		"percentTimeForOss": "업무 시간의 20%를 OSS 기여에 사용"
	},
	openPositions: {
		"openPositions": "채용 중인 포지션",
		"seniorPerformanceEngineer": "시니어 성능 엔지니어",
		"seniorFrontendEngineer": "시니어 프론트엔드 엔지니어",
		"fullTime": "풀타임",
		"remote": "원격",
		"leadBenchmarkDesignAnd": "벤치마크 설계 및 구현을 주도합니다. V8 내부, 브라우저 성능 API 및 통계 분석에 대한 깊은 지식이 필요합니다.",
		"technicalWriter": "테크니컬 라이터",
		"partTime": "파트타임",
		"createAndMaintainDocumentation": "i18n 성능 모범 사례에 대한 문서, 블로그 게시물 및 교육 콘텐츠를 작성하고 유지 관리합니다.",
		"frontendDeveloper": "프론트엔드 개발자",
		"buildAndMaintainThe": "벤치마크 대시보드, 비교 도구 및 대화형 시각화를 구축하고 유지 관리합니다.",
		"buildAndMaintainOur": "React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드와 개발자 도구를 구축하고 유지 관리합니다.",
		"devOpsEngineer": "DevOps 엔지니어",
		"designAndMaintainThe": "라이브러리 업데이트마다 벤치마크를 자동으로 실행하는 CI/CD 파이프라인을 설계하고 유지 관리합니다.",
		"applyNow": "지금 지원하기",
		"engineering": "엔지니어링",
		"backendEngineer": "백엔드 엔지니어",
		"designAndScaleOur": "매일 수천 건의 자동화된 실행을 처리하는 클라우드 벤치마킹 인프라를 설계하고 확장합니다.",
		"documentation": "문서화",
		"createComprehensiveGuidesApi": "벤치마킹 플랫폼을 위한 종합 가이드, API 참조 및 튜토리얼을 작성합니다.",
		"devrelEngineer": "개발자 관계(DevRel) 엔지니어",
		"sfRemote": "샌프란시스코 / 원격",
		"community": "커뮤니티",
		"engageWithTheI18n": "강연, 워크숍, 블로그 게시물 및 오픈 소스 기여를 통해 i18n 커뮤니티와 소통합니다.",
		"qaEngineer": "QA 엔지니어",
		"ensureTheAccuracyAnd": "엄격한 테스트와 검증을 통해 벤치마크 결과의 정확성과 신뢰성을 보장합니다."
	},
	contactHeader: {
		"contactUs": "문의하기",
		"haveQuestionsOrWantTo": "질문이 있거나 기여하고 싶으신가요? 여러분의 의견을 기다립니다.",
		"getInTouch": "연락하기",
		"haveIdeasFoundABug": "아이디어가 있거나, 버그를 발견했거나, 벤치마크를 기여하고 싶으신가요? 저희에게 연락해 주세요."
	},
	contactForm: {
		"name": "이름",
		"yourName": "귀하의 성함",
		"email": "이메일",
		"emailPlaceholder": "you@example.com",
		"subject": "제목",
		"topic": "주제",
		"bugReport": "버그 보고",
		"newBenchmarkIdea": "새로운 벤치마크 아이디어",
		"methodologyQuestion": "방법론 관련 질문",
		"contribution": "기여",
		"other": "기타",
		"message": "메시지",
		"messagePlaceholder": "질문이나 아이디어를 설명해 주세요...",
		"sendMessage": "메시지 보내기",
		"wellGetBackTo": "48시간 이내에 답변해 드리겠습니다."
	},
	faqHeader: {
		"frequentlyAskedQuestions": "자주 묻는 질문",
		"everythingYouNeedTo": "i18n Benchmark 프로젝트에 대해 알아야 할 모든 것.",
		"everythingYouNeedToKnow": "i18n Benchmark에 대해 알아야 할 모든 것."
	},
	faqList: {
		"howAreTheBenchmarks": "벤치마크는 어떻게 실행되나요?",
		"allBenchmarksAreRun": "모든 벤치마크는 시뮬레이션된 4G 네트워크 조건에서 일관된 하드웨어 설정(M2 MacBook Pro)의 Playwright를 사용하여 실행됩니다. 각 테스트는 50번의 반복 실행을 거치며 중앙값, P95 및 P99 값을 보고합니다.",
		"whatLibrariesAreCurrently": "현재 어떤 라이브러리가 테스트되고 있나요?",
		"weCurrentlyBenchmarkReactI18next": "현재 react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl 및 Paraglide를 벤치마킹하고 있습니다. 커뮤니티 요청에 따라 더 추가할 계획입니다.",
		"canISubmitMyOwn": "내 벤치마크를 제출할 수 있나요?",
		"canISubmitMyOwnBenchmarks": "내 벤치마크를 제출할 수 있나요?",
		"absolutelyWeWelcomeCommunity": "물론입니다! 커뮤니티 기여를 환영합니다. 저장소를 포크하고 템플릿에 따라 라이브러리 통합을 추가한 후 풀 리퀘스트를 제출하세요. 자세한 내용은 기여 가이드를 참조하세요.",
		"howOftenAreResults": "결과는 얼마나 자주 업데이트되나요?",
		"benchmarksRunAutomaticallyVia": "벤치마크는 종속성 업데이트마다 CI를 통해 자동으로 실행되며, 메인 브랜치에서 매주 실행됩니다. 결과는 24시간 이내에 대시보드에 게시됩니다.",
		"areTheResultsStatistically": "결과가 통계적으로 유의미한가요?",
		"yesWeUseThe": "예. 분포를 비교하기 위해 유의 수준 0.05인 Mann-Whitney U 테스트를 사용합니다. 또한 신뢰 구간과 효과 크기를 보고합니다.",
		"whatIsI18nBenchmark": "i18n Benchmark란 무엇인가요?",
		"i18nBenchmarkIsAnOpenSource": "i18n Benchmark는 JavaScript 및 React 애플리케이션용 국제화 라이브러리의 성능, 번들 크기 및 개발자 경험을 측정하고 비교하는 오픈 소스 벤치마킹 도구입니다.",
		"howAreBenchmarksConducted": "벤치마크는 어떻게 수행되나요?",
		"weRunStandardizedTestsInIsolated": "일관된 하드웨어를 사용하여 격리된 환경에서 표준화된 테스트를 실행합니다. 각 벤치마크는 통계적 유의성을 확보하기 위해 여러 번 반복됩니다. 모든 테스트 구성은 GitHub 저장소에 공개되어 있습니다.",
		"whichLibrariesAreCurrentlySupported": "현재 어떤 라이브러리가 지원되나요?",
		"weSupportReactI18nextReactIntl": "react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 및 Tolgee를 지원합니다.",
		"yesCommunityBenchmarkSubmissionsAre": "예! 커뮤니티의 벤치마크 제출을 환영합니다. 저희 저장소를 포크하고 기여 가이드를 따라 벤치마크를 추가한 후 풀 리퀘스트를 제출하세요. 저희 팀이 적격한 제출물을 검토하고 머지할 것입니다.",
		"howOftenAreBenchmarksUpdated": "벤치마크는 얼마나 자주 업데이트되나요?",
		"weReRunAllBenchmarksWeekly": "매주 각 라이브러리의 최신 안정 버전을 대상으로 모든 벤치마크를 다시 실행합니다. 메이저 버전 릴리스는 즉각적인 재벤치마크 주기를 트리거합니다.",
		"isTheDataReliable": "데이터가 신뢰할 수 있나요?",
		"weFollowRigorousStatisticalMethodologyIncluding": "웜업 실행, 이상치 감지 및 신뢰 구간을 포함한 엄격한 통계 방법론을 따릅니다. 완전한 투명성을 위해 모든 원시 데이터가 분석 결과와 함께 게시됩니다.",
		"doYouOfferConsultingServices": "컨설팅 서비스를 제공하나요?",
		"yesOurEnterprisePlanIncludesConsulting": "예, 엔터프라이즈 플랜에는 i18n 솔루션을 평가하는 팀을 위한 컨설팅 시간이 포함되어 있습니다. 특정 사용 사례, 규모 및 제약 조건에 기반한 맞춤형 권장 사항을 제공할 수 있습니다.",
		"howCanIContribute": "어떻게 기여할 수 있나요?",
		"thereAreManyWaysToContribute": "벤치마크 제출, 문서 개선, 버그 보고, 새로운 지표 제안 또는 프로젝트 후원 등 다양한 기여 방법이 있습니다. 자세한 내용은 GitHub 저장소를 방문하세요."
	},
	pricingHeader: {
		"pricing": "요금",
		"transparentPricingForEvery": "i18n 여정의 모든 단계에 대한 투명한 요금제입니다."
	},
	pricingTiers: {
		"freeTier": "무료 플랜",
		"free": "무료",
		"publicBenchmarkDashboard": "공개 벤치마크 대시보드",
		"basicLibraryComparisons": "기본 라이브러리 비교",
		"communityForumAccess": "커뮤니티 포럼 액세스",
		"monthlyResultDigest": "월간 결과 요약",
		"getStarted": "시작하기",
		"proTier": "프로 플랜",
		"perMonth": "/월",
		"allFreeFeatures": "무료 플랜의 모든 기능 포함",
		"customBenchmarkConfigurations": "맞춤형 벤치마크 구성",
		"privateResultsDashboard": "비공개 결과 대시보드",
		"apiAccess1000Requests": "API 액세스(일일 1,000회 요청)",
		"slackIntegration": "Slack 연동",
		"subscribeToPro": "프로 플랜 구독",
		"enterpriseTier": "엔터프라이즈 플랜",
		"custom": "맞춤형",
		"allProFeatures": "프로 플랜의 모든 기능 포함",
		"dedicatedBenchmarkInfrastructure": "전담 벤치마크 인프라",
		"customLibraryIntegrations": "맞춤형 라이브러리 통합",
		"slaGuarantees": "SLA 보장",
		"prioritySupport": "우선 지원",
		"contactSales": "영업 문의"
	},
	productsHeader: {
		"products": "제품",
		"toolsAndServicesTo": "국제화 전략을 최적화하는 데 도움이 되는 도구와 서비스입니다."
	},
	productsGrid: {
		"benchmarkDashboard": "벤치마크 대시보드",
		"interactiveChartsAndTables": "번들 크기, 렌더링 시간 및 하이드레이션 비용에 대해 i18n 라이브러리를 비교하는 대화형 차트와 표입니다.",
		"bundleAnalyzer": "번들 분석기",
		"uploadYourBuildOutput": "빌드 결과물을 업로드하고 번들 중 i18n 오버헤드가 얼마나 되는지 상세한 분석을 받으세요.",
		"migrationAssistant": "마이그레이션 도우미",
		"automatedCodemodsAndGuides": "최소한의 중단으로 i18n 라이브러리 간의 마이그레이션을 돕는 자동화된 코드모드 및 가이드입니다.",
		"performanceMonitor": "성능 모니터",
		"continuousPerformanceTrackingFor": "i18n 구현을 위한 지속적인 성능 추적입니다. 번역 로딩 성능이 저하되면 알림을 받습니다.",
		"learnMore": "더 알아보기"
	},
	settingsHeader: {
		"settings": "설정",
		"manageYourAccountPreferences": "계정 기본 설정 및 구성을 관리합니다.",
		"manageYourAccount": "계정 기본 설정 및 구성을 관리합니다."
	},
	profileSection: {
		"profile": "프로필",
		"displayName": "표시 이름",
		"email": "이메일"
	},
	preferencesSection: {
		"preferences": "기본 설정",
		"emailNotifications": "이메일 알림",
		"receiveWeeklyBenchmark": "주간 벤치마크 보고서 수신",
		"receiveWeeklyBenchmarkReports": "주간 벤치마크 보고서 수신",
		"toggleNotifications": "알림 전환",
		"darkMode": "다크 모드",
		"useDarkColorScheme": "어두운 색상 체계 사용",
		"toggleDarkMode": "다크 모드 전환",
		"defaultLanguage": "기본 언어",
		"englishEn": "영어 (en)",
		"frenchFr": "프랑스어 (fr)",
		"germanDe": "독일어 (de)",
		"spanishEs": "스페인어 (es)",
		"japaneseJa": "일본어 (ja)",
		"chineseSimplifiedZhCn": "중국어 간체 (zh-CN)",
		"arabicAr": "아랍어 (ar)"
	},
	apiAccessSection: {
		"apiAccess": "API 액세스",
		"apiKey": "API 키",
		"useThisKeyTo": "프로그래밍 방식으로 벤치마킹 API에 액세스하려면 이 키를 사용하세요.",
		"copy": "복사"
	},
	settingsFooter: {
		"cancel": "취소",
		"saveChanges": "변경 사항 저장"
	},
	teamHeader: {
		"ourTeam": "우리 팀",
		"meetThePeopleBehindI18n": "i18n Benchmark를 만든 사람들을 소개합니다. 훌륭한 개발자 도구에 대한 열정으로 뭉친 다양한 팀입니다."
	},
	teamGrid: {
		"sarahChen": "Sarah Chen",
		"founderLeadEngineer": "설립자 겸 수석 엔지니어",
		"formerGoogleEngineerWith": "규모 있는 국제화 시스템을 구축한 10년 경력의 전직 Google 엔지니어입니다.",
		"formerGoogleEngineerWith10": "규모 있는 국제화 시스템을 구축한 10년 경력의 전직 Google 엔지니어입니다.",
		"marcusWeber": "Marcus Weber",
		"performanceEngineer": "성능 엔지니어",
		"specializesInJavascriptPerformance": "JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전에는 Vercel에서 근무했습니다.",
		"specializesInJavascriptPerformanceOptimization": "JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전에는 Vercel에서 근무했습니다.",
		"aishaPatel": "Aisha Patel",
		"developerAdvocate": "개발자 에반젤리스트",
		"passionateAboutDeveloperExperience": "개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext 연사.",
		"passionateAboutDeveloperExperienceAnd": "개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext 연사.",
		"tomasRodriguez": "Tomás Rodríguez",
		"fullStackDeveloper": "풀스택 개발자",
		"maintainsTheBenchmarkingInfrastructure": "벤치마킹 인프라와 CI/CD 파이프라인을 유지 관리합니다. Lingui의 오픈 소스 기여자.",
		"maintainsTheBenchmarkingInfrastructureAnd": "벤치마킹 인프라와 CI/CD 파이프라인을 유지 관리합니다. Lingui의 오픈 소스 기여자.",
		"yukiTanaka": "Yuki Tanaka",
		"dataAnalyst": "데이터 분석가",
		"ensuresStatisticalRigorIn": "모든 벤치마크 결과의 통계적 엄격함을 보장합니다. MIT 응용 통계학 박사.",
		"ensuresStatisticalRigorInAll": "모든 벤치마크 결과의 통계적 엄격함을 보장합니다. MIT 응용 통계학 박사.",
		"elenaKowalski": "Elena Kowalski",
		"communityManager": "커뮤니티 매니저",
		"managesCommunityContributions": "커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 배경 보유.",
		"managesCommunityContributionsPartnershipsAnd": "커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 배경 보유."
	},
	mockBanner: "⚠️ 이 페이지는 벤치마킹 목적의 모의 데이터만 포함하고 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다."
};
var pt_default = {
	route: {
		"oopsPageNotFound": "Ops! Página não encontrada",
		"returnToHome": "Voltar para o Início",
		"couldNotMeasureHydrationDuration": "Não foi possível medir a duração da hidratação:"
	},
	header: {
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
		"settings": "Configurações",
		"goToGithub": "Ir para o GitHub"
	},
	footer: {
		"resources": "Recursos",
		"contact": "Contato",
		"github": "GitHub",
		"methodology": "Metodologia",
		"contributing": "Contribuindo",
		"builtWith": "i18n Benchmark — Projeto de código aberto. Construído com React, Vite & TanStack Router.",
		"anOpenSourceTestApplication": "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do app."
	},
	common: {
		"readMore": "Ler Mais",
		"copy": "Copiar",
		"cancel": "Cancelar",
		"saveChanges": "Salvar Alterações"
	},
	themeToggle: {
		"themeModeAutoSystemClick": "Modo de tema: auto (sistema). Clique para alternar para o modo claro.",
		"themeModeLightClick": "Modo de tema: claro. Clique para alternar para o modo escuro.",
		"themeModeDarkClick": "Modo de tema: escuro. Clique para alternar para o modo auto (sistema).",
		"themeAuto": "Tema: Auto",
		"themeDark": "Tema: Escuro",
		"themeLight": "Tema: Claro"
	},
	hero: {
		"aTestApplicationDesignedTo": "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, desempenho de carregamento e reatividade de renderização.",
		"viewResults": "Ver Resultados"
	},
	whyItMatters: {
		"whyTheseMetricsMatter": "Por que essas métricas importam",
		"bundleSize": "Tamanho do Bundle",
		"theBundleIsTheData": "O bundle são os dados enviados para cada usuário em todo o globo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas, comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código runtime, além dos próprios arquivos de tradução.",
		"renderingHydration": "Renderização e Hidratação",
		"connectingALargeJson": "Conectar um dicionário JSON grande a cada componente cria uma dependência oculta: qualquer mudança no contexto de tradução pode disparar re-renderizações em toda a árvore. Durante a hidratação SSR, o parsing e a anexação de objetos de tradução massivos adicionam latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).",
		"dynamicLoading": "Carregamento Dinâmico",
		"loadingAllTranslationsUpfront": "Carregar todas as traduções antecipadamente sobrecarrega o payload inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento lazy introduz seus próprios trade-offs: requisições em cascata (waterfall), flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial."
	},
	understandingImpact: {
		"understandingTheImpact": "Entendendo o Impacto",
		"whyASingleLargeJson": "Por que um único JSON grande pode prejudicar o desempenho",
		"manyI18nLibrariesStore": "Muitas bibliotecas i18n armazenam traduções em um único objeto JSON fornecido via contexto do React. Quando esse objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência ao dicionário inteiro. Isso significa:",
		"manyI18nLibrariesStoreTranslations": "Muitas bibliotecas i18n armazenam traduções em um único objeto JSON fornecido via contexto do React. Quando esse objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência ao dicionário inteiro. Isso significa:",
		"theJsonMustBeParsed": "O JSON deve ser analisado em cada carregamento de página — bloqueando a thread principal.",
		"contextBasedArchitecturesCan": "Arquiteturas baseadas em contexto podem causar re-renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que suas chaves específicas não tenham mudado.",
		"contextBasedArchitecturesCanCause": "Arquiteturas baseadas em contexto podem causar re-renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que suas chaves específicas não tenham mudado.",
		"duringServerSideRenderingThe": "Durante a renderização no lado do servidor, o dicionário completo é serializado no payload HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.",
		"theTradeOffsOfDynamic": "Os trade-offs do carregamento dinâmico",
		"splittingTranslationsIntoPerRoute": "Dividir as traduções em chunks por rota ou por namespace pode reduzir drasticamente o payload inicial. Mas introduz novos desafios:",
		"waterfallRequests": "Requisições em cascata (waterfall):",
		"theAppMustFirstLoad": "O app deve primeiro carregar, determinar a localidade e depois buscar o chunk correto — adicionando round-trips de rede.",
		"flashOfUntranslatedContent": "Flash de conteúdo não traduzido (FOUC):",
		"flashOfUntranslatedContentFouc": "Flash de conteúdo não traduca (FOUC):",
		"usersMayBrieflySeeTranslation": "Os usuários podem ver brevemente chaves de tradução ou um idioma de fallback antes do chunk chegar.",
		"cacheInvalidation": "Invalidação de cache:",
		"updatingTranslationsRequiresCache": "Atualizar as traduções requer estratégias de cache-busting para garantir que os usuários recebam conteúdo atualizado sem baixar novamente chunks inalterados.",
		"whatThisBenchmarkMeasures": "O que este benchmark mede",
		"thisTestAppProvidesA": "Este app de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas i18n em três eixos: o peso que adicionam ao seu bundle JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia de suas estratégias de code-splitting e lazy-loading. Cada biblioteca é integrada no mesmo app para que os resultados sejam diretamente comparáveis."
	},
	resultsTable: {
		"sampleResults": "Resultados de Amostra",
		"bundleSize": "Tamanho do Bundle",
		"lookupTime": "Tempo de Busca",
		"lazyLoading": "Carregamento Lazy",
		"library": "Biblioteca"
	},
	aboutHeader: {
		"methodology": "Metodologia",
		"weDesignedThisBenchmarkTo": "Projetamos este benchmark para fornecer comparações justas, reproduzíveis e significativas de bibliotecas i18n. Aqui está nossa abordagem.",
		"aboutThisBenchmark": "Sobre Este Benchmark",
		"thisIsAnOpenSource": "Este é um aplicativo de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer um aplicativo React multi-página realista onde diferentes bibliotecas i18n podem ser integradas e medidas sob condições idênticas."
	},
	aboutGrid: {
		"testEnvironment": "Ambiente de Teste",
		"allBenchmarksRunOn": "Todos os benchmarks rodam no mesmo hardware (M2 MacBook Pro, 16 GB RAM), mesmo navegador (Chromium 120 via Playwright) e mesmas condições de rede (4G simulado). Cada teste é repetido 50 vezes e relatamos a mediana com percentis P95/P99.",
		"applicationDesign": "Design da Aplicação",
		"theBenchmarkAppHas10": "O app de benchmark tem 10 páginas com conteúdo realista — navegação, formulários, listas dinâmicas e texto estático. Cada página usa 15–30 chaves de tradução para representar padrões de uso do mundo real em vez de micro-benchmarks sintéticos.",
		"measurementMethodology": "Metodologia de Medição",
		"weUseBrowserNativeApis": "Usamos APIs nativas do navegador (Performance Timeline, Resource Timing, Layout Instability) combinadas com dados do React Profiler. Os tamanhos dos bundles são medidos pós-gzip usando source-map-explorer para precisão.",
		"fairComparison": "Comparação Justa",
		"eachI18nLibraryIsIntegrated": "Cada biblioteca i18n é integrada seguindo sua documentação oficial e melhores práticas. Consultamos os mantenedores quando possível para garantir a configuração ideal. O mesmo app React, mesma config do Vite, mesmo deploy.",
		"whyThisExists": "Por que Isso Existe",
		"choosingAnI18nLibrary": "Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências de longo prazo. A maioria das comparações foca na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao bundle? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento lazy realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.",
		"methodology": "Metodologia",
		"theSame10PageApp": "O mesmo app de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), realizamos auditorias do Lighthouse para métricas de carregamento e usamos o React Profiler para capturar tempos de renderização durante trocas de localidade. Todos os testes rodam em CI em hardware consistente para garantir resultados reproduzíveis."
	},
	whatWeMeasure: {
		"bundleSizeImpact": "Impacto no tamanho do bundle",
		"theAdditionalJavascriptBytes": "Os bytes extras de JavaScript enviados aos usuários quando a biblioteca i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.",
		"theAdditionalJavascriptBytesSent": "Os bytes JavaScript adicionais enviados ao cliente especificamente devido ao runtime da biblioteca i18n, mais os arquivos de tradução para a localidade atual.",
		"renderingOverhead": "Sobrecarga de renderização",
		"howMuchExtraTimeTheLibraryAdds": "Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções via um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes.",
		"howMuchExtraTimeThe": "Quanto tempo extra a camada i18n adiciona a cada renderização de componente — medido usando o actualDuration do React Profiler.",
		"hydrationCost": "Custo de hidratação",
		"duringSsrTranslationDataIsSerialized": "Durante o SSR, os dados de tradução são serializados em HTML. Dicionários grandes aumentam o payload HTML e retardam a hidratação — o momento em que a página se torna interativa.",
		"duringSsrTranslationDataIs": "Durante o SSR, os dados de tradução são serializados no HTML. Dicionários grandes aumentam o payload HTML e retardam a hidratação — o momento em que a página se torna interativa.",
		"lazyLoadingEffectiveness": "Eficácia do carregamento lazy",
		"whetherSplittingTranslationsByRoute": "Se dividir as traduções por rota ou namespace realmente reduz a carga inicial e quais trade-offs isso introduz (requisições waterfall, FOUC, complexidade de cache).",
		"localeSwitchSpeed": "Velocidade de troca de localidade",
		"howFastTheAppCan": "Quão rápido o app pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, re-renderização de componentes e atualização do DOM.",
		"howFastTheAppCanSwitchFromOne": "Quão rápido o app pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, re-renderização de componentes e atualização do DOM.",
		"whatWeMeasure": "O Que Medimos"
	},
	blogHeader: {
		"blog": "Blog",
		"insightsDeepDivesAnd": "Insights, mergulhos profundos e atualizações da comunidade de benchmarking i18n.",
		"insightsTutorialsAndAnalysis": "Insights, tutoriais e análises da comunidade i18n."
	},
	blogList: {
		"comparingI18nLibrariesIn": "Comparando Bibliotecas i18n em 2026: Um Mergulho Profundo",
		"comparingI18nLibrariesIn2026": "Comparando Bibliotecas i18n em 2026: Um Mergulho Profundo",
		"march152026": "15 de Março de 2026",
		"weTested12DifferentInternationalization": "Testamos 12 bibliotecas de internacionalização diferentes em desempenho, tamanho do bundle e DX. Aqui estão os resultados surpreendentes.",
		"howToReduceYourI18n": "Como Reduzir Seu Bundle i18n em 60%",
		"march82026": "8 de Março de 2026",
		"practicalStrategiesForOptimizingTranslation": "Estratégias práticas para otimizar bundles de tradução, incluindo carregamento lazy, code splitting e otimizações em tempo de compilação.",
		"theStateOfInternationalizationIn": "O Estado da Internacionalização no React",
		"february282026": "28 de Fevereiro de 2026",
		"anOverviewOfTheCurrent": "Uma visão geral do ecossistema i18n atual, comparando abordagens desde catálogos de mensagens até soluções baseadas em compilador.",
		"anOverviewOfTheCurrentI18n": "Uma visão geral do ecossistema i18n atual no React, cobrindo tendências, padrões emergentes e preferências da comunidade.",
		"migratingFromReactI18nextTo": "Migrando do react-i18next para o Lingui",
		"february152026": "15 de Fevereiro de 2026",
		"aStepByStepGuide": "Um guia passo a passo sobre a migração de um app de produção com 50.000 chaves de tradução do react-i18next para o Lingui.",
		"aStepByStepGuideOnMigrating": "Um guia passo a passo sobre a migração de um app de produção com 50.000 chaves de tradução do react-i18next para o Lingui.",
		"serverComponentsAndI18nWhat": "Server Components e i18n: O Que Muda?",
		"february12026": "1 de Fevereiro de 2026",
		"reactServerComponentsIntroduce": "React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e melhores práticas.",
		"benchmarkMethodologyHowWe": "Metodologia do Benchmark: Como Testamos",
		"benchmarkMethodologyHowWeTest": "Metodologia do Benchmark: Como Testamos",
		"january202026": "20 de Janeiro de 2026",
		"aTransparentLookAtOur": "Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.",
		"aTransparentLookAtOurBenchmarking": "Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.",
		"readMore": "Ler Mais →",
		"benchmark": "Benchmark",
		"tutorial": "Tutorial",
		"analysis": "Análise",
		"meta": "Meta",
		"reactServerComponentsIntroduceNew": "Os React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas."
	},
	careersHeader: {
		"careers": "Carreiras",
		"joinOurMissionToMake": "Junte-se à nossa missão de tornar a web mais rápida e acessível para todos, em todos os lugares.",
		"joinOurMission": "Junte-se à nossa missão de melhorar o ecossistema de internacionalização. Somos uma equipe remote-first que valoriza impacto, transparência e aprendizado contínuo."
	},
	careersBenefits: {
		"whyJoinUs": "Por que se juntar a nós?",
		"remoteFirst": "Remote-First",
		"workFromAnywhereFully": "Trabalhe de qualquer lugar. Equipe totalmente distribuída em 6 fusos horários.",
		"workFromAnywhere": "Trabalhe de qualquer lugar do mundo",
		"openSource": "Open Source",
		"allOurWorkIs": "Todo o nosso trabalho é open source. Construa seu portfólio público enquanto causa impacto.",
		"impactful": "Impactante",
		"yourWorkDirectlyHelps": "Seu trabalho ajuda diretamente os desenvolvedores a construir aplicações internacionalizadas melhores e mais rápidas.",
		"competitivePay": "Pagamento competitivo",
		"topOfMarketCompensation": "Remuneração acima da média do mercado",
		"openSourceTime": "Tempo para open source",
		"percentTimeForOss": "20% do tempo para contribuições OSS"
	},
	openPositions: {
		"openPositions": "Posições Abertas",
		"seniorPerformanceEngineer": "Engenheiro de Performance Sênior",
		"seniorFrontendEngineer": "Engenheiro Frontend Sênior",
		"fullTime": "Tempo Integral",
		"remote": "Remoto",
		"leadBenchmarkDesignAnd": "Liderar o design e implementação de benchmarks. Conhecimento profundo dos internos do V8, APIs de performance do navegador e análise estatística necessária.",
		"technicalWriter": "Escritor Técnico",
		"partTime": "Meio Período",
		"createAndMaintainDocumentation": "Criar e manter documentação, posts de blog e conteúdo educacional sobre as melhores práticas de desempenho i18n.",
		"frontendDeveloper": "Desenvolvedor Frontend",
		"buildAndMaintainThe": "Construir e manter o dashboard de benchmark, ferramentas de comparação e visualizações interativas.",
		"buildAndMaintainOur": "Construir e manter nosso dashboard de benchmarking e ferramentas de desenvolvedor usando React, TypeScript e Vite.",
		"devOpsEngineer": "Engenheiro DevOps",
		"designAndMaintainThe": "Projetar e manter o pipeline de CI/CD que executa benchmarks automaticamente em cada atualização de biblioteca.",
		"applyNow": "Candidatar-se Agora",
		"engineering": "Engenharia",
		"backendEngineer": "Engenheiro Backend",
		"designAndScaleOur": "Projetar e escalar nossa infraestrutura de benchmarking na nuvem, lidando com milhares de execuções automatizadas diariamente.",
		"documentation": "Documentação",
		"createComprehensiveGuidesApi": "Criar guias abrangentes, referências de API e tutoriais para nossa plataforma de benchmarking.",
		"devrelEngineer": "Engenheiro DevRel",
		"sfRemote": "San Francisco / Remoto",
		"community": "Comunidade",
		"engageWithTheI18n": "Engajar-se com a comunidade i18n por meio de palestras, workshops, blog posts e contribuições open source.",
		"qaEngineer": "Engenheiro de QA",
		"ensureTheAccuracyAnd": "Garantir a precisão e confiabilidade dos resultados do benchmark por meio de testes rigorosos e validação."
	},
	contactHeader: {
		"contactUs": "Contate-nos",
		"haveQuestionsOrWantTo": "Tem perguntas ou quer contribuir? Adoraríamos ouvir de você.",
		"getInTouch": "Entre em Contato",
		"haveIdeasFoundABug": "Tem ideias, encontrou um bug ou quer contribuir com um benchmark? Entre em contato conosco."
	},
	contactForm: {
		"name": "Nome",
		"yourName": "Seu nome",
		"email": "E-mail",
		"emailPlaceholder": "voce@exemplo.com",
		"subject": "Assunto",
		"topic": "Tópico",
		"bugReport": "Relatório de Bug",
		"newBenchmarkIdea": "Nova Ideia de Benchmark",
		"methodologyQuestion": "Pergunta sobre Metodologia",
		"contribution": "Contribuição",
		"other": "Outro",
		"message": "Mensagem",
		"messagePlaceholder": "Descreva sua pergunta ou ideia...",
		"sendMessage": "Enviar Mensagem",
		"wellGetBackTo": "Retornaremos em até 48 horas."
	},
	faqHeader: {
		"frequentlyAskedQuestions": "Perguntas Frequentes",
		"everythingYouNeedTo": "Tudo o que você precisa saber sobre o projeto i18n Benchmark.",
		"everythingYouNeedToKnow": "Tudo o que você precisa saber sobre o i18n Benchmark."
	},
	faqList: {
		"howAreTheBenchmarks": "Como os benchmarks são executados?",
		"allBenchmarksAreRun": "Todos os benchmarks são executados usando Playwright em uma configuração de hardware consistente (M2 MacBook Pro) com condições de rede 4G simuladas. Cada teste executa 50 iterações e relatamos os valores mediano, P95 e P99.",
		"whatLibrariesAreCurrently": "Quais bibliotecas são testadas atualmente?",
		"weCurrentlyBenchmarkReactI18next": "Atualmente testamos react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl e Paraglide. Planejamos adicionar mais com base nos pedidos da comunidade.",
		"canISubmitMyOwn": "Posso enviar meus próprios benchmarks?",
		"canISubmitMyOwnBenchmarks": "Posso enviar meus próprios benchmarks?",
		"absolutelyWeWelcomeCommunity": "Com certeza! Aceitamos contribuições da comunidade. Faça um fork do repositório, adicione a integração da sua biblioteca seguindo nosso template e envie um pull request. Veja o guia de contribuição para mais detalhes.",
		"howOftenAreResults": "Com que frequência os resultados são atualizados?",
		"benchmarksRunAutomaticallyVia": "Benchmarks rodam automaticamente via CI em cada atualização de dependência e semanalmente no branch main. Os resultados são publicados no dashboard em até 24 horas.",
		"areTheResultsStatistically": "Os resultados são estatisticamente significativos?",
		"yesWeUseThe": "Sim. Usamos o teste U de Mann-Whitney com um nível de significância de 0,05 para comparar distribuições. Também relatamos intervalos de confiança e tamanhos de efeito.",
		"whatIsI18nBenchmark": "O que é o i18n Benchmark?",
		"i18nBenchmarkIsAnOpenSource": "O i18n Benchmark é uma suíte de benchmarking de código aberto que mede e compara o desempenho, o tamanho do bundle e a experiência do desenvolvedor das bibliotecas de internacionalização para aplicações JavaScript e React.",
		"howAreBenchmarksConducted": "Como os benchmarks são realizados?",
		"weRunStandardizedTestsInIsolated": "Executamos testes padronizados em ambientes isolados usando hardware consistente. Cada benchmark é repetido várias vezes para garantir significância estatística. Todas as configurações de teste estão disponíveis publicamente em nosso repositório GitHub.",
		"whichLibrariesAreCurrentlySupported": "Quais bibliotecas são suportadas atualmente?",
		"weSupportReactI18nextReactIntl": "Suportamos react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react e Tolgee.",
		"yesCommunityBenchmarkSubmissionsAre": "Sim! Submissões de benchmarks da comunidade são bem-vindas. Faça um fork do nosso repositório, adicione seu benchmark seguindo nosso guia de contribuição e envie um pull request. Nossa equipe revisará e mesclará as submissões qualificadas.",
		"howOftenAreBenchmarksUpdated": "Com que frequência os benchmarks são atualizados?",
		"weReRunAllBenchmarksWeekly": "Executamos novamente todos os benchmarks semanalmente com as versões estáveis mais recentes de cada biblioteca. Lançamentos de versões maiores disparam um ciclo de benchmark imediato.",
		"isTheDataReliable": "Os dados são confiáveis?",
		"weFollowRigorousStatisticalMethodologyIncluding": "Seguimos uma metodologia estatística rigorosa, incluindo execuções de warm-up, detecção de outliers e intervalos de confiança. Todos os dados brutos são publicados junto com nossa análise para total transparência.",
		"doYouOfferConsultingServices": "Vocês oferecem serviços de consultoria?",
		"yesOurEnterprisePlanIncludesConsulting": "Sim, nosso plano Enterprise inclui horas de consultoria para equipes que avaliam soluções i18n. Podemos fornecer recomendações personalizadas com base em seu caso de uso específico, escala e restrições.",
		"howCanIContribute": "Como posso contribuir?",
		"thereAreManyWaysToContribute": "Existem muitas formas de contribuir: enviar benchmarks, melhorar a documentação, relatar bugs, sugerir novas métricas ou patrocinar o projeto. Visite nosso repositório GitHub para mais detalhes."
	},
	pricingHeader: {
		"pricing": "Preços",
		"transparentPricingForEvery": "Preços transparentes para cada etapa da sua jornada i18n."
	},
	pricingTiers: {
		"freeTier": "Plano Gratuito",
		"free": "Grátis",
		"publicBenchmarkDashboard": "Dashboard de benchmark público",
		"basicLibraryComparisons": "Comparações básicas de bibliotecas",
		"communityForumAccess": "Acesso ao fórum da comunidade",
		"monthlyResultDigest": "Resumo mensal de resultados",
		"getStarted": "Começar",
		"proTier": "Plano Pro",
		"perMonth": "/mês",
		"allFreeFeatures": "Todos os recursos do plano Gratuito",
		"customBenchmarkConfigurations": "Configurações de benchmark personalizadas",
		"privateResultsDashboard": "Dashboard de resultados privados",
		"apiAccess1000Requests": "Acesso via API (1.000 requisições/dia)",
		"slackIntegration": "Integração com Slack",
		"subscribeToPro": "Assinar Pro",
		"enterpriseTier": "Plano Enterprise",
		"custom": "Personalizado",
		"allProFeatures": "Todos os recursos do plano Pro",
		"dedicatedBenchmarkInfrastructure": "Infraestrutura de benchmark dedicada",
		"customLibraryIntegrations": "Integrações de bibliotecas personalizadas",
		"slaGuarantees": "Garantias de SLA",
		"prioritySupport": "Suporte prioritário",
		"contactSales": "Contatar Vendas"
	},
	productsHeader: {
		"products": "Produtos",
		"toolsAndServicesTo": "Ferramentas e serviços para ajudar você a otimizar sua estratégia de internacionalização."
	},
	productsGrid: {
		"benchmarkDashboard": "Dashboard de Benchmark",
		"interactiveChartsAndTables": "Gráficos e tabelles interativos comparando bibliotecas i18n em termos de tamanho de bundle, tempo de renderização e custo de hidratação.",
		"bundleAnalyzer": "Analisador de Bundle",
		"uploadYourBuildOutput": "Faça o upload do seu build output e receba uma análise detalhada de quanto do seu bundle é overhead de i18n.",
		"migrationAssistant": "Assistente de Migração",
		"automatedCodemodsAndGuides": "Codemods e guias automatizados para migrar entre bibliotecas i18n com o mínimo de interrupção.",
		"performanceMonitor": "Monitor de Performance",
		"continuousPerformanceTrackingFor": "Acompanhamento contínuo de performance para sua implementação i18n. Receba alertas quando o carregamento das traduções degradar.",
		"learnMore": "Saiba Mais"
	},
	settingsHeader: {
		"settings": "Configurações",
		"manageYourAccountPreferences": "Gerencie as preferências e configurações da sua conta.",
		"manageYourAccount": "Gerencie as preferências e configurações da sua conta."
	},
	profileSection: {
		"profile": "Perfil",
		"displayName": "Nome de Exibição",
		"email": "E-mail"
	},
	preferencesSection: {
		"preferences": "Preferências",
		"emailNotifications": "Notificações por E-mail",
		"receiveWeeklyBenchmark": "Receber relatórios semanais de benchmark",
		"receiveWeeklyBenchmarkReports": "Receber relatórios semanais de benchmark",
		"toggleNotifications": "Alternar notificações",
		"darkMode": "Modo Escuro",
		"useDarkColorScheme": "Usar esquema de cores escuras",
		"toggleDarkMode": "Alternar modo escuro",
		"defaultLanguage": "Idioma Padrão",
		"englishEn": "Inglês (en)",
		"frenchFr": "Francês (fr)",
		"germanDe": "Alemão (de)",
		"spanishEs": "Espanhol (es)",
		"japaneseJa": "Japonês (ja)",
		"chineseSimplifiedZhCn": "Chinês Simplificado (zh-CN)",
		"arabicAr": "Árabe (ar)"
	},
	apiAccessSection: {
		"apiAccess": "Acesso via API",
		"apiKey": "Chave da API",
		"useThisKeyTo": "Use esta chave para acessar a API de benchmarking programaticamente.",
		"copy": "Copiar"
	},
	settingsFooter: {
		"cancel": "Cancelar",
		"saveChanges": "Salvar Alterações"
	},
	teamHeader: {
		"ourTeam": "Nossa Equipe",
		"meetThePeopleBehindI18n": "Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversa unida pela paixão por excelentes ferramentas de desenvolvedor."
	},
	teamGrid: {
		"sarahChen": "Sarah Chen",
		"founderLeadEngineer": "Fundadora & Engenheira Líder",
		"formerGoogleEngineerWith": "Ex-engenheira do Google com 10 anos de experiência construindo sistemas de internacionalização em escala.",
		"formerGoogleEngineerWith10": "Ex-engenheira do Google com 10 anos de experiência construindo sistemas de internacionalização em escala.",
		"marcusWeber": "Marcus Weber",
		"performanceEngineer": "Engenheiro de Performance",
		"specializesInJavascriptPerformance": "Especialista em otimização de performance JavaScript e metodologia de benchmarking. Anteriormente na Vercel.",
		"specializesInJavascriptPerformanceOptimization": "Especialista em otimização de performance JavaScript e metodologia de benchmarking. Anteriormente na Vercel.",
		"aishaPatel": "Aisha Patel",
		"developerAdvocate": "Developer Advocate",
		"passionateAboutDeveloperExperience": "Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.",
		"passionateAboutDeveloperExperienceAnd": "Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.",
		"tomasRodriguez": "Tomás Rodríguez",
		"fullStackDeveloper": "Desenvolvedor Full-Stack",
		"maintainsTheBenchmarkingInfrastructure": "Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Contribuidor open source no Lingui.",
		"maintainsTheBenchmarkingInfrastructureAnd": "Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Contribuidor open source no Lingui.",
		"yukiTanaka": "Yuki Tanaka",
		"dataAnalyst": "Analista de Dados",
		"ensuresStatisticalRigorIn": "Garante rigor estatístico em todos os resultados de benchmark. PhD em Estatística Aplicada pelo MIT.",
		"ensuresStatisticalRigorInAll": "Garante rigor estatístico em todos os resultados de benchmark. PhD em Estatística Aplicada pelo MIT.",
		"elenaKowalski": "Elena Kowalski",
		"communityManager": "Gerente de Comunidade",
		"managesCommunityContributions": "Gerencia as contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.",
		"managesCommunityContributionsPartnershipsAnd": "Gerencia as contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto."
	},
	mockBanner: "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada a nenhum negócio ou serviço real."
};
var ru_default = {
	route: {
		"oopsPageNotFound": "Упс! Страница не найдена",
		"returnToHome": "Вернуться на главную",
		"couldNotMeasureHydrationDuration": "Не удалось измерить продолжительность гидратации:"
	},
	header: {
		"home": "Главная",
		"methodology": "Методология",
		"mockPages": "Демо-страницы",
		"products": "Продукты",
		"pricing": "Цены",
		"team": "Команда",
		"blog": "Блог",
		"careers": "Вакансии",
		"faq": "FAQ",
		"contact": "Контакт",
		"settings": "Настройки",
		"goToGithub": "Перейти на GitHub"
	},
	footer: {
		"resources": "Ресурсы",
		"contact": "Контакт",
		"github": "GitHub",
		"methodology": "Методология",
		"contributing": "Участие в проекте",
		"builtWith": "i18n Benchmark — проект с открытым исходным кодом. Создан с помощью React, Vite и TanStack Router.",
		"anOpenSourceTestApplication": "Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения."
	},
	common: {
		"readMore": "Читать далее",
		"copy": "Копировать",
		"cancel": "Отмена",
		"saveChanges": "Сохранить изменения"
	},
	themeToggle: {
		"themeModeAutoSystemClick": "Тема: авто (системная). Нажмите, чтобы переключиться на светлую тему.",
		"themeModeLightClick": "Тема: светлая. Нажмите, чтобы переключиться на темную тему.",
		"themeModeDarkClick": "Тема: темная. Нажмите, чтобы переключиться на авто (системную).",
		"themeAuto": "Тема: Авто",
		"themeDark": "Тема: Темная",
		"themeLight": "Тема: Светлая"
	},
	hero: {
		"aTestApplicationDesignedTo": "Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.",
		"viewResults": "Посмотреть результаты"
	},
	whyItMatters: {
		"whyTheseMetricsMatter": "Почему эти показатели важны",
		"bundleSize": "Размер бандла",
		"theBundleIsTheData": "Бандл — это данные, которые отправляются каждому пользователю по всему миру. Большой бандл означает более длительное время загрузки, особенно при медленном соединении 3G, частом в многих регионах. Библиотеки i18n сильно различаются по весу: от нескольких килобайт до десятков килобайт кода выполнения, плюс сами файлы локализации.",
		"renderingHydration": "Рендеринг и гидратация",
		"connectingALargeJson": "Подключение большого словаря JSON к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг всего дерева. Во время гидратации SSR парсинг и привязка массивных объектов перевода увеличивают задержку перед тем, как страница станет интерактивной, что напрямую влияет на Time to Interactive (TTI).",
		"dynamicLoading": "Динамическая загрузка",
		"loadingAllTranslationsUpfront": "Загрузка всех переводов сразу перегружает начальную полезную нагрузку. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно текущей странице. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы (waterfalls), мелькание непереведенного контента и сложность кэширования. Важно измерять обе стратегии."
	},
	understandingImpact: {
		"understandingTheImpact": "Понимание влияния",
		"whyASingleLargeJson": "Почему один большой JSON может снизить производительность",
		"manyI18nLibrariesStore": "Многие библиотеки i18n хранят переводы в одном объекте JSON, доступном через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:",
		"manyI18nLibrariesStoreTranslations": "Многие библиотеки i18n хранят переводы в одном объекте JSON, доступном через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:",
		"theJsonMustBeParsed": "JSON необходимо парсить при каждой загрузке страницы, что блокирует основной поток.",
		"contextBasedArchitecturesCan": "Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при смене локали, потому что каждый потребитель уведомляется, даже если его специфические ключи не изменились.",
		"contextBasedArchitecturesCanCause": "Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при смене локали, потому что каждый потребитель уведомляется, даже если его специфические ключи не изменились.",
		"duringServerSideRenderingThe": "Во время серверного рендеринга весь словарь сериализуется в HTML, увеличивая размер документа, который необходимо загрузить и гидрировать.",
		"theTradeOffsOfDynamic": "Компромиссы динамической загрузки",
		"splittingTranslationsIntoPerRoute": "Разделение переводов на фрагменты по маршрутам или пространствам имен может значительно снизить начальную нагрузку. Но это создает новые проблемы:",
		"waterfallRequests": "Каскадные запросы (Waterfall requests):",
		"theAppMustFirstLoad": "Приложение должно сначала загрузиться, определить локаль, затем запросить нужный фрагмент — что добавляет сетевые задержки.",
		"flashOfUntranslatedContent": "Мелькание непереведенного контента (FOUC):",
		"flashOfUntranslatedContentFouc": "Мелькание непереведенного контента (FOUC):",
		"usersMayBrieflySeeTranslation": "Пользователи могут на мгновение увидеть ключи перевода или язык по умолчанию, пока фрагмент не загрузится.",
		"cacheInvalidation": "Инвалидация кэша:",
		"updatingTranslationsRequiresCache": "Обновление переводов требует стратегий сброса кэша, чтобы пользователи получали свежий контент без повторной загрузки неизмененных фрагментов.",
		"whatThisBenchmarkMeasures": "Что измеряет этот бенчмарк",
		"thisTestAppProvidesA": "Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют к вашему бандлу JavaScript, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы."
	},
	resultsTable: {
		"sampleResults": "Примеры результатов",
		"bundleSize": "Размер бандла",
		"lookupTime": "Время поиска",
		"lazyLoading": "Ленивая загрузка",
		"library": "Библиотека"
	},
	aboutHeader: {
		"methodology": "Методология",
		"weDesignedThisBenchmarkTo": "Мы разработали этот бенчмарк для обеспечения справедливого, воспроизводимого и значимого сравнения библиотек i18n. Вот наш подход.",
		"aboutThisBenchmark": "Об этом бенчмарке",
		"thisIsAnOpenSource": "Это тестовое приложение с открытым исходным кодом, а не продукт или компания. Его единственная цель — предоставить реалистичное многостраничное приложение React, в которое можно интегрировать и измерять различные библиотеки i18n в идентичных условиях."
	},
	aboutGrid: {
		"testEnvironment": "Тестовая среда",
		"allBenchmarksRunOn": "Все бенчмарки запускаются на одном и том же оборудовании (M2 MacBook Pro, 16 ГБ ОЗУ), в одном и том же браузере (Chromium 120 через Playwright) и при одних и тех же сетевых условиях (симуляция 4G). Каждый тест повторяется 50 раз, и мы сообщаем медиану с процентилями P95/P99.",
		"applicationDesign": "Дизайн приложения",
		"theBenchmarkAppHas10": "Приложение для бенчмарка имеет 10 страниц с реалистичным контентом: навигация, формы, динамические списки и статический текст. Каждая страница использует 15–30 ключей перевода, чтобы представлять реальные сценарии использования, а не синтетические микробенчмарки.",
		"measurementMethodology": "Методология измерения",
		"weUseBrowserNativeApis": "Мы используем нативные API браузера (Performance Timeline, Resource Timing, Layout Instability) в сочетании с данными React Profiler. Размеры бандлов измеряются после сжатия gzip с помощью source-map-explorer для точности.",
		"fairComparison": "Справедливое сравнение",
		"eachI18nLibraryIsIntegrated": "Каждая библиотека i18n интегрируется в соответствии с ее официальной документацией и рекомендациями. Мы консультируемся с мейнтейнерами, когда это возможно, чтобы обеспечить оптимальную конфигурацию. То же приложение React, тот же конфиг Vite, тот же деплой.",
		"whyThisExists": "Почему это существует",
		"choosingAnI18nLibrary": "Выбор библиотеки i18n — это архитектурное решение с долгосрочными последствиями. Большинство сравнений сосредоточено на эргономике API, но немногие измеряют влияние на производительность: какой вес библиотека добавляет к бандлу? Как она влияет на рендеринг, когда загружаются тысячи ключей перевода? Действительно ли помогает ленивая загрузка или она просто переносит затраты? Этот бенчмарк отвечает на эти вопросы с помощью реальных данных.",
		"methodology": "Методология",
		"theSame10PageApp": "Одно и то же 10-страничное приложение создается по одному разу для каждой библиотеки. Мы измеряем бандл продакшн-сборки (через rollup-plugin-visualizer), проводим аудит Lighthouse для показателей загрузки и используем React Profiler для регистрации времени рендеринга при переключении локали. Все тесты запускаются в CI на одинаковом оборудовании для обеспечения воспроизводимости результатов."
	},
	whatWeMeasure: {
		"bundleSizeImpact": "Влияние на размер бандла",
		"theAdditionalJavascriptBytes": "Дополнительные байты JavaScript, отправляемые пользователям при включении библиотеки i18n и ее файлов локализации. Это напрямую влияет на время загрузки в медленных сетях.",
		"theAdditionalJavascriptBytesSent": "Дополнительные байты JavaScript, отправляемые клиенту специально из-за рантайма библиотеки i18n, плюс файлы локализации для текущей локали.",
		"renderingOverhead": "Накладные расходы на рендеринг",
		"howMuchExtraTimeTheLibraryAdds": "Сколько дополнительного времени библиотека добавляет к циклу рендеринга React. Библиотеки, внедряющие переводы через одного провайдера контекста, могут вызывать ненужные повторные рендеринги во всем дереве компонентов.",
		"howMuchExtraTimeThe": "Сколько дополнительного времени слой i18n добавляет к рендерингу каждого компонента — измеряется с помощью actualDuration в React Profiler.",
		"hydrationCost": "Стоимость гидратации",
		"duringSsrTranslationDataIsSerialized": "Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем HTML и замедляют гидратацию — момент, когда страница становится интерактивной.",
		"duringSsrTranslationDataIs": "Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают объем HTML и замедляют гидратацию — момент, когда страница становится интерактивной.",
		"lazyLoadingEffectiveness": "Эффективность ленивой загрузки",
		"whetherSplittingTranslationsByRoute": "Снижает ли разделение переводов по маршрутам или пространствам имен начальную нагрузку, и какие компромиссы оно вносит (каскадные запросы, FOUC, сложность кэша).",
		"localeSwitchSpeed": "Скорость переключения локали",
		"howFastTheAppCan": "Как быстро приложение может переключаться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.",
		"howFastTheAppCanSwitchFromOne": "Как быстро приложение может переключаться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.",
		"whatWeMeasure": "Что мы измеряем"
	},
	blogHeader: {
		"blog": "Блог",
		"insightsDeepDivesAnd": "Идеи, глубокие погружения и обновления от сообщества бенчмаркинга i18n.",
		"insightsTutorialsAndAnalysis": "Идеи, руководства и анализ от сообщества i18n."
	},
	blogList: {
		"comparingI18nLibrariesIn": "Сравнение библиотек i18n в 2026 году: глубокое погружение",
		"comparingI18nLibrariesIn2026": "Сравнение библиотек i18n в 2026 году: глубокое погружение",
		"march152026": "15 марта 2026 г.",
		"weTested12DifferentInternationalization": "Мы протестировали 12 различных библиотек интернационализации на производительность, размер бандла и DX. Вот удивительные результаты.",
		"howToReduceYourI18n": "Как уменьшить бандл i18n на 60%",
		"march82026": "8 марта 2026 г.",
		"practicalStrategiesForOptimizingTranslation": "Практические стратегии для оптимизации бандлов локализации, включая ленивую загрузку, разделение кода и оптимизацию во время компиляции.",
		"theStateOfInternationalizationIn": "Состояние интернационализации в React",
		"february282026": "28 февраля 2026 г.",
		"anOverviewOfTheCurrent": "Обзор текущей экосистемы i18n, сравнение подходов от каталогов сообщений до решений на основе компилятора.",
		"anOverviewOfTheCurrentI18n": "Обзор текущей экосистемы i18n в React, охватывающий тенденции, новые паттерны и предпочтения сообщества.",
		"migratingFromReactI18nextTo": "Миграция с react-i18next на Lingui",
		"february152026": "15 февраля 2026 г.",
		"aStepByStepGuide": "Пошаговое руководство по миграции приложения с 50 000 ключами локализации с react-i18next на Lingui.",
		"aStepByStepGuideOnMigrating": "Пошаговое руководство по миграции приложения с 50 000 ключами локализации с react-i18next на Lingui.",
		"serverComponentsAndI18nWhat": "Серверные компоненты и i18n: что изменится?",
		"february12026": "1 февраля 2026 г.",
		"reactServerComponentsIntroduce": "React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и рекомендации.",
		"benchmarkMethodologyHowWe": "Методология бенчмарка: как мы тестируем",
		"benchmarkMethodologyHowWeTest": "Методология бенчмарка: как мы тестируем",
		"january202026": "20 января 2026 г.",
		"aTransparentLookAtOur": "Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.",
		"aTransparentLookAtOurBenchmarking": "Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.",
		"readMore": "Читать далее →",
		"benchmark": "Бенчмарк",
		"tutorial": "Руководство",
		"analysis": "Анализ",
		"meta": "Мета",
		"reactServerComponentsIntroduceNew": "React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики."
	},
	careersHeader: {
		"careers": "Вакансии",
		"joinOurMissionToMake": "Присоединяйтесь к нашей миссии сделать интернет быстрее и доступнее для всех и везде.",
		"joinOurMission": "Присоединяйтесь к нашей миссии по улучшению экосистемы интернационализации. Мы — команда, работающая преимущественно удаленно, которая ценит вклад, прозрачность и постоянное обучение."
	},
	careersBenefits: {
		"whyJoinUs": "Почему стоит присоединиться к нам?",
		"remoteFirst": "Удаленная работа прежде всего",
		"workFromAnywhereFully": "Работайте из любого места. Полностью распределенная команда в 6 часовых поясах.",
		"workFromAnywhere": "Работайте из любой точки мира",
		"openSource": "Open Source",
		"allOurWorkIs": "Вся наша работа открыта. Создавайте свое публичное портфолио, внося реальный вклад.",
		"impactful": "Значимость",
		"yourWorkDirectlyHelps": "Ваша работа напрямую помогает разработчикам создавать более качественные и быстрые локализованные приложения.",
		"competitivePay": "Конкурентоспособная оплата",
		"topOfMarketCompensation": "Оплата выше рыночной",
		"openSourceTime": "Время на Open Source",
		"percentTimeForOss": "20% времени на вклад в OSS"
	},
	openPositions: {
		"openPositions": "Открытые вакансии",
		"seniorPerformanceEngineer": "Старший инженер по производительности",
		"seniorFrontendEngineer": "Старший фронтенд-инженер",
		"fullTime": "Полная занятость",
		"remote": "Удаленно",
		"leadBenchmarkDesignAnd": "Руководство дизайном и внедрением бенчмарков. Требуются глубокие знания внутренних механизмов V8, API производительности браузера и статистического анализа.",
		"technicalWriter": "Технический писатель",
		"partTime": "Частичная занятость",
		"createAndMaintainDocumentation": "Создание и поддержка документации, постов в блоге и образовательного контента о рекомендациях по производительности i18n.",
		"frontendDeveloper": "Фронтенд-разработчик",
		"buildAndMaintainThe": "Создание и поддержка дашборда бенчмарков, инструментов сравнения и интерактивных визуализаций.",
		"buildAndMaintainOur": "Создание и поддержка нашего дашборда бенчмаркинга и инструментов разработчика с использованием React, TypeScript и Vite.",
		"devOpsEngineer": "DevOps-инженер",
		"designAndMaintainThe": "Проектирование и поддержка конвейера CI/CD, который автоматически запускает бенчмарки при каждом обновлении библиотеки.",
		"applyNow": "Подать заявку",
		"engineering": "Разработка",
		"backendEngineer": "Бэкэнд-инженер",
		"designAndScaleOur": "Проектирование и масштабирование нашей облачной инфраструктуры бенчмаркинга, обрабатывающей тысячи автоматизированных запусков ежедневно.",
		"documentation": "Документация",
		"createComprehensiveGuidesApi": "Создание подробных руководств, справочников API и учебных пособий для нашей платформы бенчмаркинга.",
		"devrelEngineer": "DevRel-инженер",
		"sfRemote": "Сан-Франциско / Удаленно",
		"community": "Сообщество",
		"engageWithTheI18n": "Взаимодействие с сообществом i18n через выступления, воркшопы, посты в блогах и вклад в открытый исходный код.",
		"qaEngineer": "QA-инженер",
		"ensureTheAccuracyAnd": "Обеспечение точности и надежности результатов бенчмарков посредством строгого тестирования и валидации."
	},
	contactHeader: {
		"contactUs": "Связаться с нами",
		"haveQuestionsOrWantTo": "Есть вопросы или хотите внести свой вклад? Мы будем рады вашему сообщению.",
		"getInTouch": "Оставайтесь на связи",
		"haveIdeasFoundABug": "Есть идеи, нашли баг или хотите предложить бенчмарк? Свяжитесь с нами."
	},
	contactForm: {
		"name": "Имя",
		"yourName": "Ваше имя",
		"email": "Email",
		"emailPlaceholder": "you@example.com",
		"subject": "Тема",
		"topic": "Тема",
		"bugReport": "Отчет о баге",
		"newBenchmarkIdea": "Идея нового бенчмарка",
		"methodologyQuestion": "Вопрос по методологии",
		"contribution": "Вклад в проект",
		"other": "Другое",
		"message": "Сообщение",
		"messagePlaceholder": "Опишите ваш вопрос или идею...",
		"sendMessage": "Отправить сообщение",
		"wellGetBackTo": "Мы ответим вам в течение 48 часов."
	},
	faqHeader: {
		"frequentlyAskedQuestions": "Часто задаваемые вопросы",
		"everythingYouNeedTo": "Все, что вам нужно знать о проекте i18n Benchmark.",
		"everythingYouNeedToKnow": "Все, что вам нужно знать об i18n Benchmark."
	},
	faqList: {
		"howAreTheBenchmarks": "Как запускаются бенчмарки?",
		"allBenchmarksAreRun": "Все бенчмарки запускаются с использованием Playwright на одинаковом оборудовании (M2 MacBook Pro) с симуляцией условий сети 4G. Каждое испытание проводится в 50 итерациях, и мы сообщаем медианное значение, а также показатели P95 и P99.",
		"whatLibrariesAreCurrently": " Какие библиотеки тестируются в данный момент?",
		"weCurrentlyBenchmarkReactI18next": "В настоящее время мы тестируем react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl и Paraglide. Мы планируем добавить больше библиотек по запросу сообщества.",
		"canISubmitMyOwn": "Могу ли я предложить свои собственные бенчмарки?",
		"canISubmitMyOwnBenchmarks": "Могу ли я предложить свои собственные бенчмарки?",
		"absolutelyWeWelcomeCommunity": "Безусловно! Мы приветствуем вклад сообщества. Сделайте форк репозитория, добавьте интеграцию вашей библиотеки по нашему шаблону и отправьте pull request. Подробности см. в руководстве по внесению вклада.",
		"howOftenAreResults": "Как часто обновляются результаты?",
		"benchmarksRunAutomaticallyVia": "Бенчмарки запускаются автоматически через CI при каждом обновлении зависимостей и еженедельно в основной ветке. Результаты публикуются на дашборде в течение 24 часов.",
		"areTheResultsStatistically": "Являются ли результаты статистически значимыми?",
		"yesWeUseThe": "Да. Мы используем U-критерий Манна-Уитни с уровнем значимости 0,05 для сравнения распределений. Мы также сообщаем о доверительных интервалах и величине эффекта.",
		"whatIsI18nBenchmark": "Что такое i18n Benchmark?",
		"i18nBenchmarkIsAnOpenSource": "i18n Benchmark — это открытый набор бенчмарков, который измеряет и сравнивает производительность, размер бандла и опыт разработчиков при использовании библиотек интернационализации для приложений JavaScript и React.",
		"howAreBenchmarksConducted": "Как проводятся бенчмарки?",
		"weRunStandardizedTestsInIsolated": "Мы запускаем стандартизированные тесты в изолированных средах на одинаковом оборудовании. Каждый бенчмарк повторяется несколько раз для обеспечения статистической значимости. Все конфигурации тестов общедоступны в нашем репозитории GitHub.",
		"whichLibrariesAreCurrentlySupported": "Какие библиотеки поддерживаются в настоящее время?",
		"weSupportReactI18nextReactIntl": "Мы поддерживаем react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react и Tolgee.",
		"yesCommunityBenchmarkSubmissionsAre": "Да! Приветствуются предложения бенчмарков от сообщества. Сделайте форк нашего репозитория, добавьте свой бенчмарк согласно нашему руководству и отправьте pull request. Наша команда рассмотрит и примет подходящие предложения.",
		"howOftenAreBenchmarksUpdated": "Как часто обновляются бенчмарки?",
		"weReRunAllBenchmarksWeekly": "Мы еженедельно перезапускаем все бенчмарки для последних стабильных версий каждой библиотеки. Выпуски основных версий вызывают немедленный цикл повторного тестирования.",
		"isTheDataReliable": "Надежны ли данные?",
		"weFollowRigorousStatisticalMethodologyIncluding": "Мы следуем строгой статистической методологии, включая прогревочные запуски, обнаружение выбросов и доверительные интервалы. Все необработанные данные публикуются вместе с нашим анализом для полной прозрачности.",
		"doYouOfferConsultingServices": "Предлагаете ли вы консультационные услуги?",
		"yesOurEnterprisePlanIncludesConsulting": "Да, наш план Enterprise включает консультационные часы для команд, оценивающих решения i18n. Мы можем предоставить индивидуальные рекомендации, основанные на вашем конкретном случае использования, масштабе и ограничениях.",
		"howCanIContribute": "Как я могу помочь проекту?",
		"thereAreManyWaysToContribute": "Есть много способов внести свой вклад: предлагать бенчмарки, улучшать документацию, сообщать о багах, предлагать новые метрики или спонсировать проект. Посетите наш репозиторий GitHub для получения более подробной информации."
	},
	pricingHeader: {
		"pricing": "Цены",
		"transparentPricingForEvery": "Прозрачные цены для каждого этапа вашего пути в i18n."
	},
	pricingTiers: {
		"freeTier": "Бесплатный уровень",
		"free": "Бесплатно",
		"publicBenchmarkDashboard": "Публичный дашборд бенчмарков",
		"basicLibraryComparisons": "Базовые сравнения библиотек",
		"communityForumAccess": "Доступ к форуму сообщества",
		"monthlyResultDigest": "Ежемесячный дайджест результатов",
		"getStarted": "Начать",
		"proTier": "Уровень Pro",
		"perMonth": "/месяц",
		"allFreeFeatures": "Все функции бесплатного уровня",
		"customBenchmarkConfigurations": "Пользовательские конфигурации бенчмарков",
		"privateResultsDashboard": "Приватный дашборд результатов",
		"apiAccess1000Requests": "Доступ к API (1000 запросов в день)",
		"slackIntegration": "Интеграция со Slack",
		"subscribeToPro": "Подписаться на Pro",
		"enterpriseTier": "Уровень Enterprise",
		"custom": "Индивидуально",
		"allProFeatures": "Все функции Pro",
		"dedicatedBenchmarkInfrastructure": "Выделенная инфраструктура для бенчмарков",
		"customLibraryIntegrations": "Индивидуальные интеграции библиотек",
		"slaGuarantees": "Гарантии SLA",
		"prioritySupport": "Приоритетная поддержка",
		"contactSales": "Связаться с отделом продаж"
	},
	productsHeader: {
		"products": "Продукты",
		"toolsAndServicesTo": "Инструменты и услуги, которые помогут вам оптимизировать стратегию интернационализации."
	},
	productsGrid: {
		"benchmarkDashboard": "Дашборд бенчмарков",
		"interactiveChartsAndTables": "Интерактивные диаграммы и таблицы, сравнивающие библиотеки i18n по размеру бандла, времени рендеринга и стоимости гидратации.",
		"bundleAnalyzer": "Анализатор бандла",
		"uploadYourBuildOutput": "Загрузите результаты вашей сборки и получите подробный отчет о том, какую часть вашего бандла составляют накладные расходы i18n.",
		"migrationAssistant": "Помощник по миграции",
		"automatedCodemodsAndGuides": "Автоматизированные кодмоды и руководства для миграции между библиотеками i18n с минимальным перерывом в работе.",
		"performanceMonitor": "Монитор производительности",
		"continuousPerformanceTrackingFor": "Непрерывное отслеживание производительности вашей реализации i18n. Получайте оповещения при ухудшении загрузки переводов.",
		"learnMore": "Узнать больше"
	},
	settingsHeader: {
		"settings": "Настройки",
		"manageYourAccountPreferences": "Управляйте настройками вашего аккаунта и конфигурацией.",
		"manageYourAccount": "Управляйте настройками вашего аккаунта и конфигурацией."
	},
	profileSection: {
		"profile": "Профиль",
		"displayName": "Отображаемое имя",
		"email": "Email"
	},
	preferencesSection: {
		"preferences": "Предпочтения",
		"emailNotifications": "Email-уведомления",
		"receiveWeeklyBenchmark": "Получать еженедельные отчеты о бенчмарках",
		"receiveWeeklyBenchmarkReports": "Получать еженедельные отчеты о бенчмарках",
		"toggleNotifications": "Переключить уведомления",
		"darkMode": "Темная тема",
		"useDarkColorScheme": "Использовать темную цветовую схему",
		"toggleDarkMode": "Переключить темную тему",
		"defaultLanguage": "Язык по умолчанию",
		"englishEn": "Английский (en)",
		"frenchFr": "Французский (fr)",
		"germanDe": "Немецкий (de)",
		"spanishEs": "Испанский (es)",
		"japaneseJa": "Японский (ja)",
		"chineseSimplifiedZhCn": "Китайский упрощенный (zh-CN)",
		"arabicAr": "Арабский (ar)"
	},
	apiAccessSection: {
		"apiAccess": "Доступ к API",
		"apiKey": "API ключ",
		"useThisKeyTo": "Используйте этот ключ для программного доступа к API бенчмаркинга.",
		"copy": "Копировать"
	},
	settingsFooter: {
		"cancel": "Отмена",
		"saveChanges": "Сохранить изменения"
	},
	teamHeader: {
		"ourTeam": "Наша команда",
		"meetThePeopleBehindI18n": "Познакомьтесь с людьми, стоящими за i18n Benchmark. Разнообразная команда, объединенная общей страстью к отличным инструментам для разработчиков."
	},
	teamGrid: {
		"sarahChen": "Сара Чен",
		"founderLeadEngineer": "Основатель и ведущий инженер",
		"formerGoogleEngineerWith": "Бывший инженер Google с 10-летним опытом создания систем интернационализации в масштабе.",
		"formerGoogleEngineerWith10": "Бывший инженер Google с 10-летним опытом создания систем интернационализации в масштабе.",
		"marcusWeber": "Маркус Вебер",
		"performanceEngineer": "Инженер по производительности",
		"specializesInJavascriptPerformance": "Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.",
		"specializesInJavascriptPerformanceOptimization": "Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.",
		"aishaPatel": "Айша Патель",
		"developerAdvocate": "Developer Advocate",
		"passionateAboutDeveloperExperience": "Увлечена опытом разработчиков и обучением. Спикер на React Conf, JSConf и i18nNext.",
		"passionateAboutDeveloperExperienceAnd": "Увлечена опытом разработчиков и обучением. Спикер на React Conf, JSConf и i18nNext.",
		"tomasRodriguez": "Томас Родригес",
		"fullStackDeveloper": "Full-Stack разработчик",
		"maintainsTheBenchmarkingInfrastructure": "Поддерживает инфраструктуру бенчмаркинга и конвейер CI/CD. Автор открытого исходного кода для Lingui.",
		"maintainsTheBenchmarkingInfrastructureAnd": "Поддерживает инфраструктуру бенчмаркинга и конвейер CI/CD. Автор открытого исходного кода для Lingui.",
		"yukiTanaka": "Юки Танака",
		"dataAnalyst": "Аналитик данных",
		"ensuresStatisticalRigorIn": "Обеспечивает статистическую строгость всех результатов бенчмарка. Доктор прикладной статистики Массачусетского технологического института.",
		"ensuresStatisticalRigorInAll": "Обеспечивает статистическую строгость всех результатов бенчмарка. Доктор прикладной статистики Массачусетского технологического института.",
		"elenaKowalski": "Елена Ковальски",
		"communityManager": "Комьюнити-менеджер",
		"managesCommunityContributions": "Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении открытым исходным кодом.",
		"managesCommunityContributionsPartnershipsAnd": "Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении открытым исходным кодом."
	},
	mockBanner: "⚠️ Эта страница содержит демонстрационные данные только для целей тестирования. Она не связана с каким-либо реальным бизнесом или услугой."
};
var zh_default = {
	route: {
		"oopsPageNotFound": "糟糕！未找到页面",
		"returnToHome": "返回首页",
		"couldNotMeasureHydrationDuration": "无法测量静态化水合时间："
	},
	header: {
		"home": "首页",
		"methodology": "测试方法",
		"mockPages": "模拟页面",
		"products": "产品",
		"pricing": "定价",
		"team": "团队",
		"blog": "博客",
		"careers": "职业生涯",
		"faq": "常见问题",
		"contact": "联系我们",
		"settings": "设置",
		"goToGithub": "前往 GitHub"
	},
	footer: {
		"resources": "资源",
		"contact": "联系我们",
		"github": "GitHub",
		"methodology": "测试方法",
		"contributing": "贡献代码",
		"builtWith": "i18n 基准测试 — 开源项目。使用 React, Vite 和 TanStack Router 构建。",
		"anOpenSourceTestApplication": "一个开源测试应用，用于衡量国际化库在包大小、加载时间和应用响应能力方面的真实影响。"
	},
	common: {
		"readMore": "阅读更多",
		"copy": "复制",
		"cancel": "取消",
		"saveChanges": "保存更改"
	},
	themeToggle: {
		"themeModeAutoSystemClick": "主题模式：自动（系统）。点击切换到浅色模式。",
		"themeModeLightClick": "主题模式：浅色。点击切换到深色模式。",
		"themeModeDarkClick": "主题模式：深色。点击切换到自动（系统）模式。",
		"themeAuto": "主题：自动",
		"themeDark": "主题：深色",
		"themeLight": "主题：浅色"
	},
	hero: {
		"aTestApplicationDesignedTo": "一个旨在衡量国际化库在包大小、加载性能和渲染响应能力方面的真实影响的测试应用。",
		"viewResults": "查看结果"
	},
	whyItMatters: {
		"whyTheseMetricsMatter": "为什么这些指标很重要",
		"bundleSize": "包包大小 (Bundle Size)",
		"theBundleIsTheData": "包包是分发给全球每一位用户的核心数据。更大的包包意味着更长的下载时间，特别是在许多地区常见的慢速 3G 连接下。国际化库的权重差异巨大：从几 KB 到数十 KB 的运行时代码，外加翻译文件本身。",
		"renderingHydration": "渲染与水合 (Rendering & Hydration)",
		"connectingALargeJson": "将庞大的 JSON 字典连接到每个组件会产生隐藏依赖：翻译上下文中的任何更改都可能触发布满整个组件树的重新渲染。在 SSR 水合过程中，解析和附加庞大的翻译对象会在页面变得可交互之前增加延迟——直接影响可交互时间 (TTI)。",
		"dynamicLoading": "动态加载",
		"loadingAllTranslationsUpfront": "预先加载所有翻译会使初始负载过重。动态（懒）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，懒加载引入了自身的权衡：瀑布式请求、未翻译内容的闪烁以及缓存复杂性。同时衡量这两种策略至关重要。"
	},
	understandingImpact: {
		"understandingTheImpact": "了解其影响",
		"whyASingleLargeJson": "为什么单个大型 JSON 会损害性能",
		"manyI18nLibrariesStore": "许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个使用翻译的组件都会持有对整个字典的引用。这意味着：",
		"manyI18nLibrariesStoreTranslations": "许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当此对象很大（数千个键）时，每个使用翻译的组件都会持有对整个字典的引用。这意味着：",
		"theJsonMustBeParsed": "每次页面加载时都必须解析 JSON——阻塞主线程。",
		"contextBasedArchitecturesCan": "基于上下文的架构可能会在语言区域更改时导致级联重新渲染，因为每个消费者都会收到通知，即使他们的特定键没有更改。",
		"contextBasedArchitecturesCanCause": "基于上下文的架构可能会在语言区域更改时导致级联重新渲染，因为每个消费者都会收到通知，即使他们的特定键没有更改。",
		"duringServerSideRenderingThe": "在服务端渲染期间，整个字典都会被序列化到 HTML 负载中，从而增加了必须下载和水合的文档大小。",
		"theTradeOffsOfDynamic": "动态加载的权衡",
		"splittingTranslationsIntoPerRoute": "按路由或按命名空间拆分翻译可以大幅减少初始负载。但它引入了新的挑战：",
		"waterfallRequests": "瀑布式请求：",
		"theAppMustFirstLoad": "应用必须首先加载，确定语言区域，然后获取正确的区块——增加了网络往返时间。",
		"flashOfUntranslatedContent": "未翻译内容闪烁 (FOUC)：",
		"flashOfUntranslatedContentFouc": "未翻译内容闪烁 (FOUC)：",
		"usersMayBrieflySeeTranslation": "用户可能会在区块到达之前短暂看到翻译键或回退语言。",
		"cacheInvalidation": "缓存失效：",
		"updatingTranslationsRequiresCache": "更新翻译需要缓存刷新策略，以确保用户获得最新内容，而无需重新下载未更改的区块。",
		"whatThisBenchmarkMeasures": "本基准测试衡量什么",
		"thisTestAppProvidesA": "此测试应用提供了一个受控环境——包含 10 个现实内容的页面——在三个维度上比较 i18n 库：它们为 JavaScript 包增加的权重、解析和渲染翻译内容所花费的时间，以及它们代码拆分和懒加载策略的有效性。每个库都集成到相同的应用中，以便结果具有直接可比性。"
	},
	resultsTable: {
		"sampleResults": "示例结果",
		"bundleSize": "包大小",
		"lookupTime": "查找时间",
		"lazyLoading": "懒加载",
		"library": "库"
	},
	aboutHeader: {
		"methodology": "测试方法",
		"weDesignedThisBenchmarkTo": "我们设计此基准测试是为了对 i18n 库提供公平、可重复且有意义的比较。这是我们的方法。",
		"aboutThisBenchmark": "关于此基准测试",
		"thisIsAnOpenSource": "这是一个开源测试应用——不是产品或公司。其唯一目的是提供一个现实的多页面 React 应用，可以在相同条件下集成和衡量不同的 i18n 库。"
	},
	aboutGrid: {
		"testEnvironment": "测试环境",
		"allBenchmarksRunOn": "所有基准测试都在相同的硬件（M2 MacBook Pro，16 GB RAM）、相同的浏览器（Chromium 120，通过 Playwright）和相同的网络条件（模拟 4G）下运行。每次测试重复 50 次，我们报告中位数以及 P95/P99 百分位值。",
		"applicationDesign": "应用设计",
		"theBenchmarkAppHas10": "基准测试应用包含 10 个现实内容的页面——导航、表单、动态列表和静态文本。每个页面使用 15-30 个翻译键，以代表现实世界的使用模式，而非综合微基准测试。",
		"measurementMethodology": "测量方法",
		"weUseBrowserNativeApis": "我们结合使用浏览器原生 API（Performance Timeline, Resource Timing, Layout Instability）和 React Profiler 数据。包大小在 gzip 压缩后使用 source-map-explorer 测量，以确保准确性。",
		"fairComparison": "公平比较",
		"eachI18nLibraryIsIntegrated": "每个 i18n 库都遵循其官方文档和最佳实践进行集成。我们尽可能咨询维护者以确保最佳配置。相同的 React 应用，相同的 Vite 配置，相同的部署方式。",
		"whyThisExists": "为什么存在这个基准测试",
		"choosingAnI18nLibrary": "选择一个 i18n 库是一个具有长期影响的架构决策。大多数比较侧重于 API 的人体工程学，但很少衡量性能成本：库为包增加了多少权重？当加载数千个翻译键时，它如何影响渲染？懒加载是否真的有帮助，还是仅仅转移了成本？本基准测试用真实数据回答了这些问题。",
		"methodology": "测试方法",
		"theSame10PageApp": "相同的 10 页面应用为每个库构建一次。我们测量生产包（通过 rollup-plugin-visualizer），运行 Lighthouse 审计以获取加载指标，并使用 React Profiler 捕捉语言切换期间的渲染时间。所有测试都在具有一致硬件的 CI 上运行，以确保结果可重复。"
	},
	whatWeMeasure: {
		"bundleSizeImpact": "包大小影响",
		"theAdditionalJavascriptBytes": "包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络下的下载时间。",
		"theAdditionalJavascriptBytesSent": "专门由于 i18n 库运行时以及当前语言区域的翻译文件而发送到客户端的额外 JavaScript 字节。",
		"renderingOverhead": "渲染开销",
		"howMuchExtraTimeTheLibraryAdds": "库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供者注入翻译的库可能会在整个组件树中导致不必要的重新渲染。",
		"howMuchExtraTimeThe": "i18n 层为每个组件渲染增加了多少额外时间——使用 React Profiler 的 actualDuration 测量。",
		"hydrationCost": "水合成本",
		"duringSsrTranslationDataIsSerialized": "在 SSR 期间，翻译数据被序列化到 HTML 中。大型字典会增加 HTML 负载并减慢水合过程——即页面变得可交互的瞬间。",
		"duringSsrTranslationDataIs": "在 SSR 期间，翻译数据被序列化到 HTML 中。大型字典会增加 HTML 负载并减慢水合过程——即页面变得可交互的瞬间。",
		"lazyLoadingEffectiveness": "懒加载有效性",
		"whetherSplittingTranslationsByRoute": "按路由或命名空间拆分翻译是否真的减少了初始加载，以及它引入了哪些权衡（瀑布式请求、FOUC、缓存复杂性）。",
		"localeSwitchSpeed": "语言区域切换速度",
		"howFastTheAppCan": "应用在运行时从一种语言切换到另一种语言的速度——包括获取新翻译、重新渲染组件和更新 DOM。",
		"howFastTheAppCanSwitchFromOne": "应用在运行时从一种语言切换到另一种语言的速度——包括获取新翻译、重新渲染组件和更新 DOM。",
		"whatWeMeasure": "我们的测量指标"
	},
	blogHeader: {
		"blog": "博客",
		"insightsDeepDivesAnd": "来自 i18n 基准测试社区的见解、深入探究和更新。",
		"insightsTutorialsAndAnalysis": "来自 i18n 社区的见解、教程和分析。"
	},
	blogList: {
		"comparingI18nLibrariesIn": "2026 年 i18n 库比较：深入探究",
		"comparingI18nLibrariesIn2026": "2026 年 i18n 库比较：深入探究",
		"march152026": "2026年3月15日",
		"weTested12DifferentInternationalization": "我们在性能、包大小和开发人员体验方面测试了 12 个不同的国际化库。以下是令人惊讶的结果。",
		"howToReduceYourI18n": "如何将 i18n 包减小 60%",
		"march82026": "2026年3月8日",
		"practicalStrategiesForOptimizingTranslation": "优化翻译包的实用策略，包括懒加载、代码拆分和编译时优化。",
		"theStateOfInternationalizationIn": "React 国际化的现状",
		"february282026": "2026年2月28日",
		"anOverviewOfTheCurrent": "当前 i18n 生态系统概述，比较了从消息目录到基于编译器的解决方案等各种方法。",
		"anOverviewOfTheCurrentI18n": "React 中当前 i18n 生态系统的概述，涵盖了趋势、新兴模式和社区偏好。",
		"migratingFromReactI18nextTo": "从 react-i18next 迁移到 Lingui",
		"february152026": "2026年2月15日",
		"aStepByStepGuide": "关于将包含 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。",
		"aStepByStepGuideOnMigrating": "关于将包含 50,000 个翻译键的生产应用从 react-i18next 迁移到 Lingui 的分步指南。",
		"serverComponentsAndI18nWhat": "Server Components 与 i18n：有哪些变化？",
		"february12026": "2026年2月1日",
		"reactServerComponentsIntroduce": "React Server Components 为国际化引入了新模式。我们探讨了其影响和最佳实践。",
		"benchmarkMethodologyHowWe": "基准测试方法：我们如何测试",
		"benchmarkMethodologyHowWeTest": "基准测试方法：我们如何测试",
		"january202026": "2026年1月20日",
		"aTransparentLookAtOur": "对我们基准测试方法的透明观察，包括测试环境、统计方法和可重复性。",
		"aTransparentLookAtOurBenchmarking": "对我们基准测试方法的透明观察，包括测试环境、统计方法和可重复性。",
		"readMore": "阅读更多 →",
		"benchmark": "基准测试",
		"tutorial": "教程",
		"analysis": "分析",
		"meta": "元数据",
		"reactServerComponentsIntroduceNew": "React 服务器组件为国际化引入了新模式。我们探讨了其影响和最佳实践。"
	},
	careersHeader: {
		"careers": "职业生涯",
		"joinOurMissionToMake": "加入我们的使命，让网络对每个人、每个地方都更快、更易于访问。",
		"joinOurMission": "加入我们的使命，改善国际化生态系统。我们是一个远程优先的团队，重视影响力、透明度和持续学习。"
	},
	careersBenefits: {
		"whyJoinUs": "为什么加入我们？",
		"remoteFirst": "远程优先",
		"workFromAnywhereFully": "在任何地方工作。团队完全分布在 6 个时区。",
		"workFromAnywhere": "在世界任何地方工作",
		"openSource": "开源",
		"allOurWorkIs": "我们所有的工作都是开源的。在创造影响力的同时建立您的公开个人履历。",
		"impactful": "具有影响力",
		"yourWorkDirectlyHelps": "您的工作直接帮助开发人员构建更好、更快的国际化应用。",
		"competitivePay": "具有竞争力的薪酬",
		"topOfMarketCompensation": "市场领先的薪酬水平",
		"openSourceTime": "开源时间",
		"percentTimeForOss": "20% 的时间用于 OSS 贡献"
	},
	openPositions: {
		"openPositions": "开放职位",
		"seniorPerformanceEngineer": "高级性能工程师",
		"seniorFrontendEngineer": "高级前端工程师",
		"fullTime": "全职",
		"remote": "远程",
		"leadBenchmarkDesignAnd": "领导基准测试的设计和实现。需要对 V8 内部机制、浏览器性能 API 和统计分析有深入了解。",
		"technicalWriter": "技术作家",
		"partTime": "兼职",
		"createAndMaintainDocumentation": "创建并维护有关 i18n 性能最佳实践的文档、博客文章和教育内容。",
		"frontendDeveloper": "前端开发人员",
		"buildAndMaintainThe": "构建和维护基准测试仪表板、比较工具和交互式可视化效果。",
		"buildAndMaintainOur": "使用 React, TypeScript 和 Vite 构建并维护我们的基准测试仪表板和开发人员工具。",
		"devOpsEngineer": "DevOps 工程师",
		"designAndMaintainThe": "设计并维护 CI/CD 管道，在每次库更新时自动运行基准测试。",
		"applyNow": "立即申请",
		"engineering": "工程",
		"backendEngineer": "后端工程师",
		"designAndScaleOur": "设计并扩展我们的云基准测试基础设施，每天处理数千次自动化运行。",
		"documentation": "文档",
		"createComprehensiveGuidesApi": "为我们的基准测试平台创建全面的指南、API 参考和教程。",
		"devrelEngineer": "DevRel 工程师",
		"sfRemote": "旧金山 / 远程",
		"community": "社区",
		"engageWithTheI18n": "通过演讲、研讨会、博客文章和开源贡献与 i18n 社区互动。",
		"qaEngineer": "QA 工程师",
		"ensureTheAccuracyAnd": "通过严格的测试和验证确保基准测试结果的准确性和可靠性。"
	},
	contactHeader: {
		"contactUs": "联系我们",
		"haveQuestionsOrWantTo": "有疑问或想贡献？我们很乐意听到您的声音。",
		"getInTouch": "保持联系",
		"haveIdeasFoundABug": "有想法、发现 Bug 或想贡献基准测试？请联系我们。"
	},
	contactForm: {
		"name": "姓名",
		"yourName": "您的姓名",
		"email": "电子邮件",
		"emailPlaceholder": "you@example.com",
		"subject": "主题",
		"topic": "话题",
		"bugReport": "错误报告",
		"newBenchmarkIdea": "新基准测试思路",
		"methodologyQuestion": "测试方法问题",
		"contribution": "贡献",
		"other": "其他",
		"message": "内容",
		"messagePlaceholder": "描述您的问题或想法...",
		"sendMessage": "发送消息",
		"wellGetBackTo": "我们将在 48 小时内回复您。"
	},
	faqHeader: {
		"frequentlyAskedQuestions": "常见问题",
		"everythingYouNeedTo": "关于 i18n 基准测试项目您需要了解的一切。",
		"everythingYouNeedToKnow": "关于 i18n 基准测试您需要了解的一切。"
	},
	faqList: {
		"howAreTheBenchmarks": "基准测试是如何运行的？",
		"allBenchmarksAreRun": "所有基准测试都使用 Playwright 在一致的硬件设置（M2 MacBook Pro）和模拟 4G 网络条件下运行。每次测试运行 50 个迭代，我们报告中位数、P95 和 P99 值。",
		"whatLibrariesAreCurrently": "目前测试了哪些库？",
		"weCurrentlyBenchmarkReactI18next": "我们目前对 react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl 和 Paraglide 进行基准测试。我们计划根据社区要求添加更多内容。",
		"canISubmitMyOwn": "我可以提交自己的基准测试吗？",
		"canISubmitMyOwnBenchmarks": "我可以提交自己的基准测试吗？",
		"absolutelyWeWelcomeCommunity": "当然可以！我们欢迎社区贡献。Fork 仓库，按照我们的模板添加您的库集成，并提交 Pull Request。详情请参阅贡献指南。",
		"howOftenAreResults": "结果多久更新一次？",
		"benchmarksRunAutomaticallyVia": "基准测试在每次依赖更新时通过 CI 自动运行，并且在主分支上每周运行一次。结果会在 24 小时内发布到仪表板。",
		"areTheResultsStatistically": "结果是否具有统计学意义？",
		"yesWeUseThe": "是的。我们使用显著性水平为 0.05 的 Mann-Whitney U 检验来比较分布。我们还报告置信区间和效应量大小。",
		"whatIsI18nBenchmark": "什么是 i18n 基准测试？",
		"i18nBenchmarkIsAnOpenSource": "i18n 基准测试是一个开源基准测试套件，衡量并比较 JavaScript 和 React 应用的国际化库的性能、包大小和开发人员体验。",
		"howAreBenchmarksConducted": "基准测试是如何进行的？",
		"weRunStandardizedTestsInIsolated": "我们在隔离环境中使用一致的硬件运行标准化测试。每个基准测试重复多次以确保统计显著性。所有测试配置都在我们的 GitHub 仓库中公开。",
		"whichLibrariesAreCurrentlySupported": "目前支持哪些库？",
		"weSupportReactI18nextReactIntl": "我们支持 react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react 和 Tolgee。",
		"yesCommunityBenchmarkSubmissionsAre": "是的！欢迎社区提交基准测试。Fork 我们的仓库，按照我们的贡献指南添加您的基准测试，并提交 Pull Request。我们的团队将审查并合并合格的提交。",
		"howOftenAreBenchmarksUpdated": "基准测试多久更新一次？",
		"weReRunAllBenchmarksWeekly": "我们每周针对每个库的最新稳定版本重新运行所有基准测试。重大版本发布会触发立即重新测试循环。",
		"isTheDataReliable": "数据可靠吗？",
		"weFollowRigorousStatisticalMethodologyIncluding": "我们遵循严谨的统计方法，包括热身运行、离群值检测和置信区间。所有原始数据都随我们的分析一起发布，以确保完全透明。",
		"doYouOfferConsultingServices": "你们提供咨询服务吗？",
		"yesOurEnterprisePlanIncludesConsulting": "是的，我们的企业计划包括为评估 i18n 解决方案的团队提供咨询时间。我们可以根据您的具体用例、规模和约束提供量身定制的建议。",
		"howCanIContribute": "我该如何贡献？",
		"thereAreManyWaysToContribute": "有许多贡献方式：提交基准测试、改进文档、报告 Bug、建议新指标或赞助项目。访问我们的 GitHub 仓库了解更多详情。"
	},
	pricingHeader: {
		"pricing": "定价",
		"transparentPricingForEvery": "为您 i18n 旅程的每个阶段提供透明的定价。"
	},
	pricingTiers: {
		"freeTier": "免费版",
		"free": "免费",
		"publicBenchmarkDashboard": "公开基准测试仪表板",
		"basicLibraryComparisons": "基础库对比",
		"communityForumAccess": "社区论坛访问",
		"monthlyResultDigest": "每月结果摘要",
		"getStarted": "开始使用",
		"proTier": "专业版",
		"perMonth": "/月",
		"allFreeFeatures": "包含所有免费版功能",
		"customBenchmarkConfigurations": "自定义基准测试配置",
		"privateResultsDashboard": "私人结果仪表板",
		"apiAccess1000Requests": "API 访问（1,000 次请求/天）",
		"slackIntegration": "Slack 集成",
		"subscribeToPro": "订阅专业版",
		"enterpriseTier": "企业版",
		"custom": "定制",
		"allProFeatures": "包含所有专业版功能",
		"dedicatedBenchmarkInfrastructure": "专用基准测试基础设施",
		"customLibraryIntegrations": "自定义库集成",
		"slaGuarantees": "SLA 保证",
		"prioritySupport": "优先支持",
		"contactSales": "联系销售"
	},
	productsHeader: {
		"products": "产品",
		"toolsAndServicesTo": "帮助您优化国际化策略的工具和服务。"
	},
	productsGrid: {
		"benchmarkDashboard": "基准测试仪表板",
		"interactiveChartsAndTables": "交互式图表和表格，比较 i18n 库在包大小、渲染时间和水合成本方面的差异。",
		"bundleAnalyzer": "包分析器",
		"uploadYourBuildOutput": "上传您的构建输出，获取关于 i18n 开销占包大小比例的详细细分。",
		"migrationAssistant": "迁移助手",
		"automatedCodemodsAndGuides": "自动化的 Codemod 和指南，用于在 i18n 库之间迁移，并将干扰降至最低。",
		"performanceMonitor": "性能监控",
		"continuousPerformanceTrackingFor": "为您 i18n 实现提供的持续性能跟踪。当翻译加载性能下降时获取警报。",
		"learnMore": "了解更多"
	},
	settingsHeader: {
		"settings": "设置",
		"manageYourAccountPreferences": "管理您的账户偏好和配置。",
		"manageYourAccount": "管理您的账户偏好和配置。"
	},
	profileSection: {
		"profile": "个人资料",
		"displayName": "显示名称",
		"email": "电子邮件"
	},
	preferencesSection: {
		"preferences": "偏好设置",
		"emailNotifications": "邮件通知",
		"receiveWeeklyBenchmark": "接收每周基准测试报告",
		"receiveWeeklyBenchmarkReports": "接收每周基准测试报告",
		"toggleNotifications": "切换通知",
		"darkMode": "深色模式",
		"useDarkColorScheme": "使用深色配色方案",
		"toggleDarkMode": "切换深色模式",
		"defaultLanguage": "默认语言",
		"englishEn": "英语 (en)",
		"frenchFr": "法语 (fr)",
		"germanDe": "德语 (de)",
		"spanishEs": "西班牙语 (es)",
		"japaneseJa": "日语 (ja)",
		"chineseSimplifiedZhCn": "简体中文 (zh-CN)",
		"arabicAr": "阿拉伯语 (ar)"
	},
	apiAccessSection: {
		"apiAccess": "API 访问",
		"apiKey": "API 密钥",
		"useThisKeyTo": "使用此密钥以编程方式访问基准测试 API。",
		"copy": "复制"
	},
	settingsFooter: {
		"cancel": "取消",
		"saveChanges": "保存更改"
	},
	teamHeader: {
		"ourTeam": "我们的团队",
		"meetThePeopleBehindI18n": "认识 i18n 基准测试背后的团队。这是一支因共同热爱伟大开发工具而凝聚在一起的多元化团队。"
	},
	teamGrid: {
		"sarahChen": "Sarah Chen",
		"founderLeadEngineer": "创始人兼首席工程师",
		"formerGoogleEngineerWith": "前 Google 工程师，拥有 10 年大规模构建国际化系统的经验。",
		"formerGoogleEngineerWith10": "前 Google 工程师，拥有 10 年大规模构建国际化系统的经验。",
		"marcusWeber": "Marcus Weber",
		"performanceEngineer": "性能工程师",
		"specializesInJavascriptPerformance": "专注于 JavaScript 性能优化和基准测试方法。曾任职于 Vercel。",
		"specializesInJavascriptPerformanceOptimization": "专注于 JavaScript 性能优化和基准测试方法。曾任职于 Vercel。",
		"aishaPatel": "Aisha Patel",
		"developerAdvocate": "开发者倡导者 (DevAdvocate)",
		"passionateAboutDeveloperExperience": "热衷于开发者体验和教育。React Conf, JSConf 和 i18nNext 的演讲者。",
		"passionateAboutDeveloperExperienceAnd": "热衷于开发者体验和教育。React Conf, JSConf 和 i18nNext 的演讲者。",
		"tomasRodriguez": "Tomás Rodríguez",
		"fullStackDeveloper": "全栈开发人员",
		"maintainsTheBenchmarkingInfrastructure": "负责维护基准测试基础设施和 CI/CD 管道。Lingui 的开源贡献者。",
		"maintainsTheBenchmarkingInfrastructureAnd": "负责维护基准测试基础设施和 CI/CD 管道。Lingui 的开源贡献者。",
		"yukiTanaka": "Yuki Tanaka",
		"dataAnalyst": "数据分析师",
		"ensuresStatisticalRigorIn": "确保所有基准测试结果的统计严谨性。MIT 应用统计学博士。",
		"ensuresStatisticalRigorInAll": "确保所有基准测试结果的统计严谨性。MIT 应用统计学博士。",
		"elenaKowalski": "Elena Kowalski",
		"communityManager": "社区经理",
		"managesCommunityContributions": "管理社区贡献、合作伙伴关系和活动。具有开源治理背景。",
		"managesCommunityContributionsPartnershipsAnd": "管理社区贡献、合作伙伴关系和活动。具有开源治理背景。"
	},
	mockBanner: "⚠️ 本页面包含仅用于基准测试目的的模拟数据。它与任何真实业务或服务无关。"
};
var tolgee = Tolgee().use(FormatSimple()).init({
	language: "en",
	apiUrl: void 0,
	apiKey: void 0,
	staticData: {
		en: en_default,
		de: de_default,
		es: es_default,
		fr: fr_default,
		it: it_default,
		ja: ja_default,
		ko: ko_default,
		pt: pt_default,
		ru: ru_default,
		zh: zh_default
	}
});
var messageModules = {
	de: de_default,
	en: en_default,
	es: es_default,
	fr: fr_default,
	it: it_default,
	ja: ja_default,
	ko: ko_default,
	pt: pt_default,
	ru: ru_default,
	zh: zh_default
};
function Wrapper({ children }) {
	return jsx(TolgeeProvider, {
		tolgee,
		options: { useSuspense: false },
		ssr: {
			language: "en",
			staticData: messageModules
		},
		children
	});
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(Footer, {}) });
}
export { Wrapped as default };
