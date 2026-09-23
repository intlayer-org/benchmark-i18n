import { createContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
import { jsx } from "react/jsx-runtime";
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
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
var _jsxFileName$3 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-scoped-static/gt-next-app/components/LocaleSwitcher.tsx";
function LocaleSwitcher() {
	const locale = useParams().locale ?? "en";
	const router = useRouter();
	const pathname = usePathname();
	const getLocaleName = (l) => {
		try {
			const name = new Intl.DisplayNames([l], { type: "language" }).of(l);
			return name ? name.charAt(0).toUpperCase() + name.slice(1) : l;
		} catch (e) {
			return l.toUpperCase();
		}
	};
	const handleLocaleChange = (newLocale) => {
		const segments = pathname.split("/");
		segments[1] = newLocale;
		const newPathname = segments.join("/");
		router.push(newPathname);
	};
	return jsxDEV("div", {
		className: "flex items-center gap-2",
		children: jsxDEV("select", {
			value: locale,
			onChange: (e) => handleLocaleChange(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: locales.map((localeItem) => jsxDEV("option", {
				value: localeItem,
				children: getLocaleName(localeItem)
			}, localeItem, false, {
				fileName: _jsxFileName$3,
				lineNumber: 42,
				columnNumber: 11
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 36,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 35,
		columnNumber: 5
	}, this);
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
var _jsxFileName$2 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-scoped-static/gt-next-app/components/AppProviders.tsx";
function AppProviders({ children, locale }) {
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
	return jsxDEV(Fragment, { children }, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 33,
		columnNumber: 10
	}, this);
}
function getRuntimeCredentials() {
	return {
		projectId: process.env.NEXT_PUBLIC_GT_PROJECT_ID || process.env.GT_PROJECT_ID,
		apiKey: process.env.GT_API_KEY,
		devApiKey: process.env.NEXT_PUBLIC_GT_DEV_API_KEY || process.env.GT_DEV_API_KEY
	};
}
var ApiError = class extends Error {
	constructor(error, code, message) {
		super(error);
		this.name = "ApiError";
		this.code = code;
		this.message = message;
	}
};
var defaultTimeout = 6e4;
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
function formatDiagnosticErrorDetails(error) {
	if (error == null) return void 0;
	return String(error);
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
function formatMessage(message, locales = "en", variables = {}) {
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
new RegExp(`${VAR_IDENTIFIER}\\d+`);
function createGtNextDiagnostic(input) {
	return createDiagnosticMessage$1({
		source: "gt-next",
		...input
	});
}
var createUnresolvedCustomLoadTranslationsError = () => createGtNextDiagnostic({
	severity: "Error",
	whatHappened: "loadTranslations() was found during the build but could not be resolved at runtime",
	fix: "Export a loadTranslations() function from the configured file"
});
var require__load_translations = __commonJSMin(((exports) => {
	Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
	throw new Error(`Something has gone seriously wrong if you're seeing this error message. Check docs.generaltranslation.com for the latest documentation and make sure you've got the library configured properly.`);
}));
var customLoadTranslations = void 0;
function resolveTranslationLoader() {
	if (customLoadTranslations !== void 0) return customLoadTranslations;
	if (process.env._GENERALTRANSLATION_LOCAL_TRANSLATION_ENABLED !== "true") return void 0;
	let customLoadTranslationsConfig;
	try {
		customLoadTranslationsConfig = require__load_translations();
	} catch {}
	customLoadTranslations = customLoadTranslationsConfig?.default || customLoadTranslationsConfig?.loadTranslations;
	if (!customLoadTranslations) {
		customLoadTranslations = async (_) => void 0;
		const unresolvedCustomLoadTranslationsError = createUnresolvedCustomLoadTranslationsError();
		if (process.env.NODE_ENV !== "production") throw new Error(unresolvedCustomLoadTranslationsError);
		console.error(unresolvedCustomLoadTranslationsError);
	}
	return customLoadTranslations;
}
function getParams() {
	const clientConfig = JSON.parse(process.env.NEXT_PUBLIC_GENERALTRANSLATION_I18N_CONFIG_PARAMS || "{}");
	const { projectId, devApiKey, apiKey } = getRuntimeCredentials();
	const i18nConfigParams = {
		defaultLocale: clientConfig.defaultLocale,
		locales: clientConfig.locales,
		customMapping: clientConfig.customMapping,
		runtimeUrl: clientConfig.runtimeUrl,
		projectId,
		devApiKey,
		apiKey,
		cacheUrl: clientConfig.cacheUrl,
		_disableDevHotReload: clientConfig._disableDevHotReload,
		_tagIds: clientConfig._tagIds,
		localeCookieName: clientConfig.headersAndCookies?.localeCookieName,
		enableI18nCookieName: clientConfig.headersAndCookies?.enableI18nCookieName
	};
	const timeout = clientConfig.renderSettings?.timeout;
	return {
		i18nConfigParams,
		nextI18nCacheParams: {
			apiKey,
			devApiKey,
			projectId,
			runtimeUrl: clientConfig.runtimeUrl,
			cacheUrl: clientConfig.cacheUrl,
			_versionId: clientConfig._versionId,
			cacheExpiryTime: clientConfig.cacheExpiryTime,
			batchConfig: {
				maxConcurrentRequests: clientConfig.maxConcurrentRequests,
				maxBatchSize: clientConfig.maxBatchSize,
				batchInterval: clientConfig.batchInterval
			},
			runtimeTranslation: {
				timeout,
				metadata: {
					sourceLocale: clientConfig.defaultLocale,
					timeout,
					projectId,
					publish: true,
					fast: true
				}
			},
			loadTranslations: createLoadTranslations()
		}
	};
}
function createLoadTranslations() {
	if (typeof window !== "undefined") return;
	return resolveTranslationLoader();
}
function _formatMessageICU(message, locales = "en", variables = {}) {
	return formatMessage(message, locales, variables)?.toString() ?? "";
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
function determineLocale$1(locales, approvedLocales = [], customMapping = void 0) {
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
var translationTimeoutError = (timeout) => createDiagnosticMessage$1({
	source: GT_SOURCE,
	severity: "Error",
	whatHappened: `Translation request timed out after ${timeout}ms`,
	fix: "Try again, or increase the request timeout if the source content is large"
});
var apiError = (status, statusText, error) => createDiagnosticMessage$1({
	source: GT_SOURCE,
	severity: "Error",
	whatHappened: `The translation API returned ${status} ${statusText}`,
	fix: "Check the request configuration and try again",
	details: error
});
createDiagnosticMessage$1({
	source: GT_SOURCE,
	severity: "Error",
	whatHappened: "Authentication failed",
	fix: "Check that your API key and project ID are correct"
});
var noTargetLocaleProvidedError = (functionName) => createDiagnosticMessage$1({
	source: GT_SOURCE,
	severity: "Error",
	whatHappened: `Cannot call \`${functionName}\` without a specified locale`,
	fix: `Pass a locale to \`${functionName}\` or specify targetLocale in the GT constructor`
});
var noSourceLocaleProvidedError = (functionName) => createDiagnosticMessage$1({
	source: GT_SOURCE,
	severity: "Error",
	whatHappened: `Cannot call \`${functionName}\` without a specified locale`,
	fix: `Pass a locale to \`${functionName}\` or specify sourceLocale in the GT constructor`
});
var noProjectIdProvidedError = (functionName) => createDiagnosticMessage$1({
	source: GT_SOURCE,
	severity: "Error",
	whatHappened: `Cannot call \`${functionName}\` without a specified project ID`,
	fix: `Pass a project ID to \`${functionName}\` or specify projectId in the GT constructor`
});
var noApiKeyProvidedError = (functionName) => createDiagnosticMessage$1({
	source: GT_SOURCE,
	severity: "Error",
	whatHappened: `Cannot call \`${functionName}\` without a specified API key`,
	fix: `Pass an API key to \`${functionName}\` or specify apiKey in the GT constructor`
});
var invalidLocaleError = (locale) => createDiagnosticMessage$1({
	source: GT_SOURCE,
	severity: "Error",
	whatHappened: `Locale "${locale}" is not valid`,
	fix: "Use a valid BCP 47 locale code or add a custom mapping"
});
var invalidLocalesError = (locales) => createDiagnosticMessage$1({
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
		return determineLocale$1(locales, approvedLocales, customMapping);
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
			if (shouldLogDebugWarnings()) console.warn(createDiagnosticMessage$1({
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
	notInitialized: () => createDiagnosticMessage$1({
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
	if (typeof process === "object" && process.env.NODE_ENV === "development") return "development";
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
	if (invalidLocaleConfig.length > 0) throw new Error(createDiagnosticMessage$1({
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
	return createDiagnosticMessage$1({
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
	notInitialized: () => createDiagnosticMessage$1({
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
var { getConditionStore: getWritableConditionStore, setConditionStore: setWritableConditionStore } = createConditionStoreSingleton(createDiagnosticMessage$1({
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
			if (!projectId) return createWarnOnceTranslationLoader(createDiagnosticMessage$1({
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
			return createWarnOnceTranslationLoader(createDiagnosticMessage$1({
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
			const prefetchEntries = async (prefetchEntries = []) => {
				if (process.env.NODE_ENV !== "production" && getI18nConfig().isDevHotReloadEnabled()) {
					const resolvedPrefetchEntries = resolvePrefetchEntriesByLocale(prefetchEntries, asyncBoundaryLocale, (entryLocale) => this._resolveCacheLocale(entryLocale) ?? this._resolveLocale(entryLocale));
					if (resolvedPrefetchEntries.length !== prefetchEntries.length) logger_default.warn(`I18nCache: getLookupTranslation(): prefetchEntries must all be the same locale, ignoring all entries that are not for ${asyncBoundaryLocale}`);
					await Promise.allSettled(resolvedPrefetchEntries.filter((entry) => asyncBoundaryTxCache.get(entry) == null).map((entry) => asyncBoundaryTxCache.miss(entry)));
				}
			};
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
		if (!params.projectId) logger_default.warn("I18nCache: " + createDiagnosticMessage$1({
			whatHappened: "Runtime translation needs a projectId",
			fix: "Add projectId to the I18nCache config or disable runtime translation"
		}));
		if (!params.devApiKey && !params.apiKey) logger_default.warn("I18nCache: " + createDiagnosticMessage$1({
			whatHappened: "Runtime translation needs devApiKey or apiKey",
			fix: "Add credentials to the I18nCache config or disable runtime translation"
		}));
	}
	if (params.loadDictionary && !params.dictionary) {
		logger_default.error("I18nCache: " + createDiagnosticMessage$1({
			whatHappened: "loadDictionary needs a source dictionary",
			fix: "Provide dictionary so the default locale has source content"
		}));
		throw new Error("Validation errors occurred");
	}
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
function getTranslateListenerKey(lookup) {
	const hash = "hash" in lookup ? lookup.hash : hashMessage(lookup.message, lookup.options);
	return `${lookup.locale}:${hash}`;
}
function n$1() {
	return getI18nCache();
}
function r$2(e) {
	setI18nCache(e);
}
var defaultResetLocaleCookieName = "generaltranslation.locale-reset";
var s = `server-render`;
var c$1 = Symbol.for(`generaltranslation.react-core.ReactI18nConfig`);
var l$1 = class extends I18nConfig {
	renderStrategy;
	localeCookieName;
	regionCookieName;
	enableI18nCookieName;
	constructor(r = {}, i = s) {
		super(r), p(i), Object.defineProperty(this, c$1, { value: !0 }), this.renderStrategy = i, this.localeCookieName = r.localeCookieName ?? "generaltranslation.locale", this.regionCookieName = r.regionCookieName ?? "generaltranslation.region", this.enableI18nCookieName = r.enableI18nCookieName ?? "generaltranslation.enable-i18n";
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
function u() {
	let e = getI18nConfig();
	if (m(e)) return e;
	throw Error(createDiagnosticMessage$1({
		source: `@generaltranslation/react-core`,
		severity: `Error`,
		whatHappened: `Cannot read ReactI18nConfig after base I18nConfig setup.`,
		why: `the internal I18nConfig singleton was initialized without react-core render strategy support`,
		fix: `Initialize GT through gt-react or @generaltranslation/react-core/pure.`
	}));
}
function d(e) {
	setI18nConfig(e);
}
function f(e = {}, t = s) {
	let n = new l$1(e, t);
	return d(n), n;
}
function p(e) {
	if (!(e === `SPA` || e === `server-render`)) throw Error(createDiagnosticMessage$1({
		source: `@generaltranslation/react-core`,
		severity: `Error`,
		whatHappened: `Invalid React render strategy.`,
		why: `the render strategy must be "SPA" or "server-render", but received "${String(e)}"`,
		fix: `Initialize GT through gt-react or pass a valid render strategy.`
	}));
}
function m(e) {
	if (e instanceof l$1) return !0;
	let t = e;
	return t[c$1] === !0 && typeof t.getRenderStrategy == `function` && typeof t.getLocaleCookieName == `function` && typeof t.getRegionCookieName == `function` && typeof t.getEnableI18nCookieName == `function`;
}
var t$1 = class extends I18nCache {};
function r$1(r) {
	f(r, `server-render`), r$2(new t$1(r));
}
function e(e, t) {
	return e.add(t), () => {
		e.delete(t);
	};
}
function t(t, n) {
	let r = n.options.$_hash ?? hashMessage(n.message, n.options);
	return t?.[n.locale]?.[r];
}
function n(t, n) {
	return getDictionaryEntry(i$1(t, n));
}
function r(e, t) {
	return i$1(e, t);
}
function i$1(e, { locale: n, id: r }) {
	let i = e?.[n];
	if (!i) return;
	if (!r) return i;
	let o = i;
	for (let e of r.split(`.`)) {
		if (!a$2(e) || !isDictionaryValue(o) || !Object.prototype.hasOwnProperty.call(o, e)) return;
		o = o[e];
	}
	return o;
}
function a$2(e) {
	return e !== `__proto__` && e !== `constructor` && e !== `prototype`;
}
function c(e) {
	if (e instanceof Error) return `${e.name}|${e.message}`;
	if (typeof e == `object` && e) try {
		return `object|${JSON.stringify(e)}`;
	} catch {
		return `object|${String(e)}`;
	}
	return `${typeof e}|${String(e)}`;
}
var l = class {
	translateListeners = /* @__PURE__ */ new Set();
	dictionaryEntryListeners = /* @__PURE__ */ new Set();
	dictionaryObjectListeners = /* @__PURE__ */ new Set();
	loggedRuntimeTranslationErrors = /* @__PURE__ */ new Set();
	constructor() {}
	updateTranslations = (t) => {
		n$1().updateTranslations(t);
	};
	updateDictionaries = (t) => {
		n$1().updateDictionaries(t);
	};
	translate = async (t) => n$1().lookupTranslationWithFallback(t.locale, t.message, t.options).then(() => {
		this.emitTranslateEvent(t);
	}).catch((e) => this.logRuntimeTranslationError(e));
	translateDictionaryEntry = (t) => {
		n$1().lookupDictionaryWithFallback(t.locale, t.id).then(() => {
			this.emitDictionaryEvent(t);
		}).catch((e) => this.logRuntimeTranslationError(e));
	};
	translateDictionaryObject = (t) => {
		n$1().lookupDictionaryObjWithFallback(t.locale, t.id).then(() => {
			this.emitDictionaryEvent(t);
		}).catch((e) => this.logRuntimeTranslationError(e));
	};
	logRuntimeTranslationError(e) {
		let t = formatDiagnosticErrorDetails(e), n = c(e);
		if (!this.loggedRuntimeTranslationErrors.has(n)) {
			if (this.loggedRuntimeTranslationErrors.add(n), this.loggedRuntimeTranslationErrors.size > 100) {
				let e = this.loggedRuntimeTranslationErrors.values().next().value;
				e !== void 0 && this.loggedRuntimeTranslationErrors.delete(e);
			}
			console.error(createDiagnosticMessage$1({
				source: `@generaltranslation/react-core`,
				severity: `Error`,
				whatHappened: `A runtime translation request failed.`,
				wayOut: `Rendering falls back to untranslated content.`,
				details: t
			}));
		}
	}
	subscribeToTranslate = (e$1, n) => {
		let r = getTranslateListenerKey(e$1);
		return e(this.translateListeners, (e) => {
			getTranslateListenerKey(e) === r && n();
		});
	};
	subscribeToTranslationEvents = (e$2) => e(this.translateListeners, e$2);
	subscribeToDictionaryEntryEvents = (e$3) => e(this.dictionaryEntryListeners, e$3);
	subscribeToDictionaryObjectEvents = (e$4) => e(this.dictionaryObjectListeners, e$4);
	getTranslateSnapshot = (t$2, r = {}) => t(r, t$2) ?? n$1().lookupTranslation(t$2.locale, t$2.message, t$2.options);
	getDictionaryEntrySnapshot = (t, n$2 = {}) => n(n$2, t) ?? n$1().lookupDictionary(t.locale, t.id);
	getDictionaryObjectSnapshot = (t, n = {}) => r(n, t) ?? n$1().lookupDictionaryObj(t.locale, t.id);
	emitTranslateEvent(e) {
		this.translateListeners.forEach((t) => t(e));
	}
	emitDictionaryEvent(e) {
		this.dictionaryEntryListeners.forEach((t) => t(e)), this.dictionaryObjectListeners.forEach((t) => {
			t(e);
		});
	}
};
function initializeGTClient({ i18nConfigParams, nextI18nCacheParams } = getParams()) {
	r$1({
		...i18nConfigParams,
		...nextI18nCacheParams,
		cacheExpiryTime: null
	});
}
var a$1 = createGlobalSingleton({
	namespace: `reactCore`,
	key: `gtContext`,
	source: `@generaltranslation/react-core`,
	notInitialized: () => createDiagnosticMessage$1({
		source: `@generaltranslation/react-core`,
		severity: `Error`,
		whatHappened: `Cannot read GTContext before it has been initialized`,
		why: `the internal GTContext singleton is unavailable`,
		fix: `Add a <GTProvider> at the root of your component tree.`
	})
});
function o() {
	return a$1.isInitialized() || a$1.set(createContext(void 0)), a$1.get();
}
var i = o();
function a({ children: e, translations: a, dictionaries: o, conditionStore: s, i18nStore: c, onMissingTranslation: l, onMissingDictionaryEntry: u, onMissingDictionaryObj: d }) {
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
			const cookieRegion = getCookieValue$1({ cookieName: u().getRegionCookieName() });
			if (cookieRegion) return cookieRegion;
			return this.customGetRegion?.();
		};
		this.setRegion = (region) => {
			this.updateRegion(region);
			this.reload();
		};
		this.getEnableI18n = () => {
			const cookieEnableI18n = getCookieValue$1({ cookieName: u().getEnableI18nCookieName() });
			if (cookieEnableI18n === void 0) return this.customGetEnableI18n?.() ?? true;
			return cookieEnableI18n === "true";
		};
		this.setEnableI18n = (enableI18n) => {
			this.updateEnableI18n(enableI18n);
			this.reload();
		};
		this.updateLocale = (locale) => {
			const i18nConfig = u();
			setCookieValue({
				cookieName: i18nConfig.getLocaleCookieName(),
				value: i18nConfig.resolveSupportedLocale(locale)
			});
		};
		this.updateRegion = (region) => {
			setCookieValue({
				cookieName: u().getRegionCookieName(),
				value: region ?? ""
			});
		};
		this.updateEnableI18n = (enableI18n) => {
			setCookieValue({
				cookieName: u().getEnableI18nCookieName(),
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
		const i18nConfig = u();
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
	const i18nConfig = u();
	const candidates = readBrowserLocale(i18nConfig.getLocaleCookieName());
	if (getLocale) candidates.push(getLocale());
	return i18nConfig.resolveSupportedLocale(candidates);
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
	source: "gt-react",
	severity: "Error",
	whatHappened: "Cannot read GT runtime context before it has been initialized",
	why: "the internal ConditionStore singleton is unavailable",
	fix: "Call initializeGT() (or initializeGTSPA() in SPA apps) before rendering and add a <GTProvider> at the root of your component tree."
});
var { setConditionStore: setReadonlyConditionStore, isConditionStoreInitialized: isReadonlyConditionStoreInitialized } = createConditionStoreSingleton(conditionStoreNotInitializedError);
var { getConditionStore: getBrowserConditionStore, setConditionStore: setBrowserConditionStore, isConditionStoreInitialized: isBrowserConditionStoreInitialized } = createConditionStoreSingleton(conditionStoreNotInitializedError);
function createOrUpdateBrowserConditionStore(config) {
	const locale = determineLocale(config);
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
function determineLocale({ _getLocale: getLocale, locale }) {
	const i18nConfig = u();
	const candidates = [];
	if (locale) candidates.push(...Array.isArray(locale) ? locale : [locale]);
	if (getLocale) candidates.push(getLocale());
	candidates.push(...readBrowserLocale(i18nConfig.getLocaleCookieName()));
	return i18nConfig.resolveSupportedLocale(candidates);
}
function determineRegion({ _getRegion: getRegion, region }) {
	return getCookieValue$1({ cookieName: u().getRegionCookieName() }) || getRegion?.() || region;
}
function determineEnableI18n({ enableI18n, _getEnableI18n: getEnableI18n }) {
	if (enableI18n !== void 0) return enableI18n;
	const cookieEnableI18n = getCookieValue$1({ cookieName: u().getEnableI18nCookieName() });
	if (cookieEnableI18n === void 0) return getEnableI18n?.() ?? true;
	return cookieEnableI18n === "true";
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
	if (i18nStoreRef.current == null) i18nStoreRef.current = new l();
	return jsx(a, {
		...props,
		conditionStore,
		i18nStore: i18nStoreRef.current
	});
}
initializeGTClient();
var _jsxFileName$1 = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-scoped-static/gt-next-app/scripts/Wrapper.tsx";
var locale = "en";
function Wrapper({ children }) {
	return jsxDEV(BrowserGTProvider, {
		locale,
		children: jsxDEV(AppProviders, {
			locale,
			children
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 14,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 13,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-scoped-static/gt-next-app/components/LocaleSwitcher.wrapper.tsx";
function Wrapped() {
	return jsxDEV(Wrapper, { children: jsxDEV(LocaleSwitcher, {}, void 0, false, {
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
