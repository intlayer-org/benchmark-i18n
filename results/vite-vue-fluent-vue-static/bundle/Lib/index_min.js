import * as e from "vue";
import { createElementBlock as t, defineComponent as n, getCurrentInstance as r, h as i, openBlock as a, renderSlot as o, toDisplayString as s } from "vue";
import c from "../src/locales/en.ftl?vue&type=fluent&index=0&src=true&locale=en&lang.fluent";
import l from "../src/locales/fr.ftl?vue&type=fluent&index=1&src=true&locale=fr&lang.fluent";
import u from "../src/locales/es.ftl?vue&type=fluent&index=2&src=true&locale=es&lang.fluent";
import d from "../src/locales/de.ftl?vue&type=fluent&index=3&src=true&locale=de&lang.fluent";
import f from "../src/locales/it.ftl?vue&type=fluent&index=4&src=true&locale=it&lang.fluent";
import p from "../src/locales/pt.ftl?vue&type=fluent&index=5&src=true&locale=pt&lang.fluent";
import m from "../src/locales/zh.ftl?vue&type=fluent&index=6&src=true&locale=zh&lang.fluent";
import h from "../src/locales/ja.ftl?vue&type=fluent&index=7&src=true&locale=ja&lang.fluent";
import g from "../src/locales/ko.ftl?vue&type=fluent&index=8&src=true&locale=ko&lang.fluent";
import _ from "../src/locales/ru.ftl?vue&type=fluent&index=9&src=true&locale=ru&lang.fluent";
var v = Object.defineProperty, y = Object.getOwnPropertyDescriptor, ee = Object.getOwnPropertyNames, te = Object.prototype.hasOwnProperty, ne = (e, t) => {
	let n = {};
	for (var r in e) v(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || v(n, Symbol.toStringTag, { value: "Module" }), n;
}, b = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = ee(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !te.call(e, s) && s !== n && v(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = y(t, s)) || r.enumerable
	});
	return e;
}, x = (e, t, n) => (b(e, t, "default"), n && b(n, t, "default")), S = ne({
	Vue: () => e,
	Vue2: () => void 0,
	del: () => T,
	install: () => w,
	isVue2: () => !1,
	isVue3: () => !0,
	set: () => re
});
import * as C from "vue";
x(S, C);
function w() {}
function re(e, t, n) {
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
}, k = class e extends E {
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
}, ie = 100, ae = "⁨", oe = "⁩";
function se(e, t, n) {
	return n === t || n instanceof O && t instanceof O && n.value === t.value || t instanceof O && typeof n == "string" && n === e.memoizeIntlObject(Intl.PluralRules, t.opts).select(t.value);
}
function ce(e, t, n) {
	return t[n] ? A(e, t[n].value) : (e.reportError(/* @__PURE__ */ RangeError("No default")), new D());
}
function le(e, t) {
	let n = [], r = Object.create(null);
	for (let i of t) i.type === "narg" ? r[i.name] = ue(e, i.value) : n.push(ue(e, i));
	return {
		positional: n,
		named: r
	};
}
function ue(e, t) {
	switch (t.type) {
		case "str": return t.value;
		case "num": return new O(t.value, { minimumFractionDigits: t.precision });
		case "var": return de(e, t);
		case "mesg": return fe(e, t);
		case "term": return pe(e, t);
		case "func": return me(e, t);
		case "select": return he(e, t);
		default: return new D();
	}
}
function de(e, { name: t }) {
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
		case "object": if (k.supportsValue(n)) return new k(n);
		default: return e.reportError(/* @__PURE__ */ TypeError(`Variable type not supported: $${t}, ${typeof n}`)), new D(`$${t}`);
	}
}
function fe(e, { name: t, attr: n }) {
	let r = e.bundle._messages.get(t);
	if (!r) return e.reportError(/* @__PURE__ */ ReferenceError(`Unknown message: ${t}`)), new D(t);
	if (n) {
		let i = r.attributes[n];
		return i ? A(e, i) : (e.reportError(/* @__PURE__ */ ReferenceError(`Unknown attribute: ${n}`)), new D(`${t}.${n}`));
	}
	return r.value ? A(e, r.value) : (e.reportError(/* @__PURE__ */ ReferenceError(`No value: ${t}`)), new D(t));
}
function pe(e, { name: t, attr: n, args: r }) {
	let i = `-${t}`, a = e.bundle._terms.get(i);
	if (!a) return e.reportError(/* @__PURE__ */ ReferenceError(`Unknown term: ${i}`)), new D(i);
	if (n) {
		let t = a.attributes[n];
		if (t) {
			e.params = le(e, r).named;
			let n = A(e, t);
			return e.params = null, n;
		}
		return e.reportError(/* @__PURE__ */ ReferenceError(`Unknown attribute: ${n}`)), new D(`${i}.${n}`);
	}
	e.params = le(e, r).named;
	let o = A(e, a.value);
	return e.params = null, o;
}
function me(e, { name: t, args: n }) {
	let r = e.bundle._functions[t];
	if (!r) return e.reportError(/* @__PURE__ */ ReferenceError(`Unknown function: ${t}()`)), new D(`${t}()`);
	if (typeof r != "function") return e.reportError(/* @__PURE__ */ TypeError(`Function ${t}() is not callable`)), new D(`${t}()`);
	try {
		let t = le(e, n);
		return r(t.positional, t.named);
	} catch (n) {
		return e.reportError(n), new D(`${t}()`);
	}
}
function he(e, { selector: t, variants: n, star: r }) {
	let i = ue(e, t);
	if (i instanceof D) return ce(e, n, r);
	for (let t of n) if (se(e, i, ue(e, t.key))) return A(e, t.value);
	return ce(e, n, r);
}
function ge(e, t) {
	if (e.dirty.has(t)) return e.reportError(/* @__PURE__ */ RangeError("Cyclic reference")), new D();
	e.dirty.add(t);
	let n = [], r = e.bundle._useIsolating && t.length > 1;
	for (let i of t) {
		if (typeof i == "string") {
			n.push(e.bundle._transform(i));
			continue;
		}
		if (e.placeables++, e.placeables > ie) throw e.dirty.delete(t), RangeError(`Too many placeables expanded: ${e.placeables}, max allowed is ${ie}`);
		r && n.push(ae), n.push(ue(e, i).toString(e)), r && n.push(oe);
	}
	return e.dirty.delete(t), n.join("");
}
function A(e, t) {
	return typeof t == "string" ? e.bundle._transform(t) : ge(e, t);
}
var _e = class {
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
function ve(e, t) {
	let n = Object.create(null);
	for (let [r, i] of Object.entries(e)) t.includes(r) && (n[r] = i.valueOf());
	return n;
}
var ye = [
	"unitDisplay",
	"currencyDisplay",
	"useGrouping",
	"minimumIntegerDigits",
	"minimumFractionDigits",
	"maximumFractionDigits",
	"minimumSignificantDigits",
	"maximumSignificantDigits"
];
function be(e, t) {
	let n = e[0];
	if (n instanceof D) return new D(`NUMBER(${n.valueOf()})`);
	if (n instanceof O) return new O(n.valueOf(), {
		...n.opts,
		...ve(t, ye)
	});
	if (n instanceof k) return new O(n.toNumber(), { ...ve(t, ye) });
	throw TypeError("Invalid argument to NUMBER");
}
var xe = [
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
function Se(e, t) {
	let n = e[0];
	if (n instanceof D) return new D(`DATETIME(${n.valueOf()})`);
	if (n instanceof k || n instanceof O) return new k(n, ve(t, xe));
	throw TypeError("Invalid argument to DATETIME");
}
var Ce = /* @__PURE__ */ new Map();
function we(e) {
	let t = Array.isArray(e) ? e.join(" ") : e, n = Ce.get(t);
	return n === void 0 && (n = /* @__PURE__ */ new Map(), Ce.set(t, n)), n;
}
var Te = class {
	constructor(e, { functions: t, useIsolating: n = !0, transform: r = (e) => e } = {}) {
		this._terms = /* @__PURE__ */ new Map(), this._messages = /* @__PURE__ */ new Map(), this.locales = Array.isArray(e) ? e : [e], this._functions = {
			NUMBER: be,
			DATETIME: Se,
			...t
		}, this._useIsolating = n, this._transform = r, this._intls = we(e);
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
		let r = new _e(this, n, t);
		try {
			return ge(r, e).toString(r);
		} catch (e) {
			if (r.errors && e instanceof Error) return r.errors.push(e), new D().toString(r);
			throw e;
		}
	}
}, Ee = class extends Array {
	static from(e) {
		return e instanceof this ? e : new this(e);
	}
}, De = class extends Ee {
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
function Oe(e, t) {
	return Array.isArray(t) ? t.map((t) => ke(e, t)) : ke(e, t);
}
function ke(e, t) {
	for (let n of e) if (n.hasMessage(t)) return n;
	return null;
}
function Ae(e, t) {
	let n = new Te(e, {
		functions: t._functions,
		useIsolating: t._useIsolating,
		transform: t._transform
	});
	return n._terms = new Map(t._terms), n._messages = new Map(t._messages), n;
}
function je(e, t) {
	if (!e) throw Error(`[fluent-vue] ${t}`);
}
function j(e, ...t) {
	console.warn(`[fluent-vue] ${e}`, ...t);
}
var Me = class {
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
		return Oe(this.bundles.value, e);
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
		for (let e of i) j(`Error when formatting message with key [${t}]`, e);
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
function* Ne(e, t) {
	for (let n of e) yield* t(n);
}
function M(e, t, n = !1) {
	if (t == null) return e;
	let r = t.$options ?? t.type;
	if (r._fluent != null) return r._fluent;
	let i = Pe(e, r.fluent);
	return !n && !(typeof window > "u") && (r._fluent = i), i;
}
function Pe(e, t) {
	return t == null ? e : new Me((0, S.computed)(() => De.from(Ne(e.bundles.value, (e) => Object.entries(t).map(([t, n]) => {
		let r = t.split(/[\s+,]/);
		if (e.locales.filter((e) => r.includes(e)).length === 0) return e;
		let i = Ae(r, e);
		return i.addResource(n, { allowOverrides: !0 }), i;
	})))), e.options);
}
var Fe = Symbol("root-context");
function Ie() {
	let e = (0, S.getCurrentInstance)();
	je(e != null, "useFluent called outside of setup");
	let t = (0, S.inject)(Fe, void 0);
	return je(t != null, "useFluent called without installing plugin"), M(t, e.proxy, !0);
}
var Le = Object.create, Re = Object.defineProperty, ze = Object.getOwnPropertyDescriptor, Be = Object.getOwnPropertyNames, Ve = Object.getPrototypeOf, He = Object.prototype.hasOwnProperty, Ue = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), We = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = Be(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !He.call(e, s) && s !== n && Re(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = ze(t, s)) || r.enumerable
	});
	return e;
}, Ge = (e, t, n) => (n = e == null ? {} : Le(Ve(e)), We(t || !e || !e.__esModule ? Re(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), Ke = typeof navigator < "u", N = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
N.chrome !== void 0 && N.chrome.devtools, Ke && (N.self, N.top), typeof navigator < "u" && navigator.userAgent?.toLowerCase().includes("electron"), typeof window < "u" && window.__NUXT__;
var qe = Ge(Ue(((e, t) => {
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
}))(), 1), Je = /(?:^|[-_/])(\w)/g;
function Ye(e, t) {
	return t ? t.toUpperCase() : "";
}
function Xe(e) {
	return e && `${e}`.replace(Je, Ye);
}
function Ze(e, t) {
	let n = e.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
	n.endsWith(`index${t}`) && (n = n.replace(`/index${t}`, t));
	let r = n.lastIndexOf("/"), i = n.substring(r + 1);
	if (t) {
		let e = i.lastIndexOf(t);
		return i.substring(0, e);
	}
	return "";
}
var Qe = (0, qe.default)({ circles: !0 }), $e = { trailing: !0 };
function P(e, t = 25, n = {}) {
	if (n = {
		...$e,
		...n
	}, !Number.isFinite(t)) throw TypeError("Expected `wait` to be a finite number");
	let r, i, a = [], o, s, c = (t, r) => (o = et(e, t, r), o.finally(() => {
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
async function et(e, t, n) {
	return await e.apply(t, n);
}
function tt(e, t = {}, n) {
	for (let r in e) {
		let i = e[r], a = n ? `${n}:${r}` : r;
		typeof i == "object" && i ? tt(i, t, a) : typeof i == "function" && (t[a] = i);
	}
	return t;
}
var nt = { run: (e) => e() }, rt = console.createTask === void 0 ? () => nt : console.createTask;
function it(e, t) {
	let n = rt(t.shift());
	return e.reduce((e, r) => e.then(() => n.run(() => r(...t))), Promise.resolve());
}
function at(e, t) {
	let n = rt(t.shift());
	return Promise.all(e.map((e) => n.run(() => e(...t))));
}
function ot(e, t) {
	for (let n of [...e]) n(t);
}
var st = class {
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
		let t = tt(e), n = Object.keys(t).map((e) => this.hook(e, t[e]));
		return () => {
			for (let e of n.splice(0, n.length)) e();
		};
	}
	removeHooks(e) {
		let t = tt(e);
		for (let e in t) this.removeHook(e, t[e]);
	}
	removeAllHooks() {
		for (let e in this._hooks) delete this._hooks[e];
	}
	callHook(e, ...t) {
		return t.unshift(e), this.callHookWith(it, e, ...t);
	}
	callHookParallel(e, ...t) {
		return t.unshift(e), this.callHookWith(at, e, ...t);
	}
	callHookWith(e, t, ...n) {
		let r = this._before || this._after ? {
			name: t,
			args: n,
			context: {}
		} : void 0;
		this._before && ot(this._before, r);
		let i = e(t in this._hooks ? [...this._hooks[t]] : [], n);
		return i instanceof Promise ? i.finally(() => {
			this._after && r && ot(this._after, r);
		}) : (this._after && r && ot(this._after, r), i);
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
function ct() {
	return new st();
}
var lt = Object.create, ut = Object.defineProperty, dt = Object.getOwnPropertyDescriptor, ft = Object.getOwnPropertyNames, pt = Object.getPrototypeOf, mt = Object.prototype.hasOwnProperty, ht = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), gt = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = ft(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !mt.call(e, s) && s !== n && ut(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = dt(t, s)) || r.enumerable
	});
	return e;
}, _t = (e, t, n) => (n = e == null ? {} : lt(pt(e)), gt(t || !e || !e.__esModule ? ut(n, "default", {
	value: e,
	enumerable: !0
}) : n, e));
function vt(e) {
	if (typeof e == "function") return e.displayName || e.name || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || "";
	let t = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
	return t === "index" && e.__file?.endsWith("index.vue") ? "" : t;
}
function yt(e) {
	let t = e.__file;
	if (t) return Xe(Ze(t, ".vue"));
}
function bt(e, t) {
	return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function xt(e) {
	if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__) return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
	if (e.root) return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function St(e) {
	let t = e.subTree?.type, n = xt(e);
	return n ? n?.types?.Fragment === t : !1;
}
function Ct(e) {
	let t = vt(e?.type || {});
	if (t) return t;
	if (e?.root === e) return "Root";
	for (let t in e.parent?.type?.components) if (e.parent.type.components[t] === e?.type) return bt(e, t);
	for (let t in e.appContext?.components) if (e.appContext.components[t] === e?.type) return bt(e, t);
	return yt(e?.type || {}) || "Anonymous Component";
}
function wt(e) {
	return `${e?.appContext?.app?.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__ ?? 0}:${e === e?.root ? "root" : e.uid}`;
}
function Tt(e, t) {
	return t ||= `${e.id}:root`, e.instanceMap.get(t) || e.instanceMap.get(":root");
}
function Et() {
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
var Dt;
function Ot(e) {
	return Dt ||= document.createRange(), Dt.selectNode(e), Dt.getBoundingClientRect();
}
function kt(e) {
	let t = Et();
	if (!e.children) return t;
	for (let n = 0, r = e.children.length; n < r; n++) {
		let r = e.children[n], i;
		if (r.component) i = F(r.component);
		else if (r.el) {
			let e = r.el;
			e.nodeType === 1 || e.getBoundingClientRect ? i = e.getBoundingClientRect() : e.nodeType === 3 && e.data.trim() && (i = Ot(e));
		}
		i && At(t, i);
	}
	return t;
}
function At(e, t) {
	return (!e.top || t.top < e.top) && (e.top = t.top), (!e.bottom || t.bottom > e.bottom) && (e.bottom = t.bottom), (!e.left || t.left < e.left) && (e.left = t.left), (!e.right || t.right > e.right) && (e.right = t.right), e;
}
var jt = {
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	width: 0,
	height: 0
};
function F(e) {
	let t = e.subTree.el;
	return typeof window > "u" ? jt : St(e) ? kt(e.subTree) : t?.nodeType === 1 ? t?.getBoundingClientRect() : e.subTree.component ? F(e.subTree.component) : jt;
}
function Mt(e) {
	return St(e) ? Nt(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function Nt(e) {
	if (!e.children) return [];
	let t = [];
	return e.children.forEach((e) => {
		e.component ? t.push(...Mt(e.component)) : e?.el && t.push(e.el);
	}), t;
}
var Pt = "__vue-devtools-component-inspector__", Ft = "__vue-devtools-component-inspector__card__", It = "__vue-devtools-component-inspector__name__", Lt = "__vue-devtools-component-inspector__indicator__", Rt = {
	display: "block",
	zIndex: 2147483640,
	position: "fixed",
	backgroundColor: "#42b88325",
	border: "1px solid #42b88350",
	borderRadius: "5px",
	transition: "all 0.1s ease-in",
	pointerEvents: "none"
}, zt = {
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
}, Bt = {
	display: "inline-block",
	fontWeight: 400,
	fontStyle: "normal",
	fontSize: "12px",
	opacity: .7
};
function I() {
	return document.getElementById(Pt);
}
function Vt() {
	return document.getElementById(Ft);
}
function Ht() {
	return document.getElementById(Lt);
}
function Ut() {
	return document.getElementById(It);
}
function Wt(e) {
	return {
		left: `${Math.round(e.left * 100) / 100}px`,
		top: `${Math.round(e.top * 100) / 100}px`,
		width: `${Math.round(e.width * 100) / 100}px`,
		height: `${Math.round(e.height * 100) / 100}px`
	};
}
function Gt(e) {
	let t = document.createElement("div");
	t.id = e.elementId ?? Pt, Object.assign(t.style, {
		...Rt,
		...Wt(e.bounds),
		...e.style
	});
	let n = document.createElement("span");
	n.id = Ft, Object.assign(n.style, {
		...zt,
		top: e.bounds.top < 35 ? 0 : "-35px"
	});
	let r = document.createElement("span");
	r.id = It, r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
	let i = document.createElement("i");
	return i.id = Lt, i.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(i.style, Bt), n.appendChild(r), n.appendChild(i), t.appendChild(n), document.body.appendChild(t), t;
}
function Kt(e) {
	let t = I(), n = Vt(), r = Ut(), i = Ht();
	t && (Object.assign(t.style, {
		...Rt,
		...Wt(e.bounds)
	}), Object.assign(n.style, { top: e.bounds.top < 35 ? 0 : "-35px" }), r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, i.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function qt(e) {
	let t = F(e);
	if (!t.width && !t.height) return;
	let n = Ct(e);
	I() ? Kt({
		bounds: t,
		name: n
	}) : Gt({
		bounds: t,
		name: n
	});
}
function Jt() {
	let e = I();
	e && (e.style.display = "none");
}
var Yt = null;
function Xt(e) {
	let t = e.target;
	if (t) {
		let e = t.__vueParentComponent;
		if (e && (Yt = e, e.vnode.el)) {
			let t = F(e), n = Ct(e);
			I() ? Kt({
				bounds: t,
				name: n
			}) : Gt({
				bounds: t,
				name: n
			});
		}
	}
}
function Zt(e, t) {
	e.preventDefault(), e.stopPropagation(), Yt && t(wt(Yt));
}
var Qt = null;
function $t() {
	Jt(), window.removeEventListener("mouseover", Xt), window.removeEventListener("click", Qt, !0), Qt = null;
}
function en() {
	return window.addEventListener("mouseover", Xt), new Promise((e) => {
		function t(n) {
			n.preventDefault(), n.stopPropagation(), Zt(n, (n) => {
				window.removeEventListener("click", t, !0), Qt = null, window.removeEventListener("mouseover", Xt);
				let r = I();
				r && (r.style.display = "none"), e(JSON.stringify({ id: n }));
			});
		}
		Qt = t, window.addEventListener("click", t, !0);
	});
}
function tn(e) {
	let t = Tt(H.value, e.id);
	if (t) {
		let [n] = Mt(t);
		if (typeof n.scrollIntoView == "function") n.scrollIntoView({ behavior: "smooth" });
		else {
			let e = F(t), n = document.createElement("div"), r = {
				...Wt(e),
				position: "absolute"
			};
			Object.assign(n.style, r), document.body.appendChild(n), n.scrollIntoView({ behavior: "smooth" }), setTimeout(() => {
				document.body.removeChild(n);
			}, 2e3);
		}
		setTimeout(() => {
			let n = F(t);
			if (n.width || n.height) {
				let r = Ct(t), i = I();
				i ? Kt({
					...e,
					name: r,
					bounds: n
				}) : Gt({
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
N.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ ??= !0;
function nn(e) {
	let t = 0, n = setInterval(() => {
		N.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= 5e3 && clearInterval(n);
	}, 30);
}
function rn() {
	let e = N.__VUE_INSPECTOR__, t = e.openInEditor;
	e.openInEditor = async (...n) => {
		e.disable(), t(...n);
	};
}
function an() {
	return new Promise((e) => {
		function t() {
			rn(), e(N.__VUE_INSPECTOR__);
		}
		N.__VUE_INSPECTOR__ ? t() : nn(() => {
			t();
		});
	});
}
var on = function(e) {
	return e.SKIP = "__v_skip", e.IS_REACTIVE = "__v_isReactive", e.IS_READONLY = "__v_isReadonly", e.IS_SHALLOW = "__v_isShallow", e.RAW = "__v_raw", e;
}({});
function sn(e) {
	return !!(e && e[on.IS_READONLY]);
}
function cn(e) {
	return sn(e) ? cn(e[on.RAW]) : !!(e && e[on.IS_REACTIVE]);
}
function ln(e) {
	return !!(e && e.__v_isRef === !0);
}
function L(e) {
	let t = e && e[on.RAW];
	return t ? L(t) : e;
}
var un = class {
	constructor() {
		this.refEditor = new dn();
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
			if ((e.remove || e.newKey) && (Array.isArray(t) ? t.splice(n, 1) : L(t) instanceof Map ? t.delete(n) : L(t) instanceof Set ? t.delete(Array.from(t.values())[n]) : Reflect.deleteProperty(t, n)), !e.remove) {
				let i = t[e.newKey || n];
				this.refEditor.isRef(i) ? this.refEditor.set(i, r) : L(t) instanceof Map ? t.set(e.newKey || n, r) : L(t) instanceof Set ? t.add(r) : t[e.newKey || n] = r;
			}
		};
	}
}, dn = class {
	set(e, t) {
		if (ln(e)) e.value = t;
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
		return ln(e) ? e.value : e;
	}
	isRef(e) {
		return ln(e) || cn(e);
	}
};
new un();
var fn = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function pn() {
	if (typeof window > "u" || !Ke || typeof localStorage > "u" || localStorage === null) return {
		recordingState: !1,
		mouseEventEnabled: !1,
		keyboardEventEnabled: !1,
		componentEventEnabled: !1,
		performanceEventEnabled: !1,
		selected: ""
	};
	let e = localStorage.getItem === void 0 ? null : localStorage.getItem(fn);
	return e ? JSON.parse(e) : {
		recordingState: !1,
		mouseEventEnabled: !1,
		keyboardEventEnabled: !1,
		componentEventEnabled: !1,
		performanceEventEnabled: !1,
		selected: ""
	};
}
N.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS ??= [];
var mn = new Proxy(N.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, { get(e, t, n) {
	return Reflect.get(e, t, n);
} });
function hn(e, t) {
	U.timelineLayersState[t.id] = !1, mn.push({
		...e,
		descriptorId: t.id,
		appRecord: xt(t.app)
	});
}
N.__VUE_DEVTOOLS_KIT_INSPECTOR__ ??= [];
var gn = new Proxy(N.__VUE_DEVTOOLS_KIT_INSPECTOR__, { get(e, t, n) {
	return Reflect.get(e, t, n);
} }), _n = P(() => {
	K.hooks.callHook(B.SEND_INSPECTOR_TO_CLIENT, yn());
});
function vn(e, t) {
	gn.push({
		options: e,
		descriptor: t,
		treeFilterPlaceholder: e.treeFilterPlaceholder ?? "Search tree...",
		stateFilterPlaceholder: e.stateFilterPlaceholder ?? "Search state...",
		treeFilter: "",
		selectedNodeId: "",
		appRecord: xt(t.app)
	}), _n();
}
function yn() {
	return gn.filter((e) => e.descriptor.app === H.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
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
function bn(e, t) {
	return gn.find((n) => n.options.id === e && (!t || n.descriptor.app === t));
}
var R = function(e) {
	return e.VISIT_COMPONENT_TREE = "visitComponentTree", e.INSPECT_COMPONENT = "inspectComponent", e.EDIT_COMPONENT_STATE = "editComponentState", e.GET_INSPECTOR_TREE = "getInspectorTree", e.GET_INSPECTOR_STATE = "getInspectorState", e.EDIT_INSPECTOR_STATE = "editInspectorState", e.INSPECT_TIMELINE_EVENT = "inspectTimelineEvent", e.TIMELINE_CLEARED = "timelineCleared", e.SET_PLUGIN_SETTINGS = "setPluginSettings", e;
}({}), z = function(e) {
	return e.ADD_INSPECTOR = "addInspector", e.SEND_INSPECTOR_TREE = "sendInspectorTree", e.SEND_INSPECTOR_STATE = "sendInspectorState", e.CUSTOM_INSPECTOR_SELECT_NODE = "customInspectorSelectNode", e.TIMELINE_LAYER_ADDED = "timelineLayerAdded", e.TIMELINE_EVENT_ADDED = "timelineEventAdded", e.GET_COMPONENT_INSTANCES = "getComponentInstances", e.GET_COMPONENT_BOUNDS = "getComponentBounds", e.GET_COMPONENT_NAME = "getComponentName", e.COMPONENT_HIGHLIGHT = "componentHighlight", e.COMPONENT_UNHIGHLIGHT = "componentUnhighlight", e;
}({}), B = function(e) {
	return e.SEND_INSPECTOR_TREE_TO_CLIENT = "sendInspectorTreeToClient", e.SEND_INSPECTOR_STATE_TO_CLIENT = "sendInspectorStateToClient", e.SEND_TIMELINE_EVENT_TO_CLIENT = "sendTimelineEventToClient", e.SEND_INSPECTOR_TO_CLIENT = "sendInspectorToClient", e.SEND_ACTIVE_APP_UNMOUNTED_TO_CLIENT = "sendActiveAppUpdatedToClient", e.DEVTOOLS_STATE_UPDATED = "devtoolsStateUpdated", e.DEVTOOLS_CONNECTED_UPDATED = "devtoolsConnectedUpdated", e.ROUTER_INFO_UPDATED = "routerInfoUpdated", e;
}({});
function xn() {
	let e = ct();
	e.hook(z.ADD_INSPECTOR, ({ inspector: e, plugin: t }) => {
		vn(e, t.descriptor);
	});
	let t = P(async ({ inspectorId: t, plugin: n }) => {
		if (!t || !n?.descriptor?.app || U.highPerfModeEnabled) return;
		let r = bn(t, n.descriptor.app), i = {
			app: n.descriptor.app,
			inspectorId: t,
			filter: r?.treeFilter || "",
			rootNodes: []
		};
		await new Promise((t) => {
			e.callHookWith(async (e) => {
				await Promise.all(e.map((e) => e(i))), t();
			}, R.GET_INSPECTOR_TREE);
		}), e.callHookWith(async (e) => {
			await Promise.all(e.map((e) => e({
				inspectorId: t,
				rootNodes: i.rootNodes
			})));
		}, B.SEND_INSPECTOR_TREE_TO_CLIENT);
	}, 120);
	e.hook(z.SEND_INSPECTOR_TREE, t);
	let n = P(async ({ inspectorId: t, plugin: n }) => {
		if (!t || !n?.descriptor?.app || U.highPerfModeEnabled) return;
		let r = bn(t, n.descriptor.app), i = {
			app: n.descriptor.app,
			inspectorId: t,
			nodeId: r?.selectedNodeId || "",
			state: null
		}, a = { currentTab: `custom-inspector:${t}` };
		i.nodeId && await new Promise((t) => {
			e.callHookWith(async (e) => {
				await Promise.all(e.map((e) => e(i, a))), t();
			}, R.GET_INSPECTOR_STATE);
		}), e.callHookWith(async (e) => {
			await Promise.all(e.map((e) => e({
				inspectorId: t,
				nodeId: i.nodeId,
				state: i.state
			})));
		}, B.SEND_INSPECTOR_STATE_TO_CLIENT);
	}, 120);
	return e.hook(z.SEND_INSPECTOR_STATE, n), e.hook(z.CUSTOM_INSPECTOR_SELECT_NODE, ({ inspectorId: e, nodeId: t, plugin: n }) => {
		let r = bn(e, n.descriptor.app);
		r && (r.selectedNodeId = t);
	}), e.hook(z.TIMELINE_LAYER_ADDED, ({ options: e, plugin: t }) => {
		hn(e, t.descriptor);
	}), e.hook(z.TIMELINE_EVENT_ADDED, ({ options: t, plugin: n }) => {
		U.highPerfModeEnabled || !U.timelineLayersState?.[n.descriptor.id] && ![
			"performance",
			"component-event",
			"keyboard",
			"mouse"
		].includes(t.layerId) || e.callHookWith(async (e) => {
			await Promise.all(e.map((e) => e(t)));
		}, B.SEND_TIMELINE_EVENT_TO_CLIENT);
	}), e.hook(z.GET_COMPONENT_INSTANCES, async ({ app: e }) => {
		let t = e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
		if (!t) return null;
		let n = t.id.toString();
		return [...t.instanceMap].filter(([e]) => e.split(":")[0] === n).map(([, e]) => e);
	}), e.hook(z.GET_COMPONENT_BOUNDS, async ({ instance: e }) => F(e)), e.hook(z.GET_COMPONENT_NAME, ({ instance: e }) => Ct(e)), e.hook(z.COMPONENT_HIGHLIGHT, ({ uid: e }) => {
		let t = H.value.instanceMap.get(e);
		t && qt(t);
	}), e.hook(z.COMPONENT_UNHIGHLIGHT, () => {
		Jt();
	}), e;
}
N.__VUE_DEVTOOLS_KIT_APP_RECORDS__ ??= [], N.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ ??= {}, N.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ ??= "", N.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ ??= [], N.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ ??= [];
var V = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function Sn() {
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
		timelineLayersState: pn()
	};
}
N[V] ??= Sn();
var Cn = P((e) => {
	K.hooks.callHook(B.DEVTOOLS_STATE_UPDATED, { state: e });
});
P((e, t) => {
	K.hooks.callHook(B.DEVTOOLS_CONNECTED_UPDATED, {
		state: e,
		oldState: t
	});
});
var wn = new Proxy(N.__VUE_DEVTOOLS_KIT_APP_RECORDS__, { get(e, t, n) {
	return t === "value" ? N.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : N.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
} }), H = new Proxy(N.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, { get(e, t, n) {
	return t === "value" ? N.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? N.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : N.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
} });
function Tn() {
	Cn({
		...N[V],
		appRecords: wn.value,
		activeAppRecordId: H.id,
		tabs: N.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
		commands: N.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
	});
}
function En(e) {
	N.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, Tn();
}
function Dn(e) {
	N.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, Tn();
}
var U = new Proxy(N[V], {
	get(e, t) {
		return t === "appRecords" ? wn : t === "activeAppRecordId" ? H.id : t === "tabs" ? N.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? N.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : N[V][t];
	},
	deleteProperty(e, t) {
		return delete e[t], !0;
	},
	set(e, t, n) {
		return e[t] = n, N[V][t] = n, !0;
	}
});
function On(e = {}) {
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
		} else if (U.vitePluginDetected) {
			let e = N.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__ ?? r;
			N.__VUE_INSPECTOR__.openInEditor(e, t, i, a);
		}
	}
}
N.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ ??= [];
var kn = new Proxy(N.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, { get(e, t, n) {
	return Reflect.get(e, t, n);
} });
function An(e) {
	let t = {};
	return Object.keys(e).forEach((n) => {
		t[n] = e[n].defaultValue;
	}), t;
}
function jn(e) {
	return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function Mn(e) {
	return (kn.find((t) => t[0].id === e && !!t[0]?.settings)?.[0] ?? null)?.settings ?? null;
}
function Nn(e, t) {
	let n = jn(e);
	if (n) {
		let e = localStorage.getItem(n);
		if (e) return JSON.parse(e);
	}
	return An(e ? (kn.find((t) => t[0].id === e)?.[0] ?? null)?.settings ?? {} : t);
}
function Pn(e, t) {
	let n = jn(e);
	localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(An(t)));
}
function Fn(e, t, n) {
	let r = jn(e), i = localStorage.getItem(r), a = JSON.parse(i || "{}"), o = {
		...a,
		[t]: n
	};
	localStorage.setItem(r, JSON.stringify(o)), K.hooks.callHookWith((r) => {
		r.forEach((r) => r({
			pluginId: e,
			key: t,
			oldValue: a[t],
			newValue: n,
			settings: o
		}));
	}, R.SET_PLUGIN_SETTINGS);
}
var W = function(e) {
	return e.APP_INIT = "app:init", e.APP_UNMOUNT = "app:unmount", e.COMPONENT_UPDATED = "component:updated", e.COMPONENT_ADDED = "component:added", e.COMPONENT_REMOVED = "component:removed", e.COMPONENT_EMIT = "component:emit", e.PERFORMANCE_START = "perf:start", e.PERFORMANCE_END = "perf:end", e.ADD_ROUTE = "router:add-route", e.REMOVE_ROUTE = "router:remove-route", e.RENDER_TRACKED = "render:tracked", e.RENDER_TRIGGERED = "render:triggered", e.APP_CONNECTED = "app:connected", e.SETUP_DEVTOOLS_PLUGIN = "devtools-plugin:setup", e;
}({}), G = N.__VUE_DEVTOOLS_HOOK ??= ct(), In = {
	on: {
		vueAppInit(e) {
			G.hook(W.APP_INIT, e);
		},
		vueAppUnmount(e) {
			G.hook(W.APP_UNMOUNT, e);
		},
		vueAppConnected(e) {
			G.hook(W.APP_CONNECTED, e);
		},
		componentAdded(e) {
			return G.hook(W.COMPONENT_ADDED, e);
		},
		componentEmit(e) {
			return G.hook(W.COMPONENT_EMIT, e);
		},
		componentUpdated(e) {
			return G.hook(W.COMPONENT_UPDATED, e);
		},
		componentRemoved(e) {
			return G.hook(W.COMPONENT_REMOVED, e);
		},
		setupDevtoolsPlugin(e) {
			G.hook(W.SETUP_DEVTOOLS_PLUGIN, e);
		},
		perfStart(e) {
			return G.hook(W.PERFORMANCE_START, e);
		},
		perfEnd(e) {
			return G.hook(W.PERFORMANCE_END, e);
		}
	},
	setupDevToolsPlugin(e, t) {
		return G.callHook(W.SETUP_DEVTOOLS_PLUGIN, e, t);
	}
}, Ln = class {
	constructor({ plugin: e, ctx: t }) {
		this.hooks = t.hooks, this.plugin = e;
	}
	get on() {
		return {
			visitComponentTree: (e) => {
				this.hooks.hook(R.VISIT_COMPONENT_TREE, e);
			},
			inspectComponent: (e) => {
				this.hooks.hook(R.INSPECT_COMPONENT, e);
			},
			editComponentState: (e) => {
				this.hooks.hook(R.EDIT_COMPONENT_STATE, e);
			},
			getInspectorTree: (e) => {
				this.hooks.hook(R.GET_INSPECTOR_TREE, e);
			},
			getInspectorState: (e) => {
				this.hooks.hook(R.GET_INSPECTOR_STATE, e);
			},
			editInspectorState: (e) => {
				this.hooks.hook(R.EDIT_INSPECTOR_STATE, e);
			},
			inspectTimelineEvent: (e) => {
				this.hooks.hook(R.INSPECT_TIMELINE_EVENT, e);
			},
			timelineCleared: (e) => {
				this.hooks.hook(R.TIMELINE_CLEARED, e);
			},
			setPluginSettings: (e) => {
				this.hooks.hook(R.SET_PLUGIN_SETTINGS, e);
			}
		};
	}
	notifyComponentUpdate(e) {
		if (U.highPerfModeEnabled) return;
		let t = yn().find((e) => e.packageName === this.plugin.descriptor.packageName);
		if (t?.id) {
			if (e) {
				let t = [
					e.appContext.app,
					e.uid,
					e.parent?.uid,
					e
				];
				G.callHook(W.COMPONENT_UPDATED, ...t);
			} else G.callHook(W.COMPONENT_UPDATED);
			this.hooks.callHook(z.SEND_INSPECTOR_STATE, {
				inspectorId: t.id,
				plugin: this.plugin
			});
		}
	}
	addInspector(e) {
		this.hooks.callHook(z.ADD_INSPECTOR, {
			inspector: e,
			plugin: this.plugin
		}), this.plugin.descriptor.settings && Pn(e.id, this.plugin.descriptor.settings);
	}
	sendInspectorTree(e) {
		U.highPerfModeEnabled || this.hooks.callHook(z.SEND_INSPECTOR_TREE, {
			inspectorId: e,
			plugin: this.plugin
		});
	}
	sendInspectorState(e) {
		U.highPerfModeEnabled || this.hooks.callHook(z.SEND_INSPECTOR_STATE, {
			inspectorId: e,
			plugin: this.plugin
		});
	}
	selectInspectorNode(e, t) {
		this.hooks.callHook(z.CUSTOM_INSPECTOR_SELECT_NODE, {
			inspectorId: e,
			nodeId: t,
			plugin: this.plugin
		});
	}
	visitComponentTree(e) {
		return this.hooks.callHook(R.VISIT_COMPONENT_TREE, e);
	}
	now() {
		return U.highPerfModeEnabled ? 0 : Date.now();
	}
	addTimelineLayer(e) {
		this.hooks.callHook(z.TIMELINE_LAYER_ADDED, {
			options: e,
			plugin: this.plugin
		});
	}
	addTimelineEvent(e) {
		U.highPerfModeEnabled || this.hooks.callHook(z.TIMELINE_EVENT_ADDED, {
			options: e,
			plugin: this.plugin
		});
	}
	getSettings(e) {
		return Nn(e ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
	}
	getComponentInstances(e) {
		return this.hooks.callHook(z.GET_COMPONENT_INSTANCES, { app: e });
	}
	getComponentBounds(e) {
		return this.hooks.callHook(z.GET_COMPONENT_BOUNDS, { instance: e });
	}
	getComponentName(e) {
		return this.hooks.callHook(z.GET_COMPONENT_NAME, { instance: e });
	}
	highlightElement(e) {
		let t = e.__VUE_DEVTOOLS_NEXT_UID__;
		return this.hooks.callHook(z.COMPONENT_HIGHLIGHT, { uid: t });
	}
	unhighlightElement() {
		return this.hooks.callHook(z.COMPONENT_UNHIGHLIGHT);
	}
}, Rn = "__vue_devtool_undefined__", zn = "__vue_devtool_infinity__", Bn = "__vue_devtool_negative_infinity__", Vn = "__vue_devtool_nan__";
Object.entries({
	[Rn]: "undefined",
	[Vn]: "NaN",
	[zn]: "Infinity",
	[Bn]: "-Infinity"
}).reduce((e, [t, n]) => (e[n] = t, e), {}), N.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ ??= /* @__PURE__ */ new Set();
function Hn(e, t) {
	return In.setupDevToolsPlugin(e, t);
}
function Un(e, t) {
	let [n, r] = e;
	if (n.app !== t) return;
	let i = new Ln({
		plugin: {
			setupFn: r,
			descriptor: n
		},
		ctx: K
	});
	n.packageName === "vuex" && i.on.editInspectorState((e) => {
		i.sendInspectorState(e.inspectorId);
	}), r(i);
}
function Wn(e, t) {
	N.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || (!U.highPerfModeEnabled || t?.inspectingComponent) && (N.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), kn.forEach((t) => {
		Un(t, e);
	}));
}
var Gn = "__VUE_DEVTOOLS_ROUTER__", Kn = "__VUE_DEVTOOLS_ROUTER_INFO__";
N[Kn] ??= {
	currentRoute: null,
	routes: []
}, N[Gn] ??= {}, new Proxy(N[Kn], { get(e, t) {
	return N[Kn][t];
} }), new Proxy(N[Gn], { get(e, t) {
	if (t === "value") return N[Gn];
} });
function qn(e) {
	let t = /* @__PURE__ */ new Map();
	return (e?.getRoutes() || []).filter((e) => !t.has(e.path) && t.set(e.path, 1));
}
function Jn(e) {
	return e.map((e) => {
		let { path: t, name: n, children: r, meta: i } = e;
		return r?.length && (r = Jn(r)), {
			path: t,
			name: n,
			children: r,
			meta: i
		};
	});
}
function Yn(e) {
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
			matched: Jn(o)
		};
	}
	return e;
}
function Xn(e, t) {
	function n() {
		let t = e.app?.config.globalProperties.$router, n = Yn(t?.currentRoute.value), r = Jn(qn(t)), i = console.warn;
		console.warn = () => {}, N[Kn] = {
			currentRoute: n ? Qe(n) : {},
			routes: Qe(r)
		}, N[Gn] = t, console.warn = i;
	}
	n(), In.on.componentUpdated(P(() => {
		t.value?.app === e.app && (n(), !U.highPerfModeEnabled && K.hooks.callHook(B.ROUTER_INFO_UPDATED, { state: N[Kn] }));
	}, 200));
}
function Zn(e) {
	return {
		async getInspectorTree(t) {
			let n = {
				...t,
				app: H.value.app,
				rootNodes: []
			};
			return await new Promise((t) => {
				e.callHookWith(async (e) => {
					await Promise.all(e.map((e) => e(n))), t();
				}, R.GET_INSPECTOR_TREE);
			}), n.rootNodes;
		},
		async getInspectorState(t) {
			let n = {
				...t,
				app: H.value.app,
				state: null
			}, r = { currentTab: `custom-inspector:${t.inspectorId}` };
			return await new Promise((t) => {
				e.callHookWith(async (e) => {
					await Promise.all(e.map((e) => e(n, r))), t();
				}, R.GET_INSPECTOR_STATE);
			}), n.state;
		},
		editInspectorState(t) {
			let n = new un(), r = {
				...t,
				app: H.value.app,
				set: (e, r = t.path, i = t.state.value, a) => {
					n.set(e, r, i, a || n.createDefaultSetCallback(t.state));
				}
			};
			e.callHookWith((e) => {
				e.forEach((e) => e(r));
			}, R.EDIT_INSPECTOR_STATE);
		},
		sendInspectorState(t) {
			let n = bn(t);
			e.callHook(z.SEND_INSPECTOR_STATE, {
				inspectorId: t,
				plugin: {
					descriptor: n.descriptor,
					setupFn: () => ({})
				}
			});
		},
		inspectComponentInspector() {
			return en();
		},
		cancelInspectComponentInspector() {
			return $t();
		},
		getComponentRenderCode(e) {
			let t = Tt(H.value, e);
			if (t) return typeof t?.type == "function" ? t.type.toString() : t.render.toString();
		},
		scrollToComponent(e) {
			return tn({ id: e });
		},
		openInEditor: On,
		getVueInspector: an,
		toggleApp(e, t) {
			let n = wn.value.find((t) => t.id === e);
			n && (Dn(e), En(n), Xn(n, H), _n(), Wn(n.app, t));
		},
		inspectDOM(e) {
			let t = Tt(H.value, e);
			if (t) {
				let [e] = Mt(t);
				e && (N.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = e);
			}
		},
		updatePluginSettings(e, t, n) {
			Fn(e, t, n);
		},
		getPluginSettings(e) {
			return {
				options: Mn(e),
				values: Nn(e)
			};
		}
	};
}
N.__VUE_DEVTOOLS_ENV__ ??= { vitePluginDetected: !1 };
var Qn = xn();
N.__VUE_DEVTOOLS_KIT_CONTEXT__ ??= {
	hooks: Qn,
	get state() {
		return {
			...U,
			activeAppRecordId: H.id,
			activeAppRecord: H.value,
			appRecords: wn.value
		};
	},
	api: Zn(Qn)
};
var K = N.__VUE_DEVTOOLS_KIT_CONTEXT__, $n = ht(((e, t) => {
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
			var u = "-", d = "", m = "", h = !0, g = {}, _, v, y, ee, te, ne, b, x, S, C, w, re, T, E, D = "";
			if (typeof e != "string") return "";
			if (typeof t == "string" && (u = t), b = o.en, x = a.en, typeof t == "object") for (w in _ = t.maintainCase || !1, g = t.custom && typeof t.custom == "object" ? t.custom : g, y = +t.truncate > 1 && t.truncate || !1, ee = t.uric || !1, te = t.uricNoSlash || !1, ne = t.mark || !1, h = t.symbols !== !1 && t.lang !== !1, u = t.separator || u, ee && (D += s), te && (D += c), ne && (D += l), b = t.lang && o[t.lang] && h ? o[t.lang] : h ? o.en : {}, x = t.lang && a[t.lang] ? a[t.lang] : t.lang === !1 || t.lang === !0 ? {} : a.en, t.titleCase && typeof t.titleCase.length == "number" && Array.prototype.toString.call(t.titleCase) ? (t.titleCase.forEach(function(e) {
				g[e + ""] = e + "";
			}), v = !0) : v = !!t.titleCase, t.custom && typeof t.custom.length == "number" && Array.prototype.toString.call(t.custom) && t.custom.forEach(function(e) {
				g[e + ""] = e + "";
			}), Object.keys(g).forEach(function(t) {
				var n = t.length > 1 ? RegExp("\\b" + f(t) + "\\b", "gi") : new RegExp(f(t), "gi");
				e = e.replace(n, g[t]);
			}), g) D += w;
			for (D += u, D = f(D), e = e.replace(/(^\s+|\s+$)/g, ""), T = !1, E = !1, C = 0, re = e.length; C < re; C++) w = e[C], p(w, g) ? T = !1 : x[w] ? (w = T && x[w].match(/[A-Za-z0-9]/) ? " " + x[w] : x[w], T = !1) : w in n ? (C + 1 < re && r.indexOf(e[C + 1]) >= 0 ? (m += w, w = "") : E === !0 ? (w = i[m] + n[w], m = "") : w = T && n[w].match(/[A-Za-z0-9]/) ? " " + n[w] : n[w], T = !1, E = !1) : w in i ? (m += w, w = "", C === re - 1 && (w = i[m]), E = !0) : b[w] && !(ee && s.indexOf(w) !== -1) && !(te && c.indexOf(w) !== -1) ? (w = T || d.substr(-1).match(/[A-Za-z0-9]/) ? u + b[w] : b[w], w += e[C + 1] !== void 0 && e[C + 1].match(/[A-Za-z0-9]/) ? u : "", T = !0) : (E === !0 ? (w = i[m] + w, m = "", E = !1) : T && (/[A-Za-z0-9]/.test(w) || d.substr(-1).match(/A-Za-z0-9]/)) && (w = " " + w), T = !1), d += w.replace(RegExp("[^\\w\\s" + D + "_-]", "g"), u);
			return v && (d = d.replace(/(\w)(\S*)/g, function(e, t, n) {
				var r = t.toUpperCase() + (n === null ? "" : n);
				return Object.keys(g).indexOf(r.toLowerCase()) < 0 ? r : r.toLowerCase();
			})), d = d.replace(/\s+/g, u).replace(RegExp("\\" + u + "+", "g"), u).replace(RegExp("(^\\" + u + "+|\\" + u + "+$)", "g"), ""), y && d.length > y && (S = d.charAt(y) === u, d = d.slice(0, y), S || (d = d.slice(0, d.lastIndexOf(u)))), !_ && !v && (d = d.toLowerCase()), d;
		}, d = function(e) {
			return function(t) {
				return u(t, e);
			};
		}, f = function(e) {
			return e.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
		}, p = function(e, t) {
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
_t(ht(((e, t) => {
	t.exports = $n();
}))(), 1), N.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ ??= {
	id: 0,
	appIds: /* @__PURE__ */ new Set()
};
function er(e) {
	U.highPerfModeEnabled = e ?? !U.highPerfModeEnabled, !e && H.value && Wn(H.value.app);
}
function tr(e) {
	U.devtoolsClientDetected = {
		...U.devtoolsClientDetected,
		...e
	}, er(!Object.values(U.devtoolsClientDetected).some(Boolean));
}
N.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ ??= tr;
var nr = class {
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
}, rr = class {
	constructor(e) {
		this.generateIdentifier = e, this.kv = new nr();
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
}, ir = class extends rr {
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
function ar(e) {
	if ("values" in Object) return Object.values(e);
	let t = [];
	for (let n in e) e.hasOwnProperty(n) && t.push(e[n]);
	return t;
}
function or(e, t) {
	let n = ar(e);
	if ("find" in n) return n.find(t);
	let r = n;
	for (let e = 0; e < r.length; e++) {
		let n = r[e];
		if (t(n)) return n;
	}
}
function q(e, t) {
	Object.entries(e).forEach(([e, n]) => t(n, e));
}
function sr(e, t) {
	return e.indexOf(t) !== -1;
}
function cr(e, t) {
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (t(r)) return r;
	}
}
var lr = class {
	constructor() {
		this.transfomers = {};
	}
	register(e) {
		this.transfomers[e.name] = e;
	}
	findApplicable(e) {
		return or(this.transfomers, (t) => t.isApplicable(e));
	}
	findByName(e) {
		return this.transfomers[e];
	}
}, ur = (e) => Object.prototype.toString.call(e).slice(8, -1), dr = (e) => e === void 0, fr = (e) => e === null, pr = (e) => typeof e != "object" || !e || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null || Object.getPrototypeOf(e) === Object.prototype, mr = (e) => pr(e) && Object.keys(e).length === 0, J = (e) => Array.isArray(e), hr = (e) => typeof e == "string", gr = (e) => typeof e == "number" && !isNaN(e), _r = (e) => typeof e == "boolean", vr = (e) => e instanceof RegExp, yr = (e) => e instanceof Map, br = (e) => e instanceof Set, xr = (e) => ur(e) === "Symbol", Sr = (e) => e instanceof Date && !isNaN(e.valueOf()), Cr = (e) => e instanceof Error, wr = (e) => typeof e == "number" && isNaN(e), Tr = (e) => _r(e) || fr(e) || dr(e) || gr(e) || hr(e) || xr(e), Er = (e) => typeof e == "bigint", Dr = (e) => e === Infinity || e === -Infinity, Or = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), kr = (e) => e instanceof URL, Ar = (e) => e.replace(/\./g, "\\."), jr = (e) => e.map(String).map(Ar).join("."), Mr = (e) => {
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
var Nr = [
	Y(dr, "undefined", () => null, () => void 0),
	Y(Er, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
	Y(Sr, "Date", (e) => e.toISOString(), (e) => new Date(e)),
	Y(Cr, "Error", (e, t) => {
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
	Y(vr, "regexp", (e) => "" + e, (e) => {
		let t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
		return new RegExp(t, n);
	}),
	Y(br, "set", (e) => [...e.values()], (e) => new Set(e)),
	Y(yr, "map", (e) => [...e.entries()], (e) => new Map(e)),
	Y((e) => wr(e) || Dr(e), "number", (e) => wr(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
	Y((e) => e === 0 && 1 / e == -Infinity, "number", () => "-0", Number),
	Y(kr, "URL", (e) => e.toString(), (e) => new URL(e))
];
function Pr(e, t, n, r) {
	return {
		isApplicable: e,
		annotation: t,
		transform: n,
		untransform: r
	};
}
var Fr = Pr((e, t) => xr(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
	let r = n.symbolRegistry.getValue(t[1]);
	if (!r) throw Error("Trying to deserialize unknown symbol");
	return r;
}), Ir = [
	Int8Array,
	Uint8Array,
	Int16Array,
	Uint16Array,
	Int32Array,
	Uint32Array,
	Float32Array,
	Float64Array,
	Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {}), Lr = Pr(Or, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
	let n = Ir[t[1]];
	if (!n) throw Error("Trying to deserialize unknown typed array");
	return new n(e);
});
function Rr(e, t) {
	return e?.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
var zr = Pr(Rr, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
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
}), Br = Pr((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
	let r = n.customTransformerRegistry.findByName(t[1]);
	if (!r) throw Error("Trying to deserialize unknown custom value");
	return r.deserialize(e);
}), Vr = [
	zr,
	Fr,
	Br,
	Lr
], Hr = (e, t) => {
	let n = cr(Vr, (n) => n.isApplicable(e, t));
	if (n) return {
		value: n.transform(e, t),
		type: n.annotation(e, t)
	};
	let r = cr(Nr, (n) => n.isApplicable(e, t));
	if (r) return {
		value: r.transform(e, t),
		type: r.annotation
	};
}, Ur = {};
Nr.forEach((e) => {
	Ur[e.annotation] = e;
});
var Wr = (e, t, n) => {
	if (J(t)) switch (t[0]) {
		case "symbol": return Fr.untransform(e, t, n);
		case "class": return zr.untransform(e, t, n);
		case "custom": return Br.untransform(e, t, n);
		case "typed-array": return Lr.untransform(e, t, n);
		default: throw Error("Unknown transformation: " + t);
	}
	else {
		let r = Ur[t];
		if (!r) throw Error("Unknown transformation: " + t);
		return r.untransform(e, n);
	}
}, X = (e, t) => {
	if (t > e.size) throw Error("index out of bounds");
	let n = e.keys();
	for (; t > 0;) n.next(), t--;
	return n.next().value;
};
function Gr(e) {
	if (sr(e, "__proto__")) throw Error("__proto__ is not allowed as a property");
	if (sr(e, "prototype")) throw Error("prototype is not allowed as a property");
	if (sr(e, "constructor")) throw Error("constructor is not allowed as a property");
}
var Kr = (e, t) => {
	Gr(t);
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (br(e)) e = X(e, +r);
		else if (yr(e)) {
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
}, qr = (e, t, n) => {
	if (Gr(t), t.length === 0) return n(e);
	let r = e;
	for (let e = 0; e < t.length - 1; e++) {
		let n = t[e];
		if (J(r)) {
			let e = +n;
			r = r[e];
		} else if (pr(r)) r = r[n];
		else if (br(r)) {
			let e = +n;
			r = X(r, e);
		} else if (yr(r)) {
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
	if (J(r) ? r[+i] = n(r[+i]) : pr(r) && (r[i] = n(r[i])), br(r)) {
		let e = X(r, +i), t = n(e);
		e !== t && (r.delete(e), r.add(t));
	}
	if (yr(r)) {
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
function Jr(e, t, n = []) {
	if (!e) return;
	if (!J(e)) {
		q(e, (e, r) => Jr(e, t, [...n, ...Mr(r)]));
		return;
	}
	let [r, i] = e;
	i && q(i, (e, r) => {
		Jr(e, t, [...n, ...Mr(r)]);
	}), t(r, n);
}
function Yr(e, t, n) {
	return Jr(t, (t, r) => {
		e = qr(e, r, (e) => Wr(e, t, n));
	}), e;
}
function Xr(e, t) {
	function n(t, n) {
		let r = Kr(e, Mr(n));
		t.map(Mr).forEach((t) => {
			e = qr(e, t, () => r);
		});
	}
	if (J(t)) {
		let [r, i] = t;
		r.forEach((t) => {
			e = qr(e, Mr(t), () => e);
		}), i && q(i, n);
	} else q(t, n);
	return e;
}
var Zr = (e, t) => pr(e) || J(e) || yr(e) || br(e) || Rr(e, t);
function Qr(e, t, n) {
	let r = n.get(e);
	r ? r.push(t) : n.set(e, [t]);
}
function $r(e, t) {
	let n = {}, r;
	return e.forEach((e) => {
		if (e.length <= 1) return;
		t || (e = e.map((e) => e.map(String)).sort((e, t) => e.length - t.length));
		let [i, ...a] = e;
		i.length === 0 ? r = a.map(jr) : n[jr(i)] = a.map(jr);
	}), r ? mr(n) ? [r] : [r, n] : mr(n) ? void 0 : n;
}
var ei = (e, t, n, r, i = [], a = [], o = /* @__PURE__ */ new Map()) => {
	let s = Tr(e);
	if (!s) {
		Qr(e, i, t);
		let n = o.get(e);
		if (n) return r ? { transformedValue: null } : n;
	}
	if (!Zr(e, n)) {
		let t = Hr(e, n), r = t ? {
			transformedValue: t.value,
			annotations: [t.type]
		} : { transformedValue: e };
		return s || o.set(e, r), r;
	}
	if (sr(a, e)) return { transformedValue: null };
	let c = Hr(e, n), l = c?.value ?? e, u = J(l) ? [] : {}, d = {};
	q(l, (s, c) => {
		if (c === "__proto__" || c === "constructor" || c === "prototype") throw Error(`Detected property ${c}. This is a prototype pollution risk, please remove it from your object.`);
		let l = ei(s, t, n, r, [...i, c], [...a, e], o);
		u[c] = l.transformedValue, J(l.annotations) ? d[c] = l.annotations : pr(l.annotations) && q(l.annotations, (e, t) => {
			d[Ar(c) + "." + t] = e;
		});
	});
	let f = mr(d) ? {
		transformedValue: u,
		annotations: c ? [c.type] : void 0
	} : {
		transformedValue: u,
		annotations: c ? [c.type, d] : d
	};
	return s || o.set(e, f), f;
};
function ti(e) {
	return Object.prototype.toString.call(e).slice(8, -1);
}
function ni(e) {
	return ti(e) === "Array";
}
function ri(e) {
	if (ti(e) !== "Object") return !1;
	let t = Object.getPrototypeOf(e);
	return !!t && t.constructor === Object && t === Object.prototype;
}
function ii(e, t, n, r, i) {
	let a = {}.propertyIsEnumerable.call(r, t) ? "enumerable" : "nonenumerable";
	a === "enumerable" && (e[t] = n), i && a === "nonenumerable" && Object.defineProperty(e, t, {
		value: n,
		enumerable: !1,
		writable: !0,
		configurable: !0
	});
}
function ai(e, t = {}) {
	if (ni(e)) return e.map((e) => ai(e, t));
	if (!ri(e)) return e;
	let n = Object.getOwnPropertyNames(e), r = Object.getOwnPropertySymbols(e);
	return [...n, ...r].reduce((n, r) => {
		if (ni(t.props) && !t.props.includes(r)) return n;
		let i = e[r];
		return ii(n, r, ai(i, t), e, t.nonenumerable), n;
	}, {});
}
var Z = class {
	constructor({ dedupe: e = !1 } = {}) {
		this.classRegistry = new ir(), this.symbolRegistry = new rr((e) => e.description ?? ""), this.customTransformerRegistry = new lr(), this.allowedErrorProps = [], this.dedupe = e;
	}
	serialize(e) {
		let t = /* @__PURE__ */ new Map(), n = ei(e, t, this, this.dedupe), r = { json: n.transformedValue };
		n.annotations && (r.meta = {
			...r.meta,
			values: n.annotations
		});
		let i = $r(t, this.dedupe);
		return i && (r.meta = {
			...r.meta,
			referentialEqualities: i
		}), r;
	}
	deserialize(e) {
		let { json: t, meta: n } = e, r = ai(t);
		return n?.values && (r = Yr(r, n.values, this)), n?.referentialEqualities && (r = Xr(r, n.referentialEqualities)), r;
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
Z.defaultInstance = new Z(), Z.serialize = Z.defaultInstance.serialize.bind(Z.defaultInstance), Z.deserialize = Z.defaultInstance.deserialize.bind(Z.defaultInstance), Z.stringify = Z.defaultInstance.stringify.bind(Z.defaultInstance), Z.parse = Z.defaultInstance.parse.bind(Z.defaultInstance), Z.registerClass = Z.defaultInstance.registerClass.bind(Z.defaultInstance), Z.registerSymbol = Z.defaultInstance.registerSymbol.bind(Z.defaultInstance), Z.registerCustom = Z.defaultInstance.registerCustom.bind(Z.defaultInstance), Z.allowErrorProps = Z.defaultInstance.allowErrorProps.bind(Z.defaultInstance), Z.serialize, Z.deserialize, Z.stringify, Z.parse, Z.registerClass, Z.registerCustom, Z.registerSymbol, Z.allowErrorProps, N.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ ??= [], N.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ ??= null, N.__VUE_DEVTOOLS_KIT_RPC_SERVER__ ??= null, N.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ ??= null, N.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ ??= null, N.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ ??= null;
var oi = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", si = "âḃćḋèḟĝḫíĵǩĺṁńŏṗɋŕśṭůṿẘẋẏẓḀḂḈḊḔḞḠḢḬĴḴĻḾŊÕṔɊŔṠṮŨṼẄẌŸƵ";
function ci(e, t) {
	let n = "";
	for (let r = 0; r < e.length * t.expand; r++) {
		let i = e[Math.floor(r / t.expand)], a = t.accents ? si[oi.indexOf(i)] ?? i : i;
		n += a;
	}
	return t.prefix + n + t.suffix;
}
function li(e, t, n) {
	let r, i = /* @__PURE__ */ new Map(), a = t.warnMissing;
	t.warnMissing = (e) => {
		let t = (0, S.getCurrentInstance)();
		a(e), t && (i.set(t, i.get(t) ?? /* @__PURE__ */ new Set()), i.get(t).add(e));
	};
	let o = /* @__PURE__ */ new WeakSet();
	(0, S.watchEffect)(() => {
		let e = n.bundles;
		for (let t of e) {
			if (o.has(t)) continue;
			let e = t._transform;
			t._transform = (t) => (e != null && (t = e(t)), r != null && (t = r(t)), t), o.add(t);
		}
	}, { flush: "sync" });
	let s = (0, S.computed)(() => [...n.bundles].map((e) => {
		let t = new Te(e.locales, {
			functions: e._functions,
			useIsolating: e._useIsolating
		});
		return t._terms = e._terms, t._messages = e._messages, t;
	}));
	Hn({
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
			r = e.pseudoEnable ? (t) => ci(t, {
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
function ui(e) {
	je(typeof DOMParser < "u", "DOMParser is not available. Please provide a custom parseMarkup function.");
	let t = new DOMParser().parseFromString(e, "text/html");
	return Array.from(t.body.childNodes);
}
function di(e) {
	j(`Could not find translation for key [${e}]`);
}
function fi(e) {
	return e.warnMissing === !0 || e.warnMissing == null ? di : e.warnMissing === !1 ? () => {} : e.warnMissing;
}
function pi(e) {
	return {
		warnMissing: fi(e),
		parseMarkup: e.parseMarkup ?? ui,
		mapVariable: e.mapVariable,
		globalFormatName: e.globals?.functions?.format ?? "$t",
		globalFormatAttrsName: e.globals?.functions?.formatAttrs ?? "$ta",
		directiveName: e.globals?.directive ?? "t",
		componentName: e.globals?.component ?? "i18n",
		componentTag: e.componentTag ?? "span"
	};
}
var mi = /-(\w)/g;
function hi(e) {
	return e.replace(mi, (e, t) => t.toUpperCase());
}
var gi = /<|&#?\w+;/;
function _i(e, t) {
	return (0, S.defineComponent)({
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
			let i = (0, S.getCurrentInstance)(), a = M(t, i?.vnode?.ctx ?? i?.proxy?.$vnode?.context), o = (0, S.computed)(() => {
				let t = Object.assign({}, e.args, ...Object.keys(n).map((e) => ({ [e]: `\uFFFF\uFFFE${e}\uFFFF` }))), r = a.formatWithAttrs(e.path, t), i = Object.fromEntries(Object.entries(r.attributes).map(([e, t]) => [hi(e), t]));
				return {
					value: r.value,
					attributes: i
				};
			}), s = (e) => e?.split("￿").map((e) => e.startsWith("￾") ? n[e.replace("￾", "")](o.value.attributes) : e), c = (e) => {
				if (e.nodeType === 3) return s(e.nodeValue);
				if (e.nodeType === 1) {
					let t = e;
					return (0, S.h)(t.nodeName.toLowerCase(), { ...Object.fromEntries(Array.from(t.attributes).map((e) => [e.name, e.value])) }, Array.from(t.childNodes).map((e) => c(e)));
				}
				return j(`Unsupported node type: ${e.nodeType}. If you need support for it, please, create an issue in fluent-vue repository.`), [];
			}, l = (0, S.computed)(() => !e.html || !gi.test(o.value.value) ? s(o.value.value) : a.options.parseMarkup(o.value.value).map(c));
			return () => e.tag === !1 || e.noTag ? l.value : (0, S.h)(e.tag, { ...r }, l.value);
		}
	});
}
var vi = {
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
function yi(e, t, n = []) {
	if (n.includes(e)) return !0;
	let r = e.toLowerCase(), i = t.localName;
	if (vi.global.includes(r)) return !0;
	if (vi[i] == null) return !1;
	if (vi[i].includes(r)) return !0;
	if (t.namespaceURI === "http://www.w3.org/1999/xhtml" && i === "input" && r === "value") {
		let e = t.type.toLowerCase();
		if (e === "submit" || e === "button" || e === "reset") return !0;
	}
	return !1;
}
function bi(e, t, n) {
	let r = n.arg;
	if (r === void 0) {
		j("v-t directive is missing arg with translation key");
		return;
	}
	let i = t.formatWithAttrs(r, n.value);
	i.hasValue && (e.textContent = i.value);
	let a = Object.keys(n.modifiers);
	for (let [t, n] of Object.entries(i.attributes)) yi(t, e, a) ? e.setAttribute(t, n) : j(`Attribute '${t}' on element <${e.tagName.toLowerCase()}> is not localizable. Remove it from the translation. Translation key: ${r}`);
}
function xi(e) {
	return {
		mounted(t, n) {
			(0, S.watchEffect)(() => {
				bi(t, M(e, n.instance), n);
			});
		},
		updated(t, n) {
			bi(t, M(e, n.instance), n);
		},
		getSSRProps(t) {
			let n = M(e, t.instance);
			if (t.arg === void 0) return j("v-t directive is missing arg with translation key"), {};
			let r = n.formatWithAttrs(t.arg, t.value), i = r.attributes;
			return r.hasValue && (i.textContent = r.value), i;
		}
	};
}
function Si(e) {
	let t = (0, S.shallowRef)(e.bundles), n = pi(e), r = new Me(t, n);
	return {
		get bundles() {
			return t.value;
		},
		set bundles(e) {
			t.value = e;
		},
		mergedWith: (e) => Pe(r, e),
		format: r.format.bind(r),
		formatAttrs: r.formatAttrs.bind(r),
		formatWithAttrs: r.formatWithAttrs.bind(r),
		$t: r.format.bind(r),
		$ta: r.formatAttrs.bind(r),
		install(e) {
			{
				let t = e;
				process.env.NODE_ENV !== "production" && li(t, n, this), t.provide(Fe, r), t.config.globalProperties[n.globalFormatName] = function(e, t) {
					return M(r, (0, S.getCurrentInstance)()?.proxy).format(e, t);
				}, t.config.globalProperties[n.globalFormatAttrsName] = function(e, t) {
					return M(r, (0, S.getCurrentInstance)()?.proxy).formatAttrs(e, t);
				}, t.directive(n.directiveName, xi(r));
			}
			e.component(n.componentName, _i(n, r));
		}
	};
}
var Q = n({
	__name: "EmptyComponent",
	setup(e, { expose: t }) {
		t();
		let { $t: n } = Ie(), r = { $t: n };
		return Object.defineProperty(r, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), r;
	}
}), Ci = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
};
function wi(e, n, r, i, o, c) {
	return a(), t("div", null, s(i.$t("header-home")), 1);
}
typeof c == "function" && c(Q), typeof l == "function" && l(Q), typeof u == "function" && u(Q), typeof d == "function" && d(Q), typeof f == "function" && f(Q), typeof p == "function" && p(Q), typeof m == "function" && m(Q), typeof h == "function" && h(Q), typeof g == "function" && g(Q), typeof _ == "function" && _(Q);
var Ti = Ci(Q, [["render", wi], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/scripts/EmptyComponent.vue"]]), $ = n({
	__name: "LibWrapper",
	setup(e, { expose: t }) {
		t();
		let n = Si({ bundles: [] }), i = r()?.appContext.app;
		i && !i.config.globalProperties.$fluent && i.use(n);
		let a = {
			fluent: n,
			app: i
		};
		return Object.defineProperty(a, "__isScriptSetup", {
			enumerable: !1,
			value: !0
		}), a;
	}
});
function Ei(e, t, n, r, i, a) {
	return o(e.$slots, "default");
}
typeof c == "function" && c($), typeof l == "function" && l($), typeof u == "function" && u($), typeof d == "function" && d($), typeof f == "function" && f($), typeof p == "function" && p($), typeof m == "function" && m($), typeof h == "function" && h($), typeof g == "function" && g($), typeof _ == "function" && _($);
var Di = Ci($, [["render", Ei], ["__file", "/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-vue-static/fluent-vue-app/scripts/LibWrapper.vue"]]), Oi = { render() {
	return i(Di, {}, { default: () => i(Ti) });
} };
export { Oi as default };
