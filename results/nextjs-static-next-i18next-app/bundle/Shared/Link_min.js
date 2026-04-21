import { createContext as e, createElement as t, useEffect as n, useLayoutEffect as r, useMemo as i, useState as a } from "react";
import o from "next/link";
import { useParams as s } from "next/navigation";
import { jsx as c } from "react/jsx-runtime";
import l from "../i18n/locales/de.json";
import u from "../i18n/locales/es.json";
import d from "../i18n/locales/fr.json";
import f from "../i18n/locales/it.json";
import p from "../i18n/locales/ja.json";
import m from "../i18n/locales/ko.json";
import h from "../i18n/locales/pt.json";
import g from "../i18n/locales/ru.json";
import _ from "../i18n/locales/zh.json";
var v = (e) => /^https?:\/\//.test(e ?? "");
function y(e, t) {
	return !e.startsWith("/") || e === `/${t}` || e.startsWith(`/${t}/`) ? e : `/${t}${e === "/" ? "" : e}`;
}
var b = ({ href: e, children: t, ...n }) => {
	let r = s().locale ?? "en";
	return e == null || typeof e != "string" || v(e) ? c(o, {
		href: e,
		prefetch: !1,
		...n,
		children: t
	}) : c(o, {
		href: y(e, r),
		prefetch: !1,
		...n,
		children: t
	});
}, x = (e) => typeof e == "string", S = () => {
	let e, t, n = new Promise((n, r) => {
		e = n, t = r;
	});
	return n.resolve = e, n.reject = t, n;
}, C = (e) => e == null ? "" : String(e), ee = (e, t, n) => {
	e.forEach((e) => {
		t[e] && (n[e] = t[e]);
	});
}, w = /###/g, T = (e) => e && e.includes("###") ? e.replace(w, ".") : e, E = (e) => !e || x(e), D = (e, t, n) => {
	let r = x(t) ? t.split(".") : t, i = 0;
	for (; i < r.length - 1;) {
		if (E(e)) return {};
		let t = T(r[i]);
		!e[t] && n && (e[t] = new n()), e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}, ++i;
	}
	return E(e) ? {} : {
		obj: e,
		k: T(r[i])
	};
}, O = (e, t, n) => {
	let { obj: r, k: i } = D(e, t, Object);
	if (r !== void 0 || t.length === 1) {
		r[i] = n;
		return;
	}
	let a = t[t.length - 1], o = t.slice(0, t.length - 1), s = D(e, o, Object);
	for (; s.obj === void 0 && o.length;) a = `${o[o.length - 1]}.${a}`, o = o.slice(0, o.length - 1), s = D(e, o, Object), s?.obj && s.obj[`${s.k}.${a}`] !== void 0 && (s.obj = void 0);
	s.obj[`${s.k}.${a}`] = n;
}, te = (e, t, n, r) => {
	let { obj: i, k: a } = D(e, t, Object);
	i[a] = i[a] || [], i[a].push(n);
}, k = (e, t) => {
	let { obj: n, k: r } = D(e, t);
	if (n && Object.prototype.hasOwnProperty.call(n, r)) return n[r];
}, ne = (e, t, n) => {
	let r = k(e, n);
	return r === void 0 ? k(t, n) : r;
}, A = (e, t, n) => {
	for (let r in t) r !== "__proto__" && r !== "constructor" && (r in e ? x(e[r]) || e[r] instanceof String || x(t[r]) || t[r] instanceof String ? n && (e[r] = t[r]) : A(e[r], t[r], n) : e[r] = t[r]);
	return e;
}, j = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), re = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;",
	"/": "&#x2F;"
}, ie = (e) => x(e) ? e.replace(/[&<>"'\/]/g, (e) => re[e]) : e, ae = class {
	constructor(e) {
		this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
	}
	getRegExp(e) {
		let t = this.regExpMap.get(e);
		if (t !== void 0) return t;
		let n = new RegExp(e);
		return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, n), this.regExpQueue.push(e), n;
	}
}, oe = [
	" ",
	",",
	"?",
	"!",
	";"
], se = new ae(20), ce = (e, t, n) => {
	t ||= "", n ||= "";
	let r = oe.filter((e) => !t.includes(e) && !n.includes(e));
	if (r.length === 0) return !0;
	let i = se.getRegExp(`(${r.map((e) => e === "?" ? "\\?" : e).join("|")})`), a = !i.test(e);
	if (!a) {
		let t = e.indexOf(n);
		t > 0 && !i.test(e.substring(0, t)) && (a = !0);
	}
	return a;
}, M = (e, t, n = ".") => {
	if (!e) return;
	if (e[t]) return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0;
	let r = t.split(n), i = e;
	for (let e = 0; e < r.length;) {
		if (!i || typeof i != "object") return;
		let t, a = "";
		for (let o = e; o < r.length; ++o) if (o !== e && (a += n), a += r[o], t = i[a], t !== void 0) {
			if ([
				"string",
				"number",
				"boolean"
			].includes(typeof t) && o < r.length - 1) continue;
			e += o - e + 1;
			break;
		}
		i = t;
	}
	return i;
}, N = (e) => e?.replace(/_/g, "-"), le = {
	type: "logger",
	log(e) {
		this.output("log", e);
	},
	warn(e) {
		this.output("warn", e);
	},
	error(e) {
		this.output("error", e);
	},
	output(e, t) {
		console?.[e]?.apply?.(console, t);
	}
}, P = new class e {
	constructor(e, t = {}) {
		this.init(e, t);
	}
	init(e, t = {}) {
		this.prefix = t.prefix || "i18next:", this.logger = e || le, this.options = t, this.debug = t.debug;
	}
	log(...e) {
		return this.forward(e, "log", "", !0);
	}
	warn(...e) {
		return this.forward(e, "warn", "", !0);
	}
	error(...e) {
		return this.forward(e, "error", "");
	}
	deprecate(...e) {
		return this.forward(e, "warn", "WARNING DEPRECATED: ", !0);
	}
	forward(e, t, n, r) {
		return r && !this.debug ? null : (x(e[0]) && (e[0] = `${n}${this.prefix} ${e[0]}`), this.logger[t](e));
	}
	create(t) {
		return new e(this.logger, {
			prefix: `${this.prefix}:${t}:`,
			...this.options
		});
	}
	clone(t) {
		return t ||= this.options, t.prefix = t.prefix || this.prefix, new e(this.logger, t);
	}
}(), F = class {
	constructor() {
		this.observers = {};
	}
	on(e, t) {
		return e.split(" ").forEach((e) => {
			this.observers[e] || (this.observers[e] = /* @__PURE__ */ new Map());
			let n = this.observers[e].get(t) || 0;
			this.observers[e].set(t, n + 1);
		}), this;
	}
	off(e, t) {
		if (this.observers[e]) {
			if (!t) {
				delete this.observers[e];
				return;
			}
			this.observers[e].delete(t);
		}
	}
	once(e, t) {
		let n = (...r) => {
			t(...r), this.off(e, n);
		};
		return this.on(e, n), this;
	}
	emit(e, ...t) {
		this.observers[e] && Array.from(this.observers[e].entries()).forEach(([e, n]) => {
			for (let r = 0; r < n; r++) e(...t);
		}), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([n, r]) => {
			for (let i = 0; i < r; i++) n(e, ...t);
		});
	}
}, I = class extends F {
	constructor(e, t = {
		ns: ["translation"],
		defaultNS: "translation"
	}) {
		super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
	}
	addNamespaces(e) {
		this.options.ns.includes(e) || this.options.ns.push(e);
	}
	removeNamespaces(e) {
		let t = this.options.ns.indexOf(e);
		t > -1 && this.options.ns.splice(t, 1);
	}
	getResource(e, t, n, r = {}) {
		let i = r.keySeparator === void 0 ? this.options.keySeparator : r.keySeparator, a = r.ignoreJSONStructure === void 0 ? this.options.ignoreJSONStructure : r.ignoreJSONStructure, o;
		e.includes(".") ? o = e.split(".") : (o = [e, t], n && (Array.isArray(n) ? o.push(...n) : x(n) && i ? o.push(...n.split(i)) : o.push(n)));
		let s = k(this.data, o);
		return !s && !t && !n && e.includes(".") && (e = o[0], t = o[1], n = o.slice(2).join(".")), s || !a || !x(n) ? s : M(this.data?.[e]?.[t], n, i);
	}
	addResource(e, t, n, r, i = { silent: !1 }) {
		let a = i.keySeparator === void 0 ? this.options.keySeparator : i.keySeparator, o = [e, t];
		n && (o = o.concat(a ? n.split(a) : n)), e.includes(".") && (o = e.split("."), r = t, t = o[1]), this.addNamespaces(t), O(this.data, o, r), i.silent || this.emit("added", e, t, n, r);
	}
	addResources(e, t, n, r = { silent: !1 }) {
		for (let r in n) (x(n[r]) || Array.isArray(n[r])) && this.addResource(e, t, r, n[r], { silent: !0 });
		r.silent || this.emit("added", e, t, n);
	}
	addResourceBundle(e, t, n, r, i, a = {
		silent: !1,
		skipCopy: !1
	}) {
		let o = [e, t];
		e.includes(".") && (o = e.split("."), r = n, n = t, t = o[1]), this.addNamespaces(t);
		let s = k(this.data, o) || {};
		a.skipCopy || (n = JSON.parse(JSON.stringify(n))), r ? A(s, n, i) : s = {
			...s,
			...n
		}, O(this.data, o, s), a.silent || this.emit("added", e, t, n);
	}
	removeResourceBundle(e, t) {
		this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
	}
	hasResourceBundle(e, t) {
		return this.getResource(e, t) !== void 0;
	}
	getResourceBundle(e, t) {
		return t ||= this.options.defaultNS, this.getResource(e, t);
	}
	getDataByLanguage(e) {
		return this.data[e];
	}
	hasLanguageSomeTranslations(e) {
		let t = this.getDataByLanguage(e);
		return !!(t && Object.keys(t) || []).find((e) => t[e] && Object.keys(t[e]).length > 0);
	}
	toJSON() {
		return this.data;
	}
}, L = {
	processors: {},
	addPostProcessor(e) {
		this.processors[e.name] = e;
	},
	handle(e, t, n, r, i) {
		return e.forEach((e) => {
			t = this.processors[e]?.process(t, n, r, i) ?? t;
		}), t;
	}
}, R = Symbol("i18next/PATH_KEY");
function ue() {
	let e = [], t = Object.create(null), n;
	return t.get = (r, i) => (n?.revoke?.(), i === R ? e : (e.push(i), n = Proxy.revocable(r, t), n.proxy)), Proxy.revocable(Object.create(null), t).proxy;
}
function z(e, t) {
	let { [R]: n } = e(ue()), r = t?.keySeparator ?? ".", i = t?.nsSeparator ?? ":";
	if (n.length > 1 && i) {
		let e = t?.ns, a = Array.isArray(e) ? e : null;
		if (a && a.length > 1 && a.slice(1).includes(n[0])) return `${n[0]}${i}${n.slice(1).join(r)}`;
	}
	return n.join(r);
}
var B = (e) => !x(e) && typeof e != "boolean" && typeof e != "number", V = class e extends F {
	constructor(e, t = {}) {
		super(), ee([
			"resourceStore",
			"languageUtils",
			"pluralResolver",
			"interpolator",
			"backendConnector",
			"i18nFormat",
			"utils"
		], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = P.create("translator"), this.checkedLoadedFor = {};
	}
	changeLanguage(e) {
		e && (this.language = e);
	}
	exists(e, t = { interpolation: {} }) {
		let n = { ...t };
		if (e == null) return !1;
		let r = this.resolve(e, n);
		if (r?.res === void 0) return !1;
		let i = B(r.res);
		return !(n.returnObjects === !1 && i);
	}
	extractFromKey(e, t) {
		let n = t.nsSeparator === void 0 ? this.options.nsSeparator : t.nsSeparator;
		n === void 0 && (n = ":");
		let r = t.keySeparator === void 0 ? this.options.keySeparator : t.keySeparator, i = t.ns || this.options.defaultNS || [], a = n && e.includes(n), o = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !ce(e, n, r);
		if (a && !o) {
			let t = e.match(this.interpolator.nestingRegexp);
			if (t && t.length > 0) return {
				key: e,
				namespaces: x(i) ? [i] : i
			};
			let a = e.split(n);
			(n !== r || n === r && this.options.ns.includes(a[0])) && (i = a.shift()), e = a.join(r);
		}
		return {
			key: e,
			namespaces: x(i) ? [i] : i
		};
	}
	translate(t, n, r) {
		let i = typeof n == "object" ? { ...n } : n;
		if (typeof i != "object" && this.options.overloadTranslationOptionHandler && (i = this.options.overloadTranslationOptionHandler(arguments)), typeof i == "object" && (i = { ...i }), i ||= {}, t == null) return "";
		typeof t == "function" && (t = z(t, {
			...this.options,
			...i
		})), Array.isArray(t) || (t = [String(t)]), t = t.map((e) => typeof e == "function" ? z(e, {
			...this.options,
			...i
		}) : String(e));
		let a = i.returnDetails === void 0 ? this.options.returnDetails : i.returnDetails, o = i.keySeparator === void 0 ? this.options.keySeparator : i.keySeparator, { key: s, namespaces: c } = this.extractFromKey(t[t.length - 1], i), l = c[c.length - 1], u = i.nsSeparator === void 0 ? this.options.nsSeparator : i.nsSeparator;
		u === void 0 && (u = ":");
		let d = i.lng || this.language, f = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
		if (d?.toLowerCase() === "cimode") return f ? a ? {
			res: `${l}${u}${s}`,
			usedKey: s,
			exactUsedKey: s,
			usedLng: d,
			usedNS: l,
			usedParams: this.getUsedParamsDetails(i)
		} : `${l}${u}${s}` : a ? {
			res: s,
			usedKey: s,
			exactUsedKey: s,
			usedLng: d,
			usedNS: l,
			usedParams: this.getUsedParamsDetails(i)
		} : s;
		let p = this.resolve(t, i), m = p?.res, h = p?.usedKey || s, g = p?.exactUsedKey || s, _ = [
			"[object Number]",
			"[object Function]",
			"[object RegExp]"
		], v = i.joinArrays === void 0 ? this.options.joinArrays : i.joinArrays, y = !this.i18nFormat || this.i18nFormat.handleAsObject, b = i.count !== void 0 && !x(i.count), S = e.hasDefaultValue(i), C = b ? this.pluralResolver.getSuffix(d, i.count, i) : "", ee = i.ordinal && b ? this.pluralResolver.getSuffix(d, i.count, { ordinal: !1 }) : "", w = b && !i.ordinal && i.count === 0, T = w && i[`defaultValue${this.options.pluralSeparator}zero`] || i[`defaultValue${C}`] || i[`defaultValue${ee}`] || i.defaultValue, E = m;
		y && !m && S && (E = T);
		let D = B(E), O = Object.prototype.toString.apply(E);
		if (y && E && D && !_.includes(O) && !(x(v) && Array.isArray(E))) {
			if (!i.returnObjects && !this.options.returnObjects) {
				this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
				let e = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(h, E, {
					...i,
					ns: c
				}) : `key '${s} (${this.language})' returned an object instead of string.`;
				return a ? (p.res = e, p.usedParams = this.getUsedParamsDetails(i), p) : e;
			}
			if (o) {
				let e = Array.isArray(E), t = e ? [] : {}, n = e ? g : h;
				for (let e in E) if (Object.prototype.hasOwnProperty.call(E, e)) {
					let r = `${n}${o}${e}`;
					S && !m ? t[e] = this.translate(r, {
						...i,
						defaultValue: B(T) ? T[e] : void 0,
						joinArrays: !1,
						ns: c
					}) : t[e] = this.translate(r, {
						...i,
						joinArrays: !1,
						ns: c
					}), t[e] === r && (t[e] = E[e]);
				}
				m = t;
			}
		} else if (y && x(v) && Array.isArray(m)) m = m.join(v), m &&= this.extendTranslation(m, t, i, r);
		else {
			let e = !1, n = !1;
			!this.isValidLookup(m) && S && (e = !0, m = T), this.isValidLookup(m) || (n = !0, m = s);
			let a = (i.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && n ? void 0 : m, c = S && T !== m && this.options.updateMissing;
			if (n || e || c) {
				if (this.logger.log(c ? "updateKey" : "missingKey", d, l, s, c ? T : m), o) {
					let e = this.resolve(s, {
						...i,
						keySeparator: !1
					});
					e && e.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
				}
				let e = [], t = this.languageUtils.getFallbackCodes(this.options.fallbackLng, i.lng || this.language);
				if (this.options.saveMissingTo === "fallback" && t && t[0]) for (let n = 0; n < t.length; n++) e.push(t[n]);
				else this.options.saveMissingTo === "all" ? e = this.languageUtils.toResolveHierarchy(i.lng || this.language) : e.push(i.lng || this.language);
				let n = (e, t, n) => {
					let r = S && n !== m ? n : a;
					this.options.missingKeyHandler ? this.options.missingKeyHandler(e, l, t, r, c, i) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(e, l, t, r, c, i), this.emit("missingKey", e, l, t, m);
				};
				this.options.saveMissing && (this.options.saveMissingPlurals && b ? e.forEach((e) => {
					let t = this.pluralResolver.getSuffixes(e, i);
					w && i[`defaultValue${this.options.pluralSeparator}zero`] && !t.includes(`${this.options.pluralSeparator}zero`) && t.push(`${this.options.pluralSeparator}zero`), t.forEach((t) => {
						n([e], s + t, i[`defaultValue${t}`] || T);
					});
				}) : n(e, s, T));
			}
			m = this.extendTranslation(m, t, i, p, r), n && m === s && this.options.appendNamespaceToMissingKey && (m = `${l}${u}${s}`), (n || e) && this.options.parseMissingKeyHandler && (m = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}${u}${s}` : s, e ? m : void 0, i));
		}
		return a ? (p.res = m, p.usedParams = this.getUsedParamsDetails(i), p) : m;
	}
	extendTranslation(e, t, n, r, i) {
		if (this.i18nFormat?.parse) e = this.i18nFormat.parse(e, {
			...this.options.interpolation.defaultVariables,
			...n
		}, n.lng || this.language || r.usedLng, r.usedNS, r.usedKey, { resolved: r });
		else if (!n.skipInterpolation) {
			n.interpolation && this.interpolator.init({
				...n,
				interpolation: {
					...this.options.interpolation,
					...n.interpolation
				}
			});
			let a = x(e) && (n?.interpolation?.skipOnVariables === void 0 ? this.options.interpolation.skipOnVariables : n.interpolation.skipOnVariables), o;
			if (a) {
				let t = e.match(this.interpolator.nestingRegexp);
				o = t && t.length;
			}
			let s = n.replace && !x(n.replace) ? n.replace : n;
			if (this.options.interpolation.defaultVariables && (s = {
				...this.options.interpolation.defaultVariables,
				...s
			}), e = this.interpolator.interpolate(e, s, n.lng || this.language || r.usedLng, n), a) {
				let t = e.match(this.interpolator.nestingRegexp), r = t && t.length;
				o < r && (n.nest = !1);
			}
			!n.lng && r && r.res && (n.lng = this.language || r.usedLng), n.nest !== !1 && (e = this.interpolator.nest(e, (...e) => i?.[0] === e[0] && !n.context ? (this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`), null) : this.translate(...e, t), n)), n.interpolation && this.interpolator.reset();
		}
		let a = n.postProcess || this.options.postProcess, o = x(a) ? [a] : a;
		return e != null && o?.length && n.applyPostProcessor !== !1 && (e = L.handle(o, e, t, this.options && this.options.postProcessPassResolved ? {
			i18nResolved: {
				...r,
				usedParams: this.getUsedParamsDetails(n)
			},
			...n
		} : n, this)), e;
	}
	resolve(e, t = {}) {
		let n, r, i, a, o;
		return x(e) && (e = [e]), Array.isArray(e) && (e = e.map((e) => typeof e == "function" ? z(e, {
			...this.options,
			...t
		}) : e)), e.forEach((e) => {
			if (this.isValidLookup(n)) return;
			let s = this.extractFromKey(e, t), c = s.key;
			r = c;
			let l = s.namespaces;
			this.options.fallbackNS && (l = l.concat(this.options.fallbackNS));
			let u = t.count !== void 0 && !x(t.count), d = u && !t.ordinal && t.count === 0, f = t.context !== void 0 && (x(t.context) || typeof t.context == "number") && t.context !== "", p = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
			l.forEach((e) => {
				this.isValidLookup(n) || (o = e, !this.checkedLoadedFor[`${p[0]}-${e}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(o) && (this.checkedLoadedFor[`${p[0]}-${e}`] = !0, this.logger.warn(`key "${r}" for languages "${p.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), p.forEach((r) => {
					if (this.isValidLookup(n)) return;
					a = r;
					let o = [c];
					if (this.i18nFormat?.addLookupKeys) this.i18nFormat.addLookupKeys(o, c, r, e, t);
					else {
						let e;
						u && (e = this.pluralResolver.getSuffix(r, t.count, t));
						let n = `${this.options.pluralSeparator}zero`, i = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
						if (u && (t.ordinal && e.startsWith(i) && o.push(c + e.replace(i, this.options.pluralSeparator)), o.push(c + e), d && o.push(c + n)), f) {
							let r = `${c}${this.options.contextSeparator || "_"}${t.context}`;
							o.push(r), u && (t.ordinal && e.startsWith(i) && o.push(r + e.replace(i, this.options.pluralSeparator)), o.push(r + e), d && o.push(r + n));
						}
					}
					let s;
					for (; s = o.pop();) this.isValidLookup(n) || (i = s, n = this.getResource(r, e, s, t));
				}));
			});
		}), {
			res: n,
			usedKey: r,
			exactUsedKey: i,
			usedLng: a,
			usedNS: o
		};
	}
	isValidLookup(e) {
		return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
	}
	getResource(e, t, n, r = {}) {
		return this.i18nFormat?.getResource ? this.i18nFormat.getResource(e, t, n, r) : this.resourceStore.getResource(e, t, n, r);
	}
	getUsedParamsDetails(e = {}) {
		let t = [
			"defaultValue",
			"ordinal",
			"context",
			"replace",
			"lng",
			"lngs",
			"fallbackLng",
			"ns",
			"keySeparator",
			"nsSeparator",
			"returnObjects",
			"returnDetails",
			"joinArrays",
			"postProcess",
			"interpolation"
		], n = e.replace && !x(e.replace), r = n ? e.replace : e;
		if (n && e.count !== void 0 && (r.count = e.count), this.options.interpolation.defaultVariables && (r = {
			...this.options.interpolation.defaultVariables,
			...r
		}), !n) {
			r = { ...r };
			for (let e of t) delete r[e];
		}
		return r;
	}
	static hasDefaultValue(e) {
		for (let t in e) if (Object.prototype.hasOwnProperty.call(e, t) && t.startsWith("defaultValue") && e[t] !== void 0) return !0;
		return !1;
	}
}, H = class {
	constructor(e) {
		this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = P.create("languageUtils");
	}
	getScriptPartFromCode(e) {
		if (e = N(e), !e || !e.includes("-")) return null;
		let t = e.split("-");
		return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
	}
	getLanguagePartFromCode(e) {
		if (e = N(e), !e || !e.includes("-")) return e;
		let t = e.split("-");
		return this.formatLanguageCode(t[0]);
	}
	formatLanguageCode(e) {
		if (x(e) && e.includes("-")) {
			let t;
			try {
				t = Intl.getCanonicalLocales(e)[0];
			} catch {}
			return t && this.options.lowerCaseLng && (t = t.toLowerCase()), t || (this.options.lowerCaseLng ? e.toLowerCase() : e);
		}
		return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
	}
	isSupportedCode(e) {
		return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.includes(e);
	}
	getBestMatchFromCodes(e) {
		if (!e) return null;
		let t;
		return e.forEach((e) => {
			if (t) return;
			let n = this.formatLanguageCode(e);
			(!this.options.supportedLngs || this.isSupportedCode(n)) && (t = n);
		}), !t && this.options.supportedLngs && e.forEach((e) => {
			if (t) return;
			let n = this.getScriptPartFromCode(e);
			if (this.isSupportedCode(n)) return t = n;
			let r = this.getLanguagePartFromCode(e);
			if (this.isSupportedCode(r)) return t = r;
			t = this.options.supportedLngs.find((e) => e === r ? !0 : !e.includes("-") && !r.includes("-") ? !1 : !!(e.includes("-") && !r.includes("-") && e.slice(0, e.indexOf("-")) === r || e.startsWith(r) && r.length > 1));
		}), t ||= this.getFallbackCodes(this.options.fallbackLng)[0], t;
	}
	getFallbackCodes(e, t) {
		if (!e) return [];
		if (typeof e == "function" && (e = e(t)), x(e) && (e = [e]), Array.isArray(e)) return e;
		if (!t) return e.default || [];
		let n = e[t];
		return n ||= e[this.getScriptPartFromCode(t)], n ||= e[this.formatLanguageCode(t)], n ||= e[this.getLanguagePartFromCode(t)], n ||= e.default, n || [];
	}
	toResolveHierarchy(e, t) {
		let n = this.getFallbackCodes((t === !1 ? [] : t) || this.options.fallbackLng || [], e), r = [], i = (e) => {
			e && (this.isSupportedCode(e) ? r.push(e) : this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`));
		};
		return x(e) && (e.includes("-") || e.includes("_")) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(e))) : x(e) && i(this.formatLanguageCode(e)), n.forEach((e) => {
			r.includes(e) || i(this.formatLanguageCode(e));
		}), r;
	}
}, U = {
	zero: 0,
	one: 1,
	two: 2,
	few: 3,
	many: 4,
	other: 5
}, W = {
	select: (e) => e === 1 ? "one" : "other",
	resolvedOptions: () => ({ pluralCategories: ["one", "other"] })
}, de = class {
	constructor(e, t = {}) {
		this.languageUtils = e, this.options = t, this.logger = P.create("pluralResolver"), this.pluralRulesCache = {};
	}
	clearCache() {
		this.pluralRulesCache = {};
	}
	getRule(e, t = {}) {
		let n = N(e === "dev" ? "en" : e), r = t.ordinal ? "ordinal" : "cardinal", i = JSON.stringify({
			cleanedCode: n,
			type: r
		});
		if (i in this.pluralRulesCache) return this.pluralRulesCache[i];
		let a;
		try {
			a = new Intl.PluralRules(n, { type: r });
		} catch {
			if (typeof Intl > "u") return this.logger.error("No Intl support, please use an Intl polyfill!"), W;
			if (!e.match(/-|_/)) return W;
			let n = this.languageUtils.getLanguagePartFromCode(e);
			a = this.getRule(n, t);
		}
		return this.pluralRulesCache[i] = a, a;
	}
	needsPlural(e, t = {}) {
		let n = this.getRule(e, t);
		return n ||= this.getRule("dev", t), n?.resolvedOptions().pluralCategories.length > 1;
	}
	getPluralFormsOfKey(e, t, n = {}) {
		return this.getSuffixes(e, n).map((e) => `${t}${e}`);
	}
	getSuffixes(e, t = {}) {
		let n = this.getRule(e, t);
		return n ||= this.getRule("dev", t), n ? n.resolvedOptions().pluralCategories.sort((e, t) => U[e] - U[t]).map((e) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${e}`) : [];
	}
	getSuffix(e, t, n = {}) {
		let r = this.getRule(e, n);
		return r ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${r.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, n));
	}
}, G = (e, t, n, r = ".", i = !0) => {
	let a = ne(e, t, n);
	return !a && i && x(n) && (a = M(e, n, r), a === void 0 && (a = M(t, n, r))), a;
}, K = (e) => e.replace(/\$/g, "$$$$"), q = class {
	constructor(e = {}) {
		this.logger = P.create("interpolator"), this.options = e, this.format = e?.interpolation?.format || ((e) => e), this.init(e);
	}
	init(e = {}) {
		e.interpolation ||= { escapeValue: !0 };
		let { escape: t, escapeValue: n, useRawValueToEscape: r, prefix: i, prefixEscaped: a, suffix: o, suffixEscaped: s, formatSeparator: c, unescapeSuffix: l, unescapePrefix: u, nestingPrefix: d, nestingPrefixEscaped: f, nestingSuffix: p, nestingSuffixEscaped: m, nestingOptionsSeparator: h, maxReplaces: g, alwaysFormat: _ } = e.interpolation;
		this.escape = t === void 0 ? ie : t, this.escapeValue = n === void 0 ? !0 : n, this.useRawValueToEscape = r === void 0 ? !1 : r, this.prefix = i ? j(i) : a || "{{", this.suffix = o ? j(o) : s || "}}", this.formatSeparator = c || ",", this.unescapePrefix = l ? "" : u || "-", this.unescapeSuffix = this.unescapePrefix ? "" : l || "", this.nestingPrefix = d ? j(d) : f || j("$t("), this.nestingSuffix = p ? j(p) : m || j(")"), this.nestingOptionsSeparator = h || ",", this.maxReplaces = g || 1e3, this.alwaysFormat = _ === void 0 ? !1 : _, this.resetRegExp();
	}
	reset() {
		this.options && this.init(this.options);
	}
	resetRegExp() {
		let e = (e, t) => e?.source === t ? (e.lastIndex = 0, e) : new RegExp(t, "g");
		this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
	}
	interpolate(e, t, n, r) {
		let i, a, o, s = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, c = (e) => {
			if (!e.includes(this.formatSeparator)) {
				let i = G(t, s, e, this.options.keySeparator, this.options.ignoreJSONStructure);
				return this.alwaysFormat ? this.format(i, void 0, n, {
					...r,
					...t,
					interpolationkey: e
				}) : i;
			}
			let i = e.split(this.formatSeparator), a = i.shift().trim(), o = i.join(this.formatSeparator).trim();
			return this.format(G(t, s, a, this.options.keySeparator, this.options.ignoreJSONStructure), o, n, {
				...r,
				...t,
				interpolationkey: a
			});
		};
		this.resetRegExp();
		let l = r?.missingInterpolationHandler || this.options.missingInterpolationHandler, u = r?.interpolation?.skipOnVariables === void 0 ? this.options.interpolation.skipOnVariables : r.interpolation.skipOnVariables;
		return [{
			regex: this.regexpUnescape,
			safeValue: (e) => K(e)
		}, {
			regex: this.regexp,
			safeValue: (e) => this.escapeValue ? K(this.escape(e)) : K(e)
		}].forEach((t) => {
			for (o = 0; i = t.regex.exec(e);) {
				let n = i[1].trim();
				if (a = c(n), a === void 0) if (typeof l == "function") {
					let t = l(e, i, r);
					a = x(t) ? t : "";
				} else if (r && Object.prototype.hasOwnProperty.call(r, n)) a = "";
				else if (u) {
					a = i[0];
					continue;
				} else this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`), a = "";
				else !x(a) && !this.useRawValueToEscape && (a = C(a));
				let s = t.safeValue(a);
				if (e = e.replace(i[0], s), u ? (t.regex.lastIndex += a.length, t.regex.lastIndex -= i[0].length) : t.regex.lastIndex = 0, o++, o >= this.maxReplaces) break;
			}
		}), e;
	}
	nest(e, t, n = {}) {
		let r, i, a, o = (e, t) => {
			let n = this.nestingOptionsSeparator;
			if (!e.includes(n)) return e;
			let r = e.split(RegExp(`${j(n)}[ ]*{`)), i = `{${r[1]}`;
			e = r[0], i = this.interpolate(i, a);
			let o = i.match(/'/g), s = i.match(/"/g);
			((o?.length ?? 0) % 2 == 0 && !s || (s?.length ?? 0) % 2 != 0) && (i = i.replace(/'/g, "\""));
			try {
				a = JSON.parse(i), t && (a = {
					...t,
					...a
				});
			} catch (t) {
				return this.logger.warn(`failed parsing options string in nesting for key ${e}`, t), `${e}${n}${i}`;
			}
			return a.defaultValue && a.defaultValue.includes(this.prefix) && delete a.defaultValue, e;
		};
		for (; r = this.nestingRegexp.exec(e);) {
			let s = [];
			a = { ...n }, a = a.replace && !x(a.replace) ? a.replace : a, a.applyPostProcessor = !1, delete a.defaultValue;
			let c = /{.*}/.test(r[1]) ? r[1].lastIndexOf("}") + 1 : r[1].indexOf(this.formatSeparator);
			if (c !== -1 && (s = r[1].slice(c).split(this.formatSeparator).map((e) => e.trim()).filter(Boolean), r[1] = r[1].slice(0, c)), i = t(o.call(this, r[1].trim(), a), a), i && r[0] === e && !x(i)) return i;
			x(i) || (i = C(i)), i ||= (this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`), ""), s.length && (i = s.reduce((e, t) => this.format(e, t, n.lng, {
				...n,
				interpolationkey: r[1].trim()
			}), i.trim())), e = e.replace(r[0], i), this.regexp.lastIndex = 0;
		}
		return e;
	}
}, fe = (e) => {
	let t = e.toLowerCase().trim(), n = {};
	if (e.includes("(")) {
		let r = e.split("(");
		t = r[0].toLowerCase().trim();
		let i = r[1].slice(0, -1);
		t === "currency" && !i.includes(":") ? n.currency ||= i.trim() : t === "relativetime" && !i.includes(":") ? n.range ||= i.trim() : i.split(";").forEach((e) => {
			if (e) {
				let [t, ...r] = e.split(":"), i = r.join(":").trim().replace(/^'+|'+$/g, ""), a = t.trim();
				n[a] || (n[a] = i), i === "false" && (n[a] = !1), i === "true" && (n[a] = !0), isNaN(i) || (n[a] = parseInt(i, 10));
			}
		});
	}
	return {
		formatName: t,
		formatOptions: n
	};
}, J = (e) => {
	let t = {};
	return (n, r, i) => {
		let a = i;
		i && i.interpolationkey && i.formatParams && i.formatParams[i.interpolationkey] && i[i.interpolationkey] && (a = {
			...a,
			[i.interpolationkey]: void 0
		});
		let o = r + JSON.stringify(a), s = t[o];
		return s || (s = e(N(r), i), t[o] = s), s(n);
	};
}, pe = (e) => (t, n, r) => e(N(n), r)(t), me = class {
	constructor(e = {}) {
		this.logger = P.create("formatter"), this.options = e, this.init(e);
	}
	init(e, t = { interpolation: {} }) {
		this.formatSeparator = t.interpolation.formatSeparator || ",";
		let n = t.cacheInBuiltFormats ? J : pe;
		this.formats = {
			number: n((e, t) => {
				let n = new Intl.NumberFormat(e, { ...t });
				return (e) => n.format(e);
			}),
			currency: n((e, t) => {
				let n = new Intl.NumberFormat(e, {
					...t,
					style: "currency"
				});
				return (e) => n.format(e);
			}),
			datetime: n((e, t) => {
				let n = new Intl.DateTimeFormat(e, { ...t });
				return (e) => n.format(e);
			}),
			relativetime: n((e, t) => {
				let n = new Intl.RelativeTimeFormat(e, { ...t });
				return (e) => n.format(e, t.range || "day");
			}),
			list: n((e, t) => {
				let n = new Intl.ListFormat(e, { ...t });
				return (e) => n.format(e);
			})
		};
	}
	add(e, t) {
		this.formats[e.toLowerCase().trim()] = t;
	}
	addCached(e, t) {
		this.formats[e.toLowerCase().trim()] = J(t);
	}
	format(e, t, n, r = {}) {
		if (!t || e == null) return e;
		let i = t.split(this.formatSeparator);
		if (i.length > 1 && i[0].indexOf("(") > 1 && !i[0].includes(")") && i.find((e) => e.includes(")"))) {
			let e = i.findIndex((e) => e.includes(")"));
			i[0] = [i[0], ...i.splice(1, e)].join(this.formatSeparator);
		}
		return i.reduce((e, t) => {
			let { formatName: i, formatOptions: a } = fe(t);
			if (this.formats[i]) {
				let t = e;
				try {
					let o = r?.formatParams?.[r.interpolationkey] || {}, s = o.locale || o.lng || r.locale || r.lng || n;
					t = this.formats[i](e, s, {
						...a,
						...r,
						...o
					});
				} catch (e) {
					this.logger.warn(e);
				}
				return t;
			} else this.logger.warn(`there was no format function for ${i}`);
			return e;
		}, e);
	}
}, he = (e, t) => {
	e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}, ge = class extends F {
	constructor(e, t, n, r = {}) {
		super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = r, this.logger = P.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = r.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5, this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350, this.state = {}, this.queue = [], this.backend?.init?.(n, r.backend, r);
	}
	queueLoad(e, t, n, r) {
		let i = {}, a = {}, o = {}, s = {};
		return e.forEach((e) => {
			let r = !0;
			t.forEach((t) => {
				let o = `${e}|${t}`;
				!n.reload && this.store.hasResourceBundle(e, t) ? this.state[o] = 2 : this.state[o] < 0 || (this.state[o] === 1 ? a[o] === void 0 && (a[o] = !0) : (this.state[o] = 1, r = !1, a[o] === void 0 && (a[o] = !0), i[o] === void 0 && (i[o] = !0), s[t] === void 0 && (s[t] = !0)));
			}), r || (o[e] = !0);
		}), (Object.keys(i).length || Object.keys(a).length) && this.queue.push({
			pending: a,
			pendingCount: Object.keys(a).length,
			loaded: {},
			errors: [],
			callback: r
		}), {
			toLoad: Object.keys(i),
			pending: Object.keys(a),
			toLoadLanguages: Object.keys(o),
			toLoadNamespaces: Object.keys(s)
		};
	}
	loaded(e, t, n) {
		let r = e.split("|"), i = r[0], a = r[1];
		t && this.emit("failedLoading", i, a, t), !t && n && this.store.addResourceBundle(i, a, n, void 0, void 0, { skipCopy: !0 }), this.state[e] = t ? -1 : 2, t && n && (this.state[e] = 0);
		let o = {};
		this.queue.forEach((n) => {
			te(n.loaded, [i], a), he(n, e), t && n.errors.push(t), n.pendingCount === 0 && !n.done && (Object.keys(n.loaded).forEach((e) => {
				o[e] || (o[e] = {});
				let t = n.loaded[e];
				t.length && t.forEach((t) => {
					o[e][t] === void 0 && (o[e][t] = !0);
				});
			}), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback());
		}), this.emit("loaded", o), this.queue = this.queue.filter((e) => !e.done);
	}
	read(e, t, n, r = 0, i = this.retryTimeout, a) {
		if (!e.length) return a(null, {});
		if (this.readingCalls >= this.maxParallelReads) {
			this.waitingReads.push({
				lng: e,
				ns: t,
				fcName: n,
				tried: r,
				wait: i,
				callback: a
			});
			return;
		}
		this.readingCalls++;
		let o = (o, s) => {
			if (this.readingCalls--, this.waitingReads.length > 0) {
				let e = this.waitingReads.shift();
				this.read(e.lng, e.ns, e.fcName, e.tried, e.wait, e.callback);
			}
			if (o && s && r < this.maxRetries) {
				setTimeout(() => {
					this.read(e, t, n, r + 1, i * 2, a);
				}, i);
				return;
			}
			a(o, s);
		}, s = this.backend[n].bind(this.backend);
		if (s.length === 2) {
			try {
				let n = s(e, t);
				n && typeof n.then == "function" ? n.then((e) => o(null, e)).catch(o) : o(null, n);
			} catch (e) {
				o(e);
			}
			return;
		}
		return s(e, t, o);
	}
	prepareLoading(e, t, n = {}, r) {
		if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), r && r();
		x(e) && (e = this.languageUtils.toResolveHierarchy(e)), x(t) && (t = [t]);
		let i = this.queueLoad(e, t, n, r);
		if (!i.toLoad.length) return i.pending.length || r(), null;
		i.toLoad.forEach((e) => {
			this.loadOne(e);
		});
	}
	load(e, t, n) {
		this.prepareLoading(e, t, {}, n);
	}
	reload(e, t, n) {
		this.prepareLoading(e, t, { reload: !0 }, n);
	}
	loadOne(e, t = "") {
		let n = e.split("|"), r = n[0], i = n[1];
		this.read(r, i, "read", void 0, void 0, (n, a) => {
			n && this.logger.warn(`${t}loading namespace ${i} for language ${r} failed`, n), !n && a && this.logger.log(`${t}loaded namespace ${i} for language ${r}`, a), this.loaded(e, n, a);
		});
	}
	saveMissing(e, t, n, r, i, a = {}, o = () => {}) {
		if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(t)) {
			this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
			return;
		}
		if (!(n == null || n === "")) {
			if (this.backend?.create) {
				let s = {
					...a,
					isUpdate: i
				}, c = this.backend.create.bind(this.backend);
				if (c.length < 6) try {
					let i;
					i = c.length === 5 ? c(e, t, n, r, s) : c(e, t, n, r), i && typeof i.then == "function" ? i.then((e) => o(null, e)).catch(o) : o(null, i);
				} catch (e) {
					o(e);
				}
				else c(e, t, n, r, o, s);
			}
			!e || !e[0] || this.store.addResource(e[0], t, n, r);
		}
	}
}, Y = () => ({
	debug: !1,
	initAsync: !0,
	ns: ["translation"],
	defaultNS: ["translation"],
	fallbackLng: ["dev"],
	fallbackNS: !1,
	supportedLngs: !1,
	nonExplicitSupportedLngs: !1,
	load: "all",
	preload: !1,
	keySeparator: ".",
	nsSeparator: ":",
	pluralSeparator: "_",
	contextSeparator: "_",
	partialBundledLanguages: !1,
	saveMissing: !1,
	updateMissing: !1,
	saveMissingTo: "fallback",
	saveMissingPlurals: !0,
	missingKeyHandler: !1,
	missingInterpolationHandler: !1,
	postProcess: !1,
	postProcessPassResolved: !1,
	returnNull: !1,
	returnEmptyString: !0,
	returnObjects: !1,
	joinArrays: !1,
	returnedObjectHandler: !1,
	parseMissingKeyHandler: !1,
	appendNamespaceToMissingKey: !1,
	appendNamespaceToCIMode: !1,
	overloadTranslationOptionHandler: (e) => {
		let t = {};
		if (typeof e[1] == "object" && (t = e[1]), x(e[1]) && (t.defaultValue = e[1]), x(e[2]) && (t.tDescription = e[2]), typeof e[2] == "object" || typeof e[3] == "object") {
			let n = e[3] || e[2];
			Object.keys(n).forEach((e) => {
				t[e] = n[e];
			});
		}
		return t;
	},
	interpolation: {
		escapeValue: !0,
		prefix: "{{",
		suffix: "}}",
		formatSeparator: ",",
		unescapePrefix: "-",
		nestingPrefix: "$t(",
		nestingSuffix: ")",
		nestingOptionsSeparator: ",",
		maxReplaces: 1e3,
		skipOnVariables: !0
	},
	cacheInBuiltFormats: !0
}), _e = (e) => (x(e.ns) && (e.ns = [e.ns]), x(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]), x(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && !e.supportedLngs.includes("cimode") && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e), X = () => {}, ve = (e) => {
	Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((t) => {
		typeof e[t] == "function" && (e[t] = e[t].bind(e));
	});
}, Z = class e extends F {
	constructor(e = {}, t) {
		if (super(), this.options = _e(e), this.services = {}, this.logger = P, this.modules = { external: [] }, ve(this), t && !this.isInitialized && !e.isClone) {
			if (!this.options.initAsync) return this.init(e, t), this;
			setTimeout(() => {
				this.init(e, t);
			}, 0);
		}
	}
	init(e = {}, t) {
		this.isInitializing = !0, typeof e == "function" && (t = e, e = {}), e.defaultNS == null && e.ns && (x(e.ns) ? e.defaultNS = e.ns : e.ns.includes("translation") || (e.defaultNS = e.ns[0]));
		let n = Y();
		this.options = {
			...n,
			...this.options,
			..._e(e)
		}, this.options.interpolation = {
			...n.interpolation,
			...this.options.interpolation
		}, e.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = e.keySeparator), e.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = e.nsSeparator), typeof this.options.overloadTranslationOptionHandler != "function" && (this.options.overloadTranslationOptionHandler = n.overloadTranslationOptionHandler);
		let r = (e) => e ? typeof e == "function" ? new e() : e : null;
		if (!this.options.isClone) {
			this.modules.logger ? P.init(r(this.modules.logger), this.options) : P.init(null, this.options);
			let e;
			e = this.modules.formatter ? this.modules.formatter : me;
			let t = new H(this.options);
			this.store = new I(this.options.resources, this.options);
			let n = this.services;
			n.logger = P, n.resourceStore = this.store, n.languageUtils = t, n.pluralResolver = new de(t, { prepend: this.options.pluralSeparator }), e && (n.formatter = r(e), n.formatter.init && n.formatter.init(n, this.options), this.options.interpolation.format = n.formatter.format.bind(n.formatter)), n.interpolator = new q(this.options), n.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }, n.backendConnector = new ge(r(this.modules.backend), n.resourceStore, n, this.options), n.backendConnector.on("*", (e, ...t) => {
				this.emit(e, ...t);
			}), this.modules.languageDetector && (n.languageDetector = r(this.modules.languageDetector), n.languageDetector.init && n.languageDetector.init(n, this.options.detection, this.options)), this.modules.i18nFormat && (n.i18nFormat = r(this.modules.i18nFormat), n.i18nFormat.init && n.i18nFormat.init(this)), this.translator = new V(this.services, this.options), this.translator.on("*", (e, ...t) => {
				this.emit(e, ...t);
			}), this.modules.external.forEach((e) => {
				e.init && e.init(this);
			});
		}
		if (this.format = this.options.interpolation.format, t ||= X, this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
			let e = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
			e.length > 0 && e[0] !== "dev" && (this.options.lng = e[0]);
		}
		!this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), [
			"getResource",
			"hasResourceBundle",
			"getResourceBundle",
			"getDataByLanguage"
		].forEach((e) => {
			this[e] = (...t) => this.store[e](...t);
		}), [
			"addResource",
			"addResources",
			"addResourceBundle",
			"removeResourceBundle"
		].forEach((e) => {
			this[e] = (...t) => (this.store[e](...t), this);
		});
		let i = S(), a = () => {
			let e = (e, n) => {
				this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), i.resolve(n), t(e, n);
			};
			if (this.languages && !this.isInitialized) return e(null, this.t.bind(this));
			this.changeLanguage(this.options.lng, e);
		};
		return this.options.resources || !this.options.initAsync ? a() : setTimeout(a, 0), i;
	}
	loadResources(e, t = X) {
		let n = t, r = x(e) ? e : this.language;
		if (typeof e == "function" && (n = e), !this.options.resources || this.options.partialBundledLanguages) {
			if (r?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return n();
			let e = [], t = (t) => {
				t && t !== "cimode" && this.services.languageUtils.toResolveHierarchy(t).forEach((t) => {
					t !== "cimode" && (e.includes(t) || e.push(t));
				});
			};
			r ? t(r) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((e) => t(e)), this.options.preload?.forEach?.((e) => t(e)), this.services.backendConnector.load(e, this.options.ns, (e) => {
				!e && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), n(e);
			});
		} else n(null);
	}
	reloadResources(e, t, n) {
		let r = S();
		return typeof e == "function" && (n = e, e = void 0), typeof t == "function" && (n = t, t = void 0), e ||= this.languages, t ||= this.options.ns, n ||= X, this.services.backendConnector.reload(e, t, (e) => {
			r.resolve(), n(e);
		}), r;
	}
	use(e) {
		if (!e) throw Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
		if (!e.type) throw Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
		return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && L.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
	}
	setResolvedLanguage(e) {
		if (!(!e || !this.languages) && !["cimode", "dev"].includes(e)) {
			for (let e = 0; e < this.languages.length; e++) {
				let t = this.languages[e];
				if (!["cimode", "dev"].includes(t) && this.store.hasLanguageSomeTranslations(t)) {
					this.resolvedLanguage = t;
					break;
				}
			}
			!this.resolvedLanguage && !this.languages.includes(e) && this.store.hasLanguageSomeTranslations(e) && (this.resolvedLanguage = e, this.languages.unshift(e));
		}
	}
	changeLanguage(e, t) {
		this.isLanguageChangingTo = e;
		let n = S();
		this.emit("languageChanging", e);
		let r = (e) => {
			this.language = e, this.languages = this.services.languageUtils.toResolveHierarchy(e), this.resolvedLanguage = void 0, this.setResolvedLanguage(e);
		}, i = (i, a) => {
			a ? this.isLanguageChangingTo === e && (r(a), this.translator.changeLanguage(a), this.isLanguageChangingTo = void 0, this.emit("languageChanged", a), this.logger.log("languageChanged", a)) : this.isLanguageChangingTo = void 0, n.resolve((...e) => this.t(...e)), t && t(i, (...e) => this.t(...e));
		}, a = (t) => {
			!e && !t && this.services.languageDetector && (t = []);
			let n = x(t) ? t : t && t[0], a = this.store.hasLanguageSomeTranslations(n) ? n : this.services.languageUtils.getBestMatchFromCodes(x(t) ? [t] : t);
			a && (this.language || r(a), this.translator.language || this.translator.changeLanguage(a), this.services.languageDetector?.cacheUserLanguage?.(a)), this.loadResources(a, (e) => {
				i(e, a);
			});
		};
		return !e && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(e), n;
	}
	getFixedT(e, t, n) {
		let r = (e, t, ...i) => {
			let a;
			a = typeof t == "object" ? { ...t } : this.options.overloadTranslationOptionHandler([e, t].concat(i)), a.lng = a.lng || r.lng, a.lngs = a.lngs || r.lngs, a.ns = a.ns || r.ns, a.keyPrefix !== "" && (a.keyPrefix = a.keyPrefix || n || r.keyPrefix);
			let o = {
				...this.options,
				...a
			};
			typeof a.keyPrefix == "function" && (a.keyPrefix = z(a.keyPrefix, o));
			let s = this.options.keySeparator || ".", c;
			return a.keyPrefix && Array.isArray(e) ? c = e.map((e) => (typeof e == "function" && (e = z(e, o)), `${a.keyPrefix}${s}${e}`)) : (typeof e == "function" && (e = z(e, o)), c = a.keyPrefix ? `${a.keyPrefix}${s}${e}` : e), this.t(c, a);
		};
		return x(e) ? r.lng = e : r.lngs = e, r.ns = t, r.keyPrefix = n, r;
	}
	t(...e) {
		return this.translator?.translate(...e);
	}
	exists(...e) {
		return this.translator?.exists(...e);
	}
	setDefaultNamespace(e) {
		this.options.defaultNS = e;
	}
	hasLoadedNamespace(e, t = {}) {
		if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
		if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
		let n = t.lng || this.resolvedLanguage || this.languages[0], r = this.options ? this.options.fallbackLng : !1, i = this.languages[this.languages.length - 1];
		if (n.toLowerCase() === "cimode") return !0;
		let a = (e, t) => {
			let n = this.services.backendConnector.state[`${e}|${t}`];
			return n === -1 || n === 0 || n === 2;
		};
		if (t.precheck) {
			let e = t.precheck(this, a);
			if (e !== void 0) return e;
		}
		return !!(this.hasResourceBundle(n, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || a(n, e) && (!r || a(i, e)));
	}
	loadNamespaces(e, t) {
		let n = S();
		return this.options.ns ? (x(e) && (e = [e]), e.forEach((e) => {
			this.options.ns.includes(e) || this.options.ns.push(e);
		}), this.loadResources((e) => {
			n.resolve(), t && t(e);
		}), n) : (t && t(), Promise.resolve());
	}
	loadLanguages(e, t) {
		let n = S();
		x(e) && (e = [e]);
		let r = this.options.preload || [], i = e.filter((e) => !r.includes(e) && this.services.languageUtils.isSupportedCode(e));
		return i.length ? (this.options.preload = r.concat(i), this.loadResources((e) => {
			n.resolve(), t && t(e);
		}), n) : (t && t(), Promise.resolve());
	}
	dir(e) {
		if (e ||= this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language), !e) return "rtl";
		try {
			let t = new Intl.Locale(e);
			if (t && t.getTextInfo) {
				let e = t.getTextInfo();
				if (e && e.direction) return e.direction;
			}
		} catch {}
		let t = /* @__PURE__ */ "ar.shu.sqr.ssh.xaa.yhd.yud.aao.abh.abv.acm.acq.acw.acx.acy.adf.ads.aeb.aec.afb.ajp.apc.apd.arb.arq.ars.ary.arz.auz.avl.ayh.ayl.ayn.ayp.bbz.pga.he.iw.ps.pbt.pbu.pst.prp.prd.ug.ur.ydd.yds.yih.ji.yi.hbo.men.xmn.fa.jpr.peo.pes.prs.dv.sam.ckb".split("."), n = this.services?.languageUtils || new H(Y());
		return e.toLowerCase().indexOf("-latn") > 1 ? "ltr" : t.includes(n.getLanguagePartFromCode(e)) || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
	}
	static createInstance(t = {}, n) {
		let r = new e(t, n);
		return r.createInstance = e.createInstance, r;
	}
	cloneInstance(t = {}, n = X) {
		let r = t.forkResourceStore;
		r && delete t.forkResourceStore;
		let i = {
			...this.options,
			...t,
			isClone: !0
		}, a = new e(i);
		if ((t.debug !== void 0 || t.prefix !== void 0) && (a.logger = a.logger.clone(t)), [
			"store",
			"services",
			"language"
		].forEach((e) => {
			a[e] = this[e];
		}), a.services = { ...this.services }, a.services.utils = { hasLoadedNamespace: a.hasLoadedNamespace.bind(a) }, r && (a.store = new I(Object.keys(this.store.data).reduce((e, t) => (e[t] = { ...this.store.data[t] }, e[t] = Object.keys(e[t]).reduce((n, r) => (n[r] = { ...e[t][r] }, n), e[t]), e), {}), i), a.services.resourceStore = a.store), t.interpolation) {
			let e = {
				...Y().interpolation,
				...this.options.interpolation,
				...t.interpolation
			}, n = {
				...i,
				interpolation: e
			};
			a.services.interpolator = new q(n);
		}
		return a.translator = new V(a.services, i), a.translator.on("*", (e, ...t) => {
			a.emit(e, ...t);
		}), a.init(i, n), a.translator.options = i, a.translator.backendConnector.services.utils = { hasLoadedNamespace: a.hasLoadedNamespace.bind(a) }, a;
	}
	toJSON() {
		return {
			options: this.options,
			store: this.store,
			language: this.language,
			languages: this.languages,
			resolvedLanguage: this.resolvedLanguage
		};
	}
}.createInstance();
Z.createInstance, Z.dir, Z.init, Z.loadResources, Z.reloadResources, Z.use, Z.changeLanguage, Z.getFixedT, Z.t, Z.exists, Z.setDefaultNamespace, Z.hasLoadedNamespace, Z.loadNamespaces, Z.loadLanguages;
var ye = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, be = {
	"&amp;": "&",
	"&#38;": "&",
	"&lt;": "<",
	"&#60;": "<",
	"&gt;": ">",
	"&#62;": ">",
	"&apos;": "'",
	"&#39;": "'",
	"&quot;": "\"",
	"&#34;": "\"",
	"&nbsp;": " ",
	"&#160;": " ",
	"&copy;": "©",
	"&#169;": "©",
	"&reg;": "®",
	"&#174;": "®",
	"&hellip;": "…",
	"&#8230;": "…",
	"&#x2F;": "/",
	"&#47;": "/"
}, xe = (e) => be[e], Q = {
	bindI18n: "languageChanged",
	bindI18nStore: "",
	transEmptyNodeValue: "",
	transSupportBasicHtmlNodes: !0,
	transWrapTextNodes: "",
	transKeepBasicHtmlNodesFor: [
		"br",
		"strong",
		"i",
		"p"
	],
	useSuspense: !0,
	unescape: (e) => e.replace(ye, xe),
	transDefaultProps: void 0
}, Se = (e = {}) => {
	Q = {
		...Q,
		...e
	};
}, Ce = {
	type: "3rdParty",
	init(e) {
		Se(e.options.react);
	}
}, we = e();
function Te({ i18n: e, defaultNS: n, children: r }) {
	let a = i(() => ({
		i18n: e,
		defaultNS: n
	}), [e, n]);
	return t(we.Provider, { value: a }, r);
}
function Ee() {
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
function De(e, t) {
	if (typeof window > "u") return;
	let n = performance.now() - t;
	window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
}
Z.use(Ce).init({
	resources: {
		de: { translation: l },
		en: { translation: {
			"faq.faqList.howAreTheBenchmarks": "How are the benchmarks run?",
			"faq.faqList.allBenchmarksAreRun": "All benchmarks are run using Playwright on a consistent hardware setup (M2 MacBook Pro) with simulated 4G network conditions. Each test runs 50 iterations and we report median, P95, and P99 values.",
			"faq.faqList.whatLibrariesAreCurrently": "What libraries are currently tested?",
			"faq.faqList.weCurrentlyBenchmarkReactI18next": "We currently benchmark react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl, and Paraglide. We plan to add more based on community requests.",
			"faq.faqList.canIContributeA": "Can I contribute a new library integration?",
			"faq.faqList.absolutelyWeWelcomeCommunity": "Absolutely! We welcome community contributions. Fork the repository, add your library integration following our template, and submit a pull request. See the Contributing guide for details.",
			"faq.faqList.howOftenAreResults": "How often are results updated?",
			"faq.faqList.benchmarksRunAutomaticallyVia": "Benchmarks run automatically via CI on every dependency update and weekly on the main branch. Results are published to the dashboard within 24 hours.",
			"faq.faqList.areTheResultsStatistically": "Are the results statistically significant?",
			"faq.faqList.yesWeUseThe": "Yes. We use the Mann-Whitney U test with a significance level of 0.05 to compare distributions. We also report confidence intervals and effect sizes.",
			"faq.faq-header1.frequentlyAskedQuestions": "Frequently Asked Questions",
			"faq.faq-header1.everythingYouNeedToKnow": "Everything you need to know about i18n Benchmark.",
			"settings.preferencesSection.preferences": "Preferences",
			"settings.preferencesSection.emailNotifications": "Email Notifications",
			"settings.preferencesSection.receiveWeeklyBenchmarkReports": "Receive weekly benchmark reports",
			"settings.preferencesSection.darkMode": "Dark Mode",
			"settings.preferencesSection.useDarkColorScheme": "Use dark color scheme",
			"settings.preferencesSection.defaultLanguage": "Default Language",
			"settings.settingsHeader.settings": "Settings",
			"settings.settingsHeader.manageYourAccountPreferences": "Manage your account preferences and configuration.",
			"settings.settingsFooter.cancel": "Cancel",
			"settings.settingsFooter.saveChanges": "Save Changes",
			"settings.apiAccessSection.apiAccess": "API Access",
			"settings.apiAccessSection.apiKey": "API Key",
			"settings.apiAccessSection.useThisKeyTo": "Use this key to access the benchmarking API programmatically.",
			"settings.apiAccessSection.copy": "Copy",
			"settings.profileSection.profile": "Profile",
			"settings.profileSection.displayName": "Display Name",
			"settings.profileSection.email": "Email",
			"shared.header.home": "Home",
			"shared.header.methodology": "Methodology",
			"shared.header.mockPages": "Mock Pages",
			"shared.header.products": "Products",
			"shared.header.pricing": "Pricing",
			"shared.header.team": "Team",
			"shared.header.blog": "Blog",
			"shared.header.careers": "Careers",
			"shared.header.faq": "FAQ",
			"shared.header.contact": "Contact",
			"shared.header.settings": "Settings",
			"shared.header.goToGithub": "Go to GitHub",
			"shared.footer.resources": "Resources",
			"shared.footer.contact": "Contact",
			"shared.footer.github": "GitHub",
			"shared.footer.methodology": "Methodology",
			"shared.footer.contributing": "Contributing",
			"shared.footer.builtWith": "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
			"shared.footer.anOpenSourceTestApplication": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
			"shared.mockBanner.text": "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.",
			"shared.themeToggle.themeModeAutoSystemClick": "Theme mode: auto (system). Click to switch to light mode.",
			"shared.themeToggle.themeModeLightClick": "Theme mode: light. Click to switch to dark mode.",
			"shared.themeToggle.themeModeDarkClick": "Theme mode: dark. Click to switch to auto (system) mode.",
			"shared.themeToggle.themeAuto": "Theme: Auto",
			"shared.themeToggle.themeDark": "Theme: Dark",
			"shared.themeToggle.themeLight": "Theme: Light",
			"careers.careersHeader.careers": "Careers",
			"careers.careersHero.fromAnywhere": "from anywhere in the world",
			"careers.careersBenefits.competitivePay": "Competitive pay",
			"careers.careersBenefits.topOfMarket": "Top-of-market compensation",
			"careers.careersBenefits.openSourceTime": "Open source time",
			"careers.careersBenefits.twentyPercentTime": "20% time for OSS",
			"careers.careersPositions.seniorFrontendEngineer": "Senior Frontend Engineer",
			"careers.careersPositions.seniorFrontendEngineerDesc": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
			"careers.openPositions.openPositions": "Open Positions",
			"careers.openPositions.remote": "Remote",
			"careers.openPositions.fullTime": "Full-time",
			"careers.openPositions.applyNow": "Apply Now",
			"route.route.oopsPageNotFound": "Oops! Page not found",
			"route.route.returnToHome": "Return to Home",
			"route.route.couldNotMeasureHydrationDuration": "Could not measure hydration duration:",
			"pricing.pricingTiers.starterTier": "Starter",
			"pricing.pricingTiers.starterPrice": "$0",
			"pricing.pricingTiers.forever": "forever",
			"pricing.pricingTiers.runsPerDay": "5 benchmark runs/day",
			"pricing.pricingTiers.libraries3": "3 libraries",
			"pricing.pricingTiers.communitySupport": "Community support",
			"pricing.pricingTiers.publicResults": "Public results",
			"pricing.pricingTiers.getStarted": "Get Started",
			"pricing.pricingTiers.proTier": "Pro",
			"pricing.pricingTiers.proPrice": "$29",
			"pricing.pricingTiers.perMonth": "/month",
			"pricing.pricingTiers.unlimitedRuns": "Unlimited runs",
			"pricing.pricingTiers.allLibraries": "All libraries",
			"pricing.pricingTiers.prioritySupport": "Priority support",
			"pricing.pricingTiers.privateResults": "Private results",
			"pricing.pricingTiers.ciIntegration": "CI integration",
			"pricing.pricingTiers.historicalData": "Historical data",
			"pricing.pricingTiers.enterpriseTier": "Enterprise",
			"pricing.pricingTiers.custom": "Custom",
			"pricing.pricingTiers.everythingInPro": "Everything in Pro",
			"pricing.pricingTiers.onPremiseOption": "On-premise option",
			"pricing.pricingTiers.ssoSaml": "SSO & SAML",
			"pricing.pricingTiers.dedicatedAccountManager": "Dedicated account manager",
			"pricing.pricingTiers.customSLAs": "Custom SLAs",
			"pricing.pricingTiers.auditLogs": "Audit logs",
			"pricing.pricingTiers.trainingSessions": "Training sessions",
			"pricing.pricingTiers.contactSales": "Contact Sales",
			"pricing.pricingHeader.pricing": "Pricing",
			"pricing.pricingHeader.transparentPricingForEvery": "Transparent pricing for every stage of your i18n journey.",
			"products.products.benchmarkCLI": "Benchmark CLI",
			"products.products.benchmarkCLIDesc": "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
			"products.products.benchmarkCLIPrice": "Free",
			"products.products.benchmarkCloud": "Benchmark Cloud",
			"products.products.benchmarkCloudDesc": "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
			"products.products.benchmarkCloudPrice": "$29/mo",
			"products.products.benchmarkEnterprise": "Benchmark Enterprise",
			"products.products.benchmarkEnterpriseDesc": "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
			"products.products.benchmarkEnterprisePrice": "Contact Us",
			"products.products.migrationAssistant": "Migration Assistant",
			"products.products.migrationAssistantDesc": "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
			"products.products.migrationAssistantPrice": "$99 one-time",
			"products.products.translationQA": "Translation QA",
			"products.products.translationQADesc": "Automated quality checks for missing translations, pluralization issues, and context errors.",
			"products.products.translationQAPrice": "$19/mo",
			"products.products.bundleOptimizer": "Bundle Optimizer",
			"products.products.bundleOptimizerDesc": "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
			"products.products.bundleOptimizerPrice": "$49/mo",
			"products.products.learnMore": "Learn More",
			"products.productsHeader.ourProducts": "Our Products",
			"products.productsHeader.exploreOurSuiteOfTools": "Explore our suite of tools designed to help you build better i18n apps.",
			"contact.contactForm.name": "Name",
			"contact.contactForm.email": "Email",
			"contact.contactForm.subject": "Subject",
			"contact.contactForm.message": "Message",
			"contact.contactForm.sendMessage": "Send Message",
			"contact.contactForm.wellGetBackTo": "We'll get back to you within 48 hours.",
			"contact.contactHeader.contactUs": "Contact Us",
			"contact.contactHeader.haveQuestionsOrWantTo": "Have questions or want to contribute? We'd love to hear from you.",
			"about.aboutHeader.methodology": "Methodology",
			"about.aboutHeader.weDesignedThisBenchmarkTo": "We designed this benchmark to provide fair, reproducible, and meaningful comparisons of i18n libraries. Here's our approach.",
			"about.whatWeMeasure.bundleSizeImpact": "Bundle size impact",
			"about.whatWeMeasure.theAdditionalJavascriptBytesSent": "The additional JavaScript bytes sent to the client specifically due to the i18n library runtime, plus the translation files for the current locale.",
			"about.whatWeMeasure.renderingOverhead": "Rendering overhead",
			"about.whatWeMeasure.howMuchExtraTimeThe": "How much extra time the i18n layer adds to each component render — measured using React Profiler's actualDuration.",
			"about.whatWeMeasure.hydrationCost": "Hydration cost",
			"about.whatWeMeasure.duringSsrTranslationDataIs": "During SSR, translation data is serialized into the HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
			"about.whatWeMeasure.lazyLoadingEffectiveness": "Lazy loading effectiveness",
			"about.whatWeMeasure.whetherSplittingTranslationsByRoute": "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
			"about.whatWeMeasure.localeSwitchSpeed": "Locale switch speed",
			"about.whatWeMeasure.howFastTheAppCan": "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
			"about.whatWeMeasure.whatWeMeasure": "What We Measure",
			"about.aboutGrid.testEnvironment": "Test Environment",
			"about.aboutGrid.allBenchmarksRunOn": "All benchmarks run on the same hardware (M2 MacBook Pro, 16 GB RAM), same browser (Chromium 120 via Playwright), and same network conditions (simulated 4G). Each test is repeated 50 times and we report the median with P95/P99 percentiles.",
			"about.aboutGrid.applicationDesign": "Application Design",
			"about.aboutGrid.theBenchmarkAppHas10": "The benchmark app has 10 pages with realistic content — navigation, forms, dynamic lists, and static text. Each page uses 15–30 translation keys to represent real-world usage patterns rather than synthetic micro-benchmarks.",
			"about.aboutGrid.measurementMethodology": "Measurement Methodology",
			"about.aboutGrid.weUseBrowserNativeApis": "We use browser-native APIs (Performance Timeline, Resource Timing, Layout Instability) combined with React Profiler data. Bundle sizes are measured post-gzip using source-map-explorer for accuracy.",
			"about.aboutGrid.fairComparison": "Fair Comparison",
			"about.aboutGrid.eachI18nLibraryIsIntegrated": "Each i18n library is integrated following its official documentation and best practices. We consult maintainers when possible to ensure optimal configuration. The same React app, same Vite config, same deployment.",
			"home.understandingImpact.understandingTheImpact": "Understanding the Impact",
			"home.understandingImpact.whyASingleLargeJson": "Why a single large JSON can hurt performance",
			"home.understandingImpact.manyI18nLibrariesStoreTranslations": "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
			"home.understandingImpact.theJsonMustBeParsed": "The JSON must be parsed on every page load — blocking the main thread.",
			"home.understandingImpact.contextBasedArchitecturesCanCause": "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
			"home.understandingImpact.duringServerSideRenderingThe": "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
			"home.understandingImpact.theTradeOffsOfDynamic": "The trade-offs of dynamic loading",
			"home.understandingImpact.splittingTranslationsIntoPerRoute": "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
			"home.understandingImpact.waterfallRequests": "Waterfall requests:",
			"home.understandingImpact.flashOfUntranslatedContentFouc": "Flash of untranslated content (FOUC):",
			"home.understandingImpact.cacheInvalidation": "Cache invalidation:",
			"home.understandingImpact.whatThisBenchmarkMeasures": "What this benchmark measures",
			"home.understandingImpact.thisTestAppProvidesA": "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.",
			"home.whyItMatters.whyTheseMetricsMatter": "Why These Metrics Matter",
			"home.whyItMatters.bundleSize": "Bundle Size",
			"home.whyItMatters.theBundleIsTheData": "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
			"home.whyItMatters.renderingHydration": "Rendering & Hydration",
			"home.whyItMatters.connectingALargeJson": "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
			"home.whyItMatters.dynamicLoading": "Dynamic Loading",
			"home.whyItMatters.loadingAllTranslationsUpfront": "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.",
			"home.resultsTable.sampleResults": "Sample Results",
			"home.resultsTable.bundleSize": "Bundle Size",
			"home.resultsTable.lookupTime": "Lookup Time",
			"home.resultsTable.lazyLoading": "Lazy Loading",
			"home.hero.aTestApplicationDesignedTo": "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
			"home.hero.viewResults": "View Results",
			"team.teamGrid.sarahChen": "Sarah Chen",
			"team.teamGrid.founderLeadEngineer": "Founder & Lead Engineer",
			"team.teamGrid.formerGoogleEngineerWith10": "Former Google engineer with 10 years of experience building internationalization systems at scale.",
			"team.teamGrid.marcusWeber": "Marcus Weber",
			"team.teamGrid.performanceEngineer": "Performance Engineer",
			"team.teamGrid.specializesInJavascriptPerformanceOptimization": "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
			"team.teamGrid.aishaPatel": "Aisha Patel",
			"team.teamGrid.developerAdvocate": "Developer Advocate",
			"team.teamGrid.passionateAboutDeveloperExperienceAnd": "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
			"team.teamGrid.tomasRodriguez": "Tomás Rodríguez",
			"team.teamGrid.fullStackDeveloper": "Full-Stack Developer",
			"team.teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
			"team.teamGrid.yukiTanaka": "Yuki Tanaka",
			"team.teamGrid.dataAnalyst": "Data Analyst",
			"team.teamGrid.ensuresStatisticalRigorInAll": "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
			"team.teamGrid.elenaKowalski": "Elena Kowalski",
			"team.teamGrid.communityManager": "Community Manager",
			"team.teamGrid.managesCommunityContributionsPartnershipsAnd": "Manages community contributions, partnerships, and events. Background in open source governance.",
			"team.teamHeader.ourTeam": "Our Team",
			"team.teamHeader.meetThePeopleBehindI18n": "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.",
			"blog.blogList.i18nBenchmark2026Results": "i18n Benchmark 2026 Results",
			"blog.blogList.march152026": "March 15, 2026",
			"blog.blogList.weTested12DifferentInternationalization": "We tested 12 different internationalization libraries across 10 pages. Here are the detailed results with interactive charts.",
			"blog.blogList.howToReduceYourI18n": "How to Reduce Your i18n Bundle by 60%",
			"blog.blogList.march82026": "March 8, 2026",
			"blog.blogList.practicalStrategiesForOptimizingTranslation": "Practical strategies for optimizing translation file loading, tree-shaking unused locales, and leveraging build-time compilation.",
			"blog.blogList.theStateOfInternationalizationIn": "The State of Internationalization in 2026",
			"blog.blogList.february282026": "February 28, 2026",
			"blog.blogList.anOverviewOfTheCurrent": "An overview of the current i18n ecosystem, comparing approaches from message catalogs to compiler-based solutions.",
			"blog.blogList.migratingFromReactI18nextTo": "Migrating from react-i18next to Lingui",
			"blog.blogList.february152026": "February 15, 2026",
			"blog.blogList.aStepByStepGuide": "A step-by-step guide for migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
			"blog.blogList.serverComponentsAndI18nWhat": "Server Components and i18n: What Changes?",
			"blog.blogList.february12026": "February 1, 2026",
			"blog.blogList.reactServerComponentsIntroduceNew": "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
			"blog.blogList.benchmarkMethodologyHowWeTest": "Benchmark Methodology: How We Test",
			"blog.blogList.january202026": "January 20, 2026",
			"blog.blogList.aTransparentLookAtOur": "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
			"blog.blogList.readMore": "Read More →",
			"blog.blogHeader.blog": "Blog",
			"blog.blogHeader.insightsDeepDivesAnd": "Insights, deep dives, and updates from the i18n benchmarking community."
		} },
		es: { translation: u },
		fr: { translation: d },
		it: { translation: f },
		ja: { translation: p },
		ko: { translation: m },
		pt: { translation: h },
		ru: { translation: g },
		zh: { translation: _ }
	},
	lng: "en",
	fallbackLng: "en",
	interpolation: { escapeValue: !1 },
	react: { useSuspense: !1 },
	keySeparator: !1,
	nsSeparator: !1
});
var $ = Z;
function Oe({ children: e }) {
	let t = s().locale ?? "en", [i] = a(() => typeof performance < "u" ? performance.now() : 0);
	return r(() => {
		De("AppRoot", i);
	}, [i]), n(() => {
		$.language !== t && $.changeLanguage(t);
	}, [t]), n(() => {
		document.documentElement.lang = t;
	}, [t]), n(() => {
		Ee();
	}, []), c(Te, {
		i18n: $,
		children: e
	});
}
function ke({ children: e }) {
	return c(Oe, { children: e });
}
function Ae() {
	return c(ke, { children: c(b, {}) });
}
export { Ae as default };
