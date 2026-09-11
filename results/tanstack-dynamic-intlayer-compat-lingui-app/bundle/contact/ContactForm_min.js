import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useId as s, useMemo as c, useRef as l, useState as u } from "react";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
import { jsxDEV as m } from "react/jsx-dev-runtime";
var h = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), g = {
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
}, _ = {
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
}, re = "__intlayerPreloaded", ie = ["en"], v = "\x1B[0m", ae = "\x1B[34m", oe = "\x1B[31m", se = "\x1B[32m", ce = "\x1B[38;5;3m", le = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? g?.defaultLocale ?? "en",
	mode: e.mode ?? _?.mode ?? "prefix-no-default",
	locales: e.locales ?? g?.locales ?? ie,
	rewrite: e.rewrite ?? _?.rewrite,
	domains: e.domains ?? _?.domains
}), ue = (e, t) => !!e && (t ?? g.locales).includes(e), de = (e, t = g?.locales, n = g?.defaultLocale) => {
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
}, fe = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, pe = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = fe(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, me = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, he = (e = y) => {
	let { locales: t } = g;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!me) for (let t = 0; t < (_.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(_.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ge = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !me && _.storage.cookies) for (let n = 0; n < _.storage.cookies.length; n++) {
		let { name: r, attributes: i } = _.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: fe(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, pe(r, e, i));
			} catch {}
		}
	}
}, _e = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = le(t);
	if (!n || !r) return n;
	let a = h(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return ue(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (ue(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, ve = 50, ye = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Set(), xe = (e) => {
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
function b(e, t, n) {
	let r = t ?? g?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = ye.get(a);
	o || (o = /* @__PURE__ */ new Map(), ye.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Ce(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > ve && o.clear(), s = new t(r, n), o.set(i, s);
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
}), x = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? v : n : v}` : e, De = (e, t = ce, n = v) => [e].flat().map((e) => x(e, t, n)).join(", ");
x("✗", oe), x("✓", se), x("⏲", ae);
var Oe = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = le(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = ne(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = _e(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return he() ?? t;
}, S, C, ke = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (C === void 0 || S !== e) && (S = e, C = Oe()), C;
}, w = {
	de: () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/de.json").then((e) => e.default),
	en: () => import("./intlayer-ContactForm-wrapper-zin6sq-en-CZyf0Pog.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/es.json").then((e) => e.default),
	fr: () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/fr.json").then((e) => e.default),
	it: () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/it.json").then((e) => e.default),
	ja: () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/ja.json").then((e) => e.default),
	ko: () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/ko.json").then((e) => e.default),
	pt: () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/pt.json").then((e) => e.default),
	ru: () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/ru.json").then((e) => e.default),
	zh: () => import("../../../../.intlayer/dynamic_dictionary/json/contact-form/zh.json").then((e) => e.default)
}, T = ke(), E = w[T];
typeof window < "u" && typeof E == "function" && E().then((e) => {
	w.__intlayerPreloaded = {
		locale: T,
		dictionary: e
	};
}, () => void 0);
var Ae = class {
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
}, D = (e, t) => {
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
}, O = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, k = (e, t) => {
	let n = D(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return D(n, t);
	}
}, je = (e) => {
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
			i.push(`${t} {${Me(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, Me = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(je).join("") : String(e ?? ""), Ne = "translation", Pe = "enumeration", Fe = "plural", A = "insertion", Ie = "object", Le = "array", Re = "markdown", j = "html", ze = "gender", Be = "select", M = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), N = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => N(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => N(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: Le,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: Ie,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = N(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = N(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, Ve = (e) => M(Pe, e), He = (e) => M(ze, e), Ue = (e) => {
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
		let o = Ue(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, We = /* @__PURE__ */ new Set([
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
]), Ge = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, Ke = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(Ge)) {
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
				let e = We.has(i.toLowerCase());
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
}, F = (e, t) => M(j, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = Ke(e);
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
}, L = (e) => M(A, e, { fields: (() => {
	if (typeof e == "string") return I(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => I(await e)), typeof t == "string") return I(t);
	try {
		return I(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), qe = (e) => M(Fe, e), Je = (e, t) => M(Be, e, { variable: t }), Ye = (e) => {
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
				return e.__intlayer_icu_var = t.name, Ve(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = R(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return qe(e);
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
			].includes(e)) ? He({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : Je(e, t.name);
		}
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = R(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, Ve(e);
		}
	}
	return e.map((e) => R([e]));
}, Xe = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return R(Ye(e));
		} catch {
			return e;
		}
	}
}, Ze = (e) => N(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...Xe
	}]
}), Qe = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, $e = (e, t) => e[Qe(e, t) ?? "fallback"], et = (e, t, n) => e[b("PluralRules", n).select(t)] ?? e.other, tt = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, nt = [
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
}, rt = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? b("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? b("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : b("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return b("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, it = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = z(t, r);
	return o === void 0 ? e : i ? rt(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = z(t, r);
	return o === void 0 ? e : rt(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = z(t, n);
	return r === void 0 ? e : String(r);
}), B = (e, t) => e[t] ?? e.count ?? e.n, V = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return it(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return V(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(V(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return V(r[A], t, n);
	if (r.nodeType === "html") return V(r[j], t, n);
	if (r.nodeType === "plural") {
		let e = r[Fe];
		return V(et(e, Number(B(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[Pe], i = nt.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) nt.includes(t) || (o[t] = n);
		let s = B(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = b("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? $e(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return V(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[Be], i = B(t, typeof r.variable == "string" ? r.variable : "value");
		return V(tt(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[ze];
		return V(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, at = (e, t = {}, n = "en") => {
	let r = V(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, ot = ((e) => (t, n = {}, r = "en") => at(typeof t == "string" ? e(t) : t, n, r))(Ze), st = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, ct = class extends Ae {
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
		for (let t of Object.values(this._boundDictionaries)) Object.assign(e, O(t));
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
		let { dictionaryKey: t, remainder: n } = st(e), r = this._boundDictionaries[t];
		if (r !== void 0) {
			let e = k(r, n);
			if (e !== void 0) return e;
		}
		for (let t of Object.values(this._boundDictionaries)) {
			let n = k(t, e);
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
			let t = k(r, e);
			if (t !== void 0) return {
				kind: "icu",
				message: Me(t)
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
		return (c.kind === "node" ? at(c.node, o, s) : ot(c.message, o, s)) ?? i;
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
}, lt = t(null), ut = /* @__PURE__ */ new WeakMap(), dt = 0, ft = (e) => {
	if (!e) return "base";
	let t = ut.get(e);
	if (t) return t;
	dt += 1;
	let n = `p${dt}`;
	return ut.set(e, n), n;
}, pt = 256, H = /* @__PURE__ */ new WeakMap(), mt = (e) => typeof e == "object" && !!e, ht = (e, t, n) => `${e}_${t}_${ft(n)}`, gt = (e, t) => {
	if (!mt(e)) return { hit: !1 };
	let n = H.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, U = (e, t, n) => {
	if (!mt(e)) return n;
	let r = H.get(e);
	return r || (r = /* @__PURE__ */ new Map(), H.set(e, r)), r.size >= pt && r.clear(), r.set(t, n), n;
}, _t = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), W = "default", vt = /[^A-Za-z0-9._&=-]/g, yt = /[^A-Za-z0-9._-]/g, bt = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, G = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, bt);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, K = (e) => e === void 0 ? W : typeof e == "string" ? G(e, vt) : Object.keys(e).sort().map((t) => `${G(t, yt)}=${G(String(e[t]), yt)}`).join("&"), xt = (e) => Array.isArray(e) ? e.length === 0 ? [W] : e.map(K) : [K(e)], St = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? W : e[0] ?? "default";
}, Ct = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, wt = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Tt = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Et = (e, t) => {
	if (!wt(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? W : St(xt(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Ct(e, n, t, s)).map((t) => Tt(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Dt = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Ot = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? xt(n).join(",") : String(n)}`;
}).join("|") : "", kt = () => ({}), At = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), jt = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : At.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : jt(e ? `${e}.${String(n)}` : String(n)) }), Mt = /* @__PURE__ */ new Set(), Nt = (e, t, n) => {
	let r = kt()[e];
	return r ? Zt(r, t, n) : (Mt.has(e) || (Ee({ log: ee })(typeof window > "u" ? `Dictionary ${De(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), Mt.add(e)), jt(e));
}, Pt = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Ft = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (Pt(e) && Pt(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : Ft(e[r], t[r]));
		return n;
	}
	return e;
}, It = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => Ft(e, t));
}, q = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Lt = (e) => {
	if (typeof e == "string") return e;
	if (q(e)) return e.nodeType === "html" ? e[j] : e[Re];
}, Rt = (e, t) => {
	if (typeof e == "string") return t;
	if (q(e)) {
		let n = e.nodeType === "html" ? j : Re;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, zt = (e, t, n, r, i) => {
	let a = Rt(e, _t(Lt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, J = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Bt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? J : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: Ne,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return It(o, e, t);
	}
}, Vt = J, Ht = (e) => J, Ut = J, Wt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: A }], i = e[A], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => zt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = _t(i, e);
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
}, Gt = J, Kt = J, qt = (e) => J, Jt = J, Yt = (e, t = !0) => [
	Bt(e ?? g.defaultLocale, t ? g.defaultLocale : void 0),
	Vt,
	Ut,
	Wt,
	qt(e ?? g.defaultLocale),
	Jt,
	Gt,
	Kt
], Xt = (e, t, n = []) => N(e, {
	...t,
	plugins: n
}), Zt = (e, t, n) => {
	let { locale: r, selector: i } = Dt(t), a = ht(r ?? g.defaultLocale, Ot(i), n), o = gt(e, a);
	if (o.hit) return o.content;
	let s = n ?? Yt(r), c = Et(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Xt(e.content, t, s);
	};
	return c === null ? U(e, a, null) : Array.isArray(c) ? U(e, a, c.map(l)) : U(e, a, l(c));
}, Qt = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[re];
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
}, nn = () => {
	try {
		return Object.keys(kt());
	} catch {
		return [];
	}
}, rn = (e, t) => {
	let n = nn(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return Nt(e, t);
		} catch {
			return;
		}
	};
	if (n.includes(i)) {
		let t = k(a(i), r === -1 ? "" : e.slice(r + 1));
		if (t !== void 0) return t;
	}
	for (let t of n) {
		let n = k(a(t), e);
		if (n !== void 0) return n;
	}
}, an = (e) => {
	let t = {};
	for (let n of nn()) try {
		Object.assign(t, O(Nt(n, e)));
	} catch {}
	return t;
}, on = () => ({
	lookup: rn,
	all: an
}), sn = (e) => {
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
}, Y = /* @__PURE__ */ new Map(), cn = (e, t) => (Y.has(e) || Y.set(e, sn(t)), Y.get(e).read()), ln = ({ children: e, value: t, additionalProps: n }) => {
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
}, un = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => ln({
		...n,
		value: n.children,
		children: n.children
	})
}, dn = J, fn = (t, r) => {
	let i = tn(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, pn = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: A }], i = e[A], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => zt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = fn(i, e);
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
}, mn = J, hn = J, X = /* @__PURE__ */ new Map(), gn = (e, t = !0) => {
	let n = `${e ?? g.defaultLocale}_${t}`;
	if (X.has(n)) return X.get(n);
	let r = [
		Bt(e ?? g.defaultLocale, t ? g.defaultLocale : void 0),
		Vt,
		Ht(e ?? g.defaultLocale),
		Ut,
		qt(e ?? g.defaultLocale),
		Jt,
		Gt,
		Kt,
		un,
		dn,
		pn,
		mn,
		hn
	];
	return X.set(n, r), r;
}, _n = (e, t) => Zt(e, t, gn(typeof t == "object" && t ? t.locale : t)), vn = he(y), yn = (e, t) => ge(e, {
	...y,
	isCookieEnabled: t
}), bn = () => {
	let { locale: e } = a(Z) ?? {}, t = l(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, xn = ({ children: e }) => (bn(), e), Sn = () => {
	let { locale: e } = a(Z) ?? {}, t = l(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, Cn = ({ children: e }) => (Sn(), e), wn = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Z = t({
	locale: vn ?? g?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Tn = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: l } = g ?? {}, [d, p] = u(e ?? vn ?? t ?? l);
	o(() => {
		e && e !== d && p(e);
	}, [e]), o(() => {
		wn();
	}, []);
	let m = i ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			p(e), yn(e, s);
		}
	}), h = de(d);
	return f(Z.Provider, {
		value: {
			locale: h,
			setLocale: m,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, En = ({ children: e, ...t }) => p(Tn, {
	...t,
	children: [
		f(xn, {}),
		f(Cn, {}),
		e
	]
}), { defaultLocale: Dn, locales: Q } = g ?? {}, On = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(Z) ?? {};
	return {
		locale: n,
		defaultLocale: Dn,
		availableLocales: Q,
		setLocale: i((n) => {
			if (!Q?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), yn(n, e ?? o ?? !0), t?.(n);
		}, [
			Q,
			t,
			r,
			e
		])
	};
}, kn = ({ i18n: e, defaultComponent: t, children: n }) => {
	let r = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [i, a] = u(() => r(e)), [s, c] = u(e.locale);
	return o(() => (a(r(e)), c(e.locale), e.on("change", () => {
		a(r(e)), c(e.locale);
	})), [e]), f(lt.Provider, {
		value: i,
		children: f(En, {
			locale: s,
			children: n
		})
	});
}, An = (e, t) => {
	let n = new ct({ locale: e }).bindDictionaries(t);
	return {
		i18n: n,
		_: n._.bind(n)
	};
}, jn = ([e, t], n) => _n(Qt(e, n) ?? cn(`${t}.${n}`, e[n]?.()), n), Mn = (...e) => {
	let { locale: t } = On(), n = t ?? g.defaultLocale, r = e.map(([, e]) => e).join("\0");
	return c(() => An(n, Object.fromEntries(e.map((e) => [e[1], jn(e, n)]))), [n, r]);
}, Nn = (e) => new ct({
	...e,
	registry: on()
});
Nn({ locale: "en" });
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-lingui-app/src/components/pages/contact/ContactForm.tsx";
function Pn() {
	let { i18n: e } = Mn([w, "contact-form"]), t = (t) => e._(`contact-form.${t}`), n = s(), r = s(), i = s(), a = s();
	return m("form", {
		className: "space-y-6",
		children: [
			m("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [m("div", { children: [m("label", {
					htmlFor: n,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: t("yourName")
				}, void 0, !1, {
					fileName: $,
					lineNumber: 17,
					columnNumber: 11
				}, this), m("input", {
					id: n,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: t("yourName")
				}, void 0, !1, {
					fileName: $,
					lineNumber: 23,
					columnNumber: 11
				}, this)] }, void 0, !0, {
					fileName: $,
					lineNumber: 16,
					columnNumber: 9
				}, this), m("div", { children: [m("label", {
					htmlFor: r,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: "Email"
				}, void 0, !1, {
					fileName: $,
					lineNumber: 30,
					columnNumber: 11
				}, this), m("input", {
					id: r,
					type: "email",
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					placeholder: "you@example.com"
				}, void 0, !1, {
					fileName: $,
					lineNumber: 36,
					columnNumber: 11
				}, this)] }, void 0, !0, {
					fileName: $,
					lineNumber: 29,
					columnNumber: 9
				}, this)]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 15,
				columnNumber: 7
			}, this),
			m("div", { children: [m("label", {
				htmlFor: i,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Topic"
			}, void 0, !1, {
				fileName: $,
				lineNumber: 45,
				columnNumber: 9
			}, this), m("select", {
				id: i,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				children: [
					m("option", { children: t("bugReport") }, void 0, !1, {
						fileName: $,
						lineNumber: 55,
						columnNumber: 11
					}, this),
					m("option", { children: t("newBenchmarkIdea") }, void 0, !1, {
						fileName: $,
						lineNumber: 56,
						columnNumber: 11
					}, this),
					m("option", { children: t("methodologyQuestion") }, void 0, !1, {
						fileName: $,
						lineNumber: 57,
						columnNumber: 11
					}, this),
					m("option", { children: "Contribution" }, void 0, !1, {
						fileName: $,
						lineNumber: 58,
						columnNumber: 11
					}, this),
					m("option", { children: "Other" }, void 0, !1, {
						fileName: $,
						lineNumber: 59,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 51,
				columnNumber: 9
			}, this)] }, void 0, !0, {
				fileName: $,
				lineNumber: 44,
				columnNumber: 7
			}, this),
			m("div", { children: [m("label", {
				htmlFor: a,
				className: "mb-1 block text-sm font-medium text-foreground",
				children: "Message"
			}, void 0, !1, {
				fileName: $,
				lineNumber: 63,
				columnNumber: 9
			}, this), m("textarea", {
				id: a,
				rows: 5,
				className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
				placeholder: t("describeYourQuestionOrIdea")
			}, void 0, !1, {
				fileName: $,
				lineNumber: 69,
				columnNumber: 9
			}, this)] }, void 0, !0, {
				fileName: $,
				lineNumber: 62,
				columnNumber: 7
			}, this),
			m("button", {
				type: "submit",
				className: "rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
				children: t("sendMessage")
			}, void 0, !1, {
				fileName: $,
				lineNumber: 76,
				columnNumber: 7
			}, this)
		]
	}, void 0, !0, {
		fileName: $,
		lineNumber: 14,
		columnNumber: 5
	}, this);
}
function Fn(e, t) {
	let n = Nn();
	return n.activate(e), n;
}
var In = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-lingui-app/scripts/Wrapper.tsx";
function Ln({ children: e }) {
	let t = c(() => Fn("en"), []);
	return m(kn, {
		i18n: t,
		children: e
	}, void 0, !1, {
		fileName: In,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
var Rn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-lingui-app/src/components/pages/contact/ContactForm.wrapper.tsx";
function zn() {
	return m(Ln, { children: m(Pn, {}, void 0, !1, {
		fileName: Rn,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: Rn,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { zn as default };
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
}), n = "contact-form", r = {
	bugReport: "Bug Report",
	describeYourQuestionOrIdea: "Describe your question or idea...",
	methodologyQuestion: "Methodology Question",
	newBenchmarkIdea: "New Benchmark Idea",
	sendMessage: "Send Message",
	yourName: "Your name"
}, i = {
	key: n,
	content: r
};
export { t };
