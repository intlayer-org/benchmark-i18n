import * as e from "react";
import { createContext as t, useCallback as n, useContext as r, useEffect as i, useLayoutEffect as a, useMemo as o, useRef as s, useState as c } from "react";
import l from "next/link";
import { useParams as u, usePathname as d, useRouter as f } from "next/navigation";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
import { ChevronDown as h } from "lucide-react";
import ee from "../.intlayer/dictionary/index.json";
var g = (e) => /^https?:\/\//.test(e ?? "");
function _(e, t) {
	return !e.startsWith("/") || e === `/${t}` || e.startsWith(`/${t}/`) ? e : `/${t}${e === "/" ? "" : e}`;
}
var v = ({ href: e, children: t, ...n }) => {
	let r = u().locale ?? "en";
	return e == null || typeof e != "string" || g(e) ? p(l, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}) : p(l, {
		href: _(e, r),
		prefetch: !1,
		...n,
		children: t
	});
}, y = {
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
}, b = {
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
}, x = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, S = "\x1B[0m", te = "\x1B[34m", ne = "\x1B[31m", re = "\x1B[32m", ie = "\x1B[35m", ae = "\x1B[38;5;3m", C = "\x1B[36m", oe = (e, t = y?.locales, n = y?.defaultLocale) => {
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
}, se = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, ce = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = se(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, le = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var w = {
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
}, ue = (e = w) => {
	let { locales: t } = y;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!le) for (let t = 0; t < (b.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(b.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, de = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !le && b.storage.cookies) for (let n = 0; n < b.storage.cookies.length; n++) {
		let { name: r, attributes: i } = b.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: se(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ce(r, e, i));
			} catch {}
		}
	}
}, fe = [
	"Arab",
	"Hebr",
	"Thaa",
	"Syrc",
	"Mand",
	"Adlm",
	"Rohg",
	"Nkoo"
], pe = (e) => {
	if (!e) return "ltr";
	try {
		let t = new Intl.Locale(e);
		if ("getTextInfo" in t) return t.getTextInfo().direction;
		if ("textInfo" in t) return t.textInfo.direction;
		let n = t.maximize();
		return fe.includes(n.script ?? "") ? "rtl" : "ltr";
	} catch {
		return "ltr";
	}
}, me = 50, he = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Set(), _e = (e) => {
	ge.has(e) || (ge.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, ve = {
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
}, ye = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (_e(e), ve[e]);
};
function T(e, t, n) {
	let r = t ?? y?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = he.get(a);
	o || (o = /* @__PURE__ */ new Map(), he.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? ye(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > me && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var be = (e) => e, xe = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = be(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, E = (e, t) => (n, r) => xe(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), D = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? S : n : S}` : e, Se = (e, t = ae, n = S) => [e].flat().map((e) => D(e, t, n)).join(", ");
D("✗", ne), D("✓", re), D("⏲", te);
var Ce = "translation", we = "enumeration", Te = "plural", Ee = "insertion", De = "object", Oe = "array", ke = "html", Ae = "gender", je = "select", O = (e, t, n) => ({
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
			type: Oe,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: De,
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
}, A = (e) => O(we, e), Me = (e) => O(Ae, e), Ne = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, j = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = Ne(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, Pe = /* @__PURE__ */ new Set([
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
]), Fe = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, Ie = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(Fe)) {
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
				let e = Pe.has(i.toLowerCase());
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
}, M = (e, t) => O(ke, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = Ie(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return j(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => j(await e)), typeof n == "string") return j(n);
	try {
		return j(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), N = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, P = (e) => O(Ee, e, { fields: (() => {
	if (typeof e == "string") return N(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => N(await e)), typeof t == "string") return N(t);
	try {
		return N(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), Le = (e) => O(Te, e), Re = (e, t) => O(je, e, { variable: t }), ze = (e) => {
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
}, F = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? M(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? M(t) : P(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? M(t) : t;
		if (t.type === "argument") return t.format ? P(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : P(`{{${t.name}}}`);
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
					e[i] = F(a);
				}
				return e.__intlayer_icu_var = t.name, A(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = F(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return Le(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = F(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? Me({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : Re(e, t.name);
		}
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = F(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, A(e);
		}
	}
	return e.map((e) => F([e]));
}, Be = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return F(ze(e));
		} catch {
			return e;
		}
	}
}, Ve = (e) => k(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...Be
	}]
}), He = (e) => {
	let t = 0, n = () => {
		let n = [], a = "";
		for (; t < e.length;) {
			let o = e[t];
			if (o === "{" && e[t + 1] === "{") a &&= (n.push(a), ""), t += 2, n.push(r());
			else if (o === "{") a &&= (n.push(a), ""), t++, n.push(i());
			else if (o === "}") break;
			else a += o, t++;
		}
		return a && n.push(a), n;
	}, r = () => {
		let n = "";
		for (; t < e.length;) {
			if (e[t] === "}" && e[t + 1] === "}") return t += 2, {
				type: "argument",
				name: n.trim()
			};
			n += e[t], t++;
		}
		throw Error("Unclosed i18next variable");
	}, i = () => {
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
				if (t++, i === "plural" || i === "select") {
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
}, I = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? M(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? M(t) : P(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? M(t) : t;
		if (t.type === "argument") return t.format ? P(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : P(`{{${t.name}}}`);
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
					e[i] = I(a);
				}
				return e.__intlayer_icu_var = t.name, A(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = I(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return Le(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = I(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? Me({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : Re(e, t.name);
		}
	}
	return e.map((e) => I([e]));
}, Ue = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return I(He(e));
		} catch {
			return e;
		}
	}
}, We = (e) => k(e, {
	dictionaryKey: "i18next",
	keyPath: [],
	plugins: [{
		id: "i18next",
		...Ue
	}]
}), Ge = (e, t, n = ".") => {
	if (!t) return e;
	if (typeof e == "object" && e) {
		let n = e[t];
		if (n !== void 0) return n;
	}
	if (n === !1 || !t.includes(n)) return;
	let r = e;
	for (let e of t.split(n)) {
		if (typeof r != "object" || !r) return;
		r = r[e];
	}
	return r;
}, Ke = (e) => {
	let t = 0, n = [], r = "";
	for (; t < e.length;) {
		let i = e[t];
		if (i === "{") {
			r &&= (n.push(r), ""), t++;
			let i = "";
			for (; t < e.length && e[t] !== "}";) i += e[t], t++;
			t < e.length && t++, n.push({
				type: "argument",
				name: i.trim()
			});
		} else r += i, t++;
	}
	return r && n.push(r), n;
}, qe = (e) => {
	let t = [], n = "", r = 0;
	for (; r < e.length;) {
		let i = e[r];
		i === "\\" && r + 1 < e.length && e[r + 1] === "|" ? (n += "|", r += 2) : i === "|" ? (t.push(n.trim()), n = "", r++) : (n += i, r++);
	}
	return t.push(n.trim()), t.map(Ke);
}, L = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") return e[0];
	let t = "";
	for (let n of e) t += typeof n == "string" ? n : `{{${n.name}}}`;
	return P(t);
}, Je = (e) => {
	if (e.length === 1) return L(e[0]);
	let t = {};
	return e.length === 2 ? A({
		1: L(e[0]),
		fallback: L(e[1])
	}) : e.length === 3 ? A({
		0: L(e[0]),
		1: L(e[1]),
		fallback: L(e[2])
	}) : (e.forEach((n, r) => {
		r === e.length - 1 ? t.fallback = L(n) : t[r.toString()] = L(n);
	}), t.__intlayer_vue_i18n_var = "count", A(t));
}, Ye = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("|")),
	transform: (e) => {
		try {
			return Je(qe(e));
		} catch {
			return e;
		}
	}
}, Xe = (e) => k(e, {
	dictionaryKey: "vue-i18n",
	keyPath: [],
	plugins: [{
		id: "vue-i18n",
		...Ye
	}]
}), Ze = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Qe = (e, t) => e[Ze(e, t) ?? "fallback"], $e = (e, t, n) => e[T("PluralRules", n).select(t)] ?? e.other, et = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, tt = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], R = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, nt = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? T("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? T("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : T("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return T("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, rt = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = R(t, r);
	return o === void 0 ? e : i ? nt(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = R(t, r);
	return o === void 0 ? e : nt(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = R(t, n);
	return r === void 0 ? e : String(r);
}), it = (e, t) => e[t] ?? e.count ?? e.n, z = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return rt(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return z(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(z(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return z(r[Ee], t, n);
	if (r.nodeType === "html") return z(r[ke], t, n);
	if (r.nodeType === "plural") {
		let e = r[Te];
		return z($e(e, Number(it(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[we], i = tt.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) tt.includes(t) || (o[t] = n);
		let s = it(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = T("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Qe(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return z(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[je], i = it(t, typeof r.variable == "string" ? r.variable : "value");
		return z(et(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[Ae];
		return z(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, at = (e, t = {}, n = "en") => {
	let r = z(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, ot = (e) => (t, n = {}, r = "en") => at(typeof t == "string" ? e(t) : t, n, r), st = {
	icu: Ve,
	i18next: We,
	"vue-i18n": Xe
}, B = (e, t = {}, n = "en", r = "icu") => ot(st[r])(e, t, n), ct = /* @__PURE__ */ new WeakMap(), lt = 0, ut = (e) => {
	if (!e) return "base";
	let t = ct.get(e);
	if (t) return t;
	lt += 1;
	let n = `p${lt}`;
	return ct.set(e, n), n;
}, dt = 256, V = /* @__PURE__ */ new WeakMap(), ft = (e) => typeof e == "object" && !!e, pt = (e, t, n) => `${e}_${t}_${ut(n)}`, mt = (e, t) => {
	if (!ft(e)) return { hit: !1 };
	let n = V.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, H = (e, t, n) => {
	if (!ft(e)) return n;
	let r = V.get(e);
	return r || (r = /* @__PURE__ */ new Map(), V.set(e, r)), r.size >= dt && r.clear(), r.set(t, n), n;
}, U = "default", ht = /[^A-Za-z0-9._&=-]/g, gt = /[^A-Za-z0-9._-]/g, _t = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, W = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, _t);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, vt = (e) => e === void 0 ? U : typeof e == "string" ? W(e, ht) : Object.keys(e).sort().map((t) => `${W(t, gt)}=${W(String(e[t]), gt)}`).join("&"), yt = (e) => Array.isArray(e) ? e.length === 0 ? [U] : e.map(vt) : [vt(e)], bt = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? U : e[0] ?? "default";
}, xt = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, St = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Ct = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, wt = (e, t) => {
	if (!St(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? U : bt(yt(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => xt(e, n, t, s)).map((t) => Ct(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Tt = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Et = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? yt(n).join(",") : String(n)}`;
}).join("|") : "", Dt = { index: ee }, Ot = () => Dt, kt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), At = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : kt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : At(e ? `${e}.${String(n)}` : String(n)) }), jt = /* @__PURE__ */ new Set(), G = (e, t, n) => {
	let r = Ot()[e];
	return r ? Gt(r, t, n) : (jt.has(e) || (E({ log: x })(typeof window > "u" ? `Dictionary ${Se(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), jt.add(e)), At(e));
}, Mt = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Nt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (Mt(e) && Mt(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : Nt(e[r], t[r]));
		return n;
	}
	return e;
}, Pt = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => Nt(e, t));
}, K = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Ft = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? K : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: Ce,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return Pt(o, e, t);
	}
}, It = K, Lt = K, Rt = K, zt = K, Bt = K;
process.env.INTLAYER_OPTIMIZED_NESTING;
var Vt = (e) => K, Ht = K, Ut = (e, t = !0) => [
	Ft(e ?? y.defaultLocale, t ? y.defaultLocale : void 0),
	It,
	Lt,
	Rt,
	Vt(e ?? y.defaultLocale),
	Ht,
	zt,
	Bt
], Wt = (e, t, n = []) => k(e, {
	...t,
	plugins: n
}), Gt = (e, t, n) => {
	let { locale: r, selector: i } = Tt(t), a = pt(r ?? y.defaultLocale, Et(i), n), o = mt(e, a);
	if (o.hit) return o.content;
	let s = n ?? Ut(r), c = wt(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return Wt(e.content, t, s);
	};
	return c === null ? H(e, a, null) : Array.isArray(c) ? H(e, a, c.map(l)) : H(e, a, l(c));
}, Kt = /* @__PURE__ */ new Set([
	"defaultValue",
	"ns",
	"lng",
	"lngs",
	"fallbackLng",
	"returnObjects",
	"returnDetails",
	"keySeparator",
	"nsSeparator",
	"ordinal",
	"postProcess",
	"postProcessPassResolved",
	"interpolation",
	"replace",
	"joinArrays",
	"nsMode",
	"keyPrefix"
]), qt = 5, Jt = "index", Yt = (e, t) => {
	if (e in Ot()) return G(e, t);
}, Xt = (e, t, n, r, i) => {
	let a = [], o = n === void 0 ? void 0 : new Intl.PluralRules(t, { type: i ? "ordinal" : "cardinal" }).select(n);
	return r && (o && (i && a.push(`${e}_${r}_ordinal_${o}`), a.push(`${e}_${r}_${o}`), n !== 1 && a.push(`${e}_${r}_plural`)), a.push(`${e}_${r}`)), o && (i && a.push(`${e}_ordinal_${o}`), a.push(`${e}_${o}`), n !== 1 && a.push(`${e}_plural`)), a.push(e), a;
}, q = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.replace;
	if (t) {
		let n = { ...t };
		return e.count !== void 0 && (n.count ??= e.count), e.context !== void 0 && (n.context ??= e.context), n;
	}
	let n = {};
	for (let [t, r] of Object.entries(e)) Kt.has(t) || (n[t] = r);
	return n;
}, J = ({ locale: e, namespace: t, key: n, options: r, keySeparator: i = ".", nsSeparator: a = ":", depth: o = 0, dictionaryContent: s }) => {
	let c = t, l = n;
	if (a !== !1 && n.includes(a)) {
		let e = n.indexOf(a);
		c = n.slice(0, e), l = n.slice(e + a.length);
	} else r?.ns && (c = Array.isArray(r.ns) ? r.ns[0] : r.ns);
	let u = typeof r?.count == "number" ? r.count : void 0, d = r?.context === void 0 ? void 0 : String(r.context), f = r?.ordinal === !0, p = r?.lng ?? e, m;
	if (s !== void 0 && c === t && r?.lng === void 0) m = s;
	else if (m = Yt(c, p), m === void 0 && c === t && c !== Jt && (m = Yt(Jt, p)), m === void 0) return;
	let h;
	for (let t of Xt(l, r?.lng ?? e, u, d, f)) {
		let e = Ge(m, t, i);
		if (e != null) {
			h = e;
			break;
		}
	}
	if (h == null) return;
	if (r?.returnObjects && typeof h == "object" && h) return h;
	let ee = q(r), g = B(h, ee, r?.lng ?? e, "i18next");
	return o < qt && g.includes("$t(") && (g = g.replace(/\$t\(\s*([^),]+?)\s*(?:,[^)]*)?\)/g, (n, l) => {
		let u = J({
			locale: e,
			namespace: c,
			key: l.trim(),
			options: r,
			keySeparator: i,
			nsSeparator: a,
			depth: o + 1,
			dictionaryContent: c === t ? s : void 0
		});
		return typeof u == "string" ? u : n;
	})), g;
}, Zt = (e) => {
	E({ log: x })(`${D(e, C)}: the ${D("`resources`", C)} option is ignored when using ${D("@intlayer/i18next", ie)} — translations are served from the compiled intlayer dictionaries instead. Remove the resource imports and the ${D("`resources`", C)} option to reduce your bundle size.`);
}, Qt = (e = {}) => {
	e.resources !== void 0 && Zt("createInstance");
	let t = y, n = e.lng ?? t?.defaultLocale ?? "en", r = e.defaultNS ?? (Array.isArray(e.ns) ? e.ns[0] : e.ns) ?? "translation", i = /* @__PURE__ */ new Map(), a = !1, o = (e, ...t) => {
		i.get(e)?.forEach((e) => {
			e(...t);
		});
	}, s = () => ({
		keySeparator: e.keySeparator ?? ".",
		nsSeparator: e.nsSeparator ?? ":"
	}), c = (e, t, n, r) => {
		let i = typeof r == "string" ? { defaultValue: r } : r, a = J({
			locale: e,
			namespace: t,
			key: n,
			options: i,
			...s()
		});
		if (a !== void 0) return a;
		let o = i?.defaultValue;
		return typeof o == "string" ? B(o, q(i), e, "i18next") : n;
	}, l = {
		get language() {
			return n;
		},
		get languages() {
			return t?.locales?.map(String) ?? [n];
		},
		get resolvedLanguage() {
			return n;
		},
		get isInitialized() {
			return a;
		},
		isInitializing: !1,
		initializedStoreOnce: !1,
		initializedLanguageOnce: !1,
		options: e,
		modules: {},
		services: {},
		store: {},
		format: ((e) => String(e)),
		async init(e, t) {
			let i = typeof e == "function" ? {} : e ?? {};
			i.resources !== void 0 && Zt("i18next.init"), i.lng && (n = i.lng), i.defaultNS ? r = i.defaultNS : i.ns && (r = Array.isArray(i.ns) ? i.ns[0] : i.ns), a = !0, o("initialized", i);
			let s = l.t.bind(l);
			return (typeof e == "function" ? e : t)?.(null, s), s;
		},
		t(e, t, i) {
			let a = typeof t == "string" ? {
				defaultValue: t,
				...i ?? {}
			} : t, o = Array.isArray(e) ? e : [String(e)];
			for (let e of o) {
				let t = J({
					locale: n,
					namespace: r,
					key: e,
					options: a,
					...s()
				});
				if (t !== void 0) return t;
			}
			let c = a?.defaultValue;
			return typeof c == "string" ? B(c, q(a), n, "i18next") : c ?? (Array.isArray(e) ? e[e.length - 1] : e);
		},
		async changeLanguage(e, t) {
			let r = n;
			e && (n = e), o("languageChanged", n, r);
			let i = l.t.bind(l);
			return t?.(null, i), i;
		},
		exists(e, t) {
			return J({
				locale: n,
				namespace: r,
				key: e,
				options: t,
				...s()
			}) !== void 0;
		},
		getFixedT: ((e, t, i) => {
			let a = Array.isArray(e) ? e[0] ?? n : e ?? n, o = t ?? r;
			return (e, t) => {
				let n = i ? `${i}.${e}` : e;
				return c(a, o, n, t);
			};
		}),
		use(e) {
			return e?.init?.(l), l;
		},
		on(e, t) {
			return i.has(e) || i.set(e, /* @__PURE__ */ new Set()), i.get(e).add(t), l;
		},
		once(e, t) {
			let n = (...r) => {
				t(...r), l.off(e, n);
			};
			return l.on(e, n), l;
		},
		off(e, t) {
			t ? i.get(e)?.delete(t) : i.delete(e);
		},
		emit(e, ...t) {
			o(e, ...t);
		},
		createInstance(t, n) {
			return Qt({
				...e,
				...t
			});
		},
		cloneInstance(t, n) {
			return Qt({
				...e,
				...t
			});
		},
		dir(e) {
			return [
				"ar",
				"he",
				"fa",
				"ur",
				"ps",
				"yi",
				"dv",
				"ug"
			].some((t) => (e ?? n).startsWith(t)) ? "rtl" : "ltr";
		},
		setDefaultNamespace(e) {
			r = e;
		},
		hasLoadedNamespace(e) {
			try {
				return G(Array.isArray(e) ? e[0] : e, n), !0;
			} catch {
				return !1;
			}
		},
		async loadNamespaces(e) {},
		async loadLanguages(e) {},
		loadResources(e) {},
		async reloadResources() {},
		getDataByLanguage(e) {},
		getResource(e, t, n) {
			try {
				return Ge(G(t, e), n);
			} catch {
				return;
			}
		},
		addResource: () => l,
		addResources: () => l,
		addResourceBundle: () => l,
		hasResourceBundle: () => !1,
		getResourceBundle: () => void 0,
		removeResourceBundle: () => l,
		toJSON() {
			return {
				options: e,
				store: {},
				language: n,
				languages: t?.locales?.map(String) ?? [n],
				resolvedLanguage: n
			};
		}
	};
	return l;
}, Y = Qt();
Y.dir.bind(Y), Y.init.bind(Y), Y.loadResources.bind(Y), Y.reloadResources.bind(Y), Y.use.bind(Y), Y.changeLanguage.bind(Y), Y.getFixedT.bind(Y), Y.t.bind(Y), Y.exists.bind(Y), Y.setDefaultNamespace.bind(Y), Y.hasLoadedNamespace.bind(Y), Y.loadNamespaces.bind(Y), Y.loadLanguages.bind(Y);
var $t = ({ locale: e, setLocale: t, availableLocales: n, namespace: r, keyPrefix: i, dictionaryContent: a }) => {
	let o = (t, n) => J({
		locale: e,
		namespace: r,
		key: i ? `${i}.${t}` : t,
		options: n,
		dictionaryContent: a
	}), s = (t, n, r) => {
		let i = typeof n == "string" ? {
			defaultValue: n,
			...r
		} : n ?? {}, a = Array.isArray(t) ? t : [t];
		for (let e of a) {
			let t = o(e, i);
			if (t !== void 0) return t;
		}
		let s = i.defaultValue;
		return typeof s == "string" ? B(s, q(i), e, "i18next") : a[a.length - 1];
	};
	return {
		translate: s,
		i18n: {
			language: e,
			languages: n ?? [],
			resolvedLanguage: e,
			isInitialized: !0,
			changeLanguage: async (e) => {
				t(e);
			},
			dir: (t) => pe(t ?? e) === "rtl" ? "rtl" : "ltr",
			exists: (t, n) => J({
				locale: e,
				namespace: r,
				key: t,
				options: n,
				dictionaryContent: a
			}) !== void 0,
			t: s,
			getFixedT: (t, n) => (i, o) => {
				let s = J({
					locale: t ?? e,
					namespace: n ?? r,
					key: i,
					options: o,
					dictionaryContent: (t ?? e) === e && (n ?? r) === r ? a : void 0
				});
				return s === void 0 ? i : s;
			}
		}
	};
}, en = ue(w), tn = (e, t) => de(e, {
	...w,
	isCookieEnabled: t
}), nn = () => {
	let { locale: e } = r(X) ?? {}, t = s(null);
	i(() => {}, []), i(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, rn = ({ children: e }) => (nn(), e), an = () => {
	let { locale: e } = r(X) ?? {}, t = s(null);
	i(() => {}, []), i(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, on = ({ children: e }) => (an(), e), sn = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, X = t({
	locale: en ?? y?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), cn = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: a, disableEditor: o, isCookieEnabled: s }) => {
	let { locales: l, defaultLocale: u } = y ?? {}, [d, f] = c(e ?? en ?? t ?? u);
	i(() => {
		e && e !== d && f(e);
	}, [e]), i(() => {
		sn();
	}, []);
	let m = a ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!l?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			f(e), tn(e, s);
		}
	}), h = oe(d);
	return p(X.Provider, {
		value: {
			locale: h,
			setLocale: m,
			variant: n,
			disableEditor: o
		},
		children: r
	});
}, ln = ({ children: e, ...t }) => m(cn, {
	...t,
	children: [
		p(rn, {}),
		p(on, {}),
		e
	]
}), { defaultLocale: un, locales: Z } = y ?? {}, dn = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: i, setLocale: a, isCookieEnabled: o } = r(X) ?? {};
	return {
		locale: i,
		defaultLocale: un,
		availableLocales: Z,
		setLocale: n((n) => {
			if (!Z?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			a(n), tn(n, e ?? o ?? !0), t?.(n);
		}, [
			Z,
			t,
			a,
			e
		])
	};
}, Q = (e, t) => {
	let n = Array.isArray(e) ? e[0] ?? "translation" : e ?? "translation", { locale: r, setLocale: i, availableLocales: a } = dn(), s = t?.keyPrefix, { translate: c, i18n: l } = o(() => $t({
		locale: r,
		setLocale: i,
		availableLocales: a ?? [],
		namespace: n,
		keyPrefix: s
	}), [
		r,
		i,
		a,
		n,
		s
	]);
	return {
		t: c,
		i18n: l,
		ready: !0
	};
}, fn = ({ children: e, i18n: t }) => (t !== void 0 && E({ log: x })(`${D("I18nextProvider", C)}: the \`i18n\` prop has no effect with intlayer. Intlayer manages its own i18n instance — you can safely remove the prop.`), p(ln, { children: e }));
e.createContext({ i18n: null });
var pn = {
	type: "3rdParty",
	init: (e) => {}
};
function mn() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function hn() {
	let { t: e } = Q(), [t, n] = c("auto");
	i(() => {
		let e = mn();
		n(e), $(e);
	}, []), i(() => {
		if (t !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => $("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	}, [t]);
	function r() {
		let e = t === "light" ? "dark" : t === "dark" ? "auto" : "light";
		n(e), $(e), window.localStorage.setItem("theme", e);
	}
	let a = e(t === "auto" ? "shared.themeToggle.themeModeAutoSystemClick" : t === "light" ? "shared.themeToggle.themeModeLightClick" : "shared.themeToggle.themeModeDarkClick");
	return p("button", {
		type: "button",
		onClick: r,
		"aria-label": a,
		title: a,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: e(t === "auto" ? "shared.themeToggle.themeAuto" : t === "dark" ? "shared.themeToggle.themeDark" : "shared.themeToggle.themeLight")
	});
}
var gn = [
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
function _n(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function vn() {
	let e = u().locale ?? "en", t = d(), n = f(), r = (r) => {
		let i = t.replace(`/${e}`, `/${r}`);
		n.push(i);
	};
	return p("div", {
		className: "flex items-center gap-2",
		children: p("select", {
			value: e,
			onChange: (e) => r(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: gn.map((e) => p("option", {
				value: e,
				children: _n(e)
			}, e))
		})
	});
}
function yn(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), a(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
function bn() {
	let { t: e } = Q();
	yn("Header");
	let [t, n] = c(!1), r = u(), i = d(), a = r.locale ?? "en", o = [
		{
			href: "/products",
			label: e("shared.header.products")
		},
		{
			href: "/pricing",
			label: e("shared.header.pricing")
		},
		{
			href: "/team",
			label: e("shared.header.team")
		},
		{
			href: "/blog",
			label: e("shared.header.blog")
		},
		{
			href: "/careers",
			label: e("shared.header.careers")
		},
		{
			href: "/faq",
			label: e("shared.header.faq")
		},
		{
			href: "/contact",
			label: e("shared.header.contact")
		},
		{
			href: "/settings",
			label: e("shared.header.settings")
		}
	];
	return p("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: m("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [m("div", {
				className: "flex items-center gap-8",
				children: [p(v, {
					href: "/",
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: "i18n Bench"
				}), m("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						p(v, {
							href: "/",
							className: `nav-link${((e) => i === _(e, a))("/") ? " is-active" : ""}`,
							children: e("shared.header.home")
						}),
						p(v, {
							href: "/about",
							className: `nav-link${((e) => {
								let t = _(e, a);
								return i.startsWith(t) && (e !== "/" || i === t);
							})("/about") ? " is-active" : ""}`,
							children: e("shared.header.methodology")
						}),
						m("div", {
							className: "relative",
							children: [m("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								onClick: () => n(!t),
								children: [e("shared.header.mockPages"), p(h, {
									size: 14,
									className: `transition-transform ${t ? "rotate-180" : ""}`
								})]
							}), t && p("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								children: p("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: o.map((e) => p(v, {
										href: e.href,
										className: "block px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors",
										onClick: () => n(!1),
										children: e.label
									}, e.href))
								})
							})]
						})
					]
				})]
			}), m("div", {
				className: "flex items-center gap-4",
				children: [
					m("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [p("span", {
							className: "sr-only",
							children: e("shared.header.goToGithub")
						}), p("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: p("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					p(vn, {}),
					p(hn, {})
				]
			})]
		})
	});
}
function xn() {
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
function Sn(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
Y.use(pn).init({
	lng: "en",
	fallbackLng: "en",
	interpolation: { escapeValue: !1 },
	react: { useSuspense: !1 },
	keySeparator: !1,
	nsSeparator: !1
});
var Cn = Y;
function wn({ locale: e }) {
	let { i18n: t } = Q();
	return i(() => {
		t.language !== e && t.changeLanguage(e);
	}, [t, e]), null;
}
function Tn({ children: e }) {
	let t = u().locale ?? "en", [n] = c(() => typeof performance < "u" ? performance.now() : 0);
	return a(() => {
		Sn("AppRoot", n);
	}, [n]), i(() => {
		document.documentElement.lang = t;
	}, [t]), i(() => {
		xn();
	}, []), m(fn, {
		i18n: Cn,
		children: [p(wn, { locale: t }), e]
	});
}
function En({ children: e }) {
	return p(Tn, { children: e });
}
function Dn() {
	return p(En, { children: p(bn, {}) });
}
export { Dn as default };
