import { createContext as e, useCallback as t, useContext as n, useEffect as r, useLayoutEffect as i, useMemo as a, useState as o } from "react";
import s from "next/link";
import { useParams as c, usePathname as l, useRouter as u } from "next/navigation";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
import { ChevronDown as ee } from "lucide-react";
import p from "../.intlayer/dictionary/header.json";
import m from "../.intlayer/dictionary/open-positions.json";
import h from "../.intlayer/dictionary/careers-benefits.json";
import te from "../.intlayer/dictionary/settings.json";
import ne from "../.intlayer/dictionary/footer.json";
import g from "../.intlayer/dictionary/results-table.json";
import _ from "../.intlayer/dictionary/settings-header.json";
import v from "../.intlayer/dictionary/contact-form.json";
import re from "../.intlayer/dictionary/contact-header.json";
import ie from "../.intlayer/dictionary/about-grid.json";
import ae from "../.intlayer/dictionary/pricing-tiers.json";
import oe from "../.intlayer/dictionary/mockBanner.json";
import se from "../.intlayer/dictionary/theme-toggle.json";
import ce from "../.intlayer/dictionary/about-header.json";
import le from "../.intlayer/dictionary/pricing-header.json";
import ue from "../.intlayer/dictionary/faq-header.json";
import de from "../.intlayer/dictionary/blog-header.json";
import fe from "../.intlayer/dictionary/team-header.json";
import pe from "../.intlayer/dictionary/faq-list.json";
import me from "../.intlayer/dictionary/careers-header.json";
import he from "../.intlayer/dictionary/products-header.json";
import ge from "../.intlayer/dictionary/what-we-measure.json";
import _e from "../.intlayer/dictionary/products.json";
import ve from "../.intlayer/dictionary/blog-list.json";
import ye from "../.intlayer/dictionary/understanding-impact.json";
import be from "../.intlayer/dictionary/team.json";
import xe from "../.intlayer/dictionary/why-it-matters.json";
import Se from "../.intlayer/dictionary/hero.json";
var Ce = (e) => /^https?:\/\//.test(e ?? "");
function y(e, t) {
	return !e.startsWith("/") || e === `/${t}` || e.startsWith(`/${t}/`) ? e : `/${t}${e === "/" ? "" : e}`;
}
var b = ({ href: e, children: t, ...n }) => {
	let r = c().locale ?? "en";
	return e == null || typeof e != "string" || Ce(e) ? d(s, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}) : d(s, {
		href: y(e, r),
		prefetch: !1,
		...n,
		children: t
	});
}, we = e(null), Te = class {
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
}, x = (e, t) => {
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
}, ke = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(Oe).join("") : String(e ?? ""), Ae = "translation", S = "enumeration", C = "plural", je = "condition", w = "insertion", Me = "object", Ne = "array", T = "markdown", E = "html", D = "gender", O = "select", k = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), A = (e, t, n) => ({
	...e,
	children: t,
	keyPath: [...e.keyPath, n]
}), j = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, j);
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return e;
	if (Array.isArray(e)) return e.map((e, n) => j(e, A(t, e, {
		type: Ne,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: Me,
			key: r
		};
		if (t.eager) {
			n[r] = j(e[r], A(t, e[r], i));
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let n = j(e[r], A(t, e[r], i));
				return Object.defineProperty(this, r, {
					value: n,
					enumerable: !0,
					configurable: !0
				}), n;
			}
		});
	}
	return n;
}, Pe = (e) => k(S, e), Fe = (e) => k(D, e), Ie = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, M = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = Ie(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, Le = /* @__PURE__ */ new Set([
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
]), Re = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, ze = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(Re)) {
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
				let e = Le.has(i.toLowerCase());
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
}, N = (e, t) => k(E, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = ze(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return M(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => M(await e)), typeof n == "string") return M(n);
	try {
		return M(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), P = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, F = (e) => k(w, e, { fields: (() => {
	if (typeof e == "string") return P(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => P(await e)), typeof t == "string") return P(t);
	try {
		return P(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), Be = (e) => k(C, e), Ve = (e, t) => k(O, e, { variable: t }), He = (e) => {
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
}, I = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? N(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e?.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n?.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? N(t) : F(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? N(t) : t;
		if (t?.type === "argument") return t.format ? F(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : F(`{{${t.name}}}`);
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
					e[i] = I(a);
				}
				return e.__intlayer_icu_var = t.name, Pe(e);
			}
			for (let [n, r] of Object.entries(t.options)) {
				let i = r?.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e);
				e[n] = I(i);
			}
			return Be(e);
		}
		if (t?.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = I(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? Fe({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : Ve(e, t.name);
		}
		if (t?.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = I(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, Pe(e);
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
}, We = (e) => j(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...Ue
	}]
}), Ge = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Ke = (e, t) => e[Ge(e, t) ?? "fallback"], L = {
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
}, R = {
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
}, qe = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, Je = 50, Ye = /* @__PURE__ */ new Map(), Xe = /* @__PURE__ */ new Set(), Ze = (e) => {
	Xe.has(e) || (Xe.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Qe = {
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
}, $e = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Ze(e), Qe[e]);
};
function z(e, t, n) {
	let r = t ?? L?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = Ye.get(a);
	o || (o = /* @__PURE__ */ new Map(), Ye.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? $e(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Je && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var et = (e, t, n) => e[z("PluralRules", n).select(t)] ?? e.other, tt = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, B = [
	"__intlayer_icu_var",
	"__intlayer_icu_ordinal",
	"__intlayer_vue_i18n_var"
], V = (e, t) => {
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
}, rt = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = V(t, r);
	return o === void 0 ? e : i ? nt(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = V(t, r);
	return o === void 0 ? e : nt(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = V(t, n);
	return r === void 0 ? e : String(r);
}), H = (e, t) => e[t] ?? e.count ?? e.n, U = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return rt(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return U(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(U(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return U(r[w], t, n);
	if (r.nodeType === "html") return U(r[E], t, n);
	if (r.nodeType === "plural") {
		let e = r[C];
		return U(et(e, Number(H(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[S], i = B.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) B.includes(t) || (o[t] = n);
		let s = H(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = z("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Ke(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return U(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[O], i = H(t, typeof r.variable == "string" ? r.variable : "value");
		return U(tt(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[D];
		return U(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, it = (e, t = {}, n = "en") => {
	let r = U(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, at = ((e) => (t, n = {}, r = "en") => it(typeof t == "string" ? e(t) : t, n, r))(We), ot = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, st = class extends Te {
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
		let { dictionaryKey: t, remainder: n } = ot(e), r = this._boundDictionaries[t];
		if (r !== void 0) {
			let e = x(r, n);
			if (e !== void 0) return e;
		}
		for (let t of Object.values(this._boundDictionaries)) {
			let n = x(t, e);
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
			let t = x(r, e);
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
		return (c.kind === "node" ? it(c.node, o, s) : at(c.message, o, s)) ?? i;
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
}, ct = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, lt = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = ct(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, ut = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, dt = (e = W) => {
	let { locales: t } = L;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!ut) for (let t = 0; t < (R.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(R.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, ft = !1, pt, mt = () => typeof window > "u" ? dt(W) : (ft ||= (pt = dt(W), !0), pt), ht = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (ft = !1, !ut && R.storage.cookies)) for (let n = 0; n < R.storage.cookies.length; n++) {
		let { name: r, attributes: i } = R.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: ct(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, lt(r, e, i));
			} catch {}
		}
	}
}, gt = /* @__PURE__ */ new WeakMap(), _t = 0, vt = (e) => {
	if (!e) return "base";
	let t = gt.get(e);
	if (t) return t;
	_t += 1;
	let n = `p${_t}`;
	return gt.set(e, n), n;
}, yt = 256, G = /* @__PURE__ */ new WeakMap(), bt = (e) => typeof e == "object" && !!e, xt = (e, t, n) => `${e}_${t}_${vt(n)}`, St = (e, t) => {
	if (!bt(e)) return { hit: !1 };
	let n = G.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, K = (e, t, n) => {
	if (!bt(e)) return n;
	let r = G.get(e);
	return r || (r = /* @__PURE__ */ new Map(), G.set(e, r)), r.size >= yt && r.clear(), r.set(t, n), n;
}, Ct = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), q = "\x1B[0m", wt = "\x1B[34m", Tt = "\x1B[31m", Et = "\x1B[32m", Dt = "\x1B[38;5;3m", Ot = (e) => e, kt = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Ot(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, At = (e, t) => (n, r) => kt(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), J = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? q : n : q}` : e, jt = (e, t = Dt, n = q) => [e].flat().map((e) => J(e, t, n)).join(", ");
J("✗", Tt), J("✓", Et), J("⏲", wt);
var Mt = {
	header: p,
	"open-positions": m,
	"careers-benefits": h,
	settings: te,
	footer: ne,
	"results-table": g,
	"settings-header": _,
	"contact-form": v,
	"contact-header": re,
	"about-grid": ie,
	"pricing-tiers": ae,
	mockBanner: oe,
	"theme-toggle": se,
	"about-header": ce,
	"pricing-header": le,
	"faq-header": ue,
	"blog-header": de,
	"team-header": fe,
	"faq-list": pe,
	"careers-header": me,
	"products-header": he,
	"what-we-measure": ge,
	products: _e,
	"blog-list": ve,
	"understanding-impact": ye,
	team: be,
	"why-it-matters": xe,
	hero: Se
}, Nt = () => Mt, Pt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Ft = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Pt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Ft(e ? `${e}.${String(n)}` : String(n)) }), It = /* @__PURE__ */ new Set(), Lt = (e, t, n) => {
	let r = Nt()[e];
	return r ? on(r, t, n) : (It.has(e) || (At({ log: qe })(typeof window > "u" ? `Dictionary ${jt(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), It.add(e)), Ft(e));
}, Rt = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, zt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !Rt(e) || !Rt(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? zt(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, Bt = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => zt(e, t));
}, Y = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Vt = (e) => {
	if (typeof e == "string") return e;
	if (Y(e)) return e.nodeType === "html" ? e[E] : e[T];
}, Ht = (e, t) => {
	if (typeof e == "string") return t;
	if (Y(e)) {
		let n = e.nodeType === "html" ? E : T;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Ut = (e, t, n, r, i) => {
	let a = Ht(e, Ct(Vt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, X = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Wt = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, Gt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? X : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Bt(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: Ae,
				key: e
			}]
		});
	}
}, Kt = X, qt = (e) => X, Jt = X, Yt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? X : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: w }], i = e[w], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || Y(e),
			transform: (e, n, r) => {
				if (Y(e)) return (i) => Ut(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = Ct(i, e);
					return r(a, {
						...n,
						plugins: t.plugins,
						children: a
					});
				};
			}
		};
		return Qt(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Xt = [
	S,
	je,
	C,
	D,
	O
], Zt = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !Xt.includes(i)) return t;
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
		return !r && Wt(i) ? i(n) : i;
	};
}, Qt = (e, t) => typeof t == "function" && Xt.includes(e?.nodeType ?? "") ? (n) => Zt(e, t, n) : t, $t = X, en = X;
process.env.INTLAYER_OPTIMIZED_NESTING;
var tn = (e) => X, nn = X, rn = (e, t = !0) => [
	Gt(e ?? L.defaultLocale, t ? L.defaultLocale : void 0),
	Kt,
	qt(e ?? L.defaultLocale),
	Jt,
	Yt,
	tn(e ?? L.defaultLocale),
	nn,
	$t,
	en
].filter((e) => e !== X), an = (e, t, n = []) => j(e, {
	...t,
	plugins: n
}), Z = /* @__PURE__ */ new WeakSet(), on = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = xt(r ?? L.defaultLocale, "", n), o = St(e, a);
	if (o.hit) return o.content;
	let s = n ?? rn(r), c = e, l = (e) => {
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
			return an(e.content, t, s);
		} finally {
			t.eager && Z.delete(e);
		}
	};
	return c === null ? K(e, a, null) : Array.isArray(c) ? K(e, a, c.map(l)) : K(e, a, l(c));
}, sn = mt, cn = (e, t) => ht(e, {
	...W,
	isCookieEnabled: t
}), ln = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, un = (e, t = L?.locales, n = L?.defaultLocale) => {
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
}, dn = e({
	get locale() {
		return sn() ?? L?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), fn = ({ locale: e, defaultLocale: n, variant: i, children: s, setLocale: c, disableEditor: l, isCookieEnabled: u }) => {
	let { locales: f, defaultLocale: ee } = L ?? {}, [p, m] = o(() => e ?? sn() ?? n ?? ee), [h, te] = o(e);
	e !== h && (te(e), e && e !== p && m(e)), r(() => {
		ln();
	}, []);
	let ne = t((e) => {
		if (p.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			m(e), cn(e, u);
		}
	}, [
		p,
		f,
		u
	]), g = c ?? ne, _ = un(p), v = a(() => ({
		locale: _,
		setLocale: g,
		variant: i,
		disableEditor: l
	}), [
		_,
		g,
		i,
		l
	]);
	return d(dn.Provider, {
		value: v,
		children: s
	});
}, pn = ({ children: e, ...t }) => f(fn, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), { defaultLocale: mn, locales: Q } = L ?? {}, hn = ({ isCookieEnabled: e, onLocaleChange: r } = {}) => {
	let { locale: i, setLocale: a, isCookieEnabled: o } = n(dn) ?? {};
	return {
		locale: i,
		defaultLocale: mn,
		availableLocales: Q,
		setLocale: t((t) => {
			if (!Q?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			a(t), cn(t, e ?? o ?? !0), r?.(t);
		}, [
			Q,
			r,
			a,
			e
		])
	};
}, gn = () => {
	try {
		return Object.keys(Nt());
	} catch {
		return [];
	}
}, _n = (e, t) => {
	let n = gn(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return Lt(e, t);
		} catch {
			return;
		}
	};
	if (n.includes(i)) {
		let t = x(a(i), r === -1 ? "" : e.slice(r + 1));
		if (t !== void 0) return t;
	}
	for (let t of n) {
		let n = x(a(t), e);
		if (n !== void 0) return n;
	}
}, vn = (e) => {
	let t = {};
	for (let n of gn()) try {
		Object.assign(t, De(Lt(n, e)));
	} catch {}
	return t;
}, yn = () => ({
	lookup: _n,
	all: vn
}), bn = () => {
	let e = n(we), { locale: t } = hn(), r = a(() => {
		let e = new st({
			locale: t,
			registry: yn()
		});
		return {
			i18n: e,
			_: e._.bind(e)
		};
	}, [t]);
	return e || r;
}, xn = (e) => new st({
	...e,
	registry: yn()
});
xn({ locale: "en" });
var Sn = ({ i18n: e, defaultComponent: t, children: n }) => {
	let i = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [a, s] = o(() => i(e)), [c, l] = o(e.locale);
	return r(() => (s(i(e)), l(e.locale), e.on("change", () => {
		s(i(e)), l(e.locale);
	})), [e]), d(we.Provider, {
		value: a,
		children: d(pn, {
			locale: c,
			children: n
		})
	});
};
function Cn() {
	if (typeof window > "u") return "auto";
	let e = window.localStorage.getItem("theme");
	return e === "light" || e === "dark" || e === "auto" ? e : "auto";
}
function $(e) {
	let t = window.matchMedia("(prefers-color-scheme: dark)").matches, n = e === "auto" ? t ? "dark" : "light" : e;
	document.documentElement.classList.remove("light", "dark"), document.documentElement.classList.add(n), e === "auto" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e), document.documentElement.style.colorScheme = n;
}
function wn() {
	let { i18n: e } = bn(), [t, n] = o("auto");
	r(() => {
		let e = Cn();
		n(e), $(e);
	}, []), r(() => {
		if (t !== "auto") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), n = () => $("auto");
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	}, [t]);
	function i() {
		let e = t === "light" ? "dark" : t === "dark" ? "auto" : "light";
		n(e), $(e), window.localStorage.setItem("theme", e);
	}
	let a = t === "auto" ? e._("theme-toggle.themeModeAutoSystemClick") : t === "light" ? e._("theme-toggle.themeModeLightClick") : e._("theme-toggle.themeModeDarkClick");
	return d("button", {
		type: "button",
		onClick: i,
		"aria-label": a,
		title: a,
		className: "rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent/80",
		children: t === "auto" ? e._("theme-toggle.themeAuto") : t === "dark" ? e._("theme-toggle.themeDark") : e._("theme-toggle.themeLight")
	});
}
var Tn = [
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
function En(e) {
	try {
		let t = new Intl.DisplayNames([e], { type: "language" }).of(e);
		return t ? t.charAt(0).toUpperCase() + t.slice(1) : e;
	} catch {
		return e.toUpperCase();
	}
}
function Dn(e, t) {
	let n = xn();
	return n.activate(e), n;
}
function On() {
	let e = c().locale ?? "en", t = l(), n = u(), r = (r) => {
		let i = t.replace(`/${e}`, `/${r}`);
		n.push(i);
	};
	return d("div", {
		className: "flex items-center gap-2",
		children: d("select", {
			value: e,
			onChange: (e) => r(e.target.value),
			className: "h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors",
			children: Tn.map((e) => d("option", {
				value: e,
				children: En(e)
			}, e))
		})
	});
}
function kn(e) {
	typeof performance < "u" && performance.mark && performance.mark(`${e}-start`), i(() => {
		if (typeof performance < "u" && performance.mark && performance.measure) {
			performance.mark(`${e}-end`);
			try {
				performance.measure(`${e}-render`, `${e}-start`, `${e}-end`);
			} catch {}
		}
	}, [e]);
}
function An() {
	let { i18n: e } = bn();
	kn("Header");
	let [t, n] = o(!1), r = c(), i = l(), a = r.locale ?? "en", s = [
		{
			href: "/products",
			label: e._("header.products")
		},
		{
			href: "/pricing",
			label: e._("header.pricing")
		},
		{
			href: "/team",
			label: e._("header.team")
		},
		{
			href: "/blog",
			label: e._("header.blog")
		},
		{
			href: "/careers",
			label: e._("header.careers")
		},
		{
			href: "/faq",
			label: e._("header.faq")
		},
		{
			href: "/contact",
			label: e._("header.contact")
		},
		{
			href: "/settings",
			label: e._("header.settings")
		}
	];
	return d("header", {
		className: "sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg",
		children: f("nav", {
			className: "container flex h-16 items-center justify-between",
			children: [f("div", {
				className: "flex items-center gap-8",
				children: [d(b, {
					href: "/",
					className: "text-lg font-bold tracking-tight text-primary no-underline",
					children: e._("header.i18nBench")
				}), f("div", {
					className: "hidden items-center gap-6 text-sm font-medium md:flex",
					children: [
						d(b, {
							href: "/",
							className: `nav-link${((e) => i === y(e, a))("/") ? " is-active" : ""}`,
							children: e._("header.home")
						}),
						d(b, {
							href: "/about",
							className: `nav-link${((e) => {
								let t = y(e, a);
								return i.startsWith(t) && (e !== "/" || i === t);
							})("/about") ? " is-active" : ""}`,
							children: e._("header.methodology")
						}),
						f("div", {
							className: "relative",
							children: [f("button", {
								type: "button",
								className: "flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								onClick: () => n(!t),
								children: [e._("header.mockPages"), d(ee, {
									size: 14,
									className: `transition-transform ${t ? "rotate-180" : ""}`
								})]
							}), t && d("div", {
								className: "absolute left-0 top-full pt-2 w-48",
								onMouseEnter: () => n(!0),
								onMouseLeave: () => n(!1),
								children: d("div", {
									className: "bg-card border border-border rounded-md shadow-lg overflow-hidden py-1",
									children: s.map((e) => d(b, {
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
			}), f("div", {
				className: "flex items-center gap-4",
				children: [
					f("a", {
						href: "https://github.com/intlayer-org/benchmark-i18n",
						target: "_blank",
						rel: "noreferrer",
						className: "text-muted-foreground transition hover:text-foreground",
						children: [d("span", {
							className: "sr-only",
							children: e._("header.goToGithub")
						}), d("svg", {
							viewBox: "0 0 16 16",
							"aria-hidden": "true",
							width: "20",
							height: "20",
							children: d("path", {
								fill: "currentColor",
								d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
							})
						})]
					}),
					d(On, {}),
					d(wn, {})
				]
			})]
		})
	});
}
function jn() {
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
function Mn(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function Nn({ children: e, locale: t, messages: n }) {
	let s = a(() => Dn(t, n), [t, n]), [c] = o(() => typeof performance < "u" ? performance.now() : 0);
	return i(() => {
		Mn("AppRoot", c);
	}, [c]), r(() => {
		document.documentElement.lang = t;
	}, [t]), r(() => {
		jn();
	}, []), d(Sn, {
		i18n: s,
		children: e
	});
}
function Pn({ children: e }) {
	return d(Nn, {
		locale: "en",
		messages: {},
		children: e
	});
}
function Fn() {
	return d(Pn, { children: d(An, {}) });
}
export { Fn as default };
