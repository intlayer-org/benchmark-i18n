import { createContext as e, useCallback as t, useContext as n, useEffect as r, useLayoutEffect as i, useMemo as a, useRef as o, useState as s } from "react";
import c from "../../../.intlayer/dictionary/header.json";
import l from "../../../.intlayer/dictionary/open-positions.json";
import ee from "../../../.intlayer/dictionary/careers-benefits.json";
import u from "../../../.intlayer/dictionary/settings.json";
import d from "../../../.intlayer/dictionary/footer.json";
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
import { jsx as f, jsxs as p } from "react/jsx-runtime";
var we = class {
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
}, m = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.messages;
	return t && typeof t == "object" ? t : e;
}, h = (e, t) => {
	let n = Te(e, t);
	if (n !== void 0) return n;
	if (e && typeof e == "object") {
		let n = e.messages;
		if (n && typeof n == "object") return Te(n, t);
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
}, g = (e) => typeof e == "string" ? e : Array.isArray(e) ? e.map(Ee).join("") : String(e ?? ""), De = "translation", Oe = "enumeration", ke = "plural", _ = "insertion", Ae = "object", je = "array", Me = "markdown", v = "html", Ne = "gender", Pe = "select", y = (e, t, n) => ({
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
}, x = (e) => y(Oe, e), S = (e) => y(Ne, e), Fe = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, C = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = Fe(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, Ie = /* @__PURE__ */ new Set([
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
]), Le = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, Re = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(Le)) {
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
				let e = Ie.has(i.toLowerCase());
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
}, w = (e, t) => y(v, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = Re(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return C(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => C(await e)), typeof n == "string") return C(n);
	try {
		return C(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), T = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, E = (e) => y(_, e, { fields: (() => {
	if (typeof e == "string") return T(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => T(await e)), typeof t == "string") return T(t);
	try {
		return T(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), D = (e) => y(ke, e), O = (e, t) => y(Pe, e, { variable: t }), ze = (e) => {
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
}, k = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? w(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? w(t) : E(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? w(t) : t;
		if (t.type === "argument") return t.format ? E(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : E(`{{${t.name}}}`);
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
					e[i] = k(a);
				}
				return e.__intlayer_icu_var = t.name, x(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = k(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return D(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = k(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? S({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : O(e, t.name);
		}
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = k(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, x(e);
		}
	}
	return e.map((e) => k([e]));
}, Be = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return k(ze(e));
		} catch {
			return e;
		}
	}
}, Ve = (e) => b(e, {
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
}, A = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? w(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? w(t) : E(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? w(t) : t;
		if (t.type === "argument") return t.format ? E(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : E(`{{${t.name}}}`);
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
					e[i] = A(a);
				}
				return e.__intlayer_icu_var = t.name, x(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = A(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return D(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = A(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? S({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : O(e, t.name);
		}
	}
	return e.map((e) => A([e]));
}, Ue = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return A(He(e));
		} catch {
			return e;
		}
	}
}, We = (e) => b(e, {
	dictionaryKey: "i18next",
	keyPath: [],
	plugins: [{
		id: "i18next",
		...Ue
	}]
}), Ge = (e) => {
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
}, Ke = (e) => {
	let t = [], n = "", r = 0;
	for (; r < e.length;) {
		let i = e[r];
		i === "\\" && r + 1 < e.length && e[r + 1] === "|" ? (n += "|", r += 2) : i === "|" ? (t.push(n.trim()), n = "", r++) : (n += i, r++);
	}
	return t.push(n.trim()), t.map(Ge);
}, j = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") return e[0];
	let t = "";
	for (let n of e) t += typeof n == "string" ? n : `{{${n.name}}}`;
	return E(t);
}, qe = (e) => {
	if (e.length === 1) return j(e[0]);
	let t = {};
	return e.length === 2 ? x({
		1: j(e[0]),
		fallback: j(e[1])
	}) : e.length === 3 ? x({
		0: j(e[0]),
		1: j(e[1]),
		fallback: j(e[2])
	}) : (e.forEach((n, r) => {
		r === e.length - 1 ? t.fallback = j(n) : t[r.toString()] = j(n);
	}), t.__intlayer_vue_i18n_var = "count", x(t));
}, Je = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("|")),
	transform: (e) => {
		try {
			return qe(Ke(e));
		} catch {
			return e;
		}
	}
}, Ye = (e) => b(e, {
	dictionaryKey: "vue-i18n",
	keyPath: [],
	plugins: [{
		id: "vue-i18n",
		...Je
	}]
}), Xe = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, Ze = (e, t) => e[Xe(e, t) ?? "fallback"], M = {
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
}, Qe = {
	mode: "default",
	prefix: "\x1B[38;5;239m[intlayer] \x1B[0m"
}, $e = 50, P = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Set(), et = (e) => {
	F.has(e) || (F.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
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
function I(e, t, n) {
	let r = t ?? M?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, o = P.get(a);
	o || (o = /* @__PURE__ */ new Map(), P.set(a, o));
	let s = o.get(i);
	if (!s) {
		let t = typeof e == "string" ? nt(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		o.size > $e && o.clear(), s = new t(r, n), o.set(i, s);
	}
	return s;
}
var rt = (e, t, n) => e[I("PluralRules", n).select(t)] ?? e.other, it = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, L = [
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
}, z = (e, t, n, r) => {
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
}, at = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{},]+?)\s*(?:,\s*(\w+)\s*(?:,\s*([^{}]+?)\s*)?)?\}\}/g, (e, r, i, a) => {
	let o = R(t, r);
	return o === void 0 ? e : i ? z(o, i, a, n) : String(o);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = R(t, r);
	return o === void 0 ? e : z(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = R(t, n);
	return r === void 0 ? e : String(r);
}), B = (e, t) => e[t] ?? e.count ?? e.n, V = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return at(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return V(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(V(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return V(r[_], t, n);
	if (r.nodeType === "html") return V(r[v], t, n);
	if (r.nodeType === "plural") {
		let e = r[ke];
		return V(rt(e, Number(B(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[Oe], i = L.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) L.includes(t) || (o[t] = n);
		let s = B(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = I("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? Ze(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return V(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[Pe], i = B(t, typeof r.variable == "string" ? r.variable : "value");
		return V(it(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[Ne];
		return V(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, ot = (e, t = {}, n = "en") => {
	let r = V(e, t, n);
	return typeof r == "string" ? r : String(r ?? "");
}, st = (e) => (t, n = {}, r = "en") => ot(typeof t == "string" ? e(t) : t, n, r), ct = {
	icu: Ve,
	i18next: We,
	"vue-i18n": Ye
}, lt = (e, t = {}, n = "en", r = "icu") => st(ct[r])(e, t, n), ut = class extends we {
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
		return this._dictionaryContent !== void 0 && Object.assign(e, m(this._dictionaryContent)), {
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
		return lt(this.resolveTemplate(i) ?? a ?? i, o, this._locale, "icu") ?? i;
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
}, dt = e(null), ft = /* @__PURE__ */ new WeakMap(), H = 0, pt = (e) => {
	if (!e) return "base";
	let t = ft.get(e);
	if (t) return t;
	H += 1;
	let n = `p${H}`;
	return ft.set(e, n), n;
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
	"careers-benefits": ee,
	settings: u,
	footer: d,
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
}, Bt = () => zt, Vt = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), Ht = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : Vt.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : Ht(e ? `${e}.${String(n)}` : String(n)) }), Ut = /* @__PURE__ */ new Set(), Wt = (e, t, n) => {
	let r = Bt()[e];
	return r ? cn(r, t, n) : (Ut.has(e) || (Lt({ log: Qe })(typeof window > "u" ? `Dictionary ${Rt(e)} was not found. Using fallback proxy.` : `Dictionary ${e} was not found. Using fallback proxy.`, { level: "warn" }), Ut.add(e)), Ht(e));
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
	if (Y(e)) return e.nodeType === "html" ? e[v] : e[Me];
}, Yt = (e, t) => {
	if (typeof e == "string") return t;
	if (Y(e)) {
		let n = e.nodeType === "html" ? v : Me;
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
	Zt(e ?? M.defaultLocale, t ? M.defaultLocale : void 0),
	Qt,
	$t,
	en,
	rn(e ?? M.defaultLocale),
	an,
	tn,
	nn
], sn = (e, t, n = []) => b(e, {
	...t,
	plugins: n
}), cn = (e, t, n) => {
	let { locale: r, selector: i } = kt(t), a = gt(r ?? M.defaultLocale, At(i), n), o = _t(e, a);
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
		Object.assign(t, m(Wt(n, e)));
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
	let { locales: t } = M;
	if (e?.isCookieEnabled === !1) return;
	let n = (e) => !!e && t.includes(e);
	if (!hn) for (let t = 0; t < (N.storage.cookies ?? []).length; t++) try {
		let r = e?.getCookie?.(N.storage.cookies[t].name);
		if (n(r)) return r;
	} catch {}
}, _n = (e, t) => {
	if (t?.isCookieEnabled !== !1 && !hn && N.storage.cookies) for (let n = 0; n < N.storage.cookies.length; n++) {
		let { name: r, attributes: i } = N.storage.cookies[n];
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
}, Tn = (e, t = M?.locales, n = M?.defaultLocale) => {
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
	locale: vn ?? M?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), En = ({ locale: e, defaultLocale: t, variant: n, children: i, setLocale: a, disableEditor: o, isCookieEnabled: c }) => {
	let { locales: l, defaultLocale: ee } = M ?? {}, [u, d] = s(e ?? vn ?? t ?? ee);
	r(() => {
		e && e !== u && d(e);
	}, [e]), r(() => {
		wn();
	}, []);
	let te = a ?? ((e) => {
		if (u.toString() !== e.toString()) {
			if (!l?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			d(e), yn(e, c);
		}
	}), ne = Tn(u);
	return f(Q.Provider, {
		value: {
			locale: ne,
			setLocale: te,
			variant: n,
			disableEditor: o
		},
		children: i
	});
}, Dn = ({ children: e, ...t }) => p(En, {
	...t,
	children: [
		f(xn, {}),
		f(Cn, {}),
		e
	]
}), { defaultLocale: On, locales: $ } = M ?? {}, kn = ({ isCookieEnabled: e, onLocaleChange: r } = {}) => {
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
	let e = n(dt), { locale: t } = kn(), r = a(() => {
		let e = new ut({
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
	})), [e]), f(dt.Provider, {
		value: a,
		children: f(Dn, {
			locale: c,
			children: n
		})
	});
}, Mn = (e) => new ut({
	...e,
	registry: fn()
});
Mn({ locale: "en" });
function Nn() {
	let { i18n: e } = An(), t = [
		{
			metric: e._("what-we-measure.bundleSizeImpact"),
			desc: e._("what-we-measure.theAdditionalJavascriptBytesSent")
		},
		{
			metric: e._("what-we-measure.renderingOverhead"),
			desc: e._("what-we-measure.howMuchExtraTimeThe")
		},
		{
			metric: e._("what-we-measure.hydrationCost"),
			desc: e._("what-we-measure.duringSsrTranslationDataIs")
		},
		{
			metric: e._("what-we-measure.lazyLoadingEffectiveness"),
			desc: e._("what-we-measure.whetherSplittingTranslationsByRoute")
		},
		{
			metric: e._("what-we-measure.localeSwitchSpeed"),
			desc: e._("what-we-measure.howFastTheAppCan")
		}
	];
	return p("section", {
		className: "mt-12 mx-auto max-w-3xl",
		children: [f("h2", {
			className: "mb-4 text-2xl font-bold text-foreground",
			children: e._("what-we-measure.whatWeMeasure")
		}), f("ul", {
			className: "space-y-4",
			children: t.map((e) => p("li", {
				className: "rounded-md border border-border p-4",
				children: [f("span", {
					className: "block text-sm font-bold text-primary",
					children: e.metric
				}), f("span", {
					className: "block mt-1 text-sm text-muted-foreground",
					children: e.desc
				})]
			}, e.metric))
		})]
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
	}, []), f(jn, {
		i18n: o,
		children: e
	});
}
function Rn({ children: e }) {
	return f(Ln, {
		locale: "en",
		messages: {},
		children: e
	});
}
function zn() {
	return f(Rn, { children: f(Nn, {}) });
}
export { zn as default };
