import { createContext as e, useEffect as t, useLayoutEffect as n, useMemo as r, useRef as i, useState as a } from "react";
import { Fragment as o, jsx as s } from "react/jsx-runtime";
var c = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports);
function l() {
	if (!(typeof window > "u")) {
		console.log("--- BROWSER: RootDocument mounted"), performance.mark("hydration_end");
		try {
			if (performance.getEntriesByName("hydration_start").length > 0) {
				performance.measure("hydration_duration", "hydration_start", "hydration_end"), console.log("--- BROWSER: hydration_duration measured");
				let e = performance.getEntriesByName("hydration_duration")[0]?.duration;
				e && console.log(`Hydration Duration: ${e.toFixed(2)}ms`);
			} else console.warn("--- BROWSER: hydration_start NOT FOUND");
		} catch (e) {
			console.warn("Could not measure hydration duration:", e);
		}
	}
}
function u(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function d({ children: e, locale: r }) {
	let [i] = a(() => typeof performance < "u" ? performance.now() : 0);
	return n(() => {
		u("AppRoot", i);
	}, [i]), t(() => {
		document.documentElement.lang = r;
	}, [r]), t(() => {
		l();
	}, []), s(o, { children: e });
}
function f() {
	return {
		projectId: process.env.NEXT_PUBLIC_GT_PROJECT_ID || process.env.GT_PROJECT_ID,
		apiKey: process.env.GT_API_KEY,
		devApiKey: process.env.NEXT_PUBLIC_GT_DEV_API_KEY || process.env.GT_DEV_API_KEY
	};
}
var p = class extends Error {
	constructor(e, t, n) {
		super(e), this.name = "ApiError", this.code = t, this.message = n;
	}
}, m = 6e4;
function h(e) {
	let t = e.trim();
	return t ? /[.!?)]$/.test(t) ? t : `${t}.` : "";
}
function g(e) {
	let t = e.trim(), n = t.length;
	for (; n > 0;) {
		let e = t[n - 1];
		if (e !== "." && e !== "!" && e !== "?") break;
		--n;
	}
	return t.slice(0, n);
}
function _(e) {
	if (!e) return "";
	let t = Array.isArray(e) ? e.join(", ") : e;
	return t.trim() ? h(`Details: ${t}`) : "";
}
function v(e) {
	if (e != null) return String(e);
}
function y({ source: e, severity: t, whatHappened: n, reassurance: r, why: i, fix: a, wayOut: o, details: s, docsUrl: c }) {
	let l = e ? t ? `${e} ${t}:` : `${e}:` : t ? `${t}:` : "", u = i ? `${g(n)} because ${g(i)}` : n, d = !!a && !!o && /^[a-z]/.test(g(o)), f = [
		u,
		r,
		d ? `${g(a)}, or ${g(o)}` : a,
		d ? void 0 : o,
		_(s)
	].filter((e) => !!e).map(h);
	c && f.push(`Learn more: ${c}`);
	let p = f.join(" ");
	return l ? `${l} ${p}` : p;
}
var b = "https://cdn.gtx.dev";
function x(e) {
	return typeof e == "object" && !!e && "error" in e && typeof e.error == "string";
}
function ee(e) {
	return x(e.error) || typeof e.error == "string";
}
function te(e) {
	if (e.data !== void 0) return e.data;
	if (e.response) {
		let t = x(e.error) ? e.error.error : typeof e.error == "string" ? e.error : e.response.statusText;
		throw new p(t, e.response.status, t);
	}
	throw e.error;
}
var ne = (e) => e.client.post({
	security: [{
		scheme: "bearer",
		type: "http"
	}],
	url: "/v2/translate",
	...e,
	headers: {
		"Content-Type": "application/json",
		...e.headers
	}
}), re = 3, ie = 500, ae = 6e4, oe = /* @__PURE__ */ new Set([
	"GET",
	"HEAD",
	"OPTIONS",
	"PUT",
	"DELETE"
]), se = 6e4;
function ce({ fetch: e = globalThis.fetch, timeoutMs: t = se } = {}) {
	return async (n, r) => {
		if (t === !1) return e(n, r);
		let i = new Request(n, r), a = new AbortController(), o = () => a.abort(i.signal.reason);
		i.signal.aborted ? o() : i.signal.addEventListener("abort", o, { once: !0 });
		let s = setTimeout(() => a.abort(), t);
		try {
			return await e(new Request(i, { signal: a.signal }));
		} catch (e) {
			throw a.signal.aborted && !i.signal.aborted ? Error(`Request timed out after ${t}ms`) : e;
		} finally {
			clearTimeout(s), i.signal.removeEventListener("abort", o);
		}
	};
}
var le = (e) => new Promise((t) => setTimeout(t, e));
function ue(e) {
	if (!e) return;
	let t = Number(e.split(",")[0].split(";")[0].trim());
	return Number.isFinite(t) && t >= 0 ? t * 1e3 : void 0;
}
function de(e) {
	let t = ue(e);
	if (t !== void 0) return t;
	if (!e) return;
	let n = Date.parse(e);
	return Number.isNaN(n) ? void 0 : Math.max(n - Date.now(), 0);
}
function fe(e, t, n) {
	return e?.status === 429 ? de(e.headers.get("Retry-After")) ?? ue(e.headers.get("RateLimit-Reset")) ?? ae : ie * (n === "linear" ? t + 1 : 2 ** t);
}
function pe({ fetch: e = globalThis.fetch, retryPolicy: t = "exponential" } = {}) {
	return async (n, r) => {
		let i = new Request(n, r), a = t === "none" ? 0 : re, o = oe.has(i.method);
		for (let n = 0; n <= a; n++) {
			let r;
			try {
				r = await e(i.clone());
			} catch (e) {
				if (i.signal.aborted || n === a || !o) throw e;
			}
			if (r && r.status !== 429 && (r.status < 500 || !o) || r && n === a) return r;
			if (i.signal.aborted) {
				if (r) return r;
				throw i.signal.reason;
			}
			r?.body?.cancel(), await le(fe(r, n, t));
		}
		throw Error("Max retries exceeded");
	};
}
var me = { bodySerializer: (e) => JSON.stringify(e, (e, t) => typeof t == "bigint" ? t.toString() : t) }, he = ({ onRequest: e, onSseError: t, onSseEvent: n, responseTransformer: r, responseValidator: i, sseDefaultRetryDelay: a, sseMaxRetryAttempts: o, sseMaxRetryDelay: s, sseSleepFn: c, url: l, ...u }) => {
	let d, f = c ?? ((e) => new Promise((t) => setTimeout(t, e)));
	return { stream: async function* () {
		let c = a ?? 3e3, p = 0, m = u.signal ?? new AbortController().signal;
		for (; !m.aborted;) {
			p++;
			let a = u.headers instanceof Headers ? u.headers : new Headers(u.headers);
			d !== void 0 && a.set("Last-Event-ID", d);
			try {
				let t = {
					redirect: "follow",
					...u,
					body: u.serializedBody,
					headers: a,
					signal: m
				}, o = new Request(l, t);
				e && (o = await e(l, t));
				let s = await (u.fetch ?? globalThis.fetch)(o);
				if (!s.ok) throw Error(`SSE failed: ${s.status} ${s.statusText}`);
				if (!s.body) throw Error("No body in SSE response");
				let f = s.body.pipeThrough(new TextDecoderStream()).getReader(), p = "", h = () => {
					try {
						f.cancel();
					} catch {}
				};
				m.addEventListener("abort", h);
				try {
					for (;;) {
						let { done: e, value: t } = await f.read();
						if (e) break;
						p += t;
						let a = p.split("\n\n");
						p = a.pop() ?? "";
						for (let e of a) {
							let t = e.split("\n"), a = [], o;
							for (let e of t) if (e.startsWith("data:")) a.push(e.replace(/^data:\s*/, ""));
							else if (e.startsWith("event:")) o = e.replace(/^event:\s*/, "");
							else if (e.startsWith("id:")) d = e.replace(/^id:\s*/, "");
							else if (e.startsWith("retry:")) {
								let t = Number.parseInt(e.replace(/^retry:\s*/, ""), 10);
								Number.isNaN(t) || (c = t);
							}
							let s, l = !1;
							if (a.length) {
								let e = a.join("\n");
								try {
									s = JSON.parse(e), l = !0;
								} catch {
									s = e;
								}
							}
							l && (i && await i(s), r && (s = await r(s))), n?.({
								data: s,
								event: o,
								id: d,
								retry: c
							}), a.length && (yield s);
						}
					}
				} finally {
					m.removeEventListener("abort", h), f.releaseLock();
				}
				break;
			} catch (e) {
				if (t?.(e), o !== void 0 && p >= o) break;
				await f(Math.min(c * 2 ** (p - 1), s ?? 3e4));
			}
		}
	}() };
}, ge = (e) => {
	switch (e) {
		case "label": return ".";
		case "matrix": return ";";
		case "simple": return ",";
		default: return "&";
	}
}, _e = (e) => {
	switch (e) {
		case "form": return ",";
		case "pipeDelimited": return "|";
		case "spaceDelimited": return "%20";
		default: return ",";
	}
}, ve = (e) => {
	switch (e) {
		case "label": return ".";
		case "matrix": return ";";
		case "simple": return ",";
		default: return "&";
	}
}, ye = ({ allowReserved: e, explode: t, name: n, style: r, value: i }) => {
	if (!t) {
		let t = (e ? i : i.map((e) => encodeURIComponent(e))).join(_e(r));
		switch (r) {
			case "label": return `.${t}`;
			case "matrix": return `;${n}=${t}`;
			case "simple": return t;
			default: return `${n}=${t}`;
		}
	}
	let a = ge(r), o = i.map((t) => r === "label" || r === "simple" ? e ? t : encodeURIComponent(t) : S({
		allowReserved: e,
		name: n,
		value: t
	})).join(a);
	return r === "label" || r === "matrix" ? a + o : o;
}, S = ({ allowReserved: e, name: t, value: n }) => {
	if (n == null) return "";
	if (typeof n == "object") throw Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
	return `${t}=${e ? n : encodeURIComponent(n)}`;
}, be = ({ allowReserved: e, explode: t, name: n, style: r, value: i, valueOnly: a }) => {
	if (i instanceof Date) return a ? i.toISOString() : `${n}=${i.toISOString()}`;
	if (r !== "deepObject" && !t) {
		let t = [];
		Object.entries(i).forEach(([n, r]) => {
			t = [
				...t,
				n,
				e ? r : encodeURIComponent(r)
			];
		});
		let a = t.join(",");
		switch (r) {
			case "form": return `${n}=${a}`;
			case "label": return `.${a}`;
			case "matrix": return `;${n}=${a}`;
			default: return a;
		}
	}
	let o = ve(r), s = Object.entries(i).map(([t, i]) => S({
		allowReserved: e,
		name: r === "deepObject" ? `${n}[${t}]` : t,
		value: i
	})).join(o);
	return r === "label" || r === "matrix" ? o + s : s;
}, xe = /\{[^{}]+\}/g, Se = ({ path: e, url: t }) => {
	let n = t, r = t.match(xe);
	if (r) for (let t of r) {
		let r = !1, i = t.substring(1, t.length - 1), a = "simple";
		i.endsWith("*") && (r = !0, i = i.substring(0, i.length - 1)), i.startsWith(".") ? (i = i.substring(1), a = "label") : i.startsWith(";") && (i = i.substring(1), a = "matrix");
		let o = e[i];
		if (o == null) continue;
		if (Array.isArray(o)) {
			n = n.replace(t, ye({
				explode: r,
				name: i,
				style: a,
				value: o
			}));
			continue;
		}
		if (typeof o == "object") {
			n = n.replace(t, be({
				explode: r,
				name: i,
				style: a,
				value: o,
				valueOnly: !0
			}));
			continue;
		}
		if (a === "matrix") {
			n = n.replace(t, `;${S({
				name: i,
				value: o
			})}`);
			continue;
		}
		let s = encodeURIComponent(a === "label" ? `.${o}` : o);
		n = n.replace(t, s);
	}
	return n;
}, Ce = ({ baseUrl: e, path: t, query: n, querySerializer: r, url: i }) => {
	let a = i.startsWith("/") ? i : `/${i}`, o = (e ?? "") + a;
	t && (o = Se({
		path: t,
		url: o
	}));
	let s = n ? r(n) : "";
	return s.startsWith("?") && (s = s.substring(1)), s && (o += `?${s}`), o;
};
function we(e) {
	let t = e.body !== void 0;
	if (t && e.bodySerializer) return "serializedBody" in e ? e.serializedBody !== void 0 && e.serializedBody !== "" ? e.serializedBody : null : e.body === "" ? null : e.body;
	if (t) return e.body;
}
var Te = async (e, t) => {
	let n = typeof t == "function" ? await t(e) : t;
	if (n) return e.scheme === "bearer" ? `Bearer ${n}` : e.scheme === "basic" ? `Basic ${btoa(n)}` : n;
}, Ee = ({ parameters: e = {}, ...t } = {}) => (n) => {
	let r = [];
	if (n && typeof n == "object") for (let i in n) {
		let a = n[i];
		if (a == null) continue;
		let o = e[i] || t;
		if (Array.isArray(a)) {
			let e = ye({
				allowReserved: o.allowReserved,
				explode: !0,
				name: i,
				style: "form",
				value: a,
				...o.array
			});
			e && r.push(e);
		} else if (typeof a == "object") {
			let e = be({
				allowReserved: o.allowReserved,
				explode: !0,
				name: i,
				style: "deepObject",
				value: a,
				...o.object
			});
			e && r.push(e);
		} else {
			let e = S({
				allowReserved: o.allowReserved,
				name: i,
				value: a
			});
			e && r.push(e);
		}
	}
	return r.join("&");
}, De = (e) => {
	if (!e) return "stream";
	let t = e.split(";")[0]?.trim();
	if (t) {
		if (t.startsWith("application/json") || t.endsWith("+json")) return "json";
		if (t === "multipart/form-data") return "formData";
		if ([
			"application/",
			"audio/",
			"image/",
			"video/"
		].some((e) => t.startsWith(e))) return "blob";
		if (t.startsWith("text/")) return "text";
	}
}, Oe = (e, t) => t ? !!(e.headers.has(t) || e.query?.[t] || e.headers.get("Cookie")?.includes(`${t}=`)) : !1, ke = async ({ security: e, ...t }) => {
	for (let n of e) {
		if (Oe(t, n.name)) continue;
		let e = await Te(n, t.auth);
		if (!e) continue;
		let r = n.name ?? "Authorization";
		switch (n.in) {
			case "query":
				t.query ||= {}, t.query[r] = e;
				break;
			case "cookie":
				t.headers.append("Cookie", `${r}=${e}`);
				break;
			default: t.headers.set(r, e);
		}
	}
}, Ae = (e) => Ce({
	baseUrl: e.baseUrl,
	path: e.path,
	query: e.query,
	querySerializer: typeof e.querySerializer == "function" ? e.querySerializer : Ee(e.querySerializer),
	url: e.url
}), je = (e, t) => {
	let n = {
		...e,
		...t
	};
	return n.baseUrl?.endsWith("/") && (n.baseUrl = n.baseUrl.substring(0, n.baseUrl.length - 1)), n.headers = Ne(e.headers, t.headers), n;
}, Me = (e) => {
	let t = [];
	return e.forEach((e, n) => {
		t.push([n, e]);
	}), t;
}, Ne = (...e) => {
	let t = new Headers();
	for (let n of e) {
		if (!n) continue;
		let e = n instanceof Headers ? Me(n) : Object.entries(n);
		for (let [n, r] of e) if (r === null) t.delete(n);
		else if (Array.isArray(r)) for (let e of r) t.append(n, e);
		else r !== void 0 && t.set(n, typeof r == "object" ? JSON.stringify(r) : r);
	}
	return t;
}, Pe = class {
	fns = [];
	clear() {
		this.fns = [];
	}
	eject(e) {
		let t = this.getInterceptorIndex(e);
		this.fns[t] && (this.fns[t] = null);
	}
	exists(e) {
		let t = this.getInterceptorIndex(e);
		return !!this.fns[t];
	}
	getInterceptorIndex(e) {
		return typeof e == "number" ? this.fns[e] ? e : -1 : this.fns.indexOf(e);
	}
	update(e, t) {
		let n = this.getInterceptorIndex(e);
		return this.fns[n] ? (this.fns[n] = t, e) : !1;
	}
	use(e) {
		return this.fns.push(e), this.fns.length - 1;
	}
}, Fe = () => ({
	error: new Pe(),
	request: new Pe(),
	response: new Pe()
}), Ie = Ee({
	allowReserved: !1,
	array: {
		explode: !0,
		style: "form"
	},
	object: {
		explode: !0,
		style: "deepObject"
	}
}), Le = { "Content-Type": "application/json" }, Re = (e = {}) => ({
	...me,
	headers: Le,
	parseAs: "auto",
	querySerializer: Ie,
	...e
}), ze = (e = {}) => {
	let t = je(Re(), e), n = () => ({ ...t }), r = (e) => (t = je(t, e), n()), i = Fe(), a = async (e) => {
		let n = {
			...t,
			...e,
			fetch: e.fetch ?? t.fetch ?? globalThis.fetch,
			headers: Ne(t.headers, e.headers),
			serializedBody: void 0
		};
		return n.security && await ke({
			...n,
			security: n.security
		}), n.requestValidator && await n.requestValidator(n), n.body !== void 0 && n.bodySerializer && (n.serializedBody = n.bodySerializer(n.body)), (n.body === void 0 || n.serializedBody === "") && n.headers.delete("Content-Type"), {
			opts: n,
			url: Ae(n)
		};
	}, o = async (e) => {
		let { opts: t, url: n } = await a(e), r = {
			redirect: "follow",
			...t,
			body: we(t)
		}, o = new Request(n, r);
		for (let e of i.request.fns) e && (o = await e(o, t));
		let s = t.fetch, c;
		try {
			c = await s(o);
		} catch (e) {
			let n = e;
			for (let r of i.error.fns) r && (n = await r(e, void 0, o, t));
			if (n ||= {}, t.throwOnError) throw n;
			return t.responseStyle === "data" ? void 0 : {
				error: n,
				request: o,
				response: void 0
			};
		}
		for (let e of i.response.fns) e && (c = await e(c, o, t));
		let l = {
			request: o,
			response: c
		};
		if (c.ok) {
			let e = (t.parseAs === "auto" ? De(c.headers.get("Content-Type")) : t.parseAs) ?? "json";
			if (c.status === 204 || c.headers.get("Content-Length") === "0") {
				let n;
				switch (e) {
					case "arrayBuffer":
					case "blob":
					case "text":
						n = await c[e]();
						break;
					case "formData":
						n = new FormData();
						break;
					case "stream":
						n = c.body;
						break;
					default: n = {};
				}
				return t.responseStyle === "data" ? n : {
					data: n,
					...l
				};
			}
			let n;
			switch (e) {
				case "arrayBuffer":
				case "blob":
				case "formData":
				case "json":
				case "text":
					n = await c[e]();
					break;
				case "stream": return t.responseStyle === "data" ? c.body : {
					data: c.body,
					...l
				};
			}
			return e === "json" && (t.responseValidator && await t.responseValidator(n), t.responseTransformer && (n = await t.responseTransformer(n))), t.responseStyle === "data" ? n : {
				data: n,
				...l
			};
		}
		let u = await c.text(), d;
		try {
			d = JSON.parse(u);
		} catch {}
		let f = d ?? u, p = f;
		for (let e of i.error.fns) e && (p = await e(f, c, o, t));
		if (p ||= {}, t.throwOnError) throw p;
		return t.responseStyle === "data" ? void 0 : {
			error: p,
			...l
		};
	}, s = (e) => (t) => o({
		...t,
		method: e
	}), c = (e) => async (t) => {
		let { opts: n, url: r } = await a(t);
		return he({
			...n,
			body: n.body,
			headers: n.headers,
			method: e,
			onRequest: async (e, t) => {
				let r = new Request(e, t);
				for (let e of i.request.fns) e && (r = await e(r, n));
				return r;
			},
			url: r
		});
	};
	return {
		buildUrl: Ae,
		connect: s("CONNECT"),
		delete: s("DELETE"),
		get: s("GET"),
		getConfig: n,
		head: s("HEAD"),
		interceptors: i,
		options: s("OPTIONS"),
		patch: s("PATCH"),
		post: s("POST"),
		put: s("PUT"),
		request: o,
		setConfig: r,
		sse: {
			connect: c("CONNECT"),
			delete: c("DELETE"),
			get: c("GET"),
			head: c("HEAD"),
			options: c("OPTIONS"),
			patch: c("PATCH"),
			post: c("POST"),
			put: c("PUT"),
			trace: c("TRACE")
		},
		trace: s("TRACE")
	};
};
function Be(e) {
	let t = new Headers({ "gt-api-version": e.apiVersion ?? "2026-03-06.v1" });
	return e.apiKey && t.set("Authorization", `Bearer ${e.apiKey}`), e.projectId && t.set("gt-project-id", e.projectId), ze({
		baseUrl: e.baseUrl,
		fetch: pe({
			fetch: ce({
				fetch: e.fetch,
				timeoutMs: e.timeoutMs
			}),
			retryPolicy: e.retryPolicy
		}),
		headers: t
	});
}
var C = {
	literal: 0,
	argument: 1,
	number: 2,
	date: 3,
	time: 4,
	select: 5,
	plural: 6,
	pound: 7,
	tag: 8
}, w = {
	number: 0,
	dateTime: 1
}, Ve = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/, He = /^@+(\+|#+)?[rs]?$/, Ue = /^(?:(?:\+|#+)[rs]?|[rs])$/, We = /(\*)(0+)|(#+)(0+)|(0+)/g, Ge = /[\t-\r \x85\u200E\u200F\u2028\u2029]+/u, Ke = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F|[abB]{1,5}|[hHkK]{1,2}|w{1,2}|W|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g, qe = {
	floor: "floor",
	ceiling: "ceil",
	down: "trunc",
	up: "expand",
	"half-even": "halfEven",
	"half-down": "halfTrunc",
	"half-up": "halfExpand"
}, Je = {
	h: "h12",
	H: "h23",
	K: "h11",
	k: "h24"
};
function Ye(e) {
	let t = e.split(Ge).filter(Boolean);
	if (t.length === 0) throw SyntaxError("Number skeleton cannot be empty.");
	return t.map((e) => {
		let [t, ...n] = e.split("/");
		if (n.some((e) => e.length === 0)) throw SyntaxError(`Invalid number skeleton token: ${e}.`);
		return {
			stem: t,
			options: n
		};
	});
}
function Xe(e) {
	let t = {};
	for (let n of e) {
		if (!n.stem) throw SyntaxError("Number skeleton token stem cannot be empty.");
		let e = n.options[0];
		switch (n.stem) {
			case "percent":
			case "%":
				t.style = "percent";
				continue;
			case "%x100":
				t.style = "percent", t.scale = 100;
				continue;
			case "currency":
				t.style = "currency", t.currency = e;
				continue;
			case "group-off":
			case ",_":
				t.useGrouping = !1;
				continue;
			case "group-auto":
			case "group-min2":
			case "group-on-aligned":
			case ",!": continue;
			case "precision-integer":
			case ".":
				t.maximumFractionDigits = 0;
				continue;
			case "measure-unit":
			case "unit":
				Ze(n), t.style = "unit", t.unit = e.replace(/^(.*?)-/, "");
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
			case "engineering":
				t.notation = n.stem;
				for (let e of n.options) Qe(t, e);
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
				t.scale = parseFloat(e ?? "");
				continue;
			case "integer-width":
				if (Ze(n), n.options.length > 1) throw RangeError("integer-width stems only accept a single optional option");
				et(t, e);
				continue;
		}
		if (n.stem.slice(0, 14) === "rounding-mode-") {
			let e = qe[n.stem.slice(14)];
			typeof e == "string" && (t.roundingMode = e);
			continue;
		}
		if (/^0+$/u.test(n.stem)) {
			t.minimumIntegerDigits = n.stem.length;
			continue;
		}
		if (!tt(t, n)) {
			if (He.test(n.stem)) {
				Object.assign(t, nt(n.stem));
				continue;
			}
			if (Ue.test(n.stem)) throw SyntaxError("Significant precision must start with @.");
			Qe(t, n.stem) || $e(t, n.stem);
		}
	}
	return t;
}
function Ze(e) {
	if (!e.options[0]) throw SyntaxError(`${e.stem} requires an option.`);
}
function Qe(e, t) {
	switch (t) {
		case "sign-auto": return e.signDisplay = "auto", !0;
		case "sign-accounting":
		case "()": return e.currencySign = "accounting", !0;
		case "sign-always":
		case "+!": return e.signDisplay = "always", !0;
		case "sign-accounting-always":
		case "()!": return e.signDisplay = "always", e.currencySign = "accounting", !0;
		case "sign-except-zero":
		case "+?": return e.signDisplay = "exceptZero", !0;
		case "sign-accounting-except-zero":
		case "()?": return e.signDisplay = "exceptZero", e.currencySign = "accounting", !0;
		case "sign-never":
		case "+_": return e.signDisplay = "never", !0;
		default: return !1;
	}
}
function $e(e, t) {
	if (t[0] !== "E") return !1;
	let n = /^(E{1,2})(\+!|\+\?)?(0+)$/u.exec(t);
	if (!n) throw SyntaxError("Malformed concise eng/scientific notation");
	return e.notation = n[1] === "EE" ? "engineering" : "scientific", n[2] && Qe(e, n[2]), e.minimumIntegerDigits = n[3].length, !0;
}
function et(e, t) {
	t.replace(We, (t, n, r, i, a, o) => {
		if (n && r) e.minimumIntegerDigits = r.length;
		else if (i && a) throw Error("We currently do not support maximum integer digits");
		else if (o) throw Error("We currently do not support exact integer digits");
		return "";
	});
}
function tt(e, t) {
	let n = Ve.exec(t.stem);
	if (!n) return !1;
	if (t.options.length > 1) throw SyntaxError("Fraction precision accepts at most one option.");
	let [, r, i, a, o, s] = n;
	return i === "*" ? e.minimumFractionDigits = r.length : a ? e.maximumFractionDigits = a.length : o && s ? (e.minimumFractionDigits = o.length, e.maximumFractionDigits = o.length + s.length) : (e.minimumFractionDigits = r.length, e.maximumFractionDigits = r.length), t.options[0] === "w" ? e.trailingZeroDisplay = "stripIfInteger" : t.options[0] && Object.assign(e, nt(t.options[0])), !0;
}
function nt(e) {
	let t = {};
	if (e.endsWith("r") && (t.roundingPriority = "morePrecision"), e.endsWith("s") && (t.roundingPriority = "lessPrecision"), Ue.test(e)) throw SyntaxError("Significant precision must start with @.");
	if (!He.test(e)) return t;
	let n = e.replace(/[rs]$/u, ""), r = n.match(/^@+/u)?.[0] ?? "", i = n.slice(r.length);
	return r && (t.minimumSignificantDigits = r.length), i === "+" || (i[0] === "#" ? t.maximumSignificantDigits = r.length + i.length : r && (t.maximumSignificantDigits = r.length)), t;
}
function rt(e) {
	let t = {};
	for (let [n] of e.matchAll(Ke)) {
		let e = n.length;
		switch (n[0]) {
			case "G":
				t.era = e === 4 ? "long" : e === 5 ? "narrow" : "short";
				break;
			case "y":
				t.year = e === 2 ? "2-digit" : "numeric";
				break;
			case "M":
			case "L":
				t.month = [
					"numeric",
					"2-digit",
					"short",
					"long",
					"narrow"
				][e - 1];
				break;
			case "d":
				t.day = e === 2 ? "2-digit" : "numeric";
				break;
			case "E":
				t.weekday = e === 4 ? "long" : e === 5 ? "narrow" : "short";
				break;
			case "e":
			case "c":
				if (e < 4) throw ot(n, "weekday");
				t.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][e - 4];
				break;
			case "a":
				t.hour12 = !0;
				break;
			case "h":
			case "H":
			case "K":
			case "k":
				t.hourCycle = Je[n[0]], t.hour = e === 2 ? "2-digit" : "numeric";
				break;
			case "m":
				t.minute = e === 2 ? "2-digit" : "numeric";
				break;
			case "s":
				t.second = e === 2 ? "2-digit" : "numeric";
				break;
			case "z":
				t.timeZoneName = e < 4 ? "short" : "long";
				break;
			default: throw ot(n, "date/time");
		}
	}
	return t;
}
function it(e, t) {
	if (!t || !/[jJ]/u.test(e)) return e;
	let n = at(t), r = "";
	for (let t = 0; t < e.length; t += 1) {
		let i = e[t];
		if (i === "j") {
			let a = 0;
			for (; e[t + 1] === i;) a += 1, t += 1;
			let o = 1 + (a & 1), s = n === "H" || n === "k" ? 0 : a < 2 ? 1 : 3 + (a >> 1);
			r = n.repeat(o) + r + "a".repeat(s);
		} else r += i === "J" ? "H" : i;
	}
	return r;
}
function at(e) {
	let t = e;
	switch (t.hourCycle ?? t.hourCycles?.[0] ?? new Intl.DateTimeFormat(e.toString(), { hour: "numeric" }).resolvedOptions().hourCycle) {
		case "h11": return "K";
		case "h12": return "h";
		case "h24": return "k";
		default: return "H";
	}
}
function ot(e, t) {
	return /* @__PURE__ */ RangeError(`Unsupported ${t} skeleton field: ${e}.`);
}
var st = /^[A-Za-z]$/u, ct = /^[-.0-9_A-Za-z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\u{EFFFF}]$/u;
function T(e) {
	return st.test(e ?? "");
}
function lt(e) {
	return ct.test(e);
}
var ut = /[\t-\r \x85\u200E\u200F\u2028\u2029]/u, dt = /[\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\x21-\x2F\x3A-\x40\x5B-\x5E\x60\x7B-\x7E\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E-\uFD3F\uFE45-\uFE46]/u, ft = class {
	constructor(e, t) {
		this.message = e, this.options = t, this.index = 0;
	}
	parse() {
		return this.parseMessage(!1, !1, !1);
	}
	parseMessage(e, t, n) {
		let r = [];
		for (; !this.atEnd();) {
			let i = this.current();
			if (i === "{") r.push(this.parseArgument(n));
			else if (i === "}" && e) break;
			else if (i === "#" && t) {
				let e = this.index;
				this.index += 1, r.push(this.withLocation({ type: C.pound }, e, this.index));
			} else if (i === "<" && !this.options.ignoreTag && this.peek() === "/") {
				if (n) break;
				this.fail("UNMATCHED_CLOSING_TAG");
			} else i === "<" && !this.options.ignoreTag && T(this.peek()) ? r.push(this.parseTag(t)) : r.push(this.parseLiteral(e, t));
		}
		return r;
	}
	parseLiteral(e, t) {
		let n = this.index, r = "";
		for (; !this.atEnd();) {
			let n = this.tryParseQuote(t);
			if (n !== null) {
				r += n;
				continue;
			}
			let i = this.current();
			if (i === "{" || i === "}" && e || i === "#" && t || i === "<" && !this.options.ignoreTag && (T(this.peek()) || this.peek() === "/")) break;
			r += i, this.index += i.length;
		}
		return this.withLocation({
			type: C.literal,
			value: r
		}, n, this.index);
	}
	tryParseQuote(e) {
		if (this.current() !== "'") return null;
		let t = this.peek();
		if (t === "'") return this.index += 2, "'";
		if (!"{}<>".includes(t) && (t !== "#" || !e)) return null;
		this.index += 1;
		let n = "";
		for (; !this.atEnd();) {
			let e = this.current();
			if (e === "'") {
				if (this.peek() === "'") {
					n += "'", this.index += 2;
					continue;
				}
				this.index += 1;
				break;
			}
			n += e, this.index += e.length;
		}
		return n;
	}
	parseTag(e) {
		let t = this.index;
		this.index += 1;
		let n = this.readTagName();
		if (this.skipSpace(), this.consume("/>")) return this.withLocation({
			type: C.literal,
			value: `<${n}/>`
		}, t, this.index);
		this.consume(">") || this.fail("INVALID_TAG", t);
		let r = this.parseMessage(!0, e, !0), i = this.index;
		this.consume("</") || this.fail("UNCLOSED_TAG", t);
		let a = this.index;
		return T(this.current()) || this.failAt("INVALID_TAG", i, this.index), this.readTagName() !== n && this.fail("UNMATCHED_CLOSING_TAG", a), this.skipSpace(), this.consume(">") || this.failAt("INVALID_TAG", i, this.index), this.withLocation({
			type: C.tag,
			value: n,
			children: r
		}, t, this.index);
	}
	readTagName() {
		let e = this.index;
		for (T(this.current()) || this.fail("INVALID_TAG", e), this.index += 1; !this.atEnd() && lt(this.current());) this.index += this.current().length;
		return this.message.slice(e, this.index);
	}
	parseArgument(e) {
		let t = this.index;
		this.index += 1, this.skipSpace(), this.atEnd() && this.fail("EXPECT_ARGUMENT_CLOSING_BRACE", t), this.current() === "}" && (this.index += 1, this.fail("EMPTY_ARGUMENT", t));
		let n = this.readIdentifier();
		if (n || this.fail("MALFORMED_ARGUMENT", t), this.skipSpace(), this.consume("}")) return this.withLocation({
			type: C.argument,
			value: n
		}, t, this.index);
		this.atEnd() && this.fail("EXPECT_ARGUMENT_CLOSING_BRACE", t), this.consume(",") || this.fail("MALFORMED_ARGUMENT", t), this.skipSpace(), this.atEnd() && this.fail("EXPECT_ARGUMENT_CLOSING_BRACE", t);
		let r = this.index, i = this.readIdentifier(), a = this.index;
		switch (i || this.fail("EXPECT_ARGUMENT_TYPE", r), i) {
			case "number":
			case "date":
			case "time": return this.parseSimpleArgument(t, n, i);
			case "plural":
			case "selectordinal":
			case "select": return this.parseChoiceArgument(t, n, i, a, e);
			default: this.fail("INVALID_ARGUMENT_TYPE", r);
		}
	}
	parseSimpleArgument(e, t, n) {
		this.skipSpace();
		let r = null, i, a = 0, o = 0;
		if (this.consume(",") && (this.skipSpace(), a = this.index, i = this.readSimpleStyle().replace(/\s+$/u, ""), i || this.fail("EXPECT_ARGUMENT_STYLE"), o = this.index), this.consume("}") || this.fail("EXPECT_ARGUMENT_CLOSING_BRACE", e), i) {
			if (i.slice(0, 2) === "::") {
				let t = i.slice(2).replace(/^\s+/u, ""), s = this.location(a, o);
				if (n === "number") {
					let e;
					try {
						e = Ye(t);
					} catch {
						this.failAt("INVALID_NUMBER_SKELETON", a, o);
					}
					r = {
						type: w.number,
						tokens: e,
						...s ? { location: s } : {},
						parsedOptions: this.options.shouldParseSkeletons ? Xe(e) : {}
					};
				} else {
					t || this.failAt("EXPECT_DATE_TIME_SKELETON", e, this.index);
					let n = it(t, this.options.locale);
					r = {
						type: w.dateTime,
						pattern: n,
						...s ? { location: s } : {},
						parsedOptions: this.options.shouldParseSkeletons ? rt(n) : {}
					};
				}
			} else r = i;
		}
		let s = n === "number" ? C.number : n === "date" ? C.date : C.time;
		return this.withLocation({
			type: s,
			value: t,
			style: r
		}, e, this.index);
	}
	readSimpleStyle() {
		let e = this.index;
		for (; !this.atEnd();) {
			let e = this.current();
			if (e === "'") {
				this.index += 1;
				let e = this.index;
				for (; !this.atEnd() && this.current() !== "'";) this.index += this.current().length;
				this.atEnd() && this.fail("UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e), this.index += 1;
			} else if (e === "}") break;
			else this.index += e.length;
		}
		return this.message.slice(e, this.index);
	}
	parseChoiceArgument(e, t, n, r, i) {
		this.skipSpace(), this.consume(",") || this.failAt("EXPECT_SELECT_ARGUMENT_OPTIONS", r, r), this.skipSpace();
		let a = 0, o = this.index, s = this.readIdentifier();
		n !== "select" && s === "offset" && (this.consume(":") || this.fail("EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"), this.skipSpace(), a = Number(this.readIntegerToken("EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE")), this.skipSpace(), s = this.readIdentifier());
		let c = Object.create(null), l = !1, u = o;
		for (; s || n !== "select" && this.current() === "=";) {
			!s && this.consume("=") && (s = `=${this.readIntegerToken("EXPECT_PLURAL_ARGUMENT_SELECTOR", "INVALID_PLURAL_ARGUMENT_SELECTOR")}`), s in c && this.failAt(n === "select" ? "DUPLICATE_SELECT_ARGUMENT_SELECTOR" : "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", u, this.index), this.skipSpace();
			let e = this.index;
			this.consume("{") || this.fail(n === "select" ? "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT" : "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT");
			let t = this.parseMessage(!0, n !== "select", i);
			this.consume("}") || this.fail("EXPECT_ARGUMENT_CLOSING_BRACE", e);
			let r = this.location(e, this.index);
			c[s] = {
				value: t,
				...r ? { location: r } : {}
			}, l = !0, this.skipSpace(), u = this.index, s = this.readIdentifier();
		}
		return l || this.fail(n === "select" ? "EXPECT_SELECT_ARGUMENT_SELECTOR" : "EXPECT_PLURAL_ARGUMENT_SELECTOR"), this.options.requiresOtherClause && !("other" in c) && this.fail("MISSING_OTHER_CLAUSE", u), this.consume("}") || this.fail("EXPECT_ARGUMENT_CLOSING_BRACE", e), Object.setPrototypeOf(c, Object.prototype), n === "select" ? this.withLocation({
			type: C.select,
			value: t,
			options: c
		}, e, this.index) : this.withLocation({
			type: C.plural,
			value: t,
			options: c,
			offset: a,
			pluralType: n === "plural" ? "cardinal" : "ordinal"
		}, e, this.index);
	}
	readIntegerToken(e, t) {
		let n = this.index;
		(this.current() === "+" || this.current() === "-") && (this.index += 1);
		let r = this.index;
		for (; /\d/u.test(this.current());) this.index += 1;
		r === this.index && this.fail(e, n);
		let i = this.message.slice(n, this.index);
		return Math.abs(Number(i)) > 9007199254740991 && this.fail(t, n), i;
	}
	readIdentifier() {
		let e = this.index;
		for (; !this.atEnd() && !dt.test(this.current());) this.index += this.current().length;
		return this.message.slice(e, this.index);
	}
	skipSpace() {
		for (; !this.atEnd() && ut.test(this.current());) this.index += this.current().length;
	}
	consume(e) {
		return this.message.slice(this.index, this.index + e.length) === e && (this.index += e.length, !0);
	}
	current() {
		return mt(this.message, this.index);
	}
	peek() {
		let e = this.current();
		return mt(this.message, this.index + e.length);
	}
	atEnd() {
		return this.index >= this.message.length;
	}
	withLocation(e, t, n) {
		let r = this.location(t, n);
		return r ? {
			...e,
			location: r
		} : e;
	}
	location(e, t) {
		if (this.options.captureLocation) return {
			start: this.position(e),
			end: this.position(t)
		};
	}
	position(e) {
		let t = this.positions ??= pt(this.message);
		return {
			offset: e,
			line: t[0][e],
			column: t[1][e]
		};
	}
	fail(e, t = this.index) {
		return this.failAt(e, t, Math.max(t, this.index));
	}
	failAt(e, t, n) {
		let r = SyntaxError(e);
		throw r.location = {
			start: this.position(t),
			end: this.position(n)
		}, r.originalMessage = this.message, r;
	}
};
function pt(e) {
	let t = new Uint32Array(e.length + 1), n = new Uint32Array(e.length + 1), r = 0, i = 1, a = 1;
	for (; r < e.length;) {
		let o = mt(e, r);
		t[r] = i, n[r] = a, o.length === 2 && (t[r + 1] = i, n[r + 1] = a + 1), r += o.length, o === "\n" ? (i += 1, a = 1) : a += 1;
	}
	return t[r] = i, n[r] = a, [t, n];
}
function mt(e, t) {
	if (t >= e.length) return "\0";
	let n = e.charCodeAt(t);
	if (n < 55296 || n > 56319 || t + 1 >= e.length) return e.charAt(t);
	let r = e.charCodeAt(t + 1);
	return r >= 56320 && r <= 57343 ? e.slice(t, t + 2) : e.charAt(t);
}
function ht(e, t = {}) {
	return new ft(e, {
		shouldParseSkeletons: !0,
		requiresOtherClause: !0,
		...t
	}).parse();
}
var gt = {
	integer: { maximumFractionDigits: 0 },
	currency: { style: "currency" },
	percent: { style: "percent" }
}, _t = {
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
}, vt = {
	hour: "numeric",
	minute: "numeric",
	second: "numeric",
	timeZoneName: "short"
}, yt = {
	short: {
		hour: "numeric",
		minute: "numeric"
	},
	medium: {
		hour: "numeric",
		minute: "numeric",
		second: "numeric"
	},
	long: vt,
	full: vt
};
function bt(e, t = "en", n = {}) {
	let r = xt(ht(e, { locale: jt(t) }), {
		message: e,
		locales: t,
		variables: n
	});
	return r.length === 1 ? r[0] : r.length ? r : "";
}
function xt(e, t, n) {
	let r = [], i = (e) => {
		let t = r[r.length - 1];
		typeof t == "string" && typeof e == "string" ? r[r.length - 1] = t + e : r.push(e);
	};
	for (let r of e) switch (r.type) {
		case C.literal:
			i(r.value);
			break;
		case C.pound:
			n !== void 0 && i(Ct(t).format(n));
			break;
		case C.argument: {
			let e = E(t.variables, r.value);
			i(typeof e == "string" || typeof e == "number" ? String(e) : e || "");
			break;
		}
		case C.number: {
			let e = E(t.variables, r.value), { scale: n, ...a } = typeof r.style == "string" ? gt[r.style] ?? {} : r.style?.type === w.number ? r.style.parsedOptions : {}, o = St(e, n);
			i(Ct(t, a).format(o));
			break;
		}
		case C.date:
		case C.time: {
			let e = E(t.variables, r.value), n = r.type === C.date ? _t : yt;
			i(wt(t, typeof r.style == "string" ? n[r.style] : r.style?.type === w.dateTime ? r.style.parsedOptions : r.type === C.time ? yt.medium : void 0).format(e));
			break;
		}
		case C.select: {
			let e = String(E(t.variables, r.value)), n = kt(r.options, e) ?? r.options.other;
			if (!n) throw At(r.value, e, r.options);
			xt(n.value, t).forEach(i);
			break;
		}
		case C.plural: {
			let e = E(t.variables, r.value), n = `=${String(e)}`, a = kt(r.options, n), o = typeof e == "bigint" ? e : Number(e), s = typeof o == "bigint" ? o - BigInt(r.offset) : o - r.offset;
			if (!a && Ot(r.options)) {
				let e = Tt(t, r.pluralType ?? "cardinal").select(Dt(s));
				a = kt(r.options, e);
			}
			if (a ??= r.options.other, !a) throw At(r.value, e, r.options);
			xt(a.value, t, s).forEach(i);
			break;
		}
		case C.tag: {
			let e = E(t.variables, r.value);
			if (typeof e != "function") throw TypeError(`The ICU tag variable "${r.value}" must be a function.`);
			let a = e(xt(r.children, t, n));
			Array.isArray(a) ? a.forEach(i) : i(a);
			break;
		}
	}
	return r;
}
function E(e, t) {
	if (!(t in e)) throw Error(`The ICU message variable "${t}" was not provided.`);
	return e[t];
}
function St(e, t) {
	if (!t) return e;
	if (typeof e == "bigint") {
		if (!Number.isInteger(t)) throw RangeError(`Cannot apply fractional scale ${t} to a bigint value.`);
		return e * BigInt(t);
	}
	return Number(e) * t;
}
function Ct(e, t = {}) {
	return Et(e.numberFormats ??= /* @__PURE__ */ new Map(), JSON.stringify(t), () => new Intl.NumberFormat(e.locales, t));
}
function wt(e, t) {
	return Et(e.dateTimeFormats ??= /* @__PURE__ */ new Map(), t ? JSON.stringify(t) : "", () => new Intl.DateTimeFormat(e.locales, t));
}
function Tt(e, t) {
	if (typeof Intl.PluralRules != "function") {
		let t = /* @__PURE__ */ Error("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n");
		throw t.code = "MISSING_INTL_API", t.originalMessage = e.message, t;
	}
	return Et(e.pluralRules ??= /* @__PURE__ */ new Map(), t, () => new Intl.PluralRules(e.locales, { type: t }));
}
function Et(e, t, n) {
	let r = e.get(t);
	if (r) return r;
	let i = n();
	return e.set(t, i), i;
}
function Dt(e) {
	let t = Number(e);
	if (typeof e == "bigint" && Math.abs(t) > 9007199254740991) throw RangeError(`Cannot select a plural category for bigint ${e} outside the safe integer range.`);
	return t;
}
function Ot(e) {
	return Object.keys(e).some((e) => e !== "other" && e[0] !== "=");
}
function kt(e, t) {
	return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0;
}
function At(e, t, n) {
	return /* @__PURE__ */ RangeError(`The ICU variable "${e}" value ${JSON.stringify(String(t))} did not match any of: ${Object.keys(n).join(", ")}.`);
}
function jt(e) {
	if (Intl.Locale === void 0) return;
	let t = Intl.NumberFormat.supportedLocalesOf(e)[0], n = typeof e == "string" ? e : e[0];
	return new Intl.Locale(t ?? n);
}
function Mt({ icuString: e, shouldVisit: t, visitor: n, options: { recurseIntoVisited: r = !0, ...i } }) {
	let a = ht(e, i);
	return o(a), a;
	function o(e) {
		e.map(s);
	}
	function s(e) {
		let i = !1;
		t(e) && (n(e), i = !0), (!i || r) && (e.type === C.select || e.type === C.plural ? Object.values(e.options).map((e) => e.value).map(o) : e.type === C.tag && o(e.children));
	}
}
var D = "_gt_";
RegExp(`^${D}\\d+$`);
var Nt = RegExp(`^${D}$`);
function Pt(e) {
	return e.type === C.select && Nt.test(e.value) && !!e.options.other && (e.options.other.value.length === 0 || e.options.other.value.length > 0 && e.options.other.value[0]?.type === C.literal);
}
function Ft(e) {
	let t = e;
	if (t && typeof t == "object" && typeof t.k == "string") {
		let e = Object.keys(t);
		if (e.length === 1 || e.length === 2 && (typeof t.i == "number" || typeof t.v == "string") || e.length === 3 && typeof t.v == "string" && typeof t.i == "number") return !0;
	}
	return !1;
}
var It = (e) => `generaltranslation Formatting Error: Invalid cutoff style: ${e}.`, Lt = "DEFAULT_TERMINATOR_KEY", Rt = {
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
		[Lt]: {
			terminator: "…",
			separator: void 0
		}
	},
	none: { [Lt]: {
		terminator: void 0,
		separator: void 0
	} }
}, zt = class e {
	static resolveLocale(e) {
		try {
			let t = e ? Array.isArray(e) ? e.map(String) : [String(e)] : ["en"], [n] = Intl.getCanonicalLocales(t);
			return n ?? "en";
		} catch {
			return "en";
		}
	}
	constructor(t, n = {}) {
		this.locale = e.resolveLocale(t);
		let r = n.style ?? "ellipsis";
		if (!Rt[r]) throw Error(It(r));
		let i = n.maxChars === void 0 ? void 0 : Rt[r][new Intl.Locale(this.locale).language] || Rt[r].DEFAULT_TERMINATOR_KEY, a = n.terminator ?? i?.terminator, o = a == null ? void 0 : n.separator ?? i?.separator;
		this.additionLength = (a?.length ?? 0) + (o?.length ?? 0), n.maxChars !== void 0 && Math.abs(n.maxChars) < this.additionLength && (a = void 0, o = void 0), this.options = {
			maxChars: n.maxChars,
			style: n.maxChars === void 0 ? void 0 : r,
			terminator: a,
			separator: o
		};
	}
	format(e) {
		return this.formatToParts(e).join("");
	}
	formatToParts(e) {
		let { maxChars: t, terminator: n, separator: r } = this.options, i = t === void 0 || Math.abs(t) >= e.length ? t : t >= 0 ? Math.max(0, t - this.additionLength) : Math.min(0, t + this.additionLength), a = i !== void 0 && i > -1 ? e.slice(0, i) : e.slice(i);
		return t == null || i == null || i === 0 || n == null || e.length <= Math.abs(t) ? [a] : i > 0 ? r == null ? [a, n] : [
			a,
			r,
			n
		] : r == null ? [n, a] : [
			n,
			r,
			a
		];
	}
	resolvedOptions() {
		return this.options;
	}
}, Bt = {
	Collator: Intl.Collator,
	DateTimeFormat: Intl.DateTimeFormat,
	DisplayNames: Intl.DisplayNames,
	ListFormat: Intl.ListFormat,
	Locale: Intl.Locale,
	NumberFormat: Intl.NumberFormat,
	PluralRules: Intl.PluralRules,
	RelativeTimeFormat: Intl.RelativeTimeFormat,
	Segmenter: Intl.Segmenter,
	CutoffFormat: zt
}, O = new class {
	constructor() {
		this.cache = {};
	}
	generateKey(e, t = {}) {
		return `${e ? Array.isArray(e) ? e.map((e) => String(e)).join(",") : String(e) : "undefined"}:${t ? JSON.stringify(t, Object.keys(t).sort()) : "{}"}`;
	}
	get(e, ...t) {
		let [n = "en", r = {}] = t, i = this.generateKey(n, r), a = this.cache[e];
		a === void 0 && (a = {}, this.cache[e] = a);
		let o = a[i];
		return o === void 0 && (o = new Bt[e](...t), a[i] = o), o;
	}
}();
function Vt(e) {
	if (!e.includes("_gt_")) return e;
	let t = [];
	function n(e) {
		t.push({
			start: e.location?.start.offset ?? 0,
			end: e.location?.end.offset ?? 0,
			otherStart: e.options.other.location?.start.offset ?? 0,
			otherEnd: e.options.other.location?.end.offset ?? 0
		});
	}
	Mt({
		icuString: e,
		shouldVisit: Pt,
		visitor: n,
		options: {
			recurseIntoVisited: !1,
			captureLocation: !0
		}
	});
	let r = [], i = 0;
	for (let n = 0; n < t.length; n++) {
		let { start: a, end: o, otherStart: s, otherEnd: c } = t[n];
		r.push(e.slice(i, a)), r.push(e.slice(a, a + D.length + 1)), r.push(String(n + 1)), r.push(e.slice(a + D.length + 1, s)), r.push("{}"), r.push(e.slice(c, o)), i = o;
	}
	return r.push(e.slice(i, e.length)), r.join("");
}
RegExp(`${D}\\d+`);
function Ht(e) {
	return y({
		source: "gt-next",
		...e
	});
}
var Ut = () => Ht({
	severity: "Error",
	whatHappened: "loadTranslations() was found during the build but could not be resolved at runtime",
	fix: "Export a loadTranslations() function from the configured file"
}), Wt = c(((e) => {
	throw Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Error("Something has gone seriously wrong if you're seeing this error message. Check docs.generaltranslation.com for the latest documentation and make sure you've got the library configured properly.");
})), k = void 0;
function Gt() {
	if (k !== void 0) return k;
	if (process.env._GENERALTRANSLATION_LOCAL_TRANSLATION_ENABLED !== "true") return;
	let e;
	try {
		e = Wt();
	} catch {}
	if (k = e?.default || e?.loadTranslations, !k) {
		k = async (e) => void 0;
		let e = Ut();
		if (process.env.NODE_ENV !== "production") throw Error(e);
		console.error(e);
	}
	return k;
}
function Kt() {
	let e = JSON.parse(process.env.NEXT_PUBLIC_GENERALTRANSLATION_I18N_CONFIG_PARAMS || "{}"), { projectId: t, devApiKey: n, apiKey: r } = f(), i = {
		defaultLocale: e.defaultLocale,
		locales: e.locales,
		customMapping: e.customMapping,
		runtimeUrl: e.runtimeUrl,
		projectId: t,
		devApiKey: n,
		apiKey: r,
		cacheUrl: e.cacheUrl,
		_disableDevHotReload: e._disableDevHotReload,
		_tagIds: e._tagIds,
		localeCookieName: e.headersAndCookies?.localeCookieName,
		enableI18nCookieName: e.headersAndCookies?.enableI18nCookieName
	}, a = e.renderSettings?.timeout;
	return {
		i18nConfigParams: i,
		nextI18nCacheParams: {
			apiKey: r,
			devApiKey: n,
			projectId: t,
			runtimeUrl: e.runtimeUrl,
			cacheUrl: e.cacheUrl,
			_versionId: e._versionId,
			cacheExpiryTime: e.cacheExpiryTime,
			batchConfig: {
				maxConcurrentRequests: e.maxConcurrentRequests,
				maxBatchSize: e.maxBatchSize,
				batchInterval: e.batchInterval
			},
			runtimeTranslation: {
				timeout: a,
				metadata: {
					sourceLocale: e.defaultLocale,
					timeout: a,
					projectId: t,
					publish: !0,
					fast: !0
				}
			},
			loadTranslations: qt()
		}
	};
}
function qt() {
	if (!(typeof window < "u")) return Gt();
}
function Jt(e, t = "en", n = {}) {
	return bt(e, t, n)?.toString() ?? "";
}
function Yt({ value: e, locales: t = ["en"], options: n = {} }) {
	return O.get("NumberFormat", t, {
		numberingSystem: "latn",
		...n
	}).format(e);
}
function Xt({ value: e, locales: t = ["en"], options: n = {} }) {
	return O.get("DateTimeFormat", t, {
		calendar: "gregory",
		numberingSystem: "latn",
		...n
	}).format(e);
}
function Zt({ value: e, locales: t = ["en"], currency: n = "USD", options: r = {} }) {
	return O.get("NumberFormat", t, {
		style: "currency",
		currency: n,
		numberingSystem: "latn",
		...r
	}).format(e);
}
function Qt({ value: e, locales: t = ["en"], options: n = {} }) {
	return O.get("ListFormat", t, {
		type: "conjunction",
		style: "long",
		...n
	}).format(e.map(String));
}
function $t({ value: e, locales: t = ["en"], options: n = {} }) {
	let r = O.get("ListFormat", t, {
		type: "conjunction",
		style: "long",
		...n
	}).formatToParts(e.map(() => "1")), i = 0;
	return r.map((t) => t.type === "element" ? e[i++] : t.value);
}
function en(e, t) {
	let n = t.getTime(), r = e.getTime() - n, i = Math.abs(r), a = r < 0 ? -1 : 1, o = Math.floor(i / 1e3), s = Math.floor(i / 6e4), c = Math.floor(i / 36e5), l = Math.floor(i / 864e5), u = Math.floor(i / 6048e5), d = Math.floor(i / 2592e6), f = Math.floor(i / 31536e6);
	return o < 60 ? {
		value: a * o,
		unit: "second"
	} : s < 60 ? {
		value: a * s,
		unit: "minute"
	} : c < 24 ? {
		value: a * c,
		unit: "hour"
	} : l < 7 ? {
		value: a * l,
		unit: "day"
	} : l < 28 || d < 1 ? {
		value: a * u,
		unit: "week"
	} : d < 12 || f < 1 ? {
		value: a * d,
		unit: "month"
	} : {
		value: a * f,
		unit: "year"
	};
}
function tn({ value: e, unit: t, locales: n = ["en"], options: r = {} }) {
	return O.get("RelativeTimeFormat", n, {
		style: "long",
		numeric: "auto",
		...r
	}).format(e, t);
}
function nn(e) {
	try {
		return O.get("Locale", e).language;
	} catch {
		return;
	}
}
function rn(...e) {
	try {
		let t = e.flat().map((e) => O.get("Locale", e).language);
		return t.every((e) => e === t[0]);
	} catch (e) {
		return console.error(e), !1;
	}
}
function an(e) {
	return typeof e == "object" && !!e;
}
var on = (e, t, n) => {
	let r = e?.[t];
	if (r) return typeof r == "string" ? n === "name" ? r : void 0 : r[n];
}, A = (e, t) => {
	let n = e?.[t];
	return an(n) && typeof n.code == "string" ? n.code : void 0;
}, sn = /* @__PURE__ */ new Set([
	"Cham",
	"Jamo",
	"Kawi",
	"Lisu",
	"Toto",
	"Thai"
]), cn = (e) => e >= "qaa" && e <= "qtz", j = (e, t) => {
	e = A(t, e) || e;
	try {
		let { language: t, region: n, script: r } = O.get("Locale", e), i = 1 + Number(!!n) + Number(!!r);
		return !(e.split("-").length !== i || O.get("DisplayNames", ["en"], { type: "language" }).of(t) === t && !cn(t) || n && O.get("DisplayNames", ["en"], { type: "region" }).of(n) === n || r && O.get("DisplayNames", ["en"], { type: "script" }).of(r) === r && !sn.has(r));
	} catch {
		return !1;
	}
}, M = (e) => {
	try {
		return Intl.getCanonicalLocales(e)[0];
	} catch {
		return e;
	}
};
function N(e, t) {
	let n = !0, r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Map();
	for (let a of e) {
		if (!j(a, t)) {
			n = !1;
			continue;
		}
		let e = nn(a);
		if (e === void 0) continue;
		r.add(e);
		let o = i.get(e);
		o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(e, o)), o.add(M(a));
	}
	return {
		allValid: n,
		languages: r,
		byLanguage: i
	};
}
function ln(...e) {
	try {
		let t = e.flat().map((e) => O.get("Locale", M(e))), [n] = t, r = new Set(t.map(({ region: e }) => e).filter(Boolean)), i = new Set(t.map(({ script: e }) => e).filter(Boolean));
		return t.every(({ language: e }) => e === n?.language) && r.size <= 1 && i.size <= 1;
	} catch (e) {
		return console.error(e), !1;
	}
}
function un(e, t, n, r) {
	if (n && !n.allValid || !j(e, r) || !j(t, r) || ln(e, t)) return !1;
	if (!n) return !0;
	let i = nn(t);
	return i !== void 0 && n.languages.has(i);
}
function dn(e, t, n, r) {
	return un(e, t, n ? N(n, r) : void 0, r);
}
function fn(e) {
	try {
		let t = O.get("Locale", e), n = t.language, r = t.region || "", i = t.script || "";
		if (!r || !i) {
			let e = t.maximize();
			r ||= e.region || "", i ||= e.script || "";
		}
		return {
			languageCode: n,
			regionCode: r,
			scriptCode: i,
			minimizedCode: t.minimize().toString()
		};
	} catch {
		let t = j(e) ? M(e) : e, n = t.split("-");
		return {
			languageCode: n[0] || t,
			regionCode: n.length > 2 ? n[2] : n[1] || "",
			scriptCode: n[3] || "",
			minimizedCode: t
		};
	}
}
function pn(e, t) {
	if (t.has(e)) return e;
	let { languageCode: n, regionCode: r, scriptCode: i, minimizedCode: a } = fn(e), o = `${n}-${r}`;
	if (t.has(o)) return o;
	let s = `${n}-${i}`;
	if (t.has(s)) return s;
	if (t.has(a)) return a;
}
function mn(e, t, n) {
	let r = Array.isArray(e) ? e : [e];
	for (let e of r) {
		if (!j(e, n)) continue;
		let r = M(e), i = nn(r);
		if (i === void 0) continue;
		let a = t.byLanguage.get(i);
		if (a === void 0) continue;
		let o = pn(r, a) || pn(i, a);
		if (o) return o;
	}
}
function hn(e, t, n) {
	return mn(e, N(t, n), n);
}
function P(e, t) {
	let n = A(t, e);
	return n && j(n) ? n : e;
}
function gn(e, t) {
	let n = e;
	e = P(e, t);
	try {
		let r = M(e), i = O.get("Locale", r), { language: a, region: o } = i;
		if (t) for (let i of [
			n,
			e,
			r,
			a
		]) {
			let e = on(t, i, "emoji");
			if (e) return e;
		}
		let s = o && wn(o);
		if (s) return s;
		let c = i.maximize();
		return yn[c.language] || Cn(c.region || "");
	} catch {
		return vn;
	}
}
var F = "🌍", _n = "🌏", vn = F, yn = {
	ca: F,
	eu: F,
	ku: F,
	bo: _n,
	ug: _n,
	gd: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
	cy: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
	gv: "🇮🇲",
	grc: "🏺"
}, bn = {
	EU: "🇪🇺",
	419: "🌎"
}, xn = /* @__PURE__ */ new Set(/* @__PURE__ */ "AF.AX.AL.DZ.AS.AD.AO.AI.AQ.AG.AR.AM.AW.AU.AT.AZ.BS.BH.BD.BB.BY.BE.BZ.BJ.BM.BT.BO.BQ.BA.BW.BV.BR.IO.BN.BG.BF.BI.CV.KH.CM.CA.KY.CF.TD.CL.CN.CX.CC.CO.KM.CD.CG.CK.CR.CI.HR.CU.CW.CY.CZ.DK.DJ.DM.DO.EC.EG.SV.GQ.ER.EE.SZ.ET.FK.FO.FJ.FI.FR.GF.PF.TF.GA.GM.GE.DE.GH.GI.GR.GL.GD.GP.GU.GT.GG.GN.GW.GY.HT.HM.VA.HN.HK.HU.IS.IN.ID.IR.IQ.IE.IM.IL.IT.JM.JP.JE.JO.KZ.KE.KI.KP.KR.KW.KG.LA.LV.LB.LS.LR.LY.LI.LT.LU.MO.MG.MW.MY.MV.ML.MT.MH.MQ.MR.MU.YT.MX.FM.MD.MC.MN.ME.MS.MA.MZ.MM.NA.NR.NP.NL.NC.NZ.NI.NE.NG.NU.NF.MK.MP.NO.OM.PK.PW.PS.PA.PG.PY.PE.PH.PN.PL.PT.PR.QA.RE.RO.RU.RW.BL.SH.KN.LC.MF.PM.VC.WS.SM.ST.SA.SN.RS.SC.SL.SG.SX.SK.SI.SB.SO.ZA.GS.SS.ES.LK.SD.SR.SJ.SE.CH.SY.TW.TJ.TZ.TH.TL.TG.TK.TO.TT.TN.TR.TM.TC.TV.UG.UA.AE.GB.US.UM.UY.UZ.VU.VE.VN.VG.VI.WF.EH.YE.ZM.ZW".split(".")), Sn = 127397;
function Cn(e) {
	return wn(e) || "🌍";
}
function wn(e) {
	let t = e.toUpperCase(), n = bn[t];
	if (n) return n;
	if (xn.has(t)) return String.fromCodePoint(t.charCodeAt(0) + Sn, t.charCodeAt(1) + Sn);
}
function Tn(e, t) {
	if (!t) return;
	let n = {};
	for (let r of e) {
		let e = t[r];
		e && (typeof e == "string" ? n.name ||= e : n = {
			...e,
			...n
		});
	}
	return n;
}
function En(e, t = "en", n) {
	let r = e;
	e = P(e, n), t ||= "en";
	try {
		let i = M(e), a = O.get("Locale", e), o = a.language, s = Tn([
			r,
			e,
			i,
			o
		], n), c = a.region, l = a.maximize(), u = l.toString(), d = a.region || s?.regionCode || l.region || "", f = a.script || s?.scriptCode || l.script || "", p = a.minimize().toString(), m = [
			t,
			e,
			"en"
		], h = [
			e,
			t,
			"en"
		], g = O.get("DisplayNames", m, { type: "language" }), _ = O.get("DisplayNames", h, { type: "language" }), v = s?.name, y = s?.nativeName || s?.name, b = v || g.of(e) || e, x = y || _.of(e) || e, ee = s?.maximizedName || v || g.of(u) || e, te = s?.nativeMaximizedName || y || _.of(u) || e, ne = s?.minimizedName || v || g.of(p) || e, re = s?.nativeMinimizedName || y || _.of(p) || e, ie = s?.languageName || v || g.of(o) || e, ae = s?.nativeLanguageName || y || _.of(o) || e, oe = s?.nameWithRegionCode || (c ? `${ie} (${c})` : b), se = s?.nativeNameWithRegionCode || (c ? `${ae} (${c})` : x) || oe, ce = O.get("DisplayNames", m, { type: "region" }), le = O.get("DisplayNames", h, { type: "region" }), ue = s?.regionName || (d ? ce.of(d) : "") || "", de = s?.nativeRegionName || (d ? le.of(d) : "") || "", fe = O.get("DisplayNames", m, { type: "script" }), pe = O.get("DisplayNames", h, { type: "script" });
		return {
			code: i,
			name: b,
			nativeName: x,
			maximizedCode: u,
			maximizedName: ee,
			nativeMaximizedName: te,
			minimizedCode: p,
			minimizedName: ne,
			nativeMinimizedName: re,
			languageCode: o,
			languageName: ie,
			nativeLanguageName: ae,
			nameWithRegionCode: oe,
			nativeNameWithRegionCode: se,
			regionCode: d,
			regionName: ue,
			nativeRegionName: de,
			scriptCode: f,
			scriptName: s?.scriptName || (f ? fe.of(f) : "") || "",
			nativeScriptName: s?.nativeScriptName || (f ? pe.of(f) : "") || "",
			emoji: s?.emoji || gn(i, n)
		};
	} catch {
		let t = j(e) ? M(e) : e, r = t.split("-"), i = r[0] || t, a = r.length > 2 ? r[2] : r[1] || "", o = r[3] || "", s = Tn([t, i], n);
		t = s?.code || t;
		let c = s?.name || t, l = s?.nativeName || c, u = s?.maximizedCode || t, d = s?.maximizedName || c, f = s?.nativeMaximizedName || l, p = s?.minimizedCode || t, m = s?.minimizedName || c, h = s?.nativeMinimizedName || l;
		i = s?.languageCode || i;
		let g = s?.languageName || c, _ = s?.nativeLanguageName || l;
		a = s?.regionCode || a;
		let v = s?.regionName || "", y = s?.nativeRegionName || "";
		o = s?.scriptCode || o;
		let b = s?.scriptName || "", x = s?.nativeScriptName || "", ee = s?.nameWithRegionCode || (v ? `${g} (${v})` : c), te = s?.nativeNameWithRegionCode || (y ? `${_} (${y})` : l), ne = s?.emoji || "🌍";
		return {
			code: t,
			name: c,
			nativeName: l,
			maximizedCode: u,
			maximizedName: d,
			nativeMaximizedName: f,
			minimizedCode: p,
			minimizedName: m,
			nativeMinimizedName: h,
			languageCode: i,
			languageName: g,
			nativeLanguageName: _,
			nameWithRegionCode: ee,
			nativeNameWithRegionCode: te,
			regionCode: a,
			regionName: v,
			nativeRegionName: y,
			scriptCode: o,
			scriptName: b,
			nativeScriptName: x,
			emoji: ne
		};
	}
}
function Dn(e, t = "en", n) {
	let r = e;
	e = P(e, n), t ||= "en";
	try {
		let i = M(e);
		if (n) for (let t of [
			r,
			e,
			i,
			O.get("Locale", i).language
		]) {
			let e = on(n, t, "name");
			if (e) return e;
		}
		return O.get("DisplayNames", [
			t,
			i,
			"en"
		], { type: "language" }).of(i) || "";
	} catch {
		return "";
	}
}
function On(e) {
	try {
		let t = jn(O.get("Locale", e));
		if (t) return t;
	} catch {}
	let { scriptCode: t, languageCode: n } = En(e);
	return t ? kn.has(t.toLowerCase()) ? "rtl" : "ltr" : n && An.has(n.toLowerCase()) ? "rtl" : "ltr";
}
var kn = /* @__PURE__ */ new Set([
	"arab",
	"adlm",
	"hebr",
	"nkoo",
	"rohg",
	"samr",
	"syrc",
	"thaa",
	"yezi"
]), An = /* @__PURE__ */ new Set([
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
function jn(e) {
	let t = "textInfo" in e && typeof e.textInfo == "object" && e.textInfo !== null && "direction" in e.textInfo ? e.textInfo.direction : void 0;
	return t === "rtl" || t === "ltr" ? t : void 0;
}
function Mn(e, t) {
	try {
		let { language: n, region: r, script: i } = O.get("Locale", M(e)), { language: a, region: o, script: s } = O.get("Locale", M(t));
		return !(n !== a || r && r !== o || i && i !== s);
	} catch (e) {
		return console.error(e), !1;
	}
}
function Nn(e, t) {
	return t ? Object.keys(t).find((n) => A(t, n) === e) ?? e : e;
}
var Pn = class {
	getResolutionScope() {
		if (this.resolutionScope && this.isResolutionScopeCurrent(this.resolutionScope)) return this.resolutionScope;
		let e = this.buildResolutionScope(this.locales);
		return Object.defineProperty(this, "resolutionScope", {
			configurable: !0,
			value: e,
			writable: !0
		}), e;
	}
	isResolutionScopeCurrent(e) {
		if (e.approvedLocalePairs.length !== this.locales.length) return !1;
		for (let t = 0; t < this.locales.length; t++) {
			let n = this.locales[t], r = e.approvedLocalePairs[t];
			if (r.locale !== n || r.canonicalLocale !== this.resolveCanonicalLocale(n) || e.canonicalMappingCodes[t] !== A(this.customMapping, r.canonicalLocale)) return !1;
		}
		return !0;
	}
	buildResolutionScope(e) {
		let t = e.map((e) => ({
			locale: e,
			canonicalLocale: this.resolveCanonicalLocale(e)
		}));
		return {
			approvedLocalePairs: t,
			canonicalMappingCodes: t.map(({ canonicalLocale: e }) => A(this.customMapping, e)),
			approved: N(t.map(({ canonicalLocale: e }) => e), this.customMapping)
		};
	}
	constructor({ defaultLocale: e = "en", locales: t = [], customMapping: n } = {}) {
		this.defaultLocale = e, this.locales = t, this.customMapping = n;
	}
	getFormattingLocales(e, t) {
		return (t === void 0 ? [
			e,
			this.defaultLocale,
			"en"
		] : Array.isArray(t) ? t : [t]).filter((e) => !!e).map((e) => this.resolveCanonicalLocale(e));
	}
	formatNum(e, t, n = {}) {
		let { locales: r, ...i } = n;
		return Yt({
			value: e,
			locales: this.getFormattingLocales(t, r),
			options: i
		});
	}
	formatDateTime(e, t, n = {}) {
		let { locales: r, ...i } = n;
		return Xt({
			value: e,
			locales: this.getFormattingLocales(t, r),
			options: i
		});
	}
	formatCurrency(e, t, n, r = {}) {
		let { locales: i, ...a } = r;
		return Zt({
			value: e,
			currency: t,
			locales: this.getFormattingLocales(n, i),
			options: a
		});
	}
	formatRelativeTime(e, t, n, r = {}) {
		let { locales: i, ...a } = r;
		return tn({
			value: e,
			unit: t,
			locales: this.getFormattingLocales(n, i),
			options: a
		});
	}
	formatRelativeTimeFromDate(e, t, n = {}) {
		let { locales: r, baseDate: i, ...a } = n, { value: o, unit: s } = en(e, i ?? /* @__PURE__ */ new Date());
		return tn({
			value: o,
			unit: s,
			locales: this.getFormattingLocales(t, r),
			options: a
		});
	}
	formatCutoff(e, t, n = {}) {
		let { locales: r, ...i } = n;
		return O.get("CutoffFormat", this.getFormattingLocales(t, r), i).format(e);
	}
	formatMessage(e, t, n = {}) {
		let { locales: r, variables: i, dataFormat: a } = n;
		return a === "STRING" ? e : Jt(e, this.getFormattingLocales(t, r), i);
	}
	formatList(e, t, n = {}) {
		let { locales: r, ...i } = n;
		return Qt({
			value: e,
			locales: this.getFormattingLocales(t, r),
			options: i
		});
	}
	formatListToParts(e, t, n = {}) {
		let { locales: r, ...i } = n;
		return $t({
			value: e,
			locales: this.getFormattingLocales(t, r),
			options: i
		});
	}
	getLocaleName(e) {
		return Dn(e, this.defaultLocale, this.customMapping);
	}
	getLocaleEmoji(e) {
		return gn(e, this.customMapping);
	}
	getLocaleProperties(e) {
		return En(e, this.defaultLocale, this.customMapping);
	}
	requiresTranslation(e, t = this.defaultLocale, n = this.locales.length ? this.locales : void 0) {
		let r = n ? n === this.locales ? this.getResolutionScope().approved : N(n.map((e) => this.resolveCanonicalLocale(e)), this.customMapping) : void 0;
		return un(this.resolveCanonicalLocale(t), this.resolveCanonicalLocale(e), r, this.customMapping);
	}
	determineLocale(e, t = this.locales) {
		let { approvedLocalePairs: n, approved: r } = t === this.locales ? this.getResolutionScope() : this.buildResolutionScope(t), i = mn(Array.isArray(e) ? e.map((e) => this.resolveCanonicalLocale(e)) : this.resolveCanonicalLocale(e), r, this.customMapping);
		if (i) return n.find(({ canonicalLocale: e }) => e === i)?.locale ?? this.resolveAliasLocale(i);
	}
	getLocaleDirection(e) {
		return On(this.resolveCanonicalLocale(e));
	}
	isValidLocale(e) {
		return j(e, this.customMapping);
	}
	resolveCanonicalLocale(e) {
		return P(e, this.customMapping);
	}
	resolveAliasLocale(e) {
		return Nn(e, this.customMapping);
	}
	standardizeLocale(e) {
		return M(e);
	}
	isSameDialect(...e) {
		return ln(...e.map((e) => Array.isArray(e) ? e.map((e) => this.resolveCanonicalLocale(e)) : this.resolveCanonicalLocale(e)));
	}
	isSameLanguage(...e) {
		return rn(...e.map((e) => Array.isArray(e) ? e.map((e) => this.resolveCanonicalLocale(e)) : this.resolveCanonicalLocale(e)));
	}
	isSupersetLocale(e, t) {
		return Mn(this.resolveCanonicalLocale(e), this.resolveCanonicalLocale(t));
	}
};
function Fn(e, t = "en", n) {
	t ||= "en";
	let r = e, i = vn;
	try {
		r = O.get("DisplayNames", [t, "en"], { type: "region" }).of(e) || e, i = Cn(e);
	} catch {}
	return {
		code: e,
		name: r,
		emoji: i,
		...n?.[e]
	};
}
function I(e, t) {
	return j(e, t);
}
function In(e, t) {
	return P(e, t);
}
function Ln(e) {
	return M(e);
}
function Rn(e, t, n, r) {
	return dn(e, t, n, r);
}
function zn(e, t = [], n = void 0) {
	return hn(e, t, n);
}
function Bn(e, t) {
	return Nn(e, t);
}
function Vn(e) {
	return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in e && e.BYTES_PER_ELEMENT === 1;
}
function Hn(e, t, n = "") {
	let r = Vn(e), i = e?.length, a = t !== void 0;
	if (!r || a && i !== t) {
		let o = n && `"${n}" `, s = a ? ` of length ${t}` : "", c = r ? `length=${i}` : `type=${typeof e}`, l = o + "expected Uint8Array" + s + ", got " + c;
		throw r ? RangeError(l) : TypeError(l);
	}
	return e;
}
function Un(e, t = !0) {
	if (e.destroyed) throw Error("Hash instance has been destroyed");
	if (t && e.finished) throw Error("Hash#digest() has already been called");
}
function Wn(e, t) {
	Hn(e, void 0, "digestInto() output");
	let n = t.outputLen;
	if (e.length < n) throw RangeError("\"digestInto() output\" expected to be of length >=" + n);
}
function Gn(...e) {
	for (let t = 0; t < e.length; t++) e[t].fill(0);
}
function Kn(e) {
	return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function L(e, t) {
	return e << 32 - t | e >>> t;
}
var qn = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", Jn = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function Yn(e) {
	if (Hn(e), qn) return e.toHex();
	let t = "";
	for (let n = 0; n < e.length; n++) t += Jn[e[n]];
	return t;
}
function Xn(e) {
	if (typeof e != "string") throw TypeError("string expected");
	return new Uint8Array(new TextEncoder().encode(e));
}
function Zn(e, t = {}) {
	let n = (t, n) => e(n).update(t).digest(), r = e(void 0);
	return n.outputLen = r.outputLen, n.blockLen = r.blockLen, n.canXOF = r.canXOF, n.create = (t) => e(t), Object.assign(n, t), Object.freeze(n);
}
var Qn = (e) => ({ oid: Uint8Array.from([
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
function $n(e, t, n) {
	return e & t ^ ~e & n;
}
function er(e, t, n) {
	return e & t ^ e & n ^ t & n;
}
var tr = class {
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
		this.blockLen = e, this.outputLen = t, this.padOffset = n, this.isLE = r, this.buffer = new Uint8Array(e), this.view = Kn(this.buffer);
	}
	update(e) {
		Un(this), Hn(e);
		let { view: t, buffer: n, blockLen: r } = this, i = e.length;
		for (let a = 0; a < i;) {
			let o = Math.min(r - this.pos, i - a);
			if (o === r) {
				let t = Kn(e);
				for (; r <= i - a; a += r) this.process(t, a);
				continue;
			}
			n.set(e.subarray(a, a + o), this.pos), this.pos += o, a += o, this.pos === r && (this.process(t, 0), this.pos = 0);
		}
		return this.length += e.length, this.roundClean(), this;
	}
	digestInto(e) {
		Un(this), Wn(e, this), this.finished = !0;
		let { buffer: t, view: n, blockLen: r, isLE: i } = this, { pos: a } = this;
		t[a++] = 128, Gn(this.buffer.subarray(a)), this.padOffset > r - a && (this.process(n, 0), a = 0);
		for (let e = a; e < r; e++) t[e] = 0;
		n.setBigUint64(r - 8, BigInt(this.length * 8), i), this.process(n, 0);
		let o = Kn(e), s = this.outputLen;
		if (s % 4) throw Error("_sha2: outputLen must be aligned to 32bit");
		let c = s / 4, l = this.get();
		if (c > l.length) throw Error("_sha2: outputLen bigger than state");
		for (let e = 0; e < c; e++) o.setUint32(4 * e, l[e], i);
	}
	digest() {
		let { buffer: e, outputLen: t } = this;
		this.digestInto(e);
		let n = e.slice(0, t);
		return this.destroy(), n;
	}
	_cloneInto(e) {
		e ||= new this.constructor(), e.set(...this.get());
		let { blockLen: t, buffer: n, length: r, finished: i, destroyed: a, pos: o } = this;
		return e.destroyed = a, e.finished = i, e.length = r, e.pos = o, r % t && e.buffer.set(n), e;
	}
	clone() {
		return this._cloneInto();
	}
}, R = Uint32Array.from([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]), nr = Uint32Array.from([
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
]), z = /* @__PURE__ */ new Uint32Array(64), rr = class extends tr {
	constructor(e) {
		super(64, e, 8, !1);
	}
	get() {
		let { A: e, B: t, C: n, D: r, E: i, F: a, G: o, H: s } = this;
		return [
			e,
			t,
			n,
			r,
			i,
			a,
			o,
			s
		];
	}
	set(e, t, n, r, i, a, o, s) {
		this.A = e | 0, this.B = t | 0, this.C = n | 0, this.D = r | 0, this.E = i | 0, this.F = a | 0, this.G = o | 0, this.H = s | 0;
	}
	process(e, t) {
		for (let n = 0; n < 16; n++, t += 4) z[n] = e.getUint32(t, !1);
		for (let e = 16; e < 64; e++) {
			let t = z[e - 15], n = z[e - 2], r = L(t, 7) ^ L(t, 18) ^ t >>> 3, i = L(n, 17) ^ L(n, 19) ^ n >>> 10;
			z[e] = i + z[e - 7] + r + z[e - 16] | 0;
		}
		let { A: n, B: r, C: i, D: a, E: o, F: s, G: c, H: l } = this;
		for (let e = 0; e < 64; e++) {
			let t = L(o, 6) ^ L(o, 11) ^ L(o, 25), u = l + t + $n(o, s, c) + nr[e] + z[e] | 0, d = (L(n, 2) ^ L(n, 13) ^ L(n, 22)) + er(n, r, i) | 0;
			l = c, c = s, s = o, o = a + u | 0, a = i, i = r, r = n, n = u + d | 0;
		}
		n = n + this.A | 0, r = r + this.B | 0, i = i + this.C | 0, a = a + this.D | 0, o = o + this.E | 0, s = s + this.F | 0, c = c + this.G | 0, l = l + this.H | 0, this.set(n, r, i, a, o, s, c, l);
	}
	roundClean() {
		Gn(z);
	}
	destroy() {
		this.destroyed = !0, this.set(0, 0, 0, 0, 0, 0, 0, 0), Gn(this.buffer);
	}
}, ir = class extends rr {
	A = R[0] | 0;
	B = R[1] | 0;
	C = R[2] | 0;
	D = R[3] | 0;
	E = R[4] | 0;
	F = R[5] | 0;
	G = R[6] | 0;
	H = R[7] | 0;
	constructor() {
		super(32);
	}
}, ar = Zn(() => new ir(), Qn(1));
function or(e) {
	if (e === void 0) return;
	if (e === null) return "null";
	if (typeof e == "number") return isFinite(e) ? "" + e : "null";
	if (typeof e != "object") return JSON.stringify(e);
	if (Array.isArray(e)) {
		let t = "[";
		for (let n = 0; n < e.length; n++) n && (t += ","), t += or(e[n]) || "null";
		return t + "]";
	}
	let t = Object.keys(e).sort(), n = "";
	for (let r of t) {
		let t = or(e[r]);
		t && (n && (n += ","), n += JSON.stringify(r) + ":" + t);
	}
	return "{" + n + "}";
}
function sr(e) {
	return or(e) ?? "";
}
function cr(e) {
	return Yn(ar(Xn(e))).slice(0, 16);
}
function lr({ source: e, context: t, id: n, maxChars: r, requiresReview: i, dataFormat: a }, o = cr) {
	let s;
	return s = a === "JSX" ? dr(e) : e, o(sr({
		source: s,
		...n && { id: n },
		...t && { context: t },
		...r != null && { maxChars: Math.abs(r) },
		...i === !0 && { requiresReview: !0 },
		...a && { dataFormat: a }
	}));
}
var ur = (e) => {
	if (e && typeof e == "object") {
		let t = {};
		if ("c" in e && e.c && (t.c = dr(e.c)), "d" in e) {
			let n = e?.d;
			n?.b && (t.b = Object.fromEntries(Object.entries(n.b).map(([e, t]) => [e, dr(t)]))), n?.t && (t.t = n.t);
		}
		return Ft(e) ? {
			k: e.k,
			...e.v && { v: e.v }
		} : t;
	}
	return e;
};
function dr(e) {
	return Array.isArray(e) ? e.map(ur) : ur(e);
}
var B = "GT", fr = (e) => y({
	source: B,
	severity: "Error",
	whatHappened: `Translation request timed out after ${e}ms`,
	fix: "Try again, or increase the request timeout if the source content is large"
}), pr = (e, t, n) => y({
	source: B,
	severity: "Error",
	whatHappened: `The translation API returned ${e} ${t}`,
	fix: "Check the request configuration and try again",
	details: n
});
y({
	source: B,
	severity: "Error",
	whatHappened: "Authentication failed",
	fix: "Check that your API key and project ID are correct"
});
var V = (e) => y({
	source: B,
	severity: "Error",
	whatHappened: `Cannot call \`${e}\` without a specified locale`,
	fix: `Pass a locale to \`${e}\` or specify targetLocale in the GT constructor`
}), mr = (e) => y({
	source: B,
	severity: "Error",
	whatHappened: `Cannot call \`${e}\` without a specified locale`,
	fix: `Pass a locale to \`${e}\` or specify sourceLocale in the GT constructor`
}), hr = (e) => y({
	source: B,
	severity: "Error",
	whatHappened: `Cannot call \`${e}\` without a specified project ID`,
	fix: `Pass a project ID to \`${e}\` or specify projectId in the GT constructor`
}), gr = (e) => y({
	source: B,
	severity: "Error",
	whatHappened: `Cannot call \`${e}\` without a specified API key`,
	fix: `Pass an API key to \`${e}\` or specify apiKey in the GT constructor`
}), _r = (e) => y({
	source: B,
	severity: "Error",
	whatHappened: `Locale "${e}" is not valid`,
	fix: "Use a valid BCP 47 locale code or add a custom mapping"
}), vr = (e) => y({
	source: B,
	severity: "Error",
	whatHappened: `These locales are not valid: ${e.join(", ")}`,
	fix: "Use valid BCP 47 locale codes or add custom mappings"
}), yr = {
	debug: 0,
	info: 1,
	warn: 2,
	error: 3,
	off: 4
}, br = {
	debug: "\x1B[36m",
	info: "\x1B[32m",
	warn: "\x1B[33m",
	error: "\x1B[31m",
	off: ""
}, xr = "\x1B[0m";
function Sr() {
	if (typeof process < "u" && process.env?._GT_LOG_LEVEL) {
		let e = process.env._GT_LOG_LEVEL.toLowerCase();
		if (e in yr) return e;
	}
	return "warn";
}
var Cr = class {
	constructor(e) {
		this.config = e;
	}
	handle(e) {
		let t = [];
		this.config.includeTimestamp && t.push(`[${e.timestamp.toISOString()}]`);
		let n = br[e.level], r = `[${e.level.toUpperCase()}]`;
		t.push(`${n}${r}${xr}`), this.config.prefix && t.push(`[${this.config.prefix}]`), this.config.includeContext && e.context && t.push(`[${e.context}]`), t.push(e.message), e.metadata && Object.keys(e.metadata).length > 0 && t.push(`\n  Metadata: ${JSON.stringify(e.metadata, null, 2)}`);
		let i = t.join(" ");
		switch (e.level) {
			case "debug":
				console.debug(i);
				break;
			case "info":
				console.info(i);
				break;
			case "warn":
				console.warn(i);
				break;
			case "error": console.error(i);
		}
	}
}, wr = class {
	constructor(e = {}) {
		this.config = {
			level: Sr(),
			includeTimestamp: !0,
			includeContext: !0,
			enableConsole: !0,
			handlers: [],
			...e
		}, this.handlers = [...this.config.handlers || []], this.config.enableConsole && this.handlers.push(new Cr(this.config));
	}
	addHandler(e) {
		this.handlers.push(e);
	}
	removeHandler(e) {
		let t = this.handlers.indexOf(e);
		t > -1 && this.handlers.splice(t, 1);
	}
	configure(e) {
		this.config = {
			...this.config,
			...e
		};
	}
	shouldLog(e) {
		return yr[e] >= yr[this.config.level];
	}
	log(e, t, n, r) {
		if (!this.shouldLog(e)) return;
		let i = {
			level: e,
			message: t,
			timestamp: /* @__PURE__ */ new Date(),
			context: n,
			metadata: r
		};
		this.handlers.forEach((e) => {
			try {
				e.handle(i);
			} catch (e) {
				console.error("Error in log handler:", e);
			}
		});
	}
	debug(e, t, n) {
		this.log("debug", e, t, n);
	}
	info(e, t, n) {
		this.log("info", e, t, n);
	}
	warn(e, t, n) {
		this.log("warn", e, t, n);
	}
	error(e, t, n) {
		this.log("error", e, t, n);
	}
	child(e) {
		return new Tr(this, e);
	}
	getConfig() {
		return { ...this.config };
	}
}, Tr = class e {
	constructor(e, t) {
		this.logger = e, this.context = t;
	}
	debug(e, t) {
		this.logger.debug(e, this.context, t);
	}
	info(e, t) {
		this.logger.info(e, this.context, t);
	}
	warn(e, t) {
		this.logger.warn(e, this.context, t);
	}
	error(e, t) {
		this.logger.error(e, this.context, t);
	}
	child(t) {
		return new e(this.logger, `${this.context}:${t}`);
	}
}, Er = new wr({
	level: Sr(),
	includeTimestamp: !0,
	includeContext: !0,
	prefix: "GT"
});
Er.child("fetch");
var Dr = Er.child("GT instance");
async function Or(e, t, n) {
	let r = new AbortController(), i = [r.signal];
	t.signal && i.push(t.signal), e instanceof Request && i.push(e.signal);
	let a = AbortSignal.any(i);
	n ||= m;
	let o = n ? setTimeout(() => r.abort(), n) : null;
	try {
		return await fetch(e, {
			...t,
			signal: a
		});
	} catch (e) {
		throw e instanceof Error && e.name === "AbortError" ? fr(n) : e;
	} finally {
		o && clearTimeout(o);
	}
}
async function kr(e) {
	if (!e.ok) {
		let t = "Unknown error";
		try {
			let n = await e.text();
			try {
				t = JSON.parse(n).error;
			} catch {
				t = n || "Unknown error";
			}
		} catch {}
		throw new p(pr(e.status, e.statusText, t), e.status, t);
	}
}
async function Ar(e, t, n, r) {
	let i = Array.isArray(e), a = i ? [] : void 0, o = {}, s = i ? e.map((e) => [void 0, e]) : Object.entries(e);
	for (let [e, t] of s) {
		let { source: n, metadata: r } = typeof t == "string" ? { source: t } : t, i = e ?? r?.hash ?? lr({
			source: n,
			...r?.context && { context: r.context },
			...r?.maxChars != null && { maxChars: r.maxChars },
			dataFormat: r?.dataFormat ?? "STRING"
		});
		a?.push(i), o[i] = {
			source: n,
			metadata: r
		};
	}
	let c = Be({
		apiKey: n.apiKey,
		baseUrl: n.baseUrl || "https://api.gtx.dev",
		fetch: (e, t) => Or(e, t ?? {}, r),
		projectId: n.projectId,
		retryPolicy: "none",
		timeoutMs: !1
	}), l = await ne({
		body: {
			requests: o,
			targetLocale: t.targetLocale,
			sourceLocale: t.sourceLocale,
			metadata: t
		},
		client: c
	});
	if (l.data === void 0 && l.response && !ee(l)) throw await kr(l.response), l.error;
	let u = te(l);
	return a ? a.map((e) => u[e] ?? {
		success: !1,
		error: "No translation returned",
		code: 500
	}) : u;
}
var jr = class {
	get localeConfig() {
		return this._localeConfig;
	}
	constructor(e = {}) {
		typeof process < "u" && (this.apiKey ||= process.env?.GT_API_KEY, this.devApiKey ||= process.env?.GT_DEV_API_KEY, this.projectId ||= process.env?.GT_PROJECT_ID), this.setConfig(e);
	}
	setConfig({ apiKey: e, devApiKey: t, sourceLocale: n, targetLocale: r, locales: i, projectId: a, customMapping: o, baseUrl: s }) {
		if (e && (this.apiKey = e), t && (this.devApiKey = t), a && (this.projectId = a), n && (this.sourceLocale = Ln(n), !I(this.sourceLocale, o))) throw Error(_r(this.sourceLocale));
		if (r && (this.targetLocale = Ln(r), !I(this.targetLocale, o))) throw Error(_r(this.targetLocale));
		if (i) {
			let e = [], t = [];
			if (i.forEach((n) => {
				let r = Ln(n);
				I(r) ? e.push(r) : t.push(n);
			}), t.length > 0) throw Error(vr(t));
			this.locales = e;
		}
		s && (this.baseUrl = s), o && (this.customMapping = o, this.reverseCustomMapping = Object.fromEntries(Object.entries(o).filter(([, e]) => e && typeof e == "object" && "code" in e).map(([e, t]) => [t.code, e]))), this._localeConfig = new Pn({
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
	_validateAuth(e) {
		let t = [];
		if (!this.apiKey && !this.devApiKey) {
			let n = gr(e);
			t.push(n);
		}
		if (!this.projectId) {
			let n = hr(e);
			t.push(n);
		}
		if (t.length) throw Error(t.join("\n"));
	}
	async translate(e, t, n) {
		typeof t == "string" && (t = { targetLocale: t }), this._validateAuth("translate");
		let r = t?.targetLocale || this.targetLocale;
		if (!r) {
			let e = V("translate");
			throw Dr.error(e), Error(e);
		}
		r = this.resolveCanonicalLocale(r);
		let i = this.resolveCanonicalLocale(t?.sourceLocale || this.sourceLocale || "en");
		return (await Ar([e], {
			...t,
			targetLocale: r,
			sourceLocale: i
		}, this._getTranslationConfig(), n))[0];
	}
	async translateMany(e, t, n) {
		typeof t == "string" && (t = { targetLocale: t }), this._validateAuth("translateMany");
		let r = t?.targetLocale || this.targetLocale;
		if (!r) {
			let e = V("translateMany");
			throw Dr.error(e), Error(e);
		}
		r = this.resolveCanonicalLocale(r);
		let i = this.resolveCanonicalLocale(t?.sourceLocale || this.sourceLocale || "en");
		return await Ar(e, {
			...t,
			targetLocale: r,
			sourceLocale: i
		}, this._getTranslationConfig(), n);
	}
	formatCutoff(e, t) {
		return this.localeConfig.formatCutoff(e, this.targetLocale, t);
	}
	formatMessage(e, t) {
		return this.localeConfig.formatMessage(e, this.targetLocale, t);
	}
	formatNum(e, t) {
		return this.localeConfig.formatNum(e, this.targetLocale, t);
	}
	formatDateTime(e, t) {
		return this.localeConfig.formatDateTime(e, this.targetLocale, t);
	}
	formatCurrency(e, t, n) {
		return this.localeConfig.formatCurrency(e, t, this.targetLocale, n);
	}
	formatList(e, t) {
		return this.localeConfig.formatList(e, this.targetLocale, t);
	}
	formatListToParts(e, t) {
		return this.localeConfig.formatListToParts(e, this.targetLocale, t);
	}
	formatRelativeTime(e, t, n) {
		return this.localeConfig.formatRelativeTime(e, t, this.targetLocale, n);
	}
	formatRelativeTimeFromDate(e, t) {
		return this.localeConfig.formatRelativeTimeFromDate(e, this.targetLocale, t);
	}
	getLocaleName(e = this.targetLocale) {
		if (!e) throw Error(V("getLocaleName"));
		return this.localeConfig.getLocaleName(e);
	}
	getLocaleEmoji(e = this.targetLocale) {
		if (!e) throw Error(V("getLocaleEmoji"));
		return this.localeConfig.getLocaleEmoji(e);
	}
	getLocaleProperties(e = this.targetLocale) {
		if (!e) throw Error(V("getLocaleProperties"));
		return this.localeConfig.getLocaleProperties(e);
	}
	getRegionProperties(e = this.getLocaleProperties().regionCode, t) {
		if (!t) {
			if (this.customMapping && !this.customRegionMapping) {
				let e = {};
				for (let [t, n] of Object.entries(this.customMapping)) if (n && typeof n == "object" && n.regionCode && !e[n.regionCode]) {
					let { regionName: r, emoji: i } = n;
					e[n.regionCode] = {
						locale: t,
						...r && { name: r },
						...i && { emoji: i }
					};
				}
				this.customRegionMapping = e;
			}
			t = this.customRegionMapping;
		}
		return Fn(e, this.targetLocale, t);
	}
	requiresTranslation(e = this.sourceLocale, t = this.targetLocale, n = this.locales, r = this.customMapping) {
		if (!e) throw Error(mr("requiresTranslation"));
		if (!t) throw Error(V("requiresTranslation"));
		return r === this.customMapping ? this.localeConfig.requiresTranslation(t, e, n) : Rn(e, t, n, r);
	}
	determineLocale(e, t = this.locales || [], n = this.customMapping) {
		return n === this.customMapping ? this.localeConfig.determineLocale(e, t ?? []) : zn(e, t, n);
	}
	getLocaleDirection(e = this.targetLocale) {
		if (!e) throw Error(V("getLocaleDirection"));
		return this.localeConfig.getLocaleDirection(e);
	}
	isValidLocale(e = this.targetLocale, t = this.customMapping) {
		if (!e) throw Error(V("isValidLocale"));
		return t === this.customMapping ? this.localeConfig.isValidLocale(e) : I(e, t);
	}
	resolveCanonicalLocale(e = this.targetLocale, t = this.customMapping) {
		if (!e) throw Error(V("resolveCanonicalLocale"));
		return t === this.customMapping ? this.localeConfig.resolveCanonicalLocale(e) : In(e, t);
	}
	resolveAliasLocale(e, t = this.customMapping) {
		if (!e) throw Error(V("resolveAliasLocale"));
		return t === this.customMapping ? this.localeConfig.resolveAliasLocale(e) : Bn(e, t);
	}
	standardizeLocale(e = this.targetLocale) {
		if (!e) throw Error(V("standardizeLocale"));
		return this.localeConfig.standardizeLocale(e);
	}
	isSameDialect(...e) {
		return this.localeConfig.isSameDialect(...e);
	}
	isSameLanguage(...e) {
		return this.localeConfig.isSameLanguage(...e);
	}
	isSupersetLocale(e, t) {
		return this.localeConfig.isSupersetLocale(e, t);
	}
}, Mr = "DEBUG";
function Nr() {
	let e = Fr();
	return e === void 0 ? Ir(() => void 0) : e;
}
function Pr(e) {
	return e?.toUpperCase() === Mr;
}
function Fr() {
	if (typeof process == "object") return process.env?._GENERALTRANSLATION_LOG_LEVEL;
}
function Ir(e) {
	try {
		return e();
	} catch {
		return;
	}
}
function Lr(e) {
	let t = globalThis;
	return t.__generaltranslation ??= {}, t.__generaltranslation[e] ??= {}, t.__generaltranslation[e];
}
function Rr(e) {
	return globalThis.__generaltranslation?.[e];
}
function H({ namespace: e, key: t, source: n, notInitialized: r }) {
	function i() {
		let n = Lr(e)[t];
		if (n == null) {
			let e = r();
			throw typeof e == "string" ? Error(e) : e;
		}
		return n;
	}
	function a(r) {
		let i = Lr(e);
		if (i[t] !== void 0 && i[t] !== r) {
			zr() && console.warn(y({
				source: n,
				severity: "Warning",
				whatHappened: `Global ${t} singleton instance was already initialized`
			}));
			return;
		}
		i[t] = r;
	}
	function o() {
		return Lr(e)[t] != null;
	}
	return {
		get: i,
		set: a,
		isInitialized: o
	};
}
function zr() {
	let e = Rr("i18n")?.i18nConfig;
	return Br(e) ? e.isDebugLoggingEnabled() : Pr(Nr());
}
function Br(e) {
	return typeof e == "object" && !!e && typeof e.isDebugLoggingEnabled == "function";
}
var Vr = H({
	namespace: "i18n",
	key: "i18nCache",
	source: "gt-i18n",
	notInitialized: () => y({
		source: "gt-i18n",
		severity: "Error",
		whatHappened: "Cannot read I18nCache before it has been initialized",
		why: "the internal I18nCache singleton is unavailable",
		fix: "Initialize GT before accessing I18nCache (call initializeGT() from your GT framework package)."
	})
});
function Hr() {
	return Vr.get();
}
function Ur(e) {
	Vr.set(e);
}
function Wr(e) {
	return e.loadTranslations ? "custom" : (e.cacheUrl === void 0 || e.cacheUrl === "https://cdn.gtx.dev") && e.projectId ? "gt-remote" : e.cacheUrl ? "remote" : "disabled";
}
function Gr(e) {
	let t = e.runtimeUrl === void 0 || e.runtimeUrl === "https://api.gtx.dev";
	return t && e.projectId && (e.devApiKey || e.apiKey) ? "gt" : e.runtimeUrl && !t ? "custom" : "disabled";
}
function Kr() {
	if (typeof process == "object" && process.env.NODE_ENV === "development") return "development";
	let e = qr(() => "production");
	return e ? e === "development" ? "development" : "production" : qr(() => !1) === !0 ? "development" : "production";
}
function qr(e) {
	try {
		return e();
	} catch {
		return;
	}
}
var U = {
	warn(e) {
		console.warn(e);
	},
	error(e) {
		console.error(e);
	},
	info(e) {
		console.info(e);
	},
	debug(e) {
		console.debug(e);
	}
};
function Jr(e, t) {
	if (!t) return;
	let n = Yr(e), r = Xr(e), i = [...n, ...r];
	if (i.forEach((e) => {
		U.error(`I18nConfig: ${Zr(e)}`);
	}), i.length > 0) throw Error(y({
		source: "gt-i18n",
		severity: "Error",
		whatHappened: "Invalid I18nConfig locale configuration",
		details: i.map((e) => `Invalid locale: ${e}`),
		fix: "Use valid BCP 47 locale codes or add custom mappings."
	}));
}
function Yr({ defaultLocale: e, locales: t, customMapping: n }) {
	let r = /* @__PURE__ */ new Set([...e ? [e] : [], ...t || []]);
	return Array.from(r).filter((e) => !I(e, n));
}
function Xr({ customMapping: e }) {
	return Object.values(e || {}).flatMap((e) => {
		let t = typeof e == "string" ? e : e.code;
		return t && !I(t) ? [t] : [];
	});
}
function Zr(e) {
	return y({
		whatHappened: `Locale "${e}" is not valid`,
		fix: "Use a valid BCP 47 locale code or add a custom mapping"
	});
}
var Qr = class extends Pn {
	constructor(e = {}) {
		let t = ni(e);
		super($r(e, t)), this.runtimeConfig = {
			projectId: e.projectId,
			devApiKey: e.devApiKey,
			apiKey: e.apiKey,
			runtimeUrl: e.runtimeUrl,
			_disableDevHotReload: e._disableDevHotReload,
			_tagIds: e._tagIds
		}, this.gtServicesEnabled = t, this.logLevel = Nr();
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
	getGTClass(e) {
		return this.getGTClassClean(e ? this.resolveLocale(e) : void 0);
	}
	determineLocale(e, t = this.locales) {
		if (!(e == null || Array.isArray(e) && e.length === 0)) return super.determineLocale(e, t);
	}
	determineSupportedLocale(e, t) {
		return this.determineSupportedLocaleWithConfig(e, this.getLocaleConfig(t));
	}
	resolveSupportedLocale(e, t) {
		let n = this.getLocaleConfig(t);
		return this.determineSupportedLocaleWithConfig(e, n) || n.defaultLocale;
	}
	resolveLocale(e) {
		let t = this.determineSupportedLocale(e);
		if (!this.isValidLocale(e) || !t) throw Error(`Locale "${e}" is not valid. Use a valid BCP 47 locale code or add a custom mapping.`);
		return t;
	}
	isDevHotReloadEnabled() {
		return !this.runtimeConfig._disableDevHotReload && !!this.runtimeConfig.devApiKey && !!this.runtimeConfig.projectId && this.runtimeConfig.runtimeUrl !== null && this.runtimeConfig.runtimeUrl !== "" && Kr() === "development";
	}
	isGTServicesEnabled() {
		return this.gtServicesEnabled;
	}
	isDebugLoggingEnabled() {
		return Pr(this.logLevel);
	}
	getGTClassClean(e) {
		return new jr({
			sourceLocale: this.getDefaultLocale(),
			targetLocale: e,
			locales: Array.from(new Set(this.getLocales().map((e) => this.resolveCanonicalLocale(e)))),
			customMapping: this.getCustomMapping(),
			projectId: this.runtimeConfig.projectId,
			baseUrl: this.runtimeConfig.runtimeUrl || void 0,
			apiKey: this.runtimeConfig.apiKey,
			devApiKey: this.runtimeConfig.devApiKey
		});
	}
	getLocaleConfig(e) {
		return !e || !ti(e) ? this : new Pn(ei(e));
	}
	determineSupportedLocaleWithConfig(e, t) {
		if (!(e == null || Array.isArray(e) && e.length === 0)) return t.determineLocale(e);
	}
};
function $r(e, t) {
	let { defaultLocale: n = "en", locales: r = [], customMapping: i } = e;
	return Jr({
		...e,
		defaultLocale: n,
		locales: r,
		customMapping: i
	}, t), {
		defaultLocale: n,
		locales: Array.from(/* @__PURE__ */ new Set([n, ...r])),
		customMapping: i || {}
	};
}
function ei({ defaultLocale: e = "en", locales: t = [], customMapping: n } = {}) {
	return {
		defaultLocale: e,
		locales: t?.length ? t : [e],
		customMapping: n || {}
	};
}
function ti(e) {
	return e.defaultLocale !== void 0 || e.locales !== void 0 || e.customMapping !== void 0;
}
function ni(e) {
	return Wr(e) === "gt-remote" || Gr(e) === "gt";
}
var ri = H({
	namespace: "i18n",
	key: "i18nConfig",
	source: "gt-i18n",
	notInitialized: () => y({
		source: "gt-i18n",
		severity: "Error",
		whatHappened: "Cannot read I18nConfig before it has been initialized",
		why: "the internal I18nConfig singleton is unavailable",
		fix: "Initialize GT before reading locale config (call initializeGT() from your GT framework package)."
	})
}), W = ri.get, ii = ri.set;
ri.isInitialized;
function ai(e) {
	let t = H({
		namespace: "i18n",
		key: "conditionStore",
		source: "gt-i18n",
		notInitialized: () => e
	});
	return {
		getConditionStore: t.get,
		setConditionStore: t.set,
		isConditionStoreInitialized: t.isInitialized
	};
}
var { getConditionStore: oi, setConditionStore: si } = ai(y({
	source: "gt-i18n",
	severity: "Error",
	whatHappened: "Cannot read the locale before GT has been initialized",
	why: "the internal ConditionStore singleton is unavailable",
	fix: "Initialize GT before calling translation functions (e.g. call initializeGT() from your GT framework package)."
}));
function ci(e, t) {
	let n = t;
	return n.$_hash == null ? lr({
		source: t.$format === "ICU" ? Vt(e) : e,
		...n.$context && { context: n.$context },
		...n.$maxChars != null && { maxChars: Math.abs(n.$maxChars) },
		...n.$requiresReview === !0 && { requiresReview: !0 },
		dataFormat: t.$format
	}) : n.$_hash;
}
function li(e, t) {
	let n = `${t}=`, r = e?.split(";").map((e) => e.trim()).find((e) => e.startsWith(n));
	if (!r) return;
	let i = r.slice(n.length);
	try {
		return decodeURIComponent(i);
	} catch {
		return i;
	}
}
function ui(e) {
	let t = e ? e.split(".") : [];
	for (let n of t) di(n, e);
	return t;
}
function di(e, t) {
	if (e === "__proto__" || e === "constructor" || e === "prototype") throw Error(`Dictionary path "${t}" contains an unsafe segment`);
}
function G(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function K(e) {
	return e === void 0 || typeof e == "string" ? e : structuredClone(e);
}
function fi(e, t) {
	let n = e;
	for (let e of ui(t)) {
		if (!G(n)) return;
		n = n[e];
	}
	return n;
}
function pi(e, t, n) {
	let r = ui(t);
	if (G(n) && bi(n, t), r.length === 0) {
		G(n) && yi(e, n);
		return;
	}
	let i = e;
	for (let e of r.slice(0, -1)) {
		let t = i[e];
		G(t) || (i[e] = {}), i = i[e];
	}
	let a = r[r.length - 1];
	i[a] = n;
}
function q(e) {
	if (gi(e)) return {
		entry: Array.isArray(e) ? e[0] : e,
		options: Array.isArray(e) ? e[1] ?? {} : {}
	};
}
function mi(e) {
	return Object.keys(e.options).length === 0 ? e.entry : [e.entry, e.options];
}
function hi(e) {
	let { $format: t, ...n } = e;
	return {
		...n,
		$format: vi(t) ? t : "ICU"
	};
}
function gi(e) {
	return typeof e == "string" ? !0 : !Array.isArray(e) || typeof e[0] != "string" ? !1 : e.length === 1 || e.length === 2 && _i(e[1]);
}
function _i(e) {
	if (typeof e != "object" || !e || Array.isArray(e)) return !1;
	let t = e;
	return (t.$context === void 0 || typeof t.$context == "string") && (t.$format === void 0 || vi(t.$format)) && (t.$maxChars === void 0 || typeof t.$maxChars == "number");
}
function vi(e) {
	return e === "ICU" || e === "I18NEXT" || e === "STRING";
}
function yi(e, t) {
	for (let t of Object.keys(e)) delete e[t];
	for (let n of Object.keys(t)) e[n] = t[n];
}
function bi(e, t = "") {
	for (let [n, r] of Object.entries(e)) {
		let e = t ? `${t}.${n}` : n;
		di(n, e), G(r) && bi(r, e);
	}
}
function xi(e, t, n = {}) {
	return (r) => (i) => e.translateMany(i, {
		...n,
		targetLocale: r
	}, t);
}
function Si(e) {
	let t = Ci(e);
	return async (n) => {
		n = In(n, e.customMapping);
		let r = t.replace("[locale]", n), i = await fetch(r);
		if (!i.ok) throw Error(`Failed to load translations from ${r}`);
		return await i.json();
	};
}
function Ci(e) {
	let { cacheUrl: t = b, projectId: n, _versionId: r, _branchId: i } = e, a = r ? `/${r}` : "", o = i ? `?branchId=${i}` : "";
	return `${t}/${n}/[locale]` + a + o;
}
function wi({ type: e, remoteTranslationLoaderParams: t, loadTranslations: n }) {
	let { cacheUrl: r, projectId: i, _versionId: a, _branchId: o } = t;
	switch (e) {
		case "remote":
		case "gt-remote": return i ? Si({
			cacheUrl: r,
			projectId: i,
			_versionId: a,
			_branchId: o,
			customMapping: W().getCustomMapping()
		}) : Ti(y({
			whatHappened: "Loading translations from a remote store needs a projectId. No translations will be loaded.",
			fix: "Add projectId to the I18nCache config, or set cacheUrl to null to disable translation loading"
		}));
		case "custom": return n;
		case "disabled": return r === null ? async () => ({}) : Ti(y({
			whatHappened: "No translation loader found. No translations will be loaded.",
			fix: "Add projectId to the I18nCache config (to load from the GT remote store), provide a loadTranslations function, or set cacheUrl to null to disable translation loading"
		}));
	}
}
function Ti(e) {
	let t = !1;
	return async (n) => (t || (t = !0, U.warn("I18nCache: " + e)), {});
}
async function Ei(e, t, n) {
	let r = e.get(t);
	r || (r = n(), e.set(t, r));
	try {
		return await r;
	} finally {
		e.delete(t);
	}
}
var Di = class {
	constructor({ load: e, ttl: t }) {
		this.cache = /* @__PURE__ */ new Map(), this.pendingLoads = /* @__PURE__ */ new Map(), this.loadResource = e, this.ttl = t === null ? -1 : t ?? 6e4;
	}
	get(e) {
		let t = this.cache.get(e);
		if (t && !this.isExpired(t)) return t.value;
	}
	set(e, t, { expiresAt: n = this.getExpiresAt() } = {}) {
		this.cache.set(e, {
			expiresAt: n,
			value: t
		});
	}
	async getOrLoad(e) {
		return this.get(e) ?? await this.load(e);
	}
	load(e) {
		return Ei(this.pendingLoads, e, () => this.loadResource(e).then((t) => (this.set(e, t), t)));
	}
	getExpiresAt() {
		return this.ttl <= 0 ? this.ttl : Date.now() + this.ttl;
	}
	isExpired(e) {
		return e.expiresAt === 0 || e.expiresAt > 0 && e.expiresAt < Date.now();
	}
}, Oi = {
	maxConcurrentRequests: 100,
	maxBatchSize: 25,
	batchInterval: 50
};
function ki(e, t, n = !1) {
	if (e === void 0 || !Number.isFinite(e)) return t;
	let r = n ? Math.trunc(e) : e;
	return r > 0 ? r : t;
}
function Ai(e) {
	return {
		maxConcurrentRequests: ki(e?.maxConcurrentRequests, Oi.maxConcurrentRequests, !0),
		maxBatchSize: ki(e?.maxBatchSize, Oi.maxBatchSize, !0),
		batchInterval: ki(e?.batchInterval, Oi.batchInterval)
	};
}
var ji = class {
	constructor({ init: e, translateMany: t, onMiss: n, batchConfig: r }) {
		this.pendingTranslations = /* @__PURE__ */ new Map(), this.queue = [], this.batchTimer = null, this.activeRequests = 0, this.cache = structuredClone(e), this.translateMany = t, this.batchConfig = Ai(r), this.onMiss = n;
	}
	get(e) {
		let t = this.getCacheKey(e);
		return this.cache[t];
	}
	async miss(e) {
		let t = this.getCacheKey(e), n = await Ei(this.pendingTranslations, t, () => this.translate(e));
		return n != null && this.onMiss?.(t, n), n;
	}
	getInternalCache() {
		return structuredClone(this.cache);
	}
	getCacheKey(e) {
		return ci(e.message, e.options);
	}
	translate(e) {
		let t = this.enqueueTranslation(e);
		return this.queue.length >= this.batchConfig.maxBatchSize ? this.flushNow() : this.scheduleBatch(), t;
	}
	update(e) {
		this.cache = {
			...this.cache,
			...e
		};
	}
	flushNow() {
		this.batchTimer &&= (clearTimeout(this.batchTimer), null), this.drainQueue();
	}
	scheduleBatch() {
		this.batchTimer ||= setTimeout(() => {
			this.batchTimer = null, this.drainQueue();
		}, this.batchConfig.batchInterval);
	}
	drainQueue() {
		for (; this.queue.length > 0 && this.activeRequests < this.batchConfig.maxConcurrentRequests;) {
			let e = this.queue.splice(0, this.batchConfig.maxBatchSize);
			this.sendBatchRequest(e);
		}
		this.queue.length > 0 && this.scheduleBatch();
	}
	enqueueTranslation(e) {
		let t = this.getCacheKey(e), n = e.options, r = n;
		return new Promise((i, a) => {
			this.queue.push({
				key: t,
				source: e.message,
				metadata: {
					hash: t,
					...r.$context && { context: r.$context },
					...r.$id && { id: r.$id },
					...r.$maxChars != null && { maxChars: Math.abs(r.$maxChars) },
					...r.$requiresReview === !0 && { requiresReview: !0 },
					dataFormat: n.$format
				},
				resolve: (e) => i(e),
				reject: a
			});
		});
	}
	async sendBatchRequest(e) {
		this.activeRequests++;
		let t = Mi(e), n = await this.sendBatchRequestWithErrorHandling(e, t);
		n && this.handleTranslationResponse(e, n), this.activeRequests--;
	}
	async sendBatchRequestWithErrorHandling(e, t) {
		try {
			return await this.translateMany(t);
		} catch (t) {
			for (let n of e) n.reject(t);
			return;
		}
	}
	handleTranslationResponse(e, t) {
		for (let n of e) {
			let { key: e } = n, r = t[e];
			if (r && r.success) {
				let t = r.translation;
				this.cache[e] = t, n.resolve(t);
			} else n.reject(r?.error);
		}
	}
};
function Mi(e) {
	return e.reduce((e, t) => (e[t.key] = {
		source: t.source,
		metadata: t.metadata
	}, e), {});
}
var J = class extends Error {
	constructor(e) {
		super(`I18nCache: source dictionary entry ${e} is not defined`), this.name = "DictionarySourceNotFoundError";
	}
};
async function Ni({ key: e, sourceValue: t, targetValue: n, translateEntry: r }) {
	if (q(n) !== void 0 || G(n) && !G(t)) return K(n);
	let i = q(t);
	if (i !== void 0) return await r(e, i);
	if (!G(t)) throw new J(e);
	let a = G(n) ? n : {}, o = /* @__PURE__ */ new Set([...Object.keys(t), ...Object.keys(a)]), s = await Promise.all(Array.from(o).map(async (n) => {
		let i = e ? `${e}.${n}` : n;
		di(n, i);
		let o = t[n];
		return o === void 0 ? [n, K(a[n])] : [n, await Ni({
			key: i,
			sourceValue: o,
			targetValue: a[n],
			translateEntry: r
		})];
	}));
	return Object.fromEntries(s);
}
function Pi(e) {
	return {
		entry: e.entry,
		options: structuredClone(e.options)
	};
}
var Fi = class {
	constructor({ init: e, runtimeTranslate: t }) {
		this.pendingTranslations = /* @__PURE__ */ new Map(), this.pendingMaterializations = /* @__PURE__ */ new Map(), this.cache = structuredClone(e), this.runtimeTranslate = t;
	}
	getEntry(e) {
		let t = q(fi(this.cache, e));
		if (t !== void 0) return Pi(t);
	}
	getValue(e) {
		let t = fi(this.cache, e);
		if (t !== void 0) return K(t);
	}
	setValue(e, t) {
		pi(this.cache, e, K(t));
	}
	getInternalCache() {
		return K(this.cache);
	}
	update(e) {
		Ii(this.cache, e);
	}
	async materializeValue(e, t, n = fi(this.cache, e)) {
		return Ei(this.pendingMaterializations, e, () => Ni({
			key: e,
			sourceValue: t,
			targetValue: n,
			translateEntry: async (e, t) => mi(await this.materializeEntry(e, t))
		}).then((t) => (this.setValue(e, t), t)));
	}
	async materializeEntry(e, t) {
		return Pi(await Ei(this.pendingTranslations, e, () => this.runtimeTranslate(e, t).then((t) => {
			pi(this.cache, e, t);
			let n = q(t);
			if (n === void 0) throw Error("DictionaryCache materializeEntry did not return a DictionaryEntry");
			return Pi(n);
		})));
	}
};
function Ii(e, t) {
	for (let [n, r] of Object.entries(t)) {
		let t = e[n];
		G(t) && G(r) ? Ii(t, r) : e[n] = K(r);
	}
}
var Li = 12e3, Ri = class {
	constructor(e) {
		zi(e), this.config = {
			projectId: e.projectId,
			devApiKey: e.devApiKey,
			apiKey: e.apiKey,
			runtimeUrl: e.runtimeUrl,
			modelProvider: e.modelProvider,
			cacheExpiryTime: e.cacheExpiryTime,
			batchConfig: e.batchConfig,
			runtimeTranslation: e.runtimeTranslation,
			_versionId: e._versionId
		};
		let t = wi({
			loadTranslations: e.loadTranslations,
			type: Wr(e),
			remoteTranslationLoaderParams: {
				cacheUrl: e.cacheUrl,
				projectId: e.projectId,
				_versionId: e._versionId,
				_branchId: e._branchId
			}
		}), n = e.loadDictionary ?? (() => Promise.resolve({}));
		this.createTranslateMany = xi(W().getGTClass(), this.config.runtimeTranslation?.timeout ?? Li, {
			...this.config.modelProvider && { modelProvider: this.config.modelProvider },
			...this.config.runtimeTranslation?.metadata
		});
		let r = this.config.cacheExpiryTime;
		this.translations = new Di({
			ttl: r,
			load: async (e) => this.createTranslationsCache(e, await t(e))
		}), this.dictionaries = new Di({
			ttl: r,
			load: async (e) => this.createDictionaryCache(e, await n(e))
		});
		let i = W().getDefaultLocale();
		this.dictionaries.set(i, this.createDictionaryCache(i, e.dictionary ?? {}), { expiresAt: -1 });
	}
	createTranslationsCache(e, t) {
		return new ji({
			init: t,
			translateMany: this.createTranslateMany(e),
			batchConfig: this.config.batchConfig,
			onMiss: (t, n) => this.onTranslationsCacheMiss?.({
				locale: e,
				hash: t,
				translation: n
			})
		});
	}
	createDictionaryCache(e, t) {
		return new Fi({
			init: t,
			runtimeTranslate: (t, n) => this.translateDictionaryEntry(e, t, n)
		});
	}
	getVersionId() {
		return this.config._versionId;
	}
	updateTranslations(e) {
		for (let t in e) {
			let n = this.translations.get(t);
			n ? n.update(e[t]) : this.translations.set(t, this.createTranslationsCache(t, e[t]));
		}
	}
	updateDictionaries(e) {
		for (let t in e) {
			let n = this.dictionaries.get(t);
			n ? n.update(e[t]) : this.dictionaries.set(t, this.createDictionaryCache(t, e[t]));
		}
	}
	async loadTranslations(e) {
		return this.guardAsync({}, async () => {
			let t = this._resolveCacheLocale(e);
			return t ? (await this.translations.getOrLoad(t)).getInternalCache() : {};
		});
	}
	async loadDictionary(e) {
		return this.guardAsync({}, async () => {
			let t = this._resolveCacheLocale(e);
			return t ? (await this.dictionaries.getOrLoad(t)).getInternalCache() : this.getDefaultDictionaryCache()?.getInternalCache() ?? {};
		});
	}
	lookupDictionary(e, t) {
		return this.guard(void 0, () => this.dictionaries.get(this.resolveDictionaryCacheLocale(e))?.getEntry(t));
	}
	lookupDictionaryObj(e, t) {
		return this.guard(void 0, () => this.dictionaries.get(this.resolveDictionaryCacheLocale(e))?.getValue(t));
	}
	async getLookupDictionary(e) {
		return this.guardAsync({
			lookupDictionary: () => void 0,
			lookupDictionaryObj: () => void 0
		}, async () => {
			let t = this._resolveCacheLocale(e), n = t ? await this.dictionaries.getOrLoad(t) : this.getDefaultDictionaryCache();
			return {
				lookupDictionary: (e) => n?.getEntry(e),
				lookupDictionaryObj: (e) => n?.getValue(e)
			};
		});
	}
	async lookupDictionaryWithFallback(e, t) {
		return this.guardAsync(void 0, async () => {
			let n = this._resolveCacheLocale(e);
			if (!n) return this.getSourceDictionaryEntry(t);
			let r = await this.dictionaries.getOrLoad(n);
			return r.getEntry(t) ?? await r.materializeEntry(t, this.getSourceDictionaryEntry(t));
		});
	}
	async lookupDictionaryObjWithFallback(e, t) {
		return this.guardAsync(void 0, async () => {
			let n = this._resolveCacheLocale(e);
			if (!n) return this.getSourceDictionaryObject(t);
			let r = await this.dictionaries.getOrLoad(n), i = r.getValue(t), a = this.getSourceDictionaryObject(t, { throwOnMissing: !1 });
			if (a === void 0) {
				if (i !== void 0) return i;
				throw new J(t);
			}
			return await r.materializeValue(t, a, i);
		});
	}
	async translateDictionaryEntry(e, t, n) {
		let r = await this.lookupTranslationWithFallbackResolved(e, n.entry, hi(n.options));
		if (typeof r != "string") throw Error(`Dictionary entry "${t}" could not be translated into a string. Check the source entry and translation loader output.`);
		return r;
	}
	getSourceDictionaryEntry(e) {
		let t = this.getDefaultDictionaryCache()?.getEntry(e);
		if (t === void 0) throw new J(e);
		return t;
	}
	getSourceDictionaryObject(e, { throwOnMissing: t = !0 } = {}) {
		let n = this.getDefaultDictionaryCache()?.getValue(e);
		if (n === void 0 && t) throw new J(e);
		return n;
	}
	getDefaultDictionaryCache() {
		return this.dictionaries.get(W().getDefaultLocale());
	}
	resolveDictionaryCacheLocale(e) {
		return this._resolveCacheLocale(e) ?? W().getDefaultLocale();
	}
	lookupTranslation(e, t, n) {
		return this.guard(void 0, () => {
			let { translationLocale: r, options: i } = this.resolveLookupParams(e, n);
			return r ? this.translations.get(r)?.get({
				message: t,
				options: i
			}) : t;
		});
	}
	async lookupTranslationWithFallback(e, t, n) {
		return this.guardAsync(void 0, () => this.lookupTranslationWithFallbackResolved(e, t, n));
	}
	async getLookupTranslation(e) {
		return this.guardAsync((e) => e, async () => {
			let t = this._resolveCacheLocale(e);
			if (!t) return (e) => e;
			let n = await this.translations.getOrLoad(t), r = async (e = []) => {
				if (process.env.NODE_ENV !== "production" && W().isDevHotReloadEnabled()) {
					let r = Bi(e, t, (e) => this._resolveCacheLocale(e) ?? this._resolveLocale(e));
					r.length !== e.length && U.warn(`I18nCache: getLookupTranslation(): prefetchEntries must all be the same locale, ignoring all entries that are not for ${t}`), await Promise.allSettled(r.filter((e) => n.get(e) == null).map((e) => n.miss(e)));
				}
			}, i = (e, r = {}) => this.guard(void 0, () => {
				let { translationLocale: i, options: a } = this.resolveLookupParams(r.$locale ?? t, r);
				return i ? (i === t ? n : this.translations.get(i))?.get({
					message: e,
					options: a
				}) : e;
			});
			return Object.assign(i, { prefetchEntries: r }), i;
		});
	}
	guard(e, t) {
		try {
			return t();
		} catch (t) {
			return this.handleError(t), e;
		}
	}
	async guardAsync(e, t) {
		try {
			return await t();
		} catch (t) {
			return this.handleError(t), e;
		}
	}
	handleError(e) {
		if (e instanceof J) throw e;
		switch (Kr()) {
			case "development": throw e;
			default: U.error("I18nCache: " + e);
		}
	}
	_resolveLocale(e) {
		let t = W(), n = t.determineLocale(e);
		if (!t.isValidLocale(e) || !n) throw Error(`Locale "${e}" is not valid. Use a valid BCP 47 locale code or add a custom mapping.`);
		return n;
	}
	_resolveCacheLocale(e) {
		let t = this._resolveLocale(e), n = W();
		if (n.requiresTranslation(t)) return t;
		let r = n.resolveAliasLocale(n.standardizeLocale(e));
		if (n.requiresTranslation(r)) return r;
	}
	resolveLookupParams(e, t) {
		let n = this._resolveCacheLocale(e);
		return {
			translationLocale: n,
			options: n ? this.resolveLookupOptions(t, n) : t
		};
	}
	resolveLookupOptions(e = {}, t) {
		return e.$locale ? {
			...e,
			$locale: t ?? this._resolveCacheLocale(e.$locale) ?? this._resolveLocale(e.$locale)
		} : e;
	}
	async lookupTranslationWithFallbackResolved(e, t, n) {
		let { translationLocale: r, options: i } = this.resolveLookupParams(e, n);
		if (!r) return t;
		let a = await this.translations.getOrLoad(r), o = a.get({
			message: t,
			options: i
		});
		return o ??= await a.miss({
			message: t,
			options: i
		}), o;
	}
};
function zi(e) {
	if (e.runtimeUrl && e.runtimeUrl !== "https://api.gtx.dev" && (e.projectId || U.warn("I18nCache: " + y({
		whatHappened: "Runtime translation needs a projectId",
		fix: "Add projectId to the I18nCache config or disable runtime translation"
	})), !e.devApiKey && !e.apiKey && U.warn("I18nCache: " + y({
		whatHappened: "Runtime translation needs devApiKey or apiKey",
		fix: "Add credentials to the I18nCache config or disable runtime translation"
	}))), e.loadDictionary && !e.dictionary) throw U.error("I18nCache: " + y({
		whatHappened: "loadDictionary needs a source dictionary",
		fix: "Provide dictionary so the default locale has source content"
	})), Error("Validation errors occurred");
}
function Bi(e, t, n) {
	return e.flatMap((e) => {
		let r = e.options.$locale;
		if (r == null) return [e];
		try {
			let i = n(r);
			return i === t ? [{
				message: e.message,
				options: {
					...e.options,
					$locale: i
				}
			}] : [];
		} catch {
			return [];
		}
	});
}
function Vi(e) {
	let t = "hash" in e ? e.hash : ci(e.message, e.options);
	return `${e.locale}:${t}`;
}
function Y() {
	return Hr();
}
function Hi(e) {
	Ur(e);
}
var Ui = "generaltranslation.locale-reset", Wi = "server-render", Gi = Symbol.for("generaltranslation.react-core.ReactI18nConfig"), Ki = class extends Qr {
	renderStrategy;
	localeCookieName;
	regionCookieName;
	enableI18nCookieName;
	constructor(e = {}, t = Wi) {
		super(e), Yi(t), Object.defineProperty(this, Gi, { value: !0 }), this.renderStrategy = t, this.localeCookieName = e.localeCookieName ?? "generaltranslation.locale", this.regionCookieName = e.regionCookieName ?? "generaltranslation.region", this.enableI18nCookieName = e.enableI18nCookieName ?? "generaltranslation.enable-i18n";
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
function X() {
	let e = W();
	if (Xi(e)) return e;
	throw Error(y({
		source: "@generaltranslation/react-core",
		severity: "Error",
		whatHappened: "Cannot read ReactI18nConfig after base I18nConfig setup.",
		why: "the internal I18nConfig singleton was initialized without react-core render strategy support",
		fix: "Initialize GT through gt-react or @generaltranslation/react-core/pure."
	}));
}
function qi(e) {
	ii(e);
}
function Ji(e = {}, t = Wi) {
	let n = new Ki(e, t);
	return qi(n), n;
}
function Yi(e) {
	if (e !== "SPA" && e !== "server-render") throw Error(y({
		source: "@generaltranslation/react-core",
		severity: "Error",
		whatHappened: "Invalid React render strategy.",
		why: `the render strategy must be "SPA" or "server-render", but received "${String(e)}"`,
		fix: "Initialize GT through gt-react or pass a valid render strategy."
	}));
}
function Xi(e) {
	if (e instanceof Ki) return !0;
	let t = e;
	return t[Gi] === !0 && typeof t.getRenderStrategy == "function" && typeof t.getLocaleCookieName == "function" && typeof t.getRegionCookieName == "function" && typeof t.getEnableI18nCookieName == "function";
}
var Zi = class extends Ri {};
function Qi(e) {
	Ji(e, "server-render"), Hi(new Zi(e));
}
function $i(e, t) {
	return e.add(t), () => {
		e.delete(t);
	};
}
function ea(e, t) {
	let n = t.options.$_hash ?? ci(t.message, t.options);
	return e?.[t.locale]?.[n];
}
function ta(e, t) {
	return q(ra(e, t));
}
function na(e, t) {
	return ra(e, t);
}
function ra(e, { locale: t, id: n }) {
	let r = e?.[t];
	if (!r) return;
	if (!n) return r;
	let i = r;
	for (let e of n.split(".")) {
		if (!ia(e) || !G(i) || !Object.prototype.hasOwnProperty.call(i, e)) return;
		i = i[e];
	}
	return i;
}
function ia(e) {
	return e !== "__proto__" && e !== "constructor" && e !== "prototype";
}
function aa(e) {
	if (e instanceof Error) return `${e.name}|${e.message}`;
	if (typeof e == "object" && e) try {
		return `object|${JSON.stringify(e)}`;
	} catch {
		return `object|${String(e)}`;
	}
	return `${typeof e}|${String(e)}`;
}
var oa = class {
	translateListeners = /* @__PURE__ */ new Set();
	dictionaryEntryListeners = /* @__PURE__ */ new Set();
	dictionaryObjectListeners = /* @__PURE__ */ new Set();
	loggedRuntimeTranslationErrors = /* @__PURE__ */ new Set();
	constructor() {}
	updateTranslations = (e) => {
		Y().updateTranslations(e);
	};
	updateDictionaries = (e) => {
		Y().updateDictionaries(e);
	};
	translate = async (e) => Y().lookupTranslationWithFallback(e.locale, e.message, e.options).then(() => {
		this.emitTranslateEvent(e);
	}).catch((e) => this.logRuntimeTranslationError(e));
	translateDictionaryEntry = (e) => {
		Y().lookupDictionaryWithFallback(e.locale, e.id).then(() => {
			this.emitDictionaryEvent(e);
		}).catch((e) => this.logRuntimeTranslationError(e));
	};
	translateDictionaryObject = (e) => {
		Y().lookupDictionaryObjWithFallback(e.locale, e.id).then(() => {
			this.emitDictionaryEvent(e);
		}).catch((e) => this.logRuntimeTranslationError(e));
	};
	logRuntimeTranslationError(e) {
		let t = v(e), n = aa(e);
		if (!this.loggedRuntimeTranslationErrors.has(n)) {
			if (this.loggedRuntimeTranslationErrors.add(n), this.loggedRuntimeTranslationErrors.size > 100) {
				let e = this.loggedRuntimeTranslationErrors.values().next().value;
				e !== void 0 && this.loggedRuntimeTranslationErrors.delete(e);
			}
			console.error(y({
				source: "@generaltranslation/react-core",
				severity: "Error",
				whatHappened: "A runtime translation request failed.",
				wayOut: "Rendering falls back to untranslated content.",
				details: t
			}));
		}
	}
	subscribeToTranslate = (e, t) => {
		let n = Vi(e);
		return $i(this.translateListeners, (e) => {
			Vi(e) === n && t();
		});
	};
	subscribeToTranslationEvents = (e) => $i(this.translateListeners, e);
	subscribeToDictionaryEntryEvents = (e) => $i(this.dictionaryEntryListeners, e);
	subscribeToDictionaryObjectEvents = (e) => $i(this.dictionaryObjectListeners, e);
	getTranslateSnapshot = (e, t = {}) => ea(t, e) ?? Y().lookupTranslation(e.locale, e.message, e.options);
	getDictionaryEntrySnapshot = (e, t = {}) => ta(t, e) ?? Y().lookupDictionary(e.locale, e.id);
	getDictionaryObjectSnapshot = (e, t = {}) => na(t, e) ?? Y().lookupDictionaryObj(e.locale, e.id);
	emitTranslateEvent(e) {
		this.translateListeners.forEach((t) => t(e));
	}
	emitDictionaryEvent(e) {
		this.dictionaryEntryListeners.forEach((t) => t(e)), this.dictionaryObjectListeners.forEach((t) => {
			t(e);
		});
	}
};
function sa({ i18nConfigParams: e, nextI18nCacheParams: t } = Kt()) {
	Qi({
		...e,
		...t,
		cacheExpiryTime: null
	});
}
var ca = H({
	namespace: "reactCore",
	key: "gtContext",
	source: "@generaltranslation/react-core",
	notInitialized: () => y({
		source: "@generaltranslation/react-core",
		severity: "Error",
		whatHappened: "Cannot read GTContext before it has been initialized",
		why: "the internal GTContext singleton is unavailable",
		fix: "Add a <GTProvider> at the root of your component tree."
	})
});
function la() {
	return ca.isInitialized() || ca.set(e(void 0)), ca.get();
}
var ua = la();
function da({ children: e, translations: n, dictionaries: i, conditionStore: a, i18nStore: o, onMissingTranslation: c, onMissingDictionaryEntry: l, onMissingDictionaryObj: u }) {
	let d = r(() => ({
		translationsSnapshot: n,
		dictionariesSnapshot: i ?? {},
		i18nStore: o,
		conditionStore: a,
		onMissingTranslation: c,
		onMissingDictionaryEntry: l,
		onMissingDictionaryObj: u
	}), [
		n,
		i,
		o,
		a,
		c,
		l,
		u
	]);
	return t(() => {
		o.updateTranslations(n), o.updateDictionaries(i ?? {});
	}, [
		n,
		i,
		o
	]), s(ua.Provider, {
		value: d,
		children: e
	});
}
function Z({ cookieName: e }) {
	if (!(typeof document > "u")) return li(document.cookie, e);
}
function Q({ cookieName: e, value: t }) {
	typeof document > "u" || (document.cookie = `${e}=${t};path=/`);
}
function fa(e) {
	let t = [], n = Z({ cookieName: e });
	n && t.push(n);
	let r = navigator?.languages || [];
	return t.push(...r), t;
}
var pa = class {
	constructor(e) {
		this.getLocale = () => ma(this.customGetLocale), this.setLocale = (e) => {
			this.updateLocale(e), Q({
				cookieName: Ui,
				value: "true"
			}), this.reload();
		}, this.getRegion = () => Z({ cookieName: X().getRegionCookieName() }) || this.customGetRegion?.(), this.setRegion = (e) => {
			this.updateRegion(e), this.reload();
		}, this.getEnableI18n = () => {
			let e = Z({ cookieName: X().getEnableI18nCookieName() });
			return e === void 0 ? this.customGetEnableI18n?.() ?? !0 : e === "true";
		}, this.setEnableI18n = (e) => {
			this.updateEnableI18n(e), this.reload();
		}, this.updateLocale = (e) => {
			let t = X();
			Q({
				cookieName: t.getLocaleCookieName(),
				value: t.resolveSupportedLocale(e)
			});
		}, this.updateRegion = (e) => {
			Q({
				cookieName: X().getRegionCookieName(),
				value: e ?? ""
			});
		}, this.updateEnableI18n = (e) => {
			Q({
				cookieName: X().getEnableI18nCookieName(),
				value: e ? "true" : "false"
			});
		}, this.reload = () => {
			let e = {
				locale: this.getLocale(),
				region: this.getRegion(),
				enableI18n: this.getEnableI18n()
			};
			this.customReload(e);
		};
		let t = X();
		this.customReload = e._reload ?? (() => typeof window < "u" ? window.location.reload() : void 0), this.customGetLocale = e._getLocale, this.customGetRegion = e._getRegion, this.customGetEnableI18n = e._getEnableI18n, Q({
			cookieName: t.getLocaleCookieName(),
			value: t.resolveSupportedLocale(e.locale)
		}), e.region !== void 0 && Q({
			cookieName: t.getRegionCookieName(),
			value: e.region
		}), this.updateEnableI18n(e.enableI18n ?? !0);
	}
};
function ma(e) {
	let t = X(), n = fa(t.getLocaleCookieName());
	return e && n.push(e()), t.resolveSupportedLocale(n);
}
function ha(e) {
	let t = e.trim();
	return t ? /[.!?)]$/.test(t) ? t : `${t}.` : "";
}
function $(e) {
	let t = e.trim(), n = t.length;
	for (; n > 0;) {
		let e = t[n - 1];
		if (e !== "." && e !== "!" && e !== "?") break;
		--n;
	}
	return t.slice(0, n);
}
function ga(e) {
	if (!e) return "";
	let t = Array.isArray(e) ? e.join(", ") : e;
	return t.trim() ? ha(`Details: ${t}`) : "";
}
function _a({ source: e, severity: t, whatHappened: n, reassurance: r, why: i, fix: a, wayOut: o, details: s, docsUrl: c }) {
	let l = e ? t ? `${e} ${t}:` : `${e}:` : t ? `${t}:` : "", u = i ? `${$(n)} because ${$(i)}` : n, d = !!a && !!o && /^[a-z]/.test($(o)), f = [
		u,
		r,
		d ? `${$(a)}, or ${$(o)}` : a,
		d ? void 0 : o,
		ga(s)
	].filter((e) => !!e).map(ha);
	c && f.push(`Learn more: ${c}`);
	let p = f.join(" ");
	return l ? `${l} ${p}` : p;
}
var va = _a({
	source: "gt-react",
	severity: "Error",
	whatHappened: "Cannot read GT runtime context before it has been initialized",
	why: "the internal ConditionStore singleton is unavailable",
	fix: "Call initializeGT() (or initializeGTSPA() in SPA apps) before rendering and add a <GTProvider> at the root of your component tree."
}), { setConditionStore: ya, isConditionStoreInitialized: ba } = ai(va), { getConditionStore: xa, setConditionStore: Sa, isConditionStoreInitialized: Ca } = ai(va);
function wa(e) {
	let t = Ta(e), n = Ea(e), r = Da(e);
	if (Ca()) {
		let e = xa();
		return e.updateLocale(t), n !== void 0 && e.updateRegion(n), e.updateEnableI18n(r), e;
	}
	let i = new pa({
		...e,
		locale: t,
		region: n,
		enableI18n: r
	});
	return Sa(i), i;
}
function Ta({ _getLocale: e, locale: t }) {
	let n = X(), r = [];
	return t && r.push(...Array.isArray(t) ? t : [t]), e && r.push(e()), r.push(...fa(n.getLocaleCookieName())), n.resolveSupportedLocale(r);
}
function Ea({ _getRegion: e, region: t }) {
	return Z({ cookieName: X().getRegionCookieName() }) || e?.() || t;
}
function Da({ enableI18n: e, _getEnableI18n: t }) {
	if (e !== void 0) return e;
	let n = Z({ cookieName: X().getEnableI18nCookieName() });
	return n === void 0 ? t?.() ?? !0 : n === "true";
}
function Oa(e) {
	let t = r(() => wa(e), [
		e.locale,
		e.region,
		e.enableI18n,
		e._reload
	]), n = i(null);
	return n.current ??= new oa(), s(da, {
		...e,
		conditionStore: t,
		i18nStore: n.current
	});
}
sa();
var ka = "en";
function Aa({ children: e }) {
	return s(Oa, {
		locale: ka,
		children: s(d, {
			locale: ka,
			children: e
		})
	});
}
function ja() {
	return s(Aa, { children: s(d, {}) });
}
export { ja as default };
