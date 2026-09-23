import * as e from "react";
import t, { Children as n, Fragment as r, Suspense as i, cloneElement as a, createContext as o, createElement as s, isValidElement as c, useCallback as l, useContext as u, useEffect as d, useMemo as f, useRef as p, useState as m, useSyncExternalStore as h } from "react";
import { jsx as g } from "react/jsx-runtime";
import { jsxDEV as _ } from "react/jsx-dev-runtime";
import { createIsomorphicFn as v } from "@tanstack/react-start";
import { getCookie as y, getRequestHeader as b } from "@tanstack/react-start/server";
var x = Object.defineProperty, S = Object.getOwnPropertyDescriptor, C = Object.getOwnPropertyNames, ee = Object.prototype.hasOwnProperty, te = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, w = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), T = (e, t) => {
	let n = {};
	for (var r in e) x(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || x(n, Symbol.toStringTag, { value: "Module" }), n;
}, ne = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = C(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !ee.call(e, s) && s !== n && x(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = S(t, s)) || r.enumerable
	});
	return e;
}, re = (e) => ee.call(e, "module.exports") ? e["module.exports"] : ne(x({}, "__esModule", { value: !0 }), e), ie = class extends Error {
	constructor(e, t, n) {
		super(e), this.name = "ApiError", this.code = t, this.message = n;
	}
}, ae = 6e4;
function oe(e) {
	let t = e.trim();
	return t ? /[.!?)]$/.test(t) ? t : `${t}.` : "";
}
function se(e) {
	let t = e.trim(), n = t.length;
	for (; n > 0;) {
		let e = t[n - 1];
		if (e !== "." && e !== "!" && e !== "?") break;
		--n;
	}
	return t.slice(0, n);
}
function ce(e) {
	if (!e) return "";
	let t = Array.isArray(e) ? e.join(", ") : e;
	return t.trim() ? oe(`Details: ${t}`) : "";
}
function E({ source: e, severity: t, whatHappened: n, reassurance: r, why: i, fix: a, wayOut: o, details: s, docsUrl: c }) {
	let l = e ? t ? `${e} ${t}:` : `${e}:` : t ? `${t}:` : "", u = i ? `${se(n)} because ${se(i)}` : n, d = !!a && !!o && /^[a-z]/.test(se(o)), f = [
		u,
		r,
		d ? `${se(a)}, or ${se(o)}` : a,
		d ? void 0 : o,
		ce(s)
	].filter((e) => !!e).map(oe);
	c && f.push(`Learn more: ${c}`);
	let p = f.join(" ");
	return l ? `${l} ${p}` : p;
}
function le(e) {
	return typeof e == "object" && !!e && "error" in e && typeof e.error == "string";
}
function ue(e) {
	return le(e.error) || typeof e.error == "string";
}
function de(e) {
	if (e.data !== void 0) return e.data;
	if (e.response) {
		let t = le(e.error) ? e.error.error : typeof e.error == "string" ? e.error : e.response.statusText;
		throw new ie(t, e.response.status, t);
	}
	throw e.error;
}
var fe = (e) => e.client.post({
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
}), pe = 3, me = 500, he = 6e4, ge = /* @__PURE__ */ new Set([
	"GET",
	"HEAD",
	"OPTIONS",
	"PUT",
	"DELETE"
]), _e = 6e4;
function ve({ fetch: e = globalThis.fetch, timeoutMs: t = _e } = {}) {
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
var ye = (e) => new Promise((t) => setTimeout(t, e));
function be(e) {
	if (!e) return;
	let t = Number(e.split(",")[0].split(";")[0].trim());
	return Number.isFinite(t) && t >= 0 ? t * 1e3 : void 0;
}
function xe(e) {
	let t = be(e);
	if (t !== void 0) return t;
	if (!e) return;
	let n = Date.parse(e);
	return Number.isNaN(n) ? void 0 : Math.max(n - Date.now(), 0);
}
function Se(e, t, n) {
	return e?.status === 429 ? xe(e.headers.get("Retry-After")) ?? be(e.headers.get("RateLimit-Reset")) ?? he : me * (n === "linear" ? t + 1 : 2 ** t);
}
function Ce({ fetch: e = globalThis.fetch, retryPolicy: t = "exponential" } = {}) {
	return async (n, r) => {
		let i = new Request(n, r), a = t === "none" ? 0 : pe, o = ge.has(i.method);
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
			r?.body?.cancel(), await ye(Se(r, n, t));
		}
		throw Error("Max retries exceeded");
	};
}
var we = { bodySerializer: (e) => JSON.stringify(e, (e, t) => typeof t == "bigint" ? t.toString() : t) }, Te = ({ onRequest: e, onSseError: t, onSseEvent: n, responseTransformer: r, responseValidator: i, sseDefaultRetryDelay: a, sseMaxRetryAttempts: o, sseMaxRetryDelay: s, sseSleepFn: c, url: l, ...u }) => {
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
}, Ee = (e) => {
	switch (e) {
		case "label": return ".";
		case "matrix": return ";";
		case "simple": return ",";
		default: return "&";
	}
}, De = (e) => {
	switch (e) {
		case "form": return ",";
		case "pipeDelimited": return "|";
		case "spaceDelimited": return "%20";
		default: return ",";
	}
}, Oe = (e) => {
	switch (e) {
		case "label": return ".";
		case "matrix": return ";";
		case "simple": return ",";
		default: return "&";
	}
}, ke = ({ allowReserved: e, explode: t, name: n, style: r, value: i }) => {
	if (!t) {
		let t = (e ? i : i.map((e) => encodeURIComponent(e))).join(De(r));
		switch (r) {
			case "label": return `.${t}`;
			case "matrix": return `;${n}=${t}`;
			case "simple": return t;
			default: return `${n}=${t}`;
		}
	}
	let a = Ee(r), o = i.map((t) => r === "label" || r === "simple" ? e ? t : encodeURIComponent(t) : Ae({
		allowReserved: e,
		name: n,
		value: t
	})).join(a);
	return r === "label" || r === "matrix" ? a + o : o;
}, Ae = ({ allowReserved: e, name: t, value: n }) => {
	if (n == null) return "";
	if (typeof n == "object") throw Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
	return `${t}=${e ? n : encodeURIComponent(n)}`;
}, je = ({ allowReserved: e, explode: t, name: n, style: r, value: i, valueOnly: a }) => {
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
	let o = Oe(r), s = Object.entries(i).map(([t, i]) => Ae({
		allowReserved: e,
		name: r === "deepObject" ? `${n}[${t}]` : t,
		value: i
	})).join(o);
	return r === "label" || r === "matrix" ? o + s : s;
}, Me = /\{[^{}]+\}/g, Ne = ({ path: e, url: t }) => {
	let n = t, r = t.match(Me);
	if (r) for (let t of r) {
		let r = !1, i = t.substring(1, t.length - 1), a = "simple";
		i.endsWith("*") && (r = !0, i = i.substring(0, i.length - 1)), i.startsWith(".") ? (i = i.substring(1), a = "label") : i.startsWith(";") && (i = i.substring(1), a = "matrix");
		let o = e[i];
		if (o == null) continue;
		if (Array.isArray(o)) {
			n = n.replace(t, ke({
				explode: r,
				name: i,
				style: a,
				value: o
			}));
			continue;
		}
		if (typeof o == "object") {
			n = n.replace(t, je({
				explode: r,
				name: i,
				style: a,
				value: o,
				valueOnly: !0
			}));
			continue;
		}
		if (a === "matrix") {
			n = n.replace(t, `;${Ae({
				name: i,
				value: o
			})}`);
			continue;
		}
		let s = encodeURIComponent(a === "label" ? `.${o}` : o);
		n = n.replace(t, s);
	}
	return n;
}, Pe = ({ baseUrl: e, path: t, query: n, querySerializer: r, url: i }) => {
	let a = i.startsWith("/") ? i : `/${i}`, o = (e ?? "") + a;
	t && (o = Ne({
		path: t,
		url: o
	}));
	let s = n ? r(n) : "";
	return s.startsWith("?") && (s = s.substring(1)), s && (o += `?${s}`), o;
};
function Fe(e) {
	let t = e.body !== void 0;
	if (t && e.bodySerializer) return "serializedBody" in e ? e.serializedBody !== void 0 && e.serializedBody !== "" ? e.serializedBody : null : e.body === "" ? null : e.body;
	if (t) return e.body;
}
var Ie = async (e, t) => {
	let n = typeof t == "function" ? await t(e) : t;
	if (n) return e.scheme === "bearer" ? `Bearer ${n}` : e.scheme === "basic" ? `Basic ${btoa(n)}` : n;
}, Le = ({ parameters: e = {}, ...t } = {}) => (n) => {
	let r = [];
	if (n && typeof n == "object") for (let i in n) {
		let a = n[i];
		if (a == null) continue;
		let o = e[i] || t;
		if (Array.isArray(a)) {
			let e = ke({
				allowReserved: o.allowReserved,
				explode: !0,
				name: i,
				style: "form",
				value: a,
				...o.array
			});
			e && r.push(e);
		} else if (typeof a == "object") {
			let e = je({
				allowReserved: o.allowReserved,
				explode: !0,
				name: i,
				style: "deepObject",
				value: a,
				...o.object
			});
			e && r.push(e);
		} else {
			let e = Ae({
				allowReserved: o.allowReserved,
				name: i,
				value: a
			});
			e && r.push(e);
		}
	}
	return r.join("&");
}, Re = (e) => {
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
}, ze = (e, t) => t ? !!(e.headers.has(t) || e.query?.[t] || e.headers.get("Cookie")?.includes(`${t}=`)) : !1, Be = async ({ security: e, ...t }) => {
	for (let n of e) {
		if (ze(t, n.name)) continue;
		let e = await Ie(n, t.auth);
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
}, Ve = (e) => Pe({
	baseUrl: e.baseUrl,
	path: e.path,
	query: e.query,
	querySerializer: typeof e.querySerializer == "function" ? e.querySerializer : Le(e.querySerializer),
	url: e.url
}), He = (e, t) => {
	let n = {
		...e,
		...t
	};
	return n.baseUrl?.endsWith("/") && (n.baseUrl = n.baseUrl.substring(0, n.baseUrl.length - 1)), n.headers = We(e.headers, t.headers), n;
}, Ue = (e) => {
	let t = [];
	return e.forEach((e, n) => {
		t.push([n, e]);
	}), t;
}, We = (...e) => {
	let t = new Headers();
	for (let n of e) {
		if (!n) continue;
		let e = n instanceof Headers ? Ue(n) : Object.entries(n);
		for (let [n, r] of e) if (r === null) t.delete(n);
		else if (Array.isArray(r)) for (let e of r) t.append(n, e);
		else r !== void 0 && t.set(n, typeof r == "object" ? JSON.stringify(r) : r);
	}
	return t;
}, Ge = class {
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
}, Ke = () => ({
	error: new Ge(),
	request: new Ge(),
	response: new Ge()
}), qe = Le({
	allowReserved: !1,
	array: {
		explode: !0,
		style: "form"
	},
	object: {
		explode: !0,
		style: "deepObject"
	}
}), Je = { "Content-Type": "application/json" }, Ye = (e = {}) => ({
	...we,
	headers: Je,
	parseAs: "auto",
	querySerializer: qe,
	...e
}), Xe = (e = {}) => {
	let t = He(Ye(), e), n = () => ({ ...t }), r = (e) => (t = He(t, e), n()), i = Ke(), a = async (e) => {
		let n = {
			...t,
			...e,
			fetch: e.fetch ?? t.fetch ?? globalThis.fetch,
			headers: We(t.headers, e.headers),
			serializedBody: void 0
		};
		return n.security && await Be({
			...n,
			security: n.security
		}), n.requestValidator && await n.requestValidator(n), n.body !== void 0 && n.bodySerializer && (n.serializedBody = n.bodySerializer(n.body)), (n.body === void 0 || n.serializedBody === "") && n.headers.delete("Content-Type"), {
			opts: n,
			url: Ve(n)
		};
	}, o = async (e) => {
		let { opts: t, url: n } = await a(e), r = {
			redirect: "follow",
			...t,
			body: Fe(t)
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
			let e = (t.parseAs === "auto" ? Re(c.headers.get("Content-Type")) : t.parseAs) ?? "json";
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
		return Te({
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
		buildUrl: Ve,
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
function Ze(e) {
	let t = new Headers({ "gt-api-version": e.apiVersion ?? "2026-03-06.v1" });
	return e.apiKey && t.set("Authorization", `Bearer ${e.apiKey}`), e.projectId && t.set("gt-project-id", e.projectId), Xe({
		baseUrl: e.baseUrl,
		fetch: Ce({
			fetch: ve({
				fetch: e.fetch,
				timeoutMs: e.timeoutMs
			}),
			retryPolicy: e.retryPolicy
		}),
		headers: t
	});
}
var D = {
	literal: 0,
	argument: 1,
	number: 2,
	date: 3,
	time: 4,
	select: 5,
	plural: 6,
	pound: 7,
	tag: 8
}, Qe = {
	number: 0,
	dateTime: 1
}, $e = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/, et = /^@+(\+|#+)?[rs]?$/, tt = /^(?:(?:\+|#+)[rs]?|[rs])$/, nt = /(\*)(0+)|(#+)(0+)|(0+)/g, rt = /[\t-\r \x85\u200E\u200F\u2028\u2029]+/u, it = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F|[abB]{1,5}|[hHkK]{1,2}|w{1,2}|W|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g, at = {
	floor: "floor",
	ceiling: "ceil",
	down: "trunc",
	up: "expand",
	"half-even": "halfEven",
	"half-down": "halfTrunc",
	"half-up": "halfExpand"
}, ot = {
	h: "h12",
	H: "h23",
	K: "h11",
	k: "h24"
};
function st(e) {
	let t = e.split(rt).filter(Boolean);
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
function ct(e) {
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
				lt(n), t.style = "unit", t.unit = e.replace(/^(.*?)-/, "");
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
				for (let e of n.options) ut(t, e);
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
				if (lt(n), n.options.length > 1) throw RangeError("integer-width stems only accept a single optional option");
				ft(t, e);
				continue;
		}
		if (n.stem.slice(0, 14) === "rounding-mode-") {
			let e = at[n.stem.slice(14)];
			typeof e == "string" && (t.roundingMode = e);
			continue;
		}
		if (/^0+$/u.test(n.stem)) {
			t.minimumIntegerDigits = n.stem.length;
			continue;
		}
		if (!pt(t, n)) {
			if (et.test(n.stem)) {
				Object.assign(t, mt(n.stem));
				continue;
			}
			if (tt.test(n.stem)) throw SyntaxError("Significant precision must start with @.");
			ut(t, n.stem) || dt(t, n.stem);
		}
	}
	return t;
}
function lt(e) {
	if (!e.options[0]) throw SyntaxError(`${e.stem} requires an option.`);
}
function ut(e, t) {
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
function dt(e, t) {
	if (t[0] !== "E") return !1;
	let n = /^(E{1,2})(\+!|\+\?)?(0+)$/u.exec(t);
	if (!n) throw SyntaxError("Malformed concise eng/scientific notation");
	return e.notation = n[1] === "EE" ? "engineering" : "scientific", n[2] && ut(e, n[2]), e.minimumIntegerDigits = n[3].length, !0;
}
function ft(e, t) {
	t.replace(nt, (t, n, r, i, a, o) => {
		if (n && r) e.minimumIntegerDigits = r.length;
		else if (i && a) throw Error("We currently do not support maximum integer digits");
		else if (o) throw Error("We currently do not support exact integer digits");
		return "";
	});
}
function pt(e, t) {
	let n = $e.exec(t.stem);
	if (!n) return !1;
	if (t.options.length > 1) throw SyntaxError("Fraction precision accepts at most one option.");
	let [, r, i, a, o, s] = n;
	return i === "*" ? e.minimumFractionDigits = r.length : a ? e.maximumFractionDigits = a.length : o && s ? (e.minimumFractionDigits = o.length, e.maximumFractionDigits = o.length + s.length) : (e.minimumFractionDigits = r.length, e.maximumFractionDigits = r.length), t.options[0] === "w" ? e.trailingZeroDisplay = "stripIfInteger" : t.options[0] && Object.assign(e, mt(t.options[0])), !0;
}
function mt(e) {
	let t = {};
	if (e.endsWith("r") && (t.roundingPriority = "morePrecision"), e.endsWith("s") && (t.roundingPriority = "lessPrecision"), tt.test(e)) throw SyntaxError("Significant precision must start with @.");
	if (!et.test(e)) return t;
	let n = e.replace(/[rs]$/u, ""), r = n.match(/^@+/u)?.[0] ?? "", i = n.slice(r.length);
	return r && (t.minimumSignificantDigits = r.length), i === "+" || (i[0] === "#" ? t.maximumSignificantDigits = r.length + i.length : r && (t.maximumSignificantDigits = r.length)), t;
}
function ht(e) {
	let t = {};
	for (let [n] of e.matchAll(it)) {
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
				if (e < 4) throw vt(n, "weekday");
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
				t.hourCycle = ot[n[0]], t.hour = e === 2 ? "2-digit" : "numeric";
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
			default: throw vt(n, "date/time");
		}
	}
	return t;
}
function gt(e, t) {
	if (!t || !/[jJ]/u.test(e)) return e;
	let n = _t(t), r = "";
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
function _t(e) {
	let t = e;
	switch (t.hourCycle ?? t.hourCycles?.[0] ?? new Intl.DateTimeFormat(e.toString(), { hour: "numeric" }).resolvedOptions().hourCycle) {
		case "h11": return "K";
		case "h12": return "h";
		case "h24": return "k";
		default: return "H";
	}
}
function vt(e, t) {
	return /* @__PURE__ */ RangeError(`Unsupported ${t} skeleton field: ${e}.`);
}
var yt = /^[A-Za-z]$/u, bt = /^[-.0-9_A-Za-z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\u{EFFFF}]$/u;
function xt(e) {
	return yt.test(e ?? "");
}
function St(e) {
	return bt.test(e);
}
var Ct = /[\t-\r \x85\u200E\u200F\u2028\u2029]/u, wt = /[\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\x21-\x2F\x3A-\x40\x5B-\x5E\x60\x7B-\x7E\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E-\uFD3F\uFE45-\uFE46]/u, Tt = class {
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
				this.index += 1, r.push(this.withLocation({ type: D.pound }, e, this.index));
			} else if (i === "<" && !this.options.ignoreTag && this.peek() === "/") {
				if (n) break;
				this.fail("UNMATCHED_CLOSING_TAG");
			} else i === "<" && !this.options.ignoreTag && xt(this.peek()) ? r.push(this.parseTag(t)) : r.push(this.parseLiteral(e, t));
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
			if (i === "{" || i === "}" && e || i === "#" && t || i === "<" && !this.options.ignoreTag && (xt(this.peek()) || this.peek() === "/")) break;
			r += i, this.index += i.length;
		}
		return this.withLocation({
			type: D.literal,
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
			type: D.literal,
			value: `<${n}/>`
		}, t, this.index);
		this.consume(">") || this.fail("INVALID_TAG", t);
		let r = this.parseMessage(!0, e, !0), i = this.index;
		this.consume("</") || this.fail("UNCLOSED_TAG", t);
		let a = this.index;
		return xt(this.current()) || this.failAt("INVALID_TAG", i, this.index), this.readTagName() !== n && this.fail("UNMATCHED_CLOSING_TAG", a), this.skipSpace(), this.consume(">") || this.failAt("INVALID_TAG", i, this.index), this.withLocation({
			type: D.tag,
			value: n,
			children: r
		}, t, this.index);
	}
	readTagName() {
		let e = this.index;
		for (xt(this.current()) || this.fail("INVALID_TAG", e), this.index += 1; !this.atEnd() && St(this.current());) this.index += this.current().length;
		return this.message.slice(e, this.index);
	}
	parseArgument(e) {
		let t = this.index;
		this.index += 1, this.skipSpace(), this.atEnd() && this.fail("EXPECT_ARGUMENT_CLOSING_BRACE", t), this.current() === "}" && (this.index += 1, this.fail("EMPTY_ARGUMENT", t));
		let n = this.readIdentifier();
		if (n || this.fail("MALFORMED_ARGUMENT", t), this.skipSpace(), this.consume("}")) return this.withLocation({
			type: D.argument,
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
						e = st(t);
					} catch {
						this.failAt("INVALID_NUMBER_SKELETON", a, o);
					}
					r = {
						type: Qe.number,
						tokens: e,
						...s ? { location: s } : {},
						parsedOptions: this.options.shouldParseSkeletons ? ct(e) : {}
					};
				} else {
					t || this.failAt("EXPECT_DATE_TIME_SKELETON", e, this.index);
					let n = gt(t, this.options.locale);
					r = {
						type: Qe.dateTime,
						pattern: n,
						...s ? { location: s } : {},
						parsedOptions: this.options.shouldParseSkeletons ? ht(n) : {}
					};
				}
			} else r = i;
		}
		let s = n === "number" ? D.number : n === "date" ? D.date : D.time;
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
			type: D.select,
			value: t,
			options: c
		}, e, this.index) : this.withLocation({
			type: D.plural,
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
		for (; !this.atEnd() && !wt.test(this.current());) this.index += this.current().length;
		return this.message.slice(e, this.index);
	}
	skipSpace() {
		for (; !this.atEnd() && Ct.test(this.current());) this.index += this.current().length;
	}
	consume(e) {
		return this.message.slice(this.index, this.index + e.length) === e && (this.index += e.length, !0);
	}
	current() {
		return Dt(this.message, this.index);
	}
	peek() {
		let e = this.current();
		return Dt(this.message, this.index + e.length);
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
		let t = this.positions ??= Et(this.message);
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
function Et(e) {
	let t = new Uint32Array(e.length + 1), n = new Uint32Array(e.length + 1), r = 0, i = 1, a = 1;
	for (; r < e.length;) {
		let o = Dt(e, r);
		t[r] = i, n[r] = a, o.length === 2 && (t[r + 1] = i, n[r + 1] = a + 1), r += o.length, o === "\n" ? (i += 1, a = 1) : a += 1;
	}
	return t[r] = i, n[r] = a, [t, n];
}
function Dt(e, t) {
	if (t >= e.length) return "\0";
	let n = e.charCodeAt(t);
	if (n < 55296 || n > 56319 || t + 1 >= e.length) return e.charAt(t);
	let r = e.charCodeAt(t + 1);
	return r >= 56320 && r <= 57343 ? e.slice(t, t + 2) : e.charAt(t);
}
function Ot(e, t = {}) {
	return new Tt(e, {
		shouldParseSkeletons: !0,
		requiresOtherClause: !0,
		...t
	}).parse();
}
var kt = {
	integer: { maximumFractionDigits: 0 },
	currency: { style: "currency" },
	percent: { style: "percent" }
}, At = {
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
}, jt = {
	hour: "numeric",
	minute: "numeric",
	second: "numeric",
	timeZoneName: "short"
}, Mt = {
	short: {
		hour: "numeric",
		minute: "numeric"
	},
	medium: {
		hour: "numeric",
		minute: "numeric",
		second: "numeric"
	},
	long: jt,
	full: jt
};
function Nt(e, t = "en", n = {}) {
	let r = Pt(Ot(e, { locale: Gt(t) }), {
		message: e,
		locales: t,
		variables: n
	});
	return r.length === 1 ? r[0] : r.length ? r : "";
}
function Pt(e, t, n) {
	let r = [], i = (e) => {
		let t = r[r.length - 1];
		typeof t == "string" && typeof e == "string" ? r[r.length - 1] = t + e : r.push(e);
	};
	for (let r of e) switch (r.type) {
		case D.literal:
			i(r.value);
			break;
		case D.pound:
			n !== void 0 && i(Lt(t).format(n));
			break;
		case D.argument: {
			let e = Ft(t.variables, r.value);
			i(typeof e == "string" || typeof e == "number" ? String(e) : e || "");
			break;
		}
		case D.number: {
			let e = Ft(t.variables, r.value), { scale: n, ...a } = typeof r.style == "string" ? kt[r.style] ?? {} : r.style?.type === Qe.number ? r.style.parsedOptions : {}, o = It(e, n);
			i(Lt(t, a).format(o));
			break;
		}
		case D.date:
		case D.time: {
			let e = Ft(t.variables, r.value), n = r.type === D.date ? At : Mt;
			i(Rt(t, typeof r.style == "string" ? n[r.style] : r.style?.type === Qe.dateTime ? r.style.parsedOptions : r.type === D.time ? Mt.medium : void 0).format(e));
			break;
		}
		case D.select: {
			let e = String(Ft(t.variables, r.value)), n = Ut(r.options, e) ?? r.options.other;
			if (!n) throw Wt(r.value, e, r.options);
			Pt(n.value, t).forEach(i);
			break;
		}
		case D.plural: {
			let e = Ft(t.variables, r.value), n = `=${String(e)}`, a = Ut(r.options, n), o = typeof e == "bigint" ? e : Number(e), s = typeof o == "bigint" ? o - BigInt(r.offset) : o - r.offset;
			if (!a && Ht(r.options)) {
				let e = zt(t, r.pluralType ?? "cardinal").select(Vt(s));
				a = Ut(r.options, e);
			}
			if (a ??= r.options.other, !a) throw Wt(r.value, e, r.options);
			Pt(a.value, t, s).forEach(i);
			break;
		}
		case D.tag: {
			let e = Ft(t.variables, r.value);
			if (typeof e != "function") throw TypeError(`The ICU tag variable "${r.value}" must be a function.`);
			let a = e(Pt(r.children, t, n));
			Array.isArray(a) ? a.forEach(i) : i(a);
			break;
		}
	}
	return r;
}
function Ft(e, t) {
	if (!(t in e)) throw Error(`The ICU message variable "${t}" was not provided.`);
	return e[t];
}
function It(e, t) {
	if (!t) return e;
	if (typeof e == "bigint") {
		if (!Number.isInteger(t)) throw RangeError(`Cannot apply fractional scale ${t} to a bigint value.`);
		return e * BigInt(t);
	}
	return Number(e) * t;
}
function Lt(e, t = {}) {
	return Bt(e.numberFormats ??= /* @__PURE__ */ new Map(), JSON.stringify(t), () => new Intl.NumberFormat(e.locales, t));
}
function Rt(e, t) {
	return Bt(e.dateTimeFormats ??= /* @__PURE__ */ new Map(), t ? JSON.stringify(t) : "", () => new Intl.DateTimeFormat(e.locales, t));
}
function zt(e, t) {
	if (typeof Intl.PluralRules != "function") {
		let t = /* @__PURE__ */ Error("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n");
		throw t.code = "MISSING_INTL_API", t.originalMessage = e.message, t;
	}
	return Bt(e.pluralRules ??= /* @__PURE__ */ new Map(), t, () => new Intl.PluralRules(e.locales, { type: t }));
}
function Bt(e, t, n) {
	let r = e.get(t);
	if (r) return r;
	let i = n();
	return e.set(t, i), i;
}
function Vt(e) {
	let t = Number(e);
	if (typeof e == "bigint" && Math.abs(t) > 9007199254740991) throw RangeError(`Cannot select a plural category for bigint ${e} outside the safe integer range.`);
	return t;
}
function Ht(e) {
	return Object.keys(e).some((e) => e !== "other" && e[0] !== "=");
}
function Ut(e, t) {
	return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0;
}
function Wt(e, t, n) {
	return /* @__PURE__ */ RangeError(`The ICU variable "${e}" value ${JSON.stringify(String(t))} did not match any of: ${Object.keys(n).join(", ")}.`);
}
function Gt(e) {
	if (Intl.Locale === void 0) return;
	let t = Intl.NumberFormat.supportedLocalesOf(e)[0], n = typeof e == "string" ? e : e[0];
	return new Intl.Locale(t ?? n);
}
function Kt({ icuString: e, shouldVisit: t, visitor: n, options: { recurseIntoVisited: r = !0, ...i } }) {
	let a = Ot(e, i);
	return o(a), a;
	function o(e) {
		e.map(s);
	}
	function s(e) {
		let i = !1;
		t(e) && (n(e), i = !0), (!i || r) && (e.type === D.select || e.type === D.plural ? Object.values(e.options).map((e) => e.value).map(o) : e.type === D.tag && o(e.children));
	}
}
var qt = "_gt_";
RegExp(`^${qt}\\d+$`);
var Jt = RegExp(`^${qt}$`);
function Yt(e) {
	return e.type === D.select && Jt.test(e.value) && !!e.options.other && (e.options.other.value.length === 0 || e.options.other.value.length > 0 && e.options.other.value[0]?.type === D.literal);
}
function Xt(e) {
	let t = e;
	if (t && typeof t == "object" && typeof t.k == "string") {
		let e = Object.keys(t);
		if (e.length === 1 || e.length === 2 && (typeof t.i == "number" || typeof t.v == "string") || e.length === 3 && typeof t.v == "string" && typeof t.i == "number") return !0;
	}
	return !1;
}
var Zt = (e) => `generaltranslation Formatting Error: Invalid cutoff style: ${e}.`, Qt = "DEFAULT_TERMINATOR_KEY", $t = {
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
		[Qt]: {
			terminator: "…",
			separator: void 0
		}
	},
	none: { [Qt]: {
		terminator: void 0,
		separator: void 0
	} }
}, en = class e {
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
		if (!$t[r]) throw Error(Zt(r));
		let i = n.maxChars === void 0 ? void 0 : $t[r][new Intl.Locale(this.locale).language] || $t[r].DEFAULT_TERMINATOR_KEY, a = n.terminator ?? i?.terminator, o = a == null ? void 0 : n.separator ?? i?.separator;
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
}, tn = {
	Collator: Intl.Collator,
	DateTimeFormat: Intl.DateTimeFormat,
	DisplayNames: Intl.DisplayNames,
	ListFormat: Intl.ListFormat,
	Locale: Intl.Locale,
	NumberFormat: Intl.NumberFormat,
	PluralRules: Intl.PluralRules,
	RelativeTimeFormat: Intl.RelativeTimeFormat,
	Segmenter: Intl.Segmenter,
	CutoffFormat: en
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
		return o === void 0 && (o = new tn[e](...t), a[i] = o), o;
	}
}();
function nn(e) {
	return O.get("PluralRules", e);
}
var rn = [
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
function an(e) {
	return rn.includes(e);
}
function on(e, t = rn, n = ["en"]) {
	let r = nn(n).select(e), i = Math.abs(e);
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
var sn = {
	variable: "v",
	number: "n",
	datetime: "d",
	currency: "c",
	"relative-time": "rt"
};
function cn(e) {
	return sn[e];
}
function ln(e) {
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
	Kt({
		icuString: e,
		shouldVisit: Yt,
		visitor: n,
		options: {
			recurseIntoVisited: !1,
			captureLocation: !0
		}
	});
	let r = [], i = 0;
	for (let n = 0; n < t.length; n++) {
		let { start: a, end: o, otherStart: s, otherEnd: c } = t[n];
		r.push(e.slice(i, a)), r.push(e.slice(a, a + qt.length + 1)), r.push(String(n + 1)), r.push(e.slice(a + qt.length + 1, s)), r.push("{}"), r.push(e.slice(c, o)), i = o;
	}
	return r.push(e.slice(i, e.length)), r.join("");
}
RegExp(`${qt}\\d+`);
var un = {
	pl: "placeholder",
	ti: "title",
	alt: "alt",
	arl: "aria-label",
	arb: "aria-labelledby",
	ard: "aria-describedby"
};
function dn(e, t = "en", n = {}) {
	return Nt(e, t, n)?.toString() ?? "";
}
function fn({ value: e, locales: t = ["en"], options: n = {} }) {
	return O.get("NumberFormat", t, {
		numberingSystem: "latn",
		...n
	}).format(e);
}
function pn({ value: e, locales: t = ["en"], options: n = {} }) {
	return O.get("DateTimeFormat", t, {
		calendar: "gregory",
		numberingSystem: "latn",
		...n
	}).format(e);
}
function mn({ value: e, locales: t = ["en"], currency: n = "USD", options: r = {} }) {
	return O.get("NumberFormat", t, {
		style: "currency",
		currency: n,
		numberingSystem: "latn",
		...r
	}).format(e);
}
function hn({ value: e, locales: t = ["en"], options: n = {} }) {
	return O.get("ListFormat", t, {
		type: "conjunction",
		style: "long",
		...n
	}).format(e.map(String));
}
function gn({ value: e, locales: t = ["en"], options: n = {} }) {
	let r = O.get("ListFormat", t, {
		type: "conjunction",
		style: "long",
		...n
	}).formatToParts(e.map(() => "1")), i = 0;
	return r.map((t) => t.type === "element" ? e[i++] : t.value);
}
function _n(e, t) {
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
function vn({ value: e, unit: t, locales: n = ["en"], options: r = {} }) {
	return O.get("RelativeTimeFormat", n, {
		style: "long",
		numeric: "auto",
		...r
	}).format(e, t);
}
function yn(e) {
	try {
		return O.get("Locale", e).language;
	} catch {
		return;
	}
}
function bn(...e) {
	try {
		let t = e.flat().map((e) => O.get("Locale", e).language);
		return t.every((e) => e === t[0]);
	} catch (e) {
		return console.error(e), !1;
	}
}
function xn(e) {
	return typeof e == "object" && !!e;
}
var Sn = (e, t, n) => {
	let r = e?.[t];
	if (r) return typeof r == "string" ? n === "name" ? r : void 0 : r[n];
}, Cn = (e, t) => {
	let n = e?.[t];
	return xn(n) && typeof n.code == "string" ? n.code : void 0;
}, wn = /* @__PURE__ */ new Set([
	"Cham",
	"Jamo",
	"Kawi",
	"Lisu",
	"Toto",
	"Thai"
]), Tn = (e) => e >= "qaa" && e <= "qtz", En = (e, t) => {
	e = Cn(t, e) || e;
	try {
		let { language: t, region: n, script: r } = O.get("Locale", e), i = 1 + Number(!!n) + Number(!!r);
		return !(e.split("-").length !== i || O.get("DisplayNames", ["en"], { type: "language" }).of(t) === t && !Tn(t) || n && O.get("DisplayNames", ["en"], { type: "region" }).of(n) === n || r && O.get("DisplayNames", ["en"], { type: "script" }).of(r) === r && !wn.has(r));
	} catch {
		return !1;
	}
}, k = (e) => {
	try {
		return Intl.getCanonicalLocales(e)[0];
	} catch {
		return e;
	}
};
function Dn(e, t) {
	let n = !0, r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Map();
	for (let a of e) {
		if (!En(a, t)) {
			n = !1;
			continue;
		}
		let e = yn(a);
		if (e === void 0) continue;
		r.add(e);
		let o = i.get(e);
		o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(e, o)), o.add(k(a));
	}
	return {
		allValid: n,
		languages: r,
		byLanguage: i
	};
}
function On(...e) {
	try {
		let t = e.flat().map((e) => O.get("Locale", k(e))), [n] = t, r = new Set(t.map(({ region: e }) => e).filter(Boolean)), i = new Set(t.map(({ script: e }) => e).filter(Boolean));
		return t.every(({ language: e }) => e === n?.language) && r.size <= 1 && i.size <= 1;
	} catch (e) {
		return console.error(e), !1;
	}
}
function kn(e, t, n, r) {
	if (n && !n.allValid || !En(e, r) || !En(t, r) || On(e, t)) return !1;
	if (!n) return !0;
	let i = yn(t);
	return i !== void 0 && n.languages.has(i);
}
function An(e, t, n, r) {
	return kn(e, t, n ? Dn(n, r) : void 0, r);
}
function jn(e) {
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
		let t = En(e) ? k(e) : e, n = t.split("-");
		return {
			languageCode: n[0] || t,
			regionCode: n.length > 2 ? n[2] : n[1] || "",
			scriptCode: n[3] || "",
			minimizedCode: t
		};
	}
}
function Mn(e, t) {
	if (t.has(e)) return e;
	let { languageCode: n, regionCode: r, scriptCode: i, minimizedCode: a } = jn(e), o = `${n}-${r}`;
	if (t.has(o)) return o;
	let s = `${n}-${i}`;
	if (t.has(s)) return s;
	if (t.has(a)) return a;
}
function Nn(e, t, n) {
	let r = Array.isArray(e) ? e : [e];
	for (let e of r) {
		if (!En(e, n)) continue;
		let r = k(e), i = yn(r);
		if (i === void 0) continue;
		let a = t.byLanguage.get(i);
		if (a === void 0) continue;
		let o = Mn(r, a) || Mn(i, a);
		if (o) return o;
	}
}
function Pn(e, t, n) {
	return Nn(e, Dn(t, n), n);
}
function Fn(e, t) {
	let n = Cn(t, e);
	return n && En(n) ? n : e;
}
function In(e, t) {
	let n = e;
	e = Fn(e, t);
	try {
		let r = k(e), i = O.get("Locale", r), { language: a, region: o } = i;
		if (t) for (let i of [
			n,
			e,
			r,
			a
		]) {
			let e = Sn(t, i, "emoji");
			if (e) return e;
		}
		let s = o && Gn(o);
		if (s) return s;
		let c = i.maximize();
		return Bn[c.language] || Wn(c.region || "");
	} catch {
		return zn;
	}
}
var Ln = "🌍", Rn = "🌏", zn = Ln, Bn = {
	ca: Ln,
	eu: Ln,
	ku: Ln,
	bo: Rn,
	ug: Rn,
	gd: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
	cy: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
	gv: "🇮🇲",
	grc: "🏺"
}, Vn = {
	EU: "🇪🇺",
	419: "🌎"
}, Hn = /* @__PURE__ */ new Set(/* @__PURE__ */ "AF.AX.AL.DZ.AS.AD.AO.AI.AQ.AG.AR.AM.AW.AU.AT.AZ.BS.BH.BD.BB.BY.BE.BZ.BJ.BM.BT.BO.BQ.BA.BW.BV.BR.IO.BN.BG.BF.BI.CV.KH.CM.CA.KY.CF.TD.CL.CN.CX.CC.CO.KM.CD.CG.CK.CR.CI.HR.CU.CW.CY.CZ.DK.DJ.DM.DO.EC.EG.SV.GQ.ER.EE.SZ.ET.FK.FO.FJ.FI.FR.GF.PF.TF.GA.GM.GE.DE.GH.GI.GR.GL.GD.GP.GU.GT.GG.GN.GW.GY.HT.HM.VA.HN.HK.HU.IS.IN.ID.IR.IQ.IE.IM.IL.IT.JM.JP.JE.JO.KZ.KE.KI.KP.KR.KW.KG.LA.LV.LB.LS.LR.LY.LI.LT.LU.MO.MG.MW.MY.MV.ML.MT.MH.MQ.MR.MU.YT.MX.FM.MD.MC.MN.ME.MS.MA.MZ.MM.NA.NR.NP.NL.NC.NZ.NI.NE.NG.NU.NF.MK.MP.NO.OM.PK.PW.PS.PA.PG.PY.PE.PH.PN.PL.PT.PR.QA.RE.RO.RU.RW.BL.SH.KN.LC.MF.PM.VC.WS.SM.ST.SA.SN.RS.SC.SL.SG.SX.SK.SI.SB.SO.ZA.GS.SS.ES.LK.SD.SR.SJ.SE.CH.SY.TW.TJ.TZ.TH.TL.TG.TK.TO.TT.TN.TR.TM.TC.TV.UG.UA.AE.GB.US.UM.UY.UZ.VU.VE.VN.VG.VI.WF.EH.YE.ZM.ZW".split(".")), Un = 127397;
function Wn(e) {
	return Gn(e) || "🌍";
}
function Gn(e) {
	let t = e.toUpperCase(), n = Vn[t];
	if (n) return n;
	if (Hn.has(t)) return String.fromCodePoint(t.charCodeAt(0) + Un, t.charCodeAt(1) + Un);
}
function Kn(e, t) {
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
function qn(e, t = "en", n) {
	let r = e;
	e = Fn(e, n), t ||= "en";
	try {
		let i = k(e), a = O.get("Locale", e), o = a.language, s = Kn([
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
		], g = O.get("DisplayNames", m, { type: "language" }), _ = O.get("DisplayNames", h, { type: "language" }), v = s?.name, y = s?.nativeName || s?.name, b = v || g.of(e) || e, x = y || _.of(e) || e, S = s?.maximizedName || v || g.of(u) || e, C = s?.nativeMaximizedName || y || _.of(u) || e, ee = s?.minimizedName || v || g.of(p) || e, te = s?.nativeMinimizedName || y || _.of(p) || e, w = s?.languageName || v || g.of(o) || e, T = s?.nativeLanguageName || y || _.of(o) || e, ne = s?.nameWithRegionCode || (c ? `${w} (${c})` : b), re = s?.nativeNameWithRegionCode || (c ? `${T} (${c})` : x) || ne, ie = O.get("DisplayNames", m, { type: "region" }), ae = O.get("DisplayNames", h, { type: "region" }), oe = s?.regionName || (d ? ie.of(d) : "") || "", se = s?.nativeRegionName || (d ? ae.of(d) : "") || "", ce = O.get("DisplayNames", m, { type: "script" }), E = O.get("DisplayNames", h, { type: "script" });
		return {
			code: i,
			name: b,
			nativeName: x,
			maximizedCode: u,
			maximizedName: S,
			nativeMaximizedName: C,
			minimizedCode: p,
			minimizedName: ee,
			nativeMinimizedName: te,
			languageCode: o,
			languageName: w,
			nativeLanguageName: T,
			nameWithRegionCode: ne,
			nativeNameWithRegionCode: re,
			regionCode: d,
			regionName: oe,
			nativeRegionName: se,
			scriptCode: f,
			scriptName: s?.scriptName || (f ? ce.of(f) : "") || "",
			nativeScriptName: s?.nativeScriptName || (f ? E.of(f) : "") || "",
			emoji: s?.emoji || In(i, n)
		};
	} catch {
		let t = En(e) ? k(e) : e, r = t.split("-"), i = r[0] || t, a = r.length > 2 ? r[2] : r[1] || "", o = r[3] || "", s = Kn([t, i], n);
		t = s?.code || t;
		let c = s?.name || t, l = s?.nativeName || c, u = s?.maximizedCode || t, d = s?.maximizedName || c, f = s?.nativeMaximizedName || l, p = s?.minimizedCode || t, m = s?.minimizedName || c, h = s?.nativeMinimizedName || l;
		i = s?.languageCode || i;
		let g = s?.languageName || c, _ = s?.nativeLanguageName || l;
		a = s?.regionCode || a;
		let v = s?.regionName || "", y = s?.nativeRegionName || "";
		o = s?.scriptCode || o;
		let b = s?.scriptName || "", x = s?.nativeScriptName || "", S = s?.nameWithRegionCode || (v ? `${g} (${v})` : c), C = s?.nativeNameWithRegionCode || (y ? `${_} (${y})` : l), ee = s?.emoji || "🌍";
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
			nameWithRegionCode: S,
			nativeNameWithRegionCode: C,
			regionCode: a,
			regionName: v,
			nativeRegionName: y,
			scriptCode: o,
			scriptName: b,
			nativeScriptName: x,
			emoji: ee
		};
	}
}
function Jn(e, t = "en", n) {
	let r = e;
	e = Fn(e, n), t ||= "en";
	try {
		let i = k(e);
		if (n) for (let t of [
			r,
			e,
			i,
			O.get("Locale", i).language
		]) {
			let e = Sn(n, t, "name");
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
function Yn(e) {
	try {
		let t = Qn(O.get("Locale", e));
		if (t) return t;
	} catch {}
	let { scriptCode: t, languageCode: n } = qn(e);
	return t ? Xn.has(t.toLowerCase()) ? "rtl" : "ltr" : n && Zn.has(n.toLowerCase()) ? "rtl" : "ltr";
}
var Xn = /* @__PURE__ */ new Set([
	"arab",
	"adlm",
	"hebr",
	"nkoo",
	"rohg",
	"samr",
	"syrc",
	"thaa",
	"yezi"
]), Zn = /* @__PURE__ */ new Set([
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
function Qn(e) {
	let t = "textInfo" in e && typeof e.textInfo == "object" && e.textInfo !== null && "direction" in e.textInfo ? e.textInfo.direction : void 0;
	return t === "rtl" || t === "ltr" ? t : void 0;
}
function $n(e, t) {
	try {
		let { language: n, region: r, script: i } = O.get("Locale", k(e)), { language: a, region: o, script: s } = O.get("Locale", k(t));
		return !(n !== a || r && r !== o || i && i !== s);
	} catch (e) {
		return console.error(e), !1;
	}
}
function er(e, t) {
	return t ? Object.keys(t).find((n) => Cn(t, n) === e) ?? e : e;
}
var tr = class {
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
			if (r.locale !== n || r.canonicalLocale !== this.resolveCanonicalLocale(n) || e.canonicalMappingCodes[t] !== Cn(this.customMapping, r.canonicalLocale)) return !1;
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
			canonicalMappingCodes: t.map(({ canonicalLocale: e }) => Cn(this.customMapping, e)),
			approved: Dn(t.map(({ canonicalLocale: e }) => e), this.customMapping)
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
		return fn({
			value: e,
			locales: this.getFormattingLocales(t, r),
			options: i
		});
	}
	formatDateTime(e, t, n = {}) {
		let { locales: r, ...i } = n;
		return pn({
			value: e,
			locales: this.getFormattingLocales(t, r),
			options: i
		});
	}
	formatCurrency(e, t, n, r = {}) {
		let { locales: i, ...a } = r;
		return mn({
			value: e,
			currency: t,
			locales: this.getFormattingLocales(n, i),
			options: a
		});
	}
	formatRelativeTime(e, t, n, r = {}) {
		let { locales: i, ...a } = r;
		return vn({
			value: e,
			unit: t,
			locales: this.getFormattingLocales(n, i),
			options: a
		});
	}
	formatRelativeTimeFromDate(e, t, n = {}) {
		let { locales: r, baseDate: i, ...a } = n, { value: o, unit: s } = _n(e, i ?? /* @__PURE__ */ new Date());
		return vn({
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
		return a === "STRING" ? e : dn(e, this.getFormattingLocales(t, r), i);
	}
	formatList(e, t, n = {}) {
		let { locales: r, ...i } = n;
		return hn({
			value: e,
			locales: this.getFormattingLocales(t, r),
			options: i
		});
	}
	formatListToParts(e, t, n = {}) {
		let { locales: r, ...i } = n;
		return gn({
			value: e,
			locales: this.getFormattingLocales(t, r),
			options: i
		});
	}
	getLocaleName(e) {
		return Jn(e, this.defaultLocale, this.customMapping);
	}
	getLocaleEmoji(e) {
		return In(e, this.customMapping);
	}
	getLocaleProperties(e) {
		return qn(e, this.defaultLocale, this.customMapping);
	}
	requiresTranslation(e, t = this.defaultLocale, n = this.locales.length ? this.locales : void 0) {
		let r = n ? n === this.locales ? this.getResolutionScope().approved : Dn(n.map((e) => this.resolveCanonicalLocale(e)), this.customMapping) : void 0;
		return kn(this.resolveCanonicalLocale(t), this.resolveCanonicalLocale(e), r, this.customMapping);
	}
	determineLocale(e, t = this.locales) {
		let { approvedLocalePairs: n, approved: r } = t === this.locales ? this.getResolutionScope() : this.buildResolutionScope(t), i = Nn(Array.isArray(e) ? e.map((e) => this.resolveCanonicalLocale(e)) : this.resolveCanonicalLocale(e), r, this.customMapping);
		if (i) return n.find(({ canonicalLocale: e }) => e === i)?.locale ?? this.resolveAliasLocale(i);
	}
	getLocaleDirection(e) {
		return Yn(this.resolveCanonicalLocale(e));
	}
	isValidLocale(e) {
		return En(e, this.customMapping);
	}
	resolveCanonicalLocale(e) {
		return Fn(e, this.customMapping);
	}
	resolveAliasLocale(e) {
		return er(e, this.customMapping);
	}
	standardizeLocale(e) {
		return k(e);
	}
	isSameDialect(...e) {
		return On(...e.map((e) => Array.isArray(e) ? e.map((e) => this.resolveCanonicalLocale(e)) : this.resolveCanonicalLocale(e)));
	}
	isSameLanguage(...e) {
		return bn(...e.map((e) => Array.isArray(e) ? e.map((e) => this.resolveCanonicalLocale(e)) : this.resolveCanonicalLocale(e)));
	}
	isSupersetLocale(e, t) {
		return $n(this.resolveCanonicalLocale(e), this.resolveCanonicalLocale(t));
	}
};
function nr(e, t = "en", n) {
	t ||= "en";
	let r = e, i = zn;
	try {
		r = O.get("DisplayNames", [t, "en"], { type: "region" }).of(e) || e, i = Wn(e);
	} catch {}
	return {
		code: e,
		name: r,
		emoji: i,
		...n?.[e]
	};
}
function rr(e, t) {
	return En(e, t);
}
function ir(e, t) {
	return Fn(e, t);
}
function ar(e) {
	return k(e);
}
function or(e, t, n, r) {
	return An(e, t, n, r);
}
function sr(e, t = [], n = void 0) {
	return Pn(e, t, n);
}
function cr(e, t) {
	return er(e, t);
}
function lr(e) {
	return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in e && e.BYTES_PER_ELEMENT === 1;
}
function ur(e, t, n = "") {
	let r = lr(e), i = e?.length, a = t !== void 0;
	if (!r || a && i !== t) {
		let o = n && `"${n}" `, s = a ? ` of length ${t}` : "", c = r ? `length=${i}` : `type=${typeof e}`, l = o + "expected Uint8Array" + s + ", got " + c;
		throw r ? RangeError(l) : TypeError(l);
	}
	return e;
}
function dr(e, t = !0) {
	if (e.destroyed) throw Error("Hash instance has been destroyed");
	if (t && e.finished) throw Error("Hash#digest() has already been called");
}
function fr(e, t) {
	ur(e, void 0, "digestInto() output");
	let n = t.outputLen;
	if (e.length < n) throw RangeError("\"digestInto() output\" expected to be of length >=" + n);
}
function pr(...e) {
	for (let t = 0; t < e.length; t++) e[t].fill(0);
}
function mr(e) {
	return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function hr(e, t) {
	return e << 32 - t | e >>> t;
}
var gr = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", _r = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function vr(e) {
	if (ur(e), gr) return e.toHex();
	let t = "";
	for (let n = 0; n < e.length; n++) t += _r[e[n]];
	return t;
}
function yr(e) {
	if (typeof e != "string") throw TypeError("string expected");
	return new Uint8Array(new TextEncoder().encode(e));
}
function br(e, t = {}) {
	let n = (t, n) => e(n).update(t).digest(), r = e(void 0);
	return n.outputLen = r.outputLen, n.blockLen = r.blockLen, n.canXOF = r.canXOF, n.create = (t) => e(t), Object.assign(n, t), Object.freeze(n);
}
var xr = (e) => ({ oid: Uint8Array.from([
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
function Sr(e, t, n) {
	return e & t ^ ~e & n;
}
function Cr(e, t, n) {
	return e & t ^ e & n ^ t & n;
}
var wr = class {
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
		this.blockLen = e, this.outputLen = t, this.padOffset = n, this.isLE = r, this.buffer = new Uint8Array(e), this.view = mr(this.buffer);
	}
	update(e) {
		dr(this), ur(e);
		let { view: t, buffer: n, blockLen: r } = this, i = e.length;
		for (let a = 0; a < i;) {
			let o = Math.min(r - this.pos, i - a);
			if (o === r) {
				let t = mr(e);
				for (; r <= i - a; a += r) this.process(t, a);
				continue;
			}
			n.set(e.subarray(a, a + o), this.pos), this.pos += o, a += o, this.pos === r && (this.process(t, 0), this.pos = 0);
		}
		return this.length += e.length, this.roundClean(), this;
	}
	digestInto(e) {
		dr(this), fr(e, this), this.finished = !0;
		let { buffer: t, view: n, blockLen: r, isLE: i } = this, { pos: a } = this;
		t[a++] = 128, pr(this.buffer.subarray(a)), this.padOffset > r - a && (this.process(n, 0), a = 0);
		for (let e = a; e < r; e++) t[e] = 0;
		n.setBigUint64(r - 8, BigInt(this.length * 8), i), this.process(n, 0);
		let o = mr(e), s = this.outputLen;
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
}, Tr = Uint32Array.from([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]), Er = Uint32Array.from([
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
]), Dr = /* @__PURE__ */ new Uint32Array(64), Or = class extends wr {
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
		for (let n = 0; n < 16; n++, t += 4) Dr[n] = e.getUint32(t, !1);
		for (let e = 16; e < 64; e++) {
			let t = Dr[e - 15], n = Dr[e - 2], r = hr(t, 7) ^ hr(t, 18) ^ t >>> 3, i = hr(n, 17) ^ hr(n, 19) ^ n >>> 10;
			Dr[e] = i + Dr[e - 7] + r + Dr[e - 16] | 0;
		}
		let { A: n, B: r, C: i, D: a, E: o, F: s, G: c, H: l } = this;
		for (let e = 0; e < 64; e++) {
			let t = hr(o, 6) ^ hr(o, 11) ^ hr(o, 25), u = l + t + Sr(o, s, c) + Er[e] + Dr[e] | 0, d = (hr(n, 2) ^ hr(n, 13) ^ hr(n, 22)) + Cr(n, r, i) | 0;
			l = c, c = s, s = o, o = a + u | 0, a = i, i = r, r = n, n = u + d | 0;
		}
		n = n + this.A | 0, r = r + this.B | 0, i = i + this.C | 0, a = a + this.D | 0, o = o + this.E | 0, s = s + this.F | 0, c = c + this.G | 0, l = l + this.H | 0, this.set(n, r, i, a, o, s, c, l);
	}
	roundClean() {
		pr(Dr);
	}
	destroy() {
		this.destroyed = !0, this.set(0, 0, 0, 0, 0, 0, 0, 0), pr(this.buffer);
	}
}, kr = class extends Or {
	A = Tr[0] | 0;
	B = Tr[1] | 0;
	C = Tr[2] | 0;
	D = Tr[3] | 0;
	E = Tr[4] | 0;
	F = Tr[5] | 0;
	G = Tr[6] | 0;
	H = Tr[7] | 0;
	constructor() {
		super(32);
	}
}, Ar = br(() => new kr(), xr(1));
function jr(e) {
	if (e === void 0) return;
	if (e === null) return "null";
	if (typeof e == "number") return isFinite(e) ? "" + e : "null";
	if (typeof e != "object") return JSON.stringify(e);
	if (Array.isArray(e)) {
		let t = "[";
		for (let n = 0; n < e.length; n++) n && (t += ","), t += jr(e[n]) || "null";
		return t + "]";
	}
	let t = Object.keys(e).sort(), n = "";
	for (let r of t) {
		let t = jr(e[r]);
		t && (n && (n += ","), n += JSON.stringify(r) + ":" + t);
	}
	return "{" + n + "}";
}
function Mr(e) {
	return jr(e) ?? "";
}
function Nr(e) {
	return vr(Ar(yr(e))).slice(0, 16);
}
function Pr({ source: e, context: t, id: n, maxChars: r, requiresReview: i, dataFormat: a }, o = Nr) {
	let s;
	return s = a === "JSX" ? Ir(e) : e, o(Mr({
		source: s,
		...n && { id: n },
		...t && { context: t },
		...r != null && { maxChars: Math.abs(r) },
		...i === !0 && { requiresReview: !0 },
		...a && { dataFormat: a }
	}));
}
var Fr = (e) => {
	if (e && typeof e == "object") {
		let t = {};
		if ("c" in e && e.c && (t.c = Ir(e.c)), "d" in e) {
			let n = e?.d;
			n?.b && (t.b = Object.fromEntries(Object.entries(n.b).map(([e, t]) => [e, Ir(t)]))), n?.t && (t.t = n.t);
		}
		return Xt(e) ? {
			k: e.k,
			...e.v && { v: e.v }
		} : t;
	}
	return e;
};
function Ir(e) {
	return Array.isArray(e) ? e.map(Fr) : Fr(e);
}
var Lr = "GT", Rr = (e) => E({
	source: Lr,
	severity: "Error",
	whatHappened: `Translation request timed out after ${e}ms`,
	fix: "Try again, or increase the request timeout if the source content is large"
}), zr = (e, t, n) => E({
	source: Lr,
	severity: "Error",
	whatHappened: `The translation API returned ${e} ${t}`,
	fix: "Check the request configuration and try again",
	details: n
});
E({
	source: Lr,
	severity: "Error",
	whatHappened: "Authentication failed",
	fix: "Check that your API key and project ID are correct"
});
var Br = (e) => E({
	source: Lr,
	severity: "Error",
	whatHappened: `Cannot call \`${e}\` without a specified locale`,
	fix: `Pass a locale to \`${e}\` or specify targetLocale in the GT constructor`
}), Vr = (e) => E({
	source: Lr,
	severity: "Error",
	whatHappened: `Cannot call \`${e}\` without a specified locale`,
	fix: `Pass a locale to \`${e}\` or specify sourceLocale in the GT constructor`
}), Hr = (e) => E({
	source: Lr,
	severity: "Error",
	whatHappened: `Cannot call \`${e}\` without a specified project ID`,
	fix: `Pass a project ID to \`${e}\` or specify projectId in the GT constructor`
}), Ur = (e) => E({
	source: Lr,
	severity: "Error",
	whatHappened: `Cannot call \`${e}\` without a specified API key`,
	fix: `Pass an API key to \`${e}\` or specify apiKey in the GT constructor`
}), Wr = (e) => E({
	source: Lr,
	severity: "Error",
	whatHappened: `Locale "${e}" is not valid`,
	fix: "Use a valid BCP 47 locale code or add a custom mapping"
}), Gr = (e) => E({
	source: Lr,
	severity: "Error",
	whatHappened: `These locales are not valid: ${e.join(", ")}`,
	fix: "Use valid BCP 47 locale codes or add custom mappings"
}), Kr = {
	debug: 0,
	info: 1,
	warn: 2,
	error: 3,
	off: 4
}, qr = {
	debug: "\x1B[36m",
	info: "\x1B[32m",
	warn: "\x1B[33m",
	error: "\x1B[31m",
	off: ""
}, Jr = "\x1B[0m";
function Yr() {
	if (typeof process < "u" && process.env?._GT_LOG_LEVEL) {
		let e = process.env._GT_LOG_LEVEL.toLowerCase();
		if (e in Kr) return e;
	}
	return "warn";
}
var Xr = class {
	constructor(e) {
		this.config = e;
	}
	handle(e) {
		let t = [];
		this.config.includeTimestamp && t.push(`[${e.timestamp.toISOString()}]`);
		let n = qr[e.level], r = `[${e.level.toUpperCase()}]`;
		t.push(`${n}${r}${Jr}`), this.config.prefix && t.push(`[${this.config.prefix}]`), this.config.includeContext && e.context && t.push(`[${e.context}]`), t.push(e.message), e.metadata && Object.keys(e.metadata).length > 0 && t.push(`\n  Metadata: ${JSON.stringify(e.metadata, null, 2)}`);
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
}, Zr = class {
	constructor(e = {}) {
		this.config = {
			level: Yr(),
			includeTimestamp: !0,
			includeContext: !0,
			enableConsole: !0,
			handlers: [],
			...e
		}, this.handlers = [...this.config.handlers || []], this.config.enableConsole && this.handlers.push(new Xr(this.config));
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
		return Kr[e] >= Kr[this.config.level];
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
		return new Qr(this, e);
	}
	getConfig() {
		return { ...this.config };
	}
}, Qr = class e {
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
}, $r = new Zr({
	level: Yr(),
	includeTimestamp: !0,
	includeContext: !0,
	prefix: "GT"
});
$r.child("fetch");
var ei = $r.child("GT instance");
async function ti(e, t, n) {
	let r = new AbortController(), i = [r.signal];
	t.signal && i.push(t.signal), e instanceof Request && i.push(e.signal);
	let a = AbortSignal.any(i);
	n ||= ae;
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
async function ni(e) {
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
		throw new ie(zr(e.status, e.statusText, t), e.status, t);
	}
}
async function ri(e, t, n, r) {
	let i = Array.isArray(e), a = i ? [] : void 0, o = {}, s = i ? e.map((e) => [void 0, e]) : Object.entries(e);
	for (let [e, t] of s) {
		let { source: n, metadata: r } = typeof t == "string" ? { source: t } : t, i = e ?? r?.hash ?? Pr({
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
	let c = Ze({
		apiKey: n.apiKey,
		baseUrl: n.baseUrl || "https://api.gtx.dev",
		fetch: (e, t) => ti(e, t ?? {}, r),
		projectId: n.projectId,
		retryPolicy: "none",
		timeoutMs: !1
	}), l = await fe({
		body: {
			requests: o,
			targetLocale: t.targetLocale,
			sourceLocale: t.sourceLocale,
			metadata: t
		},
		client: c
	});
	if (l.data === void 0 && l.response && !ue(l)) throw await ni(l.response), l.error;
	let u = de(l);
	return a ? a.map((e) => u[e] ?? {
		success: !1,
		error: "No translation returned",
		code: 500
	}) : u;
}
var ii = class {
	get localeConfig() {
		return this._localeConfig;
	}
	constructor(e = {}) {
		typeof process < "u" && (this.apiKey ||= process.env?.GT_API_KEY, this.devApiKey ||= process.env?.GT_DEV_API_KEY, this.projectId ||= process.env?.GT_PROJECT_ID), this.setConfig(e);
	}
	setConfig({ apiKey: e, devApiKey: t, sourceLocale: n, targetLocale: r, locales: i, projectId: a, customMapping: o, baseUrl: s }) {
		if (e && (this.apiKey = e), t && (this.devApiKey = t), a && (this.projectId = a), n && (this.sourceLocale = ar(n), !rr(this.sourceLocale, o))) throw Error(Wr(this.sourceLocale));
		if (r && (this.targetLocale = ar(r), !rr(this.targetLocale, o))) throw Error(Wr(this.targetLocale));
		if (i) {
			let e = [], t = [];
			if (i.forEach((n) => {
				let r = ar(n);
				rr(r) ? e.push(r) : t.push(n);
			}), t.length > 0) throw Error(Gr(t));
			this.locales = e;
		}
		s && (this.baseUrl = s), o && (this.customMapping = o, this.reverseCustomMapping = Object.fromEntries(Object.entries(o).filter(([, e]) => e && typeof e == "object" && "code" in e).map(([e, t]) => [t.code, e]))), this._localeConfig = new tr({
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
			let n = Ur(e);
			t.push(n);
		}
		if (!this.projectId) {
			let n = Hr(e);
			t.push(n);
		}
		if (t.length) throw Error(t.join("\n"));
	}
	async translate(e, t, n) {
		typeof t == "string" && (t = { targetLocale: t }), this._validateAuth("translate");
		let r = t?.targetLocale || this.targetLocale;
		if (!r) {
			let e = Br("translate");
			throw ei.error(e), Error(e);
		}
		r = this.resolveCanonicalLocale(r);
		let i = this.resolveCanonicalLocale(t?.sourceLocale || this.sourceLocale || "en");
		return (await ri([e], {
			...t,
			targetLocale: r,
			sourceLocale: i
		}, this._getTranslationConfig(), n))[0];
	}
	async translateMany(e, t, n) {
		typeof t == "string" && (t = { targetLocale: t }), this._validateAuth("translateMany");
		let r = t?.targetLocale || this.targetLocale;
		if (!r) {
			let e = Br("translateMany");
			throw ei.error(e), Error(e);
		}
		r = this.resolveCanonicalLocale(r);
		let i = this.resolveCanonicalLocale(t?.sourceLocale || this.sourceLocale || "en");
		return await ri(e, {
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
		if (!e) throw Error(Br("getLocaleName"));
		return this.localeConfig.getLocaleName(e);
	}
	getLocaleEmoji(e = this.targetLocale) {
		if (!e) throw Error(Br("getLocaleEmoji"));
		return this.localeConfig.getLocaleEmoji(e);
	}
	getLocaleProperties(e = this.targetLocale) {
		if (!e) throw Error(Br("getLocaleProperties"));
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
		return nr(e, this.targetLocale, t);
	}
	requiresTranslation(e = this.sourceLocale, t = this.targetLocale, n = this.locales, r = this.customMapping) {
		if (!e) throw Error(Vr("requiresTranslation"));
		if (!t) throw Error(Br("requiresTranslation"));
		return r === this.customMapping ? this.localeConfig.requiresTranslation(t, e, n) : or(e, t, n, r);
	}
	determineLocale(e, t = this.locales || [], n = this.customMapping) {
		return n === this.customMapping ? this.localeConfig.determineLocale(e, t ?? []) : sr(e, t, n);
	}
	getLocaleDirection(e = this.targetLocale) {
		if (!e) throw Error(Br("getLocaleDirection"));
		return this.localeConfig.getLocaleDirection(e);
	}
	isValidLocale(e = this.targetLocale, t = this.customMapping) {
		if (!e) throw Error(Br("isValidLocale"));
		return t === this.customMapping ? this.localeConfig.isValidLocale(e) : rr(e, t);
	}
	resolveCanonicalLocale(e = this.targetLocale, t = this.customMapping) {
		if (!e) throw Error(Br("resolveCanonicalLocale"));
		return t === this.customMapping ? this.localeConfig.resolveCanonicalLocale(e) : ir(e, t);
	}
	resolveAliasLocale(e, t = this.customMapping) {
		if (!e) throw Error(Br("resolveAliasLocale"));
		return t === this.customMapping ? this.localeConfig.resolveAliasLocale(e) : cr(e, t);
	}
	standardizeLocale(e = this.targetLocale) {
		if (!e) throw Error(Br("standardizeLocale"));
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
}, ai = "DEBUG";
function oi() {
	let e = ci();
	return e === void 0 ? li(() => void 0) : e;
}
function si(e) {
	return e?.toUpperCase() === ai;
}
function ci() {
	if (typeof process == "object") return process.env?._GENERALTRANSLATION_LOG_LEVEL;
}
function li(e) {
	try {
		return e();
	} catch {
		return;
	}
}
function ui(e) {
	let t = globalThis;
	return t.__generaltranslation ??= {}, t.__generaltranslation[e] ??= {}, t.__generaltranslation[e];
}
function di(e) {
	return globalThis.__generaltranslation?.[e];
}
function fi({ namespace: e, key: t, source: n, notInitialized: r }) {
	function i() {
		let n = ui(e)[t];
		if (n == null) {
			let e = r();
			throw typeof e == "string" ? Error(e) : e;
		}
		return n;
	}
	function a(r) {
		let i = ui(e);
		if (i[t] !== void 0 && i[t] !== r) {
			pi() && console.warn(E({
				source: n,
				severity: "Warning",
				whatHappened: `Global ${t} singleton instance was already initialized`
			}));
			return;
		}
		i[t] = r;
	}
	function o() {
		return ui(e)[t] != null;
	}
	return {
		get: i,
		set: a,
		isInitialized: o
	};
}
function pi() {
	let e = di("i18n")?.i18nConfig;
	return mi(e) ? e.isDebugLoggingEnabled() : si(oi());
}
function mi(e) {
	return typeof e == "object" && !!e && typeof e.isDebugLoggingEnabled == "function";
}
fi({
	namespace: "i18n",
	key: "i18nCache",
	source: "gt-i18n",
	notInitialized: () => E({
		source: "gt-i18n",
		severity: "Error",
		whatHappened: "Cannot read I18nCache before it has been initialized",
		why: "the internal I18nCache singleton is unavailable",
		fix: "Initialize GT before accessing I18nCache (call initializeGT() from your GT framework package)."
	})
});
function hi(e) {
	return e.loadTranslations ? "custom" : (e.cacheUrl === void 0 || e.cacheUrl === "https://cdn.gtx.dev") && e.projectId ? "gt-remote" : e.cacheUrl ? "remote" : "disabled";
}
function gi(e) {
	let t = e.runtimeUrl === void 0 || e.runtimeUrl === "https://api.gtx.dev";
	return t && e.projectId && (e.devApiKey || e.apiKey) ? "gt" : e.runtimeUrl && !t ? "custom" : "disabled";
}
function _i() {
	if (typeof process == "object") return "development";
	let e = vi(() => "production");
	return e ? e === "development" ? "development" : "production" : vi(() => !0) === !0 ? "development" : "production";
}
function vi(e) {
	try {
		return e();
	} catch {
		return;
	}
}
var yi = {
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
		yi.error(`I18nConfig: ${Ci(e)}`);
	}), i.length > 0) throw Error(E({
		source: "gt-i18n",
		severity: "Error",
		whatHappened: "Invalid I18nConfig locale configuration",
		details: i.map((e) => `Invalid locale: ${e}`),
		fix: "Use valid BCP 47 locale codes or add custom mappings."
	}));
}
function xi({ defaultLocale: e, locales: t, customMapping: n }) {
	let r = /* @__PURE__ */ new Set([...e ? [e] : [], ...t || []]);
	return Array.from(r).filter((e) => !rr(e, n));
}
function Si({ customMapping: e }) {
	return Object.values(e || {}).flatMap((e) => {
		let t = typeof e == "string" ? e : e.code;
		return t && !rr(t) ? [t] : [];
	});
}
function Ci(e) {
	return E({
		whatHappened: `Locale "${e}" is not valid`,
		fix: "Use a valid BCP 47 locale code or add a custom mapping"
	});
}
var wi = class extends tr {
	constructor(e = {}) {
		let t = Oi(e);
		super(Ti(e, t)), this.runtimeConfig = {
			projectId: e.projectId,
			devApiKey: e.devApiKey,
			apiKey: e.apiKey,
			runtimeUrl: e.runtimeUrl,
			_disableDevHotReload: e._disableDevHotReload,
			_tagIds: e._tagIds
		}, this.gtServicesEnabled = t, this.logLevel = oi();
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
		return !this.runtimeConfig._disableDevHotReload && !!this.runtimeConfig.devApiKey && !!this.runtimeConfig.projectId && this.runtimeConfig.runtimeUrl !== null && this.runtimeConfig.runtimeUrl !== "" && _i() === "development";
	}
	isGTServicesEnabled() {
		return this.gtServicesEnabled;
	}
	isDebugLoggingEnabled() {
		return si(this.logLevel);
	}
	getGTClassClean(e) {
		return new ii({
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
		return !e || !Di(e) ? this : new tr(Ei(e));
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
	return hi(e) === "gt-remote" || gi(e) === "gt";
}
var ki = fi({
	namespace: "i18n",
	key: "i18nConfig",
	source: "gt-i18n",
	notInitialized: () => E({
		source: "gt-i18n",
		severity: "Error",
		whatHappened: "Cannot read I18nConfig before it has been initialized",
		why: "the internal I18nConfig singleton is unavailable",
		fix: "Initialize GT before reading locale config (call initializeGT() from your GT framework package)."
	})
}), A = ki.get;
ki.set, ki.isInitialized;
function Ai(e) {
	let t = fi({
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
var { getConditionStore: ji, setConditionStore: Mi } = Ai(E({
	source: "gt-i18n",
	severity: "Error",
	whatHappened: "Cannot read the locale before GT has been initialized",
	why: "the internal ConditionStore singleton is unavailable",
	fix: "Initialize GT before calling translation functions (e.g. call initializeGT() from your GT framework package)."
}));
function Ni(e, t) {
	let n = t;
	return n.$_hash == null ? Pr({
		source: t.$format === "ICU" ? ln(e) : e,
		...n.$context && { context: n.$context },
		...n.$maxChars != null && { maxChars: Math.abs(n.$maxChars) },
		...n.$requiresReview === !0 && { requiresReview: !0 },
		dataFormat: t.$format
	}) : n.$_hash;
}
function Pi(e) {
	let t = "hash" in e ? e.hash : Ni(e.message, e.options);
	return `${e.locale}:${t}`;
}
var Fi = [];
function Ii({ locale: e, enableI18n: t, localesProp: n = Fi }) {
	let r = A().getDefaultLocale();
	return t && A().requiresTranslation(e) ? [
		...n,
		e,
		r
	] : [r];
}
var Li = "server-render", Ri = Symbol.for("generaltranslation.react-core.ReactI18nConfig"), zi = class extends wi {
	renderStrategy;
	localeCookieName;
	regionCookieName;
	enableI18nCookieName;
	constructor(e = {}, t = Li) {
		super(e), Vi(t), Object.defineProperty(this, Ri, { value: !0 }), this.renderStrategy = t, this.localeCookieName = e.localeCookieName ?? "generaltranslation.locale", this.regionCookieName = e.regionCookieName ?? "generaltranslation.region", this.enableI18nCookieName = e.enableI18nCookieName ?? "generaltranslation.enable-i18n";
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
function Bi() {
	let e = A();
	if (Hi(e)) return e;
	throw Error(E({
		source: "@generaltranslation/react-core",
		severity: "Error",
		whatHappened: "Cannot read ReactI18nConfig after base I18nConfig setup.",
		why: "the internal I18nConfig singleton was initialized without react-core render strategy support",
		fix: "Initialize GT through gt-react or @generaltranslation/react-core/pure."
	}));
}
function Vi(e) {
	if (e !== "SPA" && e !== "server-render") throw Error(E({
		source: "@generaltranslation/react-core",
		severity: "Error",
		whatHappened: "Invalid React render strategy.",
		why: `the render strategy must be "SPA" or "server-render", but received "${String(e)}"`,
		fix: "Initialize GT through gt-react or pass a valid render strategy."
	}));
}
function Hi(e) {
	if (e instanceof zi) return !0;
	let t = e;
	return t[Ri] === !0 && typeof t.getRenderStrategy == "function" && typeof t.getLocaleCookieName == "function" && typeof t.getRegionCookieName == "function" && typeof t.getEnableI18nCookieName == "function";
}
var { getConditionStore: Ui, setConditionStore: Wi, isConditionStoreInitialized: Gi } = Ai(E({
	source: "@generaltranslation/react-core",
	severity: "Error",
	whatHappened: "Cannot read GT runtime context before it has been initialized",
	why: "the internal ConditionStore is unavailable",
	fix: "Call initializeGT() during setup (gt-next runs this automatically) and add a <GTProvider> at the root of your component tree."
}));
function Ki({ Currency: e, GtInternalCurrency: t, DateTime: n, GtInternalDateTime: r, Num: i, GtInternalNum: a, RelativeTime: o, GtInternalRelativeTime: s, Var: c, GtInternalVar: l }) {
	return function({ variableType: u, variableValue: d, variableOptions: f, locales: p, enableI18n: m, injectionType: h }) {
		let _ = {
			_locale: p[0] ?? "en",
			_enableI18n: m
		};
		if (u === "n") {
			let e = h === "automatic" ? i : a, t = f;
			return g(e, {
				..._,
				options: t,
				children: d
			});
		}
		if (u === "d") {
			let e = h === "automatic" ? n : r, t = f;
			return g(e, {
				..._,
				options: t,
				children: d
			});
		}
		if (u === "c") {
			let n = h === "automatic" ? e : t, r = f;
			return g(n, {
				..._,
				options: r,
				children: d
			});
		}
		if (u === "rt") {
			let e = h === "automatic" ? o : s, t = f;
			if (typeof d == "number" && t?.unit) return g(e, {
				..._,
				value: d,
				unit: t.unit,
				baseDate: t?.baseDate,
				options: t
			});
			let n = d instanceof Date ? d : typeof d == "string" || typeof d == "number" ? new Date(d) : void 0;
			return g(e, {
				..._,
				date: n && !isNaN(n.getTime()) ? n : void 0,
				baseDate: t?.baseDate,
				options: t
			});
		}
		let v = d;
		return g(h === "automatic" ? l : c, {
			..._,
			children: v
		});
	};
}
var qi = {
	variable: "value",
	number: "n",
	datetime: "date",
	currency: "cost",
	"relative-time": "time"
};
function Ji(e = {}, t) {
	return typeof e.name == "string" ? e.name : `_gt_${qi[t] || "value"}_${e["data-_gt"]?.id}`;
}
function Yi(e) {
	return typeof e == "object" && !!e && "data-_gt" in e && typeof e["data-_gt"] == "object" && !!e["data-_gt"] && "transformation" in e["data-_gt"] && e["data-_gt"]?.transformation === "variable";
}
function Xi(e) {
	let t = e["data-_gt"]?.variableType || "variable";
	return {
		variableName: Ji(e, t),
		variableType: cn(t),
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
function Zi(e) {
	return e && e.props && e.props["data-_gt"] ? e.props["data-_gt"] : null;
}
function Qi(e, t, n) {
	let r = "", i = null;
	return typeof e == "number" && !i && n && (r = on(e, Object.keys(n).filter(an), t)), r && !i && (i = n[r]), i;
}
function $i({ renderVariable: e }) {
	return function({ children: n, defaultLocale: r = "en", enableI18n: i }) {
		let a = (n) => {
			let a = Zi(n);
			if (Yi(n.props)) {
				let { variableType: t, variableValue: a, variableOptions: o, injectionType: s } = Xi(n.props);
				return e({
					variableType: t,
					variableValue: a,
					variableOptions: o,
					locales: [r],
					enableI18n: i,
					injectionType: s
				});
			}
			if (a?.transformation === "plural") {
				let e = a.branches || {};
				return typeof n.props.n == "number" ? s(Qi(n.props.n, [r], e) ?? n.props.children) : n.props.children == null ? null : s(n.props.children);
			}
			if (a?.transformation === "branch") {
				let { children: e, branch: t } = n.props, r = a.branches || {}, i = t == null || t === "" ? void 0 : t.toString();
				return s(i && r[i] !== void 0 ? r[i] : e);
			}
			return a?.transformation === "fragment" ? t.createElement(t.Fragment, {
				key: n.props.key,
				children: s(n.props.children)
			}) : n.props.children ? t.cloneElement(n, {
				...n.props,
				"data-_gt": void 0,
				children: s(n.props.children)
			}) : t.cloneElement(n, {
				...n.props,
				"data-_gt": void 0
			});
		}, o = (e) => t.isValidElement(e) ? a(e) : e, s = (e) => Array.isArray(e) ? t.Children.map(e, o) : o(e);
		return s(n);
	};
}
function ea({ renderVariable: e }) {
	let n = $i({ renderVariable: e });
	function r({ sourceElement: e, targetElement: r, locales: a = ["en"], enableI18n: o }) {
		let { props: s } = e, c = s["data-_gt"], l = c?.transformation, u = r.d, d = {};
		if (u && Object.entries(un).forEach(([e, t]) => {
			u[e] && (d[t] = u[e]);
		}), l === "plural") {
			let t = e.props.n;
			return typeof t == "number" ? i({
				source: Qi(t, a, c.branches || {}) ?? e.props.children,
				target: Qi(t, a, r.d?.b || {}) ?? r.c,
				locales: a,
				enableI18n: o
			}) : n({
				children: e,
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
		return l === "fragment" && r.c ? t.createElement(t.Fragment, {
			key: e.props.key,
			children: i({
				source: s.children,
				target: r.c,
				locales: a,
				enableI18n: o
			})
		}) : s?.children && r?.c ? t.cloneElement(e, {
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
			children: e,
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
			let n = {}, c = {}, l = {}, u = i.filter((e) => {
				if (t.isValidElement(e)) {
					if (Yi(e.props)) {
						let { variableName: t, variableValue: r, variableOptions: i, injectionType: a } = Xi(e.props);
						n[t] = r, c[t] = i, l[t] = a;
					} else return !0;
				}
				return !1;
			}), d = (e) => u.find((t) => {
				let n = Zi(t);
				return n?.id !== void 0 && n.id === e.i;
			}) || u.shift();
			return a.map((i, a) => {
				if (typeof i == "string") return g(t.Fragment, { children: i }, `string_${a}`);
				if (Xt(i)) return g(t.Fragment, { children: e({
					variableType: i.v || "v",
					variableValue: n[i.k],
					variableOptions: c[i.k],
					locales: o,
					enableI18n: s,
					injectionType: l[i.k] || "manual"
				}) }, `var_${a}`);
				let u = d(i);
				return u ? g(t.Fragment, { children: r({
					sourceElement: u,
					targetElement: i,
					locales: o,
					enableI18n: s
				}) }, `element_${a}`) : null;
			});
		}
		if (a && typeof a == "object" && !Array.isArray(a)) {
			let n = Xt(a) ? "variable" : "element";
			if (t.isValidElement(i)) {
				if (n === "element") return r({
					sourceElement: i,
					targetElement: a,
					locales: o,
					enableI18n: s
				});
				if (Yi(i.props)) {
					let { variableValue: t, variableOptions: n, variableType: r, injectionType: a } = Xi(i.props);
					return e({
						variableType: r,
						variableValue: t,
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
function ta() {
	let e = A();
	return typeof e.isIdTaggingEnabled == "function" && e.isIdTaggingEnabled();
}
function na(...e) {
	if (!ta()) return;
	let t = Ni(...e);
	return e[1].$_hash = t, t;
}
var ra = { display: "contents" }, ia = globalThis.navigator?.product === "ReactNative";
function aa(e) {
	if (e == null || typeof e == "boolean" || e === "") return !0;
	if (Array.isArray(e)) return !e.some((e) => !aa(e));
	if (c(e) && e.type === r) {
		let t = e.props.children;
		return t == null || aa(t);
	}
	return !1;
}
function oa(e, t) {
	return ia || !ta() ? e : c(e) && typeof e.type == "string" ? a(e, { "data-_gt-hash": t }) : aa(e) ? e : s("span", {
		"data-_gt-hash": t,
		style: ra
	}, e);
}
function sa({ renderDefaultChildren: e, renderTranslatedChildren: t }) {
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
		return c ? oa(l, c) : l;
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
function ca(e) {
	let t = Ki(e), n = $i({ renderVariable: t }), r = ea({ renderVariable: t });
	return {
		renderVariable: t,
		renderDefaultChildren: n,
		renderTranslatedChildren: r,
		renderPreparedT: sa({
			renderDefaultChildren: n,
			renderTranslatedChildren: r
		})
	};
}
var la = fi({
	namespace: "reactCore",
	key: "i18nStore",
	source: "@generaltranslation/react-core",
	notInitialized: () => da()
}), ua = la.get;
la.set, la.isInitialized;
function da() {
	let e = E({
		source: "@generaltranslation/react-core",
		severity: "Error",
		whatHappened: "Cannot access I18nStore before it is initialized.",
		fix: Bi().getRenderStrategy() === "SPA" ? "Initialize GT before reading GT runtime context." : "Add a <GTProvider> at the root of your component tree."
	});
	return Error(e);
}
var fa = fi({
	namespace: "reactCore",
	key: "gtContext",
	source: "@generaltranslation/react-core",
	notInitialized: () => E({
		source: "@generaltranslation/react-core",
		severity: "Error",
		whatHappened: "Cannot read GTContext before it has been initialized",
		why: "the internal GTContext singleton is unavailable",
		fix: "Add a <GTProvider> at the root of your component tree."
	})
});
function pa() {
	return fa.isInitialized() || fa.set(o(void 0)), fa.get();
}
function ma() {
	let e = u(pa());
	if (e || Bi().getRenderStrategy() === "SPA") return e;
	throw Error(ha());
}
function ha() {
	return E({
		source: "@generaltranslation/react-core",
		severity: "Error",
		whatHappened: "GT runtime context could not be read",
		why: "GTContext was accessed outside of a <GTProvider>",
		fix: "Add a <GTProvider> at the root of your component tree."
	});
}
function ga() {
	return ma()?.conditionStore ?? Ui();
}
function _a() {
	return ga().getLocale();
}
function va() {
	return ga().getEnableI18n();
}
function ya() {
	return f(() => A().getDefaultLocale(), []);
}
function ba() {
	let e = va(), t = _a();
	return e && A().requiresTranslation(t);
}
function xa() {
	return ma()?.i18nStore || ua();
}
function Sa() {
	return ma()?.translationsSnapshot || {};
}
function Ca() {
	return wa(ba());
}
function wa(e) {
	let t = ma()?.onMissingTranslation, n = Ea(e);
	return l((e) => {
		t ? t(e) : n(Pi(e), {
			type: "translation",
			lookup: e
		});
	}, [t, n]);
}
var Ta = Ca;
function Ea(e) {
	let t = A().isDevHotReloadEnabled(), n = xa(), r = /* @__PURE__ */ new Map();
	return d(() => {
		!t || !e || r.size === 0 || r.forEach(({ type: e, lookup: t }) => {
			switch (e) {
				case "translation":
					n.translate(t);
					break;
				case "dictionaryEntry":
					n.translateDictionaryEntry(t);
					break;
				case "dictionaryObject": n.translateDictionaryObject(t);
			}
		});
	}, [
		t,
		e,
		n,
		r
	]), (e, t) => {
		r.set(e, t);
	};
}
function Da({ _enableI18n: e, _locale: t, children: n, currency: r = "USD", options: i = {}, locales: a = [] }) {
	let o = Ii({
		locale: t,
		enableI18n: e,
		localesProp: a
	}), s = A().getGTClass();
	if (n == null) return null;
	let c = typeof n == "string" ? parseFloat(n) : n;
	return s.formatCurrency(c, r, {
		locales: o,
		...i
	});
}
function Oa({ _enableI18n: e, _locale: t, ...n }) {
	return Da({
		...n,
		_enableI18n: e ?? va(),
		_locale: t ?? _a()
	});
}
function ka(e) {
	return g(Oa, { ...e });
}
Oa._gtt = "variable-currency-automatic", ka._gtt = "variable-currency";
function Aa({ _enableI18n: e, _locale: t, children: n, options: r = {}, locales: i = [] }) {
	let a = Ii({
		locale: t,
		enableI18n: e,
		localesProp: i
	}), o = A().getGTClass();
	return n == null ? null : o.formatDateTime(n, {
		locales: a,
		...r
	}).replace(/[\u200F\u202B\u202E]/g, "");
}
function ja({ _enableI18n: e, _locale: t, ...n }) {
	return Aa({
		...n,
		_enableI18n: e ?? va(),
		_locale: t ?? _a()
	});
}
function Ma(e) {
	return g(ja, { ...e });
}
ja._gtt = "variable-datetime-automatic", Ma._gtt = "variable-datetime";
function Na({ _enableI18n: e, _locale: t, children: n, options: r = {}, locales: i = [] }) {
	let a = Ii({
		locale: t,
		enableI18n: e,
		localesProp: i
	}), o = A().getGTClass();
	if (n == null) return null;
	let s = typeof n == "string" ? parseFloat(n) : n;
	return o.formatNum(s, {
		locales: a,
		...r
	});
}
function Pa({ _enableI18n: e, _locale: t, ...n }) {
	return Na({
		...n,
		_enableI18n: e ?? va(),
		_locale: t ?? _a()
	});
}
function Fa(e) {
	return g(Pa, { ...e });
}
Pa._gtt = "variable-number-automatic", Fa._gtt = "variable-number";
function Ia({ _enableI18n: e, _locale: t, date: n, children: r, value: i, unit: a, baseDate: o, locales: s = [], options: c = {} }) {
	let l = Ii({
		locale: t,
		enableI18n: e,
		localesProp: s
	}), u = A().getGTClass(), d = n ?? r;
	return i !== void 0 && !a && console.warn("<RelativeTime>: `value` was provided without `unit`. The `value` prop will be ignored."), i !== void 0 && a ? u.formatRelativeTime(i, a, {
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
function La({ _enableI18n: e, _locale: t, ...n }) {
	return Ia({
		...n,
		_enableI18n: e ?? va(),
		_locale: t ?? _a()
	});
}
function Ra(e) {
	return g(La, { ...e });
}
La._gtt = "variable-relative-time-automatic", Ra._gtt = "variable-relative-time";
function za({ children: e }) {
	return e;
}
function Ba({ children: e }) {
	return za({ children: e });
}
function Va({ children: e }) {
	return za({ children: e });
}
Ba._gtt = "variable-variable", Va._gtt = "variable-variable-automatic";
function Ha(e) {
	let t = xa(), n = Sa(), r = Ta(), i = h((n) => t.subscribeToTranslate(e, n), () => t.getTranslateSnapshot(e, n), () => t.getTranslateSnapshot(e, n));
	return i == null && A().isDevHotReloadEnabled() && r(e), i;
}
var { renderVariable: Ua, renderDefaultChildren: Wa, renderTranslatedChildren: Ga, renderPreparedT: Ka } = ca({
	Currency: ka,
	GtInternalCurrency: Oa,
	DateTime: Ma,
	GtInternalDateTime: ja,
	Num: Fa,
	GtInternalNum: Pa,
	RelativeTime: Ra,
	GtInternalRelativeTime: La,
	Var: Ba,
	GtInternalVar: Va
});
function qa(e, n = 0) {
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
				let e = Object.entries(n).reduce((e, [t, n]) => (an(t) && (e[t] = qa(n, r)), e), {});
				Object.keys(e).length && (i.branches = e);
			}
			if (e[0] === "branch") {
				let { children: e, branch: t, ...a } = n, o = Object.fromEntries(Object.entries(a).filter(([e]) => !e.startsWith("data-"))), s = Object.entries(o).reduce((e, [t, n]) => (e[t] = qa(n, r), e), {});
				Object.keys(s).length && (i.branches = s);
			}
			i.transformation = e[0];
		}
		return i;
	};
	function a(e) {
		let { props: n } = e, r = i(e), a = {
			...n,
			"data-_gt": r
		};
		return n.children && !r.variableType && (a.children = s(n.children)), e.type === t.Fragment && (a["data-_gt"].transformation = "fragment"), t.cloneElement(e, a);
	}
	function o(e) {
		return c(e) ? a(e) : e;
	}
	function s(e) {
		return Array.isArray(e) ? t.Children.map(e, o) : o(e);
	}
	return s(e);
}
function Ja(e) {
	return Za(e, 0);
}
function Ya(e, t) {
	let { type: n, props: r } = e, i = Qa(n);
	if (typeof r != "object" || !r) return e;
	if (i) {
		let { componentType: n, injectionType: o } = i;
		if (n === "variable") return e;
		if (n === "branch") return a(e, { ...Object.entries(r).reduce((e, [n, r]) => (e[n] = n !== "branch" && !n.startsWith("data-") ? Xa(r, t) : r, e), {}) });
		if (n === "plural") return a(e, { ...Object.entries(r).reduce((e, [n, r]) => (e[n] = an(n) || n === "children" ? Xa(r, t) : r, e), {}) });
		if (n === "derive") return a(e, {
			...r,
			..."children" in r && { children: Za(r.children, t + 1) }
		});
		if (n === "translate" && o === "automatic" && t > 0) return "children" in r ? Za(r.children, t) : void 0;
		n === "translate" && o === "automatic" && console.warn($a);
	}
	return a(e, {
		...r,
		..."children" in r && { children: Za(r.children, t) }
	});
}
function Xa(e, t) {
	return c(e) ? Ya(e, t) : e;
}
function Za(e, t) {
	return Array.isArray(e) ? n.map(e, (e) => Xa(e, t)) : Xa(e, t);
}
function Qa(e) {
	let t = typeof e == "function" && "_gtt" in e ? e._gtt : void 0;
	if (t == null || typeof t != "string") return;
	let n = t.split("-");
	return {
		componentType: n[0],
		injectionType: n[1] === "automatic" || n[2] === "automatic" ? "automatic" : "manual"
	};
}
var $a = "'@generaltranslation/react-core Warning: A <_T> component was found injected outside of a <Derive> boundary. This may affect translation resolution for this component.";
function eo(e) {
	return t.isValidElement(e);
}
var to = (e) => {
	if (!e) return "";
	let { type: t, props: n } = e;
	if (t && typeof t == "function") {
		if ("displayName" in t && typeof t.displayName == "string" && t.displayName) return t.displayName;
		if ("name" in t && typeof t.name == "string" && t.name) return t.name;
	}
	return t && typeof t == "string" ? t : n.href ? "a" : n["data-_gt"]?.id ? `C${n["data-_gt"].id}` : "function";
}, no = (e, t, n) => {
	let r = Object.entries(un).reduce((e, [n, r]) => {
		let i = t[r];
		return typeof i == "string" && (e[n] = i), e;
	}, {});
	if ((e === "plural" || e === "branch") && n) {
		let t = {};
		Object.entries(n).forEach(([e, n]) => {
			t[e] = ao(n);
		}), r = {
			...r,
			b: t,
			t: e === "plural" ? "p" : "b"
		};
	}
	return Object.keys(r).length ? r : void 0;
}, ro = (e) => {
	let { props: t } = e, n = { t: to(e) };
	if (t["data-_gt"]) {
		let e = t["data-_gt"], r = e.transformation;
		if (r === "variable") {
			let n = e.variableType || "variable", r = Ji(t, n), i = cn(n);
			return {
				i: e.id,
				k: r,
				v: i
			};
		}
		n.i = e.id, n.d = no(r, t, e.branches);
	}
	return t.children && (n.c = ao(t.children)), n;
}, io = (e) => eo(e) ? ro(e) : typeof e == "number" ? e.toString() : e;
function ao(e) {
	return Array.isArray(e) ? e.map(io) : io(e);
}
function oo({ sourceChildren: e, params: t, locale: n }) {
	let r = so(e), i = co(r), a = lo({
		options: uo(t),
		locale: n
	});
	return na(i, a), {
		taggedSourceChildren: r,
		sourceJsxChildren: i,
		targetOptions: a
	};
}
function so(e) {
	return qa(Ja(e));
}
function co(e) {
	return ao(e);
}
function lo({ options: e, locale: t }) {
	return {
		...e,
		$locale: t
	};
}
function uo(e) {
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
function fo({ sourceChildren: e, params: t, _locale: n, _enableI18n: r }) {
	let i = _a(), a = va(), o = ya(), s = n ?? i, c = r ?? a;
	return {
		defaultLocale: o,
		enableI18n: c,
		locale: s,
		shouldTranslate: c && A().requiresTranslation(s),
		...f(() => oo({
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
function po(e) {
	return mo(e);
}
po._gtt = "translate-client";
function mo({ children: e, _locale: t, _enableI18n: n, _renderPreparedT: r = Ka, ...i }) {
	let { defaultLocale: a, locale: o, enableI18n: s, targetOptions: c, taggedSourceChildren: l, sourceJsxChildren: u, shouldTranslate: d } = fo({
		sourceChildren: e,
		params: i,
		_locale: t,
		_enableI18n: n
	}), f = Ha({
		locale: o,
		message: u,
		options: c
	}), m = p(null);
	if (A().isDevHotReloadEnabled() && f == null && m.current != null && d) return m.current;
	let h = r({
		taggedSourceChildren: l,
		targetJsxChildren: f,
		locale: o,
		defaultLocale: a,
		enableI18n: s,
		shouldTranslate: d,
		hash: c.$_hash
	});
	return m.current = h, h;
}
var ho = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/gt-react-app/src/components/pages/careers/CareersBenefits.tsx";
function go() {
	let e = [
		{
			label: _(po, { children: "Remote-first" }, void 0, !1, {
				fileName: ho,
				lineNumber: 6,
				columnNumber: 14
			}, this),
			value: _(po, { children: "Work from anywhere in the world" }, void 0, !1, {
				fileName: ho,
				lineNumber: 7,
				columnNumber: 14
			}, this)
		},
		{
			label: _(po, { children: "Competitive pay" }, void 0, !1, {
				fileName: ho,
				lineNumber: 9,
				columnNumber: 14
			}, this),
			value: _(po, { children: "Top-of-market compensation" }, void 0, !1, {
				fileName: ho,
				lineNumber: 9,
				columnNumber: 45
			}, this)
		},
		{
			label: _(po, { children: "Open source time" }, void 0, !1, {
				fileName: ho,
				lineNumber: 11,
				columnNumber: 14
			}, this),
			value: _(po, { children: "20% time for OSS contributions" }, void 0, !1, {
				fileName: ho,
				lineNumber: 12,
				columnNumber: 14
			}, this)
		}
	];
	return _("div", {
		className: "mb-12 grid gap-4 md:grid-cols-3",
		children: e.map((e) => _("div", {
			className: "rounded-lg border border-border bg-card p-4 text-center",
			children: [_("p", {
				className: "text-sm font-semibold text-foreground",
				children: e.label
			}, void 0, !1, {
				fileName: ho,
				lineNumber: 23,
				columnNumber: 11
			}, this), _("p", {
				className: "text-xs text-muted-foreground",
				children: e.value
			}, void 0, !1, {
				fileName: ho,
				lineNumber: 24,
				columnNumber: 11
			}, this)]
		}, e.label?.toString() || "", !0, {
			fileName: ho,
			lineNumber: 19,
			columnNumber: 9
		}, this))
	}, void 0, !1, {
		fileName: ho,
		lineNumber: 17,
		columnNumber: 5
	}, this);
}
var _o = 6e4, vo = (e) => `generaltranslation Formatting Error: Invalid cutoff style: ${e}.`, yo = "DEFAULT_TERMINATOR_KEY", bo = {
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
		[yo]: {
			terminator: "…",
			separator: void 0
		}
	},
	none: { [yo]: {
		terminator: void 0,
		separator: void 0
	} }
}, xo = class {
	constructor(e, t = {}) {
		try {
			let t = e ? Array.isArray(e) ? e.map((e) => String(e)) : [String(e)] : ["en"], n = Intl.getCanonicalLocales(t);
			this.locale = n.length ? n[0] : "en";
		} catch {
			this.locale = "en";
		}
		if (!bo[t.style ?? "ellipsis"]) throw Error(vo(t.style ?? "ellipsis"));
		let n, r;
		if (t.maxChars !== void 0) {
			n = t.style ?? "ellipsis";
			let e = new Intl.Locale(this.locale).language;
			r = bo[n][e] || bo[n].DEFAULT_TERMINATOR_KEY;
		}
		let i = t.terminator ?? r?.terminator, a = i == null ? void 0 : t.separator ?? r?.separator;
		this.additionLength = (i?.length ?? 0) + (a?.length ?? 0), t.maxChars !== void 0 && Math.abs(t.maxChars) < this.additionLength && (i = void 0, a = void 0), this.options = {
			maxChars: t.maxChars,
			style: n,
			terminator: i,
			separator: a
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
}, So = {
	Collator: Intl.Collator,
	DateTimeFormat: Intl.DateTimeFormat,
	DisplayNames: Intl.DisplayNames,
	ListFormat: Intl.ListFormat,
	Locale: Intl.Locale,
	NumberFormat: Intl.NumberFormat,
	PluralRules: Intl.PluralRules,
	RelativeTimeFormat: Intl.RelativeTimeFormat,
	Segmenter: Intl.Segmenter,
	CutoffFormat: xo
}, j = new class {
	constructor() {
		this.cache = {};
	}
	_generateKey(e, t = {}) {
		return `${e ? Array.isArray(e) ? e.map((e) => String(e)).join(",") : String(e) : "undefined"}:${t ? JSON.stringify(t, Object.keys(t).sort()) : "{}"}`;
	}
	get(e, ...t) {
		let [n = "en", r = {}] = t, i = this._generateKey(n, r), a = this.cache[e]?.[i];
		return a === void 0 && (a = new So[e](...t), this.cache[e] || (this.cache[e] = {}), this.cache[e][i] = a), a;
	}
}(), Co = "https://cdn.gtx.dev", wo = {
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
function To(e, t) {
	return wo[e]?.includes(t) ?? !1;
}
function Eo(e) {
	if (!e.transformFormat) return;
	let t = e.fileName ?? e.fileId ?? "unknown file";
	if (!e.fileFormat) return `fileFormat is required when transformFormat is provided for ${t}`;
	if (!To(e.fileFormat, e.transformFormat)) return `Unsupported file format transform: ${e.fileFormat} -> ${e.transformFormat}`;
}
function Do(e) {
	for (let t of e) {
		let e = Eo(t);
		if (e) throw Error(e);
	}
}
function Oo(e) {
	if (typeof Buffer < "u") return Buffer.from(e, "utf8").toString("base64");
	let t = new TextEncoder().encode(e), n = "";
	for (let e = 0; e < t.length; e++) n += String.fromCharCode(t[e]);
	return btoa(n);
}
function ko(e) {
	if (typeof Buffer < "u") return Buffer.from(e, "base64").toString("utf8");
	let t = atob(e), n = new Uint8Array(t.length);
	for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
	return new TextDecoder().decode(n);
}
function Ao(e) {
	if (e === void 0) return;
	if (e === null) return "null";
	if (typeof e == "number") return isFinite(e) ? "" + e : "null";
	if (typeof e != "object") return JSON.stringify(e);
	if (Array.isArray(e)) {
		let t = "[";
		for (let n = 0; n < e.length; n++) n && (t += ","), t += Ao(e[n]) || "null";
		return t + "]";
	}
	let t = Object.keys(e).sort(), n = "";
	for (let r of t) {
		let t = Ao(e[r]);
		t && (n && (n += ","), n += JSON.stringify(r) + ":" + t);
	}
	return "{" + n + "}";
}
function jo(e) {
	return Ao(e) ?? "";
}
function Mo(e) {
	let t = e;
	if (t && typeof t == "object" && typeof t.k == "string") {
		let e = Object.keys(t);
		if (e.length === 1 || e.length === 2 && (typeof t.i == "number" || typeof t.v == "string") || e.length === 3 && typeof t.v == "string" && typeof t.i == "number") return !0;
	}
	return !1;
}
var No = T({
	__addDisposableResource: () => ss,
	__assign: () => M,
	__asyncDelegator: () => $o,
	__asyncGenerator: () => Qo,
	__asyncValues: () => es,
	__await: () => Zo,
	__awaiter: () => Uo,
	__classPrivateFieldGet: () => is,
	__classPrivateFieldIn: () => os,
	__classPrivateFieldSet: () => as,
	__createBinding: () => ds,
	__decorate: () => Io,
	__disposeResources: () => cs,
	__esDecorate: () => Ro,
	__exportStar: () => Go,
	__extends: () => Po,
	__generator: () => Wo,
	__importDefault: () => rs,
	__importStar: () => ns,
	__makeTemplateObject: () => ts,
	__metadata: () => Ho,
	__param: () => Lo,
	__propKey: () => Bo,
	__read: () => qo,
	__rest: () => Fo,
	__rewriteRelativeImportExtension: () => ls,
	__runInitializers: () => zo,
	__setFunctionName: () => Vo,
	__spread: () => Jo,
	__spreadArray: () => Xo,
	__spreadArrays: () => Yo,
	__values: () => Ko,
	default: () => hs
});
function Po(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	us(e, t);
	function n() {
		this.constructor = e;
	}
	e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
function Fo(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function Io(e, t, n, r) {
	var i = arguments.length, a = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, o;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
	return i > 3 && a && Object.defineProperty(t, n, a), a;
}
function Lo(e, t) {
	return function(n, r) {
		t(n, r, e);
	};
}
function Ro(e, t, n, r, i, a) {
	function o(e) {
		if (e !== void 0 && typeof e != "function") throw TypeError("Function expected");
		return e;
	}
	for (var s = r.kind, c = s === "getter" ? "get" : s === "setter" ? "set" : "value", l = !t && e ? r.static ? e : e.prototype : null, u = t || (l ? Object.getOwnPropertyDescriptor(l, r.name) : {}), d, f = !1, p = n.length - 1; p >= 0; p--) {
		var m = {};
		for (var h in r) m[h] = h === "access" ? {} : r[h];
		for (var h in r.access) m.access[h] = r.access[h];
		m.addInitializer = function(e) {
			if (f) throw TypeError("Cannot add initializers after decoration has completed");
			a.push(o(e || null));
		};
		var g = (0, n[p])(s === "accessor" ? {
			get: u.get,
			set: u.set
		} : u[c], m);
		if (s === "accessor") {
			if (g === void 0) continue;
			if (typeof g != "object" || !g) throw TypeError("Object expected");
			(d = o(g.get)) && (u.get = d), (d = o(g.set)) && (u.set = d), (d = o(g.init)) && i.unshift(d);
		} else (d = o(g)) && (s === "field" ? i.unshift(d) : u[c] = d);
	}
	l && Object.defineProperty(l, r.name, u), f = !0;
}
function zo(e, t, n) {
	for (var r = arguments.length > 2, i = 0; i < t.length; i++) n = r ? t[i].call(e, n) : t[i].call(e);
	return r ? n : void 0;
}
function Bo(e) {
	return typeof e == "symbol" ? e : `${e}`;
}
function Vo(e, t, n) {
	return typeof t == "symbol" && (t = t.description ? `[${t.description}]` : ""), Object.defineProperty(e, "name", {
		configurable: !0,
		value: n ? `${n} ${t}` : t
	});
}
function Ho(e, t) {
	if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, t);
}
function Uo(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}
function Wo(e, t) {
	var n = {
		label: 0,
		sent: function() {
			if (a[0] & 1) throw a[1];
			return a[1];
		},
		trys: [],
		ops: []
	}, r, i, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
	return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
		return this;
	}), o;
	function s(e) {
		return function(t) {
			return c([e, t]);
		};
	}
	function c(s) {
		if (r) throw TypeError("Generator is already executing.");
		for (; o && (o = 0, s[0] && (n = 0)), n;) try {
			if (r = 1, i && (a = s[0] & 2 ? i.return : s[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, s[1])).done) return a;
			switch (i = 0, a && (s = [s[0] & 2, a.value]), s[0]) {
				case 0:
				case 1:
					a = s;
					break;
				case 4: return n.label++, {
					value: s[1],
					done: !1
				};
				case 5:
					n.label++, i = s[1], s = [0];
					continue;
				case 7:
					s = n.ops.pop(), n.trys.pop();
					continue;
				default:
					if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (s[0] === 6 || s[0] === 2)) {
						n = 0;
						continue;
					}
					if (s[0] === 3 && (!a || s[1] > a[0] && s[1] < a[3])) {
						n.label = s[1];
						break;
					}
					if (s[0] === 6 && n.label < a[1]) {
						n.label = a[1], a = s;
						break;
					}
					if (a && n.label < a[2]) {
						n.label = a[2], n.ops.push(s);
						break;
					}
					a[2] && n.ops.pop(), n.trys.pop();
					continue;
			}
			s = t.call(e, n);
		} catch (e) {
			s = [6, e], i = 0;
		} finally {
			r = a = 0;
		}
		if (s[0] & 5) throw s[1];
		return {
			value: s[0] ? s[1] : void 0,
			done: !0
		};
	}
}
function Go(e, t) {
	for (var n in e) n !== "default" && !Object.prototype.hasOwnProperty.call(t, n) && ds(t, e, n);
}
function Ko(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function qo(e, t) {
	var n = typeof Symbol == "function" && e[Symbol.iterator];
	if (!n) return e;
	var r = n.call(e), i, a = [], o;
	try {
		for (; (t === void 0 || t-- > 0) && !(i = r.next()).done;) a.push(i.value);
	} catch (e) {
		o = { error: e };
	} finally {
		try {
			i && !i.done && (n = r.return) && n.call(r);
		} finally {
			if (o) throw o.error;
		}
	}
	return a;
}
function Jo() {
	for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(qo(arguments[t]));
	return e;
}
function Yo() {
	for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
	for (var r = Array(e), i = 0, t = 0; t < n; t++) for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
	return r;
}
function Xo(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
function Zo(e) {
	return this instanceof Zo ? (this.v = e, this) : new Zo(e);
}
function Qo(e, t, n) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var r = n.apply(e, t || []), i, a = [];
	return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), s("next"), s("throw"), s("return", o), i[Symbol.asyncIterator] = function() {
		return this;
	}, i;
	function o(e) {
		return function(t) {
			return Promise.resolve(t).then(e, d);
		};
	}
	function s(e, t) {
		r[e] && (i[e] = function(t) {
			return new Promise(function(n, r) {
				a.push([
					e,
					t,
					n,
					r
				]) > 1 || c(e, t);
			});
		}, t && (i[e] = t(i[e])));
	}
	function c(e, t) {
		try {
			l(r[e](t));
		} catch (e) {
			f(a[0][3], e);
		}
	}
	function l(e) {
		e.value instanceof Zo ? Promise.resolve(e.value.v).then(u, d) : f(a[0][2], e);
	}
	function u(e) {
		c("next", e);
	}
	function d(e) {
		c("throw", e);
	}
	function f(e, t) {
		e(t), a.shift(), a.length && c(a[0][0], a[0][1]);
	}
}
function $o(e) {
	var t = {}, n;
	return r("next"), r("throw", function(e) {
		throw e;
	}), r("return"), t[Symbol.iterator] = function() {
		return this;
	}, t;
	function r(r, i) {
		t[r] = e[r] ? function(t) {
			return (n = !n) ? {
				value: Zo(e[r](t)),
				done: !1
			} : i ? i(t) : t;
		} : i;
	}
}
function es(e) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var t = e[Symbol.asyncIterator], n;
	return t ? t.call(e) : (e = typeof Ko == "function" ? Ko(e) : e[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
		return this;
	}, n);
	function r(t) {
		n[t] = e[t] && function(n) {
			return new Promise(function(r, a) {
				n = e[t](n), i(r, a, n.done, n.value);
			});
		};
	}
	function i(e, t, n, r) {
		Promise.resolve(r).then(function(t) {
			e({
				value: t,
				done: n
			});
		}, t);
	}
}
function ts(e, t) {
	return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
function ns(e) {
	if (e && e.__esModule) return e;
	var t = {};
	if (e != null) for (var n = ps(e), r = 0; r < n.length; r++) n[r] !== "default" && ds(t, e, n[r]);
	return fs(t, e), t;
}
function rs(e) {
	return e && e.__esModule ? e : { default: e };
}
function is(e, t, n, r) {
	if (n === "a" && !r) throw TypeError("Private accessor was defined without a getter");
	if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
	return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function as(e, t, n, r, i) {
	if (r === "m") throw TypeError("Private method is not writable");
	if (r === "a" && !i) throw TypeError("Private accessor was defined without a setter");
	if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
	return r === "a" ? i.call(e, n) : i ? i.value = n : t.set(e, n), n;
}
function os(e, t) {
	if (t === null || typeof t != "object" && typeof t != "function") throw TypeError("Cannot use 'in' operator on non-object");
	return typeof e == "function" ? t === e : e.has(t);
}
function ss(e, t, n) {
	if (t != null) {
		if (typeof t != "object" && typeof t != "function") throw TypeError("Object expected.");
		var r, i;
		if (n) {
			if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
			r = t[Symbol.asyncDispose];
		}
		if (r === void 0) {
			if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
			r = t[Symbol.dispose], n && (i = r);
		}
		if (typeof r != "function") throw TypeError("Object not disposable.");
		i && (r = function() {
			try {
				i.call(this);
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
function cs(e) {
	function t(t) {
		e.error = e.hasError ? new ms(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
	}
	var n, r = 0;
	function i() {
		for (; n = e.stack.pop();) try {
			if (!n.async && r === 1) return r = 0, e.stack.push(n), Promise.resolve().then(i);
			if (n.dispose) {
				var a = n.dispose.call(n.value);
				if (n.async) return r |= 2, Promise.resolve(a).then(i, function(e) {
					return t(e), i();
				});
			} else r |= 1;
		} catch (e) {
			t(e);
		}
		if (r === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
		if (e.hasError) throw e.error;
	}
	return i();
}
function ls(e, t) {
	return typeof e == "string" && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, n, r, i, a) {
		return n ? t ? ".jsx" : ".js" : r && (!i || !a) ? e : r + i + "." + a.toLowerCase() + "js";
	}) : e;
}
var us, M, ds, fs, ps, ms, hs, gs = te((() => {
	us = function(e, t) {
		return us = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
		}, us(e, t);
	}, M = function() {
		return M = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
			return e;
		}, M.apply(this, arguments);
	}, ds = Object.create ? (function(e, t, n, r) {
		r === void 0 && (r = n);
		var i = Object.getOwnPropertyDescriptor(t, n);
		(!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
			enumerable: !0,
			get: function() {
				return t[n];
			}
		}), Object.defineProperty(e, r, i);
	}) : (function(e, t, n, r) {
		r === void 0 && (r = n), e[r] = t[n];
	}), fs = Object.create ? (function(e, t) {
		Object.defineProperty(e, "default", {
			enumerable: !0,
			value: t
		});
	}) : function(e, t) {
		e.default = t;
	}, ps = function(e) {
		return ps = Object.getOwnPropertyNames || function(e) {
			var t = [];
			for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
			return t;
		}, ps(e);
	}, ms = typeof SuppressedError == "function" ? SuppressedError : function(e, t, n) {
		var r = Error(n);
		return r.name = "SuppressedError", r.error = e, r.suppressed = t, r;
	}, hs = {
		__extends: Po,
		__assign: M,
		__rest: Fo,
		__decorate: Io,
		__param: Lo,
		__esDecorate: Ro,
		__runInitializers: zo,
		__propKey: Bo,
		__setFunctionName: Vo,
		__metadata: Ho,
		__awaiter: Uo,
		__generator: Wo,
		__createBinding: ds,
		__exportStar: Go,
		__values: Ko,
		__read: qo,
		__spread: Jo,
		__spreadArrays: Yo,
		__spreadArray: Xo,
		__await: Zo,
		__asyncGenerator: Qo,
		__asyncDelegator: $o,
		__asyncValues: es,
		__makeTemplateObject: ts,
		__importStar: ns,
		__importDefault: rs,
		__classPrivateFieldGet: is,
		__classPrivateFieldSet: as,
		__classPrivateFieldIn: os,
		__addDisposableResource: ss,
		__disposeResources: cs,
		__rewriteRelativeImportExtension: ls
	};
}));
gs();
var N;
(function(e) {
	e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(N ||= {});
var P;
(function(e) {
	e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(P ||= {});
var _s;
(function(e) {
	e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(_s ||= {});
function vs(e) {
	return e.type === P.literal;
}
function ys(e) {
	return e.type === P.argument;
}
function bs(e) {
	return e.type === P.number;
}
function xs(e) {
	return e.type === P.date;
}
function Ss(e) {
	return e.type === P.time;
}
function Cs(e) {
	return e.type === P.select;
}
function ws(e) {
	return e.type === P.plural;
}
function Ts(e) {
	return e.type === P.pound;
}
function Es(e) {
	return e.type === P.tag;
}
function Ds(e) {
	return !!(e && typeof e == "object" && e.type === _s.number);
}
function Os(e) {
	return !!(e && typeof e == "object" && e.type === _s.dateTime);
}
var ks = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, As = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function js(e) {
	var t = {};
	return e.replace(As, function(e) {
		var n = e.length;
		switch (e[0]) {
			case "G":
				t.era = n === 4 ? "long" : n === 5 ? "narrow" : "short";
				break;
			case "y":
				t.year = n === 2 ? "2-digit" : "numeric";
				break;
			case "Y":
			case "u":
			case "U":
			case "r": throw RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
			case "q":
			case "Q": throw RangeError("`q/Q` (quarter) patterns are not supported");
			case "M":
			case "L":
				t.month = [
					"numeric",
					"2-digit",
					"short",
					"long",
					"narrow"
				][n - 1];
				break;
			case "w":
			case "W": throw RangeError("`w/W` (week) patterns are not supported");
			case "d":
				t.day = ["numeric", "2-digit"][n - 1];
				break;
			case "D":
			case "F":
			case "g": throw RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
			case "E":
				t.weekday = n === 4 ? "long" : n === 5 ? "narrow" : "short";
				break;
			case "e":
				if (n < 4) throw RangeError("`e..eee` (weekday) patterns are not supported");
				t.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][n - 4];
				break;
			case "c":
				if (n < 4) throw RangeError("`c..ccc` (weekday) patterns are not supported");
				t.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][n - 4];
				break;
			case "a":
				t.hour12 = !0;
				break;
			case "b":
			case "B": throw RangeError("`b/B` (period) patterns are not supported, use `a` instead");
			case "h":
				t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "H":
				t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "K":
				t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "k":
				t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "j":
			case "J":
			case "C": throw RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
			case "m":
				t.minute = ["numeric", "2-digit"][n - 1];
				break;
			case "s":
				t.second = ["numeric", "2-digit"][n - 1];
				break;
			case "S":
			case "A": throw RangeError("`S/A` (second) patterns are not supported, use `s` instead");
			case "z":
				t.timeZoneName = n < 4 ? "short" : "long";
				break;
			case "Z":
			case "O":
			case "v":
			case "V":
			case "X":
			case "x": throw RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
		}
		return "";
	}), t;
}
var Ms = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Ns(e) {
	if (e.length === 0) throw Error("Number skeleton cannot be empty");
	for (var t = e.split(Ms).filter(function(e) {
		return e.length > 0;
	}), n = [], r = 0, i = t; r < i.length; r++) {
		var a = i[r].split("/");
		if (a.length === 0) throw Error("Invalid number skeleton");
		for (var o = a[0], s = a.slice(1), c = 0, l = s; c < l.length; c++) if (l[c].length === 0) throw Error("Invalid number skeleton");
		n.push({
			stem: o,
			options: s
		});
	}
	return n;
}
function Ps(e) {
	return e.replace(/^(.*?)-/, "");
}
var Fs = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Is = /^(@+)?(\+|#+)?[rs]?$/g, Ls = /(\*)(0+)|(#+)(0+)|(0+)/g, Rs = /^(0+)$/;
function zs(e) {
	var t = {};
	return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Is, function(e, n, r) {
		return typeof r == "string" ? r === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof r == "string" ? r.length : 0)) : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length), "";
	}), t;
}
function Bs(e) {
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
function Vs(e) {
	var t;
	if (e[0] === "E" && e[1] === "E" ? (t = { notation: "engineering" }, e = e.slice(2)) : e[0] === "E" && (t = { notation: "scientific" }, e = e.slice(1)), t) {
		var n = e.slice(0, 2);
		if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Rs.test(e)) throw Error("Malformed concise eng/scientific notation");
		t.minimumIntegerDigits = e.length;
	}
	return t;
}
function Hs(e) {
	return Bs(e) || {};
}
function Us(e) {
	for (var t = {}, n = 0, r = e; n < r.length; n++) {
		var i = r[n];
		switch (i.stem) {
			case "percent":
			case "%":
				t.style = "percent";
				continue;
			case "%x100":
				t.style = "percent", t.scale = 100;
				continue;
			case "currency":
				t.style = "currency", t.currency = i.options[0];
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
				t.style = "unit", t.unit = Ps(i.options[0]);
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
				t = M(M(M({}, t), { notation: "scientific" }), i.options.reduce(function(e, t) {
					return M(M({}, e), Hs(t));
				}, {}));
				continue;
			case "engineering":
				t = M(M(M({}, t), { notation: "engineering" }), i.options.reduce(function(e, t) {
					return M(M({}, e), Hs(t));
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
				t.scale = parseFloat(i.options[0]);
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
				if (i.options.length > 1) throw RangeError("integer-width stems only accept a single optional option");
				i.options[0].replace(Ls, function(e, n, r, i, a, o) {
					if (n) t.minimumIntegerDigits = r.length;
					else if (i && a) throw Error("We currently do not support maximum integer digits");
					else if (o) throw Error("We currently do not support exact integer digits");
					return "";
				});
				continue;
		}
		if (Rs.test(i.stem)) {
			t.minimumIntegerDigits = i.stem.length;
			continue;
		}
		if (Fs.test(i.stem)) {
			if (i.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
			i.stem.replace(Fs, function(e, n, r, i, a, o) {
				return r === "*" ? t.minimumFractionDigits = n.length : i && i[0] === "#" ? t.maximumFractionDigits = i.length : a && o ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + o.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), "";
			});
			var a = i.options[0];
			a === "w" ? t = M(M({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = M(M({}, t), zs(a)));
			continue;
		}
		if (Is.test(i.stem)) {
			t = M(M({}, t), zs(i.stem));
			continue;
		}
		var o = Bs(i.stem);
		o && (t = M(M({}, t), o));
		var s = Vs(i.stem);
		s && (t = M(M({}, t), s));
	}
	return t;
}
var Ws = {
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
function Gs(e, t) {
	for (var n = "", r = 0; r < e.length; r++) {
		var i = e.charAt(r);
		if (i === "j") {
			for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i;) a++, r++;
			var o = 1 + (a & 1), s = a < 2 ? 1 : 3 + (a >> 1), c = "a", l = Ks(t);
			for ((l == "H" || l == "k") && (s = 0); s-- > 0;) n += c;
			for (; o-- > 0;) n = l + n;
		} else n += i === "J" ? "H" : i;
	}
	return n;
}
function Ks(e) {
	var t = e.hourCycle;
	if (t === void 0 && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
		case "h24": return "k";
		case "h23": return "H";
		case "h12": return "h";
		case "h11": return "K";
		default: throw Error("Invalid hourCycle");
	}
	var n = e.language, r;
	return n !== "root" && (r = e.maximize().region), (Ws[r || ""] || Ws[n || ""] || Ws[`${n}-001`] || Ws["001"])[0];
}
gs();
var qs = RegExp(`^${ks.source}*`), Js = RegExp(`${ks.source}*\$`);
function F(e, t) {
	return {
		start: e,
		end: t
	};
}
var Ys = !!String.prototype.startsWith && "_a".startsWith("a", 1), Xs = !!String.fromCodePoint, Zs = !!Object.fromEntries, Qs = !!String.prototype.codePointAt, $s = !!String.prototype.trimStart, ec = !!String.prototype.trimEnd, tc = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
	return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, nc = !0;
try {
	nc = lc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")?.[0] === "a";
} catch {
	nc = !1;
}
var rc = Ys ? function(e, t, n) {
	return e.startsWith(t, n);
} : function(e, t, n) {
	return e.slice(n, n + t.length) === t;
}, ic = Xs ? String.fromCodePoint : function() {
	for (var e = [...arguments], t = "", n = e.length, r = 0, i; n > r;) {
		if (i = e[r++], i > 1114111) throw RangeError(i + " is not a valid code point");
		t += i < 65536 ? String.fromCharCode(i) : String.fromCharCode(((i -= 65536) >> 10) + 55296, i % 1024 + 56320);
	}
	return t;
}, ac = Zs ? Object.fromEntries : function(e) {
	for (var t = {}, n = 0, r = e; n < r.length; n++) {
		var i = r[n], a = i[0];
		t[a] = i[1];
	}
	return t;
}, oc = Qs ? function(e, t) {
	return e.codePointAt(t);
} : function(e, t) {
	var n = e.length;
	if (!(t < 0 || t >= n)) {
		var r = e.charCodeAt(t), i;
		return r < 55296 || r > 56319 || t + 1 === n || (i = e.charCodeAt(t + 1)) < 56320 || i > 57343 ? r : (r - 55296 << 10) + (i - 56320) + 65536;
	}
}, sc = $s ? function(e) {
	return e.trimStart();
} : function(e) {
	return e.replace(qs, "");
}, cc = ec ? function(e) {
	return e.trimEnd();
} : function(e) {
	return e.replace(Js, "");
};
function lc(e, t) {
	return new RegExp(e, t);
}
var uc;
if (nc) {
	var dc = lc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
	uc = function(e, t) {
		return dc.lastIndex = t, dc.exec(e)[1] ?? "";
	};
} else uc = function(e, t) {
	for (var n = [];;) {
		var r = oc(e, t);
		if (r === void 0 || gc(r) || _c(r)) break;
		n.push(r), t += r >= 65536 ? 2 : 1;
	}
	return ic.apply(void 0, n);
};
var fc = function() {
	function e(e, t) {
		t === void 0 && (t = {}), this.message = e, this.position = {
			offset: 0,
			line: 1,
			column: 1
		}, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons;
	}
	return e.prototype.parse = function() {
		if (this.offset() !== 0) throw Error("parser can only be used once");
		return this.parseMessage(0, "", !1);
	}, e.prototype.parseMessage = function(e, t, n) {
		for (var r = []; !this.isEOF();) {
			var i = this.char();
			if (i === 123) {
				var a = this.parseArgument(e, n);
				if (a.err) return a;
				r.push(a.val);
			} else if (i === 125 && e > 0) break;
			else if (i === 35 && (t === "plural" || t === "selectordinal")) {
				var o = this.clonePosition();
				this.bump(), r.push({
					type: P.pound,
					location: F(o, this.clonePosition())
				});
			} else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
				if (n) break;
				return this.error(N.UNMATCHED_CLOSING_TAG, F(this.clonePosition(), this.clonePosition()));
			} else if (i === 60 && !this.ignoreTag && pc(this.peek() || 0)) {
				var a = this.parseTag(e, t);
				if (a.err) return a;
				r.push(a.val);
			} else {
				var a = this.parseLiteral(e, t);
				if (a.err) return a;
				r.push(a.val);
			}
		}
		return {
			val: r,
			err: null
		};
	}, e.prototype.parseTag = function(e, t) {
		var n = this.clonePosition();
		this.bump();
		var r = this.parseTagName();
		if (this.bumpSpace(), this.bumpIf("/>")) return {
			val: {
				type: P.literal,
				value: `<${r}/>`,
				location: F(n, this.clonePosition())
			},
			err: null
		};
		if (this.bumpIf(">")) {
			var i = this.parseMessage(e + 1, t, !0);
			if (i.err) return i;
			var a = i.val, o = this.clonePosition();
			if (this.bumpIf("</")) {
				if (this.isEOF() || !pc(this.char())) return this.error(N.INVALID_TAG, F(o, this.clonePosition()));
				var s = this.clonePosition();
				return r === this.parseTagName() ? (this.bumpSpace(), this.bumpIf(">") ? {
					val: {
						type: P.tag,
						value: r,
						children: a,
						location: F(n, this.clonePosition())
					},
					err: null
				} : this.error(N.INVALID_TAG, F(o, this.clonePosition()))) : this.error(N.UNMATCHED_CLOSING_TAG, F(s, this.clonePosition()));
			}
			return this.error(N.UNCLOSED_TAG, F(n, this.clonePosition()));
		}
		return this.error(N.INVALID_TAG, F(n, this.clonePosition()));
	}, e.prototype.parseTagName = function() {
		var e = this.offset();
		for (this.bump(); !this.isEOF() && hc(this.char());) this.bump();
		return this.message.slice(e, this.offset());
	}, e.prototype.parseLiteral = function(e, t) {
		for (var n = this.clonePosition(), r = "";;) {
			var i = this.tryParseQuote(t);
			if (i) {
				r += i;
				continue;
			}
			var a = this.tryParseUnquoted(e, t);
			if (a) {
				r += a;
				continue;
			}
			var o = this.tryParseLeftAngleBracket();
			if (o) {
				r += o;
				continue;
			}
			break;
		}
		var s = F(n, this.clonePosition());
		return {
			val: {
				type: P.literal,
				value: r,
				location: s
			},
			err: null
		};
	}, e.prototype.tryParseLeftAngleBracket = function() {
		return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !mc(this.peek() || 0)) ? (this.bump(), "<") : null;
	}, e.prototype.tryParseQuote = function(e) {
		if (this.isEOF() || this.char() !== 39) return null;
		switch (this.peek()) {
			case 39: return this.bump(), this.bump(), "'";
			case 123:
			case 60:
			case 62:
			case 125: break;
			case 35:
				if (e === "plural" || e === "selectordinal") break;
				return null;
			default: return null;
		}
		this.bump();
		var t = [this.char()];
		for (this.bump(); !this.isEOF();) {
			var n = this.char();
			if (n === 39) {
				if (this.peek() === 39) t.push(39), this.bump();
				else {
					this.bump();
					break;
				}
			} else t.push(n);
			this.bump();
		}
		return ic.apply(void 0, t);
	}, e.prototype.tryParseUnquoted = function(e, t) {
		if (this.isEOF()) return null;
		var n = this.char();
		return n === 60 || n === 123 || n === 35 && (t === "plural" || t === "selectordinal") || n === 125 && e > 0 ? null : (this.bump(), ic(n));
	}, e.prototype.parseArgument = function(e, t) {
		var n = this.clonePosition();
		if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(N.EXPECT_ARGUMENT_CLOSING_BRACE, F(n, this.clonePosition()));
		if (this.char() === 125) return this.bump(), this.error(N.EMPTY_ARGUMENT, F(n, this.clonePosition()));
		var r = this.parseIdentifierIfPossible().value;
		if (!r) return this.error(N.MALFORMED_ARGUMENT, F(n, this.clonePosition()));
		if (this.bumpSpace(), this.isEOF()) return this.error(N.EXPECT_ARGUMENT_CLOSING_BRACE, F(n, this.clonePosition()));
		switch (this.char()) {
			case 125: return this.bump(), {
				val: {
					type: P.argument,
					value: r,
					location: F(n, this.clonePosition())
				},
				err: null
			};
			case 44: return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(N.EXPECT_ARGUMENT_CLOSING_BRACE, F(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
			default: return this.error(N.MALFORMED_ARGUMENT, F(n, this.clonePosition()));
		}
	}, e.prototype.parseIdentifierIfPossible = function() {
		var e = this.clonePosition(), t = this.offset(), n = uc(this.message, t), r = t + n.length;
		return this.bumpTo(r), {
			value: n,
			location: F(e, this.clonePosition())
		};
	}, e.prototype.parseArgumentOptions = function(e, t, n, r) {
		var i = this.clonePosition(), a = this.parseIdentifierIfPossible().value, o = this.clonePosition();
		switch (a) {
			case "": return this.error(N.EXPECT_ARGUMENT_TYPE, F(i, o));
			case "number":
			case "date":
			case "time":
				this.bumpSpace();
				var s = null;
				if (this.bumpIf(",")) {
					this.bumpSpace();
					var c = this.clonePosition(), l = this.parseSimpleArgStyleIfPossible();
					if (l.err) return l;
					var u = cc(l.val);
					if (u.length === 0) return this.error(N.EXPECT_ARGUMENT_STYLE, F(this.clonePosition(), this.clonePosition()));
					s = {
						style: u,
						styleLocation: F(c, this.clonePosition())
					};
				}
				var d = this.tryParseArgumentClose(r);
				if (d.err) return d;
				var f = F(r, this.clonePosition());
				if (s && rc(s?.style, "::", 0)) {
					var p = sc(s.style.slice(2));
					if (a === "number") {
						var l = this.parseNumberSkeletonFromString(p, s.styleLocation);
						return l.err ? l : {
							val: {
								type: P.number,
								value: n,
								location: f,
								style: l.val
							},
							err: null
						};
					}
					if (p.length === 0) return this.error(N.EXPECT_DATE_TIME_SKELETON, f);
					var m = p;
					this.locale && (m = Gs(p, this.locale));
					var u = {
						type: _s.dateTime,
						pattern: m,
						location: s.styleLocation,
						parsedOptions: this.shouldParseSkeletons ? js(m) : {}
					};
					return {
						val: {
							type: a === "date" ? P.date : P.time,
							value: n,
							location: f,
							style: u
						},
						err: null
					};
				}
				return {
					val: {
						type: a === "number" ? P.number : a === "date" ? P.date : P.time,
						value: n,
						location: f,
						style: s?.style ?? null
					},
					err: null
				};
			case "plural":
			case "selectordinal":
			case "select":
				var h = this.clonePosition();
				if (this.bumpSpace(), !this.bumpIf(",")) return this.error(N.EXPECT_SELECT_ARGUMENT_OPTIONS, F(h, M({}, h)));
				this.bumpSpace();
				var g = this.parseIdentifierIfPossible(), _ = 0;
				if (a !== "select" && g.value === "offset") {
					if (!this.bumpIf(":")) return this.error(N.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, F(this.clonePosition(), this.clonePosition()));
					this.bumpSpace();
					var l = this.tryParseDecimalInteger(N.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, N.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
					if (l.err) return l;
					this.bumpSpace(), g = this.parseIdentifierIfPossible(), _ = l.val;
				}
				var v = this.tryParsePluralOrSelectOptions(e, a, t, g);
				if (v.err) return v;
				var d = this.tryParseArgumentClose(r);
				if (d.err) return d;
				var y = F(r, this.clonePosition());
				return a === "select" ? {
					val: {
						type: P.select,
						value: n,
						options: ac(v.val),
						location: y
					},
					err: null
				} : {
					val: {
						type: P.plural,
						value: n,
						options: ac(v.val),
						offset: _,
						pluralType: a === "plural" ? "cardinal" : "ordinal",
						location: y
					},
					err: null
				};
			default: return this.error(N.INVALID_ARGUMENT_TYPE, F(i, o));
		}
	}, e.prototype.tryParseArgumentClose = function(e) {
		return this.isEOF() || this.char() !== 125 ? this.error(N.EXPECT_ARGUMENT_CLOSING_BRACE, F(e, this.clonePosition())) : (this.bump(), {
			val: !0,
			err: null
		});
	}, e.prototype.parseSimpleArgStyleIfPossible = function() {
		for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
			case 39:
				this.bump();
				var n = this.clonePosition();
				if (!this.bumpUntil("'")) return this.error(N.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, F(n, this.clonePosition()));
				this.bump();
				break;
			case 123:
				e += 1, this.bump();
				break;
			case 125:
				if (e > 0) --e;
				else return {
					val: this.message.slice(t.offset, this.offset()),
					err: null
				};
				break;
			default: this.bump();
		}
		return {
			val: this.message.slice(t.offset, this.offset()),
			err: null
		};
	}, e.prototype.parseNumberSkeletonFromString = function(e, t) {
		var n = [];
		try {
			n = Ns(e);
		} catch {
			return this.error(N.INVALID_NUMBER_SKELETON, t);
		}
		return {
			val: {
				type: _s.number,
				tokens: n,
				location: t,
				parsedOptions: this.shouldParseSkeletons ? Us(n) : {}
			},
			err: null
		};
	}, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
		for (var i, a = !1, o = [], s = /* @__PURE__ */ new Set(), c = r.value, l = r.location;;) {
			if (c.length === 0) {
				var u = this.clonePosition();
				if (t !== "select" && this.bumpIf("=")) {
					var d = this.tryParseDecimalInteger(N.EXPECT_PLURAL_ARGUMENT_SELECTOR, N.INVALID_PLURAL_ARGUMENT_SELECTOR);
					if (d.err) return d;
					l = F(u, this.clonePosition()), c = this.message.slice(u.offset, this.offset());
				} else break;
			}
			if (s.has(c)) return this.error(t === "select" ? N.DUPLICATE_SELECT_ARGUMENT_SELECTOR : N.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
			c === "other" && (a = !0), this.bumpSpace();
			var f = this.clonePosition();
			if (!this.bumpIf("{")) return this.error(t === "select" ? N.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : N.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, F(this.clonePosition(), this.clonePosition()));
			var p = this.parseMessage(e + 1, t, n);
			if (p.err) return p;
			var m = this.tryParseArgumentClose(f);
			if (m.err) return m;
			o.push([c, {
				value: p.val,
				location: F(f, this.clonePosition())
			}]), s.add(c), this.bumpSpace(), i = this.parseIdentifierIfPossible(), c = i.value, l = i.location;
		}
		return o.length === 0 ? this.error(t === "select" ? N.EXPECT_SELECT_ARGUMENT_SELECTOR : N.EXPECT_PLURAL_ARGUMENT_SELECTOR, F(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(N.MISSING_OTHER_CLAUSE, F(this.clonePosition(), this.clonePosition())) : {
			val: o,
			err: null
		};
	}, e.prototype.tryParseDecimalInteger = function(e, t) {
		var n = 1, r = this.clonePosition();
		this.bumpIf("+") || this.bumpIf("-") && (n = -1);
		for (var i = !1, a = 0; !this.isEOF();) {
			var o = this.char();
			if (o >= 48 && o <= 57) i = !0, a = a * 10 + (o - 48), this.bump();
			else break;
		}
		var s = F(r, this.clonePosition());
		return i ? (a *= n, tc(a) ? {
			val: a,
			err: null
		} : this.error(t, s)) : this.error(e, s);
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
		var t = oc(this.message, e);
		if (t === void 0) throw Error(`Offset ${e} is at invalid UTF-16 code unit boundary`);
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
			e === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
		}
	}, e.prototype.bumpIf = function(e) {
		if (rc(this.message, e, this.offset())) {
			for (var t = 0; t < e.length; t++) this.bump();
			return !0;
		}
		return !1;
	}, e.prototype.bumpUntil = function(e) {
		var t = this.offset(), n = this.message.indexOf(e, t);
		return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1);
	}, e.prototype.bumpTo = function(e) {
		if (this.offset() > e) throw Error(`targetOffset ${e} must be greater than or equal to the current offset ${this.offset()}`);
		for (e = Math.min(e, this.message.length);;) {
			var t = this.offset();
			if (t === e) break;
			if (t > e) throw Error(`targetOffset ${e} is at invalid UTF-16 code unit boundary`);
			if (this.bump(), this.isEOF()) break;
		}
	}, e.prototype.bumpSpace = function() {
		for (; !this.isEOF() && gc(this.char());) this.bump();
	}, e.prototype.peek = function() {
		if (this.isEOF()) return null;
		var e = this.char(), t = this.offset();
		return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null;
	}, e;
}();
function pc(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function mc(e) {
	return pc(e) || e === 47;
}
function hc(e) {
	return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function gc(e) {
	return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function _c(e) {
	return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
gs();
function vc(e) {
	e.forEach(function(e) {
		if (delete e.location, Cs(e) || ws(e)) for (var t in e.options) delete e.options[t].location, vc(e.options[t].value);
		else bs(e) && Ds(e.style) || (xs(e) || Ss(e)) && Os(e.style) ? delete e.style.location : Es(e) && vc(e.children);
	});
}
function yc(e, t) {
	t === void 0 && (t = {}), t = M({
		shouldParseSkeletons: !0,
		requiresOtherClause: !0
	}, t);
	var n = new fc(e, t).parse();
	if (n.err) {
		var r = SyntaxError(N[n.err.kind]);
		throw r.location = n.err.location, r.originalMessage = n.err.message, r;
	}
	return t?.captureLocation || vc(n.val), n.val;
}
var bc = w(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.SKELETON_TYPE = e.TYPE = void 0, e.isLiteralElement = r, e.isArgumentElement = i, e.isNumberElement = a, e.isDateElement = o, e.isTimeElement = s, e.isSelectElement = c, e.isPluralElement = l, e.isPoundElement = u, e.isTagElement = d, e.isNumberSkeleton = f, e.isDateTimeSkeleton = p, e.createLiteralElement = m, e.createNumberElement = h;
	var t;
	(function(e) {
		e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
	})(t || (e.TYPE = t = {}));
	var n;
	(function(e) {
		e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
	})(n || (e.SKELETON_TYPE = n = {}));
	function r(e) {
		return e.type === t.literal;
	}
	function i(e) {
		return e.type === t.argument;
	}
	function a(e) {
		return e.type === t.number;
	}
	function o(e) {
		return e.type === t.date;
	}
	function s(e) {
		return e.type === t.time;
	}
	function c(e) {
		return e.type === t.select;
	}
	function l(e) {
		return e.type === t.plural;
	}
	function u(e) {
		return e.type === t.pound;
	}
	function d(e) {
		return e.type === t.tag;
	}
	function f(e) {
		return !!(e && typeof e == "object" && e.type === n.number);
	}
	function p(e) {
		return !!(e && typeof e == "object" && e.type === n.dateTime);
	}
	function m(e) {
		return {
			type: t.literal,
			value: e
		};
	}
	function h(e, n) {
		return {
			type: t.number,
			value: e,
			style: n
		};
	}
})), xc = w(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), gs(), re(No), bc();
})), Sc = bc();
xc();
function Cc({ icuString: e, shouldVisit: t, visitor: n, options: { recurseIntoVisited: r = !0, ...i } }) {
	let a = yc(e, i);
	return o(a), a;
	function o(e) {
		e.map(s);
	}
	function s(e) {
		let i = !1;
		t(e) && (n(e), i = !0), (!i || r) && (e.type === P.select || e.type === P.plural ? Object.values(e.options).map((e) => e.value).map(o) : e.type === P.tag && o(e.children));
	}
}
var wc = "_gt_";
RegExp(`^${wc}\\d+$`);
var Tc = RegExp(`^${wc}$`);
function Ec(e) {
	return e.type === Sc.TYPE.select && Tc.test(e.value) && !!e.options.other && (e.options.other.value.length === 0 || e.options.other.value.length > 0 && e.options.other.value[0]?.type === Sc.TYPE.literal);
}
function Dc(e) {
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
	Cc({
		icuString: e,
		shouldVisit: Ec,
		visitor: n,
		options: {
			recurseIntoVisited: !1,
			captureLocation: !0
		}
	});
	let r = [], i = 0;
	for (let n = 0; n < t.length; n++) {
		let { start: a, end: o, otherStart: s, otherEnd: c } = t[n];
		r.push(e.slice(i, a)), r.push(e.slice(a, a + 4 + 1)), r.push(String(n + 1)), r.push(e.slice(a + 4 + 1, s)), r.push("{}"), r.push(e.slice(c, o)), i = o;
	}
	return r.push(e.slice(i, e.length)), r.join("");
}
function Oc(e, t) {
	var n = t && t.cache ? t.cache : Rc, r = t && t.serializer ? t.serializer : Ic;
	return (t && t.strategy ? t.strategy : Nc)(e, {
		cache: n,
		serializer: r
	});
}
function kc(e) {
	return e == null || typeof e == "number" || typeof e == "boolean";
}
function Ac(e, t, n, r) {
	var i = kc(r) ? r : n(r), a = t.get(i);
	return a === void 0 && (a = e.call(this, r), t.set(i, a)), a;
}
function jc(e, t, n) {
	var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
	return a === void 0 && (a = e.apply(this, r), t.set(i, a)), a;
}
function Mc(e, t, n, r, i) {
	return n.bind(t, e, r, i);
}
function Nc(e, t) {
	var n = e.length === 1 ? Ac : jc;
	return Mc(e, this, n, t.cache.create(), t.serializer);
}
function Pc(e, t) {
	return Mc(e, this, jc, t.cache.create(), t.serializer);
}
function Fc(e, t) {
	return Mc(e, this, Ac, t.cache.create(), t.serializer);
}
var Ic = function() {
	return JSON.stringify(arguments);
}, Lc = function() {
	function e() {
		this.cache = Object.create(null);
	}
	return e.prototype.get = function(e) {
		return this.cache[e];
	}, e.prototype.set = function(e, t) {
		this.cache[e] = t;
	}, e;
}(), Rc = { create: function() {
	return new Lc();
} }, zc = {
	variadic: Pc,
	monadic: Fc
};
gs();
var Bc;
(function(e) {
	e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(Bc ||= {});
var Vc = function(e) {
	Po(t, e);
	function t(t, n, r) {
		var i = e.call(this, t) || this;
		return i.code = n, i.originalMessage = r, i;
	}
	return t.prototype.toString = function() {
		return `[formatjs Error: ${this.code}] ${this.message}`;
	}, t;
}(Error), Hc = function(e) {
	Po(t, e);
	function t(t, n, r, i) {
		return e.call(this, `Invalid values for "${t}": "${n}". Options are "${Object.keys(r).join("\", \"")}"`, Bc.INVALID_VALUE, i) || this;
	}
	return t;
}(Vc), Uc = function(e) {
	Po(t, e);
	function t(t, n, r) {
		return e.call(this, `Value for "${t}" must be of type ${n}`, Bc.INVALID_VALUE, r) || this;
	}
	return t;
}(Vc), Wc = function(e) {
	Po(t, e);
	function t(t, n) {
		return e.call(this, `The intl string context variable "${t}" was not provided to the string "${n}"`, Bc.MISSING_VALUE, n) || this;
	}
	return t;
}(Vc), I;
(function(e) {
	e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(I ||= {});
function Gc(e) {
	return e.length < 2 ? e : e.reduce(function(e, t) {
		var n = e[e.length - 1];
		return !n || n.type !== I.literal || t.type !== I.literal ? e.push(t) : n.value += t.value, e;
	}, []);
}
function Kc(e) {
	return typeof e == "function";
}
function qc(e, t, n, r, i, a, o) {
	if (e.length === 1 && vs(e[0])) return [{
		type: I.literal,
		value: e[0].value
	}];
	for (var s = [], c = 0, l = e; c < l.length; c++) {
		var u = l[c];
		if (vs(u)) {
			s.push({
				type: I.literal,
				value: u.value
			});
			continue;
		}
		if (Ts(u)) {
			typeof a == "number" && s.push({
				type: I.literal,
				value: n.getNumberFormat(t).format(a)
			});
			continue;
		}
		var d = u.value;
		if (!(i && d in i)) throw new Wc(d, o);
		var f = i[d];
		if (ys(u)) {
			(!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), s.push({
				type: typeof f == "string" ? I.literal : I.object,
				value: f
			});
			continue;
		}
		if (xs(u)) {
			var p = typeof u.style == "string" ? r.date[u.style] : Os(u.style) ? u.style.parsedOptions : void 0;
			s.push({
				type: I.literal,
				value: n.getDateTimeFormat(t, p).format(f)
			});
			continue;
		}
		if (Ss(u)) {
			var p = typeof u.style == "string" ? r.time[u.style] : Os(u.style) ? u.style.parsedOptions : r.time.medium;
			s.push({
				type: I.literal,
				value: n.getDateTimeFormat(t, p).format(f)
			});
			continue;
		}
		if (bs(u)) {
			var p = typeof u.style == "string" ? r.number[u.style] : Ds(u.style) ? u.style.parsedOptions : void 0;
			p && p.scale && (f *= p.scale || 1), s.push({
				type: I.literal,
				value: n.getNumberFormat(t, p).format(f)
			});
			continue;
		}
		if (Es(u)) {
			var m = u.children, h = u.value, g = i[h];
			if (!Kc(g)) throw new Uc(h, "function", o);
			var _ = g(qc(m, t, n, r, i, a).map(function(e) {
				return e.value;
			}));
			Array.isArray(_) || (_ = [_]), s.push.apply(s, _.map(function(e) {
				return {
					type: typeof e == "string" ? I.literal : I.object,
					value: e
				};
			}));
		}
		if (Cs(u)) {
			var v = u.options[f] || u.options.other;
			if (!v) throw new Hc(u.value, f, Object.keys(u.options), o);
			s.push.apply(s, qc(v.value, t, n, r, i));
			continue;
		}
		if (ws(u)) {
			var v = u.options[`=${f}`];
			if (!v) {
				if (!Intl.PluralRules) throw new Vc("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", Bc.MISSING_INTL_API, o);
				var y = n.getPluralRules(t, { type: u.pluralType }).select(f - (u.offset || 0));
				v = u.options[y] || u.options.other;
			}
			if (!v) throw new Hc(u.value, f, Object.keys(u.options), o);
			s.push.apply(s, qc(v.value, t, n, r, i, f - (u.offset || 0)));
			continue;
		}
	}
	return Gc(s);
}
gs();
function Jc(e, t) {
	return t ? M(M(M({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
		return n[r] = M(M({}, e[r]), t[r] || {}), n;
	}, {})) : e;
}
function Yc(e, t) {
	return t ? Object.keys(e).reduce(function(n, r) {
		return n[r] = Jc(e[r], t[r]), n;
	}, M({}, e)) : e;
}
function Xc(e) {
	return { create: function() {
		return {
			get: function(t) {
				return e[t];
			},
			set: function(t, n) {
				e[t] = n;
			}
		};
	} };
}
function Zc(e) {
	return e === void 0 && (e = {
		number: {},
		dateTime: {},
		pluralRules: {}
	}), {
		getNumberFormat: Oc(function() {
			for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return new ((e = Intl.NumberFormat).bind.apply(e, Xo([void 0], t, !1)))();
		}, {
			cache: Xc(e.number),
			strategy: zc.variadic
		}),
		getDateTimeFormat: Oc(function() {
			for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return new ((e = Intl.DateTimeFormat).bind.apply(e, Xo([void 0], t, !1)))();
		}, {
			cache: Xc(e.dateTime),
			strategy: zc.variadic
		}),
		getPluralRules: Oc(function() {
			for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return new ((e = Intl.PluralRules).bind.apply(e, Xo([void 0], t, !1)))();
		}, {
			cache: Xc(e.pluralRules),
			strategy: zc.variadic
		})
	};
}
var Qc = function() {
	function e(t, n, r, i) {
		n === void 0 && (n = e.defaultLocale);
		var a = this;
		if (this.formatterCache = {
			number: {},
			dateTime: {},
			pluralRules: {}
		}, this.format = function(e) {
			var t = a.formatToParts(e);
			if (t.length === 1) return t[0].value;
			var n = t.reduce(function(e, t) {
				return !e.length || t.type !== I.literal || typeof e[e.length - 1] != "string" ? e.push(t.value) : e[e.length - 1] += t.value, e;
			}, []);
			return n.length <= 1 ? n[0] || "" : n;
		}, this.formatToParts = function(e) {
			return qc(a.ast, a.locales, a.formatters, a.formats, e, void 0, a.message);
		}, this.resolvedOptions = function() {
			return { locale: a.resolvedLocale?.toString() || Intl.NumberFormat.supportedLocalesOf(a.locales)[0] };
		}, this.getAst = function() {
			return a.ast;
		}, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
			if (this.message = t, !e.__parse) throw TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
			var o = i || {};
			o.formatters;
			var s = Fo(o, ["formatters"]);
			this.ast = e.__parse(t, M(M({}, s), { locale: this.resolvedLocale }));
		} else this.ast = t;
		if (!Array.isArray(this.ast)) throw TypeError("A message must be provided as a String or AST.");
		this.formats = Yc(e.formats, r), this.formatters = i && i.formatters || Zc(this.formatterCache);
	}
	return Object.defineProperty(e, "defaultLocale", {
		get: function() {
			return e.memoizedDefaultLocale ||= new Intl.NumberFormat().resolvedOptions().locale, e.memoizedDefaultLocale;
		},
		enumerable: !1,
		configurable: !0
	}), e.memoizedDefaultLocale = null, e.resolveLocale = function(e) {
		if (Intl.Locale !== void 0) {
			var t = Intl.NumberFormat.supportedLocalesOf(e);
			return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale(typeof e == "string" ? e : e[0]);
		}
	}, e.__parse = yc, e.formats = {
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
	}, e;
}(), $c = [
	"Cham",
	"Jamo",
	"Kawi",
	"Lisu",
	"Toto",
	"Thai"
], el = (e) => e >= "qaa" && e <= "qtz", L = (e, t) => {
	t?.[e] && typeof t[e] == "object" && "code" in t[e] && t[e].code && (e = t[e].code);
	try {
		let { language: t, region: n, script: r } = j.get("Locale", e);
		return !(e.split("-").length !== (() => {
			let e = 1;
			return n && (e += 1), r && (e += 1), e;
		})() || j.get("DisplayNames", ["en"], { type: "language" }).of(t) === t && !el(t) || n && j.get("DisplayNames", ["en"], { type: "region" }).of(n) === n || r && j.get("DisplayNames", ["en"], { type: "script" }).of(r) === r && !$c.includes(r));
	} catch {
		return !1;
	}
}, R = (e) => {
	try {
		return Intl.getCanonicalLocales(e)[0];
	} catch {
		return e;
	}
};
function tl(e, t) {
	let { language: n, region: r, script: i } = j.get("Locale", e), { language: a, region: o, script: s } = j.get("Locale", t);
	return !(n !== a || r && o && r !== o || i && s && i !== s);
}
function nl(...e) {
	try {
		let t = e.flat().map(R);
		for (let e = 0; e < t.length; e++) for (let n = e + 1; n < t.length; n++) if (!tl(t[e], t[n])) return !1;
		return !0;
	} catch (e) {
		return console.error(e), !1;
	}
}
function rl(...e) {
	try {
		let t = e.flat().map((e) => j.get("Locale", e).language);
		return t.every((e) => e === t[0]);
	} catch (e) {
		return console.error(e), !1;
	}
}
function il(e, t, n, r) {
	return !(!L(e, r) || !L(t, r) || n && n.some((e) => !L(e, r)) || nl(e, t) || n && !n.some((e) => rl(t, e)));
}
var al = (e, t, n) => {
	if (e?.[t]) return typeof e[t] == "string" ? n === "name" ? e[t] : void 0 : e[t][n];
}, ol = (e, t) => !!(t?.[e] && typeof t[e] == "object" && "code" in t[e] && t[e].code && L(t[e].code));
function sl(e, t) {
	let n = e;
	t && ol(e, t) && (e = t[e].code);
	try {
		let r = R(e), i = j.get("Locale", r), { language: a, region: o } = i;
		if (t) for (let i of [
			n,
			e,
			r,
			a
		]) {
			let e = al(t, i, "emoji");
			if (e) return e;
		}
		let s = o && gl(o);
		if (s) return s;
		let c = i.maximize();
		return dl[c.language] || hl(c.region || "");
	} catch {
		return ul;
	}
}
var cl = "🌍", ll = "🌏", ul = cl, dl = {
	ca: cl,
	eu: cl,
	ku: cl,
	bo: ll,
	ug: ll,
	gd: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
	cy: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
	gv: "🇮🇲",
	grc: "🏺"
}, fl = {
	EU: "🇪🇺",
	419: "🌎"
}, pl = /* @__PURE__ */ new Set(/* @__PURE__ */ "AF.AX.AL.DZ.AS.AD.AO.AI.AQ.AG.AR.AM.AW.AU.AT.AZ.BS.BH.BD.BB.BY.BE.BZ.BJ.BM.BT.BO.BQ.BA.BW.BV.BR.IO.BN.BG.BF.BI.CV.KH.CM.CA.KY.CF.TD.CL.CN.CX.CC.CO.KM.CD.CG.CK.CR.CI.HR.CU.CW.CY.CZ.DK.DJ.DM.DO.EC.EG.SV.GQ.ER.EE.SZ.ET.FK.FO.FJ.FI.FR.GF.PF.TF.GA.GM.GE.DE.GH.GI.GR.GL.GD.GP.GU.GT.GG.GN.GW.GY.HT.HM.VA.HN.HK.HU.IS.IN.ID.IR.IQ.IE.IM.IL.IT.JM.JP.JE.JO.KZ.KE.KI.KP.KR.KW.KG.LA.LV.LB.LS.LR.LY.LI.LT.LU.MO.MG.MW.MY.MV.ML.MT.MH.MQ.MR.MU.YT.MX.FM.MD.MC.MN.ME.MS.MA.MZ.MM.NA.NR.NP.NL.NC.NZ.NI.NE.NG.NU.NF.MK.MP.NO.OM.PK.PW.PS.PA.PG.PY.PE.PH.PN.PL.PT.PR.QA.RE.RO.RU.RW.BL.SH.KN.LC.MF.PM.VC.WS.SM.ST.SA.SN.RS.SC.SL.SG.SX.SK.SI.SB.SO.ZA.GS.SS.ES.LK.SD.SR.SJ.SE.CH.SY.TW.TJ.TZ.TH.TL.TG.TK.TO.TT.TN.TR.TM.TC.TV.UG.UA.AE.GB.US.UM.UY.UZ.VU.VE.VN.VG.VI.WF.EH.YE.ZM.ZW".split(".")), ml = 127397;
function hl(e) {
	return gl(e) || "🌍";
}
function gl(e) {
	let t = e.toUpperCase(), n = fl[t];
	if (n) return n;
	if (pl.has(t)) return String.fromCodePoint(t.charCodeAt(0) + ml, t.charCodeAt(1) + ml);
}
function _l(e, t) {
	if (t) {
		let n = {};
		for (let r of e) {
			let e = t[r];
			e && (typeof e == "string" ? n.name ||= e : e && (n = {
				...e,
				...n
			}));
		}
		return n;
	}
}
function vl(e, t = "en", n) {
	let r = e;
	n && ol(e, n) && (e = n[e].code), t ||= "en";
	try {
		let i = R(e), a = j.get("Locale", e), o = a.language, s = _l([
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
		], g = j.get("DisplayNames", m, { type: "language" }), _ = j.get("DisplayNames", h, { type: "language" }), v = s?.name, y = s?.nativeName || s?.name, b = v || g.of(e) || e, x = y || _.of(e) || e, S = s?.maximizedName || v || g.of(u) || e, C = s?.nativeMaximizedName || y || _.of(u) || e, ee = s?.minimizedName || v || g.of(p) || e, te = s?.nativeMinimizedName || y || _.of(p) || e, w = s?.languageName || v || g.of(o) || e, T = s?.nativeLanguageName || y || _.of(o) || e, ne = s?.nameWithRegionCode || c ? `${w} (${c})` : b, re = s?.nativeNameWithRegionCode || (c ? `${T} (${c})` : x) || ne, ie = j.get("DisplayNames", m, { type: "region" }), ae = j.get("DisplayNames", h, { type: "region" }), oe = s?.regionName || (d ? ie.of(d) : "") || "", se = s?.nativeRegionName || (d ? ae.of(d) : "") || "", ce = j.get("DisplayNames", m, { type: "script" }), E = j.get("DisplayNames", h, { type: "script" });
		return {
			code: i,
			name: b,
			nativeName: x,
			maximizedCode: u,
			maximizedName: S,
			nativeMaximizedName: C,
			minimizedCode: p,
			minimizedName: ee,
			nativeMinimizedName: te,
			languageCode: o,
			languageName: w,
			nativeLanguageName: T,
			nameWithRegionCode: ne,
			nativeNameWithRegionCode: re,
			regionCode: d,
			regionName: oe,
			nativeRegionName: se,
			scriptCode: f,
			scriptName: s?.scriptName || (f ? ce.of(f) : "") || "",
			nativeScriptName: s?.nativeScriptName || (f ? E.of(f) : "") || "",
			emoji: s?.emoji || sl(i, n)
		};
	} catch {
		let t = L(e) ? R(e) : e, r = t?.split("-"), i = r?.[0] || t || "", a = r.length > 2 ? r?.[2] : r?.[1] || "", o = r?.[3] || "", s = _l([t, i], n);
		t = s?.code || t;
		let c = s?.name || t, l = s?.nativeName || c, u = s?.maximizedCode || t, d = s?.maximizedName || c, f = s?.nativeMaximizedName || l, p = s?.minimizedCode || t, m = s?.minimizedName || c, h = s?.nativeMinimizedName || l;
		i = s?.languageCode || i;
		let g = s?.languageName || c, _ = s?.nativeLanguageName || l;
		a = s?.regionCode || a;
		let v = s?.regionName || "", y = s?.nativeRegionName || "";
		o = s?.scriptCode || o;
		let b = s?.scriptName || "", x = s?.nativeScriptName || "", S = s?.nameWithRegionCode || (v ? `${g} (${v})` : c), C = s?.nativeNameWithRegionCode || (y ? `${_} (${y})` : l), ee = s?.emoji || "🌍";
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
			nameWithRegionCode: S,
			nativeNameWithRegionCode: C,
			regionCode: a,
			regionName: v,
			nativeRegionName: y,
			scriptCode: o,
			scriptName: b,
			nativeScriptName: x,
			emoji: ee
		};
	}
}
function yl(e, t, n) {
	typeof e == "string" && (e = [e]), e = e.filter((e) => L(e, n)).map(R), t = t.filter((e) => L(e, n)).map(R);
	for (let n of e) {
		let e = t.filter((e) => rl(n, e)), r = ({ locale: t, languageCode: n, minimizedCode: r, regionCode: i, scriptCode: a }) => {
			let o = [
				t,
				`${n}-${i}`,
				`${n}-${a}`,
				r
			];
			for (let t of o) if (e.includes(t)) return t;
			return null;
		}, { languageCode: i, ...a } = vl(n), o = r({
			locale: n,
			languageCode: i,
			...a
		}) || r({
			locale: i,
			...vl(i)
		});
		if (o) return o;
	}
}
var bl = {
	debug: 0,
	info: 1,
	warn: 2,
	error: 3,
	off: 4
}, xl = {
	debug: "\x1B[36m",
	info: "\x1B[32m",
	warn: "\x1B[33m",
	error: "\x1B[31m",
	off: ""
}, Sl = "\x1B[0m";
function Cl() {
	if (typeof process < "u" && process.env?._GT_LOG_LEVEL) {
		let e = process.env._GT_LOG_LEVEL.toLowerCase();
		if (e in bl) return e;
	}
	return "warn";
}
var wl = class {
	constructor(e) {
		this.config = e;
	}
	handle(e) {
		let t = [];
		this.config.includeTimestamp && t.push(`[${e.timestamp.toISOString()}]`);
		let n = xl[e.level], r = `[${e.level.toUpperCase()}]`;
		t.push(`${n}${r}${Sl}`), this.config.prefix && t.push(`[${this.config.prefix}]`), this.config.includeContext && e.context && t.push(`[${e.context}]`), t.push(e.message), e.metadata && Object.keys(e.metadata).length > 0 && t.push(`\n  Metadata: ${JSON.stringify(e.metadata, null, 2)}`);
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
}, Tl = class {
	constructor(e = {}) {
		this.config = {
			level: Cl(),
			includeTimestamp: !0,
			includeContext: !0,
			enableConsole: !0,
			handlers: [],
			...e
		}, this.handlers = [...this.config.handlers || []], this.config.enableConsole && this.handlers.push(new wl(this.config));
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
		return bl[e] >= bl[this.config.level];
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
		return new El(this, e);
	}
	getConfig() {
		return { ...this.config };
	}
}, El = class e {
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
}, Dl = new Tl({
	level: Cl(),
	includeTimestamp: !0,
	includeContext: !0,
	prefix: "GT"
}), Ol = Dl.child("fetch");
Dl.child("validation"), Dl.child("formatting"), Dl.child("locale");
var kl = Dl.child("GT instance");
function Al({ value: e, locales: t = "en", options: n = {} }) {
	return j.get("CutoffFormat", t, n).format(e);
}
function jl(e, t = "en", n = {}) {
	return new Qc(e, t).format(n)?.toString() ?? "";
}
function Ml(e) {
	return e;
}
function Nl({ value: e, locales: t = ["en"], options: n = {} }) {
	return j.get("NumberFormat", t, {
		numberingSystem: "latn",
		...n
	}).format(e);
}
function Pl({ value: e, locales: t = ["en"], options: n = {} }) {
	return j.get("DateTimeFormat", t, {
		calendar: "gregory",
		numberingSystem: "latn",
		...n
	}).format(e);
}
function Fl({ value: e, locales: t = ["en"], currency: n = "USD", options: r = {} }) {
	return j.get("NumberFormat", t, {
		style: "currency",
		currency: n,
		numberingSystem: "latn",
		...r
	}).format(e);
}
function Il({ value: e, locales: t = ["en"], options: n = {} }) {
	return j.get("ListFormat", t, {
		type: "conjunction",
		style: "long",
		...n
	}).format(e);
}
function Ll({ value: e, locales: t = ["en"], options: n = {} }) {
	let r = j.get("ListFormat", t, {
		type: "conjunction",
		style: "long",
		...n
	}).formatToParts(e.map(() => "1")), i = 0;
	return r.map((t) => t.type === "element" ? e[i++] : t.value);
}
function Rl(e, t) {
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
function zl({ date: e, baseDate: t, locales: n = ["en"], options: r = {} }) {
	let { value: i, unit: a } = Rl(e, t);
	return Bl({
		value: i,
		unit: a,
		locales: n,
		options: r
	});
}
function Bl({ value: e, unit: t, locales: n = ["en"], options: r = {} }) {
	return j.get("RelativeTimeFormat", n, {
		style: "long",
		numeric: "auto",
		...r
	}).format(e, t);
}
function Vl(e, t = "en", n) {
	let r = e;
	n && ol(e, n) && (e = n[e].code), t ||= "en";
	try {
		let i = R(e);
		if (n) for (let t of [
			r,
			e,
			i,
			j.get("Locale", i).language
		]) {
			let e = al(n, t, "name");
			if (e) return e;
		}
		return j.get("DisplayNames", [
			t,
			i,
			"en"
		], { type: "language" }).of(i) || "";
	} catch {
		return "";
	}
}
function Hl(e) {
	try {
		let t = Gl(j.get("Locale", e));
		if (t) return t;
	} catch {}
	let { scriptCode: t, languageCode: n } = vl(e);
	return t ? Kl(t) ? "rtl" : "ltr" : n && ql(n) ? "rtl" : "ltr";
}
var Ul = /* @__PURE__ */ new Set([
	"arab",
	"adlm",
	"hebr",
	"nkoo",
	"rohg",
	"samr",
	"syrc",
	"thaa",
	"yezi"
]), Wl = /* @__PURE__ */ new Set([
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
function Gl(e) {
	if ("textInfo" in e && typeof e.textInfo == "object" && e.textInfo !== null && "direction" in e.textInfo && (e.textInfo?.direction === "rtl" || e.textInfo?.direction === "ltr")) return e.textInfo?.direction;
}
function Kl(e) {
	return e ? Ul.has(e.toLowerCase()) : !1;
}
function ql(e) {
	return e ? Wl.has(e.toLowerCase()) : !1;
}
function Jl(e, t) {
	try {
		let { language: n, region: r, script: i } = j.get("Locale", R(e)), { language: a, region: o, script: s } = j.get("Locale", R(t));
		return !(n !== a || r && r !== o || i && i !== s);
	} catch (e) {
		return console.error(e), !1;
	}
}
function Yl(e, t) {
	let n;
	return t && (n = Object.fromEntries(Object.entries(t).filter(([, e]) => e && typeof e == "object" && "code" in e).map(([e, t]) => [t.code, e]))), n?.[e] || e;
}
function Xl(e, t) {
	return t && ol(e, t) ? t[e].code : e;
}
var Zl = class {
	constructor({ defaultLocale: e = "en", locales: t = [], customMapping: n } = {}) {
		this.defaultLocale = e, this.locales = t, this.customMapping = n;
	}
	get translationLocales() {
		return this.locales.length ? this.locales : void 0;
	}
	resolveCanonicalLocaleList(e) {
		return e.map((e) => this.resolveCanonicalLocale(e));
	}
	resolveCanonicalLocaleArgs(e) {
		return e.map((e) => Array.isArray(e) ? this.resolveCanonicalLocaleList(e) : this.resolveCanonicalLocale(e));
	}
	toLocaleList(e) {
		return Array.isArray(e) ? e : [e];
	}
	getFormattingLocales(e, t) {
		return (t === void 0 ? [
			e,
			this.defaultLocale,
			"en"
		] : this.toLocaleList(t)).filter((e) => !!e).map((e) => this.resolveCanonicalLocale(e));
	}
	formatNum(e, t, n = {}) {
		let { locales: r, ...i } = n;
		return Nl({
			value: e,
			locales: this.getFormattingLocales(t, r),
			options: i
		});
	}
	formatDateTime(e, t, n = {}) {
		let { locales: r, ...i } = n;
		return Pl({
			value: e,
			locales: this.getFormattingLocales(t, r),
			options: i
		});
	}
	formatCurrency(e, t, n, r = {}) {
		let { locales: i, ...a } = r;
		return Fl({
			value: e,
			currency: t,
			locales: this.getFormattingLocales(n, i),
			options: a
		});
	}
	formatRelativeTime(e, t, n, r = {}) {
		let { locales: i, ...a } = r;
		return Bl({
			value: e,
			unit: t,
			locales: this.getFormattingLocales(n, i),
			options: a
		});
	}
	formatRelativeTimeFromDate(e, t, n = {}) {
		let { locales: r, baseDate: i, ...a } = n;
		return zl({
			date: e,
			baseDate: i ?? /* @__PURE__ */ new Date(),
			locales: this.getFormattingLocales(t, r),
			options: a
		});
	}
	formatCutoff(e, t, n = {}) {
		let { locales: r, ...i } = n;
		return Al({
			value: e,
			locales: this.getFormattingLocales(t, r),
			options: i
		});
	}
	formatMessage(e, t, n = {}) {
		let { locales: r, variables: i, dataFormat: a } = n;
		return a === "STRING" ? Ml(e) : jl(e, this.getFormattingLocales(t, r), i);
	}
	formatList(e, t, n = {}) {
		let { locales: r, ...i } = n;
		return Il({
			value: e,
			locales: this.getFormattingLocales(t, r),
			options: i
		});
	}
	formatListToParts(e, t, n = {}) {
		let { locales: r, ...i } = n;
		return Ll({
			value: e,
			locales: this.getFormattingLocales(t, r),
			options: i
		});
	}
	getLocaleName(e) {
		return Vl(e, this.defaultLocale, this.customMapping);
	}
	getLocaleEmoji(e) {
		return sl(e, this.customMapping);
	}
	getLocaleProperties(e) {
		return vl(e, this.defaultLocale, this.customMapping);
	}
	requiresTranslation(e, t = this.defaultLocale, n = this.translationLocales) {
		return il(this.resolveCanonicalLocale(t), this.resolveCanonicalLocale(e), n ? this.resolveCanonicalLocaleList(n) : void 0, this.customMapping);
	}
	determineLocale(e, t = this.locales) {
		let n = t.map((e) => ({
			locale: e,
			canonicalLocale: this.resolveCanonicalLocale(e)
		})), r = yl(Array.isArray(e) ? this.resolveCanonicalLocaleList(e) : this.resolveCanonicalLocale(e), n.map(({ canonicalLocale: e }) => e), this.customMapping);
		if (r) return n.find(({ canonicalLocale: e }) => e === r)?.locale || this.resolveAliasLocale(r);
	}
	getLocaleDirection(e) {
		return Hl(this.resolveCanonicalLocale(e));
	}
	isValidLocale(e) {
		return L(e, this.customMapping);
	}
	resolveCanonicalLocale(e) {
		return Xl(e, this.customMapping);
	}
	resolveAliasLocale(e) {
		return Yl(e, this.customMapping);
	}
	standardizeLocale(e) {
		return R(e);
	}
	isSameDialect(...e) {
		return nl(...this.resolveCanonicalLocaleArgs(e));
	}
	isSameLanguage(...e) {
		return rl(...this.resolveCanonicalLocaleArgs(e));
	}
	isSupersetLocale(e, t) {
		return Jl(this.resolveCanonicalLocale(e), this.resolveCanonicalLocale(t));
	}
};
function Ql(e, t) {
	return L(e, t);
}
function $l(e, t) {
	return Xl(e, t);
}
function eu(e) {
	return R(e);
}
var tu = {
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
}, nu = class extends Error {
	constructor(e, t, n) {
		super(e), this.name = "ApiError", this.code = t, this.message = n;
	}
	getCode() {
		return this.code;
	}
	getMessage() {
		return this.message;
	}
};
function ru(e) {
	return vr(Ar(yr(e))).slice(0, 16);
}
function iu({ source: e, context: t, id: n, maxChars: r, dataFormat: i }, a = ru) {
	let o;
	return o = i === "JSX" ? ou(e) : e, a(jo({
		source: o,
		...n && { id: n },
		...t && { context: t },
		...r != null && { maxChars: Math.abs(r) },
		...i && { dataFormat: i }
	}));
}
var au = (e) => {
	if (e && typeof e == "object") {
		let t = {};
		if ("c" in e && e.c && (t.c = ou(e.c)), "d" in e) {
			let n = e?.d;
			n?.b && (t.b = Object.fromEntries(Object.entries(n.b).map(([e, t]) => [e, ou(t)]))), n?.t && (t.t = n.t);
		}
		return Mo(e) ? {
			k: e.k,
			...e.v && { v: e.v }
		} : t;
	}
	return e;
};
function ou(e) {
	return Array.isArray(e) ? e.map(au) : au(e);
}
var su = "GT Error:", cu = (e) => `${su} Translation request timed out after ${e}ms.`, lu = (e) => `${su} Translation request failed. Error: ${e}`, uu = (e, t, n) => `${su} API returned error status. Status: ${e}, Status Text: ${t}, Error: ${n}`, du = (e) => `${su} Cannot call \`${e}\` without a specified locale. Either pass a locale to the \`${e}\` function or specify a targetLocale in the GT constructor.`, fu = (e) => `${su} Cannot call \`${e}\` without a specified locale. Either pass a locale to the \`${e}\` function or specify a sourceLocale in the GT constructor.`, pu = (e) => `${su} Cannot call \`${e}\` without a specified project ID. Either pass a project ID to the \`${e}\` function or specify a projectId in the GT constructor.`, mu = (e) => `${su} Cannot call \`${e}\` without a specified API key. Either pass an API key to the \`${e}\` function or specify an apiKey in the GT constructor.`, hu = (e) => `${su} Invalid locale: ${e}.`, gu = (e) => `${su} Invalid locales: ${e.join(", ")}.`;
async function _u(e, t, n) {
	let r = new AbortController(), i = r.signal;
	n ||= _o;
	let a = n ? setTimeout(() => r.abort(), n) : null;
	try {
		return await fetch(e, {
			...t,
			signal: i
		});
	} catch (e) {
		throw e instanceof Error && e.name === "AbortError" ? cu(n) : e;
	} finally {
		a && clearTimeout(a);
	}
}
async function vu(e) {
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
		throw new nu(uu(e.status, e.statusText, t), e.status, t);
	}
}
function yu(e, t) {
	if (e instanceof Error && e.name === "AbortError") {
		let e = cu(t);
		throw Ol.error(e), Error(e);
	}
	let n = lu(e instanceof Error ? e.message : String(e));
	throw Ol.error(n), e;
}
var bu = "2026-03-06.v1";
function xu(e, t = !1) {
	let n = {
		...!t && { "Content-Type": "application/json" },
		"x-gt-project-id": e.projectId
	};
	return e.apiKey && (e.apiKey.startsWith("gtx-internal-") ? n["x-gt-internal-api-key"] = e.apiKey : n["x-gt-api-key"] = e.apiKey), n["gt-api-version"] = bu, n;
}
var Su = 3, Cu = 500;
function wu(e) {
	return new Promise((t) => setTimeout(t, e));
}
function Tu(e, t) {
	switch (e) {
		case "linear": return Cu * (t + 1);
		case "exponential": return Cu * 2 ** t;
		default: return 0;
	}
}
async function z(e, t, n) {
	let r = n?.timeout ?? 6e4, i = `${e.baseUrl || "https://api2.gtx.dev"}${t}`, a = n?.method ?? "POST", o = n?.retryPolicy ?? "exponential", s = o === "none" ? 0 : Su, c = {
		method: a,
		headers: xu(e)
	};
	n?.body !== void 0 && (c.body = JSON.stringify(n.body));
	for (let e = 0; e <= s; e++) {
		let t;
		try {
			t = await _u(i, c, r);
		} catch (t) {
			if (e < s) {
				await wu(Tu(o, e));
				continue;
			}
			yu(t, r);
		}
		if (t.status >= 500 && e < s) {
			await wu(Tu(o, e));
			continue;
		}
		return await vu(t), await t.json();
	}
	throw Error("Max retries exceeded");
}
async function Eu(e, t, n, r) {
	let i = Array.isArray(e), a = i ? [] : void 0, o = {}, s = i ? e.map((e) => [void 0, e]) : Object.entries(e);
	for (let [e, t] of s) {
		let { source: n, metadata: r } = typeof t == "string" ? { source: t } : t, i = e ?? r?.hash ?? iu({
			source: n,
			dataFormat: r?.dataFormat ?? "STRING",
			...r ?? {}
		});
		a?.push(i), o[i] = {
			source: n,
			metadata: r
		};
	}
	let c = await z({
		...n,
		baseUrl: n.baseUrl || "https://runtime2.gtx.dev"
	}, "/v2/translate", {
		body: {
			requests: o,
			targetLocale: t.targetLocale,
			sourceLocale: t.sourceLocale,
			metadata: t
		},
		timeout: r,
		retryPolicy: "none"
	});
	return a ? a.map((e) => c[e] ?? {
		success: !1,
		error: "No translation returned",
		code: 500
	}) : c;
}
async function Du(e, t, n) {
	return z(t, "/v2/project/setup/generate", {
		body: {
			files: e.map((e) => ({
				branchId: e.branchId,
				fileId: e.fileId,
				versionId: e.versionId
			})),
			locales: n?.locales,
			force: n?.force
		},
		timeout: n?.timeoutMs
	});
}
function Ou(e, t) {
	let n = [];
	for (let r = 0; r < e.length; r += t) n.push(e.slice(r, r + t));
	return n;
}
async function ku(e, t, n = {}) {
	let { batchSize: r = 100, parallel: i = !0 } = n;
	if (e.length === 0) return {
		data: [],
		count: 0,
		batchCount: 0
	};
	let a = Ou(e, r), o = [];
	if (i) {
		let e = await Promise.all(a.map((e) => t(e)));
		for (let t of e) t && o.push(...t);
	} else for (let e of a) {
		let n = await t(e);
		n && o.push(...n);
	}
	return {
		data: o,
		count: o.length,
		batchCount: a.length
	};
}
async function Au(e, t, n) {
	Do(e);
	let r = await ku(e, async (e) => {
		let r = await z(n, "/v2/project/translations/enqueue", {
			body: {
				files: e.map((e) => ({
					branchId: e.branchId,
					fileId: e.fileId,
					versionId: e.versionId,
					fileName: e.fileName,
					transformFormat: e.transformFormat
				})),
				targetLocales: t.targetLocales,
				sourceLocale: t.sourceLocale,
				requireApproval: t.requireApproval,
				modelProvider: t.modelProvider,
				force: t.force
			},
			timeout: t.timeout
		});
		return Array.from(Object.entries(r.jobData));
	}, { batchSize: 100 });
	return {
		jobData: Object.fromEntries(r.data.map(([e, t]) => [e, t])),
		locales: t.targetLocales,
		message: `Successfully enqueued ${r.count} file translation jobs in ${r.batchCount} batch(es)`
	};
}
async function ju(e, t) {
	return await z(t, "/v2/project/tags/create", { body: {
		tagId: e.tagId,
		files: e.files,
		...e.message && { message: e.message }
	} });
}
async function Mu(e, t, n) {
	return ku(e, async (e) => (await z(n, "/v2/project/files/download", {
		body: e,
		timeout: t.timeout
	})).files.map((e) => ({
		...e,
		data: ko(e.data)
	})), { batchSize: 100 });
}
async function Nu(e, t, n = {}) {
	return await ku(e.diffs, async (e) => (await z(t, "/v2/project/files/diffs", {
		body: { diffs: e },
		timeout: n.timeout
	}), [{ success: !0 }]), { batchSize: 100 }), { success: !0 };
}
function Pu(e, t = "en", n) {
	t ||= "en";
	try {
		return {
			code: e,
			name: j.get("DisplayNames", [t, "en"], { type: "region" }).of(e) || e,
			emoji: hl(e),
			...n?.[e]
		};
	} catch {
		return {
			code: e,
			name: e,
			emoji: ul,
			...n?.[e]
		};
	}
}
async function Fu(e, t, n) {
	return ku(e, async (e) => (await z(n, "/v2/project/files/upload-files", {
		body: {
			data: e.map(({ source: e }) => ({ source: {
				content: Oo(e.content),
				fileName: e.fileName,
				fileFormat: e.fileFormat,
				locale: e.locale,
				dataFormat: e.dataFormat,
				formatMetadata: e.formatMetadata,
				fileId: e.fileId,
				versionId: e.versionId,
				branchId: e.branchId,
				incomingBranchId: e.incomingBranchId,
				checkedOutBranchId: e.checkedOutBranchId
			} })),
			sourceLocale: t.sourceLocale
		},
		timeout: t.timeout
	})).uploadedFiles || [], { batchSize: 100 });
}
async function Iu(e, t, n) {
	return Do(e.map(({ source: e }) => e)), ku(e, async (e) => (await z(n, "/v2/project/files/upload-translations", {
		body: {
			data: e.map(({ source: e, translations: t }) => ({
				source: {
					content: Oo(e.content),
					fileName: e.fileName,
					fileFormat: e.fileFormat,
					transformFormat: e.transformFormat,
					locale: e.locale,
					dataFormat: e.dataFormat,
					formatMetadata: e.formatMetadata,
					fileId: e.fileId,
					versionId: e.versionId,
					branchId: e.branchId
				},
				translations: t.map((e) => ({
					content: Oo(e.content),
					fileName: e.fileName,
					fileFormat: e.fileFormat,
					locale: e.locale,
					dataFormat: e.dataFormat,
					fileId: e.fileId,
					versionId: e.versionId,
					branchId: e.branchId
				}))
			})),
			sourceLocale: t.sourceLocale
		},
		timeout: t.timeout
	})).uploadedFiles || [], { batchSize: 100 });
}
async function Lu(e, t, n) {
	let r = e.branchId, i = e.versionId, a = e.fileId, o = new URLSearchParams();
	return r && o.set("branchId", r), i && o.set("versionId", i), z(n, `/v2/project/translations/files/status/${encodeURIComponent(a)}?${o.toString()}`, {
		method: "GET",
		timeout: t.timeout
	});
}
async function Ru(e, t, n) {
	let { baseUrl: r } = n, i = t.timeout ? t.timeout : _o, a = `${r || "https://api2.gtx.dev"}/v2/project/info/${encodeURIComponent(e)}`, o;
	try {
		o = await _u(a, {
			method: "GET",
			headers: xu(n)
		}, i);
	} catch (e) {
		yu(e, i);
	}
	return await vu(o), await o.json();
}
async function zu(e, t, n) {
	return z(t, "/v2/project/jobs/info", {
		body: { jobIds: e },
		timeout: n
	});
}
async function Bu(e, t, n) {
	let r = (t?.pollingIntervalSeconds ?? 5) * 1e3, i = t?.timeoutSeconds === void 0 ? 6e5 : t.timeoutSeconds * 1e3, a = Object.keys(e.jobData);
	if (a.length === 0) return {
		complete: !0,
		jobs: []
	};
	let o = Date.now(), s = new Map(a.map((e) => [e, {
		jobId: e,
		status: "unknown"
	}])), c = new Set(a);
	for (; c.size > 0;) {
		let e = await zu(Array.from(c), n);
		for (let t of e) t.status === "completed" || t.status === "failed" || t.status === "unknown" ? (s.set(t.jobId, {
			jobId: t.jobId,
			status: t.status,
			...t.error ? { error: t.error } : {}
		}), c.delete(t.jobId)) : s.set(t.jobId, {
			jobId: t.jobId,
			status: t.status
		});
		if (c.size === 0 || Date.now() - o >= i) break;
		await new Promise((e) => setTimeout(e, r));
	}
	return {
		complete: c.size === 0,
		jobs: Array.from(s.values())
	};
}
async function Vu(e, t = {}, n) {
	return z(n, "/v2/project/files/info", {
		body: {
			sourceFiles: e.sourceFiles?.map((e) => ({
				fileId: e.fileId,
				versionId: e.versionId,
				branchId: e.branchId
			})),
			translatedFiles: e.translatedFiles?.map((e) => ({
				fileId: e.fileId,
				versionId: e.versionId,
				branchId: e.branchId,
				locale: e.locale
			}))
		},
		timeout: t.timeout
	});
}
async function Hu(e, t) {
	return z(t, "/v2/project/branches/info", { body: e });
}
async function Uu(e, t) {
	return z(t, "/v2/project/branches/create", { body: e });
}
async function Wu(e, t, n) {
	if (e.length === 0) return {
		results: [],
		summary: {
			total: 0,
			succeeded: 0,
			failed: 0
		}
	};
	let r = await ku(e, async (e) => (await z(n, "/v2/project/files/moves", {
		body: {
			branchId: t.branchId,
			moves: e
		},
		timeout: t.timeout
	})).results, { batchSize: 100 }), i = r.data.filter((e) => e.success).length, a = r.data.filter((e) => !e.success).length;
	return {
		results: r.data,
		summary: {
			total: e.length,
			succeeded: i,
			failed: a
		}
	};
}
async function Gu(e, t, n = {}, r) {
	let i = (t) => z(r, "/v2/project/files/orphaned", {
		body: {
			branchId: e,
			fileIds: t
		},
		timeout: n.timeout
	});
	if (t.length === 0) return i([]);
	let a = Ou(t, 100), o = await Promise.all(a.map((e) => i(e)));
	if (o.length === 1) return o[0];
	let s = /* @__PURE__ */ new Map();
	for (let e of o[0].orphanedFiles) s.set(e.fileId, e);
	for (let e = 1; e < o.length; e++) {
		let t = new Set(o[e].orphanedFiles.map((e) => e.fileId));
		Array.from(s.keys()).forEach((e) => {
			t.has(e) || s.delete(e);
		});
	}
	return { orphanedFiles: Array.from(s.values()) };
}
async function Ku(e, t) {
	return await z(t, "/v2/project/files/publish", { body: { files: e } });
}
var qu = class {
	get localeConfig() {
		return this._localeConfig;
	}
	constructor(e = {}) {
		typeof process < "u" && (this.apiKey ||= process.env?.GT_API_KEY, this.devApiKey ||= process.env?.GT_DEV_API_KEY, this.projectId ||= process.env?.GT_PROJECT_ID), this.setConfig(e);
	}
	setConfig({ apiKey: e, devApiKey: t, sourceLocale: n, targetLocale: r, locales: i, projectId: a, customMapping: o, baseUrl: s }) {
		if (e && (this.apiKey = e), t && (this.devApiKey = t), a && (this.projectId = a), n && (this.sourceLocale = R(n), !L(this.sourceLocale, o))) throw Error(hu(this.sourceLocale));
		if (r && (this.targetLocale = R(r), !L(this.targetLocale, o))) throw Error(hu(this.targetLocale));
		if (i) {
			let e = [], t = [];
			if (i.forEach((n) => {
				let r = R(n);
				L(r) ? e.push(r) : t.push(n);
			}), t.length > 0) throw Error(gu(t));
			this.locales = e;
		}
		s && (this.baseUrl = s), o && (this.customMapping = o, this.reverseCustomMapping = Object.fromEntries(Object.entries(o).filter(([, e]) => e && typeof e == "object" && "code" in e).map(([e, t]) => [t.code, e]))), this._localeConfig = new Zl({
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
			let n = mu(e);
			t.push(n);
		}
		if (!this.projectId) {
			let n = pu(e);
			t.push(n);
		}
		if (t.length) throw Error(t.join("\n"));
	}
	async queryBranchData(e) {
		return this._validateAuth("queryBranchData"), await Hu(e, this._getTranslationConfig());
	}
	async createBranch(e) {
		return this._validateAuth("createBranch"), await Uu(e, this._getTranslationConfig());
	}
	async processFileMoves(e, t = {}) {
		return this._validateAuth("processFileMoves"), await Wu(e, t, this._getTranslationConfig());
	}
	async getOrphanedFiles(e, t, n = {}) {
		return this._validateAuth("getOrphanedFiles"), await Gu(e, t, n, this._getTranslationConfig());
	}
	async setupProject(e, t) {
		return this._validateAuth("setupProject"), t = {
			...t,
			locales: t?.locales?.map((e) => this.resolveCanonicalLocale(e))
		}, await Du(e, this._getTranslationConfig(), t);
	}
	async checkJobStatus(e, t) {
		return this._validateAuth("checkJobStatus"), await zu(e, this._getTranslationConfig(), t);
	}
	async awaitJobs(e, t) {
		return this._validateAuth("awaitJobs"), await Bu(e, t, this._getTranslationConfig());
	}
	async enqueueFiles(e, t) {
		this._validateAuth("enqueueFiles");
		let n = {
			...t,
			sourceLocale: t.sourceLocale ?? this.sourceLocale,
			targetLocales: t.targetLocales ?? [this.targetLocale]
		};
		if (!n.sourceLocale) {
			let e = fu("enqueueFiles");
			throw kl.error(e), Error(e);
		}
		if (!n.targetLocales || n.targetLocales.length === 0) {
			let e = du("enqueueFiles");
			throw kl.error(e), Error(e);
		}
		return n = {
			...n,
			targetLocales: n.targetLocales.map((e) => this.resolveCanonicalLocale(e))
		}, await Au(e, n, this._getTranslationConfig());
	}
	async createTag(e) {
		return this._validateAuth("createTag"), await ju(e, this._getTranslationConfig());
	}
	async publishFiles(e) {
		return this._validateAuth("publishFiles"), await Ku(e, this._getTranslationConfig());
	}
	async submitUserEditDiffs(e) {
		this._validateAuth("submitUserEditDiffs"), await Nu({
			...e,
			diffs: (e.diffs || []).map((e) => ({
				...e,
				locale: this.resolveCanonicalLocale(e.locale)
			}))
		}, this._getTranslationConfig());
	}
	async queryFileData(e, t = {}) {
		this._validateAuth("queryFileData"), e.translatedFiles = e.translatedFiles?.map((e) => ({
			...e,
			locale: this.resolveCanonicalLocale(e.locale)
		}));
		let n = await Vu(e, t, this._getTranslationConfig());
		return n.translatedFiles = n.translatedFiles?.map((e) => ({
			...e,
			...e.locale && { locale: this.resolveAliasLocale(e.locale) }
		})), n.sourceFiles = n.sourceFiles?.map((e) => ({
			...e,
			...e.sourceLocale && { sourceLocale: this.resolveAliasLocale(e.sourceLocale) },
			locales: e.locales.map((e) => this.resolveAliasLocale(e))
		})), n;
	}
	async querySourceFile(e, t = {}) {
		this._validateAuth("querySourceFile");
		let n = await Lu(e, t, this._getTranslationConfig());
		return n.translations = n.translations.map((e) => ({
			...e,
			...e.locale && { locale: this.resolveAliasLocale(e.locale) }
		})), n.sourceFile.locales = n.sourceFile.locales.map((e) => this.resolveAliasLocale(e)), n.sourceFile.sourceLocale && (n.sourceFile.sourceLocale = this.resolveAliasLocale(n.sourceFile.sourceLocale)), n;
	}
	async getProjectData(e, t = {}) {
		this._validateAuth("getProjectData");
		let n = await Ru(e, t, this._getTranslationConfig());
		return n.currentLocales = n.currentLocales.map((e) => this.resolveAliasLocale(e)), n.defaultLocale = this.resolveAliasLocale(n.defaultLocale), n;
	}
	async downloadFile(e, t = {}) {
		return this._validateAuth("downloadTranslatedFile"), (await Mu([{
			fileId: e.fileId,
			branchId: e.branchId,
			locale: e.locale ? this.resolveCanonicalLocale(e.locale) : void 0,
			versionId: e.versionId,
			useLatestAvailableVersion: e.useLatestAvailableVersion
		}], t, this._getTranslationConfig())).data?.[0]?.data ?? "";
	}
	async downloadFileBatch(e, t = {}) {
		this._validateAuth("downloadFileBatch"), e = e.map((e) => ({
			...e,
			locale: e.locale ? this.resolveCanonicalLocale(e.locale) : void 0
		}));
		let n = await Mu(e, t, this._getTranslationConfig());
		return {
			files: n.data.map((e) => ({
				...e,
				...e.locale && { locale: this.resolveAliasLocale(e.locale) }
			})),
			count: n.count
		};
	}
	async translate(e, t, n) {
		typeof t == "string" && (t = { targetLocale: t }), this._validateAuth("translate");
		let r = t?.targetLocale || this.targetLocale;
		if (!r) {
			let e = du("translate");
			throw kl.error(e), Error(e);
		}
		r = this.resolveCanonicalLocale(r);
		let i = this.resolveCanonicalLocale(t?.sourceLocale || this.sourceLocale || "en");
		return (await Eu([e], {
			...t,
			targetLocale: r,
			sourceLocale: i
		}, this._getTranslationConfig(), n))[0];
	}
	async translateMany(e, t, n) {
		typeof t == "string" && (t = { targetLocale: t }), this._validateAuth("translateMany");
		let r = t?.targetLocale || this.targetLocale;
		if (!r) {
			let e = du("translateMany");
			throw kl.error(e), Error(e);
		}
		r = this.resolveCanonicalLocale(r);
		let i = this.resolveCanonicalLocale(t?.sourceLocale || this.sourceLocale || "en");
		return await Eu(e, {
			...t,
			targetLocale: r,
			sourceLocale: i
		}, this._getTranslationConfig(), n);
	}
	async uploadSourceFiles(e, t) {
		this._validateAuth("uploadSourceFiles");
		let n = {
			...t,
			sourceLocale: this.resolveCanonicalLocale(t.sourceLocale ?? this.sourceLocale ?? "en")
		};
		e = e.map((e) => ({
			...e,
			source: {
				...e.source,
				locale: this.resolveCanonicalLocale(e.source.locale)
			}
		}));
		let r = await Fu(e, n, this._getTranslationConfig());
		return {
			uploadedFiles: r.data,
			count: r.count,
			message: `Successfully uploaded ${r.count} files in ${r.batchCount} batch(es)`
		};
	}
	async uploadTranslations(e, t) {
		this._validateAuth("uploadTranslations");
		let n = {
			...t,
			sourceLocale: t.sourceLocale ?? this.sourceLocale
		};
		if (!n.sourceLocale) {
			let e = fu("uploadTranslations");
			throw kl.error(e), Error(e);
		}
		let r = await Iu(e.map((e) => ({
			...e,
			translations: e.translations.map((e) => ({
				...e,
				locale: this.resolveCanonicalLocale(e.locale)
			}))
		})), n, this._getTranslationConfig());
		return {
			uploadedFiles: r.data,
			count: r.count,
			message: `Successfully uploaded ${r.count} files in ${r.batchCount} batch(es)`
		};
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
		if (!e) throw Error(du("getLocaleName"));
		return this.localeConfig.getLocaleName(e);
	}
	getLocaleEmoji(e = this.targetLocale) {
		if (!e) throw Error(du("getLocaleEmoji"));
		return this.localeConfig.getLocaleEmoji(e);
	}
	getLocaleProperties(e = this.targetLocale) {
		if (!e) throw Error(du("getLocaleProperties"));
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
		return Pu(e, this.targetLocale, t);
	}
	requiresTranslation(e = this.sourceLocale, t = this.targetLocale, n = this.locales, r = this.customMapping) {
		if (!e) throw Error(fu("requiresTranslation"));
		if (!t) throw Error(du("requiresTranslation"));
		return r === this.customMapping ? this.localeConfig.requiresTranslation(t, e, n) : il(e, t, n, r);
	}
	determineLocale(e, t = this.locales || [], n = this.customMapping) {
		return n === this.customMapping ? this.localeConfig.determineLocale(e, t ?? []) : yl(e, t, n);
	}
	getLocaleDirection(e = this.targetLocale) {
		if (!e) throw Error(du("getLocaleDirection"));
		return this.localeConfig.getLocaleDirection(e);
	}
	isValidLocale(e = this.targetLocale, t = this.customMapping) {
		if (!e) throw Error(du("isValidLocale"));
		return t === this.customMapping ? this.localeConfig.isValidLocale(e) : L(e, t);
	}
	resolveCanonicalLocale(e = this.targetLocale, t = this.customMapping) {
		if (!e) throw Error(du("resolveCanonicalLocale"));
		return t === this.customMapping ? this.localeConfig.resolveCanonicalLocale(e) : Xl(e, t);
	}
	resolveAliasLocale(e, t = this.customMapping) {
		if (!e) throw Error(du("resolveAliasLocale"));
		return t === this.customMapping ? this.localeConfig.resolveAliasLocale(e) : Yl(e, t);
	}
	standardizeLocale(e = this.targetLocale) {
		if (!e) throw Error(du("standardizeLocale"));
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
};
function Ju(e, t, n) {
	return vl(e, t, n);
}
function Yu(e, t, n, r) {
	return il(e, t, n, r);
}
function Xu(e, t = [], n = void 0) {
	return yl(e, t, n);
}
function Zu(e, t) {
	return Yl(e, t);
}
function Qu(...e) {
	return rl(...e);
}
function $u(e, t = "", n = !0) {
	if (e.forEach((e) => {
		switch (e.type) {
			case "error":
				tu.error(t + e.message);
				break;
			case "warning": tu.warn(t + e.message);
		}
	}), n && e.some((e) => e.type === "error")) throw Error("Validation errors occurred");
}
function ed(e) {
	return e.loadTranslations ? "custom" : e.cacheUrl ? "remote" : (e.cacheUrl === void 0 || e.cacheUrl === "https://cdn.gtx.dev") && e.projectId ? "gt-remote" : "disabled";
}
function td(e) {
	let t = [], { projectId: n, loadTranslations: r } = e;
	switch (ed(e)) {
		case "remote":
		case "gt-remote":
			n || t.push({
				type: "warning",
				message: "projectId is required when loading translations from a remote store"
			});
			break;
		case "custom": r || t.push({
			type: "error",
			message: "loadTranslations is required when loading translations from a custom loader"
		});
	}
	return t;
}
function nd(e) {
	return (e.runtimeUrl === void 0 || e.runtimeUrl === "https://runtime2.gtx.dev") && e.projectId && (e.devApiKey || e.apiKey) ? "gt" : e.runtimeUrl ? "custom" : "disabled";
}
function rd(e) {
	let t = [];
	switch (nd(e)) {
		case "custom":
		case "gt": e.projectId || t.push({
			type: "warning",
			message: "projectId is required"
		}), !e.devApiKey && !e.apiKey && t.push({
			type: "warning",
			message: "devApiKey or apiKey is required"
		});
	}
	return t;
}
function id(e) {
	return ed(e) === "gt-remote" || nd(e) === "gt";
}
function ad(e) {
	let t = [];
	if (!id(e)) return t;
	let { defaultLocale: n, locales: r, customMapping: i } = e;
	return (/* @__PURE__ */ new Set([...n ? [n] : [], ...r || []])).forEach((e) => {
		Ql(e, i) || t.push({
			type: "error",
			message: `Invalid locale: ${e}`
		});
	}), t;
}
function od(e) {
	let t = [];
	return t.push(...td(e)), t.push(...rd(e)), t.push(...ad(e)), t;
}
var sd = class {}, cd = "fallback-storage-adapter", ld = class extends sd {
	constructor(...e) {
		super(...e), this.type = cd, this.storage = {};
	}
	getItem(e) {
		return this.storage[e];
	}
	setItem(e, t) {
		this.storage[e] = t;
	}
	removeItem(e) {
		delete this.storage[e];
	}
};
function ud(e, t) {
	return (n) => (r) => e.translateMany(r, { targetLocale: n }, t);
}
function dd(e) {
	let t = fd(e);
	return async (n) => {
		n = $l(n, e.customMapping);
		let r = t.replace("[locale]", n), i = await fetch(r);
		if (!i.ok) throw Error(`Failed to load translations from ${r}`);
		return await i.json();
	};
}
function fd(e) {
	let { cacheUrl: t = Co, projectId: n, _versionId: r, _branchId: i } = e, a = r ? `/${r}` : "", o = i ? `?branchId=${i}` : "";
	return `${t}/${n}/[locale]` + a + o;
}
function pd() {
	return async (e) => ({});
}
function md({ type: e, remoteTranslationLoaderParams: t, loadTranslations: n }) {
	e === "disabled" && tu.warn("I18nManager: No translation loader found. No translations will be loaded.");
	let { cacheUrl: r, projectId: i, _versionId: a, _branchId: o, customMapping: s } = t;
	switch (e) {
		case "remote":
		case "gt-remote": return dd({
			cacheUrl: r || "",
			projectId: i || "",
			_versionId: a,
			_branchId: o,
			customMapping: s
		});
		case "custom": return n;
		case "disabled": return pd();
	}
}
var hd = class {
	constructor(e, t) {
		this.cache = {}, this.fallbackPromises = {}, this.cache = structuredClone(e), this.onHit = t?.onHit, this.onMiss = t?.onMiss;
	}
	setCache(e, t) {
		this.cache[e] = t;
	}
	getCache(e) {
		let t = this.genKey(e);
		return this.cache[t];
	}
	getInternalCache() {
		return this.cache;
	}
	async missCache(e) {
		let t = this.genKey(e);
		if (this.fallbackPromises[t] !== void 0) return await this.fallbackPromises[t];
		let n = this.fallback(e);
		this.fallbackPromises[t] = n;
		try {
			let e = await n;
			return this.cache[t] = e, e;
		} finally {
			delete this.fallbackPromises[t];
		}
	}
};
function gd(e, t) {
	return iu({
		source: t.$format === "ICU" ? Dc(e) : e,
		...t?.$context && { context: t.$context },
		...t?.$id && { id: t.$id },
		..."$maxChars" in t && t.$maxChars != null && { maxChars: Math.abs(t.$maxChars) },
		dataFormat: t.$format
	});
}
var _d = 25, vd = 100, yd = 50, bd = class extends hd {
	constructor({ init: e, translateMany: t, lifecycle: n }) {
		super(e, n), this._queue = [], this._batchTimer = null, this._activeRequests = 0, this._translateMany = t;
	}
	get(e) {
		let t = this.getCache(e);
		return t != null && this.onHit && this.onHit({
			inputKey: e,
			cacheKey: this.genKey(e),
			cacheValue: t,
			outputValue: t
		}), t;
	}
	async miss(e) {
		let t = await this.missCache(e);
		return t != null && this.onMiss && this.onMiss({
			inputKey: e,
			cacheKey: this.genKey(e),
			cacheValue: t,
			outputValue: t
		}), t;
	}
	genKey(e) {
		return gd(e.message, e.options);
	}
	fallback(e) {
		let t = this._enqueueTranslation(e);
		return this._queue.length >= _d ? this._flushNow() : this._scheduleBatch(), t;
	}
	_flushNow() {
		this._batchTimer &&= (clearTimeout(this._batchTimer), null), this._drainQueue();
	}
	_scheduleBatch() {
		this._batchTimer ||= setTimeout(() => {
			this._batchTimer = null, this._drainQueue();
		}, yd);
	}
	_drainQueue() {
		for (; this._queue.length > 0 && this._activeRequests < vd;) {
			let e = this._queue.splice(0, _d);
			this._sendBatchRequest(e);
		}
		this._queue.length > 0 && this._scheduleBatch();
	}
	_enqueueTranslation(e) {
		let t = this.genKey(e), n = e.options;
		return new Promise((r, i) => {
			this._queue.push({
				key: t,
				source: e.message,
				metadata: {
					...n?.$context && { context: n.$context },
					...n?.$id && { id: n.$id },
					..."$maxChars" in n && n.$maxChars != null && { $maxChars: Math.abs(n.$maxChars) },
					dataFormat: n.$format
				},
				resolve: (e) => r(e),
				reject: i
			});
		});
	}
	async _sendBatchRequest(e) {
		this._activeRequests++;
		let t = xd(e), n = await this._sendBatchRequestWithErrorHandling(e, t);
		n && this._handleTranslationResponse(e, n), this._activeRequests--;
	}
	async _sendBatchRequestWithErrorHandling(e, t) {
		try {
			return await this._translateMany(t);
		} catch (t) {
			for (let n of e) n.reject(t);
			return;
		}
	}
	_handleTranslationResponse(e, t) {
		for (let n of e) {
			let { key: e } = n, r = t[e];
			if (r && r.success) {
				let t = r.translation;
				this.setCache(e, t), n.resolve(t);
			} else n.reject(r?.error);
		}
	}
};
function xd(e) {
	return e.reduce((e, t) => (e[t.key] = {
		source: t.source,
		metadata: t.metadata
	}, e), {});
}
var Sd = 6e4, Cd = class extends hd {
	constructor({ init: e = {}, ttl: t, loadTranslations: n, createTranslateMany: r, lifecycle: { onLocalesCacheHit: i, onLocalesCacheMiss: a, onTranslationsCacheHit: o, onTranslationsCacheMiss: s } }) {
		super(e, {
			onHit: i,
			onMiss: a
		}), this.ttl = Sd, this.ttl = t === null ? -1 : t ?? 6e4, this._translationLoader = n, this._createTranslateMany = r, this._onTranslationsCacheHit = o, this._onTranslationsCacheMiss = s;
	}
	get(e) {
		let t = this.getCache(e);
		if (!t || t.expiresAt > 0 && t.expiresAt < Date.now()) return;
		let n = t.translationsCache;
		return n != null && this.onHit && this.onHit({
			inputKey: e,
			cacheKey: this.genKey(e),
			cacheValue: t,
			outputValue: n
		}), n;
	}
	async miss(e) {
		let t = await this.missCache(e), n = t.translationsCache;
		return n != null && this.onMiss && this.onMiss({
			inputKey: e,
			cacheKey: this.genKey(e),
			cacheValue: t,
			outputValue: n
		}), n;
	}
	genKey(e) {
		return e;
	}
	async fallback(e) {
		let t = this._translationLoader(e), n = this.ttl < 0 ? this.ttl : Date.now() + this.ttl;
		return {
			translationsCache: new bd({
				init: await t,
				lifecycle: this._createTranslationsCacheLifecycle(e),
				translateMany: this._createTranslateMany(e)
			}),
			expiresAt: n
		};
	}
	_createTranslationsCacheLifecycle(e) {
		return {
			onHit: this._onTranslationsCacheHit ? (t) => this._onTranslationsCacheHit({
				locale: e,
				...t
			}) : void 0,
			onMiss: this._onTranslationsCacheMiss ? (t) => this._onTranslationsCacheMiss({
				locale: e,
				...t
			}) : void 0
		};
	}
};
function wd(e) {
	return {
		onLocalesCacheHit: (t) => {
			e("locales-cache-hit", {
				locale: t.inputKey,
				translations: t.outputValue.getInternalCache()
			});
		},
		onLocalesCacheMiss: (t) => {
			e("locales-cache-miss", {
				locale: t.inputKey,
				translations: t.outputValue.getInternalCache()
			});
		},
		onTranslationsCacheHit: (t) => {
			e("translations-cache-hit", {
				locale: t.locale,
				hash: t.cacheKey,
				translation: t.outputValue
			});
		},
		onTranslationsCacheMiss: (t) => {
			e("translations-cache-miss", {
				locale: t.locale,
				hash: t.cacheKey,
				translation: t.outputValue
			});
		}
	};
}
var Td = class {
	constructor() {
		this.listeners = {};
	}
	getOrCreateListeners(e) {
		return this.listeners[e] || (this.listeners[e] = /* @__PURE__ */ new Set()), this.listeners[e];
	}
	subscribe(e, t) {
		let n = this.getOrCreateListeners(e);
		return n.add(t), () => {
			n.delete(t);
		};
	}
	emit(e, t) {
		this.listeners[e]?.forEach((e) => e(t));
	}
};
function Ed({ onLocalesCacheHit: e, onLocalesCacheMiss: t, onTranslationsCacheHit: n, onTranslationsCacheMiss: r }, i) {
	e && i("locales-cache-hit", (t) => {
		e({
			...t,
			value: t.translations
		});
	}), t && i("locales-cache-miss", (e) => {
		t({
			...e,
			value: e.translations
		});
	}), n && i("translations-cache-hit", (e) => {
		n({
			...e,
			value: e.translation
		});
	}), r && i("translations-cache-miss", (e) => {
		r({
			...e,
			value: e.translation
		});
	});
}
var Dd = 12e3, Od = class extends Td {
	constructor(e) {
		super(), this.resolveTranslationSync = (e, t = {}) => this.lookupTranslation(e, t), $u(od(e), "I18nManager: "), this.config = kd(e), this.localeConfig = new Zl({
			defaultLocale: this.config.defaultLocale,
			locales: this.config.locales,
			customMapping: this.config.customMapping
		}), this.storeAdapter = e.storeAdapter ?? new ld();
		let t = Nd(e), n = ud(this.getGTClassClean(), Dd);
		Ed(e.lifecycle ?? {}, (...e) => this.subscribe(...e)), this.localesCache = new Cd({
			loadTranslations: t,
			createTranslateMany: n,
			lifecycle: wd((...e) => this.emit(...e))
		});
	}
	subscribeToTranslationsCacheMiss(e, t, n) {
		return this.subscribe("translations-cache-miss", (r) => {
			r.locale === t && r.hash === n && e(r);
		});
	}
	getAdapterType() {
		return this.storeAdapter.type;
	}
	getLocale() {
		return this.storeAdapter.getItem("locale") || (tu.warn("getLocale() invoked outside of translation context, falling back to default locale"), this.config.defaultLocale);
	}
	setLocale(e) {
		try {
			let t = this.resolveLocale(e), n = this.getLocale();
			this.storeAdapter.setItem("locale", t), this.emit("locale-update", {
				previousLocale: n,
				newLocale: t
			});
		} catch (e) {
			this.handleError(e);
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
		return (e) => this.loadTranslations(e);
	}
	async loadTranslations(e = this.getLocale()) {
		try {
			let t = this.resolveLocale(e);
			if (!this.requiresTranslation(t)) return {};
			let n = this.localesCache.get(t);
			return n ||= await this.localesCache.miss(t), n.getInternalCache();
		} catch (e) {
			return this.handleError(e), {};
		}
	}
	lookupTranslation(e, t = {}) {
		try {
			let { locale: n, options: r } = this.resolveLookupParams(t);
			if (!this.requiresTranslation(n)) return e;
			let i = this.localesCache.get(n);
			return i ? i.get({
				message: e,
				options: r
			}) : void 0;
		} catch (e) {
			this.handleError(e);
			return;
		}
	}
	async lookupTranslationWithFallback(e, t = {}) {
		try {
			let { locale: n, options: r } = this.resolveLookupParams(t);
			if (!this.requiresTranslation(n)) return e;
			let i = this.localesCache.get(n);
			i ||= await this.localesCache.miss(n);
			let a = i.get({
				message: e,
				options: r
			});
			return a ??= await i.miss({
				message: e,
				options: r
			}), a;
		} catch (e) {
			this.handleError(e);
			return;
		}
	}
	async getLookupTranslation(e = this.getLocale(), t = []) {
		try {
			let n = this.resolveLocale(e);
			if (!this.requiresTranslation(n)) return (e) => e;
			let r = Md(t, n, (e) => this.resolveLocale(e));
			r.length !== t.length && tu.warn(`I18nManager: getLookupTranslation(): prefetchEntries must all be the same locale, ignoring all entries that are not for ${n}`);
			let i = this.localesCache.get(n);
			return i ||= await this.localesCache.miss(n), i ? (await Promise.all(r.filter((e) => i.get(e) == null).map((e) => i.miss(e))), (e, t = {}) => i.get({
				message: e,
				options: this.resolveLookupOptions(t)
			})) : () => void 0;
		} catch (e) {
			return this.handleError(e), (e) => e;
		}
	}
	async getTranslations(e = this.getLocale()) {
		try {
			return this.loadTranslations(e);
		} catch (e) {
			return this.handleError(e), {};
		}
	}
	async getTranslationResolver(e = this.getLocale()) {
		return this.getLookupTranslation(e);
	}
	requiresTranslation(e = this.getLocale()) {
		let t = this.getDefaultLocale(), n = this.getLocales();
		return this.isTranslationEnabled() && this.localeConfig.requiresTranslation(e, t, n);
	}
	requiresDialectTranslation(e = this.getLocale()) {
		let t = this.getDefaultLocale();
		return this.requiresTranslation(e) && this.localeConfig.isSameLanguage(t, e);
	}
	handleError(e) {
		switch (this.config.environment) {
			case "development": throw e;
			default: tu.error("I18nManager: " + e);
		}
	}
	resolveLocale(e) {
		let t = this.localeConfig.determineLocale(e);
		if (!this.localeConfig.isValidLocale(e) || !t) throw Error(`I18nManager: validateLocale(): locale ${e} is not valid`);
		return t;
	}
	resolveLookupParams(e = {}) {
		let t = this.resolveLocale(e.$locale ?? this.getLocale());
		return {
			locale: t,
			options: this.resolveLookupOptions(e, t)
		};
	}
	resolveLookupOptions(e = {}, t) {
		return e.$locale ? {
			...e,
			$locale: t ?? this.resolveLocale(e.$locale)
		} : e;
	}
	getGTClassClean(e) {
		return new qu({
			sourceLocale: this.config.defaultLocale,
			targetLocale: e,
			locales: this.config.locales,
			customMapping: this.config.customMapping,
			projectId: this.config.projectId,
			baseUrl: this.config.runtimeUrl || void 0,
			apiKey: this.config.apiKey,
			devApiKey: this.config.devApiKey
		});
	}
};
function kd(e) {
	let t = id(e), n = Ad({
		defaultLocale: e.defaultLocale || "en",
		locales: e.locales || ["en"],
		customMapping: e.customMapping
	});
	return {
		environment: e.environment || "production",
		enableI18n: e.enableI18n === void 0 || e.enableI18n,
		projectId: e.projectId,
		devApiKey: e.devApiKey,
		apiKey: e.apiKey,
		runtimeUrl: e.runtimeUrl,
		_versionId: e._versionId,
		...t ? jd(n) : n
	};
}
function Ad({ defaultLocale: e, locales: t, customMapping: n }) {
	return {
		defaultLocale: e,
		locales: Array.from(/* @__PURE__ */ new Set([e, ...t])),
		customMapping: n || {}
	};
}
function jd(e) {
	return {
		defaultLocale: eu(e.defaultLocale),
		locales: e.locales.map((t) => (typeof e.customMapping?.[t] == "string" ? e.customMapping?.[t] : e.customMapping?.[t]?.code) ? t : eu(t)),
		customMapping: Object.fromEntries(Object.entries(e.customMapping || {}).map(([e, t]) => [e, typeof t == "string" ? eu(t) : {
			...t,
			...t.code ? { code: eu(t.code) } : {}
		}]))
	};
}
function Md(e, t, n) {
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
function Nd(e) {
	return md({
		loadTranslations: e.loadTranslations,
		type: ed(e),
		remoteTranslationLoaderParams: {
			cacheUrl: e.cacheUrl,
			projectId: e.projectId,
			_versionId: e._versionId,
			_branchId: e._branchId,
			customMapping: e.customMapping
		}
	});
}
var Pd = void 0;
function Fd() {
	return Pd ||= (tu.warn("getI18nManager(): Translation failed because I18nManager not initialized."), new Od({
		defaultLocale: "en",
		locales: ["en"]
	})), Pd;
}
function Id(e) {
	Pd = e;
}
var Ld = "DEFAULT_TERMINATOR_KEY", Rd = {
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
		[Ld]: {
			terminator: "…",
			separator: void 0
		}
	},
	none: { [Ld]: {
		terminator: void 0,
		separator: void 0
	} }
}, zd = {
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
				let t = e ? Array.isArray(e) ? e.map((e) => String(e)) : [String(e)] : ["en"], n = Intl.getCanonicalLocales(t);
				this.locale = n.length ? n[0] : "en";
			} catch {
				this.locale = "en";
			}
			if (!Rd[t.style ?? "ellipsis"]) throw Error(((e) => `generaltranslation Formatting Error: Invalid cutoff style: ${e}.`)(t.style ?? "ellipsis"));
			let n, r;
			if (t.maxChars !== void 0) {
				n = t.style ?? "ellipsis";
				let e = new Intl.Locale(this.locale).language;
				r = Rd[n][e] || Rd[n].DEFAULT_TERMINATOR_KEY;
			}
			let i = t.terminator ?? r?.terminator, a = i == null ? void 0 : t.separator ?? r?.separator;
			this.additionLength = (i?.length ?? 0) + (a?.length ?? 0), t.maxChars !== void 0 && Math.abs(t.maxChars) < this.additionLength && (i = void 0, a = void 0), this.options = {
				maxChars: t.maxChars,
				style: n,
				terminator: i,
				separator: a
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
	}
};
new class {
	constructor() {
		this.cache = {};
	}
	_generateKey(e, t = {}) {
		return `${e ? Array.isArray(e) ? e.map((e) => String(e)).join(",") : String(e) : "undefined"}:${t ? JSON.stringify(t, Object.keys(t).sort()) : "{}"}`;
	}
	get(e, ...t) {
		let [n = "en", r = {}] = t, i = this._generateKey(n, r), a = this.cache[e]?.[i];
		return a === void 0 && (a = new zd[e](...t), this.cache[e] || (this.cache[e] = {}), this.cache[e][i] = a), a;
	}
}();
function Bd(e, t, n = "") {
	let r = (i = e) instanceof Uint8Array || ArrayBuffer.isView(i) && i.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in i && i.BYTES_PER_ELEMENT === 1;
	var i;
	let a = e?.length;
	if (!r || t !== void 0) {
		let t = (n && `"${n}" `) + "expected Uint8Array, got " + (r ? `length=${a}` : "type=" + typeof e);
		throw r ? RangeError(t) : TypeError(t);
	}
	return e;
}
function Vd(e, t = !0) {
	if (e.destroyed) throw Error("Hash instance has been destroyed");
	if (t && e.finished) throw Error("Hash#digest() has already been called");
}
function Hd(...e) {
	for (let t = 0; t < e.length; t++) e[t].fill(0);
}
function Ud(e) {
	return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function Wd(e, t) {
	return e << 32 - t | e >>> t;
}
typeof Uint8Array.from([]).toHex == "function" && Uint8Array.fromHex, Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function Gd(e, t, n) {
	return e & t ^ ~e & n;
}
function Kd(e, t, n) {
	return e & t ^ e & n ^ t & n;
}
var qd = class {
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
		this.blockLen = e, this.outputLen = t, this.padOffset = n, this.isLE = r, this.buffer = new Uint8Array(e), this.view = Ud(this.buffer);
	}
	update(e) {
		Vd(this), Bd(e);
		let { view: t, buffer: n, blockLen: r } = this, i = e.length;
		for (let a = 0; a < i;) {
			let o = Math.min(r - this.pos, i - a);
			if (o === r) {
				let t = Ud(e);
				for (; r <= i - a; a += r) this.process(t, a);
				continue;
			}
			n.set(e.subarray(a, a + o), this.pos), this.pos += o, a += o, this.pos === r && (this.process(t, 0), this.pos = 0);
		}
		return this.length += e.length, this.roundClean(), this;
	}
	digestInto(e) {
		Vd(this), function(e, t) {
			Bd(e, void 0, "digestInto() output");
			let n = t.outputLen;
			if (e.length < n) throw RangeError("\"digestInto() output\" expected to be of length >=" + n);
		}(e, this), this.finished = !0;
		let { buffer: t, view: n, blockLen: r, isLE: i } = this, { pos: a } = this;
		t[a++] = 128, Hd(this.buffer.subarray(a)), this.padOffset > r - a && (this.process(n, 0), a = 0);
		for (let e = a; e < r; e++) t[e] = 0;
		n.setBigUint64(r - 8, BigInt(8 * this.length), i), this.process(n, 0);
		let o = Ud(e), s = this.outputLen;
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
}, Jd = Uint32Array.from([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]), Yd = Uint32Array.from([
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
]), Xd = /* @__PURE__ */ new Uint32Array(64), Zd = class extends qd {
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
		this.A = 0 | e, this.B = 0 | t, this.C = 0 | n, this.D = 0 | r, this.E = 0 | i, this.F = 0 | a, this.G = 0 | o, this.H = 0 | s;
	}
	process(e, t) {
		for (let n = 0; n < 16; n++, t += 4) Xd[n] = e.getUint32(t, !1);
		for (let e = 16; e < 64; e++) {
			let t = Xd[e - 15], n = Xd[e - 2], r = Wd(t, 7) ^ Wd(t, 18) ^ t >>> 3, i = Wd(n, 17) ^ Wd(n, 19) ^ n >>> 10;
			Xd[e] = i + Xd[e - 7] + r + Xd[e - 16] | 0;
		}
		let { A: n, B: r, C: i, D: a, E: o, F: s, G: c, H: l } = this;
		for (let e = 0; e < 64; e++) {
			let t = l + (Wd(o, 6) ^ Wd(o, 11) ^ Wd(o, 25)) + Gd(o, s, c) + Yd[e] + Xd[e] | 0, u = (Wd(n, 2) ^ Wd(n, 13) ^ Wd(n, 22)) + Kd(n, r, i) | 0;
			l = c, c = s, s = o, o = a + t | 0, a = i, i = r, r = n, n = t + u | 0;
		}
		n = n + this.A | 0, r = r + this.B | 0, i = i + this.C | 0, a = a + this.D | 0, o = o + this.E | 0, s = s + this.F | 0, c = c + this.G | 0, l = l + this.H | 0, this.set(n, r, i, a, o, s, c, l);
	}
	roundClean() {
		Hd(Xd);
	}
	destroy() {
		this.destroyed = !0, this.set(0, 0, 0, 0, 0, 0, 0, 0), Hd(this.buffer);
	}
}, Qd = class extends Zd {
	A = 0 | Jd[0];
	B = 0 | Jd[1];
	C = 0 | Jd[2];
	D = 0 | Jd[3];
	E = 0 | Jd[4];
	F = 0 | Jd[5];
	G = 0 | Jd[6];
	H = 0 | Jd[7];
	constructor() {
		super(32);
	}
};
(function(e, t = {}) {
	let n = (t, n) => e(n).update(t).digest(), r = e(void 0);
	return n.outputLen = r.outputLen, n.blockLen = r.blockLen, n.canXOF = r.canXOF, n.create = (t) => e(t), Object.assign(n, t), Object.freeze(n);
})(() => new Qd(), ($d = 1, { oid: Uint8Array.from([
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
	$d
]) }));
var $d, ef = function(e, t) {
	return ef = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	}, ef(e, t);
};
function tf(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	function n() {
		this.constructor = e;
	}
	ef(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var B = function() {
	return B = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, B.apply(this, arguments);
};
function nf(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") {
		var i = 0;
		for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	}
	return n;
}
function rf(e, t, n, r) {
	var i, a = arguments.length, o = a < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
	return a > 3 && o && Object.defineProperty(t, n, o), o;
}
function af(e, t) {
	return function(n, r) {
		t(n, r, e);
	};
}
function of(e, t, n, r, i, a) {
	function o(e) {
		if (e !== void 0 && typeof e != "function") throw TypeError("Function expected");
		return e;
	}
	for (var s, c = r.kind, l = c === "getter" ? "get" : c === "setter" ? "set" : "value", u = !t && e ? r.static ? e : e.prototype : null, d = t || (u ? Object.getOwnPropertyDescriptor(u, r.name) : {}), f = !1, p = n.length - 1; p >= 0; p--) {
		var m = {};
		for (var h in r) m[h] = h === "access" ? {} : r[h];
		for (var h in r.access) m.access[h] = r.access[h];
		m.addInitializer = function(e) {
			if (f) throw TypeError("Cannot add initializers after decoration has completed");
			a.push(o(e || null));
		};
		var g = (0, n[p])(c === "accessor" ? {
			get: d.get,
			set: d.set
		} : d[l], m);
		if (c === "accessor") {
			if (g === void 0) continue;
			if (typeof g != "object" || !g) throw TypeError("Object expected");
			(s = o(g.get)) && (d.get = s), (s = o(g.set)) && (d.set = s), (s = o(g.init)) && i.unshift(s);
		} else (s = o(g)) && (c === "field" ? i.unshift(s) : d[l] = s);
	}
	u && Object.defineProperty(u, r.name, d), f = !0;
}
function sf(e, t, n) {
	for (var r = arguments.length > 2, i = 0; i < t.length; i++) n = r ? t[i].call(e, n) : t[i].call(e);
	return r ? n : void 0;
}
function cf(e) {
	return typeof e == "symbol" ? e : `${e}`;
}
function lf(e, t, n) {
	return typeof t == "symbol" && (t = t.description ? `[${t.description}]` : ""), Object.defineProperty(e, "name", {
		configurable: !0,
		value: n ? `${n} ${t}` : t
	});
}
function uf(e, t) {
	if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, t);
}
function df(e, t, n, r) {
	return new (n ||= Promise)(function(i, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			var t;
			e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
				e(t);
			})).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}
function ff(e, t) {
	var n, r, i, a = {
		label: 0,
		sent: function() {
			if (1 & i[0]) throw i[1];
			return i[1];
		},
		trys: [],
		ops: []
	}, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
	return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
		return this;
	}), o;
	function s(s) {
		return function(c) {
			return function(s) {
				if (n) throw TypeError("Generator is already executing.");
				for (; o && (o = 0, s[0] && (a = 0)), a;) try {
					if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
					switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
						case 0:
						case 1:
							i = s;
							break;
						case 4: return a.label++, {
							value: s[1],
							done: !1
						};
						case 5:
							a.label++, r = s[1], s = [0];
							continue;
						case 7:
							s = a.ops.pop(), a.trys.pop();
							continue;
						default:
							if (!((i = (i = a.trys).length > 0 && i[i.length - 1]) || s[0] !== 6 && s[0] !== 2)) {
								a = 0;
								continue;
							}
							if (s[0] === 3 && (!i || s[1] > i[0] && s[1] < i[3])) {
								a.label = s[1];
								break;
							}
							if (s[0] === 6 && a.label < i[1]) {
								a.label = i[1], i = s;
								break;
							}
							if (i && a.label < i[2]) {
								a.label = i[2], a.ops.push(s);
								break;
							}
							i[2] && a.ops.pop(), a.trys.pop();
							continue;
					}
					s = t.call(e, a);
				} catch (e) {
					s = [6, e], r = 0;
				} finally {
					n = i = 0;
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
var pf = Object.create ? function(e, t, n, r) {
	r === void 0 && (r = n);
	var i = Object.getOwnPropertyDescriptor(t, n);
	i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
		enumerable: !0,
		get: function() {
			return t[n];
		}
	}), Object.defineProperty(e, r, i);
} : function(e, t, n, r) {
	r === void 0 && (r = n), e[r] = t[n];
};
function mf(e, t) {
	for (var n in e) n === "default" || Object.prototype.hasOwnProperty.call(t, n) || pf(t, e, n);
}
function hf(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function gf(e, t) {
	var n = typeof Symbol == "function" && e[Symbol.iterator];
	if (!n) return e;
	var r, i, a = n.call(e), o = [];
	try {
		for (; (t === void 0 || t-- > 0) && !(r = a.next()).done;) o.push(r.value);
	} catch (e) {
		i = { error: e };
	} finally {
		try {
			r && !r.done && (n = a.return) && n.call(a);
		} finally {
			if (i) throw i.error;
		}
	}
	return o;
}
function _f() {
	for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(gf(arguments[t]));
	return e;
}
function vf() {
	for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
	var r = Array(e), i = 0;
	for (t = 0; t < n; t++) for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
	return r;
}
function yf(e, t, n) {
	if (n || arguments.length === 2) for (var r, i = 0, a = t.length; i < a; i++) !r && i in t || (r ||= Array.prototype.slice.call(t, 0, i), r[i] = t[i]);
	return e.concat(r || Array.prototype.slice.call(t));
}
function bf(e) {
	return this instanceof bf ? (this.v = e, this) : new bf(e);
}
function xf(e, t, n) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var r, i = n.apply(e, t || []), a = [];
	return r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), o("next"), o("throw"), o("return", function(e) {
		return function(t) {
			return Promise.resolve(t).then(e, l);
		};
	}), r[Symbol.asyncIterator] = function() {
		return this;
	}, r;
	function o(e, t) {
		i[e] && (r[e] = function(t) {
			return new Promise(function(n, r) {
				a.push([
					e,
					t,
					n,
					r
				]) > 1 || s(e, t);
			});
		}, t && (r[e] = t(r[e])));
	}
	function s(e, t) {
		try {
			(n = i[e](t)).value instanceof bf ? Promise.resolve(n.value.v).then(c, l) : u(a[0][2], n);
		} catch (e) {
			u(a[0][3], e);
		}
		var n;
	}
	function c(e) {
		s("next", e);
	}
	function l(e) {
		s("throw", e);
	}
	function u(e, t) {
		e(t), a.shift(), a.length && s(a[0][0], a[0][1]);
	}
}
function Sf(e) {
	var t = {}, n;
	return r("next"), r("throw", function(e) {
		throw e;
	}), r("return"), t[Symbol.iterator] = function() {
		return this;
	}, t;
	function r(r, i) {
		t[r] = e[r] ? function(t) {
			return (n = !n) ? {
				value: bf(e[r](t)),
				done: !1
			} : i ? i(t) : t;
		} : i;
	}
}
function Cf(e) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var t, n = e[Symbol.asyncIterator];
	return n ? n.call(e) : (e = hf(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
		return this;
	}, t);
	function r(n) {
		t[n] = e[n] && function(t) {
			return new Promise(function(r, i) {
				(function(e, t, n, r) {
					Promise.resolve(r).then(function(t) {
						e({
							value: t,
							done: n
						});
					}, t);
				})(r, i, (t = e[n](t)).done, t.value);
			});
		};
	}
}
function wf(e, t) {
	return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
var Tf = Object.create ? function(e, t) {
	Object.defineProperty(e, "default", {
		enumerable: !0,
		value: t
	});
} : function(e, t) {
	e.default = t;
}, Ef = function(e) {
	return Ef = Object.getOwnPropertyNames || function(e) {
		var t = [];
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
		return t;
	}, Ef(e);
};
function Df(e) {
	if (e && e.__esModule) return e;
	var t = {};
	if (e != null) for (var n = Ef(e), r = 0; r < n.length; r++) n[r] !== "default" && pf(t, e, n[r]);
	return Tf(t, e), t;
}
function Of(e) {
	return e && e.__esModule ? e : { default: e };
}
function kf(e, t, n, r) {
	if (n === "a" && !r) throw TypeError("Private accessor was defined without a getter");
	if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
	return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function Af(e, t, n, r, i) {
	if (r === "m") throw TypeError("Private method is not writable");
	if (r === "a" && !i) throw TypeError("Private accessor was defined without a setter");
	if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
	return r === "a" ? i.call(e, n) : i ? i.value = n : t.set(e, n), n;
}
function jf(e, t) {
	if (t === null || typeof t != "object" && typeof t != "function") throw TypeError("Cannot use 'in' operator on non-object");
	return typeof e == "function" ? t === e : e.has(t);
}
function Mf(e, t, n) {
	if (t != null) {
		if (typeof t != "object" && typeof t != "function") throw TypeError("Object expected.");
		var r, i;
		if (n) {
			if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
			r = t[Symbol.asyncDispose];
		}
		if (r === void 0) {
			if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
			r = t[Symbol.dispose], n && (i = r);
		}
		if (typeof r != "function") throw TypeError("Object not disposable.");
		i && (r = function() {
			try {
				i.call(this);
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
var Nf = typeof SuppressedError == "function" ? SuppressedError : function(e, t, n) {
	var r = Error(n);
	return r.name = "SuppressedError", r.error = e, r.suppressed = t, r;
};
function Pf(e) {
	function t(t) {
		e.error = e.hasError ? new Nf(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
	}
	var n, r = 0;
	return function i() {
		for (; n = e.stack.pop();) try {
			if (!n.async && r === 1) return r = 0, e.stack.push(n), Promise.resolve().then(i);
			if (n.dispose) {
				var a = n.dispose.call(n.value);
				if (n.async) return r |= 2, Promise.resolve(a).then(i, function(e) {
					return t(e), i();
				});
			} else r |= 1;
		} catch (e) {
			t(e);
		}
		if (r === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
		if (e.hasError) throw e.error;
	}();
}
function Ff(e, t) {
	return typeof e == "string" && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, n, r, i, a) {
		return n ? t ? ".jsx" : ".js" : !r || i && a ? r + i + "." + a.toLowerCase() + "js" : e;
	}) : e;
}
var V, H, If, Lf = Object.freeze({
	__proto__: null,
	__addDisposableResource: Mf,
	get __assign() {
		return B;
	},
	__asyncDelegator: Sf,
	__asyncGenerator: xf,
	__asyncValues: Cf,
	__await: bf,
	__awaiter: df,
	__classPrivateFieldGet: kf,
	__classPrivateFieldIn: jf,
	__classPrivateFieldSet: Af,
	__createBinding: pf,
	__decorate: rf,
	__disposeResources: Pf,
	__esDecorate: of,
	__exportStar: mf,
	__extends: tf,
	__generator: ff,
	__importDefault: Of,
	__importStar: Df,
	__makeTemplateObject: wf,
	__metadata: uf,
	__param: af,
	__propKey: cf,
	__read: gf,
	__rest: nf,
	__rewriteRelativeImportExtension: Ff,
	__runInitializers: sf,
	__setFunctionName: lf,
	__spread: _f,
	__spreadArray: yf,
	__spreadArrays: vf,
	__values: hf,
	default: {
		__extends: tf,
		__assign: B,
		__rest: nf,
		__decorate: rf,
		__param: af,
		__esDecorate: of,
		__runInitializers: sf,
		__propKey: cf,
		__setFunctionName: lf,
		__metadata: uf,
		__awaiter: df,
		__generator: ff,
		__createBinding: pf,
		__exportStar: mf,
		__values: hf,
		__read: gf,
		__spread: _f,
		__spreadArrays: vf,
		__spreadArray: yf,
		__await: bf,
		__asyncGenerator: xf,
		__asyncDelegator: Sf,
		__asyncValues: Cf,
		__makeTemplateObject: wf,
		__importStar: Df,
		__importDefault: Of,
		__classPrivateFieldGet: kf,
		__classPrivateFieldSet: Af,
		__classPrivateFieldIn: jf,
		__addDisposableResource: Mf,
		__disposeResources: Pf,
		__rewriteRelativeImportExtension: Ff
	}
});
(function(e) {
	e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(V ||= {}), function(e) {
	e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
}(H ||= {}), function(e) {
	e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
}(If ||= {});
var Rf = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, zf = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Bf(e) {
	var t = {};
	return e.replace(zf, function(e) {
		var n = e.length;
		switch (e[0]) {
			case "G":
				t.era = n === 4 ? "long" : n === 5 ? "narrow" : "short";
				break;
			case "y":
				t.year = n === 2 ? "2-digit" : "numeric";
				break;
			case "Y":
			case "u":
			case "U":
			case "r": throw RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
			case "q":
			case "Q": throw RangeError("`q/Q` (quarter) patterns are not supported");
			case "M":
			case "L":
				t.month = [
					"numeric",
					"2-digit",
					"short",
					"long",
					"narrow"
				][n - 1];
				break;
			case "w":
			case "W": throw RangeError("`w/W` (week) patterns are not supported");
			case "d":
				t.day = ["numeric", "2-digit"][n - 1];
				break;
			case "D":
			case "F":
			case "g": throw RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
			case "E":
				t.weekday = n === 4 ? "long" : n === 5 ? "narrow" : "short";
				break;
			case "e":
				if (n < 4) throw RangeError("`e..eee` (weekday) patterns are not supported");
				t.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][n - 4];
				break;
			case "c":
				if (n < 4) throw RangeError("`c..ccc` (weekday) patterns are not supported");
				t.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][n - 4];
				break;
			case "a":
				t.hour12 = !0;
				break;
			case "b":
			case "B": throw RangeError("`b/B` (period) patterns are not supported, use `a` instead");
			case "h":
				t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "H":
				t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "K":
				t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "k":
				t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "j":
			case "J":
			case "C": throw RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
			case "m":
				t.minute = ["numeric", "2-digit"][n - 1];
				break;
			case "s":
				t.second = ["numeric", "2-digit"][n - 1];
				break;
			case "S":
			case "A": throw RangeError("`S/A` (second) patterns are not supported, use `s` instead");
			case "z":
				t.timeZoneName = n < 4 ? "short" : "long";
				break;
			case "Z":
			case "O":
			case "v":
			case "V":
			case "X":
			case "x": throw RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
		}
		return "";
	}), t;
}
var Vf = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Hf(e) {
	return e.replace(/^(.*?)-/, "");
}
var Uf = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Wf = /^(@+)?(\+|#+)?[rs]?$/g, Gf = /(\*)(0+)|(#+)(0+)|(0+)/g, Kf = /^(0+)$/;
function qf(e) {
	var t = {};
	return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Wf, function(e, n, r) {
		return typeof r == "string" ? r === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof r == "string" ? r.length : 0)) : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length), "";
	}), t;
}
function Jf(e) {
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
function Yf(e) {
	var t;
	if (e[0] === "E" && e[1] === "E" ? (t = { notation: "engineering" }, e = e.slice(2)) : e[0] === "E" && (t = { notation: "scientific" }, e = e.slice(1)), t) {
		var n = e.slice(0, 2);
		if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Kf.test(e)) throw Error("Malformed concise eng/scientific notation");
		t.minimumIntegerDigits = e.length;
	}
	return t;
}
function Xf(e) {
	return Jf(e) || {};
}
function Zf(e) {
	for (var t = {}, n = 0, r = e; n < r.length; n++) {
		var i = r[n];
		switch (i.stem) {
			case "percent":
			case "%":
				t.style = "percent";
				continue;
			case "%x100":
				t.style = "percent", t.scale = 100;
				continue;
			case "currency":
				t.style = "currency", t.currency = i.options[0];
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
				t.style = "unit", t.unit = Hf(i.options[0]);
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
				t = B(B(B({}, t), { notation: "scientific" }), i.options.reduce(function(e, t) {
					return B(B({}, e), Xf(t));
				}, {}));
				continue;
			case "engineering":
				t = B(B(B({}, t), { notation: "engineering" }), i.options.reduce(function(e, t) {
					return B(B({}, e), Xf(t));
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
				t.scale = parseFloat(i.options[0]);
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
				if (i.options.length > 1) throw RangeError("integer-width stems only accept a single optional option");
				i.options[0].replace(Gf, function(e, n, r, i, a, o) {
					if (n) t.minimumIntegerDigits = r.length;
					else {
						if (i && a) throw Error("We currently do not support maximum integer digits");
						if (o) throw Error("We currently do not support exact integer digits");
					}
					return "";
				});
				continue;
		}
		if (Kf.test(i.stem)) t.minimumIntegerDigits = i.stem.length;
		else if (Uf.test(i.stem)) {
			if (i.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
			i.stem.replace(Uf, function(e, n, r, i, a, o) {
				return r === "*" ? t.minimumFractionDigits = n.length : i && i[0] === "#" ? t.maximumFractionDigits = i.length : a && o ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + o.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), "";
			});
			var a = i.options[0];
			a === "w" ? t = B(B({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = B(B({}, t), qf(a)));
		} else if (Wf.test(i.stem)) t = B(B({}, t), qf(i.stem));
		else {
			var o = Jf(i.stem);
			o && (t = B(B({}, t), o));
			var s = Yf(i.stem);
			s && (t = B(B({}, t), s));
		}
	}
	return t;
}
var Qf = {
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
function $f(e) {
	var t = e.hourCycle;
	if (t === void 0 && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
		case "h24": return "k";
		case "h23": return "H";
		case "h12": return "h";
		case "h11": return "K";
		default: throw Error("Invalid hourCycle");
	}
	var n, r = e.language;
	return r !== "root" && (n = e.maximize().region), (Qf[n || ""] || Qf[r || ""] || Qf[`${r}-001`] || Qf["001"])[0];
}
var ep = RegExp(`^${Rf.source}*`), tp = RegExp(`${Rf.source}*\$`);
function U(e, t) {
	return {
		start: e,
		end: t
	};
}
var np = !!String.prototype.startsWith && "_a".startsWith("a", 1), rp = !!String.fromCodePoint, ip = !!Object.fromEntries, ap = !!String.prototype.codePointAt, op = !!String.prototype.trimStart, sp = !!String.prototype.trimEnd, cp = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
	return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, lp = !0;
try {
	lp = _p("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")?.[0] === "a";
} catch {
	lp = !1;
}
var up, dp = np ? function(e, t, n) {
	return e.startsWith(t, n);
} : function(e, t, n) {
	return e.slice(n, n + t.length) === t;
}, fp = rp ? String.fromCodePoint : function() {
	for (var e = [...arguments], t, n = "", r = e.length, i = 0; r > i;) {
		if ((t = e[i++]) > 1114111) throw RangeError(t + " is not a valid code point");
		n += t < 65536 ? String.fromCharCode(t) : String.fromCharCode(55296 + ((t -= 65536) >> 10), t % 1024 + 56320);
	}
	return n;
}, pp = ip ? Object.fromEntries : function(e) {
	for (var t = {}, n = 0, r = e; n < r.length; n++) {
		var i = r[n], a = i[0];
		t[a] = i[1];
	}
	return t;
}, mp = ap ? function(e, t) {
	return e.codePointAt(t);
} : function(e, t) {
	var n = e.length;
	if (!(t < 0 || t >= n)) {
		var r, i = e.charCodeAt(t);
		return i < 55296 || i > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? i : r - 56320 + (i - 55296 << 10) + 65536;
	}
}, hp = op ? function(e) {
	return e.trimStart();
} : function(e) {
	return e.replace(ep, "");
}, gp = sp ? function(e) {
	return e.trimEnd();
} : function(e) {
	return e.replace(tp, "");
};
function _p(e, t) {
	return new RegExp(e, t);
}
if (lp) {
	var vp = _p("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
	up = function(e, t) {
		return vp.lastIndex = t, vp.exec(e)[1] ?? "";
	};
} else up = function(e, t) {
	for (var n = [];;) {
		var r = mp(e, t);
		if (r === void 0 || xp(r) || Sp(r)) break;
		n.push(r), t += r >= 65536 ? 2 : 1;
	}
	return fp.apply(void 0, n);
};
(function() {
	function e(e, t) {
		t === void 0 && (t = {}), this.message = e, this.position = {
			offset: 0,
			line: 1,
			column: 1
		}, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons;
	}
	return e.prototype.parse = function() {
		if (this.offset() !== 0) throw Error("parser can only be used once");
		return this.parseMessage(0, "", !1);
	}, e.prototype.parseMessage = function(e, t, n) {
		for (var r = []; !this.isEOF();) {
			var i = this.char();
			if (i === 123) {
				if ((a = this.parseArgument(e, n)).err) return a;
				r.push(a.val);
			} else {
				if (i === 125 && e > 0) break;
				if (i !== 35 || t !== "plural" && t !== "selectordinal") {
					if (i === 60 && !this.ignoreTag && this.peek() === 47) {
						if (n) break;
						return this.error(V.UNMATCHED_CLOSING_TAG, U(this.clonePosition(), this.clonePosition()));
					}
					if (i === 60 && !this.ignoreTag && yp(this.peek() || 0)) {
						if ((a = this.parseTag(e, t)).err) return a;
						r.push(a.val);
					} else {
						var a;
						if ((a = this.parseLiteral(e, t)).err) return a;
						r.push(a.val);
					}
				} else {
					var o = this.clonePosition();
					this.bump(), r.push({
						type: H.pound,
						location: U(o, this.clonePosition())
					});
				}
			}
		}
		return {
			val: r,
			err: null
		};
	}, e.prototype.parseTag = function(e, t) {
		var n = this.clonePosition();
		this.bump();
		var r = this.parseTagName();
		if (this.bumpSpace(), this.bumpIf("/>")) return {
			val: {
				type: H.literal,
				value: `<${r}/>`,
				location: U(n, this.clonePosition())
			},
			err: null
		};
		if (this.bumpIf(">")) {
			var i = this.parseMessage(e + 1, t, !0);
			if (i.err) return i;
			var a = i.val, o = this.clonePosition();
			if (this.bumpIf("</")) {
				if (this.isEOF() || !yp(this.char())) return this.error(V.INVALID_TAG, U(o, this.clonePosition()));
				var s = this.clonePosition();
				return r === this.parseTagName() ? (this.bumpSpace(), this.bumpIf(">") ? {
					val: {
						type: H.tag,
						value: r,
						children: a,
						location: U(n, this.clonePosition())
					},
					err: null
				} : this.error(V.INVALID_TAG, U(o, this.clonePosition()))) : this.error(V.UNMATCHED_CLOSING_TAG, U(s, this.clonePosition()));
			}
			return this.error(V.UNCLOSED_TAG, U(n, this.clonePosition()));
		}
		return this.error(V.INVALID_TAG, U(n, this.clonePosition()));
	}, e.prototype.parseTagName = function() {
		var e = this.offset();
		for (this.bump(); !this.isEOF() && bp(this.char());) this.bump();
		return this.message.slice(e, this.offset());
	}, e.prototype.parseLiteral = function(e, t) {
		for (var n = this.clonePosition(), r = "";;) {
			var i = this.tryParseQuote(t);
			if (i) r += i;
			else {
				var a = this.tryParseUnquoted(e, t);
				if (a) r += a;
				else {
					var o = this.tryParseLeftAngleBracket();
					if (!o) break;
					r += o;
				}
			}
		}
		var s = U(n, this.clonePosition());
		return {
			val: {
				type: H.literal,
				value: r,
				location: s
			},
			err: null
		};
	}, e.prototype.tryParseLeftAngleBracket = function() {
		return this.isEOF() || this.char() !== 60 || !this.ignoreTag && (yp(e = this.peek() || 0) || e === 47) ? null : (this.bump(), "<");
		var e;
	}, e.prototype.tryParseQuote = function(e) {
		if (this.isEOF() || this.char() !== 39) return null;
		switch (this.peek()) {
			case 39: return this.bump(), this.bump(), "'";
			case 123:
			case 60:
			case 62:
			case 125: break;
			case 35:
				if (e === "plural" || e === "selectordinal") break;
				return null;
			default: return null;
		}
		this.bump();
		var t = [this.char()];
		for (this.bump(); !this.isEOF();) {
			var n = this.char();
			if (n === 39) {
				if (this.peek() !== 39) {
					this.bump();
					break;
				}
				t.push(39), this.bump();
			} else t.push(n);
			this.bump();
		}
		return fp.apply(void 0, t);
	}, e.prototype.tryParseUnquoted = function(e, t) {
		if (this.isEOF()) return null;
		var n = this.char();
		return n === 60 || n === 123 || n === 35 && (t === "plural" || t === "selectordinal") || n === 125 && e > 0 ? null : (this.bump(), fp(n));
	}, e.prototype.parseArgument = function(e, t) {
		var n = this.clonePosition();
		if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(V.EXPECT_ARGUMENT_CLOSING_BRACE, U(n, this.clonePosition()));
		if (this.char() === 125) return this.bump(), this.error(V.EMPTY_ARGUMENT, U(n, this.clonePosition()));
		var r = this.parseIdentifierIfPossible().value;
		if (!r) return this.error(V.MALFORMED_ARGUMENT, U(n, this.clonePosition()));
		if (this.bumpSpace(), this.isEOF()) return this.error(V.EXPECT_ARGUMENT_CLOSING_BRACE, U(n, this.clonePosition()));
		switch (this.char()) {
			case 125: return this.bump(), {
				val: {
					type: H.argument,
					value: r,
					location: U(n, this.clonePosition())
				},
				err: null
			};
			case 44: return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(V.EXPECT_ARGUMENT_CLOSING_BRACE, U(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
			default: return this.error(V.MALFORMED_ARGUMENT, U(n, this.clonePosition()));
		}
	}, e.prototype.parseIdentifierIfPossible = function() {
		var e = this.clonePosition(), t = this.offset(), n = up(this.message, t), r = t + n.length;
		return this.bumpTo(r), {
			value: n,
			location: U(e, this.clonePosition())
		};
	}, e.prototype.parseArgumentOptions = function(e, t, n, r) {
		var i = this.clonePosition(), a = this.parseIdentifierIfPossible().value, o = this.clonePosition();
		switch (a) {
			case "": return this.error(V.EXPECT_ARGUMENT_TYPE, U(i, o));
			case "number":
			case "date":
			case "time":
				this.bumpSpace();
				var s = null;
				if (this.bumpIf(",")) {
					this.bumpSpace();
					var c = this.clonePosition();
					if ((g = this.parseSimpleArgStyleIfPossible()).err) return g;
					if ((f = gp(g.val)).length === 0) return this.error(V.EXPECT_ARGUMENT_STYLE, U(this.clonePosition(), this.clonePosition()));
					s = {
						style: f,
						styleLocation: U(c, this.clonePosition())
					};
				}
				if ((_ = this.tryParseArgumentClose(r)).err) return _;
				var l = U(r, this.clonePosition());
				if (s && dp(s?.style, "::", 0)) {
					var u = hp(s.style.slice(2));
					if (a === "number") return (g = this.parseNumberSkeletonFromString(u, s.styleLocation)).err ? g : {
						val: {
							type: H.number,
							value: n,
							location: l,
							style: g.val
						},
						err: null
					};
					if (u.length === 0) return this.error(V.EXPECT_DATE_TIME_SKELETON, l);
					var d = u;
					this.locale && (d = function(e, t) {
						for (var n = "", r = 0; r < e.length; r++) {
							var i = e.charAt(r);
							if (i === "j") {
								for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i;) a++, r++;
								var o = 1 + (1 & a), s = a < 2 ? 1 : 3 + (a >> 1), c = $f(t);
								for (c != "H" && c != "k" || (s = 0); s-- > 0;) n += "a";
								for (; o-- > 0;) n = c + n;
							} else n += i === "J" ? "H" : i;
						}
						return n;
					}(u, this.locale));
					var f = {
						type: If.dateTime,
						pattern: d,
						location: s.styleLocation,
						parsedOptions: this.shouldParseSkeletons ? Bf(d) : {}
					};
					return {
						val: {
							type: a === "date" ? H.date : H.time,
							value: n,
							location: l,
							style: f
						},
						err: null
					};
				}
				return {
					val: {
						type: a === "number" ? H.number : a === "date" ? H.date : H.time,
						value: n,
						location: l,
						style: s?.style ?? null
					},
					err: null
				};
			case "plural":
			case "selectordinal":
			case "select":
				var p = this.clonePosition();
				if (this.bumpSpace(), !this.bumpIf(",")) return this.error(V.EXPECT_SELECT_ARGUMENT_OPTIONS, U(p, B({}, p)));
				this.bumpSpace();
				var m = this.parseIdentifierIfPossible(), h = 0;
				if (a !== "select" && m.value === "offset") {
					if (!this.bumpIf(":")) return this.error(V.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, U(this.clonePosition(), this.clonePosition()));
					var g;
					if (this.bumpSpace(), (g = this.tryParseDecimalInteger(V.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, V.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return g;
					this.bumpSpace(), m = this.parseIdentifierIfPossible(), h = g.val;
				}
				var _, v = this.tryParsePluralOrSelectOptions(e, a, t, m);
				if (v.err) return v;
				if ((_ = this.tryParseArgumentClose(r)).err) return _;
				var y = U(r, this.clonePosition());
				return a === "select" ? {
					val: {
						type: H.select,
						value: n,
						options: pp(v.val),
						location: y
					},
					err: null
				} : {
					val: {
						type: H.plural,
						value: n,
						options: pp(v.val),
						offset: h,
						pluralType: a === "plural" ? "cardinal" : "ordinal",
						location: y
					},
					err: null
				};
			default: return this.error(V.INVALID_ARGUMENT_TYPE, U(i, o));
		}
	}, e.prototype.tryParseArgumentClose = function(e) {
		return this.isEOF() || this.char() !== 125 ? this.error(V.EXPECT_ARGUMENT_CLOSING_BRACE, U(e, this.clonePosition())) : (this.bump(), {
			val: !0,
			err: null
		});
	}, e.prototype.parseSimpleArgStyleIfPossible = function() {
		for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
			case 39:
				this.bump();
				var n = this.clonePosition();
				if (!this.bumpUntil("'")) return this.error(V.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, U(n, this.clonePosition()));
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
				--e;
				break;
			default: this.bump();
		}
		return {
			val: this.message.slice(t.offset, this.offset()),
			err: null
		};
	}, e.prototype.parseNumberSkeletonFromString = function(e, t) {
		var n = [];
		try {
			n = function(e) {
				if (e.length === 0) throw Error("Number skeleton cannot be empty");
				for (var t = [], n = 0, r = e.split(Vf).filter(function(e) {
					return e.length > 0;
				}); n < r.length; n++) {
					var i = r[n].split("/");
					if (i.length === 0) throw Error("Invalid number skeleton");
					for (var a = i[0], o = i.slice(1), s = 0, c = o; s < c.length; s++) if (c[s].length === 0) throw Error("Invalid number skeleton");
					t.push({
						stem: a,
						options: o
					});
				}
				return t;
			}(e);
		} catch {
			return this.error(V.INVALID_NUMBER_SKELETON, t);
		}
		return {
			val: {
				type: If.number,
				tokens: n,
				location: t,
				parsedOptions: this.shouldParseSkeletons ? Zf(n) : {}
			},
			err: null
		};
	}, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
		for (var i, a = !1, o = [], s = /* @__PURE__ */ new Set(), c = r.value, l = r.location;;) {
			if (c.length === 0) {
				var u = this.clonePosition();
				if (t === "select" || !this.bumpIf("=")) break;
				var d = this.tryParseDecimalInteger(V.EXPECT_PLURAL_ARGUMENT_SELECTOR, V.INVALID_PLURAL_ARGUMENT_SELECTOR);
				if (d.err) return d;
				l = U(u, this.clonePosition()), c = this.message.slice(u.offset, this.offset());
			}
			if (s.has(c)) return this.error(t === "select" ? V.DUPLICATE_SELECT_ARGUMENT_SELECTOR : V.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
			c === "other" && (a = !0), this.bumpSpace();
			var f = this.clonePosition();
			if (!this.bumpIf("{")) return this.error(t === "select" ? V.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : V.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, U(this.clonePosition(), this.clonePosition()));
			var p = this.parseMessage(e + 1, t, n);
			if (p.err) return p;
			var m = this.tryParseArgumentClose(f);
			if (m.err) return m;
			o.push([c, {
				value: p.val,
				location: U(f, this.clonePosition())
			}]), s.add(c), this.bumpSpace(), c = (i = this.parseIdentifierIfPossible()).value, l = i.location;
		}
		return o.length === 0 ? this.error(t === "select" ? V.EXPECT_SELECT_ARGUMENT_SELECTOR : V.EXPECT_PLURAL_ARGUMENT_SELECTOR, U(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(V.MISSING_OTHER_CLAUSE, U(this.clonePosition(), this.clonePosition())) : {
			val: o,
			err: null
		};
	}, e.prototype.tryParseDecimalInteger = function(e, t) {
		var n = 1, r = this.clonePosition();
		this.bumpIf("+") || this.bumpIf("-") && (n = -1);
		for (var i = !1, a = 0; !this.isEOF();) {
			var o = this.char();
			if (!(o >= 48 && o <= 57)) break;
			i = !0, a = 10 * a + (o - 48), this.bump();
		}
		var s = U(r, this.clonePosition());
		return i ? cp(a *= n) ? {
			val: a,
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
		var t = mp(this.message, e);
		if (t === void 0) throw Error(`Offset ${e} is at invalid UTF-16 code unit boundary`);
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
			e === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
		}
	}, e.prototype.bumpIf = function(e) {
		if (dp(this.message, e, this.offset())) {
			for (var t = 0; t < e.length; t++) this.bump();
			return !0;
		}
		return !1;
	}, e.prototype.bumpUntil = function(e) {
		var t = this.offset(), n = this.message.indexOf(e, t);
		return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1);
	}, e.prototype.bumpTo = function(e) {
		if (this.offset() > e) throw Error(`targetOffset ${e} must be greater than or equal to the current offset ${this.offset()}`);
		for (e = Math.min(e, this.message.length);;) {
			var t = this.offset();
			if (t === e) break;
			if (t > e) throw Error(`targetOffset ${e} is at invalid UTF-16 code unit boundary`);
			if (this.bump(), this.isEOF()) break;
		}
	}, e.prototype.bumpSpace = function() {
		for (; !this.isEOF() && xp(this.char());) this.bump();
	}, e.prototype.peek = function() {
		if (this.isEOF()) return null;
		var e = this.char(), t = this.offset();
		return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null;
	}, e;
})();
function yp(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function bp(e) {
	return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function xp(e) {
	return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function Sp(e) {
	return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
var Cp, W = {};
function wp() {
	return Cp || (Cp = 1, Object.defineProperty(W, "__esModule", { value: !0 }), W.SKELETON_TYPE = W.TYPE = void 0, W.isLiteralElement = function(t) {
		return t.type === e.literal;
	}, W.isArgumentElement = function(t) {
		return t.type === e.argument;
	}, W.isNumberElement = function(t) {
		return t.type === e.number;
	}, W.isDateElement = function(t) {
		return t.type === e.date;
	}, W.isTimeElement = function(t) {
		return t.type === e.time;
	}, W.isSelectElement = function(t) {
		return t.type === e.select;
	}, W.isPluralElement = function(t) {
		return t.type === e.plural;
	}, W.isPoundElement = function(t) {
		return t.type === e.pound;
	}, W.isTagElement = function(t) {
		return t.type === e.tag;
	}, W.isNumberSkeleton = function(e) {
		return !(!e || typeof e != "object" || e.type !== t.number);
	}, W.isDateTimeSkeleton = function(e) {
		return !(!e || typeof e != "object" || e.type !== t.dateTime);
	}, W.createLiteralElement = function(t) {
		return {
			type: e.literal,
			value: t
		};
	}, W.createNumberElement = function(t, n) {
		return {
			type: e.number,
			value: t,
			style: n
		};
	}, function(e) {
		e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
	}(e || (W.TYPE = e = {})), function(e) {
		e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
	}(t || (W.SKELETON_TYPE = t = {}))), W;
	var e, t;
}
var Tp;
wp();
var Ep = {}, Dp = function(e) {
	if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
	var t = e.default;
	if (typeof t == "function") {
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
}(Lf);
(function() {
	if (Tp) return Ep;
	Tp = 1, Object.defineProperty(Ep, "__esModule", { value: !0 }), Ep.printAST = n, Ep.doPrintAST = r, Ep.printDateTimeSkeleton = o;
	var e = Dp, t = wp();
	function n(e) {
		return r(e, !1);
	}
	function r(s, c) {
		return s.map(function(l, u) {
			return (0, t.isLiteralElement)(l) ? function(e, t, n, r) {
				var a = e.value;
				return n || a[0] !== "'" || (a = `''${a.slice(1)}`), r || a[a.length - 1] !== "'" || (a = `${a.slice(0, a.length - 1)}''`), a = i(a), t ? a.replace("#", "'#'") : a;
			}(l, c, u === 0, u === s.length - 1) : (0, t.isArgumentElement)(l) ? function(e) {
				return `{${e.value}}`;
			}(l) : (0, t.isDateElement)(l) || (0, t.isTimeElement)(l) || (0, t.isNumberElement)(l) ? function(e) {
				return `{${e.value}, ${t.TYPE[e.type]}${e.style ? `, ${typeof (n = e.style) == "string" ? i(n) : n.type === t.SKELETON_TYPE.dateTime ? `::${o(n)}` : `::${n.tokens.map(a).join(" ")}`}` : ""}}`;
				var n;
			}(l) : (0, t.isPluralElement)(l) ? function(t) {
				var n = t.pluralType === "cardinal" ? "plural" : "selectordinal";
				return `{${[
					t.value,
					n,
					e.__spreadArray([t.offset ? `offset:${t.offset}` : ""], Object.keys(t.options).map(function(e) {
						return `${e}{${r(t.options[e].value, !0)}}`;
					}), !0).filter(Boolean).join(" ")
				].join(",")}}`;
			}(l) : (0, t.isSelectElement)(l) ? function(e) {
				return `{${[
					e.value,
					"select",
					Object.keys(e.options).map(function(t) {
						return `${t}{${r(e.options[t].value, !1)}}`;
					}).join(" ")
				].join(",")}}`;
			}(l) : (0, t.isPoundElement)(l) ? "#" : (0, t.isTagElement)(l) ? function(e) {
				return `<${e.value}>${n(e.children)}</${e.value}>`;
			}(l) : void 0;
		}).join("");
	}
	function i(e) {
		return e.replace(/([{}](?:[\s\S]*[{}])?)/, "'$1'");
	}
	function a(e) {
		var t = e.stem, n = e.options;
		return n.length === 0 ? t : `${t}${n.map(function(e) {
			return `/${e}`;
		}).join("")}`;
	}
	function o(e) {
		return e.pattern;
	}
	return Ep;
})();
var Op = "_gt_";
RegExp(`^${Op}\\d+$`), RegExp(`^${Op}$`);
var kp = "generaltranslation.locale";
e.use;
var Ap = {
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
function jp(e) {
	if (!Ql(e)) return null;
	e = eu(e);
	let { languageCode: t, ...n } = Ju(e);
	if (Ap[t]?.length) {
		let r = Ap[t], i = ({ locale: e, languageCode: t, minimizedCode: n, regionCode: i, scriptCode: a }) => {
			let o = [
				e,
				`${t}-${i}`,
				`${t}-${a}`,
				n
			];
			for (let e of o) if (r.includes(e)) return e;
			return null;
		};
		return i({
			locale: e,
			languageCode: t,
			...n
		}) || i({
			locale: t,
			...Ju(t)
		});
	}
	return null;
}
var Mp = {
	variable: "value",
	number: "n",
	datetime: "date",
	currency: "cost",
	"relative-time": "time"
};
function Np(e = {}, t) {
	return e.name ? e.name : `_gt_${Mp[t] || "value"}_${e["data-_gt"]?.id}`;
}
var Pp = "en", Fp = "DEFAULT_TERMINATOR_KEY", Ip = {
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
		[Fp]: {
			terminator: "…",
			separator: void 0
		}
	},
	none: { [Fp]: {
		terminator: void 0,
		separator: void 0
	} }
}, Lp = {
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
				let t = e ? Array.isArray(e) ? e.map((e) => String(e)) : [String(e)] : ["en"], n = Intl.getCanonicalLocales(t);
				this.locale = n.length ? n[0] : "en";
			} catch {
				this.locale = "en";
			}
			if (!Ip[t.style ?? "ellipsis"]) throw Error(((e) => `generaltranslation Formatting Error: Invalid cutoff style: ${e}.`)(t.style ?? "ellipsis"));
			let n, r;
			if (t.maxChars !== void 0) {
				n = t.style ?? "ellipsis";
				let e = new Intl.Locale(this.locale).language;
				r = Ip[n][e] || Ip[n].DEFAULT_TERMINATOR_KEY;
			}
			let i = t.terminator ?? r?.terminator, a = i == null ? void 0 : t.separator ?? r?.separator;
			this.additionLength = (i?.length ?? 0) + (a?.length ?? 0), t.maxChars !== void 0 && Math.abs(t.maxChars) < this.additionLength && (i = void 0, a = void 0), this.options = {
				maxChars: t.maxChars,
				style: n,
				terminator: i,
				separator: a
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
	}
};
new class {
	constructor() {
		this.cache = {};
	}
	_generateKey(e, t = {}) {
		return `${e ? Array.isArray(e) ? e.map((e) => String(e)).join(",") : String(e) : "undefined"}:${t ? JSON.stringify(t, Object.keys(t).sort()) : "{}"}`;
	}
	get(e, ...t) {
		let [n = "en", r = {}] = t, i = this._generateKey(n, r), a = this.cache[e]?.[i];
		return a === void 0 && (a = new Lp[e](...t), this.cache[e] || (this.cache[e] = {}), this.cache[e][i] = a), a;
	}
}();
var Rp = "https://cdn.gtx.dev", zp = "https://runtime2.gtx.dev";
function Bp(e) {
	if (e === void 0) return;
	if (e === null) return "null";
	if (typeof e == "number") return isFinite(e) ? "" + e : "null";
	if (typeof e != "object") return JSON.stringify(e);
	if (Array.isArray(e)) {
		let t = "[";
		for (let n = 0; n < e.length; n++) n && (t += ","), t += Bp(e[n]) || "null";
		return t + "]";
	}
	let t = Object.keys(e).sort(), n = "";
	for (let r of t) {
		let t = Bp(e[r]);
		t && (n && (n += ","), n += JSON.stringify(r) + ":" + t);
	}
	return "{" + n + "}";
}
function Vp(e) {
	return Bp(e) ?? "";
}
function Hp(e) {
	let t = e;
	if (t && typeof t == "object" && typeof t.k == "string") {
		let e = Object.keys(t);
		if (e.length === 1 || e.length === 2 && (typeof t.i == "number" || typeof t.v == "string") || e.length === 3 && typeof t.v == "string" && typeof t.i == "number") return !0;
	}
	return !1;
}
function Up(e, t, n = "") {
	let r = (i = e) instanceof Uint8Array || ArrayBuffer.isView(i) && i.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in i && i.BYTES_PER_ELEMENT === 1;
	var i;
	let a = e?.length;
	if (!r || t !== void 0) {
		let t = (n && `"${n}" `) + "expected Uint8Array, got " + (r ? `length=${a}` : "type=" + typeof e);
		throw r ? RangeError(t) : TypeError(t);
	}
	return e;
}
function Wp(e, t = !0) {
	if (e.destroyed) throw Error("Hash instance has been destroyed");
	if (t && e.finished) throw Error("Hash#digest() has already been called");
}
function Gp(...e) {
	for (let t = 0; t < e.length; t++) e[t].fill(0);
}
function Kp(e) {
	return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function qp(e, t) {
	return e << 32 - t | e >>> t;
}
var Jp = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", Yp = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function Xp(e, t = {}) {
	let n = (t, n) => e(n).update(t).digest(), r = e(void 0);
	return n.outputLen = r.outputLen, n.blockLen = r.blockLen, n.canXOF = r.canXOF, n.create = (t) => e(t), Object.assign(n, t), Object.freeze(n);
}
var Zp = (e) => ({ oid: Uint8Array.from([
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
function Qp(e, t, n) {
	return e & t ^ ~e & n;
}
function $p(e, t, n) {
	return e & t ^ e & n ^ t & n;
}
var em = class {
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
		this.blockLen = e, this.outputLen = t, this.padOffset = n, this.isLE = r, this.buffer = new Uint8Array(e), this.view = Kp(this.buffer);
	}
	update(e) {
		Wp(this), Up(e);
		let { view: t, buffer: n, blockLen: r } = this, i = e.length;
		for (let a = 0; a < i;) {
			let o = Math.min(r - this.pos, i - a);
			if (o === r) {
				let t = Kp(e);
				for (; r <= i - a; a += r) this.process(t, a);
				continue;
			}
			n.set(e.subarray(a, a + o), this.pos), this.pos += o, a += o, this.pos === r && (this.process(t, 0), this.pos = 0);
		}
		return this.length += e.length, this.roundClean(), this;
	}
	digestInto(e) {
		Wp(this), function(e, t) {
			Up(e, void 0, "digestInto() output");
			let n = t.outputLen;
			if (e.length < n) throw RangeError("\"digestInto() output\" expected to be of length >=" + n);
		}(e, this), this.finished = !0;
		let { buffer: t, view: n, blockLen: r, isLE: i } = this, { pos: a } = this;
		t[a++] = 128, Gp(this.buffer.subarray(a)), this.padOffset > r - a && (this.process(n, 0), a = 0);
		for (let e = a; e < r; e++) t[e] = 0;
		n.setBigUint64(r - 8, BigInt(8 * this.length), i), this.process(n, 0);
		let o = Kp(e), s = this.outputLen;
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
}, tm = Uint32Array.from([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]), nm = Uint32Array.from([
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
]), rm = /* @__PURE__ */ new Uint32Array(64), im = class extends em {
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
		this.A = 0 | e, this.B = 0 | t, this.C = 0 | n, this.D = 0 | r, this.E = 0 | i, this.F = 0 | a, this.G = 0 | o, this.H = 0 | s;
	}
	process(e, t) {
		for (let n = 0; n < 16; n++, t += 4) rm[n] = e.getUint32(t, !1);
		for (let e = 16; e < 64; e++) {
			let t = rm[e - 15], n = rm[e - 2], r = qp(t, 7) ^ qp(t, 18) ^ t >>> 3, i = qp(n, 17) ^ qp(n, 19) ^ n >>> 10;
			rm[e] = i + rm[e - 7] + r + rm[e - 16] | 0;
		}
		let { A: n, B: r, C: i, D: a, E: o, F: s, G: c, H: l } = this;
		for (let e = 0; e < 64; e++) {
			let t = l + (qp(o, 6) ^ qp(o, 11) ^ qp(o, 25)) + Qp(o, s, c) + nm[e] + rm[e] | 0, u = (qp(n, 2) ^ qp(n, 13) ^ qp(n, 22)) + $p(n, r, i) | 0;
			l = c, c = s, s = o, o = a + t | 0, a = i, i = r, r = n, n = t + u | 0;
		}
		n = n + this.A | 0, r = r + this.B | 0, i = i + this.C | 0, a = a + this.D | 0, o = o + this.E | 0, s = s + this.F | 0, c = c + this.G | 0, l = l + this.H | 0, this.set(n, r, i, a, o, s, c, l);
	}
	roundClean() {
		Gp(rm);
	}
	destroy() {
		this.destroyed = !0, this.set(0, 0, 0, 0, 0, 0, 0, 0), Gp(this.buffer);
	}
}, am = class extends im {
	A = 0 | tm[0];
	B = 0 | tm[1];
	C = 0 | tm[2];
	D = 0 | tm[3];
	E = 0 | tm[4];
	F = 0 | tm[5];
	G = 0 | tm[6];
	H = 0 | tm[7];
	constructor() {
		super(32);
	}
}, om = Xp(() => new am(), Zp(1)), sm = function(e, t) {
	return sm = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	}, sm(e, t);
};
function cm(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	function n() {
		this.constructor = e;
	}
	sm(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var G = function() {
	return G = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, G.apply(this, arguments);
};
function lm(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") {
		var i = 0;
		for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	}
	return n;
}
function um(e, t, n, r) {
	var i, a = arguments.length, o = a < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
	return a > 3 && o && Object.defineProperty(t, n, o), o;
}
function dm(e, t) {
	return function(n, r) {
		t(n, r, e);
	};
}
function fm(e, t, n, r, i, a) {
	function o(e) {
		if (e !== void 0 && typeof e != "function") throw TypeError("Function expected");
		return e;
	}
	for (var s, c = r.kind, l = c === "getter" ? "get" : c === "setter" ? "set" : "value", u = !t && e ? r.static ? e : e.prototype : null, d = t || (u ? Object.getOwnPropertyDescriptor(u, r.name) : {}), f = !1, p = n.length - 1; p >= 0; p--) {
		var m = {};
		for (var h in r) m[h] = h === "access" ? {} : r[h];
		for (var h in r.access) m.access[h] = r.access[h];
		m.addInitializer = function(e) {
			if (f) throw TypeError("Cannot add initializers after decoration has completed");
			a.push(o(e || null));
		};
		var g = (0, n[p])(c === "accessor" ? {
			get: d.get,
			set: d.set
		} : d[l], m);
		if (c === "accessor") {
			if (g === void 0) continue;
			if (typeof g != "object" || !g) throw TypeError("Object expected");
			(s = o(g.get)) && (d.get = s), (s = o(g.set)) && (d.set = s), (s = o(g.init)) && i.unshift(s);
		} else (s = o(g)) && (c === "field" ? i.unshift(s) : d[l] = s);
	}
	u && Object.defineProperty(u, r.name, d), f = !0;
}
function pm(e, t, n) {
	for (var r = arguments.length > 2, i = 0; i < t.length; i++) n = r ? t[i].call(e, n) : t[i].call(e);
	return r ? n : void 0;
}
function mm(e) {
	return typeof e == "symbol" ? e : `${e}`;
}
function hm(e, t, n) {
	return typeof t == "symbol" && (t = t.description ? `[${t.description}]` : ""), Object.defineProperty(e, "name", {
		configurable: !0,
		value: n ? `${n} ${t}` : t
	});
}
function gm(e, t) {
	if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, t);
}
function _m(e, t, n, r) {
	return new (n ||= Promise)(function(i, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			var t;
			e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
				e(t);
			})).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}
function vm(e, t) {
	var n, r, i, a = {
		label: 0,
		sent: function() {
			if (1 & i[0]) throw i[1];
			return i[1];
		},
		trys: [],
		ops: []
	}, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
	return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
		return this;
	}), o;
	function s(s) {
		return function(c) {
			return function(s) {
				if (n) throw TypeError("Generator is already executing.");
				for (; o && (o = 0, s[0] && (a = 0)), a;) try {
					if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
					switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
						case 0:
						case 1:
							i = s;
							break;
						case 4: return a.label++, {
							value: s[1],
							done: !1
						};
						case 5:
							a.label++, r = s[1], s = [0];
							continue;
						case 7:
							s = a.ops.pop(), a.trys.pop();
							continue;
						default:
							if (i = a.trys, !((i = i.length > 0 && i[i.length - 1]) || s[0] !== 6 && s[0] !== 2)) {
								a = 0;
								continue;
							}
							if (s[0] === 3 && (!i || s[1] > i[0] && s[1] < i[3])) {
								a.label = s[1];
								break;
							}
							if (s[0] === 6 && a.label < i[1]) {
								a.label = i[1], i = s;
								break;
							}
							if (i && a.label < i[2]) {
								a.label = i[2], a.ops.push(s);
								break;
							}
							i[2] && a.ops.pop(), a.trys.pop();
							continue;
					}
					s = t.call(e, a);
				} catch (e) {
					s = [6, e], r = 0;
				} finally {
					n = i = 0;
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
var ym = Object.create ? function(e, t, n, r) {
	r === void 0 && (r = n);
	var i = Object.getOwnPropertyDescriptor(t, n);
	i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
		enumerable: !0,
		get: function() {
			return t[n];
		}
	}), Object.defineProperty(e, r, i);
} : function(e, t, n, r) {
	r === void 0 && (r = n), e[r] = t[n];
};
function bm(e, t) {
	for (var n in e) n === "default" || Object.prototype.hasOwnProperty.call(t, n) || ym(t, e, n);
}
function xm(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Sm(e, t) {
	var n = typeof Symbol == "function" && e[Symbol.iterator];
	if (!n) return e;
	var r, i, a = n.call(e), o = [];
	try {
		for (; (t === void 0 || t-- > 0) && !(r = a.next()).done;) o.push(r.value);
	} catch (e) {
		i = { error: e };
	} finally {
		try {
			r && !r.done && (n = a.return) && n.call(a);
		} finally {
			if (i) throw i.error;
		}
	}
	return o;
}
function Cm() {
	for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Sm(arguments[t]));
	return e;
}
function wm() {
	for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
	var r = Array(e), i = 0;
	for (t = 0; t < n; t++) for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
	return r;
}
function Tm(e, t, n) {
	if (n || arguments.length === 2) for (var r, i = 0, a = t.length; i < a; i++) !r && i in t || (r ||= Array.prototype.slice.call(t, 0, i), r[i] = t[i]);
	return e.concat(r || Array.prototype.slice.call(t));
}
function Em(e) {
	return this instanceof Em ? (this.v = e, this) : new Em(e);
}
function Dm(e, t, n) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var r, i = n.apply(e, t || []), a = [];
	return r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), o("next"), o("throw"), o("return", function(e) {
		return function(t) {
			return Promise.resolve(t).then(e, l);
		};
	}), r[Symbol.asyncIterator] = function() {
		return this;
	}, r;
	function o(e, t) {
		i[e] && (r[e] = function(t) {
			return new Promise(function(n, r) {
				a.push([
					e,
					t,
					n,
					r
				]) > 1 || s(e, t);
			});
		}, t && (r[e] = t(r[e])));
	}
	function s(e, t) {
		try {
			(n = i[e](t)).value instanceof Em ? Promise.resolve(n.value.v).then(c, l) : u(a[0][2], n);
		} catch (e) {
			u(a[0][3], e);
		}
		var n;
	}
	function c(e) {
		s("next", e);
	}
	function l(e) {
		s("throw", e);
	}
	function u(e, t) {
		e(t), a.shift(), a.length && s(a[0][0], a[0][1]);
	}
}
function Om(e) {
	var t = {}, n;
	return r("next"), r("throw", function(e) {
		throw e;
	}), r("return"), t[Symbol.iterator] = function() {
		return this;
	}, t;
	function r(r, i) {
		t[r] = e[r] ? function(t) {
			return (n = !n) ? {
				value: Em(e[r](t)),
				done: !1
			} : i ? i(t) : t;
		} : i;
	}
}
function km(e) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var t, n = e[Symbol.asyncIterator];
	return n ? n.call(e) : (e = xm(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
		return this;
	}, t);
	function r(n) {
		t[n] = e[n] && function(t) {
			return new Promise(function(r, i) {
				(function(e, t, n, r) {
					Promise.resolve(r).then(function(t) {
						e({
							value: t,
							done: n
						});
					}, t);
				})(r, i, (t = e[n](t)).done, t.value);
			});
		};
	}
}
function Am(e, t) {
	return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
var jm = Object.create ? function(e, t) {
	Object.defineProperty(e, "default", {
		enumerable: !0,
		value: t
	});
} : function(e, t) {
	e.default = t;
}, Mm = function(e) {
	return Mm = Object.getOwnPropertyNames || function(e) {
		var t = [];
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
		return t;
	}, Mm(e);
};
function Nm(e) {
	if (e && e.__esModule) return e;
	var t = {};
	if (e != null) for (var n = Mm(e), r = 0; r < n.length; r++) n[r] !== "default" && ym(t, e, n[r]);
	return jm(t, e), t;
}
function Pm(e) {
	return e && e.__esModule ? e : { default: e };
}
function Fm(e, t, n, r) {
	if (n === "a" && !r) throw TypeError("Private accessor was defined without a getter");
	if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
	return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function Im(e, t, n, r, i) {
	if (r === "m") throw TypeError("Private method is not writable");
	if (r === "a" && !i) throw TypeError("Private accessor was defined without a setter");
	if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
	return r === "a" ? i.call(e, n) : i ? i.value = n : t.set(e, n), n;
}
function Lm(e, t) {
	if (t === null || typeof t != "object" && typeof t != "function") throw TypeError("Cannot use 'in' operator on non-object");
	return typeof e == "function" ? t === e : e.has(t);
}
function Rm(e, t, n) {
	if (t != null) {
		if (typeof t != "object" && typeof t != "function") throw TypeError("Object expected.");
		var r, i;
		if (n) {
			if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
			r = t[Symbol.asyncDispose];
		}
		if (r === void 0) {
			if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
			r = t[Symbol.dispose], n && (i = r);
		}
		if (typeof r != "function") throw TypeError("Object not disposable.");
		i && (r = function() {
			try {
				i.call(this);
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
var zm = typeof SuppressedError == "function" ? SuppressedError : function(e, t, n) {
	var r = Error(n);
	return r.name = "SuppressedError", r.error = e, r.suppressed = t, r;
};
function Bm(e) {
	function t(t) {
		e.error = e.hasError ? new zm(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
	}
	var n, r = 0;
	return function i() {
		for (; n = e.stack.pop();) try {
			if (!n.async && r === 1) return r = 0, e.stack.push(n), Promise.resolve().then(i);
			if (n.dispose) {
				var a = n.dispose.call(n.value);
				if (n.async) return r |= 2, Promise.resolve(a).then(i, function(e) {
					return t(e), i();
				});
			} else r |= 1;
		} catch (e) {
			t(e);
		}
		if (r === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
		if (e.hasError) throw e.error;
	}();
}
function Vm(e, t) {
	return typeof e == "string" && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, n, r, i, a) {
		return n ? t ? ".jsx" : ".js" : !r || i && a ? r + i + "." + a.toLowerCase() + "js" : e;
	}) : e;
}
var K, q, Hm, Um = Object.freeze({
	__proto__: null,
	__addDisposableResource: Rm,
	get __assign() {
		return G;
	},
	__asyncDelegator: Om,
	__asyncGenerator: Dm,
	__asyncValues: km,
	__await: Em,
	__awaiter: _m,
	__classPrivateFieldGet: Fm,
	__classPrivateFieldIn: Lm,
	__classPrivateFieldSet: Im,
	__createBinding: ym,
	__decorate: um,
	__disposeResources: Bm,
	__esDecorate: fm,
	__exportStar: bm,
	__extends: cm,
	__generator: vm,
	__importDefault: Pm,
	__importStar: Nm,
	__makeTemplateObject: Am,
	__metadata: gm,
	__param: dm,
	__propKey: mm,
	__read: Sm,
	__rest: lm,
	__rewriteRelativeImportExtension: Vm,
	__runInitializers: pm,
	__setFunctionName: hm,
	__spread: Cm,
	__spreadArray: Tm,
	__spreadArrays: wm,
	__values: xm,
	default: {
		__extends: cm,
		__assign: G,
		__rest: lm,
		__decorate: um,
		__param: dm,
		__esDecorate: fm,
		__runInitializers: pm,
		__propKey: mm,
		__setFunctionName: hm,
		__metadata: gm,
		__awaiter: _m,
		__generator: vm,
		__createBinding: ym,
		__exportStar: bm,
		__values: xm,
		__read: Sm,
		__spread: Cm,
		__spreadArrays: wm,
		__spreadArray: Tm,
		__await: Em,
		__asyncGenerator: Dm,
		__asyncDelegator: Om,
		__asyncValues: km,
		__makeTemplateObject: Am,
		__importStar: Nm,
		__importDefault: Pm,
		__classPrivateFieldGet: Fm,
		__classPrivateFieldSet: Im,
		__classPrivateFieldIn: Lm,
		__addDisposableResource: Rm,
		__disposeResources: Bm,
		__rewriteRelativeImportExtension: Vm
	}
});
(function(e) {
	e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(K ||= {}), function(e) {
	e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
}(q ||= {}), function(e) {
	e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
}(Hm ||= {});
var Wm = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Gm = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Km(e) {
	var t = {};
	return e.replace(Gm, function(e) {
		var n = e.length;
		switch (e[0]) {
			case "G":
				t.era = n === 4 ? "long" : n === 5 ? "narrow" : "short";
				break;
			case "y":
				t.year = n === 2 ? "2-digit" : "numeric";
				break;
			case "Y":
			case "u":
			case "U":
			case "r": throw RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
			case "q":
			case "Q": throw RangeError("`q/Q` (quarter) patterns are not supported");
			case "M":
			case "L":
				t.month = [
					"numeric",
					"2-digit",
					"short",
					"long",
					"narrow"
				][n - 1];
				break;
			case "w":
			case "W": throw RangeError("`w/W` (week) patterns are not supported");
			case "d":
				t.day = ["numeric", "2-digit"][n - 1];
				break;
			case "D":
			case "F":
			case "g": throw RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
			case "E":
				t.weekday = n === 4 ? "long" : n === 5 ? "narrow" : "short";
				break;
			case "e":
				if (n < 4) throw RangeError("`e..eee` (weekday) patterns are not supported");
				t.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][n - 4];
				break;
			case "c":
				if (n < 4) throw RangeError("`c..ccc` (weekday) patterns are not supported");
				t.weekday = [
					"short",
					"long",
					"narrow",
					"short"
				][n - 4];
				break;
			case "a":
				t.hour12 = !0;
				break;
			case "b":
			case "B": throw RangeError("`b/B` (period) patterns are not supported, use `a` instead");
			case "h":
				t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "H":
				t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "K":
				t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "k":
				t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
				break;
			case "j":
			case "J":
			case "C": throw RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
			case "m":
				t.minute = ["numeric", "2-digit"][n - 1];
				break;
			case "s":
				t.second = ["numeric", "2-digit"][n - 1];
				break;
			case "S":
			case "A": throw RangeError("`S/A` (second) patterns are not supported, use `s` instead");
			case "z":
				t.timeZoneName = n < 4 ? "short" : "long";
				break;
			case "Z":
			case "O":
			case "v":
			case "V":
			case "X":
			case "x": throw RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
		}
		return "";
	}), t;
}
var qm = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Jm(e) {
	return e.replace(/^(.*?)-/, "");
}
var Ym = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Xm = /^(@+)?(\+|#+)?[rs]?$/g, Zm = /(\*)(0+)|(#+)(0+)|(0+)/g, Qm = /^(0+)$/;
function $m(e) {
	var t = {};
	return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Xm, function(e, n, r) {
		return typeof r == "string" ? r === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof r == "string" ? r.length : 0)) : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length), "";
	}), t;
}
function eh(e) {
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
function th(e) {
	var t;
	if (e[0] === "E" && e[1] === "E" ? (t = { notation: "engineering" }, e = e.slice(2)) : e[0] === "E" && (t = { notation: "scientific" }, e = e.slice(1)), t) {
		var n = e.slice(0, 2);
		if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Qm.test(e)) throw Error("Malformed concise eng/scientific notation");
		t.minimumIntegerDigits = e.length;
	}
	return t;
}
function nh(e) {
	return eh(e) || {};
}
function rh(e) {
	for (var t = {}, n = 0, r = e; n < r.length; n++) {
		var i = r[n];
		switch (i.stem) {
			case "percent":
			case "%":
				t.style = "percent";
				continue;
			case "%x100":
				t.style = "percent", t.scale = 100;
				continue;
			case "currency":
				t.style = "currency", t.currency = i.options[0];
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
				t.style = "unit", t.unit = Jm(i.options[0]);
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
				t = G(G(G({}, t), { notation: "scientific" }), i.options.reduce(function(e, t) {
					return G(G({}, e), nh(t));
				}, {}));
				continue;
			case "engineering":
				t = G(G(G({}, t), { notation: "engineering" }), i.options.reduce(function(e, t) {
					return G(G({}, e), nh(t));
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
				t.scale = parseFloat(i.options[0]);
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
				if (i.options.length > 1) throw RangeError("integer-width stems only accept a single optional option");
				i.options[0].replace(Zm, function(e, n, r, i, a, o) {
					if (n) t.minimumIntegerDigits = r.length;
					else {
						if (i && a) throw Error("We currently do not support maximum integer digits");
						if (o) throw Error("We currently do not support exact integer digits");
					}
					return "";
				});
				continue;
		}
		if (Qm.test(i.stem)) t.minimumIntegerDigits = i.stem.length;
		else if (Ym.test(i.stem)) {
			if (i.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
			i.stem.replace(Ym, function(e, n, r, i, a, o) {
				return r === "*" ? t.minimumFractionDigits = n.length : i && i[0] === "#" ? t.maximumFractionDigits = i.length : a && o ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + o.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), "";
			});
			var a = i.options[0];
			a === "w" ? t = G(G({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = G(G({}, t), $m(a)));
		} else if (Xm.test(i.stem)) t = G(G({}, t), $m(i.stem));
		else {
			var o = eh(i.stem);
			o && (t = G(G({}, t), o));
			var s = th(i.stem);
			s && (t = G(G({}, t), s));
		}
	}
	return t;
}
var ih = {
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
function ah(e) {
	var t = e.hourCycle;
	if (t === void 0 && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
		case "h24": return "k";
		case "h23": return "H";
		case "h12": return "h";
		case "h11": return "K";
		default: throw Error("Invalid hourCycle");
	}
	var n, r = e.language;
	return r !== "root" && (n = e.maximize().region), (ih[n || ""] || ih[r || ""] || ih[`${r}-001`] || ih["001"])[0];
}
var oh = RegExp(`^${Wm.source}*`), sh = RegExp(`${Wm.source}*\$`);
function J(e, t) {
	return {
		start: e,
		end: t
	};
}
var ch = !!String.prototype.startsWith && "_a".startsWith("a", 1), lh = !!String.fromCodePoint, uh = !!Object.fromEntries, dh = !!String.prototype.codePointAt, fh = !!String.prototype.trimStart, ph = !!String.prototype.trimEnd, mh = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
	return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, hh = !0;
try {
	hh = Ch("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")?.[0] === "a";
} catch {
	hh = !1;
}
var gh, _h = ch ? function(e, t, n) {
	return e.startsWith(t, n);
} : function(e, t, n) {
	return e.slice(n, n + t.length) === t;
}, vh = lh ? String.fromCodePoint : function() {
	for (var e = [...arguments], t, n = "", r = e.length, i = 0; r > i;) {
		if ((t = e[i++]) > 1114111) throw RangeError(t + " is not a valid code point");
		n += t < 65536 ? String.fromCharCode(t) : String.fromCharCode(55296 + ((t -= 65536) >> 10), t % 1024 + 56320);
	}
	return n;
}, yh = uh ? Object.fromEntries : function(e) {
	for (var t = {}, n = 0, r = e; n < r.length; n++) {
		var i = r[n], a = i[0];
		t[a] = i[1];
	}
	return t;
}, bh = dh ? function(e, t) {
	return e.codePointAt(t);
} : function(e, t) {
	var n = e.length;
	if (!(t < 0 || t >= n)) {
		var r, i = e.charCodeAt(t);
		return i < 55296 || i > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? i : r - 56320 + (i - 55296 << 10) + 65536;
	}
}, xh = fh ? function(e) {
	return e.trimStart();
} : function(e) {
	return e.replace(oh, "");
}, Sh = ph ? function(e) {
	return e.trimEnd();
} : function(e) {
	return e.replace(sh, "");
};
function Ch(e, t) {
	return new RegExp(e, t);
}
if (hh) {
	var wh = Ch("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
	gh = function(e, t) {
		return wh.lastIndex = t, wh.exec(e)[1] ?? "";
	};
} else gh = function(e, t) {
	for (var n = [];;) {
		var r = bh(e, t);
		if (r === void 0 || Oh(r) || kh(r)) break;
		n.push(r), t += r >= 65536 ? 2 : 1;
	}
	return vh.apply(void 0, n);
};
var Th = function() {
	function e(e, t) {
		t === void 0 && (t = {}), this.message = e, this.position = {
			offset: 0,
			line: 1,
			column: 1
		}, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons;
	}
	return e.prototype.parse = function() {
		if (this.offset() !== 0) throw Error("parser can only be used once");
		return this.parseMessage(0, "", !1);
	}, e.prototype.parseMessage = function(e, t, n) {
		for (var r = []; !this.isEOF();) {
			var i = this.char();
			if (i === 123) {
				if ((a = this.parseArgument(e, n)).err) return a;
				r.push(a.val);
			} else {
				if (i === 125 && e > 0) break;
				if (i !== 35 || t !== "plural" && t !== "selectordinal") {
					if (i === 60 && !this.ignoreTag && this.peek() === 47) {
						if (n) break;
						return this.error(K.UNMATCHED_CLOSING_TAG, J(this.clonePosition(), this.clonePosition()));
					}
					if (i === 60 && !this.ignoreTag && Eh(this.peek() || 0)) {
						if ((a = this.parseTag(e, t)).err) return a;
						r.push(a.val);
					} else {
						var a;
						if ((a = this.parseLiteral(e, t)).err) return a;
						r.push(a.val);
					}
				} else {
					var o = this.clonePosition();
					this.bump(), r.push({
						type: q.pound,
						location: J(o, this.clonePosition())
					});
				}
			}
		}
		return {
			val: r,
			err: null
		};
	}, e.prototype.parseTag = function(e, t) {
		var n = this.clonePosition();
		this.bump();
		var r = this.parseTagName();
		if (this.bumpSpace(), this.bumpIf("/>")) return {
			val: {
				type: q.literal,
				value: `<${r}/>`,
				location: J(n, this.clonePosition())
			},
			err: null
		};
		if (this.bumpIf(">")) {
			var i = this.parseMessage(e + 1, t, !0);
			if (i.err) return i;
			var a = i.val, o = this.clonePosition();
			if (this.bumpIf("</")) {
				if (this.isEOF() || !Eh(this.char())) return this.error(K.INVALID_TAG, J(o, this.clonePosition()));
				var s = this.clonePosition();
				return r === this.parseTagName() ? (this.bumpSpace(), this.bumpIf(">") ? {
					val: {
						type: q.tag,
						value: r,
						children: a,
						location: J(n, this.clonePosition())
					},
					err: null
				} : this.error(K.INVALID_TAG, J(o, this.clonePosition()))) : this.error(K.UNMATCHED_CLOSING_TAG, J(s, this.clonePosition()));
			}
			return this.error(K.UNCLOSED_TAG, J(n, this.clonePosition()));
		}
		return this.error(K.INVALID_TAG, J(n, this.clonePosition()));
	}, e.prototype.parseTagName = function() {
		var e = this.offset();
		for (this.bump(); !this.isEOF() && Dh(this.char());) this.bump();
		return this.message.slice(e, this.offset());
	}, e.prototype.parseLiteral = function(e, t) {
		for (var n = this.clonePosition(), r = "";;) {
			var i = this.tryParseQuote(t);
			if (i) r += i;
			else {
				var a = this.tryParseUnquoted(e, t);
				if (a) r += a;
				else {
					var o = this.tryParseLeftAngleBracket();
					if (!o) break;
					r += o;
				}
			}
		}
		var s = J(n, this.clonePosition());
		return {
			val: {
				type: q.literal,
				value: r,
				location: s
			},
			err: null
		};
	}, e.prototype.tryParseLeftAngleBracket = function() {
		return this.isEOF() || this.char() !== 60 || !this.ignoreTag && (Eh(e = this.peek() || 0) || e === 47) ? null : (this.bump(), "<");
		var e;
	}, e.prototype.tryParseQuote = function(e) {
		if (this.isEOF() || this.char() !== 39) return null;
		switch (this.peek()) {
			case 39: return this.bump(), this.bump(), "'";
			case 123:
			case 60:
			case 62:
			case 125: break;
			case 35:
				if (e === "plural" || e === "selectordinal") break;
				return null;
			default: return null;
		}
		this.bump();
		var t = [this.char()];
		for (this.bump(); !this.isEOF();) {
			var n = this.char();
			if (n === 39) {
				if (this.peek() !== 39) {
					this.bump();
					break;
				}
				t.push(39), this.bump();
			} else t.push(n);
			this.bump();
		}
		return vh.apply(void 0, t);
	}, e.prototype.tryParseUnquoted = function(e, t) {
		if (this.isEOF()) return null;
		var n = this.char();
		return n === 60 || n === 123 || n === 35 && (t === "plural" || t === "selectordinal") || n === 125 && e > 0 ? null : (this.bump(), vh(n));
	}, e.prototype.parseArgument = function(e, t) {
		var n = this.clonePosition();
		if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(K.EXPECT_ARGUMENT_CLOSING_BRACE, J(n, this.clonePosition()));
		if (this.char() === 125) return this.bump(), this.error(K.EMPTY_ARGUMENT, J(n, this.clonePosition()));
		var r = this.parseIdentifierIfPossible().value;
		if (!r) return this.error(K.MALFORMED_ARGUMENT, J(n, this.clonePosition()));
		if (this.bumpSpace(), this.isEOF()) return this.error(K.EXPECT_ARGUMENT_CLOSING_BRACE, J(n, this.clonePosition()));
		switch (this.char()) {
			case 125: return this.bump(), {
				val: {
					type: q.argument,
					value: r,
					location: J(n, this.clonePosition())
				},
				err: null
			};
			case 44: return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(K.EXPECT_ARGUMENT_CLOSING_BRACE, J(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
			default: return this.error(K.MALFORMED_ARGUMENT, J(n, this.clonePosition()));
		}
	}, e.prototype.parseIdentifierIfPossible = function() {
		var e = this.clonePosition(), t = this.offset(), n = gh(this.message, t), r = t + n.length;
		return this.bumpTo(r), {
			value: n,
			location: J(e, this.clonePosition())
		};
	}, e.prototype.parseArgumentOptions = function(e, t, n, r) {
		var i = this.clonePosition(), a = this.parseIdentifierIfPossible().value, o = this.clonePosition();
		switch (a) {
			case "": return this.error(K.EXPECT_ARGUMENT_TYPE, J(i, o));
			case "number":
			case "date":
			case "time":
				this.bumpSpace();
				var s = null;
				if (this.bumpIf(",")) {
					this.bumpSpace();
					var c = this.clonePosition();
					if ((g = this.parseSimpleArgStyleIfPossible()).err) return g;
					if ((f = Sh(g.val)).length === 0) return this.error(K.EXPECT_ARGUMENT_STYLE, J(this.clonePosition(), this.clonePosition()));
					s = {
						style: f,
						styleLocation: J(c, this.clonePosition())
					};
				}
				if ((_ = this.tryParseArgumentClose(r)).err) return _;
				var l = J(r, this.clonePosition());
				if (s && _h(s?.style, "::", 0)) {
					var u = xh(s.style.slice(2));
					if (a === "number") return (g = this.parseNumberSkeletonFromString(u, s.styleLocation)).err ? g : {
						val: {
							type: q.number,
							value: n,
							location: l,
							style: g.val
						},
						err: null
					};
					if (u.length === 0) return this.error(K.EXPECT_DATE_TIME_SKELETON, l);
					var d = u;
					this.locale && (d = function(e, t) {
						for (var n = "", r = 0; r < e.length; r++) {
							var i = e.charAt(r);
							if (i === "j") {
								for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i;) a++, r++;
								var o = 1 + (1 & a), s = a < 2 ? 1 : 3 + (a >> 1), c = ah(t);
								for (c != "H" && c != "k" || (s = 0); s-- > 0;) n += "a";
								for (; o-- > 0;) n = c + n;
							} else n += i === "J" ? "H" : i;
						}
						return n;
					}(u, this.locale));
					var f = {
						type: Hm.dateTime,
						pattern: d,
						location: s.styleLocation,
						parsedOptions: this.shouldParseSkeletons ? Km(d) : {}
					};
					return {
						val: {
							type: a === "date" ? q.date : q.time,
							value: n,
							location: l,
							style: f
						},
						err: null
					};
				}
				return {
					val: {
						type: a === "number" ? q.number : a === "date" ? q.date : q.time,
						value: n,
						location: l,
						style: s?.style ?? null
					},
					err: null
				};
			case "plural":
			case "selectordinal":
			case "select":
				var p = this.clonePosition();
				if (this.bumpSpace(), !this.bumpIf(",")) return this.error(K.EXPECT_SELECT_ARGUMENT_OPTIONS, J(p, G({}, p)));
				this.bumpSpace();
				var m = this.parseIdentifierIfPossible(), h = 0;
				if (a !== "select" && m.value === "offset") {
					if (!this.bumpIf(":")) return this.error(K.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, J(this.clonePosition(), this.clonePosition()));
					var g;
					if (this.bumpSpace(), (g = this.tryParseDecimalInteger(K.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, K.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return g;
					this.bumpSpace(), m = this.parseIdentifierIfPossible(), h = g.val;
				}
				var _, v = this.tryParsePluralOrSelectOptions(e, a, t, m);
				if (v.err) return v;
				if ((_ = this.tryParseArgumentClose(r)).err) return _;
				var y = J(r, this.clonePosition());
				return a === "select" ? {
					val: {
						type: q.select,
						value: n,
						options: yh(v.val),
						location: y
					},
					err: null
				} : {
					val: {
						type: q.plural,
						value: n,
						options: yh(v.val),
						offset: h,
						pluralType: a === "plural" ? "cardinal" : "ordinal",
						location: y
					},
					err: null
				};
			default: return this.error(K.INVALID_ARGUMENT_TYPE, J(i, o));
		}
	}, e.prototype.tryParseArgumentClose = function(e) {
		return this.isEOF() || this.char() !== 125 ? this.error(K.EXPECT_ARGUMENT_CLOSING_BRACE, J(e, this.clonePosition())) : (this.bump(), {
			val: !0,
			err: null
		});
	}, e.prototype.parseSimpleArgStyleIfPossible = function() {
		for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
			case 39:
				this.bump();
				var n = this.clonePosition();
				if (!this.bumpUntil("'")) return this.error(K.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, J(n, this.clonePosition()));
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
				--e;
				break;
			default: this.bump();
		}
		return {
			val: this.message.slice(t.offset, this.offset()),
			err: null
		};
	}, e.prototype.parseNumberSkeletonFromString = function(e, t) {
		var n = [];
		try {
			n = function(e) {
				if (e.length === 0) throw Error("Number skeleton cannot be empty");
				for (var t = [], n = 0, r = e.split(qm).filter(function(e) {
					return e.length > 0;
				}); n < r.length; n++) {
					var i = r[n].split("/");
					if (i.length === 0) throw Error("Invalid number skeleton");
					for (var a = i[0], o = i.slice(1), s = 0, c = o; s < c.length; s++) if (c[s].length === 0) throw Error("Invalid number skeleton");
					t.push({
						stem: a,
						options: o
					});
				}
				return t;
			}(e);
		} catch {
			return this.error(K.INVALID_NUMBER_SKELETON, t);
		}
		return {
			val: {
				type: Hm.number,
				tokens: n,
				location: t,
				parsedOptions: this.shouldParseSkeletons ? rh(n) : {}
			},
			err: null
		};
	}, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, r) {
		for (var i, a = !1, o = [], s = /* @__PURE__ */ new Set(), c = r.value, l = r.location;;) {
			if (c.length === 0) {
				var u = this.clonePosition();
				if (t === "select" || !this.bumpIf("=")) break;
				var d = this.tryParseDecimalInteger(K.EXPECT_PLURAL_ARGUMENT_SELECTOR, K.INVALID_PLURAL_ARGUMENT_SELECTOR);
				if (d.err) return d;
				l = J(u, this.clonePosition()), c = this.message.slice(u.offset, this.offset());
			}
			if (s.has(c)) return this.error(t === "select" ? K.DUPLICATE_SELECT_ARGUMENT_SELECTOR : K.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, l);
			c === "other" && (a = !0), this.bumpSpace();
			var f = this.clonePosition();
			if (!this.bumpIf("{")) return this.error(t === "select" ? K.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : K.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, J(this.clonePosition(), this.clonePosition()));
			var p = this.parseMessage(e + 1, t, n);
			if (p.err) return p;
			var m = this.tryParseArgumentClose(f);
			if (m.err) return m;
			o.push([c, {
				value: p.val,
				location: J(f, this.clonePosition())
			}]), s.add(c), this.bumpSpace(), c = (i = this.parseIdentifierIfPossible()).value, l = i.location;
		}
		return o.length === 0 ? this.error(t === "select" ? K.EXPECT_SELECT_ARGUMENT_SELECTOR : K.EXPECT_PLURAL_ARGUMENT_SELECTOR, J(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(K.MISSING_OTHER_CLAUSE, J(this.clonePosition(), this.clonePosition())) : {
			val: o,
			err: null
		};
	}, e.prototype.tryParseDecimalInteger = function(e, t) {
		var n = 1, r = this.clonePosition();
		this.bumpIf("+") || this.bumpIf("-") && (n = -1);
		for (var i = !1, a = 0; !this.isEOF();) {
			var o = this.char();
			if (!(o >= 48 && o <= 57)) break;
			i = !0, a = 10 * a + (o - 48), this.bump();
		}
		var s = J(r, this.clonePosition());
		return i ? mh(a *= n) ? {
			val: a,
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
		var t = bh(this.message, e);
		if (t === void 0) throw Error(`Offset ${e} is at invalid UTF-16 code unit boundary`);
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
			e === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
		}
	}, e.prototype.bumpIf = function(e) {
		if (_h(this.message, e, this.offset())) {
			for (var t = 0; t < e.length; t++) this.bump();
			return !0;
		}
		return !1;
	}, e.prototype.bumpUntil = function(e) {
		var t = this.offset(), n = this.message.indexOf(e, t);
		return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1);
	}, e.prototype.bumpTo = function(e) {
		if (this.offset() > e) throw Error(`targetOffset ${e} must be greater than or equal to the current offset ${this.offset()}`);
		for (e = Math.min(e, this.message.length);;) {
			var t = this.offset();
			if (t === e) break;
			if (t > e) throw Error(`targetOffset ${e} is at invalid UTF-16 code unit boundary`);
			if (this.bump(), this.isEOF()) break;
		}
	}, e.prototype.bumpSpace = function() {
		for (; !this.isEOF() && Oh(this.char());) this.bump();
	}, e.prototype.peek = function() {
		if (this.isEOF()) return null;
		var e = this.char(), t = this.offset();
		return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null;
	}, e;
}();
function Eh(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Dh(e) {
	return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Oh(e) {
	return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function kh(e) {
	return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function Ah(e) {
	e.forEach(function(e) {
		if (delete e.location, function(e) {
			return e.type === q.select;
		}(e) || function(e) {
			return e.type === q.plural;
		}(e)) for (var t in e.options) delete e.options[t].location, Ah(e.options[t].value);
		else (function(e) {
			return e.type === q.number;
		})(e) && function(e) {
			return !(!e || typeof e != "object" || e.type !== Hm.number);
		}(e.style) ? delete e.style.location : !function(e) {
			return e.type === q.date;
		}(e) && !function(e) {
			return e.type === q.time;
		}(e) || !function(e) {
			return !(!e || typeof e != "object" || e.type !== Hm.dateTime);
		}(e.style) ? function(e) {
			return e.type === q.tag;
		}(e) && Ah(e.children) : delete e.style.location;
	});
}
function jh(e) {
	if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
	var t = e.default;
	if (typeof t == "function") {
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
var Mh, Y = {};
function Nh() {
	if (Mh) return Y;
	var e, t;
	return Mh = 1, Object.defineProperty(Y, "__esModule", { value: !0 }), Y.SKELETON_TYPE = Y.TYPE = void 0, Y.isLiteralElement = function(t) {
		return t.type === e.literal;
	}, Y.isArgumentElement = function(t) {
		return t.type === e.argument;
	}, Y.isNumberElement = function(t) {
		return t.type === e.number;
	}, Y.isDateElement = function(t) {
		return t.type === e.date;
	}, Y.isTimeElement = function(t) {
		return t.type === e.time;
	}, Y.isSelectElement = function(t) {
		return t.type === e.select;
	}, Y.isPluralElement = function(t) {
		return t.type === e.plural;
	}, Y.isPoundElement = function(t) {
		return t.type === e.pound;
	}, Y.isTagElement = function(t) {
		return t.type === e.tag;
	}, Y.isNumberSkeleton = function(e) {
		return !(!e || typeof e != "object" || e.type !== t.number);
	}, Y.isDateTimeSkeleton = function(e) {
		return !(!e || typeof e != "object" || e.type !== t.dateTime);
	}, Y.createLiteralElement = function(t) {
		return {
			type: e.literal,
			value: t
		};
	}, Y.createNumberElement = function(t, n) {
		return {
			type: e.number,
			value: t,
			style: n
		};
	}, function(e) {
		e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
	}(e || (Y.TYPE = e = {})), function(e) {
		e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
	}(t || (Y.SKELETON_TYPE = t = {})), Y;
}
var Ph, Fh = Nh(), Ih = {}, Lh = jh(Um), Rh = function() {
	if (Ph) return Ih;
	Ph = 1, Object.defineProperty(Ih, "__esModule", { value: !0 }), Ih.printAST = n, Ih.doPrintAST = r, Ih.printDateTimeSkeleton = o;
	var e = Lh, t = Nh();
	function n(e) {
		return r(e, !1);
	}
	function r(s, c) {
		return s.map(function(l, u) {
			return (0, t.isLiteralElement)(l) ? function(e, t, n, r) {
				var a = e.value;
				return n || a[0] !== "'" || (a = `''${a.slice(1)}`), r || a[a.length - 1] !== "'" || (a = `${a.slice(0, a.length - 1)}''`), a = i(a), t ? a.replace("#", "'#'") : a;
			}(l, c, u === 0, u === s.length - 1) : (0, t.isArgumentElement)(l) ? function(e) {
				return `{${e.value}}`;
			}(l) : (0, t.isDateElement)(l) || (0, t.isTimeElement)(l) || (0, t.isNumberElement)(l) ? function(e) {
				return `{${e.value}, ${t.TYPE[e.type]}${e.style ? `, ${n = e.style, typeof n == "string" ? i(n) : n.type === t.SKELETON_TYPE.dateTime ? `::${o(n)}` : `::${n.tokens.map(a).join(" ")}`}` : ""}}`;
				var n;
			}(l) : (0, t.isPluralElement)(l) ? function(t) {
				var n = t.pluralType === "cardinal" ? "plural" : "selectordinal";
				return `{${[
					t.value,
					n,
					e.__spreadArray([t.offset ? `offset:${t.offset}` : ""], Object.keys(t.options).map(function(e) {
						return `${e}{${r(t.options[e].value, !0)}}`;
					}), !0).filter(Boolean).join(" ")
				].join(",")}}`;
			}(l) : (0, t.isSelectElement)(l) ? function(e) {
				return `{${[
					e.value,
					"select",
					Object.keys(e.options).map(function(t) {
						return `${t}{${r(e.options[t].value, !1)}}`;
					}).join(" ")
				].join(",")}}`;
			}(l) : (0, t.isPoundElement)(l) ? "#" : (0, t.isTagElement)(l) ? function(e) {
				return `<${e.value}>${n(e.children)}</${e.value}>`;
			}(l) : void 0;
		}).join("");
	}
	function i(e) {
		return e.replace(/([{}](?:[\s\S]*[{}])?)/, "'$1'");
	}
	function a(e) {
		var t = e.stem, n = e.options;
		return n.length === 0 ? t : `${t}${n.map(function(e) {
			return `/${e}`;
		}).join("")}`;
	}
	function o(e) {
		return e.pattern;
	}
	return Ih;
}(), zh = {
	variable: "v",
	number: "n",
	datetime: "d",
	currency: "c",
	"relative-time": "rt"
};
function Bh(e) {
	return zh[e];
}
function Vh({ icuString: e, shouldVisit: t, visitor: n, options: { recurseIntoVisited: r = !0, ...i } }) {
	let a = function(e, t) {
		t === void 0 && (t = {}), t = G({
			shouldParseSkeletons: !0,
			requiresOtherClause: !0
		}, t);
		var n = new Th(e, t).parse();
		if (n.err) {
			var r = SyntaxError(K[n.err.kind]);
			throw r.location = n.err.location, r.originalMessage = n.err.message, r;
		}
		return t != null && t.captureLocation || Ah(n.val), n.val;
	}(e, i);
	return o(a), a;
	function o(e) {
		e.map(s);
	}
	function s(e) {
		let i = !1;
		t(e) && (n(e), i = !0), i && !r || (e.type === q.select || e.type === q.plural ? Object.values(e.options).map((e) => e.value).map(o) : e.type === q.tag && o(e.children));
	}
}
var Hh = "_gt_", Uh = RegExp(`^${Hh}\\d+$`), Wh = RegExp(`^${Hh}$`);
function Gh(e) {
	return e.type === Fh.TYPE.select && Uh.test(e.value) && !!e.options.other && (e.options.other.value.length === 0 || e.options.other.value.length > 0 && e.options.other.value[0]?.type === Fh.TYPE.literal);
}
function Kh(e) {
	return e.type === Fh.TYPE.select && Wh.test(e.value) && !!e.options.other && (e.options.other.value.length === 0 || e.options.other.value.length > 0 && e.options.other.value[0]?.type === Fh.TYPE.literal);
}
function qh(e) {
	if (!e.includes("_gt_")) return e;
	let t = [];
	Vh({
		icuString: e,
		shouldVisit: Kh,
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
	let n = [], r = 0;
	for (let i = 0; i < t.length; i++) {
		let { start: a, end: o, otherStart: s, otherEnd: c } = t[i];
		n.push(e.slice(r, a)), n.push(e.slice(a, a + 4 + 1)), n.push(String(i + 1)), n.push(e.slice(a + 4 + 1, s)), n.push("{}"), n.push(e.slice(c, o)), r = o;
	}
	return n.push(e.slice(r, e.length)), n.join("");
}
function Jh(e) {
	if (!e.includes("_gt_")) return {};
	let t = 1, n = {};
	return Vh({
		icuString: e,
		shouldVisit: Kh,
		visitor: function(e) {
			n[e.value + t] = e.options.other.value.length ? e.options.other.value[0]?.value : "", t += 1;
		},
		options: { recurseIntoVisited: !1 }
	}), n;
}
function Yh(e) {
	return e.includes("_gt_") ? Rh.printAST(Vh({
		icuString: e,
		shouldVisit: Gh,
		visitor: function(e) {
			e.type = Fh.TYPE.argument, delete e.options;
		},
		options: { recurseIntoVisited: !1 }
	})) : e;
}
function X(e, t) {
	if (e == null) throw Error("Cannot index into an undefined dictionary");
	return e[t];
}
function Xh(e, t, n) {
	e[t] = n;
}
var Z = "@generaltranslation/react-core", Zh = `${Z} Error: Production environments cannot include an api key.`, Qh = `${Z} Error: Fetching batched translations failed`, $h = (e, t) => e ? `${Z} Error: Translation failed for id: ${e}, hash: ${t} ` : `${Z} Error: Translation failed for hash: ${t}`, eg = (e, t) => `${Z} Error: error rendering string ${t ? `for id: "${t}"` : ""} original message: "${e}"`, tg = (e, t, n = "tx") => `${Z} Error: string translation error. ${n}("${e}")${t ? ` with id "${t}"` : ""} could not locate translation.`, ng = (e) => `${Z} Error: Dictionary subtree not found for id: "${e}"`, rg = (e) => `${Z} Error: Invalid ICU string dictionary entry found for id: "${e}"`, ig = `${Z} Warning: Translation cloud services require a project ID! Find yours at generaltranslation.com/dashboard.`, ag = (e) => `${Z} Warning: No valid dictionary entry found for id: "${e}"`, og = `${Z} Warning: A development API key is required for runtime translation!  Find your development API key: generaltranslation.com/dashboard.  (Or, disable this warning message by setting runtimeUrl to an empty string which disables runtime translation.)`, sg = `${Z} Warning: Runtime translation timed out.`, cg = `${Z} Warning: No dictionary was found. Ensure you are either passing your dictionary to the <GTProvider>.`;
function lg(e) {
	return /* @__PURE__ */ Error(`${Z}: The ${e} function was not overridden. This is likely the result of importing directly from "generaltranslation/react-core".`);
}
function ug({}) {
	throw lg("readAuthFromEnv");
}
var dg = {
	pl: "placeholder",
	ti: "title",
	alt: "alt",
	arl: "aria-label",
	arb: "aria-labelledby",
	ard: "aria-describedby"
}, fg = (e) => {
	if (!e) return "";
	let { type: t, props: n } = e;
	if (t && typeof t == "function") {
		if ("displayName" in t && typeof t.displayName == "string" && t.displayName) return t.displayName;
		if ("name" in t && typeof t.name == "string" && t.name) return t.name;
	}
	return t && typeof t == "string" ? t : n.href ? "a" : n["data-_gt"]?.id ? `C${n["data-_gt"].id}` : "function";
}, pg = (e) => {
	let { props: t } = e, n = { t: fg(e) };
	if (t["data-_gt"]) {
		let e = t["data-_gt"], r = e.transformation;
		if (r === "variable") {
			let n = e.variableType || "variable", r = Np(t, n), i = Bh(n);
			return {
				i: e.id,
				k: r,
				v: i
			};
		}
		n.i = e.id, n.d = ((e, t, n) => {
			let r = Object.entries(dg).reduce((e, [n, r]) => (t[r] && (e[n] = t[r]), e), {});
			if (e === "plural" && n) {
				let e = {};
				Object.entries(n).forEach(([t, n]) => {
					e[t] = hg(n);
				}), r = {
					...r,
					b: e,
					t: "p"
				};
			}
			if (e === "branch" && n) {
				let e = {};
				Object.entries(n).forEach(([t, n]) => {
					e[t] = hg(n);
				}), r = {
					...r,
					b: e,
					t: "b"
				};
			}
			return Object.keys(r).length ? r : void 0;
		})(r, t, e.branches);
		let i = Object.entries(dg).reduce((e, [n, r]) => (t[r] && (e[n] = t[r]), e), {});
		if (r === "plural" && e.branches) {
			let t = {};
			Object.entries(e.branches).forEach(([e, n]) => {
				t[e] = hg(n);
			}), i = {
				...i,
				b: t,
				t: "p"
			};
		}
		if (r === "branch" && e.branches) {
			let t = {};
			Object.entries(e.branches).forEach(([e, n]) => {
				t[e] = hg(n);
			}), i = {
				...i,
				b: t,
				t: "b"
			};
		}
		n.d = Object.keys(i).length ? i : void 0;
	}
	return t.children && (n.c = hg(t.children)), n;
}, mg = (e) => {
	return n = e, t.isValidElement(n) ? pg(e) : typeof e == "number" ? e.toString() : e;
	var n;
};
function hg(e) {
	return Array.isArray(e) ? e.map(mg) : mg(e);
}
function gg(e) {
	if (typeof e == "string") return !0;
	if (Array.isArray(e)) {
		if (typeof e?.[0] != "string") return !1;
		let t = e?.[1];
		if (t === void 0 || t && typeof t == "object") return !0;
	}
	return !1;
}
function _g(e, t) {
	let n = e, r = t.split(".");
	for (let e of r) {
		if (typeof n != "object" && !Array.isArray(n)) return;
		n = X(n, e);
	}
	return n;
}
function vg(e) {
	if (Array.isArray(e)) {
		if (e.length === 1) return { entry: e[0] };
		if (e.length === 2) return {
			entry: e[0],
			metadata: e[1]
		};
	}
	return { entry: e };
}
var yg = (e = "production") => ({
	method: "default",
	timeout: e === "development" ? 8e3 : 12e3
});
function bg(e) {
	return e !== void 0 && (typeof e == "string" || !!Array.isArray(e) && (e.length === 1 || e.length === 2) && typeof e[0] == "string" && (e.length !== 2 || typeof e[1] == "object" && e[1] !== null && ("$context" in e[1] || "$maxChars" in e[1] || "$_hash" in e[1])));
}
var xg = (e) => typeof e == "string" || Array.isArray(e), Sg = (e) => typeof e == "object" && !!e && !Array.isArray(e);
function Cg(e, t) {
	if (Array.isArray(e)) return e.map((e, n) => bg(e) ? t[n] : Cg(e, t[n]));
	let n = {
		...Object.fromEntries(Object.entries(e).filter(([, e]) => xg(e))),
		...Object.fromEntries(Object.entries(t).filter(([, e]) => xg(e)))
	}, r = Object.entries(e).filter(([, e]) => Sg(e)).map(([e]) => e), i = Object.entries(t).filter(([, e]) => Sg(e)).map(([e]) => e), a = /* @__PURE__ */ new Set([...r, ...i]);
	for (let r of a) n[r] = Cg(X(e, r) || {}, X(t, r) || {});
	return n;
}
function wg({ dictionary: e, id: t }) {
	if (t === "") return e;
	let n = e, r = t.split(".");
	for (let e of r) n = X(n, e);
	return n;
}
var Tg = [
	"constructor",
	"prototype",
	"__proto__"
];
function Eg(e, t, n, r) {
	if (bg(t)) return e;
	let i = n.split(".");
	i.forEach((e) => {
		if (function(e) {
			return !!Tg.includes(e);
		}(e)) throw Error(`Invalid key: ${e}`);
	}), t ||= {};
	for (let e of i.slice(0, -1)) X(t, e) ?? Xh(t, e, Array.isArray(X(r, e)) ? [] : {}), t = X(t, e), r = X(r, e);
	Xh(t, i[i.length - 1], e);
}
function Dg(e) {
	let t = {};
	return Array.isArray(e) && (t = []), Object.entries(e).forEach(([e, n]) => {
		if (bg(n)) {
			let { entry: r } = vg(n);
			Xh(t, e, r);
		} else Xh(t, e, Dg(n));
	}), t;
}
function Og(e) {
	return function(e) {
		if (Up(e), Jp) return e.toHex();
		let t = "";
		for (let n = 0; n < e.length; n++) t += Yp[e[n]];
		return t;
	}(om(function(e) {
		if (typeof e != "string") throw TypeError("string expected");
		return new Uint8Array(new TextEncoder().encode(e));
	}(e))).slice(0, 16);
}
function kg({ source: e, context: t, id: n, maxChars: r, dataFormat: i }, a = Og) {
	let o;
	return o = i === "JSX" ? jg(e) : e, a(Vp({
		source: o,
		...n && { id: n },
		...t && { context: t },
		...r != null && { maxChars: Math.abs(r) },
		...i && { dataFormat: i }
	}));
}
var Ag = (e) => {
	if (e && typeof e == "object") {
		let t = {};
		if ("c" in e && e.c && (t.c = jg(e.c)), "d" in e) {
			let n = e?.d;
			n?.b && (t.b = Object.fromEntries(Object.entries(n.b).map(([e, t]) => [e, jg(t)]))), n?.t && (t.t = n.t);
		}
		return Hp(e) ? {
			k: e.k,
			...e.v && { v: e.v }
		} : t;
	}
	return e;
};
function jg(e) {
	return Array.isArray(e) ? e.map(Ag) : Ag(e);
}
function Mg(e, t = "") {
	let n = !1;
	return Object.entries(e).forEach(([r, i]) => {
		let a = t ? `${t}.${r}` : r;
		if (bg(i)) {
			let { entry: t, metadata: o } = vg(i);
			o?.$_hash || (o ||= {}, o.$_hash = kg({
				source: qh(t),
				...o?.$context && { context: o.$context },
				...o?.$maxChars != null && { maxChars: Math.abs(o.$maxChars) },
				id: a,
				dataFormat: "ICU"
			}), Xh(e, r, [t, o]), n = !0);
		} else {
			let { updateDictionary: e } = Mg(i, a);
			n ||= e;
		}
	}), {
		dictionary: e,
		updateDictionary: n
	};
}
function Ng(e, t, n) {
	let r = wg({
		dictionary: e,
		id: n
	});
	if (!r) throw Error(ng(n));
	if (bg(r)) throw Error(`${Z} Error: Cannot inject and merge a dictionary entry`);
	return function(e, t, n) {
		let r = _g(e, n);
		if (!r) throw Error(ng(n));
		if (bg(r)) throw Error(`${Z} Error: Cannot inject and merge a dictionary entry`);
		let i = n.split("."), a = i.slice(0, -1), o = i[i.length - 1], s = e;
		return a.forEach((e) => {
			s = X(s, e);
		}), Xh(s, o, t), e;
	}(e, Cg(r, t), n);
}
function Pg(e, t, n = "") {
	let r = [];
	return Object.entries(e).forEach(([e, i]) => {
		let a = n ? `${n}.${e}` : e;
		if (bg(i)) {
			let { entry: n, metadata: o } = vg(i);
			X(t, e) || r.push({
				source: n,
				metadata: {
					$id: a,
					$context: o?.$context,
					$maxChars: o?.$maxChars,
					$_hash: o?.$_hash || ""
				}
			});
		} else r.push(...Pg(i, X(t, e) || (Array.isArray(i) ? [] : {}), a));
	}), r;
}
function Fg(e) {
	if (e.lastIndexOf(":") === -1) return null;
	let t = e.slice(e.lastIndexOf(":") + 1);
	try {
		return JSON.parse(function(e) {
			if (typeof Buffer < "u") return Buffer.from(e, "base64").toString("utf8");
			let t = atob(e), n = new Uint8Array(t.length);
			for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
			return new TextDecoder().decode(n);
		}(t));
	} catch {
		return null;
	}
}
function Ig(e) {
	return typeof e == "string" && e.lastIndexOf(":") !== -1 ? e.slice(0, e.lastIndexOf(":")) : e;
}
var Lg = o(void 0);
globalThis.__DANGEROUS_USE_REGISTRY__ ?? (globalThis.__DANGEROUS_USE_REGISTRY__ = /* @__PURE__ */ new Map());
try {
	Function("o", "k", "return o[k]")(e, "use");
} catch {}
function Rg({ gt: e, locale: t, versionId: n, defaultLocale: r, runtimeUrl: i, renderSettings: a, setTranslations: o, environment: s, ...c }) {
	let u = !!e.projectId && !!i && !!e.devApiKey && s === "development";
	if (!u) {
		let e = (e) => Promise.reject(/* @__PURE__ */ Error(`${e}() failed because translation is disabled`));
		return {
			developmentApiEnabled: u,
			registerIcuForTranslation: () => e("registerIcuForTranslation"),
			registerJsxForTranslation: () => e("registerJsxForTranslation")
		};
	}
	let h = p({
		gt: e,
		locale: t,
		baseMetadata: {
			...c,
			projectId: e.projectId,
			sourceLocale: r
		},
		timeout: a.timeout
	});
	h.current.gt = e, h.current.locale = t, h.current.baseMetadata = {
		...c,
		projectId: e.projectId,
		sourceLocale: r
	}, h.current.timeout = a.timeout;
	let g = p(!1), _ = p(null), [v, y] = m(0), b = l((e) => {
		o((t) => {
			let n = Object.keys(e);
			if (n.length === 0) return t;
			let r = t ? { ...t } : {}, i = !1;
			for (let a of n) {
				let n = e[a], o = t?.[a];
				Object.is(o, n) || (r[a] = n, i = !0);
			}
			return i ? r : t;
		});
	}, [o]), x = l((e) => {
		_.current = {
			..._.current ?? {},
			...e
		}, g.current && y((e) => e + 1);
	}, []);
	d(() => {
		if (g.current = !0, _.current) {
			let e = _.current;
			_.current = null, b(e);
		}
		return () => {
			g.current = !1;
		};
	}, [b]), d(() => {
		if (!g.current) return;
		let e = _.current;
		e && (_.current = null, b(e));
	}, [v, b]);
	let S = p(0), C = p(/* @__PURE__ */ new Map()), ee = p(/* @__PURE__ */ new Map()), te = l(async (e) => {
		if (e.size === 0) return {};
		S.current += 1;
		let { gt: t, locale: n, baseMetadata: r, timeout: i } = h.current, a = Array.from(e.values()), o = {}, s = /* @__PURE__ */ new Map();
		try {
			let e = {};
			for (let t of a) {
				let { source: n, metadata: r } = t;
				e[r.hash] = {
					source: n,
					metadata: {
						...r,
						dataFormat: t.dataFormat
					}
				};
			}
			let c = await t.translateMany(e, {
				...r,
				targetLocale: n
			}, i);
			for (let e of a) {
				let { hash: t, id: n } = e.metadata, r = c[t];
				if (r && r.success) {
					let e = r.translation;
					o[t] = e, s.set(t, e);
				} else if (r && r.error) {
					let e = $h(n, t);
					console.warn(`${e} ${r.error || "An upstream error occurred."}`), o[t] = null, s.set(t, null);
				} else {
					let e = $h(n, t);
					console.warn(`${e} Unknown response format.`, r), o[t] = null, s.set(t, null);
				}
			}
		} catch (e) {
			e?.name === "AbortError" ? console.warn(sg) : console.warn(Qh, e), a.forEach((e) => {
				o[e.metadata.hash] = null, s.set(e.metadata.hash, null);
			});
		} finally {
			--S.current, a.forEach((e) => {
				let t = s.get(e.metadata.hash);
				t === void 0 ? (console.warn(`No translation result for ${e.metadata.hash}; resolving as null.`), e.resolve(null)) : e.resolve(t);
			});
		}
		return o;
	}, []), w = p(null), T = p(async () => {}), ne = l((e) => {
		x(e), C.current.size > 0 && (w.current = setTimeout(() => {
			w.current = null, T.current();
		}, 50));
	}, [x]), re = l(() => {
		T.current = async () => {
			if (S.current >= 100) return void (w.current = setTimeout(() => {
				w.current = null, T.current();
			}, 50));
			let e = C.current;
			if (e.size === 0) return;
			let t = Array.from(e.entries()).slice(0, Math.min(25, e.size)), n = new Map(t);
			t.forEach(([t]) => e.delete(t));
			let r = await te(n);
			ne(r);
		};
	}, [te, ne]), ie = l((e = !1) => {
		if (re(), e) return w.current &&= (clearTimeout(w.current), null), void T.current();
		w.current ||= setTimeout(() => {
			w.current = null, T.current();
		}, 50);
	}, [re]), ae = l((e) => (t) => {
		let n = `${t.metadata.hash}:${t.targetLocale}`, r = ee.current.get(n);
		if (r) return r;
		let i = new Promise((r) => {
			let i = e === "JSX" ? {
				dataFormat: "JSX",
				source: t.source,
				metadata: {
					...t.metadata,
					...t.metadata.maxChars != null && { maxChars: Math.abs(t.metadata.maxChars) }
				},
				resolve: r,
				reject: () => {}
			} : {
				dataFormat: "ICU",
				source: t.source,
				metadata: {
					...t.metadata,
					...t.metadata.maxChars != null && { maxChars: Math.abs(t.metadata.maxChars) }
				},
				resolve: r,
				reject: () => {}
			};
			C.current.set(n, i);
			let a = C.current.size >= 25 && S.current < 100;
			ie(a);
		}).finally(() => {
			ee.current.delete(n);
		});
		return ee.current.set(n, i), i;
	}, [ie]), oe = f(() => ae("ICU"), [ae]), se = f(() => ae("JSX"), [ae]);
	return d(() => () => {
		w.current && clearTimeout(w.current);
	}, []), {
		developmentApiEnabled: u,
		registerIcuForTranslation: oe,
		registerJsxForTranslation: se
	};
}
function zg({ gt: e, translations: t, locale: n, defaultLocale: r, translationRequired: i, developmentApiEnabled: a, registerIcuForTranslation: o, environment: s }) {
	function c({ message: t, variables: n, locales: r, fallback: i, id: a, maxChars: o, format: l }) {
		try {
			let a = Jh(i || ""), s = e.formatMessage(Object.keys(a).length ? Yh(t) : t, {
				locales: r,
				variables: {
					...n,
					...a,
					[Hh]: "other"
				},
				dataFormat: l
			});
			return e.formatCutoff(s, { maxChars: o });
		} catch (l) {
			if (s === "production") console.warn(((e, t) => `${Z} Warning: failed to render string ${t ? `for id: "${t}"` : ""} original message: "${e}"`)(t, a), "Error: ", l);
			else {
				if (!i) throw Error(`${eg(t, a)} Error: ${l}`);
				console.error(eg(t, a), "Error: ", l);
			}
			return i ? c({
				message: i,
				locales: r,
				variables: n,
				id: a,
				maxChars: o
			}) : e.formatCutoff(t, { maxChars: o });
		}
	}
	function l(e, t = {}) {
		if (!e || typeof e != "string") return null;
		let { $id: n, $context: r, $maxChars: i, $_hash: a, $format: o, ...s } = t;
		return {
			id: n,
			context: r,
			maxChars: i,
			_hash: a,
			variables: s,
			calculateHash: () => kg({
				source: qh(e),
				...r && { context: r },
				...i != null && { maxChars: Math.abs(i) },
				...n && { id: n },
				dataFormat: o || "ICU"
			}),
			renderMessage: (e, t, r) => c({
				message: e,
				locales: t,
				variables: s,
				id: n,
				fallback: r,
				maxChars: i,
				format: o
			})
		};
	}
	function u(e, n, r) {
		let i, a = "";
		return n && (i = t?.[n]), r && i === void 0 && (a = r, i = t?.[r]), i === void 0 && (a = e(), i = t?.[a]), {
			translationEntry: i,
			hash: a
		};
	}
	let d = (e, t = {}, s) => {
		let c = l(e, t);
		if (!c) return "";
		let { id: d, context: f, maxChars: p, _hash: m, calculateHash: h, renderMessage: g } = c;
		if (!i) return g(e, [r]);
		let { translationEntry: _, hash: v } = u(h, d, m);
		return _ === null ? g(e, [r]) : _ ? g(_, [n, r], e) : s?.[v] === void 0 ? a ? (o({
			source: qh(e),
			targetLocale: n,
			metadata: {
				...f && { context: f },
				...d && { id: d },
				...p != null && { maxChars: p },
				hash: v || ""
			}
		}), g(e, [r])) : (console.warn(tg(e, d, "gt")), g(e, [r])) : s?.[v] ? g(s?.[v], [n, r], e) : g(e, [r]);
	};
	return {
		_gtFunction: d,
		_mFunction: (e, s = {}, l) => {
			if (!e) return e;
			let u = Fg(e);
			if (!u || !u.$_hash || !u.$_source) return d(e, s, l);
			let { $_hash: f, $_source: p, $context: m, $hash: h, $id: g, $maxChars: _, $format: v, ...y } = u, b = (e, t, n) => c({
				message: e,
				locales: t,
				variables: y,
				fallback: n,
				maxChars: _,
				format: v
			});
			if (!i) return b(p, [r]);
			let x = t?.[u.$_hash];
			return x === null ? b(p, [r]) : x ? b(x, [n, r], p) : a ? l?.[f] === void 0 ? (o({
				source: qh(p),
				targetLocale: n,
				metadata: {
					...m && { context: m },
					..._ != null && { maxChars: _ },
					hash: f
				}
			}), b(p, [r])) : l?.[f] ? b(l?.[f], [n, r], p) : b(p, [r]) : (console.warn(tg(p, Ig(e), "m")), b(p, [r]));
		},
		_filterMessagesForPreload: (e) => {
			let t = [];
			for (let { message: n, ...r } of e) {
				let e = l(n, r);
				if (!e) continue;
				let { id: i, _hash: a, calculateHash: o } = e, { translationEntry: s, hash: c } = u(o, i, a);
				s || t.push({
					message: n,
					...r,
					$_hash: c
				});
			}
			return t;
		},
		_preloadMessages: async (e) => {
			let t = {};
			return await Promise.all(e.map(async ({ message: e, ...r }) => {
				let i = l(e, r);
				if (!i) return;
				let { id: a, context: s, maxChars: c, _hash: d, calculateHash: f } = i, { translationEntry: p, hash: m } = u(f, a, d);
				p && (t[m] = p), t[m] = await o({
					source: qh(e),
					targetLocale: n,
					metadata: {
						...s && { context: s },
						...a && { id: a },
						...c != null && { maxChars: c },
						hash: m
					}
				});
			})), t;
		}
	};
}
function Bg(e, t, n, r, i, a, o, s, c, u, d) {
	return l((s, l = {}) => {
		if (!t) return "";
		let f = _g(t, s);
		if (!f) return console.warn(ag(s)), "";
		if (!gg(f)) return console.warn(((e) => `${Z} Warning: Invalid dictionary entry found for id: "${e}"`)(s)), "";
		let { entry: p, metadata: m } = vg(f);
		if (!p || typeof p != "string") return "";
		let { $format: h, ...g } = l, _ = (t, n, r) => {
			try {
				let i = Jh(r || ""), a = e.formatMessage(Object.keys(i).length ? Yh(t) : t, {
					locales: n,
					variables: {
						...g,
						...i,
						[Hh]: "other"
					},
					dataFormat: h
				});
				return e.formatCutoff(a, { maxChars: m?.$maxChars ?? l.$maxChars });
			} catch (i) {
				if (d === "production") console.warn(((e) => `${Z} Warning: Invalid ICU string dictionary entry found for id: "${e}"`)(s), "Error: ", i);
				else {
					if (!r) throw Error(`${rg(s)} Error: ${i}`);
					console.error(rg(s), "Error: ", i);
				}
				return r ? _(r, n) : e.formatCutoff(t, { maxChars: m?.$maxChars ?? l.$maxChars });
			}
		};
		if (!o) return _(p, [a]);
		let v = _g(n || {}, s);
		if (v && gg(v)) {
			let { entry: e } = vg(v);
			return _(e, [i, a]);
		}
		let y = r?.[s], b = "", x = () => kg({
			source: qh(p),
			...m?.$context && { context: m.$context },
			...m?.$maxChars != null && { maxChars: Math.abs(m.$maxChars) },
			id: s,
			dataFormat: "ICU"
		});
		return y ||= (b = x(), r?.[b]), y ? _(y, [i, a], p) : (y === null || c && u({
			source: qh(p),
			targetLocale: i,
			metadata: {
				...m?.$context && { context: m.$context },
				...m?.$maxChars != null && { maxChars: m.$maxChars },
				id: s,
				hash: b || x()
			}
		}), _(p, [a]));
	}, [
		t,
		n,
		r,
		i,
		a,
		o,
		c,
		u,
		s
	]);
}
function Vg({ _locale: e, defaultLocale: t, locales: n, ssr: r, localeCookieName: i, customMapping: a, useDetermineLocale: o, enableI18n: s, reloadOnLocaleUpdate: c }) {
	let l = f(() => Array.from(/* @__PURE__ */ new Set([t, ...s ? n : []])), [
		t,
		n,
		s
	]), [u, d] = o({
		locale: e,
		defaultLocale: t,
		locales: l,
		ssr: r,
		localeCookieName: i,
		customMapping: a,
		enableI18n: s,
		reloadOnLocaleUpdate: c
	}), [p, m] = f(() => {
		let e = Yu(t, u, l, a), n = e && Qu(t, u);
		if (!a) {
			let e = [];
			if (l.forEach((t) => {
				Ql(t) || e.push(t);
			}), e.length) throw Error(((e) => `${Z} Error: Invalid locale codes in your configuration. Specify a list of valid locales or use "customMapping" to define aliases for the following invalid locales: ${e.join(", ")}.`)(e));
		}
		if (a) {
			let e = [];
			if (l.forEach((t) => {
				Ql(t, a) || e.push(t);
			}), e.length) throw Error(((e) => `${Z} Error: Invalid canonical locale codes in your configuration: ${e.join(", ")}.`)(e));
		}
		return [e, n];
	}, [
		t,
		u,
		l
	]);
	return {
		locale: u,
		setLocale: d,
		locales: l,
		translationRequired: p,
		dialectTranslationRequired: m
	};
}
function Hg({ devApiKey: e, projectId: t, runtimeUrl: n, loadTranslationsType: r, cacheUrl: i, locales: a, environment: o }) {
	d(() => {
		if (o === "production" && e) throw Error(Zh);
		if (r === "custom" || !i && !n || t || o !== "development" || console.warn(ig), t && n && r !== "custom" && !e && o === "development" && console.warn(og), n === zp || i === Rp && r === "default") {
			let e = a.filter((e) => !jp(e));
			e.length && console.warn(((e) => `${Z} Warning: The following locales are currently unsupported by our service: ${e.map((e) => {
				let { name: t } = Ju(e);
				return `${e} (${t})`;
			}).join(", ")}`)(e));
		}
	}, [
		e,
		r,
		i,
		n,
		t,
		a
	]);
}
async function Ug(e, t) {
	let n = Array.from(/* @__PURE__ */ new Set([e, Ju(e).languageCode]));
	for (let e of n) try {
		let n = await t(e);
		if (n) return n;
	} catch {}
	console.warn(cg);
}
function Wg({ _translations: e, translationRequired: t, loadTranslationsType: n, loadTranslations: r, locale: i, cacheUrl: a, projectId: o, _versionId: s, gt: c }) {
	let [l, u] = m(e || (t && n !== "disabled" ? null : {})), f = p(!1);
	return d(() => {
		f.current ? u(t && n !== "disabled" ? null : {}) : f.current = !0;
	}, [i, n]), d(() => {
		if (l || !t || n === "disabled") return;
		let e = !0;
		return (async () => {
			let t;
			switch (n) {
				case "custom":
					if (r) try {
						t = await r(i);
					} catch (e) {
						console.error(((e = "") => `${Z} Error: Failed to fetch locally stored translations. If using a custom loadTranslations(${e}), make sure it is correctly implemented.`)(i), e);
					}
					break;
				case "default": try {
					t = await async function({ cacheUrl: e, projectId: t, locale: n, versionId: r, gt: i }) {
						return !t || !e || !n ? {} : (n = i.resolveCanonicalLocale(n), await (await fetch(r ? `${e}/${t}/${n}/${r}` : `${e}/${t}/${n}`)).json());
					}({
						cacheUrl: a || Rp,
						projectId: o,
						locale: i,
						versionId: s,
						gt: c
					});
				} catch (e) {
					console.error(e);
				}
			}
			t ||= {}, e && u(t);
		})(), () => {
			e = !1;
		};
	}, [
		l,
		t,
		n,
		a,
		o,
		i,
		s,
		c
	]), {
		translations: l,
		setTranslations: u
	};
}
function Gg(e, t, n, r, i, a, o, s, c, u, d, f) {
	return l((o, c, l = {}) => {
		if (c === "") throw Error(`${Z} Error: You cannot provide an empty id to t.obj()`);
		let p = wg({
			dictionary: e,
			id: c
		});
		if (!p) return console.warn(ag(c)), {};
		if (bg(p)) return f(o, l);
		if (!s) return Dg(p);
		let m = function({ dictionary: e, id: t, sourceDictionary: n }) {
			if (t === "") return e;
			let r = e, i = n, a = t.split(".");
			for (let e of a) X(r, e) === void 0 && (Array.isArray(X(i, e)) ? Xh(r, e, []) : Xh(r, e, {})), r = X(r, e);
			return r;
		}({
			dictionary: t,
			id: c,
			sourceDictionary: t
		}), { dictionary: h, updateDictionary: g } = Mg(structuredClone(p), c), _ = Pg(h, m, c), { dictionary: v, updateDictionary: y } = function(e, t, n, r, i = "") {
			let a = !1, o = i ? i.split(".") : [];
			return r.forEach(({ metadata: r }) => {
				let { $_hash: i, $id: s } = r, c = o.length > 0 ? s.split(".").slice(o.length).join(".") : s, l = _g(t, c), u;
				bg(l) && (u = vg(l).entry);
				let d = n[i] || u;
				d && (Eg(d, t, c, e), a = !0);
			}), {
				dictionary: t,
				updateDictionary: a
			};
		}(h, structuredClone(m), i || {}, _, c), b = function(e, t, n, r = "") {
			let i = r ? r.split(".") : [];
			return n.forEach(({ source: n, metadata: r }) => {
				let { $id: a } = r, o = i.length > 0 ? a.split(".").slice(i.length).join(".") : a, s = _g(t, o), c;
				bg(s) && (c = vg(s).entry), Eg(c || n, t, o, e);
			}), t;
		}(h, structuredClone(v), _, c);
		return u && Promise.allSettled(_.map(async (e) => {
			let { source: t, metadata: n } = e, r = n?.$id;
			return [r, await d({
				source: qh(t),
				targetLocale: a,
				metadata: {
					...n?.$context && { context: n.$context },
					...n?.$maxChars != null && { maxChars: n.$maxChars },
					id: r,
					hash: n?.$_hash
				}
			})];
		})).then((t) => {
			let n = t.filter((e) => e.status === "fulfilled").map((e) => e.value);
			n.length > 0 && r((t) => function(e, t, n) {
				return t.forEach(([t, r]) => {
					Eg(r, e, t, n);
				}), e;
			}(t, n, e));
		}), g && setTimeout(() => {
			n((e) => Ng(e, h, c));
		}, 0), y && setTimeout(() => {
			r((e) => Cg(e, v));
		}, 0), structuredClone(b);
	}, [
		e,
		i,
		a,
		o,
		s,
		c,
		u,
		d,
		t
	]);
}
function Kg({ enableI18n: e }) {
	let [t] = m(e);
	return { enableI18n: t };
}
function qg() {
	throw lg("isSSREnabled");
}
function Jg({}) {
	throw lg("useDetermineLocale");
}
function Yg({}) {
	throw lg("useRegionState");
}
function Xg({ children: e, config: t, environment: n = "production", projectId: r = t?.projectId || "", devApiKey: a = t?.devApiKey || "", _versionId: o = t?._versionId, dictionary: s = t?.dictionary || {}, locales: c = t?.locales || [], defaultLocale: l = t?.defaultLocale || Pp, cacheUrl: u = t?.cacheUrl || Rp, runtimeUrl: p = t?.runtimeUrl || zp, renderSettings: h = t?.renderSettings || yg(n), ssr: _ = t?.ssr || qg(), localeCookieName: v = t?.localeCookieName || "generaltranslation.locale", locale: y = "", region: b, loadDictionary: x, loadTranslations: S, fallback: C, translations: ee = null, customMapping: te = t?.customMapping, enableI18n: w = t?.enableI18n === void 0 || t.enableI18n, enableI18nLoaded: T, reloadOnLocaleUpdate: ne, useEnableI18n: re = Kg, readAuthFromEnv: ie = ug, useDetermineLocale: ae = Jg, useRegionState: oe = Yg, ...se }) {
	y &&= Zu(y, te);
	let { projectId: ce, devApiKey: E } = ie({
		projectId: r,
		devApiKey: a
	}), { enableI18n: le } = re({
		enableI18n: w,
		enableI18nLoaded: T,
		enableI18nCookieName: "generaltranslation.enable-i18n",
		ssr: _
	}), { locale: ue, setLocale: de, locales: fe, translationRequired: pe, dialectTranslationRequired: me } = Vg({
		_locale: y,
		defaultLocale: l,
		locales: c,
		ssr: _,
		localeCookieName: v,
		customMapping: te,
		useDetermineLocale: ae,
		enableI18n: le,
		reloadOnLocaleUpdate: ne
	}), { region: he, setRegion: ge } = oe({
		_region: b,
		ssr: _,
		regionCookieName: "generaltranslation.region"
	}), _e = f(() => new qu({
		devApiKey: E,
		sourceLocale: l,
		targetLocale: ue,
		projectId: ce,
		baseUrl: p || void 0,
		customMapping: te
	}), [
		E,
		l,
		ce,
		p,
		te
	]), ve = f(() => (S ? "custom" : u && ce && "default") || "disabled", [
		S,
		u,
		ce
	]), { dictionary: ye, setDictionary: be, dictionaryTranslations: xe, setDictionaryTranslations: Se } = function({ _dictionary: e, _dictionaryTranslations: t = {}, loadDictionary: n, locale: r, defaultLocale: i }) {
		let [a, o] = m(e), [s, c] = m(t);
		return d(() => {
			if (!n) return;
			let e = !0;
			return (async () => {
				let t = await Ug(i, n) || {}, a = await Ug(r, n) || {};
				e && o(t || {}), e && c(a || {});
			})(), () => {
				e = !1;
			};
		}, [
			n,
			r,
			i
		]), {
			dictionary: a,
			setDictionary: o,
			dictionaryTranslations: s,
			setDictionaryTranslations: c
		};
	}({
		_dictionary: s,
		_dictionaryTranslations: {},
		loadDictionary: x,
		locale: ue,
		defaultLocale: l
	});
	Hg({
		devApiKey: E,
		projectId: ce,
		runtimeUrl: p,
		loadTranslationsType: ve,
		cacheUrl: u,
		locales: c,
		environment: n
	});
	let { translations: Ce, setTranslations: we } = Wg({
		_translations: ee,
		translationRequired: pe,
		loadTranslationsType: ve,
		loadTranslations: S,
		locale: ue,
		cacheUrl: u,
		projectId: ce,
		_versionId: o,
		gt: _e
	}), { registerIcuForTranslation: Te, registerJsxForTranslation: Ee, developmentApiEnabled: De } = Rg({
		gt: _e,
		locale: ue,
		versionId: o,
		defaultLocale: l,
		runtimeUrl: p,
		renderSettings: h,
		setTranslations: we,
		environment: n,
		...se
	}), { _gtFunction: Oe, _mFunction: ke, _filterMessagesForPreload: Ae, _preloadMessages: je } = zg({
		gt: _e,
		translations: Ce,
		locale: ue,
		defaultLocale: l,
		translationRequired: pe,
		developmentApiEnabled: De,
		registerIcuForTranslation: Te,
		environment: n
	}), Me = Bg(_e, ye, xe, Ce, ue, l, pe, me, De, Te, n), Ne = Gg(ye || {}, xe || {}, be, Se, Ce, ue, l, pe, me, De, Te, Me), Pe = !(pe && !Ce || !ue);
	return g(Lg.Provider, {
		value: {
			gt: _e,
			registerIcuForTranslation: Te,
			registerJsxForTranslation: Ee,
			_gtFunction: Oe,
			_mFunction: ke,
			_filterMessagesForPreload: Ae,
			_preloadMessages: je,
			_dictionaryFunction: Me,
			_dictionaryObjFunction: Ne,
			developmentApiEnabled: De,
			locale: ue,
			locales: fe,
			setLocale: de,
			defaultLocale: l,
			region: he,
			setRegion: ge,
			translations: Ce,
			translationRequired: pe,
			dialectTranslationRequired: me,
			projectId: ce,
			renderSettings: h,
			_versionId: o
		},
		children: g(i, {
			fallback: C,
			children: Pe ? e : C
		})
	});
}
function Zg({ projectId: e, devApiKey: t }) {
	try {
		return {
			projectId: e || "",
			devApiKey: t || void 0
		};
	} catch {}
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
function Qg({ _region: e, regionCookieName: t }) {
	let n = typeof document < "u" ? document.cookie.split("; ").find((e) => e.startsWith(`${t}=`))?.split("=")[1] : void 0, r = e || n;
	return n && n !== r && typeof document < "u" && (document.cookie = `${t}=${r};path=/`), r;
}
function $g({ _region: e, ssr: t, regionCookieName: n }) {
	let [r, i] = m(t ? void 0 : Qg({
		_region: e,
		regionCookieName: n
	}));
	return d(() => {
		i(Qg({
			_region: e,
			regionCookieName: n
		}));
	}, [e, n]), {
		region: r,
		setRegion: (e) => {
			i(e), typeof document < "u" && (document.cookie = `${n}=${e || ""};path=/`);
		}
	};
}
function e_({ enableI18n: e, enableI18nCookieName: t, enableI18nLoaded: n, ssr: r }) {
	let i = n !== void 0, a = p(!0), [o, s] = m(function({ _enableI18n: e, asyncEnabled: t, enableI18nCookieName: n, ssr: r }) {
		if (!t || r) return e;
		let i = t_(n);
		return i === null ? e : i;
	}({
		_enableI18n: e,
		asyncEnabled: i,
		enableI18nCookieName: t,
		ssr: r
	}));
	return d(() => {
		if (r && i && a.current) {
			a.current = !1;
			let e = t_(t);
			e !== null && e !== o && s(e);
			return;
		}
		a.current = !1;
	}, [
		r,
		i,
		t,
		o
	]), d(() => {
		o !== e && (i ? n && (function({ enableI18n: e, enableI18nCookieName: t }) {
			typeof document > "u" || (document.cookie = `${t}=${e ? "true" : "false"};path=/;`);
		}({
			enableI18n: e,
			enableI18nCookieName: t
		}), s(e)) : s(e));
	}, [
		e,
		o,
		i,
		n,
		t
	]), { enableI18n: o };
}
function t_(e) {
	if (typeof document > "u") return null;
	let t = document.cookie.split("; ").find((t) => t.startsWith(`${e}=`))?.split("=")[1];
	return t === "true" || t !== "false" && null;
}
var n_ = function(e, t) {
	return n_ = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	}, n_(e, t);
};
function r_(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	function n() {
		this.constructor = e;
	}
	n_(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var i_ = function() {
	return i_ = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, i_.apply(this, arguments);
};
function a_(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") {
		var i = 0;
		for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	}
	return n;
}
function o_(e, t, n, r) {
	var i, a = arguments.length, o = a < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
	return a > 3 && o && Object.defineProperty(t, n, o), o;
}
function s_(e, t) {
	return function(n, r) {
		t(n, r, e);
	};
}
function c_(e, t, n, r, i, a) {
	function o(e) {
		if (e !== void 0 && typeof e != "function") throw TypeError("Function expected");
		return e;
	}
	for (var s, c = r.kind, l = c === "getter" ? "get" : c === "setter" ? "set" : "value", u = !t && e ? r.static ? e : e.prototype : null, d = t || (u ? Object.getOwnPropertyDescriptor(u, r.name) : {}), f = !1, p = n.length - 1; p >= 0; p--) {
		var m = {};
		for (var h in r) m[h] = h === "access" ? {} : r[h];
		for (var h in r.access) m.access[h] = r.access[h];
		m.addInitializer = function(e) {
			if (f) throw TypeError("Cannot add initializers after decoration has completed");
			a.push(o(e || null));
		};
		var g = (0, n[p])(c === "accessor" ? {
			get: d.get,
			set: d.set
		} : d[l], m);
		if (c === "accessor") {
			if (g === void 0) continue;
			if (typeof g != "object" || !g) throw TypeError("Object expected");
			(s = o(g.get)) && (d.get = s), (s = o(g.set)) && (d.set = s), (s = o(g.init)) && i.unshift(s);
		} else (s = o(g)) && (c === "field" ? i.unshift(s) : d[l] = s);
	}
	u && Object.defineProperty(u, r.name, d), f = !0;
}
function l_(e, t, n) {
	for (var r = arguments.length > 2, i = 0; i < t.length; i++) n = r ? t[i].call(e, n) : t[i].call(e);
	return r ? n : void 0;
}
function u_(e) {
	return typeof e == "symbol" ? e : `${e}`;
}
function d_(e, t, n) {
	return typeof t == "symbol" && (t = t.description ? `[${t.description}]` : ""), Object.defineProperty(e, "name", {
		configurable: !0,
		value: n ? `${n} ${t}` : t
	});
}
function f_(e, t) {
	if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, t);
}
function p_(e, t, n, r) {
	return new (n ||= Promise)(function(i, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			var t;
			e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
				e(t);
			})).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}
function m_(e, t) {
	var n, r, i, a = {
		label: 0,
		sent: function() {
			if (1 & i[0]) throw i[1];
			return i[1];
		},
		trys: [],
		ops: []
	}, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
	return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
		return this;
	}), o;
	function s(s) {
		return function(c) {
			return function(s) {
				if (n) throw TypeError("Generator is already executing.");
				for (; o && (o = 0, s[0] && (a = 0)), a;) try {
					if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
					switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
						case 0:
						case 1:
							i = s;
							break;
						case 4: return a.label++, {
							value: s[1],
							done: !1
						};
						case 5:
							a.label++, r = s[1], s = [0];
							continue;
						case 7:
							s = a.ops.pop(), a.trys.pop();
							continue;
						default:
							if (i = a.trys, !((i = i.length > 0 && i[i.length - 1]) || s[0] !== 6 && s[0] !== 2)) {
								a = 0;
								continue;
							}
							if (s[0] === 3 && (!i || s[1] > i[0] && s[1] < i[3])) {
								a.label = s[1];
								break;
							}
							if (s[0] === 6 && a.label < i[1]) {
								a.label = i[1], i = s;
								break;
							}
							if (i && a.label < i[2]) {
								a.label = i[2], a.ops.push(s);
								break;
							}
							i[2] && a.ops.pop(), a.trys.pop();
							continue;
					}
					s = t.call(e, a);
				} catch (e) {
					s = [6, e], r = 0;
				} finally {
					n = i = 0;
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
var h_ = Object.create ? function(e, t, n, r) {
	r === void 0 && (r = n);
	var i = Object.getOwnPropertyDescriptor(t, n);
	i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
		enumerable: !0,
		get: function() {
			return t[n];
		}
	}), Object.defineProperty(e, r, i);
} : function(e, t, n, r) {
	r === void 0 && (r = n), e[r] = t[n];
};
function g_(e, t) {
	for (var n in e) n === "default" || Object.prototype.hasOwnProperty.call(t, n) || h_(t, e, n);
}
function __(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function v_(e, t) {
	var n = typeof Symbol == "function" && e[Symbol.iterator];
	if (!n) return e;
	var r, i, a = n.call(e), o = [];
	try {
		for (; (t === void 0 || t-- > 0) && !(r = a.next()).done;) o.push(r.value);
	} catch (e) {
		i = { error: e };
	} finally {
		try {
			r && !r.done && (n = a.return) && n.call(a);
		} finally {
			if (i) throw i.error;
		}
	}
	return o;
}
function y_() {
	for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(v_(arguments[t]));
	return e;
}
function b_() {
	for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
	var r = Array(e), i = 0;
	for (t = 0; t < n; t++) for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
	return r;
}
function x_(e, t, n) {
	if (n || arguments.length === 2) for (var r, i = 0, a = t.length; i < a; i++) !r && i in t || (r ||= Array.prototype.slice.call(t, 0, i), r[i] = t[i]);
	return e.concat(r || Array.prototype.slice.call(t));
}
function S_(e) {
	return this instanceof S_ ? (this.v = e, this) : new S_(e);
}
function C_(e, t, n) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var r, i = n.apply(e, t || []), a = [];
	return r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), o("next"), o("throw"), o("return", function(e) {
		return function(t) {
			return Promise.resolve(t).then(e, l);
		};
	}), r[Symbol.asyncIterator] = function() {
		return this;
	}, r;
	function o(e, t) {
		i[e] && (r[e] = function(t) {
			return new Promise(function(n, r) {
				a.push([
					e,
					t,
					n,
					r
				]) > 1 || s(e, t);
			});
		}, t && (r[e] = t(r[e])));
	}
	function s(e, t) {
		try {
			(n = i[e](t)).value instanceof S_ ? Promise.resolve(n.value.v).then(c, l) : u(a[0][2], n);
		} catch (e) {
			u(a[0][3], e);
		}
		var n;
	}
	function c(e) {
		s("next", e);
	}
	function l(e) {
		s("throw", e);
	}
	function u(e, t) {
		e(t), a.shift(), a.length && s(a[0][0], a[0][1]);
	}
}
function w_(e) {
	var t = {}, n;
	return r("next"), r("throw", function(e) {
		throw e;
	}), r("return"), t[Symbol.iterator] = function() {
		return this;
	}, t;
	function r(r, i) {
		t[r] = e[r] ? function(t) {
			return (n = !n) ? {
				value: S_(e[r](t)),
				done: !1
			} : i ? i(t) : t;
		} : i;
	}
}
function T_(e) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var t, n = e[Symbol.asyncIterator];
	return n ? n.call(e) : (e = __(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
		return this;
	}, t);
	function r(n) {
		t[n] = e[n] && function(t) {
			return new Promise(function(r, i) {
				(function(e, t, n, r) {
					Promise.resolve(r).then(function(t) {
						e({
							value: t,
							done: n
						});
					}, t);
				})(r, i, (t = e[n](t)).done, t.value);
			});
		};
	}
}
function E_(e, t) {
	return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
var D_ = Object.create ? function(e, t) {
	Object.defineProperty(e, "default", {
		enumerable: !0,
		value: t
	});
} : function(e, t) {
	e.default = t;
}, O_ = function(e) {
	return O_ = Object.getOwnPropertyNames || function(e) {
		var t = [];
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
		return t;
	}, O_(e);
};
function k_(e) {
	if (e && e.__esModule) return e;
	var t = {};
	if (e != null) for (var n = O_(e), r = 0; r < n.length; r++) n[r] !== "default" && h_(t, e, n[r]);
	return D_(t, e), t;
}
function A_(e) {
	return e && e.__esModule ? e : { default: e };
}
function j_(e, t, n, r) {
	if (n === "a" && !r) throw TypeError("Private accessor was defined without a getter");
	if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
	return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function M_(e, t, n, r, i) {
	if (r === "m") throw TypeError("Private method is not writable");
	if (r === "a" && !i) throw TypeError("Private accessor was defined without a setter");
	if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
	return r === "a" ? i.call(e, n) : i ? i.value = n : t.set(e, n), n;
}
function N_(e, t) {
	if (t === null || typeof t != "object" && typeof t != "function") throw TypeError("Cannot use 'in' operator on non-object");
	return typeof e == "function" ? t === e : e.has(t);
}
function P_(e, t, n) {
	if (t != null) {
		if (typeof t != "object" && typeof t != "function") throw TypeError("Object expected.");
		var r, i;
		if (n) {
			if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
			r = t[Symbol.asyncDispose];
		}
		if (r === void 0) {
			if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
			r = t[Symbol.dispose], n && (i = r);
		}
		if (typeof r != "function") throw TypeError("Object not disposable.");
		i && (r = function() {
			try {
				i.call(this);
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
var F_ = typeof SuppressedError == "function" ? SuppressedError : function(e, t, n) {
	var r = Error(n);
	return r.name = "SuppressedError", r.error = e, r.suppressed = t, r;
};
function I_(e) {
	function t(t) {
		e.error = e.hasError ? new F_(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
	}
	var n, r = 0;
	return function i() {
		for (; n = e.stack.pop();) try {
			if (!n.async && r === 1) return r = 0, e.stack.push(n), Promise.resolve().then(i);
			if (n.dispose) {
				var a = n.dispose.call(n.value);
				if (n.async) return r |= 2, Promise.resolve(a).then(i, function(e) {
					return t(e), i();
				});
			} else r |= 1;
		} catch (e) {
			t(e);
		}
		if (r === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
		if (e.hasError) throw e.error;
	}();
}
function L_(e, t) {
	return typeof e == "string" && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, n, r, i, a) {
		return n ? t ? ".jsx" : ".js" : !r || i && a ? r + i + "." + a.toLowerCase() + "js" : e;
	}) : e;
}
var R_, z_, B_, V_, H_ = Object.freeze({
	__proto__: null,
	__addDisposableResource: P_,
	get __assign() {
		return i_;
	},
	__asyncDelegator: w_,
	__asyncGenerator: C_,
	__asyncValues: T_,
	__await: S_,
	__awaiter: p_,
	__classPrivateFieldGet: j_,
	__classPrivateFieldIn: N_,
	__classPrivateFieldSet: M_,
	__createBinding: h_,
	__decorate: o_,
	__disposeResources: I_,
	__esDecorate: c_,
	__exportStar: g_,
	__extends: r_,
	__generator: m_,
	__importDefault: A_,
	__importStar: k_,
	__makeTemplateObject: E_,
	__metadata: f_,
	__param: s_,
	__propKey: u_,
	__read: v_,
	__rest: a_,
	__rewriteRelativeImportExtension: L_,
	__runInitializers: l_,
	__setFunctionName: d_,
	__spread: y_,
	__spreadArray: x_,
	__spreadArrays: b_,
	__values: __,
	default: {
		__extends: r_,
		__assign: i_,
		__rest: a_,
		__decorate: o_,
		__param: s_,
		__esDecorate: c_,
		__runInitializers: l_,
		__propKey: u_,
		__setFunctionName: d_,
		__metadata: f_,
		__awaiter: p_,
		__generator: m_,
		__createBinding: h_,
		__exportStar: g_,
		__values: __,
		__read: v_,
		__spread: y_,
		__spreadArrays: b_,
		__spreadArray: x_,
		__await: S_,
		__asyncGenerator: C_,
		__asyncDelegator: w_,
		__asyncValues: T_,
		__makeTemplateObject: E_,
		__importStar: k_,
		__importDefault: A_,
		__classPrivateFieldGet: j_,
		__classPrivateFieldSet: M_,
		__classPrivateFieldIn: N_,
		__addDisposableResource: P_,
		__disposeResources: I_,
		__rewriteRelativeImportExtension: L_
	}
});
(function(e) {
	e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(R_ ||= {}), function(e) {
	e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
}(z_ ||= {}), function(e) {
	e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
}(B_ ||= {});
try {
	(V_ = (/* @__PURE__ */ RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu")).exec("a")) == null || V_[0];
} catch {}
function U_(e) {
	if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
	var t = e.default;
	if (typeof t == "function") {
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
var W_, Q = {};
function G_() {
	if (W_) return Q;
	var e, t;
	return W_ = 1, Object.defineProperty(Q, "__esModule", { value: !0 }), Q.SKELETON_TYPE = Q.TYPE = void 0, Q.isLiteralElement = function(t) {
		return t.type === e.literal;
	}, Q.isArgumentElement = function(t) {
		return t.type === e.argument;
	}, Q.isNumberElement = function(t) {
		return t.type === e.number;
	}, Q.isDateElement = function(t) {
		return t.type === e.date;
	}, Q.isTimeElement = function(t) {
		return t.type === e.time;
	}, Q.isSelectElement = function(t) {
		return t.type === e.select;
	}, Q.isPluralElement = function(t) {
		return t.type === e.plural;
	}, Q.isPoundElement = function(t) {
		return t.type === e.pound;
	}, Q.isTagElement = function(t) {
		return t.type === e.tag;
	}, Q.isNumberSkeleton = function(e) {
		return !(!e || typeof e != "object" || e.type !== t.number);
	}, Q.isDateTimeSkeleton = function(e) {
		return !(!e || typeof e != "object" || e.type !== t.dateTime);
	}, Q.createLiteralElement = function(t) {
		return {
			type: e.literal,
			value: t
		};
	}, Q.createNumberElement = function(t, n) {
		return {
			type: e.number,
			value: t,
			style: n
		};
	}, function(e) {
		e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
	}(e || (Q.TYPE = e = {})), function(e) {
		e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
	}(t || (Q.SKELETON_TYPE = t = {})), Q;
}
G_();
var K_, q_ = {}, J_ = U_(H_);
(function() {
	if (K_) return q_;
	K_ = 1, Object.defineProperty(q_, "__esModule", { value: !0 }), q_.printAST = n, q_.doPrintAST = r, q_.printDateTimeSkeleton = o;
	var e = J_, t = G_();
	function n(e) {
		return r(e, !1);
	}
	function r(s, c) {
		return s.map(function(l, u) {
			return (0, t.isLiteralElement)(l) ? function(e, t, n, r) {
				var a = e.value;
				return n || a[0] !== "'" || (a = `''${a.slice(1)}`), r || a[a.length - 1] !== "'" || (a = `${a.slice(0, a.length - 1)}''`), a = i(a), t ? a.replace("#", "'#'") : a;
			}(l, c, u === 0, u === s.length - 1) : (0, t.isArgumentElement)(l) ? function(e) {
				return `{${e.value}}`;
			}(l) : (0, t.isDateElement)(l) || (0, t.isTimeElement)(l) || (0, t.isNumberElement)(l) ? function(e) {
				return `{${e.value}, ${t.TYPE[e.type]}${e.style ? `, ${n = e.style, typeof n == "string" ? i(n) : n.type === t.SKELETON_TYPE.dateTime ? `::${o(n)}` : `::${n.tokens.map(a).join(" ")}`}` : ""}}`;
				var n;
			}(l) : (0, t.isPluralElement)(l) ? function(t) {
				var n = t.pluralType === "cardinal" ? "plural" : "selectordinal";
				return `{${[
					t.value,
					n,
					e.__spreadArray([t.offset ? `offset:${t.offset}` : ""], Object.keys(t.options).map(function(e) {
						return `${e}{${r(t.options[e].value, !0)}}`;
					}), !0).filter(Boolean).join(" ")
				].join(",")}}`;
			}(l) : (0, t.isSelectElement)(l) ? function(e) {
				return `{${[
					e.value,
					"select",
					Object.keys(e.options).map(function(t) {
						return `${t}{${r(e.options[t].value, !1)}}`;
					}).join(" ")
				].join(",")}}`;
			}(l) : (0, t.isPoundElement)(l) ? "#" : (0, t.isTagElement)(l) ? function(e) {
				return `<${e.value}>${n(e.children)}</${e.value}>`;
			}(l) : void 0;
		}).join("");
	}
	function i(e) {
		return e.replace(/([{}](?:[\s\S]*[{}])?)/, "'$1'");
	}
	function a(e) {
		var t = e.stem, n = e.options;
		return n.length === 0 ? t : `${t}${n.map(function(e) {
			return `/${e}`;
		}).join("")}`;
	}
	function o(e) {
		return e.pattern;
	}
})();
function Y_(e, t, n = "") {
	let r = (i = e) instanceof Uint8Array || ArrayBuffer.isView(i) && i.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in i && i.BYTES_PER_ELEMENT === 1;
	var i;
	let a = e?.length;
	if (!r || t !== void 0) {
		let t = (n && `"${n}" `) + "expected Uint8Array, got " + (r ? `length=${a}` : "type=" + typeof e);
		throw r ? RangeError(t) : TypeError(t);
	}
	return e;
}
function X_(e, t = !0) {
	if (e.destroyed) throw Error("Hash instance has been destroyed");
	if (t && e.finished) throw Error("Hash#digest() has already been called");
}
function Z_(...e) {
	for (let t = 0; t < e.length; t++) e[t].fill(0);
}
function Q_(e) {
	return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function $_(e, t) {
	return e << 32 - t | e >>> t;
}
typeof Uint8Array.from([]).toHex == "function" && Uint8Array.fromHex, Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function ev(e, t, n) {
	return e & t ^ ~e & n;
}
function tv(e, t, n) {
	return e & t ^ e & n ^ t & n;
}
var nv = class {
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
		this.blockLen = e, this.outputLen = t, this.padOffset = n, this.isLE = r, this.buffer = new Uint8Array(e), this.view = Q_(this.buffer);
	}
	update(e) {
		X_(this), Y_(e);
		let { view: t, buffer: n, blockLen: r } = this, i = e.length;
		for (let a = 0; a < i;) {
			let o = Math.min(r - this.pos, i - a);
			if (o === r) {
				let t = Q_(e);
				for (; r <= i - a; a += r) this.process(t, a);
				continue;
			}
			n.set(e.subarray(a, a + o), this.pos), this.pos += o, a += o, this.pos === r && (this.process(t, 0), this.pos = 0);
		}
		return this.length += e.length, this.roundClean(), this;
	}
	digestInto(e) {
		X_(this), function(e, t) {
			Y_(e, void 0, "digestInto() output");
			let n = t.outputLen;
			if (e.length < n) throw RangeError("\"digestInto() output\" expected to be of length >=" + n);
		}(e, this), this.finished = !0;
		let { buffer: t, view: n, blockLen: r, isLE: i } = this, { pos: a } = this;
		t[a++] = 128, Z_(this.buffer.subarray(a)), this.padOffset > r - a && (this.process(n, 0), a = 0);
		for (let e = a; e < r; e++) t[e] = 0;
		n.setBigUint64(r - 8, BigInt(8 * this.length), i), this.process(n, 0);
		let o = Q_(e), s = this.outputLen;
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
}, rv = Uint32Array.from([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]), iv = Uint32Array.from([
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
]), av = /* @__PURE__ */ new Uint32Array(64), ov = class extends nv {
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
		this.A = 0 | e, this.B = 0 | t, this.C = 0 | n, this.D = 0 | r, this.E = 0 | i, this.F = 0 | a, this.G = 0 | o, this.H = 0 | s;
	}
	process(e, t) {
		for (let n = 0; n < 16; n++, t += 4) av[n] = e.getUint32(t, !1);
		for (let e = 16; e < 64; e++) {
			let t = av[e - 15], n = av[e - 2], r = $_(t, 7) ^ $_(t, 18) ^ t >>> 3, i = $_(n, 17) ^ $_(n, 19) ^ n >>> 10;
			av[e] = i + av[e - 7] + r + av[e - 16] | 0;
		}
		let { A: n, B: r, C: i, D: a, E: o, F: s, G: c, H: l } = this;
		for (let e = 0; e < 64; e++) {
			let t = l + ($_(o, 6) ^ $_(o, 11) ^ $_(o, 25)) + ev(o, s, c) + iv[e] + av[e] | 0, u = ($_(n, 2) ^ $_(n, 13) ^ $_(n, 22)) + tv(n, r, i) | 0;
			l = c, c = s, s = o, o = a + t | 0, a = i, i = r, r = n, n = t + u | 0;
		}
		n = n + this.A | 0, r = r + this.B | 0, i = i + this.C | 0, a = a + this.D | 0, o = o + this.E | 0, s = s + this.F | 0, c = c + this.G | 0, l = l + this.H | 0, this.set(n, r, i, a, o, s, c, l);
	}
	roundClean() {
		Z_(av);
	}
	destroy() {
		this.destroyed = !0, this.set(0, 0, 0, 0, 0, 0, 0, 0), Z_(this.buffer);
	}
}, sv = class extends ov {
	A = 0 | rv[0];
	B = 0 | rv[1];
	C = 0 | rv[2];
	D = 0 | rv[3];
	E = 0 | rv[4];
	F = 0 | rv[5];
	G = 0 | rv[6];
	H = 0 | rv[7];
	constructor() {
		super(32);
	}
}, cv;
(function(e, t = {}) {
	let n = (t, n) => e(n).update(t).digest(), r = e(void 0);
	n.outputLen = r.outputLen, n.blockLen = r.blockLen, n.canXOF = r.canXOF, n.create = (t) => e(t), Object.assign(n, t), Object.freeze(n);
})(() => new sv(), (cv = 1, { oid: Uint8Array.from([
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
	cv
]) }));
var lv = function(e, t) {
	return lv = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	}, lv(e, t);
};
function uv(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	function n() {
		this.constructor = e;
	}
	lv(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var dv = function() {
	return dv = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, dv.apply(this, arguments);
};
function fv(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") {
		var i = 0;
		for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	}
	return n;
}
function pv(e, t, n, r) {
	var i, a = arguments.length, o = a < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
	return a > 3 && o && Object.defineProperty(t, n, o), o;
}
function mv(e, t) {
	return function(n, r) {
		t(n, r, e);
	};
}
function hv(e, t, n, r, i, a) {
	function o(e) {
		if (e !== void 0 && typeof e != "function") throw TypeError("Function expected");
		return e;
	}
	for (var s, c = r.kind, l = c === "getter" ? "get" : c === "setter" ? "set" : "value", u = !t && e ? r.static ? e : e.prototype : null, d = t || (u ? Object.getOwnPropertyDescriptor(u, r.name) : {}), f = !1, p = n.length - 1; p >= 0; p--) {
		var m = {};
		for (var h in r) m[h] = h === "access" ? {} : r[h];
		for (var h in r.access) m.access[h] = r.access[h];
		m.addInitializer = function(e) {
			if (f) throw TypeError("Cannot add initializers after decoration has completed");
			a.push(o(e || null));
		};
		var g = (0, n[p])(c === "accessor" ? {
			get: d.get,
			set: d.set
		} : d[l], m);
		if (c === "accessor") {
			if (g === void 0) continue;
			if (typeof g != "object" || !g) throw TypeError("Object expected");
			(s = o(g.get)) && (d.get = s), (s = o(g.set)) && (d.set = s), (s = o(g.init)) && i.unshift(s);
		} else (s = o(g)) && (c === "field" ? i.unshift(s) : d[l] = s);
	}
	u && Object.defineProperty(u, r.name, d), f = !0;
}
function gv(e, t, n) {
	for (var r = arguments.length > 2, i = 0; i < t.length; i++) n = r ? t[i].call(e, n) : t[i].call(e);
	return r ? n : void 0;
}
function _v(e) {
	return typeof e == "symbol" ? e : `${e}`;
}
function vv(e, t, n) {
	return typeof t == "symbol" && (t = t.description ? `[${t.description}]` : ""), Object.defineProperty(e, "name", {
		configurable: !0,
		value: n ? `${n} ${t}` : t
	});
}
function yv(e, t) {
	if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, t);
}
function bv(e, t, n, r) {
	return new (n ||= Promise)(function(i, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			var t;
			e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
				e(t);
			})).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}
function xv(e, t) {
	var n, r, i, a = {
		label: 0,
		sent: function() {
			if (1 & i[0]) throw i[1];
			return i[1];
		},
		trys: [],
		ops: []
	}, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
	return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
		return this;
	}), o;
	function s(s) {
		return function(c) {
			return function(s) {
				if (n) throw TypeError("Generator is already executing.");
				for (; o && (o = 0, s[0] && (a = 0)), a;) try {
					if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
					switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
						case 0:
						case 1:
							i = s;
							break;
						case 4: return a.label++, {
							value: s[1],
							done: !1
						};
						case 5:
							a.label++, r = s[1], s = [0];
							continue;
						case 7:
							s = a.ops.pop(), a.trys.pop();
							continue;
						default:
							if (!((i = (i = a.trys).length > 0 && i[i.length - 1]) || s[0] !== 6 && s[0] !== 2)) {
								a = 0;
								continue;
							}
							if (s[0] === 3 && (!i || s[1] > i[0] && s[1] < i[3])) {
								a.label = s[1];
								break;
							}
							if (s[0] === 6 && a.label < i[1]) {
								a.label = i[1], i = s;
								break;
							}
							if (i && a.label < i[2]) {
								a.label = i[2], a.ops.push(s);
								break;
							}
							i[2] && a.ops.pop(), a.trys.pop();
							continue;
					}
					s = t.call(e, a);
				} catch (e) {
					s = [6, e], r = 0;
				} finally {
					n = i = 0;
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
var Sv = Object.create ? function(e, t, n, r) {
	r === void 0 && (r = n);
	var i = Object.getOwnPropertyDescriptor(t, n);
	i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
		enumerable: !0,
		get: function() {
			return t[n];
		}
	}), Object.defineProperty(e, r, i);
} : function(e, t, n, r) {
	r === void 0 && (r = n), e[r] = t[n];
};
function Cv(e, t) {
	for (var n in e) n === "default" || Object.prototype.hasOwnProperty.call(t, n) || Sv(t, e, n);
}
function wv(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Tv(e, t) {
	var n = typeof Symbol == "function" && e[Symbol.iterator];
	if (!n) return e;
	var r, i, a = n.call(e), o = [];
	try {
		for (; (t === void 0 || t-- > 0) && !(r = a.next()).done;) o.push(r.value);
	} catch (e) {
		i = { error: e };
	} finally {
		try {
			r && !r.done && (n = a.return) && n.call(a);
		} finally {
			if (i) throw i.error;
		}
	}
	return o;
}
function Ev() {
	for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Tv(arguments[t]));
	return e;
}
function Dv() {
	for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
	var r = Array(e), i = 0;
	for (t = 0; t < n; t++) for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
	return r;
}
function Ov(e, t, n) {
	if (n || arguments.length === 2) for (var r, i = 0, a = t.length; i < a; i++) !r && i in t || (r ||= Array.prototype.slice.call(t, 0, i), r[i] = t[i]);
	return e.concat(r || Array.prototype.slice.call(t));
}
function kv(e) {
	return this instanceof kv ? (this.v = e, this) : new kv(e);
}
function Av(e, t, n) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var r, i = n.apply(e, t || []), a = [];
	return r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), o("next"), o("throw"), o("return", function(e) {
		return function(t) {
			return Promise.resolve(t).then(e, l);
		};
	}), r[Symbol.asyncIterator] = function() {
		return this;
	}, r;
	function o(e, t) {
		i[e] && (r[e] = function(t) {
			return new Promise(function(n, r) {
				a.push([
					e,
					t,
					n,
					r
				]) > 1 || s(e, t);
			});
		}, t && (r[e] = t(r[e])));
	}
	function s(e, t) {
		try {
			(n = i[e](t)).value instanceof kv ? Promise.resolve(n.value.v).then(c, l) : u(a[0][2], n);
		} catch (e) {
			u(a[0][3], e);
		}
		var n;
	}
	function c(e) {
		s("next", e);
	}
	function l(e) {
		s("throw", e);
	}
	function u(e, t) {
		e(t), a.shift(), a.length && s(a[0][0], a[0][1]);
	}
}
function jv(e) {
	var t = {}, n;
	return r("next"), r("throw", function(e) {
		throw e;
	}), r("return"), t[Symbol.iterator] = function() {
		return this;
	}, t;
	function r(r, i) {
		t[r] = e[r] ? function(t) {
			return (n = !n) ? {
				value: kv(e[r](t)),
				done: !1
			} : i ? i(t) : t;
		} : i;
	}
}
function Mv(e) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var t, n = e[Symbol.asyncIterator];
	return n ? n.call(e) : (e = wv(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
		return this;
	}, t);
	function r(n) {
		t[n] = e[n] && function(t) {
			return new Promise(function(r, i) {
				(function(e, t, n, r) {
					Promise.resolve(r).then(function(t) {
						e({
							value: t,
							done: n
						});
					}, t);
				})(r, i, (t = e[n](t)).done, t.value);
			});
		};
	}
}
function Nv(e, t) {
	return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
var Pv = Object.create ? function(e, t) {
	Object.defineProperty(e, "default", {
		enumerable: !0,
		value: t
	});
} : function(e, t) {
	e.default = t;
}, Fv = function(e) {
	return Fv = Object.getOwnPropertyNames || function(e) {
		var t = [];
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
		return t;
	}, Fv(e);
};
function Iv(e) {
	if (e && e.__esModule) return e;
	var t = {};
	if (e != null) for (var n = Fv(e), r = 0; r < n.length; r++) n[r] !== "default" && Sv(t, e, n[r]);
	return Pv(t, e), t;
}
function Lv(e) {
	return e && e.__esModule ? e : { default: e };
}
function Rv(e, t, n, r) {
	if (n === "a" && !r) throw TypeError("Private accessor was defined without a getter");
	if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
	return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function zv(e, t, n, r, i) {
	if (r === "m") throw TypeError("Private method is not writable");
	if (r === "a" && !i) throw TypeError("Private accessor was defined without a setter");
	if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
	return r === "a" ? i.call(e, n) : i ? i.value = n : t.set(e, n), n;
}
function Bv(e, t) {
	if (t === null || typeof t != "object" && typeof t != "function") throw TypeError("Cannot use 'in' operator on non-object");
	return typeof e == "function" ? t === e : e.has(t);
}
function Vv(e, t, n) {
	if (t != null) {
		if (typeof t != "object" && typeof t != "function") throw TypeError("Object expected.");
		var r, i;
		if (n) {
			if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
			r = t[Symbol.asyncDispose];
		}
		if (r === void 0) {
			if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
			r = t[Symbol.dispose], n && (i = r);
		}
		if (typeof r != "function") throw TypeError("Object not disposable.");
		i && (r = function() {
			try {
				i.call(this);
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
var Hv = typeof SuppressedError == "function" ? SuppressedError : function(e, t, n) {
	var r = Error(n);
	return r.name = "SuppressedError", r.error = e, r.suppressed = t, r;
};
function Uv(e) {
	function t(t) {
		e.error = e.hasError ? new Hv(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
	}
	var n, r = 0;
	return function i() {
		for (; n = e.stack.pop();) try {
			if (!n.async && r === 1) return r = 0, e.stack.push(n), Promise.resolve().then(i);
			if (n.dispose) {
				var a = n.dispose.call(n.value);
				if (n.async) return r |= 2, Promise.resolve(a).then(i, function(e) {
					return t(e), i();
				});
			} else r |= 1;
		} catch (e) {
			t(e);
		}
		if (r === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
		if (e.hasError) throw e.error;
	}();
}
function Wv(e, t) {
	return typeof e == "string" && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, n, r, i, a) {
		return n ? t ? ".jsx" : ".js" : !r || i && a ? r + i + "." + a.toLowerCase() + "js" : e;
	}) : e;
}
var Gv, Kv, qv, Jv, Yv = Object.freeze({
	__proto__: null,
	__addDisposableResource: Vv,
	get __assign() {
		return dv;
	},
	__asyncDelegator: jv,
	__asyncGenerator: Av,
	__asyncValues: Mv,
	__await: kv,
	__awaiter: bv,
	__classPrivateFieldGet: Rv,
	__classPrivateFieldIn: Bv,
	__classPrivateFieldSet: zv,
	__createBinding: Sv,
	__decorate: pv,
	__disposeResources: Uv,
	__esDecorate: hv,
	__exportStar: Cv,
	__extends: uv,
	__generator: xv,
	__importDefault: Lv,
	__importStar: Iv,
	__makeTemplateObject: Nv,
	__metadata: yv,
	__param: mv,
	__propKey: _v,
	__read: Tv,
	__rest: fv,
	__rewriteRelativeImportExtension: Wv,
	__runInitializers: gv,
	__setFunctionName: vv,
	__spread: Ev,
	__spreadArray: Ov,
	__spreadArrays: Dv,
	__values: wv,
	default: {
		__extends: uv,
		__assign: dv,
		__rest: fv,
		__decorate: pv,
		__param: mv,
		__esDecorate: hv,
		__runInitializers: gv,
		__propKey: _v,
		__setFunctionName: vv,
		__metadata: yv,
		__awaiter: bv,
		__generator: xv,
		__createBinding: Sv,
		__exportStar: Cv,
		__values: wv,
		__read: Tv,
		__spread: Ev,
		__spreadArrays: Dv,
		__spreadArray: Ov,
		__await: kv,
		__asyncGenerator: Av,
		__asyncDelegator: jv,
		__asyncValues: Mv,
		__makeTemplateObject: Nv,
		__importStar: Iv,
		__importDefault: Lv,
		__classPrivateFieldGet: Rv,
		__classPrivateFieldSet: zv,
		__classPrivateFieldIn: Bv,
		__addDisposableResource: Vv,
		__disposeResources: Uv,
		__rewriteRelativeImportExtension: Wv
	}
});
(function(e) {
	e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Gv ||= {}), function(e) {
	e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
}(Kv ||= {}), function(e) {
	e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
}(qv ||= {});
try {
	(Jv = function(e, t) {
		return new RegExp(e, t);
	}("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) == null || Jv[0];
} catch {}
var Xv, Zv, $ = {};
function Qv() {
	return Xv || (Xv = 1, Object.defineProperty($, "__esModule", { value: !0 }), $.SKELETON_TYPE = $.TYPE = void 0, $.isLiteralElement = function(t) {
		return t.type === e.literal;
	}, $.isArgumentElement = function(t) {
		return t.type === e.argument;
	}, $.isNumberElement = function(t) {
		return t.type === e.number;
	}, $.isDateElement = function(t) {
		return t.type === e.date;
	}, $.isTimeElement = function(t) {
		return t.type === e.time;
	}, $.isSelectElement = function(t) {
		return t.type === e.select;
	}, $.isPluralElement = function(t) {
		return t.type === e.plural;
	}, $.isPoundElement = function(t) {
		return t.type === e.pound;
	}, $.isTagElement = function(t) {
		return t.type === e.tag;
	}, $.isNumberSkeleton = function(e) {
		return !(!e || typeof e != "object" || e.type !== t.number);
	}, $.isDateTimeSkeleton = function(e) {
		return !(!e || typeof e != "object" || e.type !== t.dateTime);
	}, $.createLiteralElement = function(t) {
		return {
			type: e.literal,
			value: t
		};
	}, $.createNumberElement = function(t, n) {
		return {
			type: e.number,
			value: t,
			style: n
		};
	}, function(e) {
		e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
	}(e || ($.TYPE = e = {})), function(e) {
		e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
	}(t || ($.SKELETON_TYPE = t = {}))), $;
	var e, t;
}
Qv();
var $v = {}, ey = function(e) {
	if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
	var t = e.default;
	if (typeof t == "function") {
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
}(Yv);
(function() {
	if (Zv) return $v;
	Zv = 1, Object.defineProperty($v, "__esModule", { value: !0 }), $v.printAST = n, $v.doPrintAST = r, $v.printDateTimeSkeleton = o;
	var e = ey, t = Qv();
	function n(e) {
		return r(e, !1);
	}
	function r(s, c) {
		return s.map(function(l, u) {
			return (0, t.isLiteralElement)(l) ? function(e, t, n, r) {
				var a = e.value;
				return n || a[0] !== "'" || (a = `''${a.slice(1)}`), r || a[a.length - 1] !== "'" || (a = `${a.slice(0, a.length - 1)}''`), a = i(a), t ? a.replace("#", "'#'") : a;
			}(l, c, u === 0, u === s.length - 1) : (0, t.isArgumentElement)(l) ? function(e) {
				return `{${e.value}}`;
			}(l) : (0, t.isDateElement)(l) || (0, t.isTimeElement)(l) || (0, t.isNumberElement)(l) ? function(e) {
				return `{${e.value}, ${t.TYPE[e.type]}${e.style ? `, ${typeof (n = e.style) == "string" ? i(n) : n.type === t.SKELETON_TYPE.dateTime ? `::${o(n)}` : `::${n.tokens.map(a).join(" ")}`}` : ""}}`;
				var n;
			}(l) : (0, t.isPluralElement)(l) ? function(t) {
				var n = t.pluralType === "cardinal" ? "plural" : "selectordinal";
				return `{${[
					t.value,
					n,
					e.__spreadArray([t.offset ? `offset:${t.offset}` : ""], Object.keys(t.options).map(function(e) {
						return `${e}{${r(t.options[e].value, !0)}}`;
					}), !0).filter(Boolean).join(" ")
				].join(",")}}`;
			}(l) : (0, t.isSelectElement)(l) ? function(e) {
				return `{${[
					e.value,
					"select",
					Object.keys(e.options).map(function(t) {
						return `${t}{${r(e.options[t].value, !1)}}`;
					}).join(" ")
				].join(",")}}`;
			}(l) : (0, t.isPoundElement)(l) ? "#" : (0, t.isTagElement)(l) ? function(e) {
				return `<${e.value}>${n(e.children)}</${e.value}>`;
			}(l) : void 0;
		}).join("");
	}
	function i(e) {
		return e.replace(/([{}](?:[\s\S]*[{}])?)/, "'$1'");
	}
	function a(e) {
		var t = e.stem, n = e.options;
		return n.length === 0 ? t : `${t}${n.map(function(e) {
			return `/${e}`;
		}).join("")}`;
	}
	function o(e) {
		return e.pattern;
	}
})();
var ty = "gt-react";
function ny({ locale: e = "", defaultLocale: t = "en", locales: n = [], localeCookieName: r = "generaltranslation.locale", ssr: i = !0, customMapping: a, enableI18n: o, reloadOnLocaleUpdate: s = !1 }) {
	let c = f(() => Zu(e, a), [e, a]), l = f(() => n.map((e) => Zu(e, a)), [n, a]), [u, p] = m(() => o ? Zu(i ? c && Xu(c, l, a) || "" : ry({
		_locale: c,
		locale: c,
		locales: l,
		defaultLocale: t,
		localeCookieName: r,
		customMapping: a,
		enableI18n: o
	}), a) : t), [h, g] = function({ locale: e, locales: t, defaultLocale: n, localeCookieName: r, _setLocale: i, customMapping: a, enableI18n: o, reloadOnLocaleUpdate: s }) {
		e = Zu(e, a);
		let c = (r) => {
			if (!o) return n;
			if (r === e) return e;
			let s = Zu(Xu(r, t, a) || e || n, a);
			return s !== r && console.warn(((e, t, n = "@generaltranslation/react-core") => `${n} Warning: "${t}" is not a supported locale. Update supported locales in your dashboard or gt.config.json. Falling back to "${e}".`)(s, r, ty)), i(s), s;
		};
		return [(t) => {
			if (!o) return;
			t = Zu(t);
			let n = c(t);
			typeof document < "u" && (document.cookie = `${r}=${n};path=/`), typeof window < "u" && t !== e && s && window.location.reload();
		}, c];
	}({
		locale: u,
		locales: l,
		defaultLocale: t,
		localeCookieName: r,
		_setLocale: p,
		customMapping: a,
		enableI18n: o,
		reloadOnLocaleUpdate: s
	});
	return d(() => {
		let e = ry({
			_locale: c,
			locale: u,
			locales: l,
			defaultLocale: t,
			localeCookieName: r,
			customMapping: a,
			enableI18n: o
		});
		g(e);
	}, [
		c,
		u,
		l,
		t,
		r,
		o
	]), [u, h];
}
function ry({ _locale: e, locale: t, locales: n, defaultLocale: r, localeCookieName: i, customMapping: a, enableI18n: o }) {
	if (!o) return r;
	if (e && e === t && Xu(e, n, a) === t) return Zu(e, a);
	let s = typeof document < "u" ? document.cookie.split("; ").find((e) => e.startsWith(`${i}=`))?.split("=")[1] : void 0;
	s &&= Zu(s, a);
	let c = typeof navigator > "u" ? [] : navigator != null && navigator.languages ? navigator.languages : navigator != null && navigator.language ? [navigator.language] : navigator != null && navigator.userLanguage ? [navigator == null ? void 0 : navigator.userLanguage] : [];
	c = c.map((e) => Zu(e, a));
	let l = Xu([
		...e ? [e] : [],
		...s ? [s] : [],
		...c
	], n, a) || r;
	return l &&= Zu(l, a), s && s !== l && typeof document < "u" && (document.cookie = `${i}=${l};path=/`), l;
}
function iy(e) {
	return g(Xg, Object.assign({
		ssr: !(typeof process > "u" || !process.env.NEXT_RUNTIME) || (globalThis == null ? void 0 : globalThis.__NEXT_DATA__) !== void 0,
		environment: "development"
	}, e, {
		readAuthFromEnv: Zg,
		useDetermineLocale: ny,
		useRegionState: $g,
		useEnableI18n: e_
	}));
}
var ay = v().server(function({ defaultLocale: e, locales: t, customMapping: n }) {
	let r = [], i = y(kp);
	if (i && r.push(i), process.env._GENERALTRANSLATION_IGNORE_BROWSER_LOCALES === "false") {
		let e = b("accept-language")?.split(",").map((e) => e.split(";")?.[0].trim()) || [];
		e && r.push(...e);
	}
	return r.length === 0 && process.env._GENERALTRANSLATION_IGNORE_BROWSER_LOCALES === "false" && console.warn("gt-tanstack-start(server): no locales could be determined for this request"), Xu(r, t, n) || e;
}).client(function({ defaultLocale: e, locales: t, customMapping: n }) {
	let r = [], i = document.cookie.split("; ").find((e) => e.startsWith("generaltranslation.locale="))?.split("=")[1];
	i && r.push(i);
	let a = navigator.language;
	return a && r.push(a), r.length === 0 && (console.warn("gt-tanstack-start(client): no locales could be determined for this request"), r.push(e)), Xu(r, t, n) || e;
}), oy = class extends sd {
	constructor({ defaultLocale: e, locales: t, customMapping: n } = {}) {
		super(), this.type = "tanstack-i18n-storage-adapter", this.defaultLocale = e, this.locales = t, this.customMapping = n;
	}
	setConfig(e) {
		this.defaultLocale ||= e.defaultLocale, this.locales ||= e.locales, this.customMapping ||= e.customMapping;
	}
	getItem(e) {
		if (e === "locale") return ay({
			defaultLocale: this.defaultLocale || "en",
			locales: this.locales || ["en"],
			customMapping: this.customMapping
		});
	}
	setItem(e, t) {}
	removeItem(e) {}
}, sy = class extends Od {
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
function cy(e) {
	Id(new sy(Object.assign(Object.assign({}, e), { storeAdapter: new oy() })));
}
var ly = { exports: {} }, uy, dy, fy = {};
function py() {
	return uy || (uy = 1, function() {
		function e(t) {
			if (t == null) return null;
			if (typeof t == "function") return t.$$typeof === te ? null : t.displayName || t.name || null;
			if (typeof t == "string") return t;
			switch (t) {
				case m: return "Fragment";
				case g: return "Profiler";
				case h: return "StrictMode";
				case b: return "Suspense";
				case x: return "SuspenseList";
				case ee: return "Activity";
			}
			if (typeof t == "object") switch (typeof t.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), t.$$typeof) {
				case p: return "Portal";
				case v: return t.displayName || "Context";
				case _: return (t._context.displayName || "Context") + ".Consumer";
				case y:
					var n = t.render;
					return (t = t.displayName) || (t = (t = n.displayName || n.name || "") === "" ? "ForwardRef" : "ForwardRef(" + t + ")"), t;
				case S: return (n = t.displayName || null) === null ? e(t.type) || "Memo" : n;
				case C:
					n = t._payload, t = t._init;
					try {
						return e(t(n));
					} catch {}
			}
			return null;
		}
		function n(e) {
			return "" + e;
		}
		function r(e) {
			try {
				n(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				var r = (t = console).error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return r.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), n(e);
			}
		}
		function i(t) {
			if (t === m) return "<>";
			if (typeof t == "object" && t && t.$$typeof === C) return "<...>";
			try {
				var n = e(t);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function a() {
			return Error("react-stack-top-frame");
		}
		function o() {
			var t = e(this.type);
			return ie[t] || (ie[t] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), (t = this.props.ref) === void 0 ? null : t;
		}
		function s(t, n, i, a, s, l) {
			var d, p = n.children;
			if (p !== void 0) {
				if (a) {
					if (ne(p)) {
						for (a = 0; a < p.length; a++) c(p[a]);
						Object.freeze && Object.freeze(p);
					} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
				} else c(p);
			}
			if (T.call(n, "key")) {
				p = e(t);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				a = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", se[p + a] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", a, p, m, p), se[p + a] = !0);
			}
			if (p = null, i !== void 0 && (r(i), p = "" + i), function(e) {
				if (T.call(e, "key")) {
					var t = Object.getOwnPropertyDescriptor(e, "key").get;
					if (t && t.isReactWarning) return !1;
				}
				return e.key !== void 0;
			}(n) && (r(n.key), p = "" + n.key), "key" in n) for (var h in i = {}, n) h !== "key" && (i[h] = n[h]);
			else i = n;
			return p && function(e, t) {
				function n() {
					u || (u = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
				}
				n.isReactWarning = !0, Object.defineProperty(e, "key", {
					get: n,
					configurable: !0
				});
			}(i, typeof t == "function" ? t.displayName || t.name || "Unknown" : t), function(e, t, n, r, i, a) {
				var s = n.ref;
				return e = {
					$$typeof: f,
					type: e,
					key: t,
					props: n,
					_owner: r
				}, (s === void 0 ? null : s) === null ? Object.defineProperty(e, "ref", {
					enumerable: !1,
					value: null
				}) : Object.defineProperty(e, "ref", {
					enumerable: !1,
					get: o
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
					value: i
				}), Object.defineProperty(e, "_debugTask", {
					configurable: !1,
					enumerable: !1,
					writable: !0,
					value: a
				}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
			}(t, p, i, (d = w.A) === null ? null : d.getOwner(), s, l);
		}
		function c(e) {
			l(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === C && (e._payload.status === "fulfilled" ? l(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function l(e) {
			return typeof e == "object" && !!e && e.$$typeof === f;
		}
		var u, d = t, f = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), _ = Symbol.for("react.consumer"), v = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), te = Symbol.for("react.client.reference"), w = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, T = Object.prototype.hasOwnProperty, ne = Array.isArray, re = console.createTask ? console.createTask : function() {
			return null;
		}, ie = {}, ae = (d = { react_stack_bottom_frame: function(e) {
			return e();
		} }).react_stack_bottom_frame.bind(d, a)(), oe = re(i(a)), se = {};
		fy.Fragment = m, fy.jsx = function(e, t, n) {
			var r = 1e4 > w.recentlyCreatedOwnerStacks++;
			return s(e, t, n, !1, r ? Error("react-stack-top-frame") : ae, r ? re(i(e)) : oe);
		}, fy.jsxs = function(e, t, n) {
			var r = 1e4 > w.recentlyCreatedOwnerStacks++;
			return s(e, t, n, !0, r ? Error("react-stack-top-frame") : ae, r ? re(i(e)) : oe);
		};
	}()), fy;
}
var my = (dy || (dy = 1, ly.exports = py()), ly.exports);
function hy() {
	return typeof window > "u";
}
function gy() {
	return Fd().getLocale();
}
function _y(e) {
	return e.locale ? e.locale : hy() ? gy() : void 0;
}
function vy() {
	let e = Fd();
	if (!function(e) {
		return e instanceof sy;
	}(e)) throw Error("TanstackI18nManager not initialized. Invoke initializeGT() to initialize.");
	return e;
}
function yy(e) {
	let t = vy().getProviderConfig();
	return my.jsx(iy, Object.assign({ ssr: hy() }, t, e, {
		reloadOnLocaleUpdate: !0,
		locale: _y(e)
	}));
}
var by = {
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
	files: { gt: { output: "src/_gt/[locale].json" } }
}, xy = {
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
function Sy(e) {
	return xy[e] || xy.en;
}
var Cy = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/gt-react-app/scripts/Wrapper.tsx";
cy({
	...by,
	loadTranslations: Sy
});
function wy({ children: e }) {
	return _(yy, {
		locale: "en",
		children: e
	}, void 0, !1, {
		fileName: Cy,
		lineNumber: 13,
		columnNumber: 10
	}, this);
}
var Ty = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-static/gt-react-app/src/components/pages/careers/CareersBenefits.wrapper.tsx";
function Ey() {
	return _(wy, { children: _(go, {}, void 0, !1, {
		fileName: Ty,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: Ty,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Ey as default };
