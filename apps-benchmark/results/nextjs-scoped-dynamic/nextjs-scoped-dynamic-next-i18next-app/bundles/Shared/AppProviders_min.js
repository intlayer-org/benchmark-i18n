import { Profiler as e, createContext as t, createElement as n, useEffect as r, useMemo as i } from "react";
import { useParams as a } from "next/navigation";
import { jsx as o } from "react/jsx-runtime";
var s = (e) => typeof e == "string", c = () => {
	let e, t, n = new Promise((n, r) => {
		e = n, t = r;
	});
	return n.resolve = e, n.reject = t, n;
}, l = (e) => e == null ? "" : String(e), u = (e, t, n) => {
	e.forEach((e) => {
		t[e] && (n[e] = t[e]);
	});
}, d = /###/g, f = (e) => e && e.includes("###") ? e.replace(d, ".") : e, p = (e) => !e || s(e), m = (e, t, n) => {
	let r = s(t) ? t.split(".") : t, i = 0;
	for (; i < r.length - 1;) {
		if (p(e)) return {};
		let t = f(r[i]);
		!e[t] && n && (e[t] = new n()), e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}, ++i;
	}
	return p(e) ? {} : {
		obj: e,
		k: f(r[i])
	};
}, h = (e, t, n) => {
	let { obj: r, k: i } = m(e, t, Object);
	if (r !== void 0 || t.length === 1) {
		r[i] = n;
		return;
	}
	let a = t[t.length - 1], o = t.slice(0, t.length - 1), s = m(e, o, Object);
	for (; s.obj === void 0 && o.length;) a = `${o[o.length - 1]}.${a}`, o = o.slice(0, o.length - 1), s = m(e, o, Object), s?.obj && s.obj[`${s.k}.${a}`] !== void 0 && (s.obj = void 0);
	s.obj[`${s.k}.${a}`] = n;
}, g = (e, t, n, r) => {
	let { obj: i, k: a } = m(e, t, Object);
	i[a] = i[a] || [], i[a].push(n);
}, _ = (e, t) => {
	let { obj: n, k: r } = m(e, t);
	if (n && Object.prototype.hasOwnProperty.call(n, r)) return n[r];
}, v = (e, t, n) => {
	let r = _(e, n);
	return r === void 0 ? _(t, n) : r;
}, y = (e, t, n) => {
	for (let r in t) r !== "__proto__" && r !== "constructor" && (r in e ? s(e[r]) || e[r] instanceof String || s(t[r]) || t[r] instanceof String ? n && (e[r] = t[r]) : y(e[r], t[r], n) : e[r] = t[r]);
	return e;
}, b = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), x = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;",
	"/": "&#x2F;"
}, S = (e) => s(e) ? e.replace(/[&<>"'\/]/g, (e) => x[e]) : e, C = class {
	constructor(e) {
		this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
	}
	getRegExp(e) {
		let t = this.regExpMap.get(e);
		if (t !== void 0) return t;
		let n = new RegExp(e);
		return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, n), this.regExpQueue.push(e), n;
	}
}, w = [
	" ",
	",",
	"?",
	"!",
	";"
], T = new C(20), E = (e, t, n) => {
	t ||= "", n ||= "";
	let r = w.filter((e) => !t.includes(e) && !n.includes(e));
	if (r.length === 0) return !0;
	let i = T.getRegExp(`(${r.map((e) => e === "?" ? "\\?" : e).join("|")})`), a = !i.test(e);
	if (!a) {
		let t = e.indexOf(n);
		t > 0 && !i.test(e.substring(0, t)) && (a = !0);
	}
	return a;
}, D = (e, t, n = ".") => {
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
}, O = (e) => e?.replace(/_/g, "-"), ee = {
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
}, k = new class e {
	constructor(e, t = {}) {
		this.init(e, t);
	}
	init(e, t = {}) {
		this.prefix = t.prefix || "i18next:", this.logger = e || ee, this.options = t, this.debug = t.debug;
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
		return r && !this.debug ? null : (s(e[0]) && (e[0] = `${n}${this.prefix} ${e[0]}`), this.logger[t](e));
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
}(), A = class {
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
}, j = class extends A {
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
		e.includes(".") ? o = e.split(".") : (o = [e, t], n && (Array.isArray(n) ? o.push(...n) : s(n) && i ? o.push(...n.split(i)) : o.push(n)));
		let c = _(this.data, o);
		return !c && !t && !n && e.includes(".") && (e = o[0], t = o[1], n = o.slice(2).join(".")), c || !a || !s(n) ? c : D(this.data?.[e]?.[t], n, i);
	}
	addResource(e, t, n, r, i = { silent: !1 }) {
		let a = i.keySeparator === void 0 ? this.options.keySeparator : i.keySeparator, o = [e, t];
		n && (o = o.concat(a ? n.split(a) : n)), e.includes(".") && (o = e.split("."), r = t, t = o[1]), this.addNamespaces(t), h(this.data, o, r), i.silent || this.emit("added", e, t, n, r);
	}
	addResources(e, t, n, r = { silent: !1 }) {
		for (let r in n) (s(n[r]) || Array.isArray(n[r])) && this.addResource(e, t, r, n[r], { silent: !0 });
		r.silent || this.emit("added", e, t, n);
	}
	addResourceBundle(e, t, n, r, i, a = {
		silent: !1,
		skipCopy: !1
	}) {
		let o = [e, t];
		e.includes(".") && (o = e.split("."), r = n, n = t, t = o[1]), this.addNamespaces(t);
		let s = _(this.data, o) || {};
		a.skipCopy || (n = JSON.parse(JSON.stringify(n))), r ? y(s, n, i) : s = {
			...s,
			...n
		}, h(this.data, o, s), a.silent || this.emit("added", e, t, n);
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
}, M = {
	processors: {},
	addPostProcessor(e) {
		this.processors[e.name] = e;
	},
	handle(e, t, n, r, i) {
		return e.forEach((e) => {
			t = this.processors[e]?.process(t, n, r, i) ?? t;
		}), t;
	}
}, N = Symbol("i18next/PATH_KEY");
function te() {
	let e = [], t = Object.create(null), n;
	return t.get = (r, i) => (n?.revoke?.(), i === N ? e : (e.push(i), n = Proxy.revocable(r, t), n.proxy)), Proxy.revocable(Object.create(null), t).proxy;
}
function P(e, t) {
	let { [N]: n } = e(te()), r = t?.keySeparator ?? ".", i = t?.nsSeparator ?? ":";
	if (n.length > 1 && i) {
		let e = t?.ns, a = Array.isArray(e) ? e : null;
		if (a && a.length > 1 && a.slice(1).includes(n[0])) return `${n[0]}${i}${n.slice(1).join(r)}`;
	}
	return n.join(r);
}
var F = (e) => !s(e) && typeof e != "boolean" && typeof e != "number", I = class e extends A {
	constructor(e, t = {}) {
		super(), u([
			"resourceStore",
			"languageUtils",
			"pluralResolver",
			"interpolator",
			"backendConnector",
			"i18nFormat",
			"utils"
		], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = k.create("translator"), this.checkedLoadedFor = {};
	}
	changeLanguage(e) {
		e && (this.language = e);
	}
	exists(e, t = { interpolation: {} }) {
		let n = { ...t };
		if (e == null) return !1;
		let r = this.resolve(e, n);
		if (r?.res === void 0) return !1;
		let i = F(r.res);
		return !(n.returnObjects === !1 && i);
	}
	extractFromKey(e, t) {
		let n = t.nsSeparator === void 0 ? this.options.nsSeparator : t.nsSeparator;
		n === void 0 && (n = ":");
		let r = t.keySeparator === void 0 ? this.options.keySeparator : t.keySeparator, i = t.ns || this.options.defaultNS || [], a = n && e.includes(n), o = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !E(e, n, r);
		if (a && !o) {
			let t = e.match(this.interpolator.nestingRegexp);
			if (t && t.length > 0) return {
				key: e,
				namespaces: s(i) ? [i] : i
			};
			let a = e.split(n);
			(n !== r || n === r && this.options.ns.includes(a[0])) && (i = a.shift()), e = a.join(r);
		}
		return {
			key: e,
			namespaces: s(i) ? [i] : i
		};
	}
	translate(t, n, r) {
		let i = typeof n == "object" ? { ...n } : n;
		if (typeof i != "object" && this.options.overloadTranslationOptionHandler && (i = this.options.overloadTranslationOptionHandler(arguments)), typeof i == "object" && (i = { ...i }), i ||= {}, t == null) return "";
		typeof t == "function" && (t = P(t, {
			...this.options,
			...i
		})), Array.isArray(t) || (t = [String(t)]), t = t.map((e) => typeof e == "function" ? P(e, {
			...this.options,
			...i
		}) : String(e));
		let a = i.returnDetails === void 0 ? this.options.returnDetails : i.returnDetails, o = i.keySeparator === void 0 ? this.options.keySeparator : i.keySeparator, { key: c, namespaces: l } = this.extractFromKey(t[t.length - 1], i), u = l[l.length - 1], d = i.nsSeparator === void 0 ? this.options.nsSeparator : i.nsSeparator;
		d === void 0 && (d = ":");
		let f = i.lng || this.language, p = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
		if (f?.toLowerCase() === "cimode") return p ? a ? {
			res: `${u}${d}${c}`,
			usedKey: c,
			exactUsedKey: c,
			usedLng: f,
			usedNS: u,
			usedParams: this.getUsedParamsDetails(i)
		} : `${u}${d}${c}` : a ? {
			res: c,
			usedKey: c,
			exactUsedKey: c,
			usedLng: f,
			usedNS: u,
			usedParams: this.getUsedParamsDetails(i)
		} : c;
		let m = this.resolve(t, i), h = m?.res, g = m?.usedKey || c, _ = m?.exactUsedKey || c, v = [
			"[object Number]",
			"[object Function]",
			"[object RegExp]"
		], y = i.joinArrays === void 0 ? this.options.joinArrays : i.joinArrays, b = !this.i18nFormat || this.i18nFormat.handleAsObject, x = i.count !== void 0 && !s(i.count), S = e.hasDefaultValue(i), C = x ? this.pluralResolver.getSuffix(f, i.count, i) : "", w = i.ordinal && x ? this.pluralResolver.getSuffix(f, i.count, { ordinal: !1 }) : "", T = x && !i.ordinal && i.count === 0, E = T && i[`defaultValue${this.options.pluralSeparator}zero`] || i[`defaultValue${C}`] || i[`defaultValue${w}`] || i.defaultValue, D = h;
		b && !h && S && (D = E);
		let O = F(D), ee = Object.prototype.toString.apply(D);
		if (b && D && O && !v.includes(ee) && !(s(y) && Array.isArray(D))) {
			if (!i.returnObjects && !this.options.returnObjects) {
				this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
				let e = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(g, D, {
					...i,
					ns: l
				}) : `key '${c} (${this.language})' returned an object instead of string.`;
				return a ? (m.res = e, m.usedParams = this.getUsedParamsDetails(i), m) : e;
			}
			if (o) {
				let e = Array.isArray(D), t = e ? [] : {}, n = e ? _ : g;
				for (let e in D) if (Object.prototype.hasOwnProperty.call(D, e)) {
					let r = `${n}${o}${e}`;
					S && !h ? t[e] = this.translate(r, {
						...i,
						defaultValue: F(E) ? E[e] : void 0,
						joinArrays: !1,
						ns: l
					}) : t[e] = this.translate(r, {
						...i,
						joinArrays: !1,
						ns: l
					}), t[e] === r && (t[e] = D[e]);
				}
				h = t;
			}
		} else if (b && s(y) && Array.isArray(h)) h = h.join(y), h &&= this.extendTranslation(h, t, i, r);
		else {
			let e = !1, n = !1;
			!this.isValidLookup(h) && S && (e = !0, h = E), this.isValidLookup(h) || (n = !0, h = c);
			let a = (i.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && n ? void 0 : h, s = S && E !== h && this.options.updateMissing;
			if (n || e || s) {
				if (this.logger.log(s ? "updateKey" : "missingKey", f, u, c, s ? E : h), o) {
					let e = this.resolve(c, {
						...i,
						keySeparator: !1
					});
					e && e.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
				}
				let e = [], t = this.languageUtils.getFallbackCodes(this.options.fallbackLng, i.lng || this.language);
				if (this.options.saveMissingTo === "fallback" && t && t[0]) for (let n = 0; n < t.length; n++) e.push(t[n]);
				else this.options.saveMissingTo === "all" ? e = this.languageUtils.toResolveHierarchy(i.lng || this.language) : e.push(i.lng || this.language);
				let n = (e, t, n) => {
					let r = S && n !== h ? n : a;
					this.options.missingKeyHandler ? this.options.missingKeyHandler(e, u, t, r, s, i) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(e, u, t, r, s, i), this.emit("missingKey", e, u, t, h);
				};
				this.options.saveMissing && (this.options.saveMissingPlurals && x ? e.forEach((e) => {
					let t = this.pluralResolver.getSuffixes(e, i);
					T && i[`defaultValue${this.options.pluralSeparator}zero`] && !t.includes(`${this.options.pluralSeparator}zero`) && t.push(`${this.options.pluralSeparator}zero`), t.forEach((t) => {
						n([e], c + t, i[`defaultValue${t}`] || E);
					});
				}) : n(e, c, E));
			}
			h = this.extendTranslation(h, t, i, m, r), n && h === c && this.options.appendNamespaceToMissingKey && (h = `${u}${d}${c}`), (n || e) && this.options.parseMissingKeyHandler && (h = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}${d}${c}` : c, e ? h : void 0, i));
		}
		return a ? (m.res = h, m.usedParams = this.getUsedParamsDetails(i), m) : h;
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
			let a = s(e) && (n?.interpolation?.skipOnVariables === void 0 ? this.options.interpolation.skipOnVariables : n.interpolation.skipOnVariables), o;
			if (a) {
				let t = e.match(this.interpolator.nestingRegexp);
				o = t && t.length;
			}
			let c = n.replace && !s(n.replace) ? n.replace : n;
			if (this.options.interpolation.defaultVariables && (c = {
				...this.options.interpolation.defaultVariables,
				...c
			}), e = this.interpolator.interpolate(e, c, n.lng || this.language || r.usedLng, n), a) {
				let t = e.match(this.interpolator.nestingRegexp), r = t && t.length;
				o < r && (n.nest = !1);
			}
			!n.lng && r && r.res && (n.lng = this.language || r.usedLng), n.nest !== !1 && (e = this.interpolator.nest(e, (...e) => i?.[0] === e[0] && !n.context ? (this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`), null) : this.translate(...e, t), n)), n.interpolation && this.interpolator.reset();
		}
		let a = n.postProcess || this.options.postProcess, o = s(a) ? [a] : a;
		return e != null && o?.length && n.applyPostProcessor !== !1 && (e = M.handle(o, e, t, this.options && this.options.postProcessPassResolved ? {
			i18nResolved: {
				...r,
				usedParams: this.getUsedParamsDetails(n)
			},
			...n
		} : n, this)), e;
	}
	resolve(e, t = {}) {
		let n, r, i, a, o;
		return s(e) && (e = [e]), Array.isArray(e) && (e = e.map((e) => typeof e == "function" ? P(e, {
			...this.options,
			...t
		}) : e)), e.forEach((e) => {
			if (this.isValidLookup(n)) return;
			let c = this.extractFromKey(e, t), l = c.key;
			r = l;
			let u = c.namespaces;
			this.options.fallbackNS && (u = u.concat(this.options.fallbackNS));
			let d = t.count !== void 0 && !s(t.count), f = d && !t.ordinal && t.count === 0, p = t.context !== void 0 && (s(t.context) || typeof t.context == "number") && t.context !== "", m = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
			u.forEach((e) => {
				this.isValidLookup(n) || (o = e, !this.checkedLoadedFor[`${m[0]}-${e}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(o) && (this.checkedLoadedFor[`${m[0]}-${e}`] = !0, this.logger.warn(`key "${r}" for languages "${m.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), m.forEach((r) => {
					if (this.isValidLookup(n)) return;
					a = r;
					let o = [l];
					if (this.i18nFormat?.addLookupKeys) this.i18nFormat.addLookupKeys(o, l, r, e, t);
					else {
						let e;
						d && (e = this.pluralResolver.getSuffix(r, t.count, t));
						let n = `${this.options.pluralSeparator}zero`, i = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
						if (d && (t.ordinal && e.startsWith(i) && o.push(l + e.replace(i, this.options.pluralSeparator)), o.push(l + e), f && o.push(l + n)), p) {
							let r = `${l}${this.options.contextSeparator || "_"}${t.context}`;
							o.push(r), d && (t.ordinal && e.startsWith(i) && o.push(r + e.replace(i, this.options.pluralSeparator)), o.push(r + e), f && o.push(r + n));
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
		], n = e.replace && !s(e.replace), r = n ? e.replace : e;
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
}, L = class {
	constructor(e) {
		this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = k.create("languageUtils");
	}
	getScriptPartFromCode(e) {
		if (e = O(e), !e || !e.includes("-")) return null;
		let t = e.split("-");
		return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"));
	}
	getLanguagePartFromCode(e) {
		if (e = O(e), !e || !e.includes("-")) return e;
		let t = e.split("-");
		return this.formatLanguageCode(t[0]);
	}
	formatLanguageCode(e) {
		if (s(e) && e.includes("-")) {
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
		if (typeof e == "function" && (e = e(t)), s(e) && (e = [e]), Array.isArray(e)) return e;
		if (!t) return e.default || [];
		let n = e[t];
		return n ||= e[this.getScriptPartFromCode(t)], n ||= e[this.formatLanguageCode(t)], n ||= e[this.getLanguagePartFromCode(t)], n ||= e.default, n || [];
	}
	toResolveHierarchy(e, t) {
		let n = this.getFallbackCodes((t === !1 ? [] : t) || this.options.fallbackLng || [], e), r = [], i = (e) => {
			e && (this.isSupportedCode(e) ? r.push(e) : this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`));
		};
		return s(e) && (e.includes("-") || e.includes("_")) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(e))) : s(e) && i(this.formatLanguageCode(e)), n.forEach((e) => {
			r.includes(e) || i(this.formatLanguageCode(e));
		}), r;
	}
}, R = {
	zero: 0,
	one: 1,
	two: 2,
	few: 3,
	many: 4,
	other: 5
}, z = {
	select: (e) => e === 1 ? "one" : "other",
	resolvedOptions: () => ({ pluralCategories: ["one", "other"] })
}, ne = class {
	constructor(e, t = {}) {
		this.languageUtils = e, this.options = t, this.logger = k.create("pluralResolver"), this.pluralRulesCache = {};
	}
	clearCache() {
		this.pluralRulesCache = {};
	}
	getRule(e, t = {}) {
		let n = O(e === "dev" ? "en" : e), r = t.ordinal ? "ordinal" : "cardinal", i = JSON.stringify({
			cleanedCode: n,
			type: r
		});
		if (i in this.pluralRulesCache) return this.pluralRulesCache[i];
		let a;
		try {
			a = new Intl.PluralRules(n, { type: r });
		} catch {
			if (typeof Intl > "u") return this.logger.error("No Intl support, please use an Intl polyfill!"), z;
			if (!e.match(/-|_/)) return z;
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
		return n ||= this.getRule("dev", t), n ? n.resolvedOptions().pluralCategories.sort((e, t) => R[e] - R[t]).map((e) => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${e}`) : [];
	}
	getSuffix(e, t, n = {}) {
		let r = this.getRule(e, n);
		return r ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${r.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, n));
	}
}, B = (e, t, n, r = ".", i = !0) => {
	let a = v(e, t, n);
	return !a && i && s(n) && (a = D(e, n, r), a === void 0 && (a = D(t, n, r))), a;
}, V = (e) => e.replace(/\$/g, "$$$$"), H = class {
	constructor(e = {}) {
		this.logger = k.create("interpolator"), this.options = e, this.format = e?.interpolation?.format || ((e) => e), this.init(e);
	}
	init(e = {}) {
		e.interpolation ||= { escapeValue: !0 };
		let { escape: t, escapeValue: n, useRawValueToEscape: r, prefix: i, prefixEscaped: a, suffix: o, suffixEscaped: s, formatSeparator: c, unescapeSuffix: l, unescapePrefix: u, nestingPrefix: d, nestingPrefixEscaped: f, nestingSuffix: p, nestingSuffixEscaped: m, nestingOptionsSeparator: h, maxReplaces: g, alwaysFormat: _ } = e.interpolation;
		this.escape = t === void 0 ? S : t, this.escapeValue = n === void 0 ? !0 : n, this.useRawValueToEscape = r === void 0 ? !1 : r, this.prefix = i ? b(i) : a || "{{", this.suffix = o ? b(o) : s || "}}", this.formatSeparator = c || ",", this.unescapePrefix = l ? "" : u || "-", this.unescapeSuffix = this.unescapePrefix ? "" : l || "", this.nestingPrefix = d ? b(d) : f || b("$t("), this.nestingSuffix = p ? b(p) : m || b(")"), this.nestingOptionsSeparator = h || ",", this.maxReplaces = g || 1e3, this.alwaysFormat = _ === void 0 ? !1 : _, this.resetRegExp();
	}
	reset() {
		this.options && this.init(this.options);
	}
	resetRegExp() {
		let e = (e, t) => e?.source === t ? (e.lastIndex = 0, e) : new RegExp(t, "g");
		this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
	}
	interpolate(e, t, n, r) {
		let i, a, o, c = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, u = (e) => {
			if (!e.includes(this.formatSeparator)) {
				let i = B(t, c, e, this.options.keySeparator, this.options.ignoreJSONStructure);
				return this.alwaysFormat ? this.format(i, void 0, n, {
					...r,
					...t,
					interpolationkey: e
				}) : i;
			}
			let i = e.split(this.formatSeparator), a = i.shift().trim(), o = i.join(this.formatSeparator).trim();
			return this.format(B(t, c, a, this.options.keySeparator, this.options.ignoreJSONStructure), o, n, {
				...r,
				...t,
				interpolationkey: a
			});
		};
		this.resetRegExp();
		let d = r?.missingInterpolationHandler || this.options.missingInterpolationHandler, f = r?.interpolation?.skipOnVariables === void 0 ? this.options.interpolation.skipOnVariables : r.interpolation.skipOnVariables;
		return [{
			regex: this.regexpUnescape,
			safeValue: (e) => V(e)
		}, {
			regex: this.regexp,
			safeValue: (e) => this.escapeValue ? V(this.escape(e)) : V(e)
		}].forEach((t) => {
			for (o = 0; i = t.regex.exec(e);) {
				let n = i[1].trim();
				if (a = u(n), a === void 0) if (typeof d == "function") {
					let t = d(e, i, r);
					a = s(t) ? t : "";
				} else if (r && Object.prototype.hasOwnProperty.call(r, n)) a = "";
				else if (f) {
					a = i[0];
					continue;
				} else this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`), a = "";
				else !s(a) && !this.useRawValueToEscape && (a = l(a));
				let c = t.safeValue(a);
				if (e = e.replace(i[0], c), f ? (t.regex.lastIndex += a.length, t.regex.lastIndex -= i[0].length) : t.regex.lastIndex = 0, o++, o >= this.maxReplaces) break;
			}
		}), e;
	}
	nest(e, t, n = {}) {
		let r, i, a, o = (e, t) => {
			let n = this.nestingOptionsSeparator;
			if (!e.includes(n)) return e;
			let r = e.split(RegExp(`${b(n)}[ ]*{`)), i = `{${r[1]}`;
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
			let c = [];
			a = { ...n }, a = a.replace && !s(a.replace) ? a.replace : a, a.applyPostProcessor = !1, delete a.defaultValue;
			let u = /{.*}/.test(r[1]) ? r[1].lastIndexOf("}") + 1 : r[1].indexOf(this.formatSeparator);
			if (u !== -1 && (c = r[1].slice(u).split(this.formatSeparator).map((e) => e.trim()).filter(Boolean), r[1] = r[1].slice(0, u)), i = t(o.call(this, r[1].trim(), a), a), i && r[0] === e && !s(i)) return i;
			s(i) || (i = l(i)), i ||= (this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`), ""), c.length && (i = c.reduce((e, t) => this.format(e, t, n.lng, {
				...n,
				interpolationkey: r[1].trim()
			}), i.trim())), e = e.replace(r[0], i), this.regexp.lastIndex = 0;
		}
		return e;
	}
}, re = (e) => {
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
}, U = (e) => {
	let t = {};
	return (n, r, i) => {
		let a = i;
		i && i.interpolationkey && i.formatParams && i.formatParams[i.interpolationkey] && i[i.interpolationkey] && (a = {
			...a,
			[i.interpolationkey]: void 0
		});
		let o = r + JSON.stringify(a), s = t[o];
		return s || (s = e(O(r), i), t[o] = s), s(n);
	};
}, ie = (e) => (t, n, r) => e(O(n), r)(t), ae = class {
	constructor(e = {}) {
		this.logger = k.create("formatter"), this.options = e, this.init(e);
	}
	init(e, t = { interpolation: {} }) {
		this.formatSeparator = t.interpolation.formatSeparator || ",";
		let n = t.cacheInBuiltFormats ? U : ie;
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
		this.formats[e.toLowerCase().trim()] = U(t);
	}
	format(e, t, n, r = {}) {
		if (!t || e == null) return e;
		let i = t.split(this.formatSeparator);
		if (i.length > 1 && i[0].indexOf("(") > 1 && !i[0].includes(")") && i.find((e) => e.includes(")"))) {
			let e = i.findIndex((e) => e.includes(")"));
			i[0] = [i[0], ...i.splice(1, e)].join(this.formatSeparator);
		}
		return i.reduce((e, t) => {
			let { formatName: i, formatOptions: a } = re(t);
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
}, oe = (e, t) => {
	e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}, se = class extends A {
	constructor(e, t, n, r = {}) {
		super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = r, this.logger = k.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = r.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5, this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350, this.state = {}, this.queue = [], this.backend?.init?.(n, r.backend, r);
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
			g(n.loaded, [i], a), oe(n, e), t && n.errors.push(t), n.pendingCount === 0 && !n.done && (Object.keys(n.loaded).forEach((e) => {
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
		s(e) && (e = this.languageUtils.toResolveHierarchy(e)), s(t) && (t = [t]);
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
}, W = () => ({
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
		if (typeof e[1] == "object" && (t = e[1]), s(e[1]) && (t.defaultValue = e[1]), s(e[2]) && (t.tDescription = e[2]), typeof e[2] == "object" || typeof e[3] == "object") {
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
}), G = (e) => (s(e.ns) && (e.ns = [e.ns]), s(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]), s(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && !e.supportedLngs.includes("cimode") && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e), K = () => {}, ce = (e) => {
	Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((t) => {
		typeof e[t] == "function" && (e[t] = e[t].bind(e));
	});
}, q = class e extends A {
	constructor(e = {}, t) {
		if (super(), this.options = G(e), this.services = {}, this.logger = k, this.modules = { external: [] }, ce(this), t && !this.isInitialized && !e.isClone) {
			if (!this.options.initAsync) return this.init(e, t), this;
			setTimeout(() => {
				this.init(e, t);
			}, 0);
		}
	}
	init(e = {}, t) {
		this.isInitializing = !0, typeof e == "function" && (t = e, e = {}), e.defaultNS == null && e.ns && (s(e.ns) ? e.defaultNS = e.ns : e.ns.includes("translation") || (e.defaultNS = e.ns[0]));
		let n = W();
		this.options = {
			...n,
			...this.options,
			...G(e)
		}, this.options.interpolation = {
			...n.interpolation,
			...this.options.interpolation
		}, e.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = e.keySeparator), e.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = e.nsSeparator), typeof this.options.overloadTranslationOptionHandler != "function" && (this.options.overloadTranslationOptionHandler = n.overloadTranslationOptionHandler);
		let r = (e) => e ? typeof e == "function" ? new e() : e : null;
		if (!this.options.isClone) {
			this.modules.logger ? k.init(r(this.modules.logger), this.options) : k.init(null, this.options);
			let e;
			e = this.modules.formatter ? this.modules.formatter : ae;
			let t = new L(this.options);
			this.store = new j(this.options.resources, this.options);
			let n = this.services;
			n.logger = k, n.resourceStore = this.store, n.languageUtils = t, n.pluralResolver = new ne(t, { prepend: this.options.pluralSeparator }), e && (n.formatter = r(e), n.formatter.init && n.formatter.init(n, this.options), this.options.interpolation.format = n.formatter.format.bind(n.formatter)), n.interpolator = new H(this.options), n.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }, n.backendConnector = new se(r(this.modules.backend), n.resourceStore, n, this.options), n.backendConnector.on("*", (e, ...t) => {
				this.emit(e, ...t);
			}), this.modules.languageDetector && (n.languageDetector = r(this.modules.languageDetector), n.languageDetector.init && n.languageDetector.init(n, this.options.detection, this.options)), this.modules.i18nFormat && (n.i18nFormat = r(this.modules.i18nFormat), n.i18nFormat.init && n.i18nFormat.init(this)), this.translator = new I(this.services, this.options), this.translator.on("*", (e, ...t) => {
				this.emit(e, ...t);
			}), this.modules.external.forEach((e) => {
				e.init && e.init(this);
			});
		}
		if (this.format = this.options.interpolation.format, t ||= K, this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
		let i = c(), a = () => {
			let e = (e, n) => {
				this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), i.resolve(n), t(e, n);
			};
			if (this.languages && !this.isInitialized) return e(null, this.t.bind(this));
			this.changeLanguage(this.options.lng, e);
		};
		return this.options.resources || !this.options.initAsync ? a() : setTimeout(a, 0), i;
	}
	loadResources(e, t = K) {
		let n = t, r = s(e) ? e : this.language;
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
		let r = c();
		return typeof e == "function" && (n = e, e = void 0), typeof t == "function" && (n = t, t = void 0), e ||= this.languages, t ||= this.options.ns, n ||= K, this.services.backendConnector.reload(e, t, (e) => {
			r.resolve(), n(e);
		}), r;
	}
	use(e) {
		if (!e) throw Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
		if (!e.type) throw Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
		return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && M.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
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
		let n = c();
		this.emit("languageChanging", e);
		let r = (e) => {
			this.language = e, this.languages = this.services.languageUtils.toResolveHierarchy(e), this.resolvedLanguage = void 0, this.setResolvedLanguage(e);
		}, i = (i, a) => {
			a ? this.isLanguageChangingTo === e && (r(a), this.translator.changeLanguage(a), this.isLanguageChangingTo = void 0, this.emit("languageChanged", a), this.logger.log("languageChanged", a)) : this.isLanguageChangingTo = void 0, n.resolve((...e) => this.t(...e)), t && t(i, (...e) => this.t(...e));
		}, a = (t) => {
			!e && !t && this.services.languageDetector && (t = []);
			let n = s(t) ? t : t && t[0], a = this.store.hasLanguageSomeTranslations(n) ? n : this.services.languageUtils.getBestMatchFromCodes(s(t) ? [t] : t);
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
			typeof a.keyPrefix == "function" && (a.keyPrefix = P(a.keyPrefix, o));
			let s = this.options.keySeparator || ".", c;
			return a.keyPrefix && Array.isArray(e) ? c = e.map((e) => (typeof e == "function" && (e = P(e, o)), `${a.keyPrefix}${s}${e}`)) : (typeof e == "function" && (e = P(e, o)), c = a.keyPrefix ? `${a.keyPrefix}${s}${e}` : e), this.t(c, a);
		};
		return s(e) ? r.lng = e : r.lngs = e, r.ns = t, r.keyPrefix = n, r;
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
		let n = c();
		return this.options.ns ? (s(e) && (e = [e]), e.forEach((e) => {
			this.options.ns.includes(e) || this.options.ns.push(e);
		}), this.loadResources((e) => {
			n.resolve(), t && t(e);
		}), n) : (t && t(), Promise.resolve());
	}
	loadLanguages(e, t) {
		let n = c();
		s(e) && (e = [e]);
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
		let t = /* @__PURE__ */ "ar.shu.sqr.ssh.xaa.yhd.yud.aao.abh.abv.acm.acq.acw.acx.acy.adf.ads.aeb.aec.afb.ajp.apc.apd.arb.arq.ars.ary.arz.auz.avl.ayh.ayl.ayn.ayp.bbz.pga.he.iw.ps.pbt.pbu.pst.prp.prd.ug.ur.ydd.yds.yih.ji.yi.hbo.men.xmn.fa.jpr.peo.pes.prs.dv.sam.ckb".split("."), n = this.services?.languageUtils || new L(W());
		return e.toLowerCase().indexOf("-latn") > 1 ? "ltr" : t.includes(n.getLanguagePartFromCode(e)) || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
	}
	static createInstance(t = {}, n) {
		let r = new e(t, n);
		return r.createInstance = e.createInstance, r;
	}
	cloneInstance(t = {}, n = K) {
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
		}), a.services = { ...this.services }, a.services.utils = { hasLoadedNamespace: a.hasLoadedNamespace.bind(a) }, r && (a.store = new j(Object.keys(this.store.data).reduce((e, t) => (e[t] = { ...this.store.data[t] }, e[t] = Object.keys(e[t]).reduce((n, r) => (n[r] = { ...e[t][r] }, n), e[t]), e), {}), i), a.services.resourceStore = a.store), t.interpolation) {
			let e = {
				...W().interpolation,
				...this.options.interpolation,
				...t.interpolation
			}, n = {
				...i,
				interpolation: e
			};
			a.services.interpolator = new H(n);
		}
		return a.translator = new I(a.services, i), a.translator.on("*", (e, ...t) => {
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
q.createInstance, q.dir, q.init, q.loadResources, q.reloadResources, q.use, q.changeLanguage, q.getFixedT, q.t, q.exists, q.setDefaultNamespace, q.hasLoadedNamespace, q.loadNamespaces, q.loadLanguages;
var le = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, ue = {
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
}, de = (e) => ue[e], J = {
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
	unescape: (e) => e.replace(le, de),
	transDefaultProps: void 0
}, fe = (e = {}) => {
	J = {
		...J,
		...e
	};
}, pe = {
	type: "3rdParty",
	init(e) {
		fe(e.options.react);
	}
}, me = t();
function he({ i18n: e, defaultNS: t, children: r }) {
	let a = i(() => ({
		i18n: e,
		defaultNS: t
	}), [e, t]);
	return n(me.Provider, { value: a }, r);
}
function ge() {
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
function _e(e, t, n) {
	if (!(typeof window > "u") && t !== "nested-update") try {
		window.__RENDER_METRICS__ = window.__RENDER_METRICS__ || {}, window.__RENDER_METRICS__[e] = window.__RENDER_METRICS__[e] || [], window.__RENDER_METRICS__[e].push(n);
	} catch (e) {
		console.warn("onRenderCallback failed:", e);
	}
}
var Y = (e, t, n) => {
	let r = t.lastIndexOf("?"), i = e[r === -1 || r < t.lastIndexOf("/") ? t : t.slice(0, r)];
	return i ? typeof i == "function" ? i() : Promise.resolve(i) : new Promise((e, r) => {
		(typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, /* @__PURE__ */ Error("Unknown variable dynamic import: " + t + (t.split("/").length === n ? "" : ". Note that variables only represent file names one level deep."))));
	});
}, X = [
	"about",
	"blog",
	"careers",
	"contact",
	"faq",
	"home",
	"pricing",
	"products",
	"route",
	"settings",
	"shared",
	"team"
], ve = "shared", Z = /* @__PURE__ */ new Set();
async function ye(e, t) {
	let n = e || "en";
	try {
		return (await Y(Object.assign({
			"./locales/de/about.json": () => import("../i18n/locales/de/about.json"),
			"./locales/de/blog.json": () => import("../i18n/locales/de/blog.json"),
			"./locales/de/careers.json": () => import("../i18n/locales/de/careers.json"),
			"./locales/de/contact.json": () => import("../i18n/locales/de/contact.json"),
			"./locales/de/faq.json": () => import("../i18n/locales/de/faq.json"),
			"./locales/de/home.json": () => import("../i18n/locales/de/home.json"),
			"./locales/de/pricing.json": () => import("../i18n/locales/de/pricing.json"),
			"./locales/de/products.json": () => import("../i18n/locales/de/products.json"),
			"./locales/de/route.json": () => import("../i18n/locales/de/route.json"),
			"./locales/de/settings.json": () => import("../i18n/locales/de/settings.json"),
			"./locales/de/shared.json": () => import("../i18n/locales/de/shared.json"),
			"./locales/de/team.json": () => import("../i18n/locales/de/team.json"),
			"./locales/en/about.json": () => import("./about-BaAYAvkE.js"),
			"./locales/en/blog.json": () => import("./blog-CzOpmp0n.js"),
			"./locales/en/careers.json": () => import("./careers-1TOv7qq6.js"),
			"./locales/en/contact.json": () => import("./contact-DjqHx5tM.js"),
			"./locales/en/faq.json": () => import("./faq-XJpq1JTj.js"),
			"./locales/en/home.json": () => import("./home-CdZlgL3b.js"),
			"./locales/en/pricing.json": () => import("./pricing-BPjt5t_O.js"),
			"./locales/en/products.json": () => import("./products-Df41mIQC.js"),
			"./locales/en/route.json": () => import("./route-5-5GFmRv.js"),
			"./locales/en/settings.json": () => import("./settings-CmZ84y7S.js"),
			"./locales/en/shared.json": () => import("./shared-CBRuvueV.js"),
			"./locales/en/team.json": () => import("./team-CuN0wXZd.js"),
			"./locales/es/about.json": () => import("../i18n/locales/es/about.json"),
			"./locales/es/blog.json": () => import("../i18n/locales/es/blog.json"),
			"./locales/es/careers.json": () => import("../i18n/locales/es/careers.json"),
			"./locales/es/contact.json": () => import("../i18n/locales/es/contact.json"),
			"./locales/es/faq.json": () => import("../i18n/locales/es/faq.json"),
			"./locales/es/home.json": () => import("../i18n/locales/es/home.json"),
			"./locales/es/pricing.json": () => import("../i18n/locales/es/pricing.json"),
			"./locales/es/products.json": () => import("../i18n/locales/es/products.json"),
			"./locales/es/route.json": () => import("../i18n/locales/es/route.json"),
			"./locales/es/settings.json": () => import("../i18n/locales/es/settings.json"),
			"./locales/es/shared.json": () => import("../i18n/locales/es/shared.json"),
			"./locales/es/team.json": () => import("../i18n/locales/es/team.json"),
			"./locales/fr/about.json": () => import("../i18n/locales/fr/about.json"),
			"./locales/fr/blog.json": () => import("../i18n/locales/fr/blog.json"),
			"./locales/fr/careers.json": () => import("../i18n/locales/fr/careers.json"),
			"./locales/fr/contact.json": () => import("../i18n/locales/fr/contact.json"),
			"./locales/fr/faq.json": () => import("../i18n/locales/fr/faq.json"),
			"./locales/fr/home.json": () => import("../i18n/locales/fr/home.json"),
			"./locales/fr/pricing.json": () => import("../i18n/locales/fr/pricing.json"),
			"./locales/fr/products.json": () => import("../i18n/locales/fr/products.json"),
			"./locales/fr/route.json": () => import("../i18n/locales/fr/route.json"),
			"./locales/fr/settings.json": () => import("../i18n/locales/fr/settings.json"),
			"./locales/fr/shared.json": () => import("../i18n/locales/fr/shared.json"),
			"./locales/fr/team.json": () => import("../i18n/locales/fr/team.json"),
			"./locales/it/about.json": () => import("../i18n/locales/it/about.json"),
			"./locales/it/blog.json": () => import("../i18n/locales/it/blog.json"),
			"./locales/it/careers.json": () => import("../i18n/locales/it/careers.json"),
			"./locales/it/contact.json": () => import("../i18n/locales/it/contact.json"),
			"./locales/it/faq.json": () => import("../i18n/locales/it/faq.json"),
			"./locales/it/home.json": () => import("../i18n/locales/it/home.json"),
			"./locales/it/pricing.json": () => import("../i18n/locales/it/pricing.json"),
			"./locales/it/products.json": () => import("../i18n/locales/it/products.json"),
			"./locales/it/route.json": () => import("../i18n/locales/it/route.json"),
			"./locales/it/settings.json": () => import("../i18n/locales/it/settings.json"),
			"./locales/it/shared.json": () => import("../i18n/locales/it/shared.json"),
			"./locales/it/team.json": () => import("../i18n/locales/it/team.json"),
			"./locales/ja/about.json": () => import("../i18n/locales/ja/about.json"),
			"./locales/ja/blog.json": () => import("../i18n/locales/ja/blog.json"),
			"./locales/ja/careers.json": () => import("../i18n/locales/ja/careers.json"),
			"./locales/ja/contact.json": () => import("../i18n/locales/ja/contact.json"),
			"./locales/ja/faq.json": () => import("../i18n/locales/ja/faq.json"),
			"./locales/ja/home.json": () => import("../i18n/locales/ja/home.json"),
			"./locales/ja/pricing.json": () => import("../i18n/locales/ja/pricing.json"),
			"./locales/ja/products.json": () => import("../i18n/locales/ja/products.json"),
			"./locales/ja/route.json": () => import("../i18n/locales/ja/route.json"),
			"./locales/ja/settings.json": () => import("../i18n/locales/ja/settings.json"),
			"./locales/ja/shared.json": () => import("../i18n/locales/ja/shared.json"),
			"./locales/ja/team.json": () => import("../i18n/locales/ja/team.json"),
			"./locales/ko/about.json": () => import("../i18n/locales/ko/about.json"),
			"./locales/ko/blog.json": () => import("../i18n/locales/ko/blog.json"),
			"./locales/ko/careers.json": () => import("../i18n/locales/ko/careers.json"),
			"./locales/ko/contact.json": () => import("../i18n/locales/ko/contact.json"),
			"./locales/ko/faq.json": () => import("../i18n/locales/ko/faq.json"),
			"./locales/ko/home.json": () => import("../i18n/locales/ko/home.json"),
			"./locales/ko/pricing.json": () => import("../i18n/locales/ko/pricing.json"),
			"./locales/ko/products.json": () => import("../i18n/locales/ko/products.json"),
			"./locales/ko/route.json": () => import("../i18n/locales/ko/route.json"),
			"./locales/ko/settings.json": () => import("../i18n/locales/ko/settings.json"),
			"./locales/ko/shared.json": () => import("../i18n/locales/ko/shared.json"),
			"./locales/ko/team.json": () => import("../i18n/locales/ko/team.json"),
			"./locales/pt/about.json": () => import("../i18n/locales/pt/about.json"),
			"./locales/pt/blog.json": () => import("../i18n/locales/pt/blog.json"),
			"./locales/pt/careers.json": () => import("../i18n/locales/pt/careers.json"),
			"./locales/pt/contact.json": () => import("../i18n/locales/pt/contact.json"),
			"./locales/pt/faq.json": () => import("../i18n/locales/pt/faq.json"),
			"./locales/pt/home.json": () => import("../i18n/locales/pt/home.json"),
			"./locales/pt/pricing.json": () => import("../i18n/locales/pt/pricing.json"),
			"./locales/pt/products.json": () => import("../i18n/locales/pt/products.json"),
			"./locales/pt/route.json": () => import("../i18n/locales/pt/route.json"),
			"./locales/pt/settings.json": () => import("../i18n/locales/pt/settings.json"),
			"./locales/pt/shared.json": () => import("../i18n/locales/pt/shared.json"),
			"./locales/pt/team.json": () => import("../i18n/locales/pt/team.json"),
			"./locales/ru/about.json": () => import("../i18n/locales/ru/about.json"),
			"./locales/ru/blog.json": () => import("../i18n/locales/ru/blog.json"),
			"./locales/ru/careers.json": () => import("../i18n/locales/ru/careers.json"),
			"./locales/ru/contact.json": () => import("../i18n/locales/ru/contact.json"),
			"./locales/ru/faq.json": () => import("../i18n/locales/ru/faq.json"),
			"./locales/ru/home.json": () => import("../i18n/locales/ru/home.json"),
			"./locales/ru/pricing.json": () => import("../i18n/locales/ru/pricing.json"),
			"./locales/ru/products.json": () => import("../i18n/locales/ru/products.json"),
			"./locales/ru/route.json": () => import("../i18n/locales/ru/route.json"),
			"./locales/ru/settings.json": () => import("../i18n/locales/ru/settings.json"),
			"./locales/ru/shared.json": () => import("../i18n/locales/ru/shared.json"),
			"./locales/ru/team.json": () => import("../i18n/locales/ru/team.json"),
			"./locales/zh/about.json": () => import("../i18n/locales/zh/about.json"),
			"./locales/zh/blog.json": () => import("../i18n/locales/zh/blog.json"),
			"./locales/zh/careers.json": () => import("../i18n/locales/zh/careers.json"),
			"./locales/zh/contact.json": () => import("../i18n/locales/zh/contact.json"),
			"./locales/zh/faq.json": () => import("../i18n/locales/zh/faq.json"),
			"./locales/zh/home.json": () => import("../i18n/locales/zh/home.json"),
			"./locales/zh/pricing.json": () => import("../i18n/locales/zh/pricing.json"),
			"./locales/zh/products.json": () => import("../i18n/locales/zh/products.json"),
			"./locales/zh/route.json": () => import("../i18n/locales/zh/route.json"),
			"./locales/zh/settings.json": () => import("../i18n/locales/zh/settings.json"),
			"./locales/zh/shared.json": () => import("../i18n/locales/zh/shared.json"),
			"./locales/zh/team.json": () => import("../i18n/locales/zh/team.json")
		}), `./locales/${n}/${t}.json`, 4)).default;
	} catch {
		return n === "en" ? {} : (await Y(Object.assign({
			"./locales/de/about.json": () => import("../i18n/locales/de/about.json"),
			"./locales/de/blog.json": () => import("../i18n/locales/de/blog.json"),
			"./locales/de/careers.json": () => import("../i18n/locales/de/careers.json"),
			"./locales/de/contact.json": () => import("../i18n/locales/de/contact.json"),
			"./locales/de/faq.json": () => import("../i18n/locales/de/faq.json"),
			"./locales/de/home.json": () => import("../i18n/locales/de/home.json"),
			"./locales/de/pricing.json": () => import("../i18n/locales/de/pricing.json"),
			"./locales/de/products.json": () => import("../i18n/locales/de/products.json"),
			"./locales/de/route.json": () => import("../i18n/locales/de/route.json"),
			"./locales/de/settings.json": () => import("../i18n/locales/de/settings.json"),
			"./locales/de/shared.json": () => import("../i18n/locales/de/shared.json"),
			"./locales/de/team.json": () => import("../i18n/locales/de/team.json"),
			"./locales/en/about.json": () => import("./about-BaAYAvkE.js"),
			"./locales/en/blog.json": () => import("./blog-CzOpmp0n.js"),
			"./locales/en/careers.json": () => import("./careers-1TOv7qq6.js"),
			"./locales/en/contact.json": () => import("./contact-DjqHx5tM.js"),
			"./locales/en/faq.json": () => import("./faq-XJpq1JTj.js"),
			"./locales/en/home.json": () => import("./home-CdZlgL3b.js"),
			"./locales/en/pricing.json": () => import("./pricing-BPjt5t_O.js"),
			"./locales/en/products.json": () => import("./products-Df41mIQC.js"),
			"./locales/en/route.json": () => import("./route-5-5GFmRv.js"),
			"./locales/en/settings.json": () => import("./settings-CmZ84y7S.js"),
			"./locales/en/shared.json": () => import("./shared-CBRuvueV.js"),
			"./locales/en/team.json": () => import("./team-CuN0wXZd.js"),
			"./locales/es/about.json": () => import("../i18n/locales/es/about.json"),
			"./locales/es/blog.json": () => import("../i18n/locales/es/blog.json"),
			"./locales/es/careers.json": () => import("../i18n/locales/es/careers.json"),
			"./locales/es/contact.json": () => import("../i18n/locales/es/contact.json"),
			"./locales/es/faq.json": () => import("../i18n/locales/es/faq.json"),
			"./locales/es/home.json": () => import("../i18n/locales/es/home.json"),
			"./locales/es/pricing.json": () => import("../i18n/locales/es/pricing.json"),
			"./locales/es/products.json": () => import("../i18n/locales/es/products.json"),
			"./locales/es/route.json": () => import("../i18n/locales/es/route.json"),
			"./locales/es/settings.json": () => import("../i18n/locales/es/settings.json"),
			"./locales/es/shared.json": () => import("../i18n/locales/es/shared.json"),
			"./locales/es/team.json": () => import("../i18n/locales/es/team.json"),
			"./locales/fr/about.json": () => import("../i18n/locales/fr/about.json"),
			"./locales/fr/blog.json": () => import("../i18n/locales/fr/blog.json"),
			"./locales/fr/careers.json": () => import("../i18n/locales/fr/careers.json"),
			"./locales/fr/contact.json": () => import("../i18n/locales/fr/contact.json"),
			"./locales/fr/faq.json": () => import("../i18n/locales/fr/faq.json"),
			"./locales/fr/home.json": () => import("../i18n/locales/fr/home.json"),
			"./locales/fr/pricing.json": () => import("../i18n/locales/fr/pricing.json"),
			"./locales/fr/products.json": () => import("../i18n/locales/fr/products.json"),
			"./locales/fr/route.json": () => import("../i18n/locales/fr/route.json"),
			"./locales/fr/settings.json": () => import("../i18n/locales/fr/settings.json"),
			"./locales/fr/shared.json": () => import("../i18n/locales/fr/shared.json"),
			"./locales/fr/team.json": () => import("../i18n/locales/fr/team.json"),
			"./locales/it/about.json": () => import("../i18n/locales/it/about.json"),
			"./locales/it/blog.json": () => import("../i18n/locales/it/blog.json"),
			"./locales/it/careers.json": () => import("../i18n/locales/it/careers.json"),
			"./locales/it/contact.json": () => import("../i18n/locales/it/contact.json"),
			"./locales/it/faq.json": () => import("../i18n/locales/it/faq.json"),
			"./locales/it/home.json": () => import("../i18n/locales/it/home.json"),
			"./locales/it/pricing.json": () => import("../i18n/locales/it/pricing.json"),
			"./locales/it/products.json": () => import("../i18n/locales/it/products.json"),
			"./locales/it/route.json": () => import("../i18n/locales/it/route.json"),
			"./locales/it/settings.json": () => import("../i18n/locales/it/settings.json"),
			"./locales/it/shared.json": () => import("../i18n/locales/it/shared.json"),
			"./locales/it/team.json": () => import("../i18n/locales/it/team.json"),
			"./locales/ja/about.json": () => import("../i18n/locales/ja/about.json"),
			"./locales/ja/blog.json": () => import("../i18n/locales/ja/blog.json"),
			"./locales/ja/careers.json": () => import("../i18n/locales/ja/careers.json"),
			"./locales/ja/contact.json": () => import("../i18n/locales/ja/contact.json"),
			"./locales/ja/faq.json": () => import("../i18n/locales/ja/faq.json"),
			"./locales/ja/home.json": () => import("../i18n/locales/ja/home.json"),
			"./locales/ja/pricing.json": () => import("../i18n/locales/ja/pricing.json"),
			"./locales/ja/products.json": () => import("../i18n/locales/ja/products.json"),
			"./locales/ja/route.json": () => import("../i18n/locales/ja/route.json"),
			"./locales/ja/settings.json": () => import("../i18n/locales/ja/settings.json"),
			"./locales/ja/shared.json": () => import("../i18n/locales/ja/shared.json"),
			"./locales/ja/team.json": () => import("../i18n/locales/ja/team.json"),
			"./locales/ko/about.json": () => import("../i18n/locales/ko/about.json"),
			"./locales/ko/blog.json": () => import("../i18n/locales/ko/blog.json"),
			"./locales/ko/careers.json": () => import("../i18n/locales/ko/careers.json"),
			"./locales/ko/contact.json": () => import("../i18n/locales/ko/contact.json"),
			"./locales/ko/faq.json": () => import("../i18n/locales/ko/faq.json"),
			"./locales/ko/home.json": () => import("../i18n/locales/ko/home.json"),
			"./locales/ko/pricing.json": () => import("../i18n/locales/ko/pricing.json"),
			"./locales/ko/products.json": () => import("../i18n/locales/ko/products.json"),
			"./locales/ko/route.json": () => import("../i18n/locales/ko/route.json"),
			"./locales/ko/settings.json": () => import("../i18n/locales/ko/settings.json"),
			"./locales/ko/shared.json": () => import("../i18n/locales/ko/shared.json"),
			"./locales/ko/team.json": () => import("../i18n/locales/ko/team.json"),
			"./locales/pt/about.json": () => import("../i18n/locales/pt/about.json"),
			"./locales/pt/blog.json": () => import("../i18n/locales/pt/blog.json"),
			"./locales/pt/careers.json": () => import("../i18n/locales/pt/careers.json"),
			"./locales/pt/contact.json": () => import("../i18n/locales/pt/contact.json"),
			"./locales/pt/faq.json": () => import("../i18n/locales/pt/faq.json"),
			"./locales/pt/home.json": () => import("../i18n/locales/pt/home.json"),
			"./locales/pt/pricing.json": () => import("../i18n/locales/pt/pricing.json"),
			"./locales/pt/products.json": () => import("../i18n/locales/pt/products.json"),
			"./locales/pt/route.json": () => import("../i18n/locales/pt/route.json"),
			"./locales/pt/settings.json": () => import("../i18n/locales/pt/settings.json"),
			"./locales/pt/shared.json": () => import("../i18n/locales/pt/shared.json"),
			"./locales/pt/team.json": () => import("../i18n/locales/pt/team.json"),
			"./locales/ru/about.json": () => import("../i18n/locales/ru/about.json"),
			"./locales/ru/blog.json": () => import("../i18n/locales/ru/blog.json"),
			"./locales/ru/careers.json": () => import("../i18n/locales/ru/careers.json"),
			"./locales/ru/contact.json": () => import("../i18n/locales/ru/contact.json"),
			"./locales/ru/faq.json": () => import("../i18n/locales/ru/faq.json"),
			"./locales/ru/home.json": () => import("../i18n/locales/ru/home.json"),
			"./locales/ru/pricing.json": () => import("../i18n/locales/ru/pricing.json"),
			"./locales/ru/products.json": () => import("../i18n/locales/ru/products.json"),
			"./locales/ru/route.json": () => import("../i18n/locales/ru/route.json"),
			"./locales/ru/settings.json": () => import("../i18n/locales/ru/settings.json"),
			"./locales/ru/shared.json": () => import("../i18n/locales/ru/shared.json"),
			"./locales/ru/team.json": () => import("../i18n/locales/ru/team.json"),
			"./locales/zh/about.json": () => import("../i18n/locales/zh/about.json"),
			"./locales/zh/blog.json": () => import("../i18n/locales/zh/blog.json"),
			"./locales/zh/careers.json": () => import("../i18n/locales/zh/careers.json"),
			"./locales/zh/contact.json": () => import("../i18n/locales/zh/contact.json"),
			"./locales/zh/faq.json": () => import("../i18n/locales/zh/faq.json"),
			"./locales/zh/home.json": () => import("../i18n/locales/zh/home.json"),
			"./locales/zh/pricing.json": () => import("../i18n/locales/zh/pricing.json"),
			"./locales/zh/products.json": () => import("../i18n/locales/zh/products.json"),
			"./locales/zh/route.json": () => import("../i18n/locales/zh/route.json"),
			"./locales/zh/settings.json": () => import("../i18n/locales/zh/settings.json"),
			"./locales/zh/shared.json": () => import("../i18n/locales/zh/shared.json"),
			"./locales/zh/team.json": () => import("../i18n/locales/zh/team.json")
		}), `./locales/en/${t}.json`, 4)).default;
	}
}
async function Q(e, t = X) {
	let n = e || "en";
	for (let e of t) {
		let t = `${n}:${e}`;
		if (Z.has(t)) continue;
		let r = await ye(n, e);
		q.addResourceBundle(n, e, r, !0, !0), Z.add(t);
	}
}
q.use(pe).init({
	resources: {},
	lng: "en",
	fallbackLng: "en",
	ns: X,
	defaultNS: ve,
	interpolation: { escapeValue: !1 },
	react: { useSuspense: !1 }
}), Q("en", X);
var $ = q;
function be({ children: t }) {
	let n = a().locale ?? "en";
	return r(() => {
		let e = !1;
		return (async () => {
			await Q(n, X), !e && $.language !== n && await $.changeLanguage(n);
		})(), () => {
			e = !0;
		};
	}, [n]), r(() => {
		document.documentElement.lang = n;
	}, [n]), r(() => {
		ge();
	}, []), o(e, {
		id: "AppRoot",
		onRender: _e,
		children: o(he, {
			i18n: $,
			children: t
		})
	});
}
function xe({ children: e }) {
	return o(be, { children: e });
}
function Se() {
	return o(xe, { children: o(be, {}) });
}
export { Se as default };
var e = {
	"aboutHeader.methodology": "Methodology",
	"aboutHeader.weDesignedThisBenchmarkTo": "We designed this benchmark to provide fair, reproducible, and meaningful comparisons of i18n libraries. Here's our approach.",
	"whatWeMeasure.bundleSizeImpact": "Bundle size impact",
	"whatWeMeasure.theAdditionalJavascriptBytesSent": "The additional JavaScript bytes sent to the client specifically due to the i18n library runtime, plus the translation files for the current locale.",
	"whatWeMeasure.renderingOverhead": "Rendering overhead",
	"whatWeMeasure.howMuchExtraTimeThe": "How much extra time the i18n layer adds to each component render — measured using React Profiler's actualDuration.",
	"whatWeMeasure.hydrationCost": "Hydration cost",
	"whatWeMeasure.duringSsrTranslationDataIs": "During SSR, translation data is serialized into the HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
	"whatWeMeasure.lazyLoadingEffectiveness": "Lazy loading effectiveness",
	"whatWeMeasure.whetherSplittingTranslationsByRoute": "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
	"whatWeMeasure.localeSwitchSpeed": "Locale switch speed",
	"whatWeMeasure.howFastTheAppCan": "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
	"whatWeMeasure.whatWeMeasure": "What We Measure",
	"aboutGrid.testEnvironment": "Test Environment",
	"aboutGrid.allBenchmarksRunOn": "All benchmarks run on the same hardware (M2 MacBook Pro, 16 GB RAM), same browser (Chromium 120 via Playwright), and same network conditions (simulated 4G). Each test is repeated 50 times and we report the median with P95/P99 percentiles.",
	"aboutGrid.applicationDesign": "Application Design",
	"aboutGrid.theBenchmarkAppHas10": "The benchmark app has 10 pages with realistic content — navigation, forms, dynamic lists, and static text. Each page uses 15–30 translation keys to represent real-world usage patterns rather than synthetic micro-benchmarks.",
	"aboutGrid.measurementMethodology": "Measurement Methodology",
	"aboutGrid.weUseBrowserNativeApis": "We use browser-native APIs (Performance Timeline, Resource Timing, Layout Instability) combined with React Profiler data. Bundle sizes are measured post-gzip using source-map-explorer for accuracy.",
	"aboutGrid.fairComparison": "Fair Comparison",
	"aboutGrid.eachI18nLibraryIsIntegrated": "Each i18n library is integrated following its official documentation and best practices. We consult maintainers when possible to ensure optimal configuration. The same React app, same Vite config, same deployment."
};
export { e as default };
var e = {
	"blogList.i18nBenchmark2026Results": "i18n Benchmark 2026 Results",
	"blogList.march152026": "March 15, 2026",
	"blogList.weTested12DifferentInternationalization": "We tested 12 different internationalization libraries across 10 pages. Here are the detailed results with interactive charts.",
	"blogList.howToReduceYourI18n": "How to Reduce Your i18n Bundle by 60%",
	"blogList.march82026": "March 8, 2026",
	"blogList.practicalStrategiesForOptimizingTranslation": "Practical strategies for optimizing translation file loading, tree-shaking unused locales, and leveraging build-time compilation.",
	"blogList.theStateOfInternationalizationIn": "The State of Internationalization in 2026",
	"blogList.february282026": "February 28, 2026",
	"blogList.anOverviewOfTheCurrent": "An overview of the current i18n ecosystem, comparing approaches from message catalogs to compiler-based solutions.",
	"blogList.migratingFromReactI18nextTo": "Migrating from react-i18next to Lingui",
	"blogList.february152026": "February 15, 2026",
	"blogList.aStepByStepGuide": "A step-by-step guide for migrating a production app with 50,000 translation keys from react-i18next to Lingui.",
	"blogList.serverComponentsAndI18nWhat": "Server Components and i18n: What Changes?",
	"blogList.february12026": "February 1, 2026",
	"blogList.reactServerComponentsIntroduceNew": "React Server Components introduce new patterns for internationalization. We explore the implications and best practices.",
	"blogList.benchmarkMethodologyHowWeTest": "Benchmark Methodology: How We Test",
	"blogList.january202026": "January 20, 2026",
	"blogList.aTransparentLookAtOur": "A transparent look at our benchmarking methodology, including test environments, statistical methods, and reproducibility.",
	"blogList.readMore": "Read More →",
	"blogHeader.blog": "Blog",
	"blogHeader.insightsDeepDivesAnd": "Insights, deep dives, and updates from the i18n benchmarking community."
};
export { e as default };
var e = {
	"careersHeader.careers": "Careers",
	"careersHero.fromAnywhere": "from anywhere in the world",
	"careersBenefits.competitivePay": "Competitive pay",
	"careersBenefits.topOfMarket": "Top-of-market compensation",
	"careersBenefits.openSourceTime": "Open source time",
	"careersBenefits.twentyPercentTime": "20% time for OSS",
	"careersPositions.seniorFrontendEngineer": "Senior Frontend Engineer",
	"careersPositions.seniorFrontendEngineerDesc": "Build and maintain our benchmarking dashboard and developer tools using React, TypeScript, and Vite.",
	"openPositions.openPositions": "Open Positions",
	"openPositions.remote": "Remote",
	"openPositions.fullTime": "Full-time",
	"openPositions.applyNow": "Apply Now"
};
export { e as default };
var e = {
	"contactForm.name": "Name",
	"contactForm.email": "Email",
	"contactForm.subject": "Subject",
	"contactForm.message": "Message",
	"contactForm.sendMessage": "Send Message",
	"contactForm.wellGetBackTo": "We'll get back to you within 48 hours.",
	"contactHeader.contactUs": "Contact Us",
	"contactHeader.haveQuestionsOrWantTo": "Have questions or want to contribute? We'd love to hear from you."
};
export { e as default };
var e = {
	"faqList.howAreTheBenchmarks": "How are the benchmarks run?",
	"faqList.allBenchmarksAreRun": "All benchmarks are run using Playwright on a consistent hardware setup (M2 MacBook Pro) with simulated 4G network conditions. Each test runs 50 iterations and we report median, P95, and P99 values.",
	"faqList.whatLibrariesAreCurrently": "What libraries are currently tested?",
	"faqList.weCurrentlyBenchmarkReactI18next": "We currently benchmark react-i18next, react-intl (FormatJS), LinguiJS, typesafe-i18n, next-intl, and Paraglide. We plan to add more based on community requests.",
	"faqList.canIContributeA": "Can I contribute a new library integration?",
	"faqList.absolutelyWeWelcomeCommunity": "Absolutely! We welcome community contributions. Fork the repository, add your library integration following our template, and submit a pull request. See the Contributing guide for details.",
	"faqList.howOftenAreResults": "How often are results updated?",
	"faqList.benchmarksRunAutomaticallyVia": "Benchmarks run automatically via CI on every dependency update and weekly on the main branch. Results are published to the dashboard within 24 hours.",
	"faqList.areTheResultsStatistically": "Are the results statistically significant?",
	"faqList.yesWeUseThe": "Yes. We use the Mann-Whitney U test with a significance level of 0.05 to compare distributions. We also report confidence intervals and effect sizes.",
	"faq-header1.frequentlyAskedQuestions": "Frequently Asked Questions",
	"faq-header1.everythingYouNeedToKnow": "Everything you need to know about i18n Benchmark."
};
export { e as default };
var e = {
	"understandingImpact.understandingTheImpact": "Understanding the Impact",
	"understandingImpact.whyASingleLargeJson": "Why a single large JSON can hurt performance",
	"understandingImpact.manyI18nLibrariesStoreTranslations": "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
	"understandingImpact.theJsonMustBeParsed": "The JSON must be parsed on every page load — blocking the main thread.",
	"understandingImpact.contextBasedArchitecturesCanCause": "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
	"understandingImpact.duringServerSideRenderingThe": "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
	"understandingImpact.theTradeOffsOfDynamic": "The trade-offs of dynamic loading",
	"understandingImpact.splittingTranslationsIntoPerRoute": "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
	"understandingImpact.waterfallRequests": "Waterfall requests:",
	"understandingImpact.flashOfUntranslatedContentFouc": "Flash of untranslated content (FOUC):",
	"understandingImpact.cacheInvalidation": "Cache invalidation:",
	"understandingImpact.whatThisBenchmarkMeasures": "What this benchmark measures",
	"understandingImpact.thisTestAppProvidesA": "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.",
	"whyItMatters.whyTheseMetricsMatter": "Why These Metrics Matter",
	"whyItMatters.bundleSize": "Bundle Size",
	"whyItMatters.theBundleIsTheData": "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
	"whyItMatters.renderingHydration": "Rendering & Hydration",
	"whyItMatters.connectingALargeJson": "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
	"whyItMatters.dynamicLoading": "Dynamic Loading",
	"whyItMatters.loadingAllTranslationsUpfront": "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.",
	"resultsTable.sampleResults": "Sample Results",
	"resultsTable.bundleSize": "Bundle Size",
	"resultsTable.lookupTime": "Lookup Time",
	"resultsTable.lazyLoading": "Lazy Loading",
	"hero.aTestApplicationDesignedTo": "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
	"hero.viewResults": "View Results"
};
export { e as default };
var e = {
	"pricingTiers.starterTier": "Starter",
	"pricingTiers.starterPrice": "$0",
	"pricingTiers.forever": "forever",
	"pricingTiers.runsPerDay": "5 benchmark runs/day",
	"pricingTiers.libraries3": "3 libraries",
	"pricingTiers.communitySupport": "Community support",
	"pricingTiers.publicResults": "Public results",
	"pricingTiers.getStarted": "Get Started",
	"pricingTiers.proTier": "Pro",
	"pricingTiers.proPrice": "$29",
	"pricingTiers.perMonth": "/month",
	"pricingTiers.unlimitedRuns": "Unlimited runs",
	"pricingTiers.allLibraries": "All libraries",
	"pricingTiers.prioritySupport": "Priority support",
	"pricingTiers.privateResults": "Private results",
	"pricingTiers.ciIntegration": "CI integration",
	"pricingTiers.historicalData": "Historical data",
	"pricingTiers.enterpriseTier": "Enterprise",
	"pricingTiers.custom": "Custom",
	"pricingTiers.everythingInPro": "Everything in Pro",
	"pricingTiers.onPremiseOption": "On-premise option",
	"pricingTiers.ssoSaml": "SSO & SAML",
	"pricingTiers.dedicatedAccountManager": "Dedicated account manager",
	"pricingTiers.customSLAs": "Custom SLAs",
	"pricingTiers.auditLogs": "Audit logs",
	"pricingTiers.trainingSessions": "Training sessions",
	"pricingTiers.contactSales": "Contact Sales",
	"pricingHeader.pricing": "Pricing",
	"pricingHeader.transparentPricingForEvery": "Transparent pricing for every stage of your i18n journey."
};
export { e as default };
var e = {
	"products.benchmarkCLI": "Benchmark CLI",
	"products.benchmarkCLIDesc": "Run benchmarks locally from your terminal. Supports custom configurations and CI integration.",
	"products.benchmarkCLIPrice": "Free",
	"products.benchmarkCloud": "Benchmark Cloud",
	"products.benchmarkCloudDesc": "Automated cloud-based benchmarking with historical tracking, alerts, and team dashboards.",
	"products.benchmarkCloudPrice": "$29/mo",
	"products.benchmarkEnterprise": "Benchmark Enterprise",
	"products.benchmarkEnterpriseDesc": "On-premise deployment with SSO, audit logs, custom SLAs, and dedicated support.",
	"products.benchmarkEnterprisePrice": "Contact Us",
	"products.migrationAssistant": "Migration Assistant",
	"products.migrationAssistantDesc": "AI-powered tool that helps migrate your codebase between i18n libraries with zero downtime.",
	"products.migrationAssistantPrice": "$99 one-time",
	"products.translationQA": "Translation QA",
	"products.translationQADesc": "Automated quality checks for missing translations, pluralization issues, and context errors.",
	"products.translationQAPrice": "$19/mo",
	"products.bundleOptimizer": "Bundle Optimizer",
	"products.bundleOptimizerDesc": "Analyzes and optimizes your i18n bundle for production with tree-shaking and code splitting.",
	"products.bundleOptimizerPrice": "$49/mo",
	"products.learnMore": "Learn More",
	"productsHeader.ourProducts": "Our Products",
	"productsHeader.exploreOurSuiteOfTools": "Explore our suite of tools designed to help you build better i18n apps."
};
export { e as default };
var e = {
	"route.oopsPageNotFound": "Oops! Page not found",
	"route.returnToHome": "Return to Home",
	"route.couldNotMeasureHydrationDuration": "Could not measure hydration duration:"
};
export { e as default };
var e = {
	"preferencesSection.preferences": "Preferences",
	"preferencesSection.emailNotifications": "Email Notifications",
	"preferencesSection.receiveWeeklyBenchmarkReports": "Receive weekly benchmark reports",
	"preferencesSection.darkMode": "Dark Mode",
	"preferencesSection.useDarkColorScheme": "Use dark color scheme",
	"preferencesSection.defaultLanguage": "Default Language",
	"settingsHeader.settings": "Settings",
	"settingsHeader.manageYourAccountPreferences": "Manage your account preferences and configuration.",
	"settingsFooter.cancel": "Cancel",
	"settingsFooter.saveChanges": "Save Changes",
	"apiAccessSection.apiAccess": "API Access",
	"apiAccessSection.apiKey": "API Key",
	"apiAccessSection.useThisKeyTo": "Use this key to access the benchmarking API programmatically.",
	"apiAccessSection.copy": "Copy",
	"profileSection.profile": "Profile",
	"profileSection.displayName": "Display Name",
	"profileSection.email": "Email"
};
export { e as default };
var e = {
	"header.home": "Home",
	"header.methodology": "Methodology",
	"header.mockPages": "Mock Pages",
	"header.products": "Products",
	"header.pricing": "Pricing",
	"header.team": "Team",
	"header.blog": "Blog",
	"header.careers": "Careers",
	"header.faq": "FAQ",
	"header.contact": "Contact",
	"header.settings": "Settings",
	"header.goToGithub": "Go to GitHub",
	"footer.resources": "Resources",
	"footer.contact": "Contact",
	"footer.github": "GitHub",
	"footer.methodology": "Methodology",
	"footer.contributing": "Contributing",
	"footer.builtWith": "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
	"footer.anOpenSourceTestApplication": "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
	"mockBanner.text": "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.",
	"themeToggle.themeModeAutoSystemClick": "Theme mode: auto (system). Click to switch to light mode.",
	"themeToggle.themeModeLightClick": "Theme mode: light. Click to switch to dark mode.",
	"themeToggle.themeModeDarkClick": "Theme mode: dark. Click to switch to auto (system) mode.",
	"themeToggle.themeAuto": "Theme: Auto",
	"themeToggle.themeDark": "Theme: Dark",
	"themeToggle.themeLight": "Theme: Light"
};
export { e as default };
var e = {
	"teamGrid.sarahChen": "Sarah Chen",
	"teamGrid.founderLeadEngineer": "Founder & Lead Engineer",
	"teamGrid.formerGoogleEngineerWith10": "Former Google engineer with 10 years of experience building internationalization systems at scale.",
	"teamGrid.marcusWeber": "Marcus Weber",
	"teamGrid.performanceEngineer": "Performance Engineer",
	"teamGrid.specializesInJavascriptPerformanceOptimization": "Specializes in JavaScript performance optimization and benchmarking methodology. Previously at Vercel.",
	"teamGrid.aishaPatel": "Aisha Patel",
	"teamGrid.developerAdvocate": "Developer Advocate",
	"teamGrid.passionateAboutDeveloperExperienceAnd": "Passionate about developer experience and education. Speaker at React Conf, JSConf, and i18nNext.",
	"teamGrid.tomasRodriguez": "Tomás Rodríguez",
	"teamGrid.fullStackDeveloper": "Full-Stack Developer",
	"teamGrid.maintainsTheBenchmarkingInfrastructureAnd": "Maintains the benchmarking infrastructure and CI/CD pipeline. Open source contributor to Lingui.",
	"teamGrid.yukiTanaka": "Yuki Tanaka",
	"teamGrid.dataAnalyst": "Data Analyst",
	"teamGrid.ensuresStatisticalRigorInAll": "Ensures statistical rigor in all benchmark results. PhD in Applied Statistics from MIT.",
	"teamGrid.elenaKowalski": "Elena Kowalski",
	"teamGrid.communityManager": "Community Manager",
	"teamGrid.managesCommunityContributionsPartnershipsAnd": "Manages community contributions, partnerships, and events. Background in open source governance.",
	"teamHeader.ourTeam": "Our Team",
	"teamHeader.meetThePeopleBehindI18n": "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
};
export { e as default };
