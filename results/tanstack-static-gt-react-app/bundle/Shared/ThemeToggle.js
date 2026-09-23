import a, { Children, Fragment, cloneElement, createContext, createElement, isValidElement, useContext, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { jsx } from "react/jsx-runtime";
import { createIsomorphicFn, createMiddleware } from "@tanstack/react-start";
import { getRequest, setCookie } from "@tanstack/react-start/server";
var ApiError = class extends Error {
	constructor(error, code, message) {
		super(error);
		this.name = "ApiError";
		this.code = code;
		this.message = message;
	}
};
var defaultTimeout = 6e4;
function ensureSentence$2(text) {
	const trimmed = text.trim();
	if (!trimmed) return "";
	return /[.!?)]$/.test(trimmed) ? trimmed : `${trimmed}.`;
}
function stripSentence$2(text) {
	const trimmed = text.trim();
	let end = trimmed.length;
	while (end > 0) {
		const char = trimmed[end - 1];
		if (char !== "." && char !== "!" && char !== "?") break;
		end -= 1;
	}
	return trimmed.slice(0, end);
}
function formatDetails$2(details) {
	if (!details) return "";
	const detailText = Array.isArray(details) ? details.join(", ") : details;
	if (!detailText.trim()) return "";
	return ensureSentence$2(`Details: ${detailText}`);
}
function formatDiagnosticErrorDetails(error) {
	if (error == null) return void 0;
	return String(error);
}
function createDiagnosticMessage$2({ source, severity, whatHappened, reassurance, why, fix, wayOut, details, docsUrl }) {
	const prefix = source ? severity ? `${source} ${severity}:` : `${source}:` : severity ? `${severity}:` : "";
	const whatAndWhy = why ? `${stripSentence$2(whatHappened)} because ${stripSentence$2(why)}` : whatHappened;
	const shouldCombineWayOut = !!fix && !!wayOut && /^[a-z]/.test(stripSentence$2(wayOut));
	const messageParts = [
		whatAndWhy,
		reassurance,
		shouldCombineWayOut ? `${stripSentence$2(fix)}, or ${stripSentence$2(wayOut)}` : fix,
		shouldCombineWayOut ? void 0 : wayOut,
		formatDetails$2(details)
	].filter((part) => !!part).map(ensureSentence$2);
	if (docsUrl) messageParts.push(`Learn more: ${docsUrl}`);
	const message = messageParts.join(" ");
	return prefix ? `${prefix} ${message}` : message;
}
var defaultCacheUrl = "https://cdn.gtx.dev";
function isErrorResult(error) {
	return typeof error === "object" && error !== null && "error" in error && typeof error.error === "string";
}
function hasDecodedError(result) {
	return isErrorResult(result.error) || typeof result.error === "string";
}
function unwrapApiResult(result) {
	if (result.data !== void 0) return result.data;
	if (result.response) {
		const details = isErrorResult(result.error) ? result.error.error : typeof result.error === "string" ? result.error : result.response.statusText;
		throw new ApiError(details, result.response.status, details);
	}
	throw result.error;
}
var translate = (options) => options.client.post({
	security: [{
		scheme: "bearer",
		type: "http"
	}],
	url: "/v2/translate",
	...options,
	headers: {
		"Content-Type": "application/json",
		...options.headers
	}
});
var MAX_RETRIES = 3;
var INITIAL_DELAY_MS = 500;
var RATE_LIMIT_RETRY_DELAY_MS = 6e4;
var IDEMPOTENT_METHODS = /* @__PURE__ */ new Set([
	"GET",
	"HEAD",
	"OPTIONS",
	"PUT",
	"DELETE"
]);
var DEFAULT_TIMEOUT_MS = 6e4;
function createTimeoutFetch({ fetch: fetchImplementation = globalThis.fetch, timeoutMs = DEFAULT_TIMEOUT_MS } = {}) {
	return async (input, init) => {
		if (timeoutMs === false) return fetchImplementation(input, init);
		const request = new Request(input, init);
		const controller = new AbortController();
		const forwardAbort = () => controller.abort(request.signal.reason);
		if (request.signal.aborted) forwardAbort();
		else request.signal.addEventListener("abort", forwardAbort, { once: true });
		const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
		try {
			return await fetchImplementation(new Request(request, { signal: controller.signal }));
		} catch (error) {
			if (controller.signal.aborted && !request.signal.aborted) throw new Error(`Request timed out after ${timeoutMs}ms`);
			throw error;
		} finally {
			clearTimeout(timeoutId);
			request.signal.removeEventListener("abort", forwardAbort);
		}
	};
}
var sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
function parseDelayMs(value) {
	if (!value) return void 0;
	const seconds = Number(value.split(",")[0].split(";")[0].trim());
	return Number.isFinite(seconds) && seconds >= 0 ? seconds * 1e3 : void 0;
}
function parseRetryAfter(value) {
	const delayMs = parseDelayMs(value);
	if (delayMs !== void 0) return delayMs;
	if (!value) return void 0;
	const retryDate = Date.parse(value);
	return Number.isNaN(retryDate) ? void 0 : Math.max(retryDate - Date.now(), 0);
}
function retryDelay(response, attempt, retryPolicy) {
	if (response?.status === 429) return parseRetryAfter(response.headers.get("Retry-After")) ?? parseDelayMs(response.headers.get("RateLimit-Reset")) ?? RATE_LIMIT_RETRY_DELAY_MS;
	return INITIAL_DELAY_MS * (retryPolicy === "linear" ? attempt + 1 : 2 ** attempt);
}
function createRetryingFetch({ fetch: fetchImplementation = globalThis.fetch, retryPolicy = "exponential" } = {}) {
	return async (input, init) => {
		const request = new Request(input, init);
		const maxRetries = retryPolicy === "none" ? 0 : MAX_RETRIES;
		const isIdempotent = IDEMPOTENT_METHODS.has(request.method);
		for (let attempt = 0; attempt <= maxRetries; attempt++) {
			let response;
			try {
				response = await fetchImplementation(request.clone());
			} catch (error) {
				if (request.signal.aborted || attempt === maxRetries || !isIdempotent) throw error;
			}
			if (response && response.status !== 429 && (response.status < 500 || !isIdempotent)) return response;
			if (response && attempt === maxRetries) return response;
			if (request.signal.aborted) {
				if (response) return response;
				throw request.signal.reason;
			}
			response?.body?.cancel();
			await sleep(retryDelay(response, attempt, retryPolicy));
		}
		throw new Error("Max retries exceeded");
	};
}
var jsonBodySerializer = { bodySerializer: (body) => JSON.stringify(body, (_key, value) => typeof value === "bigint" ? value.toString() : value) };
var createSseClient = ({ onRequest, onSseError, onSseEvent, responseTransformer, responseValidator, sseDefaultRetryDelay, sseMaxRetryAttempts, sseMaxRetryDelay, sseSleepFn, url, ...options }) => {
	let lastEventId;
	const sleep = sseSleepFn ?? ((ms) => new Promise((resolve) => setTimeout(resolve, ms)));
	const createStream = async function* () {
		let retryDelay = sseDefaultRetryDelay ?? 3e3;
		let attempt = 0;
		const signal = options.signal ?? new AbortController().signal;
		while (true) {
			if (signal.aborted) break;
			attempt++;
			const headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
			if (lastEventId !== void 0) headers.set("Last-Event-ID", lastEventId);
			try {
				const requestInit = {
					redirect: "follow",
					...options,
					body: options.serializedBody,
					headers,
					signal
				};
				let request = new Request(url, requestInit);
				if (onRequest) request = await onRequest(url, requestInit);
				const response = await (options.fetch ?? globalThis.fetch)(request);
				if (!response.ok) throw new Error(`SSE failed: ${response.status} ${response.statusText}`);
				if (!response.body) throw new Error("No body in SSE response");
				const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
				let buffer = "";
				const abortHandler = () => {
					try {
						reader.cancel();
					} catch {}
				};
				signal.addEventListener("abort", abortHandler);
				try {
					while (true) {
						const { done, value } = await reader.read();
						if (done) break;
						buffer += value;
						const chunks = buffer.split("\n\n");
						buffer = chunks.pop() ?? "";
						for (const chunk of chunks) {
							const lines = chunk.split("\n");
							const dataLines = [];
							let eventName;
							for (const line of lines) if (line.startsWith("data:")) dataLines.push(line.replace(/^data:\s*/, ""));
							else if (line.startsWith("event:")) eventName = line.replace(/^event:\s*/, "");
							else if (line.startsWith("id:")) lastEventId = line.replace(/^id:\s*/, "");
							else if (line.startsWith("retry:")) {
								const parsed = Number.parseInt(line.replace(/^retry:\s*/, ""), 10);
								if (!Number.isNaN(parsed)) retryDelay = parsed;
							}
							let data;
							let parsedJson = false;
							if (dataLines.length) {
								const rawData = dataLines.join("\n");
								try {
									data = JSON.parse(rawData);
									parsedJson = true;
								} catch {
									data = rawData;
								}
							}
							if (parsedJson) {
								if (responseValidator) await responseValidator(data);
								if (responseTransformer) data = await responseTransformer(data);
							}
							onSseEvent?.({
								data,
								event: eventName,
								id: lastEventId,
								retry: retryDelay
							});
							if (dataLines.length) yield data;
						}
					}
				} finally {
					signal.removeEventListener("abort", abortHandler);
					reader.releaseLock();
				}
				break;
			} catch (error) {
				onSseError?.(error);
				if (sseMaxRetryAttempts !== void 0 && attempt >= sseMaxRetryAttempts) break;
				await sleep(Math.min(retryDelay * 2 ** (attempt - 1), sseMaxRetryDelay ?? 3e4));
			}
		}
	};
	return { stream: createStream() };
};
var separatorArrayExplode = (style) => {
	switch (style) {
		case "label": return ".";
		case "matrix": return ";";
		case "simple": return ",";
		default: return "&";
	}
};
var separatorArrayNoExplode = (style) => {
	switch (style) {
		case "form": return ",";
		case "pipeDelimited": return "|";
		case "spaceDelimited": return "%20";
		default: return ",";
	}
};
var separatorObjectExplode = (style) => {
	switch (style) {
		case "label": return ".";
		case "matrix": return ";";
		case "simple": return ",";
		default: return "&";
	}
};
var serializeArrayParam = ({ allowReserved, explode, name, style, value }) => {
	if (!explode) {
		const joinedValues = (allowReserved ? value : value.map((v) => encodeURIComponent(v))).join(separatorArrayNoExplode(style));
		switch (style) {
			case "label": return `.${joinedValues}`;
			case "matrix": return `;${name}=${joinedValues}`;
			case "simple": return joinedValues;
			default: return `${name}=${joinedValues}`;
		}
	}
	const separator = separatorArrayExplode(style);
	const joinedValues = value.map((v) => {
		if (style === "label" || style === "simple") return allowReserved ? v : encodeURIComponent(v);
		return serializePrimitiveParam({
			allowReserved,
			name,
			value: v
		});
	}).join(separator);
	return style === "label" || style === "matrix" ? separator + joinedValues : joinedValues;
};
var serializePrimitiveParam = ({ allowReserved, name, value }) => {
	if (value === void 0 || value === null) return "";
	if (typeof value === "object") throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
	return `${name}=${allowReserved ? value : encodeURIComponent(value)}`;
};
var serializeObjectParam = ({ allowReserved, explode, name, style, value, valueOnly }) => {
	if (value instanceof Date) return valueOnly ? value.toISOString() : `${name}=${value.toISOString()}`;
	if (style !== "deepObject" && !explode) {
		let values = [];
		Object.entries(value).forEach(([key, v]) => {
			values = [
				...values,
				key,
				allowReserved ? v : encodeURIComponent(v)
			];
		});
		const joinedValues = values.join(",");
		switch (style) {
			case "form": return `${name}=${joinedValues}`;
			case "label": return `.${joinedValues}`;
			case "matrix": return `;${name}=${joinedValues}`;
			default: return joinedValues;
		}
	}
	const separator = separatorObjectExplode(style);
	const joinedValues = Object.entries(value).map(([key, v]) => serializePrimitiveParam({
		allowReserved,
		name: style === "deepObject" ? `${name}[${key}]` : key,
		value: v
	})).join(separator);
	return style === "label" || style === "matrix" ? separator + joinedValues : joinedValues;
};
var PATH_PARAM_RE = /\{[^{}]+\}/g;
var defaultPathSerializer = ({ path, url: _url }) => {
	let url = _url;
	const matches = _url.match(PATH_PARAM_RE);
	if (matches) for (const match of matches) {
		let explode = false;
		let name = match.substring(1, match.length - 1);
		let style = "simple";
		if (name.endsWith("*")) {
			explode = true;
			name = name.substring(0, name.length - 1);
		}
		if (name.startsWith(".")) {
			name = name.substring(1);
			style = "label";
		} else if (name.startsWith(";")) {
			name = name.substring(1);
			style = "matrix";
		}
		const value = path[name];
		if (value === void 0 || value === null) continue;
		if (Array.isArray(value)) {
			url = url.replace(match, serializeArrayParam({
				explode,
				name,
				style,
				value
			}));
			continue;
		}
		if (typeof value === "object") {
			url = url.replace(match, serializeObjectParam({
				explode,
				name,
				style,
				value,
				valueOnly: true
			}));
			continue;
		}
		if (style === "matrix") {
			url = url.replace(match, `;${serializePrimitiveParam({
				name,
				value
			})}`);
			continue;
		}
		const replaceValue = encodeURIComponent(style === "label" ? `.${value}` : value);
		url = url.replace(match, replaceValue);
	}
	return url;
};
var getUrl = ({ baseUrl, path, query, querySerializer, url: _url }) => {
	const pathUrl = _url.startsWith("/") ? _url : `/${_url}`;
	let url = (baseUrl ?? "") + pathUrl;
	if (path) url = defaultPathSerializer({
		path,
		url
	});
	let search = query ? querySerializer(query) : "";
	if (search.startsWith("?")) search = search.substring(1);
	if (search) url += `?${search}`;
	return url;
};
function getValidRequestBody(options) {
	const hasBody = options.body !== void 0;
	if (hasBody && options.bodySerializer) {
		if ("serializedBody" in options) return options.serializedBody !== void 0 && options.serializedBody !== "" ? options.serializedBody : null;
		return options.body !== "" ? options.body : null;
	}
	if (hasBody) return options.body;
}
var getAuthToken = async (auth, callback) => {
	const token = typeof callback === "function" ? await callback(auth) : callback;
	if (!token) return;
	if (auth.scheme === "bearer") return `Bearer ${token}`;
	if (auth.scheme === "basic") return `Basic ${btoa(token)}`;
	return token;
};
var createQuerySerializer = ({ parameters = {}, ...args } = {}) => {
	const querySerializer = (queryParams) => {
		const search = [];
		if (queryParams && typeof queryParams === "object") for (const name in queryParams) {
			const value = queryParams[name];
			if (value === void 0 || value === null) continue;
			const options = parameters[name] || args;
			if (Array.isArray(value)) {
				const serializedArray = serializeArrayParam({
					allowReserved: options.allowReserved,
					explode: true,
					name,
					style: "form",
					value,
					...options.array
				});
				if (serializedArray) search.push(serializedArray);
			} else if (typeof value === "object") {
				const serializedObject = serializeObjectParam({
					allowReserved: options.allowReserved,
					explode: true,
					name,
					style: "deepObject",
					value,
					...options.object
				});
				if (serializedObject) search.push(serializedObject);
			} else {
				const serializedPrimitive = serializePrimitiveParam({
					allowReserved: options.allowReserved,
					name,
					value
				});
				if (serializedPrimitive) search.push(serializedPrimitive);
			}
		}
		return search.join("&");
	};
	return querySerializer;
};
var getParseAs = (contentType) => {
	if (!contentType) return "stream";
	const cleanContent = contentType.split(";")[0]?.trim();
	if (!cleanContent) return;
	if (cleanContent.startsWith("application/json") || cleanContent.endsWith("+json")) return "json";
	if (cleanContent === "multipart/form-data") return "formData";
	if ([
		"application/",
		"audio/",
		"image/",
		"video/"
	].some((type) => cleanContent.startsWith(type))) return "blob";
	if (cleanContent.startsWith("text/")) return "text";
};
var checkForExistence = (options, name) => {
	if (!name) return false;
	if (options.headers.has(name) || options.query?.[name] || options.headers.get("Cookie")?.includes(`${name}=`)) return true;
	return false;
};
var setAuthParams = async ({ security, ...options }) => {
	for (const auth of security) {
		if (checkForExistence(options, auth.name)) continue;
		const token = await getAuthToken(auth, options.auth);
		if (!token) continue;
		const name = auth.name ?? "Authorization";
		switch (auth.in) {
			case "query":
				if (!options.query) options.query = {};
				options.query[name] = token;
				break;
			case "cookie":
				options.headers.append("Cookie", `${name}=${token}`);
				break;
			default: options.headers.set(name, token);
		}
	}
};
var buildUrl = (options) => getUrl({
	baseUrl: options.baseUrl,
	path: options.path,
	query: options.query,
	querySerializer: typeof options.querySerializer === "function" ? options.querySerializer : createQuerySerializer(options.querySerializer),
	url: options.url
});
var mergeConfigs = (a, b) => {
	const config = {
		...a,
		...b
	};
	if (config.baseUrl?.endsWith("/")) config.baseUrl = config.baseUrl.substring(0, config.baseUrl.length - 1);
	config.headers = mergeHeaders(a.headers, b.headers);
	return config;
};
var headersEntries = (headers) => {
	const entries = [];
	headers.forEach((value, key) => {
		entries.push([key, value]);
	});
	return entries;
};
var mergeHeaders = (...headers) => {
	const mergedHeaders = new Headers();
	for (const header of headers) {
		if (!header) continue;
		const iterator = header instanceof Headers ? headersEntries(header) : Object.entries(header);
		for (const [key, value] of iterator) if (value === null) mergedHeaders.delete(key);
		else if (Array.isArray(value)) for (const v of value) mergedHeaders.append(key, v);
		else if (value !== void 0) mergedHeaders.set(key, typeof value === "object" ? JSON.stringify(value) : value);
	}
	return mergedHeaders;
};
var Interceptors = class {
	fns = [];
	clear() {
		this.fns = [];
	}
	eject(id) {
		const index = this.getInterceptorIndex(id);
		if (this.fns[index]) this.fns[index] = null;
	}
	exists(id) {
		const index = this.getInterceptorIndex(id);
		return Boolean(this.fns[index]);
	}
	getInterceptorIndex(id) {
		if (typeof id === "number") return this.fns[id] ? id : -1;
		return this.fns.indexOf(id);
	}
	update(id, fn) {
		const index = this.getInterceptorIndex(id);
		if (this.fns[index]) {
			this.fns[index] = fn;
			return id;
		}
		return false;
	}
	use(fn) {
		this.fns.push(fn);
		return this.fns.length - 1;
	}
};
var createInterceptors = () => ({
	error: new Interceptors(),
	request: new Interceptors(),
	response: new Interceptors()
});
var defaultQuerySerializer = createQuerySerializer({
	allowReserved: false,
	array: {
		explode: true,
		style: "form"
	},
	object: {
		explode: true,
		style: "deepObject"
	}
});
var defaultHeaders = { "Content-Type": "application/json" };
var createConfig = (override = {}) => ({
	...jsonBodySerializer,
	headers: defaultHeaders,
	parseAs: "auto",
	querySerializer: defaultQuerySerializer,
	...override
});
var createClient = (config = {}) => {
	let _config = mergeConfigs(createConfig(), config);
	const getConfig = () => ({ ..._config });
	const setConfig = (config) => {
		_config = mergeConfigs(_config, config);
		return getConfig();
	};
	const interceptors = createInterceptors();
	const beforeRequest = async (options) => {
		const opts = {
			..._config,
			...options,
			fetch: options.fetch ?? _config.fetch ?? globalThis.fetch,
			headers: mergeHeaders(_config.headers, options.headers),
			serializedBody: void 0
		};
		if (opts.security) await setAuthParams({
			...opts,
			security: opts.security
		});
		if (opts.requestValidator) await opts.requestValidator(opts);
		if (opts.body !== void 0 && opts.bodySerializer) opts.serializedBody = opts.bodySerializer(opts.body);
		if (opts.body === void 0 || opts.serializedBody === "") opts.headers.delete("Content-Type");
		return {
			opts,
			url: buildUrl(opts)
		};
	};
	const request = async (options) => {
		const { opts, url } = await beforeRequest(options);
		const requestInit = {
			redirect: "follow",
			...opts,
			body: getValidRequestBody(opts)
		};
		let request = new Request(url, requestInit);
		for (const fn of interceptors.request.fns) if (fn) request = await fn(request, opts);
		const _fetch = opts.fetch;
		let response;
		try {
			response = await _fetch(request);
		} catch (error) {
			let finalError = error;
			for (const fn of interceptors.error.fns) if (fn) finalError = await fn(error, void 0, request, opts);
			finalError = finalError || {};
			if (opts.throwOnError) throw finalError;
			return opts.responseStyle === "data" ? void 0 : {
				error: finalError,
				request,
				response: void 0
			};
		}
		for (const fn of interceptors.response.fns) if (fn) response = await fn(response, request, opts);
		const result = {
			request,
			response
		};
		if (response.ok) {
			const parseAs = (opts.parseAs === "auto" ? getParseAs(response.headers.get("Content-Type")) : opts.parseAs) ?? "json";
			if (response.status === 204 || response.headers.get("Content-Length") === "0") {
				let emptyData;
				switch (parseAs) {
					case "arrayBuffer":
					case "blob":
					case "text":
						emptyData = await response[parseAs]();
						break;
					case "formData":
						emptyData = new FormData();
						break;
					case "stream":
						emptyData = response.body;
						break;
					default: emptyData = {};
				}
				return opts.responseStyle === "data" ? emptyData : {
					data: emptyData,
					...result
				};
			}
			let data;
			switch (parseAs) {
				case "arrayBuffer":
				case "blob":
				case "formData":
				case "json":
				case "text":
					data = await response[parseAs]();
					break;
				case "stream": return opts.responseStyle === "data" ? response.body : {
					data: response.body,
					...result
				};
			}
			if (parseAs === "json") {
				if (opts.responseValidator) await opts.responseValidator(data);
				if (opts.responseTransformer) data = await opts.responseTransformer(data);
			}
			return opts.responseStyle === "data" ? data : {
				data,
				...result
			};
		}
		const textError = await response.text();
		let jsonError;
		try {
			jsonError = JSON.parse(textError);
		} catch {}
		const error = jsonError ?? textError;
		let finalError = error;
		for (const fn of interceptors.error.fns) if (fn) finalError = await fn(error, response, request, opts);
		finalError = finalError || {};
		if (opts.throwOnError) throw finalError;
		return opts.responseStyle === "data" ? void 0 : {
			error: finalError,
			...result
		};
	};
	const makeMethodFn = (method) => (options) => request({
		...options,
		method
	});
	const makeSseFn = (method) => async (options) => {
		const { opts, url } = await beforeRequest(options);
		return createSseClient({
			...opts,
			body: opts.body,
			headers: opts.headers,
			method,
			onRequest: async (url, init) => {
				let request = new Request(url, init);
				for (const fn of interceptors.request.fns) if (fn) request = await fn(request, opts);
				return request;
			},
			url
		});
	};
	return {
		buildUrl,
		connect: makeMethodFn("CONNECT"),
		delete: makeMethodFn("DELETE"),
		get: makeMethodFn("GET"),
		getConfig,
		head: makeMethodFn("HEAD"),
		interceptors,
		options: makeMethodFn("OPTIONS"),
		patch: makeMethodFn("PATCH"),
		post: makeMethodFn("POST"),
		put: makeMethodFn("PUT"),
		request,
		setConfig,
		sse: {
			connect: makeSseFn("CONNECT"),
			delete: makeSseFn("DELETE"),
			get: makeSseFn("GET"),
			head: makeSseFn("HEAD"),
			options: makeSseFn("OPTIONS"),
			patch: makeSseFn("PATCH"),
			post: makeSseFn("POST"),
			put: makeSseFn("PUT"),
			trace: makeSseFn("TRACE")
		},
		trace: makeMethodFn("TRACE")
	};
};
function createApiClient(config) {
	const headers = new Headers({ "gt-api-version": config.apiVersion ?? "2026-03-06.v1" });
	if (config.apiKey) headers.set("Authorization", `Bearer ${config.apiKey}`);
	if (config.projectId) headers.set("gt-project-id", config.projectId);
	return createClient({
		baseUrl: config.baseUrl,
		fetch: createRetryingFetch({
			fetch: createTimeoutFetch({
				fetch: config.fetch,
				timeoutMs: config.timeoutMs
			}),
			retryPolicy: config.retryPolicy
		}),
		headers
	});
}
var TYPE = {
	literal: 0,
	argument: 1,
	number: 2,
	date: 3,
	time: 4,
	select: 5,
	plural: 6,
	pound: 7,
	tag: 8
};
var SKELETON_TYPE = {
	number: 0,
	dateTime: 1
};
var FRACTION_PRECISION = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/;
var SIGNIFICANT_PRECISION = /^@+(\+|#+)?[rs]?$/;
var INVALID_SIGNIFICANT_PRECISION = /^(?:(?:\+|#+)[rs]?|[rs])$/;
var INTEGER_WIDTH = /(\*)(0+)|(#+)(0+)|(0+)/g;
var NUMBER_SKELETON_WHITE_SPACE = /[\t-\r \x85\u200E\u200F\u2028\u2029]+/u;
var DATE_TIME_FIELD = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F|[abB]{1,5}|[hHkK]{1,2}|w{1,2}|W|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
var ROUNDING_MODES = {
	floor: "floor",
	ceiling: "ceil",
	down: "trunc",
	up: "expand",
	"half-even": "halfEven",
	"half-down": "halfTrunc",
	"half-up": "halfExpand"
};
var HOUR_CYCLES = {
	h: "h12",
	H: "h23",
	K: "h11",
	k: "h24"
};
function parseNumberSkeletonTokens(skeleton) {
	const stringTokens = skeleton.split(NUMBER_SKELETON_WHITE_SPACE).filter(Boolean);
	if (stringTokens.length === 0) throw new SyntaxError("Number skeleton cannot be empty.");
	return stringTokens.map((token) => {
		const [stem, ...options] = token.split("/");
		if (options.some((option) => option.length === 0)) throw new SyntaxError(`Invalid number skeleton token: ${token}.`);
		return {
			stem,
			options
		};
	});
}
function parseNumberSkeletonOptions(tokens) {
	const result = {};
	for (const token of tokens) {
		if (!token.stem) throw new SyntaxError("Number skeleton token stem cannot be empty.");
		const option = token.options[0];
		switch (token.stem) {
			case "percent":
			case "%":
				result.style = "percent";
				continue;
			case "%x100":
				result.style = "percent";
				result.scale = 100;
				continue;
			case "currency":
				result.style = "currency";
				result.currency = option;
				continue;
			case "group-off":
			case ",_":
				result.useGrouping = false;
				continue;
			case "group-auto":
			case "group-min2":
			case "group-on-aligned":
			case ",!": continue;
			case "precision-integer":
			case ".":
				result.maximumFractionDigits = 0;
				continue;
			case "measure-unit":
			case "unit":
				requireOption(token);
				result.style = "unit";
				result.unit = option.replace(/^(.*?)-/, "");
				continue;
			case "compact-short":
			case "K":
				result.notation = "compact";
				result.compactDisplay = "short";
				continue;
			case "compact-long":
			case "KK":
				result.notation = "compact";
				result.compactDisplay = "long";
				continue;
			case "scientific":
			case "engineering":
				result.notation = token.stem;
				for (const notationOption of token.options) applySign(result, notationOption);
				continue;
			case "notation-simple":
				result.notation = "standard";
				continue;
			case "unit-width-narrow":
				result.currencyDisplay = "narrowSymbol";
				result.unitDisplay = "narrow";
				continue;
			case "unit-width-short":
				result.currencyDisplay = "code";
				result.unitDisplay = "short";
				continue;
			case "unit-width-full-name":
				result.currencyDisplay = "name";
				result.unitDisplay = "long";
				continue;
			case "unit-width-iso-code":
				result.currencyDisplay = "symbol";
				continue;
			case "scale":
				result.scale = parseFloat(option ?? "");
				continue;
			case "integer-width":
				requireOption(token);
				if (token.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
				applyIntegerWidth(result, option);
				continue;
		}
		if (token.stem.slice(0, 14) === "rounding-mode-") {
			const roundingMode = ROUNDING_MODES[token.stem.slice(14)];
			if (typeof roundingMode === "string") result.roundingMode = roundingMode;
			continue;
		}
		if (/^0+$/u.test(token.stem)) {
			result.minimumIntegerDigits = token.stem.length;
			continue;
		}
		if (applyFractionPrecision(result, token)) continue;
		if (SIGNIFICANT_PRECISION.test(token.stem)) {
			Object.assign(result, parseSignificantPrecision(token.stem));
			continue;
		}
		if (INVALID_SIGNIFICANT_PRECISION.test(token.stem)) throw new SyntaxError("Significant precision must start with @.");
		if (applySign(result, token.stem)) continue;
		if (applyConciseScientific(result, token.stem)) continue;
	}
	return result;
}
function requireOption(token) {
	if (!token.options[0]) throw new SyntaxError(`${token.stem} requires an option.`);
}
function applySign(result, stem) {
	switch (stem) {
		case "sign-auto":
			result.signDisplay = "auto";
			return true;
		case "sign-accounting":
		case "()":
			result.currencySign = "accounting";
			return true;
		case "sign-always":
		case "+!":
			result.signDisplay = "always";
			return true;
		case "sign-accounting-always":
		case "()!":
			result.signDisplay = "always";
			result.currencySign = "accounting";
			return true;
		case "sign-except-zero":
		case "+?":
			result.signDisplay = "exceptZero";
			return true;
		case "sign-accounting-except-zero":
		case "()?":
			result.signDisplay = "exceptZero";
			result.currencySign = "accounting";
			return true;
		case "sign-never":
		case "+_":
			result.signDisplay = "never";
			return true;
		default: return false;
	}
}
function applyConciseScientific(result, source) {
	if (source[0] !== "E") return false;
	const match = /^(E{1,2})(\+!|\+\?)?(0+)$/u.exec(source);
	if (!match) throw new SyntaxError("Malformed concise eng/scientific notation");
	result.notation = match[1] === "EE" ? "engineering" : "scientific";
	if (match[2]) applySign(result, match[2]);
	result.minimumIntegerDigits = match[3].length;
	return true;
}
function applyIntegerWidth(result, width) {
	width.replace(INTEGER_WIDTH, (_match, star, minimum, maximum, maximumMinimum, exact) => {
		if (star && minimum) result.minimumIntegerDigits = minimum.length;
		else if (maximum && maximumMinimum) throw new Error("We currently do not support maximum integer digits");
		else if (exact) throw new Error("We currently do not support exact integer digits");
		return "";
	});
}
function applyFractionPrecision(result, token) {
	const match = FRACTION_PRECISION.exec(token.stem);
	if (!match) return false;
	if (token.options.length > 1) throw new SyntaxError("Fraction precision accepts at most one option.");
	const [, zeros, unlimited, hashes, required, optional] = match;
	if (unlimited === "*") result.minimumFractionDigits = zeros.length;
	else if (hashes) result.maximumFractionDigits = hashes.length;
	else if (required && optional) {
		result.minimumFractionDigits = required.length;
		result.maximumFractionDigits = required.length + optional.length;
	} else {
		result.minimumFractionDigits = zeros.length;
		result.maximumFractionDigits = zeros.length;
	}
	if (token.options[0] === "w") result.trailingZeroDisplay = "stripIfInteger";
	else if (token.options[0]) Object.assign(result, parseSignificantPrecision(token.options[0]));
	return true;
}
function parseSignificantPrecision(precision) {
	const result = {};
	if (precision.endsWith("r")) result.roundingPriority = "morePrecision";
	if (precision.endsWith("s")) result.roundingPriority = "lessPrecision";
	if (INVALID_SIGNIFICANT_PRECISION.test(precision)) throw new SyntaxError("Significant precision must start with @.");
	if (!SIGNIFICANT_PRECISION.test(precision)) return result;
	const significant = precision.replace(/[rs]$/u, "");
	const required = significant.match(/^@+/u)?.[0] ?? "";
	const optional = significant.slice(required.length);
	if (required) result.minimumSignificantDigits = required.length;
	if (optional === "+") return result;
	if (optional[0] === "#") result.maximumSignificantDigits = required.length + optional.length;
	else if (required) result.maximumSignificantDigits = required.length;
	return result;
}
function parseDateTimeSkeletonOptions(skeleton) {
	const result = {};
	for (const [field] of skeleton.matchAll(DATE_TIME_FIELD)) {
		const length = field.length;
		switch (field[0]) {
			case "G":
				result.era = length === 4 ? "long" : length === 5 ? "narrow" : "short";
				break;
			case "y":
				result.year = length === 2 ? "2-digit" : "numeric";
				break;
			case "M":
			case "L":
				result.month = [
					"numeric",
					"2-digit",
					"short",
					"long",
					"narrow"
				][length - 1];
				break;
			case "d":
				result.day = length === 2 ? "2-digit" : "numeric";
				break;
			case "E":
				result.weekday = length === 4 ? "long" : length === 5 ? "narrow" : "short";
				break;
			case "e":
			case "c":
				if (length < 4) throw unsupported(field, "weekday");
				result.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][length - 4];
				break;
			case "a":
				result.hour12 = true;
				break;
			case "h":
			case "H":
			case "K":
			case "k":
				result.hourCycle = HOUR_CYCLES[field[0]];
				result.hour = length === 2 ? "2-digit" : "numeric";
				break;
			case "m":
				result.minute = length === 2 ? "2-digit" : "numeric";
				break;
			case "s":
				result.second = length === 2 ? "2-digit" : "numeric";
				break;
			case "z":
				result.timeZoneName = length < 4 ? "short" : "long";
				break;
			default: throw unsupported(field, "date/time");
		}
	}
	return result;
}
function resolveLocaleHourSkeleton(skeleton, locale) {
	if (!locale || !/[jJ]/u.test(skeleton)) return skeleton;
	const localeHourSymbol = getLocaleHourSymbol(locale);
	let resolvedSkeleton = "";
	for (let index = 0; index < skeleton.length; index += 1) {
		const character = skeleton[index];
		if (character === "j") {
			let extraLength = 0;
			while (skeleton[index + 1] === character) {
				extraLength += 1;
				index += 1;
			}
			const hourLength = 1 + (extraLength & 1);
			const dayPeriodLength = localeHourSymbol === "H" || localeHourSymbol === "k" ? 0 : extraLength < 2 ? 1 : 3 + (extraLength >> 1);
			resolvedSkeleton = localeHourSymbol.repeat(hourLength) + resolvedSkeleton + "a".repeat(dayPeriodLength);
		} else if (character === "J") resolvedSkeleton += "H";
		else resolvedSkeleton += character;
	}
	return resolvedSkeleton;
}
function getLocaleHourSymbol(locale) {
	const localeWithHourCycles = locale;
	switch (localeWithHourCycles.hourCycle ?? localeWithHourCycles.hourCycles?.[0] ?? new Intl.DateTimeFormat(locale.toString(), { hour: "numeric" }).resolvedOptions().hourCycle) {
		case "h11": return "K";
		case "h12": return "h";
		case "h24": return "k";
		default: return "H";
	}
}
function unsupported(field, kind) {
	return /* @__PURE__ */ new RangeError(`Unsupported ${kind} skeleton field: ${field}.`);
}
var ASCII_LETTER = /^[A-Za-z]$/u;
var TAG_NAME_CHARACTER = /^[-.0-9_A-Za-z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\u{EFFFF}]$/u;
function isAsciiLetter(character) {
	return ASCII_LETTER.test(character ?? "");
}
function isTagNameCharacter(character) {
	return TAG_NAME_CHARACTER.test(character);
}
var GRAMMAR_WHITE_SPACE = /[\t-\r \x85\u200E\u200F\u2028\u2029]/u;
var IDENTIFIER_BOUNDARY = /[\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\x21-\x2F\x3A-\x40\x5B-\x5E\x60\x7B-\x7E\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E-\uFD3F\uFE45-\uFE46]/u;
var IcuParser = class {
	constructor(message, options) {
		this.message = message;
		this.options = options;
		this.index = 0;
	}
	parse() {
		return this.parseMessage(false, false, false);
	}
	parseMessage(nested, inPlural, expectingCloseTag) {
		const elements = [];
		while (!this.atEnd()) {
			const character = this.current();
			if (character === "{") elements.push(this.parseArgument(expectingCloseTag));
			else if (character === "}" && nested) break;
			else if (character === "#" && inPlural) {
				const start = this.index;
				this.index += 1;
				elements.push(this.withLocation({ type: TYPE.pound }, start, this.index));
			} else if (character === "<" && !this.options.ignoreTag && this.peek() === "/") {
				if (expectingCloseTag) break;
				this.fail("UNMATCHED_CLOSING_TAG");
			} else if (character === "<" && !this.options.ignoreTag && isAsciiLetter(this.peek())) elements.push(this.parseTag(inPlural));
			else elements.push(this.parseLiteral(nested, inPlural));
		}
		return elements;
	}
	parseLiteral(nested, inPlural) {
		const start = this.index;
		let value = "";
		while (!this.atEnd()) {
			const quote = this.tryParseQuote(inPlural);
			if (quote !== null) {
				value += quote;
				continue;
			}
			const character = this.current();
			if (character === "{" || character === "}" && nested || character === "#" && inPlural || character === "<" && !this.options.ignoreTag && (isAsciiLetter(this.peek()) || this.peek() === "/")) break;
			value += character;
			this.index += character.length;
		}
		return this.withLocation({
			type: TYPE.literal,
			value
		}, start, this.index);
	}
	tryParseQuote(inPlural) {
		if (this.current() !== "'") return null;
		const next = this.peek();
		if (next === "'") {
			this.index += 2;
			return "'";
		}
		if (!"{}<>".includes(next) && (next !== "#" || !inPlural)) return null;
		this.index += 1;
		let value = "";
		while (!this.atEnd()) {
			const character = this.current();
			if (character === "'") {
				if (this.peek() === "'") {
					value += "'";
					this.index += 2;
					continue;
				}
				this.index += 1;
				break;
			}
			value += character;
			this.index += character.length;
		}
		return value;
	}
	parseTag(inPlural) {
		const start = this.index;
		this.index += 1;
		const tagName = this.readTagName();
		this.skipSpace();
		if (this.consume("/>")) return this.withLocation({
			type: TYPE.literal,
			value: `<${tagName}/>`
		}, start, this.index);
		if (!this.consume(">")) this.fail("INVALID_TAG", start);
		const children = this.parseMessage(true, inPlural, true);
		const closingTagStart = this.index;
		if (!this.consume("</")) this.fail("UNCLOSED_TAG", start);
		const closingNameStart = this.index;
		if (!isAsciiLetter(this.current())) this.failAt("INVALID_TAG", closingTagStart, this.index);
		if (this.readTagName() !== tagName) this.fail("UNMATCHED_CLOSING_TAG", closingNameStart);
		this.skipSpace();
		if (!this.consume(">")) this.failAt("INVALID_TAG", closingTagStart, this.index);
		return this.withLocation({
			type: TYPE.tag,
			value: tagName,
			children
		}, start, this.index);
	}
	readTagName() {
		const start = this.index;
		if (!isAsciiLetter(this.current())) this.fail("INVALID_TAG", start);
		this.index += 1;
		while (!this.atEnd() && isTagNameCharacter(this.current())) this.index += this.current().length;
		return this.message.slice(start, this.index);
	}
	parseArgument(expectingCloseTag) {
		const start = this.index;
		this.index += 1;
		this.skipSpace();
		if (this.atEnd()) this.fail("EXPECT_ARGUMENT_CLOSING_BRACE", start);
		if (this.current() === "}") {
			this.index += 1;
			this.fail("EMPTY_ARGUMENT", start);
		}
		const value = this.readIdentifier();
		if (!value) this.fail("MALFORMED_ARGUMENT", start);
		this.skipSpace();
		if (this.consume("}")) return this.withLocation({
			type: TYPE.argument,
			value
		}, start, this.index);
		if (this.atEnd()) this.fail("EXPECT_ARGUMENT_CLOSING_BRACE", start);
		if (!this.consume(",")) this.fail("MALFORMED_ARGUMENT", start);
		this.skipSpace();
		if (this.atEnd()) this.fail("EXPECT_ARGUMENT_CLOSING_BRACE", start);
		const argumentTypeStart = this.index;
		const argumentType = this.readIdentifier();
		const argumentTypeEnd = this.index;
		if (!argumentType) this.fail("EXPECT_ARGUMENT_TYPE", argumentTypeStart);
		switch (argumentType) {
			case "number":
			case "date":
			case "time": return this.parseSimpleArgument(start, value, argumentType);
			case "plural":
			case "selectordinal":
			case "select": return this.parseChoiceArgument(start, value, argumentType, argumentTypeEnd, expectingCloseTag);
			default: this.fail("INVALID_ARGUMENT_TYPE", argumentTypeStart);
		}
	}
	parseSimpleArgument(start, value, argumentType) {
		this.skipSpace();
		let style = null;
		let rawStyle;
		let styleStart = 0;
		let styleEnd = 0;
		if (this.consume(",")) {
			this.skipSpace();
			styleStart = this.index;
			rawStyle = this.readSimpleStyle().replace(/\s+$/u, "");
			if (!rawStyle) this.fail("EXPECT_ARGUMENT_STYLE");
			styleEnd = this.index;
		}
		if (!this.consume("}")) this.fail("EXPECT_ARGUMENT_CLOSING_BRACE", start);
		if (rawStyle) if (rawStyle.slice(0, 2) === "::") {
			const skeleton = rawStyle.slice(2).replace(/^\s+/u, "");
			const styleLocation = this.location(styleStart, styleEnd);
			if (argumentType === "number") {
				let tokens;
				try {
					tokens = parseNumberSkeletonTokens(skeleton);
				} catch {
					this.failAt("INVALID_NUMBER_SKELETON", styleStart, styleEnd);
				}
				style = {
					type: SKELETON_TYPE.number,
					tokens,
					...styleLocation ? { location: styleLocation } : {},
					parsedOptions: this.options.shouldParseSkeletons ? parseNumberSkeletonOptions(tokens) : {}
				};
			} else {
				if (!skeleton) this.failAt("EXPECT_DATE_TIME_SKELETON", start, this.index);
				const pattern = resolveLocaleHourSkeleton(skeleton, this.options.locale);
				style = {
					type: SKELETON_TYPE.dateTime,
					pattern,
					...styleLocation ? { location: styleLocation } : {},
					parsedOptions: this.options.shouldParseSkeletons ? parseDateTimeSkeletonOptions(pattern) : {}
				};
			}
		} else style = rawStyle;
		const type = argumentType === "number" ? TYPE.number : argumentType === "date" ? TYPE.date : TYPE.time;
		return this.withLocation({
			type,
			value,
			style
		}, start, this.index);
	}
	readSimpleStyle() {
		const start = this.index;
		while (!this.atEnd()) {
			const character = this.current();
			if (character === "'") {
				this.index += 1;
				const quotedContentStart = this.index;
				while (!this.atEnd() && this.current() !== "'") this.index += this.current().length;
				if (this.atEnd()) this.fail("UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", quotedContentStart);
				this.index += 1;
			} else if (character === "}") break;
			else this.index += character.length;
		}
		return this.message.slice(start, this.index);
	}
	parseChoiceArgument(start, value, argumentType, argumentTypeEnd, expectingCloseTag) {
		this.skipSpace();
		if (!this.consume(",")) this.failAt("EXPECT_SELECT_ARGUMENT_OPTIONS", argumentTypeEnd, argumentTypeEnd);
		this.skipSpace();
		let offset = 0;
		const firstSelectorStart = this.index;
		let selector = this.readIdentifier();
		if (argumentType !== "select" && selector === "offset") {
			if (!this.consume(":")) this.fail("EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE");
			this.skipSpace();
			offset = Number(this.readIntegerToken("EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"));
			this.skipSpace();
			selector = this.readIdentifier();
		}
		const options = Object.create(null);
		let hasOptions = false;
		let selectorStart = firstSelectorStart;
		while (selector || argumentType !== "select" && this.current() === "=") {
			if (!selector && this.consume("=")) selector = `=${this.readIntegerToken("EXPECT_PLURAL_ARGUMENT_SELECTOR", "INVALID_PLURAL_ARGUMENT_SELECTOR")}`;
			if (selector in options) this.failAt(argumentType === "select" ? "DUPLICATE_SELECT_ARGUMENT_SELECTOR" : "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", selectorStart, this.index);
			this.skipSpace();
			const optionStart = this.index;
			if (!this.consume("{")) this.fail(argumentType === "select" ? "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT" : "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT");
			const optionValue = this.parseMessage(true, argumentType !== "select", expectingCloseTag);
			if (!this.consume("}")) this.fail("EXPECT_ARGUMENT_CLOSING_BRACE", optionStart);
			const optionLocation = this.location(optionStart, this.index);
			options[selector] = {
				value: optionValue,
				...optionLocation ? { location: optionLocation } : {}
			};
			hasOptions = true;
			this.skipSpace();
			selectorStart = this.index;
			selector = this.readIdentifier();
		}
		if (!hasOptions) this.fail(argumentType === "select" ? "EXPECT_SELECT_ARGUMENT_SELECTOR" : "EXPECT_PLURAL_ARGUMENT_SELECTOR");
		if (this.options.requiresOtherClause && !("other" in options)) this.fail("MISSING_OTHER_CLAUSE", selectorStart);
		if (!this.consume("}")) this.fail("EXPECT_ARGUMENT_CLOSING_BRACE", start);
		Object.setPrototypeOf(options, Object.prototype);
		if (argumentType === "select") return this.withLocation({
			type: TYPE.select,
			value,
			options
		}, start, this.index);
		return this.withLocation({
			type: TYPE.plural,
			value,
			options,
			offset,
			pluralType: argumentType === "plural" ? "cardinal" : "ordinal"
		}, start, this.index);
	}
	readIntegerToken(expectedErrorCode, invalidErrorCode) {
		const start = this.index;
		if (this.current() === "+" || this.current() === "-") this.index += 1;
		const digitStart = this.index;
		while (/\d/u.test(this.current())) this.index += 1;
		if (digitStart === this.index) this.fail(expectedErrorCode, start);
		const token = this.message.slice(start, this.index);
		if (Math.abs(Number(token)) > 9007199254740991) this.fail(invalidErrorCode, start);
		return token;
	}
	readIdentifier() {
		const start = this.index;
		while (!this.atEnd() && !IDENTIFIER_BOUNDARY.test(this.current())) this.index += this.current().length;
		return this.message.slice(start, this.index);
	}
	skipSpace() {
		while (!this.atEnd() && GRAMMAR_WHITE_SPACE.test(this.current())) this.index += this.current().length;
	}
	consume(value) {
		if (this.message.slice(this.index, this.index + value.length) !== value) return false;
		this.index += value.length;
		return true;
	}
	current() {
		return characterAt(this.message, this.index);
	}
	peek() {
		const current = this.current();
		return characterAt(this.message, this.index + current.length);
	}
	atEnd() {
		return this.index >= this.message.length;
	}
	withLocation(element, start, end) {
		const location = this.location(start, end);
		return location ? {
			...element,
			location
		} : element;
	}
	location(start, end) {
		if (!this.options.captureLocation) return void 0;
		return {
			start: this.position(start),
			end: this.position(end)
		};
	}
	position(offset) {
		const positions = this.positions ??= buildPositionIndex(this.message);
		return {
			offset,
			line: positions[0][offset],
			column: positions[1][offset]
		};
	}
	fail(code, offset = this.index) {
		return this.failAt(code, offset, Math.max(offset, this.index));
	}
	failAt(code, start, end) {
		const error = new SyntaxError(code);
		error.location = {
			start: this.position(start),
			end: this.position(end)
		};
		error.originalMessage = this.message;
		throw error;
	}
};
function buildPositionIndex(message) {
	const lines = new Uint32Array(message.length + 1);
	const columns = new Uint32Array(message.length + 1);
	let offset = 0;
	let line = 1;
	let column = 1;
	while (offset < message.length) {
		const character = characterAt(message, offset);
		lines[offset] = line;
		columns[offset] = column;
		if (character.length === 2) {
			lines[offset + 1] = line;
			columns[offset + 1] = column + 1;
		}
		offset += character.length;
		if (character === "\n") {
			line += 1;
			column = 1;
		} else column += 1;
	}
	lines[offset] = line;
	columns[offset] = column;
	return [lines, columns];
}
function characterAt(value, index) {
	if (index >= value.length) return "\0";
	const first = value.charCodeAt(index);
	if (first < 55296 || first > 56319 || index + 1 >= value.length) return value.charAt(index);
	const second = value.charCodeAt(index + 1);
	return second >= 56320 && second <= 57343 ? value.slice(index, index + 2) : value.charAt(index);
}
function parse(message, options = {}) {
	return new IcuParser(message, {
		shouldParseSkeletons: true,
		requiresOtherClause: true,
		...options
	}).parse();
}
var NUMBER_STYLES = {
	integer: { maximumFractionDigits: 0 },
	currency: { style: "currency" },
	percent: { style: "percent" }
};
var DATE_STYLES = {
	short: {
		month: "numeric",
		day: "numeric",
		year: "2-digit"
	},
	medium: {
		month: "short",
		day: "numeric",
		year: "numeric"
	},
	long: {
		month: "long",
		day: "numeric",
		year: "numeric"
	},
	full: {
		weekday: "long",
		month: "long",
		day: "numeric",
		year: "numeric"
	}
};
var LONG_TIME_STYLE = {
	hour: "numeric",
	minute: "numeric",
	second: "numeric",
	timeZoneName: "short"
};
var TIME_STYLES = {
	short: {
		hour: "numeric",
		minute: "numeric"
	},
	medium: {
		hour: "numeric",
		minute: "numeric",
		second: "numeric"
	},
	long: LONG_TIME_STYLE,
	full: LONG_TIME_STYLE
};
function formatMessage$2(message, locales = "en", variables = {}) {
	const parts = formatElements(parse(message, { locale: resolveLocale(locales) }), {
		message,
		locales,
		variables
	});
	if (parts.length === 1) return parts[0];
	return parts.length ? parts : "";
}
function formatElements(elements, context, currentPluralValue) {
	const result = [];
	const append = (value) => {
		const previous = result[result.length - 1];
		if (typeof previous === "string" && typeof value === "string") result[result.length - 1] = previous + value;
		else result.push(value);
	};
	for (const element of elements) switch (element.type) {
		case TYPE.literal:
			append(element.value);
			break;
		case TYPE.pound:
			if (currentPluralValue !== void 0) append(getNumberFormat(context).format(currentPluralValue));
			break;
		case TYPE.argument: {
			const value = requireVariable(context.variables, element.value);
			append(typeof value === "string" || typeof value === "number" ? String(value) : value || "");
			break;
		}
		case TYPE.number: {
			const value = requireVariable(context.variables, element.value);
			const { scale, ...intlOptions } = typeof element.style === "string" ? NUMBER_STYLES[element.style] ?? {} : element.style?.type === SKELETON_TYPE.number ? element.style.parsedOptions : {};
			const scaledValue = applyScale(value, scale);
			append(getNumberFormat(context, intlOptions).format(scaledValue));
			break;
		}
		case TYPE.date:
		case TYPE.time: {
			const value = requireVariable(context.variables, element.value);
			const namedStyles = element.type === TYPE.date ? DATE_STYLES : TIME_STYLES;
			append(getDateTimeFormat(context, typeof element.style === "string" ? namedStyles[element.style] : element.style?.type === SKELETON_TYPE.dateTime ? element.style.parsedOptions : element.type === TYPE.time ? TIME_STYLES.medium : void 0).format(value));
			break;
		}
		case TYPE.select: {
			const value = String(requireVariable(context.variables, element.value));
			const option = ownOption(element.options, value) ?? element.options.other;
			if (!option) throw invalidSelection(element.value, value, element.options);
			formatElements(option.value, context).forEach(append);
			break;
		}
		case TYPE.plural: {
			const rawValue = requireVariable(context.variables, element.value);
			const exactSelector = `=${String(rawValue)}`;
			let option = ownOption(element.options, exactSelector);
			const value = typeof rawValue === "bigint" ? rawValue : Number(rawValue);
			const adjustedValue = typeof value === "bigint" ? value - BigInt(element.offset) : value - element.offset;
			if (!option && hasPluralCategoryOption(element.options)) {
				const category = getPluralRules(context, element.pluralType ?? "cardinal").select(toPluralRulesNumber(adjustedValue));
				option = ownOption(element.options, category);
			}
			option ??= element.options.other;
			if (!option) throw invalidSelection(element.value, rawValue, element.options);
			formatElements(option.value, context, adjustedValue).forEach(append);
			break;
		}
		case TYPE.tag: {
			const formatter = requireVariable(context.variables, element.value);
			if (typeof formatter !== "function") throw new TypeError(`The ICU tag variable "${element.value}" must be a function.`);
			const formatted = formatter(formatElements(element.children, context, currentPluralValue));
			if (Array.isArray(formatted)) formatted.forEach(append);
			else append(formatted);
			break;
		}
	}
	return result;
}
function requireVariable(variables, name) {
	if (!(name in variables)) throw new Error(`The ICU message variable "${name}" was not provided.`);
	return variables[name];
}
function applyScale(value, scale) {
	if (!scale) return value;
	if (typeof value === "bigint") {
		if (!Number.isInteger(scale)) throw new RangeError(`Cannot apply fractional scale ${scale} to a bigint value.`);
		return value * BigInt(scale);
	}
	return Number(value) * scale;
}
function getNumberFormat(context, options = {}) {
	return getCachedFormatter(context.numberFormats ??= /* @__PURE__ */ new Map(), JSON.stringify(options), () => {
		return new Intl.NumberFormat(context.locales, options);
	});
}
function getDateTimeFormat(context, options) {
	return getCachedFormatter(context.dateTimeFormats ??= /* @__PURE__ */ new Map(), options ? JSON.stringify(options) : "", () => {
		return new Intl.DateTimeFormat(context.locales, options);
	});
}
function getPluralRules(context, type) {
	if (typeof Intl.PluralRules !== "function") {
		const error = /* @__PURE__ */ new Error("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n");
		error.code = "MISSING_INTL_API";
		error.originalMessage = context.message;
		throw error;
	}
	return getCachedFormatter(context.pluralRules ??= /* @__PURE__ */ new Map(), type, () => {
		return new Intl.PluralRules(context.locales, { type });
	});
}
function getCachedFormatter(cache, key, create) {
	const cached = cache.get(key);
	if (cached) return cached;
	const formatter = create();
	cache.set(key, formatter);
	return formatter;
}
function toPluralRulesNumber(value) {
	const numberValue = Number(value);
	if (typeof value === "bigint" && Math.abs(numberValue) > 9007199254740991) throw new RangeError(`Cannot select a plural category for bigint ${value} outside the safe integer range.`);
	return numberValue;
}
function hasPluralCategoryOption(options) {
	return Object.keys(options).some((selector) => selector !== "other" && selector[0] !== "=");
}
function ownOption(options, key) {
	return Object.prototype.hasOwnProperty.call(options, key) ? options[key] : void 0;
}
function invalidSelection(name, value, options) {
	return /* @__PURE__ */ new RangeError(`The ICU variable "${name}" value ${JSON.stringify(String(value))} did not match any of: ${Object.keys(options).join(", ")}.`);
}
function resolveLocale(locales) {
	if (typeof Intl.Locale === "undefined") return void 0;
	const supported = Intl.NumberFormat.supportedLocalesOf(locales)[0];
	const requested = typeof locales === "string" ? locales : locales[0];
	return new Intl.Locale(supported ?? requested);
}
function printAST(ast) {
	return printElements(ast, false, false);
}
function printElements(ast, isInPlural, closesContainer) {
	return ast.map((element, index) => {
		switch (element.type) {
			case TYPE.literal: return printLiteral(element, isInPlural, index > 0, index < ast.length - 1 || closesContainer);
			case TYPE.argument: return `{${element.value}}`;
			case TYPE.date:
			case TYPE.time:
			case TYPE.number: return printSimpleFormat(element);
			case TYPE.select: return `{${element.value},select,${printOptions(element.options, false)}}`;
			case TYPE.plural: {
				const type = element.pluralType === "cardinal" ? "plural" : "selectordinal";
				const offset = element.offset ? `offset:${element.offset} ` : "";
				return `{${element.value},${type},${offset}${printOptions(element.options, true)}}`;
			}
			case TYPE.pound: return "#";
			case TYPE.tag: return `<${element.value}>${printElements(element.children, isInPlural, true)}</${element.value}>`;
		}
	}).join("");
}
function escapeApostropheRuns(value, isInPlural, followsQuotedSyntax, followsElement, precedesSyntax) {
	let result = "";
	let index = 0;
	while (index < value.length) {
		if (value[index] !== "'") {
			result += value[index];
			index += 1;
			continue;
		}
		const start = index;
		while (value[index] === "'") index += 1;
		const length = index - start;
		const next = value[index];
		const introducesQuote = "{}<>".includes(next) || isInPlural && next === "#";
		const touchesSyntax = start === 0 && followsQuotedSyntax || index === value.length && precedesSyntax || introducesQuote;
		const preservesElementBoundary = start === 0 && followsElement;
		result += length === 1 && !touchesSyntax && !preservesElementBoundary ? "'" : "'".repeat(touchesSyntax ? length * 2 : length === 1 && preservesElementBoundary ? 2 : length * 2 - 1);
	}
	return result;
}
function escapeMessage(message, isInPlural, hasPrecedingSyntax, hasFollowingSyntax) {
	const quotedRanges = [];
	function quoteToken(start, end) {
		const previous = quotedRanges[quotedRanges.length - 1];
		if (previous && (start === previous[1] || /^'+$/u.test(message.slice(previous[1], start)))) previous[1] = end;
		else quotedRanges.push([start, end]);
	}
	for (let index = 0; index < message.length; index += 1) {
		const character = message[index];
		if (character === "{") {
			const end = Math.max(message.lastIndexOf("{"), message.lastIndexOf("}"), index) + 1;
			quoteToken(index, end);
			index = end - 1;
		} else if (character === "}") quoteToken(index, index + 1);
		else if (character === "<" && (message[index + 1] === "/" || isAsciiLetter(message[index + 1]))) {
			const closingIndex = message.indexOf(">", index + 1);
			const end = closingIndex === -1 ? message.length : closingIndex + 1;
			quoteToken(index, end);
			index = end - 1;
		} else if (isInPlural && character === "#") quoteToken(index, index + 1);
	}
	let result = "";
	let literalStart = 0;
	for (const [start, end] of quotedRanges) {
		result += escapeApostropheRuns(message.slice(literalStart, start), isInPlural, literalStart !== 0, literalStart === 0 && hasPrecedingSyntax, true);
		result += `'${message.slice(start, end).replace(/'/g, "''")}'`;
		literalStart = end;
	}
	result += escapeApostropheRuns(message.slice(literalStart), isInPlural, literalStart !== 0, literalStart === 0 && hasPrecedingSyntax, hasFollowingSyntax);
	return result;
}
function printLiteral({ value }, isInPlural, hasPrecedingSyntax, hasFollowingSyntax) {
	if (isSelfClosingTagLiteral(value)) return value;
	return escapeMessage(value, isInPlural, hasPrecedingSyntax, hasFollowingSyntax);
}
function isSelfClosingTagLiteral(value) {
	if (value[0] !== "<" || value.slice(-2) !== "/>") return false;
	const name = value.slice(1, -2);
	if (!isAsciiLetter(name[0])) return false;
	for (const character of name.slice(1)) if (!isTagNameCharacter(character)) return false;
	return true;
}
function printSimpleFormat(element) {
	const type = element.type === TYPE.number ? "number" : element.type === TYPE.date ? "date" : "time";
	return `{${element.value}, ${type}${element.style ? `, ${printStyle(element.style)}` : ""}}`;
}
function printStyle(style) {
	if (typeof style === "string") return style;
	if (style.type === SKELETON_TYPE.dateTime) return `::${style.pattern}`;
	return `::${style.tokens.map(({ stem, options }) => stem + options.map((option) => `/${option}`).join("")).join(" ")}`;
}
function printOptions(options, inPlural) {
	return Object.entries(options).map(([selector, option]) => `${selector}{${printElements(option.value, inPlural, true)}}`).join(" ");
}
function decode(base64) {
	if (typeof Buffer !== "undefined") return Buffer.from(base64, "base64").toString("utf8");
	const binary = atob(base64);
	const bytes = new Uint8Array(binary.length);
	for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
	return new TextDecoder().decode(bytes);
}
function traverseIcu({ icuString, shouldVisit, visitor, options: { recurseIntoVisited = true, ...otherOptions } }) {
	const ast = parse(icuString, otherOptions);
	handleChildren(ast);
	return ast;
	function handleChildren(children) {
		children.map(handleChild);
	}
	function handleChild(child) {
		let visited = false;
		if (shouldVisit(child)) {
			visitor(child);
			visited = true;
		}
		if (!visited || recurseIntoVisited) {
			if (child.type === TYPE.select || child.type === TYPE.plural) Object.values(child.options).map((option) => option.value).map(handleChildren);
			else if (child.type === TYPE.tag) handleChildren(child.children);
		}
	}
}
var VAR_IDENTIFIER = "_gt_";
var GT_INDEXED_IDENTIFIER_REGEX = new RegExp(`^${VAR_IDENTIFIER}\\d+$`);
var GT_UNINDEXED_IDENTIFIER_REGEX = new RegExp(`^${VAR_IDENTIFIER}$`);
function isGTIndexedSelectElement(child) {
	return child.type === TYPE.select && GT_INDEXED_IDENTIFIER_REGEX.test(child.value) && !!child.options.other && (child.options.other.value.length === 0 || child.options.other.value.length > 0 && child.options.other.value[0]?.type === TYPE.literal);
}
function isGTUnindexedSelectElement(child) {
	return child.type === TYPE.select && GT_UNINDEXED_IDENTIFIER_REGEX.test(child.value) && !!child.options.other && (child.options.other.value.length === 0 || child.options.other.value.length > 0 && child.options.other.value[0]?.type === TYPE.literal);
}
function isVariable(obj) {
	const variableObj = obj;
	if (variableObj && typeof variableObj === "object" && typeof variableObj.k === "string") {
		const k = Object.keys(variableObj);
		if (k.length === 1) return true;
		if (k.length === 2) {
			if (typeof variableObj.i === "number") return true;
			if (typeof variableObj.v === "string") return true;
		}
		if (k.length === 3) {
			if (typeof variableObj.v === "string" && typeof variableObj.i === "number") return true;
		}
	}
	return false;
}
var createInvalidCutoffStyleError = (style) => `generaltranslation Formatting Error: Invalid cutoff style: ${style}.`;
var DEFAULT_TERMINATOR_KEY = "DEFAULT_TERMINATOR_KEY";
var TERMINATOR_MAP = {
	ellipsis: {
		fr: {
			terminator: "…",
			separator: " "
		},
		zh: {
			terminator: "……",
			separator: void 0
		},
		ja: {
			terminator: "……",
			separator: void 0
		},
		[DEFAULT_TERMINATOR_KEY]: {
			terminator: "…",
			separator: void 0
		}
	},
	none: { [DEFAULT_TERMINATOR_KEY]: {
		terminator: void 0,
		separator: void 0
	} }
};
var CutoffFormatConstructor = class CutoffFormatConstructor {
	static resolveLocale(locales) {
		try {
			const localesList = !locales ? ["en"] : Array.isArray(locales) ? locales.map(String) : [String(locales)];
			const [canonicalLocale] = Intl.getCanonicalLocales(localesList);
			return canonicalLocale ?? "en";
		} catch {
			return "en";
		}
	}
	constructor(locales, options = {}) {
		this.locale = CutoffFormatConstructor.resolveLocale(locales);
		const style = options.style ?? "ellipsis";
		if (!TERMINATOR_MAP[style]) throw new Error(createInvalidCutoffStyleError(style));
		const presetTerminatorOptions = options.maxChars === void 0 ? void 0 : TERMINATOR_MAP[style][new Intl.Locale(this.locale).language] || TERMINATOR_MAP[style]["DEFAULT_TERMINATOR_KEY"];
		let terminator = options.terminator ?? presetTerminatorOptions?.terminator;
		let separator = terminator != null ? options.separator ?? presetTerminatorOptions?.separator : void 0;
		this.additionLength = (terminator?.length ?? 0) + (separator?.length ?? 0);
		if (options.maxChars !== void 0 && Math.abs(options.maxChars) < this.additionLength) {
			terminator = void 0;
			separator = void 0;
		}
		this.options = {
			maxChars: options.maxChars,
			style: options.maxChars === void 0 ? void 0 : style,
			terminator,
			separator
		};
	}
	format(value) {
		return this.formatToParts(value).join("");
	}
	formatToParts(value) {
		const { maxChars, terminator, separator } = this.options;
		const adjustedChars = maxChars === void 0 || Math.abs(maxChars) >= value.length ? maxChars : maxChars >= 0 ? Math.max(0, maxChars - this.additionLength) : Math.min(0, maxChars + this.additionLength);
		const slicedValue = adjustedChars !== void 0 && adjustedChars > -1 ? value.slice(0, adjustedChars) : value.slice(adjustedChars);
		if (maxChars == null || adjustedChars == null || adjustedChars === 0 || terminator == null || value.length <= Math.abs(maxChars)) return [slicedValue];
		if (adjustedChars > 0) return separator != null ? [
			slicedValue,
			separator,
			terminator
		] : [slicedValue, terminator];
		return separator != null ? [
			terminator,
			separator,
			slicedValue
		] : [terminator, slicedValue];
	}
	resolvedOptions() {
		return this.options;
	}
};
var CustomIntl = {
	Collator: Intl.Collator,
	DateTimeFormat: Intl.DateTimeFormat,
	DisplayNames: Intl.DisplayNames,
	ListFormat: Intl.ListFormat,
	Locale: Intl.Locale,
	NumberFormat: Intl.NumberFormat,
	PluralRules: Intl.PluralRules,
	RelativeTimeFormat: Intl.RelativeTimeFormat,
	Segmenter: Intl.Segmenter,
	CutoffFormat: CutoffFormatConstructor
};
var IntlCache = class {
	constructor() {
		this.cache = {};
	}
	generateKey(locales, options = {}) {
		return `${!locales ? "undefined" : Array.isArray(locales) ? locales.map((l) => String(l)).join(",") : String(locales)}:${options ? JSON.stringify(options, Object.keys(options).sort()) : "{}"}`;
	}
	get(constructor, ...args) {
		const [locales = "en", options = {}] = args;
		const key = this.generateKey(locales, options);
		let cache = this.cache[constructor];
		if (cache === void 0) {
			cache = {};
			this.cache[constructor] = cache;
		}
		let intlObject = cache[key];
		if (intlObject === void 0) {
			intlObject = new CustomIntl[constructor](...args);
			cache[key] = intlObject;
		}
		return intlObject;
	}
};
var intlCache = new IntlCache();
function getCachedPluralRules(locales) {
	return intlCache.get("PluralRules", locales);
}
var pluralForms = [
	"singular",
	"plural",
	"dual",
	"zero",
	"one",
	"two",
	"few",
	"many",
	"other"
];
function isAcceptedPluralForm(form) {
	return pluralForms.includes(form);
}
function _getPluralForm(n, forms = pluralForms, locales = ["en"]) {
	const provisionalBranchName = getCachedPluralRules(locales).select(n);
	const absN = Math.abs(n);
	if (absN === 0 && forms.includes("zero")) return "zero";
	if (absN === 1) {
		if (forms.includes("singular")) return "singular";
		if (forms.includes("one")) return "one";
	}
	if (provisionalBranchName === "one" && forms.includes("singular")) return "singular";
	if (absN === 2) {
		if (forms.includes("dual")) return "dual";
		if (forms.includes("two")) return "two";
	}
	if (provisionalBranchName === "two" && forms.includes("dual")) return "dual";
	if (forms.includes(provisionalBranchName)) return provisionalBranchName;
	if (forms.includes("plural")) return "plural";
	if (forms.includes("other")) return "other";
	return "";
}
var VARIABLE_TRANSFORMATION_SUFFIXES_TO_MINIFIED_NAMES = {
	variable: "v",
	number: "n",
	datetime: "d",
	currency: "c",
	"relative-time": "rt"
};
function minifyVariableType(variableType) {
	return VARIABLE_TRANSFORMATION_SUFFIXES_TO_MINIFIED_NAMES[variableType];
}
function indexVars(icuString) {
	if (!icuString.includes("_gt_")) return icuString;
	const variableLocations = [];
	function visitor(child) {
		variableLocations.push({
			start: child.location?.start.offset ?? 0,
			end: child.location?.end.offset ?? 0,
			otherStart: child.options.other.location?.start.offset ?? 0,
			otherEnd: child.options.other.location?.end.offset ?? 0
		});
	}
	traverseIcu({
		icuString,
		shouldVisit: isGTUnindexedSelectElement,
		visitor,
		options: {
			recurseIntoVisited: false,
			captureLocation: true
		}
	});
	const result = [];
	let current = 0;
	for (let i = 0; i < variableLocations.length; i++) {
		const { start, end, otherStart, otherEnd } = variableLocations[i];
		result.push(icuString.slice(current, start));
		result.push(icuString.slice(start, start + VAR_IDENTIFIER.length + 1));
		result.push(String(i + 1));
		result.push(icuString.slice(start + VAR_IDENTIFIER.length + 1, otherStart));
		result.push("{}");
		result.push(icuString.slice(otherEnd, end));
		current = end;
	}
	result.push(icuString.slice(current, icuString.length));
	return result.join("");
}
function extractVars(icuString) {
	if (!icuString.includes("_gt_")) return {};
	let index = 1;
	const variables = {};
	function visitor(child) {
		variables[child.value + index] = child.options.other.value.length ? child.options.other.value[0]?.value : "";
		index += 1;
	}
	traverseIcu({
		icuString,
		shouldVisit: isGTUnindexedSelectElement,
		visitor,
		options: { recurseIntoVisited: false }
	});
	return variables;
}
var CONTAINS_INDEXED_GT_REGEX = new RegExp(`${VAR_IDENTIFIER}\\d+`);
function condenseVars(icuString) {
	if (!CONTAINS_INDEXED_GT_REGEX.test(icuString)) return icuString;
	function visitor(child) {
		child.type = TYPE.argument;
		Reflect.deleteProperty(child, "options");
	}
	return printAST(traverseIcu({
		icuString,
		shouldVisit: isGTIndexedSelectElement,
		visitor,
		options: { recurseIntoVisited: false }
	}));
}
var HTML_CONTENT_PROPS = {
	pl: "placeholder",
	ti: "title",
	alt: "alt",
	arl: "aria-label",
	arb: "aria-labelledby",
	ard: "aria-describedby"
};
function _formatMessageICU(message, locales = "en", variables = {}) {
	return formatMessage$2(message, locales, variables)?.toString() ?? "";
}
function _formatNum({ value, locales = ["en"], options = {} }) {
	return intlCache.get("NumberFormat", locales, {
		numberingSystem: "latn",
		...options
	}).format(value);
}
function _formatDateTime({ value, locales = ["en"], options = {} }) {
	return intlCache.get("DateTimeFormat", locales, {
		calendar: "gregory",
		numberingSystem: "latn",
		...options
	}).format(value);
}
function _formatCurrency({ value, locales = ["en"], currency = "USD", options = {} }) {
	return intlCache.get("NumberFormat", locales, {
		style: "currency",
		currency,
		numberingSystem: "latn",
		...options
	}).format(value);
}
function _formatList({ value, locales = ["en"], options = {} }) {
	return intlCache.get("ListFormat", locales, {
		type: "conjunction",
		style: "long",
		...options
	}).format(value.map(String));
}
function _formatListToParts({ value, locales = ["en"], options = {} }) {
	const formatListParts = intlCache.get("ListFormat", locales, {
		type: "conjunction",
		style: "long",
		...options
	}).formatToParts(value.map(() => "1"));
	let partIndex = 0;
	return formatListParts.map((part) => {
		if (part.type === "element") return value[partIndex++];
		return part.value;
	});
}
function _selectRelativeTimeUnit(date, baseDate) {
	const now = baseDate.getTime();
	const diffMs = date.getTime() - now;
	const absDiffMs = Math.abs(diffMs);
	const sign = diffMs < 0 ? -1 : 1;
	const seconds = Math.floor(absDiffMs / 1e3);
	const minutes = Math.floor(absDiffMs / 6e4);
	const hours = Math.floor(absDiffMs / 36e5);
	const days = Math.floor(absDiffMs / 864e5);
	const weeks = Math.floor(absDiffMs / 6048e5);
	const months = Math.floor(absDiffMs / 2592e6);
	const years = Math.floor(absDiffMs / 31536e6);
	if (seconds < 60) return {
		value: sign * seconds,
		unit: "second"
	};
	if (minutes < 60) return {
		value: sign * minutes,
		unit: "minute"
	};
	if (hours < 24) return {
		value: sign * hours,
		unit: "hour"
	};
	if (days < 7) return {
		value: sign * days,
		unit: "day"
	};
	if (days < 28) return {
		value: sign * weeks,
		unit: "week"
	};
	if (months < 1) return {
		value: sign * weeks,
		unit: "week"
	};
	if (months < 12) return {
		value: sign * months,
		unit: "month"
	};
	if (years < 1) return {
		value: sign * months,
		unit: "month"
	};
	return {
		value: sign * years,
		unit: "year"
	};
}
function _formatRelativeTime({ value, unit, locales = ["en"], options = {} }) {
	return intlCache.get("RelativeTimeFormat", locales, {
		style: "long",
		numeric: "auto",
		...options
	}).format(value, unit);
}
function _getLocaleLanguage(locale) {
	try {
		return intlCache.get("Locale", locale).language;
	} catch {
		return;
	}
}
function _isSameLanguage(...locales) {
	try {
		const languages = locales.flat().map((locale) => intlCache.get("Locale", locale).language);
		return languages.every((language) => language === languages[0]);
	} catch (error) {
		console.error(error);
		return false;
	}
}
function isCustomLocaleObject(value) {
	return typeof value === "object" && value !== null;
}
var getCustomProperty = (customMapping, locale, property) => {
	const value = customMapping?.[locale];
	if (!value) return void 0;
	if (typeof value === "string") return property === "name" ? value : void 0;
	return value[property];
};
var getCustomLocaleCode = (customMapping, locale) => {
	const value = customMapping?.[locale];
	return isCustomLocaleObject(value) && typeof value.code === "string" ? value.code : void 0;
};
var scriptExceptions = /* @__PURE__ */ new Set([
	"Cham",
	"Jamo",
	"Kawi",
	"Lisu",
	"Toto",
	"Thai"
]);
var isCustomLanguage = (language) => {
	return language >= "qaa" && language <= "qtz";
};
var _isValidLocale = (locale, customMapping) => {
	locale = getCustomLocaleCode(customMapping, locale) || locale;
	try {
		const { language, region, script } = intlCache.get("Locale", locale);
		const partCount = 1 + Number(Boolean(region)) + Number(Boolean(script));
		if (locale.split("-").length !== partCount) return false;
		if (intlCache.get("DisplayNames", ["en"], { type: "language" }).of(language) === language && !isCustomLanguage(language)) return false;
		if (region) {
			if (intlCache.get("DisplayNames", ["en"], { type: "region" }).of(region) === region) return false;
		}
		if (script) {
			if (intlCache.get("DisplayNames", ["en"], { type: "script" }).of(script) === script && !scriptExceptions.has(script)) return false;
		}
		return true;
	} catch {
		return false;
	}
};
var _standardizeLocale = (locale) => {
	try {
		return Intl.getCanonicalLocales(locale)[0];
	} catch {
		return locale;
	}
};
function _prepareApprovedLocales(approvedLocales, customMapping) {
	let allValid = true;
	const languages = /* @__PURE__ */ new Set();
	const byLanguage = /* @__PURE__ */ new Map();
	for (const approvedLocale of approvedLocales) {
		if (!_isValidLocale(approvedLocale, customMapping)) {
			allValid = false;
			continue;
		}
		const language = _getLocaleLanguage(approvedLocale);
		if (language === void 0) continue;
		languages.add(language);
		let bucket = byLanguage.get(language);
		if (bucket === void 0) {
			bucket = /* @__PURE__ */ new Set();
			byLanguage.set(language, bucket);
		}
		bucket.add(_standardizeLocale(approvedLocale));
	}
	return {
		allValid,
		languages,
		byLanguage
	};
}
function _isSameDialect(...locales) {
	try {
		const localeObjects = locales.flat().map((locale) => intlCache.get("Locale", _standardizeLocale(locale)));
		const [firstLocale] = localeObjects;
		const regions = new Set(localeObjects.map(({ region }) => region).filter(Boolean));
		const scripts = new Set(localeObjects.map(({ script }) => script).filter(Boolean));
		return localeObjects.every(({ language }) => language === firstLocale?.language) && regions.size <= 1 && scripts.size <= 1;
	} catch (error) {
		console.error(error);
		return false;
	}
}
function _requiresTranslationWithScope(sourceLocale, targetLocale, approvedScope, customMapping) {
	if (approvedScope && !approvedScope.allValid || !_isValidLocale(sourceLocale, customMapping) || !_isValidLocale(targetLocale, customMapping)) return false;
	if (_isSameDialect(sourceLocale, targetLocale)) return false;
	if (!approvedScope) return true;
	const targetLanguage = _getLocaleLanguage(targetLocale);
	return targetLanguage !== void 0 && approvedScope.languages.has(targetLanguage);
}
function _requiresTranslation(sourceLocale, targetLocale, approvedLocales, customMapping) {
	return _requiresTranslationWithScope(sourceLocale, targetLocale, approvedLocales ? _prepareApprovedLocales(approvedLocales, customMapping) : void 0, customMapping);
}
function getLocaleMatchCodes(locale) {
	try {
		const localeObject = intlCache.get("Locale", locale);
		const languageCode = localeObject.language;
		let regionCode = localeObject.region || "";
		let scriptCode = localeObject.script || "";
		if (!regionCode || !scriptCode) {
			const maximizedLocale = localeObject.maximize();
			regionCode ||= maximizedLocale.region || "";
			scriptCode ||= maximizedLocale.script || "";
		}
		return {
			languageCode,
			regionCode,
			scriptCode,
			minimizedCode: localeObject.minimize().toString()
		};
	} catch {
		const code = _isValidLocale(locale) ? _standardizeLocale(locale) : locale;
		const codeParts = code.split("-");
		return {
			languageCode: codeParts[0] || code,
			regionCode: codeParts.length > 2 ? codeParts[2] : codeParts[1] || "",
			scriptCode: codeParts[3] || "",
			minimizedCode: code
		};
	}
}
function findMatchingCode(locale, candidates) {
	if (candidates.has(locale)) return locale;
	const { languageCode, regionCode, scriptCode, minimizedCode } = getLocaleMatchCodes(locale);
	const languageRegionCode = `${languageCode}-${regionCode}`;
	if (candidates.has(languageRegionCode)) return languageRegionCode;
	const languageScriptCode = `${languageCode}-${scriptCode}`;
	if (candidates.has(languageScriptCode)) return languageScriptCode;
	if (candidates.has(minimizedCode)) return minimizedCode;
}
function _determineLocaleWithIndex(locales, approvedIndex, customMapping) {
	const candidateLocales = Array.isArray(locales) ? locales : [locales];
	for (const candidateLocale of candidateLocales) {
		if (!_isValidLocale(candidateLocale, customMapping)) continue;
		const locale = _standardizeLocale(candidateLocale);
		const language = _getLocaleLanguage(locale);
		if (language === void 0) continue;
		const candidates = approvedIndex.byLanguage.get(language);
		if (candidates === void 0) continue;
		const matchingCode = findMatchingCode(locale, candidates) || findMatchingCode(language, candidates);
		if (matchingCode) return matchingCode;
	}
}
function _determineLocale(locales, approvedLocales, customMapping) {
	return _determineLocaleWithIndex(locales, _prepareApprovedLocales(approvedLocales, customMapping), customMapping);
}
function _resolveCanonicalLocale(locale, customMapping) {
	const customLocaleCode = getCustomLocaleCode(customMapping, locale);
	return customLocaleCode && _isValidLocale(customLocaleCode) ? customLocaleCode : locale;
}
function _getLocaleEmoji(locale, customMapping) {
	const aliasedLocale = locale;
	locale = _resolveCanonicalLocale(locale, customMapping);
	try {
		const standardizedLocale = _standardizeLocale(locale);
		const localeObject = intlCache.get("Locale", standardizedLocale);
		const { language, region } = localeObject;
		if (customMapping) for (const l of [
			aliasedLocale,
			locale,
			standardizedLocale,
			language
		]) {
			const customEmoji = getCustomProperty(customMapping, l, "emoji");
			if (customEmoji) return customEmoji;
		}
		const regionEmoji = region && getSupportedRegionEmoji(region);
		if (regionEmoji) return regionEmoji;
		const extrapolated = localeObject.maximize();
		return exceptions[extrapolated.language] || getRegionEmoji(extrapolated.region || "");
	} catch {
		return defaultEmoji;
	}
}
var europeAfricaGlobe = "🌍";
var asiaAustraliaGlobe = "🌏";
var defaultEmoji = europeAfricaGlobe;
var exceptions = {
	ca: europeAfricaGlobe,
	eu: europeAfricaGlobe,
	ku: europeAfricaGlobe,
	bo: asiaAustraliaGlobe,
	ug: asiaAustraliaGlobe,
	gd: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
	cy: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
	gv: "🇮🇲",
	grc: "🏺"
};
var specialRegionEmojis = {
	EU: "🇪🇺",
	"419": "🌎"
};
var flagRegions = /* @__PURE__ */ new Set([
	"AF",
	"AX",
	"AL",
	"DZ",
	"AS",
	"AD",
	"AO",
	"AI",
	"AQ",
	"AG",
	"AR",
	"AM",
	"AW",
	"AU",
	"AT",
	"AZ",
	"BS",
	"BH",
	"BD",
	"BB",
	"BY",
	"BE",
	"BZ",
	"BJ",
	"BM",
	"BT",
	"BO",
	"BQ",
	"BA",
	"BW",
	"BV",
	"BR",
	"IO",
	"BN",
	"BG",
	"BF",
	"BI",
	"CV",
	"KH",
	"CM",
	"CA",
	"KY",
	"CF",
	"TD",
	"CL",
	"CN",
	"CX",
	"CC",
	"CO",
	"KM",
	"CD",
	"CG",
	"CK",
	"CR",
	"CI",
	"HR",
	"CU",
	"CW",
	"CY",
	"CZ",
	"DK",
	"DJ",
	"DM",
	"DO",
	"EC",
	"EG",
	"SV",
	"GQ",
	"ER",
	"EE",
	"SZ",
	"ET",
	"FK",
	"FO",
	"FJ",
	"FI",
	"FR",
	"GF",
	"PF",
	"TF",
	"GA",
	"GM",
	"GE",
	"DE",
	"GH",
	"GI",
	"GR",
	"GL",
	"GD",
	"GP",
	"GU",
	"GT",
	"GG",
	"GN",
	"GW",
	"GY",
	"HT",
	"HM",
	"VA",
	"HN",
	"HK",
	"HU",
	"IS",
	"IN",
	"ID",
	"IR",
	"IQ",
	"IE",
	"IM",
	"IL",
	"IT",
	"JM",
	"JP",
	"JE",
	"JO",
	"KZ",
	"KE",
	"KI",
	"KP",
	"KR",
	"KW",
	"KG",
	"LA",
	"LV",
	"LB",
	"LS",
	"LR",
	"LY",
	"LI",
	"LT",
	"LU",
	"MO",
	"MG",
	"MW",
	"MY",
	"MV",
	"ML",
	"MT",
	"MH",
	"MQ",
	"MR",
	"MU",
	"YT",
	"MX",
	"FM",
	"MD",
	"MC",
	"MN",
	"ME",
	"MS",
	"MA",
	"MZ",
	"MM",
	"NA",
	"NR",
	"NP",
	"NL",
	"NC",
	"NZ",
	"NI",
	"NE",
	"NG",
	"NU",
	"NF",
	"MK",
	"MP",
	"NO",
	"OM",
	"PK",
	"PW",
	"PS",
	"PA",
	"PG",
	"PY",
	"PE",
	"PH",
	"PN",
	"PL",
	"PT",
	"PR",
	"QA",
	"RE",
	"RO",
	"RU",
	"RW",
	"BL",
	"SH",
	"KN",
	"LC",
	"MF",
	"PM",
	"VC",
	"WS",
	"SM",
	"ST",
	"SA",
	"SN",
	"RS",
	"SC",
	"SL",
	"SG",
	"SX",
	"SK",
	"SI",
	"SB",
	"SO",
	"ZA",
	"GS",
	"SS",
	"ES",
	"LK",
	"SD",
	"SR",
	"SJ",
	"SE",
	"CH",
	"SY",
	"TW",
	"TJ",
	"TZ",
	"TH",
	"TL",
	"TG",
	"TK",
	"TO",
	"TT",
	"TN",
	"TR",
	"TM",
	"TC",
	"TV",
	"UG",
	"UA",
	"AE",
	"GB",
	"US",
	"UM",
	"UY",
	"UZ",
	"VU",
	"VE",
	"VN",
	"VG",
	"VI",
	"WF",
	"EH",
	"YE",
	"ZM",
	"ZW"
]);
var regionalIndicatorOffset = 127462 - "A".charCodeAt(0);
function getRegionEmoji(region) {
	return getSupportedRegionEmoji(region) || "🌍";
}
function getSupportedRegionEmoji(region) {
	const normalizedRegion = region.toUpperCase();
	const specialEmoji = specialRegionEmojis[normalizedRegion];
	if (specialEmoji) return specialEmoji;
	if (!flagRegions.has(normalizedRegion)) return void 0;
	return String.fromCodePoint(normalizedRegion.charCodeAt(0) + regionalIndicatorOffset, normalizedRegion.charCodeAt(1) + regionalIndicatorOffset);
}
function createCustomLocaleProperties(lArray, customMapping) {
	if (!customMapping) return void 0;
	let merged = {};
	for (const l of lArray) {
		const value = customMapping[l];
		if (value) if (typeof value === "string") merged.name ||= value;
		else merged = {
			...value,
			...merged
		};
	}
	return merged;
}
function _getLocaleProperties(locale, defaultLocale = "en", customMapping) {
	const aliasedLocale = locale;
	locale = _resolveCanonicalLocale(locale, customMapping);
	defaultLocale ||= "en";
	try {
		const standardizedLocale = _standardizeLocale(locale);
		const localeObject = intlCache.get("Locale", locale);
		const languageCode = localeObject.language;
		const customLocaleProperties = createCustomLocaleProperties([
			aliasedLocale,
			locale,
			standardizedLocale,
			languageCode
		], customMapping);
		const baseRegion = localeObject.region;
		const maximizedLocale = localeObject.maximize();
		const maximizedCode = maximizedLocale.toString();
		const regionCode = localeObject.region || customLocaleProperties?.regionCode || maximizedLocale.region || "";
		const scriptCode = localeObject.script || customLocaleProperties?.scriptCode || maximizedLocale.script || "";
		const minimizedCode = localeObject.minimize().toString();
		const defaultLanguageOrder = [
			defaultLocale,
			locale,
			"en"
		];
		const nativeLanguageOrder = [
			locale,
			defaultLocale,
			"en"
		];
		const languageNames = intlCache.get("DisplayNames", defaultLanguageOrder, { type: "language" });
		const nativeLanguageNames = intlCache.get("DisplayNames", nativeLanguageOrder, { type: "language" });
		const customName = customLocaleProperties?.name;
		const customNativeName = customLocaleProperties?.nativeName || customLocaleProperties?.name;
		const name = customName || languageNames.of(locale) || locale;
		const nativeName = customNativeName || nativeLanguageNames.of(locale) || locale;
		const maximizedName = customLocaleProperties?.maximizedName || customName || languageNames.of(maximizedCode) || locale;
		const nativeMaximizedName = customLocaleProperties?.nativeMaximizedName || customNativeName || nativeLanguageNames.of(maximizedCode) || locale;
		const minimizedName = customLocaleProperties?.minimizedName || customName || languageNames.of(minimizedCode) || locale;
		const nativeMinimizedName = customLocaleProperties?.nativeMinimizedName || customNativeName || nativeLanguageNames.of(minimizedCode) || locale;
		const languageName = customLocaleProperties?.languageName || customName || languageNames.of(languageCode) || locale;
		const nativeLanguageName = customLocaleProperties?.nativeLanguageName || customNativeName || nativeLanguageNames.of(languageCode) || locale;
		const nameWithRegionCode = customLocaleProperties?.nameWithRegionCode || (baseRegion ? `${languageName} (${baseRegion})` : name);
		const nativeNameWithRegionCode = customLocaleProperties?.nativeNameWithRegionCode || (baseRegion ? `${nativeLanguageName} (${baseRegion})` : nativeName) || nameWithRegionCode;
		const regionNames = intlCache.get("DisplayNames", defaultLanguageOrder, { type: "region" });
		const nativeRegionNames = intlCache.get("DisplayNames", nativeLanguageOrder, { type: "region" });
		const regionName = customLocaleProperties?.regionName || (regionCode ? regionNames.of(regionCode) : "") || "";
		const nativeRegionName = customLocaleProperties?.nativeRegionName || (regionCode ? nativeRegionNames.of(regionCode) : "") || "";
		const scriptNames = intlCache.get("DisplayNames", defaultLanguageOrder, { type: "script" });
		const nativeScriptNames = intlCache.get("DisplayNames", nativeLanguageOrder, { type: "script" });
		return {
			code: standardizedLocale,
			name,
			nativeName,
			maximizedCode,
			maximizedName,
			nativeMaximizedName,
			minimizedCode,
			minimizedName,
			nativeMinimizedName,
			languageCode,
			languageName,
			nativeLanguageName,
			nameWithRegionCode,
			nativeNameWithRegionCode,
			regionCode,
			regionName,
			nativeRegionName,
			scriptCode,
			scriptName: customLocaleProperties?.scriptName || (scriptCode ? scriptNames.of(scriptCode) : "") || "",
			nativeScriptName: customLocaleProperties?.nativeScriptName || (scriptCode ? nativeScriptNames.of(scriptCode) : "") || "",
			emoji: customLocaleProperties?.emoji || _getLocaleEmoji(standardizedLocale, customMapping)
		};
	} catch {
		let code = _isValidLocale(locale) ? _standardizeLocale(locale) : locale;
		const codeParts = code.split("-");
		let languageCode = codeParts[0] || code;
		let regionCode = codeParts.length > 2 ? codeParts[2] : codeParts[1] || "";
		let scriptCode = codeParts[3] || "";
		const customLocaleProperties = createCustomLocaleProperties([code, languageCode], customMapping);
		code = customLocaleProperties?.code || code;
		const name = customLocaleProperties?.name || code;
		const nativeName = customLocaleProperties?.nativeName || name;
		const maximizedCode = customLocaleProperties?.maximizedCode || code;
		const maximizedName = customLocaleProperties?.maximizedName || name;
		const nativeMaximizedName = customLocaleProperties?.nativeMaximizedName || nativeName;
		const minimizedCode = customLocaleProperties?.minimizedCode || code;
		const minimizedName = customLocaleProperties?.minimizedName || name;
		const nativeMinimizedName = customLocaleProperties?.nativeMinimizedName || nativeName;
		languageCode = customLocaleProperties?.languageCode || languageCode;
		const languageName = customLocaleProperties?.languageName || name;
		const nativeLanguageName = customLocaleProperties?.nativeLanguageName || nativeName;
		regionCode = customLocaleProperties?.regionCode || regionCode;
		const regionName = customLocaleProperties?.regionName || "";
		const nativeRegionName = customLocaleProperties?.nativeRegionName || "";
		scriptCode = customLocaleProperties?.scriptCode || scriptCode;
		const scriptName = customLocaleProperties?.scriptName || "";
		const nativeScriptName = customLocaleProperties?.nativeScriptName || "";
		const nameWithRegionCode = customLocaleProperties?.nameWithRegionCode || (regionName ? `${languageName} (${regionName})` : name);
		const nativeNameWithRegionCode = customLocaleProperties?.nativeNameWithRegionCode || (nativeRegionName ? `${nativeLanguageName} (${nativeRegionName})` : nativeName);
		const emoji = customLocaleProperties?.emoji || "🌍";
		return {
			code,
			name,
			nativeName,
			maximizedCode,
			maximizedName,
			nativeMaximizedName,
			minimizedCode,
			minimizedName,
			nativeMinimizedName,
			languageCode,
			languageName,
			nativeLanguageName,
			nameWithRegionCode,
			nativeNameWithRegionCode,
			regionCode,
			regionName,
			nativeRegionName,
			scriptCode,
			scriptName,
			nativeScriptName,
			emoji
		};
	}
}
function _getLocaleName(locale, defaultLocale = "en", customMapping) {
	const aliasedLocale = locale;
	locale = _resolveCanonicalLocale(locale, customMapping);
	defaultLocale ||= "en";
	try {
		const standardizedLocale = _standardizeLocale(locale);
		if (customMapping) for (const l of [
			aliasedLocale,
			locale,
			standardizedLocale,
			intlCache.get("Locale", standardizedLocale).language
		]) {
			const customName = getCustomProperty(customMapping, l, "name");
			if (customName) return customName;
		}
		return intlCache.get("DisplayNames", [
			defaultLocale,
			standardizedLocale,
			"en"
		], { type: "language" }).of(standardizedLocale) || "";
	} catch {
		return "";
	}
}
function _getLocaleDirection(code) {
	try {
		const textInfoDirection = extractDirectionWithTextInfo(intlCache.get("Locale", code));
		if (textInfoDirection) return textInfoDirection;
	} catch {}
	const { scriptCode, languageCode } = _getLocaleProperties(code);
	if (scriptCode) return RTL_SCRIPTS.has(scriptCode.toLowerCase()) ? "rtl" : "ltr";
	if (languageCode) return RTL_LANGUAGES.has(languageCode.toLowerCase()) ? "rtl" : "ltr";
	return "ltr";
}
var RTL_SCRIPTS = /* @__PURE__ */ new Set([
	"arab",
	"adlm",
	"hebr",
	"nkoo",
	"rohg",
	"samr",
	"syrc",
	"thaa",
	"yezi"
]);
var RTL_LANGUAGES = /* @__PURE__ */ new Set([
	"ar",
	"arc",
	"ckb",
	"dv",
	"fa",
	"he",
	"iw",
	"ku",
	"lrc",
	"nqo",
	"ps",
	"pnb",
	"sd",
	"syr",
	"ug",
	"ur",
	"yi"
]);
function extractDirectionWithTextInfo(locale) {
	const direction = "textInfo" in locale && typeof locale.textInfo === "object" && locale.textInfo !== null && "direction" in locale.textInfo ? locale.textInfo.direction : void 0;
	return direction === "rtl" || direction === "ltr" ? direction : void 0;
}
function _isSupersetLocale(superLocale, subLocale) {
	try {
		const { language: languageSuper, region: regionSuper, script: scriptSuper } = intlCache.get("Locale", _standardizeLocale(superLocale));
		const { language: languageSub, region: regionSub, script: scriptSub } = intlCache.get("Locale", _standardizeLocale(subLocale));
		if (languageSuper !== languageSub) return false;
		if (regionSuper && regionSuper !== regionSub) return false;
		if (scriptSuper && scriptSuper !== scriptSub) return false;
		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
}
function _resolveAliasLocale(locale, customMapping) {
	if (!customMapping) return locale;
	return Object.keys(customMapping).find((alias) => getCustomLocaleCode(customMapping, alias) === locale) ?? locale;
}
var LocaleConfig = class {
	getResolutionScope() {
		if (this.resolutionScope && this.isResolutionScopeCurrent(this.resolutionScope)) return this.resolutionScope;
		const resolutionScope = this.buildResolutionScope(this.locales);
		Object.defineProperty(this, "resolutionScope", {
			configurable: true,
			value: resolutionScope,
			writable: true
		});
		return resolutionScope;
	}
	isResolutionScopeCurrent(scope) {
		if (scope.approvedLocalePairs.length !== this.locales.length) return false;
		for (let index = 0; index < this.locales.length; index++) {
			const locale = this.locales[index];
			const pair = scope.approvedLocalePairs[index];
			if (pair.locale !== locale || pair.canonicalLocale !== this.resolveCanonicalLocale(locale) || scope.canonicalMappingCodes[index] !== getCustomLocaleCode(this.customMapping, pair.canonicalLocale)) return false;
		}
		return true;
	}
	buildResolutionScope(approvedLocales) {
		const approvedLocalePairs = approvedLocales.map((locale) => ({
			locale,
			canonicalLocale: this.resolveCanonicalLocale(locale)
		}));
		return {
			approvedLocalePairs,
			canonicalMappingCodes: approvedLocalePairs.map(({ canonicalLocale }) => getCustomLocaleCode(this.customMapping, canonicalLocale)),
			approved: _prepareApprovedLocales(approvedLocalePairs.map(({ canonicalLocale }) => canonicalLocale), this.customMapping)
		};
	}
	constructor({ defaultLocale = "en", locales = [], customMapping } = {}) {
		this.defaultLocale = defaultLocale;
		this.locales = locales;
		this.customMapping = customMapping;
	}
	getFormattingLocales(targetLocale, locales) {
		return (locales === void 0 ? [
			targetLocale,
			this.defaultLocale,
			"en"
		] : Array.isArray(locales) ? locales : [locales]).filter((locale) => !!locale).map((locale) => this.resolveCanonicalLocale(locale));
	}
	formatNum(value, targetLocale, options = {}) {
		const { locales, ...intlOptions } = options;
		return _formatNum({
			value,
			locales: this.getFormattingLocales(targetLocale, locales),
			options: intlOptions
		});
	}
	formatDateTime(value, targetLocale, options = {}) {
		const { locales, ...intlOptions } = options;
		return _formatDateTime({
			value,
			locales: this.getFormattingLocales(targetLocale, locales),
			options: intlOptions
		});
	}
	formatCurrency(value, currency, targetLocale, options = {}) {
		const { locales, ...intlOptions } = options;
		return _formatCurrency({
			value,
			currency,
			locales: this.getFormattingLocales(targetLocale, locales),
			options: intlOptions
		});
	}
	formatRelativeTime(value, unit, targetLocale, options = {}) {
		const { locales, ...intlOptions } = options;
		return _formatRelativeTime({
			value,
			unit,
			locales: this.getFormattingLocales(targetLocale, locales),
			options: intlOptions
		});
	}
	formatRelativeTimeFromDate(date, targetLocale, options = {}) {
		const { locales, baseDate, ...intlOptions } = options;
		const { value, unit } = _selectRelativeTimeUnit(date, baseDate ?? /* @__PURE__ */ new Date());
		return _formatRelativeTime({
			value,
			unit,
			locales: this.getFormattingLocales(targetLocale, locales),
			options: intlOptions
		});
	}
	formatCutoff(value, targetLocale, options = {}) {
		const { locales, ...formatOptions } = options;
		return intlCache.get("CutoffFormat", this.getFormattingLocales(targetLocale, locales), formatOptions).format(value);
	}
	formatMessage(message, targetLocale, options = {}) {
		const { locales, variables, dataFormat } = options;
		if (dataFormat === "STRING") return message;
		return _formatMessageICU(message, this.getFormattingLocales(targetLocale, locales), variables);
	}
	formatList(array, targetLocale, options = {}) {
		const { locales, ...intlOptions } = options;
		return _formatList({
			value: array,
			locales: this.getFormattingLocales(targetLocale, locales),
			options: intlOptions
		});
	}
	formatListToParts(array, targetLocale, options = {}) {
		const { locales, ...intlOptions } = options;
		return _formatListToParts({
			value: array,
			locales: this.getFormattingLocales(targetLocale, locales),
			options: intlOptions
		});
	}
	getLocaleName(locale) {
		return _getLocaleName(locale, this.defaultLocale, this.customMapping);
	}
	getLocaleEmoji(locale) {
		return _getLocaleEmoji(locale, this.customMapping);
	}
	getLocaleProperties(locale) {
		return _getLocaleProperties(locale, this.defaultLocale, this.customMapping);
	}
	requiresTranslation(targetLocale, sourceLocale = this.defaultLocale, approvedLocales = this.locales.length ? this.locales : void 0) {
		const approvedScope = approvedLocales ? approvedLocales === this.locales ? this.getResolutionScope().approved : _prepareApprovedLocales(approvedLocales.map((locale) => this.resolveCanonicalLocale(locale)), this.customMapping) : void 0;
		return _requiresTranslationWithScope(this.resolveCanonicalLocale(sourceLocale), this.resolveCanonicalLocale(targetLocale), approvedScope, this.customMapping);
	}
	determineLocale(locales, approvedLocales = this.locales) {
		const { approvedLocalePairs, approved } = approvedLocales === this.locales ? this.getResolutionScope() : this.buildResolutionScope(approvedLocales);
		const resolvedLocale = _determineLocaleWithIndex(Array.isArray(locales) ? locales.map((locale) => this.resolveCanonicalLocale(locale)) : this.resolveCanonicalLocale(locales), approved, this.customMapping);
		if (!resolvedLocale) return void 0;
		return approvedLocalePairs.find(({ canonicalLocale }) => canonicalLocale === resolvedLocale)?.locale ?? this.resolveAliasLocale(resolvedLocale);
	}
	getLocaleDirection(locale) {
		return _getLocaleDirection(this.resolveCanonicalLocale(locale));
	}
	isValidLocale(locale) {
		return _isValidLocale(locale, this.customMapping);
	}
	resolveCanonicalLocale(locale) {
		return _resolveCanonicalLocale(locale, this.customMapping);
	}
	resolveAliasLocale(locale) {
		return _resolveAliasLocale(locale, this.customMapping);
	}
	standardizeLocale(locale) {
		return _standardizeLocale(locale);
	}
	isSameDialect(...locales) {
		return _isSameDialect(...locales.map((locale) => Array.isArray(locale) ? locale.map((code) => this.resolveCanonicalLocale(code)) : this.resolveCanonicalLocale(locale)));
	}
	isSameLanguage(...locales) {
		return _isSameLanguage(...locales.map((locale) => Array.isArray(locale) ? locale.map((code) => this.resolveCanonicalLocale(code)) : this.resolveCanonicalLocale(locale)));
	}
	isSupersetLocale(superLocale, subLocale) {
		return _isSupersetLocale(this.resolveCanonicalLocale(superLocale), this.resolveCanonicalLocale(subLocale));
	}
};
function getRegionProperties(region, defaultLocale = "en", customMapping) {
	defaultLocale ||= "en";
	let name = region;
	let emoji = defaultEmoji;
	try {
		name = intlCache.get("DisplayNames", [defaultLocale, "en"], { type: "region" }).of(region) || region;
		emoji = getRegionEmoji(region);
	} catch {}
	return {
		code: region,
		name,
		emoji,
		...customMapping?.[region]
	};
}
function formatCutoff(value, options) {
	const { locales, ...formatOptions } = options ?? {};
	return intlCache.get("CutoffFormat", locales, formatOptions).format(value);
}
function formatMessage(message, options) {
	if (options?.dataFormat === "STRING") return message;
	return _formatMessageICU(message, options?.locales, options?.variables);
}
function isValidLocale(locale, customMapping) {
	return _isValidLocale(locale, customMapping);
}
function resolveCanonicalLocale(locale, customMapping) {
	return _resolveCanonicalLocale(locale, customMapping);
}
function standardizeLocale(locale) {
	return _standardizeLocale(locale);
}
function requiresTranslation(sourceLocale, targetLocale, approvedLocales, customMapping) {
	return _requiresTranslation(sourceLocale, targetLocale, approvedLocales, customMapping);
}
function determineLocale$2(locales, approvedLocales = [], customMapping = void 0) {
	return _determineLocale(locales, approvedLocales, customMapping);
}
function resolveAliasLocale(locale, customMapping) {
	return _resolveAliasLocale(locale, customMapping);
}
function isBytes(a) {
	return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in a && a.BYTES_PER_ELEMENT === 1;
}
function abytes(value, length, title = "") {
	const bytes = isBytes(value);
	const len = value?.length;
	const needsLen = length !== void 0;
	if (!bytes || needsLen && len !== length) {
		const prefix = title && `"${title}" `;
		const ofLen = needsLen ? ` of length ${length}` : "";
		const got = bytes ? `length=${len}` : `type=${typeof value}`;
		const message = prefix + "expected Uint8Array" + ofLen + ", got " + got;
		if (!bytes) throw new TypeError(message);
		throw new RangeError(message);
	}
	return value;
}
function aexists(instance, checkFinished = true) {
	if (instance.destroyed) throw new Error("Hash instance has been destroyed");
	if (checkFinished && instance.finished) throw new Error("Hash#digest() has already been called");
}
function aoutput(out, instance) {
	abytes(out, void 0, "digestInto() output");
	const min = instance.outputLen;
	if (out.length < min) throw new RangeError("\"digestInto() output\" expected to be of length >=" + min);
}
function clean(...arrays) {
	for (let i = 0; i < arrays.length; i++) arrays[i].fill(0);
}
function createView(arr) {
	return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
function rotr(word, shift) {
	return word << 32 - shift | word >>> shift;
}
var hasHexBuiltin = (() => typeof Uint8Array.from([]).toHex === "function" && typeof Uint8Array.fromHex === "function")();
var hexes = Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
function bytesToHex(bytes) {
	abytes(bytes);
	if (hasHexBuiltin) return bytes.toHex();
	let hex = "";
	for (let i = 0; i < bytes.length; i++) hex += hexes[bytes[i]];
	return hex;
}
function utf8ToBytes(str) {
	if (typeof str !== "string") throw new TypeError("string expected");
	return new Uint8Array(new TextEncoder().encode(str));
}
function createHasher(hashCons, info = {}) {
	const hashC = (msg, opts) => hashCons(opts).update(msg).digest();
	const tmp = hashCons(void 0);
	hashC.outputLen = tmp.outputLen;
	hashC.blockLen = tmp.blockLen;
	hashC.canXOF = tmp.canXOF;
	hashC.create = (opts) => hashCons(opts);
	Object.assign(hashC, info);
	return Object.freeze(hashC);
}
var oidNist = (suffix) => ({ oid: Uint8Array.from([
	6,
	9,
	96,
	134,
	72,
	1,
	101,
	3,
	4,
	2,
	suffix
]) });
function Chi(a, b, c) {
	return a & b ^ ~a & c;
}
function Maj(a, b, c) {
	return a & b ^ a & c ^ b & c;
}
var HashMD = class {
	blockLen;
	outputLen;
	canXOF = false;
	padOffset;
	isLE;
	buffer;
	view;
	finished = false;
	length = 0;
	pos = 0;
	destroyed = false;
	constructor(blockLen, outputLen, padOffset, isLE) {
		this.blockLen = blockLen;
		this.outputLen = outputLen;
		this.padOffset = padOffset;
		this.isLE = isLE;
		this.buffer = new Uint8Array(blockLen);
		this.view = createView(this.buffer);
	}
	update(data) {
		aexists(this);
		abytes(data);
		const { view, buffer, blockLen } = this;
		const len = data.length;
		for (let pos = 0; pos < len;) {
			const take = Math.min(blockLen - this.pos, len - pos);
			if (take === blockLen) {
				const dataView = createView(data);
				for (; blockLen <= len - pos; pos += blockLen) this.process(dataView, pos);
				continue;
			}
			buffer.set(data.subarray(pos, pos + take), this.pos);
			this.pos += take;
			pos += take;
			if (this.pos === blockLen) {
				this.process(view, 0);
				this.pos = 0;
			}
		}
		this.length += data.length;
		this.roundClean();
		return this;
	}
	digestInto(out) {
		aexists(this);
		aoutput(out, this);
		this.finished = true;
		const { buffer, view, blockLen, isLE } = this;
		let { pos } = this;
		buffer[pos++] = 128;
		clean(this.buffer.subarray(pos));
		if (this.padOffset > blockLen - pos) {
			this.process(view, 0);
			pos = 0;
		}
		for (let i = pos; i < blockLen; i++) buffer[i] = 0;
		view.setBigUint64(blockLen - 8, BigInt(this.length * 8), isLE);
		this.process(view, 0);
		const oview = createView(out);
		const len = this.outputLen;
		if (len % 4) throw new Error("_sha2: outputLen must be aligned to 32bit");
		const outLen = len / 4;
		const state = this.get();
		if (outLen > state.length) throw new Error("_sha2: outputLen bigger than state");
		for (let i = 0; i < outLen; i++) oview.setUint32(4 * i, state[i], isLE);
	}
	digest() {
		const { buffer, outputLen } = this;
		this.digestInto(buffer);
		const res = buffer.slice(0, outputLen);
		this.destroy();
		return res;
	}
	_cloneInto(to) {
		to ||= new this.constructor();
		to.set(...this.get());
		const { blockLen, buffer, length, finished, destroyed, pos } = this;
		to.destroyed = destroyed;
		to.finished = finished;
		to.length = length;
		to.pos = pos;
		if (length % blockLen) to.buffer.set(buffer);
		return to;
	}
	clone() {
		return this._cloneInto();
	}
};
var SHA256_IV = Uint32Array.from([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]);
var SHA256_K = Uint32Array.from([
	1116352408,
	1899447441,
	3049323471,
	3921009573,
	961987163,
	1508970993,
	2453635748,
	2870763221,
	3624381080,
	310598401,
	607225278,
	1426881987,
	1925078388,
	2162078206,
	2614888103,
	3248222580,
	3835390401,
	4022224774,
	264347078,
	604807628,
	770255983,
	1249150122,
	1555081692,
	1996064986,
	2554220882,
	2821834349,
	2952996808,
	3210313671,
	3336571891,
	3584528711,
	113926993,
	338241895,
	666307205,
	773529912,
	1294757372,
	1396182291,
	1695183700,
	1986661051,
	2177026350,
	2456956037,
	2730485921,
	2820302411,
	3259730800,
	3345764771,
	3516065817,
	3600352804,
	4094571909,
	275423344,
	430227734,
	506948616,
	659060556,
	883997877,
	958139571,
	1322822218,
	1537002063,
	1747873779,
	1955562222,
	2024104815,
	2227730452,
	2361852424,
	2428436474,
	2756734187,
	3204031479,
	3329325298
]);
var SHA256_W = /* @__PURE__ */ new Uint32Array(64);
var SHA2_32B = class extends HashMD {
	constructor(outputLen) {
		super(64, outputLen, 8, false);
	}
	get() {
		const { A, B, C, D, E, F, G, H } = this;
		return [
			A,
			B,
			C,
			D,
			E,
			F,
			G,
			H
		];
	}
	set(A, B, C, D, E, F, G, H) {
		this.A = A | 0;
		this.B = B | 0;
		this.C = C | 0;
		this.D = D | 0;
		this.E = E | 0;
		this.F = F | 0;
		this.G = G | 0;
		this.H = H | 0;
	}
	process(view, offset) {
		for (let i = 0; i < 16; i++, offset += 4) SHA256_W[i] = view.getUint32(offset, false);
		for (let i = 16; i < 64; i++) {
			const W15 = SHA256_W[i - 15];
			const W2 = SHA256_W[i - 2];
			const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
			const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
			SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
		}
		let { A, B, C, D, E, F, G, H } = this;
		for (let i = 0; i < 64; i++) {
			const sigma1 = rotr(E, 6) ^ rotr(E, 11) ^ rotr(E, 25);
			const T1 = H + sigma1 + Chi(E, F, G) + SHA256_K[i] + SHA256_W[i] | 0;
			const T2 = (rotr(A, 2) ^ rotr(A, 13) ^ rotr(A, 22)) + Maj(A, B, C) | 0;
			H = G;
			G = F;
			F = E;
			E = D + T1 | 0;
			D = C;
			C = B;
			B = A;
			A = T1 + T2 | 0;
		}
		A = A + this.A | 0;
		B = B + this.B | 0;
		C = C + this.C | 0;
		D = D + this.D | 0;
		E = E + this.E | 0;
		F = F + this.F | 0;
		G = G + this.G | 0;
		H = H + this.H | 0;
		this.set(A, B, C, D, E, F, G, H);
	}
	roundClean() {
		clean(SHA256_W);
	}
	destroy() {
		this.destroyed = true;
		this.set(0, 0, 0, 0, 0, 0, 0, 0);
		clean(this.buffer);
	}
};
var _SHA256 = class extends SHA2_32B {
	A = SHA256_IV[0] | 0;
	B = SHA256_IV[1] | 0;
	C = SHA256_IV[2] | 0;
	D = SHA256_IV[3] | 0;
	E = SHA256_IV[4] | 0;
	F = SHA256_IV[5] | 0;
	G = SHA256_IV[6] | 0;
	H = SHA256_IV[7] | 0;
	constructor() {
		super(32);
	}
};
var sha256 = createHasher(() => new _SHA256(), oidNist(1));
function _stringify(node) {
	if (node === void 0) return void 0;
	if (node === null) return "null";
	if (typeof node === "number") return isFinite(node) ? "" + node : "null";
	if (typeof node !== "object") return JSON.stringify(node);
	if (Array.isArray(node)) {
		let out = "[";
		for (let i = 0; i < node.length; i++) {
			if (i) out += ",";
			out += _stringify(node[i]) || "null";
		}
		return out + "]";
	}
	const keys = Object.keys(node).sort();
	let out = "";
	for (const key of keys) {
		const value = _stringify(node[key]);
		if (!value) continue;
		if (out) out += ",";
		out += JSON.stringify(key) + ":" + value;
	}
	return "{" + out + "}";
}
function stableStringify(data) {
	return _stringify(data) ?? "";
}
function hashString(string) {
	return bytesToHex(sha256(utf8ToBytes(string))).slice(0, 16);
}
function hashSource({ source, context, id, maxChars, requiresReview, dataFormat }, hashFunction = hashString) {
	let sanitizedSource;
	if (dataFormat === "JSX") sanitizedSource = sanitizeJsxChildren(source);
	else sanitizedSource = source;
	return hashFunction(stableStringify({
		source: sanitizedSource,
		...id && { id },
		...context && { context },
		...maxChars != null && { maxChars: Math.abs(maxChars) },
		...requiresReview === true && { requiresReview: true },
		...dataFormat && { dataFormat }
	}));
}
var sanitizeChild = (child) => {
	if (child && typeof child === "object") {
		const newChild = {};
		if ("c" in child && child.c) newChild.c = sanitizeJsxChildren(child.c);
		if ("d" in child) {
			const generaltranslation = child?.d;
			if (generaltranslation?.b) newChild.b = Object.fromEntries(Object.entries(generaltranslation.b).map(([key, value]) => [key, sanitizeJsxChildren(value)]));
			if (generaltranslation?.t) newChild.t = generaltranslation.t;
		}
		if (isVariable(child)) return {
			k: child.k,
			...child.v && { v: child.v }
		};
		return newChild;
	}
	return child;
};
function sanitizeJsxChildren(childrenAsObjects) {
	return Array.isArray(childrenAsObjects) ? childrenAsObjects.map(sanitizeChild) : sanitizeChild(childrenAsObjects);
}
var GT_SOURCE = "GT";
var translationTimeoutError = (timeout) => createDiagnosticMessage$2({
	source: GT_SOURCE,
	severity: "Error",
	whatHappened: `Translation request timed out after ${timeout}ms`,
	fix: "Try again, or increase the request timeout if the source content is large"
});
var apiError = (status, statusText, error) => createDiagnosticMessage$2({
	source: GT_SOURCE,
	severity: "Error",
	whatHappened: `The translation API returned ${status} ${statusText}`,
	fix: "Check the request configuration and try again",
	details: error
});
createDiagnosticMessage$2({
	source: GT_SOURCE,
	severity: "Error",
	whatHappened: "Authentication failed",
	fix: "Check that your API key and project ID are correct"
});
var noTargetLocaleProvidedError = (functionName) => createDiagnosticMessage$2({
	source: GT_SOURCE,
	severity: "Error",
	whatHappened: `Cannot call \`${functionName}\` without a specified locale`,
	fix: `Pass a locale to \`${functionName}\` or specify targetLocale in the GT constructor`
});
var noSourceLocaleProvidedError = (functionName) => createDiagnosticMessage$2({
	source: GT_SOURCE,
	severity: "Error",
	whatHappened: `Cannot call \`${functionName}\` without a specified locale`,
	fix: `Pass a locale to \`${functionName}\` or specify sourceLocale in the GT constructor`
});
var noProjectIdProvidedError = (functionName) => createDiagnosticMessage$2({
	source: GT_SOURCE,
	severity: "Error",
	whatHappened: `Cannot call \`${functionName}\` without a specified project ID`,
	fix: `Pass a project ID to \`${functionName}\` or specify projectId in the GT constructor`
});
var noApiKeyProvidedError = (functionName) => createDiagnosticMessage$2({
	source: GT_SOURCE,
	severity: "Error",
	whatHappened: `Cannot call \`${functionName}\` without a specified API key`,
	fix: `Pass an API key to \`${functionName}\` or specify apiKey in the GT constructor`
});
var invalidLocaleError = (locale) => createDiagnosticMessage$2({
	source: GT_SOURCE,
	severity: "Error",
	whatHappened: `Locale "${locale}" is not valid`,
	fix: "Use a valid BCP 47 locale code or add a custom mapping"
});
var invalidLocalesError = (locales) => createDiagnosticMessage$2({
	source: GT_SOURCE,
	severity: "Error",
	whatHappened: `These locales are not valid: ${locales.join(", ")}`,
	fix: "Use valid BCP 47 locale codes or add custom mappings"
});
var LOG_LEVELS = {
	debug: 0,
	info: 1,
	warn: 2,
	error: 3,
	off: 4
};
var LOG_COLORS = {
	debug: "\x1B[36m",
	info: "\x1B[32m",
	warn: "\x1B[33m",
	error: "\x1B[31m",
	off: ""
};
var RESET_COLOR = "\x1B[0m";
function getConfiguredLogLevel() {
	if (typeof process !== "undefined" && process.env?._GT_LOG_LEVEL) {
		const envLevel = process.env._GT_LOG_LEVEL.toLowerCase();
		if (envLevel in LOG_LEVELS) return envLevel;
	}
	return "warn";
}
var ConsoleLogHandler = class {
	constructor(config) {
		this.config = config;
	}
	handle(entry) {
		const parts = [];
		if (this.config.includeTimestamp) parts.push(`[${entry.timestamp.toISOString()}]`);
		const colorCode = LOG_COLORS[entry.level];
		const levelText = `[${entry.level.toUpperCase()}]`;
		parts.push(`${colorCode}${levelText}${RESET_COLOR}`);
		if (this.config.prefix) parts.push(`[${this.config.prefix}]`);
		if (this.config.includeContext && entry.context) parts.push(`[${entry.context}]`);
		parts.push(entry.message);
		if (entry.metadata && Object.keys(entry.metadata).length > 0) parts.push(`\n  Metadata: ${JSON.stringify(entry.metadata, null, 2)}`);
		const formattedMessage = parts.join(" ");
		switch (entry.level) {
			case "debug":
				console.debug(formattedMessage);
				break;
			case "info":
				console.info(formattedMessage);
				break;
			case "warn":
				console.warn(formattedMessage);
				break;
			case "error": console.error(formattedMessage);
		}
	}
};
var Logger = class {
	constructor(config = {}) {
		this.config = {
			level: getConfiguredLogLevel(),
			includeTimestamp: true,
			includeContext: true,
			enableConsole: true,
			handlers: [],
			...config
		};
		this.handlers = [...this.config.handlers || []];
		if (this.config.enableConsole) this.handlers.push(new ConsoleLogHandler(this.config));
	}
	addHandler(handler) {
		this.handlers.push(handler);
	}
	removeHandler(handler) {
		const index = this.handlers.indexOf(handler);
		if (index > -1) this.handlers.splice(index, 1);
	}
	configure(config) {
		this.config = {
			...this.config,
			...config
		};
	}
	shouldLog(level) {
		return LOG_LEVELS[level] >= LOG_LEVELS[this.config.level];
	}
	log(level, message, context, metadata) {
		if (!this.shouldLog(level)) return;
		const entry = {
			level,
			message,
			timestamp: /* @__PURE__ */ new Date(),
			context,
			metadata
		};
		this.handlers.forEach((handler) => {
			try {
				handler.handle(entry);
			} catch (error) {
				console.error("Error in log handler:", error);
			}
		});
	}
	debug(message, context, metadata) {
		this.log("debug", message, context, metadata);
	}
	info(message, context, metadata) {
		this.log("info", message, context, metadata);
	}
	warn(message, context, metadata) {
		this.log("warn", message, context, metadata);
	}
	error(message, context, metadata) {
		this.log("error", message, context, metadata);
	}
	child(context) {
		return new ContextLogger(this, context);
	}
	getConfig() {
		return { ...this.config };
	}
};
var ContextLogger = class ContextLogger {
	constructor(logger, context) {
		this.logger = logger;
		this.context = context;
	}
	debug(message, metadata) {
		this.logger.debug(message, this.context, metadata);
	}
	info(message, metadata) {
		this.logger.info(message, this.context, metadata);
	}
	warn(message, metadata) {
		this.logger.warn(message, this.context, metadata);
	}
	error(message, metadata) {
		this.logger.error(message, this.context, metadata);
	}
	child(childContext) {
		return new ContextLogger(this.logger, `${this.context}:${childContext}`);
	}
};
var defaultLogger = new Logger({
	level: getConfiguredLogLevel(),
	includeTimestamp: true,
	includeContext: true,
	prefix: "GT"
});
defaultLogger.child("fetch");
var gtInstanceLogger = defaultLogger.child("GT instance");
async function fetchWithTimeout(url, options, timeout) {
	const controller = new AbortController();
	const signals = [controller.signal];
	if (options.signal) signals.push(options.signal);
	if (url instanceof Request) signals.push(url.signal);
	const signal = AbortSignal.any(signals);
	timeout = timeout ? timeout : defaultTimeout;
	const timeoutId = timeout ? setTimeout(() => controller.abort(), timeout) : null;
	try {
		return await fetch(url, {
			...options,
			signal
		});
	} catch (error) {
		if (error instanceof Error && error.name === "AbortError") throw translationTimeoutError(timeout);
		throw error;
	} finally {
		if (timeoutId) clearTimeout(timeoutId);
	}
}
async function validateResponse(response) {
	if (!response.ok) {
		let errorMsg = "Unknown error";
		try {
			const text = await response.text();
			try {
				errorMsg = JSON.parse(text).error;
			} catch {
				errorMsg = text || "Unknown error";
			}
		} catch {}
		throw new ApiError(apiError(response.status, response.statusText, errorMsg), response.status, errorMsg);
	}
}
async function _translateMany(requests, globalMetadata, config, timeout) {
	const isArray = Array.isArray(requests);
	const hashOrder = isArray ? [] : void 0;
	const requestsObject = {};
	const entries = isArray ? requests.map((r) => [void 0, r]) : Object.entries(requests);
	for (const [key, request] of entries) {
		const { source, metadata } = typeof request === "string" ? { source: request } : request;
		const hash = key ?? metadata?.hash ?? hashSource({
			source,
			...metadata?.context && { context: metadata.context },
			...metadata?.maxChars != null && { maxChars: metadata.maxChars },
			dataFormat: metadata?.dataFormat ?? "STRING"
		});
		hashOrder?.push(hash);
		requestsObject[hash] = {
			source,
			metadata
		};
	}
	const client = createApiClient({
		apiKey: config.apiKey,
		baseUrl: config.baseUrl || "https://api.gtx.dev",
		fetch: (input, init) => fetchWithTimeout(input, init ?? {}, timeout),
		projectId: config.projectId,
		retryPolicy: "none",
		timeoutMs: false
	});
	const result = await translate({
		body: {
			requests: requestsObject,
			targetLocale: globalMetadata.targetLocale,
			sourceLocale: globalMetadata.sourceLocale,
			metadata: globalMetadata
		},
		client
	});
	if (result.data === void 0 && result.response && !hasDecodedError(result)) {
		await validateResponse(result.response);
		throw result.error;
	}
	const response = unwrapApiResult(result);
	if (hashOrder) return hashOrder.map((hash) => response[hash] ?? {
		success: false,
		error: "No translation returned",
		code: 500
	});
	return response;
}
var GTRuntime = class {
	get localeConfig() {
		return this._localeConfig;
	}
	constructor(params = {}) {
		if (typeof process !== "undefined") {
			this.apiKey ||= process.env?.GT_API_KEY;
			this.devApiKey ||= process.env?.GT_DEV_API_KEY;
			this.projectId ||= process.env?.GT_PROJECT_ID;
		}
		this.setConfig(params);
	}
	setConfig({ apiKey, devApiKey, sourceLocale, targetLocale, locales, projectId, customMapping, baseUrl }) {
		if (apiKey) this.apiKey = apiKey;
		if (devApiKey) this.devApiKey = devApiKey;
		if (projectId) this.projectId = projectId;
		if (sourceLocale) {
			this.sourceLocale = standardizeLocale(sourceLocale);
			if (!isValidLocale(this.sourceLocale, customMapping)) throw new Error(invalidLocaleError(this.sourceLocale));
		}
		if (targetLocale) {
			this.targetLocale = standardizeLocale(targetLocale);
			if (!isValidLocale(this.targetLocale, customMapping)) throw new Error(invalidLocaleError(this.targetLocale));
		}
		if (locales) {
			const result = [];
			const invalidLocales = [];
			locales.forEach((locale) => {
				const standardizedLocale = standardizeLocale(locale);
				if (isValidLocale(standardizedLocale)) result.push(standardizedLocale);
				else invalidLocales.push(locale);
			});
			if (invalidLocales.length > 0) throw new Error(invalidLocalesError(invalidLocales));
			this.locales = result;
		}
		if (baseUrl) this.baseUrl = baseUrl;
		if (customMapping) {
			this.customMapping = customMapping;
			this.reverseCustomMapping = Object.fromEntries(Object.entries(customMapping).filter(([, value]) => value && typeof value === "object" && "code" in value).map(([key, value]) => [value.code, key]));
		}
		this._localeConfig = new LocaleConfig({
			defaultLocale: this.sourceLocale,
			locales: this.locales ?? [],
			customMapping: this.customMapping
		});
	}
	_getTranslationConfig() {
		return {
			baseUrl: this.baseUrl,
			apiKey: this.apiKey || this.devApiKey,
			projectId: this.projectId || ""
		};
	}
	_validateAuth(functionName) {
		const errors = [];
		if (!this.apiKey && !this.devApiKey) {
			const error = noApiKeyProvidedError(functionName);
			errors.push(error);
		}
		if (!this.projectId) {
			const error = noProjectIdProvidedError(functionName);
			errors.push(error);
		}
		if (errors.length) throw new Error(errors.join("\n"));
	}
	async translate(source, options, timeout) {
		if (typeof options === "string") options = { targetLocale: options };
		this._validateAuth("translate");
		let targetLocale = options?.targetLocale || this.targetLocale;
		if (!targetLocale) {
			const error = noTargetLocaleProvidedError("translate");
			gtInstanceLogger.error(error);
			throw new Error(error);
		}
		targetLocale = this.resolveCanonicalLocale(targetLocale);
		const sourceLocale = this.resolveCanonicalLocale(options?.sourceLocale || this.sourceLocale || "en");
		return (await _translateMany([source], {
			...options,
			targetLocale,
			sourceLocale
		}, this._getTranslationConfig(), timeout))[0];
	}
	async translateMany(sources, options, timeout) {
		if (typeof options === "string") options = { targetLocale: options };
		this._validateAuth("translateMany");
		let targetLocale = options?.targetLocale || this.targetLocale;
		if (!targetLocale) {
			const error = noTargetLocaleProvidedError("translateMany");
			gtInstanceLogger.error(error);
			throw new Error(error);
		}
		targetLocale = this.resolveCanonicalLocale(targetLocale);
		const sourceLocale = this.resolveCanonicalLocale(options?.sourceLocale || this.sourceLocale || "en");
		return await _translateMany(sources, {
			...options,
			targetLocale,
			sourceLocale
		}, this._getTranslationConfig(), timeout);
	}
	formatCutoff(value, options) {
		return this.localeConfig.formatCutoff(value, this.targetLocale, options);
	}
	formatMessage(message, options) {
		return this.localeConfig.formatMessage(message, this.targetLocale, options);
	}
	formatNum(number, options) {
		return this.localeConfig.formatNum(number, this.targetLocale, options);
	}
	formatDateTime(date, options) {
		return this.localeConfig.formatDateTime(date, this.targetLocale, options);
	}
	formatCurrency(value, currency, options) {
		return this.localeConfig.formatCurrency(value, currency, this.targetLocale, options);
	}
	formatList(array, options) {
		return this.localeConfig.formatList(array, this.targetLocale, options);
	}
	formatListToParts(array, options) {
		return this.localeConfig.formatListToParts(array, this.targetLocale, options);
	}
	formatRelativeTime(value, unit, options) {
		return this.localeConfig.formatRelativeTime(value, unit, this.targetLocale, options);
	}
	formatRelativeTimeFromDate(date, options) {
		return this.localeConfig.formatRelativeTimeFromDate(date, this.targetLocale, options);
	}
	getLocaleName(locale = this.targetLocale) {
		if (!locale) throw new Error(noTargetLocaleProvidedError("getLocaleName"));
		return this.localeConfig.getLocaleName(locale);
	}
	getLocaleEmoji(locale = this.targetLocale) {
		if (!locale) throw new Error(noTargetLocaleProvidedError("getLocaleEmoji"));
		return this.localeConfig.getLocaleEmoji(locale);
	}
	getLocaleProperties(locale = this.targetLocale) {
		if (!locale) throw new Error(noTargetLocaleProvidedError("getLocaleProperties"));
		return this.localeConfig.getLocaleProperties(locale);
	}
	getRegionProperties(region = this.getLocaleProperties().regionCode, customMapping) {
		if (!customMapping) {
			if (this.customMapping && !this.customRegionMapping) {
				const customRegionMapping = {};
				for (const [locale, lp] of Object.entries(this.customMapping)) if (lp && typeof lp === "object" && lp.regionCode && !customRegionMapping[lp.regionCode]) {
					const { regionName: name, emoji } = lp;
					customRegionMapping[lp.regionCode] = {
						locale,
						...name && { name },
						...emoji && { emoji }
					};
				}
				this.customRegionMapping = customRegionMapping;
			}
			customMapping = this.customRegionMapping;
		}
		return getRegionProperties(region, this.targetLocale, customMapping);
	}
	requiresTranslation(sourceLocale = this.sourceLocale, targetLocale = this.targetLocale, approvedLocales = this.locales, customMapping = this.customMapping) {
		if (!sourceLocale) throw new Error(noSourceLocaleProvidedError("requiresTranslation"));
		if (!targetLocale) throw new Error(noTargetLocaleProvidedError("requiresTranslation"));
		if (customMapping === this.customMapping) return this.localeConfig.requiresTranslation(targetLocale, sourceLocale, approvedLocales);
		return requiresTranslation(sourceLocale, targetLocale, approvedLocales, customMapping);
	}
	determineLocale(locales, approvedLocales = this.locales || [], customMapping = this.customMapping) {
		if (customMapping === this.customMapping) return this.localeConfig.determineLocale(locales, approvedLocales ?? []);
		return determineLocale$2(locales, approvedLocales, customMapping);
	}
	getLocaleDirection(locale = this.targetLocale) {
		if (!locale) throw new Error(noTargetLocaleProvidedError("getLocaleDirection"));
		return this.localeConfig.getLocaleDirection(locale);
	}
	isValidLocale(locale = this.targetLocale, customMapping = this.customMapping) {
		if (!locale) throw new Error(noTargetLocaleProvidedError("isValidLocale"));
		if (customMapping === this.customMapping) return this.localeConfig.isValidLocale(locale);
		return isValidLocale(locale, customMapping);
	}
	resolveCanonicalLocale(locale = this.targetLocale, customMapping = this.customMapping) {
		if (!locale) throw new Error(noTargetLocaleProvidedError("resolveCanonicalLocale"));
		if (customMapping === this.customMapping) return this.localeConfig.resolveCanonicalLocale(locale);
		return resolveCanonicalLocale(locale, customMapping);
	}
	resolveAliasLocale(locale, customMapping = this.customMapping) {
		if (!locale) throw new Error(noTargetLocaleProvidedError("resolveAliasLocale"));
		if (customMapping === this.customMapping) return this.localeConfig.resolveAliasLocale(locale);
		return resolveAliasLocale(locale, customMapping);
	}
	standardizeLocale(locale = this.targetLocale) {
		if (!locale) throw new Error(noTargetLocaleProvidedError("standardizeLocale"));
		return this.localeConfig.standardizeLocale(locale);
	}
	isSameDialect(...locales) {
		return this.localeConfig.isSameDialect(...locales);
	}
	isSameLanguage(...locales) {
		return this.localeConfig.isSameLanguage(...locales);
	}
	isSupersetLocale(superLocale, subLocale) {
		return this.localeConfig.isSupersetLocale(superLocale, subLocale);
	}
};
var debugLogLevel = "DEBUG";
function getGeneralTranslationLogLevel() {
	const processLogLevel = readProcessEnvLogLevel();
	if (processLogLevel !== void 0) return processLogLevel;
	return readImportMetaEnv$1(() => void 0);
}
function isDebugLogLevel(logLevel) {
	return logLevel?.toUpperCase() === debugLogLevel;
}
function readProcessEnvLogLevel() {
	if (typeof process !== "object") return;
	return process.env?._GENERALTRANSLATION_LOG_LEVEL;
}
function readImportMetaEnv$1(readValue) {
	try {
		return readValue();
	} catch {
		return;
	}
}
function getNamespace(namespace) {
	const globalObj = globalThis;
	globalObj.__generaltranslation ??= {};
	globalObj.__generaltranslation[namespace] ??= {};
	return globalObj.__generaltranslation[namespace];
}
function getExistingNamespace(namespace) {
	return globalThis.__generaltranslation?.[namespace];
}
function createGlobalSingleton({ namespace, key, source, notInitialized }) {
	function get() {
		const value = getNamespace(namespace)[key];
		if (value === void 0 || value === null) {
			const error = notInitialized();
			throw typeof error === "string" ? new Error(error) : error;
		}
		return value;
	}
	function set(next) {
		const ns = getNamespace(namespace);
		if (ns[key] !== void 0 && ns[key] !== next) {
			if (shouldLogDebugWarnings()) console.warn(createDiagnosticMessage$2({
				source,
				severity: "Warning",
				whatHappened: `Global ${key} singleton instance was already initialized`
			}));
			return;
		}
		ns[key] = next;
	}
	function isInitialized() {
		const value = getNamespace(namespace)[key];
		return value !== void 0 && value !== null;
	}
	return {
		get,
		set,
		isInitialized
	};
}
function shouldLogDebugWarnings() {
	const config = getExistingNamespace("i18n")?.i18nConfig;
	if (hasDebugLoggingConfig(config)) return config.isDebugLoggingEnabled();
	return isDebugLogLevel(getGeneralTranslationLogLevel());
}
function hasDebugLoggingConfig(value) {
	return typeof value === "object" && value !== null && typeof value.isDebugLoggingEnabled === "function";
}
var i18nCacheSingleton = createGlobalSingleton({
	namespace: "i18n",
	key: "i18nCache",
	source: "gt-i18n",
	notInitialized: () => createDiagnosticMessage$2({
		source: "gt-i18n",
		severity: "Error",
		whatHappened: "Cannot read I18nCache before it has been initialized",
		why: "the internal I18nCache singleton is unavailable",
		fix: "Initialize GT before accessing I18nCache (call initializeGT() from your GT framework package)."
	})
});
function getI18nCache() {
	return i18nCacheSingleton.get();
}
function setI18nCache(i18nCacheInstance) {
	i18nCacheSingleton.set(i18nCacheInstance);
}
function getLoadTranslationsType(config) {
	if (config.loadTranslations) return "custom";
	else if ((config.cacheUrl === void 0 || config.cacheUrl === "https://cdn.gtx.dev") && config.projectId) return "gt-remote";
	else if (config.cacheUrl) return "remote";
	else return "disabled";
}
function getTranslationApiType(params) {
	const usesDefaultRuntimeUrl = params.runtimeUrl === void 0 || params.runtimeUrl === "https://api.gtx.dev";
	if (usesDefaultRuntimeUrl && params.projectId && (params.devApiKey || params.apiKey)) return "gt";
	else if (params.runtimeUrl && !usesDefaultRuntimeUrl) return "custom";
	else return "disabled";
}
function getRuntimeEnvironment() {
	const importMetaMode = readImportMetaEnv(() => "production");
	if (importMetaMode) return importMetaMode === "development" ? "development" : "production";
	if (readImportMetaEnv(() => false) === true) return "development";
	return "production";
}
function readImportMetaEnv(readValue) {
	try {
		return readValue();
	} catch {
		return;
	}
}
var logger_default = {
	warn(message) {
		console.warn(message);
	},
	error(message) {
		console.error(message);
	},
	info(message) {
		console.info(message);
	},
	debug(message) {
		console.debug(message);
	}
};
function validateI18nConfigParams(params, gtServicesEnabled) {
	if (!gtServicesEnabled) return;
	const invalidLocales = getInvalidLocales(params);
	const invalidCustomMappingLocales = getInvalidCustomMappingLocales(params);
	const invalidLocaleConfig = [...invalidLocales, ...invalidCustomMappingLocales];
	invalidLocaleConfig.forEach((locale) => {
		logger_default.error(`I18nConfig: ${getInvalidLocaleMessage(locale)}`);
	});
	if (invalidLocaleConfig.length > 0) throw new Error(createDiagnosticMessage$2({
		source: "gt-i18n",
		severity: "Error",
		whatHappened: "Invalid I18nConfig locale configuration",
		details: invalidLocaleConfig.map((locale) => `Invalid locale: ${locale}`),
		fix: "Use valid BCP 47 locale codes or add custom mappings."
	}));
}
function getInvalidLocales({ defaultLocale, locales, customMapping }) {
	const localesToValidate = /* @__PURE__ */ new Set([...defaultLocale ? [defaultLocale] : [], ...locales || []]);
	return Array.from(localesToValidate).filter((locale) => !isValidLocale(locale, customMapping));
}
function getInvalidCustomMappingLocales({ customMapping }) {
	return Object.values(customMapping || {}).flatMap((value) => {
		const locale = typeof value === "string" ? value : value.code;
		return locale && !isValidLocale(locale) ? [locale] : [];
	});
}
function getInvalidLocaleMessage(locale) {
	return createDiagnosticMessage$2({
		whatHappened: `Locale "${locale}" is not valid`,
		fix: "Use a valid BCP 47 locale code or add a custom mapping"
	});
}
var I18nConfig = class extends LocaleConfig {
	constructor(params = {}) {
		const gtServicesEnabled = resolveGTServicesEnabled(params);
		super(getLocaleConfigParams(params, gtServicesEnabled));
		this.runtimeConfig = {
			projectId: params.projectId,
			devApiKey: params.devApiKey,
			apiKey: params.apiKey,
			runtimeUrl: params.runtimeUrl,
			_disableDevHotReload: params._disableDevHotReload,
			_tagIds: params._tagIds
		};
		this.gtServicesEnabled = gtServicesEnabled;
		this.logLevel = getGeneralTranslationLogLevel();
	}
	getDefaultLocale() {
		return this.defaultLocale;
	}
	getLocales() {
		return this.locales;
	}
	getCustomMapping() {
		return this.customMapping || {};
	}
	getProjectId() {
		return this.runtimeConfig.projectId;
	}
	getGTClass(locale) {
		return this.getGTClassClean(locale ? this.resolveLocale(locale) : void 0);
	}
	determineLocale(locales, approvedLocales = this.locales) {
		if (locales == null || Array.isArray(locales) && locales.length === 0) return;
		return super.determineLocale(locales, approvedLocales);
	}
	determineSupportedLocale(candidates, config) {
		return this.determineSupportedLocaleWithConfig(candidates, this.getLocaleConfig(config));
	}
	resolveSupportedLocale(candidates, config) {
		const localeConfig = this.getLocaleConfig(config);
		return this.determineSupportedLocaleWithConfig(candidates, localeConfig) || localeConfig.defaultLocale;
	}
	resolveLocale(locale) {
		const resolvedLocale = this.determineSupportedLocale(locale);
		if (!this.isValidLocale(locale) || !resolvedLocale) throw new Error(`Locale "${locale}" is not valid. Use a valid BCP 47 locale code or add a custom mapping.`);
		return resolvedLocale;
	}
	isDevHotReloadEnabled() {
		return !this.runtimeConfig._disableDevHotReload && !!this.runtimeConfig.devApiKey && !!this.runtimeConfig.projectId && this.runtimeConfig.runtimeUrl !== null && this.runtimeConfig.runtimeUrl !== "" && getRuntimeEnvironment() === "development";
	}
	isGTServicesEnabled() {
		return this.gtServicesEnabled;
	}
	isDebugLoggingEnabled() {
		return isDebugLogLevel(this.logLevel);
	}
	getGTClassClean(locale) {
		return new GTRuntime({
			sourceLocale: this.getDefaultLocale(),
			targetLocale: locale,
			locales: Array.from(new Set(this.getLocales().map((locale) => this.resolveCanonicalLocale(locale)))),
			customMapping: this.getCustomMapping(),
			projectId: this.runtimeConfig.projectId,
			baseUrl: this.runtimeConfig.runtimeUrl || void 0,
			apiKey: this.runtimeConfig.apiKey,
			devApiKey: this.runtimeConfig.devApiKey
		});
	}
	getLocaleConfig(config) {
		if (!config || !hasI18nConfigParams(config)) return this;
		return new LocaleConfig(getLocaleResolverConfigParams(config));
	}
	determineSupportedLocaleWithConfig(candidates, localeConfig) {
		if (candidates == null || Array.isArray(candidates) && candidates.length === 0) return;
		return localeConfig.determineLocale(candidates);
	}
};
function getLocaleConfigParams(params, gtServicesEnabled) {
	const { defaultLocale = "en", locales = [], customMapping } = params;
	validateI18nConfigParams({
		...params,
		defaultLocale,
		locales,
		customMapping
	}, gtServicesEnabled);
	return {
		defaultLocale,
		locales: Array.from(/* @__PURE__ */ new Set([defaultLocale, ...locales])),
		customMapping: customMapping || {}
	};
}
function getLocaleResolverConfigParams({ defaultLocale = "en", locales = [], customMapping } = {}) {
	return {
		defaultLocale,
		locales: locales?.length ? locales : [defaultLocale],
		customMapping: customMapping || {}
	};
}
function hasI18nConfigParams(config) {
	return config.defaultLocale !== void 0 || config.locales !== void 0 || config.customMapping !== void 0;
}
function resolveGTServicesEnabled(config) {
	return getLoadTranslationsType(config) === "gt-remote" || getTranslationApiType(config) === "gt";
}
var i18nConfigSingleton = createGlobalSingleton({
	namespace: "i18n",
	key: "i18nConfig",
	source: "gt-i18n",
	notInitialized: () => createDiagnosticMessage$2({
		source: "gt-i18n",
		severity: "Error",
		whatHappened: "Cannot read I18nConfig before it has been initialized",
		why: "the internal I18nConfig singleton is unavailable",
		fix: "Initialize GT before reading locale config (call initializeGT() from your GT framework package)."
	})
});
var getI18nConfig = i18nConfigSingleton.get;
var setI18nConfig = i18nConfigSingleton.set;
i18nConfigSingleton.isInitialized;
function extractVariables(options) {
	return Object.fromEntries(Object.entries(options).filter(([key]) => key !== "$id" && key !== "$context" && key !== "$maxChars" && key !== "$hash" && key !== "$_hash" && key !== "$_source" && key !== "$_fallback" && key !== "$format" && key !== "$locale" && key !== "$requiresReview"));
}
var createInterpolationFailureMessage = (message) => `String interpolation failed for message: "${message}".`;
function formatMessage$1(encodedMsg, variables, locales, dataFormat) {
	try {
		return formatMessage(encodedMsg, {
			variables,
			locales,
			dataFormat
		});
	} catch {
		logger_default.warn(createInterpolationFailureMessage(encodedMsg));
		return encodedMsg;
	}
}
function interpolateIcuMessage(encodedMsg, options) {
	if (!encodedMsg) return encodedMsg;
	const source = options.$_fallback;
	const variables = extractVariables(options);
	try {
		const declaredVars = extractVars(source || "");
		return formatCutoff(formatMessage$1(Object.keys(declaredVars).length ? condenseVars(encodedMsg) : encodedMsg, {
			...variables,
			...declaredVars,
			[VAR_IDENTIFIER]: "other"
		}, options.$locale, options.$format), { maxChars: options.$maxChars });
	} catch {
		logger_default.warn(createInterpolationFailureMessage(encodedMsg));
		if (options.$_fallback != null) return interpolateIcuMessage(options.$_fallback, {
			...options,
			$_fallback: void 0
		});
		return formatCutoff(encodedMsg, { maxChars: options.$maxChars });
	}
}
function interpolateStringMessage(encodedMsg, options) {
	return formatCutoff(encodedMsg, {
		locales: options.$locale,
		maxChars: options.$maxChars
	});
}
function interpolateMessage({ source, target, options, sourceLocale }) {
	if (target != null) return routeInterpolation(target, {
		$_fallback: source,
		...options
	});
	return routeInterpolation(source, getSourceOptions(options, sourceLocale));
}
function routeInterpolation(content, options) {
	switch (options.$format ?? "STRING") {
		case "ICU": return interpolateIcuMessage(content, options);
		case "I18NEXT":
		case "STRING": return interpolateStringMessage(content, options);
		default: return content;
	}
}
function getSourceOptions(options, sourceLocale) {
	if (!sourceLocale) return options;
	return {
		...options,
		$locale: sourceLocale
	};
}
function createLookupOptions(locale, options, defaultFormat) {
	return {
		...options,
		$format: options.$format ?? defaultFormat,
		$locale: locale
	};
}
function createConditionStoreSingleton(notInitializedMessage) {
	const singleton = createGlobalSingleton({
		namespace: "i18n",
		key: "conditionStore",
		source: "gt-i18n",
		notInitialized: () => notInitializedMessage
	});
	return {
		getConditionStore: singleton.get,
		setConditionStore: singleton.set,
		isConditionStoreInitialized: singleton.isInitialized
	};
}
var { getConditionStore: getWritableConditionStore, setConditionStore: setWritableConditionStore } = createConditionStoreSingleton(createDiagnosticMessage$2({
	source: "gt-i18n",
	severity: "Error",
	whatHappened: "Cannot read the locale before GT has been initialized",
	why: "the internal ConditionStore singleton is unavailable",
	fix: "Initialize GT before calling translation functions (e.g. call initializeGT() from your GT framework package)."
}));
function hashMessage(message, options) {
	const metadataOptions = options;
	if (metadataOptions.$_hash != null) return metadataOptions.$_hash;
	return hashSource({
		source: options.$format === "ICU" ? indexVars(message) : message,
		...metadataOptions.$context && { context: metadataOptions.$context },
		...metadataOptions.$maxChars != null && { maxChars: Math.abs(metadataOptions.$maxChars) },
		...metadataOptions.$requiresReview === true && { requiresReview: true },
		dataFormat: options.$format
	});
}
function decodeOptions(encodedMsg) {
	if (encodedMsg.lastIndexOf(":") === -1) return null;
	const optionsEncoding = encodedMsg.slice(encodedMsg.lastIndexOf(":") + 1);
	try {
		return JSON.parse(decode(optionsEncoding));
	} catch {
		return null;
	}
}
function isEncodedTranslationOptions(decodedOptions) {
	return typeof decodedOptions.$_hash === "string" && typeof decodedOptions.$_source === "string";
}
function parseAcceptLanguage(header) {
	return (Array.isArray(header) ? header : [header]).flatMap((value) => value?.split(",") ?? []).map((entry, index) => {
		const [locale = "", ...parameters] = entry.split(";").map((value) => value.trim());
		const qualityParameter = parameters.find((parameter) => parameter.toLowerCase().startsWith("q="));
		return {
			locale,
			quality: Number(qualityParameter?.slice(2) ?? 1),
			index
		};
	}).filter(({ locale, quality }) => locale !== "" && locale !== "*" && quality > 0 && quality <= 1).sort((a, b) => b.quality - a.quality || a.index - b.index).map(({ locale }) => locale);
}
function getCookieValue(cookieHeader, cookieName) {
	const prefix = `${cookieName}=`;
	const cookie = cookieHeader?.split(";").map((value) => value.trim()).find((value) => value.startsWith(prefix));
	if (!cookie) return void 0;
	const value = cookie.slice(prefix.length);
	try {
		return decodeURIComponent(value);
	} catch {
		return value;
	}
}
async function getGTInternal({ locale, enableI18n }, _messages) {
	const i18nCache = getI18nCache();
	const sourceLocale = getI18nConfig().getDefaultLocale();
	const lookupTranslation = await i18nCache.getLookupTranslation(enableI18n ? locale : sourceLocale);
	const gt = (message, options = {}) => {
		const lookupOptions = createLookupOptions(enableI18n ? options.$locale ?? locale : getI18nConfig().getDefaultLocale(), options, "ICU");
		return interpolateMessage({
			source: message,
			target: lookupTranslation(message, lookupOptions),
			options: lookupOptions,
			sourceLocale
		});
	};
	return gt;
}
async function getMessagesInternal({ locale, enableI18n }) {
	const gt = await getGTInternal({
		locale,
		enableI18n
	});
	const m = (encodedMsg, options = {}) => {
		if (encodedMsg == null) return encodedMsg;
		const decodedOptions = decodeOptions(encodedMsg) ?? {};
		if (isEncodedTranslationOptions(decodedOptions)) return gt(decodedOptions.$_source, decodedOptions);
		return gt(encodedMsg, options);
	};
	return m;
}
function renderDictionaryEntry({ sourceLocale, targetLocale, sourceEntry, target, dictionaryOptions, options = {} }) {
	const lookupOptions = createLookupOptions(targetLocale, {
		...dictionaryOptions,
		...extractVariables(options)
	}, dictionaryOptions.$format);
	return interpolateMessage({
		source: sourceEntry.entry,
		target,
		options: lookupOptions,
		sourceLocale
	});
}
function getDictionaryPath(id) {
	const path = id ? id.split(".") : [];
	for (const segment of path) assertSafeDictionaryPathSegment(segment, id);
	return path;
}
function assertSafeDictionaryPathSegment(segment, path) {
	if (segment === "__proto__" || segment === "constructor" || segment === "prototype") throw new Error(`Dictionary path "${path}" contains an unsafe segment`);
}
function isDictionaryValue(value) {
	return typeof value === "object" && value != null && !Array.isArray(value);
}
function cloneDictionaryValue(value) {
	if (value === void 0 || typeof value === "string") return value;
	return structuredClone(value);
}
function getDictionaryValueAtPath(dictionary, path) {
	let current = dictionary;
	for (const segment of getDictionaryPath(path)) {
		if (!isDictionaryValue(current)) return;
		current = current[segment];
	}
	return current;
}
function setDictionaryValueAtPath(dictionary, path, value) {
	const segments = getDictionaryPath(path);
	if (isDictionaryValue(value)) assertSafeDictionaryObject(value, path);
	if (segments.length === 0) {
		if (isDictionaryValue(value)) replaceDictionary(dictionary, value);
		return;
	}
	let current = dictionary;
	for (const segment of segments.slice(0, -1)) {
		const next = current[segment];
		if (!isDictionaryValue(next)) current[segment] = {};
		current = current[segment];
	}
	const leafSegment = segments[segments.length - 1];
	current[leafSegment] = value;
}
function getDictionaryEntry(value) {
	if (!isDictionaryLeafNode(value)) return;
	return {
		entry: Array.isArray(value) ? value[0] : value,
		options: Array.isArray(value) ? value[1] ?? {} : {}
	};
}
function getDictionaryValue(value) {
	if (Object.keys(value.options).length === 0) return value.entry;
	return [value.entry, value.options];
}
function resolveDictionaryLookupOptions(options) {
	const { $format, ...rest } = options;
	return {
		...rest,
		$format: isStringFormat($format) ? $format : "ICU"
	};
}
function isDictionaryLeafNode(value) {
	if (typeof value === "string") return true;
	if (!Array.isArray(value) || typeof value[0] !== "string") return false;
	if (value.length === 1) return true;
	return value.length === 2 && isDictionaryLeafOptions(value[1]);
}
function isDictionaryLeafOptions(value) {
	if (typeof value !== "object" || value == null || Array.isArray(value)) return false;
	const options = value;
	return (options.$context === void 0 || typeof options.$context === "string") && (options.$format === void 0 || isStringFormat(options.$format)) && (options.$maxChars === void 0 || typeof options.$maxChars === "number");
}
function isStringFormat(value) {
	return value === "ICU" || value === "I18NEXT" || value === "STRING";
}
function replaceDictionary(target, source) {
	for (const key of Object.keys(target)) delete target[key];
	for (const key of Object.keys(source)) target[key] = source[key];
}
function assertSafeDictionaryObject(dictionary, parentPath = "") {
	for (const [key, value] of Object.entries(dictionary)) {
		const path = parentPath ? `${parentPath}.${key}` : key;
		assertSafeDictionaryPathSegment(key, path);
		if (isDictionaryValue(value)) assertSafeDictionaryObject(value, path);
	}
}
function renderDictionaryObject({ sourceObject, targetObject, translate }) {
	const targetEntry = getDictionaryEntry(targetObject);
	if (targetEntry !== void 0) return targetEntry.entry;
	if (isDictionaryValue(targetObject)) {
		if (!isDictionaryValue(sourceObject)) return renderDictionaryObject({
			sourceObject: targetObject,
			targetObject: void 0,
			translate
		});
		return renderDictionaryObjectChildren({
			sourceObject,
			targetObject,
			translate
		});
	}
	const sourceEntry = getDictionaryEntry(sourceObject);
	if (sourceEntry !== void 0) {
		const dictionaryOptions = resolveDictionaryLookupOptions(sourceEntry.options);
		return translate?.(sourceEntry, dictionaryOptions) ?? sourceEntry.entry;
	}
	if (isDictionaryValue(sourceObject)) return renderDictionaryObjectChildren({
		sourceObject,
		targetObject: void 0,
		translate
	});
	throw new Error("Dictionary object cannot be rendered");
}
function renderDictionaryObjectChildren({ sourceObject, targetObject, translate }) {
	if (!isDictionaryValue(sourceObject)) return renderDictionaryObject({
		sourceObject,
		targetObject,
		translate
	});
	const result = {};
	const keys = /* @__PURE__ */ new Set([...Object.keys(sourceObject), ...isDictionaryValue(targetObject) ? Object.keys(targetObject) : []]);
	for (const key of Array.from(keys)) {
		const renderedChild = renderDictionaryObject({
			sourceObject: sourceObject[key],
			targetObject: isDictionaryValue(targetObject) ? targetObject[key] : void 0,
			translate
		});
		if (renderedChild !== void 0) result[key] = renderedChild;
	}
	return result;
}
async function getTranslationsInternal({ locale, enableI18n, rootId }) {
	const i18nCache = getI18nCache();
	const sourceLocale = getI18nConfig().getDefaultLocale();
	const targetLocale = enableI18n ? locale : sourceLocale;
	const [sourceDictionary, targetDictionary, lookupTranslation] = await Promise.all([
		i18nCache.getLookupDictionary(sourceLocale),
		i18nCache.getLookupDictionary(targetLocale),
		i18nCache.getLookupTranslation(targetLocale)
	]);
	const { lookupDictionary: lookupSourceDictionary, lookupDictionaryObj: lookupSourceDictionaryObj } = sourceDictionary;
	const { lookupDictionary: lookupTargetDictionary, lookupDictionaryObj: lookupTargetDictionaryObj } = targetDictionary;
	const t = ((id, options = {}) => {
		id = getId(rootId, id);
		const sourceEntry = lookupSourceDictionary(id);
		if (sourceEntry === void 0) throw new Error(`Dictionary entry ${id} cannot be found`);
		const targetEntry = lookupTargetDictionary(id);
		const dictionaryOptions = resolveDictionaryLookupOptions(sourceEntry.options);
		return renderDictionaryEntry({
			sourceLocale,
			targetLocale,
			sourceEntry,
			target: targetEntry?.entry ?? lookupTranslation(sourceEntry.entry, dictionaryOptions),
			dictionaryOptions,
			options
		});
	});
	t.obj = (id) => {
		id = getId(rootId, id);
		const sourceObject = lookupSourceDictionaryObj(id);
		if (sourceObject === void 0) throw new Error(`Dictionary entry ${id} cannot be found`);
		return renderDictionaryObject({
			sourceObject,
			targetObject: lookupTargetDictionaryObj(id),
			translate: (sourceEntry, dictionaryOptions) => lookupTranslation(sourceEntry.entry, dictionaryOptions)
		});
	};
	return t;
}
function getId(prefix, suffix) {
	return prefix ? `${prefix}.${suffix}` : suffix;
}
function createTranslateManyFactory(gtInstance, timeout, metadata = {}) {
	return (locale) => (sources) => gtInstance.translateMany(sources, {
		...metadata,
		targetLocale: locale
	}, timeout);
}
function createRemoteTranslationLoader(params) {
	const unlocalizedUrl = generateUrl(params);
	const loader = async (locale) => {
		locale = resolveCanonicalLocale(locale, params.customMapping);
		const url = unlocalizedUrl.replace("[locale]", locale);
		const response = await fetch(url);
		if (!response.ok) throw new Error(`Failed to load translations from ${url}`);
		return await response.json();
	};
	return loader;
}
function generateUrl(params) {
	const { cacheUrl = defaultCacheUrl, projectId, _versionId, _branchId } = params;
	const versionIdSegment = _versionId ? `/${_versionId}` : "";
	const branchIdQuery = _branchId ? `?branchId=${_branchId}` : "";
	return `${cacheUrl}/${projectId}/[locale]` + versionIdSegment + branchIdQuery;
}
function routeCreateTranslationLoader({ type, remoteTranslationLoaderParams, loadTranslations }) {
	const { cacheUrl, projectId, _versionId, _branchId } = remoteTranslationLoaderParams;
	switch (type) {
		case "remote":
		case "gt-remote":
			if (!projectId) return createWarnOnceTranslationLoader(createDiagnosticMessage$2({
				whatHappened: "Loading translations from a remote store needs a projectId. No translations will be loaded.",
				fix: "Add projectId to the I18nCache config, or set cacheUrl to null to disable translation loading"
			}));
			return createRemoteTranslationLoader({
				cacheUrl,
				projectId,
				_versionId,
				_branchId,
				customMapping: getI18nConfig().getCustomMapping()
			});
		case "custom": return loadTranslations;
		case "disabled":
			if (cacheUrl === null) return async () => ({});
			return createWarnOnceTranslationLoader(createDiagnosticMessage$2({
				whatHappened: "No translation loader found. No translations will be loaded.",
				fix: "Add projectId to the I18nCache config (to load from the GT remote store), provide a loadTranslations function, or set cacheUrl to null to disable translation loading"
			}));
	}
}
function createWarnOnceTranslationLoader(warning) {
	let warned = false;
	return async (_locale) => {
		if (!warned) {
			warned = true;
			logger_default.warn("I18nCache: " + warning);
		}
		return {};
	};
}
async function dedupePending(pending, key, create) {
	let promise = pending.get(key);
	if (!promise) {
		promise = create();
		pending.set(key, promise);
	}
	try {
		return await promise;
	} finally {
		pending.delete(key);
	}
}
var ResourceCache = class {
	constructor({ load, ttl }) {
		this.cache = /* @__PURE__ */ new Map();
		this.pendingLoads = /* @__PURE__ */ new Map();
		this.loadResource = load;
		this.ttl = ttl === null ? -1 : ttl ?? 6e4;
	}
	get(key) {
		const entry = this.cache.get(key);
		if (!entry || this.isExpired(entry)) return;
		return entry.value;
	}
	set(key, value, { expiresAt = this.getExpiresAt() } = {}) {
		this.cache.set(key, {
			expiresAt,
			value
		});
	}
	async getOrLoad(key) {
		return this.get(key) ?? await this.load(key);
	}
	load(key) {
		return dedupePending(this.pendingLoads, key, () => this.loadResource(key).then((value) => {
			this.set(key, value);
			return value;
		}));
	}
	getExpiresAt() {
		return this.ttl <= 0 ? this.ttl : Date.now() + this.ttl;
	}
	isExpired(entry) {
		if (entry.expiresAt === 0) return true;
		return entry.expiresAt > 0 && entry.expiresAt < Date.now();
	}
};
var DEFAULT_BATCH_CONFIG = {
	maxConcurrentRequests: 100,
	maxBatchSize: 25,
	batchInterval: 50
};
function getPositiveValue(value, defaultValue, integer = false) {
	if (value === void 0 || !Number.isFinite(value)) return defaultValue;
	const resolved = integer ? Math.trunc(value) : value;
	return resolved > 0 ? resolved : defaultValue;
}
function normalizeBatchConfig(batchConfig) {
	return {
		maxConcurrentRequests: getPositiveValue(batchConfig?.maxConcurrentRequests, DEFAULT_BATCH_CONFIG.maxConcurrentRequests, true),
		maxBatchSize: getPositiveValue(batchConfig?.maxBatchSize, DEFAULT_BATCH_CONFIG.maxBatchSize, true),
		batchInterval: getPositiveValue(batchConfig?.batchInterval, DEFAULT_BATCH_CONFIG.batchInterval)
	};
}
var TranslationsCache = class {
	constructor({ init, translateMany, onMiss, batchConfig }) {
		this.pendingTranslations = /* @__PURE__ */ new Map();
		this.queue = [];
		this.batchTimer = null;
		this.activeRequests = 0;
		this.cache = structuredClone(init);
		this.translateMany = translateMany;
		this.batchConfig = normalizeBatchConfig(batchConfig);
		this.onMiss = onMiss;
	}
	get(key) {
		const cacheKey = this.getCacheKey(key);
		return this.cache[cacheKey];
	}
	async miss(key) {
		const cacheKey = this.getCacheKey(key);
		const value = await dedupePending(this.pendingTranslations, cacheKey, () => this.translate(key));
		if (value != null) this.onMiss?.(cacheKey, value);
		return value;
	}
	getInternalCache() {
		return structuredClone(this.cache);
	}
	getCacheKey(key) {
		return hashMessage(key.message, key.options);
	}
	translate(key) {
		const translationPromise = this.enqueueTranslation(key);
		if (this.queue.length >= this.batchConfig.maxBatchSize) this.flushNow();
		else this.scheduleBatch();
		return translationPromise;
	}
	update(translations) {
		this.cache = {
			...this.cache,
			...translations
		};
	}
	flushNow() {
		if (this.batchTimer) {
			clearTimeout(this.batchTimer);
			this.batchTimer = null;
		}
		this.drainQueue();
	}
	scheduleBatch() {
		if (this.batchTimer) return;
		this.batchTimer = setTimeout(() => {
			this.batchTimer = null;
			this.drainQueue();
		}, this.batchConfig.batchInterval);
	}
	drainQueue() {
		while (this.queue.length > 0 && this.activeRequests < this.batchConfig.maxConcurrentRequests) {
			const batch = this.queue.splice(0, this.batchConfig.maxBatchSize);
			this.sendBatchRequest(batch);
		}
		if (this.queue.length > 0) this.scheduleBatch();
	}
	enqueueTranslation(key) {
		const hash = this.getCacheKey(key);
		const options = key.options;
		const metadataOptions = options;
		return new Promise((resolve, reject) => {
			this.queue.push({
				key: hash,
				source: key.message,
				metadata: {
					hash,
					...metadataOptions.$context && { context: metadataOptions.$context },
					...metadataOptions.$id && { id: metadataOptions.$id },
					...metadataOptions.$maxChars != null && { maxChars: Math.abs(metadataOptions.$maxChars) },
					...metadataOptions.$requiresReview === true && { requiresReview: true },
					dataFormat: options.$format
				},
				resolve: (value) => resolve(value),
				reject
			});
		});
	}
	async sendBatchRequest(batch) {
		this.activeRequests++;
		const requests = convertBatchToTranslateManyParams(batch);
		const response = await this.sendBatchRequestWithErrorHandling(batch, requests);
		if (response) this.handleTranslationResponse(batch, response);
		this.activeRequests--;
	}
	async sendBatchRequestWithErrorHandling(batch, requests) {
		try {
			return await this.translateMany(requests);
		} catch (error) {
			for (const entry of batch) entry.reject(error);
			return;
		}
	}
	handleTranslationResponse(batch, response) {
		for (const entry of batch) {
			const { key } = entry;
			const result = response[key];
			if (result && result.success) {
				const translation = result.translation;
				this.cache[key] = translation;
				entry.resolve(translation);
			} else entry.reject(result?.error);
		}
	}
};
function convertBatchToTranslateManyParams(batch) {
	return batch.reduce((acc, entry) => {
		acc[entry.key] = {
			source: entry.source,
			metadata: entry.metadata
		};
		return acc;
	}, {});
}
var DictionarySourceNotFoundError = class extends Error {
	constructor(id) {
		super(`I18nCache: source dictionary entry ${id} is not defined`);
		this.name = "DictionarySourceNotFoundError";
	}
};
async function materializeDictionaryValue({ key, sourceValue, targetValue, translateEntry }) {
	if (getDictionaryEntry(targetValue) !== void 0) return cloneDictionaryValue(targetValue);
	if (isDictionaryValue(targetValue) && !isDictionaryValue(sourceValue)) return cloneDictionaryValue(targetValue);
	const sourceEntry = getDictionaryEntry(sourceValue);
	if (sourceEntry !== void 0) return await translateEntry(key, sourceEntry);
	if (!isDictionaryValue(sourceValue)) throw new DictionarySourceNotFoundError(key);
	const targetDictionary = isDictionaryValue(targetValue) ? targetValue : {};
	const keys = /* @__PURE__ */ new Set([...Object.keys(sourceValue), ...Object.keys(targetDictionary)]);
	const entries = await Promise.all(Array.from(keys).map(async (childKey) => {
		const childPath = key ? `${key}.${childKey}` : childKey;
		assertSafeDictionaryPathSegment(childKey, childPath);
		const childSource = sourceValue[childKey];
		if (childSource === void 0) return [childKey, cloneDictionaryValue(targetDictionary[childKey])];
		return [childKey, await materializeDictionaryValue({
			key: childPath,
			sourceValue: childSource,
			targetValue: targetDictionary[childKey],
			translateEntry
		})];
	}));
	return Object.fromEntries(entries);
}
function cloneDictionaryEntry(entry) {
	return {
		entry: entry.entry,
		options: structuredClone(entry.options)
	};
}
var DictionaryCache = class {
	constructor({ init, runtimeTranslate }) {
		this.pendingTranslations = /* @__PURE__ */ new Map();
		this.pendingMaterializations = /* @__PURE__ */ new Map();
		this.cache = structuredClone(init);
		this.runtimeTranslate = runtimeTranslate;
	}
	getEntry(key) {
		const entry = getDictionaryEntry(getDictionaryValueAtPath(this.cache, key));
		if (entry === void 0) return;
		return cloneDictionaryEntry(entry);
	}
	getValue(key) {
		const value = getDictionaryValueAtPath(this.cache, key);
		if (value === void 0) return;
		return cloneDictionaryValue(value);
	}
	setValue(key, value) {
		setDictionaryValueAtPath(this.cache, key, cloneDictionaryValue(value));
	}
	getInternalCache() {
		return cloneDictionaryValue(this.cache);
	}
	update(dictionary) {
		mergeDictionary(this.cache, dictionary);
	}
	async materializeValue(key, sourceValue, targetValue = getDictionaryValueAtPath(this.cache, key)) {
		return dedupePending(this.pendingMaterializations, key, () => materializeDictionaryValue({
			key,
			sourceValue,
			targetValue,
			translateEntry: async (entryKey, sourceEntry) => getDictionaryValue(await this.materializeEntry(entryKey, sourceEntry))
		}).then((value) => {
			this.setValue(key, value);
			return value;
		}));
	}
	async materializeEntry(key, sourceEntry) {
		return cloneDictionaryEntry(await dedupePending(this.pendingTranslations, key, () => this.runtimeTranslate(key, sourceEntry).then((value) => {
			setDictionaryValueAtPath(this.cache, key, value);
			const entry = getDictionaryEntry(value);
			if (entry === void 0) throw new Error("DictionaryCache materializeEntry did not return a DictionaryEntry");
			return cloneDictionaryEntry(entry);
		})));
	}
};
function mergeDictionary(target, source) {
	for (const [key, value] of Object.entries(source)) {
		const targetValue = target[key];
		if (isDictionaryValue(targetValue) && isDictionaryValue(value)) mergeDictionary(targetValue, value);
		else target[key] = cloneDictionaryValue(value);
	}
}
var DEFAULT_TRANSLATION_TIMEOUT = 12e3;
var I18nCache = class {
	constructor(params) {
		validateCacheParams(params);
		this.config = {
			projectId: params.projectId,
			devApiKey: params.devApiKey,
			apiKey: params.apiKey,
			runtimeUrl: params.runtimeUrl,
			modelProvider: params.modelProvider,
			cacheExpiryTime: params.cacheExpiryTime,
			batchConfig: params.batchConfig,
			runtimeTranslation: params.runtimeTranslation,
			_versionId: params._versionId
		};
		const loadTranslations = routeCreateTranslationLoader({
			loadTranslations: params.loadTranslations,
			type: getLoadTranslationsType(params),
			remoteTranslationLoaderParams: {
				cacheUrl: params.cacheUrl,
				projectId: params.projectId,
				_versionId: params._versionId,
				_branchId: params._branchId
			}
		});
		const loadDictionary = params.loadDictionary ?? (() => Promise.resolve({}));
		this.createTranslateMany = createTranslateManyFactory(getI18nConfig().getGTClass(), this.config.runtimeTranslation?.timeout ?? DEFAULT_TRANSLATION_TIMEOUT, {
			...this.config.modelProvider && { modelProvider: this.config.modelProvider },
			...this.config.runtimeTranslation?.metadata
		});
		const ttl = this.config.cacheExpiryTime;
		this.translations = new ResourceCache({
			ttl,
			load: async (locale) => this.createTranslationsCache(locale, await loadTranslations(locale))
		});
		this.dictionaries = new ResourceCache({
			ttl,
			load: async (locale) => this.createDictionaryCache(locale, await loadDictionary(locale))
		});
		const defaultLocale = getI18nConfig().getDefaultLocale();
		this.dictionaries.set(defaultLocale, this.createDictionaryCache(defaultLocale, params.dictionary ?? {}), { expiresAt: -1 });
	}
	createTranslationsCache(locale, init) {
		return new TranslationsCache({
			init,
			translateMany: this.createTranslateMany(locale),
			batchConfig: this.config.batchConfig,
			onMiss: (hash, translation) => this.onTranslationsCacheMiss?.({
				locale,
				hash,
				translation
			})
		});
	}
	createDictionaryCache(locale, init) {
		return new DictionaryCache({
			init,
			runtimeTranslate: (id, sourceEntry) => this.translateDictionaryEntry(locale, id, sourceEntry)
		});
	}
	getVersionId() {
		return this.config._versionId;
	}
	updateTranslations(translationsSnapshot) {
		for (const locale in translationsSnapshot) {
			const txCache = this.translations.get(locale);
			if (txCache) txCache.update(translationsSnapshot[locale]);
			else this.translations.set(locale, this.createTranslationsCache(locale, translationsSnapshot[locale]));
		}
	}
	updateDictionaries(dictionarySnapshot) {
		for (const locale in dictionarySnapshot) {
			const dictionaryCache = this.dictionaries.get(locale);
			if (dictionaryCache) dictionaryCache.update(dictionarySnapshot[locale]);
			else this.dictionaries.set(locale, this.createDictionaryCache(locale, dictionarySnapshot[locale]));
		}
	}
	async loadTranslations(locale) {
		return this.guardAsync({}, async () => {
			const translationLocale = this._resolveCacheLocale(locale);
			if (!translationLocale) return {};
			return (await this.translations.getOrLoad(translationLocale)).getInternalCache();
		});
	}
	async loadDictionary(locale) {
		return this.guardAsync({}, async () => {
			const dictionaryLocale = this._resolveCacheLocale(locale);
			if (!dictionaryLocale) return this.getDefaultDictionaryCache()?.getInternalCache() ?? {};
			return (await this.dictionaries.getOrLoad(dictionaryLocale)).getInternalCache();
		});
	}
	lookupDictionary(locale, id) {
		return this.guard(void 0, () => this.dictionaries.get(this.resolveDictionaryCacheLocale(locale))?.getEntry(id));
	}
	lookupDictionaryObj(locale, id) {
		return this.guard(void 0, () => this.dictionaries.get(this.resolveDictionaryCacheLocale(locale))?.getValue(id));
	}
	async getLookupDictionary(locale) {
		return this.guardAsync({
			lookupDictionary: () => void 0,
			lookupDictionaryObj: () => void 0
		}, async () => {
			const asyncBoundaryLocale = this._resolveCacheLocale(locale);
			const asyncBoundaryDictionaryCache = asyncBoundaryLocale ? await this.dictionaries.getOrLoad(asyncBoundaryLocale) : this.getDefaultDictionaryCache();
			return {
				lookupDictionary: (id) => asyncBoundaryDictionaryCache?.getEntry(id),
				lookupDictionaryObj: (id) => asyncBoundaryDictionaryCache?.getValue(id)
			};
		});
	}
	async lookupDictionaryWithFallback(locale, id) {
		return this.guardAsync(void 0, async () => {
			const dictionaryLocale = this._resolveCacheLocale(locale);
			if (!dictionaryLocale) return this.getSourceDictionaryEntry(id);
			const dictionaryCache = await this.dictionaries.getOrLoad(dictionaryLocale);
			return dictionaryCache.getEntry(id) ?? await dictionaryCache.materializeEntry(id, this.getSourceDictionaryEntry(id));
		});
	}
	async lookupDictionaryObjWithFallback(locale, id) {
		return this.guardAsync(void 0, async () => {
			const dictionaryLocale = this._resolveCacheLocale(locale);
			if (!dictionaryLocale) return this.getSourceDictionaryObject(id);
			const dictionaryCache = await this.dictionaries.getOrLoad(dictionaryLocale);
			const targetObject = dictionaryCache.getValue(id);
			const sourceObject = this.getSourceDictionaryObject(id, { throwOnMissing: false });
			if (sourceObject === void 0) {
				if (targetObject !== void 0) return targetObject;
				throw new DictionarySourceNotFoundError(id);
			}
			return await dictionaryCache.materializeValue(id, sourceObject, targetObject);
		});
	}
	async translateDictionaryEntry(locale, id, sourceEntry) {
		const translation = await this.lookupTranslationWithFallbackResolved(locale, sourceEntry.entry, resolveDictionaryLookupOptions(sourceEntry.options));
		if (typeof translation !== "string") throw new Error(`Dictionary entry "${id}" could not be translated into a string. Check the source entry and translation loader output.`);
		return translation;
	}
	getSourceDictionaryEntry(id) {
		const sourceEntry = this.getDefaultDictionaryCache()?.getEntry(id);
		if (sourceEntry === void 0) throw new DictionarySourceNotFoundError(id);
		return sourceEntry;
	}
	getSourceDictionaryObject(id, { throwOnMissing = true } = {}) {
		const sourceObject = this.getDefaultDictionaryCache()?.getValue(id);
		if (sourceObject === void 0 && throwOnMissing) throw new DictionarySourceNotFoundError(id);
		return sourceObject;
	}
	getDefaultDictionaryCache() {
		return this.dictionaries.get(getI18nConfig().getDefaultLocale());
	}
	resolveDictionaryCacheLocale(locale) {
		return this._resolveCacheLocale(locale) ?? getI18nConfig().getDefaultLocale();
	}
	lookupTranslation(locale, message, options) {
		return this.guard(void 0, () => {
			const { translationLocale, options: lookupOptions } = this.resolveLookupParams(locale, options);
			if (!translationLocale) return message;
			return this.translations.get(translationLocale)?.get({
				message,
				options: lookupOptions
			});
		});
	}
	async lookupTranslationWithFallback(locale, message, options) {
		return this.guardAsync(void 0, () => this.lookupTranslationWithFallbackResolved(locale, message, options));
	}
	async getLookupTranslation(locale) {
		return this.guardAsync((message) => message, async () => {
			const asyncBoundaryLocale = this._resolveCacheLocale(locale);
			if (!asyncBoundaryLocale) return (message) => message;
			const asyncBoundaryTxCache = await this.translations.getOrLoad(asyncBoundaryLocale);
			const prefetchEntries = async (prefetchEntries = []) => {};
			const lookupTranslation = (message, lookupOptions = {}) => this.guard(void 0, () => {
				const { translationLocale, options } = this.resolveLookupParams(lookupOptions.$locale ?? asyncBoundaryLocale, lookupOptions);
				if (!translationLocale) return message;
				return (translationLocale === asyncBoundaryLocale ? asyncBoundaryTxCache : this.translations.get(translationLocale))?.get({
					message,
					options
				});
			});
			Object.assign(lookupTranslation, { prefetchEntries });
			return lookupTranslation;
		});
	}
	guard(fallback, fn) {
		try {
			return fn();
		} catch (error) {
			this.handleError(error);
			return fallback;
		}
	}
	async guardAsync(fallback, fn) {
		try {
			return await fn();
		} catch (error) {
			this.handleError(error);
			return fallback;
		}
	}
	handleError(error) {
		if (error instanceof DictionarySourceNotFoundError) throw error;
		switch (getRuntimeEnvironment()) {
			case "development": throw error;
			default: logger_default.error("I18nCache: " + error);
		}
	}
	_resolveLocale(locale) {
		const i18nConfig = getI18nConfig();
		const resolvedLocale = i18nConfig.determineLocale(locale);
		if (!i18nConfig.isValidLocale(locale) || !resolvedLocale) throw new Error(`Locale "${locale}" is not valid. Use a valid BCP 47 locale code or add a custom mapping.`);
		return resolvedLocale;
	}
	_resolveCacheLocale(locale) {
		const resolvedLocale = this._resolveLocale(locale);
		const i18nConfig = getI18nConfig();
		if (i18nConfig.requiresTranslation(resolvedLocale)) return resolvedLocale;
		const aliasLocale = i18nConfig.resolveAliasLocale(i18nConfig.standardizeLocale(locale));
		if (i18nConfig.requiresTranslation(aliasLocale)) return aliasLocale;
	}
	resolveLookupParams(locale, options) {
		const translationLocale = this._resolveCacheLocale(locale);
		return {
			translationLocale,
			options: translationLocale ? this.resolveLookupOptions(options, translationLocale) : options
		};
	}
	resolveLookupOptions(options = {}, translationLocale) {
		if (!options.$locale) return options;
		return {
			...options,
			$locale: translationLocale ?? this._resolveCacheLocale(options.$locale) ?? this._resolveLocale(options.$locale)
		};
	}
	async lookupTranslationWithFallbackResolved(locale, message, options) {
		const { translationLocale, options: lookupOptions } = this.resolveLookupParams(locale, options);
		if (!translationLocale) return message;
		const txCache = await this.translations.getOrLoad(translationLocale);
		let translation = txCache.get({
			message,
			options: lookupOptions
		});
		if (translation == null) translation = await txCache.miss({
			message,
			options: lookupOptions
		});
		return translation;
	}
};
function validateCacheParams(params) {
	if (params.runtimeUrl && params.runtimeUrl !== "https://api.gtx.dev") {
		if (!params.projectId) logger_default.warn("I18nCache: " + createDiagnosticMessage$2({
			whatHappened: "Runtime translation needs a projectId",
			fix: "Add projectId to the I18nCache config or disable runtime translation"
		}));
		if (!params.devApiKey && !params.apiKey) logger_default.warn("I18nCache: " + createDiagnosticMessage$2({
			whatHappened: "Runtime translation needs devApiKey or apiKey",
			fix: "Add credentials to the I18nCache config or disable runtime translation"
		}));
	}
	if (params.loadDictionary && !params.dictionary) {
		logger_default.error("I18nCache: " + createDiagnosticMessage$2({
			whatHappened: "loadDictionary needs a source dictionary",
			fix: "Provide dictionary so the default locale has source content"
		}));
		throw new Error("Validation errors occurred");
	}
}
function getTranslateListenerKey(lookup) {
	const hash = "hash" in lookup ? lookup.hash : hashMessage(lookup.message, lookup.options);
	return `${lookup.locale}:${hash}`;
}
var t$5 = [];
function n$13({ locale: n, enableI18n: r, localesProp: i = t$5 }) {
	let a = getI18nConfig().getDefaultLocale();
	return r && getI18nConfig().requiresTranslation(n) ? [
		...i,
		n,
		a
	] : [a];
}
function n$12() {
	return getI18nCache();
}
function r$10(e) {
	setI18nCache(e);
}
var defaultResetLocaleCookieName = "generaltranslation.locale-reset";
var s$6 = `server-render`;
var c$7 = Symbol.for(`generaltranslation.react-core.ReactI18nConfig`);
var l$3 = class extends I18nConfig {
	renderStrategy;
	localeCookieName;
	regionCookieName;
	enableI18nCookieName;
	constructor(r = {}, i = s$6) {
		super(r), p$1(i), Object.defineProperty(this, c$7, { value: !0 }), this.renderStrategy = i, this.localeCookieName = r.localeCookieName ?? "generaltranslation.locale", this.regionCookieName = r.regionCookieName ?? "generaltranslation.region", this.enableI18nCookieName = r.enableI18nCookieName ?? "generaltranslation.enable-i18n";
	}
	getRenderStrategy() {
		return this.renderStrategy;
	}
	getLocaleCookieName() {
		return this.localeCookieName;
	}
	getRegionCookieName() {
		return this.regionCookieName;
	}
	getEnableI18nCookieName() {
		return this.enableI18nCookieName;
	}
	isIdTaggingEnabled() {
		return this.runtimeConfig._tagIds === !0;
	}
};
function u$1() {
	let e = getI18nConfig();
	if (m$1(e)) return e;
	throw Error(createDiagnosticMessage$2({
		source: `@generaltranslation/react-core`,
		severity: `Error`,
		whatHappened: `Cannot read ReactI18nConfig after base I18nConfig setup.`,
		why: `the internal I18nConfig singleton was initialized without react-core render strategy support`,
		fix: `Initialize GT through gt-react or @generaltranslation/react-core/pure.`
	}));
}
function d$2(e) {
	setI18nConfig(e);
}
function f$1(e = {}, t = s$6) {
	let n = new l$3(e, t);
	return d$2(n), n;
}
function p$1(e) {
	if (!(e === `SPA` || e === `server-render`)) throw Error(createDiagnosticMessage$2({
		source: `@generaltranslation/react-core`,
		severity: `Error`,
		whatHappened: `Invalid React render strategy.`,
		why: `the render strategy must be "SPA" or "server-render", but received "${String(e)}"`,
		fix: `Initialize GT through gt-react or pass a valid render strategy.`
	}));
}
function m$1(e) {
	if (e instanceof l$3) return !0;
	let t = e;
	return t[c$7] === !0 && typeof t.getRenderStrategy == `function` && typeof t.getLocaleCookieName == `function` && typeof t.getRegionCookieName == `function` && typeof t.getEnableI18nCookieName == `function`;
}
var { getConditionStore: n$11, setConditionStore: r$9, isConditionStoreInitialized: i$12 } = createConditionStoreSingleton(createDiagnosticMessage$2({
	source: `@generaltranslation/react-core`,
	severity: `Error`,
	whatHappened: `Cannot read GT runtime context before it has been initialized`,
	why: `the internal ConditionStore is unavailable`,
	fix: `Call initializeGT() during setup (gt-next runs this automatically) and add a <GTProvider> at the root of your component tree.`
}));
function n$10({ Currency: n, GtInternalCurrency: r, DateTime: i, GtInternalDateTime: a, Num: o, GtInternalNum: s, RelativeTime: c, GtInternalRelativeTime: l, Var: u, GtInternalVar: d }) {
	return function({ variableType: f, variableValue: p, variableOptions: m, locales: h, enableI18n: g, injectionType: _ }) {
		let v = {
			_locale: h[0] ?? "en",
			_enableI18n: g
		};
		if (f === `n`) {
			let e = _ === `automatic` ? o : s, n = m;
			return jsx(e, {
				...v,
				options: n,
				children: p
			});
		}
		if (f === `d`) {
			let e = _ === `automatic` ? i : a, n = m;
			return jsx(e, {
				...v,
				options: n,
				children: p
			});
		}
		if (f === `c`) {
			let e = _ === `automatic` ? n : r, i = m;
			return jsx(e, {
				...v,
				options: i,
				children: p
			});
		}
		if (f === `rt`) {
			let e = _ === `automatic` ? c : l, n = m;
			if (typeof p == `number` && n?.unit) return jsx(e, {
				...v,
				value: p,
				unit: n.unit,
				baseDate: n?.baseDate,
				options: n
			});
			let r = p instanceof Date ? p : typeof p == `string` || typeof p == `number` ? new Date(p) : void 0;
			return jsx(e, {
				...v,
				date: r && !isNaN(r.getTime()) ? r : void 0,
				baseDate: n?.baseDate,
				options: n
			});
		}
		let y = p;
		return jsx(_ === `automatic` ? d : u, {
			...v,
			children: y
		});
	};
}
var e$3 = {
	variable: `value`,
	number: `n`,
	datetime: `date`,
	currency: `cost`,
	"relative-time": `time`
};
function t$4(t = {}, n) {
	return typeof t.name == `string` ? t.name : `_gt_${e$3[n] || `value`}_${t[`data-_gt`]?.id}`;
}
function n$9(e) {
	return typeof e == `object` && !!e && `data-_gt` in e && typeof e[`data-_gt`] == `object` && !!e[`data-_gt`] && `transformation` in e[`data-_gt`] && e[`data-_gt`]?.transformation === `variable`;
}
function r$8(n) {
	let r = n[`data-_gt`]?.variableType || `variable`;
	return {
		variableName: t$4(n, r),
		variableType: minifyVariableType(r),
		injectionType: n[`data-_gt`]?.injectionType || `manual`,
		variableValue: (() => {
			if (n.value !== void 0) return n.value;
			if (n.date !== void 0) return n.date;
			if (n[`data-_gt-unformatted-value`] !== void 0) return n[`data-_gt-unformatted-value`];
			if (n.children !== void 0) return n.children;
		})(),
		variableOptions: (() => {
			let e = {
				...n.currency !== void 0 && { currency: n.currency },
				...n.unit !== void 0 && { unit: n.unit },
				...n.baseDate !== void 0 && { baseDate: n.baseDate },
				...n.options !== void 0 && n.options
			};
			return Object.keys(e).length ? e : typeof n[`data-_gt-variable-options`] == `string` ? JSON.parse(n[`data-_gt-variable-options`]) : n[`data-_gt-variable-options`] || void 0;
		})()
	};
}
function e$2(e) {
	return e && e.props && e.props[`data-_gt`] ? e.props[`data-_gt`] : null;
}
function n$8(n, r, i) {
	let a = ``, o = null;
	return typeof n == `number` && !o && i && (a = _getPluralForm(n, Object.keys(i).filter(isAcceptedPluralForm), r)), a && !o && (o = i[a]), o;
}
function o$9({ renderVariable: o }) {
	return function({ children: s, defaultLocale: c = "en", enableI18n: l }) {
		let u = (i) => {
			let s = e$2(i);
			if (n$9(i.props)) {
				let { variableType: t, variableValue: n, variableOptions: r, injectionType: a } = r$8(i.props);
				return o({
					variableType: t,
					variableValue: n,
					variableOptions: r,
					locales: [c],
					enableI18n: l,
					injectionType: a
				});
			}
			if (s?.transformation === `plural`) {
				let e = s.branches || {};
				return typeof i.props.n == `number` ? f(n$8(i.props.n, [c], e) ?? i.props.children) : i.props.children == null ? null : f(i.props.children);
			}
			if (s?.transformation === `branch`) {
				let { children: e, branch: t } = i.props, n = s.branches || {}, r = t == null || t === `` ? void 0 : t.toString();
				return f(r && n[r] !== void 0 ? n[r] : e);
			}
			return s?.transformation === `fragment` ? a.createElement(a.Fragment, {
				key: i.props.key,
				children: f(i.props.children)
			}) : i.props.children ? a.cloneElement(i, {
				...i.props,
				"data-_gt": void 0,
				children: f(i.props.children)
			}) : a.cloneElement(i, {
				...i.props,
				"data-_gt": void 0
			});
		}, d = (e) => a.isValidElement(e) ? u(e) : e, f = (e) => Array.isArray(e) ? a.Children.map(e, d) : d(e);
		return f(s);
	};
}
function u({ renderVariable: u }) {
	let d = o$9({ renderVariable: u });
	function f({ sourceElement: e, targetElement: t, locales: n = ["en"], enableI18n: i }) {
		let { props: a$16 } = e, s = a$16[`data-_gt`], u = s?.transformation, f = t.d, m = {};
		if (f && Object.entries(HTML_CONTENT_PROPS).forEach(([e, t]) => {
			f[e] && (m[t] = f[e]);
		}), u === `plural`) {
			let a = e.props.n;
			return typeof a == `number` ? p({
				source: n$8(a, n, s.branches || {}) ?? e.props.children,
				target: n$8(a, n, t.d?.b || {}) ?? t.c,
				locales: n,
				enableI18n: i
			}) : d({
				children: e,
				defaultLocale: n[0],
				enableI18n: i
			});
		}
		if (u === `branch`) {
			let { branch: e, children: r } = a$16, o = e == null || e === `` ? void 0 : e.toString(), c = s.branches || {}, l = t.d?.b || {};
			return p({
				source: o && c[o] !== void 0 ? c[o] : r,
				target: o && l[o] !== void 0 ? l[o] : t.c,
				locales: n,
				enableI18n: i
			});
		}
		return u === `fragment` && t.c ? a.createElement(a.Fragment, {
			key: e.props.key,
			children: p({
				source: a$16.children,
				target: t.c,
				locales: n,
				enableI18n: i
			})
		}) : a$16?.children && t?.c ? a.cloneElement(e, {
			...a$16,
			...m,
			"data-_gt": void 0,
			children: p({
				source: a$16.children,
				target: t.c,
				locales: n,
				enableI18n: i
			})
		}) : d({
			children: e,
			defaultLocale: n[0],
			enableI18n: i
		});
	}
	function p({ source: r, target: i, locales: l = ["en"], enableI18n: p }) {
		if (i == null && r) return d({
			children: r,
			defaultLocale: l[0],
			enableI18n: p
		});
		if (typeof i == `string`) return i;
		if (Array.isArray(i) && !Array.isArray(r) && r && (r = [r]), Array.isArray(r) && Array.isArray(i)) {
			let o = {}, d = {}, m = {}, h = r.filter((n) => {
				if (a.isValidElement(n)) if (n$9(n.props)) {
					let { variableName: t, variableValue: r, variableOptions: i, injectionType: a } = r$8(n.props);
					o[t] = r, d[t] = i, m[t] = a;
				} else return !0;
				return !1;
			}), g = (e) => h.find((t) => {
				let r = e$2(t);
				return r?.id === void 0 ? !1 : r.id === e.i;
			}) || h.shift();
			return i.map((e, t) => {
				if (typeof e == `string`) return jsx(a.Fragment, { children: e }, `string_${t}`);
				if (isVariable(e)) return jsx(a.Fragment, { children: u({
					variableType: e.v || `v`,
					variableValue: o[e.k],
					variableOptions: d[e.k],
					locales: l,
					enableI18n: p,
					injectionType: m[e.k] || `manual`
				}) }, `var_${t}`);
				let n = g(e);
				return n ? jsx(a.Fragment, { children: f({
					sourceElement: n,
					targetElement: e,
					locales: l,
					enableI18n: p
				}) }, `element_${t}`) : null;
			});
		}
		if (i && typeof i == `object` && !Array.isArray(i)) {
			let n = isVariable(i) ? `variable` : `element`;
			if (a.isValidElement(r)) {
				if (n === `element`) return f({
					sourceElement: r,
					targetElement: i,
					locales: l,
					enableI18n: p
				});
				if (n$9(r.props)) {
					let { variableValue: t, variableOptions: n, variableType: i, injectionType: a } = r$8(r.props);
					return u({
						variableType: i,
						variableValue: t,
						variableOptions: n,
						locales: l,
						enableI18n: p,
						injectionType: a
					});
				}
			}
		}
		return d({
			children: r,
			defaultLocale: l[0],
			enableI18n: p
		});
	}
	return p;
}
function n$7() {
	let t = getI18nConfig();
	return typeof t.isIdTaggingEnabled == `function` && t.isIdTaggingEnabled();
}
function r$7(...e) {
	if (!n$7()) return;
	let r = hashMessage(...e);
	return e[1].$_hash = r, r;
}
var a$14 = { display: `contents` };
var o$8 = globalThis.navigator?.product === `ReactNative`;
function s$5(e) {
	if (e == null || typeof e == `boolean` || e === ``) return !0;
	if (Array.isArray(e)) return !e.some((e) => !s$5(e));
	if (isValidElement(e) && e.type === Fragment) {
		let t = e.props.children;
		return t == null || s$5(t);
	}
	return !1;
}
function c$6(t, c) {
	return o$8 || !n$7() ? t : isValidElement(t) && typeof t.type == `string` ? cloneElement(t, { "data-_gt-hash": c }) : s$5(t) ? t : createElement(`span`, {
		"data-_gt-hash": c,
		style: a$14
	}, t);
}
function l$2({ renderDefaultChildren: e, renderTranslatedChildren: t }) {
	function n({ taggedSourceChildren: e, targetJsxChildren: t, locale: n, defaultLocale: a, enableI18n: o, shouldTranslate: s, hash: l }) {
		let u = !s || t == null ? r({
			taggedSourceChildren: e,
			defaultLocale: a,
			enableI18n: o
		}) : i({
			taggedSourceChildren: e,
			targetJsxChildren: t,
			locales: [n, a],
			enableI18n: o
		});
		return l ? c$6(u, l) : u;
	}
	function r({ taggedSourceChildren: t, defaultLocale: n, enableI18n: r }) {
		return e({
			children: t,
			defaultLocale: n,
			enableI18n: r
		});
	}
	function i({ taggedSourceChildren: e, targetJsxChildren: n, locales: r, enableI18n: i }) {
		return t({
			source: e,
			target: n,
			locales: r,
			enableI18n: i
		});
	}
	return n;
}
function i$11(i) {
	let a = n$10(i), o = o$9({ renderVariable: a }), s = u({ renderVariable: a });
	return {
		renderVariable: a,
		renderDefaultChildren: o,
		renderTranslatedChildren: s,
		renderPreparedT: l$2({
			renderDefaultChildren: o,
			renderTranslatedChildren: s
		})
	};
}
var t$3 = class extends I18nCache {};
function r$6(r) {
	f$1(r, `server-render`), r$10(new t$3(r));
}
var r$5 = createGlobalSingleton({
	namespace: `reactCore`,
	key: `i18nStore`,
	source: `@generaltranslation/react-core`,
	notInitialized: () => o$7()
});
var i$10 = r$5.get;
r$5.set;
r$5.isInitialized;
function o$7() {
	let t = createDiagnosticMessage$2({
		source: `@generaltranslation/react-core`,
		severity: `Error`,
		whatHappened: `Cannot access I18nStore before it is initialized.`,
		fix: u$1().getRenderStrategy() === `SPA` ? `Initialize GT before reading GT runtime context.` : `Add a <GTProvider> at the root of your component tree.`
	});
	return Error(t);
}
function e$1(e, t) {
	return e.add(t), () => {
		e.delete(t);
	};
}
function t$2(t, n) {
	let r = n.options.$_hash ?? hashMessage(n.message, n.options);
	return t?.[n.locale]?.[r];
}
function n$6(t, n) {
	return getDictionaryEntry(i$9(t, n));
}
function r$4(e, t) {
	return i$9(e, t);
}
function i$9(e, { locale: n, id: r }) {
	let i = e?.[n];
	if (!i) return;
	if (!r) return i;
	let o = i;
	for (let e of r.split(`.`)) {
		if (!a$12(e) || !isDictionaryValue(o) || !Object.prototype.hasOwnProperty.call(o, e)) return;
		o = o[e];
	}
	return o;
}
function a$12(e) {
	return e !== `__proto__` && e !== `constructor` && e !== `prototype`;
}
function c$5(e) {
	if (e instanceof Error) return `${e.name}|${e.message}`;
	if (typeof e == `object` && e) try {
		return `object|${JSON.stringify(e)}`;
	} catch {
		return `object|${String(e)}`;
	}
	return `${typeof e}|${String(e)}`;
}
var l$1 = class {
	translateListeners = /* @__PURE__ */ new Set();
	dictionaryEntryListeners = /* @__PURE__ */ new Set();
	dictionaryObjectListeners = /* @__PURE__ */ new Set();
	loggedRuntimeTranslationErrors = /* @__PURE__ */ new Set();
	constructor() {}
	updateTranslations = (t) => {
		n$12().updateTranslations(t);
	};
	updateDictionaries = (t) => {
		n$12().updateDictionaries(t);
	};
	translate = async (t) => n$12().lookupTranslationWithFallback(t.locale, t.message, t.options).then(() => {
		this.emitTranslateEvent(t);
	}).catch((e) => this.logRuntimeTranslationError(e));
	translateDictionaryEntry = (t) => {
		n$12().lookupDictionaryWithFallback(t.locale, t.id).then(() => {
			this.emitDictionaryEvent(t);
		}).catch((e) => this.logRuntimeTranslationError(e));
	};
	translateDictionaryObject = (t) => {
		n$12().lookupDictionaryObjWithFallback(t.locale, t.id).then(() => {
			this.emitDictionaryEvent(t);
		}).catch((e) => this.logRuntimeTranslationError(e));
	};
	logRuntimeTranslationError(e) {
		let t = formatDiagnosticErrorDetails(e), n = c$5(e);
		if (!this.loggedRuntimeTranslationErrors.has(n)) {
			if (this.loggedRuntimeTranslationErrors.add(n), this.loggedRuntimeTranslationErrors.size > 100) {
				let e = this.loggedRuntimeTranslationErrors.values().next().value;
				e !== void 0 && this.loggedRuntimeTranslationErrors.delete(e);
			}
			console.error(createDiagnosticMessage$2({
				source: `@generaltranslation/react-core`,
				severity: `Error`,
				whatHappened: `A runtime translation request failed.`,
				wayOut: `Rendering falls back to untranslated content.`,
				details: t
			}));
		}
	}
	subscribeToTranslate = (e, n) => {
		let r = getTranslateListenerKey(e);
		return e$1(this.translateListeners, (e) => {
			getTranslateListenerKey(e) === r && n();
		});
	};
	subscribeToTranslationEvents = (e) => e$1(this.translateListeners, e);
	subscribeToDictionaryEntryEvents = (e) => e$1(this.dictionaryEntryListeners, e);
	subscribeToDictionaryObjectEvents = (e) => e$1(this.dictionaryObjectListeners, e);
	getTranslateSnapshot = (t, r = {}) => t$2(r, t) ?? n$12().lookupTranslation(t.locale, t.message, t.options);
	getDictionaryEntrySnapshot = (t, n = {}) => n$6(n, t) ?? n$12().lookupDictionary(t.locale, t.id);
	getDictionaryObjectSnapshot = (t, n = {}) => r$4(n, t) ?? n$12().lookupDictionaryObj(t.locale, t.id);
	emitTranslateEvent(e) {
		this.translateListeners.forEach((t) => t(e));
	}
	emitDictionaryEvent(e) {
		this.dictionaryEntryListeners.forEach((t) => t(e)), this.dictionaryObjectListeners.forEach((t) => {
			t(e);
		});
	}
};
var a$11 = createGlobalSingleton({
	namespace: `reactCore`,
	key: `gtContext`,
	source: `@generaltranslation/react-core`,
	notInitialized: () => createDiagnosticMessage$2({
		source: `@generaltranslation/react-core`,
		severity: `Error`,
		whatHappened: `Cannot read GTContext before it has been initialized`,
		why: `the internal GTContext singleton is unavailable`,
		fix: `Add a <GTProvider> at the root of your component tree.`
	})
});
function o$6() {
	return a$11.isInitialized() || a$11.set(createContext(void 0)), a$11.get();
}
function s$4() {
	let t = useContext(o$6());
	if (t || u$1().getRenderStrategy() === `SPA`) return t;
	throw Error(c$4());
}
function c$4() {
	return createDiagnosticMessage$2({
		source: `@generaltranslation/react-core`,
		severity: `Error`,
		whatHappened: `GT runtime context could not be read`,
		why: `GTContext was accessed outside of a <GTProvider>`,
		fix: `Add a <GTProvider> at the root of your component tree.`
	});
}
function r$3() {
	return s$4()?.conditionStore ?? n$11();
}
function i$8() {
	return r$3().getLocale();
}
function o$5() {
	return r$3().getEnableI18n();
}
function r$2() {
	return useMemo(() => getI18nConfig().getDefaultLocale(), []);
}
function n$5() {
	return s$4()?.i18nStore || i$10();
}
function r$1() {
	return s$4()?.translationsSnapshot || {};
}
var c$3 = () => {};
function d$1() {
	return c$3;
}
var v = d$1;
function n$4({ _enableI18n: n, _locale: r, children: i, currency: a = `USD`, options: o = {}, locales: s = [] }) {
	let c = n$13({
		locale: r,
		enableI18n: n,
		localesProp: s
	}), l = getI18nConfig().getGTClass();
	if (i == null) return null;
	let u = typeof i == `string` ? parseFloat(i) : i;
	return l.formatCurrency(u, a, {
		locales: c,
		...o
	});
}
function i$7({ _enableI18n: r, _locale: i, ...a }) {
	return n$4({
		...a,
		_enableI18n: r ?? o$5(),
		_locale: i ?? i$8()
	});
}
function a$10(e) {
	return jsx(i$7, { ...e });
}
i$7._gtt = `variable-currency-automatic`, a$10._gtt = `variable-currency`;
function n$3({ _enableI18n: n, _locale: r, children: i, options: a = {}, locales: o = [] }) {
	let s = n$13({
		locale: r,
		enableI18n: n,
		localesProp: o
	}), c = getI18nConfig().getGTClass();
	return i == null ? null : c.formatDateTime(i, {
		locales: s,
		...a
	}).replace(/[\u200F\u202B\u202E]/g, ``);
}
function i$6({ _enableI18n: r, _locale: i, ...a }) {
	return n$3({
		...a,
		_enableI18n: r ?? o$5(),
		_locale: i ?? i$8()
	});
}
function a$9(e) {
	return jsx(i$6, { ...e });
}
i$6._gtt = `variable-datetime-automatic`, a$9._gtt = `variable-datetime`;
function n$2({ _enableI18n: n, _locale: r, children: i, options: a = {}, locales: o = [] }) {
	let s = n$13({
		locale: r,
		enableI18n: n,
		localesProp: o
	}), c = getI18nConfig().getGTClass();
	if (i == null) return null;
	let l = typeof i == `string` ? parseFloat(i) : i;
	return c.formatNum(l, {
		locales: s,
		...a
	});
}
function i$5({ _enableI18n: r, _locale: i, ...a }) {
	return n$2({
		...a,
		_enableI18n: r ?? o$5(),
		_locale: i ?? i$8()
	});
}
function a$8(e) {
	return jsx(i$5, { ...e });
}
i$5._gtt = `variable-number-automatic`, a$8._gtt = `variable-number`;
function n$1({ _enableI18n: n, _locale: r, date: i, children: a, value: o, unit: s, baseDate: c, locales: l = [], options: u = {} }) {
	let d = n$13({
		locale: r,
		enableI18n: n,
		localesProp: l
	}), f = getI18nConfig().getGTClass(), p = i ?? a;
	return o !== void 0 && s ? f.formatRelativeTime(o, s, {
		locales: d,
		numeric: u.numeric,
		style: u.style,
		localeMatcher: u.localeMatcher
	}) : p == null ? null : f.formatRelativeTimeFromDate(p, {
		locales: d,
		baseDate: c ?? /* @__PURE__ */ new Date(),
		numeric: u.numeric,
		style: u.style,
		localeMatcher: u.localeMatcher
	});
}
function i$4({ _enableI18n: r, _locale: i, ...a }) {
	return n$1({
		...a,
		_enableI18n: r ?? o$5(),
		_locale: i ?? i$8()
	});
}
function a$7(e) {
	return jsx(i$4, { ...e });
}
i$4._gtt = `variable-relative-time-automatic`, a$7._gtt = `variable-relative-time`;
function e({ children: e }) {
	return e;
}
function t$1({ children: t }) {
	return e({ children: t });
}
function n({ children: t }) {
	return e({ children: t });
}
t$1._gtt = `variable-variable`, n._gtt = `variable-variable-automatic`;
function a$6(a) {
	let o = n$5(), s = r$1();
	v();
	return useSyncExternalStore((e) => o.subscribeToTranslate(a, e), () => o.getTranslateSnapshot(a, s), () => o.getTranslateSnapshot(a, s));
}
var { renderVariable: d, renderDefaultChildren: f, renderTranslatedChildren: p, renderPreparedT: m } = i$11({
	Currency: a$10,
	GtInternalCurrency: i$7,
	DateTime: a$9,
	GtInternalDateTime: i$6,
	Num: a$8,
	GtInternalNum: i$5,
	RelativeTime: a$7,
	GtInternalRelativeTime: i$4,
	Var: t$1,
	GtInternalVar: n
});
function r(i, a$15 = 0) {
	let o = a$15, s = (t) => {
		let { type: n, props: i } = t;
		o += 1;
		let a = {
			id: o,
			injectionType: `manual`
		}, s;
		try {
			s = typeof n == `function` ? n._gtt : void 0;
		} catch {}
		if (s) {
			let t = s.split(`-`);
			if ((t[1] === `automatic` || t[2] === `automatic`) && (a.injectionType = `automatic`), t[0] === `translate` && (t[0] = `fragment`), t[0] === `variable` && (a.variableType = t?.[1] || `variable`), t[0] === `plural`) {
				let t = Object.entries(i).reduce((t, [n, i]) => (isAcceptedPluralForm(n) && (t[n] = r(i, o)), t), {});
				Object.keys(t).length && (a.branches = t);
			}
			if (t[0] === `branch`) {
				let { children: e, branch: t, ...n } = i, s = Object.fromEntries(Object.entries(n).filter(([e]) => !e.startsWith(`data-`))), c = Object.entries(s).reduce((e, [t, n]) => (e[t] = r(n, o), e), {});
				Object.keys(c).length && (a.branches = c);
			}
			a.transformation = t[0];
		}
		return a;
	};
	function c(e) {
		let { props: n } = e, r = s(e), i = {
			...n,
			"data-_gt": r
		};
		return n.children && !r.variableType && (i.children = u(n.children)), e.type === a.Fragment && (i[`data-_gt`].transformation = `fragment`), a.cloneElement(e, i);
	}
	function l(e) {
		return isValidElement(e) ? c(e) : e;
	}
	function u(e) {
		return Array.isArray(e) ? a.Children.map(e, l) : l(e);
	}
	return u(i);
}
function i$3(e) {
	return s$3(e, 0);
}
function a$5(t, r) {
	let { type: i, props: a } = t, u = c$2(i);
	if (typeof a != `object` || !a) return t;
	if (u) {
		let { componentType: i, injectionType: c } = u;
		if (i === `variable`) return t;
		if (i === `branch`) return cloneElement(t, { ...Object.entries(a).reduce((e, [t, n]) => (t !== `branch` && !t.startsWith(`data-`) ? e[t] = o$4(n, r) : e[t] = n, e), {}) });
		if (i === `plural`) return cloneElement(t, { ...Object.entries(a).reduce((t, [n, i]) => (isAcceptedPluralForm(n) || n === `children` ? t[n] = o$4(i, r) : t[n] = i, t), {}) });
		if (i === `derive`) return cloneElement(t, {
			...a,
			...`children` in a && { children: s$3(a.children, r + 1) }
		});
		if (i === `translate` && c === `automatic` && r > 0) return `children` in a ? s$3(a.children, r) : void 0;
		i === `translate` && c === `automatic` && console.warn(l);
	}
	return cloneElement(t, {
		...a,
		...`children` in a && { children: s$3(a.children, r) }
	});
}
function o$4(e, t) {
	return isValidElement(e) ? a$5(e, t) : e;
}
function s$3(e, n) {
	return Array.isArray(e) ? Children.map(e, (e) => o$4(e, n)) : o$4(e, n);
}
function c$2(e) {
	let t = typeof e == `function` && `_gtt` in e ? e._gtt : void 0;
	if (t == null || typeof t != `string`) return;
	let n = t.split(`-`);
	return {
		componentType: n[0],
		injectionType: n[1] === `automatic` || n[2] === `automatic` ? `automatic` : `manual`
	};
}
var l = `'@generaltranslation/react-core Warning: A <_T> component was found injected outside of a <Derive> boundary. This may affect translation resolution for this component.`;
function t(t) {
	return a.isValidElement(t);
}
var i$2 = (e) => {
	if (!e) return ``;
	let { type: t, props: n } = e;
	if (t && typeof t == `function`) {
		if (`displayName` in t && typeof t.displayName == `string` && t.displayName) return t.displayName;
		if (`name` in t && typeof t.name == `string` && t.name) return t.name;
	}
	return t && typeof t == `string` ? t : n.href ? `a` : n[`data-_gt`]?.id ? `C${n[`data-_gt`].id}` : `function`;
};
var a$4 = (e, t, n) => {
	let i = Object.entries(HTML_CONTENT_PROPS).reduce((e, [n, r]) => {
		let i = t[r];
		return typeof i == `string` && (e[n] = i), e;
	}, {});
	if ((e === `plural` || e === `branch`) && n) {
		let t = {};
		Object.entries(n).forEach(([e, n]) => {
			t[e] = c$1(n);
		}), i = {
			...i,
			b: t,
			t: e === `plural` ? `p` : `b`
		};
	}
	return Object.keys(i).length ? i : void 0;
};
var o$3 = (t) => {
	let { props: r } = t, o = { t: i$2(t) };
	if (r[`data-_gt`]) {
		let t = r[`data-_gt`], i = t.transformation;
		if (i === `variable`) {
			let i = t.variableType || `variable`, a = t$4(r, i), o = minifyVariableType(i);
			return {
				i: t.id,
				k: a,
				v: o
			};
		}
		o.i = t.id, o.d = a$4(i, r, t.branches);
	}
	return r.children && (o.c = c$1(r.children)), o;
};
var s$2 = (e) => t(e) ? o$3(e) : typeof e == `number` ? e.toString() : e;
function c$1(e) {
	return Array.isArray(e) ? e.map(s$2) : s$2(e);
}
function i$1({ sourceChildren: t, params: n, locale: r }) {
	let i = a$3(t), l = o$2(i), u = s$1({
		options: c(n),
		locale: r
	});
	return r$7(l, u), {
		taggedSourceChildren: i,
		sourceJsxChildren: l,
		targetOptions: u
	};
}
function a$3(e) {
	return r(i$3(e));
}
function o$2(e) {
	return c$1(e);
}
function s$1({ options: e, locale: t }) {
	return {
		...e,
		$locale: t
	};
}
function c(e) {
	return {
		...e,
		$format: `JSX`,
		$context: e.$context ?? e.context,
		$id: e.$id ?? e.id,
		$_hash: e.$_hash ?? e._hash,
		$maxChars: e.$maxChars ?? e.maxChars,
		$requiresReview: e.$requiresReview ?? e.requiresReview
	};
}
function o$1({ sourceChildren: o, params: s, _locale: c, _enableI18n: l }) {
	let u = i$8(), d = o$5(), f = r$2(), p = c ?? u, m = l ?? d;
	return {
		defaultLocale: f,
		enableI18n: m,
		locale: p,
		shouldTranslate: m && getI18nConfig().requiresTranslation(p),
		...useMemo(() => i$1({
			sourceChildren: o,
			params: s,
			locale: p
		}), [
			p,
			s,
			o
		])
	};
}
function a$2(e) {
	return s(e);
}
function o(e) {
	return s(e);
}
a$2._gtt = `translate-client`, o._gtt = `translate-client-automatic`;
function s({ children: a, _locale: o, _enableI18n: s, _renderPreparedT: c = m, ...l }) {
	let { defaultLocale: u, locale: d, enableI18n: f, targetOptions: p, taggedSourceChildren: m$2, sourceJsxChildren: h, shouldTranslate: g } = o$1({
		sourceChildren: a,
		params: l,
		_locale: o,
		_enableI18n: s
	}), _ = a$6({
		locale: d,
		message: h,
		options: p
	}), v = useRef(null);
	let y = c({
		taggedSourceChildren: m$2,
		targetJsxChildren: _,
		locale: d,
		defaultLocale: u,
		enableI18n: f,
		shouldTranslate: g,
		hash: p.$_hash
	});
	return v.current = y, y;
}
var i = o$6();
function a$1({ children: e, translations: a, dictionaries: o, conditionStore: s, i18nStore: c, onMissingTranslation: l, onMissingDictionaryEntry: u, onMissingDictionaryObj: d }) {
	let f = useMemo(() => ({
		translationsSnapshot: a,
		dictionariesSnapshot: o ?? {},
		i18nStore: c,
		conditionStore: s,
		onMissingTranslation: l,
		onMissingDictionaryEntry: u,
		onMissingDictionaryObj: d
	}), [
		a,
		o,
		c,
		s,
		l,
		u,
		d
	]);
	return useEffect(() => {
		c.updateTranslations(a), c.updateDictionaries(o ?? {});
	}, [
		a,
		o,
		c
	]), jsx(i.Provider, {
		value: f,
		children: e
	});
}
function getCookieValue$1({ cookieName }) {
	if (typeof document === "undefined") return void 0;
	return getCookieValue(document.cookie, cookieName);
}
function setCookieValue({ cookieName, value }) {
	if (typeof document === "undefined") return;
	document.cookie = `${cookieName}=${value};path=/`;
}
function readBrowserLocale(localeCookieName) {
	const candidates = [];
	const cookieLocale = getCookieValue$1({ cookieName: localeCookieName });
	if (cookieLocale) candidates.push(cookieLocale);
	const navigatorLocales = navigator?.languages || [];
	candidates.push(...navigatorLocales);
	return candidates;
}
var BrowserConditionStore = class {
	constructor(config) {
		this.getLocale = () => {
			return getBrowserLocale(this.customGetLocale);
		};
		this.setLocale = (locale) => {
			this.updateLocale(locale);
			setCookieValue({
				cookieName: defaultResetLocaleCookieName,
				value: "true"
			});
			this.reload();
		};
		this.getRegion = () => {
			const cookieRegion = getCookieValue$1({ cookieName: u$1().getRegionCookieName() });
			if (cookieRegion) return cookieRegion;
			return this.customGetRegion?.();
		};
		this.setRegion = (region) => {
			this.updateRegion(region);
			this.reload();
		};
		this.getEnableI18n = () => {
			const cookieEnableI18n = getCookieValue$1({ cookieName: u$1().getEnableI18nCookieName() });
			if (cookieEnableI18n === void 0) return this.customGetEnableI18n?.() ?? true;
			return cookieEnableI18n === "true";
		};
		this.setEnableI18n = (enableI18n) => {
			this.updateEnableI18n(enableI18n);
			this.reload();
		};
		this.updateLocale = (locale) => {
			const i18nConfig = u$1();
			setCookieValue({
				cookieName: i18nConfig.getLocaleCookieName(),
				value: i18nConfig.resolveSupportedLocale(locale)
			});
		};
		this.updateRegion = (region) => {
			setCookieValue({
				cookieName: u$1().getRegionCookieName(),
				value: region ?? ""
			});
		};
		this.updateEnableI18n = (enableI18n) => {
			setCookieValue({
				cookieName: u$1().getEnableI18nCookieName(),
				value: enableI18n ? "true" : "false"
			});
		};
		this.reload = () => {
			const state = {
				locale: this.getLocale(),
				region: this.getRegion(),
				enableI18n: this.getEnableI18n()
			};
			this.customReload(state);
		};
		const i18nConfig = u$1();
		this.customReload = config._reload ?? (() => typeof window !== "undefined" ? window.location.reload() : void 0);
		this.customGetLocale = config._getLocale;
		this.customGetRegion = config._getRegion;
		this.customGetEnableI18n = config._getEnableI18n;
		setCookieValue({
			cookieName: i18nConfig.getLocaleCookieName(),
			value: i18nConfig.resolveSupportedLocale(config.locale)
		});
		if (config.region !== void 0) setCookieValue({
			cookieName: i18nConfig.getRegionCookieName(),
			value: config.region
		});
		this.updateEnableI18n(config.enableI18n ?? true);
	}
};
function getBrowserLocale(getLocale) {
	const i18nConfig = u$1();
	const candidates = readBrowserLocale(i18nConfig.getLocaleCookieName());
	if (getLocale) candidates.push(getLocale());
	return i18nConfig.resolveSupportedLocale(candidates);
}
function ensureSentence$1(text) {
	const trimmed = text.trim();
	if (!trimmed) return "";
	return /[.!?)]$/.test(trimmed) ? trimmed : `${trimmed}.`;
}
function stripSentence$1(text) {
	const trimmed = text.trim();
	let end = trimmed.length;
	while (end > 0) {
		const char = trimmed[end - 1];
		if (char !== "." && char !== "!" && char !== "?") break;
		end -= 1;
	}
	return trimmed.slice(0, end);
}
function formatDetails$1(details) {
	if (!details) return "";
	const detailText = Array.isArray(details) ? details.join(", ") : details;
	if (!detailText.trim()) return "";
	return ensureSentence$1(`Details: ${detailText}`);
}
function createDiagnosticMessage$1({ source, severity, whatHappened, reassurance, why, fix, wayOut, details, docsUrl }) {
	const prefix = source ? severity ? `${source} ${severity}:` : `${source}:` : severity ? `${severity}:` : "";
	const whatAndWhy = why ? `${stripSentence$1(whatHappened)} because ${stripSentence$1(why)}` : whatHappened;
	const shouldCombineWayOut = !!fix && !!wayOut && /^[a-z]/.test(stripSentence$1(wayOut));
	const messageParts = [
		whatAndWhy,
		reassurance,
		shouldCombineWayOut ? `${stripSentence$1(fix)}, or ${stripSentence$1(wayOut)}` : fix,
		shouldCombineWayOut ? void 0 : wayOut,
		formatDetails$1(details)
	].filter((part) => !!part).map(ensureSentence$1);
	if (docsUrl) messageParts.push(`Learn more: ${docsUrl}`);
	const message = messageParts.join(" ");
	return prefix ? `${prefix} ${message}` : message;
}
var conditionStoreNotInitializedError$1 = createDiagnosticMessage$1({
	source: "gt-react",
	severity: "Error",
	whatHappened: "Cannot read GT runtime context before it has been initialized",
	why: "the internal ConditionStore singleton is unavailable",
	fix: "Call initializeGT() (or initializeGTSPA() in SPA apps) before rendering and add a <GTProvider> at the root of your component tree."
});
var { setConditionStore: setReadonlyConditionStore, isConditionStoreInitialized: isReadonlyConditionStoreInitialized } = createConditionStoreSingleton(conditionStoreNotInitializedError$1);
var { getConditionStore: getBrowserConditionStore, setConditionStore: setBrowserConditionStore, isConditionStoreInitialized: isBrowserConditionStoreInitialized } = createConditionStoreSingleton(conditionStoreNotInitializedError$1);
function createOrUpdateBrowserConditionStore(config) {
	const locale = determineLocale$1(config);
	const region = determineRegion(config);
	const enableI18n = determineEnableI18n(config);
	if (isBrowserConditionStoreInitialized()) {
		const conditionStore = getBrowserConditionStore();
		conditionStore.updateLocale(locale);
		if (region !== void 0) conditionStore.updateRegion(region);
		conditionStore.updateEnableI18n(enableI18n);
		return conditionStore;
	}
	const conditionStore = new BrowserConditionStore({
		...config,
		locale,
		region,
		enableI18n
	});
	setBrowserConditionStore(conditionStore);
	return conditionStore;
}
function determineLocale$1({ _getLocale: getLocale, locale }) {
	const i18nConfig = u$1();
	const candidates = [];
	if (locale) candidates.push(...Array.isArray(locale) ? locale : [locale]);
	if (getLocale) candidates.push(getLocale());
	candidates.push(...readBrowserLocale(i18nConfig.getLocaleCookieName()));
	return i18nConfig.resolveSupportedLocale(candidates);
}
function determineRegion({ _getRegion: getRegion, region }) {
	return getCookieValue$1({ cookieName: u$1().getRegionCookieName() }) || getRegion?.() || region;
}
function determineEnableI18n({ enableI18n, _getEnableI18n: getEnableI18n }) {
	if (enableI18n !== void 0) return enableI18n;
	const cookieEnableI18n = getCookieValue$1({ cookieName: u$1().getEnableI18nCookieName() });
	if (cookieEnableI18n === void 0) return getEnableI18n?.() ?? true;
	return cookieEnableI18n === "true";
}
function addRuntimeCredentials(config) {
	const credentials = getRuntimeCredentials();
	return {
		...config,
		projectId: config.projectId || credentials.projectId,
		devApiKey: config.devApiKey || credentials.devApiKey
	};
}
function getRuntimeCredentials() {
	return {
		projectId: readImportMetaVite(() => void 0) || readProcessEnvViteProjectId(),
		devApiKey: getRuntimeEnvironment() === "development" ? readImportMetaVite(() => void 0) || readProcessEnvViteDevApiKey() : void 0
	};
}
function readImportMetaVite(readValue) {
	try {
		return normalizeEnvValue(readValue());
	} catch {
		return;
	}
}
function readProcessEnvViteProjectId() {
	try {
		return normalizeEnvValue(process.env.VITE_GT_PROJECT_ID);
	} catch {
		return;
	}
}
function readProcessEnvViteDevApiKey() {
	try {
		return normalizeEnvValue(process.env.VITE_GT_DEV_API_KEY);
	} catch {
		return;
	}
}
function normalizeEnvValue(value) {
	return value || void 0;
}
function initializeGTSRAClient(config) {
	r$6(addRuntimeCredentials({
		cacheExpiryTime: null,
		...config
	}));
}
function BrowserGTProvider(props) {
	const conditionStore = useMemo(() => {
		return createOrUpdateBrowserConditionStore(props);
	}, [
		props.locale,
		props.region,
		props.enableI18n,
		props._reload
	]);
	const i18nStoreRef = useRef(null);
	if (i18nStoreRef.current == null) i18nStoreRef.current = new l$1();
	return jsx(a$1, {
		...props,
		conditionStore,
		i18nStore: i18nStoreRef.current
	});
}
function getInitialMode() {
	if (typeof window === "undefined") return "auto";
	const stored = window.localStorage.getItem("theme");
	if (stored === "light" || stored === "dark" || stored === "auto") return stored;
	return "auto";
}
function applyThemeMode(mode) {
	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const resolved = mode === "auto" ? prefersDark ? "dark" : "light" : mode;
	document.documentElement.classList.remove("light", "dark");
	document.documentElement.classList.add(resolved);
	if (mode === "auto") document.documentElement.removeAttribute("data-theme");
	else document.documentElement.setAttribute("data-theme", mode);
	document.documentElement.style.colorScheme = resolved;
}
function ThemeToggle() {
	const [mode, setMode] = useState("auto");
	useEffect(() => {
		const initialMode = getInitialMode();
		setMode(initialMode);
		applyThemeMode(initialMode);
	}, []);
	useEffect(() => {
		if (mode !== "auto") return;
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => applyThemeMode("auto");
		media.addEventListener("change", onChange);
		return () => {
			media.removeEventListener("change", onChange);
		};
	}, [mode]);
	function toggleMode() {
		const nextMode = mode === "light" ? "dark" : mode === "dark" ? "auto" : "light";
		setMode(nextMode);
		applyThemeMode(nextMode);
		window.localStorage.setItem("theme", nextMode);
	}
	const label = mode === "auto" ? "Theme mode: auto (system). Click to switch to light mode." : `Theme mode: ${mode}. Click to switch mode.`;
	return jsx("button", {
		type: "button",
		onClick: toggleMode,
		"aria-label": label,
		title: label,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: mode === "auto" ? jsx(a$2, { children: "Theme: Auto" }) : mode === "dark" ? jsx(a$2, { children: "Theme: Dark" }) : jsx(a$2, { children: "Theme: Light" })
	});
}
function ensureSentence(text) {
	const trimmed = text.trim();
	if (!trimmed) return "";
	return /[.!?)]$/.test(trimmed) ? trimmed : `${trimmed}.`;
}
function stripSentence(text) {
	const trimmed = text.trim();
	let end = trimmed.length;
	while (end > 0) {
		const char = trimmed[end - 1];
		if (char !== "." && char !== "!" && char !== "?") break;
		end -= 1;
	}
	return trimmed.slice(0, end);
}
function formatDetails(details) {
	if (!details) return "";
	const detailText = Array.isArray(details) ? details.join(", ") : details;
	if (!detailText.trim()) return "";
	return ensureSentence(`Details: ${detailText}`);
}
function createDiagnosticMessage({ source, severity, whatHappened, reassurance, why, fix, wayOut, details, docsUrl }) {
	const prefix = source ? severity ? `${source} ${severity}:` : `${source}:` : severity ? `${severity}:` : "";
	const whatAndWhy = why ? `${stripSentence(whatHappened)} because ${stripSentence(why)}` : whatHappened;
	const shouldCombineWayOut = !!fix && !!wayOut && /^[a-z]/.test(stripSentence(wayOut));
	const messageParts = [
		whatAndWhy,
		reassurance,
		shouldCombineWayOut ? `${stripSentence(fix)}, or ${stripSentence(wayOut)}` : fix,
		shouldCombineWayOut ? void 0 : wayOut,
		formatDetails(details)
	].filter((part) => !!part).map(ensureSentence);
	if (docsUrl) messageParts.push(`Learn more: ${docsUrl}`);
	const message = messageParts.join(" ");
	return prefix ? `${prefix} ${message}` : message;
}
var conditionStoreNotInitializedError = createDiagnosticMessage({
	source: "gt-tanstack-start",
	severity: "Error",
	whatHappened: "Cannot read GT server request state before initialization",
	why: "initializeGT() has not initialized the TanStack Start server condition store",
	fix: "Call initializeGT() from 'gt-tanstack-start' during application setup before using gtMiddleware or server APIs."
});
var conditionStoreSingleton = createGlobalSingleton({
	namespace: "tanstackStart",
	key: "conditionStore",
	source: "gt-tanstack-start",
	notInitialized: () => conditionStoreNotInitializedError
});
var getConditionStore = conditionStoreSingleton.get;
conditionStoreSingleton.set;
var isConditionStoreInitialized = conditionStoreSingleton.isInitialized;
function getLocaleFromPath(pathname, basepath = getRouterBasepath()) {
	const { pathname: routePathname } = splitBasepath(pathname, basepath);
	const match = routePathname.match(/^\/([^/]+)(?:\/|$)/);
	if (!match) return void 0;
	let segment;
	try {
		segment = decodeURIComponent(match[1]);
	} catch {
		return;
	}
	return u$1().determineSupportedLocale(segment);
}
function getPathnameForLocale(pathname, locale, basepath = getRouterBasepath()) {
	const i18nConfig = u$1();
	const { basepath: routeBasepath, pathname: routePathname } = splitBasepath(pathname, basepath);
	const unlocalizedPath = getLocaleFromPath(routePathname, "/") ? routePathname.replace(/^\/[^/]+/, "") || "/" : routePathname;
	const resolvedLocale = i18nConfig.resolveSupportedLocale(locale);
	if (resolvedLocale === i18nConfig.getDefaultLocale()) return `${routeBasepath}${unlocalizedPath}`;
	return `${routeBasepath}/${encodeURIComponent(resolvedLocale)}${unlocalizedPath === "/" ? "" : unlocalizedPath}`;
}
function getRouterBasepath() {
	return "/";
}
function splitBasepath(pathname, basepath) {
	const normalizedBasepath = `/${basepath.replace(/^\/+|\/+$/g, "")}`;
	if (normalizedBasepath === "/" || pathname === normalizedBasepath) return {
		basepath: normalizedBasepath === "/" ? "" : normalizedBasepath,
		pathname: pathname === normalizedBasepath ? "/" : pathname
	};
	if (pathname.startsWith(`${normalizedBasepath}/`)) return {
		basepath: normalizedBasepath,
		pathname: pathname.slice(normalizedBasepath.length)
	};
	return {
		basepath: "",
		pathname
	};
}
var localeCookieOptions = {
	path: "/",
	sameSite: "lax",
	maxAge: 31536e3
};
var noLocaleCandidatesWarning = createDiagnosticMessage({
	source: "gt-tanstack-start",
	severity: "Warning",
	whatHappened: "No locale preference was found for the current request",
	reassurance: "GT will use the configured default locale",
	why: "neither the locale cookie nor the Accept-Language header supplied a supported locale candidate"
});
function resolveRequestConditions(request, localeConfig, pathname = new URL(request.url).pathname) {
	const i18nConfig = u$1();
	const cookieHeader = request.headers.get("cookie");
	const localeCandidates = [];
	if (localeConfig?.localeRouting) {
		const pathLocale = getLocaleFromPath(pathname);
		if (pathLocale) localeCandidates.push(pathLocale);
	}
	const cookieLocale = getCookieValue(cookieHeader, i18nConfig.getLocaleCookieName());
	if (cookieLocale) localeCandidates.push(cookieLocale);
	localeCandidates.push(...parseAcceptLanguage(request.headers.get("accept-language")));
	if (localeCandidates.length === 0) console.warn(noLocaleCandidatesWarning);
	const locale = i18nConfig.resolveSupportedLocale(localeCandidates, localeConfig ?? {
		defaultLocale: i18nConfig.getDefaultLocale(),
		locales: i18nConfig.getLocales(),
		customMapping: i18nConfig.getCustomMapping()
	});
	setCookie(i18nConfig.getLocaleCookieName(), locale, localeCookieOptions);
	const enableI18nCookie = getCookieValue(cookieHeader, i18nConfig.getEnableI18nCookieName());
	return {
		locale,
		region: getCookieValue(cookieHeader, i18nConfig.getRegionCookieName()) || void 0,
		enableI18n: enableI18nCookie === void 0 ? true : enableI18nCookie === "true"
	};
}
var getLocale = createIsomorphicFn().server(() => getConditionStore().getLocale()).client(() => n$11().getLocale());
createIsomorphicFn().server(() => getConditionStore().getEnableI18n()).client(() => n$11().getEnableI18n());
createIsomorphicFn().server((messages) => {
	const conditionStore = getConditionStore();
	return getGTInternal({
		locale: conditionStore.getLocale(),
		enableI18n: conditionStore.getEnableI18n()
	}, messages);
}).client((messages) => {
	const conditionStore = n$11();
	return getGTInternal({
		locale: conditionStore.getLocale(),
		enableI18n: conditionStore.getEnableI18n()
	}, messages);
});
createIsomorphicFn().server(() => {
	const conditionStore = getConditionStore();
	return getMessagesInternal({
		locale: conditionStore.getLocale(),
		enableI18n: conditionStore.getEnableI18n()
	});
}).client(() => {
	const conditionStore = n$11();
	return getMessagesInternal({
		locale: conditionStore.getLocale(),
		enableI18n: conditionStore.getEnableI18n()
	});
});
createIsomorphicFn().server((rootId) => {
	const conditionStore = getConditionStore();
	return getTranslationsInternal({
		locale: conditionStore.getLocale(),
		enableI18n: conditionStore.getEnableI18n(),
		rootId
	});
}).client((rootId) => {
	const conditionStore = n$11();
	return getTranslationsInternal({
		locale: conditionStore.getLocale(),
		enableI18n: conditionStore.getEnableI18n(),
		rootId
	});
});
createIsomorphicFn().server(determineLocaleServer).client(() => getLocale());
function determineLocaleServer({ defaultLocale, locales, customMapping }) {
	if (isConditionStoreInitialized()) {
		const conditionStore = getConditionStore();
		if (conditionStore.hasActiveScope()) return conditionStore.getLocale();
	}
	return resolveRequestConditions(getRequest(), {
		defaultLocale,
		locales,
		customMapping
	}).locale;
}
function determineLocaleClient({ defaultLocale, locales, customMapping }) {
	const i18nConfig = u$1();
	const localeCookieName = i18nConfig.getLocaleCookieName();
	const candidates = [];
	const cookie = getCookieValue(document.cookie, localeCookieName);
	if (cookie) candidates.push(cookie);
	if (candidates.length === 0) console.warn("gt-tanstack-start(client): no locales could be determined for this request");
	return i18nConfig.resolveSupportedLocale(candidates, {
		defaultLocale,
		locales,
		customMapping
	});
}
createMiddleware().server(({ request, pathname, next }) => {
	return getConditionStore().run(request, () => next(), pathname);
});
function initializeGT(config) {
	const browserConfig = config.localeRouting && !config._reload ? {
		...config,
		_reload: ({ locale }) => {
			const pathname = getPathnameForLocale(window.location.pathname, locale);
			const destination = new URL(window.location.href);
			destination.pathname = pathname;
			window.location.assign(destination.href);
		}
	} : config;
	initializeGTSRAClient(config);
	createOrUpdateBrowserConditionStore({
		...browserConfig,
		locale: determineLocaleClient(config)
	});
}
var gt_config_default = {
	defaultLocale: "en",
	locales: [
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
	files: { "gt": { "output": "src/_gt/[locale].json" } }
};
var translationsMap = {
	en: {
		Products: "Products",
		Pricing: "Pricing",
		Team: "Team",
		Blog: "Blog",
		Careers: "Careers",
		FAQ: "FAQ",
		Contact: "Contact",
		Settings: "Settings",
		Home: "Home",
		Methodology: "Methodology",
		"Mock Pages": "Mock Pages",
		"i18n Benchmark": "i18n Benchmark",
		"An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
		Resources: "Resources",
		GitHub: "GitHub",
		Contributing: "Contributing",
		"i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.": "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
		"⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.": "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.",
		"A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.": "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
		"View Results": "View Results",
		"Understanding the Impact": "Understanding the Impact",
		"Why a single large JSON can hurt performance": "Why a single large JSON can hurt performance",
		"Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:": "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
		"The JSON must be parsed on every page load — blocking the main thread.": "The JSON must be parsed on every page load — blocking the main thread.",
		"Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.": "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
		"During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.": "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
		"The trade-offs of dynamic loading": "The trade-offs of dynamic loading",
		"Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:": "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
		"Waterfall requests:": "Waterfall requests:",
		"the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.": "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.",
		"Flash of untranslated content (FOUC):": "Flash of untranslated content (FOUC):",
		"users may briefly see translation keys or a fallback language before the chunk arrives.": "users may briefly see translation keys or a fallback language before the chunk arrives.",
		"Cache invalidation:": "Cache invalidation:",
		"updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.": "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.",
		"What this benchmark measures": "What this benchmark measures",
		"This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.": "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.",
		"Why These Metrics Matter": "Why These Metrics Matter",
		"Bundle Size": "Bundle Size",
		"The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.": "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
		"Rendering & Hydration": "Rendering & Hydration",
		"Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).": "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
		"Dynamic Loading": "Dynamic Loading",
		"Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.": "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.",
		"Sample Results": "Sample Results",
		Yes: "Yes",
		Manual: "Manual",
		"Built-in": "Built-in",
		Library: "Library",
		"Lookup Time": "Lookup Time",
		"Lazy Loading": "Lazy Loading",
		"About This Benchmark": "About This Benchmark",
		"This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.": "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.",
		"What We Measure": "What We Measure",
		"Bundle size impact": "Bundle size impact",
		"The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.": "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
		"Rendering overhead": "Rendering overhead",
		"How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.": "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
		"Hydration cost": "Hydration cost",
		"During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.": "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
		"Lazy loading effectiveness": "Lazy loading effectiveness",
		"Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).": "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
		"Locale switch speed": "Locale switch speed",
		"How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.": "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
		"Why This Exists": "Why This Exists",
		"Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.": "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
		"The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.": "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.",
		"Tools and services to streamline your internationalization workflow.": "Tools and services to streamline your internationalization workflow.",
		"Benchmark CLI": "Benchmark CLI",
		"Run benchmarks locally from your terminal. Supports custom configurations and CI integration.": "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
		Free: "Free",
		"Benchmark Cloud": "Benchmark Cloud",
		"Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.": "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
		"Benchmark Enterprise": "Benchmark Enterprise",
		"On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.": "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
		"Contact Us": "Contact Us",
		"Migration Assistant": "Migration Assistant",
		"AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.": "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
		"$99 one-time": "$99 one-time",
		"Translation QA": "Translation QA",
		"Automated quality checks for missing translations, pluralization issues, and context errors.": "Automated quality checks for missing translations, pluralization issues, and context errors.",
		"Bundle Optimizer": "Bundle Optimizer",
		"Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.": "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
		"Learn More": "Learn More",
		"Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.": "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.",
		"Senior Frontend Engineer": "Senior Frontend Engineer",
		Remote: "Remote",
		"Full-time": "Full-time",
		Engineering: "Engineering",
		"Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
		"Backend Engineer": "Backend Engineer",
		"Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.": "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
		"Technical Writer": "Technical Writer",
		"Part-time": "Part-time",
		Documentation: "Documentation",
		"Create comprehensive guides, API references, and tutorials for our benchmarking platform.": "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
		"DevRel Engineer": "DevRel Engineer",
		"San Francisco / Remote": "San Francisco / Remote",
		Community: "Community",
		"Engage with the i18n community through talks, workshops, blog posts, and open source contributions.": "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
		"QA Engineer": "QA Engineer",
		"Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.": "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.",
		"Apply Now": "Apply Now",
		"Remote-first": "Remote-first",
		"Work from anywhere in the world": "Work from anywhere in the world",
		"Competitive pay": "Competitive pay",
		"Top-of-market compensation": "Top-of-market compensation",
		"Open source time": "Open source time",
		"20% time for OSS contributions": "20% time for OSS contributions"
	},
	fr: {
		Products: "Productos",
		Pricing: "Tarification",
		Team: "Équipe",
		Blog: "Blog",
		Careers: "Carrières",
		FAQ: "FAQ",
		Contact: "Contact",
		Settings: "Paramètres",
		Home: "Accueil",
		Methodology: "Méthodologie",
		"Mock Pages": "Pages de test",
		"i18n Benchmark": "Benchmark i18n",
		"An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.": "Une application de test open-source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.",
		Resources: "Ressources",
		GitHub: "GitHub",
		Contributing: "Contribuer",
		"i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.": "Benchmark i18n — Projet open-source. Construit avec React, Vite & TanStack Router.",
		"⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.": "⚠️ Cette page contient des données fictives à des fins de benchmark uniquement. Elle n'est liée à aucune entreprise ou service réel.",
		"A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.": "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.",
		"View Results": "Voir les résultats",
		"Understanding the Impact": "Comprendre l'impact",
		"Why a single large JSON can hurt performance": "Pourquoi un seul grand JSON peut nuire aux performances",
		"Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:": "De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :",
		"The JSON must be parsed on every page load — blocking the main thread.": "Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.",
		"Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.": "Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lors d'un changement de langue, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.",
		"During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.": "Pendant le rendu côté serveur, le dictionnaire complet est sérialisé dans la charge utile HTML, augmentant la taille du document qui doit être téléchargé et hydraté.",
		"The trade-offs of dynamic loading": "Les compromis du chargement dynamique",
		"Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:": "Diviser les traductions en morceaux par route ou par espace de noms peut réduire considérablement la charge utile initiale. Mais cela introduit de nouveaux défis :",
		"Waterfall requests:": "Requêtes en cascade :",
		"the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.": "l'application doit d'abord se charger, déterminer la langue, puis récupérer le bon morceau — ajoutant des allers-retours réseau.",
		"Flash of untranslated content (FOUC):": "Flash de contenu non traduit (FOUC) :",
		"users may briefly see translation keys or a fallback language before the chunk arrives.": "les utilisateurs peuvent voir brièvement des clés de traduction ou une langue de secours avant l'arrivée du morceau.",
		"Cache invalidation:": "Invalidation du cache :",
		"updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.": "la mise à jour des traductions nécessite des stratégies d'invalidation du cache pour garantir que les utilisateurs reçoivent un contenu frais sans re-télécharger les morceaux inchangés.",
		"What this benchmark measures": "Ce que ce benchmark mesure",
		"This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.": "Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement paresseux. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.",
		"Why These Metrics Matter": "Pourquoi ces métriques comptent",
		"Bundle Size": "Taille du bundle",
		"The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.": "Le bundle correspond aux données envoyées à chaque utilisateur dans le monde. Un bundle plus volumineux signifie des temps de téléchargement plus longs — surtout sur les connexions 3G lentes courantes dans de nombreuses régions. Les bibliothèques i18n varient considérablement en poids : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, plus les fichiers de traduction eux-mêmes.",
		"Rendering & Hydration": "Rendu & Hydratation",
		"Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).": "Connecter un dictionnaire JSON volumineux à chaque composant crée une dépendance cachée : tout changement dans le contexte de traduction peut déclencher des re-rendus sur l'ensemble de l'arbre. Pendant l'hydratation SSR, l'analyse et l'attachement d'objets de traduction massifs ajoutent de la latence avant que la page ne devienne interactive — impactant directement le Time to Interactive (TTI).",
		"Dynamic Loading": "Chargement dynamique",
		"Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.": "Charger toutes les traductions à l'avance surcharge la charge utile initiale. Le chargement dynamique (paresseux) divise les traductions par route ou par espace de noms, n'envoyant que ce dont la page actuelle a besoin. Cependant, le chargement paresseux introduit ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité du cache. Mesurer les deux stratégies est essentiel.",
		"Sample Results": "Exemples de résultats",
		Yes: "Oui",
		Manual: "Manuel",
		"Built-in": "Intégré",
		Library: "Bibliothèque",
		"Lookup Time": "Temps de recherche",
		"Lazy Loading": "Chargement paresseux",
		"About This Benchmark": "À propos de ce benchmark",
		"This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.": "Il s'agit d'une application de test open-source — pas d'un produit ou d'une entreprise. Son seul but est de fournir une application React réaliste de plusieurs pages où différentes bibliothèques i18n peuvent être intégrées et mesurées dans des conditions identiques.",
		"What We Measure": "Ce que nous mesurons",
		"Bundle size impact": "Impact sur la taille du bundle",
		"The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.": "Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers de traduction sont inclus. Cela affecte directement le temps de téléchargement sur les réseaux lents.",
		"Rendering overhead": "Surcharge de rendu",
		"How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.": "Combien de temps supplémentaire la bibliothèque ajoute au cycle de rendu de React. Les bibliothèques qui injectent des traductions via un fournisseur de contexte unique peuvent provoquer des re-rendus inutiles dans l'arbre des composants.",
		"Hydration cost": "Coût d'hydratation",
		"During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.": "Pendant le SSR, les données de traduction sont sérialisées en HTML. Les dictionnaires volumineux augmentent la charge utile HTML et ralentissent l'hydratation — le moment où la page devient interactive.",
		"Lazy loading effectiveness": "Efficacité du chargement paresseux",
		"Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).": "Si le fractionnement des traductions par route ou par espace de noms réduit réellement la charge initiale, et quels compromis cela introduit (requêtes en cascade, FOUC, complexité du cache).",
		"Locale switch speed": "Vitesse de changement de langue",
		"How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.": "À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération des nouvelles traductions, le re-rendu des composants et la mise à jour du DOM.",
		"Why This Exists": "Pourquoi cela existe",
		"Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.": "Choisir une bibliothèque i18n est une décision architecturale avec des conséquences à long terme. La plupart des comparaisons se concentrent sur l'ergonomie de l'API, mais peu mesurent le coût en performance : quel poids la bibliothèque ajoute-t-elle au bundle ? Comment affecte-t-elle le rendu lorsque des milliers de clés de traduction sont chargées ? Le chargement paresseux aide-t-il réellement ou ne fait-il que déplacer le coût ? Ce benchmark répond à ces questions avec des données réelles.",
		"The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.": "La même application de 10 pages est construite une fois par bibliothèque. Nous mesurons le bundle de production (via rollup-plugin-visualizer), effectuons des audits Lighthouse pour les métriques de chargement et utilisons React Profiler pour capturer les temps de rendu lors des changements de langue. Tous les tests s'exécutent en CI sur du matériel cohérent pour garantir des résultats reproductibles.",
		"Tools and services to streamline your internationalization workflow.": "Des outils et services pour rationaliser votre flux de travail d'internationalisation.",
		"Benchmark CLI": "CLI Benchmark",
		"Run benchmarks locally from your terminal. Supports custom configurations and CI integration.": "Exécutez des benchmarks localement depuis votre terminal. Prend en charge les configurations personnalisées et l'intégration CI.",
		Free: "Gratuit",
		"Benchmark Cloud": "Benchmark Cloud",
		"Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.": "Analyse comparative automatisée basée sur le cloud avec suivi historique, alertes et tableaux de bord d'équipe.",
		"Benchmark Enterprise": "Benchmark Enterprise",
		"On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.": "Déploiement sur site avec SSO, journaux d'audit, SLA personnalisés et support dédié.",
		"Contact Us": "Contactez-nous",
		"Migration Assistant": "Assistant de migration",
		"AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.": "Outil alimenté par l'IA qui aide à migrer votre base de code entre les bibliothèques i18n sans temps d'arrêt.",
		"$99 one-time": "99 $ une seule fois",
		"Translation QA": "QA de traduction",
		"Automated quality checks for missing translations, pluralization issues, and context errors.": "Contrôles de qualité automatisés pour les traductions manquantes, les problèmes de pluriel et les erreurs de contexte.",
		"Bundle Optimizer": "Optimiseur de bundle",
		"Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.": "Analyse et optimise votre bundle i18n pour la production avec le tree-shaking et le fractionnement de code.",
		"Learn More": "En savoir plus",
		"Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.": "Rejoignez notre mission pour améliorer l'écosystème de l'internationalisation. Nous sommes une équipe en télétravail qui valorise l'impact, la transparence et l'apprentissage continu.",
		"Senior Frontend Engineer": "Ingénieur Frontend Senior",
		Remote: "À distance",
		"Full-time": "Temps plein",
		Engineering: "Ingénierie",
		"Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.": "Construisez et maintenez notre tableau de bord de benchmark et nos outils de développement en utilisant React, TypeScript et Vite.",
		"Backend Engineer": "Ingénieur Backend",
		"Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.": "Concevez et faites évoluer notre infrastructure de benchmark dans le cloud gérant des milliers de passages automatisés quotidiennement.",
		"Technical Writer": "Rédacteur technique",
		"Part-time": "Temps partiel",
		Documentation: "Documentation",
		"Create comprehensive guides, API references, and tutorials for our benchmarking platform.": "Créez des guides complets, des références d'API et des tutoriels pour nuestra plateforme de benchmark.",
		"DevRel Engineer": "Ingénieur DevRel",
		"San Francisco / Remote": "San Francisco / À distance",
		Community: "Communauté",
		"Engage with the i18n community through talks, workshops, blog posts, and open source contributions.": "Engagez-vous auprès de la communauté i18n par des conférences, des ateliers, des articles de blog et des contributions open source.",
		"QA Engineer": "Ingénieur QA",
		"Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.": "Garantissez l'exactitude et la fiabilité des résultats de benchmark grâce à des tests et des validations rigoureux.",
		"Apply Now": "Postuler maintenant",
		"Remote-first": "Télétravail prioritaire",
		"Work from anywhere in the world": "Travaillez de n'importe où dans le monde",
		"Competitive pay": "Salaire compétitif",
		"Top-of-market compensation": "Rémunération au sommet du marché",
		"Open source time": "Temps open source",
		"20% time for OSS contributions": "20 % du temps pour les contributions OSS"
	},
	de: {
		Products: "Produkte",
		Pricing: "Preise",
		Team: "Team",
		Blog: "Blog",
		Careers: "Karriere",
		FAQ: "FAQ",
		Contact: "Kontakt",
		Settings: "Einstellungen",
		Home: "Startseite",
		Methodology: "Methodik",
		"Mock Pages": "Testseiten",
		"i18n Benchmark": "i18n Benchmark",
		"An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.": "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladezeit und die Reaktivität der App.",
		Resources: "Ressourcen",
		GitHub: "GitHub",
		Contributing: "Beitragen",
		"i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.": "i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite und TanStack Router.",
		"⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.": "⚠️ Diese Seite enthält fiktive Daten, die nur Benchmark-Zwecken dienen. Sie stehen in keinem Zusammenhang mit realen Unternehmen oder Dienstleistungen.",
		"A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.": "Eine Testanwendung, die darauf ausgelegt ist, die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen.",
		"View Results": "Ergebnisse anzeigen",
		"Understanding the Impact": "Die Auswirkungen verstehen",
		"Why a single large JSON can hurt performance": "Warum ein einziges großes JSON die Leistung beeinträchtigen kann",
		"Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:": "Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verbraucht, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:",
		"The JSON must be parsed on every page load — blocking the main thread.": "Das JSON muss bei jedem Seitenladen analysiert werden — was den Hauptthread blockiert.",
		"Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.": "Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Gebietsschema ändert, da jeder Konsument benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.",
		"During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.": "Während des serverseitigen Renderings wird das vollständige Wörterbuch in die HTML-Payload serialisiert, wodurch die Größe des Dokuments erhöht wird, das heruntergeladen und hydratisiert werden muss.",
		"The trade-offs of dynamic loading": "Die Kompromisse beim dynamischen Laden",
		"Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:": "Das Aufteilen der Übersetzungen in Chunks pro Route oder Namespace kann die anfängliche Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:",
		"Waterfall requests:": "Waterfall-Anfragen:",
		"the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.": "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.",
		"Flash of untranslated content (FOUC):": "Aufblitzen von nicht übersetztem Inhalt (FOUC):",
		"users may briefly see translation keys or a fallback language before the chunk arrives.": "users may briefly see translation keys or a fallback language before the chunk arrives.",
		"Cache invalidation:": "Cache-Invalidierung:",
		"updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.": "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.",
		"What this benchmark measures": "Was dieser Benchmark misst",
		"This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.": "Diese Test-App bietet eine kontrollierte Umgebung — 10 Seiten mit realistischem Inhalt —, um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.",
		"Why These Metrics Matter": "Warum diese Kennzahlen wichtig sind",
		"Bundle Size": "Bundle-Größe",
		"The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.": "Das Bundle stellt die Daten dar, die an jeden Benutzer weltweit gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — insbesondere bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren drastisch in ihrem Gewicht: von einigen Kilobyte bis zu Dutzenden von Kilobyte an Laufzeitcode, zusätzlich zu den Übersetzungsdateien selbst.",
		"Rendering & Hydration": "Rendering & Hydratation",
		"Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).": "Das Verbinden eines großen JSON-Wörterbuchs mit jeder Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydratisierung fügt das Parsen und Anhängen massiver Übersetzungsobjekte Latenz hinzu, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.",
		"Dynamic Loading": "Dynamisches Laden",
		"Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.": "Das Vorabladen aller Übersetzungen überlastet die anfängliche Payload. Dynamisches (Lazy) Laden teilt Übersetzungen nach Route oder Namespace auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Aufblitzen nicht übersetzter Inhalte und Komplexität des Cachings. Die Messung beider Strategien ist unerlässlich.",
		"Sample Results": "Beispielergebnisse",
		Yes: "Yes",
		Manual: "Manual",
		"Built-in": "Built-in",
		Library: "Library",
		"Lookup Time": "Suchzeit",
		"Lazy Loading": "Lazy Loading",
		"About This Benchmark": "About This Benchmark",
		"This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.": "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.",
		"What We Measure": "Was wir messen",
		"Bundle size impact": "Auswirkung auf die Bundle-Größe",
		"The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.": "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
		"Rendering overhead": "Rendering-Overhead",
		"How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.": "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
		"Hydration cost": "Hydratationskosten",
		"During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.": "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
		"Lazy loading effectiveness": "Effektivität von Lazy Loading",
		"Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).": "Ob das Aufteilen von Übersetzungen nach Route oder Namespace die anfängliche Belastung tatsächlich reduziert und welche Kompromisse es mit sich bringt (Waterfall-Anfragen, FOUC, Cache-Komplexität).",
		"Locale switch speed": "Geschwindigkeit des Sprachwechsels",
		"How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.": "Wie schnell die App zur Laufzeit von einer Sprache in eine andere wechseln kann — einschließlich des Abrufens neuer Übersetzungen, des erneuten Renderings von Komponenten und der Aktualisierung des DOM.",
		"Why This Exists": "Why This Exists",
		"Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.": "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
		"The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.": "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.",
		"Tools and services to streamline your internationalization workflow.": "Tools and services to streamline your internationalization workflow.",
		"Benchmark CLI": "Benchmark CLI",
		"Run benchmarks locally from your terminal. Supports custom configurations and CI integration.": "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
		Free: "Kostenlos",
		"Benchmark Cloud": "Benchmark Cloud",
		"Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.": "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
		"Benchmark Enterprise": "Benchmark Enterprise",
		"On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.": "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
		"Contact Us": "Kontaktieren Sie uns",
		"Migration Assistant": "Migrationsassistent",
		"AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.": "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
		"$99 one-time": "$99 one-time",
		"Translation QA": "Translation QA",
		"Automated quality checks for missing translations, pluralization issues, and context errors.": "Automated quality checks for missing translations, pluralization issues, and context errors.",
		"Bundle Optimizer": "Bundle Optimizer",
		"Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.": "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
		"Learn More": "Mehr erfahren",
		"Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.": "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.",
		"Senior Frontend Engineer": "Senior Frontend Engineer",
		Remote: "Remote",
		"Full-time": "Full-time",
		Engineering: "Engineering",
		"Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
		"Backend Engineer": "Backend Engineer",
		"Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.": "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
		"Technical Writer": "Technischer Redakteur",
		"Part-time": "Part-time",
		Documentation: "Documentation",
		"Create comprehensive guides, API references, and tutorials for our benchmarking platform.": "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
		"DevRel Engineer": "DevRel Engineer",
		"San Francisco / Remote": "San Francisco / Remote",
		Community: "Community",
		"Engage with the i18n community through talks, workshops, blog posts, and open source contributions.": "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
		"QA Engineer": "QA Engineer",
		"Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.": "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.",
		"Apply Now": "Jetzt bewerben",
		"Remote-first": "Remote-first",
		"Work from anywhere in the world": "Work from anywhere in the world",
		"Competitive pay": "Competitive pay",
		"Top-of-market compensation": "Top-of-market compensation",
		"Open source time": "Open source time",
		"20% time for OSS contributions": "20% time for OSS contributions"
	},
	es: {
		Products: "Productos",
		Pricing: "Precios",
		Team: "Equipo",
		Blog: "Blog",
		Careers: "Carreras",
		FAQ: "Preguntas frecuentes",
		Contact: "Contacto",
		Settings: "Configuración",
		Home: "Inicio",
		Methodology: "Metodología",
		"Mock Pages": "Páginas de prueba",
		"i18n Benchmark": "Benchmark i18n",
		"An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.": "Una aplicación de prueba de código abierto para medir el impacto en el mundo real de las bibliotecas de internacionalización en el tamaño del paquete, el tiempo de carga y la reactividad de la aplicación.",
		Resources: "Recursos",
		GitHub: "GitHub",
		Contributing: "Contribuyendo",
		"i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.": "Benchmark i18n — Proyecto de código abierto. Construido con React, Vite y TanStack Router.",
		"⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.": "⚠️ Esta página contiene datos de prueba solo para fines de benchmark. No está relacionada con ningún negocio o servicio real.",
		"A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.": "Una aplicación de prueba diseñada para medir el impacto en el mundo real de las bibliotecas de internacionalización en el tamaño del paquete, el rendimiento de carga y la reactividad del renderizado.",
		"View Results": "Ver resultados",
		"Understanding the Impact": "Entender el impacto",
		"Why a single large JSON can hurt performance": "Por qué un solo JSON grande puede perjudicar el rendimiento",
		"Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:": "Muchas bibliotecas de i18n almacenan las traducciones en un solo objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:",
		"The JSON must be parsed on every page load — blocking the main thread.": "El JSON debe analizarse en cada carga de página, lo que bloquea el hilo principal.",
		"Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.": "Las arquitecturas basadas en contexto pueden causar renderizados en cascada cuando cambia el locale, porque cada consumidor es notificado incluso si sus claves específicas no cambiaron.",
		"During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.": "Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, lo que aumenta el tamaño del documento que debe descargarse e hidratarse.",
		"The trade-offs of dynamic loading": "Los compromisos de la carga dinámica",
		"Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:": "Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:",
		"Waterfall requests:": "Solicitudes en cascada:",
		"the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.": "la aplicación primero debe cargarse, determinar el locale y luego buscar el fragmento correcto, lo que agrega viajes de ida y vuelta de red.",
		"Flash of untranslated content (FOUC):": "Flash de contenido no traducido (FOUC):",
		"users may briefly see translation keys or a fallback language before the chunk arrives.": "los usuarios pueden ver brevemente claves de traducción o un idioma de respaldo antes de que llegue el fragmento.",
		"Cache invalidation:": "Invalidación de caché:",
		"updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.": "actualizar las traducciones requiere estrategias de eliminación de caché para garantizar que los usuarios obtengan contenido fresco sin volver a descargar fragmentos sin cambios.",
		"What this benchmark measures": "Qué mide este benchmark",
		"This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.": "Esta aplicación de prueba proporciona un entorno controlado — 10 páginas con contenido realista — para comparar bibliotecas de i18n en tres ejes: el peso que agregan a su paquete de JavaScript, el tiempo dedicado a analizar y renderizar contenido traducido, y la efectividad de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.",
		"Why These Metrics Matter": "Por qué importan estas métricas",
		"Bundle Size": "Tamaño del paquete",
		"The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.": "El paquete es el dato enviado a cada usuario en todo el mundo. Un paquete más grande significa tiempos de descarga más largos, especialmente en ediciones 3G lentas comunes en muchas regiones. Las bibliotecas de i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código en tiempo de ejecución, además de los archivos de traducción en sí.",
		"Rendering & Hydration": "Renderizado e Hidratación",
		"Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).": "Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar renderizados en todo el árbol. Durante la hidratación de SSR, analizar y adjuntar objetos de traducción masivos agrega latencia antes de que la página se vuelva interactiva, lo que afecta directamente al Tiempo hasta la Interactividad (TTI).",
		"Dynamic Loading": "Carga dinámica",
		"Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.": "Cargar todas las traducciones por adelantado sobrecarga el payload inicial. La carga dinámica (perezosa) divide las traducciones por ruta o espacio de nombres, enviando solo lo que necesita la página actual. Sin embargo, la carga diferida introduce sus propios compromisos: solicitudes en cascada, flash de contenido no traducido y complejidad de almacenamiento en caché. Medir ambas estrategias es esencial.",
		"Sample Results": "Resultados de muestra",
		Yes: "Sí",
		Manual: "Manual",
		"Built-in": "Incorporado",
		Library: "Biblioteca",
		"Lookup Time": "Tiempo de búsqueda",
		"Lazy Loading": "Carga diferida",
		"About This Benchmark": "Acerca de este benchmark",
		"This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.": "Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación React realista de varias páginas donde se puedan integrar y medir diferentes bibliotecas de i18n en condiciones idénticas.",
		"What We Measure": "Qué medimos",
		"Bundle size impact": "Impacto en el tamaño del paquete",
		"The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.": "Los bytes de JavaScript adicionales enviados a los usuarios cuando se incluyen la biblioteca de i18n y sus archivos de traducción. Esto afecta directamente al tiempo de descarga en redes lentas.",
		"Rendering overhead": "Sobrecarga de renderizado",
		"How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.": "Cuánto tiempo extra agrega la biblioteca al ciclo de renderizado de React. Las bibliotecas que inyectan traducciones a través de un único proveedor de contexto pueden causar renderizados innecesarios en todo el árbol de componentes.",
		"Hydration cost": "Coste de hidratación",
		"During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.": "Durante el SSR, los datos de traducción se serializan en HTML. Los diccionarios grandes aumentan el payload HTML y ralentizan la hidratación, el momento en que la página se vuelve interactiva.",
		"Lazy loading effectiveness": "Efectividad de la carga diferida",
		"Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).": "Si dividir las traducciones por ruta o espacio de nombres realmente reduce la carga inicial y qué compromisos introduce (solicitudes en cascada, FOUC, complejidad de caché).",
		"Locale switch speed": "Velocidad de cambio de locale",
		"How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.": "Qué tan rápido puede la aplicación cambiar de un idioma a otro en tiempo de ejecución, incluyendo la obtención de nuevas traducciones, el renderizado de componentes y la actualización del DOM.",
		"Why This Exists": "Por qué existe esto",
		"Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.": "Elegir una biblioteca de i18n es una decisión arquitectónica con consecuencias a largo plazo. La mayoría de las comparaciones se centran en la ergonomía de la API, pero pocas miden el coste de rendimiento: ¿cuánto peso agrega la biblioteca al paquete? ¿Cómo afecta al renderizado cuando se cargan miles de claves de traducción? ¿La carga diferida realmente ayuda o solo desplaza el coste? Este benchmark responde a esas preguntas con datos reales.",
		"The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.": "Se construye la misma aplicación de 10 páginas una vez por biblioteca. Medimos el paquete de producción (vía rollup-plugin-visualizer), realizamos auditorías de Lighthouse para métricas de carga y usamos React Profiler para capturar tiempos de renderizado durante los cambios de locale. Todas las pruebas se ejecutan en CI en hardware consistente para garantizar resultados reproducibles.",
		"Tools and services to streamline your internationalization workflow.": "Herramientas y servicios para agilizar su flujo de trabajo de internacionalización.",
		"Benchmark CLI": "CLI de benchmark",
		"Run benchmarks locally from your terminal. Supports custom configurations and CI integration.": "Ejecute benchmarks localmente desde su terminal. Admite configuraciones personalizadas e integración de CI.",
		Free: "Gratis",
		"Benchmark Cloud": "Benchmark Cloud",
		"Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.": "Benchmarking automatizado basado en la nube con seguimiento histórico, alertas y paneles de equipo.",
		"Benchmark Enterprise": "Benchmark Enterprise",
		"On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.": "Implementación local con SSO, registros de auditoría, SLAs personalizados y soporte dedicado.",
		"Contact Us": "Contáctenos",
		"Migration Assistant": "Asistente de migración",
		"AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.": "Herramienta impulsada por IA que ayuda a migrar su base de código entre bibliotecas de i18n sin tiempo de inactividad.",
		"$99 one-time": "$99 una sola vez",
		"Translation QA": "Control de calidad de traducción",
		"Automated quality checks for missing translations, pluralization issues, and context errors.": "Verificaciones de calidad automatizadas para traducciones faltantes, problemas de pluralización y errores de contexto.",
		"Bundle Optimizer": "Optimizador de paquetes",
		"Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.": "Analiza y optimiza su paquete de i18n para producción con tree-shaking y división de código.",
		"Learn More": "Saber más",
		"Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.": "Únase a nuestra misión para mejorar el ecosistema de internacionalización. Somos un equipo que prioriza el control remoto que valora el impacto, la transparencia y el aprendizaje continuo.",
		"Senior Frontend Engineer": "Ingeniero Frontend Sénior",
		Remote: "Remoto",
		"Full-time": "Tiempo completo",
		Engineering: "Ingeniería",
		"Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.": "Cree y mantenga nuestro panel de benchmark y herramientas de desarrollo utilizando React, TypeScript y Vite.",
		"Backend Engineer": "Ingeniero de Backend",
		"Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.": "Diseñe y escale nuestra infraestructura de benchmark en la nube que maneja miles de ejecuciones automatizadas diariamente.",
		"Technical Writer": "Escritor técnico",
		"Part-time": "Tiempo parcial",
		Documentation: "Documentación",
		"Create comprehensive guides, API references, and tutorials for our benchmarking platform.": "Cree guías completas, referencias de API y tutoriales para nuestra plataforma de benchmark.",
		"DevRel Engineer": "Ingeniero de DevRel",
		"San Francisco / Remote": "San Francisco / Remoto",
		Community: "Comunidad",
		"Engage with the i18n community through talks, workshops, blog posts, and open source contributions.": "Participe con la comunidad de i18n a través de charlas, talleres, publicaciones de blog y contribuciones de código abierto.",
		"QA Engineer": "Ingeniero de control de calidad",
		"Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.": "Garantice la precisión y confiabilidad de los resultados del benchmark a través de pruebas y validaciones rigurosas.",
		"Apply Now": "Aplicar ahora",
		"Remote-first": "Prioridad remota",
		"Work from anywhere in the world": "Trabaja desde cualquier parte del mundo",
		"Competitive pay": "Pago competitivo",
		"Top-of-market compensation": "Compensación superior al mercado",
		"Open source time": "Tiempo de código abierto",
		"20% time for OSS contributions": "20% de tiempo para contribuciones de OSS"
	},
	it: {
		Products: "Prodotti",
		Pricing: "Prezzi",
		Team: "Team",
		Blog: "Blog",
		Careers: "Carriere",
		FAQ: "FAQ",
		Contact: "Contatti",
		Settings: "Impostazioni",
		Home: "Home",
		Methodology: "Metodologia",
		"Mock Pages": "Pagine di test",
		"i18n Benchmark": "i18n Benchmark",
		"An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.": "Un'applicazione di test open-source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.",
		Resources: "Risorse",
		GitHub: "GitHub",
		Contributing: "Contribuire",
		"i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.": "i18n Benchmark — Progetto open-source. Costruito con React, Vite e TanStack Router.",
		"⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.": "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è correlata ad alcuna attività o servizio reale.",
		"A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.": "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.",
		"View Results": "Visualizza i risultati",
		"Understanding the Impact": "Capire l'impatto",
		"Why a single large JSON can hurt performance": "Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni",
		"Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:": "Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa:",
		"The JSON must be parsed on every page load — blocking the main thread.": "Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.",
		"Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.": "Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.",
		"During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.": "Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idratato.",
		"The trade-offs of dynamic loading": "I compromessi del caricamento dinamico",
		"Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:": "La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:",
		"Waterfall requests:": "Richieste a cascata:",
		"the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.": "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.",
		"Flash of untranslated content (FOUC):": "Flash di contenuti non tradotti (FOUC):",
		"users may briefly see translation keys or a fallback language before the chunk arrives.": "users may briefly see translation keys or a fallback language before the chunk arrives.",
		"Cache invalidation:": "Invalidazione della cache:",
		"updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.": "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.",
		"What this benchmark measures": "Cosa misura questo benchmark",
		"This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.": "Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.",
		"Why These Metrics Matter": "Perché queste metriche sono importanti",
		"Bundle Size": "Dimensione del bundle",
		"The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.": "Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.",
		"Rendering & Hydration": "Rendering e idratazione",
		"Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).": "Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).",
		"Dynamic Loading": "Caricamento dinamico",
		"Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.": "Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale.",
		"Sample Results": "Risultati di esempio",
		Yes: "Yes",
		Manual: "Manual",
		"Built-in": "Built-in",
		Library: "Library",
		"Lookup Time": "Tempo di ricerca",
		"Lazy Loading": "Caricamento lazy",
		"About This Benchmark": "About This Benchmark",
		"This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.": "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.",
		"What We Measure": "Cosa misuriamo",
		"Bundle size impact": "Impatto sulla dimensione del bundle",
		"The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.": "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
		"Rendering overhead": "Sovrapprezzo di rendering",
		"How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.": "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
		"Hydration cost": "Costo di idratazione",
		"During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.": "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
		"Lazy loading effectiveness": "Efficacia del caricamento lazy",
		"Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).": "Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).",
		"Locale switch speed": "Velocità di cambio localizzazione",
		"How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.": "Quanto velocemente l'app può passare da una lingua all'altra in esecuzione, includendo il recupero delle nuove traduzioni, il re-rendering dei componenti e l'aggiornamento del DOM.",
		"Why This Exists": "Why This Exists",
		"Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.": "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
		"The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.": "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.",
		"Tools and services to streamline your internationalization workflow.": "Tools and services to streamline your internationalization workflow.",
		"Benchmark CLI": "Benchmark CLI",
		"Run benchmarks locally from your terminal. Supports custom configurations and CI integration.": "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
		Free: "Gratis",
		"Benchmark Cloud": "Benchmark Cloud",
		"Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.": "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
		"Benchmark Enterprise": "Benchmark Enterprise",
		"On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.": "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
		"Contact Us": "Contattaci",
		"Migration Assistant": "Assistente alla migrazione",
		"AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.": "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
		"$99 one-time": "$99 one-time",
		"Translation QA": "Translation QA",
		"Automated quality checks for missing translations, pluralization issues, and context errors.": "Automated quality checks for missing translations, pluralization issues, and context errors.",
		"Bundle Optimizer": "Bundle Optimizer",
		"Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.": "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
		"Learn More": "Scopri di più",
		"Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.": "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.",
		"Senior Frontend Engineer": "Senior Frontend Engineer",
		Remote: "Remoto",
		"Full-time": "Full-time",
		Engineering: "Engineering",
		"Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
		"Backend Engineer": "Backend Engineer",
		"Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.": "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
		"Technical Writer": "Scrittore tecnico",
		"Part-time": "Part-time",
		Documentation: "Documentation",
		"Create comprehensive guides, API references, and tutorials for our benchmarking platform.": "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
		"DevRel Engineer": "DevRel Engineer",
		"San Francisco / Remote": "San Francisco / Remote",
		Community: "Community",
		"Engage with the i18n community through talks, workshops, blog posts, and open source contributions.": "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
		"QA Engineer": "QA Engineer",
		"Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.": "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.",
		"Apply Now": "Candidati ora",
		"Remote-first": "Remote-first",
		"Work from anywhere in the world": "Work from anywhere in the world",
		"Competitive pay": "Competitive pay",
		"Top-of-market compensation": "Top-of-market compensation",
		"Open source time": "Open source time",
		"20% time for OSS contributions": "20% time for OSS contributions"
	},
	ja: {
		Products: "製品",
		Pricing: "料金",
		Team: "チーム",
		Blog: "ブログ",
		Careers: "採用",
		FAQ: "FAQ",
		Contact: "お問い合わせ",
		Settings: "設定",
		Home: "ホーム",
		Methodology: "メソッド",
		"Mock Pages": "テストページ",
		"i18n Benchmark": "i18n Benchmark",
		"An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.": "国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実際の影響を測定するためのオープンソーステストアプリケーション。",
		Resources: "リソース",
		GitHub: "GitHub",
		Contributing: "貢献する",
		"i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.": "i18n Benchmark — オープンソースプロジェクト。React、Vite、TanStack Routerで構築。",
		"⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.": "⚠️ このページにはベンチマークのみを目的とした模擬データが含まれています。実際のビジネスやサービスとは関係ありません。",
		"A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.": "国際化ライブラリがバンドルサイズ、読み込みパフォーマンス、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーション。",
		"View Results": "結果を表示",
		"Understanding the Impact": "影響を理解する",
		"Why a single large JSON can hurt performance": "なぜ1つの大きなJSONがパフォーマンスを低下させるのか",
		"Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:": "多くのi18nライブラリは、Reactコンテキストを介して提供される1つのJSONオブジェクトに翻訳を保存します。このオブジェクトが大きい（数千のキーがある）場合、翻訳を使用するすべてのコンポーネントが辞書全体への参照を保持します。これは以下のことを意味します：",
		"The JSON must be parsed on every page load — blocking the main thread.": "JSONはページ読み込みのたびに解析される必要があり、メインスレッドをブロックします。",
		"Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.": "コンテキストベースのアーキテクチャでは、ロケールが変更されたときにカスケード的な再レンダリングが発生する可能性があります。これは、特定のキーが変更されていなくても、すべてのコンシューマーに通知されるためです。",
		"During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.": "サーバーサイドレンダリング中、辞書全体がHTMLペイロードにシリアル化され、ダウンロードとハイドレーションが必要なドキュメントサイズが増加します。",
		"The trade-offs of dynamic loading": "動的読み込みのトレードオフ",
		"Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:": "ルートごとまたは名前空間ごとのチャンクに翻訳を分割すると、初期ペイロードを劇的に削減できます。しかし、新たな課題も生じます：",
		"Waterfall requests:": "ウォーターフォールリクエスト：",
		"the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.": "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.",
		"Flash of untranslated content (FOUC):": "未翻訳コンテンツのフラッシュ（FOUC）：",
		"users may briefly see translation keys or a fallback language before the chunk arrives.": "users may briefly see translation keys or a fallback language before the chunk arrives.",
		"Cache invalidation:": "キャッシュの無効化：",
		"updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.": "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.",
		"What this benchmark measures": "このベンチマークが測定するもの",
		"This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.": "このテストアプリは、10ページの現実的なコンテンツを含む制御された環境を提供し、3つの軸でi18nライブラリを比較します：JavaScriptバンドルに追加される重量、翻訳されたコンテンツの解析とレンダリングに費やされる時間、そしてコード分割と遅延読み込み戦略の有効性です。各ライブラリは同じアプリに統合されているため、結果を直接比較できます。",
		"Why These Metrics Matter": "なぜこれらの指標が重要なのか",
		"Bundle Size": "バンドルサイズ",
		"The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.": "バンドルは世界中のすべてのユーザーに送信されるデータです。バンドルが大きいほど、ダウンロード時間が長くなります。特に多くの地域で一般的な低速な3G接続では顕著です。i18nライブラリはその重量において、数キロバイトから数十キロバイトのランタイムコード、さらに翻訳ファイル自体まで大きく異なります。",
		"Rendering & Hydration": "レンダリングとハイドレーション",
		"Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).": "大きなJSON辞書をすべてのコンポーネントに接続すると、隠れた依存関係が生じます。翻訳コンテキストの変更は、ツリー全体で再レンダリングを引き起こす可能性があります。SSRのハイドレーション中、巨大な翻訳オブジェクトの解析とアタッチは、ページがインタラクティブになるまでの遅延を追加し、Time to Interactive（TTI）に直接影響します。",
		"Dynamic Loading": "動的読み込み",
		"Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.": "すべての翻訳を事前に読み込むと、初期ペイロードが過負荷になります。動的（遅延）読み込みは、ルートまたは名前空間ごとに翻訳を分割し、現在のページが必要なものだけを送信します。ただし、遅延読み込みには、ウォーターフォールリクエスト、未翻訳コンテンツのフラッシュ、キャッシュの複雑さといった独自のトレードオフが伴います。両方の戦略を測定することが不可欠です。",
		"Sample Results": "サンプル結果",
		Yes: "Yes",
		Manual: "Manual",
		"Built-in": "Built-in",
		Library: "Library",
		"Lookup Time": "検索時間",
		"Lazy Loading": "遅延読み込み",
		"About This Benchmark": "About This Benchmark",
		"This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.": "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.",
		"What We Measure": "測定するもの",
		"Bundle size impact": "バンドルサイズへの影響",
		"The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.": "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
		"Rendering overhead": "レンダリングのオーバーヘッド",
		"How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.": "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
		"Hydration cost": "ハイドレーションのコスト",
		"During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.": "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
		"Lazy loading effectiveness": "遅延読み込みの有効性",
		"Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).": "ルートまたは名前空間ごとに翻訳を分割することで、初期負荷が実際に軽減されるか、またどのようなトレードオフ（ウォーターフォールリクエスト、FOUC、キャッシュの複雑さ）が生じるかがわかります。",
		"Locale switch speed": "ロケール切り替え速度",
		"How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.": "実行時にアプリが1つの言語から別の言語にどれだけ速く切り替えられるか（新しい翻訳の取得、コンポーネントの再レンダリング、DOMの更新を含む）。",
		"Why This Exists": "Why This Exists",
		"Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.": "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
		"The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.": "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.",
		"Tools and services to streamline your internationalization workflow.": "Tools and services to streamline your internationalization workflow.",
		"Benchmark CLI": "Benchmark CLI",
		"Run benchmarks locally from your terminal. Supports custom configurations and CI integration.": "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
		Free: "無料",
		"Benchmark Cloud": "Benchmark Cloud",
		"Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.": "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
		"Benchmark Enterprise": "Benchmark Enterprise",
		"On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.": "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
		"Contact Us": "お問い合わせ",
		"Migration Assistant": "移行アシスタント",
		"AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.": "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
		"$99 one-time": "$99 one-time",
		"Translation QA": "Translation QA",
		"Automated quality checks for missing translations, pluralization issues, and context errors.": "Automated quality checks for missing translations, pluralization issues, and context errors.",
		"Bundle Optimizer": "Bundle Optimizer",
		"Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.": "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
		"Learn More": "詳細はこちら",
		"Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.": "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.",
		"Senior Frontend Engineer": "Senior Frontend Engineer",
		Remote: "リモート",
		"Full-time": "Full-time",
		Engineering: "Engineering",
		"Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
		"Backend Engineer": "Backend Engineer",
		"Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.": "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
		"Technical Writer": "テクニカルライター",
		"Part-time": "Part-time",
		Documentation: "Documentation",
		"Create comprehensive guides, API references, and tutorials for our benchmarking platform.": "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
		"DevRel Engineer": "DevRel Engineer",
		"San Francisco / Remote": "San Francisco / Remote",
		Community: "Community",
		"Engage with the i18n community through talks, workshops, blog posts, and open source contributions.": "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
		"QA Engineer": "QA Engineer",
		"Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.": "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.",
		"Apply Now": "今すぐ応募",
		"Remote-first": "Remote-first",
		"Work from anywhere in the world": "Work from anywhere in the world",
		"Competitive pay": "Competitive pay",
		"Top-of-market compensation": "Top-of-market compensation",
		"Open source time": "Open source time",
		"20% time for OSS contributions": "20% time for OSS contributions"
	},
	ko: {
		Products: "제품",
		Pricing: "가격",
		Team: "팀",
		Blog: "블로그",
		Careers: "채용",
		FAQ: "FAQ",
		Contact: "문의",
		Settings: "설정",
		Home: "홈",
		Methodology: "방법론",
		"Mock Pages": "테스트 페이지",
		"i18n Benchmark": "i18n 벤치마크",
		"An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.": "국제화 라이브러리가 번들 크기, 로드 시간 및 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.",
		Resources: "리소스",
		GitHub: "GitHub",
		Contributing: "기여하기",
		"i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.": "i18n Benchmark — 오픈 소스 프로젝트. React, Vite 및 TanStack Router로 구축되었습니다.",
		"⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.": "⚠️ 이 페이지는 벤치마킹 목적으로만 사용되는 모의 데이터를 포함하고 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.",
		"A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.": "국제화 라이브러리가 번들 크기, 로드 성능 및 렌더링 반응성에 미치는 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.",
		"View Results": "결과 보기",
		"Understanding the Impact": "영향 이해하기",
		"Why a single large JSON can hurt performance": "단일 대형 JSON이 성능을 저해하는 이유",
		"Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:": "많은 i18n 라이브러리는 React 컨텍스트를 통해 제공되는 단일 JSON 객체에 번역을 저장합니다. 이 객체가 클 경우(수천 개의 키), 번역을 사용하는 모든 구성 요소가 전체 사전에 대한 참조를 보유하게 됩니다. 이는 다음을 의미합니다:",
		"The JSON must be parsed on every page load — blocking the main thread.": "JSON은 페이지를 로드할 때마다 구문 분석되어야 하므로 메인 스레드를 차단합니다.",
		"Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.": "로케일이 변경될 때 컨텍스트 기반 아키텍처는 연쇄적인 다시 렌더링을 유발할 수 있습니다. 특정 키가 변경되지 않았더라도 모든 소비자가 알림을 받기 때문입니다.",
		"During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.": "서버 측 렌더링 중에 전체 사전이 HTML 페이로드로 직렬화되어 다운로드 및 하이드레이션해야 하는 문서 크기가 증가합니다.",
		"The trade-offs of dynamic loading": "동적 로딩의 트레이드오프",
		"Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:": "번역을 경로별 또는 네임스페이스별 청크로 분할하면 초기 페이로드를 획기적으로 줄일 수 있습니다. 하지만 새로운 과제가 발생합니다:",
		"Waterfall requests:": "워터폴 요청:",
		"the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.": "앱을 먼저 로드하고 로케일을 결정한 다음 올바른 청크를 가져와야 하므로 네트워크 왕복이 추가됩니다.",
		"Flash of untranslated content (FOUC):": "번역되지 않은 콘텐츠의 플래시 (FOUC):",
		"users may briefly see translation keys or a fallback language before the chunk arrives.": "사용자는 청크가 도착하기 전에 번역 키나 대체 언어를 잠시 볼 수 있습니다.",
		"Cache invalidation:": "캐시 무효화:",
		"updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.": "번역을 업데이트하려면 사용자가 변경되지 않은 청크를 다시 다운로드하지 않고 최신 콘텐츠를 받을 수 있도록 캐시 무효화 전략이 필요합니다.",
		"What this benchmark measures": "이 벤치마크가 측정하는 것",
		"This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.": "이 테스트 앱은 현실적인 콘텐츠가 포함된 10개의 페이지로 구성된 제어된 환경을 제공하여 세 가지 측면에서 i18n 라이브러리를 비교합니다: JavaScript 번들에 추가되는 무게, 번역된 콘텐츠를 구문 분석하고 렌더링하는 데 소요되는 시간, 코드 분할 및 지연 로딩 전략의 효과입니다. 각 라이브러리는 동일한 앱에 통합되어 결과가 직접적으로 비교 가능합니다.",
		"Why These Metrics Matter": "이 지표들이 중요한 이유",
		"Bundle Size": "번들 크기",
		"The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.": "번들은 전 세계 모든 사용자에게 전송되는 데이터입니다. 번들이 클수록 다운로드 시간이 길어집니다. 특히 많은 지역에서 흔히 사용되는 느린 3G 연결에서 더욱 그렇습니다. i18n 라이브러리는 수 킬로바이트에서 수십 킬로바이트의 런타임 코드와 번역 파일 자체에 이르기까지 그 무게가 매우 다양합니다.",
		"Rendering & Hydration": "렌더링 및 하이드레이션",
		"Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).": "모든 구성 요소에 대형 JSON 사전을 연결하면 숨겨진 종속성이 생성됩니다. 번역 컨텍스트가 변경되면 트리 전체에서 다시 렌더링이 발생할 수 있습니다. SSR 하이드레이션 중에 방대한 번역 개체를 구문 분석하고 첨부하면 페이지가 인터랙티브해지기 전까지 지연이 추가되어 TTI(Time to Interactive)에 직접적인 영향을 미칩니다.",
		"Dynamic Loading": "동적 로딩",
		"Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.": "모든 번역을 미리 로드하면 초기 페이로드가 과부하됩니다. 동적(지연) 로딩은 경로 또는 네임스페이스별로 번역을 분할하여 현재 페이지에 필요한 것만 전송합니다. 그러나 지연 로딩은 워터포럴 요청, 번역되지 않은 콘텐츠의 플래시, 캐싱 복잡성 등의 자체적인 트레이드오프가 있습니다. 두 전략을 모두 측정하는 것이 필수적입니다.",
		"Sample Results": "샘플 결과",
		Yes: "예",
		Manual: "수동",
		"Built-in": "내장",
		Library: "라이브러리",
		"Lookup Time": "조회 시간",
		"Lazy Loading": "지연 로딩",
		"About This Benchmark": "이 벤치마크에 대하여",
		"This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.": "이것은 오픈소스 테스트 애플리케이션입니다 — 제품이나 회사가 아닙니다. 유일한 목적은 다양한 i18n 라이브러리를 통합하고 동일한 조건에서 측정할 수 있는 현실적인 멀티 페이지 React 앱을 제공하는 것입니다.",
		"What We Measure": "측정 항목",
		"Bundle size impact": "번들 크기 영향",
		"The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.": "i18n 라이브러리와 번역 파일이 포함될 때 사용자에게 전송되는 추가 JavaScript 바이트입니다. 이는 느린 네트워크에서의 다운로드 시간에 직접적인 영향을 미칩니다.",
		"Rendering overhead": "렌더링 오버헤드",
		"How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.": "라이브러리가 React의 렌더링 주기에 추가하는 여분의 시간입니다. 단일 컨텍스트 제공자를 통해 번역을 주입하는 라이브러리는 컴포넌트 트리 전체에 걸쳐 불필요한 재렌더링을 유발할 수 있습니다.",
		"Hydration cost": "하이드레이션 비용",
		"During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.": "SSR 동안 번역 데이터는 HTML로 직렬화됩니다. 큰 사전은 HTML 페이로드를 증가시키고 페이지가 상호작용 가능해지는 순간인 하이드레이션을 지연시킵니다.",
		"Lazy loading effectiveness": "지연 로딩 효과",
		"Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).": "번역을 경로 또는 네임스페이스별로 분할하는 것이 실제로 초기 로드를 줄이는지, 그리고 어떤 트레이드오프(워터폴 요청, FOUC, 캐시 복잡성)가 발생하는지 측정합니다.",
		"Locale switch speed": "로케일 전환 속도",
		"How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.": "실행 중에 앱이 한 언어에서 다른 언어로 얼마나 빨리 전환할 수 있는지(새 번역 가져오기, 구성 요소 다시 렌더링, DOM 업데이트 포함) 측정합니다.",
		"Why This Exists": "이것이 존재하는 이유",
		"Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.": "i18n 라이브러리를 선택하는 것은 장기적인 결과를 초래하는 아키텍처적 결정입니다. 대부분의 비교는 API 사용성에 초점을 맞추지만 성능 비용을 측정하는 것은 드뭅니다: 라이브러리가 번들에 얼마나 많은 무게를 추가하는가? 수천 개의 번역 키가 로드될 때 렌더링에 어떤 영향을 미치는가? 지연 로딩이 실제로 도움이 되는가 아니면 비용을 전이시킬 뿐인가? 이 벤치마크는 실제 데이터로 그 질문에 답합니다.",
		"The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.": "동일한 10페이지 앱이 라이브러리마다 한 번씩 구축됩니다. 우리는 프로덕션 번들을 측정하고 (rollup-plugin-visualizer를 통해), 로딩 지표에 대해 Lighthouse 감사를 실행하며, 로케일 전환 중 렌더링 시간을 캡처하기 위해 React Profiler를 사용합니다. 재현 가능한 결과를 보장하기 위해 모든 테스트는 일관된 하드웨어의 CI에서 실행됩니다.",
		"Tools and services to streamline your internationalization workflow.": "국제화 워크플로우를 간소화하는 도구 및 서비스입니다.",
		"Benchmark CLI": "벤치마크 CLI",
		"Run benchmarks locally from your terminal. Supports custom configurations and CI integration.": "터미널에서 로컬로 벤치마크를 실행합니다. 사용자 지정 구성 및 CI 통합을 지원합니다.",
		Free: "무료",
		"Benchmark Cloud": "벤치마크 클라우드",
		"Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.": "과거 기록, 경고 및 팀 대시보드를 갖춘 자동화된 클라우드 기반 벤치마킹.",
		"Benchmark Enterprise": "벤치마크 엔터프라이즈",
		"On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.": "SSO, 감사 로그, 맞춤형 SLA 및 전담 지원을 포함하는 온프레미스 배포.",
		"Contact Us": "문의처",
		"Migration Assistant": "마이그레이션 도우미",
		"AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.": "제로 다운타임으로 i18n 라이브러리 간 코드베이스 마이그레이션을 돕는 AI 기반 도구입니다.",
		"$99 one-time": "일회성 $99",
		"Translation QA": "번역 품질 보증(QA)",
		"Automated quality checks for missing translations, pluralization issues, and context errors.": "누락된 번역, 복수형 문제 및 문맥 오류에 대한 자동화된 품질 검사입니다.",
		"Bundle Optimizer": "번들 최적화 도구",
		"Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.": "트리 쉐이킹 및 코드 분할을 사용하여 프로덕션용 i18n 번들을 분석하고 최적화합니다.",
		"Learn More": "더 알아보기",
		"Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.": "국제화 생태계를 개선하려는 우리의 사명에 동참하세요. 우리는 영향력, 투명성 및 지속적인 학습을 가치 있게 여기는 원격 근무 우선 팀입니다.",
		"Senior Frontend Engineer": "수석 프론트엔드 엔지니어",
		Remote: "원격",
		"Full-time": "정규직",
		Engineering: "엔지니어링",
		"Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.": "React, TypeScript 및 Vite를 사용하여 벤치마킹 대시보드 및 개발자 도구를 구축하고 유지 관리합니다.",
		"Backend Engineer": "백엔드 엔지니어",
		"Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.": "매일 수천 건의 자동화된 실행을 처리하는 클라우드 벤치마킹 인프라를 설계하고 확장합니다.",
		"Technical Writer": "테크니컬 라이터",
		"Part-time": "아르바이트",
		Documentation: "문서화",
		"Create comprehensive guides, API references, and tutorials for our benchmarking platform.": "벤치마킹 플랫폼에 대한 포괄적인 가이드, API 참조 및 자습서를 작성합니다.",
		"DevRel Engineer": "개발자 관계(DevRel) 엔지니어",
		"San Francisco / Remote": "샌프란시스코 / 원격",
		Community: "커뮤니티",
		"Engage with the i18n community through talks, workshops, blog posts, and open source contributions.": "강연, 워크숍, 블로그 게시물 및 오픈 소스 기여를 통해 i18n 커뮤니티와 소통합니다.",
		"QA Engineer": "품질 보증(QA) 엔지니어",
		"Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.": "엄격한 테스트 및 유효성 검사를 통해 벤치마크 결과의 정확성과 신뢰성을 보장합니다.",
		"Apply Now": "지금 지원하기",
		"Remote-first": "원격근무 우선",
		"Work from anywhere in the world": "전 세계 어디서나 근무 가능",
		"Competitive pay": "경쟁력 있는 급여",
		"Top-of-market compensation": "업계 최고 수준의 보상",
		"Open source time": "오픈 소스 시간",
		"20% time for OSS contributions": "OSS 기여를 위한 20%의 근무 시간"
	},
	pt: {
		Products: "Produtos",
		Pricing: "Preços",
		Team: "Equipe",
		Blog: "Blog",
		Careers: "Carreiras",
		FAQ: "FAQ",
		Contact: "Contato",
		Settings: "Configurações",
		Home: "Início",
		Methodology: "Metodologia",
		"Mock Pages": "Páginas de teste",
		"i18n Benchmark": "i18n Benchmark",
		"An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.": "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo.",
		Resources: "Recursos",
		GitHub: "GitHub",
		Contributing: "Contribuir",
		"i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.": "i18n Benchmark — Projeto de código aberto. Construído com React, Vite e TanStack Router.",
		"⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.": "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada com qualquer negócio ou serviço real.",
		"A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.": "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.",
		"View Results": "Ver Resultados",
		"Understanding the Impact": "Entendendo o impacto",
		"Why a single large JSON can hurt performance": "Por que um único JSON grande pode prejudicar o desempenho",
		"Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:": "Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido através do contexto de React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isto significa:",
		"The JSON must be parsed on every page load — blocking the main thread.": "O JSON deve ser analisado em cada carga de página — bloqueando a thread principal.",
		"Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.": "As arquiteturas baseadas no contexto podem causar renderizações em cascata quando a localidade muda, porque cada consumidor é notificado mesmo que as suas chaves específicas não tenham mudado.",
		"During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.": "Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil de HTML, aumentando o tamanho do documento que deve ser descarregado e hidratado.",
		"The trade-offs of dynamic loading": "As compensações do carregamento dinâmico",
		"Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:": "Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas introduz novos desafios:",
		"Waterfall requests:": "Pedidos em cascata:",
		"the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.": "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.",
		"Flash of untranslated content (FOUC):": "Flash de conteúdo não traduzido (FOUC):",
		"users may briefly see translation keys or a fallback language before the chunk arrives.": "users may briefly see translation keys or a fallback language before the chunk arrives.",
		"Cache invalidation:": "Invalidação da cache:",
		"updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.": "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.",
		"What this benchmark measures": "O que este benchmark mede",
		"This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.": "Esta aplicação de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu pacote de JavaScript, o tempo gasto a analisar e renderizar conteúdo traduzido e a eficácia das suas estratégias de divisão de código e de carregamento preguiçoso. Cada biblioteca é integrada na mesma aplicação para que os resultados sejam diretamente comparáveis.",
		"Why These Metrics Matter": "Por que essas métricas são importantes",
		"Bundle Size": "Tamanho do bundle",
		"The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.": "O bundle representa os dados enviados a cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas comuns em muitas regiões. As bibliotecas i18n variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código de tempo de execução, além dos próprios arquivos de tradução mesmos.",
		"Rendering & Hydration": "Renderização e Hidratação",
		"Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).": "Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode desencadear novas renderizações em toda a árvore. Durante a hidratação do SSR, a análise e a anexação de objetos de tradução massivos adicionam latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).",
		"Dynamic Loading": "Carregamento Dinâmico",
		"Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.": "Carregar todas as traduções antecipadamente sobrecarrega a carga útil inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento preguiçoso introduz suas próprias compensações: solicitações em cascada, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.",
		"Sample Results": "Resultados de amostra",
		Yes: "Yes",
		Manual: "Manual",
		"Built-in": "Built-in",
		Library: "Library",
		"Lookup Time": "Tempo de consulta",
		"Lazy Loading": "Carregamento lento",
		"About This Benchmark": "About This Benchmark",
		"This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.": "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.",
		"What We Measure": "O que medimos",
		"Bundle size impact": "Impacto no tamanho do bundle",
		"The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.": "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
		"Rendering overhead": "Sobrecarga de renderização",
		"How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.": "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
		"Hydration cost": "Custo de hidratação",
		"During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.": "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
		"Lazy loading effectiveness": "Eficácia do carregamento lento",
		"Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).": "Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais compensações ela introduz (solicitações em cascada, FOUC, complexidade de cache).",
		"Locale switch speed": "Velocidade de troca de idioma",
		"How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.": "Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a re-renderização de componentes e a atualização do DOM.",
		"Why This Exists": "Why This Exists",
		"Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.": "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
		"The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.": "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.",
		"Tools and services to streamline your internationalization workflow.": "Tools and services to streamline your internationalization workflow.",
		"Benchmark CLI": "Benchmark CLI",
		"Run benchmarks locally from your terminal. Supports custom configurations and CI integration.": "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
		Free: "Grátis",
		"Benchmark Cloud": "Benchmark Cloud",
		"Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.": "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
		"Benchmark Enterprise": "Benchmark Enterprise",
		"On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.": "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
		"Contact Us": "Contate-nos",
		"Migration Assistant": "Assistente de Migração",
		"AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.": "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
		"$99 one-time": "$99 one-time",
		"Translation QA": "Translation QA",
		"Automated quality checks for missing translations, pluralization issues, and context errors.": "Automated quality checks for missing translations, pluralization issues, and context errors.",
		"Bundle Optimizer": "Bundle Optimizer",
		"Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.": "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
		"Learn More": "Saiba Mais",
		"Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.": "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.",
		"Senior Frontend Engineer": "Senior Frontend Engineer",
		Remote: "Remoto",
		"Full-time": "Full-time",
		Engineering: "Engineering",
		"Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
		"Backend Engineer": "Backend Engineer",
		"Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.": "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
		"Technical Writer": "Redator Técnico",
		"Part-time": "Part-time",
		Documentation: "Documentation",
		"Create comprehensive guides, API references, and tutorials for our benchmarking platform.": "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
		"DevRel Engineer": "DevRel Engineer",
		"San Francisco / Remote": "San Francisco / Remote",
		Community: "Community",
		"Engage with the i18n community through talks, workshops, blog posts, and open source contributions.": "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
		"QA Engineer": "QA Engineer",
		"Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.": "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.",
		"Apply Now": "Candidatar-se agora",
		"Remote-first": "Remote-first",
		"Work from anywhere in the world": "Work from anywhere in the world",
		"Competitive pay": "Competitive pay",
		"Top-of-market compensation": "Top-of-market compensation",
		"Open source time": "Open source time",
		"20% time for OSS contributions": "20% time for OSS contributions"
	},
	ru: {
		Products: "Продукты",
		Pricing: "Цены",
		Team: "Команда",
		Blog: "Блог",
		Careers: "Карьера",
		FAQ: "FAQ",
		Contact: "Контакт",
		Settings: "Настройки",
		Home: "Главная",
		Methodology: "Методология",
		"Mock Pages": "Тестовые страницы",
		"i18n Benchmark": "i18n Benchmark",
		"An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.": "Открытое приложение для тестирования реального влияния библиотек интернационализации на размер бандла, время загрузки и отзывчивость приложения.",
		Resources: "Ресурсы",
		GitHub: "GitHub",
		Contributing: "Вклад",
		"i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.": "i18n Benchmark — Открытый проект. Построен на React, Vite и TanStack Router.",
		"⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.": "⚠️ Эта страница содержит фиктивные данные только для целей тестирования производительности. Она не связана с каким-либо реальным бизнесом или услугой.",
		"A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.": "Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.",
		"View Results": "Посмотреть результаты",
		"Understanding the Impact": "Понимание влияния",
		"Why a single large JSON can hurt performance": "Почему один большой JSON может снизить производительность",
		"Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:": "Многие библиотеки i18n хранят переводы в одном объекте JSON, предоставляемом через контекст React. Когда этот объект большой (тысячи ключей), каждый компонент, использующий переводы, хранит ссылку на весь словарь. Это означает:",
		"The JSON must be parsed on every page load — blocking the main thread.": "JSON должен парситься при каждой загрузке страницы — блокируя основной поток.",
		"Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.": "Архитектуры на основе контекста могут вызывать каскадные повторные рендеринги при изменении локали, потому что каждый потребитель уведомляется, даже если его конкретные ключи не изменились.",
		"During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.": "Во время серверного рендеринга весь словарь сериализуется в HTML-пейлоад, увеличивая размер документа, который необходимо загрузить и гидратировать.",
		"The trade-offs of dynamic loading": "Компромиссы динамической загрузки",
		"Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:": "Разделение переводов на чанки для каждого маршрута или пространства имен может значительно уменьшить начальный пейлоад. Но это создает новые проблемы:",
		"Waterfall requests:": "Каскадные запросы (Waterfall requests):",
		"the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.": "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.",
		"Flash of untranslated content (FOUC):": "Мерцание непереведенного контента (FOUC):",
		"users may briefly see translation keys or a fallback language before the chunk arrives.": "users may briefly see translation keys or a fallback language before the chunk arrives.",
		"Cache invalidation:": "Инвалидация кэша:",
		"updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.": "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.",
		"What this benchmark measures": "Что измеряет этот бенчмарк",
		"This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.": "Это тестовое приложение предоставляет контролируемую среду — 10 страниц с реалистичным контентом — для сравнения библиотек i18n по трем осям: вес, который они добавляют вашему JavaScript-бандлу, время, затраченное на парсинг и рендеринг переведенного контента, и эффективность их стратегий разделения кода и ленивой загрузки. Каждая библиотека интегрирована в одно и то же приложение, поэтому результаты напрямую сопоставимы.",
		"Why These Metrics Matter": "Почему эти показатели важны",
		"Bundle Size": "Размер бандла",
		"The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.": "Бандл — это данные, которые отправляются каждому пользователю по всему миру. Большой размер бандла означает более долгое время загрузки, особенно при медленном 3G-соединении, характерном для многих регионов. Библиотеки i18n сильно различаются по весу: от нескольких килобайт до десятков килобайт рантайм-кода, плюс сами файлы переводов.",
		"Rendering & Hydration": "Рендеринг и гидратация",
		"Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).": "Подключение большого JSON-словаря к каждому компоненту создает скрытую зависимость: любое изменение в контексте перевода может вызвать повторный рендеринг всего дерева. Во время гидратации SSR парсинг и присоединение массивных объектов перевода добавляют задержку до того, как страница станет интерактивной, что напрямую влияет на Time to Interactive (TTI).",
		"Dynamic Loading": "Динамическая загрузка",
		"Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.": "Загрузка всех переводов сразу перегружает начальную полезную нагрузку. Динамическая (ленивая) загрузка разделяет переводы по маршрутам или пространствам имен, отправляя только то, что нужно для текущей страницы. Однако ленивая загрузка вносит свои компромиссы: каскадные запросы (waterfall), мерцание непереведенного контента и сложность кэширования. Измерение обеих стратегий необходимо.",
		"Sample Results": "Примеры результатов",
		Yes: "Yes",
		Manual: "Manual",
		"Built-in": "Built-in",
		Library: "Library",
		"Lookup Time": "Время поиска",
		"Lazy Loading": "Ленивая загрузка",
		"About This Benchmark": "About This Benchmark",
		"This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.": "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.",
		"What We Measure": "Что мы измеряем",
		"Bundle size impact": "Влияние на размер бандла",
		"The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.": "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
		"Rendering overhead": "Затраты на рендеринг",
		"How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.": "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
		"Hydration cost": "Стоимость гидратации",
		"During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.": "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
		"Lazy loading effectiveness": "Эффективность ленивой загрузки",
		"Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).": "Действительно ли разделение переводов по маршрутам или пространствам имен снижает начальную нагрузку, и какие компромиссы оно вносит (каскадные запросы, FOUC, сложность кэширования).",
		"Locale switch speed": "Скорость переключения языка",
		"How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.": "Как быстро приложение может переключаться с одного языка на другой во время выполнения — включая получение новых переводов, повторный рендеринг компонентов и обновление DOM.",
		"Why This Exists": "Why This Exists",
		"Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.": "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
		"The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.": "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.",
		"Tools and services to streamline your internationalization workflow.": "Tools and services to streamline your internationalization workflow.",
		"Benchmark CLI": "Benchmark CLI",
		"Run benchmarks locally from your terminal. Supports custom configurations and CI integration.": "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
		Free: "Бесплатно",
		"Benchmark Cloud": "Benchmark Cloud",
		"Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.": "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
		"Benchmark Enterprise": "Benchmark Enterprise",
		"On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.": "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
		"Contact Us": "Связаться с нами",
		"Migration Assistant": "Помощник по миграции",
		"AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.": "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
		"$99 one-time": "$99 one-time",
		"Translation QA": "Translation QA",
		"Automated quality checks for missing translations, pluralization issues, and context errors.": "Automated quality checks for missing translations, pluralization issues, and context errors.",
		"Bundle Optimizer": "Bundle Optimizer",
		"Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.": "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
		"Learn More": "Узнать больше",
		"Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.": "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.",
		"Senior Frontend Engineer": "Senior Frontend Engineer",
		Remote: "Удаленно",
		"Full-time": "Full-time",
		Engineering: "Engineering",
		"Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
		"Backend Engineer": "Backend Engineer",
		"Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.": "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
		"Technical Writer": "Технический писатель",
		"Part-time": "Part-time",
		Documentation: "Documentation",
		"Create comprehensive guides, API references, and tutorials for our benchmarking platform.": "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
		"DevRel Engineer": "DevRel Engineer",
		"San Francisco / Remote": "San Francisco / Remote",
		Community: "Community",
		"Engage with the i18n community through talks, workshops, blog posts, and open source contributions.": "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
		"QA Engineer": "QA Engineer",
		"Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.": "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.",
		"Apply Now": "Подать заявку",
		"Remote-first": "Remote-first",
		"Work from anywhere in the world": "Work from anywhere in the world",
		"Competitive pay": "Competitive pay",
		"Top-of-market compensation": "Top-of-market compensation",
		"Open source time": "Open source time",
		"20% time for OSS contributions": "20% time for OSS contributions"
	},
	zh: {
		Products: "产品",
		Pricing: "价格",
		Team: "团队",
		Blog: "博客",
		Careers: "职业",
		FAQ: "常见问题",
		Contact: "联系",
		Settings: "设置",
		Home: "首页",
		Methodology: "方法学",
		"Mock Pages": "模拟页面",
		"i18n Benchmark": "i18n Benchmark",
		"An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.": "一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。",
		Resources: "资源",
		GitHub: "GitHub",
		Contributing: "贡献",
		"i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.": "i18n Benchmark — 开源项目。使用 React, Vite 和 TanStack Router 构建。",
		"⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.": "⚠️ 此页面仅包含用于基准测试的模拟数据。它与任何真实的业务或服务无关。",
		"A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.": "一个测试应用程序，旨在衡量国际化库对包大小、加载性能和渲染反应性的实际影响。",
		"View Results": "查看结果",
		"Understanding the Impact": "理解影响",
		"Why a single large JSON can hurt performance": "为什么单个大型 JSON 会损害性能",
		"Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:": "许多 i18n 库将翻译存储在通过 React 上下文提供的单个 JSON 对象中。当这个对象很大（数千个键）时，每个使用翻译的组件都会持有对整个字典的引用。这意味着：",
		"The JSON must be parsed on every page load — blocking the main thread.": "JSON 必须在每次页面加载时进行解析 —— 这会阻塞主线程。",
		"Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.": "当本地化发生变化时，基于上下文的架构可能会导致级联重新渲染，因为即使某些组件的特定键没有变化，每个消费者也会收到通知。",
		"During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.": "在服务器端渲染期间，整个字典会被序列化到 HTML 负载中，从而增加了必须下载和注水的文件大小。",
		"The trade-offs of dynamic loading": "动态加载的权衡",
		"Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:": "将翻译拆分为按路由或按命名空间的块可以显著减少初始负载。但它引入了新的挑战：",
		"Waterfall requests:": "瀑布请求：",
		"the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.": "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.",
		"Flash of untranslated content (FOUC):": "未翻译内容闪烁 (FOUC)：",
		"users may briefly see translation keys or a fallback language before the chunk arrives.": "users may briefly see translation keys or a fallback language before the chunk arrives.",
		"Cache invalidation:": "缓存失效：",
		"updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.": "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.",
		"What this benchmark measures": "此基准测试测量什么",
		"This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.": "此测试应用提供了一个受控环境 —— 10 个具有现实内容的页面 —— 以在三个维度上比较 i18n 库：它们为 JavaScript 包增加的重量、解析和渲染翻译内容所花费的时间，以及它们的代码拆分和懒加载策略的有效性。每个库都集成到同一个应用中，因此结果具有直接可比性。",
		"Why These Metrics Matter": "为什么这些指标很重要",
		"Bundle Size": "包大小",
		"The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.": "Bundle 是运送给全球每一位用户的数据。更大的 Bundle 意味着更长的下载时间——尤其是在许多地区常见的缓慢 3G 连接上。i18n 库的重量差异巨大：从几 KB 到数十 KB 的运行时代码，再加上翻译文件本身。",
		"Rendering & Hydration": "渲染与注水",
		"Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).": "将大型 JSON 字典连接到每个组件会创建一个隐藏的依赖关系：翻译上下文中的任何更改都可能触发整个树的重新渲染。在 SSR 注水期间，解析和附加庞大的翻译对象会在页面变得可交互之前增加延迟——直接影响可交互时间 (TTI)。",
		"Dynamic Loading": "动态加载",
		"Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.": "预先加载所有翻译会使初始有效载荷过载。动态（懒）加载按路由或命名空间拆分翻译，仅发送当前页面所需的内容。然而，懒加载也会带来自身的权衡：瀑布请求、未翻译内容的闪烁以及缓存复杂性。衡量这两种策略至关重要。",
		"Sample Results": "样本结果",
		Yes: "Yes",
		Manual: "Manual",
		"Built-in": "Built-in",
		Library: "Library",
		"Lookup Time": "查询时间",
		"Lazy Loading": "延迟加载",
		"About This Benchmark": "About This Benchmark",
		"This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.": "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.",
		"What We Measure": "我们测量什么",
		"Bundle size impact": "包大小影响",
		"The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.": "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
		"Rendering overhead": "渲染开销",
		"How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.": "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
		"Hydration cost": "注水成本",
		"During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.": "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
		"Lazy loading effectiveness": "延迟加载有效性",
		"Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).": "按路线或命名空间拆分翻译是否真的能减少初始负载，以及它引入了哪些权衡（瀑布请求、FOUC、缓存复杂性）。",
		"Locale switch speed": "本地语言切换速度",
		"How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.": "应用程序在运行时从一种语言切换到另一种语言的速度——包括获取新翻译、重新渲染组件和更新 DOM。",
		"Why This Exists": "Why This Exists",
		"Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.": "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
		"The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.": "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.",
		"Tools and services to streamline your internationalization workflow.": "Tools and services to streamline your internationalization workflow.",
		"Benchmark CLI": "Benchmark CLI",
		"Run benchmarks locally from your terminal. Supports custom configurations and CI integration.": "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
		Free: "免费",
		"Benchmark Cloud": "Benchmark Cloud",
		"Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.": "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
		"Benchmark Enterprise": "Benchmark Enterprise",
		"On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.": "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
		"Contact Us": "联系我们",
		"Migration Assistant": "迁移助手",
		"AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.": "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
		"$99 one-time": "$99 one-time",
		"Translation QA": "Translation QA",
		"Automated quality checks for missing translations, pluralization issues, and context errors.": "Automated quality checks for missing translations, pluralization issues, and context errors.",
		"Bundle Optimizer": "Bundle Optimizer",
		"Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.": "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
		"Learn More": "了解更多",
		"Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.": "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.",
		"Senior Frontend Engineer": "Senior Frontend Engineer",
		Remote: "远程",
		"Full-time": "Full-time",
		Engineering: "Engineering",
		"Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
		"Backend Engineer": "Backend Engineer",
		"Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.": "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
		"Technical Writer": "技术文档工程师",
		"Part-time": "Part-time",
		Documentation: "Documentation",
		"Create comprehensive guides, API references, and tutorials for our benchmarking platform.": "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
		"DevRel Engineer": "DevRel Engineer",
		"San Francisco / Remote": "San Francisco / Remote",
		Community: "Community",
		"Engage with the i18n community through talks, workshops, blog posts, and open source contributions.": "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
		"QA Engineer": "QA Engineer",
		"Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.": "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.",
		"Apply Now": "立即申请",
		"Remote-first": "Remote-first",
		"Work from anywhere in the world": "Work from anywhere in the world",
		"Competitive pay": "Competitive pay",
		"Top-of-market compensation": "Top-of-market compensation",
		"Open source time": "Open source time",
		"20% time for OSS contributions": "20% time for OSS contributions"
	}
};
function loadTranslations(locale) {
	return translationsMap[locale] || translationsMap["en"];
}
initializeGT({
	...gt_config_default,
	loadTranslations
});
function Wrapper({ children }) {
	return jsx(BrowserGTProvider, {
		locale: "en",
		children
	});
}
function Wrapped() {
	return jsx(Wrapper, { children: jsx(ThemeToggle, {}) });
}
export { Wrapped as default };
