import { Fragment, computed, createElementBlock, createElementVNode, createVNode, defineComponent, getCurrentInstance, h, inject, onBeforeMount, onMounted, onUnmounted, openBlock, ref, renderSlot, toDisplayString, unref, watch } from "vue";
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
	"x-tolgee-sdk-version": "7.2.1"
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
		const InContextTools = await loadInContextLib("7.2.1");
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
defineComponent({
	name: "TolgeeProvider",
	props: {
		tolgee: {
			type: Object,
			required: false
		},
		fallback: { type: [Object, String] },
		ssr: {
			type: [Object, Boolean],
			required: false
		}
	},
	setup(props) {
		const tolgeeContext = inject("tolgeeContext");
		if (props.tolgee) tolgeeContext.value.tolgee = props.tolgee;
		const tolgee = computed(() => tolgeeContext.value.tolgee);
		if (!tolgee.value) throw new Error("Tolgee instance not provided");
		if (tolgeeContext.value.isInitialRender && Boolean(props.ssr)) {
			const ssr = typeof props.ssr === "object" ? props.ssr : {};
			tolgee.value.setEmitterActive(false);
			tolgee.value.addStaticData(ssr.staticData);
			tolgee.value.changeLanguage(ssr.language);
			tolgee.value.setEmitterActive(true);
			if (!tolgee.value.isLoaded()) {
				const missingRecords = tolgee.value.getRequiredDescriptors(ssr.language).map((descriptor) => encodeCacheKey(descriptor)).filter((key) => {
					var _a;
					return !((_a = ssr.staticData) === null || _a === void 0 ? void 0 : _a[key]);
				});
				if (missingRecords.length) console.warn(`Tolgee: Missing records in "staticData" for proper SSR functionality: ${missingRecords.map((key) => `"${key}"`).join(", ")}`);
			}
		}
		onMounted(() => {
			tolgeeContext.value.isInitialRender = false;
		});
		const isLoading = ref(!tolgee.value.isLoaded());
		onBeforeMount(() => {
			tolgee.value.run().finally(() => {
				isLoading.value = false;
			});
		});
		onUnmounted(() => {
			tolgee.value.stop();
		});
		return { isLoading };
	},
	render() {
		var _a, _b, _c, _d;
		return !this.isLoading ? (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a) : ((_d = (_c = this.$slots).fallback) === null || _d === void 0 ? void 0 : _d.call(_c)) || this.fallback || null;
	}
});
var useTranslateInternal = (ns) => {
	const namespaces = getFallback(ns);
	const tolgeeContext = inject("tolgeeContext");
	const tolgee = computed(() => tolgeeContext.value.tolgee);
	if (!tolgee.value) throw new Error("Tolgee instance not provided");
	const t = ref(createTFunction());
	const subscription = tolgee.value.on("update", () => {
		t.value = createTFunction();
		isLoading.value = !tolgee.value.isLoaded(namespaces);
	});
	tolgee.value.addActiveNs(namespaces);
	onUnmounted(() => {
		subscription === null || subscription === void 0 || subscription.unsubscribe();
		tolgee.value.removeActiveNs(namespaces);
	});
	const isLoading = ref(!tolgee.value.isLoaded(namespaces));
	function createTFunction() {
		return (props) => {
			var _a;
			const fallbackNs = (_a = props.ns) !== null && _a !== void 0 ? _a : namespaces === null || namespaces === void 0 ? void 0 : namespaces[0];
			return tolgee.value.t(Object.assign(Object.assign({}, props), { ns: fallbackNs }));
		};
	}
	return {
		t,
		isLoading
	};
};
defineComponent({
	name: "T",
	props: {
		keyName: {
			type: String,
			required: true
		},
		params: Object,
		defaultValue: String,
		noWrap: {
			type: Boolean,
			default: false
		},
		ns: { type: String },
		language: { type: String }
	},
	setup() {
		const { t } = useTranslateInternal();
		return { t };
	},
	render() {
		const slotsParams = {};
		Object.keys(this.$slots).forEach((key) => {
			slotsParams[key] = this.$slots[key]();
		});
		const assignedParams = Object.assign({}, this.$props.params, slotsParams);
		const params = {
			key: this.$props.keyName,
			params: assignedParams,
			defaultValue: this.$props.defaultValue,
			noWrap: this.$props.noWrap,
			ns: this.$props.ns,
			language: this.$props.language
		};
		return this.t(params);
	}
});
var useTranslate = (namespaces) => {
	const { t: tInternal, isLoading } = useTranslateInternal(namespaces);
	return {
		t: computed(() => (...params) => {
			const props = getTranslateProps(...params);
			return tInternal.value(props);
		}),
		isLoading
	};
};
var VueTolgee = { install(app, options) {
	const tolgee = options === null || options === void 0 ? void 0 : options.tolgee;
	if (!tolgee) throw new Error("Tolgee instance not passed in options");
	const isSsrEnabled = Boolean(options === null || options === void 0 ? void 0 : options.enableSSR);
	const reactiveContext = ref({
		tolgee,
		isInitialRender: isSsrEnabled
	});
	app.provide("tolgeeContext", reactiveContext);
	if (isSsrEnabled) {
		const getOriginalTolgeeInstance = () => Object.assign(Object.assign({}, reactiveContext.value.tolgee), { t: ((...args) => {
			const props = getTranslateProps(...args);
			return tolgee.t(Object.assign({}, props));
		}) });
		const getTolgeeInstanceWithDeactivatedWrapper = () => Object.assign(Object.assign({}, reactiveContext.value.tolgee), { t: ((...args) => {
			const props = getTranslateProps(...args);
			return tolgee.t(Object.assign(Object.assign({}, props), { noWrap: true }));
		}) });
		reactiveContext.value.tolgee = getTolgeeInstanceWithDeactivatedWrapper();
		watch(() => reactiveContext.value.isInitialRender, (isInitialRender) => {
			if (!isInitialRender) reactiveContext.value.tolgee = getOriginalTolgeeInstance();
		});
	}
	reactiveContext.value.tolgee.on("cache", () => {
		reactiveContext.value.tolgee = Object.freeze(Object.assign({}, reactiveContext.value.tolgee));
	});
	app.config.globalProperties.$t = ((...args) => reactiveContext.value.tolgee.t(...args));
	app.config.globalProperties.$tolgee = reactiveContext.value.tolgee;
} };
var locales = [
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
];
function isLocale(value) {
	return locales.includes(value);
}
var urlLocale = window.location.pathname.split("/")[1] ?? "";
var tolgee = Tolgee().use(FormatSimple()).init({
	language: isLocale(urlLocale) ? urlLocale : "en",
	staticData: {
		en: () => import("./en-1qiwZGJx.js"),
		fr: () => import("../../../../locales/fr.json"),
		es: () => import("../../../../locales/es.json"),
		de: () => import("../../../../locales/de.json"),
		it: () => import("../../../../locales/it.json"),
		pt: () => import("../../../../locales/pt.json"),
		zh: () => import("../../../../locales/zh.json"),
		ja: () => import("../../../../locales/ja.json"),
		ko: () => import("../../../../locales/ko.json"),
		ru: () => import("../../../../locales/ru.json")
	}
});
function useT() {
	const { t } = useTranslate();
	return { t: ((...args) => t.value(...args)) };
}
var _hoisted_1$1 = { class: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground" };
var MockBanner_default = defineComponent({
	__name: "MockBanner",
	setup(__props) {
		const { t } = useT();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$1, toDisplayString(unref(t)("mockBanner")), 1);
		};
	}
});
var _hoisted_1 = { class: "mb-2 text-3xl font-bold text-foreground" };
var _hoisted_2 = { class: "mb-10 text-muted-foreground" };
var TeamHeader_default = defineComponent({
	__name: "TeamHeader",
	setup(__props) {
		const { t } = useT();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [
				createVNode(MockBanner_default),
				createElementVNode("h1", _hoisted_1, toDisplayString(unref(t)("team.header.title")), 1),
				createElementVNode("p", _hoisted_2, toDisplayString(unref(t)("team.header.description")), 1)
			], 64);
		};
	}
});
var Wrapper_default = defineComponent({
	__name: "Wrapper",
	setup(__props) {
		const app = getCurrentInstance()?.appContext.app;
		if (app && !app.config.globalProperties.$t) app.use(VueTolgee, { tolgee });
		return (_ctx, _cache) => {
			return renderSlot(_ctx.$slots, "default");
		};
	}
});
var TeamHeader_wrapper_default = { render() {
	return h(Wrapper_default, {}, { default: () => h(TeamHeader_default) });
} };
export { TeamHeader_wrapper_default as default };
var shared = {
	"appName": "i18n Bench",
	"siteName": "i18n Benchmark",
	"contactEmail": "contact@intlayer.org",
	"goToGithub": "Go to GitHub"
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
	"settings": "Settings"
};
var footer = {
	"title": "i18n Benchmark",
	"description": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
	"resources": "Resources",
	"github": "GitHub",
	"methodology": "Methodology",
	"contributing": "Contributing",
	"contact": "Contact",
	"builtWith": "i18n Benchmark — Open-source project. Built with Vue, Vite & a client-side router."
};
var themeToggle = {
	"auto": "Theme: Auto",
	"dark": "Theme: Dark",
	"light": "Theme: Light",
	"labelAuto": "Theme mode: auto (system). Click to switch to light mode.",
	"labelOther": "Theme mode: {mode}. Click to switch mode."
};
var mockBanner = "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.";
var home = {
	"hero": {
		"title": "i18n Benchmark",
		"description": "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
		"viewResults": "View Results",
		"methodology": "Methodology"
	},
	"whyItMatters": {
		"title": "Why These Metrics Matter",
		"bundleSizeTitle": "Bundle Size",
		"bundleSizeDesc": "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
		"renderingTitle": "Rendering & Hydration",
		"renderingDesc": "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
		"dynamicLoadingTitle": "Dynamic Loading",
		"dynamicLoadingDesc": "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
	},
	"understandingImpact": {
		"title": "Understanding the Impact",
		"singleJsonTitle": "Why a single large JSON can hurt performance",
		"singleJsonIntro": "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
		"singleJsonBullet1": "The JSON must be parsed on every page load — blocking the main thread.",
		"singleJsonBullet2": "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
		"singleJsonBullet3": "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
		"tradeOffsTitle": "The trade-offs of dynamic loading",
		"tradeOffsIntro": "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
		"waterfallLabel": "Waterfall requests:",
		"waterfallDesc": "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.",
		"foucLabel": "Flash of untranslated content (FOUC):",
		"foucDesc": "users may briefly see translation keys or a fallback language before the chunk arrives.",
		"cacheLabel": "Cache invalidation:",
		"cacheDesc": "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.",
		"measuresTitle": "What this benchmark measures",
		"measuresDesc": "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
	},
	"resultsTable": {
		"title": "Sample Results",
		"library": "Library",
		"bundleSize": "Bundle Size",
		"lookupTime": "Lookup Time",
		"lazyLoading": "Lazy Loading",
		"yes": "Yes",
		"manual": "Manual",
		"builtIn": "Built-in"
	}
};
var about = {
	"header": {
		"title": "About This Benchmark",
		"description": "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
	},
	"grid": {
		"whyExistsTitle": "Why This Exists",
		"whyExistsDesc": "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
		"methodologyTitle": "Methodology",
		"methodologyDesc": "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results."
	},
	"whatWeMeasure": {
		"title": "What We Measure",
		"bundleSizeImpact": "Bundle size impact",
		"bundleSizeImpactDesc": "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
		"renderingOverhead": "Rendering overhead",
		"renderingOverheadDesc": "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
		"hydrationCost": "Hydration cost",
		"hydrationCostDesc": "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
		"lazyLoading": "Lazy loading effectiveness",
		"lazyLoadingDesc": "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
		"localeSwitch": "Locale switch speed",
		"localeSwitchDesc": "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM."
	}
};
var blog = {
	"header": {
		"title": "Blog",
		"description": "Insights, tutorials, and analysis from the i18n community."
	},
	"list": {
		"readMore": "Read More →",
		"post1Title": "Comparing i18n Libraries in 2026: A Deep Dive",
		"post1Date": "March 15, 2026",
		"post1Excerpt": "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.",
		"post1Category": "Benchmark",
		"post2Title": "How to Reduce Your i18n Bundle by 60%",
		"post2Date": "March 8, 2026",
		"post2Excerpt": "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.",
		"post2Category": "Tutorial",
		"post3Title": "The State of Internationalization in React",
		"post3Date": "February 28, 2026",
		"post3Excerpt": "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.",
		"post3Category": "Analysis",
		"post4Title": "Migrating from react-i18next to Lingui",
		"post4Date": "February 15, 2026",
		"post4Excerpt": "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
		"post4Category": "Tutorial",
		"post5Title": "Server Components and i18n: What Changes?",
		"post5Date": "February 1, 2026",
		"post5Excerpt": "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
		"post5Category": "Analysis",
		"post6Title": "Benchmark Methodology: How We Test",
		"post6Date": "January 20, 2026",
		"post6Excerpt": "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
		"post6Category": "Meta"
	}
};
var careers = {
	"header": {
		"title": "Careers",
		"description": "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
	},
	"benefits": {
		"remoteLabel": "Remote-first",
		"remoteValue": "Work from anywhere in the world",
		"payLabel": "Competitive pay",
		"payValue": "Top-of-market compensation",
		"ossLabel": "Open source time",
		"ossValue": "20% time for OSS contributions"
	},
	"openPositions": {
		"title": "Open Positions",
		"applyNow": "Apply Now",
		"remote": "Remote",
		"fullTime": "Full-time",
		"partTime": "Part-time",
		"engineering": "Engineering",
		"documentation": "Documentation",
		"community": "Community",
		"sfRemote": "San Francisco / Remote",
		"frontendTitle": "Senior Frontend Engineer",
		"frontendDesc": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
		"backendTitle": "Backend Engineer",
		"backendDesc": "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
		"writerTitle": "Technical Writer",
		"writerDesc": "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
		"devrelTitle": "DevRel Engineer",
		"devrelDesc": "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
		"qaTitle": "QA Engineer",
		"qaDesc": "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation."
	}
};
var contact = {
	"header": {
		"title": "Get in Touch",
		"description": "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at"
	},
	"form": {
		"name": "Name",
		"yourName": "Your name",
		"email": "Email",
		"emailPlaceholder": "you@example.com",
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
};
var faq = {
	"header": {
		"title": "Frequently Asked Questions",
		"description": "Everything you need to know about i18n Benchmark."
	},
	"list": {
		"q1": "What is i18n Benchmark?",
		"a1": "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.",
		"q2": "How are benchmarks conducted?",
		"a2": "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.",
		"q3": "Which libraries are currently supported?",
		"a3": "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.",
		"q4": "Can I submit my own benchmarks?",
		"a4": "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.",
		"q5": "How often are benchmarks updated?",
		"a5": "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.",
		"q6": "Is the data reliable?",
		"a6": "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.",
		"q7": "Do you offer consulting services?",
		"a7": "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.",
		"q8": "How can I contribute?",
		"a8": "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
	}
};
var pricing = {
	"header": {
		"title": "Simple, Transparent Pricing",
		"description": "Choose the plan that fits your team. No hidden fees."
	},
	"tiers": {
		"starterName": "Starter",
		"starterPrice": "$0",
		"starterPeriod": "forever",
		"starterFeature1": "5 benchmark runs/day",
		"starterFeature2": "3 libraries",
		"starterFeature3": "Community support",
		"starterFeature4": "Public results",
		"proName": "Pro",
		"proPrice": "$29",
		"proPeriod": "/month",
		"proFeature1": "Unlimited runs",
		"proFeature2": "All libraries",
		"proFeature3": "Priority support",
		"proFeature4": "Private results",
		"proFeature5": "CI integration",
		"proFeature6": "Historical data",
		"enterpriseName": "Enterprise",
		"enterprisePrice": "Custom",
		"enterpriseFeature1": "Everything in Pro",
		"enterpriseFeature2": "On-premise option",
		"enterpriseFeature3": "SSO & SAML",
		"enterpriseFeature4": "Dedicated account manager",
		"enterpriseFeature5": "Custom SLAs",
		"enterpriseFeature6": "Audit logs",
		"enterpriseFeature7": "Training sessions",
		"contactSales": "Contact Sales",
		"getStarted": "Get Started"
	}
};
var products = {
	"header": {
		"title": "Products",
		"description": "Tools and services to streamline your internationalization workflow."
	},
	"grid": {
		"learnMore": "Learn More",
		"cliName": "Benchmark CLI",
		"cliDesc": "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
		"cliPrice": "Free",
		"cloudName": "Benchmark Cloud",
		"cloudDesc": "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
		"cloudPrice": "$29/mo",
		"enterpriseName": "Benchmark Enterprise",
		"enterpriseDesc": "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
		"enterprisePrice": "Contact Us",
		"migrationName": "Migration Assistant",
		"migrationDesc": "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
		"migrationPrice": "$99 one-time",
		"qaName": "Translation QA",
		"qaDesc": "Automated quality checks for missing translations, pluralization issues, and context errors.",
		"qaPrice": "$19/mo",
		"optimizerName": "Bundle Optimizer",
		"optimizerDesc": "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
		"optimizerPrice": "$49/mo"
	}
};
var settings = {
	"header": {
		"title": "Settings",
		"description": "Manage your account preferences and configuration."
	},
	"profile": {
		"title": "Profile",
		"displayName": "Display Name",
		"email": "Email"
	},
	"preferences": {
		"title": "Preferences",
		"emailNotifications": "Email Notifications",
		"weeklyReports": "Receive weekly benchmark reports",
		"toggleNotifications": "Toggle notifications",
		"darkMode": "Dark Mode",
		"darkColorScheme": "Use dark color scheme",
		"toggleDarkMode": "Toggle dark mode",
		"defaultLanguage": "Default Language",
		"english": "English (en)",
		"french": "French (fr)",
		"german": "German (de)",
		"spanish": "Spanish (es)",
		"japanese": "Japanese (ja)",
		"chinese": "Chinese Simplified (zh-CN)",
		"arabic": "Arabic (ar)"
	},
	"apiAccess": {
		"title": "API Access",
		"apiKey": "API Key",
		"copy": "Copy",
		"description": "Use this key to access the benchmarking API programmatically."
	},
	"footer": {
		"cancel": "Cancel",
		"saveChanges": "Save Changes"
	}
};
var team = {
	"header": {
		"title": "Our Team",
		"description": "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
	},
	"grid": {
		"member1Name": "Sarah Chen",
		"member1Role": "Founder & Lead Engineer",
		"member1Bio": "Former Google engineer with 10 years of experience building internationalization systems at scale.",
		"member2Name": "Marcus Weber",
		"member2Role": "Performance Engineer",
		"member2Bio": "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
		"member3Name": "Aisha Patel",
		"member3Role": "Developer Advocate",
		"member3Bio": "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
		"member4Name": "Tomás Rodríguez",
		"member4Role": "Full-Stack Developer",
		"member4Bio": "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
		"member5Name": "Yuki Tanaka",
		"member5Role": "Data Analyst",
		"member5Bio": "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
		"member6Name": "Elena Kowalski",
		"member6Role": "Community Manager",
		"member6Bio": "Manages community contributions, partnerships, and events. Background in open source governance."
	}
};
var notFound = {
	"title": "404",
	"description": "Oops! Page not found",
	"returnHome": "Return to Home"
};
var en_default = {
	shared,
	header,
	footer,
	themeToggle,
	mockBanner,
	home,
	about,
	blog,
	careers,
	contact,
	faq,
	pricing,
	products,
	settings,
	team,
	notFound
};
export { about, blog, careers, contact, en_default as default, faq, footer, header, home, mockBanner, notFound, pricing, products, settings, shared, team, themeToggle };
