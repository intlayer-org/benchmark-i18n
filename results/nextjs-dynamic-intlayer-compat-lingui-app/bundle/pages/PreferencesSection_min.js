import { Fragment as e, createContext as t, useCallback as n, useContext as r, useEffect as i, useId as a, useLayoutEffect as o, useMemo as s, useState as c } from "react";
import { Fragment as l, jsx as u, jsxs as d } from "react/jsx-runtime";
import f from "../../../.intlayer/dictionary/header.json";
import p from "../../../.intlayer/dictionary/open-positions.json";
import m from "../../../.intlayer/dictionary/careers-benefits.json";
import h from "../../../.intlayer/dictionary/settings.json";
import ee from "../../../.intlayer/dictionary/footer.json";
import g from "../../../.intlayer/dictionary/results-table.json";
import te from "../../../.intlayer/dictionary/settings-header.json";
import _ from "../../../.intlayer/dictionary/contact-form.json";
import v from "../../../.intlayer/dictionary/contact-header.json";
import y from "../../../.intlayer/dictionary/about-grid.json";
import ne from "../../../.intlayer/dictionary/pricing-tiers.json";
import re from "../../../.intlayer/dictionary/mockBanner.json";
import ie from "../../../.intlayer/dictionary/theme-toggle.json";
import ae from "../../../.intlayer/dictionary/about-header.json";
import oe from "../../../.intlayer/dictionary/pricing-header.json";
import se from "../../../.intlayer/dictionary/faq-header.json";
import ce from "../../../.intlayer/dictionary/blog-header.json";
import le from "../../../.intlayer/dictionary/team-header.json";
import ue from "../../../.intlayer/dictionary/faq-list.json";
import de from "../../../.intlayer/dictionary/careers-header.json";
import fe from "../../../.intlayer/dictionary/products-header.json";
import pe from "../../../.intlayer/dictionary/what-we-measure.json";
import me from "../../../.intlayer/dictionary/products.json";
import he from "../../../.intlayer/dictionary/blog-list.json";
import ge from "../../../.intlayer/dictionary/understanding-impact.json";
import _e from "../../../.intlayer/dictionary/team.json";
import ve from "../../../.intlayer/dictionary/why-it-matters.json";
import ye from "../../../.intlayer/dictionary/hero.json";
var be = t(null), xe = class {
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
}, Se = (e, t) => {
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
}, Ce = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, b = (e, t) => {
	let n = Se(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return Se(n, t);
	}
}, we = (e) => {
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
			i.push(`${t} {${x(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, x = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(we).join("") : String(e ?? ""), Te = "translation", S = "enumeration", C = "plural", Ee = "condition", w = "insertion", De = "object", Oe = "array", ke = "markdown", T = "html", E = "gender", D = "select", O = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), k = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), A = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, A);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => A(e, k(t, e, {
		type: Oe,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: De,
			key: r
		};
		if (t.eager) {
			n[r] = A(e[r], k(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = A(e[r], k(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, Ae = (e) => O(S, e), je = (e) => O(E, e), Me = (e) => {
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
		let o = Me(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, Ne = /* @__PURE__ */ new Set([
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
]), Pe = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, Fe = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(Pe)) {
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
				let e = Ne.has(i.toLowerCase());
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
}, M = (e, t) => O(T, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = Fe(e);
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
}, P = (e) => O(w, e, { fields: (() => {
	if (typeof e == "string") return N(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => N(await e)), typeof t == "string") return N(t);
	try {
		return N(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), Ie = (e) => O(C, e), Le = (e, t) => O(D, e, { variable: t }), Re = (e) => {
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
	if (e.every((e) => typeof e == "string" || e?.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n?.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? M(t) : P(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? M(t) : t;
		if (t?.type === "argument") return t.format ? P(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : P(`{{${t.name}}}`);
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
					e[i] = F(a);
				}
				return e.__intlayer_icu_var = t.name, Ae(e);
			}
			for (let [n, r] of Object.entries(t.options)) {
				let i = r?.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e);
				e[n] = F(i);
			}
			return Ie(e);
		}
		if (t?.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = F(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? je({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : Le(e, t.name);
		}
		if (t?.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = F(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, Ae(e);
		}
	}
	return e.map((e) => F([e]));
}, ze = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return F(Re(e));
		} catch {
			return e;
		}
	}
}, Be = (e) => A(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...ze
	}]
}), Ve = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, He = (e, t) => e[Ve(e, t) ?? "fallback"], I = {
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
}, L = {
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
}, Ue = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, We = 50, R = /* @__PURE__ */ new Map(), Ge = /* @__PURE__ */ new Set(), Ke = (e) => {
	Ge.has(e) || (Ge.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, qe = {
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
}, Je = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Ke(e), qe[e]);
};
function z(e, t, n) {
	let r = t ?? I?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = R.get(a);
	o || (o = /* @__PURE__ */ new Map(), R.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Je(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > We && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Ye = (e, t, n) => e[z("PluralRules", n).select(t)] ?? e.other, Xe = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, Ze = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], B = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, Qe = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? z("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? z("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : z("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return z("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, $e = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = B(t, r);
	return o === void 0 ? e : i ? Qe(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = B(t, r);
	return o === void 0 ? e : Qe(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = B(t, n);
	return r === void 0 ? e : String(r);
}), V = (e, t) => e[t] ?? e.count ?? e.n, H = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return $e(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return H(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(H(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return H(r[w], t, n);
	if (r.nodeType === "html") return H(r[T], t, n);
	if (r.nodeType === "plural") {
		let e = r[C];
		return H(Ye(e, Number(V(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[S], i = Ze.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Ze.includes(t) || (o[t] = n);
		let s = V(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = z("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? He(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return H(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[D], i = V(t, typeof r.variable == "string" ? r.variable : "value");
		return H(Xe(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[E];
		return H(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, et = (e, t = {}, n = "en") => {
	let r = H(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, tt = (e) => (t, n = {}, r = "en") => et(typeof t == "string" ? e(t) : t, n, r), nt = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : o && t.push({
			tag: o,
			children: nt(s ?? "")
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, rt = tt(Be), it = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, U = class extends xe {
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
		for (let t of Object.values(this._boundDictionaries)) Object.assign(e, Ce(t));
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
		let { dictionaryKey: t, remainder: n } = it(e), r = this._boundDictionaries[t];
		if (r !== void 0) {
			let e = b(r, n);
			if (e !== void 0) return e;
		}
		for (let t of Object.values(this._boundDictionaries)) {
			let n = b(t, e);
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
			let t = b(r, e);
			if (t !== void 0) return {
				kind: "icu",
				message: x(t)
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
		return (c.kind === "node" ? et(c.node, o, s) : rt(c.message, o, s)) ?? i;
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
}, at = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, ot = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = at(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, st = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var W = {
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
}, ct = (e = W) => {
	let { locales: t } = I;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!st) for (let t = 0; t < (L.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(L.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, lt = !1, ut, dt = () => typeof window > "u" ? ct(W) : (lt ||= (ut = ct(W), !0), ut), ft = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (lt = !1, !st && L.storage.cookies)) for (let n = 0; n < L.storage.cookies.length; n++) {
		let { name: r, attributes: i } = L.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: at(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ot(r, e, i));
			} catch {}
		}
	}
}, pt = /* @__PURE__ */ new WeakMap(), mt = 0, ht = (e) => {
	if (!e) return "base";
	let t = pt.get(e);
	if (t) return t;
	mt += 1;
	let n = `p${mt}`;
	return pt.set(e, n), n;
}, gt = 256, G = /* @__PURE__ */ new WeakMap(), _t = (e) => typeof e == "object" && !!e, vt = (e, t, n) => `${e}_${t}_${ht(n)}`, yt = (e, t) => {
	if (!_t(e)) return { hit: !1 };
	let n = G.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, K = (e, t, n) => {
	if (!_t(e)) return n;
	let r = G.get(e);
	return r || (r = /* @__PURE__ */ new Map(), G.set(e, r)), r.size >= gt && r.clear(), r.set(t, n), n;
}, bt = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), q = "\x1B[0m", xt = "\x1B[34m", St = "\x1B[31m", Ct = "\x1B[32m", wt = "\x1B[38;5;3m", Tt = (e) => e, Et = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Tt(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Dt = (e, t) => (n, r) => Et(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), J = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? q : n : q}` : e, Ot = (e, t = wt, n = q) => [e].flat().map((e) => J(e, t, n)).join(", ");
J("✗", St), J("✓", Ct), J("⏲", xt);
var kt = {
	header: f,
	"open-positions": p,
	"careers-benefits": m,
	settings: h,
	footer: ee,
	"results-table": g,
	"settings-header": te,
	"contact-form": _,
	"contact-header": v,
	"about-grid": y,
	"pricing-tiers": ne,
	mockBanner: re,
	"theme-toggle": ie,
	"about-header": ae,
	"pricing-header": oe,
	"faq-header": se,
	"blog-header": ce,
	"team-header": le,
	"faq-list": ue,
	"careers-header": de,
	"products-header": fe,
	"what-we-measure": pe,
	products: me,
	"blog-list": he,
	"understanding-impact": ge,
	team: _e,
	"why-it-matters": ve,
	hero: ye
}, At = () => kt, jt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Mt = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : jt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Mt(e ? `${e}.${String(n)}` : String(n)) }), Nt = /* @__PURE__ */ new Set(), Pt = (e, t, n) => {
	let r = At()[e];
	return r ? nn(r, t, n) : (Nt.has(e) || (Dt({ log: Ue })(typeof window > "u" ? `Dictionary ${Ot(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), Nt.add(e)), Mt(e));
}, Ft = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, It = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !Ft(e) || !Ft(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? It(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, Lt = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => It(e, t));
}, Y = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Rt = (e) => {
	if (typeof e == "string") return e;
	if (Y(e)) return e.nodeType === "html" ? e[T] : e[ke];
}, zt = (e, t) => {
	if (typeof e == "string") return t;
	if (Y(e)) {
		let n = e.nodeType === "html" ? T : ke;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Bt = (e, t, n, r, i) => {
	let a = zt(e, bt(Rt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, X = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Vt = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, Ht = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? X : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Lt(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: Te,
				key: e
			}]
		});
	}
}, Ut = X, Wt = (e) => X, Gt = X, Kt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? X : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: w }], i = e[w], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || Y(e),
			transform: (e, n, r) => {
				if (Y(e)) return (i) => Bt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = bt(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return Yt(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, qt = [
	S,
	Ee,
	C,
	E,
	D
], Jt = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !qt.includes(i)) return t;
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
		return !r && Vt(i) ? i(n) : i;
	};
}, Yt = (e, t) => typeof t == "function" && qt.includes(e?.nodeType ?? "") ? (n) => Jt(e, t, n) : t, Xt = X, Zt = X;
process.env.INTLAYER_OPTIMIZED_NESTING;
var Qt = (e) => X, $t = X, en = (e, t = !0) => [
	Ht(e ?? I.defaultLocale, t ? I.defaultLocale : void 0),
	Ut,
	Wt(e ?? I.defaultLocale),
	Gt,
	Kt,
	Qt(e ?? I.defaultLocale),
	$t,
	Xt,
	Zt
].filter((e) => e !== X), tn = (e, t, n = []) => A(e, {
	...t,
	plugins: n
}), Z = /* @__PURE__ */ new WeakSet(), nn = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = vt(r ?? I.defaultLocale, "", n), o = yt(e, a);
	if (o.hit) return o.content;
	let s = n ?? en(r), c = e, l = (e) => {
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
			return tn(e.content, t, s);
		} finally {
			t.eager && Z.delete(e);
		}
	};
	return c === null ? K(e, a, null) : Array.isArray(c) ? K(e, a, c.map(l)) : K(e, a, l(c));
}, rn = dt, an = (e, t) => ft(e, {
	...W,
	isCookieEnabled: t
}), on = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, sn = (e, t = I?.locales, n = I?.defaultLocale) => {
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
}, cn = t({
	get locale() {
		return rn() ?? I?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), ln = ({ locale: e, defaultLocale: t, variant: r, children: a, setLocale: o, disableEditor: l, isCookieEnabled: d }) => {
	let { locales: f, defaultLocale: p } = I ?? {}, [m, h] = c(() => e ?? rn() ?? t ?? p), [ee, g] = c(e);
	e !== ee && (g(e), e && e !== m && h(e)), i(() => {
		on();
	}, []);
	let te = n((e) => {
		if (m.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			h(e), an(e, d);
		}
	}, [
		m,
		f,
		d
	]), _ = o ?? te, v = sn(m), y = s(() => ({
		locale: v,
		setLocale: _,
		variant: r,
		disableEditor: l
	}), [
		v,
		_,
		r,
		l
	]);
	return u(cn.Provider, {
		value: y,
		children: a
	});
}, un = ({ children: e, ...t }) => d(ln, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), { defaultLocale: dn, locales: Q } = I ?? {}, fn = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: i, setLocale: a, isCookieEnabled: o } = r(cn) ?? {};
	return {
		locale: i,
		defaultLocale: dn,
		availableLocales: Q,
		setLocale: n((n) => {
			if (!Q?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			a(n), an(n, e ?? o ?? !0), t?.(n);
		}, [
			Q,
			t,
			a,
			e
		])
	};
}, pn = () => {
	try {
		return Object.keys(At());
	} catch {
		return [];
	}
}, mn = (e, t) => {
	let n = pn(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return Pt(e, t);
		} catch {
			return;
		}
	};
	if (n.includes(i)) {
		let t = b(a(i), r === -1 ? "" : e.slice(r + 1));
		if (t !== void 0) return t;
	}
	for (let t of n) {
		let n = b(a(t), e);
		if (n !== void 0) return n;
	}
}, hn = (e) => {
	let t = {};
	for (let n of pn()) try {
		Object.assign(t, Ce(Pt(n, e)));
	} catch {}
	return t;
}, gn = () => ({
	lookup: mn,
	all: hn
}), _n = () => {
	let e = r(be), { locale: t } = fn(), n = s(() => {
		let e = new U({
			locale: t,
			registry: gn()
		});
		return {
			i18n: e,
			_: e._.bind(e)
		};
	}, [t]);
	return e || n;
}, vn = (t, n) => t.map((t, r) => {
	if (typeof t == "string") return t;
	let i = vn(t.children, n), a = n[t.tag];
	if (a === void 0) return u(e, { children: i }, r);
	if (typeof a == "function") return u(e, { children: a(u(l, { children: i })) }, r);
	if (typeof a == "object" && a && "type" in a) {
		let { type: e, props: t } = a;
		return u(e, {
			...t,
			children: i
		}, r);
	}
	return u(e, { children: i }, r);
}), yn = ({ id: e, message: t, values: n, components: r, render: i, component: a }, o, s) => {
	let c = o._(e, n ?? {}, { message: t }), d = r && Object.keys(r).length > 0, f;
	if (d) {
		let e = vn(nt(c), r);
		f = u(l, { children: e });
	} else f = c;
	let p = {
		id: e,
		translation: f,
		children: f,
		message: t ?? null
	};
	if (typeof i == "function") return i(p);
	let m = a ?? s;
	return m ? u(m, {
		...p,
		children: f
	}) : u(l, { children: f });
}, $ = (e) => {
	let { i18n: t, defaultComponent: n } = _n();
	return yn(e, t, n);
}, bn = (e) => new U({
	...e,
	registry: gn()
});
bn({ locale: "en" });
var xn = ({ i18n: e, defaultComponent: t, children: n }) => {
	let r = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [a, o] = c(() => r(e)), [s, l] = c(e.locale);
	return i(() => (o(r(e)), l(e.locale), e.on("change", () => {
		o(r(e)), l(e.locale);
	})), [e]), u(be.Provider, {
		value: a,
		children: u(un, {
			locale: s,
			children: n
		})
	});
};
function Sn() {
	let e = a(), { i18n: t } = _n();
	return d("section", {
		className: "rounded-lg border border-border bg-card p-6",
		children: [u("h2", {
			className: "mb-4 text-lg font-semibold text-foreground",
			children: u($, {
				id: "settings.preferences.title",
				message: "Preferences"
			})
		}), d("div", {
			className: "space-y-4",
			children: [
				d("div", {
					className: "flex items-center justify-between",
					children: [d("div", { children: [u("p", {
						className: "text-sm font-medium text-foreground",
						children: u($, {
							id: "settings.preferences.emailNotifications",
							message: "Email Notifications"
						})
					}), u("p", {
						className: "text-xs text-muted-foreground",
						children: u($, {
							id: "settings.preferences.receiveWeeklyReports",
							message: "Receive weekly benchmark reports"
						})
					})] }), u("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-primary transition-colors",
						"aria-label": "Toggle notifications",
						children: u("span", { className: "block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" })
					})]
				}),
				d("div", {
					className: "flex items-center justify-between",
					children: [d("div", { children: [u("p", {
						className: "text-sm font-medium text-foreground",
						children: u($, {
							id: "settings.preferences.darkMode",
							message: "Dark Mode"
						})
					}), u("p", {
						className: "text-xs text-muted-foreground",
						children: u($, {
							id: "settings.preferences.useDarkScheme",
							message: "Use dark color scheme"
						})
					})] }), u("button", {
						type: "button",
						className: "h-6 w-11 rounded-full bg-muted transition-colors",
						"aria-label": "Toggle dark mode",
						children: u("span", { className: "block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" })
					})]
				}),
				d("div", { children: [u("label", {
					htmlFor: e,
					className: "mb-1 block text-sm font-medium text-foreground",
					children: u($, {
						id: "settings.preferences.defaultLanguage",
						message: "Default Language"
					})
				}), d("select", {
					id: e,
					className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring",
					children: [
						u("option", { children: t._("settings.preferences.english") }),
						u("option", { children: t._("settings.preferences.french") }),
						u("option", { children: t._("settings.preferences.german") }),
						u("option", { children: t._("settings.preferences.spanish") }),
						u("option", { children: t._("settings.preferences.japanese") }),
						u("option", { children: t._("settings.preferences.chinese") }),
						u("option", { children: t._("settings.preferences.arabic") })
					]
				})] })
			]
		})]
	});
}
function Cn() {
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
function wn(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Tn(e, t) {
	let n = bn();
	return n.activate(e), n;
}
function En({ children: e, locale: t, messages: n }) {
	let r = s(() => Tn(t, n), [t, n]), [a] = c(() => typeof performance < "u" ? performance.now() : 0);
	return o(() => {
		wn("AppRoot", a);
	}, [a]), i(() => {
		document.documentElement.lang = t;
	}, [t]), i(() => {
		Cn();
	}, []), u(xn, {
		i18n: r,
		children: e
	});
}
function Dn({ children: e }) {
	return u(En, {
		locale: "en",
		messages: {},
		children: e
	});
}
function On() {
	return u(Dn, { children: u(Sn, {}) });
}
export { On as default };
