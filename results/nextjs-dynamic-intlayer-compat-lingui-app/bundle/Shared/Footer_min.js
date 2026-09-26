import { Fragment as e, createContext as t, useCallback as n, useContext as r, useEffect as i, useLayoutEffect as a, useMemo as o, useState as s } from "react";
import c from "next/link";
import { useParams as l } from "next/navigation";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import p from "../.intlayer/dictionary/header.json";
import m from "../.intlayer/dictionary/open-positions.json";
import h from "../.intlayer/dictionary/careers-benefits.json";
import g from "../.intlayer/dictionary/settings.json";
import _ from "../.intlayer/dictionary/footer.json";
import ee from "../.intlayer/dictionary/results-table.json";
import v from "../.intlayer/dictionary/settings-header.json";
import y from "../.intlayer/dictionary/contact-form.json";
import b from "../.intlayer/dictionary/contact-header.json";
import te from "../.intlayer/dictionary/about-grid.json";
import ne from "../.intlayer/dictionary/pricing-tiers.json";
import re from "../.intlayer/dictionary/mockBanner.json";
import ie from "../.intlayer/dictionary/theme-toggle.json";
import ae from "../.intlayer/dictionary/about-header.json";
import oe from "../.intlayer/dictionary/pricing-header.json";
import se from "../.intlayer/dictionary/faq-header.json";
import ce from "../.intlayer/dictionary/blog-header.json";
import le from "../.intlayer/dictionary/team-header.json";
import ue from "../.intlayer/dictionary/faq-list.json";
import de from "../.intlayer/dictionary/careers-header.json";
import fe from "../.intlayer/dictionary/products-header.json";
import pe from "../.intlayer/dictionary/what-we-measure.json";
import me from "../.intlayer/dictionary/products.json";
import he from "../.intlayer/dictionary/blog-list.json";
import ge from "../.intlayer/dictionary/understanding-impact.json";
import _e from "../.intlayer/dictionary/team.json";
import ve from "../.intlayer/dictionary/why-it-matters.json";
import ye from "../.intlayer/dictionary/hero.json";
var be = (e) => /^https?:\/\//.test(e ?? "");
function xe(e, t) {
	return !e.startsWith("/") || e === `/${t}` || e.startsWith(`/${t}/`) ? e : `/${t}${e === "/" ? "" : e}`;
}
var Se = ({ href: e, children: t, ...n }) => {
	let r = l().locale ?? "en";
	return e == null || typeof e != "string" || be(e) ? d(c, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}) : d(c, {
		href: xe(e, r),
		prefetch: !1,
		...n,
		children: t
	});
}, Ce = t(null), we = class {
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
}, Te = (e, t) => {
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
}, Ee = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, x = (e, t) => {
	let n = Te(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return Te(n, t);
	}
}, De = (e) => {
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
			i.push(`${t} {${Oe(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, Oe = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(De).join("") : String(e ?? ""), ke = "translation", S = "enumeration", C = "plural", Ae = "condition", w = "insertion", je = "object", Me = "array", T = "markdown", E = "html", D = "gender", O = "select", k = (e, t, n) => ({
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
		type: Me,
		key: n
	})));
	let n = {};
	for (let r in e) {
		let i = {
			type: je,
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
}, M = (e) => k(S, e), Ne = (e) => k(D, e), Pe = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, N = (e) => {
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
}, P = (e, t) => k(E, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = Le(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return N(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => N(await e)), typeof n == "string") return N(n);
	try {
		return N(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), F = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, I = (e) => k(w, e, { fields: (() => {
	if (typeof e == "string") return F(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => F(await e)), typeof t == "string") return F(t);
	try {
		return F(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), Re = (e) => k(C, e), ze = (e, t) => k(O, e, { variable: t }), Be = (e) => {
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
}, L = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? P(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e?.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n?.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? P(t) : I(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? P(t) : t;
		if (t?.type === "argument") return t.format ? I(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : I(`{{${t.name}}}`);
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
					e[i] = L(a);
				}
				return e.__intlayer_icu_var = t.name, M(e);
			}
			for (let [n, r] of Object.entries(t.options)) {
				let i = r?.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e);
				e[n] = L(i);
			}
			return Re(e);
		}
		if (t?.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = L(r);
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
		if (t?.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = L(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, M(e);
		}
	}
	return e.map((e) => L([e]));
}, Ve = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return L(Be(e));
		} catch {
			return e;
		}
	}
}, He = (e) => j(e, {
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
}, We = (e, t) => e[Ue(e, t) ?? "fallback"], R = {
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
}, z = {
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
}, Ke = 50, qe = /* @__PURE__ */ new Map(), Je = /* @__PURE__ */ new Set(), Ye = (e) => {
	Je.has(e) || (Je.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
}, Xe = {
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
}, Ze = (e) => {
	let t = Intl[e];
	return typeof t == "function" ? t : (Ye(e), Xe[e]);
};
function B(e, t, n) {
	let r = t ?? R?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = qe.get(a);
	o || (o = /* @__PURE__ */ new Map(), qe.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? Ze(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Ke && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var Qe = (e, t, n) => e[B("PluralRules", n).select(t)] ?? e.other, $e = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, et = [
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
}, tt = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? B("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? B("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : B("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return B("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, nt = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = V(t, r);
	return o === void 0 ? e : i ? tt(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = V(t, r);
	return o === void 0 ? e : tt(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = V(t, n);
	return r === void 0 ? e : String(r);
}), H = (e, t) => e[t] ?? e.count ?? e.n, U = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return nt(e, t, n);
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
		return U(Qe(e, Number(H(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[S], i = et.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) et.includes(t) || (o[t] = n);
		let s = H(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = B("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? We(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return U(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[O], i = H(t, typeof r.variable == "string" ? r.variable : "value");
		return U($e(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[D];
		return U(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, rt = (e, t = {}, n = "en") => {
	let r = U(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, it = (e) => (t, n = {}, r = "en") => rt(typeof t == "string" ? e(t) : t, n, r), at = (e) => {
	let t = [], n = /<([\w-]+)\s*\/>|<([\w-]+)[^>]*>([\s\S]*?)<\/\2>/g, r = 0, i = n.exec(e);
	for (; i !== null;) {
		i.index > r && t.push(e.slice(r, i.index));
		let [, a, o, s] = i;
		a ? t.push({
			tag: a,
			children: []
		}) : o && t.push({
			tag: o,
			children: at(s ?? "")
		}), r = i.index + i[0].length, i = n.exec(e);
	}
	return r < e.length && t.push(e.slice(r)), t;
}, ot = it(He), st = (e) => {
	let t = e.indexOf(".");
	return t === -1 ? {
		dictionaryKey: e,
		remainder: ""
	} : {
		dictionaryKey: e.slice(0, t),
		remainder: e.slice(t + 1)
	};
}, ct = class extends we {
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
		for (let t of Object.values(this._boundDictionaries)) Object.assign(e, Ee(t));
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
				message: Oe(t)
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
		return (c.kind === "node" ? rt(c.node, o, s) : ot(c.message, o, s)) ?? i;
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
}, lt = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, ut = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = lt(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, dt = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
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
}, ft = (e = W) => {
	let { locales: t } = R;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!dt) for (let t = 0; t < (z.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(z.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, pt = !1, mt, ht = () => typeof window > "u" ? ft(W) : (pt ||= (mt = ft(W), !0), mt), gt = (e, t) => {
	if (t?.isCookieEnabled !== !1 && (pt = !1, !dt && z.storage.cookies)) for (let n = 0; n < z.storage.cookies.length; n++) {
		let { name: r, attributes: i } = z.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: lt(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, ut(r, e, i));
			} catch {}
		}
	}
}, _t = /* @__PURE__ */ new WeakMap(), vt = 0, yt = (e) => {
	if (!e) return "base";
	let t = _t.get(e);
	if (t) return t;
	vt += 1;
	let n = `p${vt}`;
	return _t.set(e, n), n;
}, bt = 256, G = /* @__PURE__ */ new WeakMap(), xt = (e) => typeof e == "object" && !!e, St = (e, t, n) => `${e}_${t}_${yt(n)}`, Ct = (e, t) => {
	if (!xt(e)) return { hit: !1 };
	let n = G.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, K = (e, t, n) => {
	if (!xt(e)) return n;
	let r = G.get(e);
	return r || (r = /* @__PURE__ */ new Map(), G.set(e, r)), r.size >= bt && r.clear(), r.set(t, n), n;
}, wt = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), q = "\x1B[0m", Tt = "\x1B[34m", Et = "\x1B[31m", Dt = "\x1B[32m", Ot = "\x1B[38;5;3m", kt = (e) => e, At = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = kt(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, jt = (e, t) => (n, r) => At(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), J = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? q : n : q}` : e, Mt = (e, t = Ot, n = q) => [e].flat().map((e) => J(e, t, n)).join(", ");
J("✗", Et), J("✓", Dt), J("⏲", Tt);
var Nt = {
	header: p,
	"open-positions": m,
	"careers-benefits": h,
	settings: g,
	footer: _,
	"results-table": ee,
	"settings-header": v,
	"contact-form": y,
	"contact-header": b,
	"about-grid": te,
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
}, Pt = () => Nt, Ft = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), It = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Ft.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : It(e ? `${e}.${String(n)}` : String(n)) }), Lt = /* @__PURE__ */ new Set(), Rt = (e, t, n) => {
	let r = Pt()[e];
	return r ? sn(r, t, n) : (Lt.has(e) || (jt({ log: Ge })(typeof window > "u" ? `Dictionary ${Mt(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), Lt.add(e)), It(e));
}, zt = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Bt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e) || !zt(e) || !zt(t)) return e;
	let n = e;
	for (let r of Object.keys(t)) {
		let i = t[r];
		if (r === "__proto__" || r === "constructor" || i === void 0) continue;
		let a = e[r], o = a === void 0 ? i : typeof a == "object" ? Bt(a, i) : a;
		o !== a && (n === e && (n = { ...e }), n[r] = o);
	}
	return n;
}, Vt = (e, t, n) => {
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
	if (o.length !== 0) return o.length === 1 || Array.isArray(o[0]) ? o[0] : o.reduce((e, t) => Bt(e, t));
}, Y = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Ht = (e) => {
	if (typeof e == "string") return e;
	if (Y(e)) return e.nodeType === "html" ? e[E] : e[T];
}, Ut = (e, t) => {
	if (typeof e == "string") return t;
	if (Y(e)) {
		let n = e.nodeType === "html" ? E : T;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Wt = (e, t, n, r, i) => {
	let a = Ut(e, wt(Ht(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, X = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Gt = (e) => {
	if (typeof e != "function") return !1;
	let { value: t } = e;
	return t === void 0 || typeof t == "function";
}, Kt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? X : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = Vt(n.translation ?? {}, e, t);
		return i(a, {
			...r,
			children: a,
			keyPath: [...r.keyPath, {
				type: ke,
				key: e
			}]
		});
	}
}, qt = X, Jt = (e) => X, Yt = X, Xt = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? X : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: w }], i = e[w], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || Y(e),
			transform: (e, n, r) => {
				if (Y(e)) return (i) => Wt(e, i, n, t.plugins, r);
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
		return $t(i, n(i, {
			...t,
			children: i,
			keyPath: r,
			plugins: [a, ...t.plugins ?? []]
		}));
	}
}, Zt = [
	S,
	Ae,
	C,
	D,
	O
], Qt = (e, t, n, r = !1) => {
	let i = e?.nodeType;
	if (typeof t != "function" || !i || !Zt.includes(i)) return t;
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
		return !r && Gt(i) ? i(n) : i;
	};
}, $t = (e, t) => typeof t == "function" && Zt.includes(e?.nodeType ?? "") ? (n) => Qt(e, t, n) : t, en = X, tn = X;
process.env.INTLAYER_OPTIMIZED_NESTING;
var nn = (e) => X, rn = X, an = (e, t = !0) => [
	Kt(e ?? R.defaultLocale, t ? R.defaultLocale : void 0),
	qt,
	Jt(e ?? R.defaultLocale),
	Yt,
	Xt,
	nn(e ?? R.defaultLocale),
	rn,
	en,
	tn
].filter((e) => e !== X), on = (e, t, n = []) => j(e, {
	...t,
	plugins: n
}), Z = /* @__PURE__ */ new WeakSet(), sn = (e, t, n) => {
	let { locale: r, selector: i } = {
		locale: t,
		selector: void 0
	}, a = St(r ?? R.defaultLocale, "", n), o = Ct(e, a);
	if (o.hit) return o.content;
	let s = n ?? an(r), c = e, l = (e) => {
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
			return on(e.content, t, s);
		} finally {
			t.eager && Z.delete(e);
		}
	};
	return c === null ? K(e, a, null) : Array.isArray(c) ? K(e, a, c.map(l)) : K(e, a, l(c));
}, cn = ht, Q = (e, t) => gt(e, {
	...W,
	isCookieEnabled: t
}), ln = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, un = (e, t = R?.locales, n = R?.defaultLocale) => {
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
}, dn = t({
	get locale() {
		return cn() ?? R?.defaultLocale;
	},
	setLocale: () => null,
	isCookieEnabled: !0
}), fn = ({ locale: e, defaultLocale: t, variant: r, children: a, setLocale: c, disableEditor: l, isCookieEnabled: u }) => {
	let { locales: f, defaultLocale: p } = R ?? {}, [m, h] = s(() => e ?? cn() ?? t ?? p), [g, _] = s(e);
	e !== g && (_(e), e && e !== m && h(e)), i(() => {
		ln();
	}, []);
	let ee = n((e) => {
		if (m.toString() !== e.toString()) {
			if (!f?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			h(e), Q(e, u);
		}
	}, [
		m,
		f,
		u
	]), v = c ?? ee, y = un(m), b = o(() => ({
		locale: y,
		setLocale: v,
		variant: r,
		disableEditor: l
	}), [
		y,
		v,
		r,
		l
	]);
	return d(dn.Provider, {
		value: b,
		children: a
	});
}, pn = ({ children: e, ...t }) => f(fn, {
	...t,
	children: [
		!1,
		!1,
		e
	]
}), { defaultLocale: mn, locales: $ } = R ?? {}, hn = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: i, setLocale: a, isCookieEnabled: o } = r(dn) ?? {};
	return {
		locale: i,
		defaultLocale: mn,
		availableLocales: $,
		setLocale: n((n) => {
			if (!$?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			a(n), Q(n, e ?? o ?? !0), t?.(n);
		}, [
			$,
			t,
			a,
			e
		])
	};
}, gn = () => {
	try {
		return Object.keys(Pt());
	} catch {
		return [];
	}
}, _n = (e, t) => {
	let n = gn(), r = e.indexOf("."), i = r === -1 ? e : e.slice(0, r), a = (e) => {
		try {
			return Rt(e, t);
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
		Object.assign(t, Ee(Rt(n, e)));
	} catch {}
	return t;
}, yn = () => ({
	lookup: _n,
	all: vn
}), bn = () => {
	let e = r(Ce), { locale: t } = hn(), n = o(() => {
		let e = new ct({
			locale: t,
			registry: yn()
		});
		return {
			i18n: e,
			_: e._.bind(e)
		};
	}, [t]);
	return e || n;
}, xn = (t, n) => t.map((t, r) => {
	if (typeof t == "string") return t;
	let i = xn(t.children, n), a = n[t.tag];
	if (a === void 0) return d(e, { children: i }, r);
	if (typeof a == "function") return d(e, { children: a(d(u, { children: i })) }, r);
	if (typeof a == "object" && a && "type" in a) {
		let { type: e, props: t } = a;
		return d(e, {
			...t,
			children: i
		}, r);
	}
	return d(e, { children: i }, r);
}), Sn = ({ id: e, message: t, values: n, components: r, render: i, component: a }, o, s) => {
	let c = o._(e, n ?? {}, { message: t }), l = r && Object.keys(r).length > 0, f;
	if (l) {
		let e = xn(at(c), r);
		f = d(u, { children: e });
	} else f = c;
	let p = {
		id: e,
		translation: f,
		children: f,
		message: t ?? null
	};
	if (typeof i == "function") return i(p);
	let m = a ?? s;
	return m ? d(m, {
		...p,
		children: f
	}) : d(u, { children: f });
}, Cn = (e) => {
	let { i18n: t, defaultComponent: n } = bn();
	return Sn(e, t, n);
}, wn = (e) => new ct({
	...e,
	registry: yn()
});
wn({ locale: "en" });
var Tn = ({ i18n: e, defaultComponent: t, children: n }) => {
	let r = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [a, o] = s(() => r(e)), [c, l] = s(e.locale);
	return i(() => (o(r(e)), l(e.locale), e.on("change", () => {
		o(r(e)), l(e.locale);
	})), [e]), d(Ce.Provider, {
		value: a,
		children: d(pn, {
			locale: c,
			children: n
		})
	});
};
function En() {
	let { i18n: e } = bn(), t = [
		{
			label: e._("footer.github"),
			href: "https://github.com/intlayer-org/benchmark-i18n",
			isInternal: !1
		},
		{
			label: e._("footer.methodology"),
			href: "/about",
			isInternal: !0
		},
		{
			label: e._("footer.contributing"),
			href: "/contact",
			isInternal: !0
		}
	];
	return d("footer", {
		className: "mt-20 border-t border-border bg-card",
		children: f("div", {
			className: "container py-8",
			children: [f("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: [
					f("div", { children: [d("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: d(Cn, {
							id: "footer.i18nBenchmark",
							message: "i18n Benchmark"
						})
					}), d("p", {
						className: "text-sm text-muted-foreground",
						children: e._("footer.anOpenSourceTestApplication")
					})] }),
					f("div", { children: [d("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e._("footer.resources")
					}), d("ul", {
						className: "space-y-1",
						children: t.map((e) => d("li", { children: e.isInternal ? d(Se, {
							href: e.href,
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) : d("a", {
							href: e.href,
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
							children: e.label
						}) }, e.label))
					})] }),
					f("div", { children: [d("h3", {
						className: "mb-2 text-sm font-semibold text-foreground",
						children: e._("footer.contact")
					}), d("p", {
						className: "text-sm text-muted-foreground",
						children: "contact@intlayer.org"
					})] })
				]
			}), d("div", {
				className: "mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground",
				children: e._("footer.builtWith")
			})]
		})
	});
}
function Dn() {
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
function On(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function kn(e, t) {
	let n = wn();
	return n.activate(e), n;
}
function An({ children: e, locale: t, messages: n }) {
	let r = o(() => kn(t, n), [t, n]), [c] = s(() => typeof performance < "u" ? performance.now() : 0);
	return a(() => {
		On("AppRoot", c);
	}, [c]), i(() => {
		document.documentElement.lang = t;
	}, [t]), i(() => {
		Dn();
	}, []), d(Tn, {
		i18n: r,
		children: e
	});
}
function jn({ children: e }) {
	return d(An, {
		locale: "en",
		messages: {},
		children: e
	});
}
function Mn() {
	return d(jn, { children: d(En, {}) });
}
export { Mn as default };
