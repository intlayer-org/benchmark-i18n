import * as e from "react";
import t, { Children as n, Fragment as r, Suspense as i, cloneElement as a, createContext as o, createElement as s, isValidElement as c, useCallback as l, useContext as u, useEffect as d, useMemo as f, useRef as p, useState as m, useSyncExternalStore as h } from "react";
import { jsx as g } from "react/jsx-runtime";
import { jsxDEV as _ } from "react/jsx-dev-runtime";
import { createIsomorphicFn as v } from "@tanstack/react-start";
import { getCookie as y, getRequestHeader as b } from "@tanstack/react-start/server";
import x from "../../../../gt.config.json";
var S = Object.defineProperty, C = Object.getOwnPropertyDescriptor, ee = Object.getOwnPropertyNames, te = Object.prototype.hasOwnProperty, w = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, T = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), ne = (e, t) => {
	let n = {};
	for (var r in e) S(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || S(n, Symbol.toStringTag, { value: "Module" }), n;
}, re = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = ee(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !te.call(e, s) && s !== n && S(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = C(t, s)) || r.enumerable
	});
	return e;
}, ie = (e) => te.call(e, "module.exports") ? e["module.exports"] : re(S({}, "__esModule", { value: !0 }), e), ae = class extends Error {
	constructor(e, t, n) {
		super(e), this.name = "ApiError", this.code = t, this.message = n;
	}
}, oe = 6e4;
function se(e) {
	let t = e.trim();
	return t ? /[.!?)]$/.test(t) ? t : `${t}.` : "";
}
function E(e) {
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
	return t.trim() ? se(`Details: ${t}`) : "";
}
function D({ source: e, severity: t, whatHappened: n, reassurance: r, why: i, fix: a, wayOut: o, details: s, docsUrl: c }) {
	let l = e ? t ? `${e} ${t}:` : `${e}:` : t ? `${t}:` : "", u = i ? `${E(n)} because ${E(i)}` : n, d = !!a && !!o && /^[a-z]/.test(E(o)), f = [
		u,
		r,
		d ? `${E(a)}, or ${E(o)}` : a,
		d ? void 0 : o,
		ce(s)
	].filter((e) => !!e).map(se);
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
		throw new ae(t, e.response.status, t);
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
var O = {
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
				this.index += 1, r.push(this.withLocation({ type: O.pound }, e, this.index));
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
			type: O.literal,
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
			type: O.literal,
			value: `<${n}/>`
		}, t, this.index);
		this.consume(">") || this.fail("INVALID_TAG", t);
		let r = this.parseMessage(!0, e, !0), i = this.index;
		this.consume("</") || this.fail("UNCLOSED_TAG", t);
		let a = this.index;
		return xt(this.current()) || this.failAt("INVALID_TAG", i, this.index), this.readTagName() !== n && this.fail("UNMATCHED_CLOSING_TAG", a), this.skipSpace(), this.consume(">") || this.failAt("INVALID_TAG", i, this.index), this.withLocation({
			type: O.tag,
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
			type: O.argument,
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
		let s = n === "number" ? O.number : n === "date" ? O.date : O.time;
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
			type: O.select,
			value: t,
			options: c
		}, e, this.index) : this.withLocation({
			type: O.plural,
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
		case O.literal:
			i(r.value);
			break;
		case O.pound:
			n !== void 0 && i(Lt(t).format(n));
			break;
		case O.argument: {
			let e = Ft(t.variables, r.value);
			i(typeof e == "string" || typeof e == "number" ? String(e) : e || "");
			break;
		}
		case O.number: {
			let e = Ft(t.variables, r.value), { scale: n, ...a } = typeof r.style == "string" ? kt[r.style] ?? {} : r.style?.type === Qe.number ? r.style.parsedOptions : {}, o = It(e, n);
			i(Lt(t, a).format(o));
			break;
		}
		case O.date:
		case O.time: {
			let e = Ft(t.variables, r.value), n = r.type === O.date ? At : Mt;
			i(Rt(t, typeof r.style == "string" ? n[r.style] : r.style?.type === Qe.dateTime ? r.style.parsedOptions : r.type === O.time ? Mt.medium : void 0).format(e));
			break;
		}
		case O.select: {
			let e = String(Ft(t.variables, r.value)), n = Ut(r.options, e) ?? r.options.other;
			if (!n) throw Wt(r.value, e, r.options);
			Pt(n.value, t).forEach(i);
			break;
		}
		case O.plural: {
			let e = Ft(t.variables, r.value), n = `=${String(e)}`, a = Ut(r.options, n), o = typeof e == "bigint" ? e : Number(e), s = typeof o == "bigint" ? o - BigInt(r.offset) : o - r.offset;
			if (!a && Ht(r.options)) {
				let e = zt(t, r.pluralType ?? "cardinal").select(Vt(s));
				a = Ut(r.options, e);
			}
			if (a ??= r.options.other, !a) throw Wt(r.value, e, r.options);
			Pt(a.value, t, s).forEach(i);
			break;
		}
		case O.tag: {
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
		t(e) && (n(e), i = !0), (!i || r) && (e.type === O.select || e.type === O.plural ? Object.values(e.options).map((e) => e.value).map(o) : e.type === O.tag && o(e.children));
	}
}
var qt = "_gt_";
RegExp(`^${qt}\\d+$`);
var Jt = RegExp(`^${qt}$`);
function Yt(e) {
	return e.type === O.select && Jt.test(e.value) && !!e.options.other && (e.options.other.value.length === 0 || e.options.other.value.length > 0 && e.options.other.value[0]?.type === O.literal);
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
}, k = new class {
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
	return k.get("PluralRules", e);
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
	return k.get("NumberFormat", t, {
		numberingSystem: "latn",
		...n
	}).format(e);
}
function pn({ value: e, locales: t = ["en"], options: n = {} }) {
	return k.get("DateTimeFormat", t, {
		calendar: "gregory",
		numberingSystem: "latn",
		...n
	}).format(e);
}
function mn({ value: e, locales: t = ["en"], currency: n = "USD", options: r = {} }) {
	return k.get("NumberFormat", t, {
		style: "currency",
		currency: n,
		numberingSystem: "latn",
		...r
	}).format(e);
}
function hn({ value: e, locales: t = ["en"], options: n = {} }) {
	return k.get("ListFormat", t, {
		type: "conjunction",
		style: "long",
		...n
	}).format(e.map(String));
}
function gn({ value: e, locales: t = ["en"], options: n = {} }) {
	let r = k.get("ListFormat", t, {
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
	return k.get("RelativeTimeFormat", n, {
		style: "long",
		numeric: "auto",
		...r
	}).format(e, t);
}
function yn(e) {
	try {
		return k.get("Locale", e).language;
	} catch {
		return;
	}
}
function bn(...e) {
	try {
		let t = e.flat().map((e) => k.get("Locale", e).language);
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
		let { language: t, region: n, script: r } = k.get("Locale", e), i = 1 + Number(!!n) + Number(!!r);
		return !(e.split("-").length !== i || k.get("DisplayNames", ["en"], { type: "language" }).of(t) === t && !Tn(t) || n && k.get("DisplayNames", ["en"], { type: "region" }).of(n) === n || r && k.get("DisplayNames", ["en"], { type: "script" }).of(r) === r && !wn.has(r));
	} catch {
		return !1;
	}
}, Dn = (e) => {
	try {
		return Intl.getCanonicalLocales(e)[0];
	} catch {
		return e;
	}
};
function On(e, t) {
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
		o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(e, o)), o.add(Dn(a));
	}
	return {
		allValid: n,
		languages: r,
		byLanguage: i
	};
}
function kn(...e) {
	try {
		let t = e.flat().map((e) => k.get("Locale", Dn(e))), [n] = t, r = new Set(t.map(({ region: e }) => e).filter(Boolean)), i = new Set(t.map(({ script: e }) => e).filter(Boolean));
		return t.every(({ language: e }) => e === n?.language) && r.size <= 1 && i.size <= 1;
	} catch (e) {
		return console.error(e), !1;
	}
}
function An(e, t, n, r) {
	if (n && !n.allValid || !En(e, r) || !En(t, r) || kn(e, t)) return !1;
	if (!n) return !0;
	let i = yn(t);
	return i !== void 0 && n.languages.has(i);
}
function jn(e, t, n, r) {
	return An(e, t, n ? On(n, r) : void 0, r);
}
function Mn(e) {
	try {
		let t = k.get("Locale", e), n = t.language, r = t.region || "", i = t.script || "";
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
		let t = En(e) ? Dn(e) : e, n = t.split("-");
		return {
			languageCode: n[0] || t,
			regionCode: n.length > 2 ? n[2] : n[1] || "",
			scriptCode: n[3] || "",
			minimizedCode: t
		};
	}
}
function Nn(e, t) {
	if (t.has(e)) return e;
	let { languageCode: n, regionCode: r, scriptCode: i, minimizedCode: a } = Mn(e), o = `${n}-${r}`;
	if (t.has(o)) return o;
	let s = `${n}-${i}`;
	if (t.has(s)) return s;
	if (t.has(a)) return a;
}
function Pn(e, t, n) {
	let r = Array.isArray(e) ? e : [e];
	for (let e of r) {
		if (!En(e, n)) continue;
		let r = Dn(e), i = yn(r);
		if (i === void 0) continue;
		let a = t.byLanguage.get(i);
		if (a === void 0) continue;
		let o = Nn(r, a) || Nn(i, a);
		if (o) return o;
	}
}
function Fn(e, t, n) {
	return Pn(e, On(t, n), n);
}
function In(e, t) {
	let n = Cn(t, e);
	return n && En(n) ? n : e;
}
function Ln(e, t) {
	let n = e;
	e = In(e, t);
	try {
		let r = Dn(e), i = k.get("Locale", r), { language: a, region: o } = i;
		if (t) for (let i of [
			n,
			e,
			r,
			a
		]) {
			let e = Sn(t, i, "emoji");
			if (e) return e;
		}
		let s = o && Kn(o);
		if (s) return s;
		let c = i.maximize();
		return Vn[c.language] || Gn(c.region || "");
	} catch {
		return Bn;
	}
}
var Rn = "🌍", zn = "🌏", Bn = Rn, Vn = {
	ca: Rn,
	eu: Rn,
	ku: Rn,
	bo: zn,
	ug: zn,
	gd: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
	cy: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
	gv: "🇮🇲",
	grc: "🏺"
}, Hn = {
	EU: "🇪🇺",
	419: "🌎"
}, Un = /* @__PURE__ */ new Set(/* @__PURE__ */ "AF.AX.AL.DZ.AS.AD.AO.AI.AQ.AG.AR.AM.AW.AU.AT.AZ.BS.BH.BD.BB.BY.BE.BZ.BJ.BM.BT.BO.BQ.BA.BW.BV.BR.IO.BN.BG.BF.BI.CV.KH.CM.CA.KY.CF.TD.CL.CN.CX.CC.CO.KM.CD.CG.CK.CR.CI.HR.CU.CW.CY.CZ.DK.DJ.DM.DO.EC.EG.SV.GQ.ER.EE.SZ.ET.FK.FO.FJ.FI.FR.GF.PF.TF.GA.GM.GE.DE.GH.GI.GR.GL.GD.GP.GU.GT.GG.GN.GW.GY.HT.HM.VA.HN.HK.HU.IS.IN.ID.IR.IQ.IE.IM.IL.IT.JM.JP.JE.JO.KZ.KE.KI.KP.KR.KW.KG.LA.LV.LB.LS.LR.LY.LI.LT.LU.MO.MG.MW.MY.MV.ML.MT.MH.MQ.MR.MU.YT.MX.FM.MD.MC.MN.ME.MS.MA.MZ.MM.NA.NR.NP.NL.NC.NZ.NI.NE.NG.NU.NF.MK.MP.NO.OM.PK.PW.PS.PA.PG.PY.PE.PH.PN.PL.PT.PR.QA.RE.RO.RU.RW.BL.SH.KN.LC.MF.PM.VC.WS.SM.ST.SA.SN.RS.SC.SL.SG.SX.SK.SI.SB.SO.ZA.GS.SS.ES.LK.SD.SR.SJ.SE.CH.SY.TW.TJ.TZ.TH.TL.TG.TK.TO.TT.TN.TR.TM.TC.TV.UG.UA.AE.GB.US.UM.UY.UZ.VU.VE.VN.VG.VI.WF.EH.YE.ZM.ZW".split(".")), Wn = 127397;
function Gn(e) {
	return Kn(e) || "🌍";
}
function Kn(e) {
	let t = e.toUpperCase(), n = Hn[t];
	if (n) return n;
	if (Un.has(t)) return String.fromCodePoint(t.charCodeAt(0) + Wn, t.charCodeAt(1) + Wn);
}
function qn(e, t) {
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
function Jn(e, t = "en", n) {
	let r = e;
	e = In(e, n), t ||= "en";
	try {
		let i = Dn(e), a = k.get("Locale", e), o = a.language, s = qn([
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
		], g = k.get("DisplayNames", m, { type: "language" }), _ = k.get("DisplayNames", h, { type: "language" }), v = s?.name, y = s?.nativeName || s?.name, b = v || g.of(e) || e, x = y || _.of(e) || e, S = s?.maximizedName || v || g.of(u) || e, C = s?.nativeMaximizedName || y || _.of(u) || e, ee = s?.minimizedName || v || g.of(p) || e, te = s?.nativeMinimizedName || y || _.of(p) || e, w = s?.languageName || v || g.of(o) || e, T = s?.nativeLanguageName || y || _.of(o) || e, ne = s?.nameWithRegionCode || (c ? `${w} (${c})` : b), re = s?.nativeNameWithRegionCode || (c ? `${T} (${c})` : x) || ne, ie = k.get("DisplayNames", m, { type: "region" }), ae = k.get("DisplayNames", h, { type: "region" }), oe = s?.regionName || (d ? ie.of(d) : "") || "", se = s?.nativeRegionName || (d ? ae.of(d) : "") || "", E = k.get("DisplayNames", m, { type: "script" }), ce = k.get("DisplayNames", h, { type: "script" });
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
			scriptName: s?.scriptName || (f ? E.of(f) : "") || "",
			nativeScriptName: s?.nativeScriptName || (f ? ce.of(f) : "") || "",
			emoji: s?.emoji || Ln(i, n)
		};
	} catch {
		let t = En(e) ? Dn(e) : e, r = t.split("-"), i = r[0] || t, a = r.length > 2 ? r[2] : r[1] || "", o = r[3] || "", s = qn([t, i], n);
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
function Yn(e, t = "en", n) {
	let r = e;
	e = In(e, n), t ||= "en";
	try {
		let i = Dn(e);
		if (n) for (let t of [
			r,
			e,
			i,
			k.get("Locale", i).language
		]) {
			let e = Sn(n, t, "name");
			if (e) return e;
		}
		return k.get("DisplayNames", [
			t,
			i,
			"en"
		], { type: "language" }).of(i) || "";
	} catch {
		return "";
	}
}
function Xn(e) {
	try {
		let t = $n(k.get("Locale", e));
		if (t) return t;
	} catch {}
	let { scriptCode: t, languageCode: n } = Jn(e);
	return t ? Zn.has(t.toLowerCase()) ? "rtl" : "ltr" : n && Qn.has(n.toLowerCase()) ? "rtl" : "ltr";
}
var Zn = /* @__PURE__ */ new Set([
	"arab",
	"adlm",
	"hebr",
	"nkoo",
	"rohg",
	"samr",
	"syrc",
	"thaa",
	"yezi"
]), Qn = /* @__PURE__ */ new Set([
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
function $n(e) {
	let t = "textInfo" in e && typeof e.textInfo == "object" && e.textInfo !== null && "direction" in e.textInfo ? e.textInfo.direction : void 0;
	return t === "rtl" || t === "ltr" ? t : void 0;
}
function er(e, t) {
	try {
		let { language: n, region: r, script: i } = k.get("Locale", Dn(e)), { language: a, region: o, script: s } = k.get("Locale", Dn(t));
		return !(n !== a || r && r !== o || i && i !== s);
	} catch (e) {
		return console.error(e), !1;
	}
}
function tr(e, t) {
	return t ? Object.keys(t).find((n) => Cn(t, n) === e) ?? e : e;
}
var nr = class {
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
			approved: On(t.map(({ canonicalLocale: e }) => e), this.customMapping)
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
		return k.get("CutoffFormat", this.getFormattingLocales(t, r), i).format(e);
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
		return Yn(e, this.defaultLocale, this.customMapping);
	}
	getLocaleEmoji(e) {
		return Ln(e, this.customMapping);
	}
	getLocaleProperties(e) {
		return Jn(e, this.defaultLocale, this.customMapping);
	}
	requiresTranslation(e, t = this.defaultLocale, n = this.locales.length ? this.locales : void 0) {
		let r = n ? n === this.locales ? this.getResolutionScope().approved : On(n.map((e) => this.resolveCanonicalLocale(e)), this.customMapping) : void 0;
		return An(this.resolveCanonicalLocale(t), this.resolveCanonicalLocale(e), r, this.customMapping);
	}
	determineLocale(e, t = this.locales) {
		let { approvedLocalePairs: n, approved: r } = t === this.locales ? this.getResolutionScope() : this.buildResolutionScope(t), i = Pn(Array.isArray(e) ? e.map((e) => this.resolveCanonicalLocale(e)) : this.resolveCanonicalLocale(e), r, this.customMapping);
		if (i) return n.find(({ canonicalLocale: e }) => e === i)?.locale ?? this.resolveAliasLocale(i);
	}
	getLocaleDirection(e) {
		return Xn(this.resolveCanonicalLocale(e));
	}
	isValidLocale(e) {
		return En(e, this.customMapping);
	}
	resolveCanonicalLocale(e) {
		return In(e, this.customMapping);
	}
	resolveAliasLocale(e) {
		return tr(e, this.customMapping);
	}
	standardizeLocale(e) {
		return Dn(e);
	}
	isSameDialect(...e) {
		return kn(...e.map((e) => Array.isArray(e) ? e.map((e) => this.resolveCanonicalLocale(e)) : this.resolveCanonicalLocale(e)));
	}
	isSameLanguage(...e) {
		return bn(...e.map((e) => Array.isArray(e) ? e.map((e) => this.resolveCanonicalLocale(e)) : this.resolveCanonicalLocale(e)));
	}
	isSupersetLocale(e, t) {
		return er(this.resolveCanonicalLocale(e), this.resolveCanonicalLocale(t));
	}
};
function rr(e, t = "en", n) {
	t ||= "en";
	let r = e, i = Bn;
	try {
		r = k.get("DisplayNames", [t, "en"], { type: "region" }).of(e) || e, i = Gn(e);
	} catch {}
	return {
		code: e,
		name: r,
		emoji: i,
		...n?.[e]
	};
}
function ir(e, t) {
	return En(e, t);
}
function ar(e, t) {
	return In(e, t);
}
function or(e) {
	return Dn(e);
}
function sr(e, t, n, r) {
	return jn(e, t, n, r);
}
function cr(e, t = [], n = void 0) {
	return Fn(e, t, n);
}
function lr(e, t) {
	return tr(e, t);
}
function ur(e) {
	return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in e && e.BYTES_PER_ELEMENT === 1;
}
function dr(e, t, n = "") {
	let r = ur(e), i = e?.length, a = t !== void 0;
	if (!r || a && i !== t) {
		let o = n && `"${n}" `, s = a ? ` of length ${t}` : "", c = r ? `length=${i}` : `type=${typeof e}`, l = o + "expected Uint8Array" + s + ", got " + c;
		throw r ? RangeError(l) : TypeError(l);
	}
	return e;
}
function fr(e, t = !0) {
	if (e.destroyed) throw Error("Hash instance has been destroyed");
	if (t && e.finished) throw Error("Hash#digest() has already been called");
}
function pr(e, t) {
	dr(e, void 0, "digestInto() output");
	let n = t.outputLen;
	if (e.length < n) throw RangeError("\"digestInto() output\" expected to be of length >=" + n);
}
function mr(...e) {
	for (let t = 0; t < e.length; t++) e[t].fill(0);
}
function hr(e) {
	return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function gr(e, t) {
	return e << 32 - t | e >>> t;
}
var _r = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", vr = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function yr(e) {
	if (dr(e), _r) return e.toHex();
	let t = "";
	for (let n = 0; n < e.length; n++) t += vr[e[n]];
	return t;
}
function br(e) {
	if (typeof e != "string") throw TypeError("string expected");
	return new Uint8Array(new TextEncoder().encode(e));
}
function xr(e, t = {}) {
	let n = (t, n) => e(n).update(t).digest(), r = e(void 0);
	return n.outputLen = r.outputLen, n.blockLen = r.blockLen, n.canXOF = r.canXOF, n.create = (t) => e(t), Object.assign(n, t), Object.freeze(n);
}
var Sr = (e) => ({ oid: Uint8Array.from([
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
function Cr(e, t, n) {
	return e & t ^ ~e & n;
}
function wr(e, t, n) {
	return e & t ^ e & n ^ t & n;
}
var Tr = class {
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
		this.blockLen = e, this.outputLen = t, this.padOffset = n, this.isLE = r, this.buffer = new Uint8Array(e), this.view = hr(this.buffer);
	}
	update(e) {
		fr(this), dr(e);
		let { view: t, buffer: n, blockLen: r } = this, i = e.length;
		for (let a = 0; a < i;) {
			let o = Math.min(r - this.pos, i - a);
			if (o === r) {
				let t = hr(e);
				for (; r <= i - a; a += r) this.process(t, a);
				continue;
			}
			n.set(e.subarray(a, a + o), this.pos), this.pos += o, a += o, this.pos === r && (this.process(t, 0), this.pos = 0);
		}
		return this.length += e.length, this.roundClean(), this;
	}
	digestInto(e) {
		fr(this), pr(e, this), this.finished = !0;
		let { buffer: t, view: n, blockLen: r, isLE: i } = this, { pos: a } = this;
		t[a++] = 128, mr(this.buffer.subarray(a)), this.padOffset > r - a && (this.process(n, 0), a = 0);
		for (let e = a; e < r; e++) t[e] = 0;
		n.setBigUint64(r - 8, BigInt(this.length * 8), i), this.process(n, 0);
		let o = hr(e), s = this.outputLen;
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
}, Er = Uint32Array.from([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]), Dr = Uint32Array.from([
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
]), Or = /* @__PURE__ */ new Uint32Array(64), kr = class extends Tr {
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
		for (let n = 0; n < 16; n++, t += 4) Or[n] = e.getUint32(t, !1);
		for (let e = 16; e < 64; e++) {
			let t = Or[e - 15], n = Or[e - 2], r = gr(t, 7) ^ gr(t, 18) ^ t >>> 3, i = gr(n, 17) ^ gr(n, 19) ^ n >>> 10;
			Or[e] = i + Or[e - 7] + r + Or[e - 16] | 0;
		}
		let { A: n, B: r, C: i, D: a, E: o, F: s, G: c, H: l } = this;
		for (let e = 0; e < 64; e++) {
			let t = gr(o, 6) ^ gr(o, 11) ^ gr(o, 25), u = l + t + Cr(o, s, c) + Dr[e] + Or[e] | 0, d = (gr(n, 2) ^ gr(n, 13) ^ gr(n, 22)) + wr(n, r, i) | 0;
			l = c, c = s, s = o, o = a + u | 0, a = i, i = r, r = n, n = u + d | 0;
		}
		n = n + this.A | 0, r = r + this.B | 0, i = i + this.C | 0, a = a + this.D | 0, o = o + this.E | 0, s = s + this.F | 0, c = c + this.G | 0, l = l + this.H | 0, this.set(n, r, i, a, o, s, c, l);
	}
	roundClean() {
		mr(Or);
	}
	destroy() {
		this.destroyed = !0, this.set(0, 0, 0, 0, 0, 0, 0, 0), mr(this.buffer);
	}
}, Ar = class extends kr {
	A = Er[0] | 0;
	B = Er[1] | 0;
	C = Er[2] | 0;
	D = Er[3] | 0;
	E = Er[4] | 0;
	F = Er[5] | 0;
	G = Er[6] | 0;
	H = Er[7] | 0;
	constructor() {
		super(32);
	}
}, jr = xr(() => new Ar(), Sr(1));
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
	return yr(jr(br(e))).slice(0, 16);
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
		return Xt(e) ? {
			k: e.k,
			...e.v && { v: e.v }
		} : t;
	}
	return e;
};
function Lr(e) {
	return Array.isArray(e) ? e.map(Ir) : Ir(e);
}
var Rr = "GT", zr = (e) => D({
	source: Rr,
	severity: "Error",
	whatHappened: `Translation request timed out after ${e}ms`,
	fix: "Try again, or increase the request timeout if the source content is large"
}), Br = (e, t, n) => D({
	source: Rr,
	severity: "Error",
	whatHappened: `The translation API returned ${e} ${t}`,
	fix: "Check the request configuration and try again",
	details: n
});
D({
	source: Rr,
	severity: "Error",
	whatHappened: "Authentication failed",
	fix: "Check that your API key and project ID are correct"
});
var Vr = (e) => D({
	source: Rr,
	severity: "Error",
	whatHappened: `Cannot call \`${e}\` without a specified locale`,
	fix: `Pass a locale to \`${e}\` or specify targetLocale in the GT constructor`
}), Hr = (e) => D({
	source: Rr,
	severity: "Error",
	whatHappened: `Cannot call \`${e}\` without a specified locale`,
	fix: `Pass a locale to \`${e}\` or specify sourceLocale in the GT constructor`
}), Ur = (e) => D({
	source: Rr,
	severity: "Error",
	whatHappened: `Cannot call \`${e}\` without a specified project ID`,
	fix: `Pass a project ID to \`${e}\` or specify projectId in the GT constructor`
}), Wr = (e) => D({
	source: Rr,
	severity: "Error",
	whatHappened: `Cannot call \`${e}\` without a specified API key`,
	fix: `Pass an API key to \`${e}\` or specify apiKey in the GT constructor`
}), Gr = (e) => D({
	source: Rr,
	severity: "Error",
	whatHappened: `Locale "${e}" is not valid`,
	fix: "Use a valid BCP 47 locale code or add a custom mapping"
}), Kr = (e) => D({
	source: Rr,
	severity: "Error",
	whatHappened: `These locales are not valid: ${e.join(", ")}`,
	fix: "Use valid BCP 47 locale codes or add custom mappings"
}), qr = {
	debug: 0,
	info: 1,
	warn: 2,
	error: 3,
	off: 4
}, Jr = {
	debug: "\x1B[36m",
	info: "\x1B[32m",
	warn: "\x1B[33m",
	error: "\x1B[31m",
	off: ""
}, Yr = "\x1B[0m";
function Xr() {
	if (typeof process < "u" && process.env?._GT_LOG_LEVEL) {
		let e = process.env._GT_LOG_LEVEL.toLowerCase();
		if (e in qr) return e;
	}
	return "warn";
}
var Zr = class {
	constructor(e) {
		this.config = e;
	}
	handle(e) {
		let t = [];
		this.config.includeTimestamp && t.push(`[${e.timestamp.toISOString()}]`);
		let n = Jr[e.level], r = `[${e.level.toUpperCase()}]`;
		t.push(`${n}${r}${Yr}`), this.config.prefix && t.push(`[${this.config.prefix}]`), this.config.includeContext && e.context && t.push(`[${e.context}]`), t.push(e.message), e.metadata && Object.keys(e.metadata).length > 0 && t.push(`\n  Metadata: ${JSON.stringify(e.metadata, null, 2)}`);
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
}, Qr = class {
	constructor(e = {}) {
		this.config = {
			level: Xr(),
			includeTimestamp: !0,
			includeContext: !0,
			enableConsole: !0,
			handlers: [],
			...e
		}, this.handlers = [...this.config.handlers || []], this.config.enableConsole && this.handlers.push(new Zr(this.config));
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
		return qr[e] >= qr[this.config.level];
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
		return new $r(this, e);
	}
	getConfig() {
		return { ...this.config };
	}
}, $r = class e {
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
}, ei = new Qr({
	level: Xr(),
	includeTimestamp: !0,
	includeContext: !0,
	prefix: "GT"
});
ei.child("fetch");
var ti = ei.child("GT instance");
async function ni(e, t, n) {
	let r = new AbortController(), i = [r.signal];
	t.signal && i.push(t.signal), e instanceof Request && i.push(e.signal);
	let a = AbortSignal.any(i);
	n ||= oe;
	let o = n ? setTimeout(() => r.abort(), n) : null;
	try {
		return await fetch(e, {
			...t,
			signal: a
		});
	} catch (e) {
		throw e instanceof Error && e.name === "AbortError" ? zr(n) : e;
	} finally {
		o && clearTimeout(o);
	}
}
async function ri(e) {
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
		throw new ae(Br(e.status, e.statusText, t), e.status, t);
	}
}
async function ii(e, t, n, r) {
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
	let c = Ze({
		apiKey: n.apiKey,
		baseUrl: n.baseUrl || "https://api.gtx.dev",
		fetch: (e, t) => ni(e, t ?? {}, r),
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
	if (l.data === void 0 && l.response && !ue(l)) throw await ri(l.response), l.error;
	let u = de(l);
	return a ? a.map((e) => u[e] ?? {
		success: !1,
		error: "No translation returned",
		code: 500
	}) : u;
}
var ai = class {
	get localeConfig() {
		return this._localeConfig;
	}
	constructor(e = {}) {
		typeof process < "u" && (this.apiKey ||= process.env?.GT_API_KEY, this.devApiKey ||= process.env?.GT_DEV_API_KEY, this.projectId ||= process.env?.GT_PROJECT_ID), this.setConfig(e);
	}
	setConfig({ apiKey: e, devApiKey: t, sourceLocale: n, targetLocale: r, locales: i, projectId: a, customMapping: o, baseUrl: s }) {
		if (e && (this.apiKey = e), t && (this.devApiKey = t), a && (this.projectId = a), n && (this.sourceLocale = or(n), !ir(this.sourceLocale, o))) throw Error(Gr(this.sourceLocale));
		if (r && (this.targetLocale = or(r), !ir(this.targetLocale, o))) throw Error(Gr(this.targetLocale));
		if (i) {
			let e = [], t = [];
			if (i.forEach((n) => {
				let r = or(n);
				ir(r) ? e.push(r) : t.push(n);
			}), t.length > 0) throw Error(Kr(t));
			this.locales = e;
		}
		s && (this.baseUrl = s), o && (this.customMapping = o, this.reverseCustomMapping = Object.fromEntries(Object.entries(o).filter(([, e]) => e && typeof e == "object" && "code" in e).map(([e, t]) => [t.code, e]))), this._localeConfig = new nr({
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
			let n = Wr(e);
			t.push(n);
		}
		if (!this.projectId) {
			let n = Ur(e);
			t.push(n);
		}
		if (t.length) throw Error(t.join("\n"));
	}
	async translate(e, t, n) {
		typeof t == "string" && (t = { targetLocale: t }), this._validateAuth("translate");
		let r = t?.targetLocale || this.targetLocale;
		if (!r) {
			let e = Vr("translate");
			throw ti.error(e), Error(e);
		}
		r = this.resolveCanonicalLocale(r);
		let i = this.resolveCanonicalLocale(t?.sourceLocale || this.sourceLocale || "en");
		return (await ii([e], {
			...t,
			targetLocale: r,
			sourceLocale: i
		}, this._getTranslationConfig(), n))[0];
	}
	async translateMany(e, t, n) {
		typeof t == "string" && (t = { targetLocale: t }), this._validateAuth("translateMany");
		let r = t?.targetLocale || this.targetLocale;
		if (!r) {
			let e = Vr("translateMany");
			throw ti.error(e), Error(e);
		}
		r = this.resolveCanonicalLocale(r);
		let i = this.resolveCanonicalLocale(t?.sourceLocale || this.sourceLocale || "en");
		return await ii(e, {
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
		if (!e) throw Error(Vr("getLocaleName"));
		return this.localeConfig.getLocaleName(e);
	}
	getLocaleEmoji(e = this.targetLocale) {
		if (!e) throw Error(Vr("getLocaleEmoji"));
		return this.localeConfig.getLocaleEmoji(e);
	}
	getLocaleProperties(e = this.targetLocale) {
		if (!e) throw Error(Vr("getLocaleProperties"));
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
		return rr(e, this.targetLocale, t);
	}
	requiresTranslation(e = this.sourceLocale, t = this.targetLocale, n = this.locales, r = this.customMapping) {
		if (!e) throw Error(Hr("requiresTranslation"));
		if (!t) throw Error(Vr("requiresTranslation"));
		return r === this.customMapping ? this.localeConfig.requiresTranslation(t, e, n) : sr(e, t, n, r);
	}
	determineLocale(e, t = this.locales || [], n = this.customMapping) {
		return n === this.customMapping ? this.localeConfig.determineLocale(e, t ?? []) : cr(e, t, n);
	}
	getLocaleDirection(e = this.targetLocale) {
		if (!e) throw Error(Vr("getLocaleDirection"));
		return this.localeConfig.getLocaleDirection(e);
	}
	isValidLocale(e = this.targetLocale, t = this.customMapping) {
		if (!e) throw Error(Vr("isValidLocale"));
		return t === this.customMapping ? this.localeConfig.isValidLocale(e) : ir(e, t);
	}
	resolveCanonicalLocale(e = this.targetLocale, t = this.customMapping) {
		if (!e) throw Error(Vr("resolveCanonicalLocale"));
		return t === this.customMapping ? this.localeConfig.resolveCanonicalLocale(e) : ar(e, t);
	}
	resolveAliasLocale(e, t = this.customMapping) {
		if (!e) throw Error(Vr("resolveAliasLocale"));
		return t === this.customMapping ? this.localeConfig.resolveAliasLocale(e) : lr(e, t);
	}
	standardizeLocale(e = this.targetLocale) {
		if (!e) throw Error(Vr("standardizeLocale"));
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
}, oi = "DEBUG";
function si() {
	let e = li();
	return e === void 0 ? ui(() => void 0) : e;
}
function ci(e) {
	return e?.toUpperCase() === oi;
}
function li() {
	if (typeof process == "object") return process.env?._GENERALTRANSLATION_LOG_LEVEL;
}
function ui(e) {
	try {
		return e();
	} catch {
		return;
	}
}
function di(e) {
	let t = globalThis;
	return t.__generaltranslation ??= {}, t.__generaltranslation[e] ??= {}, t.__generaltranslation[e];
}
function fi(e) {
	return globalThis.__generaltranslation?.[e];
}
function pi({ namespace: e, key: t, source: n, notInitialized: r }) {
	function i() {
		let n = di(e)[t];
		if (n == null) {
			let e = r();
			throw typeof e == "string" ? Error(e) : e;
		}
		return n;
	}
	function a(r) {
		let i = di(e);
		if (i[t] !== void 0 && i[t] !== r) {
			mi() && console.warn(D({
				source: n,
				severity: "Warning",
				whatHappened: `Global ${t} singleton instance was already initialized`
			}));
			return;
		}
		i[t] = r;
	}
	function o() {
		return di(e)[t] != null;
	}
	return {
		get: i,
		set: a,
		isInitialized: o
	};
}
function mi() {
	let e = fi("i18n")?.i18nConfig;
	return hi(e) ? e.isDebugLoggingEnabled() : ci(si());
}
function hi(e) {
	return typeof e == "object" && !!e && typeof e.isDebugLoggingEnabled == "function";
}
pi({
	namespace: "i18n",
	key: "i18nCache",
	source: "gt-i18n",
	notInitialized: () => D({
		source: "gt-i18n",
		severity: "Error",
		whatHappened: "Cannot read I18nCache before it has been initialized",
		why: "the internal I18nCache singleton is unavailable",
		fix: "Initialize GT before accessing I18nCache (call initializeGT() from your GT framework package)."
	})
});
function gi(e) {
	return e.loadTranslations ? "custom" : (e.cacheUrl === void 0 || e.cacheUrl === "https://cdn.gtx.dev") && e.projectId ? "gt-remote" : e.cacheUrl ? "remote" : "disabled";
}
function _i(e) {
	let t = e.runtimeUrl === void 0 || e.runtimeUrl === "https://api.gtx.dev";
	return t && e.projectId && (e.devApiKey || e.apiKey) ? "gt" : e.runtimeUrl && !t ? "custom" : "disabled";
}
function vi() {
	if (typeof process == "object") return "development";
	let e = yi(() => "production");
	return e ? e === "development" ? "development" : "production" : yi(() => !0) === !0 ? "development" : "production";
}
function yi(e) {
	try {
		return e();
	} catch {
		return;
	}
}
var bi = {
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
function xi(e, t) {
	if (!t) return;
	let n = Si(e), r = Ci(e), i = [...n, ...r];
	if (i.forEach((e) => {
		bi.error(`I18nConfig: ${wi(e)}`);
	}), i.length > 0) throw Error(D({
		source: "gt-i18n",
		severity: "Error",
		whatHappened: "Invalid I18nConfig locale configuration",
		details: i.map((e) => `Invalid locale: ${e}`),
		fix: "Use valid BCP 47 locale codes or add custom mappings."
	}));
}
function Si({ defaultLocale: e, locales: t, customMapping: n }) {
	let r = /* @__PURE__ */ new Set([...e ? [e] : [], ...t || []]);
	return Array.from(r).filter((e) => !ir(e, n));
}
function Ci({ customMapping: e }) {
	return Object.values(e || {}).flatMap((e) => {
		let t = typeof e == "string" ? e : e.code;
		return t && !ir(t) ? [t] : [];
	});
}
function wi(e) {
	return D({
		whatHappened: `Locale "${e}" is not valid`,
		fix: "Use a valid BCP 47 locale code or add a custom mapping"
	});
}
var Ti = class extends nr {
	constructor(e = {}) {
		let t = ki(e);
		super(Ei(e, t)), this.runtimeConfig = {
			projectId: e.projectId,
			devApiKey: e.devApiKey,
			apiKey: e.apiKey,
			runtimeUrl: e.runtimeUrl,
			_disableDevHotReload: e._disableDevHotReload,
			_tagIds: e._tagIds
		}, this.gtServicesEnabled = t, this.logLevel = si();
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
		return ci(this.logLevel);
	}
	getGTClassClean(e) {
		return new ai({
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
		return !e || !Oi(e) ? this : new nr(Di(e));
	}
	determineSupportedLocaleWithConfig(e, t) {
		if (!(e == null || Array.isArray(e) && e.length === 0)) return t.determineLocale(e);
	}
};
function Ei(e, t) {
	let { defaultLocale: n = "en", locales: r = [], customMapping: i } = e;
	return xi({
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
function Di({ defaultLocale: e = "en", locales: t = [], customMapping: n } = {}) {
	return {
		defaultLocale: e,
		locales: t?.length ? t : [e],
		customMapping: n || {}
	};
}
function Oi(e) {
	return e.defaultLocale !== void 0 || e.locales !== void 0 || e.customMapping !== void 0;
}
function ki(e) {
	return gi(e) === "gt-remote" || _i(e) === "gt";
}
var Ai = pi({
	namespace: "i18n",
	key: "i18nConfig",
	source: "gt-i18n",
	notInitialized: () => D({
		source: "gt-i18n",
		severity: "Error",
		whatHappened: "Cannot read I18nConfig before it has been initialized",
		why: "the internal I18nConfig singleton is unavailable",
		fix: "Initialize GT before reading locale config (call initializeGT() from your GT framework package)."
	})
}), A = Ai.get;
Ai.set, Ai.isInitialized;
function ji(e) {
	let t = pi({
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
var { getConditionStore: Mi, setConditionStore: Ni } = ji(D({
	source: "gt-i18n",
	severity: "Error",
	whatHappened: "Cannot read the locale before GT has been initialized",
	why: "the internal ConditionStore singleton is unavailable",
	fix: "Initialize GT before calling translation functions (e.g. call initializeGT() from your GT framework package)."
}));
function Pi(e, t) {
	let n = t;
	return n.$_hash == null ? Fr({
		source: t.$format === "ICU" ? ln(e) : e,
		...n.$context && { context: n.$context },
		...n.$maxChars != null && { maxChars: Math.abs(n.$maxChars) },
		...n.$requiresReview === !0 && { requiresReview: !0 },
		dataFormat: t.$format
	}) : n.$_hash;
}
function Fi(e) {
	let t = "hash" in e ? e.hash : Pi(e.message, e.options);
	return `${e.locale}:${t}`;
}
var Ii = [];
function Li({ locale: e, enableI18n: t, localesProp: n = Ii }) {
	let r = A().getDefaultLocale();
	return t && A().requiresTranslation(e) ? [
		...n,
		e,
		r
	] : [r];
}
var Ri = "server-render", zi = Symbol.for("generaltranslation.react-core.ReactI18nConfig"), Bi = class extends Ti {
	renderStrategy;
	localeCookieName;
	regionCookieName;
	enableI18nCookieName;
	constructor(e = {}, t = Ri) {
		super(e), Hi(t), Object.defineProperty(this, zi, { value: !0 }), this.renderStrategy = t, this.localeCookieName = e.localeCookieName ?? "generaltranslation.locale", this.regionCookieName = e.regionCookieName ?? "generaltranslation.region", this.enableI18nCookieName = e.enableI18nCookieName ?? "generaltranslation.enable-i18n";
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
function Vi() {
	let e = A();
	if (Ui(e)) return e;
	throw Error(D({
		source: "@generaltranslation/react-core",
		severity: "Error",
		whatHappened: "Cannot read ReactI18nConfig after base I18nConfig setup.",
		why: "the internal I18nConfig singleton was initialized without react-core render strategy support",
		fix: "Initialize GT through gt-react or @generaltranslation/react-core/pure."
	}));
}
function Hi(e) {
	if (e !== "SPA" && e !== "server-render") throw Error(D({
		source: "@generaltranslation/react-core",
		severity: "Error",
		whatHappened: "Invalid React render strategy.",
		why: `the render strategy must be "SPA" or "server-render", but received "${String(e)}"`,
		fix: "Initialize GT through gt-react or pass a valid render strategy."
	}));
}
function Ui(e) {
	if (e instanceof Bi) return !0;
	let t = e;
	return t[zi] === !0 && typeof t.getRenderStrategy == "function" && typeof t.getLocaleCookieName == "function" && typeof t.getRegionCookieName == "function" && typeof t.getEnableI18nCookieName == "function";
}
var { getConditionStore: Wi, setConditionStore: Gi, isConditionStoreInitialized: Ki } = ji(D({
	source: "@generaltranslation/react-core",
	severity: "Error",
	whatHappened: "Cannot read GT runtime context before it has been initialized",
	why: "the internal ConditionStore is unavailable",
	fix: "Call initializeGT() during setup (gt-next runs this automatically) and add a <GTProvider> at the root of your component tree."
}));
function qi({ Currency: e, GtInternalCurrency: t, DateTime: n, GtInternalDateTime: r, Num: i, GtInternalNum: a, RelativeTime: o, GtInternalRelativeTime: s, Var: c, GtInternalVar: l }) {
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
var Ji = {
	variable: "value",
	number: "n",
	datetime: "date",
	currency: "cost",
	"relative-time": "time"
};
function Yi(e = {}, t) {
	return typeof e.name == "string" ? e.name : `_gt_${Ji[t] || "value"}_${e["data-_gt"]?.id}`;
}
function Xi(e) {
	return typeof e == "object" && !!e && "data-_gt" in e && typeof e["data-_gt"] == "object" && !!e["data-_gt"] && "transformation" in e["data-_gt"] && e["data-_gt"]?.transformation === "variable";
}
function Zi(e) {
	let t = e["data-_gt"]?.variableType || "variable";
	return {
		variableName: Yi(e, t),
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
function Qi(e) {
	return e && e.props && e.props["data-_gt"] ? e.props["data-_gt"] : null;
}
function $i(e, t, n) {
	let r = "", i = null;
	return typeof e == "number" && !i && n && (r = on(e, Object.keys(n).filter(an), t)), r && !i && (i = n[r]), i;
}
function ea({ renderVariable: e }) {
	return function({ children: n, defaultLocale: r = "en", enableI18n: i }) {
		let a = (n) => {
			let a = Qi(n);
			if (Xi(n.props)) {
				let { variableType: t, variableValue: a, variableOptions: o, injectionType: s } = Zi(n.props);
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
				return typeof n.props.n == "number" ? s($i(n.props.n, [r], e) ?? n.props.children) : n.props.children == null ? null : s(n.props.children);
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
function ta({ renderVariable: e }) {
	let n = ea({ renderVariable: e });
	function r({ sourceElement: e, targetElement: r, locales: a = ["en"], enableI18n: o }) {
		let { props: s } = e, c = s["data-_gt"], l = c?.transformation, u = r.d, d = {};
		if (u && Object.entries(un).forEach(([e, t]) => {
			u[e] && (d[t] = u[e]);
		}), l === "plural") {
			let t = e.props.n;
			return typeof t == "number" ? i({
				source: $i(t, a, c.branches || {}) ?? e.props.children,
				target: $i(t, a, r.d?.b || {}) ?? r.c,
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
					if (Xi(e.props)) {
						let { variableName: t, variableValue: r, variableOptions: i, injectionType: a } = Zi(e.props);
						n[t] = r, c[t] = i, l[t] = a;
					} else return !0;
				}
				return !1;
			}), d = (e) => u.find((t) => {
				let n = Qi(t);
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
				if (Xi(i.props)) {
					let { variableValue: t, variableOptions: n, variableType: r, injectionType: a } = Zi(i.props);
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
function na() {
	let e = A();
	return typeof e.isIdTaggingEnabled == "function" && e.isIdTaggingEnabled();
}
function ra(...e) {
	if (!na()) return;
	let t = Pi(...e);
	return e[1].$_hash = t, t;
}
var ia = { display: "contents" }, aa = globalThis.navigator?.product === "ReactNative";
function oa(e) {
	if (e == null || typeof e == "boolean" || e === "") return !0;
	if (Array.isArray(e)) return !e.some((e) => !oa(e));
	if (c(e) && e.type === r) {
		let t = e.props.children;
		return t == null || oa(t);
	}
	return !1;
}
function sa(e, t) {
	return aa || !na() ? e : c(e) && typeof e.type == "string" ? a(e, { "data-_gt-hash": t }) : oa(e) ? e : s("span", {
		"data-_gt-hash": t,
		style: ia
	}, e);
}
function ca({ renderDefaultChildren: e, renderTranslatedChildren: t }) {
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
		return c ? sa(l, c) : l;
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
function la(e) {
	let t = qi(e), n = ea({ renderVariable: t }), r = ta({ renderVariable: t });
	return {
		renderVariable: t,
		renderDefaultChildren: n,
		renderTranslatedChildren: r,
		renderPreparedT: ca({
			renderDefaultChildren: n,
			renderTranslatedChildren: r
		})
	};
}
var ua = pi({
	namespace: "reactCore",
	key: "i18nStore",
	source: "@generaltranslation/react-core",
	notInitialized: () => fa()
}), da = ua.get;
ua.set, ua.isInitialized;
function fa() {
	let e = D({
		source: "@generaltranslation/react-core",
		severity: "Error",
		whatHappened: "Cannot access I18nStore before it is initialized.",
		fix: Vi().getRenderStrategy() === "SPA" ? "Initialize GT before reading GT runtime context." : "Add a <GTProvider> at the root of your component tree."
	});
	return Error(e);
}
var pa = pi({
	namespace: "reactCore",
	key: "gtContext",
	source: "@generaltranslation/react-core",
	notInitialized: () => D({
		source: "@generaltranslation/react-core",
		severity: "Error",
		whatHappened: "Cannot read GTContext before it has been initialized",
		why: "the internal GTContext singleton is unavailable",
		fix: "Add a <GTProvider> at the root of your component tree."
	})
});
function ma() {
	return pa.isInitialized() || pa.set(o(void 0)), pa.get();
}
function ha() {
	let e = u(ma());
	if (e || Vi().getRenderStrategy() === "SPA") return e;
	throw Error(ga());
}
function ga() {
	return D({
		source: "@generaltranslation/react-core",
		severity: "Error",
		whatHappened: "GT runtime context could not be read",
		why: "GTContext was accessed outside of a <GTProvider>",
		fix: "Add a <GTProvider> at the root of your component tree."
	});
}
function _a() {
	return ha()?.conditionStore ?? Wi();
}
function va() {
	return _a().getLocale();
}
function ya() {
	return _a().getEnableI18n();
}
function ba() {
	return f(() => A().getDefaultLocale(), []);
}
function xa() {
	let e = ya(), t = va();
	return e && A().requiresTranslation(t);
}
function Sa() {
	return ha()?.i18nStore || da();
}
function Ca() {
	return ha()?.translationsSnapshot || {};
}
function wa() {
	return Ta(xa());
}
function Ta(e) {
	let t = ha()?.onMissingTranslation, n = Da(e);
	return l((e) => {
		t ? t(e) : n(Fi(e), {
			type: "translation",
			lookup: e
		});
	}, [t, n]);
}
var Ea = wa;
function Da(e) {
	let t = A().isDevHotReloadEnabled(), n = Sa(), r = /* @__PURE__ */ new Map();
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
function Oa({ _enableI18n: e, _locale: t, children: n, currency: r = "USD", options: i = {}, locales: a = [] }) {
	let o = Li({
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
function ka({ _enableI18n: e, _locale: t, ...n }) {
	return Oa({
		...n,
		_enableI18n: e ?? ya(),
		_locale: t ?? va()
	});
}
function Aa(e) {
	return g(ka, { ...e });
}
ka._gtt = "variable-currency-automatic", Aa._gtt = "variable-currency";
function ja({ _enableI18n: e, _locale: t, children: n, options: r = {}, locales: i = [] }) {
	let a = Li({
		locale: t,
		enableI18n: e,
		localesProp: i
	}), o = A().getGTClass();
	return n == null ? null : o.formatDateTime(n, {
		locales: a,
		...r
	}).replace(/[\u200F\u202B\u202E]/g, "");
}
function Ma({ _enableI18n: e, _locale: t, ...n }) {
	return ja({
		...n,
		_enableI18n: e ?? ya(),
		_locale: t ?? va()
	});
}
function Na(e) {
	return g(Ma, { ...e });
}
Ma._gtt = "variable-datetime-automatic", Na._gtt = "variable-datetime";
function Pa({ _enableI18n: e, _locale: t, children: n, options: r = {}, locales: i = [] }) {
	let a = Li({
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
function Fa({ _enableI18n: e, _locale: t, ...n }) {
	return Pa({
		...n,
		_enableI18n: e ?? ya(),
		_locale: t ?? va()
	});
}
function Ia(e) {
	return g(Fa, { ...e });
}
Fa._gtt = "variable-number-automatic", Ia._gtt = "variable-number";
function La({ _enableI18n: e, _locale: t, date: n, children: r, value: i, unit: a, baseDate: o, locales: s = [], options: c = {} }) {
	let l = Li({
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
function Ra({ _enableI18n: e, _locale: t, ...n }) {
	return La({
		...n,
		_enableI18n: e ?? ya(),
		_locale: t ?? va()
	});
}
function za(e) {
	return g(Ra, { ...e });
}
Ra._gtt = "variable-relative-time-automatic", za._gtt = "variable-relative-time";
function Ba({ children: e }) {
	return e;
}
function Va({ children: e }) {
	return Ba({ children: e });
}
function Ha({ children: e }) {
	return Ba({ children: e });
}
Va._gtt = "variable-variable", Ha._gtt = "variable-variable-automatic";
function Ua(e) {
	let t = Sa(), n = Ca(), r = Ea(), i = h((n) => t.subscribeToTranslate(e, n), () => t.getTranslateSnapshot(e, n), () => t.getTranslateSnapshot(e, n));
	return i == null && A().isDevHotReloadEnabled() && r(e), i;
}
var { renderVariable: Wa, renderDefaultChildren: Ga, renderTranslatedChildren: Ka, renderPreparedT: qa } = la({
	Currency: Aa,
	GtInternalCurrency: ka,
	DateTime: Na,
	GtInternalDateTime: Ma,
	Num: Ia,
	GtInternalNum: Fa,
	RelativeTime: za,
	GtInternalRelativeTime: Ra,
	Var: Va,
	GtInternalVar: Ha
});
function Ja(e, n = 0) {
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
				let e = Object.entries(n).reduce((e, [t, n]) => (an(t) && (e[t] = Ja(n, r)), e), {});
				Object.keys(e).length && (i.branches = e);
			}
			if (e[0] === "branch") {
				let { children: e, branch: t, ...a } = n, o = Object.fromEntries(Object.entries(a).filter(([e]) => !e.startsWith("data-"))), s = Object.entries(o).reduce((e, [t, n]) => (e[t] = Ja(n, r), e), {});
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
function Ya(e) {
	return Qa(e, 0);
}
function Xa(e, t) {
	let { type: n, props: r } = e, i = $a(n);
	if (typeof r != "object" || !r) return e;
	if (i) {
		let { componentType: n, injectionType: o } = i;
		if (n === "variable") return e;
		if (n === "branch") return a(e, { ...Object.entries(r).reduce((e, [n, r]) => (e[n] = n !== "branch" && !n.startsWith("data-") ? Za(r, t) : r, e), {}) });
		if (n === "plural") return a(e, { ...Object.entries(r).reduce((e, [n, r]) => (e[n] = an(n) || n === "children" ? Za(r, t) : r, e), {}) });
		if (n === "derive") return a(e, {
			...r,
			..."children" in r && { children: Qa(r.children, t + 1) }
		});
		if (n === "translate" && o === "automatic" && t > 0) return "children" in r ? Qa(r.children, t) : void 0;
		n === "translate" && o === "automatic" && console.warn(eo);
	}
	return a(e, {
		...r,
		..."children" in r && { children: Qa(r.children, t) }
	});
}
function Za(e, t) {
	return c(e) ? Xa(e, t) : e;
}
function Qa(e, t) {
	return Array.isArray(e) ? n.map(e, (e) => Za(e, t)) : Za(e, t);
}
function $a(e) {
	let t = typeof e == "function" && "_gtt" in e ? e._gtt : void 0;
	if (t == null || typeof t != "string") return;
	let n = t.split("-");
	return {
		componentType: n[0],
		injectionType: n[1] === "automatic" || n[2] === "automatic" ? "automatic" : "manual"
	};
}
var eo = "'@generaltranslation/react-core Warning: A <_T> component was found injected outside of a <Derive> boundary. This may affect translation resolution for this component.";
function to(e) {
	return t.isValidElement(e);
}
var no = (e) => {
	if (!e) return "";
	let { type: t, props: n } = e;
	if (t && typeof t == "function") {
		if ("displayName" in t && typeof t.displayName == "string" && t.displayName) return t.displayName;
		if ("name" in t && typeof t.name == "string" && t.name) return t.name;
	}
	return t && typeof t == "string" ? t : n.href ? "a" : n["data-_gt"]?.id ? `C${n["data-_gt"].id}` : "function";
}, ro = (e, t, n) => {
	let r = Object.entries(un).reduce((e, [n, r]) => {
		let i = t[r];
		return typeof i == "string" && (e[n] = i), e;
	}, {});
	if ((e === "plural" || e === "branch") && n) {
		let t = {};
		Object.entries(n).forEach(([e, n]) => {
			t[e] = oo(n);
		}), r = {
			...r,
			b: t,
			t: e === "plural" ? "p" : "b"
		};
	}
	return Object.keys(r).length ? r : void 0;
}, io = (e) => {
	let { props: t } = e, n = { t: no(e) };
	if (t["data-_gt"]) {
		let e = t["data-_gt"], r = e.transformation;
		if (r === "variable") {
			let n = e.variableType || "variable", r = Yi(t, n), i = cn(n);
			return {
				i: e.id,
				k: r,
				v: i
			};
		}
		n.i = e.id, n.d = ro(r, t, e.branches);
	}
	return t.children && (n.c = oo(t.children)), n;
}, ao = (e) => to(e) ? io(e) : typeof e == "number" ? e.toString() : e;
function oo(e) {
	return Array.isArray(e) ? e.map(ao) : ao(e);
}
function so({ sourceChildren: e, params: t, locale: n }) {
	let r = co(e), i = lo(r), a = uo({
		options: fo(t),
		locale: n
	});
	return ra(i, a), {
		taggedSourceChildren: r,
		sourceJsxChildren: i,
		targetOptions: a
	};
}
function co(e) {
	return Ja(Ya(e));
}
function lo(e) {
	return oo(e);
}
function uo({ options: e, locale: t }) {
	return {
		...e,
		$locale: t
	};
}
function fo(e) {
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
function po({ sourceChildren: e, params: t, _locale: n, _enableI18n: r }) {
	let i = va(), a = ya(), o = ba(), s = n ?? i, c = r ?? a;
	return {
		defaultLocale: o,
		enableI18n: c,
		locale: s,
		shouldTranslate: c && A().requiresTranslation(s),
		...f(() => so({
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
function mo(e) {
	return ho(e);
}
mo._gtt = "translate-client";
function ho({ children: e, _locale: t, _enableI18n: n, _renderPreparedT: r = qa, ...i }) {
	let { defaultLocale: a, locale: o, enableI18n: s, targetOptions: c, taggedSourceChildren: l, sourceJsxChildren: u, shouldTranslate: d } = po({
		sourceChildren: e,
		params: i,
		_locale: t,
		_enableI18n: n
	}), f = Ua({
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
var go = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-scoped-dynamic/gt-react-app/src/components/pages/settings/SettingsFooter.tsx";
function _o() {
	return _("div", {
		className: "flex justify-end gap-3",
		children: [_("button", {
			type: "button",
			className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors",
			children: _(mo, { children: "Cancel" }, void 0, !1, {
				fileName: go,
				lineNumber: 10,
				columnNumber: 9
			}, this)
		}, void 0, !1, {
			fileName: go,
			lineNumber: 6,
			columnNumber: 7
		}, this), _("button", {
			type: "submit",
			className: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
			children: _(mo, { children: "Save Changes" }, void 0, !1, {
				fileName: go,
				lineNumber: 16,
				columnNumber: 9
			}, this)
		}, void 0, !1, {
			fileName: go,
			lineNumber: 12,
			columnNumber: 7
		}, this)]
	}, void 0, !0, {
		fileName: go,
		lineNumber: 5,
		columnNumber: 5
	}, this);
}
var vo = 6e4, yo = (e) => `generaltranslation Formatting Error: Invalid cutoff style: ${e}.`, bo = "DEFAULT_TERMINATOR_KEY", xo = {
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
		[bo]: {
			terminator: "…",
			separator: void 0
		}
	},
	none: { [bo]: {
		terminator: void 0,
		separator: void 0
	} }
}, So = class {
	constructor(e, t = {}) {
		try {
			let t = e ? Array.isArray(e) ? e.map((e) => String(e)) : [String(e)] : ["en"], n = Intl.getCanonicalLocales(t);
			this.locale = n.length ? n[0] : "en";
		} catch {
			this.locale = "en";
		}
		if (!xo[t.style ?? "ellipsis"]) throw Error(yo(t.style ?? "ellipsis"));
		let n, r;
		if (t.maxChars !== void 0) {
			n = t.style ?? "ellipsis";
			let e = new Intl.Locale(this.locale).language;
			r = xo[n][e] || xo[n].DEFAULT_TERMINATOR_KEY;
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
}, Co = {
	Collator: Intl.Collator,
	DateTimeFormat: Intl.DateTimeFormat,
	DisplayNames: Intl.DisplayNames,
	ListFormat: Intl.ListFormat,
	Locale: Intl.Locale,
	NumberFormat: Intl.NumberFormat,
	PluralRules: Intl.PluralRules,
	RelativeTimeFormat: Intl.RelativeTimeFormat,
	Segmenter: Intl.Segmenter,
	CutoffFormat: So
}, j = new class {
	constructor() {
		this.cache = {};
	}
	_generateKey(e, t = {}) {
		return `${e ? Array.isArray(e) ? e.map((e) => String(e)).join(",") : String(e) : "undefined"}:${t ? JSON.stringify(t, Object.keys(t).sort()) : "{}"}`;
	}
	get(e, ...t) {
		let [n = "en", r = {}] = t, i = this._generateKey(n, r), a = this.cache[e]?.[i];
		return a === void 0 && (a = new Co[e](...t), this.cache[e] || (this.cache[e] = {}), this.cache[e][i] = a), a;
	}
}(), wo = "https://cdn.gtx.dev", To = {
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
function Eo(e, t) {
	return To[e]?.includes(t) ?? !1;
}
function Do(e) {
	if (!e.transformFormat) return;
	let t = e.fileName ?? e.fileId ?? "unknown file";
	if (!e.fileFormat) return `fileFormat is required when transformFormat is provided for ${t}`;
	if (!Eo(e.fileFormat, e.transformFormat)) return `Unsupported file format transform: ${e.fileFormat} -> ${e.transformFormat}`;
}
function Oo(e) {
	for (let t of e) {
		let e = Do(t);
		if (e) throw Error(e);
	}
}
function ko(e) {
	if (typeof Buffer < "u") return Buffer.from(e, "utf8").toString("base64");
	let t = new TextEncoder().encode(e), n = "";
	for (let e = 0; e < t.length; e++) n += String.fromCharCode(t[e]);
	return btoa(n);
}
function Ao(e) {
	if (typeof Buffer < "u") return Buffer.from(e, "base64").toString("utf8");
	let t = atob(e), n = new Uint8Array(t.length);
	for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
	return new TextDecoder().decode(n);
}
function jo(e) {
	if (e === void 0) return;
	if (e === null) return "null";
	if (typeof e == "number") return isFinite(e) ? "" + e : "null";
	if (typeof e != "object") return JSON.stringify(e);
	if (Array.isArray(e)) {
		let t = "[";
		for (let n = 0; n < e.length; n++) n && (t += ","), t += jo(e[n]) || "null";
		return t + "]";
	}
	let t = Object.keys(e).sort(), n = "";
	for (let r of t) {
		let t = jo(e[r]);
		t && (n && (n += ","), n += JSON.stringify(r) + ":" + t);
	}
	return "{" + n + "}";
}
function Mo(e) {
	return jo(e) ?? "";
}
function No(e) {
	let t = e;
	if (t && typeof t == "object" && typeof t.k == "string") {
		let e = Object.keys(t);
		if (e.length === 1 || e.length === 2 && (typeof t.i == "number" || typeof t.v == "string") || e.length === 3 && typeof t.v == "string" && typeof t.i == "number") return !0;
	}
	return !1;
}
var Po = ne({
	__addDisposableResource: () => cs,
	__assign: () => M,
	__asyncDelegator: () => es,
	__asyncGenerator: () => $o,
	__asyncValues: () => ts,
	__await: () => Qo,
	__awaiter: () => Wo,
	__classPrivateFieldGet: () => as,
	__classPrivateFieldIn: () => ss,
	__classPrivateFieldSet: () => os,
	__createBinding: () => fs,
	__decorate: () => Lo,
	__disposeResources: () => ls,
	__esDecorate: () => zo,
	__exportStar: () => Ko,
	__extends: () => Fo,
	__generator: () => Go,
	__importDefault: () => is,
	__importStar: () => rs,
	__makeTemplateObject: () => ns,
	__metadata: () => Uo,
	__param: () => Ro,
	__propKey: () => Vo,
	__read: () => Jo,
	__rest: () => Io,
	__rewriteRelativeImportExtension: () => us,
	__runInitializers: () => Bo,
	__setFunctionName: () => Ho,
	__spread: () => Yo,
	__spreadArray: () => Zo,
	__spreadArrays: () => Xo,
	__values: () => qo,
	default: () => gs
});
function Fo(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	ds(e, t);
	function n() {
		this.constructor = e;
	}
	e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
function Io(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function Lo(e, t, n, r) {
	var i = arguments.length, a = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, o;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
	return i > 3 && a && Object.defineProperty(t, n, a), a;
}
function Ro(e, t) {
	return function(n, r) {
		t(n, r, e);
	};
}
function zo(e, t, n, r, i, a) {
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
function Bo(e, t, n) {
	for (var r = arguments.length > 2, i = 0; i < t.length; i++) n = r ? t[i].call(e, n) : t[i].call(e);
	return r ? n : void 0;
}
function Vo(e) {
	return typeof e == "symbol" ? e : `${e}`;
}
function Ho(e, t, n) {
	return typeof t == "symbol" && (t = t.description ? `[${t.description}]` : ""), Object.defineProperty(e, "name", {
		configurable: !0,
		value: n ? `${n} ${t}` : t
	});
}
function Uo(e, t) {
	if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, t);
}
function Wo(e, t, n, r) {
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
function Go(e, t) {
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
function Ko(e, t) {
	for (var n in e) n !== "default" && !Object.prototype.hasOwnProperty.call(t, n) && fs(t, e, n);
}
function qo(e) {
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
function Jo(e, t) {
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
function Yo() {
	for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Jo(arguments[t]));
	return e;
}
function Xo() {
	for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
	for (var r = Array(e), i = 0, t = 0; t < n; t++) for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
	return r;
}
function Zo(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
function Qo(e) {
	return this instanceof Qo ? (this.v = e, this) : new Qo(e);
}
function $o(e, t, n) {
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
		e.value instanceof Qo ? Promise.resolve(e.value.v).then(u, d) : f(a[0][2], e);
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
function es(e) {
	var t = {}, n;
	return r("next"), r("throw", function(e) {
		throw e;
	}), r("return"), t[Symbol.iterator] = function() {
		return this;
	}, t;
	function r(r, i) {
		t[r] = e[r] ? function(t) {
			return (n = !n) ? {
				value: Qo(e[r](t)),
				done: !1
			} : i ? i(t) : t;
		} : i;
	}
}
function ts(e) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var t = e[Symbol.asyncIterator], n;
	return t ? t.call(e) : (e = typeof qo == "function" ? qo(e) : e[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
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
function ns(e, t) {
	return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
function rs(e) {
	if (e && e.__esModule) return e;
	var t = {};
	if (e != null) for (var n = ms(e), r = 0; r < n.length; r++) n[r] !== "default" && fs(t, e, n[r]);
	return ps(t, e), t;
}
function is(e) {
	return e && e.__esModule ? e : { default: e };
}
function as(e, t, n, r) {
	if (n === "a" && !r) throw TypeError("Private accessor was defined without a getter");
	if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
	return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function os(e, t, n, r, i) {
	if (r === "m") throw TypeError("Private method is not writable");
	if (r === "a" && !i) throw TypeError("Private accessor was defined without a setter");
	if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
	return r === "a" ? i.call(e, n) : i ? i.value = n : t.set(e, n), n;
}
function ss(e, t) {
	if (t === null || typeof t != "object" && typeof t != "function") throw TypeError("Cannot use 'in' operator on non-object");
	return typeof e == "function" ? t === e : e.has(t);
}
function cs(e, t, n) {
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
function ls(e) {
	function t(t) {
		e.error = e.hasError ? new hs(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
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
function us(e, t) {
	return typeof e == "string" && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, n, r, i, a) {
		return n ? t ? ".jsx" : ".js" : r && (!i || !a) ? e : r + i + "." + a.toLowerCase() + "js";
	}) : e;
}
var ds, M, fs, ps, ms, hs, gs, _s = w((() => {
	ds = function(e, t) {
		return ds = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
			e.__proto__ = t;
		} || function(e, t) {
			for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
		}, ds(e, t);
	}, M = function() {
		return M = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
			return e;
		}, M.apply(this, arguments);
	}, fs = Object.create ? (function(e, t, n, r) {
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
	}), ps = Object.create ? (function(e, t) {
		Object.defineProperty(e, "default", {
			enumerable: !0,
			value: t
		});
	}) : function(e, t) {
		e.default = t;
	}, ms = function(e) {
		return ms = Object.getOwnPropertyNames || function(e) {
			var t = [];
			for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
			return t;
		}, ms(e);
	}, hs = typeof SuppressedError == "function" ? SuppressedError : function(e, t, n) {
		var r = Error(n);
		return r.name = "SuppressedError", r.error = e, r.suppressed = t, r;
	}, gs = {
		__extends: Fo,
		__assign: M,
		__rest: Io,
		__decorate: Lo,
		__param: Ro,
		__esDecorate: zo,
		__runInitializers: Bo,
		__propKey: Vo,
		__setFunctionName: Ho,
		__metadata: Uo,
		__awaiter: Wo,
		__generator: Go,
		__createBinding: fs,
		__exportStar: Ko,
		__values: qo,
		__read: Jo,
		__spread: Yo,
		__spreadArrays: Xo,
		__spreadArray: Zo,
		__await: Qo,
		__asyncGenerator: $o,
		__asyncDelegator: es,
		__asyncValues: ts,
		__makeTemplateObject: ns,
		__importStar: rs,
		__importDefault: is,
		__classPrivateFieldGet: as,
		__classPrivateFieldSet: os,
		__classPrivateFieldIn: ss,
		__addDisposableResource: cs,
		__disposeResources: ls,
		__rewriteRelativeImportExtension: us
	};
}));
_s();
var N;
(function(e) {
	e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(N ||= {});
var P;
(function(e) {
	e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(P ||= {});
var vs;
(function(e) {
	e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(vs ||= {});
function ys(e) {
	return e.type === P.literal;
}
function bs(e) {
	return e.type === P.argument;
}
function xs(e) {
	return e.type === P.number;
}
function Ss(e) {
	return e.type === P.date;
}
function Cs(e) {
	return e.type === P.time;
}
function ws(e) {
	return e.type === P.select;
}
function Ts(e) {
	return e.type === P.plural;
}
function Es(e) {
	return e.type === P.pound;
}
function Ds(e) {
	return e.type === P.tag;
}
function Os(e) {
	return !!(e && typeof e == "object" && e.type === vs.number);
}
function ks(e) {
	return !!(e && typeof e == "object" && e.type === vs.dateTime);
}
var As = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, js = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Ms(e) {
	var t = {};
	return e.replace(js, function(e) {
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
var Ns = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Ps(e) {
	if (e.length === 0) throw Error("Number skeleton cannot be empty");
	for (var t = e.split(Ns).filter(function(e) {
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
function Fs(e) {
	return e.replace(/^(.*?)-/, "");
}
var Is = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Ls = /^(@+)?(\+|#+)?[rs]?$/g, Rs = /(\*)(0+)|(#+)(0+)|(0+)/g, zs = /^(0+)$/;
function Bs(e) {
	var t = {};
	return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Ls, function(e, n, r) {
		return typeof r == "string" ? r === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof r == "string" ? r.length : 0)) : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length), "";
	}), t;
}
function Vs(e) {
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
function Hs(e) {
	var t;
	if (e[0] === "E" && e[1] === "E" ? (t = { notation: "engineering" }, e = e.slice(2)) : e[0] === "E" && (t = { notation: "scientific" }, e = e.slice(1)), t) {
		var n = e.slice(0, 2);
		if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !zs.test(e)) throw Error("Malformed concise eng/scientific notation");
		t.minimumIntegerDigits = e.length;
	}
	return t;
}
function Us(e) {
	return Vs(e) || {};
}
function Ws(e) {
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
				t.style = "unit", t.unit = Fs(i.options[0]);
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
					return M(M({}, e), Us(t));
				}, {}));
				continue;
			case "engineering":
				t = M(M(M({}, t), { notation: "engineering" }), i.options.reduce(function(e, t) {
					return M(M({}, e), Us(t));
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
				i.options[0].replace(Rs, function(e, n, r, i, a, o) {
					if (n) t.minimumIntegerDigits = r.length;
					else if (i && a) throw Error("We currently do not support maximum integer digits");
					else if (o) throw Error("We currently do not support exact integer digits");
					return "";
				});
				continue;
		}
		if (zs.test(i.stem)) {
			t.minimumIntegerDigits = i.stem.length;
			continue;
		}
		if (Is.test(i.stem)) {
			if (i.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
			i.stem.replace(Is, function(e, n, r, i, a, o) {
				return r === "*" ? t.minimumFractionDigits = n.length : i && i[0] === "#" ? t.maximumFractionDigits = i.length : a && o ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + o.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), "";
			});
			var a = i.options[0];
			a === "w" ? t = M(M({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = M(M({}, t), Bs(a)));
			continue;
		}
		if (Ls.test(i.stem)) {
			t = M(M({}, t), Bs(i.stem));
			continue;
		}
		var o = Vs(i.stem);
		o && (t = M(M({}, t), o));
		var s = Hs(i.stem);
		s && (t = M(M({}, t), s));
	}
	return t;
}
var Gs = {
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
function Ks(e, t) {
	for (var n = "", r = 0; r < e.length; r++) {
		var i = e.charAt(r);
		if (i === "j") {
			for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i;) a++, r++;
			var o = 1 + (a & 1), s = a < 2 ? 1 : 3 + (a >> 1), c = "a", l = qs(t);
			for ((l == "H" || l == "k") && (s = 0); s-- > 0;) n += c;
			for (; o-- > 0;) n = l + n;
		} else n += i === "J" ? "H" : i;
	}
	return n;
}
function qs(e) {
	var t = e.hourCycle;
	if (t === void 0 && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
		case "h24": return "k";
		case "h23": return "H";
		case "h12": return "h";
		case "h11": return "K";
		default: throw Error("Invalid hourCycle");
	}
	var n = e.language, r;
	return n !== "root" && (r = e.maximize().region), (Gs[r || ""] || Gs[n || ""] || Gs[`${n}-001`] || Gs["001"])[0];
}
_s();
var Js = RegExp(`^${As.source}*`), Ys = RegExp(`${As.source}*\$`);
function F(e, t) {
	return {
		start: e,
		end: t
	};
}
var Xs = !!String.prototype.startsWith && "_a".startsWith("a", 1), Zs = !!String.fromCodePoint, Qs = !!Object.fromEntries, $s = !!String.prototype.codePointAt, ec = !!String.prototype.trimStart, tc = !!String.prototype.trimEnd, nc = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
	return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, rc = !0;
try {
	rc = uc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")?.[0] === "a";
} catch {
	rc = !1;
}
var ic = Xs ? function(e, t, n) {
	return e.startsWith(t, n);
} : function(e, t, n) {
	return e.slice(n, n + t.length) === t;
}, ac = Zs ? String.fromCodePoint : function() {
	for (var e = [...arguments], t = "", n = e.length, r = 0, i; n > r;) {
		if (i = e[r++], i > 1114111) throw RangeError(i + " is not a valid code point");
		t += i < 65536 ? String.fromCharCode(i) : String.fromCharCode(((i -= 65536) >> 10) + 55296, i % 1024 + 56320);
	}
	return t;
}, oc = Qs ? Object.fromEntries : function(e) {
	for (var t = {}, n = 0, r = e; n < r.length; n++) {
		var i = r[n], a = i[0];
		t[a] = i[1];
	}
	return t;
}, sc = $s ? function(e, t) {
	return e.codePointAt(t);
} : function(e, t) {
	var n = e.length;
	if (!(t < 0 || t >= n)) {
		var r = e.charCodeAt(t), i;
		return r < 55296 || r > 56319 || t + 1 === n || (i = e.charCodeAt(t + 1)) < 56320 || i > 57343 ? r : (r - 55296 << 10) + (i - 56320) + 65536;
	}
}, cc = ec ? function(e) {
	return e.trimStart();
} : function(e) {
	return e.replace(Js, "");
}, lc = tc ? function(e) {
	return e.trimEnd();
} : function(e) {
	return e.replace(Ys, "");
};
function uc(e, t) {
	return new RegExp(e, t);
}
var dc;
if (rc) {
	var fc = uc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
	dc = function(e, t) {
		return fc.lastIndex = t, fc.exec(e)[1] ?? "";
	};
} else dc = function(e, t) {
	for (var n = [];;) {
		var r = sc(e, t);
		if (r === void 0 || _c(r) || vc(r)) break;
		n.push(r), t += r >= 65536 ? 2 : 1;
	}
	return ac.apply(void 0, n);
};
var pc = function() {
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
			} else if (i === 60 && !this.ignoreTag && mc(this.peek() || 0)) {
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
				if (this.isEOF() || !mc(this.char())) return this.error(N.INVALID_TAG, F(o, this.clonePosition()));
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
		for (this.bump(); !this.isEOF() && gc(this.char());) this.bump();
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
		return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !hc(this.peek() || 0)) ? (this.bump(), "<") : null;
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
		return ac.apply(void 0, t);
	}, e.prototype.tryParseUnquoted = function(e, t) {
		if (this.isEOF()) return null;
		var n = this.char();
		return n === 60 || n === 123 || n === 35 && (t === "plural" || t === "selectordinal") || n === 125 && e > 0 ? null : (this.bump(), ac(n));
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
		var e = this.clonePosition(), t = this.offset(), n = dc(this.message, t), r = t + n.length;
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
					var u = lc(l.val);
					if (u.length === 0) return this.error(N.EXPECT_ARGUMENT_STYLE, F(this.clonePosition(), this.clonePosition()));
					s = {
						style: u,
						styleLocation: F(c, this.clonePosition())
					};
				}
				var d = this.tryParseArgumentClose(r);
				if (d.err) return d;
				var f = F(r, this.clonePosition());
				if (s && ic(s?.style, "::", 0)) {
					var p = cc(s.style.slice(2));
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
					this.locale && (m = Ks(p, this.locale));
					var u = {
						type: vs.dateTime,
						pattern: m,
						location: s.styleLocation,
						parsedOptions: this.shouldParseSkeletons ? Ms(m) : {}
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
						options: oc(v.val),
						location: y
					},
					err: null
				} : {
					val: {
						type: P.plural,
						value: n,
						options: oc(v.val),
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
			n = Ps(e);
		} catch {
			return this.error(N.INVALID_NUMBER_SKELETON, t);
		}
		return {
			val: {
				type: vs.number,
				tokens: n,
				location: t,
				parsedOptions: this.shouldParseSkeletons ? Ws(n) : {}
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
		return i ? (a *= n, nc(a) ? {
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
		var t = sc(this.message, e);
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
		if (ic(this.message, e, this.offset())) {
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
		for (; !this.isEOF() && _c(this.char());) this.bump();
	}, e.prototype.peek = function() {
		if (this.isEOF()) return null;
		var e = this.char(), t = this.offset();
		return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null;
	}, e;
}();
function mc(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function hc(e) {
	return mc(e) || e === 47;
}
function gc(e) {
	return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function _c(e) {
	return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function vc(e) {
	return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
_s();
function yc(e) {
	e.forEach(function(e) {
		if (delete e.location, ws(e) || Ts(e)) for (var t in e.options) delete e.options[t].location, yc(e.options[t].value);
		else xs(e) && Os(e.style) || (Ss(e) || Cs(e)) && ks(e.style) ? delete e.style.location : Ds(e) && yc(e.children);
	});
}
function bc(e, t) {
	t === void 0 && (t = {}), t = M({
		shouldParseSkeletons: !0,
		requiresOtherClause: !0
	}, t);
	var n = new pc(e, t).parse();
	if (n.err) {
		var r = SyntaxError(N[n.err.kind]);
		throw r.location = n.err.location, r.originalMessage = n.err.message, r;
	}
	return t?.captureLocation || yc(n.val), n.val;
}
var xc = T(((e) => {
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
})), Sc = T(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), _s(), ie(Po), xc();
})), Cc = xc();
Sc();
function wc({ icuString: e, shouldVisit: t, visitor: n, options: { recurseIntoVisited: r = !0, ...i } }) {
	let a = bc(e, i);
	return o(a), a;
	function o(e) {
		e.map(s);
	}
	function s(e) {
		let i = !1;
		t(e) && (n(e), i = !0), (!i || r) && (e.type === P.select || e.type === P.plural ? Object.values(e.options).map((e) => e.value).map(o) : e.type === P.tag && o(e.children));
	}
}
var Tc = "_gt_";
RegExp(`^${Tc}\\d+$`);
var Ec = RegExp(`^${Tc}$`);
function Dc(e) {
	return e.type === Cc.TYPE.select && Ec.test(e.value) && !!e.options.other && (e.options.other.value.length === 0 || e.options.other.value.length > 0 && e.options.other.value[0]?.type === Cc.TYPE.literal);
}
function Oc(e) {
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
	wc({
		icuString: e,
		shouldVisit: Dc,
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
function kc(e, t) {
	var n = t && t.cache ? t.cache : zc, r = t && t.serializer ? t.serializer : Lc;
	return (t && t.strategy ? t.strategy : Pc)(e, {
		cache: n,
		serializer: r
	});
}
function Ac(e) {
	return e == null || typeof e == "number" || typeof e == "boolean";
}
function jc(e, t, n, r) {
	var i = Ac(r) ? r : n(r), a = t.get(i);
	return a === void 0 && (a = e.call(this, r), t.set(i, a)), a;
}
function Mc(e, t, n) {
	var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
	return a === void 0 && (a = e.apply(this, r), t.set(i, a)), a;
}
function Nc(e, t, n, r, i) {
	return n.bind(t, e, r, i);
}
function Pc(e, t) {
	var n = e.length === 1 ? jc : Mc;
	return Nc(e, this, n, t.cache.create(), t.serializer);
}
function Fc(e, t) {
	return Nc(e, this, Mc, t.cache.create(), t.serializer);
}
function Ic(e, t) {
	return Nc(e, this, jc, t.cache.create(), t.serializer);
}
var Lc = function() {
	return JSON.stringify(arguments);
}, Rc = function() {
	function e() {
		this.cache = Object.create(null);
	}
	return e.prototype.get = function(e) {
		return this.cache[e];
	}, e.prototype.set = function(e, t) {
		this.cache[e] = t;
	}, e;
}(), zc = { create: function() {
	return new Rc();
} }, Bc = {
	variadic: Fc,
	monadic: Ic
};
_s();
var Vc;
(function(e) {
	e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(Vc ||= {});
var Hc = function(e) {
	Fo(t, e);
	function t(t, n, r) {
		var i = e.call(this, t) || this;
		return i.code = n, i.originalMessage = r, i;
	}
	return t.prototype.toString = function() {
		return `[formatjs Error: ${this.code}] ${this.message}`;
	}, t;
}(Error), Uc = function(e) {
	Fo(t, e);
	function t(t, n, r, i) {
		return e.call(this, `Invalid values for "${t}": "${n}". Options are "${Object.keys(r).join("\", \"")}"`, Vc.INVALID_VALUE, i) || this;
	}
	return t;
}(Hc), Wc = function(e) {
	Fo(t, e);
	function t(t, n, r) {
		return e.call(this, `Value for "${t}" must be of type ${n}`, Vc.INVALID_VALUE, r) || this;
	}
	return t;
}(Hc), Gc = function(e) {
	Fo(t, e);
	function t(t, n) {
		return e.call(this, `The intl string context variable "${t}" was not provided to the string "${n}"`, Vc.MISSING_VALUE, n) || this;
	}
	return t;
}(Hc), I;
(function(e) {
	e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(I ||= {});
function Kc(e) {
	return e.length < 2 ? e : e.reduce(function(e, t) {
		var n = e[e.length - 1];
		return !n || n.type !== I.literal || t.type !== I.literal ? e.push(t) : n.value += t.value, e;
	}, []);
}
function qc(e) {
	return typeof e == "function";
}
function Jc(e, t, n, r, i, a, o) {
	if (e.length === 1 && ys(e[0])) return [{
		type: I.literal,
		value: e[0].value
	}];
	for (var s = [], c = 0, l = e; c < l.length; c++) {
		var u = l[c];
		if (ys(u)) {
			s.push({
				type: I.literal,
				value: u.value
			});
			continue;
		}
		if (Es(u)) {
			typeof a == "number" && s.push({
				type: I.literal,
				value: n.getNumberFormat(t).format(a)
			});
			continue;
		}
		var d = u.value;
		if (!(i && d in i)) throw new Gc(d, o);
		var f = i[d];
		if (bs(u)) {
			(!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), s.push({
				type: typeof f == "string" ? I.literal : I.object,
				value: f
			});
			continue;
		}
		if (Ss(u)) {
			var p = typeof u.style == "string" ? r.date[u.style] : ks(u.style) ? u.style.parsedOptions : void 0;
			s.push({
				type: I.literal,
				value: n.getDateTimeFormat(t, p).format(f)
			});
			continue;
		}
		if (Cs(u)) {
			var p = typeof u.style == "string" ? r.time[u.style] : ks(u.style) ? u.style.parsedOptions : r.time.medium;
			s.push({
				type: I.literal,
				value: n.getDateTimeFormat(t, p).format(f)
			});
			continue;
		}
		if (xs(u)) {
			var p = typeof u.style == "string" ? r.number[u.style] : Os(u.style) ? u.style.parsedOptions : void 0;
			p && p.scale && (f *= p.scale || 1), s.push({
				type: I.literal,
				value: n.getNumberFormat(t, p).format(f)
			});
			continue;
		}
		if (Ds(u)) {
			var m = u.children, h = u.value, g = i[h];
			if (!qc(g)) throw new Wc(h, "function", o);
			var _ = g(Jc(m, t, n, r, i, a).map(function(e) {
				return e.value;
			}));
			Array.isArray(_) || (_ = [_]), s.push.apply(s, _.map(function(e) {
				return {
					type: typeof e == "string" ? I.literal : I.object,
					value: e
				};
			}));
		}
		if (ws(u)) {
			var v = u.options[f] || u.options.other;
			if (!v) throw new Uc(u.value, f, Object.keys(u.options), o);
			s.push.apply(s, Jc(v.value, t, n, r, i));
			continue;
		}
		if (Ts(u)) {
			var v = u.options[`=${f}`];
			if (!v) {
				if (!Intl.PluralRules) throw new Hc("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n", Vc.MISSING_INTL_API, o);
				var y = n.getPluralRules(t, { type: u.pluralType }).select(f - (u.offset || 0));
				v = u.options[y] || u.options.other;
			}
			if (!v) throw new Uc(u.value, f, Object.keys(u.options), o);
			s.push.apply(s, Jc(v.value, t, n, r, i, f - (u.offset || 0)));
			continue;
		}
	}
	return Kc(s);
}
_s();
function Yc(e, t) {
	return t ? M(M(M({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
		return n[r] = M(M({}, e[r]), t[r] || {}), n;
	}, {})) : e;
}
function Xc(e, t) {
	return t ? Object.keys(e).reduce(function(n, r) {
		return n[r] = Yc(e[r], t[r]), n;
	}, M({}, e)) : e;
}
function Zc(e) {
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
function Qc(e) {
	return e === void 0 && (e = {
		number: {},
		dateTime: {},
		pluralRules: {}
	}), {
		getNumberFormat: kc(function() {
			for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return new ((e = Intl.NumberFormat).bind.apply(e, Zo([void 0], t, !1)))();
		}, {
			cache: Zc(e.number),
			strategy: Bc.variadic
		}),
		getDateTimeFormat: kc(function() {
			for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return new ((e = Intl.DateTimeFormat).bind.apply(e, Zo([void 0], t, !1)))();
		}, {
			cache: Zc(e.dateTime),
			strategy: Bc.variadic
		}),
		getPluralRules: kc(function() {
			for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
			return new ((e = Intl.PluralRules).bind.apply(e, Zo([void 0], t, !1)))();
		}, {
			cache: Zc(e.pluralRules),
			strategy: Bc.variadic
		})
	};
}
var $c = function() {
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
			return Jc(a.ast, a.locales, a.formatters, a.formats, e, void 0, a.message);
		}, this.resolvedOptions = function() {
			return { locale: a.resolvedLocale?.toString() || Intl.NumberFormat.supportedLocalesOf(a.locales)[0] };
		}, this.getAst = function() {
			return a.ast;
		}, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
			if (this.message = t, !e.__parse) throw TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
			var o = i || {};
			o.formatters;
			var s = Io(o, ["formatters"]);
			this.ast = e.__parse(t, M(M({}, s), { locale: this.resolvedLocale }));
		} else this.ast = t;
		if (!Array.isArray(this.ast)) throw TypeError("A message must be provided as a String or AST.");
		this.formats = Xc(e.formats, r), this.formatters = i && i.formatters || Qc(this.formatterCache);
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
	}, e.__parse = bc, e.formats = {
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
}(), el = [
	"Cham",
	"Jamo",
	"Kawi",
	"Lisu",
	"Toto",
	"Thai"
], tl = (e) => e >= "qaa" && e <= "qtz", L = (e, t) => {
	t?.[e] && typeof t[e] == "object" && "code" in t[e] && t[e].code && (e = t[e].code);
	try {
		let { language: t, region: n, script: r } = j.get("Locale", e);
		return !(e.split("-").length !== (() => {
			let e = 1;
			return n && (e += 1), r && (e += 1), e;
		})() || j.get("DisplayNames", ["en"], { type: "language" }).of(t) === t && !tl(t) || n && j.get("DisplayNames", ["en"], { type: "region" }).of(n) === n || r && j.get("DisplayNames", ["en"], { type: "script" }).of(r) === r && !el.includes(r));
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
function nl(e, t) {
	let { language: n, region: r, script: i } = j.get("Locale", e), { language: a, region: o, script: s } = j.get("Locale", t);
	return !(n !== a || r && o && r !== o || i && s && i !== s);
}
function rl(...e) {
	try {
		let t = e.flat().map(R);
		for (let e = 0; e < t.length; e++) for (let n = e + 1; n < t.length; n++) if (!nl(t[e], t[n])) return !1;
		return !0;
	} catch (e) {
		return console.error(e), !1;
	}
}
function il(...e) {
	try {
		let t = e.flat().map((e) => j.get("Locale", e).language);
		return t.every((e) => e === t[0]);
	} catch (e) {
		return console.error(e), !1;
	}
}
function al(e, t, n, r) {
	return !(!L(e, r) || !L(t, r) || n && n.some((e) => !L(e, r)) || rl(e, t) || n && !n.some((e) => il(t, e)));
}
var ol = (e, t, n) => {
	if (e?.[t]) return typeof e[t] == "string" ? n === "name" ? e[t] : void 0 : e[t][n];
}, sl = (e, t) => !!(t?.[e] && typeof t[e] == "object" && "code" in t[e] && t[e].code && L(t[e].code));
function cl(e, t) {
	let n = e;
	t && sl(e, t) && (e = t[e].code);
	try {
		let r = R(e), i = j.get("Locale", r), { language: a, region: o } = i;
		if (t) for (let i of [
			n,
			e,
			r,
			a
		]) {
			let e = ol(t, i, "emoji");
			if (e) return e;
		}
		let s = o && _l(o);
		if (s) return s;
		let c = i.maximize();
		return fl[c.language] || gl(c.region || "");
	} catch {
		return dl;
	}
}
var ll = "🌍", ul = "🌏", dl = ll, fl = {
	ca: ll,
	eu: ll,
	ku: ll,
	bo: ul,
	ug: ul,
	gd: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
	cy: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
	gv: "🇮🇲",
	grc: "🏺"
}, pl = {
	EU: "🇪🇺",
	419: "🌎"
}, ml = /* @__PURE__ */ new Set(/* @__PURE__ */ "AF.AX.AL.DZ.AS.AD.AO.AI.AQ.AG.AR.AM.AW.AU.AT.AZ.BS.BH.BD.BB.BY.BE.BZ.BJ.BM.BT.BO.BQ.BA.BW.BV.BR.IO.BN.BG.BF.BI.CV.KH.CM.CA.KY.CF.TD.CL.CN.CX.CC.CO.KM.CD.CG.CK.CR.CI.HR.CU.CW.CY.CZ.DK.DJ.DM.DO.EC.EG.SV.GQ.ER.EE.SZ.ET.FK.FO.FJ.FI.FR.GF.PF.TF.GA.GM.GE.DE.GH.GI.GR.GL.GD.GP.GU.GT.GG.GN.GW.GY.HT.HM.VA.HN.HK.HU.IS.IN.ID.IR.IQ.IE.IM.IL.IT.JM.JP.JE.JO.KZ.KE.KI.KP.KR.KW.KG.LA.LV.LB.LS.LR.LY.LI.LT.LU.MO.MG.MW.MY.MV.ML.MT.MH.MQ.MR.MU.YT.MX.FM.MD.MC.MN.ME.MS.MA.MZ.MM.NA.NR.NP.NL.NC.NZ.NI.NE.NG.NU.NF.MK.MP.NO.OM.PK.PW.PS.PA.PG.PY.PE.PH.PN.PL.PT.PR.QA.RE.RO.RU.RW.BL.SH.KN.LC.MF.PM.VC.WS.SM.ST.SA.SN.RS.SC.SL.SG.SX.SK.SI.SB.SO.ZA.GS.SS.ES.LK.SD.SR.SJ.SE.CH.SY.TW.TJ.TZ.TH.TL.TG.TK.TO.TT.TN.TR.TM.TC.TV.UG.UA.AE.GB.US.UM.UY.UZ.VU.VE.VN.VG.VI.WF.EH.YE.ZM.ZW".split(".")), hl = 127397;
function gl(e) {
	return _l(e) || "🌍";
}
function _l(e) {
	let t = e.toUpperCase(), n = pl[t];
	if (n) return n;
	if (ml.has(t)) return String.fromCodePoint(t.charCodeAt(0) + hl, t.charCodeAt(1) + hl);
}
function vl(e, t) {
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
function yl(e, t = "en", n) {
	let r = e;
	n && sl(e, n) && (e = n[e].code), t ||= "en";
	try {
		let i = R(e), a = j.get("Locale", e), o = a.language, s = vl([
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
		], g = j.get("DisplayNames", m, { type: "language" }), _ = j.get("DisplayNames", h, { type: "language" }), v = s?.name, y = s?.nativeName || s?.name, b = v || g.of(e) || e, x = y || _.of(e) || e, S = s?.maximizedName || v || g.of(u) || e, C = s?.nativeMaximizedName || y || _.of(u) || e, ee = s?.minimizedName || v || g.of(p) || e, te = s?.nativeMinimizedName || y || _.of(p) || e, w = s?.languageName || v || g.of(o) || e, T = s?.nativeLanguageName || y || _.of(o) || e, ne = s?.nameWithRegionCode || c ? `${w} (${c})` : b, re = s?.nativeNameWithRegionCode || (c ? `${T} (${c})` : x) || ne, ie = j.get("DisplayNames", m, { type: "region" }), ae = j.get("DisplayNames", h, { type: "region" }), oe = s?.regionName || (d ? ie.of(d) : "") || "", se = s?.nativeRegionName || (d ? ae.of(d) : "") || "", E = j.get("DisplayNames", m, { type: "script" }), ce = j.get("DisplayNames", h, { type: "script" });
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
			scriptName: s?.scriptName || (f ? E.of(f) : "") || "",
			nativeScriptName: s?.nativeScriptName || (f ? ce.of(f) : "") || "",
			emoji: s?.emoji || cl(i, n)
		};
	} catch {
		let t = L(e) ? R(e) : e, r = t?.split("-"), i = r?.[0] || t || "", a = r.length > 2 ? r?.[2] : r?.[1] || "", o = r?.[3] || "", s = vl([t, i], n);
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
function bl(e, t, n) {
	typeof e == "string" && (e = [e]), e = e.filter((e) => L(e, n)).map(R), t = t.filter((e) => L(e, n)).map(R);
	for (let n of e) {
		let e = t.filter((e) => il(n, e)), r = ({ locale: t, languageCode: n, minimizedCode: r, regionCode: i, scriptCode: a }) => {
			let o = [
				t,
				`${n}-${i}`,
				`${n}-${a}`,
				r
			];
			for (let t of o) if (e.includes(t)) return t;
			return null;
		}, { languageCode: i, ...a } = yl(n), o = r({
			locale: n,
			languageCode: i,
			...a
		}) || r({
			locale: i,
			...yl(i)
		});
		if (o) return o;
	}
}
var xl = {
	debug: 0,
	info: 1,
	warn: 2,
	error: 3,
	off: 4
}, Sl = {
	debug: "\x1B[36m",
	info: "\x1B[32m",
	warn: "\x1B[33m",
	error: "\x1B[31m",
	off: ""
}, Cl = "\x1B[0m";
function wl() {
	if (typeof process < "u" && process.env?._GT_LOG_LEVEL) {
		let e = process.env._GT_LOG_LEVEL.toLowerCase();
		if (e in xl) return e;
	}
	return "warn";
}
var Tl = class {
	constructor(e) {
		this.config = e;
	}
	handle(e) {
		let t = [];
		this.config.includeTimestamp && t.push(`[${e.timestamp.toISOString()}]`);
		let n = Sl[e.level], r = `[${e.level.toUpperCase()}]`;
		t.push(`${n}${r}${Cl}`), this.config.prefix && t.push(`[${this.config.prefix}]`), this.config.includeContext && e.context && t.push(`[${e.context}]`), t.push(e.message), e.metadata && Object.keys(e.metadata).length > 0 && t.push(`\n  Metadata: ${JSON.stringify(e.metadata, null, 2)}`);
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
}, El = class {
	constructor(e = {}) {
		this.config = {
			level: wl(),
			includeTimestamp: !0,
			includeContext: !0,
			enableConsole: !0,
			handlers: [],
			...e
		}, this.handlers = [...this.config.handlers || []], this.config.enableConsole && this.handlers.push(new Tl(this.config));
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
		return xl[e] >= xl[this.config.level];
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
		return new Dl(this, e);
	}
	getConfig() {
		return { ...this.config };
	}
}, Dl = class e {
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
}, Ol = new El({
	level: wl(),
	includeTimestamp: !0,
	includeContext: !0,
	prefix: "GT"
}), kl = Ol.child("fetch");
Ol.child("validation"), Ol.child("formatting"), Ol.child("locale");
var Al = Ol.child("GT instance");
function jl({ value: e, locales: t = "en", options: n = {} }) {
	return j.get("CutoffFormat", t, n).format(e);
}
function Ml(e, t = "en", n = {}) {
	return new $c(e, t).format(n)?.toString() ?? "";
}
function Nl(e) {
	return e;
}
function Pl({ value: e, locales: t = ["en"], options: n = {} }) {
	return j.get("NumberFormat", t, {
		numberingSystem: "latn",
		...n
	}).format(e);
}
function Fl({ value: e, locales: t = ["en"], options: n = {} }) {
	return j.get("DateTimeFormat", t, {
		calendar: "gregory",
		numberingSystem: "latn",
		...n
	}).format(e);
}
function Il({ value: e, locales: t = ["en"], currency: n = "USD", options: r = {} }) {
	return j.get("NumberFormat", t, {
		style: "currency",
		currency: n,
		numberingSystem: "latn",
		...r
	}).format(e);
}
function Ll({ value: e, locales: t = ["en"], options: n = {} }) {
	return j.get("ListFormat", t, {
		type: "conjunction",
		style: "long",
		...n
	}).format(e);
}
function Rl({ value: e, locales: t = ["en"], options: n = {} }) {
	let r = j.get("ListFormat", t, {
		type: "conjunction",
		style: "long",
		...n
	}).formatToParts(e.map(() => "1")), i = 0;
	return r.map((t) => t.type === "element" ? e[i++] : t.value);
}
function zl(e, t) {
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
function Bl({ date: e, baseDate: t, locales: n = ["en"], options: r = {} }) {
	let { value: i, unit: a } = zl(e, t);
	return Vl({
		value: i,
		unit: a,
		locales: n,
		options: r
	});
}
function Vl({ value: e, unit: t, locales: n = ["en"], options: r = {} }) {
	return j.get("RelativeTimeFormat", n, {
		style: "long",
		numeric: "auto",
		...r
	}).format(e, t);
}
function Hl(e, t = "en", n) {
	let r = e;
	n && sl(e, n) && (e = n[e].code), t ||= "en";
	try {
		let i = R(e);
		if (n) for (let t of [
			r,
			e,
			i,
			j.get("Locale", i).language
		]) {
			let e = ol(n, t, "name");
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
function Ul(e) {
	try {
		let t = Kl(j.get("Locale", e));
		if (t) return t;
	} catch {}
	let { scriptCode: t, languageCode: n } = yl(e);
	return t ? ql(t) ? "rtl" : "ltr" : n && Jl(n) ? "rtl" : "ltr";
}
var Wl = /* @__PURE__ */ new Set([
	"arab",
	"adlm",
	"hebr",
	"nkoo",
	"rohg",
	"samr",
	"syrc",
	"thaa",
	"yezi"
]), Gl = /* @__PURE__ */ new Set([
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
function Kl(e) {
	if ("textInfo" in e && typeof e.textInfo == "object" && e.textInfo !== null && "direction" in e.textInfo && (e.textInfo?.direction === "rtl" || e.textInfo?.direction === "ltr")) return e.textInfo?.direction;
}
function ql(e) {
	return e ? Wl.has(e.toLowerCase()) : !1;
}
function Jl(e) {
	return e ? Gl.has(e.toLowerCase()) : !1;
}
function Yl(e, t) {
	try {
		let { language: n, region: r, script: i } = j.get("Locale", R(e)), { language: a, region: o, script: s } = j.get("Locale", R(t));
		return !(n !== a || r && r !== o || i && i !== s);
	} catch (e) {
		return console.error(e), !1;
	}
}
function Xl(e, t) {
	let n;
	return t && (n = Object.fromEntries(Object.entries(t).filter(([, e]) => e && typeof e == "object" && "code" in e).map(([e, t]) => [t.code, e]))), n?.[e] || e;
}
function Zl(e, t) {
	return t && sl(e, t) ? t[e].code : e;
}
var Ql = class {
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
		return Pl({
			value: e,
			locales: this.getFormattingLocales(t, r),
			options: i
		});
	}
	formatDateTime(e, t, n = {}) {
		let { locales: r, ...i } = n;
		return Fl({
			value: e,
			locales: this.getFormattingLocales(t, r),
			options: i
		});
	}
	formatCurrency(e, t, n, r = {}) {
		let { locales: i, ...a } = r;
		return Il({
			value: e,
			currency: t,
			locales: this.getFormattingLocales(n, i),
			options: a
		});
	}
	formatRelativeTime(e, t, n, r = {}) {
		let { locales: i, ...a } = r;
		return Vl({
			value: e,
			unit: t,
			locales: this.getFormattingLocales(n, i),
			options: a
		});
	}
	formatRelativeTimeFromDate(e, t, n = {}) {
		let { locales: r, baseDate: i, ...a } = n;
		return Bl({
			date: e,
			baseDate: i ?? /* @__PURE__ */ new Date(),
			locales: this.getFormattingLocales(t, r),
			options: a
		});
	}
	formatCutoff(e, t, n = {}) {
		let { locales: r, ...i } = n;
		return jl({
			value: e,
			locales: this.getFormattingLocales(t, r),
			options: i
		});
	}
	formatMessage(e, t, n = {}) {
		let { locales: r, variables: i, dataFormat: a } = n;
		return a === "STRING" ? Nl(e) : Ml(e, this.getFormattingLocales(t, r), i);
	}
	formatList(e, t, n = {}) {
		let { locales: r, ...i } = n;
		return Ll({
			value: e,
			locales: this.getFormattingLocales(t, r),
			options: i
		});
	}
	formatListToParts(e, t, n = {}) {
		let { locales: r, ...i } = n;
		return Rl({
			value: e,
			locales: this.getFormattingLocales(t, r),
			options: i
		});
	}
	getLocaleName(e) {
		return Hl(e, this.defaultLocale, this.customMapping);
	}
	getLocaleEmoji(e) {
		return cl(e, this.customMapping);
	}
	getLocaleProperties(e) {
		return yl(e, this.defaultLocale, this.customMapping);
	}
	requiresTranslation(e, t = this.defaultLocale, n = this.translationLocales) {
		return al(this.resolveCanonicalLocale(t), this.resolveCanonicalLocale(e), n ? this.resolveCanonicalLocaleList(n) : void 0, this.customMapping);
	}
	determineLocale(e, t = this.locales) {
		let n = t.map((e) => ({
			locale: e,
			canonicalLocale: this.resolveCanonicalLocale(e)
		})), r = bl(Array.isArray(e) ? this.resolveCanonicalLocaleList(e) : this.resolveCanonicalLocale(e), n.map(({ canonicalLocale: e }) => e), this.customMapping);
		if (r) return n.find(({ canonicalLocale: e }) => e === r)?.locale || this.resolveAliasLocale(r);
	}
	getLocaleDirection(e) {
		return Ul(this.resolveCanonicalLocale(e));
	}
	isValidLocale(e) {
		return L(e, this.customMapping);
	}
	resolveCanonicalLocale(e) {
		return Zl(e, this.customMapping);
	}
	resolveAliasLocale(e) {
		return Xl(e, this.customMapping);
	}
	standardizeLocale(e) {
		return R(e);
	}
	isSameDialect(...e) {
		return rl(...this.resolveCanonicalLocaleArgs(e));
	}
	isSameLanguage(...e) {
		return il(...this.resolveCanonicalLocaleArgs(e));
	}
	isSupersetLocale(e, t) {
		return Yl(this.resolveCanonicalLocale(e), this.resolveCanonicalLocale(t));
	}
};
function $l(e, t) {
	return L(e, t);
}
function eu(e, t) {
	return Zl(e, t);
}
function tu(e) {
	return R(e);
}
var nu = {
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
}, ru = class extends Error {
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
function iu(e) {
	return yr(jr(br(e))).slice(0, 16);
}
function au({ source: e, context: t, id: n, maxChars: r, dataFormat: i }, a = iu) {
	let o;
	return o = i === "JSX" ? su(e) : e, a(Mo({
		source: o,
		...n && { id: n },
		...t && { context: t },
		...r != null && { maxChars: Math.abs(r) },
		...i && { dataFormat: i }
	}));
}
var ou = (e) => {
	if (e && typeof e == "object") {
		let t = {};
		if ("c" in e && e.c && (t.c = su(e.c)), "d" in e) {
			let n = e?.d;
			n?.b && (t.b = Object.fromEntries(Object.entries(n.b).map(([e, t]) => [e, su(t)]))), n?.t && (t.t = n.t);
		}
		return No(e) ? {
			k: e.k,
			...e.v && { v: e.v }
		} : t;
	}
	return e;
};
function su(e) {
	return Array.isArray(e) ? e.map(ou) : ou(e);
}
var cu = "GT Error:", lu = (e) => `${cu} Translation request timed out after ${e}ms.`, uu = (e) => `${cu} Translation request failed. Error: ${e}`, du = (e, t, n) => `${cu} API returned error status. Status: ${e}, Status Text: ${t}, Error: ${n}`, fu = (e) => `${cu} Cannot call \`${e}\` without a specified locale. Either pass a locale to the \`${e}\` function or specify a targetLocale in the GT constructor.`, pu = (e) => `${cu} Cannot call \`${e}\` without a specified locale. Either pass a locale to the \`${e}\` function or specify a sourceLocale in the GT constructor.`, mu = (e) => `${cu} Cannot call \`${e}\` without a specified project ID. Either pass a project ID to the \`${e}\` function or specify a projectId in the GT constructor.`, hu = (e) => `${cu} Cannot call \`${e}\` without a specified API key. Either pass an API key to the \`${e}\` function or specify an apiKey in the GT constructor.`, gu = (e) => `${cu} Invalid locale: ${e}.`, _u = (e) => `${cu} Invalid locales: ${e.join(", ")}.`;
async function vu(e, t, n) {
	let r = new AbortController(), i = r.signal;
	n ||= vo;
	let a = n ? setTimeout(() => r.abort(), n) : null;
	try {
		return await fetch(e, {
			...t,
			signal: i
		});
	} catch (e) {
		throw e instanceof Error && e.name === "AbortError" ? lu(n) : e;
	} finally {
		a && clearTimeout(a);
	}
}
async function yu(e) {
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
		throw new ru(du(e.status, e.statusText, t), e.status, t);
	}
}
function bu(e, t) {
	if (e instanceof Error && e.name === "AbortError") {
		let e = lu(t);
		throw kl.error(e), Error(e);
	}
	let n = uu(e instanceof Error ? e.message : String(e));
	throw kl.error(n), e;
}
var xu = "2026-03-06.v1";
function Su(e, t = !1) {
	let n = {
		...!t && { "Content-Type": "application/json" },
		"x-gt-project-id": e.projectId
	};
	return e.apiKey && (e.apiKey.startsWith("gtx-internal-") ? n["x-gt-internal-api-key"] = e.apiKey : n["x-gt-api-key"] = e.apiKey), n["gt-api-version"] = xu, n;
}
var Cu = 3, wu = 500;
function Tu(e) {
	return new Promise((t) => setTimeout(t, e));
}
function Eu(e, t) {
	switch (e) {
		case "linear": return wu * (t + 1);
		case "exponential": return wu * 2 ** t;
		default: return 0;
	}
}
async function z(e, t, n) {
	let r = n?.timeout ?? 6e4, i = `${e.baseUrl || "https://api2.gtx.dev"}${t}`, a = n?.method ?? "POST", o = n?.retryPolicy ?? "exponential", s = o === "none" ? 0 : Cu, c = {
		method: a,
		headers: Su(e)
	};
	n?.body !== void 0 && (c.body = JSON.stringify(n.body));
	for (let e = 0; e <= s; e++) {
		let t;
		try {
			t = await vu(i, c, r);
		} catch (t) {
			if (e < s) {
				await Tu(Eu(o, e));
				continue;
			}
			bu(t, r);
		}
		if (t.status >= 500 && e < s) {
			await Tu(Eu(o, e));
			continue;
		}
		return await yu(t), await t.json();
	}
	throw Error("Max retries exceeded");
}
async function Du(e, t, n, r) {
	let i = Array.isArray(e), a = i ? [] : void 0, o = {}, s = i ? e.map((e) => [void 0, e]) : Object.entries(e);
	for (let [e, t] of s) {
		let { source: n, metadata: r } = typeof t == "string" ? { source: t } : t, i = e ?? r?.hash ?? au({
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
async function Ou(e, t, n) {
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
function ku(e, t) {
	let n = [];
	for (let r = 0; r < e.length; r += t) n.push(e.slice(r, r + t));
	return n;
}
async function Au(e, t, n = {}) {
	let { batchSize: r = 100, parallel: i = !0 } = n;
	if (e.length === 0) return {
		data: [],
		count: 0,
		batchCount: 0
	};
	let a = ku(e, r), o = [];
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
async function ju(e, t, n) {
	Oo(e);
	let r = await Au(e, async (e) => {
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
async function Mu(e, t) {
	return await z(t, "/v2/project/tags/create", { body: {
		tagId: e.tagId,
		files: e.files,
		...e.message && { message: e.message }
	} });
}
async function Nu(e, t, n) {
	return Au(e, async (e) => (await z(n, "/v2/project/files/download", {
		body: e,
		timeout: t.timeout
	})).files.map((e) => ({
		...e,
		data: Ao(e.data)
	})), { batchSize: 100 });
}
async function Pu(e, t, n = {}) {
	return await Au(e.diffs, async (e) => (await z(t, "/v2/project/files/diffs", {
		body: { diffs: e },
		timeout: n.timeout
	}), [{ success: !0 }]), { batchSize: 100 }), { success: !0 };
}
function Fu(e, t = "en", n) {
	t ||= "en";
	try {
		return {
			code: e,
			name: j.get("DisplayNames", [t, "en"], { type: "region" }).of(e) || e,
			emoji: gl(e),
			...n?.[e]
		};
	} catch {
		return {
			code: e,
			name: e,
			emoji: dl,
			...n?.[e]
		};
	}
}
async function Iu(e, t, n) {
	return Au(e, async (e) => (await z(n, "/v2/project/files/upload-files", {
		body: {
			data: e.map(({ source: e }) => ({ source: {
				content: ko(e.content),
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
async function Lu(e, t, n) {
	return Oo(e.map(({ source: e }) => e)), Au(e, async (e) => (await z(n, "/v2/project/files/upload-translations", {
		body: {
			data: e.map(({ source: e, translations: t }) => ({
				source: {
					content: ko(e.content),
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
					content: ko(e.content),
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
async function Ru(e, t, n) {
	let r = e.branchId, i = e.versionId, a = e.fileId, o = new URLSearchParams();
	return r && o.set("branchId", r), i && o.set("versionId", i), z(n, `/v2/project/translations/files/status/${encodeURIComponent(a)}?${o.toString()}`, {
		method: "GET",
		timeout: t.timeout
	});
}
async function zu(e, t, n) {
	let { baseUrl: r } = n, i = t.timeout ? t.timeout : vo, a = `${r || "https://api2.gtx.dev"}/v2/project/info/${encodeURIComponent(e)}`, o;
	try {
		o = await vu(a, {
			method: "GET",
			headers: Su(n)
		}, i);
	} catch (e) {
		bu(e, i);
	}
	return await yu(o), await o.json();
}
async function Bu(e, t, n) {
	return z(t, "/v2/project/jobs/info", {
		body: { jobIds: e },
		timeout: n
	});
}
async function Vu(e, t, n) {
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
		let e = await Bu(Array.from(c), n);
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
async function Hu(e, t = {}, n) {
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
async function Uu(e, t) {
	return z(t, "/v2/project/branches/info", { body: e });
}
async function Wu(e, t) {
	return z(t, "/v2/project/branches/create", { body: e });
}
async function Gu(e, t, n) {
	if (e.length === 0) return {
		results: [],
		summary: {
			total: 0,
			succeeded: 0,
			failed: 0
		}
	};
	let r = await Au(e, async (e) => (await z(n, "/v2/project/files/moves", {
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
async function Ku(e, t, n = {}, r) {
	let i = (t) => z(r, "/v2/project/files/orphaned", {
		body: {
			branchId: e,
			fileIds: t
		},
		timeout: n.timeout
	});
	if (t.length === 0) return i([]);
	let a = ku(t, 100), o = await Promise.all(a.map((e) => i(e)));
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
async function qu(e, t) {
	return await z(t, "/v2/project/files/publish", { body: { files: e } });
}
var Ju = class {
	get localeConfig() {
		return this._localeConfig;
	}
	constructor(e = {}) {
		typeof process < "u" && (this.apiKey ||= process.env?.GT_API_KEY, this.devApiKey ||= process.env?.GT_DEV_API_KEY, this.projectId ||= process.env?.GT_PROJECT_ID), this.setConfig(e);
	}
	setConfig({ apiKey: e, devApiKey: t, sourceLocale: n, targetLocale: r, locales: i, projectId: a, customMapping: o, baseUrl: s }) {
		if (e && (this.apiKey = e), t && (this.devApiKey = t), a && (this.projectId = a), n && (this.sourceLocale = R(n), !L(this.sourceLocale, o))) throw Error(gu(this.sourceLocale));
		if (r && (this.targetLocale = R(r), !L(this.targetLocale, o))) throw Error(gu(this.targetLocale));
		if (i) {
			let e = [], t = [];
			if (i.forEach((n) => {
				let r = R(n);
				L(r) ? e.push(r) : t.push(n);
			}), t.length > 0) throw Error(_u(t));
			this.locales = e;
		}
		s && (this.baseUrl = s), o && (this.customMapping = o, this.reverseCustomMapping = Object.fromEntries(Object.entries(o).filter(([, e]) => e && typeof e == "object" && "code" in e).map(([e, t]) => [t.code, e]))), this._localeConfig = new Ql({
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
			let n = hu(e);
			t.push(n);
		}
		if (!this.projectId) {
			let n = mu(e);
			t.push(n);
		}
		if (t.length) throw Error(t.join("\n"));
	}
	async queryBranchData(e) {
		return this._validateAuth("queryBranchData"), await Uu(e, this._getTranslationConfig());
	}
	async createBranch(e) {
		return this._validateAuth("createBranch"), await Wu(e, this._getTranslationConfig());
	}
	async processFileMoves(e, t = {}) {
		return this._validateAuth("processFileMoves"), await Gu(e, t, this._getTranslationConfig());
	}
	async getOrphanedFiles(e, t, n = {}) {
		return this._validateAuth("getOrphanedFiles"), await Ku(e, t, n, this._getTranslationConfig());
	}
	async setupProject(e, t) {
		return this._validateAuth("setupProject"), t = {
			...t,
			locales: t?.locales?.map((e) => this.resolveCanonicalLocale(e))
		}, await Ou(e, this._getTranslationConfig(), t);
	}
	async checkJobStatus(e, t) {
		return this._validateAuth("checkJobStatus"), await Bu(e, this._getTranslationConfig(), t);
	}
	async awaitJobs(e, t) {
		return this._validateAuth("awaitJobs"), await Vu(e, t, this._getTranslationConfig());
	}
	async enqueueFiles(e, t) {
		this._validateAuth("enqueueFiles");
		let n = {
			...t,
			sourceLocale: t.sourceLocale ?? this.sourceLocale,
			targetLocales: t.targetLocales ?? [this.targetLocale]
		};
		if (!n.sourceLocale) {
			let e = pu("enqueueFiles");
			throw Al.error(e), Error(e);
		}
		if (!n.targetLocales || n.targetLocales.length === 0) {
			let e = fu("enqueueFiles");
			throw Al.error(e), Error(e);
		}
		return n = {
			...n,
			targetLocales: n.targetLocales.map((e) => this.resolveCanonicalLocale(e))
		}, await ju(e, n, this._getTranslationConfig());
	}
	async createTag(e) {
		return this._validateAuth("createTag"), await Mu(e, this._getTranslationConfig());
	}
	async publishFiles(e) {
		return this._validateAuth("publishFiles"), await qu(e, this._getTranslationConfig());
	}
	async submitUserEditDiffs(e) {
		this._validateAuth("submitUserEditDiffs"), await Pu({
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
		let n = await Hu(e, t, this._getTranslationConfig());
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
		let n = await Ru(e, t, this._getTranslationConfig());
		return n.translations = n.translations.map((e) => ({
			...e,
			...e.locale && { locale: this.resolveAliasLocale(e.locale) }
		})), n.sourceFile.locales = n.sourceFile.locales.map((e) => this.resolveAliasLocale(e)), n.sourceFile.sourceLocale && (n.sourceFile.sourceLocale = this.resolveAliasLocale(n.sourceFile.sourceLocale)), n;
	}
	async getProjectData(e, t = {}) {
		this._validateAuth("getProjectData");
		let n = await zu(e, t, this._getTranslationConfig());
		return n.currentLocales = n.currentLocales.map((e) => this.resolveAliasLocale(e)), n.defaultLocale = this.resolveAliasLocale(n.defaultLocale), n;
	}
	async downloadFile(e, t = {}) {
		return this._validateAuth("downloadTranslatedFile"), (await Nu([{
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
		let n = await Nu(e, t, this._getTranslationConfig());
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
			let e = fu("translate");
			throw Al.error(e), Error(e);
		}
		r = this.resolveCanonicalLocale(r);
		let i = this.resolveCanonicalLocale(t?.sourceLocale || this.sourceLocale || "en");
		return (await Du([e], {
			...t,
			targetLocale: r,
			sourceLocale: i
		}, this._getTranslationConfig(), n))[0];
	}
	async translateMany(e, t, n) {
		typeof t == "string" && (t = { targetLocale: t }), this._validateAuth("translateMany");
		let r = t?.targetLocale || this.targetLocale;
		if (!r) {
			let e = fu("translateMany");
			throw Al.error(e), Error(e);
		}
		r = this.resolveCanonicalLocale(r);
		let i = this.resolveCanonicalLocale(t?.sourceLocale || this.sourceLocale || "en");
		return await Du(e, {
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
		let r = await Iu(e, n, this._getTranslationConfig());
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
			let e = pu("uploadTranslations");
			throw Al.error(e), Error(e);
		}
		let r = await Lu(e.map((e) => ({
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
		if (!e) throw Error(fu("getLocaleName"));
		return this.localeConfig.getLocaleName(e);
	}
	getLocaleEmoji(e = this.targetLocale) {
		if (!e) throw Error(fu("getLocaleEmoji"));
		return this.localeConfig.getLocaleEmoji(e);
	}
	getLocaleProperties(e = this.targetLocale) {
		if (!e) throw Error(fu("getLocaleProperties"));
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
		return Fu(e, this.targetLocale, t);
	}
	requiresTranslation(e = this.sourceLocale, t = this.targetLocale, n = this.locales, r = this.customMapping) {
		if (!e) throw Error(pu("requiresTranslation"));
		if (!t) throw Error(fu("requiresTranslation"));
		return r === this.customMapping ? this.localeConfig.requiresTranslation(t, e, n) : al(e, t, n, r);
	}
	determineLocale(e, t = this.locales || [], n = this.customMapping) {
		return n === this.customMapping ? this.localeConfig.determineLocale(e, t ?? []) : bl(e, t, n);
	}
	getLocaleDirection(e = this.targetLocale) {
		if (!e) throw Error(fu("getLocaleDirection"));
		return this.localeConfig.getLocaleDirection(e);
	}
	isValidLocale(e = this.targetLocale, t = this.customMapping) {
		if (!e) throw Error(fu("isValidLocale"));
		return t === this.customMapping ? this.localeConfig.isValidLocale(e) : L(e, t);
	}
	resolveCanonicalLocale(e = this.targetLocale, t = this.customMapping) {
		if (!e) throw Error(fu("resolveCanonicalLocale"));
		return t === this.customMapping ? this.localeConfig.resolveCanonicalLocale(e) : Zl(e, t);
	}
	resolveAliasLocale(e, t = this.customMapping) {
		if (!e) throw Error(fu("resolveAliasLocale"));
		return t === this.customMapping ? this.localeConfig.resolveAliasLocale(e) : Xl(e, t);
	}
	standardizeLocale(e = this.targetLocale) {
		if (!e) throw Error(fu("standardizeLocale"));
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
function Yu(e, t, n) {
	return yl(e, t, n);
}
function Xu(e, t, n, r) {
	return al(e, t, n, r);
}
function Zu(e, t = [], n = void 0) {
	return bl(e, t, n);
}
function Qu(e, t) {
	return Xl(e, t);
}
function $u(...e) {
	return il(...e);
}
function ed(e, t = "", n = !0) {
	if (e.forEach((e) => {
		switch (e.type) {
			case "error":
				nu.error(t + e.message);
				break;
			case "warning": nu.warn(t + e.message);
		}
	}), n && e.some((e) => e.type === "error")) throw Error("Validation errors occurred");
}
function td(e) {
	return e.loadTranslations ? "custom" : e.cacheUrl ? "remote" : (e.cacheUrl === void 0 || e.cacheUrl === "https://cdn.gtx.dev") && e.projectId ? "gt-remote" : "disabled";
}
function nd(e) {
	let t = [], { projectId: n, loadTranslations: r } = e;
	switch (td(e)) {
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
function rd(e) {
	return (e.runtimeUrl === void 0 || e.runtimeUrl === "https://runtime2.gtx.dev") && e.projectId && (e.devApiKey || e.apiKey) ? "gt" : e.runtimeUrl ? "custom" : "disabled";
}
function id(e) {
	let t = [];
	switch (rd(e)) {
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
function ad(e) {
	return td(e) === "gt-remote" || rd(e) === "gt";
}
function od(e) {
	let t = [];
	if (!ad(e)) return t;
	let { defaultLocale: n, locales: r, customMapping: i } = e;
	return (/* @__PURE__ */ new Set([...n ? [n] : [], ...r || []])).forEach((e) => {
		$l(e, i) || t.push({
			type: "error",
			message: `Invalid locale: ${e}`
		});
	}), t;
}
function sd(e) {
	let t = [];
	return t.push(...nd(e)), t.push(...id(e)), t.push(...od(e)), t;
}
var cd = class {}, ld = "fallback-storage-adapter", ud = class extends cd {
	constructor(...e) {
		super(...e), this.type = ld, this.storage = {};
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
function dd(e, t) {
	return (n) => (r) => e.translateMany(r, { targetLocale: n }, t);
}
function fd(e) {
	let t = pd(e);
	return async (n) => {
		n = eu(n, e.customMapping);
		let r = t.replace("[locale]", n), i = await fetch(r);
		if (!i.ok) throw Error(`Failed to load translations from ${r}`);
		return await i.json();
	};
}
function pd(e) {
	let { cacheUrl: t = wo, projectId: n, _versionId: r, _branchId: i } = e, a = r ? `/${r}` : "", o = i ? `?branchId=${i}` : "";
	return `${t}/${n}/[locale]` + a + o;
}
function md() {
	return async (e) => ({});
}
function hd({ type: e, remoteTranslationLoaderParams: t, loadTranslations: n }) {
	e === "disabled" && nu.warn("I18nManager: No translation loader found. No translations will be loaded.");
	let { cacheUrl: r, projectId: i, _versionId: a, _branchId: o, customMapping: s } = t;
	switch (e) {
		case "remote":
		case "gt-remote": return fd({
			cacheUrl: r || "",
			projectId: i || "",
			_versionId: a,
			_branchId: o,
			customMapping: s
		});
		case "custom": return n;
		case "disabled": return md();
	}
}
var gd = class {
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
function _d(e, t) {
	return au({
		source: t.$format === "ICU" ? Oc(e) : e,
		...t?.$context && { context: t.$context },
		...t?.$id && { id: t.$id },
		..."$maxChars" in t && t.$maxChars != null && { maxChars: Math.abs(t.$maxChars) },
		dataFormat: t.$format
	});
}
var vd = 25, yd = 100, bd = 50, xd = class extends gd {
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
		return _d(e.message, e.options);
	}
	fallback(e) {
		let t = this._enqueueTranslation(e);
		return this._queue.length >= vd ? this._flushNow() : this._scheduleBatch(), t;
	}
	_flushNow() {
		this._batchTimer &&= (clearTimeout(this._batchTimer), null), this._drainQueue();
	}
	_scheduleBatch() {
		this._batchTimer ||= setTimeout(() => {
			this._batchTimer = null, this._drainQueue();
		}, bd);
	}
	_drainQueue() {
		for (; this._queue.length > 0 && this._activeRequests < yd;) {
			let e = this._queue.splice(0, vd);
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
		let t = Sd(e), n = await this._sendBatchRequestWithErrorHandling(e, t);
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
function Sd(e) {
	return e.reduce((e, t) => (e[t.key] = {
		source: t.source,
		metadata: t.metadata
	}, e), {});
}
var Cd = 6e4, wd = class extends gd {
	constructor({ init: e = {}, ttl: t, loadTranslations: n, createTranslateMany: r, lifecycle: { onLocalesCacheHit: i, onLocalesCacheMiss: a, onTranslationsCacheHit: o, onTranslationsCacheMiss: s } }) {
		super(e, {
			onHit: i,
			onMiss: a
		}), this.ttl = Cd, this.ttl = t === null ? -1 : t ?? 6e4, this._translationLoader = n, this._createTranslateMany = r, this._onTranslationsCacheHit = o, this._onTranslationsCacheMiss = s;
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
			translationsCache: new xd({
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
function Td(e) {
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
var Ed = class {
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
function Dd({ onLocalesCacheHit: e, onLocalesCacheMiss: t, onTranslationsCacheHit: n, onTranslationsCacheMiss: r }, i) {
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
var Od = 12e3, kd = class extends Ed {
	constructor(e) {
		super(), this.resolveTranslationSync = (e, t = {}) => this.lookupTranslation(e, t), ed(sd(e), "I18nManager: "), this.config = Ad(e), this.localeConfig = new Ql({
			defaultLocale: this.config.defaultLocale,
			locales: this.config.locales,
			customMapping: this.config.customMapping
		}), this.storeAdapter = e.storeAdapter ?? new ud();
		let t = Pd(e), n = dd(this.getGTClassClean(), Od);
		Dd(e.lifecycle ?? {}, (...e) => this.subscribe(...e)), this.localesCache = new wd({
			loadTranslations: t,
			createTranslateMany: n,
			lifecycle: Td((...e) => this.emit(...e))
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
		return this.storeAdapter.getItem("locale") || (nu.warn("getLocale() invoked outside of translation context, falling back to default locale"), this.config.defaultLocale);
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
			let r = Nd(t, n, (e) => this.resolveLocale(e));
			r.length !== t.length && nu.warn(`I18nManager: getLookupTranslation(): prefetchEntries must all be the same locale, ignoring all entries that are not for ${n}`);
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
			default: nu.error("I18nManager: " + e);
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
		return new Ju({
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
function Ad(e) {
	let t = ad(e), n = jd({
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
		...t ? Md(n) : n
	};
}
function jd({ defaultLocale: e, locales: t, customMapping: n }) {
	return {
		defaultLocale: e,
		locales: Array.from(/* @__PURE__ */ new Set([e, ...t])),
		customMapping: n || {}
	};
}
function Md(e) {
	return {
		defaultLocale: tu(e.defaultLocale),
		locales: e.locales.map((t) => (typeof e.customMapping?.[t] == "string" ? e.customMapping?.[t] : e.customMapping?.[t]?.code) ? t : tu(t)),
		customMapping: Object.fromEntries(Object.entries(e.customMapping || {}).map(([e, t]) => [e, typeof t == "string" ? tu(t) : {
			...t,
			...t.code ? { code: tu(t.code) } : {}
		}]))
	};
}
function Nd(e, t, n) {
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
function Pd(e) {
	return hd({
		loadTranslations: e.loadTranslations,
		type: td(e),
		remoteTranslationLoaderParams: {
			cacheUrl: e.cacheUrl,
			projectId: e.projectId,
			_versionId: e._versionId,
			_branchId: e._branchId,
			customMapping: e.customMapping
		}
	});
}
var Fd = void 0;
function Id() {
	return Fd ||= (nu.warn("getI18nManager(): Translation failed because I18nManager not initialized."), new kd({
		defaultLocale: "en",
		locales: ["en"]
	})), Fd;
}
function Ld(e) {
	Fd = e;
}
var Rd = "DEFAULT_TERMINATOR_KEY", zd = {
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
		[Rd]: {
			terminator: "…",
			separator: void 0
		}
	},
	none: { [Rd]: {
		terminator: void 0,
		separator: void 0
	} }
}, Bd = {
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
			if (!zd[t.style ?? "ellipsis"]) throw Error(((e) => `generaltranslation Formatting Error: Invalid cutoff style: ${e}.`)(t.style ?? "ellipsis"));
			let n, r;
			if (t.maxChars !== void 0) {
				n = t.style ?? "ellipsis";
				let e = new Intl.Locale(this.locale).language;
				r = zd[n][e] || zd[n].DEFAULT_TERMINATOR_KEY;
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
		return a === void 0 && (a = new Bd[e](...t), this.cache[e] || (this.cache[e] = {}), this.cache[e][i] = a), a;
	}
}();
function Vd(e, t, n = "") {
	let r = (i = e) instanceof Uint8Array || ArrayBuffer.isView(i) && i.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in i && i.BYTES_PER_ELEMENT === 1;
	var i;
	let a = e?.length;
	if (!r || t !== void 0) {
		let t = (n && `"${n}" `) + "expected Uint8Array, got " + (r ? `length=${a}` : "type=" + typeof e);
		throw r ? RangeError(t) : TypeError(t);
	}
	return e;
}
function Hd(e, t = !0) {
	if (e.destroyed) throw Error("Hash instance has been destroyed");
	if (t && e.finished) throw Error("Hash#digest() has already been called");
}
function Ud(...e) {
	for (let t = 0; t < e.length; t++) e[t].fill(0);
}
function Wd(e) {
	return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function Gd(e, t) {
	return e << 32 - t | e >>> t;
}
typeof Uint8Array.from([]).toHex == "function" && Uint8Array.fromHex, Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function Kd(e, t, n) {
	return e & t ^ ~e & n;
}
function qd(e, t, n) {
	return e & t ^ e & n ^ t & n;
}
var Jd = class {
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
		this.blockLen = e, this.outputLen = t, this.padOffset = n, this.isLE = r, this.buffer = new Uint8Array(e), this.view = Wd(this.buffer);
	}
	update(e) {
		Hd(this), Vd(e);
		let { view: t, buffer: n, blockLen: r } = this, i = e.length;
		for (let a = 0; a < i;) {
			let o = Math.min(r - this.pos, i - a);
			if (o === r) {
				let t = Wd(e);
				for (; r <= i - a; a += r) this.process(t, a);
				continue;
			}
			n.set(e.subarray(a, a + o), this.pos), this.pos += o, a += o, this.pos === r && (this.process(t, 0), this.pos = 0);
		}
		return this.length += e.length, this.roundClean(), this;
	}
	digestInto(e) {
		Hd(this), function(e, t) {
			Vd(e, void 0, "digestInto() output");
			let n = t.outputLen;
			if (e.length < n) throw RangeError("\"digestInto() output\" expected to be of length >=" + n);
		}(e, this), this.finished = !0;
		let { buffer: t, view: n, blockLen: r, isLE: i } = this, { pos: a } = this;
		t[a++] = 128, Ud(this.buffer.subarray(a)), this.padOffset > r - a && (this.process(n, 0), a = 0);
		for (let e = a; e < r; e++) t[e] = 0;
		n.setBigUint64(r - 8, BigInt(8 * this.length), i), this.process(n, 0);
		let o = Wd(e), s = this.outputLen;
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
}, Yd = Uint32Array.from([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]), Xd = Uint32Array.from([
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
]), Zd = /* @__PURE__ */ new Uint32Array(64), Qd = class extends Jd {
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
		for (let n = 0; n < 16; n++, t += 4) Zd[n] = e.getUint32(t, !1);
		for (let e = 16; e < 64; e++) {
			let t = Zd[e - 15], n = Zd[e - 2], r = Gd(t, 7) ^ Gd(t, 18) ^ t >>> 3, i = Gd(n, 17) ^ Gd(n, 19) ^ n >>> 10;
			Zd[e] = i + Zd[e - 7] + r + Zd[e - 16] | 0;
		}
		let { A: n, B: r, C: i, D: a, E: o, F: s, G: c, H: l } = this;
		for (let e = 0; e < 64; e++) {
			let t = l + (Gd(o, 6) ^ Gd(o, 11) ^ Gd(o, 25)) + Kd(o, s, c) + Xd[e] + Zd[e] | 0, u = (Gd(n, 2) ^ Gd(n, 13) ^ Gd(n, 22)) + qd(n, r, i) | 0;
			l = c, c = s, s = o, o = a + t | 0, a = i, i = r, r = n, n = t + u | 0;
		}
		n = n + this.A | 0, r = r + this.B | 0, i = i + this.C | 0, a = a + this.D | 0, o = o + this.E | 0, s = s + this.F | 0, c = c + this.G | 0, l = l + this.H | 0, this.set(n, r, i, a, o, s, c, l);
	}
	roundClean() {
		Ud(Zd);
	}
	destroy() {
		this.destroyed = !0, this.set(0, 0, 0, 0, 0, 0, 0, 0), Ud(this.buffer);
	}
}, $d = class extends Qd {
	A = 0 | Yd[0];
	B = 0 | Yd[1];
	C = 0 | Yd[2];
	D = 0 | Yd[3];
	E = 0 | Yd[4];
	F = 0 | Yd[5];
	G = 0 | Yd[6];
	H = 0 | Yd[7];
	constructor() {
		super(32);
	}
};
(function(e, t = {}) {
	let n = (t, n) => e(n).update(t).digest(), r = e(void 0);
	return n.outputLen = r.outputLen, n.blockLen = r.blockLen, n.canXOF = r.canXOF, n.create = (t) => e(t), Object.assign(n, t), Object.freeze(n);
})(() => new $d(), (ef = 1, { oid: Uint8Array.from([
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
	ef
]) }));
var ef, tf = function(e, t) {
	return tf = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	}, tf(e, t);
};
function nf(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	function n() {
		this.constructor = e;
	}
	tf(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var B = function() {
	return B = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, B.apply(this, arguments);
};
function rf(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") {
		var i = 0;
		for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	}
	return n;
}
function af(e, t, n, r) {
	var i, a = arguments.length, o = a < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
	return a > 3 && o && Object.defineProperty(t, n, o), o;
}
function of(e, t) {
	return function(n, r) {
		t(n, r, e);
	};
}
function sf(e, t, n, r, i, a) {
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
function cf(e, t, n) {
	for (var r = arguments.length > 2, i = 0; i < t.length; i++) n = r ? t[i].call(e, n) : t[i].call(e);
	return r ? n : void 0;
}
function lf(e) {
	return typeof e == "symbol" ? e : `${e}`;
}
function uf(e, t, n) {
	return typeof t == "symbol" && (t = t.description ? `[${t.description}]` : ""), Object.defineProperty(e, "name", {
		configurable: !0,
		value: n ? `${n} ${t}` : t
	});
}
function df(e, t) {
	if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, t);
}
function ff(e, t, n, r) {
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
function pf(e, t) {
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
var mf = Object.create ? function(e, t, n, r) {
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
function hf(e, t) {
	for (var n in e) n === "default" || Object.prototype.hasOwnProperty.call(t, n) || mf(t, e, n);
}
function gf(e) {
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
function _f(e, t) {
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
function vf() {
	for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(_f(arguments[t]));
	return e;
}
function yf() {
	for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
	var r = Array(e), i = 0;
	for (t = 0; t < n; t++) for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
	return r;
}
function bf(e, t, n) {
	if (n || arguments.length === 2) for (var r, i = 0, a = t.length; i < a; i++) !r && i in t || (r ||= Array.prototype.slice.call(t, 0, i), r[i] = t[i]);
	return e.concat(r || Array.prototype.slice.call(t));
}
function xf(e) {
	return this instanceof xf ? (this.v = e, this) : new xf(e);
}
function Sf(e, t, n) {
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
			(n = i[e](t)).value instanceof xf ? Promise.resolve(n.value.v).then(c, l) : u(a[0][2], n);
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
function Cf(e) {
	var t = {}, n;
	return r("next"), r("throw", function(e) {
		throw e;
	}), r("return"), t[Symbol.iterator] = function() {
		return this;
	}, t;
	function r(r, i) {
		t[r] = e[r] ? function(t) {
			return (n = !n) ? {
				value: xf(e[r](t)),
				done: !1
			} : i ? i(t) : t;
		} : i;
	}
}
function wf(e) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var t, n = e[Symbol.asyncIterator];
	return n ? n.call(e) : (e = gf(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
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
function Tf(e, t) {
	return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
var Ef = Object.create ? function(e, t) {
	Object.defineProperty(e, "default", {
		enumerable: !0,
		value: t
	});
} : function(e, t) {
	e.default = t;
}, Df = function(e) {
	return Df = Object.getOwnPropertyNames || function(e) {
		var t = [];
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
		return t;
	}, Df(e);
};
function Of(e) {
	if (e && e.__esModule) return e;
	var t = {};
	if (e != null) for (var n = Df(e), r = 0; r < n.length; r++) n[r] !== "default" && mf(t, e, n[r]);
	return Ef(t, e), t;
}
function kf(e) {
	return e && e.__esModule ? e : { default: e };
}
function Af(e, t, n, r) {
	if (n === "a" && !r) throw TypeError("Private accessor was defined without a getter");
	if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
	return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function jf(e, t, n, r, i) {
	if (r === "m") throw TypeError("Private method is not writable");
	if (r === "a" && !i) throw TypeError("Private accessor was defined without a setter");
	if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
	return r === "a" ? i.call(e, n) : i ? i.value = n : t.set(e, n), n;
}
function Mf(e, t) {
	if (t === null || typeof t != "object" && typeof t != "function") throw TypeError("Cannot use 'in' operator on non-object");
	return typeof e == "function" ? t === e : e.has(t);
}
function Nf(e, t, n) {
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
var Pf = typeof SuppressedError == "function" ? SuppressedError : function(e, t, n) {
	var r = Error(n);
	return r.name = "SuppressedError", r.error = e, r.suppressed = t, r;
};
function Ff(e) {
	function t(t) {
		e.error = e.hasError ? new Pf(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
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
function If(e, t) {
	return typeof e == "string" && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, n, r, i, a) {
		return n ? t ? ".jsx" : ".js" : !r || i && a ? r + i + "." + a.toLowerCase() + "js" : e;
	}) : e;
}
var V, H, Lf, Rf = Object.freeze({
	__proto__: null,
	__addDisposableResource: Nf,
	get __assign() {
		return B;
	},
	__asyncDelegator: Cf,
	__asyncGenerator: Sf,
	__asyncValues: wf,
	__await: xf,
	__awaiter: ff,
	__classPrivateFieldGet: Af,
	__classPrivateFieldIn: Mf,
	__classPrivateFieldSet: jf,
	__createBinding: mf,
	__decorate: af,
	__disposeResources: Ff,
	__esDecorate: sf,
	__exportStar: hf,
	__extends: nf,
	__generator: pf,
	__importDefault: kf,
	__importStar: Of,
	__makeTemplateObject: Tf,
	__metadata: df,
	__param: of,
	__propKey: lf,
	__read: _f,
	__rest: rf,
	__rewriteRelativeImportExtension: If,
	__runInitializers: cf,
	__setFunctionName: uf,
	__spread: vf,
	__spreadArray: bf,
	__spreadArrays: yf,
	__values: gf,
	default: {
		__extends: nf,
		__assign: B,
		__rest: rf,
		__decorate: af,
		__param: of,
		__esDecorate: sf,
		__runInitializers: cf,
		__propKey: lf,
		__setFunctionName: uf,
		__metadata: df,
		__awaiter: ff,
		__generator: pf,
		__createBinding: mf,
		__exportStar: hf,
		__values: gf,
		__read: _f,
		__spread: vf,
		__spreadArrays: yf,
		__spreadArray: bf,
		__await: xf,
		__asyncGenerator: Sf,
		__asyncDelegator: Cf,
		__asyncValues: wf,
		__makeTemplateObject: Tf,
		__importStar: Of,
		__importDefault: kf,
		__classPrivateFieldGet: Af,
		__classPrivateFieldSet: jf,
		__classPrivateFieldIn: Mf,
		__addDisposableResource: Nf,
		__disposeResources: Ff,
		__rewriteRelativeImportExtension: If
	}
});
(function(e) {
	e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(V ||= {}), function(e) {
	e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
}(H ||= {}), function(e) {
	e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
}(Lf ||= {});
var zf = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Bf = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Vf(e) {
	var t = {};
	return e.replace(Bf, function(e) {
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
var Hf = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Uf(e) {
	return e.replace(/^(.*?)-/, "");
}
var Wf = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Gf = /^(@+)?(\+|#+)?[rs]?$/g, Kf = /(\*)(0+)|(#+)(0+)|(0+)/g, qf = /^(0+)$/;
function Jf(e) {
	var t = {};
	return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Gf, function(e, n, r) {
		return typeof r == "string" ? r === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof r == "string" ? r.length : 0)) : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length), "";
	}), t;
}
function Yf(e) {
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
function Xf(e) {
	var t;
	if (e[0] === "E" && e[1] === "E" ? (t = { notation: "engineering" }, e = e.slice(2)) : e[0] === "E" && (t = { notation: "scientific" }, e = e.slice(1)), t) {
		var n = e.slice(0, 2);
		if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !qf.test(e)) throw Error("Malformed concise eng/scientific notation");
		t.minimumIntegerDigits = e.length;
	}
	return t;
}
function Zf(e) {
	return Yf(e) || {};
}
function Qf(e) {
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
				t.style = "unit", t.unit = Uf(i.options[0]);
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
					return B(B({}, e), Zf(t));
				}, {}));
				continue;
			case "engineering":
				t = B(B(B({}, t), { notation: "engineering" }), i.options.reduce(function(e, t) {
					return B(B({}, e), Zf(t));
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
				i.options[0].replace(Kf, function(e, n, r, i, a, o) {
					if (n) t.minimumIntegerDigits = r.length;
					else {
						if (i && a) throw Error("We currently do not support maximum integer digits");
						if (o) throw Error("We currently do not support exact integer digits");
					}
					return "";
				});
				continue;
		}
		if (qf.test(i.stem)) t.minimumIntegerDigits = i.stem.length;
		else if (Wf.test(i.stem)) {
			if (i.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
			i.stem.replace(Wf, function(e, n, r, i, a, o) {
				return r === "*" ? t.minimumFractionDigits = n.length : i && i[0] === "#" ? t.maximumFractionDigits = i.length : a && o ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + o.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), "";
			});
			var a = i.options[0];
			a === "w" ? t = B(B({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = B(B({}, t), Jf(a)));
		} else if (Gf.test(i.stem)) t = B(B({}, t), Jf(i.stem));
		else {
			var o = Yf(i.stem);
			o && (t = B(B({}, t), o));
			var s = Xf(i.stem);
			s && (t = B(B({}, t), s));
		}
	}
	return t;
}
var $f = {
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
function ep(e) {
	var t = e.hourCycle;
	if (t === void 0 && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
		case "h24": return "k";
		case "h23": return "H";
		case "h12": return "h";
		case "h11": return "K";
		default: throw Error("Invalid hourCycle");
	}
	var n, r = e.language;
	return r !== "root" && (n = e.maximize().region), ($f[n || ""] || $f[r || ""] || $f[`${r}-001`] || $f["001"])[0];
}
var tp = RegExp(`^${zf.source}*`), np = RegExp(`${zf.source}*\$`);
function U(e, t) {
	return {
		start: e,
		end: t
	};
}
var rp = !!String.prototype.startsWith && "_a".startsWith("a", 1), ip = !!String.fromCodePoint, ap = !!Object.fromEntries, op = !!String.prototype.codePointAt, sp = !!String.prototype.trimStart, cp = !!String.prototype.trimEnd, lp = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
	return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, up = !0;
try {
	up = vp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")?.[0] === "a";
} catch {
	up = !1;
}
var dp, fp = rp ? function(e, t, n) {
	return e.startsWith(t, n);
} : function(e, t, n) {
	return e.slice(n, n + t.length) === t;
}, pp = ip ? String.fromCodePoint : function() {
	for (var e = [...arguments], t, n = "", r = e.length, i = 0; r > i;) {
		if ((t = e[i++]) > 1114111) throw RangeError(t + " is not a valid code point");
		n += t < 65536 ? String.fromCharCode(t) : String.fromCharCode(55296 + ((t -= 65536) >> 10), t % 1024 + 56320);
	}
	return n;
}, mp = ap ? Object.fromEntries : function(e) {
	for (var t = {}, n = 0, r = e; n < r.length; n++) {
		var i = r[n], a = i[0];
		t[a] = i[1];
	}
	return t;
}, hp = op ? function(e, t) {
	return e.codePointAt(t);
} : function(e, t) {
	var n = e.length;
	if (!(t < 0 || t >= n)) {
		var r, i = e.charCodeAt(t);
		return i < 55296 || i > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? i : r - 56320 + (i - 55296 << 10) + 65536;
	}
}, gp = sp ? function(e) {
	return e.trimStart();
} : function(e) {
	return e.replace(tp, "");
}, _p = cp ? function(e) {
	return e.trimEnd();
} : function(e) {
	return e.replace(np, "");
};
function vp(e, t) {
	return new RegExp(e, t);
}
if (up) {
	var yp = vp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
	dp = function(e, t) {
		return yp.lastIndex = t, yp.exec(e)[1] ?? "";
	};
} else dp = function(e, t) {
	for (var n = [];;) {
		var r = hp(e, t);
		if (r === void 0 || Sp(r) || Cp(r)) break;
		n.push(r), t += r >= 65536 ? 2 : 1;
	}
	return pp.apply(void 0, n);
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
					if (i === 60 && !this.ignoreTag && bp(this.peek() || 0)) {
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
				if (this.isEOF() || !bp(this.char())) return this.error(V.INVALID_TAG, U(o, this.clonePosition()));
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
		for (this.bump(); !this.isEOF() && xp(this.char());) this.bump();
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
		return this.isEOF() || this.char() !== 60 || !this.ignoreTag && (bp(e = this.peek() || 0) || e === 47) ? null : (this.bump(), "<");
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
		return pp.apply(void 0, t);
	}, e.prototype.tryParseUnquoted = function(e, t) {
		if (this.isEOF()) return null;
		var n = this.char();
		return n === 60 || n === 123 || n === 35 && (t === "plural" || t === "selectordinal") || n === 125 && e > 0 ? null : (this.bump(), pp(n));
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
		var e = this.clonePosition(), t = this.offset(), n = dp(this.message, t), r = t + n.length;
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
					if ((f = _p(g.val)).length === 0) return this.error(V.EXPECT_ARGUMENT_STYLE, U(this.clonePosition(), this.clonePosition()));
					s = {
						style: f,
						styleLocation: U(c, this.clonePosition())
					};
				}
				if ((_ = this.tryParseArgumentClose(r)).err) return _;
				var l = U(r, this.clonePosition());
				if (s && fp(s?.style, "::", 0)) {
					var u = gp(s.style.slice(2));
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
								var o = 1 + (1 & a), s = a < 2 ? 1 : 3 + (a >> 1), c = ep(t);
								for (c != "H" && c != "k" || (s = 0); s-- > 0;) n += "a";
								for (; o-- > 0;) n = c + n;
							} else n += i === "J" ? "H" : i;
						}
						return n;
					}(u, this.locale));
					var f = {
						type: Lf.dateTime,
						pattern: d,
						location: s.styleLocation,
						parsedOptions: this.shouldParseSkeletons ? Vf(d) : {}
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
						options: mp(v.val),
						location: y
					},
					err: null
				} : {
					val: {
						type: H.plural,
						value: n,
						options: mp(v.val),
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
				for (var t = [], n = 0, r = e.split(Hf).filter(function(e) {
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
				type: Lf.number,
				tokens: n,
				location: t,
				parsedOptions: this.shouldParseSkeletons ? Qf(n) : {}
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
		return i ? lp(a *= n) ? {
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
		var t = hp(this.message, e);
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
		if (fp(this.message, e, this.offset())) {
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
		for (; !this.isEOF() && Sp(this.char());) this.bump();
	}, e.prototype.peek = function() {
		if (this.isEOF()) return null;
		var e = this.char(), t = this.offset();
		return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null;
	}, e;
})();
function bp(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function xp(e) {
	return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Sp(e) {
	return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function Cp(e) {
	return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
var wp, W = {};
function Tp() {
	return wp || (wp = 1, Object.defineProperty(W, "__esModule", { value: !0 }), W.SKELETON_TYPE = W.TYPE = void 0, W.isLiteralElement = function(t) {
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
var Ep;
Tp();
var Dp = {}, Op = function(e) {
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
}(Rf);
(function() {
	if (Ep) return Dp;
	Ep = 1, Object.defineProperty(Dp, "__esModule", { value: !0 }), Dp.printAST = n, Dp.doPrintAST = r, Dp.printDateTimeSkeleton = o;
	var e = Op, t = Tp();
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
	return Dp;
})();
var kp = "_gt_";
RegExp(`^${kp}\\d+$`), RegExp(`^${kp}$`);
var Ap = "generaltranslation.locale";
e.use;
var jp = {
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
function Mp(e) {
	if (!$l(e)) return null;
	e = tu(e);
	let { languageCode: t, ...n } = Yu(e);
	if (jp[t]?.length) {
		let r = jp[t], i = ({ locale: e, languageCode: t, minimizedCode: n, regionCode: i, scriptCode: a }) => {
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
			...Yu(t)
		});
	}
	return null;
}
var Np = {
	variable: "value",
	number: "n",
	datetime: "date",
	currency: "cost",
	"relative-time": "time"
};
function Pp(e = {}, t) {
	return e.name ? e.name : `_gt_${Np[t] || "value"}_${e["data-_gt"]?.id}`;
}
var Fp = "en", Ip = "DEFAULT_TERMINATOR_KEY", Lp = {
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
		[Ip]: {
			terminator: "…",
			separator: void 0
		}
	},
	none: { [Ip]: {
		terminator: void 0,
		separator: void 0
	} }
}, Rp = {
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
			if (!Lp[t.style ?? "ellipsis"]) throw Error(((e) => `generaltranslation Formatting Error: Invalid cutoff style: ${e}.`)(t.style ?? "ellipsis"));
			let n, r;
			if (t.maxChars !== void 0) {
				n = t.style ?? "ellipsis";
				let e = new Intl.Locale(this.locale).language;
				r = Lp[n][e] || Lp[n].DEFAULT_TERMINATOR_KEY;
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
		return a === void 0 && (a = new Rp[e](...t), this.cache[e] || (this.cache[e] = {}), this.cache[e][i] = a), a;
	}
}();
var zp = "https://cdn.gtx.dev", Bp = "https://runtime2.gtx.dev";
function Vp(e) {
	if (e === void 0) return;
	if (e === null) return "null";
	if (typeof e == "number") return isFinite(e) ? "" + e : "null";
	if (typeof e != "object") return JSON.stringify(e);
	if (Array.isArray(e)) {
		let t = "[";
		for (let n = 0; n < e.length; n++) n && (t += ","), t += Vp(e[n]) || "null";
		return t + "]";
	}
	let t = Object.keys(e).sort(), n = "";
	for (let r of t) {
		let t = Vp(e[r]);
		t && (n && (n += ","), n += JSON.stringify(r) + ":" + t);
	}
	return "{" + n + "}";
}
function Hp(e) {
	return Vp(e) ?? "";
}
function Up(e) {
	let t = e;
	if (t && typeof t == "object" && typeof t.k == "string") {
		let e = Object.keys(t);
		if (e.length === 1 || e.length === 2 && (typeof t.i == "number" || typeof t.v == "string") || e.length === 3 && typeof t.v == "string" && typeof t.i == "number") return !0;
	}
	return !1;
}
function Wp(e, t, n = "") {
	let r = (i = e) instanceof Uint8Array || ArrayBuffer.isView(i) && i.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in i && i.BYTES_PER_ELEMENT === 1;
	var i;
	let a = e?.length;
	if (!r || t !== void 0) {
		let t = (n && `"${n}" `) + "expected Uint8Array, got " + (r ? `length=${a}` : "type=" + typeof e);
		throw r ? RangeError(t) : TypeError(t);
	}
	return e;
}
function Gp(e, t = !0) {
	if (e.destroyed) throw Error("Hash instance has been destroyed");
	if (t && e.finished) throw Error("Hash#digest() has already been called");
}
function Kp(...e) {
	for (let t = 0; t < e.length; t++) e[t].fill(0);
}
function qp(e) {
	return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function Jp(e, t) {
	return e << 32 - t | e >>> t;
}
var Yp = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", Xp = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function Zp(e, t = {}) {
	let n = (t, n) => e(n).update(t).digest(), r = e(void 0);
	return n.outputLen = r.outputLen, n.blockLen = r.blockLen, n.canXOF = r.canXOF, n.create = (t) => e(t), Object.assign(n, t), Object.freeze(n);
}
var Qp = (e) => ({ oid: Uint8Array.from([
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
function $p(e, t, n) {
	return e & t ^ ~e & n;
}
function em(e, t, n) {
	return e & t ^ e & n ^ t & n;
}
var tm = class {
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
		this.blockLen = e, this.outputLen = t, this.padOffset = n, this.isLE = r, this.buffer = new Uint8Array(e), this.view = qp(this.buffer);
	}
	update(e) {
		Gp(this), Wp(e);
		let { view: t, buffer: n, blockLen: r } = this, i = e.length;
		for (let a = 0; a < i;) {
			let o = Math.min(r - this.pos, i - a);
			if (o === r) {
				let t = qp(e);
				for (; r <= i - a; a += r) this.process(t, a);
				continue;
			}
			n.set(e.subarray(a, a + o), this.pos), this.pos += o, a += o, this.pos === r && (this.process(t, 0), this.pos = 0);
		}
		return this.length += e.length, this.roundClean(), this;
	}
	digestInto(e) {
		Gp(this), function(e, t) {
			Wp(e, void 0, "digestInto() output");
			let n = t.outputLen;
			if (e.length < n) throw RangeError("\"digestInto() output\" expected to be of length >=" + n);
		}(e, this), this.finished = !0;
		let { buffer: t, view: n, blockLen: r, isLE: i } = this, { pos: a } = this;
		t[a++] = 128, Kp(this.buffer.subarray(a)), this.padOffset > r - a && (this.process(n, 0), a = 0);
		for (let e = a; e < r; e++) t[e] = 0;
		n.setBigUint64(r - 8, BigInt(8 * this.length), i), this.process(n, 0);
		let o = qp(e), s = this.outputLen;
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
}, nm = Uint32Array.from([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]), rm = Uint32Array.from([
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
]), im = /* @__PURE__ */ new Uint32Array(64), am = class extends tm {
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
		for (let n = 0; n < 16; n++, t += 4) im[n] = e.getUint32(t, !1);
		for (let e = 16; e < 64; e++) {
			let t = im[e - 15], n = im[e - 2], r = Jp(t, 7) ^ Jp(t, 18) ^ t >>> 3, i = Jp(n, 17) ^ Jp(n, 19) ^ n >>> 10;
			im[e] = i + im[e - 7] + r + im[e - 16] | 0;
		}
		let { A: n, B: r, C: i, D: a, E: o, F: s, G: c, H: l } = this;
		for (let e = 0; e < 64; e++) {
			let t = l + (Jp(o, 6) ^ Jp(o, 11) ^ Jp(o, 25)) + $p(o, s, c) + rm[e] + im[e] | 0, u = (Jp(n, 2) ^ Jp(n, 13) ^ Jp(n, 22)) + em(n, r, i) | 0;
			l = c, c = s, s = o, o = a + t | 0, a = i, i = r, r = n, n = t + u | 0;
		}
		n = n + this.A | 0, r = r + this.B | 0, i = i + this.C | 0, a = a + this.D | 0, o = o + this.E | 0, s = s + this.F | 0, c = c + this.G | 0, l = l + this.H | 0, this.set(n, r, i, a, o, s, c, l);
	}
	roundClean() {
		Kp(im);
	}
	destroy() {
		this.destroyed = !0, this.set(0, 0, 0, 0, 0, 0, 0, 0), Kp(this.buffer);
	}
}, om = class extends am {
	A = 0 | nm[0];
	B = 0 | nm[1];
	C = 0 | nm[2];
	D = 0 | nm[3];
	E = 0 | nm[4];
	F = 0 | nm[5];
	G = 0 | nm[6];
	H = 0 | nm[7];
	constructor() {
		super(32);
	}
}, sm = Zp(() => new om(), Qp(1)), cm = function(e, t) {
	return cm = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	}, cm(e, t);
};
function lm(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	function n() {
		this.constructor = e;
	}
	cm(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var G = function() {
	return G = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, G.apply(this, arguments);
};
function um(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") {
		var i = 0;
		for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	}
	return n;
}
function dm(e, t, n, r) {
	var i, a = arguments.length, o = a < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
	return a > 3 && o && Object.defineProperty(t, n, o), o;
}
function fm(e, t) {
	return function(n, r) {
		t(n, r, e);
	};
}
function pm(e, t, n, r, i, a) {
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
function mm(e, t, n) {
	for (var r = arguments.length > 2, i = 0; i < t.length; i++) n = r ? t[i].call(e, n) : t[i].call(e);
	return r ? n : void 0;
}
function hm(e) {
	return typeof e == "symbol" ? e : `${e}`;
}
function gm(e, t, n) {
	return typeof t == "symbol" && (t = t.description ? `[${t.description}]` : ""), Object.defineProperty(e, "name", {
		configurable: !0,
		value: n ? `${n} ${t}` : t
	});
}
function _m(e, t) {
	if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, t);
}
function vm(e, t, n, r) {
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
function ym(e, t) {
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
var bm = Object.create ? function(e, t, n, r) {
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
function xm(e, t) {
	for (var n in e) n === "default" || Object.prototype.hasOwnProperty.call(t, n) || bm(t, e, n);
}
function Sm(e) {
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
function Cm(e, t) {
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
function wm() {
	for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Cm(arguments[t]));
	return e;
}
function Tm() {
	for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
	var r = Array(e), i = 0;
	for (t = 0; t < n; t++) for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
	return r;
}
function Em(e, t, n) {
	if (n || arguments.length === 2) for (var r, i = 0, a = t.length; i < a; i++) !r && i in t || (r ||= Array.prototype.slice.call(t, 0, i), r[i] = t[i]);
	return e.concat(r || Array.prototype.slice.call(t));
}
function Dm(e) {
	return this instanceof Dm ? (this.v = e, this) : new Dm(e);
}
function Om(e, t, n) {
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
			(n = i[e](t)).value instanceof Dm ? Promise.resolve(n.value.v).then(c, l) : u(a[0][2], n);
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
function km(e) {
	var t = {}, n;
	return r("next"), r("throw", function(e) {
		throw e;
	}), r("return"), t[Symbol.iterator] = function() {
		return this;
	}, t;
	function r(r, i) {
		t[r] = e[r] ? function(t) {
			return (n = !n) ? {
				value: Dm(e[r](t)),
				done: !1
			} : i ? i(t) : t;
		} : i;
	}
}
function Am(e) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var t, n = e[Symbol.asyncIterator];
	return n ? n.call(e) : (e = Sm(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
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
function jm(e, t) {
	return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
var Mm = Object.create ? function(e, t) {
	Object.defineProperty(e, "default", {
		enumerable: !0,
		value: t
	});
} : function(e, t) {
	e.default = t;
}, Nm = function(e) {
	return Nm = Object.getOwnPropertyNames || function(e) {
		var t = [];
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
		return t;
	}, Nm(e);
};
function Pm(e) {
	if (e && e.__esModule) return e;
	var t = {};
	if (e != null) for (var n = Nm(e), r = 0; r < n.length; r++) n[r] !== "default" && bm(t, e, n[r]);
	return Mm(t, e), t;
}
function Fm(e) {
	return e && e.__esModule ? e : { default: e };
}
function Im(e, t, n, r) {
	if (n === "a" && !r) throw TypeError("Private accessor was defined without a getter");
	if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
	return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function Lm(e, t, n, r, i) {
	if (r === "m") throw TypeError("Private method is not writable");
	if (r === "a" && !i) throw TypeError("Private accessor was defined without a setter");
	if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
	return r === "a" ? i.call(e, n) : i ? i.value = n : t.set(e, n), n;
}
function Rm(e, t) {
	if (t === null || typeof t != "object" && typeof t != "function") throw TypeError("Cannot use 'in' operator on non-object");
	return typeof e == "function" ? t === e : e.has(t);
}
function zm(e, t, n) {
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
var Bm = typeof SuppressedError == "function" ? SuppressedError : function(e, t, n) {
	var r = Error(n);
	return r.name = "SuppressedError", r.error = e, r.suppressed = t, r;
};
function Vm(e) {
	function t(t) {
		e.error = e.hasError ? new Bm(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
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
function Hm(e, t) {
	return typeof e == "string" && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, n, r, i, a) {
		return n ? t ? ".jsx" : ".js" : !r || i && a ? r + i + "." + a.toLowerCase() + "js" : e;
	}) : e;
}
var K, q, Um, Wm = Object.freeze({
	__proto__: null,
	__addDisposableResource: zm,
	get __assign() {
		return G;
	},
	__asyncDelegator: km,
	__asyncGenerator: Om,
	__asyncValues: Am,
	__await: Dm,
	__awaiter: vm,
	__classPrivateFieldGet: Im,
	__classPrivateFieldIn: Rm,
	__classPrivateFieldSet: Lm,
	__createBinding: bm,
	__decorate: dm,
	__disposeResources: Vm,
	__esDecorate: pm,
	__exportStar: xm,
	__extends: lm,
	__generator: ym,
	__importDefault: Fm,
	__importStar: Pm,
	__makeTemplateObject: jm,
	__metadata: _m,
	__param: fm,
	__propKey: hm,
	__read: Cm,
	__rest: um,
	__rewriteRelativeImportExtension: Hm,
	__runInitializers: mm,
	__setFunctionName: gm,
	__spread: wm,
	__spreadArray: Em,
	__spreadArrays: Tm,
	__values: Sm,
	default: {
		__extends: lm,
		__assign: G,
		__rest: um,
		__decorate: dm,
		__param: fm,
		__esDecorate: pm,
		__runInitializers: mm,
		__propKey: hm,
		__setFunctionName: gm,
		__metadata: _m,
		__awaiter: vm,
		__generator: ym,
		__createBinding: bm,
		__exportStar: xm,
		__values: Sm,
		__read: Cm,
		__spread: wm,
		__spreadArrays: Tm,
		__spreadArray: Em,
		__await: Dm,
		__asyncGenerator: Om,
		__asyncDelegator: km,
		__asyncValues: Am,
		__makeTemplateObject: jm,
		__importStar: Pm,
		__importDefault: Fm,
		__classPrivateFieldGet: Im,
		__classPrivateFieldSet: Lm,
		__classPrivateFieldIn: Rm,
		__addDisposableResource: zm,
		__disposeResources: Vm,
		__rewriteRelativeImportExtension: Hm
	}
});
(function(e) {
	e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(K ||= {}), function(e) {
	e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
}(q ||= {}), function(e) {
	e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
}(Um ||= {});
var Gm = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Km = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function qm(e) {
	var t = {};
	return e.replace(Km, function(e) {
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
var Jm = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Ym(e) {
	return e.replace(/^(.*?)-/, "");
}
var Xm = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Zm = /^(@+)?(\+|#+)?[rs]?$/g, Qm = /(\*)(0+)|(#+)(0+)|(0+)/g, $m = /^(0+)$/;
function eh(e) {
	var t = {};
	return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Zm, function(e, n, r) {
		return typeof r == "string" ? r === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof r == "string" ? r.length : 0)) : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length), "";
	}), t;
}
function th(e) {
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
function nh(e) {
	var t;
	if (e[0] === "E" && e[1] === "E" ? (t = { notation: "engineering" }, e = e.slice(2)) : e[0] === "E" && (t = { notation: "scientific" }, e = e.slice(1)), t) {
		var n = e.slice(0, 2);
		if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !$m.test(e)) throw Error("Malformed concise eng/scientific notation");
		t.minimumIntegerDigits = e.length;
	}
	return t;
}
function rh(e) {
	return th(e) || {};
}
function ih(e) {
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
				t.style = "unit", t.unit = Ym(i.options[0]);
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
					return G(G({}, e), rh(t));
				}, {}));
				continue;
			case "engineering":
				t = G(G(G({}, t), { notation: "engineering" }), i.options.reduce(function(e, t) {
					return G(G({}, e), rh(t));
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
				i.options[0].replace(Qm, function(e, n, r, i, a, o) {
					if (n) t.minimumIntegerDigits = r.length;
					else {
						if (i && a) throw Error("We currently do not support maximum integer digits");
						if (o) throw Error("We currently do not support exact integer digits");
					}
					return "";
				});
				continue;
		}
		if ($m.test(i.stem)) t.minimumIntegerDigits = i.stem.length;
		else if (Xm.test(i.stem)) {
			if (i.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
			i.stem.replace(Xm, function(e, n, r, i, a, o) {
				return r === "*" ? t.minimumFractionDigits = n.length : i && i[0] === "#" ? t.maximumFractionDigits = i.length : a && o ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + o.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), "";
			});
			var a = i.options[0];
			a === "w" ? t = G(G({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = G(G({}, t), eh(a)));
		} else if (Zm.test(i.stem)) t = G(G({}, t), eh(i.stem));
		else {
			var o = th(i.stem);
			o && (t = G(G({}, t), o));
			var s = nh(i.stem);
			s && (t = G(G({}, t), s));
		}
	}
	return t;
}
var ah = {
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
function oh(e) {
	var t = e.hourCycle;
	if (t === void 0 && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
		case "h24": return "k";
		case "h23": return "H";
		case "h12": return "h";
		case "h11": return "K";
		default: throw Error("Invalid hourCycle");
	}
	var n, r = e.language;
	return r !== "root" && (n = e.maximize().region), (ah[n || ""] || ah[r || ""] || ah[`${r}-001`] || ah["001"])[0];
}
var sh = RegExp(`^${Gm.source}*`), ch = RegExp(`${Gm.source}*\$`);
function J(e, t) {
	return {
		start: e,
		end: t
	};
}
var lh = !!String.prototype.startsWith && "_a".startsWith("a", 1), uh = !!String.fromCodePoint, dh = !!Object.fromEntries, fh = !!String.prototype.codePointAt, ph = !!String.prototype.trimStart, mh = !!String.prototype.trimEnd, hh = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
	return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, gh = !0;
try {
	gh = wh("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")?.[0] === "a";
} catch {
	gh = !1;
}
var _h, vh = lh ? function(e, t, n) {
	return e.startsWith(t, n);
} : function(e, t, n) {
	return e.slice(n, n + t.length) === t;
}, yh = uh ? String.fromCodePoint : function() {
	for (var e = [...arguments], t, n = "", r = e.length, i = 0; r > i;) {
		if ((t = e[i++]) > 1114111) throw RangeError(t + " is not a valid code point");
		n += t < 65536 ? String.fromCharCode(t) : String.fromCharCode(55296 + ((t -= 65536) >> 10), t % 1024 + 56320);
	}
	return n;
}, bh = dh ? Object.fromEntries : function(e) {
	for (var t = {}, n = 0, r = e; n < r.length; n++) {
		var i = r[n], a = i[0];
		t[a] = i[1];
	}
	return t;
}, xh = fh ? function(e, t) {
	return e.codePointAt(t);
} : function(e, t) {
	var n = e.length;
	if (!(t < 0 || t >= n)) {
		var r, i = e.charCodeAt(t);
		return i < 55296 || i > 56319 || t + 1 === n || (r = e.charCodeAt(t + 1)) < 56320 || r > 57343 ? i : r - 56320 + (i - 55296 << 10) + 65536;
	}
}, Sh = ph ? function(e) {
	return e.trimStart();
} : function(e) {
	return e.replace(sh, "");
}, Ch = mh ? function(e) {
	return e.trimEnd();
} : function(e) {
	return e.replace(ch, "");
};
function wh(e, t) {
	return new RegExp(e, t);
}
if (gh) {
	var Th = wh("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
	_h = function(e, t) {
		return Th.lastIndex = t, Th.exec(e)[1] ?? "";
	};
} else _h = function(e, t) {
	for (var n = [];;) {
		var r = xh(e, t);
		if (r === void 0 || kh(r) || Ah(r)) break;
		n.push(r), t += r >= 65536 ? 2 : 1;
	}
	return yh.apply(void 0, n);
};
var Eh = function() {
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
					if (i === 60 && !this.ignoreTag && Dh(this.peek() || 0)) {
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
				if (this.isEOF() || !Dh(this.char())) return this.error(K.INVALID_TAG, J(o, this.clonePosition()));
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
		for (this.bump(); !this.isEOF() && Oh(this.char());) this.bump();
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
		return this.isEOF() || this.char() !== 60 || !this.ignoreTag && (Dh(e = this.peek() || 0) || e === 47) ? null : (this.bump(), "<");
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
		return yh.apply(void 0, t);
	}, e.prototype.tryParseUnquoted = function(e, t) {
		if (this.isEOF()) return null;
		var n = this.char();
		return n === 60 || n === 123 || n === 35 && (t === "plural" || t === "selectordinal") || n === 125 && e > 0 ? null : (this.bump(), yh(n));
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
		var e = this.clonePosition(), t = this.offset(), n = _h(this.message, t), r = t + n.length;
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
					if ((f = Ch(g.val)).length === 0) return this.error(K.EXPECT_ARGUMENT_STYLE, J(this.clonePosition(), this.clonePosition()));
					s = {
						style: f,
						styleLocation: J(c, this.clonePosition())
					};
				}
				if ((_ = this.tryParseArgumentClose(r)).err) return _;
				var l = J(r, this.clonePosition());
				if (s && vh(s?.style, "::", 0)) {
					var u = Sh(s.style.slice(2));
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
								var o = 1 + (1 & a), s = a < 2 ? 1 : 3 + (a >> 1), c = oh(t);
								for (c != "H" && c != "k" || (s = 0); s-- > 0;) n += "a";
								for (; o-- > 0;) n = c + n;
							} else n += i === "J" ? "H" : i;
						}
						return n;
					}(u, this.locale));
					var f = {
						type: Um.dateTime,
						pattern: d,
						location: s.styleLocation,
						parsedOptions: this.shouldParseSkeletons ? qm(d) : {}
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
						options: bh(v.val),
						location: y
					},
					err: null
				} : {
					val: {
						type: q.plural,
						value: n,
						options: bh(v.val),
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
				for (var t = [], n = 0, r = e.split(Jm).filter(function(e) {
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
				type: Um.number,
				tokens: n,
				location: t,
				parsedOptions: this.shouldParseSkeletons ? ih(n) : {}
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
		return i ? hh(a *= n) ? {
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
		var t = xh(this.message, e);
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
		if (vh(this.message, e, this.offset())) {
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
		for (; !this.isEOF() && kh(this.char());) this.bump();
	}, e.prototype.peek = function() {
		if (this.isEOF()) return null;
		var e = this.char(), t = this.offset();
		return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null;
	}, e;
}();
function Dh(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Oh(e) {
	return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function kh(e) {
	return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function Ah(e) {
	return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function jh(e) {
	e.forEach(function(e) {
		if (delete e.location, function(e) {
			return e.type === q.select;
		}(e) || function(e) {
			return e.type === q.plural;
		}(e)) for (var t in e.options) delete e.options[t].location, jh(e.options[t].value);
		else (function(e) {
			return e.type === q.number;
		})(e) && function(e) {
			return !(!e || typeof e != "object" || e.type !== Um.number);
		}(e.style) ? delete e.style.location : !function(e) {
			return e.type === q.date;
		}(e) && !function(e) {
			return e.type === q.time;
		}(e) || !function(e) {
			return !(!e || typeof e != "object" || e.type !== Um.dateTime);
		}(e.style) ? function(e) {
			return e.type === q.tag;
		}(e) && jh(e.children) : delete e.style.location;
	});
}
function Mh(e) {
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
var Nh, Y = {};
function Ph() {
	if (Nh) return Y;
	var e, t;
	return Nh = 1, Object.defineProperty(Y, "__esModule", { value: !0 }), Y.SKELETON_TYPE = Y.TYPE = void 0, Y.isLiteralElement = function(t) {
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
var Fh, Ih = Ph(), Lh = {}, Rh = Mh(Wm), zh = function() {
	if (Fh) return Lh;
	Fh = 1, Object.defineProperty(Lh, "__esModule", { value: !0 }), Lh.printAST = n, Lh.doPrintAST = r, Lh.printDateTimeSkeleton = o;
	var e = Rh, t = Ph();
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
	return Lh;
}(), Bh = {
	variable: "v",
	number: "n",
	datetime: "d",
	currency: "c",
	"relative-time": "rt"
};
function Vh(e) {
	return Bh[e];
}
function Hh({ icuString: e, shouldVisit: t, visitor: n, options: { recurseIntoVisited: r = !0, ...i } }) {
	let a = function(e, t) {
		t === void 0 && (t = {}), t = G({
			shouldParseSkeletons: !0,
			requiresOtherClause: !0
		}, t);
		var n = new Eh(e, t).parse();
		if (n.err) {
			var r = SyntaxError(K[n.err.kind]);
			throw r.location = n.err.location, r.originalMessage = n.err.message, r;
		}
		return t != null && t.captureLocation || jh(n.val), n.val;
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
var Uh = "_gt_", Wh = RegExp(`^${Uh}\\d+$`), Gh = RegExp(`^${Uh}$`);
function Kh(e) {
	return e.type === Ih.TYPE.select && Wh.test(e.value) && !!e.options.other && (e.options.other.value.length === 0 || e.options.other.value.length > 0 && e.options.other.value[0]?.type === Ih.TYPE.literal);
}
function qh(e) {
	return e.type === Ih.TYPE.select && Gh.test(e.value) && !!e.options.other && (e.options.other.value.length === 0 || e.options.other.value.length > 0 && e.options.other.value[0]?.type === Ih.TYPE.literal);
}
function Jh(e) {
	if (!e.includes("_gt_")) return e;
	let t = [];
	Hh({
		icuString: e,
		shouldVisit: qh,
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
function Yh(e) {
	if (!e.includes("_gt_")) return {};
	let t = 1, n = {};
	return Hh({
		icuString: e,
		shouldVisit: qh,
		visitor: function(e) {
			n[e.value + t] = e.options.other.value.length ? e.options.other.value[0]?.value : "", t += 1;
		},
		options: { recurseIntoVisited: !1 }
	}), n;
}
function Xh(e) {
	return e.includes("_gt_") ? zh.printAST(Hh({
		icuString: e,
		shouldVisit: Kh,
		visitor: function(e) {
			e.type = Ih.TYPE.argument, delete e.options;
		},
		options: { recurseIntoVisited: !1 }
	})) : e;
}
function X(e, t) {
	if (e == null) throw Error("Cannot index into an undefined dictionary");
	return e[t];
}
function Zh(e, t, n) {
	e[t] = n;
}
var Z = "@generaltranslation/react-core", Qh = `${Z} Error: Production environments cannot include an api key.`, $h = `${Z} Error: Fetching batched translations failed`, eg = (e, t) => e ? `${Z} Error: Translation failed for id: ${e}, hash: ${t} ` : `${Z} Error: Translation failed for hash: ${t}`, tg = (e, t) => `${Z} Error: error rendering string ${t ? `for id: "${t}"` : ""} original message: "${e}"`, ng = (e, t, n = "tx") => `${Z} Error: string translation error. ${n}("${e}")${t ? ` with id "${t}"` : ""} could not locate translation.`, rg = (e) => `${Z} Error: Dictionary subtree not found for id: "${e}"`, ig = (e) => `${Z} Error: Invalid ICU string dictionary entry found for id: "${e}"`, ag = `${Z} Warning: Translation cloud services require a project ID! Find yours at generaltranslation.com/dashboard.`, og = (e) => `${Z} Warning: No valid dictionary entry found for id: "${e}"`, sg = `${Z} Warning: A development API key is required for runtime translation!  Find your development API key: generaltranslation.com/dashboard.  (Or, disable this warning message by setting runtimeUrl to an empty string which disables runtime translation.)`, cg = `${Z} Warning: Runtime translation timed out.`, lg = `${Z} Warning: No dictionary was found. Ensure you are either passing your dictionary to the <GTProvider>.`;
function ug(e) {
	return /* @__PURE__ */ Error(`${Z}: The ${e} function was not overridden. This is likely the result of importing directly from "generaltranslation/react-core".`);
}
function dg({}) {
	throw ug("readAuthFromEnv");
}
var fg = {
	pl: "placeholder",
	ti: "title",
	alt: "alt",
	arl: "aria-label",
	arb: "aria-labelledby",
	ard: "aria-describedby"
}, pg = (e) => {
	if (!e) return "";
	let { type: t, props: n } = e;
	if (t && typeof t == "function") {
		if ("displayName" in t && typeof t.displayName == "string" && t.displayName) return t.displayName;
		if ("name" in t && typeof t.name == "string" && t.name) return t.name;
	}
	return t && typeof t == "string" ? t : n.href ? "a" : n["data-_gt"]?.id ? `C${n["data-_gt"].id}` : "function";
}, mg = (e) => {
	let { props: t } = e, n = { t: pg(e) };
	if (t["data-_gt"]) {
		let e = t["data-_gt"], r = e.transformation;
		if (r === "variable") {
			let n = e.variableType || "variable", r = Pp(t, n), i = Vh(n);
			return {
				i: e.id,
				k: r,
				v: i
			};
		}
		n.i = e.id, n.d = ((e, t, n) => {
			let r = Object.entries(fg).reduce((e, [n, r]) => (t[r] && (e[n] = t[r]), e), {});
			if (e === "plural" && n) {
				let e = {};
				Object.entries(n).forEach(([t, n]) => {
					e[t] = gg(n);
				}), r = {
					...r,
					b: e,
					t: "p"
				};
			}
			if (e === "branch" && n) {
				let e = {};
				Object.entries(n).forEach(([t, n]) => {
					e[t] = gg(n);
				}), r = {
					...r,
					b: e,
					t: "b"
				};
			}
			return Object.keys(r).length ? r : void 0;
		})(r, t, e.branches);
		let i = Object.entries(fg).reduce((e, [n, r]) => (t[r] && (e[n] = t[r]), e), {});
		if (r === "plural" && e.branches) {
			let t = {};
			Object.entries(e.branches).forEach(([e, n]) => {
				t[e] = gg(n);
			}), i = {
				...i,
				b: t,
				t: "p"
			};
		}
		if (r === "branch" && e.branches) {
			let t = {};
			Object.entries(e.branches).forEach(([e, n]) => {
				t[e] = gg(n);
			}), i = {
				...i,
				b: t,
				t: "b"
			};
		}
		n.d = Object.keys(i).length ? i : void 0;
	}
	return t.children && (n.c = gg(t.children)), n;
}, hg = (e) => {
	return n = e, t.isValidElement(n) ? mg(e) : typeof e == "number" ? e.toString() : e;
	var n;
};
function gg(e) {
	return Array.isArray(e) ? e.map(hg) : hg(e);
}
function _g(e) {
	if (typeof e == "string") return !0;
	if (Array.isArray(e)) {
		if (typeof e?.[0] != "string") return !1;
		let t = e?.[1];
		if (t === void 0 || t && typeof t == "object") return !0;
	}
	return !1;
}
function vg(e, t) {
	let n = e, r = t.split(".");
	for (let e of r) {
		if (typeof n != "object" && !Array.isArray(n)) return;
		n = X(n, e);
	}
	return n;
}
function yg(e) {
	if (Array.isArray(e)) {
		if (e.length === 1) return { entry: e[0] };
		if (e.length === 2) return {
			entry: e[0],
			metadata: e[1]
		};
	}
	return { entry: e };
}
var bg = (e = "production") => ({
	method: "default",
	timeout: e === "development" ? 8e3 : 12e3
});
function xg(e) {
	return e !== void 0 && (typeof e == "string" || !!Array.isArray(e) && (e.length === 1 || e.length === 2) && typeof e[0] == "string" && (e.length !== 2 || typeof e[1] == "object" && e[1] !== null && ("$context" in e[1] || "$maxChars" in e[1] || "$_hash" in e[1])));
}
var Sg = (e) => typeof e == "string" || Array.isArray(e), Cg = (e) => typeof e == "object" && !!e && !Array.isArray(e);
function wg(e, t) {
	if (Array.isArray(e)) return e.map((e, n) => xg(e) ? t[n] : wg(e, t[n]));
	let n = {
		...Object.fromEntries(Object.entries(e).filter(([, e]) => Sg(e))),
		...Object.fromEntries(Object.entries(t).filter(([, e]) => Sg(e)))
	}, r = Object.entries(e).filter(([, e]) => Cg(e)).map(([e]) => e), i = Object.entries(t).filter(([, e]) => Cg(e)).map(([e]) => e), a = /* @__PURE__ */ new Set([...r, ...i]);
	for (let r of a) n[r] = wg(X(e, r) || {}, X(t, r) || {});
	return n;
}
function Tg({ dictionary: e, id: t }) {
	if (t === "") return e;
	let n = e, r = t.split(".");
	for (let e of r) n = X(n, e);
	return n;
}
var Eg = [
	"constructor",
	"prototype",
	"__proto__"
];
function Dg(e, t, n, r) {
	if (xg(t)) return e;
	let i = n.split(".");
	i.forEach((e) => {
		if (function(e) {
			return !!Eg.includes(e);
		}(e)) throw Error(`Invalid key: ${e}`);
	}), t ||= {};
	for (let e of i.slice(0, -1)) X(t, e) ?? Zh(t, e, Array.isArray(X(r, e)) ? [] : {}), t = X(t, e), r = X(r, e);
	Zh(t, i[i.length - 1], e);
}
function Og(e) {
	let t = {};
	return Array.isArray(e) && (t = []), Object.entries(e).forEach(([e, n]) => {
		if (xg(n)) {
			let { entry: r } = yg(n);
			Zh(t, e, r);
		} else Zh(t, e, Og(n));
	}), t;
}
function kg(e) {
	return function(e) {
		if (Wp(e), Yp) return e.toHex();
		let t = "";
		for (let n = 0; n < e.length; n++) t += Xp[e[n]];
		return t;
	}(sm(function(e) {
		if (typeof e != "string") throw TypeError("string expected");
		return new Uint8Array(new TextEncoder().encode(e));
	}(e))).slice(0, 16);
}
function Ag({ source: e, context: t, id: n, maxChars: r, dataFormat: i }, a = kg) {
	let o;
	return o = i === "JSX" ? Mg(e) : e, a(Hp({
		source: o,
		...n && { id: n },
		...t && { context: t },
		...r != null && { maxChars: Math.abs(r) },
		...i && { dataFormat: i }
	}));
}
var jg = (e) => {
	if (e && typeof e == "object") {
		let t = {};
		if ("c" in e && e.c && (t.c = Mg(e.c)), "d" in e) {
			let n = e?.d;
			n?.b && (t.b = Object.fromEntries(Object.entries(n.b).map(([e, t]) => [e, Mg(t)]))), n?.t && (t.t = n.t);
		}
		return Up(e) ? {
			k: e.k,
			...e.v && { v: e.v }
		} : t;
	}
	return e;
};
function Mg(e) {
	return Array.isArray(e) ? e.map(jg) : jg(e);
}
function Ng(e, t = "") {
	let n = !1;
	return Object.entries(e).forEach(([r, i]) => {
		let a = t ? `${t}.${r}` : r;
		if (xg(i)) {
			let { entry: t, metadata: o } = yg(i);
			o?.$_hash || (o ||= {}, o.$_hash = Ag({
				source: Jh(t),
				...o?.$context && { context: o.$context },
				...o?.$maxChars != null && { maxChars: Math.abs(o.$maxChars) },
				id: a,
				dataFormat: "ICU"
			}), Zh(e, r, [t, o]), n = !0);
		} else {
			let { updateDictionary: e } = Ng(i, a);
			n ||= e;
		}
	}), {
		dictionary: e,
		updateDictionary: n
	};
}
function Pg(e, t, n) {
	let r = Tg({
		dictionary: e,
		id: n
	});
	if (!r) throw Error(rg(n));
	if (xg(r)) throw Error(`${Z} Error: Cannot inject and merge a dictionary entry`);
	return function(e, t, n) {
		let r = vg(e, n);
		if (!r) throw Error(rg(n));
		if (xg(r)) throw Error(`${Z} Error: Cannot inject and merge a dictionary entry`);
		let i = n.split("."), a = i.slice(0, -1), o = i[i.length - 1], s = e;
		return a.forEach((e) => {
			s = X(s, e);
		}), Zh(s, o, t), e;
	}(e, wg(r, t), n);
}
function Fg(e, t, n = "") {
	let r = [];
	return Object.entries(e).forEach(([e, i]) => {
		let a = n ? `${n}.${e}` : e;
		if (xg(i)) {
			let { entry: n, metadata: o } = yg(i);
			X(t, e) || r.push({
				source: n,
				metadata: {
					$id: a,
					$context: o?.$context,
					$maxChars: o?.$maxChars,
					$_hash: o?.$_hash || ""
				}
			});
		} else r.push(...Fg(i, X(t, e) || (Array.isArray(i) ? [] : {}), a));
	}), r;
}
function Ig(e) {
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
function Lg(e) {
	return typeof e == "string" && e.lastIndexOf(":") !== -1 ? e.slice(0, e.lastIndexOf(":")) : e;
}
var Rg = o(void 0);
globalThis.__DANGEROUS_USE_REGISTRY__ ?? (globalThis.__DANGEROUS_USE_REGISTRY__ = /* @__PURE__ */ new Map());
try {
	Function("o", "k", "return o[k]")(e, "use");
} catch {}
function zg({ gt: e, locale: t, versionId: n, defaultLocale: r, runtimeUrl: i, renderSettings: a, setTranslations: o, environment: s, ...c }) {
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
					let e = eg(n, t);
					console.warn(`${e} ${r.error || "An upstream error occurred."}`), o[t] = null, s.set(t, null);
				} else {
					let e = eg(n, t);
					console.warn(`${e} Unknown response format.`, r), o[t] = null, s.set(t, null);
				}
			}
		} catch (e) {
			e?.name === "AbortError" ? console.warn(cg) : console.warn($h, e), a.forEach((e) => {
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
function Bg({ gt: e, translations: t, locale: n, defaultLocale: r, translationRequired: i, developmentApiEnabled: a, registerIcuForTranslation: o, environment: s }) {
	function c({ message: t, variables: n, locales: r, fallback: i, id: a, maxChars: o, format: l }) {
		try {
			let a = Yh(i || ""), s = e.formatMessage(Object.keys(a).length ? Xh(t) : t, {
				locales: r,
				variables: {
					...n,
					...a,
					[Uh]: "other"
				},
				dataFormat: l
			});
			return e.formatCutoff(s, { maxChars: o });
		} catch (l) {
			if (s === "production") console.warn(((e, t) => `${Z} Warning: failed to render string ${t ? `for id: "${t}"` : ""} original message: "${e}"`)(t, a), "Error: ", l);
			else {
				if (!i) throw Error(`${tg(t, a)} Error: ${l}`);
				console.error(tg(t, a), "Error: ", l);
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
			calculateHash: () => Ag({
				source: Jh(e),
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
			source: Jh(e),
			targetLocale: n,
			metadata: {
				...f && { context: f },
				...d && { id: d },
				...p != null && { maxChars: p },
				hash: v || ""
			}
		}), g(e, [r])) : (console.warn(ng(e, d, "gt")), g(e, [r])) : s?.[v] ? g(s?.[v], [n, r], e) : g(e, [r]);
	};
	return {
		_gtFunction: d,
		_mFunction: (e, s = {}, l) => {
			if (!e) return e;
			let u = Ig(e);
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
				source: Jh(p),
				targetLocale: n,
				metadata: {
					...m && { context: m },
					..._ != null && { maxChars: _ },
					hash: f
				}
			}), b(p, [r])) : l?.[f] ? b(l?.[f], [n, r], p) : b(p, [r]) : (console.warn(ng(p, Lg(e), "m")), b(p, [r]));
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
					source: Jh(e),
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
function Vg(e, t, n, r, i, a, o, s, c, u, d) {
	return l((s, l = {}) => {
		if (!t) return "";
		let f = vg(t, s);
		if (!f) return console.warn(og(s)), "";
		if (!_g(f)) return console.warn(((e) => `${Z} Warning: Invalid dictionary entry found for id: "${e}"`)(s)), "";
		let { entry: p, metadata: m } = yg(f);
		if (!p || typeof p != "string") return "";
		let { $format: h, ...g } = l, _ = (t, n, r) => {
			try {
				let i = Yh(r || ""), a = e.formatMessage(Object.keys(i).length ? Xh(t) : t, {
					locales: n,
					variables: {
						...g,
						...i,
						[Uh]: "other"
					},
					dataFormat: h
				});
				return e.formatCutoff(a, { maxChars: m?.$maxChars ?? l.$maxChars });
			} catch (i) {
				if (d === "production") console.warn(((e) => `${Z} Warning: Invalid ICU string dictionary entry found for id: "${e}"`)(s), "Error: ", i);
				else {
					if (!r) throw Error(`${ig(s)} Error: ${i}`);
					console.error(ig(s), "Error: ", i);
				}
				return r ? _(r, n) : e.formatCutoff(t, { maxChars: m?.$maxChars ?? l.$maxChars });
			}
		};
		if (!o) return _(p, [a]);
		let v = vg(n || {}, s);
		if (v && _g(v)) {
			let { entry: e } = yg(v);
			return _(e, [i, a]);
		}
		let y = r?.[s], b = "", x = () => Ag({
			source: Jh(p),
			...m?.$context && { context: m.$context },
			...m?.$maxChars != null && { maxChars: Math.abs(m.$maxChars) },
			id: s,
			dataFormat: "ICU"
		});
		return y ||= (b = x(), r?.[b]), y ? _(y, [i, a], p) : (y === null || c && u({
			source: Jh(p),
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
function Hg({ _locale: e, defaultLocale: t, locales: n, ssr: r, localeCookieName: i, customMapping: a, useDetermineLocale: o, enableI18n: s, reloadOnLocaleUpdate: c }) {
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
		let e = Xu(t, u, l, a), n = e && $u(t, u);
		if (!a) {
			let e = [];
			if (l.forEach((t) => {
				$l(t) || e.push(t);
			}), e.length) throw Error(((e) => `${Z} Error: Invalid locale codes in your configuration. Specify a list of valid locales or use "customMapping" to define aliases for the following invalid locales: ${e.join(", ")}.`)(e));
		}
		if (a) {
			let e = [];
			if (l.forEach((t) => {
				$l(t, a) || e.push(t);
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
function Ug({ devApiKey: e, projectId: t, runtimeUrl: n, loadTranslationsType: r, cacheUrl: i, locales: a, environment: o }) {
	d(() => {
		if (o === "production" && e) throw Error(Qh);
		if (r === "custom" || !i && !n || t || o !== "development" || console.warn(ag), t && n && r !== "custom" && !e && o === "development" && console.warn(sg), n === Bp || i === zp && r === "default") {
			let e = a.filter((e) => !Mp(e));
			e.length && console.warn(((e) => `${Z} Warning: The following locales are currently unsupported by our service: ${e.map((e) => {
				let { name: t } = Yu(e);
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
async function Wg(e, t) {
	let n = Array.from(/* @__PURE__ */ new Set([e, Yu(e).languageCode]));
	for (let e of n) try {
		let n = await t(e);
		if (n) return n;
	} catch {}
	console.warn(lg);
}
function Gg({ _translations: e, translationRequired: t, loadTranslationsType: n, loadTranslations: r, locale: i, cacheUrl: a, projectId: o, _versionId: s, gt: c }) {
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
						cacheUrl: a || zp,
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
function Kg(e, t, n, r, i, a, o, s, c, u, d, f) {
	return l((o, c, l = {}) => {
		if (c === "") throw Error(`${Z} Error: You cannot provide an empty id to t.obj()`);
		let p = Tg({
			dictionary: e,
			id: c
		});
		if (!p) return console.warn(og(c)), {};
		if (xg(p)) return f(o, l);
		if (!s) return Og(p);
		let m = function({ dictionary: e, id: t, sourceDictionary: n }) {
			if (t === "") return e;
			let r = e, i = n, a = t.split(".");
			for (let e of a) X(r, e) === void 0 && (Array.isArray(X(i, e)) ? Zh(r, e, []) : Zh(r, e, {})), r = X(r, e);
			return r;
		}({
			dictionary: t,
			id: c,
			sourceDictionary: t
		}), { dictionary: h, updateDictionary: g } = Ng(structuredClone(p), c), _ = Fg(h, m, c), { dictionary: v, updateDictionary: y } = function(e, t, n, r, i = "") {
			let a = !1, o = i ? i.split(".") : [];
			return r.forEach(({ metadata: r }) => {
				let { $_hash: i, $id: s } = r, c = o.length > 0 ? s.split(".").slice(o.length).join(".") : s, l = vg(t, c), u;
				xg(l) && (u = yg(l).entry);
				let d = n[i] || u;
				d && (Dg(d, t, c, e), a = !0);
			}), {
				dictionary: t,
				updateDictionary: a
			};
		}(h, structuredClone(m), i || {}, _, c), b = function(e, t, n, r = "") {
			let i = r ? r.split(".") : [];
			return n.forEach(({ source: n, metadata: r }) => {
				let { $id: a } = r, o = i.length > 0 ? a.split(".").slice(i.length).join(".") : a, s = vg(t, o), c;
				xg(s) && (c = yg(s).entry), Dg(c || n, t, o, e);
			}), t;
		}(h, structuredClone(v), _, c);
		return u && Promise.allSettled(_.map(async (e) => {
			let { source: t, metadata: n } = e, r = n?.$id;
			return [r, await d({
				source: Jh(t),
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
					Dg(r, e, t, n);
				}), e;
			}(t, n, e));
		}), g && setTimeout(() => {
			n((e) => Pg(e, h, c));
		}, 0), y && setTimeout(() => {
			r((e) => wg(e, v));
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
function qg({ enableI18n: e }) {
	let [t] = m(e);
	return { enableI18n: t };
}
function Jg() {
	throw ug("isSSREnabled");
}
function Yg({}) {
	throw ug("useDetermineLocale");
}
function Xg({}) {
	throw ug("useRegionState");
}
function Zg({ children: e, config: t, environment: n = "production", projectId: r = t?.projectId || "", devApiKey: a = t?.devApiKey || "", _versionId: o = t?._versionId, dictionary: s = t?.dictionary || {}, locales: c = t?.locales || [], defaultLocale: l = t?.defaultLocale || Fp, cacheUrl: u = t?.cacheUrl || zp, runtimeUrl: p = t?.runtimeUrl || Bp, renderSettings: h = t?.renderSettings || bg(n), ssr: _ = t?.ssr || Jg(), localeCookieName: v = t?.localeCookieName || "generaltranslation.locale", locale: y = "", region: b, loadDictionary: x, loadTranslations: S, fallback: C, translations: ee = null, customMapping: te = t?.customMapping, enableI18n: w = t?.enableI18n === void 0 || t.enableI18n, enableI18nLoaded: T, reloadOnLocaleUpdate: ne, useEnableI18n: re = qg, readAuthFromEnv: ie = dg, useDetermineLocale: ae = Yg, useRegionState: oe = Xg, ...se }) {
	y &&= Qu(y, te);
	let { projectId: E, devApiKey: ce } = ie({
		projectId: r,
		devApiKey: a
	}), { enableI18n: D } = re({
		enableI18n: w,
		enableI18nLoaded: T,
		enableI18nCookieName: "generaltranslation.enable-i18n",
		ssr: _
	}), { locale: le, setLocale: ue, locales: de, translationRequired: fe, dialectTranslationRequired: pe } = Hg({
		_locale: y,
		defaultLocale: l,
		locales: c,
		ssr: _,
		localeCookieName: v,
		customMapping: te,
		useDetermineLocale: ae,
		enableI18n: D,
		reloadOnLocaleUpdate: ne
	}), { region: me, setRegion: he } = oe({
		_region: b,
		ssr: _,
		regionCookieName: "generaltranslation.region"
	}), ge = f(() => new Ju({
		devApiKey: ce,
		sourceLocale: l,
		targetLocale: le,
		projectId: E,
		baseUrl: p || void 0,
		customMapping: te
	}), [
		ce,
		l,
		E,
		p,
		te
	]), _e = f(() => (S ? "custom" : u && E && "default") || "disabled", [
		S,
		u,
		E
	]), { dictionary: ve, setDictionary: ye, dictionaryTranslations: be, setDictionaryTranslations: xe } = function({ _dictionary: e, _dictionaryTranslations: t = {}, loadDictionary: n, locale: r, defaultLocale: i }) {
		let [a, o] = m(e), [s, c] = m(t);
		return d(() => {
			if (!n) return;
			let e = !0;
			return (async () => {
				let t = await Wg(i, n) || {}, a = await Wg(r, n) || {};
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
		locale: le,
		defaultLocale: l
	});
	Ug({
		devApiKey: ce,
		projectId: E,
		runtimeUrl: p,
		loadTranslationsType: _e,
		cacheUrl: u,
		locales: c,
		environment: n
	});
	let { translations: Se, setTranslations: Ce } = Gg({
		_translations: ee,
		translationRequired: fe,
		loadTranslationsType: _e,
		loadTranslations: S,
		locale: le,
		cacheUrl: u,
		projectId: E,
		_versionId: o,
		gt: ge
	}), { registerIcuForTranslation: we, registerJsxForTranslation: Te, developmentApiEnabled: Ee } = zg({
		gt: ge,
		locale: le,
		versionId: o,
		defaultLocale: l,
		runtimeUrl: p,
		renderSettings: h,
		setTranslations: Ce,
		environment: n,
		...se
	}), { _gtFunction: De, _mFunction: Oe, _filterMessagesForPreload: ke, _preloadMessages: Ae } = Bg({
		gt: ge,
		translations: Se,
		locale: le,
		defaultLocale: l,
		translationRequired: fe,
		developmentApiEnabled: Ee,
		registerIcuForTranslation: we,
		environment: n
	}), je = Vg(ge, ve, be, Se, le, l, fe, pe, Ee, we, n), Me = Kg(ve || {}, be || {}, ye, xe, Se, le, l, fe, pe, Ee, we, je), Ne = !(fe && !Se || !le);
	return g(Rg.Provider, {
		value: {
			gt: ge,
			registerIcuForTranslation: we,
			registerJsxForTranslation: Te,
			_gtFunction: De,
			_mFunction: Oe,
			_filterMessagesForPreload: ke,
			_preloadMessages: Ae,
			_dictionaryFunction: je,
			_dictionaryObjFunction: Me,
			developmentApiEnabled: Ee,
			locale: le,
			locales: de,
			setLocale: ue,
			defaultLocale: l,
			region: me,
			setRegion: he,
			translations: Se,
			translationRequired: fe,
			dialectTranslationRequired: pe,
			projectId: E,
			renderSettings: h,
			_versionId: o
		},
		children: g(i, {
			fallback: C,
			children: Ne ? e : C
		})
	});
}
function Qg({ projectId: e, devApiKey: t }) {
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
function $g({ _region: e, regionCookieName: t }) {
	let n = typeof document < "u" ? document.cookie.split("; ").find((e) => e.startsWith(`${t}=`))?.split("=")[1] : void 0, r = e || n;
	return n && n !== r && typeof document < "u" && (document.cookie = `${t}=${r};path=/`), r;
}
function e_({ _region: e, ssr: t, regionCookieName: n }) {
	let [r, i] = m(t ? void 0 : $g({
		_region: e,
		regionCookieName: n
	}));
	return d(() => {
		i($g({
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
function t_({ enableI18n: e, enableI18nCookieName: t, enableI18nLoaded: n, ssr: r }) {
	let i = n !== void 0, a = p(!0), [o, s] = m(function({ _enableI18n: e, asyncEnabled: t, enableI18nCookieName: n, ssr: r }) {
		if (!t || r) return e;
		let i = n_(n);
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
			let e = n_(t);
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
function n_(e) {
	if (typeof document > "u") return null;
	let t = document.cookie.split("; ").find((t) => t.startsWith(`${e}=`))?.split("=")[1];
	return t === "true" || t !== "false" && null;
}
var r_ = function(e, t) {
	return r_ = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	}, r_(e, t);
};
function i_(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	function n() {
		this.constructor = e;
	}
	r_(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var a_ = function() {
	return a_ = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, a_.apply(this, arguments);
};
function o_(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") {
		var i = 0;
		for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	}
	return n;
}
function s_(e, t, n, r) {
	var i, a = arguments.length, o = a < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
	return a > 3 && o && Object.defineProperty(t, n, o), o;
}
function c_(e, t) {
	return function(n, r) {
		t(n, r, e);
	};
}
function l_(e, t, n, r, i, a) {
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
function u_(e, t, n) {
	for (var r = arguments.length > 2, i = 0; i < t.length; i++) n = r ? t[i].call(e, n) : t[i].call(e);
	return r ? n : void 0;
}
function d_(e) {
	return typeof e == "symbol" ? e : `${e}`;
}
function f_(e, t, n) {
	return typeof t == "symbol" && (t = t.description ? `[${t.description}]` : ""), Object.defineProperty(e, "name", {
		configurable: !0,
		value: n ? `${n} ${t}` : t
	});
}
function p_(e, t) {
	if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, t);
}
function m_(e, t, n, r) {
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
function h_(e, t) {
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
var g_ = Object.create ? function(e, t, n, r) {
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
function __(e, t) {
	for (var n in e) n === "default" || Object.prototype.hasOwnProperty.call(t, n) || g_(t, e, n);
}
function v_(e) {
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
function y_(e, t) {
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
function b_() {
	for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(y_(arguments[t]));
	return e;
}
function x_() {
	for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
	var r = Array(e), i = 0;
	for (t = 0; t < n; t++) for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
	return r;
}
function S_(e, t, n) {
	if (n || arguments.length === 2) for (var r, i = 0, a = t.length; i < a; i++) !r && i in t || (r ||= Array.prototype.slice.call(t, 0, i), r[i] = t[i]);
	return e.concat(r || Array.prototype.slice.call(t));
}
function C_(e) {
	return this instanceof C_ ? (this.v = e, this) : new C_(e);
}
function w_(e, t, n) {
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
			(n = i[e](t)).value instanceof C_ ? Promise.resolve(n.value.v).then(c, l) : u(a[0][2], n);
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
function T_(e) {
	var t = {}, n;
	return r("next"), r("throw", function(e) {
		throw e;
	}), r("return"), t[Symbol.iterator] = function() {
		return this;
	}, t;
	function r(r, i) {
		t[r] = e[r] ? function(t) {
			return (n = !n) ? {
				value: C_(e[r](t)),
				done: !1
			} : i ? i(t) : t;
		} : i;
	}
}
function E_(e) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var t, n = e[Symbol.asyncIterator];
	return n ? n.call(e) : (e = v_(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
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
function D_(e, t) {
	return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
var O_ = Object.create ? function(e, t) {
	Object.defineProperty(e, "default", {
		enumerable: !0,
		value: t
	});
} : function(e, t) {
	e.default = t;
}, k_ = function(e) {
	return k_ = Object.getOwnPropertyNames || function(e) {
		var t = [];
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
		return t;
	}, k_(e);
};
function A_(e) {
	if (e && e.__esModule) return e;
	var t = {};
	if (e != null) for (var n = k_(e), r = 0; r < n.length; r++) n[r] !== "default" && g_(t, e, n[r]);
	return O_(t, e), t;
}
function j_(e) {
	return e && e.__esModule ? e : { default: e };
}
function M_(e, t, n, r) {
	if (n === "a" && !r) throw TypeError("Private accessor was defined without a getter");
	if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
	return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function N_(e, t, n, r, i) {
	if (r === "m") throw TypeError("Private method is not writable");
	if (r === "a" && !i) throw TypeError("Private accessor was defined without a setter");
	if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
	return r === "a" ? i.call(e, n) : i ? i.value = n : t.set(e, n), n;
}
function P_(e, t) {
	if (t === null || typeof t != "object" && typeof t != "function") throw TypeError("Cannot use 'in' operator on non-object");
	return typeof e == "function" ? t === e : e.has(t);
}
function F_(e, t, n) {
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
var I_ = typeof SuppressedError == "function" ? SuppressedError : function(e, t, n) {
	var r = Error(n);
	return r.name = "SuppressedError", r.error = e, r.suppressed = t, r;
};
function L_(e) {
	function t(t) {
		e.error = e.hasError ? new I_(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
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
function R_(e, t) {
	return typeof e == "string" && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, n, r, i, a) {
		return n ? t ? ".jsx" : ".js" : !r || i && a ? r + i + "." + a.toLowerCase() + "js" : e;
	}) : e;
}
var z_, B_, V_, H_, U_ = Object.freeze({
	__proto__: null,
	__addDisposableResource: F_,
	get __assign() {
		return a_;
	},
	__asyncDelegator: T_,
	__asyncGenerator: w_,
	__asyncValues: E_,
	__await: C_,
	__awaiter: m_,
	__classPrivateFieldGet: M_,
	__classPrivateFieldIn: P_,
	__classPrivateFieldSet: N_,
	__createBinding: g_,
	__decorate: s_,
	__disposeResources: L_,
	__esDecorate: l_,
	__exportStar: __,
	__extends: i_,
	__generator: h_,
	__importDefault: j_,
	__importStar: A_,
	__makeTemplateObject: D_,
	__metadata: p_,
	__param: c_,
	__propKey: d_,
	__read: y_,
	__rest: o_,
	__rewriteRelativeImportExtension: R_,
	__runInitializers: u_,
	__setFunctionName: f_,
	__spread: b_,
	__spreadArray: S_,
	__spreadArrays: x_,
	__values: v_,
	default: {
		__extends: i_,
		__assign: a_,
		__rest: o_,
		__decorate: s_,
		__param: c_,
		__esDecorate: l_,
		__runInitializers: u_,
		__propKey: d_,
		__setFunctionName: f_,
		__metadata: p_,
		__awaiter: m_,
		__generator: h_,
		__createBinding: g_,
		__exportStar: __,
		__values: v_,
		__read: y_,
		__spread: b_,
		__spreadArrays: x_,
		__spreadArray: S_,
		__await: C_,
		__asyncGenerator: w_,
		__asyncDelegator: T_,
		__asyncValues: E_,
		__makeTemplateObject: D_,
		__importStar: A_,
		__importDefault: j_,
		__classPrivateFieldGet: M_,
		__classPrivateFieldSet: N_,
		__classPrivateFieldIn: P_,
		__addDisposableResource: F_,
		__disposeResources: L_,
		__rewriteRelativeImportExtension: R_
	}
});
(function(e) {
	e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(z_ ||= {}), function(e) {
	e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
}(B_ ||= {}), function(e) {
	e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
}(V_ ||= {});
try {
	(H_ = (/* @__PURE__ */ RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu")).exec("a")) == null || H_[0];
} catch {}
function W_(e) {
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
var G_, Q = {};
function K_() {
	if (G_) return Q;
	var e, t;
	return G_ = 1, Object.defineProperty(Q, "__esModule", { value: !0 }), Q.SKELETON_TYPE = Q.TYPE = void 0, Q.isLiteralElement = function(t) {
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
K_();
var q_, J_ = {}, Y_ = W_(U_);
(function() {
	if (q_) return J_;
	q_ = 1, Object.defineProperty(J_, "__esModule", { value: !0 }), J_.printAST = n, J_.doPrintAST = r, J_.printDateTimeSkeleton = o;
	var e = Y_, t = K_();
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
function X_(e, t, n = "") {
	let r = (i = e) instanceof Uint8Array || ArrayBuffer.isView(i) && i.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in i && i.BYTES_PER_ELEMENT === 1;
	var i;
	let a = e?.length;
	if (!r || t !== void 0) {
		let t = (n && `"${n}" `) + "expected Uint8Array, got " + (r ? `length=${a}` : "type=" + typeof e);
		throw r ? RangeError(t) : TypeError(t);
	}
	return e;
}
function Z_(e, t = !0) {
	if (e.destroyed) throw Error("Hash instance has been destroyed");
	if (t && e.finished) throw Error("Hash#digest() has already been called");
}
function Q_(...e) {
	for (let t = 0; t < e.length; t++) e[t].fill(0);
}
function $_(e) {
	return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function ev(e, t) {
	return e << 32 - t | e >>> t;
}
typeof Uint8Array.from([]).toHex == "function" && Uint8Array.fromHex, Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function tv(e, t, n) {
	return e & t ^ ~e & n;
}
function nv(e, t, n) {
	return e & t ^ e & n ^ t & n;
}
var rv = class {
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
		this.blockLen = e, this.outputLen = t, this.padOffset = n, this.isLE = r, this.buffer = new Uint8Array(e), this.view = $_(this.buffer);
	}
	update(e) {
		Z_(this), X_(e);
		let { view: t, buffer: n, blockLen: r } = this, i = e.length;
		for (let a = 0; a < i;) {
			let o = Math.min(r - this.pos, i - a);
			if (o === r) {
				let t = $_(e);
				for (; r <= i - a; a += r) this.process(t, a);
				continue;
			}
			n.set(e.subarray(a, a + o), this.pos), this.pos += o, a += o, this.pos === r && (this.process(t, 0), this.pos = 0);
		}
		return this.length += e.length, this.roundClean(), this;
	}
	digestInto(e) {
		Z_(this), function(e, t) {
			X_(e, void 0, "digestInto() output");
			let n = t.outputLen;
			if (e.length < n) throw RangeError("\"digestInto() output\" expected to be of length >=" + n);
		}(e, this), this.finished = !0;
		let { buffer: t, view: n, blockLen: r, isLE: i } = this, { pos: a } = this;
		t[a++] = 128, Q_(this.buffer.subarray(a)), this.padOffset > r - a && (this.process(n, 0), a = 0);
		for (let e = a; e < r; e++) t[e] = 0;
		n.setBigUint64(r - 8, BigInt(8 * this.length), i), this.process(n, 0);
		let o = $_(e), s = this.outputLen;
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
}, iv = Uint32Array.from([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]), av = Uint32Array.from([
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
]), ov = /* @__PURE__ */ new Uint32Array(64), sv = class extends rv {
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
		for (let n = 0; n < 16; n++, t += 4) ov[n] = e.getUint32(t, !1);
		for (let e = 16; e < 64; e++) {
			let t = ov[e - 15], n = ov[e - 2], r = ev(t, 7) ^ ev(t, 18) ^ t >>> 3, i = ev(n, 17) ^ ev(n, 19) ^ n >>> 10;
			ov[e] = i + ov[e - 7] + r + ov[e - 16] | 0;
		}
		let { A: n, B: r, C: i, D: a, E: o, F: s, G: c, H: l } = this;
		for (let e = 0; e < 64; e++) {
			let t = l + (ev(o, 6) ^ ev(o, 11) ^ ev(o, 25)) + tv(o, s, c) + av[e] + ov[e] | 0, u = (ev(n, 2) ^ ev(n, 13) ^ ev(n, 22)) + nv(n, r, i) | 0;
			l = c, c = s, s = o, o = a + t | 0, a = i, i = r, r = n, n = t + u | 0;
		}
		n = n + this.A | 0, r = r + this.B | 0, i = i + this.C | 0, a = a + this.D | 0, o = o + this.E | 0, s = s + this.F | 0, c = c + this.G | 0, l = l + this.H | 0, this.set(n, r, i, a, o, s, c, l);
	}
	roundClean() {
		Q_(ov);
	}
	destroy() {
		this.destroyed = !0, this.set(0, 0, 0, 0, 0, 0, 0, 0), Q_(this.buffer);
	}
}, cv = class extends sv {
	A = 0 | iv[0];
	B = 0 | iv[1];
	C = 0 | iv[2];
	D = 0 | iv[3];
	E = 0 | iv[4];
	F = 0 | iv[5];
	G = 0 | iv[6];
	H = 0 | iv[7];
	constructor() {
		super(32);
	}
}, lv;
(function(e, t = {}) {
	let n = (t, n) => e(n).update(t).digest(), r = e(void 0);
	n.outputLen = r.outputLen, n.blockLen = r.blockLen, n.canXOF = r.canXOF, n.create = (t) => e(t), Object.assign(n, t), Object.freeze(n);
})(() => new cv(), (lv = 1, { oid: Uint8Array.from([
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
	lv
]) }));
var uv = function(e, t) {
	return uv = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
		e.__proto__ = t;
	} || function(e, t) {
		for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
	}, uv(e, t);
};
function dv(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
	function n() {
		this.constructor = e;
	}
	uv(e, t), e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var fv = function() {
	return fv = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, fv.apply(this, arguments);
};
function pv(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") {
		var i = 0;
		for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	}
	return n;
}
function mv(e, t, n, r) {
	var i, a = arguments.length, o = a < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(e, t, n, r);
	else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
	return a > 3 && o && Object.defineProperty(t, n, o), o;
}
function hv(e, t) {
	return function(n, r) {
		t(n, r, e);
	};
}
function gv(e, t, n, r, i, a) {
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
function _v(e, t, n) {
	for (var r = arguments.length > 2, i = 0; i < t.length; i++) n = r ? t[i].call(e, n) : t[i].call(e);
	return r ? n : void 0;
}
function vv(e) {
	return typeof e == "symbol" ? e : `${e}`;
}
function yv(e, t, n) {
	return typeof t == "symbol" && (t = t.description ? `[${t.description}]` : ""), Object.defineProperty(e, "name", {
		configurable: !0,
		value: n ? `${n} ${t}` : t
	});
}
function bv(e, t) {
	if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, t);
}
function xv(e, t, n, r) {
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
function Sv(e, t) {
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
var Cv = Object.create ? function(e, t, n, r) {
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
function wv(e, t) {
	for (var n in e) n === "default" || Object.prototype.hasOwnProperty.call(t, n) || Cv(t, e, n);
}
function Tv(e) {
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
function Ev(e, t) {
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
function Dv() {
	for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(Ev(arguments[t]));
	return e;
}
function Ov() {
	for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
	var r = Array(e), i = 0;
	for (t = 0; t < n; t++) for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
	return r;
}
function kv(e, t, n) {
	if (n || arguments.length === 2) for (var r, i = 0, a = t.length; i < a; i++) !r && i in t || (r ||= Array.prototype.slice.call(t, 0, i), r[i] = t[i]);
	return e.concat(r || Array.prototype.slice.call(t));
}
function Av(e) {
	return this instanceof Av ? (this.v = e, this) : new Av(e);
}
function jv(e, t, n) {
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
			(n = i[e](t)).value instanceof Av ? Promise.resolve(n.value.v).then(c, l) : u(a[0][2], n);
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
function Mv(e) {
	var t = {}, n;
	return r("next"), r("throw", function(e) {
		throw e;
	}), r("return"), t[Symbol.iterator] = function() {
		return this;
	}, t;
	function r(r, i) {
		t[r] = e[r] ? function(t) {
			return (n = !n) ? {
				value: Av(e[r](t)),
				done: !1
			} : i ? i(t) : t;
		} : i;
	}
}
function Nv(e) {
	if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
	var t, n = e[Symbol.asyncIterator];
	return n ? n.call(e) : (e = Tv(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
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
function Pv(e, t) {
	return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
var Fv = Object.create ? function(e, t) {
	Object.defineProperty(e, "default", {
		enumerable: !0,
		value: t
	});
} : function(e, t) {
	e.default = t;
}, Iv = function(e) {
	return Iv = Object.getOwnPropertyNames || function(e) {
		var t = [];
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
		return t;
	}, Iv(e);
};
function Lv(e) {
	if (e && e.__esModule) return e;
	var t = {};
	if (e != null) for (var n = Iv(e), r = 0; r < n.length; r++) n[r] !== "default" && Cv(t, e, n[r]);
	return Fv(t, e), t;
}
function Rv(e) {
	return e && e.__esModule ? e : { default: e };
}
function zv(e, t, n, r) {
	if (n === "a" && !r) throw TypeError("Private accessor was defined without a getter");
	if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
	return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function Bv(e, t, n, r, i) {
	if (r === "m") throw TypeError("Private method is not writable");
	if (r === "a" && !i) throw TypeError("Private accessor was defined without a setter");
	if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
	return r === "a" ? i.call(e, n) : i ? i.value = n : t.set(e, n), n;
}
function Vv(e, t) {
	if (t === null || typeof t != "object" && typeof t != "function") throw TypeError("Cannot use 'in' operator on non-object");
	return typeof e == "function" ? t === e : e.has(t);
}
function Hv(e, t, n) {
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
var Uv = typeof SuppressedError == "function" ? SuppressedError : function(e, t, n) {
	var r = Error(n);
	return r.name = "SuppressedError", r.error = e, r.suppressed = t, r;
};
function Wv(e) {
	function t(t) {
		e.error = e.hasError ? new Uv(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0;
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
function Gv(e, t) {
	return typeof e == "string" && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, n, r, i, a) {
		return n ? t ? ".jsx" : ".js" : !r || i && a ? r + i + "." + a.toLowerCase() + "js" : e;
	}) : e;
}
var Kv, qv, Jv, Yv, Xv = Object.freeze({
	__proto__: null,
	__addDisposableResource: Hv,
	get __assign() {
		return fv;
	},
	__asyncDelegator: Mv,
	__asyncGenerator: jv,
	__asyncValues: Nv,
	__await: Av,
	__awaiter: xv,
	__classPrivateFieldGet: zv,
	__classPrivateFieldIn: Vv,
	__classPrivateFieldSet: Bv,
	__createBinding: Cv,
	__decorate: mv,
	__disposeResources: Wv,
	__esDecorate: gv,
	__exportStar: wv,
	__extends: dv,
	__generator: Sv,
	__importDefault: Rv,
	__importStar: Lv,
	__makeTemplateObject: Pv,
	__metadata: bv,
	__param: hv,
	__propKey: vv,
	__read: Ev,
	__rest: pv,
	__rewriteRelativeImportExtension: Gv,
	__runInitializers: _v,
	__setFunctionName: yv,
	__spread: Dv,
	__spreadArray: kv,
	__spreadArrays: Ov,
	__values: Tv,
	default: {
		__extends: dv,
		__assign: fv,
		__rest: pv,
		__decorate: mv,
		__param: hv,
		__esDecorate: gv,
		__runInitializers: _v,
		__propKey: vv,
		__setFunctionName: yv,
		__metadata: bv,
		__awaiter: xv,
		__generator: Sv,
		__createBinding: Cv,
		__exportStar: wv,
		__values: Tv,
		__read: Ev,
		__spread: Dv,
		__spreadArrays: Ov,
		__spreadArray: kv,
		__await: Av,
		__asyncGenerator: jv,
		__asyncDelegator: Mv,
		__asyncValues: Nv,
		__makeTemplateObject: Pv,
		__importStar: Lv,
		__importDefault: Rv,
		__classPrivateFieldGet: zv,
		__classPrivateFieldSet: Bv,
		__classPrivateFieldIn: Vv,
		__addDisposableResource: Hv,
		__disposeResources: Wv,
		__rewriteRelativeImportExtension: Gv
	}
});
(function(e) {
	e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Kv ||= {}), function(e) {
	e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
}(qv ||= {}), function(e) {
	e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
}(Jv ||= {});
try {
	(Yv = function(e, t) {
		return new RegExp(e, t);
	}("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) == null || Yv[0];
} catch {}
var Zv, Qv, $ = {};
function $v() {
	return Zv || (Zv = 1, Object.defineProperty($, "__esModule", { value: !0 }), $.SKELETON_TYPE = $.TYPE = void 0, $.isLiteralElement = function(t) {
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
$v();
var ey = {}, ty = function(e) {
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
}(Xv);
(function() {
	if (Qv) return ey;
	Qv = 1, Object.defineProperty(ey, "__esModule", { value: !0 }), ey.printAST = n, ey.doPrintAST = r, ey.printDateTimeSkeleton = o;
	var e = ty, t = $v();
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
var ny = "gt-react";
function ry({ locale: e = "", defaultLocale: t = "en", locales: n = [], localeCookieName: r = "generaltranslation.locale", ssr: i = !0, customMapping: a, enableI18n: o, reloadOnLocaleUpdate: s = !1 }) {
	let c = f(() => Qu(e, a), [e, a]), l = f(() => n.map((e) => Qu(e, a)), [n, a]), [u, p] = m(() => o ? Qu(i ? c && Zu(c, l, a) || "" : iy({
		_locale: c,
		locale: c,
		locales: l,
		defaultLocale: t,
		localeCookieName: r,
		customMapping: a,
		enableI18n: o
	}), a) : t), [h, g] = function({ locale: e, locales: t, defaultLocale: n, localeCookieName: r, _setLocale: i, customMapping: a, enableI18n: o, reloadOnLocaleUpdate: s }) {
		e = Qu(e, a);
		let c = (r) => {
			if (!o) return n;
			if (r === e) return e;
			let s = Qu(Zu(r, t, a) || e || n, a);
			return s !== r && console.warn(((e, t, n = "@generaltranslation/react-core") => `${n} Warning: "${t}" is not a supported locale. Update supported locales in your dashboard or gt.config.json. Falling back to "${e}".`)(s, r, ny)), i(s), s;
		};
		return [(t) => {
			if (!o) return;
			t = Qu(t);
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
		let e = iy({
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
function iy({ _locale: e, locale: t, locales: n, defaultLocale: r, localeCookieName: i, customMapping: a, enableI18n: o }) {
	if (!o) return r;
	if (e && e === t && Zu(e, n, a) === t) return Qu(e, a);
	let s = typeof document < "u" ? document.cookie.split("; ").find((e) => e.startsWith(`${i}=`))?.split("=")[1] : void 0;
	s &&= Qu(s, a);
	let c = typeof navigator > "u" ? [] : navigator != null && navigator.languages ? navigator.languages : navigator != null && navigator.language ? [navigator.language] : navigator != null && navigator.userLanguage ? [navigator == null ? void 0 : navigator.userLanguage] : [];
	c = c.map((e) => Qu(e, a));
	let l = Zu([
		...e ? [e] : [],
		...s ? [s] : [],
		...c
	], n, a) || r;
	return l &&= Qu(l, a), s && s !== l && typeof document < "u" && (document.cookie = `${i}=${l};path=/`), l;
}
function ay(e) {
	return g(Zg, Object.assign({
		ssr: !(typeof process > "u" || !process.env.NEXT_RUNTIME) || (globalThis == null ? void 0 : globalThis.__NEXT_DATA__) !== void 0,
		environment: "development"
	}, e, {
		readAuthFromEnv: Qg,
		useDetermineLocale: ry,
		useRegionState: e_,
		useEnableI18n: t_
	}));
}
var oy = v().server(function({ defaultLocale: e, locales: t, customMapping: n }) {
	let r = [], i = y(Ap);
	if (i && r.push(i), process.env._GENERALTRANSLATION_IGNORE_BROWSER_LOCALES === "false") {
		let e = b("accept-language")?.split(",").map((e) => e.split(";")?.[0].trim()) || [];
		e && r.push(...e);
	}
	return r.length === 0 && process.env._GENERALTRANSLATION_IGNORE_BROWSER_LOCALES === "false" && console.warn("gt-tanstack-start(server): no locales could be determined for this request"), Zu(r, t, n) || e;
}).client(function({ defaultLocale: e, locales: t, customMapping: n }) {
	let r = [], i = document.cookie.split("; ").find((e) => e.startsWith("generaltranslation.locale="))?.split("=")[1];
	i && r.push(i);
	let a = navigator.language;
	return a && r.push(a), r.length === 0 && (console.warn("gt-tanstack-start(client): no locales could be determined for this request"), r.push(e)), Zu(r, t, n) || e;
}), sy = class extends cd {
	constructor({ defaultLocale: e, locales: t, customMapping: n } = {}) {
		super(), this.type = "tanstack-i18n-storage-adapter", this.defaultLocale = e, this.locales = t, this.customMapping = n;
	}
	setConfig(e) {
		this.defaultLocale ||= e.defaultLocale, this.locales ||= e.locales, this.customMapping ||= e.customMapping;
	}
	getItem(e) {
		if (e === "locale") return oy({
			defaultLocale: this.defaultLocale || "en",
			locales: this.locales || ["en"],
			customMapping: this.customMapping
		});
	}
	setItem(e, t) {}
	removeItem(e) {}
}, cy = class extends kd {
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
function ly(e) {
	Ld(new cy(Object.assign(Object.assign({}, e), { storeAdapter: new sy() })));
}
var uy = { exports: {} }, dy, fy, py = {};
function my() {
	return dy || (dy = 1, function() {
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
		py.Fragment = m, py.jsx = function(e, t, n) {
			var r = 1e4 > w.recentlyCreatedOwnerStacks++;
			return s(e, t, n, !1, r ? Error("react-stack-top-frame") : ae, r ? re(i(e)) : oe);
		}, py.jsxs = function(e, t, n) {
			var r = 1e4 > w.recentlyCreatedOwnerStacks++;
			return s(e, t, n, !0, r ? Error("react-stack-top-frame") : ae, r ? re(i(e)) : oe);
		};
	}()), py;
}
var hy = (fy || (fy = 1, uy.exports = my()), uy.exports);
function gy() {
	return typeof window > "u";
}
function _y() {
	return Id().getLocale();
}
function vy(e) {
	return e.locale ? e.locale : gy() ? _y() : void 0;
}
function yy() {
	let e = Id();
	if (!function(e) {
		return e instanceof cy;
	}(e)) throw Error("TanstackI18nManager not initialized. Invoke initializeGT() to initialize.");
	return e;
}
function by(e) {
	let t = yy().getProviderConfig();
	return hy.jsx(ay, Object.assign({ ssr: gy() }, t, e, {
		reloadOnLocaleUpdate: !0,
		locale: vy(e)
	}));
}
var xy = Object.assign({
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
async function Sy(e, t = ["shared"]) {
	let n = {};
	return await Promise.all(t.map(async (t) => {
		let r = xy[`./src/_gt/${e}/${t}.json`];
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
var Cy = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-scoped-dynamic/gt-react-app/scripts/Wrapper.tsx";
ly({
	...x,
	loadTranslations: Sy
});
function wy({ children: e }) {
	return _(by, {
		locale: "en",
		children: e
	}, void 0, !1, {
		fileName: Cy,
		lineNumber: 13,
		columnNumber: 10
	}, this);
}
var Ty = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-scoped-dynamic/gt-react-app/src/components/pages/settings/SettingsFooter.wrapper.tsx";
function Ey() {
	return _(wy, { children: _(_o, {}, void 0, !1, {
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
