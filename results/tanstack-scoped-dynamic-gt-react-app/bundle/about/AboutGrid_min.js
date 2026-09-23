import e, { Children as t, Fragment as n, cloneElement as r, createContext as i, createElement as a, isValidElement as o, useContext as s, useEffect as c, useMemo as l, useRef as u, useSyncExternalStore as d } from "react";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
import { createIsomorphicFn as m, createMiddleware as h } from "@tanstack/react-start";
import { getRequest as g, setCookie as _ } from "@tanstack/react-start/server";
import v from "../../../../gt.config.json";
var y = class extends Error {
	constructor(e, t, n) {
		super(e), this.name = "ApiError", this.code = t, this.message = n;
	}
}, ee = 6e4;
function b(e) {
	let t = e.trim();
	return t ? /[.!?)]$/.test(t) ? t : `${t}.` : "";
}
function x(e) {
	let t = e.trim(), n = t.length;
	for (; n > 0;) {
		let e = t[n - 1];
		if (e !== "." && e !== "!" && e !== "?") break;
		--n;
	}
	return t.slice(0, n);
}
function te(e) {
	if (!e) return "";
	let t = Array.isArray(e) ? e.join(", ") : e;
	return t.trim() ? b(`Details: ${t}`) : "";
}
function ne(e) {
	if (e != null) return String(e);
}
function S({ source: e, severity: t, whatHappened: n, reassurance: r, why: i, fix: a, wayOut: o, details: s, docsUrl: c }) {
	let l = e ? t ? `${e} ${t}:` : `${e}:` : t ? `${t}:` : "", u = i ? `${x(n)} because ${x(i)}` : n, d = !!a && !!o && /^[a-z]/.test(x(o)), f = [
		u,
		r,
		d ? `${x(a)}, or ${x(o)}` : a,
		d ? void 0 : o,
		te(s)
	].filter((e) => !!e).map(b);
	c && f.push(`Learn more: ${c}`);
	let p = f.join(" ");
	return l ? `${l} ${p}` : p;
}
var re = "https://cdn.gtx.dev";
function ie(e) {
	return typeof e == "object" && !!e && "error" in e && typeof e.error == "string";
}
function ae(e) {
	return ie(e.error) || typeof e.error == "string";
}
function oe(e) {
	if (e.data !== void 0) return e.data;
	if (e.response) {
		let t = ie(e.error) ? e.error.error : typeof e.error == "string" ? e.error : e.response.statusText;
		throw new y(t, e.response.status, t);
	}
	throw e.error;
}
var se = (e) => e.client.post({
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
}), ce = 3, le = 500, ue = 6e4, de = /* @__PURE__ */ new Set([
	"GET",
	"HEAD",
	"OPTIONS",
	"PUT",
	"DELETE"
]), fe = 6e4;
function pe({ fetch: e = globalThis.fetch, timeoutMs: t = fe } = {}) {
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
var me = (e) => new Promise((t) => setTimeout(t, e));
function he(e) {
	if (!e) return;
	let t = Number(e.split(",")[0].split(";")[0].trim());
	return Number.isFinite(t) && t >= 0 ? t * 1e3 : void 0;
}
function ge(e) {
	let t = he(e);
	if (t !== void 0) return t;
	if (!e) return;
	let n = Date.parse(e);
	return Number.isNaN(n) ? void 0 : Math.max(n - Date.now(), 0);
}
function _e(e, t, n) {
	return e?.status === 429 ? ge(e.headers.get("Retry-After")) ?? he(e.headers.get("RateLimit-Reset")) ?? ue : le * (n === "linear" ? t + 1 : 2 ** t);
}
function ve({ fetch: e = globalThis.fetch, retryPolicy: t = "exponential" } = {}) {
	return async (n, r) => {
		let i = new Request(n, r), a = t === "none" ? 0 : ce, o = de.has(i.method);
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
			r?.body?.cancel(), await me(_e(r, n, t));
		}
		throw Error("Max retries exceeded");
	};
}
var ye = { bodySerializer: (e) => JSON.stringify(e, (e, t) => typeof t == "bigint" ? t.toString() : t) }, be = ({ onRequest: e, onSseError: t, onSseEvent: n, responseTransformer: r, responseValidator: i, sseDefaultRetryDelay: a, sseMaxRetryAttempts: o, sseMaxRetryDelay: s, sseSleepFn: c, url: l, ...u }) => {
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
}, xe = (e) => {
	switch (e) {
		case "label": return ".";
		case "matrix": return ";";
		case "simple": return ",";
		default: return "&";
	}
}, Se = (e) => {
	switch (e) {
		case "form": return ",";
		case "pipeDelimited": return "|";
		case "spaceDelimited": return "%20";
		default: return ",";
	}
}, Ce = (e) => {
	switch (e) {
		case "label": return ".";
		case "matrix": return ";";
		case "simple": return ",";
		default: return "&";
	}
}, we = ({ allowReserved: e, explode: t, name: n, style: r, value: i }) => {
	if (!t) {
		let t = (e ? i : i.map((e) => encodeURIComponent(e))).join(Se(r));
		switch (r) {
			case "label": return `.${t}`;
			case "matrix": return `;${n}=${t}`;
			case "simple": return t;
			default: return `${n}=${t}`;
		}
	}
	let a = xe(r), o = i.map((t) => r === "label" || r === "simple" ? e ? t : encodeURIComponent(t) : Te({
		allowReserved: e,
		name: n,
		value: t
	})).join(a);
	return r === "label" || r === "matrix" ? a + o : o;
}, Te = ({ allowReserved: e, name: t, value: n }) => {
	if (n == null) return "";
	if (typeof n == "object") throw Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
	return `${t}=${e ? n : encodeURIComponent(n)}`;
}, Ee = ({ allowReserved: e, explode: t, name: n, style: r, value: i, valueOnly: a }) => {
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
	let o = Ce(r), s = Object.entries(i).map(([t, i]) => Te({
		allowReserved: e,
		name: r === "deepObject" ? `${n}[${t}]` : t,
		value: i
	})).join(o);
	return r === "label" || r === "matrix" ? o + s : s;
}, De = /\{[^{}]+\}/g, Oe = ({ path: e, url: t }) => {
	let n = t, r = t.match(De);
	if (r) for (let t of r) {
		let r = !1, i = t.substring(1, t.length - 1), a = "simple";
		i.endsWith("*") && (r = !0, i = i.substring(0, i.length - 1)), i.startsWith(".") ? (i = i.substring(1), a = "label") : i.startsWith(";") && (i = i.substring(1), a = "matrix");
		let o = e[i];
		if (o == null) continue;
		if (Array.isArray(o)) {
			n = n.replace(t, we({
				explode: r,
				name: i,
				style: a,
				value: o
			}));
			continue;
		}
		if (typeof o == "object") {
			n = n.replace(t, Ee({
				explode: r,
				name: i,
				style: a,
				value: o,
				valueOnly: !0
			}));
			continue;
		}
		if (a === "matrix") {
			n = n.replace(t, `;${Te({
				name: i,
				value: o
			})}`);
			continue;
		}
		let s = encodeURIComponent(a === "label" ? `.${o}` : o);
		n = n.replace(t, s);
	}
	return n;
}, ke = ({ baseUrl: e, path: t, query: n, querySerializer: r, url: i }) => {
	let a = i.startsWith("/") ? i : `/${i}`, o = (e ?? "") + a;
	t && (o = Oe({
		path: t,
		url: o
	}));
	let s = n ? r(n) : "";
	return s.startsWith("?") && (s = s.substring(1)), s && (o += `?${s}`), o;
};
function Ae(e) {
	let t = e.body !== void 0;
	if (t && e.bodySerializer) return "serializedBody" in e ? e.serializedBody !== void 0 && e.serializedBody !== "" ? e.serializedBody : null : e.body === "" ? null : e.body;
	if (t) return e.body;
}
var je = async (e, t) => {
	let n = typeof t == "function" ? await t(e) : t;
	if (n) return e.scheme === "bearer" ? `Bearer ${n}` : e.scheme === "basic" ? `Basic ${btoa(n)}` : n;
}, Me = ({ parameters: e = {}, ...t } = {}) => (n) => {
	let r = [];
	if (n && typeof n == "object") for (let i in n) {
		let a = n[i];
		if (a == null) continue;
		let o = e[i] || t;
		if (Array.isArray(a)) {
			let e = we({
				allowReserved: o.allowReserved,
				explode: !0,
				name: i,
				style: "form",
				value: a,
				...o.array
			});
			e && r.push(e);
		} else if (typeof a == "object") {
			let e = Ee({
				allowReserved: o.allowReserved,
				explode: !0,
				name: i,
				style: "deepObject",
				value: a,
				...o.object
			});
			e && r.push(e);
		} else {
			let e = Te({
				allowReserved: o.allowReserved,
				name: i,
				value: a
			});
			e && r.push(e);
		}
	}
	return r.join("&");
}, Ne = (e) => {
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
}, Pe = (e, t) => t ? !!(e.headers.has(t) || e.query?.[t] || e.headers.get("Cookie")?.includes(`${t}=`)) : !1, Fe = async ({ security: e, ...t }) => {
	for (let n of e) {
		if (Pe(t, n.name)) continue;
		let e = await je(n, t.auth);
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
}, Ie = (e) => ke({
	baseUrl: e.baseUrl,
	path: e.path,
	query: e.query,
	querySerializer: typeof e.querySerializer == "function" ? e.querySerializer : Me(e.querySerializer),
	url: e.url
}), Le = (e, t) => {
	let n = {
		...e,
		...t
	};
	return n.baseUrl?.endsWith("/") && (n.baseUrl = n.baseUrl.substring(0, n.baseUrl.length - 1)), n.headers = ze(e.headers, t.headers), n;
}, Re = (e) => {
	let t = [];
	return e.forEach((e, n) => {
		t.push([n, e]);
	}), t;
}, ze = (...e) => {
	let t = new Headers();
	for (let n of e) {
		if (!n) continue;
		let e = n instanceof Headers ? Re(n) : Object.entries(n);
		for (let [n, r] of e) if (r === null) t.delete(n);
		else if (Array.isArray(r)) for (let e of r) t.append(n, e);
		else r !== void 0 && t.set(n, typeof r == "object" ? JSON.stringify(r) : r);
	}
	return t;
}, Be = class {
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
}, Ve = () => ({
	error: new Be(),
	request: new Be(),
	response: new Be()
}), He = Me({
	allowReserved: !1,
	array: {
		explode: !0,
		style: "form"
	},
	object: {
		explode: !0,
		style: "deepObject"
	}
}), Ue = { "Content-Type": "application/json" }, We = (e = {}) => ({
	...ye,
	headers: Ue,
	parseAs: "auto",
	querySerializer: He,
	...e
}), Ge = (e = {}) => {
	let t = Le(We(), e), n = () => ({ ...t }), r = (e) => (t = Le(t, e), n()), i = Ve(), a = async (e) => {
		let n = {
			...t,
			...e,
			fetch: e.fetch ?? t.fetch ?? globalThis.fetch,
			headers: ze(t.headers, e.headers),
			serializedBody: void 0
		};
		return n.security && await Fe({
			...n,
			security: n.security
		}), n.requestValidator && await n.requestValidator(n), n.body !== void 0 && n.bodySerializer && (n.serializedBody = n.bodySerializer(n.body)), (n.body === void 0 || n.serializedBody === "") && n.headers.delete("Content-Type"), {
			opts: n,
			url: Ie(n)
		};
	}, o = async (e) => {
		let { opts: t, url: n } = await a(e), r = {
			redirect: "follow",
			...t,
			body: Ae(t)
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
			let e = (t.parseAs === "auto" ? Ne(c.headers.get("Content-Type")) : t.parseAs) ?? "json";
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
		return be({
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
		buildUrl: Ie,
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
function Ke(e) {
	let t = new Headers({ "gt-api-version": e.apiVersion ?? "2026-03-06.v1" });
	return e.apiKey && t.set("Authorization", `Bearer ${e.apiKey}`), e.projectId && t.set("gt-project-id", e.projectId), Ge({
		baseUrl: e.baseUrl,
		fetch: ve({
			fetch: pe({
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
}, qe = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/, Je = /^@+(\+|#+)?[rs]?$/, Ye = /^(?:(?:\+|#+)[rs]?|[rs])$/, Xe = /(\*)(0+)|(#+)(0+)|(0+)/g, Ze = /[\t-\r \x85\u200E\u200F\u2028\u2029]+/u, Qe = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F|[abB]{1,5}|[hHkK]{1,2}|w{1,2}|W|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g, $e = {
	floor: "floor",
	ceiling: "ceil",
	down: "trunc",
	up: "expand",
	"half-even": "halfEven",
	"half-down": "halfTrunc",
	"half-up": "halfExpand"
}, et = {
	h: "h12",
	H: "h23",
	K: "h11",
	k: "h24"
};
function tt(e) {
	let t = e.split(Ze).filter(Boolean);
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
function nt(e) {
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
				rt(n), t.style = "unit", t.unit = e.replace(/^(.*?)-/, "");
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
				for (let e of n.options) it(t, e);
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
				if (rt(n), n.options.length > 1) throw RangeError("integer-width stems only accept a single optional option");
				ot(t, e);
				continue;
		}
		if (n.stem.slice(0, 14) === "rounding-mode-") {
			let e = $e[n.stem.slice(14)];
			typeof e == "string" && (t.roundingMode = e);
			continue;
		}
		if (/^0+$/u.test(n.stem)) {
			t.minimumIntegerDigits = n.stem.length;
			continue;
		}
		if (!st(t, n)) {
			if (Je.test(n.stem)) {
				Object.assign(t, ct(n.stem));
				continue;
			}
			if (Ye.test(n.stem)) throw SyntaxError("Significant precision must start with @.");
			it(t, n.stem) || at(t, n.stem);
		}
	}
	return t;
}
function rt(e) {
	if (!e.options[0]) throw SyntaxError(`${e.stem} requires an option.`);
}
function it(e, t) {
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
function at(e, t) {
	if (t[0] !== "E") return !1;
	let n = /^(E{1,2})(\+!|\+\?)?(0+)$/u.exec(t);
	if (!n) throw SyntaxError("Malformed concise eng/scientific notation");
	return e.notation = n[1] === "EE" ? "engineering" : "scientific", n[2] && it(e, n[2]), e.minimumIntegerDigits = n[3].length, !0;
}
function ot(e, t) {
	t.replace(Xe, (t, n, r, i, a, o) => {
		if (n && r) e.minimumIntegerDigits = r.length;
		else if (i && a) throw Error("We currently do not support maximum integer digits");
		else if (o) throw Error("We currently do not support exact integer digits");
		return "";
	});
}
function st(e, t) {
	let n = qe.exec(t.stem);
	if (!n) return !1;
	if (t.options.length > 1) throw SyntaxError("Fraction precision accepts at most one option.");
	let [, r, i, a, o, s] = n;
	return i === "*" ? e.minimumFractionDigits = r.length : a ? e.maximumFractionDigits = a.length : o && s ? (e.minimumFractionDigits = o.length, e.maximumFractionDigits = o.length + s.length) : (e.minimumFractionDigits = r.length, e.maximumFractionDigits = r.length), t.options[0] === "w" ? e.trailingZeroDisplay = "stripIfInteger" : t.options[0] && Object.assign(e, ct(t.options[0])), !0;
}
function ct(e) {
	let t = {};
	if (e.endsWith("r") && (t.roundingPriority = "morePrecision"), e.endsWith("s") && (t.roundingPriority = "lessPrecision"), Ye.test(e)) throw SyntaxError("Significant precision must start with @.");
	if (!Je.test(e)) return t;
	let n = e.replace(/[rs]$/u, ""), r = n.match(/^@+/u)?.[0] ?? "", i = n.slice(r.length);
	return r && (t.minimumSignificantDigits = r.length), i === "+" || (i[0] === "#" ? t.maximumSignificantDigits = r.length + i.length : r && (t.maximumSignificantDigits = r.length)), t;
}
function lt(e) {
	let t = {};
	for (let [n] of e.matchAll(Qe)) {
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
				if (e < 4) throw ft(n, "weekday");
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
				t.hourCycle = et[n[0]], t.hour = e === 2 ? "2-digit" : "numeric";
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
			default: throw ft(n, "date/time");
		}
	}
	return t;
}
function ut(e, t) {
	if (!t || !/[jJ]/u.test(e)) return e;
	let n = dt(t), r = "";
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
function dt(e) {
	let t = e;
	switch (t.hourCycle ?? t.hourCycles?.[0] ?? new Intl.DateTimeFormat(e.toString(), { hour: "numeric" }).resolvedOptions().hourCycle) {
		case "h11": return "K";
		case "h12": return "h";
		case "h24": return "k";
		default: return "H";
	}
}
function ft(e, t) {
	return /* @__PURE__ */ RangeError(`Unsupported ${t} skeleton field: ${e}.`);
}
var pt = /^[A-Za-z]$/u, mt = /^[-.0-9_A-Za-z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\u{EFFFF}]$/u;
function T(e) {
	return pt.test(e ?? "");
}
function ht(e) {
	return mt.test(e);
}
var gt = /[\t-\r \x85\u200E\u200F\u2028\u2029]/u, _t = /[\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\x21-\x2F\x3A-\x40\x5B-\x5E\x60\x7B-\x7E\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E-\uFD3F\uFE45-\uFE46]/u, vt = class {
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
		for (T(this.current()) || this.fail("INVALID_TAG", e), this.index += 1; !this.atEnd() && ht(this.current());) this.index += this.current().length;
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
						e = tt(t);
					} catch {
						this.failAt("INVALID_NUMBER_SKELETON", a, o);
					}
					r = {
						type: w.number,
						tokens: e,
						...s ? { location: s } : {},
						parsedOptions: this.options.shouldParseSkeletons ? nt(e) : {}
					};
				} else {
					t || this.failAt("EXPECT_DATE_TIME_SKELETON", e, this.index);
					let n = ut(t, this.options.locale);
					r = {
						type: w.dateTime,
						pattern: n,
						...s ? { location: s } : {},
						parsedOptions: this.options.shouldParseSkeletons ? lt(n) : {}
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
		for (; !this.atEnd() && !_t.test(this.current());) this.index += this.current().length;
		return this.message.slice(e, this.index);
	}
	skipSpace() {
		for (; !this.atEnd() && gt.test(this.current());) this.index += this.current().length;
	}
	consume(e) {
		return this.message.slice(this.index, this.index + e.length) === e && (this.index += e.length, !0);
	}
	current() {
		return bt(this.message, this.index);
	}
	peek() {
		let e = this.current();
		return bt(this.message, this.index + e.length);
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
		let t = this.positions ??= yt(this.message);
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
function yt(e) {
	let t = new Uint32Array(e.length + 1), n = new Uint32Array(e.length + 1), r = 0, i = 1, a = 1;
	for (; r < e.length;) {
		let o = bt(e, r);
		t[r] = i, n[r] = a, o.length === 2 && (t[r + 1] = i, n[r + 1] = a + 1), r += o.length, o === "\n" ? (i += 1, a = 1) : a += 1;
	}
	return t[r] = i, n[r] = a, [t, n];
}
function bt(e, t) {
	if (t >= e.length) return "\0";
	let n = e.charCodeAt(t);
	if (n < 55296 || n > 56319 || t + 1 >= e.length) return e.charAt(t);
	let r = e.charCodeAt(t + 1);
	return r >= 56320 && r <= 57343 ? e.slice(t, t + 2) : e.charAt(t);
}
function xt(e, t = {}) {
	return new vt(e, {
		shouldParseSkeletons: !0,
		requiresOtherClause: !0,
		...t
	}).parse();
}
var St = {
	integer: { maximumFractionDigits: 0 },
	currency: { style: "currency" },
	percent: { style: "percent" }
}, Ct = {
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
}, wt = {
	hour: "numeric",
	minute: "numeric",
	second: "numeric",
	timeZoneName: "short"
}, Tt = {
	short: {
		hour: "numeric",
		minute: "numeric"
	},
	medium: {
		hour: "numeric",
		minute: "numeric",
		second: "numeric"
	},
	long: wt,
	full: wt
};
function Et(e, t = "en", n = {}) {
	let r = Dt(xt(e, { locale: Lt(t) }), {
		message: e,
		locales: t,
		variables: n
	});
	return r.length === 1 ? r[0] : r.length ? r : "";
}
function Dt(e, t, n) {
	let r = [], i = (e) => {
		let t = r[r.length - 1];
		typeof t == "string" && typeof e == "string" ? r[r.length - 1] = t + e : r.push(e);
	};
	for (let r of e) switch (r.type) {
		case C.literal:
			i(r.value);
			break;
		case C.pound:
			n !== void 0 && i(kt(t).format(n));
			break;
		case C.argument: {
			let e = E(t.variables, r.value);
			i(typeof e == "string" || typeof e == "number" ? String(e) : e || "");
			break;
		}
		case C.number: {
			let e = E(t.variables, r.value), { scale: n, ...a } = typeof r.style == "string" ? St[r.style] ?? {} : r.style?.type === w.number ? r.style.parsedOptions : {}, o = Ot(e, n);
			i(kt(t, a).format(o));
			break;
		}
		case C.date:
		case C.time: {
			let e = E(t.variables, r.value), n = r.type === C.date ? Ct : Tt;
			i(At(t, typeof r.style == "string" ? n[r.style] : r.style?.type === w.dateTime ? r.style.parsedOptions : r.type === C.time ? Tt.medium : void 0).format(e));
			break;
		}
		case C.select: {
			let e = String(E(t.variables, r.value)), n = Ft(r.options, e) ?? r.options.other;
			if (!n) throw It(r.value, e, r.options);
			Dt(n.value, t).forEach(i);
			break;
		}
		case C.plural: {
			let e = E(t.variables, r.value), n = `=${String(e)}`, a = Ft(r.options, n), o = typeof e == "bigint" ? e : Number(e), s = typeof o == "bigint" ? o - BigInt(r.offset) : o - r.offset;
			if (!a && Pt(r.options)) {
				let e = jt(t, r.pluralType ?? "cardinal").select(Nt(s));
				a = Ft(r.options, e);
			}
			if (a ??= r.options.other, !a) throw It(r.value, e, r.options);
			Dt(a.value, t, s).forEach(i);
			break;
		}
		case C.tag: {
			let e = E(t.variables, r.value);
			if (typeof e != "function") throw TypeError(`The ICU tag variable "${r.value}" must be a function.`);
			let a = e(Dt(r.children, t, n));
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
function Ot(e, t) {
	if (!t) return e;
	if (typeof e == "bigint") {
		if (!Number.isInteger(t)) throw RangeError(`Cannot apply fractional scale ${t} to a bigint value.`);
		return e * BigInt(t);
	}
	return Number(e) * t;
}
function kt(e, t = {}) {
	return Mt(e.numberFormats ??= /* @__PURE__ */ new Map(), JSON.stringify(t), () => new Intl.NumberFormat(e.locales, t));
}
function At(e, t) {
	return Mt(e.dateTimeFormats ??= /* @__PURE__ */ new Map(), t ? JSON.stringify(t) : "", () => new Intl.DateTimeFormat(e.locales, t));
}
function jt(e, t) {
	if (typeof Intl.PluralRules != "function") {
		let t = /* @__PURE__ */ Error("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n");
		throw t.code = "MISSING_INTL_API", t.originalMessage = e.message, t;
	}
	return Mt(e.pluralRules ??= /* @__PURE__ */ new Map(), t, () => new Intl.PluralRules(e.locales, { type: t }));
}
function Mt(e, t, n) {
	let r = e.get(t);
	if (r) return r;
	let i = n();
	return e.set(t, i), i;
}
function Nt(e) {
	let t = Number(e);
	if (typeof e == "bigint" && Math.abs(t) > 9007199254740991) throw RangeError(`Cannot select a plural category for bigint ${e} outside the safe integer range.`);
	return t;
}
function Pt(e) {
	return Object.keys(e).some((e) => e !== "other" && e[0] !== "=");
}
function Ft(e, t) {
	return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0;
}
function It(e, t, n) {
	return /* @__PURE__ */ RangeError(`The ICU variable "${e}" value ${JSON.stringify(String(t))} did not match any of: ${Object.keys(n).join(", ")}.`);
}
function Lt(e) {
	if (Intl.Locale === void 0) return;
	let t = Intl.NumberFormat.supportedLocalesOf(e)[0], n = typeof e == "string" ? e : e[0];
	return new Intl.Locale(t ?? n);
}
function Rt(e) {
	return zt(e, !1, !1);
}
function zt(e, t, n) {
	return e.map((r, i) => {
		switch (r.type) {
			case C.literal: return Ht(r, t, i > 0, i < e.length - 1 || n);
			case C.argument: return `{${r.value}}`;
			case C.date:
			case C.time:
			case C.number: return Wt(r);
			case C.select: return `{${r.value},select,${Kt(r.options, !1)}}`;
			case C.plural: {
				let e = r.pluralType === "cardinal" ? "plural" : "selectordinal", t = r.offset ? `offset:${r.offset} ` : "";
				return `{${r.value},${e},${t}${Kt(r.options, !0)}}`;
			}
			case C.pound: return "#";
			case C.tag: return `<${r.value}>${zt(r.children, t, !0)}</${r.value}>`;
		}
	}).join("");
}
function Bt(e, t, n, r, i) {
	let a = "", o = 0;
	for (; o < e.length;) {
		if (e[o] !== "'") {
			a += e[o], o += 1;
			continue;
		}
		let s = o;
		for (; e[o] === "'";) o += 1;
		let c = o - s, l = e[o], u = "{}<>".includes(l) || t && l === "#", d = s === 0 && n || o === e.length && i || u, f = s === 0 && r;
		a += c === 1 && !d && !f ? "'" : "'".repeat(d ? c * 2 : c === 1 && f ? 2 : c * 2 - 1);
	}
	return a;
}
function Vt(e, t, n, r) {
	let i = [];
	function a(t, n) {
		let r = i[i.length - 1];
		r && (t === r[1] || /^'+$/u.test(e.slice(r[1], t))) ? r[1] = n : i.push([t, n]);
	}
	for (let n = 0; n < e.length; n += 1) {
		let r = e[n];
		if (r === "{") {
			let t = Math.max(e.lastIndexOf("{"), e.lastIndexOf("}"), n) + 1;
			a(n, t), n = t - 1;
		} else if (r === "}") a(n, n + 1);
		else if (r === "<" && (e[n + 1] === "/" || T(e[n + 1]))) {
			let t = e.indexOf(">", n + 1), r = t === -1 ? e.length : t + 1;
			a(n, r), n = r - 1;
		} else t && r === "#" && a(n, n + 1);
	}
	let o = "", s = 0;
	for (let [r, a] of i) o += Bt(e.slice(s, r), t, s !== 0, s === 0 && n, !0), o += `'${e.slice(r, a).replace(/'/g, "''")}'`, s = a;
	return o += Bt(e.slice(s), t, s !== 0, s === 0 && n, r), o;
}
function Ht({ value: e }, t, n, r) {
	return Ut(e) ? e : Vt(e, t, n, r);
}
function Ut(e) {
	if (e[0] !== "<" || e.slice(-2) !== "/>") return !1;
	let t = e.slice(1, -2);
	if (!T(t[0])) return !1;
	for (let e of t.slice(1)) if (!ht(e)) return !1;
	return !0;
}
function Wt(e) {
	let t = e.type === C.number ? "number" : e.type === C.date ? "date" : "time";
	return `{${e.value}, ${t}${e.style ? `, ${Gt(e.style)}` : ""}}`;
}
function Gt(e) {
	return typeof e == "string" ? e : e.type === w.dateTime ? `::${e.pattern}` : `::${e.tokens.map(({ stem: e, options: t }) => e + t.map((e) => `/${e}`).join("")).join(" ")}`;
}
function Kt(e, t) {
	return Object.entries(e).map(([e, n]) => `${e}{${zt(n.value, t, !0)}}`).join(" ");
}
function qt(e) {
	if (typeof Buffer < "u") return Buffer.from(e, "base64").toString("utf8");
	let t = atob(e), n = new Uint8Array(t.length);
	for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
	return new TextDecoder().decode(n);
}
function Jt({ icuString: e, shouldVisit: t, visitor: n, options: { recurseIntoVisited: r = !0, ...i } }) {
	let a = xt(e, i);
	return o(a), a;
	function o(e) {
		e.map(s);
	}
	function s(e) {
		let i = !1;
		t(e) && (n(e), i = !0), (!i || r) && (e.type === C.select || e.type === C.plural ? Object.values(e.options).map((e) => e.value).map(o) : e.type === C.tag && o(e.children));
	}
}
var D = "_gt_", Yt = RegExp(`^${D}\\d+$`), Xt = RegExp(`^${D}$`);
function Zt(e) {
	return e.type === C.select && Yt.test(e.value) && !!e.options.other && (e.options.other.value.length === 0 || e.options.other.value.length > 0 && e.options.other.value[0]?.type === C.literal);
}
function Qt(e) {
	return e.type === C.select && Xt.test(e.value) && !!e.options.other && (e.options.other.value.length === 0 || e.options.other.value.length > 0 && e.options.other.value[0]?.type === C.literal);
}
function $t(e) {
	let t = e;
	if (t && typeof t == "object" && typeof t.k == "string") {
		let e = Object.keys(t);
		if (e.length === 1 || e.length === 2 && (typeof t.i == "number" || typeof t.v == "string") || e.length === 3 && typeof t.v == "string" && typeof t.i == "number") return !0;
	}
	return !1;
}
var en = (e) => `generaltranslation Formatting Error: Invalid cutoff style: ${e}.`, tn = "DEFAULT_TERMINATOR_KEY", nn = {
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
		[tn]: {
			terminator: "…",
			separator: void 0
		}
	},
	none: { [tn]: {
		terminator: void 0,
		separator: void 0
	} }
}, rn = class e {
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
		if (!nn[r]) throw Error(en(r));
		let i = n.maxChars === void 0 ? void 0 : nn[r][new Intl.Locale(this.locale).language] || nn[r].DEFAULT_TERMINATOR_KEY, a = n.terminator ?? i?.terminator, o = a == null ? void 0 : n.separator ?? i?.separator;
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
}, an = {
	Collator: Intl.Collator,
	DateTimeFormat: Intl.DateTimeFormat,
	DisplayNames: Intl.DisplayNames,
	ListFormat: Intl.ListFormat,
	Locale: Intl.Locale,
	NumberFormat: Intl.NumberFormat,
	PluralRules: Intl.PluralRules,
	RelativeTimeFormat: Intl.RelativeTimeFormat,
	Segmenter: Intl.Segmenter,
	CutoffFormat: rn
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
		return o === void 0 && (o = new an[e](...t), a[i] = o), o;
	}
}();
function on(e) {
	return O.get("PluralRules", e);
}
var sn = [
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
function cn(e) {
	return sn.includes(e);
}
function ln(e, t = sn, n = ["en"]) {
	let r = on(n).select(e), i = Math.abs(e);
	if (i === 0 && t.includes("zero")) return "zero";
	if (i === 1) {
		if (t.includes("singular")) return "singular";
		if (t.includes("one")) return "one";
	}
	if (r === "one" && t.includes("singular")) return "singular";
	if (i === 2) {
		if (t.includes("dual")) return "dual";
		if (t.includes("two")) return "two";
	}
	return r === "two" && t.includes("dual") ? "dual" : t.includes(r) ? r : t.includes("plural") ? "plural" : t.includes("other") ? "other" : "";
}
var un = {
	variable: "v",
	number: "n",
	datetime: "d",
	currency: "c",
	"relative-time": "rt"
};
function dn(e) {
	return un[e];
}
function fn(e) {
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
	Jt({
		icuString: e,
		shouldVisit: Qt,
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
function pn(e) {
	if (!e.includes("_gt_")) return {};
	let t = 1, n = {};
	function r(e) {
		n[e.value + t] = e.options.other.value.length ? e.options.other.value[0]?.value : "", t += 1;
	}
	return Jt({
		icuString: e,
		shouldVisit: Qt,
		visitor: r,
		options: { recurseIntoVisited: !1 }
	}), n;
}
var mn = RegExp(`${D}\\d+`);
function hn(e) {
	if (!mn.test(e)) return e;
	function t(e) {
		e.type = C.argument, Reflect.deleteProperty(e, "options");
	}
	return Rt(Jt({
		icuString: e,
		shouldVisit: Zt,
		visitor: t,
		options: { recurseIntoVisited: !1 }
	}));
}
var gn = {
	pl: "placeholder",
	ti: "title",
	alt: "alt",
	arl: "aria-label",
	arb: "aria-labelledby",
	ard: "aria-describedby"
};
function _n(e, t = "en", n = {}) {
	return Et(e, t, n)?.toString() ?? "";
}
function vn({ value: e, locales: t = ["en"], options: n = {} }) {
	return O.get("NumberFormat", t, {
		numberingSystem: "latn",
		...n
	}).format(e);
}
function yn({ value: e, locales: t = ["en"], options: n = {} }) {
	return O.get("DateTimeFormat", t, {
		calendar: "gregory",
		numberingSystem: "latn",
		...n
	}).format(e);
}
function bn({ value: e, locales: t = ["en"], currency: n = "USD", options: r = {} }) {
	return O.get("NumberFormat", t, {
		style: "currency",
		currency: n,
		numberingSystem: "latn",
		...r
	}).format(e);
}
function xn({ value: e, locales: t = ["en"], options: n = {} }) {
	return O.get("ListFormat", t, {
		type: "conjunction",
		style: "long",
		...n
	}).format(e.map(String));
}
function Sn({ value: e, locales: t = ["en"], options: n = {} }) {
	let r = O.get("ListFormat", t, {
		type: "conjunction",
		style: "long",
		...n
	}).formatToParts(e.map(() => "1")), i = 0;
	return r.map((t) => t.type === "element" ? e[i++] : t.value);
}
function Cn(e, t) {
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
function wn({ value: e, unit: t, locales: n = ["en"], options: r = {} }) {
	return O.get("RelativeTimeFormat", n, {
		style: "long",
		numeric: "auto",
		...r
	}).format(e, t);
}
function Tn(e) {
	try {
		return O.get("Locale", e).language;
	} catch {
		return;
	}
}
function En(...e) {
	try {
		let t = e.flat().map((e) => O.get("Locale", e).language);
		return t.every((e) => e === t[0]);
	} catch (e) {
		return console.error(e), !1;
	}
}
function Dn(e) {
	return typeof e == "object" && !!e;
}
var On = (e, t, n) => {
	let r = e?.[t];
	if (r) return typeof r == "string" ? n === "name" ? r : void 0 : r[n];
}, k = (e, t) => {
	let n = e?.[t];
	return Dn(n) && typeof n.code == "string" ? n.code : void 0;
}, kn = /* @__PURE__ */ new Set([
	"Cham",
	"Jamo",
	"Kawi",
	"Lisu",
	"Toto",
	"Thai"
]), An = (e) => e >= "qaa" && e <= "qtz", A = (e, t) => {
	e = k(t, e) || e;
	try {
		let { language: t, region: n, script: r } = O.get("Locale", e), i = 1 + Number(!!n) + Number(!!r);
		return !(e.split("-").length !== i || O.get("DisplayNames", ["en"], { type: "language" }).of(t) === t && !An(t) || n && O.get("DisplayNames", ["en"], { type: "region" }).of(n) === n || r && O.get("DisplayNames", ["en"], { type: "script" }).of(r) === r && !kn.has(r));
	} catch {
		return !1;
	}
}, j = (e) => {
	try {
		return Intl.getCanonicalLocales(e)[0];
	} catch {
		return e;
	}
};
function jn(e, t) {
	let n = !0, r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Map();
	for (let a of e) {
		if (!A(a, t)) {
			n = !1;
			continue;
		}
		let e = Tn(a);
		if (e === void 0) continue;
		r.add(e);
		let o = i.get(e);
		o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(e, o)), o.add(j(a));
	}
	return {
		allValid: n,
		languages: r,
		byLanguage: i
	};
}
function Mn(...e) {
	try {
		let t = e.flat().map((e) => O.get("Locale", j(e))), [n] = t, r = new Set(t.map(({ region: e }) => e).filter(Boolean)), i = new Set(t.map(({ script: e }) => e).filter(Boolean));
		return t.every(({ language: e }) => e === n?.language) && r.size <= 1 && i.size <= 1;
	} catch (e) {
		return console.error(e), !1;
	}
}
function Nn(e, t, n, r) {
	if (n && !n.allValid || !A(e, r) || !A(t, r) || Mn(e, t)) return !1;
	if (!n) return !0;
	let i = Tn(t);
	return i !== void 0 && n.languages.has(i);
}
function Pn(e, t, n, r) {
	return Nn(e, t, n ? jn(n, r) : void 0, r);
}
function Fn(e) {
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
		let t = A(e) ? j(e) : e, n = t.split("-");
		return {
			languageCode: n[0] || t,
			regionCode: n.length > 2 ? n[2] : n[1] || "",
			scriptCode: n[3] || "",
			minimizedCode: t
		};
	}
}
function In(e, t) {
	if (t.has(e)) return e;
	let { languageCode: n, regionCode: r, scriptCode: i, minimizedCode: a } = Fn(e), o = `${n}-${r}`;
	if (t.has(o)) return o;
	let s = `${n}-${i}`;
	if (t.has(s)) return s;
	if (t.has(a)) return a;
}
function Ln(e, t, n) {
	let r = Array.isArray(e) ? e : [e];
	for (let e of r) {
		if (!A(e, n)) continue;
		let r = j(e), i = Tn(r);
		if (i === void 0) continue;
		let a = t.byLanguage.get(i);
		if (a === void 0) continue;
		let o = In(r, a) || In(i, a);
		if (o) return o;
	}
}
function Rn(e, t, n) {
	return Ln(e, jn(t, n), n);
}
function M(e, t) {
	let n = k(t, e);
	return n && A(n) ? n : e;
}
function zn(e, t) {
	let n = e;
	e = M(e, t);
	try {
		let r = j(e), i = O.get("Locale", r), { language: a, region: o } = i;
		if (t) for (let i of [
			n,
			e,
			r,
			a
		]) {
			let e = On(t, i, "emoji");
			if (e) return e;
		}
		let s = o && Jn(o);
		if (s) return s;
		let c = i.maximize();
		return Un[c.language] || qn(c.region || "");
	} catch {
		return Hn;
	}
}
var Bn = "🌍", Vn = "🌏", Hn = Bn, Un = {
	ca: Bn,
	eu: Bn,
	ku: Bn,
	bo: Vn,
	ug: Vn,
	gd: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
	cy: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
	gv: "🇮🇲",
	grc: "🏺"
}, Wn = {
	EU: "🇪🇺",
	419: "🌎"
}, Gn = /* @__PURE__ */ new Set(/* @__PURE__ */ "AF.AX.AL.DZ.AS.AD.AO.AI.AQ.AG.AR.AM.AW.AU.AT.AZ.BS.BH.BD.BB.BY.BE.BZ.BJ.BM.BT.BO.BQ.BA.BW.BV.BR.IO.BN.BG.BF.BI.CV.KH.CM.CA.KY.CF.TD.CL.CN.CX.CC.CO.KM.CD.CG.CK.CR.CI.HR.CU.CW.CY.CZ.DK.DJ.DM.DO.EC.EG.SV.GQ.ER.EE.SZ.ET.FK.FO.FJ.FI.FR.GF.PF.TF.GA.GM.GE.DE.GH.GI.GR.GL.GD.GP.GU.GT.GG.GN.GW.GY.HT.HM.VA.HN.HK.HU.IS.IN.ID.IR.IQ.IE.IM.IL.IT.JM.JP.JE.JO.KZ.KE.KI.KP.KR.KW.KG.LA.LV.LB.LS.LR.LY.LI.LT.LU.MO.MG.MW.MY.MV.ML.MT.MH.MQ.MR.MU.YT.MX.FM.MD.MC.MN.ME.MS.MA.MZ.MM.NA.NR.NP.NL.NC.NZ.NI.NE.NG.NU.NF.MK.MP.NO.OM.PK.PW.PS.PA.PG.PY.PE.PH.PN.PL.PT.PR.QA.RE.RO.RU.RW.BL.SH.KN.LC.MF.PM.VC.WS.SM.ST.SA.SN.RS.SC.SL.SG.SX.SK.SI.SB.SO.ZA.GS.SS.ES.LK.SD.SR.SJ.SE.CH.SY.TW.TJ.TZ.TH.TL.TG.TK.TO.TT.TN.TR.TM.TC.TV.UG.UA.AE.GB.US.UM.UY.UZ.VU.VE.VN.VG.VI.WF.EH.YE.ZM.ZW".split(".")), Kn = 127397;
function qn(e) {
	return Jn(e) || "🌍";
}
function Jn(e) {
	let t = e.toUpperCase(), n = Wn[t];
	if (n) return n;
	if (Gn.has(t)) return String.fromCodePoint(t.charCodeAt(0) + Kn, t.charCodeAt(1) + Kn);
}
function Yn(e, t) {
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
function Xn(e, t = "en", n) {
	let r = e;
	e = M(e, n), t ||= "en";
	try {
		let i = j(e), a = O.get("Locale", e), o = a.language, s = Yn([
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
		], g = O.get("DisplayNames", m, { type: "language" }), _ = O.get("DisplayNames", h, { type: "language" }), v = s?.name, y = s?.nativeName || s?.name, ee = v || g.of(e) || e, b = y || _.of(e) || e, x = s?.maximizedName || v || g.of(u) || e, te = s?.nativeMaximizedName || y || _.of(u) || e, ne = s?.minimizedName || v || g.of(p) || e, S = s?.nativeMinimizedName || y || _.of(p) || e, re = s?.languageName || v || g.of(o) || e, ie = s?.nativeLanguageName || y || _.of(o) || e, ae = s?.nameWithRegionCode || (c ? `${re} (${c})` : ee), oe = s?.nativeNameWithRegionCode || (c ? `${ie} (${c})` : b) || ae, se = O.get("DisplayNames", m, { type: "region" }), ce = O.get("DisplayNames", h, { type: "region" }), le = s?.regionName || (d ? se.of(d) : "") || "", ue = s?.nativeRegionName || (d ? ce.of(d) : "") || "", de = O.get("DisplayNames", m, { type: "script" }), fe = O.get("DisplayNames", h, { type: "script" });
		return {
			code: i,
			name: ee,
			nativeName: b,
			maximizedCode: u,
			maximizedName: x,
			nativeMaximizedName: te,
			minimizedCode: p,
			minimizedName: ne,
			nativeMinimizedName: S,
			languageCode: o,
			languageName: re,
			nativeLanguageName: ie,
			nameWithRegionCode: ae,
			nativeNameWithRegionCode: oe,
			regionCode: d,
			regionName: le,
			nativeRegionName: ue,
			scriptCode: f,
			scriptName: s?.scriptName || (f ? de.of(f) : "") || "",
			nativeScriptName: s?.nativeScriptName || (f ? fe.of(f) : "") || "",
			emoji: s?.emoji || zn(i, n)
		};
	} catch {
		let t = A(e) ? j(e) : e, r = t.split("-"), i = r[0] || t, a = r.length > 2 ? r[2] : r[1] || "", o = r[3] || "", s = Yn([t, i], n);
		t = s?.code || t;
		let c = s?.name || t, l = s?.nativeName || c, u = s?.maximizedCode || t, d = s?.maximizedName || c, f = s?.nativeMaximizedName || l, p = s?.minimizedCode || t, m = s?.minimizedName || c, h = s?.nativeMinimizedName || l;
		i = s?.languageCode || i;
		let g = s?.languageName || c, _ = s?.nativeLanguageName || l;
		a = s?.regionCode || a;
		let v = s?.regionName || "", y = s?.nativeRegionName || "";
		o = s?.scriptCode || o;
		let ee = s?.scriptName || "", b = s?.nativeScriptName || "", x = s?.nameWithRegionCode || (v ? `${g} (${v})` : c), te = s?.nativeNameWithRegionCode || (y ? `${_} (${y})` : l), ne = s?.emoji || "🌍";
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
			nameWithRegionCode: x,
			nativeNameWithRegionCode: te,
			regionCode: a,
			regionName: v,
			nativeRegionName: y,
			scriptCode: o,
			scriptName: ee,
			nativeScriptName: b,
			emoji: ne
		};
	}
}
function Zn(e, t = "en", n) {
	let r = e;
	e = M(e, n), t ||= "en";
	try {
		let i = j(e);
		if (n) for (let t of [
			r,
			e,
			i,
			O.get("Locale", i).language
		]) {
			let e = On(n, t, "name");
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
function Qn(e) {
	try {
		let t = tr(O.get("Locale", e));
		if (t) return t;
	} catch {}
	let { scriptCode: t, languageCode: n } = Xn(e);
	return t ? $n.has(t.toLowerCase()) ? "rtl" : "ltr" : n && er.has(n.toLowerCase()) ? "rtl" : "ltr";
}
var $n = /* @__PURE__ */ new Set([
	"arab",
	"adlm",
	"hebr",
	"nkoo",
	"rohg",
	"samr",
	"syrc",
	"thaa",
	"yezi"
]), er = /* @__PURE__ */ new Set([
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
function tr(e) {
	let t = "textInfo" in e && typeof e.textInfo == "object" && e.textInfo !== null && "direction" in e.textInfo ? e.textInfo.direction : void 0;
	return t === "rtl" || t === "ltr" ? t : void 0;
}
function nr(e, t) {
	try {
		let { language: n, region: r, script: i } = O.get("Locale", j(e)), { language: a, region: o, script: s } = O.get("Locale", j(t));
		return !(n !== a || r && r !== o || i && i !== s);
	} catch (e) {
		return console.error(e), !1;
	}
}
function rr(e, t) {
	return t ? Object.keys(t).find((n) => k(t, n) === e) ?? e : e;
}
var ir = class {
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
			if (r.locale !== n || r.canonicalLocale !== this.resolveCanonicalLocale(n) || e.canonicalMappingCodes[t] !== k(this.customMapping, r.canonicalLocale)) return !1;
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
			canonicalMappingCodes: t.map(({ canonicalLocale: e }) => k(this.customMapping, e)),
			approved: jn(t.map(({ canonicalLocale: e }) => e), this.customMapping)
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
		return vn({
			value: e,
			locales: this.getFormattingLocales(t, r),
			options: i
		});
	}
	formatDateTime(e, t, n = {}) {
		let { locales: r, ...i } = n;
		return yn({
			value: e,
			locales: this.getFormattingLocales(t, r),
			options: i
		});
	}
	formatCurrency(e, t, n, r = {}) {
		let { locales: i, ...a } = r;
		return bn({
			value: e,
			currency: t,
			locales: this.getFormattingLocales(n, i),
			options: a
		});
	}
	formatRelativeTime(e, t, n, r = {}) {
		let { locales: i, ...a } = r;
		return wn({
			value: e,
			unit: t,
			locales: this.getFormattingLocales(n, i),
			options: a
		});
	}
	formatRelativeTimeFromDate(e, t, n = {}) {
		let { locales: r, baseDate: i, ...a } = n, { value: o, unit: s } = Cn(e, i ?? /* @__PURE__ */ new Date());
		return wn({
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
		return a === "STRING" ? e : _n(e, this.getFormattingLocales(t, r), i);
	}
	formatList(e, t, n = {}) {
		let { locales: r, ...i } = n;
		return xn({
			value: e,
			locales: this.getFormattingLocales(t, r),
			options: i
		});
	}
	formatListToParts(e, t, n = {}) {
		let { locales: r, ...i } = n;
		return Sn({
			value: e,
			locales: this.getFormattingLocales(t, r),
			options: i
		});
	}
	getLocaleName(e) {
		return Zn(e, this.defaultLocale, this.customMapping);
	}
	getLocaleEmoji(e) {
		return zn(e, this.customMapping);
	}
	getLocaleProperties(e) {
		return Xn(e, this.defaultLocale, this.customMapping);
	}
	requiresTranslation(e, t = this.defaultLocale, n = this.locales.length ? this.locales : void 0) {
		let r = n ? n === this.locales ? this.getResolutionScope().approved : jn(n.map((e) => this.resolveCanonicalLocale(e)), this.customMapping) : void 0;
		return Nn(this.resolveCanonicalLocale(t), this.resolveCanonicalLocale(e), r, this.customMapping);
	}
	determineLocale(e, t = this.locales) {
		let { approvedLocalePairs: n, approved: r } = t === this.locales ? this.getResolutionScope() : this.buildResolutionScope(t), i = Ln(Array.isArray(e) ? e.map((e) => this.resolveCanonicalLocale(e)) : this.resolveCanonicalLocale(e), r, this.customMapping);
		if (i) return n.find(({ canonicalLocale: e }) => e === i)?.locale ?? this.resolveAliasLocale(i);
	}
	getLocaleDirection(e) {
		return Qn(this.resolveCanonicalLocale(e));
	}
	isValidLocale(e) {
		return A(e, this.customMapping);
	}
	resolveCanonicalLocale(e) {
		return M(e, this.customMapping);
	}
	resolveAliasLocale(e) {
		return rr(e, this.customMapping);
	}
	standardizeLocale(e) {
		return j(e);
	}
	isSameDialect(...e) {
		return Mn(...e.map((e) => Array.isArray(e) ? e.map((e) => this.resolveCanonicalLocale(e)) : this.resolveCanonicalLocale(e)));
	}
	isSameLanguage(...e) {
		return En(...e.map((e) => Array.isArray(e) ? e.map((e) => this.resolveCanonicalLocale(e)) : this.resolveCanonicalLocale(e)));
	}
	isSupersetLocale(e, t) {
		return nr(this.resolveCanonicalLocale(e), this.resolveCanonicalLocale(t));
	}
};
function ar(e, t = "en", n) {
	t ||= "en";
	let r = e, i = Hn;
	try {
		r = O.get("DisplayNames", [t, "en"], { type: "region" }).of(e) || e, i = qn(e);
	} catch {}
	return {
		code: e,
		name: r,
		emoji: i,
		...n?.[e]
	};
}
function or(e, t) {
	let { locales: n, ...r } = t ?? {};
	return O.get("CutoffFormat", n, r).format(e);
}
function sr(e, t) {
	return t?.dataFormat === "STRING" ? e : _n(e, t?.locales, t?.variables);
}
function N(e, t) {
	return A(e, t);
}
function cr(e, t) {
	return M(e, t);
}
function lr(e) {
	return j(e);
}
function ur(e, t, n, r) {
	return Pn(e, t, n, r);
}
function dr(e, t = [], n = void 0) {
	return Rn(e, t, n);
}
function fr(e, t) {
	return rr(e, t);
}
function pr(e) {
	return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in e && e.BYTES_PER_ELEMENT === 1;
}
function mr(e, t, n = "") {
	let r = pr(e), i = e?.length, a = t !== void 0;
	if (!r || a && i !== t) {
		let o = n && `"${n}" `, s = a ? ` of length ${t}` : "", c = r ? `length=${i}` : `type=${typeof e}`, l = o + "expected Uint8Array" + s + ", got " + c;
		throw r ? RangeError(l) : TypeError(l);
	}
	return e;
}
function hr(e, t = !0) {
	if (e.destroyed) throw Error("Hash instance has been destroyed");
	if (t && e.finished) throw Error("Hash#digest() has already been called");
}
function gr(e, t) {
	mr(e, void 0, "digestInto() output");
	let n = t.outputLen;
	if (e.length < n) throw RangeError("\"digestInto() output\" expected to be of length >=" + n);
}
function _r(...e) {
	for (let t = 0; t < e.length; t++) e[t].fill(0);
}
function vr(e) {
	return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function P(e, t) {
	return e << 32 - t | e >>> t;
}
var yr = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", br = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function xr(e) {
	if (mr(e), yr) return e.toHex();
	let t = "";
	for (let n = 0; n < e.length; n++) t += br[e[n]];
	return t;
}
function Sr(e) {
	if (typeof e != "string") throw TypeError("string expected");
	return new Uint8Array(new TextEncoder().encode(e));
}
function Cr(e, t = {}) {
	let n = (t, n) => e(n).update(t).digest(), r = e(void 0);
	return n.outputLen = r.outputLen, n.blockLen = r.blockLen, n.canXOF = r.canXOF, n.create = (t) => e(t), Object.assign(n, t), Object.freeze(n);
}
var wr = (e) => ({ oid: Uint8Array.from([
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
function Tr(e, t, n) {
	return e & t ^ ~e & n;
}
function Er(e, t, n) {
	return e & t ^ e & n ^ t & n;
}
var Dr = class {
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
		this.blockLen = e, this.outputLen = t, this.padOffset = n, this.isLE = r, this.buffer = new Uint8Array(e), this.view = vr(this.buffer);
	}
	update(e) {
		hr(this), mr(e);
		let { view: t, buffer: n, blockLen: r } = this, i = e.length;
		for (let a = 0; a < i;) {
			let o = Math.min(r - this.pos, i - a);
			if (o === r) {
				let t = vr(e);
				for (; r <= i - a; a += r) this.process(t, a);
				continue;
			}
			n.set(e.subarray(a, a + o), this.pos), this.pos += o, a += o, this.pos === r && (this.process(t, 0), this.pos = 0);
		}
		return this.length += e.length, this.roundClean(), this;
	}
	digestInto(e) {
		hr(this), gr(e, this), this.finished = !0;
		let { buffer: t, view: n, blockLen: r, isLE: i } = this, { pos: a } = this;
		t[a++] = 128, _r(this.buffer.subarray(a)), this.padOffset > r - a && (this.process(n, 0), a = 0);
		for (let e = a; e < r; e++) t[e] = 0;
		n.setBigUint64(r - 8, BigInt(this.length * 8), i), this.process(n, 0);
		let o = vr(e), s = this.outputLen;
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
}, F = Uint32Array.from([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]), Or = Uint32Array.from([
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
]), I = /* @__PURE__ */ new Uint32Array(64), kr = class extends Dr {
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
		for (let n = 0; n < 16; n++, t += 4) I[n] = e.getUint32(t, !1);
		for (let e = 16; e < 64; e++) {
			let t = I[e - 15], n = I[e - 2], r = P(t, 7) ^ P(t, 18) ^ t >>> 3, i = P(n, 17) ^ P(n, 19) ^ n >>> 10;
			I[e] = i + I[e - 7] + r + I[e - 16] | 0;
		}
		let { A: n, B: r, C: i, D: a, E: o, F: s, G: c, H: l } = this;
		for (let e = 0; e < 64; e++) {
			let t = P(o, 6) ^ P(o, 11) ^ P(o, 25), u = l + t + Tr(o, s, c) + Or[e] + I[e] | 0, d = (P(n, 2) ^ P(n, 13) ^ P(n, 22)) + Er(n, r, i) | 0;
			l = c, c = s, s = o, o = a + u | 0, a = i, i = r, r = n, n = u + d | 0;
		}
		n = n + this.A | 0, r = r + this.B | 0, i = i + this.C | 0, a = a + this.D | 0, o = o + this.E | 0, s = s + this.F | 0, c = c + this.G | 0, l = l + this.H | 0, this.set(n, r, i, a, o, s, c, l);
	}
	roundClean() {
		_r(I);
	}
	destroy() {
		this.destroyed = !0, this.set(0, 0, 0, 0, 0, 0, 0, 0), _r(this.buffer);
	}
}, Ar = class extends kr {
	A = F[0] | 0;
	B = F[1] | 0;
	C = F[2] | 0;
	D = F[3] | 0;
	E = F[4] | 0;
	F = F[5] | 0;
	G = F[6] | 0;
	H = F[7] | 0;
	constructor() {
		super(32);
	}
}, jr = Cr(() => new Ar(), wr(1));
function Mr(e) {
	if (e === void 0) return;
	if (e === null) return "null";
	if (typeof e == "number") return isFinite(e) ? "" + e : "null";
	if (typeof e != "object") return JSON.stringify(e);
	if (Array.isArray(e)) {
		let t = "[";
		for (let n = 0; n < e.length; n++) n && (t += ","), t += Mr(e[n]) || "null";
		return t + "]";
	}
	let t = Object.keys(e).sort(), n = "";
	for (let r of t) {
		let t = Mr(e[r]);
		t && (n && (n += ","), n += JSON.stringify(r) + ":" + t);
	}
	return "{" + n + "}";
}
function Nr(e) {
	return Mr(e) ?? "";
}
function Pr(e) {
	return xr(jr(Sr(e))).slice(0, 16);
}
function Fr({ source: e, context: t, id: n, maxChars: r, requiresReview: i, dataFormat: a }, o = Pr) {
	let s;
	return s = a === "JSX" ? Lr(e) : e, o(Nr({
		source: s,
		...n && { id: n },
		...t && { context: t },
		...r != null && { maxChars: Math.abs(r) },
		...i === !0 && { requiresReview: !0 },
		...a && { dataFormat: a }
	}));
}
var Ir = (e) => {
	if (e && typeof e == "object") {
		let t = {};
		if ("c" in e && e.c && (t.c = Lr(e.c)), "d" in e) {
			let n = e?.d;
			n?.b && (t.b = Object.fromEntries(Object.entries(n.b).map(([e, t]) => [e, Lr(t)]))), n?.t && (t.t = n.t);
		}
		return $t(e) ? {
			k: e.k,
			...e.v && { v: e.v }
		} : t;
	}
	return e;
};
function Lr(e) {
	return Array.isArray(e) ? e.map(Ir) : Ir(e);
}
var L = "GT", Rr = (e) => S({
	source: L,
	severity: "Error",
	whatHappened: `Translation request timed out after ${e}ms`,
	fix: "Try again, or increase the request timeout if the source content is large"
}), zr = (e, t, n) => S({
	source: L,
	severity: "Error",
	whatHappened: `The translation API returned ${e} ${t}`,
	fix: "Check the request configuration and try again",
	details: n
});
S({
	source: L,
	severity: "Error",
	whatHappened: "Authentication failed",
	fix: "Check that your API key and project ID are correct"
});
var R = (e) => S({
	source: L,
	severity: "Error",
	whatHappened: `Cannot call \`${e}\` without a specified locale`,
	fix: `Pass a locale to \`${e}\` or specify targetLocale in the GT constructor`
}), Br = (e) => S({
	source: L,
	severity: "Error",
	whatHappened: `Cannot call \`${e}\` without a specified locale`,
	fix: `Pass a locale to \`${e}\` or specify sourceLocale in the GT constructor`
}), Vr = (e) => S({
	source: L,
	severity: "Error",
	whatHappened: `Cannot call \`${e}\` without a specified project ID`,
	fix: `Pass a project ID to \`${e}\` or specify projectId in the GT constructor`
}), Hr = (e) => S({
	source: L,
	severity: "Error",
	whatHappened: `Cannot call \`${e}\` without a specified API key`,
	fix: `Pass an API key to \`${e}\` or specify apiKey in the GT constructor`
}), Ur = (e) => S({
	source: L,
	severity: "Error",
	whatHappened: `Locale "${e}" is not valid`,
	fix: "Use a valid BCP 47 locale code or add a custom mapping"
}), Wr = (e) => S({
	source: L,
	severity: "Error",
	whatHappened: `These locales are not valid: ${e.join(", ")}`,
	fix: "Use valid BCP 47 locale codes or add custom mappings"
}), Gr = {
	debug: 0,
	info: 1,
	warn: 2,
	error: 3,
	off: 4
}, Kr = {
	debug: "\x1B[36m",
	info: "\x1B[32m",
	warn: "\x1B[33m",
	error: "\x1B[31m",
	off: ""
}, qr = "\x1B[0m";
function Jr() {
	if (typeof process < "u" && process.env?._GT_LOG_LEVEL) {
		let e = process.env._GT_LOG_LEVEL.toLowerCase();
		if (e in Gr) return e;
	}
	return "warn";
}
var Yr = class {
	constructor(e) {
		this.config = e;
	}
	handle(e) {
		let t = [];
		this.config.includeTimestamp && t.push(`[${e.timestamp.toISOString()}]`);
		let n = Kr[e.level], r = `[${e.level.toUpperCase()}]`;
		t.push(`${n}${r}${qr}`), this.config.prefix && t.push(`[${this.config.prefix}]`), this.config.includeContext && e.context && t.push(`[${e.context}]`), t.push(e.message), e.metadata && Object.keys(e.metadata).length > 0 && t.push(`\n  Metadata: ${JSON.stringify(e.metadata, null, 2)}`);
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
}, Xr = class {
	constructor(e = {}) {
		this.config = {
			level: Jr(),
			includeTimestamp: !0,
			includeContext: !0,
			enableConsole: !0,
			handlers: [],
			...e
		}, this.handlers = [...this.config.handlers || []], this.config.enableConsole && this.handlers.push(new Yr(this.config));
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
		return Gr[e] >= Gr[this.config.level];
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
		return new Zr(this, e);
	}
	getConfig() {
		return { ...this.config };
	}
}, Zr = class e {
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
}, Qr = new Xr({
	level: Jr(),
	includeTimestamp: !0,
	includeContext: !0,
	prefix: "GT"
});
Qr.child("fetch");
var $r = Qr.child("GT instance");
async function ei(e, t, n) {
	let r = new AbortController(), i = [r.signal];
	t.signal && i.push(t.signal), e instanceof Request && i.push(e.signal);
	let a = AbortSignal.any(i);
	n ||= ee;
	let o = n ? setTimeout(() => r.abort(), n) : null;
	try {
		return await fetch(e, {
			...t,
			signal: a
		});
	} catch (e) {
		throw e instanceof Error && e.name === "AbortError" ? Rr(n) : e;
	} finally {
		o && clearTimeout(o);
	}
}
async function ti(e) {
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
		throw new y(zr(e.status, e.statusText, t), e.status, t);
	}
}
async function ni(e, t, n, r) {
	let i = Array.isArray(e), a = i ? [] : void 0, o = {}, s = i ? e.map((e) => [void 0, e]) : Object.entries(e);
	for (let [e, t] of s) {
		let { source: n, metadata: r } = typeof t == "string" ? { source: t } : t, i = e ?? r?.hash ?? Fr({
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
	let c = Ke({
		apiKey: n.apiKey,
		baseUrl: n.baseUrl || "https://api.gtx.dev",
		fetch: (e, t) => ei(e, t ?? {}, r),
		projectId: n.projectId,
		retryPolicy: "none",
		timeoutMs: !1
	}), l = await se({
		body: {
			requests: o,
			targetLocale: t.targetLocale,
			sourceLocale: t.sourceLocale,
			metadata: t
		},
		client: c
	});
	if (l.data === void 0 && l.response && !ae(l)) throw await ti(l.response), l.error;
	let u = oe(l);
	return a ? a.map((e) => u[e] ?? {
		success: !1,
		error: "No translation returned",
		code: 500
	}) : u;
}
var ri = class {
	get localeConfig() {
		return this._localeConfig;
	}
	constructor(e = {}) {
		typeof process < "u" && (this.apiKey ||= process.env?.GT_API_KEY, this.devApiKey ||= process.env?.GT_DEV_API_KEY, this.projectId ||= process.env?.GT_PROJECT_ID), this.setConfig(e);
	}
	setConfig({ apiKey: e, devApiKey: t, sourceLocale: n, targetLocale: r, locales: i, projectId: a, customMapping: o, baseUrl: s }) {
		if (e && (this.apiKey = e), t && (this.devApiKey = t), a && (this.projectId = a), n && (this.sourceLocale = lr(n), !N(this.sourceLocale, o))) throw Error(Ur(this.sourceLocale));
		if (r && (this.targetLocale = lr(r), !N(this.targetLocale, o))) throw Error(Ur(this.targetLocale));
		if (i) {
			let e = [], t = [];
			if (i.forEach((n) => {
				let r = lr(n);
				N(r) ? e.push(r) : t.push(n);
			}), t.length > 0) throw Error(Wr(t));
			this.locales = e;
		}
		s && (this.baseUrl = s), o && (this.customMapping = o, this.reverseCustomMapping = Object.fromEntries(Object.entries(o).filter(([, e]) => e && typeof e == "object" && "code" in e).map(([e, t]) => [t.code, e]))), this._localeConfig = new ir({
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
			let n = Hr(e);
			t.push(n);
		}
		if (!this.projectId) {
			let n = Vr(e);
			t.push(n);
		}
		if (t.length) throw Error(t.join("\n"));
	}
	async translate(e, t, n) {
		typeof t == "string" && (t = { targetLocale: t }), this._validateAuth("translate");
		let r = t?.targetLocale || this.targetLocale;
		if (!r) {
			let e = R("translate");
			throw $r.error(e), Error(e);
		}
		r = this.resolveCanonicalLocale(r);
		let i = this.resolveCanonicalLocale(t?.sourceLocale || this.sourceLocale || "en");
		return (await ni([e], {
			...t,
			targetLocale: r,
			sourceLocale: i
		}, this._getTranslationConfig(), n))[0];
	}
	async translateMany(e, t, n) {
		typeof t == "string" && (t = { targetLocale: t }), this._validateAuth("translateMany");
		let r = t?.targetLocale || this.targetLocale;
		if (!r) {
			let e = R("translateMany");
			throw $r.error(e), Error(e);
		}
		r = this.resolveCanonicalLocale(r);
		let i = this.resolveCanonicalLocale(t?.sourceLocale || this.sourceLocale || "en");
		return await ni(e, {
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
		if (!e) throw Error(R("getLocaleName"));
		return this.localeConfig.getLocaleName(e);
	}
	getLocaleEmoji(e = this.targetLocale) {
		if (!e) throw Error(R("getLocaleEmoji"));
		return this.localeConfig.getLocaleEmoji(e);
	}
	getLocaleProperties(e = this.targetLocale) {
		if (!e) throw Error(R("getLocaleProperties"));
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
		return ar(e, this.targetLocale, t);
	}
	requiresTranslation(e = this.sourceLocale, t = this.targetLocale, n = this.locales, r = this.customMapping) {
		if (!e) throw Error(Br("requiresTranslation"));
		if (!t) throw Error(R("requiresTranslation"));
		return r === this.customMapping ? this.localeConfig.requiresTranslation(t, e, n) : ur(e, t, n, r);
	}
	determineLocale(e, t = this.locales || [], n = this.customMapping) {
		return n === this.customMapping ? this.localeConfig.determineLocale(e, t ?? []) : dr(e, t, n);
	}
	getLocaleDirection(e = this.targetLocale) {
		if (!e) throw Error(R("getLocaleDirection"));
		return this.localeConfig.getLocaleDirection(e);
	}
	isValidLocale(e = this.targetLocale, t = this.customMapping) {
		if (!e) throw Error(R("isValidLocale"));
		return t === this.customMapping ? this.localeConfig.isValidLocale(e) : N(e, t);
	}
	resolveCanonicalLocale(e = this.targetLocale, t = this.customMapping) {
		if (!e) throw Error(R("resolveCanonicalLocale"));
		return t === this.customMapping ? this.localeConfig.resolveCanonicalLocale(e) : cr(e, t);
	}
	resolveAliasLocale(e, t = this.customMapping) {
		if (!e) throw Error(R("resolveAliasLocale"));
		return t === this.customMapping ? this.localeConfig.resolveAliasLocale(e) : fr(e, t);
	}
	standardizeLocale(e = this.targetLocale) {
		if (!e) throw Error(R("standardizeLocale"));
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
}, ii = "DEBUG";
function ai() {
	let e = si();
	return e === void 0 ? ci(() => void 0) : e;
}
function oi(e) {
	return e?.toUpperCase() === ii;
}
function si() {
	if (typeof process == "object") return process.env?._GENERALTRANSLATION_LOG_LEVEL;
}
function ci(e) {
	try {
		return e();
	} catch {
		return;
	}
}
function li(e) {
	let t = globalThis;
	return t.__generaltranslation ??= {}, t.__generaltranslation[e] ??= {}, t.__generaltranslation[e];
}
function ui(e) {
	return globalThis.__generaltranslation?.[e];
}
function z({ namespace: e, key: t, source: n, notInitialized: r }) {
	function i() {
		let n = li(e)[t];
		if (n == null) {
			let e = r();
			throw typeof e == "string" ? Error(e) : e;
		}
		return n;
	}
	function a(r) {
		let i = li(e);
		if (i[t] !== void 0 && i[t] !== r) {
			di() && console.warn(S({
				source: n,
				severity: "Warning",
				whatHappened: `Global ${t} singleton instance was already initialized`
			}));
			return;
		}
		i[t] = r;
	}
	function o() {
		return li(e)[t] != null;
	}
	return {
		get: i,
		set: a,
		isInitialized: o
	};
}
function di() {
	let e = ui("i18n")?.i18nConfig;
	return fi(e) ? e.isDebugLoggingEnabled() : oi(ai());
}
function fi(e) {
	return typeof e == "object" && !!e && typeof e.isDebugLoggingEnabled == "function";
}
var pi = z({
	namespace: "i18n",
	key: "i18nCache",
	source: "gt-i18n",
	notInitialized: () => S({
		source: "gt-i18n",
		severity: "Error",
		whatHappened: "Cannot read I18nCache before it has been initialized",
		why: "the internal I18nCache singleton is unavailable",
		fix: "Initialize GT before accessing I18nCache (call initializeGT() from your GT framework package)."
	})
});
function mi() {
	return pi.get();
}
function hi(e) {
	pi.set(e);
}
function gi(e) {
	return e.loadTranslations ? "custom" : (e.cacheUrl === void 0 || e.cacheUrl === "https://cdn.gtx.dev") && e.projectId ? "gt-remote" : e.cacheUrl ? "remote" : "disabled";
}
function _i(e) {
	let t = e.runtimeUrl === void 0 || e.runtimeUrl === "https://api.gtx.dev";
	return t && e.projectId && (e.devApiKey || e.apiKey) ? "gt" : e.runtimeUrl && !t ? "custom" : "disabled";
}
function vi() {
	let e = yi(() => "production");
	return e ? e === "development" ? "development" : "production" : yi(() => !1) === !0 ? "development" : "production";
}
function yi(e) {
	try {
		return e();
	} catch {
		return;
	}
}
var B = {
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
function bi(e, t) {
	if (!t) return;
	let n = xi(e), r = Si(e), i = [...n, ...r];
	if (i.forEach((e) => {
		B.error(`I18nConfig: ${Ci(e)}`);
	}), i.length > 0) throw Error(S({
		source: "gt-i18n",
		severity: "Error",
		whatHappened: "Invalid I18nConfig locale configuration",
		details: i.map((e) => `Invalid locale: ${e}`),
		fix: "Use valid BCP 47 locale codes or add custom mappings."
	}));
}
function xi({ defaultLocale: e, locales: t, customMapping: n }) {
	let r = /* @__PURE__ */ new Set([...e ? [e] : [], ...t || []]);
	return Array.from(r).filter((e) => !N(e, n));
}
function Si({ customMapping: e }) {
	return Object.values(e || {}).flatMap((e) => {
		let t = typeof e == "string" ? e : e.code;
		return t && !N(t) ? [t] : [];
	});
}
function Ci(e) {
	return S({
		whatHappened: `Locale "${e}" is not valid`,
		fix: "Use a valid BCP 47 locale code or add a custom mapping"
	});
}
var wi = class extends ir {
	constructor(e = {}) {
		let t = Oi(e);
		super(Ti(e, t)), this.runtimeConfig = {
			projectId: e.projectId,
			devApiKey: e.devApiKey,
			apiKey: e.apiKey,
			runtimeUrl: e.runtimeUrl,
			_disableDevHotReload: e._disableDevHotReload,
			_tagIds: e._tagIds
		}, this.gtServicesEnabled = t, this.logLevel = ai();
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
		return !this.runtimeConfig._disableDevHotReload && !!this.runtimeConfig.devApiKey && !!this.runtimeConfig.projectId && this.runtimeConfig.runtimeUrl !== null && this.runtimeConfig.runtimeUrl !== "" && vi() === "development";
	}
	isGTServicesEnabled() {
		return this.gtServicesEnabled;
	}
	isDebugLoggingEnabled() {
		return oi(this.logLevel);
	}
	getGTClassClean(e) {
		return new ri({
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
		return !e || !Di(e) ? this : new ir(Ei(e));
	}
	determineSupportedLocaleWithConfig(e, t) {
		if (!(e == null || Array.isArray(e) && e.length === 0)) return t.determineLocale(e);
	}
};
function Ti(e, t) {
	let { defaultLocale: n = "en", locales: r = [], customMapping: i } = e;
	return bi({
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
function Ei({ defaultLocale: e = "en", locales: t = [], customMapping: n } = {}) {
	return {
		defaultLocale: e,
		locales: t?.length ? t : [e],
		customMapping: n || {}
	};
}
function Di(e) {
	return e.defaultLocale !== void 0 || e.locales !== void 0 || e.customMapping !== void 0;
}
function Oi(e) {
	return gi(e) === "gt-remote" || _i(e) === "gt";
}
var ki = z({
	namespace: "i18n",
	key: "i18nConfig",
	source: "gt-i18n",
	notInitialized: () => S({
		source: "gt-i18n",
		severity: "Error",
		whatHappened: "Cannot read I18nConfig before it has been initialized",
		why: "the internal I18nConfig singleton is unavailable",
		fix: "Initialize GT before reading locale config (call initializeGT() from your GT framework package)."
	})
}), V = ki.get, Ai = ki.set;
ki.isInitialized;
function ji(e) {
	return Object.fromEntries(Object.entries(e).filter(([e]) => e !== "$id" && e !== "$context" && e !== "$maxChars" && e !== "$hash" && e !== "$_hash" && e !== "$_source" && e !== "$_fallback" && e !== "$format" && e !== "$locale" && e !== "$requiresReview"));
}
var Mi = (e) => `String interpolation failed for message: "${e}".`;
function Ni(e, t, n, r) {
	try {
		return sr(e, {
			variables: t,
			locales: n,
			dataFormat: r
		});
	} catch {
		return B.warn(Mi(e)), e;
	}
}
function Pi(e, t) {
	if (!e) return e;
	let n = t.$_fallback, r = ji(t);
	try {
		let i = pn(n || "");
		return or(Ni(Object.keys(i).length ? hn(e) : e, {
			...r,
			...i,
			[D]: "other"
		}, t.$locale, t.$format), { maxChars: t.$maxChars });
	} catch {
		return B.warn(Mi(e)), t.$_fallback == null ? or(e, { maxChars: t.$maxChars }) : Pi(t.$_fallback, {
			...t,
			$_fallback: void 0
		});
	}
}
function Fi(e, t) {
	return or(e, {
		locales: t.$locale,
		maxChars: t.$maxChars
	});
}
function Ii({ source: e, target: t, options: n, sourceLocale: r }) {
	return t == null ? Li(e, Ri(n, r)) : Li(t, {
		$_fallback: e,
		...n
	});
}
function Li(e, t) {
	switch (t.$format ?? "STRING") {
		case "ICU": return Pi(e, t);
		case "I18NEXT":
		case "STRING": return Fi(e, t);
		default: return e;
	}
}
function Ri(e, t) {
	return t ? {
		...e,
		$locale: t
	} : e;
}
function zi(e, t, n) {
	return {
		...t,
		$format: t.$format ?? n,
		$locale: e
	};
}
function Bi(e) {
	let t = z({
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
var { getConditionStore: Vi, setConditionStore: Hi } = Bi(S({
	source: "gt-i18n",
	severity: "Error",
	whatHappened: "Cannot read the locale before GT has been initialized",
	why: "the internal ConditionStore singleton is unavailable",
	fix: "Initialize GT before calling translation functions (e.g. call initializeGT() from your GT framework package)."
}));
function Ui(e, t) {
	let n = t;
	return n.$_hash == null ? Fr({
		source: t.$format === "ICU" ? fn(e) : e,
		...n.$context && { context: n.$context },
		...n.$maxChars != null && { maxChars: Math.abs(n.$maxChars) },
		...n.$requiresReview === !0 && { requiresReview: !0 },
		dataFormat: t.$format
	}) : n.$_hash;
}
function Wi(e) {
	if (e.lastIndexOf(":") === -1) return null;
	let t = e.slice(e.lastIndexOf(":") + 1);
	try {
		return JSON.parse(qt(t));
	} catch {
		return null;
	}
}
function Gi(e) {
	return typeof e.$_hash == "string" && typeof e.$_source == "string";
}
function Ki(e) {
	return (Array.isArray(e) ? e : [e]).flatMap((e) => e?.split(",") ?? []).map((e, t) => {
		let [n = "", ...r] = e.split(";").map((e) => e.trim()), i = r.find((e) => e.toLowerCase().startsWith("q="));
		return {
			locale: n,
			quality: Number(i?.slice(2) ?? 1),
			index: t
		};
	}).filter(({ locale: e, quality: t }) => e !== "" && e !== "*" && t > 0 && t <= 1).sort((e, t) => t.quality - e.quality || e.index - t.index).map(({ locale: e }) => e);
}
function H(e, t) {
	let n = `${t}=`, r = e?.split(";").map((e) => e.trim()).find((e) => e.startsWith(n));
	if (!r) return;
	let i = r.slice(n.length);
	try {
		return decodeURIComponent(i);
	} catch {
		return i;
	}
}
async function qi({ locale: e, enableI18n: t }, n) {
	let r = mi(), i = V().getDefaultLocale(), a = await r.getLookupTranslation(t ? e : i);
	return (n, r = {}) => {
		let o = zi(t ? r.$locale ?? e : V().getDefaultLocale(), r, "ICU");
		return Ii({
			source: n,
			target: a(n, o),
			options: o,
			sourceLocale: i
		});
	};
}
async function Ji({ locale: e, enableI18n: t }) {
	let n = await qi({
		locale: e,
		enableI18n: t
	});
	return (e, t = {}) => {
		if (e == null) return e;
		let r = Wi(e) ?? {};
		return Gi(r) ? n(r.$_source, r) : n(e, t);
	};
}
function Yi({ sourceLocale: e, targetLocale: t, sourceEntry: n, target: r, dictionaryOptions: i, options: a = {} }) {
	let o = zi(t, {
		...i,
		...ji(a)
	}, i.$format);
	return Ii({
		source: n.entry,
		target: r,
		options: o,
		sourceLocale: e
	});
}
function Xi(e) {
	let t = e ? e.split(".") : [];
	for (let n of t) Zi(n, e);
	return t;
}
function Zi(e, t) {
	if (e === "__proto__" || e === "constructor" || e === "prototype") throw Error(`Dictionary path "${t}" contains an unsafe segment`);
}
function U(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function W(e) {
	return e === void 0 || typeof e == "string" ? e : structuredClone(e);
}
function Qi(e, t) {
	let n = e;
	for (let e of Xi(t)) {
		if (!U(n)) return;
		n = n[e];
	}
	return n;
}
function $i(e, t, n) {
	let r = Xi(t);
	if (U(n) && oa(n, t), r.length === 0) {
		U(n) && aa(e, n);
		return;
	}
	let i = e;
	for (let e of r.slice(0, -1)) {
		let t = i[e];
		U(t) || (i[e] = {}), i = i[e];
	}
	let a = r[r.length - 1];
	i[a] = n;
}
function G(e) {
	if (na(e)) return {
		entry: Array.isArray(e) ? e[0] : e,
		options: Array.isArray(e) ? e[1] ?? {} : {}
	};
}
function ea(e) {
	return Object.keys(e.options).length === 0 ? e.entry : [e.entry, e.options];
}
function ta(e) {
	let { $format: t, ...n } = e;
	return {
		...n,
		$format: ia(t) ? t : "ICU"
	};
}
function na(e) {
	return typeof e == "string" ? !0 : !Array.isArray(e) || typeof e[0] != "string" ? !1 : e.length === 1 || e.length === 2 && ra(e[1]);
}
function ra(e) {
	if (typeof e != "object" || !e || Array.isArray(e)) return !1;
	let t = e;
	return (t.$context === void 0 || typeof t.$context == "string") && (t.$format === void 0 || ia(t.$format)) && (t.$maxChars === void 0 || typeof t.$maxChars == "number");
}
function ia(e) {
	return e === "ICU" || e === "I18NEXT" || e === "STRING";
}
function aa(e, t) {
	for (let t of Object.keys(e)) delete e[t];
	for (let n of Object.keys(t)) e[n] = t[n];
}
function oa(e, t = "") {
	for (let [n, r] of Object.entries(e)) {
		let e = t ? `${t}.${n}` : n;
		Zi(n, e), U(r) && oa(r, e);
	}
}
function sa({ sourceObject: e, targetObject: t, translate: n }) {
	let r = G(t);
	if (r !== void 0) return r.entry;
	if (U(t)) return U(e) ? ca({
		sourceObject: e,
		targetObject: t,
		translate: n
	}) : sa({
		sourceObject: t,
		targetObject: void 0,
		translate: n
	});
	let i = G(e);
	if (i !== void 0) {
		let e = ta(i.options);
		return n?.(i, e) ?? i.entry;
	}
	if (U(e)) return ca({
		sourceObject: e,
		targetObject: void 0,
		translate: n
	});
	throw Error("Dictionary object cannot be rendered");
}
function ca({ sourceObject: e, targetObject: t, translate: n }) {
	if (!U(e)) return sa({
		sourceObject: e,
		targetObject: t,
		translate: n
	});
	let r = {}, i = /* @__PURE__ */ new Set([...Object.keys(e), ...U(t) ? Object.keys(t) : []]);
	for (let a of Array.from(i)) {
		let i = sa({
			sourceObject: e[a],
			targetObject: U(t) ? t[a] : void 0,
			translate: n
		});
		i !== void 0 && (r[a] = i);
	}
	return r;
}
async function la({ locale: e, enableI18n: t, rootId: n }) {
	let r = mi(), i = V().getDefaultLocale(), a = t ? e : i, [o, s, c] = await Promise.all([
		r.getLookupDictionary(i),
		r.getLookupDictionary(a),
		r.getLookupTranslation(a)
	]), { lookupDictionary: l, lookupDictionaryObj: u } = o, { lookupDictionary: d, lookupDictionaryObj: f } = s, p = ((e, t = {}) => {
		e = ua(n, e);
		let r = l(e);
		if (r === void 0) throw Error(`Dictionary entry ${e} cannot be found`);
		let o = d(e), s = ta(r.options);
		return Yi({
			sourceLocale: i,
			targetLocale: a,
			sourceEntry: r,
			target: o?.entry ?? c(r.entry, s),
			dictionaryOptions: s,
			options: t
		});
	});
	return p.obj = (e) => {
		e = ua(n, e);
		let t = u(e);
		if (t === void 0) throw Error(`Dictionary entry ${e} cannot be found`);
		return sa({
			sourceObject: t,
			targetObject: f(e),
			translate: (e, t) => c(e.entry, t)
		});
	}, p;
}
function ua(e, t) {
	return e ? `${e}.${t}` : t;
}
function da(e, t, n = {}) {
	return (r) => (i) => e.translateMany(i, {
		...n,
		targetLocale: r
	}, t);
}
function fa(e) {
	let t = pa(e);
	return async (n) => {
		n = cr(n, e.customMapping);
		let r = t.replace("[locale]", n), i = await fetch(r);
		if (!i.ok) throw Error(`Failed to load translations from ${r}`);
		return await i.json();
	};
}
function pa(e) {
	let { cacheUrl: t = re, projectId: n, _versionId: r, _branchId: i } = e, a = r ? `/${r}` : "", o = i ? `?branchId=${i}` : "";
	return `${t}/${n}/[locale]` + a + o;
}
function ma({ type: e, remoteTranslationLoaderParams: t, loadTranslations: n }) {
	let { cacheUrl: r, projectId: i, _versionId: a, _branchId: o } = t;
	switch (e) {
		case "remote":
		case "gt-remote": return i ? fa({
			cacheUrl: r,
			projectId: i,
			_versionId: a,
			_branchId: o,
			customMapping: V().getCustomMapping()
		}) : ha(S({
			whatHappened: "Loading translations from a remote store needs a projectId. No translations will be loaded.",
			fix: "Add projectId to the I18nCache config, or set cacheUrl to null to disable translation loading"
		}));
		case "custom": return n;
		case "disabled": return r === null ? async () => ({}) : ha(S({
			whatHappened: "No translation loader found. No translations will be loaded.",
			fix: "Add projectId to the I18nCache config (to load from the GT remote store), provide a loadTranslations function, or set cacheUrl to null to disable translation loading"
		}));
	}
}
function ha(e) {
	let t = !1;
	return async (n) => (t || (t = !0, B.warn("I18nCache: " + e)), {});
}
async function ga(e, t, n) {
	let r = e.get(t);
	r || (r = n(), e.set(t, r));
	try {
		return await r;
	} finally {
		e.delete(t);
	}
}
var _a = class {
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
		return ga(this.pendingLoads, e, () => this.loadResource(e).then((t) => (this.set(e, t), t)));
	}
	getExpiresAt() {
		return this.ttl <= 0 ? this.ttl : Date.now() + this.ttl;
	}
	isExpired(e) {
		return e.expiresAt === 0 || e.expiresAt > 0 && e.expiresAt < Date.now();
	}
}, va = {
	maxConcurrentRequests: 100,
	maxBatchSize: 25,
	batchInterval: 50
};
function ya(e, t, n = !1) {
	if (e === void 0 || !Number.isFinite(e)) return t;
	let r = n ? Math.trunc(e) : e;
	return r > 0 ? r : t;
}
function ba(e) {
	return {
		maxConcurrentRequests: ya(e?.maxConcurrentRequests, va.maxConcurrentRequests, !0),
		maxBatchSize: ya(e?.maxBatchSize, va.maxBatchSize, !0),
		batchInterval: ya(e?.batchInterval, va.batchInterval)
	};
}
var xa = class {
	constructor({ init: e, translateMany: t, onMiss: n, batchConfig: r }) {
		this.pendingTranslations = /* @__PURE__ */ new Map(), this.queue = [], this.batchTimer = null, this.activeRequests = 0, this.cache = structuredClone(e), this.translateMany = t, this.batchConfig = ba(r), this.onMiss = n;
	}
	get(e) {
		let t = this.getCacheKey(e);
		return this.cache[t];
	}
	async miss(e) {
		let t = this.getCacheKey(e), n = await ga(this.pendingTranslations, t, () => this.translate(e));
		return n != null && this.onMiss?.(t, n), n;
	}
	getInternalCache() {
		return structuredClone(this.cache);
	}
	getCacheKey(e) {
		return Ui(e.message, e.options);
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
		let t = Sa(e), n = await this.sendBatchRequestWithErrorHandling(e, t);
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
function Sa(e) {
	return e.reduce((e, t) => (e[t.key] = {
		source: t.source,
		metadata: t.metadata
	}, e), {});
}
var K = class extends Error {
	constructor(e) {
		super(`I18nCache: source dictionary entry ${e} is not defined`), this.name = "DictionarySourceNotFoundError";
	}
};
async function Ca({ key: e, sourceValue: t, targetValue: n, translateEntry: r }) {
	if (G(n) !== void 0 || U(n) && !U(t)) return W(n);
	let i = G(t);
	if (i !== void 0) return await r(e, i);
	if (!U(t)) throw new K(e);
	let a = U(n) ? n : {}, o = /* @__PURE__ */ new Set([...Object.keys(t), ...Object.keys(a)]), s = await Promise.all(Array.from(o).map(async (n) => {
		let i = e ? `${e}.${n}` : n;
		Zi(n, i);
		let o = t[n];
		return o === void 0 ? [n, W(a[n])] : [n, await Ca({
			key: i,
			sourceValue: o,
			targetValue: a[n],
			translateEntry: r
		})];
	}));
	return Object.fromEntries(s);
}
function wa(e) {
	return {
		entry: e.entry,
		options: structuredClone(e.options)
	};
}
var Ta = class {
	constructor({ init: e, runtimeTranslate: t }) {
		this.pendingTranslations = /* @__PURE__ */ new Map(), this.pendingMaterializations = /* @__PURE__ */ new Map(), this.cache = structuredClone(e), this.runtimeTranslate = t;
	}
	getEntry(e) {
		let t = G(Qi(this.cache, e));
		if (t !== void 0) return wa(t);
	}
	getValue(e) {
		let t = Qi(this.cache, e);
		if (t !== void 0) return W(t);
	}
	setValue(e, t) {
		$i(this.cache, e, W(t));
	}
	getInternalCache() {
		return W(this.cache);
	}
	update(e) {
		Ea(this.cache, e);
	}
	async materializeValue(e, t, n = Qi(this.cache, e)) {
		return ga(this.pendingMaterializations, e, () => Ca({
			key: e,
			sourceValue: t,
			targetValue: n,
			translateEntry: async (e, t) => ea(await this.materializeEntry(e, t))
		}).then((t) => (this.setValue(e, t), t)));
	}
	async materializeEntry(e, t) {
		return wa(await ga(this.pendingTranslations, e, () => this.runtimeTranslate(e, t).then((t) => {
			$i(this.cache, e, t);
			let n = G(t);
			if (n === void 0) throw Error("DictionaryCache materializeEntry did not return a DictionaryEntry");
			return wa(n);
		})));
	}
};
function Ea(e, t) {
	for (let [n, r] of Object.entries(t)) {
		let t = e[n];
		U(t) && U(r) ? Ea(t, r) : e[n] = W(r);
	}
}
var Da = 12e3, Oa = class {
	constructor(e) {
		ka(e), this.config = {
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
		let t = ma({
			loadTranslations: e.loadTranslations,
			type: gi(e),
			remoteTranslationLoaderParams: {
				cacheUrl: e.cacheUrl,
				projectId: e.projectId,
				_versionId: e._versionId,
				_branchId: e._branchId
			}
		}), n = e.loadDictionary ?? (() => Promise.resolve({}));
		this.createTranslateMany = da(V().getGTClass(), this.config.runtimeTranslation?.timeout ?? Da, {
			...this.config.modelProvider && { modelProvider: this.config.modelProvider },
			...this.config.runtimeTranslation?.metadata
		});
		let r = this.config.cacheExpiryTime;
		this.translations = new _a({
			ttl: r,
			load: async (e) => this.createTranslationsCache(e, await t(e))
		}), this.dictionaries = new _a({
			ttl: r,
			load: async (e) => this.createDictionaryCache(e, await n(e))
		});
		let i = V().getDefaultLocale();
		this.dictionaries.set(i, this.createDictionaryCache(i, e.dictionary ?? {}), { expiresAt: -1 });
	}
	createTranslationsCache(e, t) {
		return new xa({
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
		return new Ta({
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
				throw new K(t);
			}
			return await r.materializeValue(t, a, i);
		});
	}
	async translateDictionaryEntry(e, t, n) {
		let r = await this.lookupTranslationWithFallbackResolved(e, n.entry, ta(n.options));
		if (typeof r != "string") throw Error(`Dictionary entry "${t}" could not be translated into a string. Check the source entry and translation loader output.`);
		return r;
	}
	getSourceDictionaryEntry(e) {
		let t = this.getDefaultDictionaryCache()?.getEntry(e);
		if (t === void 0) throw new K(e);
		return t;
	}
	getSourceDictionaryObject(e, { throwOnMissing: t = !0 } = {}) {
		let n = this.getDefaultDictionaryCache()?.getValue(e);
		if (n === void 0 && t) throw new K(e);
		return n;
	}
	getDefaultDictionaryCache() {
		return this.dictionaries.get(V().getDefaultLocale());
	}
	resolveDictionaryCacheLocale(e) {
		return this._resolveCacheLocale(e) ?? V().getDefaultLocale();
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
			let n = await this.translations.getOrLoad(t), r = async (e = []) => {}, i = (e, r = {}) => this.guard(void 0, () => {
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
		if (e instanceof K) throw e;
		switch (vi()) {
			case "development": throw e;
			default: B.error("I18nCache: " + e);
		}
	}
	_resolveLocale(e) {
		let t = V(), n = t.determineLocale(e);
		if (!t.isValidLocale(e) || !n) throw Error(`Locale "${e}" is not valid. Use a valid BCP 47 locale code or add a custom mapping.`);
		return n;
	}
	_resolveCacheLocale(e) {
		let t = this._resolveLocale(e), n = V();
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
function ka(e) {
	if (e.runtimeUrl && e.runtimeUrl !== "https://api.gtx.dev" && (e.projectId || B.warn("I18nCache: " + S({
		whatHappened: "Runtime translation needs a projectId",
		fix: "Add projectId to the I18nCache config or disable runtime translation"
	})), !e.devApiKey && !e.apiKey && B.warn("I18nCache: " + S({
		whatHappened: "Runtime translation needs devApiKey or apiKey",
		fix: "Add credentials to the I18nCache config or disable runtime translation"
	}))), e.loadDictionary && !e.dictionary) throw B.error("I18nCache: " + S({
		whatHappened: "loadDictionary needs a source dictionary",
		fix: "Provide dictionary so the default locale has source content"
	})), Error("Validation errors occurred");
}
function Aa(e) {
	let t = "hash" in e ? e.hash : Ui(e.message, e.options);
	return `${e.locale}:${t}`;
}
var ja = [];
function Ma({ locale: e, enableI18n: t, localesProp: n = ja }) {
	let r = V().getDefaultLocale();
	return t && V().requiresTranslation(e) ? [
		...n,
		e,
		r
	] : [r];
}
function q() {
	return mi();
}
function Na(e) {
	hi(e);
}
var Pa = "generaltranslation.locale-reset", Fa = "server-render", Ia = Symbol.for("generaltranslation.react-core.ReactI18nConfig"), La = class extends wi {
	renderStrategy;
	localeCookieName;
	regionCookieName;
	enableI18nCookieName;
	constructor(e = {}, t = Fa) {
		super(e), Ba(t), Object.defineProperty(this, Ia, { value: !0 }), this.renderStrategy = t, this.localeCookieName = e.localeCookieName ?? "generaltranslation.locale", this.regionCookieName = e.regionCookieName ?? "generaltranslation.region", this.enableI18nCookieName = e.enableI18nCookieName ?? "generaltranslation.enable-i18n";
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
function J() {
	let e = V();
	if (Va(e)) return e;
	throw Error(S({
		source: "@generaltranslation/react-core",
		severity: "Error",
		whatHappened: "Cannot read ReactI18nConfig after base I18nConfig setup.",
		why: "the internal I18nConfig singleton was initialized without react-core render strategy support",
		fix: "Initialize GT through gt-react or @generaltranslation/react-core/pure."
	}));
}
function Ra(e) {
	Ai(e);
}
function za(e = {}, t = Fa) {
	let n = new La(e, t);
	return Ra(n), n;
}
function Ba(e) {
	if (e !== "SPA" && e !== "server-render") throw Error(S({
		source: "@generaltranslation/react-core",
		severity: "Error",
		whatHappened: "Invalid React render strategy.",
		why: `the render strategy must be "SPA" or "server-render", but received "${String(e)}"`,
		fix: "Initialize GT through gt-react or pass a valid render strategy."
	}));
}
function Va(e) {
	if (e instanceof La) return !0;
	let t = e;
	return t[Ia] === !0 && typeof t.getRenderStrategy == "function" && typeof t.getLocaleCookieName == "function" && typeof t.getRegionCookieName == "function" && typeof t.getEnableI18nCookieName == "function";
}
var { getConditionStore: Y, setConditionStore: Ha, isConditionStoreInitialized: Ua } = Bi(S({
	source: "@generaltranslation/react-core",
	severity: "Error",
	whatHappened: "Cannot read GT runtime context before it has been initialized",
	why: "the internal ConditionStore is unavailable",
	fix: "Call initializeGT() during setup (gt-next runs this automatically) and add a <GTProvider> at the root of your component tree."
}));
function Wa({ Currency: e, GtInternalCurrency: t, DateTime: n, GtInternalDateTime: r, Num: i, GtInternalNum: a, RelativeTime: o, GtInternalRelativeTime: s, Var: c, GtInternalVar: l }) {
	return function({ variableType: u, variableValue: d, variableOptions: p, locales: m, enableI18n: h, injectionType: g }) {
		let _ = {
			_locale: m[0] ?? "en",
			_enableI18n: h
		};
		if (u === "n") {
			let e = g === "automatic" ? i : a, t = p;
			return f(e, {
				..._,
				options: t,
				children: d
			});
		}
		if (u === "d") {
			let e = g === "automatic" ? n : r, t = p;
			return f(e, {
				..._,
				options: t,
				children: d
			});
		}
		if (u === "c") {
			let n = g === "automatic" ? e : t, r = p;
			return f(n, {
				..._,
				options: r,
				children: d
			});
		}
		if (u === "rt") {
			let e = g === "automatic" ? o : s, t = p;
			if (typeof d == "number" && t?.unit) return f(e, {
				..._,
				value: d,
				unit: t.unit,
				baseDate: t?.baseDate,
				options: t
			});
			let n = d instanceof Date ? d : typeof d == "string" || typeof d == "number" ? new Date(d) : void 0;
			return f(e, {
				..._,
				date: n && !isNaN(n.getTime()) ? n : void 0,
				baseDate: t?.baseDate,
				options: t
			});
		}
		let v = d;
		return f(g === "automatic" ? l : c, {
			..._,
			children: v
		});
	};
}
var Ga = {
	variable: "value",
	number: "n",
	datetime: "date",
	currency: "cost",
	"relative-time": "time"
};
function Ka(e = {}, t) {
	return typeof e.name == "string" ? e.name : `_gt_${Ga[t] || "value"}_${e["data-_gt"]?.id}`;
}
function qa(e) {
	return typeof e == "object" && !!e && "data-_gt" in e && typeof e["data-_gt"] == "object" && !!e["data-_gt"] && "transformation" in e["data-_gt"] && e["data-_gt"]?.transformation === "variable";
}
function Ja(e) {
	let t = e["data-_gt"]?.variableType || "variable";
	return {
		variableName: Ka(e, t),
		variableType: dn(t),
		injectionType: e["data-_gt"]?.injectionType || "manual",
		variableValue: (() => {
			if (e.value !== void 0) return e.value;
			if (e.date !== void 0) return e.date;
			if (e["data-_gt-unformatted-value"] !== void 0) return e["data-_gt-unformatted-value"];
			if (e.children !== void 0) return e.children;
		})(),
		variableOptions: (() => {
			let t = {
				...e.currency !== void 0 && { currency: e.currency },
				...e.unit !== void 0 && { unit: e.unit },
				...e.baseDate !== void 0 && { baseDate: e.baseDate },
				...e.options !== void 0 && e.options
			};
			return Object.keys(t).length ? t : typeof e["data-_gt-variable-options"] == "string" ? JSON.parse(e["data-_gt-variable-options"]) : e["data-_gt-variable-options"] || void 0;
		})()
	};
}
function Ya(e) {
	return e && e.props && e.props["data-_gt"] ? e.props["data-_gt"] : null;
}
function Xa(e, t, n) {
	let r = "", i = null;
	return typeof e == "number" && !i && n && (r = ln(e, Object.keys(n).filter(cn), t)), r && !i && (i = n[r]), i;
}
function Za({ renderVariable: t }) {
	return function({ children: n, defaultLocale: r = "en", enableI18n: i }) {
		let a = (n) => {
			let a = Ya(n);
			if (qa(n.props)) {
				let { variableType: e, variableValue: a, variableOptions: o, injectionType: s } = Ja(n.props);
				return t({
					variableType: e,
					variableValue: a,
					variableOptions: o,
					locales: [r],
					enableI18n: i,
					injectionType: s
				});
			}
			if (a?.transformation === "plural") {
				let e = a.branches || {};
				return typeof n.props.n == "number" ? s(Xa(n.props.n, [r], e) ?? n.props.children) : n.props.children == null ? null : s(n.props.children);
			}
			if (a?.transformation === "branch") {
				let { children: e, branch: t } = n.props, r = a.branches || {}, i = t == null || t === "" ? void 0 : t.toString();
				return s(i && r[i] !== void 0 ? r[i] : e);
			}
			return a?.transformation === "fragment" ? e.createElement(e.Fragment, {
				key: n.props.key,
				children: s(n.props.children)
			}) : n.props.children ? e.cloneElement(n, {
				...n.props,
				"data-_gt": void 0,
				children: s(n.props.children)
			}) : e.cloneElement(n, {
				...n.props,
				"data-_gt": void 0
			});
		}, o = (t) => e.isValidElement(t) ? a(t) : t, s = (t) => Array.isArray(t) ? e.Children.map(t, o) : o(t);
		return s(n);
	};
}
function Qa({ renderVariable: t }) {
	let n = Za({ renderVariable: t });
	function r({ sourceElement: t, targetElement: r, locales: a = ["en"], enableI18n: o }) {
		let { props: s } = t, c = s["data-_gt"], l = c?.transformation, u = r.d, d = {};
		if (u && Object.entries(gn).forEach(([e, t]) => {
			u[e] && (d[t] = u[e]);
		}), l === "plural") {
			let e = t.props.n;
			return typeof e == "number" ? i({
				source: Xa(e, a, c.branches || {}) ?? t.props.children,
				target: Xa(e, a, r.d?.b || {}) ?? r.c,
				locales: a,
				enableI18n: o
			}) : n({
				children: t,
				defaultLocale: a[0],
				enableI18n: o
			});
		}
		if (l === "branch") {
			let { branch: e, children: t } = s, n = e == null || e === "" ? void 0 : e.toString(), l = c.branches || {}, u = r.d?.b || {};
			return i({
				source: n && l[n] !== void 0 ? l[n] : t,
				target: n && u[n] !== void 0 ? u[n] : r.c,
				locales: a,
				enableI18n: o
			});
		}
		return l === "fragment" && r.c ? e.createElement(e.Fragment, {
			key: t.props.key,
			children: i({
				source: s.children,
				target: r.c,
				locales: a,
				enableI18n: o
			})
		}) : s?.children && r?.c ? e.cloneElement(t, {
			...s,
			...d,
			"data-_gt": void 0,
			children: i({
				source: s.children,
				target: r.c,
				locales: a,
				enableI18n: o
			})
		}) : n({
			children: t,
			defaultLocale: a[0],
			enableI18n: o
		});
	}
	function i({ source: i, target: a, locales: o = ["en"], enableI18n: s }) {
		if (a == null && i) return n({
			children: i,
			defaultLocale: o[0],
			enableI18n: s
		});
		if (typeof a == "string") return a;
		if (Array.isArray(a) && !Array.isArray(i) && i && (i = [i]), Array.isArray(i) && Array.isArray(a)) {
			let n = {}, c = {}, l = {}, u = i.filter((t) => {
				if (e.isValidElement(t)) {
					if (qa(t.props)) {
						let { variableName: e, variableValue: r, variableOptions: i, injectionType: a } = Ja(t.props);
						n[e] = r, c[e] = i, l[e] = a;
					} else return !0;
				}
				return !1;
			}), d = (e) => u.find((t) => {
				let n = Ya(t);
				return n?.id !== void 0 && n.id === e.i;
			}) || u.shift();
			return a.map((i, a) => {
				if (typeof i == "string") return f(e.Fragment, { children: i }, `string_${a}`);
				if ($t(i)) return f(e.Fragment, { children: t({
					variableType: i.v || "v",
					variableValue: n[i.k],
					variableOptions: c[i.k],
					locales: o,
					enableI18n: s,
					injectionType: l[i.k] || "manual"
				}) }, `var_${a}`);
				let u = d(i);
				return u ? f(e.Fragment, { children: r({
					sourceElement: u,
					targetElement: i,
					locales: o,
					enableI18n: s
				}) }, `element_${a}`) : null;
			});
		}
		if (a && typeof a == "object" && !Array.isArray(a)) {
			let n = $t(a) ? "variable" : "element";
			if (e.isValidElement(i)) {
				if (n === "element") return r({
					sourceElement: i,
					targetElement: a,
					locales: o,
					enableI18n: s
				});
				if (qa(i.props)) {
					let { variableValue: e, variableOptions: n, variableType: r, injectionType: a } = Ja(i.props);
					return t({
						variableType: r,
						variableValue: e,
						variableOptions: n,
						locales: o,
						enableI18n: s,
						injectionType: a
					});
				}
			}
		}
		return n({
			children: i,
			defaultLocale: o[0],
			enableI18n: s
		});
	}
	return i;
}
function $a() {
	let e = V();
	return typeof e.isIdTaggingEnabled == "function" && e.isIdTaggingEnabled();
}
function eo(...e) {
	if (!$a()) return;
	let t = Ui(...e);
	return e[1].$_hash = t, t;
}
var to = { display: "contents" }, no = globalThis.navigator?.product === "ReactNative";
function ro(e) {
	if (e == null || typeof e == "boolean" || e === "") return !0;
	if (Array.isArray(e)) return !e.some((e) => !ro(e));
	if (o(e) && e.type === n) {
		let t = e.props.children;
		return t == null || ro(t);
	}
	return !1;
}
function io(e, t) {
	return no || !$a() ? e : o(e) && typeof e.type == "string" ? r(e, { "data-_gt-hash": t }) : ro(e) ? e : a("span", {
		"data-_gt-hash": t,
		style: to
	}, e);
}
function ao({ renderDefaultChildren: e, renderTranslatedChildren: t }) {
	function n({ taggedSourceChildren: e, targetJsxChildren: t, locale: n, defaultLocale: a, enableI18n: o, shouldTranslate: s, hash: c }) {
		let l = !s || t == null ? r({
			taggedSourceChildren: e,
			defaultLocale: a,
			enableI18n: o
		}) : i({
			taggedSourceChildren: e,
			targetJsxChildren: t,
			locales: [n, a],
			enableI18n: o
		});
		return c ? io(l, c) : l;
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
function oo(e) {
	let t = Wa(e), n = Za({ renderVariable: t }), r = Qa({ renderVariable: t });
	return {
		renderVariable: t,
		renderDefaultChildren: n,
		renderTranslatedChildren: r,
		renderPreparedT: ao({
			renderDefaultChildren: n,
			renderTranslatedChildren: r
		})
	};
}
var so = class extends Oa {};
function co(e) {
	za(e, "server-render"), Na(new so(e));
}
var lo = z({
	namespace: "reactCore",
	key: "i18nStore",
	source: "@generaltranslation/react-core",
	notInitialized: () => fo()
}), uo = lo.get;
lo.set, lo.isInitialized;
function fo() {
	let e = S({
		source: "@generaltranslation/react-core",
		severity: "Error",
		whatHappened: "Cannot access I18nStore before it is initialized.",
		fix: J().getRenderStrategy() === "SPA" ? "Initialize GT before reading GT runtime context." : "Add a <GTProvider> at the root of your component tree."
	});
	return Error(e);
}
function po(e, t) {
	return e.add(t), () => {
		e.delete(t);
	};
}
function mo(e, t) {
	let n = t.options.$_hash ?? Ui(t.message, t.options);
	return e?.[t.locale]?.[n];
}
function ho(e, t) {
	return G(_o(e, t));
}
function go(e, t) {
	return _o(e, t);
}
function _o(e, { locale: t, id: n }) {
	let r = e?.[t];
	if (!r) return;
	if (!n) return r;
	let i = r;
	for (let e of n.split(".")) {
		if (!vo(e) || !U(i) || !Object.prototype.hasOwnProperty.call(i, e)) return;
		i = i[e];
	}
	return i;
}
function vo(e) {
	return e !== "__proto__" && e !== "constructor" && e !== "prototype";
}
function yo(e) {
	if (e instanceof Error) return `${e.name}|${e.message}`;
	if (typeof e == "object" && e) try {
		return `object|${JSON.stringify(e)}`;
	} catch {
		return `object|${String(e)}`;
	}
	return `${typeof e}|${String(e)}`;
}
var bo = class {
	translateListeners = /* @__PURE__ */ new Set();
	dictionaryEntryListeners = /* @__PURE__ */ new Set();
	dictionaryObjectListeners = /* @__PURE__ */ new Set();
	loggedRuntimeTranslationErrors = /* @__PURE__ */ new Set();
	constructor() {}
	updateTranslations = (e) => {
		q().updateTranslations(e);
	};
	updateDictionaries = (e) => {
		q().updateDictionaries(e);
	};
	translate = async (e) => q().lookupTranslationWithFallback(e.locale, e.message, e.options).then(() => {
		this.emitTranslateEvent(e);
	}).catch((e) => this.logRuntimeTranslationError(e));
	translateDictionaryEntry = (e) => {
		q().lookupDictionaryWithFallback(e.locale, e.id).then(() => {
			this.emitDictionaryEvent(e);
		}).catch((e) => this.logRuntimeTranslationError(e));
	};
	translateDictionaryObject = (e) => {
		q().lookupDictionaryObjWithFallback(e.locale, e.id).then(() => {
			this.emitDictionaryEvent(e);
		}).catch((e) => this.logRuntimeTranslationError(e));
	};
	logRuntimeTranslationError(e) {
		let t = ne(e), n = yo(e);
		if (!this.loggedRuntimeTranslationErrors.has(n)) {
			if (this.loggedRuntimeTranslationErrors.add(n), this.loggedRuntimeTranslationErrors.size > 100) {
				let e = this.loggedRuntimeTranslationErrors.values().next().value;
				e !== void 0 && this.loggedRuntimeTranslationErrors.delete(e);
			}
			console.error(S({
				source: "@generaltranslation/react-core",
				severity: "Error",
				whatHappened: "A runtime translation request failed.",
				wayOut: "Rendering falls back to untranslated content.",
				details: t
			}));
		}
	}
	subscribeToTranslate = (e, t) => {
		let n = Aa(e);
		return po(this.translateListeners, (e) => {
			Aa(e) === n && t();
		});
	};
	subscribeToTranslationEvents = (e) => po(this.translateListeners, e);
	subscribeToDictionaryEntryEvents = (e) => po(this.dictionaryEntryListeners, e);
	subscribeToDictionaryObjectEvents = (e) => po(this.dictionaryObjectListeners, e);
	getTranslateSnapshot = (e, t = {}) => mo(t, e) ?? q().lookupTranslation(e.locale, e.message, e.options);
	getDictionaryEntrySnapshot = (e, t = {}) => ho(t, e) ?? q().lookupDictionary(e.locale, e.id);
	getDictionaryObjectSnapshot = (e, t = {}) => go(t, e) ?? q().lookupDictionaryObj(e.locale, e.id);
	emitTranslateEvent(e) {
		this.translateListeners.forEach((t) => t(e));
	}
	emitDictionaryEvent(e) {
		this.dictionaryEntryListeners.forEach((t) => t(e)), this.dictionaryObjectListeners.forEach((t) => {
			t(e);
		});
	}
}, xo = z({
	namespace: "reactCore",
	key: "gtContext",
	source: "@generaltranslation/react-core",
	notInitialized: () => S({
		source: "@generaltranslation/react-core",
		severity: "Error",
		whatHappened: "Cannot read GTContext before it has been initialized",
		why: "the internal GTContext singleton is unavailable",
		fix: "Add a <GTProvider> at the root of your component tree."
	})
});
function So() {
	return xo.isInitialized() || xo.set(i(void 0)), xo.get();
}
function Co() {
	let e = s(So());
	if (e || J().getRenderStrategy() === "SPA") return e;
	throw Error(wo());
}
function wo() {
	return S({
		source: "@generaltranslation/react-core",
		severity: "Error",
		whatHappened: "GT runtime context could not be read",
		why: "GTContext was accessed outside of a <GTProvider>",
		fix: "Add a <GTProvider> at the root of your component tree."
	});
}
function To() {
	return Co()?.conditionStore ?? Y();
}
function X() {
	return To().getLocale();
}
function Z() {
	return To().getEnableI18n();
}
function Eo() {
	return l(() => V().getDefaultLocale(), []);
}
function Do() {
	return Co()?.i18nStore || uo();
}
function Oo() {
	return Co()?.translationsSnapshot || {};
}
var ko = () => {};
function Ao() {
	return ko;
}
var jo = Ao;
function Mo({ _enableI18n: e, _locale: t, children: n, currency: r = "USD", options: i = {}, locales: a = [] }) {
	let o = Ma({
		locale: t,
		enableI18n: e,
		localesProp: a
	}), s = V().getGTClass();
	if (n == null) return null;
	let c = typeof n == "string" ? parseFloat(n) : n;
	return s.formatCurrency(c, r, {
		locales: o,
		...i
	});
}
function No({ _enableI18n: e, _locale: t, ...n }) {
	return Mo({
		...n,
		_enableI18n: e ?? Z(),
		_locale: t ?? X()
	});
}
function Po(e) {
	return f(No, { ...e });
}
No._gtt = "variable-currency-automatic", Po._gtt = "variable-currency";
function Fo({ _enableI18n: e, _locale: t, children: n, options: r = {}, locales: i = [] }) {
	let a = Ma({
		locale: t,
		enableI18n: e,
		localesProp: i
	}), o = V().getGTClass();
	return n == null ? null : o.formatDateTime(n, {
		locales: a,
		...r
	}).replace(/[\u200F\u202B\u202E]/g, "");
}
function Io({ _enableI18n: e, _locale: t, ...n }) {
	return Fo({
		...n,
		_enableI18n: e ?? Z(),
		_locale: t ?? X()
	});
}
function Lo(e) {
	return f(Io, { ...e });
}
Io._gtt = "variable-datetime-automatic", Lo._gtt = "variable-datetime";
function Ro({ _enableI18n: e, _locale: t, children: n, options: r = {}, locales: i = [] }) {
	let a = Ma({
		locale: t,
		enableI18n: e,
		localesProp: i
	}), o = V().getGTClass();
	if (n == null) return null;
	let s = typeof n == "string" ? parseFloat(n) : n;
	return o.formatNum(s, {
		locales: a,
		...r
	});
}
function zo({ _enableI18n: e, _locale: t, ...n }) {
	return Ro({
		...n,
		_enableI18n: e ?? Z(),
		_locale: t ?? X()
	});
}
function Bo(e) {
	return f(zo, { ...e });
}
zo._gtt = "variable-number-automatic", Bo._gtt = "variable-number";
function Vo({ _enableI18n: e, _locale: t, date: n, children: r, value: i, unit: a, baseDate: o, locales: s = [], options: c = {} }) {
	let l = Ma({
		locale: t,
		enableI18n: e,
		localesProp: s
	}), u = V().getGTClass(), d = n ?? r;
	return i !== void 0 && a ? u.formatRelativeTime(i, a, {
		locales: l,
		numeric: c.numeric,
		style: c.style,
		localeMatcher: c.localeMatcher
	}) : d == null ? null : u.formatRelativeTimeFromDate(d, {
		locales: l,
		baseDate: o ?? /* @__PURE__ */ new Date(),
		numeric: c.numeric,
		style: c.style,
		localeMatcher: c.localeMatcher
	});
}
function Ho({ _enableI18n: e, _locale: t, ...n }) {
	return Vo({
		...n,
		_enableI18n: e ?? Z(),
		_locale: t ?? X()
	});
}
function Uo(e) {
	return f(Ho, { ...e });
}
Ho._gtt = "variable-relative-time-automatic", Uo._gtt = "variable-relative-time";
function Wo({ children: e }) {
	return e;
}
function Go({ children: e }) {
	return Wo({ children: e });
}
function Ko({ children: e }) {
	return Wo({ children: e });
}
Go._gtt = "variable-variable", Ko._gtt = "variable-variable-automatic";
function qo(e) {
	let t = Do(), n = Oo();
	return jo(), d((n) => t.subscribeToTranslate(e, n), () => t.getTranslateSnapshot(e, n), () => t.getTranslateSnapshot(e, n));
}
var { renderVariable: Jo, renderDefaultChildren: Yo, renderTranslatedChildren: Xo, renderPreparedT: Zo } = oo({
	Currency: Po,
	GtInternalCurrency: No,
	DateTime: Lo,
	GtInternalDateTime: Io,
	Num: Bo,
	GtInternalNum: zo,
	RelativeTime: Uo,
	GtInternalRelativeTime: Ho,
	Var: Go,
	GtInternalVar: Ko
});
function Qo(t, n = 0) {
	let r = n, i = (e) => {
		let { type: t, props: n } = e;
		r += 1;
		let i = {
			id: r,
			injectionType: "manual"
		}, a;
		try {
			a = typeof t == "function" ? t._gtt : void 0;
		} catch {}
		if (a) {
			let e = a.split("-");
			if ((e[1] === "automatic" || e[2] === "automatic") && (i.injectionType = "automatic"), e[0] === "translate" && (e[0] = "fragment"), e[0] === "variable" && (i.variableType = e?.[1] || "variable"), e[0] === "plural") {
				let e = Object.entries(n).reduce((e, [t, n]) => (cn(t) && (e[t] = Qo(n, r)), e), {});
				Object.keys(e).length && (i.branches = e);
			}
			if (e[0] === "branch") {
				let { children: e, branch: t, ...a } = n, o = Object.fromEntries(Object.entries(a).filter(([e]) => !e.startsWith("data-"))), s = Object.entries(o).reduce((e, [t, n]) => (e[t] = Qo(n, r), e), {});
				Object.keys(s).length && (i.branches = s);
			}
			i.transformation = e[0];
		}
		return i;
	};
	function a(t) {
		let { props: n } = t, r = i(t), a = {
			...n,
			"data-_gt": r
		};
		return n.children && !r.variableType && (a.children = c(n.children)), t.type === e.Fragment && (a["data-_gt"].transformation = "fragment"), e.cloneElement(t, a);
	}
	function s(e) {
		return o(e) ? a(e) : e;
	}
	function c(t) {
		return Array.isArray(t) ? e.Children.map(t, s) : s(t);
	}
	return c(t);
}
function $o(e) {
	return ns(e, 0);
}
function es(e, t) {
	let { type: n, props: i } = e, a = rs(n);
	if (typeof i != "object" || !i) return e;
	if (a) {
		let { componentType: n, injectionType: o } = a;
		if (n === "variable") return e;
		if (n === "branch") return r(e, { ...Object.entries(i).reduce((e, [n, r]) => (e[n] = n !== "branch" && !n.startsWith("data-") ? ts(r, t) : r, e), {}) });
		if (n === "plural") return r(e, { ...Object.entries(i).reduce((e, [n, r]) => (e[n] = cn(n) || n === "children" ? ts(r, t) : r, e), {}) });
		if (n === "derive") return r(e, {
			...i,
			..."children" in i && { children: ns(i.children, t + 1) }
		});
		if (n === "translate" && o === "automatic" && t > 0) return "children" in i ? ns(i.children, t) : void 0;
		n === "translate" && o === "automatic" && console.warn(is);
	}
	return r(e, {
		...i,
		..."children" in i && { children: ns(i.children, t) }
	});
}
function ts(e, t) {
	return o(e) ? es(e, t) : e;
}
function ns(e, n) {
	return Array.isArray(e) ? t.map(e, (e) => ts(e, n)) : ts(e, n);
}
function rs(e) {
	let t = typeof e == "function" && "_gtt" in e ? e._gtt : void 0;
	if (t == null || typeof t != "string") return;
	let n = t.split("-");
	return {
		componentType: n[0],
		injectionType: n[1] === "automatic" || n[2] === "automatic" ? "automatic" : "manual"
	};
}
var is = "'@generaltranslation/react-core Warning: A <_T> component was found injected outside of a <Derive> boundary. This may affect translation resolution for this component.";
function as(t) {
	return e.isValidElement(t);
}
var os = (e) => {
	if (!e) return "";
	let { type: t, props: n } = e;
	if (t && typeof t == "function") {
		if ("displayName" in t && typeof t.displayName == "string" && t.displayName) return t.displayName;
		if ("name" in t && typeof t.name == "string" && t.name) return t.name;
	}
	return t && typeof t == "string" ? t : n.href ? "a" : n["data-_gt"]?.id ? `C${n["data-_gt"].id}` : "function";
}, ss = (e, t, n) => {
	let r = Object.entries(gn).reduce((e, [n, r]) => {
		let i = t[r];
		return typeof i == "string" && (e[n] = i), e;
	}, {});
	if ((e === "plural" || e === "branch") && n) {
		let t = {};
		Object.entries(n).forEach(([e, n]) => {
			t[e] = us(n);
		}), r = {
			...r,
			b: t,
			t: e === "plural" ? "p" : "b"
		};
	}
	return Object.keys(r).length ? r : void 0;
}, cs = (e) => {
	let { props: t } = e, n = { t: os(e) };
	if (t["data-_gt"]) {
		let e = t["data-_gt"], r = e.transformation;
		if (r === "variable") {
			let n = e.variableType || "variable", r = Ka(t, n), i = dn(n);
			return {
				i: e.id,
				k: r,
				v: i
			};
		}
		n.i = e.id, n.d = ss(r, t, e.branches);
	}
	return t.children && (n.c = us(t.children)), n;
}, ls = (e) => as(e) ? cs(e) : typeof e == "number" ? e.toString() : e;
function us(e) {
	return Array.isArray(e) ? e.map(ls) : ls(e);
}
function ds({ sourceChildren: e, params: t, locale: n }) {
	let r = fs(e), i = ps(r), a = ms({
		options: hs(t),
		locale: n
	});
	return eo(i, a), {
		taggedSourceChildren: r,
		sourceJsxChildren: i,
		targetOptions: a
	};
}
function fs(e) {
	return Qo($o(e));
}
function ps(e) {
	return us(e);
}
function ms({ options: e, locale: t }) {
	return {
		...e,
		$locale: t
	};
}
function hs(e) {
	return {
		...e,
		$format: "JSX",
		$context: e.$context ?? e.context,
		$id: e.$id ?? e.id,
		$_hash: e.$_hash ?? e._hash,
		$maxChars: e.$maxChars ?? e.maxChars,
		$requiresReview: e.$requiresReview ?? e.requiresReview
	};
}
function gs({ sourceChildren: e, params: t, _locale: n, _enableI18n: r }) {
	let i = X(), a = Z(), o = Eo(), s = n ?? i, c = r ?? a;
	return {
		defaultLocale: o,
		enableI18n: c,
		locale: s,
		shouldTranslate: c && V().requiresTranslation(s),
		...l(() => ds({
			sourceChildren: e,
			params: t,
			locale: s
		}), [
			s,
			t,
			e
		])
	};
}
function _s(e) {
	return vs(e);
}
_s._gtt = "translate-client";
function vs({ children: e, _locale: t, _enableI18n: n, _renderPreparedT: r = Zo, ...i }) {
	let { defaultLocale: a, locale: o, enableI18n: s, targetOptions: c, taggedSourceChildren: l, sourceJsxChildren: d, shouldTranslate: f } = gs({
		sourceChildren: e,
		params: i,
		_locale: t,
		_enableI18n: n
	}), p = qo({
		locale: o,
		message: d,
		options: c
	}), m = u(null), h = r({
		taggedSourceChildren: l,
		targetJsxChildren: p,
		locale: o,
		defaultLocale: a,
		enableI18n: s,
		shouldTranslate: f,
		hash: c.$_hash
	});
	return m.current = h, h;
}
var ys = So();
function bs({ children: e, translations: t, dictionaries: n, conditionStore: r, i18nStore: i, onMissingTranslation: a, onMissingDictionaryEntry: o, onMissingDictionaryObj: s }) {
	let u = l(() => ({
		translationsSnapshot: t,
		dictionariesSnapshot: n ?? {},
		i18nStore: i,
		conditionStore: r,
		onMissingTranslation: a,
		onMissingDictionaryEntry: o,
		onMissingDictionaryObj: s
	}), [
		t,
		n,
		i,
		r,
		a,
		o,
		s
	]);
	return c(() => {
		i.updateTranslations(t), i.updateDictionaries(n ?? {});
	}, [
		t,
		n,
		i
	]), f(ys.Provider, {
		value: u,
		children: e
	});
}
function xs({ cookieName: e }) {
	if (!(typeof document > "u")) return H(document.cookie, e);
}
function Q({ cookieName: e, value: t }) {
	typeof document > "u" || (document.cookie = `${e}=${t};path=/`);
}
function Ss(e) {
	let t = [], n = xs({ cookieName: e });
	n && t.push(n);
	let r = navigator?.languages || [];
	return t.push(...r), t;
}
var Cs = class {
	constructor(e) {
		this.getLocale = () => ws(this.customGetLocale), this.setLocale = (e) => {
			this.updateLocale(e), Q({
				cookieName: Pa,
				value: "true"
			}), this.reload();
		}, this.getRegion = () => xs({ cookieName: J().getRegionCookieName() }) || this.customGetRegion?.(), this.setRegion = (e) => {
			this.updateRegion(e), this.reload();
		}, this.getEnableI18n = () => {
			let e = xs({ cookieName: J().getEnableI18nCookieName() });
			return e === void 0 ? this.customGetEnableI18n?.() ?? !0 : e === "true";
		}, this.setEnableI18n = (e) => {
			this.updateEnableI18n(e), this.reload();
		}, this.updateLocale = (e) => {
			let t = J();
			Q({
				cookieName: t.getLocaleCookieName(),
				value: t.resolveSupportedLocale(e)
			});
		}, this.updateRegion = (e) => {
			Q({
				cookieName: J().getRegionCookieName(),
				value: e ?? ""
			});
		}, this.updateEnableI18n = (e) => {
			Q({
				cookieName: J().getEnableI18nCookieName(),
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
		let t = J();
		this.customReload = e._reload ?? (() => typeof window < "u" ? window.location.reload() : void 0), this.customGetLocale = e._getLocale, this.customGetRegion = e._getRegion, this.customGetEnableI18n = e._getEnableI18n, Q({
			cookieName: t.getLocaleCookieName(),
			value: t.resolveSupportedLocale(e.locale)
		}), e.region !== void 0 && Q({
			cookieName: t.getRegionCookieName(),
			value: e.region
		}), this.updateEnableI18n(e.enableI18n ?? !0);
	}
};
function ws(e) {
	let t = J(), n = Ss(t.getLocaleCookieName());
	return e && n.push(e()), t.resolveSupportedLocale(n);
}
function Ts(e) {
	let t = e.trim();
	return t ? /[.!?)]$/.test(t) ? t : `${t}.` : "";
}
function Es(e) {
	let t = e.trim(), n = t.length;
	for (; n > 0;) {
		let e = t[n - 1];
		if (e !== "." && e !== "!" && e !== "?") break;
		--n;
	}
	return t.slice(0, n);
}
function Ds(e) {
	if (!e) return "";
	let t = Array.isArray(e) ? e.join(", ") : e;
	return t.trim() ? Ts(`Details: ${t}`) : "";
}
function Os({ source: e, severity: t, whatHappened: n, reassurance: r, why: i, fix: a, wayOut: o, details: s, docsUrl: c }) {
	let l = e ? t ? `${e} ${t}:` : `${e}:` : t ? `${t}:` : "", u = i ? `${Es(n)} because ${Es(i)}` : n, d = !!a && !!o && /^[a-z]/.test(Es(o)), f = [
		u,
		r,
		d ? `${Es(a)}, or ${Es(o)}` : a,
		d ? void 0 : o,
		Ds(s)
	].filter((e) => !!e).map(Ts);
	c && f.push(`Learn more: ${c}`);
	let p = f.join(" ");
	return l ? `${l} ${p}` : p;
}
var ks = Os({
	source: "gt-react",
	severity: "Error",
	whatHappened: "Cannot read GT runtime context before it has been initialized",
	why: "the internal ConditionStore singleton is unavailable",
	fix: "Call initializeGT() (or initializeGTSPA() in SPA apps) before rendering and add a <GTProvider> at the root of your component tree."
}), { setConditionStore: As, isConditionStoreInitialized: js } = Bi(ks), { getConditionStore: Ms, setConditionStore: Ns, isConditionStoreInitialized: Ps } = Bi(ks);
function Fs(e) {
	let t = Is(e), n = Ls(e), r = Rs(e);
	if (Ps()) {
		let e = Ms();
		return e.updateLocale(t), n !== void 0 && e.updateRegion(n), e.updateEnableI18n(r), e;
	}
	let i = new Cs({
		...e,
		locale: t,
		region: n,
		enableI18n: r
	});
	return Ns(i), i;
}
function Is({ _getLocale: e, locale: t }) {
	let n = J(), r = [];
	return t && r.push(...Array.isArray(t) ? t : [t]), e && r.push(e()), r.push(...Ss(n.getLocaleCookieName())), n.resolveSupportedLocale(r);
}
function Ls({ _getRegion: e, region: t }) {
	return xs({ cookieName: J().getRegionCookieName() }) || e?.() || t;
}
function Rs({ enableI18n: e, _getEnableI18n: t }) {
	if (e !== void 0) return e;
	let n = xs({ cookieName: J().getEnableI18nCookieName() });
	return n === void 0 ? t?.() ?? !0 : n === "true";
}
function zs(e) {
	let t = Bs();
	return {
		...e,
		projectId: e.projectId || t.projectId,
		devApiKey: e.devApiKey || t.devApiKey
	};
}
function Bs() {
	return {
		projectId: Vs(() => void 0) || Hs(),
		devApiKey: vi() === "development" ? Vs(() => void 0) || Us() : void 0
	};
}
function Vs(e) {
	try {
		return Ws(e());
	} catch {
		return;
	}
}
function Hs() {
	try {
		return Ws(process.env.VITE_GT_PROJECT_ID);
	} catch {
		return;
	}
}
function Us() {
	try {
		return Ws(process.env.VITE_GT_DEV_API_KEY);
	} catch {
		return;
	}
}
function Ws(e) {
	return e || void 0;
}
function Gs(e) {
	co(zs({
		cacheExpiryTime: null,
		...e
	}));
}
function Ks(e) {
	let t = l(() => Fs(e), [
		e.locale,
		e.region,
		e.enableI18n,
		e._reload
	]), n = u(null);
	return n.current ??= new bo(), f(bs, {
		...e,
		conditionStore: t,
		i18nStore: n.current
	});
}
function qs() {
	return p("div", {
		className: "grid gap-8 md:grid-cols-2",
		children: [p("div", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [f("h2", {
				className: "mb-3 text-xl font-semibold text-foreground",
				children: f(_s, { children: "Why This Exists" })
			}), f("p", {
				className: "text-sm text-muted-foreground",
				children: f(_s, { children: "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data." })
			})]
		}), p("div", {
			className: "rounded-lg border border-border bg-card p-6",
			children: [f("h2", {
				className: "mb-3 text-xl font-semibold text-foreground",
				children: f(_s, { children: "Methodology" })
			}), f("p", {
				className: "text-sm text-muted-foreground",
				children: f(_s, { children: "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results." })
			})]
		})]
	});
}
function Js(e) {
	let t = e.trim();
	return t ? /[.!?)]$/.test(t) ? t : `${t}.` : "";
}
function Ys(e) {
	let t = e.trim(), n = t.length;
	for (; n > 0;) {
		let e = t[n - 1];
		if (e !== "." && e !== "!" && e !== "?") break;
		--n;
	}
	return t.slice(0, n);
}
function Xs(e) {
	if (!e) return "";
	let t = Array.isArray(e) ? e.join(", ") : e;
	return t.trim() ? Js(`Details: ${t}`) : "";
}
function Zs({ source: e, severity: t, whatHappened: n, reassurance: r, why: i, fix: a, wayOut: o, details: s, docsUrl: c }) {
	let l = e ? t ? `${e} ${t}:` : `${e}:` : t ? `${t}:` : "", u = i ? `${Ys(n)} because ${Ys(i)}` : n, d = !!a && !!o && /^[a-z]/.test(Ys(o)), f = [
		u,
		r,
		d ? `${Ys(a)}, or ${Ys(o)}` : a,
		d ? void 0 : o,
		Xs(s)
	].filter((e) => !!e).map(Js);
	c && f.push(`Learn more: ${c}`);
	let p = f.join(" ");
	return l ? `${l} ${p}` : p;
}
var Qs = Zs({
	source: "gt-tanstack-start",
	severity: "Error",
	whatHappened: "Cannot read GT server request state before initialization",
	why: "initializeGT() has not initialized the TanStack Start server condition store",
	fix: "Call initializeGT() from 'gt-tanstack-start' during application setup before using gtMiddleware or server APIs."
}), $s = z({
	namespace: "tanstackStart",
	key: "conditionStore",
	source: "gt-tanstack-start",
	notInitialized: () => Qs
}), $ = $s.get;
$s.set;
var ec = $s.isInitialized;
function tc(e, t = rc()) {
	let { pathname: n } = ic(e, t), r = n.match(/^\/([^/]+)(?:\/|$)/);
	if (!r) return;
	let i;
	try {
		i = decodeURIComponent(r[1]);
	} catch {
		return;
	}
	return J().determineSupportedLocale(i);
}
function nc(e, t, n = rc()) {
	let r = J(), { basepath: i, pathname: a } = ic(e, n), o = tc(a, "/") ? a.replace(/^\/[^/]+/, "") || "/" : a, s = r.resolveSupportedLocale(t);
	return s === r.getDefaultLocale() ? `${i}${o}` : `${i}/${encodeURIComponent(s)}${o === "/" ? "" : o}`;
}
function rc() {
	return "/";
}
function ic(e, t) {
	let n = `/${t.replace(/^\/+|\/+$/g, "")}`;
	return n === "/" || e === n ? {
		basepath: n === "/" ? "" : n,
		pathname: e === n ? "/" : e
	} : e.startsWith(`${n}/`) ? {
		basepath: n,
		pathname: e.slice(n.length)
	} : {
		basepath: "",
		pathname: e
	};
}
var ac = {
	path: "/",
	sameSite: "lax",
	maxAge: 31536e3
}, oc = Zs({
	source: "gt-tanstack-start",
	severity: "Warning",
	whatHappened: "No locale preference was found for the current request",
	reassurance: "GT will use the configured default locale",
	why: "neither the locale cookie nor the Accept-Language header supplied a supported locale candidate"
});
function sc(e, t, n = new URL(e.url).pathname) {
	let r = J(), i = e.headers.get("cookie"), a = [];
	if (t?.localeRouting) {
		let e = tc(n);
		e && a.push(e);
	}
	let o = H(i, r.getLocaleCookieName());
	o && a.push(o), a.push(...Ki(e.headers.get("accept-language"))), a.length === 0 && console.warn(oc);
	let s = r.resolveSupportedLocale(a, t ?? {
		defaultLocale: r.getDefaultLocale(),
		locales: r.getLocales(),
		customMapping: r.getCustomMapping()
	});
	_(r.getLocaleCookieName(), s, ac);
	let c = H(i, r.getEnableI18nCookieName());
	return {
		locale: s,
		region: H(i, r.getRegionCookieName()) || void 0,
		enableI18n: c === void 0 || c === "true"
	};
}
var cc = m().server(() => $().getLocale()).client(() => Y().getLocale());
m().server(() => $().getEnableI18n()).client(() => Y().getEnableI18n()), m().server((e) => {
	let t = $();
	return qi({
		locale: t.getLocale(),
		enableI18n: t.getEnableI18n()
	}, e);
}).client((e) => {
	let t = Y();
	return qi({
		locale: t.getLocale(),
		enableI18n: t.getEnableI18n()
	}, e);
}), m().server(() => {
	let e = $();
	return Ji({
		locale: e.getLocale(),
		enableI18n: e.getEnableI18n()
	});
}).client(() => {
	let e = Y();
	return Ji({
		locale: e.getLocale(),
		enableI18n: e.getEnableI18n()
	});
}), m().server((e) => {
	let t = $();
	return la({
		locale: t.getLocale(),
		enableI18n: t.getEnableI18n(),
		rootId: e
	});
}).client((e) => {
	let t = Y();
	return la({
		locale: t.getLocale(),
		enableI18n: t.getEnableI18n(),
		rootId: e
	});
}), m().server(lc).client(() => cc());
function lc({ defaultLocale: e, locales: t, customMapping: n }) {
	if (ec()) {
		let e = $();
		if (e.hasActiveScope()) return e.getLocale();
	}
	return sc(g(), {
		defaultLocale: e,
		locales: t,
		customMapping: n
	}).locale;
}
function uc({ defaultLocale: e, locales: t, customMapping: n }) {
	let r = J(), i = r.getLocaleCookieName(), a = [], o = H(document.cookie, i);
	return o && a.push(o), a.length === 0 && console.warn("gt-tanstack-start(client): no locales could be determined for this request"), r.resolveSupportedLocale(a, {
		defaultLocale: e,
		locales: t,
		customMapping: n
	});
}
h().server(({ request: e, pathname: t, next: n }) => $().run(e, () => n(), t));
function dc(e) {
	let t = e.localeRouting && !e._reload ? {
		...e,
		_reload: ({ locale: e }) => {
			let t = nc(window.location.pathname, e), n = new URL(window.location.href);
			n.pathname = t, window.location.assign(n.href);
		}
	} : e;
	Gs(e), Fs({
		...t,
		locale: uc(e)
	});
}
var fc = Object.assign({
	"./src/_gt/de/about.json": () => import("../../../_gt/de/about.json"),
	"./src/_gt/de/blog.json": () => import("../../../_gt/de/blog.json"),
	"./src/_gt/de/careers.json": () => import("../../../_gt/de/careers.json"),
	"./src/_gt/de/contact.json": () => import("../../../_gt/de/contact.json"),
	"./src/_gt/de/faq.json": () => import("../../../_gt/de/faq.json"),
	"./src/_gt/de/home.json": () => import("../../../_gt/de/home.json"),
	"./src/_gt/de/pricing.json": () => import("../../../_gt/de/pricing.json"),
	"./src/_gt/de/products.json": () => import("../../../_gt/de/products.json"),
	"./src/_gt/de/settings.json": () => import("../../../_gt/de/settings.json"),
	"./src/_gt/de/shared.json": () => import("../../../_gt/de/shared.json"),
	"./src/_gt/de/team.json": () => import("../../../_gt/de/team.json"),
	"./src/_gt/en/about.json": () => import("./about-xoAI9-lX.js"),
	"./src/_gt/en/blog.json": () => import("./blog-BmfQbp7u.js"),
	"./src/_gt/en/careers.json": () => import("./careers-DnQ1VKou.js"),
	"./src/_gt/en/contact.json": () => import("./contact-D9SDgpgD.js"),
	"./src/_gt/en/faq.json": () => import("./faq-BBN1FR5z.js"),
	"./src/_gt/en/home.json": () => import("./home-IpmYMlCd.js"),
	"./src/_gt/en/pricing.json": () => import("./pricing-DbTmPGq6.js"),
	"./src/_gt/en/products.json": () => import("./products-CZg1g9E-.js"),
	"./src/_gt/en/settings.json": () => import("./settings-21bAJys1.js"),
	"./src/_gt/en/shared.json": () => import("./shared-BcoMehmw.js"),
	"./src/_gt/en/team.json": () => import("./team-yyG8lBh0.js"),
	"./src/_gt/es/about.json": () => import("../../../_gt/es/about.json"),
	"./src/_gt/es/blog.json": () => import("../../../_gt/es/blog.json"),
	"./src/_gt/es/careers.json": () => import("../../../_gt/es/careers.json"),
	"./src/_gt/es/contact.json": () => import("../../../_gt/es/contact.json"),
	"./src/_gt/es/faq.json": () => import("../../../_gt/es/faq.json"),
	"./src/_gt/es/home.json": () => import("../../../_gt/es/home.json"),
	"./src/_gt/es/pricing.json": () => import("../../../_gt/es/pricing.json"),
	"./src/_gt/es/products.json": () => import("../../../_gt/es/products.json"),
	"./src/_gt/es/settings.json": () => import("../../../_gt/es/settings.json"),
	"./src/_gt/es/shared.json": () => import("../../../_gt/es/shared.json"),
	"./src/_gt/es/team.json": () => import("../../../_gt/es/team.json"),
	"./src/_gt/fr/about.json": () => import("../../../_gt/fr/about.json"),
	"./src/_gt/fr/blog.json": () => import("../../../_gt/fr/blog.json"),
	"./src/_gt/fr/careers.json": () => import("../../../_gt/fr/careers.json"),
	"./src/_gt/fr/contact.json": () => import("../../../_gt/fr/contact.json"),
	"./src/_gt/fr/faq.json": () => import("../../../_gt/fr/faq.json"),
	"./src/_gt/fr/home.json": () => import("../../../_gt/fr/home.json"),
	"./src/_gt/fr/pricing.json": () => import("../../../_gt/fr/pricing.json"),
	"./src/_gt/fr/products.json": () => import("../../../_gt/fr/products.json"),
	"./src/_gt/fr/settings.json": () => import("../../../_gt/fr/settings.json"),
	"./src/_gt/fr/shared.json": () => import("../../../_gt/fr/shared.json"),
	"./src/_gt/fr/team.json": () => import("../../../_gt/fr/team.json"),
	"./src/_gt/it/about.json": () => import("../../../_gt/it/about.json"),
	"./src/_gt/it/blog.json": () => import("../../../_gt/it/blog.json"),
	"./src/_gt/it/careers.json": () => import("../../../_gt/it/careers.json"),
	"./src/_gt/it/contact.json": () => import("../../../_gt/it/contact.json"),
	"./src/_gt/it/faq.json": () => import("../../../_gt/it/faq.json"),
	"./src/_gt/it/home.json": () => import("../../../_gt/it/home.json"),
	"./src/_gt/it/pricing.json": () => import("../../../_gt/it/pricing.json"),
	"./src/_gt/it/products.json": () => import("../../../_gt/it/products.json"),
	"./src/_gt/it/settings.json": () => import("../../../_gt/it/settings.json"),
	"./src/_gt/it/shared.json": () => import("../../../_gt/it/shared.json"),
	"./src/_gt/it/team.json": () => import("../../../_gt/it/team.json"),
	"./src/_gt/ja/about.json": () => import("../../../_gt/ja/about.json"),
	"./src/_gt/ja/blog.json": () => import("../../../_gt/ja/blog.json"),
	"./src/_gt/ja/careers.json": () => import("../../../_gt/ja/careers.json"),
	"./src/_gt/ja/contact.json": () => import("../../../_gt/ja/contact.json"),
	"./src/_gt/ja/faq.json": () => import("../../../_gt/ja/faq.json"),
	"./src/_gt/ja/home.json": () => import("../../../_gt/ja/home.json"),
	"./src/_gt/ja/pricing.json": () => import("../../../_gt/ja/pricing.json"),
	"./src/_gt/ja/products.json": () => import("../../../_gt/ja/products.json"),
	"./src/_gt/ja/settings.json": () => import("../../../_gt/ja/settings.json"),
	"./src/_gt/ja/shared.json": () => import("../../../_gt/ja/shared.json"),
	"./src/_gt/ja/team.json": () => import("../../../_gt/ja/team.json"),
	"./src/_gt/ko/about.json": () => import("../../../_gt/ko/about.json"),
	"./src/_gt/ko/blog.json": () => import("../../../_gt/ko/blog.json"),
	"./src/_gt/ko/careers.json": () => import("../../../_gt/ko/careers.json"),
	"./src/_gt/ko/contact.json": () => import("../../../_gt/ko/contact.json"),
	"./src/_gt/ko/faq.json": () => import("../../../_gt/ko/faq.json"),
	"./src/_gt/ko/home.json": () => import("../../../_gt/ko/home.json"),
	"./src/_gt/ko/pricing.json": () => import("../../../_gt/ko/pricing.json"),
	"./src/_gt/ko/products.json": () => import("../../../_gt/ko/products.json"),
	"./src/_gt/ko/settings.json": () => import("../../../_gt/ko/settings.json"),
	"./src/_gt/ko/shared.json": () => import("../../../_gt/ko/shared.json"),
	"./src/_gt/ko/team.json": () => import("../../../_gt/ko/team.json"),
	"./src/_gt/pt/about.json": () => import("../../../_gt/pt/about.json"),
	"./src/_gt/pt/blog.json": () => import("../../../_gt/pt/blog.json"),
	"./src/_gt/pt/careers.json": () => import("../../../_gt/pt/careers.json"),
	"./src/_gt/pt/contact.json": () => import("../../../_gt/pt/contact.json"),
	"./src/_gt/pt/faq.json": () => import("../../../_gt/pt/faq.json"),
	"./src/_gt/pt/home.json": () => import("../../../_gt/pt/home.json"),
	"./src/_gt/pt/pricing.json": () => import("../../../_gt/pt/pricing.json"),
	"./src/_gt/pt/products.json": () => import("../../../_gt/pt/products.json"),
	"./src/_gt/pt/settings.json": () => import("../../../_gt/pt/settings.json"),
	"./src/_gt/pt/shared.json": () => import("../../../_gt/pt/shared.json"),
	"./src/_gt/pt/team.json": () => import("../../../_gt/pt/team.json"),
	"./src/_gt/ru/about.json": () => import("../../../_gt/ru/about.json"),
	"./src/_gt/ru/blog.json": () => import("../../../_gt/ru/blog.json"),
	"./src/_gt/ru/careers.json": () => import("../../../_gt/ru/careers.json"),
	"./src/_gt/ru/contact.json": () => import("../../../_gt/ru/contact.json"),
	"./src/_gt/ru/faq.json": () => import("../../../_gt/ru/faq.json"),
	"./src/_gt/ru/home.json": () => import("../../../_gt/ru/home.json"),
	"./src/_gt/ru/pricing.json": () => import("../../../_gt/ru/pricing.json"),
	"./src/_gt/ru/products.json": () => import("../../../_gt/ru/products.json"),
	"./src/_gt/ru/settings.json": () => import("../../../_gt/ru/settings.json"),
	"./src/_gt/ru/shared.json": () => import("../../../_gt/ru/shared.json"),
	"./src/_gt/ru/team.json": () => import("../../../_gt/ru/team.json"),
	"./src/_gt/zh/about.json": () => import("../../../_gt/zh/about.json"),
	"./src/_gt/zh/blog.json": () => import("../../../_gt/zh/blog.json"),
	"./src/_gt/zh/careers.json": () => import("../../../_gt/zh/careers.json"),
	"./src/_gt/zh/contact.json": () => import("../../../_gt/zh/contact.json"),
	"./src/_gt/zh/faq.json": () => import("../../../_gt/zh/faq.json"),
	"./src/_gt/zh/home.json": () => import("../../../_gt/zh/home.json"),
	"./src/_gt/zh/pricing.json": () => import("../../../_gt/zh/pricing.json"),
	"./src/_gt/zh/products.json": () => import("../../../_gt/zh/products.json"),
	"./src/_gt/zh/settings.json": () => import("../../../_gt/zh/settings.json"),
	"./src/_gt/zh/shared.json": () => import("../../../_gt/zh/shared.json"),
	"./src/_gt/zh/team.json": () => import("../../../_gt/zh/team.json")
});
async function pc(e, t = ["shared"]) {
	let n = {};
	return await Promise.all(t.map(async (t) => {
		let r = fc[`./src/_gt/${e}/${t}.json`];
		if (!r) {
			console.warn(`Translation missing for ${e}/${t}`);
			return;
		}
		let i = await r();
		n = {
			...n,
			...i.default || i
		};
	})), n;
}
dc({
	...v,
	loadTranslations: pc
});
function mc({ children: e }) {
	return f(Ks, {
		locale: "en",
		children: e
	});
}
function hc() {
	return f(mc, { children: f(qs, {}) });
}
export { hc as default };
var e = "Methodology", t = {
	"Why This Exists": "Why This Exists",
	"Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.": "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
	Methodology: e,
	"The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.": "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.",
	"About This Benchmark": "About This Benchmark",
	"This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.": "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.",
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
	"What We Measure": "What We Measure"
};
export { e as Methodology, t as default };
var e = "Blog", t = "Benchmark", n = "Tutorial", r = "Analysis", i = "Meta", a = {
	Blog: e,
	"Insights, tutorials, and analysis from the i18n community.": "Insights, tutorials, and analysis from the i18n community.",
	"Comparing i18n Libraries in 2026: A Deep Dive": "Comparing i18n Libraries in 2026: A Deep Dive",
	"March 15, 2026": "March 15, 2026",
	"We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.": "We tested 12 different internationalization libraries across performance, bundle size, and DX. Here are the surprising results.",
	Benchmark: t,
	"How to Reduce Your i18n Bundle by 60%": "How to Reduce Your i18n Bundle by 60%",
	"March 8, 2026": "March 8, 2026",
	"Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.": "Practical strategies for optimizing translation bundles including lazy loading, code splitting, and compile-time optimizations.",
	Tutorial: n,
	"The State of Internationalization in React": "The State of Internationalization in React",
	"February 28, 2026": "February 28, 2026",
	"An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.": "An overview of the current i18n ecosystem in React, covering trends, emerging patterns, and community preferences.",
	Analysis: r,
	"Migrating from react-i18next to Lingui": "Migrating from react-i18next to Lingui",
	"February 15, 2026": "February 15, 2026",
	"A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.": "A step-by-step guide on migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
	"Server Components and i18n: What Changes?": "Server Components and i18n: What Changes?",
	"February 1, 2026": "February 1, 2026",
	"React Server Components introduce new patterns for internationalization. We explore the implications and best practices.": "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
	"Benchmark Methodology: How We Test": "Benchmark Methodology: How We Test",
	"January 20, 2026": "January 20, 2026",
	"A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.": "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
	Meta: i,
	"Read More →": "Read More →"
};
export { r as Analysis, t as Benchmark, e as Blog, i as Meta, n as Tutorial, a as default };
var e = "Careers", t = "Remote", n = "Engineering", r = "Documentation", i = "Community", a = {
	"Remote-first": "Remote-first",
	"Work from anywhere in the world": "Work from anywhere in the world",
	"Competitive pay": "Competitive pay",
	"Top-of-market compensation": "Top-of-market compensation",
	"Open source time": "Open source time",
	"20% time for OSS contributions": "20% time for OSS contributions",
	Careers: e,
	"Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.": "Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning.",
	"Senior Frontend Engineer": "Senior Frontend Engineer",
	Remote: t,
	"Full-time": "Full-time",
	Engineering: n,
	"Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
	"Backend Engineer": "Backend Engineer",
	"Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.": "Design and scale our cloud benchmarking infrastructure handling thousands of automated runs daily.",
	"Technical Writer": "Technical Writer",
	"Part-time": "Part-time",
	Documentation: r,
	"Create comprehensive guides, API references, and tutorials for our benchmarking platform.": "Create comprehensive guides, API references, and tutorials for our benchmarking platform.",
	"DevRel Engineer": "DevRel Engineer",
	"San Francisco / Remote": "San Francisco / Remote",
	Community: i,
	"Engage with the i18n community through talks, workshops, blog posts, and open source contributions.": "Engage with the i18n community through talks, workshops, blog posts, and open source contributions.",
	"QA Engineer": "QA Engineer",
	"Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.": "Ensure the accuracy and reliability of benchmark results through rigorous testing and validation.",
	"Open Positions": "Open Positions",
	"Apply Now": "Apply Now"
};
export { e as Careers, i as Community, r as Documentation, n as Engineering, t as Remote, a as default };
var e = "Name", t = "Email", n = "Topic", r = "Contribution", i = "Other", a = "Message", o = {
	Name: e,
	Email: t,
	Topic: n,
	"Bug Report": "Bug Report",
	"New Benchmark Idea": "New Benchmark Idea",
	"Methodology Question": "Methodology Question",
	Contribution: r,
	Other: i,
	Message: a,
	"Send Message": "Send Message",
	"Get in Touch": "Get in Touch"
};
export { r as Contribution, t as Email, a as Message, e as Name, i as Other, n as Topic, o as default };
var e = {
	"What is i18n Benchmark?": "What is i18n Benchmark?",
	"i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.": "i18n Benchmark is an open-source benchmarking suite that measures and compares the performance, bundle size, and developer experience of internationalization libraries for JavaScript and React applications.",
	"How are benchmarks conducted?": "How are benchmarks conducted?",
	"We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.": "We run standardized tests in isolated environments using consistent hardware. Each benchmark is repeated multiple times to ensure statistical significance. All test configurations are publicly available in our GitHub repository.",
	"Which libraries are currently supported?": "Which libraries are currently supported?",
	"We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.": "We support react-i18next, react-intl (FormatJS), Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, and Tolgee.",
	"Can I submit my own benchmarks?": "Can I submit my own benchmarks?",
	"Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.": "Yes! Community benchmark submissions are welcome. Fork our repository, add your benchmark following our contribution guide, and submit a pull request. Our team will review and merge qualifying submissions.",
	"How often are benchmarks updated?": "How often are benchmarks updated?",
	"We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.": "We re-run all benchmarks weekly against the latest stable versions of each library. Major version releases trigger an immediate re-benchmark cycle.",
	"Is the data reliable?": "Is the data reliable?",
	"We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.": "We follow rigorous statistical methodology including warm-up runs, outlier detection, and confidence intervals. All raw data is published alongside our analysis for full transparency.",
	"Do you offer consulting services?": "Do you offer consulting services?",
	"Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.": "Yes, our Enterprise plan includes consulting hours for teams evaluating i18n solutions. We can provide tailored recommendations based on your specific use case, scale, and constraints.",
	"How can I contribute?": "How can I contribute?",
	"There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details.": "There are many ways to contribute: submit benchmarks, improve documentation, report bugs, suggest new metrics, or sponsor the project. Visit our GitHub repository for more details."
};
export { e as default };
var e = "Yes", t = "Manual", n = "Library", r = {
	"i18n Benchmark": "i18n Benchmark",
	"A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.": "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
	"View Results": "View Results",
	Yes: "Yes",
	Manual: t,
	"Built-in": "Built-in",
	"Sample Results": "Sample Results",
	Library: n,
	"Bundle Size": "Bundle Size",
	"Lookup Time": "Lookup Time",
	"Lazy Loading": "Lazy Loading",
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
	"The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.": "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
	"Rendering & Hydration": "Rendering & Hydration",
	"Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).": "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
	"Dynamic Loading": "Dynamic Loading",
	"Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.": "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
};
export { n as Library, t as Manual, e as Yes, r as default };
var e = "Starter", t = "$0", n = "forever", r = "Pro", i = "$29", a = "Enterprise", o = "Custom", s = {
	"Simple, Transparent Pricing": "Simple, Transparent Pricing",
	"Choose the plan that fits your team. No hidden fees.": "Choose the plan that fits your team. No hidden fees.",
	Starter: e,
	$0: "$0",
	forever: n,
	"5 benchmark runs/day": "5 benchmark runs/day",
	"3 libraries": "3 libraries",
	"Community support": "Community support",
	"Public results": "Public results",
	Pro: "Pro",
	$29: "$29",
	"/month": "/month",
	"Unlimited runs": "Unlimited runs",
	"All libraries": "All libraries",
	"Priority support": "Priority support",
	"Private results": "Private results",
	"CI integration": "CI integration",
	"Historical data": "Historical data",
	Enterprise: a,
	Custom: o,
	"Everything in Pro": "Everything in Pro",
	"On-premise option": "On-premise option",
	"SSO & SAML": "SSO & SAML",
	"Dedicated account manager": "Dedicated account manager",
	"Custom SLAs": "Custom SLAs",
	"Audit logs": "Audit logs",
	"Training sessions": "Training sessions",
	"Contact Sales": "Contact Sales",
	"Get Started": "Get Started"
};
export { t as $0, i as $29, o as Custom, a as Enterprise, r as Pro, e as Starter, s as default, n as forever };
var e = "Free", t = "Products", n = {
	"Benchmark CLI": "Benchmark CLI",
	"Run benchmarks locally from your terminal. Supports custom configurations and CI integration.": "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
	Free: e,
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
	Products: t,
	"Tools and services to streamline your internationalization workflow.": "Tools and services to streamline your internationalization workflow."
};
export { e as Free, t as Products, n as default };
var e = "Copy", t = "Preferences", n = "Profile", r = "Email", i = "Cancel", a = "Settings", o = {
	"API Access": "API Access",
	"API Key": "API Key",
	Copy: e,
	"Use this key to access the benchmarking API programmatically.": "Use this key to access the benchmarking API programmatically.",
	Preferences: t,
	"Email Notifications": "Email Notifications",
	"Receive weekly benchmark reports": "Receive weekly benchmark reports",
	"Dark Mode": "Dark Mode",
	"Use dark color scheme": "Use dark color scheme",
	"Default Language": "Default Language",
	"English (en)": "English (en)",
	"French (fr)": "French (fr)",
	"German (de)": "German (de)",
	"Spanish (es)": "Spanish (es)",
	"Japanese (ja)": "Japanese (ja)",
	"Chinese Simplified (zh-CN)": "Chinese Simplified (zh-CN)",
	"Arabic (ar)": "Arabic (ar)",
	Profile: n,
	"Display Name": "Display Name",
	Email: r,
	Cancel: i,
	"Save Changes": "Save Changes",
	Settings: a,
	"Manage your account preferences and configuration.": "Manage your account preferences and configuration."
};
export { i as Cancel, e as Copy, r as Email, t as Preferences, n as Profile, a as Settings, o as default };
var e = "Products", t = "Pricing", n = "Team", r = "Blog", i = "Careers", a = "FAQ", o = "Contact", s = "Settings", c = "Home", l = "Methodology", u = "GitHub", d = "Contributing", f = "Resources", p = {
	Products: e,
	Pricing: t,
	Team: n,
	Blog: r,
	Careers: i,
	FAQ: "FAQ",
	Contact: o,
	Settings: s,
	Home: c,
	Methodology: l,
	"Mock Pages": "Mock Pages",
	GitHub: u,
	Contributing: d,
	"i18n Benchmark": "i18n Benchmark",
	"An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
	Resources: f,
	"i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.": "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
	"⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.": "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service."
};
export { r as Blog, i as Careers, o as Contact, d as Contributing, a as FAQ, u as GitHub, c as Home, l as Methodology, t as Pricing, e as Products, f as Resources, s as Settings, n as Team, p as default };
var e = {
	"Sarah Chen": "Sarah Chen",
	"Founder & Lead Engineer": "Founder & Lead Engineer",
	"Former Google engineer with 10 years of experience building internationalization systems at scale.": "Former Google engineer with 10 years of experience building internationalization systems at scale.",
	"Marcus Weber": "Marcus Weber",
	"Performance Engineer": "Performance Engineer",
	"Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.": "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
	"Aisha Patel": "Aisha Patel",
	"Developer Advocate": "Developer Advocate",
	"Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.": "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
	"Tomás Rodríguez": "Tomás Rodríguez",
	"Full-Stack Developer": "Full-Stack Developer",
	"Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.": "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
	"Yuki Tanaka": "Yuki Tanaka",
	"Data Analyst": "Data Analyst",
	"Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.": "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
	"Elena Kowalski": "Elena Kowalski",
	"Community Manager": "Community Manager",
	"Manages community contributions, partnerships, and events. Background in open source governance.": "Manages community contributions, partnerships, and events. Background in open source governance.",
	"Our Team": "Our Team",
	"Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.": "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
};
export { e as default };
