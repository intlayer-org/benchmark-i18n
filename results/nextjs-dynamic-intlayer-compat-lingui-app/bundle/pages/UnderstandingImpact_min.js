import { Fragment as e, createContext as t, useCallback as n, useContext as r, useEffect as i, useLayoutEffect as a, useMemo as o, useRef as s, useState as c } from "react";
import l from "../../../.intlayer/dictionary/header.json";
import u from "../../../.intlayer/dictionary/open-positions.json";
import d from "../../../.intlayer/dictionary/careers-benefits.json";
import f from "../../../.intlayer/dictionary/settings.json";
import ee from "../../../.intlayer/dictionary/footer.json";
import te from "../../../.intlayer/dictionary/results-table.json";
import ne from "../../../.intlayer/dictionary/settings-header.json";
import re from "../../../.intlayer/dictionary/contact-form.json";
import ie from "../../../.intlayer/dictionary/contact-header.json";
import ae from "../../../.intlayer/dictionary/about-grid.json";
import oe from "../../../.intlayer/dictionary/pricing-tiers.json";
import se from "../../../.intlayer/dictionary/mockBanner.json";
import ce from "../../../.intlayer/dictionary/theme-toggle.json";
import le from "../../../.intlayer/dictionary/about-header.json";
import ue from "../../../.intlayer/dictionary/pricing-header.json";
import de from "../../../.intlayer/dictionary/faq-header.json";
import fe from "../../../.intlayer/dictionary/blog-header.json";
import pe from "../../../.intlayer/dictionary/team-header.json";
import me from "../../../.intlayer/dictionary/faq-list.json";
import he from "../../../.intlayer/dictionary/careers-header.json";
import ge from "../../../.intlayer/dictionary/products-header.json";
import _e from "../../../.intlayer/dictionary/what-we-measure.json";
import ve from "../../../.intlayer/dictionary/products.json";
import ye from "../../../.intlayer/dictionary/blog-list.json";
import be from "../../../.intlayer/dictionary/understanding-impact.json";
import xe from "../../../.intlayer/dictionary/team.json";
import Se from "../../../.intlayer/dictionary/why-it-matters.json";
import Ce from "../../../.intlayer/dictionary/hero.json";
import { Fragment as p, jsx as m, jsxs as we } from "react/jsx-runtime";
import { jsxDEV as h } from "react/jsx-dev-runtime";
var Te = class {
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
}, Ee = (e, t) => {
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
}, De = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, g = (e, t) => {
	let n = Ee(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return Ee(n, t);
	}
}, Oe = (e) => {
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
			i.push(`${t} {${ke(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, ke = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(Oe).join("") : String(e ?? ""), Ae = "translation", _ = "enumeration", v = "plural", y = "insertion", je = "object", Me = "array", b = "markdown", x = "html", S = "gender", C = "select", w = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), T = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => T(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => T(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: Me,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: je,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = T(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = T(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, E = (e) => w(_, e), Ne = (e) => w(S, e), Pe = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, D = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = Pe(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, Fe = /* @__PURE__ */ new Set([
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
]), Ie = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, Le = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(Ie)) {
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
				let e = Fe.has(i.toLowerCase());
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
}, O = (e, t) => w(x, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = Le(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return D(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => D(await e)), typeof n == "string") return D(n);
	try {
		return D(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), k = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, A = (e) => w(y, e, { fields: (() => {
	if (typeof e == "string") return k(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => k(await e)), typeof t == "string") return k(t);
	try {
		return k(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), Re = (e) => w(v, e), ze = (e, t) => w(C, e, { variable: t }), Be = (e) => {
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
}, j = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? O(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? O(t) : A(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? O(t) : t;
		if (t.type === "argument") return t.format ? A(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : A(`{{${t.name}}}`);
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
					e[i] = j(a);
				}
				return e.__intlayer_icu_var = t.name, E(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = j(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return Re(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = j(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? Ne({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : ze(e, t.name);
		}
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = j(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, E(e);
		}
	}
	return e.map((e) => j([e]));
}, Ve = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return j(Be(e));
		} catch {
			return e;
		}
	}
}, He = (e) => T(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...Ve
	}]
}), Ue = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, We = (e, t) => e[Ue(e, t) ?? "fallback"], M = {
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
}, N = {
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
}, Ge = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, Ke = 50, P = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Set(), qe = (e) => {
	F.has(e) || (F.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
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
	let r = t ?? M?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = P.get(a);
	o || (o = /* @__PURE__ */ new Map(), P.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Ye(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Ke && o.clear(), s = new t(r, n), o.set(i, s);
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
}, $e = (e, t, n, r) => {
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
}, et = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = L(t, r);
	return o === void 0 ? e : i ? $e(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = L(t, r);
	return o === void 0 ? e : $e(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = L(t, n);
	return r === void 0 ? e : String(r);
}), R = (e, t) => e[t] ?? e.count ?? e.n, z = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return et(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return z(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(z(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return z(r[y], t, n);
	if (r.nodeType === "html") return z(r[x], t, n);
	if (r.nodeType === "plural") {
		let e = r[v];
		return z(Xe(e, Number(R(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[_], i = Qe.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) Qe.includes(t) || (o[t] = n);
		let s = R(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = I("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? We(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return z(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[C], i = R(t, typeof r.variable == "string" ? r.variable : "value");
		return z(Ze(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[S];
		return z(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, tt = (e, t = {}, n = "en") => {
	let r = z(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, nt = (e) => (t, n = {}, r = "en") => tt(typeof t == "string" ? e(t) : t, n, r), rt = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : t.push({
			tag: o,
			children: rt(s)
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, it = nt(He), at = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, B = class extends Te {
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
		for (let t of Object.values(this._boundDictionaries)) Object.assign(e, De(t));
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
		let { dictionaryKey: t, remainder: n } = at(e), r = this._boundDictionaries[t];
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
				message: ke(t)
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
		return (c.kind === "node" ? tt(c.node, o, s) : it(c.message, o, s)) ?? i;
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
}, ot = t(null), st = /* @__PURE__ */ new WeakMap(), ct = 0, lt = (e) => {
	if (!e) return "base";
	let t = st.get(e);
	if (t) return t;
	ct += 1;
	let n = `p${ct}`;
	return st.set(e, n), n;
}, ut = 256, V = /* @__PURE__ */ new WeakMap(), dt = (e) => typeof e == "object" && !!e, ft = (e, t, n) => `${e}_${t}_${lt(n)}`, pt = (e, t) => {
	if (!dt(e)) return { hit: !1 };
	let n = V.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, H = (e, t, n) => {
	if (!dt(e)) return n;
	let r = V.get(e);
	return r || (r = /* @__PURE__ */ new Map(), V.set(e, r)), r.size >= ut && r.clear(), r.set(t, n), n;
}, mt = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), U = "default", ht = /[^A-Za-z0-9._&=-]/g, gt = /[^A-Za-z0-9._-]/g, _t = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, W = (e, t) => {
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
}).join("|") : "", G = "\x1B[0m", Dt = "\x1B[34m", Ot = "\x1B[31m", kt = "\x1B[32m", At = "\x1B[38;5;3m", jt = (e) => e, Mt = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = jt(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Nt = (e, t) => (n, r) => Mt(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), K = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? G : n : G}` : e, Pt = (e, t = At, n = G) => [e].flat().map((e) => K(e, t, n)).join(", ");
K("✗", Ot), K("✓", kt), K("⏲", Dt);
var Ft = {
	header: l,
	"open-positions": u,
	"careers-benefits": d,
	settings: f,
	footer: ee,
	"results-table": te,
	"settings-header": ne,
	"contact-form": re,
	"contact-header": ie,
	"about-grid": ae,
	"pricing-tiers": oe,
	mockBanner: se,
	"theme-toggle": ce,
	"about-header": le,
	"pricing-header": ue,
	"faq-header": de,
	"blog-header": fe,
	"team-header": pe,
	"faq-list": me,
	"careers-header": he,
	"products-header": ge,
	"what-we-measure": _e,
	products: ve,
	"blog-list": ye,
	"understanding-impact": be,
	team: xe,
	"why-it-matters": Se,
	hero: Ce
}, It = () => Ft, Lt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Rt = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Lt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Rt(e ? `${e}.${String(n)}` : String(n)) }), zt = /* @__PURE__ */ new Set(), Bt = (e, t, n) => {
	let r = It()[e];
	return r ? rn(r, t, n) : (zt.has(e) || (Nt({ log: Ge })(typeof window > "u" ? `Dictionary ${Pt(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), zt.add(e)), Rt(e));
}, Vt = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Ht = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (Vt(e) && Vt(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : Ht(e[r], t[r]));
		return n;
	}
	return e;
}, Ut = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => Ht(e, t));
}, q = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Wt = (e) => {
	if (typeof e == "string") return e;
	if (q(e)) return e.nodeType === "html" ? e[x] : e[b];
}, Gt = (e, t) => {
	if (typeof e == "string") return t;
	if (q(e)) {
		let n = e.nodeType === "html" ? x : b;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Kt = (e, t, n, r, i) => {
	let a = Gt(e, mt(Wt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, J = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, qt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? J : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: Ae,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return Ut(o, e, t);
	}
}, Jt = J, Yt = J, Xt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? J : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: y }], i = e[y], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || q(e),
			transform: (e, n, r) => {
				if (q(e)) return (i) => Kt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = mt(i, e);
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
}, Zt = J, Qt = J;
process.env.INTLAYER_OPTIMIZED_NESTING;
var $t = (e) => J, en = J, tn = (e, t = !0) => [
	qt(e ?? M.defaultLocale, t ? M.defaultLocale : void 0),
	Jt,
	Yt,
	Xt,
	$t(e ?? M.defaultLocale),
	en,
	Zt,
	Qt
], nn = (e, t, n = []) => T(e, {
	...t,
	plugins: n
}), rn = (e, t, n) => {
	let { locale: r, selector: i } = Tt(t), a = ft(r ?? M.defaultLocale, Et(i), n), o = pt(e, a);
	if (o.hit) return o.content;
	let s = n ?? tn(r), c = wt(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return nn(e.content, t, s);
	};
	return c === null ? H(e, a, null) : Array.isArray(c) ? H(e, a, c.map(l)) : H(e, a, l(c));
}, an = () => {
	try {
		return Object.keys(It());
	} catch {
		return [];
	}
}, on = (e, t) => {
	let n = an(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return Bt(e, t);
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
}, sn = (e) => {
	let t = {};
	for (let n of an()) try {
		Object.assign(t, De(Bt(n, e)));
	} catch {}
	return t;
}, cn = () => ({
	lookup: on,
	all: sn
}), ln = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, un = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = ln(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, dn = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, fn = (e = Y) => {
	let { locales: t } = M;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!dn) for (let t = 0; t < (N.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(N.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, pn = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !dn && N.storage.cookies) for (let n = 0; n < N.storage.cookies.length; n++) {
		let { name: r, attributes: i } = N.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: ln(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, un(r, e, i));
			} catch {}
		}
	}
}, mn = fn(Y), hn = (e, t) => pn(e, {
	...Y,
	isCookieEnabled: t
}), gn = () => {
	let { locale: e } = r(X) ?? {}, t = s(null);
	i(() => {}, []), i(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, _n = ({ children: e }) => (gn(), e), vn = () => {
	let { locale: e } = r(X) ?? {}, t = s(null);
	i(() => {}, []), i(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, yn = ({ children: e }) => (vn(), e), bn = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, xn = (e, t = M?.locales, n = M?.defaultLocale) => {
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
	locale: mn ?? M?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), Sn = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: a, disableEditor: o, isCookieEnabled: s }) => {
	let { locales: l, defaultLocale: u } = M ?? {}, [d, f] = c(e ?? mn ?? t ?? u);
	i(() => {
		e && e !== d && f(e);
	}, [e]), i(() => {
		bn();
	}, []);
	let ee = a ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!l?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			f(e), hn(e, s);
		}
	}), te = xn(d);
	return m(X.Provider, {
		value: {
			locale: te,
			setLocale: ee,
			variant: n,
			disableEditor: o
		},
		children: r
	});
}, Cn = ({ children: e, ...t }) => we(Sn, {
	...t,
	children: [
		m(_n, {}),
		m(yn, {}),
		e
	]
}), { defaultLocale: wn, locales: Z } = M ?? {}, Tn = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: i, setLocale: a, isCookieEnabled: o } = r(X) ?? {};
	return {
		locale: i,
		defaultLocale: wn,
		availableLocales: Z,
		setLocale: n((n) => {
			if (!Z?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			a(n), hn(n, e ?? o ?? !0), t?.(n);
		}, [
			Z,
			t,
			a,
			e
		])
	};
}, En = () => {
	let e = r(ot), { locale: t } = Tn(), n = o(() => {
		let e = new B({
			locale: t,
			registry: cn()
		});
		return {
			i18n: e,
			_: e._.bind(e)
		};
	}, [t]);
	return e || n;
}, Dn = ({ i18n: e, defaultComponent: t, children: n }) => {
	let r = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [a, o] = c(() => r(e)), [s, l] = c(e.locale);
	return i(() => (o(r(e)), l(e.locale), e.on("change", () => {
		o(r(e)), l(e.locale);
	})), [e]), m(ot.Provider, {
		value: a,
		children: m(Cn, {
			locale: s,
			children: n
		})
	});
}, On = (t, n) => t.map((t, r) => {
	if (typeof t == "string") return t;
	let i = On(t.children, n), a = n[t.tag];
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
}), kn = ({ id: e, message: t, values: n, components: r, render: i, component: a }, o, s) => {
	let c = o._(e, n ?? {}, { message: t }), l = r && Object.keys(r).length > 0, u;
	if (l) {
		let e = On(rt(c), r);
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
	let { i18n: t, defaultComponent: n } = En();
	return kn(e, t, n);
}, An = (e) => new B({
	...e,
	registry: cn()
});
An({ locale: "en" });
var $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-lingui-app/components/pages/home/UnderstandingImpact.tsx";
function jn() {
	return h("section", {
		className: "mb-16 mx-auto max-w-3xl space-y-6",
		children: [
			h("h2", {
				className: "text-2xl font-bold text-foreground",
				children: h(Q, {
					id: "understanding-impact.understandingTheImpact",
					message: "Understanding the Impact"
				}, void 0, !1, {
					fileName: $,
					lineNumber: 9,
					columnNumber: 9
				}, this)
			}, void 0, !1, {
				fileName: $,
				lineNumber: 8,
				columnNumber: 7
			}, this),
			h("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					h("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: h(Q, {
							id: "understanding-impact.whyASingleLargeJson",
							message: "Why a single large JSON can hurt performance"
						}, void 0, !1, {
							fileName: $,
							lineNumber: 17,
							columnNumber: 11
						}, this)
					}, void 0, !1, {
						fileName: $,
						lineNumber: 16,
						columnNumber: 9
					}, this),
					h("p", {
						className: "text-sm text-muted-foreground",
						children: h(Q, {
							id: "understanding-impact.manyI18nLibrariesStoreTranslations",
							message: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:"
						}, void 0, !1, {
							fileName: $,
							lineNumber: 23,
							columnNumber: 11
						}, this)
					}, void 0, !1, {
						fileName: $,
						lineNumber: 22,
						columnNumber: 9
					}, this),
					h("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							h("li", { children: h(Q, {
								id: "understanding-impact.theJsonMustBeParsed",
								message: "The JSON must be parsed on every page load — blocking the main thread."
							}, void 0, !1, {
								fileName: $,
								lineNumber: 30,
								columnNumber: 13
							}, this) }, void 0, !1, {
								fileName: $,
								lineNumber: 29,
								columnNumber: 11
							}, this),
							h("li", { children: h(Q, {
								id: "understanding-impact.contextBasedArchitecturesCanCause",
								message: "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change."
							}, void 0, !1, {
								fileName: $,
								lineNumber: 36,
								columnNumber: 13
							}, this) }, void 0, !1, {
								fileName: $,
								lineNumber: 35,
								columnNumber: 11
							}, this),
							h("li", { children: h(Q, {
								id: "understanding-impact.duringServerSideRenderingThe",
								message: "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated."
							}, void 0, !1, {
								fileName: $,
								lineNumber: 42,
								columnNumber: 13
							}, this) }, void 0, !1, {
								fileName: $,
								lineNumber: 41,
								columnNumber: 11
							}, this)
						]
					}, void 0, !0, {
						fileName: $,
						lineNumber: 28,
						columnNumber: 9
					}, this)
				]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 15,
				columnNumber: 7
			}, this),
			h("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [
					h("h3", {
						className: "mb-2 text-lg font-semibold text-foreground",
						children: h(Q, {
							id: "understanding-impact.theTradeOffsOfDynamic",
							message: "The trade-offs of dynamic loading"
						}, void 0, !1, {
							fileName: $,
							lineNumber: 52,
							columnNumber: 11
						}, this)
					}, void 0, !1, {
						fileName: $,
						lineNumber: 51,
						columnNumber: 9
					}, this),
					h("p", {
						className: "text-sm text-muted-foreground",
						children: h(Q, {
							id: "understanding-impact.splittingTranslationsIntoPerRoute",
							message: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:"
						}, void 0, !1, {
							fileName: $,
							lineNumber: 58,
							columnNumber: 11
						}, this)
					}, void 0, !1, {
						fileName: $,
						lineNumber: 57,
						columnNumber: 9
					}, this),
					h("ul", {
						className: "mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5",
						children: [
							h("li", { children: [
								h("strong", {
									className: "text-foreground",
									children: h(Q, {
										id: "understanding-impact.waterfallRequests",
										message: "Waterfall requests:"
									}, void 0, !1, {
										fileName: $,
										lineNumber: 66,
										columnNumber: 15
									}, this)
								}, void 0, !1, {
									fileName: $,
									lineNumber: 65,
									columnNumber: 13
								}, this),
								" ",
								h(Q, {
									id: "understanding-impact.waterfallRequestsDesc",
									message: "the app must first load, determine the locale, then fetch the right chunk — adding network round-trips."
								}, void 0, !1, {
									fileName: $,
									lineNumber: 71,
									columnNumber: 13
								}, this)
							] }, void 0, !0, {
								fileName: $,
								lineNumber: 64,
								columnNumber: 11
							}, this),
							h("li", { children: [
								h("strong", {
									className: "text-foreground",
									children: h(Q, {
										id: "understanding-impact.flashOfUntranslatedContentFouc",
										message: "Flash of untranslated content (FOUC):"
									}, void 0, !1, {
										fileName: $,
										lineNumber: 78,
										columnNumber: 15
									}, this)
								}, void 0, !1, {
									fileName: $,
									lineNumber: 77,
									columnNumber: 13
								}, this),
								" ",
								h(Q, {
									id: "understanding-impact.flashOfUntranslatedContentFoucDesc",
									message: "users may briefly see translation keys or a fallback language before the chunk arrives."
								}, void 0, !1, {
									fileName: $,
									lineNumber: 83,
									columnNumber: 13
								}, this)
							] }, void 0, !0, {
								fileName: $,
								lineNumber: 76,
								columnNumber: 11
							}, this),
							h("li", { children: [
								h("strong", {
									className: "text-foreground text-nowrap",
									children: h(Q, {
										id: "understanding-impact.cacheInvalidation",
										message: "Cache invalidation:"
									}, void 0, !1, {
										fileName: $,
										lineNumber: 90,
										columnNumber: 15
									}, this)
								}, void 0, !1, {
									fileName: $,
									lineNumber: 89,
									columnNumber: 13
								}, this),
								" ",
								h(Q, {
									id: "understanding-impact.cacheInvalidationDesc",
									message: "updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks."
								}, void 0, !1, {
									fileName: $,
									lineNumber: 95,
									columnNumber: 13
								}, this)
							] }, void 0, !0, {
								fileName: $,
								lineNumber: 88,
								columnNumber: 11
							}, this)
						]
					}, void 0, !0, {
						fileName: $,
						lineNumber: 63,
						columnNumber: 9
					}, this)
				]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 50,
				columnNumber: 7
			}, this),
			h("div", {
				className: "rounded-lg border border-border bg-card p-6",
				children: [h("h3", {
					className: "mb-2 text-lg font-semibold text-foreground",
					children: h(Q, {
						id: "understanding-impact.whatThisBenchmarkMeasures",
						message: "What this benchmark measures"
					}, void 0, !1, {
						fileName: $,
						lineNumber: 105,
						columnNumber: 11
					}, this)
				}, void 0, !1, {
					fileName: $,
					lineNumber: 104,
					columnNumber: 9
				}, this), h("p", {
					className: "text-sm text-muted-foreground",
					children: h(Q, {
						id: "understanding-impact.thisTestAppProvidesA",
						message: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
					}, void 0, !1, {
						fileName: $,
						lineNumber: 111,
						columnNumber: 11
					}, this)
				}, void 0, !1, {
					fileName: $,
					lineNumber: 110,
					columnNumber: 9
				}, this)]
			}, void 0, !0, {
				fileName: $,
				lineNumber: 103,
				columnNumber: 7
			}, this)
		]
	}, void 0, !0, {
		fileName: $,
		lineNumber: 7,
		columnNumber: 5
	}, this);
}
function Mn() {
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
function Nn(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Pn(e, t) {
	let n = An();
	return n.activate(e), n;
}
var Fn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-lingui-app/components/AppProviders.tsx";
function In({ children: e, locale: t, messages: n }) {
	let r = o(() => Pn(t, n), [t, n]), [s] = c(() => typeof performance < "u" ? performance.now() : 0);
	return a(() => {
		Nn("AppRoot", s);
	}, [s]), i(() => {
		document.documentElement.lang = t;
	}, [t]), i(() => {
		Mn();
	}, []), h(Dn, {
		i18n: r,
		children: e
	}, void 0, !1, {
		fileName: Fn,
		lineNumber: 39,
		columnNumber: 7
	}, this);
}
var Ln = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-lingui-app/scripts/Wrapper.tsx";
function Rn({ children: e }) {
	return h(In, {
		locale: "en",
		messages: {},
		children: e
	}, void 0, !1, {
		fileName: Ln,
		lineNumber: 10,
		columnNumber: 5
	}, this);
}
var zn = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-dynamic/intlayer-compat-lingui-app/components/pages/home/UnderstandingImpact.wrapper.tsx";
function Bn() {
	return h(Rn, { children: h(jn, {}, void 0, !1, {
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
