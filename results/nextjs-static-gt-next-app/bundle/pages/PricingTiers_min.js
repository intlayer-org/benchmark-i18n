import e, { Children as t, Fragment as n, cloneElement as r, createContext as i, createElement as a, isValidElement as o, useCallback as s, useContext as c, useEffect as l, useLayoutEffect as u, useMemo as d, useRef as f, useState as p, useSyncExternalStore as m } from "react";
import { jsx as h } from "react/jsx-runtime";
import { Fragment as g, jsxDEV as _ } from "react/jsx-dev-runtime";
var v = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports);
function y() {
	return {
		projectId: process.env.NEXT_PUBLIC_GT_PROJECT_ID || process.env.GT_PROJECT_ID,
		apiKey: process.env.GT_API_KEY,
		devApiKey: process.env.NEXT_PUBLIC_GT_DEV_API_KEY || process.env.GT_DEV_API_KEY
	};
}
var b = class extends Error {
	constructor(e, t, n) {
		super(e), this.name = "ApiError", this.code = t, this.message = n;
	}
}, ee = 6e4;
function te(e) {
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
function ne(e) {
	if (!e) return "";
	let t = Array.isArray(e) ? e.join(", ") : e;
	return t.trim() ? te(`Details: ${t}`) : "";
}
function re(e) {
	if (e != null) return String(e);
}
function S({ source: e, severity: t, whatHappened: n, reassurance: r, why: i, fix: a, wayOut: o, details: s, docsUrl: c }) {
	let l = e ? t ? `${e} ${t}:` : `${e}:` : t ? `${t}:` : "", u = i ? `${x(n)} because ${x(i)}` : n, d = !!a && !!o && /^[a-z]/.test(x(o)), f = [
		u,
		r,
		d ? `${x(a)}, or ${x(o)}` : a,
		d ? void 0 : o,
		ne(s)
	].filter((e) => !!e).map(te);
	c && f.push(`Learn more: ${c}`);
	let p = f.join(" ");
	return l ? `${l} ${p}` : p;
}
var ie = "https://cdn.gtx.dev";
function ae(e) {
	return typeof e == "object" && !!e && "error" in e && typeof e.error == "string";
}
function oe(e) {
	return ae(e.error) || typeof e.error == "string";
}
function se(e) {
	if (e.data !== void 0) return e.data;
	if (e.response) {
		let t = ae(e.error) ? e.error.error : typeof e.error == "string" ? e.error : e.response.statusText;
		throw new b(t, e.response.status, t);
	}
	throw e.error;
}
var ce = (e) => e.client.post({
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
}), le = 3, ue = 500, de = 6e4, fe = /* @__PURE__ */ new Set([
	"GET",
	"HEAD",
	"OPTIONS",
	"PUT",
	"DELETE"
]), pe = 6e4;
function me({ fetch: e = globalThis.fetch, timeoutMs: t = pe } = {}) {
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
var he = (e) => new Promise((t) => setTimeout(t, e));
function ge(e) {
	if (!e) return;
	let t = Number(e.split(",")[0].split(";")[0].trim());
	return Number.isFinite(t) && t >= 0 ? t * 1e3 : void 0;
}
function _e(e) {
	let t = ge(e);
	if (t !== void 0) return t;
	if (!e) return;
	let n = Date.parse(e);
	return Number.isNaN(n) ? void 0 : Math.max(n - Date.now(), 0);
}
function ve(e, t, n) {
	return e?.status === 429 ? _e(e.headers.get("Retry-After")) ?? ge(e.headers.get("RateLimit-Reset")) ?? de : ue * (n === "linear" ? t + 1 : 2 ** t);
}
function ye({ fetch: e = globalThis.fetch, retryPolicy: t = "exponential" } = {}) {
	return async (n, r) => {
		let i = new Request(n, r), a = t === "none" ? 0 : le, o = fe.has(i.method);
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
			r?.body?.cancel(), await he(ve(r, n, t));
		}
		throw Error("Max retries exceeded");
	};
}
var be = { bodySerializer: (e) => JSON.stringify(e, (e, t) => typeof t == "bigint" ? t.toString() : t) }, xe = ({ onRequest: e, onSseError: t, onSseEvent: n, responseTransformer: r, responseValidator: i, sseDefaultRetryDelay: a, sseMaxRetryAttempts: o, sseMaxRetryDelay: s, sseSleepFn: c, url: l, ...u }) => {
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
}, Se = (e) => {
	switch (e) {
		case "label": return ".";
		case "matrix": return ";";
		case "simple": return ",";
		default: return "&";
	}
}, Ce = (e) => {
	switch (e) {
		case "form": return ",";
		case "pipeDelimited": return "|";
		case "spaceDelimited": return "%20";
		default: return ",";
	}
}, we = (e) => {
	switch (e) {
		case "label": return ".";
		case "matrix": return ";";
		case "simple": return ",";
		default: return "&";
	}
}, Te = ({ allowReserved: e, explode: t, name: n, style: r, value: i }) => {
	if (!t) {
		let t = (e ? i : i.map((e) => encodeURIComponent(e))).join(Ce(r));
		switch (r) {
			case "label": return `.${t}`;
			case "matrix": return `;${n}=${t}`;
			case "simple": return t;
			default: return `${n}=${t}`;
		}
	}
	let a = Se(r), o = i.map((t) => r === "label" || r === "simple" ? e ? t : encodeURIComponent(t) : Ee({
		allowReserved: e,
		name: n,
		value: t
	})).join(a);
	return r === "label" || r === "matrix" ? a + o : o;
}, Ee = ({ allowReserved: e, name: t, value: n }) => {
	if (n == null) return "";
	if (typeof n == "object") throw Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
	return `${t}=${e ? n : encodeURIComponent(n)}`;
}, De = ({ allowReserved: e, explode: t, name: n, style: r, value: i, valueOnly: a }) => {
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
	let o = we(r), s = Object.entries(i).map(([t, i]) => Ee({
		allowReserved: e,
		name: r === "deepObject" ? `${n}[${t}]` : t,
		value: i
	})).join(o);
	return r === "label" || r === "matrix" ? o + s : s;
}, Oe = /\{[^{}]+\}/g, ke = ({ path: e, url: t }) => {
	let n = t, r = t.match(Oe);
	if (r) for (let t of r) {
		let r = !1, i = t.substring(1, t.length - 1), a = "simple";
		i.endsWith("*") && (r = !0, i = i.substring(0, i.length - 1)), i.startsWith(".") ? (i = i.substring(1), a = "label") : i.startsWith(";") && (i = i.substring(1), a = "matrix");
		let o = e[i];
		if (o == null) continue;
		if (Array.isArray(o)) {
			n = n.replace(t, Te({
				explode: r,
				name: i,
				style: a,
				value: o
			}));
			continue;
		}
		if (typeof o == "object") {
			n = n.replace(t, De({
				explode: r,
				name: i,
				style: a,
				value: o,
				valueOnly: !0
			}));
			continue;
		}
		if (a === "matrix") {
			n = n.replace(t, `;${Ee({
				name: i,
				value: o
			})}`);
			continue;
		}
		let s = encodeURIComponent(a === "label" ? `.${o}` : o);
		n = n.replace(t, s);
	}
	return n;
}, Ae = ({ baseUrl: e, path: t, query: n, querySerializer: r, url: i }) => {
	let a = i.startsWith("/") ? i : `/${i}`, o = (e ?? "") + a;
	t && (o = ke({
		path: t,
		url: o
	}));
	let s = n ? r(n) : "";
	return s.startsWith("?") && (s = s.substring(1)), s && (o += `?${s}`), o;
};
function je(e) {
	let t = e.body !== void 0;
	if (t && e.bodySerializer) return "serializedBody" in e ? e.serializedBody !== void 0 && e.serializedBody !== "" ? e.serializedBody : null : e.body === "" ? null : e.body;
	if (t) return e.body;
}
var Me = async (e, t) => {
	let n = typeof t == "function" ? await t(e) : t;
	if (n) return e.scheme === "bearer" ? `Bearer ${n}` : e.scheme === "basic" ? `Basic ${btoa(n)}` : n;
}, Ne = ({ parameters: e = {}, ...t } = {}) => (n) => {
	let r = [];
	if (n && typeof n == "object") for (let i in n) {
		let a = n[i];
		if (a == null) continue;
		let o = e[i] || t;
		if (Array.isArray(a)) {
			let e = Te({
				allowReserved: o.allowReserved,
				explode: !0,
				name: i,
				style: "form",
				value: a,
				...o.array
			});
			e && r.push(e);
		} else if (typeof a == "object") {
			let e = De({
				allowReserved: o.allowReserved,
				explode: !0,
				name: i,
				style: "deepObject",
				value: a,
				...o.object
			});
			e && r.push(e);
		} else {
			let e = Ee({
				allowReserved: o.allowReserved,
				name: i,
				value: a
			});
			e && r.push(e);
		}
	}
	return r.join("&");
}, Pe = (e) => {
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
}, Fe = (e, t) => t ? !!(e.headers.has(t) || e.query?.[t] || e.headers.get("Cookie")?.includes(`${t}=`)) : !1, Ie = async ({ security: e, ...t }) => {
	for (let n of e) {
		if (Fe(t, n.name)) continue;
		let e = await Me(n, t.auth);
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
}, Le = (e) => Ae({
	baseUrl: e.baseUrl,
	path: e.path,
	query: e.query,
	querySerializer: typeof e.querySerializer == "function" ? e.querySerializer : Ne(e.querySerializer),
	url: e.url
}), Re = (e, t) => {
	let n = {
		...e,
		...t
	};
	return n.baseUrl?.endsWith("/") && (n.baseUrl = n.baseUrl.substring(0, n.baseUrl.length - 1)), n.headers = Be(e.headers, t.headers), n;
}, ze = (e) => {
	let t = [];
	return e.forEach((e, n) => {
		t.push([n, e]);
	}), t;
}, Be = (...e) => {
	let t = new Headers();
	for (let n of e) {
		if (!n) continue;
		let e = n instanceof Headers ? ze(n) : Object.entries(n);
		for (let [n, r] of e) if (r === null) t.delete(n);
		else if (Array.isArray(r)) for (let e of r) t.append(n, e);
		else r !== void 0 && t.set(n, typeof r == "object" ? JSON.stringify(r) : r);
	}
	return t;
}, Ve = class {
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
}, He = () => ({
	error: new Ve(),
	request: new Ve(),
	response: new Ve()
}), Ue = Ne({
	allowReserved: !1,
	array: {
		explode: !0,
		style: "form"
	},
	object: {
		explode: !0,
		style: "deepObject"
	}
}), We = { "Content-Type": "application/json" }, Ge = (e = {}) => ({
	...be,
	headers: We,
	parseAs: "auto",
	querySerializer: Ue,
	...e
}), Ke = (e = {}) => {
	let t = Re(Ge(), e), n = () => ({ ...t }), r = (e) => (t = Re(t, e), n()), i = He(), a = async (e) => {
		let n = {
			...t,
			...e,
			fetch: e.fetch ?? t.fetch ?? globalThis.fetch,
			headers: Be(t.headers, e.headers),
			serializedBody: void 0
		};
		return n.security && await Ie({
			...n,
			security: n.security
		}), n.requestValidator && await n.requestValidator(n), n.body !== void 0 && n.bodySerializer && (n.serializedBody = n.bodySerializer(n.body)), (n.body === void 0 || n.serializedBody === "") && n.headers.delete("Content-Type"), {
			opts: n,
			url: Le(n)
		};
	}, o = async (e) => {
		let { opts: t, url: n } = await a(e), r = {
			redirect: "follow",
			...t,
			body: je(t)
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
			let e = (t.parseAs === "auto" ? Pe(c.headers.get("Content-Type")) : t.parseAs) ?? "json";
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
		return xe({
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
		buildUrl: Le,
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
function qe(e) {
	let t = new Headers({ "gt-api-version": e.apiVersion ?? "2026-03-06.v1" });
	return e.apiKey && t.set("Authorization", `Bearer ${e.apiKey}`), e.projectId && t.set("gt-project-id", e.projectId), Ke({
		baseUrl: e.baseUrl,
		fetch: ye({
			fetch: me({
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
}, Je = {
	number: 0,
	dateTime: 1
}, Ye = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/, Xe = /^@+(\+|#+)?[rs]?$/, Ze = /^(?:(?:\+|#+)[rs]?|[rs])$/, Qe = /(\*)(0+)|(#+)(0+)|(0+)/g, $e = /[\t-\r \x85\u200E\u200F\u2028\u2029]+/u, et = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F|[abB]{1,5}|[hHkK]{1,2}|w{1,2}|W|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g, tt = {
	floor: "floor",
	ceiling: "ceil",
	down: "trunc",
	up: "expand",
	"half-even": "halfEven",
	"half-down": "halfTrunc",
	"half-up": "halfExpand"
}, nt = {
	h: "h12",
	H: "h23",
	K: "h11",
	k: "h24"
};
function rt(e) {
	let t = e.split($e).filter(Boolean);
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
function it(e) {
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
				at(n), t.style = "unit", t.unit = e.replace(/^(.*?)-/, "");
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
				for (let e of n.options) ot(t, e);
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
				if (at(n), n.options.length > 1) throw RangeError("integer-width stems only accept a single optional option");
				ct(t, e);
				continue;
		}
		if (n.stem.slice(0, 14) === "rounding-mode-") {
			let e = tt[n.stem.slice(14)];
			typeof e == "string" && (t.roundingMode = e);
			continue;
		}
		if (/^0+$/u.test(n.stem)) {
			t.minimumIntegerDigits = n.stem.length;
			continue;
		}
		if (!lt(t, n)) {
			if (Xe.test(n.stem)) {
				Object.assign(t, ut(n.stem));
				continue;
			}
			if (Ze.test(n.stem)) throw SyntaxError("Significant precision must start with @.");
			ot(t, n.stem) || st(t, n.stem);
		}
	}
	return t;
}
function at(e) {
	if (!e.options[0]) throw SyntaxError(`${e.stem} requires an option.`);
}
function ot(e, t) {
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
function st(e, t) {
	if (t[0] !== "E") return !1;
	let n = /^(E{1,2})(\+!|\+\?)?(0+)$/u.exec(t);
	if (!n) throw SyntaxError("Malformed concise eng/scientific notation");
	return e.notation = n[1] === "EE" ? "engineering" : "scientific", n[2] && ot(e, n[2]), e.minimumIntegerDigits = n[3].length, !0;
}
function ct(e, t) {
	t.replace(Qe, (t, n, r, i, a, o) => {
		if (n && r) e.minimumIntegerDigits = r.length;
		else if (i && a) throw Error("We currently do not support maximum integer digits");
		else if (o) throw Error("We currently do not support exact integer digits");
		return "";
	});
}
function lt(e, t) {
	let n = Ye.exec(t.stem);
	if (!n) return !1;
	if (t.options.length > 1) throw SyntaxError("Fraction precision accepts at most one option.");
	let [, r, i, a, o, s] = n;
	return i === "*" ? e.minimumFractionDigits = r.length : a ? e.maximumFractionDigits = a.length : o && s ? (e.minimumFractionDigits = o.length, e.maximumFractionDigits = o.length + s.length) : (e.minimumFractionDigits = r.length, e.maximumFractionDigits = r.length), t.options[0] === "w" ? e.trailingZeroDisplay = "stripIfInteger" : t.options[0] && Object.assign(e, ut(t.options[0])), !0;
}
function ut(e) {
	let t = {};
	if (e.endsWith("r") && (t.roundingPriority = "morePrecision"), e.endsWith("s") && (t.roundingPriority = "lessPrecision"), Ze.test(e)) throw SyntaxError("Significant precision must start with @.");
	if (!Xe.test(e)) return t;
	let n = e.replace(/[rs]$/u, ""), r = n.match(/^@+/u)?.[0] ?? "", i = n.slice(r.length);
	return r && (t.minimumSignificantDigits = r.length), i === "+" || (i[0] === "#" ? t.maximumSignificantDigits = r.length + i.length : r && (t.maximumSignificantDigits = r.length)), t;
}
function dt(e) {
	let t = {};
	for (let [n] of e.matchAll(et)) {
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
				if (e < 4) throw mt(n, "weekday");
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
				t.hourCycle = nt[n[0]], t.hour = e === 2 ? "2-digit" : "numeric";
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
			default: throw mt(n, "date/time");
		}
	}
	return t;
}
function ft(e, t) {
	if (!t || !/[jJ]/u.test(e)) return e;
	let n = pt(t), r = "";
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
function pt(e) {
	let t = e;
	switch (t.hourCycle ?? t.hourCycles?.[0] ?? new Intl.DateTimeFormat(e.toString(), { hour: "numeric" }).resolvedOptions().hourCycle) {
		case "h11": return "K";
		case "h12": return "h";
		case "h24": return "k";
		default: return "H";
	}
}
function mt(e, t) {
	return /* @__PURE__ */ RangeError(`Unsupported ${t} skeleton field: ${e}.`);
}
var ht = /^[A-Za-z]$/u, gt = /^[-.0-9_A-Za-z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\u{EFFFF}]$/u;
function _t(e) {
	return ht.test(e ?? "");
}
function vt(e) {
	return gt.test(e);
}
var yt = /[\t-\r \x85\u200E\u200F\u2028\u2029]/u, bt = /[\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\x21-\x2F\x3A-\x40\x5B-\x5E\x60\x7B-\x7E\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E-\uFD3F\uFE45-\uFE46]/u, xt = class {
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
			} else i === "<" && !this.options.ignoreTag && _t(this.peek()) ? r.push(this.parseTag(t)) : r.push(this.parseLiteral(e, t));
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
			if (i === "{" || i === "}" && e || i === "#" && t || i === "<" && !this.options.ignoreTag && (_t(this.peek()) || this.peek() === "/")) break;
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
		return _t(this.current()) || this.failAt("INVALID_TAG", i, this.index), this.readTagName() !== n && this.fail("UNMATCHED_CLOSING_TAG", a), this.skipSpace(), this.consume(">") || this.failAt("INVALID_TAG", i, this.index), this.withLocation({
			type: C.tag,
			value: n,
			children: r
		}, t, this.index);
	}
	readTagName() {
		let e = this.index;
		for (_t(this.current()) || this.fail("INVALID_TAG", e), this.index += 1; !this.atEnd() && vt(this.current());) this.index += this.current().length;
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
						e = rt(t);
					} catch {
						this.failAt("INVALID_NUMBER_SKELETON", a, o);
					}
					r = {
						type: Je.number,
						tokens: e,
						...s ? { location: s } : {},
						parsedOptions: this.options.shouldParseSkeletons ? it(e) : {}
					};
				} else {
					t || this.failAt("EXPECT_DATE_TIME_SKELETON", e, this.index);
					let n = ft(t, this.options.locale);
					r = {
						type: Je.dateTime,
						pattern: n,
						...s ? { location: s } : {},
						parsedOptions: this.options.shouldParseSkeletons ? dt(n) : {}
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
		for (; !this.atEnd() && !bt.test(this.current());) this.index += this.current().length;
		return this.message.slice(e, this.index);
	}
	skipSpace() {
		for (; !this.atEnd() && yt.test(this.current());) this.index += this.current().length;
	}
	consume(e) {
		return this.message.slice(this.index, this.index + e.length) === e && (this.index += e.length, !0);
	}
	current() {
		return Ct(this.message, this.index);
	}
	peek() {
		let e = this.current();
		return Ct(this.message, this.index + e.length);
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
		let t = this.positions ??= St(this.message);
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
function St(e) {
	let t = new Uint32Array(e.length + 1), n = new Uint32Array(e.length + 1), r = 0, i = 1, a = 1;
	for (; r < e.length;) {
		let o = Ct(e, r);
		t[r] = i, n[r] = a, o.length === 2 && (t[r + 1] = i, n[r + 1] = a + 1), r += o.length, o === "\n" ? (i += 1, a = 1) : a += 1;
	}
	return t[r] = i, n[r] = a, [t, n];
}
function Ct(e, t) {
	if (t >= e.length) return "\0";
	let n = e.charCodeAt(t);
	if (n < 55296 || n > 56319 || t + 1 >= e.length) return e.charAt(t);
	let r = e.charCodeAt(t + 1);
	return r >= 56320 && r <= 57343 ? e.slice(t, t + 2) : e.charAt(t);
}
function wt(e, t = {}) {
	return new xt(e, {
		shouldParseSkeletons: !0,
		requiresOtherClause: !0,
		...t
	}).parse();
}
var Tt = {
	integer: { maximumFractionDigits: 0 },
	currency: { style: "currency" },
	percent: { style: "percent" }
}, Et = {
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
}, Dt = {
	hour: "numeric",
	minute: "numeric",
	second: "numeric",
	timeZoneName: "short"
}, Ot = {
	short: {
		hour: "numeric",
		minute: "numeric"
	},
	medium: {
		hour: "numeric",
		minute: "numeric",
		second: "numeric"
	},
	long: Dt,
	full: Dt
};
function kt(e, t = "en", n = {}) {
	let r = At(wt(e, { locale: Bt(t) }), {
		message: e,
		locales: t,
		variables: n
	});
	return r.length === 1 ? r[0] : r.length ? r : "";
}
function At(e, t, n) {
	let r = [], i = (e) => {
		let t = r[r.length - 1];
		typeof t == "string" && typeof e == "string" ? r[r.length - 1] = t + e : r.push(e);
	};
	for (let r of e) switch (r.type) {
		case C.literal:
			i(r.value);
			break;
		case C.pound:
			n !== void 0 && i(Mt(t).format(n));
			break;
		case C.argument: {
			let e = w(t.variables, r.value);
			i(typeof e == "string" || typeof e == "number" ? String(e) : e || "");
			break;
		}
		case C.number: {
			let e = w(t.variables, r.value), { scale: n, ...a } = typeof r.style == "string" ? Tt[r.style] ?? {} : r.style?.type === Je.number ? r.style.parsedOptions : {}, o = jt(e, n);
			i(Mt(t, a).format(o));
			break;
		}
		case C.date:
		case C.time: {
			let e = w(t.variables, r.value), n = r.type === C.date ? Et : Ot;
			i(Nt(t, typeof r.style == "string" ? n[r.style] : r.style?.type === Je.dateTime ? r.style.parsedOptions : r.type === C.time ? Ot.medium : void 0).format(e));
			break;
		}
		case C.select: {
			let e = String(w(t.variables, r.value)), n = Rt(r.options, e) ?? r.options.other;
			if (!n) throw zt(r.value, e, r.options);
			At(n.value, t).forEach(i);
			break;
		}
		case C.plural: {
			let e = w(t.variables, r.value), n = `=${String(e)}`, a = Rt(r.options, n), o = typeof e == "bigint" ? e : Number(e), s = typeof o == "bigint" ? o - BigInt(r.offset) : o - r.offset;
			if (!a && Lt(r.options)) {
				let e = Pt(t, r.pluralType ?? "cardinal").select(It(s));
				a = Rt(r.options, e);
			}
			if (a ??= r.options.other, !a) throw zt(r.value, e, r.options);
			At(a.value, t, s).forEach(i);
			break;
		}
		case C.tag: {
			let e = w(t.variables, r.value);
			if (typeof e != "function") throw TypeError(`The ICU tag variable "${r.value}" must be a function.`);
			let a = e(At(r.children, t, n));
			Array.isArray(a) ? a.forEach(i) : i(a);
			break;
		}
	}
	return r;
}
function w(e, t) {
	if (!(t in e)) throw Error(`The ICU message variable "${t}" was not provided.`);
	return e[t];
}
function jt(e, t) {
	if (!t) return e;
	if (typeof e == "bigint") {
		if (!Number.isInteger(t)) throw RangeError(`Cannot apply fractional scale ${t} to a bigint value.`);
		return e * BigInt(t);
	}
	return Number(e) * t;
}
function Mt(e, t = {}) {
	return Ft(e.numberFormats ??= /* @__PURE__ */ new Map(), JSON.stringify(t), () => new Intl.NumberFormat(e.locales, t));
}
function Nt(e, t) {
	return Ft(e.dateTimeFormats ??= /* @__PURE__ */ new Map(), t ? JSON.stringify(t) : "", () => new Intl.DateTimeFormat(e.locales, t));
}
function Pt(e, t) {
	if (typeof Intl.PluralRules != "function") {
		let t = /* @__PURE__ */ Error("Intl.PluralRules is not available in this environment.\nTry polyfilling it using \"@formatjs/intl-pluralrules\"\n");
		throw t.code = "MISSING_INTL_API", t.originalMessage = e.message, t;
	}
	return Ft(e.pluralRules ??= /* @__PURE__ */ new Map(), t, () => new Intl.PluralRules(e.locales, { type: t }));
}
function Ft(e, t, n) {
	let r = e.get(t);
	if (r) return r;
	let i = n();
	return e.set(t, i), i;
}
function It(e) {
	let t = Number(e);
	if (typeof e == "bigint" && Math.abs(t) > 9007199254740991) throw RangeError(`Cannot select a plural category for bigint ${e} outside the safe integer range.`);
	return t;
}
function Lt(e) {
	return Object.keys(e).some((e) => e !== "other" && e[0] !== "=");
}
function Rt(e, t) {
	return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0;
}
function zt(e, t, n) {
	return /* @__PURE__ */ RangeError(`The ICU variable "${e}" value ${JSON.stringify(String(t))} did not match any of: ${Object.keys(n).join(", ")}.`);
}
function Bt(e) {
	if (Intl.Locale === void 0) return;
	let t = Intl.NumberFormat.supportedLocalesOf(e)[0], n = typeof e == "string" ? e : e[0];
	return new Intl.Locale(t ?? n);
}
function Vt({ icuString: e, shouldVisit: t, visitor: n, options: { recurseIntoVisited: r = !0, ...i } }) {
	let a = wt(e, i);
	return o(a), a;
	function o(e) {
		e.map(s);
	}
	function s(e) {
		let i = !1;
		t(e) && (n(e), i = !0), (!i || r) && (e.type === C.select || e.type === C.plural ? Object.values(e.options).map((e) => e.value).map(o) : e.type === C.tag && o(e.children));
	}
}
var T = "_gt_";
RegExp(`^${T}\\d+$`);
var Ht = RegExp(`^${T}$`);
function Ut(e) {
	return e.type === C.select && Ht.test(e.value) && !!e.options.other && (e.options.other.value.length === 0 || e.options.other.value.length > 0 && e.options.other.value[0]?.type === C.literal);
}
function Wt(e) {
	let t = e;
	if (t && typeof t == "object" && typeof t.k == "string") {
		let e = Object.keys(t);
		if (e.length === 1 || e.length === 2 && (typeof t.i == "number" || typeof t.v == "string") || e.length === 3 && typeof t.v == "string" && typeof t.i == "number") return !0;
	}
	return !1;
}
var Gt = (e) => `generaltranslation Formatting Error: Invalid cutoff style: ${e}.`, Kt = "DEFAULT_TERMINATOR_KEY", qt = {
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
		[Kt]: {
			terminator: "…",
			separator: void 0
		}
	},
	none: { [Kt]: {
		terminator: void 0,
		separator: void 0
	} }
}, Jt = class e {
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
		if (!qt[r]) throw Error(Gt(r));
		let i = n.maxChars === void 0 ? void 0 : qt[r][new Intl.Locale(this.locale).language] || qt[r].DEFAULT_TERMINATOR_KEY, a = n.terminator ?? i?.terminator, o = a == null ? void 0 : n.separator ?? i?.separator;
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
}, Yt = {
	Collator: Intl.Collator,
	DateTimeFormat: Intl.DateTimeFormat,
	DisplayNames: Intl.DisplayNames,
	ListFormat: Intl.ListFormat,
	Locale: Intl.Locale,
	NumberFormat: Intl.NumberFormat,
	PluralRules: Intl.PluralRules,
	RelativeTimeFormat: Intl.RelativeTimeFormat,
	Segmenter: Intl.Segmenter,
	CutoffFormat: Jt
}, E = new class {
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
		return o === void 0 && (o = new Yt[e](...t), a[i] = o), o;
	}
}();
function Xt(e) {
	return E.get("PluralRules", e);
}
var Zt = [
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
function Qt(e) {
	return Zt.includes(e);
}
function $t(e, t = Zt, n = ["en"]) {
	let r = Xt(n).select(e), i = Math.abs(e);
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
var en = {
	variable: "v",
	number: "n",
	datetime: "d",
	currency: "c",
	"relative-time": "rt"
};
function tn(e) {
	return en[e];
}
function nn(e) {
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
	Vt({
		icuString: e,
		shouldVisit: Ut,
		visitor: n,
		options: {
			recurseIntoVisited: !1,
			captureLocation: !0
		}
	});
	let r = [], i = 0;
	for (let n = 0; n < t.length; n++) {
		let { start: a, end: o, otherStart: s, otherEnd: c } = t[n];
		r.push(e.slice(i, a)), r.push(e.slice(a, a + T.length + 1)), r.push(String(n + 1)), r.push(e.slice(a + T.length + 1, s)), r.push("{}"), r.push(e.slice(c, o)), i = o;
	}
	return r.push(e.slice(i, e.length)), r.join("");
}
RegExp(`${T}\\d+`);
function rn(e) {
	return S({
		source: "gt-next",
		...e
	});
}
var an = () => rn({
	severity: "Error",
	whatHappened: "loadTranslations() was found during the build but could not be resolved at runtime",
	fix: "Export a loadTranslations() function from the configured file"
}), on = v(((e) => {
	throw Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Error("Something has gone seriously wrong if you're seeing this error message. Check docs.generaltranslation.com for the latest documentation and make sure you've got the library configured properly.");
})), D = void 0;
function sn() {
	if (D !== void 0) return D;
	if (process.env._GENERALTRANSLATION_LOCAL_TRANSLATION_ENABLED !== "true") return;
	let e;
	try {
		e = on();
	} catch {}
	if (D = e?.default || e?.loadTranslations, !D) {
		D = async (e) => void 0;
		let e = an();
		if (process.env.NODE_ENV !== "production") throw Error(e);
		console.error(e);
	}
	return D;
}
function cn() {
	let e = JSON.parse(process.env.NEXT_PUBLIC_GENERALTRANSLATION_I18N_CONFIG_PARAMS || "{}"), { projectId: t, devApiKey: n, apiKey: r } = y(), i = {
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
			loadTranslations: ln()
		}
	};
}
function ln() {
	if (!(typeof window < "u")) return sn();
}
var un = {
	pl: "placeholder",
	ti: "title",
	alt: "alt",
	arl: "aria-label",
	arb: "aria-labelledby",
	ard: "aria-describedby"
};
function dn(e, t = "en", n = {}) {
	return kt(e, t, n)?.toString() ?? "";
}
function fn({ value: e, locales: t = ["en"], options: n = {} }) {
	return E.get("NumberFormat", t, {
		numberingSystem: "latn",
		...n
	}).format(e);
}
function pn({ value: e, locales: t = ["en"], options: n = {} }) {
	return E.get("DateTimeFormat", t, {
		calendar: "gregory",
		numberingSystem: "latn",
		...n
	}).format(e);
}
function mn({ value: e, locales: t = ["en"], currency: n = "USD", options: r = {} }) {
	return E.get("NumberFormat", t, {
		style: "currency",
		currency: n,
		numberingSystem: "latn",
		...r
	}).format(e);
}
function hn({ value: e, locales: t = ["en"], options: n = {} }) {
	return E.get("ListFormat", t, {
		type: "conjunction",
		style: "long",
		...n
	}).format(e.map(String));
}
function gn({ value: e, locales: t = ["en"], options: n = {} }) {
	let r = E.get("ListFormat", t, {
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
	return E.get("RelativeTimeFormat", n, {
		style: "long",
		numeric: "auto",
		...r
	}).format(e, t);
}
function yn(e) {
	try {
		return E.get("Locale", e).language;
	} catch {
		return;
	}
}
function bn(...e) {
	try {
		let t = e.flat().map((e) => E.get("Locale", e).language);
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
}, O = (e, t) => {
	let n = e?.[t];
	return xn(n) && typeof n.code == "string" ? n.code : void 0;
}, Cn = /* @__PURE__ */ new Set([
	"Cham",
	"Jamo",
	"Kawi",
	"Lisu",
	"Toto",
	"Thai"
]), wn = (e) => e >= "qaa" && e <= "qtz", k = (e, t) => {
	e = O(t, e) || e;
	try {
		let { language: t, region: n, script: r } = E.get("Locale", e), i = 1 + Number(!!n) + Number(!!r);
		return !(e.split("-").length !== i || E.get("DisplayNames", ["en"], { type: "language" }).of(t) === t && !wn(t) || n && E.get("DisplayNames", ["en"], { type: "region" }).of(n) === n || r && E.get("DisplayNames", ["en"], { type: "script" }).of(r) === r && !Cn.has(r));
	} catch {
		return !1;
	}
}, A = (e) => {
	try {
		return Intl.getCanonicalLocales(e)[0];
	} catch {
		return e;
	}
};
function Tn(e, t) {
	let n = !0, r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Map();
	for (let a of e) {
		if (!k(a, t)) {
			n = !1;
			continue;
		}
		let e = yn(a);
		if (e === void 0) continue;
		r.add(e);
		let o = i.get(e);
		o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(e, o)), o.add(A(a));
	}
	return {
		allValid: n,
		languages: r,
		byLanguage: i
	};
}
function En(...e) {
	try {
		let t = e.flat().map((e) => E.get("Locale", A(e))), [n] = t, r = new Set(t.map(({ region: e }) => e).filter(Boolean)), i = new Set(t.map(({ script: e }) => e).filter(Boolean));
		return t.every(({ language: e }) => e === n?.language) && r.size <= 1 && i.size <= 1;
	} catch (e) {
		return console.error(e), !1;
	}
}
function Dn(e, t, n, r) {
	if (n && !n.allValid || !k(e, r) || !k(t, r) || En(e, t)) return !1;
	if (!n) return !0;
	let i = yn(t);
	return i !== void 0 && n.languages.has(i);
}
function On(e, t, n, r) {
	return Dn(e, t, n ? Tn(n, r) : void 0, r);
}
function kn(e) {
	try {
		let t = E.get("Locale", e), n = t.language, r = t.region || "", i = t.script || "";
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
		let t = k(e) ? A(e) : e, n = t.split("-");
		return {
			languageCode: n[0] || t,
			regionCode: n.length > 2 ? n[2] : n[1] || "",
			scriptCode: n[3] || "",
			minimizedCode: t
		};
	}
}
function An(e, t) {
	if (t.has(e)) return e;
	let { languageCode: n, regionCode: r, scriptCode: i, minimizedCode: a } = kn(e), o = `${n}-${r}`;
	if (t.has(o)) return o;
	let s = `${n}-${i}`;
	if (t.has(s)) return s;
	if (t.has(a)) return a;
}
function jn(e, t, n) {
	let r = Array.isArray(e) ? e : [e];
	for (let e of r) {
		if (!k(e, n)) continue;
		let r = A(e), i = yn(r);
		if (i === void 0) continue;
		let a = t.byLanguage.get(i);
		if (a === void 0) continue;
		let o = An(r, a) || An(i, a);
		if (o) return o;
	}
}
function Mn(e, t, n) {
	return jn(e, Tn(t, n), n);
}
function j(e, t) {
	let n = O(t, e);
	return n && k(n) ? n : e;
}
function Nn(e, t) {
	let n = e;
	e = j(e, t);
	try {
		let r = A(e), i = E.get("Locale", r), { language: a, region: o } = i;
		if (t) for (let i of [
			n,
			e,
			r,
			a
		]) {
			let e = Sn(t, i, "emoji");
			if (e) return e;
		}
		let s = o && Hn(o);
		if (s) return s;
		let c = i.maximize();
		return Ln[c.language] || Vn(c.region || "");
	} catch {
		return In;
	}
}
var Pn = "🌍", Fn = "🌏", In = Pn, Ln = {
	ca: Pn,
	eu: Pn,
	ku: Pn,
	bo: Fn,
	ug: Fn,
	gd: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
	cy: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
	gv: "🇮🇲",
	grc: "🏺"
}, Rn = {
	EU: "🇪🇺",
	419: "🌎"
}, zn = /* @__PURE__ */ new Set(/* @__PURE__ */ "AF.AX.AL.DZ.AS.AD.AO.AI.AQ.AG.AR.AM.AW.AU.AT.AZ.BS.BH.BD.BB.BY.BE.BZ.BJ.BM.BT.BO.BQ.BA.BW.BV.BR.IO.BN.BG.BF.BI.CV.KH.CM.CA.KY.CF.TD.CL.CN.CX.CC.CO.KM.CD.CG.CK.CR.CI.HR.CU.CW.CY.CZ.DK.DJ.DM.DO.EC.EG.SV.GQ.ER.EE.SZ.ET.FK.FO.FJ.FI.FR.GF.PF.TF.GA.GM.GE.DE.GH.GI.GR.GL.GD.GP.GU.GT.GG.GN.GW.GY.HT.HM.VA.HN.HK.HU.IS.IN.ID.IR.IQ.IE.IM.IL.IT.JM.JP.JE.JO.KZ.KE.KI.KP.KR.KW.KG.LA.LV.LB.LS.LR.LY.LI.LT.LU.MO.MG.MW.MY.MV.ML.MT.MH.MQ.MR.MU.YT.MX.FM.MD.MC.MN.ME.MS.MA.MZ.MM.NA.NR.NP.NL.NC.NZ.NI.NE.NG.NU.NF.MK.MP.NO.OM.PK.PW.PS.PA.PG.PY.PE.PH.PN.PL.PT.PR.QA.RE.RO.RU.RW.BL.SH.KN.LC.MF.PM.VC.WS.SM.ST.SA.SN.RS.SC.SL.SG.SX.SK.SI.SB.SO.ZA.GS.SS.ES.LK.SD.SR.SJ.SE.CH.SY.TW.TJ.TZ.TH.TL.TG.TK.TO.TT.TN.TR.TM.TC.TV.UG.UA.AE.GB.US.UM.UY.UZ.VU.VE.VN.VG.VI.WF.EH.YE.ZM.ZW".split(".")), Bn = 127397;
function Vn(e) {
	return Hn(e) || "🌍";
}
function Hn(e) {
	let t = e.toUpperCase(), n = Rn[t];
	if (n) return n;
	if (zn.has(t)) return String.fromCodePoint(t.charCodeAt(0) + Bn, t.charCodeAt(1) + Bn);
}
function Un(e, t) {
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
function Wn(e, t = "en", n) {
	let r = e;
	e = j(e, n), t ||= "en";
	try {
		let i = A(e), a = E.get("Locale", e), o = a.language, s = Un([
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
		], g = E.get("DisplayNames", m, { type: "language" }), _ = E.get("DisplayNames", h, { type: "language" }), v = s?.name, y = s?.nativeName || s?.name, b = v || g.of(e) || e, ee = y || _.of(e) || e, te = s?.maximizedName || v || g.of(u) || e, x = s?.nativeMaximizedName || y || _.of(u) || e, ne = s?.minimizedName || v || g.of(p) || e, re = s?.nativeMinimizedName || y || _.of(p) || e, S = s?.languageName || v || g.of(o) || e, ie = s?.nativeLanguageName || y || _.of(o) || e, ae = s?.nameWithRegionCode || (c ? `${S} (${c})` : b), oe = s?.nativeNameWithRegionCode || (c ? `${ie} (${c})` : ee) || ae, se = E.get("DisplayNames", m, { type: "region" }), ce = E.get("DisplayNames", h, { type: "region" }), le = s?.regionName || (d ? se.of(d) : "") || "", ue = s?.nativeRegionName || (d ? ce.of(d) : "") || "", de = E.get("DisplayNames", m, { type: "script" }), fe = E.get("DisplayNames", h, { type: "script" });
		return {
			code: i,
			name: b,
			nativeName: ee,
			maximizedCode: u,
			maximizedName: te,
			nativeMaximizedName: x,
			minimizedCode: p,
			minimizedName: ne,
			nativeMinimizedName: re,
			languageCode: o,
			languageName: S,
			nativeLanguageName: ie,
			nameWithRegionCode: ae,
			nativeNameWithRegionCode: oe,
			regionCode: d,
			regionName: le,
			nativeRegionName: ue,
			scriptCode: f,
			scriptName: s?.scriptName || (f ? de.of(f) : "") || "",
			nativeScriptName: s?.nativeScriptName || (f ? fe.of(f) : "") || "",
			emoji: s?.emoji || Nn(i, n)
		};
	} catch {
		let t = k(e) ? A(e) : e, r = t.split("-"), i = r[0] || t, a = r.length > 2 ? r[2] : r[1] || "", o = r[3] || "", s = Un([t, i], n);
		t = s?.code || t;
		let c = s?.name || t, l = s?.nativeName || c, u = s?.maximizedCode || t, d = s?.maximizedName || c, f = s?.nativeMaximizedName || l, p = s?.minimizedCode || t, m = s?.minimizedName || c, h = s?.nativeMinimizedName || l;
		i = s?.languageCode || i;
		let g = s?.languageName || c, _ = s?.nativeLanguageName || l;
		a = s?.regionCode || a;
		let v = s?.regionName || "", y = s?.nativeRegionName || "";
		o = s?.scriptCode || o;
		let b = s?.scriptName || "", ee = s?.nativeScriptName || "", te = s?.nameWithRegionCode || (v ? `${g} (${v})` : c), x = s?.nativeNameWithRegionCode || (y ? `${_} (${y})` : l), ne = s?.emoji || "🌍";
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
			nameWithRegionCode: te,
			nativeNameWithRegionCode: x,
			regionCode: a,
			regionName: v,
			nativeRegionName: y,
			scriptCode: o,
			scriptName: b,
			nativeScriptName: ee,
			emoji: ne
		};
	}
}
function Gn(e, t = "en", n) {
	let r = e;
	e = j(e, n), t ||= "en";
	try {
		let i = A(e);
		if (n) for (let t of [
			r,
			e,
			i,
			E.get("Locale", i).language
		]) {
			let e = Sn(n, t, "name");
			if (e) return e;
		}
		return E.get("DisplayNames", [
			t,
			i,
			"en"
		], { type: "language" }).of(i) || "";
	} catch {
		return "";
	}
}
function Kn(e) {
	try {
		let t = Yn(E.get("Locale", e));
		if (t) return t;
	} catch {}
	let { scriptCode: t, languageCode: n } = Wn(e);
	return t ? qn.has(t.toLowerCase()) ? "rtl" : "ltr" : n && Jn.has(n.toLowerCase()) ? "rtl" : "ltr";
}
var qn = /* @__PURE__ */ new Set([
	"arab",
	"adlm",
	"hebr",
	"nkoo",
	"rohg",
	"samr",
	"syrc",
	"thaa",
	"yezi"
]), Jn = /* @__PURE__ */ new Set([
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
function Yn(e) {
	let t = "textInfo" in e && typeof e.textInfo == "object" && e.textInfo !== null && "direction" in e.textInfo ? e.textInfo.direction : void 0;
	return t === "rtl" || t === "ltr" ? t : void 0;
}
function Xn(e, t) {
	try {
		let { language: n, region: r, script: i } = E.get("Locale", A(e)), { language: a, region: o, script: s } = E.get("Locale", A(t));
		return !(n !== a || r && r !== o || i && i !== s);
	} catch (e) {
		return console.error(e), !1;
	}
}
function Zn(e, t) {
	return t ? Object.keys(t).find((n) => O(t, n) === e) ?? e : e;
}
var Qn = class {
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
			if (r.locale !== n || r.canonicalLocale !== this.resolveCanonicalLocale(n) || e.canonicalMappingCodes[t] !== O(this.customMapping, r.canonicalLocale)) return !1;
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
			canonicalMappingCodes: t.map(({ canonicalLocale: e }) => O(this.customMapping, e)),
			approved: Tn(t.map(({ canonicalLocale: e }) => e), this.customMapping)
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
		return E.get("CutoffFormat", this.getFormattingLocales(t, r), i).format(e);
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
		return Gn(e, this.defaultLocale, this.customMapping);
	}
	getLocaleEmoji(e) {
		return Nn(e, this.customMapping);
	}
	getLocaleProperties(e) {
		return Wn(e, this.defaultLocale, this.customMapping);
	}
	requiresTranslation(e, t = this.defaultLocale, n = this.locales.length ? this.locales : void 0) {
		let r = n ? n === this.locales ? this.getResolutionScope().approved : Tn(n.map((e) => this.resolveCanonicalLocale(e)), this.customMapping) : void 0;
		return Dn(this.resolveCanonicalLocale(t), this.resolveCanonicalLocale(e), r, this.customMapping);
	}
	determineLocale(e, t = this.locales) {
		let { approvedLocalePairs: n, approved: r } = t === this.locales ? this.getResolutionScope() : this.buildResolutionScope(t), i = jn(Array.isArray(e) ? e.map((e) => this.resolveCanonicalLocale(e)) : this.resolveCanonicalLocale(e), r, this.customMapping);
		if (i) return n.find(({ canonicalLocale: e }) => e === i)?.locale ?? this.resolveAliasLocale(i);
	}
	getLocaleDirection(e) {
		return Kn(this.resolveCanonicalLocale(e));
	}
	isValidLocale(e) {
		return k(e, this.customMapping);
	}
	resolveCanonicalLocale(e) {
		return j(e, this.customMapping);
	}
	resolveAliasLocale(e) {
		return Zn(e, this.customMapping);
	}
	standardizeLocale(e) {
		return A(e);
	}
	isSameDialect(...e) {
		return En(...e.map((e) => Array.isArray(e) ? e.map((e) => this.resolveCanonicalLocale(e)) : this.resolveCanonicalLocale(e)));
	}
	isSameLanguage(...e) {
		return bn(...e.map((e) => Array.isArray(e) ? e.map((e) => this.resolveCanonicalLocale(e)) : this.resolveCanonicalLocale(e)));
	}
	isSupersetLocale(e, t) {
		return Xn(this.resolveCanonicalLocale(e), this.resolveCanonicalLocale(t));
	}
};
function $n(e, t = "en", n) {
	t ||= "en";
	let r = e, i = In;
	try {
		r = E.get("DisplayNames", [t, "en"], { type: "region" }).of(e) || e, i = Vn(e);
	} catch {}
	return {
		code: e,
		name: r,
		emoji: i,
		...n?.[e]
	};
}
function M(e, t) {
	return k(e, t);
}
function er(e, t) {
	return j(e, t);
}
function tr(e) {
	return A(e);
}
function nr(e, t, n, r) {
	return On(e, t, n, r);
}
function rr(e, t = [], n = void 0) {
	return Mn(e, t, n);
}
function ir(e, t) {
	return Zn(e, t);
}
function ar(e) {
	return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array" && "BYTES_PER_ELEMENT" in e && e.BYTES_PER_ELEMENT === 1;
}
function or(e, t, n = "") {
	let r = ar(e), i = e?.length, a = t !== void 0;
	if (!r || a && i !== t) {
		let o = n && `"${n}" `, s = a ? ` of length ${t}` : "", c = r ? `length=${i}` : `type=${typeof e}`, l = o + "expected Uint8Array" + s + ", got " + c;
		throw r ? RangeError(l) : TypeError(l);
	}
	return e;
}
function sr(e, t = !0) {
	if (e.destroyed) throw Error("Hash instance has been destroyed");
	if (t && e.finished) throw Error("Hash#digest() has already been called");
}
function cr(e, t) {
	or(e, void 0, "digestInto() output");
	let n = t.outputLen;
	if (e.length < n) throw RangeError("\"digestInto() output\" expected to be of length >=" + n);
}
function lr(...e) {
	for (let t = 0; t < e.length; t++) e[t].fill(0);
}
function ur(e) {
	return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function N(e, t) {
	return e << 32 - t | e >>> t;
}
var dr = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", fr = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function pr(e) {
	if (or(e), dr) return e.toHex();
	let t = "";
	for (let n = 0; n < e.length; n++) t += fr[e[n]];
	return t;
}
function mr(e) {
	if (typeof e != "string") throw TypeError("string expected");
	return new Uint8Array(new TextEncoder().encode(e));
}
function hr(e, t = {}) {
	let n = (t, n) => e(n).update(t).digest(), r = e(void 0);
	return n.outputLen = r.outputLen, n.blockLen = r.blockLen, n.canXOF = r.canXOF, n.create = (t) => e(t), Object.assign(n, t), Object.freeze(n);
}
var gr = (e) => ({ oid: Uint8Array.from([
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
function _r(e, t, n) {
	return e & t ^ ~e & n;
}
function vr(e, t, n) {
	return e & t ^ e & n ^ t & n;
}
var yr = class {
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
		this.blockLen = e, this.outputLen = t, this.padOffset = n, this.isLE = r, this.buffer = new Uint8Array(e), this.view = ur(this.buffer);
	}
	update(e) {
		sr(this), or(e);
		let { view: t, buffer: n, blockLen: r } = this, i = e.length;
		for (let a = 0; a < i;) {
			let o = Math.min(r - this.pos, i - a);
			if (o === r) {
				let t = ur(e);
				for (; r <= i - a; a += r) this.process(t, a);
				continue;
			}
			n.set(e.subarray(a, a + o), this.pos), this.pos += o, a += o, this.pos === r && (this.process(t, 0), this.pos = 0);
		}
		return this.length += e.length, this.roundClean(), this;
	}
	digestInto(e) {
		sr(this), cr(e, this), this.finished = !0;
		let { buffer: t, view: n, blockLen: r, isLE: i } = this, { pos: a } = this;
		t[a++] = 128, lr(this.buffer.subarray(a)), this.padOffset > r - a && (this.process(n, 0), a = 0);
		for (let e = a; e < r; e++) t[e] = 0;
		n.setBigUint64(r - 8, BigInt(this.length * 8), i), this.process(n, 0);
		let o = ur(e), s = this.outputLen;
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
}, P = Uint32Array.from([
	1779033703,
	3144134277,
	1013904242,
	2773480762,
	1359893119,
	2600822924,
	528734635,
	1541459225
]), br = Uint32Array.from([
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
]), F = /* @__PURE__ */ new Uint32Array(64), xr = class extends yr {
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
		for (let n = 0; n < 16; n++, t += 4) F[n] = e.getUint32(t, !1);
		for (let e = 16; e < 64; e++) {
			let t = F[e - 15], n = F[e - 2], r = N(t, 7) ^ N(t, 18) ^ t >>> 3, i = N(n, 17) ^ N(n, 19) ^ n >>> 10;
			F[e] = i + F[e - 7] + r + F[e - 16] | 0;
		}
		let { A: n, B: r, C: i, D: a, E: o, F: s, G: c, H: l } = this;
		for (let e = 0; e < 64; e++) {
			let t = N(o, 6) ^ N(o, 11) ^ N(o, 25), u = l + t + _r(o, s, c) + br[e] + F[e] | 0, d = (N(n, 2) ^ N(n, 13) ^ N(n, 22)) + vr(n, r, i) | 0;
			l = c, c = s, s = o, o = a + u | 0, a = i, i = r, r = n, n = u + d | 0;
		}
		n = n + this.A | 0, r = r + this.B | 0, i = i + this.C | 0, a = a + this.D | 0, o = o + this.E | 0, s = s + this.F | 0, c = c + this.G | 0, l = l + this.H | 0, this.set(n, r, i, a, o, s, c, l);
	}
	roundClean() {
		lr(F);
	}
	destroy() {
		this.destroyed = !0, this.set(0, 0, 0, 0, 0, 0, 0, 0), lr(this.buffer);
	}
}, Sr = class extends xr {
	A = P[0] | 0;
	B = P[1] | 0;
	C = P[2] | 0;
	D = P[3] | 0;
	E = P[4] | 0;
	F = P[5] | 0;
	G = P[6] | 0;
	H = P[7] | 0;
	constructor() {
		super(32);
	}
}, Cr = hr(() => new Sr(), gr(1));
function wr(e) {
	if (e === void 0) return;
	if (e === null) return "null";
	if (typeof e == "number") return isFinite(e) ? "" + e : "null";
	if (typeof e != "object") return JSON.stringify(e);
	if (Array.isArray(e)) {
		let t = "[";
		for (let n = 0; n < e.length; n++) n && (t += ","), t += wr(e[n]) || "null";
		return t + "]";
	}
	let t = Object.keys(e).sort(), n = "";
	for (let r of t) {
		let t = wr(e[r]);
		t && (n && (n += ","), n += JSON.stringify(r) + ":" + t);
	}
	return "{" + n + "}";
}
function Tr(e) {
	return wr(e) ?? "";
}
function Er(e) {
	return pr(Cr(mr(e))).slice(0, 16);
}
function Dr({ source: e, context: t, id: n, maxChars: r, requiresReview: i, dataFormat: a }, o = Er) {
	let s;
	return s = a === "JSX" ? kr(e) : e, o(Tr({
		source: s,
		...n && { id: n },
		...t && { context: t },
		...r != null && { maxChars: Math.abs(r) },
		...i === !0 && { requiresReview: !0 },
		...a && { dataFormat: a }
	}));
}
var Or = (e) => {
	if (e && typeof e == "object") {
		let t = {};
		if ("c" in e && e.c && (t.c = kr(e.c)), "d" in e) {
			let n = e?.d;
			n?.b && (t.b = Object.fromEntries(Object.entries(n.b).map(([e, t]) => [e, kr(t)]))), n?.t && (t.t = n.t);
		}
		return Wt(e) ? {
			k: e.k,
			...e.v && { v: e.v }
		} : t;
	}
	return e;
};
function kr(e) {
	return Array.isArray(e) ? e.map(Or) : Or(e);
}
var I = "GT", Ar = (e) => S({
	source: I,
	severity: "Error",
	whatHappened: `Translation request timed out after ${e}ms`,
	fix: "Try again, or increase the request timeout if the source content is large"
}), jr = (e, t, n) => S({
	source: I,
	severity: "Error",
	whatHappened: `The translation API returned ${e} ${t}`,
	fix: "Check the request configuration and try again",
	details: n
});
S({
	source: I,
	severity: "Error",
	whatHappened: "Authentication failed",
	fix: "Check that your API key and project ID are correct"
});
var L = (e) => S({
	source: I,
	severity: "Error",
	whatHappened: `Cannot call \`${e}\` without a specified locale`,
	fix: `Pass a locale to \`${e}\` or specify targetLocale in the GT constructor`
}), Mr = (e) => S({
	source: I,
	severity: "Error",
	whatHappened: `Cannot call \`${e}\` without a specified locale`,
	fix: `Pass a locale to \`${e}\` or specify sourceLocale in the GT constructor`
}), Nr = (e) => S({
	source: I,
	severity: "Error",
	whatHappened: `Cannot call \`${e}\` without a specified project ID`,
	fix: `Pass a project ID to \`${e}\` or specify projectId in the GT constructor`
}), Pr = (e) => S({
	source: I,
	severity: "Error",
	whatHappened: `Cannot call \`${e}\` without a specified API key`,
	fix: `Pass an API key to \`${e}\` or specify apiKey in the GT constructor`
}), Fr = (e) => S({
	source: I,
	severity: "Error",
	whatHappened: `Locale "${e}" is not valid`,
	fix: "Use a valid BCP 47 locale code or add a custom mapping"
}), Ir = (e) => S({
	source: I,
	severity: "Error",
	whatHappened: `These locales are not valid: ${e.join(", ")}`,
	fix: "Use valid BCP 47 locale codes or add custom mappings"
}), Lr = {
	debug: 0,
	info: 1,
	warn: 2,
	error: 3,
	off: 4
}, Rr = {
	debug: "\x1B[36m",
	info: "\x1B[32m",
	warn: "\x1B[33m",
	error: "\x1B[31m",
	off: ""
}, zr = "\x1B[0m";
function Br() {
	if (typeof process < "u" && process.env?._GT_LOG_LEVEL) {
		let e = process.env._GT_LOG_LEVEL.toLowerCase();
		if (e in Lr) return e;
	}
	return "warn";
}
var Vr = class {
	constructor(e) {
		this.config = e;
	}
	handle(e) {
		let t = [];
		this.config.includeTimestamp && t.push(`[${e.timestamp.toISOString()}]`);
		let n = Rr[e.level], r = `[${e.level.toUpperCase()}]`;
		t.push(`${n}${r}${zr}`), this.config.prefix && t.push(`[${this.config.prefix}]`), this.config.includeContext && e.context && t.push(`[${e.context}]`), t.push(e.message), e.metadata && Object.keys(e.metadata).length > 0 && t.push(`\n  Metadata: ${JSON.stringify(e.metadata, null, 2)}`);
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
}, Hr = class {
	constructor(e = {}) {
		this.config = {
			level: Br(),
			includeTimestamp: !0,
			includeContext: !0,
			enableConsole: !0,
			handlers: [],
			...e
		}, this.handlers = [...this.config.handlers || []], this.config.enableConsole && this.handlers.push(new Vr(this.config));
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
		return Lr[e] >= Lr[this.config.level];
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
		return new Ur(this, e);
	}
	getConfig() {
		return { ...this.config };
	}
}, Ur = class e {
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
}, Wr = new Hr({
	level: Br(),
	includeTimestamp: !0,
	includeContext: !0,
	prefix: "GT"
});
Wr.child("fetch");
var Gr = Wr.child("GT instance");
async function Kr(e, t, n) {
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
		throw e instanceof Error && e.name === "AbortError" ? Ar(n) : e;
	} finally {
		o && clearTimeout(o);
	}
}
async function qr(e) {
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
		throw new b(jr(e.status, e.statusText, t), e.status, t);
	}
}
async function Jr(e, t, n, r) {
	let i = Array.isArray(e), a = i ? [] : void 0, o = {}, s = i ? e.map((e) => [void 0, e]) : Object.entries(e);
	for (let [e, t] of s) {
		let { source: n, metadata: r } = typeof t == "string" ? { source: t } : t, i = e ?? r?.hash ?? Dr({
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
	let c = qe({
		apiKey: n.apiKey,
		baseUrl: n.baseUrl || "https://api.gtx.dev",
		fetch: (e, t) => Kr(e, t ?? {}, r),
		projectId: n.projectId,
		retryPolicy: "none",
		timeoutMs: !1
	}), l = await ce({
		body: {
			requests: o,
			targetLocale: t.targetLocale,
			sourceLocale: t.sourceLocale,
			metadata: t
		},
		client: c
	});
	if (l.data === void 0 && l.response && !oe(l)) throw await qr(l.response), l.error;
	let u = se(l);
	return a ? a.map((e) => u[e] ?? {
		success: !1,
		error: "No translation returned",
		code: 500
	}) : u;
}
var Yr = class {
	get localeConfig() {
		return this._localeConfig;
	}
	constructor(e = {}) {
		typeof process < "u" && (this.apiKey ||= process.env?.GT_API_KEY, this.devApiKey ||= process.env?.GT_DEV_API_KEY, this.projectId ||= process.env?.GT_PROJECT_ID), this.setConfig(e);
	}
	setConfig({ apiKey: e, devApiKey: t, sourceLocale: n, targetLocale: r, locales: i, projectId: a, customMapping: o, baseUrl: s }) {
		if (e && (this.apiKey = e), t && (this.devApiKey = t), a && (this.projectId = a), n && (this.sourceLocale = tr(n), !M(this.sourceLocale, o))) throw Error(Fr(this.sourceLocale));
		if (r && (this.targetLocale = tr(r), !M(this.targetLocale, o))) throw Error(Fr(this.targetLocale));
		if (i) {
			let e = [], t = [];
			if (i.forEach((n) => {
				let r = tr(n);
				M(r) ? e.push(r) : t.push(n);
			}), t.length > 0) throw Error(Ir(t));
			this.locales = e;
		}
		s && (this.baseUrl = s), o && (this.customMapping = o, this.reverseCustomMapping = Object.fromEntries(Object.entries(o).filter(([, e]) => e && typeof e == "object" && "code" in e).map(([e, t]) => [t.code, e]))), this._localeConfig = new Qn({
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
			let n = Pr(e);
			t.push(n);
		}
		if (!this.projectId) {
			let n = Nr(e);
			t.push(n);
		}
		if (t.length) throw Error(t.join("\n"));
	}
	async translate(e, t, n) {
		typeof t == "string" && (t = { targetLocale: t }), this._validateAuth("translate");
		let r = t?.targetLocale || this.targetLocale;
		if (!r) {
			let e = L("translate");
			throw Gr.error(e), Error(e);
		}
		r = this.resolveCanonicalLocale(r);
		let i = this.resolveCanonicalLocale(t?.sourceLocale || this.sourceLocale || "en");
		return (await Jr([e], {
			...t,
			targetLocale: r,
			sourceLocale: i
		}, this._getTranslationConfig(), n))[0];
	}
	async translateMany(e, t, n) {
		typeof t == "string" && (t = { targetLocale: t }), this._validateAuth("translateMany");
		let r = t?.targetLocale || this.targetLocale;
		if (!r) {
			let e = L("translateMany");
			throw Gr.error(e), Error(e);
		}
		r = this.resolveCanonicalLocale(r);
		let i = this.resolveCanonicalLocale(t?.sourceLocale || this.sourceLocale || "en");
		return await Jr(e, {
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
		if (!e) throw Error(L("getLocaleName"));
		return this.localeConfig.getLocaleName(e);
	}
	getLocaleEmoji(e = this.targetLocale) {
		if (!e) throw Error(L("getLocaleEmoji"));
		return this.localeConfig.getLocaleEmoji(e);
	}
	getLocaleProperties(e = this.targetLocale) {
		if (!e) throw Error(L("getLocaleProperties"));
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
		return $n(e, this.targetLocale, t);
	}
	requiresTranslation(e = this.sourceLocale, t = this.targetLocale, n = this.locales, r = this.customMapping) {
		if (!e) throw Error(Mr("requiresTranslation"));
		if (!t) throw Error(L("requiresTranslation"));
		return r === this.customMapping ? this.localeConfig.requiresTranslation(t, e, n) : nr(e, t, n, r);
	}
	determineLocale(e, t = this.locales || [], n = this.customMapping) {
		return n === this.customMapping ? this.localeConfig.determineLocale(e, t ?? []) : rr(e, t, n);
	}
	getLocaleDirection(e = this.targetLocale) {
		if (!e) throw Error(L("getLocaleDirection"));
		return this.localeConfig.getLocaleDirection(e);
	}
	isValidLocale(e = this.targetLocale, t = this.customMapping) {
		if (!e) throw Error(L("isValidLocale"));
		return t === this.customMapping ? this.localeConfig.isValidLocale(e) : M(e, t);
	}
	resolveCanonicalLocale(e = this.targetLocale, t = this.customMapping) {
		if (!e) throw Error(L("resolveCanonicalLocale"));
		return t === this.customMapping ? this.localeConfig.resolveCanonicalLocale(e) : er(e, t);
	}
	resolveAliasLocale(e, t = this.customMapping) {
		if (!e) throw Error(L("resolveAliasLocale"));
		return t === this.customMapping ? this.localeConfig.resolveAliasLocale(e) : ir(e, t);
	}
	standardizeLocale(e = this.targetLocale) {
		if (!e) throw Error(L("standardizeLocale"));
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
}, Xr = "DEBUG";
function Zr() {
	let e = $r();
	return e === void 0 ? ei(() => void 0) : e;
}
function Qr(e) {
	return e?.toUpperCase() === Xr;
}
function $r() {
	if (typeof process == "object") return process.env?._GENERALTRANSLATION_LOG_LEVEL;
}
function ei(e) {
	try {
		return e();
	} catch {
		return;
	}
}
function ti(e) {
	let t = globalThis;
	return t.__generaltranslation ??= {}, t.__generaltranslation[e] ??= {}, t.__generaltranslation[e];
}
function ni(e) {
	return globalThis.__generaltranslation?.[e];
}
function R({ namespace: e, key: t, source: n, notInitialized: r }) {
	function i() {
		let n = ti(e)[t];
		if (n == null) {
			let e = r();
			throw typeof e == "string" ? Error(e) : e;
		}
		return n;
	}
	function a(r) {
		let i = ti(e);
		if (i[t] !== void 0 && i[t] !== r) {
			ri() && console.warn(S({
				source: n,
				severity: "Warning",
				whatHappened: `Global ${t} singleton instance was already initialized`
			}));
			return;
		}
		i[t] = r;
	}
	function o() {
		return ti(e)[t] != null;
	}
	return {
		get: i,
		set: a,
		isInitialized: o
	};
}
function ri() {
	let e = ni("i18n")?.i18nConfig;
	return ii(e) ? e.isDebugLoggingEnabled() : Qr(Zr());
}
function ii(e) {
	return typeof e == "object" && !!e && typeof e.isDebugLoggingEnabled == "function";
}
var ai = R({
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
function oi() {
	return ai.get();
}
function si(e) {
	ai.set(e);
}
function ci(e) {
	return e.loadTranslations ? "custom" : (e.cacheUrl === void 0 || e.cacheUrl === "https://cdn.gtx.dev") && e.projectId ? "gt-remote" : e.cacheUrl ? "remote" : "disabled";
}
function li(e) {
	let t = e.runtimeUrl === void 0 || e.runtimeUrl === "https://api.gtx.dev";
	return t && e.projectId && (e.devApiKey || e.apiKey) ? "gt" : e.runtimeUrl && !t ? "custom" : "disabled";
}
function ui() {
	if (typeof process == "object" && process.env.NODE_ENV === "development") return "development";
	let e = di(() => "production");
	return e ? e === "development" ? "development" : "production" : di(() => !0) === !0 ? "development" : "production";
}
function di(e) {
	try {
		return e();
	} catch {
		return;
	}
}
var z = {
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
function fi(e, t) {
	if (!t) return;
	let n = pi(e), r = mi(e), i = [...n, ...r];
	if (i.forEach((e) => {
		z.error(`I18nConfig: ${hi(e)}`);
	}), i.length > 0) throw Error(S({
		source: "gt-i18n",
		severity: "Error",
		whatHappened: "Invalid I18nConfig locale configuration",
		details: i.map((e) => `Invalid locale: ${e}`),
		fix: "Use valid BCP 47 locale codes or add custom mappings."
	}));
}
function pi({ defaultLocale: e, locales: t, customMapping: n }) {
	let r = /* @__PURE__ */ new Set([...e ? [e] : [], ...t || []]);
	return Array.from(r).filter((e) => !M(e, n));
}
function mi({ customMapping: e }) {
	return Object.values(e || {}).flatMap((e) => {
		let t = typeof e == "string" ? e : e.code;
		return t && !M(t) ? [t] : [];
	});
}
function hi(e) {
	return S({
		whatHappened: `Locale "${e}" is not valid`,
		fix: "Use a valid BCP 47 locale code or add a custom mapping"
	});
}
var gi = class extends Qn {
	constructor(e = {}) {
		let t = bi(e);
		super(_i(e, t)), this.runtimeConfig = {
			projectId: e.projectId,
			devApiKey: e.devApiKey,
			apiKey: e.apiKey,
			runtimeUrl: e.runtimeUrl,
			_disableDevHotReload: e._disableDevHotReload,
			_tagIds: e._tagIds
		}, this.gtServicesEnabled = t, this.logLevel = Zr();
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
		return !this.runtimeConfig._disableDevHotReload && !!this.runtimeConfig.devApiKey && !!this.runtimeConfig.projectId && this.runtimeConfig.runtimeUrl !== null && this.runtimeConfig.runtimeUrl !== "" && ui() === "development";
	}
	isGTServicesEnabled() {
		return this.gtServicesEnabled;
	}
	isDebugLoggingEnabled() {
		return Qr(this.logLevel);
	}
	getGTClassClean(e) {
		return new Yr({
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
		return !e || !yi(e) ? this : new Qn(vi(e));
	}
	determineSupportedLocaleWithConfig(e, t) {
		if (!(e == null || Array.isArray(e) && e.length === 0)) return t.determineLocale(e);
	}
};
function _i(e, t) {
	let { defaultLocale: n = "en", locales: r = [], customMapping: i } = e;
	return fi({
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
function vi({ defaultLocale: e = "en", locales: t = [], customMapping: n } = {}) {
	return {
		defaultLocale: e,
		locales: t?.length ? t : [e],
		customMapping: n || {}
	};
}
function yi(e) {
	return e.defaultLocale !== void 0 || e.locales !== void 0 || e.customMapping !== void 0;
}
function bi(e) {
	return ci(e) === "gt-remote" || li(e) === "gt";
}
var xi = R({
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
}), B = xi.get, Si = xi.set;
xi.isInitialized;
function Ci(e) {
	let t = R({
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
var { getConditionStore: wi, setConditionStore: Ti } = Ci(S({
	source: "gt-i18n",
	severity: "Error",
	whatHappened: "Cannot read the locale before GT has been initialized",
	why: "the internal ConditionStore singleton is unavailable",
	fix: "Initialize GT before calling translation functions (e.g. call initializeGT() from your GT framework package)."
}));
function Ei(e, t) {
	let n = t;
	return n.$_hash == null ? Dr({
		source: t.$format === "ICU" ? nn(e) : e,
		...n.$context && { context: n.$context },
		...n.$maxChars != null && { maxChars: Math.abs(n.$maxChars) },
		...n.$requiresReview === !0 && { requiresReview: !0 },
		dataFormat: t.$format
	}) : n.$_hash;
}
function Di(e, t) {
	let n = `${t}=`, r = e?.split(";").map((e) => e.trim()).find((e) => e.startsWith(n));
	if (!r) return;
	let i = r.slice(n.length);
	try {
		return decodeURIComponent(i);
	} catch {
		return i;
	}
}
function Oi(e) {
	let t = e ? e.split(".") : [];
	for (let n of t) ki(n, e);
	return t;
}
function ki(e, t) {
	if (e === "__proto__" || e === "constructor" || e === "prototype") throw Error(`Dictionary path "${t}" contains an unsafe segment`);
}
function V(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function H(e) {
	return e === void 0 || typeof e == "string" ? e : structuredClone(e);
}
function Ai(e, t) {
	let n = e;
	for (let e of Oi(t)) {
		if (!V(n)) return;
		n = n[e];
	}
	return n;
}
function ji(e, t, n) {
	let r = Oi(t);
	if (V(n) && Ri(n, t), r.length === 0) {
		V(n) && Li(e, n);
		return;
	}
	let i = e;
	for (let e of r.slice(0, -1)) {
		let t = i[e];
		V(t) || (i[e] = {}), i = i[e];
	}
	let a = r[r.length - 1];
	i[a] = n;
}
function U(e) {
	if (Pi(e)) return {
		entry: Array.isArray(e) ? e[0] : e,
		options: Array.isArray(e) ? e[1] ?? {} : {}
	};
}
function Mi(e) {
	return Object.keys(e.options).length === 0 ? e.entry : [e.entry, e.options];
}
function Ni(e) {
	let { $format: t, ...n } = e;
	return {
		...n,
		$format: Ii(t) ? t : "ICU"
	};
}
function Pi(e) {
	return typeof e == "string" ? !0 : !Array.isArray(e) || typeof e[0] != "string" ? !1 : e.length === 1 || e.length === 2 && Fi(e[1]);
}
function Fi(e) {
	if (typeof e != "object" || !e || Array.isArray(e)) return !1;
	let t = e;
	return (t.$context === void 0 || typeof t.$context == "string") && (t.$format === void 0 || Ii(t.$format)) && (t.$maxChars === void 0 || typeof t.$maxChars == "number");
}
function Ii(e) {
	return e === "ICU" || e === "I18NEXT" || e === "STRING";
}
function Li(e, t) {
	for (let t of Object.keys(e)) delete e[t];
	for (let n of Object.keys(t)) e[n] = t[n];
}
function Ri(e, t = "") {
	for (let [n, r] of Object.entries(e)) {
		let e = t ? `${t}.${n}` : n;
		ki(n, e), V(r) && Ri(r, e);
	}
}
function zi(e, t, n = {}) {
	return (r) => (i) => e.translateMany(i, {
		...n,
		targetLocale: r
	}, t);
}
function Bi(e) {
	let t = Vi(e);
	return async (n) => {
		n = er(n, e.customMapping);
		let r = t.replace("[locale]", n), i = await fetch(r);
		if (!i.ok) throw Error(`Failed to load translations from ${r}`);
		return await i.json();
	};
}
function Vi(e) {
	let { cacheUrl: t = ie, projectId: n, _versionId: r, _branchId: i } = e, a = r ? `/${r}` : "", o = i ? `?branchId=${i}` : "";
	return `${t}/${n}/[locale]` + a + o;
}
function Hi({ type: e, remoteTranslationLoaderParams: t, loadTranslations: n }) {
	let { cacheUrl: r, projectId: i, _versionId: a, _branchId: o } = t;
	switch (e) {
		case "remote":
		case "gt-remote": return i ? Bi({
			cacheUrl: r,
			projectId: i,
			_versionId: a,
			_branchId: o,
			customMapping: B().getCustomMapping()
		}) : Ui(S({
			whatHappened: "Loading translations from a remote store needs a projectId. No translations will be loaded.",
			fix: "Add projectId to the I18nCache config, or set cacheUrl to null to disable translation loading"
		}));
		case "custom": return n;
		case "disabled": return r === null ? async () => ({}) : Ui(S({
			whatHappened: "No translation loader found. No translations will be loaded.",
			fix: "Add projectId to the I18nCache config (to load from the GT remote store), provide a loadTranslations function, or set cacheUrl to null to disable translation loading"
		}));
	}
}
function Ui(e) {
	let t = !1;
	return async (n) => (t || (t = !0, z.warn("I18nCache: " + e)), {});
}
async function Wi(e, t, n) {
	let r = e.get(t);
	r || (r = n(), e.set(t, r));
	try {
		return await r;
	} finally {
		e.delete(t);
	}
}
var Gi = class {
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
		return Wi(this.pendingLoads, e, () => this.loadResource(e).then((t) => (this.set(e, t), t)));
	}
	getExpiresAt() {
		return this.ttl <= 0 ? this.ttl : Date.now() + this.ttl;
	}
	isExpired(e) {
		return e.expiresAt === 0 || e.expiresAt > 0 && e.expiresAt < Date.now();
	}
}, Ki = {
	maxConcurrentRequests: 100,
	maxBatchSize: 25,
	batchInterval: 50
};
function qi(e, t, n = !1) {
	if (e === void 0 || !Number.isFinite(e)) return t;
	let r = n ? Math.trunc(e) : e;
	return r > 0 ? r : t;
}
function Ji(e) {
	return {
		maxConcurrentRequests: qi(e?.maxConcurrentRequests, Ki.maxConcurrentRequests, !0),
		maxBatchSize: qi(e?.maxBatchSize, Ki.maxBatchSize, !0),
		batchInterval: qi(e?.batchInterval, Ki.batchInterval)
	};
}
var Yi = class {
	constructor({ init: e, translateMany: t, onMiss: n, batchConfig: r }) {
		this.pendingTranslations = /* @__PURE__ */ new Map(), this.queue = [], this.batchTimer = null, this.activeRequests = 0, this.cache = structuredClone(e), this.translateMany = t, this.batchConfig = Ji(r), this.onMiss = n;
	}
	get(e) {
		let t = this.getCacheKey(e);
		return this.cache[t];
	}
	async miss(e) {
		let t = this.getCacheKey(e), n = await Wi(this.pendingTranslations, t, () => this.translate(e));
		return n != null && this.onMiss?.(t, n), n;
	}
	getInternalCache() {
		return structuredClone(this.cache);
	}
	getCacheKey(e) {
		return Ei(e.message, e.options);
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
		let t = Xi(e), n = await this.sendBatchRequestWithErrorHandling(e, t);
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
function Xi(e) {
	return e.reduce((e, t) => (e[t.key] = {
		source: t.source,
		metadata: t.metadata
	}, e), {});
}
var W = class extends Error {
	constructor(e) {
		super(`I18nCache: source dictionary entry ${e} is not defined`), this.name = "DictionarySourceNotFoundError";
	}
};
async function Zi({ key: e, sourceValue: t, targetValue: n, translateEntry: r }) {
	if (U(n) !== void 0 || V(n) && !V(t)) return H(n);
	let i = U(t);
	if (i !== void 0) return await r(e, i);
	if (!V(t)) throw new W(e);
	let a = V(n) ? n : {}, o = /* @__PURE__ */ new Set([...Object.keys(t), ...Object.keys(a)]), s = await Promise.all(Array.from(o).map(async (n) => {
		let i = e ? `${e}.${n}` : n;
		ki(n, i);
		let o = t[n];
		return o === void 0 ? [n, H(a[n])] : [n, await Zi({
			key: i,
			sourceValue: o,
			targetValue: a[n],
			translateEntry: r
		})];
	}));
	return Object.fromEntries(s);
}
function Qi(e) {
	return {
		entry: e.entry,
		options: structuredClone(e.options)
	};
}
var $i = class {
	constructor({ init: e, runtimeTranslate: t }) {
		this.pendingTranslations = /* @__PURE__ */ new Map(), this.pendingMaterializations = /* @__PURE__ */ new Map(), this.cache = structuredClone(e), this.runtimeTranslate = t;
	}
	getEntry(e) {
		let t = U(Ai(this.cache, e));
		if (t !== void 0) return Qi(t);
	}
	getValue(e) {
		let t = Ai(this.cache, e);
		if (t !== void 0) return H(t);
	}
	setValue(e, t) {
		ji(this.cache, e, H(t));
	}
	getInternalCache() {
		return H(this.cache);
	}
	update(e) {
		ea(this.cache, e);
	}
	async materializeValue(e, t, n = Ai(this.cache, e)) {
		return Wi(this.pendingMaterializations, e, () => Zi({
			key: e,
			sourceValue: t,
			targetValue: n,
			translateEntry: async (e, t) => Mi(await this.materializeEntry(e, t))
		}).then((t) => (this.setValue(e, t), t)));
	}
	async materializeEntry(e, t) {
		return Qi(await Wi(this.pendingTranslations, e, () => this.runtimeTranslate(e, t).then((t) => {
			ji(this.cache, e, t);
			let n = U(t);
			if (n === void 0) throw Error("DictionaryCache materializeEntry did not return a DictionaryEntry");
			return Qi(n);
		})));
	}
};
function ea(e, t) {
	for (let [n, r] of Object.entries(t)) {
		let t = e[n];
		V(t) && V(r) ? ea(t, r) : e[n] = H(r);
	}
}
var ta = 12e3, na = class {
	constructor(e) {
		ra(e), this.config = {
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
		let t = Hi({
			loadTranslations: e.loadTranslations,
			type: ci(e),
			remoteTranslationLoaderParams: {
				cacheUrl: e.cacheUrl,
				projectId: e.projectId,
				_versionId: e._versionId,
				_branchId: e._branchId
			}
		}), n = e.loadDictionary ?? (() => Promise.resolve({}));
		this.createTranslateMany = zi(B().getGTClass(), this.config.runtimeTranslation?.timeout ?? ta, {
			...this.config.modelProvider && { modelProvider: this.config.modelProvider },
			...this.config.runtimeTranslation?.metadata
		});
		let r = this.config.cacheExpiryTime;
		this.translations = new Gi({
			ttl: r,
			load: async (e) => this.createTranslationsCache(e, await t(e))
		}), this.dictionaries = new Gi({
			ttl: r,
			load: async (e) => this.createDictionaryCache(e, await n(e))
		});
		let i = B().getDefaultLocale();
		this.dictionaries.set(i, this.createDictionaryCache(i, e.dictionary ?? {}), { expiresAt: -1 });
	}
	createTranslationsCache(e, t) {
		return new Yi({
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
		return new $i({
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
				throw new W(t);
			}
			return await r.materializeValue(t, a, i);
		});
	}
	async translateDictionaryEntry(e, t, n) {
		let r = await this.lookupTranslationWithFallbackResolved(e, n.entry, Ni(n.options));
		if (typeof r != "string") throw Error(`Dictionary entry "${t}" could not be translated into a string. Check the source entry and translation loader output.`);
		return r;
	}
	getSourceDictionaryEntry(e) {
		let t = this.getDefaultDictionaryCache()?.getEntry(e);
		if (t === void 0) throw new W(e);
		return t;
	}
	getSourceDictionaryObject(e, { throwOnMissing: t = !0 } = {}) {
		let n = this.getDefaultDictionaryCache()?.getValue(e);
		if (n === void 0 && t) throw new W(e);
		return n;
	}
	getDefaultDictionaryCache() {
		return this.dictionaries.get(B().getDefaultLocale());
	}
	resolveDictionaryCacheLocale(e) {
		return this._resolveCacheLocale(e) ?? B().getDefaultLocale();
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
				if (process.env.NODE_ENV !== "production" && B().isDevHotReloadEnabled()) {
					let r = ia(e, t, (e) => this._resolveCacheLocale(e) ?? this._resolveLocale(e));
					r.length !== e.length && z.warn(`I18nCache: getLookupTranslation(): prefetchEntries must all be the same locale, ignoring all entries that are not for ${t}`), await Promise.allSettled(r.filter((e) => n.get(e) == null).map((e) => n.miss(e)));
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
		if (e instanceof W) throw e;
		switch (ui()) {
			case "development": throw e;
			default: z.error("I18nCache: " + e);
		}
	}
	_resolveLocale(e) {
		let t = B(), n = t.determineLocale(e);
		if (!t.isValidLocale(e) || !n) throw Error(`Locale "${e}" is not valid. Use a valid BCP 47 locale code or add a custom mapping.`);
		return n;
	}
	_resolveCacheLocale(e) {
		let t = this._resolveLocale(e), n = B();
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
function ra(e) {
	if (e.runtimeUrl && e.runtimeUrl !== "https://api.gtx.dev" && (e.projectId || z.warn("I18nCache: " + S({
		whatHappened: "Runtime translation needs a projectId",
		fix: "Add projectId to the I18nCache config or disable runtime translation"
	})), !e.devApiKey && !e.apiKey && z.warn("I18nCache: " + S({
		whatHappened: "Runtime translation needs devApiKey or apiKey",
		fix: "Add credentials to the I18nCache config or disable runtime translation"
	}))), e.loadDictionary && !e.dictionary) throw z.error("I18nCache: " + S({
		whatHappened: "loadDictionary needs a source dictionary",
		fix: "Provide dictionary so the default locale has source content"
	})), Error("Validation errors occurred");
}
function ia(e, t, n) {
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
function aa(e) {
	let t = "hash" in e ? e.hash : Ei(e.message, e.options);
	return `${e.locale}:${t}`;
}
var oa = [];
function sa({ locale: e, enableI18n: t, localesProp: n = oa }) {
	let r = B().getDefaultLocale();
	return t && B().requiresTranslation(e) ? [
		...n,
		e,
		r
	] : [r];
}
function G() {
	return oi();
}
function ca(e) {
	si(e);
}
var la = "generaltranslation.locale-reset", ua = "server-render", da = Symbol.for("generaltranslation.react-core.ReactI18nConfig"), fa = class extends gi {
	renderStrategy;
	localeCookieName;
	regionCookieName;
	enableI18nCookieName;
	constructor(e = {}, t = ua) {
		super(e), ha(t), Object.defineProperty(this, da, { value: !0 }), this.renderStrategy = t, this.localeCookieName = e.localeCookieName ?? "generaltranslation.locale", this.regionCookieName = e.regionCookieName ?? "generaltranslation.region", this.enableI18nCookieName = e.enableI18nCookieName ?? "generaltranslation.enable-i18n";
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
function K() {
	let e = B();
	if (ga(e)) return e;
	throw Error(S({
		source: "@generaltranslation/react-core",
		severity: "Error",
		whatHappened: "Cannot read ReactI18nConfig after base I18nConfig setup.",
		why: "the internal I18nConfig singleton was initialized without react-core render strategy support",
		fix: "Initialize GT through gt-react or @generaltranslation/react-core/pure."
	}));
}
function pa(e) {
	Si(e);
}
function ma(e = {}, t = ua) {
	let n = new fa(e, t);
	return pa(n), n;
}
function ha(e) {
	if (e !== "SPA" && e !== "server-render") throw Error(S({
		source: "@generaltranslation/react-core",
		severity: "Error",
		whatHappened: "Invalid React render strategy.",
		why: `the render strategy must be "SPA" or "server-render", but received "${String(e)}"`,
		fix: "Initialize GT through gt-react or pass a valid render strategy."
	}));
}
function ga(e) {
	if (e instanceof fa) return !0;
	let t = e;
	return t[da] === !0 && typeof t.getRenderStrategy == "function" && typeof t.getLocaleCookieName == "function" && typeof t.getRegionCookieName == "function" && typeof t.getEnableI18nCookieName == "function";
}
var { getConditionStore: _a, setConditionStore: va, isConditionStoreInitialized: ya } = Ci(S({
	source: "@generaltranslation/react-core",
	severity: "Error",
	whatHappened: "Cannot read GT runtime context before it has been initialized",
	why: "the internal ConditionStore is unavailable",
	fix: "Call initializeGT() during setup (gt-next runs this automatically) and add a <GTProvider> at the root of your component tree."
}));
function ba({ Currency: e, GtInternalCurrency: t, DateTime: n, GtInternalDateTime: r, Num: i, GtInternalNum: a, RelativeTime: o, GtInternalRelativeTime: s, Var: c, GtInternalVar: l }) {
	return function({ variableType: u, variableValue: d, variableOptions: f, locales: p, enableI18n: m, injectionType: g }) {
		let _ = {
			_locale: p[0] ?? "en",
			_enableI18n: m
		};
		if (u === "n") {
			let e = g === "automatic" ? i : a, t = f;
			return h(e, {
				..._,
				options: t,
				children: d
			});
		}
		if (u === "d") {
			let e = g === "automatic" ? n : r, t = f;
			return h(e, {
				..._,
				options: t,
				children: d
			});
		}
		if (u === "c") {
			let n = g === "automatic" ? e : t, r = f;
			return h(n, {
				..._,
				options: r,
				children: d
			});
		}
		if (u === "rt") {
			let e = g === "automatic" ? o : s, t = f;
			if (typeof d == "number" && t?.unit) return h(e, {
				..._,
				value: d,
				unit: t.unit,
				baseDate: t?.baseDate,
				options: t
			});
			let n = d instanceof Date ? d : typeof d == "string" || typeof d == "number" ? new Date(d) : void 0;
			return h(e, {
				..._,
				date: n && !isNaN(n.getTime()) ? n : void 0,
				baseDate: t?.baseDate,
				options: t
			});
		}
		let v = d;
		return h(g === "automatic" ? l : c, {
			..._,
			children: v
		});
	};
}
var xa = {
	variable: "value",
	number: "n",
	datetime: "date",
	currency: "cost",
	"relative-time": "time"
};
function Sa(e = {}, t) {
	return typeof e.name == "string" ? e.name : `_gt_${xa[t] || "value"}_${e["data-_gt"]?.id}`;
}
function Ca(e) {
	return typeof e == "object" && !!e && "data-_gt" in e && typeof e["data-_gt"] == "object" && !!e["data-_gt"] && "transformation" in e["data-_gt"] && e["data-_gt"]?.transformation === "variable";
}
function wa(e) {
	let t = e["data-_gt"]?.variableType || "variable";
	return {
		variableName: Sa(e, t),
		variableType: tn(t),
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
function Ta(e) {
	return e && e.props && e.props["data-_gt"] ? e.props["data-_gt"] : null;
}
function Ea(e, t, n) {
	let r = "", i = null;
	return typeof e == "number" && !i && n && (r = $t(e, Object.keys(n).filter(Qt), t)), r && !i && (i = n[r]), i;
}
function Da({ renderVariable: t }) {
	return function({ children: n, defaultLocale: r = "en", enableI18n: i }) {
		let a = (n) => {
			let a = Ta(n);
			if (Ca(n.props)) {
				let { variableType: e, variableValue: a, variableOptions: o, injectionType: s } = wa(n.props);
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
				return typeof n.props.n == "number" ? s(Ea(n.props.n, [r], e) ?? n.props.children) : n.props.children == null ? null : s(n.props.children);
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
function Oa({ renderVariable: t }) {
	let n = Da({ renderVariable: t });
	function r({ sourceElement: t, targetElement: r, locales: a = ["en"], enableI18n: o }) {
		let { props: s } = t, c = s["data-_gt"], l = c?.transformation, u = r.d, d = {};
		if (u && Object.entries(un).forEach(([e, t]) => {
			u[e] && (d[t] = u[e]);
		}), l === "plural") {
			let e = t.props.n;
			return typeof e == "number" ? i({
				source: Ea(e, a, c.branches || {}) ?? t.props.children,
				target: Ea(e, a, r.d?.b || {}) ?? r.c,
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
					if (Ca(t.props)) {
						let { variableName: e, variableValue: r, variableOptions: i, injectionType: a } = wa(t.props);
						n[e] = r, c[e] = i, l[e] = a;
					} else return !0;
				}
				return !1;
			}), d = (e) => u.find((t) => {
				let n = Ta(t);
				return n?.id !== void 0 && n.id === e.i;
			}) || u.shift();
			return a.map((i, a) => {
				if (typeof i == "string") return h(e.Fragment, { children: i }, `string_${a}`);
				if (Wt(i)) return h(e.Fragment, { children: t({
					variableType: i.v || "v",
					variableValue: n[i.k],
					variableOptions: c[i.k],
					locales: o,
					enableI18n: s,
					injectionType: l[i.k] || "manual"
				}) }, `var_${a}`);
				let u = d(i);
				return u ? h(e.Fragment, { children: r({
					sourceElement: u,
					targetElement: i,
					locales: o,
					enableI18n: s
				}) }, `element_${a}`) : null;
			});
		}
		if (a && typeof a == "object" && !Array.isArray(a)) {
			let n = Wt(a) ? "variable" : "element";
			if (e.isValidElement(i)) {
				if (n === "element") return r({
					sourceElement: i,
					targetElement: a,
					locales: o,
					enableI18n: s
				});
				if (Ca(i.props)) {
					let { variableValue: e, variableOptions: n, variableType: r, injectionType: a } = wa(i.props);
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
function ka() {
	let e = B();
	return typeof e.isIdTaggingEnabled == "function" && e.isIdTaggingEnabled();
}
function Aa(...e) {
	if (!ka()) return;
	let t = Ei(...e);
	return e[1].$_hash = t, t;
}
var ja = { display: "contents" }, Ma = globalThis.navigator?.product === "ReactNative";
function Na(e) {
	if (e == null || typeof e == "boolean" || e === "") return !0;
	if (Array.isArray(e)) return !e.some((e) => !Na(e));
	if (o(e) && e.type === n) {
		let t = e.props.children;
		return t == null || Na(t);
	}
	return !1;
}
function Pa(e, t) {
	return Ma || !ka() ? e : o(e) && typeof e.type == "string" ? r(e, { "data-_gt-hash": t }) : Na(e) ? e : a("span", {
		"data-_gt-hash": t,
		style: ja
	}, e);
}
function Fa({ renderDefaultChildren: e, renderTranslatedChildren: t }) {
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
		return c ? Pa(l, c) : l;
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
function Ia(e) {
	let t = ba(e), n = Da({ renderVariable: t }), r = Oa({ renderVariable: t });
	return {
		renderVariable: t,
		renderDefaultChildren: n,
		renderTranslatedChildren: r,
		renderPreparedT: Fa({
			renderDefaultChildren: n,
			renderTranslatedChildren: r
		})
	};
}
var La = class extends na {};
function Ra(e) {
	ma(e, "server-render"), ca(new La(e));
}
var za = R({
	namespace: "reactCore",
	key: "i18nStore",
	source: "@generaltranslation/react-core",
	notInitialized: () => Va()
}), Ba = za.get;
za.set, za.isInitialized;
function Va() {
	let e = S({
		source: "@generaltranslation/react-core",
		severity: "Error",
		whatHappened: "Cannot access I18nStore before it is initialized.",
		fix: K().getRenderStrategy() === "SPA" ? "Initialize GT before reading GT runtime context." : "Add a <GTProvider> at the root of your component tree."
	});
	return Error(e);
}
function Ha(e, t) {
	return e.add(t), () => {
		e.delete(t);
	};
}
function Ua(e, t) {
	let n = t.options.$_hash ?? Ei(t.message, t.options);
	return e?.[t.locale]?.[n];
}
function Wa(e, t) {
	return U(Ka(e, t));
}
function Ga(e, t) {
	return Ka(e, t);
}
function Ka(e, { locale: t, id: n }) {
	let r = e?.[t];
	if (!r) return;
	if (!n) return r;
	let i = r;
	for (let e of n.split(".")) {
		if (!qa(e) || !V(i) || !Object.prototype.hasOwnProperty.call(i, e)) return;
		i = i[e];
	}
	return i;
}
function qa(e) {
	return e !== "__proto__" && e !== "constructor" && e !== "prototype";
}
function Ja(e) {
	if (e instanceof Error) return `${e.name}|${e.message}`;
	if (typeof e == "object" && e) try {
		return `object|${JSON.stringify(e)}`;
	} catch {
		return `object|${String(e)}`;
	}
	return `${typeof e}|${String(e)}`;
}
var Ya = class {
	translateListeners = /* @__PURE__ */ new Set();
	dictionaryEntryListeners = /* @__PURE__ */ new Set();
	dictionaryObjectListeners = /* @__PURE__ */ new Set();
	loggedRuntimeTranslationErrors = /* @__PURE__ */ new Set();
	constructor() {}
	updateTranslations = (e) => {
		G().updateTranslations(e);
	};
	updateDictionaries = (e) => {
		G().updateDictionaries(e);
	};
	translate = async (e) => G().lookupTranslationWithFallback(e.locale, e.message, e.options).then(() => {
		this.emitTranslateEvent(e);
	}).catch((e) => this.logRuntimeTranslationError(e));
	translateDictionaryEntry = (e) => {
		G().lookupDictionaryWithFallback(e.locale, e.id).then(() => {
			this.emitDictionaryEvent(e);
		}).catch((e) => this.logRuntimeTranslationError(e));
	};
	translateDictionaryObject = (e) => {
		G().lookupDictionaryObjWithFallback(e.locale, e.id).then(() => {
			this.emitDictionaryEvent(e);
		}).catch((e) => this.logRuntimeTranslationError(e));
	};
	logRuntimeTranslationError(e) {
		let t = re(e), n = Ja(e);
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
		let n = aa(e);
		return Ha(this.translateListeners, (e) => {
			aa(e) === n && t();
		});
	};
	subscribeToTranslationEvents = (e) => Ha(this.translateListeners, e);
	subscribeToDictionaryEntryEvents = (e) => Ha(this.dictionaryEntryListeners, e);
	subscribeToDictionaryObjectEvents = (e) => Ha(this.dictionaryObjectListeners, e);
	getTranslateSnapshot = (e, t = {}) => Ua(t, e) ?? G().lookupTranslation(e.locale, e.message, e.options);
	getDictionaryEntrySnapshot = (e, t = {}) => Wa(t, e) ?? G().lookupDictionary(e.locale, e.id);
	getDictionaryObjectSnapshot = (e, t = {}) => Ga(t, e) ?? G().lookupDictionaryObj(e.locale, e.id);
	emitTranslateEvent(e) {
		this.translateListeners.forEach((t) => t(e));
	}
	emitDictionaryEvent(e) {
		this.dictionaryEntryListeners.forEach((t) => t(e)), this.dictionaryObjectListeners.forEach((t) => {
			t(e);
		});
	}
};
function Xa({ i18nConfigParams: e, nextI18nCacheParams: t } = cn()) {
	Ra({
		...e,
		...t,
		cacheExpiryTime: null
	});
}
var Za = R({
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
function Qa() {
	return Za.isInitialized() || Za.set(i(void 0)), Za.get();
}
function $a() {
	let e = c(Qa());
	if (e || K().getRenderStrategy() === "SPA") return e;
	throw Error(eo());
}
function eo() {
	return S({
		source: "@generaltranslation/react-core",
		severity: "Error",
		whatHappened: "GT runtime context could not be read",
		why: "GTContext was accessed outside of a <GTProvider>",
		fix: "Add a <GTProvider> at the root of your component tree."
	});
}
function to() {
	return $a()?.conditionStore ?? _a();
}
function q() {
	return to().getLocale();
}
function J() {
	return to().getEnableI18n();
}
function no() {
	return d(() => B().getDefaultLocale(), []);
}
function ro() {
	let e = J(), t = q();
	return e && B().requiresTranslation(t);
}
function io() {
	return $a()?.i18nStore || Ba();
}
function ao() {
	return $a()?.translationsSnapshot || {};
}
var oo = () => {};
function so() {
	return oo;
}
function co() {
	return lo(ro());
}
function lo(e) {
	let t = $a()?.onMissingTranslation, n = fo(e);
	return s((e) => {
		t ? t(e) : n(aa(e), {
			type: "translation",
			lookup: e
		});
	}, [t, n]);
}
var uo = process.env.NODE_ENV === "production" ? so : co;
process.env.NODE_ENV, process.env.NODE_ENV, process.env.NODE_ENV;
function fo(e) {
	let t = process.env.NODE_ENV !== "production" && B().isDevHotReloadEnabled(), n = io(), r = /* @__PURE__ */ new Map();
	return l(() => {
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
function po({ _enableI18n: e, _locale: t, children: n, currency: r = "USD", options: i = {}, locales: a = [] }) {
	let o = sa({
		locale: t,
		enableI18n: e,
		localesProp: a
	}), s = B().getGTClass();
	if (n == null) return null;
	let c = typeof n == "string" ? parseFloat(n) : n;
	return s.formatCurrency(c, r, {
		locales: o,
		...i
	});
}
function mo({ _enableI18n: e, _locale: t, ...n }) {
	return po({
		...n,
		_enableI18n: e ?? J(),
		_locale: t ?? q()
	});
}
function ho(e) {
	return h(mo, { ...e });
}
mo._gtt = "variable-currency-automatic", ho._gtt = "variable-currency";
function go({ _enableI18n: e, _locale: t, children: n, options: r = {}, locales: i = [] }) {
	let a = sa({
		locale: t,
		enableI18n: e,
		localesProp: i
	}), o = B().getGTClass();
	return n == null ? null : o.formatDateTime(n, {
		locales: a,
		...r
	}).replace(/[\u200F\u202B\u202E]/g, "");
}
function _o({ _enableI18n: e, _locale: t, ...n }) {
	return go({
		...n,
		_enableI18n: e ?? J(),
		_locale: t ?? q()
	});
}
function vo(e) {
	return h(_o, { ...e });
}
_o._gtt = "variable-datetime-automatic", vo._gtt = "variable-datetime";
function yo({ _enableI18n: e, _locale: t, children: n, options: r = {}, locales: i = [] }) {
	let a = sa({
		locale: t,
		enableI18n: e,
		localesProp: i
	}), o = B().getGTClass();
	if (n == null) return null;
	let s = typeof n == "string" ? parseFloat(n) : n;
	return o.formatNum(s, {
		locales: a,
		...r
	});
}
function bo({ _enableI18n: e, _locale: t, ...n }) {
	return yo({
		...n,
		_enableI18n: e ?? J(),
		_locale: t ?? q()
	});
}
function xo(e) {
	return h(bo, { ...e });
}
bo._gtt = "variable-number-automatic", xo._gtt = "variable-number";
function So({ _enableI18n: e, _locale: t, date: n, children: r, value: i, unit: a, baseDate: o, locales: s = [], options: c = {} }) {
	let l = sa({
		locale: t,
		enableI18n: e,
		localesProp: s
	}), u = B().getGTClass(), d = n ?? r;
	return process.env.NODE_ENV === "development" && i !== void 0 && !a && console.warn("<RelativeTime>: `value` was provided without `unit`. The `value` prop will be ignored."), i !== void 0 && a ? u.formatRelativeTime(i, a, {
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
function Co({ _enableI18n: e, _locale: t, ...n }) {
	return So({
		...n,
		_enableI18n: e ?? J(),
		_locale: t ?? q()
	});
}
function wo(e) {
	return h(Co, { ...e });
}
Co._gtt = "variable-relative-time-automatic", wo._gtt = "variable-relative-time";
function To({ children: e }) {
	return e;
}
function Eo({ children: e }) {
	return To({ children: e });
}
function Do({ children: e }) {
	return To({ children: e });
}
Eo._gtt = "variable-variable", Do._gtt = "variable-variable-automatic";
function Oo(e) {
	let t = io(), n = ao(), r = uo(), i = m((n) => t.subscribeToTranslate(e, n), () => t.getTranslateSnapshot(e, n), () => t.getTranslateSnapshot(e, n));
	return process.env.NODE_ENV !== "production" && i == null && B().isDevHotReloadEnabled() && r(e), i;
}
var { renderVariable: ko, renderDefaultChildren: Ao, renderTranslatedChildren: jo, renderPreparedT: Mo } = Ia({
	Currency: ho,
	GtInternalCurrency: mo,
	DateTime: vo,
	GtInternalDateTime: _o,
	Num: xo,
	GtInternalNum: bo,
	RelativeTime: wo,
	GtInternalRelativeTime: Co,
	Var: Eo,
	GtInternalVar: Do
});
function No(t, n = 0) {
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
				let e = Object.entries(n).reduce((e, [t, n]) => (Qt(t) && (e[t] = No(n, r)), e), {});
				Object.keys(e).length && (i.branches = e);
			}
			if (e[0] === "branch") {
				let { children: e, branch: t, ...a } = n, o = Object.fromEntries(Object.entries(a).filter(([e]) => !e.startsWith("data-"))), s = Object.entries(o).reduce((e, [t, n]) => (e[t] = No(n, r), e), {});
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
function Po(e) {
	return Lo(e, 0);
}
function Fo(e, t) {
	let { type: n, props: i } = e, a = Ro(n);
	if (typeof i != "object" || !i) return e;
	if (a) {
		let { componentType: n, injectionType: o } = a;
		if (n === "variable") return e;
		if (n === "branch") return r(e, { ...Object.entries(i).reduce((e, [n, r]) => (e[n] = n !== "branch" && !n.startsWith("data-") ? Io(r, t) : r, e), {}) });
		if (n === "plural") return r(e, { ...Object.entries(i).reduce((e, [n, r]) => (e[n] = Qt(n) || n === "children" ? Io(r, t) : r, e), {}) });
		if (n === "derive") return r(e, {
			...i,
			..."children" in i && { children: Lo(i.children, t + 1) }
		});
		if (n === "translate" && o === "automatic" && t > 0) return "children" in i ? Lo(i.children, t) : void 0;
		n === "translate" && o === "automatic" && console.warn(zo);
	}
	return r(e, {
		...i,
		..."children" in i && { children: Lo(i.children, t) }
	});
}
function Io(e, t) {
	return o(e) ? Fo(e, t) : e;
}
function Lo(e, n) {
	return Array.isArray(e) ? t.map(e, (e) => Io(e, n)) : Io(e, n);
}
function Ro(e) {
	let t = typeof e == "function" && "_gtt" in e ? e._gtt : void 0;
	if (t == null || typeof t != "string") return;
	let n = t.split("-");
	return {
		componentType: n[0],
		injectionType: n[1] === "automatic" || n[2] === "automatic" ? "automatic" : "manual"
	};
}
var zo = "'@generaltranslation/react-core Warning: A <_T> component was found injected outside of a <Derive> boundary. This may affect translation resolution for this component.";
function Bo(t) {
	return e.isValidElement(t);
}
var Vo = (e) => {
	if (!e) return "";
	let { type: t, props: n } = e;
	if (t && typeof t == "function") {
		if ("displayName" in t && typeof t.displayName == "string" && t.displayName) return t.displayName;
		if ("name" in t && typeof t.name == "string" && t.name) return t.name;
	}
	return t && typeof t == "string" ? t : n.href ? "a" : n["data-_gt"]?.id ? `C${n["data-_gt"].id}` : "function";
}, Ho = (e, t, n) => {
	let r = Object.entries(un).reduce((e, [n, r]) => {
		let i = t[r];
		return typeof i == "string" && (e[n] = i), e;
	}, {});
	if ((e === "plural" || e === "branch") && n) {
		let t = {};
		Object.entries(n).forEach(([e, n]) => {
			t[e] = Go(n);
		}), r = {
			...r,
			b: t,
			t: e === "plural" ? "p" : "b"
		};
	}
	return Object.keys(r).length ? r : void 0;
}, Uo = (e) => {
	let { props: t } = e, n = { t: Vo(e) };
	if (t["data-_gt"]) {
		let e = t["data-_gt"], r = e.transformation;
		if (r === "variable") {
			let n = e.variableType || "variable", r = Sa(t, n), i = tn(n);
			return {
				i: e.id,
				k: r,
				v: i
			};
		}
		n.i = e.id, n.d = Ho(r, t, e.branches);
	}
	return t.children && (n.c = Go(t.children)), n;
}, Wo = (e) => Bo(e) ? Uo(e) : typeof e == "number" ? e.toString() : e;
function Go(e) {
	return Array.isArray(e) ? e.map(Wo) : Wo(e);
}
function Ko({ sourceChildren: e, params: t, locale: n }) {
	let r = qo(e), i = Jo(r), a = Yo({
		options: Xo(t),
		locale: n
	});
	return Aa(i, a), {
		taggedSourceChildren: r,
		sourceJsxChildren: i,
		targetOptions: a
	};
}
function qo(e) {
	return No(Po(e));
}
function Jo(e) {
	return Go(e);
}
function Yo({ options: e, locale: t }) {
	return {
		...e,
		$locale: t
	};
}
function Xo(e) {
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
function Zo({ sourceChildren: e, params: t, _locale: n, _enableI18n: r }) {
	let i = q(), a = J(), o = no(), s = n ?? i, c = r ?? a;
	return {
		defaultLocale: o,
		enableI18n: c,
		locale: s,
		shouldTranslate: c && B().requiresTranslation(s),
		...d(() => Ko({
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
function Y(e) {
	return Qo(e);
}
Y._gtt = "translate-client";
function Qo({ children: e, _locale: t, _enableI18n: n, _renderPreparedT: r = Mo, ...i }) {
	let { defaultLocale: a, locale: o, enableI18n: s, targetOptions: c, taggedSourceChildren: l, sourceJsxChildren: u, shouldTranslate: d } = Zo({
		sourceChildren: e,
		params: i,
		_locale: t,
		_enableI18n: n
	}), p = Oo({
		locale: o,
		message: u,
		options: c
	}), m = f(null);
	if (process.env.NODE_ENV !== "production" && B().isDevHotReloadEnabled() && p == null && m.current != null && d) return m.current;
	let h = r({
		taggedSourceChildren: l,
		targetJsxChildren: p,
		locale: o,
		defaultLocale: a,
		enableI18n: s,
		shouldTranslate: d,
		hash: c.$_hash
	});
	return m.current = h, h;
}
var $o = Qa();
function es({ children: e, translations: t, dictionaries: n, conditionStore: r, i18nStore: i, onMissingTranslation: a, onMissingDictionaryEntry: o, onMissingDictionaryObj: s }) {
	let c = d(() => ({
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
	return l(() => {
		i.updateTranslations(t), i.updateDictionaries(n ?? {});
	}, [
		t,
		n,
		i
	]), h($o.Provider, {
		value: c,
		children: e
	});
}
function X({ cookieName: e }) {
	if (!(typeof document > "u")) return Di(document.cookie, e);
}
function Z({ cookieName: e, value: t }) {
	typeof document > "u" || (document.cookie = `${e}=${t};path=/`);
}
function ts(e) {
	let t = [], n = X({ cookieName: e });
	n && t.push(n);
	let r = navigator?.languages || [];
	return t.push(...r), t;
}
var ns = class {
	constructor(e) {
		this.getLocale = () => rs(this.customGetLocale), this.setLocale = (e) => {
			this.updateLocale(e), Z({
				cookieName: la,
				value: "true"
			}), this.reload();
		}, this.getRegion = () => X({ cookieName: K().getRegionCookieName() }) || this.customGetRegion?.(), this.setRegion = (e) => {
			this.updateRegion(e), this.reload();
		}, this.getEnableI18n = () => {
			let e = X({ cookieName: K().getEnableI18nCookieName() });
			return e === void 0 ? this.customGetEnableI18n?.() ?? !0 : e === "true";
		}, this.setEnableI18n = (e) => {
			this.updateEnableI18n(e), this.reload();
		}, this.updateLocale = (e) => {
			let t = K();
			Z({
				cookieName: t.getLocaleCookieName(),
				value: t.resolveSupportedLocale(e)
			});
		}, this.updateRegion = (e) => {
			Z({
				cookieName: K().getRegionCookieName(),
				value: e ?? ""
			});
		}, this.updateEnableI18n = (e) => {
			Z({
				cookieName: K().getEnableI18nCookieName(),
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
		let t = K();
		this.customReload = e._reload ?? (() => typeof window < "u" ? window.location.reload() : void 0), this.customGetLocale = e._getLocale, this.customGetRegion = e._getRegion, this.customGetEnableI18n = e._getEnableI18n, Z({
			cookieName: t.getLocaleCookieName(),
			value: t.resolveSupportedLocale(e.locale)
		}), e.region !== void 0 && Z({
			cookieName: t.getRegionCookieName(),
			value: e.region
		}), this.updateEnableI18n(e.enableI18n ?? !0);
	}
};
function rs(e) {
	let t = K(), n = ts(t.getLocaleCookieName());
	return e && n.push(e()), t.resolveSupportedLocale(n);
}
function is(e) {
	let t = e.trim();
	return t ? /[.!?)]$/.test(t) ? t : `${t}.` : "";
}
function Q(e) {
	let t = e.trim(), n = t.length;
	for (; n > 0;) {
		let e = t[n - 1];
		if (e !== "." && e !== "!" && e !== "?") break;
		--n;
	}
	return t.slice(0, n);
}
function as(e) {
	if (!e) return "";
	let t = Array.isArray(e) ? e.join(", ") : e;
	return t.trim() ? is(`Details: ${t}`) : "";
}
function os({ source: e, severity: t, whatHappened: n, reassurance: r, why: i, fix: a, wayOut: o, details: s, docsUrl: c }) {
	let l = e ? t ? `${e} ${t}:` : `${e}:` : t ? `${t}:` : "", u = i ? `${Q(n)} because ${Q(i)}` : n, d = !!a && !!o && /^[a-z]/.test(Q(o)), f = [
		u,
		r,
		d ? `${Q(a)}, or ${Q(o)}` : a,
		d ? void 0 : o,
		as(s)
	].filter((e) => !!e).map(is);
	c && f.push(`Learn more: ${c}`);
	let p = f.join(" ");
	return l ? `${l} ${p}` : p;
}
var ss = os({
	source: "gt-react",
	severity: "Error",
	whatHappened: "Cannot read GT runtime context before it has been initialized",
	why: "the internal ConditionStore singleton is unavailable",
	fix: "Call initializeGT() (or initializeGTSPA() in SPA apps) before rendering and add a <GTProvider> at the root of your component tree."
}), { setConditionStore: cs, isConditionStoreInitialized: ls } = Ci(ss), { getConditionStore: us, setConditionStore: ds, isConditionStoreInitialized: fs } = Ci(ss);
function ps(e) {
	let t = ms(e), n = hs(e), r = gs(e);
	if (fs()) {
		let e = us();
		return e.updateLocale(t), n !== void 0 && e.updateRegion(n), e.updateEnableI18n(r), e;
	}
	let i = new ns({
		...e,
		locale: t,
		region: n,
		enableI18n: r
	});
	return ds(i), i;
}
function ms({ _getLocale: e, locale: t }) {
	let n = K(), r = [];
	return t && r.push(...Array.isArray(t) ? t : [t]), e && r.push(e()), r.push(...ts(n.getLocaleCookieName())), n.resolveSupportedLocale(r);
}
function hs({ _getRegion: e, region: t }) {
	return X({ cookieName: K().getRegionCookieName() }) || e?.() || t;
}
function gs({ enableI18n: e, _getEnableI18n: t }) {
	if (e !== void 0) return e;
	let n = X({ cookieName: K().getEnableI18nCookieName() });
	return n === void 0 ? t?.() ?? !0 : n === "true";
}
function _s(e) {
	let t = d(() => ps(e), [
		e.locale,
		e.region,
		e.enableI18n,
		e._reload
	]), n = f(null);
	return n.current ??= new Ya(), h(es, {
		...e,
		conditionStore: t,
		i18nStore: n.current
	});
}
Xa();
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/gt-next-app/components/pages/pricing/PricingTiers.tsx";
function vs() {
	let e = [
		{
			name: _(Y, { children: "Starter" }, void 0, !1, {
				fileName: $,
				lineNumber: 6,
				columnNumber: 13
			}, this),
			price: _(Y, { children: "$0" }, void 0, !1, {
				fileName: $,
				lineNumber: 7,
				columnNumber: 14
			}, this),
			period: _(Y, { children: "forever" }, void 0, !1, {
				fileName: $,
				lineNumber: 8,
				columnNumber: 15
			}, this),
			features: [
				_(Y, { children: "5 benchmark runs/day" }, "f1", !1, {
					fileName: $,
					lineNumber: 10,
					columnNumber: 9
				}, this),
				_(Y, { children: "3 libraries" }, "f2", !1, {
					fileName: $,
					lineNumber: 11,
					columnNumber: 9
				}, this),
				_(Y, { children: "Community support" }, "f3", !1, {
					fileName: $,
					lineNumber: 12,
					columnNumber: 9
				}, this),
				_(Y, { children: "Public results" }, "f4", !1, {
					fileName: $,
					lineNumber: 13,
					columnNumber: 9
				}, this)
			]
		},
		{
			name: _(Y, { children: "Pro" }, void 0, !1, {
				fileName: $,
				lineNumber: 17,
				columnNumber: 13
			}, this),
			price: _(Y, { children: "$29" }, void 0, !1, {
				fileName: $,
				lineNumber: 18,
				columnNumber: 14
			}, this),
			period: _(Y, { children: "/month" }, void 0, !1, {
				fileName: $,
				lineNumber: 19,
				columnNumber: 15
			}, this),
			features: [
				_(Y, { children: "Unlimited runs" }, "f1", !1, {
					fileName: $,
					lineNumber: 21,
					columnNumber: 9
				}, this),
				_(Y, { children: "All libraries" }, "f2", !1, {
					fileName: $,
					lineNumber: 22,
					columnNumber: 9
				}, this),
				_(Y, { children: "Priority support" }, "f3", !1, {
					fileName: $,
					lineNumber: 23,
					columnNumber: 9
				}, this),
				_(Y, { children: "Private results" }, "f4", !1, {
					fileName: $,
					lineNumber: 24,
					columnNumber: 9
				}, this),
				_(Y, { children: "CI integration" }, "f5", !1, {
					fileName: $,
					lineNumber: 25,
					columnNumber: 9
				}, this),
				_(Y, { children: "Historical data" }, "f6", !1, {
					fileName: $,
					lineNumber: 26,
					columnNumber: 9
				}, this)
			],
			highlighted: !0
		},
		{
			name: _(Y, { children: "Enterprise" }, void 0, !1, {
				fileName: $,
				lineNumber: 31,
				columnNumber: 13
			}, this),
			price: _(Y, { children: "Custom" }, void 0, !1, {
				fileName: $,
				lineNumber: 32,
				columnNumber: 14
			}, this),
			period: _(Y, { children: "" }, void 0, !1, {
				fileName: $,
				lineNumber: 33,
				columnNumber: 15
			}, this),
			features: [
				_(Y, { children: "Everything in Pro" }, "f1", !1, {
					fileName: $,
					lineNumber: 35,
					columnNumber: 9
				}, this),
				_(Y, { children: "On-premise option" }, "f2", !1, {
					fileName: $,
					lineNumber: 36,
					columnNumber: 9
				}, this),
				_(Y, { children: "SSO & SAML" }, "f3", !1, {
					fileName: $,
					lineNumber: 37,
					columnNumber: 9
				}, this),
				_(Y, { children: "Dedicated account manager" }, "f4", !1, {
					fileName: $,
					lineNumber: 38,
					columnNumber: 9
				}, this),
				_(Y, { children: "Custom SLAs" }, "f5", !1, {
					fileName: $,
					lineNumber: 39,
					columnNumber: 9
				}, this),
				_(Y, { children: "Audit logs" }, "f6", !1, {
					fileName: $,
					lineNumber: 40,
					columnNumber: 9
				}, this),
				_(Y, { children: "Training sessions" }, "f7", !1, {
					fileName: $,
					lineNumber: 41,
					columnNumber: 9
				}, this)
			],
			isEnterprise: !0
		}
	];
	return _("div", {
		className: "grid gap-6 md:grid-cols-3",
		children: e.map((e, t) => _("div", {
			className: `flex flex-col rounded-lg border p-6 ${e.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`,
			children: [
				_("h3", {
					className: "text-lg font-semibold text-foreground",
					children: e.name
				}, void 0, !1, {
					fileName: $,
					lineNumber: 58,
					columnNumber: 11
				}, this),
				_("div", {
					className: "my-4",
					children: [_("span", {
						className: "text-3xl font-bold text-foreground",
						children: e.price
					}, void 0, !1, {
						fileName: $,
						lineNumber: 60,
						columnNumber: 13
					}, this), _("span", {
						className: "text-sm text-muted-foreground",
						children: e.period
					}, void 0, !1, {
						fileName: $,
						lineNumber: 63,
						columnNumber: 13
					}, this)]
				}, void 0, !0, {
					fileName: $,
					lineNumber: 59,
					columnNumber: 11
				}, this),
				_("ul", {
					className: "mb-6 flex-1 space-y-2",
					children: e.features.map((e, t) => _("li", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [
							_("span", {
								className: "text-primary",
								children: "✓"
							}, void 0, !1, {
								fileName: $,
								lineNumber: 71,
								columnNumber: 17
							}, this),
							" ",
							e
						]
					}, t, !0, {
						fileName: $,
						lineNumber: 67,
						columnNumber: 15
					}, this))
				}, void 0, !1, {
					fileName: $,
					lineNumber: 65,
					columnNumber: 11
				}, this),
				_("button", {
					type: "button",
					className: `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${e.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`,
					children: e.isEnterprise ? _(Y, { children: "Contact Sales" }, void 0, !1, {
						fileName: $,
						lineNumber: 83,
						columnNumber: 31
					}, this) : _(Y, { children: "Get Started" }, void 0, !1, {
						fileName: $,
						lineNumber: 83,
						columnNumber: 54
					}, this)
				}, void 0, !1, {
					fileName: $,
					lineNumber: 75,
					columnNumber: 11
				}, this)
			]
		}, t, !0, {
			fileName: $,
			lineNumber: 50,
			columnNumber: 9
		}, this))
	}, void 0, !1, {
		fileName: $,
		lineNumber: 48,
		columnNumber: 5
	}, this);
}
function ys() {
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
function bs(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
var xs = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/gt-next-app/components/AppProviders.tsx";
function Ss({ children: e, locale: t }) {
	let [n] = p(() => typeof performance < "u" ? performance.now() : 0);
	return u(() => {
		bs("AppRoot", n);
	}, [n]), l(() => {
		document.documentElement.lang = t;
	}, [t]), l(() => {
		ys();
	}, []), _(g, { children: e }, void 0, !1, {
		fileName: xs,
		lineNumber: 33,
		columnNumber: 10
	}, this);
}
var Cs = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/gt-next-app/scripts/Wrapper.tsx", ws = "en";
function Ts({ children: e }) {
	return _(_s, {
		locale: ws,
		children: _(Ss, {
			locale: ws,
			children: e
		}, void 0, !1, {
			fileName: Cs,
			lineNumber: 14,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Cs,
		lineNumber: 13,
		columnNumber: 5
	}, this);
}
var Es = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/gt-next-app/components/pages/pricing/PricingTiers.wrapper.tsx";
function Ds() {
	return _(Ts, { children: _(vs, {}, void 0, !1, {
		fileName: Es,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: Es,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Ds as default };
