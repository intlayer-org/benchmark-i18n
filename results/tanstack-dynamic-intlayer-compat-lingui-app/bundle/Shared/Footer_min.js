import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useMemo as s, useState as c } from "react";
import { Link as l, useParams as u } from "@tanstack/react-router";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
var m = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), h = {
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
}, g = {
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
}, ee = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, te = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, ne = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && te(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, _ = ["en"], v = "\x1B[0m", re = "\x1B[34m", ie = "\x1B[31m", ae = "\x1B[32m", oe = "\x1B[38;5;3m", se = "__intlayerPreloaded", ce = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? h?.defaultLocale ?? "en",
	mode: e.mode ?? g?.mode ?? "prefix-no-default",
	locales: e.locales ?? h?.locales ?? _,
	rewrite: e.rewrite ?? g?.rewrite,
	domains: e.domains ?? g?.domains
}), le = (e, t) => !!e && (t ?? h.locales).includes(e), ue = (e, t = h?.locales, n = h?.defaultLocale) => {
	if (t?.includes(e)) return e;
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
}, de = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, fe = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = de(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, pe = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var y = {
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
}, b = (e = y) => {
	let { locales: t } = h;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!pe) for (let t = 0; t < (g.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(g.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, me = !1, he, ge = () => typeof window > "u" ? b(y) : (me ||= (he = b(y), !0), he), _e = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (me = !1, !pe && g.storage.cookies)) for (let n = 0; n < g.storage.cookies.length; n++) {
		let { name: r, attributes: i } = g.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: de(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, fe(r, e, i));
			} catch {}
		}
	}
}, ve = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = ce(t);
	if (!n || !r) return n;
	let a = m(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return le(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (le(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, ye = 50, x = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Set(), xe = (e) => {
	be.has(e) || (be.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Se = {
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
}, Ce = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (xe(e), Se[e]);
};
function S(e, t, n) {
	let r = t ?? h?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = x.get(a);
	o || (o = /* @__PURE__ */ new Map(), x.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Ce(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > ye && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var we = (e) => e, Te = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = we(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Ee = (e, t) => (n, r) => Te(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), C = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? v : n : v}` : e, De = (e, t = oe, n = v) => [e].flat().map((e) => C(e, t, n)).join(", ");
C("✗", ie), C("✓", ae), C("⏲", re);
var Oe = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = ce(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = ne(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = ve(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return b() ?? t;
}, ke, w, Ae = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (w === void 0 || ke !== e) && (ke = e, w = Oe()), w;
}, T = {
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
}, je = Ae(), Me = T[je];
typeof window < "u" && typeof Me == "function" && Me().then((e) => {
	T.__intlayerPreloaded = {
		locale: je,
		dictionary: e
	};
}, () => void 0);
var Ne = t(null), Pe = class {
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
}, Fe = (e, t) => {
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
}, Ie = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, E = (e, t) => {
	let n = Fe(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return Fe(n, t);
	}
}, Le = (e) => {
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
			i.push(`${t} {${Re(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, Re = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(Le).join("") : String(e ?? ""), ze = "translation", D = "enumeration", O = "plural", Be = "condition", k = "insertion", Ve = "object", He = "array", Ue = "markdown", A = "html", j = "gender", M = "select", N = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), P = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), F = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, F);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => F(e, P(t, e, {
		type: He,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: Ve,
			key: r
		};
		if (t.eager) {
			n[r] = F(e[r], P(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = F(e[r], P(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, I = (e) => N(D, e), We = (e) => N(j, e), Ge = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, L = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = Ge(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, Ke = /* @__PURE__ */ new Set([
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
]), qe = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, Je = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(qe)) {
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
				let e = Ke.has(i.toLowerCase());
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
}, R = (e, t) => N(A, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = Je(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return L(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => L(await e)), typeof n == "string") return L(n);
	try {
		return L(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), z = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, B = (e) => N(k, e, { fields: (() => {
	if (typeof e == "string") return z(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => z(await e)), typeof t == "string") return z(t);
	try {
		return z(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), Ye = (e) => N(O, e), Xe = (e, t) => N(M, e, { variable: t }), Ze = (e) => {
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
}, V = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? R(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e?.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n?.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? R(t) : B(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? R(t) : t;
		if (t?.type === "argument") return t.format ? B(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : B(`{{${t.name}}}`);
		if (t?.type === "plural") {
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
					e[i] = V(a);
				}
				return e.__intlayer_icu_var = t.name, I(e);
			}
			for (let [n, r] of Object.entries(t.options)) {
				let i = r?.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e);
				e[n] = V(i);
			}
			return Ye(e);
		}
		if (t?.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = V(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? We({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : Xe(e, t.name);
		}
		if (t?.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = V(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, I(e);
		}
	}
	return e.map((e) => V([e]));
}, Qe = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return V(Ze(e));
		} catch {
			return e;
		}
	}
}, $e = (e) => F(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...Qe
	}]
}), et = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, tt = (e, t) => e[et(e, t) ?? "fallback"], nt = (e, t, n) => e[S("PluralRules", n).select(t)] ?? e.other, rt = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, it = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], H = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, at = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? S("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? S("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : S("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return S("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, ot = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = H(t, r);
	return o === void 0 ? e : i ? at(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = H(t, r);
	return o === void 0 ? e : at(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = H(t, n);
	return r === void 0 ? e : String(r);
}), U = (e, t) => e[t] ?? e.count ?? e.n, W = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return ot(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return W(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(W(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return W(r[k], t, n);
	if (r.nodeType === "html") return W(r[A], t, n);
	if (r.nodeType === "plural") {
		let e = r[O];
		return W(nt(e, Number(U(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[D], i = it.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) it.includes(t) || (o[t] = n);
		let s = U(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = S("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? tt(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return W(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[M], i = U(t, typeof r.variable == "string" ? r.variable : "value");
		return W(rt(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[j];
		return W(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, st = (e, t = {}, n = "en") => {
	let r = W(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, ct = ((e) => (t, n = {}, r = "en") => st(typeof t == "string" ? e(t) : t, n, r))($e), lt = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, ut = class extends Pe {
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
		for (let t of Object.values(this._boundDictionaries)) Object.assign(e, Ie(t));
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
		let { dictionaryKey: t, remainder: n } = lt(e), r = this._boundDictionaries[t];
		if (r !== void 0) {
			let e = E(r, n);
			if (e !== void 0) return e;
		}
		for (let t of Object.values(this._boundDictionaries)) {
			let n = E(t, e);
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
			let t = E(r, e);
			if (t !== void 0) return {
				kind: "icu",
				message: Re(t)
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
		return (c.kind === "node" ? st(c.node, o, s) : ct(c.message, o, s)) ?? i;
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
}, dt = (e) => {
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
}, G = /* @__PURE__ */ new Map(), ft = (e, t) => (G.has(e) || G.set(e, dt(t)), G.get(e).read()), pt = /* @__PURE__ */ new Map(), mt = (e, t) => Object.create(new Proxy(e, {
	get: (e, t, n) => {
		if (typeof t != "string" || t === "constructor" || t in e) return Reflect.get(e, t, n);
		let { value: r } = n;
		if (r == null) return;
		let i = Object(r)[t];
		return typeof i == "function" ? i.bind(r) : i;
	},
	has: (e, n) => n in e || typeof n == "string" && n !== "constructor" && t !== null && n in t
}), {
	toString: { value() {
		return String(this.value ?? "");
	} },
	valueOf: { value() {
		return this.value;
	} },
	[Symbol.toPrimitive]: { value() {
		return this.value ?? "";
	} }
}), ht = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = pt.get(t);
	i || (i = /* @__PURE__ */ new Map(), pt.set(t, i));
	let a = i.get(r);
	return a || (a = mt(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, gt = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : f(d, { children: e }),
	value: t,
	...n
}, ht(t)), _t = /* @__PURE__ */ new WeakMap(), vt = 0, yt = (e) => {
	if (!e) return "base";
	let t = _t.get(e);
	if (t) return t;
	vt += 1;
	let n = `p${vt}`;
	return _t.set(e, n), n;
}, bt = 256, K = /* @__PURE__ */ new WeakMap(), xt = (e) => typeof e == "object" && !!e, St = (e, t, n) => `${e}_${t}_${yt(n)}`, Ct = (e, t) => {
	if (!xt(e)) return { hit: !1 };
	let n = K.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, q = (e, t, n) => {
	if (!xt(e)) return n;
	let r = K.get(e);
	return r || (r = /* @__PURE__ */ new Map(), K.set(e, r)), r.size >= bt && r.clear(), r.set(t, n), n;
}, wt = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), Tt = () => ({}), Et = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Dt = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Et.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Dt(e ? `${e}.${String(n)}` : String(n)) }), Ot = /* @__PURE__ */ new Set(), kt = (e, t, n) => {
	let r = Tt()[e];
	return r ? Zt(r, t, n) : (Ot.has(e) || (Ee({ log: ee })(typeof window > "u" ? `Dictionary ${De(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), Ot.add(e)), Dt(e));
}, At = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, jt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !At(e) || !At(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? jt(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, Mt = (e, t, n) => {
	let r = (t) => e[t], i = r(t);
	if (typeof i == "string") return i;
	let a = [
		t,
		t.split("-")[0],
		n,
		n?.split("-")[0]
	], o = [];
	for (let e = 0; e < a.length; e++) {
		let t = a[e];
		if (!t || a.indexOf(t) < e) continue;
		let n = r(t);
		if (n !== void 0) {
			if (typeof n == "string") {
				if (o.length === 0) return n;
				continue;
			}
			o.push(n);
		}
	}
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => jt(e, t));
}, J = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Nt = (e) => {
	if (typeof e == "string") return e;
	if (J(e)) return e.nodeType === "html" ? e[A] : e[Ue];
}, Pt = (e, t) => {
	if (typeof e == "string") return t;
	if (J(e)) {
		let n = e.nodeType === "html" ? A : Ue;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Ft = (e, t, n, r, i) => {
	let a = Pt(e, wt(Nt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, Y = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, It = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, Lt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? Y : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Mt(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: ze,
				key: e
			}]
		});
	}
}, Rt = Y, zt = (e) => Y, Bt = Y, Vt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? Y : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: k }], i = e[k], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || J(e),
			transform: (e, n, r) => {
				if (J(e)) return (i) => Ft(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = wt(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return Wt(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Ht = [
	D,
	Be,
	O,
	j,
	M
], Ut = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !Ht.includes(i)) return t;
	let a = i === "plural" || i === "enumeration";
	return (e) => {
		if (typeof e == "object" && e) return t({
			...n,
			...e
		});
		if (a) return t({
			...n,
			count: e
		});
		let i = t(e);
		return !r && It(i) ? i(n) : i;
	};
}, Wt = (e, t) => typeof t == "function" && Ht.includes(e?.nodeType ?? "") ? (n) => Ut(e, t, n) : t, Gt = Y, Kt = Y, qt = (e) => Y, Jt = Y, Yt = (e, t = !0) => [
	Lt(e ?? h.defaultLocale, t ? h.defaultLocale : void 0),
	Rt,
	zt(e ?? h.defaultLocale),
	Bt,
	Vt,
	qt(e ?? h.defaultLocale),
	Jt,
	Gt,
	Kt
].filter((e) => e !== Y), Xt = (e, t, n = []) => F(e, {
	...t,
	plugins: n
}), X = /* @__PURE__ */ new WeakSet(), Zt = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = St(r ?? h.defaultLocale, "", n), o = Ct(e, a);
	if (o.hit) return o.content;
	let s = n ?? Yt(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !X.has(e)
		};
		X.add(e);
		try {
			return Xt(e.content, t, s);
		} finally {
			t.eager && X.delete(e);
		}
	};
	return c === null ? q(e, a, null) : Array.isArray(c) ? q(e, a, c.map(l)) : q(e, a, l(c));
}, Qt = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[se];
	if (n && n.locale === t) return n.dictionary;
}, $t = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", en = /\{\{\s*(.*?)\s*\}\}/g, tn = (e, t = {}) => {
	if (!Object.values(t).some($t)) return {
		isSimple: !0,
		parts: e.replace(en, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(en), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, nn = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => gt({
		value: t.children,
		children: t.children
	})
}, rn = Y, an = (t, r) => {
	let i = tn(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, on = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? Y : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: k }], i = e[k], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || J(e),
			transform: (e, n, r) => {
				if (J(e)) return (i) => Ft(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = an(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return Wt(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, sn = Y, cn = Y, Z = /* @__PURE__ */ new Map(), ln = (e, t = !0) => {
	let n = `${e ?? h.defaultLocale}_${t}`;
	if (Z.has(n)) return Z.get(n);
	let r = [
		nn,
		Lt(e ?? h.defaultLocale, t ? h.defaultLocale : void 0),
		Rt,
		zt(e ?? h.defaultLocale),
		Bt,
		qt(e ?? h.defaultLocale),
		Jt,
		Gt,
		Kt,
		rn,
		on,
		sn,
		cn
	].filter((e) => e !== Y);
	return Z.set(n, r), r;
}, un = (e, t) => Zt(e, t, ln(typeof t == "object" && t ? t.locale : t)), dn = ge, Q = (e, t) => _e(e, {
	...y,
	isCookieEnabled: t
}), fn = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, pn = t({
	get locale() {
		return dn() ?? h?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), mn = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: a, disableEditor: l, isCookieEnabled: u }) => {
	let { locales: d, defaultLocale: p } = h ?? {}, [m, g] = c(() => e ?? dn() ?? t ?? p), [ee, te] = c(e);
	e !== ee && (te(e), e && e !== m && g(e)), o(() => {
		fn();
	}, []);
	let ne = i((e) => {
		if (m.toString() !== e.toString()) {
			if (!d?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			g(e), Q(e, u);
		}
	}, [
		m,
		d,
		u
	]), _ = a ?? ne, v = ue(m), re = s(() => ({
		locale: v,
		setLocale: _,
		variant: n,
		disableEditor: l
	}), [
		v,
		_,
		n,
		l
	]);
	return f(pn.Provider, {
		value: re,
		children: r
	});
}, hn = ({ children: e, ...t }) => p(mn, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), { defaultLocale: gn, locales: $ } = h ?? {}, _n = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(pn) ?? {};
	return {
		locale: n,
		defaultLocale: gn,
		availableLocales: $,
		setLocale: i((n) => {
			if (!$?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), Q(n, e ?? o ?? !0), t?.(n);
		}, [
			$,
			t,
			r,
			e
		])
	};
}, vn = (e, t) => {
	let n = new ut({ locale: e }).bindDictionaries(t);
	return {
		i18n: n,
		_: n._.bind(n)
	};
}, yn = ([e, t], n) => un(Qt(e, n) ?? ft(`${t}.${n}`, e[n]?.()), n), bn = (...e) => {
	let { locale: t } = _n(), n = t ?? h.defaultLocale, r = e.map(([, e]) => e).join("\0");
	return s(() => vn(n, Object.fromEntries(e.map((e) => [e[1], yn(e, n)]))), [n, r]);
}, xn = () => {
	try {
		return Object.keys(Tt());
	} catch {
		return [];
	}
}, Sn = (e, t) => {
	let n = xn(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return kt(e, t);
		} catch {
			return;
		}
	};
	if (n.includes(i)) {
		let t = E(a(i), r === -1 ? "" : e.slice(r + 1));
		if (t !== void 0) return t;
	}
	for (let t of n) {
		let n = E(a(t), e);
		if (n !== void 0) return n;
	}
}, Cn = (e) => {
	let t = {};
	for (let n of xn()) try {
		Object.assign(t, Ie(kt(n, e)));
	} catch {}
	return t;
}, wn = () => ({
	lookup: Sn,
	all: Cn
}), Tn = (e) => new ut({
	...e,
	registry: wn()
});
Tn({ locale: "en" });
var En = ({ i18n: e, defaultComponent: t, children: n }) => {
	let r = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [i, a] = c(() => r(e)), [s, l] = c(e.locale);
	return o(() => (a(r(e)), l(e.locale), e.on("change", () => {
		a(r(e)), l(e.locale);
	})), [e]), f(Ne.Provider, {
		value: i,
		children: f(hn, {
			locale: s,
			children: n
		})
	});
};
function Dn() {
	let { i18n: e } = bn([T, "footer"]), t = (t) => e._(`footer.${t}`), n = u({ strict: !1 }).locale ?? "en", r = [
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
	return f("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: p("div", {
			className: "container py-8",
			children: [p("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					p("div", { children: [f("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: "i18n Benchmark"
					}), f("p", {
						className: "text-sm text-muted-foreground",
						children: t("anOpenSourceTestApplication")
					})] }),
					p("div", { children: [f("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: t("resources")
					}), f("ul", {
						className: "space-y-1",
						children: r.map((e) => f("li", { children: e.isInternal ? f(l, {
							preload: !1,
							to: e.to,
							params: { locale: n },
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) : f("a", {
							href: e.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) }, e.label))
					})] }),
					p("div", { children: [f("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: t("contact")
					}), f("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					})] })
				]
			}), f("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: t("builtWith")
			})]
		})
	});
}
function On(e, t) {
	let n = Tn();
	return n.activate(e), n;
}
function kn({ children: e }) {
	let t = s(() => On("en"), []);
	return f(En, {
		i18n: t,
		children: e
	});
}
function An() {
	return f(kn, { children: f(Dn, {}) });
}
export { An as default };
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
