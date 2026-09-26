import { Fragment as e, createContext as t, createElement as n, isValidElement as r, useCallback as i, useContext as a, useEffect as o, useLayoutEffect as s, useMemo as c, useState as l } from "react";
import { Link as u, useNavigate as d, useParams as f } from "@tanstack/react-router";
import { ChevronDown as p } from "lucide-react";
import { Fragment as m, jsx as h, jsxs as g } from "react/jsx-runtime";
var ee = (e) => /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e), _ = {
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
}, v = {
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
}, y = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, b = (e) => {
	try {
		return /^https?:\/\//.test(e) ? new URL(e).hostname : e;
	} catch {
		return e;
	}
}, te = (e, t) => {
	if (!t) return;
	let n = Object.entries(t).filter(([, t]) => typeof t == "string" && b(t) === e);
	return n.length === 1 ? n[0]?.[0] : void 0;
}, ne = ["en"], x = "\x1B[0m", re = "\x1B[34m", ie = "\x1B[31m", ae = "\x1B[32m", oe = "\x1B[38;5;3m", se = "__intlayerPreloaded", ce = (e = {}) => ({
	...e,
	defaultLocale: e.defaultLocale ?? _?.defaultLocale ?? "en",
	mode: e.mode ?? v?.mode ?? "prefix-no-default",
	locales: e.locales ?? _?.locales ?? ne,
	rewrite: e.rewrite ?? v?.rewrite,
	domains: e.domains ?? v?.domains
}), le = (e, t) => !!e && (t ?? _.locales).includes(e), ue = (e, t = _?.locales, n = _?.defaultLocale) => {
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
var S = {
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
}, C = (e = S) => {
	let { locales: t } = _;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!pe) for (let t = 0; t < (v.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(v.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, me = !1, he, ge = () => typeof window > "u" ? C(S) : (me ||= (he = C(S), !0), he), _e = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (me = !1, !pe && v.storage.cookies)) for (let n = 0; n < v.storage.cookies.length; n++) {
		let { name: r, attributes: i } = v.storage.cookies[n];
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
	let a = ee(e), o = e?.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e, s = a ? new URL(o) : new URL(o, "http://e.com");
	if (i === "search-params") {
		let e = s.searchParams.get("locale");
		return le(e, r) ? e : n;
	}
	if (i === "no-prefix") return n;
	let c = s.pathname.split("/")[1];
	if (le(c, r)) return c;
	if (i === "prefix-no-default") return n;
}, ye = 50, be = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Set(), Se = (e) => {
	xe.has(e) || (xe.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Ce = {
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
}, we = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Se(e), Ce[e]);
};
function w(e, t, n) {
	let r = t ?? _?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = be.get(a);
	o || (o = /* @__PURE__ */ new Map(), be.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? we(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > ye && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Te = (e) => e, Ee = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Te(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, De = (e, t) => (n, r) => Ee(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), T = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? x : n : x}` : e, Oe = (e, t = oe, n = x) => [e].flat().map((e) => T(e, t, n)).join(", ");
T("✗", ie), T("✓", ae), T("⏲", re);
var ke = (e) => {
	let { defaultLocale: t, mode: n, domains: r } = ce(e);
	if (typeof window > "u") return t;
	if (r) {
		let e = te(window.location.hostname, r);
		if (e) return e;
	}
	if (n === "prefix-all" || n === "prefix-no-default" || n === "search-params" && new URLSearchParams(window.location.search).has("locale")) {
		let t = ve(window.location.pathname + window.location.search, e);
		if (t) return t;
	}
	return C() ?? t;
}, Ae, E, je = () => {
	let e = typeof window > "u" ? "" : window.location.pathname + window.location.search;
	return (E === void 0 || Ae !== e) && (Ae = e, E = ke()), E;
}, D = {
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
}, Me = je(), Ne = D[Me];
typeof window < "u" && typeof Ne == "function" && Ne().then((e) => {
	D.__intlayerPreloaded = {
		locale: Me,
		dictionary: e
	};
}, () => void 0);
var Pe = t(null), Fe = class {
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
}, O = (e, t) => {
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
}, ze = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(Re).join("") : String(e ?? ""), Be = "translation", k = "enumeration", A = "plural", Ve = "condition", j = "insertion", He = "object", Ue = "array", We = "markdown", M = "html", N = "gender", P = "select", F = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), I = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), L = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, L);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => L(e, I(t, e, {
		type: Ue,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: He,
			key: r
		};
		if (t.eager) {
			n[r] = L(e[r], I(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = L(e[r], I(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, Ge = (e) => F(k, e), Ke = (e) => F(N, e), qe = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, R = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = qe(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, Je = /* @__PURE__ */ new Set([
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
]), Ye = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, Xe = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(Ye)) {
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
				let e = Je.has(i.toLowerCase());
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
}, z = (e, t) => F(M, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = Xe(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return R(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => R(await e)), typeof n == "string") return R(n);
	try {
		return R(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), B = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, V = (e) => F(j, e, { fields: (() => {
	if (typeof e == "string") return B(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => B(await e)), typeof t == "string") return B(t);
	try {
		return B(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), Ze = (e) => F(A, e), Qe = (e, t) => F(P, e, { variable: t }), $e = (e) => {
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
}, H = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? z(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e?.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n?.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? z(t) : V(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? z(t) : t;
		if (t?.type === "argument") return t.format ? V(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : V(`{{${t.name}}}`);
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
					e[i] = H(a);
				}
				return e.__intlayer_icu_var = t.name, Ge(e);
			}
			for (let [n, r] of Object.entries(t.options)) {
				let i = r?.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e);
				e[n] = H(i);
			}
			return Ze(e);
		}
		if (t?.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = H(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? Ke({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : Qe(e, t.name);
		}
		if (t?.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = H(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, Ge(e);
		}
	}
	return e.map((e) => H([e]));
}, et = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return H($e(e));
		} catch {
			return e;
		}
	}
}, tt = (e) => L(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...et
	}]
}), nt = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, rt = (e, t) => e[nt(e, t) ?? "fallback"], it = (e, t, n) => e[w("PluralRules", n).select(t)] ?? e.other, at = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, ot = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], U = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, st = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? w("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? w("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : w("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return w("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, ct = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = U(t, r);
	return o === void 0 ? e : i ? st(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = U(t, r);
	return o === void 0 ? e : st(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = U(t, n);
	return r === void 0 ? e : String(r);
}), W = (e, t) => e[t] ?? e.count ?? e.n, G = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return ct(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return G(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(G(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return G(r[j], t, n);
	if (r.nodeType === "html") return G(r[M], t, n);
	if (r.nodeType === "plural") {
		let e = r[A];
		return G(it(e, Number(W(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[k], i = ot.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) ot.includes(t) || (o[t] = n);
		let s = W(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = w("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? rt(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return G(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[P], i = W(t, typeof r.variable == "string" ? r.variable : "value");
		return G(at(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[N];
		return G(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, lt = (e, t = {}, n = "en") => {
	let r = G(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, ut = ((e) => (t, n = {}, r = "en") => lt(typeof t == "string" ? e(t) : t, n, r))(tt), dt = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, ft = class extends Fe {
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
		let { dictionaryKey: t, remainder: n } = dt(e), r = this._boundDictionaries[t];
		if (r !== void 0) {
			let e = O(r, n);
			if (e !== void 0) return e;
		}
		for (let t of Object.values(this._boundDictionaries)) {
			let n = O(t, e);
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
			let t = O(r, e);
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
		return (c.kind === "node" ? lt(c.node, o, s) : ut(c.message, o, s)) ?? i;
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
}, pt = (e) => {
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
}, K = /* @__PURE__ */ new Map(), mt = (e, t) => (K.has(e) || K.set(e, pt(t)), K.get(e).read()), ht = /* @__PURE__ */ new Map(), gt = (e, t) => Object.create(new Proxy(e, {
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
}), _t = (e, t = Object.prototype) => {
	let n = typeof e, r = e == null ? null : n === "object" || n === "function" ? Object.getPrototypeOf(e) : n, i = ht.get(t);
	i || (i = /* @__PURE__ */ new Map(), ht.set(t, i));
	let a = i.get(r);
	return a || (a = gt(t, r === null ? null : Object.getPrototypeOf(Object(e))), i.set(r, a)), a;
}, vt = ({ children: e, value: t, additionalProps: n }) => Object.setPrototypeOf({
	...r(e) ? e : h(m, { children: e }),
	value: t,
	...n
}, _t(t)), yt = /* @__PURE__ */ new WeakMap(), bt = 0, xt = (e) => {
	if (!e) return "base";
	let t = yt.get(e);
	if (t) return t;
	bt += 1;
	let n = `p${bt}`;
	return yt.set(e, n), n;
}, St = 256, q = /* @__PURE__ */ new WeakMap(), Ct = (e) => typeof e == "object" && !!e, wt = (e, t, n) => `${e}_${t}_${xt(n)}`, Tt = (e, t) => {
	if (!Ct(e)) return { hit: !1 };
	let n = q.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, J = (e, t, n) => {
	if (!Ct(e)) return n;
	let r = q.get(e);
	return r || (r = /* @__PURE__ */ new Map(), q.set(e, r)), r.size >= St && r.clear(), r.set(t, n), n;
}, Et = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), Dt = () => ({}), Ot = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), kt = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Ot.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : kt(e ? `${e}.${String(n)}` : String(n)) }), At = /* @__PURE__ */ new Set(), jt = (e, t, n) => {
	let r = Dt()[e];
	return r ? $t(r, t, n) : (At.has(e) || (De({ log: y })(typeof window > "u" ? `Dictionary ${Oe(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), At.add(e)), kt(e));
}, Mt = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Nt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !Mt(e) || !Mt(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? Nt(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, Pt = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => Nt(e, t));
}, Y = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ft = (e) => {
	if (typeof e == "string") return e;
	if (Y(e)) return e.nodeType === "html" ? e[M] : e[We];
}, It = (e, t) => {
	if (typeof e == "string") return t;
	if (Y(e)) {
		let n = e.nodeType === "html" ? M : We;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Lt = (e, t, n, r, i) => {
	let a = It(e, Et(Ft(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, X = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Rt = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, zt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? X : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Pt(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: Be,
				key: e
			}]
		});
	}
}, Bt = X, Vt = (e) => X, Ht = X, Ut = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? X : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: j }], i = e[j], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || Y(e),
			transform: (e, n, r) => {
				if (Y(e)) return (i) => Lt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Et(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return Kt(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Wt = [
	k,
	Ve,
	A,
	N,
	P
], Gt = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !Wt.includes(i)) return t;
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
		return !r && Rt(i) ? i(n) : i;
	};
}, Kt = (e, t) => typeof t == "function" && Wt.includes(e?.nodeType ?? "") ? (n) => Gt(e, t, n) : t, qt = X, Jt = X, Yt = (e) => X, Xt = X, Zt = (e, t = !0) => [
	zt(e ?? _.defaultLocale, t ? _.defaultLocale : void 0),
	Bt,
	Vt(e ?? _.defaultLocale),
	Ht,
	Ut,
	Yt(e ?? _.defaultLocale),
	Xt,
	qt,
	Jt
].filter((e) => e !== X), Qt = (e, t, n = []) => L(e, {
	...t,
	plugins: n
}), Z = /* @__PURE__ */ new WeakSet(), $t = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = wt(r ?? _.defaultLocale, "", n), o = Tt(e, a);
	if (o.hit) return o.content;
	let s = n ?? Zt(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !Z.has(e)
		};
		Z.add(e);
		try {
			return Qt(e.content, t, s);
		} finally {
			t.eager && Z.delete(e);
		}
	};
	return c === null ? J(e, a, null) : Array.isArray(c) ? J(e, a, c.map(l)) : J(e, a, l(c));
}, en = (e, t) => {
	if (typeof e != "object" || !e) return;
	let n = e[se];
	if (n && n.locale === t) return n.dictionary;
}, tn = (e) => e != null && typeof e != "string" && typeof e != "number" && typeof e != "boolean", nn = /\{\{\s*(.*?)\s*\}\}/g, rn = (e, t = {}) => {
	if (!Object.values(t).some(tn)) return {
		isSimple: !0,
		parts: e.replace(nn, (e, n) => (t[n.trim()] ?? "").toString())
	};
	let n = e.split(nn), r = [];
	for (let e = 0; e < n.length; e++) if (e % 2 == 0) n[e] && r.push(n[e]);
	else {
		let i = t[n[e].trim()];
		i != null && r.push(i);
	}
	return {
		isSimple: !1,
		parts: r
	};
}, an = {
	id: "intlayer-node-plugin",
	canHandle: (e) => typeof e == "bigint" || typeof e == "string" || typeof e == "number",
	transform: (e, t) => vt({
		value: t.children,
		children: t.children
	})
}, on = X, sn = (t, r) => {
	let i = rn(t, r);
	return i.isSimple ? i.parts : n(e, null, ...i.parts.map((t, r) => n(e, { key: r }, t)));
}, cn = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? X : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: j }], i = e[j], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || Y(e),
			transform: (e, n, r) => {
				if (Y(e)) return (i) => Lt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = sn(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return Kt(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, ln = X, un = X, Q = /* @__PURE__ */ new Map(), dn = (e, t = !0) => {
	let n = `${e ?? _.defaultLocale}_${t}`;
	if (Q.has(n)) return Q.get(n);
	let r = [
		an,
		zt(e ?? _.defaultLocale, t ? _.defaultLocale : void 0),
		Bt,
		Vt(e ?? _.defaultLocale),
		Ht,
		Yt(e ?? _.defaultLocale),
		Xt,
		qt,
		Jt,
		on,
		cn,
		ln,
		un
	].filter((e) => e !== X);
	return Q.set(n, r), r;
}, fn = (e, t) => $t(e, t, dn(typeof t == "object" && t ? t.locale : t)), pn = ge, mn = (e, t) => _e(e, {
	...S,
	isCookieEnabled: t
}), hn = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, gn = t({
	get locale() {
		return pn() ?? _?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), _n = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: a, disableEditor: s, isCookieEnabled: u }) => {
	let { locales: d, defaultLocale: f } = _ ?? {}, [p, m] = l(() => e ?? pn() ?? t ?? f), [g, ee] = l(e);
	e !== g && (ee(e), e && e !== p && m(e)), o(() => {
		hn();
	}, []);
	let v = i((e) => {
		if (p.toString() !== e.toString()) {
			if (!d?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			m(e), mn(e, u);
		}
	}, [
		p,
		d,
		u
	]), y = a ?? v, b = ue(p), te = c(() => ({
		locale: b,
		setLocale: y,
		variant: n,
		disableEditor: s
	}), [
		b,
		y,
		n,
		s
	]);
	return h(gn.Provider, {
		value: te,
		children: r
	});
}, vn = ({ children: e, ...t }) => g(_n, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), { defaultLocale: yn, locales: $ } = _ ?? {}, bn = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: o } = a(gn) ?? {};
	return {
		locale: n,
		defaultLocale: yn,
		availableLocales: $,
		setLocale: i((n) => {
			if (!$?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), mn(n, e ?? o ?? !0), t?.(n);
		}, [
			$,
			t,
			r,
			e
		])
	};
}, xn = (e, t) => {
	let n = new ft({ locale: e }).bindDictionaries(t);
	return {
		i18n: n,
		_: n._.bind(n)
	};
}, Sn = ([e, t], n) => fn(en(e, n) ?? mt(`${t}.${n}`, e[n]?.()), n), Cn = (...e) => {
	let { locale: t } = bn(), n = t ?? _.defaultLocale, r = e.map(([, e]) => e).join("\0");
	return c(() => xn(n, Object.fromEntries(e.map((e) => [e[1], Sn(e, n)]))), [n, r]);
}, wn = () => {
	try {
		return Object.keys(Dt());
	} catch {
		return [];
	}
}, Tn = (e, t) => {
	let n = wn(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return jt(e, t);
		} catch {
			return;
		}
	};
	if (n.includes(i)) {
		let t = O(a(i), r === -1 ? "" : e.slice(r + 1));
		if (t !== void 0) return t;
	}
	for (let t of n) {
		let n = O(a(t), e);
		if (n !== void 0) return n;
	}
}, En = (e) => {
	let t = {};
	for (let n of wn()) try {
		Object.assign(t, Le(jt(n, e)));
	} catch {}
	return t;
}, Dn = () => ({
	lookup: Tn,
	all: En
}), On = (e) => new ft({
	...e,
	registry: Dn()
});
On({ locale: "en" });
var kn = ({ i18n: e, defaultComponent: t, children: n }) => {
	let r = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [i, a] = l(() => r(e)), [s, c] = l(e.locale);
	return o(() => (a(r(e)), c(e.locale), e.on("change", () => {
		a(r(e)), c(e.locale);
	})), [e]), h(Pe.Provider, {
		value: i,
		children: h(vn, {
			locale: s,
			children: n
		})
	});
}, An = {
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
}, jn = je(), Mn = An[jn];
typeof window < "u" && typeof Mn == "function" && Mn().then((e) => {
	An.__intlayerPreloaded = {
		locale: jn,
		dictionary: e
	};
}, () => void 0);
function Nn() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function Pn(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function Fn() {
	let { i18n: e } = Cn([An, "theme-toggle"]), t = (t) => e._(`theme-toggle.${t}`), [n, r] = l("auto");
	o(() => {
		let e = Nn();
		r(e), Pn(e);
	}, []), o(() => {
		if (n !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), t = () => Pn("auto");
		return e.addEventListener("change", t), () => {
			e.removeEventListener("change", t);
		};
	}, [n]);
	function i() {
		let e = n === "light" ? "dark" : n === "dark" ? "auto" : "light";
		r(e), Pn(e), window.localStorage.setItem("theme", e);
	}
	let a = t(n === "auto" ? "themeModeAutoSystemClick" : n === "light" ? "themeModeLightClick" : "themeModeDarkClick");
	return h("button", {
		type: "button",
		onClick: i,
		"aria-label": a,
		title: a,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: t(n === "auto" ? "themeAuto" : n === "dark" ? "themeDark" : "themeLight")
	});
}
var In = [
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
function Ln(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function Rn(e, t) {
	let n = On();
	return n.activate(e), n;
}
function zn() {
	let e = f({ strict: !1 }).locale ?? "en", t = d(), n = (e) => {
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
			children: In.map((e) => h("option", {
				value: e,
				children: Ln(e)
			}, e))
		})
	});
}
function Bn(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), s(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
function Vn() {
	let { i18n: e } = Cn([D, "header"]), t = (t) => e._(`header.${t}`);
	Bn("Header");
	let [n, r] = l(!1), i = f({ strict: !1 }).locale ?? "en", a = [
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
		children: g("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [g("div", {
				className: "flex items-center gap-8",
				children: [h(u, {
					preload: !1,
					to: "/$locale",
					params: { locale: i },
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}), g("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						h(u, {
							preload: !1,
							to: "/$locale",
							params: { locale: i },
							activeOptions: { exact: !0 },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: t("home")
						}),
						h(u, {
							preload: !1,
							to: "/$locale/about",
							params: { locale: i },
							activeProps: { className: "is-active" },
							className: "nav-link",
							children: t("methodology")
						}),
						g("div", {
							className: "relative",
							children: [g("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => r(!0),
								onMouseLeave: () => r(!1),
								onClick: () => r(!n),
								children: [t("mockPages"), h(p, {
									size: 14,
									className: `transition-transform ${n ? "rotate-180" : ""}`
								})]
							}), n && h("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => r(!0),
								onMouseLeave: () => r(!1),
								children: h("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: a.map((e) => h(u, {
										preload: !1,
										to: e.to,
										params: { locale: i },
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => r(!1),
										children: e.label
									}, e.to))
								})
							})]
						})
					]
				})]
			}), g("div", {
				className: "flex items-center gap-4",
				children: [
					g("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [h("span", {
							className: "sr-only",
							children: t("goToGithub")
						}), h("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: h("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					h(zn, {}),
					h(Fn, {})
				]
			})]
		})
	});
}
function Hn({ children: e }) {
	let t = c(() => Rn("en"), []);
	return h(kn, {
		i18n: t,
		children: e
	});
}
function Un() {
	return h(Hn, { children: h(Vn, {}) });
}
export { Un as default };
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
