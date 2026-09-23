import { createContext as e, useCallback as t, useContext as n, useEffect as r, useLayoutEffect as i, useMemo as a, useRef as o, useState as s } from "react";
import c from "../../../.intlayer/dictionary/header.json";
import l from "../../../.intlayer/dictionary/open-positions.json";
import u from "../../../.intlayer/dictionary/careers-benefits.json";
import d from "../../../.intlayer/dictionary/settings.json";
import f from "../../../.intlayer/dictionary/footer.json";
import ee from "../../../.intlayer/dictionary/results-table.json";
import te from "../../../.intlayer/dictionary/settings-header.json";
import ne from "../../../.intlayer/dictionary/contact-form.json";
import re from "../../../.intlayer/dictionary/contact-header.json";
import ie from "../../../.intlayer/dictionary/about-grid.json";
import ae from "../../../.intlayer/dictionary/pricing-tiers.json";
import oe from "../../../.intlayer/dictionary/mockBanner.json";
import se from "../../../.intlayer/dictionary/theme-toggle.json";
import ce from "../../../.intlayer/dictionary/about-header.json";
import le from "../../../.intlayer/dictionary/pricing-header.json";
import ue from "../../../.intlayer/dictionary/faq-header.json";
import de from "../../../.intlayer/dictionary/blog-header.json";
import fe from "../../../.intlayer/dictionary/team-header.json";
import pe from "../../../.intlayer/dictionary/faq-list.json";
import me from "../../../.intlayer/dictionary/careers-header.json";
import he from "../../../.intlayer/dictionary/products-header.json";
import ge from "../../../.intlayer/dictionary/what-we-measure.json";
import _e from "../../../.intlayer/dictionary/products.json";
import ve from "../../../.intlayer/dictionary/blog-list.json";
import ye from "../../../.intlayer/dictionary/understanding-impact.json";
import be from "../../../.intlayer/dictionary/team.json";
import xe from "../../../.intlayer/dictionary/why-it-matters.json";
import Se from "../../../.intlayer/dictionary/hero.json";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
var Ce = class {
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
}, we = (e, t) => {
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
}, Te = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, h = (e, t) => {
	let n = we(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return we(n, t);
	}
}, Ee = (e) => {
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
			i.push(`${t} {${g(n)}}`);
		}
		return `{${String(t)}, ${n}, ${a}${i.join(" ")}}`;
	}
	return r === void 0 ? `{${String(t)}, ${n}}` : `{${String(t)}, ${n}, ${String(r)}}`;
}, g = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(Ee).join("") : String(e ?? ""), De = "translation", Oe = "enumeration", ke = "plural", _ = "insertion", Ae = "object", je = "array", v = "markdown", y = "html", b = "gender", x = "select", S = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), C = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => C(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => C(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: je,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: Ae,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = C(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = C(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, w = (e) => S(Oe, e), T = (e) => S(b, e), Me = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, E = (e) => {
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
}, D = (e, t) => S(y, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = Fe(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return E(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => E(await e)), typeof n == "string") return E(n);
	try {
		return E(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), O = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, k = (e) => S(_, e, { fields: (() => {
	if (typeof e == "string") return O(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => O(await e)), typeof t == "string") return O(t);
	try {
		return O(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), A = (e) => S(ke, e), j = (e, t) => S(x, e, { variable: t }), Ie = (e) => {
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
}, M = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? D(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? D(t) : k(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? D(t) : t;
		if (t.type === "argument") return t.format ? k(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : k(`{{${t.name}}}`);
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
					e[i] = M(a);
				}
				return e.__intlayer_icu_var = t.name, w(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = M(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return A(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = M(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? T({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : j(e, t.name);
		}
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = M(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, w(e);
		}
	}
	return e.map((e) => M([e]));
}, Le = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return M(Ie(e));
		} catch {
			return e;
		}
	}
}, Re = (e) => C(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...Le
	}]
}), ze = (e) => {
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
}, N = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? D(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? D(t) : k(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? D(t) : t;
		if (t.type === "argument") return t.format ? k(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : k(`{{${t.name}}}`);
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
					e[i] = N(a);
				}
				return e.__intlayer_icu_var = t.name, w(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = N(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return A(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = N(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? T({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : j(e, t.name);
		}
	}
	return e.map((e) => N([e]));
}, Be = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return N(ze(e));
		} catch {
			return e;
		}
	}
}, Ve = (e) => C(e, {
	dictionaryKey: "i18next",
	keyPath: [],
	plugins: [{
		id: "i18next",
		...Be
	}]
}), He = (e) => {
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
}, Ue = (e) => {
	let t = [], n = "", r = 0;
	for (; r < e.length;) {
		let i = e[r];
		i === "\\" && r + 1 < e.length && e[r + 1] === "|" ? (n += "|", r += 2) : i === "|" ? (t.push(n.trim()), n = "", r++) : (n += i, r++);
	}
	return t.push(n.trim()), t.map(He);
}, P = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") return e[0];
	let t = "";
	for (let n of e) t += typeof n == "string" ? n : `{{${n.name}}}`;
	return k(t);
}, We = (e) => {
	if (e.length === 1) return P(e[0]);
	let t = {};
	return e.length === 2 ? w({
		1: P(e[0]),
		fallback: P(e[1])
	}) : e.length === 3 ? w({
		0: P(e[0]),
		1: P(e[1]),
		fallback: P(e[2])
	}) : (e.forEach((n, r) => {
		r === e.length - 1 ? t.fallback = P(n) : t[r.toString()] = P(n);
	}), t.__intlayer_vue_i18n_var = "count", w(t));
}, Ge = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("|")),
	transform: (e) => {
		try {
			return We(Ue(e));
		} catch {
			return e;
		}
	}
}, Ke = (e) => C(e, {
	dictionaryKey: "vue-i18n",
	keyPath: [],
	plugins: [{
		id: "vue-i18n",
		...Ge
	}]
}), qe = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Je = (e, t) => e[qe(e, t) ?? "fallback"], F = {
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
}, I = {
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
}, Ye = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, Xe = 50, L = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Set(), Ze = (e) => {
	R.has(e) || (R.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
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
	let r = t ?? F?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = L.get(a);
	o || (o = /* @__PURE__ */ new Map(), L.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? $e(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > Xe && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var et = (e, t, n) => e[z("PluralRules", n).select(t)] ?? e.other, tt = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, nt = [
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
}, rt = (e, t, n, r) => {
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
}, it = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = B(t, r);
	return o === void 0 ? e : i ? rt(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = B(t, r);
	return o === void 0 ? e : rt(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = B(t, n);
	return r === void 0 ? e : String(r);
}), V = (e, t) => e[t] ?? e.count ?? e.n, H = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return it(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return H(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(H(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return H(r[_], t, n);
	if (r.nodeType === "html") return H(r[y], t, n);
	if (r.nodeType === "plural") {
		let e = r[ke];
		return H(et(e, Number(V(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[Oe], i = nt.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) nt.includes(t) || (o[t] = n);
		let s = V(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = z("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Je(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return H(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[x], i = V(t, typeof r.variable == "string" ? r.variable : "value");
		return H(tt(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[b];
		return H(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, at = (e, t = {}, n = "en") => {
	let r = H(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, ot = (e) => (t, n = {}, r = "en") => at(typeof t == "string" ? e(t) : t, n, r), st = {
	icu: Re,
	i18next: Ve,
	"vue-i18n": Ke
}, ct = (e, t = {}, n = "en", r = "icu") => ot(st[r])(e, t, n), lt = class extends Ce {
	_locale;
	_locales;
	_catalogs = {};
	_loadFallbackWarned = !1;
	_dictionaryContent;
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
		return this._dictionaryContent !== void 0 && Object.assign(e, Te(this._dictionaryContent)), {
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
	bindDictionaryContent(e) {
		return this._dictionaryContent = e, this;
	}
	activate(e, t) {
		this._locale = e, this._locales = t, this.emit("change");
	}
	resolveTemplate(e) {
		if (this._dictionaryContent !== void 0) {
			let t = h(this._dictionaryContent, e);
			if (t !== void 0) return g(t);
		}
		let t = this._registry?.lookup(e, this._locale);
		if (t !== void 0) return t;
		let n = this._catalogs[this._locale];
		if (n) {
			let t = h(n, e);
			if (t !== void 0) return g(t);
		}
	}
	_(e, t, n) {
		let r = typeof e == "object" && !!e, i = r ? e.id : e, a = r ? e.message ?? n?.message : n?.message, o = r ? {
			...e.values ?? {},
			...t ?? {}
		} : t ?? {};
		return ct(this.resolveTemplate(i) ?? a ?? i, o, this._locale, "icu") ?? i;
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
}, ut = e(null), dt = /* @__PURE__ */ new WeakMap(), ft = 0, pt = (e) => {
	if (!e) return "base";
	let t = dt.get(e);
	if (t) return t;
	ft += 1;
	let n = `p${ft}`;
	return dt.set(e, n), n;
}, mt = 256, U = /* @__PURE__ */ new WeakMap(), ht = (e) => typeof e == "object" && !!e, gt = (e, t, n) => `${e}_${t}_${pt(n)}`, _t = (e, t) => {
	if (!ht(e)) return { hit: !1 };
	let n = U.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, W = (e, t, n) => {
	if (!ht(e)) return n;
	let r = U.get(e);
	return r || (r = /* @__PURE__ */ new Map(), U.set(e, r)), r.size >= mt && r.clear(), r.set(t, n), n;
}, vt = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), G = "default", yt = /[^A-Za-z0-9._&=-]/g, bt = /[^A-Za-z0-9._-]/g, xt = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, K = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, xt);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, St = (e) => e === void 0 ? G : typeof e == "string" ? K(e, yt) : Object.keys(e).sort().map((t) => `${K(t, bt)}=${K(String(e[t]), bt)}`).join("&"), Ct = (e) => Array.isArray(e) ? e.length === 0 ? [G] : e.map(St) : [St(e)], wt = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? G : e[0] ?? "default";
}, Tt = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, Et = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, Dt = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, Ot = (e, t) => {
	if (!Et(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? G : wt(Ct(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => Tt(e, n, t, s)).map((t) => Dt(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, kt = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, At = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? Ct(n).join(",") : String(n)}`;
}).join("|") : "", q = "\x1B[0m", jt = "\x1B[34m", Mt = "\x1B[31m", Nt = "\x1B[32m", Pt = "\x1B[38;5;3m", Ft = (e) => e, It = (e, t) => {
	let n = t?.config ?? {}, r = n.mode ?? "default";
	if (r === "disabled" || t?.isVerbose && r !== "verbose") return;
	let i = Ft(n.prefix), a = i ? [i, ...[e].flat()] : [e].flat(), o = t?.level ?? "info";
	(n[o] ?? console[o] ?? n.log ?? console.log)(...a);
}, Lt = (e, t) => (n, r) => It(n, {
	...r ?? {},
	config: {
		...e?.log,
		...t?.config,
		...r?.config ?? {}
	}
}), J = (e, t, n) => t && typeof window > "u" ? `${t}${e}${n ? typeof n == "boolean" ? q : n : q}` : e, Rt = (e, t = Pt, n = q) => [e].flat().map((e) => J(e, t, n)).join(", ");
J("✗", Mt), J("✓", Nt), J("⏲", jt);
var zt = {
	header: c,
	"open-positions": l,
	"careers-benefits": u,
	settings: d,
	footer: f,
	"results-table": ee,
	"settings-header": te,
	"contact-form": ne,
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
}, Bt = () => zt, Vt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Ht = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Vt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Ht(e ? `${e}.${String(n)}` : String(n)) }), Ut = /* @__PURE__ */ new Set(), Wt = (e, t, n) => {
	let r = Bt()[e];
	return r ? cn(r, t, n) : (Ut.has(e) || (Lt({ log: Ye })(typeof window > "u" ? `Dictionary ${Rt(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), Ut.add(e)), Ht(e));
}, Gt = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, Kt = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (Gt(e) && Gt(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : Kt(e[r], t[r]));
		return n;
	}
	return e;
}, qt = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => Kt(e, t));
}, Y = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return !1;
}, Jt = (e) => {
	if (typeof e == "string") return e;
	if (Y(e)) return e.nodeType === "html" ? e[y] : e[v];
}, Yt = (e, t) => {
	if (typeof e == "string") return t;
	if (Y(e)) {
		let n = e.nodeType === "html" ? y : v;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, Xt = (e, t, n, r, i) => {
	let a = Yt(e, vt(Jt(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, X = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, Zt = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? X : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, i) => {
		let a = n.translation ?? {}, o = {};
		for (let e in a) {
			let t = {
				...r,
				children: a[e],
				keyPath: [...r.keyPath, {
					type: De,
					key: e
				}]
			};
			o[e] = i(a[e], t);
		}
		return qt(o, e, t);
	}
}, Qt = X, $t = X, en = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? X : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: _ }], i = e[_], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || Y(e),
			transform: (e, n, r) => {
				if (Y(e)) return (i) => Xt(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = vt(i, e);
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
}, tn = X, nn = X;
process.env.INTLAYER_OPTIMIZED_NESTING;
var rn = (e) => X, an = X, on = (e, t = !0) => [
	Zt(e ?? F.defaultLocale, t ? F.defaultLocale : void 0),
	Qt,
	$t,
	en,
	rn(e ?? F.defaultLocale),
	an,
	tn,
	nn
], sn = (e, t, n = []) => C(e, {
	...t,
	plugins: n
}), cn = (e, t, n) => {
	let { locale: r, selector: i } = kt(t), a = gt(r ?? F.defaultLocale, At(i), n), o = _t(e, a);
	if (o.hit) return o.content;
	let s = n ?? on(r), c = Ot(e, i), l = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: s,
			nestedDictionaries: e.nestedDictionaries
		};
		return sn(e.content, t, s);
	};
	return c === null ? W(e, a, null) : Array.isArray(c) ? W(e, a, c.map(l)) : W(e, a, l(c));
}, ln = () => {
	try {
		return Object.keys(Bt());
	} catch {
		return [];
	}
}, un = (e, t) => {
	for (let n of ln()) {
		let r;
		try {
			r = Wt(n, t);
		} catch {
			continue;
		}
		let i = h(r, e);
		if (i !== void 0) return g(i);
	}
}, dn = (e) => {
	let t = {};
	for (let n of ln()) try {
		Object.assign(t, Te(Wt(n, e)));
	} catch {}
	return t;
}, fn = () => ({
	lookup: un,
	all: dn
}), pn = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, mn = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = pn(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, hn = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false";
process.env.INTLAYER_ROUTING_STORAGE_HEADERS;
var Z = {
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
}, gn = (e = Z) => {
	let { locales: t } = F;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!hn) for (let t = 0; t < (I.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(I.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, _n = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !hn && I.storage.cookies) for (let n = 0; n < I.storage.cookies.length; n++) {
		let { name: r, attributes: i } = I.storage.cookies[n];
		try {
			t?.setCookieStore && t.setCookieStore(r, e, {
				...i,
				expires: pn(i.expires)
			});
		} catch {
			try {
				t?.setCookieString && t.setCookieString(r, mn(r, e, i));
			} catch {}
		}
	}
}, vn = gn(Z), yn = (e, t) => _n(e, {
	...Z,
	isCookieEnabled: t
}), bn = () => {
	let { locale: e } = n(Q) ?? {}, t = o(null);
	r(() => {}, []), r(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, xn = ({ children: e }) => (bn(), e), Sn = () => {
	let { locale: e } = n(Q) ?? {}, t = o(null);
	r(() => {}, []), r(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, Cn = ({ children: e }) => (Sn(), e), wn = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Tn = (e, t = F?.locales, n = F?.defaultLocale) => {
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
}, Q = e({
	locale: vn ?? F?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), En = ({ locale: e, defaultLocale: t, variant: n, children: i, setLocale: a, disableEditor: o, isCookieEnabled: c }) => {
	let { locales: l, defaultLocale: u } = F ?? {}, [d, f] = s(e ?? vn ?? t ?? u);
	r(() => {
		e && e !== d && f(e);
	}, [e]), r(() => {
		wn();
	}, []);
	let ee = a ?? ((e) => {
		if (d.toString() !== e.toString()) {
			if (!l?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			f(e), yn(e, c);
		}
	}), te = Tn(d);
	return p(Q.Provider, {
		value: {
			locale: te,
			setLocale: ee,
			variant: n,
			disableEditor: o
		},
		children: i
	});
}, Dn = ({ children: e, ...t }) => m(En, {
	...t,
	children: [
		p(xn, {}),
		p(Cn, {}),
		e
	]
}), { defaultLocale: On, locales: $ } = F ?? {}, kn = ({ isCookieEnabled: e, onLocaleChange: r } = {}) => {
	let { locale: i, setLocale: a, isCookieEnabled: o } = n(Q) ?? {};
	return {
		locale: i,
		defaultLocale: On,
		availableLocales: $,
		setLocale: t((t) => {
			if (!$?.map(String).includes(t)) {
				console.error(`Locale ${t} is not available`);
				return;
			}
			a(t), yn(t, e ?? o ?? !0), r?.(t);
		}, [
			$,
			r,
			a,
			e
		])
	};
}, An = () => {
	let e = n(ut), { locale: t } = kn(), r = a(() => {
		let e = new lt({
			locale: t,
			registry: fn()
		});
		return {
			i18n: e,
			_: e._.bind(e)
		};
	}, [t]);
	return e || r;
}, jn = ({ i18n: e, defaultComponent: t, children: n }) => {
	let i = (e) => ({
		i18n: e,
		_: e._.bind(e),
		defaultComponent: t
	}), [a, o] = s(() => i(e)), [c, l] = s(e.locale);
	return r(() => (o(i(e)), l(e.locale), e.on("change", () => {
		o(i(e)), l(e.locale);
	})), [e]), p(ut.Provider, {
		value: a,
		children: p(Dn, {
			locale: c,
			children: n
		})
	});
}, Mn = (e) => new lt({
	...e,
	registry: fn()
});
Mn({ locale: "en" });
function Nn() {
	let { i18n: e } = An(), t = [
		{
			name: e._({
				id: "pricing-tiers.starter",
				message: "Starter"
			}),
			price: e._({
				id: "pricing-tiers.price0",
				message: "$0"
			}),
			period: e._({
				id: "pricing-tiers.forever",
				message: "forever"
			}),
			features: [
				e._({
					id: "pricing-tiers.benchmarkRunPerDay",
					message: "5 benchmark runs/day",
					values: { runs: "5" }
				}),
				e._({
					id: "pricing-tiers.librariesNumber",
					message: "3 libraries",
					values: { libs: "3" }
				}),
				e._({
					id: "pricing-tiers.communitySupport",
					message: "Community support"
				}),
				e._({
					id: "pricing-tiers.publicResults",
					message: "Public results"
				})
			],
			cta: e._({
				id: "pricing-tiers.getStarted",
				message: "Get Started"
			})
		},
		{
			name: e._({
				id: "pricing-tiers.pro",
				message: "Pro"
			}),
			price: e._({
				id: "pricing-tiers.price29",
				message: "$29"
			}),
			period: e._({
				id: "pricing-tiers.month",
				message: "/month"
			}),
			features: [
				e._({
					id: "pricing-tiers.unlimitedRuns",
					message: "Unlimited runs"
				}),
				e._({
					id: "pricing-tiers.allLibraries",
					message: "All libraries"
				}),
				e._({
					id: "pricing-tiers.prioritySupport",
					message: "Priority support"
				}),
				e._({
					id: "pricing-tiers.privateResults",
					message: "Private results"
				}),
				e._({
					id: "pricing-tiers.ciIntegration",
					message: "CI integration"
				}),
				e._({
					id: "pricing-tiers.historicalData",
					message: "Historical data"
				})
			],
			highlighted: !0,
			cta: e._({
				id: "pricing-tiers.getStarted",
				message: "Get Started"
			})
		},
		{
			name: e._({
				id: "pricing-tiers.enterprise",
				message: "Enterprise"
			}),
			price: e._({
				id: "pricing-tiers.customPrice",
				message: "Custom"
			}),
			period: "",
			features: [
				e._({
					id: "pricing-tiers.everythingInPro",
					message: "Everything in Pro"
				}),
				e._({
					id: "pricing-tiers.onPremiseOption",
					message: "On-premise option"
				}),
				e._({
					id: "pricing-tiers.ssoSaml",
					message: "SSO & SAML"
				}),
				e._({
					id: "pricing-tiers.dedicatedAccountManager",
					message: "Dedicated account manager"
				}),
				e._({
					id: "pricing-tiers.customSlas",
					message: "Custom SLAs"
				}),
				e._({
					id: "pricing-tiers.auditLogs",
					message: "Audit logs"
				}),
				e._({
					id: "pricing-tiers.trainingSessions",
					message: "Training sessions"
				})
			],
			cta: e._({
				id: "pricing-tiers.contactSales",
				message: "Contact Sales"
			})
		}
	];
	return p("div", {
		className: "grid gap-6 md:grid-cols-3",
		children: t.map((e) => m("div", {
			className: `flex flex-col rounded-lg border p-6 ${e.highlighted ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card"}`,
			children: [
				p("h3", {
					className: "text-lg font-semibold text-foreground",
					children: e.name
				}),
				m("div", {
					className: "my-4",
					children: [p("span", {
						className: "text-3xl font-bold text-foreground",
						children: e.price
					}), p("span", {
						className: "text-sm text-muted-foreground",
						children: e.period
					})]
				}),
				p("ul", {
					className: "mb-6 flex-1 space-y-2",
					children: e.features.map((e, t) => m("li", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: [
							p("span", {
								className: "text-primary",
								children: "✓"
							}),
							" ",
							e
						]
					}, t))
				}),
				p("button", {
					type: "button",
					className: `w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${e.highlighted ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-accent"}`,
					children: e.cta
				})
			]
		}, e.name))
	});
}
function Pn() {
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
function Fn(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
function In(e, t) {
	let n = Mn();
	return n.activate(e), n;
}
function Ln({ children: e, locale: t, messages: n }) {
	let o = a(() => In(t, n), [t, n]), [c] = s(() => typeof performance < "u" ? performance.now() : 0);
	return i(() => {
		Fn("AppRoot", c);
	}, [c]), r(() => {
		document.documentElement.lang = t;
	}, [t]), r(() => {
		Pn();
	}, []), p(jn, {
		i18n: o,
		children: e
	});
}
function Rn({ children: e }) {
	return p(Ln, {
		locale: "en",
		messages: {},
		children: e
	});
}
function zn() {
	return p(Rn, { children: p(Nn, {}) });
}
export { zn as default };
