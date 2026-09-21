import { Fragment as e, createContext as t, useCallback as n, useContext as r, useEffect as i, useId as a, useLayoutEffect as o, useMemo as s, useRef as c, useState as l } from "react";
import u from "../../../.intlayer/dictionary/header.json";
import d from "../../../.intlayer/dictionary/open-positions.json";
import f from "../../../.intlayer/dictionary/careers-benefits.json";
import ee from "../../../.intlayer/dictionary/settings.json";
import te from "../../../.intlayer/dictionary/footer.json";
import ne from "../../../.intlayer/dictionary/results-table.json";
import re from "../../../.intlayer/dictionary/settings-header.json";
import ie from "../../../.intlayer/dictionary/contact-form.json";
import ae from "../../../.intlayer/dictionary/contact-header.json";
import oe from "../../../.intlayer/dictionary/about-grid.json";
import se from "../../../.intlayer/dictionary/pricing-tiers.json";
import ce from "../../../.intlayer/dictionary/mockBanner.json";
import le from "../../../.intlayer/dictionary/theme-toggle.json";
import ue from "../../../.intlayer/dictionary/about-header.json";
import de from "../../../.intlayer/dictionary/pricing-header.json";
import fe from "../../../.intlayer/dictionary/faq-header.json";
import pe from "../../../.intlayer/dictionary/blog-header.json";
import me from "../../../.intlayer/dictionary/team-header.json";
import he from "../../../.intlayer/dictionary/faq-list.json";
import ge from "../../../.intlayer/dictionary/careers-header.json";
import _e from "../../../.intlayer/dictionary/products-header.json";
import ve from "../../../.intlayer/dictionary/what-we-measure.json";
import ye from "../../../.intlayer/dictionary/products.json";
import be from "../../../.intlayer/dictionary/blog-list.json";
import xe from "../../../.intlayer/dictionary/understanding-impact.json";
import Se from "../../../.intlayer/dictionary/team.json";
import Ce from "../../../.intlayer/dictionary/why-it-matters.json";
import we from "../../../.intlayer/dictionary/hero.json";
import { Fragment as p, jsx as m, jsxs as Te } from "react/jsx-runtime";
import { jsxDEV as h } from "react/jsx-dev-runtime";
var Ee = class {
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
}, De = (e, t) => {
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
}, Oe = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, g = (e, t) => {
	let n = De(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return De(n, t);
	}
}, ke = (e) => {
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
			i.push(`${t} {${Ae(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, Ae = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(ke).join("") : String(e ?? ""), je = "translation", Me = "enumeration", Ne = "plural", _ = "insertion", Pe = "object", Fe = "array", Ie = "markdown", v = "html", Le = "gender", Re = "select", y = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), b = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => b(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => b(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: Fe,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: Pe,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = b(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = b(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, ze = (e) => y(Me, e), Be = (e) => y(Le, e), Ve = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, x = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = Ve(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, He = /* @__PURE__ */ new Set([
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
]), Ue = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, We = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(Ue)) {
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
				let e = He.has(i.toLowerCase());
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
}, S = (e, t) => y(v, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = We(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return x(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => x(await e)), typeof n == "string") return x(n);
	try {
		return x(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), C = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, w = (e) => y(_, e, { fields: (() => {
	if (typeof e == "string") return C(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => C(await e)), typeof t == "string") return C(t);
	try {
		return C(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), Ge = (e) => y(Ne, e), Ke = (e, t) => y(Re, e, { variable: t }), qe = (e) => {
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
}, T = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? S(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? S(t) : w(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? S(t) : t;
		if (t.type === "argument") return t.format ? w(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : w(`{{${t.name}}}`);
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
					e[i] = T(a);
				}
				return e.__intlayer_icu_var = t.name, ze(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = T(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return Ge(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = T(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? Be({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : Ke(e, t.name);
		}
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = T(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, ze(e);
		}
	}
	return e.map((e) => T([e]));
}, Je = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return T(qe(e));
		} catch {
			return e;
		}
	}
}, Ye = (e) => b(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...Je
	}]
}), Xe = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Ze = (e, t) => e[Xe(e, t) ?? "fallback"], E = {
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
}, D = {
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
}, Qe = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, $e = 50, O = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Set(), et = (e) => {
	k.has(e) || (k.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, tt = {
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
}, nt = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (et(e), tt[e]);
};
function A(e, t, n) {
	let r = t ?? E?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = O.get(a);
	o || (o = /* @__PURE__ */ new Map(), O.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? nt(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > $e && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var rt = (e, t, n) => e[A("PluralRules", n).select(t)] ?? e.other, it = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, at = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], j = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, ot = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? A("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? A("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : A("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return A("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, st = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = j(t, r);
	return o === void 0 ? e : i ? ot(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = j(t, r);
	return o === void 0 ? e : ot(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = j(t, n);
	return r === void 0 ? e : String(r);
}), M = (e, t) => e[t] ?? e.count ?? e.n, N = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return st(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return N(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(N(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return N(r[_], t, n);
	if (r.nodeType === "html") return N(r[v], t, n);
	if (r.nodeType === "plural") {
		let e = r[Ne];
		return N(rt(e, Number(M(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[Me], i = at.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) at.includes(t) || (o[t] = n);
		let s = M(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = A("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Ze(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return N(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[Re], i = M(t, typeof r.variable == "string" ? r.variable : "value");
		return N(it(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[Le];
		return N(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, ct = (e, t = {}, n = "en") => {
	let r = N(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, lt = (e) => (t, n = {}, r = "en") => ct(typeof t == "string" ? e(t) : t, n, r), P = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : t.push({
			tag: o,
			children: P(s)
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, ut = lt(Ye), dt = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, F = class extends Ee {
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
		for (let t of Object.values(this._boundDictionaries)) Object.assign(e, Oe(t));
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
			let e = g(r, n);
			if (e !== void 0) return e;
		}
		for (let t of Object.values(this._boundDictionaries)) {
			let n = g(t, e);
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
			let t = g(r, e);
			if (t !== void 0) return {
				kind: "icu",
				message: Ae(t)
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
		return (c.kind === "node" ? ct(c.node, o, s) : ut(c.message, o, s)) ?? i;
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
}, I = t(null), L = /* @__PURE__ */ new WeakMap(), R = 0, ft = (e) => {
	if (!e) return "base";
	let t = L.get(e);
	if (t) return t;
	R += 1;
	let n = `p${R}`;
	return L.set(e, n), n;
}, pt = 256, z = /* @__PURE__ */ new WeakMap(), B = (e) => typeof e == "object" && !!e, mt = (e, t, n) => `${e}_${t}_${ft(n)}`, ht = (e, t) => {
	if (!B(e)) return { hit: !1 };
	let n = z.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, V = (e, t, n) => {
	if (!B(e)) return n;
	let r = z.get(e);
	return r || (r = /* @__PURE__ */ new Map(), z.set(e, r)), r.size >= pt && r.clear(), r.set(t, n), n;
}, gt = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), H = "default", _t = /[^A-Za-z0-9._&=-]/g, vt = /[^A-Za-z0-9._-]/g, yt = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, U = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, yt);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, W = (e) => e === void 0 ? H : typeof e == "string" ? U(e, _t) : Object.keys(e).sort().map((t) => `${U(t, vt)}=${U(String(e[t]), vt)}`).join("&"), bt = (e) => Array.isArray(e) ? e.length === 0 ? [H] : e.map(W) : [W(e)], xt = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? H : e[0] ?? "default";
}, St = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Ct = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, wt = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Tt = (e, t) => {
	if (!Ct(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? H : xt(bt(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => St(e, n, t, s)).map((t) => wt(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, Et = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, Dt = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? bt(n).join(",") : String(n)}`;
}).join("|") : "", G = "\x1B[0m", Ot = "\x1B[34m", kt = "\x1B[31m", At = "\x1B[32m", jt = "\x1B[38;5;3m", Mt = (e) => e, Nt = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Mt(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Pt = (e, t) => (n, r) => Nt(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), K = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? G : n : G}` : e, Ft = (e, t = jt, n = G) => [e].flat().map((e) => K(e, t, n)).join(", ");
K("✗", kt), K("✓", At), K("⏲", Ot);
var It = {
	header: u,
	"open-positions": d,
	"careers-benefits": f,
	settings: ee,
	footer: te,
	"results-table": ne,
	"settings-header": re,
	"contact-form": ie,
	"contact-header": ae,
	"about-grid": oe,
	"pricing-tiers": se,
	mockBanner: ce,
	"theme-toggle": le,
	"about-header": ue,
	"pricing-header": de,
	"faq-header": fe,
	"blog-header": pe,
	"team-header": me,
	"faq-list": he,
	"careers-header": ge,
	"products-header": _e,
	"what-we-measure": ve,
	products: ye,
	"blog-list": be,
	"understanding-impact": xe,
	team: Se,
	"why-it-matters": Ce,
	hero: we
}, Lt = () => It, Rt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), zt = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Rt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : zt(e ? `${e}.${String(n)}` : String(n)) }), Bt = /* @__PURE__ */ new Set(), Vt = (e, t, n) => {
	let r = Lt()[e];
	return r ? an(r, t, n) : (Bt.has(e) || (Pt({ log: Qe })(typeof window > "u" ? `Dictionary ${Ft(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), Bt.add(e)), zt(e));
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
}, q = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Gt = (e) => {
	if (typeof e == "string") return e;
	if (q(e)) return e.nodeType === "html" ? e[v] : e[Ie];
}, Kt = (e, t) => {
	if (typeof e == "string") return t;
	if (q(e)) {
		let n = e.nodeType === "html" ? v : Ie;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, qt = (e, t, n, r, i) => {
	let a = Kt(e, gt(Gt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, J = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Jt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? J : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: je,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return Wt(o, e, t);
	}
}, Yt = J, Xt = J, Zt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: _ }], i = e[_], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => qt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = gt(i, e);
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
}, Qt = J, $t = J;
process.env.INTLAYER_OPTIMIZED_NESTING;
var en = (e) => J, tn = J, nn = (e, t = !0) => [
	Jt(e ?? E.defaultLocale, t ? E.defaultLocale : void 0),
	Yt,
	Xt,
	Zt,
	en(e ?? E.defaultLocale),
	tn,
	Qt,
	$t
], rn = (e, t, n = []) => b(e, {
	...t,
	plugins: n
}), an = (e, t, n) => {
	let { locale: r, selector: i } = Et(t), a = mt(r ?? E.defaultLocale, Dt(i), n), o = ht(e, a);
	if (o.hit) return o.content;
	let s = n ?? nn(r), c = Tt(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return rn(e.content, t, s);
	};
	return c === null ? V(e, a, null) : Array.isArray(c) ? V(e, a, c.map(l)) : V(e, a, l(c));
}, on = () => {
	try {
		return Object.keys(Lt());
	} catch {
		return [];
	}
}, sn = (e, t) => {
	let n = on(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return Vt(e, t);
		} catch {
			return;
		}
	};
	if (n.includes(i)) {
		let t = g(a(i), r === -1 ? "" : e.slice(r + 1));
		if (t !== void 0) return t;
	}
	for (let t of n) {
		let n = g(a(t), e);
		if (n !== void 0) return n;
	}
}, cn = (e) => {
	let t = {};
	for (let n of on()) try {
		Object.assign(t, Oe(Vt(n, e)));
	} catch {}
	return t;
}, ln = () => ({
	lookup: sn,
	all: cn
}), un = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, dn = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = un(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, fn = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var Y = {
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
}, pn = (e = Y) => {
	let { locales: t } = E;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!fn) for (let t = 0; t < (D.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(D.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, mn = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !fn && D.storage.cookies) for (let n = 0; n < D.storage.cookies.length; n++) {
		let { name: r, attributes: i } = D.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: un(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, dn(r, e, i));
			} catch {}
		}
	}
}, hn = pn(Y), gn = (e, t) => mn(e, {
	...Y,
	isCookieEnabled: t
}), _n = () => {
	let { locale: e } = r(X) ?? {}, t = c(null);
	i(() => {}, []), i(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, vn = ({ children: e }) => (_n(), e), yn = () => {
	let { locale: e } = r(X) ?? {}, t = c(null);
	i(() => {}, []), i(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, bn = ({ children: e }) => (yn(), e), xn = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Sn = (e, t = E?.locales, n = E?.defaultLocale) => {
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
}, X = t({
	locale: hn ?? E?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Cn = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: a, disableEditor: o, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: u } = E ?? {}, [d, f] = l(e ?? hn ?? t ?? u);
	i(() => {
		e && e !== d && f(e);
	}, [e]), i(() => {
		xn();
	}, []);
	let ee = a ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			f(e), gn(e, s);
		}
	}), te = Sn(d);
	return m(X.Provider, {
		value: {
			locale: te,
			setLocale: ee,
			variant: n,
			disableEditor: o
		},
		children: r
	});
}, wn = ({ children: e, ...t }) => Te(Cn, {
	...t,
	children: [
		m(vn, {}),
		m(bn, {}),
		e
	]
}), { defaultLocale: Tn, locales: Z } = E ?? {}, En = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: i, setLocale: a, isCookieEnabled: o } = r(X) ?? {};
	return {
		locale: i,
		defaultLocale: Tn,
		availableLocales: Z,
		setLocale: n((n) => {
			if (!Z?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			a(n), gn(n, e ?? o ?? !0), t?.(n);
		}, [
			Z,
			t,
			a,
			e
		])
	};
}, Dn = () => {
	let e = r(I), { locale: t } = En(), n = s(() => {
		let e = new F({
			locale: t,
			registry: ln()
		});
		return {
			i18n: e,
			_: e._.bind(e)
		};
	}, [t]);
	return e || n;
}, On = ({ i18n: e, defaultComponent: t, children: n }) => {
	let r = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [a, o] = l(() => r(e)), [s, c] = l(e.locale);
	return i(() => (o(r(e)), c(e.locale), e.on("change", () => {
		o(r(e)), c(e.locale);
	})), [e]), m(I.Provider, {
		value: a,
		children: m(wn, {
			locale: s,
			children: n
		})
	});
}, kn = (t, n) => t.map((t, r) => {
	if (typeof t == "string") return t;
	let i = kn(t.children, n), a = n[t.tag];
	if (a === void 0) return m(e, { children: i }, r);
	if (typeof a == "function") return m(e, { children: a(m(p, { children: i })) }, r);
	if (typeof a == "object" && a && "type" in a) {
		let { type: e, props: t } = a;
		return m(e, {
			...t,
			children: i
		}, r);
	}
	return m(e, { children: i }, r);
}), An = ({ id: e, message: t, values: n, components: r, render: i, component: a }, o, s) => {
	let c = o._(e, n ?? {}, { message: t }), l = r && Object.keys(r).length > 0, u;
	if (l) {
		let e = kn(P(c), r);
		u = m(p, { children: e });
	} else u = c;
	let d = {
		id: e,
		translation: u,
		children: u,
		message: t ?? null
	};
	if (typeof i == "function") return i(d);
	let f = a ?? s;
	return f ? m(f, {
		...d,
		children: u
	}) : m(p, { children: u });
}, Q = (e) => {
	let { i18n: t, defaultComponent: n } = Dn();
	return An(e, t, n);
}, jn = (e) => new F({
	...e,
	registry: ln()
});
jn({ locale: "en" });
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-lingui-app/components/pages/settings/PreferencesSection.tsx";
function Mn() {
	let e = a(), { i18n: t } = Dn();
	return h("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [h("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: h(Q, {
				id: "settings.preferences.title",
				message: "Preferences"
			}, void 0, !1, {
				fileName: $,
				lineNumber: 13,
				columnNumber: 9
			}, this)
		}, void 0, !1, {
			fileName: $,
			lineNumber: 12,
			columnNumber: 7
		}, this), h("div", {
			className: "space-y-4",
			children: [
				h("div", {
					className: "flex items-center justify-between",
					children: [h("div", { children: [h("p", {
						className: "text-sm font-medium text-foreground",
						children: h(Q, {
							id: "settings.preferences.emailNotifications",
							message: "Email Notifications"
						}, void 0, !1, {
							fileName: $,
							lineNumber: 19,
							columnNumber: 15
						}, this)
					}, void 0, !1, {
						fileName: $,
						lineNumber: 18,
						columnNumber: 13
					}, this), h("p", {
						className: "text-xs text-muted-foreground",
						children: h(Q, {
							id: "settings.preferences.receiveWeeklyReports",
							message: "Receive weekly benchmark reports"
						}, void 0, !1, {
							fileName: $,
							lineNumber: 25,
							columnNumber: 15
						}, this)
					}, void 0, !1, {
						fileName: $,
						lineNumber: 24,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: $,
						lineNumber: 17,
						columnNumber: 11
					}, this), h("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-primary transition-colors",
						"aria-label": "Toggle notifications",
						children: h("span", { className: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" }, void 0, !1, {
							fileName: $,
							lineNumber: 36,
							columnNumber: 13
						}, this)
					}, void 0, !1, {
						fileName: $,
						lineNumber: 31,
						columnNumber: 11
					}, this)]
				}, void 0, !0, {
					fileName: $,
					lineNumber: 16,
					columnNumber: 9
				}, this),
				h("div", {
					className: "flex items-center justify-between",
					children: [h("div", { children: [h("p", {
						className: "text-sm font-medium text-foreground",
						children: h(Q, {
							id: "settings.preferences.darkMode",
							message: "Dark Mode"
						}, void 0, !1, {
							fileName: $,
							lineNumber: 42,
							columnNumber: 15
						}, this)
					}, void 0, !1, {
						fileName: $,
						lineNumber: 41,
						columnNumber: 13
					}, this), h("p", {
						className: "text-xs text-muted-foreground",
						children: h(Q, {
							id: "settings.preferences.useDarkScheme",
							message: "Use dark color scheme"
						}, void 0, !1, {
							fileName: $,
							lineNumber: 45,
							columnNumber: 15
						}, this)
					}, void 0, !1, {
						fileName: $,
						lineNumber: 44,
						columnNumber: 13
					}, this)] }, void 0, !0, {
						fileName: $,
						lineNumber: 40,
						columnNumber: 11
					}, this), h("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-muted transition-colors",
						"aria-label": "Toggle dark mode",
						children: h("span", { className: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" }, void 0, !1, {
							fileName: $,
							lineNumber: 56,
							columnNumber: 13
						}, this)
					}, void 0, !1, {
						fileName: $,
						lineNumber: 51,
						columnNumber: 11
					}, this)]
				}, void 0, !0, {
					fileName: $,
					lineNumber: 39,
					columnNumber: 9
				}, this),
				h("div", { children: [h("label", {
					htmlFor: e,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: h(Q, {
						id: "settings.preferences.defaultLanguage",
						message: "Default Language"
					}, void 0, !1, {
						fileName: $,
						lineNumber: 64,
						columnNumber: 13
					}, this)
				}, void 0, !1, {
					fileName: $,
					lineNumber: 60,
					columnNumber: 11
				}, this), h("select", {
					id: e,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					children: [
						h("option", { children: t._("settings.preferences.english") }, void 0, !1, {
							fileName: $,
							lineNumber: 73,
							columnNumber: 13
						}, this),
						h("option", { children: t._("settings.preferences.french") }, void 0, !1, {
							fileName: $,
							lineNumber: 74,
							columnNumber: 13
						}, this),
						h("option", { children: t._("settings.preferences.german") }, void 0, !1, {
							fileName: $,
							lineNumber: 75,
							columnNumber: 13
						}, this),
						h("option", { children: t._("settings.preferences.spanish") }, void 0, !1, {
							fileName: $,
							lineNumber: 76,
							columnNumber: 13
						}, this),
						h("option", { children: t._("settings.preferences.japanese") }, void 0, !1, {
							fileName: $,
							lineNumber: 77,
							columnNumber: 13
						}, this),
						h("option", { children: t._("settings.preferences.chinese") }, void 0, !1, {
							fileName: $,
							lineNumber: 78,
							columnNumber: 13
						}, this),
						h("option", { children: t._("settings.preferences.arabic") }, void 0, !1, {
							fileName: $,
							lineNumber: 79,
							columnNumber: 13
						}, this)
					]
				}, void 0, !0, {
					fileName: $,
					lineNumber: 69,
					columnNumber: 11
				}, this)] }, void 0, !0, {
					fileName: $,
					lineNumber: 59,
					columnNumber: 9
				}, this)
			]
		}, void 0, !0, {
			fileName: $,
			lineNumber: 15,
			columnNumber: 7
		}, this)]
	}, void 0, !0, {
		fileName: $,
		lineNumber: 11,
		columnNumber: 5
	}, this);
}
function Nn() {
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
function Pn(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Fn(e, t) {
	let n = jn();
	return n.activate(e), n;
}
var In = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-lingui-app/components/AppProviders.tsx";
function Ln({ children: e, locale: t, messages: n }) {
	let r = s(() => Fn(t, n), [t, n]), [a] = l(() => typeof performance < "u" ? performance.now() : 0);
	return o(() => {
		Pn("AppRoot", a);
	}, [a]), i(() => {
		document.documentElement.lang = t;
	}, [t]), i(() => {
		Nn();
	}, []), h(On, {
		i18n: r,
		children: e
	}, void 0, !1, {
		fileName: In,
		lineNumber: 39,
		columnNumber: 7
	}, this);
}
var Rn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-lingui-app/scripts/Wrapper.tsx";
function zn({ children: e }) {
	return h(Ln, {
		locale: "en",
		messages: {},
		children: e
	}, void 0, !1, {
		fileName: Rn,
		lineNumber: 10,
		columnNumber: 5
	}, this);
}
var Bn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-lingui-app/components/pages/settings/PreferencesSection.wrapper.tsx";
function Vn() {
	return h(zn, { children: h(Mn, {}, void 0, !1, {
		fileName: Bn,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: Bn,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { Vn as default };
