import React, { Suspense, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { useRouter } from "next/navigation";
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
		t: (key, parameters) => t(key, parameters)
	};
}
function T(props) {
	return jsx(T$1, { ...props });
}
function ProductsGrid() {
	const { t } = useTranslate();
	const products = [
		{
			name: t("productsGrid.benchmarkDashboard"),
			desc: t("productsGrid.interactiveChartsAndTables"),
			price: t("pricingTiers.free")
		},
		{
			name: t("productsGrid.bundleAnalyzer"),
			desc: t("productsGrid.uploadYourBuildOutput"),
			price: "$29/mo"
		},
		{
			name: t("productsGrid.migrationAssistant"),
			desc: t("productsGrid.automatedCodemodsAndGuides"),
			price: t("pricingTiers.custom")
		},
		{
			name: t("productsGrid.performanceMonitor"),
			desc: t("productsGrid.continuousPerformanceTrackingFor"),
			price: "$49/mo"
		}
	];
	return jsx("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: products.map((p) => jsxs("div", {
			className: "flex flex-col justify-between rounded-lg border border-border bg-card p-6",
			children: [jsxs("div", { children: [jsx("h3", {
				className: "mb-2 text-lg font-semibold text-foreground",
				children: p.name
			}), jsx("p", {
				className: "mb-4 text-sm text-muted-foreground",
				children: p.desc
			})] }), jsxs("div", {
				className: "flex items-center justify-between",
				children: [jsx("span", {
					className: "text-sm font-bold text-primary",
					children: p.price
				}), jsx("button", {
					type: "button",
					className: "rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity",
					children: jsx(T, { keyName: "productsGrid.learnMore" })
				})]
			})]
		}, p.name))
	});
}
var route_default$9 = {
	oopsPageNotFound: "Oops! Page not found.",
	returnToHome: "Return to Home",
	"route.couldNotMeasureHydrationDuration": "Hydratationsdauer konnte nicht gemessen werden:",
	"route.oopsPageNotFound": "Hoppla! Seite nicht gefunden",
	"route.returnToHome": "Zurück zur Startseite"
};
var header_default$9 = {
	home: "Startseite",
	methodology: "Methodik",
	mockPages: "Testseiten",
	products: "Produkte",
	pricing: "Preise",
	team: "Team",
	blog: "Blog",
	careers: "Karriere",
	faq: "FAQ",
	contact: "Kontakt",
	settings: "Einstellungen",
	goToGithub: "Zu GitHub"
};
var footer_default$9 = {
	resources: "Ressourcen",
	contact: "Kontakt",
	github: "GitHub",
	methodology: "Methodik",
	contributing: "Beitragen",
	builtWith: "i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite und TanStack Router.",
	anOpenSourceTestApplication: "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladezeit und die Reaktivität der App."
};
var themeToggle_default$9 = {
	themeModeAutoSystemClick: "Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.",
	themeModeLightClick: "Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln.",
	themeModeDarkClick: "Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.",
	themeAuto: "Thema: Auto",
	themeDark: "Thema: Dunkel",
	themeLight: "Thema: Hell"
};
var hero_default$9 = {
	aTestApplicationDesignedTo: "Eine Testanwendung, die darauf ausgelegt ist, die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen.",
	viewResults: "Ergebnisse anzeigen"
};
var whyItMatters_default$9 = {
	whyTheseMetricsMatter: "Warum diese Kennzahlen wichtig sind",
	bundleSize: "Bundle-Größe",
	theBundleIsTheData: "Das Bundle stellt die Daten dar, die an jeden Benutzer weltweit gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — insbesondere bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren drastisch in ihrem Gewicht: von einigen Kilobyte bis zu Dutzenden von Kilobyte an Laufzeitcode, zusätzlich zu den Übersetzungsdateien selbst.",
	renderingHydration: "Rendering & Hydratation",
	connectingALargeJson: "Das Verbinden eines großen JSON-Wörterbuchs mit jeder Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydratisierung fügt das Parsen und Anhängen massiver Übersetzungsobjekte Latenz hinzu, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.",
	dynamicLoading: "Dynamisches Laden",
	loadingAllTranslationsUpfront: "Das Vorabladen aller Übersetzungen überlastet die anfängliche Payload. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namespace auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Aufblitzen nicht übersetzter Inhalte und Komplexität des Cachings. Die Messung beider Strategien ist unerlässlich."
};
var understandingImpact_default$9 = {
	cacheInvalidation: "Cache-Invalidierung:",
	contextBasedArchitecturesCan: "Context-based architectures can cause the entire app to re-render when the language changes. For large apps with thousands of components, this can lead to noticeable lag during locale switches.",
	contextBasedArchitecturesCanCause: "Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Gebietsschema ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.",
	duringServerSideRenderingThe: "Während des serverseitigen Renderings wird das vollständige Wörterbuch in die HTML-Payload serialisiert, wodurch die Größe des Dokuments erhöht wird, das heruntergeladen und hydratisiert werden muss.",
	flashOfUntranslatedContent: "Flash of Untranslated Content (FOUC)",
	flashOfUntranslatedContentFouc: "Aufblitzen von nicht übersetztem Inhalt (FOUC):",
	manyI18nLibrariesStore: "Many i18n libraries store translations in large JSON files that are loaded upfront. This can significantly increase the \"Time to Interactive\" as the browser must download and parse these files before the app can be used.",
	manyI18nLibrariesStoreTranslations: "Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verbraucht, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:",
	splittingTranslationsIntoPerRoute: "Das Aufteilen der Übersetzungen in Chunks pro Route oder Namespace kann die anfängliche Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:",
	theAppMustFirstLoad: "The app must first load the core library (e.g., i18next) which adds to the initial bundle size. Even \"lightweight\" libraries can add 10-20KB of minified JS.",
	theJsonMustBeParsed: "Das JSON muss bei jedem Seitenladen analysiert werden — was den Hauptthread blockiert.",
	theTradeOffsOfDynamic: "Die Kompromisse beim dynamischen Laden",
	thisTestAppProvidesA: "Diese Test-App bietet eine kontrollierte Umgebung — 10 Seiten mit realistischem Inhalt —, um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.",
	understandingTheImpact: "Die Auswirkungen verstehen",
	updatingTranslationsRequiresCache: "Updating translations often requires a full rebuild or clearing the CDN cache, which can delay the roll-out of critical copy changes.",
	usersMayBrieflySeeTranslation: "Users may briefly see translation keys or English text while the library and translation files are being loaded.",
	waterfallRequests: "Waterfall-Anfragen:",
	whatThisBenchmarkMeasures: "Was dieser Benchmark misst",
	whyASingleLargeJson: "Warum ein einziges großes JSON die Leistung beeinträchtigen kann"
};
var resultsTable_default$9 = {
	bundleSize: "Bundle-Größe",
	lazyLoading: "Lazy Loading",
	library: "Library",
	lookupTime: "Suchzeit",
	sampleResults: "Beispielergebnisse"
};
var aboutHeader_default$9 = {
	aboutThisBenchmark: "About This Benchmark",
	methodology: "Methodik",
	thisIsAnOpenSource: "This is an open-source test application for measuring the real-world impact of internationalization libraries.",
	weDesignedThisBenchmarkTo: "Wir haben diesen Benchmark so konzipiert, dass er faire, reproduzierbare und aussagekräftige Vergleiche von i18n-Bibliotheken ermöglicht."
};
var aboutGrid_default$9 = {
	allBenchmarksRunOn: "Alle Benchmarks laufen auf derselben Hardware (M2 MacBook Pro, 16 GB RAM), demselben Browser (Chromium 120 über Playwright) und denselben Netzwerkbedingungen (simuliertes 4G). Jeder Test wird 50 Mal wiederholt, und wir geben den Median mit P95/P99-Perzentilen an.",
	applicationDesign: "Anwendungsdesign",
	choosingAnI18nLibrary: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
	eachI18nLibraryIsIntegrated: "Jede i18n-Bibliothek wird gemäß ihrer offiziellen Dokumentation und Best Practices integriert. Wir konsultieren nach Möglichkeit die Maintainer, um eine optimale Konfiguration sicherzustellen. Dieselbe React-App, dieselbe Vite-Konfiguration, dasselbe Deployment.",
	fairComparison: "Fairer Vergleich",
	measurementMethodology: "Messmethodik",
	methodology: "Methodology",
	testEnvironment: "Testumgebung",
	theBenchmarkAppHas10: "Die Benchmark-App verfügt über 10 Seiten mit realistischem Inhalt — Navigation, Formulare, dynamische Listen und statischen Text. Jede Seite verwendet 15–30 Übersetzungsschlüssel, um reale Nutzungsmuster darzustellen.",
	theSame10PageApp: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.",
	weUseBrowserNativeApis: "Wir verwenden browsernative APIs (Performance Timeline, Resource Timing, Layout Instability) kombiniert mit React Profiler-Daten. Bundle-Größen werden nach dem Gzip-Verfahren mit source-map-explorer für die Genauigkeit gemessen.",
	whyThisExists: "Why This Exists"
};
var whatWeMeasure_default$9 = {
	bundleSizeImpact: "Auswirkung auf die Bundle-Größe",
	duringSsrTranslationDataIs: "Während des SSR werden Übersetzungsdaten in das HTML serialisiert. Große Wörterbücher erhöhen die HTML-Payload und verlangsamen die Hydratation — den Moment, in dem die Seite interaktiv wird.",
	duringSsrTranslationDataIsSerialized: "During SSR, translation data is serialized into the HTML. We measure the size of this payload and its effect on Time to Interactive (TTI).",
	howFastTheAppCan: "Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderings von Komponenten und der Aktualisierung des DOM.",
	howFastTheAppCanSwitchFromOne: "How fast the app can switch from one language to another. We measure the re-render time and any network delays for lazy-loaded locales.",
	howMuchExtraTimeThe: "Wie viel zusätzliche Zeit die i18n-Schicht zu jedem Komponenten-Rendering hinzufügt — gemessen mit actualDuration des React Profilers.",
	howMuchExtraTimeTheLibraryAdds: "How much extra time the library adds to the initial page load. This includes script execution and the time to fetch/parse translation data.",
	hydrationCost: "Hydratationskosten",
	lazyLoadingEffectiveness: "Effektivität von Lazy Loading",
	localeSwitchSpeed: "Geschwindigkeit des Sprachwechsels",
	renderingOverhead: "Rendering-Overhead",
	theAdditionalJavascriptBytes: "The additional Javascript bytes that the library adds to your production build. We measure both the library itself and its mandatory dependencies.",
	theAdditionalJavascriptBytesSent: "Die zusätzlichen JavaScript-Bytes, die speziell aufgrund der Laufzeit der i18n-Bibliothek an den Client gesendet werden, plus die Übersetzungsdateien für das aktuelle Gebietsschema.",
	whatWeMeasure: "Was wir messen",
	whetherSplittingTranslationsByRoute: "Ob das Aufteilen von Übersetzungen nach Route oder Namespace die anfängliche Belastung tatsächlich reduziert und welche Kompromisse es mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität)."
};
var blogHeader_default$9 = {
	blog: "Blog",
	insightsDeepDivesAnd: "Einblicke, tiefgehende Analysen und Updates aus der i18n-Benchmarking-Community.",
	insightsTutorialsAndAnalysis: "Insights, Tutorials, and Analysis"
};
var blogList_default$9 = {
	aStepByStepGuide: "Schritt-für-Schritt-Anleitung für die Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.",
	aStepByStepGuideOnMigrating: "A step-by-step guide on migrating from legacy i18n solutions to modern, high-performance libraries.",
	aTransparentLookAtOur: "Ein transparenter Einblick in unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.",
	aTransparentLookAtOurBenchmarking: "A transparent look at our benchmarking process, from hardware specs to measurement techniques.",
	anOverviewOfTheCurrent: "Eine Übersicht über das aktuelle i18n-Ökosystem, Vergleich von Ansätzen von Nachrichtenkatalogen bis hin zu compilerbasierten Lösungen.",
	anOverviewOfTheCurrentI18n: "An overview of the current i18n landscape and how different libraries stack up in 2026.",
	analysis: "Analysis",
	benchmark: "Benchmark",
	benchmarkMethodologyHowWe: "Benchmark Methodology: How We Test",
	benchmarkMethodologyHowWeTest: "Benchmark-Methodik: Wie wir testen",
	comparingI18nLibrariesIn: "Comparing i18n Libraries in 2026: A Deep Dive",
	february12026: "1. Februar 2026",
	february152026: "15. Februar 2026",
	february282026: "28. Februar 2026",
	howToReduceYourI18n: "So reduzieren Sie Ihr i18n-Bundle um 60 %",
	i18nBenchmark2026Results: "i18n Benchmark 2026 Ergebnisse",
	january202026: "20. Januar 2026",
	march152026: "15. März 2026",
	march82026: "8. März 2026",
	meta: "Meta",
	migratingFromReactI18nextTo: "Migration von react-i18next zu Lingui",
	practicalStrategiesForOptimizingTranslation: "Praktische Strategien zur Optimierung des Ladens von Übersetzungsdateien, Tree-Shaking nicht verwendeter Gebietsschemata und Nutzung der Kompilierung zur Erstellungszeit.",
	reactServerComponentsIntroduceNew: "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.",
	readMore: "Mehr lesen →",
	serverComponentsAndI18nWhat: "Server Components und i18n: Was ändert sich?",
	theStateOfInternationalizationIn: "Der Stand der Internationalisierung im Jahr 2026",
	tutorial: "Tutorial",
	weTested12DifferentInternationalization: "Wir haben 12 verschiedene Internationalisierungsbibliotheken auf 10 Seiten getestet. Hier sind die detaillierten Ergebnisse mit interaktiven Diagrammen."
};
var careersHeader_default$9 = {
	careers: "Karriere",
	joinOurMission: "Join our mission to make internationalization fast, easy, and performant for everyone.",
	joinOurMissionToMake: "Helfen Sie uns bei unserer Mission, das Internet für alle und überall schneller und zugänglicher zu machen."
};
var careersBenefits_default$9 = {
	allOurWorkIs: "Unsere gesamte Arbeit ist Open Source. Bauen Sie Ihr öffentliches Portfolio auf, während Sie etwas bewirken.",
	competitivePay: "Competitive pay",
	impactful: "Wirkungsvoll",
	openSource: "Open Source",
	openSourceTime: "Open source time",
	percentTimeForOss: "20% time for OSS contributions",
	remoteFirst: "Remote-First",
	topOfMarketCompensation: "Top-of-market compensation",
	whyJoinUs: "Warum zu uns kommen?",
	workFromAnywhere: "Work from anywhere in the world",
	workFromAnywhereFully: "Arbeiten Sie von überall. Vollständig verteiltes Team in 6 Zeitzonen.",
	yourWorkDirectlyHelps: "Ihre Arbeit hilft Entwicklern direkt dabei, bessere und schnellere internationalisierte Anwendungen zu erstellen."
};
var openPositions_default$9 = {
	applyNow: "Apply Now",
	backendEngineer: "Backend Engineer",
	buildAndMaintainOur: "Build and maintain our benchmarking suite and core application infrastructure.",
	buildAndMaintainThe: "Erstellen und pflegen Sie das Benchmark-Dashboard, Vergleichstools und interaktive Visualisierungen.",
	community: "Community",
	createAndMaintainDocumentation: "Erstellen und pflegen Sie Dokumentationen, Blog-Beiträge und Schulungsinhalte zu Best Practices für die i18n-Leistung.",
	createComprehensiveGuidesApi: "Create comprehensive guides, API references, and tutorials for the community.",
	designAndMaintainThe: "Design und Wartung der CI/CD-Pipeline, die Benchmarks automatisch bei jedem Bibliotheks-Update ausführt.",
	designAndScaleOur: "Design and scale our data ingestion pipelines and statistical analysis engines.",
	devOpsEngineer: "DevOps-Ingenieur",
	devrelEngineer: "DevRel Engineer",
	documentation: "Documentation",
	engageWithTheI18n: "Engage with the i18n community, write blog posts, and speak at conferences.",
	engineering: "Engineering",
	ensureTheAccuracyAnd: "Ensure the accuracy and reliability of our benchmarks through rigorous testing.",
	frontendDeveloper: "Frontend-Entwickler",
	fullTime: "Full-time",
	leadBenchmarkDesignAnd: "Leiten Sie das Benchmark-Design und die Implementierung. Fundierte Kenntnisse der V8-Interna, der Browser-Performance-APIs und der statistischen Analyse erforderlich.",
	openPositions: "Open Positions",
	partTime: "Part-time",
	qaEngineer: "QA Engineer",
	remote: "Remote",
	seniorFrontendEngineer: "Senior Frontend Engineer",
	seniorPerformanceEngineer: "Senior Performance Engineer",
	sfRemote: "San Francisco / Remote",
	technicalWriter: "Technical Writer"
};
var contactHeader_default$9 = {
	contactUs: "Kontaktieren Sie uns",
	getInTouch: "Kontakt aufnehmen",
	haveIdeasFoundABug: "Haben Sie Ideen? Einen Fehler gefunden? Wir freuen uns auf Ihre Nachricht.",
	haveQuestionsOrWantTo: "Haben Sie Fragen oder möchten Sie einen Beitrag leisten? Wir würden uns freuen, von Ihnen zu hören."
};
var contactForm_default$9 = {
	bugReport: "Fehlerbericht",
	contribution: "Contribution",
	email: "E-Mail",
	emailPlaceholder: "you@example.com",
	message: "Nachricht",
	messagePlaceholder: "Ihre Nachricht...",
	methodologyQuestion: "Methodology Question",
	name: "Name",
	newBenchmarkIdea: "New Benchmark Idea",
	other: "Other",
	sendMessage: "Nachricht senden",
	subject: "Betreff",
	topic: "Thema",
	wellGetBackTo: "Wir melden uns innerhalb von 48 Stunden bei Ihnen.",
	yourName: "Ihr Name"
};
var faqHeader_default$9 = {
	everythingYouNeedToKnow: "Alles, was Sie uber i18n Benchmark wissen mussen.",
	frequentlyAskedQuestions: "Haufig gestellte Fragen"
};
var faqList_default$9 = {
	absolutelyWeWelcomeCommunity: "Absolut! Wir begrüßen Beiträge aus der Community. Forken Sie das Repository, fügen Sie Ihre Bibliotheksintegration gemäß unserer Vorlage hinzu und senden Sie einen Pull-Request.",
	allBenchmarksAreRun: "Alle Benchmarks werden mit Playwright auf einem einheitlichen Hardware-Setup (M2 MacBook Pro) mit simulierten 4G-Netzwerkbedingungen ausgeführt. Jeder Test umfasst 50 Iterationen, und wir geben den Median, P95- und P99-Werte an.",
	areTheResultsStatistically: "Sind die Ergebnisse statistisch signifikant?",
	benchmarksRunAutomaticallyVia: "Benchmarks laufen automatisch über CI bei jedem Dependency-Update und wöchentlich auf dem Main-Branch. Ergebnisse werden innerhalb von 24 Stunden auf dem Dashboard veröffentlicht.",
	canIContributeA: "Kann ich eine neue Bibliotheksintegration beisteuern?",
	canISubmitMyOwnBenchmarks: "Kann ich meine eigenen Benchmarks einreichen?",
	doYouOfferConsultingServices: "Bieten Sie Beratungsleistungen an?",
	howAreBenchmarksConducted: "Wie werden Benchmarks durchgefuhrt?",
	howAreTheBenchmarks: "Wie werden die Benchmarks durchgeführt?",
	howCanIContribute: "Wie kann ich beitragen?",
	howOftenAreBenchmarksUpdated: "Wie oft werden Benchmarks aktualisiert?",
	howOftenAreResults: "Wie oft werden die Ergebnisse aktualisiert?",
	i18nBenchmarkIsAnOpenSource: "i18n Benchmark is an open-source project dedicated to measuring the real-world performance impact of internationalization libraries.",
	isTheDataReliable: "Sind die Daten zuverlassig?",
	thereAreManyWaysToContribute: "There are many ways to contribute, from submitting new benchmarks to improving our methodology documentation.",
	weCurrentlyBenchmarkReactI18next: "Wir benchmarken derzeit react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl und Paraglide. Wir planen, basierend auf Community-Anfragen weitere hinzuzufügen.",
	weFollowRigorousStatisticalMethodologyIncluding: "We follow rigorous statistical methodology, including outlier detection and multiple test runs to ensure accuracy.",
	weReRunAllBenchmarksWeekly: "We re-run all benchmarks weekly against the latest versions of each library.",
	weRunStandardizedTestsInIsolated: "We run standardized tests in isolated environments, measuring bundle size, render time, and memory usage across dozens of libraries.",
	weSupportReactI18nextReactIntl: "We support react-i18next, react-intl, Lingui, Tolgee, and several other popular React i18n solutions.",
	whatIsI18nBenchmark: "Was ist i18n Benchmark?",
	whatLibrariesAreCurrently: "Welche Bibliotheken werden derzeit getestet?",
	whichLibrariesAreCurrentlySupported: "Welche Bibliotheken werden derzeit unterstutzt?",
	yesCommunityBenchmarkSubmissionsAre: "Yes! Community benchmark submissions are encouraged and reviewed by our core team.",
	yesOurEnterprisePlanIncludesConsulting: "Yes, our Enterprise plan includes consulting services for optimizing your app's i18n performance.",
	yesWeUseThe: "Ja. Wir verwenden den Mann-Whitney-U-Test mit einem Signifikanzniveau von 0,05, um Verteilungen zu vergleichen. Wir geben auch Konfidenzintervalle und Effektstärken an."
};
var pricingHeader_default$9 = {
	pricing: "Preise",
	transparentPricingForEvery: "Transparente Preise für jede Phase Ihrer i18n-Reise."
};
var pricingTiers_default$9 = {
	freeTier: "Kostenlose Stufe",
	free: "Kostenlos",
	publicBenchmarkDashboard: "Öffentliches Benchmark-Dashboard",
	basicLibraryComparisons: "Einfache Bibliotheksvergleiche",
	communityForumAccess: "Zugang zum Community-Forum",
	monthlyResultDigest: "Monatliche Ergebniszusammenfassung",
	getStarted: "Loslegen",
	proTier: "Pro-Stufe",
	perMonth: "/Monat",
	allFreeFeatures: "Alle kostenlosen Funktionen",
	customBenchmarkConfigurations: "Benutzerdefinierte Benchmark-Konfigurationen",
	privateResultsDashboard: "Privates Ergebnis-Dashboard",
	apiAccess1000Requests: "API-Zugriff (1.000 Anfragen/Tag)",
	slackIntegration: "Slack-Integration",
	subscribeToPro: "Pro abonnieren",
	enterpriseTier: "Enterprise-Stufe",
	custom: "Individuell",
	allProFeatures: "Alle Pro-Funktionen",
	dedicatedBenchmarkInfrastructure: "Dedizierte Benchmark-Infrastruktur",
	customLibraryIntegrations: "Benutzerdefinierte Bibliotheksintegrationen",
	slaGuarantees: "SLA-Garantien",
	prioritySupport: "Priorisierter Support",
	contactSales: "Vertrieb kontaktieren"
};
var productsHeader_default$9 = {
	products: "Produkte",
	toolsAndServicesTo: "Tools und Services unterstützen Sie bei der Optimierung Ihrer Internationalisierungsstrategie."
};
var productsGrid_default$9 = {
	benchmarkDashboard: "Benchmark-Dashboard",
	interactiveChartsAndTables: "Interaktive Diagramme und Tabellen, die i18n-Bibliotheken hinsichtlich Bundle-Größe, Renderzeit und Hydratationskosten vergleichen.",
	bundleAnalyzer: "Bundle-Analyzer",
	uploadYourBuildOutput: "Laden Sie Ihren Build-Output hoch und erhalten Sie eine detaillierte Aufschlüsselung, wie viel von Ihrem Bundle i18n-Overhead ist.",
	migrationAssistant: "Migrationsassistent",
	automatedCodemodsAndGuides: "Automatisierte Codemods und Anleitungen für die Migration zwischen i18n-Bibliotheken mit minimaler Unterbrechung.",
	performanceMonitor: "Leistungsmonitor",
	continuousPerformanceTrackingFor: "Kontinuierliche Leistungsverfolgung für Ihre i18n-Implementierung. Erhalten Sie Warnungen, wenn sich das Laden von Übersetzungen verschlechtert.",
	learnMore: "Mehr erfahren"
};
var settingsHeader_default$9 = {
	manageYourAccount: "Manage your account settings and preferences.",
	manageYourAccountPreferences: "Verwalten Sie Ihre Kontoeinstellungen und -konfigurationen.",
	settings: "Einstellungen"
};
var profileSection_default$9 = {
	profile: "Profil",
	displayName: "Anzeigename",
	email: "E-Mail"
};
var preferencesSection_default$9 = {
	arabicAr: "Arabic (ar)",
	chineseSimplifiedZhCn: "Chinese (Simplified, zh-CN)",
	darkMode: "Dunkelmodus",
	defaultLanguage: "Standardsprache",
	emailNotifications: "E-Mail-Benachrichtigungen",
	englishEn: "English (en)",
	frenchFr: "French (fr)",
	germanDe: "German (de)",
	japaneseJa: "Japanese (ja)",
	preferences: "Einstellungen",
	receiveWeeklyBenchmark: "Receive weekly benchmark reports",
	receiveWeeklyBenchmarkReports: "Wöchentliche Benchmark-Berichte erhalten",
	spanishEs: "Spanish (es)",
	toggleDarkMode: "Toggle dark mode",
	toggleNotifications: "Toggle Notifications",
	useDarkColorScheme: "Dunkles Farbschema verwenden"
};
var apiAccessSection_default$9 = {
	apiAccess: "API-Zugriff",
	apiKey: "API-Schlüssel",
	useThisKeyTo: "Verwenden Sie diesen Schlüssel für den programmgesteuerten Zugriff auf die Benchmarking-API.",
	copy: "Kopieren"
};
var settingsFooter_default$9 = {
	cancel: "Abbrechen",
	saveChanges: "Änderungen speichern"
};
var teamHeader_default$9 = {
	ourTeam: "Unser Team",
	meetThePeopleBehindI18n: "Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, vereint durch die Leidenschaft für großartige Entwicklertools."
};
var teamGrid_default$9 = {
	aishaPatel: "Aisha Patel",
	communityManager: "Community Manager",
	dataAnalyst: "Data Analyst",
	developerAdvocate: "Developer Advocate",
	elenaKowalski: "Elena Kowalski",
	ensuresStatisticalRigorIn: "Ensures statistical rigor in our data collection and analysis.",
	ensuresStatisticalRigorInAll: "Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. PhD in Angewandter Statistik vom MIT.",
	formerGoogleEngineerWith: "Former Google engineer with a passion for web performance and open source.",
	formerGoogleEngineerWith10: "Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.",
	founderLeadEngineer: "Founder & Lead Engineer",
	fullStackDeveloper: "Full-Stack Developer",
	maintainsTheBenchmarkingInfrastructure: "Maintains the benchmarking infrastructure and CI/CD pipelines.",
	maintainsTheBenchmarkingInfrastructureAnd: "Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Contributor bei Lingui.",
	managesCommunityContributions: "Manages community contributions and open source outreach.",
	managesCommunityContributionsPartnershipsAnd: "Verwaltet Community-Beiträge, Partnerschaften und Events. Hintergrund in Open-Source-Governance.",
	marcusWeber: "Marcus Weber",
	passionateAboutDeveloperExperience: "Passionate about developer experience and building intuitive APIs.",
	passionateAboutDeveloperExperienceAnd: "Begeistert von Entwicklererfahrung und Bildung. Sprecherin bei React Conf, JSConf und i18nNext.",
	performanceEngineer: "Performance Engineer",
	sarahChen: "Sarah Chen",
	specializesInJavascriptPerformance: "Specializes in JavaScript performance optimization and React internals.",
	specializesInJavascriptPerformanceOptimization: "Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.",
	tomasRodriguez: "Tomás Rodríguez",
	yukiTanaka: "Yuki Tanaka"
};
var common_default$9 = {
	cancel: "Cancel",
	copy: "Copy",
	"footer.anOpenSourceTestApplication": "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladezeit und die Reaktivität der App.",
	"footer.builtWith": "i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite und TanStack Router.",
	"footer.contact": "Kontakt",
	"footer.contributing": "Beitragen",
	"footer.github": "GitHub",
	"footer.methodology": "Methodik",
	"footer.resources": "Ressourcen",
	"header.blog": "Blog",
	"header.careers": "Karriere",
	"header.contact": "Kontakt",
	"header.faq": "FAQ",
	"header.goToGithub": "Zu GitHub",
	"header.home": "Startseite",
	"header.methodology": "Methodik",
	"header.mockPages": "Testseiten",
	"header.pricing": "Preise",
	"header.products": "Produkte",
	"header.settings": "Einstellungen",
	"header.team": "Team",
	mockBanner: "⚠️ Diese Seite enthält fiktive Daten, die nur Benchmark-Zwecken dienen. Sie stehen in keinem Zusammenhang mit realen Unternehmen oder Dienstleistungen.",
	readMore: "Read More",
	saveChanges: "Save Changes",
	"themeToggle.themeAuto": "Thema: Auto",
	"themeToggle.themeDark": "Thema: Dunkel",
	"themeToggle.themeLight": "Thema: Hell",
	"themeToggle.themeModeAutoSystemClick": "Themenmodus: Auto (System). Klicken, um in den hellen Modus zu wechseln.",
	"themeToggle.themeModeDarkClick": "Themenmodus: Dunkel. Klicken, um in den Auto-Modus (System) zu wechseln.",
	"themeToggle.themeModeLightClick": "Themenmodus: Hell. Klicken, um in den dunklen Modus zu wechseln."
};
var home_default$9 = {
	"hero.aTestApplicationDesignedTo": "Eine Testanwendung, die darauf ausgelegt ist, die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen.",
	"hero.viewResults": "Ergebnisse anzeigen",
	"whyItMatters.whyTheseMetricsMatter": "Warum diese Kennzahlen wichtig sind",
	"whyItMatters.bundleSize": "Bundle-Größe",
	"whyItMatters.theBundleIsTheData": "Das Bundle stellt die Daten dar, die an jeden Benutzer weltweit gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — insbesondere bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren drastisch in ihrem Gewicht: von einigen Kilobyte bis zu Dutzenden von Kilobyte an Laufzeitcode, zusätzlich zu den Übersetzungsdateien selbst.",
	"whyItMatters.renderingHydration": "Rendering & Hydratation",
	"whyItMatters.connectingALargeJson": "Das Verbinden eines großen JSON-Wörterbuchs mit jeder Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydratisierung fügt das Parsen und Anhängen massiver Übersetzungsobjekte Latenz hinzu, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.",
	"whyItMatters.dynamicLoading": "Dynamisches Laden",
	"whyItMatters.loadingAllTranslationsUpfront": "Das Vorabladen aller Übersetzungen überlastet die anfängliche Payload. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namespace auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Aufblitzen nicht übersetzter Inhalte und Komplexität des Cachings. Die Messung beider Strategien ist unerlässlich.",
	"understandingImpact.understandingTheImpact": "Die Auswirkungen verstehen",
	"understandingImpact.whyASingleLargeJson": "Warum ein einziges großes JSON die Leistung beeinträchtigen kann",
	"understandingImpact.manyI18nLibrariesStoreTranslations": "Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verbraucht, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:",
	"understandingImpact.theJsonMustBeParsed": "Das JSON muss bei jedem Seitenladen analysiert werden — was den Hauptthread blockiert.",
	"understandingImpact.contextBasedArchitecturesCanCause": "Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Gebietsschema ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.",
	"understandingImpact.duringServerSideRenderingThe": "Während des serverseitigen Renderings wird das vollständige Wörterbuch in die HTML-Payload serialisiert, wodurch die Größe des Dokuments erhöht wird, das heruntergeladen und hydratisiert werden muss.",
	"understandingImpact.theTradeOffsOfDynamic": "Die Kompromisse beim dynamischen Laden",
	"understandingImpact.splittingTranslationsIntoPerRoute": "Das Aufteilen der Übersetzungen in Chunks pro Route oder Namespace kann die anfängliche Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:",
	"understandingImpact.waterfallRequests": "Waterfall-Anfragen:",
	"understandingImpact.flashOfUntranslatedContentFouc": "Aufblitzen von nicht übersetztem Inhalt (FOUC):",
	"understandingImpact.cacheInvalidation": "Cache-Invalidierung:",
	"understandingImpact.whatThisBenchmarkMeasures": "Was dieser Benchmark misst",
	"understandingImpact.thisTestAppProvidesA": "Diese Test-App bietet eine kontrollierte Umgebung — 10 Seiten mit realistischem Inhalt —, um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.",
	"resultsTable.sampleResults": "Beispielergebnisse",
	"resultsTable.bundleSize": "Bundle-Größe",
	"resultsTable.lookupTime": "Suchzeit",
	"resultsTable.lazyLoading": "Lazy Loading"
};
var about_default$9 = {
	"aboutHeader.methodology": "Methodik",
	"aboutHeader.weDesignedThisBenchmarkTo": "Wir haben diesen Benchmark so konzipiert, dass er faire, reproduzierbare und aussagekräftige Vergleiche von i18n-Bibliotheken ermöglicht.",
	"aboutGrid.testEnvironment": "Testumgebung",
	"aboutGrid.allBenchmarksRunOn": "Alle Benchmarks laufen auf derselben Hardware (M2 MacBook Pro, 16 GB RAM), demselben Browser (Chromium 120 über Playwright) und denselben Netzwerkbedingungen (simuliertes 4G). Jeder Test wird 50 Mal wiederholt, und wir geben den Median mit P95/P99-Perzentilen an.",
	"aboutGrid.applicationDesign": "Anwendungsdesign",
	"aboutGrid.theBenchmarkAppHas10": "Die Benchmark-App verfügt über 10 Seiten mit realistischem Inhalt — Navigation, Formulare, dynamische Listen und statischen Text. Jede Seite verwendet 15–30 Übersetzungsschlüssel, um reale Nutzungsmuster darzustellen.",
	"aboutGrid.measurementMethodology": "Messmethodik",
	"aboutGrid.weUseBrowserNativeApis": "Wir verwenden browsernative APIs (Performance Timeline, Resource Timing, Layout Instability) kombiniert mit React Profiler-Daten. Bundle-Größen werden nach dem Gzip-Verfahren mit source-map-explorer für die Genauigkeit gemessen.",
	"aboutGrid.fairComparison": "Fairer Vergleich",
	"aboutGrid.eachI18nLibraryIsIntegrated": "Jede i18n-Bibliothek wird gemäß ihrer offiziellen Dokumentation und Best Practices integriert. Wir konsultieren nach Möglichkeit die Maintainer, um eine optimale Konfiguration sicherzustellen. Dieselbe React-App, dieselbe Vite-Konfiguration, dasselbe Deployment.",
	"whatWeMeasure.bundleSizeImpact": "Auswirkung auf die Bundle-Größe",
	"whatWeMeasure.theAdditionalJavascriptBytesSent": "Die zusätzlichen JavaScript-Bytes, die speziell aufgrund der Laufzeit der i18n-Bibliothek an den Client gesendet werden, plus die Übersetzungsdateien für das aktuelle Gebietsschema.",
	"whatWeMeasure.renderingOverhead": "Rendering-Overhead",
	"whatWeMeasure.howMuchExtraTimeThe": "Wie viel zusätzliche Zeit die i18n-Schicht zu jedem Komponenten-Rendering hinzufügt — gemessen mit actualDuration des React Profilers.",
	"whatWeMeasure.hydrationCost": "Hydratationskosten",
	"whatWeMeasure.duringSsrTranslationDataIs": "Während des SSR werden Übersetzungsdaten in das HTML serialisiert. Große Wörterbücher erhöhen die HTML-Payload und verlangsamen die Hydratation — den Moment, in dem die Seite interaktiv wird.",
	"whatWeMeasure.lazyLoadingEffectiveness": "Effektivität von Lazy Loading",
	"whatWeMeasure.whetherSplittingTranslationsByRoute": "Ob das Aufteilen von Übersetzungen nach Route oder Namespace die anfängliche Belastung tatsächlich reduziert und welche Kompromisse es mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).",
	"whatWeMeasure.localeSwitchSpeed": "Geschwindigkeit des Sprachwechsels",
	"whatWeMeasure.howFastTheAppCan": "Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderings von Komponenten und der Aktualisierung des DOM.",
	"whatWeMeasure.whatWeMeasure": "Was wir messen"
};
var blog_default$9 = {
	"blogHeader.blog": "Blog",
	"blogHeader.insightsDeepDivesAnd": "Einblicke, tiefgehende Analysen und Updates aus der i18n-Benchmarking-Community.",
	"blogList.i18nBenchmark2026Results": "i18n Benchmark 2026 Ergebnisse",
	"blogList.march152026": "15. März 2026",
	"blogList.weTested12DifferentInternationalization": "Wir haben 12 verschiedene Internationalisierungsbibliotheken auf 10 Seiten getestet. Hier sind die detaillierten Ergebnisse mit interaktiven Diagrammen.",
	"blogList.howToReduceYourI18n": "So reduzieren Sie Ihr i18n-Bundle um 60 %",
	"blogList.march82026": "8. März 2026",
	"blogList.practicalStrategiesForOptimizingTranslation": "Praktische Strategien zur Optimierung des Ladens von Übersetzungsdateien, Tree-Shaking nicht verwendeter Gebietsschemata und Nutzung der Kompilierung zur Erstellungszeit.",
	"blogList.theStateOfInternationalizationIn": "Der Stand der Internationalisierung im Jahr 2026",
	"blogList.february282026": "28. Februar 2026",
	"blogList.anOverviewOfTheCurrent": "Eine Übersicht über das aktuelle i18n-Ökosystem, Vergleich von Ansätzen von Nachrichtenkatalogen bis hin zu compilerbasierten Lösungen.",
	"blogList.migratingFromReactI18nextTo": "Migration von react-i18next zu Lingui",
	"blogList.february152026": "15. Februar 2026",
	"blogList.aStepByStepGuide": "Schritt-für-Schritt-Anleitung für die Migration einer Produktions-App mit 50.000 Übersetzungsschlüsseln von react-i18next zu Lingui.",
	"blogList.serverComponentsAndI18nWhat": "Server Components und i18n: Was ändert sich?",
	"blogList.february12026": "1. Februar 2026",
	"blogList.reactServerComponentsIntroduceNew": "React Server Components führen neue Muster für die Internationalisierung ein. Wir untersuchen die Auswirkungen und Best Practices.",
	"blogList.benchmarkMethodologyHowWeTest": "Benchmark-Methodik: Wie wir testen",
	"blogList.january202026": "20. Januar 2026",
	"blogList.aTransparentLookAtOur": "Ein transparenter Einblick in unsere Benchmarking-Methodik, einschließlich Testumgebungen, statistischer Methoden und Reproduzierbarkeit.",
	"blogList.readMore": "Mehr lesen →"
};
var careers_default$9 = {
	"careersHeader.careers": "Karriere",
	"careersHeader.joinOurMissionToMake": "Helfen Sie uns bei unserer Mission, das Internet für alle und überall schneller und zugänglicher zu machen.",
	"careersBenefits.whyJoinUs": "Warum zu uns kommen?",
	"careersBenefits.remoteFirst": "Remote-First",
	"careersBenefits.workFromAnywhereFully": "Arbeiten Sie von überall. Vollständig verteiltes Team in 6 Zeitzonen.",
	"careersBenefits.openSource": "Open Source",
	"careersBenefits.allOurWorkIs": "Unsere gesamte Arbeit ist Open Source. Bauen Sie Ihr öffentliches Portfolio auf, während Sie etwas bewirken.",
	"careersBenefits.impactful": "Wirkungsvoll",
	"careersBenefits.yourWorkDirectlyHelps": "Ihre Arbeit hilft Entwicklern direkt dabei, bessere und schnellere internationalisierte Anwendungen zu erstellen.",
	"openPositions.openPositions": "Offene Stellen",
	"openPositions.seniorPerformanceEngineer": "Senior Performance Engineer",
	"openPositions.fullTime": "Vollzeit",
	"openPositions.remote": "Remote",
	"openPositions.leadBenchmarkDesignAnd": "Leiten Sie das Benchmark-Design und die Implementierung. Fundierte Kenntnisse der V8-Interna, der Browser-Performance-APIs und der statistischen Analyse erforderlich.",
	"openPositions.technicalWriter": "Technischer Redakteur",
	"openPositions.partTime": "Teilzeit",
	"openPositions.createAndMaintainDocumentation": "Erstellen und pflegen Sie Dokumentationen, Blog-Beiträge und Schulungsinhalte zu Best Practices für die i18n-Leistung.",
	"openPositions.frontendDeveloper": "Frontend-Entwickler",
	"openPositions.buildAndMaintainThe": "Erstellen und pflegen Sie das Benchmark-Dashboard, Vergleichstools und interaktive Visualisierungen.",
	"openPositions.devOpsEngineer": "DevOps-Ingenieur",
	"openPositions.designAndMaintainThe": "Design und Wartung der CI/CD-Pipeline, die Benchmarks automatisch bei jedem Bibliotheks-Update ausführt.",
	"openPositions.applyNow": "Jetzt bewerben"
};
var contact_default$9 = {
	"contactHeader.contactUs": "Kontaktieren Sie uns",
	"contactHeader.haveQuestionsOrWantTo": "Haben Sie Fragen oder möchten Sie einen Beitrag leisten? Wir würden uns freuen, von Ihnen zu hören.",
	"contactForm.name": "Name",
	"contactForm.email": "E-Mail",
	"contactForm.subject": "Betreff",
	"contactForm.message": "Nachricht",
	"contactForm.sendMessage": "Nachricht senden",
	"contactForm.wellGetBackTo": "Wir melden uns innerhalb von 48 Stunden bei Ihnen."
};
var faq_default$9 = {
	"faqHeader.frequentlyAskedQuestions": "Häufig gestellte Fragen",
	"faqHeader.everythingYouNeedTo": "Alles, was Sie über das i18n-Benchmark-Projekt wissen müssen.",
	"faqList.howAreTheBenchmarks": "Wie werden die Benchmarks durchgeführt?",
	"faqList.allBenchmarksAreRun": "Alle Benchmarks werden mit Playwright auf einem einheitlichen Hardware-Setup (M2 MacBook Pro) mit simulierten 4G-Netzwerkbedingungen ausgeführt. Jeder Test umfasst 50 Iterationen, und wir geben den Median, P95- und P99-Werte an.",
	"faqList.whatLibrariesAreCurrently": "Welche Bibliotheken werden derzeit getestet?",
	"faqList.weCurrentlyBenchmarkReactI18next": "Wir benchmarken derzeit react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl und Paraglide. Wir planen, basierend auf Community-Anfragen weitere hinzuzufügen.",
	"faqList.canIContributeA": "Kann ich eine neue Bibliotheksintegration beisteuern?",
	"faqList.absolutelyWeWelcomeCommunity": "Absolut! Wir begrüßen Beiträge aus der Community. Forken Sie das Repository, fügen Sie Ihre Bibliotheksintegration gemäß unserer Vorlage hinzu und senden Sie einen Pull-Request.",
	"faqList.howOftenAreResults": "Wie oft werden die Ergebnisse aktualisiert?",
	"faqList.benchmarksRunAutomaticallyVia": "Benchmarks laufen automatisch über CI bei jedem Dependency-Update und wöchentlich auf dem Main-Branch. Ergebnisse werden innerhalb von 24 Stunden auf dem Dashboard veröffentlicht.",
	"faqList.areTheResultsStatistically": "Sind die Ergebnisse statistisch signifikant?",
	"faqList.yesWeUseThe": "Ja. Wir verwenden den Mann-Whitney-U-Test mit einem Signifikanzniveau von 0,05, um Verteilungen zu vergleichen. Wir geben auch Konfidenzintervalle und Effektstärken an."
};
var pricing_default$9 = {
	"pricingHeader.pricing": "Preise",
	"pricingHeader.transparentPricingForEvery": "Transparente Preise für jede Phase Ihrer i18n-Reise.",
	"pricingTiers.freeTier": "Kostenlose Stufe",
	"pricingTiers.free": "Kostenlos",
	"pricingTiers.publicBenchmarkDashboard": "Öffentliches Benchmark-Dashboard",
	"pricingTiers.basicLibraryComparisons": "Einfache Bibliotheksvergleiche",
	"pricingTiers.communityForumAccess": "Zugang zum Community-Forum",
	"pricingTiers.monthlyResultDigest": "Monatliche Ergebniszusammenfassung",
	"pricingTiers.getStarted": "Loslegen",
	"pricingTiers.proTier": "Pro-Stufe",
	"pricingTiers.perMonth": "/Monat",
	"pricingTiers.allFreeFeatures": "Alle kostenlosen Funktionen",
	"pricingTiers.customBenchmarkConfigurations": "Benutzerdefinierte Benchmark-Konfigurationen",
	"pricingTiers.privateResultsDashboard": "Privates Ergebnis-Dashboard",
	"pricingTiers.apiAccess1000Requests": "API-Zugriff (1.000 Anfragen/Tag)",
	"pricingTiers.slackIntegration": "Slack-Integration",
	"pricingTiers.subscribeToPro": "Pro abonnieren",
	"pricingTiers.enterpriseTier": "Enterprise-Stufe",
	"pricingTiers.custom": "Individuell",
	"pricingTiers.allProFeatures": "Alle Pro-Funktionen",
	"pricingTiers.dedicatedBenchmarkInfrastructure": "Dedizierte Benchmark-Infrastruktur",
	"pricingTiers.customLibraryIntegrations": "Benutzerdefinierte Bibliotheksintegrationen",
	"pricingTiers.slaGuarantees": "SLA-Garantien",
	"pricingTiers.prioritySupport": "Priorisierter Support",
	"pricingTiers.contactSales": "Vertrieb kontaktieren"
};
var products_default$9 = {
	"productsHeader.products": "Produkte",
	"productsHeader.toolsAndServicesTo": "Tools und Services unterstützen Sie bei der Optimierung Ihrer Internationalisierungsstrategie.",
	"productsGrid.benchmarkDashboard": "Benchmark-Dashboard",
	"productsGrid.interactiveChartsAndTables": "Interaktive Diagramme und Tabellen, die i18n-Bibliotheken hinsichtlich Bundle-Größe, Renderzeit und Hydratationskosten vergleichen.",
	"productsGrid.bundleAnalyzer": "Bundle-Analyzer",
	"productsGrid.uploadYourBuildOutput": "Laden Sie Ihren Build-Output hoch und erhalten Sie eine detaillierte Aufschlüsselung, wie viel von Ihrem Bundle i18n-Overhead ist.",
	"productsGrid.migrationAssistant": "Migrationsassistent",
	"productsGrid.automatedCodemodsAndGuides": "Automatisierte Codemods und Anleitungen für die Migration zwischen i18n-Bibliotheken mit minimaler Unterbrechung.",
	"productsGrid.performanceMonitor": "Leistungsmonitor",
	"productsGrid.continuousPerformanceTrackingFor": "Kontinuierliche Leistungsverfolgung für Ihre i18n-Implementierung. Erhalten Sie Warnungen, wenn sich das Laden von Übersetzungen verschlechtert.",
	"productsGrid.learnMore": "Mehr erfahren"
};
var settings_default$9 = {
	"settingsHeader.settings": "Einstellungen",
	"settingsHeader.manageYourAccountPreferences": "Verwalten Sie Ihre Kontoeinstellungen und -konfigurationen.",
	"profileSection.profile": "Profil",
	"profileSection.displayName": "Anzeigename",
	"profileSection.email": "E-Mail",
	"preferencesSection.preferences": "Einstellungen",
	"preferencesSection.emailNotifications": "E-Mail-Benachrichtigungen",
	"preferencesSection.receiveWeeklyBenchmarkReports": "Wöchentliche Benchmark-Berichte erhalten",
	"preferencesSection.darkMode": "Dunkelmodus",
	"preferencesSection.useDarkColorScheme": "Dunkles Farbschema verwenden",
	"preferencesSection.defaultLanguage": "Standardsprache",
	"apiAccessSection.apiAccess": "API-Zugriff",
	"apiAccessSection.apiKey": "API-Schlüssel",
	"apiAccessSection.useThisKeyTo": "Verwenden Sie diesen Schlüssel für den programmgesteuerten Zugriff auf die Benchmarking-API.",
	"apiAccessSection.copy": "Kopieren",
	"settingsFooter.cancel": "Abbrechen",
	"settingsFooter.saveChanges": "Änderungen speichern"
};
var team_default$9 = {
	"teamHeader.ourTeam": "Unser Team",
	"teamHeader.meetThePeopleBehindI18n": "Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, vereint durch die Leidenschaft für großartige Entwicklertools.",
	"teamGrid.sarahChen": "Sarah Chen",
	"teamGrid.founderLeadEngineer": "Gründerin & Leitende Ingenieurin",
	"teamGrid.formerGoogleEngineerWith10": "Ehemalige Google-Ingenieurin mit 10 Jahren Erfahrung im Aufbau von Internationalisierungssystemen in großem Maßstab.",
	"teamGrid.marcusWeber": "Marcus Weber",
	"teamGrid.performanceEngineer": "Performance-Ingenieur",
	"teamGrid.specializesInJavascriptPerformanceOptimization": "Spezialisiert auf JavaScript-Leistungsoptimierung und Benchmarking-Methodik. Zuvor bei Vercel.",
	"teamGrid.aishaPatel": "Aisha Patel",
	"teamGrid.developerAdvocate": "Developer Advocate",
	"teamGrid.passionateAboutDeveloperExperienceAnd": "Begeistert von Entwicklererfahrung und Bildung. Sprecherin bei React Conf, JSConf und i18nNext.",
	"teamGrid.tomasRodriguez": "Tomás Rodríguez",
	"teamGrid.fullStackDeveloper": "Full-Stack-Entwickler",
	"teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Wartet die Benchmarking-Infrastruktur und die CI/CD-Pipeline. Open-Source-Contributor bei Lingui.",
	"teamGrid.yukiTanaka": "Yuki Tanaka",
	"teamGrid.dataAnalyst": "Datenanalystin",
	"teamGrid.ensuresStatisticalRigorInAll": "Gewährleistet statistische Strenge in allen Benchmark-Ergebnissen. PhD in Angewandter Statistik vom MIT.",
	"teamGrid.elenaKowalski": "Elena Kowalski",
	"teamGrid.communityManager": "Community-Managerin",
	"teamGrid.managesCommunityContributionsPartnershipsAnd": "Verwaltet Community-Beiträge, Partnerschaften und Events. Hintergrund in Open-Source-Governance."
};
var route_default$8 = {
	oopsPageNotFound: "Oops! Page not found.",
	returnToHome: "Return to Home",
	"route.couldNotMeasureHydrationDuration": "Could not measure hydration duration:",
	"route.oopsPageNotFound": "Oops! Page not found",
	"route.returnToHome": "Return to Home"
};
var header_default$8 = {
	home: "Home",
	methodology: "Methodology",
	mockPages: "Mock Pages",
	products: "Products",
	pricing: "Pricing",
	team: "Team",
	blog: "Blog",
	careers: "Careers",
	faq: "FAQ",
	contact: "Contact",
	settings: "Settings",
	goToGithub: "Go to GitHub"
};
var footer_default$8 = {
	resources: "Resources",
	contact: "Contact",
	github: "GitHub",
	methodology: "Methodology",
	contributing: "Contributing",
	builtWith: "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
	anOpenSourceTestApplication: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity."
};
var themeToggle_default$8 = {
	themeModeAutoSystemClick: "Theme mode: auto (system). Click to switch to light mode.",
	themeModeLightClick: "Theme mode: light. Click to switch to dark mode.",
	themeModeDarkClick: "Theme mode: dark. Click to switch to auto (system) mode.",
	themeAuto: "Theme: Auto",
	themeDark: "Theme: Dark",
	themeLight: "Theme: Light"
};
var hero_default$8 = {
	aTestApplicationDesignedTo: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
	viewResults: "View Results"
};
var whyItMatters_default$8 = {
	whyTheseMetricsMatter: "Why These Metrics Matter",
	bundleSize: "Bundle Size",
	theBundleIsTheData: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
	renderingHydration: "Rendering & Hydration",
	connectingALargeJson: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
	dynamicLoading: "Dynamic Loading",
	loadingAllTranslationsUpfront: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
};
var understandingImpact_default$8 = {
	cacheInvalidation: "Cache invalidation:",
	contextBasedArchitecturesCan: "Context-based architectures can cause the entire app to re-render when the language changes. For large apps with thousands of components, this can lead to noticeable lag during locale switches.",
	contextBasedArchitecturesCanCause: "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
	duringServerSideRenderingThe: "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
	flashOfUntranslatedContent: "Flash of Untranslated Content (FOUC)",
	flashOfUntranslatedContentFouc: "Flash of untranslated content (FOUC):",
	manyI18nLibrariesStore: "Many i18n libraries store translations in large JSON files that are loaded upfront. This can significantly increase the \"Time to Interactive\" as the browser must download and parse these files before the app can be used.",
	manyI18nLibrariesStoreTranslations: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
	splittingTranslationsIntoPerRoute: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
	theAppMustFirstLoad: "The app must first load the core library (e.g., i18next) which adds to the initial bundle size. Even \"lightweight\" libraries can add 10-20KB of minified JS.",
	theJsonMustBeParsed: "The JSON must be parsed on every page load — blocking the main thread.",
	theTradeOffsOfDynamic: "The trade-offs of dynamic loading",
	thisTestAppProvidesA: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.",
	understandingTheImpact: "Understanding the Impact",
	updatingTranslationsRequiresCache: "Updating translations often requires a full rebuild or clearing the CDN cache, which can delay the roll-out of critical copy changes.",
	usersMayBrieflySeeTranslation: "Users may briefly see translation keys or English text while the library and translation files are being loaded.",
	waterfallRequests: "Waterfall requests:",
	whatThisBenchmarkMeasures: "What this benchmark measures",
	whyASingleLargeJson: "Why a single large JSON can hurt performance"
};
var resultsTable_default$8 = {
	bundleSize: "Bundle Size",
	lazyLoading: "Lazy Loading",
	library: "Library",
	lookupTime: "Lookup Time",
	sampleResults: "Sample Results"
};
var aboutHeader_default$8 = {
	aboutThisBenchmark: "About This Benchmark",
	methodology: "Methodology",
	thisIsAnOpenSource: "This is an open-source test application for measuring the real-world impact of internationalization libraries.",
	weDesignedThisBenchmarkTo: "We designed this benchmark to provide fair, reproducible, and meaningful comparisons of i18n libraries. Here's our approach."
};
var aboutGrid_default$8 = {
	allBenchmarksRunOn: "All benchmarks run on the same hardware (M2 MacBook Pro, 16 GB RAM), same browser (Chromium 120 via Playwright), and same network conditions (simulated 4G). Each test is repeated 50 times and we report the median with P95/P99 percentiles.",
	applicationDesign: "Application Design",
	choosingAnI18nLibrary: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
	eachI18nLibraryIsIntegrated: "Each i18n library is integrated following its official documentation and best practices. We consult maintainers when possible to ensure optimal configuration. The same React app, same Vite config, same deployment.",
	fairComparison: "Fair Comparison",
	measurementMethodology: "Measurement Methodology",
	methodology: "Methodology",
	testEnvironment: "Test Environment",
	theBenchmarkAppHas10: "The benchmark app has 10 pages with realistic content — navigation, forms, dynamic lists, and static text. Each page uses 15–30 translation keys to represent real-world usage patterns rather than synthetic micro-benchmarks.",
	theSame10PageApp: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.",
	weUseBrowserNativeApis: "We use browser-native APIs (Performance Timeline, Resource Timing, Layout Instability) combined with React Profiler data. Bundle sizes are measured post-gzip using source-map-explorer for accuracy.",
	whyThisExists: "Why This Exists"
};
var whatWeMeasure_default$8 = {
	bundleSizeImpact: "Bundle size impact",
	duringSsrTranslationDataIs: "During SSR, translation data is serialized into the HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
	duringSsrTranslationDataIsSerialized: "During SSR, translation data is serialized into the HTML. We measure the size of this payload and its effect on Time to Interactive (TTI).",
	howFastTheAppCan: "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
	howFastTheAppCanSwitchFromOne: "How fast the app can switch from one language to another. We measure the re-render time and any network delays for lazy-loaded locales.",
	howMuchExtraTimeThe: "How much extra time the i18n layer adds to each component render — measured using React Profiler's actualDuration.",
	howMuchExtraTimeTheLibraryAdds: "How much extra time the library adds to the initial page load. This includes script execution and the time to fetch/parse translation data.",
	hydrationCost: "Hydration cost",
	lazyLoadingEffectiveness: "Lazy loading effectiveness",
	localeSwitchSpeed: "Locale switch speed",
	renderingOverhead: "Rendering overhead",
	theAdditionalJavascriptBytes: "The additional Javascript bytes that the library adds to your production build. We measure both the library itself and its mandatory dependencies.",
	theAdditionalJavascriptBytesSent: "The additional JavaScript bytes sent to the client specifically due to the i18n library runtime, plus the translation files for the current locale.",
	whatWeMeasure: "What We Measure",
	whetherSplittingTranslationsByRoute: "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity)."
};
var blogHeader_default$8 = {
	blog: "Blog",
	insightsDeepDivesAnd: "Insights, deep dives, and updates from the i18n benchmarking community.",
	insightsTutorialsAndAnalysis: "Insights, Tutorials, and Analysis"
};
var blogList_default$8 = {
	aStepByStepGuide: "A step-by-step guide for migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
	aStepByStepGuideOnMigrating: "A step-by-step guide on migrating from legacy i18n solutions to modern, high-performance libraries.",
	aTransparentLookAtOur: "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
	aTransparentLookAtOurBenchmarking: "A transparent look at our benchmarking process, from hardware specs to measurement techniques.",
	anOverviewOfTheCurrent: "An overview of the current i18n ecosystem, comparing approaches from message catalogs to compiler-based solutions.",
	anOverviewOfTheCurrentI18n: "An overview of the current i18n landscape and how different libraries stack up in 2026.",
	analysis: "Analysis",
	benchmark: "Benchmark",
	benchmarkMethodologyHowWe: "Benchmark Methodology: How We Test",
	benchmarkMethodologyHowWeTest: "Benchmark Methodology: How We Test",
	comparingI18nLibrariesIn: "Comparing i18n Libraries in 2026: A Deep Dive",
	february12026: "February 1, 2026",
	february152026: "February 15, 2026",
	february282026: "February 28, 2026",
	howToReduceYourI18n: "How to Reduce Your i18n Bundle by 60%",
	i18nBenchmark2026Results: "i18n Benchmark 2026 Results",
	january202026: "January 20, 2026",
	march152026: "March 15, 2026",
	march82026: "March 8, 2026",
	meta: "Meta",
	migratingFromReactI18nextTo: "Migrating from react-i18next to Lingui",
	practicalStrategiesForOptimizingTranslation: "Practical strategies for optimizing translation file loading, tree-shaking unused locales, and leveraging build-time compilation.",
	reactServerComponentsIntroduceNew: "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
	readMore: "Read More →",
	serverComponentsAndI18nWhat: "Server Components and i18n: What Changes?",
	theStateOfInternationalizationIn: "The State of Internationalization in 2026",
	tutorial: "Tutorial",
	weTested12DifferentInternationalization: "We tested 12 different internationalization libraries across 10 pages. Here are the detailed results with interactive charts."
};
var careersHeader_default$8 = {
	careers: "Careers",
	joinOurMission: "Join our mission to make internationalization fast, easy, and performant for everyone.",
	joinOurMissionToMake: "Join our mission to make the web faster and more accessible for everyone, everywhere."
};
var careersBenefits_default$8 = {
	allOurWorkIs: "All our work is open source. Build your public portfolio while making an impact.",
	competitivePay: "Competitive pay",
	impactful: "Impactful",
	openSource: "Open Source",
	openSourceTime: "Open source time",
	percentTimeForOss: "20% time for OSS contributions",
	remoteFirst: "Remote-First",
	topOfMarketCompensation: "Top-of-market compensation",
	whyJoinUs: "Why Join Us?",
	workFromAnywhere: "Work from anywhere in the world",
	workFromAnywhereFully: "Work from anywhere. Fully distributed team across 6 time zones.",
	yourWorkDirectlyHelps: "Your work directly helps developers build better, faster internationalized applications."
};
var openPositions_default$8 = {
	applyNow: "Apply Now",
	backendEngineer: "Backend Engineer",
	buildAndMaintainOur: "Build and maintain our benchmarking suite and core application infrastructure.",
	buildAndMaintainThe: "Build and maintain the benchmark dashboard, comparison tools, and interactive visualizations.",
	community: "Community",
	createAndMaintainDocumentation: "Create and maintain documentation, blog posts, and educational content about i18n performance best practices.",
	createComprehensiveGuidesApi: "Create comprehensive guides, API references, and tutorials for the community.",
	designAndMaintainThe: "Design and maintain the CI/CD pipeline that runs benchmarks automatically on every library update.",
	designAndScaleOur: "Design and scale our data ingestion pipelines and statistical analysis engines.",
	devOpsEngineer: "DevOps Engineer",
	devrelEngineer: "DevRel Engineer",
	documentation: "Documentation",
	engageWithTheI18n: "Engage with the i18n community, write blog posts, and speak at conferences.",
	engineering: "Engineering",
	ensureTheAccuracyAnd: "Ensure the accuracy and reliability of our benchmarks through rigorous testing.",
	frontendDeveloper: "Frontend Developer",
	fullTime: "Full-time",
	leadBenchmarkDesignAnd: "Lead benchmark design and implementation. Deep knowledge of V8 internals, browser performance APIs, and statistical analysis required.",
	openPositions: "Open Positions",
	partTime: "Part-time",
	qaEngineer: "QA Engineer",
	remote: "Remote",
	seniorFrontendEngineer: "Senior Frontend Engineer",
	seniorPerformanceEngineer: "Senior Performance Engineer",
	sfRemote: "San Francisco / Remote",
	technicalWriter: "Technical Writer"
};
var contactHeader_default$8 = {
	contactUs: "Contact Us",
	getInTouch: "Get in Touch",
	haveIdeasFoundABug: "Have ideas? Found a bug? We'd love to hear from you.",
	haveQuestionsOrWantTo: "Have questions or want to contribute? We'd love to hear from you."
};
var contactForm_default$8 = {
	bugReport: "Bug Report",
	contribution: "Contribution",
	email: "Email",
	emailPlaceholder: "you@example.com",
	message: "Message",
	messagePlaceholder: "Your message...",
	methodologyQuestion: "Methodology Question",
	name: "Name",
	newBenchmarkIdea: "New Benchmark Idea",
	other: "Other",
	sendMessage: "Send Message",
	subject: "Subject",
	topic: "Topic",
	wellGetBackTo: "We'll get back to you within 48 hours.",
	yourName: "Your name"
};
var faqHeader_default$8 = {
	everythingYouNeedToKnow: "Everything you need to know about i18n Benchmark.",
	frequentlyAskedQuestions: "Frequently Asked Questions"
};
var faqList_default$8 = {
	absolutelyWeWelcomeCommunity: "Absolutely! We welcome community contributions. Fork the repository, add your library integration following our template, and submit a pull request. See the Contributing guide for details.",
	allBenchmarksAreRun: "All benchmarks are run using Playwright on a consistent hardware setup (M2 MacBook Pro) with simulated 4G network conditions. Each test runs 50 iterations and we report median, P95, and P99 values.",
	areTheResultsStatistically: "Are the results statistically significant?",
	benchmarksRunAutomaticallyVia: "Benchmarks run automatically via CI on every dependency update and weekly on the main branch. Results are published to the dashboard within 24 hours.",
	canIContributeA: "Can I contribute a new library integration?",
	canISubmitMyOwnBenchmarks: "Can I submit my own benchmarks?",
	doYouOfferConsultingServices: "Do you offer consulting services?",
	howAreBenchmarksConducted: "How are benchmarks conducted?",
	howAreTheBenchmarks: "How are the benchmarks run?",
	howCanIContribute: "How can I contribute?",
	howOftenAreBenchmarksUpdated: "How often are benchmarks updated?",
	howOftenAreResults: "How often are results updated?",
	i18nBenchmarkIsAnOpenSource: "i18n Benchmark is an open-source project dedicated to measuring the real-world performance impact of internationalization libraries.",
	isTheDataReliable: "Is the data reliable?",
	thereAreManyWaysToContribute: "There are many ways to contribute, from submitting new benchmarks to improving our methodology documentation.",
	weCurrentlyBenchmarkReactI18next: "We currently benchmark react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl, and Paraglide. We plan to add more based on community requests.",
	weFollowRigorousStatisticalMethodologyIncluding: "We follow rigorous statistical methodology, including outlier detection and multiple test runs to ensure accuracy.",
	weReRunAllBenchmarksWeekly: "We re-run all benchmarks weekly against the latest versions of each library.",
	weRunStandardizedTestsInIsolated: "We run standardized tests in isolated environments, measuring bundle size, render time, and memory usage across dozens of libraries.",
	weSupportReactI18nextReactIntl: "We support react-i18next, react-intl, Lingui, Tolgee, and several other popular React i18n solutions.",
	whatIsI18nBenchmark: "What is i18n Benchmark?",
	whatLibrariesAreCurrently: "What libraries are currently tested?",
	whichLibrariesAreCurrentlySupported: "Which libraries are currently supported?",
	yesCommunityBenchmarkSubmissionsAre: "Yes! Community benchmark submissions are encouraged and reviewed by our core team.",
	yesOurEnterprisePlanIncludesConsulting: "Yes, our Enterprise plan includes consulting services for optimizing your app's i18n performance.",
	yesWeUseThe: "Yes. We use the Mann-Whitney U test with a significance level of 0.05 to compare distributions. We also report confidence intervals and effect sizes."
};
var pricingHeader_default$8 = {
	pricing: "Pricing",
	transparentPricingForEvery: "Transparent pricing for every stage of your i18n journey."
};
var pricingTiers_default$8 = {
	freeTier: "Free Tier",
	free: "Free",
	publicBenchmarkDashboard: "Public benchmark dashboard",
	basicLibraryComparisons: "Basic library comparisons",
	communityForumAccess: "Community forum access",
	monthlyResultDigest: "Monthly result digest",
	getStarted: "Get Started",
	proTier: "Pro Tier",
	perMonth: "/month",
	allFreeFeatures: "All Free features",
	customBenchmarkConfigurations: "Custom benchmark configurations",
	privateResultsDashboard: "Private results dashboard",
	apiAccess1000Requests: "API access (1,000 requests/day)",
	slackIntegration: "Slack integration",
	subscribeToPro: "Subscribe to Pro",
	enterpriseTier: "Enterprise Tier",
	custom: "Custom",
	allProFeatures: "All Pro features",
	dedicatedBenchmarkInfrastructure: "Dedicated benchmark infrastructure",
	customLibraryIntegrations: "Custom library integrations",
	slaGuarantees: "SLA guarantees",
	prioritySupport: "Priority support",
	contactSales: "Contact Sales"
};
var productsHeader_default$8 = {
	products: "Products",
	toolsAndServicesTo: "Tools and services to help you optimize your internationalization strategy."
};
var productsGrid_default$8 = {
	benchmarkDashboard: "Benchmark Dashboard",
	interactiveChartsAndTables: "Interactive charts and tables comparing i18n libraries across bundle size, render time, and hydration cost.",
	bundleAnalyzer: "Bundle Analyzer",
	uploadYourBuildOutput: "Upload your build output and get a detailed breakdown of how much of your bundle is i18n overhead.",
	migrationAssistant: "Migration Assistant",
	automatedCodemodsAndGuides: "Automated codemods and guides for migrating between i18n libraries with minimal disruption.",
	performanceMonitor: "Performance Monitor",
	continuousPerformanceTrackingFor: "Continuous performance tracking for your i18n implementation. Get alerts when translation loading degrades.",
	learnMore: "Learn More"
};
var settingsHeader_default$8 = {
	manageYourAccount: "Manage your account settings and preferences.",
	manageYourAccountPreferences: "Manage your account preferences and configuration.",
	settings: "Settings"
};
var profileSection_default$8 = {
	profile: "Profile",
	displayName: "Display Name",
	email: "Email"
};
var preferencesSection_default$8 = {
	arabicAr: "Arabic (ar)",
	chineseSimplifiedZhCn: "Chinese (Simplified, zh-CN)",
	darkMode: "Dark Mode",
	defaultLanguage: "Default Language",
	emailNotifications: "Email Notifications",
	englishEn: "English (en)",
	frenchFr: "French (fr)",
	germanDe: "German (de)",
	japaneseJa: "Japanese (ja)",
	preferences: "Preferences",
	receiveWeeklyBenchmark: "Receive weekly benchmark reports",
	receiveWeeklyBenchmarkReports: "Receive weekly benchmark reports",
	spanishEs: "Spanish (es)",
	toggleDarkMode: "Toggle dark mode",
	toggleNotifications: "Toggle Notifications",
	useDarkColorScheme: "Use dark color scheme"
};
var apiAccessSection_default$8 = {
	apiAccess: "API Access",
	apiKey: "API Key",
	useThisKeyTo: "Use this key to access the benchmarking API programmatically.",
	copy: "Copy"
};
var settingsFooter_default$8 = {
	cancel: "Cancel",
	saveChanges: "Save Changes"
};
var teamHeader_default$8 = {
	ourTeam: "Our Team",
	meetThePeopleBehindI18n: "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
};
var teamGrid_default$8 = {
	aishaPatel: "Aisha Patel",
	communityManager: "Community Manager",
	dataAnalyst: "Data Analyst",
	developerAdvocate: "Developer Advocate",
	elenaKowalski: "Elena Kowalski",
	ensuresStatisticalRigorIn: "Ensures statistical rigor in our data collection and analysis.",
	ensuresStatisticalRigorInAll: "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
	formerGoogleEngineerWith: "Former Google engineer with a passion for web performance and open source.",
	formerGoogleEngineerWith10: "Former Google engineer with 10 years of experience building internationalization systems at scale.",
	founderLeadEngineer: "Founder & Lead Engineer",
	fullStackDeveloper: "Full-Stack Developer",
	maintainsTheBenchmarkingInfrastructure: "Maintains the benchmarking infrastructure and CI/CD pipelines.",
	maintainsTheBenchmarkingInfrastructureAnd: "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
	managesCommunityContributions: "Manages community contributions and open source outreach.",
	managesCommunityContributionsPartnershipsAnd: "Manages community contributions, partnerships, and events. Background in open source governance.",
	marcusWeber: "Marcus Weber",
	passionateAboutDeveloperExperience: "Passionate about developer experience and building intuitive APIs.",
	passionateAboutDeveloperExperienceAnd: "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
	performanceEngineer: "Performance Engineer",
	sarahChen: "Sarah Chen",
	specializesInJavascriptPerformance: "Specializes in JavaScript performance optimization and React internals.",
	specializesInJavascriptPerformanceOptimization: "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
	tomasRodriguez: "Tomás Rodríguez",
	yukiTanaka: "Yuki Tanaka"
};
var common_default$8 = {
	cancel: "Cancel",
	copy: "Copy",
	"footer.anOpenSourceTestApplication": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
	"footer.builtWith": "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
	"footer.contact": "Contact",
	"footer.contributing": "Contributing",
	"footer.github": "GitHub",
	"footer.methodology": "Methodology",
	"footer.resources": "Resources",
	"header.blog": "Blog",
	"header.careers": "Careers",
	"header.contact": "Contact",
	"header.faq": "FAQ",
	"header.goToGithub": "Go to GitHub",
	"header.home": "Home",
	"header.methodology": "Methodology",
	"header.mockPages": "Mock Pages",
	"header.pricing": "Pricing",
	"header.products": "Products",
	"header.settings": "Settings",
	"header.team": "Team",
	mockBanner: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.",
	readMore: "Read More",
	saveChanges: "Save Changes",
	"themeToggle.themeAuto": "Theme: Auto",
	"themeToggle.themeDark": "Theme: Dark",
	"themeToggle.themeLight": "Theme: Light",
	"themeToggle.themeModeAutoSystemClick": "Theme mode: auto (system). Click to switch to light mode.",
	"themeToggle.themeModeDarkClick": "Theme mode: dark. Click to switch to auto (system) mode.",
	"themeToggle.themeModeLightClick": "Theme mode: light. Click to switch to dark mode."
};
var home_default$8 = {
	"hero.aTestApplicationDesignedTo": "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
	"hero.viewResults": "View Results",
	"whyItMatters.whyTheseMetricsMatter": "Why These Metrics Matter",
	"whyItMatters.bundleSize": "Bundle Size",
	"whyItMatters.theBundleIsTheData": "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
	"whyItMatters.renderingHydration": "Rendering & Hydration",
	"whyItMatters.connectingALargeJson": "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
	"whyItMatters.dynamicLoading": "Dynamic Loading",
	"whyItMatters.loadingAllTranslationsUpfront": "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.",
	"understandingImpact.understandingTheImpact": "Understanding the Impact",
	"understandingImpact.whyASingleLargeJson": "Why a single large JSON can hurt performance",
	"understandingImpact.manyI18nLibrariesStoreTranslations": "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
	"understandingImpact.theJsonMustBeParsed": "The JSON must be parsed on every page load — blocking the main thread.",
	"understandingImpact.contextBasedArchitecturesCanCause": "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
	"understandingImpact.duringServerSideRenderingThe": "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
	"understandingImpact.theTradeOffsOfDynamic": "The trade-offs of dynamic loading",
	"understandingImpact.splittingTranslationsIntoPerRoute": "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
	"understandingImpact.waterfallRequests": "Waterfall requests:",
	"understandingImpact.flashOfUntranslatedContentFouc": "Flash of untranslated content (FOUC):",
	"understandingImpact.cacheInvalidation": "Cache invalidation:",
	"understandingImpact.whatThisBenchmarkMeasures": "What this benchmark measures",
	"understandingImpact.thisTestAppProvidesA": "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.",
	"resultsTable.sampleResults": "Sample Results",
	"resultsTable.bundleSize": "Bundle Size",
	"resultsTable.lookupTime": "Lookup Time",
	"resultsTable.lazyLoading": "Lazy Loading"
};
var about_default$8 = {
	"aboutHeader.methodology": "Methodology",
	"aboutHeader.weDesignedThisBenchmarkTo": "We designed this benchmark to provide fair, reproducible, and meaningful comparisons of i18n libraries. Here's our approach.",
	"aboutGrid.testEnvironment": "Test Environment",
	"aboutGrid.allBenchmarksRunOn": "All benchmarks run on the same hardware (M2 MacBook Pro, 16 GB RAM), same browser (Chromium 120 via Playwright), and same network conditions (simulated 4G). Each test is repeated 50 times and we report the median with P95/P99 percentiles.",
	"aboutGrid.applicationDesign": "Application Design",
	"aboutGrid.theBenchmarkAppHas10": "The benchmark app has 10 pages with realistic content — navigation, forms, dynamic lists, and static text. Each page uses 15–30 translation keys to represent real-world usage patterns rather than synthetic micro-benchmarks.",
	"aboutGrid.measurementMethodology": "Measurement Methodology",
	"aboutGrid.weUseBrowserNativeApis": "We use browser-native APIs (Performance Timeline, Resource Timing, Layout Instability) combined with React Profiler data. Bundle sizes are measured post-gzip using source-map-explorer for accuracy.",
	"aboutGrid.fairComparison": "Fair Comparison",
	"aboutGrid.eachI18nLibraryIsIntegrated": "Each i18n library is integrated following its official documentation and best practices. We consult maintainers when possible to ensure optimal configuration. The same React app, same Vite config, same deployment.",
	"whatWeMeasure.bundleSizeImpact": "Bundle size impact",
	"whatWeMeasure.theAdditionalJavascriptBytesSent": "The additional JavaScript bytes sent to the client specifically due to the i18n library runtime, plus the translation files for the current locale.",
	"whatWeMeasure.renderingOverhead": "Rendering overhead",
	"whatWeMeasure.howMuchExtraTimeThe": "How much extra time the i18n layer adds to each component render — measured using React Profiler's actualDuration.",
	"whatWeMeasure.hydrationCost": "Hydration cost",
	"whatWeMeasure.duringSsrTranslationDataIs": "During SSR, translation data is serialized into the HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
	"whatWeMeasure.lazyLoadingEffectiveness": "Lazy loading effectiveness",
	"whatWeMeasure.whetherSplittingTranslationsByRoute": "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
	"whatWeMeasure.localeSwitchSpeed": "Locale switch speed",
	"whatWeMeasure.howFastTheAppCan": "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
	"whatWeMeasure.whatWeMeasure": "What We Measure"
};
var blog_default$8 = {
	"blogHeader.blog": "Blog",
	"blogHeader.insightsDeepDivesAnd": "Insights, deep dives, and updates from the i18n benchmarking community.",
	"blogList.i18nBenchmark2026Results": "i18n Benchmark 2026 Results",
	"blogList.march152026": "March 15, 2026",
	"blogList.weTested12DifferentInternationalization": "We tested 12 different internationalization libraries across 10 pages. Here are the detailed results with interactive charts.",
	"blogList.howToReduceYourI18n": "How to Reduce Your i18n Bundle by 60%",
	"blogList.march82026": "March 8, 2026",
	"blogList.practicalStrategiesForOptimizingTranslation": "Practical strategies for optimizing translation file loading, tree-shaking unused locales, and leveraging build-time compilation.",
	"blogList.theStateOfInternationalizationIn": "The State of Internationalization in 2026",
	"blogList.february282026": "February 28, 2026",
	"blogList.anOverviewOfTheCurrent": "An overview of the current i18n ecosystem, comparing approaches from message catalogs to compiler-based solutions.",
	"blogList.migratingFromReactI18nextTo": "Migrating from react-i18next to Lingui",
	"blogList.february152026": "February 15, 2026",
	"blogList.aStepByStepGuide": "A step-by-step guide for migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
	"blogList.serverComponentsAndI18nWhat": "Server Components and i18n: What Changes?",
	"blogList.february12026": "February 1, 2026",
	"blogList.reactServerComponentsIntroduceNew": "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
	"blogList.benchmarkMethodologyHowWeTest": "Benchmark Methodology: How We Test",
	"blogList.january202026": "January 20, 2026",
	"blogList.aTransparentLookAtOur": "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
	"blogList.readMore": "Read More →"
};
var careers_default$8 = {
	"careersHeader.careers": "Careers",
	"careersHero.fromAnywhere": "from anywhere in the world",
	"careersBenefits.competitivePay": "Competitive pay",
	"careersBenefits.topOfMarket": "Top-of-market compensation",
	"careersBenefits.openSourceTime": "Open source time",
	"careersBenefits.twentyPercentTime": "20% time for OSS",
	"careersPositions.seniorFrontendEngineer": "Senior Frontend Engineer",
	"careersPositions.seniorFrontendEngineerDesc": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
	"openPositions.openPositions": "Open Positions",
	"openPositions.remote": "Remote",
	"openPositions.fullTime": "Full-time",
	"openPositions.engineering": "Engineering",
	"openPositions.applyNow": "Apply Now"
};
var contact_default$8 = {
	"contactHeader.contactUs": "Contact Us",
	"contactHeader.haveQuestionsOrWantTo": "Have questions or want to contribute? We'd love to hear from you.",
	"contactForm.name": "Name",
	"contactForm.email": "Email",
	"contactForm.subject": "Subject",
	"contactForm.message": "Message",
	"contactForm.sendMessage": "Send Message",
	"contactForm.wellGetBackTo": "We'll get back to you within 48 hours."
};
var faq_default$8 = {
	"faqHeader.frequentlyAskedQuestions": "Frequently Asked Questions",
	"faqHeader.everythingYouNeedTo": "Everything you need to know about the i18n Benchmark project.",
	"faqList.howAreTheBenchmarks": "How are the benchmarks run?",
	"faqList.allBenchmarksAreRun": "All benchmarks are run using Playwright on a consistent hardware setup (M2 MacBook Pro) with simulated 4G network conditions. Each test runs 50 iterations and we report median, P95, and P99 values.",
	"faqList.whatLibrariesAreCurrently": "What libraries are currently tested?",
	"faqList.weCurrentlyBenchmarkReactI18next": "We currently benchmark react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl, and Paraglide. We plan to add more based on community requests.",
	"faqList.canIContributeA": "Can I contribute a new library integration?",
	"faqList.absolutelyWeWelcomeCommunity": "Absolutely! We welcome community contributions. Fork the repository, add your library integration following our template, and submit a pull request. See the Contributing guide for details.",
	"faqList.howOftenAreResults": "How often are results updated?",
	"faqList.benchmarksRunAutomaticallyVia": "Benchmarks run automatically via CI on every dependency update and weekly on the main branch. Results are published to the dashboard within 24 hours.",
	"faqList.areTheResultsStatistically": "Are the results statistically significant?",
	"faqList.yesWeUseThe": "Yes. We use the Mann-Whitney U test with a significance level of 0.05 to compare distributions. We also report confidence intervals and effect sizes."
};
var pricing_default$8 = {
	"pricingTiers.starterTier": "Starter",
	"pricingTiers.starterPrice": "$0",
	"pricingTiers.forever": "forever",
	"pricingTiers.runsPerDay": "5 benchmark runs/day",
	"pricingTiers.libraries3": "3 libraries",
	"pricingTiers.communitySupport": "Community support",
	"pricingTiers.publicResults": "Public results",
	"pricingTiers.getStarted": "Get Started",
	"pricingTiers.proTier": "Pro",
	"pricingTiers.proPrice": "$29",
	"pricingTiers.perMonth": "/month",
	"pricingTiers.unlimitedRuns": "Unlimited runs",
	"pricingTiers.allLibraries": "All libraries",
	"pricingTiers.prioritySupport": "Priority support",
	"pricingTiers.privateResults": "Private results",
	"pricingTiers.ciIntegration": "CI integration",
	"pricingTiers.historicalData": "Historical data",
	"pricingTiers.enterpriseTier": "Enterprise",
	"pricingTiers.custom": "Custom",
	"pricingTiers.everythingInPro": "Everything in Pro",
	"pricingTiers.onPremiseOption": "On-premise option",
	"pricingTiers.ssoSaml": "SSO & SAML",
	"pricingTiers.dedicatedAccountManager": "Dedicated account manager",
	"pricingTiers.customSLAs": "Custom SLAs",
	"pricingTiers.auditLogs": "Audit logs",
	"pricingTiers.trainingSessions": "Training sessions",
	"pricingTiers.contactSales": "Contact Sales",
	"pricingHeader.pricing": "Pricing",
	"pricingHeader.transparentPricingForEvery": "Transparent pricing for every stage of your i18n journey."
};
var products_default$8 = {
	"productsHeader.products": "Products",
	"productsHeader.toolsAndServicesTo": "Tools and services to help you optimize your internationalization strategy.",
	"productsGrid.benchmarkDashboard": "Benchmark Dashboard",
	"productsGrid.interactiveChartsAndTables": "Interactive charts and tables comparing i18n libraries across bundle size, render time, and hydration cost.",
	"productsGrid.bundleAnalyzer": "Bundle Analyzer",
	"productsGrid.uploadYourBuildOutput": "Upload your build output and get a detailed breakdown of how much of your bundle is i18n overhead.",
	"productsGrid.migrationAssistant": "Migration Assistant",
	"productsGrid.automatedCodemodsAndGuides": "Automated codemods and guides for migrating between i18n libraries with minimal disruption.",
	"productsGrid.performanceMonitor": "Performance Monitor",
	"productsGrid.continuousPerformanceTrackingFor": "Continuous performance tracking for your i18n implementation. Get alerts when translation loading degrades.",
	"productsGrid.learnMore": "Learn More"
};
var settings_default$8 = {
	"settingsHeader.settings": "Settings",
	"settingsHeader.manageYourAccountPreferences": "Manage your account preferences and configuration.",
	"profileSection.profile": "Profile",
	"profileSection.displayName": "Display Name",
	"profileSection.email": "Email",
	"preferencesSection.preferences": "Preferences",
	"preferencesSection.emailNotifications": "Email Notifications",
	"preferencesSection.receiveWeeklyBenchmarkReports": "Receive weekly benchmark reports",
	"preferencesSection.darkMode": "Dark Mode",
	"preferencesSection.useDarkColorScheme": "Use dark color scheme",
	"preferencesSection.defaultLanguage": "Default Language",
	"apiAccessSection.apiAccess": "API Access",
	"apiAccessSection.apiKey": "API Key",
	"apiAccessSection.useThisKeyTo": "Use this key to access the benchmarking API programmatically.",
	"apiAccessSection.copy": "Copy",
	"settingsFooter.cancel": "Cancel",
	"settingsFooter.saveChanges": "Save Changes"
};
var team_default$8 = {
	"teamHeader.ourTeam": "Our Team",
	"teamHeader.meetThePeopleBehindI18n": "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.",
	"teamGrid.sarahChen": "Sarah Chen",
	"teamGrid.founderLeadEngineer": "Founder & Lead Engineer",
	"teamGrid.formerGoogleEngineerWith10": "Former Google engineer with 10 years of experience building internationalization systems at scale.",
	"teamGrid.marcusWeber": "Marcus Weber",
	"teamGrid.performanceEngineer": "Performance Engineer",
	"teamGrid.specializesInJavascriptPerformanceOptimization": "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
	"teamGrid.aishaPatel": "Aisha Patel",
	"teamGrid.developerAdvocate": "Developer Advocate",
	"teamGrid.passionateAboutDeveloperExperienceAnd": "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
	"teamGrid.tomasRodriguez": "Tomás Rodríguez",
	"teamGrid.fullStackDeveloper": "Full-Stack Developer",
	"teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
	"teamGrid.yukiTanaka": "Yuki Tanaka",
	"teamGrid.dataAnalyst": "Data Analyst",
	"teamGrid.ensuresStatisticalRigorInAll": "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
	"teamGrid.elenaKowalski": "Elena Kowalski",
	"teamGrid.communityManager": "Community Manager",
	"teamGrid.managesCommunityContributionsPartnershipsAnd": "Manages community contributions, partnerships, and events. Background in open source governance."
};
var route_default$7 = {
	oopsPageNotFound: "Oops! Page not found.",
	returnToHome: "Return to Home",
	"route.couldNotMeasureHydrationDuration": "No se pudo medir la duración de la hidratación:",
	"route.oopsPageNotFound": "¡Ups! Página no encontrada",
	"route.returnToHome": "Volver al inicio"
};
var header_default$7 = {
	home: "Inicio",
	methodology: "Metodología",
	mockPages: "Páginas de prueba",
	products: "Productos",
	pricing: "Precios",
	team: "Equipo",
	blog: "Blog",
	careers: "Carreras",
	faq: "FAQ",
	contact: "Contacto",
	settings: "Configuración",
	goToGithub: "Ir a GitHub"
};
var footer_default$7 = {
	resources: "Recursos",
	contact: "Contacto",
	github: "GitHub",
	methodology: "Metodología",
	contributing: "Contribuir",
	builtWith: "i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y TanStack Router.",
	anOpenSourceTestApplication: "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el tiempo de carga y la reactividad de la aplicación."
};
var themeToggle_default$7 = {
	themeModeAutoSystemClick: "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
	themeModeLightClick: "Modo de tema: claro. Haga clic para cambiar al modo oscuro.",
	themeModeDarkClick: "Modo de tema: oscuro. Haga clic para cambiar al modo automático (sistema).",
	themeAuto: "Tema: Auto",
	themeDark: "Tema: Oscuro",
	themeLight: "Tema: Claro"
};
var hero_default$7 = {
	aTestApplicationDesignedTo: "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el rendimiento de carga y la reactividad de renderizado.",
	viewResults: "Ver resultados"
};
var whyItMatters_default$7 = {
	whyTheseMetricsMatter: "Por qué son importantes estas métricas",
	bundleSize: "Tamaño del paquete",
	theBundleIsTheData: "El paquete representa los datos enviados a cada usuario en todo el mundo. Un paquete más grande significa tiempos de descarga más largos — especialmente en conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código de tiempo de ejecución, además de los propios archivos de traducción.",
	renderingHydration: "Renderizado e hidratación",
	connectingALargeJson: "Conectar un gran diccionario JSON a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página se vuelva interactiva — impactando directamente el tiempo de interacción (TTI).",
	dynamicLoading: "Carga dinámica",
	loadingAllTranslationsUpfront: "Cargar todas las traducciones por adelantado sobrecarga la carga útil inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, el lazy loading introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial."
};
var understandingImpact_default$7 = {
	cacheInvalidation: "Invalidación de la caché:",
	contextBasedArchitecturesCan: "Context-based architectures can cause the entire app to re-render when the language changes. For large apps with thousands of components, this can lead to noticeable lag during locale switches.",
	contextBasedArchitecturesCanCause: "Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el local, porque cada consumidor es notificado incluso si sus claves específicas no han cambiado.",
	duringServerSideRenderingThe: "Durante la renderización del lado del servidor, el diccionario completo se serializa en la carga útil de HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.",
	flashOfUntranslatedContent: "Flash of Untranslated Content (FOUC)",
	flashOfUntranslatedContentFouc: "Parpadeo de contenido no traducido (FOUC):",
	manyI18nLibrariesStore: "Many i18n libraries store translations in large JSON files that are loaded upfront. This can significantly increase the \"Time to Interactive\" as the browser must download and parse these files before the app can be used.",
	manyI18nLibrariesStoreTranslations: "Muchas bibliotecas i18n almacenan las traducciones en un solo objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:",
	splittingTranslationsIntoPerRoute: "Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente la carga útil inicial. Pero introduce nuevos desafíos:",
	theAppMustFirstLoad: "The app must first load the core library (e.g., i18next) which adds to the initial bundle size. Even \"lightweight\" libraries can add 10-20KB of minified JS.",
	theJsonMustBeParsed: "El JSON debe ser analizado en cada carga de página — bloqueando el hilo principal.",
	theTradeOffsOfDynamic: "Las compensaciones de la carga dinámica",
	thisTestAppProvidesA: "Esta aplicación de prueba proporciona un entorno controlado — 10 páginas con contenido realista — para comparar las bibliotecas i18n en tres ejes: el peso que añaden a su paquete de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.",
	understandingTheImpact: "Entendiendo el impacto",
	updatingTranslationsRequiresCache: "Updating translations often requires a full rebuild or clearing the CDN cache, which can delay the roll-out of critical copy changes.",
	usersMayBrieflySeeTranslation: "Users may briefly see translation keys or English text while the library and translation files are being loaded.",
	waterfallRequests: "Solicitudes en cascada:",
	whatThisBenchmarkMeasures: "Lo que mide este benchmark",
	whyASingleLargeJson: "Por qué un solo JSON grande puede perjudicar el rendimiento"
};
var resultsTable_default$7 = {
	bundleSize: "Tamaño del paquete",
	lazyLoading: "Carga diferida",
	library: "Library",
	lookupTime: "Tiempo de búsqueda",
	sampleResults: "Resultados de muestra"
};
var aboutHeader_default$7 = {
	aboutThisBenchmark: "About This Benchmark",
	methodology: "Metodología",
	thisIsAnOpenSource: "This is an open-source test application for measuring the real-world impact of internationalization libraries.",
	weDesignedThisBenchmarkTo: "Diseñamos este benchmark para proporcionar comparaciones justas, reproducibles y significativas de las bibliotecas i18n."
};
var aboutGrid_default$7 = {
	allBenchmarksRunOn: "Todos los benchmarks se ejecutan en el mismo hardware (M2 MacBook Pro, 16 GB de RAM), el mismo navegador (Chromium 120 a través de Playwright) y las mismas condiciones de red (4G simulado). Cada prueba se repite 50 veces y reportamos la mediana con los percentiles P95/P99.",
	applicationDesign: "Diseño de la aplicación",
	choosingAnI18nLibrary: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
	eachI18nLibraryIsIntegrated: "Cada biblioteca i18n se integra siguiendo su documentación oficial y sus mejores prácticas. Consultamos a los mantenedores cuando es posible para garantizar una configuración óptima. La misma aplicación React, la misma configuración Vite, el mismo despliegue.",
	fairComparison: "Comparación justa",
	measurementMethodology: "Metodología de medición",
	methodology: "Methodology",
	testEnvironment: "Entorno de prueba",
	theBenchmarkAppHas10: "La aplicación del benchmark tiene 10 páginas con contenido realista — navegación, formularios, listas dinámicas y texto estático. Cada página utiliza entre 15 y 30 claves de traducción para representar patrones de uso del mundo real.",
	theSame10PageApp: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.",
	weUseBrowserNativeApis: "Utilizamos las API nativas del navegador (Performance Timeline, Resource Timing, Layout Instability) combinadas con los datos del React Profiler. Los tamaños de los paquetes se miden después de gzip utilizando source-map-explorer para mayor precisión.",
	whyThisExists: "Why This Exists"
};
var whatWeMeasure_default$7 = {
	bundleSizeImpact: "Impacto en el tamaño del paquete",
	duringSsrTranslationDataIs: "Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan la carga útil de HTML y ralentizan la hidratación — el momento en que la página se vuelve interactiva.",
	duringSsrTranslationDataIsSerialized: "During SSR, translation data is serialized into the HTML. We measure the size of this payload and its effect on Time to Interactive (TTI).",
	howFastTheAppCan: "Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución — incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.",
	howFastTheAppCanSwitchFromOne: "How fast the app can switch from one language to another. We measure the re-render time and any network delays for lazy-loaded locales.",
	howMuchExtraTimeThe: "Cuánto tiempo extra añade la capa i18n a cada renderizado de componente — medido con actualDuration del React Profiler.",
	howMuchExtraTimeTheLibraryAdds: "How much extra time the library adds to the initial page load. This includes script execution and the time to fetch/parse translation data.",
	hydrationCost: "Costo de hidratación",
	lazyLoadingEffectiveness: "Eficacia de la carga diferida",
	localeSwitchSpeed: "Velocidad de cambio de idioma",
	renderingOverhead: "Sobrecarga de renderizado",
	theAdditionalJavascriptBytes: "The additional Javascript bytes that the library adds to your production build. We measure both the library itself and its mandatory dependencies.",
	theAdditionalJavascriptBytesSent: "Los bytes adicionales de JavaScript enviados al cliente específicamente debido al tiempo de ejecución de la biblioteca i18n, además de los archivos de traducción para el local actual.",
	whatWeMeasure: "Lo que medimos",
	whetherSplittingTranslationsByRoute: "Si dividir las traducciones por ruta o por espacio de nombres realmente reduce la carga inicial, y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché)."
};
var blogHeader_default$7 = {
	blog: "Blog",
	insightsDeepDivesAnd: "Información, análisis profundos y actualizaciones de la comunidad de benchmarking i18n.",
	insightsTutorialsAndAnalysis: "Insights, Tutorials, and Analysis"
};
var blogList_default$7 = {
	aStepByStepGuide: "Una guía paso a paso para migrar una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.",
	aStepByStepGuideOnMigrating: "A step-by-step guide on migrating from legacy i18n solutions to modern, high-performance libraries.",
	aTransparentLookAtOur: "Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.",
	aTransparentLookAtOurBenchmarking: "A transparent look at our benchmarking process, from hardware specs to measurement techniques.",
	anOverviewOfTheCurrent: "Una visión general del ecosistema i18n actual, comparando enfoques desde catálogos de mensajes hasta soluciones basadas en compiladores.",
	anOverviewOfTheCurrentI18n: "An overview of the current i18n landscape and how different libraries stack up in 2026.",
	analysis: "Analysis",
	benchmark: "Benchmark",
	benchmarkMethodologyHowWe: "Benchmark Methodology: How We Test",
	benchmarkMethodologyHowWeTest: "Metodología de benchmark: cómo probamos",
	comparingI18nLibrariesIn: "Comparing i18n Libraries in 2026: A Deep Dive",
	february12026: "1 de febrero de 2026",
	february152026: "15 de febrero de 2026",
	february282026: "28 de febrero de 2026",
	howToReduceYourI18n: "Cómo reducir su paquete i18n en un 60%",
	i18nBenchmark2026Results: "Resultados de i18n Benchmark 2026",
	january202026: "20 de enero de 2026",
	march152026: "15 de marzo de 2026",
	march82026: "8 de marzo de 2026",
	meta: "Meta",
	migratingFromReactI18nextTo: "Migración de react-i18next a Lingui",
	practicalStrategiesForOptimizingTranslation: "Estrategias prácticas para optimizar la carga de archivos de traducción, tree-shaking de locales no utilizados y aprovechamiento de la compilación en tiempo de construcción.",
	reactServerComponentsIntroduceNew: "React Server Components introduce nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.",
	readMore: "Leer más →",
	serverComponentsAndI18nWhat: "Server Components e i18n: ¿Qué cambia?",
	theStateOfInternationalizationIn: "El estado de la internacionalización en 2026",
	tutorial: "Tutorial",
	weTested12DifferentInternationalization: "Probamos 12 bibliotecas de internacionalización diferentes en 10 páginas. Aquí están los resultados detallados con gráficos interactivos."
};
var careersHeader_default$7 = {
	careers: "Carreras",
	joinOurMission: "Join our mission to make internationalization fast, easy, and performant for everyone.",
	joinOurMissionToMake: "Únase a nuestra misión para hacer la web más rápida y accesible para todos, en cualquier lugar."
};
var careersBenefits_default$7 = {
	allOurWorkIs: "Todo nuestro trabajo es de código abierto. Construya su portafolio público mientras genera un impacto.",
	competitivePay: "Competitive pay",
	impactful: "Impactante",
	openSource: "Código abierto",
	openSourceTime: "Open source time",
	percentTimeForOss: "20% time for OSS contributions",
	remoteFirst: "Remoto primero",
	topOfMarketCompensation: "Top-of-market compensation",
	whyJoinUs: "¿Por qué unirse a nosotros?",
	workFromAnywhere: "Work from anywhere in the world",
	workFromAnywhereFully: "Trabaje desde cualquier lugar. Equipo totalmente distribuido en 6 zonas horarias.",
	yourWorkDirectlyHelps: "Su trabajo ayuda directamente a los desarrolladores a crear aplicaciones internacionalizadas mejores y más rápidas."
};
var openPositions_default$7 = {
	applyNow: "Apply Now",
	backendEngineer: "Backend Engineer",
	buildAndMaintainOur: "Build and maintain our benchmarking suite and core application infrastructure.",
	buildAndMaintainThe: "Construir y mantener el tablero de benchmark, herramientas de comparación y visualizaciones interactivas.",
	community: "Community",
	createAndMaintainDocumentation: "Crear y mantener documentación, publicaciones de blog y contenido educativo sobre las mejores prácticas de rendimiento de i18n.",
	createComprehensiveGuidesApi: "Create comprehensive guides, API references, and tutorials for the community.",
	designAndMaintainThe: "Diseñar y mantener la tubería de CI/CD que ejecuta los benchmarks automáticamente en cada actualización de biblioteca.",
	designAndScaleOur: "Design and scale our data ingestion pipelines and statistical analysis engines.",
	devOpsEngineer: "Ingeniero DevOps",
	devrelEngineer: "DevRel Engineer",
	documentation: "Documentation",
	engageWithTheI18n: "Engage with the i18n community, write blog posts, and speak at conferences.",
	engineering: "Engineering",
	ensureTheAccuracyAnd: "Ensure the accuracy and reliability of our benchmarks through rigorous testing.",
	frontendDeveloper: "Desarrollador Frontend",
	fullTime: "Full-time",
	leadBenchmarkDesignAnd: "Liderar el diseño e implementación de benchmarks. Se requiere un conocimiento profundo de los componentes internos de V8, las API de rendimiento del navegador y el análisis estadístico.",
	openPositions: "Open Positions",
	partTime: "Part-time",
	qaEngineer: "QA Engineer",
	remote: "Remote",
	seniorFrontendEngineer: "Senior Frontend Engineer",
	seniorPerformanceEngineer: "Ingeniero de rendimiento senior",
	sfRemote: "San Francisco / Remote",
	technicalWriter: "Technical Writer"
};
var contactHeader_default$7 = {
	contactUs: "Contáctenos",
	getInTouch: "Ponte en contacto",
	haveIdeasFoundABug: "¿Tienes ideas? ¿Encontraste un error? Nos encantaria saber de ti.",
	haveQuestionsOrWantTo: "¿Tiene preguntas o quiere contribuir? Nos encantaría saber de usted."
};
var contactForm_default$7 = {
	bugReport: "Reporte de error",
	contribution: "Contribution",
	email: "Correo electrónico",
	emailPlaceholder: "you@example.com",
	message: "Mensaje",
	messagePlaceholder: "Tu mensaje...",
	methodologyQuestion: "Methodology Question",
	name: "Nombre",
	newBenchmarkIdea: "New Benchmark Idea",
	other: "Other",
	sendMessage: "Enviar mensaje",
	subject: "Asunto",
	topic: "Tema",
	wellGetBackTo: "Nos pondremos en contacto con usted en un plazo de 48 horas.",
	yourName: "Tu nombre"
};
var faqHeader_default$7 = {
	everythingYouNeedToKnow: "Todo lo que necesitas saber sobre i18n Benchmark.",
	frequentlyAskedQuestions: "Preguntas frecuentes"
};
var faqList_default$7 = {
	absolutelyWeWelcomeCommunity: "¡Absolutamente! Damos la bienvenida a las contribuciones de la comunidad. Bifurque el repositorio, añada su integración de biblioteca siguiendo nuestra plantilla y envíe una pull request.",
	allBenchmarksAreRun: "Todos los benchmarks se ejecutan utilizando Playwright en una configuración de hardware consistente (M2 MacBook Pro) con condiciones de red 4G simuladas. Cada prueba realiza 50 iteraciones y reportamos la mediana, los valores P95 y P99.",
	areTheResultsStatistically: "¿Son los resultados estadísticamente significativos?",
	benchmarksRunAutomaticallyVia: "Los benchmarks se ejecutan automáticamente a través de CI en cada actualización de dependencia y semanalmente en la rama principal. Los resultados se publican en el tablero en un plazo de 24 horas.",
	canIContributeA: "¿Puedo contribuir con una nueva integración de biblioteca?",
	canISubmitMyOwnBenchmarks: "¿Puedo enviar mis propios benchmarks?",
	doYouOfferConsultingServices: "¿Ofrecen servicios de consultoria?",
	howAreBenchmarksConducted: "¿Como se realizan los benchmarks?",
	howAreTheBenchmarks: "¿Cómo se ejecutan los benchmarks?",
	howCanIContribute: "¿Como puedo contribuir?",
	howOftenAreBenchmarksUpdated: "¿Con que frecuencia se actualizan los benchmarks?",
	howOftenAreResults: "¿Con qué frecuencia se actualizan los resultados?",
	i18nBenchmarkIsAnOpenSource: "i18n Benchmark is an open-source project dedicated to measuring the real-world performance impact of internationalization libraries.",
	isTheDataReliable: "¿Son fiables los datos?",
	thereAreManyWaysToContribute: "There are many ways to contribute, from submitting new benchmarks to improving our methodology documentation.",
	weCurrentlyBenchmarkReactI18next: "Actualmente probamos react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl y Paraglide. Planeamos añadir más basándonos en las peticiones de la comunidad.",
	weFollowRigorousStatisticalMethodologyIncluding: "We follow rigorous statistical methodology, including outlier detection and multiple test runs to ensure accuracy.",
	weReRunAllBenchmarksWeekly: "We re-run all benchmarks weekly against the latest versions of each library.",
	weRunStandardizedTestsInIsolated: "We run standardized tests in isolated environments, measuring bundle size, render time, and memory usage across dozens of libraries.",
	weSupportReactI18nextReactIntl: "We support react-i18next, react-intl, Lingui, Tolgee, and several other popular React i18n solutions.",
	whatIsI18nBenchmark: "¿Que es i18n Benchmark?",
	whatLibrariesAreCurrently: "¿Qué bibliotecas se prueban actualmente?",
	whichLibrariesAreCurrentlySupported: "¿Que bibliotecas son compatibles actualmente?",
	yesCommunityBenchmarkSubmissionsAre: "Yes! Community benchmark submissions are encouraged and reviewed by our core team.",
	yesOurEnterprisePlanIncludesConsulting: "Yes, our Enterprise plan includes consulting services for optimizing your app's i18n performance.",
	yesWeUseThe: "Sí. Utilizamos la prueba U de Mann-Whitney con un nivel de significación de 0,05 para comparar distribuciones. También reportamos intervalos de confianza y tamaños del efecto."
};
var pricingHeader_default$7 = {
	pricing: "Precios",
	transparentPricingForEvery: "Precios transparentes para cada etapa de su viaje i18n."
};
var pricingTiers_default$7 = {
	freeTier: "Nivel gratuito",
	free: "Gratis",
	publicBenchmarkDashboard: "Tablero público de benchmarks",
	basicLibraryComparisons: "Comparaciones básicas de bibliotecas",
	communityForumAccess: "Acceso al foro de la comunidad",
	monthlyResultDigest: "Resumen mensual de resultados",
	getStarted: "Comenzar",
	proTier: "Nivel Pro",
	perMonth: "/mes",
	allFreeFeatures: "Todas las características del nivel gratuito",
	customBenchmarkConfigurations: "Configuraciones de benchmark personalizadas",
	privateResultsDashboard: "Tablero de resultados privado",
	apiAccess1000Requests: "Acceso API (1.000 peticiones/día)",
	slackIntegration: "Integración de Slack",
	subscribeToPro: "Suscribirse a Pro",
	enterpriseTier: "Nivel Enterprise",
	custom: "Personalizado",
	allProFeatures: "Todas las características del nivel Pro",
	dedicatedBenchmarkInfrastructure: "Infraestructura de benchmark dedicada",
	customLibraryIntegrations: "Integraciones de bibliotecas personalizadas",
	slaGuarantees: "Garantías de SLA",
	prioritySupport: "Soporte prioritario",
	contactSales: "Contactar con ventas"
};
var productsHeader_default$7 = {
	products: "Productos",
	toolsAndServicesTo: "Herramientas y servicios para ayudarle a optimizar su estrategia de internacionalización."
};
var productsGrid_default$7 = {
	benchmarkDashboard: "Tablero de benchmarks",
	interactiveChartsAndTables: "Gráficos y tablas interactivos que comparan las bibliotecas i18n por tamaño de paquete, tiempo de renderizado y costo de hidratación.",
	bundleAnalyzer: "Analizador de paquetes",
	uploadYourBuildOutput: "Cargue su salida de construcción y obtenga un desglose detallado de cuánto de su paquete es sobrecarga de i18n.",
	migrationAssistant: "Asistente de migración",
	automatedCodemodsAndGuides: "Codemods y guías automatizadas para migrar entre bibliotecas i18n con una interrupción mínima.",
	performanceMonitor: "Monitor de rendimiento",
	continuousPerformanceTrackingFor: "Seguimiento continuo del rendimiento para su implementación de i18n. Reciba alertas cuando la carga de traducciones se degrade.",
	learnMore: "Saber más"
};
var settingsHeader_default$7 = {
	manageYourAccount: "Manage your account settings and preferences.",
	manageYourAccountPreferences: "Gestione sus preferencias de cuenta y configuración.",
	settings: "Configuración"
};
var profileSection_default$7 = {
	profile: "Perfil",
	displayName: "Nombre de pantalla",
	email: "Correo electrónico"
};
var preferencesSection_default$7 = {
	arabicAr: "Arabic (ar)",
	chineseSimplifiedZhCn: "Chinese (Simplified, zh-CN)",
	darkMode: "Modo oscuro",
	defaultLanguage: "Idioma predeterminado",
	emailNotifications: "Notificaciones por correo electrónico",
	englishEn: "English (en)",
	frenchFr: "French (fr)",
	germanDe: "German (de)",
	japaneseJa: "Japanese (ja)",
	preferences: "Preferencias",
	receiveWeeklyBenchmark: "Receive weekly benchmark reports",
	receiveWeeklyBenchmarkReports: "Recibir informes semanales de benchmark",
	spanishEs: "Spanish (es)",
	toggleDarkMode: "Toggle dark mode",
	toggleNotifications: "Toggle Notifications",
	useDarkColorScheme: "Usar esquema de colores oscuros"
};
var apiAccessSection_default$7 = {
	apiAccess: "Acceso API",
	apiKey: "Clave API",
	useThisKeyTo: "Utilice esta clave para acceder a la API de benchmarking de forma programática.",
	copy: "Copiar"
};
var settingsFooter_default$7 = {
	cancel: "Cancelar",
	saveChanges: "Guardar cambios"
};
var teamHeader_default$7 = {
	ourTeam: "Nuestro equipo",
	meetThePeopleBehindI18n: "Conozca a la gente detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las excelentes herramientas de desarrollo."
};
var teamGrid_default$7 = {
	aishaPatel: "Aisha Patel",
	communityManager: "Community Manager",
	dataAnalyst: "Data Analyst",
	developerAdvocate: "Developer Advocate",
	elenaKowalski: "Elena Kowalski",
	ensuresStatisticalRigorIn: "Ensures statistical rigor in our data collection and analysis.",
	ensuresStatisticalRigorInAll: "Garantiza el rigor estadístico en todos los resultados de los benchmarks. Doctorado en Estadística Aplicada por el MIT.",
	formerGoogleEngineerWith: "Former Google engineer with a passion for web performance and open source.",
	formerGoogleEngineerWith10: "Ex ingeniera de Google con 10 años de experiencia en la construcción de sistemas de internacionalización a escala.",
	founderLeadEngineer: "Founder & Lead Engineer",
	fullStackDeveloper: "Full-Stack Developer",
	maintainsTheBenchmarkingInfrastructure: "Maintains the benchmarking infrastructure and CI/CD pipelines.",
	maintainsTheBenchmarkingInfrastructureAnd: "Mantiene la infraestructura de benchmarking y la tubería de CI/CD. Colaborador de código abierto en Lingui.",
	managesCommunityContributions: "Manages community contributions and open source outreach.",
	managesCommunityContributionsPartnershipsAnd: "Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto.",
	marcusWeber: "Marcus Weber",
	passionateAboutDeveloperExperience: "Passionate about developer experience and building intuitive APIs.",
	passionateAboutDeveloperExperienceAnd: "Apasionada por la experiencia y la educación de los desarrolladores. Ponente en React Conf, JSConf e i18nNext.",
	performanceEngineer: "Performance Engineer",
	sarahChen: "Sarah Chen",
	specializesInJavascriptPerformance: "Specializes in JavaScript performance optimization and React internals.",
	specializesInJavascriptPerformanceOptimization: "Especializado en la optimización del rendimiento de JavaScript y en la metodología de benchmarking. Anteriormente en Vercel.",
	tomasRodriguez: "Tomás Rodríguez",
	yukiTanaka: "Yuki Tanaka"
};
var common_default$7 = {
	cancel: "Cancel",
	copy: "Copy",
	"footer.anOpenSourceTestApplication": "Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el tiempo de carga y la reactividad de la aplicación.",
	"footer.builtWith": "i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y TanStack Router.",
	"footer.contact": "Contacto",
	"footer.contributing": "Contribuir",
	"footer.github": "GitHub",
	"footer.methodology": "Metodología",
	"footer.resources": "Recursos",
	"header.blog": "Blog",
	"header.careers": "Carreras",
	"header.contact": "Contacto",
	"header.faq": "FAQ",
	"header.goToGithub": "Ir a GitHub",
	"header.home": "Inicio",
	"header.methodology": "Metodología",
	"header.mockPages": "Páginas de prueba",
	"header.pricing": "Precios",
	"header.products": "Productos",
	"header.settings": "Configuración",
	"header.team": "Equipo",
	mockBanner: "⚠️ Esta página contiene datos simulados solo para fines de benchmarking. No está relacionada con ningún negocio o servicio real.",
	readMore: "Read More",
	saveChanges: "Save Changes",
	"themeToggle.themeAuto": "Tema: Auto",
	"themeToggle.themeDark": "Tema: Oscuro",
	"themeToggle.themeLight": "Tema: Claro",
	"themeToggle.themeModeAutoSystemClick": "Modo de tema: automático (sistema). Haga clic para cambiar al modo claro.",
	"themeToggle.themeModeDarkClick": "Modo de tema: oscuro. Haga clic para cambiar al modo automático (sistema).",
	"themeToggle.themeModeLightClick": "Modo de tema: claro. Haga clic para cambiar al modo oscuro."
};
var home_default$7 = {
	"hero.aTestApplicationDesignedTo": "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el rendimiento de carga y la reactividad de renderizado.",
	"hero.viewResults": "Ver resultados",
	"whyItMatters.whyTheseMetricsMatter": "Por qué son importantes estas métricas",
	"whyItMatters.bundleSize": "Tamaño del paquete",
	"whyItMatters.theBundleIsTheData": "El paquete representa los datos enviados a cada usuario en todo el mundo. Un paquete más grande significa tiempos de descarga más largos — especialmente en conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código de tiempo de ejecución, además de los propios archivos de traducción.",
	"whyItMatters.renderingHydration": "Renderizado e hidratación",
	"whyItMatters.connectingALargeJson": "Conectar un gran diccionario JSON a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página se vuelva interactiva — impactando directamente el tiempo de interacción (TTI).",
	"whyItMatters.dynamicLoading": "Carga dinámica",
	"whyItMatters.loadingAllTranslationsUpfront": "Cargar todas las traducciones por adelantado sobrecarga la carga útil inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, el lazy loading introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial.",
	"understandingImpact.understandingTheImpact": "Entendiendo el impacto",
	"understandingImpact.whyASingleLargeJson": "Por qué un solo JSON grande puede perjudicar el rendimiento",
	"understandingImpact.manyI18nLibrariesStoreTranslations": "Muchas bibliotecas i18n almacenan las traducciones en un solo objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:",
	"understandingImpact.theJsonMustBeParsed": "El JSON debe ser analizado en cada carga de página — bloqueando el hilo principal.",
	"understandingImpact.contextBasedArchitecturesCanCause": "Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el local, porque cada consumidor es notificado incluso si sus claves específicas no han cambiado.",
	"understandingImpact.duringServerSideRenderingThe": "Durante la renderización del lado del servidor, el diccionario completo se serializa en la carga útil de HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.",
	"understandingImpact.theTradeOffsOfDynamic": "Las compensaciones de la carga dinámica",
	"understandingImpact.splittingTranslationsIntoPerRoute": "Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente la carga útil inicial. Pero introduce nuevos desafíos:",
	"understandingImpact.waterfallRequests": "Solicitudes en cascada:",
	"understandingImpact.flashOfUntranslatedContentFouc": "Parpadeo de contenido no traducido (FOUC):",
	"understandingImpact.cacheInvalidation": "Invalidación de la caché:",
	"understandingImpact.whatThisBenchmarkMeasures": "Lo que mide este benchmark",
	"understandingImpact.thisTestAppProvidesA": "Esta aplicación de prueba proporciona un entorno controlado — 10 páginas con contenido realista — para comparar las bibliotecas i18n en tres ejes: el peso que añaden a su paquete de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.",
	"resultsTable.sampleResults": "Resultados de muestra",
	"resultsTable.bundleSize": "Tamaño del paquete",
	"resultsTable.lookupTime": "Tiempo de búsqueda",
	"resultsTable.lazyLoading": "Carga diferida"
};
var about_default$7 = {
	"aboutHeader.methodology": "Metodología",
	"aboutHeader.weDesignedThisBenchmarkTo": "Diseñamos este benchmark para proporcionar comparaciones justas, reproducibles y significativas de las bibliotecas i18n.",
	"aboutGrid.testEnvironment": "Entorno de prueba",
	"aboutGrid.allBenchmarksRunOn": "Todos los benchmarks se ejecutan en el mismo hardware (M2 MacBook Pro, 16 GB de RAM), el mismo navegador (Chromium 120 a través de Playwright) y las mismas condiciones de red (4G simulado). Cada prueba se repite 50 veces y reportamos la mediana con los percentiles P95/P99.",
	"aboutGrid.applicationDesign": "Diseño de la aplicación",
	"aboutGrid.theBenchmarkAppHas10": "La aplicación del benchmark tiene 10 páginas con contenido realista — navegación, formularios, listas dinámicas y texto estático. Cada página utiliza entre 15 y 30 claves de traducción para representar patrones de uso del mundo real.",
	"aboutGrid.measurementMethodology": "Metodología de medición",
	"aboutGrid.weUseBrowserNativeApis": "Utilizamos las API nativas del navegador (Performance Timeline, Resource Timing, Layout Instability) combinadas con los datos del React Profiler. Los tamaños de los paquetes se miden después de gzip utilizando source-map-explorer para mayor precisión.",
	"aboutGrid.fairComparison": "Comparación justa",
	"aboutGrid.eachI18nLibraryIsIntegrated": "Cada biblioteca i18n se integra siguiendo su documentación oficial y sus mejores prácticas. Consultamos a los mantenedores cuando es posible para garantizar una configuración óptima. La misma aplicación React, la misma configuración Vite, el mismo despliegue.",
	"whatWeMeasure.bundleSizeImpact": "Impacto en el tamaño del paquete",
	"whatWeMeasure.theAdditionalJavascriptBytesSent": "Los bytes adicionales de JavaScript enviados al cliente específicamente debido al tiempo de ejecución de la biblioteca i18n, además de los archivos de traducción para el local actual.",
	"whatWeMeasure.renderingOverhead": "Sobrecarga de renderizado",
	"whatWeMeasure.howMuchExtraTimeThe": "Cuánto tiempo extra añade la capa i18n a cada renderizado de componente — medido con actualDuration del React Profiler.",
	"whatWeMeasure.hydrationCost": "Costo de hidratación",
	"whatWeMeasure.duringSsrTranslationDataIs": "Durante el SSR, los datos de traducción se serializan en el HTML. Los diccionarios grandes aumentan la carga útil de HTML y ralentizan la hidratación — el momento en que la página se vuelve interactiva.",
	"whatWeMeasure.lazyLoadingEffectiveness": "Eficacia de la carga diferida",
	"whatWeMeasure.whetherSplittingTranslationsByRoute": "Si dividir las traducciones por ruta o por espacio de nombres realmente reduce la carga inicial, y qué compensaciones introduce (solicitudes en cascada, FOUC, complejidad de la caché).",
	"whatWeMeasure.localeSwitchSpeed": "Velocidad de cambio de idioma",
	"whatWeMeasure.howFastTheAppCan": "Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución — incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.",
	"whatWeMeasure.whatWeMeasure": "Lo que medimos"
};
var blog_default$7 = {
	"blogHeader.blog": "Blog",
	"blogHeader.insightsDeepDivesAnd": "Información, análisis profundos y actualizaciones de la comunidad de benchmarking i18n.",
	"blogList.i18nBenchmark2026Results": "Resultados de i18n Benchmark 2026",
	"blogList.march152026": "15 de marzo de 2026",
	"blogList.weTested12DifferentInternationalization": "Probamos 12 bibliotecas de internacionalización diferentes en 10 páginas. Aquí están los resultados detallados con gráficos interactivos.",
	"blogList.howToReduceYourI18n": "Cómo reducir su paquete i18n en un 60%",
	"blogList.march82026": "8 de marzo de 2026",
	"blogList.practicalStrategiesForOptimizingTranslation": "Estrategias prácticas para optimizar la carga de archivos de traducción, tree-shaking de locales no utilizados y aprovechamiento de la compilación en tiempo de construcción.",
	"blogList.theStateOfInternationalizationIn": "El estado de la internacionalización en 2026",
	"blogList.february282026": "28 de febrero de 2026",
	"blogList.anOverviewOfTheCurrent": "Una visión general del ecosistema i18n actual, comparando enfoques desde catálogos de mensajes hasta soluciones basadas en compiladores.",
	"blogList.migratingFromReactI18nextTo": "Migración de react-i18next a Lingui",
	"blogList.february152026": "15 de febrero de 2026",
	"blogList.aStepByStepGuide": "Una guía paso a paso para migrar una aplicación de producción con 50.000 claves de traducción de react-i18next a Lingui.",
	"blogList.serverComponentsAndI18nWhat": "Server Components e i18n: ¿Qué cambia?",
	"blogList.february12026": "1 de febrero de 2026",
	"blogList.reactServerComponentsIntroduceNew": "React Server Components introduce nuevos patrones para la internacionalización. Exploramos las implicaciones y las mejores prácticas.",
	"blogList.benchmarkMethodologyHowWeTest": "Metodología de benchmark: cómo probamos",
	"blogList.january202026": "20 de enero de 2026",
	"blogList.aTransparentLookAtOur": "Una mirada transparente a nuestra metodología de benchmarking, incluyendo entornos de prueba, métodos estadísticos y reproducibilidad.",
	"blogList.readMore": "Leer más →"
};
var careers_default$7 = {
	"careersHeader.careers": "Carreras",
	"careersHeader.joinOurMissionToMake": "Únase a nuestra misión para hacer la web más rápida y accesible para todos, en cualquier lugar.",
	"careersBenefits.whyJoinUs": "¿Por qué unirse a nosotros?",
	"careersBenefits.remoteFirst": "Remoto primero",
	"careersBenefits.workFromAnywhereFully": "Trabaje desde cualquier lugar. Equipo totalmente distribuido en 6 zonas horarias.",
	"careersBenefits.openSource": "Código abierto",
	"careersBenefits.allOurWorkIs": "Todo nuestro trabajo es de código abierto. Construya su portafolio público mientras genera un impacto.",
	"careersBenefits.impactful": "Impactante",
	"careersBenefits.yourWorkDirectlyHelps": "Su trabajo ayuda directamente a los desarrolladores a crear aplicaciones internacionalizadas mejores y más rápidas.",
	"openPositions.openPositions": "Puestos abiertos",
	"openPositions.seniorPerformanceEngineer": "Ingeniero de rendimiento senior",
	"openPositions.fullTime": "Tiempo completo",
	"openPositions.remote": "Remoto",
	"openPositions.leadBenchmarkDesignAnd": "Liderar el diseño e implementación de benchmarks. Se requiere un conocimiento profundo de los componentes internos de V8, las API de rendimiento del navegador y el análisis estadístico.",
	"openPositions.technicalWriter": "Redactor técnico",
	"openPositions.partTime": "Tiempo parcial",
	"openPositions.createAndMaintainDocumentation": "Crear y mantener documentación, publicaciones de blog y contenido educativo sobre las mejores prácticas de rendimiento de i18n.",
	"openPositions.frontendDeveloper": "Desarrollador Frontend",
	"openPositions.buildAndMaintainThe": "Construir y mantener el tablero de benchmark, herramientas de comparación y visualizaciones interactivas.",
	"openPositions.devOpsEngineer": "Ingeniero DevOps",
	"openPositions.designAndMaintainThe": "Diseñar y mantener la tubería de CI/CD que ejecuta los benchmarks automáticamente en cada actualización de biblioteca.",
	"openPositions.applyNow": "Solicitar ahora"
};
var contact_default$7 = {
	"contactHeader.contactUs": "Contáctenos",
	"contactHeader.haveQuestionsOrWantTo": "¿Tiene preguntas o quiere contribuir? Nos encantaría saber de usted.",
	"contactForm.name": "Nombre",
	"contactForm.email": "Correo electrónico",
	"contactForm.subject": "Asunto",
	"contactForm.message": "Mensaje",
	"contactForm.sendMessage": "Enviar mensaje",
	"contactForm.wellGetBackTo": "Nos pondremos en contacto con usted en un plazo de 48 horas."
};
var faq_default$7 = {
	"faqHeader.frequentlyAskedQuestions": "Preguntas frecuentes",
	"faqHeader.everythingYouNeedTo": "Todo lo que necesita saber sobre el proyecto i18n Benchmark.",
	"faqList.howAreTheBenchmarks": "¿Cómo se ejecutan los benchmarks?",
	"faqList.allBenchmarksAreRun": "Todos los benchmarks se ejecutan utilizando Playwright en una configuración de hardware consistente (M2 MacBook Pro) con condiciones de red 4G simuladas. Cada prueba realiza 50 iteraciones y reportamos la mediana, los valores P95 y P99.",
	"faqList.whatLibrariesAreCurrently": "¿Qué bibliotecas se prueban actualmente?",
	"faqList.weCurrentlyBenchmarkReactI18next": "Actualmente probamos react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl y Paraglide. Planeamos añadir más basándonos en las peticiones de la comunidad.",
	"faqList.canIContributeA": "¿Puedo contribuir con una nueva integración de biblioteca?",
	"faqList.absolutelyWeWelcomeCommunity": "¡Absolutamente! Damos la bienvenida a las contribuciones de la comunidad. Bifurque el repositorio, añada su integración de biblioteca siguiendo nuestra plantilla y envíe una pull request.",
	"faqList.howOftenAreResults": "¿Con qué frecuencia se actualizan los resultados?",
	"faqList.benchmarksRunAutomaticallyVia": "Los benchmarks se ejecutan automáticamente a través de CI en cada actualización de dependencia y semanalmente en la rama principal. Los resultados se publican en el tablero en un plazo de 24 horas.",
	"faqList.areTheResultsStatistically": "¿Son los resultados estadísticamente significativos?",
	"faqList.yesWeUseThe": "Sí. Utilizamos la prueba U de Mann-Whitney con un nivel de significación de 0,05 para comparar distribuciones. También reportamos intervalos de confianza y tamaños del efecto."
};
var pricing_default$7 = {
	"pricingHeader.pricing": "Precios",
	"pricingHeader.transparentPricingForEvery": "Precios transparentes para cada etapa de su viaje i18n.",
	"pricingTiers.freeTier": "Nivel gratuito",
	"pricingTiers.free": "Gratis",
	"pricingTiers.publicBenchmarkDashboard": "Tablero público de benchmarks",
	"pricingTiers.basicLibraryComparisons": "Comparaciones básicas de bibliotecas",
	"pricingTiers.communityForumAccess": "Acceso al foro de la comunidad",
	"pricingTiers.monthlyResultDigest": "Resumen mensual de resultados",
	"pricingTiers.getStarted": "Comenzar",
	"pricingTiers.proTier": "Nivel Pro",
	"pricingTiers.perMonth": "/mes",
	"pricingTiers.allFreeFeatures": "Todas las características del nivel gratuito",
	"pricingTiers.customBenchmarkConfigurations": "Configuraciones de benchmark personalizadas",
	"pricingTiers.privateResultsDashboard": "Tablero de resultados privado",
	"pricingTiers.apiAccess1000Requests": "Acceso API (1.000 peticiones/día)",
	"pricingTiers.slackIntegration": "Integración de Slack",
	"pricingTiers.subscribeToPro": "Suscribirse a Pro",
	"pricingTiers.enterpriseTier": "Nivel Enterprise",
	"pricingTiers.custom": "Personalizado",
	"pricingTiers.allProFeatures": "Todas las características del nivel Pro",
	"pricingTiers.dedicatedBenchmarkInfrastructure": "Infraestructura de benchmark dedicada",
	"pricingTiers.customLibraryIntegrations": "Integraciones de bibliotecas personalizadas",
	"pricingTiers.slaGuarantees": "Garantías de SLA",
	"pricingTiers.prioritySupport": "Soporte prioritario",
	"pricingTiers.contactSales": "Contactar con ventas"
};
var products_default$7 = {
	"productsHeader.products": "Productos",
	"productsHeader.toolsAndServicesTo": "Herramientas y servicios para ayudarle a optimizar su estrategia de internacionalización.",
	"productsGrid.benchmarkDashboard": "Tablero de benchmarks",
	"productsGrid.interactiveChartsAndTables": "Gráficos y tablas interactivos que comparan las bibliotecas i18n por tamaño de paquete, tiempo de renderizado y costo de hidratación.",
	"productsGrid.bundleAnalyzer": "Analizador de paquetes",
	"productsGrid.uploadYourBuildOutput": "Cargue su salida de construcción y obtenga un desglose detallado de cuánto de su paquete es sobrecarga de i18n.",
	"productsGrid.migrationAssistant": "Asistente de migración",
	"productsGrid.automatedCodemodsAndGuides": "Codemods y guías automatizadas para migrar entre bibliotecas i18n con una interrupción mínima.",
	"productsGrid.performanceMonitor": "Monitor de rendimiento",
	"productsGrid.continuousPerformanceTrackingFor": "Seguimiento continuo del rendimiento para su implementación de i18n. Reciba alertas cuando la carga de traducciones se degrade.",
	"productsGrid.learnMore": "Saber más"
};
var settings_default$7 = {
	"settingsHeader.settings": "Configuración",
	"settingsHeader.manageYourAccountPreferences": "Gestione sus preferencias de cuenta y configuración.",
	"profileSection.profile": "Perfil",
	"profileSection.displayName": "Nombre de pantalla",
	"profileSection.email": "Correo electrónico",
	"preferencesSection.preferences": "Preferencias",
	"preferencesSection.emailNotifications": "Notificaciones por correo electrónico",
	"preferencesSection.receiveWeeklyBenchmarkReports": "Recibir informes semanales de benchmark",
	"preferencesSection.darkMode": "Modo oscuro",
	"preferencesSection.useDarkColorScheme": "Usar esquema de colores oscuros",
	"preferencesSection.defaultLanguage": "Idioma predeterminado",
	"apiAccessSection.apiAccess": "Acceso API",
	"apiAccessSection.apiKey": "Clave API",
	"apiAccessSection.useThisKeyTo": "Utilice esta clave para acceder a la API de benchmarking de forma programática.",
	"apiAccessSection.copy": "Copiar",
	"settingsFooter.cancel": "Cancelar",
	"settingsFooter.saveChanges": "Guardar cambios"
};
var team_default$7 = {
	"teamHeader.ourTeam": "Nuestro equipo",
	"teamHeader.meetThePeopleBehindI18n": "Conozca a la gente detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las excelentes herramientas de desarrollo.",
	"teamGrid.sarahChen": "Sarah Chen",
	"teamGrid.founderLeadEngineer": "Fundadora e Ingeniera Principal",
	"teamGrid.formerGoogleEngineerWith10": "Ex ingeniera de Google con 10 años de experiencia en la construcción de sistemas de internacionalización a escala.",
	"teamGrid.marcusWeber": "Marcus Weber",
	"teamGrid.performanceEngineer": "Ingeniero de rendimiento",
	"teamGrid.specializesInJavascriptPerformanceOptimization": "Especializado en la optimización del rendimiento de JavaScript y en la metodología de benchmarking. Anteriormente en Vercel.",
	"teamGrid.aishaPatel": "Aisha Patel",
	"teamGrid.developerAdvocate": "Abogado de desarrolladores",
	"teamGrid.passionateAboutDeveloperExperienceAnd": "Apasionada por la experiencia y la educación de los desarrolladores. Ponente en React Conf, JSConf e i18nNext.",
	"teamGrid.tomasRodriguez": "Tomás Rodríguez",
	"teamGrid.fullStackDeveloper": "Desarrollador Full-Stack",
	"teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Mantiene la infraestructura de benchmarking y la tubería de CI/CD. Colaborador de código abierto en Lingui.",
	"teamGrid.yukiTanaka": "Yuki Tanaka",
	"teamGrid.dataAnalyst": "Analista de datos",
	"teamGrid.ensuresStatisticalRigorInAll": "Garantiza el rigor estadístico en todos los resultados de los benchmarks. Doctorado en Estadística Aplicada por el MIT.",
	"teamGrid.elenaKowalski": "Elena Kowalski",
	"teamGrid.communityManager": "Responsable de la comunidad",
	"teamGrid.managesCommunityContributionsPartnershipsAnd": "Gestiona las contribuciones de la comunidad, las asociaciones y los eventos. Antecedentes en gobernanza de código abierto."
};
var route_default$6 = {
	oopsPageNotFound: "Oops! Page not found.",
	returnToHome: "Return to Home",
	"route.couldNotMeasureHydrationDuration": "Impossible de mesurer la durée d'hydratation :",
	"route.oopsPageNotFound": "Oups ! Page non trouvée",
	"route.returnToHome": "Retour à l'accueil"
};
var header_default$6 = {
	home: "Accueil",
	methodology: "Méthodologie",
	mockPages: "Pages de test",
	products: "Produits",
	pricing: "Tarifs",
	team: "Équipe",
	blog: "Blog",
	careers: "Carrières",
	faq: "FAQ",
	contact: "Contact",
	settings: "Paramètres",
	goToGithub: "Aller sur GitHub"
};
var footer_default$6 = {
	resources: "Ressources",
	contact: "Contact",
	github: "GitHub",
	methodology: "Méthodologie",
	contributing: "Contribuer",
	builtWith: "i18n Benchmark — Projet open source. Construit avec React, Vite & TanStack Router.",
	anOpenSourceTestApplication: "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application."
};
var themeToggle_default$6 = {
	themeModeAutoSystemClick: "Mode thématique : auto (système). Cliquez pour passer en mode clair.",
	themeModeLightClick: "Mode thématique : clair. Cliquez pour passer en mode sombre.",
	themeModeDarkClick: "Mode thématique : sombre. Cliquez pour passer en mode auto (système).",
	themeAuto: "Thème : Auto",
	themeDark: "Thème : Sombre",
	themeLight: "Thème : Clair"
};
var hero_default$6 = {
	aTestApplicationDesignedTo: "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.",
	viewResults: "Voir les résultats"
};
var whyItMatters_default$6 = {
	whyTheseMetricsMatter: "Pourquoi ces mesures sont importantes",
	bundleSize: "Taille du bundle",
	theBundleIsTheData: "Le bundle représente les données envoyées à chaque utilisateur dans le monde. Un bundle plus volumineux signifie des temps de téléchargement plus longs — particulièrement sur des connexions 3G lentes courantes dans de nombreuses régions. Les bibliothèques i18n varient considérablement dans leur poids : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, plus les fichiers de traduction eux-mêmes.",
	renderingHydration: "Rendu & Hydratation",
	connectingALargeJson: "La connexion d'un dictionnaire JSON volumineux à chaque composant crée une dépendance cachée : tout changement dans le contexte de traduction peut déclencher des re-rendus sur l'ensemble de l'arbre. Pendant l'hydratation SSR, l'analyse et l'attachement d'objets de traduction massifs ajoutent de la latence avant que la page ne devienne interactive — impactant directement le Time to Interactive (TTI).",
	dynamicLoading: "Chargement dynamique",
	loadingAllTranslationsUpfront: "Le chargement de toutes les traductions à l'avance surcharge le payload initial. Le chargement dynamique (lazy) divise les traductions par route ou par namespace, n'envoyant que ce dont la page actuelle a besoin. Cependant, le lazy loading introduit ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité de mise en cache. Mesurer les deux stratégies est essentiel."
};
var understandingImpact_default$6 = {
	cacheInvalidation: "Invalidation du cache :",
	contextBasedArchitecturesCan: "Context-based architectures can cause the entire app to re-render when the language changes. For large apps with thousands of components, this can lead to noticeable lag during locale switches.",
	contextBasedArchitecturesCanCause: "Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.",
	duringServerSideRenderingThe: "Lors du rendu côté serveur, le dictionnaire complet est sérialisé dans le payload HTML, augmentant la taille du document qui doit être téléchargé et hydraté.",
	flashOfUntranslatedContent: "Flash of Untranslated Content (FOUC)",
	flashOfUntranslatedContentFouc: "Flash de contenu non traduit (FOUC) :",
	manyI18nLibrariesStore: "Many i18n libraries store translations in large JSON files that are loaded upfront. This can significantly increase the \"Time to Interactive\" as the browser must download and parse these files before the app can be used.",
	manyI18nLibrariesStoreTranslations: "De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (des milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :",
	splittingTranslationsIntoPerRoute: "La division des traductions en morceaux par route ou par espace de noms peut réduire considérablement le payload initial. Mais cela introduit de nouveaux défis :",
	theAppMustFirstLoad: "The app must first load the core library (e.g., i18next) which adds to the initial bundle size. Even \"lightweight\" libraries can add 10-20KB of minified JS.",
	theJsonMustBeParsed: "Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.",
	theTradeOffsOfDynamic: "Les compromis du chargement dynamique",
	thisTestAppProvidesA: "Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.",
	understandingTheImpact: "Comprendre l'impact",
	updatingTranslationsRequiresCache: "Updating translations often requires a full rebuild or clearing the CDN cache, which can delay the roll-out of critical copy changes.",
	usersMayBrieflySeeTranslation: "Users may briefly see translation keys or English text while the library and translation files are being loaded.",
	waterfallRequests: "Requêtes en cascade :",
	whatThisBenchmarkMeasures: "Ce que ce benchmark mesure",
	whyASingleLargeJson: "Pourquoi un seul JSON volumineux peut nuire aux performances"
};
var resultsTable_default$6 = {
	bundleSize: "Taille du bundle",
	lazyLoading: "Chargement différé",
	library: "Library",
	lookupTime: "Temps de recherche",
	sampleResults: "Exemples de résultats"
};
var aboutHeader_default$6 = {
	aboutThisBenchmark: "About This Benchmark",
	methodology: "Méthodologie",
	thisIsAnOpenSource: "This is an open-source test application for measuring the real-world impact of internationalization libraries.",
	weDesignedThisBenchmarkTo: "Nous avons conçu ce benchmark pour fournir des comparaisons équitables, reproductibles et significatives des bibliothèques i18n."
};
var aboutGrid_default$6 = {
	allBenchmarksRunOn: "Tous les benchmarks sont exécutés sur le même matériel (M2 MacBook Pro, 16 Go de RAM), le même navigateur (Chromium 120 via Playwright) et les mêmes conditions réseau (4G simulée). Chaque test est répété 50 fois et nous rapportons la médiane avec les percentiles P95/P99.",
	applicationDesign: "Conception de l'application",
	choosingAnI18nLibrary: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
	eachI18nLibraryIsIntegrated: "Chaque bibliothèque i18n est intégrée en suivant sa documentation officielle et ses meilleures pratiques. Nous consultons les mainteneurs lorsque cela est possible. Même application React, même configuration Vite, même déploiement.",
	fairComparison: "Comparaison équitable",
	measurementMethodology: "Méthodologie de mesure",
	methodology: "Methodology",
	testEnvironment: "Environnement de test",
	theBenchmarkAppHas10: "L'application de benchmark dispose de 10 pages avec un contenu réaliste — navigation, formulaires, listes dynamiques et texte statique. Chaque page utilise 15 à 30 clés de traduction pour représenter les modèles d'utilisation du monde réel.",
	theSame10PageApp: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.",
	weUseBrowserNativeApis: "Nous utilisons les API natives du navigateur (Performance Timeline, Resource Timing, Layout Instability) combinées aux données de React Profiler. La taille des bundles est mesurée après gzip à l'aide de source-map-explorer pour plus de précision.",
	whyThisExists: "Why This Exists"
};
var whatWeMeasure_default$6 = {
	bundleSizeImpact: "Impact sur la taille du bundle",
	duringSsrTranslationDataIs: "Pendant le SSR, les données de traduction sont sérialisées dans le HTML. Les dictionnaire volumineux augmentent le payload HTML et ralentissent l'hydratation — le moment où la page devient interactive.",
	duringSsrTranslationDataIsSerialized: "During SSR, translation data is serialized into the HTML. We measure the size of this payload and its effect on Time to Interactive (TTI).",
	howFastTheAppCan: "À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération des nouvelles traductions, le rendu des composants et la mise à jour du DOM.",
	howFastTheAppCanSwitchFromOne: "How fast the app can switch from one language to another. We measure the re-render time and any network delays for lazy-loaded locales.",
	howMuchExtraTimeThe: "Combien de temps supplémentaire la couche i18n ajoute au rendu de chaque composant — mesuré à l'aide de actualDuration du React Profiler.",
	howMuchExtraTimeTheLibraryAdds: "How much extra time the library adds to the initial page load. This includes script execution and the time to fetch/parse translation data.",
	hydrationCost: "Coût d'hydratation",
	lazyLoadingEffectiveness: "Efficacité du chargement différé",
	localeSwitchSpeed: "Vitesse de changement de langue",
	renderingOverhead: "Surcharge de rendu",
	theAdditionalJavascriptBytes: "The additional Javascript bytes that the library adds to your production build. We measure both the library itself and its mandatory dependencies.",
	theAdditionalJavascriptBytesSent: "Les octets JavaScript supplémentaires envoyés au client spécifiquement en raison du runtime de la bibliothèque i18n, plus les fichiers de traduction pour la langue actuelle.",
	whatWeMeasure: "Ce que nous mesurons",
	whetherSplittingTranslationsByRoute: "Si le fractionnement des traductions par route ou par espace de noms réduit réellement la charge initiale, et quels compromis cela introduit (requêtes en cascade, FOUC, complexité du cache)."
};
var blogHeader_default$6 = {
	blog: "Blog",
	insightsDeepDivesAnd: "Aperçus, analyses approfondies et mises à jour de la communauté de benchmarking i18n.",
	insightsTutorialsAndAnalysis: "Insights, Tutorials, and Analysis"
};
var blogList_default$6 = {
	aStepByStepGuide: "Un guide étape par étape pour la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.",
	aStepByStepGuideOnMigrating: "A step-by-step guide on migrating from legacy i18n solutions to modern, high-performance libraries.",
	aTransparentLookAtOur: "Un regard transparent sur notre méthodologie de benchmarking, y compris les environnements de test, les méthodes statistiques et la reproductibilité.",
	aTransparentLookAtOurBenchmarking: "A transparent look at our benchmarking process, from hardware specs to measurement techniques.",
	anOverviewOfTheCurrent: "Un aperçu de l'écosystème i18n actuel, comparant les approches des catalogues de messages aux solutions basées sur des compilateurs.",
	anOverviewOfTheCurrentI18n: "An overview of the current i18n landscape and how different libraries stack up in 2026.",
	analysis: "Analysis",
	benchmark: "Benchmark",
	benchmarkMethodologyHowWe: "Benchmark Methodology: How We Test",
	benchmarkMethodologyHowWeTest: "Méthodologie du benchmark : comment nous testons",
	comparingI18nLibrariesIn: "Comparing i18n Libraries in 2026: A Deep Dive",
	february12026: "1er février 2026",
	february152026: "15 février 2026",
	february282026: "28 février 2026",
	howToReduceYourI18n: "Comment réduire votre bundle i18n de 60 %",
	i18nBenchmark2026Results: "Résultats de l'i18n Benchmark 2026",
	january202026: "20 janvier 2026",
	march152026: "15 mars 2026",
	march82026: "8 mars 2026",
	meta: "Meta",
	migratingFromReactI18nextTo: "Migration de react-i18next vers Lingui",
	practicalStrategiesForOptimizingTranslation: "Stratégies pratiques pour l'optimisation du chargement des fichiers de traduction, l'élimination des locales inutilisées et l'exploitation de la compilation au moment de la construction.",
	reactServerComponentsIntroduceNew: "Les React Server Components introduisent de nouveaux modèles pour l'internationalisation. Nous explorons les implications et les meilleures pratiques.",
	readMore: "Lire la suite →",
	serverComponentsAndI18nWhat: "Server Components et i18n : Qu'est-ce qui change ?",
	theStateOfInternationalizationIn: "L'état de l'internationalisation en 2026",
	tutorial: "Tutorial",
	weTested12DifferentInternationalization: "Nous avons testé 12 bibliothèques d'internationalisation différentes sur 10 pages. Voici les résultats détaillés avec des graphiques interactifs."
};
var careersHeader_default$6 = {
	careers: "Carrières",
	joinOurMission: "Join our mission to make internationalization fast, easy, and performant for everyone.",
	joinOurMissionToMake: "Rejoignez notre mission pour rendre le web plus rapide et plus accessible pour tout le monde, partout."
};
var careersBenefits_default$6 = {
	allOurWorkIs: "Tout notre travail est open source. Construisez votre portfolio public tout en ayant un impact.",
	competitivePay: "Competitive pay",
	impactful: "Impactant",
	openSource: "Open Source",
	openSourceTime: "Open source time",
	percentTimeForOss: "20% time for OSS contributions",
	remoteFirst: "Télétravail d'abord",
	topOfMarketCompensation: "Top-of-market compensation",
	whyJoinUs: "Pourquoi nous rejoindre ?",
	workFromAnywhere: "Work from anywhere in the world",
	workFromAnywhereFully: "Travaillez de n'importe où. Équipe entièrement distribuée sur 6 fuseaux horaires.",
	yourWorkDirectlyHelps: "Votre travail aide directement les développeurs à créer de meilleures applications internationalisées et plus rapides."
};
var openPositions_default$6 = {
	applyNow: "Apply Now",
	backendEngineer: "Backend Engineer",
	buildAndMaintainOur: "Build and maintain our benchmarking suite and core application infrastructure.",
	buildAndMaintainThe: "Construire et maintenir le tableau de bord du benchmark, les outils de comparaison et les visualisations interactives.",
	community: "Community",
	createAndMaintainDocumentation: "Créer et maintenir la documentation, les articles de blog et le contenu éducatif sur les meilleures pratiques de performance i18n.",
	createComprehensiveGuidesApi: "Create comprehensive guides, API references, and tutorials for the community.",
	designAndMaintainThe: "Concevoir et maintenir le pipeline CI/CD qui exécute les benchmarks automatiquement à chaque mise à jour de bibliothèque.",
	designAndScaleOur: "Design and scale our data ingestion pipelines and statistical analysis engines.",
	devOpsEngineer: "Ingénieur DevOps",
	devrelEngineer: "DevRel Engineer",
	documentation: "Documentation",
	engageWithTheI18n: "Engage with the i18n community, write blog posts, and speak at conferences.",
	engineering: "Engineering",
	ensureTheAccuracyAnd: "Ensure the accuracy and reliability of our benchmarks through rigorous testing.",
	frontendDeveloper: "Développeur Frontend",
	fullTime: "Full-time",
	leadBenchmarkDesignAnd: "Diriger la conception et la mise en œuvre des benchmarks. Connaissance approfondie des composants internes de V8, des API de performance du navigateur et de l'analyse statistique requise.",
	openPositions: "Open Positions",
	partTime: "Part-time",
	qaEngineer: "QA Engineer",
	remote: "Remote",
	seniorFrontendEngineer: "Senior Frontend Engineer",
	seniorPerformanceEngineer: "Ingénieur performance senior",
	sfRemote: "San Francisco / Remote",
	technicalWriter: "Technical Writer"
};
var contactHeader_default$6 = {
	contactUs: "Contactez-nous",
	getInTouch: "Entrer en contact",
	haveIdeasFoundABug: "Vous avez des idees ? Vous avez trouve un bug ? Nous serions ravis de vous lire.",
	haveQuestionsOrWantTo: "Vous avez des questions ou vous voulez contribuer ? Nous serions ravis de vous entendre."
};
var contactForm_default$6 = {
	bugReport: "Signalement de bug",
	contribution: "Contribution",
	email: "Email",
	emailPlaceholder: "you@example.com",
	message: "Message",
	messagePlaceholder: "Votre message...",
	methodologyQuestion: "Methodology Question",
	name: "Nom",
	newBenchmarkIdea: "New Benchmark Idea",
	other: "Other",
	sendMessage: "Envoyer le message",
	subject: "Sujet",
	topic: "Sujet",
	wellGetBackTo: "Nous vous répondrons dans les 48 heures.",
	yourName: "Votre nom"
};
var faqHeader_default$6 = {
	everythingYouNeedToKnow: "Tout ce que vous devez savoir sur i18n Benchmark.",
	frequentlyAskedQuestions: "Questions frequentes"
};
var faqList_default$6 = {
	absolutelyWeWelcomeCommunity: "Absolument ! Nous accueillons avec plaisir les contributions de la communauté. Forkez le dépôt, ajoutez l'intégration de votre bibliothèque en suivant notre modèle et soumettez une pull request.",
	allBenchmarksAreRun: "Tous les benchmarks sont exécutés à l'aide de Playwright sur une configuration matérielle cohérente (M2 MacBook Pro) avec des conditions de réseau 4G simulées. Chaque test effectue 50 itérations et nous rapportons les valeurs médiane, P95 et P99.",
	areTheResultsStatistically: "Les résultats sont-ils statistiquement significatifs ?",
	benchmarksRunAutomaticallyVia: "Les benchmarks s'exécutent automatiquement via CI à chaque mise à jour de dépendance et de manière hebdomadaire sur la branche principale. Les résultats sont publiés dans les 24 heures.",
	canIContributeA: "Puis-je contribuer avec une nouvelle intégration de bibliothèque ?",
	canISubmitMyOwnBenchmarks: "Puis-je soumettre mes propres benchmarks ?",
	doYouOfferConsultingServices: "Proposez-vous des services de conseil ?",
	howAreBenchmarksConducted: "Comment les benchmarks sont-ils realises ?",
	howAreTheBenchmarks: "Comment les benchmarks sont-ils exécutés ?",
	howCanIContribute: "Comment puis-je contribuer ?",
	howOftenAreBenchmarksUpdated: "A quelle frequence les benchmarks sont-ils mis a jour ?",
	howOftenAreResults: "À quelle fréquence les résultats sont-ils mis à jour ?",
	i18nBenchmarkIsAnOpenSource: "i18n Benchmark is an open-source project dedicated to measuring the real-world performance impact of internationalization libraries.",
	isTheDataReliable: "Les donnees sont-elles fiables ?",
	thereAreManyWaysToContribute: "There are many ways to contribute, from submitting new benchmarks to improving our methodology documentation.",
	weCurrentlyBenchmarkReactI18next: "Nous testons actuellement react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl et Paraglide. Nous prévoyons d'en ajouter d'autres sur demande de la communauté.",
	weFollowRigorousStatisticalMethodologyIncluding: "We follow rigorous statistical methodology, including outlier detection and multiple test runs to ensure accuracy.",
	weReRunAllBenchmarksWeekly: "We re-run all benchmarks weekly against the latest versions of each library.",
	weRunStandardizedTestsInIsolated: "We run standardized tests in isolated environments, measuring bundle size, render time, and memory usage across dozens of libraries.",
	weSupportReactI18nextReactIntl: "We support react-i18next, react-intl, Lingui, Tolgee, and several other popular React i18n solutions.",
	whatIsI18nBenchmark: "Qu'est-ce que i18n Benchmark ?",
	whatLibrariesAreCurrently: "Quelles bibliotecas sont actuellement testées ?",
	whichLibrariesAreCurrentlySupported: "Quelles bibliotheques sont actuellement prises en charge ?",
	yesCommunityBenchmarkSubmissionsAre: "Yes! Community benchmark submissions are encouraged and reviewed by our core team.",
	yesOurEnterprisePlanIncludesConsulting: "Yes, our Enterprise plan includes consulting services for optimizing your app's i18n performance.",
	yesWeUseThe: "Oui. Nous utilisons le test U de Mann-Whitney avec un niveau de signification de 0,05 pour comparer les distributions. Nous rapportons également les intervalles de confiance et les tailles d'effet."
};
var pricingHeader_default$6 = {
	pricing: "Tarifs",
	transparentPricingForEvery: "Une tarification transparente pour chaque étape de votre voyage i18n."
};
var pricingTiers_default$6 = {
	freeTier: "Offre gratuite",
	free: "Gratuit",
	publicBenchmarkDashboard: "Tableau de bord public des benchmarks",
	basicLibraryComparisons: "Comparaisons de base des bibliothèques",
	communityForumAccess: "Accès au forum de la communauté",
	monthlyResultDigest: "Résumé mensuel des résultats",
	getStarted: "Démarrer",
	proTier: "Offre Pro",
	perMonth: "/mois",
	allFreeFeatures: "Toutes les fonctionnalités gratuites",
	customBenchmarkConfigurations: "Configurations de benchmark personnalisées",
	privateResultsDashboard: "Tableau de bord des résultats privés",
	apiAccess1000Requests: "Accès API (1 000 requêtes/jour)",
	slackIntegration: "Intégration Slack",
	subscribeToPro: "S'abonner à Pro",
	enterpriseTier: "Offre Entreprise",
	custom: "Sur mesure",
	allProFeatures: "Toutes les fonctionnalités Pro",
	dedicatedBenchmarkInfrastructure: "Infrastructure de benchmark dédiée",
	customLibraryIntegrations: "Intégrations de bibliothèques personnalisées",
	slaGuarantees: "Garanties SLA",
	prioritySupport: "Support prioritaire",
	contactSales: "Contacter les ventes"
};
var productsHeader_default$6 = {
	products: "Produits",
	toolsAndServicesTo: "Des outils et des services pour vous aider à optimiser votre stratégie d'internationalisation."
};
var productsGrid_default$6 = {
	benchmarkDashboard: "Tableau de bord de référence",
	interactiveChartsAndTables: "Graphiques et tableaux interactifs comparant les bibliothèques i18n selon la taille du bundle, le temps de rendu et le coût d'hydratation.",
	bundleAnalyzer: "Analyseur de bundle",
	uploadYourBuildOutput: "Téléchargez votre sortie de build et obtenez une ventilation détaillée de la part de surcharge i18n dans votre bundle.",
	migrationAssistant: "Assistant de migration",
	automatedCodemodsAndGuides: "Codemods et guides automatisés pour migrer entre les bibliothèques i18n avec un minimum d'interruption.",
	performanceMonitor: "Moniteur de performance",
	continuousPerformanceTrackingFor: "Suivi continu des performances pour votre implémentation i18n. Recevez des alertes lorsque le chargement des traductions se dégrade.",
	learnMore: "En savoir plus"
};
var settingsHeader_default$6 = {
	manageYourAccount: "Manage your account settings and preferences.",
	manageYourAccountPreferences: "Gérez vos préférences de compte et votre configuration.",
	settings: "Paramètres"
};
var profileSection_default$6 = {
	profile: "Profil",
	displayName: "Nom d'affichage",
	email: "Email"
};
var preferencesSection_default$6 = {
	arabicAr: "Arabic (ar)",
	chineseSimplifiedZhCn: "Chinese (Simplified, zh-CN)",
	darkMode: "Mode sombre",
	defaultLanguage: "Langue par défaut",
	emailNotifications: "Notifications par email",
	englishEn: "English (en)",
	frenchFr: "French (fr)",
	germanDe: "German (de)",
	japaneseJa: "Japanese (ja)",
	preferences: "Préférences",
	receiveWeeklyBenchmark: "Receive weekly benchmark reports",
	receiveWeeklyBenchmarkReports: "Recevoir des rapports hebdomadaires de benchmark",
	spanishEs: "Spanish (es)",
	toggleDarkMode: "Toggle dark mode",
	toggleNotifications: "Toggle Notifications",
	useDarkColorScheme: "Utiliser le schéma de couleurs sombres"
};
var apiAccessSection_default$6 = {
	apiAccess: "Accès API",
	apiKey: "Clé API",
	useThisKeyTo: "Utilisez cette clé pour accéder à l'API de benchmarking par programmation.",
	copy: "Copier"
};
var settingsFooter_default$6 = {
	cancel: "Annuler",
	saveChanges: "Enregistrer les modifications"
};
var teamHeader_default$6 = {
	ourTeam: "Notre équipe",
	meetThePeopleBehindI18n: "Rencontrez les personnes derrière i18n Benchmark. Une équipe diversifiée unie par une passion commune pour les excellents outils de développement."
};
var teamGrid_default$6 = {
	aishaPatel: "Aisha Patel",
	communityManager: "Community Manager",
	dataAnalyst: "Data Analyst",
	developerAdvocate: "Developer Advocate",
	elenaKowalski: "Elena Kowalski",
	ensuresStatisticalRigorIn: "Ensures statistical rigor in our data collection and analysis.",
	ensuresStatisticalRigorInAll: "Assure la rigueur statistique de tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.",
	formerGoogleEngineerWith: "Former Google engineer with a passion for web performance and open source.",
	formerGoogleEngineerWith10: "Ancienne ingénieure Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.",
	founderLeadEngineer: "Founder & Lead Engineer",
	fullStackDeveloper: "Full-Stack Developer",
	maintainsTheBenchmarkingInfrastructure: "Maintains the benchmarking infrastructure and CI/CD pipelines.",
	maintainsTheBenchmarkingInfrastructureAnd: "Entretient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.",
	managesCommunityContributions: "Manages community contributions and open source outreach.",
	managesCommunityContributionsPartnershipsAnd: "Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source.",
	marcusWeber: "Marcus Weber",
	passionateAboutDeveloperExperience: "Passionate about developer experience and building intuitive APIs.",
	passionateAboutDeveloperExperienceAnd: "Passionnée par l'expérience développeur et l'éducation. Conférencière à React Conf, JSConf et i18nNext.",
	performanceEngineer: "Performance Engineer",
	sarahChen: "Sarah Chen",
	specializesInJavascriptPerformance: "Specializes in JavaScript performance optimization and React internals.",
	specializesInJavascriptPerformanceOptimization: "Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Précédemment chez Vercel.",
	tomasRodriguez: "Tomás Rodríguez",
	yukiTanaka: "Yuki Tanaka"
};
var common_default$6 = {
	cancel: "Cancel",
	copy: "Copy",
	"footer.anOpenSourceTestApplication": "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.",
	"footer.builtWith": "i18n Benchmark — Projet open source. Construit avec React, Vite & TanStack Router.",
	"footer.contact": "Contact",
	"footer.contributing": "Contribuer",
	"footer.github": "GitHub",
	"footer.methodology": "Méthodologie",
	"footer.resources": "Ressources",
	"header.blog": "Blog",
	"header.careers": "Carrières",
	"header.contact": "Contact",
	"header.faq": "FAQ",
	"header.goToGithub": "Aller sur GitHub",
	"header.home": "Accueil",
	"header.methodology": "Méthodologie",
	"header.mockPages": "Pages de test",
	"header.pricing": "Tarifs",
	"header.products": "Produits",
	"header.settings": "Paramètres",
	"header.team": "Équipe",
	mockBanner: "⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel.",
	readMore: "Read More",
	saveChanges: "Save Changes",
	"themeToggle.themeAuto": "Thème : Auto",
	"themeToggle.themeDark": "Thème : Sombre",
	"themeToggle.themeLight": "Thème : Clair",
	"themeToggle.themeModeAutoSystemClick": "Mode thématique : auto (système). Cliquez pour passer en mode clair.",
	"themeToggle.themeModeDarkClick": "Mode thématique : sombre. Cliquez pour passer en mode auto (système).",
	"themeToggle.themeModeLightClick": "Mode thématique : clair. Cliquez pour passer en mode sombre."
};
var home_default$6 = {
	"hero.aTestApplicationDesignedTo": "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.",
	"hero.viewResults": "Voir les résultats",
	"whyItMatters.whyTheseMetricsMatter": "Pourquoi ces mesures sont importantes",
	"whyItMatters.bundleSize": "Taille du bundle",
	"whyItMatters.theBundleIsTheData": "Le bundle représente les données envoyées à chaque utilisateur dans le monde. Un bundle plus volumineux signifie des temps de téléchargement plus longs — particulièrement sur des connexions 3G lentes courantes dans de nombreuses régions. Les bibliothèques i18n varient considérablement dans leur poids : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, plus les fichiers de traduction eux-mêmes.",
	"whyItMatters.renderingHydration": "Rendu & Hydratation",
	"whyItMatters.connectingALargeJson": "La connexion d'un dictionnaire JSON volumineux à chaque composant crée une dépendance cachée : tout changement dans le contexte de traduction peut déclencher des re-rendus sur l'ensemble de l'arbre. Pendant l'hydratation SSR, l'analyse et l'attachement d'objets de traduction massifs ajoutent de la latence avant que la page ne devienne interactive — impactant directement le Time to Interactive (TTI).",
	"whyItMatters.dynamicLoading": "Chargement dynamique",
	"whyItMatters.loadingAllTranslationsUpfront": "Le chargement de toutes les traductions à l'avance surcharge le payload initial. Le chargement dynamique (lazy) divise les traductions par route ou par namespace, n'envoyant que ce dont la page actuelle a besoin. Cependant, le lazy loading introduit ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité de mise en cache. Mesurer les deux stratégies est essentiel.",
	"understandingImpact.understandingTheImpact": "Comprendre l'impact",
	"understandingImpact.whyASingleLargeJson": "Pourquoi un seul JSON volumineux peut nuire aux performances",
	"understandingImpact.manyI18nLibrariesStoreTranslations": "De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (des milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :",
	"understandingImpact.theJsonMustBeParsed": "Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.",
	"understandingImpact.contextBasedArchitecturesCanCause": "Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.",
	"understandingImpact.duringServerSideRenderingThe": "Lors du rendu côté serveur, le dictionnaire complet est sérialisé dans le payload HTML, augmentant la taille du document qui doit être téléchargé et hydraté.",
	"understandingImpact.theTradeOffsOfDynamic": "Les compromis du chargement dynamique",
	"understandingImpact.splittingTranslationsIntoPerRoute": "La division des traductions en morceaux par route ou par espace de noms peut réduire considérablement le payload initial. Mais cela introduit de nouveaux défis :",
	"understandingImpact.waterfallRequests": "Requêtes en cascade :",
	"understandingImpact.flashOfUntranslatedContentFouc": "Flash de contenu non traduit (FOUC) :",
	"understandingImpact.cacheInvalidation": "Invalidation du cache :",
	"understandingImpact.whatThisBenchmarkMeasures": "Ce que ce benchmark mesure",
	"understandingImpact.thisTestAppProvidesA": "Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.",
	"resultsTable.sampleResults": "Exemples de résultats",
	"resultsTable.bundleSize": "Taille du bundle",
	"resultsTable.lookupTime": "Temps de recherche",
	"resultsTable.lazyLoading": "Chargement différé"
};
var about_default$6 = {
	"aboutHeader.methodology": "Méthodologie",
	"aboutHeader.weDesignedThisBenchmarkTo": "Nous avons conçu ce benchmark pour fournir des comparaisons équitables, reproductibles et significatives des bibliothèques i18n.",
	"aboutGrid.testEnvironment": "Environnement de test",
	"aboutGrid.allBenchmarksRunOn": "Tous les benchmarks sont exécutés sur le même matériel (M2 MacBook Pro, 16 Go de RAM), le même navigateur (Chromium 120 via Playwright) et les mêmes conditions réseau (4G simulée). Chaque test est répété 50 fois et nous rapportons la médiane avec les percentiles P95/P99.",
	"aboutGrid.applicationDesign": "Conception de l'application",
	"aboutGrid.theBenchmarkAppHas10": "L'application de benchmark dispose de 10 pages avec un contenu réaliste — navigation, formulaires, listes dynamiques et texte statique. Chaque page utilise 15 à 30 clés de traduction pour représenter les modèles d'utilisation du monde réel.",
	"aboutGrid.measurementMethodology": "Méthodologie de mesure",
	"aboutGrid.weUseBrowserNativeApis": "Nous utilisons les API natives du navigateur (Performance Timeline, Resource Timing, Layout Instability) combinées aux données de React Profiler. La taille des bundles est mesurée après gzip à l'aide de source-map-explorer pour plus de précision.",
	"aboutGrid.fairComparison": "Comparaison équitable",
	"aboutGrid.eachI18nLibraryIsIntegrated": "Chaque bibliothèque i18n est intégrée en suivant sa documentation officielle et ses meilleures pratiques. Nous consultons les mainteneurs lorsque cela est possible. Même application React, même configuration Vite, même déploiement.",
	"whatWeMeasure.bundleSizeImpact": "Impact sur la taille du bundle",
	"whatWeMeasure.theAdditionalJavascriptBytesSent": "Les octets JavaScript supplémentaires envoyés au client spécifiquement en raison du runtime de la bibliothèque i18n, plus les fichiers de traduction pour la langue actuelle.",
	"whatWeMeasure.renderingOverhead": "Surcharge de rendu",
	"whatWeMeasure.howMuchExtraTimeThe": "Combien de temps supplémentaire la couche i18n ajoute au rendu de chaque composant — mesuré à l'aide de actualDuration du React Profiler.",
	"whatWeMeasure.hydrationCost": "Coût d'hydratation",
	"whatWeMeasure.duringSsrTranslationDataIs": "Pendant le SSR, les données de traduction sont sérialisées dans le HTML. Les dictionnaire volumineux augmentent le payload HTML et ralentissent l'hydratation — le moment où la page devient interactive.",
	"whatWeMeasure.lazyLoadingEffectiveness": "Efficacité du chargement différé",
	"whatWeMeasure.whetherSplittingTranslationsByRoute": "Si le fractionnement des traductions par route ou par espace de noms réduit réellement la charge initiale, et quels compromis cela introduit (requêtes en cascade, FOUC, complexité du cache).",
	"whatWeMeasure.localeSwitchSpeed": "Vitesse de changement de langue",
	"whatWeMeasure.howFastTheAppCan": "À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération des nouvelles traductions, le rendu des composants et la mise à jour du DOM.",
	"whatWeMeasure.whatWeMeasure": "Ce que nous mesurons"
};
var blog_default$6 = {
	"blogHeader.blog": "Blog",
	"blogHeader.insightsDeepDivesAnd": "Aperçus, analyses approfondies et mises à jour de la communauté de benchmarking i18n.",
	"blogList.i18nBenchmark2026Results": "Résultats de l'i18n Benchmark 2026",
	"blogList.march152026": "15 mars 2026",
	"blogList.weTested12DifferentInternationalization": "Nous avons testé 12 bibliothèques d'internationalisation différentes sur 10 pages. Voici les résultats détaillés avec des graphiques interactifs.",
	"blogList.howToReduceYourI18n": "Comment réduire votre bundle i18n de 60 %",
	"blogList.march82026": "8 mars 2026",
	"blogList.practicalStrategiesForOptimizingTranslation": "Stratégies pratiques pour l'optimisation du chargement des fichiers de traduction, l'élimination des locales inutilisées et l'exploitation de la compilation au moment de la construction.",
	"blogList.theStateOfInternationalizationIn": "L'état de l'internationalisation en 2026",
	"blogList.february282026": "28 février 2026",
	"blogList.anOverviewOfTheCurrent": "Un aperçu de l'écosystème i18n actuel, comparant les approches des catalogues de messages aux solutions basées sur des compilateurs.",
	"blogList.migratingFromReactI18nextTo": "Migration de react-i18next vers Lingui",
	"blogList.february152026": "15 février 2026",
	"blogList.aStepByStepGuide": "Un guide étape par étape pour la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.",
	"blogList.serverComponentsAndI18nWhat": "Server Components et i18n : Qu'est-ce qui change ?",
	"blogList.february12026": "1er février 2026",
	"blogList.reactServerComponentsIntroduceNew": "Les React Server Components introduisent de nouveaux modèles pour l'internationalisation. Nous explorons les implications et les meilleures pratiques.",
	"blogList.benchmarkMethodologyHowWeTest": "Méthodologie du benchmark : comment nous testons",
	"blogList.january202026": "20 janvier 2026",
	"blogList.aTransparentLookAtOur": "Un regard transparent sur notre méthodologie de benchmarking, y compris les environnements de test, les méthodes statistiques et la reproductibilité.",
	"blogList.readMore": "Lire la suite →"
};
var careers_default$6 = {
	"careersHeader.careers": "Carrières",
	"careersHero.fromAnywhere": "de n'importe où dans le monde",
	"careersBenefits.competitivePay": "Salaire compétitif",
	"careersBenefits.topOfMarket": "Rémunération au sommet du marché",
	"careersBenefits.openSourceTime": "Temps open source",
	"careersBenefits.twentyPercentTime": "20 % du temps pour l'OSS",
	"careersPositions.seniorFrontendEngineer": "Ingénieur Frontend Senior",
	"careersPositions.seniorFrontendEngineerDesc": "Construisez et maintenez notre tableau de bord de benchmarking et nos outils de développement en utilisant React, TypeScript et Vite.",
	"openPositions.openPositions": "Postes vacants",
	"openPositions.remote": "À distance",
	"openPositions.fullTime": "Temps plein",
	"openPositions.engineering": "Ingénierie",
	"openPositions.applyNow": "Postuler maintenant"
};
var contact_default$6 = {
	"contactHeader.contactUs": "Contactez-nous",
	"contactHeader.haveQuestionsOrWantTo": "Vous avez des questions ou vous voulez contribuer ? Nous serions ravis de vous entendre.",
	"contactForm.name": "Nom",
	"contactForm.email": "Email",
	"contactForm.subject": "Sujet",
	"contactForm.message": "Message",
	"contactForm.sendMessage": "Envoyer le message",
	"contactForm.wellGetBackTo": "Nous vous répondrons dans les 48 heures."
};
var faq_default$6 = {
	"faqHeader.frequentlyAskedQuestions": "Foire aux questions",
	"faqHeader.everythingYouNeedTo": "Tout ce que vous devez savoir sur le projet i18n Benchmark.",
	"faqList.howAreTheBenchmarks": "Comment les benchmarks sont-ils exécutés ?",
	"faqList.allBenchmarksAreRun": "Tous les benchmarks sont exécutés à l'aide de Playwright sur une configuration matérielle cohérente (M2 MacBook Pro) avec des conditions de réseau 4G simulées. Chaque test effectue 50 itérations et nous rapportons les valeurs médiane, P95 et P99.",
	"faqList.whatLibrariesAreCurrently": "Quelles bibliotecas sont actuellement testées ?",
	"faqList.weCurrentlyBenchmarkReactI18next": "Nous testons actuellement react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl et Paraglide. Nous prévoyons d'en ajouter d'autres sur demande de la communauté.",
	"faqList.canIContributeA": "Puis-je contribuer avec une nouvelle intégration de bibliothèque ?",
	"faqList.absolutelyWeWelcomeCommunity": "Absolument ! Nous accueillons avec plaisir les contributions de la communauté. Forkez le dépôt, ajoutez l'intégration de votre bibliothèque en suivant notre modèle et soumettez une pull request.",
	"faqList.howOftenAreResults": "À quelle fréquence les résultats sont-ils mis à jour ?",
	"faqList.benchmarksRunAutomaticallyVia": "Les benchmarks s'exécutent automatiquement via CI à chaque mise à jour de dépendance et de manière hebdomadaire sur la branche principale. Les résultats sont publiés dans les 24 heures.",
	"faqList.areTheResultsStatistically": "Les résultats sont-ils statistiquement significatifs ?",
	"faqList.yesWeUseThe": "Oui. Nous utilisons le test U de Mann-Whitney avec un niveau de signification de 0,05 pour comparer les distributions. Nous rapportons également les intervalles de confiance et les tailles d'effet."
};
var pricing_default$6 = {
	"pricingTiers.starterTier": "Starter",
	"pricingTiers.starterPrice": "0 $",
	"pricingTiers.forever": "à vie",
	"pricingTiers.runsPerDay": "5 analyses de benchmark/jour",
	"pricingTiers.libraries3": "3 bibliothèques",
	"pricingTiers.communitySupport": "Support communautaire",
	"pricingTiers.publicResults": "Résultats publics",
	"pricingTiers.getStarted": "Démarrer",
	"pricingTiers.proTier": "Pro",
	"pricingTiers.proPrice": "29 $",
	"pricingTiers.perMonth": "/mois",
	"pricingTiers.unlimitedRuns": "Analyses illimitées",
	"pricingTiers.allLibraries": "Toutes les bibliothèques",
	"pricingTiers.prioritySupport": "Support prioritaire",
	"pricingTiers.privateResults": "Résultats privés",
	"pricingTiers.ciIntegration": "Intégration CI",
	"pricingTiers.historicalData": "Données historiques",
	"pricingTiers.enterpriseTier": "Entreprise",
	"pricingTiers.custom": "Sur mesure",
	"pricingTiers.everythingInPro": "Tout ce qui est dans Pro",
	"pricingTiers.onPremiseOption": "Option sur site",
	"pricingTiers.ssoSaml": "SSO & SAML",
	"pricingTiers.dedicatedAccountManager": "Gestionnaire de compte dédié",
	"pricingTiers.customSLAs": "SLAs personnalisés",
	"pricingTiers.auditLogs": "Journaux d'audit",
	"pricingTiers.trainingSessions": "Sessions de formation",
	"pricingTiers.contactSales": "Contacter les ventes",
	"pricingHeader.pricing": "Tarifs",
	"pricingHeader.transparentPricingForEvery": "Une tarification transparente pour chaque étape de votre voyage i18n."
};
var products_default$6 = {
	"productsHeader.products": "Produits",
	"productsHeader.toolsAndServicesTo": "Des outils et des services pour vous aider à optimiser votre stratégie d'internationalisation.",
	"productsGrid.benchmarkDashboard": "Tableau de bord de référence",
	"productsGrid.interactiveChartsAndTables": "Graphiques et tableaux interactifs comparant les bibliothèques i18n selon la taille du bundle, le temps de rendu et le coût d'hydratation.",
	"productsGrid.bundleAnalyzer": "Analyseur de bundle",
	"productsGrid.uploadYourBuildOutput": "Téléchargez votre sortie de build et obtenez une ventilation détaillée de la part de surcharge i18n dans votre bundle.",
	"productsGrid.migrationAssistant": "Assistant de migration",
	"productsGrid.automatedCodemodsAndGuides": "Codemods et guides automatisés pour migrer entre les bibliothèques i18n avec un minimum d'interruption.",
	"productsGrid.performanceMonitor": "Moniteur de performance",
	"productsGrid.continuousPerformanceTrackingFor": "Suivi continu des performances pour votre implémentation i18n. Recevez des alertes lorsque le chargement des traductions se dégrade.",
	"productsGrid.learnMore": "En savoir plus"
};
var settings_default$6 = {
	"settingsHeader.settings": "Paramètres",
	"settingsHeader.manageYourAccountPreferences": "Gérez vos préférences de compte et votre configuration.",
	"profileSection.profile": "Profil",
	"profileSection.displayName": "Nom d'affichage",
	"profileSection.email": "Email",
	"preferencesSection.preferences": "Préférences",
	"preferencesSection.emailNotifications": "Notifications par email",
	"preferencesSection.receiveWeeklyBenchmarkReports": "Recevoir des rapports hebdomadaires de benchmark",
	"preferencesSection.darkMode": "Mode sombre",
	"preferencesSection.useDarkColorScheme": "Utiliser le schéma de couleurs sombres",
	"preferencesSection.defaultLanguage": "Langue par défaut",
	"apiAccessSection.apiAccess": "Accès API",
	"apiAccessSection.apiKey": "Clé API",
	"apiAccessSection.useThisKeyTo": "Utilisez cette clé pour accéder à l'API de benchmarking par programmation.",
	"apiAccessSection.copy": "Copier",
	"settingsFooter.cancel": "Annuler",
	"settingsFooter.saveChanges": "Enregistrer les modifications"
};
var team_default$6 = {
	"teamHeader.ourTeam": "Notre équipe",
	"teamHeader.meetThePeopleBehindI18n": "Rencontrez les personnes derrière i18n Benchmark. Une équipe diversifiée unie par une passion commune pour les excellents outils de développement.",
	"teamGrid.sarahChen": "Sarah Chen",
	"teamGrid.founderLeadEngineer": "Fondatrice & Ingénieure en chef",
	"teamGrid.formerGoogleEngineerWith10": "Ancienne ingénieure Google avec 10 ans d'expérience dans la construction de systèmes d'internationalisation à grande échelle.",
	"teamGrid.marcusWeber": "Marcus Weber",
	"teamGrid.performanceEngineer": "Ingénieur Performance",
	"teamGrid.specializesInJavascriptPerformanceOptimization": "Spécialisé dans l'optimisation des performances JavaScript et la méthodologie de benchmarking. Précédemment chez Vercel.",
	"teamGrid.aishaPatel": "Aisha Patel",
	"teamGrid.developerAdvocate": "Developer Advocate",
	"teamGrid.passionateAboutDeveloperExperienceAnd": "Passionnée par l'expérience développeur et l'éducation. Conférencière à React Conf, JSConf et i18nNext.",
	"teamGrid.tomasRodriguez": "Tomás Rodríguez",
	"teamGrid.fullStackDeveloper": "Développeur Full-Stack",
	"teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Entretient l'infrastructure de benchmarking et le pipeline CI/CD. Contributeur open source à Lingui.",
	"teamGrid.yukiTanaka": "Yuki Tanaka",
	"teamGrid.dataAnalyst": "Analyste de données",
	"teamGrid.ensuresStatisticalRigorInAll": "Assure la rigueur statistique de tous les résultats de benchmark. Doctorat en statistiques appliquées du MIT.",
	"teamGrid.elenaKowalski": "Elena Kowalski",
	"teamGrid.communityManager": "Responsable de communauté",
	"teamGrid.managesCommunityContributionsPartnershipsAnd": "Gère les contributions de la communauté, les partenariats et les événements. Expérience en gouvernance open source."
};
var route_default$5 = {
	oopsPageNotFound: "Oops! Page not found.",
	returnToHome: "Return to Home",
	"route.couldNotMeasureHydrationDuration": "Impossibile misurare la durata dell'idratazione:",
	"route.oopsPageNotFound": "Ops! Pagina non trovata",
	"route.returnToHome": "Torna alla Home"
};
var header_default$5 = {
	home: "Home",
	methodology: "Metodologia",
	mockPages: "Pagine di test",
	products: "Prodotti",
	pricing: "Prezzi",
	team: "Team",
	blog: "Blog",
	careers: "Carriere",
	faq: "FAQ",
	contact: "Contatti",
	settings: "Impostazioni",
	goToGithub: "Vai su GitHub"
};
var footer_default$5 = {
	resources: "Risorse",
	contact: "Contatti",
	github: "GitHub",
	methodology: "Metodologia",
	contributing: "Contribuire",
	builtWith: "i18n Benchmark — Progetto open-source. Costruito con React, Vite e TanStack Router.",
	anOpenSourceTestApplication: "Un'applicazione di test open-source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app."
};
var themeToggle_default$5 = {
	themeModeAutoSystemClick: "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.",
	themeModeLightClick: "Modalità tema: chiara. Clicca per passare alla modalità scura.",
	themeModeDarkClick: "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).",
	themeAuto: "Tema: Auto",
	themeDark: "Tema: Scuro",
	themeLight: "Tema: Chiaro"
};
var hero_default$5 = {
	aTestApplicationDesignedTo: "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.",
	viewResults: "Visualizza i risultati"
};
var whyItMatters_default$5 = {
	whyTheseMetricsMatter: "Perché queste metriche sono importanti",
	bundleSize: "Dimensione del bundle",
	theBundleIsTheData: "Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.",
	renderingHydration: "Rendering e idratazione",
	connectingALargeJson: "Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).",
	dynamicLoading: "Caricamento dinamico",
	loadingAllTranslationsUpfront: "Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale."
};
var understandingImpact_default$5 = {
	cacheInvalidation: "Invalidazione della cache:",
	contextBasedArchitecturesCan: "Context-based architectures can cause the entire app to re-render when the language changes. For large apps with thousands of components, this can lead to noticeable lag during locale switches.",
	contextBasedArchitecturesCanCause: "Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.",
	duringServerSideRenderingThe: "Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idratato.",
	flashOfUntranslatedContent: "Flash of Untranslated Content (FOUC)",
	flashOfUntranslatedContentFouc: "Flash di contenuti non tradotti (FOUC):",
	manyI18nLibrariesStore: "Many i18n libraries store translations in large JSON files that are loaded upfront. This can significantly increase the \"Time to Interactive\" as the browser must download and parse these files before the app can be used.",
	manyI18nLibrariesStoreTranslations: "Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:",
	splittingTranslationsIntoPerRoute: "La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:",
	theAppMustFirstLoad: "The app must first load the core library (e.g., i18next) which adds to the initial bundle size. Even \"lightweight\" libraries can add 10-20KB of minified JS.",
	theJsonMustBeParsed: "Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.",
	theTradeOffsOfDynamic: "I compromessi del caricamento dinamico",
	thisTestAppProvidesA: "Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.",
	understandingTheImpact: "Capire l'impatto",
	updatingTranslationsRequiresCache: "Updating translations often requires a full rebuild or clearing the CDN cache, which can delay the roll-out of critical copy changes.",
	usersMayBrieflySeeTranslation: "Users may briefly see translation keys or English text while the library and translation files are being loaded.",
	waterfallRequests: "Richieste a cascata:",
	whatThisBenchmarkMeasures: "Cosa misura questo benchmark",
	whyASingleLargeJson: "Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni"
};
var resultsTable_default$5 = {
	bundleSize: "Dimensione del bundle",
	lazyLoading: "Caricamento lazy",
	library: "Library",
	lookupTime: "Tempo di ricerca",
	sampleResults: "Risultati di esempio"
};
var aboutHeader_default$5 = {
	aboutThisBenchmark: "About This Benchmark",
	methodology: "Metodologia",
	thisIsAnOpenSource: "This is an open-source test application for measuring the real-world impact of internationalization libraries.",
	weDesignedThisBenchmarkTo: "Abbiamo progettato questo benchmark per fornire confronti equi, riproducibili e significativi delle librerie i18n."
};
var aboutGrid_default$5 = {
	allBenchmarksRunOn: "Tutti i benchmark vengono eseguiti sullo stesso hardware (M2 MacBook Pro, 16 GB di RAM), lo stesso browser (Chromium 120 tramite Playwright) e le stesse condizioni di rete (4G simulato). Ogni test viene ripetuto 50 volte e riportiamo la mediana con i percentili P95/P99.",
	applicationDesign: "Design dell'applicazione",
	choosingAnI18nLibrary: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
	eachI18nLibraryIsIntegrated: "Ogni libreria i18n viene integrata seguendo la sua documentazione ufficiale e le migliori pratiche. Consultiamo i manutentori, quando possibile, per garantire una configurazione ottimale. Stessa app React, stessa configurazione Vite, stessa distribuzione.",
	fairComparison: "Confronto equo",
	measurementMethodology: "Metodologia di misurazione",
	methodology: "Methodology",
	testEnvironment: "Ambiente di test",
	theBenchmarkAppHas10: "L'app di benchmark ha 10 pagine con contenuti realistici: navigazione, moduli, elenchi dinamici e testo statico. Ogni pagina utilizza 15-30 chiavi di traduzione per rappresentare modelli di utilizzo reali.",
	theSame10PageApp: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.",
	weUseBrowserNativeApis: "Utilizziamo le API native del browser (Performance Timeline, Resource Timing, Layout Instability) combinate con i dati di React Profiler. Le dimensioni dei bundle vengono misurate dopo la compressione gzip utilizzando source-map-explorer per accuratezza.",
	whyThisExists: "Why This Exists"
};
var whatWeMeasure_default$5 = {
	bundleSizeImpact: "Impatto sulla dimensione del bundle",
	duringSsrTranslationDataIs: "Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. I grandi dizionari aumentano il payload HTML e rallentano l'idratazione, il momento in cui la pagina diventa interattiva.",
	duringSsrTranslationDataIsSerialized: "During SSR, translation data is serialized into the HTML. We measure the size of this payload and its effect on Time to Interactive (TTI).",
	howFastTheAppCan: "Quanto velocemente l'app può passare da una lingua all'altra in esecuzione, includendo il recupero delle nuove traduzioni, il re-rendering dei componenti e l'aggiornamento del DOM.",
	howFastTheAppCanSwitchFromOne: "How fast the app can switch from one language to another. We measure the re-render time and any network delays for lazy-loaded locales.",
	howMuchExtraTimeThe: "Quanto tempo extra aggiunge lo strato i18n a ogni rendering di componente — misurato utilizzando actualDuration di React Profiler.",
	howMuchExtraTimeTheLibraryAdds: "How much extra time the library adds to the initial page load. This includes script execution and the time to fetch/parse translation data.",
	hydrationCost: "Costo di idratazione",
	lazyLoadingEffectiveness: "Efficacia del caricamento lazy",
	localeSwitchSpeed: "Velocità di cambio localizzazione",
	renderingOverhead: "Sovrapprezzo di rendering",
	theAdditionalJavascriptBytes: "The additional Javascript bytes that the library adds to your production build. We measure both the library itself and its mandatory dependencies.",
	theAdditionalJavascriptBytesSent: "I byte JavaScript aggiuntivi inviati al client specificamente a causa del runtime della libreria i18n, oltre ai file di traduzione per la localizzazione corrente.",
	whatWeMeasure: "Cosa misuriamo",
	whetherSplittingTranslationsByRoute: "Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache)."
};
var blogHeader_default$5 = {
	blog: "Blog",
	insightsDeepDivesAnd: "Approfondimenti e aggiornamenti dalla comunità di benchmarking i18n.",
	insightsTutorialsAndAnalysis: "Insights, Tutorials, and Analysis"
};
var blogList_default$5 = {
	aStepByStepGuide: "Una guida passo-passo per la migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.",
	aStepByStepGuideOnMigrating: "A step-by-step guide on migrating from legacy i18n solutions to modern, high-performance libraries.",
	aTransparentLookAtOur: "Uno sguardo trasparente alla nostra metodologia di benchmarking, inclusi gli ambienti di test, i metodi statistici e la riproducibilità.",
	aTransparentLookAtOurBenchmarking: "A transparent look at our benchmarking process, from hardware specs to measurement techniques.",
	anOverviewOfTheCurrent: "Una panoramica dell'attuale ecosistema i18n, confrontando approcci dai cataloghi di messaggi alle soluzioni basate su compilatore.",
	anOverviewOfTheCurrentI18n: "An overview of the current i18n landscape and how different libraries stack up in 2026.",
	analysis: "Analysis",
	benchmark: "Benchmark",
	benchmarkMethodologyHowWe: "Benchmark Methodology: How We Test",
	benchmarkMethodologyHowWeTest: "Metodologia del benchmark: come testiamo",
	comparingI18nLibrariesIn: "Comparing i18n Libraries in 2026: A Deep Dive",
	february12026: "1 febbraio 2026",
	february152026: "15 febbraio 2026",
	february282026: "28 febbraio 2026",
	howToReduceYourI18n: "Come ridurre il bundle i18n del 60%",
	i18nBenchmark2026Results: "Risultati i18n Benchmark 2026",
	january202026: "20 gennaio 2026",
	march152026: "15 marzo 2026",
	march82026: "8 marzo 2026",
	meta: "Meta",
	migratingFromReactI18nextTo: "Migrazione da react-i18next a Lingui",
	practicalStrategiesForOptimizingTranslation: "Strategie pratiche per ottimizzare il caricamento dei file di traduzione, il tree-shaking delle localizzazioni inutilizzate e l'uso della compilazione in fase di build.",
	reactServerComponentsIntroduceNew: "I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.",
	readMore: "Leggi di più →",
	serverComponentsAndI18nWhat: "Server Components e i18n: cosa cambia?",
	theStateOfInternationalizationIn: "Lo stato dell'internazionalizzazione nel 2026",
	tutorial: "Tutorial",
	weTested12DifferentInternationalization: "Abbiamo testato 12 diverse librerie di internazionalizzazione su 10 pagine. Ecco i risultati dettagliati con grafici interattivi."
};
var careersHeader_default$5 = {
	careers: "Carriere",
	joinOurMission: "Join our mission to make internationalization fast, easy, and performant for everyone.",
	joinOurMissionToMake: "Unisciti alla nostra missione per rendere il web più veloce e accessibile per tutti, ovunque."
};
var careersBenefits_default$5 = {
	allOurWorkIs: "Tutto il nostro lavoro è open source. Costruisci il tuo portfolio pubblico mentre generi un impatto.",
	competitivePay: "Competitive pay",
	impactful: "Impattante",
	openSource: "Open Source",
	openSourceTime: "Open source time",
	percentTimeForOss: "20% time for OSS contributions",
	remoteFirst: "Remoto-first",
	topOfMarketCompensation: "Top-of-market compensation",
	whyJoinUs: "Perché unirti a noi?",
	workFromAnywhere: "Work from anywhere in the world",
	workFromAnywhereFully: "Lavora da ovunque. Team completamente distribuito in 6 fusi orari.",
	yourWorkDirectlyHelps: "Il tuo lavoro aiuta direttamente i sviluppatori a creare applicazioni internazionalizzate migliori e più veloci."
};
var openPositions_default$5 = {
	applyNow: "Apply Now",
	backendEngineer: "Backend Engineer",
	buildAndMaintainOur: "Build and maintain our benchmarking suite and core application infrastructure.",
	buildAndMaintainThe: "Costruire e mantenere la dashboard dei benchmark, gli strumenti di confronto e le visualizzazioni interattive.",
	community: "Community",
	createAndMaintainDocumentation: "Creare e mantenere documentazione, post sul blog e contenuti educativi sulle migliori pratiche per le prestazioni i18n.",
	createComprehensiveGuidesApi: "Create comprehensive guides, API references, and tutorials for the community.",
	designAndMaintainThe: "Progettare e mantenere la pipeline CI/CD che esegue i benchmark automaticamente a ogni aggiornamento della libreria.",
	designAndScaleOur: "Design and scale our data ingestion pipelines and statistical analysis engines.",
	devOpsEngineer: "Ingegnere DevOps",
	devrelEngineer: "DevRel Engineer",
	documentation: "Documentation",
	engageWithTheI18n: "Engage with the i18n community, write blog posts, and speak at conferences.",
	engineering: "Engineering",
	ensureTheAccuracyAnd: "Ensure the accuracy and reliability of our benchmarks through rigorous testing.",
	frontendDeveloper: "Sviluppatore Frontend",
	fullTime: "Full-time",
	leadBenchmarkDesignAnd: "Guidare la progettazione e l'implementazione del benchmark. È richiesta una profonda conoscenza dei meccanismi interni di V8, delle API delle prestazioni del browser e dell'analisi statistica.",
	openPositions: "Open Positions",
	partTime: "Part-time",
	qaEngineer: "QA Engineer",
	remote: "Remote",
	seniorFrontendEngineer: "Senior Frontend Engineer",
	seniorPerformanceEngineer: "Ingegnere delle prestazioni senior",
	sfRemote: "San Francisco / Remote",
	technicalWriter: "Technical Writer"
};
var contactHeader_default$5 = {
	contactUs: "Contattaci",
	getInTouch: "Mettiti in contatto",
	haveIdeasFoundABug: "Hai idee? Hai trovato un bug? Ci farebbe piacere sentirti.",
	haveQuestionsOrWantTo: "Hai domande o vuoi contribuire? Ci piacerebbe sentirti."
};
var contactForm_default$5 = {
	bugReport: "Segnalazione bug",
	contribution: "Contribution",
	email: "Email",
	emailPlaceholder: "you@example.com",
	message: "Messaggio",
	messagePlaceholder: "Il tuo messaggio...",
	methodologyQuestion: "Methodology Question",
	name: "Nome",
	newBenchmarkIdea: "New Benchmark Idea",
	other: "Other",
	sendMessage: "Invia messaggio",
	subject: "Oggetto",
	topic: "Argomento",
	wellGetBackTo: "Ti risponderemo entro 48 ore.",
	yourName: "Il tuo nome"
};
var faqHeader_default$5 = {
	everythingYouNeedToKnow: "Tutto cio che devi sapere su i18n Benchmark.",
	frequentlyAskedQuestions: "Domande frequenti"
};
var faqList_default$5 = {
	absolutelyWeWelcomeCommunity: "Assolutamente! Accogliamo con favore i contributi della comunità. Forka il repository, aggiungi l'integrazione della tua libreria seguendo il nostro template e invia una pull request.",
	allBenchmarksAreRun: "Tutti i benchmark vengono eseguiti utilizzando Playwright su una configurazione hardware coerente (M2 MacBook Pro) con condizioni di rete 4G simulate. Ogni test esegue 50 iterazioni e riportiamo la mediana, i valori P95 e P99.",
	areTheResultsStatistically: "I risultati sono statisticamente significativi?",
	benchmarksRunAutomaticallyVia: "I benchmark vengono eseguiti automaticamente tramite CI a ogni aggiornamento di dipendenza e settimanalmente sul branch main. I risultati vengono pubblicati sul cruscotto entro 24 ore.",
	canIContributeA: "Posso contribuire con l'integrazione di una nuova libreria?",
	canISubmitMyOwnBenchmarks: "Posso inviare i miei benchmark?",
	doYouOfferConsultingServices: "Offrite servizi di consulenza?",
	howAreBenchmarksConducted: "Come vengono condotti i benchmark?",
	howAreTheBenchmarks: "Come vengono eseguiti i benchmark?",
	howCanIContribute: "Come posso contribuire?",
	howOftenAreBenchmarksUpdated: "Con quale frequenza vengono aggiornati i benchmark?",
	howOftenAreResults: "Con quale frequenza vengono aggiornati i risultati?",
	i18nBenchmarkIsAnOpenSource: "i18n Benchmark is an open-source project dedicated to measuring the real-world performance impact of internationalization libraries.",
	isTheDataReliable: "I dati sono affidabili?",
	thereAreManyWaysToContribute: "There are many ways to contribute, from submitting new benchmarks to improving our methodology documentation.",
	weCurrentlyBenchmarkReactI18next: "Attualmente testiamo react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl e Paraglide. Prevediamo di aggiungerne altre in base alle richieste della comunità.",
	weFollowRigorousStatisticalMethodologyIncluding: "We follow rigorous statistical methodology, including outlier detection and multiple test runs to ensure accuracy.",
	weReRunAllBenchmarksWeekly: "We re-run all benchmarks weekly against the latest versions of each library.",
	weRunStandardizedTestsInIsolated: "We run standardized tests in isolated environments, measuring bundle size, render time, and memory usage across dozens of libraries.",
	weSupportReactI18nextReactIntl: "We support react-i18next, react-intl, Lingui, Tolgee, and several other popular React i18n solutions.",
	whatIsI18nBenchmark: "Cos'e i18n Benchmark?",
	whatLibrariesAreCurrently: "Quali librerie sono attualmente testate?",
	whichLibrariesAreCurrentlySupported: "Quali librerie sono attualmente supportate?",
	yesCommunityBenchmarkSubmissionsAre: "Yes! Community benchmark submissions are encouraged and reviewed by our core team.",
	yesOurEnterprisePlanIncludesConsulting: "Yes, our Enterprise plan includes consulting services for optimizing your app's i18n performance.",
	yesWeUseThe: "Sì. Utilizziamo il test U di Mann-Whitney con un livello di significatività di 0,05 per confrontare le distribuzioni. Riportiamo anche gli intervalli di confidenza e le dimensioni dell'effetto."
};
var pricingHeader_default$5 = {
	pricing: "Prezzi",
	transparentPricingForEvery: "Prezzi trasparenti per ogni fase del tuo percorso i18n."
};
var pricingTiers_default$5 = {
	freeTier: "Piano Gratuito",
	free: "Gratis",
	publicBenchmarkDashboard: "Dashboard pubblica dei benchmark",
	basicLibraryComparisons: "Confronti base tra librerie",
	communityForumAccess: "Accesso al forum della comunità",
	monthlyResultDigest: "Riepilogo mensile dei risultati",
	getStarted: "Inizia ora",
	proTier: "Piano Pro",
	perMonth: "/mese",
	allFreeFeatures: "Tutte le funzioni del piano gratuito",
	customBenchmarkConfigurations: "Configurazioni di benchmark personalizzate",
	privateResultsDashboard: "Dashboard dei risultati privata",
	apiAccess1000Requests: "Accesso API (1.000 richieste/giorno)",
	slackIntegration: "Integrazione Slack",
	subscribeToPro: "Abbonati a Pro",
	enterpriseTier: "Piano Enterprise",
	custom: "Personalizzato",
	allProFeatures: "Tutte le funzioni del piano Pro",
	dedicatedBenchmarkInfrastructure: "Infrastruttura di benchmark dedicata",
	customLibraryIntegrations: "Integrazioni librerie personalizzate",
	slaGuarantees: "Garanzie SLA",
	prioritySupport: "Supporto prioritario",
	contactSales: "Contatta l'ufficio vendite"
};
var productsHeader_default$5 = {
	products: "Prodotti",
	toolsAndServicesTo: "Strumenti e servizi per aiutarti a ottimizzare la tua strategia di internazionalizzazione."
};
var productsGrid_default$5 = {
	benchmarkDashboard: "Dashboard dei benchmark",
	interactiveChartsAndTables: "Grafici e tabelle interattive che confrontano le librerie i18n per dimensione del bundle, tempo di rendering e costo di idratazione.",
	bundleAnalyzer: "Analizzatore di bundle",
	uploadYourBuildOutput: "Carica l'output della tua build e ottieni una scomposizione dettagliata di quanto del tuo bundle è sovraccarico i18n.",
	migrationAssistant: "Assistente alla migrazione",
	automatedCodemodsAndGuides: "Codemod e guide automatizzate per la migrazione tra librerie i18n con il minimo disturbo.",
	performanceMonitor: "Monitor delle prestazioni",
	continuousPerformanceTrackingFor: "Monitoraggio continuo delle prestazioni per la tua implementazione i18n. Ricevi avvisi quando il caricamento delle traduzioni peggiora.",
	learnMore: "Scopri di più"
};
var settingsHeader_default$5 = {
	manageYourAccount: "Manage your account settings and preferences.",
	manageYourAccountPreferences: "Gestisci le preferenze del tuo account e la configurazione.",
	settings: "Impostazioni"
};
var profileSection_default$5 = {
	profile: "Profilo",
	displayName: "Nome visualizzato",
	email: "Email"
};
var preferencesSection_default$5 = {
	arabicAr: "Arabic (ar)",
	chineseSimplifiedZhCn: "Chinese (Simplified, zh-CN)",
	darkMode: "Modalità scura",
	defaultLanguage: "Lingua predefinita",
	emailNotifications: "Notifiche via email",
	englishEn: "English (en)",
	frenchFr: "French (fr)",
	germanDe: "German (de)",
	japaneseJa: "Japanese (ja)",
	preferences: "Preferenze",
	receiveWeeklyBenchmark: "Receive weekly benchmark reports",
	receiveWeeklyBenchmarkReports: "Ricevi rapporti settimanali sui benchmark",
	spanishEs: "Spanish (es)",
	toggleDarkMode: "Toggle dark mode",
	toggleNotifications: "Toggle Notifications",
	useDarkColorScheme: "Usa lo schema colori scuro"
};
var apiAccessSection_default$5 = {
	apiAccess: "Accesso API",
	apiKey: "Chiave API",
	useThisKeyTo: "Usa questa chiave per accedere programmaticamente all'API di benchmarking.",
	copy: "Copia"
};
var settingsFooter_default$5 = {
	cancel: "Annulla",
	saveChanges: "Salva modifiche"
};
var teamHeader_default$5 = {
	ourTeam: "Il nostro team",
	meetThePeopleBehindI18n: "Incontra le persone dietro i18n Benchmark. Un team diversificato unito da una passione condivisa per gli ottimi strumenti di sviluppo."
};
var teamGrid_default$5 = {
	aishaPatel: "Aisha Patel",
	communityManager: "Community Manager",
	dataAnalyst: "Data Analyst",
	developerAdvocate: "Developer Advocate",
	elenaKowalski: "Elena Kowalski",
	ensuresStatisticalRigorIn: "Ensures statistical rigor in our data collection and analysis.",
	ensuresStatisticalRigorInAll: "Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.",
	formerGoogleEngineerWith: "Former Google engineer with a passion for web performance and open source.",
	formerGoogleEngineerWith10: "Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.",
	founderLeadEngineer: "Founder & Lead Engineer",
	fullStackDeveloper: "Full-Stack Developer",
	maintainsTheBenchmarkingInfrastructure: "Maintains the benchmarking infrastructure and CI/CD pipelines.",
	maintainsTheBenchmarkingInfrastructureAnd: "Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source per Lingui.",
	managesCommunityContributions: "Manages community contributions and open source outreach.",
	managesCommunityContributionsPartnershipsAnd: "Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source.",
	marcusWeber: "Marcus Weber",
	passionateAboutDeveloperExperience: "Passionate about developer experience and building intuitive APIs.",
	passionateAboutDeveloperExperienceAnd: "Appassionata di esperienza sviluppatore e formazione. Relatrice a React Conf, JSConf e i18nNext.",
	performanceEngineer: "Performance Engineer",
	sarahChen: "Sarah Chen",
	specializesInJavascriptPerformance: "Specializes in JavaScript performance optimization and React internals.",
	specializesInJavascriptPerformanceOptimization: "Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. In precedenza in Vercel.",
	tomasRodriguez: "Tomás Rodríguez",
	yukiTanaka: "Yuki Tanaka"
};
var common_default$5 = {
	cancel: "Cancel",
	copy: "Copy",
	"footer.anOpenSourceTestApplication": "Un'applicazione di test open-source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.",
	"footer.builtWith": "i18n Benchmark — Progetto open-source. Costruito con React, Vite e TanStack Router.",
	"footer.contact": "Contatti",
	"footer.contributing": "Contribuire",
	"footer.github": "GitHub",
	"footer.methodology": "Metodologia",
	"footer.resources": "Risorse",
	"header.blog": "Blog",
	"header.careers": "Carriere",
	"header.contact": "Contatti",
	"header.faq": "FAQ",
	"header.goToGithub": "Vai su GitHub",
	"header.home": "Home",
	"header.methodology": "Metodologia",
	"header.mockPages": "Pagine di test",
	"header.pricing": "Prezzi",
	"header.products": "Prodotti",
	"header.settings": "Impostazioni",
	"header.team": "Team",
	mockBanner: "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è correlata ad alcuna attività o servizio reale.",
	readMore: "Read More",
	saveChanges: "Save Changes",
	"themeToggle.themeAuto": "Tema: Auto",
	"themeToggle.themeDark": "Tema: Scuro",
	"themeToggle.themeLight": "Tema: Chiaro",
	"themeToggle.themeModeAutoSystemClick": "Modalità tema: auto (sistema). Clicca per passare alla modalità chiara.",
	"themeToggle.themeModeDarkClick": "Modalità tema: scura. Clicca per passare alla modalità auto (sistema).",
	"themeToggle.themeModeLightClick": "Modalità tema: chiara. Clicca per passare alla modalità scura."
};
var home_default$5 = {
	"hero.aTestApplicationDesignedTo": "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.",
	"hero.viewResults": "Visualizza i risultati",
	"whyItMatters.whyTheseMetricsMatter": "Perché queste metriche sono importanti",
	"whyItMatters.bundleSize": "Dimensione del bundle",
	"whyItMatters.theBundleIsTheData": "Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.",
	"whyItMatters.renderingHydration": "Rendering e idratazione",
	"whyItMatters.connectingALargeJson": "Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).",
	"whyItMatters.dynamicLoading": "Caricamento dinamico",
	"whyItMatters.loadingAllTranslationsUpfront": "Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale.",
	"understandingImpact.understandingTheImpact": "Capire l'impatto",
	"understandingImpact.whyASingleLargeJson": "Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni",
	"understandingImpact.manyI18nLibrariesStoreTranslations": "Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:",
	"understandingImpact.theJsonMustBeParsed": "Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.",
	"understandingImpact.contextBasedArchitecturesCanCause": "Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.",
	"understandingImpact.duringServerSideRenderingThe": "Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idratato.",
	"understandingImpact.theTradeOffsOfDynamic": "I compromessi del caricamento dinamico",
	"understandingImpact.splittingTranslationsIntoPerRoute": "La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:",
	"understandingImpact.waterfallRequests": "Richieste a cascata:",
	"understandingImpact.flashOfUntranslatedContentFouc": "Flash di contenuti non tradotti (FOUC):",
	"understandingImpact.cacheInvalidation": "Invalidazione della cache:",
	"understandingImpact.whatThisBenchmarkMeasures": "Cosa misura questo benchmark",
	"understandingImpact.thisTestAppProvidesA": "Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.",
	"resultsTable.sampleResults": "Risultati di esempio",
	"resultsTable.bundleSize": "Dimensione del bundle",
	"resultsTable.lookupTime": "Tempo di ricerca",
	"resultsTable.lazyLoading": "Caricamento lazy"
};
var about_default$5 = {
	"aboutHeader.methodology": "Metodologia",
	"aboutHeader.weDesignedThisBenchmarkTo": "Abbiamo progettato questo benchmark per fornire confronti equi, riproducibili e significativi delle librerie i18n.",
	"aboutGrid.testEnvironment": "Ambiente di test",
	"aboutGrid.allBenchmarksRunOn": "Tutti i benchmark vengono eseguiti sullo stesso hardware (M2 MacBook Pro, 16 GB di RAM), lo stesso browser (Chromium 120 tramite Playwright) e le stesse condizioni di rete (4G simulato). Ogni test viene ripetuto 50 volte e riportiamo la mediana con i percentili P95/P99.",
	"aboutGrid.applicationDesign": "Design dell'applicazione",
	"aboutGrid.theBenchmarkAppHas10": "L'app di benchmark ha 10 pagine con contenuti realistici: navigazione, moduli, elenchi dinamici e testo statico. Ogni pagina utilizza 15-30 chiavi di traduzione per rappresentare modelli di utilizzo reali.",
	"aboutGrid.measurementMethodology": "Metodologia di misurazione",
	"aboutGrid.weUseBrowserNativeApis": "Utilizziamo le API native del browser (Performance Timeline, Resource Timing, Layout Instability) combinate con i dati di React Profiler. Le dimensioni dei bundle vengono misurate dopo la compressione gzip utilizzando source-map-explorer per accuratezza.",
	"aboutGrid.fairComparison": "Confronto equo",
	"aboutGrid.eachI18nLibraryIsIntegrated": "Ogni libreria i18n viene integrata seguendo la sua documentazione ufficiale e le migliori pratiche. Consultiamo i manutentori, quando possibile, per garantire una configurazione ottimale. Stessa app React, stessa configurazione Vite, stessa distribuzione.",
	"whatWeMeasure.bundleSizeImpact": "Impatto sulla dimensione del bundle",
	"whatWeMeasure.theAdditionalJavascriptBytesSent": "I byte JavaScript aggiuntivi inviati al client specificamente a causa del runtime della libreria i18n, oltre ai file di traduzione per la localizzazione corrente.",
	"whatWeMeasure.renderingOverhead": "Sovrapprezzo di rendering",
	"whatWeMeasure.howMuchExtraTimeThe": "Quanto tempo extra aggiunge lo strato i18n a ogni rendering di componente — misurato utilizzando actualDuration di React Profiler.",
	"whatWeMeasure.hydrationCost": "Costo di idratazione",
	"whatWeMeasure.duringSsrTranslationDataIs": "Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. I grandi dizionari aumentano il payload HTML e rallentano l'idratazione, il momento in cui la pagina diventa interattiva.",
	"whatWeMeasure.lazyLoadingEffectiveness": "Efficacia del caricamento lazy",
	"whatWeMeasure.whetherSplittingTranslationsByRoute": "Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).",
	"whatWeMeasure.localeSwitchSpeed": "Velocità di cambio localizzazione",
	"whatWeMeasure.howFastTheAppCan": "Quanto velocemente l'app può passare da una lingua all'altra in esecuzione, includendo il recupero delle nuove traduzioni, il re-rendering dei componenti e l'aggiornamento del DOM.",
	"whatWeMeasure.whatWeMeasure": "Cosa misuriamo"
};
var blog_default$5 = {
	"blogHeader.blog": "Blog",
	"blogHeader.insightsDeepDivesAnd": "Approfondimenti e aggiornamenti dalla comunità di benchmarking i18n.",
	"blogList.i18nBenchmark2026Results": "Risultati i18n Benchmark 2026",
	"blogList.march152026": "15 marzo 2026",
	"blogList.weTested12DifferentInternationalization": "Abbiamo testato 12 diverse librerie di internazionalizzazione su 10 pagine. Ecco i risultati dettagliati con grafici interattivi.",
	"blogList.howToReduceYourI18n": "Come ridurre il bundle i18n del 60%",
	"blogList.march82026": "8 marzo 2026",
	"blogList.practicalStrategiesForOptimizingTranslation": "Strategie pratiche per ottimizzare il caricamento dei file di traduzione, il tree-shaking delle localizzazioni inutilizzate e l'uso della compilazione in fase di build.",
	"blogList.theStateOfInternationalizationIn": "Lo stato dell'internazionalizzazione nel 2026",
	"blogList.february282026": "28 febbraio 2026",
	"blogList.anOverviewOfTheCurrent": "Una panoramica dell'attuale ecosistema i18n, confrontando approcci dai cataloghi di messaggi alle soluzioni basate su compilatore.",
	"blogList.migratingFromReactI18nextTo": "Migrazione da react-i18next a Lingui",
	"blogList.february152026": "15 febbraio 2026",
	"blogList.aStepByStepGuide": "Una guida passo-passo per la migrazione di un'app di produzione con 50.000 chiavi di traduzione da react-i18next a Lingui.",
	"blogList.serverComponentsAndI18nWhat": "Server Components e i18n: cosa cambia?",
	"blogList.february12026": "1 febbraio 2026",
	"blogList.reactServerComponentsIntroduceNew": "I React Server Components introducono nuovi modelli per l'internazionalizzazione. Esploriamo le implicazioni e le migliori pratiche.",
	"blogList.benchmarkMethodologyHowWeTest": "Metodologia del benchmark: come testiamo",
	"blogList.january202026": "20 gennaio 2026",
	"blogList.aTransparentLookAtOur": "Uno sguardo trasparente alla nostra metodologia di benchmarking, inclusi gli ambienti di test, i metodi statistici e la riproducibilità.",
	"blogList.readMore": "Leggi di più →"
};
var careers_default$5 = {
	"careersHeader.careers": "Carriere",
	"careersHeader.joinOurMissionToMake": "Unisciti alla nostra missione per rendere il web più veloce e accessibile per tutti, ovunque.",
	"careersBenefits.whyJoinUs": "Perché unirti a noi?",
	"careersBenefits.remoteFirst": "Remoto-first",
	"careersBenefits.workFromAnywhereFully": "Lavora da ovunque. Team completamente distribuito in 6 fusi orari.",
	"careersBenefits.openSource": "Open Source",
	"careersBenefits.allOurWorkIs": "Tutto il nostro lavoro è open source. Costruisci il tuo portfolio pubblico mentre generi un impatto.",
	"careersBenefits.impactful": "Impattante",
	"careersBenefits.yourWorkDirectlyHelps": "Il tuo lavoro aiuta direttamente i sviluppatori a creare applicazioni internazionalizzate migliori e più veloci.",
	"openPositions.openPositions": "Posizioni aperte",
	"openPositions.seniorPerformanceEngineer": "Ingegnere delle prestazioni senior",
	"openPositions.fullTime": "Tempo pieno",
	"openPositions.remote": "Remoto",
	"openPositions.leadBenchmarkDesignAnd": "Guidare la progettazione e l'implementazione del benchmark. È richiesta una profonda conoscenza dei meccanismi interni di V8, delle API delle prestazioni del browser e dell'analisi statistica.",
	"openPositions.technicalWriter": "Scrittore tecnico",
	"openPositions.partTime": "Part-time",
	"openPositions.createAndMaintainDocumentation": "Creare e mantenere documentazione, post sul blog e contenuti educativi sulle migliori pratiche per le prestazioni i18n.",
	"openPositions.frontendDeveloper": "Sviluppatore Frontend",
	"openPositions.buildAndMaintainThe": "Costruire e mantenere la dashboard dei benchmark, gli strumenti di confronto e le visualizzazioni interattive.",
	"openPositions.devOpsEngineer": "Ingegnere DevOps",
	"openPositions.designAndMaintainThe": "Progettare e mantenere la pipeline CI/CD che esegue i benchmark automaticamente a ogni aggiornamento della libreria.",
	"openPositions.applyNow": "Candidati ora"
};
var contact_default$5 = {
	"contactHeader.contactUs": "Contattaci",
	"contactHeader.haveQuestionsOrWantTo": "Hai domande o vuoi contribuire? Ci piacerebbe sentirti.",
	"contactForm.name": "Nome",
	"contactForm.email": "Email",
	"contactForm.subject": "Oggetto",
	"contactForm.message": "Messaggio",
	"contactForm.sendMessage": "Invia messaggio",
	"contactForm.wellGetBackTo": "Ti risponderemo entro 48 ore."
};
var faq_default$5 = {
	"faqHeader.frequentlyAskedQuestions": "Domande frequenti",
	"faqHeader.everythingYouNeedTo": "Tutto quello che c'è da sapere sul progetto i18n Benchmark.",
	"faqList.howAreTheBenchmarks": "Come vengono eseguiti i benchmark?",
	"faqList.allBenchmarksAreRun": "Tutti i benchmark vengono eseguiti utilizzando Playwright su una configurazione hardware coerente (M2 MacBook Pro) con condizioni di rete 4G simulate. Ogni test esegue 50 iterazioni e riportiamo la mediana, i valori P95 e P99.",
	"faqList.whatLibrariesAreCurrently": "Quali librerie sono attualmente testate?",
	"faqList.weCurrentlyBenchmarkReactI18next": "Attualmente testiamo react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl e Paraglide. Prevediamo di aggiungerne altre in base alle richieste della comunità.",
	"faqList.canIContributeA": "Posso contribuire con l'integrazione di una nuova libreria?",
	"faqList.absolutelyWeWelcomeCommunity": "Assolutamente! Accogliamo con favore i contributi della comunità. Forka il repository, aggiungi l'integrazione della tua libreria seguendo il nostro template e invia una pull request.",
	"faqList.howOftenAreResults": "Con quale frequenza vengono aggiornati i risultati?",
	"faqList.benchmarksRunAutomaticallyVia": "I benchmark vengono eseguiti automaticamente tramite CI a ogni aggiornamento di dipendenza e settimanalmente sul branch main. I risultati vengono pubblicati sul cruscotto entro 24 ore.",
	"faqList.areTheResultsStatistically": "I risultati sono statisticamente significativi?",
	"faqList.yesWeUseThe": "Sì. Utilizziamo il test U di Mann-Whitney con un livello di significatività di 0,05 per confrontare le distribuzioni. Riportiamo anche gli intervalli di confidenza e le dimensioni dell'effetto."
};
var pricing_default$5 = {
	"pricingHeader.pricing": "Prezzi",
	"pricingHeader.transparentPricingForEvery": "Prezzi trasparenti per ogni fase del tuo percorso i18n.",
	"pricingTiers.freeTier": "Piano Gratuito",
	"pricingTiers.free": "Gratis",
	"pricingTiers.publicBenchmarkDashboard": "Dashboard pubblica dei benchmark",
	"pricingTiers.basicLibraryComparisons": "Confronti base tra librerie",
	"pricingTiers.communityForumAccess": "Accesso al forum della comunità",
	"pricingTiers.monthlyResultDigest": "Riepilogo mensile dei risultati",
	"pricingTiers.getStarted": "Inizia ora",
	"pricingTiers.proTier": "Piano Pro",
	"pricingTiers.perMonth": "/mese",
	"pricingTiers.allFreeFeatures": "Tutte le funzioni del piano gratuito",
	"pricingTiers.customBenchmarkConfigurations": "Configurazioni di benchmark personalizzate",
	"pricingTiers.privateResultsDashboard": "Dashboard dei risultati privata",
	"pricingTiers.apiAccess1000Requests": "Accesso API (1.000 richieste/giorno)",
	"pricingTiers.slackIntegration": "Integrazione Slack",
	"pricingTiers.subscribeToPro": "Abbonati a Pro",
	"pricingTiers.enterpriseTier": "Piano Enterprise",
	"pricingTiers.custom": "Personalizzato",
	"pricingTiers.allProFeatures": "Tutte le funzioni del piano Pro",
	"pricingTiers.dedicatedBenchmarkInfrastructure": "Infrastruttura di benchmark dedicata",
	"pricingTiers.customLibraryIntegrations": "Integrazioni librerie personalizzate",
	"pricingTiers.slaGuarantees": "Garanzie SLA",
	"pricingTiers.prioritySupport": "Supporto prioritario",
	"pricingTiers.contactSales": "Contatta l'ufficio vendite"
};
var products_default$5 = {
	"productsHeader.products": "Prodotti",
	"productsHeader.toolsAndServicesTo": "Strumenti e servizi per aiutarti a ottimizzare la tua strategia di internazionalizzazione.",
	"productsGrid.benchmarkDashboard": "Dashboard dei benchmark",
	"productsGrid.interactiveChartsAndTables": "Grafici e tabelle interattive che confrontano le librerie i18n per dimensione del bundle, tempo di rendering e costo di idratazione.",
	"productsGrid.bundleAnalyzer": "Analizzatore di bundle",
	"productsGrid.uploadYourBuildOutput": "Carica l'output della tua build e ottieni una scomposizione dettagliata di quanto del tuo bundle è sovraccarico i18n.",
	"productsGrid.migrationAssistant": "Assistente alla migrazione",
	"productsGrid.automatedCodemodsAndGuides": "Codemod e guide automatizzate per la migrazione tra librerie i18n con il minimo disturbo.",
	"productsGrid.performanceMonitor": "Monitor delle prestazioni",
	"productsGrid.continuousPerformanceTrackingFor": "Monitoraggio continuo delle prestazioni per la tua implementazione i18n. Ricevi avvisi quando il caricamento delle traduzioni peggiora.",
	"productsGrid.learnMore": "Scopri di più"
};
var settings_default$5 = {
	"settingsHeader.settings": "Impostazioni",
	"settingsHeader.manageYourAccountPreferences": "Gestisci le preferenze del tuo account e la configurazione.",
	"profileSection.profile": "Profilo",
	"profileSection.displayName": "Nome visualizzato",
	"profileSection.email": "Email",
	"preferencesSection.preferences": "Preferenze",
	"preferencesSection.emailNotifications": "Notifiche via email",
	"preferencesSection.receiveWeeklyBenchmarkReports": "Ricevi rapporti settimanali sui benchmark",
	"preferencesSection.darkMode": "Modalità scura",
	"preferencesSection.useDarkColorScheme": "Usa lo schema colori scuro",
	"preferencesSection.defaultLanguage": "Lingua predefinita",
	"apiAccessSection.apiAccess": "Accesso API",
	"apiAccessSection.apiKey": "Chiave API",
	"apiAccessSection.useThisKeyTo": "Usa questa chiave per accedere programmaticamente all'API di benchmarking.",
	"apiAccessSection.copy": "Copia",
	"settingsFooter.cancel": "Annulla",
	"settingsFooter.saveChanges": "Salva modifiche"
};
var team_default$5 = {
	"teamHeader.ourTeam": "Il nostro team",
	"teamHeader.meetThePeopleBehindI18n": "Incontra le persone dietro i18n Benchmark. Un team diversificato unito da una passione condivisa per gli ottimi strumenti di sviluppo.",
	"teamGrid.sarahChen": "Sarah Chen",
	"teamGrid.founderLeadEngineer": "Fondatrice & Lead Engineer",
	"teamGrid.formerGoogleEngineerWith10": "Ex ingegnere Google con 10 anni di esperienza nella costruzione di sistemi di internazionalizzazione su scala.",
	"teamGrid.marcusWeber": "Marcus Weber",
	"teamGrid.performanceEngineer": "Ingegnere delle prestazioni",
	"teamGrid.specializesInJavascriptPerformanceOptimization": "Specializzato nell'ottimizzazione delle prestazioni JavaScript e nella metodologia di benchmarking. In precedenza in Vercel.",
	"teamGrid.aishaPatel": "Aisha Patel",
	"teamGrid.developerAdvocate": "Developer Advocate",
	"teamGrid.passionateAboutDeveloperExperienceAnd": "Appassionata di esperienza sviluppatore e formazione. Relatrice a React Conf, JSConf e i18nNext.",
	"teamGrid.tomasRodriguez": "Tomás Rodríguez",
	"teamGrid.fullStackDeveloper": "Sviluppatore Full-Stack",
	"teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Mantiene l'infrastruttura di benchmarking e la pipeline CI/CD. Collaboratore open source per Lingui.",
	"teamGrid.yukiTanaka": "Yuki Tanaka",
	"teamGrid.dataAnalyst": "Analista dati",
	"teamGrid.ensuresStatisticalRigorInAll": "Garantisce il rigore statistico in tutti i risultati dei benchmark. Dottorato in statistica applicata al MIT.",
	"teamGrid.elenaKowalski": "Elena Kowalski",
	"teamGrid.communityManager": "Responsabile della comunità",
	"teamGrid.managesCommunityContributionsPartnershipsAnd": "Gestisce i contributi della comunità, le partnership e gli eventi. Background nella governance open source."
};
var route_default$4 = {
	oopsPageNotFound: "Oops! Page not found.",
	returnToHome: "Return to Home",
	"route.couldNotMeasureHydrationDuration": "ハイドレーション時間を測定できませんでした：",
	"route.oopsPageNotFound": "おっと！ページが見つかりません",
	"route.returnToHome": "ホームに戻る"
};
var header_default$4 = {
	home: "ホーム",
	methodology: "メソッド",
	mockPages: "テストページ",
	products: "製品",
	pricing: "料金",
	team: "チーム",
	blog: "ブログ",
	careers: "採用",
	faq: "FAQ",
	contact: "お問い合わせ",
	settings: "設定",
	goToGithub: "GitHubへ"
};
var footer_default$4 = {
	resources: "リソース",
	contact: "お問い合わせ",
	github: "GitHub",
	methodology: "メソッド",
	contributing: "貢献する",
	builtWith: "i18n Benchmark — オープンソースプロジェクト。React、Vite、TanStack Routerで構築。",
	anOpenSourceTestApplication: "国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実際の影響を測定するためのオープンソーステストアプリケーション。"
};
var themeToggle_default$4 = {
	themeModeAutoSystemClick: "テーマモード：自動（システム）。クリックしてライトモードに切り替え。",
	themeModeLightClick: "テーマモード：ライト。クリックしてダークモードに切り替え。",
	themeModeDarkClick: "テーマモード：ダーク。クリックして自動（システム）モードに切り替え。",
	themeAuto: "テーマ：自動",
	themeDark: "テーマ：ダーク",
	themeLight: "テーマ：ライト"
};
var hero_default$4 = {
	aTestApplicationDesignedTo: "国際化ライブラリがバンドルサイズ、読み込みパフォーマンス、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーション。",
	viewResults: "結果を表示"
};
var whyItMatters_default$4 = {
	whyTheseMetricsMatter: "なぜこれらの指標が重要なのか",
	bundleSize: "バンドルサイズ",
	theBundleIsTheData: "バンドルは世界中のすべてのユーザーに送信されるデータです。バンドルが大きいほど、ダウンロード時間が長くなります。特に多くの地域で一般的な低速な3G接続では顕著です。i18nライブラリはその重量において、数キロバイトから数十キロバイトのランタイムコード、さらに翻訳ファイル自体まで大きく異なります。",
	renderingHydration: "レンダリングとハイドレーション",
	connectingALargeJson: "大きなJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体で再レンダリングを引き起こす可能性があります。SSRのハイドレーション中、巨大な翻訳オブジェクトの解析とアタッチは、ページがインタラクティブになるまでの遅延を追加し、Time to Interactive（TTI）に直接影響します。",
	dynamicLoading: "動的読み込み",
	loadingAllTranslationsUpfront: "すべての翻訳を事前に読み込むと、初期ペイロードが過負荷になります。動的（遅延）読み込みは、ルートまたは名前空間ごとに翻訳を分割し、現在のページが必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、未翻訳コンテンツのフラッシュ、キャッシュの複雑さといった独自のトレードオフが伴います。両方の戦略を測定することが不可欠です。"
};
var understandingImpact_default$4 = {
	cacheInvalidation: "キャッシュの無効化：",
	contextBasedArchitecturesCan: "Context-based architectures can cause the entire app to re-render when the language changes. For large apps with thousands of components, this can lead to noticeable lag during locale switches.",
	contextBasedArchitecturesCanCause: "コンテキストベースのアーキテクチャでは、ロケールが変更されたときにカスケード的な再レンダリングが発生する可能性があります。これは、特定のキーが変更されていなくても、すべてのコンシューマーに通知されるためです。",
	duringServerSideRenderingThe: "サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。",
	flashOfUntranslatedContent: "Flash of Untranslated Content (FOUC)",
	flashOfUntranslatedContentFouc: "未翻訳コンテンツのフラッシュ（FOUC）：",
	manyI18nLibrariesStore: "Many i18n libraries store translations in large JSON files that are loaded upfront. This can significantly increase the \"Time to Interactive\" as the browser must download and parse these files before the app can be used.",
	manyI18nLibrariesStoreTranslations: "多くのi18nライブラリは、Reactコンテキストを介して提供される1つのJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい（数千のキーがある）場合、翻訳を使用するすべてのコンポーネントが辞書全体への参照を保持します。これは以下のことを意味します：",
	splittingTranslationsIntoPerRoute: "ルートごとまたは名前空間ごとのチャンクに翻訳を分割すると、初期ペイロードを劇的に削減できます。しかし、新たな課題も生じます：",
	theAppMustFirstLoad: "The app must first load the core library (e.g., i18next) which adds to the initial bundle size. Even \"lightweight\" libraries can add 10-20KB of minified JS.",
	theJsonMustBeParsed: "JSONはページ読み込みのたびに解析される必要があり、メインスレッドをブロックします。",
	theTradeOffsOfDynamic: "動的読み込みのトレードオフ",
	thisTestAppProvidesA: "このテストアプリは、10ページの現実的なコンテンツを含む制御された環境を提供し、3つの軸でi18nライブラリを比較します：JavaScriptバンドルに追加される重量、翻訳されたコンテンツの解析とレンダリングに費やされる時間、そしてコード分割と遅延読み込み戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。",
	understandingTheImpact: "影響を理解する",
	updatingTranslationsRequiresCache: "Updating translations often requires a full rebuild or clearing the CDN cache, which can delay the roll-out of critical copy changes.",
	usersMayBrieflySeeTranslation: "Users may briefly see translation keys or English text while the library and translation files are being loaded.",
	waterfallRequests: "ウォーターフォールリクエスト：",
	whatThisBenchmarkMeasures: "このベンチマークが測定するもの",
	whyASingleLargeJson: "なぜ1つの大きなJSONがパフォーマンスを低下させるのか"
};
var resultsTable_default$4 = {
	bundleSize: "バンドルサイズ",
	lazyLoading: "遅延読み込み",
	library: "Library",
	lookupTime: "検索時間",
	sampleResults: "サンプル結果"
};
var aboutHeader_default$4 = {
	aboutThisBenchmark: "About This Benchmark",
	methodology: "メソッド",
	thisIsAnOpenSource: "This is an open-source test application for measuring the real-world impact of internationalization libraries.",
	weDesignedThisBenchmarkTo: "私たちは、i18nライブラリを公平、再現可能、そして有意義に比較できるようにこのベンチマークを設計しました。"
};
var aboutGrid_default$4 = {
	allBenchmarksRunOn: "すべてのベンチマークは、同じハードウェア（M2 MacBook Pro、16 GB RAM）、同じブラウザ（Playwright経由のChromium 120）、および同じネットワーク条件（シミュレートされた4G）で実行されます。各テストは50回繰り返され、P95/P99パーセンタイルの中央値を報告します。",
	applicationDesign: "アプリケーション設計",
	choosingAnI18nLibrary: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
	eachI18nLibraryIsIntegrated: "各i18nライブラリは、公式ドキュメントとベストプラクティスに従って統合されています。最適な構成を確保するために、可能な場合はメンテナに相談しています。同じReactアプリ、同じVite設定、同じデプロイメント。",
	fairComparison: "公平な比較",
	measurementMethodology: "測定メソッド",
	methodology: "Methodology",
	testEnvironment: "テスト環境",
	theBenchmarkAppHas10: "ベンチマークアプリには、ナビゲーション、フォーム、動的リスト、静的テキストなど、現実的なコンテンツを含む10ページがあります。各ページは、実際の使用パターンを表すために15〜30個の翻訳キーを使用しています。",
	theSame10PageApp: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.",
	weUseBrowserNativeApis: "Performance Timeline、Resource Timing、Layout InstabilityなどのブラウザネイティブAPIと、React Profilerデータを組み合わせて使用します。バンドルサイズは、正確を期すためにsource-map-explorerを使用してgzip後に測定されます。",
	whyThisExists: "Why This Exists"
};
var whatWeMeasure_default$4 = {
	bundleSizeImpact: "バンドルサイズへの影響",
	duringSsrTranslationDataIs: "SSR中、翻訳データはHTMLにシリアル化されます。大きな辞書はHTMLペイロードを増加させ、ハイドレーション（ページがインタラクティブになる瞬間）を遅らせます。",
	duringSsrTranslationDataIsSerialized: "During SSR, translation data is serialized into the HTML. We measure the size of this payload and its effect on Time to Interactive (TTI).",
	howFastTheAppCan: "実行時にアプリが1つの言語から別の言語にどれだけ速く切り替えられるか（新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新を含む）。",
	howFastTheAppCanSwitchFromOne: "How fast the app can switch from one language to another. We measure the re-render time and any network delays for lazy-loaded locales.",
	howMuchExtraTimeThe: "ライブラリがReactのレンダリングサイクルに追加する余分な時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。",
	howMuchExtraTimeTheLibraryAdds: "How much extra time the library adds to the initial page load. This includes script execution and the time to fetch/parse translation data.",
	hydrationCost: "ハイドレーションのコスト",
	lazyLoadingEffectiveness: "遅延読み込みの有効性",
	localeSwitchSpeed: "ロケール切り替え速度",
	renderingOverhead: "レンダリングのオーバーヘッド",
	theAdditionalJavascriptBytes: "The additional Javascript bytes that the library adds to your production build. We measure both the library itself and its mandatory dependencies.",
	theAdditionalJavascriptBytesSent: "i18nライブラリとその翻訳ファイルが含まれているときにユーザーに送信される追加のJavaScriptバイト。これは、低速なネットワークでのダウンロード時間に直接影響します。",
	whatWeMeasure: "測定するもの",
	whetherSplittingTranslationsByRoute: "ルートまたは名前空間ごとに翻訳を分割することで、初期負荷が実際に軽減されるか、またどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）が生じるかがわかります。"
};
var blogHeader_default$4 = {
	blog: "ブログ",
	insightsDeepDivesAnd: "i18nベンチマークコミュニティからの洞察、詳細な分析、および最新情報。",
	insightsTutorialsAndAnalysis: "Insights, Tutorials, and Analysis"
};
var blogList_default$4 = {
	aStepByStepGuide: "5万個の翻訳キーを持つプロダクションアプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。",
	aStepByStepGuideOnMigrating: "A step-by-step guide on migrating from legacy i18n solutions to modern, high-performance libraries.",
	aTransparentLookAtOur: "テスト環境、統計手法、再現性を含む、私たちのベンチマーク手法の透明な公開。",
	aTransparentLookAtOurBenchmarking: "A transparent look at our benchmarking process, from hardware specs to measurement techniques.",
	anOverviewOfTheCurrent: "メッセージカタログからコンパイラベースのソリューションまで、現在のアプローチを比較したi18nエコシステムの概要。",
	anOverviewOfTheCurrentI18n: "An overview of the current i18n landscape and how different libraries stack up in 2026.",
	analysis: "Analysis",
	benchmark: "Benchmark",
	benchmarkMethodologyHowWe: "Benchmark Methodology: How We Test",
	benchmarkMethodologyHowWeTest: "ベンチマーク手法：どのようにテストするか",
	comparingI18nLibrariesIn: "Comparing i18n Libraries in 2026: A Deep Dive",
	february12026: "2026年2月1日",
	february152026: "2026年2月15日",
	february282026: "2026年2月28日",
	howToReduceYourI18n: "i18nバンドルを60%削減する方法",
	i18nBenchmark2026Results: "i18nベンチマーク2026の結果",
	january202026: "2026年1月20日",
	march152026: "2026年3月15日",
	march82026: "2026年3月8日",
	meta: "Meta",
	migratingFromReactI18nextTo: "react-i18nextからLinguiへの移行",
	practicalStrategiesForOptimizingTranslation: "翻訳ファイルの読み込みの最適化、未使用ロケールのツリーシェイキング、ビルド時のコンパイルの活用など、実践的な戦略。",
	reactServerComponentsIntroduceNew: "React Server Componentsは国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。",
	readMore: "続きを読む →",
	serverComponentsAndI18nWhat: "Server Componentsとi18n：何が変わるのか？",
	theStateOfInternationalizationIn: "2026年における国際化の現状",
	tutorial: "Tutorial",
	weTested12DifferentInternationalization: "10ページにわたって12種類の国際化ライブラリをテストしました。インタラクティブなチャートを含む詳細な結果はこちらです。"
};
var careersHeader_default$4 = {
	careers: "採用",
	joinOurMission: "Join our mission to make internationalization fast, easy, and performant for everyone.",
	joinOurMissionToMake: "世界中のすべての人にとって、ウェブをより速く、よりアクセスしやすくするという私たちのミッションに参加してください。"
};
var careersBenefits_default$4 = {
	allOurWorkIs: "私たちの仕事はすべてオープンソースです。影響を与えながら、公開ポートフォリオを構築してください。",
	competitivePay: "Competitive pay",
	impactful: "インパクトがある",
	openSource: "オープンソース",
	openSourceTime: "Open source time",
	percentTimeForOss: "20% time for OSS contributions",
	remoteFirst: "リモートファースト",
	topOfMarketCompensation: "Top-of-market compensation",
	whyJoinUs: "なぜ参加するのか？",
	workFromAnywhere: "Work from anywhere in the world",
	workFromAnywhereFully: "どこからでも仕事ができます。6つのタイムゾーンにまたがる完全分散型チーム。",
	yourWorkDirectlyHelps: "あなたの仕事は、開発者がより良く、より速い国際化アプリを構築するのを直接助けます。"
};
var openPositions_default$4 = {
	applyNow: "Apply Now",
	backendEngineer: "Backend Engineer",
	buildAndMaintainOur: "Build and maintain our benchmarking suite and core application infrastructure.",
	buildAndMaintainThe: "ベンチマークダッシュボード、比較ツール、インタラクティブな視覚化を構築および維持管理します。",
	community: "Community",
	createAndMaintainDocumentation: "i18nパフォーマンスのベストプラクティスに関するドキュメント、ブログ記事、教育コンテンツを作成および維持管理します。",
	createComprehensiveGuidesApi: "Create comprehensive guides, API references, and tutorials for the community.",
	designAndMaintainThe: "ライブラリの更新ごとにベンチマークを自動的に実行するCI/CDパイプラインを設計および維持管理します。",
	designAndScaleOur: "Design and scale our data ingestion pipelines and statistical analysis engines.",
	devOpsEngineer: "DevOpsエンジニア",
	devrelEngineer: "DevRel Engineer",
	documentation: "Documentation",
	engageWithTheI18n: "Engage with the i18n community, write blog posts, and speak at conferences.",
	engineering: "Engineering",
	ensureTheAccuracyAnd: "Ensure the accuracy and reliability of our benchmarks through rigorous testing.",
	frontendDeveloper: "フロントエンドデベロッパー",
	fullTime: "Full-time",
	leadBenchmarkDesignAnd: "ベンチマークの設計と実装をリード。V8の内部構造、ブラウザのパフォーマンスAPI、および統計分析に関する深い知識が必要です。",
	openPositions: "Open Positions",
	partTime: "Part-time",
	qaEngineer: "QA Engineer",
	remote: "Remote",
	seniorFrontendEngineer: "Senior Frontend Engineer",
	seniorPerformanceEngineer: "シニアパフォーマンスエンジニア",
	sfRemote: "San Francisco / Remote",
	technicalWriter: "Technical Writer"
};
var contactHeader_default$4 = {
	contactUs: "お問い合わせ",
	getInTouch: "お問い合わせ",
	haveIdeasFoundABug: "アイデアがありますか？ バグを見つけましたか？ ぜひお聞かせください。",
	haveQuestionsOrWantTo: "質問がある、または貢献したいですか？ぜひご連絡ください。"
};
var contactForm_default$4 = {
	bugReport: "バグ報告",
	contribution: "Contribution",
	email: "メールアドレス",
	emailPlaceholder: "you@example.com",
	message: "メッセージ",
	messagePlaceholder: "メッセージを入力してください...",
	methodologyQuestion: "Methodology Question",
	name: "お名前",
	newBenchmarkIdea: "New Benchmark Idea",
	other: "Other",
	sendMessage: "メッセージを送信",
	subject: "件名",
	topic: "トピック",
	wellGetBackTo: "48時間以内に返信いたします。",
	yourName: "お名前"
};
var faqHeader_default$4 = {
	everythingYouNeedToKnow: "i18n Benchmark について知っておくべきこと。",
	frequentlyAskedQuestions: "よくある質問"
};
var faqList_default$4 = {
	absolutelyWeWelcomeCommunity: "もちろんです！コミュニティからの貢献を歓迎します。リポジトリをフォークし、テンプレートに従ってライブラリの統合を追加し、プルリクエストを送信してください。",
	allBenchmarksAreRun: "すべてのベンチマークは、Playwrightを使用して、一貫したハードウェア（M2 MacBook Pro）上でシミュレートされた4Gネットワーク条件で実行されます。各テストは50回繰り返され、中央値、P95、およびP99の値を報告します。",
	areTheResultsStatistically: "結果は統計的に有意ですか？",
	benchmarksRunAutomaticallyVia: "ベンチマークは、依存関係の更新ごとにCIを介して自動的に実行され、さらにメインブランチで毎週実行されます。結果は24時間以内にダッシュボードに公開されます。",
	canIContributeA: "新しいライブラリの統合を提案できますか？",
	canISubmitMyOwnBenchmarks: "自分のベンチマークを提出できますか？",
	doYouOfferConsultingServices: "コンサルティングサービスは提供していますか？",
	howAreBenchmarksConducted: "ベンチマークはどのように実施されますか？",
	howAreTheBenchmarks: "ベンチマークはどのように実行されますか？",
	howCanIContribute: "どのように貢献できますか？",
	howOftenAreBenchmarksUpdated: "ベンチマークはどのくらいの頻度で更新されますか？",
	howOftenAreResults: "結果はどのくらいの頻度で更新されますか？",
	i18nBenchmarkIsAnOpenSource: "i18n Benchmark is an open-source project dedicated to measuring the real-world performance impact of internationalization libraries.",
	isTheDataReliable: "データは信頼できますか？",
	thereAreManyWaysToContribute: "There are many ways to contribute, from submitting new benchmarks to improving our methodology documentation.",
	weCurrentlyBenchmarkReactI18next: "現在はreact-i18next、react-intl (FormatJS)、LinguiJS、typesafe-i18n、next-intl、Paraglideをベンチマークしています。コミュニティの要望に応じてさらに追加する予定です。",
	weFollowRigorousStatisticalMethodologyIncluding: "We follow rigorous statistical methodology, including outlier detection and multiple test runs to ensure accuracy.",
	weReRunAllBenchmarksWeekly: "We re-run all benchmarks weekly against the latest versions of each library.",
	weRunStandardizedTestsInIsolated: "We run standardized tests in isolated environments, measuring bundle size, render time, and memory usage across dozens of libraries.",
	weSupportReactI18nextReactIntl: "We support react-i18next, react-intl, Lingui, Tolgee, and several other popular React i18n solutions.",
	whatIsI18nBenchmark: "i18n Benchmark とは何ですか？",
	whatLibrariesAreCurrently: "現在テストされているライブラリは何ですか？",
	whichLibrariesAreCurrentlySupported: "現在サポートされているライブラリはどれですか？",
	yesCommunityBenchmarkSubmissionsAre: "Yes! Community benchmark submissions are encouraged and reviewed by our core team.",
	yesOurEnterprisePlanIncludesConsulting: "Yes, our Enterprise plan includes consulting services for optimizing your app's i18n performance.",
	yesWeUseThe: "はい。分布を比較するために、有意水準0.05のマン・ホイットニーのU検定を使用します。また、信頼区間と効果量も報告します。"
};
var pricingHeader_default$4 = {
	pricing: "料金",
	transparentPricingForEvery: "i18nジャーニーのあらゆる段階に対応する、透明性の高い料金体系。"
};
var pricingTiers_default$4 = {
	freeTier: "無料プラン",
	free: "無料",
	publicBenchmarkDashboard: "公開ベンチマークダッシュボード",
	basicLibraryComparisons: "基本的なライブラリ比較",
	communityForumAccess: "コミュニティフォーラムへのアクセス",
	monthlyResultDigest: "月次結果ダイジェスト",
	getStarted: "始める",
	proTier: "Proプラン",
	perMonth: "/月",
	allFreeFeatures: "無料プランの全機能",
	customBenchmarkConfigurations: "カスタムベンチマーク設定",
	privateResultsDashboard: "プライベート結果ダッシュボード",
	apiAccess1000Requests: "APIアクセス（1日1,000リクエスト）",
	slackIntegration: "Slack統合",
	subscribeToPro: "Proに登録",
	enterpriseTier: "Enterpriseプラン",
	custom: "カスタム",
	allProFeatures: "Proプランの全機能",
	dedicatedBenchmarkInfrastructure: "専用ベンチマークインフラ",
	customLibraryIntegrations: "カスタムライブラリ統合",
	slaGuarantees: "SLA保証",
	prioritySupport: "優先サポート",
	contactSales: "営業に問い合わせる"
};
var productsHeader_default$4 = {
	products: "製品",
	toolsAndServicesTo: "国際化戦略の最適化に役立つツールとサービス。"
};
var productsGrid_default$4 = {
	benchmarkDashboard: "ベンチマークダッシュボード",
	interactiveChartsAndTables: "バンドルサイズ、レンダリング時間、ハイドレーションコストにわたってi18nライブラリを比較するインタラクティブなチャートと表。",
	bundleAnalyzer: "バンドルアナライザー",
	uploadYourBuildOutput: "ビルド出力をアップロードして、バンドルのうちどの程度がi18nのオーバーヘッドであるかの詳細な内訳を取得します。",
	migrationAssistant: "移行アシスタント",
	automatedCodemodsAndGuides: "最小限の中断でi18nライブラリ間を移行するための自動コードモッドとガイド。",
	performanceMonitor: "パフォーマンスモニター",
	continuousPerformanceTrackingFor: "i18n実装の継続的なパフォーマンス追跡。翻訳の読み込みが低下したときにアラートを受け取ります。",
	learnMore: "詳細はこちら"
};
var settingsHeader_default$4 = {
	manageYourAccount: "Manage your account settings and preferences.",
	manageYourAccountPreferences: "アカウントの設定と構成を管理します。",
	settings: "設定"
};
var profileSection_default$4 = {
	profile: "プロフィール",
	displayName: "表示名",
	email: "メールアドレス"
};
var preferencesSection_default$4 = {
	arabicAr: "Arabic (ar)",
	chineseSimplifiedZhCn: "Chinese (Simplified, zh-CN)",
	darkMode: "ダークモード",
	defaultLanguage: "デフォルト言語",
	emailNotifications: "メール通知",
	englishEn: "English (en)",
	frenchFr: "French (fr)",
	germanDe: "German (de)",
	japaneseJa: "Japanese (ja)",
	preferences: "設定",
	receiveWeeklyBenchmark: "Receive weekly benchmark reports",
	receiveWeeklyBenchmarkReports: "ベンチマーク週報を受け取る",
	spanishEs: "Spanish (es)",
	toggleDarkMode: "Toggle dark mode",
	toggleNotifications: "Toggle Notifications",
	useDarkColorScheme: "ダークカラー体系を使用する"
};
var apiAccessSection_default$4 = {
	apiAccess: "APIアクセス",
	apiKey: "APIキー",
	useThisKeyTo: "このキーを使用して、ベンチマークAPIにプログラムでアクセスします。",
	copy: "コピー"
};
var settingsFooter_default$4 = {
	cancel: "キャンセル",
	saveChanges: "変更を保存"
};
var teamHeader_default$4 = {
	ourTeam: "私たちのチーム",
	meetThePeopleBehindI18n: "i18nベンチマークの裏側にいる人々に会いましょう。優れた開発者ツールへの共通の情熱によって結ばれた多様なチームです。"
};
var teamGrid_default$4 = {
	aishaPatel: "Aisha Patel",
	communityManager: "Community Manager",
	dataAnalyst: "Data Analyst",
	developerAdvocate: "Developer Advocate",
	elenaKowalski: "Elena Kowalski",
	ensuresStatisticalRigorIn: "Ensures statistical rigor in our data collection and analysis.",
	ensuresStatisticalRigorInAll: "すべてのベンチマーク結果において統計的な厳密さを確保。MITで応用統計学の博士号を取得。",
	formerGoogleEngineerWith: "Former Google engineer with a passion for web performance and open source.",
	formerGoogleEngineerWith10: "以前はGoogleのエンジニアで、大規模な国際化システムの構築に10年の経験があります。",
	founderLeadEngineer: "Founder & Lead Engineer",
	fullStackDeveloper: "Full-Stack Developer",
	maintainsTheBenchmarkingInfrastructure: "Maintains the benchmarking infrastructure and CI/CD pipelines.",
	maintainsTheBenchmarkingInfrastructureAnd: "ベンチマークインフラストラクチャとCI/CDパイプラインを維持。Linguiのオープンソースコントリビューター。",
	managesCommunityContributions: "Manages community contributions and open source outreach.",
	managesCommunityContributionsPartnershipsAnd: "コミュニティの貢献、パートナーシップ、およびイベントを管理。オープンソースガバナンスの経歴を持つ。",
	marcusWeber: "Marcus Weber",
	passionateAboutDeveloperExperience: "Passionate about developer experience and building intuitive APIs.",
	passionateAboutDeveloperExperienceAnd: "開発者体験と教育に情熱を注いでいます。React Conf、JSConf、およびi18nNextのスピーカー。",
	performanceEngineer: "Performance Engineer",
	sarahChen: "Sarah Chen",
	specializesInJavascriptPerformance: "Specializes in JavaScript performance optimization and React internals.",
	specializesInJavascriptPerformanceOptimization: "JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。以前はVercelに在籍。",
	tomasRodriguez: "Tomás Rodríguez",
	yukiTanaka: "Yuki Tanaka"
};
var common_default$4 = {
	cancel: "Cancel",
	copy: "Copy",
	"footer.anOpenSourceTestApplication": "国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実際の影響を測定するためのオープンソーステストアプリケーション。",
	"footer.builtWith": "i18n Benchmark — オープンソースプロジェクト。React、Vite、TanStack Routerで構築。",
	"footer.contact": "お問い合わせ",
	"footer.contributing": "貢献する",
	"footer.github": "GitHub",
	"footer.methodology": "メソッド",
	"footer.resources": "リソース",
	"header.blog": "ブログ",
	"header.careers": "採用",
	"header.contact": "お問い合わせ",
	"header.faq": "FAQ",
	"header.goToGithub": "GitHubへ",
	"header.home": "ホーム",
	"header.methodology": "メソッド",
	"header.mockPages": "テストページ",
	"header.pricing": "料金",
	"header.products": "製品",
	"header.settings": "設定",
	"header.team": "チーム",
	mockBanner: "⚠️ このページにはベンチマークのみを目的とした模擬データが含まれています。実際のビジネスやサービスとは関係ありません。",
	readMore: "Read More",
	saveChanges: "Save Changes",
	"themeToggle.themeAuto": "テーマ：自動",
	"themeToggle.themeDark": "テーマ：ダーク",
	"themeToggle.themeLight": "テーマ：ライト",
	"themeToggle.themeModeAutoSystemClick": "テーマモード：自動（システム）。クリックしてライトモードに切り替え。",
	"themeToggle.themeModeDarkClick": "テーマモード：ダーク。クリックして自動（システム）モードに切り替え。",
	"themeToggle.themeModeLightClick": "テーマモード：ライト。クリックしてダークモードに切り替え。"
};
var home_default$4 = {
	"hero.aTestApplicationDesignedTo": "国際化ライブラリがバンドルサイズ、読み込みパフォーマンス、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーション。",
	"hero.viewResults": "結果を表示",
	"whyItMatters.whyTheseMetricsMatter": "なぜこれらの指標が重要なのか",
	"whyItMatters.bundleSize": "バンドルサイズ",
	"whyItMatters.theBundleIsTheData": "バンドルは世界中のすべてのユーザーに送信されるデータです。バンドルが大きいほど、ダウンロード時間が長くなります。特に多くの地域で一般的な低速な3G接続では顕著です。i18nライブラリはその重量において、数キロバイトから数十キロバイトのランタイムコード、さらに翻訳ファイル自体まで大きく異なります。",
	"whyItMatters.renderingHydration": "レンダリングとハイドレーション",
	"whyItMatters.connectingALargeJson": "大きなJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体で再レンダリングを引き起こす可能性があります。SSRのハイドレーション中、巨大な翻訳オブジェクトの解析とアタッチは、ページがインタラクティブになるまでの遅延を追加し、Time to Interactive（TTI）に直接影響します。",
	"whyItMatters.dynamicLoading": "動的読み込み",
	"whyItMatters.loadingAllTranslationsUpfront": "すべての翻訳を事前に読み込むと、初期ペイロードが過負荷になります。動的（遅延）読み込みは、ルートまたは名前空間ごとに翻訳を分割し、現在のページが必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、未翻訳コンテンツのフラッシュ、キャッシュの複雑さといった独自のトレードオフが伴います。両方の戦略を測定することが不可欠です。",
	"understandingImpact.understandingTheImpact": "影響を理解する",
	"understandingImpact.whyASingleLargeJson": "なぜ1つの大きなJSONがパフォーマンスを低下させるのか",
	"understandingImpact.manyI18nLibrariesStoreTranslations": "多くのi18nライブラリは、Reactコンテキストを介して提供される1つのJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい（数千のキーがある）場合、翻訳を使用するすべてのコンポーネントが辞書全体への参照を保持します。これは以下のことを意味します：",
	"understandingImpact.theJsonMustBeParsed": "JSONはページ読み込みのたびに解析される必要があり、メインスレッドをブロックします。",
	"understandingImpact.contextBasedArchitecturesCanCause": "コンテキストベースのアーキテクチャでは、ロケールが変更されたときにカスケード的な再レンダリングが発生する可能性があります。これは、特定のキーが変更されていなくても、すべてのコンシューマーに通知されるためです。",
	"understandingImpact.duringServerSideRenderingThe": "サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。",
	"understandingImpact.theTradeOffsOfDynamic": "動的読み込みのトレードオフ",
	"understandingImpact.splittingTranslationsIntoPerRoute": "ルートごとまたは名前空間ごとのチャンクに翻訳を分割すると、初期ペイロードを劇的に削減できます。しかし、新たな課題も生じます：",
	"understandingImpact.waterfallRequests": "ウォーターフォールリクエスト：",
	"understandingImpact.flashOfUntranslatedContentFouc": "未翻訳コンテンツのフラッシュ（FOUC）：",
	"understandingImpact.cacheInvalidation": "キャッシュの無効化：",
	"understandingImpact.whatThisBenchmarkMeasures": "このベンチマークが測定するもの",
	"understandingImpact.thisTestAppProvidesA": "このテストアプリは、10ページの現実的なコンテンツを含む制御された環境を提供し、3つの軸でi18nライブラリを比較します：JavaScriptバンドルに追加される重量、翻訳されたコンテンツの解析とレンダリングに費やされる時間、そしてコード分割と遅延読み込み戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。",
	"resultsTable.sampleResults": "サンプル結果",
	"resultsTable.bundleSize": "バンドルサイズ",
	"resultsTable.lookupTime": "検索時間",
	"resultsTable.lazyLoading": "遅延読み込み"
};
var about_default$4 = {
	"aboutHeader.methodology": "メソッド",
	"aboutHeader.weDesignedThisBenchmarkTo": "私たちは、i18nライブラリを公平、再現可能、そして有意義に比較できるようにこのベンチマークを設計しました。",
	"aboutGrid.testEnvironment": "テスト環境",
	"aboutGrid.allBenchmarksRunOn": "すべてのベンチマークは、同じハードウェア（M2 MacBook Pro、16 GB RAM）、同じブラウザ（Playwright経由のChromium 120）、および同じネットワーク条件（シミュレートされた4G）で実行されます。各テストは50回繰り返され、P95/P99パーセンタイルの中央値を報告します。",
	"aboutGrid.applicationDesign": "アプリケーション設計",
	"aboutGrid.theBenchmarkAppHas10": "ベンチマークアプリには、ナビゲーション、フォーム、動的リスト、静的テキストなど、現実的なコンテンツを含む10ページがあります。各ページは、実際の使用パターンを表すために15〜30個の翻訳キーを使用しています。",
	"aboutGrid.measurementMethodology": "測定メソッド",
	"aboutGrid.weUseBrowserNativeApis": "Performance Timeline、Resource Timing、Layout InstabilityなどのブラウザネイティブAPIと、React Profilerデータを組み合わせて使用します。バンドルサイズは、正確を期すためにsource-map-explorerを使用してgzip後に測定されます。",
	"aboutGrid.fairComparison": "公平な比較",
	"aboutGrid.eachI18nLibraryIsIntegrated": "各i18nライブラリは、公式ドキュメントとベストプラクティスに従って統合されています。最適な構成を確保するために、可能な場合はメンテナに相談しています。同じReactアプリ、同じVite設定、同じデプロイメント。",
	"whatWeMeasure.bundleSizeImpact": "バンドルサイズへの影響",
	"whatWeMeasure.theAdditionalJavascriptBytesSent": "i18nライブラリとその翻訳ファイルが含まれているときにユーザーに送信される追加のJavaScriptバイト。これは、低速なネットワークでのダウンロード時間に直接影響します。",
	"whatWeMeasure.renderingOverhead": "レンダリングのオーバーヘッド",
	"whatWeMeasure.howMuchExtraTimeThe": "ライブラリがReactのレンダリングサイクルに追加する余分な時間。単一のコンテキストプロバイダーを介して翻訳を注入するライブラリは、コンポーネントツリー全体で不要な再レンダリングを引き起こす可能性があります。",
	"whatWeMeasure.hydrationCost": "ハイドレーションのコスト",
	"whatWeMeasure.duringSsrTranslationDataIs": "SSR中、翻訳データはHTMLにシリアル化されます。大きな辞書はHTMLペイロードを増加させ、ハイドレーション（ページがインタラクティブになる瞬間）を遅らせます。",
	"whatWeMeasure.lazyLoadingEffectiveness": "遅延読み込みの有効性",
	"whatWeMeasure.whetherSplittingTranslationsByRoute": "ルートまたは名前空間ごとに翻訳を分割することで、初期負荷が実際に軽減されるか、またどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）が生じるかがわかります。",
	"whatWeMeasure.localeSwitchSpeed": "ロケール切り替え速度",
	"whatWeMeasure.howFastTheAppCan": "実行時にアプリが1つの言語から別の言語にどれだけ速く切り替えられるか（新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新を含む）。",
	"whatWeMeasure.whatWeMeasure": "測定するもの"
};
var blog_default$4 = {
	"blogHeader.blog": "ブログ",
	"blogHeader.insightsDeepDivesAnd": "i18nベンチマークコミュニティからの洞察、詳細な分析、および最新情報。",
	"blogList.i18nBenchmark2026Results": "i18nベンチマーク2026の結果",
	"blogList.march152026": "2026年3月15日",
	"blogList.weTested12DifferentInternationalization": "10ページにわたって12種類の国際化ライブラリをテストしました。インタラクティブなチャートを含む詳細な結果はこちらです。",
	"blogList.howToReduceYourI18n": "i18nバンドルを60%削減する方法",
	"blogList.march82026": "2026年3月8日",
	"blogList.practicalStrategiesForOptimizingTranslation": "翻訳ファイルの読み込みの最適化、未使用ロケールのツリーシェイキング、ビルド時のコンパイルの活用など、実践的な戦略。",
	"blogList.theStateOfInternationalizationIn": "2026年における国際化の現状",
	"blogList.february282026": "2026年2月28日",
	"blogList.anOverviewOfTheCurrent": "メッセージカタログからコンパイラベースのソリューションまで、現在のアプローチを比較したi18nエコシステムの概要。",
	"blogList.migratingFromReactI18nextTo": "react-i18nextからLinguiへの移行",
	"blogList.february152026": "2026年2月15日",
	"blogList.aStepByStepGuide": "5万個の翻訳キーを持つプロダクションアプリをreact-i18nextからLinguiに移行するためのステップバイステップガイド。",
	"blogList.serverComponentsAndI18nWhat": "Server Componentsとi18n：何が変わるのか？",
	"blogList.february12026": "2026年2月1日",
	"blogList.reactServerComponentsIntroduceNew": "React Server Componentsは国際化のための新しいパターンを導入します。その影響とベストプラクティスを探ります。",
	"blogList.benchmarkMethodologyHowWeTest": "ベンチマーク手法：どのようにテストするか",
	"blogList.january202026": "2026年1月20日",
	"blogList.aTransparentLookAtOur": "テスト環境、統計手法、再現性を含む、私たちのベンチマーク手法の透明な公開。",
	"blogList.readMore": "続きを読む →"
};
var careers_default$4 = {
	"careersHeader.careers": "採用",
	"careersHeader.joinOurMissionToMake": "世界中のすべての人にとって、ウェブをより速く、よりアクセスしやすくするという私たちのミッションに参加してください。",
	"careersBenefits.whyJoinUs": "なぜ参加するのか？",
	"careersBenefits.remoteFirst": "リモートファースト",
	"careersBenefits.workFromAnywhereFully": "どこからでも仕事ができます。6つのタイムゾーンにまたがる完全分散型チーム。",
	"careersBenefits.openSource": "オープンソース",
	"careersBenefits.allOurWorkIs": "私たちの仕事はすべてオープンソースです。影響を与えながら、公開ポートフォリオを構築してください。",
	"careersBenefits.impactful": "インパクトがある",
	"careersBenefits.yourWorkDirectlyHelps": "あなたの仕事は、開発者がより良く、より速い国際化アプリを構築するのを直接助けます。",
	"openPositions.openPositions": "募集中の職種",
	"openPositions.seniorPerformanceEngineer": "シニアパフォーマンスエンジニア",
	"openPositions.fullTime": "正社員",
	"openPositions.remote": "リモート",
	"openPositions.leadBenchmarkDesignAnd": "ベンチマークの設計と実装をリード。V8の内部構造、ブラウザのパフォーマンスAPI、および統計分析に関する深い知識が必要です。",
	"openPositions.technicalWriter": "テクニカルライター",
	"openPositions.partTime": "パートタイム",
	"openPositions.createAndMaintainDocumentation": "i18nパフォーマンスのベストプラクティスに関するドキュメント、ブログ記事、教育コンテンツを作成および維持管理します。",
	"openPositions.frontendDeveloper": "フロントエンドデベロッパー",
	"openPositions.buildAndMaintainThe": "ベンチマークダッシュボード、比較ツール、インタラクティブな視覚化を構築および維持管理します。",
	"openPositions.devOpsEngineer": "DevOpsエンジニア",
	"openPositions.designAndMaintainThe": "ライブラリの更新ごとにベンチマークを自動的に実行するCI/CDパイプラインを設計および維持管理します。",
	"openPositions.applyNow": "今すぐ応募"
};
var contact_default$4 = {
	"contactHeader.contactUs": "お問い合わせ",
	"contactHeader.haveQuestionsOrWantTo": "質問がある、または貢献したいですか？ぜひご連絡ください。",
	"contactForm.name": "お名前",
	"contactForm.email": "メールアドレス",
	"contactForm.subject": "件名",
	"contactForm.message": "メッセージ",
	"contactForm.sendMessage": "メッセージを送信",
	"contactForm.wellGetBackTo": "48時間以内に返信いたします。"
};
var faq_default$4 = {
	"faqHeader.frequentlyAskedQuestions": "よくある質問",
	"faqHeader.everythingYouNeedTo": "i18nベンチマークプロジェクトについて知っておくべきことのすべて。",
	"faqList.howAreTheBenchmarks": "ベンチマークはどのように実行されますか？",
	"faqList.allBenchmarksAreRun": "すべてのベンチマークは、Playwrightを使用して、一貫したハードウェア（M2 MacBook Pro）上でシミュレートされた4Gネットワーク条件で実行されます。各テストは50回繰り返され、中央値、P95、およびP99の値を報告します。",
	"faqList.whatLibrariesAreCurrently": "現在テストされているライブラリは何ですか？",
	"faqList.weCurrentlyBenchmarkReactI18next": "現在はreact-i18next、react-intl (FormatJS)、LinguiJS、typesafe-i18n、next-intl、Paraglideをベンチマークしています。コミュニティの要望に応じてさらに追加する予定です。",
	"faqList.canIContributeA": "新しいライブラリの統合を提案できますか？",
	"faqList.absolutelyWeWelcomeCommunity": "もちろんです！コミュニティからの貢献を歓迎します。リポジトリをフォークし、テンプレートに従ってライブラリの統合を追加し、プルリクエストを送信してください。",
	"faqList.howOftenAreResults": "結果はどのくらいの頻度で更新されますか？",
	"faqList.benchmarksRunAutomaticallyVia": "ベンチマークは、依存関係の更新ごとにCIを介して自動的に実行され、さらにメインブランチで毎週実行されます。結果は24時間以内にダッシュボードに公開されます。",
	"faqList.areTheResultsStatistically": "結果は統計的に有意ですか？",
	"faqList.yesWeUseThe": "はい。分布を比較するために、有意水準0.05のマン・ホイットニーのU検定を使用します。また、信頼区間と効果量も報告します。"
};
var pricing_default$4 = {
	"pricingHeader.pricing": "料金",
	"pricingHeader.transparentPricingForEvery": "i18nジャーニーのあらゆる段階に対応する、透明性の高い料金体系。",
	"pricingTiers.freeTier": "無料プラン",
	"pricingTiers.free": "無料",
	"pricingTiers.publicBenchmarkDashboard": "公開ベンチマークダッシュボード",
	"pricingTiers.basicLibraryComparisons": "基本的なライブラリ比較",
	"pricingTiers.communityForumAccess": "コミュニティフォーラムへのアクセス",
	"pricingTiers.monthlyResultDigest": "月次結果ダイジェスト",
	"pricingTiers.getStarted": "始める",
	"pricingTiers.proTier": "Proプラン",
	"pricingTiers.perMonth": "/月",
	"pricingTiers.allFreeFeatures": "無料プランの全機能",
	"pricingTiers.customBenchmarkConfigurations": "カスタムベンチマーク設定",
	"pricingTiers.privateResultsDashboard": "プライベート結果ダッシュボード",
	"pricingTiers.apiAccess1000Requests": "APIアクセス（1日1,000リクエスト）",
	"pricingTiers.slackIntegration": "Slack統合",
	"pricingTiers.subscribeToPro": "Proに登録",
	"pricingTiers.enterpriseTier": "Enterpriseプラン",
	"pricingTiers.custom": "カスタム",
	"pricingTiers.allProFeatures": "Proプランの全機能",
	"pricingTiers.dedicatedBenchmarkInfrastructure": "専用ベンチマークインフラ",
	"pricingTiers.customLibraryIntegrations": "カスタムライブラリ統合",
	"pricingTiers.slaGuarantees": "SLA保証",
	"pricingTiers.prioritySupport": "優先サポート",
	"pricingTiers.contactSales": "営業に問い合わせる"
};
var products_default$4 = {
	"productsHeader.products": "製品",
	"productsHeader.toolsAndServicesTo": "国際化戦略の最適化に役立つツールとサービス。",
	"productsGrid.benchmarkDashboard": "ベンチマークダッシュボード",
	"productsGrid.interactiveChartsAndTables": "バンドルサイズ、レンダリング時間、ハイドレーションコストにわたってi18nライブラリを比較するインタラクティブなチャートと表。",
	"productsGrid.bundleAnalyzer": "バンドルアナライザー",
	"productsGrid.uploadYourBuildOutput": "ビルド出力をアップロードして、バンドルのうちどの程度がi18nのオーバーヘッドであるかの詳細な内訳を取得します。",
	"productsGrid.migrationAssistant": "移行アシスタント",
	"productsGrid.automatedCodemodsAndGuides": "最小限の中断でi18nライブラリ間を移行するための自動コードモッドとガイド。",
	"productsGrid.performanceMonitor": "パフォーマンスモニター",
	"productsGrid.continuousPerformanceTrackingFor": "i18n実装の継続的なパフォーマンス追跡。翻訳の読み込みが低下したときにアラートを受け取ります。",
	"productsGrid.learnMore": "詳細はこちら"
};
var settings_default$4 = {
	"settingsHeader.settings": "設定",
	"settingsHeader.manageYourAccountPreferences": "アカウントの設定と構成を管理します。",
	"profileSection.profile": "プロフィール",
	"profileSection.displayName": "表示名",
	"profileSection.email": "メールアドレス",
	"preferencesSection.preferences": "設定",
	"preferencesSection.emailNotifications": "メール通知",
	"preferencesSection.receiveWeeklyBenchmarkReports": "ベンチマーク週報を受け取る",
	"preferencesSection.darkMode": "ダークモード",
	"preferencesSection.useDarkColorScheme": "ダークカラー体系を使用する",
	"preferencesSection.defaultLanguage": "デフォルト言語",
	"apiAccessSection.apiAccess": "APIアクセス",
	"apiAccessSection.apiKey": "APIキー",
	"apiAccessSection.useThisKeyTo": "このキーを使用して、ベンチマークAPIにプログラムでアクセスします。",
	"apiAccessSection.copy": "コピー",
	"settingsFooter.cancel": "キャンセル",
	"settingsFooter.saveChanges": "変更を保存"
};
var team_default$4 = {
	"teamHeader.ourTeam": "私たちのチーム",
	"teamHeader.meetThePeopleBehindI18n": "i18nベンチマークの裏側にいる人々に会いましょう。優れた開発者ツールへの共通の情熱によって結ばれた多様なチームです。",
	"teamGrid.sarahChen": "Sarah Chen",
	"teamGrid.founderLeadEngineer": "創設者兼リードエンジニア",
	"teamGrid.formerGoogleEngineerWith10": "以前はGoogleのエンジニアで、大規模な国際化システムの構築に10年の経験があります。",
	"teamGrid.marcusWeber": "Marcus Weber",
	"teamGrid.performanceEngineer": "パフォーマンスエンジニア",
	"teamGrid.specializesInJavascriptPerformanceOptimization": "JavaScriptのパフォーマンス最適化とベンチマーク手法を専門としています。以前はVercelに在籍。",
	"teamGrid.aishaPatel": "Aisha Patel",
	"teamGrid.developerAdvocate": "デベロッパーアドボケイト",
	"teamGrid.passionateAboutDeveloperExperienceAnd": "開発者体験と教育に情熱を注いでいます。React Conf、JSConf、およびi18nNextのスピーカー。",
	"teamGrid.tomasRodriguez": "Tomás Rodríguez",
	"teamGrid.fullStackDeveloper": "フルスタックデベロッパー",
	"teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "ベンチマークインフラストラクチャとCI/CDパイプラインを維持。Linguiのオープンソースコントリビューター。",
	"teamGrid.yukiTanaka": "Yuki Tanaka",
	"teamGrid.dataAnalyst": "データアナリスト",
	"teamGrid.ensuresStatisticalRigorInAll": "すべてのベンチマーク結果において統計的な厳密さを確保。MITで応用統計学の博士号を取得。",
	"teamGrid.elenaKowalski": "Elena Kowalski",
	"teamGrid.communityManager": "コミュニティマネージャー",
	"teamGrid.managesCommunityContributionsPartnershipsAnd": "コミュニティの貢献、パートナーシップ、およびイベントを管理。オープンソースガバナンスの経歴を持つ。"
};
var route_default$3 = {
	oopsPageNotFound: "Oops! Page not found.",
	returnToHome: "Return to Home",
	"route.couldNotMeasureHydrationDuration": "하이드레이션 시간을 측정할 수 없습니다:",
	"route.oopsPageNotFound": "앗! 페이지를 찾을 수 없습니다",
	"route.returnToHome": "홈으로 돌아가기"
};
var header_default$3 = {
	home: "홈",
	methodology: "방법론",
	mockPages: "테스트 페이지",
	products: "제품",
	pricing: "가격",
	team: "팀",
	blog: "블로그",
	careers: "채용",
	faq: "FAQ",
	contact: "문의하기",
	settings: "설정",
	goToGithub: "GitHub로 이동"
};
var footer_default$3 = {
	resources: "리소스",
	contact: "문의",
	github: "GitHub",
	methodology: "방법론",
	contributing: "기여하기",
	builtWith: "i18n Benchmark — 오픈 소스 프로젝트. React, Vite 및 TanStack Router로 구축되었습니다.",
	anOpenSourceTestApplication: "국제화 라이브러리가 번들 크기, 로드 시간 및 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다."
};
var themeToggle_default$3 = {
	themeModeAutoSystemClick: "테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환하십시오.",
	themeModeLightClick: "테마 모드: 라이트. 클릭하여 다크 모드로 전환하십시오.",
	themeModeDarkClick: "테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환하십시오.",
	themeAuto: "테마: 자동",
	themeDark: "테마: 다크",
	themeLight: "테마: 라이트"
};
var hero_default$3 = {
	aTestApplicationDesignedTo: "국제화 라이브러리가 번들 크기, 로드 성능 및 렌더링 반응성에 미치는 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.",
	viewResults: "결과 보기"
};
var whyItMatters_default$3 = {
	whyTheseMetricsMatter: "이 지표들이 중요한 이유",
	bundleSize: "번들 크기",
	theBundleIsTheData: "번들은 전 세계 모든 사용자에게 전송되는 데이터입니다. 번들이 클수록 다운로드 시간이 길어집니다. 특히 많은 지역에서 흔히 사용되는 느린 3G 연결에서 더욱 그렇습니다. i18n 라이브러리는 수 킬로바이트에서 수십 킬로바이트의 런타임 코드와 번역 파일 자체에 이르기까지 그 무게가 매우 다양합니다.",
	renderingHydration: "렌더링 및 하이드레이션",
	connectingALargeJson: "모든 구성 요소에 대형 JSON 사전을 연결하면 숨겨진 종속성이 생성됩니다. 번역 컨텍스트가 변경되면 트리 전체에서 다시 렌더링이 발생할 수 있습니다. SSR 하이드레이션 중에 방대한 번역 개체를 구문 분석하고 첨부하면 페이지가 인터랙티브해지기 전까지 지연이 추가되어 TTI(Time to Interactive)에 직접적인 영향을 미칩니다.",
	dynamicLoading: "동적 로딩",
	loadingAllTranslationsUpfront: "모든 번역을 미리 로드하면 초기 페이로드가 과부하됩니다. 동적(지연) 로딩은 경로 또는 네임스페이스별로 번역을 분할하여 현재 페이지에 필요한 것만 전송합니다. 그러나 지연 로딩은 워터포럴 요청, 번역되지 않은 콘텐츠의 플래시, 캐싱 복잡성 등의 자체적인 트레이드오프가 있습니다. 두 전략을 모두 측정하는 것이 필수적입니다."
};
var understandingImpact_default$3 = {
	cacheInvalidation: "캐시 무효화:",
	contextBasedArchitecturesCan: "Context-based architectures can cause the entire app to re-render when the language changes. For large apps with thousands of components, this can lead to noticeable lag during locale switches.",
	contextBasedArchitecturesCanCause: "로케일이 변경될 때 컨텍스트 기반 아키텍처는 연쇄적인 다시 렌더링을 유발할 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자가 알림을 받기 때문입니다.",
	duringServerSideRenderingThe: "서버 측 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어 다운로드 및 하이드레이션해야 하는 문서 크기가 증가합니다.",
	flashOfUntranslatedContent: "Flash of Untranslated Content (FOUC)",
	flashOfUntranslatedContentFouc: "번역되지 않은 콘텐츠의 플래시 (FOUC):",
	manyI18nLibrariesStore: "Many i18n libraries store translations in large JSON files that are loaded upfront. This can significantly increase the \"Time to Interactive\" as the browser must download and parse these files before the app can be used.",
	manyI18nLibrariesStoreTranslations: "많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 경우(수천 개의 키), 번역을 사용하는 모든 구성 요소가 전체 사전에 대한 참조를 보유하게 됩니다. 이는 다음을 의미합니다:",
	splittingTranslationsIntoPerRoute: "번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 획기적으로 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다:",
	theAppMustFirstLoad: "The app must first load the core library (e.g., i18next) which adds to the initial bundle size. Even \"lightweight\" libraries can add 10-20KB of minified JS.",
	theJsonMustBeParsed: "JSON은 페이지를 로드할 때마다 구문 분석되어야 하므로 메인 스레드를 차단합니다.",
	theTradeOffsOfDynamic: "동적 로딩의 트레이드오프",
	thisTestAppProvidesA: "이 테스트 앱은 현실적인 콘텐츠가 포함된 10개의 페이지로 구성된 제어된 환경을 제공하여 세 가지 측면에서 i18n 라이브러리를 비교합니다: JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 구문 분석하고 렌더링하는 데 소요되는 시간, 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접적으로 비교 가능합니다.",
	understandingTheImpact: "영향 이해하기",
	updatingTranslationsRequiresCache: "Updating translations often requires a full rebuild or clearing the CDN cache, which can delay the roll-out of critical copy changes.",
	usersMayBrieflySeeTranslation: "Users may briefly see translation keys or English text while the library and translation files are being loaded.",
	waterfallRequests: "워터폴 요청:",
	whatThisBenchmarkMeasures: "이 벤치마크가 측정하는 것",
	whyASingleLargeJson: "단일 대형 JSON이 성능을 저해하는 이유"
};
var resultsTable_default$3 = {
	bundleSize: "번들 크기",
	lazyLoading: "지연 로딩",
	library: "Library",
	lookupTime: "조회 시간",
	sampleResults: "샘플 결과"
};
var aboutHeader_default$3 = {
	aboutThisBenchmark: "About This Benchmark",
	methodology: "방법론",
	thisIsAnOpenSource: "This is an open-source test application for measuring the real-world impact of internationalization libraries.",
	weDesignedThisBenchmarkTo: "우리는 i18n 라이브러리를 공정하고, 재현 가능하며, 의미 있게 비교할 수 있도록 이 벤치마크를 설계했습니다."
};
var aboutGrid_default$3 = {
	allBenchmarksRunOn: "모든 벤치마크는 동일한 하드웨어(M2 MacBook Pro, 16 GB RAM), 동일한 브라우저(Playwright를 통한 Chromium 120) 및 동일한 네트워크 조건(시뮬레이션된 4G)에서 실행됩니다. 각 테스트는 50회 반복되며, P95/P99 백분위수의 중앙값을 보고합니다.",
	applicationDesign: "애플리케이션 설계",
	choosingAnI18nLibrary: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
	eachI18nLibraryIsIntegrated: "각 i18n 라이브러리는 공식 문서와 모범 사례에 따라 통합되었습니다. 최적의 구성을 보장하기 위해 가능한 경우 유지 관리자와 상담합니다. 동일한 React 앱, 동일한 Vite 설정, 동일한 배포 방식이 적용됩니다.",
	fairComparison: "공정한 비교",
	measurementMethodology: "측정 방법론",
	methodology: "Methodology",
	testEnvironment: "테스트 환경",
	theBenchmarkAppHas10: "벤치마크 앱에는 탐색, 양식, 동적 목록 및 정적 텍스트와 같은 현실적인 콘텐츠가 포함된 10개의 페이지가 있습니다. 각 페이지는 실제 사용 패턴을 나타내기 위해 15-30개의 번역 키를 사용합니다.",
	theSame10PageApp: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.",
	weUseBrowserNativeApis: "Performance Timeline, Resource Timing, Layout Instability와 같은 브라우저 기반 API와 React Profiler 데이터를 결합하여 사용합니다. 번들 크기는 정확성을 위해 source-map-explorer를 사용하여 gzip 후에 측정됩니다.",
	whyThisExists: "Why This Exists"
};
var whatWeMeasure_default$3 = {
	bundleSizeImpact: "번들 크기 영향",
	duringSsrTranslationDataIs: "SSR 중에 번역 데이터는 HTML로 직렬화됩니다. 대형 사전은 HTML 페이로드를 증가시키고 하이드레이션(페이지가 인터랙티브해지는 순간)을 늦춥니다.",
	duringSsrTranslationDataIsSerialized: "During SSR, translation data is serialized into the HTML. We measure the size of this payload and its effect on Time to Interactive (TTI).",
	howFastTheAppCan: "실행 중에 앱이 한 언어에서 다른 언어로 얼마나 빨리 전환할 수 있는지(새 번역 가져오기, 구성 요소 다시 렌더링, DOM 업데이트 포함) 측정합니다.",
	howFastTheAppCanSwitchFromOne: "How fast the app can switch from one language to another. We measure the re-render time and any network delays for lazy-loaded locales.",
	howMuchExtraTimeThe: "라이브러리가 React의 렌더링 주기에 추가하는 여분의 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 주입하는 라이브러리는 구성 요소 트리 전체에서 불필요한 다시 렌더링을 유발할 수 있습니다.",
	howMuchExtraTimeTheLibraryAdds: "How much extra time the library adds to the initial page load. This includes script execution and the time to fetch/parse translation data.",
	hydrationCost: "하이드레이션 비용",
	lazyLoadingEffectiveness: "지연 로딩 효과",
	localeSwitchSpeed: "로케일 전환 속도",
	renderingOverhead: "렌더링 오버헤드",
	theAdditionalJavascriptBytes: "The additional Javascript bytes that the library adds to your production build. We measure both the library itself and its mandatory dependencies.",
	theAdditionalJavascriptBytesSent: "i18n 라이브러리와 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다.",
	whatWeMeasure: "측정 항목",
	whetherSplittingTranslationsByRoute: "번역을 경로 또는 네임스페이스별로 분할하는 것이 실제로 초기 로드를 줄이는지, 그리고 어떤 트레이드오프(워터폴 요청, FOUC, 캐시 복잡성)가 발생하는지 측정합니다."
};
var blogHeader_default$3 = {
	blog: "블로그",
	insightsDeepDivesAnd: "i18n 벤치마킹 커뮤니티의 통찰력, 심층 분석 및 업데이트.",
	insightsTutorialsAndAnalysis: "Insights, Tutorials, and Analysis"
};
var blogList_default$3 = {
	aStepByStepGuide: "50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하기 위한 단계별 가이드.",
	aStepByStepGuideOnMigrating: "A step-by-step guide on migrating from legacy i18n solutions to modern, high-performance libraries.",
	aTransparentLookAtOur: "테스트 환경, 통계적 방법 및 재현성을 포함한 벤치마크 방법론에 대한 투명한 공개.",
	aTransparentLookAtOurBenchmarking: "A transparent look at our benchmarking process, from hardware specs to measurement techniques.",
	anOverviewOfTheCurrent: "메시지 카탈로그에서 컴파일러 기반 솔루션에 이르기까지 현재의 접근 방식을 비교한 i18n 생태계 개요.",
	anOverviewOfTheCurrentI18n: "An overview of the current i18n landscape and how different libraries stack up in 2026.",
	analysis: "Analysis",
	benchmark: "Benchmark",
	benchmarkMethodologyHowWe: "Benchmark Methodology: How We Test",
	benchmarkMethodologyHowWeTest: "벤치마크 방법론: 테스트 방법",
	comparingI18nLibrariesIn: "Comparing i18n Libraries in 2026: A Deep Dive",
	february12026: "2026年 2월 1일",
	february152026: "2026년 2월 15일",
	february282026: "2026년 2월 28일",
	howToReduceYourI18n: "i18n 번들을 60% 줄이는 방법",
	i18nBenchmark2026Results: "i18n 벤치마크 2026 결과",
	january202026: "2026년 1월 20일",
	march152026: "2026년 3월 15일",
	march82026: "2026년 3월 8일",
	meta: "Meta",
	migratingFromReactI18nextTo: "react-i18next에서 Lingui로 마이그레이션",
	practicalStrategiesForOptimizingTranslation: "번역 파일 로딩 최적화, 사용하지 않는 로케일의 트리 쉐이킹, 빌드 타임 컴파일 활용을 포함한 번역 번들 최적화를 위한 실질적인 전략.",
	reactServerComponentsIntroduceNew: "React 서버 구성 요소는 국제화를 위한 새로운 패턴을 도입합니다. 그 영향과 모범 사례를 살펴봅니다.",
	readMore: "더 읽어보기 →",
	serverComponentsAndI18nWhat: "서버 컴포넌트와 i18n: 무엇이 변하는가?",
	theStateOfInternationalizationIn: "2026년 React 국제화의 현주소",
	tutorial: "Tutorial",
	weTested12DifferentInternationalization: "우리는 10개 페이지에 걸쳐 12가지 서로 다른 국제화 라이브러리를 테스트했습니다. 대화형 차트가 포함된 자세한 결과는 다음과 같습니다."
};
var careersHeader_default$3 = {
	careers: "채용",
	joinOurMission: "Join our mission to make internationalization fast, easy, and performant for everyone.",
	joinOurMissionToMake: "전 세계 모든 사람을 위해 웹을 더 빠르고 접근하기 쉽게 만들려는 우리의 미션에 동참하세요."
};
var careersBenefits_default$3 = {
	allOurWorkIs: "우리의 모든 작업은 오픈 소스입니다. 영향력을 미치는 동시에 공개 포트폴리오를 만드세요.",
	competitivePay: "Competitive pay",
	impactful: "영향력 있는",
	openSource: "오픈 소스",
	openSourceTime: "Open source time",
	percentTimeForOss: "20% time for OSS contributions",
	remoteFirst: "리모트 퍼스트",
	topOfMarketCompensation: "Top-of-market compensation",
	whyJoinUs: "왜 합류해야 하나요?",
	workFromAnywhere: "Work from anywhere in the world",
	workFromAnywhereFully: "어디서나 일하세요. 6개 시간대에 걸쳐 있는 완전 분산형 팀입니다.",
	yourWorkDirectlyHelps: "여러분의 작업은 개발자가 더 나은, 더 빠른 국제화 앱을 구축하는 데 직접적인 도움이 됩니다."
};
var openPositions_default$3 = {
	applyNow: "Apply Now",
	backendEngineer: "Backend Engineer",
	buildAndMaintainOur: "Build and maintain our benchmarking suite and core application infrastructure.",
	buildAndMaintainThe: "벤치마크 대시보드, 비교 도구 및 대화형 시각화를 구축하고 유지 관리합니다.",
	community: "Community",
	createAndMaintainDocumentation: "i18n 성능 베스트 프랙티스에 관한 문서, 블로그 게시물 및 교육 콘텐츠를 작성하고 유지 관리합니다.",
	createComprehensiveGuidesApi: "Create comprehensive guides, API references, and tutorials for the community.",
	designAndMaintainThe: "라이브러리가 업데이트될 때마다 벤치마크를 자동으로 실행하는 CI/CD 파이프라인을 설계하고 유지 관리합니다.",
	designAndScaleOur: "Design and scale our data ingestion pipelines and statistical analysis engines.",
	devOpsEngineer: "DevOps 엔지니어",
	devrelEngineer: "DevRel Engineer",
	documentation: "Documentation",
	engageWithTheI18n: "Engage with the i18n community, write blog posts, and speak at conferences.",
	engineering: "Engineering",
	ensureTheAccuracyAnd: "Ensure the accuracy and reliability of our benchmarks through rigorous testing.",
	frontendDeveloper: "프론트엔드 개발자",
	fullTime: "Full-time",
	leadBenchmarkDesignAnd: "벤치마크 설계 및 구현을 주도합니다. V8 내부 구조, 브라우저 성능 API 및 통계 분석에 대한 깊은 지식이 필요합니다.",
	openPositions: "Open Positions",
	partTime: "Part-time",
	qaEngineer: "QA Engineer",
	remote: "Remote",
	seniorFrontendEngineer: "Senior Frontend Engineer",
	seniorPerformanceEngineer: "시니어 성능 엔지니어",
	sfRemote: "San Francisco / Remote",
	technicalWriter: "Technical Writer"
};
var contactHeader_default$3 = {
	contactUs: "문의처",
	getInTouch: "문의하기",
	haveIdeasFoundABug: "아이디어가 있나요? 버그를 찾으셨나요? 여러분의 의견을 기다립니다.",
	haveQuestionsOrWantTo: "궁금한 점이 있거나 기여하고 싶으신가요? 여러분의 의견을 기다립니다."
};
var contactForm_default$3 = {
	bugReport: "버그 리포트",
	contribution: "Contribution",
	email: "이메일",
	emailPlaceholder: "you@example.com",
	message: "메시지",
	messagePlaceholder: "메시지를 입력하세요...",
	methodologyQuestion: "Methodology Question",
	name: "이름",
	newBenchmarkIdea: "New Benchmark Idea",
	other: "Other",
	sendMessage: "메시지 보내기",
	subject: "제목",
	topic: "주제",
	wellGetBackTo: "48시간 이내에 답변해 드리겠습니다.",
	yourName: "이름을 입력하세요"
};
var faqHeader_default$3 = {
	everythingYouNeedToKnow: "i18n Benchmark에 대해 알아야 할 모든 것.",
	frequentlyAskedQuestions: "자주 묻는 질문"
};
var faqList_default$3 = {
	absolutelyWeWelcomeCommunity: "물론입니다! 커뮤니티의 기여를 환영합니다. 저장소를 포크하고 템플릿에 따라 라이브러리 통합을 추가한 후 풀 리퀘스트를 제출하세요.",
	allBenchmarksAreRun: "모든 벤치마크는 일관된 하드웨어 설정(M2 MacBook Pro)에서 시뮬레이션된 4G 네트워크 조건으로 Playwright를 사용하여 실행됩니다. 각 테스트는 50번 반복되며 중앙값, P95 및 P99 값을 보고합니다.",
	areTheResultsStatistically: "결과가 통계적으로 유의미한가요?",
	benchmarksRunAutomaticallyVia: "벤치마크는 모든 종속성 업데이트 시 CI를 통해 자동으로 실행되며 메인 브랜치에서 매주 실행됩니다. 결과는 24시간 이내에 대시보드에 게시됩니다.",
	canIContributeA: "새로운 라이브러리 통합을 제안할 수 있나요?",
	canISubmitMyOwnBenchmarks: "내 벤치마크를 제출할 수 있나요?",
	doYouOfferConsultingServices: "컨설팅 서비스를 제공하나요?",
	howAreBenchmarksConducted: "벤치마크는 어떻게 수행되나요?",
	howAreTheBenchmarks: "벤치마크는 어떻게 실행되나요?",
	howCanIContribute: "어떻게 기여할 수 있나요?",
	howOftenAreBenchmarksUpdated: "벤치마크는 얼마나 자주 업데이트되나요?",
	howOftenAreResults: "결과는 얼마나 자주 업데이트되나요?",
	i18nBenchmarkIsAnOpenSource: "i18n Benchmark is an open-source project dedicated to measuring the real-world performance impact of internationalization libraries.",
	isTheDataReliable: "데이터는 신뢰할 수 있나요?",
	thereAreManyWaysToContribute: "There are many ways to contribute, from submitting new benchmarks to improving our methodology documentation.",
	weCurrentlyBenchmarkReactI18next: "현재 react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl 및 Paraglide를 벤치마킹하고 있습니다. 커뮤니티의 요청에 따라 더 많은 라이브러리를 추가할 계획입니다.",
	weFollowRigorousStatisticalMethodologyIncluding: "We follow rigorous statistical methodology, including outlier detection and multiple test runs to ensure accuracy.",
	weReRunAllBenchmarksWeekly: "We re-run all benchmarks weekly against the latest versions of each library.",
	weRunStandardizedTestsInIsolated: "We run standardized tests in isolated environments, measuring bundle size, render time, and memory usage across dozens of libraries.",
	weSupportReactI18nextReactIntl: "We support react-i18next, react-intl, Lingui, Tolgee, and several other popular React i18n solutions.",
	whatIsI18nBenchmark: "i18n Benchmark는 무엇인가요?",
	whatLibrariesAreCurrently: "현재 어떤 라이브러리가 테스트되고 있나요?",
	whichLibrariesAreCurrentlySupported: "현재 지원되는 라이브러리는 무엇인가요?",
	yesCommunityBenchmarkSubmissionsAre: "Yes! Community benchmark submissions are encouraged and reviewed by our core team.",
	yesOurEnterprisePlanIncludesConsulting: "Yes, our Enterprise plan includes consulting services for optimizing your app's i18n performance.",
	yesWeUseThe: "네. 0.05 유의 수준에서 Mann-Whitney U 검정을 사용하여 분포를 비교합니다. 또한 신뢰 구간과 효과 크기를 보고합니다."
};
var pricingHeader_default$3 = {
	pricing: "가격",
	transparentPricingForEvery: "i18n 여정의 모든 단계에 적합한 투명한 요금제."
};
var pricingTiers_default$3 = {
	freeTier: "무료 티어",
	free: "무료",
	publicBenchmarkDashboard: "공개 벤치마크 대시보드",
	basicLibraryComparisons: "기본 라이브러리 비교",
	communityForumAccess: "커뮤니티 포럼 액세스",
	monthlyResultDigest: "월간 결과 요약",
	getStarted: "시작하기",
	proTier: "프로 티어",
	perMonth: "/월",
	allFreeFeatures: "모든 무료 기능 포함",
	customBenchmarkConfigurations: "맞춤형 벤치마크 구성",
	privateResultsDashboard: "비공개 결과 대시보드",
	apiAccess1000Requests: "API 액세스(일일 1,000건)",
	slackIntegration: "Slack 연동",
	subscribeToPro: "프로 구독",
	enterpriseTier: "엔터프라이즈 티어",
	custom: "커스텀",
	allProFeatures: "모든 프로 기능 포함",
	dedicatedBenchmarkInfrastructure: "전용 벤치마크 인프라",
	customLibraryIntegrations: "맞춤형 라이브러리 통합",
	slaGuarantees: "SLA 보장",
	prioritySupport: "우선 지원",
	contactSales: "영업팀 문의"
};
var productsHeader_default$3 = {
	products: "제품",
	toolsAndServicesTo: "국제화 전략을 최적화하는 데 도움이 되는 도구와 서비스."
};
var productsGrid_default$3 = {
	benchmarkDashboard: "벤치마크 대시보드",
	interactiveChartsAndTables: "번들 크기, 렌더링 시간, 하이드레이션 비용에 따라 i18n 라이브러리를 비교하는 대화형 차트와 표.",
	bundleAnalyzer: "번들 분석기",
	uploadYourBuildOutput: "빌드 결과물을 업로드하고 번들 중 i18n 오버헤드가 얼마나 되는지 자세한 분석을 받아보세요.",
	migrationAssistant: "마이그레이션 도우미",
	automatedCodemodsAndGuides: "최소한의 중단으로 i18n 라이브러리 간의 마이그레이션을 돕는 자동 코드 수정 도구와 가이드.",
	performanceMonitor: "성능 모니터",
	continuousPerformanceTrackingFor: "i18n 구현의 지속적인 성능 추적. 번역 로딩 속도가 느려지면 알림을 받으세요.",
	learnMore: "더 알아보기"
};
var settingsHeader_default$3 = {
	manageYourAccount: "Manage your account settings and preferences.",
	manageYourAccountPreferences: "계정 기본 설정 및 구성을 관리합니다.",
	settings: "설정"
};
var profileSection_default$3 = {
	profile: "프로필",
	displayName: "표시 이름",
	email: "이메일"
};
var preferencesSection_default$3 = {
	arabicAr: "Arabic (ar)",
	chineseSimplifiedZhCn: "Chinese (Simplified, zh-CN)",
	darkMode: "다크 모드",
	defaultLanguage: "기본 언어",
	emailNotifications: "이메일 알림",
	englishEn: "English (en)",
	frenchFr: "French (fr)",
	germanDe: "German (de)",
	japaneseJa: "Japanese (ja)",
	preferences: "기본 설정",
	receiveWeeklyBenchmark: "Receive weekly benchmark reports",
	receiveWeeklyBenchmarkReports: "주간 벤치마크 보고서 받기",
	spanishEs: "Spanish (es)",
	toggleDarkMode: "Toggle dark mode",
	toggleNotifications: "Toggle Notifications",
	useDarkColorScheme: "어두운 색상 체계 사용"
};
var apiAccessSection_default$3 = {
	apiAccess: "API 액세스",
	apiKey: "API 키",
	useThisKeyTo: "이 키를 사용하여 프로그래밍 방식으로 벤치마킹 API에 액세스하십시오.",
	copy: "복사"
};
var settingsFooter_default$3 = {
	cancel: "취소",
	saveChanges: "변경 사항 저장"
};
var teamHeader_default$3 = {
	ourTeam: "우리 팀",
	meetThePeopleBehindI18n: "i18n Benchmark를 만드는 사람들을 만나보세요. 훌륭한 개발자 도구에 대한 열정으로 뭉친 다양한 팀입니다."
};
var teamGrid_default$3 = {
	aishaPatel: "Aisha Patel",
	communityManager: "Community Manager",
	dataAnalyst: "Data Analyst",
	developerAdvocate: "Developer Advocate",
	elenaKowalski: "Elena Kowalski",
	ensuresStatisticalRigorIn: "Ensures statistical rigor in our data collection and analysis.",
	ensuresStatisticalRigorInAll: "모든 벤치마크 결과의 통계적 엄격함을 보장합니다. MIT 응용통계학 박사.",
	formerGoogleEngineerWith: "Former Google engineer with a passion for web performance and open source.",
	formerGoogleEngineerWith10: "전 Google 엔지니어로 대규모 국제화 시스템 구축에 10년의 경험이 있습니다.",
	founderLeadEngineer: "Founder & Lead Engineer",
	fullStackDeveloper: "Full-Stack Developer",
	maintainsTheBenchmarkingInfrastructure: "Maintains the benchmarking infrastructure and CI/CD pipelines.",
	maintainsTheBenchmarkingInfrastructureAnd: "벤치마킹 인프라 및 CI/CD 파이프라인 유지 관리. Lingui 오픈 소스 기여자.",
	managesCommunityContributions: "Manages community contributions and open source outreach.",
	managesCommunityContributionsPartnershipsAnd: "커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 배경 보유。",
	marcusWeber: "Marcus Weber",
	passionateAboutDeveloperExperience: "Passionate about developer experience and building intuitive APIs.",
	passionateAboutDeveloperExperienceAnd: "개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext 강연자.",
	performanceEngineer: "Performance Engineer",
	sarahChen: "Sarah Chen",
	specializesInJavascriptPerformance: "Specializes in JavaScript performance optimization and React internals.",
	specializesInJavascriptPerformanceOptimization: "JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전 Vercel 근무.",
	tomasRodriguez: "Tomás Rodríguez",
	yukiTanaka: "Yuki Tanaka"
};
var common_default$3 = {
	cancel: "Cancel",
	copy: "Copy",
	"footer.anOpenSourceTestApplication": "국제화 라이브러리가 번들 크기, 로드 시간 및 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.",
	"footer.builtWith": "i18n Benchmark — 오픈 소스 프로젝트. React, Vite 및 TanStack Router로 구축되었습니다.",
	"footer.contact": "문의",
	"footer.contributing": "기여하기",
	"footer.github": "GitHub",
	"footer.methodology": "방법론",
	"footer.resources": "리소스",
	"header.blog": "블로그",
	"header.careers": "채용",
	"header.contact": "문의하기",
	"header.faq": "FAQ",
	"header.goToGithub": "GitHub로 이동",
	"header.home": "홈",
	"header.methodology": "방법론",
	"header.mockPages": "테스트 페이지",
	"header.pricing": "가격",
	"header.products": "제품",
	"header.settings": "설정",
	"header.team": "팀",
	mockBanner: "⚠️ 이 페이지는 벤치마킹 목적으로만 사용되는 모의 데이터를 포함하고 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.",
	readMore: "Read More",
	saveChanges: "Save Changes",
	"themeToggle.themeAuto": "테마: 자동",
	"themeToggle.themeDark": "테마: 다크",
	"themeToggle.themeLight": "테마: 라이트",
	"themeToggle.themeModeAutoSystemClick": "테마 모드: 자동(시스템). 클릭하여 라이트 모드로 전환하십시오.",
	"themeToggle.themeModeDarkClick": "테마 모드: 다크. 클릭하여 자동(시스템) 모드로 전환하십시오.",
	"themeToggle.themeModeLightClick": "테마 모드: 라이트. 클릭하여 다크 모드로 전환하십시오."
};
var home_default$3 = {
	"hero.aTestApplicationDesignedTo": "국제화 라이브러리가 번들 크기, 로드 성능 및 렌더링 반응성에 미치는 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.",
	"hero.viewResults": "결과 보기",
	"whyItMatters.whyTheseMetricsMatter": "이 지표들이 중요한 이유",
	"whyItMatters.bundleSize": "번들 크기",
	"whyItMatters.theBundleIsTheData": "번들은 전 세계 모든 사용자에게 전송되는 데이터입니다. 번들이 클수록 다운로드 시간이 길어집니다. 특히 많은 지역에서 흔히 사용되는 느린 3G 연결에서 더욱 그렇습니다. i18n 라이브러리는 수 킬로바이트에서 수십 킬로바이트의 런타임 코드와 번역 파일 자체에 이르기까지 그 무게가 매우 다양합니다.",
	"whyItMatters.renderingHydration": "렌더링 및 하이드레이션",
	"whyItMatters.connectingALargeJson": "모든 구성 요소에 대형 JSON 사전을 연결하면 숨겨진 종속성이 생성됩니다. 번역 컨텍스트가 변경되면 트리 전체에서 다시 렌더링이 발생할 수 있습니다. SSR 하이드레이션 중에 방대한 번역 개체를 구문 분석하고 첨부하면 페이지가 인터랙티브해지기 전까지 지연이 추가되어 TTI(Time to Interactive)에 직접적인 영향을 미칩니다.",
	"whyItMatters.dynamicLoading": "동적 로딩",
	"whyItMatters.loadingAllTranslationsUpfront": "모든 번역을 미리 로드하면 초기 페이로드가 과부하됩니다. 동적(지연) 로딩은 경로 또는 네임스페이스별로 번역을 분할하여 현재 페이지에 필요한 것만 전송합니다. 그러나 지연 로딩은 워터포럴 요청, 번역되지 않은 콘텐츠의 플래시, 캐싱 복잡성 등의 자체적인 트레이드오프가 있습니다. 두 전략을 모두 측정하는 것이 필수적입니다.",
	"understandingImpact.understandingTheImpact": "영향 이해하기",
	"understandingImpact.whyASingleLargeJson": "단일 대형 JSON이 성능을 저해하는 이유",
	"understandingImpact.manyI18nLibrariesStoreTranslations": "많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 경우(수천 개의 키), 번역을 사용하는 모든 구성 요소가 전체 사전에 대한 참조를 보유하게 됩니다. 이는 다음을 의미합니다:",
	"understandingImpact.theJsonMustBeParsed": "JSON은 페이지를 로드할 때마다 구문 분석되어야 하므로 메인 스레드를 차단합니다.",
	"understandingImpact.contextBasedArchitecturesCanCause": "로케일이 변경될 때 컨텍스트 기반 아키텍처는 연쇄적인 다시 렌더링을 유발할 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자가 알림을 받기 때문입니다.",
	"understandingImpact.duringServerSideRenderingThe": "서버 측 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어 다운로드 및 하이드레이션해야 하는 문서 크기가 증가합니다.",
	"understandingImpact.theTradeOffsOfDynamic": "동적 로딩의 트레이드오프",
	"understandingImpact.splittingTranslationsIntoPerRoute": "번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 획기적으로 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다:",
	"understandingImpact.waterfallRequests": "워터폴 요청:",
	"understandingImpact.flashOfUntranslatedContentFouc": "번역되지 않은 콘텐츠의 플래시 (FOUC):",
	"understandingImpact.cacheInvalidation": "캐시 무효화:",
	"understandingImpact.whatThisBenchmarkMeasures": "이 벤치마크가 측정하는 것",
	"understandingImpact.thisTestAppProvidesA": "이 테스트 앱은 현실적인 콘텐츠가 포함된 10개의 페이지로 구성된 제어된 환경을 제공하여 세 가지 측면에서 i18n 라이브러리를 비교합니다: JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 구문 분석하고 렌더링하는 데 소요되는 시간, 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접적으로 비교 가능합니다.",
	"resultsTable.sampleResults": "샘플 결과",
	"resultsTable.bundleSize": "번들 크기",
	"resultsTable.lookupTime": "조회 시간",
	"resultsTable.lazyLoading": "지연 로딩"
};
var about_default$3 = {
	"aboutHeader.methodology": "방법론",
	"aboutHeader.weDesignedThisBenchmarkTo": "우리는 i18n 라이브러리를 공정하고, 재현 가능하며, 의미 있게 비교할 수 있도록 이 벤치마크를 설계했습니다.",
	"aboutGrid.testEnvironment": "테스트 환경",
	"aboutGrid.allBenchmarksRunOn": "모든 벤치마크는 동일한 하드웨어(M2 MacBook Pro, 16 GB RAM), 동일한 브라우저(Playwright를 통한 Chromium 120) 및 동일한 네트워크 조건(시뮬레이션된 4G)에서 실행됩니다. 각 테스트는 50회 반복되며, P95/P99 백분위수의 중앙값을 보고합니다.",
	"aboutGrid.applicationDesign": "애플리케이션 설계",
	"aboutGrid.theBenchmarkAppHas10": "벤치마크 앱에는 탐색, 양식, 동적 목록 및 정적 텍스트와 같은 현실적인 콘텐츠가 포함된 10개의 페이지가 있습니다. 각 페이지는 실제 사용 패턴을 나타내기 위해 15-30개의 번역 키를 사용합니다.",
	"aboutGrid.measurementMethodology": "측정 방법론",
	"aboutGrid.weUseBrowserNativeApis": "Performance Timeline, Resource Timing, Layout Instability와 같은 브라우저 기반 API와 React Profiler 데이터를 결합하여 사용합니다. 번들 크기는 정확성을 위해 source-map-explorer를 사용하여 gzip 후에 측정됩니다.",
	"aboutGrid.fairComparison": "공정한 비교",
	"aboutGrid.eachI18nLibraryIsIntegrated": "각 i18n 라이브러리는 공식 문서와 모범 사례에 따라 통합되었습니다. 최적의 구성을 보장하기 위해 가능한 경우 유지 관리자와 상담합니다. 동일한 React 앱, 동일한 Vite 설정, 동일한 배포 방식이 적용됩니다.",
	"whatWeMeasure.bundleSizeImpact": "번들 크기 영향",
	"whatWeMeasure.theAdditionalJavascriptBytesSent": "i18n 라이브러리와 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다.",
	"whatWeMeasure.renderingOverhead": "렌더링 오버헤드",
	"whatWeMeasure.howMuchExtraTimeThe": "라이브러리가 React의 렌더링 주기에 추가하는 여분의 시간입니다. 단일 컨텍스트 공급자를 통해 번역을 주입하는 라이브러리는 구성 요소 트리 전체에서 불필요한 다시 렌더링을 유발할 수 있습니다.",
	"whatWeMeasure.hydrationCost": "하이드레이션 비용",
	"whatWeMeasure.duringSsrTranslationDataIs": "SSR 중에 번역 데이터는 HTML로 직렬화됩니다. 대형 사전은 HTML 페이로드를 증가시키고 하이드레이션(페이지가 인터랙티브해지는 순간)을 늦춥니다.",
	"whatWeMeasure.lazyLoadingEffectiveness": "지연 로딩 효과",
	"whatWeMeasure.whetherSplittingTranslationsByRoute": "번역을 경로 또는 네임스페이스별로 분할하는 것이 실제로 초기 로드를 줄이는지, 그리고 어떤 트레이드오프(워터폴 요청, FOUC, 캐시 복잡성)가 발생하는지 측정합니다.",
	"whatWeMeasure.localeSwitchSpeed": "로케일 전환 속도",
	"whatWeMeasure.howFastTheAppCan": "실행 중에 앱이 한 언어에서 다른 언어로 얼마나 빨리 전환할 수 있는지(새 번역 가져오기, 구성 요소 다시 렌더링, DOM 업데이트 포함) 측정합니다.",
	"whatWeMeasure.whatWeMeasure": "측정 항목"
};
var blog_default$3 = {
	"blogHeader.blog": "블로그",
	"blogHeader.insightsDeepDivesAnd": "i18n 벤치마킹 커뮤니티의 통찰력, 심층 분석 및 업데이트.",
	"blogList.i18nBenchmark2026Results": "i18n 벤치마크 2026 결과",
	"blogList.march152026": "2026년 3월 15일",
	"blogList.weTested12DifferentInternationalization": "우리는 10개 페이지에 걸쳐 12가지 서로 다른 국제화 라이브러리를 테스트했습니다. 대화형 차트가 포함된 자세한 결과는 다음과 같습니다.",
	"blogList.howToReduceYourI18n": "i18n 번들을 60% 줄이는 방법",
	"blogList.march82026": "2026년 3월 8일",
	"blogList.practicalStrategiesForOptimizingTranslation": "번역 파일 로딩 최적화, 사용하지 않는 로케일의 트리 쉐이킹, 빌드 타임 컴파일 활용을 포함한 번역 번들 최적화를 위한 실질적인 전략.",
	"blogList.theStateOfInternationalizationIn": "2026년 React 국제화의 현주소",
	"blogList.february282026": "2026년 2월 28일",
	"blogList.anOverviewOfTheCurrent": "메시지 카탈로그에서 컴파일러 기반 솔루션에 이르기까지 현재의 접근 방식을 비교한 i18n 생태계 개요.",
	"blogList.migratingFromReactI18nextTo": "react-i18next에서 Lingui로 마이그레이션",
	"blogList.february152026": "2026년 2월 15일",
	"blogList.aStepByStepGuide": "50,000개의 번역 키가 있는 프로덕션 앱을 react-i18next에서 Lingui로 마이그레이션하기 위한 단계별 가이드.",
	"blogList.serverComponentsAndI18nWhat": "서버 컴포넌트와 i18n: 무엇이 변하는가?",
	"blogList.february12026": "2026年 2월 1일",
	"blogList.reactServerComponentsIntroduceNew": "React 서버 구성 요소는 국제화를 위한 새로운 패턴을 도입합니다. 그 영향과 모범 사례를 살펴봅니다.",
	"blogList.benchmarkMethodologyHowWeTest": "벤치마크 방법론: 테스트 방법",
	"blogList.january202026": "2026년 1월 20일",
	"blogList.aTransparentLookAtOur": "테스트 환경, 통계적 방법 및 재현성을 포함한 벤치마크 방법론에 대한 투명한 공개.",
	"blogList.readMore": "더 읽어보기 →"
};
var careers_default$3 = {
	"careersHeader.careers": "채용",
	"careersHeader.joinOurMissionToMake": "전 세계 모든 사람을 위해 웹을 더 빠르고 접근하기 쉽게 만들려는 우리의 미션에 동참하세요.",
	"careersBenefits.whyJoinUs": "왜 합류해야 하나요?",
	"careersBenefits.remoteFirst": "리모트 퍼스트",
	"careersBenefits.workFromAnywhereFully": "어디서나 일하세요. 6개 시간대에 걸쳐 있는 완전 분산형 팀입니다.",
	"careersBenefits.openSource": "오픈 소스",
	"careersBenefits.allOurWorkIs": "우리의 모든 작업은 오픈 소스입니다. 영향력을 미치는 동시에 공개 포트폴리오를 만드세요.",
	"careersBenefits.impactful": "영향력 있는",
	"careersBenefits.yourWorkDirectlyHelps": "여러분의 작업은 개발자가 더 나은, 더 빠른 국제화 앱을 구축하는 데 직접적인 도움이 됩니다.",
	"openPositions.openPositions": "채용 중인 직책",
	"openPositions.seniorPerformanceEngineer": "시니어 성능 엔지니어",
	"openPositions.fullTime": "정규직",
	"openPositions.remote": "원격",
	"openPositions.leadBenchmarkDesignAnd": "벤치마크 설계 및 구현을 주도합니다. V8 내부 구조, 브라우저 성능 API 및 통계 분석에 대한 깊은 지식이 필요합니다.",
	"openPositions.technicalWriter": "테크니컬 라이터",
	"openPositions.partTime": "파트타임",
	"openPositions.createAndMaintainDocumentation": "i18n 성능 베스트 프랙티스에 관한 문서, 블로그 게시물 및 교육 콘텐츠를 작성하고 유지 관리합니다.",
	"openPositions.frontendDeveloper": "프론트엔드 개발자",
	"openPositions.buildAndMaintainThe": "벤치마크 대시보드, 비교 도구 및 대화형 시각화를 구축하고 유지 관리합니다.",
	"openPositions.devOpsEngineer": "DevOps 엔지니어",
	"openPositions.designAndMaintainThe": "라이브러리가 업데이트될 때마다 벤치마크를 자동으로 실행하는 CI/CD 파이프라인을 설계하고 유지 관리합니다.",
	"openPositions.applyNow": "지금 지원하기"
};
var contact_default$3 = {
	"contactHeader.contactUs": "문의처",
	"contactHeader.haveQuestionsOrWantTo": "궁금한 점이 있거나 기여하고 싶으신가요? 여러분의 의견을 기다립니다.",
	"contactForm.name": "이름",
	"contactForm.email": "이메일",
	"contactForm.subject": "제목",
	"contactForm.message": "메시지",
	"contactForm.sendMessage": "메시지 보내기",
	"contactForm.wellGetBackTo": "48시간 이내에 답변해 드리겠습니다."
};
var faq_default$3 = {
	"faqHeader.frequentlyAskedQuestions": "자주 묻는 질문",
	"faqHeader.everythingYouNeedTo": "i18n Benchmark 프로젝트에 대해 알아야 할 모든 것.",
	"faqList.howAreTheBenchmarks": "벤치마크는 어떻게 실행되나요?",
	"faqList.allBenchmarksAreRun": "모든 벤치마크는 일관된 하드웨어 설정(M2 MacBook Pro)에서 시뮬레이션된 4G 네트워크 조건으로 Playwright를 사용하여 실행됩니다. 각 테스트는 50번 반복되며 중앙값, P95 및 P99 값을 보고합니다.",
	"faqList.whatLibrariesAreCurrently": "현재 어떤 라이브러리가 테스트되고 있나요?",
	"faqList.weCurrentlyBenchmarkReactI18next": "현재 react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl 및 Paraglide를 벤치마킹하고 있습니다. 커뮤니티의 요청에 따라 더 많은 라이브러리를 추가할 계획입니다.",
	"faqList.canIContributeA": "새로운 라이브러리 통합을 제안할 수 있나요?",
	"faqList.absolutelyWeWelcomeCommunity": "물론입니다! 커뮤니티의 기여를 환영합니다. 저장소를 포크하고 템플릿에 따라 라이브러리 통합을 추가한 후 풀 리퀘스트를 제출하세요.",
	"faqList.howOftenAreResults": "결과는 얼마나 자주 업데이트되나요?",
	"faqList.benchmarksRunAutomaticallyVia": "벤치마크는 모든 종속성 업데이트 시 CI를 통해 자동으로 실행되며 메인 브랜치에서 매주 실행됩니다. 결과는 24시간 이내에 대시보드에 게시됩니다.",
	"faqList.areTheResultsStatistically": "결과가 통계적으로 유의미한가요?",
	"faqList.yesWeUseThe": "네. 0.05 유의 수준에서 Mann-Whitney U 검정을 사용하여 분포를 비교합니다. 또한 신뢰 구간과 효과 크기를 보고합니다."
};
var pricing_default$3 = {
	"pricingHeader.pricing": "가격",
	"pricingHeader.transparentPricingForEvery": "i18n 여정의 모든 단계에 적합한 투명한 요금제.",
	"pricingTiers.freeTier": "무료 티어",
	"pricingTiers.free": "무료",
	"pricingTiers.publicBenchmarkDashboard": "공개 벤치마크 대시보드",
	"pricingTiers.basicLibraryComparisons": "기본 라이브러리 비교",
	"pricingTiers.communityForumAccess": "커뮤니티 포럼 액세스",
	"pricingTiers.monthlyResultDigest": "월간 결과 요약",
	"pricingTiers.getStarted": "시작하기",
	"pricingTiers.proTier": "프로 티어",
	"pricingTiers.perMonth": "/월",
	"pricingTiers.allFreeFeatures": "모든 무료 기능 포함",
	"pricingTiers.customBenchmarkConfigurations": "맞춤형 벤치마크 구성",
	"pricingTiers.privateResultsDashboard": "비공개 결과 대시보드",
	"pricingTiers.apiAccess1000Requests": "API 액세스(일일 1,000건)",
	"pricingTiers.slackIntegration": "Slack 연동",
	"pricingTiers.subscribeToPro": "프로 구독",
	"pricingTiers.enterpriseTier": "엔터프라이즈 티어",
	"pricingTiers.custom": "커스텀",
	"pricingTiers.allProFeatures": "모든 프로 기능 포함",
	"pricingTiers.dedicatedBenchmarkInfrastructure": "전용 벤치마크 인프라",
	"pricingTiers.customLibraryIntegrations": "맞춤형 라이브러리 통합",
	"pricingTiers.slaGuarantees": "SLA 보장",
	"pricingTiers.prioritySupport": "우선 지원",
	"pricingTiers.contactSales": "영업팀 문의"
};
var products_default$3 = {
	"productsHeader.products": "제품",
	"productsHeader.toolsAndServicesTo": "국제화 전략을 최적화하는 데 도움이 되는 도구와 서비스.",
	"productsGrid.benchmarkDashboard": "벤치마크 대시보드",
	"productsGrid.interactiveChartsAndTables": "번들 크기, 렌더링 시간, 하이드레이션 비용에 따라 i18n 라이브러리를 비교하는 대화형 차트와 표.",
	"productsGrid.bundleAnalyzer": "번들 분석기",
	"productsGrid.uploadYourBuildOutput": "빌드 결과물을 업로드하고 번들 중 i18n 오버헤드가 얼마나 되는지 자세한 분석을 받아보세요.",
	"productsGrid.migrationAssistant": "마이그레이션 도우미",
	"productsGrid.automatedCodemodsAndGuides": "최소한의 중단으로 i18n 라이브러리 간의 마이그레이션을 돕는 자동 코드 수정 도구와 가이드.",
	"productsGrid.performanceMonitor": "성능 모니터",
	"productsGrid.continuousPerformanceTrackingFor": "i18n 구현의 지속적인 성능 추적. 번역 로딩 속도가 느려지면 알림을 받으세요.",
	"productsGrid.learnMore": "더 알아보기"
};
var settings_default$3 = {
	"settingsHeader.settings": "설정",
	"settingsHeader.manageYourAccountPreferences": "계정 기본 설정 및 구성을 관리합니다.",
	"profileSection.profile": "프로필",
	"profileSection.displayName": "표시 이름",
	"profileSection.email": "이메일",
	"preferencesSection.preferences": "기본 설정",
	"preferencesSection.emailNotifications": "이메일 알림",
	"preferencesSection.receiveWeeklyBenchmarkReports": "주간 벤치마크 보고서 받기",
	"preferencesSection.darkMode": "다크 모드",
	"preferencesSection.useDarkColorScheme": "어두운 색상 체계 사용",
	"preferencesSection.defaultLanguage": "기본 언어",
	"apiAccessSection.apiAccess": "API 액세스",
	"apiAccessSection.apiKey": "API 키",
	"apiAccessSection.useThisKeyTo": "이 키를 사용하여 프로그래밍 방식으로 벤치마킹 API에 액세스하십시오.",
	"apiAccessSection.copy": "복사",
	"settingsFooter.cancel": "취소",
	"settingsFooter.saveChanges": "변경 사항 저장"
};
var team_default$3 = {
	"teamHeader.ourTeam": "우리 팀",
	"teamHeader.meetThePeopleBehindI18n": "i18n Benchmark를 만드는 사람들을 만나보세요. 훌륭한 개발자 도구에 대한 열정으로 뭉친 다양한 팀입니다.",
	"teamGrid.sarahChen": "Sarah Chen",
	"teamGrid.founderLeadEngineer": "창립자 및 리드 엔지니어",
	"teamGrid.formerGoogleEngineerWith10": "전 Google 엔지니어로 대규모 국제화 시스템 구축에 10년의 경험이 있습니다.",
	"teamGrid.marcusWeber": "Marcus Weber",
	"teamGrid.performanceEngineer": "성능 엔지니어",
	"teamGrid.specializesInJavascriptPerformanceOptimization": "JavaScript 성능 최적화 및 벤치마킹 방법론을 전문으로 합니다. 이전 Vercel 근무.",
	"teamGrid.aishaPatel": "Aisha Patel",
	"teamGrid.developerAdvocate": "개발자 에반젤리스트",
	"teamGrid.passionateAboutDeveloperExperienceAnd": "개발자 경험과 교육에 열정적입니다. React Conf, JSConf 및 i18nNext 강연자.",
	"teamGrid.tomasRodriguez": "Tomás Rodríguez",
	"teamGrid.fullStackDeveloper": "풀스택 개발자",
	"teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "벤치마킹 인프라 및 CI/CD 파이프라인 유지 관리. Lingui 오픈 소스 기여자.",
	"teamGrid.yukiTanaka": "Yuki Tanaka",
	"teamGrid.dataAnalyst": "데이터 분석가",
	"teamGrid.ensuresStatisticalRigorInAll": "모든 벤치마크 결과의 통계적 엄격함을 보장합니다. MIT 응용통계학 박사.",
	"teamGrid.elenaKowalski": "Elena Kowalski",
	"teamGrid.communityManager": "커뮤니티 매니저",
	"teamGrid.managesCommunityContributionsPartnershipsAnd": "커뮤니티 기여, 파트너십 및 이벤트를 관리합니다. 오픈 소스 거버넌스 배경 보유。"
};
var route_default$2 = {
	oopsPageNotFound: "Oops! Page not found.",
	returnToHome: "Return to Home",
	"route.couldNotMeasureHydrationDuration": "Não foi possível medir a duração da hidratação:",
	"route.oopsPageNotFound": "Ops! Página não encontrada",
	"route.returnToHome": "Voltar para o Início"
};
var header_default$2 = {
	home: "Início",
	methodology: "Metodologia",
	mockPages: "Páginas de teste",
	products: "Produtos",
	pricing: "Preços",
	team: "Equipe",
	blog: "Blog",
	careers: "Carreiras",
	faq: "FAQ",
	contact: "Contato",
	settings: "Configurações",
	goToGithub: "Ir para GitHub"
};
var footer_default$2 = {
	resources: "Recursos",
	contact: "Contato",
	github: "GitHub",
	methodology: "Metodologia",
	contributing: "Contribuir",
	builtWith: "i18n Benchmark — Projeto de código aberto. Construído com React, Vite e TanStack Router.",
	anOpenSourceTestApplication: "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo."
};
var themeToggle_default$2 = {
	themeModeAutoSystemClick: "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
	themeModeLightClick: "Modo de tema: claro. Clique para mudar para o modo escuro.",
	themeModeDarkClick: "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).",
	themeAuto: "Tema: Auto",
	themeDark: "Tema: Escuro",
	themeLight: "Tema: Claro"
};
var hero_default$2 = {
	aTestApplicationDesignedTo: "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.",
	viewResults: "Ver Resultados"
};
var whyItMatters_default$2 = {
	whyTheseMetricsMatter: "Por que essas métricas são importantes",
	bundleSize: "Tamanho do Bundle",
	theBundleIsTheData: "O bundle representa os dados enviados a cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código de tempo de execução, além dos próprios arquivos de tradução mesmos.",
	renderingHydration: "Renderização e Hidratação",
	connectingALargeJson: "Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode desencadear novas renderizações em toda a árvore. Durante a hidratação do SSR, a análise e a anexação de objetos de tradução massivos adicionam latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).",
	dynamicLoading: "Carregamento Dinâmico",
	loadingAllTranslationsUpfront: "Carregar todas as traduções antecipadamente sobrecarrega a carga útil inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento preguiçoso introduz suas próprias compensações: solicitações em cascada, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial."
};
var understandingImpact_default$2 = {
	cacheInvalidation: "Invalidação da cache:",
	contextBasedArchitecturesCan: "Context-based architectures can cause the entire app to re-render when the language changes. For large apps with thousands of components, this can lead to noticeable lag during locale switches.",
	contextBasedArchitecturesCanCause: "As arquiteturas baseadas no contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que as suas chaves específicas não tenham mudado.",
	duringServerSideRenderingThe: "Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil de HTML, aumentando o tamanho do documento que deve ser descarregado e hidratado.",
	flashOfUntranslatedContent: "Flash of Untranslated Content (FOUC)",
	flashOfUntranslatedContentFouc: "Flash de conteúdo não traduzido (FOUC):",
	manyI18nLibrariesStore: "Many i18n libraries store translations in large JSON files that are loaded upfront. This can significantly increase the \"Time to Interactive\" as the browser must download and parse these files before the app can be used.",
	manyI18nLibrariesStoreTranslations: "Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido através do contexto de React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isto significa:",
	splittingTranslationsIntoPerRoute: "Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas introduz novos desafios:",
	theAppMustFirstLoad: "The app must first load the core library (e.g., i18next) which adds to the initial bundle size. Even \"lightweight\" libraries can add 10-20KB of minified JS.",
	theJsonMustBeParsed: "O JSON deve ser analisado em cada carga de página — bloqueando a thread principal.",
	theTradeOffsOfDynamic: "As compensações do carregamento dinâmico",
	thisTestAppProvidesA: "Esta aplicação de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu pacote de JavaScript, o tempo gasto a analisar e renderizar conteúdo traduzido e a eficácia das suas estratégias de divisão de código e de carregamento preguiçoso. Cada biblioteca é integrada na mesma aplicação para que os resultados sejam diretamente comparáveis.",
	understandingTheImpact: "Entendendo o impacto",
	updatingTranslationsRequiresCache: "Updating translations often requires a full rebuild or clearing the CDN cache, which can delay the roll-out of critical copy changes.",
	usersMayBrieflySeeTranslation: "Users may briefly see translation keys or English text while the library and translation files are being loaded.",
	waterfallRequests: "Pedidos em cascata:",
	whatThisBenchmarkMeasures: "O que este benchmark mede",
	whyASingleLargeJson: "Por que um único JSON grande pode prejudicar o desempenho"
};
var resultsTable_default$2 = {
	bundleSize: "Tamanho do bundle",
	lazyLoading: "Carregamento lento",
	library: "Library",
	lookupTime: "Tempo de consulta",
	sampleResults: "Resultados de amostra"
};
var aboutHeader_default$2 = {
	aboutThisBenchmark: "About This Benchmark",
	methodology: "Metodologia",
	thisIsAnOpenSource: "This is an open-source test application for measuring the real-world impact of internationalization libraries.",
	weDesignedThisBenchmarkTo: "Projetamos este benchmark para fornecer comparações justas, reproduzíveis e significativas das bibliotecas de i18n."
};
var aboutGrid_default$2 = {
	allBenchmarksRunOn: "Todos os benchmarks são executados no mesmo hardware (M2 MacBook Pro, 16 GB de RAM), no mesmo navegador (Chromium 120 via Playwright) e nas mesmas condições de rede (4G simulado). Cada teste é repetido 50 vezes e reportamos a mediana com percentis P95/P99.",
	applicationDesign: "Design do Aplicativo",
	choosingAnI18nLibrary: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
	eachI18nLibraryIsIntegrated: "Cada biblioteca i18n é integrada seguindo sua documentação oficial e as melhores práticas. Consultamos os mantenedores quando possível para garantir a configuração ideal. O mesmo aplicativo React, a mesma configuração Vite, o mesmo deploy.",
	fairComparison: "Comparação Justa",
	measurementMethodology: "Metodologia de Medição",
	methodology: "Methodology",
	testEnvironment: "Ambiente de Teste",
	theBenchmarkAppHas10: "O aplicativo de benchmark tem 10 páginas com conteúdo realista — navegação, formulários, listas dinâmicas e texto estático. Cada página usa de 15 a 30 chaves de tradução para representar padrões de uso do mundo real.",
	theSame10PageApp: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.",
	weUseBrowserNativeApis: "Usamos APIs nativas do navegador (Performance Timeline, Resource Timing, Layout Instability) combinadas com dados do React Profiler. Os tamanhos dos bundles são medidos pós-gzip usando source-map-explorer para maior precisão.",
	whyThisExists: "Why This Exists"
};
var whatWeMeasure_default$2 = {
	bundleSizeImpact: "Impacto no tamanho do bundle",
	duringSsrTranslationDataIs: "Durante o SSR, os dados de tradução são serializados em HTML. Dicionários grandes aumentam a carga de HTML e desaceleram a hidratação — o momento em que a página se torna interativa.",
	duringSsrTranslationDataIsSerialized: "During SSR, translation data is serialized into the HTML. We measure the size of this payload and its effect on Time to Interactive (TTI).",
	howFastTheAppCan: "Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a re-renderização de componentes e a atualização do DOM.",
	howFastTheAppCanSwitchFromOne: "How fast the app can switch from one language to another. We measure the re-render time and any network delays for lazy-loaded locales.",
	howMuchExtraTimeThe: "Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React — medido usando o actualDuration do React Profiler.",
	howMuchExtraTimeTheLibraryAdds: "How much extra time the library adds to the initial page load. This includes script execution and the time to fetch/parse translation data.",
	hydrationCost: "Custo de hidratação",
	lazyLoadingEffectiveness: "Eficácia do carregamento lento",
	localeSwitchSpeed: "Velocidade de troca de idioma",
	renderingOverhead: "Sobrecarga de renderização",
	theAdditionalJavascriptBytes: "The additional Javascript bytes that the library adds to your production build. We measure both the library itself and its mandatory dependencies.",
	theAdditionalJavascriptBytesSent: "Os bytes extras de JavaScript enviados aos usuários quando a biblioteca de i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.",
	whatWeMeasure: "O que medimos",
	whetherSplittingTranslationsByRoute: "Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais compensações ela introduz (solicitações em cascada, FOUC, complexidade de cache)."
};
var blogHeader_default$2 = {
	blog: "Blog",
	insightsDeepDivesAnd: "Insights, análises aprofundadas e atualizações da comunidade de benchmarking i18n.",
	insightsTutorialsAndAnalysis: "Insights, Tutorials, and Analysis"
};
var blogList_default$2 = {
	aStepByStepGuide: "Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.",
	aStepByStepGuideOnMigrating: "A step-by-step guide on migrating from legacy i18n solutions to modern, high-performance libraries.",
	aTransparentLookAtOur: "Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.",
	aTransparentLookAtOurBenchmarking: "A transparent look at our benchmarking process, from hardware specs to measurement techniques.",
	anOverviewOfTheCurrent: "Uma visão geral do ecossistema i18n atual, comparando abordagens de catálogos de mensagens a soluções baseadas em compiladores.",
	anOverviewOfTheCurrentI18n: "An overview of the current i18n landscape and how different libraries stack up in 2026.",
	analysis: "Analysis",
	benchmark: "Benchmark",
	benchmarkMethodologyHowWe: "Benchmark Methodology: How We Test",
	benchmarkMethodologyHowWeTest: "Metodologia de Benchmark: como testamos",
	comparingI18nLibrariesIn: "Comparing i18n Libraries in 2026: A Deep Dive",
	february12026: "1 de fevereiro de 2026",
	february152026: "15 de fevereiro de 2026",
	february282026: "28 de fevereiro de 2026",
	howToReduceYourI18n: "Como reduzir seu bundle i18n em 60%",
	i18nBenchmark2026Results: "Resultados do i18n Benchmark 2026",
	january202026: "20 de janeiro de 2026",
	march152026: "15 de março de 2026",
	march82026: "8 de março de 2026",
	meta: "Meta",
	migratingFromReactI18nextTo: "Migrando do react-i18next para o Lingui",
	practicalStrategiesForOptimizingTranslation: "Estratégias práticas para otimizar bundles de tradução, incluindo lazy loading, divisão de código e otimizações em tempo de compilação.",
	reactServerComponentsIntroduceNew: "Os React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.",
	readMore: "Leia mais →",
	serverComponentsAndI18nWhat: "Server Components e i18n: o que muda?",
	theStateOfInternationalizationIn: "O estado da internacionalização em 2026",
	tutorial: "Tutorial",
	weTested12DifferentInternationalization: "Testamos 12 bibliotecas de internacionalização diferentes em 10 páginas. Aqui estão os resultados detalhados com gráficos interativos."
};
var careersHeader_default$2 = {
	careers: "Carreiras",
	joinOurMission: "Join our mission to make internationalization fast, easy, and performant for everyone.",
	joinOurMissionToMake: "Junte-se à nossa missão de tornar a web mais rápida e acessível para todos, em todos os lugares."
};
var careersBenefits_default$2 = {
	allOurWorkIs: "Todo o nosso trabalho é open source. Construa seu portfólio público enquanto causa impacto.",
	competitivePay: "Competitive pay",
	impactful: "Impactante",
	openSource: "Open Source",
	openSourceTime: "Open source time",
	percentTimeForOss: "20% time for OSS contributions",
	remoteFirst: "Remoto primeiro",
	topOfMarketCompensation: "Top-of-market compensation",
	whyJoinUs: "Por que se juntar a nós?",
	workFromAnywhere: "Work from anywhere in the world",
	workFromAnywhereFully: "Trabalhe de qualquer lugar. Equipe totalmente distribuída em 6 fusos horários.",
	yourWorkDirectlyHelps: "Seu trabalho ajuda diretamente os desenvolvedores a criar aplicativos internacionalizados melhores e mais rápidos."
};
var openPositions_default$2 = {
	applyNow: "Apply Now",
	backendEngineer: "Backend Engineer",
	buildAndMaintainOur: "Build and maintain our benchmarking suite and core application infrastructure.",
	buildAndMaintainThe: "Construir e manter o dashboard de benchmark, ferramentas de comparação e visualizações interativas.",
	community: "Community",
	createAndMaintainDocumentation: "Criar e manter documentação, postagens em blogs e conteúdo educacional sobre as melhores práticas de desempenho de i18n.",
	createComprehensiveGuidesApi: "Create comprehensive guides, API references, and tutorials for the community.",
	designAndMaintainThe: "Projetar e manter o pipeline de CI/CD que executa benchmarks automaticamente a cada atualização de biblioteca.",
	designAndScaleOur: "Design and scale our data ingestion pipelines and statistical analysis engines.",
	devOpsEngineer: "Engenheiro DevOps",
	devrelEngineer: "DevRel Engineer",
	documentation: "Documentation",
	engageWithTheI18n: "Engage with the i18n community, write blog posts, and speak at conferences.",
	engineering: "Engineering",
	ensureTheAccuracyAnd: "Ensure the accuracy and reliability of our benchmarks through rigorous testing.",
	frontendDeveloper: "Desenvolvedor Frontend",
	fullTime: "Full-time",
	leadBenchmarkDesignAnd: "Liderar o design e a implementação de benchmarks. É necessário conhecimento profundo dos componentes internos da V8, das APIs de desempenho do navegador e de análise estatística.",
	openPositions: "Open Positions",
	partTime: "Part-time",
	qaEngineer: "QA Engineer",
	remote: "Remote",
	seniorFrontendEngineer: "Senior Frontend Engineer",
	seniorPerformanceEngineer: "Engenheiro de Performance Sênior",
	sfRemote: "San Francisco / Remote",
	technicalWriter: "Technical Writer"
};
var contactHeader_default$2 = {
	contactUs: "Contate-nos",
	getInTouch: "Entre em contato",
	haveIdeasFoundABug: "Tem ideias? Encontrou um bug? Gostariamos muito de ouvir voce.",
	haveQuestionsOrWantTo: "Tem dúvidas ou quer contribuir? Gostaríamos muito de ouvir você."
};
var contactForm_default$2 = {
	bugReport: "Relatorio de bug",
	contribution: "Contribution",
	email: "E-mail",
	emailPlaceholder: "you@example.com",
	message: "Mensagem",
	messagePlaceholder: "Sua mensagem...",
	methodologyQuestion: "Methodology Question",
	name: "Nome",
	newBenchmarkIdea: "New Benchmark Idea",
	other: "Other",
	sendMessage: "Enviar Mensagem",
	subject: "Assunto",
	topic: "Topico",
	wellGetBackTo: "Retornaremos em até 48 horas.",
	yourName: "Seu nome"
};
var faqHeader_default$2 = {
	everythingYouNeedToKnow: "Tudo o que voce precisa saber sobre o i18n Benchmark.",
	frequentlyAskedQuestions: "Perguntas frequentes"
};
var faqList_default$2 = {
	absolutelyWeWelcomeCommunity: "Com certeza! Aceitamos contribuições da comunidade. Faça um fork do repositório, adicione a integração da sua biblioteca seguindo o nosso modelo e envie um pull request.",
	allBenchmarksAreRun: "Todos os benchmarks são executados usando o Playwright em uma configuração de hardware consistente (M2 MacBook Pro) com condições de rede 4G simuladas. Cada teste executa 50 iterações e relatamos a mediana, e os valores P95 e P99.",
	areTheResultsStatistically: "Os resultados são estatisticamente significativos?",
	benchmarksRunAutomaticallyVia: "Os benchmarks são executados automaticamente via CI a cada atualização de dependência e semanalmente no branch main. Os resultados são publicados no dashboard em até 24 horas.",
	canIContributeA: "Posso contribuir com uma nova integração de biblioteca?",
	canISubmitMyOwnBenchmarks: "Posso enviar meus proprios benchmarks?",
	doYouOfferConsultingServices: "Voces oferecem servicos de consultoria?",
	howAreBenchmarksConducted: "Como os benchmarks sao conduzidos?",
	howAreTheBenchmarks: "Como os benchmarks são executados?",
	howCanIContribute: "Como posso contribuir?",
	howOftenAreBenchmarksUpdated: "Com que frequencia os benchmarks sao atualizados?",
	howOftenAreResults: "Com que frequência os resultados são atualizados?",
	i18nBenchmarkIsAnOpenSource: "i18n Benchmark is an open-source project dedicated to measuring the real-world performance impact of internationalization libraries.",
	isTheDataReliable: "Os dados sao confiaveis?",
	thereAreManyWaysToContribute: "There are many ways to contribute, from submitting new benchmarks to improving our methodology documentation.",
	weCurrentlyBenchmarkReactI18next: "Atualmente testamos react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl e Paraglide. Planejamos adicionar mais com base nas solicitações da comunidade.",
	weFollowRigorousStatisticalMethodologyIncluding: "We follow rigorous statistical methodology, including outlier detection and multiple test runs to ensure accuracy.",
	weReRunAllBenchmarksWeekly: "We re-run all benchmarks weekly against the latest versions of each library.",
	weRunStandardizedTestsInIsolated: "We run standardized tests in isolated environments, measuring bundle size, render time, and memory usage across dozens of libraries.",
	weSupportReactI18nextReactIntl: "We support react-i18next, react-intl, Lingui, Tolgee, and several other popular React i18n solutions.",
	whatIsI18nBenchmark: "O que e o i18n Benchmark?",
	whatLibrariesAreCurrently: "Quais bibliotecas são testadas atualmente?",
	whichLibrariesAreCurrentlySupported: "Quais bibliotecas sao atualmente suportadas?",
	yesCommunityBenchmarkSubmissionsAre: "Yes! Community benchmark submissions are encouraged and reviewed by our core team.",
	yesOurEnterprisePlanIncludesConsulting: "Yes, our Enterprise plan includes consulting services for optimizing your app's i18n performance.",
	yesWeUseThe: "Sim. Usamos o teste U de Mann-Whitney com um nível de significância de 0,05 para comparar distribuições. Também relatamos intervalos de confiança e tamanhos de efeito."
};
var pricingHeader_default$2 = {
	pricing: "Preços",
	transparentPricingForEvery: "Preços transparentes para cada etapa da sua jornada i18n."
};
var pricingTiers_default$2 = {
	freeTier: "Nível Gratuito",
	free: "Grátis",
	publicBenchmarkDashboard: "Dashboard público de benchmark",
	basicLibraryComparisons: "Comparações básicas de bibliotecas",
	communityForumAccess: "Acesso ao fórum da comunidade",
	monthlyResultDigest: "Resumo mensal dos resultados",
	getStarted: "Começar",
	proTier: "Nível Pro",
	perMonth: "/mês",
	allFreeFeatures: "Todas as funcionalidades gratuitas",
	customBenchmarkConfigurations: "Configurações de benchmark personalizadas",
	privateResultsDashboard: "Dashboard de resultados privado",
	apiAccess1000Requests: "Acesso à API (1.000 requisições/dia)",
	slackIntegration: "Integração com Slack",
	subscribeToPro: "Assinar Pro",
	enterpriseTier: "Nível Enterprise",
	custom: "Personalizado",
	allProFeatures: "Todas as funcionalidades Pro",
	dedicatedBenchmarkInfrastructure: "Infraestrutura de benchmark dedicada",
	customLibraryIntegrations: "Integrações de bibliotecas personalizadas",
	slaGuarantees: "Garantias de SLA",
	prioritySupport: "Suporte prioritário",
	contactSales: "Contatar Vendas"
};
var productsHeader_default$2 = {
	products: "Produtos",
	toolsAndServicesTo: "Ferramentas e serviços para ajudá-lo a otimizar sua estratégia de internacionalização."
};
var productsGrid_default$2 = {
	benchmarkDashboard: "Dashboard de Benchmark",
	interactiveChartsAndTables: "Gráficos e tabelas interativos comparando bibliotecas i18n em tamanho de bundle, tempo de renderização e custo de hidratação.",
	bundleAnalyzer: "Analisador de Bundle",
	uploadYourBuildOutput: "Faça o upload da sua saída de build e obtenha um detalhamento de quanto do seu bundle é overhead de i18n.",
	migrationAssistant: "Assistente de Migração",
	automatedCodemodsAndGuides: "Codemods e guias automatizados para migração entre bibliotecas i18n com o mínimo de interrupção.",
	performanceMonitor: "Monitor de Performance",
	continuousPerformanceTrackingFor: "Acompanhamento contínuo de desempenho para sua implementação de i18n. Receba alertas quando o carregamento das traduções piorar.",
	learnMore: "Saiba Mais"
};
var settingsHeader_default$2 = {
	manageYourAccount: "Manage your account settings and preferences.",
	manageYourAccountPreferences: "Gerencie as suas preferências e configuração da conta.",
	settings: "Configurações"
};
var profileSection_default$2 = {
	profile: "Perfil",
	displayName: "Nome de exibição",
	email: "E-Mail"
};
var preferencesSection_default$2 = {
	arabicAr: "Arabic (ar)",
	chineseSimplifiedZhCn: "Chinese (Simplified, zh-CN)",
	darkMode: "Modo Escuro",
	defaultLanguage: "Idioma Padrão",
	emailNotifications: "Notificações por e-mail",
	englishEn: "English (en)",
	frenchFr: "French (fr)",
	germanDe: "German (de)",
	japaneseJa: "Japanese (ja)",
	preferences: "Preferências",
	receiveWeeklyBenchmark: "Receive weekly benchmark reports",
	receiveWeeklyBenchmarkReports: "Receber relatórios semanais de benchmarks",
	spanishEs: "Spanish (es)",
	toggleDarkMode: "Toggle dark mode",
	toggleNotifications: "Toggle Notifications",
	useDarkColorScheme: "Usar esquema de cores escuras"
};
var apiAccessSection_default$2 = {
	apiAccess: "Acesso à API",
	apiKey: "Chave da API",
	useThisKeyTo: "Utilize esta chave para aceder à API de benchmarking de forma programática.",
	copy: "Copiar"
};
var settingsFooter_default$2 = {
	cancel: "Cancelar",
	saveChanges: "Guardar alterações"
};
var teamHeader_default$2 = {
	ourTeam: "Nossa Equipe",
	meetThePeopleBehindI18n: "Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor."
};
var teamGrid_default$2 = {
	aishaPatel: "Aisha Patel",
	communityManager: "Community Manager",
	dataAnalyst: "Data Analyst",
	developerAdvocate: "Developer Advocate",
	elenaKowalski: "Elena Kowalski",
	ensuresStatisticalRigorIn: "Ensures statistical rigor in our data collection and analysis.",
	ensuresStatisticalRigorInAll: "Garante o rigor estatístico em todos os resultados de benchmark. Doutorado em Estatística Aplicada pelo MIT.",
	formerGoogleEngineerWith: "Former Google engineer with a passion for web performance and open source.",
	formerGoogleEngineerWith10: "Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.",
	founderLeadEngineer: "Founder & Lead Engineer",
	fullStackDeveloper: "Full-Stack Developer",
	maintainsTheBenchmarkingInfrastructure: "Maintains the benchmarking infrastructure and CI/CD pipelines.",
	maintainsTheBenchmarkingInfrastructureAnd: "Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Colaborador de código aberto do Lingui.",
	managesCommunityContributions: "Manages community contributions and open source outreach.",
	managesCommunityContributionsPartnershipsAnd: "Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto.",
	marcusWeber: "Marcus Weber",
	passionateAboutDeveloperExperience: "Passionate about developer experience and building intuitive APIs.",
	passionateAboutDeveloperExperienceAnd: "Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.",
	performanceEngineer: "Performance Engineer",
	sarahChen: "Sarah Chen",
	specializesInJavascriptPerformance: "Specializes in JavaScript performance optimization and React internals.",
	specializesInJavascriptPerformanceOptimization: "Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.",
	tomasRodriguez: "Tomás Rodríguez",
	yukiTanaka: "Yuki Tanaka"
};
var common_default$2 = {
	cancel: "Cancel",
	copy: "Copy",
	"footer.anOpenSourceTestApplication": "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo.",
	"footer.builtWith": "i18n Benchmark — Projeto de código aberto. Construído com React, Vite e TanStack Router.",
	"footer.contact": "Contato",
	"footer.contributing": "Contribuir",
	"footer.github": "GitHub",
	"footer.methodology": "Metodologia",
	"footer.resources": "Recursos",
	"header.blog": "Blog",
	"header.careers": "Carreiras",
	"header.contact": "Contato",
	"header.faq": "FAQ",
	"header.goToGithub": "Ir para GitHub",
	"header.home": "Início",
	"header.methodology": "Metodologia",
	"header.mockPages": "Páginas de teste",
	"header.pricing": "Preços",
	"header.products": "Produtos",
	"header.settings": "Configurações",
	"header.team": "Equipe",
	mockBanner: "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada com qualquer negócio ou serviço real.",
	readMore: "Read More",
	saveChanges: "Save Changes",
	"themeToggle.themeAuto": "Tema: Auto",
	"themeToggle.themeDark": "Tema: Escuro",
	"themeToggle.themeLight": "Tema: Claro",
	"themeToggle.themeModeAutoSystemClick": "Modo de tema: automático (sistema). Clique para mudar para o modo claro.",
	"themeToggle.themeModeDarkClick": "Modo de tema: escuro. Clique para mudar para o modo automático (sistema).",
	"themeToggle.themeModeLightClick": "Modo de tema: claro. Clique para mudar para o modo escuro."
};
var home_default$2 = {
	"hero.aTestApplicationDesignedTo": "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.",
	"hero.viewResults": "Ver Resultados",
	"whyItMatters.whyTheseMetricsMatter": "Por que essas métricas são importantes",
	"whyItMatters.bundleSize": "Tamanho do Bundle",
	"whyItMatters.theBundleIsTheData": "O bundle representa os dados enviados a cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código de tempo de execução, além dos próprios arquivos de tradução mesmos.",
	"whyItMatters.renderingHydration": "Renderização e Hidratação",
	"whyItMatters.connectingALargeJson": "Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode desencadear novas renderizações em toda a árvore. Durante a hidratação do SSR, a análise e a anexação de objetos de tradução massivos adicionam latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).",
	"whyItMatters.dynamicLoading": "Carregamento Dinâmico",
	"whyItMatters.loadingAllTranslationsUpfront": "Carregar todas as traduções antecipadamente sobrecarrega a carga útil inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento preguiçoso introduz suas próprias compensações: solicitações em cascada, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.",
	"understandingImpact.understandingTheImpact": "Entendendo o impacto",
	"understandingImpact.whyASingleLargeJson": "Por que um único JSON grande pode prejudicar o desempenho",
	"understandingImpact.manyI18nLibrariesStoreTranslations": "Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido através do contexto de React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isto significa:",
	"understandingImpact.theJsonMustBeParsed": "O JSON deve ser analisado em cada carga de página — bloqueando a thread principal.",
	"understandingImpact.contextBasedArchitecturesCanCause": "As arquiteturas baseadas no contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que as suas chaves específicas não tenham mudado.",
	"understandingImpact.duringServerSideRenderingThe": "Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil de HTML, aumentando o tamanho do documento que deve ser descarregado e hidratado.",
	"understandingImpact.theTradeOffsOfDynamic": "As compensações do carregamento dinâmico",
	"understandingImpact.splittingTranslationsIntoPerRoute": "Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas introduz novos desafios:",
	"understandingImpact.waterfallRequests": "Pedidos em cascata:",
	"understandingImpact.flashOfUntranslatedContentFouc": "Flash de conteúdo não traduzido (FOUC):",
	"understandingImpact.cacheInvalidation": "Invalidação da cache:",
	"understandingImpact.whatThisBenchmarkMeasures": "O que este benchmark mede",
	"understandingImpact.thisTestAppProvidesA": "Esta aplicação de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu pacote de JavaScript, o tempo gasto a analisar e renderizar conteúdo traduzido e a eficácia das suas estratégias de divisão de código e de carregamento preguiçoso. Cada biblioteca é integrada na mesma aplicação para que os resultados sejam diretamente comparáveis.",
	"resultsTable.sampleResults": "Resultados de amostra",
	"resultsTable.bundleSize": "Tamanho do bundle",
	"resultsTable.lookupTime": "Tempo de consulta",
	"resultsTable.lazyLoading": "Carregamento lento"
};
var about_default$2 = {
	"aboutHeader.methodology": "Metodologia",
	"aboutHeader.weDesignedThisBenchmarkTo": "Projetamos este benchmark para fornecer comparações justas, reproduzíveis e significativas das bibliotecas de i18n.",
	"aboutGrid.testEnvironment": "Ambiente de Teste",
	"aboutGrid.allBenchmarksRunOn": "Todos os benchmarks são executados no mesmo hardware (M2 MacBook Pro, 16 GB de RAM), no mesmo navegador (Chromium 120 via Playwright) e nas mesmas condições de rede (4G simulado). Cada teste é repetido 50 vezes e reportamos a mediana com percentis P95/P99.",
	"aboutGrid.applicationDesign": "Design do Aplicativo",
	"aboutGrid.theBenchmarkAppHas10": "O aplicativo de benchmark tem 10 páginas com conteúdo realista — navegação, formulários, listas dinâmicas e texto estático. Cada página usa de 15 a 30 chaves de tradução para representar padrões de uso do mundo real.",
	"aboutGrid.measurementMethodology": "Metodologia de Medição",
	"aboutGrid.weUseBrowserNativeApis": "Usamos APIs nativas do navegador (Performance Timeline, Resource Timing, Layout Instability) combinadas com dados do React Profiler. Os tamanhos dos bundles são medidos pós-gzip usando source-map-explorer para maior precisão.",
	"aboutGrid.fairComparison": "Comparação Justa",
	"aboutGrid.eachI18nLibraryIsIntegrated": "Cada biblioteca i18n é integrada seguindo sua documentação oficial e as melhores práticas. Consultamos os mantenedores quando possível para garantir a configuração ideal. O mesmo aplicativo React, a mesma configuração Vite, o mesmo deploy.",
	"whatWeMeasure.bundleSizeImpact": "Impacto no tamanho do bundle",
	"whatWeMeasure.theAdditionalJavascriptBytesSent": "Os bytes extras de JavaScript enviados aos usuários quando a biblioteca de i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.",
	"whatWeMeasure.renderingOverhead": "Sobrecarga de renderização",
	"whatWeMeasure.howMuchExtraTimeThe": "Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React — medido usando o actualDuration do React Profiler.",
	"whatWeMeasure.hydrationCost": "Custo de hidratação",
	"whatWeMeasure.duringSsrTranslationDataIs": "Durante o SSR, os dados de tradução são serializados em HTML. Dicionários grandes aumentam a carga de HTML e desaceleram a hidratação — o momento em que a página se torna interativa.",
	"whatWeMeasure.lazyLoadingEffectiveness": "Eficácia do carregamento lento",
	"whatWeMeasure.whetherSplittingTranslationsByRoute": "Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais compensações ela introduz (solicitações em cascada, FOUC, complexidade de cache).",
	"whatWeMeasure.localeSwitchSpeed": "Velocidade de troca de idioma",
	"whatWeMeasure.howFastTheAppCan": "Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a re-renderização de componentes e a atualização do DOM.",
	"whatWeMeasure.whatWeMeasure": "O que medimos"
};
var blog_default$2 = {
	"blogHeader.blog": "Blog",
	"blogHeader.insightsDeepDivesAnd": "Insights, análises aprofundadas e atualizações da comunidade de benchmarking i18n.",
	"blogList.i18nBenchmark2026Results": "Resultados do i18n Benchmark 2026",
	"blogList.march152026": "15 de março de 2026",
	"blogList.weTested12DifferentInternationalization": "Testamos 12 bibliotecas de internacionalização diferentes em 10 páginas. Aqui estão os resultados detalhados com gráficos interativos.",
	"blogList.howToReduceYourI18n": "Como reduzir seu bundle i18n em 60%",
	"blogList.march82026": "8 de março de 2026",
	"blogList.practicalStrategiesForOptimizingTranslation": "Estratégias práticas para otimizar bundles de tradução, incluindo lazy loading, divisão de código e otimizações em tempo de compilação.",
	"blogList.theStateOfInternationalizationIn": "O estado da internacionalização em 2026",
	"blogList.february282026": "28 de fevereiro de 2026",
	"blogList.anOverviewOfTheCurrent": "Uma visão geral do ecossistema i18n atual, comparando abordagens de catálogos de mensagens a soluções baseadas em compiladores.",
	"blogList.migratingFromReactI18nextTo": "Migrando do react-i18next para o Lingui",
	"blogList.february152026": "15 de fevereiro de 2026",
	"blogList.aStepByStepGuide": "Um guia passo a passo sobre a migração de um aplicativo de produção com 50.000 chaves de tradução do react-i18next para o Lingui.",
	"blogList.serverComponentsAndI18nWhat": "Server Components e i18n: o que muda?",
	"blogList.february12026": "1 de fevereiro de 2026",
	"blogList.reactServerComponentsIntroduceNew": "Os React Server Components introduzem novos padrões para internacionalização. Exploramos as implicações e as melhores práticas.",
	"blogList.benchmarkMethodologyHowWeTest": "Metodologia de Benchmark: como testamos",
	"blogList.january202026": "20 de janeiro de 2026",
	"blogList.aTransparentLookAtOur": "Um olhar transparente sobre nossa metodologia de benchmarking, incluindo ambientes de teste, métodos estatísticos e reprodutibilidade.",
	"blogList.readMore": "Leia mais →"
};
var careers_default$2 = {
	"careersHeader.careers": "Carreiras",
	"careersHeader.joinOurMissionToMake": "Junte-se à nossa missão de tornar a web mais rápida e acessível para todos, em todos os lugares.",
	"careersBenefits.whyJoinUs": "Por que se juntar a nós?",
	"careersBenefits.remoteFirst": "Remoto primeiro",
	"careersBenefits.workFromAnywhereFully": "Trabalhe de qualquer lugar. Equipe totalmente distribuída em 6 fusos horários.",
	"careersBenefits.openSource": "Open Source",
	"careersBenefits.allOurWorkIs": "Todo o nosso trabalho é open source. Construa seu portfólio público enquanto causa impacto.",
	"careersBenefits.impactful": "Impactante",
	"careersBenefits.yourWorkDirectlyHelps": "Seu trabalho ajuda diretamente os desenvolvedores a criar aplicativos internacionalizados melhores e mais rápidos.",
	"openPositions.openPositions": "Vagas abertas",
	"openPositions.seniorPerformanceEngineer": "Engenheiro de Performance Sênior",
	"openPositions.fullTime": "Tempo integral",
	"openPositions.remote": "Remoto",
	"openPositions.leadBenchmarkDesignAnd": "Liderar o design e a implementação de benchmarks. É necessário conhecimento profundo dos componentes internos da V8, das APIs de desempenho do navegador e de análise estatística.",
	"openPositions.technicalWriter": "Redator Técnico",
	"openPositions.partTime": "Meio período",
	"openPositions.createAndMaintainDocumentation": "Criar e manter documentação, postagens em blogs e conteúdo educacional sobre as melhores práticas de desempenho de i18n.",
	"openPositions.frontendDeveloper": "Desenvolvedor Frontend",
	"openPositions.buildAndMaintainThe": "Construir e manter o dashboard de benchmark, ferramentas de comparação e visualizações interativas.",
	"openPositions.devOpsEngineer": "Engenheiro DevOps",
	"openPositions.designAndMaintainThe": "Projetar e manter o pipeline de CI/CD que executa benchmarks automaticamente a cada atualização de biblioteca.",
	"openPositions.applyNow": "Candidatar-se agora"
};
var contact_default$2 = {
	"contactHeader.contactUs": "Contate-nos",
	"contactHeader.haveQuestionsOrWantTo": "Tem dúvidas ou quer contribuir? Gostaríamos muito de ouvir você.",
	"contactForm.name": "Nome",
	"contactForm.email": "E-mail",
	"contactForm.subject": "Assunto",
	"contactForm.message": "Mensagem",
	"contactForm.sendMessage": "Enviar Mensagem",
	"contactForm.wellGetBackTo": "Retornaremos em até 48 horas."
};
var faq_default$2 = {
	"faqHeader.frequentlyAskedQuestions": "Perguntas Frequentes",
	"faqHeader.everythingYouNeedTo": "Tudo o que você precisa saber sobre o projeto i18n Benchmark.",
	"faqList.howAreTheBenchmarks": "Como os benchmarks são executados?",
	"faqList.allBenchmarksAreRun": "Todos os benchmarks são executados usando o Playwright em uma configuração de hardware consistente (M2 MacBook Pro) com condições de rede 4G simuladas. Cada teste executa 50 iterações e relatamos a mediana, e os valores P95 e P99.",
	"faqList.whatLibrariesAreCurrently": "Quais bibliotecas são testadas atualmente?",
	"faqList.weCurrentlyBenchmarkReactI18next": "Atualmente testamos react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl e Paraglide. Planejamos adicionar mais com base nas solicitações da comunidade.",
	"faqList.canIContributeA": "Posso contribuir com uma nova integração de biblioteca?",
	"faqList.absolutelyWeWelcomeCommunity": "Com certeza! Aceitamos contribuições da comunidade. Faça um fork do repositório, adicione a integração da sua biblioteca seguindo o nosso modelo e envie um pull request.",
	"faqList.howOftenAreResults": "Com que frequência os resultados são atualizados?",
	"faqList.benchmarksRunAutomaticallyVia": "Os benchmarks são executados automaticamente via CI a cada atualização de dependência e semanalmente no branch main. Os resultados são publicados no dashboard em até 24 horas.",
	"faqList.areTheResultsStatistically": "Os resultados são estatisticamente significativos?",
	"faqList.yesWeUseThe": "Sim. Usamos o teste U de Mann-Whitney com um nível de significância de 0,05 para comparar distribuições. Também relatamos intervalos de confiança e tamanhos de efeito."
};
var pricing_default$2 = {
	"pricingHeader.pricing": "Preços",
	"pricingHeader.transparentPricingForEvery": "Preços transparentes para cada etapa da sua jornada i18n.",
	"pricingTiers.freeTier": "Nível Gratuito",
	"pricingTiers.free": "Grátis",
	"pricingTiers.publicBenchmarkDashboard": "Dashboard público de benchmark",
	"pricingTiers.basicLibraryComparisons": "Comparações básicas de bibliotecas",
	"pricingTiers.communityForumAccess": "Acesso ao fórum da comunidade",
	"pricingTiers.monthlyResultDigest": "Resumo mensal dos resultados",
	"pricingTiers.getStarted": "Começar",
	"pricingTiers.proTier": "Nível Pro",
	"pricingTiers.perMonth": "/mês",
	"pricingTiers.allFreeFeatures": "Todas as funcionalidades gratuitas",
	"pricingTiers.customBenchmarkConfigurations": "Configurações de benchmark personalizadas",
	"pricingTiers.privateResultsDashboard": "Dashboard de resultados privado",
	"pricingTiers.apiAccess1000Requests": "Acesso à API (1.000 requisições/dia)",
	"pricingTiers.slackIntegration": "Integração com Slack",
	"pricingTiers.subscribeToPro": "Assinar Pro",
	"pricingTiers.enterpriseTier": "Nível Enterprise",
	"pricingTiers.custom": "Personalizado",
	"pricingTiers.allProFeatures": "Todas as funcionalidades Pro",
	"pricingTiers.dedicatedBenchmarkInfrastructure": "Infraestrutura de benchmark dedicada",
	"pricingTiers.customLibraryIntegrations": "Integrações de bibliotecas personalizadas",
	"pricingTiers.slaGuarantees": "Garantias de SLA",
	"pricingTiers.prioritySupport": "Suporte prioritário",
	"pricingTiers.contactSales": "Contatar Vendas"
};
var products_default$2 = {
	"productsHeader.products": "Produtos",
	"productsHeader.toolsAndServicesTo": "Ferramentas e serviços para ajudá-lo a otimizar sua estratégia de internacionalização.",
	"productsGrid.benchmarkDashboard": "Dashboard de Benchmark",
	"productsGrid.interactiveChartsAndTables": "Gráficos e tabelas interativos comparando bibliotecas i18n em tamanho de bundle, tempo de renderização e custo de hidratação.",
	"productsGrid.bundleAnalyzer": "Analisador de Bundle",
	"productsGrid.uploadYourBuildOutput": "Faça o upload da sua saída de build e obtenha um detalhamento de quanto do seu bundle é overhead de i18n.",
	"productsGrid.migrationAssistant": "Assistente de Migração",
	"productsGrid.automatedCodemodsAndGuides": "Codemods e guias automatizados para migração entre bibliotecas i18n com o mínimo de interrupção.",
	"productsGrid.performanceMonitor": "Monitor de Performance",
	"productsGrid.continuousPerformanceTrackingFor": "Acompanhamento contínuo de desempenho para sua implementação de i18n. Receba alertas quando o carregamento das traduções piorar.",
	"productsGrid.learnMore": "Saiba Mais"
};
var settings_default$2 = {
	"settingsHeader.settings": "Configurações",
	"settingsHeader.manageYourAccountPreferences": "Gerencie as suas preferências e configuração da conta.",
	"profileSection.profile": "Perfil",
	"profileSection.displayName": "Nome de exibição",
	"profileSection.email": "E-Mail",
	"preferencesSection.preferences": "Preferências",
	"preferencesSection.emailNotifications": "Notificações por e-mail",
	"preferencesSection.receiveWeeklyBenchmarkReports": "Receber relatórios semanais de benchmarks",
	"preferencesSection.darkMode": "Modo Escuro",
	"preferencesSection.useDarkColorScheme": "Usar esquema de cores escuras",
	"preferencesSection.defaultLanguage": "Idioma Padrão",
	"apiAccessSection.apiAccess": "Acesso à API",
	"apiAccessSection.apiKey": "Chave da API",
	"apiAccessSection.useThisKeyTo": "Utilize esta chave para aceder à API de benchmarking de forma programática.",
	"apiAccessSection.copy": "Copiar",
	"settingsFooter.cancel": "Cancelar",
	"settingsFooter.saveChanges": "Guardar alterações"
};
var team_default$2 = {
	"teamHeader.ourTeam": "Nossa Equipe",
	"teamHeader.meetThePeopleBehindI18n": "Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor.",
	"teamGrid.sarahChen": "Sarah Chen",
	"teamGrid.founderLeadEngineer": "Fundadora e Engenheira Líder",
	"teamGrid.formerGoogleEngineerWith10": "Ex-engenheira do Google com 10 anos de experiência na construção de sistemas de internacionalização em escala.",
	"teamGrid.marcusWeber": "Marcus Weber",
	"teamGrid.performanceEngineer": "Engenheiro de Performance",
	"teamGrid.specializesInJavascriptPerformanceOptimization": "Especializado em otimização de desempenho JavaScript e metodologia de benchmarking. Anteriormente na Vercel.",
	"teamGrid.aishaPatel": "Aisha Patel",
	"teamGrid.developerAdvocate": "Advogado de Desenvolvedores",
	"teamGrid.passionateAboutDeveloperExperienceAnd": "Apaixonada por experiência do desenvolvedor e educação. Palestrante na React Conf, JSConf e i18nNext.",
	"teamGrid.tomasRodriguez": "Tomás Rodríguez",
	"teamGrid.fullStackDeveloper": "Desenvolvedor Full-Stack",
	"teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Mantém a infraestrutura de benchmarking e o pipeline de CI/CD. Colaborador de código aberto do Lingui.",
	"teamGrid.yukiTanaka": "Yuki Tanaka",
	"teamGrid.dataAnalyst": "Analista de Dados",
	"teamGrid.ensuresStatisticalRigorInAll": "Garante o rigor estatístico em todos os resultados de benchmark. Doutorado em Estatística Aplicada pelo MIT.",
	"teamGrid.elenaKowalski": "Elena Kowalski",
	"teamGrid.communityManager": "Gerente de Comunidade",
	"teamGrid.managesCommunityContributionsPartnershipsAnd": "Gerencia contribuições da comunidade, parcerias e eventos. Experiência em governança de código aberto."
};
var route_default$1 = {
	oopsPageNotFound: "Oops! Page not found.",
	returnToHome: "Return to Home",
	"route.couldNotMeasureHydrationDuration": "Не удалось измерить продолжительность гидратации:",
	"route.oopsPageNotFound": "Упс! Страница не найдена",
	"route.returnToHome": "Вернуться на главную"
};
var header_default$1 = {
	home: "Главная",
	methodology: "Методология",
	mockPages: "Тестовые страницы",
	products: "Продукты",
	pricing: "Цены",
	team: "Команда",
	blog: "Блог",
	careers: "Карьера",
	faq: "FAQ",
	contact: "Контакт",
	settings: "Настройки",
	goToGithub: "Перейти на GitHub"
};
var footer_default$1 = {
	resources: "Ресурсы",
	contact: "Контакт",
	github: "GitHub",
	methodology: "Методология",
	contributing: "Вклад",
	builtWith: "i18n Benchmark — Открытый проект. Построен на React, Vite и TanStack Router.",
	anOpenSourceTestApplication: "Открытое приложение для тестирования реального влияния библиотек интернационализации на размер бандла, время загрузки и отзывчивость приложения."
};
var themeToggle_default$1 = {
	themeModeAutoSystemClick: "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.",
	themeModeLightClick: "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему.",
	themeModeDarkClick: "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.",
	themeAuto: "Тема: Авто",
	themeDark: "Тема: Темная",
	themeLight: "Тема: Светлая"
};
var hero_default$1 = {
	aTestApplicationDesignedTo: "Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.",
	viewResults: "Посмотреть результаты"
};
var whyItMatters_default$1 = {
	whyTheseMetricsMatter: "Почему эти показатели важны",
	bundleSize: "Размер бандла",
	theBundleIsTheData: "Бандл — это данные, которые отправляются каждому пользователю по всему миру. Большой размер бандла означает более долгое время загрузки, особенно при медленном 3G-соединении, характерном для многих регионов. Библиотеки i18n сильно различаются по весу: от нескольких килобайт до десятков килобайт рантайм-кода, плюс сами файлы переводов.",
	renderingHydration: "Рендеринг и гидратация",
	connectingALargeJson: "Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг всего дерева. Во время гидратации SSR парсинг и присоединение массивных объектов перевода добавляют задержку до того, как страница станет интерактивной, что напрямую влияет на Time to Interactive (TTI).",
	dynamicLoading: "Динамическая загрузка",
	loadingAllTranslationsUpfront: "Загрузка всех переводов сразу перегружает начальную полезную нагрузку. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно для текущей страницы. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы (waterfall), мерцание непереведенного контента и сложность кэширования. Измерение обеих стратегий необходимо."
};
var understandingImpact_default$1 = {
	cacheInvalidation: "Инвалидация кэша:",
	contextBasedArchitecturesCan: "Context-based architectures can cause the entire app to re-render when the language changes. For large apps with thousands of components, this can lead to noticeable lag during locale switches.",
	contextBasedArchitecturesCanCause: "Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, потому что каждый потребитель уведомляется, даже если его конкретные ключи не изменились.",
	duringServerSideRenderingThe: "Во время серверного рендеринга весь словарь сериализуется в HTML-пейлоад, увеличивая размер документа, который необходимо загрузить и гидратировать.",
	flashOfUntranslatedContent: "Flash of Untranslated Content (FOUC)",
	flashOfUntranslatedContentFouc: "Мерцание непереведенного контента (FOUC):",
	manyI18nLibrariesStore: "Many i18n libraries store translations in large JSON files that are loaded upfront. This can significantly increase the \"Time to Interactive\" as the browser must download and parse these files before the app can be used.",
	manyI18nLibrariesStoreTranslations: "Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:",
	splittingTranslationsIntoPerRoute: "Разделение переводов на чанки для каждого маршрута или пространства имен может значительно уменьшить начальный пейлоад. Но это создает новые проблемы:",
	theAppMustFirstLoad: "The app must first load the core library (e.g., i18next) which adds to the initial bundle size. Even \"lightweight\" libraries can add 10-20KB of minified JS.",
	theJsonMustBeParsed: "JSON должен парситься при каждой загрузке страницы — блокируя основной поток.",
	theTradeOffsOfDynamic: "Компромиссы динамической загрузки",
	thisTestAppProvidesA: "Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют вашему JavaScript-бандлу, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.",
	understandingTheImpact: "Понимание влияния",
	updatingTranslationsRequiresCache: "Updating translations often requires a full rebuild or clearing the CDN cache, which can delay the roll-out of critical copy changes.",
	usersMayBrieflySeeTranslation: "Users may briefly see translation keys or English text while the library and translation files are being loaded.",
	waterfallRequests: "Каскадные запросы (Waterfall requests):",
	whatThisBenchmarkMeasures: "Что измеряет этот бенчмарк",
	whyASingleLargeJson: "Почему один большой JSON может снизить производительность"
};
var resultsTable_default$1 = {
	bundleSize: "Размер бандла",
	lazyLoading: "Ленивая загрузка",
	library: "Library",
	lookupTime: "Время поиска",
	sampleResults: "Примеры результатов"
};
var aboutHeader_default$1 = {
	aboutThisBenchmark: "About This Benchmark",
	methodology: "Методология",
	thisIsAnOpenSource: "This is an open-source test application for measuring the real-world impact of internationalization libraries.",
	weDesignedThisBenchmarkTo: "Мы разработали этот бенчмарк, чтобы обеспечить справедливое, воспроизводимое и значимое сравнение библиотек i18n. Вот наш подход."
};
var aboutGrid_default$1 = {
	allBenchmarksRunOn: "Все бенчмарки запускаются на одном и том же оборудовании (M2 MacBook Pro, 16 ГБ ОЗУ), в одном и том же браузере (Chromium 120 через Playwright) и в одинаковых сетевых условиях (симуляция 4G). Каждый тест повторяется 50 раз, и мы сообщаем медиану с процентилями P95/P99.",
	applicationDesign: "Дизайн приложения",
	choosingAnI18nLibrary: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
	eachI18nLibraryIsIntegrated: "Каждая библиотека i18n интегрируется в соответствии с ее официальной документацией и лучшими практиками. Мы консультируемся с мейнтейнерами, когда это возможно, чтобы обеспечить оптимальную конфигурацию. Одно и то же приложение React, один и тот же конфиг Vite, одно и то же развертывание.",
	fairComparison: "Справедливое сравнение",
	measurementMethodology: "Методология измерения",
	methodology: "Methodology",
	testEnvironment: "Тестовая среда",
	theBenchmarkAppHas10: "Приложение для бенчмарка имеет 10 страниц с реалистичным контентом — навигацией, формами, динамическими списками и статическим текстом. Каждая страница использует 15–30 ключей перевода для представления реальных сценариев использования, а не синтетических микро-бенчмарков.",
	theSame10PageApp: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.",
	weUseBrowserNativeApis: "Мы используем нативные API браузера (Performance Timeline, Resource Timing, Layout Instability) в сочетании с данными React Profiler. Размеры бандлов измеряются после gzip с использованием source-map-explorer для точности.",
	whyThisExists: "Why This Exists"
};
var whatWeMeasure_default$1 = {
	bundleSizeImpact: "Влияние на размер бандла",
	duringSsrTranslationDataIs: "Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают HTML-пейлоад и замедляют гидратацию — момент, когда страница становится интерактивной.",
	duringSsrTranslationDataIsSerialized: "During SSR, translation data is serialized into the HTML. We measure the size of this payload and its effect on Time to Interactive (TTI).",
	howFastTheAppCan: "Как быстро приложение может переключаться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.",
	howFastTheAppCanSwitchFromOne: "How fast the app can switch from one language to another. We measure the re-render time and any network delays for lazy-loaded locales.",
	howMuchExtraTimeThe: "Сколько дополнительного времени слой i18n добавляет к рендерингу каждого компонента — измеряется с помощью actualDuration в React Profiler.",
	howMuchExtraTimeTheLibraryAdds: "How much extra time the library adds to the initial page load. This includes script execution and the time to fetch/parse translation data.",
	hydrationCost: "Стоимость гидратации",
	lazyLoadingEffectiveness: "Эффективность ленивой загрузки",
	localeSwitchSpeed: "Скорость переключения языка",
	renderingOverhead: "Затраты на рендеринг",
	theAdditionalJavascriptBytes: "The additional Javascript bytes that the library adds to your production build. We measure both the library itself and its mandatory dependencies.",
	theAdditionalJavascriptBytesSent: "Дополнительные байты JavaScript, отправляемые клиенту специально из-за рантайма библиотеки i18n, плюс файлы перевода для текущего языка.",
	whatWeMeasure: "Что мы измеряем",
	whetherSplittingTranslationsByRoute: "Действительно ли разделение переводов по маршрутам или пространствам имен снижает начальную нагрузку, и какие компромиссы оно вносит (каскадные запросы, FOUC, сложность кэширования)."
};
var blogHeader_default$1 = {
	blog: "Блог",
	insightsDeepDivesAnd: "Инсайты, глубокие погружения и обновления от сообщества бенчмаркинга i18n.",
	insightsTutorialsAndAnalysis: "Insights, Tutorials, and Analysis"
};
var blogList_default$1 = {
	aStepByStepGuide: "Пошаговое руководство по миграции продакшн-приложения с 50 000 ключами перевода с react-i18next на Lingui.",
	aStepByStepGuideOnMigrating: "A step-by-step guide on migrating from legacy i18n solutions to modern, high-performance libraries.",
	aTransparentLookAtOur: "Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.",
	aTransparentLookAtOurBenchmarking: "A transparent look at our benchmarking process, from hardware specs to measurement techniques.",
	anOverviewOfTheCurrent: "Обзор текущей экосистемы i18n, сравнение подходов от каталогов сообщений до решений на основе компиляторов.",
	anOverviewOfTheCurrentI18n: "An overview of the current i18n landscape and how different libraries stack up in 2026.",
	analysis: "Analysis",
	benchmark: "Benchmark",
	benchmarkMethodologyHowWe: "Benchmark Methodology: How We Test",
	benchmarkMethodologyHowWeTest: "Методология бенчмарка: как мы тестируем",
	comparingI18nLibrariesIn: "Comparing i18n Libraries in 2026: A Deep Dive",
	february12026: "1 февраля 2026 года",
	february152026: "15 февраля 2026 года",
	february282026: "28 февраля 2026 года",
	howToReduceYourI18n: "Как уменьшить бандл i18n на 60%",
	i18nBenchmark2026Results: "Результаты i18n Benchmark 2026",
	january202026: "20 января 2026 года",
	march152026: "15 марта 2026 года",
	march82026: "8 марта 2026 года",
	meta: "Meta",
	migratingFromReactI18nextTo: "Миграция с react-i18next на Lingui",
	practicalStrategiesForOptimizingTranslation: "Практические стратегии по оптимизации загрузки файлов перевода, tree-shaking неиспользуемых локалей и использование компиляции во время сборки.",
	reactServerComponentsIntroduceNew: "React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.",
	readMore: "Читать далее →",
	serverComponentsAndI18nWhat: "Server Components и i18n: что меняется?",
	theStateOfInternationalizationIn: "Состояние интернационализации в 2026 году",
	tutorial: "Tutorial",
	weTested12DifferentInternationalization: "Мы протестировали 12 различных библиотек интернационализации на 10 страницах. Вот подробные результаты с интерактивными графиками."
};
var careersHeader_default$1 = {
	careers: "Карьера",
	joinOurMission: "Join our mission to make internationalization fast, easy, and performant for everyone.",
	joinOurMissionToMake: "Присоединяйтесь к нашей миссии сделать веб быстрее и доступнее для всех и везде."
};
var careersBenefits_default$1 = {
	allOurWorkIs: "Вся наша работа — open source. Создавайте свое публичное портфолио, оказывая реальное влияние.",
	competitivePay: "Competitive pay",
	impactful: "Значимо",
	openSource: "Открытый исходный код",
	openSourceTime: "Open source time",
	percentTimeForOss: "20% time for OSS contributions",
	remoteFirst: "Сначала удаленка",
	topOfMarketCompensation: "Top-of-market compensation",
	whyJoinUs: "Почему стоит присоединиться к нам?",
	workFromAnywhere: "Work from anywhere in the world",
	workFromAnywhereFully: "Работайте откуда угодно. Полностью распределенная команда в 6 часовых поясах.",
	yourWorkDirectlyHelps: "Ваша работа напрямую помогает разработчикам создавать более качественные и быстрые локализованные приложения."
};
var openPositions_default$1 = {
	applyNow: "Apply Now",
	backendEngineer: "Backend Engineer",
	buildAndMaintainOur: "Build and maintain our benchmarking suite and core application infrastructure.",
	buildAndMaintainThe: "Создание и поддержка дашборда бенчмарков, инструментов сравнения и интерактивных визуализаций.",
	community: "Community",
	createAndMaintainDocumentation: "Создание и поддержка документации, постов в блоге и образовательного контента о лучших практиках производительности i18n.",
	createComprehensiveGuidesApi: "Create comprehensive guides, API references, and tutorials for the community.",
	designAndMaintainThe: "Проектирование и поддержка CI/CD пайплайна, который автоматически запускает бенчмарки при каждом обновлении библиотеки.",
	designAndScaleOur: "Design and scale our data ingestion pipelines and statistical analysis engines.",
	devOpsEngineer: "DevOps-инженер",
	devrelEngineer: "DevRel Engineer",
	documentation: "Documentation",
	engageWithTheI18n: "Engage with the i18n community, write blog posts, and speak at conferences.",
	engineering: "Engineering",
	ensureTheAccuracyAnd: "Ensure the accuracy and reliability of our benchmarks through rigorous testing.",
	frontendDeveloper: "Frontend-разработчик",
	fullTime: "Full-time",
	leadBenchmarkDesignAnd: "Руководство дизайном и реализацией бенчмарков. Требуются глубокие знания внутренностей V8, API производительности браузера и статистического анализа.",
	openPositions: "Open Positions",
	partTime: "Part-time",
	qaEngineer: "QA Engineer",
	remote: "Remote",
	seniorFrontendEngineer: "Senior Frontend Engineer",
	seniorPerformanceEngineer: "Старший инженер по производительности",
	sfRemote: "San Francisco / Remote",
	technicalWriter: "Technical Writer"
};
var contactHeader_default$1 = {
	contactUs: "Связаться с нами",
	getInTouch: "Свяжитесь с нами",
	haveIdeasFoundABug: "Есть идеи? Нашли ошибку? Мы будем рады вашему сообщению.",
	haveQuestionsOrWantTo: "Есть вопросы или хотите внести вклад? Мы будем рады услышать вас."
};
var contactForm_default$1 = {
	bugReport: "Сообщение об ошибке",
	contribution: "Contribution",
	email: "Электронная почта",
	emailPlaceholder: "you@example.com",
	message: "Сообщение",
	messagePlaceholder: "Ваше сообщение...",
	methodologyQuestion: "Methodology Question",
	name: "Имя",
	newBenchmarkIdea: "New Benchmark Idea",
	other: "Other",
	sendMessage: "Отправить сообщение",
	subject: "Тема",
	topic: "Тема",
	wellGetBackTo: "Мы ответим вам в течение 48 часов.",
	yourName: "Ваше имя"
};
var faqHeader_default$1 = {
	everythingYouNeedToKnow: "Все, что нужно знать о i18n Benchmark.",
	frequentlyAskedQuestions: "Часто задаваемые вопросы"
};
var faqList_default$1 = {
	absolutelyWeWelcomeCommunity: "Безусловно! Мы приветствуем вклад сообщества. Сделайте форк репозитория, добавьте интеграцию вашей библиотеки, следуя нашему шаблону, и отправьте пулл-реквест. Подробности см. в руководстве для контрибьюторов.",
	allBenchmarksAreRun: "Все бенчмарки запускаются с использованием Playwright на стабильной конфигурации оборудования (M2 MacBook Pro) с симулированными условиями сети 4G. Каждый тест выполняется 50 раз, и мы сообщаем медиану, значения P95 и P99.",
	areTheResultsStatistically: "Являются ли результаты статистически значимыми?",
	benchmarksRunAutomaticallyVia: "Бенчмарки запускаются автоматически через CI при каждом обновлении зависимостей и еженедельно в основной ветке. Результаты публикуются на дашборде в течение 24 часов.",
	canIContributeA: "Могу ли я предложить интеграцию новой библиотеки?",
	canISubmitMyOwnBenchmarks: "Могу ли я отправить свои собственные бенчмарки?",
	doYouOfferConsultingServices: "Вы предлагаете консультационные услуги?",
	howAreBenchmarksConducted: "Как проводятся бенчмарки?",
	howAreTheBenchmarks: "Как запускаются бенчмарки?",
	howCanIContribute: "Как я могу внести вклад?",
	howOftenAreBenchmarksUpdated: "Как часто обновляются бенчмарки?",
	howOftenAreResults: "Как часто обновляются результаты?",
	i18nBenchmarkIsAnOpenSource: "i18n Benchmark is an open-source project dedicated to measuring the real-world performance impact of internationalization libraries.",
	isTheDataReliable: "Надежны ли данные?",
	thereAreManyWaysToContribute: "There are many ways to contribute, from submitting new benchmarks to improving our methodology documentation.",
	weCurrentlyBenchmarkReactI18next: "В настоящее время мы тестируем react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl и Paraglide. Мы планируем добавить больше библиотек на основе запросов сообщества.",
	weFollowRigorousStatisticalMethodologyIncluding: "We follow rigorous statistical methodology, including outlier detection and multiple test runs to ensure accuracy.",
	weReRunAllBenchmarksWeekly: "We re-run all benchmarks weekly against the latest versions of each library.",
	weRunStandardizedTestsInIsolated: "We run standardized tests in isolated environments, measuring bundle size, render time, and memory usage across dozens of libraries.",
	weSupportReactI18nextReactIntl: "We support react-i18next, react-intl, Lingui, Tolgee, and several other popular React i18n solutions.",
	whatIsI18nBenchmark: "Что такое i18n Benchmark?",
	whatLibrariesAreCurrently: "Какие библиотеки сейчас тестируются?",
	whichLibrariesAreCurrentlySupported: "Какие библиотеки сейчас поддерживаются?",
	yesCommunityBenchmarkSubmissionsAre: "Yes! Community benchmark submissions are encouraged and reviewed by our core team.",
	yesOurEnterprisePlanIncludesConsulting: "Yes, our Enterprise plan includes consulting services for optimizing your app's i18n performance.",
	yesWeUseThe: "Да. Мы используем U-критерий Манна-Уитни с уровнем значимости 0,05 для сравнения распределений. Мы также сообщаем доверительные интервалы и размеры эффекта."
};
var pricingHeader_default$1 = {
	pricing: "Цены",
	transparentPricingForEvery: "Прозрачные цены для каждого этапа вашего пути в i18n."
};
var pricingTiers_default$1 = {
	freeTier: "Бесплатный уровень",
	free: "Бесплатно",
	publicBenchmarkDashboard: "Публичный дашборд бенчмарков",
	basicLibraryComparisons: "Базовые сравнения библиотек",
	communityForumAccess: "Доступ к форуму сообщества",
	monthlyResultDigest: "Ежемесячный дайджест результатов",
	getStarted: "Начать",
	proTier: "Профессиональный уровень",
	perMonth: "/месяц",
	allFreeFeatures: "Все функции бесплатного уровня",
	customBenchmarkConfigurations: "Собственные конфигурации бенчмарков",
	privateResultsDashboard: "Приватный дашборд результатов",
	apiAccess1000Requests: "Доступ к API (1000 запросов/день)",
	slackIntegration: "Интеграция со Slack",
	subscribeToPro: "Подписаться на Pro",
	enterpriseTier: "Корпоративный уровень",
	custom: "Индивидуально",
	allProFeatures: "Все функции уровня Pro",
	dedicatedBenchmarkInfrastructure: "Выделенная инфраструктура для бенчмарков",
	customLibraryIntegrations: "Индивидуальные интеграции библиотек",
	slaGuarantees: "Гарантии SLA",
	prioritySupport: "Приоритетная поддержка",
	contactSales: "Связаться с отделом продаж"
};
var productsHeader_default$1 = {
	products: "Продукты",
	toolsAndServicesTo: "Инструменты и услуги, которые помогут вам оптимизировать стратегию интернационализации."
};
var productsGrid_default$1 = {
	benchmarkDashboard: "Дашборд бенчмарков",
	interactiveChartsAndTables: "Интерактивные графики и таблицы, сравнивающие библиотеки i18n по размеру бандла, времени рендеринга и стоимости гидратации.",
	bundleAnalyzer: "Анализатор бандла",
	uploadYourBuildOutput: "Загрузите вывод вашей сборки и получите подробный отчет о том, какую часть бандла составляют накладные расходы i18n.",
	migrationAssistant: "Помощник по миграции",
	automatedCodemodsAndGuides: "Автоматизированные кодомоды и руководства для миграции между библиотеками i18n с минимальными перерывами.",
	performanceMonitor: "Монитор производительности",
	continuousPerformanceTrackingFor: "Непрерывное отслеживание производительности вашей реализации i18n. Получайте оповещения при ухудшении загрузки переводов.",
	learnMore: "Узнать больше"
};
var settingsHeader_default$1 = {
	manageYourAccount: "Manage your account settings and preferences.",
	manageYourAccountPreferences: "Управляйте настройками своего аккаунта и конфигурацией.",
	settings: "Настройки"
};
var profileSection_default$1 = {
	profile: "Профиль",
	displayName: "Отображаемое имя",
	email: "Email"
};
var preferencesSection_default$1 = {
	arabicAr: "Arabic (ar)",
	chineseSimplifiedZhCn: "Chinese (Simplified, zh-CN)",
	darkMode: "Темный режим",
	defaultLanguage: "Язык по умолчанию",
	emailNotifications: "Email-уведомления",
	englishEn: "English (en)",
	frenchFr: "French (fr)",
	germanDe: "German (de)",
	japaneseJa: "Japanese (ja)",
	preferences: "Настройки",
	receiveWeeklyBenchmark: "Receive weekly benchmark reports",
	receiveWeeklyBenchmarkReports: "Получать еженедельные отчеты о бенчмарках",
	spanishEs: "Spanish (es)",
	toggleDarkMode: "Toggle dark mode",
	toggleNotifications: "Toggle Notifications",
	useDarkColorScheme: "Использовать темную цветовою схему"
};
var apiAccessSection_default$1 = {
	apiAccess: "Доступ к API",
	apiKey: "Ключ API",
	useThisKeyTo: "Используйте этот ключ для программного доступа к API бенчмаркинга.",
	copy: "Копировать"
};
var settingsFooter_default$1 = {
	cancel: "Отмена",
	saveChanges: "Сохранить изменения"
};
var teamHeader_default$1 = {
	ourTeam: "Наша команда",
	meetThePeopleBehindI18n: "Познакомьтесь с людьми, стоящими за i18n Benchmark. Разнообразная команда, объединенная общей страстью к отличным инструментам для разработчиков."
};
var teamGrid_default$1 = {
	aishaPatel: "Айша Патель",
	communityManager: "Community Manager",
	dataAnalyst: "Data Analyst",
	developerAdvocate: "Developer Advocate",
	elenaKowalski: "Елена Ковальски",
	ensuresStatisticalRigorIn: "Ensures statistical rigor in our data collection and analysis.",
	ensuresStatisticalRigorInAll: "Обеспечивает статистическую строгость всех результатов бенчмарков. Доктор прикладной статистики из Массачусетского технологического института (MIT).",
	formerGoogleEngineerWith: "Former Google engineer with a passion for web performance and open source.",
	formerGoogleEngineerWith10: "Бывший инженер Google с 10-летним опытом создания систем интернационализации в масштабе.",
	founderLeadEngineer: "Founder & Lead Engineer",
	fullStackDeveloper: "Full-Stack Developer",
	maintainsTheBenchmarkingInfrastructure: "Maintains the benchmarking infrastructure and CI/CD pipelines.",
	maintainsTheBenchmarkingInfrastructureAnd: "Поддерживает инфраструктуру бенчмаркинга и пайплайн CI/CD. Участник разработки Lingui с открытым исходным кодом.",
	managesCommunityContributions: "Manages community contributions and open source outreach.",
	managesCommunityContributionsPartnershipsAnd: "Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении проектами с открытым исходным кодом.",
	marcusWeber: "Маркус Вебер",
	passionateAboutDeveloperExperience: "Passionate about developer experience and building intuitive APIs.",
	passionateAboutDeveloperExperienceAnd: "Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext.",
	performanceEngineer: "Performance Engineer",
	sarahChen: "Сара Чен",
	specializesInJavascriptPerformance: "Specializes in JavaScript performance optimization and React internals.",
	specializesInJavascriptPerformanceOptimization: "Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.",
	tomasRodriguez: "Томас Родригес",
	yukiTanaka: "Юки Танака"
};
var common_default$1 = {
	cancel: "Cancel",
	copy: "Copy",
	"footer.anOpenSourceTestApplication": "Открытое приложение для тестирования реального влияния библиотек интернационализации на размер бандла, время загрузки и отзывчивость приложения.",
	"footer.builtWith": "i18n Benchmark — Открытый проект. Построен на React, Vite и TanStack Router.",
	"footer.contact": "Контакт",
	"footer.contributing": "Вклад",
	"footer.github": "GitHub",
	"footer.methodology": "Методология",
	"footer.resources": "Ресурсы",
	"header.blog": "Блог",
	"header.careers": "Карьера",
	"header.contact": "Контакт",
	"header.faq": "FAQ",
	"header.goToGithub": "Перейти на GitHub",
	"header.home": "Главная",
	"header.methodology": "Методология",
	"header.mockPages": "Тестовые страницы",
	"header.pricing": "Цены",
	"header.products": "Продукты",
	"header.settings": "Настройки",
	"header.team": "Команда",
	mockBanner: "⚠️ Эта страница содержит фиктивные данные только для целей тестирования производительности. Она не связана с каким-либо реальным бизнесом или услугой.",
	readMore: "Read More",
	saveChanges: "Save Changes",
	"themeToggle.themeAuto": "Тема: Авто",
	"themeToggle.themeDark": "Тема: Темная",
	"themeToggle.themeLight": "Тема: Светлая",
	"themeToggle.themeModeAutoSystemClick": "Режим темы: авто (системный). Нажмите, чтобы переключиться на светлую тему.",
	"themeToggle.themeModeDarkClick": "Режим темы: темный. Нажмите, чтобы переключиться на авто (системный) режим.",
	"themeToggle.themeModeLightClick": "Режим темы: светлый. Нажмите, чтобы переключиться на темную тему."
};
var home_default$1 = {
	"hero.aTestApplicationDesignedTo": "Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.",
	"hero.viewResults": "Посмотреть результаты",
	"whyItMatters.whyTheseMetricsMatter": "Почему эти показатели важны",
	"whyItMatters.bundleSize": "Размер бандла",
	"whyItMatters.theBundleIsTheData": "Бандл — это данные, которые отправляются каждому пользователю по всему миру. Большой размер бандла означает более долгое время загрузки, особенно при медленном 3G-соединении, характерном для многих регионов. Библиотеки i18n сильно различаются по весу: от нескольких килобайт до десятков килобайт рантайм-кода, плюс сами файлы переводов.",
	"whyItMatters.renderingHydration": "Рендеринг и гидратация",
	"whyItMatters.connectingALargeJson": "Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг всего дерева. Во время гидратации SSR парсинг и присоединение массивных объектов перевода добавляют задержку до того, как страница станет интерактивной, что напрямую влияет на Time to Interactive (TTI).",
	"whyItMatters.dynamicLoading": "Динамическая загрузка",
	"whyItMatters.loadingAllTranslationsUpfront": "Загрузка всех переводов сразу перегружает начальную полезную нагрузку. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно для текущей страницы. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы (waterfall), мерцание непереведенного контента и сложность кэширования. Измерение обеих стратегий необходимо.",
	"understandingImpact.understandingTheImpact": "Понимание влияния",
	"understandingImpact.whyASingleLargeJson": "Почему один большой JSON может снизить производительность",
	"understandingImpact.manyI18nLibrariesStoreTranslations": "Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:",
	"understandingImpact.theJsonMustBeParsed": "JSON должен парситься при каждой загрузке страницы — блокируя основной поток.",
	"understandingImpact.contextBasedArchitecturesCanCause": "Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, потому что каждый потребитель уведомляется, даже если его конкретные ключи не изменились.",
	"understandingImpact.duringServerSideRenderingThe": "Во время серверного рендеринга весь словарь сериализуется в HTML-пейлоад, увеличивая размер документа, который необходимо загрузить и гидратировать.",
	"understandingImpact.theTradeOffsOfDynamic": "Компромиссы динамической загрузки",
	"understandingImpact.splittingTranslationsIntoPerRoute": "Разделение переводов на чанки для каждого маршрута или пространства имен может значительно уменьшить начальный пейлоад. Но это создает новые проблемы:",
	"understandingImpact.waterfallRequests": "Каскадные запросы (Waterfall requests):",
	"understandingImpact.flashOfUntranslatedContentFouc": "Мерцание непереведенного контента (FOUC):",
	"understandingImpact.cacheInvalidation": "Инвалидация кэша:",
	"understandingImpact.whatThisBenchmarkMeasures": "Что измеряет этот бенчмарк",
	"understandingImpact.thisTestAppProvidesA": "Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют вашему JavaScript-бандлу, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.",
	"resultsTable.sampleResults": "Примеры результатов",
	"resultsTable.bundleSize": "Размер бандла",
	"resultsTable.lookupTime": "Время поиска",
	"resultsTable.lazyLoading": "Ленивая загрузка"
};
var about_default$1 = {
	"aboutHeader.methodology": "Методология",
	"aboutHeader.weDesignedThisBenchmarkTo": "Мы разработали этот бенчмарк, чтобы обеспечить справедливое, воспроизводимое и значимое сравнение библиотек i18n. Вот наш подход.",
	"aboutGrid.testEnvironment": "Тестовая среда",
	"aboutGrid.allBenchmarksRunOn": "Все бенчмарки запускаются на одном и том же оборудовании (M2 MacBook Pro, 16 ГБ ОЗУ), в одном и том же браузере (Chromium 120 через Playwright) и в одинаковых сетевых условиях (симуляция 4G). Каждый тест повторяется 50 раз, и мы сообщаем медиану с процентилями P95/P99.",
	"aboutGrid.applicationDesign": "Дизайн приложения",
	"aboutGrid.theBenchmarkAppHas10": "Приложение для бенчмарка имеет 10 страниц с реалистичным контентом — навигацией, формами, динамическими списками и статическим текстом. Каждая страница использует 15–30 ключей перевода для представления реальных сценариев использования, а не синтетических микро-бенчмарков.",
	"aboutGrid.measurementMethodology": "Методология измерения",
	"aboutGrid.weUseBrowserNativeApis": "Мы используем нативные API браузера (Performance Timeline, Resource Timing, Layout Instability) в сочетании с данными React Profiler. Размеры бандлов измеряются после gzip с использованием source-map-explorer для точности.",
	"aboutGrid.fairComparison": "Справедливое сравнение",
	"aboutGrid.eachI18nLibraryIsIntegrated": "Каждая библиотека i18n интегрируется в соответствии с ее официальной документацией и лучшими практиками. Мы консультируемся с мейнтейнерами, когда это возможно, чтобы обеспечить оптимальную конфигурацию. Одно и то же приложение React, один и тот же конфиг Vite, одно и то же развертывание.",
	"whatWeMeasure.bundleSizeImpact": "Влияние на размер бандла",
	"whatWeMeasure.theAdditionalJavascriptBytesSent": "Дополнительные байты JavaScript, отправляемые клиенту специально из-за рантайма библиотеки i18n, плюс файлы перевода для текущего языка.",
	"whatWeMeasure.renderingOverhead": "Затраты на рендеринг",
	"whatWeMeasure.howMuchExtraTimeThe": "Сколько дополнительного времени слой i18n добавляет к рендерингу каждого компонента — измеряется с помощью actualDuration в React Profiler.",
	"whatWeMeasure.hydrationCost": "Стоимость гидратации",
	"whatWeMeasure.duringSsrTranslationDataIs": "Во время SSR данные перевода сериализуются в HTML. Большие словари увеличивают HTML-пейлоад и замедляют гидратацию — момент, когда страница становится интерактивной.",
	"whatWeMeasure.lazyLoadingEffectiveness": "Эффективность ленивой загрузки",
	"whatWeMeasure.whetherSplittingTranslationsByRoute": "Действительно ли разделение переводов по маршрутам или пространствам имен снижает начальную нагрузку, и какие компромиссы оно вносит (каскадные запросы, FOUC, сложность кэширования).",
	"whatWeMeasure.localeSwitchSpeed": "Скорость переключения языка",
	"whatWeMeasure.howFastTheAppCan": "Как быстро приложение может переключаться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.",
	"whatWeMeasure.whatWeMeasure": "Что мы измеряем"
};
var blog_default$1 = {
	"blogHeader.blog": "Блог",
	"blogHeader.insightsDeepDivesAnd": "Инсайты, глубокие погружения и обновления от сообщества бенчмаркинга i18n.",
	"blogList.i18nBenchmark2026Results": "Результаты i18n Benchmark 2026",
	"blogList.march152026": "15 марта 2026 года",
	"blogList.weTested12DifferentInternationalization": "Мы протестировали 12 различных библиотек интернационализации на 10 страницах. Вот подробные результаты с интерактивными графиками.",
	"blogList.howToReduceYourI18n": "Как уменьшить бандл i18n на 60%",
	"blogList.march82026": "8 марта 2026 года",
	"blogList.practicalStrategiesForOptimizingTranslation": "Практические стратегии по оптимизации загрузки файлов перевода, tree-shaking неиспользуемых локалей и использование компиляции во время сборки.",
	"blogList.theStateOfInternationalizationIn": "Состояние интернационализации в 2026 году",
	"blogList.february282026": "28 февраля 2026 года",
	"blogList.anOverviewOfTheCurrent": "Обзор текущей экосистемы i18n, сравнение подходов от каталогов сообщений до решений на основе компиляторов.",
	"blogList.migratingFromReactI18nextTo": "Миграция с react-i18next на Lingui",
	"blogList.february152026": "15 февраля 2026 года",
	"blogList.aStepByStepGuide": "Пошаговое руководство по миграции продакшн-приложения с 50 000 ключами перевода с react-i18next на Lingui.",
	"blogList.serverComponentsAndI18nWhat": "Server Components и i18n: что меняется?",
	"blogList.february12026": "1 февраля 2026 года",
	"blogList.reactServerComponentsIntroduceNew": "React Server Components представляют новые паттерны для интернационализации. Мы исследуем последствия и лучшие практики.",
	"blogList.benchmarkMethodologyHowWeTest": "Методология бенчмарка: как мы тестируем",
	"blogList.january202026": "20 января 2026 года",
	"blogList.aTransparentLookAtOur": "Прозрачный взгляд на нашу методологию бенчмаркинга, включая тестовые среды, статистические методы и воспроизводимость.",
	"blogList.readMore": "Читать далее →"
};
var careers_default$1 = {
	"careersHeader.careers": "Карьера",
	"careersHeader.joinOurMissionToMake": "Присоединяйтесь к нашей миссии сделать веб быстрее и доступнее для всех и везде.",
	"careersBenefits.whyJoinUs": "Почему стоит присоединиться к нам?",
	"careersBenefits.remoteFirst": "Сначала удаленка",
	"careersBenefits.workFromAnywhereFully": "Работайте откуда угодно. Полностью распределенная команда в 6 часовых поясах.",
	"careersBenefits.openSource": "Открытый исходный код",
	"careersBenefits.allOurWorkIs": "Вся наша работа — open source. Создавайте свое публичное портфолио, оказывая реальное влияние.",
	"careersBenefits.impactful": "Значимо",
	"careersBenefits.yourWorkDirectlyHelps": "Ваша работа напрямую помогает разработчикам создавать более качественные и быстрые локализованные приложения.",
	"openPositions.openPositions": "Открытые вакансии",
	"openPositions.seniorPerformanceEngineer": "Старший инженер по производительности",
	"openPositions.fullTime": "Полный рабочий день",
	"openPositions.remote": "Удаленно",
	"openPositions.leadBenchmarkDesignAnd": "Руководство дизайном и реализацией бенчмарков. Требуются глубокие знания внутренностей V8, API производительности браузера и статистического анализа.",
	"openPositions.technicalWriter": "Технический писатель",
	"openPositions.partTime": "Неполный рабочий день",
	"openPositions.createAndMaintainDocumentation": "Создание и поддержка документации, постов в блоге и образовательного контента о лучших практиках производительности i18n.",
	"openPositions.frontendDeveloper": "Frontend-разработчик",
	"openPositions.buildAndMaintainThe": "Создание и поддержка дашборда бенчмарков, инструментов сравнения и интерактивных визуализаций.",
	"openPositions.devOpsEngineer": "DevOps-инженер",
	"openPositions.designAndMaintainThe": "Проектирование и поддержка CI/CD пайплайна, который автоматически запускает бенчмарки при каждом обновлении библиотеки.",
	"openPositions.applyNow": "Подать заявку"
};
var contact_default$1 = {
	"contactHeader.contactUs": "Связаться с нами",
	"contactHeader.haveQuestionsOrWantTo": "Есть вопросы или хотите внести вклад? Мы будем рады услышать вас.",
	"contactForm.name": "Имя",
	"contactForm.email": "Email",
	"contactForm.subject": "Тема",
	"contactForm.message": "Сообщение",
	"contactForm.sendMessage": "Отправить сообщение",
	"contactForm.wellGetBackTo": "Мы ответим вам в течение 48 часов."
};
var faq_default$1 = {
	"faqHeader.frequentlyAskedQuestions": "Часто задаваемые вопросы",
	"faqHeader.everythingYouNeedTo": "Все, что вам нужно знать о проекте i18n Benchmark.",
	"faqList.howAreTheBenchmarks": "Как запускаются бенчмарки?",
	"faqList.allBenchmarksAreRun": "Все бенчмарки запускаются с использованием Playwright на стабильной конфигурации оборудования (M2 MacBook Pro) с симулированными условиями сети 4G. Каждый тест выполняется 50 раз, и мы сообщаем медиану, значения P95 и P99.",
	"faqList.whatLibrariesAreCurrently": "Какие библиотеки сейчас тестируются?",
	"faqList.weCurrentlyBenchmarkReactI18next": "В настоящее время мы тестируем react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl и Paraglide. Мы планируем добавить больше библиотек на основе запросов сообщества.",
	"faqList.canIContributeA": "Могу ли я предложить интеграцию новой библиотеки?",
	"faqList.absolutelyWeWelcomeCommunity": "Безусловно! Мы приветствуем вклад сообщества. Сделайте форк репозитория, добавьте интеграцию вашей библиотеки, следуя нашему шаблону, и отправьте пулл-реквест. Подробности см. в руководстве для контрибьюторов.",
	"faqList.howOftenAreResults": "Как часто обновляются результаты?",
	"faqList.benchmarksRunAutomaticallyVia": "Бенчмарки запускаются автоматически через CI при каждом обновлении зависимостей и еженедельно в основной ветке. Результаты публикуются на дашборде в течение 24 часов.",
	"faqList.areTheResultsStatistically": "Являются ли результаты статистически значимыми?",
	"faqList.yesWeUseThe": "Да. Мы используем U-критерий Манна-Уитни с уровнем значимости 0,05 для сравнения распределений. Мы также сообщаем доверительные интервалы и размеры эффекта."
};
var pricing_default$1 = {
	"pricingHeader.pricing": "Цены",
	"pricingHeader.transparentPricingForEvery": "Прозрачные цены для каждого этапа вашего пути в i18n.",
	"pricingTiers.freeTier": "Бесплатный уровень",
	"pricingTiers.free": "Бесплатно",
	"pricingTiers.publicBenchmarkDashboard": "Публичный дашборд бенчмарков",
	"pricingTiers.basicLibraryComparisons": "Базовые сравнения библиотек",
	"pricingTiers.communityForumAccess": "Доступ к форуму сообщества",
	"pricingTiers.monthlyResultDigest": "Ежемесячный дайджест результатов",
	"pricingTiers.getStarted": "Начать",
	"pricingTiers.proTier": "Профессиональный уровень",
	"pricingTiers.perMonth": "/месяц",
	"pricingTiers.allFreeFeatures": "Все функции бесплатного уровня",
	"pricingTiers.customBenchmarkConfigurations": "Собственные конфигурации бенчмарков",
	"pricingTiers.privateResultsDashboard": "Приватный дашборд результатов",
	"pricingTiers.apiAccess1000Requests": "Доступ к API (1000 запросов/день)",
	"pricingTiers.slackIntegration": "Интеграция со Slack",
	"pricingTiers.subscribeToPro": "Подписаться на Pro",
	"pricingTiers.enterpriseTier": "Корпоративный уровень",
	"pricingTiers.custom": "Индивидуально",
	"pricingTiers.allProFeatures": "Все функции уровня Pro",
	"pricingTiers.dedicatedBenchmarkInfrastructure": "Выделенная инфраструктура для бенчмарков",
	"pricingTiers.customLibraryIntegrations": "Индивидуальные интеграции библиотек",
	"pricingTiers.slaGuarantees": "Гарантии SLA",
	"pricingTiers.prioritySupport": "Приоритетная поддержка",
	"pricingTiers.contactSales": "Связаться с отделом продаж"
};
var products_default$1 = {
	"productsHeader.products": "Продукты",
	"productsHeader.toolsAndServicesTo": "Инструменты и услуги, которые помогут вам оптимизировать стратегию интернационализации.",
	"productsGrid.benchmarkDashboard": "Дашборд бенчмарков",
	"productsGrid.interactiveChartsAndTables": "Интерактивные графики и таблицы, сравнивающие библиотеки i18n по размеру бандла, времени рендеринга и стоимости гидратации.",
	"productsGrid.bundleAnalyzer": "Анализатор бандла",
	"productsGrid.uploadYourBuildOutput": "Загрузите вывод вашей сборки и получите подробный отчет о том, какую часть бандла составляют накладные расходы i18n.",
	"productsGrid.migrationAssistant": "Помощник по миграции",
	"productsGrid.automatedCodemodsAndGuides": "Автоматизированные кодомоды и руководства для миграции между библиотеками i18n с минимальными перерывами.",
	"productsGrid.performanceMonitor": "Монитор производительности",
	"productsGrid.continuousPerformanceTrackingFor": "Непрерывное отслеживание производительности вашей реализации i18n. Получайте оповещения при ухудшении загрузки переводов.",
	"productsGrid.learnMore": "Узнать больше"
};
var settings_default$1 = {
	"settingsHeader.settings": "Настройки",
	"settingsHeader.manageYourAccountPreferences": "Управляйте настройками своего аккаунта и конфигурацией.",
	"profileSection.profile": "Профиль",
	"profileSection.displayName": "Отображаемое имя",
	"profileSection.email": "Email",
	"preferencesSection.preferences": "Настройки",
	"preferencesSection.emailNotifications": "Email-уведомления",
	"preferencesSection.receiveWeeklyBenchmarkReports": "Получать еженедельные отчеты о бенчмарках",
	"preferencesSection.darkMode": "Темный режим",
	"preferencesSection.useDarkColorScheme": "Использовать темную цветовою схему",
	"preferencesSection.defaultLanguage": "Язык по умолчанию",
	"apiAccessSection.apiAccess": "Доступ к API",
	"apiAccessSection.apiKey": "Ключ API",
	"apiAccessSection.useThisKeyTo": "Используйте этот ключ для программного доступа к API бенчмаркинга.",
	"apiAccessSection.copy": "Копировать",
	"settingsFooter.cancel": "Отмена",
	"settingsFooter.saveChanges": "Сохранить изменения"
};
var team_default$1 = {
	"teamHeader.ourTeam": "Наша команда",
	"teamHeader.meetThePeopleBehindI18n": "Познакомьтесь с людьми, стоящими за i18n Benchmark. Разнообразная команда, объединенная общей страстью к отличным инструментам для разработчиков.",
	"teamGrid.sarahChen": "Сара Чен",
	"teamGrid.founderLeadEngineer": "Основатель и ведущий инженер",
	"teamGrid.formerGoogleEngineerWith10": "Бывший инженер Google с 10-летним опытом создания систем интернационализации в масштабе.",
	"teamGrid.marcusWeber": "Маркус Вебер",
	"teamGrid.performanceEngineer": "Инженер по производительности",
	"teamGrid.specializesInJavascriptPerformanceOptimization": "Специализируется на оптимизации производительности JavaScript и методологии бенчмаркинга. Ранее работал в Vercel.",
	"teamGrid.aishaPatel": "Айша Патель",
	"teamGrid.developerAdvocate": "Адвокат разработчиков",
	"teamGrid.passionateAboutDeveloperExperienceAnd": "Увлечена опытом разработчиков и образованием. Спикер на React Conf, JSConf и i18nNext.",
	"teamGrid.tomasRodriguez": "Томас Родригес",
	"teamGrid.fullStackDeveloper": "Full-Stack разработчик",
	"teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Поддерживает инфраструктуру бенчмаркинга и пайплайн CI/CD. Участник разработки Lingui с открытым исходным кодом.",
	"teamGrid.yukiTanaka": "Юки Танака",
	"teamGrid.dataAnalyst": "Аналитик данных",
	"teamGrid.ensuresStatisticalRigorInAll": "Обеспечивает статистическую строгость всех результатов бенчмарков. Доктор прикладной статистики из Массачусетского технологического института (MIT).",
	"teamGrid.elenaKowalski": "Елена Ковальски",
	"teamGrid.communityManager": "Комьюнити-менеджер",
	"teamGrid.managesCommunityContributionsPartnershipsAnd": "Управляет вкладом сообщества, партнерствами и мероприятиями. Опыт в управлении проектами с открытым исходным кодом."
};
var route_default = {
	oopsPageNotFound: "Oops! Page not found.",
	returnToHome: "Return to Home",
	"route.couldNotMeasureHydrationDuration": "无法测量注水时长：",
	"route.oopsPageNotFound": "糟糕！找不到页面",
	"route.returnToHome": "返回首页"
};
var header_default = {
	home: "首页",
	methodology: "方法学",
	mockPages: "模拟页面",
	products: "产品",
	pricing: "价格",
	team: "团队",
	blog: "博客",
	careers: "职业",
	faq: "常见问题",
	contact: "联系我们",
	settings: "设置",
	goToGithub: "前往 GitHub"
};
var footer_default = {
	resources: "资源",
	contact: "联系",
	github: "GitHub",
	methodology: "方法学",
	contributing: "贡献",
	builtWith: "i18n Benchmark — 开源项目。使用 React, Vite 和 TanStack Router 构建。",
	anOpenSourceTestApplication: "一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。"
};
var themeToggle_default = {
	themeModeAutoSystemClick: "主题模式：自动（系统）。点击切换到浅色模式。",
	themeModeLightClick: "主题模式：浅色。点击切换到深色模式。",
	themeModeDarkClick: "主题模式：深色。点击切换到自动（系统）模式。",
	themeAuto: "主题：自动",
	themeDark: "主题：深色",
	themeLight: "主题：浅色"
};
var hero_default = {
	aTestApplicationDesignedTo: "一个测试应用程序，旨在衡量国际化库对包大小、加载性能和渲染反应性的实际影响。",
	viewResults: "查看结果"
};
var whyItMatters_default = {
	whyTheseMetricsMatter: "为什么这些指标很重要",
	bundleSize: "包大小",
	theBundleIsTheData: "Bundle 是运送给全球每一位用户的数据。更大的 Bundle 意味着更长的下载时间——尤其是在许多地区常见的缓慢 3G 连接上。i18n 库的重量差异巨大：从几 KB 到数十 KB 的运行时代码，再加上翻译文件本身。",
	renderingHydration: "渲染与注水",
	connectingALargeJson: "将大型 JSON 字典连接到每个组件会创建一个隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加庞大的翻译对象会在页面变得可交互之前增加延迟——直接影响可交互时间 (TTI)。",
	dynamicLoading: "动态加载",
	loadingAllTranslationsUpfront: "预先加载所有翻译会使初始有效载荷过载。动态（懒）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，懒加载也会带来自身的权衡：瀑布请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。"
};
var understandingImpact_default = {
	cacheInvalidation: "缓存失效：",
	contextBasedArchitecturesCan: "Context-based architectures can cause the entire app to re-render when the language changes. For large apps with thousands of components, this can lead to noticeable lag during locale switches.",
	contextBasedArchitecturesCanCause: "当本地化发生变化时，基于上下文的架构可能会导致级联重新渲染，因为即使某些组件的特定键没有变化，每个消费者也会收到通知。",
	duringServerSideRenderingThe: "在服务器端渲染期间，整个字典会被序列化到 HTML 负载中，从而增加了必须下载和注水的文件大小。",
	flashOfUntranslatedContent: "Flash of Untranslated Content (FOUC)",
	flashOfUntranslatedContentFouc: "未翻译内容闪烁 (FOUC)：",
	manyI18nLibrariesStore: "Many i18n libraries store translations in large JSON files that are loaded upfront. This can significantly increase the \"Time to Interactive\" as the browser must download and parse these files before the app can be used.",
	manyI18nLibrariesStoreTranslations: "许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当这个对象很大（数千个键）时，每个使用翻译的组件都会持有对整个字典的引用。这意味着：",
	splittingTranslationsIntoPerRoute: "将翻译拆分为按路由或按命名空间的块可以显著减少初始负载。但它引入了新的挑战：",
	theAppMustFirstLoad: "The app must first load the core library (e.g., i18next) which adds to the initial bundle size. Even \"lightweight\" libraries can add 10-20KB of minified JS.",
	theJsonMustBeParsed: "JSON 必须在每次页面加载时进行解析 —— 这会阻塞主线程。",
	theTradeOffsOfDynamic: "动态加载的权衡",
	thisTestAppProvidesA: "此测试应用提供了一个受控环境 —— 10 个具有现实内容的页面 —— 以在三个维度上比较 i18n 库：它们为 JavaScript 包增加的重量、解析和渲染翻译内容所花费的时间，以及它们的代码拆分和懒加载策略的有效性。每个库都集成到同一个应用中，因此结果具有直接可比性。",
	understandingTheImpact: "理解影响",
	updatingTranslationsRequiresCache: "Updating translations often requires a full rebuild or clearing the CDN cache, which can delay the roll-out of critical copy changes.",
	usersMayBrieflySeeTranslation: "Users may briefly see translation keys or English text while the library and translation files are being loaded.",
	waterfallRequests: "瀑布请求：",
	whatThisBenchmarkMeasures: "此基准测试测量什么",
	whyASingleLargeJson: "为什么单个大型 JSON 会损害性能"
};
var resultsTable_default = {
	bundleSize: "包大小",
	lazyLoading: "延迟加载",
	library: "Library",
	lookupTime: "查询时间",
	sampleResults: "样本结果"
};
var aboutHeader_default = {
	aboutThisBenchmark: "About This Benchmark",
	methodology: "方法学",
	thisIsAnOpenSource: "This is an open-source test application for measuring the real-world impact of internationalization libraries.",
	weDesignedThisBenchmarkTo: "我们设计这个基准是为了提供公平、可重现和有意义的 i18n 库比较。"
};
var aboutGrid_default = {
	allBenchmarksRunOn: "所有基准测试都在相同的硬件（M2 MacBook Pro, 16 GB RAM）、相同的浏览器（通过 Playwright 运行 Chromium 120）和相同的网络条件（模拟 4G）下运行。每项测试重复 50 次，我们报告 P95/P99 百分位数的平均值。",
	applicationDesign: "应用设计",
	choosingAnI18nLibrary: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
	eachI18nLibraryIsIntegrated: "每个 i18n 库都按照其官方文档和最佳实践进行集成。我们尽可能咨询维护者以确保最佳配置。相同的 React 应用，相同的 Vite 配置，相同的部署。",
	fairComparison: "公平比较",
	measurementMethodology: "测量方法学",
	methodology: "Methodology",
	testEnvironment: "测试环境",
	theBenchmarkAppHas10: "该基准测试应用有 10 个页面，包含现实内容 —— 导航、表单、动态列表和静态文本。每个页面使用 15-30 个翻译键，以代表真实世界的使用模式。",
	theSame10PageApp: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.",
	weUseBrowserNativeApis: "我们使用浏览器原生的 API（Performance Timeline, Resource Timing, Layout Instability）结合 React Profiler 数据。包大小在 gzip 后使用 source-map-explorer 测量以确保准确性。",
	whyThisExists: "Why This Exists"
};
var whatWeMeasure_default = {
	bundleSizeImpact: "包大小影响",
	duringSsrTranslationDataIs: "在 SSR 期间，翻译数据被序列化为 HTML。大型词典会增加 HTML 负载并减慢注水速度——即页面变得可交互的时刻。",
	duringSsrTranslationDataIsSerialized: "During SSR, translation data is serialized into the HTML. We measure the size of this payload and its effect on Time to Interactive (TTI).",
	howFastTheAppCan: "应用程序在运行时从一种语言切换到另一种语言的速度——包括获取新翻译、重新渲染组件和更新 DOM。",
	howFastTheAppCanSwitchFromOne: "How fast the app can switch from one language to another. We measure the re-render time and any network delays for lazy-loaded locales.",
	howMuchExtraTimeThe: "库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树中不必要的重新渲染。",
	howMuchExtraTimeTheLibraryAdds: "How much extra time the library adds to the initial page load. This includes script execution and the time to fetch/parse translation data.",
	hydrationCost: "注水成本",
	lazyLoadingEffectiveness: "延迟加载有效性",
	localeSwitchSpeed: "本地语言切换速度",
	renderingOverhead: "渲染开销",
	theAdditionalJavascriptBytes: "The additional Javascript bytes that the library adds to your production build. We measure both the library itself and its mandatory dependencies.",
	theAdditionalJavascriptBytesSent: "包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络上的下载时间。",
	whatWeMeasure: "我们测量什么",
	whetherSplittingTranslationsByRoute: "按路线或命名空间拆分翻译是否真的能减少初始负载，以及它引入了哪些权衡（瀑布请求、FOUC、缓存复杂性）。"
};
var blogHeader_default = {
	blog: "博客",
	insightsDeepDivesAnd: "来自 i18n 基准测试社区的见解、深入探讨和更新。",
	insightsTutorialsAndAnalysis: "Insights, Tutorials, and Analysis"
};
var blogList_default = {
	aStepByStepGuide: "从 react-i18next 迁移拥有 50,000 个翻译键的生产应用程序到 Lingui 的逐步指南。",
	aStepByStepGuideOnMigrating: "A step-by-step guide on migrating from legacy i18n solutions to modern, high-performance libraries.",
	aTransparentLookAtOur: "透明地了解我们的基准测试方法，包括测试环境、统计方法和可重现性。",
	aTransparentLookAtOurBenchmarking: "A transparent look at our benchmarking process, from hardware specs to measurement techniques.",
	anOverviewOfTheCurrent: "React 当前 i18n 生态系统概览，涵盖趋势、新兴模式和社区偏好。",
	anOverviewOfTheCurrentI18n: "An overview of the current i18n landscape and how different libraries stack up in 2026.",
	analysis: "Analysis",
	benchmark: "Benchmark",
	benchmarkMethodologyHowWe: "Benchmark Methodology: How We Test",
	benchmarkMethodologyHowWeTest: "基准测试方法学：我们如何测试",
	comparingI18nLibrariesIn: "Comparing i18n Libraries in 2026: A Deep Dive",
	february12026: "2026年2月1日",
	february152026: "2026年2月15日",
	february282026: "2026年2月28日",
	howToReduceYourI18n: "如何将 i18n 包大小减少 60%",
	i18nBenchmark2026Results: "i18n 基准测试 2026 结果",
	january202026: "2026年1月20日",
	march152026: "2026年3月15日",
	march82026: "2026年3月8日",
	meta: "Meta",
	migratingFromReactI18nextTo: "从 react-i18next 迁移到 Lingui",
	practicalStrategiesForOptimizingTranslation: "优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。",
	reactServerComponentsIntroduceNew: "React 服务器组件为国际化引入了新模式。我们探讨了其影响和最佳实践。",
	readMore: "阅读更多 →",
	serverComponentsAndI18nWhat: "服务器组件和 i18n：有什么变化？",
	theStateOfInternationalizationIn: "React 国际化的现状",
	tutorial: "Tutorial",
	weTested12DifferentInternationalization: "我们针对 10 个页面测试了 12 种不同的国际化库。以下是带有交互式图表的详细结果。"
};
var careersHeader_default = {
	careers: "职业",
	joinOurMission: "Join our mission to make internationalization fast, easy, and performant for everyone.",
	joinOurMissionToMake: "加入我们的使命，让网络对世界各地的每一个人都更快、更方便。"
};
var careersBenefits_default = {
	allOurWorkIs: "我们所有的工作都是开源的。在产生影响的同时建立你的公共投资组合。",
	competitivePay: "Competitive pay",
	impactful: "有影响力的",
	openSource: "开源",
	openSourceTime: "Open source time",
	percentTimeForOss: "20% time for OSS contributions",
	remoteFirst: "远程优先",
	topOfMarketCompensation: "Top-of-market compensation",
	whyJoinUs: "为什么加入我们？",
	workFromAnywhere: "Work from anywhere in the world",
	workFromAnywhereFully: "在任何地方工作。完全分布在 6 个时区的团队。",
	yourWorkDirectlyHelps: "你的工作直接帮助开发人员构建更好、更快的国际化应用程序。"
};
var openPositions_default = {
	applyNow: "Apply Now",
	backendEngineer: "Backend Engineer",
	buildAndMaintainOur: "Build and maintain our benchmarking suite and core application infrastructure.",
	buildAndMaintainThe: "构建并维护基准仪表板、比较工具和交互式可视化效果。",
	community: "Community",
	createAndMaintainDocumentation: "创建并维护有关 i18n 性能最佳实践的文档、博客文章和教育内容。",
	createComprehensiveGuidesApi: "Create comprehensive guides, API references, and tutorials for the community.",
	designAndMaintainThe: "设计并维护在每次库更新时自动运行基准测试的 CI/CD 流水线。",
	designAndScaleOur: "Design and scale our data ingestion pipelines and statistical analysis engines.",
	devOpsEngineer: "运维工程师",
	devrelEngineer: "DevRel Engineer",
	documentation: "Documentation",
	engageWithTheI18n: "Engage with the i18n community, write blog posts, and speak at conferences.",
	engineering: "Engineering",
	ensureTheAccuracyAnd: "Ensure the accuracy and reliability of our benchmarks through rigorous testing.",
	frontendDeveloper: "前端开发人员",
	fullTime: "Full-time",
	leadBenchmarkDesignAnd: "领导基准设计和实施。需要深入了解 V8 内部、浏览器性能 API 和统计分析。",
	openPositions: "Open Positions",
	partTime: "Part-time",
	qaEngineer: "QA Engineer",
	remote: "Remote",
	seniorFrontendEngineer: "Senior Frontend Engineer",
	seniorPerformanceEngineer: "高级性能工程师",
	sfRemote: "San Francisco / Remote",
	technicalWriter: "Technical Writer"
};
var contactHeader_default = {
	contactUs: "联系我们",
	getInTouch: "联系我们",
	haveIdeasFoundABug: "有想法？发现了 bug？我们很想听到你的反馈。",
	haveQuestionsOrWantTo: "有疑问或想做出贡献？我们很期待听到你的声音。"
};
var contactForm_default = {
	bugReport: "错误报告",
	contribution: "Contribution",
	email: "电子邮件",
	emailPlaceholder: "you@example.com",
	message: "留言",
	messagePlaceholder: "请输入你的消息...",
	methodologyQuestion: "Methodology Question",
	name: "姓名",
	newBenchmarkIdea: "New Benchmark Idea",
	other: "Other",
	sendMessage: "发送消息",
	subject: "主题",
	topic: "主题",
	wellGetBackTo: "我们将在 48 小时内回复您。",
	yourName: "你的姓名"
};
var faqHeader_default = {
	everythingYouNeedToKnow: "关于 i18n Benchmark，你需要了解的一切。",
	frequentlyAskedQuestions: "常见问题"
};
var faqList_default = {
	absolutelyWeWelcomeCommunity: "当然可以！我们欢迎社区做出贡献。Fork 该仓库，按照我们的模板添加您的库集成，并提交拉取请求。",
	allBenchmarksAreRun: "所有的基准测试都是使用 Playwright 在一致的硬件设置（M2 MacBook Pro）上运行的，并模拟了 4G 网络条件。每个测试运行 50 次迭代，我们报告中位数、P95 和 P99 值。",
	areTheResultsStatistically: "结果是否具有统计学意义？",
	benchmarksRunAutomaticallyVia: "基准测试在每次依赖项更新时通过 CI 自动运行，并每周在主分支上运行。结果会在 24 小时内发布到仪表板上。",
	canIContributeA: "我可以贡献一个新的库集成吗？",
	canISubmitMyOwnBenchmarks: "我可以提交自己的基准测试吗？",
	doYouOfferConsultingServices: "你们提供咨询服务吗？",
	howAreBenchmarksConducted: "基准测试是如何进行的？",
	howAreTheBenchmarks: "基准测试是如何运行的？",
	howCanIContribute: "我该如何贡献？",
	howOftenAreBenchmarksUpdated: "基准测试多久更新一次？",
	howOftenAreResults: "结果多久更新一次？",
	i18nBenchmarkIsAnOpenSource: "i18n Benchmark is an open-source project dedicated to measuring the real-world performance impact of internationalization libraries.",
	isTheDataReliable: "数据可靠吗？",
	thereAreManyWaysToContribute: "There are many ways to contribute, from submitting new benchmarks to improving our methodology documentation.",
	weCurrentlyBenchmarkReactI18next: "我们目前对 react-i18next、react-intl (FormatJS)、LinguiJS、typesafe-i18n、next-intl 和 Paraglide 进行基准测试。我们计划根据社区要求增加更多。",
	weFollowRigorousStatisticalMethodologyIncluding: "We follow rigorous statistical methodology, including outlier detection and multiple test runs to ensure accuracy.",
	weReRunAllBenchmarksWeekly: "We re-run all benchmarks weekly against the latest versions of each library.",
	weRunStandardizedTestsInIsolated: "We run standardized tests in isolated environments, measuring bundle size, render time, and memory usage across dozens of libraries.",
	weSupportReactI18nextReactIntl: "We support react-i18next, react-intl, Lingui, Tolgee, and several other popular React i18n solutions.",
	whatIsI18nBenchmark: "什么是 i18n Benchmark？",
	whatLibrariesAreCurrently: "目前测试了哪些库？",
	whichLibrariesAreCurrentlySupported: "目前支持哪些库？",
	yesCommunityBenchmarkSubmissionsAre: "Yes! Community benchmark submissions are encouraged and reviewed by our core team.",
	yesOurEnterprisePlanIncludesConsulting: "Yes, our Enterprise plan includes consulting services for optimizing your app's i18n performance.",
	yesWeUseThe: "是的。我们使用 Mann-Whitney U 检验（显着性水平为 0.05）来比较分布。我们还报告置信区间和效应大小。"
};
var pricingHeader_default = {
	pricing: "价格",
	transparentPricingForEvery: "为您 i18n 旅程的每个阶段提供透明的价格。"
};
var pricingTiers_default = {
	freeTier: "免费版",
	free: "免费",
	publicBenchmarkDashboard: "公共基准测试仪表板",
	basicLibraryComparisons: "基本库比较",
	communityForumAccess: "社区论坛访问权限",
	monthlyResultDigest: "每月结果摘要",
	getStarted: "开始使用",
	proTier: "专业版",
	perMonth: "/月",
	allFreeFeatures: "包含所有免费版功能",
	customBenchmarkConfigurations: "自定义基准测试配置",
	privateResultsDashboard: "私人结果仪表板",
	apiAccess1000Requests: "API 访问（1,000 次请求/天）",
	slackIntegration: "Slack 集成",
	subscribeToPro: "订阅专业版",
	enterpriseTier: "企业版",
	custom: "定制",
	allProFeatures: "包含所有专业版功能",
	dedicatedBenchmarkInfrastructure: "专用基准测试基础设施",
	customLibraryIntegrations: "自定义库集成",
	slaGuarantees: "SLA 保证",
	prioritySupport: "优先支持",
	contactSales: "联系销售人员"
};
var productsHeader_default = {
	products: "产品",
	toolsAndServicesTo: "帮助您优化国际化战略的工具和服务。"
};
var productsGrid_default = {
	benchmarkDashboard: "基准测试仪表板",
	interactiveChartsAndTables: "交互式图表和表格，对比了不同 i18n 库在包大小、渲染时间和注水成本方面的表现。",
	bundleAnalyzer: "包分析器",
	uploadYourBuildOutput: "上传您的构建输出，获取关于 i18n 开销在您的包中占比的详细分析。",
	migrationAssistant: "迁移助手",
	automatedCodemodsAndGuides: "自动化代码修改工具和指南，助您在 i18n 库之间平滑迁移，最大程度减少中断。",
	performanceMonitor: "性能监控器",
	continuousPerformanceTrackingFor: "对您的 i18n 实现进行持续的性能跟踪。当翻译加载速度下降时获得警报。",
	learnMore: "了解更多"
};
var settingsHeader_default = {
	manageYourAccount: "Manage your account settings and preferences.",
	manageYourAccountPreferences: "管理您的账户偏好和配置。",
	settings: "设置"
};
var profileSection_default = {
	profile: "个人资料",
	displayName: "显示名称",
	email: "电子邮件"
};
var preferencesSection_default = {
	arabicAr: "Arabic (ar)",
	chineseSimplifiedZhCn: "Chinese (Simplified, zh-CN)",
	darkMode: "深色模式",
	defaultLanguage: "默认语言",
	emailNotifications: "邮件通知",
	englishEn: "English (en)",
	frenchFr: "French (fr)",
	germanDe: "German (de)",
	japaneseJa: "Japanese (ja)",
	preferences: "偏好设置",
	receiveWeeklyBenchmark: "Receive weekly benchmark reports",
	receiveWeeklyBenchmarkReports: "接收每周基准测试报告",
	spanishEs: "Spanish (es)",
	toggleDarkMode: "Toggle dark mode",
	toggleNotifications: "Toggle Notifications",
	useDarkColorScheme: "使用深色配色方案"
};
var apiAccessSection_default = {
	apiAccess: "API 访问",
	apiKey: "API 密钥",
	useThisKeyTo: "使用此密钥以编程方式访问基准测试 API。",
	copy: "复制"
};
var settingsFooter_default = {
	cancel: "取消",
	saveChanges: "保存更改"
};
var teamHeader_default = {
	ourTeam: "我们的团队",
	meetThePeopleBehindI18n: "认识 i18n 基准测试背后的团队。一支多元化的团队，因为对优秀开发人员工具的共同热情而团结在一起。"
};
var teamGrid_default = {
	aishaPatel: "Aisha Patel",
	communityManager: "Community Manager",
	dataAnalyst: "Data Analyst",
	developerAdvocate: "Developer Advocate",
	elenaKowalski: "Elena Kowalski",
	ensuresStatisticalRigorIn: "Ensures statistical rigor in our data collection and analysis.",
	ensuresStatisticalRigorInAll: "确保所有基准测试结果的统计严谨性。麻省理工学院应用统计学博士。",
	formerGoogleEngineerWith: "Former Google engineer with a passion for web performance and open source.",
	formerGoogleEngineerWith10: "前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。",
	founderLeadEngineer: "Founder & Lead Engineer",
	fullStackDeveloper: "Full-Stack Developer",
	maintainsTheBenchmarkingInfrastructure: "Maintains the benchmarking infrastructure and CI/CD pipelines.",
	maintainsTheBenchmarkingInfrastructureAnd: "维护基准测试基础架构和 CI/CD 流水线。Lingui 的开源贡献者。",
	managesCommunityContributions: "Manages community contributions and open source outreach.",
	managesCommunityContributionsPartnershipsAnd: "管理社区贡献、合作伙伴关系和活动。具有开源治理背景。",
	marcusWeber: "Marcus Weber",
	passionateAboutDeveloperExperience: "Passionate about developer experience and building intuitive APIs.",
	passionateAboutDeveloperExperienceAnd: "热爱开发者体验和教育。React Conf、JSConf 和 i18nNext 的演讲者。",
	performanceEngineer: "Performance Engineer",
	sarahChen: "Sarah Chen",
	specializesInJavascriptPerformance: "Specializes in JavaScript performance optimization and React internals.",
	specializesInJavascriptPerformanceOptimization: "专注于 JavaScript 性能优化和基准测试方法。曾任职于 Vercel。",
	tomasRodriguez: "Tomás Rodríguez",
	yukiTanaka: "Yuki Tanaka"
};
var common_default = {
	cancel: "Cancel",
	copy: "Copy",
	"footer.anOpenSourceTestApplication": "一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。",
	"footer.builtWith": "i18n Benchmark — 开源项目。使用 React, Vite 和 TanStack Router 构建。",
	"footer.contact": "联系",
	"footer.contributing": "贡献",
	"footer.github": "GitHub",
	"footer.methodology": "方法学",
	"footer.resources": "资源",
	"header.blog": "博客",
	"header.careers": "职业",
	"header.contact": "联系我们",
	"header.faq": "常见问题",
	"header.goToGithub": "前往 GitHub",
	"header.home": "首页",
	"header.methodology": "方法学",
	"header.mockPages": "模拟页面",
	"header.pricing": "价格",
	"header.products": "产品",
	"header.settings": "设置",
	"header.team": "团队",
	mockBanner: "⚠️ 此页面仅包含用于基准测试的模拟数据。它与任何真实的业务或服务无关。",
	readMore: "Read More",
	saveChanges: "Save Changes",
	"themeToggle.themeAuto": "主题：自动",
	"themeToggle.themeDark": "主题：深色",
	"themeToggle.themeLight": "主题：浅色",
	"themeToggle.themeModeAutoSystemClick": "主题模式：自动（系统）。点击切换到浅色模式。",
	"themeToggle.themeModeDarkClick": "主题模式：深色。点击切换到自动（系统）模式。",
	"themeToggle.themeModeLightClick": "主题模式：浅色。点击切换到深色模式。"
};
var home_default = {
	"hero.aTestApplicationDesignedTo": "一个测试应用程序，旨在衡量国际化库对包大小、加载性能和渲染反应性的实际影响。",
	"hero.viewResults": "查看结果",
	"whyItMatters.whyTheseMetricsMatter": "为什么这些指标很重要",
	"whyItMatters.bundleSize": "包大小",
	"whyItMatters.theBundleIsTheData": "Bundle 是运送给全球每一位用户的数据。更大的 Bundle 意味着更长的下载时间——尤其是在许多地区常见的缓慢 3G 连接上。i18n 库的重量差异巨大：从几 KB 到数十 KB 的运行时代码，再加上翻译文件本身。",
	"whyItMatters.renderingHydration": "渲染与注水",
	"whyItMatters.connectingALargeJson": "将大型 JSON 字典连接到每个组件会创建一个隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加庞大的翻译对象会在页面变得可交互之前增加延迟——直接影响可交互时间 (TTI)。",
	"whyItMatters.dynamicLoading": "动态加载",
	"whyItMatters.loadingAllTranslationsUpfront": "预先加载所有翻译会使初始有效载荷过载。动态（懒）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，懒加载也会带来自身的权衡：瀑布请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。",
	"understandingImpact.understandingTheImpact": "理解影响",
	"understandingImpact.whyASingleLargeJson": "为什么单个大型 JSON 会损害性能",
	"understandingImpact.manyI18nLibrariesStoreTranslations": "许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当这个对象很大（数千个键）时，每个使用翻译的组件都会持有对整个字典的引用。这意味着：",
	"understandingImpact.theJsonMustBeParsed": "JSON 必须在每次页面加载时进行解析 —— 这会阻塞主线程。",
	"understandingImpact.contextBasedArchitecturesCanCause": "当本地化发生变化时，基于上下文的架构可能会导致级联重新渲染，因为即使某些组件的特定键没有变化，每个消费者也会收到通知。",
	"understandingImpact.duringServerSideRenderingThe": "在服务器端渲染期间，整个字典会被序列化到 HTML 负载中，从而增加了必须下载和注水的文件大小。",
	"understandingImpact.theTradeOffsOfDynamic": "动态加载的权衡",
	"understandingImpact.splittingTranslationsIntoPerRoute": "将翻译拆分为按路由或按命名空间的块可以显著减少初始负载。但它引入了新的挑战：",
	"understandingImpact.waterfallRequests": "瀑布请求：",
	"understandingImpact.flashOfUntranslatedContentFouc": "未翻译内容闪烁 (FOUC)：",
	"understandingImpact.cacheInvalidation": "缓存失效：",
	"understandingImpact.whatThisBenchmarkMeasures": "此基准测试测量什么",
	"understandingImpact.thisTestAppProvidesA": "此测试应用提供了一个受控环境 —— 10 个具有现实内容的页面 —— 以在三个维度上比较 i18n 库：它们为 JavaScript 包增加的重量、解析和渲染翻译内容所花费的时间，以及它们的代码拆分和懒加载策略的有效性。每个库都集成到同一个应用中，因此结果具有直接可比性。",
	"resultsTable.sampleResults": "样本结果",
	"resultsTable.bundleSize": "包大小",
	"resultsTable.lookupTime": "查询时间",
	"resultsTable.lazyLoading": "延迟加载"
};
var about_default = {
	"aboutHeader.methodology": "方法学",
	"aboutHeader.weDesignedThisBenchmarkTo": "我们设计这个基准是为了提供公平、可重现和有意义的 i18n 库比较。",
	"aboutGrid.testEnvironment": "测试环境",
	"aboutGrid.allBenchmarksRunOn": "所有基准测试都在相同的硬件（M2 MacBook Pro, 16 GB RAM）、相同的浏览器（通过 Playwright 运行 Chromium 120）和相同的网络条件（模拟 4G）下运行。每项测试重复 50 次，我们报告 P95/P99 百分位数的平均值。",
	"aboutGrid.applicationDesign": "应用设计",
	"aboutGrid.theBenchmarkAppHas10": "该基准测试应用有 10 个页面，包含现实内容 —— 导航、表单、动态列表和静态文本。每个页面使用 15-30 个翻译键，以代表真实世界的使用模式。",
	"aboutGrid.measurementMethodology": "测量方法学",
	"aboutGrid.weUseBrowserNativeApis": "我们使用浏览器原生的 API（Performance Timeline, Resource Timing, Layout Instability）结合 React Profiler 数据。包大小在 gzip 后使用 source-map-explorer 测量以确保准确性。",
	"aboutGrid.fairComparison": "公平比较",
	"aboutGrid.eachI18nLibraryIsIntegrated": "每个 i18n 库都按照其官方文档和最佳实践进行集成。我们尽可能咨询维护者以确保最佳配置。相同的 React 应用，相同的 Vite 配置，相同的部署。",
	"whatWeMeasure.bundleSizeImpact": "包大小影响",
	"whatWeMeasure.theAdditionalJavascriptBytesSent": "包含 i18n 库及其翻译文件时发送给用户的额外 JavaScript 字节。这直接影响慢速网络上的下载时间。",
	"whatWeMeasure.renderingOverhead": "渲染开销",
	"whatWeMeasure.howMuchExtraTimeThe": "库为 React 的渲染周期增加了多少额外时间。通过单个上下文提供程序注入翻译的库可能会导致整个组件树中不必要的重新渲染。",
	"whatWeMeasure.hydrationCost": "注水成本",
	"whatWeMeasure.duringSsrTranslationDataIs": "在 SSR 期间，翻译数据被序列化为 HTML。大型词典会增加 HTML 负载并减慢注水速度——即页面变得可交互的时刻。",
	"whatWeMeasure.lazyLoadingEffectiveness": "延迟加载有效性",
	"whatWeMeasure.whetherSplittingTranslationsByRoute": "按路线或命名空间拆分翻译是否真的能减少初始负载，以及它引入了哪些权衡（瀑布请求、FOUC、缓存复杂性）。",
	"whatWeMeasure.localeSwitchSpeed": "本地语言切换速度",
	"whatWeMeasure.howFastTheAppCan": "应用程序在运行时从一种语言切换到另一种语言的速度——包括获取新翻译、重新渲染组件和更新 DOM。",
	"whatWeMeasure.whatWeMeasure": "我们测量什么"
};
var blog_default = {
	"blogHeader.blog": "博客",
	"blogHeader.insightsDeepDivesAnd": "来自 i18n 基准测试社区的见解、深入探讨和更新。",
	"blogList.i18nBenchmark2026Results": "i18n 基准测试 2026 结果",
	"blogList.march152026": "2026年3月15日",
	"blogList.weTested12DifferentInternationalization": "我们针对 10 个页面测试了 12 种不同的国际化库。以下是带有交互式图表的详细结果。",
	"blogList.howToReduceYourI18n": "如何将 i18n 包大小减少 60%",
	"blogList.march82026": "2026年3月8日",
	"blogList.practicalStrategiesForOptimizingTranslation": "优化翻译包的实用策略，包括延迟加载、代码拆分和编译时优化。",
	"blogList.theStateOfInternationalizationIn": "React 国际化的现状",
	"blogList.february282026": "2026年2月28日",
	"blogList.anOverviewOfTheCurrent": "React 当前 i18n 生态系统概览，涵盖趋势、新兴模式和社区偏好。",
	"blogList.migratingFromReactI18nextTo": "从 react-i18next 迁移到 Lingui",
	"blogList.february152026": "2026年2月15日",
	"blogList.aStepByStepGuide": "从 react-i18next 迁移拥有 50,000 个翻译键的生产应用程序到 Lingui 的逐步指南。",
	"blogList.serverComponentsAndI18nWhat": "服务器组件和 i18n：有什么变化？",
	"blogList.february12026": "2026年2月1日",
	"blogList.reactServerComponentsIntroduceNew": "React 服务器组件为国际化引入了新模式。我们探讨了其影响和最佳实践。",
	"blogList.benchmarkMethodologyHowWeTest": "基准测试方法学：我们如何测试",
	"blogList.january202026": "2026年1月20日",
	"blogList.aTransparentLookAtOur": "透明地了解我们的基准测试方法，包括测试环境、统计方法和可重现性。",
	"blogList.readMore": "阅读更多 →"
};
var careers_default = {
	"careersHeader.careers": "职业",
	"careersHeader.joinOurMissionToMake": "加入我们的使命，让网络对世界各地的每一个人都更快、更方便。",
	"careersBenefits.whyJoinUs": "为什么加入我们？",
	"careersBenefits.remoteFirst": "远程优先",
	"careersBenefits.workFromAnywhereFully": "在任何地方工作。完全分布在 6 个时区的团队。",
	"careersBenefits.openSource": "开源",
	"careersBenefits.allOurWorkIs": "我们所有的工作都是开源的。在产生影响的同时建立你的公共投资组合。",
	"careersBenefits.impactful": "有影响力的",
	"careersBenefits.yourWorkDirectlyHelps": "你的工作直接帮助开发人员构建更好、更快的国际化应用程序。",
	"openPositions.openPositions": "开放职位",
	"openPositions.seniorPerformanceEngineer": "高级性能工程师",
	"openPositions.fullTime": "全职",
	"openPositions.remote": "远程",
	"openPositions.leadBenchmarkDesignAnd": "领导基准设计和实施。需要深入了解 V8 内部、浏览器性能 API 和统计分析。",
	"openPositions.technicalWriter": "技术文档工程师",
	"openPositions.partTime": "兼职",
	"openPositions.createAndMaintainDocumentation": "创建并维护有关 i18n 性能最佳实践的文档、博客文章和教育内容。",
	"openPositions.frontendDeveloper": "前端开发人员",
	"openPositions.buildAndMaintainThe": "构建并维护基准仪表板、比较工具和交互式可视化效果。",
	"openPositions.devOpsEngineer": "运维工程师",
	"openPositions.designAndMaintainThe": "设计并维护在每次库更新时自动运行基准测试的 CI/CD 流水线。",
	"openPositions.applyNow": "立即申请"
};
var contact_default = {
	"contactHeader.contactUs": "联系我们",
	"contactHeader.haveQuestionsOrWantTo": "有疑问或想做出贡献？我们很期待听到你的声音。",
	"contactForm.name": "姓名",
	"contactForm.email": "电子邮件",
	"contactForm.subject": "主题",
	"contactForm.message": "留言",
	"contactForm.sendMessage": "发送消息",
	"contactForm.wellGetBackTo": "我们将在 48 小时内回复您。"
};
var faq_default = {
	"faqHeader.frequentlyAskedQuestions": "常见问题",
	"faqHeader.everythingYouNeedTo": "关于 i18n 基准测试项目，你需要知道的一切。",
	"faqList.howAreTheBenchmarks": "基准测试是如何运行的？",
	"faqList.allBenchmarksAreRun": "所有的基准测试都是使用 Playwright 在一致的硬件设置（M2 MacBook Pro）上运行的，并模拟了 4G 网络条件。每个测试运行 50 次迭代，我们报告中位数、P95 和 P99 值。",
	"faqList.whatLibrariesAreCurrently": "目前测试了哪些库？",
	"faqList.weCurrentlyBenchmarkReactI18next": "我们目前对 react-i18next、react-intl (FormatJS)、LinguiJS、typesafe-i18n、next-intl 和 Paraglide 进行基准测试。我们计划根据社区要求增加更多。",
	"faqList.canIContributeA": "我可以贡献一个新的库集成吗？",
	"faqList.absolutelyWeWelcomeCommunity": "当然可以！我们欢迎社区做出贡献。Fork 该仓库，按照我们的模板添加您的库集成，并提交拉取请求。",
	"faqList.howOftenAreResults": "结果多久更新一次？",
	"faqList.benchmarksRunAutomaticallyVia": "基准测试在每次依赖项更新时通过 CI 自动运行，并每周在主分支上运行。结果会在 24 小时内发布到仪表板上。",
	"faqList.areTheResultsStatistically": "结果是否具有统计学意义？",
	"faqList.yesWeUseThe": "是的。我们使用 Mann-Whitney U 检验（显着性水平为 0.05）来比较分布。我们还报告置信区间和效应大小。"
};
var pricing_default = {
	"pricingHeader.pricing": "价格",
	"pricingHeader.transparentPricingForEvery": "为您 i18n 旅程的每个阶段提供透明的价格。",
	"pricingTiers.freeTier": "免费版",
	"pricingTiers.free": "免费",
	"pricingTiers.publicBenchmarkDashboard": "公共基准测试仪表板",
	"pricingTiers.basicLibraryComparisons": "基本库比较",
	"pricingTiers.communityForumAccess": "社区论坛访问权限",
	"pricingTiers.monthlyResultDigest": "每月结果摘要",
	"pricingTiers.getStarted": "开始使用",
	"pricingTiers.proTier": "专业版",
	"pricingTiers.perMonth": "/月",
	"pricingTiers.allFreeFeatures": "包含所有免费版功能",
	"pricingTiers.customBenchmarkConfigurations": "自定义基准测试配置",
	"pricingTiers.privateResultsDashboard": "私人结果仪表板",
	"pricingTiers.apiAccess1000Requests": "API 访问（1,000 次请求/天）",
	"pricingTiers.slackIntegration": "Slack 集成",
	"pricingTiers.subscribeToPro": "订阅专业版",
	"pricingTiers.enterpriseTier": "企业版",
	"pricingTiers.custom": "定制",
	"pricingTiers.allProFeatures": "包含所有专业版功能",
	"pricingTiers.dedicatedBenchmarkInfrastructure": "专用基准测试基础设施",
	"pricingTiers.customLibraryIntegrations": "自定义库集成",
	"pricingTiers.slaGuarantees": "SLA 保证",
	"pricingTiers.prioritySupport": "优先支持",
	"pricingTiers.contactSales": "联系销售人员"
};
var products_default = {
	"productsHeader.products": "产品",
	"productsHeader.toolsAndServicesTo": "帮助您优化国际化战略的工具和服务。",
	"productsGrid.benchmarkDashboard": "基准测试仪表板",
	"productsGrid.interactiveChartsAndTables": "交互式图表和表格，对比了不同 i18n 库在包大小、渲染时间和注水成本方面的表现。",
	"productsGrid.bundleAnalyzer": "包分析器",
	"productsGrid.uploadYourBuildOutput": "上传您的构建输出，获取关于 i18n 开销在您的包中占比的详细分析。",
	"productsGrid.migrationAssistant": "迁移助手",
	"productsGrid.automatedCodemodsAndGuides": "自动化代码修改工具和指南，助您在 i18n 库之间平滑迁移，最大程度减少中断。",
	"productsGrid.performanceMonitor": "性能监控器",
	"productsGrid.continuousPerformanceTrackingFor": "对您的 i18n 实现进行持续的性能跟踪。当翻译加载速度下降时获得警报。",
	"productsGrid.learnMore": "了解更多"
};
var settings_default = {
	"settingsHeader.settings": "设置",
	"settingsHeader.manageYourAccountPreferences": "管理您的账户偏好和配置。",
	"profileSection.profile": "个人资料",
	"profileSection.displayName": "显示名称",
	"profileSection.email": "电子邮件",
	"preferencesSection.preferences": "偏好设置",
	"preferencesSection.emailNotifications": "邮件通知",
	"preferencesSection.receiveWeeklyBenchmarkReports": "接收每周基准测试报告",
	"preferencesSection.darkMode": "深色模式",
	"preferencesSection.useDarkColorScheme": "使用深色配色方案",
	"preferencesSection.defaultLanguage": "默认语言",
	"apiAccessSection.apiAccess": "API 访问",
	"apiAccessSection.apiKey": "API 密钥",
	"apiAccessSection.useThisKeyTo": "使用此密钥以编程方式访问基准测试 API。",
	"apiAccessSection.copy": "复制",
	"settingsFooter.cancel": "取消",
	"settingsFooter.saveChanges": "保存更改"
};
var team_default = {
	"teamHeader.ourTeam": "我们的团队",
	"teamHeader.meetThePeopleBehindI18n": "认识 i18n 基准测试背后的团队。一支多元化的团队，因为对优秀开发人员工具的共同热情而团结在一起。",
	"teamGrid.sarahChen": "Sarah Chen",
	"teamGrid.founderLeadEngineer": "创始人兼首席工程师",
	"teamGrid.formerGoogleEngineerWith10": "前 Google 工程师，在构建大规模国际化系统方面拥有 10 年经验。",
	"teamGrid.marcusWeber": "Marcus Weber",
	"teamGrid.performanceEngineer": "性能工程师",
	"teamGrid.specializesInJavascriptPerformanceOptimization": "专注于 JavaScript 性能优化和基准测试方法。曾任职于 Vercel。",
	"teamGrid.aishaPatel": "Aisha Patel",
	"teamGrid.developerAdvocate": "开发者倡导者",
	"teamGrid.passionateAboutDeveloperExperienceAnd": "热爱开发者体验和教育。React Conf、JSConf 和 i18nNext 的演讲者。",
	"teamGrid.tomasRodriguez": "Tomás Rodríguez",
	"teamGrid.fullStackDeveloper": "全栈开发人员",
	"teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "维护基准测试基础架构和 CI/CD 流水线。Lingui 的开源贡献者。",
	"teamGrid.yukiTanaka": "Yuki Tanaka",
	"teamGrid.dataAnalyst": "数据分析师",
	"teamGrid.ensuresStatisticalRigorInAll": "确保所有基准测试结果的统计严谨性。麻省理工学院应用统计学博士。",
	"teamGrid.elenaKowalski": "Elena Kowalski",
	"teamGrid.communityManager": "社区经理",
	"teamGrid.managesCommunityContributionsPartnershipsAnd": "管理社区贡献、合作伙伴关系和活动。具有开源治理背景。"
};
var locales = {
	de: {
		route: route_default$9,
		header: header_default$9,
		footer: footer_default$9,
		themeToggle: themeToggle_default$9,
		hero: hero_default$9,
		whyItMatters: whyItMatters_default$9,
		understandingImpact: understandingImpact_default$9,
		resultsTable: resultsTable_default$9,
		aboutHeader: aboutHeader_default$9,
		aboutGrid: aboutGrid_default$9,
		whatWeMeasure: whatWeMeasure_default$9,
		blogHeader: blogHeader_default$9,
		blogList: blogList_default$9,
		careersHeader: careersHeader_default$9,
		careersBenefits: careersBenefits_default$9,
		openPositions: openPositions_default$9,
		contactHeader: contactHeader_default$9,
		contactForm: contactForm_default$9,
		faqHeader: faqHeader_default$9,
		faqList: faqList_default$9,
		pricingHeader: pricingHeader_default$9,
		pricingTiers: pricingTiers_default$9,
		productsHeader: productsHeader_default$9,
		productsGrid: productsGrid_default$9,
		settingsHeader: settingsHeader_default$9,
		profileSection: profileSection_default$9,
		preferencesSection: preferencesSection_default$9,
		apiAccessSection: apiAccessSection_default$9,
		settingsFooter: settingsFooter_default$9,
		teamHeader: teamHeader_default$9,
		teamGrid: teamGrid_default$9,
		common: common_default$9,
		...common_default$9,
		home: home_default$9,
		about: about_default$9,
		blog: blog_default$9,
		careers: careers_default$9,
		contact: contact_default$9,
		faq: faq_default$9,
		pricing: pricing_default$9,
		products: products_default$9,
		settings: settings_default$9,
		team: team_default$9
	},
	en: {
		route: route_default$8,
		header: header_default$8,
		footer: footer_default$8,
		themeToggle: themeToggle_default$8,
		hero: hero_default$8,
		whyItMatters: whyItMatters_default$8,
		understandingImpact: understandingImpact_default$8,
		resultsTable: resultsTable_default$8,
		aboutHeader: aboutHeader_default$8,
		aboutGrid: aboutGrid_default$8,
		whatWeMeasure: whatWeMeasure_default$8,
		blogHeader: blogHeader_default$8,
		blogList: blogList_default$8,
		careersHeader: careersHeader_default$8,
		careersBenefits: careersBenefits_default$8,
		openPositions: openPositions_default$8,
		contactHeader: contactHeader_default$8,
		contactForm: contactForm_default$8,
		faqHeader: faqHeader_default$8,
		faqList: faqList_default$8,
		pricingHeader: pricingHeader_default$8,
		pricingTiers: pricingTiers_default$8,
		productsHeader: productsHeader_default$8,
		productsGrid: productsGrid_default$8,
		settingsHeader: settingsHeader_default$8,
		profileSection: profileSection_default$8,
		preferencesSection: preferencesSection_default$8,
		apiAccessSection: apiAccessSection_default$8,
		settingsFooter: settingsFooter_default$8,
		teamHeader: teamHeader_default$8,
		teamGrid: teamGrid_default$8,
		common: common_default$8,
		...common_default$8,
		home: home_default$8,
		about: about_default$8,
		blog: blog_default$8,
		careers: careers_default$8,
		contact: contact_default$8,
		faq: faq_default$8,
		pricing: pricing_default$8,
		products: products_default$8,
		settings: settings_default$8,
		team: team_default$8
	},
	es: {
		route: route_default$7,
		header: header_default$7,
		footer: footer_default$7,
		themeToggle: themeToggle_default$7,
		hero: hero_default$7,
		whyItMatters: whyItMatters_default$7,
		understandingImpact: understandingImpact_default$7,
		resultsTable: resultsTable_default$7,
		aboutHeader: aboutHeader_default$7,
		aboutGrid: aboutGrid_default$7,
		whatWeMeasure: whatWeMeasure_default$7,
		blogHeader: blogHeader_default$7,
		blogList: blogList_default$7,
		careersHeader: careersHeader_default$7,
		careersBenefits: careersBenefits_default$7,
		openPositions: openPositions_default$7,
		contactHeader: contactHeader_default$7,
		contactForm: contactForm_default$7,
		faqHeader: faqHeader_default$7,
		faqList: faqList_default$7,
		pricingHeader: pricingHeader_default$7,
		pricingTiers: pricingTiers_default$7,
		productsHeader: productsHeader_default$7,
		productsGrid: productsGrid_default$7,
		settingsHeader: settingsHeader_default$7,
		profileSection: profileSection_default$7,
		preferencesSection: preferencesSection_default$7,
		apiAccessSection: apiAccessSection_default$7,
		settingsFooter: settingsFooter_default$7,
		teamHeader: teamHeader_default$7,
		teamGrid: teamGrid_default$7,
		common: common_default$7,
		...common_default$7,
		home: home_default$7,
		about: about_default$7,
		blog: blog_default$7,
		careers: careers_default$7,
		contact: contact_default$7,
		faq: faq_default$7,
		pricing: pricing_default$7,
		products: products_default$7,
		settings: settings_default$7,
		team: team_default$7
	},
	fr: {
		route: route_default$6,
		header: header_default$6,
		footer: footer_default$6,
		themeToggle: themeToggle_default$6,
		hero: hero_default$6,
		whyItMatters: whyItMatters_default$6,
		understandingImpact: understandingImpact_default$6,
		resultsTable: resultsTable_default$6,
		aboutHeader: aboutHeader_default$6,
		aboutGrid: aboutGrid_default$6,
		whatWeMeasure: whatWeMeasure_default$6,
		blogHeader: blogHeader_default$6,
		blogList: blogList_default$6,
		careersHeader: careersHeader_default$6,
		careersBenefits: careersBenefits_default$6,
		openPositions: openPositions_default$6,
		contactHeader: contactHeader_default$6,
		contactForm: contactForm_default$6,
		faqHeader: faqHeader_default$6,
		faqList: faqList_default$6,
		pricingHeader: pricingHeader_default$6,
		pricingTiers: pricingTiers_default$6,
		productsHeader: productsHeader_default$6,
		productsGrid: productsGrid_default$6,
		settingsHeader: settingsHeader_default$6,
		profileSection: profileSection_default$6,
		preferencesSection: preferencesSection_default$6,
		apiAccessSection: apiAccessSection_default$6,
		settingsFooter: settingsFooter_default$6,
		teamHeader: teamHeader_default$6,
		teamGrid: teamGrid_default$6,
		common: common_default$6,
		...common_default$6,
		home: home_default$6,
		about: about_default$6,
		blog: blog_default$6,
		careers: careers_default$6,
		contact: contact_default$6,
		faq: faq_default$6,
		pricing: pricing_default$6,
		products: products_default$6,
		settings: settings_default$6,
		team: team_default$6
	},
	it: {
		route: route_default$5,
		header: header_default$5,
		footer: footer_default$5,
		themeToggle: themeToggle_default$5,
		hero: hero_default$5,
		whyItMatters: whyItMatters_default$5,
		understandingImpact: understandingImpact_default$5,
		resultsTable: resultsTable_default$5,
		aboutHeader: aboutHeader_default$5,
		aboutGrid: aboutGrid_default$5,
		whatWeMeasure: whatWeMeasure_default$5,
		blogHeader: blogHeader_default$5,
		blogList: blogList_default$5,
		careersHeader: careersHeader_default$5,
		careersBenefits: careersBenefits_default$5,
		openPositions: openPositions_default$5,
		contactHeader: contactHeader_default$5,
		contactForm: contactForm_default$5,
		faqHeader: faqHeader_default$5,
		faqList: faqList_default$5,
		pricingHeader: pricingHeader_default$5,
		pricingTiers: pricingTiers_default$5,
		productsHeader: productsHeader_default$5,
		productsGrid: productsGrid_default$5,
		settingsHeader: settingsHeader_default$5,
		profileSection: profileSection_default$5,
		preferencesSection: preferencesSection_default$5,
		apiAccessSection: apiAccessSection_default$5,
		settingsFooter: settingsFooter_default$5,
		teamHeader: teamHeader_default$5,
		teamGrid: teamGrid_default$5,
		common: common_default$5,
		...common_default$5,
		home: home_default$5,
		about: about_default$5,
		blog: blog_default$5,
		careers: careers_default$5,
		contact: contact_default$5,
		faq: faq_default$5,
		pricing: pricing_default$5,
		products: products_default$5,
		settings: settings_default$5,
		team: team_default$5
	},
	ja: {
		route: route_default$4,
		header: header_default$4,
		footer: footer_default$4,
		themeToggle: themeToggle_default$4,
		hero: hero_default$4,
		whyItMatters: whyItMatters_default$4,
		understandingImpact: understandingImpact_default$4,
		resultsTable: resultsTable_default$4,
		aboutHeader: aboutHeader_default$4,
		aboutGrid: aboutGrid_default$4,
		whatWeMeasure: whatWeMeasure_default$4,
		blogHeader: blogHeader_default$4,
		blogList: blogList_default$4,
		careersHeader: careersHeader_default$4,
		careersBenefits: careersBenefits_default$4,
		openPositions: openPositions_default$4,
		contactHeader: contactHeader_default$4,
		contactForm: contactForm_default$4,
		faqHeader: faqHeader_default$4,
		faqList: faqList_default$4,
		pricingHeader: pricingHeader_default$4,
		pricingTiers: pricingTiers_default$4,
		productsHeader: productsHeader_default$4,
		productsGrid: productsGrid_default$4,
		settingsHeader: settingsHeader_default$4,
		profileSection: profileSection_default$4,
		preferencesSection: preferencesSection_default$4,
		apiAccessSection: apiAccessSection_default$4,
		settingsFooter: settingsFooter_default$4,
		teamHeader: teamHeader_default$4,
		teamGrid: teamGrid_default$4,
		common: common_default$4,
		...common_default$4,
		home: home_default$4,
		about: about_default$4,
		blog: blog_default$4,
		careers: careers_default$4,
		contact: contact_default$4,
		faq: faq_default$4,
		pricing: pricing_default$4,
		products: products_default$4,
		settings: settings_default$4,
		team: team_default$4
	},
	ko: {
		route: route_default$3,
		header: header_default$3,
		footer: footer_default$3,
		themeToggle: themeToggle_default$3,
		hero: hero_default$3,
		whyItMatters: whyItMatters_default$3,
		understandingImpact: understandingImpact_default$3,
		resultsTable: resultsTable_default$3,
		aboutHeader: aboutHeader_default$3,
		aboutGrid: aboutGrid_default$3,
		whatWeMeasure: whatWeMeasure_default$3,
		blogHeader: blogHeader_default$3,
		blogList: blogList_default$3,
		careersHeader: careersHeader_default$3,
		careersBenefits: careersBenefits_default$3,
		openPositions: openPositions_default$3,
		contactHeader: contactHeader_default$3,
		contactForm: contactForm_default$3,
		faqHeader: faqHeader_default$3,
		faqList: faqList_default$3,
		pricingHeader: pricingHeader_default$3,
		pricingTiers: pricingTiers_default$3,
		productsHeader: productsHeader_default$3,
		productsGrid: productsGrid_default$3,
		settingsHeader: settingsHeader_default$3,
		profileSection: profileSection_default$3,
		preferencesSection: preferencesSection_default$3,
		apiAccessSection: apiAccessSection_default$3,
		settingsFooter: settingsFooter_default$3,
		teamHeader: teamHeader_default$3,
		teamGrid: teamGrid_default$3,
		common: common_default$3,
		...common_default$3,
		home: home_default$3,
		about: about_default$3,
		blog: blog_default$3,
		careers: careers_default$3,
		contact: contact_default$3,
		faq: faq_default$3,
		pricing: pricing_default$3,
		products: products_default$3,
		settings: settings_default$3,
		team: team_default$3
	},
	pt: {
		route: route_default$2,
		header: header_default$2,
		footer: footer_default$2,
		themeToggle: themeToggle_default$2,
		hero: hero_default$2,
		whyItMatters: whyItMatters_default$2,
		understandingImpact: understandingImpact_default$2,
		resultsTable: resultsTable_default$2,
		aboutHeader: aboutHeader_default$2,
		aboutGrid: aboutGrid_default$2,
		whatWeMeasure: whatWeMeasure_default$2,
		blogHeader: blogHeader_default$2,
		blogList: blogList_default$2,
		careersHeader: careersHeader_default$2,
		careersBenefits: careersBenefits_default$2,
		openPositions: openPositions_default$2,
		contactHeader: contactHeader_default$2,
		contactForm: contactForm_default$2,
		faqHeader: faqHeader_default$2,
		faqList: faqList_default$2,
		pricingHeader: pricingHeader_default$2,
		pricingTiers: pricingTiers_default$2,
		productsHeader: productsHeader_default$2,
		productsGrid: productsGrid_default$2,
		settingsHeader: settingsHeader_default$2,
		profileSection: profileSection_default$2,
		preferencesSection: preferencesSection_default$2,
		apiAccessSection: apiAccessSection_default$2,
		settingsFooter: settingsFooter_default$2,
		teamHeader: teamHeader_default$2,
		teamGrid: teamGrid_default$2,
		common: common_default$2,
		...common_default$2,
		home: home_default$2,
		about: about_default$2,
		blog: blog_default$2,
		careers: careers_default$2,
		contact: contact_default$2,
		faq: faq_default$2,
		pricing: pricing_default$2,
		products: products_default$2,
		settings: settings_default$2,
		team: team_default$2
	},
	ru: {
		route: route_default$1,
		header: header_default$1,
		footer: footer_default$1,
		themeToggle: themeToggle_default$1,
		hero: hero_default$1,
		whyItMatters: whyItMatters_default$1,
		understandingImpact: understandingImpact_default$1,
		resultsTable: resultsTable_default$1,
		aboutHeader: aboutHeader_default$1,
		aboutGrid: aboutGrid_default$1,
		whatWeMeasure: whatWeMeasure_default$1,
		blogHeader: blogHeader_default$1,
		blogList: blogList_default$1,
		careersHeader: careersHeader_default$1,
		careersBenefits: careersBenefits_default$1,
		openPositions: openPositions_default$1,
		contactHeader: contactHeader_default$1,
		contactForm: contactForm_default$1,
		faqHeader: faqHeader_default$1,
		faqList: faqList_default$1,
		pricingHeader: pricingHeader_default$1,
		pricingTiers: pricingTiers_default$1,
		productsHeader: productsHeader_default$1,
		productsGrid: productsGrid_default$1,
		settingsHeader: settingsHeader_default$1,
		profileSection: profileSection_default$1,
		preferencesSection: preferencesSection_default$1,
		apiAccessSection: apiAccessSection_default$1,
		settingsFooter: settingsFooter_default$1,
		teamHeader: teamHeader_default$1,
		teamGrid: teamGrid_default$1,
		common: common_default$1,
		...common_default$1,
		home: home_default$1,
		about: about_default$1,
		blog: blog_default$1,
		careers: careers_default$1,
		contact: contact_default$1,
		faq: faq_default$1,
		pricing: pricing_default$1,
		products: products_default$1,
		settings: settings_default$1,
		team: team_default$1
	},
	zh: {
		route: route_default,
		header: header_default,
		footer: footer_default,
		themeToggle: themeToggle_default,
		hero: hero_default,
		whyItMatters: whyItMatters_default,
		understandingImpact: understandingImpact_default,
		resultsTable: resultsTable_default,
		aboutHeader: aboutHeader_default,
		aboutGrid: aboutGrid_default,
		whatWeMeasure: whatWeMeasure_default,
		blogHeader: blogHeader_default,
		blogList: blogList_default,
		careersHeader: careersHeader_default,
		careersBenefits: careersBenefits_default,
		openPositions: openPositions_default,
		contactHeader: contactHeader_default,
		contactForm: contactForm_default,
		faqHeader: faqHeader_default,
		faqList: faqList_default,
		pricingHeader: pricingHeader_default,
		pricingTiers: pricingTiers_default,
		productsHeader: productsHeader_default,
		productsGrid: productsGrid_default,
		settingsHeader: settingsHeader_default,
		profileSection: profileSection_default,
		preferencesSection: preferencesSection_default,
		apiAccessSection: apiAccessSection_default,
		settingsFooter: settingsFooter_default,
		teamHeader: teamHeader_default,
		teamGrid: teamGrid_default,
		common: common_default,
		...common_default,
		home: home_default,
		about: about_default,
		blog: blog_default,
		careers: careers_default,
		contact: contact_default,
		faq: faq_default,
		pricing: pricing_default,
		products: products_default,
		settings: settings_default,
		team: team_default
	}
};
function getMessages(locale) {
	return locales[locale] || locales.en;
}
var ALL_LOCALES = [
	"en",
	"fr",
	"es",
	"de",
	"it",
	"ja",
	"ko",
	"pt",
	"ru",
	"zh"
];
function TolgeeBase() {
	return Tolgee().use(FormatSimple()).updateDefaults({
		apiKey: process.env.NEXT_PUBLIC_TOLGEE_API_KEY,
		apiUrl: process.env.NEXT_PUBLIC_TOLGEE_API_URL,
		staticData: Object.fromEntries(ALL_LOCALES.map((locale) => [locale, () => Promise.resolve(getMessages(locale))]))
	});
}
var tolgee = TolgeeBase().init();
var TolgeeNextProvider = ({ language, staticData, children }) => {
	const router = useRouter();
	useEffect(() => {
		const { unsubscribe: unsubPermanentChange } = tolgee.on("permanentChange", () => {
			router.refresh();
		});
		return () => {
			unsubPermanentChange();
		};
	}, [router]);
	return jsx(TolgeeProvider, {
		tolgee,
		ssr: {
			language,
			staticData
		},
		children
	});
};
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
function AppProviders({ children, locale, staticData }) {
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
	return jsx(TolgeeNextProvider, {
		language: locale,
		staticData,
		children
	});
}
var locale = "en";
var staticData = getMessages(locale);
function Wrapper({ children }) {
	return jsx(AppProviders, {
		locale,
		staticData,
		children
	});
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(ProductsGrid, {}) });
}
export { Wrapped as default };
