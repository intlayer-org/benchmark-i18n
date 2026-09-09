import * as t from "react";
import a, { Children, Fragment, Suspense, cloneElement, createContext, createElement, isValidElement, useCallback, useContext, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { Fragment as Fragment$1, jsx } from "react/jsx-runtime";
import { jsxDEV } from "react/jsx-dev-runtime";
import { createIsomorphicFn } from "@tanstack/react-start";
import { getCookie, getRequestHeader } from "@tanstack/react-start/server";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esmMin = (fn, res, err) => () => {
	if (err) throw err[0];
	try {
		return fn && (res = fn(fn = 0)), res;
	} catch (e) {
		throw err = [e], e;
	}
};
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toCommonJS = (mod) => __hasOwnProp.call(mod, "module.exports") ? mod["module.exports"] : __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var ApiError$1 = class extends Error {
	constructor(error, code, message) {
		super(error);
		this.name = "ApiError";
		this.code = code;
		this.message = message;
	}
};
var defaultTimeout$1 = 6e4;
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
		throw new ApiError$1(details, result.response.status, details);
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
var MAX_RETRIES$1 = 3;
var INITIAL_DELAY_MS$1 = 500;
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
var sleep$1 = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
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
	return INITIAL_DELAY_MS$1 * (retryPolicy === "linear" ? attempt + 1 : 2 ** attempt);
}
function createRetryingFetch({ fetch: fetchImplementation = globalThis.fetch, retryPolicy = "exponential" } = {}) {
	return async (input, init) => {
		const request = new Request(input, init);
		const maxRetries = retryPolicy === "none" ? 0 : MAX_RETRIES$1;
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
			await sleep$1(retryDelay(response, attempt, retryPolicy));
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
var mergeConfigs$1 = (a, b) => {
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
	let _config = mergeConfigs$1(createConfig(), config);
	const getConfig = () => ({ ..._config });
	const setConfig = (config) => {
		_config = mergeConfigs$1(_config, config);
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
var TYPE$2 = {
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
var SKELETON_TYPE$1 = {
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
			Object.assign(result, parseSignificantPrecision$1(token.stem));
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
	else if (token.options[0]) Object.assign(result, parseSignificantPrecision$1(token.options[0]));
	return true;
}
function parseSignificantPrecision$1(precision) {
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
				elements.push(this.withLocation({ type: TYPE$2.pound }, start, this.index));
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
			type: TYPE$2.literal,
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
			type: TYPE$2.literal,
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
			type: TYPE$2.tag,
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
			type: TYPE$2.argument,
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
					type: SKELETON_TYPE$1.number,
					tokens,
					...styleLocation ? { location: styleLocation } : {},
					parsedOptions: this.options.shouldParseSkeletons ? parseNumberSkeletonOptions(tokens) : {}
				};
			} else {
				if (!skeleton) this.failAt("EXPECT_DATE_TIME_SKELETON", start, this.index);
				const pattern = resolveLocaleHourSkeleton(skeleton, this.options.locale);
				style = {
					type: SKELETON_TYPE$1.dateTime,
					pattern,
					...styleLocation ? { location: styleLocation } : {},
					parsedOptions: this.options.shouldParseSkeletons ? parseDateTimeSkeletonOptions(pattern) : {}
				};
			}
		} else style = rawStyle;
		const type = argumentType === "number" ? TYPE$2.number : argumentType === "date" ? TYPE$2.date : TYPE$2.time;
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
			type: TYPE$2.select,
			value,
			options
		}, start, this.index);
		return this.withLocation({
			type: TYPE$2.plural,
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
function parse$1(message, options = {}) {
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
function formatMessage(message, locales = "en", variables = {}) {
	const parts = formatElements(parse$1(message, { locale: resolveLocale(locales) }), {
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
		case TYPE$2.literal:
			append(element.value);
			break;
		case TYPE$2.pound:
			if (currentPluralValue !== void 0) append(getNumberFormat(context).format(currentPluralValue));
			break;
		case TYPE$2.argument: {
			const value = requireVariable(context.variables, element.value);
			append(typeof value === "string" || typeof value === "number" ? String(value) : value || "");
			break;
		}
		case TYPE$2.number: {
			const value = requireVariable(context.variables, element.value);
			const { scale, ...intlOptions } = typeof element.style === "string" ? NUMBER_STYLES[element.style] ?? {} : element.style?.type === SKELETON_TYPE$1.number ? element.style.parsedOptions : {};
			const scaledValue = applyScale(value, scale);
			append(getNumberFormat(context, intlOptions).format(scaledValue));
			break;
		}
		case TYPE$2.date:
		case TYPE$2.time: {
			const value = requireVariable(context.variables, element.value);
			const namedStyles = element.type === TYPE$2.date ? DATE_STYLES : TIME_STYLES;
			append(getDateTimeFormat(context, typeof element.style === "string" ? namedStyles[element.style] : element.style?.type === SKELETON_TYPE$1.dateTime ? element.style.parsedOptions : element.type === TYPE$2.time ? TIME_STYLES.medium : void 0).format(value));
			break;
		}
		case TYPE$2.select: {
			const value = String(requireVariable(context.variables, element.value));
			const option = ownOption(element.options, value) ?? element.options.other;
			if (!option) throw invalidSelection(element.value, value, element.options);
			formatElements(option.value, context).forEach(append);
			break;
		}
		case TYPE$2.plural: {
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
		case TYPE$2.tag: {
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
function traverseIcu$1({ icuString, shouldVisit, visitor, options: { recurseIntoVisited = true, ...otherOptions } }) {
	const ast = parse$1(icuString, otherOptions);
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
			if (child.type === TYPE$2.select || child.type === TYPE$2.plural) Object.values(child.options).map((option) => option.value).map(handleChildren);
			else if (child.type === TYPE$2.tag) handleChildren(child.children);
		}
	}
}
var VAR_IDENTIFIER$1 = "_gt_";
new RegExp(`^${VAR_IDENTIFIER$1}\\d+$`);
var GT_UNINDEXED_IDENTIFIER_REGEX$1 = new RegExp(`^${VAR_IDENTIFIER$1}$`);
function isGTUnindexedSelectElement$1(child) {
	return child.type === TYPE$2.select && GT_UNINDEXED_IDENTIFIER_REGEX$1.test(child.value) && !!child.options.other && (child.options.other.value.length === 0 || child.options.other.value.length > 0 && child.options.other.value[0]?.type === TYPE$2.literal);
}
function isVariable$1(obj) {
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
var createInvalidCutoffStyleError$1 = (style) => `generaltranslation Formatting Error: Invalid cutoff style: ${style}.`;
var DEFAULT_TERMINATOR_KEY$1 = "DEFAULT_TERMINATOR_KEY";
var TERMINATOR_MAP$1 = {
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
		[DEFAULT_TERMINATOR_KEY$1]: {
			terminator: "…",
			separator: void 0
		}
	},
	none: { [DEFAULT_TERMINATOR_KEY$1]: {
		terminator: void 0,
		separator: void 0
	} }
};
var CutoffFormatConstructor$1 = class CutoffFormatConstructor {
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
		if (!TERMINATOR_MAP$1[style]) throw new Error(createInvalidCutoffStyleError$1(style));
		const presetTerminatorOptions = options.maxChars === void 0 ? void 0 : TERMINATOR_MAP$1[style][new Intl.Locale(this.locale).language] || TERMINATOR_MAP$1[style]["DEFAULT_TERMINATOR_KEY"];
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
var CustomIntl$1 = {
	Collator: Intl.Collator,
	DateTimeFormat: Intl.DateTimeFormat,
	DisplayNames: Intl.DisplayNames,
	ListFormat: Intl.ListFormat,
	Locale: Intl.Locale,
	NumberFormat: Intl.NumberFormat,
	PluralRules: Intl.PluralRules,
	RelativeTimeFormat: Intl.RelativeTimeFormat,
	Segmenter: Intl.Segmenter,
	CutoffFormat: CutoffFormatConstructor$1
};
var IntlCache$1 = class {
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
			intlObject = new CustomIntl$1[constructor](...args);
			cache[key] = intlObject;
		}
		return intlObject;
	}
};
var intlCache$1 = new IntlCache$1();
function getCachedPluralRules(locales) {
	return intlCache$1.get("PluralRules", locales);
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
function indexVars$1(icuString) {
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
	traverseIcu$1({
		icuString,
		shouldVisit: isGTUnindexedSelectElement$1,
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
		result.push(icuString.slice(start, start + VAR_IDENTIFIER$1.length + 1));
		result.push(String(i + 1));
		result.push(icuString.slice(start + VAR_IDENTIFIER$1.length + 1, otherStart));
		result.push("{}");
		result.push(icuString.slice(otherEnd, end));
		current = end;
	}
	result.push(icuString.slice(current, icuString.length));
	return result.join("");
}
new RegExp(`${VAR_IDENTIFIER$1}\\d+`);
var HTML_CONTENT_PROPS = {
	pl: "placeholder",
	ti: "title",
	alt: "alt",
	arl: "aria-label",
	arb: "aria-labelledby",
	ard: "aria-describedby"
};
function _formatMessageICU$1(message, locales = "en", variables = {}) {
	return formatMessage(message, locales, variables)?.toString() ?? "";
}
function _formatNum$1({ value, locales = ["en"], options = {} }) {
	return intlCache$1.get("NumberFormat", locales, {
		numberingSystem: "latn",
		...options
	}).format(value);
}
function _formatDateTime$1({ value, locales = ["en"], options = {} }) {
	return intlCache$1.get("DateTimeFormat", locales, {
		calendar: "gregory",
		numberingSystem: "latn",
		...options
	}).format(value);
}
function _formatCurrency$1({ value, locales = ["en"], currency = "USD", options = {} }) {
	return intlCache$1.get("NumberFormat", locales, {
		style: "currency",
		currency,
		numberingSystem: "latn",
		...options
	}).format(value);
}
function _formatList$1({ value, locales = ["en"], options = {} }) {
	return intlCache$1.get("ListFormat", locales, {
		type: "conjunction",
		style: "long",
		...options
	}).format(value.map(String));
}
function _formatListToParts$1({ value, locales = ["en"], options = {} }) {
	const formatListParts = intlCache$1.get("ListFormat", locales, {
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
function _selectRelativeTimeUnit$1(date, baseDate) {
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
function _formatRelativeTime$1({ value, unit, locales = ["en"], options = {} }) {
	return intlCache$1.get("RelativeTimeFormat", locales, {
		style: "long",
		numeric: "auto",
		...options
	}).format(value, unit);
}
function _getLocaleLanguage(locale) {
	try {
		return intlCache$1.get("Locale", locale).language;
	} catch {
		return;
	}
}
function _isSameLanguage$1(...locales) {
	try {
		const languages = locales.flat().map((locale) => intlCache$1.get("Locale", locale).language);
		return languages.every((language) => language === languages[0]);
	} catch (error) {
		console.error(error);
		return false;
	}
}
function isCustomLocaleObject(value) {
	return typeof value === "object" && value !== null;
}
var getCustomProperty$1 = (customMapping, locale, property) => {
	const value = customMapping?.[locale];
	if (!value) return void 0;
	if (typeof value === "string") return property === "name" ? value : void 0;
	return value[property];
};
var getCustomLocaleCode = (customMapping, locale) => {
	const value = customMapping?.[locale];
	return isCustomLocaleObject(value) && typeof value.code === "string" ? value.code : void 0;
};
var scriptExceptions$1 = /* @__PURE__ */ new Set([
	"Cham",
	"Jamo",
	"Kawi",
	"Lisu",
	"Toto",
	"Thai"
]);
var isCustomLanguage$1 = (language) => {
	return language >= "qaa" && language <= "qtz";
};
var _isValidLocale$1 = (locale, customMapping) => {
	locale = getCustomLocaleCode(customMapping, locale) || locale;
	try {
		const { language, region, script } = intlCache$1.get("Locale", locale);
		const partCount = 1 + Number(Boolean(region)) + Number(Boolean(script));
		if (locale.split("-").length !== partCount) return false;
		if (intlCache$1.get("DisplayNames", ["en"], { type: "language" }).of(language) === language && !isCustomLanguage$1(language)) return false;
		if (region) {
			if (intlCache$1.get("DisplayNames", ["en"], { type: "region" }).of(region) === region) return false;
		}
		if (script) {
			if (intlCache$1.get("DisplayNames", ["en"], { type: "script" }).of(script) === script && !scriptExceptions$1.has(script)) return false;
		}
		return true;
	} catch {
		return false;
	}
};
var _standardizeLocale$1 = (locale) => {
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
		if (!_isValidLocale$1(approvedLocale, customMapping)) {
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
		bucket.add(_standardizeLocale$1(approvedLocale));
	}
	return {
		allValid,
		languages,
		byLanguage
	};
}
function _isSameDialect$1(...locales) {
	try {
		const localeObjects = locales.flat().map((locale) => intlCache$1.get("Locale", _standardizeLocale$1(locale)));
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
	if (approvedScope && !approvedScope.allValid || !_isValidLocale$1(sourceLocale, customMapping) || !_isValidLocale$1(targetLocale, customMapping)) return false;
	if (_isSameDialect$1(sourceLocale, targetLocale)) return false;
	if (!approvedScope) return true;
	const targetLanguage = _getLocaleLanguage(targetLocale);
	return targetLanguage !== void 0 && approvedScope.languages.has(targetLanguage);
}
function _requiresTranslation$1(sourceLocale, targetLocale, approvedLocales, customMapping) {
	return _requiresTranslationWithScope(sourceLocale, targetLocale, approvedLocales ? _prepareApprovedLocales(approvedLocales, customMapping) : void 0, customMapping);
}
function getLocaleMatchCodes(locale) {
	try {
		const localeObject = intlCache$1.get("Locale", locale);
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
		const code = _isValidLocale$1(locale) ? _standardizeLocale$1(locale) : locale;
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
		if (!_isValidLocale$1(candidateLocale, customMapping)) continue;
		const locale = _standardizeLocale$1(candidateLocale);
		const language = _getLocaleLanguage(locale);
		if (language === void 0) continue;
		const candidates = approvedIndex.byLanguage.get(language);
		if (candidates === void 0) continue;
		const matchingCode = findMatchingCode(locale, candidates) || findMatchingCode(language, candidates);
		if (matchingCode) return matchingCode;
	}
}
function _determineLocale$1(locales, approvedLocales, customMapping) {
	return _determineLocaleWithIndex(locales, _prepareApprovedLocales(approvedLocales, customMapping), customMapping);
}
function _resolveCanonicalLocale$1(locale, customMapping) {
	const customLocaleCode = getCustomLocaleCode(customMapping, locale);
	return customLocaleCode && _isValidLocale$1(customLocaleCode) ? customLocaleCode : locale;
}
function _getLocaleEmoji$1(locale, customMapping) {
	const aliasedLocale = locale;
	locale = _resolveCanonicalLocale$1(locale, customMapping);
	try {
		const standardizedLocale = _standardizeLocale$1(locale);
		const localeObject = intlCache$1.get("Locale", standardizedLocale);
		const { language, region } = localeObject;
		if (customMapping) for (const l of [
			aliasedLocale,
			locale,
			standardizedLocale,
			language
		]) {
			const customEmoji = getCustomProperty$1(customMapping, l, "emoji");
			if (customEmoji) return customEmoji;
		}
		const regionEmoji = region && getSupportedRegionEmoji$1(region);
		if (regionEmoji) return regionEmoji;
		const extrapolated = localeObject.maximize();
		return exceptions$1[extrapolated.language] || getRegionEmoji$1(extrapolated.region || "");
	} catch {
		return defaultEmoji$1;
	}
}
var europeAfricaGlobe$1 = "🌍";
var asiaAustraliaGlobe$1 = "🌏";
var defaultEmoji$1 = europeAfricaGlobe$1;
var exceptions$1 = {
	ca: europeAfricaGlobe$1,
	eu: europeAfricaGlobe$1,
	ku: europeAfricaGlobe$1,
	bo: asiaAustraliaGlobe$1,
	ug: asiaAustraliaGlobe$1,
	gd: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
	cy: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
	gv: "🇮🇲",
	grc: "🏺"
};
var specialRegionEmojis$1 = {
	EU: "🇪🇺",
	"419": "🌎"
};
var flagRegions$1 = /* @__PURE__ */ new Set([
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
var regionalIndicatorOffset$1 = 127462 - "A".charCodeAt(0);
function getRegionEmoji$1(region) {
	return getSupportedRegionEmoji$1(region) || "🌍";
}
function getSupportedRegionEmoji$1(region) {
	const normalizedRegion = region.toUpperCase();
	const specialEmoji = specialRegionEmojis$1[normalizedRegion];
	if (specialEmoji) return specialEmoji;
	if (!flagRegions$1.has(normalizedRegion)) return void 0;
	return String.fromCodePoint(normalizedRegion.charCodeAt(0) + regionalIndicatorOffset$1, normalizedRegion.charCodeAt(1) + regionalIndicatorOffset$1);
}
function createCustomLocaleProperties$1(lArray, customMapping) {
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
function _getLocaleProperties$1(locale, defaultLocale = "en", customMapping) {
	const aliasedLocale = locale;
	locale = _resolveCanonicalLocale$1(locale, customMapping);
	defaultLocale ||= "en";
	try {
		const standardizedLocale = _standardizeLocale$1(locale);
		const localeObject = intlCache$1.get("Locale", locale);
		const languageCode = localeObject.language;
		const customLocaleProperties = createCustomLocaleProperties$1([
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
		const languageNames = intlCache$1.get("DisplayNames", defaultLanguageOrder, { type: "language" });
		const nativeLanguageNames = intlCache$1.get("DisplayNames", nativeLanguageOrder, { type: "language" });
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
		const regionNames = intlCache$1.get("DisplayNames", defaultLanguageOrder, { type: "region" });
		const nativeRegionNames = intlCache$1.get("DisplayNames", nativeLanguageOrder, { type: "region" });
		const regionName = customLocaleProperties?.regionName || (regionCode ? regionNames.of(regionCode) : "") || "";
		const nativeRegionName = customLocaleProperties?.nativeRegionName || (regionCode ? nativeRegionNames.of(regionCode) : "") || "";
		const scriptNames = intlCache$1.get("DisplayNames", defaultLanguageOrder, { type: "script" });
		const nativeScriptNames = intlCache$1.get("DisplayNames", nativeLanguageOrder, { type: "script" });
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
			emoji: customLocaleProperties?.emoji || _getLocaleEmoji$1(standardizedLocale, customMapping)
		};
	} catch {
		let code = _isValidLocale$1(locale) ? _standardizeLocale$1(locale) : locale;
		const codeParts = code.split("-");
		let languageCode = codeParts[0] || code;
		let regionCode = codeParts.length > 2 ? codeParts[2] : codeParts[1] || "";
		let scriptCode = codeParts[3] || "";
		const customLocaleProperties = createCustomLocaleProperties$1([code, languageCode], customMapping);
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
function _getLocaleName$1(locale, defaultLocale = "en", customMapping) {
	const aliasedLocale = locale;
	locale = _resolveCanonicalLocale$1(locale, customMapping);
	defaultLocale ||= "en";
	try {
		const standardizedLocale = _standardizeLocale$1(locale);
		if (customMapping) for (const l of [
			aliasedLocale,
			locale,
			standardizedLocale,
			intlCache$1.get("Locale", standardizedLocale).language
		]) {
			const customName = getCustomProperty$1(customMapping, l, "name");
			if (customName) return customName;
		}
		return intlCache$1.get("DisplayNames", [
			defaultLocale,
			standardizedLocale,
			"en"
		], { type: "language" }).of(standardizedLocale) || "";
	} catch {
		return "";
	}
}
function _getLocaleDirection$1(code) {
	try {
		const textInfoDirection = extractDirectionWithTextInfo$1(intlCache$1.get("Locale", code));
		if (textInfoDirection) return textInfoDirection;
	} catch {}
	const { scriptCode, languageCode } = _getLocaleProperties$1(code);
	if (scriptCode) return RTL_SCRIPTS$1.has(scriptCode.toLowerCase()) ? "rtl" : "ltr";
	if (languageCode) return RTL_LANGUAGES$1.has(languageCode.toLowerCase()) ? "rtl" : "ltr";
	return "ltr";
}
var RTL_SCRIPTS$1 = /* @__PURE__ */ new Set([
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
var RTL_LANGUAGES$1 = /* @__PURE__ */ new Set([
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
function extractDirectionWithTextInfo$1(locale) {
	const direction = "textInfo" in locale && typeof locale.textInfo === "object" && locale.textInfo !== null && "direction" in locale.textInfo ? locale.textInfo.direction : void 0;
	return direction === "rtl" || direction === "ltr" ? direction : void 0;
}
function _isSupersetLocale$1(superLocale, subLocale) {
	try {
		const { language: languageSuper, region: regionSuper, script: scriptSuper } = intlCache$1.get("Locale", _standardizeLocale$1(superLocale));
		const { language: languageSub, region: regionSub, script: scriptSub } = intlCache$1.get("Locale", _standardizeLocale$1(subLocale));
		if (languageSuper !== languageSub) return false;
		if (regionSuper && regionSuper !== regionSub) return false;
		if (scriptSuper && scriptSuper !== scriptSub) return false;
		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
}
function _resolveAliasLocale$1(locale, customMapping) {
	if (!customMapping) return locale;
	return Object.keys(customMapping).find((alias) => getCustomLocaleCode(customMapping, alias) === locale) ?? locale;
}
var LocaleConfig$1 = class {
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
		return _formatNum$1({
			value,
			locales: this.getFormattingLocales(targetLocale, locales),
			options: intlOptions
		});
	}
	formatDateTime(value, targetLocale, options = {}) {
		const { locales, ...intlOptions } = options;
		return _formatDateTime$1({
			value,
			locales: this.getFormattingLocales(targetLocale, locales),
			options: intlOptions
		});
	}
	formatCurrency(value, currency, targetLocale, options = {}) {
		const { locales, ...intlOptions } = options;
		return _formatCurrency$1({
			value,
			currency,
			locales: this.getFormattingLocales(targetLocale, locales),
			options: intlOptions
		});
	}
	formatRelativeTime(value, unit, targetLocale, options = {}) {
		const { locales, ...intlOptions } = options;
		return _formatRelativeTime$1({
			value,
			unit,
			locales: this.getFormattingLocales(targetLocale, locales),
			options: intlOptions
		});
	}
	formatRelativeTimeFromDate(date, targetLocale, options = {}) {
		const { locales, baseDate, ...intlOptions } = options;
		const { value, unit } = _selectRelativeTimeUnit$1(date, baseDate ?? /* @__PURE__ */ new Date());
		return _formatRelativeTime$1({
			value,
			unit,
			locales: this.getFormattingLocales(targetLocale, locales),
			options: intlOptions
		});
	}
	formatCutoff(value, targetLocale, options = {}) {
		const { locales, ...formatOptions } = options;
		return intlCache$1.get("CutoffFormat", this.getFormattingLocales(targetLocale, locales), formatOptions).format(value);
	}
	formatMessage(message, targetLocale, options = {}) {
		const { locales, variables, dataFormat } = options;
		if (dataFormat === "STRING") return message;
		return _formatMessageICU$1(message, this.getFormattingLocales(targetLocale, locales), variables);
	}
	formatList(array, targetLocale, options = {}) {
		const { locales, ...intlOptions } = options;
		return _formatList$1({
			value: array,
			locales: this.getFormattingLocales(targetLocale, locales),
			options: intlOptions
		});
	}
	formatListToParts(array, targetLocale, options = {}) {
		const { locales, ...intlOptions } = options;
		return _formatListToParts$1({
			value: array,
			locales: this.getFormattingLocales(targetLocale, locales),
			options: intlOptions
		});
	}
	getLocaleName(locale) {
		return _getLocaleName$1(locale, this.defaultLocale, this.customMapping);
	}
	getLocaleEmoji(locale) {
		return _getLocaleEmoji$1(locale, this.customMapping);
	}
	getLocaleProperties(locale) {
		return _getLocaleProperties$1(locale, this.defaultLocale, this.customMapping);
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
		return _getLocaleDirection$1(this.resolveCanonicalLocale(locale));
	}
	isValidLocale(locale) {
		return _isValidLocale$1(locale, this.customMapping);
	}
	resolveCanonicalLocale(locale) {
		return _resolveCanonicalLocale$1(locale, this.customMapping);
	}
	resolveAliasLocale(locale) {
		return _resolveAliasLocale$1(locale, this.customMapping);
	}
	standardizeLocale(locale) {
		return _standardizeLocale$1(locale);
	}
	isSameDialect(...locales) {
		return _isSameDialect$1(...locales.map((locale) => Array.isArray(locale) ? locale.map((code) => this.resolveCanonicalLocale(code)) : this.resolveCanonicalLocale(locale)));
	}
	isSameLanguage(...locales) {
		return _isSameLanguage$1(...locales.map((locale) => Array.isArray(locale) ? locale.map((code) => this.resolveCanonicalLocale(code)) : this.resolveCanonicalLocale(locale)));
	}
	isSupersetLocale(superLocale, subLocale) {
		return _isSupersetLocale$1(this.resolveCanonicalLocale(superLocale), this.resolveCanonicalLocale(subLocale));
	}
};
function getRegionProperties(region, defaultLocale = "en", customMapping) {
	defaultLocale ||= "en";
	let name = region;
	let emoji = defaultEmoji$1;
	try {
		name = intlCache$1.get("DisplayNames", [defaultLocale, "en"], { type: "region" }).of(region) || region;
		emoji = getRegionEmoji$1(region);
	} catch {}
	return {
		code: region,
		name,
		emoji,
		...customMapping?.[region]
	};
}
function isValidLocale$1(locale, customMapping) {
	return _isValidLocale$1(locale, customMapping);
}
function resolveCanonicalLocale$1(locale, customMapping) {
	return _resolveCanonicalLocale$1(locale, customMapping);
}
function standardizeLocale$1(locale) {
	return _standardizeLocale$1(locale);
}
function requiresTranslation$1(sourceLocale, targetLocale, approvedLocales, customMapping) {
	return _requiresTranslation$1(sourceLocale, targetLocale, approvedLocales, customMapping);
}
function determineLocale$1(locales, approvedLocales = [], customMapping = void 0) {
	return _determineLocale$1(locales, approvedLocales, customMapping);
}
function resolveAliasLocale$1(locale, customMapping) {
	return _resolveAliasLocale$1(locale, customMapping);
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
function _stringify$1(node) {
	if (node === void 0) return void 0;
	if (node === null) return "null";
	if (typeof node === "number") return isFinite(node) ? "" + node : "null";
	if (typeof node !== "object") return JSON.stringify(node);
	if (Array.isArray(node)) {
		let out = "[";
		for (let i = 0; i < node.length; i++) {
			if (i) out += ",";
			out += _stringify$1(node[i]) || "null";
		}
		return out + "]";
	}
	const keys = Object.keys(node).sort();
	let out = "";
	for (const key of keys) {
		const value = _stringify$1(node[key]);
		if (!value) continue;
		if (out) out += ",";
		out += JSON.stringify(key) + ":" + value;
	}
	return "{" + out + "}";
}
function stableStringify$1(data) {
	return _stringify$1(data) ?? "";
}
function hashString$1(string) {
	return bytesToHex(sha256(utf8ToBytes(string))).slice(0, 16);
}
function hashSource$1({ source, context, id, maxChars, requiresReview, dataFormat }, hashFunction = hashString$1) {
	let sanitizedSource;
	if (dataFormat === "JSX") sanitizedSource = sanitizeJsxChildren$1(source);
	else sanitizedSource = source;
	return hashFunction(stableStringify$1({
		source: sanitizedSource,
		...id && { id },
		...context && { context },
		...maxChars != null && { maxChars: Math.abs(maxChars) },
		...requiresReview === true && { requiresReview: true },
		...dataFormat && { dataFormat }
	}));
}
var sanitizeChild$1 = (child) => {
	if (child && typeof child === "object") {
		const newChild = {};
		if ("c" in child && child.c) newChild.c = sanitizeJsxChildren$1(child.c);
		if ("d" in child) {
			const generaltranslation = child?.d;
			if (generaltranslation?.b) newChild.b = Object.fromEntries(Object.entries(generaltranslation.b).map(([key, value]) => [key, sanitizeJsxChildren$1(value)]));
			if (generaltranslation?.t) newChild.t = generaltranslation.t;
		}
		if (isVariable$1(child)) return {
			k: child.k,
			...child.v && { v: child.v }
		};
		return newChild;
	}
	return child;
};
function sanitizeJsxChildren$1(childrenAsObjects) {
	return Array.isArray(childrenAsObjects) ? childrenAsObjects.map(sanitizeChild$1) : sanitizeChild$1(childrenAsObjects);
}
var GT_SOURCE = "GT";
var translationTimeoutError$1 = (timeout) => createDiagnosticMessage({
	source: GT_SOURCE,
	severity: "Error",
	whatHappened: `Translation request timed out after ${timeout}ms`,
	fix: "Try again, or increase the request timeout if the source content is large"
});
var apiError$1 = (status, statusText, error) => createDiagnosticMessage({
	source: GT_SOURCE,
	severity: "Error",
	whatHappened: `The translation API returned ${status} ${statusText}`,
	fix: "Check the request configuration and try again",
	details: error
});
createDiagnosticMessage({
	source: GT_SOURCE,
	severity: "Error",
	whatHappened: "Authentication failed",
	fix: "Check that your API key and project ID are correct"
});
var noTargetLocaleProvidedError$1 = (functionName) => createDiagnosticMessage({
	source: GT_SOURCE,
	severity: "Error",
	whatHappened: `Cannot call \`${functionName}\` without a specified locale`,
	fix: `Pass a locale to \`${functionName}\` or specify targetLocale in the GT constructor`
});
var noSourceLocaleProvidedError$1 = (functionName) => createDiagnosticMessage({
	source: GT_SOURCE,
	severity: "Error",
	whatHappened: `Cannot call \`${functionName}\` without a specified locale`,
	fix: `Pass a locale to \`${functionName}\` or specify sourceLocale in the GT constructor`
});
var noProjectIdProvidedError$1 = (functionName) => createDiagnosticMessage({
	source: GT_SOURCE,
	severity: "Error",
	whatHappened: `Cannot call \`${functionName}\` without a specified project ID`,
	fix: `Pass a project ID to \`${functionName}\` or specify projectId in the GT constructor`
});
var noApiKeyProvidedError$1 = (functionName) => createDiagnosticMessage({
	source: GT_SOURCE,
	severity: "Error",
	whatHappened: `Cannot call \`${functionName}\` without a specified API key`,
	fix: `Pass an API key to \`${functionName}\` or specify apiKey in the GT constructor`
});
var invalidLocaleError$1 = (locale) => createDiagnosticMessage({
	source: GT_SOURCE,
	severity: "Error",
	whatHappened: `Locale "${locale}" is not valid`,
	fix: "Use a valid BCP 47 locale code or add a custom mapping"
});
var invalidLocalesError$1 = (locales) => createDiagnosticMessage({
	source: GT_SOURCE,
	severity: "Error",
	whatHappened: `These locales are not valid: ${locales.join(", ")}`,
	fix: "Use valid BCP 47 locale codes or add custom mappings"
});
var LOG_LEVELS$1 = {
	debug: 0,
	info: 1,
	warn: 2,
	error: 3,
	off: 4
};
var LOG_COLORS$1 = {
	debug: "\x1B[36m",
	info: "\x1B[32m",
	warn: "\x1B[33m",
	error: "\x1B[31m",
	off: ""
};
var RESET_COLOR$1 = "\x1B[0m";
function getConfiguredLogLevel$1() {
	if (typeof process !== "undefined" && process.env?._GT_LOG_LEVEL) {
		const envLevel = process.env._GT_LOG_LEVEL.toLowerCase();
		if (envLevel in LOG_LEVELS$1) return envLevel;
	}
	return "warn";
}
var ConsoleLogHandler$1 = class {
	constructor(config) {
		this.config = config;
	}
	handle(entry) {
		const parts = [];
		if (this.config.includeTimestamp) parts.push(`[${entry.timestamp.toISOString()}]`);
		const colorCode = LOG_COLORS$1[entry.level];
		const levelText = `[${entry.level.toUpperCase()}]`;
		parts.push(`${colorCode}${levelText}${RESET_COLOR$1}`);
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
var Logger$1 = class {
	constructor(config = {}) {
		this.config = {
			level: getConfiguredLogLevel$1(),
			includeTimestamp: true,
			includeContext: true,
			enableConsole: true,
			handlers: [],
			...config
		};
		this.handlers = [...this.config.handlers || []];
		if (this.config.enableConsole) this.handlers.push(new ConsoleLogHandler$1(this.config));
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
		return LOG_LEVELS$1[level] >= LOG_LEVELS$1[this.config.level];
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
		return new ContextLogger$1(this, context);
	}
	getConfig() {
		return { ...this.config };
	}
};
var ContextLogger$1 = class ContextLogger {
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
var defaultLogger$1 = new Logger$1({
	level: getConfiguredLogLevel$1(),
	includeTimestamp: true,
	includeContext: true,
	prefix: "GT"
});
defaultLogger$1.child("fetch");
var gtInstanceLogger$1 = defaultLogger$1.child("GT instance");
async function fetchWithTimeout$1(url, options, timeout) {
	const controller = new AbortController();
	const signals = [controller.signal];
	if (options.signal) signals.push(options.signal);
	if (url instanceof Request) signals.push(url.signal);
	const signal = AbortSignal.any(signals);
	timeout = timeout ? timeout : defaultTimeout$1;
	const timeoutId = timeout ? setTimeout(() => controller.abort(), timeout) : null;
	try {
		return await fetch(url, {
			...options,
			signal
		});
	} catch (error) {
		if (error instanceof Error && error.name === "AbortError") throw translationTimeoutError$1(timeout);
		throw error;
	} finally {
		if (timeoutId) clearTimeout(timeoutId);
	}
}
async function validateResponse$1(response) {
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
		throw new ApiError$1(apiError$1(response.status, response.statusText, errorMsg), response.status, errorMsg);
	}
}
async function _translateMany$1(requests, globalMetadata, config, timeout) {
	const isArray = Array.isArray(requests);
	const hashOrder = isArray ? [] : void 0;
	const requestsObject = {};
	const entries = isArray ? requests.map((r) => [void 0, r]) : Object.entries(requests);
	for (const [key, request] of entries) {
		const { source, metadata } = typeof request === "string" ? { source: request } : request;
		const hash = key ?? metadata?.hash ?? hashSource$1({
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
		fetch: (input, init) => fetchWithTimeout$1(input, init ?? {}, timeout),
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
		await validateResponse$1(result.response);
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
			this.sourceLocale = standardizeLocale$1(sourceLocale);
			if (!isValidLocale$1(this.sourceLocale, customMapping)) throw new Error(invalidLocaleError$1(this.sourceLocale));
		}
		if (targetLocale) {
			this.targetLocale = standardizeLocale$1(targetLocale);
			if (!isValidLocale$1(this.targetLocale, customMapping)) throw new Error(invalidLocaleError$1(this.targetLocale));
		}
		if (locales) {
			const result = [];
			const invalidLocales = [];
			locales.forEach((locale) => {
				const standardizedLocale = standardizeLocale$1(locale);
				if (isValidLocale$1(standardizedLocale)) result.push(standardizedLocale);
				else invalidLocales.push(locale);
			});
			if (invalidLocales.length > 0) throw new Error(invalidLocalesError$1(invalidLocales));
			this.locales = result;
		}
		if (baseUrl) this.baseUrl = baseUrl;
		if (customMapping) {
			this.customMapping = customMapping;
			this.reverseCustomMapping = Object.fromEntries(Object.entries(customMapping).filter(([, value]) => value && typeof value === "object" && "code" in value).map(([key, value]) => [value.code, key]));
		}
		this._localeConfig = new LocaleConfig$1({
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
			const error = noApiKeyProvidedError$1(functionName);
			errors.push(error);
		}
		if (!this.projectId) {
			const error = noProjectIdProvidedError$1(functionName);
			errors.push(error);
		}
		if (errors.length) throw new Error(errors.join("\n"));
	}
	async translate(source, options, timeout) {
		if (typeof options === "string") options = { targetLocale: options };
		this._validateAuth("translate");
		let targetLocale = options?.targetLocale || this.targetLocale;
		if (!targetLocale) {
			const error = noTargetLocaleProvidedError$1("translate");
			gtInstanceLogger$1.error(error);
			throw new Error(error);
		}
		targetLocale = this.resolveCanonicalLocale(targetLocale);
		const sourceLocale = this.resolveCanonicalLocale(options?.sourceLocale || this.sourceLocale || "en");
		return (await _translateMany$1([source], {
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
			const error = noTargetLocaleProvidedError$1("translateMany");
			gtInstanceLogger$1.error(error);
			throw new Error(error);
		}
		targetLocale = this.resolveCanonicalLocale(targetLocale);
		const sourceLocale = this.resolveCanonicalLocale(options?.sourceLocale || this.sourceLocale || "en");
		return await _translateMany$1(sources, {
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
		if (!locale) throw new Error(noTargetLocaleProvidedError$1("getLocaleName"));
		return this.localeConfig.getLocaleName(locale);
	}
	getLocaleEmoji(locale = this.targetLocale) {
		if (!locale) throw new Error(noTargetLocaleProvidedError$1("getLocaleEmoji"));
		return this.localeConfig.getLocaleEmoji(locale);
	}
	getLocaleProperties(locale = this.targetLocale) {
		if (!locale) throw new Error(noTargetLocaleProvidedError$1("getLocaleProperties"));
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
		if (!sourceLocale) throw new Error(noSourceLocaleProvidedError$1("requiresTranslation"));
		if (!targetLocale) throw new Error(noTargetLocaleProvidedError$1("requiresTranslation"));
		if (customMapping === this.customMapping) return this.localeConfig.requiresTranslation(targetLocale, sourceLocale, approvedLocales);
		return requiresTranslation$1(sourceLocale, targetLocale, approvedLocales, customMapping);
	}
	determineLocale(locales, approvedLocales = this.locales || [], customMapping = this.customMapping) {
		if (customMapping === this.customMapping) return this.localeConfig.determineLocale(locales, approvedLocales ?? []);
		return determineLocale$1(locales, approvedLocales, customMapping);
	}
	getLocaleDirection(locale = this.targetLocale) {
		if (!locale) throw new Error(noTargetLocaleProvidedError$1("getLocaleDirection"));
		return this.localeConfig.getLocaleDirection(locale);
	}
	isValidLocale(locale = this.targetLocale, customMapping = this.customMapping) {
		if (!locale) throw new Error(noTargetLocaleProvidedError$1("isValidLocale"));
		if (customMapping === this.customMapping) return this.localeConfig.isValidLocale(locale);
		return isValidLocale$1(locale, customMapping);
	}
	resolveCanonicalLocale(locale = this.targetLocale, customMapping = this.customMapping) {
		if (!locale) throw new Error(noTargetLocaleProvidedError$1("resolveCanonicalLocale"));
		if (customMapping === this.customMapping) return this.localeConfig.resolveCanonicalLocale(locale);
		return resolveCanonicalLocale$1(locale, customMapping);
	}
	resolveAliasLocale(locale, customMapping = this.customMapping) {
		if (!locale) throw new Error(noTargetLocaleProvidedError$1("resolveAliasLocale"));
		if (customMapping === this.customMapping) return this.localeConfig.resolveAliasLocale(locale);
		return resolveAliasLocale$1(locale, customMapping);
	}
	standardizeLocale(locale = this.targetLocale) {
		if (!locale) throw new Error(noTargetLocaleProvidedError$1("standardizeLocale"));
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
			if (shouldLogDebugWarnings()) console.warn(createDiagnosticMessage({
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
createGlobalSingleton({
	namespace: "i18n",
	key: "i18nCache",
	source: "gt-i18n",
	notInitialized: () => createDiagnosticMessage({
		source: "gt-i18n",
		severity: "Error",
		whatHappened: "Cannot read I18nCache before it has been initialized",
		why: "the internal I18nCache singleton is unavailable",
		fix: "Initialize GT before accessing I18nCache (call initializeGT() from your GT framework package)."
	})
});
function getLoadTranslationsType$1(config) {
	if (config.loadTranslations) return "custom";
	else if ((config.cacheUrl === void 0 || config.cacheUrl === "https://cdn.gtx.dev") && config.projectId) return "gt-remote";
	else if (config.cacheUrl) return "remote";
	else return "disabled";
}
function getTranslationApiType$1(params) {
	const usesDefaultRuntimeUrl = params.runtimeUrl === void 0 || params.runtimeUrl === "https://api.gtx.dev";
	if (usesDefaultRuntimeUrl && params.projectId && (params.devApiKey || params.apiKey)) return "gt";
	else if (params.runtimeUrl && !usesDefaultRuntimeUrl) return "custom";
	else return "disabled";
}
function getRuntimeEnvironment() {
	if (typeof process === "object" && true) return "development";
	const importMetaMode = readImportMetaEnv(() => "production");
	if (importMetaMode) return importMetaMode === "development" ? "development" : "production";
	if (readImportMetaEnv(() => true) === true) return "development";
	return "production";
}
function readImportMetaEnv(readValue) {
	try {
		return readValue();
	} catch {
		return;
	}
}
var logger_default$1 = {
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
		logger_default$1.error(`I18nConfig: ${getInvalidLocaleMessage(locale)}`);
	});
	if (invalidLocaleConfig.length > 0) throw new Error(createDiagnosticMessage({
		source: "gt-i18n",
		severity: "Error",
		whatHappened: "Invalid I18nConfig locale configuration",
		details: invalidLocaleConfig.map((locale) => `Invalid locale: ${locale}`),
		fix: "Use valid BCP 47 locale codes or add custom mappings."
	}));
}
function getInvalidLocales({ defaultLocale, locales, customMapping }) {
	const localesToValidate = /* @__PURE__ */ new Set([...defaultLocale ? [defaultLocale] : [], ...locales || []]);
	return Array.from(localesToValidate).filter((locale) => !isValidLocale$1(locale, customMapping));
}
function getInvalidCustomMappingLocales({ customMapping }) {
	return Object.values(customMapping || {}).flatMap((value) => {
		const locale = typeof value === "string" ? value : value.code;
		return locale && !isValidLocale$1(locale) ? [locale] : [];
	});
}
function getInvalidLocaleMessage(locale) {
	return createDiagnosticMessage({
		whatHappened: `Locale "${locale}" is not valid`,
		fix: "Use a valid BCP 47 locale code or add a custom mapping"
	});
}
var I18nConfig = class extends LocaleConfig$1 {
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
		return new LocaleConfig$1(getLocaleResolverConfigParams(config));
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
	return getLoadTranslationsType$1(config) === "gt-remote" || getTranslationApiType$1(config) === "gt";
}
var i18nConfigSingleton = createGlobalSingleton({
	namespace: "i18n",
	key: "i18nConfig",
	source: "gt-i18n",
	notInitialized: () => createDiagnosticMessage({
		source: "gt-i18n",
		severity: "Error",
		whatHappened: "Cannot read I18nConfig before it has been initialized",
		why: "the internal I18nConfig singleton is unavailable",
		fix: "Initialize GT before reading locale config (call initializeGT() from your GT framework package)."
	})
});
var getI18nConfig = i18nConfigSingleton.get;
i18nConfigSingleton.set;
i18nConfigSingleton.isInitialized;
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
var { getConditionStore: getWritableConditionStore, setConditionStore: setWritableConditionStore } = createConditionStoreSingleton(createDiagnosticMessage({
	source: "gt-i18n",
	severity: "Error",
	whatHappened: "Cannot read the locale before GT has been initialized",
	why: "the internal ConditionStore singleton is unavailable",
	fix: "Initialize GT before calling translation functions (e.g. call initializeGT() from your GT framework package)."
}));
function hashMessage$1(message, options) {
	const metadataOptions = options;
	if (metadataOptions.$_hash != null) return metadataOptions.$_hash;
	return hashSource$1({
		source: options.$format === "ICU" ? indexVars$1(message) : message,
		...metadataOptions.$context && { context: metadataOptions.$context },
		...metadataOptions.$maxChars != null && { maxChars: Math.abs(metadataOptions.$maxChars) },
		...metadataOptions.$requiresReview === true && { requiresReview: true },
		dataFormat: options.$format
	});
}
function getTranslateListenerKey(lookup) {
	const hash = "hash" in lookup ? lookup.hash : hashMessage$1(lookup.message, lookup.options);
	return `${lookup.locale}:${hash}`;
}
var t$4 = [];
function n$11({ locale: n, enableI18n: r, localesProp: i = t$4 }) {
	let a = getI18nConfig().getDefaultLocale();
	return r && getI18nConfig().requiresTranslation(n) ? [
		...i,
		n,
		a
	] : [a];
}
var s$6 = `server-render`;
var c$6 = Symbol.for(`generaltranslation.react-core.ReactI18nConfig`);
var l$3 = class extends I18nConfig {
	renderStrategy;
	localeCookieName;
	regionCookieName;
	enableI18nCookieName;
	constructor(r = {}, i = s$6) {
		super(r), p$5(i), Object.defineProperty(this, c$6, { value: !0 }), this.renderStrategy = i, this.localeCookieName = r.localeCookieName ?? "generaltranslation.locale", this.regionCookieName = r.regionCookieName ?? "generaltranslation.region", this.enableI18nCookieName = r.enableI18nCookieName ?? "generaltranslation.enable-i18n";
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
	if (m$3(e)) return e;
	throw Error(createDiagnosticMessage({
		source: `@generaltranslation/react-core`,
		severity: `Error`,
		whatHappened: `Cannot read ReactI18nConfig after base I18nConfig setup.`,
		why: `the internal I18nConfig singleton was initialized without react-core render strategy support`,
		fix: `Initialize GT through gt-react or @generaltranslation/react-core/pure.`
	}));
}
function p$5(e) {
	if (!(e === `SPA` || e === `server-render`)) throw Error(createDiagnosticMessage({
		source: `@generaltranslation/react-core`,
		severity: `Error`,
		whatHappened: `Invalid React render strategy.`,
		why: `the render strategy must be "SPA" or "server-render", but received "${String(e)}"`,
		fix: `Initialize GT through gt-react or pass a valid render strategy.`
	}));
}
function m$3(e) {
	if (e instanceof l$3) return !0;
	let t = e;
	return t[c$6] === !0 && typeof t.getRenderStrategy == `function` && typeof t.getLocaleCookieName == `function` && typeof t.getRegionCookieName == `function` && typeof t.getEnableI18nCookieName == `function`;
}
var { getConditionStore: n$10, setConditionStore: r$7, isConditionStoreInitialized: i$10 } = createConditionStoreSingleton(createDiagnosticMessage({
	source: `@generaltranslation/react-core`,
	severity: `Error`,
	whatHappened: `Cannot read GT runtime context before it has been initialized`,
	why: `the internal ConditionStore is unavailable`,
	fix: `Call initializeGT() during setup (gt-next runs this automatically) and add a <GTProvider> at the root of your component tree.`
}));
function n$9({ Currency: n, GtInternalCurrency: r, DateTime: i, GtInternalDateTime: a, Num: o, GtInternalNum: s, RelativeTime: c, GtInternalRelativeTime: l, Var: u, GtInternalVar: d }) {
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
var e$2 = {
	variable: `value`,
	number: `n`,
	datetime: `date`,
	currency: `cost`,
	"relative-time": `time`
};
function t$3(t = {}, n) {
	return typeof t.name == `string` ? t.name : `_gt_${e$2[n] || `value`}_${t[`data-_gt`]?.id}`;
}
function n$8(e) {
	return typeof e == `object` && !!e && `data-_gt` in e && typeof e[`data-_gt`] == `object` && !!e[`data-_gt`] && `transformation` in e[`data-_gt`] && e[`data-_gt`]?.transformation === `variable`;
}
function r$6(n) {
	let r = n[`data-_gt`]?.variableType || `variable`;
	return {
		variableName: t$3(n, r),
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
function e$1(e) {
	return e && e.props && e.props[`data-_gt`] ? e.props[`data-_gt`] : null;
}
function n$7(n, r, i) {
	let a = ``, o = null;
	return typeof n == `number` && !o && i && (a = _getPluralForm(n, Object.keys(i).filter(isAcceptedPluralForm), r)), a && !o && (o = i[a]), o;
}
function o$9({ renderVariable: o }) {
	return function({ children: s, defaultLocale: c = "en", enableI18n: l }) {
		let u = (i) => {
			let s = e$1(i);
			if (n$8(i.props)) {
				let { variableType: t, variableValue: n, variableOptions: r, injectionType: a } = r$6(i.props);
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
				return typeof i.props.n == `number` ? f(n$7(i.props.n, [c], e) ?? i.props.children) : i.props.children == null ? null : f(i.props.children);
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
		let { props: a$22 } = e, s = a$22[`data-_gt`], u = s?.transformation, f = t.d, m = {};
		if (f && Object.entries(HTML_CONTENT_PROPS).forEach(([e, t]) => {
			f[e] && (m[t] = f[e]);
		}), u === `plural`) {
			let a = e.props.n;
			return typeof a == `number` ? p({
				source: n$7(a, n, s.branches || {}) ?? e.props.children,
				target: n$7(a, n, t.d?.b || {}) ?? t.c,
				locales: n,
				enableI18n: i
			}) : d({
				children: e,
				defaultLocale: n[0],
				enableI18n: i
			});
		}
		if (u === `branch`) {
			let { branch: e, children: r } = a$22, o = e == null || e === `` ? void 0 : e.toString(), c = s.branches || {}, l = t.d?.b || {};
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
				source: a$22.children,
				target: t.c,
				locales: n,
				enableI18n: i
			})
		}) : a$22?.children && t?.c ? a.cloneElement(e, {
			...a$22,
			...m,
			"data-_gt": void 0,
			children: p({
				source: a$22.children,
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
				if (a.isValidElement(n)) if (n$8(n.props)) {
					let { variableName: t, variableValue: r, variableOptions: i, injectionType: a } = r$6(n.props);
					o[t] = r, d[t] = i, m[t] = a;
				} else return !0;
				return !1;
			}), g = (e) => h.find((t) => {
				let r = e$1(t);
				return r?.id === void 0 ? !1 : r.id === e.i;
			}) || h.shift();
			return i.map((e, t) => {
				if (typeof e == `string`) return jsx(a.Fragment, { children: e }, `string_${t}`);
				if (isVariable$1(e)) return jsx(a.Fragment, { children: u({
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
			let n = isVariable$1(i) ? `variable` : `element`;
			if (a.isValidElement(r)) {
				if (n === `element`) return f({
					sourceElement: r,
					targetElement: i,
					locales: l,
					enableI18n: p
				});
				if (n$8(r.props)) {
					let { variableValue: t, variableOptions: n, variableType: i, injectionType: a } = r$6(r.props);
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
function n$6() {
	let t = getI18nConfig();
	return typeof t.isIdTaggingEnabled == `function` && t.isIdTaggingEnabled();
}
function r$5(...e) {
	if (!n$6()) return;
	let r = hashMessage$1(...e);
	return e[1].$_hash = r, r;
}
var a$12 = { display: `contents` };
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
function c$5(t, c) {
	return o$8 || !n$6() ? t : isValidElement(t) && typeof t.type == `string` ? cloneElement(t, { "data-_gt-hash": c }) : s$5(t) ? t : createElement(`span`, {
		"data-_gt-hash": c,
		style: a$12
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
		return l ? c$5(u, l) : u;
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
function i$9(i) {
	let a = n$9(i), o = o$9({ renderVariable: a }), s = u({ renderVariable: a });
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
var r$4 = createGlobalSingleton({
	namespace: `reactCore`,
	key: `i18nStore`,
	source: `@generaltranslation/react-core`,
	notInitialized: () => o$7()
});
var i$8 = r$4.get;
r$4.set;
r$4.isInitialized;
function o$7() {
	let t = createDiagnosticMessage({
		source: `@generaltranslation/react-core`,
		severity: `Error`,
		whatHappened: `Cannot access I18nStore before it is initialized.`,
		fix: u$1().getRenderStrategy() === `SPA` ? `Initialize GT before reading GT runtime context.` : `Add a <GTProvider> at the root of your component tree.`
	});
	return Error(t);
}
var a$10 = createGlobalSingleton({
	namespace: `reactCore`,
	key: `gtContext`,
	source: `@generaltranslation/react-core`,
	notInitialized: () => createDiagnosticMessage({
		source: `@generaltranslation/react-core`,
		severity: `Error`,
		whatHappened: `Cannot read GTContext before it has been initialized`,
		why: `the internal GTContext singleton is unavailable`,
		fix: `Add a <GTProvider> at the root of your component tree.`
	})
});
function o$6() {
	return a$10.isInitialized() || a$10.set(createContext(void 0)), a$10.get();
}
function s$4() {
	let t = useContext(o$6());
	if (t || u$1().getRenderStrategy() === `SPA`) return t;
	throw Error(c$4());
}
function c$4() {
	return createDiagnosticMessage({
		source: `@generaltranslation/react-core`,
		severity: `Error`,
		whatHappened: `GT runtime context could not be read`,
		why: `GTContext was accessed outside of a <GTProvider>`,
		fix: `Add a <GTProvider> at the root of your component tree.`
	});
}
function r$3() {
	return s$4()?.conditionStore ?? n$10();
}
function i$7() {
	return r$3().getLocale();
}
function o$5() {
	return r$3().getEnableI18n();
}
function r$2() {
	return useMemo(() => getI18nConfig().getDefaultLocale(), []);
}
function c$3() {
	let e = o$5(), t = i$7();
	return e && getI18nConfig().requiresTranslation(t);
}
function n$5() {
	return s$4()?.i18nStore || i$8();
}
function r$1() {
	return s$4()?.translationsSnapshot || {};
}
function f$3() {
	return p$4(c$3());
}
function p$4(t) {
	let n = s$4()?.onMissingTranslation, r = S$4(t);
	return useCallback((e) => {
		n ? n(e) : r(getTranslateListenerKey(e), {
			type: `translation`,
			lookup: e
		});
	}, [n, r]);
}
var v$3 = f$3;
function S$4(e) {
	let t = getI18nConfig().isDevHotReloadEnabled(), r = n$5(), a = /* @__PURE__ */ new Map();
	return useEffect(() => {
		!t || !e || a.size === 0 || a.forEach(({ type: e, lookup: t }) => {
			switch (e) {
				case `translation`:
					r.translate(t);
					break;
				case `dictionaryEntry`:
					r.translateDictionaryEntry(t);
					break;
				case `dictionaryObject`: r.translateDictionaryObject(t);
			}
		});
	}, [
		t,
		e,
		r,
		a
	]), (e, t) => {
		a.set(e, t);
	};
}
function n$4({ _enableI18n: n, _locale: r, children: i, currency: a = `USD`, options: o = {}, locales: s = [] }) {
	let c = n$11({
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
function i$6({ _enableI18n: r, _locale: i, ...a }) {
	return n$4({
		...a,
		_enableI18n: r ?? o$5(),
		_locale: i ?? i$7()
	});
}
function a$9(e) {
	return jsx(i$6, { ...e });
}
i$6._gtt = `variable-currency-automatic`, a$9._gtt = `variable-currency`;
function n$3({ _enableI18n: n, _locale: r, children: i, options: a = {}, locales: o = [] }) {
	let s = n$11({
		locale: r,
		enableI18n: n,
		localesProp: o
	}), c = getI18nConfig().getGTClass();
	return i == null ? null : c.formatDateTime(i, {
		locales: s,
		...a
	}).replace(/[\u200F\u202B\u202E]/g, ``);
}
function i$5({ _enableI18n: r, _locale: i, ...a }) {
	return n$3({
		...a,
		_enableI18n: r ?? o$5(),
		_locale: i ?? i$7()
	});
}
function a$8(e) {
	return jsx(i$5, { ...e });
}
i$5._gtt = `variable-datetime-automatic`, a$8._gtt = `variable-datetime`;
function n$2({ _enableI18n: n, _locale: r, children: i, options: a = {}, locales: o = [] }) {
	let s = n$11({
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
function i$4({ _enableI18n: r, _locale: i, ...a }) {
	return n$2({
		...a,
		_enableI18n: r ?? o$5(),
		_locale: i ?? i$7()
	});
}
function a$7(e) {
	return jsx(i$4, { ...e });
}
i$4._gtt = `variable-number-automatic`, a$7._gtt = `variable-number`;
function n$1({ _enableI18n: n, _locale: r, date: i, children: a, value: o, unit: s, baseDate: c, locales: l = [], options: u = {} }) {
	let d = n$11({
		locale: r,
		enableI18n: n,
		localesProp: l
	}), f = getI18nConfig().getGTClass(), p = i ?? a;
	return o !== void 0 && !s && console.warn("<RelativeTime>: `value` was provided without `unit`. The `value` prop will be ignored."), o !== void 0 && s ? f.formatRelativeTime(o, s, {
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
function i$3({ _enableI18n: r, _locale: i, ...a }) {
	return n$1({
		...a,
		_enableI18n: r ?? o$5(),
		_locale: i ?? i$7()
	});
}
function a$6(e) {
	return jsx(i$3, { ...e });
}
i$3._gtt = `variable-relative-time-automatic`, a$6._gtt = `variable-relative-time`;
function e({ children: e }) {
	return e;
}
function t$2({ children: t }) {
	return e({ children: t });
}
function n({ children: t }) {
	return e({ children: t });
}
t$2._gtt = `variable-variable`, n._gtt = `variable-variable-automatic`;
function a$5(a) {
	let o = n$5(), s = r$1(), c = v$3(), l = useSyncExternalStore((e) => o.subscribeToTranslate(a, e), () => o.getTranslateSnapshot(a, s), () => o.getTranslateSnapshot(a, s));
	return l == null && getI18nConfig().isDevHotReloadEnabled() && c(a), l;
}
var { renderVariable: d$3, renderDefaultChildren: f$2, renderTranslatedChildren: p$3, renderPreparedT: m$2 } = i$9({
	Currency: a$9,
	GtInternalCurrency: i$6,
	DateTime: a$8,
	GtInternalDateTime: i$5,
	Num: a$7,
	GtInternalNum: i$4,
	RelativeTime: a$6,
	GtInternalRelativeTime: i$3,
	Var: t$2,
	GtInternalVar: n
});
function r(i, a$21 = 0) {
	let o = a$21, s = (t) => {
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
function i$2(e) {
	return s$3(e, 0);
}
function a$4(t, r) {
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
		i === `translate` && c === `automatic` && console.warn(l$1);
	}
	return cloneElement(t, {
		...a,
		...`children` in a && { children: s$3(a.children, r) }
	});
}
function o$4(e, t) {
	return isValidElement(e) ? a$4(e, t) : e;
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
var l$1 = `'@generaltranslation/react-core Warning: A <_T> component was found injected outside of a <Derive> boundary. This may affect translation resolution for this component.`;
function t$1(t) {
	return a.isValidElement(t);
}
var i$1 = (e) => {
	if (!e) return ``;
	let { type: t, props: n } = e;
	if (t && typeof t == `function`) {
		if (`displayName` in t && typeof t.displayName == `string` && t.displayName) return t.displayName;
		if (`name` in t && typeof t.name == `string` && t.name) return t.name;
	}
	return t && typeof t == `string` ? t : n.href ? `a` : n[`data-_gt`]?.id ? `C${n[`data-_gt`].id}` : `function`;
};
var a$3 = (e, t, n) => {
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
	let { props: r } = t, o = { t: i$1(t) };
	if (r[`data-_gt`]) {
		let t = r[`data-_gt`], i = t.transformation;
		if (i === `variable`) {
			let i = t.variableType || `variable`, a = t$3(r, i), o = minifyVariableType(i);
			return {
				i: t.id,
				k: a,
				v: o
			};
		}
		o.i = t.id, o.d = a$3(i, r, t.branches);
	}
	return r.children && (o.c = c$1(r.children)), o;
};
var s$2 = (e) => t$1(e) ? o$3(e) : typeof e == `number` ? e.toString() : e;
function c$1(e) {
	return Array.isArray(e) ? e.map(s$2) : s$2(e);
}
function i({ sourceChildren: t, params: n, locale: r }) {
	let i = a$2(t), l = o$2(i), u = s$1({
		options: c(n),
		locale: r
	});
	return r$5(l, u), {
		taggedSourceChildren: i,
		sourceJsxChildren: l,
		targetOptions: u
	};
}
function a$2(e) {
	return r(i$2(e));
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
	let u = i$7(), d = o$5(), f = r$2(), p = c ?? u, m = l ?? d;
	return {
		defaultLocale: f,
		enableI18n: m,
		locale: p,
		shouldTranslate: m && getI18nConfig().requiresTranslation(p),
		...useMemo(() => i({
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
function a$1(e) {
	return s(e);
}
function o(e) {
	return s(e);
}
a$1._gtt = `translate-client`, o._gtt = `translate-client-automatic`;
function s({ children: a, _locale: o, _enableI18n: s, _renderPreparedT: c = m$2, ...l }) {
	let { defaultLocale: u, locale: d, enableI18n: f, targetOptions: p, taggedSourceChildren: m, sourceJsxChildren: h, shouldTranslate: g } = o$1({
		sourceChildren: a,
		params: l,
		_locale: o,
		_enableI18n: s
	}), _ = a$5({
		locale: d,
		message: h,
		options: p
	}), v = useRef(null);
	if (getI18nConfig().isDevHotReloadEnabled() && _ == null && v.current != null && g) return v.current;
	let y = c({
		taggedSourceChildren: m,
		targetJsxChildren: _,
		locale: d,
		defaultLocale: u,
		enableI18n: f,
		shouldTranslate: g,
		hash: p.$_hash
	});
	return v.current = y, y;
}
var _jsxFileName$2 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/gt-react-app/src/components/pages/home/UnderstandingImpact.tsx";
function UnderstandingImpact() {
	return jsxDEV("section", {
		className: "mb-16 mx-auto max-w-3xl space-y-6",
		children: [
			jsxDEV("h2", {
				className: "text-2xl font-bold text-foreground",
				children: jsxDEV(a$1, { children: "Understanding the Impact" }, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 7,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 6,
				columnNumber: 7
			}, this),
			jsxDEV("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					jsxDEV("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: jsxDEV(a$1, { children: "Why a single large JSON can hurt performance" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 12,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 11,
						columnNumber: 9
					}, this),
					jsxDEV("p", {
						className: "text-sm text-muted-foreground",
						children: jsxDEV(a$1, { children: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 15,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 14,
						columnNumber: 9
					}, this),
					jsxDEV("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							jsxDEV("li", { children: jsxDEV(a$1, { children: "The JSON must be parsed on every page load — blocking the main thread." }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 24,
								columnNumber: 13
							}, this) }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 23,
								columnNumber: 11
							}, this),
							jsxDEV("li", { children: jsxDEV(a$1, { children: "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change." }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 30,
								columnNumber: 13
							}, this) }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 29,
								columnNumber: 11
							}, this),
							jsxDEV("li", { children: jsxDEV(a$1, { children: "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated." }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 37,
								columnNumber: 13
							}, this) }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 36,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 22,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 10,
				columnNumber: 7
			}, this),
			jsxDEV("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					jsxDEV("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: jsxDEV(a$1, { children: "The trade-offs of dynamic loading" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 48,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 47,
						columnNumber: 9
					}, this),
					jsxDEV("p", {
						className: "text-sm text-muted-foreground",
						children: jsxDEV(a$1, { children: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 51,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 50,
						columnNumber: 9
					}, this),
					jsxDEV("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							jsxDEV("li", { children: [
								jsxDEV("strong", {
									className: "text-foreground",
									children: jsxDEV(a$1, { children: "Waterfall requests:" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 60,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 59,
									columnNumber: 13
								}, this),
								" ",
								jsxDEV(a$1, { children: "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips." }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 62,
									columnNumber: 13
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 58,
								columnNumber: 11
							}, this),
							jsxDEV("li", { children: [
								jsxDEV("strong", {
									className: "text-foreground",
									children: jsxDEV(a$1, { children: "Flash of untranslated content (FOUC):" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 69,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 68,
									columnNumber: 13
								}, this),
								" ",
								jsxDEV(a$1, { children: "users may briefly see translation keys or a fallback language before the chunk arrives." }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 71,
									columnNumber: 13
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 67,
								columnNumber: 11
							}, this),
							jsxDEV("li", { children: [
								jsxDEV("strong", {
									className: "text-foreground",
									children: jsxDEV(a$1, { children: "Cache invalidation:" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 78,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 77,
									columnNumber: 13
								}, this),
								" ",
								jsxDEV(a$1, { children: "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks." }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 80,
									columnNumber: 13
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 76,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 57,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 46,
				columnNumber: 7
			}, this),
			jsxDEV("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [jsxDEV("h3", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: jsxDEV(a$1, { children: "What this benchmark measures" }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 90,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 89,
					columnNumber: 9
				}, this), jsxDEV("p", {
					className: "text-sm text-muted-foreground",
					children: jsxDEV(a$1, { children: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable." }, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 93,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 92,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 88,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 5,
		columnNumber: 5
	}, this);
}
var defaultTimeout = 6e4;
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
var CutoffFormatConstructor = class {
	constructor(locales, options = {}) {
		try {
			const localesList = !locales ? ["en"] : Array.isArray(locales) ? locales.map((l) => String(l)) : [String(locales)];
			const canonicalLocales = Intl.getCanonicalLocales(localesList);
			this.locale = canonicalLocales.length ? canonicalLocales[0] : "en";
		} catch {
			this.locale = "en";
		}
		if (!TERMINATOR_MAP[options.style ?? "ellipsis"]) throw new Error(createInvalidCutoffStyleError(options.style ?? "ellipsis"));
		let style;
		let presetTerminatorOptions;
		if (options.maxChars !== void 0) {
			style = options.style ?? "ellipsis";
			const languageCode = new Intl.Locale(this.locale).language;
			presetTerminatorOptions = TERMINATOR_MAP[style][languageCode] || TERMINATOR_MAP[style]["DEFAULT_TERMINATOR_KEY"];
		}
		let terminator = options.terminator ?? presetTerminatorOptions?.terminator;
		let separator = terminator != null ? options.separator ?? presetTerminatorOptions?.separator : void 0;
		this.additionLength = (terminator?.length ?? 0) + (separator?.length ?? 0);
		if (options.maxChars !== void 0 && Math.abs(options.maxChars) < this.additionLength) {
			terminator = void 0;
			separator = void 0;
		}
		this.options = {
			maxChars: options.maxChars,
			style,
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
		else return separator != null ? [
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
	_generateKey(locales, options = {}) {
		return `${!locales ? "undefined" : Array.isArray(locales) ? locales.map((l) => String(l)).join(",") : String(locales)}:${options ? JSON.stringify(options, Object.keys(options).sort()) : "{}"}`;
	}
	get(constructor, ...args) {
		const [locales = "en", options = {}] = args;
		const key = this._generateKey(locales, options);
		let intlObject = this.cache[constructor]?.[key];
		if (intlObject === void 0) {
			intlObject = new CustomIntl[constructor](...args);
			if (!this.cache[constructor]) this.cache[constructor] = {};
			this.cache[constructor][key] = intlObject;
		}
		return intlObject;
	}
};
var intlCache = new IntlCache();
var defaultCacheUrl = "https://cdn.gtx.dev";
var SUPPORTED_TRANSFORMATIONS = {
	GTJSON: ["GTJSON"],
	JSON: ["JSON"],
	PO: ["PO"],
	POT: ["POT", "PO"],
	YAML: ["YAML"],
	MDX: ["MDX"],
	MD: ["MD"],
	TS: ["TS"],
	JS: ["JS"],
	HTML: ["HTML"],
	TXT: ["TXT"],
	TWILIO_CONTENT_JSON: ["TWILIO_CONTENT_JSON"]
};
function isSupportedFileFormatTransform(from, to) {
	return SUPPORTED_TRANSFORMATIONS[from]?.includes(to) ?? false;
}
function getFileFormatTransformError(file) {
	if (!file.transformFormat) return void 0;
	const fileLabel = file.fileName ?? file.fileId ?? "unknown file";
	if (!file.fileFormat) return `fileFormat is required when transformFormat is provided for ${fileLabel}`;
	if (!isSupportedFileFormatTransform(file.fileFormat, file.transformFormat)) return `Unsupported file format transform: ${file.fileFormat} -> ${file.transformFormat}`;
}
function validateFileFormatTransforms(files) {
	for (const file of files) {
		const error = getFileFormatTransformError(file);
		if (error) throw new Error(error);
	}
}
function encode(data) {
	if (typeof Buffer !== "undefined") return Buffer.from(data, "utf8").toString("base64");
	const bytes = new TextEncoder().encode(data);
	let binary = "";
	for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
	return btoa(binary);
}
function decode(base64) {
	if (typeof Buffer !== "undefined") return Buffer.from(base64, "base64").toString("utf8");
	const binary = atob(base64);
	const bytes = new Uint8Array(binary.length);
	for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
	return new TextDecoder().decode(bytes);
}
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
var tslib_es6_exports = __exportAll({
	__addDisposableResource: () => __addDisposableResource,
	__assign: () => __assign,
	__asyncDelegator: () => __asyncDelegator,
	__asyncGenerator: () => __asyncGenerator,
	__asyncValues: () => __asyncValues,
	__await: () => __await,
	__awaiter: () => __awaiter,
	__classPrivateFieldGet: () => __classPrivateFieldGet,
	__classPrivateFieldIn: () => __classPrivateFieldIn,
	__classPrivateFieldSet: () => __classPrivateFieldSet,
	__createBinding: () => __createBinding,
	__decorate: () => __decorate,
	__disposeResources: () => __disposeResources,
	__esDecorate: () => __esDecorate,
	__exportStar: () => __exportStar,
	__extends: () => __extends,
	__generator: () => __generator,
	__importDefault: () => __importDefault,
	__importStar: () => __importStar,
	__makeTemplateObject: () => __makeTemplateObject,
	__metadata: () => __metadata,
	__param: () => __param,
	__propKey: () => __propKey,
	__read: () => __read,
	__rest: () => __rest,
	__rewriteRelativeImportExtension: () => __rewriteRelativeImportExtension,
	__runInitializers: () => __runInitializers,
	__setFunctionName: () => __setFunctionName,
	__spread: () => __spread,
	__spreadArray: () => __spreadArray,
	__spreadArrays: () => __spreadArrays,
	__values: () => __values,
	default: () => tslib_es6_default
});
function __extends(d, b) {
	if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	extendStatics(d, b);
	function __() {
		this.constructor = d;
	}
	d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
}
function __decorate(decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
	return function(target, key) {
		decorator(target, key, paramIndex);
	};
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
	function accept(f) {
		if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
		return f;
	}
	var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
	var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
	var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
	var _, done = false;
	for (var i = decorators.length - 1; i >= 0; i--) {
		var context = {};
		for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
		for (var p in contextIn.access) context.access[p] = contextIn.access[p];
		context.addInitializer = function(f) {
			if (done) throw new TypeError("Cannot add initializers after decoration has completed");
			extraInitializers.push(accept(f || null));
		};
		var result = (0, decorators[i])(kind === "accessor" ? {
			get: descriptor.get,
			set: descriptor.set
		} : descriptor[key], context);
		if (kind === "accessor") {
			if (result === void 0) continue;
			if (result === null || typeof result !== "object") throw new TypeError("Object expected");
			if (_ = accept(result.get)) descriptor.get = _;
			if (_ = accept(result.set)) descriptor.set = _;
			if (_ = accept(result.init)) initializers.unshift(_);
		} else if (_ = accept(result)) {
			if (kind === "field") initializers.unshift(_);
			else descriptor[key] = _;
		}
	}
	if (target) Object.defineProperty(target, contextIn.name, descriptor);
	done = true;
}
function __runInitializers(thisArg, initializers, value) {
	var useValue = arguments.length > 2;
	for (var i = 0; i < initializers.length; i++) value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
	return useValue ? value : void 0;
}
function __propKey(x) {
	return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
	if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
	return Object.defineProperty(f, "name", {
		configurable: true,
		value: prefix ? "".concat(prefix, " ", name) : name
	});
}
function __metadata(metadataKey, metadataValue) {
	if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
	function adopt(value) {
		return value instanceof P ? value : new P(function(resolve) {
			resolve(value);
		});
	}
	return new (P || (P = Promise))(function(resolve, reject) {
		function fulfilled(value) {
			try {
				step(generator.next(value));
			} catch (e) {
				reject(e);
			}
		}
		function rejected(value) {
			try {
				step(generator["throw"](value));
			} catch (e) {
				reject(e);
			}
		}
		function step(result) {
			result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
		}
		step((generator = generator.apply(thisArg, _arguments || [])).next());
	});
}
function __generator(thisArg, body) {
	var _ = {
		label: 0,
		sent: function() {
			if (t[0] & 1) throw t[1];
			return t[1];
		},
		trys: [],
		ops: []
	}, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
	return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
		return this;
	}), g;
	function verb(n) {
		return function(v) {
			return step([n, v]);
		};
	}
	function step(op) {
		if (f) throw new TypeError("Generator is already executing.");
		while (g && (g = 0, op[0] && (_ = 0)), _) try {
			if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
			if (y = 0, t) op = [op[0] & 2, t.value];
			switch (op[0]) {
				case 0:
				case 1:
					t = op;
					break;
				case 4:
					_.label++;
					return {
						value: op[1],
						done: false
					};
				case 5:
					_.label++;
					y = op[1];
					op = [0];
					continue;
				case 7:
					op = _.ops.pop();
					_.trys.pop();
					continue;
				default:
					if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
						_ = 0;
						continue;
					}
					if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
						_.label = op[1];
						break;
					}
					if (op[0] === 6 && _.label < t[1]) {
						_.label = t[1];
						t = op;
						break;
					}
					if (t && _.label < t[2]) {
						_.label = t[2];
						_.ops.push(op);
						break;
					}
					if (t[2]) _.ops.pop();
					_.trys.pop();
					continue;
			}
			op = body.call(thisArg, _);
		} catch (e) {
			op = [6, e];
			y = 0;
		} finally {
			f = t = 0;
		}
		if (op[0] & 5) throw op[1];
		return {
			value: op[0] ? op[1] : void 0,
			done: true
		};
	}
}
function __exportStar(m, o) {
	for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
	var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
	if (m) return m.call(o);
	if (o && typeof o.length === "number") return { next: function() {
		if (o && i >= o.length) o = void 0;
		return {
			value: o && o[i++],
			done: !o
		};
	} };
	throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
	var m = typeof Symbol === "function" && o[Symbol.iterator];
	if (!m) return o;
	var i = m.call(o), r, ar = [], e;
	try {
		while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	} catch (error) {
		e = { error };
	} finally {
		try {
			if (r && !r.done && (m = i["return"])) m.call(i);
		} finally {
			if (e) throw e.error;
		}
	}
	return ar;
}
function __spread() {
	for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
	return ar;
}
function __spreadArrays() {
	for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
	for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
	return r;
}
function __spreadArray(to, from, pack) {
	if (pack || arguments.length === 2) {
		for (var i = 0, l = from.length, ar; i < l; i++) if (ar || !(i in from)) {
			if (!ar) ar = Array.prototype.slice.call(from, 0, i);
			ar[i] = from[i];
		}
	}
	return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
	return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
	if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	var g = generator.apply(thisArg, _arguments || []), i, q = [];
	return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
		return this;
	}, i;
	function awaitReturn(f) {
		return function(v) {
			return Promise.resolve(v).then(f, reject);
		};
	}
	function verb(n, f) {
		if (g[n]) {
			i[n] = function(v) {
				return new Promise(function(a, b) {
					q.push([
						n,
						v,
						a,
						b
					]) > 1 || resume(n, v);
				});
			};
			if (f) i[n] = f(i[n]);
		}
	}
	function resume(n, v) {
		try {
			step(g[n](v));
		} catch (e) {
			settle(q[0][3], e);
		}
	}
	function step(r) {
		r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
	}
	function fulfill(value) {
		resume("next", value);
	}
	function reject(value) {
		resume("throw", value);
	}
	function settle(f, v) {
		if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
	}
}
function __asyncDelegator(o) {
	var i = {}, p;
	return verb("next"), verb("throw", function(e) {
		throw e;
	}), verb("return"), i[Symbol.iterator] = function() {
		return this;
	}, i;
	function verb(n, f) {
		i[n] = o[n] ? function(v) {
			return (p = !p) ? {
				value: __await(o[n](v)),
				done: false
			} : f ? f(v) : v;
		} : f;
	}
}
function __asyncValues(o) {
	if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	var m = o[Symbol.asyncIterator], i;
	return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
		return this;
	}, i);
	function verb(n) {
		i[n] = o[n] && function(v) {
			return new Promise(function(resolve, reject) {
				v = o[n](v), settle(resolve, reject, v.done, v.value);
			});
		};
	}
	function settle(resolve, reject, d, v) {
		Promise.resolve(v).then(function(v) {
			resolve({
				value: v,
				done: d
			});
		}, reject);
	}
}
function __makeTemplateObject(cooked, raw) {
	if (Object.defineProperty) Object.defineProperty(cooked, "raw", { value: raw });
	else cooked.raw = raw;
	return cooked;
}
function __importStar(mod) {
	if (mod && mod.__esModule) return mod;
	var result = {};
	if (mod != null) {
		for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
	}
	__setModuleDefault(result, mod);
	return result;
}
function __importDefault(mod) {
	return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
	if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
	if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
	return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
	if (kind === "m") throw new TypeError("Private method is not writable");
	if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
	if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
	return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
	if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
	return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
	if (value !== null && value !== void 0) {
		if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
		var dispose, inner;
		if (async) {
			if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
			dispose = value[Symbol.asyncDispose];
		}
		if (dispose === void 0) {
			if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
			dispose = value[Symbol.dispose];
			if (async) inner = dispose;
		}
		if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
		if (inner) dispose = function() {
			try {
				inner.call(this);
			} catch (e) {
				return Promise.reject(e);
			}
		};
		env.stack.push({
			value,
			dispose,
			async
		});
	} else if (async) env.stack.push({ async: true });
	return value;
}
function __disposeResources(env) {
	function fail(e) {
		env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
		env.hasError = true;
	}
	var r, s = 0;
	function next() {
		while (r = env.stack.pop()) try {
			if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
			if (r.dispose) {
				var result = r.dispose.call(r.value);
				if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
					fail(e);
					return next();
				});
			} else s |= 1;
		} catch (e) {
			fail(e);
		}
		if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
		if (env.hasError) throw env.error;
	}
	return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
	if (typeof path === "string" && /^\.\.?\//.test(path)) return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
		return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
	});
	return path;
}
var extendStatics, __assign, __createBinding, __setModuleDefault, ownKeys, _SuppressedError, tslib_es6_default;
var init_tslib_es6 = __esmMin((() => {
	extendStatics = function(d, b) {
		extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
			d.__proto__ = b;
		} || function(d, b) {
			for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
		};
		return extendStatics(d, b);
	};
	__assign = function() {
		__assign = Object.assign || function __assign(t) {
			for (var s, i = 1, n = arguments.length; i < n; i++) {
				s = arguments[i];
				for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
			}
			return t;
		};
		return __assign.apply(this, arguments);
	};
	__createBinding = Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	});
	__setModuleDefault = Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	};
	ownKeys = function(o) {
		ownKeys = Object.getOwnPropertyNames || function(o) {
			var ar = [];
			for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
			return ar;
		};
		return ownKeys(o);
	};
	_SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
		var e = new Error(message);
		return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
	};
	tslib_es6_default = {
		__extends,
		__assign,
		__rest,
		__decorate,
		__param,
		__esDecorate,
		__runInitializers,
		__propKey,
		__setFunctionName,
		__metadata,
		__awaiter,
		__generator,
		__createBinding,
		__exportStar,
		__values,
		__read,
		__spread,
		__spreadArrays,
		__spreadArray,
		__await,
		__asyncGenerator,
		__asyncDelegator,
		__asyncValues,
		__makeTemplateObject,
		__importStar,
		__importDefault,
		__classPrivateFieldGet,
		__classPrivateFieldSet,
		__classPrivateFieldIn,
		__addDisposableResource,
		__disposeResources,
		__rewriteRelativeImportExtension
	};
}));
init_tslib_es6();
var ErrorKind;
(function(ErrorKind) {
	ErrorKind[ErrorKind["EXPECT_ARGUMENT_CLOSING_BRACE"] = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE";
	ErrorKind[ErrorKind["EMPTY_ARGUMENT"] = 2] = "EMPTY_ARGUMENT";
	ErrorKind[ErrorKind["MALFORMED_ARGUMENT"] = 3] = "MALFORMED_ARGUMENT";
	ErrorKind[ErrorKind["EXPECT_ARGUMENT_TYPE"] = 4] = "EXPECT_ARGUMENT_TYPE";
	ErrorKind[ErrorKind["INVALID_ARGUMENT_TYPE"] = 5] = "INVALID_ARGUMENT_TYPE";
	ErrorKind[ErrorKind["EXPECT_ARGUMENT_STYLE"] = 6] = "EXPECT_ARGUMENT_STYLE";
	ErrorKind[ErrorKind["INVALID_NUMBER_SKELETON"] = 7] = "INVALID_NUMBER_SKELETON";
	ErrorKind[ErrorKind["INVALID_DATE_TIME_SKELETON"] = 8] = "INVALID_DATE_TIME_SKELETON";
	ErrorKind[ErrorKind["EXPECT_NUMBER_SKELETON"] = 9] = "EXPECT_NUMBER_SKELETON";
	ErrorKind[ErrorKind["EXPECT_DATE_TIME_SKELETON"] = 10] = "EXPECT_DATE_TIME_SKELETON";
	ErrorKind[ErrorKind["UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"] = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE";
	ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_OPTIONS"] = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS";
	ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"] = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE";
	ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"] = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE";
	ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR"] = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR";
	ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR"] = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR";
	ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"] = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT";
	ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"] = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT";
	ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_SELECTOR"] = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR";
	ErrorKind[ErrorKind["DUPLICATE_PLURAL_ARGUMENT_SELECTOR"] = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR";
	ErrorKind[ErrorKind["DUPLICATE_SELECT_ARGUMENT_SELECTOR"] = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR";
	ErrorKind[ErrorKind["MISSING_OTHER_CLAUSE"] = 22] = "MISSING_OTHER_CLAUSE";
	ErrorKind[ErrorKind["INVALID_TAG"] = 23] = "INVALID_TAG";
	ErrorKind[ErrorKind["INVALID_TAG_NAME"] = 25] = "INVALID_TAG_NAME";
	ErrorKind[ErrorKind["UNMATCHED_CLOSING_TAG"] = 26] = "UNMATCHED_CLOSING_TAG";
	ErrorKind[ErrorKind["UNCLOSED_TAG"] = 27] = "UNCLOSED_TAG";
})(ErrorKind || (ErrorKind = {}));
var TYPE;
(function(TYPE) {
	TYPE[TYPE["literal"] = 0] = "literal";
	TYPE[TYPE["argument"] = 1] = "argument";
	TYPE[TYPE["number"] = 2] = "number";
	TYPE[TYPE["date"] = 3] = "date";
	TYPE[TYPE["time"] = 4] = "time";
	TYPE[TYPE["select"] = 5] = "select";
	TYPE[TYPE["plural"] = 6] = "plural";
	TYPE[TYPE["pound"] = 7] = "pound";
	TYPE[TYPE["tag"] = 8] = "tag";
})(TYPE || (TYPE = {}));
var SKELETON_TYPE;
(function(SKELETON_TYPE) {
	SKELETON_TYPE[SKELETON_TYPE["number"] = 0] = "number";
	SKELETON_TYPE[SKELETON_TYPE["dateTime"] = 1] = "dateTime";
})(SKELETON_TYPE || (SKELETON_TYPE = {}));
function isLiteralElement(el) {
	return el.type === TYPE.literal;
}
function isArgumentElement(el) {
	return el.type === TYPE.argument;
}
function isNumberElement(el) {
	return el.type === TYPE.number;
}
function isDateElement(el) {
	return el.type === TYPE.date;
}
function isTimeElement(el) {
	return el.type === TYPE.time;
}
function isSelectElement(el) {
	return el.type === TYPE.select;
}
function isPluralElement(el) {
	return el.type === TYPE.plural;
}
function isPoundElement(el) {
	return el.type === TYPE.pound;
}
function isTagElement(el) {
	return el.type === TYPE.tag;
}
function isNumberSkeleton(el) {
	return !!(el && typeof el === "object" && el.type === SKELETON_TYPE.number);
}
function isDateTimeSkeleton(el) {
	return !!(el && typeof el === "object" && el.type === SKELETON_TYPE.dateTime);
}
var SPACE_SEPARATOR_REGEX = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
var DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function parseDateTimeSkeleton(skeleton) {
	var result = {};
	skeleton.replace(DATE_TIME_REGEX, function(match) {
		var len = match.length;
		switch (match[0]) {
			case "G":
				result.era = len === 4 ? "long" : len === 5 ? "narrow" : "short";
				break;
			case "y":
				result.year = len === 2 ? "2-digit" : "numeric";
				break;
			case "Y":
			case "u":
			case "U":
			case "r": throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
			case "q":
			case "Q": throw new RangeError("`q/Q` (quarter) patterns are not supported");
			case "M":
			case "L":
				result.month = [
					"numeric",
					"2-digit",
					"short",
					"long",
					"narrow"
				][len - 1];
				break;
			case "w":
			case "W": throw new RangeError("`w/W` (week) patterns are not supported");
			case "d":
				result.day = ["numeric", "2-digit"][len - 1];
				break;
			case "D":
			case "F":
			case "g": throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
			case "E":
				result.weekday = len === 4 ? "long" : len === 5 ? "narrow" : "short";
				break;
			case "e":
				if (len < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
				result.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][len - 4];
				break;
			case "c":
				if (len < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
				result.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][len - 4];
				break;
			case "a":
				result.hour12 = true;
				break;
			case "b":
			case "B": throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
			case "h":
				result.hourCycle = "h12";
				result.hour = ["numeric", "2-digit"][len - 1];
				break;
			case "H":
				result.hourCycle = "h23";
				result.hour = ["numeric", "2-digit"][len - 1];
				break;
			case "K":
				result.hourCycle = "h11";
				result.hour = ["numeric", "2-digit"][len - 1];
				break;
			case "k":
				result.hourCycle = "h24";
				result.hour = ["numeric", "2-digit"][len - 1];
				break;
			case "j":
			case "J":
			case "C": throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
			case "m":
				result.minute = ["numeric", "2-digit"][len - 1];
				break;
			case "s":
				result.second = ["numeric", "2-digit"][len - 1];
				break;
			case "S":
			case "A": throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
			case "z":
				result.timeZoneName = len < 4 ? "short" : "long";
				break;
			case "Z":
			case "O":
			case "v":
			case "V":
			case "X":
			case "x": throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
		}
		return "";
	});
	return result;
}
var WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function parseNumberSkeletonFromString(skeleton) {
	if (skeleton.length === 0) throw new Error("Number skeleton cannot be empty");
	var stringTokens = skeleton.split(WHITE_SPACE_REGEX).filter(function(x) {
		return x.length > 0;
	});
	var tokens = [];
	for (var _i = 0, stringTokens_1 = stringTokens; _i < stringTokens_1.length; _i++) {
		var stemAndOptions = stringTokens_1[_i].split("/");
		if (stemAndOptions.length === 0) throw new Error("Invalid number skeleton");
		var stem = stemAndOptions[0], options = stemAndOptions.slice(1);
		for (var _a = 0, options_1 = options; _a < options_1.length; _a++) if (options_1[_a].length === 0) throw new Error("Invalid number skeleton");
		tokens.push({
			stem,
			options
		});
	}
	return tokens;
}
function icuUnitToEcma(unit) {
	return unit.replace(/^(.*?)-/, "");
}
var FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
var SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?[rs]?$/g;
var INTEGER_WIDTH_REGEX = /(\*)(0+)|(#+)(0+)|(0+)/g;
var CONCISE_INTEGER_WIDTH_REGEX = /^(0+)$/;
function parseSignificantPrecision(str) {
	var result = {};
	if (str[str.length - 1] === "r") result.roundingPriority = "morePrecision";
	else if (str[str.length - 1] === "s") result.roundingPriority = "lessPrecision";
	str.replace(SIGNIFICANT_PRECISION_REGEX, function(_, g1, g2) {
		if (typeof g2 !== "string") {
			result.minimumSignificantDigits = g1.length;
			result.maximumSignificantDigits = g1.length;
		} else if (g2 === "+") result.minimumSignificantDigits = g1.length;
		else if (g1[0] === "#") result.maximumSignificantDigits = g1.length;
		else {
			result.minimumSignificantDigits = g1.length;
			result.maximumSignificantDigits = g1.length + (typeof g2 === "string" ? g2.length : 0);
		}
		return "";
	});
	return result;
}
function parseSign(str) {
	switch (str) {
		case "sign-auto": return { signDisplay: "auto" };
		case "sign-accounting":
		case "()": return { currencySign: "accounting" };
		case "sign-always":
		case "+!": return { signDisplay: "always" };
		case "sign-accounting-always":
		case "()!": return {
			signDisplay: "always",
			currencySign: "accounting"
		};
		case "sign-except-zero":
		case "+?": return { signDisplay: "exceptZero" };
		case "sign-accounting-except-zero":
		case "()?": return {
			signDisplay: "exceptZero",
			currencySign: "accounting"
		};
		case "sign-never":
		case "+_": return { signDisplay: "never" };
	}
}
function parseConciseScientificAndEngineeringStem(stem) {
	var result;
	if (stem[0] === "E" && stem[1] === "E") {
		result = { notation: "engineering" };
		stem = stem.slice(2);
	} else if (stem[0] === "E") {
		result = { notation: "scientific" };
		stem = stem.slice(1);
	}
	if (result) {
		var signDisplay = stem.slice(0, 2);
		if (signDisplay === "+!") {
			result.signDisplay = "always";
			stem = stem.slice(2);
		} else if (signDisplay === "+?") {
			result.signDisplay = "exceptZero";
			stem = stem.slice(2);
		}
		if (!CONCISE_INTEGER_WIDTH_REGEX.test(stem)) throw new Error("Malformed concise eng/scientific notation");
		result.minimumIntegerDigits = stem.length;
	}
	return result;
}
function parseNotationOptions(opt) {
	var result = {};
	var signOpts = parseSign(opt);
	if (signOpts) return signOpts;
	return result;
}
function parseNumberSkeleton(tokens) {
	var result = {};
	for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
		var token = tokens_1[_i];
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
				result.currency = token.options[0];
				continue;
			case "group-off":
			case ",_":
				result.useGrouping = false;
				continue;
			case "precision-integer":
			case ".":
				result.maximumFractionDigits = 0;
				continue;
			case "measure-unit":
			case "unit":
				result.style = "unit";
				result.unit = icuUnitToEcma(token.options[0]);
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
				result = __assign(__assign(__assign({}, result), { notation: "scientific" }), token.options.reduce(function(all, opt) {
					return __assign(__assign({}, all), parseNotationOptions(opt));
				}, {}));
				continue;
			case "engineering":
				result = __assign(__assign(__assign({}, result), { notation: "engineering" }), token.options.reduce(function(all, opt) {
					return __assign(__assign({}, all), parseNotationOptions(opt));
				}, {}));
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
				result.scale = parseFloat(token.options[0]);
				continue;
			case "rounding-mode-floor":
				result.roundingMode = "floor";
				continue;
			case "rounding-mode-ceiling":
				result.roundingMode = "ceil";
				continue;
			case "rounding-mode-down":
				result.roundingMode = "trunc";
				continue;
			case "rounding-mode-up":
				result.roundingMode = "expand";
				continue;
			case "rounding-mode-half-even":
				result.roundingMode = "halfEven";
				continue;
			case "rounding-mode-half-down":
				result.roundingMode = "halfTrunc";
				continue;
			case "rounding-mode-half-up":
				result.roundingMode = "halfExpand";
				continue;
			case "integer-width":
				if (token.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
				token.options[0].replace(INTEGER_WIDTH_REGEX, function(_, g1, g2, g3, g4, g5) {
					if (g1) result.minimumIntegerDigits = g2.length;
					else if (g3 && g4) throw new Error("We currently do not support maximum integer digits");
					else if (g5) throw new Error("We currently do not support exact integer digits");
					return "";
				});
				continue;
		}
		if (CONCISE_INTEGER_WIDTH_REGEX.test(token.stem)) {
			result.minimumIntegerDigits = token.stem.length;
			continue;
		}
		if (FRACTION_PRECISION_REGEX.test(token.stem)) {
			if (token.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
			token.stem.replace(FRACTION_PRECISION_REGEX, function(_, g1, g2, g3, g4, g5) {
				if (g2 === "*") result.minimumFractionDigits = g1.length;
				else if (g3 && g3[0] === "#") result.maximumFractionDigits = g3.length;
				else if (g4 && g5) {
					result.minimumFractionDigits = g4.length;
					result.maximumFractionDigits = g4.length + g5.length;
				} else {
					result.minimumFractionDigits = g1.length;
					result.maximumFractionDigits = g1.length;
				}
				return "";
			});
			var opt = token.options[0];
			if (opt === "w") result = __assign(__assign({}, result), { trailingZeroDisplay: "stripIfInteger" });
			else if (opt) result = __assign(__assign({}, result), parseSignificantPrecision(opt));
			continue;
		}
		if (SIGNIFICANT_PRECISION_REGEX.test(token.stem)) {
			result = __assign(__assign({}, result), parseSignificantPrecision(token.stem));
			continue;
		}
		var signOpts = parseSign(token.stem);
		if (signOpts) result = __assign(__assign({}, result), signOpts);
		var conciseScientificAndEngineeringOpts = parseConciseScientificAndEngineeringStem(token.stem);
		if (conciseScientificAndEngineeringOpts) result = __assign(__assign({}, result), conciseScientificAndEngineeringOpts);
	}
	return result;
}
var timeData = {
	"001": ["H", "h"],
	"419": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"AC": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"AD": ["H", "hB"],
	"AE": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"AF": [
		"H",
		"hb",
		"hB",
		"h"
	],
	"AG": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"AI": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"AL": [
		"h",
		"H",
		"hB"
	],
	"AM": ["H", "hB"],
	"AO": ["H", "hB"],
	"AR": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"AS": ["h", "H"],
	"AT": ["H", "hB"],
	"AU": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"AW": ["H", "hB"],
	"AX": ["H"],
	"AZ": [
		"H",
		"hB",
		"h"
	],
	"BA": [
		"H",
		"hB",
		"h"
	],
	"BB": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"BD": [
		"h",
		"hB",
		"H"
	],
	"BE": ["H", "hB"],
	"BF": ["H", "hB"],
	"BG": [
		"H",
		"hB",
		"h"
	],
	"BH": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"BI": ["H", "h"],
	"BJ": ["H", "hB"],
	"BL": ["H", "hB"],
	"BM": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"BN": [
		"hb",
		"hB",
		"h",
		"H"
	],
	"BO": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"BQ": ["H"],
	"BR": ["H", "hB"],
	"BS": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"BT": ["h", "H"],
	"BW": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"BY": ["H", "h"],
	"BZ": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"CA": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"CC": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"CD": ["hB", "H"],
	"CF": [
		"H",
		"h",
		"hB"
	],
	"CG": ["H", "hB"],
	"CH": [
		"H",
		"hB",
		"h"
	],
	"CI": ["H", "hB"],
	"CK": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"CL": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"CM": [
		"H",
		"h",
		"hB"
	],
	"CN": [
		"H",
		"hB",
		"hb",
		"h"
	],
	"CO": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"CP": ["H"],
	"CR": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"CU": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"CV": ["H", "hB"],
	"CW": ["H", "hB"],
	"CX": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"CY": [
		"h",
		"H",
		"hb",
		"hB"
	],
	"CZ": ["H"],
	"DE": ["H", "hB"],
	"DG": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"DJ": ["h", "H"],
	"DK": ["H"],
	"DM": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"DO": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"DZ": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"EA": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"EC": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"EE": ["H", "hB"],
	"EG": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"EH": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"ER": ["h", "H"],
	"ES": [
		"H",
		"hB",
		"h",
		"hb"
	],
	"ET": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"FI": ["H"],
	"FJ": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"FK": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"FM": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"FO": ["H", "h"],
	"FR": ["H", "hB"],
	"GA": ["H", "hB"],
	"GB": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"GD": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"GE": [
		"H",
		"hB",
		"h"
	],
	"GF": ["H", "hB"],
	"GG": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"GH": ["h", "H"],
	"GI": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"GL": ["H", "h"],
	"GM": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"GN": ["H", "hB"],
	"GP": ["H", "hB"],
	"GQ": [
		"H",
		"hB",
		"h",
		"hb"
	],
	"GR": [
		"h",
		"H",
		"hb",
		"hB"
	],
	"GT": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"GU": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"GW": ["H", "hB"],
	"GY": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"HK": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"HN": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"HR": ["H", "hB"],
	"HU": ["H", "h"],
	"IC": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"ID": ["H"],
	"IE": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"IL": ["H", "hB"],
	"IM": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"IN": ["h", "H"],
	"IO": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"IQ": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"IR": ["hB", "H"],
	"IS": ["H"],
	"IT": ["H", "hB"],
	"JE": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"JM": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"JO": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"JP": [
		"H",
		"K",
		"h"
	],
	"KE": [
		"hB",
		"hb",
		"H",
		"h"
	],
	"KG": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"KH": [
		"hB",
		"h",
		"H",
		"hb"
	],
	"KI": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"KM": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"KN": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"KP": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"KR": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"KW": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"KY": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"KZ": ["H", "hB"],
	"LA": [
		"H",
		"hb",
		"hB",
		"h"
	],
	"LB": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"LC": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"LI": [
		"H",
		"hB",
		"h"
	],
	"LK": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"LR": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"LS": ["h", "H"],
	"LT": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"LU": [
		"H",
		"h",
		"hB"
	],
	"LV": [
		"H",
		"hB",
		"hb",
		"h"
	],
	"LY": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"MA": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"MC": ["H", "hB"],
	"MD": ["H", "hB"],
	"ME": [
		"H",
		"hB",
		"h"
	],
	"MF": ["H", "hB"],
	"MG": ["H", "h"],
	"MH": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"MK": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"ML": ["H"],
	"MM": [
		"hB",
		"hb",
		"H",
		"h"
	],
	"MN": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"MO": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"MP": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"MQ": ["H", "hB"],
	"MR": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"MS": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"MT": ["H", "h"],
	"MU": ["H", "h"],
	"MV": ["H", "h"],
	"MW": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"MX": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"MY": [
		"hb",
		"hB",
		"h",
		"H"
	],
	"MZ": ["H", "hB"],
	"NA": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"NC": ["H", "hB"],
	"NE": ["H"],
	"NF": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"NG": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"NI": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"NL": ["H", "hB"],
	"NO": ["H", "h"],
	"NP": [
		"H",
		"h",
		"hB"
	],
	"NR": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"NU": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"NZ": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"OM": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"PA": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"PE": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"PF": [
		"H",
		"h",
		"hB"
	],
	"PG": ["h", "H"],
	"PH": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"PK": [
		"h",
		"hB",
		"H"
	],
	"PL": ["H", "h"],
	"PM": ["H", "hB"],
	"PN": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"PR": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"PS": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"PT": ["H", "hB"],
	"PW": ["h", "H"],
	"PY": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"QA": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"RE": ["H", "hB"],
	"RO": ["H", "hB"],
	"RS": [
		"H",
		"hB",
		"h"
	],
	"RU": ["H"],
	"RW": ["H", "h"],
	"SA": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"SB": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"SC": [
		"H",
		"h",
		"hB"
	],
	"SD": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"SE": ["H"],
	"SG": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"SH": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"SI": ["H", "hB"],
	"SJ": ["H"],
	"SK": ["H"],
	"SL": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"SM": [
		"H",
		"h",
		"hB"
	],
	"SN": [
		"H",
		"h",
		"hB"
	],
	"SO": ["h", "H"],
	"SR": ["H", "hB"],
	"SS": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"ST": ["H", "hB"],
	"SV": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"SX": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"SY": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"SZ": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"TA": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"TC": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"TD": [
		"h",
		"H",
		"hB"
	],
	"TF": [
		"H",
		"h",
		"hB"
	],
	"TG": ["H", "hB"],
	"TH": ["H", "h"],
	"TJ": ["H", "h"],
	"TL": [
		"H",
		"hB",
		"hb",
		"h"
	],
	"TM": ["H", "h"],
	"TN": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"TO": ["h", "H"],
	"TR": ["H", "hB"],
	"TT": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"TW": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"TZ": [
		"hB",
		"hb",
		"H",
		"h"
	],
	"UA": [
		"H",
		"hB",
		"h"
	],
	"UG": [
		"hB",
		"hb",
		"H",
		"h"
	],
	"UM": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"US": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"UY": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"UZ": [
		"H",
		"hB",
		"h"
	],
	"VA": [
		"H",
		"h",
		"hB"
	],
	"VC": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"VE": [
		"h",
		"H",
		"hB",
		"hb"
	],
	"VG": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"VI": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"VN": ["H", "h"],
	"VU": ["h", "H"],
	"WF": ["H", "hB"],
	"WS": ["h", "H"],
	"XK": [
		"H",
		"hB",
		"h"
	],
	"YE": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"YT": ["H", "hB"],
	"ZA": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"ZM": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"ZW": ["H", "h"],
	"af-ZA": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"ar-001": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"ca-ES": [
		"H",
		"h",
		"hB"
	],
	"en-001": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"en-HK": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"en-IL": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"en-MY": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"es-BR": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"es-ES": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"es-GQ": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"fr-CA": [
		"H",
		"h",
		"hB"
	],
	"gl-ES": [
		"H",
		"h",
		"hB"
	],
	"gu-IN": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"hi-IN": [
		"hB",
		"h",
		"H"
	],
	"it-CH": [
		"H",
		"h",
		"hB"
	],
	"it-IT": [
		"H",
		"h",
		"hB"
	],
	"kn-IN": [
		"hB",
		"h",
		"H"
	],
	"ml-IN": [
		"hB",
		"h",
		"H"
	],
	"mr-IN": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"pa-IN": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"ta-IN": [
		"hB",
		"h",
		"hb",
		"H"
	],
	"te-IN": [
		"hB",
		"h",
		"H"
	],
	"zu-ZA": [
		"H",
		"hB",
		"hb",
		"h"
	]
};
function getBestPattern(skeleton, locale) {
	var skeletonCopy = "";
	for (var patternPos = 0; patternPos < skeleton.length; patternPos++) {
		var patternChar = skeleton.charAt(patternPos);
		if (patternChar === "j") {
			var extraLength = 0;
			while (patternPos + 1 < skeleton.length && skeleton.charAt(patternPos + 1) === patternChar) {
				extraLength++;
				patternPos++;
			}
			var hourLen = 1 + (extraLength & 1);
			var dayPeriodLen = extraLength < 2 ? 1 : 3 + (extraLength >> 1);
			var dayPeriodChar = "a";
			var hourChar = getDefaultHourSymbolFromLocale(locale);
			if (hourChar == "H" || hourChar == "k") dayPeriodLen = 0;
			while (dayPeriodLen-- > 0) skeletonCopy += dayPeriodChar;
			while (hourLen-- > 0) skeletonCopy = hourChar + skeletonCopy;
		} else if (patternChar === "J") skeletonCopy += "H";
		else skeletonCopy += patternChar;
	}
	return skeletonCopy;
}
function getDefaultHourSymbolFromLocale(locale) {
	var hourCycle = locale.hourCycle;
	if (hourCycle === void 0 && locale.hourCycles && locale.hourCycles.length) hourCycle = locale.hourCycles[0];
	if (hourCycle) switch (hourCycle) {
		case "h24": return "k";
		case "h23": return "H";
		case "h12": return "h";
		case "h11": return "K";
		default: throw new Error("Invalid hourCycle");
	}
	var languageTag = locale.language;
	var regionTag;
	if (languageTag !== "root") regionTag = locale.maximize().region;
	return (timeData[regionTag || ""] || timeData[languageTag || ""] || timeData["".concat(languageTag, "-001")] || timeData["001"])[0];
}
init_tslib_es6();
var _a;
var SPACE_SEPARATOR_START_REGEX = new RegExp("^".concat(SPACE_SEPARATOR_REGEX.source, "*"));
var SPACE_SEPARATOR_END_REGEX = new RegExp("".concat(SPACE_SEPARATOR_REGEX.source, "*$"));
function createLocation(start, end) {
	return {
		start,
		end
	};
}
var hasNativeStartsWith = !!String.prototype.startsWith && "_a".startsWith("a", 1);
var hasNativeFromCodePoint = !!String.fromCodePoint;
var hasNativeFromEntries = !!Object.fromEntries;
var hasNativeCodePointAt = !!String.prototype.codePointAt;
var hasTrimStart = !!String.prototype.trimStart;
var hasTrimEnd = !!String.prototype.trimEnd;
var isSafeInteger = !!Number.isSafeInteger ? Number.isSafeInteger : function(n) {
	return typeof n === "number" && isFinite(n) && Math.floor(n) === n && Math.abs(n) <= 9007199254740991;
};
var REGEX_SUPPORTS_U_AND_Y = true;
try {
	REGEX_SUPPORTS_U_AND_Y = ((_a = RE("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) === null || _a === void 0 ? void 0 : _a[0]) === "a";
} catch (_) {
	REGEX_SUPPORTS_U_AND_Y = false;
}
var startsWith = hasNativeStartsWith ? function startsWith(s, search, position) {
	return s.startsWith(search, position);
} : function startsWith(s, search, position) {
	return s.slice(position, position + search.length) === search;
};
var fromCodePoint = hasNativeFromCodePoint ? String.fromCodePoint : function fromCodePoint() {
	var codePoints = [];
	for (var _i = 0; _i < arguments.length; _i++) codePoints[_i] = arguments[_i];
	var elements = "";
	var length = codePoints.length;
	var i = 0;
	var code;
	while (length > i) {
		code = codePoints[i++];
		if (code > 1114111) throw RangeError(code + " is not a valid code point");
		elements += code < 65536 ? String.fromCharCode(code) : String.fromCharCode(((code -= 65536) >> 10) + 55296, code % 1024 + 56320);
	}
	return elements;
};
var fromEntries = hasNativeFromEntries ? Object.fromEntries : function fromEntries(entries) {
	var obj = {};
	for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
		var _a = entries_1[_i], k = _a[0];
		obj[k] = _a[1];
	}
	return obj;
};
var codePointAt = hasNativeCodePointAt ? function codePointAt(s, index) {
	return s.codePointAt(index);
} : function codePointAt(s, index) {
	var size = s.length;
	if (index < 0 || index >= size) return;
	var first = s.charCodeAt(index);
	var second;
	return first < 55296 || first > 56319 || index + 1 === size || (second = s.charCodeAt(index + 1)) < 56320 || second > 57343 ? first : (first - 55296 << 10) + (second - 56320) + 65536;
};
var trimStart = hasTrimStart ? function trimStart(s) {
	return s.trimStart();
} : function trimStart(s) {
	return s.replace(SPACE_SEPARATOR_START_REGEX, "");
};
var trimEnd = hasTrimEnd ? function trimEnd(s) {
	return s.trimEnd();
} : function trimEnd(s) {
	return s.replace(SPACE_SEPARATOR_END_REGEX, "");
};
function RE(s, flag) {
	return new RegExp(s, flag);
}
var matchIdentifierAtIndex;
if (REGEX_SUPPORTS_U_AND_Y) {
	var IDENTIFIER_PREFIX_RE_1 = RE("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
	matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
		var _a;
		IDENTIFIER_PREFIX_RE_1.lastIndex = index;
		return (_a = IDENTIFIER_PREFIX_RE_1.exec(s)[1]) !== null && _a !== void 0 ? _a : "";
	};
} else matchIdentifierAtIndex = function matchIdentifierAtIndex(s, index) {
	var match = [];
	while (true) {
		var c = codePointAt(s, index);
		if (c === void 0 || _isWhiteSpace(c) || _isPatternSyntax(c)) break;
		match.push(c);
		index += c >= 65536 ? 2 : 1;
	}
	return fromCodePoint.apply(void 0, match);
};
var Parser = function() {
	function Parser(message, options) {
		if (options === void 0) options = {};
		this.message = message;
		this.position = {
			offset: 0,
			line: 1,
			column: 1
		};
		this.ignoreTag = !!options.ignoreTag;
		this.locale = options.locale;
		this.requiresOtherClause = !!options.requiresOtherClause;
		this.shouldParseSkeletons = !!options.shouldParseSkeletons;
	}
	Parser.prototype.parse = function() {
		if (this.offset() !== 0) throw Error("parser can only be used once");
		return this.parseMessage(0, "", false);
	};
	Parser.prototype.parseMessage = function(nestingLevel, parentArgType, expectingCloseTag) {
		var elements = [];
		while (!this.isEOF()) {
			var char = this.char();
			if (char === 123) {
				var result = this.parseArgument(nestingLevel, expectingCloseTag);
				if (result.err) return result;
				elements.push(result.val);
			} else if (char === 125 && nestingLevel > 0) break;
			else if (char === 35 && (parentArgType === "plural" || parentArgType === "selectordinal")) {
				var position = this.clonePosition();
				this.bump();
				elements.push({
					type: TYPE.pound,
					location: createLocation(position, this.clonePosition())
				});
			} else if (char === 60 && !this.ignoreTag && this.peek() === 47) {
				if (expectingCloseTag) break;
				else return this.error(ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(this.clonePosition(), this.clonePosition()));
			} else if (char === 60 && !this.ignoreTag && _isAlpha(this.peek() || 0)) {
				var result = this.parseTag(nestingLevel, parentArgType);
				if (result.err) return result;
				elements.push(result.val);
			} else {
				var result = this.parseLiteral(nestingLevel, parentArgType);
				if (result.err) return result;
				elements.push(result.val);
			}
		}
		return {
			val: elements,
			err: null
		};
	};
	Parser.prototype.parseTag = function(nestingLevel, parentArgType) {
		var startPosition = this.clonePosition();
		this.bump();
		var tagName = this.parseTagName();
		this.bumpSpace();
		if (this.bumpIf("/>")) return {
			val: {
				type: TYPE.literal,
				value: "<".concat(tagName, "/>"),
				location: createLocation(startPosition, this.clonePosition())
			},
			err: null
		};
		else if (this.bumpIf(">")) {
			var childrenResult = this.parseMessage(nestingLevel + 1, parentArgType, true);
			if (childrenResult.err) return childrenResult;
			var children = childrenResult.val;
			var endTagStartPosition = this.clonePosition();
			if (this.bumpIf("</")) {
				if (this.isEOF() || !_isAlpha(this.char())) return this.error(ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
				var closingTagNameStartPosition = this.clonePosition();
				if (tagName !== this.parseTagName()) return this.error(ErrorKind.UNMATCHED_CLOSING_TAG, createLocation(closingTagNameStartPosition, this.clonePosition()));
				this.bumpSpace();
				if (!this.bumpIf(">")) return this.error(ErrorKind.INVALID_TAG, createLocation(endTagStartPosition, this.clonePosition()));
				return {
					val: {
						type: TYPE.tag,
						value: tagName,
						children,
						location: createLocation(startPosition, this.clonePosition())
					},
					err: null
				};
			} else return this.error(ErrorKind.UNCLOSED_TAG, createLocation(startPosition, this.clonePosition()));
		} else return this.error(ErrorKind.INVALID_TAG, createLocation(startPosition, this.clonePosition()));
	};
	Parser.prototype.parseTagName = function() {
		var startOffset = this.offset();
		this.bump();
		while (!this.isEOF() && _isPotentialElementNameChar(this.char())) this.bump();
		return this.message.slice(startOffset, this.offset());
	};
	Parser.prototype.parseLiteral = function(nestingLevel, parentArgType) {
		var start = this.clonePosition();
		var value = "";
		while (true) {
			var parseQuoteResult = this.tryParseQuote(parentArgType);
			if (parseQuoteResult) {
				value += parseQuoteResult;
				continue;
			}
			var parseUnquotedResult = this.tryParseUnquoted(nestingLevel, parentArgType);
			if (parseUnquotedResult) {
				value += parseUnquotedResult;
				continue;
			}
			var parseLeftAngleResult = this.tryParseLeftAngleBracket();
			if (parseLeftAngleResult) {
				value += parseLeftAngleResult;
				continue;
			}
			break;
		}
		var location = createLocation(start, this.clonePosition());
		return {
			val: {
				type: TYPE.literal,
				value,
				location
			},
			err: null
		};
	};
	Parser.prototype.tryParseLeftAngleBracket = function() {
		if (!this.isEOF() && this.char() === 60 && (this.ignoreTag || !_isAlphaOrSlash(this.peek() || 0))) {
			this.bump();
			return "<";
		}
		return null;
	};
	Parser.prototype.tryParseQuote = function(parentArgType) {
		if (this.isEOF() || this.char() !== 39) return null;
		switch (this.peek()) {
			case 39:
				this.bump();
				this.bump();
				return "'";
			case 123:
			case 60:
			case 62:
			case 125: break;
			case 35:
				if (parentArgType === "plural" || parentArgType === "selectordinal") break;
				return null;
			default: return null;
		}
		this.bump();
		var codePoints = [this.char()];
		this.bump();
		while (!this.isEOF()) {
			var ch = this.char();
			if (ch === 39) {
				if (this.peek() === 39) {
					codePoints.push(39);
					this.bump();
				} else {
					this.bump();
					break;
				}
			} else codePoints.push(ch);
			this.bump();
		}
		return fromCodePoint.apply(void 0, codePoints);
	};
	Parser.prototype.tryParseUnquoted = function(nestingLevel, parentArgType) {
		if (this.isEOF()) return null;
		var ch = this.char();
		if (ch === 60 || ch === 123 || ch === 35 && (parentArgType === "plural" || parentArgType === "selectordinal") || ch === 125 && nestingLevel > 0) return null;
		else {
			this.bump();
			return fromCodePoint(ch);
		}
	};
	Parser.prototype.parseArgument = function(nestingLevel, expectingCloseTag) {
		var openingBracePosition = this.clonePosition();
		this.bump();
		this.bumpSpace();
		if (this.isEOF()) return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
		if (this.char() === 125) {
			this.bump();
			return this.error(ErrorKind.EMPTY_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
		}
		var value = this.parseIdentifierIfPossible().value;
		if (!value) return this.error(ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
		this.bumpSpace();
		if (this.isEOF()) return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
		switch (this.char()) {
			case 125:
				this.bump();
				return {
					val: {
						type: TYPE.argument,
						value,
						location: createLocation(openingBracePosition, this.clonePosition())
					},
					err: null
				};
			case 44:
				this.bump();
				this.bumpSpace();
				if (this.isEOF()) return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
				return this.parseArgumentOptions(nestingLevel, expectingCloseTag, value, openingBracePosition);
			default: return this.error(ErrorKind.MALFORMED_ARGUMENT, createLocation(openingBracePosition, this.clonePosition()));
		}
	};
	Parser.prototype.parseIdentifierIfPossible = function() {
		var startingPosition = this.clonePosition();
		var startOffset = this.offset();
		var value = matchIdentifierAtIndex(this.message, startOffset);
		var endOffset = startOffset + value.length;
		this.bumpTo(endOffset);
		return {
			value,
			location: createLocation(startingPosition, this.clonePosition())
		};
	};
	Parser.prototype.parseArgumentOptions = function(nestingLevel, expectingCloseTag, value, openingBracePosition) {
		var _a;
		var typeStartPosition = this.clonePosition();
		var argType = this.parseIdentifierIfPossible().value;
		var typeEndPosition = this.clonePosition();
		switch (argType) {
			case "": return this.error(ErrorKind.EXPECT_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
			case "number":
			case "date":
			case "time":
				this.bumpSpace();
				var styleAndLocation = null;
				if (this.bumpIf(",")) {
					this.bumpSpace();
					var styleStartPosition = this.clonePosition();
					var result = this.parseSimpleArgStyleIfPossible();
					if (result.err) return result;
					var style = trimEnd(result.val);
					if (style.length === 0) return this.error(ErrorKind.EXPECT_ARGUMENT_STYLE, createLocation(this.clonePosition(), this.clonePosition()));
					styleAndLocation = {
						style,
						styleLocation: createLocation(styleStartPosition, this.clonePosition())
					};
				}
				var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
				if (argCloseResult.err) return argCloseResult;
				var location_1 = createLocation(openingBracePosition, this.clonePosition());
				if (styleAndLocation && startsWith(styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style, "::", 0)) {
					var skeleton = trimStart(styleAndLocation.style.slice(2));
					if (argType === "number") {
						var result = this.parseNumberSkeletonFromString(skeleton, styleAndLocation.styleLocation);
						if (result.err) return result;
						return {
							val: {
								type: TYPE.number,
								value,
								location: location_1,
								style: result.val
							},
							err: null
						};
					} else {
						if (skeleton.length === 0) return this.error(ErrorKind.EXPECT_DATE_TIME_SKELETON, location_1);
						var dateTimePattern = skeleton;
						if (this.locale) dateTimePattern = getBestPattern(skeleton, this.locale);
						var style = {
							type: SKELETON_TYPE.dateTime,
							pattern: dateTimePattern,
							location: styleAndLocation.styleLocation,
							parsedOptions: this.shouldParseSkeletons ? parseDateTimeSkeleton(dateTimePattern) : {}
						};
						return {
							val: {
								type: argType === "date" ? TYPE.date : TYPE.time,
								value,
								location: location_1,
								style
							},
							err: null
						};
					}
				}
				return {
					val: {
						type: argType === "number" ? TYPE.number : argType === "date" ? TYPE.date : TYPE.time,
						value,
						location: location_1,
						style: (_a = styleAndLocation === null || styleAndLocation === void 0 ? void 0 : styleAndLocation.style) !== null && _a !== void 0 ? _a : null
					},
					err: null
				};
			case "plural":
			case "selectordinal":
			case "select":
				var typeEndPosition_1 = this.clonePosition();
				this.bumpSpace();
				if (!this.bumpIf(",")) return this.error(ErrorKind.EXPECT_SELECT_ARGUMENT_OPTIONS, createLocation(typeEndPosition_1, __assign({}, typeEndPosition_1)));
				this.bumpSpace();
				var identifierAndLocation = this.parseIdentifierIfPossible();
				var pluralOffset = 0;
				if (argType !== "select" && identifierAndLocation.value === "offset") {
					if (!this.bumpIf(":")) return this.error(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, createLocation(this.clonePosition(), this.clonePosition()));
					this.bumpSpace();
					var result = this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ErrorKind.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
					if (result.err) return result;
					this.bumpSpace();
					identifierAndLocation = this.parseIdentifierIfPossible();
					pluralOffset = result.val;
				}
				var optionsResult = this.tryParsePluralOrSelectOptions(nestingLevel, argType, expectingCloseTag, identifierAndLocation);
				if (optionsResult.err) return optionsResult;
				var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
				if (argCloseResult.err) return argCloseResult;
				var location_2 = createLocation(openingBracePosition, this.clonePosition());
				if (argType === "select") return {
					val: {
						type: TYPE.select,
						value,
						options: fromEntries(optionsResult.val),
						location: location_2
					},
					err: null
				};
				else return {
					val: {
						type: TYPE.plural,
						value,
						options: fromEntries(optionsResult.val),
						offset: pluralOffset,
						pluralType: argType === "plural" ? "cardinal" : "ordinal",
						location: location_2
					},
					err: null
				};
			default: return this.error(ErrorKind.INVALID_ARGUMENT_TYPE, createLocation(typeStartPosition, typeEndPosition));
		}
	};
	Parser.prototype.tryParseArgumentClose = function(openingBracePosition) {
		if (this.isEOF() || this.char() !== 125) return this.error(ErrorKind.EXPECT_ARGUMENT_CLOSING_BRACE, createLocation(openingBracePosition, this.clonePosition()));
		this.bump();
		return {
			val: true,
			err: null
		};
	};
	Parser.prototype.parseSimpleArgStyleIfPossible = function() {
		var nestedBraces = 0;
		var startPosition = this.clonePosition();
		while (!this.isEOF()) switch (this.char()) {
			case 39:
				this.bump();
				var apostrophePosition = this.clonePosition();
				if (!this.bumpUntil("'")) return this.error(ErrorKind.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, createLocation(apostrophePosition, this.clonePosition()));
				this.bump();
				break;
			case 123:
				nestedBraces += 1;
				this.bump();
				break;
			case 125:
				if (nestedBraces > 0) nestedBraces -= 1;
				else return {
					val: this.message.slice(startPosition.offset, this.offset()),
					err: null
				};
				break;
			default: this.bump();
		}
		return {
			val: this.message.slice(startPosition.offset, this.offset()),
			err: null
		};
	};
	Parser.prototype.parseNumberSkeletonFromString = function(skeleton, location) {
		var tokens = [];
		try {
			tokens = parseNumberSkeletonFromString(skeleton);
		} catch (e) {
			return this.error(ErrorKind.INVALID_NUMBER_SKELETON, location);
		}
		return {
			val: {
				type: SKELETON_TYPE.number,
				tokens,
				location,
				parsedOptions: this.shouldParseSkeletons ? parseNumberSkeleton(tokens) : {}
			},
			err: null
		};
	};
	Parser.prototype.tryParsePluralOrSelectOptions = function(nestingLevel, parentArgType, expectCloseTag, parsedFirstIdentifier) {
		var _a;
		var hasOtherClause = false;
		var options = [];
		var parsedSelectors = /* @__PURE__ */ new Set();
		var selector = parsedFirstIdentifier.value, selectorLocation = parsedFirstIdentifier.location;
		while (true) {
			if (selector.length === 0) {
				var startPosition = this.clonePosition();
				if (parentArgType !== "select" && this.bumpIf("=")) {
					var result = this.tryParseDecimalInteger(ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, ErrorKind.INVALID_PLURAL_ARGUMENT_SELECTOR);
					if (result.err) return result;
					selectorLocation = createLocation(startPosition, this.clonePosition());
					selector = this.message.slice(startPosition.offset, this.offset());
				} else break;
			}
			if (parsedSelectors.has(selector)) return this.error(parentArgType === "select" ? ErrorKind.DUPLICATE_SELECT_ARGUMENT_SELECTOR : ErrorKind.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, selectorLocation);
			if (selector === "other") hasOtherClause = true;
			this.bumpSpace();
			var openingBracePosition = this.clonePosition();
			if (!this.bumpIf("{")) return this.error(parentArgType === "select" ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, createLocation(this.clonePosition(), this.clonePosition()));
			var fragmentResult = this.parseMessage(nestingLevel + 1, parentArgType, expectCloseTag);
			if (fragmentResult.err) return fragmentResult;
			var argCloseResult = this.tryParseArgumentClose(openingBracePosition);
			if (argCloseResult.err) return argCloseResult;
			options.push([selector, {
				value: fragmentResult.val,
				location: createLocation(openingBracePosition, this.clonePosition())
			}]);
			parsedSelectors.add(selector);
			this.bumpSpace();
			_a = this.parseIdentifierIfPossible(), selector = _a.value, selectorLocation = _a.location;
		}
		if (options.length === 0) return this.error(parentArgType === "select" ? ErrorKind.EXPECT_SELECT_ARGUMENT_SELECTOR : ErrorKind.EXPECT_PLURAL_ARGUMENT_SELECTOR, createLocation(this.clonePosition(), this.clonePosition()));
		if (this.requiresOtherClause && !hasOtherClause) return this.error(ErrorKind.MISSING_OTHER_CLAUSE, createLocation(this.clonePosition(), this.clonePosition()));
		return {
			val: options,
			err: null
		};
	};
	Parser.prototype.tryParseDecimalInteger = function(expectNumberError, invalidNumberError) {
		var sign = 1;
		var startingPosition = this.clonePosition();
		if (this.bumpIf("+")) {} else if (this.bumpIf("-")) sign = -1;
		var hasDigits = false;
		var decimal = 0;
		while (!this.isEOF()) {
			var ch = this.char();
			if (ch >= 48 && ch <= 57) {
				hasDigits = true;
				decimal = decimal * 10 + (ch - 48);
				this.bump();
			} else break;
		}
		var location = createLocation(startingPosition, this.clonePosition());
		if (!hasDigits) return this.error(expectNumberError, location);
		decimal *= sign;
		if (!isSafeInteger(decimal)) return this.error(invalidNumberError, location);
		return {
			val: decimal,
			err: null
		};
	};
	Parser.prototype.offset = function() {
		return this.position.offset;
	};
	Parser.prototype.isEOF = function() {
		return this.offset() === this.message.length;
	};
	Parser.prototype.clonePosition = function() {
		return {
			offset: this.position.offset,
			line: this.position.line,
			column: this.position.column
		};
	};
	Parser.prototype.char = function() {
		var offset = this.position.offset;
		if (offset >= this.message.length) throw Error("out of bound");
		var code = codePointAt(this.message, offset);
		if (code === void 0) throw Error("Offset ".concat(offset, " is at invalid UTF-16 code unit boundary"));
		return code;
	};
	Parser.prototype.error = function(kind, location) {
		return {
			val: null,
			err: {
				kind,
				message: this.message,
				location
			}
		};
	};
	Parser.prototype.bump = function() {
		if (this.isEOF()) return;
		var code = this.char();
		if (code === 10) {
			this.position.line += 1;
			this.position.column = 1;
			this.position.offset += 1;
		} else {
			this.position.column += 1;
			this.position.offset += code < 65536 ? 1 : 2;
		}
	};
	Parser.prototype.bumpIf = function(prefix) {
		if (startsWith(this.message, prefix, this.offset())) {
			for (var i = 0; i < prefix.length; i++) this.bump();
			return true;
		}
		return false;
	};
	Parser.prototype.bumpUntil = function(pattern) {
		var currentOffset = this.offset();
		var index = this.message.indexOf(pattern, currentOffset);
		if (index >= 0) {
			this.bumpTo(index);
			return true;
		} else {
			this.bumpTo(this.message.length);
			return false;
		}
	};
	Parser.prototype.bumpTo = function(targetOffset) {
		if (this.offset() > targetOffset) throw Error("targetOffset ".concat(targetOffset, " must be greater than or equal to the current offset ").concat(this.offset()));
		targetOffset = Math.min(targetOffset, this.message.length);
		while (true) {
			var offset = this.offset();
			if (offset === targetOffset) break;
			if (offset > targetOffset) throw Error("targetOffset ".concat(targetOffset, " is at invalid UTF-16 code unit boundary"));
			this.bump();
			if (this.isEOF()) break;
		}
	};
	Parser.prototype.bumpSpace = function() {
		while (!this.isEOF() && _isWhiteSpace(this.char())) this.bump();
	};
	Parser.prototype.peek = function() {
		if (this.isEOF()) return null;
		var code = this.char();
		var offset = this.offset();
		var nextCode = this.message.charCodeAt(offset + (code >= 65536 ? 2 : 1));
		return nextCode !== null && nextCode !== void 0 ? nextCode : null;
	};
	return Parser;
}();
function _isAlpha(codepoint) {
	return codepoint >= 97 && codepoint <= 122 || codepoint >= 65 && codepoint <= 90;
}
function _isAlphaOrSlash(codepoint) {
	return _isAlpha(codepoint) || codepoint === 47;
}
function _isPotentialElementNameChar(c) {
	return c === 45 || c === 46 || c >= 48 && c <= 57 || c === 95 || c >= 97 && c <= 122 || c >= 65 && c <= 90 || c == 183 || c >= 192 && c <= 214 || c >= 216 && c <= 246 || c >= 248 && c <= 893 || c >= 895 && c <= 8191 || c >= 8204 && c <= 8205 || c >= 8255 && c <= 8256 || c >= 8304 && c <= 8591 || c >= 11264 && c <= 12271 || c >= 12289 && c <= 55295 || c >= 63744 && c <= 64975 || c >= 65008 && c <= 65533 || c >= 65536 && c <= 983039;
}
function _isWhiteSpace(c) {
	return c >= 9 && c <= 13 || c === 32 || c === 133 || c >= 8206 && c <= 8207 || c === 8232 || c === 8233;
}
function _isPatternSyntax(c) {
	return c >= 33 && c <= 35 || c === 36 || c >= 37 && c <= 39 || c === 40 || c === 41 || c === 42 || c === 43 || c === 44 || c === 45 || c >= 46 && c <= 47 || c >= 58 && c <= 59 || c >= 60 && c <= 62 || c >= 63 && c <= 64 || c === 91 || c === 92 || c === 93 || c === 94 || c === 96 || c === 123 || c === 124 || c === 125 || c === 126 || c === 161 || c >= 162 && c <= 165 || c === 166 || c === 167 || c === 169 || c === 171 || c === 172 || c === 174 || c === 176 || c === 177 || c === 182 || c === 187 || c === 191 || c === 215 || c === 247 || c >= 8208 && c <= 8213 || c >= 8214 && c <= 8215 || c === 8216 || c === 8217 || c === 8218 || c >= 8219 && c <= 8220 || c === 8221 || c === 8222 || c === 8223 || c >= 8224 && c <= 8231 || c >= 8240 && c <= 8248 || c === 8249 || c === 8250 || c >= 8251 && c <= 8254 || c >= 8257 && c <= 8259 || c === 8260 || c === 8261 || c === 8262 || c >= 8263 && c <= 8273 || c === 8274 || c === 8275 || c >= 8277 && c <= 8286 || c >= 8592 && c <= 8596 || c >= 8597 && c <= 8601 || c >= 8602 && c <= 8603 || c >= 8604 && c <= 8607 || c === 8608 || c >= 8609 && c <= 8610 || c === 8611 || c >= 8612 && c <= 8613 || c === 8614 || c >= 8615 && c <= 8621 || c === 8622 || c >= 8623 && c <= 8653 || c >= 8654 && c <= 8655 || c >= 8656 && c <= 8657 || c === 8658 || c === 8659 || c === 8660 || c >= 8661 && c <= 8691 || c >= 8692 && c <= 8959 || c >= 8960 && c <= 8967 || c === 8968 || c === 8969 || c === 8970 || c === 8971 || c >= 8972 && c <= 8991 || c >= 8992 && c <= 8993 || c >= 8994 && c <= 9e3 || c === 9001 || c === 9002 || c >= 9003 && c <= 9083 || c === 9084 || c >= 9085 && c <= 9114 || c >= 9115 && c <= 9139 || c >= 9140 && c <= 9179 || c >= 9180 && c <= 9185 || c >= 9186 && c <= 9254 || c >= 9255 && c <= 9279 || c >= 9280 && c <= 9290 || c >= 9291 && c <= 9311 || c >= 9472 && c <= 9654 || c === 9655 || c >= 9656 && c <= 9664 || c === 9665 || c >= 9666 && c <= 9719 || c >= 9720 && c <= 9727 || c >= 9728 && c <= 9838 || c === 9839 || c >= 9840 && c <= 10087 || c === 10088 || c === 10089 || c === 10090 || c === 10091 || c === 10092 || c === 10093 || c === 10094 || c === 10095 || c === 10096 || c === 10097 || c === 10098 || c === 10099 || c === 10100 || c === 10101 || c >= 10132 && c <= 10175 || c >= 10176 && c <= 10180 || c === 10181 || c === 10182 || c >= 10183 && c <= 10213 || c === 10214 || c === 10215 || c === 10216 || c === 10217 || c === 10218 || c === 10219 || c === 10220 || c === 10221 || c === 10222 || c === 10223 || c >= 10224 && c <= 10239 || c >= 10240 && c <= 10495 || c >= 10496 && c <= 10626 || c === 10627 || c === 10628 || c === 10629 || c === 10630 || c === 10631 || c === 10632 || c === 10633 || c === 10634 || c === 10635 || c === 10636 || c === 10637 || c === 10638 || c === 10639 || c === 10640 || c === 10641 || c === 10642 || c === 10643 || c === 10644 || c === 10645 || c === 10646 || c === 10647 || c === 10648 || c >= 10649 && c <= 10711 || c === 10712 || c === 10713 || c === 10714 || c === 10715 || c >= 10716 && c <= 10747 || c === 10748 || c === 10749 || c >= 10750 && c <= 11007 || c >= 11008 && c <= 11055 || c >= 11056 && c <= 11076 || c >= 11077 && c <= 11078 || c >= 11079 && c <= 11084 || c >= 11085 && c <= 11123 || c >= 11124 && c <= 11125 || c >= 11126 && c <= 11157 || c === 11158 || c >= 11159 && c <= 11263 || c >= 11776 && c <= 11777 || c === 11778 || c === 11779 || c === 11780 || c === 11781 || c >= 11782 && c <= 11784 || c === 11785 || c === 11786 || c === 11787 || c === 11788 || c === 11789 || c >= 11790 && c <= 11798 || c === 11799 || c >= 11800 && c <= 11801 || c === 11802 || c === 11803 || c === 11804 || c === 11805 || c >= 11806 && c <= 11807 || c === 11808 || c === 11809 || c === 11810 || c === 11811 || c === 11812 || c === 11813 || c === 11814 || c === 11815 || c === 11816 || c === 11817 || c >= 11818 && c <= 11822 || c === 11823 || c >= 11824 && c <= 11833 || c >= 11834 && c <= 11835 || c >= 11836 && c <= 11839 || c === 11840 || c === 11841 || c === 11842 || c >= 11843 && c <= 11855 || c >= 11856 && c <= 11857 || c === 11858 || c >= 11859 && c <= 11903 || c >= 12289 && c <= 12291 || c === 12296 || c === 12297 || c === 12298 || c === 12299 || c === 12300 || c === 12301 || c === 12302 || c === 12303 || c === 12304 || c === 12305 || c >= 12306 && c <= 12307 || c === 12308 || c === 12309 || c === 12310 || c === 12311 || c === 12312 || c === 12313 || c === 12314 || c === 12315 || c === 12316 || c === 12317 || c >= 12318 && c <= 12319 || c === 12320 || c === 12336 || c === 64830 || c === 64831 || c >= 65093 && c <= 65094;
}
init_tslib_es6();
function pruneLocation(els) {
	els.forEach(function(el) {
		delete el.location;
		if (isSelectElement(el) || isPluralElement(el)) for (var k in el.options) {
			delete el.options[k].location;
			pruneLocation(el.options[k].value);
		}
		else if (isNumberElement(el) && isNumberSkeleton(el.style)) delete el.style.location;
		else if ((isDateElement(el) || isTimeElement(el)) && isDateTimeSkeleton(el.style)) delete el.style.location;
		else if (isTagElement(el)) pruneLocation(el.children);
	});
}
function parse(message, opts) {
	if (opts === void 0) opts = {};
	opts = __assign({
		shouldParseSkeletons: true,
		requiresOtherClause: true
	}, opts);
	var result = new Parser(message, opts).parse();
	if (result.err) {
		var error = SyntaxError(ErrorKind[result.err.kind]);
		error.location = result.err.location;
		error.originalMessage = result.err.message;
		throw error;
	}
	if (!(opts === null || opts === void 0 ? void 0 : opts.captureLocation)) pruneLocation(result.val);
	return result.val;
}
var require_types = __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SKELETON_TYPE = exports.TYPE = void 0;
	exports.isLiteralElement = isLiteralElement;
	exports.isArgumentElement = isArgumentElement;
	exports.isNumberElement = isNumberElement;
	exports.isDateElement = isDateElement;
	exports.isTimeElement = isTimeElement;
	exports.isSelectElement = isSelectElement;
	exports.isPluralElement = isPluralElement;
	exports.isPoundElement = isPoundElement;
	exports.isTagElement = isTagElement;
	exports.isNumberSkeleton = isNumberSkeleton;
	exports.isDateTimeSkeleton = isDateTimeSkeleton;
	exports.createLiteralElement = createLiteralElement;
	exports.createNumberElement = createNumberElement;
	var TYPE;
	(function(TYPE) {
		TYPE[TYPE["literal"] = 0] = "literal";
		TYPE[TYPE["argument"] = 1] = "argument";
		TYPE[TYPE["number"] = 2] = "number";
		TYPE[TYPE["date"] = 3] = "date";
		TYPE[TYPE["time"] = 4] = "time";
		TYPE[TYPE["select"] = 5] = "select";
		TYPE[TYPE["plural"] = 6] = "plural";
		TYPE[TYPE["pound"] = 7] = "pound";
		TYPE[TYPE["tag"] = 8] = "tag";
	})(TYPE || (exports.TYPE = TYPE = {}));
	var SKELETON_TYPE;
	(function(SKELETON_TYPE) {
		SKELETON_TYPE[SKELETON_TYPE["number"] = 0] = "number";
		SKELETON_TYPE[SKELETON_TYPE["dateTime"] = 1] = "dateTime";
	})(SKELETON_TYPE || (exports.SKELETON_TYPE = SKELETON_TYPE = {}));
	function isLiteralElement(el) {
		return el.type === TYPE.literal;
	}
	function isArgumentElement(el) {
		return el.type === TYPE.argument;
	}
	function isNumberElement(el) {
		return el.type === TYPE.number;
	}
	function isDateElement(el) {
		return el.type === TYPE.date;
	}
	function isTimeElement(el) {
		return el.type === TYPE.time;
	}
	function isSelectElement(el) {
		return el.type === TYPE.select;
	}
	function isPluralElement(el) {
		return el.type === TYPE.plural;
	}
	function isPoundElement(el) {
		return el.type === TYPE.pound;
	}
	function isTagElement(el) {
		return el.type === TYPE.tag;
	}
	function isNumberSkeleton(el) {
		return !!(el && typeof el === "object" && el.type === SKELETON_TYPE.number);
	}
	function isDateTimeSkeleton(el) {
		return !!(el && typeof el === "object" && el.type === SKELETON_TYPE.dateTime);
	}
	function createLiteralElement(value) {
		return {
			type: TYPE.literal,
			value
		};
	}
	function createNumberElement(value, style) {
		return {
			type: TYPE.number,
			value,
			style
		};
	}
}));
var require_printer = __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	init_tslib_es6(), __toCommonJS(tslib_es6_exports);
	require_types();
}));
var import_types = require_types();
require_printer();
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
new RegExp(`^${VAR_IDENTIFIER}\\d+$`);
var GT_UNINDEXED_IDENTIFIER_REGEX = new RegExp(`^${VAR_IDENTIFIER}$`);
function isGTUnindexedSelectElement(child) {
	return child.type === import_types.TYPE.select && GT_UNINDEXED_IDENTIFIER_REGEX.test(child.value) && !!child.options.other && (child.options.other.value.length === 0 || child.options.other.value.length > 0 && child.options.other.value[0]?.type === import_types.TYPE.literal);
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
		result.push(icuString.slice(start, start + 4 + 1));
		result.push(String(i + 1));
		result.push(icuString.slice(start + 4 + 1, otherStart));
		result.push("{}");
		result.push(icuString.slice(otherEnd, end));
		current = end;
	}
	result.push(icuString.slice(current, icuString.length));
	return result.join("");
}
function memoize(fn, options) {
	var cache = options && options.cache ? options.cache : cacheDefault;
	var serializer = options && options.serializer ? options.serializer : serializerDefault;
	return (options && options.strategy ? options.strategy : strategyDefault)(fn, {
		cache,
		serializer
	});
}
function isPrimitive(value) {
	return value == null || typeof value === "number" || typeof value === "boolean";
}
function monadic(fn, cache, serializer, arg) {
	var cacheKey = isPrimitive(arg) ? arg : serializer(arg);
	var computedValue = cache.get(cacheKey);
	if (typeof computedValue === "undefined") {
		computedValue = fn.call(this, arg);
		cache.set(cacheKey, computedValue);
	}
	return computedValue;
}
function variadic(fn, cache, serializer) {
	var args = Array.prototype.slice.call(arguments, 3);
	var cacheKey = serializer(args);
	var computedValue = cache.get(cacheKey);
	if (typeof computedValue === "undefined") {
		computedValue = fn.apply(this, args);
		cache.set(cacheKey, computedValue);
	}
	return computedValue;
}
function assemble(fn, context, strategy, cache, serialize) {
	return strategy.bind(context, fn, cache, serialize);
}
function strategyDefault(fn, options) {
	var strategy = fn.length === 1 ? monadic : variadic;
	return assemble(fn, this, strategy, options.cache.create(), options.serializer);
}
function strategyVariadic(fn, options) {
	return assemble(fn, this, variadic, options.cache.create(), options.serializer);
}
function strategyMonadic(fn, options) {
	return assemble(fn, this, monadic, options.cache.create(), options.serializer);
}
var serializerDefault = function() {
	return JSON.stringify(arguments);
};
var ObjectWithoutPrototypeCache = function() {
	function ObjectWithoutPrototypeCache() {
		this.cache = Object.create(null);
	}
	ObjectWithoutPrototypeCache.prototype.get = function(key) {
		return this.cache[key];
	};
	ObjectWithoutPrototypeCache.prototype.set = function(key, value) {
		this.cache[key] = value;
	};
	return ObjectWithoutPrototypeCache;
}();
var cacheDefault = { create: function create() {
	return new ObjectWithoutPrototypeCache();
} };
var strategies = {
	variadic: strategyVariadic,
	monadic: strategyMonadic
};
init_tslib_es6();
var ErrorCode;
(function(ErrorCode) {
	ErrorCode["MISSING_VALUE"] = "MISSING_VALUE";
	ErrorCode["INVALID_VALUE"] = "INVALID_VALUE";
	ErrorCode["MISSING_INTL_API"] = "MISSING_INTL_API";
})(ErrorCode || (ErrorCode = {}));
var FormatError = function(_super) {
	__extends(FormatError, _super);
	function FormatError(msg, code, originalMessage) {
		var _this = _super.call(this, msg) || this;
		_this.code = code;
		_this.originalMessage = originalMessage;
		return _this;
	}
	FormatError.prototype.toString = function() {
		return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
	};
	return FormatError;
}(Error);
var InvalidValueError = function(_super) {
	__extends(InvalidValueError, _super);
	function InvalidValueError(variableId, value, options, originalMessage) {
		return _super.call(this, "Invalid values for \"".concat(variableId, "\": \"").concat(value, "\". Options are \"").concat(Object.keys(options).join("\", \""), "\""), ErrorCode.INVALID_VALUE, originalMessage) || this;
	}
	return InvalidValueError;
}(FormatError);
var InvalidValueTypeError = function(_super) {
	__extends(InvalidValueTypeError, _super);
	function InvalidValueTypeError(value, type, originalMessage) {
		return _super.call(this, "Value for \"".concat(value, "\" must be of type ").concat(type), ErrorCode.INVALID_VALUE, originalMessage) || this;
	}
	return InvalidValueTypeError;
}(FormatError);
var MissingValueError = function(_super) {
	__extends(MissingValueError, _super);
	function MissingValueError(variableId, originalMessage) {
		return _super.call(this, "The intl string context variable \"".concat(variableId, "\" was not provided to the string \"").concat(originalMessage, "\""), ErrorCode.MISSING_VALUE, originalMessage) || this;
	}
	return MissingValueError;
}(FormatError);
var PART_TYPE;
(function(PART_TYPE) {
	PART_TYPE[PART_TYPE["literal"] = 0] = "literal";
	PART_TYPE[PART_TYPE["object"] = 1] = "object";
})(PART_TYPE || (PART_TYPE = {}));
function mergeLiteral(parts) {
	if (parts.length < 2) return parts;
	return parts.reduce(function(all, part) {
		var lastPart = all[all.length - 1];
		if (!lastPart || lastPart.type !== PART_TYPE.literal || part.type !== PART_TYPE.literal) all.push(part);
		else lastPart.value += part.value;
		return all;
	}, []);
}
function isFormatXMLElementFn(el) {
	return typeof el === "function";
}
function formatToParts(els, locales, formatters, formats, values, currentPluralValue, originalMessage) {
	if (els.length === 1 && isLiteralElement(els[0])) return [{
		type: PART_TYPE.literal,
		value: els[0].value
	}];
	var result = [];
	for (var _i = 0, els_1 = els; _i < els_1.length; _i++) {
		var el = els_1[_i];
		if (isLiteralElement(el)) {
			result.push({
				type: PART_TYPE.literal,
				value: el.value
			});
			continue;
		}
		if (isPoundElement(el)) {
			if (typeof currentPluralValue === "number") result.push({
				type: PART_TYPE.literal,
				value: formatters.getNumberFormat(locales).format(currentPluralValue)
			});
			continue;
		}
		var varName = el.value;
		if (!(values && varName in values)) throw new MissingValueError(varName, originalMessage);
		var value = values[varName];
		if (isArgumentElement(el)) {
			if (!value || typeof value === "string" || typeof value === "number") value = typeof value === "string" || typeof value === "number" ? String(value) : "";
			result.push({
				type: typeof value === "string" ? PART_TYPE.literal : PART_TYPE.object,
				value
			});
			continue;
		}
		if (isDateElement(el)) {
			var style = typeof el.style === "string" ? formats.date[el.style] : isDateTimeSkeleton(el.style) ? el.style.parsedOptions : void 0;
			result.push({
				type: PART_TYPE.literal,
				value: formatters.getDateTimeFormat(locales, style).format(value)
			});
			continue;
		}
		if (isTimeElement(el)) {
			var style = typeof el.style === "string" ? formats.time[el.style] : isDateTimeSkeleton(el.style) ? el.style.parsedOptions : formats.time.medium;
			result.push({
				type: PART_TYPE.literal,
				value: formatters.getDateTimeFormat(locales, style).format(value)
			});
			continue;
		}
		if (isNumberElement(el)) {
			var style = typeof el.style === "string" ? formats.number[el.style] : isNumberSkeleton(el.style) ? el.style.parsedOptions : void 0;
			if (style && style.scale) value = value * (style.scale || 1);
			result.push({
				type: PART_TYPE.literal,
				value: formatters.getNumberFormat(locales, style).format(value)
			});
			continue;
		}
		if (isTagElement(el)) {
			var children = el.children, value_1 = el.value;
			var formatFn = values[value_1];
			if (!isFormatXMLElementFn(formatFn)) throw new InvalidValueTypeError(value_1, "function", originalMessage);
			var chunks = formatFn(formatToParts(children, locales, formatters, formats, values, currentPluralValue).map(function(p) {
				return p.value;
			}));
			if (!Array.isArray(chunks)) chunks = [chunks];
			result.push.apply(result, chunks.map(function(c) {
				return {
					type: typeof c === "string" ? PART_TYPE.literal : PART_TYPE.object,
					value: c
				};
			}));
		}
		if (isSelectElement(el)) {
			var opt = el.options[value] || el.options.other;
			if (!opt) throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
			result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values));
			continue;
		}
		if (isPluralElement(el)) {
			var opt = el.options["=".concat(value)];
			if (!opt) {
				if (!Intl.PluralRules) throw new FormatError("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", ErrorCode.MISSING_INTL_API, originalMessage);
				var rule = formatters.getPluralRules(locales, { type: el.pluralType }).select(value - (el.offset || 0));
				opt = el.options[rule] || el.options.other;
			}
			if (!opt) throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
			result.push.apply(result, formatToParts(opt.value, locales, formatters, formats, values, value - (el.offset || 0)));
			continue;
		}
	}
	return mergeLiteral(result);
}
init_tslib_es6();
function mergeConfig(c1, c2) {
	if (!c2) return c1;
	return __assign(__assign(__assign({}, c1 || {}), c2 || {}), Object.keys(c1).reduce(function(all, k) {
		all[k] = __assign(__assign({}, c1[k]), c2[k] || {});
		return all;
	}, {}));
}
function mergeConfigs(defaultConfig, configs) {
	if (!configs) return defaultConfig;
	return Object.keys(defaultConfig).reduce(function(all, k) {
		all[k] = mergeConfig(defaultConfig[k], configs[k]);
		return all;
	}, __assign({}, defaultConfig));
}
function createFastMemoizeCache(store) {
	return { create: function() {
		return {
			get: function(key) {
				return store[key];
			},
			set: function(key, value) {
				store[key] = value;
			}
		};
	} };
}
function createDefaultFormatters(cache) {
	if (cache === void 0) cache = {
		number: {},
		dateTime: {},
		pluralRules: {}
	};
	return {
		getNumberFormat: memoize(function() {
			var _a;
			var args = [];
			for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
			return new ((_a = Intl.NumberFormat).bind.apply(_a, __spreadArray([void 0], args, false)))();
		}, {
			cache: createFastMemoizeCache(cache.number),
			strategy: strategies.variadic
		}),
		getDateTimeFormat: memoize(function() {
			var _a;
			var args = [];
			for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
			return new ((_a = Intl.DateTimeFormat).bind.apply(_a, __spreadArray([void 0], args, false)))();
		}, {
			cache: createFastMemoizeCache(cache.dateTime),
			strategy: strategies.variadic
		}),
		getPluralRules: memoize(function() {
			var _a;
			var args = [];
			for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
			return new ((_a = Intl.PluralRules).bind.apply(_a, __spreadArray([void 0], args, false)))();
		}, {
			cache: createFastMemoizeCache(cache.pluralRules),
			strategy: strategies.variadic
		})
	};
}
var IntlMessageFormat = function() {
	function IntlMessageFormat(message, locales, overrideFormats, opts) {
		if (locales === void 0) locales = IntlMessageFormat.defaultLocale;
		var _this = this;
		this.formatterCache = {
			number: {},
			dateTime: {},
			pluralRules: {}
		};
		this.format = function(values) {
			var parts = _this.formatToParts(values);
			if (parts.length === 1) return parts[0].value;
			var result = parts.reduce(function(all, part) {
				if (!all.length || part.type !== PART_TYPE.literal || typeof all[all.length - 1] !== "string") all.push(part.value);
				else all[all.length - 1] += part.value;
				return all;
			}, []);
			if (result.length <= 1) return result[0] || "";
			return result;
		};
		this.formatToParts = function(values) {
			return formatToParts(_this.ast, _this.locales, _this.formatters, _this.formats, values, void 0, _this.message);
		};
		this.resolvedOptions = function() {
			var _a;
			return { locale: ((_a = _this.resolvedLocale) === null || _a === void 0 ? void 0 : _a.toString()) || Intl.NumberFormat.supportedLocalesOf(_this.locales)[0] };
		};
		this.getAst = function() {
			return _this.ast;
		};
		this.locales = locales;
		this.resolvedLocale = IntlMessageFormat.resolveLocale(locales);
		if (typeof message === "string") {
			this.message = message;
			if (!IntlMessageFormat.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
			var _a = opts || {};
			_a.formatters;
			var parseOpts = __rest(_a, ["formatters"]);
			this.ast = IntlMessageFormat.__parse(message, __assign(__assign({}, parseOpts), { locale: this.resolvedLocale }));
		} else this.ast = message;
		if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
		this.formats = mergeConfigs(IntlMessageFormat.formats, overrideFormats);
		this.formatters = opts && opts.formatters || createDefaultFormatters(this.formatterCache);
	}
	Object.defineProperty(IntlMessageFormat, "defaultLocale", {
		get: function() {
			if (!IntlMessageFormat.memoizedDefaultLocale) IntlMessageFormat.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale;
			return IntlMessageFormat.memoizedDefaultLocale;
		},
		enumerable: false,
		configurable: true
	});
	IntlMessageFormat.memoizedDefaultLocale = null;
	IntlMessageFormat.resolveLocale = function(locales) {
		if (typeof Intl.Locale === "undefined") return;
		var supportedLocales = Intl.NumberFormat.supportedLocalesOf(locales);
		if (supportedLocales.length > 0) return new Intl.Locale(supportedLocales[0]);
		return new Intl.Locale(typeof locales === "string" ? locales : locales[0]);
	};
	IntlMessageFormat.__parse = parse;
	IntlMessageFormat.formats = {
		number: {
			integer: { maximumFractionDigits: 0 },
			currency: { style: "currency" },
			percent: { style: "percent" }
		},
		date: {
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
		},
		time: {
			short: {
				hour: "numeric",
				minute: "numeric"
			},
			medium: {
				hour: "numeric",
				minute: "numeric",
				second: "numeric"
			},
			long: {
				hour: "numeric",
				minute: "numeric",
				second: "numeric",
				timeZoneName: "short"
			},
			full: {
				hour: "numeric",
				minute: "numeric",
				second: "numeric",
				timeZoneName: "short"
			}
		}
	};
	return IntlMessageFormat;
}();
var scriptExceptions = [
	"Cham",
	"Jamo",
	"Kawi",
	"Lisu",
	"Toto",
	"Thai"
];
var isCustomLanguage = (language) => {
	return language >= "qaa" && language <= "qtz";
};
var _isValidLocale = (locale, customMapping) => {
	if (customMapping?.[locale] && typeof customMapping[locale] === "object" && "code" in customMapping[locale] && customMapping[locale].code) locale = customMapping[locale].code;
	try {
		const { language, region, script } = intlCache.get("Locale", locale);
		if (locale.split("-").length !== (() => {
			let partCount = 1;
			if (region) partCount += 1;
			if (script) partCount += 1;
			return partCount;
		})()) return false;
		if (intlCache.get("DisplayNames", ["en"], { type: "language" }).of(language) === language && !isCustomLanguage(language)) return false;
		if (region) {
			if (intlCache.get("DisplayNames", ["en"], { type: "region" }).of(region) === region) return false;
		}
		if (script) {
			if (intlCache.get("DisplayNames", ["en"], { type: "script" }).of(script) === script && !scriptExceptions.includes(script)) return false;
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
function checkTwoLocalesAreSameDialect(codeA, codeB) {
	const { language: languageA, region: regionA, script: scriptA } = intlCache.get("Locale", codeA);
	const { language: languageB, region: regionB, script: scriptB } = intlCache.get("Locale", codeB);
	if (languageA !== languageB) return false;
	if (regionA && regionB && regionA !== regionB) return false;
	if (scriptA && scriptB && scriptA !== scriptB) return false;
	return true;
}
function _isSameDialect(...locales) {
	try {
		const flattenedCodes = locales.flat().map(_standardizeLocale);
		for (let i = 0; i < flattenedCodes.length; i++) for (let j = i + 1; j < flattenedCodes.length; j++) if (!checkTwoLocalesAreSameDialect(flattenedCodes[i], flattenedCodes[j])) return false;
		return true;
	} catch (error) {
		console.error(error);
		return false;
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
function _requiresTranslation(sourceLocale, targetLocale, approvedLocales, customMapping) {
	if (!_isValidLocale(sourceLocale, customMapping) || !_isValidLocale(targetLocale, customMapping) || approvedLocales && approvedLocales.some((approvedLocale) => !_isValidLocale(approvedLocale, customMapping))) return false;
	if (_isSameDialect(sourceLocale, targetLocale)) return false;
	if (approvedLocales && !approvedLocales.some((approvedLocale) => _isSameLanguage(targetLocale, approvedLocale))) return false;
	return true;
}
var getCustomProperty = (customMapping, locale, property) => {
	if (customMapping?.[locale]) {
		if (typeof customMapping[locale] === "string") return property === "name" ? customMapping[locale] : void 0;
		return customMapping[locale][property];
	}
};
var shouldUseCanonicalLocale = (locale, customMapping) => {
	return !!(customMapping?.[locale] && typeof customMapping[locale] === "object" && "code" in customMapping[locale] && customMapping[locale].code && _isValidLocale(customMapping[locale].code));
};
function _getLocaleEmoji(locale, customMapping) {
	const aliasedLocale = locale;
	if (customMapping && shouldUseCanonicalLocale(locale, customMapping)) locale = customMapping[locale].code;
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
	if (customMapping) {
		let merged = {};
		for (const l of lArray) {
			const value = customMapping[l];
			if (value) {
				if (typeof value === "string") merged.name ||= value;
				else if (value) merged = {
					...value,
					...merged
				};
			}
		}
		return merged;
	}
}
function _getLocaleProperties(locale, defaultLocale = "en", customMapping) {
	const aliasedLocale = locale;
	if (customMapping && shouldUseCanonicalLocale(locale, customMapping)) locale = customMapping[locale].code;
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
		const nameWithRegionCode = customLocaleProperties?.nameWithRegionCode || baseRegion ? `${languageName} (${baseRegion})` : name;
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
		const codeParts = code?.split("-");
		let languageCode = codeParts?.[0] || code || "";
		let regionCode = codeParts.length > 2 ? codeParts?.[2] : codeParts?.[1] || "";
		let scriptCode = codeParts?.[3] || "";
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
function _determineLocale(locales, approvedLocales, customMapping) {
	if (typeof locales === "string") locales = [locales];
	locales = locales.filter((locale) => _isValidLocale(locale, customMapping)).map(_standardizeLocale);
	approvedLocales = approvedLocales.filter((locale) => _isValidLocale(locale, customMapping)).map(_standardizeLocale);
	for (const locale of locales) {
		const candidates = approvedLocales.filter((approvedLocale) => _isSameLanguage(locale, approvedLocale));
		const getMatchingCode = ({ locale, languageCode, minimizedCode, regionCode, scriptCode }) => {
			const locales = [
				locale,
				`${languageCode}-${regionCode}`,
				`${languageCode}-${scriptCode}`,
				minimizedCode
			];
			for (const l of locales) if (candidates.includes(l)) return l;
			return null;
		};
		const { languageCode, ...codes } = _getLocaleProperties(locale);
		const matchingCode = getMatchingCode({
			locale,
			languageCode,
			...codes
		}) || getMatchingCode({
			locale: languageCode,
			..._getLocaleProperties(languageCode)
		});
		if (matchingCode) return matchingCode;
	}
}
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
var fetchLogger = defaultLogger.child("fetch");
defaultLogger.child("validation");
defaultLogger.child("formatting");
defaultLogger.child("locale");
var gtInstanceLogger = defaultLogger.child("GT instance");
function _formatCutoff({ value, locales = "en", options = {} }) {
	return intlCache.get("CutoffFormat", locales, options).format(value);
}
function _formatMessageICU(message, locales = "en", variables = {}) {
	return new IntlMessageFormat(message, locales).format(variables)?.toString() ?? "";
}
function _formatMessageString(message) {
	return message;
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
	}).format(value);
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
function _formatRelativeTimeFromDate({ date, baseDate, locales = ["en"], options = {} }) {
	const { value, unit } = _selectRelativeTimeUnit(date, baseDate);
	return _formatRelativeTime({
		value,
		unit,
		locales,
		options
	});
}
function _formatRelativeTime({ value, unit, locales = ["en"], options = {} }) {
	return intlCache.get("RelativeTimeFormat", locales, {
		style: "long",
		numeric: "auto",
		...options
	}).format(value, unit);
}
function _getLocaleName(locale, defaultLocale = "en", customMapping) {
	const aliasedLocale = locale;
	if (customMapping && shouldUseCanonicalLocale(locale, customMapping)) locale = customMapping[locale].code;
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
	if (scriptCode) return isRtlScript(scriptCode) ? "rtl" : "ltr";
	if (languageCode) return isRtlLanguage(languageCode) ? "rtl" : "ltr";
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
	if ("textInfo" in locale && typeof locale.textInfo === "object" && locale.textInfo !== null && "direction" in locale.textInfo && (locale.textInfo?.direction === "rtl" || locale.textInfo?.direction === "ltr")) return locale.textInfo?.direction;
}
function isRtlScript(script) {
	return script ? RTL_SCRIPTS.has(script.toLowerCase()) : false;
}
function isRtlLanguage(language) {
	return language ? RTL_LANGUAGES.has(language.toLowerCase()) : false;
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
	let reverseCustomMapping;
	if (customMapping) reverseCustomMapping = Object.fromEntries(Object.entries(customMapping).filter(([, value]) => value && typeof value === "object" && "code" in value).map(([key, value]) => [value.code, key]));
	return reverseCustomMapping?.[locale] || locale;
}
function _resolveCanonicalLocale(locale, customMapping) {
	if (customMapping && shouldUseCanonicalLocale(locale, customMapping)) return customMapping[locale].code;
	return locale;
}
var LocaleConfig = class {
	constructor({ defaultLocale = "en", locales = [], customMapping } = {}) {
		this.defaultLocale = defaultLocale;
		this.locales = locales;
		this.customMapping = customMapping;
	}
	get translationLocales() {
		return this.locales.length ? this.locales : void 0;
	}
	resolveCanonicalLocaleList(locales) {
		return locales.map((locale) => this.resolveCanonicalLocale(locale));
	}
	resolveCanonicalLocaleArgs(locales) {
		return locales.map((locale) => Array.isArray(locale) ? this.resolveCanonicalLocaleList(locale) : this.resolveCanonicalLocale(locale));
	}
	toLocaleList(locales) {
		return Array.isArray(locales) ? locales : [locales];
	}
	getFormattingLocales(targetLocale, locales) {
		return (locales !== void 0 ? this.toLocaleList(locales) : [
			targetLocale,
			this.defaultLocale,
			"en"
		]).filter((locale) => !!locale).map((locale) => this.resolveCanonicalLocale(locale));
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
		return _formatRelativeTimeFromDate({
			date,
			baseDate: baseDate ?? /* @__PURE__ */ new Date(),
			locales: this.getFormattingLocales(targetLocale, locales),
			options: intlOptions
		});
	}
	formatCutoff(value, targetLocale, options = {}) {
		const { locales, ...formatOptions } = options;
		return _formatCutoff({
			value,
			locales: this.getFormattingLocales(targetLocale, locales),
			options: formatOptions
		});
	}
	formatMessage(message, targetLocale, options = {}) {
		const { locales, variables, dataFormat } = options;
		if (dataFormat === "STRING") return _formatMessageString(message);
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
	requiresTranslation(targetLocale, sourceLocale = this.defaultLocale, approvedLocales = this.translationLocales) {
		return _requiresTranslation(this.resolveCanonicalLocale(sourceLocale), this.resolveCanonicalLocale(targetLocale), approvedLocales ? this.resolveCanonicalLocaleList(approvedLocales) : void 0, this.customMapping);
	}
	determineLocale(locales, approvedLocales = this.locales) {
		const approvedLocalePairs = approvedLocales.map((locale) => ({
			locale,
			canonicalLocale: this.resolveCanonicalLocale(locale)
		}));
		const resolvedLocale = _determineLocale(Array.isArray(locales) ? this.resolveCanonicalLocaleList(locales) : this.resolveCanonicalLocale(locales), approvedLocalePairs.map(({ canonicalLocale }) => canonicalLocale), this.customMapping);
		if (!resolvedLocale) return void 0;
		return approvedLocalePairs.find(({ canonicalLocale }) => canonicalLocale === resolvedLocale)?.locale || this.resolveAliasLocale(resolvedLocale);
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
		return _isSameDialect(...this.resolveCanonicalLocaleArgs(locales));
	}
	isSameLanguage(...locales) {
		return _isSameLanguage(...this.resolveCanonicalLocaleArgs(locales));
	}
	isSupersetLocale(superLocale, subLocale) {
		return _isSupersetLocale(this.resolveCanonicalLocale(superLocale), this.resolveCanonicalLocale(subLocale));
	}
};
function isValidLocale(locale, customMapping) {
	return _isValidLocale(locale, customMapping);
}
function resolveCanonicalLocale(locale, customMapping) {
	return _resolveCanonicalLocale(locale, customMapping);
}
function standardizeLocale(locale) {
	return _standardizeLocale(locale);
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
var ApiError = class extends Error {
	constructor(error, code, message) {
		super(error);
		this.name = "ApiError";
		this.code = code;
		this.message = message;
	}
	getCode() {
		return this.code;
	}
	getMessage() {
		return this.message;
	}
};
function hashString(string) {
	return bytesToHex(sha256(utf8ToBytes(string))).slice(0, 16);
}
function hashSource({ source, context, id, maxChars, dataFormat }, hashFunction = hashString) {
	let sanitizedSource;
	if (dataFormat === "JSX") sanitizedSource = sanitizeJsxChildren(source);
	else sanitizedSource = source;
	return hashFunction(stableStringify({
		source: sanitizedSource,
		...id && { id },
		...context && { context },
		...maxChars != null && { maxChars: Math.abs(maxChars) },
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
var GT_ERROR_PREFIX = "GT Error:";
var translationTimeoutError = (timeout) => `${GT_ERROR_PREFIX} Translation request timed out after ${timeout}ms.`;
var translationRequestFailedError = (error) => `${GT_ERROR_PREFIX} Translation request failed. Error: ${error}`;
var apiError = (status, statusText, error) => `${GT_ERROR_PREFIX} API returned error status. Status: ${status}, Status Text: ${statusText}, Error: ${error}`;
var noTargetLocaleProvidedError = (functionName) => `${GT_ERROR_PREFIX} Cannot call \`${functionName}\` without a specified locale. Either pass a locale to the \`${functionName}\` function or specify a targetLocale in the GT constructor.`;
var noSourceLocaleProvidedError = (functionName) => `${GT_ERROR_PREFIX} Cannot call \`${functionName}\` without a specified locale. Either pass a locale to the \`${functionName}\` function or specify a sourceLocale in the GT constructor.`;
var noProjectIdProvidedError = (functionName) => `${GT_ERROR_PREFIX} Cannot call \`${functionName}\` without a specified project ID. Either pass a project ID to the \`${functionName}\` function or specify a projectId in the GT constructor.`;
var noApiKeyProvidedError = (functionName) => `${GT_ERROR_PREFIX} Cannot call \`${functionName}\` without a specified API key. Either pass an API key to the \`${functionName}\` function or specify an apiKey in the GT constructor.`;
var invalidLocaleError = (locale) => `${GT_ERROR_PREFIX} Invalid locale: ${locale}.`;
var invalidLocalesError = (locales) => `${GT_ERROR_PREFIX} Invalid locales: ${locales.join(", ")}.`;
async function fetchWithTimeout(url, options, timeout) {
	const controller = new AbortController();
	const signal = controller.signal;
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
function handleFetchError(error, timeout) {
	if (error instanceof Error && error.name === "AbortError") {
		const errorMessage = translationTimeoutError(timeout);
		fetchLogger.error(errorMessage);
		throw new Error(errorMessage);
	}
	const errorMessage = translationRequestFailedError(error instanceof Error ? error.message : String(error));
	fetchLogger.error(errorMessage);
	throw error;
}
var API_VERSION$1 = "2026-03-06.v1";
function generateRequestHeaders(config, excludeContentType = false) {
	const authHeaders = {
		...!excludeContentType && { "Content-Type": "application/json" },
		"x-gt-project-id": config.projectId
	};
	if (config.apiKey) if (config.apiKey.startsWith("gtx-internal-")) authHeaders["x-gt-internal-api-key"] = config.apiKey;
	else authHeaders["x-gt-api-key"] = config.apiKey;
	authHeaders["gt-api-version"] = API_VERSION$1;
	return authHeaders;
}
var MAX_RETRIES = 3;
var INITIAL_DELAY_MS = 500;
function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
function getRetryDelay(policy, attempt) {
	switch (policy) {
		case "linear": return INITIAL_DELAY_MS * (attempt + 1);
		case "exponential": return INITIAL_DELAY_MS * 2 ** attempt;
		default: return 0;
	}
}
async function apiRequest(config, endpoint, options) {
	const timeout = options?.timeout ?? 6e4;
	const url = `${config.baseUrl || "https://api2.gtx.dev"}${endpoint}`;
	const method = options?.method ?? "POST";
	const retryPolicy = options?.retryPolicy ?? "exponential";
	const maxRetries = retryPolicy === "none" ? 0 : MAX_RETRIES;
	const requestInit = {
		method,
		headers: generateRequestHeaders(config)
	};
	if (options?.body !== void 0) requestInit.body = JSON.stringify(options.body);
	for (let attempt = 0; attempt <= maxRetries; attempt++) {
		let response;
		try {
			response = await fetchWithTimeout(url, requestInit, timeout);
		} catch (error) {
			if (attempt < maxRetries) {
				await sleep(getRetryDelay(retryPolicy, attempt));
				continue;
			}
			handleFetchError(error, timeout);
		}
		if (response.status >= 500 && attempt < maxRetries) {
			await sleep(getRetryDelay(retryPolicy, attempt));
			continue;
		}
		await validateResponse(response);
		return await response.json();
	}
	throw new Error("Max retries exceeded");
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
			dataFormat: metadata?.dataFormat ?? "STRING",
			...metadata ?? {}
		});
		hashOrder?.push(hash);
		requestsObject[hash] = {
			source,
			metadata
		};
	}
	const response = await apiRequest({
		...config,
		baseUrl: config.baseUrl || "https://runtime2.gtx.dev"
	}, `/v2/translate`, {
		body: {
			requests: requestsObject,
			targetLocale: globalMetadata.targetLocale,
			sourceLocale: globalMetadata.sourceLocale,
			metadata: globalMetadata
		},
		timeout,
		retryPolicy: "none"
	});
	if (hashOrder) return hashOrder.map((hash) => response[hash] ?? {
		success: false,
		error: "No translation returned",
		code: 500
	});
	return response;
}
async function _setupProject(files, config, options) {
	return apiRequest(config, "/v2/project/setup/generate", {
		body: {
			files: files.map((f) => ({
				branchId: f.branchId,
				fileId: f.fileId,
				versionId: f.versionId
			})),
			locales: options?.locales,
			force: options?.force
		},
		timeout: options?.timeoutMs
	});
}
function createBatches(items, batchSize) {
	const batches = [];
	for (let i = 0; i < items.length; i += batchSize) batches.push(items.slice(i, i + batchSize));
	return batches;
}
async function processBatches(items, processor, options = {}) {
	const { batchSize = 100, parallel = true } = options;
	if (items.length === 0) return {
		data: [],
		count: 0,
		batchCount: 0
	};
	const batches = createBatches(items, batchSize);
	const allItems = [];
	if (parallel) {
		const results = await Promise.all(batches.map((batch) => processor(batch)));
		for (const result of results) if (result) allItems.push(...result);
	} else for (const batch of batches) {
		const result = await processor(batch);
		if (result) allItems.push(...result);
	}
	return {
		data: allItems,
		count: allItems.length,
		batchCount: batches.length
	};
}
async function _enqueueFiles(files, options, config) {
	validateFileFormatTransforms(files);
	const result = await processBatches(files, async (batch) => {
		const apiResult = await apiRequest(config, "/v2/project/translations/enqueue", {
			body: {
				files: batch.map((f) => ({
					branchId: f.branchId,
					fileId: f.fileId,
					versionId: f.versionId,
					fileName: f.fileName,
					transformFormat: f.transformFormat
				})),
				targetLocales: options.targetLocales,
				sourceLocale: options.sourceLocale,
				requireApproval: options.requireApproval,
				modelProvider: options.modelProvider,
				force: options.force
			},
			timeout: options.timeout
		});
		return Array.from(Object.entries(apiResult.jobData));
	}, { batchSize: 100 });
	return {
		jobData: Object.fromEntries(result.data.map(([jobId, jobData]) => [jobId, jobData])),
		locales: options.targetLocales,
		message: `Successfully enqueued ${result.count} file translation jobs in ${result.batchCount} batch(es)`
	};
}
async function _createTag(options, config) {
	return await apiRequest(config, "/v2/project/tags/create", { body: {
		tagId: options.tagId,
		files: options.files,
		...options.message && { message: options.message }
	} });
}
async function _downloadFileBatch(requests, options, config) {
	return processBatches(requests, async (batch) => {
		return (await apiRequest(config, "/v2/project/files/download", {
			body: batch,
			timeout: options.timeout
		})).files.map((file) => ({
			...file,
			data: decode(file.data)
		}));
	}, { batchSize: 100 });
}
async function _submitUserEditDiffs(payload, config, options = {}) {
	await processBatches(payload.diffs, async (batch) => {
		await apiRequest(config, "/v2/project/files/diffs", {
			body: { diffs: batch },
			timeout: options.timeout
		});
		return [{ success: true }];
	}, { batchSize: 100 });
	return { success: true };
}
function _getRegionProperties(region, defaultLocale = "en", customMapping) {
	defaultLocale ||= "en";
	try {
		return {
			code: region,
			name: intlCache.get("DisplayNames", [defaultLocale, "en"], { type: "region" }).of(region) || region,
			emoji: getRegionEmoji(region),
			...customMapping?.[region]
		};
	} catch {
		return {
			code: region,
			name: region,
			emoji: defaultEmoji,
			...customMapping?.[region]
		};
	}
}
async function _uploadSourceFiles(files, options, config) {
	return processBatches(files, async (batch) => {
		return (await apiRequest(config, "/v2/project/files/upload-files", {
			body: {
				data: batch.map(({ source }) => ({ source: {
					content: encode(source.content),
					fileName: source.fileName,
					fileFormat: source.fileFormat,
					locale: source.locale,
					dataFormat: source.dataFormat,
					formatMetadata: source.formatMetadata,
					fileId: source.fileId,
					versionId: source.versionId,
					branchId: source.branchId,
					incomingBranchId: source.incomingBranchId,
					checkedOutBranchId: source.checkedOutBranchId
				} })),
				sourceLocale: options.sourceLocale
			},
			timeout: options.timeout
		})).uploadedFiles || [];
	}, { batchSize: 100 });
}
async function _uploadTranslations(files, options, config) {
	validateFileFormatTransforms(files.map(({ source }) => source));
	return processBatches(files, async (batch) => {
		return (await apiRequest(config, "/v2/project/files/upload-translations", {
			body: {
				data: batch.map(({ source, translations }) => ({
					source: {
						content: encode(source.content),
						fileName: source.fileName,
						fileFormat: source.fileFormat,
						transformFormat: source.transformFormat,
						locale: source.locale,
						dataFormat: source.dataFormat,
						formatMetadata: source.formatMetadata,
						fileId: source.fileId,
						versionId: source.versionId,
						branchId: source.branchId
					},
					translations: translations.map((t) => ({
						content: encode(t.content),
						fileName: t.fileName,
						fileFormat: t.fileFormat,
						locale: t.locale,
						dataFormat: t.dataFormat,
						fileId: t.fileId,
						versionId: t.versionId,
						branchId: t.branchId
					}))
				})),
				sourceLocale: options.sourceLocale
			},
			timeout: options.timeout
		})).uploadedFiles || [];
	}, { batchSize: 100 });
}
async function _querySourceFile(query, options, config) {
	const branchId = query.branchId;
	const versionId = query.versionId;
	const fileId = query.fileId;
	const searchParams = new URLSearchParams();
	if (branchId) searchParams.set("branchId", branchId);
	if (versionId) searchParams.set("versionId", versionId);
	return apiRequest(config, `/v2/project/translations/files/status/${encodeURIComponent(fileId)}?${searchParams.toString()}`, {
		method: "GET",
		timeout: options.timeout
	});
}
async function _getProjectData(projectId, options, config) {
	const { baseUrl } = config;
	const timeout = options.timeout ? options.timeout : defaultTimeout;
	const url = `${baseUrl || "https://api2.gtx.dev"}/v2/project/info/${encodeURIComponent(projectId)}`;
	let response;
	try {
		response = await fetchWithTimeout(url, {
			method: "GET",
			headers: generateRequestHeaders(config)
		}, timeout);
	} catch (error) {
		handleFetchError(error, timeout);
	}
	await validateResponse(response);
	return await response.json();
}
async function _checkJobStatus(jobIds, config, timeoutMs) {
	return apiRequest(config, "/v2/project/jobs/info", {
		body: { jobIds },
		timeout: timeoutMs
	});
}
async function _awaitJobs(enqueueResult, options, config) {
	const pollingInterval = (options?.pollingIntervalSeconds ?? 5) * 1e3;
	const timeout = options?.timeoutSeconds !== void 0 ? options.timeoutSeconds * 1e3 : 6e5;
	const jobIds = Object.keys(enqueueResult.jobData);
	if (jobIds.length === 0) return {
		complete: true,
		jobs: []
	};
	const startTime = Date.now();
	const finalStatuses = new Map(jobIds.map((id) => [id, {
		jobId: id,
		status: "unknown"
	}]));
	const pendingJobIds = new Set(jobIds);
	while (pendingJobIds.size > 0) {
		const statuses = await _checkJobStatus(Array.from(pendingJobIds), config);
		for (const job of statuses) if (job.status === "completed" || job.status === "failed" || job.status === "unknown") {
			finalStatuses.set(job.jobId, {
				jobId: job.jobId,
				status: job.status,
				...job.error ? { error: job.error } : {}
			});
			pendingJobIds.delete(job.jobId);
		} else finalStatuses.set(job.jobId, {
			jobId: job.jobId,
			status: job.status
		});
		if (pendingJobIds.size === 0) break;
		if (Date.now() - startTime >= timeout) break;
		await new Promise((resolve) => setTimeout(resolve, pollingInterval));
	}
	return {
		complete: pendingJobIds.size === 0,
		jobs: Array.from(finalStatuses.values())
	};
}
async function _queryFileData(data, options = {}, config) {
	return apiRequest(config, "/v2/project/files/info", {
		body: {
			sourceFiles: data.sourceFiles?.map((item) => ({
				fileId: item.fileId,
				versionId: item.versionId,
				branchId: item.branchId
			})),
			translatedFiles: data.translatedFiles?.map((item) => ({
				fileId: item.fileId,
				versionId: item.versionId,
				branchId: item.branchId,
				locale: item.locale
			}))
		},
		timeout: options.timeout
	});
}
async function _queryBranchData(query, config) {
	return apiRequest(config, "/v2/project/branches/info", { body: query });
}
async function _createBranch(query, config) {
	return apiRequest(config, "/v2/project/branches/create", { body: query });
}
async function _processFileMoves(moves, options, config) {
	if (moves.length === 0) return {
		results: [],
		summary: {
			total: 0,
			succeeded: 0,
			failed: 0
		}
	};
	const batchResult = await processBatches(moves, async (batch) => {
		return (await apiRequest(config, "/v2/project/files/moves", {
			body: {
				branchId: options.branchId,
				moves: batch
			},
			timeout: options.timeout
		})).results;
	}, { batchSize: 100 });
	const succeeded = batchResult.data.filter((r) => r.success).length;
	const failed = batchResult.data.filter((r) => !r.success).length;
	return {
		results: batchResult.data,
		summary: {
			total: moves.length,
			succeeded,
			failed
		}
	};
}
async function _getOrphanedFiles(branchId, fileIds, options = {}, config) {
	const makeRequest = (batchFileIds) => apiRequest(config, "/v2/project/files/orphaned", {
		body: {
			branchId,
			fileIds: batchFileIds
		},
		timeout: options.timeout
	});
	if (fileIds.length === 0) return makeRequest([]);
	const batches = createBatches(fileIds, 100);
	const batchResults = await Promise.all(batches.map((batch) => makeRequest(batch)));
	if (batchResults.length === 1) return batchResults[0];
	const orphanedFileMap = /* @__PURE__ */ new Map();
	for (const orphan of batchResults[0].orphanedFiles) orphanedFileMap.set(orphan.fileId, orphan);
	for (let i = 1; i < batchResults.length; i++) {
		const batchOrphanIds = new Set(batchResults[i].orphanedFiles.map((f) => f.fileId));
		Array.from(orphanedFileMap.keys()).forEach((fileId) => {
			if (!batchOrphanIds.has(fileId)) orphanedFileMap.delete(fileId);
		});
	}
	return { orphanedFiles: Array.from(orphanedFileMap.values()) };
}
async function _publishFiles(files, config) {
	return await apiRequest(config, "/v2/project/files/publish", { body: { files } });
}
var GT = class {
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
			this.sourceLocale = _standardizeLocale(sourceLocale);
			if (!_isValidLocale(this.sourceLocale, customMapping)) throw new Error(invalidLocaleError(this.sourceLocale));
		}
		if (targetLocale) {
			this.targetLocale = _standardizeLocale(targetLocale);
			if (!_isValidLocale(this.targetLocale, customMapping)) throw new Error(invalidLocaleError(this.targetLocale));
		}
		if (locales) {
			const result = [];
			const invalidLocales = [];
			locales.forEach((locale) => {
				const standardizedLocale = _standardizeLocale(locale);
				if (_isValidLocale(standardizedLocale)) result.push(standardizedLocale);
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
	async queryBranchData(query) {
		this._validateAuth("queryBranchData");
		return await _queryBranchData(query, this._getTranslationConfig());
	}
	async createBranch(query) {
		this._validateAuth("createBranch");
		return await _createBranch(query, this._getTranslationConfig());
	}
	async processFileMoves(moves, options = {}) {
		this._validateAuth("processFileMoves");
		return await _processFileMoves(moves, options, this._getTranslationConfig());
	}
	async getOrphanedFiles(branchId, fileIds, options = {}) {
		this._validateAuth("getOrphanedFiles");
		return await _getOrphanedFiles(branchId, fileIds, options, this._getTranslationConfig());
	}
	async setupProject(files, options) {
		this._validateAuth("setupProject");
		options = {
			...options,
			locales: options?.locales?.map((locale) => this.resolveCanonicalLocale(locale))
		};
		return await _setupProject(files, this._getTranslationConfig(), options);
	}
	async checkJobStatus(jobIds, timeoutMs) {
		this._validateAuth("checkJobStatus");
		return await _checkJobStatus(jobIds, this._getTranslationConfig(), timeoutMs);
	}
	async awaitJobs(enqueueResult, options) {
		this._validateAuth("awaitJobs");
		return await _awaitJobs(enqueueResult, options, this._getTranslationConfig());
	}
	async enqueueFiles(files, options) {
		this._validateAuth("enqueueFiles");
		let mergedOptions = {
			...options,
			sourceLocale: options.sourceLocale ?? this.sourceLocale,
			targetLocales: options.targetLocales ?? [this.targetLocale]
		};
		if (!mergedOptions.sourceLocale) {
			const error = noSourceLocaleProvidedError("enqueueFiles");
			gtInstanceLogger.error(error);
			throw new Error(error);
		}
		if (!mergedOptions.targetLocales || mergedOptions.targetLocales.length === 0) {
			const error = noTargetLocaleProvidedError("enqueueFiles");
			gtInstanceLogger.error(error);
			throw new Error(error);
		}
		mergedOptions = {
			...mergedOptions,
			targetLocales: mergedOptions.targetLocales.map((locale) => this.resolveCanonicalLocale(locale))
		};
		return await _enqueueFiles(files, mergedOptions, this._getTranslationConfig());
	}
	async createTag(options) {
		this._validateAuth("createTag");
		return await _createTag(options, this._getTranslationConfig());
	}
	async publishFiles(files) {
		this._validateAuth("publishFiles");
		return await _publishFiles(files, this._getTranslationConfig());
	}
	async submitUserEditDiffs(payload) {
		this._validateAuth("submitUserEditDiffs");
		await _submitUserEditDiffs({
			...payload,
			diffs: (payload.diffs || []).map((d) => ({
				...d,
				locale: this.resolveCanonicalLocale(d.locale)
			}))
		}, this._getTranslationConfig());
	}
	async queryFileData(data, options = {}) {
		this._validateAuth("queryFileData");
		data.translatedFiles = data.translatedFiles?.map((item) => ({
			...item,
			locale: this.resolveCanonicalLocale(item.locale)
		}));
		const result = await _queryFileData(data, options, this._getTranslationConfig());
		result.translatedFiles = result.translatedFiles?.map((item) => ({
			...item,
			...item.locale && { locale: this.resolveAliasLocale(item.locale) }
		}));
		result.sourceFiles = result.sourceFiles?.map((item) => ({
			...item,
			...item.sourceLocale && { sourceLocale: this.resolveAliasLocale(item.sourceLocale) },
			locales: item.locales.map((locale) => this.resolveAliasLocale(locale))
		}));
		return result;
	}
	async querySourceFile(data, options = {}) {
		this._validateAuth("querySourceFile");
		const result = await _querySourceFile(data, options, this._getTranslationConfig());
		result.translations = result.translations.map((item) => ({
			...item,
			...item.locale && { locale: this.resolveAliasLocale(item.locale) }
		}));
		result.sourceFile.locales = result.sourceFile.locales.map((locale) => this.resolveAliasLocale(locale));
		if (result.sourceFile.sourceLocale) result.sourceFile.sourceLocale = this.resolveAliasLocale(result.sourceFile.sourceLocale);
		return result;
	}
	async getProjectData(projectId, options = {}) {
		this._validateAuth("getProjectData");
		const result = await _getProjectData(projectId, options, this._getTranslationConfig());
		result.currentLocales = result.currentLocales.map((item) => this.resolveAliasLocale(item));
		result.defaultLocale = this.resolveAliasLocale(result.defaultLocale);
		return result;
	}
	async downloadFile(file, options = {}) {
		this._validateAuth("downloadTranslatedFile");
		return (await _downloadFileBatch([{
			fileId: file.fileId,
			branchId: file.branchId,
			locale: file.locale ? this.resolveCanonicalLocale(file.locale) : void 0,
			versionId: file.versionId,
			useLatestAvailableVersion: file.useLatestAvailableVersion
		}], options, this._getTranslationConfig())).data?.[0]?.data ?? "";
	}
	async downloadFileBatch(requests, options = {}) {
		this._validateAuth("downloadFileBatch");
		requests = requests.map((request) => ({
			...request,
			locale: request.locale ? this.resolveCanonicalLocale(request.locale) : void 0
		}));
		const result = await _downloadFileBatch(requests, options, this._getTranslationConfig());
		return {
			files: result.data.map((file) => ({
				...file,
				...file.locale && { locale: this.resolveAliasLocale(file.locale) }
			})),
			count: result.count
		};
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
	async uploadSourceFiles(files, options) {
		this._validateAuth("uploadSourceFiles");
		const mergedOptions = {
			...options,
			sourceLocale: this.resolveCanonicalLocale(options.sourceLocale ?? this.sourceLocale ?? "en")
		};
		files = files.map((f) => ({
			...f,
			source: {
				...f.source,
				locale: this.resolveCanonicalLocale(f.source.locale)
			}
		}));
		const result = await _uploadSourceFiles(files, mergedOptions, this._getTranslationConfig());
		return {
			uploadedFiles: result.data,
			count: result.count,
			message: `Successfully uploaded ${result.count} files in ${result.batchCount} batch(es)`
		};
	}
	async uploadTranslations(files, options) {
		this._validateAuth("uploadTranslations");
		const mergedOptions = {
			...options,
			sourceLocale: options.sourceLocale ?? this.sourceLocale
		};
		if (!mergedOptions.sourceLocale) {
			const error = noSourceLocaleProvidedError("uploadTranslations");
			gtInstanceLogger.error(error);
			throw new Error(error);
		}
		const result = await _uploadTranslations(files.map((f) => ({
			...f,
			translations: f.translations.map((t) => ({
				...t,
				locale: this.resolveCanonicalLocale(t.locale)
			}))
		})), mergedOptions, this._getTranslationConfig());
		return {
			uploadedFiles: result.data,
			count: result.count,
			message: `Successfully uploaded ${result.count} files in ${result.batchCount} batch(es)`
		};
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
		return _getRegionProperties(region, this.targetLocale, customMapping);
	}
	requiresTranslation(sourceLocale = this.sourceLocale, targetLocale = this.targetLocale, approvedLocales = this.locales, customMapping = this.customMapping) {
		if (!sourceLocale) throw new Error(noSourceLocaleProvidedError("requiresTranslation"));
		if (!targetLocale) throw new Error(noTargetLocaleProvidedError("requiresTranslation"));
		if (customMapping === this.customMapping) return this.localeConfig.requiresTranslation(targetLocale, sourceLocale, approvedLocales);
		return _requiresTranslation(sourceLocale, targetLocale, approvedLocales, customMapping);
	}
	determineLocale(locales, approvedLocales = this.locales || [], customMapping = this.customMapping) {
		if (customMapping === this.customMapping) return this.localeConfig.determineLocale(locales, approvedLocales ?? []);
		return _determineLocale(locales, approvedLocales, customMapping);
	}
	getLocaleDirection(locale = this.targetLocale) {
		if (!locale) throw new Error(noTargetLocaleProvidedError("getLocaleDirection"));
		return this.localeConfig.getLocaleDirection(locale);
	}
	isValidLocale(locale = this.targetLocale, customMapping = this.customMapping) {
		if (!locale) throw new Error(noTargetLocaleProvidedError("isValidLocale"));
		if (customMapping === this.customMapping) return this.localeConfig.isValidLocale(locale);
		return _isValidLocale(locale, customMapping);
	}
	resolveCanonicalLocale(locale = this.targetLocale, customMapping = this.customMapping) {
		if (!locale) throw new Error(noTargetLocaleProvidedError("resolveCanonicalLocale"));
		if (customMapping === this.customMapping) return this.localeConfig.resolveCanonicalLocale(locale);
		return _resolveCanonicalLocale(locale, customMapping);
	}
	resolveAliasLocale(locale, customMapping = this.customMapping) {
		if (!locale) throw new Error(noTargetLocaleProvidedError("resolveAliasLocale"));
		if (customMapping === this.customMapping) return this.localeConfig.resolveAliasLocale(locale);
		return _resolveAliasLocale(locale, customMapping);
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
function getLocaleProperties(locale, defaultLocale, customMapping) {
	return _getLocaleProperties(locale, defaultLocale, customMapping);
}
function requiresTranslation(sourceLocale, targetLocale, approvedLocales, customMapping) {
	return _requiresTranslation(sourceLocale, targetLocale, approvedLocales, customMapping);
}
function determineLocale(locales, approvedLocales = [], customMapping = void 0) {
	return _determineLocale(locales, approvedLocales, customMapping);
}
function resolveAliasLocale(locale, customMapping) {
	return _resolveAliasLocale(locale, customMapping);
}
function isSameLanguage(...locales) {
	return _isSameLanguage(...locales);
}
function publishValidationResults(results, prefix = "", throwOnError = true) {
	results.forEach((result) => {
		switch (result.type) {
			case "error":
				logger_default.error(prefix + result.message);
				break;
			case "warning": logger_default.warn(prefix + result.message);
		}
	});
	if (throwOnError && results.some((result) => result.type === "error")) throw new Error("Validation errors occurred");
}
function getLoadTranslationsType(config) {
	if (config.loadTranslations) return "custom";
	else if (config.cacheUrl) return "remote";
	else if ((config.cacheUrl === void 0 || config.cacheUrl === "https://cdn.gtx.dev") && config.projectId) return "gt-remote";
	else return "disabled";
}
function validateLoadTranslations(params) {
	const results = [];
	const { projectId, loadTranslations } = params;
	switch (getLoadTranslationsType(params)) {
		case "remote":
		case "gt-remote":
			if (!projectId) results.push({
				type: "warning",
				message: "projectId is required when loading translations from a remote store"
			});
			break;
		case "custom": if (!loadTranslations) results.push({
			type: "error",
			message: "loadTranslations is required when loading translations from a custom loader"
		});
	}
	return results;
}
function getTranslationApiType(params) {
	if ((params.runtimeUrl === void 0 || params.runtimeUrl === "https://runtime2.gtx.dev") && params.projectId && (params.devApiKey || params.apiKey)) return "gt";
	else if (params.runtimeUrl) return "custom";
	else return "disabled";
}
function validateTranslationApi(params) {
	const results = [];
	switch (getTranslationApiType(params)) {
		case "custom":
		case "gt":
			if (!params.projectId) results.push({
				type: "warning",
				message: "projectId is required"
			});
			if (!params.devApiKey && !params.apiKey) results.push({
				type: "warning",
				message: "devApiKey or apiKey is required"
			});
	}
	return results;
}
function getGTServicesEnabled(config) {
	return getLoadTranslationsType(config) === "gt-remote" || getTranslationApiType(config) === "gt";
}
function validateLocales(params) {
	const results = [];
	if (!getGTServicesEnabled(params)) return results;
	const { defaultLocale, locales, customMapping } = params;
	(/* @__PURE__ */ new Set([...defaultLocale ? [defaultLocale] : [], ...locales || []])).forEach((locale) => {
		if (!isValidLocale(locale, customMapping)) results.push({
			type: "error",
			message: `Invalid locale: ${locale}`
		});
	});
	return results;
}
function validateConfig(config) {
	const results = [];
	results.push(...validateLoadTranslations(config));
	results.push(...validateTranslationApi(config));
	results.push(...validateLocales(config));
	return results;
}
var StorageAdapter = class {};
var FALLBACK_STORAGE_ADAPTER_TYPE = "fallback-storage-adapter";
var FallbackStorageAdapter = class extends StorageAdapter {
	constructor(..._args) {
		super(..._args);
		this.type = FALLBACK_STORAGE_ADAPTER_TYPE;
		this.storage = {};
	}
	getItem(key) {
		return this.storage[key];
	}
	setItem(key, value) {
		this.storage[key] = value;
	}
	removeItem(key) {
		delete this.storage[key];
	}
};
function createTranslateManyFactory(gtInstance, timeout) {
	return (locale) => (sources) => gtInstance.translateMany(sources, { targetLocale: locale }, timeout);
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
function createFallbackTranslationLoader() {
	const loader = async (_locale) => {
		return {};
	};
	return loader;
}
function routeCreateTranslationLoader({ type, remoteTranslationLoaderParams, loadTranslations }) {
	if (type === "disabled") logger_default.warn("I18nManager: No translation loader found. No translations will be loaded.");
	const { cacheUrl, projectId, _versionId, _branchId, customMapping } = remoteTranslationLoaderParams;
	switch (type) {
		case "remote":
		case "gt-remote": return createRemoteTranslationLoader({
			cacheUrl: cacheUrl || "",
			projectId: projectId || "",
			_versionId,
			_branchId,
			customMapping
		});
		case "custom": return loadTranslations;
		case "disabled": return createFallbackTranslationLoader();
	}
}
var Cache = class {
	constructor(init, lifecycle) {
		this.cache = {};
		this.fallbackPromises = {};
		this.cache = structuredClone(init);
		this.onHit = lifecycle?.onHit;
		this.onMiss = lifecycle?.onMiss;
	}
	setCache(cacheKey, value) {
		this.cache[cacheKey] = value;
	}
	getCache(key) {
		const cacheKey = this.genKey(key);
		return this.cache[cacheKey];
	}
	getInternalCache() {
		return this.cache;
	}
	async missCache(key) {
		const cacheKey = this.genKey(key);
		if (this.fallbackPromises[cacheKey] !== void 0) return await this.fallbackPromises[cacheKey];
		const fallbackPromise = this.fallback(key);
		this.fallbackPromises[cacheKey] = fallbackPromise;
		try {
			const value = await fallbackPromise;
			this.cache[cacheKey] = value;
			return value;
		} finally {
			delete this.fallbackPromises[cacheKey];
		}
	}
};
function hashMessage(message, options) {
	return hashSource({
		source: options.$format === "ICU" ? indexVars(message) : message,
		...options?.$context && { context: options.$context },
		...options?.$id && { id: options.$id },
		..."$maxChars" in options && options.$maxChars != null && { maxChars: Math.abs(options.$maxChars) },
		dataFormat: options.$format
	});
}
var MAX_BATCH_SIZE = 25;
var MAX_CONCURRENT_REQUESTS = 100;
var BATCH_INTERVAL = 50;
var TranslationsCache = class extends Cache {
	constructor({ init, translateMany, lifecycle }) {
		super(init, lifecycle);
		this._queue = [];
		this._batchTimer = null;
		this._activeRequests = 0;
		this._translateMany = translateMany;
	}
	get(key) {
		const value = this.getCache(key);
		if (value != null && this.onHit) this.onHit({
			inputKey: key,
			cacheKey: this.genKey(key),
			cacheValue: value,
			outputValue: value
		});
		return value;
	}
	async miss(key) {
		const value = await this.missCache(key);
		if (value != null && this.onMiss) this.onMiss({
			inputKey: key,
			cacheKey: this.genKey(key),
			cacheValue: value,
			outputValue: value
		});
		return value;
	}
	genKey(key) {
		return hashMessage(key.message, key.options);
	}
	fallback(key) {
		const translationPromise = this._enqueueTranslation(key);
		if (this._queue.length >= MAX_BATCH_SIZE) this._flushNow();
		else this._scheduleBatch();
		return translationPromise;
	}
	_flushNow() {
		if (this._batchTimer) {
			clearTimeout(this._batchTimer);
			this._batchTimer = null;
		}
		this._drainQueue();
	}
	_scheduleBatch() {
		if (this._batchTimer) return;
		this._batchTimer = setTimeout(() => {
			this._batchTimer = null;
			this._drainQueue();
		}, BATCH_INTERVAL);
	}
	_drainQueue() {
		while (this._queue.length > 0 && this._activeRequests < MAX_CONCURRENT_REQUESTS) {
			const batch = this._queue.splice(0, MAX_BATCH_SIZE);
			this._sendBatchRequest(batch);
		}
		if (this._queue.length > 0) this._scheduleBatch();
	}
	_enqueueTranslation(key) {
		const cacheKey = this.genKey(key);
		const options = key.options;
		return new Promise((resolve, reject) => {
			this._queue.push({
				key: cacheKey,
				source: key.message,
				metadata: {
					...options?.$context && { context: options.$context },
					...options?.$id && { id: options.$id },
					..."$maxChars" in options && options.$maxChars != null && { $maxChars: Math.abs(options.$maxChars) },
					dataFormat: options.$format
				},
				resolve: (value) => resolve(value),
				reject
			});
		});
	}
	async _sendBatchRequest(batch) {
		this._activeRequests++;
		const requests = convertBatchToTranslateManyParams(batch);
		const response = await this._sendBatchRequestWithErrorHandling(batch, requests);
		if (response) this._handleTranslationResponse(batch, response);
		this._activeRequests--;
	}
	async _sendBatchRequestWithErrorHandling(batch, requests) {
		try {
			return await this._translateMany(requests);
		} catch (error) {
			for (const entry of batch) entry.reject(error);
			return;
		}
	}
	_handleTranslationResponse(batch, response) {
		for (const entry of batch) {
			const { key } = entry;
			const result = response[key];
			if (result && result.success) {
				const translation = result.translation;
				this.setCache(key, translation);
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
var DEFAULT_CACHE_EXPIRY_TIME = 6e4;
var LocalesCache = class extends Cache {
	constructor({ init = {}, ttl, loadTranslations, createTranslateMany, lifecycle: { onLocalesCacheHit: onHit, onLocalesCacheMiss: onMiss, onTranslationsCacheHit, onTranslationsCacheMiss } }) {
		super(init, {
			onHit,
			onMiss
		});
		this.ttl = DEFAULT_CACHE_EXPIRY_TIME;
		this.ttl = ttl === null ? -1 : ttl ?? 6e4;
		this._translationLoader = loadTranslations;
		this._createTranslateMany = createTranslateMany;
		this._onTranslationsCacheHit = onTranslationsCacheHit;
		this._onTranslationsCacheMiss = onTranslationsCacheMiss;
	}
	get(key) {
		const entry = this.getCache(key);
		if (!entry || entry.expiresAt > 0 && entry.expiresAt < Date.now()) return;
		const value = entry.translationsCache;
		if (value != null && this.onHit) this.onHit({
			inputKey: key,
			cacheKey: this.genKey(key),
			cacheValue: entry,
			outputValue: value
		});
		return value;
	}
	async miss(key) {
		const cacheValue = await this.missCache(key);
		const value = cacheValue.translationsCache;
		if (value != null && this.onMiss) this.onMiss({
			inputKey: key,
			cacheKey: this.genKey(key),
			cacheValue,
			outputValue: value
		});
		return value;
	}
	genKey(key) {
		return key;
	}
	async fallback(locale) {
		const translationsPromise = this._translationLoader(locale);
		const expiresAt = this.ttl < 0 ? this.ttl : Date.now() + this.ttl;
		return {
			translationsCache: new TranslationsCache({
				init: await translationsPromise,
				lifecycle: this._createTranslationsCacheLifecycle(locale),
				translateMany: this._createTranslateMany(locale)
			}),
			expiresAt
		};
	}
	_createTranslationsCacheLifecycle(locale) {
		return {
			onHit: this._onTranslationsCacheHit ? (params) => this._onTranslationsCacheHit({
				locale,
				...params
			}) : void 0,
			onMiss: this._onTranslationsCacheMiss ? (params) => this._onTranslationsCacheMiss({
				locale,
				...params
			}) : void 0
		};
	}
};
function createLifecycleCallbacks(emit) {
	return {
		onLocalesCacheHit: (params) => {
			emit("locales-cache-hit", {
				locale: params.inputKey,
				translations: params.outputValue.getInternalCache()
			});
		},
		onLocalesCacheMiss: (params) => {
			emit("locales-cache-miss", {
				locale: params.inputKey,
				translations: params.outputValue.getInternalCache()
			});
		},
		onTranslationsCacheHit: (params) => {
			emit("translations-cache-hit", {
				locale: params.locale,
				hash: params.cacheKey,
				translation: params.outputValue
			});
		},
		onTranslationsCacheMiss: (params) => {
			emit("translations-cache-miss", {
				locale: params.locale,
				hash: params.cacheKey,
				translation: params.outputValue
			});
		}
	};
}
var EventEmitter = class {
	constructor() {
		this.listeners = {};
	}
	getOrCreateListeners(eventName) {
		if (!this.listeners[eventName]) this.listeners[eventName] = /* @__PURE__ */ new Set();
		return this.listeners[eventName];
	}
	subscribe(eventName, listener) {
		const set = this.getOrCreateListeners(eventName);
		set.add(listener);
		return () => {
			set.delete(listener);
		};
	}
	emit(eventName, event) {
		this.listeners[eventName]?.forEach((subscriber) => subscriber(event));
	}
};
function subscribeLifecycleCallbacks({ onLocalesCacheHit, onLocalesCacheMiss, onTranslationsCacheHit, onTranslationsCacheMiss }, subscribe) {
	if (onLocalesCacheHit) subscribe("locales-cache-hit", (event) => {
		onLocalesCacheHit({
			...event,
			value: event.translations
		});
	});
	if (onLocalesCacheMiss) subscribe("locales-cache-miss", (event) => {
		onLocalesCacheMiss({
			...event,
			value: event.translations
		});
	});
	if (onTranslationsCacheHit) subscribe("translations-cache-hit", (event) => {
		onTranslationsCacheHit({
			...event,
			value: event.translation
		});
	});
	if (onTranslationsCacheMiss) subscribe("translations-cache-miss", (event) => {
		onTranslationsCacheMiss({
			...event,
			value: event.translation
		});
	});
}
var DEFAULT_TRANSLATION_TIMEOUT = 12e3;
var I18nManager = class extends EventEmitter {
	constructor(params) {
		super();
		this.resolveTranslationSync = (message, options = {}) => {
			return this.lookupTranslation(message, options);
		};
		publishValidationResults(validateConfig(params), "I18nManager: ");
		this.config = standardizeConfig(params);
		this.localeConfig = new LocaleConfig({
			defaultLocale: this.config.defaultLocale,
			locales: this.config.locales,
			customMapping: this.config.customMapping
		});
		this.storeAdapter = params.storeAdapter ?? new FallbackStorageAdapter();
		const loadTranslations = createTranslationLoader(params);
		const createTranslateMany = createTranslateManyFactory(this.getGTClassClean(), DEFAULT_TRANSLATION_TIMEOUT);
		subscribeLifecycleCallbacks(params.lifecycle ?? {}, (...args) => this.subscribe(...args));
		this.localesCache = new LocalesCache({
			loadTranslations,
			createTranslateMany,
			lifecycle: createLifecycleCallbacks((...args) => this.emit(...args))
		});
	}
	subscribeToTranslationsCacheMiss(listener, locale, hash) {
		return this.subscribe("translations-cache-miss", (event) => {
			if (event.locale !== locale || event.hash !== hash) return;
			listener(event);
		});
	}
	getAdapterType() {
		return this.storeAdapter.type;
	}
	getLocale() {
		const locale = this.storeAdapter.getItem("locale");
		if (!locale) {
			logger_default.warn("getLocale() invoked outside of translation context, falling back to default locale");
			return this.config.defaultLocale;
		}
		return locale;
	}
	setLocale(locale) {
		try {
			const newLocale = this.resolveLocale(locale);
			const previousLocale = this.getLocale();
			this.storeAdapter.setItem("locale", newLocale);
			this.emit("locale-update", {
				previousLocale,
				newLocale
			});
		} catch (error) {
			this.handleError(error);
		}
	}
	getDefaultLocale() {
		return this.config.defaultLocale;
	}
	getLocales() {
		return this.config.locales;
	}
	getVersionId() {
		return this.config._versionId;
	}
	getGTClass() {
		return this.getGTClassClean(this.getLocale());
	}
	isTranslationEnabled() {
		return this.config.enableI18n;
	}
	getTranslationLoader() {
		return (locale) => this.loadTranslations(locale);
	}
	async loadTranslations(locale = this.getLocale()) {
		try {
			const resolvedLocale = this.resolveLocale(locale);
			if (!this.requiresTranslation(resolvedLocale)) return {};
			let txCache = this.localesCache.get(resolvedLocale);
			if (!txCache) txCache = await this.localesCache.miss(resolvedLocale);
			return txCache.getInternalCache();
		} catch (error) {
			this.handleError(error);
			return {};
		}
	}
	lookupTranslation(message, options = {}) {
		try {
			const { locale, options: lookupOptions } = this.resolveLookupParams(options);
			if (!this.requiresTranslation(locale)) return message;
			const txCache = this.localesCache.get(locale);
			if (!txCache) return void 0;
			return txCache.get({
				message,
				options: lookupOptions
			});
		} catch (error) {
			this.handleError(error);
			return;
		}
	}
	async lookupTranslationWithFallback(message, options = {}) {
		try {
			const { locale, options: lookupOptions } = this.resolveLookupParams(options);
			if (!this.requiresTranslation(locale)) return message;
			let txCache = this.localesCache.get(locale);
			if (!txCache) txCache = await this.localesCache.miss(locale);
			let translation = txCache.get({
				message,
				options: lookupOptions
			});
			if (translation == null) translation = await txCache.miss({
				message,
				options: lookupOptions
			});
			return translation;
		} catch (error) {
			this.handleError(error);
			return;
		}
	}
	async getLookupTranslation(locale = this.getLocale(), prefetchEntries = []) {
		try {
			const resolvedLocale = this.resolveLocale(locale);
			if (!this.requiresTranslation(resolvedLocale)) return (message) => message;
			const resolvedPrefetchEntries = resolvePrefetchEntriesByLocale(prefetchEntries, resolvedLocale, (entryLocale) => this.resolveLocale(entryLocale));
			if (resolvedPrefetchEntries.length !== prefetchEntries.length) logger_default.warn(`I18nManager: getLookupTranslation(): prefetchEntries must all be the same locale, ignoring all entries that are not for ${resolvedLocale}`);
			let txCache = this.localesCache.get(resolvedLocale);
			if (!txCache) txCache = await this.localesCache.miss(resolvedLocale);
			if (!txCache) return () => void 0;
			await Promise.all(resolvedPrefetchEntries.filter((entry) => txCache.get(entry) == null).map((entry) => txCache.miss(entry)));
			return (message, options = {}) => {
				return txCache.get({
					message,
					options: this.resolveLookupOptions(options)
				});
			};
		} catch (error) {
			this.handleError(error);
			return (message) => message;
		}
	}
	async getTranslations(locale = this.getLocale()) {
		try {
			return this.loadTranslations(locale);
		} catch (error) {
			this.handleError(error);
			return {};
		}
	}
	async getTranslationResolver(locale = this.getLocale()) {
		return this.getLookupTranslation(locale);
	}
	requiresTranslation(locale = this.getLocale()) {
		const defaultLocale = this.getDefaultLocale();
		const locales = this.getLocales();
		return this.isTranslationEnabled() && this.localeConfig.requiresTranslation(locale, defaultLocale, locales);
	}
	requiresDialectTranslation(locale = this.getLocale()) {
		const defaultLocale = this.getDefaultLocale();
		return this.requiresTranslation(locale) && this.localeConfig.isSameLanguage(defaultLocale, locale);
	}
	handleError(error) {
		switch (this.config.environment) {
			case "development": throw error;
			default: logger_default.error("I18nManager: " + error);
		}
	}
	resolveLocale(locale) {
		const resolvedLocale = this.localeConfig.determineLocale(locale);
		if (!this.localeConfig.isValidLocale(locale) || !resolvedLocale) throw new Error(`I18nManager: validateLocale(): locale ${locale} is not valid`);
		return resolvedLocale;
	}
	resolveLookupParams(options = {}) {
		const locale = this.resolveLocale(options.$locale ?? this.getLocale());
		return {
			locale,
			options: this.resolveLookupOptions(options, locale)
		};
	}
	resolveLookupOptions(options = {}, resolvedLocale) {
		if (!options.$locale) return options;
		return {
			...options,
			$locale: resolvedLocale ?? this.resolveLocale(options.$locale)
		};
	}
	getGTClassClean(locale) {
		return new GT({
			sourceLocale: this.config.defaultLocale,
			targetLocale: locale,
			locales: this.config.locales,
			customMapping: this.config.customMapping,
			projectId: this.config.projectId,
			baseUrl: this.config.runtimeUrl || void 0,
			apiKey: this.config.apiKey,
			devApiKey: this.config.devApiKey
		});
	}
};
function standardizeConfig(config) {
	const gtServicesEnabled = getGTServicesEnabled(config);
	const dedupedLocales = dedupeLocales({
		defaultLocale: config.defaultLocale || "en",
		locales: config.locales || ["en"],
		customMapping: config.customMapping
	});
	return {
		environment: config.environment || "production",
		enableI18n: config.enableI18n !== void 0 ? config.enableI18n : true,
		projectId: config.projectId,
		devApiKey: config.devApiKey,
		apiKey: config.apiKey,
		runtimeUrl: config.runtimeUrl,
		_versionId: config._versionId,
		...gtServicesEnabled ? standardizeLocales(dedupedLocales) : dedupedLocales
	};
}
function dedupeLocales({ defaultLocale, locales, customMapping }) {
	return {
		defaultLocale,
		locales: Array.from(/* @__PURE__ */ new Set([defaultLocale, ...locales])),
		customMapping: customMapping || {}
	};
}
function standardizeLocales(config) {
	return {
		defaultLocale: standardizeLocale(config.defaultLocale),
		locales: config.locales.map((locale) => {
			if (typeof config.customMapping?.[locale] === "string" ? config.customMapping?.[locale] : config.customMapping?.[locale]?.code) return locale;
			else return standardizeLocale(locale);
		}),
		customMapping: Object.fromEntries(Object.entries(config.customMapping || {}).map(([key, value]) => [key, typeof value === "string" ? standardizeLocale(value) : {
			...value,
			...value.code ? { code: standardizeLocale(value.code) } : {}
		}]))
	};
}
function resolvePrefetchEntriesByLocale(prefetchEntries, locale, resolveLocale) {
	return prefetchEntries.flatMap((entry) => {
		const entryLocale = entry.options.$locale;
		if (entryLocale == null) return [entry];
		try {
			const resolvedLocale = resolveLocale(entryLocale);
			if (resolvedLocale !== locale) return [];
			return [{
				message: entry.message,
				options: {
					...entry.options,
					$locale: resolvedLocale
				}
			}];
		} catch {
			return [];
		}
	});
}
function createTranslationLoader(params) {
	return routeCreateTranslationLoader({
		loadTranslations: params.loadTranslations,
		type: getLoadTranslationsType(params),
		remoteTranslationLoaderParams: {
			cacheUrl: params.cacheUrl,
			projectId: params.projectId,
			_versionId: params._versionId,
			_branchId: params._branchId,
			customMapping: params.customMapping
		}
	});
}
var i18nManager = void 0;
function getI18nManager() {
	if (!i18nManager) {
		logger_default.warn("getI18nManager(): Translation failed because I18nManager not initialized.");
		i18nManager = new I18nManager({
			defaultLocale: "en",
			locales: ["en"]
		});
	}
	return i18nManager;
}
function setI18nManager(i18nManagerInstance) {
	i18nManager = i18nManagerInstance;
}
var l = "DEFAULT_TERMINATOR_KEY";
var f$1 = {
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
		[l]: {
			terminator: "…",
			separator: void 0
		}
	},
	none: { [l]: {
		terminator: void 0,
		separator: void 0
	} }
};
var p$2 = {
	Collator: Intl.Collator,
	DateTimeFormat: Intl.DateTimeFormat,
	DisplayNames: Intl.DisplayNames,
	ListFormat: Intl.ListFormat,
	Locale: Intl.Locale,
	NumberFormat: Intl.NumberFormat,
	PluralRules: Intl.PluralRules,
	RelativeTimeFormat: Intl.RelativeTimeFormat,
	Segmenter: Intl.Segmenter,
	CutoffFormat: class {
		constructor(t, e = {}) {
			try {
				const e = t ? Array.isArray(t) ? t.map((t) => String(t)) : [String(t)] : ["en"], r = Intl.getCanonicalLocales(e);
				this.locale = r.length ? r[0] : "en";
			} catch {
				this.locale = "en";
			}
			if (!f$1[e.style ?? "ellipsis"]) throw new Error(((t) => `generaltranslation Formatting Error: Invalid cutoff style: ${t}.`)(e.style ?? "ellipsis"));
			let r, n;
			if (void 0 !== e.maxChars) {
				r = e.style ?? "ellipsis";
				const t = new Intl.Locale(this.locale).language;
				n = f$1[r][t] || f$1[r].DEFAULT_TERMINATOR_KEY;
			}
			let i = e.terminator ?? n?.terminator, o = null != i ? e.separator ?? n?.separator : void 0;
			this.additionLength = (i?.length ?? 0) + (o?.length ?? 0), void 0 !== e.maxChars && Math.abs(e.maxChars) < this.additionLength && (i = void 0, o = void 0), this.options = {
				maxChars: e.maxChars,
				style: r,
				terminator: i,
				separator: o
			};
		}
		format(t) {
			return this.formatToParts(t).join("");
		}
		formatToParts(t) {
			const { maxChars: e, terminator: r, separator: n } = this.options, i = void 0 === e || Math.abs(e) >= t.length ? e : e >= 0 ? Math.max(0, e - this.additionLength) : Math.min(0, e + this.additionLength), o = void 0 !== i && i > -1 ? t.slice(0, i) : t.slice(i);
			return null == e || null == i || 0 === i || null == r || t.length <= Math.abs(e) ? [o] : i > 0 ? null != n ? [
				o,
				n,
				r
			] : [o, r] : null != n ? [
				r,
				n,
				o
			] : [r, o];
		}
		resolvedOptions() {
			return this.options;
		}
	}
};
new class {
	constructor() {
		this.cache = {};
	}
	_generateKey(t, e = {}) {
		return `${t ? Array.isArray(t) ? t.map((t) => String(t)).join(",") : String(t) : "undefined"}:${e ? JSON.stringify(e, Object.keys(e).sort()) : "{}"}`;
	}
	get(t, ...e) {
		const [r = "en", n = {}] = e, i = this._generateKey(r, n);
		let o = this.cache[t]?.[i];
		return void 0 === o && (o = new p$2[t](...e), this.cache[t] || (this.cache[t] = {}), this.cache[t][i] = o), o;
	}
}();
function g$1(t, e, r = "") {
	const n = (i = t) instanceof Uint8Array || ArrayBuffer.isView(i) && "Uint8Array" === i.constructor.name && "BYTES_PER_ELEMENT" in i && 1 === i.BYTES_PER_ELEMENT;
	var i;
	const o = t?.length;
	if (!n || void 0 !== e) {
		const e = (r && `"${r}" `) + "expected Uint8Array, got " + (n ? `length=${o}` : "type=" + typeof t);
		if (!n) throw new TypeError(e);
		throw new RangeError(e);
	}
	return t;
}
function E$2(t, e = !0) {
	if (t.destroyed) throw new Error("Hash instance has been destroyed");
	if (e && t.finished) throw new Error("Hash#digest() has already been called");
}
function _$2(...t) {
	for (let e = 0; e < t.length; e++) t[e].fill(0);
}
function v$2(t) {
	return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
function T$1(t, e) {
	return t << 32 - e | t >>> e;
}
"function" == typeof Uint8Array.from([]).toHex && Uint8Array.fromHex;
Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function B$2(t, e, r) {
	return t & e ^ ~t & r;
}
function P$2(t, e, r) {
	return t & e ^ t & r ^ e & r;
}
var S$3 = class {
	blockLen;
	outputLen;
	canXOF = !1;
	padOffset;
	isLE;
	buffer;
	view;
	finished = !1;
	length = 0;
	pos = 0;
	destroyed = !1;
	constructor(t, e, r, n) {
		this.blockLen = t, this.outputLen = e, this.padOffset = r, this.isLE = n, this.buffer = new Uint8Array(t), this.view = v$2(this.buffer);
	}
	update(t) {
		E$2(this), g$1(t);
		const { view: e, buffer: r, blockLen: n } = this, i = t.length;
		for (let o = 0; o < i;) {
			const a = Math.min(n - this.pos, i - o);
			if (a === n) {
				const e = v$2(t);
				for (; n <= i - o; o += n) this.process(e, o);
				continue;
			}
			r.set(t.subarray(o, o + a), this.pos), this.pos += a, o += a, this.pos === n && (this.process(e, 0), this.pos = 0);
		}
		return this.length += t.length, this.roundClean(), this;
	}
	digestInto(t) {
		E$2(this), function(t, e) {
			g$1(t, void 0, "digestInto() output");
			const r = e.outputLen;
			if (t.length < r) throw new RangeError("\"digestInto() output\" expected to be of length >=" + r);
		}(t, this), this.finished = !0;
		const { buffer: e, view: r, blockLen: n, isLE: i } = this;
		let { pos: o } = this;
		e[o++] = 128, _$2(this.buffer.subarray(o)), this.padOffset > n - o && (this.process(r, 0), o = 0);
		for (let t = o; t < n; t++) e[t] = 0;
		r.setBigUint64(n - 8, BigInt(8 * this.length), i), this.process(r, 0);
		const a = v$2(t), s = this.outputLen;
		if (s % 4) throw new Error("_sha2: outputLen must be aligned to 32bit");
		const c = s / 4, h = this.get();
		if (c > h.length) throw new Error("_sha2: outputLen bigger than state");
		for (let t = 0; t < c; t++) a.setUint32(4 * t, h[t], i);
	}
	digest() {
		const { buffer: t, outputLen: e } = this;
		this.digestInto(t);
		const r = t.slice(0, e);
		return this.destroy(), r;
	}
	_cloneInto(t) {
		t ||= new this.constructor(), t.set(...this.get());
		const { blockLen: e, buffer: r, length: n, finished: i, destroyed: o, pos: a } = this;
		return t.destroyed = o, t.finished = i, t.length = n, t.pos = a, n % e && t.buffer.set(r), t;
	}
	clone() {
		return this._cloneInto();
	}
};
var O$3 = Uint32Array.from([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]);
var w$3 = Uint32Array.from([
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
var L$3 = /* @__PURE__ */ new Uint32Array(64);
var C$2 = class extends S$3 {
	constructor(t) {
		super(64, t, 8, !1);
	}
	get() {
		const { A: t, B: e, C: r, D: n, E: i, F: o, G: a, H: s } = this;
		return [
			t,
			e,
			r,
			n,
			i,
			o,
			a,
			s
		];
	}
	set(t, e, r, n, i, o, a, s) {
		this.A = 0 | t, this.B = 0 | e, this.C = 0 | r, this.D = 0 | n, this.E = 0 | i, this.F = 0 | o, this.G = 0 | a, this.H = 0 | s;
	}
	process(t, e) {
		for (let r = 0; r < 16; r++, e += 4) L$3[r] = t.getUint32(e, !1);
		for (let t = 16; t < 64; t++) {
			const e = L$3[t - 15], r = L$3[t - 2], n = T$1(e, 7) ^ T$1(e, 18) ^ e >>> 3, i = T$1(r, 17) ^ T$1(r, 19) ^ r >>> 10;
			L$3[t] = i + L$3[t - 7] + n + L$3[t - 16] | 0;
		}
		let { A: r, B: n, C: i, D: o, E: a, F: s, G: c, H: h } = this;
		for (let t = 0; t < 64; t++) {
			const e = h + (T$1(a, 6) ^ T$1(a, 11) ^ T$1(a, 25)) + B$2(a, s, c) + w$3[t] + L$3[t] | 0, u = (T$1(r, 2) ^ T$1(r, 13) ^ T$1(r, 22)) + P$2(r, n, i) | 0;
			h = c, c = s, s = a, a = o + e | 0, o = i, i = n, n = r, r = e + u | 0;
		}
		r = r + this.A | 0, n = n + this.B | 0, i = i + this.C | 0, o = o + this.D | 0, a = a + this.E | 0, s = s + this.F | 0, c = c + this.G | 0, h = h + this.H | 0, this.set(r, n, i, o, a, s, c, h);
	}
	roundClean() {
		_$2(L$3);
	}
	destroy() {
		this.destroyed = !0, this.set(0, 0, 0, 0, 0, 0, 0, 0), _$2(this.buffer);
	}
};
var N$3 = class extends C$2 {
	A = 0 | O$3[0];
	B = 0 | O$3[1];
	C = 0 | O$3[2];
	D = 0 | O$3[3];
	E = 0 | O$3[4];
	F = 0 | O$3[5];
	G = 0 | O$3[6];
	H = 0 | O$3[7];
	constructor() {
		super(32);
	}
};
(function(t, e = {}) {
	const r = (e, r) => t(r).update(e).digest(), n = t(void 0);
	return r.outputLen = n.outputLen, r.blockLen = n.blockLen, r.canXOF = n.canXOF, r.create = (e) => t(e), Object.assign(r, e), Object.freeze(r);
})(() => new N$3(), (R$2 = 1, { oid: Uint8Array.from([
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
	R$2
]) }));
var R$2;
var M$2 = function(t, e) {
	return M$2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, e) {
		t.__proto__ = e;
	} || function(t, e) {
		for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
	}, M$2(t, e);
};
function U$2(t, e) {
	if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
	function r() {
		this.constructor = t;
	}
	M$2(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var j$3 = function() {
	return j$3 = Object.assign || function(t) {
		for (var e, r = 1, n = arguments.length; r < n; r++) for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
		return t;
	}, j$3.apply(this, arguments);
};
function D$2(t, e) {
	var r = {};
	for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
	if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
		var i = 0;
		for (n = Object.getOwnPropertySymbols(t); i < n.length; i++) e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
	}
	return r;
}
function G$2(t, e, r, n) {
	var i, o = arguments.length, a = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
	if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, r, n);
	else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, r, a) : i(e, r)) || a);
	return o > 3 && a && Object.defineProperty(e, r, a), a;
}
function k$3(t, e) {
	return function(r, n) {
		e(r, n, t);
	};
}
function F$2(t, e, r, n, i, o) {
	function a(t) {
		if (void 0 !== t && "function" != typeof t) throw new TypeError("Function expected");
		return t;
	}
	for (var s, c = n.kind, h = "getter" === c ? "get" : "setter" === c ? "set" : "value", u = !e && t ? n.static ? t : t.prototype : null, l = e || (u ? Object.getOwnPropertyDescriptor(u, n.name) : {}), f = !1, p = r.length - 1; p >= 0; p--) {
		var d = {};
		for (var b in n) d[b] = "access" === b ? {} : n[b];
		for (var b in n.access) d.access[b] = n.access[b];
		d.addInitializer = function(t) {
			if (f) throw new TypeError("Cannot add initializers after decoration has completed");
			o.push(a(t || null));
		};
		var y = (0, r[p])("accessor" === c ? {
			get: l.get,
			set: l.set
		} : l[h], d);
		if ("accessor" === c) {
			if (void 0 === y) continue;
			if (null === y || "object" != typeof y) throw new TypeError("Object expected");
			(s = a(y.get)) && (l.get = s), (s = a(y.set)) && (l.set = s), (s = a(y.init)) && i.unshift(s);
		} else (s = a(y)) && ("field" === c ? i.unshift(s) : l[h] = s);
	}
	u && Object.defineProperty(u, n.name, l), f = !0;
}
function x$2(t, e, r) {
	for (var n = arguments.length > 2, i = 0; i < e.length; i++) r = n ? e[i].call(t, r) : e[i].call(t);
	return n ? r : void 0;
}
function $$2(t) {
	return "symbol" == typeof t ? t : "".concat(t);
}
function V$2(t, e, r) {
	return "symbol" == typeof e && (e = e.description ? "[".concat(e.description, "]") : ""), Object.defineProperty(t, "name", {
		configurable: !0,
		value: r ? "".concat(r, " ", e) : e
	});
}
function X$2(t, e) {
	if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
}
function K$2(t, e, r, n) {
	return new (r || (r = Promise))(function(i, o) {
		function a(t) {
			try {
				c(n.next(t));
			} catch (t) {
				o(t);
			}
		}
		function s(t) {
			try {
				c(n.throw(t));
			} catch (t) {
				o(t);
			}
		}
		function c(t) {
			var e;
			t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
				t(e);
			})).then(a, s);
		}
		c((n = n.apply(t, e || [])).next());
	});
}
function Y$2(t, e) {
	var r, n, i, o = {
		label: 0,
		sent: function() {
			if (1 & i[0]) throw i[1];
			return i[1];
		},
		trys: [],
		ops: []
	}, a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
	return a.next = s(0), a.throw = s(1), a.return = s(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
		return this;
	}), a;
	function s(s) {
		return function(c) {
			return function(s) {
				if (r) throw new TypeError("Generator is already executing.");
				for (; a && (a = 0, s[0] && (o = 0)), o;) try {
					if (r = 1, n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, s[1])).done) return i;
					switch (n = 0, i && (s = [2 & s[0], i.value]), s[0]) {
						case 0:
						case 1:
							i = s;
							break;
						case 4: return o.label++, {
							value: s[1],
							done: !1
						};
						case 5:
							o.label++, n = s[1], s = [0];
							continue;
						case 7:
							s = o.ops.pop(), o.trys.pop();
							continue;
						default:
							if (!((i = (i = o.trys).length > 0 && i[i.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
								o = 0;
								continue;
							}
							if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
								o.label = s[1];
								break;
							}
							if (6 === s[0] && o.label < i[1]) {
								o.label = i[1], i = s;
								break;
							}
							if (i && o.label < i[2]) {
								o.label = i[2], o.ops.push(s);
								break;
							}
							i[2] && o.ops.pop(), o.trys.pop();
							continue;
					}
					s = e.call(t, o);
				} catch (t) {
					s = [6, t], n = 0;
				} finally {
					r = i = 0;
				}
				if (5 & s[0]) throw s[1];
				return {
					value: s[0] ? s[1] : void 0,
					done: !0
				};
			}([s, c]);
		};
	}
}
var W$2 = Object.create ? function(t, e, r, n) {
	void 0 === n && (n = r);
	var i = Object.getOwnPropertyDescriptor(e, r);
	i && !("get" in i ? !e.__esModule : i.writable || i.configurable) || (i = {
		enumerable: !0,
		get: function() {
			return e[r];
		}
	}), Object.defineProperty(t, n, i);
} : function(t, e, r, n) {
	void 0 === n && (n = r), t[n] = e[r];
};
function Z$2(t, e) {
	for (var r in t) "default" === r || Object.prototype.hasOwnProperty.call(e, r) || W$2(e, t, r);
}
function J$2(t) {
	var e = "function" == typeof Symbol && Symbol.iterator, r = e && t[e], n = 0;
	if (r) return r.call(t);
	if (t && "number" == typeof t.length) return { next: function() {
		return t && n >= t.length && (t = void 0), {
			value: t && t[n++],
			done: !t
		};
	} };
	throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function z$2(t, e) {
	var r = "function" == typeof Symbol && t[Symbol.iterator];
	if (!r) return t;
	var n, i, o = r.call(t), a = [];
	try {
		for (; (void 0 === e || e-- > 0) && !(n = o.next()).done;) a.push(n.value);
	} catch (t) {
		i = { error: t };
	} finally {
		try {
			n && !n.done && (r = o.return) && r.call(o);
		} finally {
			if (i) throw i.error;
		}
	}
	return a;
}
function Q$2() {
	for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(z$2(arguments[e]));
	return t;
}
function q$2() {
	for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
	var n = Array(t), i = 0;
	for (e = 0; e < r; e++) for (var o = arguments[e], a = 0, s = o.length; a < s; a++, i++) n[i] = o[a];
	return n;
}
function tt$2(t, e, r) {
	if (r || 2 === arguments.length) for (var n, i = 0, o = e.length; i < o; i++) !n && i in e || (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
	return t.concat(n || Array.prototype.slice.call(e));
}
function et$2(t) {
	return this instanceof et$2 ? (this.v = t, this) : new et$2(t);
}
function rt$2(t, e, r) {
	if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	var n, i = r.apply(t, e || []), o = [];
	return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", function(t) {
		return function(e) {
			return Promise.resolve(e).then(t, h);
		};
	}), n[Symbol.asyncIterator] = function() {
		return this;
	}, n;
	function a(t, e) {
		i[t] && (n[t] = function(e) {
			return new Promise(function(r, n) {
				o.push([
					t,
					e,
					r,
					n
				]) > 1 || s(t, e);
			});
		}, e && (n[t] = e(n[t])));
	}
	function s(t, e) {
		try {
			(r = i[t](e)).value instanceof et$2 ? Promise.resolve(r.value.v).then(c, h) : u(o[0][2], r);
		} catch (t) {
			u(o[0][3], t);
		}
		var r;
	}
	function c(t) {
		s("next", t);
	}
	function h(t) {
		s("throw", t);
	}
	function u(t, e) {
		t(e), o.shift(), o.length && s(o[0][0], o[0][1]);
	}
}
function nt$2(t) {
	var e = {}, r;
	return n("next"), n("throw", function(t) {
		throw t;
	}), n("return"), e[Symbol.iterator] = function() {
		return this;
	}, e;
	function n(n, i) {
		e[n] = t[n] ? function(e) {
			return (r = !r) ? {
				value: et$2(t[n](e)),
				done: !1
			} : i ? i(e) : e;
		} : i;
	}
}
function it$2(t) {
	if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	var e, r = t[Symbol.asyncIterator];
	return r ? r.call(t) : (t = J$2(t), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
		return this;
	}, e);
	function n(r) {
		e[r] = t[r] && function(e) {
			return new Promise(function(n, i) {
				(function(t, e, r, n) {
					Promise.resolve(n).then(function(e) {
						t({
							value: e,
							done: r
						});
					}, e);
				})(n, i, (e = t[r](e)).done, e.value);
			});
		};
	}
}
function ot$2(t, e) {
	return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
var at$2 = Object.create ? function(t, e) {
	Object.defineProperty(t, "default", {
		enumerable: !0,
		value: e
	});
} : function(t, e) {
	t.default = e;
};
var st$2 = function(t) {
	return st$2 = Object.getOwnPropertyNames || function(t) {
		var e = [];
		for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[e.length] = r);
		return e;
	}, st$2(t);
};
function ct$2(t) {
	if (t && t.__esModule) return t;
	var e = {};
	if (null != t) for (var r = st$2(t), n = 0; n < r.length; n++) "default" !== r[n] && W$2(e, t, r[n]);
	return at$2(e, t), e;
}
function ht$2(t) {
	return t && t.__esModule ? t : { default: t };
}
function ut$2(t, e, r, n) {
	if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
	if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
	return "m" === r ? n : "a" === r ? n.call(t) : n ? n.value : e.get(t);
}
function lt$2(t, e, r, n, i) {
	if ("m" === n) throw new TypeError("Private method is not writable");
	if ("a" === n && !i) throw new TypeError("Private accessor was defined without a setter");
	if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
	return "a" === n ? i.call(t, r) : i ? i.value = r : e.set(t, r), r;
}
function ft$2(t, e) {
	if (null === e || "object" != typeof e && "function" != typeof e) throw new TypeError("Cannot use 'in' operator on non-object");
	return "function" == typeof t ? e === t : t.has(e);
}
function pt$2(t, e, r) {
	if (null != e) {
		if ("object" != typeof e && "function" != typeof e) throw new TypeError("Object expected.");
		var n, i;
		if (r) {
			if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
			n = e[Symbol.asyncDispose];
		}
		if (void 0 === n) {
			if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
			n = e[Symbol.dispose], r && (i = n);
		}
		if ("function" != typeof n) throw new TypeError("Object not disposable.");
		i && (n = function() {
			try {
				i.call(this);
			} catch (t) {
				return Promise.reject(t);
			}
		}), t.stack.push({
			value: e,
			dispose: n,
			async: r
		});
	} else r && t.stack.push({ async: !0 });
	return e;
}
var dt$2 = "function" == typeof SuppressedError ? SuppressedError : function(t, e, r) {
	var n = new Error(r);
	return n.name = "SuppressedError", n.error = t, n.suppressed = e, n;
};
function bt$2(t) {
	function e(e) {
		t.error = t.hasError ? new dt$2(e, t.error, "An error was suppressed during disposal.") : e, t.hasError = !0;
	}
	var r, n = 0;
	return function i() {
		for (; r = t.stack.pop();) try {
			if (!r.async && 1 === n) return n = 0, t.stack.push(r), Promise.resolve().then(i);
			if (r.dispose) {
				var o = r.dispose.call(r.value);
				if (r.async) return n |= 2, Promise.resolve(o).then(i, function(t) {
					return e(t), i();
				});
			} else n |= 1;
		} catch (t) {
			e(t);
		}
		if (1 === n) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
		if (t.hasError) throw t.error;
	}();
}
function yt$2(t, e) {
	return "string" == typeof t && /^\.\.?\//.test(t) ? t.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(t, r, n, i, o) {
		return r ? e ? ".jsx" : ".js" : !n || i && o ? n + i + "." + o.toLowerCase() + "js" : t;
	}) : t;
}
var mt$2;
var gt$2;
var Et$2;
var vt$2 = Object.freeze({
	__proto__: null,
	__addDisposableResource: pt$2,
	get __assign() {
		return j$3;
	},
	__asyncDelegator: nt$2,
	__asyncGenerator: rt$2,
	__asyncValues: it$2,
	__await: et$2,
	__awaiter: K$2,
	__classPrivateFieldGet: ut$2,
	__classPrivateFieldIn: ft$2,
	__classPrivateFieldSet: lt$2,
	__createBinding: W$2,
	__decorate: G$2,
	__disposeResources: bt$2,
	__esDecorate: F$2,
	__exportStar: Z$2,
	__extends: U$2,
	__generator: Y$2,
	__importDefault: ht$2,
	__importStar: ct$2,
	__makeTemplateObject: ot$2,
	__metadata: X$2,
	__param: k$3,
	__propKey: $$2,
	__read: z$2,
	__rest: D$2,
	__rewriteRelativeImportExtension: yt$2,
	__runInitializers: x$2,
	__setFunctionName: V$2,
	__spread: Q$2,
	__spreadArray: tt$2,
	__spreadArrays: q$2,
	__values: J$2,
	default: {
		__extends: U$2,
		__assign: j$3,
		__rest: D$2,
		__decorate: G$2,
		__param: k$3,
		__esDecorate: F$2,
		__runInitializers: x$2,
		__propKey: $$2,
		__setFunctionName: V$2,
		__metadata: X$2,
		__awaiter: K$2,
		__generator: Y$2,
		__createBinding: W$2,
		__exportStar: Z$2,
		__values: J$2,
		__read: z$2,
		__spread: Q$2,
		__spreadArrays: q$2,
		__spreadArray: tt$2,
		__await: et$2,
		__asyncGenerator: rt$2,
		__asyncDelegator: nt$2,
		__asyncValues: it$2,
		__makeTemplateObject: ot$2,
		__importStar: ct$2,
		__importDefault: ht$2,
		__classPrivateFieldGet: ut$2,
		__classPrivateFieldSet: lt$2,
		__classPrivateFieldIn: ft$2,
		__addDisposableResource: pt$2,
		__disposeResources: bt$2,
		__rewriteRelativeImportExtension: yt$2
	}
});
(function(t) {
	t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(mt$2 || (mt$2 = {})), function(t) {
	t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
}(gt$2 || (gt$2 = {})), function(t) {
	t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
}(Et$2 || (Et$2 = {}));
var Tt$2 = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
var Ht$1 = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function At$2(t) {
	var e = {};
	return t.replace(Ht$1, function(t) {
		var r = t.length;
		switch (t[0]) {
			case "G":
				e.era = 4 === r ? "long" : 5 === r ? "narrow" : "short";
				break;
			case "y":
				e.year = 2 === r ? "2-digit" : "numeric";
				break;
			case "Y":
			case "u":
			case "U":
			case "r": throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
			case "q":
			case "Q": throw new RangeError("`q/Q` (quarter) patterns are not supported");
			case "M":
			case "L":
				e.month = [
					"numeric",
					"2-digit",
					"short",
					"long",
					"narrow"
				][r - 1];
				break;
			case "w":
			case "W": throw new RangeError("`w/W` (week) patterns are not supported");
			case "d":
				e.day = ["numeric", "2-digit"][r - 1];
				break;
			case "D":
			case "F":
			case "g": throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
			case "E":
				e.weekday = 4 === r ? "long" : 5 === r ? "narrow" : "short";
				break;
			case "e":
				if (r < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
				e.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][r - 4];
				break;
			case "c":
				if (r < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
				e.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][r - 4];
				break;
			case "a":
				e.hour12 = !0;
				break;
			case "b":
			case "B": throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
			case "h":
				e.hourCycle = "h12", e.hour = ["numeric", "2-digit"][r - 1];
				break;
			case "H":
				e.hourCycle = "h23", e.hour = ["numeric", "2-digit"][r - 1];
				break;
			case "K":
				e.hourCycle = "h11", e.hour = ["numeric", "2-digit"][r - 1];
				break;
			case "k":
				e.hourCycle = "h24", e.hour = ["numeric", "2-digit"][r - 1];
				break;
			case "j":
			case "J":
			case "C": throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
			case "m":
				e.minute = ["numeric", "2-digit"][r - 1];
				break;
			case "s":
				e.second = ["numeric", "2-digit"][r - 1];
				break;
			case "S":
			case "A": throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
			case "z":
				e.timeZoneName = r < 4 ? "short" : "long";
				break;
			case "Z":
			case "O":
			case "v":
			case "V":
			case "X":
			case "x": throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
		}
		return "";
	}), e;
}
var Bt$1 = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Pt$1(t) {
	return t.replace(/^(.*?)-/, "");
}
var St$1 = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
var Ot$1 = /^(@+)?(\+|#+)?[rs]?$/g;
var wt$1 = /(\*)(0+)|(#+)(0+)|(0+)/g;
var Lt$1 = /^(0+)$/;
function Ct$1(t) {
	var e = {};
	return "r" === t[t.length - 1] ? e.roundingPriority = "morePrecision" : "s" === t[t.length - 1] && (e.roundingPriority = "lessPrecision"), t.replace(Ot$1, function(t, r, n) {
		return "string" != typeof n ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : "+" === n ? e.minimumSignificantDigits = r.length : "#" === r[0] ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), "";
	}), e;
}
function Nt$1(t) {
	switch (t) {
		case "sign-auto": return { signDisplay: "auto" };
		case "sign-accounting":
		case "()": return { currencySign: "accounting" };
		case "sign-always":
		case "+!": return { signDisplay: "always" };
		case "sign-accounting-always":
		case "()!": return {
			signDisplay: "always",
			currencySign: "accounting"
		};
		case "sign-except-zero":
		case "+?": return { signDisplay: "exceptZero" };
		case "sign-accounting-except-zero":
		case "()?": return {
			signDisplay: "exceptZero",
			currencySign: "accounting"
		};
		case "sign-never":
		case "+_": return { signDisplay: "never" };
	}
}
function It$1(t) {
	var e;
	if ("E" === t[0] && "E" === t[1] ? (e = { notation: "engineering" }, t = t.slice(2)) : "E" === t[0] && (e = { notation: "scientific" }, t = t.slice(1)), e) {
		var r = t.slice(0, 2);
		if ("+!" === r ? (e.signDisplay = "always", t = t.slice(2)) : "+?" === r && (e.signDisplay = "exceptZero", t = t.slice(2)), !Lt$1.test(t)) throw new Error("Malformed concise eng/scientific notation");
		e.minimumIntegerDigits = t.length;
	}
	return e;
}
function Rt$1(t) {
	return Nt$1(t) || {};
}
function Mt$1(t) {
	for (var e = {}, r = 0, n = t; r < n.length; r++) {
		var i = n[r];
		switch (i.stem) {
			case "percent":
			case "%":
				e.style = "percent";
				continue;
			case "%x100":
				e.style = "percent", e.scale = 100;
				continue;
			case "currency":
				e.style = "currency", e.currency = i.options[0];
				continue;
			case "group-off":
			case ",_":
				e.useGrouping = !1;
				continue;
			case "precision-integer":
			case ".":
				e.maximumFractionDigits = 0;
				continue;
			case "measure-unit":
			case "unit":
				e.style = "unit", e.unit = Pt$1(i.options[0]);
				continue;
			case "compact-short":
			case "K":
				e.notation = "compact", e.compactDisplay = "short";
				continue;
			case "compact-long":
			case "KK":
				e.notation = "compact", e.compactDisplay = "long";
				continue;
			case "scientific":
				e = j$3(j$3(j$3({}, e), { notation: "scientific" }), i.options.reduce(function(t, e) {
					return j$3(j$3({}, t), Rt$1(e));
				}, {}));
				continue;
			case "engineering":
				e = j$3(j$3(j$3({}, e), { notation: "engineering" }), i.options.reduce(function(t, e) {
					return j$3(j$3({}, t), Rt$1(e));
				}, {}));
				continue;
			case "notation-simple":
				e.notation = "standard";
				continue;
			case "unit-width-narrow":
				e.currencyDisplay = "narrowSymbol", e.unitDisplay = "narrow";
				continue;
			case "unit-width-short":
				e.currencyDisplay = "code", e.unitDisplay = "short";
				continue;
			case "unit-width-full-name":
				e.currencyDisplay = "name", e.unitDisplay = "long";
				continue;
			case "unit-width-iso-code":
				e.currencyDisplay = "symbol";
				continue;
			case "scale":
				e.scale = parseFloat(i.options[0]);
				continue;
			case "rounding-mode-floor":
				e.roundingMode = "floor";
				continue;
			case "rounding-mode-ceiling":
				e.roundingMode = "ceil";
				continue;
			case "rounding-mode-down":
				e.roundingMode = "trunc";
				continue;
			case "rounding-mode-up":
				e.roundingMode = "expand";
				continue;
			case "rounding-mode-half-even":
				e.roundingMode = "halfEven";
				continue;
			case "rounding-mode-half-down":
				e.roundingMode = "halfTrunc";
				continue;
			case "rounding-mode-half-up":
				e.roundingMode = "halfExpand";
				continue;
			case "integer-width":
				if (i.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
				i.options[0].replace(wt$1, function(t, r, n, i, o, a) {
					if (r) e.minimumIntegerDigits = n.length;
					else {
						if (i && o) throw new Error("We currently do not support maximum integer digits");
						if (a) throw new Error("We currently do not support exact integer digits");
					}
					return "";
				});
				continue;
		}
		if (Lt$1.test(i.stem)) e.minimumIntegerDigits = i.stem.length;
		else if (St$1.test(i.stem)) {
			if (i.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
			i.stem.replace(St$1, function(t, r, n, i, o, a) {
				return "*" === n ? e.minimumFractionDigits = r.length : i && "#" === i[0] ? e.maximumFractionDigits = i.length : o && a ? (e.minimumFractionDigits = o.length, e.maximumFractionDigits = o.length + a.length) : (e.minimumFractionDigits = r.length, e.maximumFractionDigits = r.length), "";
			});
			var o = i.options[0];
			"w" === o ? e = j$3(j$3({}, e), { trailingZeroDisplay: "stripIfInteger" }) : o && (e = j$3(j$3({}, e), Ct$1(o)));
		} else if (Ot$1.test(i.stem)) e = j$3(j$3({}, e), Ct$1(i.stem));
		else {
			var a = Nt$1(i.stem);
			a && (e = j$3(j$3({}, e), a));
			var s = It$1(i.stem);
			s && (e = j$3(j$3({}, e), s));
		}
	}
	return e;
}
var Ut$1;
var jt$1 = {
	"001": ["H", "h"],
	419: [
		"h",
		"H",
		"hB",
		"hb"
	],
	AC: [
		"H",
		"h",
		"hb",
		"hB"
	],
	AD: ["H", "hB"],
	AE: [
		"h",
		"hB",
		"hb",
		"H"
	],
	AF: [
		"H",
		"hb",
		"hB",
		"h"
	],
	AG: [
		"h",
		"hb",
		"H",
		"hB"
	],
	AI: [
		"H",
		"h",
		"hb",
		"hB"
	],
	AL: [
		"h",
		"H",
		"hB"
	],
	AM: ["H", "hB"],
	AO: ["H", "hB"],
	AR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	AS: ["h", "H"],
	AT: ["H", "hB"],
	AU: [
		"h",
		"hb",
		"H",
		"hB"
	],
	AW: ["H", "hB"],
	AX: ["H"],
	AZ: [
		"H",
		"hB",
		"h"
	],
	BA: [
		"H",
		"hB",
		"h"
	],
	BB: [
		"h",
		"hb",
		"H",
		"hB"
	],
	BD: [
		"h",
		"hB",
		"H"
	],
	BE: ["H", "hB"],
	BF: ["H", "hB"],
	BG: [
		"H",
		"hB",
		"h"
	],
	BH: [
		"h",
		"hB",
		"hb",
		"H"
	],
	BI: ["H", "h"],
	BJ: ["H", "hB"],
	BL: ["H", "hB"],
	BM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	BN: [
		"hb",
		"hB",
		"h",
		"H"
	],
	BO: [
		"h",
		"H",
		"hB",
		"hb"
	],
	BQ: ["H"],
	BR: ["H", "hB"],
	BS: [
		"h",
		"hb",
		"H",
		"hB"
	],
	BT: ["h", "H"],
	BW: [
		"H",
		"h",
		"hb",
		"hB"
	],
	BY: ["H", "h"],
	BZ: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CA: [
		"h",
		"hb",
		"H",
		"hB"
	],
	CC: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CD: ["hB", "H"],
	CF: [
		"H",
		"h",
		"hB"
	],
	CG: ["H", "hB"],
	CH: [
		"H",
		"hB",
		"h"
	],
	CI: ["H", "hB"],
	CK: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CL: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CM: [
		"H",
		"h",
		"hB"
	],
	CN: [
		"H",
		"hB",
		"hb",
		"h"
	],
	CO: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CP: ["H"],
	CR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CU: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CV: ["H", "hB"],
	CW: ["H", "hB"],
	CX: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CY: [
		"h",
		"H",
		"hb",
		"hB"
	],
	CZ: ["H"],
	DE: ["H", "hB"],
	DG: [
		"H",
		"h",
		"hb",
		"hB"
	],
	DJ: ["h", "H"],
	DK: ["H"],
	DM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	DO: [
		"h",
		"H",
		"hB",
		"hb"
	],
	DZ: [
		"h",
		"hB",
		"hb",
		"H"
	],
	EA: [
		"H",
		"h",
		"hB",
		"hb"
	],
	EC: [
		"h",
		"H",
		"hB",
		"hb"
	],
	EE: ["H", "hB"],
	EG: [
		"h",
		"hB",
		"hb",
		"H"
	],
	EH: [
		"h",
		"hB",
		"hb",
		"H"
	],
	ER: ["h", "H"],
	ES: [
		"H",
		"hB",
		"h",
		"hb"
	],
	ET: [
		"hB",
		"hb",
		"h",
		"H"
	],
	FI: ["H"],
	FJ: [
		"h",
		"hb",
		"H",
		"hB"
	],
	FK: [
		"H",
		"h",
		"hb",
		"hB"
	],
	FM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	FO: ["H", "h"],
	FR: ["H", "hB"],
	GA: ["H", "hB"],
	GB: [
		"H",
		"h",
		"hb",
		"hB"
	],
	GD: [
		"h",
		"hb",
		"H",
		"hB"
	],
	GE: [
		"H",
		"hB",
		"h"
	],
	GF: ["H", "hB"],
	GG: [
		"H",
		"h",
		"hb",
		"hB"
	],
	GH: ["h", "H"],
	GI: [
		"H",
		"h",
		"hb",
		"hB"
	],
	GL: ["H", "h"],
	GM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	GN: ["H", "hB"],
	GP: ["H", "hB"],
	GQ: [
		"H",
		"hB",
		"h",
		"hb"
	],
	GR: [
		"h",
		"H",
		"hb",
		"hB"
	],
	GT: [
		"h",
		"H",
		"hB",
		"hb"
	],
	GU: [
		"h",
		"hb",
		"H",
		"hB"
	],
	GW: ["H", "hB"],
	GY: [
		"h",
		"hb",
		"H",
		"hB"
	],
	HK: [
		"h",
		"hB",
		"hb",
		"H"
	],
	HN: [
		"h",
		"H",
		"hB",
		"hb"
	],
	HR: ["H", "hB"],
	HU: ["H", "h"],
	IC: [
		"H",
		"h",
		"hB",
		"hb"
	],
	ID: ["H"],
	IE: [
		"H",
		"h",
		"hb",
		"hB"
	],
	IL: ["H", "hB"],
	IM: [
		"H",
		"h",
		"hb",
		"hB"
	],
	IN: ["h", "H"],
	IO: [
		"H",
		"h",
		"hb",
		"hB"
	],
	IQ: [
		"h",
		"hB",
		"hb",
		"H"
	],
	IR: ["hB", "H"],
	IS: ["H"],
	IT: ["H", "hB"],
	JE: [
		"H",
		"h",
		"hb",
		"hB"
	],
	JM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	JO: [
		"h",
		"hB",
		"hb",
		"H"
	],
	JP: [
		"H",
		"K",
		"h"
	],
	KE: [
		"hB",
		"hb",
		"H",
		"h"
	],
	KG: [
		"H",
		"h",
		"hB",
		"hb"
	],
	KH: [
		"hB",
		"h",
		"H",
		"hb"
	],
	KI: [
		"h",
		"hb",
		"H",
		"hB"
	],
	KM: [
		"H",
		"h",
		"hB",
		"hb"
	],
	KN: [
		"h",
		"hb",
		"H",
		"hB"
	],
	KP: [
		"h",
		"H",
		"hB",
		"hb"
	],
	KR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	KW: [
		"h",
		"hB",
		"hb",
		"H"
	],
	KY: [
		"h",
		"hb",
		"H",
		"hB"
	],
	KZ: ["H", "hB"],
	LA: [
		"H",
		"hb",
		"hB",
		"h"
	],
	LB: [
		"h",
		"hB",
		"hb",
		"H"
	],
	LC: [
		"h",
		"hb",
		"H",
		"hB"
	],
	LI: [
		"H",
		"hB",
		"h"
	],
	LK: [
		"H",
		"h",
		"hB",
		"hb"
	],
	LR: [
		"h",
		"hb",
		"H",
		"hB"
	],
	LS: ["h", "H"],
	LT: [
		"H",
		"h",
		"hb",
		"hB"
	],
	LU: [
		"H",
		"h",
		"hB"
	],
	LV: [
		"H",
		"hB",
		"hb",
		"h"
	],
	LY: [
		"h",
		"hB",
		"hb",
		"H"
	],
	MA: [
		"H",
		"h",
		"hB",
		"hb"
	],
	MC: ["H", "hB"],
	MD: ["H", "hB"],
	ME: [
		"H",
		"hB",
		"h"
	],
	MF: ["H", "hB"],
	MG: ["H", "h"],
	MH: [
		"h",
		"hb",
		"H",
		"hB"
	],
	MK: [
		"H",
		"h",
		"hb",
		"hB"
	],
	ML: ["H"],
	MM: [
		"hB",
		"hb",
		"H",
		"h"
	],
	MN: [
		"H",
		"h",
		"hb",
		"hB"
	],
	MO: [
		"h",
		"hB",
		"hb",
		"H"
	],
	MP: [
		"h",
		"hb",
		"H",
		"hB"
	],
	MQ: ["H", "hB"],
	MR: [
		"h",
		"hB",
		"hb",
		"H"
	],
	MS: [
		"H",
		"h",
		"hb",
		"hB"
	],
	MT: ["H", "h"],
	MU: ["H", "h"],
	MV: ["H", "h"],
	MW: [
		"h",
		"hb",
		"H",
		"hB"
	],
	MX: [
		"h",
		"H",
		"hB",
		"hb"
	],
	MY: [
		"hb",
		"hB",
		"h",
		"H"
	],
	MZ: ["H", "hB"],
	NA: [
		"h",
		"H",
		"hB",
		"hb"
	],
	NC: ["H", "hB"],
	NE: ["H"],
	NF: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NG: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NI: [
		"h",
		"H",
		"hB",
		"hb"
	],
	NL: ["H", "hB"],
	NO: ["H", "h"],
	NP: [
		"H",
		"h",
		"hB"
	],
	NR: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NU: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NZ: [
		"h",
		"hb",
		"H",
		"hB"
	],
	OM: [
		"h",
		"hB",
		"hb",
		"H"
	],
	PA: [
		"h",
		"H",
		"hB",
		"hb"
	],
	PE: [
		"h",
		"H",
		"hB",
		"hb"
	],
	PF: [
		"H",
		"h",
		"hB"
	],
	PG: ["h", "H"],
	PH: [
		"h",
		"hB",
		"hb",
		"H"
	],
	PK: [
		"h",
		"hB",
		"H"
	],
	PL: ["H", "h"],
	PM: ["H", "hB"],
	PN: [
		"H",
		"h",
		"hb",
		"hB"
	],
	PR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	PS: [
		"h",
		"hB",
		"hb",
		"H"
	],
	PT: ["H", "hB"],
	PW: ["h", "H"],
	PY: [
		"h",
		"H",
		"hB",
		"hb"
	],
	QA: [
		"h",
		"hB",
		"hb",
		"H"
	],
	RE: ["H", "hB"],
	RO: ["H", "hB"],
	RS: [
		"H",
		"hB",
		"h"
	],
	RU: ["H"],
	RW: ["H", "h"],
	SA: [
		"h",
		"hB",
		"hb",
		"H"
	],
	SB: [
		"h",
		"hb",
		"H",
		"hB"
	],
	SC: [
		"H",
		"h",
		"hB"
	],
	SD: [
		"h",
		"hB",
		"hb",
		"H"
	],
	SE: ["H"],
	SG: [
		"h",
		"hb",
		"H",
		"hB"
	],
	SH: [
		"H",
		"h",
		"hb",
		"hB"
	],
	SI: ["H", "hB"],
	SJ: ["H"],
	SK: ["H"],
	SL: [
		"h",
		"hb",
		"H",
		"hB"
	],
	SM: [
		"H",
		"h",
		"hB"
	],
	SN: [
		"H",
		"h",
		"hB"
	],
	SO: ["h", "H"],
	SR: ["H", "hB"],
	SS: [
		"h",
		"hb",
		"H",
		"hB"
	],
	ST: ["H", "hB"],
	SV: [
		"h",
		"H",
		"hB",
		"hb"
	],
	SX: [
		"H",
		"h",
		"hb",
		"hB"
	],
	SY: [
		"h",
		"hB",
		"hb",
		"H"
	],
	SZ: [
		"h",
		"hb",
		"H",
		"hB"
	],
	TA: [
		"H",
		"h",
		"hb",
		"hB"
	],
	TC: [
		"h",
		"hb",
		"H",
		"hB"
	],
	TD: [
		"h",
		"H",
		"hB"
	],
	TF: [
		"H",
		"h",
		"hB"
	],
	TG: ["H", "hB"],
	TH: ["H", "h"],
	TJ: ["H", "h"],
	TL: [
		"H",
		"hB",
		"hb",
		"h"
	],
	TM: ["H", "h"],
	TN: [
		"h",
		"hB",
		"hb",
		"H"
	],
	TO: ["h", "H"],
	TR: ["H", "hB"],
	TT: [
		"h",
		"hb",
		"H",
		"hB"
	],
	TW: [
		"hB",
		"hb",
		"h",
		"H"
	],
	TZ: [
		"hB",
		"hb",
		"H",
		"h"
	],
	UA: [
		"H",
		"hB",
		"h"
	],
	UG: [
		"hB",
		"hb",
		"H",
		"h"
	],
	UM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	US: [
		"h",
		"hb",
		"H",
		"hB"
	],
	UY: [
		"h",
		"H",
		"hB",
		"hb"
	],
	UZ: [
		"H",
		"hB",
		"h"
	],
	VA: [
		"H",
		"h",
		"hB"
	],
	VC: [
		"h",
		"hb",
		"H",
		"hB"
	],
	VE: [
		"h",
		"H",
		"hB",
		"hb"
	],
	VG: [
		"h",
		"hb",
		"H",
		"hB"
	],
	VI: [
		"h",
		"hb",
		"H",
		"hB"
	],
	VN: ["H", "h"],
	VU: ["h", "H"],
	WF: ["H", "hB"],
	WS: ["h", "H"],
	XK: [
		"H",
		"hB",
		"h"
	],
	YE: [
		"h",
		"hB",
		"hb",
		"H"
	],
	YT: ["H", "hB"],
	ZA: [
		"H",
		"h",
		"hb",
		"hB"
	],
	ZM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	ZW: ["H", "h"],
	"af-ZA": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"ar-001": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"ca-ES": [
		"H",
		"h",
		"hB"
	],
	"en-001": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"en-HK": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"en-IL": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"en-MY": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"es-BR": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"es-ES": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"es-GQ": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"fr-CA": [
		"H",
		"h",
		"hB"
	],
	"gl-ES": [
		"H",
		"h",
		"hB"
	],
	"gu-IN": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"hi-IN": [
		"hB",
		"h",
		"H"
	],
	"it-CH": [
		"H",
		"h",
		"hB"
	],
	"it-IT": [
		"H",
		"h",
		"hB"
	],
	"kn-IN": [
		"hB",
		"h",
		"H"
	],
	"ml-IN": [
		"hB",
		"h",
		"H"
	],
	"mr-IN": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"pa-IN": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"ta-IN": [
		"hB",
		"h",
		"hb",
		"H"
	],
	"te-IN": [
		"hB",
		"h",
		"H"
	],
	"zu-ZA": [
		"H",
		"hB",
		"hb",
		"h"
	]
};
function Dt$1(t) {
	var e = t.hourCycle;
	if (void 0 === e && t.hourCycles && t.hourCycles.length && (e = t.hourCycles[0]), e) switch (e) {
		case "h24": return "k";
		case "h23": return "H";
		case "h12": return "h";
		case "h11": return "K";
		default: throw new Error("Invalid hourCycle");
	}
	var r, n = t.language;
	return "root" !== n && (r = t.maximize().region), (jt$1[r || ""] || jt$1[n || ""] || jt$1["".concat(n, "-001")] || jt$1["001"])[0];
}
var Gt$1 = new RegExp("^".concat(Tt$2.source, "*"));
var kt$1 = new RegExp("".concat(Tt$2.source, "*$"));
function Ft$1(t, e) {
	return {
		start: t,
		end: e
	};
}
var xt$1 = !!String.prototype.startsWith && "_a".startsWith("a", 1);
var $t$1 = !!String.fromCodePoint;
var Vt$1 = !!Object.fromEntries;
var Xt = !!String.prototype.codePointAt;
var Kt$1 = !!String.prototype.trimStart;
var Yt = !!String.prototype.trimEnd;
var Wt = Number.isSafeInteger ? Number.isSafeInteger : function(t) {
	return "number" == typeof t && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
};
var Zt$1 = !0;
try {
	Zt$1 = "a" === (null === (Ut$1 = ne$2("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Ut$1 ? void 0 : Ut$1[0]);
} catch (R) {
	Zt$1 = !1;
}
var Jt;
var zt$1 = xt$1 ? function(t, e, r) {
	return t.startsWith(e, r);
} : function(t, e, r) {
	return t.slice(r, r + e.length) === e;
};
var Qt$1 = $t$1 ? String.fromCodePoint : function() {
	for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
	for (var r, n = "", i = t.length, o = 0; i > o;) {
		if ((r = t[o++]) > 1114111) throw RangeError(r + " is not a valid code point");
		n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320);
	}
	return n;
};
var qt = Vt$1 ? Object.fromEntries : function(t) {
	for (var e = {}, r = 0, n = t; r < n.length; r++) {
		var i = n[r], o = i[0];
		e[o] = i[1];
	}
	return e;
};
var te$2 = Xt ? function(t, e) {
	return t.codePointAt(e);
} : function(t, e) {
	var r = t.length;
	if (!(e < 0 || e >= r)) {
		var n, i = t.charCodeAt(e);
		return i < 55296 || i > 56319 || e + 1 === r || (n = t.charCodeAt(e + 1)) < 56320 || n > 57343 ? i : n - 56320 + (i - 55296 << 10) + 65536;
	}
};
var ee$2 = Kt$1 ? function(t) {
	return t.trimStart();
} : function(t) {
	return t.replace(Gt$1, "");
};
var re$1 = Yt ? function(t) {
	return t.trimEnd();
} : function(t) {
	return t.replace(kt$1, "");
};
function ne$2(t, e) {
	return new RegExp(t, e);
}
if (Zt$1) {
	var ie$2 = ne$2("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
	Jt = function(t, e) {
		var r;
		return ie$2.lastIndex = e, null !== (r = ie$2.exec(t)[1]) && void 0 !== r ? r : "";
	};
} else Jt = function(t, e) {
	for (var r = [];;) {
		var n = te$2(t, e);
		if (void 0 === n || ce$2(n) || he$2(n)) break;
		r.push(n), e += n >= 65536 ? 2 : 1;
	}
	return Qt$1.apply(void 0, r);
};
(function() {
	function t(t, e) {
		void 0 === e && (e = {}), this.message = t, this.position = {
			offset: 0,
			line: 1,
			column: 1
		}, this.ignoreTag = !!e.ignoreTag, this.locale = e.locale, this.requiresOtherClause = !!e.requiresOtherClause, this.shouldParseSkeletons = !!e.shouldParseSkeletons;
	}
	return t.prototype.parse = function() {
		if (0 !== this.offset()) throw Error("parser can only be used once");
		return this.parseMessage(0, "", !1);
	}, t.prototype.parseMessage = function(t, e, r) {
		for (var n = []; !this.isEOF();) {
			var i = this.char();
			if (123 === i) {
				if ((o = this.parseArgument(t, r)).err) return o;
				n.push(o.val);
			} else {
				if (125 === i && t > 0) break;
				if (35 !== i || "plural" !== e && "selectordinal" !== e) {
					if (60 === i && !this.ignoreTag && 47 === this.peek()) {
						if (r) break;
						return this.error(mt$2.UNMATCHED_CLOSING_TAG, Ft$1(this.clonePosition(), this.clonePosition()));
					}
					if (60 === i && !this.ignoreTag && ae$2(this.peek() || 0)) {
						if ((o = this.parseTag(t, e)).err) return o;
						n.push(o.val);
					} else {
						var o;
						if ((o = this.parseLiteral(t, e)).err) return o;
						n.push(o.val);
					}
				} else {
					var a = this.clonePosition();
					this.bump(), n.push({
						type: gt$2.pound,
						location: Ft$1(a, this.clonePosition())
					});
				}
			}
		}
		return {
			val: n,
			err: null
		};
	}, t.prototype.parseTag = function(t, e) {
		var r = this.clonePosition();
		this.bump();
		var n = this.parseTagName();
		if (this.bumpSpace(), this.bumpIf("/>")) return {
			val: {
				type: gt$2.literal,
				value: "<".concat(n, "/>"),
				location: Ft$1(r, this.clonePosition())
			},
			err: null
		};
		if (this.bumpIf(">")) {
			var i = this.parseMessage(t + 1, e, !0);
			if (i.err) return i;
			var o = i.val, a = this.clonePosition();
			if (this.bumpIf("</")) {
				if (this.isEOF() || !ae$2(this.char())) return this.error(mt$2.INVALID_TAG, Ft$1(a, this.clonePosition()));
				var s = this.clonePosition();
				return n !== this.parseTagName() ? this.error(mt$2.UNMATCHED_CLOSING_TAG, Ft$1(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
					val: {
						type: gt$2.tag,
						value: n,
						children: o,
						location: Ft$1(r, this.clonePosition())
					},
					err: null
				} : this.error(mt$2.INVALID_TAG, Ft$1(a, this.clonePosition())));
			}
			return this.error(mt$2.UNCLOSED_TAG, Ft$1(r, this.clonePosition()));
		}
		return this.error(mt$2.INVALID_TAG, Ft$1(r, this.clonePosition()));
	}, t.prototype.parseTagName = function() {
		var t = this.offset();
		for (this.bump(); !this.isEOF() && se$2(this.char());) this.bump();
		return this.message.slice(t, this.offset());
	}, t.prototype.parseLiteral = function(t, e) {
		for (var r = this.clonePosition(), n = "";;) {
			var i = this.tryParseQuote(e);
			if (i) n += i;
			else {
				var o = this.tryParseUnquoted(t, e);
				if (o) n += o;
				else {
					var a = this.tryParseLeftAngleBracket();
					if (!a) break;
					n += a;
				}
			}
		}
		var s = Ft$1(r, this.clonePosition());
		return {
			val: {
				type: gt$2.literal,
				value: n,
				location: s
			},
			err: null
		};
	}, t.prototype.tryParseLeftAngleBracket = function() {
		return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (ae$2(t = this.peek() || 0) || 47 === t) ? null : (this.bump(), "<");
		var t;
	}, t.prototype.tryParseQuote = function(t) {
		if (this.isEOF() || 39 !== this.char()) return null;
		switch (this.peek()) {
			case 39: return this.bump(), this.bump(), "'";
			case 123:
			case 60:
			case 62:
			case 125: break;
			case 35:
				if ("plural" === t || "selectordinal" === t) break;
				return null;
			default: return null;
		}
		this.bump();
		var e = [this.char()];
		for (this.bump(); !this.isEOF();) {
			var r = this.char();
			if (39 === r) {
				if (39 !== this.peek()) {
					this.bump();
					break;
				}
				e.push(39), this.bump();
			} else e.push(r);
			this.bump();
		}
		return Qt$1.apply(void 0, e);
	}, t.prototype.tryParseUnquoted = function(t, e) {
		if (this.isEOF()) return null;
		var r = this.char();
		return 60 === r || 123 === r || 35 === r && ("plural" === e || "selectordinal" === e) || 125 === r && t > 0 ? null : (this.bump(), Qt$1(r));
	}, t.prototype.parseArgument = function(t, e) {
		var r = this.clonePosition();
		if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(mt$2.EXPECT_ARGUMENT_CLOSING_BRACE, Ft$1(r, this.clonePosition()));
		if (125 === this.char()) return this.bump(), this.error(mt$2.EMPTY_ARGUMENT, Ft$1(r, this.clonePosition()));
		var n = this.parseIdentifierIfPossible().value;
		if (!n) return this.error(mt$2.MALFORMED_ARGUMENT, Ft$1(r, this.clonePosition()));
		if (this.bumpSpace(), this.isEOF()) return this.error(mt$2.EXPECT_ARGUMENT_CLOSING_BRACE, Ft$1(r, this.clonePosition()));
		switch (this.char()) {
			case 125: return this.bump(), {
				val: {
					type: gt$2.argument,
					value: n,
					location: Ft$1(r, this.clonePosition())
				},
				err: null
			};
			case 44: return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(mt$2.EXPECT_ARGUMENT_CLOSING_BRACE, Ft$1(r, this.clonePosition())) : this.parseArgumentOptions(t, e, n, r);
			default: return this.error(mt$2.MALFORMED_ARGUMENT, Ft$1(r, this.clonePosition()));
		}
	}, t.prototype.parseIdentifierIfPossible = function() {
		var t = this.clonePosition(), e = this.offset(), r = Jt(this.message, e), n = e + r.length;
		return this.bumpTo(n), {
			value: r,
			location: Ft$1(t, this.clonePosition())
		};
	}, t.prototype.parseArgumentOptions = function(t, e, r, n) {
		var i, o = this.clonePosition(), a = this.parseIdentifierIfPossible().value, s = this.clonePosition();
		switch (a) {
			case "": return this.error(mt$2.EXPECT_ARGUMENT_TYPE, Ft$1(o, s));
			case "number":
			case "date":
			case "time":
				this.bumpSpace();
				var c = null;
				if (this.bumpIf(",")) {
					this.bumpSpace();
					var h = this.clonePosition();
					if ((m = this.parseSimpleArgStyleIfPossible()).err) return m;
					if (0 === (p = re$1(m.val)).length) return this.error(mt$2.EXPECT_ARGUMENT_STYLE, Ft$1(this.clonePosition(), this.clonePosition()));
					c = {
						style: p,
						styleLocation: Ft$1(h, this.clonePosition())
					};
				}
				if ((g = this.tryParseArgumentClose(n)).err) return g;
				var u = Ft$1(n, this.clonePosition());
				if (c && zt$1(null == c ? void 0 : c.style, "::", 0)) {
					var l = ee$2(c.style.slice(2));
					if ("number" === a) return (m = this.parseNumberSkeletonFromString(l, c.styleLocation)).err ? m : {
						val: {
							type: gt$2.number,
							value: r,
							location: u,
							style: m.val
						},
						err: null
					};
					if (0 === l.length) return this.error(mt$2.EXPECT_DATE_TIME_SKELETON, u);
					var f = l;
					this.locale && (f = function(t, e) {
						for (var r = "", n = 0; n < t.length; n++) {
							var i = t.charAt(n);
							if ("j" === i) {
								for (var o = 0; n + 1 < t.length && t.charAt(n + 1) === i;) o++, n++;
								var a = 1 + (1 & o), s = o < 2 ? 1 : 3 + (o >> 1), c = Dt$1(e);
								for ("H" != c && "k" != c || (s = 0); s-- > 0;) r += "a";
								for (; a-- > 0;) r = c + r;
							} else r += "J" === i ? "H" : i;
						}
						return r;
					}(l, this.locale));
					var p = {
						type: Et$2.dateTime,
						pattern: f,
						location: c.styleLocation,
						parsedOptions: this.shouldParseSkeletons ? At$2(f) : {}
					};
					return {
						val: {
							type: "date" === a ? gt$2.date : gt$2.time,
							value: r,
							location: u,
							style: p
						},
						err: null
					};
				}
				return {
					val: {
						type: "number" === a ? gt$2.number : "date" === a ? gt$2.date : gt$2.time,
						value: r,
						location: u,
						style: null !== (i = null == c ? void 0 : c.style) && void 0 !== i ? i : null
					},
					err: null
				};
			case "plural":
			case "selectordinal":
			case "select":
				var d = this.clonePosition();
				if (this.bumpSpace(), !this.bumpIf(",")) return this.error(mt$2.EXPECT_SELECT_ARGUMENT_OPTIONS, Ft$1(d, j$3({}, d)));
				this.bumpSpace();
				var b = this.parseIdentifierIfPossible(), y = 0;
				if ("select" !== a && "offset" === b.value) {
					if (!this.bumpIf(":")) return this.error(mt$2.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ft$1(this.clonePosition(), this.clonePosition()));
					var m;
					if (this.bumpSpace(), (m = this.tryParseDecimalInteger(mt$2.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, mt$2.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return m;
					this.bumpSpace(), b = this.parseIdentifierIfPossible(), y = m.val;
				}
				var g, E = this.tryParsePluralOrSelectOptions(t, a, e, b);
				if (E.err) return E;
				if ((g = this.tryParseArgumentClose(n)).err) return g;
				var _ = Ft$1(n, this.clonePosition());
				return "select" === a ? {
					val: {
						type: gt$2.select,
						value: r,
						options: qt(E.val),
						location: _
					},
					err: null
				} : {
					val: {
						type: gt$2.plural,
						value: r,
						options: qt(E.val),
						offset: y,
						pluralType: "plural" === a ? "cardinal" : "ordinal",
						location: _
					},
					err: null
				};
			default: return this.error(mt$2.INVALID_ARGUMENT_TYPE, Ft$1(o, s));
		}
	}, t.prototype.tryParseArgumentClose = function(t) {
		return this.isEOF() || 125 !== this.char() ? this.error(mt$2.EXPECT_ARGUMENT_CLOSING_BRACE, Ft$1(t, this.clonePosition())) : (this.bump(), {
			val: !0,
			err: null
		});
	}, t.prototype.parseSimpleArgStyleIfPossible = function() {
		for (var t = 0, e = this.clonePosition(); !this.isEOF();) switch (this.char()) {
			case 39:
				this.bump();
				var r = this.clonePosition();
				if (!this.bumpUntil("'")) return this.error(mt$2.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Ft$1(r, this.clonePosition()));
				this.bump();
				break;
			case 123:
				t += 1, this.bump();
				break;
			case 125:
				if (!(t > 0)) return {
					val: this.message.slice(e.offset, this.offset()),
					err: null
				};
				t -= 1;
				break;
			default: this.bump();
		}
		return {
			val: this.message.slice(e.offset, this.offset()),
			err: null
		};
	}, t.prototype.parseNumberSkeletonFromString = function(t, e) {
		var r = [];
		try {
			r = function(t) {
				if (0 === t.length) throw new Error("Number skeleton cannot be empty");
				for (var e = [], r = 0, n = t.split(Bt$1).filter(function(t) {
					return t.length > 0;
				}); r < n.length; r++) {
					var i = n[r].split("/");
					if (0 === i.length) throw new Error("Invalid number skeleton");
					for (var o = i[0], a = i.slice(1), s = 0, c = a; s < c.length; s++) if (0 === c[s].length) throw new Error("Invalid number skeleton");
					e.push({
						stem: o,
						options: a
					});
				}
				return e;
			}(t);
		} catch (t) {
			return this.error(mt$2.INVALID_NUMBER_SKELETON, e);
		}
		return {
			val: {
				type: Et$2.number,
				tokens: r,
				location: e,
				parsedOptions: this.shouldParseSkeletons ? Mt$1(r) : {}
			},
			err: null
		};
	}, t.prototype.tryParsePluralOrSelectOptions = function(t, e, r, n) {
		for (var i, o = !1, a = [], s = /* @__PURE__ */ new Set(), c = n.value, h = n.location;;) {
			if (0 === c.length) {
				var u = this.clonePosition();
				if ("select" === e || !this.bumpIf("=")) break;
				var l = this.tryParseDecimalInteger(mt$2.EXPECT_PLURAL_ARGUMENT_SELECTOR, mt$2.INVALID_PLURAL_ARGUMENT_SELECTOR);
				if (l.err) return l;
				h = Ft$1(u, this.clonePosition()), c = this.message.slice(u.offset, this.offset());
			}
			if (s.has(c)) return this.error("select" === e ? mt$2.DUPLICATE_SELECT_ARGUMENT_SELECTOR : mt$2.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, h);
			"other" === c && (o = !0), this.bumpSpace();
			var f = this.clonePosition();
			if (!this.bumpIf("{")) return this.error("select" === e ? mt$2.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : mt$2.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Ft$1(this.clonePosition(), this.clonePosition()));
			var p = this.parseMessage(t + 1, e, r);
			if (p.err) return p;
			var d = this.tryParseArgumentClose(f);
			if (d.err) return d;
			a.push([c, {
				value: p.val,
				location: Ft$1(f, this.clonePosition())
			}]), s.add(c), this.bumpSpace(), c = (i = this.parseIdentifierIfPossible()).value, h = i.location;
		}
		return 0 === a.length ? this.error("select" === e ? mt$2.EXPECT_SELECT_ARGUMENT_SELECTOR : mt$2.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ft$1(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(mt$2.MISSING_OTHER_CLAUSE, Ft$1(this.clonePosition(), this.clonePosition())) : {
			val: a,
			err: null
		};
	}, t.prototype.tryParseDecimalInteger = function(t, e) {
		var r = 1, n = this.clonePosition();
		this.bumpIf("+") || this.bumpIf("-") && (r = -1);
		for (var i = !1, o = 0; !this.isEOF();) {
			var a = this.char();
			if (!(a >= 48 && a <= 57)) break;
			i = !0, o = 10 * o + (a - 48), this.bump();
		}
		var s = Ft$1(n, this.clonePosition());
		return i ? Wt(o *= r) ? {
			val: o,
			err: null
		} : this.error(e, s) : this.error(t, s);
	}, t.prototype.offset = function() {
		return this.position.offset;
	}, t.prototype.isEOF = function() {
		return this.offset() === this.message.length;
	}, t.prototype.clonePosition = function() {
		return {
			offset: this.position.offset,
			line: this.position.line,
			column: this.position.column
		};
	}, t.prototype.char = function() {
		var t = this.position.offset;
		if (t >= this.message.length) throw Error("out of bound");
		var e = te$2(this.message, t);
		if (void 0 === e) throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
		return e;
	}, t.prototype.error = function(t, e) {
		return {
			val: null,
			err: {
				kind: t,
				message: this.message,
				location: e
			}
		};
	}, t.prototype.bump = function() {
		if (!this.isEOF()) {
			var t = this.char();
			10 === t ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2);
		}
	}, t.prototype.bumpIf = function(t) {
		if (zt$1(this.message, t, this.offset())) {
			for (var e = 0; e < t.length; e++) this.bump();
			return !0;
		}
		return !1;
	}, t.prototype.bumpUntil = function(t) {
		var e = this.offset(), r = this.message.indexOf(t, e);
		return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
	}, t.prototype.bumpTo = function(t) {
		if (this.offset() > t) throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
		for (t = Math.min(t, this.message.length);;) {
			var e = this.offset();
			if (e === t) break;
			if (e > t) throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
			if (this.bump(), this.isEOF()) break;
		}
	}, t.prototype.bumpSpace = function() {
		for (; !this.isEOF() && ce$2(this.char());) this.bump();
	}, t.prototype.peek = function() {
		if (this.isEOF()) return null;
		var t = this.char(), e = this.offset(), r = this.message.charCodeAt(e + (t >= 65536 ? 2 : 1));
		return null != r ? r : null;
	}, t;
})();
function ae$2(t) {
	return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function se$2(t) {
	return 45 === t || 46 === t || t >= 48 && t <= 57 || 95 === t || t >= 97 && t <= 122 || t >= 65 && t <= 90 || 183 == t || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function ce$2(t) {
	return t >= 9 && t <= 13 || 32 === t || 133 === t || t >= 8206 && t <= 8207 || 8232 === t || 8233 === t;
}
function he$2(t) {
	return t >= 33 && t <= 35 || 36 === t || t >= 37 && t <= 39 || 40 === t || 41 === t || 42 === t || 43 === t || 44 === t || 45 === t || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || 91 === t || 92 === t || 93 === t || 94 === t || 96 === t || 123 === t || 124 === t || 125 === t || 126 === t || 161 === t || t >= 162 && t <= 165 || 166 === t || 167 === t || 169 === t || 171 === t || 172 === t || 174 === t || 176 === t || 177 === t || 182 === t || 187 === t || 191 === t || 215 === t || 247 === t || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || 8216 === t || 8217 === t || 8218 === t || t >= 8219 && t <= 8220 || 8221 === t || 8222 === t || 8223 === t || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || 8249 === t || 8250 === t || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || 8260 === t || 8261 === t || 8262 === t || t >= 8263 && t <= 8273 || 8274 === t || 8275 === t || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || 8608 === t || t >= 8609 && t <= 8610 || 8611 === t || t >= 8612 && t <= 8613 || 8614 === t || t >= 8615 && t <= 8621 || 8622 === t || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || 8658 === t || 8659 === t || 8660 === t || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || 8968 === t || 8969 === t || 8970 === t || 8971 === t || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || 9001 === t || 9002 === t || t >= 9003 && t <= 9083 || 9084 === t || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || 9655 === t || t >= 9656 && t <= 9664 || 9665 === t || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || 9839 === t || t >= 9840 && t <= 10087 || 10088 === t || 10089 === t || 10090 === t || 10091 === t || 10092 === t || 10093 === t || 10094 === t || 10095 === t || 10096 === t || 10097 === t || 10098 === t || 10099 === t || 10100 === t || 10101 === t || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || 10181 === t || 10182 === t || t >= 10183 && t <= 10213 || 10214 === t || 10215 === t || 10216 === t || 10217 === t || 10218 === t || 10219 === t || 10220 === t || 10221 === t || 10222 === t || 10223 === t || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || 10627 === t || 10628 === t || 10629 === t || 10630 === t || 10631 === t || 10632 === t || 10633 === t || 10634 === t || 10635 === t || 10636 === t || 10637 === t || 10638 === t || 10639 === t || 10640 === t || 10641 === t || 10642 === t || 10643 === t || 10644 === t || 10645 === t || 10646 === t || 10647 === t || 10648 === t || t >= 10649 && t <= 10711 || 10712 === t || 10713 === t || 10714 === t || 10715 === t || t >= 10716 && t <= 10747 || 10748 === t || 10749 === t || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || 11158 === t || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || 11778 === t || 11779 === t || 11780 === t || 11781 === t || t >= 11782 && t <= 11784 || 11785 === t || 11786 === t || 11787 === t || 11788 === t || 11789 === t || t >= 11790 && t <= 11798 || 11799 === t || t >= 11800 && t <= 11801 || 11802 === t || 11803 === t || 11804 === t || 11805 === t || t >= 11806 && t <= 11807 || 11808 === t || 11809 === t || 11810 === t || 11811 === t || 11812 === t || 11813 === t || 11814 === t || 11815 === t || 11816 === t || 11817 === t || t >= 11818 && t <= 11822 || 11823 === t || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || 11840 === t || 11841 === t || 11842 === t || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || 11858 === t || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || 12296 === t || 12297 === t || 12298 === t || 12299 === t || 12300 === t || 12301 === t || 12302 === t || 12303 === t || 12304 === t || 12305 === t || t >= 12306 && t <= 12307 || 12308 === t || 12309 === t || 12310 === t || 12311 === t || 12312 === t || 12313 === t || 12314 === t || 12315 === t || 12316 === t || 12317 === t || t >= 12318 && t <= 12319 || 12320 === t || 12336 === t || 64830 === t || 64831 === t || t >= 65093 && t <= 65094;
}
var le$2;
var fe$2 = {};
function pe$2() {
	return le$2 || (le$2 = 1, Object.defineProperty(fe$2, "__esModule", { value: !0 }), fe$2.SKELETON_TYPE = fe$2.TYPE = void 0, fe$2.isLiteralElement = function(e) {
		return e.type === t.literal;
	}, fe$2.isArgumentElement = function(e) {
		return e.type === t.argument;
	}, fe$2.isNumberElement = function(e) {
		return e.type === t.number;
	}, fe$2.isDateElement = function(e) {
		return e.type === t.date;
	}, fe$2.isTimeElement = function(e) {
		return e.type === t.time;
	}, fe$2.isSelectElement = function(e) {
		return e.type === t.select;
	}, fe$2.isPluralElement = function(e) {
		return e.type === t.plural;
	}, fe$2.isPoundElement = function(e) {
		return e.type === t.pound;
	}, fe$2.isTagElement = function(e) {
		return e.type === t.tag;
	}, fe$2.isNumberSkeleton = function(t) {
		return !(!t || "object" != typeof t || t.type !== e.number);
	}, fe$2.isDateTimeSkeleton = function(t) {
		return !(!t || "object" != typeof t || t.type !== e.dateTime);
	}, fe$2.createLiteralElement = function(e) {
		return {
			type: t.literal,
			value: e
		};
	}, fe$2.createNumberElement = function(e, r) {
		return {
			type: t.number,
			value: e,
			style: r
		};
	}, function(t) {
		t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
	}(t || (fe$2.TYPE = t = {})), function(t) {
		t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
	}(e || (fe$2.SKELETON_TYPE = e = {}))), fe$2;
	var t, e;
}
var de$2;
pe$2();
var ye$2 = {};
var me$2 = function(t) {
	if (Object.prototype.hasOwnProperty.call(t, "__esModule")) return t;
	var e = t.default;
	if ("function" == typeof e) {
		var r = function t() {
			var r = !1;
			try {
				r = this instanceof t;
			} catch {}
			return r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
		};
		r.prototype = e.prototype;
	} else r = {};
	return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(e) {
		var n = Object.getOwnPropertyDescriptor(t, e);
		Object.defineProperty(r, e, n.get ? n : {
			enumerable: !0,
			get: function() {
				return t[e];
			}
		});
	}), r;
}(vt$2);
(function() {
	if (de$2) return ye$2;
	de$2 = 1, Object.defineProperty(ye$2, "__esModule", { value: !0 }), ye$2.printAST = r, ye$2.doPrintAST = n, ye$2.printDateTimeSkeleton = a;
	var t = me$2, e = pe$2();
	function r(t) {
		return n(t, !1);
	}
	function n(s, c) {
		return s.map(function(h, u) {
			return (0, e.isLiteralElement)(h) ? function(t, e, r, n) {
				var o = t.value;
				return r || "'" !== o[0] || (o = "''".concat(o.slice(1))), n || "'" !== o[o.length - 1] || (o = "".concat(o.slice(0, o.length - 1), "''")), o = i(o), e ? o.replace("#", "'#'") : o;
			}(h, c, 0 === u, u === s.length - 1) : (0, e.isArgumentElement)(h) ? function(t) {
				var e = t.value;
				return "{".concat(e, "}");
			}(h) : (0, e.isDateElement)(h) || (0, e.isTimeElement)(h) || (0, e.isNumberElement)(h) ? function(t) {
				return "{".concat(t.value, ", ").concat(e.TYPE[t.type]).concat(t.style ? ", ".concat("string" == typeof (r = t.style) ? i(r) : r.type === e.SKELETON_TYPE.dateTime ? "::".concat(a(r)) : "::".concat(r.tokens.map(o).join(" "))) : "", "}");
				var r;
			}(h) : (0, e.isPluralElement)(h) ? function(e) {
				var r = "cardinal" === e.pluralType ? "plural" : "selectordinal", i = [
					e.value,
					r,
					t.__spreadArray([e.offset ? "offset:".concat(e.offset) : ""], Object.keys(e.options).map(function(t) {
						return "".concat(t, "{").concat(n(e.options[t].value, !0), "}");
					}), !0).filter(Boolean).join(" ")
				].join(",");
				return "{".concat(i, "}");
			}(h) : (0, e.isSelectElement)(h) ? function(t) {
				var e = [
					t.value,
					"select",
					Object.keys(t.options).map(function(e) {
						return "".concat(e, "{").concat(n(t.options[e].value, !1), "}");
					}).join(" ")
				].join(",");
				return "{".concat(e, "}");
			}(h) : (0, e.isPoundElement)(h) ? "#" : (0, e.isTagElement)(h) ? function(t) {
				return "<".concat(t.value, ">").concat(r(t.children), "</").concat(t.value, ">");
			}(h) : void 0;
		}).join("");
	}
	function i(t) {
		return t.replace(/([{}](?:[\s\S]*[{}])?)/, "'$1'");
	}
	function o(t) {
		var e = t.stem, r = t.options;
		return 0 === r.length ? e : "".concat(e).concat(r.map(function(t) {
			return "/".concat(t);
		}).join(""));
	}
	function a(t) {
		return t.pattern;
	}
	return ye$2;
})();
var He$2 = "_gt_";
new RegExp(`^${He$2}\\d+$`);
new RegExp(`^${He$2}$`);
var rr$1 = "generaltranslation.locale";
t.use;
function Nr$1({ children: t }) {
	return t;
}
function Ir$1(t) {
	return Nr$1(t);
}
Nr$1._gtt = "derive", Ir$1._gtt = "derive";
var supportedLocales = {
	af: ["af"],
	am: ["am"],
	ar: [
		"ar",
		"ar-AE",
		"ar-EG",
		"ar-LB",
		"ar-MA",
		"ar-SA"
	],
	bg: ["bg"],
	bn: ["bn"],
	bs: ["bs"],
	ca: ["ca"],
	cs: ["cs"],
	cy: ["cy"],
	da: ["da"],
	de: [
		"de",
		"de-DE",
		"de-AT",
		"de-CH"
	],
	el: [
		"el",
		"el-EL",
		"el-CY"
	],
	en: [
		"en",
		"en-AU",
		"en-CA",
		"en-GB",
		"en-NZ",
		"en-US"
	],
	es: [
		"es",
		"es-ES",
		"es-419",
		"es-AR",
		"es-CL",
		"es-CO",
		"es-MX",
		"es-PE",
		"es-US",
		"es-VE"
	],
	et: ["et"],
	fa: ["fa"],
	fi: ["fi"],
	fil: ["fil"],
	fr: [
		"fr",
		"fr-FR",
		"fr-BE",
		"fr-CM",
		"fr-CA",
		"fr-CH",
		"fr-SN"
	],
	gu: ["gu"],
	ha: ["ha"],
	hi: ["hi"],
	he: ["he"],
	hr: ["hr"],
	hu: ["hu"],
	hy: ["hy"],
	id: ["id"],
	ig: ["ig"],
	is: ["is"],
	it: [
		"it",
		"it-IT",
		"it-CH"
	],
	ja: ["ja"],
	ka: ["ka"],
	kk: ["kk"],
	kn: ["kn"],
	ko: ["ko"],
	la: ["la"],
	lt: ["lt"],
	lv: ["lv"],
	mk: ["mk"],
	ml: ["ml"],
	mn: ["mn"],
	mr: ["mr"],
	ms: ["ms"],
	my: ["my"],
	nl: [
		"nl",
		"nl-NL",
		"nl-BE"
	],
	nb: ["nb", "nb-NO"],
	no: ["no", "no-NO"],
	nn: ["nn", "nn-NO"],
	pa: ["pa"],
	pl: ["pl"],
	pt: [
		"pt",
		"pt-BR",
		"pt-PT"
	],
	ro: ["ro"],
	ru: ["ru"],
	sk: ["sk"],
	sl: ["sl"],
	so: ["so"],
	sq: ["sq"],
	sr: ["sr"],
	sv: ["sv"],
	sw: [
		"sw",
		"sw-KE",
		"sw-TZ"
	],
	ta: ["ta"],
	te: ["te"],
	th: ["th"],
	tl: ["tl"],
	tr: ["tr"],
	uk: ["uk"],
	ur: ["ur"],
	uz: ["uz"],
	vi: ["vi"],
	yo: ["yo"],
	zh: [
		"zh",
		"zh-CN",
		"zh-Hans",
		"zh-Hant",
		"zh-HK",
		"zh-SG",
		"zh-TW"
	],
	qbr: ["qbr"]
};
function getSupportedLocale(locale) {
	if (!isValidLocale(locale)) return null;
	locale = standardizeLocale(locale);
	const { languageCode, ...codes } = getLocaleProperties(locale);
	if (supportedLocales[languageCode]?.length) {
		const exactSupportedLocales = supportedLocales[languageCode];
		const getMatchingCode = ({ locale, languageCode, minimizedCode, regionCode, scriptCode }) => {
			const locales = [
				locale,
				`${languageCode}-${regionCode}`,
				`${languageCode}-${scriptCode}`,
				minimizedCode
			];
			for (const l of locales) if (exactSupportedLocales.includes(l)) return l;
			return null;
		};
		return getMatchingCode({
			locale,
			languageCode,
			...codes
		}) || getMatchingCode({
			locale: languageCode,
			...getLocaleProperties(languageCode)
		});
	}
	return null;
}
var T = {
	variable: "value",
	number: "n",
	datetime: "date",
	currency: "cost",
	"relative-time": "time"
};
function w$2(e = {}, t) {
	if (e.name) return e.name;
	return `_gt_${T[t] || "value"}_${e["data-_gt"]?.id}`;
}
var A$1 = "en";
var H$1 = "DEFAULT_TERMINATOR_KEY";
var L$2 = {
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
		[H$1]: {
			terminator: "…",
			separator: void 0
		}
	},
	none: { [H$1]: {
		terminator: void 0,
		separator: void 0
	} }
};
var P$1 = {
	Collator: Intl.Collator,
	DateTimeFormat: Intl.DateTimeFormat,
	DisplayNames: Intl.DisplayNames,
	ListFormat: Intl.ListFormat,
	Locale: Intl.Locale,
	NumberFormat: Intl.NumberFormat,
	PluralRules: Intl.PluralRules,
	RelativeTimeFormat: Intl.RelativeTimeFormat,
	Segmenter: Intl.Segmenter,
	CutoffFormat: class {
		constructor(e, t = {}) {
			try {
				const t = e ? Array.isArray(e) ? e.map((e) => String(e)) : [String(e)] : ["en"], r = Intl.getCanonicalLocales(t);
				this.locale = r.length ? r[0] : "en";
			} catch {
				this.locale = "en";
			}
			if (!L$2[t.style ?? "ellipsis"]) throw new Error(((e) => `generaltranslation Formatting Error: Invalid cutoff style: ${e}.`)(t.style ?? "ellipsis"));
			let r, n;
			if (void 0 !== t.maxChars) {
				r = t.style ?? "ellipsis";
				const e = new Intl.Locale(this.locale).language;
				n = L$2[r][e] || L$2[r].DEFAULT_TERMINATOR_KEY;
			}
			let o = t.terminator ?? n?.terminator, i = null != o ? t.separator ?? n?.separator : void 0;
			this.additionLength = (o?.length ?? 0) + (i?.length ?? 0), void 0 !== t.maxChars && Math.abs(t.maxChars) < this.additionLength && (o = void 0, i = void 0), this.options = {
				maxChars: t.maxChars,
				style: r,
				terminator: o,
				separator: i
			};
		}
		format(e) {
			return this.formatToParts(e).join("");
		}
		formatToParts(e) {
			const { maxChars: t, terminator: r, separator: n } = this.options, o = void 0 === t || Math.abs(t) >= e.length ? t : t >= 0 ? Math.max(0, t - this.additionLength) : Math.min(0, t + this.additionLength), i = void 0 !== o && o > -1 ? e.slice(0, o) : e.slice(o);
			return null == t || null == o || 0 === o || null == r || e.length <= Math.abs(t) ? [i] : o > 0 ? null != n ? [
				i,
				n,
				r
			] : [i, r] : null != n ? [
				r,
				n,
				i
			] : [r, i];
		}
		resolvedOptions() {
			return this.options;
		}
	}
};
var S$2 = new class {
	constructor() {
		this.cache = {};
	}
	_generateKey(e, t = {}) {
		return `${e ? Array.isArray(e) ? e.map((e) => String(e)).join(",") : String(e) : "undefined"}:${t ? JSON.stringify(t, Object.keys(t).sort()) : "{}"}`;
	}
	get(e, ...t) {
		const [r = "en", n = {}] = t, o = this._generateKey(r, n);
		let i = this.cache[e]?.[o];
		return void 0 === i && (i = new P$1[e](...t), this.cache[e] || (this.cache[e] = {}), this.cache[e][o] = i), i;
	}
}();
var C$1 = "https://cdn.gtx.dev";
var B$1 = "https://runtime2.gtx.dev";
function I$1(e) {
	if (void 0 === e) return;
	if (null === e) return "null";
	if ("number" == typeof e) return isFinite(e) ? "" + e : "null";
	if ("object" != typeof e) return JSON.stringify(e);
	if (Array.isArray(e)) {
		let t = "[";
		for (let r = 0; r < e.length; r++) r && (t += ","), t += I$1(e[r]) || "null";
		return t + "]";
	}
	const t = Object.keys(e).sort();
	let r = "";
	for (const n of t) {
		const t = I$1(e[n]);
		t && (r && (r += ","), r += JSON.stringify(n) + ":" + t);
	}
	return "{" + r + "}";
}
function O$2(e) {
	return I$1(e) ?? "";
}
function N$2(e) {
	const t = e;
	if (t && "object" == typeof t && "string" == typeof t.k) {
		const e = Object.keys(t);
		if (1 === e.length) return !0;
		if (2 === e.length) {
			if ("number" == typeof t.i) return !0;
			if ("string" == typeof t.v) return !0;
		}
		if (3 === e.length && "string" == typeof t.v && "number" == typeof t.i) return !0;
	}
	return !1;
}
function R$1(e, t, r = "") {
	const n = (o = e) instanceof Uint8Array || ArrayBuffer.isView(o) && "Uint8Array" === o.constructor.name && "BYTES_PER_ELEMENT" in o && 1 === o.BYTES_PER_ELEMENT;
	var o;
	const i = e?.length;
	if (!n || void 0 !== t) {
		const t = (r && `"${r}" `) + "expected Uint8Array, got " + (n ? `length=${i}` : "type=" + typeof e);
		if (!n) throw new TypeError(t);
		throw new RangeError(t);
	}
	return e;
}
function M$1(e, t = !0) {
	if (e.destroyed) throw new Error("Hash instance has been destroyed");
	if (t && e.finished) throw new Error("Hash#digest() has already been called");
}
function $$1(...e) {
	for (let t = 0; t < e.length; t++) e[t].fill(0);
}
function U$1(e) {
	return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function x$1(e, t) {
	return e << 32 - t | e >>> t;
}
var j$2 = (() => "function" == typeof Uint8Array.from([]).toHex && "function" == typeof Uint8Array.fromHex)();
var D$1 = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function F$1(e, t = {}) {
	const r = (t, r) => e(r).update(t).digest(), n = e(void 0);
	return r.outputLen = n.outputLen, r.blockLen = n.blockLen, r.canXOF = n.canXOF, r.create = (t) => e(t), Object.assign(r, t), Object.freeze(r);
}
var G$1 = (e) => ({ oid: Uint8Array.from([
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
	e
]) });
function k$2(e, t, r) {
	return e & t ^ ~e & r;
}
function V$1(e, t, r) {
	return e & t ^ e & r ^ t & r;
}
var K$1 = class {
	blockLen;
	outputLen;
	canXOF = !1;
	padOffset;
	isLE;
	buffer;
	view;
	finished = !1;
	length = 0;
	pos = 0;
	destroyed = !1;
	constructor(e, t, r, n) {
		this.blockLen = e, this.outputLen = t, this.padOffset = r, this.isLE = n, this.buffer = new Uint8Array(e), this.view = U$1(this.buffer);
	}
	update(e) {
		M$1(this), R$1(e);
		const { view: t, buffer: r, blockLen: n } = this, o = e.length;
		for (let i = 0; i < o;) {
			const a = Math.min(n - this.pos, o - i);
			if (a === n) {
				const t = U$1(e);
				for (; n <= o - i; i += n) this.process(t, i);
				continue;
			}
			r.set(e.subarray(i, i + a), this.pos), this.pos += a, i += a, this.pos === n && (this.process(t, 0), this.pos = 0);
		}
		return this.length += e.length, this.roundClean(), this;
	}
	digestInto(e) {
		M$1(this), function(e, t) {
			R$1(e, void 0, "digestInto() output");
			const r = t.outputLen;
			if (e.length < r) throw new RangeError("\"digestInto() output\" expected to be of length >=" + r);
		}(e, this), this.finished = !0;
		const { buffer: t, view: r, blockLen: n, isLE: o } = this;
		let { pos: i } = this;
		t[i++] = 128, $$1(this.buffer.subarray(i)), this.padOffset > n - i && (this.process(r, 0), i = 0);
		for (let e = i; e < n; e++) t[e] = 0;
		r.setBigUint64(n - 8, BigInt(8 * this.length), o), this.process(r, 0);
		const a = U$1(e), s = this.outputLen;
		if (s % 4) throw new Error("_sha2: outputLen must be aligned to 32bit");
		const c = s / 4, l = this.get();
		if (c > l.length) throw new Error("_sha2: outputLen bigger than state");
		for (let e = 0; e < c; e++) a.setUint32(4 * e, l[e], o);
	}
	digest() {
		const { buffer: e, outputLen: t } = this;
		this.digestInto(e);
		const r = e.slice(0, t);
		return this.destroy(), r;
	}
	_cloneInto(e) {
		e ||= new this.constructor(), e.set(...this.get());
		const { blockLen: t, buffer: r, length: n, finished: o, destroyed: i, pos: a } = this;
		return e.destroyed = i, e.finished = o, e.length = n, e.pos = a, n % t && e.buffer.set(r), e;
	}
	clone() {
		return this._cloneInto();
	}
};
var X$1 = Uint32Array.from([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]);
var Y$1 = Uint32Array.from([
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
var W$1 = /* @__PURE__ */ new Uint32Array(64);
var J$1 = class extends K$1 {
	constructor(e) {
		super(64, e, 8, !1);
	}
	get() {
		const { A: e, B: t, C: r, D: n, E: o, F: i, G: a, H: s } = this;
		return [
			e,
			t,
			r,
			n,
			o,
			i,
			a,
			s
		];
	}
	set(e, t, r, n, o, i, a, s) {
		this.A = 0 | e, this.B = 0 | t, this.C = 0 | r, this.D = 0 | n, this.E = 0 | o, this.F = 0 | i, this.G = 0 | a, this.H = 0 | s;
	}
	process(e, t) {
		for (let r = 0; r < 16; r++, t += 4) W$1[r] = e.getUint32(t, !1);
		for (let e = 16; e < 64; e++) {
			const t = W$1[e - 15], r = W$1[e - 2], n = x$1(t, 7) ^ x$1(t, 18) ^ t >>> 3, o = x$1(r, 17) ^ x$1(r, 19) ^ r >>> 10;
			W$1[e] = o + W$1[e - 7] + n + W$1[e - 16] | 0;
		}
		let { A: r, B: n, C: o, D: i, E: a, F: s, G: c, H: l } = this;
		for (let e = 0; e < 64; e++) {
			const t = l + (x$1(a, 6) ^ x$1(a, 11) ^ x$1(a, 25)) + k$2(a, s, c) + Y$1[e] + W$1[e] | 0, u = (x$1(r, 2) ^ x$1(r, 13) ^ x$1(r, 22)) + V$1(r, n, o) | 0;
			l = c, c = s, s = a, a = i + t | 0, i = o, o = n, n = r, r = t + u | 0;
		}
		r = r + this.A | 0, n = n + this.B | 0, o = o + this.C | 0, i = i + this.D | 0, a = a + this.E | 0, s = s + this.F | 0, c = c + this.G | 0, l = l + this.H | 0, this.set(r, n, o, i, a, s, c, l);
	}
	roundClean() {
		$$1(W$1);
	}
	destroy() {
		this.destroyed = !0, this.set(0, 0, 0, 0, 0, 0, 0, 0), $$1(this.buffer);
	}
};
var q$1 = class extends J$1 {
	A = 0 | X$1[0];
	B = 0 | X$1[1];
	C = 0 | X$1[2];
	D = 0 | X$1[3];
	E = 0 | X$1[4];
	F = 0 | X$1[5];
	G = 0 | X$1[6];
	H = 0 | X$1[7];
	constructor() {
		super(32);
	}
};
var z$1 = F$1(() => new q$1(), G$1(1));
var Z$1 = function(e, t) {
	return Z$1 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
	}, Z$1(e, t);
};
function Q$1(e, t) {
	if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
	function r() {
		this.constructor = e;
	}
	Z$1(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var ee$1 = function() {
	return ee$1 = Object.assign || function(e) {
		for (var t, r = 1, n = arguments.length; r < n; r++) for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
		return e;
	}, ee$1.apply(this, arguments);
};
function te$1(e, t) {
	var r = {};
	for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
	if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
		var o = 0;
		for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
	}
	return r;
}
function re(e, t, r, n) {
	var o, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
	if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, n);
	else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
	return i > 3 && a && Object.defineProperty(t, r, a), a;
}
function ne$1(e, t) {
	return function(r, n) {
		t(r, n, e);
	};
}
function oe$1(e, t, r, n, o, i) {
	function a(e) {
		if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
		return e;
	}
	for (var s, c = n.kind, l = "getter" === c ? "get" : "setter" === c ? "set" : "value", u = !t && e ? n.static ? e : e.prototype : null, h = t || (u ? Object.getOwnPropertyDescriptor(u, n.name) : {}), f = !1, d = r.length - 1; d >= 0; d--) {
		var p = {};
		for (var m in n) p[m] = "access" === m ? {} : n[m];
		for (var m in n.access) p.access[m] = n.access[m];
		p.addInitializer = function(e) {
			if (f) throw new TypeError("Cannot add initializers after decoration has completed");
			i.push(a(e || null));
		};
		var g = (0, r[d])("accessor" === c ? {
			get: h.get,
			set: h.set
		} : h[l], p);
		if ("accessor" === c) {
			if (void 0 === g) continue;
			if (null === g || "object" != typeof g) throw new TypeError("Object expected");
			(s = a(g.get)) && (h.get = s), (s = a(g.set)) && (h.set = s), (s = a(g.init)) && o.unshift(s);
		} else (s = a(g)) && ("field" === c ? o.unshift(s) : h[l] = s);
	}
	u && Object.defineProperty(u, n.name, h), f = !0;
}
function ie$1(e, t, r) {
	for (var n = arguments.length > 2, o = 0; o < t.length; o++) r = n ? t[o].call(e, r) : t[o].call(e);
	return n ? r : void 0;
}
function ae$1(e) {
	return "symbol" == typeof e ? e : "".concat(e);
}
function se$1(e, t, r) {
	return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
		configurable: !0,
		value: r ? "".concat(r, " ", t) : t
	});
}
function ce$1(e, t) {
	if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}
function le$1(e, t, r, n) {
	return new (r || (r = Promise))(function(o, i) {
		function a(e) {
			try {
				c(n.next(e));
			} catch (e) {
				i(e);
			}
		}
		function s(e) {
			try {
				c(n.throw(e));
			} catch (e) {
				i(e);
			}
		}
		function c(e) {
			var t;
			e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
				e(t);
			})).then(a, s);
		}
		c((n = n.apply(e, t || [])).next());
	});
}
function ue$1(e, t) {
	var r, n, o, i = {
		label: 0,
		sent: function() {
			if (1 & o[0]) throw o[1];
			return o[1];
		},
		trys: [],
		ops: []
	}, a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
	return a.next = s(0), a.throw = s(1), a.return = s(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
		return this;
	}), a;
	function s(s) {
		return function(c) {
			return function(s) {
				if (r) throw new TypeError("Generator is already executing.");
				for (; a && (a = 0, s[0] && (i = 0)), i;) try {
					if (r = 1, n && (o = 2 & s[0] ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, s[1])).done) return o;
					switch (n = 0, o && (s = [2 & s[0], o.value]), s[0]) {
						case 0:
						case 1:
							o = s;
							break;
						case 4: return i.label++, {
							value: s[1],
							done: !1
						};
						case 5:
							i.label++, n = s[1], s = [0];
							continue;
						case 7:
							s = i.ops.pop(), i.trys.pop();
							continue;
						default:
							if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
								i = 0;
								continue;
							}
							if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
								i.label = s[1];
								break;
							}
							if (6 === s[0] && i.label < o[1]) {
								i.label = o[1], o = s;
								break;
							}
							if (o && i.label < o[2]) {
								i.label = o[2], i.ops.push(s);
								break;
							}
							o[2] && i.ops.pop(), i.trys.pop();
							continue;
					}
					s = t.call(e, i);
				} catch (e) {
					s = [6, e], n = 0;
				} finally {
					r = o = 0;
				}
				if (5 & s[0]) throw s[1];
				return {
					value: s[0] ? s[1] : void 0,
					done: !0
				};
			}([s, c]);
		};
	}
}
var he$1 = Object.create ? function(e, t, r, n) {
	void 0 === n && (n = r);
	var o = Object.getOwnPropertyDescriptor(t, r);
	o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
		enumerable: !0,
		get: function() {
			return t[r];
		}
	}), Object.defineProperty(e, n, o);
} : function(e, t, r, n) {
	void 0 === n && (n = r), e[n] = t[r];
};
function fe$1(e, t) {
	for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || he$1(t, e, r);
}
function de$1(e) {
	var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], n = 0;
	if (r) return r.call(e);
	if (e && "number" == typeof e.length) return { next: function() {
		return e && n >= e.length && (e = void 0), {
			value: e && e[n++],
			done: !e
		};
	} };
	throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function pe$1(e, t) {
	var r = "function" == typeof Symbol && e[Symbol.iterator];
	if (!r) return e;
	var n, o, i = r.call(e), a = [];
	try {
		for (; (void 0 === t || t-- > 0) && !(n = i.next()).done;) a.push(n.value);
	} catch (e) {
		o = { error: e };
	} finally {
		try {
			n && !n.done && (r = i.return) && r.call(i);
		} finally {
			if (o) throw o.error;
		}
	}
	return a;
}
function me$1() {
	for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(pe$1(arguments[t]));
	return e;
}
function ge$1() {
	for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
	var n = Array(e), o = 0;
	for (t = 0; t < r; t++) for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++) n[o] = i[a];
	return n;
}
function ye$1(e, t, r) {
	if (r || 2 === arguments.length) for (var n, o = 0, i = t.length; o < i; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
	return e.concat(n || Array.prototype.slice.call(t));
}
function be$1(e) {
	return this instanceof be$1 ? (this.v = e, this) : new be$1(e);
}
function Ee$1(e, t, r) {
	if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	var n, o = r.apply(e, t || []), i = [];
	return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", function(e) {
		return function(t) {
			return Promise.resolve(t).then(e, l);
		};
	}), n[Symbol.asyncIterator] = function() {
		return this;
	}, n;
	function a(e, t) {
		o[e] && (n[e] = function(t) {
			return new Promise(function(r, n) {
				i.push([
					e,
					t,
					r,
					n
				]) > 1 || s(e, t);
			});
		}, t && (n[e] = t(n[e])));
	}
	function s(e, t) {
		try {
			(r = o[e](t)).value instanceof be$1 ? Promise.resolve(r.value.v).then(c, l) : u(i[0][2], r);
		} catch (e) {
			u(i[0][3], e);
		}
		var r;
	}
	function c(e) {
		s("next", e);
	}
	function l(e) {
		s("throw", e);
	}
	function u(e, t) {
		e(t), i.shift(), i.length && s(i[0][0], i[0][1]);
	}
}
function ve$1(e) {
	var t = {}, r;
	return n("next"), n("throw", function(e) {
		throw e;
	}), n("return"), t[Symbol.iterator] = function() {
		return this;
	}, t;
	function n(n, o) {
		t[n] = e[n] ? function(t) {
			return (r = !r) ? {
				value: be$1(e[n](t)),
				done: !1
			} : o ? o(t) : t;
		} : o;
	}
}
function _e$1(e) {
	if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	var t, r = e[Symbol.asyncIterator];
	return r ? r.call(e) : (e = de$1(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
		return this;
	}, t);
	function n(r) {
		t[r] = e[r] && function(t) {
			return new Promise(function(n, o) {
				(function(e, t, r, n) {
					Promise.resolve(n).then(function(t) {
						e({
							value: t,
							done: r
						});
					}, t);
				})(n, o, (t = e[r](t)).done, t.value);
			});
		};
	}
}
function Te$1(e, t) {
	return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
var we$1 = Object.create ? function(e, t) {
	Object.defineProperty(e, "default", {
		enumerable: !0,
		value: t
	});
} : function(e, t) {
	e.default = t;
};
var Ae$1 = function(e) {
	return Ae$1 = Object.getOwnPropertyNames || function(e) {
		var t = [];
		for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
		return t;
	}, Ae$1(e);
};
function He$1(e) {
	if (e && e.__esModule) return e;
	var t = {};
	if (null != e) for (var r = Ae$1(e), n = 0; n < r.length; n++) "default" !== r[n] && he$1(t, e, r[n]);
	return we$1(t, e), t;
}
function Le$1(e) {
	return e && e.__esModule ? e : { default: e };
}
function Pe$1(e, t, r, n) {
	if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
	if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
	return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
}
function Se$1(e, t, r, n, o) {
	if ("m" === n) throw new TypeError("Private method is not writable");
	if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
	if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
	return "a" === n ? o.call(e, r) : o ? o.value = r : t.set(e, r), r;
}
function Ce$1(e, t) {
	if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
	return "function" == typeof e ? t === e : e.has(t);
}
function Be$1(e, t, r) {
	if (null != t) {
		if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
		var n, o;
		if (r) {
			if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
			n = t[Symbol.asyncDispose];
		}
		if (void 0 === n) {
			if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
			n = t[Symbol.dispose], r && (o = n);
		}
		if ("function" != typeof n) throw new TypeError("Object not disposable.");
		o && (n = function() {
			try {
				o.call(this);
			} catch (e) {
				return Promise.reject(e);
			}
		}), e.stack.push({
			value: t,
			dispose: n,
			async: r
		});
	} else r && e.stack.push({ async: !0 });
	return t;
}
var Ie$1 = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
	var n = new Error(r);
	return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
};
function Oe$1(e) {
	function t(t) {
		e.error = e.hasError ? new Ie$1(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
	}
	var r, n = 0;
	return function o() {
		for (; r = e.stack.pop();) try {
			if (!r.async && 1 === n) return n = 0, e.stack.push(r), Promise.resolve().then(o);
			if (r.dispose) {
				var i = r.dispose.call(r.value);
				if (r.async) return n |= 2, Promise.resolve(i).then(o, function(e) {
					return t(e), o();
				});
			} else n |= 1;
		} catch (e) {
			t(e);
		}
		if (1 === n) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
		if (e.hasError) throw e.error;
	}();
}
function Ne$1(e, t) {
	return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, r, n, o, i) {
		return r ? t ? ".jsx" : ".js" : !n || o && i ? n + o + "." + i.toLowerCase() + "js" : e;
	}) : e;
}
var Re$1;
var Me$1;
var $e$1;
var xe$1 = Object.freeze({
	__proto__: null,
	__addDisposableResource: Be$1,
	get __assign() {
		return ee$1;
	},
	__asyncDelegator: ve$1,
	__asyncGenerator: Ee$1,
	__asyncValues: _e$1,
	__await: be$1,
	__awaiter: le$1,
	__classPrivateFieldGet: Pe$1,
	__classPrivateFieldIn: Ce$1,
	__classPrivateFieldSet: Se$1,
	__createBinding: he$1,
	__decorate: re,
	__disposeResources: Oe$1,
	__esDecorate: oe$1,
	__exportStar: fe$1,
	__extends: Q$1,
	__generator: ue$1,
	__importDefault: Le$1,
	__importStar: He$1,
	__makeTemplateObject: Te$1,
	__metadata: ce$1,
	__param: ne$1,
	__propKey: ae$1,
	__read: pe$1,
	__rest: te$1,
	__rewriteRelativeImportExtension: Ne$1,
	__runInitializers: ie$1,
	__setFunctionName: se$1,
	__spread: me$1,
	__spreadArray: ye$1,
	__spreadArrays: ge$1,
	__values: de$1,
	default: {
		__extends: Q$1,
		__assign: ee$1,
		__rest: te$1,
		__decorate: re,
		__param: ne$1,
		__esDecorate: oe$1,
		__runInitializers: ie$1,
		__propKey: ae$1,
		__setFunctionName: se$1,
		__metadata: ce$1,
		__awaiter: le$1,
		__generator: ue$1,
		__createBinding: he$1,
		__exportStar: fe$1,
		__values: de$1,
		__read: pe$1,
		__spread: me$1,
		__spreadArrays: ge$1,
		__spreadArray: ye$1,
		__await: be$1,
		__asyncGenerator: Ee$1,
		__asyncDelegator: ve$1,
		__asyncValues: _e$1,
		__makeTemplateObject: Te$1,
		__importStar: He$1,
		__importDefault: Le$1,
		__classPrivateFieldGet: Pe$1,
		__classPrivateFieldSet: Se$1,
		__classPrivateFieldIn: Ce$1,
		__addDisposableResource: Be$1,
		__disposeResources: Oe$1,
		__rewriteRelativeImportExtension: Ne$1
	}
});
(function(e) {
	e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Re$1 || (Re$1 = {})), function(e) {
	e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
}(Me$1 || (Me$1 = {})), function(e) {
	e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
}($e$1 || ($e$1 = {}));
var je$1 = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
var De$1 = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Fe$1(e) {
	var t = {};
	return e.replace(De$1, function(e) {
		var r = e.length;
		switch (e[0]) {
			case "G":
				t.era = 4 === r ? "long" : 5 === r ? "narrow" : "short";
				break;
			case "y":
				t.year = 2 === r ? "2-digit" : "numeric";
				break;
			case "Y":
			case "u":
			case "U":
			case "r": throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
			case "q":
			case "Q": throw new RangeError("`q/Q` (quarter) patterns are not supported");
			case "M":
			case "L":
				t.month = [
					"numeric",
					"2-digit",
					"short",
					"long",
					"narrow"
				][r - 1];
				break;
			case "w":
			case "W": throw new RangeError("`w/W` (week) patterns are not supported");
			case "d":
				t.day = ["numeric", "2-digit"][r - 1];
				break;
			case "D":
			case "F":
			case "g": throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
			case "E":
				t.weekday = 4 === r ? "long" : 5 === r ? "narrow" : "short";
				break;
			case "e":
				if (r < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
				t.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][r - 4];
				break;
			case "c":
				if (r < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
				t.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][r - 4];
				break;
			case "a":
				t.hour12 = !0;
				break;
			case "b":
			case "B": throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
			case "h":
				t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
				break;
			case "H":
				t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
				break;
			case "K":
				t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
				break;
			case "k":
				t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
				break;
			case "j":
			case "J":
			case "C": throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
			case "m":
				t.minute = ["numeric", "2-digit"][r - 1];
				break;
			case "s":
				t.second = ["numeric", "2-digit"][r - 1];
				break;
			case "S":
			case "A": throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
			case "z":
				t.timeZoneName = r < 4 ? "short" : "long";
				break;
			case "Z":
			case "O":
			case "v":
			case "V":
			case "X":
			case "x": throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
		}
		return "";
	}), t;
}
var Ge$1 = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function ke$1(e) {
	return e.replace(/^(.*?)-/, "");
}
var Ve$1 = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
var Ke$1 = /^(@+)?(\+|#+)?[rs]?$/g;
var Xe$1 = /(\*)(0+)|(#+)(0+)|(0+)/g;
var Ye$1 = /^(0+)$/;
function We$1(e) {
	var t = {};
	return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(Ke$1, function(e, r, n) {
		return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), "";
	}), t;
}
function Je$1(e) {
	switch (e) {
		case "sign-auto": return { signDisplay: "auto" };
		case "sign-accounting":
		case "()": return { currencySign: "accounting" };
		case "sign-always":
		case "+!": return { signDisplay: "always" };
		case "sign-accounting-always":
		case "()!": return {
			signDisplay: "always",
			currencySign: "accounting"
		};
		case "sign-except-zero":
		case "+?": return { signDisplay: "exceptZero" };
		case "sign-accounting-except-zero":
		case "()?": return {
			signDisplay: "exceptZero",
			currencySign: "accounting"
		};
		case "sign-never":
		case "+_": return { signDisplay: "never" };
	}
}
function qe$1(e) {
	var t;
	if ("E" === e[0] && "E" === e[1] ? (t = { notation: "engineering" }, e = e.slice(2)) : "E" === e[0] && (t = { notation: "scientific" }, e = e.slice(1)), t) {
		var r = e.slice(0, 2);
		if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !Ye$1.test(e)) throw new Error("Malformed concise eng/scientific notation");
		t.minimumIntegerDigits = e.length;
	}
	return t;
}
function ze$1(e) {
	return Je$1(e) || {};
}
function Ze$1(e) {
	for (var t = {}, r = 0, n = e; r < n.length; r++) {
		var o = n[r];
		switch (o.stem) {
			case "percent":
			case "%":
				t.style = "percent";
				continue;
			case "%x100":
				t.style = "percent", t.scale = 100;
				continue;
			case "currency":
				t.style = "currency", t.currency = o.options[0];
				continue;
			case "group-off":
			case ",_":
				t.useGrouping = !1;
				continue;
			case "precision-integer":
			case ".":
				t.maximumFractionDigits = 0;
				continue;
			case "measure-unit":
			case "unit":
				t.style = "unit", t.unit = ke$1(o.options[0]);
				continue;
			case "compact-short":
			case "K":
				t.notation = "compact", t.compactDisplay = "short";
				continue;
			case "compact-long":
			case "KK":
				t.notation = "compact", t.compactDisplay = "long";
				continue;
			case "scientific":
				t = ee$1(ee$1(ee$1({}, t), { notation: "scientific" }), o.options.reduce(function(e, t) {
					return ee$1(ee$1({}, e), ze$1(t));
				}, {}));
				continue;
			case "engineering":
				t = ee$1(ee$1(ee$1({}, t), { notation: "engineering" }), o.options.reduce(function(e, t) {
					return ee$1(ee$1({}, e), ze$1(t));
				}, {}));
				continue;
			case "notation-simple":
				t.notation = "standard";
				continue;
			case "unit-width-narrow":
				t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
				continue;
			case "unit-width-short":
				t.currencyDisplay = "code", t.unitDisplay = "short";
				continue;
			case "unit-width-full-name":
				t.currencyDisplay = "name", t.unitDisplay = "long";
				continue;
			case "unit-width-iso-code":
				t.currencyDisplay = "symbol";
				continue;
			case "scale":
				t.scale = parseFloat(o.options[0]);
				continue;
			case "rounding-mode-floor":
				t.roundingMode = "floor";
				continue;
			case "rounding-mode-ceiling":
				t.roundingMode = "ceil";
				continue;
			case "rounding-mode-down":
				t.roundingMode = "trunc";
				continue;
			case "rounding-mode-up":
				t.roundingMode = "expand";
				continue;
			case "rounding-mode-half-even":
				t.roundingMode = "halfEven";
				continue;
			case "rounding-mode-half-down":
				t.roundingMode = "halfTrunc";
				continue;
			case "rounding-mode-half-up":
				t.roundingMode = "halfExpand";
				continue;
			case "integer-width":
				if (o.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
				o.options[0].replace(Xe$1, function(e, r, n, o, i, a) {
					if (r) t.minimumIntegerDigits = n.length;
					else {
						if (o && i) throw new Error("We currently do not support maximum integer digits");
						if (a) throw new Error("We currently do not support exact integer digits");
					}
					return "";
				});
				continue;
		}
		if (Ye$1.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
		else if (Ve$1.test(o.stem)) {
			if (o.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
			o.stem.replace(Ve$1, function(e, r, n, o, i, a) {
				return "*" === n ? t.minimumFractionDigits = r.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && a ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + a.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), "";
			});
			var i = o.options[0];
			"w" === i ? t = ee$1(ee$1({}, t), { trailingZeroDisplay: "stripIfInteger" }) : i && (t = ee$1(ee$1({}, t), We$1(i)));
		} else if (Ke$1.test(o.stem)) t = ee$1(ee$1({}, t), We$1(o.stem));
		else {
			var a = Je$1(o.stem);
			a && (t = ee$1(ee$1({}, t), a));
			var s = qe$1(o.stem);
			s && (t = ee$1(ee$1({}, t), s));
		}
	}
	return t;
}
var Qe$1;
var et$1 = {
	"001": ["H", "h"],
	419: [
		"h",
		"H",
		"hB",
		"hb"
	],
	AC: [
		"H",
		"h",
		"hb",
		"hB"
	],
	AD: ["H", "hB"],
	AE: [
		"h",
		"hB",
		"hb",
		"H"
	],
	AF: [
		"H",
		"hb",
		"hB",
		"h"
	],
	AG: [
		"h",
		"hb",
		"H",
		"hB"
	],
	AI: [
		"H",
		"h",
		"hb",
		"hB"
	],
	AL: [
		"h",
		"H",
		"hB"
	],
	AM: ["H", "hB"],
	AO: ["H", "hB"],
	AR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	AS: ["h", "H"],
	AT: ["H", "hB"],
	AU: [
		"h",
		"hb",
		"H",
		"hB"
	],
	AW: ["H", "hB"],
	AX: ["H"],
	AZ: [
		"H",
		"hB",
		"h"
	],
	BA: [
		"H",
		"hB",
		"h"
	],
	BB: [
		"h",
		"hb",
		"H",
		"hB"
	],
	BD: [
		"h",
		"hB",
		"H"
	],
	BE: ["H", "hB"],
	BF: ["H", "hB"],
	BG: [
		"H",
		"hB",
		"h"
	],
	BH: [
		"h",
		"hB",
		"hb",
		"H"
	],
	BI: ["H", "h"],
	BJ: ["H", "hB"],
	BL: ["H", "hB"],
	BM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	BN: [
		"hb",
		"hB",
		"h",
		"H"
	],
	BO: [
		"h",
		"H",
		"hB",
		"hb"
	],
	BQ: ["H"],
	BR: ["H", "hB"],
	BS: [
		"h",
		"hb",
		"H",
		"hB"
	],
	BT: ["h", "H"],
	BW: [
		"H",
		"h",
		"hb",
		"hB"
	],
	BY: ["H", "h"],
	BZ: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CA: [
		"h",
		"hb",
		"H",
		"hB"
	],
	CC: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CD: ["hB", "H"],
	CF: [
		"H",
		"h",
		"hB"
	],
	CG: ["H", "hB"],
	CH: [
		"H",
		"hB",
		"h"
	],
	CI: ["H", "hB"],
	CK: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CL: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CM: [
		"H",
		"h",
		"hB"
	],
	CN: [
		"H",
		"hB",
		"hb",
		"h"
	],
	CO: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CP: ["H"],
	CR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CU: [
		"h",
		"H",
		"hB",
		"hb"
	],
	CV: ["H", "hB"],
	CW: ["H", "hB"],
	CX: [
		"H",
		"h",
		"hb",
		"hB"
	],
	CY: [
		"h",
		"H",
		"hb",
		"hB"
	],
	CZ: ["H"],
	DE: ["H", "hB"],
	DG: [
		"H",
		"h",
		"hb",
		"hB"
	],
	DJ: ["h", "H"],
	DK: ["H"],
	DM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	DO: [
		"h",
		"H",
		"hB",
		"hb"
	],
	DZ: [
		"h",
		"hB",
		"hb",
		"H"
	],
	EA: [
		"H",
		"h",
		"hB",
		"hb"
	],
	EC: [
		"h",
		"H",
		"hB",
		"hb"
	],
	EE: ["H", "hB"],
	EG: [
		"h",
		"hB",
		"hb",
		"H"
	],
	EH: [
		"h",
		"hB",
		"hb",
		"H"
	],
	ER: ["h", "H"],
	ES: [
		"H",
		"hB",
		"h",
		"hb"
	],
	ET: [
		"hB",
		"hb",
		"h",
		"H"
	],
	FI: ["H"],
	FJ: [
		"h",
		"hb",
		"H",
		"hB"
	],
	FK: [
		"H",
		"h",
		"hb",
		"hB"
	],
	FM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	FO: ["H", "h"],
	FR: ["H", "hB"],
	GA: ["H", "hB"],
	GB: [
		"H",
		"h",
		"hb",
		"hB"
	],
	GD: [
		"h",
		"hb",
		"H",
		"hB"
	],
	GE: [
		"H",
		"hB",
		"h"
	],
	GF: ["H", "hB"],
	GG: [
		"H",
		"h",
		"hb",
		"hB"
	],
	GH: ["h", "H"],
	GI: [
		"H",
		"h",
		"hb",
		"hB"
	],
	GL: ["H", "h"],
	GM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	GN: ["H", "hB"],
	GP: ["H", "hB"],
	GQ: [
		"H",
		"hB",
		"h",
		"hb"
	],
	GR: [
		"h",
		"H",
		"hb",
		"hB"
	],
	GT: [
		"h",
		"H",
		"hB",
		"hb"
	],
	GU: [
		"h",
		"hb",
		"H",
		"hB"
	],
	GW: ["H", "hB"],
	GY: [
		"h",
		"hb",
		"H",
		"hB"
	],
	HK: [
		"h",
		"hB",
		"hb",
		"H"
	],
	HN: [
		"h",
		"H",
		"hB",
		"hb"
	],
	HR: ["H", "hB"],
	HU: ["H", "h"],
	IC: [
		"H",
		"h",
		"hB",
		"hb"
	],
	ID: ["H"],
	IE: [
		"H",
		"h",
		"hb",
		"hB"
	],
	IL: ["H", "hB"],
	IM: [
		"H",
		"h",
		"hb",
		"hB"
	],
	IN: ["h", "H"],
	IO: [
		"H",
		"h",
		"hb",
		"hB"
	],
	IQ: [
		"h",
		"hB",
		"hb",
		"H"
	],
	IR: ["hB", "H"],
	IS: ["H"],
	IT: ["H", "hB"],
	JE: [
		"H",
		"h",
		"hb",
		"hB"
	],
	JM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	JO: [
		"h",
		"hB",
		"hb",
		"H"
	],
	JP: [
		"H",
		"K",
		"h"
	],
	KE: [
		"hB",
		"hb",
		"H",
		"h"
	],
	KG: [
		"H",
		"h",
		"hB",
		"hb"
	],
	KH: [
		"hB",
		"h",
		"H",
		"hb"
	],
	KI: [
		"h",
		"hb",
		"H",
		"hB"
	],
	KM: [
		"H",
		"h",
		"hB",
		"hb"
	],
	KN: [
		"h",
		"hb",
		"H",
		"hB"
	],
	KP: [
		"h",
		"H",
		"hB",
		"hb"
	],
	KR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	KW: [
		"h",
		"hB",
		"hb",
		"H"
	],
	KY: [
		"h",
		"hb",
		"H",
		"hB"
	],
	KZ: ["H", "hB"],
	LA: [
		"H",
		"hb",
		"hB",
		"h"
	],
	LB: [
		"h",
		"hB",
		"hb",
		"H"
	],
	LC: [
		"h",
		"hb",
		"H",
		"hB"
	],
	LI: [
		"H",
		"hB",
		"h"
	],
	LK: [
		"H",
		"h",
		"hB",
		"hb"
	],
	LR: [
		"h",
		"hb",
		"H",
		"hB"
	],
	LS: ["h", "H"],
	LT: [
		"H",
		"h",
		"hb",
		"hB"
	],
	LU: [
		"H",
		"h",
		"hB"
	],
	LV: [
		"H",
		"hB",
		"hb",
		"h"
	],
	LY: [
		"h",
		"hB",
		"hb",
		"H"
	],
	MA: [
		"H",
		"h",
		"hB",
		"hb"
	],
	MC: ["H", "hB"],
	MD: ["H", "hB"],
	ME: [
		"H",
		"hB",
		"h"
	],
	MF: ["H", "hB"],
	MG: ["H", "h"],
	MH: [
		"h",
		"hb",
		"H",
		"hB"
	],
	MK: [
		"H",
		"h",
		"hb",
		"hB"
	],
	ML: ["H"],
	MM: [
		"hB",
		"hb",
		"H",
		"h"
	],
	MN: [
		"H",
		"h",
		"hb",
		"hB"
	],
	MO: [
		"h",
		"hB",
		"hb",
		"H"
	],
	MP: [
		"h",
		"hb",
		"H",
		"hB"
	],
	MQ: ["H", "hB"],
	MR: [
		"h",
		"hB",
		"hb",
		"H"
	],
	MS: [
		"H",
		"h",
		"hb",
		"hB"
	],
	MT: ["H", "h"],
	MU: ["H", "h"],
	MV: ["H", "h"],
	MW: [
		"h",
		"hb",
		"H",
		"hB"
	],
	MX: [
		"h",
		"H",
		"hB",
		"hb"
	],
	MY: [
		"hb",
		"hB",
		"h",
		"H"
	],
	MZ: ["H", "hB"],
	NA: [
		"h",
		"H",
		"hB",
		"hb"
	],
	NC: ["H", "hB"],
	NE: ["H"],
	NF: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NG: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NI: [
		"h",
		"H",
		"hB",
		"hb"
	],
	NL: ["H", "hB"],
	NO: ["H", "h"],
	NP: [
		"H",
		"h",
		"hB"
	],
	NR: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NU: [
		"H",
		"h",
		"hb",
		"hB"
	],
	NZ: [
		"h",
		"hb",
		"H",
		"hB"
	],
	OM: [
		"h",
		"hB",
		"hb",
		"H"
	],
	PA: [
		"h",
		"H",
		"hB",
		"hb"
	],
	PE: [
		"h",
		"H",
		"hB",
		"hb"
	],
	PF: [
		"H",
		"h",
		"hB"
	],
	PG: ["h", "H"],
	PH: [
		"h",
		"hB",
		"hb",
		"H"
	],
	PK: [
		"h",
		"hB",
		"H"
	],
	PL: ["H", "h"],
	PM: ["H", "hB"],
	PN: [
		"H",
		"h",
		"hb",
		"hB"
	],
	PR: [
		"h",
		"H",
		"hB",
		"hb"
	],
	PS: [
		"h",
		"hB",
		"hb",
		"H"
	],
	PT: ["H", "hB"],
	PW: ["h", "H"],
	PY: [
		"h",
		"H",
		"hB",
		"hb"
	],
	QA: [
		"h",
		"hB",
		"hb",
		"H"
	],
	RE: ["H", "hB"],
	RO: ["H", "hB"],
	RS: [
		"H",
		"hB",
		"h"
	],
	RU: ["H"],
	RW: ["H", "h"],
	SA: [
		"h",
		"hB",
		"hb",
		"H"
	],
	SB: [
		"h",
		"hb",
		"H",
		"hB"
	],
	SC: [
		"H",
		"h",
		"hB"
	],
	SD: [
		"h",
		"hB",
		"hb",
		"H"
	],
	SE: ["H"],
	SG: [
		"h",
		"hb",
		"H",
		"hB"
	],
	SH: [
		"H",
		"h",
		"hb",
		"hB"
	],
	SI: ["H", "hB"],
	SJ: ["H"],
	SK: ["H"],
	SL: [
		"h",
		"hb",
		"H",
		"hB"
	],
	SM: [
		"H",
		"h",
		"hB"
	],
	SN: [
		"H",
		"h",
		"hB"
	],
	SO: ["h", "H"],
	SR: ["H", "hB"],
	SS: [
		"h",
		"hb",
		"H",
		"hB"
	],
	ST: ["H", "hB"],
	SV: [
		"h",
		"H",
		"hB",
		"hb"
	],
	SX: [
		"H",
		"h",
		"hb",
		"hB"
	],
	SY: [
		"h",
		"hB",
		"hb",
		"H"
	],
	SZ: [
		"h",
		"hb",
		"H",
		"hB"
	],
	TA: [
		"H",
		"h",
		"hb",
		"hB"
	],
	TC: [
		"h",
		"hb",
		"H",
		"hB"
	],
	TD: [
		"h",
		"H",
		"hB"
	],
	TF: [
		"H",
		"h",
		"hB"
	],
	TG: ["H", "hB"],
	TH: ["H", "h"],
	TJ: ["H", "h"],
	TL: [
		"H",
		"hB",
		"hb",
		"h"
	],
	TM: ["H", "h"],
	TN: [
		"h",
		"hB",
		"hb",
		"H"
	],
	TO: ["h", "H"],
	TR: ["H", "hB"],
	TT: [
		"h",
		"hb",
		"H",
		"hB"
	],
	TW: [
		"hB",
		"hb",
		"h",
		"H"
	],
	TZ: [
		"hB",
		"hb",
		"H",
		"h"
	],
	UA: [
		"H",
		"hB",
		"h"
	],
	UG: [
		"hB",
		"hb",
		"H",
		"h"
	],
	UM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	US: [
		"h",
		"hb",
		"H",
		"hB"
	],
	UY: [
		"h",
		"H",
		"hB",
		"hb"
	],
	UZ: [
		"H",
		"hB",
		"h"
	],
	VA: [
		"H",
		"h",
		"hB"
	],
	VC: [
		"h",
		"hb",
		"H",
		"hB"
	],
	VE: [
		"h",
		"H",
		"hB",
		"hb"
	],
	VG: [
		"h",
		"hb",
		"H",
		"hB"
	],
	VI: [
		"h",
		"hb",
		"H",
		"hB"
	],
	VN: ["H", "h"],
	VU: ["h", "H"],
	WF: ["H", "hB"],
	WS: ["h", "H"],
	XK: [
		"H",
		"hB",
		"h"
	],
	YE: [
		"h",
		"hB",
		"hb",
		"H"
	],
	YT: ["H", "hB"],
	ZA: [
		"H",
		"h",
		"hb",
		"hB"
	],
	ZM: [
		"h",
		"hb",
		"H",
		"hB"
	],
	ZW: ["H", "h"],
	"af-ZA": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"ar-001": [
		"h",
		"hB",
		"hb",
		"H"
	],
	"ca-ES": [
		"H",
		"h",
		"hB"
	],
	"en-001": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"en-HK": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"en-IL": [
		"H",
		"h",
		"hb",
		"hB"
	],
	"en-MY": [
		"h",
		"hb",
		"H",
		"hB"
	],
	"es-BR": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"es-ES": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"es-GQ": [
		"H",
		"h",
		"hB",
		"hb"
	],
	"fr-CA": [
		"H",
		"h",
		"hB"
	],
	"gl-ES": [
		"H",
		"h",
		"hB"
	],
	"gu-IN": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"hi-IN": [
		"hB",
		"h",
		"H"
	],
	"it-CH": [
		"H",
		"h",
		"hB"
	],
	"it-IT": [
		"H",
		"h",
		"hB"
	],
	"kn-IN": [
		"hB",
		"h",
		"H"
	],
	"ml-IN": [
		"hB",
		"h",
		"H"
	],
	"mr-IN": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"pa-IN": [
		"hB",
		"hb",
		"h",
		"H"
	],
	"ta-IN": [
		"hB",
		"h",
		"hb",
		"H"
	],
	"te-IN": [
		"hB",
		"h",
		"H"
	],
	"zu-ZA": [
		"H",
		"hB",
		"hb",
		"h"
	]
};
function tt$1(e) {
	var t = e.hourCycle;
	if (void 0 === t && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
		case "h24": return "k";
		case "h23": return "H";
		case "h12": return "h";
		case "h11": return "K";
		default: throw new Error("Invalid hourCycle");
	}
	var r, n = e.language;
	return "root" !== n && (r = e.maximize().region), (et$1[r || ""] || et$1[n || ""] || et$1["".concat(n, "-001")] || et$1["001"])[0];
}
var rt$1 = new RegExp("^".concat(je$1.source, "*"));
var nt$1 = new RegExp("".concat(je$1.source, "*$"));
function ot$1(e, t) {
	return {
		start: e,
		end: t
	};
}
var it$1 = !!String.prototype.startsWith && "_a".startsWith("a", 1);
var at$1 = !!String.fromCodePoint;
var st$1 = !!Object.fromEntries;
var ct$1 = !!String.prototype.codePointAt;
var lt$1 = !!String.prototype.trimStart;
var ut$1 = !!String.prototype.trimEnd;
var ht$1 = !!Number.isSafeInteger ? Number.isSafeInteger : function(e) {
	return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
};
var ft$1 = !0;
try {
	ft$1 = "a" === (null === (Qe$1 = vt$1("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === Qe$1 ? void 0 : Qe$1[0]);
} catch (e) {
	ft$1 = !1;
}
var dt$1;
var pt$1 = it$1 ? function(e, t, r) {
	return e.startsWith(t, r);
} : function(e, t, r) {
	return e.slice(r, r + t.length) === t;
};
var mt$1 = at$1 ? String.fromCodePoint : function() {
	for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
	for (var r, n = "", o = e.length, i = 0; o > i;) {
		if ((r = e[i++]) > 1114111) throw RangeError(r + " is not a valid code point");
		n += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320);
	}
	return n;
};
var gt$1 = st$1 ? Object.fromEntries : function(e) {
	for (var t = {}, r = 0, n = e; r < n.length; r++) {
		var o = n[r], i = o[0];
		t[i] = o[1];
	}
	return t;
};
var yt$1 = ct$1 ? function(e, t) {
	return e.codePointAt(t);
} : function(e, t) {
	var r = e.length;
	if (!(t < 0 || t >= r)) {
		var n, o = e.charCodeAt(t);
		return o < 55296 || o > 56319 || t + 1 === r || (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? o : n - 56320 + (o - 55296 << 10) + 65536;
	}
};
var bt$1 = lt$1 ? function(e) {
	return e.trimStart();
} : function(e) {
	return e.replace(rt$1, "");
};
var Et$1 = ut$1 ? function(e) {
	return e.trimEnd();
} : function(e) {
	return e.replace(nt$1, "");
};
function vt$1(e, t) {
	return new RegExp(e, t);
}
if (ft$1) {
	var _t = vt$1("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
	dt$1 = function(e, t) {
		var r;
		return _t.lastIndex = t, null !== (r = _t.exec(e)[1]) && void 0 !== r ? r : "";
	};
} else dt$1 = function(e, t) {
	for (var r = [];;) {
		var n = yt$1(e, t);
		if (void 0 === n || Ht(n) || Lt(n)) break;
		r.push(n), t += n >= 65536 ? 2 : 1;
	}
	return mt$1.apply(void 0, r);
};
var Tt$1 = function() {
	function e(e, t) {
		void 0 === t && (t = {}), this.message = e, this.position = {
			offset: 0,
			line: 1,
			column: 1
		}, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons;
	}
	return e.prototype.parse = function() {
		if (0 !== this.offset()) throw Error("parser can only be used once");
		return this.parseMessage(0, "", !1);
	}, e.prototype.parseMessage = function(e, t, r) {
		for (var n = []; !this.isEOF();) {
			var o = this.char();
			if (123 === o) {
				if ((i = this.parseArgument(e, r)).err) return i;
				n.push(i.val);
			} else {
				if (125 === o && e > 0) break;
				if (35 !== o || "plural" !== t && "selectordinal" !== t) {
					if (60 === o && !this.ignoreTag && 47 === this.peek()) {
						if (r) break;
						return this.error(Re$1.UNMATCHED_CLOSING_TAG, ot$1(this.clonePosition(), this.clonePosition()));
					}
					if (60 === o && !this.ignoreTag && wt(this.peek() || 0)) {
						if ((i = this.parseTag(e, t)).err) return i;
						n.push(i.val);
					} else {
						var i;
						if ((i = this.parseLiteral(e, t)).err) return i;
						n.push(i.val);
					}
				} else {
					var a = this.clonePosition();
					this.bump(), n.push({
						type: Me$1.pound,
						location: ot$1(a, this.clonePosition())
					});
				}
			}
		}
		return {
			val: n,
			err: null
		};
	}, e.prototype.parseTag = function(e, t) {
		var r = this.clonePosition();
		this.bump();
		var n = this.parseTagName();
		if (this.bumpSpace(), this.bumpIf("/>")) return {
			val: {
				type: Me$1.literal,
				value: "<".concat(n, "/>"),
				location: ot$1(r, this.clonePosition())
			},
			err: null
		};
		if (this.bumpIf(">")) {
			var o = this.parseMessage(e + 1, t, !0);
			if (o.err) return o;
			var i = o.val, a = this.clonePosition();
			if (this.bumpIf("</")) {
				if (this.isEOF() || !wt(this.char())) return this.error(Re$1.INVALID_TAG, ot$1(a, this.clonePosition()));
				var s = this.clonePosition();
				return n !== this.parseTagName() ? this.error(Re$1.UNMATCHED_CLOSING_TAG, ot$1(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
					val: {
						type: Me$1.tag,
						value: n,
						children: i,
						location: ot$1(r, this.clonePosition())
					},
					err: null
				} : this.error(Re$1.INVALID_TAG, ot$1(a, this.clonePosition())));
			}
			return this.error(Re$1.UNCLOSED_TAG, ot$1(r, this.clonePosition()));
		}
		return this.error(Re$1.INVALID_TAG, ot$1(r, this.clonePosition()));
	}, e.prototype.parseTagName = function() {
		var e = this.offset();
		for (this.bump(); !this.isEOF() && At$1(this.char());) this.bump();
		return this.message.slice(e, this.offset());
	}, e.prototype.parseLiteral = function(e, t) {
		for (var r = this.clonePosition(), n = "";;) {
			var o = this.tryParseQuote(t);
			if (o) n += o;
			else {
				var i = this.tryParseUnquoted(e, t);
				if (i) n += i;
				else {
					var a = this.tryParseLeftAngleBracket();
					if (!a) break;
					n += a;
				}
			}
		}
		var s = ot$1(r, this.clonePosition());
		return {
			val: {
				type: Me$1.literal,
				value: n,
				location: s
			},
			err: null
		};
	}, e.prototype.tryParseLeftAngleBracket = function() {
		return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (wt(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
		var e;
	}, e.prototype.tryParseQuote = function(e) {
		if (this.isEOF() || 39 !== this.char()) return null;
		switch (this.peek()) {
			case 39: return this.bump(), this.bump(), "'";
			case 123:
			case 60:
			case 62:
			case 125: break;
			case 35:
				if ("plural" === e || "selectordinal" === e) break;
				return null;
			default: return null;
		}
		this.bump();
		var t = [this.char()];
		for (this.bump(); !this.isEOF();) {
			var r = this.char();
			if (39 === r) {
				if (39 !== this.peek()) {
					this.bump();
					break;
				}
				t.push(39), this.bump();
			} else t.push(r);
			this.bump();
		}
		return mt$1.apply(void 0, t);
	}, e.prototype.tryParseUnquoted = function(e, t) {
		if (this.isEOF()) return null;
		var r = this.char();
		return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), mt$1(r));
	}, e.prototype.parseArgument = function(e, t) {
		var r = this.clonePosition();
		if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Re$1.EXPECT_ARGUMENT_CLOSING_BRACE, ot$1(r, this.clonePosition()));
		if (125 === this.char()) return this.bump(), this.error(Re$1.EMPTY_ARGUMENT, ot$1(r, this.clonePosition()));
		var n = this.parseIdentifierIfPossible().value;
		if (!n) return this.error(Re$1.MALFORMED_ARGUMENT, ot$1(r, this.clonePosition()));
		if (this.bumpSpace(), this.isEOF()) return this.error(Re$1.EXPECT_ARGUMENT_CLOSING_BRACE, ot$1(r, this.clonePosition()));
		switch (this.char()) {
			case 125: return this.bump(), {
				val: {
					type: Me$1.argument,
					value: n,
					location: ot$1(r, this.clonePosition())
				},
				err: null
			};
			case 44: return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Re$1.EXPECT_ARGUMENT_CLOSING_BRACE, ot$1(r, this.clonePosition())) : this.parseArgumentOptions(e, t, n, r);
			default: return this.error(Re$1.MALFORMED_ARGUMENT, ot$1(r, this.clonePosition()));
		}
	}, e.prototype.parseIdentifierIfPossible = function() {
		var e = this.clonePosition(), t = this.offset(), r = dt$1(this.message, t), n = t + r.length;
		return this.bumpTo(n), {
			value: r,
			location: ot$1(e, this.clonePosition())
		};
	}, e.prototype.parseArgumentOptions = function(e, t, r, n) {
		var o, i = this.clonePosition(), a = this.parseIdentifierIfPossible().value, s = this.clonePosition();
		switch (a) {
			case "": return this.error(Re$1.EXPECT_ARGUMENT_TYPE, ot$1(i, s));
			case "number":
			case "date":
			case "time":
				this.bumpSpace();
				var c = null;
				if (this.bumpIf(",")) {
					this.bumpSpace();
					var l = this.clonePosition();
					if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
					if (0 === (d = Et$1(y.val)).length) return this.error(Re$1.EXPECT_ARGUMENT_STYLE, ot$1(this.clonePosition(), this.clonePosition()));
					c = {
						style: d,
						styleLocation: ot$1(l, this.clonePosition())
					};
				}
				if ((b = this.tryParseArgumentClose(n)).err) return b;
				var u = ot$1(n, this.clonePosition());
				if (c && pt$1(null == c ? void 0 : c.style, "::", 0)) {
					var h = bt$1(c.style.slice(2));
					if ("number" === a) return (y = this.parseNumberSkeletonFromString(h, c.styleLocation)).err ? y : {
						val: {
							type: Me$1.number,
							value: r,
							location: u,
							style: y.val
						},
						err: null
					};
					if (0 === h.length) return this.error(Re$1.EXPECT_DATE_TIME_SKELETON, u);
					var f = h;
					this.locale && (f = function(e, t) {
						for (var r = "", n = 0; n < e.length; n++) {
							var o = e.charAt(n);
							if ("j" === o) {
								for (var i = 0; n + 1 < e.length && e.charAt(n + 1) === o;) i++, n++;
								var a = 1 + (1 & i), s = i < 2 ? 1 : 3 + (i >> 1), c = tt$1(t);
								for ("H" != c && "k" != c || (s = 0); s-- > 0;) r += "a";
								for (; a-- > 0;) r = c + r;
							} else r += "J" === o ? "H" : o;
						}
						return r;
					}(h, this.locale));
					var d = {
						type: $e$1.dateTime,
						pattern: f,
						location: c.styleLocation,
						parsedOptions: this.shouldParseSkeletons ? Fe$1(f) : {}
					};
					return {
						val: {
							type: "date" === a ? Me$1.date : Me$1.time,
							value: r,
							location: u,
							style: d
						},
						err: null
					};
				}
				return {
					val: {
						type: "number" === a ? Me$1.number : "date" === a ? Me$1.date : Me$1.time,
						value: r,
						location: u,
						style: null !== (o = null == c ? void 0 : c.style) && void 0 !== o ? o : null
					},
					err: null
				};
			case "plural":
			case "selectordinal":
			case "select":
				var p = this.clonePosition();
				if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Re$1.EXPECT_SELECT_ARGUMENT_OPTIONS, ot$1(p, ee$1({}, p)));
				this.bumpSpace();
				var m = this.parseIdentifierIfPossible(), g = 0;
				if ("select" !== a && "offset" === m.value) {
					if (!this.bumpIf(":")) return this.error(Re$1.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ot$1(this.clonePosition(), this.clonePosition()));
					var y;
					if (this.bumpSpace(), (y = this.tryParseDecimalInteger(Re$1.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Re$1.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
					this.bumpSpace(), m = this.parseIdentifierIfPossible(), g = y.val;
				}
				var b, E = this.tryParsePluralOrSelectOptions(e, a, t, m);
				if (E.err) return E;
				if ((b = this.tryParseArgumentClose(n)).err) return b;
				var v = ot$1(n, this.clonePosition());
				return "select" === a ? {
					val: {
						type: Me$1.select,
						value: r,
						options: gt$1(E.val),
						location: v
					},
					err: null
				} : {
					val: {
						type: Me$1.plural,
						value: r,
						options: gt$1(E.val),
						offset: g,
						pluralType: "plural" === a ? "cardinal" : "ordinal",
						location: v
					},
					err: null
				};
			default: return this.error(Re$1.INVALID_ARGUMENT_TYPE, ot$1(i, s));
		}
	}, e.prototype.tryParseArgumentClose = function(e) {
		return this.isEOF() || 125 !== this.char() ? this.error(Re$1.EXPECT_ARGUMENT_CLOSING_BRACE, ot$1(e, this.clonePosition())) : (this.bump(), {
			val: !0,
			err: null
		});
	}, e.prototype.parseSimpleArgStyleIfPossible = function() {
		for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
			case 39:
				this.bump();
				var r = this.clonePosition();
				if (!this.bumpUntil("'")) return this.error(Re$1.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, ot$1(r, this.clonePosition()));
				this.bump();
				break;
			case 123:
				e += 1, this.bump();
				break;
			case 125:
				if (!(e > 0)) return {
					val: this.message.slice(t.offset, this.offset()),
					err: null
				};
				e -= 1;
				break;
			default: this.bump();
		}
		return {
			val: this.message.slice(t.offset, this.offset()),
			err: null
		};
	}, e.prototype.parseNumberSkeletonFromString = function(e, t) {
		var r = [];
		try {
			r = function(e) {
				if (0 === e.length) throw new Error("Number skeleton cannot be empty");
				for (var t = [], r = 0, n = e.split(Ge$1).filter(function(e) {
					return e.length > 0;
				}); r < n.length; r++) {
					var o = n[r].split("/");
					if (0 === o.length) throw new Error("Invalid number skeleton");
					for (var i = o[0], a = o.slice(1), s = 0, c = a; s < c.length; s++) if (0 === c[s].length) throw new Error("Invalid number skeleton");
					t.push({
						stem: i,
						options: a
					});
				}
				return t;
			}(e);
		} catch (e) {
			return this.error(Re$1.INVALID_NUMBER_SKELETON, t);
		}
		return {
			val: {
				type: $e$1.number,
				tokens: r,
				location: t,
				parsedOptions: this.shouldParseSkeletons ? Ze$1(r) : {}
			},
			err: null
		};
	}, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
		for (var o, i = !1, a = [], s = /* @__PURE__ */ new Set(), c = n.value, l = n.location;;) {
			if (0 === c.length) {
				var u = this.clonePosition();
				if ("select" === t || !this.bumpIf("=")) break;
				var h = this.tryParseDecimalInteger(Re$1.EXPECT_PLURAL_ARGUMENT_SELECTOR, Re$1.INVALID_PLURAL_ARGUMENT_SELECTOR);
				if (h.err) return h;
				l = ot$1(u, this.clonePosition()), c = this.message.slice(u.offset, this.offset());
			}
			if (s.has(c)) return this.error("select" === t ? Re$1.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Re$1.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
			"other" === c && (i = !0), this.bumpSpace();
			var f = this.clonePosition();
			if (!this.bumpIf("{")) return this.error("select" === t ? Re$1.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Re$1.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, ot$1(this.clonePosition(), this.clonePosition()));
			var d = this.parseMessage(e + 1, t, r);
			if (d.err) return d;
			var p = this.tryParseArgumentClose(f);
			if (p.err) return p;
			a.push([c, {
				value: d.val,
				location: ot$1(f, this.clonePosition())
			}]), s.add(c), this.bumpSpace(), c = (o = this.parseIdentifierIfPossible()).value, l = o.location;
		}
		return 0 === a.length ? this.error("select" === t ? Re$1.EXPECT_SELECT_ARGUMENT_SELECTOR : Re$1.EXPECT_PLURAL_ARGUMENT_SELECTOR, ot$1(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(Re$1.MISSING_OTHER_CLAUSE, ot$1(this.clonePosition(), this.clonePosition())) : {
			val: a,
			err: null
		};
	}, e.prototype.tryParseDecimalInteger = function(e, t) {
		var r = 1, n = this.clonePosition();
		this.bumpIf("+") || this.bumpIf("-") && (r = -1);
		for (var o = !1, i = 0; !this.isEOF();) {
			var a = this.char();
			if (!(a >= 48 && a <= 57)) break;
			o = !0, i = 10 * i + (a - 48), this.bump();
		}
		var s = ot$1(n, this.clonePosition());
		return o ? ht$1(i *= r) ? {
			val: i,
			err: null
		} : this.error(t, s) : this.error(e, s);
	}, e.prototype.offset = function() {
		return this.position.offset;
	}, e.prototype.isEOF = function() {
		return this.offset() === this.message.length;
	}, e.prototype.clonePosition = function() {
		return {
			offset: this.position.offset,
			line: this.position.line,
			column: this.position.column
		};
	}, e.prototype.char = function() {
		var e = this.position.offset;
		if (e >= this.message.length) throw Error("out of bound");
		var t = yt$1(this.message, e);
		if (void 0 === t) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
		return t;
	}, e.prototype.error = function(e, t) {
		return {
			val: null,
			err: {
				kind: e,
				message: this.message,
				location: t
			}
		};
	}, e.prototype.bump = function() {
		if (!this.isEOF()) {
			var e = this.char();
			10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
		}
	}, e.prototype.bumpIf = function(e) {
		if (pt$1(this.message, e, this.offset())) {
			for (var t = 0; t < e.length; t++) this.bump();
			return !0;
		}
		return !1;
	}, e.prototype.bumpUntil = function(e) {
		var t = this.offset(), r = this.message.indexOf(e, t);
		return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
	}, e.prototype.bumpTo = function(e) {
		if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
		for (e = Math.min(e, this.message.length);;) {
			var t = this.offset();
			if (t === e) break;
			if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
			if (this.bump(), this.isEOF()) break;
		}
	}, e.prototype.bumpSpace = function() {
		for (; !this.isEOF() && Ht(this.char());) this.bump();
	}, e.prototype.peek = function() {
		if (this.isEOF()) return null;
		var e = this.char(), t = this.offset(), r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
		return null != r ? r : null;
	}, e;
}();
function wt(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function At$1(e) {
	return 45 === e || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Ht(e) {
	return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e;
}
function Lt(e) {
	return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094;
}
function Pt(e) {
	e.forEach(function(e) {
		if (delete e.location, function(e) {
			return e.type === Me$1.select;
		}(e) || function(e) {
			return e.type === Me$1.plural;
		}(e)) for (var t in e.options) delete e.options[t].location, Pt(e.options[t].value);
		else (function(e) {
			return e.type === Me$1.number;
		})(e) && function(e) {
			return !(!e || "object" != typeof e || e.type !== $e$1.number);
		}(e.style) ? delete e.style.location : !function(e) {
			return e.type === Me$1.date;
		}(e) && !function(e) {
			return e.type === Me$1.time;
		}(e) || !function(e) {
			return !(!e || "object" != typeof e || e.type !== $e$1.dateTime);
		}(e.style) ? function(e) {
			return e.type === Me$1.tag;
		}(e) && Pt(e.children) : delete e.style.location;
	});
}
function St(e) {
	if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
	var t = e.default;
	if ("function" == typeof t) {
		var r = function e() {
			var r = !1;
			try {
				r = this instanceof e;
			} catch {}
			return r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
		};
		r.prototype = t.prototype;
	} else r = {};
	return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(t) {
		var n = Object.getOwnPropertyDescriptor(e, t);
		Object.defineProperty(r, t, n.get ? n : {
			enumerable: !0,
			get: function() {
				return e[t];
			}
		});
	}), r;
}
var Ct;
var Bt = {};
function It() {
	if (Ct) return Bt;
	var e, t;
	return Ct = 1, Object.defineProperty(Bt, "__esModule", { value: !0 }), Bt.SKELETON_TYPE = Bt.TYPE = void 0, Bt.isLiteralElement = function(t) {
		return t.type === e.literal;
	}, Bt.isArgumentElement = function(t) {
		return t.type === e.argument;
	}, Bt.isNumberElement = function(t) {
		return t.type === e.number;
	}, Bt.isDateElement = function(t) {
		return t.type === e.date;
	}, Bt.isTimeElement = function(t) {
		return t.type === e.time;
	}, Bt.isSelectElement = function(t) {
		return t.type === e.select;
	}, Bt.isPluralElement = function(t) {
		return t.type === e.plural;
	}, Bt.isPoundElement = function(t) {
		return t.type === e.pound;
	}, Bt.isTagElement = function(t) {
		return t.type === e.tag;
	}, Bt.isNumberSkeleton = function(e) {
		return !(!e || "object" != typeof e || e.type !== t.number);
	}, Bt.isDateTimeSkeleton = function(e) {
		return !(!e || "object" != typeof e || e.type !== t.dateTime);
	}, Bt.createLiteralElement = function(t) {
		return {
			type: e.literal,
			value: t
		};
	}, Bt.createNumberElement = function(t, r) {
		return {
			type: e.number,
			value: t,
			style: r
		};
	}, function(e) {
		e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
	}(e || (Bt.TYPE = e = {})), function(e) {
		e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
	}(t || (Bt.SKELETON_TYPE = t = {})), Bt;
}
var Ot;
var Nt = It();
var Rt = {};
var Mt = St(xe$1);
var $t = function() {
	if (Ot) return Rt;
	Ot = 1, Object.defineProperty(Rt, "__esModule", { value: !0 }), Rt.printAST = r, Rt.doPrintAST = n, Rt.printDateTimeSkeleton = a;
	var e = Mt, t = It();
	function r(e) {
		return n(e, !1);
	}
	function n(s, c) {
		return s.map(function(l, u) {
			return (0, t.isLiteralElement)(l) ? function(e, t, r, n) {
				var a = e.value;
				r || "'" !== a[0] || (a = "''".concat(a.slice(1)));
				n || "'" !== a[a.length - 1] || (a = "".concat(a.slice(0, a.length - 1), "''"));
				return a = o(a), t ? a.replace("#", "'#'") : a;
			}(l, c, 0 === u, u === s.length - 1) : (0, t.isArgumentElement)(l) ? function(e) {
				var t = e.value;
				return "{".concat(t, "}");
			}(l) : (0, t.isDateElement)(l) || (0, t.isTimeElement)(l) || (0, t.isNumberElement)(l) ? function(e) {
				return "{".concat(e.value, ", ").concat(t.TYPE[e.type]).concat(e.style ? ", ".concat((r = e.style, "string" == typeof r ? o(r) : r.type === t.SKELETON_TYPE.dateTime ? "::".concat(a(r)) : "::".concat(r.tokens.map(i).join(" ")))) : "", "}");
				var r;
			}(l) : (0, t.isPluralElement)(l) ? function(t) {
				var r = "cardinal" === t.pluralType ? "plural" : "selectordinal", o = [
					t.value,
					r,
					e.__spreadArray([t.offset ? "offset:".concat(t.offset) : ""], Object.keys(t.options).map(function(e) {
						return "".concat(e, "{").concat(n(t.options[e].value, !0), "}");
					}), !0).filter(Boolean).join(" ")
				].join(",");
				return "{".concat(o, "}");
			}(l) : (0, t.isSelectElement)(l) ? function(e) {
				var t = [
					e.value,
					"select",
					Object.keys(e.options).map(function(t) {
						return "".concat(t, "{").concat(n(e.options[t].value, !1), "}");
					}).join(" ")
				].join(",");
				return "{".concat(t, "}");
			}(l) : (0, t.isPoundElement)(l) ? "#" : (0, t.isTagElement)(l) ? function(e) {
				return "<".concat(e.value, ">").concat(r(e.children), "</").concat(e.value, ">");
			}(l) : void 0;
		}).join("");
	}
	function o(e) {
		return e.replace(/([{}](?:[\s\S]*[{}])?)/, "'$1'");
	}
	function i(e) {
		var t = e.stem, r = e.options;
		return 0 === r.length ? t : "".concat(t).concat(r.map(function(e) {
			return "/".concat(e);
		}).join(""));
	}
	function a(e) {
		return e.pattern;
	}
	return Rt;
}();
var Ut = [
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
var xt = {
	variable: "v",
	number: "n",
	datetime: "d",
	currency: "c",
	"relative-time": "rt"
};
function jt(e) {
	return xt[e];
}
function Dt({ icuString: e, shouldVisit: t, visitor: r, options: { recurseIntoVisited: n = !0, ...o } }) {
	const i = function(e, t) {
		void 0 === t && (t = {}), t = ee$1({
			shouldParseSkeletons: !0,
			requiresOtherClause: !0
		}, t);
		var r = new Tt$1(e, t).parse();
		if (r.err) {
			var n = SyntaxError(Re$1[r.err.kind]);
			throw n.location = r.err.location, n.originalMessage = r.err.message, n;
		}
		return null != t && t.captureLocation || Pt(r.val), r.val;
	}(e, o);
	return a(i), i;
	function a(e) {
		e.map(s);
	}
	function s(e) {
		let o = !1;
		t(e) && (r(e), o = !0), o && !n || (e.type === Me$1.select || e.type === Me$1.plural ? Object.values(e.options).map((e) => e.value).map(a) : e.type === Me$1.tag && a(e.children));
	}
}
var Ft = "_gt_";
var Gt = new RegExp(`^${Ft}\\d+$`);
var kt = new RegExp(`^${Ft}$`);
function Vt(e) {
	return e.type === Nt.TYPE.select && Gt.test(e.value) && !!e.options.other && (0 === e.options.other.value.length || e.options.other.value.length > 0 && e.options.other.value[0]?.type === Nt.TYPE.literal);
}
function Kt(e) {
	return e.type === Nt.TYPE.select && kt.test(e.value) && !!e.options.other && (0 === e.options.other.value.length || e.options.other.value.length > 0 && e.options.other.value[0]?.type === Nt.TYPE.literal);
}
function zt(e) {
	if (!e.includes("_gt_")) return e;
	const t = [];
	Dt({
		icuString: e,
		shouldVisit: Kt,
		visitor: function(e) {
			t.push({
				start: e.location?.start.offset ?? 0,
				end: e.location?.end.offset ?? 0,
				otherStart: e.options.other.location?.start.offset ?? 0,
				otherEnd: e.options.other.location?.end.offset ?? 0
			});
		},
		options: {
			recurseIntoVisited: !1,
			captureLocation: !0
		}
	});
	const r = [];
	let n = 0;
	for (let o = 0; o < t.length; o++) {
		const { start: i, end: a, otherStart: s, otherEnd: c } = t[o];
		r.push(e.slice(n, i)), r.push(e.slice(i, i + 4 + 1)), r.push(String(o + 1)), r.push(e.slice(i + 4 + 1, s)), r.push("{}"), r.push(e.slice(c, a)), n = a;
	}
	return r.push(e.slice(n, e.length)), r.join("");
}
function Zt(e) {
	if (!e.includes("_gt_")) return {};
	let t = 1;
	const r = {};
	return Dt({
		icuString: e,
		shouldVisit: Kt,
		visitor: function(e) {
			r[e.value + t] = e.options.other.value.length ? e.options.other.value[0]?.value : "", t += 1;
		},
		options: { recurseIntoVisited: !1 }
	}), r;
}
function Qt(e) {
	if (!e.includes("_gt_")) return e;
	return $t.printAST(Dt({
		icuString: e,
		shouldVisit: Vt,
		visitor: function(e) {
			e.type = Nt.TYPE.argument, delete e.options;
		},
		options: { recurseIntoVisited: !1 }
	}));
}
function er(e) {
	return "object" == typeof e && !!e && "data-_gt" in e && "object" == typeof e["data-_gt"] && !!e["data-_gt"] && "transformation" in e["data-_gt"] && "variable" === e["data-_gt"]?.transformation;
}
function tr(e) {
	const t = e["data-_gt"]?.variableType || "variable";
	return {
		variableName: w$2(e, t),
		variableType: jt(t),
		injectionType: e["data-_gt"]?.injectionType || "manual",
		variableValue: void 0 !== e.value ? e.value : void 0 !== e.date ? e.date : void 0 !== e["data-_gt-unformatted-value"] ? e["data-_gt-unformatted-value"] : void 0 !== e.children ? e.children : void 0,
		variableOptions: (() => {
			const t = {
				...void 0 !== e.currency && { currency: e.currency },
				...void 0 !== e.unit && { unit: e.unit },
				...void 0 !== e.baseDate && { baseDate: e.baseDate },
				...void 0 !== e.options && e.options
			};
			return Object.keys(t).length ? t : "string" == typeof e["data-_gt-variable-options"] ? JSON.parse(e["data-_gt-variable-options"]) : e["data-_gt-variable-options"] || void 0;
		})()
	};
}
function rr(e, t, r) {
	let n = "", o = null;
	return "number" == typeof e && !o && r && (n = function(e, t = Ut, r = ["en"]) {
		const n = S$2.get("PluralRules", r).select(e), o = Math.abs(e);
		if (0 === o && t.includes("zero")) return "zero";
		if (1 === o) {
			if (t.includes("singular")) return "singular";
			if (t.includes("one")) return "one";
		}
		if ("one" === n && t.includes("singular")) return "singular";
		if (2 === o) {
			if (t.includes("dual")) return "dual";
			if (t.includes("two")) return "two";
		}
		return "two" === n && t.includes("dual") ? "dual" : t.includes(n) ? n : "two" === n && t.includes("dual") ? "dual" : "two" === n && t.includes("plural") ? "plural" : "two" === n && t.includes("other") ? "other" : "few" === n && t.includes("plural") ? "plural" : "few" === n && t.includes("other") ? "other" : "many" === n && t.includes("plural") ? "plural" : "many" === n && t.includes("other") ? "other" : "other" === n && t.includes("plural") ? "plural" : "";
	}(e, Object.keys(r), t)), n && !o && (o = r[n]), o;
}
function nr(e) {
	return e && e.props && e.props["data-_gt"] ? e.props["data-_gt"] : null;
}
function or({ children: e, defaultLocale: t = A$1, renderVariable: r }) {
	const o = (e) => a.isValidElement(e) ? ((e) => {
		const o = nr(e);
		if (er(e.props)) {
			const { variableType: n, variableValue: o, variableOptions: i, injectionType: a } = tr(e.props);
			return r({
				variableType: n,
				variableValue: o,
				variableOptions: i,
				locales: [t],
				injectionType: a
			});
		}
		if ("plural" === o?.transformation) {
			const r = o.branches || {};
			return i(rr(e.props.n, [t], r) || e.props.children);
		}
		if ("branch" === o?.transformation) {
			let { children: t, branch: r, "data-_gt": n, ...a } = e.props;
			return a = o.branches || {}, i(void 0 !== a[r] ? a[r] : t);
		}
		return "fragment" === o?.transformation ? a.createElement(a.Fragment, {
			key: e.props.key,
			children: i(e.props.children)
		}) : e.props.children ? a.cloneElement(e, {
			...e.props,
			"data-_gt": void 0,
			children: i(e.props.children)
		}) : a.cloneElement(e, {
			...e.props,
			"data-_gt": void 0
		});
	})(e) : e, i = (e) => Array.isArray(e) ? a.Children.map(e, o) : o(e);
	return i(e);
}
function ir(e, t) {
	if (null == e) throw new Error("Cannot index into an undefined dictionary");
	return e[t];
}
function ar(e, t, r) {
	e[t] = r;
}
function sr(e, t = 0) {
	let r = t;
	const i = (e) => {
		const { type: t, props: n } = e;
		r += 1;
		const o = {
			id: r,
			injectionType: "manual"
		};
		let i;
		try {
			i = "function" == typeof t && t._gtt || "";
		} catch {}
		if (i) {
			const e = i.split("-");
			if ("automatic" !== e[1] && "automatic" !== e[2] || (o.injectionType = "automatic"), "translate" === e[0] && (e[0] = "fragment"), "variable" === e[0] && (o.variableType = e?.[1] || "variable"), "plural" === e[0]) {
				const e = Object.entries(n).reduce((e, [t, n]) => {
					var o = t;
					return Ut.includes(o) && (e[t] = sr(n, r)), e;
				}, {});
				Object.keys(e).length && (o.branches = e);
			}
			if ("branch" === e[0]) {
				const { children: e, branch: t, ...i } = n, a = Object.fromEntries(Object.entries(i).filter(([e]) => !e.startsWith("data-"))), s = Object.entries(a).reduce((e, [t, n]) => (e[t] = sr(n, r), e), {});
				Object.keys(s).length && (o.branches = s);
			}
			o.transformation = e[0];
		}
		return o;
	};
	function a$14(e) {
		return isValidElement(e) ? function(e) {
			const { props: t } = e, r = i(e), o = {
				...t,
				"data-_gt": r
			};
			return t.children && !r.variableType && (o.children = s(t.children)), e.type === a.Fragment && (o["data-_gt"].transformation = "fragment"), a.cloneElement(e, o);
		}(e) : e;
	}
	function s(e) {
		return Array.isArray(e) ? a.Children.map(e, a$14) : a$14(e);
	}
	return s(e);
}
var cr = "@generaltranslation/react-core";
var lr = `${cr} Error: Production environments cannot include an api key.`;
var ur = `${cr} Error: Fetching batched translations failed`;
var hr = (e, t) => e ? `${cr} Error: Translation failed for id: ${e}, hash: ${t} ` : `${cr} Error: Translation failed for hash: ${t}`;
var fr = (e, t) => `${cr} Error: error rendering string ${t ? `for id: "${t}"` : ""} original message: "${e}"`;
var dr = (e, t, r = "tx") => `${cr} Error: string translation error. ${r}("${e}")${t ? ` with id "${t}"` : ""} could not locate translation.`;
var pr = (e) => `${cr} Error: Dictionary subtree not found for id: "${e}"`;
var mr = (e) => `${cr} Error: Invalid ICU string dictionary entry found for id: "${e}"`;
var gr = `${cr} Warning: Translation cloud services require a project ID! Find yours at generaltranslation.com/dashboard.`;
var yr = (e) => `${cr} Warning: No valid dictionary entry found for id: "${e}"`;
var br = `${cr} Warning: A development API key is required for runtime translation!  Find your development API key: generaltranslation.com/dashboard.  (Or, disable this warning message by setting runtimeUrl to an empty string which disables runtime translation.)`;
var Er = `${cr} Warning: Runtime translation timed out.`;
var vr = `${cr} Warning: No dictionary was found. Ensure you are either passing your dictionary to the <GTProvider>.`;
function _r(e) {
	return /* @__PURE__ */ new Error(`${cr}: The ${e} function was not overridden. This is likely the result of importing directly from "generaltranslation/react-core".`);
}
function Tr({}) {
	throw _r("readAuthFromEnv");
}
var wr = {
	pl: "placeholder",
	ti: "title",
	alt: "alt",
	arl: "aria-label",
	arb: "aria-labelledby",
	ard: "aria-describedby"
};
var Ar = (e) => {
	if (!e) return "";
	const { type: t, props: r } = e;
	if (t && "function" == typeof t) {
		if ("displayName" in t && "string" == typeof t.displayName && t.displayName) return t.displayName;
		if ("name" in t && "string" == typeof t.name && t.name) return t.name;
	}
	return t && "string" == typeof t ? t : r.href ? "a" : r["data-_gt"]?.id ? `C${r["data-_gt"].id}` : "function";
};
var Hr = (e) => {
	const { props: t } = e, r = { t: Ar(e) };
	if (t["data-_gt"]) {
		const e = t["data-_gt"], n = e.transformation;
		if ("variable" === n) {
			const r = e.variableType || "variable", n = w$2(t, r), o = jt(r);
			return {
				i: e.id,
				k: n,
				v: o
			};
		}
		r.i = e.id, r.d = ((e, t, r) => {
			let n = Object.entries(wr).reduce((e, [r, n]) => (t[n] && (e[r] = t[n]), e), {});
			if ("plural" === e && r) {
				const e = {};
				Object.entries(r).forEach(([t, r]) => {
					e[t] = Pr(r);
				}), n = {
					...n,
					b: e,
					t: "p"
				};
			}
			if ("branch" === e && r) {
				const e = {};
				Object.entries(r).forEach(([t, r]) => {
					e[t] = Pr(r);
				}), n = {
					...n,
					b: e,
					t: "b"
				};
			}
			return Object.keys(n).length ? n : void 0;
		})(n, t, e.branches);
		let o = Object.entries(wr).reduce((e, [r, n]) => (t[n] && (e[r] = t[n]), e), {});
		if ("plural" === n && e.branches) {
			const t = {};
			Object.entries(e.branches).forEach(([e, r]) => {
				t[e] = Pr(r);
			}), o = {
				...o,
				b: t,
				t: "p"
			};
		}
		if ("branch" === n && e.branches) {
			const t = {};
			Object.entries(e.branches).forEach(([e, r]) => {
				t[e] = Pr(r);
			}), o = {
				...o,
				b: t,
				t: "b"
			};
		}
		r.d = Object.keys(o).length ? o : void 0;
	}
	return t.children && (r.c = Pr(t.children)), r;
};
var Lr = (e) => {
	return t = e, a.isValidElement(t) ? Hr(e) : "number" == typeof e ? e.toString() : e;
	var t;
};
function Pr(e) {
	return Array.isArray(e) ? e.map(Lr) : Lr(e);
}
function Sr(e) {
	if ("string" == typeof e) return !0;
	if (Array.isArray(e)) {
		if ("string" != typeof e?.[0]) return !1;
		const t = e?.[1];
		if (void 0 === t) return !0;
		if (t && "object" == typeof t) return !0;
	}
	return !1;
}
function Cr(e, t) {
	let r = e;
	const n = t.split(".");
	for (const e of n) {
		if ("object" != typeof r && !Array.isArray(r)) return;
		r = ir(r, e);
	}
	return r;
}
function Br(e) {
	if (Array.isArray(e)) {
		if (1 === e.length) return { entry: e[0] };
		if (2 === e.length) return {
			entry: e[0],
			metadata: e[1]
		};
	}
	return { entry: e };
}
function Ir({ sourceElement: e, targetElement: t, locales: r = [A$1], renderVariable: o }) {
	const { props: i } = e, a$15 = i["data-_gt"], s = a$15?.transformation, c = t.d, l = {};
	if (c && Object.entries(wr).forEach(([e, t]) => {
		c[e] && (l[t] = c[e]);
	}), "plural" === s) {
		const n = e.props.n;
		return Or({
			source: rr(n, r, a$15.branches || {}) || e.props.children,
			target: rr(n, r, t.d?.b || {}) || t.c,
			locales: r,
			renderVariable: o
		});
	}
	if ("branch" === s) {
		const { branch: e, children: n } = i;
		return Or({
			source: (a$15.branches || {})[e] || n,
			target: (t.d?.b || {})[e] || t.c,
			locales: r,
			renderVariable: o
		});
	}
	return "fragment" === s && t.c ? a.createElement(a.Fragment, {
		key: e.props.key,
		children: Or({
			source: i.children,
			target: t.c,
			locales: r,
			renderVariable: o
		})
	}) : i?.children && t?.c ? a.cloneElement(e, {
		...i,
		...l,
		"data-_gt": void 0,
		children: Or({
			source: i.children,
			target: t.c,
			locales: r,
			renderVariable: o
		})
	}) : or({
		children: e,
		defaultLocale: r[0],
		renderVariable: o
	});
}
function Or({ source: t, target: r, locales: o = [A$1], renderVariable: i }) {
	if (null == r && t) return or({
		children: t,
		defaultLocale: o[0],
		renderVariable: i
	});
	if ("string" == typeof r) return r;
	if (Array.isArray(r) && !Array.isArray(t) && t && (t = [t]), Array.isArray(t) && Array.isArray(r)) {
		const a$16 = {}, s = {}, c = {}, l = t.filter((e) => {
			if (a.isValidElement(e)) {
				if (!er(e.props)) return !0;
				{
					const { variableName: t, variableValue: r, variableOptions: n, injectionType: o } = tr(e.props);
					a$16[t] = r, s[t] = n, c[t] = o;
				}
			}
			return !1;
		}), u = (e) => l.find((t) => {
			const r = nr(t);
			if (void 0 !== r?.id) return r.id === e.i;
			return !1;
		}) || l.shift();
		return r.map((t, r) => {
			if ("string" == typeof t) return jsx(a.Fragment, { children: t }, `string_${r}`);
			if (N$2(t)) return jsx(a.Fragment, { children: i({
				variableType: t.v || "v",
				variableValue: a$16[t.k],
				variableOptions: s[t.k],
				locales: o,
				injectionType: c[t.k] || "manual"
			}) }, `var_${r}`);
			const l = u(t);
			return l ? jsx(a.Fragment, { children: Ir({
				sourceElement: l,
				targetElement: t,
				locales: o,
				renderVariable: i
			}) }, `element_${r}`) : null;
		});
	}
	if (r && "object" == typeof r && !Array.isArray(r)) {
		const e = N$2(r) ? "variable" : "element";
		if (a.isValidElement(t)) {
			if ("element" === e) return Ir({
				sourceElement: t,
				targetElement: r,
				locales: o,
				renderVariable: i
			});
			if (er(t.props)) {
				const { variableValue: e, variableOptions: r, variableType: n, injectionType: a } = tr(t.props);
				return i({
					variableType: n,
					variableValue: e,
					variableOptions: r,
					locales: o,
					injectionType: a
				});
			}
		}
	}
	return or({
		children: t,
		defaultLocale: o[0],
		renderVariable: i
	});
}
var Nr = (e = "production") => ({
	method: "default",
	timeout: "development" === e ? 8e3 : 12e3
});
function Rr(e) {
	return void 0 !== e && ("string" == typeof e || !!Array.isArray(e) && (1 === e.length || 2 === e.length) && "string" == typeof e[0] && (2 !== e.length || "object" == typeof e[1] && null !== e[1] && ("$context" in e[1] || "$maxChars" in e[1] || "$_hash" in e[1])));
}
var Mr = (e) => "string" == typeof e || Array.isArray(e);
var $r = (e) => "object" == typeof e && null !== e && !Array.isArray(e);
function Ur(e, t) {
	if (Array.isArray(e)) return e.map((e, r) => Rr(e) ? t[r] : Ur(e, t[r]));
	const r = {
		...Object.fromEntries(Object.entries(e).filter(([, e]) => Mr(e))),
		...Object.fromEntries(Object.entries(t).filter(([, e]) => Mr(e)))
	}, n = Object.entries(e).filter(([, e]) => $r(e)).map(([e]) => e), o = Object.entries(t).filter(([, e]) => $r(e)).map(([e]) => e), i = /* @__PURE__ */ new Set([...n, ...o]);
	for (const n of i) r[n] = Ur(ir(e, n) || {}, ir(t, n) || {});
	return r;
}
function xr({ dictionary: e, id: t }) {
	if ("" === t) return e;
	let r = e;
	const n = t.split(".");
	for (const e of n) r = ir(r, e);
	return r;
}
var jr = [
	"constructor",
	"prototype",
	"__proto__"
];
function Dr(e, t, r, n) {
	if (Rr(t)) return e;
	const o = r.split(".");
	o.forEach((e) => {
		if (function(e) {
			return !!jr.includes(e);
		}(e)) throw new Error(`Invalid key: ${e}`);
	}), t ||= {};
	for (const e of o.slice(0, -1)) ir(t, e) ?? ar(t, e, Array.isArray(ir(n, e)) ? [] : {}), t = ir(t, e), n = ir(n, e);
	ar(t, o[o.length - 1], e);
}
function Fr(e) {
	let t = {};
	return Array.isArray(e) && (t = []), Object.entries(e).forEach(([e, r]) => {
		if (Rr(r)) {
			const { entry: n } = Br(r);
			ar(t, e, n);
		} else ar(t, e, Fr(r));
	}), t;
}
function Gr(e) {
	return function(e) {
		if (R$1(e), j$2) return e.toHex();
		let t = "";
		for (let r = 0; r < e.length; r++) t += D$1[e[r]];
		return t;
	}(z$1(function(e) {
		if ("string" != typeof e) throw new TypeError("string expected");
		return new Uint8Array(new TextEncoder().encode(e));
	}(e))).slice(0, 16);
}
function kr({ source: e, context: t, id: r, maxChars: n, dataFormat: o }, i = Gr) {
	let a;
	return a = "JSX" === o ? Kr(e) : e, i(O$2({
		source: a,
		...r && { id: r },
		...t && { context: t },
		...null != n && { maxChars: Math.abs(n) },
		...o && { dataFormat: o }
	}));
}
var Vr = (e) => {
	if (e && "object" == typeof e) {
		const t = {};
		if ("c" in e && e.c && (t.c = Kr(e.c)), "d" in e) {
			const r = e?.d;
			r?.b && (t.b = Object.fromEntries(Object.entries(r.b).map(([e, t]) => [e, Kr(t)]))), r?.t && (t.t = r.t);
		}
		return N$2(e) ? {
			k: e.k,
			...e.v && { v: e.v }
		} : t;
	}
	return e;
};
function Kr(e) {
	return Array.isArray(e) ? e.map(Vr) : Vr(e);
}
function Xr(e, t = "") {
	let r = !1;
	return Object.entries(e).forEach(([n, o]) => {
		const i = t ? `${t}.${n}` : n;
		if (Rr(o)) {
			let { entry: t, metadata: a } = Br(o);
			a?.$_hash || (a ||= {}, a.$_hash = kr({
				source: zt(t),
				...a?.$context && { context: a.$context },
				...null != a?.$maxChars && { maxChars: Math.abs(a.$maxChars) },
				id: i,
				dataFormat: "ICU"
			}), ar(e, n, [t, a]), r = !0);
		} else {
			const { updateDictionary: e } = Xr(o, i);
			r = r || e;
		}
	}), {
		dictionary: e,
		updateDictionary: r
	};
}
function Yr(e, t, r) {
	const n = xr({
		dictionary: e,
		id: r
	});
	if (!n) throw new Error(pr(r));
	if (Rr(n)) throw new Error(`${cr} Error: Cannot inject and merge a dictionary entry`);
	return function(e, t, r) {
		const n = Cr(e, r);
		if (!n) throw new Error(pr(r));
		if (Rr(n)) throw new Error(`${cr} Error: Cannot inject and merge a dictionary entry`);
		const o = r.split("."), i = o.slice(0, -1), a = o[o.length - 1];
		let s = e;
		return i.forEach((e) => {
			s = ir(s, e);
		}), ar(s, a, t), e;
	}(e, Ur(n, t), r);
}
function Wr(e, t, r = "") {
	const n = [];
	return Object.entries(e).forEach(([e, o]) => {
		const i = r ? `${r}.${e}` : e;
		if (Rr(o)) {
			const { entry: r, metadata: a } = Br(o);
			ir(t, e) || n.push({
				source: r,
				metadata: {
					$id: i,
					$context: a?.$context,
					$maxChars: a?.$maxChars,
					$_hash: a?.$_hash || ""
				}
			});
		} else n.push(...Wr(o, ir(t, e) || (Array.isArray(o) ? [] : {}), i));
	}), n;
}
function Qr(e) {
	if (-1 === e.lastIndexOf(":")) return null;
	const t = e.slice(e.lastIndexOf(":") + 1);
	try {
		return JSON.parse(function(e) {
			if ("undefined" != typeof Buffer) return Buffer.from(e, "base64").toString("utf8");
			const t = atob(e), r = new Uint8Array(t.length);
			for (let e = 0; e < t.length; e++) r[e] = t.charCodeAt(e);
			return new TextDecoder().decode(r);
		}(t));
	} catch {
		return null;
	}
}
function en(e) {
	return "string" == typeof e && -1 !== e.lastIndexOf(":") ? e.slice(0, e.lastIndexOf(":")) : e;
}
function on({ children: e }) {
	return e;
}
function an(e) {
	return on(e);
}
on._gtt = "derive", an._gtt = "derive";
var sn = createContext(void 0);
function cn(e = "useGTContext() must be used within a <GTProvider>!") {
	const t = useContext(sn);
	if (void 0 === t) throw new Error(e);
	return t;
}
function ln({ children: r, locales: n, options: o = {} }) {
	const i = useContext(sn);
	if (null == r) return null;
	const s = i?.gt || new GT();
	let c = "string" == typeof r ? parseFloat(r) : r;
	return "number" == typeof c && (n || (n ||= [], i?.locale && n.push(i.locale), i?.defaultLocale && n.push(i.defaultLocale)), c = s.formatNum(c, {
		locales: n,
		...o
	})), jsx(Fragment$1, { children: c });
}
function un({ children: r }) {
	return jsx(Fragment$1, { children: r });
}
function hn({ children: r, currency: n = "USD", locales: o, options: i = {} }) {
	const s = useContext(sn);
	if (null == r) return null;
	const c = s?.gt || new GT();
	let l = "string" == typeof r ? parseFloat(r) : r;
	return "number" == typeof l && (o || (o ||= [], s?.locale && o.push(s.locale), s?.defaultLocale && o.push(s.defaultLocale)), l = c.formatCurrency(l, n, {
		locales: o,
		...i
	})), jsx(Fragment$1, { children: l });
}
function fn({ children: r, locales: n, options: o = {} }) {
	const i = useContext(sn);
	if (null == r) return null;
	const s = i?.gt || new GT();
	n || (n = [], i?.locale && n.push(i.locale), i?.defaultLocale && n.push(i.defaultLocale));
	const c = s.formatDateTime(r, {
		locales: n,
		...o
	}).replace(/[\u200F\u202B\u202E]/g, "");
	return jsx(Fragment$1, { children: c });
}
function dn({ date: r, children: n, value: o, unit: i, baseDate: s, locales: c, options: l = {} }) {
	const u = useContext(sn), h = u?.gt || new GT();
	c || (c = [], u?.locale && c.push(u.locale), u?.defaultLocale && c.push(u.defaultLocale));
	const f = r ?? n;
	let d;
	if (void 0 === o || i || console.warn("<RelativeTime>: `value` was provided without `unit`. The `value` prop will be ignored."), void 0 !== o && i) d = h.formatRelativeTime(o, i, {
		locales: c,
		numeric: l.numeric,
		style: l.style,
		localeMatcher: l.localeMatcher
	});
	else {
		if (null == f) return null;
		d = h.formatRelativeTimeFromDate(f, {
			locales: c,
			baseDate: s ?? /* @__PURE__ */ new Date(),
			numeric: l.numeric,
			style: l.style,
			localeMatcher: l.localeMatcher
		});
	}
	return jsx(Fragment$1, { children: d });
}
ln._gtt = "variable-number", un._gtt = "variable-variable", hn._gtt = "variable-currency", fn._gtt = "variable-datetime", dn._gtt = "variable-relative-time";
var pn = ({ variableType: t, variableValue: r, variableOptions: n }) => {
	if ("n" === t) return jsx(ln, {
		options: n,
		children: r
	});
	if ("d" === t) return jsx(fn, {
		options: n,
		children: r
	});
	if ("c" === t) return jsx(hn, {
		options: n,
		children: r
	});
	if ("rt" === t) {
		const t = n;
		if ("number" == typeof r && t?.unit) return jsx(dn, {
			value: r,
			unit: t.unit,
			baseDate: t?.baseDate,
			options: t
		});
		const o = r instanceof Date ? r : "string" == typeof r || "number" == typeof r ? new Date(r) : void 0;
		return jsx(dn, {
			date: o && !isNaN(o.getTime()) ? o : void 0,
			baseDate: t?.baseDate,
			options: t
		});
	}
	return jsx(un, { children: r });
};
var mn = Number.POSITIVE_INFINITY;
var gn = globalThis.__DANGEROUS_USE_REGISTRY__ ?? (globalThis.__DANGEROUS_USE_REGISTRY__ = /* @__PURE__ */ new Map());
function yn(e, t = /* @__PURE__ */ new WeakSet()) {
	const r = typeof e;
	if (null == e || "number" === r || "boolean" === r || "bigint" === r) return String(e);
	if ("string" === r) return JSON.stringify(e);
	if ("symbol" === r) return `:sym(${e.description ?? ""})`;
	if ("function" === r) return `:fn(${e.name || "anon"})`;
	if (Array.isArray(e)) return `[${e.map((e) => yn(e, t)).join(",")}]`;
	if ("object" === r) {
		const r = e;
		if (t.has(r)) return ":circular";
		t.add(r);
		const n = Object.keys(r).sort().map((e) => `${JSON.stringify(e)}:${yn(r[e], t)}`).join(",");
		return t.delete(r), `{${n}}`;
	}
	return String(e);
}
function bn(e) {
	return "string" == typeof e || "number" == typeof e || "symbol" == typeof e ? String(e) : yn(e);
}
function En(e, t, r) {
	const n = gn, o = Date.now(), i = mn, a = bn(e), s = n.get(a);
	if (s && s.expiresAt > o) return s.thenable;
	const c = function(e) {
		const t = e;
		return t.status ?? (t.status = "pending", e.then((e) => {
			t.status = "fulfilled", t.value = e;
		}, (e) => {
			t.status = "rejected", t.reason = e;
		})), t;
	}(t()), l = {
		thenable: c,
		createdAt: o,
		expiresAt: o + i
	};
	if (n.set(a, l), i !== 1 / 0) {
		const e = () => {
			const e = n.get(a);
			e && e.thenable === c && setTimeout(() => {
				const e = n.get(a);
				e && e.thenable === c && n.delete(a);
			}, Math.max(0, i));
		};
		c.then(e, e);
	}
	return c;
}
var vn;
try {
	vn = Function("o", "k", "return o[k]")(t, "use");
} catch {}
var _n = vn;
function Tn({ children: r, id: n, context: o, _hash: i, ...a }) {
	if (!r) return;
	n = n ?? a?.$id, o = o ?? a?.$context;
	const l = a?.$maxChars, { translations: u, translationRequired: h, developmentApiEnabled: f, dialectTranslationRequired: d, registerJsxForTranslation: p, renderSettings: m, locale: g, defaultLocale: y } = cn("<T> used on the client-side outside of <GTProvider>"), b = useMemo(() => sr(r), [r]);
	let E;
	n && (E = u?.[n]), void 0 === E && i && (E = u?.[i]);
	const [v, _] = useMemo(() => {
		if (!h || E) return [void 0, ""];
		const e = Pr(b);
		return [e, kr({
			source: e,
			...o && { context: o },
			...null != l && { maxChars: Math.abs(l) },
			...n && { id: n },
			dataFormat: "JSX"
		})];
	}, [
		b,
		o,
		n,
		l,
		h,
		E
	]);
	void 0 === E && (E = u?.[_]);
	const T = () => or({
		children: b,
		defaultLocale: y,
		renderVariable: pn
	}), w = (e) => Or({
		source: b,
		target: e,
		locales: [g, y],
		renderVariable: pn
	});
	if (!h || u && !E && !f || null === E) return jsx(Fragment$1, { children: T() });
	if (E) return jsx(Suspense, {
		fallback: w(E),
		children: w(E)
	});
	const A = async () => {
		if (!f || !g) return T();
		if (E) return w(E);
		try {
			const e = await p({
				source: v,
				targetLocale: g,
				metadata: {
					id: n,
					hash: _,
					context: o,
					...null != l && { maxChars: l }
				}
			});
			return e ? w(e) : T();
		} catch (e) {
			return console.warn(e), T();
		}
	};
	if (_n) {
		const t = _n(En([
			"getTranslationPromise",
			f,
			JSON.stringify(v),
			g,
			n,
			_,
			o,
			l
		], () => A()));
		return jsx(Suspense, {
			fallback: t,
			children: t
		});
	}
	let H;
	return H = "skeleton" === m.method ? "" : "replace" === m.method || d ? T() : "", jsx(Suspense, {
		fallback: H,
		children: A()
	});
}
Tn._gtt = "translate-client";
function Cn({ gt: e, locale: t, versionId: r, defaultLocale: n, runtimeUrl: o, renderSettings: i, setTranslations: a, environment: c, ...d }) {
	const p = !!e.projectId && !!o && !!e.devApiKey && "development" === c;
	if (!p) {
		const e = (e) => Promise.reject(/* @__PURE__ */ new Error(`${e}() failed because translation is disabled`));
		return {
			developmentApiEnabled: p,
			registerIcuForTranslation: () => e("registerIcuForTranslation"),
			registerJsxForTranslation: () => e("registerJsxForTranslation")
		};
	}
	const m = useRef({
		gt: e,
		locale: t,
		baseMetadata: {
			...d,
			projectId: e.projectId,
			sourceLocale: n
		},
		timeout: i.timeout
	});
	m.current.gt = e, m.current.locale = t, m.current.baseMetadata = {
		...d,
		projectId: e.projectId,
		sourceLocale: n
	}, m.current.timeout = i.timeout;
	const g = useRef(!1), y = useRef(null), [b, E] = useState(0), v = useCallback((e) => {
		a((t) => {
			const r = Object.keys(e);
			if (0 === r.length) return t;
			const n = t ? { ...t } : {};
			let o = !1;
			for (const i of r) {
				const r = e[i], a = t?.[i];
				Object.is(a, r) || (n[i] = r, o = !0);
			}
			return o ? n : t;
		});
	}, [a]), _ = useCallback((e) => {
		y.current = {
			...y.current ?? {},
			...e
		}, g.current && E((e) => e + 1);
	}, []);
	useEffect(() => {
		if (g.current = !0, y.current) {
			const e = y.current;
			y.current = null, v(e);
		}
		return () => {
			g.current = !1;
		};
	}, [v]), useEffect(() => {
		if (!g.current) return;
		const e = y.current;
		e && (y.current = null, v(e));
	}, [b, v]);
	const T = useRef(0), w = useRef(/* @__PURE__ */ new Map()), A = useRef(/* @__PURE__ */ new Map()), H = useCallback(async (e) => {
		if (0 === e.size) return {};
		T.current += 1;
		const { gt: t, locale: r, baseMetadata: n, timeout: o } = m.current, i = Array.from(e.values()), a = {}, s = /* @__PURE__ */ new Map();
		try {
			const e = {};
			for (const t of i) {
				const { source: r, metadata: n } = t;
				e[n.hash] = {
					source: r,
					metadata: {
						...n,
						dataFormat: t.dataFormat
					}
				};
			}
			const c = await t.translateMany(e, {
				...n,
				targetLocale: r
			}, o);
			for (const e of i) {
				const { hash: t, id: r } = e.metadata, n = c[t];
				if (n && n.success) {
					const e = n.translation;
					a[t] = e, s.set(t, e);
				} else if (n && n.error) {
					const e = hr(r, t);
					console.warn(`${e} ${n.error || "An upstream error occurred."}`), a[t] = null, s.set(t, null);
				} else {
					const e = hr(r, t);
					console.warn(`${e} Unknown response format.`, n), a[t] = null, s.set(t, null);
				}
			}
		} catch (e) {
			"AbortError" === e?.name ? console.warn(Er) : console.warn(ur, e), i.forEach((e) => {
				a[e.metadata.hash] = null, s.set(e.metadata.hash, null);
			});
		} finally {
			T.current -= 1, i.forEach((e) => {
				const t = s.get(e.metadata.hash);
				void 0 === t ? (console.warn(`No translation result for ${e.metadata.hash}; resolving as null.`), e.resolve(null)) : e.resolve(t);
			});
		}
		return a;
	}, []), L = useRef(null), P = useRef(async () => {}), S = useCallback((e) => {
		_(e), w.current.size > 0 && (L.current = setTimeout(() => {
			L.current = null, P.current();
		}, 50));
	}, [_]), C = useCallback(() => {
		P.current = async () => {
			if (T.current >= 100) return void (L.current = setTimeout(() => {
				L.current = null, P.current();
			}, 50));
			const e = w.current;
			if (0 === e.size) return;
			const t = Array.from(e.entries()).slice(0, Math.min(25, e.size)), r = new Map(t);
			t.forEach(([t]) => e.delete(t));
			const n = await H(r);
			S(n);
		};
	}, [H, S]), B = useCallback((e = !1) => {
		if (C(), e) return L.current && (clearTimeout(L.current), L.current = null), void P.current();
		L.current || (L.current = setTimeout(() => {
			L.current = null, P.current();
		}, 50));
	}, [C]), I = useCallback((e) => (t) => {
		const r = `${t.metadata.hash}:${t.targetLocale}`, n = A.current.get(r);
		if (n) return n;
		const o = new Promise((n) => {
			const o = "JSX" === e ? {
				dataFormat: "JSX",
				source: t.source,
				metadata: {
					...t.metadata,
					...null != t.metadata.maxChars && { maxChars: Math.abs(t.metadata.maxChars) }
				},
				resolve: n,
				reject: () => {}
			} : {
				dataFormat: "ICU",
				source: t.source,
				metadata: {
					...t.metadata,
					...null != t.metadata.maxChars && { maxChars: Math.abs(t.metadata.maxChars) }
				},
				resolve: n,
				reject: () => {}
			};
			w.current.set(r, o);
			const i = w.current.size >= 25 && T.current < 100;
			B(i);
		}).finally(() => {
			A.current.delete(r);
		});
		return A.current.set(r, o), o;
	}, [B]), O = useMemo(() => I("ICU"), [I]), N = useMemo(() => I("JSX"), [I]);
	return useEffect(() => () => {
		L.current && clearTimeout(L.current);
	}, []), {
		developmentApiEnabled: p,
		registerIcuForTranslation: O,
		registerJsxForTranslation: N
	};
}
function Bn({ gt: e, translations: t, locale: r, defaultLocale: n, translationRequired: o, developmentApiEnabled: i, registerIcuForTranslation: a, environment: s }) {
	function c({ message: t, variables: r, locales: n, fallback: o, id: i, maxChars: a, format: l }) {
		try {
			const i = Zt(o || ""), s = e.formatMessage(Object.keys(i).length ? Qt(t) : t, {
				locales: n,
				variables: {
					...r,
					...i,
					[Ft]: "other"
				},
				dataFormat: l
			});
			return e.formatCutoff(s, { maxChars: a });
		} catch (l) {
			if ("production" === s) console.warn(((e, t) => `${cr} Warning: failed to render string ${t ? `for id: "${t}"` : ""} original message: "${e}"`)(t, i), "Error: ", l);
			else {
				if (!o) throw new Error(`${fr(t, i)} Error: ${l}`);
				console.error(fr(t, i), "Error: ", l);
			}
			if (o) return c({
				message: o,
				locales: n,
				variables: r,
				id: i,
				maxChars: a
			});
			return e.formatCutoff(t, { maxChars: a });
		}
	}
	function l(e, t = {}) {
		if (!e || "string" != typeof e) return null;
		const { $id: r, $context: n, $maxChars: o, $_hash: i, $format: a, ...s } = t;
		return {
			id: r,
			context: n,
			maxChars: o,
			_hash: i,
			variables: s,
			calculateHash: () => kr({
				source: zt(e),
				...n && { context: n },
				...null != o && { maxChars: Math.abs(o) },
				...r && { id: r },
				dataFormat: a || "ICU"
			}),
			renderMessage: (e, t, n) => c({
				message: e,
				locales: t,
				variables: s,
				id: r,
				fallback: n,
				maxChars: o,
				format: a
			})
		};
	}
	function u(e, r, n) {
		let o, i = "";
		return r && (o = t?.[r]), n && void 0 === o && (i = n, o = t?.[n]), void 0 === o && (i = e(), o = t?.[i]), {
			translationEntry: o,
			hash: i
		};
	}
	const h = (e, t = {}, s) => {
		const c = l(e, t);
		if (!c) return "";
		const { id: h, context: f, maxChars: d, _hash: p, calculateHash: m, renderMessage: g } = c;
		if (!o) return g(e, [n]);
		const { translationEntry: y, hash: b } = u(m, h, p);
		return null === y ? g(e, [n]) : y ? g(y, [r, n], e) : void 0 !== s?.[b] ? s?.[b] ? g(s?.[b], [r, n], e) : g(e, [n]) : i ? (a({
			source: zt(e),
			targetLocale: r,
			metadata: {
				...f && { context: f },
				...h && { id: h },
				...null != d && { maxChars: d },
				hash: b || ""
			}
		}), g(e, [n])) : (console.warn(dr(e, h, "gt")), g(e, [n]));
	};
	return {
		_gtFunction: h,
		_mFunction: (e, s = {}, l) => {
			if (!e) return e;
			const u = Qr(e);
			if (!u || !u.$_hash || !u.$_source) return h(e, s, l);
			const { $_hash: f, $_source: d, $context: p, $hash: m, $id: g, $maxChars: y, $format: b, ...E } = u, v = (e, t, r) => c({
				message: e,
				locales: t,
				variables: E,
				fallback: r,
				maxChars: y,
				format: b
			});
			if (!o) return v(d, [n]);
			const _ = t?.[u.$_hash];
			return null === _ ? v(d, [n]) : _ ? v(_, [r, n], d) : i ? void 0 !== l?.[f] ? l?.[f] ? v(l?.[f], [r, n], d) : v(d, [n]) : (a({
				source: zt(d),
				targetLocale: r,
				metadata: {
					...p && { context: p },
					...null != y && { maxChars: y },
					hash: f
				}
			}), v(d, [n])) : (console.warn(dr(d, en(e), "m")), v(d, [n]));
		},
		_filterMessagesForPreload: (e) => {
			const t = [];
			for (const { message: r, ...n } of e) {
				const e = l(r, n);
				if (!e) continue;
				const { id: o, _hash: i, calculateHash: a } = e, { translationEntry: s, hash: c } = u(a, o, i);
				s || t.push({
					message: r,
					...n,
					$_hash: c
				});
			}
			return t;
		},
		_preloadMessages: async (e) => {
			const t = {};
			return await Promise.all(e.map(async ({ message: e, ...n }) => {
				const o = l(e, n);
				if (!o) return;
				const { id: i, context: s, maxChars: c, _hash: h, calculateHash: f } = o, { translationEntry: d, hash: p } = u(f, i, h);
				d && (t[p] = d), t[p] = await a({
					source: zt(e),
					targetLocale: r,
					metadata: {
						...s && { context: s },
						...i && { id: i },
						...null != c && { maxChars: c },
						hash: p
					}
				});
			})), t;
		}
	};
}
function In(e, t, r, n, o, i, a, s, c, u, h) {
	return useCallback((s, l = {}) => {
		if (!t) return "";
		const f = Cr(t, s);
		if (!f) return console.warn(yr(s)), "";
		if (!Sr(f)) return console.warn(((e) => `${cr} Warning: Invalid dictionary entry found for id: "${e}"`)(s)), "";
		const { entry: d, metadata: p } = Br(f);
		if (!d || "string" != typeof d) return "";
		const { $format: m, ...g } = l, y = (t, r, n) => {
			try {
				const o = Zt(n || ""), i = e.formatMessage(Object.keys(o).length ? Qt(t) : t, {
					locales: r,
					variables: {
						...g,
						...o,
						[Ft]: "other"
					},
					dataFormat: m
				});
				return e.formatCutoff(i, { maxChars: p?.$maxChars ?? l.$maxChars });
			} catch (o) {
				if ("production" === h) console.warn(((e) => `${cr} Warning: Invalid ICU string dictionary entry found for id: "${e}"`)(s), "Error: ", o);
				else {
					if (!n) throw new Error(`${mr(s)} Error: ${o}`);
					console.error(mr(s), "Error: ", o);
				}
				if (n) return y(n, r);
				return e.formatCutoff(t, { maxChars: p?.$maxChars ?? l.$maxChars });
			}
		};
		if (!a) return y(d, [i]);
		const b = Cr(r || {}, s);
		if (b && Sr(b)) {
			const { entry: e } = Br(b);
			return y(e, [o, i]);
		}
		let E = n?.[s], v = "";
		const _ = () => kr({
			source: zt(d),
			...p?.$context && { context: p.$context },
			...null != p?.$maxChars && { maxChars: Math.abs(p.$maxChars) },
			id: s,
			dataFormat: "ICU"
		});
		return E || (v = _(), E = n?.[v]), E ? y(E, [o, i], d) : null === E ? y(d, [i]) : c ? (u({
			source: zt(d),
			targetLocale: o,
			metadata: {
				...p?.$context && { context: p.$context },
				...null != p?.$maxChars && { maxChars: p.$maxChars },
				id: s,
				hash: v || _()
			}
		}), y(d, [i])) : y(d, [i]);
	}, [
		t,
		r,
		n,
		o,
		i,
		a,
		c,
		u,
		s
	]);
}
function On({ _locale: e, defaultLocale: t, locales: r, ssr: n, localeCookieName: o, customMapping: i, useDetermineLocale: a, enableI18n: c, reloadOnLocaleUpdate: l }) {
	const u = useMemo(() => Array.from(/* @__PURE__ */ new Set([t, ...c ? r : []])), [
		t,
		r,
		c
	]), [h, f] = a({
		locale: e,
		defaultLocale: t,
		locales: u,
		ssr: n,
		localeCookieName: o,
		customMapping: i,
		enableI18n: c,
		reloadOnLocaleUpdate: l
	}), [d, p] = useMemo(() => {
		const e = requiresTranslation(t, h, u, i), r = e && isSameLanguage(t, h);
		if (!i) {
			const e = [];
			if (u.forEach((t) => {
				isValidLocale(t) || e.push(t);
			}), e.length) throw new Error(((e) => `${cr} Error: Invalid locale codes in your configuration. Specify a list of valid locales or use "customMapping" to define aliases for the following invalid locales: ${e.join(", ")}.`)(e));
		}
		if (i) {
			const e = [];
			if (u.forEach((t) => {
				isValidLocale(t, i) || e.push(t);
			}), e.length) throw new Error(((e) => `${cr} Error: Invalid canonical locale codes in your configuration: ${e.join(", ")}.`)(e));
		}
		return [e, r];
	}, [
		t,
		h,
		u
	]);
	return {
		locale: h,
		setLocale: f,
		locales: u,
		translationRequired: d,
		dialectTranslationRequired: p
	};
}
function Nn({ devApiKey: e, projectId: t, runtimeUrl: r, loadTranslationsType: n, cacheUrl: o, locales: i, environment: a }) {
	useEffect(() => {
		if ("production" === a && e) throw new Error(lr);
		if ("custom" === n || !o && !r || t || "development" !== a || console.warn(gr), t && r && "custom" !== n && !e && "development" === a && console.warn(br), r === B$1 || o === C$1 && "default" === n) {
			const e = i.filter((e) => !getSupportedLocale(e));
			e.length && console.warn(((e) => `${cr} Warning: The following locales are currently unsupported by our service: ${e.map((e) => {
				const { name: t } = getLocaleProperties(e);
				return `${e} (${t})`;
			}).join(", ")}`)(e));
		}
	}, [
		e,
		n,
		o,
		r,
		t,
		i
	]);
}
async function Rn(e, t) {
	const r = Array.from(/* @__PURE__ */ new Set([e, getLocaleProperties(e).languageCode]));
	for (const e of r) try {
		const r = await t(e);
		if (r) return r;
	} catch {}
	console.warn(vr);
}
function Mn({ _translations: e, translationRequired: t, loadTranslationsType: r, loadTranslations: n, locale: o, cacheUrl: i, projectId: a, _versionId: s, gt: c }) {
	const [l, d] = useState(e || (t && "disabled" !== r ? null : {})), p = useRef(!1);
	return useEffect(() => {
		p.current ? d(t && "disabled" !== r ? null : {}) : p.current = !0;
	}, [o, r]), useEffect(() => {
		if (l || !t || "disabled" === r) return;
		let e = !0;
		return (async () => {
			let t;
			switch (r) {
				case "custom":
					if (n) try {
						t = await n(o);
					} catch (e) {
						console.error(((e = "") => `${cr} Error: Failed to fetch locally stored translations. If using a custom loadTranslations(${e}), make sure it is correctly implemented.`)(o), e);
					}
					break;
				case "default": try {
					t = await async function({ cacheUrl: e, projectId: t, locale: r, versionId: n, gt: o }) {
						if (!t || !e || !r) return {};
						r = o.resolveCanonicalLocale(r);
						return await (await fetch(n ? `${e}/${t}/${r}/${n}` : `${e}/${t}/${r}`)).json();
					}({
						cacheUrl: i || C$1,
						projectId: a,
						locale: o,
						versionId: s,
						gt: c
					});
				} catch (e) {
					console.error(e);
				}
			}
			t || (t = {}), e && d(t);
		})(), () => {
			e = !1;
		};
	}, [
		l,
		t,
		r,
		i,
		a,
		o,
		s,
		c
	]), {
		translations: l,
		setTranslations: d
	};
}
function $n(e, t, r, n, o, i, a, s, c, u, h, f) {
	return useCallback((a, c, l = {}) => {
		if ("" === c) throw new Error(`${cr} Error: You cannot provide an empty id to t.obj()`);
		const d = xr({
			dictionary: e,
			id: c
		});
		if (!d) return console.warn(yr(c)), {};
		if (Rr(d)) return f(a, l);
		if (!s) return Fr(d);
		const p = function({ dictionary: e, id: t, sourceDictionary: r }) {
			if ("" === t) return e;
			let n = e;
			const o = r, i = t.split(".");
			for (const e of i) void 0 === ir(n, e) && (Array.isArray(ir(o, e)) ? ar(n, e, []) : ar(n, e, {})), n = ir(n, e);
			return n;
		}({
			dictionary: t,
			id: c,
			sourceDictionary: t
		}), { dictionary: m, updateDictionary: g } = Xr(structuredClone(d), c), y = Wr(m, p, c), { dictionary: b, updateDictionary: E } = function(e, t, r, n, o = "") {
			let i = !1;
			const a = o ? o.split(".") : [];
			return n.forEach(({ metadata: n }) => {
				const { $_hash: o, $id: s } = n, c = a.length > 0 ? s.split(".").slice(a.length).join(".") : s, l = Cr(t, c);
				let u;
				Rr(l) && (u = Br(l).entry);
				const h = r[o] || u;
				h && (Dr(h, t, c, e), i = !0);
			}), {
				dictionary: t,
				updateDictionary: i
			};
		}(m, structuredClone(p), o || {}, y, c), v = function(e, t, r, n = "") {
			const o = n ? n.split(".") : [];
			return r.forEach(({ source: r, metadata: n }) => {
				const { $id: i } = n, a = o.length > 0 ? i.split(".").slice(o.length).join(".") : i, s = Cr(t, a);
				let c;
				Rr(s) && (c = Br(s).entry), Dr(c || r, t, a, e);
			}), t;
		}(m, structuredClone(b), y, c);
		return u && Promise.allSettled(y.map(async (e) => {
			const { source: t, metadata: r } = e, n = r?.$id;
			return [n, await h({
				source: zt(t),
				targetLocale: i,
				metadata: {
					...r?.$context && { context: r.$context },
					...null != r?.$maxChars && { maxChars: r.$maxChars },
					id: n,
					hash: r?.$_hash
				}
			})];
		})).then((t) => {
			const r = t.filter((e) => "fulfilled" === e.status).map((e) => e.value);
			r.length > 0 && n((t) => function(e, t, r) {
				return t.forEach(([t, n]) => {
					Dr(n, e, t, r);
				}), e;
			}(t, r, e));
		}), g && setTimeout(() => {
			r((e) => Yr(e, m, c));
		}, 0), E && setTimeout(() => {
			n((e) => Ur(e, b));
		}, 0), structuredClone(v);
	}, [
		e,
		o,
		i,
		a,
		s,
		c,
		u,
		h,
		t
	]);
}
function Un({ enableI18n: e }) {
	const [t] = useState(e);
	return { enableI18n: t };
}
function xn() {
	throw _r("isSSREnabled");
}
function jn({}) {
	throw _r("useDetermineLocale");
}
function Dn({}) {
	throw _r("useRegionState");
}
function Fn({ children: t, config: r, environment: n = "production", projectId: o = r?.projectId || "", devApiKey: i = r?.devApiKey || "", _versionId: a = r?._versionId, dictionary: l = r?.dictionary || {}, locales: u = r?.locales || [], defaultLocale: d = r?.defaultLocale || A$1, cacheUrl: m = r?.cacheUrl || C$1, runtimeUrl: g = r?.runtimeUrl || B$1, renderSettings: y = r?.renderSettings || Nr(n), ssr: E = r?.ssr || xn(), localeCookieName: v = r?.localeCookieName || "generaltranslation.locale", locale: _ = "", region: T, loadDictionary: w, loadTranslations: H, fallback: L, translations: P = null, customMapping: S = r?.customMapping, enableI18n: I = void 0 === r?.enableI18n || r.enableI18n, enableI18nLoaded: O, reloadOnLocaleUpdate: N, useEnableI18n: R = Un, readAuthFromEnv: M = Tr, useDetermineLocale: $ = jn, useRegionState: U = Dn, ...x }) {
	_ && (_ = resolveAliasLocale(_, S));
	const { projectId: j, devApiKey: D } = M({
		projectId: o,
		devApiKey: i
	}), { enableI18n: F } = R({
		enableI18n: I,
		enableI18nLoaded: O,
		enableI18nCookieName: "generaltranslation.enable-i18n",
		ssr: E
	}), { locale: G, setLocale: k, locales: V, translationRequired: K, dialectTranslationRequired: X } = On({
		_locale: _,
		defaultLocale: d,
		locales: u,
		ssr: E,
		localeCookieName: v,
		customMapping: S,
		useDetermineLocale: $,
		enableI18n: F,
		reloadOnLocaleUpdate: N
	}), { region: Y, setRegion: W } = U({
		_region: T,
		ssr: E,
		regionCookieName: "generaltranslation.region"
	}), J = useMemo(() => new GT({
		devApiKey: D,
		sourceLocale: d,
		targetLocale: G,
		projectId: j,
		baseUrl: g || void 0,
		customMapping: S
	}), [
		D,
		d,
		j,
		g,
		S
	]), q = useMemo(() => (H ? "custom" : m && j && "default") || "disabled", [
		H,
		m,
		j
	]), { dictionary: z, setDictionary: Z, dictionaryTranslations: Q, setDictionaryTranslations: ee } = function({ _dictionary: e, _dictionaryTranslations: t = {}, loadDictionary: r, locale: n, defaultLocale: o }) {
		const [i, a] = useState(e), [s, c] = useState(t);
		return useEffect(() => {
			if (!r) return;
			let e = !0;
			return (async () => {
				const t = await Rn(o, r) || {}, i = await Rn(n, r) || {};
				e && a(t || {}), e && c(i || {});
			})(), () => {
				e = !1;
			};
		}, [
			r,
			n,
			o
		]), {
			dictionary: i,
			setDictionary: a,
			dictionaryTranslations: s,
			setDictionaryTranslations: c
		};
	}({
		_dictionary: l,
		_dictionaryTranslations: {},
		loadDictionary: w,
		locale: G,
		defaultLocale: d
	});
	Nn({
		devApiKey: D,
		projectId: j,
		runtimeUrl: g,
		loadTranslationsType: q,
		cacheUrl: m,
		locales: u,
		environment: n
	});
	const { translations: te, setTranslations: re } = Mn({
		_translations: P,
		translationRequired: K,
		loadTranslationsType: q,
		loadTranslations: H,
		locale: G,
		cacheUrl: m,
		projectId: j,
		_versionId: a,
		gt: J
	}), { registerIcuForTranslation: ne, registerJsxForTranslation: oe, developmentApiEnabled: ie } = Cn({
		gt: J,
		locale: G,
		versionId: a,
		defaultLocale: d,
		runtimeUrl: g,
		renderSettings: y,
		setTranslations: re,
		environment: n,
		...x
	}), { _gtFunction: ae, _mFunction: se, _filterMessagesForPreload: ce, _preloadMessages: le } = Bn({
		gt: J,
		translations: te,
		locale: G,
		defaultLocale: d,
		translationRequired: K,
		developmentApiEnabled: ie,
		registerIcuForTranslation: ne,
		environment: n
	}), ue = In(J, z, Q, te, G, d, K, X, ie, ne, n), he = $n(z || {}, Q || {}, Z, ee, te, G, d, K, X, ie, ne, ue), fe = !(K && !te || !G);
	return jsx(sn.Provider, {
		value: {
			gt: J,
			registerIcuForTranslation: ne,
			registerJsxForTranslation: oe,
			_gtFunction: ae,
			_mFunction: se,
			_filterMessagesForPreload: ce,
			_preloadMessages: le,
			_dictionaryFunction: ue,
			_dictionaryObjFunction: he,
			developmentApiEnabled: ie,
			locale: G,
			locales: V,
			setLocale: k,
			defaultLocale: d,
			region: Y,
			setRegion: W,
			translations: te,
			translationRequired: K,
			dialectTranslationRequired: X,
			projectId: j,
			renderSettings: y,
			_versionId: a
		},
		children: jsx(Suspense, {
			fallback: L,
			children: fe ? t : L
		})
	});
}
function Gn({ children: r, n, locales: o, ...i }) {
	const s = useContext(sn);
	let c;
	s && (o ||= s.locale, c ||= s.defaultLocale);
	const l = [...o ? [o] : [], c || A$1];
	if ("number" != typeof n) throw new Error(((e) => `${cr} Error: <Plural> component with children "${e}" requires "n" option.`)(r));
	return jsx(Fragment$1, { children: rr(n, l, i) || r });
}
function kn({ children: r, branch: n, ...o }) {
	n = n?.toString(), "string" == typeof n && n.startsWith("data-") && (n = void 0);
	const i = n && void 0 !== o[n] ? o[n] : r;
	return jsx(Fragment$1, { children: i });
}
Gn._gtt = "plural", kn._gtt = "branch";
function f({ projectId: e, devApiKey: t }) {
	try {
		return {
			projectId: e || "",
			devApiKey: t || void 0
		};
	} catch (e) {}
	try {
		return {
			projectId: e || process.env.GT_PROJECT_ID || process.env.REACT_APP_GT_PROJECT_ID || process.env.NEXT_PUBLIC_GT_PROJECT_ID || process.env.GATSBY_GT_PROJECT_ID || "",
			devApiKey: t || process.env.GT_DEV_API_KEY || process.env.GT_API_KEY || process.env.REACT_APP_GT_DEV_API_KEY || process.env.REACT_APP_GT_API_KEY || process.env.NEXT_PUBLIC_GT_DEV_API_KEY || process.env.NEXT_PUBLIC_GT_API_KEY || process.env.GATSBY_GT_DEV_API_KEY || process.env.GATSBY_GT_API_KEY
		};
	} catch (e) {
		console.error(e);
	}
	return {
		projectId: "",
		devApiKey: ""
	};
}
function _$1({ _region: e, regionCookieName: t }) {
	var n;
	const r = "undefined" != typeof document ? null === (n = document.cookie.split("; ").find((e) => e.startsWith(`${t}=`))) || void 0 === n ? void 0 : n.split("=")[1] : void 0, o = e || r;
	return r && r !== o && "undefined" != typeof document && (document.cookie = `${t}=${o};path=/`), o;
}
function p$1({ _region: e, ssr: t, regionCookieName: n }) {
	const [r, o] = useState(t ? void 0 : _$1({
		_region: e,
		regionCookieName: n
	}));
	return useEffect(() => {
		o(_$1({
			_region: e,
			regionCookieName: n
		}));
	}, [e, n]), {
		region: r,
		setRegion: (e) => {
			o(e), "undefined" != typeof document && (document.cookie = `${n}=${e || ""};path=/`);
		}
	};
}
function E$1({ enableI18n: e, enableI18nCookieName: t, enableI18nLoaded: n, ssr: r }) {
	const o = void 0 !== n, u = useRef(!0), [s, l] = useState(function({ _enableI18n: e, asyncEnabled: t, enableI18nCookieName: n, ssr: r }) {
		if (!t) return e;
		if (r) return e;
		const o = d$1(n);
		if (null !== o) return o;
		return e;
	}({
		_enableI18n: e,
		asyncEnabled: o,
		enableI18nCookieName: t,
		ssr: r
	}));
	return useEffect(() => {
		if (r && o && u.current) {
			u.current = !1;
			const e = d$1(t);
			null !== e && e !== s && l(e);
			return;
		}
		u.current = !1;
	}, [
		r,
		o,
		t,
		s
	]), useEffect(() => {
		s !== e && (o ? n && (function({ enableI18n: e, enableI18nCookieName: t }) {
			if ("undefined" == typeof document) return;
			document.cookie = `${t}=${e ? "true" : "false"};path=/;`;
		}({
			enableI18n: e,
			enableI18nCookieName: t
		}), l(e)) : l(e));
	}, [
		e,
		s,
		o,
		n,
		t
	]), { enableI18n: s };
}
function d$1(e) {
	var t;
	if ("undefined" == typeof document) return null;
	const n = null === (t = document.cookie.split("; ").find((t) => t.startsWith(`${e}=`))) || void 0 === t ? void 0 : t.split("=")[1];
	return "true" === n || "false" !== n && null;
}
var y$1 = function(e, t) {
	return y$1 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	}, y$1(e, t);
};
function m$1(e, t) {
	if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
	function n() {
		this.constructor = e;
	}
	y$1(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var h$1 = function() {
	return h$1 = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
		return e;
	}, h$1.apply(this, arguments);
};
function v$1(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
		var o = 0;
		for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
	}
	return n;
}
function b(e, t, n, r) {
	var o, a = arguments.length, i = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
	if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, r);
	else for (var c = e.length - 1; c >= 0; c--) (o = e[c]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, n, i) : o(t, n)) || i);
	return a > 3 && i && Object.defineProperty(t, n, i), i;
}
function g(e, t) {
	return function(n, r) {
		t(n, r, e);
	};
}
function A(e, t, n, r, o, a) {
	function i(e) {
		if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
		return e;
	}
	for (var c, u = r.kind, s = "getter" === u ? "get" : "setter" === u ? "set" : "value", l = !t && e ? r.static ? e : e.prototype : null, f = t || (l ? Object.getOwnPropertyDescriptor(l, r.name) : {}), _ = !1, p = n.length - 1; p >= 0; p--) {
		var E = {};
		for (var d in r) E[d] = "access" === d ? {} : r[d];
		for (var d in r.access) E.access[d] = r.access[d];
		E.addInitializer = function(e) {
			if (_) throw new TypeError("Cannot add initializers after decoration has completed");
			a.push(i(e || null));
		};
		var y = (0, n[p])("accessor" === u ? {
			get: f.get,
			set: f.set
		} : f[s], E);
		if ("accessor" === u) {
			if (void 0 === y) continue;
			if (null === y || "object" != typeof y) throw new TypeError("Object expected");
			(c = i(y.get)) && (f.get = c), (c = i(y.set)) && (f.set = c), (c = i(y.init)) && o.unshift(c);
		} else (c = i(y)) && ("field" === u ? o.unshift(c) : f[s] = c);
	}
	l && Object.defineProperty(l, r.name, f), _ = !0;
}
function L$1(e, t, n) {
	for (var r = arguments.length > 2, o = 0; o < t.length; o++) n = r ? t[o].call(e, n) : t[o].call(e);
	return r ? n : void 0;
}
function O$1(e) {
	return "symbol" == typeof e ? e : "".concat(e);
}
function P(e, t, n) {
	return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
		configurable: !0,
		value: n ? "".concat(n, " ", t) : t
	});
}
function N$1(e, t) {
	if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}
function S$1(e, t, n, r) {
	return new (n || (n = Promise))(function(o, a) {
		function i(e) {
			try {
				u(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			try {
				u(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function u(e) {
			var t;
			e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
				e(t);
			})).then(i, c);
		}
		u((r = r.apply(e, t || [])).next());
	});
}
function w$1(e, t) {
	var n, r, o, a = {
		label: 0,
		sent: function() {
			if (1 & o[0]) throw o[1];
			return o[1];
		},
		trys: [],
		ops: []
	}, i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
	return i.next = c(0), i.throw = c(1), i.return = c(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
		return this;
	}), i;
	function c(c) {
		return function(u) {
			return function(c) {
				if (n) throw new TypeError("Generator is already executing.");
				for (; i && (i = 0, c[0] && (a = 0)), a;) try {
					if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
					switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
						case 0:
						case 1:
							o = c;
							break;
						case 4: return a.label++, {
							value: c[1],
							done: !1
						};
						case 5:
							a.label++, r = c[1], c = [0];
							continue;
						case 7:
							c = a.ops.pop(), a.trys.pop();
							continue;
						default:
							if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
								a = 0;
								continue;
							}
							if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
								a.label = c[1];
								break;
							}
							if (6 === c[0] && a.label < o[1]) {
								a.label = o[1], o = c;
								break;
							}
							if (o && a.label < o[2]) {
								a.label = o[2], a.ops.push(c);
								break;
							}
							o[2] && a.ops.pop(), a.trys.pop();
							continue;
					}
					c = t.call(e, a);
				} catch (e) {
					c = [6, e], r = 0;
				} finally {
					n = o = 0;
				}
				if (5 & c[0]) throw c[1];
				return {
					value: c[0] ? c[1] : void 0,
					done: !0
				};
			}([c, u]);
		};
	}
}
var R = Object.create ? function(e, t, n, r) {
	void 0 === r && (r = n);
	var o = Object.getOwnPropertyDescriptor(t, n);
	o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
		enumerable: !0,
		get: function() {
			return t[n];
		}
	}), Object.defineProperty(e, r, o);
} : function(e, t, n, r) {
	void 0 === r && (r = n), e[r] = t[n];
};
function I(e, t) {
	for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || R(t, e, n);
}
function C(e) {
	var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && "number" == typeof e.length) return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function U(e, t) {
	var n = "function" == typeof Symbol && e[Symbol.iterator];
	if (!n) return e;
	var r, o, a = n.call(e), i = [];
	try {
		for (; (void 0 === t || t-- > 0) && !(r = a.next()).done;) i.push(r.value);
	} catch (e) {
		o = { error: e };
	} finally {
		try {
			r && !r.done && (n = a.return) && n.call(a);
		} finally {
			if (o) throw o.error;
		}
	}
	return i;
}
function M() {
	for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(U(arguments[t]));
	return e;
}
function j$1() {
	for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
	var r = Array(e), o = 0;
	for (t = 0; t < n; t++) for (var a = arguments[t], i = 0, c = a.length; i < c; i++, o++) r[o] = a[i];
	return r;
}
function G(e, t, n) {
	if (n || 2 === arguments.length) for (var r, o = 0, a = t.length; o < a; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
	return e.concat(r || Array.prototype.slice.call(t));
}
function D(e) {
	return this instanceof D ? (this.v = e, this) : new D(e);
}
function k$1(e, t, n) {
	if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	var r, o = n.apply(e, t || []), a = [];
	return r = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), i("next"), i("throw"), i("return", function(e) {
		return function(t) {
			return Promise.resolve(t).then(e, s);
		};
	}), r[Symbol.asyncIterator] = function() {
		return this;
	}, r;
	function i(e, t) {
		o[e] && (r[e] = function(t) {
			return new Promise(function(n, r) {
				a.push([
					e,
					t,
					n,
					r
				]) > 1 || c(e, t);
			});
		}, t && (r[e] = t(r[e])));
	}
	function c(e, t) {
		try {
			(n = o[e](t)).value instanceof D ? Promise.resolve(n.value.v).then(u, s) : l(a[0][2], n);
		} catch (e) {
			l(a[0][3], e);
		}
		var n;
	}
	function u(e) {
		c("next", e);
	}
	function s(e) {
		c("throw", e);
	}
	function l(e, t) {
		e(t), a.shift(), a.length && c(a[0][0], a[0][1]);
	}
}
function x(e) {
	var t = {}, n;
	return r("next"), r("throw", function(e) {
		throw e;
	}), r("return"), t[Symbol.iterator] = function() {
		return this;
	}, t;
	function r(r, o) {
		t[r] = e[r] ? function(t) {
			return (n = !n) ? {
				value: D(e[r](t)),
				done: !1
			} : o ? o(t) : t;
		} : o;
	}
}
function V(e) {
	if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	var t, n = e[Symbol.asyncIterator];
	return n ? n.call(e) : (e = C(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
		return this;
	}, t);
	function r(n) {
		t[n] = e[n] && function(t) {
			return new Promise(function(r, o) {
				(function(e, t, n, r) {
					Promise.resolve(r).then(function(t) {
						e({
							value: t,
							done: n
						});
					}, t);
				})(r, o, (t = e[n](t)).done, t.value);
			});
		};
	}
}
function F(e, t) {
	return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
var X = Object.create ? function(e, t) {
	Object.defineProperty(e, "default", {
		enumerable: !0,
		value: t
	});
} : function(e, t) {
	e.default = t;
};
var Y = function(e) {
	return Y = Object.getOwnPropertyNames || function(e) {
		var t = [];
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
		return t;
	}, Y(e);
};
function K(e) {
	if (e && e.__esModule) return e;
	var t = {};
	if (null != e) for (var n = Y(e), r = 0; r < n.length; r++) "default" !== n[r] && R(t, e, n[r]);
	return X(t, e), t;
}
function B(e) {
	return e && e.__esModule ? e : { default: e };
}
function $(e, t, n, r) {
	if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
	if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
	return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
}
function H(e, t, n, r, o) {
	if ("m" === r) throw new TypeError("Private method is not writable");
	if ("a" === r && !o) throw new TypeError("Private accessor was defined without a setter");
	if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
	return "a" === r ? o.call(e, n) : o ? o.value = n : t.set(e, n), n;
}
function z(e, t) {
	if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
	return "function" == typeof e ? t === e : e.has(t);
}
function W(e, t, n) {
	if (null != t) {
		if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
		var r, o;
		if (n) {
			if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
			r = t[Symbol.asyncDispose];
		}
		if (void 0 === r) {
			if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
			r = t[Symbol.dispose], n && (o = r);
		}
		if ("function" != typeof r) throw new TypeError("Object not disposable.");
		o && (r = function() {
			try {
				o.call(this);
			} catch (e) {
				return Promise.reject(e);
			}
		}), e.stack.push({
			value: t,
			dispose: r,
			async: n
		});
	} else n && e.stack.push({ async: !0 });
	return t;
}
var J = "function" == typeof SuppressedError ? SuppressedError : function(e, t, n) {
	var r = new Error(n);
	return r.name = "SuppressedError", r.error = e, r.suppressed = t, r;
};
function Q(e) {
	function t(t) {
		e.error = e.hasError ? new J(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
	}
	var n, r = 0;
	return function o() {
		for (; n = e.stack.pop();) try {
			if (!n.async && 1 === r) return r = 0, e.stack.push(n), Promise.resolve().then(o);
			if (n.dispose) {
				var a = n.dispose.call(n.value);
				if (n.async) return r |= 2, Promise.resolve(a).then(o, function(e) {
					return t(e), o();
				});
			} else r |= 1;
		} catch (e) {
			t(e);
		}
		if (1 === r) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
		if (e.hasError) throw e.error;
	}();
}
function q(e, t) {
	return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, n, r, o, a) {
		return n ? t ? ".jsx" : ".js" : !r || o && a ? r + o + "." + a.toLowerCase() + "js" : e;
	}) : e;
}
var Z;
var ee;
var te;
var ne;
var oe = Object.freeze({
	__proto__: null,
	__addDisposableResource: W,
	get __assign() {
		return h$1;
	},
	__asyncDelegator: x,
	__asyncGenerator: k$1,
	__asyncValues: V,
	__await: D,
	__awaiter: S$1,
	__classPrivateFieldGet: $,
	__classPrivateFieldIn: z,
	__classPrivateFieldSet: H,
	__createBinding: R,
	__decorate: b,
	__disposeResources: Q,
	__esDecorate: A,
	__exportStar: I,
	__extends: m$1,
	__generator: w$1,
	__importDefault: B,
	__importStar: K,
	__makeTemplateObject: F,
	__metadata: N$1,
	__param: g,
	__propKey: O$1,
	__read: U,
	__rest: v$1,
	__rewriteRelativeImportExtension: q,
	__runInitializers: L$1,
	__setFunctionName: P,
	__spread: M,
	__spreadArray: G,
	__spreadArrays: j$1,
	__values: C,
	default: {
		__extends: m$1,
		__assign: h$1,
		__rest: v$1,
		__decorate: b,
		__param: g,
		__esDecorate: A,
		__runInitializers: L$1,
		__propKey: O$1,
		__setFunctionName: P,
		__metadata: N$1,
		__awaiter: S$1,
		__generator: w$1,
		__createBinding: R,
		__exportStar: I,
		__values: C,
		__read: U,
		__spread: M,
		__spreadArrays: j$1,
		__spreadArray: G,
		__await: D,
		__asyncGenerator: k$1,
		__asyncDelegator: x,
		__asyncValues: V,
		__makeTemplateObject: F,
		__importStar: K,
		__importDefault: B,
		__classPrivateFieldGet: $,
		__classPrivateFieldSet: H,
		__classPrivateFieldIn: z,
		__addDisposableResource: W,
		__disposeResources: Q,
		__rewriteRelativeImportExtension: q
	}
});
(function(e) {
	e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Z || (Z = {})), function(e) {
	e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
}(ee || (ee = {})), function(e) {
	e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
}(te || (te = {}));
try {
	null === (ne = new RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === ne || ne[0];
} catch (e) {}
function ae(e) {
	if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
	var t = e.default;
	if ("function" == typeof t) {
		var n = function e() {
			var n = !1;
			try {
				n = this instanceof e;
			} catch {}
			return n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
		};
		n.prototype = t.prototype;
	} else n = {};
	return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(t) {
		var r = Object.getOwnPropertyDescriptor(e, t);
		Object.defineProperty(n, t, r.get ? r : {
			enumerable: !0,
			get: function() {
				return e[t];
			}
		});
	}), n;
}
var ie;
var ce = {};
function ue() {
	if (ie) return ce;
	var e, t;
	return ie = 1, Object.defineProperty(ce, "__esModule", { value: !0 }), ce.SKELETON_TYPE = ce.TYPE = void 0, ce.isLiteralElement = function(t) {
		return t.type === e.literal;
	}, ce.isArgumentElement = function(t) {
		return t.type === e.argument;
	}, ce.isNumberElement = function(t) {
		return t.type === e.number;
	}, ce.isDateElement = function(t) {
		return t.type === e.date;
	}, ce.isTimeElement = function(t) {
		return t.type === e.time;
	}, ce.isSelectElement = function(t) {
		return t.type === e.select;
	}, ce.isPluralElement = function(t) {
		return t.type === e.plural;
	}, ce.isPoundElement = function(t) {
		return t.type === e.pound;
	}, ce.isTagElement = function(t) {
		return t.type === e.tag;
	}, ce.isNumberSkeleton = function(e) {
		return !(!e || "object" != typeof e || e.type !== t.number);
	}, ce.isDateTimeSkeleton = function(e) {
		return !(!e || "object" != typeof e || e.type !== t.dateTime);
	}, ce.createLiteralElement = function(t) {
		return {
			type: e.literal,
			value: t
		};
	}, ce.createNumberElement = function(t, n) {
		return {
			type: e.number,
			value: t,
			style: n
		};
	}, function(e) {
		e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
	}(e || (ce.TYPE = e = {})), function(e) {
		e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
	}(t || (ce.SKELETON_TYPE = t = {})), ce;
}
ue();
var se;
var le = {};
var fe = ae(oe);
(function() {
	if (se) return le;
	se = 1, Object.defineProperty(le, "__esModule", { value: !0 }), le.printAST = n, le.doPrintAST = r, le.printDateTimeSkeleton = i;
	var e = fe, t = ue();
	function n(e) {
		return r(e, !1);
	}
	function r(c, u) {
		return c.map(function(s, l) {
			return (0, t.isLiteralElement)(s) ? function(e, t, n, r) {
				var i = e.value;
				n || "'" !== i[0] || (i = "''".concat(i.slice(1)));
				r || "'" !== i[i.length - 1] || (i = "".concat(i.slice(0, i.length - 1), "''"));
				return i = o(i), t ? i.replace("#", "'#'") : i;
			}(s, u, 0 === l, l === c.length - 1) : (0, t.isArgumentElement)(s) ? function(e) {
				var t = e.value;
				return "{".concat(t, "}");
			}(s) : (0, t.isDateElement)(s) || (0, t.isTimeElement)(s) || (0, t.isNumberElement)(s) ? function(e) {
				return "{".concat(e.value, ", ").concat(t.TYPE[e.type]).concat(e.style ? ", ".concat((n = e.style, "string" == typeof n ? o(n) : n.type === t.SKELETON_TYPE.dateTime ? "::".concat(i(n)) : "::".concat(n.tokens.map(a).join(" ")))) : "", "}");
				var n;
			}(s) : (0, t.isPluralElement)(s) ? function(t) {
				var n = "cardinal" === t.pluralType ? "plural" : "selectordinal", o = [
					t.value,
					n,
					e.__spreadArray([t.offset ? "offset:".concat(t.offset) : ""], Object.keys(t.options).map(function(e) {
						return "".concat(e, "{").concat(r(t.options[e].value, !0), "}");
					}), !0).filter(Boolean).join(" ")
				].join(",");
				return "{".concat(o, "}");
			}(s) : (0, t.isSelectElement)(s) ? function(e) {
				var t = [
					e.value,
					"select",
					Object.keys(e.options).map(function(t) {
						return "".concat(t, "{").concat(r(e.options[t].value, !1), "}");
					}).join(" ")
				].join(",");
				return "{".concat(t, "}");
			}(s) : (0, t.isPoundElement)(s) ? "#" : (0, t.isTagElement)(s) ? function(e) {
				return "<".concat(e.value, ">").concat(n(e.children), "</").concat(e.value, ">");
			}(s) : void 0;
		}).join("");
	}
	function o(e) {
		return e.replace(/([{}](?:[\s\S]*[{}])?)/, "'$1'");
	}
	function a(e) {
		var t = e.stem, n = e.options;
		return 0 === n.length ? t : "".concat(t).concat(n.map(function(e) {
			return "/".concat(e);
		}).join(""));
	}
	function i(e) {
		return e.pattern;
	}
})();
function _e(e, t, n = "") {
	const r = (o = e) instanceof Uint8Array || ArrayBuffer.isView(o) && "Uint8Array" === o.constructor.name && "BYTES_PER_ELEMENT" in o && 1 === o.BYTES_PER_ELEMENT;
	var o;
	const a = e?.length;
	if (!r || void 0 !== t) {
		const t = (n && `"${n}" `) + "expected Uint8Array, got " + (r ? `length=${a}` : "type=" + typeof e);
		if (!r) throw new TypeError(t);
		throw new RangeError(t);
	}
	return e;
}
function pe(e, t = !0) {
	if (e.destroyed) throw new Error("Hash instance has been destroyed");
	if (t && e.finished) throw new Error("Hash#digest() has already been called");
}
function Ee(...e) {
	for (let t = 0; t < e.length; t++) e[t].fill(0);
}
function de(e) {
	return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function ye(e, t) {
	return e << 32 - t | e >>> t;
}
"function" == typeof Uint8Array.from([]).toHex && Uint8Array.fromHex, Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function Te(e, t, n) {
	return e & t ^ ~e & n;
}
function me(e, t, n) {
	return e & t ^ e & n ^ t & n;
}
var he = class {
	blockLen;
	outputLen;
	canXOF = !1;
	padOffset;
	isLE;
	buffer;
	view;
	finished = !1;
	length = 0;
	pos = 0;
	destroyed = !1;
	constructor(e, t, n, r) {
		this.blockLen = e, this.outputLen = t, this.padOffset = n, this.isLE = r, this.buffer = new Uint8Array(e), this.view = de(this.buffer);
	}
	update(e) {
		pe(this), _e(e);
		const { view: t, buffer: n, blockLen: r } = this, o = e.length;
		for (let a = 0; a < o;) {
			const i = Math.min(r - this.pos, o - a);
			if (i === r) {
				const t = de(e);
				for (; r <= o - a; a += r) this.process(t, a);
				continue;
			}
			n.set(e.subarray(a, a + i), this.pos), this.pos += i, a += i, this.pos === r && (this.process(t, 0), this.pos = 0);
		}
		return this.length += e.length, this.roundClean(), this;
	}
	digestInto(e) {
		pe(this), function(e, t) {
			_e(e, void 0, "digestInto() output");
			const n = t.outputLen;
			if (e.length < n) throw new RangeError("\"digestInto() output\" expected to be of length >=" + n);
		}(e, this), this.finished = !0;
		const { buffer: t, view: n, blockLen: r, isLE: o } = this;
		let { pos: a } = this;
		t[a++] = 128, Ee(this.buffer.subarray(a)), this.padOffset > r - a && (this.process(n, 0), a = 0);
		for (let e = a; e < r; e++) t[e] = 0;
		n.setBigUint64(r - 8, BigInt(8 * this.length), o), this.process(n, 0);
		const i = de(e), c = this.outputLen;
		if (c % 4) throw new Error("_sha2: outputLen must be aligned to 32bit");
		const u = c / 4, s = this.get();
		if (u > s.length) throw new Error("_sha2: outputLen bigger than state");
		for (let e = 0; e < u; e++) i.setUint32(4 * e, s[e], o);
	}
	digest() {
		const { buffer: e, outputLen: t } = this;
		this.digestInto(e);
		const n = e.slice(0, t);
		return this.destroy(), n;
	}
	_cloneInto(e) {
		e ||= new this.constructor(), e.set(...this.get());
		const { blockLen: t, buffer: n, length: r, finished: o, destroyed: a, pos: i } = this;
		return e.destroyed = a, e.finished = o, e.length = r, e.pos = i, r % t && e.buffer.set(n), e;
	}
	clone() {
		return this._cloneInto();
	}
};
var ve = Uint32Array.from([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]);
var be = Uint32Array.from([
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
var ge = /* @__PURE__ */ new Uint32Array(64);
var Ae = class extends he {
	constructor(e) {
		super(64, e, 8, !1);
	}
	get() {
		const { A: e, B: t, C: n, D: r, E: o, F: a, G: i, H: c } = this;
		return [
			e,
			t,
			n,
			r,
			o,
			a,
			i,
			c
		];
	}
	set(e, t, n, r, o, a, i, c) {
		this.A = 0 | e, this.B = 0 | t, this.C = 0 | n, this.D = 0 | r, this.E = 0 | o, this.F = 0 | a, this.G = 0 | i, this.H = 0 | c;
	}
	process(e, t) {
		for (let n = 0; n < 16; n++, t += 4) ge[n] = e.getUint32(t, !1);
		for (let e = 16; e < 64; e++) {
			const t = ge[e - 15], n = ge[e - 2], r = ye(t, 7) ^ ye(t, 18) ^ t >>> 3, o = ye(n, 17) ^ ye(n, 19) ^ n >>> 10;
			ge[e] = o + ge[e - 7] + r + ge[e - 16] | 0;
		}
		let { A: n, B: r, C: o, D: a, E: i, F: c, G: u, H: s } = this;
		for (let e = 0; e < 64; e++) {
			const t = s + (ye(i, 6) ^ ye(i, 11) ^ ye(i, 25)) + Te(i, c, u) + be[e] + ge[e] | 0, l = (ye(n, 2) ^ ye(n, 13) ^ ye(n, 22)) + me(n, r, o) | 0;
			s = u, u = c, c = i, i = a + t | 0, a = o, o = r, r = n, n = t + l | 0;
		}
		n = n + this.A | 0, r = r + this.B | 0, o = o + this.C | 0, a = a + this.D | 0, i = i + this.E | 0, c = c + this.F | 0, u = u + this.G | 0, s = s + this.H | 0, this.set(n, r, o, a, i, c, u, s);
	}
	roundClean() {
		Ee(ge);
	}
	destroy() {
		this.destroyed = !0, this.set(0, 0, 0, 0, 0, 0, 0, 0), Ee(this.buffer);
	}
};
var Le = class extends Ae {
	A = 0 | ve[0];
	B = 0 | ve[1];
	C = 0 | ve[2];
	D = 0 | ve[3];
	E = 0 | ve[4];
	F = 0 | ve[5];
	G = 0 | ve[6];
	H = 0 | ve[7];
	constructor() {
		super(32);
	}
};
var Oe;
(function(e, t = {}) {
	const n = (t, n) => e(n).update(t).digest(), r = e(void 0);
	n.outputLen = r.outputLen, n.blockLen = r.blockLen, n.canXOF = r.canXOF, n.create = (t) => e(t), Object.assign(n, t), Object.freeze(n);
})(() => new Le(), (Oe = 1, { oid: Uint8Array.from([
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
	Oe
]) }));
var Pe = function(e, t) {
	return Pe = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	}, Pe(e, t);
};
function Ne(e, t) {
	if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
	function n() {
		this.constructor = e;
	}
	Pe(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var Se = function() {
	return Se = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
		return e;
	}, Se.apply(this, arguments);
};
function we(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
		var o = 0;
		for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
	}
	return n;
}
function Re(e, t, n, r) {
	var o, a = arguments.length, i = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
	if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, r);
	else for (var c = e.length - 1; c >= 0; c--) (o = e[c]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, n, i) : o(t, n)) || i);
	return a > 3 && i && Object.defineProperty(t, n, i), i;
}
function Ie(e, t) {
	return function(n, r) {
		t(n, r, e);
	};
}
function Ce(e, t, n, r, o, a) {
	function i(e) {
		if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
		return e;
	}
	for (var c, u = r.kind, s = "getter" === u ? "get" : "setter" === u ? "set" : "value", l = !t && e ? r.static ? e : e.prototype : null, f = t || (l ? Object.getOwnPropertyDescriptor(l, r.name) : {}), _ = !1, p = n.length - 1; p >= 0; p--) {
		var E = {};
		for (var d in r) E[d] = "access" === d ? {} : r[d];
		for (var d in r.access) E.access[d] = r.access[d];
		E.addInitializer = function(e) {
			if (_) throw new TypeError("Cannot add initializers after decoration has completed");
			a.push(i(e || null));
		};
		var y = (0, n[p])("accessor" === u ? {
			get: f.get,
			set: f.set
		} : f[s], E);
		if ("accessor" === u) {
			if (void 0 === y) continue;
			if (null === y || "object" != typeof y) throw new TypeError("Object expected");
			(c = i(y.get)) && (f.get = c), (c = i(y.set)) && (f.set = c), (c = i(y.init)) && o.unshift(c);
		} else (c = i(y)) && ("field" === u ? o.unshift(c) : f[s] = c);
	}
	l && Object.defineProperty(l, r.name, f), _ = !0;
}
function Ue(e, t, n) {
	for (var r = arguments.length > 2, o = 0; o < t.length; o++) n = r ? t[o].call(e, n) : t[o].call(e);
	return r ? n : void 0;
}
function Me(e) {
	return "symbol" == typeof e ? e : "".concat(e);
}
function je(e, t, n) {
	return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
		configurable: !0,
		value: n ? "".concat(n, " ", t) : t
	});
}
function Ge(e, t) {
	if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
}
function De(e, t, n, r) {
	return new (n || (n = Promise))(function(o, a) {
		function i(e) {
			try {
				u(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			try {
				u(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function u(e) {
			var t;
			e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
				e(t);
			})).then(i, c);
		}
		u((r = r.apply(e, t || [])).next());
	});
}
function ke(e, t) {
	var n, r, o, a = {
		label: 0,
		sent: function() {
			if (1 & o[0]) throw o[1];
			return o[1];
		},
		trys: [],
		ops: []
	}, i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
	return i.next = c(0), i.throw = c(1), i.return = c(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
		return this;
	}), i;
	function c(c) {
		return function(u) {
			return function(c) {
				if (n) throw new TypeError("Generator is already executing.");
				for (; i && (i = 0, c[0] && (a = 0)), a;) try {
					if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
					switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
						case 0:
						case 1:
							o = c;
							break;
						case 4: return a.label++, {
							value: c[1],
							done: !1
						};
						case 5:
							a.label++, r = c[1], c = [0];
							continue;
						case 7:
							c = a.ops.pop(), a.trys.pop();
							continue;
						default:
							if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
								a = 0;
								continue;
							}
							if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
								a.label = c[1];
								break;
							}
							if (6 === c[0] && a.label < o[1]) {
								a.label = o[1], o = c;
								break;
							}
							if (o && a.label < o[2]) {
								a.label = o[2], a.ops.push(c);
								break;
							}
							o[2] && a.ops.pop(), a.trys.pop();
							continue;
					}
					c = t.call(e, a);
				} catch (e) {
					c = [6, e], r = 0;
				} finally {
					n = o = 0;
				}
				if (5 & c[0]) throw c[1];
				return {
					value: c[0] ? c[1] : void 0,
					done: !0
				};
			}([c, u]);
		};
	}
}
var xe = Object.create ? function(e, t, n, r) {
	void 0 === r && (r = n);
	var o = Object.getOwnPropertyDescriptor(t, n);
	o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
		enumerable: !0,
		get: function() {
			return t[n];
		}
	}), Object.defineProperty(e, r, o);
} : function(e, t, n, r) {
	void 0 === r && (r = n), e[r] = t[n];
};
function Ve(e, t) {
	for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || xe(t, e, n);
}
function Fe(e) {
	var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && "number" == typeof e.length) return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Xe(e, t) {
	var n = "function" == typeof Symbol && e[Symbol.iterator];
	if (!n) return e;
	var r, o, a = n.call(e), i = [];
	try {
		for (; (void 0 === t || t-- > 0) && !(r = a.next()).done;) i.push(r.value);
	} catch (e) {
		o = { error: e };
	} finally {
		try {
			r && !r.done && (n = a.return) && n.call(a);
		} finally {
			if (o) throw o.error;
		}
	}
	return i;
}
function Ye() {
	for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Xe(arguments[t]));
	return e;
}
function Ke() {
	for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
	var r = Array(e), o = 0;
	for (t = 0; t < n; t++) for (var a = arguments[t], i = 0, c = a.length; i < c; i++, o++) r[o] = a[i];
	return r;
}
function Be(e, t, n) {
	if (n || 2 === arguments.length) for (var r, o = 0, a = t.length; o < a; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
	return e.concat(r || Array.prototype.slice.call(t));
}
function $e(e) {
	return this instanceof $e ? (this.v = e, this) : new $e(e);
}
function He(e, t, n) {
	if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	var r, o = n.apply(e, t || []), a = [];
	return r = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), i("next"), i("throw"), i("return", function(e) {
		return function(t) {
			return Promise.resolve(t).then(e, s);
		};
	}), r[Symbol.asyncIterator] = function() {
		return this;
	}, r;
	function i(e, t) {
		o[e] && (r[e] = function(t) {
			return new Promise(function(n, r) {
				a.push([
					e,
					t,
					n,
					r
				]) > 1 || c(e, t);
			});
		}, t && (r[e] = t(r[e])));
	}
	function c(e, t) {
		try {
			(n = o[e](t)).value instanceof $e ? Promise.resolve(n.value.v).then(u, s) : l(a[0][2], n);
		} catch (e) {
			l(a[0][3], e);
		}
		var n;
	}
	function u(e) {
		c("next", e);
	}
	function s(e) {
		c("throw", e);
	}
	function l(e, t) {
		e(t), a.shift(), a.length && c(a[0][0], a[0][1]);
	}
}
function ze(e) {
	var t = {}, n;
	return r("next"), r("throw", function(e) {
		throw e;
	}), r("return"), t[Symbol.iterator] = function() {
		return this;
	}, t;
	function r(r, o) {
		t[r] = e[r] ? function(t) {
			return (n = !n) ? {
				value: $e(e[r](t)),
				done: !1
			} : o ? o(t) : t;
		} : o;
	}
}
function We(e) {
	if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	var t, n = e[Symbol.asyncIterator];
	return n ? n.call(e) : (e = Fe(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
		return this;
	}, t);
	function r(n) {
		t[n] = e[n] && function(t) {
			return new Promise(function(r, o) {
				(function(e, t, n, r) {
					Promise.resolve(r).then(function(t) {
						e({
							value: t,
							done: n
						});
					}, t);
				})(r, o, (t = e[n](t)).done, t.value);
			});
		};
	}
}
function Je(e, t) {
	return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
var Qe = Object.create ? function(e, t) {
	Object.defineProperty(e, "default", {
		enumerable: !0,
		value: t
	});
} : function(e, t) {
	e.default = t;
};
var qe = function(e) {
	return qe = Object.getOwnPropertyNames || function(e) {
		var t = [];
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
		return t;
	}, qe(e);
};
function Ze(e) {
	if (e && e.__esModule) return e;
	var t = {};
	if (null != e) for (var n = qe(e), r = 0; r < n.length; r++) "default" !== n[r] && xe(t, e, n[r]);
	return Qe(t, e), t;
}
function et(e) {
	return e && e.__esModule ? e : { default: e };
}
function tt(e, t, n, r) {
	if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
	if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
	return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
}
function nt(e, t, n, r, o) {
	if ("m" === r) throw new TypeError("Private method is not writable");
	if ("a" === r && !o) throw new TypeError("Private accessor was defined without a setter");
	if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
	return "a" === r ? o.call(e, n) : o ? o.value = n : t.set(e, n), n;
}
function rt(e, t) {
	if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
	return "function" == typeof e ? t === e : e.has(t);
}
function ot(e, t, n) {
	if (null != t) {
		if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
		var r, o;
		if (n) {
			if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
			r = t[Symbol.asyncDispose];
		}
		if (void 0 === r) {
			if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
			r = t[Symbol.dispose], n && (o = r);
		}
		if ("function" != typeof r) throw new TypeError("Object not disposable.");
		o && (r = function() {
			try {
				o.call(this);
			} catch (e) {
				return Promise.reject(e);
			}
		}), e.stack.push({
			value: t,
			dispose: r,
			async: n
		});
	} else n && e.stack.push({ async: !0 });
	return t;
}
var at = "function" == typeof SuppressedError ? SuppressedError : function(e, t, n) {
	var r = new Error(n);
	return r.name = "SuppressedError", r.error = e, r.suppressed = t, r;
};
function it(e) {
	function t(t) {
		e.error = e.hasError ? new at(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
	}
	var n, r = 0;
	return function o() {
		for (; n = e.stack.pop();) try {
			if (!n.async && 1 === r) return r = 0, e.stack.push(n), Promise.resolve().then(o);
			if (n.dispose) {
				var a = n.dispose.call(n.value);
				if (n.async) return r |= 2, Promise.resolve(a).then(o, function(e) {
					return t(e), o();
				});
			} else r |= 1;
		} catch (e) {
			t(e);
		}
		if (1 === r) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
		if (e.hasError) throw e.error;
	}();
}
function ct(e, t) {
	return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, n, r, o, a) {
		return n ? t ? ".jsx" : ".js" : !r || o && a ? r + o + "." + a.toLowerCase() + "js" : e;
	}) : e;
}
var ut;
var st;
var lt;
var ft;
var pt = Object.freeze({
	__proto__: null,
	__addDisposableResource: ot,
	get __assign() {
		return Se;
	},
	__asyncDelegator: ze,
	__asyncGenerator: He,
	__asyncValues: We,
	__await: $e,
	__awaiter: De,
	__classPrivateFieldGet: tt,
	__classPrivateFieldIn: rt,
	__classPrivateFieldSet: nt,
	__createBinding: xe,
	__decorate: Re,
	__disposeResources: it,
	__esDecorate: Ce,
	__exportStar: Ve,
	__extends: Ne,
	__generator: ke,
	__importDefault: et,
	__importStar: Ze,
	__makeTemplateObject: Je,
	__metadata: Ge,
	__param: Ie,
	__propKey: Me,
	__read: Xe,
	__rest: we,
	__rewriteRelativeImportExtension: ct,
	__runInitializers: Ue,
	__setFunctionName: je,
	__spread: Ye,
	__spreadArray: Be,
	__spreadArrays: Ke,
	__values: Fe,
	default: {
		__extends: Ne,
		__assign: Se,
		__rest: we,
		__decorate: Re,
		__param: Ie,
		__esDecorate: Ce,
		__runInitializers: Ue,
		__propKey: Me,
		__setFunctionName: je,
		__metadata: Ge,
		__awaiter: De,
		__generator: ke,
		__createBinding: xe,
		__exportStar: Ve,
		__values: Fe,
		__read: Xe,
		__spread: Ye,
		__spreadArrays: Ke,
		__spreadArray: Be,
		__await: $e,
		__asyncGenerator: He,
		__asyncDelegator: ze,
		__asyncValues: We,
		__makeTemplateObject: Je,
		__importStar: Ze,
		__importDefault: et,
		__classPrivateFieldGet: tt,
		__classPrivateFieldSet: nt,
		__classPrivateFieldIn: rt,
		__addDisposableResource: ot,
		__disposeResources: it,
		__rewriteRelativeImportExtension: ct
	}
});
(function(e) {
	e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(ut || (ut = {})), function(e) {
	e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
}(st || (st = {})), function(e) {
	e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
}(lt || (lt = {}));
try {
	null === (ft = function(e, t) {
		return new RegExp(e, t);
	}("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === ft || ft[0];
} catch (Oe) {}
var Et;
var dt;
var yt = {};
function Tt() {
	return Et || (Et = 1, Object.defineProperty(yt, "__esModule", { value: !0 }), yt.SKELETON_TYPE = yt.TYPE = void 0, yt.isLiteralElement = function(t) {
		return t.type === e.literal;
	}, yt.isArgumentElement = function(t) {
		return t.type === e.argument;
	}, yt.isNumberElement = function(t) {
		return t.type === e.number;
	}, yt.isDateElement = function(t) {
		return t.type === e.date;
	}, yt.isTimeElement = function(t) {
		return t.type === e.time;
	}, yt.isSelectElement = function(t) {
		return t.type === e.select;
	}, yt.isPluralElement = function(t) {
		return t.type === e.plural;
	}, yt.isPoundElement = function(t) {
		return t.type === e.pound;
	}, yt.isTagElement = function(t) {
		return t.type === e.tag;
	}, yt.isNumberSkeleton = function(e) {
		return !(!e || "object" != typeof e || e.type !== t.number);
	}, yt.isDateTimeSkeleton = function(e) {
		return !(!e || "object" != typeof e || e.type !== t.dateTime);
	}, yt.createLiteralElement = function(t) {
		return {
			type: e.literal,
			value: t
		};
	}, yt.createNumberElement = function(t, n) {
		return {
			type: e.number,
			value: t,
			style: n
		};
	}, function(e) {
		e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
	}(e || (yt.TYPE = e = {})), function(e) {
		e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
	}(t || (yt.SKELETON_TYPE = t = {}))), yt;
	var e, t;
}
Tt();
var mt = {};
var ht = function(e) {
	if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
	var t = e.default;
	if ("function" == typeof t) {
		var n = function e() {
			var n = !1;
			try {
				n = this instanceof e;
			} catch {}
			return n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
		};
		n.prototype = t.prototype;
	} else n = {};
	return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(t) {
		var r = Object.getOwnPropertyDescriptor(e, t);
		Object.defineProperty(n, t, r.get ? r : {
			enumerable: !0,
			get: function() {
				return e[t];
			}
		});
	}), n;
}(pt);
(function() {
	if (dt) return mt;
	dt = 1, Object.defineProperty(mt, "__esModule", { value: !0 }), mt.printAST = n, mt.doPrintAST = r, mt.printDateTimeSkeleton = i;
	var e = ht, t = Tt();
	function n(e) {
		return r(e, !1);
	}
	function r(c, u) {
		return c.map(function(s, l) {
			return (0, t.isLiteralElement)(s) ? function(e, t, n, r) {
				var a = e.value;
				return n || "'" !== a[0] || (a = "''".concat(a.slice(1))), r || "'" !== a[a.length - 1] || (a = "".concat(a.slice(0, a.length - 1), "''")), a = o(a), t ? a.replace("#", "'#'") : a;
			}(s, u, 0 === l, l === c.length - 1) : (0, t.isArgumentElement)(s) ? function(e) {
				var t = e.value;
				return "{".concat(t, "}");
			}(s) : (0, t.isDateElement)(s) || (0, t.isTimeElement)(s) || (0, t.isNumberElement)(s) ? function(e) {
				return "{".concat(e.value, ", ").concat(t.TYPE[e.type]).concat(e.style ? ", ".concat("string" == typeof (n = e.style) ? o(n) : n.type === t.SKELETON_TYPE.dateTime ? "::".concat(i(n)) : "::".concat(n.tokens.map(a).join(" "))) : "", "}");
				var n;
			}(s) : (0, t.isPluralElement)(s) ? function(t) {
				var n = "cardinal" === t.pluralType ? "plural" : "selectordinal", o = [
					t.value,
					n,
					e.__spreadArray([t.offset ? "offset:".concat(t.offset) : ""], Object.keys(t.options).map(function(e) {
						return "".concat(e, "{").concat(r(t.options[e].value, !0), "}");
					}), !0).filter(Boolean).join(" ")
				].join(",");
				return "{".concat(o, "}");
			}(s) : (0, t.isSelectElement)(s) ? function(e) {
				var t = [
					e.value,
					"select",
					Object.keys(e.options).map(function(t) {
						return "".concat(t, "{").concat(r(e.options[t].value, !1), "}");
					}).join(" ")
				].join(",");
				return "{".concat(t, "}");
			}(s) : (0, t.isPoundElement)(s) ? "#" : (0, t.isTagElement)(s) ? function(e) {
				return "<".concat(e.value, ">").concat(n(e.children), "</").concat(e.value, ">");
			}(s) : void 0;
		}).join("");
	}
	function o(e) {
		return e.replace(/([{}](?:[\s\S]*[{}])?)/, "'$1'");
	}
	function a(e) {
		var t = e.stem, n = e.options;
		return 0 === n.length ? t : "".concat(t).concat(n.map(function(e) {
			return "/".concat(e);
		}).join(""));
	}
	function i(e) {
		return e.pattern;
	}
})();
var vt = "gt-react";
function bt({ locale: e = "", defaultLocale: t = "en", locales: n = [], localeCookieName: r = "generaltranslation.locale", ssr: o = !0, customMapping: c, enableI18n: f, reloadOnLocaleUpdate: _ = !1 }) {
	const p = useMemo(() => resolveAliasLocale(e, c), [e, c]), E = useMemo(() => n.map((e) => resolveAliasLocale(e, c)), [n, c]), [d, y] = useState(() => {
		if (!f) return t;
		return resolveAliasLocale(o ? p && determineLocale(p, E, c) || "" : gt({
			_locale: p,
			locale: p,
			locales: E,
			defaultLocale: t,
			localeCookieName: r,
			customMapping: c,
			enableI18n: f
		}), c);
	}), [T, m] = function({ locale: e, locales: t, defaultLocale: n, localeCookieName: r, _setLocale: o, customMapping: a, enableI18n: i, reloadOnLocaleUpdate: c }) {
		e = resolveAliasLocale(e, a);
		const u = (r) => {
			if (!i) return n;
			if (r === e) return e;
			const c = resolveAliasLocale(determineLocale(r, t, a) || e || n, a);
			return c !== r && console.warn(((e, t, n = "@generaltranslation/react-core") => `${n} Warning: "${t}" is not a supported locale. Update supported locales in your dashboard or gt.config.json. Falling back to "${e}".`)(c, r, vt)), o(c), c;
		}, f = (t) => {
			if (!i) return;
			t = resolveAliasLocale(t);
			const n = u(t);
			"undefined" != typeof document && (document.cookie = `${r}=${n};path=/`), "undefined" != typeof window && t !== e && c && window.location.reload();
		};
		return [f, u];
	}({
		locale: d,
		locales: E,
		defaultLocale: t,
		localeCookieName: r,
		_setLocale: y,
		customMapping: c,
		enableI18n: f,
		reloadOnLocaleUpdate: _
	});
	return useEffect(() => {
		const e = gt({
			_locale: p,
			locale: d,
			locales: E,
			defaultLocale: t,
			localeCookieName: r,
			customMapping: c,
			enableI18n: f
		});
		m(e);
	}, [
		p,
		d,
		E,
		t,
		r,
		f
	]), [d, T];
}
function gt({ _locale: e, locale: t, locales: n, defaultLocale: r, localeCookieName: o, customMapping: a, enableI18n: i }) {
	var c;
	if (!i) return r;
	if (e && e === t && determineLocale(e, n, a) === t) return resolveAliasLocale(e, a);
	let u = "undefined" != typeof document ? null === (c = document.cookie.split("; ").find((e) => e.startsWith(`${o}=`))) || void 0 === c ? void 0 : c.split("=")[1] : void 0;
	u && (u = resolveAliasLocale(u, a));
	let f = "undefined" == typeof navigator ? [] : (null === navigator || void 0 === navigator ? void 0 : navigator.languages) ? navigator.languages : (null === navigator || void 0 === navigator ? void 0 : navigator.language) ? [navigator.language] : (null === navigator || void 0 === navigator ? void 0 : navigator.userLanguage) ? [null === navigator || void 0 === navigator ? void 0 : navigator.userLanguage] : [];
	f = f.map((e) => resolveAliasLocale(e, a));
	let _ = determineLocale([
		...e ? [e] : [],
		...u ? [u] : [],
		...f
	], n, a) || r;
	return _ && (_ = resolveAliasLocale(_, a)), u && u !== _ && "undefined" != typeof document && (document.cookie = `${o}=${_};path=/`), _;
}
function At(t) {
	return jsx(Fn, Object.assign({
		ssr: !("undefined" == typeof process || !process.env.NEXT_RUNTIME) || void 0 !== (null === globalThis || void 0 === globalThis ? void 0 : globalThis.__NEXT_DATA__),
		environment: "development"
	}, t, {
		readAuthFromEnv: f,
		useDetermineLocale: bt,
		useRegionState: p$1,
		useEnableI18n: E$1
	}));
}
var p = createIsomorphicFn().server(function({ defaultLocale: e, locales: t, customMapping: r }) {
	var n;
	const a = [], c = getCookie(rr$1);
	c && a.push(c);
	if ("false" === process.env._GENERALTRANSLATION_IGNORE_BROWSER_LOCALES) {
		const e = (null === (n = getRequestHeader("accept-language")) || void 0 === n ? void 0 : n.split(",").map((e) => {
			var t;
			return null === (t = e.split(";")) || void 0 === t ? void 0 : t[0].trim();
		})) || [];
		e && a.push(...e);
	}
	0 === a.length && "false" === process.env._GENERALTRANSLATION_IGNORE_BROWSER_LOCALES && console.warn("gt-tanstack-start(server): no locales could be determined for this request");
	return determineLocale(a, t, r) || e;
}).client(function({ defaultLocale: e, locales: t, customMapping: r }) {
	var n;
	const a = [], i = null === (n = document.cookie.split("; ").find((e) => e.startsWith(`generaltranslation.locale=`))) || void 0 === n ? void 0 : n.split("=")[1];
	i && a.push(i);
	const s = navigator.language;
	s && a.push(s);
	0 === a.length && (console.warn("gt-tanstack-start(client): no locales could be determined for this request"), a.push(e));
	return determineLocale(a, t, r) || e;
});
var d = class extends StorageAdapter {
	constructor({ defaultLocale: e, locales: t, customMapping: r } = {}) {
		super(), this.type = "tanstack-i18n-storage-adapter", this.defaultLocale = e, this.locales = t, this.customMapping = r;
	}
	setConfig(e) {
		this.defaultLocale || (this.defaultLocale = e.defaultLocale), this.locales || (this.locales = e.locales), this.customMapping || (this.customMapping = e.customMapping);
	}
	getItem(e) {
		if ("locale" === e) return p({
			defaultLocale: this.defaultLocale || "en",
			locales: this.locales || ["en"],
			customMapping: this.customMapping
		});
	}
	setItem(e, t) {}
	removeItem(e) {}
};
var y = class extends I18nManager {
	constructor(e) {
		super(e), this.storeAdapter.setConfig({
			defaultLocale: this.getDefaultLocale(),
			locales: this.getLocales(),
			customMapping: e.customMapping
		});
	}
	getProviderConfig() {
		return {
			defaultLocale: this.config.defaultLocale,
			locales: this.config.locales,
			customMapping: this.config.customMapping,
			enableI18n: this.config.enableI18n,
			loadTranslations: (e) => this.loadTranslations(e),
			_versionId: this.config._versionId
		};
	}
};
function m(e) {
	setI18nManager(new y(Object.assign(Object.assign({}, e), { storeAdapter: new d() })));
}
var v = { exports: {} };
var h;
var _;
var k = {};
function S() {
	return h || (h = 1, function() {
		function e(t) {
			if (null == t) return null;
			if ("function" == typeof t) return t.$$typeof === L ? null : t.displayName || t.name || null;
			if ("string" == typeof t) return t;
			switch (t) {
				case y: return "Fragment";
				case g: return "Profiler";
				case m: return "StrictMode";
				case _: return "Suspense";
				case S: return "SuspenseList";
				case w: return "Activity";
			}
			if ("object" == typeof t) switch ("number" == typeof t.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), t.$$typeof) {
				case d: return "Portal";
				case b: return t.displayName || "Context";
				case v: return (t._context.displayName || "Context") + ".Consumer";
				case h:
					var r = t.render;
					return (t = t.displayName) || (t = "" !== (t = r.displayName || r.name || "") ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
				case O: return null !== (r = t.displayName || null) ? r : e(t.type) || "Memo";
				case j:
					r = t._payload, t = t._init;
					try {
						return e(t(r));
					} catch (e) {}
			}
			return null;
		}
		function t(e) {
			return "" + e;
		}
		function r(e) {
			try {
				t(e);
				var r = !1;
			} catch (e) {
				r = !0;
			}
			if (r) {
				var n = (r = console).error, o = "function" == typeof Symbol && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return n.call(r, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", o), t(e);
			}
		}
		function n(t) {
			if (t === y) return "<>";
			if ("object" == typeof t && null !== t && t.$$typeof === j) return "<...>";
			try {
				var r = e(t);
				return r ? "<" + r + ">" : "<...>";
			} catch (e) {
				return "<...>";
			}
		}
		function o() {
			return Error("react-stack-top-frame");
		}
		function a$13() {
			var t = e(this.type);
			return x[t] || (x[t] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), void 0 !== (t = this.props.ref) ? t : null;
		}
		function i(t, n, o, i, l, u) {
			var f, d = n.children;
			if (void 0 !== d) if (i) if (N(d)) {
				for (i = 0; i < d.length; i++) s(d[i]);
				Object.freeze && Object.freeze(d);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else s(d);
			if (T.call(n, "key")) {
				d = e(t);
				var y = Object.keys(n).filter(function(e) {
					return "key" !== e;
				});
				i = 0 < y.length ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}", M[d + i] || (y = 0 < y.length ? "{" + y.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", i, d, y, d), M[d + i] = !0);
			}
			if (d = null, void 0 !== o && (r(o), d = "" + o), function(e) {
				if (T.call(e, "key")) {
					var t = Object.getOwnPropertyDescriptor(e, "key").get;
					if (t && t.isReactWarning) return !1;
				}
				return void 0 !== e.key;
			}(n) && (r(n.key), d = "" + n.key), "key" in n) for (var m in o = {}, n) "key" !== m && (o[m] = n[m]);
			else o = n;
			return d && function(e, t) {
				function r() {
					c || (c = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
				}
				r.isReactWarning = !0, Object.defineProperty(e, "key", {
					get: r,
					configurable: !0
				});
			}(o, "function" == typeof t ? t.displayName || t.name || "Unknown" : t), function(e, t, r, n, o, i) {
				var s = r.ref;
				return e = {
					$$typeof: p,
					type: e,
					key: t,
					props: r,
					_owner: n
				}, null !== (void 0 !== s ? s : null) ? Object.defineProperty(e, "ref", {
					enumerable: !1,
					get: a$13
				}) : Object.defineProperty(e, "ref", {
					enumerable: !1,
					value: null
				}), e._store = {}, Object.defineProperty(e._store, "validated", {
					configurable: !1,
					enumerable: !1,
					writable: !0,
					value: 0
				}), Object.defineProperty(e, "_debugInfo", {
					configurable: !1,
					enumerable: !1,
					writable: !0,
					value: null
				}), Object.defineProperty(e, "_debugStack", {
					configurable: !1,
					enumerable: !1,
					writable: !0,
					value: o
				}), Object.defineProperty(e, "_debugTask", {
					configurable: !1,
					enumerable: !1,
					writable: !0,
					value: i
				}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
			}(t, d, o, null === (f = E.A) ? null : f.getOwner(), l, u);
		}
		function s(e) {
			l(e) ? e._store && (e._store.validated = 1) : "object" == typeof e && null !== e && e.$$typeof === j && ("fulfilled" === e._payload.status ? l(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function l(e) {
			return "object" == typeof e && null !== e && e.$$typeof === p;
		}
		var c, f = a, p = Symbol.for("react.transitional.element"), d = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), v = Symbol.for("react.consumer"), b = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), w = Symbol.for("react.activity"), L = Symbol.for("react.client.reference"), E = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, T = Object.prototype.hasOwnProperty, N = Array.isArray, R = console.createTask ? console.createTask : function() {
			return null;
		}, x = {}, A = (f = { react_stack_bottom_frame: function(e) {
			return e();
		} }).react_stack_bottom_frame.bind(f, o)(), I = R(n(o)), M = {};
		k.Fragment = y, k.jsx = function(e, t, r) {
			var o = 1e4 > E.recentlyCreatedOwnerStacks++;
			return i(e, t, r, !1, o ? Error("react-stack-top-frame") : A, o ? R(n(e)) : I);
		}, k.jsxs = function(e, t, r) {
			var o = 1e4 > E.recentlyCreatedOwnerStacks++;
			return i(e, t, r, !0, o ? Error("react-stack-top-frame") : A, o ? R(n(e)) : I);
		};
	}()), k;
}
var O = (_ || (_ = 1, v.exports = S()), v.exports);
function j() {
	return "undefined" == typeof window;
}
function w() {
	return getI18nManager().getLocale();
}
function L(e) {
	return e.locale ? e.locale : j() ? w() : void 0;
}
function E() {
	const e = getI18nManager();
	if (!function(e) {
		return e instanceof y;
	}(e)) throw new Error("TanstackI18nManager not initialized. Invoke initializeGT() to initialize.");
	return e;
}
function N(e) {
	const t = E().getProviderConfig();
	return O.jsx(At, Object.assign({ ssr: j() }, t, e, {
		reloadOnLocaleUpdate: !0,
		locale: L(e)
	}));
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
var _jsxFileName$1 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/gt-react-app/scripts/Wrapper.tsx";
m({
	...gt_config_default,
	loadTranslations
});
function Wrapper({ children }) {
	return jsxDEV(N, {
		locale: "en",
		children
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 13,
		columnNumber: 10
	}, this);
}
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/gt-react-app/src/components/pages/home/UnderstandingImpact.wrapper.tsx";
function Wrapped() {
	return jsxDEV(Wrapper, { children: jsxDEV(UnderstandingImpact, {}, void 0, false, {
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
