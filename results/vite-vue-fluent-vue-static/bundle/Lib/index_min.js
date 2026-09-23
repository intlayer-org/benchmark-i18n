import * as e from "vue";
import { createElementBlock as t, defineComponent as n, getCurrentInstance as r, h as i, openBlock as a, renderSlot as o, toDisplayString as s, unref as c } from "vue";
import l from "../src/locales/en.ftl?vue&type=fluent&index=0&src=true&locale=en&lang.fluent";
import u from "../src/locales/fr.ftl?vue&type=fluent&index=1&src=true&locale=fr&lang.fluent";
import d from "../src/locales/es.ftl?vue&type=fluent&index=2&src=true&locale=es&lang.fluent";
import f from "../src/locales/de.ftl?vue&type=fluent&index=3&src=true&locale=de&lang.fluent";
import ee from "../src/locales/it.ftl?vue&type=fluent&index=4&src=true&locale=it&lang.fluent";
import p from "../src/locales/pt.ftl?vue&type=fluent&index=5&src=true&locale=pt&lang.fluent";
import m from "../src/locales/zh.ftl?vue&type=fluent&index=6&src=true&locale=zh&lang.fluent";
import h from "../src/locales/ja.ftl?vue&type=fluent&index=7&src=true&locale=ja&lang.fluent";
import g from "../src/locales/ko.ftl?vue&type=fluent&index=8&src=true&locale=ko&lang.fluent";
import _ from "../src/locales/ru.ftl?vue&type=fluent&index=9&src=true&locale=ru&lang.fluent";
var v = Object.defineProperty, te = Object.getOwnPropertyDescriptor, ne = Object.getOwnPropertyNames, re = Object.prototype.hasOwnProperty, y = (e, t) => {
	let n = {};
	for (var r in e) v(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || v(n, Symbol.toStringTag, { value: "Module" }), n;
}, b = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = ne(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !re.call(e, s) && s !== n && v(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = te(t, s)) || r.enumerable
	});
	return e;
}, ie = (e, t, n) => (b(e, t, "default"), n && b(n, t, "default")), x = y({
	Vue: () => e,
	Vue2: () => void 0,
	del: () => T,
	install: () => C,
	isVue2: () => !1,
	isVue3: () => !0,
	set: () => w
});
import * as S from "vue";
ie(x, S);
function C() {}
function w(e, t, n) {
	return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function T(e, t) {
	if (Array.isArray(e)) {
		e.splice(t, 1);
		return;
	}
	delete e[t];
}
var E = class {
	constructor(e) {
		this.value = e;
	}
	valueOf() {
		return this.value;
	}
}, D = class extends E {
	constructor(e = "???") {
		super(e);
	}
	toString(e) {
		return `{${this.value}}`;
	}
}, O = class extends E {
	constructor(e, t = {}) {
		super(e), this.opts = t;
	}
	toString(e) {
		if (e) try {
			return e.memoizeIntlObject(Intl.NumberFormat, this.opts).format(this.value);
		} catch (t) {
			e.reportError(t);
		}
		return this.value.toString(10);
	}
}, ae = class e extends E {
	static supportsValue(t) {
		if (typeof t == "number" || t instanceof Date) return !0;
		if (t instanceof E) return e.supportsValue(t.valueOf());
		if ("Temporal" in globalThis) {
			let e = globalThis.Temporal;
			if (t instanceof e.Instant || t instanceof e.PlainDateTime || t instanceof e.PlainDate || t instanceof e.PlainMonthDay || t instanceof e.PlainTime || t instanceof e.PlainYearMonth) return !0;
		}
		return !1;
	}
	constructor(t, n = {}) {
		t instanceof e ? (n = {
			...t.opts,
			...n
		}, t = t.value) : t instanceof E && (t = t.valueOf()), typeof t == "object" && "calendarId" in t && n.calendar === void 0 && (n = {
			...n,
			calendar: t.calendarId
		}), super(t), this.opts = n;
	}
	[Symbol.toPrimitive](e) {
		return e === "string" ? this.toString() : this.toNumber();
	}
	toNumber() {
		let e = this.value;
		if (typeof e == "number") return e;
		if (e instanceof Date) return e.getTime();
		if ("epochMilliseconds" in e) return e.epochMilliseconds;
		if ("toZonedDateTime" in e) return e.toZonedDateTime("UTC").epochMilliseconds;
		throw TypeError("Unwrapping a non-number value as a number");
	}
	toString(e) {
		if (e) try {
			return e.memoizeIntlObject(Intl.DateTimeFormat, this.opts).format(this.value);
		} catch (t) {
			e.reportError(t);
		}
		return typeof this.value == "number" || this.value instanceof Date ? new Date(this.value).toISOString() : this.value.toString();
	}
}, oe = 100, se = "⁨", ce = "⁩";
function le(e, t, n) {
	return n === t || n instanceof O && t instanceof O && n.value === t.value || t instanceof O && typeof n == "string" && n === e.memoizeIntlObject(Intl.PluralRules, t.opts).select(t.value);
}
function ue(e, t, n) {
	return t[n] ? k(e, t[n].value) : (e.reportError(/* @__PURE__ */ RangeError("No default")), new D());
}
function de(e, t) {
	let n = [], r = Object.create(null);
	for (let i of t) i.type === "narg" ? r[i.name] = fe(e, i.value) : n.push(fe(e, i));
	return {
		positional: n,
		named: r
	};
}
function fe(e, t) {
	switch (t.type) {
		case "str": return t.value;
		case "num": return new O(t.value, { minimumFractionDigits: t.precision });
		case "var": return pe(e, t);
		case "mesg": return me(e, t);
		case "term": return he(e, t);
		case "func": return ge(e, t);
		case "select": return _e(e, t);
		default: return new D();
	}
}
function pe(e, { name: t }) {
	let n;
	if (e.params) {
		if (Object.prototype.hasOwnProperty.call(e.params, t)) n = e.params[t];
		else return new D(`$${t}`);
	} else if (e.args && Object.prototype.hasOwnProperty.call(e.args, t)) n = e.args[t];
	else return e.reportError(/* @__PURE__ */ ReferenceError(`Unknown variable: $${t}`)), new D(`$${t}`);
	if (n instanceof E) return n;
	switch (typeof n) {
		case "string": return n;
		case "number": return new O(n);
		case "object": if (ae.supportsValue(n)) return new ae(n);
		default: return e.reportError(/* @__PURE__ */ TypeError(`Variable type not supported: $${t}, ${typeof n}`)), new D(`$${t}`);
	}
}
function me(e, { name: t, attr: n }) {
	let r = e.bundle._messages.get(t);
	if (!r) return e.reportError(/* @__PURE__ */ ReferenceError(`Unknown message: ${t}`)), new D(t);
	if (n) {
		let i = r.attributes[n];
		return i ? k(e, i) : (e.reportError(/* @__PURE__ */ ReferenceError(`Unknown attribute: ${n}`)), new D(`${t}.${n}`));
	}
	return r.value ? k(e, r.value) : (e.reportError(/* @__PURE__ */ ReferenceError(`No value: ${t}`)), new D(t));
}
function he(e, { name: t, attr: n, args: r }) {
	let i = `-${t}`, a = e.bundle._terms.get(i);
	if (!a) return e.reportError(/* @__PURE__ */ ReferenceError(`Unknown term: ${i}`)), new D(i);
	if (n) {
		let t = a.attributes[n];
		if (t) {
			e.params = de(e, r).named;
			let n = k(e, t);
			return e.params = null, n;
		}
		return e.reportError(/* @__PURE__ */ ReferenceError(`Unknown attribute: ${n}`)), new D(`${i}.${n}`);
	}
	e.params = de(e, r).named;
	let o = k(e, a.value);
	return e.params = null, o;
}
function ge(e, { name: t, args: n }) {
	let r = e.bundle._functions[t];
	if (!r) return e.reportError(/* @__PURE__ */ ReferenceError(`Unknown function: ${t}()`)), new D(`${t}()`);
	if (typeof r != "function") return e.reportError(/* @__PURE__ */ TypeError(`Function ${t}() is not callable`)), new D(`${t}()`);
	try {
		let t = de(e, n);
		return r(t.positional, t.named);
	} catch (n) {
		return e.reportError(n), new D(`${t}()`);
	}
}
function _e(e, { selector: t, variants: n, star: r }) {
	let i = fe(e, t);
	if (i instanceof D) return ue(e, n, r);
	for (let t of n) if (le(e, i, fe(e, t.key))) return k(e, t.value);
	return ue(e, n, r);
}
function ve(e, t) {
	if (e.dirty.has(t)) return e.reportError(/* @__PURE__ */ RangeError("Cyclic reference")), new D();
	e.dirty.add(t);
	let n = [], r = e.bundle._useIsolating && t.length > 1;
	for (let i of t) {
		if (typeof i == "string") {
			n.push(e.bundle._transform(i));
			continue;
		}
		if (e.placeables++, e.placeables > oe) throw e.dirty.delete(t), RangeError(`Too many placeables expanded: ${e.placeables}, max allowed is ${oe}`);
		r && n.push(se), n.push(fe(e, i).toString(e)), r && n.push(ce);
	}
	return e.dirty.delete(t), n.join("");
}
function k(e, t) {
	return typeof t == "string" ? e.bundle._transform(t) : ve(e, t);
}
var ye = class {
	constructor(e, t, n) {
		this.dirty = /* @__PURE__ */ new WeakSet(), this.params = null, this.placeables = 0, this.bundle = e, this.errors = t, this.args = n;
	}
	reportError(e) {
		if (!this.errors || !(e instanceof Error)) throw e;
		this.errors.push(e);
	}
	memoizeIntlObject(e, t) {
		let n = this.bundle._intls.get(e);
		n || (n = {}, this.bundle._intls.set(e, n));
		let r = JSON.stringify(t);
		return n[r] || (n[r] = new e(this.bundle.locales, t)), n[r];
	}
};
function be(e, t) {
	let n = Object.create(null);
	for (let [r, i] of Object.entries(e)) t.includes(r) && (n[r] = i.valueOf());
	return n;
}
var xe = [
	"unitDisplay",
	"currencyDisplay",
	"useGrouping",
	"minimumIntegerDigits",
	"minimumFractionDigits",
	"maximumFractionDigits",
	"minimumSignificantDigits",
	"maximumSignificantDigits"
];
function Se(e, t) {
	let n = e[0];
	if (n instanceof D) return new D(`NUMBER(${n.valueOf()})`);
	if (n instanceof O) return new O(n.valueOf(), {
		...n.opts,
		...be(t, xe)
	});
	if (n instanceof ae) return new O(n.toNumber(), { ...be(t, xe) });
	throw TypeError("Invalid argument to NUMBER");
}
var Ce = [
	"dateStyle",
	"timeStyle",
	"fractionalSecondDigits",
	"dayPeriod",
	"hour12",
	"weekday",
	"era",
	"year",
	"month",
	"day",
	"hour",
	"minute",
	"second",
	"timeZoneName"
];
function we(e, t) {
	let n = e[0];
	if (n instanceof D) return new D(`DATETIME(${n.valueOf()})`);
	if (n instanceof ae || n instanceof O) return new ae(n, be(t, Ce));
	throw TypeError("Invalid argument to DATETIME");
}
var Te = /* @__PURE__ */ new Map();
function Ee(e) {
	let t = Array.isArray(e) ? e.join(" ") : e, n = Te.get(t);
	return n === void 0 && (n = /* @__PURE__ */ new Map(), Te.set(t, n)), n;
}
var De = class {
	constructor(e, { functions: t, useIsolating: n = !0, transform: r = (e) => e } = {}) {
		this._terms = /* @__PURE__ */ new Map(), this._messages = /* @__PURE__ */ new Map(), this.locales = Array.isArray(e) ? e : [e], this._functions = {
			NUMBER: Se,
			DATETIME: we,
			...t
		}, this._useIsolating = n, this._transform = r, this._intls = Ee(e);
	}
	hasMessage(e) {
		return this._messages.has(e);
	}
	getMessage(e) {
		return this._messages.get(e);
	}
	addResource(e, { allowOverrides: t = !1 } = {}) {
		let n = [];
		for (let r = 0; r < e.body.length; r++) {
			let i = e.body[r];
			if (i.id.startsWith("-")) {
				if (t === !1 && this._terms.has(i.id)) {
					n.push(/* @__PURE__ */ Error(`Attempt to override an existing term: "${i.id}"`));
					continue;
				}
				this._terms.set(i.id, i);
			} else {
				if (t === !1 && this._messages.has(i.id)) {
					n.push(/* @__PURE__ */ Error(`Attempt to override an existing message: "${i.id}"`));
					continue;
				}
				this._messages.set(i.id, i);
			}
		}
		return n;
	}
	formatPattern(e, t = null, n = null) {
		if (typeof e == "string") return this._transform(e);
		let r = new ye(this, n, t);
		try {
			return ve(r, e).toString(r);
		} catch (e) {
			if (r.errors && e instanceof Error) return r.errors.push(e), new D().toString(r);
			throw e;
		}
	}
}, Oe = class extends Array {
	static from(e) {
		return e instanceof this ? e : new this(e);
	}
}, ke = class extends Oe {
	constructor(e) {
		if (super(), Symbol.iterator in Object(e)) this.iterator = e[Symbol.iterator]();
		else throw TypeError("Argument must implement the iteration protocol.");
	}
	[Symbol.iterator]() {
		let e = this, t = 0;
		return { next() {
			return e.length <= t && e.push(e.iterator.next()), e[t++];
		} };
	}
	touchNext(e = 1) {
		let t = 0;
		for (; t++ < e;) {
			let e = this[this.length - 1];
			if (e && e.done) break;
			this.push(this.iterator.next());
		}
		return this[this.length - 1];
	}
};
function Ae(e, t) {
	return Array.isArray(t) ? t.map((t) => je(e, t)) : je(e, t);
}
function je(e, t) {
	for (let n of e) if (n.hasMessage(t)) return n;
	return null;
}
function Me(e, t) {
	let n = new De(e, {
		functions: t._functions,
		useIsolating: t._useIsolating,
		transform: t._transform
	});
	return n._terms = new Map(t._terms), n._messages = new Map(t._messages), n;
}
function Ne(e, t) {
	if (!e) throw Error(`[fluent-vue] ${t}`);
}
function A(e, ...t) {
	console.warn(`[fluent-vue] ${e}`, ...t);
}
var Pe = class {
	constructor(e, t) {
		this.options = t, this.format = (e, t) => {
			let n = this.getBundle(e), r = this.getMessage(n, e);
			return this._format(n, r, t) ?? e;
		}, this.formatAttrs = (e, t) => {
			let n = this.getBundle(e), r = this.getMessage(n, e);
			return this._formatAttrs(n, r, t) ?? {};
		}, this.formatWithAttrs = (e, t) => {
			let n = this.getBundle(e), r = this.getMessage(n, e), i = this._format(n, r, t);
			return {
				value: i ?? e,
				attributes: this._formatAttrs(n, r, t) ?? {},
				hasValue: i !== null
			};
		}, this.$t = this.format, this.$ta = this.formatAttrs, this.bundles = e;
	}
	getBundle(e) {
		return Ae(this.bundles.value, e);
	}
	getMessage(e, t) {
		let n = e?.getMessage(t);
		return n === void 0 ? (this.options.warnMissing(t), null) : n;
	}
	formatPattern(e, t, n, r) {
		let i = [], a = r;
		if (a != null && this.options.mapVariable != null) for (let [e, t] of Object.entries(a)) {
			let n = this.options.mapVariable(t);
			n != null && (a[e] = n);
		}
		let o = e.formatPattern(n, a, i);
		for (let e of i) A(`Error when formatting message with key [${t}]`, e);
		return o;
	}
	_format(e, t, n) {
		return e === null || t === null || t.value === null ? null : this.formatPattern(e, t.id, t.value, n);
	}
	_formatAttrs(e, t, n) {
		if (e === null || t === null) return null;
		let r = {};
		for (let [i, a] of Object.entries(t.attributes)) r[i] = this.formatPattern(e, t.id, a, n);
		return r;
	}
};
function* Fe(e, t) {
	for (let n of e) yield* t(n);
}
function j(e, t, n = !1) {
	if (t == null) return e;
	let r = t.$options ?? t.type;
	if (r._fluent != null) return r._fluent;
	let i = Ie(e, r.fluent);
	return !n && !(typeof window > "u") && (r._fluent = i), i;
}
function Ie(e, t) {
	return t == null ? e : new Pe((0, x.computed)(() => ke.from(Fe(e.bundles.value, (e) => Object.entries(t).map(([t, n]) => {
		let r = t.split(/[\s+,]/);
		if (e.locales.filter((e) => r.includes(e)).length === 0) return e;
		let i = Me(r, e);
		return i.addResource(n, { allowOverrides: !0 }), i;
	})))), e.options);
}
var Le = Symbol("root-context");
function Re() {
	let e = (0, x.getCurrentInstance)();
	Ne(e != null, "useFluent called outside of setup");
	let t = (0, x.inject)(Le, void 0);
	return Ne(t != null, "useFluent called without installing plugin"), j(t, e.proxy, !0);
}
var ze = Object.create, Be = Object.defineProperty, Ve = Object.getOwnPropertyDescriptor, He = Object.getOwnPropertyNames, Ue = Object.getPrototypeOf, We = Object.prototype.hasOwnProperty, Ge = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), Ke = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = He(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !We.call(e, s) && s !== n && Be(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = Ve(t, s)) || r.enumerable
	});
	return e;
}, qe = (e, t, n) => (n = e == null ? {} : ze(Ue(e)), Ke(t || !e || !e.__esModule ? Be(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), Je = typeof navigator < "u", M = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
M.chrome !== void 0 && M.chrome.devtools, Je && (M.self, M.top), typeof navigator < "u" && navigator.userAgent?.toLowerCase().includes("electron"), typeof window < "u" && window.__NUXT__;
var Ye = qe(Ge(((e, t) => {
	t.exports = r;
	function n(e) {
		return e instanceof Buffer ? Buffer.from(e) : new e.constructor(e.buffer.slice(), e.byteOffset, e.length);
	}
	function r(e) {
		if (e ||= {}, e.circles) return i(e);
		let t = /* @__PURE__ */ new Map();
		if (t.set(Date, (e) => new Date(e)), t.set(Map, (e, t) => new Map(a(Array.from(e), t))), t.set(Set, (e, t) => new Set(a(Array.from(e), t))), e.constructorHandlers) for (let n of e.constructorHandlers) t.set(n[0], n[1]);
		let r = null;
		return e.proto ? s : o;
		function a(e, i) {
			let a = Object.keys(e), o = Array(a.length);
			for (let s = 0; s < a.length; s++) {
				let c = a[s], l = e[c];
				o[c] = typeof l != "object" || !l ? l : l.constructor !== Object && (r = t.get(l.constructor)) ? r(l, i) : ArrayBuffer.isView(l) ? n(l) : i(l);
			}
			return o;
		}
		function o(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return a(e, o);
			if (e.constructor !== Object && (r = t.get(e.constructor))) return r(e, o);
			let i = {};
			for (let a in e) {
				if (Object.hasOwnProperty.call(e, a) === !1) continue;
				let s = e[a];
				i[a] = typeof s != "object" || !s ? s : s.constructor !== Object && (r = t.get(s.constructor)) ? r(s, o) : ArrayBuffer.isView(s) ? n(s) : o(s);
			}
			return i;
		}
		function s(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return a(e, s);
			if (e.constructor !== Object && (r = t.get(e.constructor))) return r(e, s);
			let i = {};
			for (let a in e) {
				let o = e[a];
				i[a] = typeof o != "object" || !o ? o : o.constructor !== Object && (r = t.get(o.constructor)) ? r(o, s) : ArrayBuffer.isView(o) ? n(o) : s(o);
			}
			return i;
		}
	}
	function i(e) {
		let t = [], r = [], i = /* @__PURE__ */ new Map();
		if (i.set(Date, (e) => new Date(e)), i.set(Map, (e, t) => new Map(o(Array.from(e), t))), i.set(Set, (e, t) => new Set(o(Array.from(e), t))), e.constructorHandlers) for (let t of e.constructorHandlers) i.set(t[0], t[1]);
		let a = null;
		return e.proto ? c : s;
		function o(e, o) {
			let s = Object.keys(e), c = Array(s.length);
			for (let l = 0; l < s.length; l++) {
				let u = s[l], d = e[u];
				if (typeof d != "object" || !d) c[u] = d;
				else if (d.constructor !== Object && (a = i.get(d.constructor))) c[u] = a(d, o);
				else if (ArrayBuffer.isView(d)) c[u] = n(d);
				else {
					let e = t.indexOf(d);
					c[u] = e === -1 ? o(d) : r[e];
				}
			}
			return c;
		}
		function s(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return o(e, s);
			if (e.constructor !== Object && (a = i.get(e.constructor))) return a(e, s);
			let c = {};
			t.push(e), r.push(c);
			for (let o in e) {
				if (Object.hasOwnProperty.call(e, o) === !1) continue;
				let l = e[o];
				if (typeof l != "object" || !l) c[o] = l;
				else if (l.constructor !== Object && (a = i.get(l.constructor))) c[o] = a(l, s);
				else if (ArrayBuffer.isView(l)) c[o] = n(l);
				else {
					let e = t.indexOf(l);
					c[o] = e === -1 ? s(l) : r[e];
				}
			}
			return t.pop(), r.pop(), c;
		}
		function c(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return o(e, c);
			if (e.constructor !== Object && (a = i.get(e.constructor))) return a(e, c);
			let s = {};
			t.push(e), r.push(s);
			for (let o in e) {
				let l = e[o];
				if (typeof l != "object" || !l) s[o] = l;
				else if (l.constructor !== Object && (a = i.get(l.constructor))) s[o] = a(l, c);
				else if (ArrayBuffer.isView(l)) s[o] = n(l);
				else {
					let e = t.indexOf(l);
					s[o] = e === -1 ? c(l) : r[e];
				}
			}
			return t.pop(), r.pop(), s;
		}
	}
}))(), 1), Xe = /(?:^|[-_/])(\w)/g;
function Ze(e, t) {
	return t ? t.toUpperCase() : "";
}
function Qe(e) {
	return e && `${e}`.replace(Xe, Ze);
}
function $e(e, t) {
	let n = e.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
	n.endsWith(`index${t}`) && (n = n.replace(`/index${t}`, t));
	let r = n.lastIndexOf("/"), i = n.substring(r + 1);
	if (t) {
		let e = i.lastIndexOf(t);
		return i.substring(0, e);
	}
	return "";
}
var et = (0, Ye.default)({ circles: !0 }), tt = { trailing: !0 };
function N(e, t = 25, n = {}) {
	if (n = {
		...tt,
		...n
	}, !Number.isFinite(t)) throw TypeError("Expected `wait` to be a finite number");
	let r, i, a = [], o, s, c = (t, r) => (o = nt(e, t, r), o.finally(() => {
		if (o = null, n.trailing && s && !i) {
			let e = c(t, s);
			return s = null, e;
		}
	}), o), l = function(...e) {
		return n.trailing && (s = e), o || new Promise((o) => {
			let l = !i && n.leading;
			clearTimeout(i), i = setTimeout(() => {
				i = null;
				let t = n.leading ? r : c(this, e);
				s = null;
				for (let e of a) e(t);
				a = [];
			}, t), l ? (r = c(this, e), o(r)) : a.push(o);
		});
	}, u = (e) => {
		e && (clearTimeout(e), i = null);
	};
	return l.isPending = () => !!i, l.cancel = () => {
		u(i), a = [], s = null;
	}, l.flush = () => {
		if (u(i), !s || o) return;
		let e = s;
		return s = null, c(this, e);
	}, l;
}
async function nt(e, t, n) {
	return await e.apply(t, n);
}
function rt(e, t = {}, n) {
	for (let r in e) {
		let i = e[r], a = n ? `${n}:${r}` : r;
		typeof i == "object" && i ? rt(i, t, a) : typeof i == "function" && (t[a] = i);
	}
	return t;
}
var it = { run: (e) => e() }, at = console.createTask === void 0 ? () => it : console.createTask;
function ot(e, t) {
	let n = at(t.shift());
	return e.reduce((e, r) => e.then(() => n.run(() => r(...t))), Promise.resolve());
}
function st(e, t) {
	let n = at(t.shift());
	return Promise.all(e.map((e) => n.run(() => e(...t))));
}
function ct(e, t) {
	for (let n of [...e]) n(t);
}
var lt = class {
	constructor() {
		this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
	}
	hook(e, t, n = {}) {
		if (!e || typeof t != "function") return () => {};
		let r = e, i;
		for (; this._deprecatedHooks[e];) i = this._deprecatedHooks[e], e = i.to;
		if (i && !n.allowDeprecated) {
			let e = i.message;
			e ||= `${r} hook has been deprecated` + (i.to ? `, please use ${i.to}` : ""), this._deprecatedMessages ||= /* @__PURE__ */ new Set(), this._deprecatedMessages.has(e) || (console.warn(e), this._deprecatedMessages.add(e));
		}
		if (!t.name) try {
			Object.defineProperty(t, "name", {
				get: () => "_" + e.replace(/\W+/g, "_") + "_hook_cb",
				configurable: !0
			});
		} catch {}
		return this._hooks[e] = this._hooks[e] || [], this._hooks[e].push(t), () => {
			t &&= (this.removeHook(e, t), void 0);
		};
	}
	hookOnce(e, t) {
		let n, r = (...e) => (typeof n == "function" && n(), n = void 0, r = void 0, t(...e));
		return n = this.hook(e, r), n;
	}
	removeHook(e, t) {
		if (this._hooks[e]) {
			let n = this._hooks[e].indexOf(t);
			n !== -1 && this._hooks[e].splice(n, 1), this._hooks[e].length === 0 && delete this._hooks[e];
		}
	}
	deprecateHook(e, t) {
		this._deprecatedHooks[e] = typeof t == "string" ? { to: t } : t;
		let n = this._hooks[e] || [];
		delete this._hooks[e];
		for (let t of n) this.hook(e, t);
	}
	deprecateHooks(e) {
		Object.assign(this._deprecatedHooks, e);
		for (let t in e) this.deprecateHook(t, e[t]);
	}
	addHooks(e) {
		let t = rt(e), n = Object.keys(t).map((e) => this.hook(e, t[e]));
		return () => {
			for (let e of n.splice(0, n.length)) e();
		};
	}
	removeHooks(e) {
		let t = rt(e);
		for (let e in t) this.removeHook(e, t[e]);
	}
	removeAllHooks() {
		for (let e in this._hooks) delete this._hooks[e];
	}
	callHook(e, ...t) {
		return t.unshift(e), this.callHookWith(ot, e, ...t);
	}
	callHookParallel(e, ...t) {
		return t.unshift(e), this.callHookWith(st, e, ...t);
	}
	callHookWith(e, t, ...n) {
		let r = this._before || this._after ? {
			name: t,
			args: n,
			context: {}
		} : void 0;
		this._before && ct(this._before, r);
		let i = e(t in this._hooks ? [...this._hooks[t]] : [], n);
		return i instanceof Promise ? i.finally(() => {
			this._after && r && ct(this._after, r);
		}) : (this._after && r && ct(this._after, r), i);
	}
	beforeEach(e) {
		return this._before = this._before || [], this._before.push(e), () => {
			if (this._before !== void 0) {
				let t = this._before.indexOf(e);
				t !== -1 && this._before.splice(t, 1);
			}
		};
	}
	afterEach(e) {
		return this._after = this._after || [], this._after.push(e), () => {
			if (this._after !== void 0) {
				let t = this._after.indexOf(e);
				t !== -1 && this._after.splice(t, 1);
			}
		};
	}
};
function ut() {
	return new lt();
}
var dt = Object.create, ft = Object.defineProperty, pt = Object.getOwnPropertyDescriptor, mt = Object.getOwnPropertyNames, ht = Object.getPrototypeOf, gt = Object.prototype.hasOwnProperty, _t = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), vt = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = mt(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !gt.call(e, s) && s !== n && ft(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = pt(t, s)) || r.enumerable
	});
	return e;
}, yt = (e, t, n) => (n = e == null ? {} : dt(ht(e)), vt(t || !e || !e.__esModule ? ft(n, "default", {
	value: e,
	enumerable: !0
}) : n, e));
function bt(e) {
	if (typeof e == "function") return e.displayName || e.name || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || "";
	let t = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
	return t === "index" && e.__file?.endsWith("index.vue") ? "" : t;
}
function xt(e) {
	let t = e.__file;
	if (t) return Qe($e(t, ".vue"));
}
function St(e, t) {
	return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function Ct(e) {
	if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__) return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
	if (e.root) return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function wt(e) {
	let t = e.subTree?.type, n = Ct(e);
	return n ? n?.types?.Fragment === t : !1;
}
function Tt(e) {
	let t = bt(e?.type || {});
	if (t) return t;
	if (e?.root === e) return "Root";
	for (let t in e.parent?.type?.components) if (e.parent.type.components[t] === e?.type) return St(e, t);
	for (let t in e.appContext?.components) if (e.appContext.components[t] === e?.type) return St(e, t);
	return xt(e?.type || {}) || "Anonymous Component";
}
function Et(e) {
	return `${e?.appContext?.app?.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__ ?? 0}:${e === e?.root ? "root" : e.uid}`;
}
function Dt(e, t) {
	return t ||= `${e.id}:root`, e.instanceMap.get(t) || e.instanceMap.get(":root");
}
function Ot() {
	let e = {
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		get width() {
			return e.right - e.left;
		},
		get height() {
			return e.bottom - e.top;
		}
	};
	return e;
}
var kt;
function At(e) {
	return kt ||= document.createRange(), kt.selectNode(e), kt.getBoundingClientRect();
}
function jt(e) {
	let t = Ot();
	if (!e.children) return t;
	for (let n = 0, r = e.children.length; n < r; n++) {
		let r = e.children[n], i;
		if (r.component) i = P(r.component);
		else if (r.el) {
			let e = r.el;
			e.nodeType === 1 || e.getBoundingClientRect ? i = e.getBoundingClientRect() : e.nodeType === 3 && e.data.trim() && (i = At(e));
		}
		i && Mt(t, i);
	}
	return t;
}
function Mt(e, t) {
	return (!e.top || t.top < e.top) && (e.top = t.top), (!e.bottom || t.bottom > e.bottom) && (e.bottom = t.bottom), (!e.left || t.left < e.left) && (e.left = t.left), (!e.right || t.right > e.right) && (e.right = t.right), e;
}
var Nt = {
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	width: 0,
	height: 0
};
function P(e) {
	let t = e.subTree.el;
	return typeof window > "u" ? Nt : wt(e) ? jt(e.subTree) : t?.nodeType === 1 ? t?.getBoundingClientRect() : e.subTree.component ? P(e.subTree.component) : Nt;
}
function Pt(e) {
	return wt(e) ? Ft(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function Ft(e) {
	if (!e.children) return [];
	let t = [];
	return e.children.forEach((e) => {
		e.component ? t.push(...Pt(e.component)) : e?.el && t.push(e.el);
	}), t;
}
var It = "__vue-devtools-component-inspector__", Lt = "__vue-devtools-component-inspector__card__", Rt = "__vue-devtools-component-inspector__name__", zt = "__vue-devtools-component-inspector__indicator__", Bt = {
	display: "block",
	zIndex: 2147483640,
	position: "fixed",
	backgroundColor: "#42b88325",
	border: "1px solid #42b88350",
	borderRadius: "5px",
	transition: "all 0.1s ease-in",
	pointerEvents: "none"
}, Vt = {
	fontFamily: "Arial, Helvetica, sans-serif",
	padding: "5px 8px",
	borderRadius: "4px",
	textAlign: "left",
	position: "absolute",
	left: 0,
	color: "#e9e9e9",
	fontSize: "14px",
	fontWeight: 600,
	lineHeight: "24px",
	backgroundColor: "#42b883",
	boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
}, Ht = {
	display: "inline-block",
	fontWeight: 400,
	fontStyle: "normal",
	fontSize: "12px",
	opacity: .7
};
function F() {
	return document.getElementById(It);
}
function Ut() {
	return document.getElementById(Lt);
}
function Wt() {
	return document.getElementById(zt);
}
function Gt() {
	return document.getElementById(Rt);
}
function Kt(e) {
	return {
		left: `${Math.round(e.left * 100) / 100}px`,
		top: `${Math.round(e.top * 100) / 100}px`,
		width: `${Math.round(e.width * 100) / 100}px`,
		height: `${Math.round(e.height * 100) / 100}px`
	};
}
function qt(e) {
	let t = document.createElement("div");
	t.id = e.elementId ?? It, Object.assign(t.style, {
		...Bt,
		...Kt(e.bounds),
		...e.style
	});
	let n = document.createElement("span");
	n.id = Lt, Object.assign(n.style, {
		...Vt,
		top: e.bounds.top < 35 ? 0 : "-35px"
	});
	let r = document.createElement("span");
	r.id = Rt, r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
	let i = document.createElement("i");
	return i.id = zt, i.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(i.style, Ht), n.appendChild(r), n.appendChild(i), t.appendChild(n), document.body.appendChild(t), t;
}
function Jt(e) {
	let t = F(), n = Ut(), r = Gt(), i = Wt();
	t && (Object.assign(t.style, {
		...Bt,
		...Kt(e.bounds)
	}), Object.assign(n.style, { top: e.bounds.top < 35 ? 0 : "-35px" }), r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, i.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function Yt(e) {
	let t = P(e);
	if (!t.width && !t.height) return;
	let n = Tt(e);
	F() ? Jt({
		bounds: t,
		name: n
	}) : qt({
		bounds: t,
		name: n
	});
}
function Xt() {
	let e = F();
	e && (e.style.display = "none");
}
var Zt = null;
function Qt(e) {
	let t = e.target;
	if (t) {
		let e = t.__vueParentComponent;
		if (e && (Zt = e, e.vnode.el)) {
			let t = P(e), n = Tt(e);
			F() ? Jt({
				bounds: t,
				name: n
			}) : qt({
				bounds: t,
				name: n
			});
		}
	}
}
function $t(e, t) {
	e.preventDefault(), e.stopPropagation(), Zt && t(Et(Zt));
}
var en = null;
function tn() {
	Xt(), window.removeEventListener("mouseover", Qt), window.removeEventListener("click", en, !0), en = null;
}
function nn() {
	return window.addEventListener("mouseover", Qt), new Promise((e) => {
		function t(n) {
			n.preventDefault(), n.stopPropagation(), $t(n, (n) => {
				window.removeEventListener("click", t, !0), en = null, window.removeEventListener("mouseover", Qt);
				let r = F();
				r && (r.style.display = "none"), e(JSON.stringify({ id: n }));
			});
		}
		en = t, window.addEventListener("click", t, !0);
	});
}
function rn(e) {
	let t = Dt(B.value, e.id);
	if (t) {
		let [n] = Pt(t);
		if (typeof n.scrollIntoView == "function") n.scrollIntoView({ behavior: "smooth" });
		else {
			let e = P(t), n = document.createElement("div"), r = {
				...Kt(e),
				position: "absolute"
			};
			Object.assign(n.style, r), document.body.appendChild(n), n.scrollIntoView({ behavior: "smooth" }), setTimeout(() => {
				document.body.removeChild(n);
			}, 2e3);
		}
		setTimeout(() => {
			let n = P(t);
			if (n.width || n.height) {
				let r = Tt(t), i = F();
				i ? Jt({
					...e,
					name: r,
					bounds: n
				}) : qt({
					...e,
					name: r,
					bounds: n
				}), setTimeout(() => {
					i && (i.style.display = "none");
				}, 1500);
			}
		}, 1200);
	}
}
M.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ ??= !0;
function an(e) {
	let t = 0, n = setInterval(() => {
		M.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= 5e3 && clearInterval(n);
	}, 30);
}
function on() {
	let e = M.__VUE_INSPECTOR__, t = e.openInEditor;
	e.openInEditor = async (...n) => {
		e.disable(), t(...n);
	};
}
function sn() {
	return new Promise((e) => {
		function t() {
			on(), e(M.__VUE_INSPECTOR__);
		}
		M.__VUE_INSPECTOR__ ? t() : an(() => {
			t();
		});
	});
}
var cn = function(e) {
	return e.SKIP = "__v_skip", e.IS_REACTIVE = "__v_isReactive", e.IS_READONLY = "__v_isReadonly", e.IS_SHALLOW = "__v_isShallow", e.RAW = "__v_raw", e;
}({});
function ln(e) {
	return !!(e && e[cn.IS_READONLY]);
}
function un(e) {
	return ln(e) ? un(e[cn.RAW]) : !!(e && e[cn.IS_REACTIVE]);
}
function dn(e) {
	return !!(e && e.__v_isRef === !0);
}
function fn(e) {
	let t = e && e[cn.RAW];
	return t ? fn(t) : e;
}
var pn = class {
	constructor() {
		this.refEditor = new mn();
	}
	set(e, t, n, r) {
		let i = Array.isArray(t) ? t : t.split(".");
		for (; i.length > 1;) {
			let t = i.shift();
			e = e instanceof Map ? e.get(t) : e instanceof Set ? Array.from(e.values())[t] : e[t], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
		}
		let a = i[0], o = this.refEditor.get(e)[a];
		r ? r(e, a, n) : this.refEditor.isRef(o) ? this.refEditor.set(o, n) : e[a] = n;
	}
	get(e, t) {
		let n = Array.isArray(t) ? t : t.split(".");
		for (let t = 0; t < n.length; t++) if (e = e instanceof Map ? e.get(n[t]) : e[n[t]], this.refEditor.isRef(e) && (e = this.refEditor.get(e)), !e) return;
		return e;
	}
	has(e, t, n = !1) {
		if (e === void 0) return !1;
		let r = Array.isArray(t) ? t.slice() : t.split("."), i = n ? 2 : 1;
		for (; e && r.length > i;) {
			let t = r.shift();
			e = e[t], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
		}
		return e != null && Object.prototype.hasOwnProperty.call(e, r[0]);
	}
	createDefaultSetCallback(e) {
		return (t, n, r) => {
			if ((e.remove || e.newKey) && (Array.isArray(t) ? t.splice(n, 1) : fn(t) instanceof Map ? t.delete(n) : fn(t) instanceof Set ? t.delete(Array.from(t.values())[n]) : Reflect.deleteProperty(t, n)), !e.remove) {
				let i = t[e.newKey || n];
				this.refEditor.isRef(i) ? this.refEditor.set(i, r) : fn(t) instanceof Map ? t.set(e.newKey || n, r) : fn(t) instanceof Set ? t.add(r) : t[e.newKey || n] = r;
			}
		};
	}
}, mn = class {
	set(e, t) {
		if (dn(e)) e.value = t;
		else {
			if (e instanceof Set && Array.isArray(t)) {
				e.clear(), t.forEach((t) => e.add(t));
				return;
			}
			let n = Object.keys(t);
			if (e instanceof Map) {
				let r = new Set(e.keys());
				n.forEach((n) => {
					e.set(n, Reflect.get(t, n)), r.delete(n);
				}), r.forEach((t) => e.delete(t));
				return;
			}
			let r = new Set(Object.keys(e));
			n.forEach((n) => {
				Reflect.set(e, n, Reflect.get(t, n)), r.delete(n);
			}), r.forEach((t) => Reflect.deleteProperty(e, t));
		}
	}
	get(e) {
		return dn(e) ? e.value : e;
	}
	isRef(e) {
		return dn(e) || un(e);
	}
};
new pn();
var hn = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function gn() {
	if (typeof window > "u" || !Je || typeof localStorage > "u" || localStorage === null) return {
		recordingState: !1,
		mouseEventEnabled: !1,
		keyboardEventEnabled: !1,
		componentEventEnabled: !1,
		performanceEventEnabled: !1,
		selected: ""
	};
	let e = localStorage.getItem === void 0 ? null : localStorage.getItem(hn);
	return e ? JSON.parse(e) : {
		recordingState: !1,
		mouseEventEnabled: !1,
		keyboardEventEnabled: !1,
		componentEventEnabled: !1,
		performanceEventEnabled: !1,
		selected: ""
	};
}
M.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS ??= [];
var _n = new Proxy(M.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, { get(e, t, n) {
	return Reflect.get(e, t, n);
} });
function vn(e, t) {
	V.timelineLayersState[t.id] = !1, _n.push({
		...e,
		descriptorId: t.id,
		appRecord: Ct(t.app)
	});
}
M.__VUE_DEVTOOLS_KIT_INSPECTOR__ ??= [];
var yn = new Proxy(M.__VUE_DEVTOOLS_KIT_INSPECTOR__, { get(e, t, n) {
	return Reflect.get(e, t, n);
} }), bn = N(() => {
	G.hooks.callHook(R.SEND_INSPECTOR_TO_CLIENT, Sn());
});
function xn(e, t) {
	yn.push({
		options: e,
		descriptor: t,
		treeFilterPlaceholder: e.treeFilterPlaceholder ?? "Search tree...",
		stateFilterPlaceholder: e.stateFilterPlaceholder ?? "Search state...",
		treeFilter: "",
		selectedNodeId: "",
		appRecord: Ct(t.app)
	}), bn();
}
function Sn() {
	return yn.filter((e) => e.descriptor.app === B.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
		let t = e.descriptor, n = e.options;
		return {
			id: n.id,
			label: n.label,
			logo: t.logo,
			icon: `custom-ic-baseline-${n?.icon?.replace(/_/g, "-")}`,
			packageName: t.packageName,
			homepage: t.homepage,
			pluginId: t.id
		};
	});
}
function Cn(e, t) {
	return yn.find((n) => n.options.id === e && (!t || n.descriptor.app === t));
}
var I = function(e) {
	return e.VISIT_COMPONENT_TREE = "visitComponentTree", e.INSPECT_COMPONENT = "inspectComponent", e.EDIT_COMPONENT_STATE = "editComponentState", e.GET_INSPECTOR_TREE = "getInspectorTree", e.GET_INSPECTOR_STATE = "getInspectorState", e.EDIT_INSPECTOR_STATE = "editInspectorState", e.INSPECT_TIMELINE_EVENT = "inspectTimelineEvent", e.TIMELINE_CLEARED = "timelineCleared", e.SET_PLUGIN_SETTINGS = "setPluginSettings", e;
}({}), L = function(e) {
	return e.ADD_INSPECTOR = "addInspector", e.SEND_INSPECTOR_TREE = "sendInspectorTree", e.SEND_INSPECTOR_STATE = "sendInspectorState", e.CUSTOM_INSPECTOR_SELECT_NODE = "customInspectorSelectNode", e.TIMELINE_LAYER_ADDED = "timelineLayerAdded", e.TIMELINE_EVENT_ADDED = "timelineEventAdded", e.GET_COMPONENT_INSTANCES = "getComponentInstances", e.GET_COMPONENT_BOUNDS = "getComponentBounds", e.GET_COMPONENT_NAME = "getComponentName", e.COMPONENT_HIGHLIGHT = "componentHighlight", e.COMPONENT_UNHIGHLIGHT = "componentUnhighlight", e;
}({}), R = function(e) {
	return e.SEND_INSPECTOR_TREE_TO_CLIENT = "sendInspectorTreeToClient", e.SEND_INSPECTOR_STATE_TO_CLIENT = "sendInspectorStateToClient", e.SEND_TIMELINE_EVENT_TO_CLIENT = "sendTimelineEventToClient", e.SEND_INSPECTOR_TO_CLIENT = "sendInspectorToClient", e.SEND_ACTIVE_APP_UNMOUNTED_TO_CLIENT = "sendActiveAppUpdatedToClient", e.DEVTOOLS_STATE_UPDATED = "devtoolsStateUpdated", e.DEVTOOLS_CONNECTED_UPDATED = "devtoolsConnectedUpdated", e.ROUTER_INFO_UPDATED = "routerInfoUpdated", e;
}({});
function wn() {
	let e = ut();
	e.hook(L.ADD_INSPECTOR, ({ inspector: e, plugin: t }) => {
		xn(e, t.descriptor);
	});
	let t = N(async ({ inspectorId: t, plugin: n }) => {
		if (!t || !n?.descriptor?.app || V.highPerfModeEnabled) return;
		let r = Cn(t, n.descriptor.app), i = {
			app: n.descriptor.app,
			inspectorId: t,
			filter: r?.treeFilter || "",
			rootNodes: []
		};
		await new Promise((t) => {
			e.callHookWith(async (e) => {
				await Promise.all(e.map((e) => e(i))), t();
			}, I.GET_INSPECTOR_TREE);
		}), e.callHookWith(async (e) => {
			await Promise.all(e.map((e) => e({
				inspectorId: t,
				rootNodes: i.rootNodes
			})));
		}, R.SEND_INSPECTOR_TREE_TO_CLIENT);
	}, 120);
	e.hook(L.SEND_INSPECTOR_TREE, t);
	let n = N(async ({ inspectorId: t, plugin: n }) => {
		if (!t || !n?.descriptor?.app || V.highPerfModeEnabled) return;
		let r = Cn(t, n.descriptor.app), i = {
			app: n.descriptor.app,
			inspectorId: t,
			nodeId: r?.selectedNodeId || "",
			state: null
		}, a = { currentTab: `custom-inspector:${t}` };
		i.nodeId && await new Promise((t) => {
			e.callHookWith(async (e) => {
				await Promise.all(e.map((e) => e(i, a))), t();
			}, I.GET_INSPECTOR_STATE);
		}), e.callHookWith(async (e) => {
			await Promise.all(e.map((e) => e({
				inspectorId: t,
				nodeId: i.nodeId,
				state: i.state
			})));
		}, R.SEND_INSPECTOR_STATE_TO_CLIENT);
	}, 120);
	return e.hook(L.SEND_INSPECTOR_STATE, n), e.hook(L.CUSTOM_INSPECTOR_SELECT_NODE, ({ inspectorId: e, nodeId: t, plugin: n }) => {
		let r = Cn(e, n.descriptor.app);
		r && (r.selectedNodeId = t);
	}), e.hook(L.TIMELINE_LAYER_ADDED, ({ options: e, plugin: t }) => {
		vn(e, t.descriptor);
	}), e.hook(L.TIMELINE_EVENT_ADDED, ({ options: t, plugin: n }) => {
		V.highPerfModeEnabled || !V.timelineLayersState?.[n.descriptor.id] && ![
			"performance",
			"component-event",
			"keyboard",
			"mouse"
		].includes(t.layerId) || e.callHookWith(async (e) => {
			await Promise.all(e.map((e) => e(t)));
		}, R.SEND_TIMELINE_EVENT_TO_CLIENT);
	}), e.hook(L.GET_COMPONENT_INSTANCES, async ({ app: e }) => {
		let t = e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
		if (!t) return null;
		let n = t.id.toString();
		return [...t.instanceMap].filter(([e]) => e.split(":")[0] === n).map(([, e]) => e);
	}), e.hook(L.GET_COMPONENT_BOUNDS, async ({ instance: e }) => P(e)), e.hook(L.GET_COMPONENT_NAME, ({ instance: e }) => Tt(e)), e.hook(L.COMPONENT_HIGHLIGHT, ({ uid: e }) => {
		let t = B.value.instanceMap.get(e);
		t && Yt(t);
	}), e.hook(L.COMPONENT_UNHIGHLIGHT, () => {
		Xt();
	}), e;
}
M.__VUE_DEVTOOLS_KIT_APP_RECORDS__ ??= [], M.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ ??= {}, M.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ ??= "", M.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ ??= [], M.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ ??= [];
var z = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function Tn() {
	return {
		connected: !1,
		clientConnected: !1,
		vitePluginDetected: !0,
		appRecords: [],
		activeAppRecordId: "",
		tabs: [],
		commands: [],
		highPerfModeEnabled: !0,
		devtoolsClientDetected: {},
		perfUniqueGroupId: 0,
		timelineLayersState: gn()
	};
}
M[z] ??= Tn();
var En = N((e) => {
	G.hooks.callHook(R.DEVTOOLS_STATE_UPDATED, { state: e });
});
N((e, t) => {
	G.hooks.callHook(R.DEVTOOLS_CONNECTED_UPDATED, {
		state: e,
		oldState: t
	});
});
var Dn = new Proxy(M.__VUE_DEVTOOLS_KIT_APP_RECORDS__, { get(e, t, n) {
	return t === "value" ? M.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : M.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
} }), B = new Proxy(M.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, { get(e, t, n) {
	return t === "value" ? M.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? M.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : M.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
} });
function On() {
	En({
		...M[z],
		appRecords: Dn.value,
		activeAppRecordId: B.id,
		tabs: M.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
		commands: M.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
	});
}
function kn(e) {
	M.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, On();
}
function An(e) {
	M.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, On();
}
var V = new Proxy(M[z], {
	get(e, t) {
		return t === "appRecords" ? Dn : t === "activeAppRecordId" ? B.id : t === "tabs" ? M.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? M.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : M[z][t];
	},
	deleteProperty(e, t) {
		return delete e[t], !0;
	},
	set(e, t, n) {
		return e[t] = n, M[z][t] = n, !0;
	}
});
function jn(e = {}) {
	let { file: t, host: n, baseUrl: r = window.location.origin, line: i = 0, column: a = 0 } = e;
	if (t) {
		if (n === "chrome-extension") {
			let e = t.replace(/\\/g, "\\\\"), n = window.VUE_DEVTOOLS_CONFIG?.openInEditorHost ?? "/";
			fetch(`${n}__open-in-editor?file=${encodeURI(t)}`).then((t) => {
				if (!t.ok) {
					let t = `Opening component ${e} failed`;
					console.log(`%c${t}`, "color:red");
				}
			});
		} else if (V.vitePluginDetected) {
			let e = M.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__ ?? r;
			M.__VUE_INSPECTOR__.openInEditor(e, t, i, a);
		}
	}
}
M.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ ??= [];
var Mn = new Proxy(M.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, { get(e, t, n) {
	return Reflect.get(e, t, n);
} });
function Nn(e) {
	let t = {};
	return Object.keys(e).forEach((n) => {
		t[n] = e[n].defaultValue;
	}), t;
}
function Pn(e) {
	return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function Fn(e) {
	return (Mn.find((t) => t[0].id === e && !!t[0]?.settings)?.[0] ?? null)?.settings ?? null;
}
function In(e, t) {
	let n = Pn(e);
	if (n) {
		let e = localStorage.getItem(n);
		if (e) return JSON.parse(e);
	}
	return Nn(e ? (Mn.find((t) => t[0].id === e)?.[0] ?? null)?.settings ?? {} : t);
}
function Ln(e, t) {
	let n = Pn(e);
	localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(Nn(t)));
}
function Rn(e, t, n) {
	let r = Pn(e), i = localStorage.getItem(r), a = JSON.parse(i || "{}"), o = {
		...a,
		[t]: n
	};
	localStorage.setItem(r, JSON.stringify(o)), G.hooks.callHookWith((r) => {
		r.forEach((r) => r({
			pluginId: e,
			key: t,
			oldValue: a[t],
			newValue: n,
			settings: o
		}));
	}, I.SET_PLUGIN_SETTINGS);
}
var H = function(e) {
	return e.APP_INIT = "app:init", e.APP_UNMOUNT = "app:unmount", e.COMPONENT_UPDATED = "component:updated", e.COMPONENT_ADDED = "component:added", e.COMPONENT_REMOVED = "component:removed", e.COMPONENT_EMIT = "component:emit", e.PERFORMANCE_START = "perf:start", e.PERFORMANCE_END = "perf:end", e.ADD_ROUTE = "router:add-route", e.REMOVE_ROUTE = "router:remove-route", e.RENDER_TRACKED = "render:tracked", e.RENDER_TRIGGERED = "render:triggered", e.APP_CONNECTED = "app:connected", e.SETUP_DEVTOOLS_PLUGIN = "devtools-plugin:setup", e;
}({}), U = M.__VUE_DEVTOOLS_HOOK ??= ut(), zn = {
	on: {
		vueAppInit(e) {
			U.hook(H.APP_INIT, e);
		},
		vueAppUnmount(e) {
			U.hook(H.APP_UNMOUNT, e);
		},
		vueAppConnected(e) {
			U.hook(H.APP_CONNECTED, e);
		},
		componentAdded(e) {
			return U.hook(H.COMPONENT_ADDED, e);
		},
		componentEmit(e) {
			return U.hook(H.COMPONENT_EMIT, e);
		},
		componentUpdated(e) {
			return U.hook(H.COMPONENT_UPDATED, e);
		},
		componentRemoved(e) {
			return U.hook(H.COMPONENT_REMOVED, e);
		},
		setupDevtoolsPlugin(e) {
			U.hook(H.SETUP_DEVTOOLS_PLUGIN, e);
		},
		perfStart(e) {
			return U.hook(H.PERFORMANCE_START, e);
		},
		perfEnd(e) {
			return U.hook(H.PERFORMANCE_END, e);
		}
	},
	setupDevToolsPlugin(e, t) {
		return U.callHook(H.SETUP_DEVTOOLS_PLUGIN, e, t);
	}
}, Bn = class {
	constructor({ plugin: e, ctx: t }) {
		this.hooks = t.hooks, this.plugin = e;
	}
	get on() {
		return {
			visitComponentTree: (e) => {
				this.hooks.hook(I.VISIT_COMPONENT_TREE, e);
			},
			inspectComponent: (e) => {
				this.hooks.hook(I.INSPECT_COMPONENT, e);
			},
			editComponentState: (e) => {
				this.hooks.hook(I.EDIT_COMPONENT_STATE, e);
			},
			getInspectorTree: (e) => {
				this.hooks.hook(I.GET_INSPECTOR_TREE, e);
			},
			getInspectorState: (e) => {
				this.hooks.hook(I.GET_INSPECTOR_STATE, e);
			},
			editInspectorState: (e) => {
				this.hooks.hook(I.EDIT_INSPECTOR_STATE, e);
			},
			inspectTimelineEvent: (e) => {
				this.hooks.hook(I.INSPECT_TIMELINE_EVENT, e);
			},
			timelineCleared: (e) => {
				this.hooks.hook(I.TIMELINE_CLEARED, e);
			},
			setPluginSettings: (e) => {
				this.hooks.hook(I.SET_PLUGIN_SETTINGS, e);
			}
		};
	}
	notifyComponentUpdate(e) {
		if (V.highPerfModeEnabled) return;
		let t = Sn().find((e) => e.packageName === this.plugin.descriptor.packageName);
		if (t?.id) {
			if (e) {
				let t = [
					e.appContext.app,
					e.uid,
					e.parent?.uid,
					e
				];
				U.callHook(H.COMPONENT_UPDATED, ...t);
			} else U.callHook(H.COMPONENT_UPDATED);
			this.hooks.callHook(L.SEND_INSPECTOR_STATE, {
				inspectorId: t.id,
				plugin: this.plugin
			});
		}
	}
	addInspector(e) {
		this.hooks.callHook(L.ADD_INSPECTOR, {
			inspector: e,
			plugin: this.plugin
		}), this.plugin.descriptor.settings && Ln(e.id, this.plugin.descriptor.settings);
	}
	sendInspectorTree(e) {
		V.highPerfModeEnabled || this.hooks.callHook(L.SEND_INSPECTOR_TREE, {
			inspectorId: e,
			plugin: this.plugin
		});
	}
	sendInspectorState(e) {
		V.highPerfModeEnabled || this.hooks.callHook(L.SEND_INSPECTOR_STATE, {
			inspectorId: e,
			plugin: this.plugin
		});
	}
	selectInspectorNode(e, t) {
		this.hooks.callHook(L.CUSTOM_INSPECTOR_SELECT_NODE, {
			inspectorId: e,
			nodeId: t,
			plugin: this.plugin
		});
	}
	visitComponentTree(e) {
		return this.hooks.callHook(I.VISIT_COMPONENT_TREE, e);
	}
	now() {
		return V.highPerfModeEnabled ? 0 : Date.now();
	}
	addTimelineLayer(e) {
		this.hooks.callHook(L.TIMELINE_LAYER_ADDED, {
			options: e,
			plugin: this.plugin
		});
	}
	addTimelineEvent(e) {
		V.highPerfModeEnabled || this.hooks.callHook(L.TIMELINE_EVENT_ADDED, {
			options: e,
			plugin: this.plugin
		});
	}
	getSettings(e) {
		return In(e ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
	}
	getComponentInstances(e) {
		return this.hooks.callHook(L.GET_COMPONENT_INSTANCES, { app: e });
	}
	getComponentBounds(e) {
		return this.hooks.callHook(L.GET_COMPONENT_BOUNDS, { instance: e });
	}
	getComponentName(e) {
		return this.hooks.callHook(L.GET_COMPONENT_NAME, { instance: e });
	}
	highlightElement(e) {
		let t = e.__VUE_DEVTOOLS_NEXT_UID__;
		return this.hooks.callHook(L.COMPONENT_HIGHLIGHT, { uid: t });
	}
	unhighlightElement() {
		return this.hooks.callHook(L.COMPONENT_UNHIGHLIGHT);
	}
}, Vn = "__vue_devtool_undefined__", Hn = "__vue_devtool_infinity__", Un = "__vue_devtool_negative_infinity__", Wn = "__vue_devtool_nan__";
Object.entries({
	[Vn]: "undefined",
	[Wn]: "NaN",
	[Hn]: "Infinity",
	[Un]: "-Infinity"
}).reduce((e, [t, n]) => (e[n] = t, e), {}), M.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ ??= /* @__PURE__ */ new Set();
function Gn(e, t) {
	return zn.setupDevToolsPlugin(e, t);
}
function Kn(e, t) {
	let [n, r] = e;
	if (n.app !== t) return;
	let i = new Bn({
		plugin: {
			setupFn: r,
			descriptor: n
		},
		ctx: G
	});
	n.packageName === "vuex" && i.on.editInspectorState((e) => {
		i.sendInspectorState(e.inspectorId);
	}), r(i);
}
function qn(e, t) {
	M.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || (!V.highPerfModeEnabled || t?.inspectingComponent) && (M.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), Mn.forEach((t) => {
		Kn(t, e);
	}));
}
var Jn = "__VUE_DEVTOOLS_ROUTER__", W = "__VUE_DEVTOOLS_ROUTER_INFO__";
M[W] ??= {
	currentRoute: null,
	routes: []
}, M[Jn] ??= {}, new Proxy(M[W], { get(e, t) {
	return M[W][t];
} }), new Proxy(M[Jn], { get(e, t) {
	if (t === "value") return M[Jn];
} });
function Yn(e) {
	let t = /* @__PURE__ */ new Map();
	return (e?.getRoutes() || []).filter((e) => !t.has(e.path) && t.set(e.path, 1));
}
function Xn(e) {
	return e.map((e) => {
		let { path: t, name: n, children: r, meta: i } = e;
		return r?.length && (r = Xn(r)), {
			path: t,
			name: n,
			children: r,
			meta: i
		};
	});
}
function Zn(e) {
	if (e) {
		let { fullPath: t, hash: n, href: r, path: i, name: a, matched: o, params: s, query: c } = e;
		return {
			fullPath: t,
			hash: n,
			href: r,
			path: i,
			name: a,
			params: s,
			query: c,
			matched: Xn(o)
		};
	}
	return e;
}
function Qn(e, t) {
	function n() {
		let t = e.app?.config.globalProperties.$router, n = Zn(t?.currentRoute.value), r = Xn(Yn(t)), i = console.warn;
		console.warn = () => {}, M[W] = {
			currentRoute: n ? et(n) : {},
			routes: et(r)
		}, M[Jn] = t, console.warn = i;
	}
	n(), zn.on.componentUpdated(N(() => {
		t.value?.app === e.app && (n(), !V.highPerfModeEnabled && G.hooks.callHook(R.ROUTER_INFO_UPDATED, { state: M[W] }));
	}, 200));
}
function $n(e) {
	return {
		async getInspectorTree(t) {
			let n = {
				...t,
				app: B.value.app,
				rootNodes: []
			};
			return await new Promise((t) => {
				e.callHookWith(async (e) => {
					await Promise.all(e.map((e) => e(n))), t();
				}, I.GET_INSPECTOR_TREE);
			}), n.rootNodes;
		},
		async getInspectorState(t) {
			let n = {
				...t,
				app: B.value.app,
				state: null
			}, r = { currentTab: `custom-inspector:${t.inspectorId}` };
			return await new Promise((t) => {
				e.callHookWith(async (e) => {
					await Promise.all(e.map((e) => e(n, r))), t();
				}, I.GET_INSPECTOR_STATE);
			}), n.state;
		},
		editInspectorState(t) {
			let n = new pn(), r = {
				...t,
				app: B.value.app,
				set: (e, r = t.path, i = t.state.value, a) => {
					n.set(e, r, i, a || n.createDefaultSetCallback(t.state));
				}
			};
			e.callHookWith((e) => {
				e.forEach((e) => e(r));
			}, I.EDIT_INSPECTOR_STATE);
		},
		sendInspectorState(t) {
			let n = Cn(t);
			e.callHook(L.SEND_INSPECTOR_STATE, {
				inspectorId: t,
				plugin: {
					descriptor: n.descriptor,
					setupFn: () => ({})
				}
			});
		},
		inspectComponentInspector() {
			return nn();
		},
		cancelInspectComponentInspector() {
			return tn();
		},
		getComponentRenderCode(e) {
			let t = Dt(B.value, e);
			if (t) return typeof t?.type == "function" ? t.type.toString() : t.render.toString();
		},
		scrollToComponent(e) {
			return rn({ id: e });
		},
		openInEditor: jn,
		getVueInspector: sn,
		toggleApp(e, t) {
			let n = Dn.value.find((t) => t.id === e);
			n && (An(e), kn(n), Qn(n, B), bn(), qn(n.app, t));
		},
		inspectDOM(e) {
			let t = Dt(B.value, e);
			if (t) {
				let [e] = Pt(t);
				e && (M.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = e);
			}
		},
		updatePluginSettings(e, t, n) {
			Rn(e, t, n);
		},
		getPluginSettings(e) {
			return {
				options: Fn(e),
				values: In(e)
			};
		}
	};
}
M.__VUE_DEVTOOLS_ENV__ ??= { vitePluginDetected: !1 };
var er = wn();
M.__VUE_DEVTOOLS_KIT_CONTEXT__ ??= {
	hooks: er,
	get state() {
		return {
			...V,
			activeAppRecordId: B.id,
			activeAppRecord: B.value,
			appRecords: Dn.value
		};
	},
	api: $n(er)
};
var G = M.__VUE_DEVTOOLS_KIT_CONTEXT__, tr = _t(((e, t) => {
	(function(e) {
		var n = {
			À: "A",
			Á: "A",
			Â: "A",
			Ã: "A",
			Ä: "Ae",
			Å: "A",
			Æ: "AE",
			Ç: "C",
			È: "E",
			É: "E",
			Ê: "E",
			Ë: "E",
			Ì: "I",
			Í: "I",
			Î: "I",
			Ï: "I",
			Ð: "D",
			Ñ: "N",
			Ò: "O",
			Ó: "O",
			Ô: "O",
			Õ: "O",
			Ö: "Oe",
			Ő: "O",
			Ø: "O",
			Ù: "U",
			Ú: "U",
			Û: "U",
			Ü: "Ue",
			Ű: "U",
			Ý: "Y",
			Þ: "TH",
			ß: "ss",
			à: "a",
			á: "a",
			â: "a",
			ã: "a",
			ä: "ae",
			å: "a",
			æ: "ae",
			ç: "c",
			è: "e",
			é: "e",
			ê: "e",
			ë: "e",
			ì: "i",
			í: "i",
			î: "i",
			ï: "i",
			ð: "d",
			ñ: "n",
			ò: "o",
			ó: "o",
			ô: "o",
			õ: "o",
			ö: "oe",
			ő: "o",
			ø: "o",
			ù: "u",
			ú: "u",
			û: "u",
			ü: "ue",
			ű: "u",
			ý: "y",
			þ: "th",
			ÿ: "y",
			ẞ: "SS",
			ا: "a",
			أ: "a",
			إ: "i",
			آ: "aa",
			ؤ: "u",
			ئ: "e",
			ء: "a",
			ب: "b",
			ت: "t",
			ث: "th",
			ج: "j",
			ح: "h",
			خ: "kh",
			د: "d",
			ذ: "th",
			ر: "r",
			ز: "z",
			س: "s",
			ش: "sh",
			ص: "s",
			ض: "dh",
			ط: "t",
			ظ: "z",
			ع: "a",
			غ: "gh",
			ف: "f",
			ق: "q",
			ك: "k",
			ل: "l",
			م: "m",
			ن: "n",
			ه: "h",
			و: "w",
			ي: "y",
			ى: "a",
			ة: "h",
			ﻻ: "la",
			ﻷ: "laa",
			ﻹ: "lai",
			ﻵ: "laa",
			گ: "g",
			چ: "ch",
			پ: "p",
			ژ: "zh",
			ک: "k",
			ی: "y",
			"َ": "a",
			"ً": "an",
			"ِ": "e",
			"ٍ": "en",
			"ُ": "u",
			"ٌ": "on",
			"ْ": "",
			"٠": "0",
			"١": "1",
			"٢": "2",
			"٣": "3",
			"٤": "4",
			"٥": "5",
			"٦": "6",
			"٧": "7",
			"٨": "8",
			"٩": "9",
			"۰": "0",
			"۱": "1",
			"۲": "2",
			"۳": "3",
			"۴": "4",
			"۵": "5",
			"۶": "6",
			"۷": "7",
			"۸": "8",
			"۹": "9",
			က: "k",
			ခ: "kh",
			ဂ: "g",
			ဃ: "ga",
			င: "ng",
			စ: "s",
			ဆ: "sa",
			ဇ: "z",
			စျ: "za",
			ည: "ny",
			ဋ: "t",
			ဌ: "ta",
			ဍ: "d",
			ဎ: "da",
			ဏ: "na",
			တ: "t",
			ထ: "ta",
			ဒ: "d",
			ဓ: "da",
			န: "n",
			ပ: "p",
			ဖ: "pa",
			ဗ: "b",
			ဘ: "ba",
			မ: "m",
			ယ: "y",
			ရ: "ya",
			လ: "l",
			ဝ: "w",
			သ: "th",
			ဟ: "h",
			ဠ: "la",
			အ: "a",
			"ြ": "y",
			"ျ": "ya",
			"ွ": "w",
			"ြွ": "yw",
			"ျွ": "ywa",
			"ှ": "h",
			ဧ: "e",
			"၏": "-e",
			ဣ: "i",
			ဤ: "-i",
			ဉ: "u",
			ဦ: "-u",
			ဩ: "aw",
			သြော: "aw",
			ဪ: "aw",
			"၀": "0",
			"၁": "1",
			"၂": "2",
			"၃": "3",
			"၄": "4",
			"၅": "5",
			"၆": "6",
			"၇": "7",
			"၈": "8",
			"၉": "9",
			"္": "",
			"့": "",
			"း": "",
			č: "c",
			ď: "d",
			ě: "e",
			ň: "n",
			ř: "r",
			š: "s",
			ť: "t",
			ů: "u",
			ž: "z",
			Č: "C",
			Ď: "D",
			Ě: "E",
			Ň: "N",
			Ř: "R",
			Š: "S",
			Ť: "T",
			Ů: "U",
			Ž: "Z",
			ހ: "h",
			ށ: "sh",
			ނ: "n",
			ރ: "r",
			ބ: "b",
			ޅ: "lh",
			ކ: "k",
			އ: "a",
			ވ: "v",
			މ: "m",
			ފ: "f",
			ދ: "dh",
			ތ: "th",
			ލ: "l",
			ގ: "g",
			ޏ: "gn",
			ސ: "s",
			ޑ: "d",
			ޒ: "z",
			ޓ: "t",
			ޔ: "y",
			ޕ: "p",
			ޖ: "j",
			ޗ: "ch",
			ޘ: "tt",
			ޙ: "hh",
			ޚ: "kh",
			ޛ: "th",
			ޜ: "z",
			ޝ: "sh",
			ޞ: "s",
			ޟ: "d",
			ޠ: "t",
			ޡ: "z",
			ޢ: "a",
			ޣ: "gh",
			ޤ: "q",
			ޥ: "w",
			"ަ": "a",
			"ާ": "aa",
			"ި": "i",
			"ީ": "ee",
			"ު": "u",
			"ޫ": "oo",
			"ެ": "e",
			"ޭ": "ey",
			"ޮ": "o",
			"ޯ": "oa",
			"ް": "",
			ა: "a",
			ბ: "b",
			გ: "g",
			დ: "d",
			ე: "e",
			ვ: "v",
			ზ: "z",
			თ: "t",
			ი: "i",
			კ: "k",
			ლ: "l",
			მ: "m",
			ნ: "n",
			ო: "o",
			პ: "p",
			ჟ: "zh",
			რ: "r",
			ს: "s",
			ტ: "t",
			უ: "u",
			ფ: "p",
			ქ: "k",
			ღ: "gh",
			ყ: "q",
			შ: "sh",
			ჩ: "ch",
			ც: "ts",
			ძ: "dz",
			წ: "ts",
			ჭ: "ch",
			ხ: "kh",
			ჯ: "j",
			ჰ: "h",
			α: "a",
			β: "v",
			γ: "g",
			δ: "d",
			ε: "e",
			ζ: "z",
			η: "i",
			θ: "th",
			ι: "i",
			κ: "k",
			λ: "l",
			μ: "m",
			ν: "n",
			ξ: "ks",
			ο: "o",
			π: "p",
			ρ: "r",
			σ: "s",
			τ: "t",
			υ: "y",
			φ: "f",
			χ: "x",
			ψ: "ps",
			ω: "o",
			ά: "a",
			έ: "e",
			ί: "i",
			ό: "o",
			ύ: "y",
			ή: "i",
			ώ: "o",
			ς: "s",
			ϊ: "i",
			ΰ: "y",
			ϋ: "y",
			ΐ: "i",
			Α: "A",
			Β: "B",
			Γ: "G",
			Δ: "D",
			Ε: "E",
			Ζ: "Z",
			Η: "I",
			Θ: "TH",
			Ι: "I",
			Κ: "K",
			Λ: "L",
			Μ: "M",
			Ν: "N",
			Ξ: "KS",
			Ο: "O",
			Π: "P",
			Ρ: "R",
			Σ: "S",
			Τ: "T",
			Υ: "Y",
			Φ: "F",
			Χ: "X",
			Ψ: "PS",
			Ω: "O",
			Ά: "A",
			Έ: "E",
			Ί: "I",
			Ό: "O",
			Ύ: "Y",
			Ή: "I",
			Ώ: "O",
			Ϊ: "I",
			Ϋ: "Y",
			ā: "a",
			ē: "e",
			ģ: "g",
			ī: "i",
			ķ: "k",
			ļ: "l",
			ņ: "n",
			ū: "u",
			Ā: "A",
			Ē: "E",
			Ģ: "G",
			Ī: "I",
			Ķ: "k",
			Ļ: "L",
			Ņ: "N",
			Ū: "U",
			Ќ: "Kj",
			ќ: "kj",
			Љ: "Lj",
			љ: "lj",
			Њ: "Nj",
			њ: "nj",
			Тс: "Ts",
			тс: "ts",
			ą: "a",
			ć: "c",
			ę: "e",
			ł: "l",
			ń: "n",
			ś: "s",
			ź: "z",
			ż: "z",
			Ą: "A",
			Ć: "C",
			Ę: "E",
			Ł: "L",
			Ń: "N",
			Ś: "S",
			Ź: "Z",
			Ż: "Z",
			Є: "Ye",
			І: "I",
			Ї: "Yi",
			Ґ: "G",
			є: "ye",
			і: "i",
			ї: "yi",
			ґ: "g",
			ă: "a",
			Ă: "A",
			ș: "s",
			Ș: "S",
			ț: "t",
			Ț: "T",
			ţ: "t",
			Ţ: "T",
			а: "a",
			б: "b",
			в: "v",
			г: "g",
			д: "d",
			е: "e",
			ё: "yo",
			ж: "zh",
			з: "z",
			и: "i",
			й: "i",
			к: "k",
			л: "l",
			м: "m",
			н: "n",
			о: "o",
			п: "p",
			р: "r",
			с: "s",
			т: "t",
			у: "u",
			ф: "f",
			х: "kh",
			ц: "c",
			ч: "ch",
			ш: "sh",
			щ: "sh",
			ъ: "",
			ы: "y",
			ь: "",
			э: "e",
			ю: "yu",
			я: "ya",
			А: "A",
			Б: "B",
			В: "V",
			Г: "G",
			Д: "D",
			Е: "E",
			Ё: "Yo",
			Ж: "Zh",
			З: "Z",
			И: "I",
			Й: "I",
			К: "K",
			Л: "L",
			М: "M",
			Н: "N",
			О: "O",
			П: "P",
			Р: "R",
			С: "S",
			Т: "T",
			У: "U",
			Ф: "F",
			Х: "Kh",
			Ц: "C",
			Ч: "Ch",
			Ш: "Sh",
			Щ: "Sh",
			Ъ: "",
			Ы: "Y",
			Ь: "",
			Э: "E",
			Ю: "Yu",
			Я: "Ya",
			ђ: "dj",
			ј: "j",
			ћ: "c",
			џ: "dz",
			Ђ: "Dj",
			Ј: "j",
			Ћ: "C",
			Џ: "Dz",
			ľ: "l",
			ĺ: "l",
			ŕ: "r",
			Ľ: "L",
			Ĺ: "L",
			Ŕ: "R",
			ş: "s",
			Ş: "S",
			ı: "i",
			İ: "I",
			ğ: "g",
			Ğ: "G",
			ả: "a",
			Ả: "A",
			ẳ: "a",
			Ẳ: "A",
			ẩ: "a",
			Ẩ: "A",
			đ: "d",
			Đ: "D",
			ẹ: "e",
			Ẹ: "E",
			ẽ: "e",
			Ẽ: "E",
			ẻ: "e",
			Ẻ: "E",
			ế: "e",
			Ế: "E",
			ề: "e",
			Ề: "E",
			ệ: "e",
			Ệ: "E",
			ễ: "e",
			Ễ: "E",
			ể: "e",
			Ể: "E",
			ỏ: "o",
			ọ: "o",
			Ọ: "o",
			ố: "o",
			Ố: "O",
			ồ: "o",
			Ồ: "O",
			ổ: "o",
			Ổ: "O",
			ộ: "o",
			Ộ: "O",
			ỗ: "o",
			Ỗ: "O",
			ơ: "o",
			Ơ: "O",
			ớ: "o",
			Ớ: "O",
			ờ: "o",
			Ờ: "O",
			ợ: "o",
			Ợ: "O",
			ỡ: "o",
			Ỡ: "O",
			Ở: "o",
			ở: "o",
			ị: "i",
			Ị: "I",
			ĩ: "i",
			Ĩ: "I",
			ỉ: "i",
			Ỉ: "i",
			ủ: "u",
			Ủ: "U",
			ụ: "u",
			Ụ: "U",
			ũ: "u",
			Ũ: "U",
			ư: "u",
			Ư: "U",
			ứ: "u",
			Ứ: "U",
			ừ: "u",
			Ừ: "U",
			ự: "u",
			Ự: "U",
			ữ: "u",
			Ữ: "U",
			ử: "u",
			Ử: "ư",
			ỷ: "y",
			Ỷ: "y",
			ỳ: "y",
			Ỳ: "Y",
			ỵ: "y",
			Ỵ: "Y",
			ỹ: "y",
			Ỹ: "Y",
			ạ: "a",
			Ạ: "A",
			ấ: "a",
			Ấ: "A",
			ầ: "a",
			Ầ: "A",
			ậ: "a",
			Ậ: "A",
			ẫ: "a",
			Ẫ: "A",
			ắ: "a",
			Ắ: "A",
			ằ: "a",
			Ằ: "A",
			ặ: "a",
			Ặ: "A",
			ẵ: "a",
			Ẵ: "A",
			"⓪": "0",
			"①": "1",
			"②": "2",
			"③": "3",
			"④": "4",
			"⑤": "5",
			"⑥": "6",
			"⑦": "7",
			"⑧": "8",
			"⑨": "9",
			"⑩": "10",
			"⑪": "11",
			"⑫": "12",
			"⑬": "13",
			"⑭": "14",
			"⑮": "15",
			"⑯": "16",
			"⑰": "17",
			"⑱": "18",
			"⑲": "18",
			"⑳": "18",
			"⓵": "1",
			"⓶": "2",
			"⓷": "3",
			"⓸": "4",
			"⓹": "5",
			"⓺": "6",
			"⓻": "7",
			"⓼": "8",
			"⓽": "9",
			"⓾": "10",
			"⓿": "0",
			"⓫": "11",
			"⓬": "12",
			"⓭": "13",
			"⓮": "14",
			"⓯": "15",
			"⓰": "16",
			"⓱": "17",
			"⓲": "18",
			"⓳": "19",
			"⓴": "20",
			"Ⓐ": "A",
			"Ⓑ": "B",
			"Ⓒ": "C",
			"Ⓓ": "D",
			"Ⓔ": "E",
			"Ⓕ": "F",
			"Ⓖ": "G",
			"Ⓗ": "H",
			"Ⓘ": "I",
			"Ⓙ": "J",
			"Ⓚ": "K",
			"Ⓛ": "L",
			"Ⓜ": "M",
			"Ⓝ": "N",
			"Ⓞ": "O",
			"Ⓟ": "P",
			"Ⓠ": "Q",
			"Ⓡ": "R",
			"Ⓢ": "S",
			"Ⓣ": "T",
			"Ⓤ": "U",
			"Ⓥ": "V",
			"Ⓦ": "W",
			"Ⓧ": "X",
			"Ⓨ": "Y",
			"Ⓩ": "Z",
			"ⓐ": "a",
			"ⓑ": "b",
			"ⓒ": "c",
			"ⓓ": "d",
			"ⓔ": "e",
			"ⓕ": "f",
			"ⓖ": "g",
			"ⓗ": "h",
			"ⓘ": "i",
			"ⓙ": "j",
			"ⓚ": "k",
			"ⓛ": "l",
			"ⓜ": "m",
			"ⓝ": "n",
			"ⓞ": "o",
			"ⓟ": "p",
			"ⓠ": "q",
			"ⓡ": "r",
			"ⓢ": "s",
			"ⓣ": "t",
			"ⓤ": "u",
			"ⓦ": "v",
			"ⓥ": "w",
			"ⓧ": "x",
			"ⓨ": "y",
			"ⓩ": "z",
			"“": "\"",
			"”": "\"",
			"‘": "'",
			"’": "'",
			"∂": "d",
			ƒ: "f",
			"™": "(TM)",
			"©": "(C)",
			œ: "oe",
			Œ: "OE",
			"®": "(R)",
			"†": "+",
			"℠": "(SM)",
			"…": "...",
			"˚": "o",
			º: "o",
			ª: "a",
			"•": "*",
			"၊": ",",
			"။": ".",
			$: "USD",
			"€": "EUR",
			"₢": "BRN",
			"₣": "FRF",
			"£": "GBP",
			"₤": "ITL",
			"₦": "NGN",
			"₧": "ESP",
			"₩": "KRW",
			"₪": "ILS",
			"₫": "VND",
			"₭": "LAK",
			"₮": "MNT",
			"₯": "GRD",
			"₱": "ARS",
			"₲": "PYG",
			"₳": "ARA",
			"₴": "UAH",
			"₵": "GHS",
			"¢": "cent",
			"¥": "CNY",
			元: "CNY",
			円: "YEN",
			"﷼": "IRR",
			"₠": "EWE",
			"฿": "THB",
			"₨": "INR",
			"₹": "INR",
			"₰": "PF",
			"₺": "TRY",
			"؋": "AFN",
			"₼": "AZN",
			лв: "BGN",
			"៛": "KHR",
			"₡": "CRC",
			"₸": "KZT",
			ден: "MKD",
			zł: "PLN",
			"₽": "RUB",
			"₾": "GEL"
		}, r = ["်", "ް"], i = {
			"ာ": "a",
			"ါ": "a",
			"ေ": "e",
			"ဲ": "e",
			"ိ": "i",
			"ီ": "i",
			"ို": "o",
			"ု": "u",
			"ူ": "u",
			"ေါင်": "aung",
			"ော": "aw",
			"ော်": "aw",
			"ေါ": "aw",
			"ေါ်": "aw",
			"်": "်",
			က်: "et",
			"ိုက်": "aik",
			"ောက်": "auk",
			င်: "in",
			"ိုင်": "aing",
			"ောင်": "aung",
			စ်: "it",
			ည်: "i",
			တ်: "at",
			"ိတ်": "eik",
			"ုတ်": "ok",
			"ွတ်": "ut",
			"ေတ်": "it",
			ဒ်: "d",
			"ိုဒ်": "ok",
			"ုဒ်": "ait",
			န်: "an",
			"ာန်": "an",
			"ိန်": "ein",
			"ုန်": "on",
			"ွန်": "un",
			ပ်: "at",
			"ိပ်": "eik",
			"ုပ်": "ok",
			"ွပ်": "ut",
			န်ုပ်: "nub",
			မ်: "an",
			"ိမ်": "ein",
			"ုမ်": "on",
			"ွမ်": "un",
			ယ်: "e",
			"ိုလ်": "ol",
			ဉ်: "in",
			"ံ": "an",
			"ိံ": "ein",
			"ုံ": "on",
			"ައް": "ah",
			"ަށް": "ah"
		}, a = {
			en: {},
			az: {
				ç: "c",
				ə: "e",
				ğ: "g",
				ı: "i",
				ö: "o",
				ş: "s",
				ü: "u",
				Ç: "C",
				Ə: "E",
				Ğ: "G",
				İ: "I",
				Ö: "O",
				Ş: "S",
				Ü: "U"
			},
			cs: {
				č: "c",
				ď: "d",
				ě: "e",
				ň: "n",
				ř: "r",
				š: "s",
				ť: "t",
				ů: "u",
				ž: "z",
				Č: "C",
				Ď: "D",
				Ě: "E",
				Ň: "N",
				Ř: "R",
				Š: "S",
				Ť: "T",
				Ů: "U",
				Ž: "Z"
			},
			fi: {
				ä: "a",
				Ä: "A",
				ö: "o",
				Ö: "O"
			},
			hu: {
				ä: "a",
				Ä: "A",
				ö: "o",
				Ö: "O",
				ü: "u",
				Ü: "U",
				ű: "u",
				Ű: "U"
			},
			lt: {
				ą: "a",
				č: "c",
				ę: "e",
				ė: "e",
				į: "i",
				š: "s",
				ų: "u",
				ū: "u",
				ž: "z",
				Ą: "A",
				Č: "C",
				Ę: "E",
				Ė: "E",
				Į: "I",
				Š: "S",
				Ų: "U",
				Ū: "U"
			},
			lv: {
				ā: "a",
				č: "c",
				ē: "e",
				ģ: "g",
				ī: "i",
				ķ: "k",
				ļ: "l",
				ņ: "n",
				š: "s",
				ū: "u",
				ž: "z",
				Ā: "A",
				Č: "C",
				Ē: "E",
				Ģ: "G",
				Ī: "i",
				Ķ: "k",
				Ļ: "L",
				Ņ: "N",
				Š: "S",
				Ū: "u",
				Ž: "Z"
			},
			pl: {
				ą: "a",
				ć: "c",
				ę: "e",
				ł: "l",
				ń: "n",
				ó: "o",
				ś: "s",
				ź: "z",
				ż: "z",
				Ą: "A",
				Ć: "C",
				Ę: "e",
				Ł: "L",
				Ń: "N",
				Ó: "O",
				Ś: "S",
				Ź: "Z",
				Ż: "Z"
			},
			sv: {
				ä: "a",
				Ä: "A",
				ö: "o",
				Ö: "O"
			},
			sk: {
				ä: "a",
				Ä: "A"
			},
			sr: {
				љ: "lj",
				њ: "nj",
				Љ: "Lj",
				Њ: "Nj",
				đ: "dj",
				Đ: "Dj"
			},
			tr: {
				Ü: "U",
				Ö: "O",
				ü: "u",
				ö: "o"
			}
		}, o = {
			ar: {
				"∆": "delta",
				"∞": "la-nihaya",
				"♥": "hob",
				"&": "wa",
				"|": "aw",
				"<": "aqal-men",
				">": "akbar-men",
				"∑": "majmou",
				"¤": "omla"
			},
			az: {},
			ca: {
				"∆": "delta",
				"∞": "infinit",
				"♥": "amor",
				"&": "i",
				"|": "o",
				"<": "menys que",
				">": "mes que",
				"∑": "suma dels",
				"¤": "moneda"
			},
			cs: {
				"∆": "delta",
				"∞": "nekonecno",
				"♥": "laska",
				"&": "a",
				"|": "nebo",
				"<": "mensi nez",
				">": "vetsi nez",
				"∑": "soucet",
				"¤": "mena"
			},
			de: {
				"∆": "delta",
				"∞": "unendlich",
				"♥": "Liebe",
				"&": "und",
				"|": "oder",
				"<": "kleiner als",
				">": "groesser als",
				"∑": "Summe von",
				"¤": "Waehrung"
			},
			dv: {
				"∆": "delta",
				"∞": "kolunulaa",
				"♥": "loabi",
				"&": "aai",
				"|": "noonee",
				"<": "ah vure kuda",
				">": "ah vure bodu",
				"∑": "jumula",
				"¤": "faisaa"
			},
			en: {
				"∆": "delta",
				"∞": "infinity",
				"♥": "love",
				"&": "and",
				"|": "or",
				"<": "less than",
				">": "greater than",
				"∑": "sum",
				"¤": "currency"
			},
			es: {
				"∆": "delta",
				"∞": "infinito",
				"♥": "amor",
				"&": "y",
				"|": "u",
				"<": "menos que",
				">": "mas que",
				"∑": "suma de los",
				"¤": "moneda"
			},
			fa: {
				"∆": "delta",
				"∞": "bi-nahayat",
				"♥": "eshgh",
				"&": "va",
				"|": "ya",
				"<": "kamtar-az",
				">": "bishtar-az",
				"∑": "majmooe",
				"¤": "vahed"
			},
			fi: {
				"∆": "delta",
				"∞": "aarettomyys",
				"♥": "rakkaus",
				"&": "ja",
				"|": "tai",
				"<": "pienempi kuin",
				">": "suurempi kuin",
				"∑": "summa",
				"¤": "valuutta"
			},
			fr: {
				"∆": "delta",
				"∞": "infiniment",
				"♥": "Amour",
				"&": "et",
				"|": "ou",
				"<": "moins que",
				">": "superieure a",
				"∑": "somme des",
				"¤": "monnaie"
			},
			ge: {
				"∆": "delta",
				"∞": "usasruloba",
				"♥": "siqvaruli",
				"&": "da",
				"|": "an",
				"<": "naklebi",
				">": "meti",
				"∑": "jami",
				"¤": "valuta"
			},
			gr: {},
			hu: {
				"∆": "delta",
				"∞": "vegtelen",
				"♥": "szerelem",
				"&": "es",
				"|": "vagy",
				"<": "kisebb mint",
				">": "nagyobb mint",
				"∑": "szumma",
				"¤": "penznem"
			},
			it: {
				"∆": "delta",
				"∞": "infinito",
				"♥": "amore",
				"&": "e",
				"|": "o",
				"<": "minore di",
				">": "maggiore di",
				"∑": "somma",
				"¤": "moneta"
			},
			lt: {
				"∆": "delta",
				"∞": "begalybe",
				"♥": "meile",
				"&": "ir",
				"|": "ar",
				"<": "maziau nei",
				">": "daugiau nei",
				"∑": "suma",
				"¤": "valiuta"
			},
			lv: {
				"∆": "delta",
				"∞": "bezgaliba",
				"♥": "milestiba",
				"&": "un",
				"|": "vai",
				"<": "mazak neka",
				">": "lielaks neka",
				"∑": "summa",
				"¤": "valuta"
			},
			my: {
				"∆": "kwahkhyaet",
				"∞": "asaonasme",
				"♥": "akhyait",
				"&": "nhin",
				"|": "tho",
				"<": "ngethaw",
				">": "kyithaw",
				"∑": "paungld",
				"¤": "ngwekye"
			},
			mk: {},
			nl: {
				"∆": "delta",
				"∞": "oneindig",
				"♥": "liefde",
				"&": "en",
				"|": "of",
				"<": "kleiner dan",
				">": "groter dan",
				"∑": "som",
				"¤": "valuta"
			},
			pl: {
				"∆": "delta",
				"∞": "nieskonczonosc",
				"♥": "milosc",
				"&": "i",
				"|": "lub",
				"<": "mniejsze niz",
				">": "wieksze niz",
				"∑": "suma",
				"¤": "waluta"
			},
			pt: {
				"∆": "delta",
				"∞": "infinito",
				"♥": "amor",
				"&": "e",
				"|": "ou",
				"<": "menor que",
				">": "maior que",
				"∑": "soma",
				"¤": "moeda"
			},
			ro: {
				"∆": "delta",
				"∞": "infinit",
				"♥": "dragoste",
				"&": "si",
				"|": "sau",
				"<": "mai mic ca",
				">": "mai mare ca",
				"∑": "suma",
				"¤": "valuta"
			},
			ru: {
				"∆": "delta",
				"∞": "beskonechno",
				"♥": "lubov",
				"&": "i",
				"|": "ili",
				"<": "menshe",
				">": "bolshe",
				"∑": "summa",
				"¤": "valjuta"
			},
			sk: {
				"∆": "delta",
				"∞": "nekonecno",
				"♥": "laska",
				"&": "a",
				"|": "alebo",
				"<": "menej ako",
				">": "viac ako",
				"∑": "sucet",
				"¤": "mena"
			},
			sr: {},
			tr: {
				"∆": "delta",
				"∞": "sonsuzluk",
				"♥": "ask",
				"&": "ve",
				"|": "veya",
				"<": "kucuktur",
				">": "buyuktur",
				"∑": "toplam",
				"¤": "para birimi"
			},
			uk: {
				"∆": "delta",
				"∞": "bezkinechnist",
				"♥": "lubov",
				"&": "i",
				"|": "abo",
				"<": "menshe",
				">": "bilshe",
				"∑": "suma",
				"¤": "valjuta"
			},
			vn: {
				"∆": "delta",
				"∞": "vo cuc",
				"♥": "yeu",
				"&": "va",
				"|": "hoac",
				"<": "nho hon",
				">": "lon hon",
				"∑": "tong",
				"¤": "tien te"
			}
		}, s = [
			";",
			"?",
			":",
			"@",
			"&",
			"=",
			"+",
			"$",
			",",
			"/"
		].join(""), c = [
			";",
			"?",
			":",
			"@",
			"&",
			"=",
			"+",
			"$",
			","
		].join(""), l = [
			".",
			"!",
			"~",
			"*",
			"'",
			"(",
			")"
		].join(""), u = function(e, t) {
			var u = "-", d = "", p = "", m = !0, h = {}, g, _, v, te, ne, re, y, b, ie, x, S, C, w, T, E = "";
			if (typeof e != "string") return "";
			if (typeof t == "string" && (u = t), y = o.en, b = a.en, typeof t == "object") for (S in g = t.maintainCase || !1, h = t.custom && typeof t.custom == "object" ? t.custom : h, v = +t.truncate > 1 && t.truncate || !1, te = t.uric || !1, ne = t.uricNoSlash || !1, re = t.mark || !1, m = t.symbols !== !1 && t.lang !== !1, u = t.separator || u, te && (E += s), ne && (E += c), re && (E += l), y = t.lang && o[t.lang] && m ? o[t.lang] : m ? o.en : {}, b = t.lang && a[t.lang] ? a[t.lang] : t.lang === !1 || t.lang === !0 ? {} : a.en, t.titleCase && typeof t.titleCase.length == "number" && Array.prototype.toString.call(t.titleCase) ? (t.titleCase.forEach(function(e) {
				h[e + ""] = e + "";
			}), _ = !0) : _ = !!t.titleCase, t.custom && typeof t.custom.length == "number" && Array.prototype.toString.call(t.custom) && t.custom.forEach(function(e) {
				h[e + ""] = e + "";
			}), Object.keys(h).forEach(function(t) {
				var n = t.length > 1 ? RegExp("\\b" + f(t) + "\\b", "gi") : new RegExp(f(t), "gi");
				e = e.replace(n, h[t]);
			}), h) E += S;
			for (E += u, E = f(E), e = e.replace(/(^\s+|\s+$)/g, ""), w = !1, T = !1, x = 0, C = e.length; x < C; x++) S = e[x], ee(S, h) ? w = !1 : b[S] ? (S = w && b[S].match(/[A-Za-z0-9]/) ? " " + b[S] : b[S], w = !1) : S in n ? (x + 1 < C && r.indexOf(e[x + 1]) >= 0 ? (p += S, S = "") : T === !0 ? (S = i[p] + n[S], p = "") : S = w && n[S].match(/[A-Za-z0-9]/) ? " " + n[S] : n[S], w = !1, T = !1) : S in i ? (p += S, S = "", x === C - 1 && (S = i[p]), T = !0) : y[S] && !(te && s.indexOf(S) !== -1) && !(ne && c.indexOf(S) !== -1) ? (S = w || d.substr(-1).match(/[A-Za-z0-9]/) ? u + y[S] : y[S], S += e[x + 1] !== void 0 && e[x + 1].match(/[A-Za-z0-9]/) ? u : "", w = !0) : (T === !0 ? (S = i[p] + S, p = "", T = !1) : w && (/[A-Za-z0-9]/.test(S) || d.substr(-1).match(/A-Za-z0-9]/)) && (S = " " + S), w = !1), d += S.replace(RegExp("[^\\w\\s" + E + "_-]", "g"), u);
			return _ && (d = d.replace(/(\w)(\S*)/g, function(e, t, n) {
				var r = t.toUpperCase() + (n === null ? "" : n);
				return Object.keys(h).indexOf(r.toLowerCase()) < 0 ? r : r.toLowerCase();
			})), d = d.replace(/\s+/g, u).replace(RegExp("\\" + u + "+", "g"), u).replace(RegExp("(^\\" + u + "+|\\" + u + "+$)", "g"), ""), v && d.length > v && (ie = d.charAt(v) === u, d = d.slice(0, v), ie || (d = d.slice(0, d.lastIndexOf(u)))), !g && !_ && (d = d.toLowerCase()), d;
		}, d = function(e) {
			return function(t) {
				return u(t, e);
			};
		}, f = function(e) {
			return e.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
		}, ee = function(e, t) {
			for (var n in t) if (t[n] === e) return !0;
		};
		if (t !== void 0 && t.exports) t.exports = u, t.exports.createSlug = d;
		else if (typeof define < "u" && define.amd) define([], function() {
			return u;
		});
		else try {
			if (e.getSlug || e.createSlug) throw "speakingurl: globals exists /(getSlug|createSlug)/";
			e.getSlug = u, e.createSlug = d;
		} catch {}
	})(e);
}));
yt(_t(((e, t) => {
	t.exports = tr();
}))(), 1), M.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ ??= {
	id: 0,
	appIds: /* @__PURE__ */ new Set()
};
function nr(e) {
	V.highPerfModeEnabled = e ?? !V.highPerfModeEnabled, !e && B.value && qn(B.value.app);
}
function rr(e) {
	V.devtoolsClientDetected = {
		...V.devtoolsClientDetected,
		...e
	}, nr(!Object.values(V.devtoolsClientDetected).some(Boolean));
}
M.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ ??= rr;
var ir = class {
	constructor() {
		this.keyToValue = /* @__PURE__ */ new Map(), this.valueToKey = /* @__PURE__ */ new Map();
	}
	set(e, t) {
		this.keyToValue.set(e, t), this.valueToKey.set(t, e);
	}
	getByKey(e) {
		return this.keyToValue.get(e);
	}
	getByValue(e) {
		return this.valueToKey.get(e);
	}
	clear() {
		this.keyToValue.clear(), this.valueToKey.clear();
	}
}, ar = class {
	constructor(e) {
		this.generateIdentifier = e, this.kv = new ir();
	}
	register(e, t) {
		this.kv.getByValue(e) || (t ||= this.generateIdentifier(e), this.kv.set(t, e));
	}
	clear() {
		this.kv.clear();
	}
	getIdentifier(e) {
		return this.kv.getByValue(e);
	}
	getValue(e) {
		return this.kv.getByKey(e);
	}
}, or = class extends ar {
	constructor() {
		super((e) => e.name), this.classToAllowedProps = /* @__PURE__ */ new Map();
	}
	register(e, t) {
		typeof t == "object" ? (t.allowProps && this.classToAllowedProps.set(e, t.allowProps), super.register(e, t.identifier)) : super.register(e, t);
	}
	getAllowedProps(e) {
		return this.classToAllowedProps.get(e);
	}
};
function sr(e) {
	if ("values" in Object) return Object.values(e);
	let t = [];
	for (let n in e) e.hasOwnProperty(n) && t.push(e[n]);
	return t;
}
function cr(e, t) {
	let n = sr(e);
	if ("find" in n) return n.find(t);
	let r = n;
	for (let e = 0; e < r.length; e++) {
		let n = r[e];
		if (t(n)) return n;
	}
}
function K(e, t) {
	Object.entries(e).forEach(([e, n]) => t(n, e));
}
function lr(e, t) {
	return e.indexOf(t) !== -1;
}
function ur(e, t) {
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (t(r)) return r;
	}
}
var dr = class {
	constructor() {
		this.transfomers = {};
	}
	register(e) {
		this.transfomers[e.name] = e;
	}
	findApplicable(e) {
		return cr(this.transfomers, (t) => t.isApplicable(e));
	}
	findByName(e) {
		return this.transfomers[e];
	}
}, fr = (e) => Object.prototype.toString.call(e).slice(8, -1), pr = (e) => e === void 0, mr = (e) => e === null, q = (e) => typeof e != "object" || !e || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null || Object.getPrototypeOf(e) === Object.prototype, hr = (e) => q(e) && Object.keys(e).length === 0, J = (e) => Array.isArray(e), gr = (e) => typeof e == "string", _r = (e) => typeof e == "number" && !isNaN(e), vr = (e) => typeof e == "boolean", yr = (e) => e instanceof RegExp, br = (e) => e instanceof Map, xr = (e) => e instanceof Set, Sr = (e) => fr(e) === "Symbol", Cr = (e) => e instanceof Date && !isNaN(e.valueOf()), wr = (e) => e instanceof Error, Tr = (e) => typeof e == "number" && isNaN(e), Er = (e) => vr(e) || mr(e) || pr(e) || _r(e) || gr(e) || Sr(e), Dr = (e) => typeof e == "bigint", Or = (e) => e === Infinity || e === -Infinity, kr = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), Ar = (e) => e instanceof URL, jr = (e) => e.replace(/\./g, "\\."), Mr = (e) => e.map(String).map(jr).join("."), Nr = (e) => {
	let t = [], n = "";
	for (let r = 0; r < e.length; r++) {
		let i = e.charAt(r);
		if (i === "\\" && e.charAt(r + 1) === ".") {
			n += ".", r++;
			continue;
		}
		if (i === ".") {
			t.push(n), n = "";
			continue;
		}
		n += i;
	}
	let r = n;
	return t.push(r), t;
};
function Y(e, t, n, r) {
	return {
		isApplicable: e,
		annotation: t,
		transform: n,
		untransform: r
	};
}
var Pr = [
	Y(pr, "undefined", () => null, () => void 0),
	Y(Dr, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
	Y(Cr, "Date", (e) => e.toISOString(), (e) => new Date(e)),
	Y(wr, "Error", (e, t) => {
		let n = {
			name: e.name,
			message: e.message
		};
		return t.allowedErrorProps.forEach((t) => {
			n[t] = e[t];
		}), n;
	}, (e, t) => {
		let n = Error(e.message);
		return n.name = e.name, n.stack = e.stack, t.allowedErrorProps.forEach((t) => {
			n[t] = e[t];
		}), n;
	}),
	Y(yr, "regexp", (e) => "" + e, (e) => {
		let t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
		return new RegExp(t, n);
	}),
	Y(xr, "set", (e) => [...e.values()], (e) => new Set(e)),
	Y(br, "map", (e) => [...e.entries()], (e) => new Map(e)),
	Y((e) => Tr(e) || Or(e), "number", (e) => Tr(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
	Y((e) => e === 0 && 1 / e == -Infinity, "number", () => "-0", Number),
	Y(Ar, "URL", (e) => e.toString(), (e) => new URL(e))
];
function Fr(e, t, n, r) {
	return {
		isApplicable: e,
		annotation: t,
		transform: n,
		untransform: r
	};
}
var Ir = Fr((e, t) => Sr(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
	let r = n.symbolRegistry.getValue(t[1]);
	if (!r) throw Error("Trying to deserialize unknown symbol");
	return r;
}), Lr = [
	Int8Array,
	Uint8Array,
	Int16Array,
	Uint16Array,
	Int32Array,
	Uint32Array,
	Float32Array,
	Float64Array,
	Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {}), Rr = Fr(kr, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
	let n = Lr[t[1]];
	if (!n) throw Error("Trying to deserialize unknown typed array");
	return new n(e);
});
function zr(e, t) {
	return e?.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
var Br = Fr(zr, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
	let n = t.classRegistry.getAllowedProps(e.constructor);
	if (!n) return { ...e };
	let r = {};
	return n.forEach((t) => {
		r[t] = e[t];
	}), r;
}, (e, t, n) => {
	let r = n.classRegistry.getValue(t[1]);
	if (!r) throw Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
	return Object.assign(Object.create(r.prototype), e);
}), Vr = Fr((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
	let r = n.customTransformerRegistry.findByName(t[1]);
	if (!r) throw Error("Trying to deserialize unknown custom value");
	return r.deserialize(e);
}), Hr = [
	Br,
	Ir,
	Vr,
	Rr
], Ur = (e, t) => {
	let n = ur(Hr, (n) => n.isApplicable(e, t));
	if (n) return {
		value: n.transform(e, t),
		type: n.annotation(e, t)
	};
	let r = ur(Pr, (n) => n.isApplicable(e, t));
	if (r) return {
		value: r.transform(e, t),
		type: r.annotation
	};
}, Wr = {};
Pr.forEach((e) => {
	Wr[e.annotation] = e;
});
var Gr = (e, t, n) => {
	if (J(t)) switch (t[0]) {
		case "symbol": return Ir.untransform(e, t, n);
		case "class": return Br.untransform(e, t, n);
		case "custom": return Vr.untransform(e, t, n);
		case "typed-array": return Rr.untransform(e, t, n);
		default: throw Error("Unknown transformation: " + t);
	}
	else {
		let r = Wr[t];
		if (!r) throw Error("Unknown transformation: " + t);
		return r.untransform(e, n);
	}
}, X = (e, t) => {
	if (t > e.size) throw Error("index out of bounds");
	let n = e.keys();
	for (; t > 0;) n.next(), t--;
	return n.next().value;
};
function Kr(e) {
	if (lr(e, "__proto__")) throw Error("__proto__ is not allowed as a property");
	if (lr(e, "prototype")) throw Error("prototype is not allowed as a property");
	if (lr(e, "constructor")) throw Error("constructor is not allowed as a property");
}
var qr = (e, t) => {
	Kr(t);
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (xr(e)) e = X(e, +r);
		else if (br(e)) {
			let i = +r, a = +t[++n] == 0 ? "key" : "value", o = X(e, i);
			switch (a) {
				case "key":
					e = o;
					break;
				case "value": e = e.get(o);
			}
		} else e = e[r];
	}
	return e;
}, Jr = (e, t, n) => {
	if (Kr(t), t.length === 0) return n(e);
	let r = e;
	for (let e = 0; e < t.length - 1; e++) {
		let n = t[e];
		if (J(r)) {
			let e = +n;
			r = r[e];
		} else if (q(r)) r = r[n];
		else if (xr(r)) {
			let e = +n;
			r = X(r, e);
		} else if (br(r)) {
			if (e === t.length - 2) break;
			let i = +n, a = +t[++e] == 0 ? "key" : "value", o = X(r, i);
			switch (a) {
				case "key":
					r = o;
					break;
				case "value": r = r.get(o);
			}
		}
	}
	let i = t[t.length - 1];
	if (J(r) ? r[+i] = n(r[+i]) : q(r) && (r[i] = n(r[i])), xr(r)) {
		let e = X(r, +i), t = n(e);
		e !== t && (r.delete(e), r.add(t));
	}
	if (br(r)) {
		let e = +t[t.length - 2], a = X(r, e);
		switch (+i == 0 ? "key" : "value") {
			case "key": {
				let e = n(a);
				r.set(e, r.get(a)), e !== a && r.delete(a);
				break;
			}
			case "value": r.set(a, n(r.get(a)));
		}
	}
	return e;
};
function Yr(e, t, n = []) {
	if (!e) return;
	if (!J(e)) {
		K(e, (e, r) => Yr(e, t, [...n, ...Nr(r)]));
		return;
	}
	let [r, i] = e;
	i && K(i, (e, r) => {
		Yr(e, t, [...n, ...Nr(r)]);
	}), t(r, n);
}
function Xr(e, t, n) {
	return Yr(t, (t, r) => {
		e = Jr(e, r, (e) => Gr(e, t, n));
	}), e;
}
function Zr(e, t) {
	function n(t, n) {
		let r = qr(e, Nr(n));
		t.map(Nr).forEach((t) => {
			e = Jr(e, t, () => r);
		});
	}
	if (J(t)) {
		let [r, i] = t;
		r.forEach((t) => {
			e = Jr(e, Nr(t), () => e);
		}), i && K(i, n);
	} else K(t, n);
	return e;
}
var Qr = (e, t) => q(e) || J(e) || br(e) || xr(e) || zr(e, t);
function $r(e, t, n) {
	let r = n.get(e);
	r ? r.push(t) : n.set(e, [t]);
}
function ei(e, t) {
	let n = {}, r;
	return e.forEach((e) => {
		if (e.length <= 1) return;
		t || (e = e.map((e) => e.map(String)).sort((e, t) => e.length - t.length));
		let [i, ...a] = e;
		i.length === 0 ? r = a.map(Mr) : n[Mr(i)] = a.map(Mr);
	}), r ? hr(n) ? [r] : [r, n] : hr(n) ? void 0 : n;
}
var ti = (e, t, n, r, i = [], a = [], o = /* @__PURE__ */ new Map()) => {
	let s = Er(e);
	if (!s) {
		$r(e, i, t);
		let n = o.get(e);
		if (n) return r ? { transformedValue: null } : n;
	}
	if (!Qr(e, n)) {
		let t = Ur(e, n), r = t ? {
			transformedValue: t.value,
			annotations: [t.type]
		} : { transformedValue: e };
		return s || o.set(e, r), r;
	}
	if (lr(a, e)) return { transformedValue: null };
	let c = Ur(e, n), l = c?.value ?? e, u = J(l) ? [] : {}, d = {};
	K(l, (s, c) => {
		if (c === "__proto__" || c === "constructor" || c === "prototype") throw Error(`Detected property ${c}. This is a prototype pollution risk, please remove it from your object.`);
		let l = ti(s, t, n, r, [...i, c], [...a, e], o);
		u[c] = l.transformedValue, J(l.annotations) ? d[c] = l.annotations : q(l.annotations) && K(l.annotations, (e, t) => {
			d[jr(c) + "." + t] = e;
		});
	});
	let f = hr(d) ? {
		transformedValue: u,
		annotations: c ? [c.type] : void 0
	} : {
		transformedValue: u,
		annotations: c ? [c.type, d] : d
	};
	return s || o.set(e, f), f;
};
function ni(e) {
	return Object.prototype.toString.call(e).slice(8, -1);
}
function ri(e) {
	return ni(e) === "Array";
}
function ii(e) {
	if (ni(e) !== "Object") return !1;
	let t = Object.getPrototypeOf(e);
	return !!t && t.constructor === Object && t === Object.prototype;
}
function ai(e, t, n, r, i) {
	let a = {}.propertyIsEnumerable.call(r, t) ? "enumerable" : "nonenumerable";
	a === "enumerable" && (e[t] = n), i && a === "nonenumerable" && Object.defineProperty(e, t, {
		value: n,
		enumerable: !1,
		writable: !0,
		configurable: !0
	});
}
function oi(e, t = {}) {
	if (ri(e)) return e.map((e) => oi(e, t));
	if (!ii(e)) return e;
	let n = Object.getOwnPropertyNames(e), r = Object.getOwnPropertySymbols(e);
	return [...n, ...r].reduce((n, r) => {
		if (ri(t.props) && !t.props.includes(r)) return n;
		let i = e[r];
		return ai(n, r, oi(i, t), e, t.nonenumerable), n;
	}, {});
}
var Z = class {
	constructor({ dedupe: e = !1 } = {}) {
		this.classRegistry = new or(), this.symbolRegistry = new ar((e) => e.description ?? ""), this.customTransformerRegistry = new dr(), this.allowedErrorProps = [], this.dedupe = e;
	}
	serialize(e) {
		let t = /* @__PURE__ */ new Map(), n = ti(e, t, this, this.dedupe), r = { json: n.transformedValue };
		n.annotations && (r.meta = {
			...r.meta,
			values: n.annotations
		});
		let i = ei(t, this.dedupe);
		return i && (r.meta = {
			...r.meta,
			referentialEqualities: i
		}), r;
	}
	deserialize(e) {
		let { json: t, meta: n } = e, r = oi(t);
		return n?.values && (r = Xr(r, n.values, this)), n?.referentialEqualities && (r = Zr(r, n.referentialEqualities)), r;
	}
	stringify(e) {
		return JSON.stringify(this.serialize(e));
	}
	parse(e) {
		return this.deserialize(JSON.parse(e));
	}
	registerClass(e, t) {
		this.classRegistry.register(e, t);
	}
	registerSymbol(e, t) {
		this.symbolRegistry.register(e, t);
	}
	registerCustom(e, t) {
		this.customTransformerRegistry.register({
			name: t,
			...e
		});
	}
	allowErrorProps(...e) {
		this.allowedErrorProps.push(...e);
	}
};
Z.defaultInstance = new Z(), Z.serialize = Z.defaultInstance.serialize.bind(Z.defaultInstance), Z.deserialize = Z.defaultInstance.deserialize.bind(Z.defaultInstance), Z.stringify = Z.defaultInstance.stringify.bind(Z.defaultInstance), Z.parse = Z.defaultInstance.parse.bind(Z.defaultInstance), Z.registerClass = Z.defaultInstance.registerClass.bind(Z.defaultInstance), Z.registerSymbol = Z.defaultInstance.registerSymbol.bind(Z.defaultInstance), Z.registerCustom = Z.defaultInstance.registerCustom.bind(Z.defaultInstance), Z.allowErrorProps = Z.defaultInstance.allowErrorProps.bind(Z.defaultInstance), Z.serialize, Z.deserialize, Z.stringify, Z.parse, Z.registerClass, Z.registerCustom, Z.registerSymbol, Z.allowErrorProps, M.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ ??= [], M.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ ??= null, M.__VUE_DEVTOOLS_KIT_RPC_SERVER__ ??= null, M.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ ??= null, M.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ ??= null, M.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ ??= null;
var si = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", ci = "âḃćḋèḟĝḫíĵǩĺṁńŏṗɋŕśṭůṿẘẋẏẓḀḂḈḊḔḞḠḢḬĴḴĻḾŊÕṔɊŔṠṮŨṼẄẌŸƵ";
function li(e, t) {
	let n = "";
	for (let r = 0; r < e.length * t.expand; r++) {
		let i = e[Math.floor(r / t.expand)], a = t.accents ? ci[si.indexOf(i)] ?? i : i;
		n += a;
	}
	return t.prefix + n + t.suffix;
}
function ui(e, t, n) {
	let r, i = /* @__PURE__ */ new Map(), a = t.warnMissing;
	t.warnMissing = (e) => {
		let t = (0, x.getCurrentInstance)();
		a(e), t && (i.set(t, i.get(t) ?? /* @__PURE__ */ new Set()), i.get(t).add(e));
	};
	let o = /* @__PURE__ */ new WeakSet();
	(0, x.watchEffect)(() => {
		let e = n.bundles;
		for (let t of e) {
			if (o.has(t)) continue;
			let e = t._transform;
			t._transform = (t) => (e != null && (t = e(t)), r != null && (t = r(t)), t), o.add(t);
		}
	}, { flush: "sync" });
	let s = (0, x.computed)(() => [...n.bundles].map((e) => {
		let t = new De(e.locales, {
			functions: e._functions,
			useIsolating: e._useIsolating
		});
		return t._terms = e._terms, t._messages = e._messages, t;
	}));
	Gn({
		id: "fluent-vue",
		label: "fluent-vue",
		packageName: "fluent-vue",
		homepage: "https://fluent-vue.demivan.me",
		logo: "https://fluent-vue.demivan.me/assets/logo.svg",
		componentStateTypes: ["fluent-vue"],
		app: e,
		settings: {
			components: { label: "Components" },
			showLocalized: {
				defaultValue: !0,
				label: "Mark localized",
				description: "Mark localized components in component tree",
				type: "boolean"
			},
			markMissing: {
				defaultValue: !0,
				label: "Mark missing",
				description: "Mark missing translations in component tree",
				type: "boolean"
			},
			showI18n: {
				defaultValue: !0,
				label: "Mark i18n",
				description: "Mark i18n components in component tree",
				type: "boolean"
			},
			pseudo: { label: "Pseudolocalization" },
			pseudoEnable: {
				defaultValue: !1,
				label: "Enable",
				description: "Enable pseudolocalization",
				type: "boolean"
			},
			pseudoLength: {
				defaultValue: 1,
				label: "Length",
				description: "Pseudolocalization length",
				type: "choice",
				options: [
					{
						label: "100%",
						value: 1
					},
					{
						label: "125%",
						value: 1.25
					},
					{
						label: "150%",
						value: 1.5
					},
					{
						label: "175%",
						value: 1.75
					},
					{
						label: "200%",
						value: 2
					},
					{
						label: "250%",
						value: 2.5
					},
					{
						label: "300%",
						value: 3
					}
				]
			},
			pseudoAccents: {
				defaultValue: !0,
				label: "Accents",
				description: "Enable pseudolocalization accents",
				type: "boolean"
			},
			pseudoPrefix: {
				label: "Prefix",
				type: "text",
				description: "Prefix to wrap translation",
				defaultValue: "["
			},
			pseudoSuffix: {
				label: "Suffix",
				type: "text",
				description: "Suffix to wrap translation",
				defaultValue: "]"
			}
		}
	}, (e) => {
		e.on.visitComponentTree(({ treeNode: n, componentInstance: r }) => {
			let a = e.getSettings();
			a.showI18n && n.name === t.componentName && n.tags.push({
				label: "fluent-vue",
				textColor: 0,
				backgroundColor: 4307075
			}), a.showLocalized && r?.proxy?.$options.fluent != null && n.tags.push({
				label: "localized",
				textColor: 0,
				backgroundColor: 4307075
			});
			let o = i.get(r);
			a.markMissing && o != null && o.size > 0 && n.tags.push({
				label: "missing translations",
				textColor: 16777215,
				backgroundColor: 11534368
			});
		}), e.on.inspectComponent(({ componentInstance: e, instanceData: t }) => {
			let n = i.get(e);
			if (n) for (let e of n.values()) t.state.push({
				type: "Missing translations",
				key: e,
				editable: !1,
				value: { _custom: {
					type: "custom",
					display: "<span style=\"color:#B00020\">Missing</span>"
				} }
			});
			let r = e?.proxy?.$options.fluent;
			if (!r) return;
			let a = s.value;
			for (let [e, n] of Object.entries(r)) {
				let r = a.find((t) => t.locales.includes(e));
				if (r != null) for (let i of n.body) {
					let n = r.hasMessage(i.id);
					t.state.push({
						type: `Component translations (${e})`,
						key: i.id,
						editable: !1,
						value: { _custom: {
							type: "custom",
							display: (i.value ? r.formatPattern(i.value, {}, []) : "") + (n ? "&nbsp;<span style=\"color:#ffa726\">Global</span>" : "")
						} }
					});
				}
			}
		}), e.on.getInspectorTree((e) => {
			e.inspectorId === "fluent-vue-inspector" && (e.rootNodes = [{
				id: "global",
				label: "Global translations"
			}, {
				id: "missing",
				label: "Missing translations"
			}]);
		});
		let a = /* @__PURE__ */ new Set();
		e.on.getInspectorState(async (t) => {
			if (t.inspectorId === "fluent-vue-inspector") {
				if (t.nodeId === "global") {
					t.state = {};
					for (let e of s.value) t.state[e.locales.join(",")] = [...e._messages.entries()].map(([t, n]) => ({
						key: n.id,
						value: n.value ? e.formatPattern(n.value, {}, []) : ""
					}));
				}
				if (t.nodeId === "missing") {
					t.state = {};
					for (let n of s.value) {
						let r = n.locales.join(",");
						for (let [n, o] of i.entries()) for (let i of o) t.state[r] = t.state[r] ?? [], t.state[r].push({
							key: i,
							editable: !0,
							value: { _custom: {
								type: "component",
								value: a.has(n),
								display: await e.getComponentName(n)
							} }
						});
					}
				}
			}
		}), e.on.editInspectorState((t) => {
			if (t.inspectorId === "fluent-vue-inspector" && t.nodeId === "missing") {
				let n = t.path[0], [r] = i.entries().find(([e, t]) => t.has(n)) ?? [];
				r != null && (t.state.value ? (a.add(r), e.highlightElement(r)) : (a.delete(r), e.unhighlightElement()));
			}
		});
		function o(e) {
			r = e.pseudoEnable ? (t) => li(t, {
				prefix: e.pseudoPrefix ?? "",
				suffix: e.pseudoSuffix ?? "",
				accents: e.pseudoAccents ?? !1,
				expand: e.pseudoLength ?? 1
			}) : void 0, n.bundles = [...n.bundles];
		}
		e.on.setPluginSettings((e) => {
			o(e.settings);
		}), o(e.getSettings()), e.addInspector({
			id: "fluent-vue-inspector",
			label: "fluent-vue"
		});
	});
}
function di(e) {
	Ne(typeof DOMParser < "u", "DOMParser is not available. Please provide a custom parseMarkup function.");
	let t = new DOMParser().parseFromString(e, "text/html");
	return Array.from(t.body.childNodes);
}
function fi(e) {
	A(`Could not find translation for key [${e}]`);
}
function pi(e) {
	return e.warnMissing === !0 || e.warnMissing == null ? fi : e.warnMissing === !1 ? () => {} : e.warnMissing;
}
function mi(e) {
	return {
		warnMissing: pi(e),
		parseMarkup: e.parseMarkup ?? di,
		mapVariable: e.mapVariable,
		globalFormatName: e.globals?.functions?.format ?? "$t",
		globalFormatAttrsName: e.globals?.functions?.formatAttrs ?? "$ta",
		directiveName: e.globals?.directive ?? "t",
		componentName: e.globals?.component ?? "i18n",
		componentTag: e.componentTag ?? "span"
	};
}
var hi = /-(\w)/g;
function gi(e) {
	return e.replace(hi, (e, t) => t.toUpperCase());
}
var _i = /<|&#?\w+;/;
function vi(e, t) {
	return (0, x.defineComponent)({
		name: e.componentName,
		props: {
			path: {
				type: String,
				required: !0
			},
			tag: {
				type: [String, Boolean],
				default: e.componentTag
			},
			args: {
				type: Object,
				default: () => ({})
			},
			html: {
				type: Boolean,
				default: !1
			},
			noTag: {
				type: Boolean,
				default: !1
			}
		},
		setup(e, { slots: n, attrs: r }) {
			let i = (0, x.getCurrentInstance)(), a = j(t, i?.vnode?.ctx ?? i?.proxy?.$vnode?.context), o = (0, x.computed)(() => {
				let t = Object.assign({}, e.args, ...Object.keys(n).map((e) => ({ [e]: `\uFFFF\uFFFE${e}\uFFFF` }))), r = a.formatWithAttrs(e.path, t), i = Object.fromEntries(Object.entries(r.attributes).map(([e, t]) => [gi(e), t]));
				return {
					value: r.value,
					attributes: i
				};
			}), s = (e) => e?.split("￿").map((e) => e.startsWith("￾") ? n[e.replace("￾", "")](o.value.attributes) : e), c = (e) => {
				if (e.nodeType === 3) return s(e.nodeValue);
				if (e.nodeType === 1) {
					let t = e;
					return (0, x.h)(t.nodeName.toLowerCase(), { ...Object.fromEntries(Array.from(t.attributes).map((e) => [e.name, e.value])) }, Array.from(t.childNodes).map((e) => c(e)));
				}
				return A(`Unsupported node type: ${e.nodeType}. If you need support for it, please, create an issue in fluent-vue repository.`), [];
			}, l = (0, x.computed)(() => !e.html || !_i.test(o.value.value) ? s(o.value.value) : a.options.parseMarkup(o.value.value).map(c));
			return () => e.tag === !1 || e.noTag ? l.value : (0, x.h)(e.tag, { ...r }, l.value);
		}
	});
}
var yi = {
	global: [
		"title",
		"aria-label",
		"aria-valuetext",
		"aria-moz-hint"
	],
	a: ["download"],
	area: ["download", "alt"],
	input: ["alt", "placeholder"],
	menuitem: ["label"],
	menu: ["label"],
	optgroup: ["label"],
	option: ["label"],
	track: ["label"],
	img: ["alt"],
	textarea: ["placeholder"],
	th: ["abbr"]
};
function bi(e, t, n = []) {
	if (n.includes(e)) return !0;
	let r = e.toLowerCase(), i = t.localName;
	if (yi.global.includes(r)) return !0;
	if (yi[i] == null) return !1;
	if (yi[i].includes(r)) return !0;
	if (t.namespaceURI === "http://www.w3.org/1999/xhtml" && i === "input" && r === "value") {
		let e = t.type.toLowerCase();
		if (e === "submit" || e === "button" || e === "reset") return !0;
	}
	return !1;
}
function xi(e, t, n) {
	let r = n.arg;
	if (r === void 0) {
		A("v-t directive is missing arg with translation key");
		return;
	}
	let i = t.formatWithAttrs(r, n.value);
	i.hasValue && (e.textContent = i.value);
	let a = Object.keys(n.modifiers);
	for (let [t, n] of Object.entries(i.attributes)) bi(t, e, a) ? e.setAttribute(t, n) : A(`Attribute '${t}' on element <${e.tagName.toLowerCase()}> is not localizable. Remove it from the translation. Translation key: ${r}`);
}
function Si(e) {
	return {
		mounted(t, n) {
			(0, x.watchEffect)(() => {
				xi(t, j(e, n.instance), n);
			});
		},
		updated(t, n) {
			xi(t, j(e, n.instance), n);
		},
		getSSRProps(t) {
			let n = j(e, t.instance);
			if (t.arg === void 0) return A("v-t directive is missing arg with translation key"), {};
			let r = n.formatWithAttrs(t.arg, t.value), i = r.attributes;
			return r.hasValue && (i.textContent = r.value), i;
		}
	};
}
function Ci(e) {
	let t = (0, x.shallowRef)(e.bundles), n = mi(e), r = new Pe(t, n);
	return {
		get bundles() {
			return t.value;
		},
		set bundles(e) {
			t.value = e;
		},
		mergedWith: (e) => Ie(r, e),
		format: r.format.bind(r),
		formatAttrs: r.formatAttrs.bind(r),
		formatWithAttrs: r.formatWithAttrs.bind(r),
		$t: r.format.bind(r),
		$ta: r.formatAttrs.bind(r),
		install(e) {
			{
				let t = e;
				process.env.NODE_ENV !== "production" && ui(t, n, this), t.provide(Le, r), t.config.globalProperties[n.globalFormatName] = function(e, t) {
					return j(r, (0, x.getCurrentInstance)()?.proxy).format(e, t);
				}, t.config.globalProperties[n.globalFormatAttrsName] = function(e, t) {
					return j(r, (0, x.getCurrentInstance)()?.proxy).formatAttrs(e, t);
				}, t.directive(n.directiveName, Si(r));
			}
			e.component(n.componentName, vi(n, r));
		}
	};
}
var Q = n({
	__name: "EmptyComponent",
	setup(e) {
		let { $t: n } = Re();
		return (e, r) => (a(), t("div", null, s(c(n)("header-home")), 1));
	}
});
typeof l == "function" && l(Q), typeof u == "function" && u(Q), typeof d == "function" && d(Q), typeof f == "function" && f(Q), typeof ee == "function" && ee(Q), typeof p == "function" && p(Q), typeof m == "function" && m(Q), typeof h == "function" && h(Q), typeof g == "function" && g(Q), typeof _ == "function" && _(Q);
var wi = Q, $ = n({
	__name: "LibWrapper",
	setup(e) {
		let t = Ci({ bundles: [] }), n = r()?.appContext.app;
		return n && !n.config.globalProperties.$fluent && n.use(t), (e, t) => o(e.$slots, "default");
	}
});
typeof l == "function" && l($), typeof u == "function" && u($), typeof d == "function" && d($), typeof f == "function" && f($), typeof ee == "function" && ee($), typeof p == "function" && p($), typeof m == "function" && m($), typeof h == "function" && h($), typeof g == "function" && g($), typeof _ == "function" && _($);
var Ti = $, Ei = { render() {
	return i(Ti, {}, { default: () => i(wi) });
} };
export { Ei as default };
