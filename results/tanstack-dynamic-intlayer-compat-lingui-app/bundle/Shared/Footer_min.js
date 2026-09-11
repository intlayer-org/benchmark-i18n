import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useMemo as s, useRef as c, useState as l } from "react";
import { Link as ee, useParams as u } from "@tanstack/react-router";
import { Fragment as d, jsx as f, jsxs as te } from "react/jsx-runtime";
import { jsxDEV as p } from "react/jsx-dev-runtime";
var ne = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), m = {
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
	requiredLocales: [
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
	strictMode: "inclusive",
	defaultLocale: "en"
}, h = {
	mode: "prefix-all",
	enableProxy: !1,
	storage: {
		cookies: [{
			name: "INTLAYER_LOCALE",
			attributes: { path: "/" }
		}],
		headers: [{ name: "x-intlayer-locale" }]
	},
	basePath: ""
}, re = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, ie = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, ae = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && ie(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, oe = "__intlayerPreloaded", se = ["en"], g = "\x1B[0m", ce = "\x1B[34m", le = "\x1B[31m", ue = "\x1B[32m", de = "\x1B[38;5;3m", fe = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? m?.defaultLocale ?? "en",
	mode: e.mode ?? h?.mode ?? "prefix-no-default",
	locales: e.locales ?? m?.locales ?? se,
	rewrite: e.rewrite ?? h?.rewrite,
	domains: e.domains ?? h?.domains
}), pe = (e, t) => !!e && (t ?? m.locales).includes(e), me = (e, t = m?.locales, n = m?.defaultLocale) => {
	let r = [e].flat(), i = (e) => e.trim().toLowerCase();
	try {
		for (let e of r) {
			let n = i(e), r = t.find((e) => i(e) === n);
			if (r) return r;
			let [a] = n.split("-"), o = t.find((e) => i(e).split("-")[0] === a);
			if (o) return o;
		}
	} catch {}
	return n;
}, he = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, ge = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = he(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, _e = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var _ = {
	getCookie: (e) => document.cookie.split(";").find((t) => t.trim().startsWith(`${e}=`))?.split("=")[1],
	getLocaleStorage: (e) => localStorage.getItem(e),
	getSessionStorage: (e) => sessionStorage.getItem(e),
	isCookieEnabled: !0,
	setCookieStore: (e, t, n) => cookieStore.set({
		name: e,
		value: t,
		path: n.path,
		domain: n.domain,
		expires: n.expires,
		sameSite: n.sameSite
	}),
	setCookieString: (e, t) => {
		document.cookie = t;
	},
	setSessionStorage: (e, t) => sessionStorage.setItem(e, t),
	setLocaleStorage: (e, t) => localStorage.setItem(e, t)
}, ve = (e = _) => {
	let { locales: t } = m;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!_e) for (let t = 0; t < (h.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(h.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ye = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !_e && h.storage.cookies) for (let n = 0; n < h.storage.cookies.length; n++) {
		let { name: r, attributes: i } = h.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: he(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ge(r, e, i));
			} catch {}
		}
	}
}, be = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = fe(t);
	if (!n || !r) return n;
	let a = ne(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return pe(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (pe(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, xe = 50, Se = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Set(), Ce = (e) => {
	v.has(e) || (v.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, we = {
	DisplayNames: class {
		of(e) {
			return e;
		}
	},
	ListFormat: class {
		format(e) {
			return Array.from(e).join(", ");
		}
		formatToParts(e) {
			return Array.from(e).flatMap((e, t) => t === 0 ? [{
				type: "element",
				value: e
			}] : [{
				type: "literal",
				value: ", "
			}, {
				type: "element",
				value: e
			}]);
		}
	},
	Segmenter: class {
		segment(e) {
			let t = 0;
			return Array.from(e).map((e) => {
				let n = t;
				return t += e.length, {
					segment: e,
					index: n
				};
			});
		}
	}
}, Te = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Ce(e), we[e]);
};
function y(e, t, n) {
	let r = t ?? m?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = Se.get(a);
	o || (o = /* @__PURE__ */ new Map(), Se.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Te(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > xe && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Ee = (e) => e, De = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Ee(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Oe = (e, t) => (n, r) => De(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), b = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? g : n : g}` : e, ke = (e, t = de, n = g) => [e].flat().map((e) => b(e, t, n)).join(", ");
b("✗", le), b("✓", ue), b("⏲", ce);
var Ae = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = fe(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = ae(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = be(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return ve() ?? t;
}, je, x, Me = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (x === void 0 || je !== e) && (je = e, x = Ae()), x;
}, S = {
	de: () => import("../../.intlayer/dynamic_dictionary/json/footer/de.json").then((e) => e.default),
	en: () => import("./intlayer-Footer-wrapper-1gnix0-en-CvAKWPrc.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../.intlayer/dynamic_dictionary/json/footer/es.json").then((e) => e.default),
	fr: () => import("../../.intlayer/dynamic_dictionary/json/footer/fr.json").then((e) => e.default),
	it: () => import("../../.intlayer/dynamic_dictionary/json/footer/it.json").then((e) => e.default),
	ja: () => import("../../.intlayer/dynamic_dictionary/json/footer/ja.json").then((e) => e.default),
	ko: () => import("../../.intlayer/dynamic_dictionary/json/footer/ko.json").then((e) => e.default),
	pt: () => import("../../.intlayer/dynamic_dictionary/json/footer/pt.json").then((e) => e.default),
	ru: () => import("../../.intlayer/dynamic_dictionary/json/footer/ru.json").then((e) => e.default),
	zh: () => import("../../.intlayer/dynamic_dictionary/json/footer/zh.json").then((e) => e.default)
}, Ne = Me(), Pe = S[Ne];
typeof window < "u" && typeof Pe == "function" && Pe().then((e) => {
	S.__intlayerPreloaded = {
		locale: Ne,
		dictionary: e
	};
}, () => void 0);
var Fe = class {
	_events = /* @__PURE__ */ new Map();
	on(e, t) {
		return this._events.has(e) || this._events.set(e, /* @__PURE__ */ new Set()), this._events.get(e).add(t), () => this.removeListener(e, t);
	}
	removeListener(e, t) {
		this._events.get(e)?.delete(t);
	}
	emit(e, ...t) {
		this._events.get(e)?.forEach((e) => {
			e(...t);
		});
	}
}, Ie = (e, t) => {
	if (!t) return e;
	if (typeof e != "object" || !e) return;
	let n = e[t];
	if (n !== void 0) return n;
	if (!t.includes(".")) return;
	let r = e;
	for (let e of t.split(".")) {
		if (typeof r != "object" || !r) return;
		r = r[e];
	}
	return r;
}, Le = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, C = (e, t) => {
	let n = Ie(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return Ie(n, t);
	}
}, Re = (e) => {
	if (typeof e == "string") return e;
	if (!Array.isArray(e)) return "";
	let [t, n, r] = e;
	if (n === void 0) return `{${String(t)}}`;
	if (n === "plural" || n === "select" || n === "selectordinal") {
		let e = r ?? {}, i = [], a = "";
		for (let [t, n] of Object.entries(e)) {
			if (t === "offset") {
				a = `offset:${String(n)} `;
				continue;
			}
			i.push(`${t} {${ze(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, ze = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(Re).join("") : String(e ?? ""), Be = "translation", w = "enumeration", T = "plural", E = "insertion", Ve = "object", He = "array", D = "markdown", O = "html", k = "gender", A = "select", j = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), M = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => M(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => M(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: He,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: Ve,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = M(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = M(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, N = (e) => j(w, e), Ue = (e) => j(k, e), We = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, P = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = We(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, Ge = /* @__PURE__ */ new Set([
	"area",
	"base",
	"br",
	"col",
	"embed",
	"hr",
	"img",
	"input",
	"link",
	"meta",
	"source",
	"track",
	"wbr"
]), Ke = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, qe = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(Ke)) {
		let e = !!r[1], i = r[2], a = r[3], o = !!r[4];
		if (!(a.trimStart().startsWith("://") || a.trimStart().startsWith(":"))) {
			if (e) {
				if (n.length === 0) t.push({
					type: "error",
					message: `Closing tag </${i}> has no matching opening tag`
				});
				else {
					let e = n[n.length - 1];
					e.tag.toLowerCase() !== i.toLowerCase() && t.push({
						type: "error",
						message: `Mismatched closing tag: expected </${e.tag}> but found </${i}>`
					}), n.pop();
				}
			} else {
				let e = Ge.has(i.toLowerCase());
				!o && !e && n.push({ tag: i });
			}
		}
	}
	for (let e of n) t.push({
		type: "error",
		message: `Unclosed HTML tag: <${e.tag}>`
	});
	return {
		valid: t.filter((e) => e.type === "error").length === 0,
		issues: t
	};
}, F = (e, t) => j(O, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = qe(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return P(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => P(await e)), typeof n == "string") return P(n);
	try {
		return P(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), I = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, L = (e) => j(E, e, { fields: (() => {
	if (typeof e == "string") return I(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => I(await e)), typeof t == "string") return I(t);
	try {
		return I(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), Je = (e) => j(T, e), Ye = (e, t) => j(A, e, { variable: t }), Xe = (e) => {
	let t = 0, n = () => {
		let n = [], i = "";
		for (; t < e.length;) {
			let a = e[t];
			if (a === "{") i &&= (n.push(i), ""), t++, n.push(r());
			else if (a === "}") break;
			else if (a === "'") {
				if (t + 1 < e.length && e[t + 1] === "'") i += "'", t += 2;
				else {
					let n = e.indexOf("'", t + 1);
					n === -1 ? (i += "'", t++) : (i += e.substring(t + 1, n), t = n + 1);
				}
			} else i += a, t++;
		}
		return i && n.push(i), n;
	}, r = () => {
		let r = "";
		for (; t < e.length && /[^,}]/.test(e[t]);) r += e[t], t++;
		if (r = r.trim(), t >= e.length) throw Error("Unclosed argument");
		if (e[t] === "}") return t++, {
			type: "argument",
			name: r
		};
		if (e[t] === ",") {
			t++;
			let i = "";
			for (; t < e.length && /[^,}]/.test(e[t]);) i += e[t], t++;
			if (i = i.trim(), t >= e.length) throw Error("Unclosed argument");
			if (e[t] === "}") return t++, {
				type: "argument",
				name: r,
				format: { type: i }
			};
			if (e[t] === ",") {
				if (t++, i === "plural" || i === "select" || i === "selectordinal") {
					let a = {};
					for (; t < e.length && e[t] !== "}";) {
						for (; t < e.length && /\s/.test(e[t]);) t++;
						let r = "";
						for (; t < e.length && /[^{\s]/.test(e[t]);) r += e[t], t++;
						for (; t < e.length && /\s/.test(e[t]);) t++;
						if (e[t] !== "{") throw Error("Expected { after option key");
						t++;
						let i = n();
						if (e[t] !== "}") throw Error("Expected } after option value");
						for (t++, a[r] = i; t < e.length && /\s/.test(e[t]);) t++;
					}
					if (t++, i === "plural") return {
						type: "plural",
						name: r,
						options: a
					};
					if (i === "select") return {
						type: "select",
						name: r,
						options: a
					};
					if (i === "selectordinal") return {
						type: "selectordinal",
						name: r,
						options: a
					};
				} else {
					let n = "";
					for (; t < e.length && e[t] !== "}";) n += e[t], t++;
					if (t >= e.length) throw Error("Unclosed argument");
					return n = n.trim(), t++, {
						type: "argument",
						name: r,
						format: {
							type: i,
							style: n
						}
					};
				}
			}
		}
		throw Error("Malformed argument");
	};
	return n();
}, R = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? F(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? F(t) : L(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? F(t) : t;
		if (t.type === "argument") return t.format ? L(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : L(`{{${t.name}}}`);
		if (t.type === "plural") {
			let e = {}, n = !1;
			for (let e of Object.keys(t.options)) if (e.startsWith("=")) {
				n = !0;
				break;
			}
			if (n) {
				for (let [n, r] of Object.entries(t.options)) {
					let i = n;
					n.startsWith("=") ? i = n.substring(1) : n === "one" ? i = "1" : n === "two" ? i = "2" : n === "few" ? i = "<=3" : n === "many" ? i = ">=4" : n === "other" && (i = "fallback");
					let a = r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e);
					e[i] = R(a);
				}
				return e.__intlayer_icu_var = t.name, N(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = R(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return Je(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = R(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? Ue({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : Ye(e, t.name);
		}
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = R(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, N(e);
		}
	}
	return e.map((e) => R([e]));
}, Ze = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return R(Xe(e));
		} catch {
			return e;
		}
	}
}, Qe = (e) => M(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...Ze
	}]
}), $e = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, et = (e, t) => e[$e(e, t) ?? "fallback"], tt = (e, t, n) => e[y("PluralRules", n).select(t)] ?? e.other, nt = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, rt = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], z = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, it = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? y("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? y("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : y("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return y("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, at = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = z(t, r);
	return o === void 0 ? e : i ? it(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = z(t, r);
	return o === void 0 ? e : it(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = z(t, n);
	return r === void 0 ? e : String(r);
}), B = (e, t) => e[t] ?? e.count ?? e.n, V = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return at(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return V(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(V(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return V(r[E], t, n);
	if (r.nodeType === "html") return V(r[O], t, n);
	if (r.nodeType === "plural") {
		let e = r[T];
		return V(tt(e, Number(B(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[w], i = rt.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) rt.includes(t) || (o[t] = n);
		let s = B(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = y("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? et(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return V(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[A], i = B(t, typeof r.variable == "string" ? r.variable : "value");
		return V(nt(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[k];
		return V(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, ot = (e, t = {}, n = "en") => {
	let r = V(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, st = ((e) => (t, n = {}, r = "en") => ot(typeof t == "string" ? e(t) : t, n, r))(Qe), ct = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, lt = class extends Fe {
	_locale;
	_locales;
	_catalogs = {};
	_loadFallbackWarned = !1;
	_boundDictionaries = {};
	_registry;
	constructor({ locale: e = "en", locales: t, messages: n, registry: r } = {}) {
		super(), this._locale = typeof e == "string" ? e : "en", this._locales = t, this._registry = r, n && this.mergeAllCatalogs(n);
	}
	get locale() {
		return this._locale;
	}
	get locales() {
		return this._locales;
	}
	get messages() {
		let e = { ...this._registry?.all(this._locale) };
		for (let t of Object.values(this._boundDictionaries)) Object.assign(e, Le(t));
		return {
			...this._catalogs[this._locale] ?? {},
			...e
		};
	}
	mergeLocaleCatalog(e, t) {
		this._catalogs[e] = {
			...this._catalogs[e],
			...t
		};
	}
	mergeAllCatalogs(e) {
		for (let [t, n] of Object.entries(e)) n && typeof n == "object" && this.mergeLocaleCatalog(t, n);
	}
	setMessagesCompiler(e) {
		return console.warn("@intlayer/lingui: i18n.setMessagesCompiler() is a no-op — message compilation is handled at build time by intlayer."), this;
	}
	load(e, t) {
		typeof e == "string" ? this.mergeLocaleCatalog(e, t ?? {}) : this.mergeAllCatalogs(e), this._loadFallbackWarned || (this._loadFallbackWarned = !0, console.warn("@intlayer/lingui: i18n.load() messages are used as a runtime fallback. For optimal bundle size, compile your catalogs into intlayer dictionaries instead of importing lingui locale files."));
	}
	loadAndActivate({ locale: e, locales: t, messages: n }) {
		n && this.mergeLocaleCatalog(e, n), this.activate(e, t);
	}
	bindDictionaries(e) {
		return this._boundDictionaries = e, this;
	}
	activate(e, t) {
		this._locale = e, this._locales = t, this.emit("change");
	}
	lookupBoundDictionaries(e) {
		let { dictionaryKey: t, remainder: n } = ct(e), r = this._boundDictionaries[t];
		if (r !== void 0) {
			let e = C(r, n);
			if (e !== void 0) return e;
		}
		for (let t of Object.values(this._boundDictionaries)) {
			let n = C(t, e);
			if (n !== void 0) return n;
		}
	}
	resolveTemplate(e) {
		let t = this.lookupBoundDictionaries(e);
		if (t !== void 0) return {
			kind: "node",
			node: t
		};
		let n = this._registry?.lookup(e, this._locale);
		if (n !== void 0) return {
			kind: "node",
			node: n
		};
		let r = this._catalogs[this._locale];
		if (r) {
			let t = C(r, e);
			if (t !== void 0) return {
				kind: "icu",
				message: ze(t)
			};
		}
	}
	_(e, t, n) {
		let r = typeof e == "object" && !!e, i = r ? e.id : e, a = r ? e.message ?? n?.message : n?.message, o = r ? {
			...e.values ?? {},
			...t ?? {}
		} : t ?? {}, s = this._locale, c = this.resolveTemplate(i) ?? {
			kind: "icu",
			message: a ?? i
		};
		return (c.kind === "node" ? ot(c.node, o, s) : st(c.message, o, s)) ?? i;
	}
	t = (e, t, n) => this._(e, t, n);
	date(e, t) {
		if (e == null) return "";
		let n = e instanceof Date ? e : new Date(e);
		return new Intl.DateTimeFormat(this._locale, t).format(n);
	}
	number(e, t) {
		return new Intl.NumberFormat(this._locale, t).format(e);
	}
}, ut = t(null), dt = /* @__PURE__ */ new WeakMap(), ft = 0, pt = (e) => {
	if (!e) return "base";
	let t = dt.get(e);
	if (t) return t;
	ft += 1;
	let n = `p${ft}`;
	return dt.set(e, n), n;
}, mt = 256, H = /* @__PURE__ */ new WeakMap(), ht = (e) => typeof e == "object" && !!e, gt = (e, t, n) => `${e}_${t}_${pt(n)}`, _t = (e, t) => {
	if (!ht(e)) return { hit: !1 };
	let n = H.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, U = (e, t, n) => {
	if (!ht(e)) return n;
	let r = H.get(e);
	return r || (r = /* @__PURE__ */ new Map(), H.set(e, r)), r.size >= mt && r.clear(), r.set(t, n), n;
}, W = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), G = "default", vt = /[^A-Za-z0-9._&=-]/g, yt = /[^A-Za-z0-9._-]/g, bt = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, K = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, bt);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, xt = (e) => e === void 0 ? G : typeof e == "string" ? K(e, vt) : Object.keys(e).sort().map((t) => `${K(t, yt)}=${K(String(e[t]), yt)}`).join("&"), St = (e) => Array.isArray(e) ? e.length === 0 ? [G] : e.map(xt) : [xt(e)], Ct = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? G : e[0] ?? "default";
}, wt = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Tt = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Et = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Dt = (e, t) => {
	if (!Tt(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? G : Ct(St(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => wt(e, n, t, s)).map((t) => Et(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Ot = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, kt = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? St(n).join(",") : String(n)}`;
}).join("|") : "", At = () => ({}), jt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Mt = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : jt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Mt(e ? `${e}.${String(n)}` : String(n)) }), Nt = /* @__PURE__ */ new Set(), Pt = (e, t, n) => {
	let r = At()[e];
	return r ? Qt(r, t, n) : (Nt.has(e) || (Oe({ log: re })(typeof window > "u" ? `Dictionary ${ke(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), Nt.add(e)), Mt(e));
}, Ft = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, It = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (Ft(e) && Ft(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : It(e[r], t[r]));
		return n;
	}
	return e;
}, Lt = (e, t, n) => {
	let r = (t) => e[t], i = /* @__PURE__ */ new Set(), a = [], o = (e) => {
		e && !i.has(e) && (i.add(e), a.push(e));
	};
	o(t), t.includes("-") && o(t.split("-")[0]), o(n), n?.includes("-") && o(n.split("-")[0]);
	let s = [];
	for (let e of a) {
		let t = r(e);
		if (t !== void 0) {
			if (typeof t == "string") {
				if (s.length === 0) return t;
				continue;
			}
			s.push(t);
		}
	}
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => It(e, t));
}, q = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Rt = (e) => {
	if (typeof e == "string") return e;
	if (q(e)) return e.nodeType === "html" ? e[O] : e[D];
}, zt = (e, t) => {
	if (typeof e == "string") return t;
	if (q(e)) {
		let n = e.nodeType === "html" ? O : D;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Bt = (e, t, n, r, i) => {
	let a = zt(e, W(Rt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, J = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Vt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? J : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: Be,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return Lt(o, e, t);
	}
}, Ht = J, Ut = (e) => J, Wt = J, Gt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: E }], i = e[E], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => Bt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = W(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
	}
}, Kt = J, qt = J, Jt = (e) => J, Yt = J, Xt = (e, t = !0) => [
	Vt(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
	Ht,
	Wt,
	Gt,
	Jt(e ?? m.defaultLocale),
	Yt,
	Kt,
	qt
], Zt = (e, t, n = []) => M(e, {
	...t,
	plugins: n
}), Qt = (e, t, n) => {
	let { locale: r, selector: i } = Ot(t), a = gt(r ?? m.defaultLocale, kt(i), n), o = _t(e, a);
	if (o.hit) return o.content;
	let s = n ?? Xt(r), c = Dt(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Zt(e.content, t, s);
	};
	return c === null ? U(e, a, null) : Array.isArray(c) ? U(e, a, c.map(l)) : U(e, a, l(c));
}, $t = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[oe];
	if (n && n.locale === t) return n.dictionary;
}, en = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", tn = /\{\{\s*(.*?)\s*\}\}/g, nn = (e, t = {}) => {
	if (!Object.values(t).some(en)) return {
		isSimple: !0,
		parts: e.replace(tn, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(tn), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, rn = () => {
	try {
		return Object.keys(At());
	} catch {
		return [];
	}
}, an = (e, t) => {
	let n = rn(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return Pt(e, t);
		} catch {
			return;
		}
	};
	if (n.includes(i)) {
		let t = C(a(i), r === -1 ? "" : e.slice(r + 1));
		if (t !== void 0) return t;
	}
	for (let t of n) {
		let n = C(a(t), e);
		if (n !== void 0) return n;
	}
}, on = (e) => {
	let t = {};
	for (let n of rn()) try {
		Object.assign(t, Le(Pt(n, e)));
	} catch {}
	return t;
}, sn = () => ({
	lookup: an,
	all: on
}), cn = (e) => {
	let t = "pending", n, r = e.then((e) => {
		t = "success", n = e;
	}, (e) => {
		t = "error", n = e;
	});
	return {
		settled: r,
		read() {
			if (t === "pending") throw r;
			if (t === "error") throw n;
			return n;
		}
	};
}, Y = /* @__PURE__ */ new Map(), ln = (e, t) => (Y.has(e) || Y.set(e, cn(t)), Y.get(e).read()), un = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : f(d, { children: e });
	return new Proxy(i, { get(e, r, i) {
		if (r === "value") return t;
		if (r === Symbol.toPrimitive) return () => t ?? "";
		if (r === "toString") return () => String(t ?? "");
		if (r === "valueOf") return () => t;
		if (n && Object.hasOwn(n, r)) return n[r];
		if (t != null && typeof r == "string" && r !== "constructor" && !(r in e)) {
			let e = Object(t);
			if (r in e) {
				let n = e[r];
				return typeof n == "function" ? n.bind(t) : n;
			}
		}
		return Reflect.get(e, r, i);
	} });
}, dn = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => un({
		...n,
		value: n.children,
		children: n.children
	})
}, fn = J, pn = (t, r) => {
	let i = nn(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, mn = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: E }], i = e[E], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => Bt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = pn(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		}, o = n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
		return typeof i == "object" && i && "nodeType" in i && ["enumeration", "condition"].includes(i.nodeType) ? (e) => (t) => {
			let n = o(t);
			return typeof n == "function" ? n(e) : n;
		} : o;
	}
}, hn = J, gn = J, X = /* @__PURE__ */ new Map(), _n = (e, t = !0) => {
	let n = `${e ?? m.defaultLocale}_${t}`;
	if (X.has(n)) return X.get(n);
	let r = [
		Vt(e ?? m.defaultLocale, t ? m.defaultLocale : void 0),
		Ht,
		Ut(e ?? m.defaultLocale),
		Wt,
		Jt(e ?? m.defaultLocale),
		Yt,
		Kt,
		qt,
		dn,
		fn,
		mn,
		hn,
		gn
	];
	return X.set(n, r), r;
}, vn = (e, t) => Qt(e, t, _n(typeof t == "object" && t ? t.locale : t)), yn = ve(_), bn = (e, t) => ye(e, {
	..._,
	isCookieEnabled: t
}), xn = () => {
	let { locale: e } = a(Z) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, Sn = ({ children: e }) => (xn(), e), Cn = () => {
	let { locale: e } = a(Z) ?? {}, t = c(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, wn = ({ children: e }) => (Cn(), e), Tn = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Z = t({
	locale: yn ?? m?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), En = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: ee } = m ?? {}, [u, d] = l(e ?? yn ?? t ?? ee);
	o(() => {
		e && e !== u && d(e);
	}, [e]), o(() => {
		Tn();
	}, []);
	let te = i ?? ((e) => {
		if (u.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			d(e), bn(e, s);
		}
	}), p = me(u);
	return f(Z.Provider, {
		value: {
			locale: p,
			setLocale: te,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, Dn = ({ children: e, ...t }) => te(En, {
	...t,
	children: [
		f(Sn, {}),
		f(wn, {}),
		e
	]
}), { defaultLocale: On, locales: Q } = m ?? {}, kn = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(Z) ?? {};
	return {
		locale: n,
		defaultLocale: On,
		availableLocales: Q,
		setLocale: i((n) => {
			if (!Q?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), bn(n, e ?? o ?? !0), t?.(n);
		}, [
			Q,
			t,
			r,
			e
		])
	};
}, An = ({ i18n: e, defaultComponent: t, children: n }) => {
	let r = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [i, a] = l(() => r(e)), [s, c] = l(e.locale);
	return o(() => (a(r(e)), c(e.locale), e.on("change", () => {
		a(r(e)), c(e.locale);
	})), [e]), f(ut.Provider, {
		value: i,
		children: f(Dn, {
			locale: s,
			children: n
		})
	});
}, jn = (e, t) => {
	let n = new lt({ locale: e }).bindDictionaries(t);
	return {
		i18n: n,
		_: n._.bind(n)
	};
}, Mn = ([e, t], n) => vn($t(e, n) ?? ln(`${t}.${n}`, e[n]?.()), n), Nn = (...e) => {
	let { locale: t } = kn(), n = t ?? m.defaultLocale, r = e.map(([, e]) => e).join("\0");
	return s(() => jn(n, Object.fromEntries(e.map((e) => [e[1], Mn(e, n)]))), [n, r]);
}, Pn = (e) => new lt({
	...e,
	registry: sn()
});
Pn({ locale: "en" });
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-lingui-app/src/components/Footer.tsx";
function Fn() {
	let { i18n: e } = Nn([S, "footer"]), t = (t) => e._(`footer.${t}`), n = u({ strict: !1 }).locale ?? "en", r = [
		{
			label: t("github"),
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: t("methodology"),
			to: "/$locale/about",
			isInternal: !0
		},
		{
			label: t("contributing"),
			to: "/$locale/contact",
			isInternal: !0
		}
	];
	return p("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: p("div", {
			className: "container py-8",
			children: [p("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					p("div", { children: [p("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "i18n Benchmark"
					}, void 0, !1, {
						fileName: $,
						lineNumber: 34,
						columnNumber: 13
					}, this), p("p", {
						className: "text-sm text-muted-foreground",
						children: t("anOpenSourceTestApplication")
					}, void 0, !1, {
						fileName: $,
						lineNumber: 37,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: $,
						lineNumber: 33,
						columnNumber: 11
					}, this),
					p("div", { children: [p("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: t("resources")
					}, void 0, !1, {
						fileName: $,
						lineNumber: 42,
						columnNumber: 13
					}, this), p("ul", {
						className: "space-y-1",
						children: r.map((e) => p("li", { children: e.isInternal ? p(ee, {
							preload: !1,
							to: e.to,
							params: { locale: n },
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}, void 0, !1, {
							fileName: $,
							lineNumber: 49,
							columnNumber: 21
						}, this) : p("a", {
							href: e.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}, void 0, !1, {
							fileName: $,
							lineNumber: 58,
							columnNumber: 21
						}, this) }, e.label, !1, {
							fileName: $,
							lineNumber: 47,
							columnNumber: 17
						}, this))
					}, void 0, !1, {
						fileName: $,
						lineNumber: 45,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: $,
						lineNumber: 41,
						columnNumber: 11
					}, this),
					p("div", { children: [p("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: t("contact")
					}, void 0, !1, {
						fileName: $,
						lineNumber: 72,
						columnNumber: 13
					}, this), p("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					}, void 0, !1, {
						fileName: $,
						lineNumber: 75,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: $,
						lineNumber: 71,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 32,
				columnNumber: 9
			}, this), p("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: t("builtWith")
			}, void 0, !1, {
				fileName: $,
				lineNumber: 80,
				columnNumber: 9
			}, this)]
		}, void 0, !0, {
			fileName: $,
			lineNumber: 31,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: $,
		lineNumber: 30,
		columnNumber: 5
	}, this);
}
function In(e, t) {
	let n = Pn();
	return n.activate(e), n;
}
var Ln = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-lingui-app/scripts/Wrapper.tsx";
function Rn({ children: e }) {
	let t = s(() => In("en"), []);
	return p(An, {
		i18n: t,
		children: e
	}, void 0, !1, {
		fileName: Ln,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
var zn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-lingui-app/src/components/Footer.wrapper.tsx";
function Bn() {
	return p(Rn, { children: p(Fn, {}, void 0, !1, {
		fileName: zn,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: zn,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Bn as default };
var e = Object.defineProperty, t = ((t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
})({
	content: () => r,
	default: () => i,
	key: () => n
}), n = "footer", r = {
	anOpenSourceTestApplication: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
	builtWith: "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
	contact: "Contact",
	contributing: "Contributing",
	github: "GitHub",
	methodology: "Methodology",
	resources: "Resources"
}, i = {
	key: n,
	content: r
};
export { t };
