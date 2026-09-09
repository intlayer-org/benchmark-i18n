import { a as e, c as t, i as n, l as r, n as i, o as a, r as o, t as s, u as c } from "./built-BvRk9kiK.js";
import { _ as l, a as u, f as d, i as f, m as p, o as m, p as h, r as g, s as _, u as v, x as y, y as ee } from "./getDictionary-D9HcwN50.js";
import { n as te } from "./isBot-CTlYFuov.js";
import * as ne from "react";
import { createContext as re, useCallback as ie, useContext as b, useEffect as x, useLayoutEffect as ae, useMemo as oe, useRef as se, useState as ce } from "react";
import { jsx as S, jsxs as le } from "react/jsx-runtime";
import { jsxDEV as C } from "react/jsx-dev-runtime";
import { useParams as ue } from "next/navigation";
var de = (e, t = o?.locales, n = o?.defaultLocale) => {
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
}, fe = (e) => {
	if (typeof e == "number") return Date.now() + e * 1e3;
	if (typeof e == "string") {
		let t = Date.parse(e);
		return Number.isNaN(t) ? void 0 : t;
	}
}, pe = (e, t, n) => {
	let r = [`${e}=${encodeURIComponent(t)}`];
	n.path && r.push(`Path=${n.path}`), n.domain && r.push(`Domain=${n.domain}`);
	let i = fe(n.expires);
	return i !== void 0 && r.push(`Expires=${new Date(i).toUTCString()}`), n.secure && r.push("Secure"), n.sameSite && r.push(`SameSite=${n.sameSite}`), r.join("; ");
}, me = process.env.INTLAYER_ROUTING_STORAGE_COOKIES === "false", he = process.env.INTLAYER_ROUTING_STORAGE_LOCALSTORAGE === "false", ge = process.env.INTLAYER_ROUTING_STORAGE_SESSIONSTORAGE === "false";
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
}, _e = (t = w) => {
	let { locales: n } = o;
	if (t?.isCookieEnabled === !1) return;
	let r = (e) => !!e && n.includes(e);
	if (!me) for (let n = 0; n < (e.storage.cookies ?? []).length; n++) try {
		let i = t?.getCookie?.(e.storage.cookies[n].name);
		if (r(i)) return i;
	} catch {}
	if (!he) for (let n = 0; n < (e.storage.localStorage ?? []).length; n++) try {
		let i = t?.getLocaleStorage?.(e.storage.localStorage[n].name);
		if (r(i)) return i;
	} catch {}
	if (!ge && e.storage.sessionStorage) for (let n = 0; n < e.storage.sessionStorage.length; n++) try {
		let i = t?.getSessionStorage?.(e.storage.sessionStorage[n].name);
		if (r(i)) return i;
	} catch {}
}, ve = (t, n) => {
	if (n?.isCookieEnabled !== !1) {
		if (!me && e.storage.cookies) for (let r = 0; r < e.storage.cookies.length; r++) {
			let { name: i, attributes: a } = e.storage.cookies[r];
			try {
				n?.setCookieStore && n.setCookieStore(i, t, {
					...a,
					expires: fe(a.expires)
				});
			} catch {
				try {
					n?.setCookieString && n.setCookieString(i, pe(i, t, a));
				} catch {}
			}
		}
		if (!he && e.storage.localStorage && n?.setLocaleStorage) for (let r = 0; r < e.storage.localStorage.length; r++) {
			let { name: i } = e.storage.localStorage[r];
			try {
				if (!(n?.overwrite ?? !0) && n?.getLocaleStorage && n.getLocaleStorage(i)) continue;
				n.setLocaleStorage(i, t);
			} catch {}
		}
		if (!ge && e.storage.sessionStorage && n?.setSessionStorage) for (let r = 0; r < e.storage.sessionStorage.length; r++) {
			let { name: i } = e.storage.sessionStorage[r];
			try {
				if (!(n?.overwrite ?? !0) && n?.getSessionStorage && n.getSessionStorage(i)) continue;
				n.setSessionStorage(i, t);
			} catch {}
		}
	}
}, ye = [
	"Arab",
	"Hebr",
	"Thaa",
	"Syrc",
	"Mand",
	"Adlm",
	"Rohg",
	"Nkoo"
], be = (e) => {
	if (!e) return "ltr";
	try {
		let t = new Intl.Locale(e);
		if ("getTextInfo" in t) return t.getTextInfo().direction;
		if ("textInfo" in t) return t.textInfo.direction;
		let n = t.maximize();
		return ye.includes(n.script ?? "") ? "rtl" : "ltr";
	} catch {
		return "ltr";
	}
}, xe = 50, T = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Set(), Se = (e) => {
	E.has(e) || (E.add(e), console.warn(`[intlayer] \`Intl.${e}\` is not available in this JavaScript engine. A degraded fallback is used instead. On React Native, load a polyfill (e.g. \`@formatjs/intl-${e.toLowerCase()}/polyfill\`) before rendering your app.`));
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
function D(e, t, n) {
	let r = t ?? o?.defaultLocale, i = `${r}|${n ? JSON.stringify(n) : ""}`, a = e, s = T.get(a);
	s || (s = /* @__PURE__ */ new Map(), T.set(a, s));
	let c = s.get(i);
	if (!c) {
		let t = typeof e == "string" ? we(e) : e;
		if (typeof t != "function") throw Error(`[intlayer] \`Intl.${String(e)}\` is not available in this JavaScript engine and has no fallback. Load the matching polyfill before formatting.`);
		s.size > xe && s.clear(), c = new t(r, n), s.set(i, c);
	}
	return c;
}
var O = (e) => y(v, e), k = (e) => y(d, e), Te = (e) => {
	let t = {};
	return e?.trim() && [...e.matchAll(/([a-zA-Z0-9-:_@]+)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?/g)].forEach((e) => {
		let n = e[1];
		t[n] = "string";
	}), t;
}, A = (e) => {
	if (typeof e != "string") throw Error("content must be a string");
	let t = [...e.matchAll(/<(\/)?([a-zA-Z0-9.-]+)\s*([\s\S]*?)(\/?)>/g)], n = {};
	return t.forEach((e) => {
		let t = !!e[1], r = e[2], i = e[3], a = !!e[4];
		if (/^[a-z][a-z0-9]*$/.test(r)) {
			n[r] = !0;
			return;
		}
		if (n[r] || (n[r] = {}), n[r] === !0 || t) return;
		let o = Te(i), s = n[r];
		Object.assign(s, o), a || (s.children = "string");
	}), n;
}, Ee = /* @__PURE__ */ new Set([
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
]), De = /<(\/)?([a-zA-Z][a-zA-Z0-9.-]*)\s*((?:[^\n]|\n(?!\n))*?)(\/?)>/g, Oe = (e) => {
	let t = [], n = [];
	for (let r of e.matchAll(De)) {
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
				let e = Ee.has(i.toLowerCase());
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
}, j = (e, t) => y(h, e, { tags: (() => {
	if (t) return t;
	if (typeof e == "string") {
		let { issues: t } = Oe(e);
		for (let e of t) e.type === "error" ? console.error(`[intlayer/html] ${e.message}`) : console.warn(`[intlayer/html] ${e.message}`);
		return A(e);
	}
	let n;
	if (typeof e == "function" ? n = e() : typeof e.then == "function" && (n = async () => A(await e)), typeof n == "string") return A(n);
	try {
		return A(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), M = (e) => {
	let t = [...e.matchAll(/{{\s*(.*?)\s*}}/g)];
	return t.length === 0 ? [] : [...new Set(t.map((e) => e[1].trim()))].filter(Boolean);
}, N = (e) => y(p, e, { fields: (() => {
	if (typeof e == "string") return M(e);
	let t;
	if (typeof e == "function" ? t = e() : typeof e.then == "function" && (t = async () => M(await e)), typeof t == "string") return M(t);
	try {
		return M(JSON.stringify(e));
	} catch {
		return [];
	}
})() }), P = (e) => y(l, e), F = (e, t) => y(ee, e, { variable: t }), ke = (e) => {
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
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? j(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? j(t) : N(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? j(t) : t;
		if (t.type === "argument") return t.format ? N(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : N(`{{${t.name}}}`);
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
				return e.__intlayer_icu_var = t.name, O(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = I(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return P(e);
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
			].includes(e)) ? k({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : F(e, t.name);
		}
		if (t.type === "selectordinal") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) {
				let i = n.startsWith("=") ? n.substring(1) : n === "other" ? "fallback" : n;
				e[i] = I(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			}
			return e.__intlayer_icu_var = t.name, e.__intlayer_icu_ordinal = !0, O(e);
		}
	}
	return e.map((e) => I([e]));
}, Ae = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return I(ke(e));
		} catch {
			return e;
		}
	}
}, je = (e) => _(e, {
	dictionaryKey: "icu",
	keyPath: [],
	plugins: [{
		id: "icu",
		...Ae
	}]
}), Me = (e) => {
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
}, L = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") {
		let t = e[0];
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? j(t) : t;
	}
	if (e.every((e) => typeof e == "string" || e.type === "argument")) {
		let t = "";
		for (let n of e) typeof n == "string" ? t += n : typeof n != "string" && n.type === "argument" && (n.format ? t += `{${n.name}, ${n.format.type}${n.format.style ? `, ${n.format.style}` : ""}}` : t += `{{${n.name}}}`);
		return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? j(t) : N(t);
	}
	if (e.length === 1) {
		let t = e[0];
		if (typeof t == "string") return /<[a-zA-Z0-9-]+[^>]*>/.test(t) ? j(t) : t;
		if (t.type === "argument") return t.format ? N(`{${t.name}, ${t.format.type}${t.format.style ? `, ${t.format.style}` : ""}}`) : N(`{{${t.name}}}`);
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
					e[i] = L(a);
				}
				return e.__intlayer_icu_var = t.name, O(e);
			}
			for (let [n, r] of Object.entries(t.options)) e[n] = L(r.map((e) => typeof e == "string" ? e.replace(/#/g, `{{${t.name}}}`) : e));
			return P(e);
		}
		if (t.type === "select") {
			let e = {};
			for (let [n, r] of Object.entries(t.options)) e[n === "other" ? "fallback" : n] = L(r);
			let n = Object.keys(e);
			return (e.male || e.female) && n.every((e) => [
				"male",
				"female",
				"other",
				"fallback"
			].includes(e)) ? k({
				fallback: e.fallback,
				male: e.male,
				female: e.female
			}) : F(e, t.name);
		}
	}
	return e.map((e) => L([e]));
}, Ne = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("}") || /<[a-zA-Z0-9-]+[^>]*>/.test(e)),
	transform: (e) => {
		try {
			return L(Me(e));
		} catch {
			return e;
		}
	}
}, Pe = (e) => _(e, {
	dictionaryKey: "i18next",
	keyPath: [],
	plugins: [{
		id: "i18next",
		...Ne
	}]
}), Fe = (e, t, n = ".") => {
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
}, Ie = (e) => {
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
}, Le = (e) => {
	let t = [], n = "", r = 0;
	for (; r < e.length;) {
		let i = e[r];
		i === "\\" && r + 1 < e.length && e[r + 1] === "|" ? (n += "|", r += 2) : i === "|" ? (t.push(n.trim()), n = "", r++) : (n += i, r++);
	}
	return t.push(n.trim()), t.map(Ie);
}, R = (e) => {
	if (e.length === 0) return "";
	if (e.length === 1 && typeof e[0] == "string") return e[0];
	let t = "";
	for (let n of e) t += typeof n == "string" ? n : `{{${n.name}}}`;
	return N(t);
}, Re = (e) => {
	if (e.length === 1) return R(e[0]);
	let t = {};
	return e.length === 2 ? O({
		1: R(e[0]),
		fallback: R(e[1])
	}) : e.length === 3 ? O({
		0: R(e[0]),
		1: R(e[1]),
		fallback: R(e[2])
	}) : (e.forEach((n, r) => {
		r === e.length - 1 ? t.fallback = R(n) : t[r.toString()] = R(n);
	}), t.__intlayer_vue_i18n_var = "count", O(t));
}, ze = {
	canHandle: (e) => typeof e == "string" && (e.includes("{") || e.includes("|")),
	transform: (e) => {
		try {
			return Re(Le(e));
		} catch {
			return e;
		}
	}
}, Be = (e) => _(e, {
	dictionaryKey: "vue-i18n",
	keyPath: [],
	plugins: [{
		id: "vue-i18n",
		...ze
	}]
}), Ve = (e, t, n) => e[D("PluralRules", n).select(t)] ?? e.other, z = [
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
}, He = (e, t, n, r) => {
	try {
		if (t === "number") {
			let t = Number(e);
			return n === "percent" ? D("NumberFormat", r, { style: "percent" }).format(t) : n === "integer" ? D("NumberFormat", r, { maximumFractionDigits: 0 }).format(t) : D("NumberFormat", r).format(t);
		}
		if (t === "date" || t === "time") {
			let i = e instanceof Date ? e : new Date(e), a = [
				"short",
				"medium",
				"long",
				"full"
			].includes(n ?? "") ? n : t === "date" ? "medium" : "short";
			return D("DateTimeFormat", r, t === "date" ? { dateStyle: a } : { timeStyle: a }).format(i);
		}
	} catch {}
	return String(e);
}, Ue = (e, t = {}, n = "en") => e.replace(/\{\{\s*([^{}]+?)\s*\}\}/g, (e, n) => {
	let r = B(t, n);
	return r === void 0 ? e : String(r);
}).replace(/\{\s*([\w.]+)\s*,\s*(\w+)\s*(?:,\s*([^}]+?)\s*)?\}/g, (e, r, i, a) => {
	let o = B(t, r);
	return o === void 0 ? e : He(o, i, a, n);
}).replace(/\{\s*([\w.]+)\s*\}/g, (e, n) => {
	let r = B(t, n);
	return r === void 0 ? e : String(r);
}), V = (e, t) => e[t] ?? e.count ?? e.n, H = (e, t = {}, n = "en") => {
	if (e == null) return e;
	if (typeof e == "string") return Ue(e, t, n);
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (typeof e == "function") try {
		return H(e(t), t, n);
	} catch {
		return;
	}
	if (Array.isArray(e)) return e.map((e) => String(H(e, t, n) ?? "")).join("");
	let r = e;
	if (r.nodeType === "insertion") return H(r[p], t, n);
	if (r.nodeType === "html") return H(r[h], t, n);
	if (r.nodeType === "plural") {
		let e = r[l];
		return H(Ve(e, Number(V(t, "count") ?? 1), n), t, n);
	}
	if (r.nodeType === "enumeration") {
		let e = r[v], i = z.map((t) => e[t]).find((e) => typeof e == "string") ?? "count", a = e.__intlayer_icu_ordinal === !0, o = {};
		for (let [t, n] of Object.entries(e)) z.includes(t) || (o[t] = n);
		let s = V(t, i), c;
		if (a && !Number.isNaN(Number(s))) {
			let e = Number(s), t = D("PluralRules", n, { type: "ordinal" }).select(e);
			c = o[String(e)] ?? o[t] ?? o.fallback ?? o.other;
		} else c = typeof s == "number" || !Number.isNaN(Number(s)) ? m(o, Number(s)) : o[String(s)] ?? o.fallback ?? o.other;
		return H(c, t, n);
	}
	if (r.nodeType === "select") {
		let e = r[ee], i = V(t, typeof r.variable == "string" ? r.variable : "value");
		return H(u(e, String(i ?? "")), t, n);
	}
	if (r.nodeType === "gender") {
		let e = r[d];
		return H(e[String(t.gender ?? "")] ?? e.fallback ?? e.other, t, n);
	}
	return e;
}, We = {
	icu: (e) => je(e),
	i18next: (e) => Pe(e),
	"vue-i18n": (e) => Be(e)
}, U = (e, t = {}, n = "en", r = "icu") => {
	let i = H(typeof e == "string" ? We[r](e) : e, t, n);
	return typeof i == "string" ? i : String(i ?? "");
}, Ge = /* @__PURE__ */ new Set([
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
]), Ke = 5, W = "index", G = (e, t) => {
	if (e in f()) return g(e, t);
}, qe = (e, t, n, r, i) => {
	let a = [], o = n === void 0 ? void 0 : new Intl.PluralRules(t, { type: i ? "ordinal" : "cardinal" }).select(n);
	return r && (o && (i && a.push(`${e}_${r}_ordinal_${o}`), a.push(`${e}_${r}_${o}`), n !== 1 && a.push(`${e}_${r}_plural`)), a.push(`${e}_${r}`)), o && (i && a.push(`${e}_ordinal_${o}`), a.push(`${e}_${o}`), n !== 1 && a.push(`${e}_plural`)), a.push(e), a;
}, K = (e) => {
	if (!e || typeof e != "object") return {};
	let t = e.replace;
	if (t) {
		let n = { ...t };
		return e.count !== void 0 && (n.count ??= e.count), e.context !== void 0 && (n.context ??= e.context), n;
	}
	let n = {};
	for (let [t, r] of Object.entries(e)) Ge.has(t) || (n[t] = r);
	return n;
}, q = ({ locale: e, namespace: t, key: n, options: r, keySeparator: i = ".", nsSeparator: a = ":", depth: o = 0, dictionaryContent: s }) => {
	let c = t, l = n;
	if (a !== !1 && n.includes(a)) {
		let e = n.indexOf(a);
		c = n.slice(0, e), l = n.slice(e + a.length);
	} else r?.ns && (c = Array.isArray(r.ns) ? r.ns[0] : r.ns);
	let u = typeof r?.count == "number" ? r.count : void 0, d = r?.context === void 0 ? void 0 : String(r.context), f = r?.ordinal === !0, p = r?.lng ?? e, m;
	if (s !== void 0 && c === t && r?.lng === void 0) m = s;
	else if (m = G(c, p), m === void 0 && c === t && c !== W && (m = G(W, p)), m === void 0) return;
	let h;
	for (let t of qe(l, r?.lng ?? e, u, d, f)) {
		let e = Fe(m, t, i);
		if (e != null) {
			h = e;
			break;
		}
	}
	if (h == null) return;
	if (r?.returnObjects && typeof h == "object" && h) return h;
	let g = K(r), _ = U(h, g, r?.lng ?? e, "i18next");
	return o < Ke && _.includes("$t(") && (_ = _.replace(/\$t\(\s*([^),]+?)\s*(?:,[^)]*)?\)/g, (n, l) => {
		let u = q({
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
	})), _;
}, Je = (e) => {
	t({ log: n })(`${a(e, r)}: the ${a("`resources`", r)} option is ignored when using ${a("@intlayer/i18next", c)} — translations are served from the compiled intlayer dictionaries instead. Remove the resource imports and the ${a("`resources`", r)} option to reduce your bundle size.`);
}, J = (e = {}) => {
	e.resources !== void 0 && Je("createInstance");
	let t = o, n = e.lng ?? t?.defaultLocale ?? "en", r = e.defaultNS ?? (Array.isArray(e.ns) ? e.ns[0] : e.ns) ?? "translation", i = /* @__PURE__ */ new Map(), a = !1, s = (e, ...t) => {
		i.get(e)?.forEach((e) => {
			e(...t);
		});
	}, c = () => ({
		keySeparator: e.keySeparator ?? ".",
		nsSeparator: e.nsSeparator ?? ":"
	}), l = (e, t, n, r) => {
		let i = typeof r == "string" ? { defaultValue: r } : r, a = q({
			locale: e,
			namespace: t,
			key: n,
			options: i,
			...c()
		});
		if (a !== void 0) return a;
		let o = i?.defaultValue;
		return typeof o == "string" ? U(o, K(i), e, "i18next") : n;
	}, u = {
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
			i.resources !== void 0 && Je("i18next.init"), i.lng && (n = i.lng), i.defaultNS ? r = i.defaultNS : i.ns && (r = Array.isArray(i.ns) ? i.ns[0] : i.ns), a = !0, s("initialized", i);
			let o = u.t.bind(u);
			return (typeof e == "function" ? e : t)?.(null, o), o;
		},
		t(e, t, i) {
			let a = typeof t == "string" ? {
				defaultValue: t,
				...i ?? {}
			} : t, o = Array.isArray(e) ? e : [String(e)];
			for (let e of o) {
				let t = q({
					locale: n,
					namespace: r,
					key: e,
					options: a,
					...c()
				});
				if (t !== void 0) return t;
			}
			let s = a?.defaultValue;
			return typeof s == "string" ? U(s, K(a), n, "i18next") : s ?? (Array.isArray(e) ? e[e.length - 1] : e);
		},
		async changeLanguage(e, t) {
			let r = n;
			e && (n = e), s("languageChanged", n, r);
			let i = u.t.bind(u);
			return t?.(null, i), i;
		},
		exists(e, t) {
			return q({
				locale: n,
				namespace: r,
				key: e,
				options: t,
				...c()
			}) !== void 0;
		},
		getFixedT: ((e, t, i) => {
			let a = Array.isArray(e) ? e[0] ?? n : e ?? n, o = t ?? r;
			return (e, t) => {
				let n = i ? `${i}.${e}` : e;
				return l(a, o, n, t);
			};
		}),
		use(e) {
			return e?.init?.(u), u;
		},
		on(e, t) {
			return i.has(e) || i.set(e, /* @__PURE__ */ new Set()), i.get(e).add(t), u;
		},
		once(e, t) {
			let n = (...r) => {
				t(...r), u.off(e, n);
			};
			return u.on(e, n), u;
		},
		off(e, t) {
			t ? i.get(e)?.delete(t) : i.delete(e);
		},
		emit(e, ...t) {
			s(e, ...t);
		},
		createInstance(t, n) {
			return J({
				...e,
				...t
			});
		},
		cloneInstance(t, n) {
			return J({
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
				return g(Array.isArray(e) ? e[0] : e, n), !0;
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
				return Fe(g(t, e), n);
			} catch {
				return;
			}
		},
		addResource: () => u,
		addResources: () => u,
		addResourceBundle: () => u,
		hasResourceBundle: () => !1,
		getResourceBundle: () => void 0,
		removeResourceBundle: () => u,
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
	return u;
}, Y = J();
Y.dir.bind(Y), Y.init.bind(Y), Y.loadResources.bind(Y), Y.reloadResources.bind(Y), Y.use.bind(Y), Y.changeLanguage.bind(Y), Y.getFixedT.bind(Y), Y.t.bind(Y), Y.exists.bind(Y), Y.setDefaultNamespace.bind(Y), Y.hasLoadedNamespace.bind(Y), Y.loadNamespaces.bind(Y), Y.loadLanguages.bind(Y);
var Ye = ({ locale: e, setLocale: t, availableLocales: n, namespace: r, keyPrefix: i, dictionaryContent: a }) => {
	let o = (t, n) => q({
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
		return typeof s == "string" ? U(s, K(i), e, "i18next") : a[a.length - 1];
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
			dir: (t) => be(t ?? e) === "rtl" ? "rtl" : "ltr",
			exists: (t, n) => q({
				locale: e,
				namespace: r,
				key: t,
				options: n,
				dictionaryContent: a
			}) !== void 0,
			t: s,
			getFixedT: (t, n) => (i, o) => {
				let s = q({
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
}, Xe = process.env.INTLAYER_EDITOR_ENABLED !== "false" && i?.enabled && typeof window < "u" && window.self !== window.top, X = _e(w), Ze = (e, t) => ve(e, {
	...w,
	isCookieEnabled: t
}), Qe = () => {
	let { locale: e } = b(Z) ?? {}, t = se(null);
	x(() => {
		if (process.env.INTLAYER_EDITOR_ENABLED !== "false" && Xe) return import("./esm-D95LQG8s.js").then(({ initEditorClient: n }) => {
			let r = n();
			t.current = r, e && r.currentLocale.set(e);
		}).catch(() => {}), () => {
			t.current = null, import("./esm-D95LQG8s.js").then(({ stopEditorClient: e }) => {
				e();
			}).catch(() => {});
		};
	}, []), x(() => {
		e && t.current && t.current.currentLocale.set(e);
	}, [e]);
}, $e = ({ children: e }) => (Qe(), e), et = process.env.INTLAYER_ANALYTICS_ENABLED !== "false" && s?.enabled === !0 && !!i?.clientId && typeof window < "u" && window.self === window.top && !te(), tt = () => {
	let { locale: e } = b(Z) ?? {}, t = se(null);
	x(() => {
		if (process.env.INTLAYER_ANALYTICS_ENABLED === "false" || !et) return;
		let n = !1, r = !1;
		return import("./esm-D6OJlqYA.js").then(({ initAnalyticsClient: i, buildContentExposure: a }) => {
			if (n) return;
			let o = i();
			r = !0, t.current = o, e && o.setLocale(e), o.trackPageView({ reason: "initial" });
		}).catch(() => {}), () => {
			n = !0, t.current = null, import("./esm-D6OJlqYA.js").then(({ stopAnalyticsClient: e }) => {
				r && e();
			}).catch(() => {});
		};
	}, []), x(() => {
		e && t.current && (t.current.setLocale(e), t.current.trackPageView({ reason: "locale_change" }));
	}, [e]);
}, nt = ({ children: e }) => (tt(), e), rt = () => {
	typeof window < "u" && (window.intlayer = { enabled: !0 });
}, Z = re({
	locale: X ?? o?.defaultLocale,
	setLocale: () => null,
	isCookieEnabled: !0
}), it = ({ locale: e, defaultLocale: t, variant: n, children: r, setLocale: i, disableEditor: a, isCookieEnabled: s }) => {
	let { locales: c, defaultLocale: l } = o ?? {}, [u, d] = ce(e ?? X ?? t ?? l);
	x(() => {
		e && e !== u && d(e);
	}, [e]), x(() => {
		rt();
	}, []);
	let f = i ?? ((e) => {
		if (u.toString() !== e.toString()) {
			if (!c?.map(String).includes(e)) {
				console.error(`Locale ${e} is not available`);
				return;
			}
			d(e), Ze(e, s);
		}
	}), p = de(u);
	return S(Z.Provider, {
		value: {
			locale: p,
			setLocale: f,
			variant: n,
			disableEditor: a
		},
		children: r
	});
}, at = ({ children: e, ...t }) => le(it, {
	...t,
	children: [
		S($e, {}),
		S(nt, {}),
		e
	]
}), { defaultLocale: ot, locales: Q } = o ?? {}, st = ({ isCookieEnabled: e, onLocaleChange: t } = {}) => {
	let { locale: n, setLocale: r, isCookieEnabled: i } = b(Z) ?? {};
	return {
		locale: n,
		defaultLocale: ot,
		availableLocales: Q,
		setLocale: ie((n) => {
			if (!Q?.map(String).includes(n)) {
				console.error(`Locale ${n} is not available`);
				return;
			}
			r(n), Ze(n, e ?? i ?? !0), t?.(n);
		}, [
			Q,
			t,
			r,
			e
		])
	};
}, ct = (e, t) => {
	let n = Array.isArray(e) ? e[0] ?? "translation" : e ?? "translation", { locale: r, setLocale: i, availableLocales: a } = st(), o = t?.keyPrefix, { translate: s, i18n: c } = oe(() => Ye({
		locale: r,
		setLocale: i,
		availableLocales: a ?? [],
		namespace: n,
		keyPrefix: o
	}), [
		r,
		i,
		a,
		n,
		o
	]);
	return {
		t: s,
		i18n: c,
		ready: !0
	};
};
ne.createContext({ i18n: null });
var lt = {
	type: "3rdParty",
	init: (e) => {}
}, $ = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-i18next-app/components/pages/settings/SettingsFooter.tsx";
function ut() {
	let { t: e } = ct();
	return C("div", {
		className: "flex justify-end gap-3",
		children: [C("button", {
			type: "button",
			className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors",
			children: e("settings.settingsFooter.cancel")
		}, void 0, !1, {
			fileName: $,
			lineNumber: 9,
			columnNumber: 7
		}, this), C("button", {
			type: "submit",
			className: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity",
			children: e("settings.settingsFooter.saveChanges")
		}, void 0, !1, {
			fileName: $,
			lineNumber: 15,
			columnNumber: 7
		}, this)]
	}, void 0, !0, {
		fileName: $,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
var dt = (e) => S(at, { ...e });
function ft() {
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
function pt(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
Y.use(lt).init({
	lng: "en",
	fallbackLng: "en",
	interpolation: { escapeValue: !1 },
	react: { useSuspense: !1 },
	keySeparator: !1,
	nsSeparator: !1
});
var mt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-i18next-app/components/AppProviders.tsx";
function ht({ children: e }) {
	let t = ue().locale ?? "en", [n] = ce(() => typeof performance < "u" ? performance.now() : 0);
	return ae(() => {
		pt("AppRoot", n);
	}, [n]), x(() => {
		document.documentElement.lang = t;
	}, [t]), x(() => {
		ft();
	}, []), C(dt, {
		locale: t,
		children: e
	}, void 0, !1, {
		fileName: mt,
		lineNumber: 37,
		columnNumber: 7
	}, this);
}
var gt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-i18next-app/scripts/Wrapper.tsx";
function _t({ children: e }) {
	return C(ht, { children: e }, void 0, !1, {
		fileName: gt,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
var vt = "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/nextjs-static/intlayer-compat-next-i18next-app/components/pages/settings/SettingsFooter.wrapper.tsx";
function yt() {
	return C(_t, { children: C(ut, {}, void 0, !1, {
		fileName: vt,
		lineNumber: 9,
		columnNumber: 11
	}, this) }, void 0, !1, {
		fileName: vt,
		lineNumber: 8,
		columnNumber: 9
	}, this);
}
export { yt as default };
import { n as e, t } from "./built-BvRk9kiK.js";
import { n } from "./isBot-CTlYFuov.js";
var r = (e) => {
	let t = 2166136261;
	for (let n = 0; n < e.length; n++) t ^= e.charCodeAt(n), t = Math.imul(t, 16777619);
	return t >>> 0;
}, i = (e, t, n, i) => {
	if (n.length === 0) throw Error("assignVariant requires at least one variant");
	if (n.length === 1) return n[0];
	let a = r(`${e}:${t}`) / 4294967296;
	if (!i || i.length !== n.length) {
		let e = Math.floor(a * n.length);
		return n[Math.min(e, n.length - 1)];
	}
	let o = i.reduce((e, t) => e + t, 0);
	if (o <= 0) return n[Math.floor(a * n.length)];
	let s = 0, c = a * o;
	for (let e = 0; e < n.length; e++) if (s += i[e], c < s) return n[e];
	return n[n.length - 1];
}, a = "", o = (e) => [
	e.url,
	e.dictionaryKey,
	e.keyPath,
	e.locale,
	e.experimentKey ?? "",
	e.variant ?? ""
].join(a), s = ({ max: e }) => {
	let t = [], n = /* @__PURE__ */ new Map(), r = () => t.length + n.size, i = () => {
		for (; r() > e && n.size > 0;) {
			let e = n.keys().next().value;
			n.delete(e);
		}
		r() > e && (t = t.slice(r() - e));
	};
	return {
		push: (e) => {
			if (e.type === "content_exposure") {
				let t = o(e), r = n.get(t);
				r ? (r.count = (r.count ?? 1) + (e.count ?? 1), r.t = e.t) : n.set(t, {
					...e,
					count: e.count ?? 1
				});
			} else t.push(e);
			return i(), r();
		},
		drain: () => {
			let e = [...t, ...n.values()];
			return t = [], n.clear(), e;
		},
		size: r
	};
}, c = (e, t) => t >= 1 ? !0 : t <= 0 ? !1 : r(e) / 4294967295 < t, l = "__intlayer_analytics_sid__", u = () => {
	let e = typeof globalThis < "u" ? globalThis.crypto : void 0;
	return e?.randomUUID ? e.randomUUID() : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}, d = () => {
	if (typeof window > "u" || !window.sessionStorage) return u();
	try {
		let e = window.sessionStorage.getItem(l);
		if (e) return e;
		let t = u();
		return window.sessionStorage.setItem(l, t), t;
	} catch {
		return u();
	}
}, f = (e, t, { useBeacon: n = !1, token: r } = {}) => {
	try {
		let i = JSON.stringify(t);
		return n && typeof navigator < "u" && typeof navigator.sendBeacon == "function" ? navigator.sendBeacon(e, i) : typeof fetch == "function" && (fetch(e, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				...r ? { Authorization: `Bearer ${r}` } : {}
			},
			body: i,
			keepalive: !0,
			credentials: "omit",
			mode: "cors"
		}).catch(() => {}), !0);
	} catch {
		return !1;
	}
}, p = (e) => {
	if (typeof window > "u") return;
	let t = window.requestIdleCallback;
	if (typeof t == "function") {
		t(() => e());
		return;
	}
	setTimeout(e, 1);
}, m = "__intlayer_public_token__", h = 6e4, g = () => {
	try {
		let e = window.sessionStorage?.getItem(m);
		if (!e) return null;
		let t = JSON.parse(e);
		return typeof t?.token != "string" || typeof t?.expiresAt != "number" ? null : t;
	} catch {
		return null;
	}
}, _ = (e) => {
	try {
		window.sessionStorage?.setItem(m, JSON.stringify(e));
	} catch {}
}, v = ({ backendURL: e, clientId: t }) => {
	let n = `${e.replace(/\/$/, "")}/api/public/token`, r = null, i = null, a = (e) => e !== null && e.expiresAt - h > Date.now(), o = () => {
		if (a(r)) return r.token;
		if (typeof window < "u") {
			let e = g();
			if (a(e)) return r = e, e.token;
		}
	}, s = async () => {
		try {
			let e = await fetch(n, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ clientId: t }),
				credentials: "omit",
				mode: "cors"
			});
			if (!e.ok) return;
			let i = await e.json(), a = i?.data?.token, o = i?.data?.expiresIn ?? 0;
			if (!a || o <= 0) return;
			r = {
				token: a,
				expiresAt: Date.now() + o * 1e3
			}, typeof window < "u" && _(r);
		} catch {} finally {
			i = null;
		}
	};
	return {
		getToken: o,
		prime: () => {
			t && typeof fetch == "function" && (o() || (i ||= s()));
		}
	};
}, y = "intlayer-analytics/1", b = () => typeof window > "u" || !window.location ? "" : window.location.pathname, x = () => {
	if (!(typeof document > "u" || !document.referrer)) try {
		return new URL(document.referrer).host;
	} catch {
		return;
	}
}, S = (e) => {
	let t = d(), r = n(), a = !r && c(t, e.sampleRate), o = s({ max: e.maxBufferSize }), l = `${e.backendURL.replace(/\/$/, "")}/api/analytics/events`, u = v({
		backendURL: e.backendURL,
		clientId: e.clientId
	}), m = "", h = null, g = !1, _ = null, S = null, C = /* @__PURE__ */ new Set(), w = (n = !1) => {
		let r = o.drain(), i = u.getToken();
		for (let a = 0; a < r.length; a += 200) f(l, {
			token: i,
			clientId: i ? void 0 : e.clientId,
			sessionId: t,
			sdkVersion: y,
			events: r.slice(a, a + 200)
		}, {
			useBeacon: n,
			token: i
		});
	}, T = (t) => {
		o.push(t) >= e.maxBufferSize && w();
	}, E = (e) => {
		m = e;
	}, D = (e = {}) => {
		if (!a) return;
		let t = e.url ?? b(), n = e.reason ?? "initial";
		(n !== "route_change" || t !== S) && (S = t, C = /* @__PURE__ */ new Set(), T({
			type: "page_view",
			t: Date.now(),
			url: t,
			locale: e.locale ?? m,
			ref: e.ref ?? x(),
			vw: e.vw ?? (typeof window < "u" ? window.innerWidth : void 0),
			vh: e.vh ?? (typeof window < "u" ? window.innerHeight : void 0),
			reason: n
		}));
	}, O = (e) => {
		if (!a) return;
		let t = e.locale ?? m, n = [
			e.dictionaryKey,
			e.keyPath,
			t,
			e.experimentKey ?? "",
			e.variant ?? ""
		].join("");
		C.has(n) || (C.add(n), T({
			...e,
			type: "content_exposure",
			t: Date.now(),
			url: b(),
			locale: t
		}));
	}, k = (e) => {
		r || (T({
			...e,
			type: "conversion",
			t: Date.now(),
			url: b(),
			locale: e.locale ?? m
		}), w());
	}, A = (e, n, r) => i(t, e, n, r), j = () => {
		if (typeof window > "u") return;
		let e = () => {
			document.visibilityState === "hidden" && w(!0);
		}, t = () => w(!0), n = () => D({ reason: "route_change" });
		document.addEventListener("visibilitychange", e), window.addEventListener("pagehide", t, { capture: !0 }), window.addEventListener("popstate", n);
		let r = window.history, i = r.pushState, a = function(...e) {
			let t = i.apply(this, e);
			return D({ reason: "route_change" }), t;
		};
		r.pushState = a, _ = () => {
			document.removeEventListener("visibilitychange", e), window.removeEventListener("pagehide", t, { capture: !0 }), window.removeEventListener("popstate", n), r.pushState === a && (r.pushState = i);
		};
	};
	return {
		setLocale: E,
		trackPageView: D,
		trackContentExposure: O,
		trackConversion: k,
		getVariant: A,
		flush: w,
		start: () => {
			g || r || (g = !0, u.prime(), h = setInterval(w, e.flushInterval), h?.unref?.(), p(j));
		},
		stop: () => {
			g && (g = !1, h &&= (clearInterval(h), null), _?.(), _ = null, w(!0));
		}
	};
}, C = "__intlayer_analytics_client__", w = "__intlayer_analytics_ref_count__", T = () => typeof window > "u" ? null : window[C] ?? null, E = (e) => {
	typeof window > "u" || (window[C] = e);
}, D = () => {
	if (typeof window > "u") return 0;
	let e = window;
	return e[w] = (e[w] ?? 0) + 1, e[w];
}, O = () => {
	if (typeof window > "u") return 0;
	let e = window;
	return e[w] = Math.max(0, (e[w] ?? 0) - 1), e[w];
}, k = () => {
	D();
	let n = T();
	if (n) return n;
	let r = S({
		backendURL: e?.backendURL ?? "",
		clientId: e?.clientId,
		flushInterval: t?.flushInterval ?? 2e4,
		maxBufferSize: 500,
		sampleRate: t?.sampleRate ?? 1
	});
	return E(r), r.start(), r;
}, A = () => {
	O() > 0 || (T()?.stop(), E(null));
}, j = (e) => e.map((e) => e.key === void 0 ? "*" : String(e.key)).join("."), M = (e) => ({
	dictionaryKey: e.dictionaryKey,
	keyPath: j(e.keyPath),
	locale: e.locale,
	nodeType: e.nodeType,
	experimentKey: e.experimentKey,
	variant: e.variant
});
export { M as buildContentExposure, T as getGlobalAnalyticsClient, k as initAnalyticsClient, A as stopAnalyticsClient };
import { n as e } from "./built-BvRk9kiK.js";
import { b as t, n, t as r } from "./getDictionary-D9HcwN50.js";
var i = (e, t) => e.every((e, n) => t[n] && t[n].key === e.key && t[n].type === e.type), a = (e, t, n) => {
	let r = e, i = null, a = [];
	if (t.length === 0) return n;
	try {
		for (let e = 0; e < t.length; e++) {
			let o = t[e];
			if (i = r, (o?.type === "object" || o?.type === "array") && (a = [o.key], (!r[o.key] || typeof r[o.key] != "object") && (r[o.key] = {}), r = r[o.key]), (o?.type === "translation" || o?.type === "enumeration" || o?.type === "plural" || o?.type === "gender" || o?.type === "select") && (a = [o.type, o.key], (!r[o.type] || typeof r[o.type] != "object") && (r[o.type] = {}), (!r[o.type][o.key] || typeof r[o.type][o.key] != "object") && (r[o.type][o.key] = {}), r = r[o.type][o.key]), (o?.type === "enumeration" || o?.type === "plural" || o?.type === "condition") && o.type !== "enumeration" && o.type !== "plural" && (a = [o.type, o.key], r = r[o.type][o.key]), (o?.type === "markdown" || o?.type === "html" || o?.type === "insertion") && (a = [o.type], r[o.type] ?? (r[o.type] = ""), r = r[o.type]), o?.type === "file" && (a = ["content"], r = r.content), e === t.length - 1 && i && a.length > 0) {
				let e = i;
				for (let t of a.slice(0, -1)) e = e[t];
				let t = a[a.length - 1];
				if (n === void 0) {
					if (Array.isArray(e)) {
						let n = Number(t);
						!Number.isNaN(n) && n >= 0 && n < e.length && e.splice(n, 1);
					} else delete e[t];
				} else e[t] = n;
			}
		}
		return e;
	} catch (r) {
		return console.error("Cannot edit dictionary by key path", {
			dictionaryContent: e,
			keyPath: t,
			newValue: n
		}, r), e;
	}
}, o = (e, n, r) => {
	let i = structuredClone(e);
	for (let e of n) r && i?.nodeType === "translation" && (i = i?.[t]?.[r]), (e.type === "object" || e.type === "array") && (i = i?.[e.key]), (e.type === "translation" || e.type === "condition" || e.type === "enumeration" || e.type === "plural" || e.type === "gender" || e.type === "select") && (i = i?.[e.type]?.[e.key]), (e.type === "markdown" || e.type === "html" || e.type === "insertion" || e.type === "file") && (i = i?.[e.type]);
	return i;
}, s = (e, t, n) => {
	let r = e, i = null, a = null;
	for (let e of n) i = r, (e.type === "object" || e.type === "array") && (a = e.key, r = r[e.key]), (e.type === "translation" || e.type === "enumeration" || e.type === "plural" || e.type === "condition" || e.type === "gender" || e.type === "select") && (a = e.type, r = r[e.type][e.key]), (e.type === "markdown" || e.type === "reactNode" || e.type === "html" || e.type === "insertion" || e.type === "file") && (a = e.type, r = r[e.type]);
	if (i && a !== null) {
		if (Array.isArray(i)) i[a] = r;
		else {
			let e = {};
			for (let n of Object.keys(i)) n === a && t !== void 0 ? e[t] = r : e[n] = i[n];
			Object.keys(i).forEach((e) => {
				delete i[e];
			}), Object.assign(i, e);
		}
	}
	return e;
}, c = (e, t) => {
	try {
		let n = new URL(e), r = new URL(t);
		if (n.protocol !== r.protocol || n.hostname !== r.hostname || n.port !== r.port) return !1;
		let i = n.pathname.replace(/\/$/, ""), a = r.pathname.replace(/\/$/, "");
		return i === "" || a === "" || i === a;
	} catch (n) {
		return console.error("Invalid URL(s)", n, {
			url1: e,
			url2: t
		}), !1;
	}
}, l = (e) => {
	let t = new MouseEvent("mousedown", {
		bubbles: !0,
		cancelable: !0,
		view: window
	}), n = new MouseEvent("click", {
		bubbles: !0,
		cancelable: !0,
		view: window
	});
	Object.assign(n, { iframeData: e }), Object.assign(t, { iframeData: e }), window.dispatchEvent(n), window.dispatchEvent(t);
}, u = "__intlayer_editor_manager__", d = "__intlayer_editor_manager_events__", f = () => {
	if (typeof window > "u") return new EventTarget();
	let e = window;
	return e[d] || (e[d] = new EventTarget()), e[d];
}, p = () => typeof window > "u" ? null : window[u] ?? null, m = (e) => {
	if (typeof window < "u") {
		let t = window;
		t[u] = e;
	}
	f().dispatchEvent(new CustomEvent("change", { detail: e }));
}, h = (e) => {
	let t = f(), n = (t) => {
		e(t.detail);
	};
	return t.addEventListener("change", n), () => {
		t.removeEventListener("change", n);
	};
}, g = typeof HTMLElement < "u" ? HTMLElement : class {}, _ = class extends g {
	_keyPathJson = "[]";
	_dictionaryKey = "";
	_editorEnabled = !1;
	_isInIframe = !1;
	_isSelected = !1;
	_editedValue = void 0;
	_renderState = null;
	_selector = null;
	_unsubManager = null;
	_unsubEnabled = null;
	_unsubFocused = null;
	_unsubEditedContent = null;
	static get observedAttributes() {
		return ["key-path", "dictionary-key"];
	}
	get keyPathJson() {
		return this._keyPathJson;
	}
	set keyPathJson(e) {
		this._keyPathJson = e;
		let t = p();
		t && this._updateEditedValue(t);
	}
	get dictionaryKey() {
		return this._dictionaryKey;
	}
	set dictionaryKey(e) {
		this._dictionaryKey = e;
		let t = p();
		t && this._updateEditedValue(t);
	}
	constructor() {
		super();
		let e = this.attachShadow({ mode: "open" }), t = document.createElement("style");
		t.textContent = ":host { display: contents; }", e.appendChild(t);
	}
	attributeChangedCallback(e, t, n) {
		if (e === "key-path") {
			this._keyPathJson = n ?? "[]";
			let e = p();
			e && this._updateEditedValue(e);
		} else if (e === "dictionary-key") {
			this._dictionaryKey = n ?? "";
			let e = p();
			e && this._updateEditedValue(e);
		}
	}
	connectedCallback() {
		typeof window < "u" && (this._isInIframe = window.self !== window.top), this._subscribeToManager(), this._render();
	}
	disconnectedCallback() {
		this._teardown();
	}
	_teardown() {
		this._unsubManager?.(), this._unsubEnabled?.(), this._unsubFocused?.(), this._unsubEditedContent?.(), this._unsubManager = null, this._unsubEnabled = null, this._unsubFocused = null, this._unsubEditedContent = null;
	}
	_getRawKeyPath() {
		try {
			return JSON.parse(this._keyPathJson);
		} catch {
			return [];
		}
	}
	_getFilteredKeyPath() {
		return this._getRawKeyPath().filter((e) => e.type !== t);
	}
	_updateEditedValue(e) {
		let n = this._getFilteredKeyPath();
		if (!this._dictionaryKey || n.length === 0) {
			this._editedValue = void 0, this._render();
			return;
		}
		let r = this._getRawKeyPath(), i = r[r.length - 1]?.type;
		if (i === "markdown" || i === "html" || i === "insertion" || i === "file") {
			this._editedValue = void 0, this._render();
			return;
		}
		let a = e.getContentValue(this._dictionaryKey, n);
		if (typeof a == "object" && a && a.nodeType === "translation") {
			let n = e.currentLocale.value;
			a = n ? a[t][n] : void 0;
		}
		this._editedValue = a, this._render();
	}
	_updateIsSelected(e) {
		if (!e) {
			this._isSelected = !1, this._updateSelectorAttr();
			return;
		}
		let t = this._getFilteredKeyPath(), n = this._isSelected;
		this._isSelected = e.dictionaryKey === this._dictionaryKey && (e.keyPath?.length ?? 0) > 0 && i(e.keyPath ?? [], t), this._updateSelectorAttr(), this._isSelected && !n && this._scrollIntoViewIfNeeded();
	}
	_scrollIntoViewIfNeeded() {
		try {
			let e;
			if (this._selector) {
				let t = this._selector.shadowRoot?.querySelector(".wrapper");
				if (t) {
					let n = t.getBoundingClientRect();
					(n.width > 0 || n.height > 0) && (e = n);
				}
			}
			if (!e && this.childNodes.length > 0) {
				let t = document.createRange();
				t.selectNodeContents(this);
				let n = t.getBoundingClientRect();
				(n.width > 0 || n.height > 0) && (e = n);
			}
			e ||= this.getBoundingClientRect();
			let t = window.innerHeight || document.documentElement.clientHeight, n = window.innerWidth || document.documentElement.clientWidth;
			if (!(e.width > 0 && e.height > 0 && e.bottom > 0 && e.right > 0 && e.top < t && e.left < n)) {
				let n = window.scrollY ?? document.documentElement.scrollTop, r = e.top + n - t * .25;
				window.scrollTo({
					top: Math.max(0, r),
					behavior: "smooth"
				});
			}
		} catch {}
	}
	_updateSelectorAttr() {
		this._selector && (this._isSelected ? this._selector.setAttribute("is-selecting", "") : this._selector.removeAttribute("is-selecting"));
	}
	_subscribeToManager() {
		let e = p();
		e && this._setupManagerSubscriptions(e), this._unsubManager = h((e) => {
			this._unsubEnabled?.(), this._unsubFocused?.(), this._unsubEditedContent?.(), this._unsubEnabled = null, this._unsubFocused = null, this._unsubEditedContent = null, e ? this._setupManagerSubscriptions(e) : (this._editorEnabled = !1, this._isSelected = !1, this._editedValue = void 0, this._render());
		});
	}
	_setupManagerSubscriptions(e) {
		this._editorEnabled = e.editorEnabled.value ?? !1, this._updateIsSelected(e.focusedContent.value), this._updateEditedValue(e);
		let t = (e) => {
			this._editorEnabled = e.detail, this._render();
		}, n = (e) => {
			this._updateIsSelected(e.detail);
		}, r = () => {
			this._updateEditedValue(e);
		};
		e.editorEnabled.addEventListener("change", t), e.focusedContent.addEventListener("change", n), e.editedContent.addEventListener("change", r), this._unsubEnabled = () => e.editorEnabled.removeEventListener("change", t), this._unsubFocused = () => e.focusedContent.removeEventListener("change", n), this._unsubEditedContent = () => e.editedContent.removeEventListener("change", r);
	}
	_handlePress(e) {
		e.stopPropagation();
		let t = p();
		t && t.focusedContent.set({
			dictionaryKey: this._dictionaryKey,
			keyPath: this._getFilteredKeyPath()
		});
	}
	_handleHover(e) {
		e.stopPropagation(), p()?.messenger.send("INTLAYER_HOVERED_CONTENT_CHANGED/post", {
			dictionaryKey: this._dictionaryKey,
			keyPath: this._getFilteredKeyPath()
		});
	}
	_handleUnhover(e) {
		e.stopPropagation(), p()?.messenger.send("INTLAYER_HOVERED_CONTENT_CHANGED/post", null);
	}
	_render() {
		let e = this._isInIframe && this._editorEnabled, t = this._editedValue, n = e ? typeof t == "string" || typeof t == "number" || typeof t == "boolean" ? "wrapped-text" : "wrapped-slot" : "simple";
		if (this._renderState !== n) {
			this._rebuildContent(n);
			return;
		}
		n !== "simple" && this._selector && (this._updateSelectorAttr(), n === "wrapped-text" && this._selector.firstChild?.nodeType === Node.TEXT_NODE && (this._selector.firstChild.data = String(t)));
	}
	_rebuildContent(e) {
		let t = this.shadowRoot;
		for (; t.childNodes.length > 1;) t.removeChild(t.lastChild);
		if (this._selector = null, e === "simple") t.appendChild(document.createElement("slot"));
		else {
			let n = document.createElement("intlayer-content-selector");
			this._selector = n, this._isSelected && n.setAttribute("is-selecting", ""), n.addEventListener("intlayer:press", (e) => this._handlePress(e)), n.addEventListener("intlayer:hover", (e) => this._handleHover(e)), n.addEventListener("intlayer:unhover", (e) => this._handleUnhover(e)), e === "wrapped-text" ? n.appendChild(document.createTextNode(String(this._editedValue))) : n.appendChild(document.createElement("slot")), t.appendChild(n);
		}
		this._renderState = e;
	}
}, v = () => {
	typeof customElements > "u" || customElements.get("intlayer-content-selector-wrapper") || customElements.define("intlayer-content-selector-wrapper", _);
}, y = typeof HTMLElement < "u" ? HTMLElement : class {}, b = class extends y {
	_dictionaryKey = "";
	_keyPathJson = "[]";
	_locale = "";
	_editedText = null;
	_unsubManager = null;
	_unsubEditedContent = null;
	_selectorWrapper;
	_slot;
	static get observedAttributes() {
		return [
			"dictionary-key",
			"key-path",
			"locale"
		];
	}
	get dictionaryKey() {
		return this._dictionaryKey;
	}
	set dictionaryKey(e) {
		this._dictionaryKey = e, this._selectorWrapper.setAttribute("dictionary-key", e);
	}
	get keyPathJson() {
		return this._keyPathJson;
	}
	set keyPathJson(e) {
		this._keyPathJson = e, this._selectorWrapper.setAttribute("key-path", e);
	}
	get locale() {
		return this._locale;
	}
	set locale(e) {
		this._locale = e;
	}
	constructor() {
		super();
		let e = this.attachShadow({ mode: "open" }), t = document.createElement("style");
		t.textContent = ":host { display: contents; }", e.appendChild(t), this._selectorWrapper = document.createElement("intlayer-content-selector-wrapper"), this._slot = document.createElement("slot"), this._selectorWrapper.appendChild(this._slot), e.appendChild(this._selectorWrapper);
	}
	attributeChangedCallback(e, t, n) {
		let r = n ?? "";
		e === "dictionary-key" ? (this._dictionaryKey = r, this._selectorWrapper.setAttribute("dictionary-key", r)) : e === "key-path" ? (this._keyPathJson = r || "[]", this._selectorWrapper.setAttribute("key-path", this._keyPathJson)) : e === "locale" && (this._locale = r);
	}
	connectedCallback() {
		this._subscribeToManager();
	}
	disconnectedCallback() {
		this._teardown();
	}
	_teardown() {
		this._unsubManager?.(), this._unsubEditedContent?.(), this._unsubManager = null, this._unsubEditedContent = null;
	}
	_getKeyPath() {
		try {
			return JSON.parse(this._keyPathJson);
		} catch {
			return [];
		}
	}
	_render() {
		for (; this._selectorWrapper.firstChild;) this._selectorWrapper.removeChild(this._selectorWrapper.firstChild);
		this._editedText === null ? this._selectorWrapper.appendChild(this._slot) : this._selectorWrapper.appendChild(document.createTextNode(this._editedText));
	}
	_resolveEditedText(e) {
		let t = this._getKeyPath(), i = e.getContentValue(this._dictionaryKey, t);
		if (i == null) {
			this._editedText = null, this._render();
			return;
		}
		if (typeof i == "string" || typeof i == "number") {
			this._editedText = String(i), this._render();
			return;
		}
		if (typeof i == "object") {
			let e = this._locale || void 0, a = n(i, {
				locale: e,
				dictionaryKey: this._dictionaryKey,
				keyPath: t
			}, r(e));
			typeof a == "string" || typeof a == "number" ? this._editedText = String(a) : (console.error(`[intlayer-edited-content] Incorrect edited content format. Expected string. Value: ${JSON.stringify(a)}`), this._editedText = null), this._render();
			return;
		}
		this._editedText = null, this._render();
	}
	_setupManagerSubscriptions(e) {
		this._resolveEditedText(e);
		let t = () => this._resolveEditedText(e);
		e.editedContent.addEventListener("change", t), this._unsubEditedContent = () => e.editedContent.removeEventListener("change", t);
	}
	_subscribeToManager() {
		let e = p();
		e && this._setupManagerSubscriptions(e), this._unsubManager = h((e) => {
			this._unsubEditedContent?.(), this._unsubEditedContent = null, e ? this._setupManagerSubscriptions(e) : (this._editedText = null, this._render());
		});
	}
}, x = () => {
	typeof customElements > "u" || customElements.get("intlayer-edited-content") || customElements.define("intlayer-edited-content", b);
}, S = () => Math.random().toString(36).slice(2), C = class {
	senderId;
	_config;
	_subscribers = /* @__PURE__ */ new Map();
	_windowHandler = null;
	_seenMessageIds = /* @__PURE__ */ new Set();
	_warnedRejectedOrigins = /* @__PURE__ */ new Set();
	constructor(e) {
		this._config = e, this.senderId = S();
	}
	start() {
		typeof window > "u" || this._windowHandler || (this._windowHandler = (e) => {
			this._handleMessage(e);
		}, window.addEventListener("message", this._windowHandler));
	}
	stop() {
		this._windowHandler &&= (window.removeEventListener("message", this._windowHandler), null);
	}
	send(e, t) {
		let n = {
			type: e,
			data: t,
			senderId: this.senderId,
			messageId: S()
		};
		for (let e of this._config.allowedOrigins) e && this._config.postMessageFn(n, e);
	}
	subscribe(e, t) {
		return this._subscribers.has(e) || this._subscribers.set(e, /* @__PURE__ */ new Set()), this._subscribers.get(e).add(t), () => {
			this._subscribers.get(e)?.delete(t);
		};
	}
	_handleMessage(e) {
		let t = e.data;
		if (!t || typeof t != "object") return;
		let { type: n, data: r, senderId: i, messageId: a } = t;
		if (!n || typeof n != "string" || i === this.senderId) return;
		if (a) {
			if (this._seenMessageIds.has(a)) return;
			this._seenMessageIds.add(a), this._seenMessageIds.size > 200 && this._seenMessageIds.clear();
		}
		let { allowedOrigins: o } = this._config;
		if (!(!o || o.length === 0 || o.includes("*") || o.filter((e) => !!e && e !== "").some((t) => c(t, e.origin)))) {
			n.startsWith("INTLAYER") && !this._warnedRejectedOrigins.has(e.origin) && (this._warnedRejectedOrigins.add(e.origin), console.warn(`[intlayer] Ignored editor message "${n}" from origin "${e.origin}" — not in allowed origins [${o.join(", ")}]. Check the editor.editorURL / editor.cmsURL configuration.`));
			return;
		}
		let s = this._subscribers.get(n);
		if (s) for (let e of s) e(r, i);
	}
}, w = class extends EventTarget {
	_value;
	_key;
	_messenger;
	_options;
	_unsubscribers = [];
	constructor(e, t, n = {}) {
		super(), this._key = e, this._messenger = t, this._options = {
			emit: n.emit ?? !0,
			receive: n.receive ?? !0
		}, n.initialValue !== void 0 && (this._value = n.initialValue);
	}
	get value() {
		return this._value;
	}
	set(e) {
		let t = typeof e == "function" ? e(this._value) : e;
		this._value = t, this.dispatchEvent(new CustomEvent("change", { detail: t })), this._options.emit && this._messenger.send(`${this._key}/post`, t);
	}
	start() {
		if (this._options.receive) {
			let e = this._messenger.subscribe(`${this._key}/post`, (e) => {
				this._value = e, this.dispatchEvent(new CustomEvent("change", { detail: e }));
			});
			this._unsubscribers.push(e);
		}
		if (this._options.emit) {
			let e = this._messenger.subscribe(`${this._key}/get`, (e, t) => {
				t !== this._messenger.senderId && this._value !== void 0 && this._messenger.send(`${this._key}/post`, this._value);
			});
			this._unsubscribers.push(e);
		}
		this._options.receive && this._value === void 0 && this._messenger.send(`${this._key}/get`);
	}
	stop() {
		for (let e of this._unsubscribers) e();
		this._unsubscribers.length = 0;
	}
	postCurrentValue() {
		this._value !== void 0 && this._messenger.send(`${this._key}/post`, this._value);
	}
}, T = "__intlayer_edited_content_bus__", E = "__intlayer_edited_content_bus_events__", D = () => {
	if (typeof window > "u") return new EventTarget();
	let e = window;
	return e[E] || (e[E] = new EventTarget()), e[E];
}, O = () => typeof window > "u" ? {} : window[T] ?? {}, k = (e, t) => {
	typeof window < "u" && (window[T] = e), D().dispatchEvent(new CustomEvent("change", { detail: {
		content: e,
		sourceId: t
	} }));
}, A = (e) => {
	let t = (t) => {
		let { content: n, sourceId: r } = t.detail;
		e(n, r);
	}, n = D();
	return n.addEventListener("change", t), () => n.removeEventListener("change", t);
}, j = "__intlayer_focused_content_bus__", M = "__intlayer_focused_content_bus_events__", N = () => {
	if (typeof window > "u") return new EventTarget();
	let e = window;
	return e[M] || (e[M] = new EventTarget()), e[M];
}, P = () => {
	if (typeof window > "u") return;
	let e = window;
	if (e.__intlayer_focused_content_bus_set__) return e[j] ?? null;
}, F = (e, t) => {
	if (typeof window < "u") {
		let t = window;
		t[j] = e, t.__intlayer_focused_content_bus_set__ = !0;
	}
	N().dispatchEvent(new CustomEvent("change", { detail: {
		content: e,
		sourceId: t
	} }));
}, I = (e) => {
	let t = (t) => {
		let { content: n, sourceId: r } = t.detail;
		e(n, r);
	}, n = N();
	return n.addEventListener("change", t), () => n.removeEventListener("change", t);
}, L = class {
	_messenger;
	_mousedownHandler = null;
	_unsubscribeMerge = null;
	constructor(e) {
		this._messenger = e;
	}
	startInterceptor() {
		typeof window > "u" || (this._mousedownHandler = () => {
			this._messenger.send("INTLAYER_IFRAME_CLICKED");
		}, window.addEventListener("mousedown", this._mousedownHandler));
	}
	startMerger() {
		this._unsubscribeMerge = this._messenger.subscribe("INTLAYER_IFRAME_CLICKED", l);
	}
	stopInterceptor() {
		this._mousedownHandler &&= (window.removeEventListener("mousedown", this._mousedownHandler), null);
	}
	stopMerger() {
		this._unsubscribeMerge?.(), this._unsubscribeMerge = null;
	}
}, R = class {
	_messenger;
	_originalPushState = null;
	_originalReplaceState = null;
	_listeners = [];
	constructor(e) {
		this._messenger = e;
	}
	start() {
		if (typeof window > "u") return;
		let e = () => {
			this._messenger.send("INTLAYER_URL_CHANGE/post", window.location.pathname);
		};
		this._originalPushState = history.pushState, this._originalReplaceState = history.replaceState;
		let t = (e) => function(...t) {
			e.apply(this, t), window.dispatchEvent(new Event("locationchange"));
		};
		history.pushState = t(this._originalPushState), history.replaceState = t(this._originalReplaceState);
		for (let t of [
			"locationchange",
			"popstate",
			"hashchange",
			"load"
		]) {
			let n = e;
			window.addEventListener(t, n), this._listeners.push([t, n]);
		}
		e();
	}
	stop() {
		if (!(typeof window > "u")) {
			for (let [e, t] of this._listeners) window.removeEventListener(e, t);
			this._listeners = [], this._originalPushState &&= (history.pushState = this._originalPushState, null), this._originalReplaceState &&= (history.replaceState = this._originalReplaceState, null);
		}
	}
}, z = class {
	messenger;
	editorEnabled;
	focusedContent;
	localeDictionaries;
	editedContent;
	configuration;
	currentLocale;
	displayedDictionaryKeys;
	_urlManager;
	_iframeInterceptor;
	_mode;
	_configuration;
	_unsubAreYouThere = null;
	_unsubActivate = null;
	_unsubClientReady = null;
	_displayedKeysObserver = null;
	_displayedKeysTimer = null;
	_displayedKeysListeners = [];
	_editedContentFromBus = !1;
	_unsubGlobalEditedContent = null;
	_editedContentBusHandler = null;
	_focusedContentFromBus = !1;
	_unsubGlobalFocusedContent = null;
	_focusedContentBusHandler = null;
	constructor(e) {
		this._mode = e.mode, this._configuration = e.configuration, this.messenger = new C(e.messenger), this.editorEnabled = new w("INTLAYER_EDITOR_ENABLED", this.messenger, {
			emit: !1,
			receive: !0,
			initialValue: !1
		}), this.focusedContent = new w("INTLAYER_FOCUSED_CONTENT_CHANGED", this.messenger, {
			emit: !0,
			receive: !0,
			initialValue: null
		}), this.localeDictionaries = new w("INTLAYER_LOCALE_DICTIONARIES_CHANGED", this.messenger), this.editedContent = new w("INTLAYER_EDITED_CONTENT_CHANGED", this.messenger), this.configuration = new w("INTLAYER_CONFIGURATION", this.messenger, {
			emit: !0,
			receive: !1,
			...e.configuration ? { initialValue: e.configuration } : {}
		}), this.currentLocale = new w("INTLAYER_CURRENT_LOCALE", this.messenger, {
			emit: e.mode === "client",
			receive: e.mode === "editor"
		}), this.displayedDictionaryKeys = new w("INTLAYER_DISPLAYED_DICTIONARY_KEYS", this.messenger, {
			emit: e.mode === "client",
			receive: e.mode === "editor",
			initialValue: []
		}), this._urlManager = new R(this.messenger), this._iframeInterceptor = new L(this.messenger);
	}
	start() {
		this.messenger.start(), this.editorEnabled.start(), this.focusedContent.start(), this.localeDictionaries.start(), this.editedContent.start(), this.configuration.start(), this.currentLocale.start(), this.displayedDictionaryKeys.start(), this._startEditedContentBusSync(), this._startFocusedContentBusSync(), this._mode === "client" ? (this._urlManager.start(), this._iframeInterceptor.startInterceptor(), this._loadDictionaries(), this._startDisplayedDictionariesTracking(), this.messenger.send("INTLAYER_EDITED_CONTENT_CHANGED/get"), this._configuration?.editor?.enabled !== !1 && this._setupActivationHandshake()) : (this._iframeInterceptor.startMerger(), this._setupEditorHandshake());
	}
	stop() {
		this._unsubAreYouThere?.(), this._unsubActivate?.(), this._unsubClientReady?.(), this._unsubAreYouThere = null, this._unsubActivate = null, this._unsubClientReady = null, this.messenger.stop(), this.editorEnabled.stop(), this.focusedContent.stop(), this.localeDictionaries.stop(), this.editedContent.stop(), this.configuration.stop(), this.currentLocale.stop(), this.displayedDictionaryKeys.stop(), this._stopDisplayedDictionariesTracking(), this._stopEditedContentBusSync(), this._stopFocusedContentBusSync(), this._urlManager.stop(), this._iframeInterceptor.stopInterceptor(), this._iframeInterceptor.stopMerger();
	}
	pingClient() {
		this._mode === "editor" && this.messenger.send("INTLAYER_ARE_YOU_THERE");
	}
	setFocusedContentKeyPath(e) {
		let n = e.filter((e) => e.type !== t), r = this.focusedContent.value;
		r && this.focusedContent.set({
			...r,
			keyPath: n
		});
	}
	setLocaleDictionary(e) {
		if (!e.localId) return;
		let t = this.localeDictionaries.value ?? {};
		this.localeDictionaries.set({
			...t,
			[e.localId]: e
		});
	}
	setEditedDictionary(e) {
		if (!e.localId) {
			console.error("setEditedDictionary: missing localId", e);
			return;
		}
		let t = this.editedContent.value ?? {};
		this.editedContent.set({
			...t,
			[e.localId]: e
		});
	}
	setEditedContent(e, t) {
		let n = this.editedContent.value ?? {};
		this.editedContent.set({
			...n,
			[e]: {
				...n[e],
				content: t
			}
		});
	}
	addContent(e, t, n = [], r = !0) {
		let i = this.editedContent.value ?? {}, s = (this.localeDictionaries.value ?? {})[e]?.content, c = structuredClone(i[e]?.content ?? s), l = n;
		if (!r) {
			let e = 0, t = n.slice(0, -1), r = n[n.length - 1], i = r.key;
			for (; o(c, l) !== void 0;) e++, i = e === 0 ? r.key : `${r.key} (${e})`, l = [...t, {
				...r,
				key: i
			}];
		}
		let u = a(c, l, t);
		this.editedContent.set({
			...i,
			[e]: {
				...i[e],
				content: u
			}
		});
	}
	renameContent(e, t, n = []) {
		let r = this.editedContent.value ?? {}, i = (this.localeDictionaries.value ?? {})[e]?.content, a = s(structuredClone(r[e]?.content ?? i), t, n);
		this.editedContent.set({
			...r,
			[e]: {
				...r[e],
				content: a
			}
		});
	}
	removeContent(e, t) {
		let n = this.editedContent.value ?? {}, r = (this.localeDictionaries.value ?? {})[e]?.content, i = a(structuredClone(n[e]?.content ?? r), t, o(r, t));
		this.editedContent.set({
			...n,
			[e]: {
				...n[e],
				content: i
			}
		});
	}
	restoreContent(e) {
		let t = { ...this.editedContent.value ?? {} };
		delete t[e], this.editedContent.set(t);
	}
	clearContent(e) {
		let t = { ...this.editedContent.value ?? {} };
		delete t[e], this.editedContent.set(t);
	}
	clearAllContent() {
		this.editedContent.set({});
	}
	getContentValue(e, n) {
		let r = this.editedContent.value;
		if (!r) return;
		let i = n.filter((e) => e.type !== t), a = this.localeDictionaries.value;
		if (e.includes(":local:") || e.includes(":remote:")) return a && !(e in a) ? void 0 : o(r[e]?.content ?? {}, i, this.currentLocale.value);
		let s = Object.keys(r).filter((t) => t.startsWith(`${e}:`) && (!a || t in a));
		for (let e of s) {
			let t = o(r[e]?.content ?? {}, i, this.currentLocale.value);
			if (t) return t;
		}
	}
	_startEditedContentBusSync() {
		this._editedContentBusHandler = (e) => {
			if (this._editedContentFromBus) return;
			let t = e.detail;
			k(t, this.messenger.senderId);
		}, this.editedContent.addEventListener("change", this._editedContentBusHandler), this._unsubGlobalEditedContent = A((e, t) => {
			t !== this.messenger.senderId && (this._editedContentFromBus = !0, this.editedContent.set(e), this._editedContentFromBus = !1);
		});
		let e = O();
		Object.keys(e).length > 0 && (this._editedContentFromBus = !0, this.editedContent.set(e), this._editedContentFromBus = !1);
	}
	_stopEditedContentBusSync() {
		this._editedContentBusHandler &&= (this.editedContent.removeEventListener("change", this._editedContentBusHandler), null), this._unsubGlobalEditedContent?.(), this._unsubGlobalEditedContent = null;
	}
	_startFocusedContentBusSync() {
		this._focusedContentBusHandler = (e) => {
			if (this._focusedContentFromBus) return;
			let t = e.detail;
			F(t, this.messenger.senderId);
		}, this.focusedContent.addEventListener("change", this._focusedContentBusHandler), this._unsubGlobalFocusedContent = I((e, t) => {
			t !== this.messenger.senderId && (this._focusedContentFromBus = !0, this.focusedContent.set(e), this._focusedContentFromBus = !1);
		});
		let e = P();
		e !== void 0 && (this._focusedContentFromBus = !0, this.focusedContent.set(e), this._focusedContentFromBus = !1);
	}
	_stopFocusedContentBusSync() {
		this._focusedContentBusHandler &&= (this.focusedContent.removeEventListener("change", this._focusedContentBusHandler), null), this._unsubGlobalFocusedContent?.(), this._unsubGlobalFocusedContent = null;
	}
	_scanDisplayedDictionaryKeys() {
		if (typeof document > "u") return;
		let e = document.querySelectorAll("intlayer-content-selector-wrapper[dictionary-key]"), t = Array.from(new Set(Array.from(e).map((e) => e.getAttribute("dictionary-key") ?? "").filter(Boolean)));
		this.displayedDictionaryKeys.set(t);
	}
	_startDisplayedDictionariesTracking() {
		if (typeof document > "u" || typeof MutationObserver > "u") return;
		let e = () => {
			this._displayedKeysTimer && clearTimeout(this._displayedKeysTimer), this._displayedKeysTimer = setTimeout(() => this._scanDisplayedDictionaryKeys(), 100);
		};
		this._displayedKeysObserver = new MutationObserver(e), this._displayedKeysObserver.observe(document.body, {
			childList: !0,
			subtree: !0
		});
		for (let t of ["locationchange", "popstate"]) {
			let n = e;
			window.addEventListener(t, n), this._displayedKeysListeners.push([t, n]);
		}
		this._scanDisplayedDictionaryKeys();
	}
	_stopDisplayedDictionariesTracking() {
		this._displayedKeysObserver?.disconnect(), this._displayedKeysObserver = null, this._displayedKeysTimer &&= (clearTimeout(this._displayedKeysTimer), null);
		for (let [e, t] of this._displayedKeysListeners) window.removeEventListener(e, t);
		this._displayedKeysListeners = [];
	}
	_setupEditorHandshake() {
		this._unsubClientReady = this.messenger.subscribe("INTLAYER_CLIENT_READY", () => {
			this.editorEnabled.set(!0), this.messenger.send("INTLAYER_EDITOR_ACTIVATE");
		}), this.messenger.send("INTLAYER_ARE_YOU_THERE");
	}
	_setupActivationHandshake() {
		this.messenger.send("INTLAYER_CLIENT_READY"), this._unsubAreYouThere = this.messenger.subscribe("INTLAYER_ARE_YOU_THERE", () => {
			this.messenger.send("INTLAYER_CLIENT_READY");
		}), this._unsubActivate = this.messenger.subscribe("INTLAYER_EDITOR_ACTIVATE", () => {
			this.editorEnabled.set(!0), this._broadcastData();
		});
	}
	_broadcastData() {
		let e = this.configuration.value;
		e && this.messenger.send("INTLAYER_CONFIGURATION/post", e);
		let t = this.currentLocale.value;
		t && this.messenger.send("INTLAYER_CURRENT_LOCALE/post", t);
		let n = this.localeDictionaries.value;
		n && this.messenger.send("INTLAYER_LOCALE_DICTIONARIES_CHANGED/post", n);
	}
	async _loadDictionaries() {
		try {
			let e = (await import("./index.browser-Z0jb8xnv.js")).getUnmergedDictionaries(), t = Object.fromEntries(Object.values(e).flat().map((e) => [e.localId, e]));
			this.localeDictionaries.set(t), this.editorEnabled.value && this._broadcastData();
		} catch (e) {
			console.warn("[intlayer] Failed to load unmerged dictionaries:", e);
		}
	}
}, B = typeof HTMLElement < "u" ? HTMLElement : class {}, V = class extends B {
	_configuration = void 0;
	_locale = void 0;
	_initialized = !1;
	_unsubManager = null;
	static get observedAttributes() {
		return ["locale"];
	}
	get configuration() {
		return this._configuration;
	}
	set configuration(e) {
		this._configuration = e, this._initialized || this._init();
	}
	get locale() {
		return this._locale;
	}
	set locale(e) {
		this._locale = e, e && this._initialized && this._syncLocale(e);
	}
	attributeChangedCallback(e, t, n) {
		e === "locale" && n !== null && (this._locale = n, this._initialized && this._syncLocale(n));
	}
	connectedCallback() {
		this._init();
	}
	disconnectedCallback() {
		this._unsubManager?.(), this._unsubManager = null, this._initialized &&= (Z(), !1);
	}
	_init() {
		this._initialized || (X(), this._initialized = !0, this._locale && this._syncLocale(this._locale));
	}
	_syncLocale(e) {
		let t = p();
		t ? t.currentLocale.set(e) : (this._unsubManager?.(), this._unsubManager = h((t) => {
			t && (this._unsubManager?.(), this._unsubManager = null, t.currentLocale.set(e));
		}));
	}
}, H = () => {
	typeof customElements > "u" || customElements.get("intlayer-editor") || customElements.define("intlayer-editor", V);
}, U = 250, W = "\n  :host {\n    display: contents;\n  }\n\n  .wrapper {\n    display: inline-block;\n    cursor: pointer;\n    user-select: none;\n    border-radius: 0.375rem;\n    outline-width: 2px;\n    outline-offset: 4px;\n    outline-style: solid;\n    outline-color: transparent;\n    transition: all 100ms 50ms ease-in-out;\n  }\n\n  .wrapper[data-active] {\n    outline-color: inherit;\n  }\n", G = typeof HTMLElement < "u" ? HTMLElement : class {}, K = class extends G {
	_isSelecting = !1;
	_pressDuration = U;
	_isHovered = !1;
	_isSelectingState = !1;
	_wrapper;
	_pressTimer = null;
	_clickOutsideHandler = null;
	static get observedAttributes() {
		return ["is-selecting", "press-duration"];
	}
	get isSelecting() {
		return this._isSelecting;
	}
	set isSelecting(e) {
		this._isSelecting = e, this._updateActiveState();
	}
	get pressDuration() {
		return this._pressDuration;
	}
	set pressDuration(e) {
		this._pressDuration = e;
	}
	constructor() {
		super();
		let e = this.attachShadow({ mode: "open" }), t = document.createElement("style");
		t.textContent = W, e.appendChild(t);
		let n = document.createElement("span");
		n.className = "wrapper", n.setAttribute("role", "button"), n.setAttribute("tabindex", "0"), n.appendChild(document.createElement("slot")), e.appendChild(n), this._wrapper = n, n.addEventListener("mousedown", () => this._handleMouseDown()), n.addEventListener("mouseup", () => this._handleMouseUpOrLeave()), n.addEventListener("mouseleave", () => this._handleMouseUpOrLeave()), n.addEventListener("mouseenter", () => this._handleMouseEnter()), n.addEventListener("click", (e) => this._handleClick(e)), n.addEventListener("touchstart", () => this._handleMouseDown()), n.addEventListener("touchend", () => this._handleMouseUpOrLeave()), n.addEventListener("touchcancel", () => this._handleMouseUpOrLeave()), n.addEventListener("blur", () => this._handleBlur());
	}
	attributeChangedCallback(e, t, n) {
		e === "is-selecting" ? (this._isSelecting = n !== null, this._updateActiveState()) : e === "press-duration" && (this._pressDuration = n === null ? U : parseInt(n, 10));
	}
	connectedCallback() {
		this._clickOutsideHandler = (e) => {
			e.composedPath().includes(this) || (this._isSelectingState = !1, this._dispatch("intlayer:click-outside"), this._updateActiveState());
		}, document.addEventListener("mousedown", this._clickOutsideHandler);
	}
	disconnectedCallback() {
		this._clickOutsideHandler &&= (document.removeEventListener("mousedown", this._clickOutsideHandler), null), this._clearPressTimer();
	}
	_updateActiveState() {
		this._isSelecting || this._isSelectingState || this._isHovered ? this._wrapper.setAttribute("data-active", "") : this._wrapper.removeAttribute("data-active");
	}
	_clearPressTimer() {
		this._pressTimer !== null && (clearTimeout(this._pressTimer), this._pressTimer = null);
	}
	_dispatch(e) {
		this.dispatchEvent(new CustomEvent(e, {
			bubbles: !0,
			composed: !0
		}));
	}
	_handleMouseDown() {
		this._clearPressTimer(), this._pressTimer = setTimeout(() => {
			this._isSelectingState = !0, this._updateActiveState(), this._dispatch("intlayer:press");
		}, this._pressDuration);
	}
	_handleMouseEnter() {
		this._isHovered = !0, this._updateActiveState(), this._dispatch("intlayer:hover");
	}
	_handleMouseUpOrLeave() {
		this._isHovered && (this._isHovered = !1, this._dispatch("intlayer:unhover")), this._clearPressTimer(), this._updateActiveState();
	}
	_handleClick(e) {
		(this._isSelecting || this._isSelectingState) && (e.preventDefault(), e.stopPropagation());
	}
	_handleBlur() {
		this._isSelectingState = !1, this._updateActiveState();
	}
}, q = () => {
	typeof customElements > "u" || (customElements.get("intlayer-content-selector") || customElements.define("intlayer-content-selector", K), v(), x(), H());
}, J = () => {
	let t = typeof window < "u" ? window.location.origin : void 0;
	return {
		allowedOrigins: [...new Set([
			e?.editorURL,
			e?.cmsURL,
			t
		].filter(Boolean))],
		postMessageFn: (e, t) => {
			typeof window > "u" || window.self !== window.top && window.parent?.postMessage(e, t);
		}
	};
}, Y = 0, X = () => {
	Y++;
	let t = p();
	if (t) return t;
	let n = new z({
		mode: "client",
		messenger: J(),
		configuration: { editor: e }
	});
	return m(n), q(), n.start(), n;
}, Z = () => {
	Y = Math.max(0, Y - 1), !(Y > 0) && (p()?.stop(), m(null));
};
export { X as initEditorClient, Z as stopEditorClient };
import { c as e, i as t, r as n, s as r } from "./built-BvRk9kiK.js";
var i = "translation", a = "enumeration", o = "plural", s = "condition", c = "insertion", l = "file", u = "object", d = "array", f = "nested", ee = "reactNode", p = "markdown", m = "html", h = "gender", g = "select", _ = (e, t, n) => ({
	...n,
	nodeType: e,
	[e]: t
}), v = (e, t) => {
	for (let n of t.plugins ?? []) if (n.canHandle(e)) return n.transform(e, t, (e, t) => v(e, t));
	if (typeof e != "object" || !e || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0 || typeof e == "function") return e;
	if (Array.isArray(e)) return e.map((e, n) => v(e, {
		...t,
		children: e,
		keyPath: [...t.keyPath, {
			type: d,
			key: n
		}]
	}));
	let n = {};
	for (let r in e) {
		let i = {
			...t,
			children: e[r],
			keyPath: [...t.keyPath, {
				type: u,
				key: r
			}]
		};
		if (t.eager) {
			n[r] = v(e[r], i);
			continue;
		}
		Object.defineProperty(n, r, {
			enumerable: !0,
			configurable: !0,
			get: function() {
				let t = v(e[r], i);
				return Object.defineProperty(this, r, {
					value: t,
					enumerable: !0,
					configurable: !0
				}), t;
			}
		});
	}
	return n;
}, te = (e, t) => {
	let n = Object.keys(e);
	for (let e of n) {
		let n = !e.startsWith(">") && !e.startsWith("<") && !e.startsWith("=") && parseFloat(e) === t || e.startsWith("=") && parseFloat(e.slice(1)) === t, r = e.startsWith(">") && t > parseFloat(e.slice(1)), i = e.startsWith(">=") && t >= parseFloat(e.slice(2)), a = e.startsWith("<") && t < parseFloat(e.slice(1)), o = e.startsWith("<=") && t <= parseFloat(e.slice(2));
		if (n || r || i || a || o) return e;
	}
}, y = (e, t) => e[te(e, t) ?? "fallback"], b = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[t] ?? e.fallback ?? e.other ?? e[r];
}, x = /* @__PURE__ */ new WeakMap(), S = 0, C = (e) => {
	if (!e) return "base";
	let t = x.get(e);
	if (t) return t;
	S += 1;
	let n = `p${S}`;
	return x.set(e, n), n;
}, ne = 256, w = /* @__PURE__ */ new WeakMap(), T = (e) => typeof e == "object" && !!e, re = (e, t, n) => `${e}_${t}_${C(n)}`, ie = (e, t) => {
	if (!T(e)) return { hit: !1 };
	let n = w.get(e);
	return n?.has(t) ? {
		hit: !0,
		content: n.get(t)
	} : { hit: !1 };
}, E = (e, t, n) => {
	if (!T(e)) return n;
	let r = w.get(e);
	return r || (r = /* @__PURE__ */ new Map(), w.set(e, r)), r.size >= ne && r.clear(), r.set(t, n), n;
}, D = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[`${t}`] ?? e.fallback ?? e[r];
}, O = (e) => e === "m" || e === "male" ? "male" : e === "f" || e === "female" ? "female" : "fallback", k = (e, t) => {
	let n = Object.keys(e), r = n[n.length - 1];
	return e[O(t)] ?? e.fallback ?? e[r];
}, A = (e, t) => e.replace(/\{\{\s*(.*?)\s*\}\}/g, (e, n) => (t[n.trim()] ?? "").toString()), j = "default", ae = /[^A-Za-z0-9._&=-]/g, M = /[^A-Za-z0-9._-]/g, oe = (e) => `%${e.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`, N = (e, t) => {
	if (e === "") return "%";
	let n = e.replace(t, oe);
	return n === "." || n === ".." ? n.replace(/\./g, "%002E") : n;
}, P = (e) => e === void 0 ? j : typeof e == "string" ? N(e, ae) : Object.keys(e).sort().map((t) => `${N(t, M)}=${N(String(e[t]), M)}`).join("&"), F = (e) => Array.isArray(e) ? e.length === 0 ? [j] : e.map(P) : [P(e)], se = (e, t) => {
	for (let n of e) if (t(n)) return n;
	return t("default") ? j : e[0] ?? "default";
}, I = (e, t, n, r) => {
	let i = e.split("/");
	return t.every((e, t) => e === "variant" ? i[t] === r : n?.item === void 0 || i[t] === String(n.item));
}, L = (e) => typeof e == "object" && !!e && "qualifierTypes" in e && Array.isArray(e.qualifierTypes) && "content" in e, R = (e, t) => {
	let n = t.split("/"), r = {
		key: e.key,
		content: e.content[t]
	};
	return e.qualifierTypes.forEach((e, t) => {
		e === "variant" ? r.variant = n[t] : e === "item" && (r.item = Number(n[t]));
	}), r;
}, z = (e, t) => {
	if (!L(e)) return e;
	let { qualifierTypes: n, content: r } = e, i = n.includes("item") && t?.item === void 0, a = Object.keys(r), o = n.indexOf("variant"), s = o === -1 ? j : se(F(t?.variant), (e) => a.some((t) => t.split("/")[o] === e)), c = a.filter((e) => I(e, n, t, s)).map((t) => R(e, t));
	return i ? c.sort((e, t) => (e.item ?? 0) - (t.item ?? 0)) : c[0] ?? null;
}, B = (e) => typeof e == "object" && e ? {
	locale: e.locale,
	selector: e
} : { locale: e }, V = (e) => e ? Object.keys(e).filter((e) => e !== "locale").sort().map((t) => {
	let n = e[t];
	return `${t}:${t === "variant" ? F(n).join(",") : String(n)}`;
}).join("|") : "", H = () => ({}), U = /* @__PURE__ */ new Set([
	"hasOwnProperty",
	"isPrototypeOf",
	"propertyIsEnumerable",
	"toLocaleString"
]), W = (e = "") => new Proxy((() => e), { get: (t, n) => n === "toJSON" || n === Symbol.toPrimitive || n === "toString" || n === "valueOf" ? () => e : n === "then" ? void 0 : U.has(n) ? Object.prototype[n].bind(t) : n === Symbol.iterator ? function* () {
	yield e;
} : W(e ? `${e}.${String(n)}` : String(n)) }), G = /* @__PURE__ */ new Set(), K = (n, i, a) => {
	let o = H()[n];
	return o ? $(o, i, a) : (G.has(n) || (e({ log: t })(typeof window > "u" ? `Dictionary ${r(n)} was not found. Using fallback proxy.` : `Dictionary ${n} was not found. Using fallback proxy.`, { level: "warn" }), G.add(n)), W(n));
}, ce = (e, t, n) => {
	let r = K(e, n?.locale, n?.plugins);
	if (typeof t == "string") {
		let e = t.split("."), n = r;
		for (let t of e) if (n = n?.[t], n === void 0) return r;
		return n;
	}
	return r;
}, le = (e, t) => {
	let n = e;
	for (let r of t.split(".")) if (n = n?.[r], n === void 0) return e;
	return n;
}, ue = (e, t, n) => {
	let r = n?.nestedDictionaries, i = r?.[e];
	if (!i) return;
	let a = $({
		...i,
		nestedDictionaries: {
			...r,
			...i.nestedDictionaries
		}
	}, n?.locale, n?.plugins);
	return typeof t == "string" ? le(a, t) : a;
}, q = (e) => {
	if (typeof e != "object" || !e || typeof e.then == "function" || e.$$typeof !== void 0 || e.__v_isVNode !== void 0 || e._isVNode !== void 0 || e.isJSX !== void 0) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Array.isArray(e);
}, J = (e, t) => {
	if (e === void 0) return t;
	if (t === void 0 || Array.isArray(e)) return e;
	if (q(e) && q(t)) {
		let n = { ...e };
		for (let r of Object.keys(t)) r !== "__proto__" && r !== "constructor" && t[r] !== void 0 && (n[r] = e[r] === void 0 ? t[r] : J(e[r], t[r]));
		return n;
	}
	return e;
}, de = (e, t, n) => {
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
	if (s.length !== 0) return s.length === 1 || Array.isArray(s[0]) ? s[0] : s.reduce((e, t) => J(e, t));
}, Y = (e) => {
	if (typeof e != "object" || !e || !("nodeType" in e)) return !1;
	let { nodeType: t } = e;
	return process.env.INTLAYER_NODE_TYPE_HTML !== "false" && t === "html" || process.env.INTLAYER_NODE_TYPE_MARKDOWN !== "false" && t === "markdown";
}, fe = (e) => {
	if (typeof e == "string") return e;
	if (Y(e)) return e.nodeType === "html" ? e[m] : e[p];
}, pe = (e, t) => {
	if (typeof e == "string") return t;
	if (Y(e)) {
		let n = e.nodeType === "html" ? m : p;
		return {
			...e,
			[n]: t
		};
	}
	return e;
}, me = (e, t, n, r, i) => {
	let a = pe(e, A(fe(e), t));
	return i(a, {
		...n,
		plugins: r,
		children: a
	});
}, X = {
	id: "fallback-plugin",
	canHandle: () => !1,
	transform: (e) => e
}, he = (e, t) => process.env.INTLAYER_NODE_TYPE_TRANSLATION === "false" ? X : {
	id: "translation-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "translation",
	transform: (n, r, a) => {
		let o = n.translation ?? {}, s = {};
		for (let e in o) {
			let t = {
				...r,
				children: o[e],
				keyPath: [...r.keyPath, {
					type: i,
					key: e
				}]
			};
			s[e] = a(o[e], t);
		}
		return de(s, e, t);
	}
}, ge = process.env.INTLAYER_NODE_TYPE_ENUMERATION === "false" ? X : {
	id: "enumeration-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "enumeration",
	transform: (e, t, n) => {
		let r = e[a], i = {};
		for (let e in r) {
			let o = r[e];
			i[e] = n(o, {
				...t,
				children: o,
				keyPath: [...t.keyPath, {
					type: a,
					key: e
				}]
			});
		}
		return (e) => {
			let t = typeof e == "number" ? e : e.count, n = y(i, t);
			return typeof n == "function" && typeof e == "object" ? n(e) : n;
		};
	}
}, _e = process.env.INTLAYER_NODE_TYPE_CONDITION === "false" ? X : {
	id: "condition-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "condition",
	transform: (e, t, n) => {
		let r = e[s], i = {};
		for (let e in r) {
			let a = r[e];
			i[e] = n(a, {
				...t,
				children: a,
				keyPath: [...t.keyPath, {
					type: s,
					key: e
				}]
			});
		}
		return (e) => {
			let t = typeof e == "boolean" ? e : e.value, n = D(i, t);
			return typeof n == "function" && typeof e == "object" ? n(e) : n;
		};
	}
}, ve = process.env.INTLAYER_NODE_TYPE_INSERTION === "false" ? X : {
	id: "insertion-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "insertion",
	transform: (e, t, n) => {
		let r = [...t.keyPath, { type: c }], i = e[c], a = {
			id: "insertion-string-plugin",
			canHandle: (e) => typeof e == "string" || Y(e),
			transform: (e, n, r) => {
				if (Y(e)) return (i) => me(e, i, n, t.plugins, r);
				let i = r(e, {
					...n,
					children: e,
					plugins: [...(t.plugins ?? []).filter((e) => e.id !== "intlayer-node-plugin")]
				});
				return (e) => {
					let a = A(i, e);
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
}, ye = process.env.INTLAYER_NODE_TYPE_GENDER === "false" ? X : {
	id: "gender-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "gender",
	transform: (e, t, n) => {
		let r = e[h], i = {};
		for (let e in r) {
			let a = r[e];
			i[e] = n(a, {
				...t,
				children: a,
				keyPath: [...t.keyPath, {
					type: h,
					key: e
				}]
			});
		}
		return (e) => k(i, e);
	}
}, be = process.env.INTLAYER_NODE_TYPE_SELECT === "false" ? X : {
	id: "select-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "select",
	transform: (e, t, n) => {
		let r = e[g], i = {};
		for (let e in r) {
			let a = r[e];
			i[e] = n(a, {
				...t,
				children: a,
				keyPath: [...t.keyPath, {
					type: g,
					key: e
				}]
			});
		}
		return (e) => {
			let t = typeof e == "string" ? e : e?.value, n = b(i, t);
			return typeof n == "function" && typeof e == "object" ? n(e) : n;
		};
	}
}, xe = process.env.INTLAYER_OPTIMIZED_NESTING === "true" ? ue : ce, Se = (e) => process.env.INTLAYER_NODE_TYPE_NESTED === "false" ? X : {
	id: "nested-plugin",
	canHandle: (e) => typeof e == "object" && (e?.nodeType === "nested" || e?.nodeType === "n"),
	transform: (t, n) => xe(t[f].dictionaryKey, t[f].path, {
		...n,
		locale: e ?? n.locale
	})
}, Ce = process.env.INTLAYER_NODE_TYPE_FILE === "false" ? X : {
	id: "file-plugin",
	canHandle: (e) => typeof e == "object" && e?.nodeType === "file",
	transform: (e, t, n) => n(e.content, {
		...t,
		children: e.content
	})
}, Z = (e, t = !0) => [
	he(e ?? n.defaultLocale, t ? n.defaultLocale : void 0),
	ge,
	_e,
	ve,
	Se(e ?? n.defaultLocale),
	Ce,
	ye,
	be
], Q = (e, t, n = []) => v(e, {
	...t,
	plugins: n
}), $ = (e, t, r) => {
	let { locale: i, selector: a } = B(t), o = re(i ?? n.defaultLocale, V(a), r), s = ie(e, o);
	if (s.hit) return s.content;
	let c = r ?? Z(i), l = z(e, a), u = (e) => {
		let t = {
			dictionaryKey: e.key,
			dictionaryPath: e.filePath,
			keyPath: [],
			plugins: c,
			nestedDictionaries: e.nestedDictionaries
		};
		return Q(e.content, t, c);
	};
	return l === null ? E(e, o, null) : Array.isArray(l) ? E(e, o, l.map(u)) : E(e, o, u(l));
};
export { o as _, b as a, i as b, d as c, l as d, h as f, u as g, p as h, H as i, s as l, c as m, Q as n, y as o, m as p, K as r, v as s, Z as t, a as u, ee as v, _ as x, g as y };
var e = () => ({});
export { e as getUnmergedDictionaries };
var e = /cubot/i, t = /bot\b|bot[/\-\s]|crawler|crawling|spider|scraper|slurp|archiver|feedfetcher|validator|curl\/|wget\/|python-requests|python-urllib|okhttp|axios\/|node-fetch|got \(|go-http-client|java\/|libwww|httpunit|http_request|apache-httpclient|headless|phantomjs|puppeteer|playwright|selenium|webdriver|cypress|lighthouse|pagespeed|gtmetrix|prerender|pingdom|uptime|statuscake|site24x7|bingpreview|yandex|baiduspider|sogou|exabot|semrush|ahrefs|mj12|dotbot|petalbot|applebot|amazonbot|bytespider|facebookexternalhit|meta-externalagent|embedly|outbrain|quora link preview|skypeuripreview|vkshare|w3c_validator|apis-google|mediapartners|adsbot|storebot-google|google-inspectiontool|google-read-aloud|google-extended|duplexweb-google|gptbot|oai-searchbot|chatgpt-user|perplexity|claudebot|claude-web|anthropic-ai|cohere-ai|ccbot|diffbot|imagesift|omgili|timpi|youbot/i, n = (n) => !n || !e.test(n) && t.test(n), r = [
	"_phantom",
	"__nightmare",
	"callPhantom",
	"__selenium_unwrapped",
	"__webdriver_evaluate",
	"__driver_evaluate",
	"domAutomation",
	"Cypress"
], i = () => {
	if (typeof navigator > "u") return !1;
	if (navigator.webdriver === !0) return !0;
	let e = globalThis;
	return r.some((t) => t in e) ? !0 : navigator.userAgent ? n(navigator.userAgent) : !1;
};
export { i as n, n as r, t };
