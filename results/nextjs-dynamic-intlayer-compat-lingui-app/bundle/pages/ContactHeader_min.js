import { createContext as e, useCallback as t, useContext as n, useEffect as r, useLayoutEffect as i, useMemo as a, useState as o } from "react";
import { Fragment as s, jsx as c, jsxs as l } from "react/jsx-runtime";
import u from "../../../.intlayer/dictionary/header.json";
import d from "../../../.intlayer/dictionary/open-positions.json";
import f from "../../../.intlayer/dictionary/careers-benefits.json";
import ee from "../../../.intlayer/dictionary/settings.json";
import p from "../../../.intlayer/dictionary/footer.json";
import m from "../../../.intlayer/dictionary/results-table.json";
import te from "../../../.intlayer/dictionary/settings-header.json";
import ne from "../../../.intlayer/dictionary/contact-form.json";
import re from "../../../.intlayer/dictionary/contact-header.json";
import h from "../../../.intlayer/dictionary/about-grid.json";
import g from "../../../.intlayer/dictionary/pricing-tiers.json";
import ie from "../../../.intlayer/dictionary/mockBanner.json";
import ae from "../../../.intlayer/dictionary/theme-toggle.json";
import oe from "../../../.intlayer/dictionary/about-header.json";
import se from "../../../.intlayer/dictionary/pricing-header.json";
import ce from "../../../.intlayer/dictionary/faq-header.json";
import le from "../../../.intlayer/dictionary/blog-header.json";
import ue from "../../../.intlayer/dictionary/team-header.json";
import de from "../../../.intlayer/dictionary/faq-list.json";
import fe from "../../../.intlayer/dictionary/careers-header.json";
import pe from "../../../.intlayer/dictionary/products-header.json";
import me from "../../../.intlayer/dictionary/what-we-measure.json";
import he from "../../../.intlayer/dictionary/products.json";
import ge from "../../../.intlayer/dictionary/blog-list.json";
import _e from "../../../.intlayer/dictionary/understanding-impact.json";
import ve from "../../../.intlayer/dictionary/team.json";
import ye from "../../../.intlayer/dictionary/why-it-matters.json";
import be from "../../../.intlayer/dictionary/hero.json";
var xe = e(null), Se = class {
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
}, _ = (e, t) => {
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
}, v = (e, t) => {
	let n = _(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return _(n, t);
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
			i.push(`${t} {${Te(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, Te = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(we).join("") : String(e ?? ""), Ee = "translation", y = "enumeration", b = "plural", De = "condition", x = "insertion", Oe = "object", ke = "array", Ae = "markdown", S = "html", C = "gender", w = "select", T = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), E = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), D = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, D);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => D(e, E(t, e, {
		type: ke,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: Oe,
			key: r
		};
		if (t.eager) {
			n[r] = D(e[r], E(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = D(e[r], E(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, O = (e) => T(y, e), je = (e) => T(C, e), Me = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, k = (e) => {
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
}, A = (e, t) => T(S, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = Fe(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return k(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => k(await e)), typeof n == "string") return k(n);
	try {
		return k(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), j = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, M = (e) => T(x, e, { fields: (() => {
	if (typeof e == "string") return j(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => j(await e)), typeof t == "string") return j(t);
	try {
		return j(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), Ie = (e) => T(b, e), Le = (e, t) => T(w, e, { variable: t }), Re = (e) => {
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
}, N = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? A(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e?.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n?.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? A(t) : M(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? A(t) : t;
		if (t?.type === "argument") return t.format ? M(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : M(`{{${t.name}}}`);
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
					e[i] = N(a);
				}
				return e.__intlayer_icu_var = t.name, O(e);
			}
			for (let [n, r] of Object.entries(t.options)) {
				let i = r?.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e);
				e[n] = N(i);
			}
			return Ie(e);
		}
		if (t?.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = N(r);
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
				e[i] = N(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, O(e);
		}
	}
	return e.map((e) => N([e]));
}, ze = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return N(Re(e));
		} catch {
			return e;
		}
	}
}, Be = (e) => D(e, {
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
}, He = (e, t) => e[Ve(e, t) ?? "fallback"], P = {
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
}, F = {
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
}, We = 50, Ge = /* @__PURE__ */ new Map(), Ke = /* @__PURE__ */ new Set(), qe = (e) => {
	Ke.has(e) || (Ke.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Je = {
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
}, Ye = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (qe(e), Je[e]);
};
function I(e, t, n) {
	let r = t ?? P?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = Ge.get(a);
	o || (o = /* @__PURE__ */ new Map(), Ge.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Ye(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > We && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Xe = (e, t, n) => e[I("PluralRules", n).select(t)] ?? e.other, Ze = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, Qe = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], L = (e, t) => {
	if (t in e) return e[t];
	let n = e;
	for (let e of t.split(".")) {
		if (typeof n != "object" || !n) return;
		n = n[e];
	}
	return n;
}, R = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? I("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? I("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : I("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return I("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, $e = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = L(t, r);
	return o === void 0 ? e : i ? R(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = L(t, r);
	return o === void 0 ? e : R(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = L(t, n);
	return r === void 0 ? e : String(r);
}), z = (e, t) => e[t] ?? e.count ?? e.n, B = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return $e(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return B(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(B(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return B(r[x], t, n);
	if (r.nodeType === "html") return B(r[S], t, n);
	if (r.nodeType === "plural") {
		let e = r[b];
		return B(Xe(e, Number(z(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[y], i = Qe.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Qe.includes(t) || (o[t] = n);
		let s = z(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = I("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? He(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return B(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[w], i = z(t, typeof r.variable == "string" ? r.variable : "value");
		return B(Ze(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[C];
		return B(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, V = (e, t = {}, n = "en") => {
	let r = B(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, et = ((e) => (t, n = {}, r = "en") => V(typeof t == "string" ? e(t) : t, n, r))(Be), tt = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, H = class extends Se {
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
		let { dictionaryKey: t, remainder: n } = tt(e), r = this._boundDictionaries[t];
		if (r !== void 0) {
			let e = v(r, n);
			if (e !== void 0) return e;
		}
		for (let t of Object.values(this._boundDictionaries)) {
			let n = v(t, e);
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
			let t = v(r, e);
			if (t !== void 0) return {
				kind: "icu",
				message: Te(t)
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
		return (c.kind === "node" ? V(c.node, o, s) : et(c.message, o, s)) ?? i;
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
}, U = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, nt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = U(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, rt = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, G = (e = W) => {
	let { locales: t } = P;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!rt) for (let t = 0; t < (F.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(F.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, it = !1, at, ot = () => typeof window > "u" ? G(W) : (it ||= (at = G(W), !0), at), st = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (it = !1, !rt && F.storage.cookies)) for (let n = 0; n < F.storage.cookies.length; n++) {
		let { name: r, attributes: i } = F.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: U(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, nt(r, e, i));
			} catch {}
		}
	}
}, ct = /* @__PURE__ */ new WeakMap(), lt = 0, ut = (e) => {
	if (!e) return "base";
	let t = ct.get(e);
	if (t) return t;
	lt += 1;
	let n = `p${lt}`;
	return ct.set(e, n), n;
}, dt = 256, K = /* @__PURE__ */ new WeakMap(), ft = (e) => typeof e == "object" && !!e, pt = (e, t, n) => `${e}_${t}_${ut(n)}`, mt = (e, t) => {
	if (!ft(e)) return { hit: !1 };
	let n = K.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, q = (e, t, n) => {
	if (!ft(e)) return n;
	let r = K.get(e);
	return r || (r = /* @__PURE__ */ new Map(), K.set(e, r)), r.size >= dt && r.clear(), r.set(t, n), n;
}, ht = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), J = "\x1B[0m", gt = "\x1B[34m", _t = "\x1B[31m", vt = "\x1B[32m", yt = "\x1B[38;5;3m", bt = (e) => e, xt = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = bt(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, St = (e, t) => (n, r) => xt(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), Y = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? J : n : J}` : e, Ct = (e, t = yt, n = J) => [e].flat().map((e) => Y(e, t, n)).join(", ");
Y("✗", _t), Y("✓", vt), Y("⏲", gt);
var wt = {
	header: u,
	"open-positions": d,
	"careers-benefits": f,
	settings: ee,
	footer: p,
	"results-table": m,
	"settings-header": te,
	"contact-form": ne,
	"contact-header": re,
	"about-grid": h,
	"pricing-tiers": g,
	mockBanner: ie,
	"theme-toggle": ae,
	"about-header": oe,
	"pricing-header": se,
	"faq-header": ce,
	"blog-header": le,
	"team-header": ue,
	"faq-list": de,
	"careers-header": fe,
	"products-header": pe,
	"what-we-measure": me,
	products: he,
	"blog-list": ge,
	"understanding-impact": _e,
	team: ve,
	"why-it-matters": ye,
	hero: be
}, Tt = () => wt, Et = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Dt = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Et.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Dt(e ? `${e}.${String(n)}` : String(n)) }), Ot = /* @__PURE__ */ new Set(), kt = (e, t, n) => {
	let r = Tt()[e];
	return r ? Zt(r, t, n) : (Ot.has(e) || (St({ log: Ue })(typeof window > "u" ? `Dictionary ${Ct(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), Ot.add(e)), Dt(e));
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
}, X = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Nt = (e) => {
	if (typeof e == "string") return e;
	if (X(e)) return e.nodeType === "html" ? e[S] : e[Ae];
}, Pt = (e, t) => {
	if (typeof e == "string") return t;
	if (X(e)) {
		let n = e.nodeType === "html" ? S : Ae;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Ft = (e, t, n, r, i) => {
	let a = Pt(e, ht(Nt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, Z = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, It = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, Lt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? Z : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Mt(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: Ee,
				key: e
			}]
		});
	}
}, Rt = Z, zt = (e) => Z, Bt = Z, Vt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? Z : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: x }], i = e[x], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || X(e),
			transform: (e, n, r) => {
				if (X(e)) return (i) => Ft(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = ht(i, e);
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
	y,
	De,
	b,
	C,
	w
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
}, Wt = (e, t) => typeof t == "function" && Ht.includes(e?.nodeType ?? "") ? (n) => Ut(e, t, n) : t, Gt = Z, Kt = Z;
process.env.INTLAYER_OPTIMIZED_NESTING;
var qt = (e) => Z, Jt = Z, Yt = (e, t = !0) => [
	Lt(e ?? P.defaultLocale, t ? P.defaultLocale : void 0),
	Rt,
	zt(e ?? P.defaultLocale),
	Bt,
	Vt,
	qt(e ?? P.defaultLocale),
	Jt,
	Gt,
	Kt
].filter((e) => e !== Z), Xt = (e, t, n = []) => D(e, {
	...t,
	plugins: n
}), Q = /* @__PURE__ */ new WeakSet(), Zt = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = pt(r ?? P.defaultLocale, "", n), o = mt(e, a);
	if (o.hit) return o.content;
	let s = n ?? Yt(r), c = e, l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries,
			eager: !Q.has(e)
		};
		Q.add(e);
		try {
			return Xt(e.content, t, s);
		} finally {
			t.eager && Q.delete(e);
		}
	};
	return c === null ? q(e, a, null) : Array.isArray(c) ? q(e, a, c.map(l)) : q(e, a, l(c));
}, Qt = ot, $t = (e, t) => st(e, {
	...W,
	isCookieEnabled: t
}), en = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, tn = (e, t = P?.locales, n = P?.defaultLocale) => {
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
}, nn = e({
	get locale() {
		return Qt() ?? P?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), rn = ({ locale: e, defaultLocale: n, variant: i, children: s, setLocale: l, disableEditor: u, isCookieEnabled: d }) => {
	let { locales: f, defaultLocale: ee } = P ?? {}, [p, m] = o(() => e ?? Qt() ?? n ?? ee), [te, ne] = o(e);
	e !== te && (ne(e), e && e !== p && m(e)), r(() => {
		en();
	}, []);
	let re = t((e) => {
		if (p.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			m(e), $t(e, d);
		}
	}, [
		p,
		f,
		d
	]), h = l ?? re, g = tn(p), ie = a(() => ({
		locale: g,
		setLocale: h,
		variant: i,
		disableEditor: u
	}), [
		g,
		h,
		i,
		u
	]);
	return c(nn.Provider, {
		value: ie,
		children: s
	});
}, an = ({ children: e, ...t }) => l(rn, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), { defaultLocale: on, locales: $ } = P ?? {}, sn = ({ isCookieEnabled: e, onLocaleChange: r } = {}) => {
	let { locale: i, setLocale: a, isCookieEnabled: o } = n(nn) ?? {};
	return {
		locale: i,
		defaultLocale: on,
		availableLocales: $,
		setLocale: t((t) => {
			if (!$?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			a(t), $t(t, e ?? o ?? !0), r?.(t);
		}, [
			$,
			r,
			a,
			e
		])
	};
}, cn = () => {
	try {
		return Object.keys(Tt());
	} catch {
		return [];
	}
}, ln = (e, t) => {
	let n = cn(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return kt(e, t);
		} catch {
			return;
		}
	};
	if (n.includes(i)) {
		let t = v(a(i), r === -1 ? "" : e.slice(r + 1));
		if (t !== void 0) return t;
	}
	for (let t of n) {
		let n = v(a(t), e);
		if (n !== void 0) return n;
	}
}, un = (e) => {
	let t = {};
	for (let n of cn()) try {
		Object.assign(t, Ce(kt(n, e)));
	} catch {}
	return t;
}, dn = () => ({
	lookup: ln,
	all: un
}), fn = () => {
	let e = n(xe), { locale: t } = sn(), r = a(() => {
		let e = new H({
			locale: t,
			registry: dn()
		});
		return {
			i18n: e,
			_: e._.bind(e)
		};
	}, [t]);
	return e || r;
}, pn = (e) => new H({
	...e,
	registry: dn()
});
pn({ locale: "en" });
var mn = ({ i18n: e, defaultComponent: t, children: n }) => {
	let i = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [a, s] = o(() => i(e)), [l, u] = o(e.locale);
	return r(() => (s(i(e)), u(e.locale), e.on("change", () => {
		s(i(e)), u(e.locale);
	})), [e]), c(xe.Provider, {
		value: a,
		children: c(an, {
			locale: l,
			children: n
		})
	});
}, hn = () => {
	let { i18n: e } = fn();
	return c("div", {
		className: "mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground",
		children: e._("mockBanner")
	});
};
function gn() {
	let { i18n: e } = fn();
	return l(s, { children: [
		c(hn, {}),
		c("h1", {
			className: "mb-2 text-3xl font-bold text-foreground",
			children: e._("contact-header.getInTouch")
		}),
		l("p", {
			className: "mb-8 text-muted-foreground",
			children: [
				e._("contact-header.haveIdeasFoundABug"),
				" ",
				c("a", {
					href: "mailto:contact@intlayer.org",
					className: "text-primary hover:underline",
					children: "contact@intlayer.org"
				}),
				"."
			]
		})
	] });
}
function _n() {
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
function vn(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function yn(e, t) {
	let n = pn();
	return n.activate(e), n;
}
function bn({ children: e, locale: t, messages: n }) {
	let s = a(() => yn(t, n), [t, n]), [l] = o(() => typeof performance < "u" ? performance.now() : 0);
	return i(() => {
		vn("AppRoot", l);
	}, [l]), r(() => {
		document.documentElement.lang = t;
	}, [t]), r(() => {
		_n();
	}, []), c(mn, {
		i18n: s,
		children: e
	});
}
function xn({ children: e }) {
	return c(bn, {
		locale: "en",
		messages: {},
		children: e
	});
}
function Sn() {
	return c(xn, { children: c(gn, {}) });
}
export { Sn as default };
