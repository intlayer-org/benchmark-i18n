import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useLayoutEffect as s, useMemo as c, useRef as l, useState as u } from "react";
import { Link as d, useNavigate as f, useParams as p } from "@tanstack/react-router";
import { ChevronDown as ee } from "lucide-react";
import { Fragment as te, jsx as m, jsxs as ne } from "react/jsx-runtime";
import { jsxDEV as h } from "react/jsx-dev-runtime";
var re = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), g = {
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
}, ie = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, ae = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, oe = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && ae(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, se = "__intlayerPreloaded", ce = ["en"], v = "\x1B[0m", le = "\x1B[34m", ue = "\x1B[31m", de = "\x1B[32m", fe = "\x1B[38;5;3m", pe = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? g?.defaultLocale ?? "en",
	mode: e.mode ?? _?.mode ?? "prefix-no-default",
	locales: e.locales ?? g?.locales ?? ce,
	rewrite: e.rewrite ?? _?.rewrite,
	domains: e.domains ?? _?.domains
}), me = (e, t) => !!e && (t ?? g.locales).includes(e), he = (e, t = g?.locales, n = g?.defaultLocale) => {
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
}, ge = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, _e = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = ge(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, ve = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, ye = (e = y) => {
	let { locales: t } = g;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!ve) for (let t = 0; t < (_.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(_.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, be = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !ve && _.storage.cookies) for (let n = 0; n < _.storage.cookies.length; n++) {
		let { name: r, attributes: i } = _.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: ge(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, _e(r, e, i));
			} catch {}
		}
	}
}, xe = (e = "/", t) => {
	let { defaultLocale: n, locales: r, mode: i } = pe(t);
	if (!n || !r) return n;
	let a = re(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return me(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (me(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, Se = 50, Ce = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Set(), Te = (e) => {
	we.has(e) || (we.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Ee = {
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
}, De = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Te(e), Ee[e]);
};
function b(e, t, n) {
	let r = t ?? g?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = Ce.get(a);
	o || (o = /* @__PURE__ */ new Map(), Ce.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? De(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Se && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Oe = (e) => e, ke = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Oe(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Ae = (e, t) => (n, r) => ke(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), x = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? v : n : v}` : e, je = (e, t = fe, n = v) => [e].flat().map((e) => x(e, t, n)).join(", ");
x("✗", ue), x("✓", de), x("⏲", le);
var Me = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = pe(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = oe(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = xe(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return ye() ?? t;
}, S, C, Ne = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (C === void 0 || S !== e) && (S = e, C = Me()), C;
}, w = {
	de: () => import("../../.intlayer/dynamic_dictionary/json/header/de.json").then((e) => e.default),
	en: () => import("./intlayer-Header-wrapper-1yhpl6-en-63j-KjSl.js").then((e) => e.n).then((e) => e.default),
	es: () => import("../../.intlayer/dynamic_dictionary/json/header/es.json").then((e) => e.default),
	fr: () => import("../../.intlayer/dynamic_dictionary/json/header/fr.json").then((e) => e.default),
	it: () => import("../../.intlayer/dynamic_dictionary/json/header/it.json").then((e) => e.default),
	ja: () => import("../../.intlayer/dynamic_dictionary/json/header/ja.json").then((e) => e.default),
	ko: () => import("../../.intlayer/dynamic_dictionary/json/header/ko.json").then((e) => e.default),
	pt: () => import("../../.intlayer/dynamic_dictionary/json/header/pt.json").then((e) => e.default),
	ru: () => import("../../.intlayer/dynamic_dictionary/json/header/ru.json").then((e) => e.default),
	zh: () => import("../../.intlayer/dynamic_dictionary/json/header/zh.json").then((e) => e.default)
}, Pe = Ne(), Fe = w[Pe];
typeof window < "u" && typeof Fe == "function" && Fe().then((e) => {
	w.__intlayerPreloaded = {
		locale: Pe,
		dictionary: e
	};
}, () => void 0);
var Ie = class {
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
}, Le = (e, t) => {
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
}, Re = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, T = (e, t) => {
	let n = Le(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return Le(n, t);
	}
}, ze = (e) => {
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
			i.push(`${t} {${Be(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, Be = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(ze).join("") : String(e ?? ""), Ve = "translation", He = "enumeration", Ue = "plural", E = "insertion", We = "object", Ge = "array", Ke = "markdown", D = "html", qe = "gender", Je = "select", O = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), k = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => k(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => k(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: Ge,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: We,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = k(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = k(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, Ye = (e) => O(He, e), Xe = (e) => O(qe, e), Ze = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, A = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = Ze(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, Qe = /* @__PURE__ */ new Set([
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
]), $e = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, et = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll($e)) {
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
				let e = Qe.has(i.toLowerCase());
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
}, j = (e, t) => O(D, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = et(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return A(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => A(await e)), typeof n == "string") return A(n);
	try {
		return A(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), M = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, N = (e) => O(E, e, { fields: (() => {
	if (typeof e == "string") return M(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => M(await e)), typeof t == "string") return M(t);
	try {
		return M(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), tt = (e) => O(Ue, e), nt = (e, t) => O(Je, e, { variable: t }), rt = (e) => {
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
}, P = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? j(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? j(t) : N(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? j(t) : t;
		if (t.type === "argument") return t.format ? N(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : N(`{{${t.name}}}`);
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
					e[i] = P(a);
				}
				return e.__intlayer_icu_var = t.name, Ye(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = P(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return tt(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = P(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? Xe({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : nt(e, t.name);
		}
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = P(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, Ye(e);
		}
	}
	return e.map((e) => P([e]));
}, it = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return P(rt(e));
		} catch {
			return e;
		}
	}
}, at = (e) => k(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...it
	}]
}), ot = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, st = (e, t) => e[ot(e, t) ?? "fallback"], ct = (e, t, n) => e[b("PluralRules", n).select(t)] ?? e.other, lt = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, ut = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], F = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, dt = (e, t, n, r) => {
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
}, ft = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = F(t, r);
	return o === void 0 ? e : i ? dt(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = F(t, r);
	return o === void 0 ? e : dt(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = F(t, n);
	return r === void 0 ? e : String(r);
}), I = (e, t) => e[t] ?? e.count ?? e.n, L = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return ft(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return L(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(L(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return L(r[E], t, n);
	if (r.nodeType === "html") return L(r[D], t, n);
	if (r.nodeType === "plural") {
		let e = r[Ue];
		return L(ct(e, Number(I(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[He], i = ut.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) ut.includes(t) || (o[t] = n);
		let s = I(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = b("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? st(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return L(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[Je], i = I(t, typeof r.variable == "string" ? r.variable : "value");
		return L(lt(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[qe];
		return L(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, pt = (e, t = {}, n = "en") => {
	let r = L(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, mt = ((e) => (t, n = {}, r = "en") => pt(typeof t == "string" ? e(t) : t, n, r))(at), ht = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, R = class extends Ie {
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
		for (let t of Object.values(this._boundDictionaries)) Object.assign(e, Re(t));
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
		let { dictionaryKey: t, remainder: n } = ht(e), r = this._boundDictionaries[t];
		if (r !== void 0) {
			let e = T(r, n);
			if (e !== void 0) return e;
		}
		for (let t of Object.values(this._boundDictionaries)) {
			let n = T(t, e);
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
			let t = T(r, e);
			if (t !== void 0) return {
				kind: "icu",
				message: Be(t)
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
		return (c.kind === "node" ? pt(c.node, o, s) : mt(c.message, o, s)) ?? i;
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
}, gt = t(null), _t = /* @__PURE__ */ new WeakMap(), vt = 0, yt = (e) => {
	if (!e) return "base";
	let t = _t.get(e);
	if (t) return t;
	vt += 1;
	let n = `p${vt}`;
	return _t.set(e, n), n;
}, bt = 256, z = /* @__PURE__ */ new WeakMap(), xt = (e) => typeof e == "object" && !!e, St = (e, t, n) => `${e}_${t}_${yt(n)}`, Ct = (e, t) => {
	if (!xt(e)) return { hit: !1 };
	let n = z.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, B = (e, t, n) => {
	if (!xt(e)) return n;
	let r = z.get(e);
	return r || (r = /* @__PURE__ */ new Map(), z.set(e, r)), r.size >= bt && r.clear(), r.set(t, n), n;
}, wt = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), V = "default", Tt = /[^A-Za-z0-9._&=-]/g, Et = /[^A-Za-z0-9._-]/g, Dt = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, H = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, Dt);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, Ot = (e) => e === void 0 ? V : typeof e == "string" ? H(e, Tt) : Object.keys(e).sort().map((t) => `${H(t, Et)}=${H(String(e[t]), Et)}`).join("&"), kt = (e) => Array.isArray(e) ? e.length === 0 ? [V] : e.map(Ot) : [Ot(e)], At = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? V : e[0] ?? "default";
}, jt = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Mt = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Nt = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Pt = (e, t) => {
	if (!Mt(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? V : At(kt(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => jt(e, n, t, s)).map((t) => Nt(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Ft = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, It = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? kt(n).join(",") : String(n)}`;
}).join("|") : "", Lt = () => ({}), Rt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), zt = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Rt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : zt(e ? `${e}.${String(n)}` : String(n)) }), Bt = /* @__PURE__ */ new Set(), Vt = (e, t, n) => {
	let r = Lt()[e];
	return r ? on(r, t, n) : (Bt.has(e) || (Ae({ log: ie })(typeof window > "u" ? `Dictionary ${je(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), Bt.add(e)), zt(e));
}, Ht = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Ut = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (Ht(e) && Ht(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : Ut(e[r], t[r]));
		return n;
	}
	return e;
}, Wt = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => Ut(e, t));
}, U = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Gt = (e) => {
	if (typeof e == "string") return e;
	if (U(e)) return e.nodeType === "html" ? e[D] : e[Ke];
}, Kt = (e, t) => {
	if (typeof e == "string") return t;
	if (U(e)) {
		let n = e.nodeType === "html" ? D : Ke;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, qt = (e, t, n, r, i) => {
	let a = Kt(e, wt(Gt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, W = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Jt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? W : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: Ve,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return Wt(o, e, t);
	}
}, Yt = W, Xt = (e) => W, Zt = W, Qt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? W : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: E }], i = e[E], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || U(e),
			transform: (e, n, r) => {
				if (U(e)) return (i) => qt(e, i, n, t.plugins, r);
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
		return n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		});
	}
}, $t = W, en = W, tn = (e) => W, nn = W, rn = (e, t = !0) => [
	Jt(e ?? g.defaultLocale, t ? g.defaultLocale : void 0),
	Yt,
	Zt,
	Qt,
	tn(e ?? g.defaultLocale),
	nn,
	$t,
	en
], an = (e, t, n = []) => k(e, {
	...t,
	plugins: n
}), on = (e, t, n) => {
	let { locale: r, selector: i } = Ft(t), a = St(r ?? g.defaultLocale, It(i), n), o = Ct(e, a);
	if (o.hit) return o.content;
	let s = n ?? rn(r), c = Pt(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return an(e.content, t, s);
	};
	return c === null ? B(e, a, null) : Array.isArray(c) ? B(e, a, c.map(l)) : B(e, a, l(c));
}, sn = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[se];
	if (n && n.locale === t) return n.dictionary;
}, cn = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", ln = /\{\{\s*(.*?)\s*\}\}/g, un = (e, t = {}) => {
	if (!Object.values(t).some(cn)) return {
		isSimple: !0,
		parts: e.replace(ln, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(ln), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, dn = () => {
	try {
		return Object.keys(Lt());
	} catch {
		return [];
	}
}, fn = (e, t) => {
	let n = dn(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return Vt(e, t);
		} catch {
			return;
		}
	};
	if (n.includes(i)) {
		let t = T(a(i), r === -1 ? "" : e.slice(r + 1));
		if (t !== void 0) return t;
	}
	for (let t of n) {
		let n = T(a(t), e);
		if (n !== void 0) return n;
	}
}, pn = (e) => {
	let t = {};
	for (let n of dn()) try {
		Object.assign(t, Re(Vt(n, e)));
	} catch {}
	return t;
}, mn = () => ({
	lookup: fn,
	all: pn
}), hn = (e) => {
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
}, G = /* @__PURE__ */ new Map(), gn = (e, t) => (G.has(e) || G.set(e, hn(t)), G.get(e).read()), _n = ({ children: e, value: t, additionalProps: n }) => {
	let i = r(e) ? e : m(te, { children: e });
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
}, vn = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, { plugins: t, ...n }) => _n({
		...n,
		value: n.children,
		children: n.children
	})
}, yn = W, bn = (t, r) => {
	let i = un(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, xn = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? W : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: E }], i = e[E], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || U(e),
			transform: (e, n, r) => {
				if (U(e)) return (i) => qt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = bn(i, e);
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
}, Sn = W, Cn = W, K = /* @__PURE__ */ new Map(), wn = (e, t = !0) => {
	let n = `${e ?? g.defaultLocale}_${t}`;
	if (K.has(n)) return K.get(n);
	let r = [
		Jt(e ?? g.defaultLocale, t ? g.defaultLocale : void 0),
		Yt,
		Xt(e ?? g.defaultLocale),
		Zt,
		tn(e ?? g.defaultLocale),
		nn,
		$t,
		en,
		vn,
		yn,
		xn,
		Sn,
		Cn
	];
	return K.set(n, r), r;
}, Tn = (e, t) => on(e, t, wn(typeof t == "object" && t ? t.locale : t)), En = ye(y), Dn = (e, t) => be(e, {
	...y,
	isCookieEnabled: t
}), On = () => {
	let { locale: e } = a(q) ?? {}, t = l(null);
	o(() => {}, []), o(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, kn = ({ children: e }) => (On(), e), An = () => {
	let { locale: e } = a(q) ?? {}, t = l(null);
	o(() => {}, []), o(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, jn = ({ children: e }) => (An(), e), Mn = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, q = t({
	locale: En ?? g?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Nn = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: l } = g ?? {}, [d, f] = u(e ?? En ?? t ?? l);
	o(() => {
		e && e !== d && f(e);
	}, [e]), o(() => {
		Mn();
	}, []);
	let p = i ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			f(e), Dn(e, s);
		}
	}), ee = he(d);
	return m(q.Provider, {
		value: {
			locale: ee,
			setLocale: p,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, Pn = ({ children: e, ...t }) => ne(Nn, {
	...t,
	children: [
		m(kn, {}),
		m(jn, {}),
		e
	]
}), { defaultLocale: Fn, locales: J } = g ?? {}, In = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(q) ?? {};
	return {
		locale: n,
		defaultLocale: Fn,
		availableLocales: J,
		setLocale: i((n) => {
			if (!J?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), Dn(n, e ?? o ?? !0), t?.(n);
		}, [
			J,
			t,
			r,
			e
		])
	};
}, Ln = ({ i18n: e, defaultComponent: t, children: n }) => {
	let r = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [i, a] = u(() => r(e)), [s, c] = u(e.locale);
	return o(() => (a(r(e)), c(e.locale), e.on("change", () => {
		a(r(e)), c(e.locale);
	})), [e]), m(gt.Provider, {
		value: i,
		children: m(Pn, {
			locale: s,
			children: n
		})
	});
}, Rn = (e, t) => {
	let n = new R({ locale: e }).bindDictionaries(t);
	return {
		i18n: n,
		_: n._.bind(n)
	};
}, zn = ([e, t], n) => Tn(sn(e, n) ?? gn(`${t}.${n}`, e[n]?.()), n), Bn = (...e) => {
	let { locale: t } = In(), n = t ?? g.defaultLocale, r = e.map(([, e]) => e).join("\0");
	return c(() => Rn(n, Object.fromEntries(e.map((e) => [e[1], zn(e, n)]))), [n, r]);
}, Vn = (e) => new R({
	...e,
	registry: mn()
});
Vn({ locale: "en" });
var Y = {
	de: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/de.json").then((e) => e.default),
	en: () => import("./intlayer-Header-wrapper-1yhpl6-en-63j-KjSl.js").then((e) => e.t).then((e) => e.default),
	es: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/es.json").then((e) => e.default),
	fr: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/fr.json").then((e) => e.default),
	it: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/it.json").then((e) => e.default),
	ja: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ja.json").then((e) => e.default),
	ko: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ko.json").then((e) => e.default),
	pt: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/pt.json").then((e) => e.default),
	ru: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/ru.json").then((e) => e.default),
	zh: () => import("../../.intlayer/dynamic_dictionary/json/theme-toggle/zh.json").then((e) => e.default)
}, Hn = Ne(), Un = Y[Hn];
typeof window < "u" && typeof Un == "function" && Un().then((e) => {
	Y.__intlayerPreloaded = {
		locale: Hn,
		dictionary: e
	};
}, () => void 0);
var Wn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-lingui-app/src/components/ThemeToggle.tsx";
function Gn() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function X(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Kn() {
	let { i18n: e } = Bn([Y, "theme-toggle"]), t = (t) => e._(`theme-toggle.${t}`), [n, r] = u("auto");
	o(() => {
		let e = Gn();
		r(e), X(e);
	}, []), o(() => {
		if (n !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), t = () => X("auto");
		return e.addEventListener("change", t), () => {
			e.removeEventListener("change", t);
		};
	}, [n]);
	function i() {
		let e = n === "light" ? "dark" : n === "dark" ? "auto" : "light";
		r(e), X(e), window.localStorage.setItem("theme", e);
	}
	let a = t(n === "auto" ? "themeModeAutoSystemClick" : n === "light" ? "themeModeLightClick" : "themeModeDarkClick");
	return h("button", {
		type: "button",
		onClick: i,
		"aria-label": a,
		title: a,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: t(n === "auto" ? "themeAuto" : n === "dark" ? "themeDark" : "themeLight")
	}, void 0, !1, {
		fileName: Wn,
		lineNumber: 77,
		columnNumber: 5
	}, this);
}
var qn = [
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
function Jn(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function Yn(e, t) {
	let n = Vn();
	return n.activate(e), n;
}
var Z = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-lingui-app/src/components/LocaleSwitcher.tsx";
function Xn() {
	let e = p({ strict: !1 }).locale ?? "en", t = f(), n = (e) => {
		t({ params: (t) => ({
			...t,
			locale: e
		}) });
	};
	return h("div", {
		className: "flex items-center gap-2",
		children: h("select", {
			value: e,
			onChange: (e) => n(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: qn.map((e) => h("option", {
				value: e,
				children: Jn(e)
			}, e, !1, {
				fileName: Z,
				lineNumber: 23,
				columnNumber: 11
			}, this))
		}, void 0, !1, {
			fileName: Z,
			lineNumber: 17,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Z,
		lineNumber: 16,
		columnNumber: 5
	}, this);
}
function Zn(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), s(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
var Q = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-lingui-app/src/components/Header.tsx";
function Qn() {
	let { i18n: e } = Bn([w, "header"]), t = (t) => e._(`header.${t}`);
	Zn("Header");
	let [n, r] = u(!1), i = p({ strict: !1 }).locale ?? "en", a = [
		{
			to: "/$locale/products",
			label: t("products")
		},
		{
			to: "/$locale/pricing",
			label: t("pricing")
		},
		{
			to: "/$locale/team",
			label: t("team")
		},
		{
			to: "/$locale/blog",
			label: t("blog")
		},
		{
			to: "/$locale/careers",
			label: t("careers")
		},
		{
			to: "/$locale/faq",
			label: t("faq")
		},
		{
			to: "/$locale/contact",
			label: t("contact")
		},
		{
			to: "/$locale/settings",
			label: t("settings")
		}
	];
	return h("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: h("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [h("div", {
				className: "flex items-center gap-8",
				children: [h(d, {
					preload: !1,
					to: "/$locale",
					params: { locale: i },
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}, void 0, !1, {
					fileName: Q,
					lineNumber: 34,
					columnNumber: 11
				}, this), h("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						h(d, {
							preload: !1,
							to: "/$locale",
							params: { locale: i },
							activeOptions: { exact: !0 },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: t("home")
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 44,
							columnNumber: 13
						}, this),
						h(d, {
							preload: !1,
							to: "/$locale/about",
							params: { locale: i },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: t("methodology")
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 54,
							columnNumber: 13
						}, this),
						h("div", {
							className: "relative",
							children: [h("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => r(!0),
								onMouseLeave: () => r(!1),
								onClick: () => r(!n),
								children: [t("mockPages"), h(ee, {
									size: 14,
									className: `transition-transform ${n ? "rotate-180" : ""}`
								}, void 0, !1, {
									fileName: Q,
									lineNumber: 74,
									columnNumber: 17
								}, this)]
							}, void 0, !0, {
								fileName: Q,
								lineNumber: 66,
								columnNumber: 15
							}, this), n && h("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => r(!0),
								onMouseLeave: () => r(!1),
								children: h("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: a.map((e) => h(d, {
										preload: !1,
										to: e.to,
										params: { locale: i },
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => r(!1),
										children: e.label
									}, e.to, !1, {
										fileName: Q,
										lineNumber: 88,
										columnNumber: 23
									}, this))
								}, void 0, !1, {
									fileName: Q,
									lineNumber: 86,
									columnNumber: 19
								}, this)
							}, void 0, !1, {
								fileName: Q,
								lineNumber: 81,
								columnNumber: 17
							}, this)]
						}, void 0, !0, {
							fileName: Q,
							lineNumber: 65,
							columnNumber: 13
						}, this)
					]
				}, void 0, !0, {
					fileName: Q,
					lineNumber: 43,
					columnNumber: 11
				}, this)]
			}, void 0, !0, {
				fileName: Q,
				lineNumber: 33,
				columnNumber: 9
			}, this), h("div", {
				className: "flex items-center gap-4",
				children: [
					h("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [h("span", {
							className: "sr-only",
							children: t("goToGithub")
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 113,
							columnNumber: 13
						}, this), h("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: h("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							}, void 0, !1, {
								fileName: Q,
								lineNumber: 115,
								columnNumber: 15
							}, this)
						}, void 0, !1, {
							fileName: Q,
							lineNumber: 114,
							columnNumber: 13
						}, this)]
					}, void 0, !0, {
						fileName: Q,
						lineNumber: 107,
						columnNumber: 11
					}, this),
					h(Xn, {}, void 0, !1, {
						fileName: Q,
						lineNumber: 121,
						columnNumber: 11
					}, this),
					h(Kn, {}, void 0, !1, {
						fileName: Q,
						lineNumber: 122,
						columnNumber: 11
					}, this)
				]
			}, void 0, !0, {
				fileName: Q,
				lineNumber: 106,
				columnNumber: 9
			}, this)]
		}, void 0, !0, {
			fileName: Q,
			lineNumber: 32,
			columnNumber: 7
		}, this)
	}, void 0, !1, {
		fileName: Q,
		lineNumber: 31,
		columnNumber: 5
	}, this);
}
var $n = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-lingui-app/scripts/Wrapper.tsx";
function er({ children: e }) {
	let t = c(() => Yn("en"), []);
	return h(Ln, {
		i18n: t,
		children: e
	}, void 0, !1, {
		fileName: $n,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/tanstack-start-react-dynamic/intlayer-compat-lingui-app/src/components/Header.wrapper.tsx";
function tr() {
	return h(er, { children: h(Qn, {}, void 0, !1, {
		fileName: $,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { tr as default };
var e = Object.defineProperty, t = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
}, n = t({
	content: () => i,
	default: () => a,
	key: () => r
}), r = "header", i = {
	blog: "Blog",
	careers: "Careers",
	contact: "Contact",
	faq: "FAQ",
	goToGithub: "Go to GitHub",
	home: "Home",
	methodology: "Methodology",
	mockPages: "Mock Pages",
	pricing: "Pricing",
	products: "Products",
	settings: "Settings",
	team: "Team"
}, a = {
	key: r,
	content: i
}, o = t({
	content: () => c,
	default: () => l,
	key: () => s
}), s = "theme-toggle", c = {
	themeAuto: "Theme: Auto",
	themeDark: "Theme: Dark",
	themeLight: "Theme: Light",
	themeModeAutoSystemClick: "Theme mode: auto (system). Click to switch to light mode.",
	themeModeDarkClick: "Theme mode: dark. Click to switch to auto (system) mode.",
	themeModeLightClick: "Theme mode: light. Click to switch to dark mode."
}, l = {
	key: s,
	content: c
};
export { n, o as t };
